import {
    aw as fe,
    r as R,
    x as A,
    b4 as ne,
    y as Yv,
    j as Z,
    A as Zv,
    b as el,
    aX as Jv,
    b5 as tl,
    e as zo,
    U as Qv,
    d as Ui,
    F as ey
} from "./_index.js";
import "./App-30.js";
import {
    u as ty
} from "./useQuery.js";
import {
    R as ry
} from "./BarChartOutlined.js";
import {
    P as ny
} from "./progress.js";
import {
    j as iy,
    b as ay,
    k as zt,
    l as oy,
    m as uy,
    r as jn,
    n as cy,
    g as ly,
    d as sy,
    c as fy,
    h as lp,
    e as hy,
    a as py,
    o as dy
} from "./throttle.js";
import {
    H as vy,
    b as yy,
    v as sp,
    n as fp,
    A as my,
    I as gy,
    J as hp,
    K as by,
    L as xy,
    l as wy,
    B as Oy,
    t as Hi,
    i as Sy,
    y as pp,
    E as Py,
    p as Ay,
    M as _y,
    e as Ey,
    a as Ty
} from "./toNumber.js";
import {
    r as oc,
    i as uc,
    a as Yn,
    b as jy
} from "./toInteger.js";
import {
    i as Bt
} from "./App-2.js";
import "./AccessibleAnchor.js";
import "./Paper.js";
import "./index-5.js";
import "./DeleteOutlined.js";
import "./react-flip-move.es.js";
import "./EmailStage.js";
import "./mobxreact.esm.js";
import "./ContinueButton.js";
import "./ErrorMessage.js";
import "./index-3.js";
import "./index-4.js";
import "./context.js";
import "./NavigateTo.js";
import "./index-12.js";
import "./StarOutlined.js";
import "./index-2.js";
import "./UsergroupAddOutlined.js";
import "./App-4.js";
import "./Shortcut.js";
import "./Names.js";
import "./index-1.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./index-15.js";
import "./colors.js";
import "./motion.js";
import "./useWarningOnMountInDevelopment.js";
import "./index-10.js";
import "./move.js";
import "./Sizes.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./CheckOutlined.js";

function dp(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++) e[t] && (r = dp(e[t])) && (n && (n += " "), n += r)
        } else
            for (r in e) e[r] && (n && (n += " "), n += r);
    return n
}

function te() {
    for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = dp(e)) && (n && (n += " "), n += t);
    return n
}
var My = iy();
const ze = fe(My);
var ga, rl;

function $y() {
    if (rl) return ga;
    rl = 1;

    function e(t) {
        return t == null
    }
    return ga = e, ga
}
var Cy = $y();
const re = fe(Cy);
var Iy = ay();
const Lt = fe(Iy);
var ky = vy();
const Y = fe(ky);
var Ny = yy();
const _r = fe(Ny);
var ba = {
        exports: {}
    },
    ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl;

function Dy() {
    if (nl) return ie;
    nl = 1;
    var e = Symbol.for("react.element"),
        t = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        n = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        o = Symbol.for("react.context"),
        u = Symbol.for("react.server_context"),
        c = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        f = Symbol.for("react.suspense_list"),
        s = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        d = Symbol.for("react.offscreen"),
        y;
    y = Symbol.for("react.module.reference");

    function v(p) {
        if (typeof p == "object" && p !== null) {
            var x = p.$$typeof;
            switch (x) {
                case e:
                    switch (p = p.type, p) {
                        case r:
                        case i:
                        case n:
                        case l:
                        case f:
                            return p;
                        default:
                            switch (p = p && p.$$typeof, p) {
                                case u:
                                case o:
                                case c:
                                case h:
                                case s:
                                case a:
                                    return p;
                                default:
                                    return x
                            }
                    }
                case t:
                    return x
            }
        }
    }
    return ie.ContextConsumer = o, ie.ContextProvider = a, ie.Element = e, ie.ForwardRef = c, ie.Fragment = r, ie.Lazy = h, ie.Memo = s, ie.Portal = t, ie.Profiler = i, ie.StrictMode = n, ie.Suspense = l, ie.SuspenseList = f, ie.isAsyncMode = function() {
        return !1
    }, ie.isConcurrentMode = function() {
        return !1
    }, ie.isContextConsumer = function(p) {
        return v(p) === o
    }, ie.isContextProvider = function(p) {
        return v(p) === a
    }, ie.isElement = function(p) {
        return typeof p == "object" && p !== null && p.$$typeof === e
    }, ie.isForwardRef = function(p) {
        return v(p) === c
    }, ie.isFragment = function(p) {
        return v(p) === r
    }, ie.isLazy = function(p) {
        return v(p) === h
    }, ie.isMemo = function(p) {
        return v(p) === s
    }, ie.isPortal = function(p) {
        return v(p) === t
    }, ie.isProfiler = function(p) {
        return v(p) === i
    }, ie.isStrictMode = function(p) {
        return v(p) === n
    }, ie.isSuspense = function(p) {
        return v(p) === l
    }, ie.isSuspenseList = function(p) {
        return v(p) === f
    }, ie.isValidElementType = function(p) {
        return typeof p == "string" || typeof p == "function" || p === r || p === i || p === n || p === l || p === f || p === d || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === s || p.$$typeof === a || p.$$typeof === o || p.$$typeof === c || p.$$typeof === y || p.getModuleId !== void 0)
    }, ie.typeOf = v, ie
}
var il;

function Ry() {
    return il || (il = 1, ba.exports = Dy()), ba.exports
}
var By = Ry(),
    xa, al;

function vp() {
    if (al) return xa;
    al = 1;
    var e = sp(),
        t = fp(),
        r = "[object Number]";

    function n(i) {
        return typeof i == "number" || t(i) && e(i) == r
    }
    return xa = n, xa
}
var wa, ol;

function Ly() {
    if (ol) return wa;
    ol = 1;
    var e = vp();

    function t(r) {
        return e(r) && r != +r
    }
    return wa = t, wa
}
var qy = Ly();
const Mn = fe(qy);
var Fy = vp();
const Wy = fe(Fy);
var Ye = function(t) {
        return t === 0 ? 0 : t > 0 ? 1 : -1
    },
    $t = function(t) {
        return Lt(t) && t.indexOf("%") === t.length - 1
    },
    B = function(t) {
        return Wy(t) && !Mn(t)
    },
    zy = function(t) {
        return re(t)
    },
    we = function(t) {
        return B(t) || Lt(t)
    },
    Uy = 0,
    Gi = function(t) {
        var r = ++Uy;
        return "".concat(t || "").concat(r)
    },
    qt = function(t, r) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        if (!B(t) && !Lt(t)) return n;
        var a;
        if ($t(t)) {
            var o = t.indexOf("%");
            a = r * parseFloat(t.slice(0, o)) / 100
        } else a = +t;
        return Mn(a) && (a = n), i && a > r && (a = r), a
    },
    mt = function(t) {
        if (!t) return null;
        var r = Object.keys(t);
        return r && r.length ? t[r[0]] : null
    },
    Hy = function(t) {
        if (!Array.isArray(t)) return !1;
        for (var r = t.length, n = {}, i = 0; i < r; i++)
            if (!n[t[i]]) n[t[i]] = !0;
            else return !0;
        return !1
    },
    Xt = function(t, r) {
        return B(t) && B(r) ? function(n) {
            return t + n * (r - t)
        } : function() {
            return r
        }
    };

function Uo(e, t, r) {
    return !e || !e.length ? null : e.find(function(n) {
        return n && (typeof t == "function" ? t(n) : ze(n, t)) === r
    })
}
var Gy = function(t, r) {
    return B(t) && B(r) ? t - r : Lt(t) && Lt(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r))
};

function tr(e, t) {
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1;
    for (var n in t)
        if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1;
    return !0
}

function Ho(e) {
    "@babel/helpers - typeof";
    return Ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ho(e)
}
var Ky = ["viewBox", "children"],
    Xy = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
    ul = ["points", "pathLength"],
    Oa = {
        svg: Ky,
        polygon: ul,
        polyline: ul
    },
    cc = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
    Zn = function(t, r) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var n = t;
        if (R.isValidElement(t) && (n = t.props), !_r(n)) return null;
        var i = {};
        return Object.keys(n).forEach(function(a) {
            cc.includes(a) && (i[a] = r || function(o) {
                return n[a](n, o)
            })
        }), i
    },
    Vy = function(t, r, n) {
        return function(i) {
            return t(r, n, i), null
        }
    },
    Jn = function(t, r, n) {
        if (!_r(t) || Ho(t) !== "object") return null;
        var i = null;
        return Object.keys(t).forEach(function(a) {
            var o = t[a];
            cc.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = Vy(o, r, n))
        }), i
    },
    Yy = ["children"],
    Zy = ["children"];

function cl(e, t) {
    if (e == null) return {};
    var r = Jy(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function Jy(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}
var ll = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
        contextmenu: "onContextMenu",
        dblclick: "onDoubleClick"
    },
    ct = function(t) {
        return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : ""
    },
    sl = null,
    Sa = null,
    lc = function e(t) {
        if (t === sl && Array.isArray(Sa)) return Sa;
        var r = [];
        return R.Children.forEach(t, function(n) {
            re(n) || (By.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n))
        }), Sa = r, sl = t, r
    };

function Ze(e, t) {
    var r = [],
        n = [];
    return Array.isArray(t) ? n = t.map(function(i) {
        return ct(i)
    }) : n = [ct(t)], lc(e).forEach(function(i) {
        var a = ze(i, "type.displayName") || ze(i, "type.name");
        n.indexOf(a) !== -1 && r.push(i)
    }), r
}

function Re(e, t) {
    var r = Ze(e, t);
    return r && r[0]
}
var fl = function(t) {
        if (!t || !t.props) return !1;
        var r = t.props,
            n = r.width,
            i = r.height;
        return !(!B(n) || n <= 0 || !B(i) || i <= 0)
    },
    Qy = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
    em = function(t) {
        return t && t.type && Lt(t.type) && Qy.indexOf(t.type) >= 0
    },
    tm = function(t, r, n, i) {
        var a, o = (a = Oa == null ? void 0 : Oa[i]) !== null && a !== void 0 ? a : [];
        return r.startsWith("data-") || !Y(t) && (i && o.includes(r) || Xy.includes(r)) || n && cc.includes(r)
    },
    ee = function(t, r, n) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var i = t;
        if (R.isValidElement(t) && (i = t.props), !_r(i)) return null;
        var a = {};
        return Object.keys(i).forEach(function(o) {
            var u;
            tm((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o])
        }), a
    },
    Go = function e(t, r) {
        if (t === r) return !0;
        var n = R.Children.count(t);
        if (n !== R.Children.count(r)) return !1;
        if (n === 0) return !0;
        if (n === 1) return hl(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
        for (var i = 0; i < n; i++) {
            var a = t[i],
                o = r[i];
            if (Array.isArray(a) || Array.isArray(o)) {
                if (!e(a, o)) return !1
            } else if (!hl(a, o)) return !1
        }
        return !0
    },
    hl = function(t, r) {
        if (re(t) && re(r)) return !0;
        if (!re(t) && !re(r)) {
            var n = t.props || {},
                i = n.children,
                a = cl(n, Yy),
                o = r.props || {},
                u = o.children,
                c = cl(o, Zy);
            return i && u ? tr(a, c) && Go(i, u) : !i && !u ? tr(a, c) : !1
        }
        return !1
    },
    pl = function(t, r) {
        var n = [],
            i = {};
        return lc(t).forEach(function(a, o) {
            if (em(a)) n.push(a);
            else if (a) {
                var u = ct(a.type),
                    c = r[u] || {},
                    l = c.handler,
                    f = c.once;
                if (l && (!f || !i[u])) {
                    var s = l(a, u, o);
                    n.push(s), i[u] = !0
                }
            }
        }), n
    },
    rm = function(t) {
        var r = t && t.type;
        return r && ll[r] ? ll[r] : null
    },
    nm = function(t, r) {
        return lc(r).indexOf(t)
    },
    im = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

function Ko() {
    return Ko = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ko.apply(this, arguments)
}

function am(e, t) {
    if (e == null) return {};
    var r = om(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function om(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function Xo(e) {
    var t = e.children,
        r = e.width,
        n = e.height,
        i = e.viewBox,
        a = e.className,
        o = e.style,
        u = e.title,
        c = e.desc,
        l = am(e, im),
        f = i || {
            width: r,
            height: n,
            x: 0,
            y: 0
        },
        s = te("recharts-surface", a);
    return A.createElement("svg", Ko({}, ee(l, !0, "svg"), {
        className: s,
        width: r,
        height: n,
        style: o,
        viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
    }), A.createElement("title", null, u), A.createElement("desc", null, c), t)
}
var um = ["children", "className"];

function Vo() {
    return Vo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Vo.apply(this, arguments)
}

function cm(e, t) {
    if (e == null) return {};
    var r = lm(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function lm(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}
var Pe = A.forwardRef(function(e, t) {
        var r = e.children,
            n = e.className,
            i = cm(e, um),
            a = te("recharts-layer", n);
        return A.createElement("g", Vo({
            className: a
        }, ee(i, !0), {
            ref: t
        }), r)
    }),
    lt = function(t, r) {
        for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a]
    },
    Pa, dl;

function sm() {
    if (dl) return Pa;
    dl = 1;

    function e(t, r, n) {
        var i = -1,
            a = t.length;
        r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
        for (var o = Array(a); ++i < a;) o[i] = t[i + r];
        return o
    }
    return Pa = e, Pa
}
var Aa, vl;

function fm() {
    if (vl) return Aa;
    vl = 1;
    var e = sm();

    function t(r, n, i) {
        var a = r.length;
        return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i)
    }
    return Aa = t, Aa
}
var _a, yl;

function yp() {
    if (yl) return _a;
    yl = 1;
    var e = "\\ud800-\\udfff",
        t = "\\u0300-\\u036f",
        r = "\\ufe20-\\ufe2f",
        n = "\\u20d0-\\u20ff",
        i = t + r + n,
        a = "\\ufe0e\\ufe0f",
        o = "\\u200d",
        u = RegExp("[" + o + e + i + a + "]");

    function c(l) {
        return u.test(l)
    }
    return _a = c, _a
}
var Ea, ml;

function hm() {
    if (ml) return Ea;
    ml = 1;

    function e(t) {
        return t.split("")
    }
    return Ea = e, Ea
}
var Ta, gl;

function pm() {
    if (gl) return Ta;
    gl = 1;
    var e = "\\ud800-\\udfff",
        t = "\\u0300-\\u036f",
        r = "\\ufe20-\\ufe2f",
        n = "\\u20d0-\\u20ff",
        i = t + r + n,
        a = "\\ufe0e\\ufe0f",
        o = "[" + e + "]",
        u = "[" + i + "]",
        c = "\\ud83c[\\udffb-\\udfff]",
        l = "(?:" + u + "|" + c + ")",
        f = "[^" + e + "]",
        s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        h = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        d = "\\u200d",
        y = l + "?",
        v = "[" + a + "]?",
        p = "(?:" + d + "(?:" + [f, s, h].join("|") + ")" + v + y + ")*",
        x = v + y + p,
        w = "(?:" + [f + u + "?", u, s, h, o].join("|") + ")",
        b = RegExp(c + "(?=" + c + ")|" + w + x, "g");

    function O(m) {
        return m.match(b) || []
    }
    return Ta = O, Ta
}
var ja, bl;

function dm() {
    if (bl) return ja;
    bl = 1;
    var e = hm(),
        t = yp(),
        r = pm();

    function n(i) {
        return t(i) ? r(i) : e(i)
    }
    return ja = n, ja
}
var Ma, xl;

function vm() {
    if (xl) return Ma;
    xl = 1;
    var e = fm(),
        t = yp(),
        r = dm(),
        n = my();

    function i(a) {
        return function(o) {
            o = n(o);
            var u = t(o) ? r(o) : void 0,
                c = u ? u[0] : o.charAt(0),
                l = u ? e(u, 1).join("") : o.slice(1);
            return c[a]() + l
        }
    }
    return Ma = i, Ma
}
var $a, wl;

function ym() {
    if (wl) return $a;
    wl = 1;
    var e = vm(),
        t = e("toUpperCase");
    return $a = t, $a
}
var mm = ym();
const Ki = fe(mm);

function ue(e) {
    return function() {
        return e
    }
}
const mp = Math.cos,
    Qn = Math.sin,
    Je = Math.sqrt,
    ei = Math.PI,
    Xi = 2 * ei,
    Yo = Math.PI,
    Zo = 2 * Yo,
    jt = 1e-6,
    gm = Zo - jt;

function gp(e) {
    this._ += e[0];
    for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t]
}

function bm(e) {
    let t = Math.floor(e);
    if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
    if (t > 15) return gp;
    const r = 10 ** t;
    return function(n) {
        this._ += n[0];
        for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i]
    }
}
class xm {
    constructor(t) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? gp : bm(t)
    }
    moveTo(t, r) {
        this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`
    }
    closePath() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
    }
    lineTo(t, r) {
        this._append`L${this._x1=+t},${this._y1=+r}`
    }
    quadraticCurveTo(t, r, n, i) {
        this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+i}`
    }
    bezierCurveTo(t, r, n, i, a, o) {
        this._append`C${+t},${+r},${+n},${+i},${this._x1=+a},${this._y1=+o}`
    }
    arcTo(t, r, n, i, a) {
        if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
        let o = this._x1,
            u = this._y1,
            c = n - t,
            l = i - r,
            f = o - t,
            s = u - r,
            h = f * f + s * s;
        if (this._x1 === null) this._append`M${this._x1=t},${this._y1=r}`;
        else if (h > jt)
            if (!(Math.abs(s * c - l * f) > jt) || !a) this._append`L${this._x1=t},${this._y1=r}`;
            else {
                let d = n - o,
                    y = i - u,
                    v = c * c + l * l,
                    p = d * d + y * y,
                    x = Math.sqrt(v),
                    w = Math.sqrt(h),
                    b = a * Math.tan((Yo - Math.acos((v + h - p) / (2 * x * w))) / 2),
                    O = b / w,
                    m = b / x;
                Math.abs(O - 1) > jt && this._append`L${t+O*f},${r+O*s}`, this._append`A${a},${a},0,0,${+(s*d>f*y)},${this._x1=t+m*c},${this._y1=r+m*l}`
            }
    }
    arc(t, r, n, i, a, o) {
        if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
        let u = n * Math.cos(i),
            c = n * Math.sin(i),
            l = t + u,
            f = r + c,
            s = 1 ^ o,
            h = o ? i - a : a - i;
        this._x1 === null ? this._append`M${l},${f}` : (Math.abs(this._x1 - l) > jt || Math.abs(this._y1 - f) > jt) && this._append`L${l},${f}`, n && (h < 0 && (h = h % Zo + Zo), h > gm ? this._append`A${n},${n},0,1,${s},${t-u},${r-c}A${n},${n},0,1,${s},${this._x1=l},${this._y1=f}` : h > jt && this._append`A${n},${n},0,${+(h>=Yo)},${s},${this._x1=t+n*Math.cos(a)},${this._y1=r+n*Math.sin(a)}`)
    }
    rect(t, r, n, i) {
        this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+i}h${-n}Z`
    }
    toString() {
        return this._
    }
}

function sc(e) {
    let t = 3;
    return e.digits = function(r) {
        if (!arguments.length) return t;
        if (r == null) t = null;
        else {
            const n = Math.floor(r);
            if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
            t = n
        }
        return e
    }, () => new xm(t)
}

function fc(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e)
}

function bp(e) {
    this._context = e
}
bp.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(e, t);
                break
        }
    }
};

function Vi(e) {
    return new bp(e)
}

function xp(e) {
    return e[0]
}

function wp(e) {
    return e[1]
}

function Op(e, t) {
    var r = ue(!0),
        n = null,
        i = Vi,
        a = null,
        o = sc(u);
    e = typeof e == "function" ? e : e === void 0 ? xp : ue(e), t = typeof t == "function" ? t : t === void 0 ? wp : ue(t);

    function u(c) {
        var l, f = (c = fc(c)).length,
            s, h = !1,
            d;
        for (n == null && (a = i(d = o())), l = 0; l <= f; ++l) !(l < f && r(s = c[l], l, c)) === h && ((h = !h) ? a.lineStart() : a.lineEnd()), h && a.point(+e(s, l, c), +t(s, l, c));
        if (d) return a = null, d + "" || null
    }
    return u.x = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : ue(+c), u) : e
    }, u.y = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : ue(+c), u) : t
    }, u.defined = function(c) {
        return arguments.length ? (r = typeof c == "function" ? c : ue(!!c), u) : r
    }, u.curve = function(c) {
        return arguments.length ? (i = c, n != null && (a = i(n)), u) : i
    }, u.context = function(c) {
        return arguments.length ? (c == null ? n = a = null : a = i(n = c), u) : n
    }, u
}

function Rn(e, t, r) {
    var n = null,
        i = ue(!0),
        a = null,
        o = Vi,
        u = null,
        c = sc(l);
    e = typeof e == "function" ? e : e === void 0 ? xp : ue(+e), t = typeof t == "function" ? t : ue(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? wp : ue(+r);

    function l(s) {
        var h, d, y, v = (s = fc(s)).length,
            p, x = !1,
            w, b = new Array(v),
            O = new Array(v);
        for (a == null && (u = o(w = c())), h = 0; h <= v; ++h) {
            if (!(h < v && i(p = s[h], h, s)) === x)
                if (x = !x) d = h, u.areaStart(), u.lineStart();
                else {
                    for (u.lineEnd(), u.lineStart(), y = h - 1; y >= d; --y) u.point(b[y], O[y]);
                    u.lineEnd(), u.areaEnd()
                } x && (b[h] = +e(p, h, s), O[h] = +t(p, h, s), u.point(n ? +n(p, h, s) : b[h], r ? +r(p, h, s) : O[h]))
        }
        if (w) return u = null, w + "" || null
    }

    function f() {
        return Op().defined(i).curve(o).context(a)
    }
    return l.x = function(s) {
        return arguments.length ? (e = typeof s == "function" ? s : ue(+s), n = null, l) : e
    }, l.x0 = function(s) {
        return arguments.length ? (e = typeof s == "function" ? s : ue(+s), l) : e
    }, l.x1 = function(s) {
        return arguments.length ? (n = s == null ? null : typeof s == "function" ? s : ue(+s), l) : n
    }, l.y = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : ue(+s), r = null, l) : t
    }, l.y0 = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : ue(+s), l) : t
    }, l.y1 = function(s) {
        return arguments.length ? (r = s == null ? null : typeof s == "function" ? s : ue(+s), l) : r
    }, l.lineX0 = l.lineY0 = function() {
        return f().x(e).y(t)
    }, l.lineY1 = function() {
        return f().x(e).y(r)
    }, l.lineX1 = function() {
        return f().x(n).y(t)
    }, l.defined = function(s) {
        return arguments.length ? (i = typeof s == "function" ? s : ue(!!s), l) : i
    }, l.curve = function(s) {
        return arguments.length ? (o = s, a != null && (u = o(a)), l) : o
    }, l.context = function(s) {
        return arguments.length ? (s == null ? a = u = null : u = o(a = s), l) : a
    }, l
}
class Sp {
    constructor(t, r) {
        this._context = t, this._x = r
    }
    areaStart() {
        this._line = 0
    }
    areaEnd() {
        this._line = NaN
    }
    lineStart() {
        this._point = 0
    }
    lineEnd() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    }
    point(t, r) {
        switch (t = +t, r = +r, this._point) {
            case 0: {
                this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
                break
            }
            case 1:
                this._point = 2;
            default: {
                this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
                break
            }
        }
        this._x0 = t, this._y0 = r
    }
}

function wm(e) {
    return new Sp(e, !0)
}

function Om(e) {
    return new Sp(e, !1)
}
const hc = {
        draw(e, t) {
            const r = Je(t / ei);
            e.moveTo(r, 0), e.arc(0, 0, r, 0, Xi)
        }
    },
    Sm = {
        draw(e, t) {
            const r = Je(t / 5) / 2;
            e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath()
        }
    },
    Pp = Je(1 / 3),
    Pm = Pp * 2,
    Am = {
        draw(e, t) {
            const r = Je(t / Pm),
                n = r * Pp;
            e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath()
        }
    },
    _m = {
        draw(e, t) {
            const r = Je(t),
                n = -r / 2;
            e.rect(n, n, r, r)
        }
    },
    Em = .8908130915292852,
    Ap = Qn(ei / 10) / Qn(7 * ei / 10),
    Tm = Qn(Xi / 10) * Ap,
    jm = -mp(Xi / 10) * Ap,
    Mm = {
        draw(e, t) {
            const r = Je(t * Em),
                n = Tm * r,
                i = jm * r;
            e.moveTo(0, -r), e.lineTo(n, i);
            for (let a = 1; a < 5; ++a) {
                const o = Xi * a / 5,
                    u = mp(o),
                    c = Qn(o);
                e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i)
            }
            e.closePath()
        }
    },
    Ca = Je(3),
    $m = {
        draw(e, t) {
            const r = -Je(t / (Ca * 3));
            e.moveTo(0, r * 2), e.lineTo(-Ca * r, -r), e.lineTo(Ca * r, -r), e.closePath()
        }
    },
    Le = -.5,
    qe = Je(3) / 2,
    Jo = 1 / Je(12),
    Cm = (Jo / 2 + 1) * 3,
    Im = {
        draw(e, t) {
            const r = Je(t / Cm),
                n = r / 2,
                i = r * Jo,
                a = n,
                o = r * Jo + r,
                u = -a,
                c = o;
            e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, c), e.lineTo(Le * n - qe * i, qe * n + Le * i), e.lineTo(Le * a - qe * o, qe * a + Le * o), e.lineTo(Le * u - qe * c, qe * u + Le * c), e.lineTo(Le * n + qe * i, Le * i - qe * n), e.lineTo(Le * a + qe * o, Le * o - qe * a), e.lineTo(Le * u + qe * c, Le * c - qe * u), e.closePath()
        }
    };

function km(e, t) {
    let r = null,
        n = sc(i);
    e = typeof e == "function" ? e : ue(e || hc), t = typeof t == "function" ? t : ue(t === void 0 ? 64 : +t);

    function i() {
        let a;
        if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null
    }
    return i.type = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : ue(a), i) : e
    }, i.size = function(a) {
        return arguments.length ? (t = typeof a == "function" ? a : ue(+a), i) : t
    }, i.context = function(a) {
        return arguments.length ? (r = a ?? null, i) : r
    }, i
}

function ti() {}

function ri(e, t, r) {
    e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + r) / 6)
}

function _p(e) {
    this._context = e
}
_p.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 3:
                ri(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                ri(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function Nm(e) {
    return new _p(e)
}

function Ep(e) {
    this._context = e
}
Ep.prototype = {
    areaStart: ti,
    areaEnd: ti,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 1: {
                this._context.moveTo(this._x2, this._y2), this._context.closePath();
                break
            }
            case 2: {
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                break
            }
            case 3: {
                this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
                break
            }
        }
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._x2 = e, this._y2 = t;
                break;
            case 1:
                this._point = 2, this._x3 = e, this._y3 = t;
                break;
            case 2:
                this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
                break;
            default:
                ri(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function Dm(e) {
    return new Ep(e)
}

function Tp(e) {
    this._context = e
}
Tp.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + e) / 6,
                    n = (this._y0 + 4 * this._y1 + t) / 6;
                this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                break;
            case 3:
                this._point = 4;
            default:
                ri(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function Rm(e) {
    return new Tp(e)
}

function jp(e) {
    this._context = e
}
jp.prototype = {
    areaStart: ti,
    areaEnd: ti,
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        this._point && this._context.closePath()
    },
    point: function(e, t) {
        e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t))
    }
};

function Bm(e) {
    return new jp(e)
}

function Ol(e) {
    return e < 0 ? -1 : 1
}

function Sl(e, t, r) {
    var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || i < 0 && -0),
        o = (r - e._y1) / (i || n < 0 && -0),
        u = (a * i + o * n) / (n + i);
    return (Ol(a) + Ol(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0
}

function Pl(e, t) {
    var r = e._x1 - e._x0;
    return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t
}

function Ia(e, t, r) {
    var n = e._x0,
        i = e._y0,
        a = e._x1,
        o = e._y1,
        u = (a - n) / 3;
    e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o)
}

function ni(e) {
    this._context = e
}
ni.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Ia(this, this._t0, Pl(this, this._t0));
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        var r = NaN;
        if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, Ia(this, Pl(this, r = Sl(this, e, t)), r);
                    break;
                default:
                    Ia(this, this._t0, r = Sl(this, e, t));
                    break
            }
            this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r
        }
    }
};

function Mp(e) {
    this._context = new $p(e)
}(Mp.prototype = Object.create(ni.prototype)).point = function(e, t) {
    ni.prototype.point.call(this, t, e)
};

function $p(e) {
    this._context = e
}
$p.prototype = {
    moveTo: function(e, t) {
        this._context.moveTo(t, e)
    },
    closePath: function() {
        this._context.closePath()
    },
    lineTo: function(e, t) {
        this._context.lineTo(t, e)
    },
    bezierCurveTo: function(e, t, r, n, i, a) {
        this._context.bezierCurveTo(t, e, n, r, a, i)
    }
};

function Lm(e) {
    return new ni(e)
}

function qm(e) {
    return new Mp(e)
}

function Cp(e) {
    this._context = e
}
Cp.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = [], this._y = []
    },
    lineEnd: function() {
        var e = this._x,
            t = this._y,
            r = e.length;
        if (r)
            if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2) this._context.lineTo(e[1], t[1]);
            else
                for (var n = Al(e), i = Al(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
        (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
    },
    point: function(e, t) {
        this._x.push(+e), this._y.push(+t)
    }
};

function Al(e) {
    var t, r = e.length - 1,
        n, i = new Array(r),
        a = new Array(r),
        o = new Array(r);
    for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
    for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
    for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
    for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
    return [i, a]
}

function Fm(e) {
    return new Cp(e)
}

function Yi(e, t) {
    this._context = e, this._t = t
}
Yi.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = this._y = NaN, this._point = 0
    },
    lineEnd: function() {
        0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default: {
                if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
                else {
                    var r = this._x * (1 - this._t) + e * this._t;
                    this._context.lineTo(r, this._y), this._context.lineTo(r, t)
                }
                break
            }
        }
        this._x = e, this._y = t
    }
};

function Wm(e) {
    return new Yi(e, .5)
}

function zm(e) {
    return new Yi(e, 0)
}

function Um(e) {
    return new Yi(e, 1)
}

function ar(e, t) {
    if ((o = e.length) > 1)
        for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
            for (i = a, a = e[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1]
}

function Qo(e) {
    for (var t = e.length, r = new Array(t); --t >= 0;) r[t] = t;
    return r
}

function Hm(e, t) {
    return e[t]
}

function Gm(e) {
    const t = [];
    return t.key = e, t
}

function Km() {
    var e = ue([]),
        t = Qo,
        r = ar,
        n = Hm;

    function i(a) {
        var o = Array.from(e.apply(this, arguments), Gm),
            u, c = o.length,
            l = -1,
            f;
        for (const s of a)
            for (u = 0, ++l; u < c; ++u)(o[u][l] = [0, +n(s, o[u].key, l, a)]).data = s;
        for (u = 0, f = fc(t(o)); u < c; ++u) o[f[u]].index = u;
        return r(o, f), o
    }
    return i.keys = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : ue(Array.from(a)), i) : e
    }, i.value = function(a) {
        return arguments.length ? (n = typeof a == "function" ? a : ue(+a), i) : n
    }, i.order = function(a) {
        return arguments.length ? (t = a == null ? Qo : typeof a == "function" ? a : ue(Array.from(a)), i) : t
    }, i.offset = function(a) {
        return arguments.length ? (r = a ?? ar, i) : r
    }, i
}

function Xm(e, t) {
    if ((n = e.length) > 0) {
        for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
            for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
            if (o)
                for (r = 0; r < n; ++r) e[r][i][1] /= o
        }
        ar(e, t)
    }
}

function Vm(e, t) {
    if ((i = e.length) > 0) {
        for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
            for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
            n[r][1] += n[r][0] = -u / 2
        }
        ar(e, t)
    }
}

function Ym(e, t) {
    if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
        for (var r = 0, n = 1, i, a, o; n < a; ++n) {
            for (var u = 0, c = 0, l = 0; u < o; ++u) {
                for (var f = e[t[u]], s = f[n][1] || 0, h = f[n - 1][1] || 0, d = (s - h) / 2, y = 0; y < u; ++y) {
                    var v = e[t[y]],
                        p = v[n][1] || 0,
                        x = v[n - 1][1] || 0;
                    d += p - x
                }
                c += s, l += d * s
            }
            i[n - 1][1] += i[n - 1][0] = r, c && (r -= l / c)
        }
        i[n - 1][1] += i[n - 1][0] = r, ar(e, t)
    }
}

function Hr(e) {
    "@babel/helpers - typeof";
    return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Hr(e)
}
var Zm = ["type", "size", "sizeType"];

function eu() {
    return eu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, eu.apply(this, arguments)
}

function _l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function El(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? _l(Object(r), !0).forEach(function(n) {
            Jm(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _l(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Jm(e, t, r) {
    return t = Qm(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Qm(e) {
    var t = eg(e, "string");
    return Hr(t) == "symbol" ? t : t + ""
}

function eg(e, t) {
    if (Hr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Hr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function tg(e, t) {
    if (e == null) return {};
    var r = rg(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function rg(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}
var Ip = {
        symbolCircle: hc,
        symbolCross: Sm,
        symbolDiamond: Am,
        symbolSquare: _m,
        symbolStar: Mm,
        symbolTriangle: $m,
        symbolWye: Im
    },
    ng = Math.PI / 180,
    ig = function(t) {
        var r = "symbol".concat(Ki(t));
        return Ip[r] || hc
    },
    ag = function(t, r, n) {
        if (r === "area") return t;
        switch (n) {
            case "cross":
                return 5 * t * t / 9;
            case "diamond":
                return .5 * t * t / Math.sqrt(3);
            case "square":
                return t * t;
            case "star": {
                var i = 18 * ng;
                return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
            }
            case "triangle":
                return Math.sqrt(3) * t * t / 4;
            case "wye":
                return (21 - 10 * Math.sqrt(3)) * t * t / 8;
            default:
                return Math.PI * t * t / 4
        }
    },
    og = function(t, r) {
        Ip["symbol".concat(Ki(t))] = r
    },
    pc = function(t) {
        var r = t.type,
            n = r === void 0 ? "circle" : r,
            i = t.size,
            a = i === void 0 ? 64 : i,
            o = t.sizeType,
            u = o === void 0 ? "area" : o,
            c = tg(t, Zm),
            l = El(El({}, c), {}, {
                type: n,
                size: a,
                sizeType: u
            }),
            f = function() {
                var p = ig(n),
                    x = km().type(p).size(ag(a, u, n));
                return x()
            },
            s = l.className,
            h = l.cx,
            d = l.cy,
            y = ee(l, !0);
        return h === +h && d === +d && a === +a ? A.createElement("path", eu({}, y, {
            className: te("recharts-symbols", s),
            transform: "translate(".concat(h, ", ").concat(d, ")"),
            d: f()
        })) : null
    };
pc.registerSymbol = og;

function or(e) {
    "@babel/helpers - typeof";
    return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, or(e)
}

function tu() {
    return tu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, tu.apply(this, arguments)
}

function Tl(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function ug(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Tl(Object(r), !0).forEach(function(n) {
            Gr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tl(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function cg(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function lg(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Np(n.key), n)
    }
}

function sg(e, t, r) {
    return t && lg(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function fg(e, t, r) {
    return t = ii(t), hg(e, kp() ? Reflect.construct(t, r || [], ii(e).constructor) : t.apply(e, r))
}

function hg(e, t) {
    if (t && (or(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return pg(e)
}

function pg(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function kp() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (kp = function() {
        return !!e
    })()
}

function ii(e) {
    return ii = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ii(e)
}

function dg(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && ru(e, t)
}

function ru(e, t) {
    return ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, ru(e, t)
}

function Gr(e, t, r) {
    return t = Np(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Np(e) {
    var t = vg(e, "string");
    return or(t) == "symbol" ? t : t + ""
}

function vg(e, t) {
    if (or(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (or(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var Fe = 32,
    dc = function(e) {
        function t() {
            return cg(this, t), fg(this, t, arguments)
        }
        return dg(t, e), sg(t, [{
            key: "renderIcon",
            value: function(n) {
                var i = this.props.inactiveColor,
                    a = Fe / 2,
                    o = Fe / 6,
                    u = Fe / 3,
                    c = n.inactive ? i : n.color;
                if (n.type === "plainline") return A.createElement("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: c,
                    strokeDasharray: n.payload.strokeDasharray,
                    x1: 0,
                    y1: a,
                    x2: Fe,
                    y2: a,
                    className: "recharts-legend-icon"
                });
                if (n.type === "line") return A.createElement("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: c,
                    d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(Fe, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
                    className: "recharts-legend-icon"
                });
                if (n.type === "rect") return A.createElement("path", {
                    stroke: "none",
                    fill: c,
                    d: "M0,".concat(Fe / 8, "h").concat(Fe, "v").concat(Fe * 3 / 4, "h").concat(-Fe, "z"),
                    className: "recharts-legend-icon"
                });
                if (A.isValidElement(n.legendIcon)) {
                    var l = ug({}, n);
                    return delete l.legendIcon, A.cloneElement(n.legendIcon, l)
                }
                return A.createElement(pc, {
                    fill: c,
                    cx: a,
                    cy: a,
                    size: Fe,
                    sizeType: "diameter",
                    type: n.type
                })
            }
        }, {
            key: "renderItems",
            value: function() {
                var n = this,
                    i = this.props,
                    a = i.payload,
                    o = i.iconSize,
                    u = i.layout,
                    c = i.formatter,
                    l = i.inactiveColor,
                    f = {
                        x: 0,
                        y: 0,
                        width: Fe,
                        height: Fe
                    },
                    s = {
                        display: u === "horizontal" ? "inline-block" : "block",
                        marginRight: 10
                    },
                    h = {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: 4
                    };
                return a.map(function(d, y) {
                    var v = d.formatter || c,
                        p = te(Gr(Gr({
                            "recharts-legend-item": !0
                        }, "legend-item-".concat(y), !0), "inactive", d.inactive));
                    if (d.type === "none") return null;
                    var x = Y(d.value) ? null : d.value;
                    lt(!Y(d.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
                    var w = d.inactive ? l : d.color;
                    return A.createElement("li", tu({
                        className: p,
                        style: s,
                        key: "legend-item-".concat(y)
                    }, Jn(n.props, d, y)), A.createElement(Xo, {
                        width: o,
                        height: o,
                        viewBox: f,
                        style: h
                    }, n.renderIcon(d)), A.createElement("span", {
                        className: "recharts-legend-item-text",
                        style: {
                            color: w
                        }
                    }, v ? v(x, d, y) : x))
                })
            }
        }, {
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.payload,
                    a = n.layout,
                    o = n.align;
                if (!i || !i.length) return null;
                var u = {
                    padding: 0,
                    margin: 0,
                    textAlign: a === "horizontal" ? o : "left"
                };
                return A.createElement("ul", {
                    className: "recharts-default-legend",
                    style: u
                }, this.renderItems())
            }
        }])
    }(R.PureComponent);
Gr(dc, "displayName", "Legend");
Gr(dc, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc"
});
var ka, jl;

function Dp() {
    if (jl) return ka;
    jl = 1;

    function e(t, r, n, i) {
        for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a;)
            if (r(t[o], o, t)) return o;
        return -1
    }
    return ka = e, ka
}
var Na, Ml;

function yg() {
    if (Ml) return Na;
    Ml = 1;

    function e(t) {
        return t !== t
    }
    return Na = e, Na
}
var Da, $l;

function mg() {
    if ($l) return Da;
    $l = 1;

    function e(t, r, n) {
        for (var i = n - 1, a = t.length; ++i < a;)
            if (t[i] === r) return i;
        return -1
    }
    return Da = e, Da
}
var Ra, Cl;

function gg() {
    if (Cl) return Ra;
    Cl = 1;
    var e = Dp(),
        t = yg(),
        r = mg();

    function n(i, a, o) {
        return a === a ? r(i, a, o) : e(i, t, o)
    }
    return Ra = n, Ra
}
var Ba, Il;

function bg() {
    if (Il) return Ba;
    Il = 1;
    var e = gg();

    function t(r, n) {
        var i = r == null ? 0 : r.length;
        return !!i && e(r, n, 0) > -1
    }
    return Ba = t, Ba
}
var La, kl;

function xg() {
    if (kl) return La;
    kl = 1;

    function e(t, r, n) {
        for (var i = -1, a = t == null ? 0 : t.length; ++i < a;)
            if (n(r, t[i])) return !0;
        return !1
    }
    return La = e, La
}
var qa, Nl;

function wg() {
    if (Nl) return qa;
    Nl = 1;

    function e() {}
    return qa = e, qa
}
var Fa, Dl;

function Og() {
    if (Dl) return Fa;
    Dl = 1;
    var e = gy(),
        t = wg(),
        r = hp(),
        n = 1 / 0,
        i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
            return new e(a)
        } : t;
    return Fa = i, Fa
}
var Wa, Rl;

function Sg() {
    if (Rl) return Wa;
    Rl = 1;
    var e = by(),
        t = bg(),
        r = xg(),
        n = xy(),
        i = Og(),
        a = hp(),
        o = 200;

    function u(c, l, f) {
        var s = -1,
            h = t,
            d = c.length,
            y = !0,
            v = [],
            p = v;
        if (f) y = !1, h = r;
        else if (d >= o) {
            var x = l ? null : i(c);
            if (x) return a(x);
            y = !1, h = n, p = new e
        } else p = l ? [] : v;
        e: for (; ++s < d;) {
            var w = c[s],
                b = l ? l(w) : w;
            if (w = f || w !== 0 ? w : 0, y && b === b) {
                for (var O = p.length; O--;)
                    if (p[O] === b) continue e;
                l && p.push(b), v.push(w)
            } else h(p, b, f) || (p !== v && p.push(b), v.push(w))
        }
        return v
    }
    return Wa = u, Wa
}
var za, Bl;

function Pg() {
    if (Bl) return za;
    Bl = 1;
    var e = zt(),
        t = Sg();

    function r(n, i) {
        return n && n.length ? t(n, e(i, 2)) : []
    }
    return za = r, za
}
var Ag = Pg();
const Ll = fe(Ag);

function Rp(e, t, r) {
    return t === !0 ? Ll(e, r) : Y(t) ? Ll(e, t) : e
}

function ur(e) {
    "@babel/helpers - typeof";
    return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ur(e)
}
var _g = ["ref"];

function ql(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function it(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ql(Object(r), !0).forEach(function(n) {
            Zi(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ql(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Eg(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Fl(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lp(n.key), n)
    }
}

function Tg(e, t, r) {
    return t && Fl(e.prototype, t), r && Fl(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function jg(e, t, r) {
    return t = ai(t), Mg(e, Bp() ? Reflect.construct(t, r || [], ai(e).constructor) : t.apply(e, r))
}

function Mg(e, t) {
    if (t && (ur(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $g(e)
}

function $g(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Bp() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Bp = function() {
        return !!e
    })()
}

function ai(e) {
    return ai = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ai(e)
}

function Cg(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && nu(e, t)
}

function nu(e, t) {
    return nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, nu(e, t)
}

function Zi(e, t, r) {
    return t = Lp(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Lp(e) {
    var t = Ig(e, "string");
    return ur(t) == "symbol" ? t : t + ""
}

function Ig(e, t) {
    if (ur(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ur(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}

function kg(e, t) {
    if (e == null) return {};
    var r = Ng(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function Ng(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function Dg(e) {
    return e.value
}

function Rg(e, t) {
    if (A.isValidElement(e)) return A.cloneElement(e, t);
    if (typeof e == "function") return A.createElement(e, t);
    t.ref;
    var r = kg(t, _g);
    return A.createElement(dc, r)
}
var Wl = 1,
    rr = function(e) {
        function t() {
            var r;
            Eg(this, t);
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            return r = jg(this, t, [].concat(i)), Zi(r, "lastBoundingBox", {
                width: -1,
                height: -1
            }), r
        }
        return Cg(t, e), Tg(t, [{
            key: "componentDidMount",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "getBBox",
            value: function() {
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var n = this.wrapperNode.getBoundingClientRect();
                    return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n
                }
                return null
            }
        }, {
            key: "updateBBox",
            value: function() {
                var n = this.props.onBBoxUpdate,
                    i = this.getBBox();
                i ? (Math.abs(i.width - this.lastBoundingBox.width) > Wl || Math.abs(i.height - this.lastBoundingBox.height) > Wl) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null))
            }
        }, {
            key: "getBBoxSnapshot",
            value: function() {
                return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? it({}, this.lastBoundingBox) : {
                    width: 0,
                    height: 0
                }
            }
        }, {
            key: "getDefaultPosition",
            value: function(n) {
                var i = this.props,
                    a = i.layout,
                    o = i.align,
                    u = i.verticalAlign,
                    c = i.margin,
                    l = i.chartWidth,
                    f = i.chartHeight,
                    s, h;
                if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
                    if (o === "center" && a === "vertical") {
                        var d = this.getBBoxSnapshot();
                        s = {
                            left: ((l || 0) - d.width) / 2
                        }
                    } else s = o === "right" ? {
                        right: c && c.right || 0
                    } : {
                        left: c && c.left || 0
                    };
                if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
                    if (u === "middle") {
                        var y = this.getBBoxSnapshot();
                        h = {
                            top: ((f || 0) - y.height) / 2
                        }
                    } else h = u === "bottom" ? {
                        bottom: c && c.bottom || 0
                    } : {
                        top: c && c.top || 0
                    };
                return it(it({}, s), h)
            }
        }, {
            key: "render",
            value: function() {
                var n = this,
                    i = this.props,
                    a = i.content,
                    o = i.width,
                    u = i.height,
                    c = i.wrapperStyle,
                    l = i.payloadUniqBy,
                    f = i.payload,
                    s = it(it({
                        position: "absolute",
                        width: o || "auto",
                        height: u || "auto"
                    }, this.getDefaultPosition(c)), c);
                return A.createElement("div", {
                    className: "recharts-legend-wrapper",
                    style: s,
                    ref: function(d) {
                        n.wrapperNode = d
                    }
                }, Rg(a, it(it({}, this.props), {}, {
                    payload: Rp(f, l, Dg)
                })))
            }
        }], [{
            key: "getWithHeight",
            value: function(n, i) {
                var a = it(it({}, this.defaultProps), n.props),
                    o = a.layout;
                return o === "vertical" && B(n.props.height) ? {
                    height: n.props.height
                } : o === "horizontal" ? {
                    width: n.props.width || i
                } : null
            }
        }])
    }(R.PureComponent);
Zi(rr, "displayName", "Legend");
Zi(rr, "defaultProps", {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
});
var Ua, zl;

function Bg() {
    if (zl) return Ua;
    zl = 1;
    var e = wy(),
        t = Oy(),
        r = Hi(),
        n = e ? e.isConcatSpreadable : void 0;

    function i(a) {
        return r(a) || t(a) || !!(n && a && a[n])
    }
    return Ua = i, Ua
}
var Ha, Ul;

function qp() {
    if (Ul) return Ha;
    Ul = 1;
    var e = Sy(),
        t = Bg();

    function r(n, i, a, o, u) {
        var c = -1,
            l = n.length;
        for (a || (a = t), u || (u = []); ++c < l;) {
            var f = n[c];
            i > 0 && a(f) ? i > 1 ? r(f, i - 1, a, o, u) : e(u, f) : o || (u[u.length] = f)
        }
        return u
    }
    return Ha = r, Ha
}
var Ga, Hl;

function Lg() {
    if (Hl) return Ga;
    Hl = 1;

    function e(t, r) {
        var n = t.length;
        for (t.sort(r); n--;) t[n] = t[n].value;
        return t
    }
    return Ga = e, Ga
}
var Ka, Gl;

function qg() {
    if (Gl) return Ka;
    Gl = 1;
    var e = pp();

    function t(r, n) {
        if (r !== n) {
            var i = r !== void 0,
                a = r === null,
                o = r === r,
                u = e(r),
                c = n !== void 0,
                l = n === null,
                f = n === n,
                s = e(n);
            if (!l && !s && !u && r > n || u && c && f && !l && !s || a && c && f || !i && f || !o) return 1;
            if (!a && !u && !s && r < n || s && i && o && !a && !u || l && i && o || !c && o || !f) return -1
        }
        return 0
    }
    return Ka = t, Ka
}
var Xa, Kl;

function Fg() {
    if (Kl) return Xa;
    Kl = 1;
    var e = qg();

    function t(r, n, i) {
        for (var a = -1, o = r.criteria, u = n.criteria, c = o.length, l = i.length; ++a < c;) {
            var f = e(o[a], u[a]);
            if (f) {
                if (a >= l) return f;
                var s = i[a];
                return f * (s == "desc" ? -1 : 1)
            }
        }
        return r.index - n.index
    }
    return Xa = t, Xa
}
var Va, Xl;

function Wg() {
    if (Xl) return Va;
    Xl = 1;
    var e = Py(),
        t = oy(),
        r = zt(),
        n = uy(),
        i = Lg(),
        a = Ay(),
        o = Fg(),
        u = jn(),
        c = Hi();

    function l(f, s, h) {
        s.length ? s = e(s, function(v) {
            return c(v) ? function(p) {
                return t(p, v.length === 1 ? v[0] : v)
            } : v
        }) : s = [u];
        var d = -1;
        s = e(s, a(r));
        var y = n(f, function(v, p, x) {
            var w = e(s, function(b) {
                return b(v)
            });
            return {
                criteria: w,
                index: ++d,
                value: v
            }
        });
        return i(y, function(v, p) {
            return o(v, p, h)
        })
    }
    return Va = l, Va
}
var Ya, Vl;

function zg() {
    if (Vl) return Ya;
    Vl = 1;

    function e(t, r, n) {
        switch (n.length) {
            case 0:
                return t.call(r);
            case 1:
                return t.call(r, n[0]);
            case 2:
                return t.call(r, n[0], n[1]);
            case 3:
                return t.call(r, n[0], n[1], n[2])
        }
        return t.apply(r, n)
    }
    return Ya = e, Ya
}
var Za, Yl;

function Ug() {
    if (Yl) return Za;
    Yl = 1;
    var e = zg(),
        t = Math.max;

    function r(n, i, a) {
        return i = t(i === void 0 ? n.length - 1 : i, 0),
            function() {
                for (var o = arguments, u = -1, c = t(o.length - i, 0), l = Array(c); ++u < c;) l[u] = o[i + u];
                u = -1;
                for (var f = Array(i + 1); ++u < i;) f[u] = o[u];
                return f[i] = a(l), e(n, this, f)
            }
    }
    return Za = r, Za
}
var Ja, Zl;

function Hg() {
    if (Zl) return Ja;
    Zl = 1;

    function e(t) {
        return function() {
            return t
        }
    }
    return Ja = e, Ja
}
var Qa, Jl;

function Gg() {
    if (Jl) return Qa;
    Jl = 1;
    var e = Hg(),
        t = cy(),
        r = jn(),
        n = t ? function(i, a) {
            return t(i, "toString", {
                configurable: !0,
                enumerable: !1,
                value: e(a),
                writable: !0
            })
        } : r;
    return Qa = n, Qa
}
var eo, Ql;

function Kg() {
    if (Ql) return eo;
    Ql = 1;
    var e = 800,
        t = 16,
        r = Date.now;

    function n(i) {
        var a = 0,
            o = 0;
        return function() {
            var u = r(),
                c = t - (u - o);
            if (o = u, c > 0) {
                if (++a >= e) return arguments[0]
            } else a = 0;
            return i.apply(void 0, arguments)
        }
    }
    return eo = n, eo
}
var to, es;

function Xg() {
    if (es) return to;
    es = 1;
    var e = Gg(),
        t = Kg(),
        r = t(e);
    return to = r, to
}
var ro, ts;

function Vg() {
    if (ts) return ro;
    ts = 1;
    var e = jn(),
        t = Ug(),
        r = Xg();

    function n(i, a) {
        return r(t(i, a, e), i + "")
    }
    return ro = n, ro
}
var no, rs;

function Yg() {
    if (rs) return no;
    rs = 1;
    var e = qp(),
        t = Wg(),
        r = Vg(),
        n = oc(),
        i = r(function(a, o) {
            if (a == null) return [];
            var u = o.length;
            return u > 1 && n(a, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), [])
        });
    return no = i, no
}
var Zg = Yg();
const vc = fe(Zg);

function Kr(e) {
    "@babel/helpers - typeof";
    return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Kr(e)
}

function iu() {
    return iu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, iu.apply(this, arguments)
}

function Jg(e, t) {
    return rb(e) || tb(e, t) || eb(e, t) || Qg()
}

function Qg() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function eb(e, t) {
    if (e) {
        if (typeof e == "string") return ns(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ns(e, t)
    }
}

function ns(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function tb(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function rb(e) {
    if (Array.isArray(e)) return e
}

function is(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function io(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? is(Object(r), !0).forEach(function(n) {
            nb(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : is(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function nb(e, t, r) {
    return t = ib(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function ib(e) {
    var t = ab(e, "string");
    return Kr(t) == "symbol" ? t : t + ""
}

function ab(e, t) {
    if (Kr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Kr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function ob(e) {
    return Array.isArray(e) && we(e[0]) && we(e[1]) ? e.join(" ~ ") : e
}
var ub = function(t) {
    var r = t.separator,
        n = r === void 0 ? " : " : r,
        i = t.contentStyle,
        a = i === void 0 ? {} : i,
        o = t.itemStyle,
        u = o === void 0 ? {} : o,
        c = t.labelStyle,
        l = c === void 0 ? {} : c,
        f = t.payload,
        s = t.formatter,
        h = t.itemSorter,
        d = t.wrapperClassName,
        y = t.labelClassName,
        v = t.label,
        p = t.labelFormatter,
        x = t.accessibilityLayer,
        w = x === void 0 ? !1 : x,
        b = function() {
            if (f && f.length) {
                var T = {
                        padding: 0,
                        margin: 0
                    },
                    I = (h ? vc(f, h) : f).map(function(C, $) {
                        if (C.type === "none") return null;
                        var k = io({
                                display: "block",
                                paddingTop: 4,
                                paddingBottom: 4,
                                color: C.color || "#000"
                            }, u),
                            D = C.formatter || s || ob,
                            L = C.value,
                            q = C.name,
                            U = L,
                            G = q;
                        if (D && U != null && G != null) {
                            var W = D(L, q, C, $, f);
                            if (Array.isArray(W)) {
                                var K = Jg(W, 2);
                                U = K[0], G = K[1]
                            } else U = W
                        }
                        return A.createElement("li", {
                            className: "recharts-tooltip-item",
                            key: "tooltip-item-".concat($),
                            style: k
                        }, we(G) ? A.createElement("span", {
                            className: "recharts-tooltip-item-name"
                        }, G) : null, we(G) ? A.createElement("span", {
                            className: "recharts-tooltip-item-separator"
                        }, n) : null, A.createElement("span", {
                            className: "recharts-tooltip-item-value"
                        }, U), A.createElement("span", {
                            className: "recharts-tooltip-item-unit"
                        }, C.unit || ""))
                    });
                return A.createElement("ul", {
                    className: "recharts-tooltip-item-list",
                    style: T
                }, I)
            }
            return null
        },
        O = io({
            margin: 0,
            padding: 10,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            whiteSpace: "nowrap"
        }, a),
        m = io({
            margin: 0
        }, l),
        g = !re(v),
        S = g ? v : "",
        P = te("recharts-default-tooltip", d),
        _ = te("recharts-tooltip-label", y);
    g && p && f !== void 0 && f !== null && (S = p(v, f));
    var M = w ? {
        role: "status",
        "aria-live": "assertive"
    } : {};
    return A.createElement("div", iu({
        className: P,
        style: O
    }, M), A.createElement("p", {
        className: _,
        style: m
    }, A.isValidElement(S) ? S : "".concat(S)), b())
};

function Xr(e) {
    "@babel/helpers - typeof";
    return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Xr(e)
}

function Bn(e, t, r) {
    return t = cb(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function cb(e) {
    var t = lb(e, "string");
    return Xr(t) == "symbol" ? t : t + ""
}

function lb(e, t) {
    if (Xr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Xr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var $r = "recharts-tooltip-wrapper",
    sb = {
        visibility: "hidden"
    };

function fb(e) {
    var t = e.coordinate,
        r = e.translateX,
        n = e.translateY;
    return te($r, Bn(Bn(Bn(Bn({}, "".concat($r, "-right"), B(r) && t && B(t.x) && r >= t.x), "".concat($r, "-left"), B(r) && t && B(t.x) && r < t.x), "".concat($r, "-bottom"), B(n) && t && B(t.y) && n >= t.y), "".concat($r, "-top"), B(n) && t && B(t.y) && n < t.y))
}

function as(e) {
    var t = e.allowEscapeViewBox,
        r = e.coordinate,
        n = e.key,
        i = e.offsetTopLeft,
        a = e.position,
        o = e.reverseDirection,
        u = e.tooltipDimension,
        c = e.viewBox,
        l = e.viewBoxDimension;
    if (a && B(a[n])) return a[n];
    var f = r[n] - u - i,
        s = r[n] + i;
    if (t[n]) return o[n] ? f : s;
    if (o[n]) {
        var h = f,
            d = c[n];
        return h < d ? Math.max(s, c[n]) : Math.max(f, c[n])
    }
    var y = s + u,
        v = c[n] + l;
    return y > v ? Math.max(f, c[n]) : Math.max(s, c[n])
}

function hb(e) {
    var t = e.translateX,
        r = e.translateY,
        n = e.useTranslate3d;
    return {
        transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
    }
}

function pb(e) {
    var t = e.allowEscapeViewBox,
        r = e.coordinate,
        n = e.offsetTopLeft,
        i = e.position,
        a = e.reverseDirection,
        o = e.tooltipBox,
        u = e.useTranslate3d,
        c = e.viewBox,
        l, f, s;
    return o.height > 0 && o.width > 0 && r ? (f = as({
        allowEscapeViewBox: t,
        coordinate: r,
        key: "x",
        offsetTopLeft: n,
        position: i,
        reverseDirection: a,
        tooltipDimension: o.width,
        viewBox: c,
        viewBoxDimension: c.width
    }), s = as({
        allowEscapeViewBox: t,
        coordinate: r,
        key: "y",
        offsetTopLeft: n,
        position: i,
        reverseDirection: a,
        tooltipDimension: o.height,
        viewBox: c,
        viewBoxDimension: c.height
    }), l = hb({
        translateX: f,
        translateY: s,
        useTranslate3d: u
    })) : l = sb, {
        cssProperties: l,
        cssClasses: fb({
            translateX: f,
            translateY: s,
            coordinate: r
        })
    }
}

function cr(e) {
    "@babel/helpers - typeof";
    return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, cr(e)
}

function os(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function us(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? os(Object(r), !0).forEach(function(n) {
            ou(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : os(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function db(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function vb(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wp(n.key), n)
    }
}

function yb(e, t, r) {
    return t && vb(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function mb(e, t, r) {
    return t = oi(t), gb(e, Fp() ? Reflect.construct(t, r || [], oi(e).constructor) : t.apply(e, r))
}

function gb(e, t) {
    if (t && (cr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return bb(e)
}

function bb(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Fp() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Fp = function() {
        return !!e
    })()
}

function oi(e) {
    return oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, oi(e)
}

function xb(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && au(e, t)
}

function au(e, t) {
    return au = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, au(e, t)
}

function ou(e, t, r) {
    return t = Wp(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Wp(e) {
    var t = wb(e, "string");
    return cr(t) == "symbol" ? t : t + ""
}

function wb(e, t) {
    if (cr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (cr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var cs = 1,
    Ob = function(e) {
        function t() {
            var r;
            db(this, t);
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            return r = mb(this, t, [].concat(i)), ou(r, "state", {
                dismissed: !1,
                dismissedAtCoordinate: {
                    x: 0,
                    y: 0
                },
                lastBoundingBox: {
                    width: -1,
                    height: -1
                }
            }), ou(r, "handleKeyDown", function(o) {
                if (o.key === "Escape") {
                    var u, c, l, f;
                    r.setState({
                        dismissed: !0,
                        dismissedAtCoordinate: {
                            x: (u = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && u !== void 0 ? u : 0,
                            y: (l = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && l !== void 0 ? l : 0
                        }
                    })
                }
            }), r
        }
        return xb(t, e), yb(t, [{
            key: "updateBBox",
            value: function() {
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var n = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(n.width - this.state.lastBoundingBox.width) > cs || Math.abs(n.height - this.state.lastBoundingBox.height) > cs) && this.setState({
                        lastBoundingBox: {
                            width: n.width,
                            height: n.height
                        }
                    })
                } else(this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
                    lastBoundingBox: {
                        width: -1,
                        height: -1
                    }
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("keydown", this.handleKeyDown), this.updateBBox()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyDown)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                var n, i;
                this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1)
            }
        }, {
            key: "render",
            value: function() {
                var n = this,
                    i = this.props,
                    a = i.active,
                    o = i.allowEscapeViewBox,
                    u = i.animationDuration,
                    c = i.animationEasing,
                    l = i.children,
                    f = i.coordinate,
                    s = i.hasPayload,
                    h = i.isAnimationActive,
                    d = i.offset,
                    y = i.position,
                    v = i.reverseDirection,
                    p = i.useTranslate3d,
                    x = i.viewBox,
                    w = i.wrapperStyle,
                    b = pb({
                        allowEscapeViewBox: o,
                        coordinate: f,
                        offsetTopLeft: d,
                        position: y,
                        reverseDirection: v,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: p,
                        viewBox: x
                    }),
                    O = b.cssClasses,
                    m = b.cssProperties,
                    g = us(us({
                        transition: h && a ? "transform ".concat(u, "ms ").concat(c) : void 0
                    }, m), {}, {
                        pointerEvents: "none",
                        visibility: !this.state.dismissed && a && s ? "visible" : "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0
                    }, w);
                return A.createElement("div", {
                    tabIndex: -1,
                    className: O,
                    style: g,
                    ref: function(P) {
                        n.wrapperNode = P
                    }
                }, l)
            }
        }])
    }(R.PureComponent),
    Sb = function() {
        return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout)
    },
    $n = {
        isSsr: Sb()
    };

function lr(e) {
    "@babel/helpers - typeof";
    return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, lr(e)
}

function ls(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function ss(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ls(Object(r), !0).forEach(function(n) {
            yc(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ls(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Pb(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ab(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Up(n.key), n)
    }
}

function _b(e, t, r) {
    return t && Ab(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Eb(e, t, r) {
    return t = ui(t), Tb(e, zp() ? Reflect.construct(t, r || [], ui(e).constructor) : t.apply(e, r))
}

function Tb(e, t) {
    if (t && (lr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return jb(e)
}

function jb(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function zp() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (zp = function() {
        return !!e
    })()
}

function ui(e) {
    return ui = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ui(e)
}

function Mb(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && uu(e, t)
}

function uu(e, t) {
    return uu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, uu(e, t)
}

function yc(e, t, r) {
    return t = Up(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Up(e) {
    var t = $b(e, "string");
    return lr(t) == "symbol" ? t : t + ""
}

function $b(e, t) {
    if (lr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (lr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}

function Cb(e) {
    return e.dataKey
}

function Ib(e, t) {
    return A.isValidElement(e) ? A.cloneElement(e, t) : typeof e == "function" ? A.createElement(e, t) : A.createElement(ub, t)
}
var Ke = function(e) {
    function t() {
        return Pb(this, t), Eb(this, t, arguments)
    }
    return Mb(t, e), _b(t, [{
        key: "render",
        value: function() {
            var n = this,
                i = this.props,
                a = i.active,
                o = i.allowEscapeViewBox,
                u = i.animationDuration,
                c = i.animationEasing,
                l = i.content,
                f = i.coordinate,
                s = i.filterNull,
                h = i.isAnimationActive,
                d = i.offset,
                y = i.payload,
                v = i.payloadUniqBy,
                p = i.position,
                x = i.reverseDirection,
                w = i.useTranslate3d,
                b = i.viewBox,
                O = i.wrapperStyle,
                m = y ?? [];
            s && m.length && (m = Rp(y.filter(function(S) {
                return S.value != null && (S.hide !== !0 || n.props.includeHidden)
            }), v, Cb));
            var g = m.length > 0;
            return A.createElement(Ob, {
                allowEscapeViewBox: o,
                animationDuration: u,
                animationEasing: c,
                isAnimationActive: h,
                active: a,
                coordinate: f,
                hasPayload: g,
                offset: d,
                position: p,
                reverseDirection: x,
                useTranslate3d: w,
                viewBox: b,
                wrapperStyle: O
            }, Ib(l, ss(ss({}, this.props), {}, {
                payload: m
            })))
        }
    }])
}(R.PureComponent);
yc(Ke, "displayName", "Tooltip");
yc(Ke, "defaultProps", {
    accessibilityLayer: !1,
    allowEscapeViewBox: {
        x: !1,
        y: !1
    },
    animationDuration: 400,
    animationEasing: "ease",
    contentStyle: {},
    coordinate: {
        x: 0,
        y: 0
    },
    cursor: !0,
    cursorStyle: {},
    filterNull: !0,
    isAnimationActive: !$n.isSsr,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
        x: !1,
        y: !1
    },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: !1,
    viewBox: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
    },
    wrapperStyle: {}
});
var kb = ly();
const Hp = fe(kb);

function Vr(e) {
    "@babel/helpers - typeof";
    return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Vr(e)
}

function fs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ln(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? fs(Object(r), !0).forEach(function(n) {
            Nb(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fs(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Nb(e, t, r) {
    return t = Db(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Db(e) {
    var t = Rb(e, "string");
    return Vr(t) == "symbol" ? t : t + ""
}

function Rb(e, t) {
    if (Vr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Vr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Bb(e, t) {
    return Wb(e) || Fb(e, t) || qb(e, t) || Lb()
}

function Lb() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function qb(e, t) {
    if (e) {
        if (typeof e == "string") return hs(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hs(e, t)
    }
}

function hs(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function Fb(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function Wb(e) {
    if (Array.isArray(e)) return e
}
var ps = R.forwardRef(function(e, t) {
        var r = e.aspect,
            n = e.initialDimension,
            i = n === void 0 ? {
                width: -1,
                height: -1
            } : n,
            a = e.width,
            o = a === void 0 ? "100%" : a,
            u = e.height,
            c = u === void 0 ? "100%" : u,
            l = e.minWidth,
            f = l === void 0 ? 0 : l,
            s = e.minHeight,
            h = e.maxHeight,
            d = e.children,
            y = e.debounce,
            v = y === void 0 ? 0 : y,
            p = e.id,
            x = e.className,
            w = e.onResize,
            b = e.style,
            O = b === void 0 ? {} : b,
            m = R.useRef(null),
            g = R.useRef();
        g.current = w, R.useImperativeHandle(t, function() {
            return Object.defineProperty(m.current, "current", {
                get: function() {
                    return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current
                },
                configurable: !0
            })
        });
        var S = R.useState({
                containerWidth: i.width,
                containerHeight: i.height
            }),
            P = Bb(S, 2),
            _ = P[0],
            M = P[1],
            E = R.useCallback(function(I, C) {
                M(function($) {
                    var k = Math.round(I),
                        D = Math.round(C);
                    return $.containerWidth === k && $.containerHeight === D ? $ : {
                        containerWidth: k,
                        containerHeight: D
                    }
                })
            }, []);
        R.useEffect(function() {
            var I = function(q) {
                var U, G = q[0].contentRect,
                    W = G.width,
                    K = G.height;
                E(W, K), (U = g.current) === null || U === void 0 || U.call(g, W, K)
            };
            v > 0 && (I = Hp(I, v, {
                trailing: !0,
                leading: !1
            }));
            var C = new ResizeObserver(I),
                $ = m.current.getBoundingClientRect(),
                k = $.width,
                D = $.height;
            return E(k, D), C.observe(m.current),
                function() {
                    C.disconnect()
                }
        }, [E, v]);
        var T = R.useMemo(function() {
            var I = _.containerWidth,
                C = _.containerHeight;
            if (I < 0 || C < 0) return null;
            lt($t(o) || $t(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), lt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
            var $ = $t(o) ? I : o,
                k = $t(c) ? C : c;
            r && r > 0 && ($ ? k = $ / r : k && ($ = k * r), h && k > h && (k = h)), lt($ > 0 || k > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, $, k, o, c, f, s, r);
            var D = !Array.isArray(d) && ct(d.type).endsWith("Chart");
            return A.Children.map(d, function(L) {
                return A.isValidElement(L) ? R.cloneElement(L, Ln({
                    width: $,
                    height: k
                }, D ? {
                    style: Ln({
                        height: "100%",
                        width: "100%",
                        maxHeight: k,
                        maxWidth: $
                    }, L.props.style)
                } : {})) : L
            })
        }, [r, d, c, h, s, f, _, o]);
        return A.createElement("div", {
            id: p ? "".concat(p) : void 0,
            className: te("recharts-responsive-container", x),
            style: Ln(Ln({}, O), {}, {
                width: o,
                height: c,
                minWidth: f,
                minHeight: s,
                maxHeight: h
            }),
            ref: m
        }, T)
    }),
    Gp = function(t) {
        return null
    };
Gp.displayName = "Cell";

function Yr(e) {
    "@babel/helpers - typeof";
    return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Yr(e)
}

function ds(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function cu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ds(Object(r), !0).forEach(function(n) {
            zb(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ds(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function zb(e, t, r) {
    return t = Ub(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Ub(e) {
    var t = Hb(e, "string");
    return Yr(t) == "symbol" ? t : t + ""
}

function Hb(e, t) {
    if (Yr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Yr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Vt = {
        widthCache: {},
        cacheCount: 0
    },
    Gb = 2e3,
    Kb = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
    },
    vs = "recharts_measurement_span";

function Xb(e) {
    var t = cu({}, e);
    return Object.keys(t).forEach(function(r) {
        t[r] || delete t[r]
    }), t
}
var Fr = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t == null || $n.isSsr) return {
            width: 0,
            height: 0
        };
        var n = Xb(r),
            i = JSON.stringify({
                text: t,
                copyStyle: n
            });
        if (Vt.widthCache[i]) return Vt.widthCache[i];
        try {
            var a = document.getElementById(vs);
            a || (a = document.createElement("span"), a.setAttribute("id", vs), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
            var o = cu(cu({}, Kb), n);
            Object.assign(a.style, o), a.textContent = "".concat(t);
            var u = a.getBoundingClientRect(),
                c = {
                    width: u.width,
                    height: u.height
                };
            return Vt.widthCache[i] = c, ++Vt.cacheCount > Gb && (Vt.cacheCount = 0, Vt.widthCache = {}), c
        } catch {
            return {
                width: 0,
                height: 0
            }
        }
    },
    Vb = function(t) {
        return {
            top: t.top + window.scrollY - document.documentElement.clientTop,
            left: t.left + window.scrollX - document.documentElement.clientLeft
        }
    };

function Zr(e) {
    "@babel/helpers - typeof";
    return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Zr(e)
}

function ci(e, t) {
    return Qb(e) || Jb(e, t) || Zb(e, t) || Yb()
}

function Yb() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Zb(e, t) {
    if (e) {
        if (typeof e == "string") return ys(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ys(e, t)
    }
}

function ys(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function Jb(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t === 0) {
                if (Object(r) !== r) return;
                c = !1
            } else
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function Qb(e) {
    if (Array.isArray(e)) return e
}

function e0(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ms(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, r0(n.key), n)
    }
}

function t0(e, t, r) {
    return t && ms(e.prototype, t), r && ms(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function r0(e) {
    var t = n0(e, "string");
    return Zr(t) == "symbol" ? t : t + ""
}

function n0(e, t) {
    if (Zr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Zr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var gs = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    bs = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
    i0 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
    a0 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
    Kp = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 96 / 6,
        in: 96,
        Q: 96 / (2.54 * 40),
        px: 1
    },
    o0 = Object.keys(Kp),
    Jt = "NaN";

function u0(e, t) {
    return e * Kp[t]
}
var qn = function() {
    function e(t, r) {
        e0(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !i0.test(r) && (this.num = NaN, this.unit = ""), o0.includes(r) && (this.num = u0(t, r), this.unit = "px")
    }
    return t0(e, [{
        key: "add",
        value: function(r) {
            return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit)
        }
    }, {
        key: "subtract",
        value: function(r) {
            return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit)
        }
    }, {
        key: "multiply",
        value: function(r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit)
        }
    }, {
        key: "divide",
        value: function(r) {
            return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit)
        }
    }, {
        key: "toString",
        value: function() {
            return "".concat(this.num).concat(this.unit)
        }
    }, {
        key: "isNaN",
        value: function() {
            return Number.isNaN(this.num)
        }
    }], [{
        key: "parse",
        value: function(r) {
            var n, i = (n = a0.exec(r)) !== null && n !== void 0 ? n : [],
                a = ci(i, 3),
                o = a[1],
                u = a[2];
            return new e(parseFloat(o), u ?? "")
        }
    }])
}();

function Xp(e) {
    if (e.includes(Jt)) return Jt;
    for (var t = e; t.includes("*") || t.includes("/");) {
        var r, n = (r = gs.exec(t)) !== null && r !== void 0 ? r : [],
            i = ci(n, 4),
            a = i[1],
            o = i[2],
            u = i[3],
            c = qn.parse(a ?? ""),
            l = qn.parse(u ?? ""),
            f = o === "*" ? c.multiply(l) : c.divide(l);
        if (f.isNaN()) return Jt;
        t = t.replace(gs, f.toString())
    }
    for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t);) {
        var s, h = (s = bs.exec(t)) !== null && s !== void 0 ? s : [],
            d = ci(h, 4),
            y = d[1],
            v = d[2],
            p = d[3],
            x = qn.parse(y ?? ""),
            w = qn.parse(p ?? ""),
            b = v === "+" ? x.add(w) : x.subtract(w);
        if (b.isNaN()) return Jt;
        t = t.replace(bs, b.toString())
    }
    return t
}
var xs = /\(([^()]*)\)/;

function c0(e) {
    for (var t = e; t.includes("(");) {
        var r = xs.exec(t),
            n = ci(r, 2),
            i = n[1];
        t = t.replace(xs, Xp(i))
    }
    return t
}

function l0(e) {
    var t = e.replace(/\s+/g, "");
    return t = c0(t), t = Xp(t), t
}

function s0(e) {
    try {
        return l0(e)
    } catch {
        return Jt
    }
}

function ao(e) {
    var t = s0(e.slice(5, -1));
    return t === Jt ? "" : t
}
var f0 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
    h0 = ["dx", "dy", "angle", "className", "breakAll"];

function lu() {
    return lu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, lu.apply(this, arguments)
}

function ws(e, t) {
    if (e == null) return {};
    var r = p0(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function p0(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function Os(e, t) {
    return m0(e) || y0(e, t) || v0(e, t) || d0()
}

function d0() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function v0(e, t) {
    if (e) {
        if (typeof e == "string") return Ss(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ss(e, t)
    }
}

function Ss(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function y0(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t === 0) {
                if (Object(r) !== r) return;
                c = !1
            } else
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function m0(e) {
    if (Array.isArray(e)) return e
}
var Vp = /[ \f\n\r\t\v\u2028\u2029]+/,
    Yp = function(t) {
        var r = t.children,
            n = t.breakAll,
            i = t.style;
        try {
            var a = [];
            re(r) || (n ? a = r.toString().split("") : a = r.toString().split(Vp));
            var o = a.map(function(c) {
                    return {
                        word: c,
                        width: Fr(c, i).width
                    }
                }),
                u = n ? 0 : Fr(" ", i).width;
            return {
                wordsWithComputedWidth: o,
                spaceWidth: u
            }
        } catch {
            return null
        }
    },
    g0 = function(t, r, n, i, a) {
        var o = t.maxLines,
            u = t.children,
            c = t.style,
            l = t.breakAll,
            f = B(o),
            s = u,
            h = function() {
                var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                return $.reduce(function(k, D) {
                    var L = D.word,
                        q = D.width,
                        U = k[k.length - 1];
                    if (U && (i == null || a || U.width + q + n < Number(i))) U.words.push(L), U.width += q + n;
                    else {
                        var G = {
                            words: [L],
                            width: q
                        };
                        k.push(G)
                    }
                    return k
                }, [])
            },
            d = h(r),
            y = function($) {
                return $.reduce(function(k, D) {
                    return k.width > D.width ? k : D
                })
            };
        if (!f) return d;
        for (var v = "…", p = function($) {
                var k = s.slice(0, $),
                    D = Yp({
                        breakAll: l,
                        style: c,
                        children: k + v
                    }).wordsWithComputedWidth,
                    L = h(D),
                    q = L.length > o || y(L).width > Number(i);
                return [q, L]
            }, x = 0, w = s.length - 1, b = 0, O; x <= w && b <= s.length - 1;) {
            var m = Math.floor((x + w) / 2),
                g = m - 1,
                S = p(g),
                P = Os(S, 2),
                _ = P[0],
                M = P[1],
                E = p(m),
                T = Os(E, 1),
                I = T[0];
            if (!_ && !I && (x = m + 1), _ && I && (w = m - 1), !_ && I) {
                O = M;
                break
            }
            b++
        }
        return O || d
    },
    Ps = function(t) {
        var r = re(t) ? [] : t.toString().split(Vp);
        return [{
            words: r
        }]
    },
    b0 = function(t) {
        var r = t.width,
            n = t.scaleToFit,
            i = t.children,
            a = t.style,
            o = t.breakAll,
            u = t.maxLines;
        if ((r || n) && !$n.isSsr) {
            var c, l, f = Yp({
                breakAll: o,
                children: i,
                style: a
            });
            if (f) {
                var s = f.wordsWithComputedWidth,
                    h = f.spaceWidth;
                c = s, l = h
            } else return Ps(i);
            return g0({
                breakAll: o,
                children: i,
                maxLines: u,
                style: a
            }, c, l, r, n)
        }
        return Ps(i)
    },
    As = "#808080",
    li = function(t) {
        var r = t.x,
            n = r === void 0 ? 0 : r,
            i = t.y,
            a = i === void 0 ? 0 : i,
            o = t.lineHeight,
            u = o === void 0 ? "1em" : o,
            c = t.capHeight,
            l = c === void 0 ? "0.71em" : c,
            f = t.scaleToFit,
            s = f === void 0 ? !1 : f,
            h = t.textAnchor,
            d = h === void 0 ? "start" : h,
            y = t.verticalAnchor,
            v = y === void 0 ? "end" : y,
            p = t.fill,
            x = p === void 0 ? As : p,
            w = ws(t, f0),
            b = R.useMemo(function() {
                return b0({
                    breakAll: w.breakAll,
                    children: w.children,
                    maxLines: w.maxLines,
                    scaleToFit: s,
                    style: w.style,
                    width: w.width
                })
            }, [w.breakAll, w.children, w.maxLines, s, w.style, w.width]),
            O = w.dx,
            m = w.dy,
            g = w.angle,
            S = w.className,
            P = w.breakAll,
            _ = ws(w, h0);
        if (!we(n) || !we(a)) return null;
        var M = n + (B(O) ? O : 0),
            E = a + (B(m) ? m : 0),
            T;
        switch (v) {
            case "start":
                T = ao("calc(".concat(l, ")"));
                break;
            case "middle":
                T = ao("calc(".concat((b.length - 1) / 2, " * -").concat(u, " + (").concat(l, " / 2))"));
                break;
            default:
                T = ao("calc(".concat(b.length - 1, " * -").concat(u, ")"));
                break
        }
        var I = [];
        if (s) {
            var C = b[0].width,
                $ = w.width;
            I.push("scale(".concat((B($) ? $ / C : 1) / C, ")"))
        }
        return g && I.push("rotate(".concat(g, ", ").concat(M, ", ").concat(E, ")")), I.length && (_.transform = I.join(" ")), A.createElement("text", lu({}, ee(_, !0), {
            x: M,
            y: E,
            className: te("recharts-text", S),
            textAnchor: d,
            fill: x.includes("url") ? As : x
        }), b.map(function(k, D) {
            var L = k.words.join(P ? "" : " ");
            return A.createElement("tspan", {
                x: M,
                dy: D === 0 ? T : u,
                key: "".concat(L, "-").concat(D)
            }, L)
        }))
    };

function bt(e, t) {
    return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}

function x0(e, t) {
    return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}

function mc(e) {
    let t, r, n;
    e.length !== 2 ? (t = bt, r = (u, c) => bt(e(u), c), n = (u, c) => e(u) - c) : (t = e === bt || e === x0 ? e : w0, r = e, n = e);

    function i(u, c, l = 0, f = u.length) {
        if (l < f) {
            if (t(c, c) !== 0) return f;
            do {
                const s = l + f >>> 1;
                r(u[s], c) < 0 ? l = s + 1 : f = s
            } while (l < f)
        }
        return l
    }

    function a(u, c, l = 0, f = u.length) {
        if (l < f) {
            if (t(c, c) !== 0) return f;
            do {
                const s = l + f >>> 1;
                r(u[s], c) <= 0 ? l = s + 1 : f = s
            } while (l < f)
        }
        return l
    }

    function o(u, c, l = 0, f = u.length) {
        const s = i(u, c, l, f - 1);
        return s > l && n(u[s - 1], c) > -n(u[s], c) ? s - 1 : s
    }
    return {
        left: i,
        center: o,
        right: a
    }
}

function w0() {
    return 0
}

function Zp(e) {
    return e === null ? NaN : +e
}

function* O0(e, t) {
    for (let r of e) r != null && (r = +r) >= r && (yield r)
}
const S0 = mc(bt),
    Cn = S0.right;
mc(Zp).center;
class _s extends Map {
    constructor(t, r = _0) {
        if (super(), Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: r
                }
            }), t != null)
            for (const [n, i] of t) this.set(n, i)
    }
    get(t) {
        return super.get(Es(this, t))
    }
    has(t) {
        return super.has(Es(this, t))
    }
    set(t, r) {
        return super.set(P0(this, t), r)
    }
    delete(t) {
        return super.delete(A0(this, t))
    }
}

function Es({
    _intern: e,
    _key: t
}, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : r
}

function P0({
    _intern: e,
    _key: t
}, r) {
    const n = t(r);
    return e.has(n) ? e.get(n) : (e.set(n, r), r)
}

function A0({
    _intern: e,
    _key: t
}, r) {
    const n = t(r);
    return e.has(n) && (r = e.get(n), e.delete(n)), r
}

function _0(e) {
    return e !== null && typeof e == "object" ? e.valueOf() : e
}

function E0(e = bt) {
    if (e === bt) return Jp;
    if (typeof e != "function") throw new TypeError("compare is not a function");
    return (t, r) => {
        const n = e(t, r);
        return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0)
    }
}

function Jp(e, t) {
    return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0)
}
const T0 = Math.sqrt(50),
    j0 = Math.sqrt(10),
    M0 = Math.sqrt(2);

function si(e, t, r) {
    const n = (t - e) / Math.max(0, r),
        i = Math.floor(Math.log10(n)),
        a = n / Math.pow(10, i),
        o = a >= T0 ? 10 : a >= j0 ? 5 : a >= M0 ? 2 : 1;
    let u, c, l;
    return i < 0 ? (l = Math.pow(10, -i) / o, u = Math.round(e * l), c = Math.round(t * l), u / l < e && ++u, c / l > t && --c, l = -l) : (l = Math.pow(10, i) * o, u = Math.round(e / l), c = Math.round(t / l), u * l < e && ++u, c * l > t && --c), c < u && .5 <= r && r < 2 ? si(e, t, r * 2) : [u, c, l]
}

function su(e, t, r) {
    if (t = +t, e = +e, r = +r, !(r > 0)) return [];
    if (e === t) return [e];
    const n = t < e,
        [i, a, o] = n ? si(t, e, r) : si(e, t, r);
    if (!(a >= i)) return [];
    const u = a - i + 1,
        c = new Array(u);
    if (n)
        if (o < 0)
            for (let l = 0; l < u; ++l) c[l] = (a - l) / -o;
        else
            for (let l = 0; l < u; ++l) c[l] = (a - l) * o;
    else if (o < 0)
        for (let l = 0; l < u; ++l) c[l] = (i + l) / -o;
    else
        for (let l = 0; l < u; ++l) c[l] = (i + l) * o;
    return c
}

function fu(e, t, r) {
    return t = +t, e = +e, r = +r, si(e, t, r)[2]
}

function hu(e, t, r) {
    t = +t, e = +e, r = +r;
    const n = t < e,
        i = n ? fu(t, e, r) : fu(e, t, r);
    return (n ? -1 : 1) * (i < 0 ? 1 / -i : i)
}

function Ts(e, t) {
    let r;
    for (const n of e) n != null && (r < n || r === void 0 && n >= n) && (r = n);
    return r
}

function js(e, t) {
    let r;
    for (const n of e) n != null && (r > n || r === void 0 && n >= n) && (r = n);
    return r
}

function Qp(e, t, r = 0, n = 1 / 0, i) {
    if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
    for (i = i === void 0 ? Jp : E0(i); n > r;) {
        if (n - r > 600) {
            const c = n - r + 1,
                l = t - r + 1,
                f = Math.log(c),
                s = .5 * Math.exp(2 * f / 3),
                h = .5 * Math.sqrt(f * s * (c - s) / c) * (l - c / 2 < 0 ? -1 : 1),
                d = Math.max(r, Math.floor(t - l * s / c + h)),
                y = Math.min(n, Math.floor(t + (c - l) * s / c + h));
            Qp(e, t, d, y, i)
        }
        const a = e[t];
        let o = r,
            u = n;
        for (Cr(e, r, t), i(e[n], a) > 0 && Cr(e, r, n); o < u;) {
            for (Cr(e, o, u), ++o, --u; i(e[o], a) < 0;) ++o;
            for (; i(e[u], a) > 0;) --u
        }
        i(e[r], a) === 0 ? Cr(e, r, u) : (++u, Cr(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1)
    }
    return e
}

function Cr(e, t, r) {
    const n = e[t];
    e[t] = e[r], e[r] = n
}

function $0(e, t, r) {
    if (e = Float64Array.from(O0(e)), !(!(n = e.length) || isNaN(t = +t))) {
        if (t <= 0 || n < 2) return js(e);
        if (t >= 1) return Ts(e);
        var n, i = (n - 1) * t,
            a = Math.floor(i),
            o = Ts(Qp(e, a).subarray(0, a + 1)),
            u = js(e.subarray(a + 1));
        return o + (u - o) * (i - a)
    }
}

function C0(e, t, r = Zp) {
    if (!(!(n = e.length) || isNaN(t = +t))) {
        if (t <= 0 || n < 2) return +r(e[0], 0, e);
        if (t >= 1) return +r(e[n - 1], n - 1, e);
        var n, i = (n - 1) * t,
            a = Math.floor(i),
            o = +r(e[a], a, e),
            u = +r(e[a + 1], a + 1, e);
        return o + (u - o) * (i - a)
    }
}

function I0(e, t, r) {
    e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
    for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i;) a[n] = e + n * r;
    return a
}

function He(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(t).domain(e);
            break
    }
    return this
}

function dt(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1: {
            typeof e == "function" ? this.interpolator(e) : this.range(e);
            break
        }
        default: {
            this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
            break
        }
    }
    return this
}
const pu = Symbol("implicit");

function gc() {
    var e = new _s,
        t = [],
        r = [],
        n = pu;

    function i(a) {
        let o = e.get(a);
        if (o === void 0) {
            if (n !== pu) return n;
            e.set(a, o = t.push(a) - 1)
        }
        return r[o % r.length]
    }
    return i.domain = function(a) {
        if (!arguments.length) return t.slice();
        t = [], e = new _s;
        for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
        return i
    }, i.range = function(a) {
        return arguments.length ? (r = Array.from(a), i) : r.slice()
    }, i.unknown = function(a) {
        return arguments.length ? (n = a, i) : n
    }, i.copy = function() {
        return gc(t, r).unknown(n)
    }, He.apply(i, arguments), i
}

function Jr() {
    var e = gc().unknown(void 0),
        t = e.domain,
        r = e.range,
        n = 0,
        i = 1,
        a, o, u = !1,
        c = 0,
        l = 0,
        f = .5;
    delete e.unknown;

    function s() {
        var h = t().length,
            d = i < n,
            y = d ? i : n,
            v = d ? n : i;
        a = (v - y) / Math.max(1, h - c + l * 2), u && (a = Math.floor(a)), y += (v - y - a * (h - c)) * f, o = a * (1 - c), u && (y = Math.round(y), o = Math.round(o));
        var p = I0(h).map(function(x) {
            return y + a * x
        });
        return r(d ? p.reverse() : p)
    }
    return e.domain = function(h) {
        return arguments.length ? (t(h), s()) : t()
    }, e.range = function(h) {
        return arguments.length ? ([n, i] = h, n = +n, i = +i, s()) : [n, i]
    }, e.rangeRound = function(h) {
        return [n, i] = h, n = +n, i = +i, u = !0, s()
    }, e.bandwidth = function() {
        return o
    }, e.step = function() {
        return a
    }, e.round = function(h) {
        return arguments.length ? (u = !!h, s()) : u
    }, e.padding = function(h) {
        return arguments.length ? (c = Math.min(1, l = +h), s()) : c
    }, e.paddingInner = function(h) {
        return arguments.length ? (c = Math.min(1, h), s()) : c
    }, e.paddingOuter = function(h) {
        return arguments.length ? (l = +h, s()) : l
    }, e.align = function(h) {
        return arguments.length ? (f = Math.max(0, Math.min(1, h)), s()) : f
    }, e.copy = function() {
        return Jr(t(), [n, i]).round(u).paddingInner(c).paddingOuter(l).align(f)
    }, He.apply(s(), arguments)
}

function ed(e) {
    var t = e.copy;
    return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
        return ed(t())
    }, e
}

function Wr() {
    return ed(Jr.apply(null, arguments).paddingInner(1))
}

function bc(e, t, r) {
    e.prototype = t.prototype = r, r.constructor = e
}

function td(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t) r[n] = t[n];
    return r
}

function In() {}
var Qr = .7,
    fi = 1 / Qr,
    nr = "\\s*([+-]?\\d+)\\s*",
    en = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    k0 = /^#([0-9a-f]{3,8})$/,
    N0 = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`),
    D0 = new RegExp(`^rgb\\(${et},${et},${et}\\)$`),
    R0 = new RegExp(`^rgba\\(${nr},${nr},${nr},${en}\\)$`),
    B0 = new RegExp(`^rgba\\(${et},${et},${et},${en}\\)$`),
    L0 = new RegExp(`^hsl\\(${en},${et},${et}\\)$`),
    q0 = new RegExp(`^hsla\\(${en},${et},${et},${en}\\)$`),
    Ms = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
bc(In, tn, {
    copy(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: $s,
    formatHex: $s,
    formatHex8: F0,
    formatHsl: W0,
    formatRgb: Cs,
    toString: Cs
});

function $s() {
    return this.rgb().formatHex()
}

function F0() {
    return this.rgb().formatHex8()
}

function W0() {
    return rd(this).formatHsl()
}

function Cs() {
    return this.rgb().formatRgb()
}

function tn(e) {
    var t, r;
    return e = (e + "").trim().toLowerCase(), (t = k0.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Is(t) : r === 3 ? new ke(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Fn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Fn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = N0.exec(e)) ? new ke(t[1], t[2], t[3], 1) : (t = D0.exec(e)) ? new ke(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = R0.exec(e)) ? Fn(t[1], t[2], t[3], t[4]) : (t = B0.exec(e)) ? Fn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = L0.exec(e)) ? Ds(t[1], t[2] / 100, t[3] / 100, 1) : (t = q0.exec(e)) ? Ds(t[1], t[2] / 100, t[3] / 100, t[4]) : Ms.hasOwnProperty(e) ? Is(Ms[e]) : e === "transparent" ? new ke(NaN, NaN, NaN, 0) : null
}

function Is(e) {
    return new ke(e >> 16 & 255, e >> 8 & 255, e & 255, 1)
}

function Fn(e, t, r, n) {
    return n <= 0 && (e = t = r = NaN), new ke(e, t, r, n)
}

function z0(e) {
    return e instanceof In || (e = tn(e)), e ? (e = e.rgb(), new ke(e.r, e.g, e.b, e.opacity)) : new ke
}

function du(e, t, r, n) {
    return arguments.length === 1 ? z0(e) : new ke(e, t, r, n ?? 1)
}

function ke(e, t, r, n) {
    this.r = +e, this.g = +t, this.b = +r, this.opacity = +n
}
bc(ke, du, td(In, {
    brighter(e) {
        return e = e == null ? fi : Math.pow(fi, e), new ke(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    darker(e) {
        return e = e == null ? Qr : Math.pow(Qr, e), new ke(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new ke(Nt(this.r), Nt(this.g), Nt(this.b), hi(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: ks,
    formatHex: ks,
    formatHex8: U0,
    formatRgb: Ns,
    toString: Ns
}));

function ks() {
    return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`
}

function U0() {
    return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity)?1:this.opacity)*255)}`
}

function Ns() {
    const e = hi(this.opacity);
    return `${e===1?"rgb(":"rgba("}${Nt(this.r)}, ${Nt(this.g)}, ${Nt(this.b)}${e===1?")":`, ${e})`}`
}

function hi(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}

function Nt(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
}

function Ct(e) {
    return e = Nt(e), (e < 16 ? "0" : "") + e.toString(16)
}

function Ds(e, t, r, n) {
    return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ve(e, t, r, n)
}

function rd(e) {
    if (e instanceof Ve) return new Ve(e.h, e.s, e.l, e.opacity);
    if (e instanceof In || (e = tn(e)), !e) return new Ve;
    if (e instanceof Ve) return e;
    e = e.rgb();
    var t = e.r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        a = Math.max(t, r, n),
        o = NaN,
        u = a - i,
        c = (a + i) / 2;
    return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= c < .5 ? a + i : 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o, new Ve(o, u, c, e.opacity)
}

function H0(e, t, r, n) {
    return arguments.length === 1 ? rd(e) : new Ve(e, t, r, n ?? 1)
}

function Ve(e, t, r, n) {
    this.h = +e, this.s = +t, this.l = +r, this.opacity = +n
}
bc(Ve, H0, td(In, {
    brighter(e) {
        return e = e == null ? fi : Math.pow(fi, e), new Ve(this.h, this.s, this.l * e, this.opacity)
    },
    darker(e) {
        return e = e == null ? Qr : Math.pow(Qr, e), new Ve(this.h, this.s, this.l * e, this.opacity)
    },
    rgb() {
        var e = this.h % 360 + (this.h < 0) * 360,
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            n = r + (r < .5 ? r : 1 - r) * t,
            i = 2 * r - n;
        return new ke(oo(e >= 240 ? e - 240 : e + 120, i, n), oo(e, i, n), oo(e < 120 ? e + 240 : e - 120, i, n), this.opacity)
    },
    clamp() {
        return new Ve(Rs(this.h), Wn(this.s), Wn(this.l), hi(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const e = hi(this.opacity);
        return `${e===1?"hsl(":"hsla("}${Rs(this.h)}, ${Wn(this.s)*100}%, ${Wn(this.l)*100}%${e===1?")":`, ${e})`}`
    }
}));

function Rs(e) {
    return e = (e || 0) % 360, e < 0 ? e + 360 : e
}

function Wn(e) {
    return Math.max(0, Math.min(1, e || 0))
}

function oo(e, t, r) {
    return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255
}
const xc = e => () => e;

function G0(e, t) {
    return function(r) {
        return e + r * t
    }
}

function K0(e, t, r) {
    return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r,
        function(n) {
            return Math.pow(e + n * t, r)
        }
}

function X0(e) {
    return (e = +e) == 1 ? nd : function(t, r) {
        return r - t ? K0(t, r, e) : xc(isNaN(t) ? r : t)
    }
}

function nd(e, t) {
    var r = t - e;
    return r ? G0(e, r) : xc(isNaN(e) ? t : e)
}
const Bs = function e(t) {
    var r = X0(t);

    function n(i, a) {
        var o = r((i = du(i)).r, (a = du(a)).r),
            u = r(i.g, a.g),
            c = r(i.b, a.b),
            l = nd(i.opacity, a.opacity);
        return function(f) {
            return i.r = o(f), i.g = u(f), i.b = c(f), i.opacity = l(f), i + ""
        }
    }
    return n.gamma = e, n
}(1);

function V0(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0,
        n = t.slice(),
        i;
    return function(a) {
        for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
        return n
    }
}

function Y0(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView)
}

function Z0(e, t) {
    var r = t ? t.length : 0,
        n = e ? Math.min(r, e.length) : 0,
        i = new Array(n),
        a = new Array(r),
        o;
    for (o = 0; o < n; ++o) i[o] = Er(e[o], t[o]);
    for (; o < r; ++o) a[o] = t[o];
    return function(u) {
        for (o = 0; o < n; ++o) a[o] = i[o](u);
        return a
    }
}

function J0(e, t) {
    var r = new Date;
    return e = +e, t = +t,
        function(n) {
            return r.setTime(e * (1 - n) + t * n), r
        }
}

function pi(e, t) {
    return e = +e, t = +t,
        function(r) {
            return e * (1 - r) + t * r
        }
}

function Q0(e, t) {
    var r = {},
        n = {},
        i;
    (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
    for (i in t) i in e ? r[i] = Er(e[i], t[i]) : n[i] = t[i];
    return function(a) {
        for (i in r) n[i] = r[i](a);
        return n
    }
}
var vu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    uo = new RegExp(vu.source, "g");

function ex(e) {
    return function() {
        return e
    }
}

function tx(e) {
    return function(t) {
        return e(t) + ""
    }
}

function rx(e, t) {
    var r = vu.lastIndex = uo.lastIndex = 0,
        n, i, a, o = -1,
        u = [],
        c = [];
    for (e = e + "", t = t + "";
        (n = vu.exec(e)) && (i = uo.exec(t));)(a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, c.push({
        i: o,
        x: pi(n, i)
    })), r = uo.lastIndex;
    return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? c[0] ? tx(c[0].x) : ex(t) : (t = c.length, function(l) {
        for (var f = 0, s; f < t; ++f) u[(s = c[f]).i] = s.x(l);
        return u.join("")
    })
}

function Er(e, t) {
    var r = typeof t,
        n;
    return t == null || r === "boolean" ? xc(t) : (r === "number" ? pi : r === "string" ? (n = tn(t)) ? (t = n, Bs) : rx : t instanceof tn ? Bs : t instanceof Date ? J0 : Y0(t) ? V0 : Array.isArray(t) ? Z0 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Q0 : pi)(e, t)
}

function wc(e, t) {
    return e = +e, t = +t,
        function(r) {
            return Math.round(e * (1 - r) + t * r)
        }
}

function nx(e, t) {
    t === void 0 && (t = e, e = Er);
    for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n;) a[r] = e(i, i = t[++r]);
    return function(o) {
        var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
        return a[u](o - u)
    }
}

function ix(e) {
    return function() {
        return e
    }
}

function di(e) {
    return +e
}
var Ls = [0, 1];

function $e(e) {
    return e
}

function yu(e, t) {
    return (t -= e = +e) ? function(r) {
        return (r - e) / t
    } : ix(isNaN(t) ? NaN : .5)
}

function ax(e, t) {
    var r;
    return e > t && (r = e, e = t, t = r),
        function(n) {
            return Math.max(e, Math.min(t, n))
        }
}

function ox(e, t, r) {
    var n = e[0],
        i = e[1],
        a = t[0],
        o = t[1];
    return i < n ? (n = yu(i, n), a = r(o, a)) : (n = yu(n, i), a = r(a, o)),
        function(u) {
            return a(n(u))
        }
}

function ux(e, t, r) {
    var n = Math.min(e.length, t.length) - 1,
        i = new Array(n),
        a = new Array(n),
        o = -1;
    for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n;) i[o] = yu(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
    return function(u) {
        var c = Cn(e, u, 1, n) - 1;
        return a[c](i[c](u))
    }
}

function kn(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
}

function Ji() {
    var e = Ls,
        t = Ls,
        r = Er,
        n, i, a, o = $e,
        u, c, l;

    function f() {
        var h = Math.min(e.length, t.length);
        return o !== $e && (o = ax(e[0], e[h - 1])), u = h > 2 ? ux : ox, c = l = null, s
    }

    function s(h) {
        return h == null || isNaN(h = +h) ? a : (c || (c = u(e.map(n), t, r)))(n(o(h)))
    }
    return s.invert = function(h) {
            return o(i((l || (l = u(t, e.map(n), pi)))(h)))
        }, s.domain = function(h) {
            return arguments.length ? (e = Array.from(h, di), f()) : e.slice()
        }, s.range = function(h) {
            return arguments.length ? (t = Array.from(h), f()) : t.slice()
        }, s.rangeRound = function(h) {
            return t = Array.from(h), r = wc, f()
        }, s.clamp = function(h) {
            return arguments.length ? (o = h ? !0 : $e, f()) : o !== $e
        }, s.interpolate = function(h) {
            return arguments.length ? (r = h, f()) : r
        }, s.unknown = function(h) {
            return arguments.length ? (a = h, s) : a
        },
        function(h, d) {
            return n = h, i = d, f()
        }
}

function Oc() {
    return Ji()($e, $e)
}

function cx(e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}

function vi(e, t) {
    if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
    var r, n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)]
}

function sr(e) {
    return e = vi(Math.abs(e)), e ? e[1] : NaN
}

function lx(e, t) {
    return function(r, n) {
        for (var i = r.length, a = [], o = 0, u = e[0], c = 0; i > 0 && u > 0 && (c + u + 1 > n && (u = Math.max(1, n - c)), a.push(r.substring(i -= u, i + u)), !((c += u + 1) > n));) u = e[o = (o + 1) % e.length];
        return a.reverse().join(t)
    }
}

function sx(e) {
    return function(t) {
        return t.replace(/[0-9]/g, function(r) {
            return e[+r]
        })
    }
}
var fx = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function rn(e) {
    if (!(t = fx.exec(e))) throw new Error("invalid format: " + e);
    var t;
    return new Sc({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    })
}
rn.prototype = Sc.prototype;

function Sc(e) {
    this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + ""
}
Sc.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
};

function hx(e) {
    e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r) switch (e[r]) {
        case ".":
            n = i = r;
            break;
        case "0":
            n === 0 && (n = r), i = r;
            break;
        default:
            if (!+e[r]) break e;
            n > 0 && (n = 0);
            break
    }
    return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e
}
var id;

function px(e, t) {
    var r = vi(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1],
        a = i - (id = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
        o = n.length;
    return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + vi(e, Math.max(0, t + a - 1))[0]
}

function qs(e, t) {
    var r = vi(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1];
    return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0")
}
const Fs = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: cx,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => qs(e * 100, t),
    r: qs,
    s: px,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
};

function Ws(e) {
    return e
}
var zs = Array.prototype.map,
    Us = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function dx(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? Ws : lx(zs.call(e.grouping, Number), e.thousands + ""),
        r = e.currency === void 0 ? "" : e.currency[0] + "",
        n = e.currency === void 0 ? "" : e.currency[1] + "",
        i = e.decimal === void 0 ? "." : e.decimal + "",
        a = e.numerals === void 0 ? Ws : sx(zs.call(e.numerals, String)),
        o = e.percent === void 0 ? "%" : e.percent + "",
        u = e.minus === void 0 ? "−" : e.minus + "",
        c = e.nan === void 0 ? "NaN" : e.nan + "";

    function l(s) {
        s = rn(s);
        var h = s.fill,
            d = s.align,
            y = s.sign,
            v = s.symbol,
            p = s.zero,
            x = s.width,
            w = s.comma,
            b = s.precision,
            O = s.trim,
            m = s.type;
        m === "n" ? (w = !0, m = "g") : Fs[m] || (b === void 0 && (b = 12), O = !0, m = "g"), (p || h === "0" && d === "=") && (p = !0, h = "0", d = "=");
        var g = v === "$" ? r : v === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
            S = v === "$" ? n : /[%p]/.test(m) ? o : "",
            P = Fs[m],
            _ = /[defgprs%]/.test(m);
        b = b === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));

        function M(E) {
            var T = g,
                I = S,
                C, $, k;
            if (m === "c") I = P(E) + I, E = "";
            else {
                E = +E;
                var D = E < 0 || 1 / E < 0;
                if (E = isNaN(E) ? c : P(Math.abs(E), b), O && (E = hx(E)), D && +E == 0 && y !== "+" && (D = !1), T = (D ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + T, I = (m === "s" ? Us[8 + id / 3] : "") + I + (D && y === "(" ? ")" : ""), _) {
                    for (C = -1, $ = E.length; ++C < $;)
                        if (k = E.charCodeAt(C), 48 > k || k > 57) {
                            I = (k === 46 ? i + E.slice(C + 1) : E.slice(C)) + I, E = E.slice(0, C);
                            break
                        }
                }
            }
            w && !p && (E = t(E, 1 / 0));
            var L = T.length + E.length + I.length,
                q = L < x ? new Array(x - L + 1).join(h) : "";
            switch (w && p && (E = t(q + E, q.length ? x - I.length : 1 / 0), q = ""), d) {
                case "<":
                    E = T + E + I + q;
                    break;
                case "=":
                    E = T + q + E + I;
                    break;
                case "^":
                    E = q.slice(0, L = q.length >> 1) + T + E + I + q.slice(L);
                    break;
                default:
                    E = q + T + E + I;
                    break
            }
            return a(E)
        }
        return M.toString = function() {
            return s + ""
        }, M
    }

    function f(s, h) {
        var d = l((s = rn(s), s.type = "f", s)),
            y = Math.max(-8, Math.min(8, Math.floor(sr(h) / 3))) * 3,
            v = Math.pow(10, -y),
            p = Us[8 + y / 3];
        return function(x) {
            return d(v * x) + p
        }
    }
    return {
        format: l,
        formatPrefix: f
    }
}
var zn, Pc, ad;
vx({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});

function vx(e) {
    return zn = dx(e), Pc = zn.format, ad = zn.formatPrefix, zn
}

function yx(e) {
    return Math.max(0, -sr(Math.abs(e)))
}

function mx(e, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(sr(t) / 3))) * 3 - sr(Math.abs(e)))
}

function gx(e, t) {
    return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, sr(t) - sr(e)) + 1
}

function od(e, t, r, n) {
    var i = hu(e, t, r),
        a;
    switch (n = rn(n ?? ",f"), n.type) {
        case "s": {
            var o = Math.max(Math.abs(e), Math.abs(t));
            return n.precision == null && !isNaN(a = mx(i, o)) && (n.precision = a), ad(n, o)
        }
        case "":
        case "e":
        case "g":
        case "p":
        case "r": {
            n.precision == null && !isNaN(a = gx(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
            break
        }
        case "f":
        case "%": {
            n.precision == null && !isNaN(a = yx(i)) && (n.precision = a - (n.type === "%") * 2);
            break
        }
    }
    return Pc(n)
}

function Ot(e) {
    var t = e.domain;
    return e.ticks = function(r) {
        var n = t();
        return su(n[0], n[n.length - 1], r ?? 10)
    }, e.tickFormat = function(r, n) {
        var i = t();
        return od(i[0], i[i.length - 1], r ?? 10, n)
    }, e.nice = function(r) {
        r == null && (r = 10);
        var n = t(),
            i = 0,
            a = n.length - 1,
            o = n[i],
            u = n[a],
            c, l, f = 10;
        for (u < o && (l = o, o = u, u = l, l = i, i = a, a = l); f-- > 0;) {
            if (l = fu(o, u, r), l === c) return n[i] = o, n[a] = u, t(n);
            if (l > 0) o = Math.floor(o / l) * l, u = Math.ceil(u / l) * l;
            else if (l < 0) o = Math.ceil(o * l) / l, u = Math.floor(u * l) / l;
            else break;
            c = l
        }
        return e
    }, e
}

function yi() {
    var e = Oc();
    return e.copy = function() {
        return kn(e, yi())
    }, He.apply(e, arguments), Ot(e)
}

function ud(e) {
    var t;

    function r(n) {
        return n == null || isNaN(n = +n) ? t : n
    }
    return r.invert = r, r.domain = r.range = function(n) {
        return arguments.length ? (e = Array.from(n, di), r) : e.slice()
    }, r.unknown = function(n) {
        return arguments.length ? (t = n, r) : t
    }, r.copy = function() {
        return ud(e).unknown(t)
    }, e = arguments.length ? Array.from(e, di) : [0, 1], Ot(r)
}

function cd(e, t) {
    e = e.slice();
    var r = 0,
        n = e.length - 1,
        i = e[r],
        a = e[n],
        o;
    return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e
}

function Hs(e) {
    return Math.log(e)
}

function Gs(e) {
    return Math.exp(e)
}

function bx(e) {
    return -Math.log(-e)
}

function xx(e) {
    return -Math.exp(-e)
}

function wx(e) {
    return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e
}

function Ox(e) {
    return e === 10 ? wx : e === Math.E ? Math.exp : t => Math.pow(e, t)
}

function Sx(e) {
    return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), t => Math.log(t) / e)
}

function Ks(e) {
    return (t, r) => -e(-t, r)
}

function Ac(e) {
    const t = e(Hs, Gs),
        r = t.domain;
    let n = 10,
        i, a;

    function o() {
        return i = Sx(n), a = Ox(n), r()[0] < 0 ? (i = Ks(i), a = Ks(a), e(bx, xx)) : e(Hs, Gs), t
    }
    return t.base = function(u) {
        return arguments.length ? (n = +u, o()) : n
    }, t.domain = function(u) {
        return arguments.length ? (r(u), o()) : r()
    }, t.ticks = u => {
        const c = r();
        let l = c[0],
            f = c[c.length - 1];
        const s = f < l;
        s && ([l, f] = [f, l]);
        let h = i(l),
            d = i(f),
            y, v;
        const p = u == null ? 10 : +u;
        let x = [];
        if (!(n % 1) && d - h < p) {
            if (h = Math.floor(h), d = Math.ceil(d), l > 0) {
                for (; h <= d; ++h)
                    for (y = 1; y < n; ++y)
                        if (v = h < 0 ? y / a(-h) : y * a(h), !(v < l)) {
                            if (v > f) break;
                            x.push(v)
                        }
            } else
                for (; h <= d; ++h)
                    for (y = n - 1; y >= 1; --y)
                        if (v = h > 0 ? y / a(-h) : y * a(h), !(v < l)) {
                            if (v > f) break;
                            x.push(v)
                        } x.length * 2 < p && (x = su(l, f, p))
        } else x = su(h, d, Math.min(d - h, p)).map(a);
        return s ? x.reverse() : x
    }, t.tickFormat = (u, c) => {
        if (u == null && (u = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = rn(c)).precision == null && (c.trim = !0), c = Pc(c)), u === 1 / 0) return c;
        const l = Math.max(1, n * u / t.ticks().length);
        return f => {
            let s = f / a(Math.round(i(f)));
            return s * n < n - .5 && (s *= n), s <= l ? c(f) : ""
        }
    }, t.nice = () => r(cd(r(), {
        floor: u => a(Math.floor(i(u))),
        ceil: u => a(Math.ceil(i(u)))
    })), t
}

function ld() {
    const e = Ac(Ji()).domain([1, 10]);
    return e.copy = () => kn(e, ld()).base(e.base()), He.apply(e, arguments), e
}

function Xs(e) {
    return function(t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e))
    }
}

function Vs(e) {
    return function(t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e
    }
}

function _c(e) {
    var t = 1,
        r = e(Xs(t), Vs(t));
    return r.constant = function(n) {
        return arguments.length ? e(Xs(t = +n), Vs(t)) : t
    }, Ot(r)
}

function sd() {
    var e = _c(Ji());
    return e.copy = function() {
        return kn(e, sd()).constant(e.constant())
    }, He.apply(e, arguments)
}

function Ys(e) {
    return function(t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
    }
}

function Px(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e)
}

function Ax(e) {
    return e < 0 ? -e * e : e * e
}

function Ec(e) {
    var t = e($e, $e),
        r = 1;

    function n() {
        return r === 1 ? e($e, $e) : r === .5 ? e(Px, Ax) : e(Ys(r), Ys(1 / r))
    }
    return t.exponent = function(i) {
        return arguments.length ? (r = +i, n()) : r
    }, Ot(t)
}

function Tc() {
    var e = Ec(Ji());
    return e.copy = function() {
        return kn(e, Tc()).exponent(e.exponent())
    }, He.apply(e, arguments), e
}

function _x() {
    return Tc.apply(null, arguments).exponent(.5)
}

function Zs(e) {
    return Math.sign(e) * e * e
}

function Ex(e) {
    return Math.sign(e) * Math.sqrt(Math.abs(e))
}

function fd() {
    var e = Oc(),
        t = [0, 1],
        r = !1,
        n;

    function i(a) {
        var o = Ex(e(a));
        return isNaN(o) ? n : r ? Math.round(o) : o
    }
    return i.invert = function(a) {
        return e.invert(Zs(a))
    }, i.domain = function(a) {
        return arguments.length ? (e.domain(a), i) : e.domain()
    }, i.range = function(a) {
        return arguments.length ? (e.range((t = Array.from(a, di)).map(Zs)), i) : t.slice()
    }, i.rangeRound = function(a) {
        return i.range(a).round(!0)
    }, i.round = function(a) {
        return arguments.length ? (r = !!a, i) : r
    }, i.clamp = function(a) {
        return arguments.length ? (e.clamp(a), i) : e.clamp()
    }, i.unknown = function(a) {
        return arguments.length ? (n = a, i) : n
    }, i.copy = function() {
        return fd(e.domain(), t).round(r).clamp(e.clamp()).unknown(n)
    }, He.apply(i, arguments), Ot(i)
}

function hd() {
    var e = [],
        t = [],
        r = [],
        n;

    function i() {
        var o = 0,
            u = Math.max(1, t.length);
        for (r = new Array(u - 1); ++o < u;) r[o - 1] = C0(e, o / u);
        return a
    }

    function a(o) {
        return o == null || isNaN(o = +o) ? n : t[Cn(r, o)]
    }
    return a.invertExtent = function(o) {
        var u = t.indexOf(o);
        return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e[0], u < r.length ? r[u] : e[e.length - 1]]
    }, a.domain = function(o) {
        if (!arguments.length) return e.slice();
        e = [];
        for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
        return e.sort(bt), i()
    }, a.range = function(o) {
        return arguments.length ? (t = Array.from(o), i()) : t.slice()
    }, a.unknown = function(o) {
        return arguments.length ? (n = o, a) : n
    }, a.quantiles = function() {
        return r.slice()
    }, a.copy = function() {
        return hd().domain(e).range(t).unknown(n)
    }, He.apply(a, arguments)
}

function pd() {
    var e = 0,
        t = 1,
        r = 1,
        n = [.5],
        i = [0, 1],
        a;

    function o(c) {
        return c != null && c <= c ? i[Cn(n, c, 0, r)] : a
    }

    function u() {
        var c = -1;
        for (n = new Array(r); ++c < r;) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
        return o
    }
    return o.domain = function(c) {
        return arguments.length ? ([e, t] = c, e = +e, t = +t, u()) : [e, t]
    }, o.range = function(c) {
        return arguments.length ? (r = (i = Array.from(c)).length - 1, u()) : i.slice()
    }, o.invertExtent = function(c) {
        var l = i.indexOf(c);
        return l < 0 ? [NaN, NaN] : l < 1 ? [e, n[0]] : l >= r ? [n[r - 1], t] : [n[l - 1], n[l]]
    }, o.unknown = function(c) {
        return arguments.length && (a = c), o
    }, o.thresholds = function() {
        return n.slice()
    }, o.copy = function() {
        return pd().domain([e, t]).range(i).unknown(a)
    }, He.apply(Ot(o), arguments)
}

function dd() {
    var e = [.5],
        t = [0, 1],
        r, n = 1;

    function i(a) {
        return a != null && a <= a ? t[Cn(e, a, 0, n)] : r
    }
    return i.domain = function(a) {
        return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice()
    }, i.range = function(a) {
        return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice()
    }, i.invertExtent = function(a) {
        var o = t.indexOf(a);
        return [e[o - 1], e[o]]
    }, i.unknown = function(a) {
        return arguments.length ? (r = a, i) : r
    }, i.copy = function() {
        return dd().domain(e).range(t).unknown(r)
    }, He.apply(i, arguments)
}
const co = new Date,
    lo = new Date;

function Oe(e, t, r, n) {
    function i(a) {
        return e(a = arguments.length === 0 ? new Date : new Date(+a)), a
    }
    return i.floor = a => (e(a = new Date(+a)), a), i.ceil = a => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = a => {
        const o = i(a),
            u = i.ceil(a);
        return a - o < u - a ? o : u
    }, i.offset = (a, o) => (t(a = new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
        const c = [];
        if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return c;
        let l;
        do c.push(l = new Date(+a)), t(a, u), e(a); while (l < a && a < o);
        return c
    }, i.filter = a => Oe(o => {
        if (o >= o)
            for (; e(o), !a(o);) o.setTime(o - 1)
    }, (o, u) => {
        if (o >= o)
            if (u < 0)
                for (; ++u <= 0;)
                    for (; t(o, -1), !a(o););
            else
                for (; --u >= 0;)
                    for (; t(o, 1), !a(o););
    }), r && (i.count = (a, o) => (co.setTime(+a), lo.setTime(+o), e(co), e(lo), Math.floor(r(co, lo))), i.every = a => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? o => n(o) % a === 0 : o => i.count(0, o) % a === 0) : i)), i
}
const mi = Oe(() => {}, (e, t) => {
    e.setTime(+e + t)
}, (e, t) => t - e);
mi.every = e => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Oe(t => {
    t.setTime(Math.floor(t / e) * e)
}, (t, r) => {
    t.setTime(+t + r * e)
}, (t, r) => (r - t) / e) : mi);
mi.range;
const at = 1e3,
    We = at * 60,
    ot = We * 60,
    ft = ot * 24,
    jc = ft * 7,
    Js = ft * 30,
    so = ft * 365,
    It = Oe(e => {
        e.setTime(e - e.getMilliseconds())
    }, (e, t) => {
        e.setTime(+e + t * at)
    }, (e, t) => (t - e) / at, e => e.getUTCSeconds());
It.range;
const Mc = Oe(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * at)
}, (e, t) => {
    e.setTime(+e + t * We)
}, (e, t) => (t - e) / We, e => e.getMinutes());
Mc.range;
const $c = Oe(e => {
    e.setUTCSeconds(0, 0)
}, (e, t) => {
    e.setTime(+e + t * We)
}, (e, t) => (t - e) / We, e => e.getUTCMinutes());
$c.range;
const Cc = Oe(e => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * at - e.getMinutes() * We)
}, (e, t) => {
    e.setTime(+e + t * ot)
}, (e, t) => (t - e) / ot, e => e.getHours());
Cc.range;
const Ic = Oe(e => {
    e.setUTCMinutes(0, 0, 0)
}, (e, t) => {
    e.setTime(+e + t * ot)
}, (e, t) => (t - e) / ot, e => e.getUTCHours());
Ic.range;
const Nn = Oe(e => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * We) / ft, e => e.getDate() - 1);
Nn.range;
const Qi = Oe(e => {
    e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}, (e, t) => (t - e) / ft, e => e.getUTCDate() - 1);
Qi.range;
const vd = Oe(e => {
    e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCDate(e.getUTCDate() + t)
}, (e, t) => (t - e) / ft, e => Math.floor(e / ft));
vd.range;

function Ut(e) {
    return Oe(t => {
        t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
    }, (t, r) => {
        t.setDate(t.getDate() + r * 7)
    }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * We) / jc)
}
const ea = Ut(0),
    gi = Ut(1),
    Tx = Ut(2),
    jx = Ut(3),
    fr = Ut(4),
    Mx = Ut(5),
    $x = Ut(6);
ea.range;
gi.range;
Tx.range;
jx.range;
fr.range;
Mx.range;
$x.range;

function Ht(e) {
    return Oe(t => {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
    }, (t, r) => {
        t.setUTCDate(t.getUTCDate() + r * 7)
    }, (t, r) => (r - t) / jc)
}
const ta = Ht(0),
    bi = Ht(1),
    Cx = Ht(2),
    Ix = Ht(3),
    hr = Ht(4),
    kx = Ht(5),
    Nx = Ht(6);
ta.range;
bi.range;
Cx.range;
Ix.range;
hr.range;
kx.range;
Nx.range;
const kc = Oe(e => {
    e.setDate(1), e.setHours(0, 0, 0, 0)
}, (e, t) => {
    e.setMonth(e.getMonth() + t)
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, e => e.getMonth());
kc.range;
const Nc = Oe(e => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t)
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, e => e.getUTCMonth());
Nc.range;
const ht = Oe(e => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
}, (e, t) => {
    e.setFullYear(e.getFullYear() + t)
}, (e, t) => t.getFullYear() - e.getFullYear(), e => e.getFullYear());
ht.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Oe(t => {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
}, (t, r) => {
    t.setFullYear(t.getFullYear() + r * e)
});
ht.range;
const pt = Oe(e => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
}, (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t)
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), e => e.getUTCFullYear());
pt.every = e => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Oe(t => {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
}, (t, r) => {
    t.setUTCFullYear(t.getUTCFullYear() + r * e)
});
pt.range;

function yd(e, t, r, n, i, a) {
    const o = [
        [It, 1, at],
        [It, 5, 5 * at],
        [It, 15, 15 * at],
        [It, 30, 30 * at],
        [a, 1, We],
        [a, 5, 5 * We],
        [a, 15, 15 * We],
        [a, 30, 30 * We],
        [i, 1, ot],
        [i, 3, 3 * ot],
        [i, 6, 6 * ot],
        [i, 12, 12 * ot],
        [n, 1, ft],
        [n, 2, 2 * ft],
        [r, 1, jc],
        [t, 1, Js],
        [t, 3, 3 * Js],
        [e, 1, so]
    ];

    function u(l, f, s) {
        const h = f < l;
        h && ([l, f] = [f, l]);
        const d = s && typeof s.range == "function" ? s : c(l, f, s),
            y = d ? d.range(l, +f + 1) : [];
        return h ? y.reverse() : y
    }

    function c(l, f, s) {
        const h = Math.abs(f - l) / s,
            d = mc(([, , p]) => p).right(o, h);
        if (d === o.length) return e.every(hu(l / so, f / so, s));
        if (d === 0) return mi.every(Math.max(hu(l, f, s), 1));
        const [y, v] = o[h / o[d - 1][2] < o[d][2] / h ? d - 1 : d];
        return y.every(v)
    }
    return [u, c]
}
const [Dx, Rx] = yd(pt, Nc, ta, vd, Ic, $c), [Bx, Lx] = yd(ht, kc, ea, Nn, Cc, Mc);

function fo(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y), t
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
}

function ho(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y), t
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
}

function Ir(e, t, r) {
    return {
        y: e,
        m: t,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}

function qx(e) {
    var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        a = e.days,
        o = e.shortDays,
        u = e.months,
        c = e.shortMonths,
        l = kr(i),
        f = Nr(i),
        s = kr(a),
        h = Nr(a),
        d = kr(o),
        y = Nr(o),
        v = kr(u),
        p = Nr(u),
        x = kr(c),
        w = Nr(c),
        b = {
            a: D,
            A: L,
            b: q,
            B: U,
            c: null,
            d: af,
            e: af,
            f: lw,
            g: bw,
            G: ww,
            H: ow,
            I: uw,
            j: cw,
            L: md,
            m: sw,
            M: fw,
            p: G,
            q: W,
            Q: cf,
            s: lf,
            S: hw,
            u: pw,
            U: dw,
            V: vw,
            w: yw,
            W: mw,
            x: null,
            X: null,
            y: gw,
            Y: xw,
            Z: Ow,
            "%": uf
        },
        O = {
            a: K,
            A: ce,
            b: de,
            B: Ne,
            c: null,
            d: of,
            e: of,
            f: _w,
            g: Dw,
            G: Bw,
            H: Sw,
            I: Pw,
            j: Aw,
            L: bd,
            m: Ew,
            M: Tw,
            p: At,
            q: Ce,
            Q: cf,
            s: lf,
            S: jw,
            u: Mw,
            U: $w,
            V: Cw,
            w: Iw,
            W: kw,
            x: null,
            X: null,
            y: Nw,
            Y: Rw,
            Z: Lw,
            "%": uf
        },
        m = {
            a: M,
            A: E,
            b: T,
            B: I,
            c: C,
            d: rf,
            e: rf,
            f: rw,
            g: tf,
            G: ef,
            H: nf,
            I: nf,
            j: Jx,
            L: tw,
            m: Zx,
            M: Qx,
            p: _,
            q: Yx,
            Q: iw,
            s: aw,
            S: ew,
            u: Hx,
            U: Gx,
            V: Kx,
            w: Ux,
            W: Xx,
            x: $,
            X: k,
            y: tf,
            Y: ef,
            Z: Vx,
            "%": nw
        };
    b.x = g(r, b), b.X = g(n, b), b.c = g(t, b), O.x = g(r, O), O.X = g(n, O), O.c = g(t, O);

    function g(F, X) {
        return function(V) {
            var N = [],
                he = -1,
                J = 0,
                me = F.length,
                ge, Ie, vt;
            for (V instanceof Date || (V = new Date(+V)); ++he < me;) F.charCodeAt(he) === 37 && (N.push(F.slice(J, he)), (Ie = Qs[ge = F.charAt(++he)]) != null ? ge = F.charAt(++he) : Ie = ge === "e" ? " " : "0", (vt = X[ge]) && (ge = vt(V, Ie)), N.push(ge), J = he + 1);
            return N.push(F.slice(J, he)), N.join("")
        }
    }

    function S(F, X) {
        return function(V) {
            var N = Ir(1900, void 0, 1),
                he = P(N, F, V += "", 0),
                J, me;
            if (he != V.length) return null;
            if ("Q" in N) return new Date(N.Q);
            if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
            if (X && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
                if (N.V < 1 || N.V > 53) return null;
                "w" in N || (N.w = 1), "Z" in N ? (J = ho(Ir(N.y, 0, 1)), me = J.getUTCDay(), J = me > 4 || me === 0 ? bi.ceil(J) : bi(J), J = Qi.offset(J, (N.V - 1) * 7), N.y = J.getUTCFullYear(), N.m = J.getUTCMonth(), N.d = J.getUTCDate() + (N.w + 6) % 7) : (J = fo(Ir(N.y, 0, 1)), me = J.getDay(), J = me > 4 || me === 0 ? gi.ceil(J) : gi(J), J = Nn.offset(J, (N.V - 1) * 7), N.y = J.getFullYear(), N.m = J.getMonth(), N.d = J.getDate() + (N.w + 6) % 7)
            } else("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), me = "Z" in N ? ho(Ir(N.y, 0, 1)).getUTCDay() : fo(Ir(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (me + 5) % 7 : N.w + N.U * 7 - (me + 6) % 7);
            return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, ho(N)) : fo(N)
        }
    }

    function P(F, X, V, N) {
        for (var he = 0, J = X.length, me = V.length, ge, Ie; he < J;) {
            if (N >= me) return -1;
            if (ge = X.charCodeAt(he++), ge === 37) {
                if (ge = X.charAt(he++), Ie = m[ge in Qs ? X.charAt(he++) : ge], !Ie || (N = Ie(F, V, N)) < 0) return -1
            } else if (ge != V.charCodeAt(N++)) return -1
        }
        return N
    }

    function _(F, X, V) {
        var N = l.exec(X.slice(V));
        return N ? (F.p = f.get(N[0].toLowerCase()), V + N[0].length) : -1
    }

    function M(F, X, V) {
        var N = d.exec(X.slice(V));
        return N ? (F.w = y.get(N[0].toLowerCase()), V + N[0].length) : -1
    }

    function E(F, X, V) {
        var N = s.exec(X.slice(V));
        return N ? (F.w = h.get(N[0].toLowerCase()), V + N[0].length) : -1
    }

    function T(F, X, V) {
        var N = x.exec(X.slice(V));
        return N ? (F.m = w.get(N[0].toLowerCase()), V + N[0].length) : -1
    }

    function I(F, X, V) {
        var N = v.exec(X.slice(V));
        return N ? (F.m = p.get(N[0].toLowerCase()), V + N[0].length) : -1
    }

    function C(F, X, V) {
        return P(F, t, X, V)
    }

    function $(F, X, V) {
        return P(F, r, X, V)
    }

    function k(F, X, V) {
        return P(F, n, X, V)
    }

    function D(F) {
        return o[F.getDay()]
    }

    function L(F) {
        return a[F.getDay()]
    }

    function q(F) {
        return c[F.getMonth()]
    }

    function U(F) {
        return u[F.getMonth()]
    }

    function G(F) {
        return i[+(F.getHours() >= 12)]
    }

    function W(F) {
        return 1 + ~~(F.getMonth() / 3)
    }

    function K(F) {
        return o[F.getUTCDay()]
    }

    function ce(F) {
        return a[F.getUTCDay()]
    }

    function de(F) {
        return c[F.getUTCMonth()]
    }

    function Ne(F) {
        return u[F.getUTCMonth()]
    }

    function At(F) {
        return i[+(F.getUTCHours() >= 12)]
    }

    function Ce(F) {
        return 1 + ~~(F.getUTCMonth() / 3)
    }
    return {
        format: function(F) {
            var X = g(F += "", b);
            return X.toString = function() {
                return F
            }, X
        },
        parse: function(F) {
            var X = S(F += "", !1);
            return X.toString = function() {
                return F
            }, X
        },
        utcFormat: function(F) {
            var X = g(F += "", O);
            return X.toString = function() {
                return F
            }, X
        },
        utcParse: function(F) {
            var X = S(F += "", !0);
            return X.toString = function() {
                return F
            }, X
        }
    }
}
var Qs = {
        "-": "",
        _: " ",
        0: "0"
    },
    Ae = /^\s*\d+/,
    Fx = /^%/,
    Wx = /[\\^$*+?|[\]().{}]/g;

function Q(e, t, r) {
    var n = e < 0 ? "-" : "",
        i = (n ? -e : e) + "",
        a = i.length;
    return n + (a < r ? new Array(r - a + 1).join(t) + i : i)
}

function zx(e) {
    return e.replace(Wx, "\\$&")
}

function kr(e) {
    return new RegExp("^(?:" + e.map(zx).join("|") + ")", "i")
}

function Nr(e) {
    return new Map(e.map((t, r) => [t.toLowerCase(), r]))
}

function Ux(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 1));
    return n ? (e.w = +n[0], r + n[0].length) : -1
}

function Hx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 1));
    return n ? (e.u = +n[0], r + n[0].length) : -1
}

function Gx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.U = +n[0], r + n[0].length) : -1
}

function Kx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.V = +n[0], r + n[0].length) : -1
}

function Xx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.W = +n[0], r + n[0].length) : -1
}

function ef(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 4));
    return n ? (e.y = +n[0], r + n[0].length) : -1
}

function tf(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1
}

function Vx(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1
}

function Yx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 1));
    return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1
}

function Zx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.m = n[0] - 1, r + n[0].length) : -1
}

function rf(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.d = +n[0], r + n[0].length) : -1
}

function Jx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 3));
    return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1
}

function nf(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.H = +n[0], r + n[0].length) : -1
}

function Qx(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.M = +n[0], r + n[0].length) : -1
}

function ew(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 2));
    return n ? (e.S = +n[0], r + n[0].length) : -1
}

function tw(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 3));
    return n ? (e.L = +n[0], r + n[0].length) : -1
}

function rw(e, t, r) {
    var n = Ae.exec(t.slice(r, r + 6));
    return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1
}

function nw(e, t, r) {
    var n = Fx.exec(t.slice(r, r + 1));
    return n ? r + n[0].length : -1
}

function iw(e, t, r) {
    var n = Ae.exec(t.slice(r));
    return n ? (e.Q = +n[0], r + n[0].length) : -1
}

function aw(e, t, r) {
    var n = Ae.exec(t.slice(r));
    return n ? (e.s = +n[0], r + n[0].length) : -1
}

function af(e, t) {
    return Q(e.getDate(), t, 2)
}

function ow(e, t) {
    return Q(e.getHours(), t, 2)
}

function uw(e, t) {
    return Q(e.getHours() % 12 || 12, t, 2)
}

function cw(e, t) {
    return Q(1 + Nn.count(ht(e), e), t, 3)
}

function md(e, t) {
    return Q(e.getMilliseconds(), t, 3)
}

function lw(e, t) {
    return md(e, t) + "000"
}

function sw(e, t) {
    return Q(e.getMonth() + 1, t, 2)
}

function fw(e, t) {
    return Q(e.getMinutes(), t, 2)
}

function hw(e, t) {
    return Q(e.getSeconds(), t, 2)
}

function pw(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t
}

function dw(e, t) {
    return Q(ea.count(ht(e) - 1, e), t, 2)
}

function gd(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? fr(e) : fr.ceil(e)
}

function vw(e, t) {
    return e = gd(e), Q(fr.count(ht(e), e) + (ht(e).getDay() === 4), t, 2)
}

function yw(e) {
    return e.getDay()
}

function mw(e, t) {
    return Q(gi.count(ht(e) - 1, e), t, 2)
}

function gw(e, t) {
    return Q(e.getFullYear() % 100, t, 2)
}

function bw(e, t) {
    return e = gd(e), Q(e.getFullYear() % 100, t, 2)
}

function xw(e, t) {
    return Q(e.getFullYear() % 1e4, t, 4)
}

function ww(e, t) {
    var r = e.getDay();
    return e = r >= 4 || r === 0 ? fr(e) : fr.ceil(e), Q(e.getFullYear() % 1e4, t, 4)
}

function Ow(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : (t *= -1, "+")) + Q(t / 60 | 0, "0", 2) + Q(t % 60, "0", 2)
}

function of(e, t) {
    return Q(e.getUTCDate(), t, 2)
}

function Sw(e, t) {
    return Q(e.getUTCHours(), t, 2)
}

function Pw(e, t) {
    return Q(e.getUTCHours() % 12 || 12, t, 2)
}

function Aw(e, t) {
    return Q(1 + Qi.count(pt(e), e), t, 3)
}

function bd(e, t) {
    return Q(e.getUTCMilliseconds(), t, 3)
}

function _w(e, t) {
    return bd(e, t) + "000"
}

function Ew(e, t) {
    return Q(e.getUTCMonth() + 1, t, 2)
}

function Tw(e, t) {
    return Q(e.getUTCMinutes(), t, 2)
}

function jw(e, t) {
    return Q(e.getUTCSeconds(), t, 2)
}

function Mw(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t
}

function $w(e, t) {
    return Q(ta.count(pt(e) - 1, e), t, 2)
}

function xd(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? hr(e) : hr.ceil(e)
}

function Cw(e, t) {
    return e = xd(e), Q(hr.count(pt(e), e) + (pt(e).getUTCDay() === 4), t, 2)
}

function Iw(e) {
    return e.getUTCDay()
}

function kw(e, t) {
    return Q(bi.count(pt(e) - 1, e), t, 2)
}

function Nw(e, t) {
    return Q(e.getUTCFullYear() % 100, t, 2)
}

function Dw(e, t) {
    return e = xd(e), Q(e.getUTCFullYear() % 100, t, 2)
}

function Rw(e, t) {
    return Q(e.getUTCFullYear() % 1e4, t, 4)
}

function Bw(e, t) {
    var r = e.getUTCDay();
    return e = r >= 4 || r === 0 ? hr(e) : hr.ceil(e), Q(e.getUTCFullYear() % 1e4, t, 4)
}

function Lw() {
    return "+0000"
}

function uf() {
    return "%"
}

function cf(e) {
    return +e
}

function lf(e) {
    return Math.floor(+e / 1e3)
}
var Yt, wd, Od;
qw({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function qw(e) {
    return Yt = qx(e), wd = Yt.format, Yt.parse, Od = Yt.utcFormat, Yt.utcParse, Yt
}

function Fw(e) {
    return new Date(e)
}

function Ww(e) {
    return e instanceof Date ? +e : +new Date(+e)
}

function Dc(e, t, r, n, i, a, o, u, c, l) {
    var f = Oc(),
        s = f.invert,
        h = f.domain,
        d = l(".%L"),
        y = l(":%S"),
        v = l("%I:%M"),
        p = l("%I %p"),
        x = l("%a %d"),
        w = l("%b %d"),
        b = l("%B"),
        O = l("%Y");

    function m(g) {
        return (c(g) < g ? d : u(g) < g ? y : o(g) < g ? v : a(g) < g ? p : n(g) < g ? i(g) < g ? x : w : r(g) < g ? b : O)(g)
    }
    return f.invert = function(g) {
        return new Date(s(g))
    }, f.domain = function(g) {
        return arguments.length ? h(Array.from(g, Ww)) : h().map(Fw)
    }, f.ticks = function(g) {
        var S = h();
        return e(S[0], S[S.length - 1], g ?? 10)
    }, f.tickFormat = function(g, S) {
        return S == null ? m : l(S)
    }, f.nice = function(g) {
        var S = h();
        return (!g || typeof g.range != "function") && (g = t(S[0], S[S.length - 1], g ?? 10)), g ? h(cd(S, g)) : f
    }, f.copy = function() {
        return kn(f, Dc(e, t, r, n, i, a, o, u, c, l))
    }, f
}

function zw() {
    return He.apply(Dc(Bx, Lx, ht, kc, ea, Nn, Cc, Mc, It, wd).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
}

function Uw() {
    return He.apply(Dc(Dx, Rx, pt, Nc, ta, Qi, Ic, $c, It, Od).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
}

function ra() {
    var e = 0,
        t = 1,
        r, n, i, a, o = $e,
        u = !1,
        c;

    function l(s) {
        return s == null || isNaN(s = +s) ? c : o(i === 0 ? .5 : (s = (a(s) - r) * i, u ? Math.max(0, Math.min(1, s)) : s))
    }
    l.domain = function(s) {
        return arguments.length ? ([e, t] = s, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), l) : [e, t]
    }, l.clamp = function(s) {
        return arguments.length ? (u = !!s, l) : u
    }, l.interpolator = function(s) {
        return arguments.length ? (o = s, l) : o
    };

    function f(s) {
        return function(h) {
            var d, y;
            return arguments.length ? ([d, y] = h, o = s(d, y), l) : [o(0), o(1)]
        }
    }
    return l.range = f(Er), l.rangeRound = f(wc), l.unknown = function(s) {
            return arguments.length ? (c = s, l) : c
        },
        function(s) {
            return a = s, r = s(e), n = s(t), i = r === n ? 0 : 1 / (n - r), l
        }
}

function St(e, t) {
    return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())
}

function Sd() {
    var e = Ot(ra()($e));
    return e.copy = function() {
        return St(e, Sd())
    }, dt.apply(e, arguments)
}

function Pd() {
    var e = Ac(ra()).domain([1, 10]);
    return e.copy = function() {
        return St(e, Pd()).base(e.base())
    }, dt.apply(e, arguments)
}

function Ad() {
    var e = _c(ra());
    return e.copy = function() {
        return St(e, Ad()).constant(e.constant())
    }, dt.apply(e, arguments)
}

function Rc() {
    var e = Ec(ra());
    return e.copy = function() {
        return St(e, Rc()).exponent(e.exponent())
    }, dt.apply(e, arguments)
}

function Hw() {
    return Rc.apply(null, arguments).exponent(.5)
}

function _d() {
    var e = [],
        t = $e;

    function r(n) {
        if (n != null && !isNaN(n = +n)) return t((Cn(e, n, 1) - 1) / (e.length - 1))
    }
    return r.domain = function(n) {
        if (!arguments.length) return e.slice();
        e = [];
        for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
        return e.sort(bt), r
    }, r.interpolator = function(n) {
        return arguments.length ? (t = n, r) : t
    }, r.range = function() {
        return e.map((n, i) => t(i / (e.length - 1)))
    }, r.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (i, a) => $0(e, a / n))
    }, r.copy = function() {
        return _d(t).domain(e)
    }, dt.apply(r, arguments)
}

function na() {
    var e = 0,
        t = .5,
        r = 1,
        n = 1,
        i, a, o, u, c, l = $e,
        f, s = !1,
        h;

    function d(v) {
        return isNaN(v = +v) ? h : (v = .5 + ((v = +f(v)) - a) * (n * v < n * a ? u : c), l(s ? Math.max(0, Math.min(1, v)) : v))
    }
    d.domain = function(v) {
        return arguments.length ? ([e, t, r] = v, i = f(e = +e), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), n = a < i ? -1 : 1, d) : [e, t, r]
    }, d.clamp = function(v) {
        return arguments.length ? (s = !!v, d) : s
    }, d.interpolator = function(v) {
        return arguments.length ? (l = v, d) : l
    };

    function y(v) {
        return function(p) {
            var x, w, b;
            return arguments.length ? ([x, w, b] = p, l = nx(v, [x, w, b]), d) : [l(0), l(.5), l(1)]
        }
    }
    return d.range = y(Er), d.rangeRound = y(wc), d.unknown = function(v) {
            return arguments.length ? (h = v, d) : h
        },
        function(v) {
            return f = v, i = v(e), a = v(t), o = v(r), u = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), n = a < i ? -1 : 1, d
        }
}

function Ed() {
    var e = Ot(na()($e));
    return e.copy = function() {
        return St(e, Ed())
    }, dt.apply(e, arguments)
}

function Td() {
    var e = Ac(na()).domain([.1, 1, 10]);
    return e.copy = function() {
        return St(e, Td()).base(e.base())
    }, dt.apply(e, arguments)
}

function jd() {
    var e = _c(na());
    return e.copy = function() {
        return St(e, jd()).constant(e.constant())
    }, dt.apply(e, arguments)
}

function Bc() {
    var e = Ec(na());
    return e.copy = function() {
        return St(e, Bc()).exponent(e.exponent())
    }, dt.apply(e, arguments)
}

function Gw() {
    return Bc.apply(null, arguments).exponent(.5)
}
const sf = Object.freeze(Object.defineProperty({
    __proto__: null,
    scaleBand: Jr,
    scaleDiverging: Ed,
    scaleDivergingLog: Td,
    scaleDivergingPow: Bc,
    scaleDivergingSqrt: Gw,
    scaleDivergingSymlog: jd,
    scaleIdentity: ud,
    scaleImplicit: pu,
    scaleLinear: yi,
    scaleLog: ld,
    scaleOrdinal: gc,
    scalePoint: Wr,
    scalePow: Tc,
    scaleQuantile: hd,
    scaleQuantize: pd,
    scaleRadial: fd,
    scaleSequential: Sd,
    scaleSequentialLog: Pd,
    scaleSequentialPow: Rc,
    scaleSequentialQuantile: _d,
    scaleSequentialSqrt: Hw,
    scaleSequentialSymlog: Ad,
    scaleSqrt: _x,
    scaleSymlog: sd,
    scaleThreshold: dd,
    scaleTime: zw,
    scaleUtc: Uw,
    tickFormat: od
}, Symbol.toStringTag, {
    value: "Module"
}));
var po, ff;

function Md() {
    if (ff) return po;
    ff = 1;
    var e = pp();

    function t(r, n, i) {
        for (var a = -1, o = r.length; ++a < o;) {
            var u = r[a],
                c = n(u);
            if (c != null && (l === void 0 ? c === c && !e(c) : i(c, l))) var l = c,
                f = u
        }
        return f
    }
    return po = t, po
}
var vo, hf;

function Kw() {
    if (hf) return vo;
    hf = 1;

    function e(t, r) {
        return t > r
    }
    return vo = e, vo
}
var yo, pf;

function Xw() {
    if (pf) return yo;
    pf = 1;
    var e = Md(),
        t = Kw(),
        r = jn();

    function n(i) {
        return i && i.length ? e(i, r, t) : void 0
    }
    return yo = n, yo
}
var Vw = Xw();
const ia = fe(Vw);
var mo, df;

function Yw() {
    if (df) return mo;
    df = 1;

    function e(t, r) {
        return t < r
    }
    return mo = e, mo
}
var go, vf;

function Zw() {
    if (vf) return go;
    vf = 1;
    var e = Md(),
        t = Yw(),
        r = jn();

    function n(i) {
        return i && i.length ? e(i, r, t) : void 0
    }
    return go = n, go
}
var Jw = Zw();
const aa = fe(Jw);
var bo, yf;

function Qw() {
    if (yf) return bo;
    yf = 1;
    var e = qp(),
        t = sy();

    function r(n, i) {
        return e(t(n, i), 1)
    }
    return bo = r, bo
}
var eO = Qw();
const tO = fe(eO);
var Tr = 1e9,
    rO = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    qc, se = !0,
    Ue = "[DecimalError] ",
    Dt = Ue + "Invalid argument: ",
    Lc = Ue + "Exponent out of range: ",
    jr = Math.floor,
    Mt = Math.pow,
    nO = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    Be, Se = 1e7,
    le = 7,
    $d = 9007199254740991,
    xi = jr($d / le),
    z = {};
z.absoluteValue = z.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e
};
z.comparedTo = z.cmp = function(e) {
    var t, r, n, i, a = this;
    if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
    if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
    for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1
};
z.decimalPlaces = z.dp = function() {
    var e = this,
        t = e.d.length - 1,
        r = (t - e.e) * le;
    if (t = e.d[t], t)
        for (; t % 10 == 0; t /= 10) r--;
    return r < 0 ? 0 : r
};
z.dividedBy = z.div = function(e) {
    return st(this, new this.constructor(e))
};
z.dividedToIntegerBy = z.idiv = function(e) {
    var t = this,
        r = t.constructor;
    return oe(st(t, new r(e), 0, 1), r.precision)
};
z.equals = z.eq = function(e) {
    return !this.cmp(e)
};
z.exponent = function() {
    return ye(this)
};
z.greaterThan = z.gt = function(e) {
    return this.cmp(e) > 0
};
z.greaterThanOrEqualTo = z.gte = function(e) {
    return this.cmp(e) >= 0
};
z.isInteger = z.isint = function() {
    return this.e > this.d.length - 2
};
z.isNegative = z.isneg = function() {
    return this.s < 0
};
z.isPositive = z.ispos = function() {
    return this.s > 0
};
z.isZero = function() {
    return this.s === 0
};
z.lessThan = z.lt = function(e) {
    return this.cmp(e) < 0
};
z.lessThanOrEqualTo = z.lte = function(e) {
    return this.cmp(e) < 1
};
z.logarithm = z.log = function(e) {
    var t, r = this,
        n = r.constructor,
        i = n.precision,
        a = i + 5;
    if (e === void 0) e = new n(10);
    else if (e = new n(e), e.s < 1 || e.eq(Be)) throw Error(Ue + "NaN");
    if (r.s < 1) throw Error(Ue + (r.s ? "NaN" : "-Infinity"));
    return r.eq(Be) ? new n(0) : (se = !1, t = st(nn(r, a), nn(e, a), a), se = !0, oe(t, i))
};
z.minus = z.sub = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? kd(t, e) : Cd(t, (e.s = -e.s, e))
};
z.modulo = z.mod = function(e) {
    var t, r = this,
        n = r.constructor,
        i = n.precision;
    if (e = new n(e), !e.s) throw Error(Ue + "NaN");
    return r.s ? (se = !1, t = st(r, e, 0, 1).times(e), se = !0, r.minus(t)) : oe(new n(r), i)
};
z.naturalExponential = z.exp = function() {
    return Id(this)
};
z.naturalLogarithm = z.ln = function() {
    return nn(this)
};
z.negated = z.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0, e
};
z.plus = z.add = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? Cd(t, e) : kd(t, (e.s = -e.s, e))
};
z.precision = z.sd = function(e) {
    var t, r, n, i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Dt + e);
    if (t = ye(i) + 1, n = i.d.length - 1, r = n * le + 1, n = i.d[n], n) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = i.d[0]; n >= 10; n /= 10) r++
    }
    return e && t > r ? t : r
};
z.squareRoot = z.sqrt = function() {
    var e, t, r, n, i, a, o, u = this,
        c = u.constructor;
    if (u.s < 1) {
        if (!u.s) return new c(0);
        throw Error(Ue + "NaN")
    }
    for (e = ye(u), se = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = Qe(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = jr((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3;;)
        if (a = n, n = a.plus(st(u, a, o + 2)).times(.5), Qe(a.d).slice(0, o) === (t = Qe(n.d)).slice(0, o)) {
            if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
                if (oe(a, r + 1, 0), a.times(a).eq(u)) {
                    n = a;
                    break
                }
            } else if (t != "9999") break;
            o += 4
        } return se = !0, oe(n, r)
};
z.times = z.mul = function(e) {
    var t, r, n, i, a, o, u, c, l, f = this,
        s = f.constructor,
        h = f.d,
        d = (e = new s(e)).d;
    if (!f.s || !e.s) return new s(0);
    for (e.s *= f.s, r = f.e + e.e, c = h.length, l = d.length, c < l && (a = h, h = d, d = a, o = c, c = l, l = o), a = [], o = c + l, n = o; n--;) a.push(0);
    for (n = l; --n >= 0;) {
        for (t = 0, i = c + n; i > n;) u = a[i] + d[n] * h[i - n - 1] + t, a[i--] = u % Se | 0, t = u / Se | 0;
        a[i] = (a[i] + t) % Se | 0
    }
    for (; !a[--o];) a.pop();
    return t ? ++r : a.shift(), e.d = a, e.e = r, se ? oe(e, s.precision) : e
};
z.toDecimalPlaces = z.todp = function(e, t) {
    var r = this,
        n = r.constructor;
    return r = new n(r), e === void 0 ? r : (rt(e, 0, Tr), t === void 0 ? t = n.rounding : rt(t, 0, 8), oe(r, e + ye(r) + 1, t))
};
z.toExponential = function(e, t) {
    var r, n = this,
        i = n.constructor;
    return e === void 0 ? r = Ft(n, !0) : (rt(e, 0, Tr), t === void 0 ? t = i.rounding : rt(t, 0, 8), n = oe(new i(n), e + 1, t), r = Ft(n, !0, e + 1)), r
};
z.toFixed = function(e, t) {
    var r, n, i = this,
        a = i.constructor;
    return e === void 0 ? Ft(i) : (rt(e, 0, Tr), t === void 0 ? t = a.rounding : rt(t, 0, 8), n = oe(new a(i), e + ye(i) + 1, t), r = Ft(n.abs(), !1, e + ye(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r)
};
z.toInteger = z.toint = function() {
    var e = this,
        t = e.constructor;
    return oe(new t(e), ye(e) + 1, t.rounding)
};
z.toNumber = function() {
    return +this
};
z.toPower = z.pow = function(e) {
    var t, r, n, i, a, o, u = this,
        c = u.constructor,
        l = 12,
        f = +(e = new c(e));
    if (!e.s) return new c(Be);
    if (u = new c(u), !u.s) {
        if (e.s < 1) throw Error(Ue + "Infinity");
        return u
    }
    if (u.eq(Be)) return u;
    if (n = c.precision, e.eq(Be)) return oe(u, n);
    if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
        if ((r = f < 0 ? -f : f) <= $d) {
            for (i = new c(Be), t = Math.ceil(n / le + 4), se = !1; r % 2 && (i = i.times(u), gf(i.d, t)), r = jr(r / 2), r !== 0;) u = u.times(u), gf(u.d, t);
            return se = !0, e.s < 0 ? new c(Be).div(i) : oe(i, n)
        }
    } else if (a < 0) throw Error(Ue + "NaN");
    return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, se = !1, i = e.times(nn(u, n + l)), se = !0, i = Id(i), i.s = a, i
};
z.toPrecision = function(e, t) {
    var r, n, i = this,
        a = i.constructor;
    return e === void 0 ? (r = ye(i), n = Ft(i, r <= a.toExpNeg || r >= a.toExpPos)) : (rt(e, 1, Tr), t === void 0 ? t = a.rounding : rt(t, 0, 8), i = oe(new a(i), e, t), r = ye(i), n = Ft(i, e <= r || r <= a.toExpNeg, e)), n
};
z.toSignificantDigits = z.tosd = function(e, t) {
    var r = this,
        n = r.constructor;
    return e === void 0 ? (e = n.precision, t = n.rounding) : (rt(e, 1, Tr), t === void 0 ? t = n.rounding : rt(t, 0, 8)), oe(new n(r), e, t)
};
z.toString = z.valueOf = z.val = z.toJSON = z[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var e = this,
        t = ye(e),
        r = e.constructor;
    return Ft(e, t <= r.toExpNeg || t >= r.toExpPos)
};

function Cd(e, t) {
    var r, n, i, a, o, u, c, l, f = e.constructor,
        s = f.precision;
    if (!e.s || !t.s) return t.s || (t = new f(e)), se ? oe(t, s) : t;
    if (c = e.d, l = t.d, o = e.e, i = t.e, c = c.slice(), a = o - i, a) {
        for (a < 0 ? (n = c, a = -a, u = l.length) : (n = l, i = o, u = c.length), o = Math.ceil(s / le), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--;) n.push(0);
        n.reverse()
    }
    for (u = c.length, a = l.length, u - a < 0 && (a = u, n = l, l = c, c = n), r = 0; a;) r = (c[--a] = c[a] + l[a] + r) / Se | 0, c[a] %= Se;
    for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0;) c.pop();
    return t.d = c, t.e = i, se ? oe(t, s) : t
}

function rt(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(Dt + e)
}

function Qe(e) {
    var t, r, n, i = e.length - 1,
        a = "",
        o = e[0];
    if (i > 0) {
        for (a += o, t = 1; t < i; t++) n = e[t] + "", r = le - n.length, r && (a += yt(r)), a += n;
        o = e[t], n = o + "", r = le - n.length, r && (a += yt(r))
    } else if (o === 0) return "0";
    for (; o % 10 === 0;) o /= 10;
    return a + o
}
var st = function() {
    function e(n, i) {
        var a, o = 0,
            u = n.length;
        for (n = n.slice(); u--;) a = n[u] * i + o, n[u] = a % Se | 0, o = a / Se | 0;
        return o && n.unshift(o), n
    }

    function t(n, i, a, o) {
        var u, c;
        if (a != o) c = a > o ? 1 : -1;
        else
            for (u = c = 0; u < a; u++)
                if (n[u] != i[u]) {
                    c = n[u] > i[u] ? 1 : -1;
                    break
                } return c
    }

    function r(n, i, a) {
        for (var o = 0; a--;) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Se + n[a] - i[a];
        for (; !n[0] && n.length > 1;) n.shift()
    }
    return function(n, i, a, o) {
        var u, c, l, f, s, h, d, y, v, p, x, w, b, O, m, g, S, P, _ = n.constructor,
            M = n.s == i.s ? 1 : -1,
            E = n.d,
            T = i.d;
        if (!n.s) return new _(n);
        if (!i.s) throw Error(Ue + "Division by zero");
        for (c = n.e - i.e, S = T.length, m = E.length, d = new _(M), y = d.d = [], l = 0; T[l] == (E[l] || 0);) ++l;
        if (T[l] > (E[l] || 0) && --c, a == null ? w = a = _.precision : o ? w = a + (ye(n) - ye(i)) + 1 : w = a, w < 0) return new _(0);
        if (w = w / le + 2 | 0, l = 0, S == 1)
            for (f = 0, T = T[0], w++;
                (l < m || f) && w--; l++) b = f * Se + (E[l] || 0), y[l] = b / T | 0, f = b % T | 0;
        else {
            for (f = Se / (T[0] + 1) | 0, f > 1 && (T = e(T, f), E = e(E, f), S = T.length, m = E.length), O = S, v = E.slice(0, S), p = v.length; p < S;) v[p++] = 0;
            P = T.slice(), P.unshift(0), g = T[0], T[1] >= Se / 2 && ++g;
            do f = 0, u = t(T, v, S, p), u < 0 ? (x = v[0], S != p && (x = x * Se + (v[1] || 0)), f = x / g | 0, f > 1 ? (f >= Se && (f = Se - 1), s = e(T, f), h = s.length, p = v.length, u = t(s, v, h, p), u == 1 && (f--, r(s, S < h ? P : T, h))) : (f == 0 && (u = f = 1), s = T.slice()), h = s.length, h < p && s.unshift(0), r(v, s, p), u == -1 && (p = v.length, u = t(T, v, S, p), u < 1 && (f++, r(v, S < p ? P : T, p))), p = v.length) : u === 0 && (f++, v = [0]), y[l++] = f, u && v[0] ? v[p++] = E[O] || 0 : (v = [E[O]], p = 1); while ((O++ < m || v[0] !== void 0) && w--)
        }
        return y[0] || y.shift(), d.e = c, oe(d, o ? a + ye(d) + 1 : a)
    }
}();

function Id(e, t) {
    var r, n, i, a, o, u, c = 0,
        l = 0,
        f = e.constructor,
        s = f.precision;
    if (ye(e) > 16) throw Error(Lc + ye(e));
    if (!e.s) return new f(Be);
    for (se = !1, u = s, o = new f(.03125); e.abs().gte(.1);) e = e.times(o), l += 5;
    for (n = Math.log(Mt(2, l)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(Be), f.precision = u;;) {
        if (i = oe(i.times(e), u), r = r.times(++c), o = a.plus(st(i, r, u)), Qe(o.d).slice(0, u) === Qe(a.d).slice(0, u)) {
            for (; l--;) a = oe(a.times(a), u);
            return f.precision = s, t == null ? (se = !0, oe(a, s)) : a
        }
        a = o
    }
}

function ye(e) {
    for (var t = e.e * le, r = e.d[0]; r >= 10; r /= 10) t++;
    return t
}

function xo(e, t, r) {
    if (t > e.LN10.sd()) throw se = !0, r && (e.precision = r), Error(Ue + "LN10 precision limit exceeded");
    return oe(new e(e.LN10), t)
}

function yt(e) {
    for (var t = ""; e--;) t += "0";
    return t
}

function nn(e, t) {
    var r, n, i, a, o, u, c, l, f, s = 1,
        h = 10,
        d = e,
        y = d.d,
        v = d.constructor,
        p = v.precision;
    if (d.s < 1) throw Error(Ue + (d.s ? "NaN" : "-Infinity"));
    if (d.eq(Be)) return new v(0);
    if (t == null ? (se = !1, l = p) : l = t, d.eq(10)) return t == null && (se = !0), xo(v, l);
    if (l += h, v.precision = l, r = Qe(y), n = r.charAt(0), a = ye(d), Math.abs(a) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) d = d.times(e), r = Qe(d.d), n = r.charAt(0), s++;
        a = ye(d), n > 1 ? (d = new v("0." + r), a++) : d = new v(n + "." + r.slice(1))
    } else return c = xo(v, l + 2, p).times(a + ""), d = nn(new v(n + "." + r.slice(1)), l - h).plus(c), v.precision = p, t == null ? (se = !0, oe(d, p)) : d;
    for (u = o = d = st(d.minus(Be), d.plus(Be), l), f = oe(d.times(d), l), i = 3;;) {
        if (o = oe(o.times(f), l), c = u.plus(st(o, new v(i), l)), Qe(c.d).slice(0, l) === Qe(u.d).slice(0, l)) return u = u.times(2), a !== 0 && (u = u.plus(xo(v, l + 2, p).times(a + ""))), u = st(u, new v(s), l), v.precision = p, t == null ? (se = !0, oe(u, p)) : u;
        u = c, i += 2
    }
}

function mf(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48;) ++n;
    for (i = t.length; t.charCodeAt(i - 1) === 48;) --i;
    if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = jr(r / le), e.d = [], n = (r + 1) % le, r < 0 && (n += le), n < i) {
            for (n && e.d.push(+t.slice(0, n)), i -= le; n < i;) e.d.push(+t.slice(n, n += le));
            t = t.slice(n), n = le - t.length
        } else n -= i;
        for (; n--;) t += "0";
        if (e.d.push(+t), se && (e.e > xi || e.e < -xi)) throw Error(Lc + r)
    } else e.s = 0, e.e = 0, e.d = [0];
    return e
}

function oe(e, t, r) {
    var n, i, a, o, u, c, l, f, s = e.d;
    for (o = 1, a = s[0]; a >= 10; a /= 10) o++;
    if (n = t - o, n < 0) n += le, i = t, l = s[f = 0];
    else {
        if (f = Math.ceil((n + 1) / le), a = s.length, f >= a) return e;
        for (l = a = s[f], o = 1; a >= 10; a /= 10) o++;
        n %= le, i = n - le + o
    }
    if (r !== void 0 && (a = Mt(10, o - i - 1), u = l / a % 10 | 0, c = t < 0 || s[f + 1] !== void 0 || l % a, c = r < 4 ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || c || r == 6 && (n > 0 ? i > 0 ? l / Mt(10, o - i) : 0 : s[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !s[0]) return c ? (a = ye(e), s.length = 1, t = t - a - 1, s[0] = Mt(10, (le - t % le) % le), e.e = jr(-t / le) || 0) : (s.length = 1, s[0] = e.e = e.s = 0), e;
    if (n == 0 ? (s.length = f, a = 1, f--) : (s.length = f + 1, a = Mt(10, le - n), s[f] = i > 0 ? (l / Mt(10, o - i) % Mt(10, i) | 0) * a : 0), c)
        for (;;)
            if (f == 0) {
                (s[0] += a) == Se && (s[0] = 1, ++e.e);
                break
            } else {
                if (s[f] += a, s[f] != Se) break;
                s[f--] = 0, a = 1
            } for (n = s.length; s[--n] === 0;) s.pop();
    if (se && (e.e > xi || e.e < -xi)) throw Error(Lc + ye(e));
    return e
}

function kd(e, t) {
    var r, n, i, a, o, u, c, l, f, s, h = e.constructor,
        d = h.precision;
    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new h(e), se ? oe(t, d) : t;
    if (c = e.d, s = t.d, n = t.e, l = e.e, c = c.slice(), o = l - n, o) {
        for (f = o < 0, f ? (r = c, o = -o, u = s.length) : (r = s, n = l, u = c.length), i = Math.max(Math.ceil(d / le), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--;) r.push(0);
        r.reverse()
    } else {
        for (i = c.length, u = s.length, f = i < u, f && (u = i), i = 0; i < u; i++)
            if (c[i] != s[i]) {
                f = c[i] < s[i];
                break
            } o = 0
    }
    for (f && (r = c, c = s, s = r, t.s = -t.s), u = c.length, i = s.length - u; i > 0; --i) c[u++] = 0;
    for (i = s.length; i > o;) {
        if (c[--i] < s[i]) {
            for (a = i; a && c[--a] === 0;) c[a] = Se - 1;
            --c[a], c[i] += Se
        }
        c[i] -= s[i]
    }
    for (; c[--u] === 0;) c.pop();
    for (; c[0] === 0; c.shift()) --n;
    return c[0] ? (t.d = c, t.e = n, se ? oe(t, d) : t) : new h(0)
}

function Ft(e, t, r) {
    var n, i = ye(e),
        a = Qe(e.d),
        o = a.length;
    return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + yt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + yt(-i - 1) + a, r && (n = r - o) > 0 && (a += yt(n))) : i >= o ? (a += yt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + yt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += yt(n))), e.s < 0 ? "-" + a : a
}

function gf(e, t) {
    if (e.length > t) return e.length = t, !0
}

function Nd(e) {
    var t, r, n;

    function i(a) {
        var o = this;
        if (!(o instanceof i)) return new i(a);
        if (o.constructor = i, a instanceof i) {
            o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
            return
        }
        if (typeof a == "number") {
            if (a * 0 !== 0) throw Error(Dt + a);
            if (a > 0) o.s = 1;
            else if (a < 0) a = -a, o.s = -1;
            else {
                o.s = 0, o.e = 0, o.d = [0];
                return
            }
            if (a === ~~a && a < 1e7) {
                o.e = 0, o.d = [a];
                return
            }
            return mf(o, a.toString())
        } else if (typeof a != "string") throw Error(Dt + a);
        if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, nO.test(a)) mf(o, a);
        else throw Error(Dt + a)
    }
    if (i.prototype = z, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Nd, i.config = i.set = iO, e === void 0 && (e = {}), e)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length;) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i
}

function iO(e) {
    if (!e || typeof e != "object") throw Error(Ue + "Object expected");
    var t, r, n, i = ["precision", 1, Tr, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < i.length; t += 3)
        if ((n = e[r = i[t]]) !== void 0)
            if (jr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(Dt + r + ": " + n);
    if ((n = e[r = "LN10"]) !== void 0)
        if (n == Math.LN10) this[r] = new this(n);
        else throw Error(Dt + r + ": " + n);
    return this
}
var qc = Nd(rO);
Be = new qc(1);
const ae = qc;

function aO(e) {
    return lO(e) || cO(e) || uO(e) || oO()
}

function oO() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function uO(e, t) {
    if (e) {
        if (typeof e == "string") return mu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mu(e, t)
    }
}

function cO(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function lO(e) {
    if (Array.isArray(e)) return mu(e)
}

function mu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var sO = function(t) {
        return t
    },
    Dd = {},
    Rd = function(t) {
        return t === Dd
    },
    bf = function(t) {
        return function r() {
            return arguments.length === 0 || arguments.length === 1 && Rd(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments)
        }
    },
    fO = function e(t, r) {
        return t === 1 ? r : bf(function() {
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            var o = i.filter(function(u) {
                return u !== Dd
            }).length;
            return o >= t ? r.apply(void 0, i) : e(t - o, bf(function() {
                for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++) c[l] = arguments[l];
                var f = i.map(function(s) {
                    return Rd(s) ? c.shift() : s
                });
                return r.apply(void 0, aO(f).concat(c))
            }))
        })
    },
    oa = function(t) {
        return fO(t.length, t)
    },
    gu = function(t, r) {
        for (var n = [], i = t; i < r; ++i) n[i - t] = i;
        return n
    },
    hO = oa(function(e, t) {
        return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
            return t[r]
        }).map(e)
    }),
    pO = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        if (!r.length) return sO;
        var i = r.reverse(),
            a = i[0],
            o = i.slice(1);
        return function() {
            return o.reduce(function(u, c) {
                return c(u)
            }, a.apply(void 0, arguments))
        }
    },
    bu = function(t) {
        return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
    },
    Bd = function(t) {
        var r = null,
            n = null;
        return function() {
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return r && a.every(function(u, c) {
                return u === r[c]
            }) || (r = a, n = t.apply(void 0, a)), n
        }
    };

function dO(e) {
    var t;
    return e === 0 ? t = 1 : t = Math.floor(new ae(e).abs().log(10).toNumber()) + 1, t
}

function vO(e, t, r) {
    for (var n = new ae(e), i = 0, a = []; n.lt(t) && i < 1e5;) a.push(n.toNumber()), n = n.add(r), i++;
    return a
}
var yO = oa(function(e, t, r) {
        var n = +e,
            i = +t;
        return n + r * (i - n)
    }),
    mO = oa(function(e, t, r) {
        var n = t - +e;
        return n = n || 1 / 0, (r - e) / n
    }),
    gO = oa(function(e, t, r) {
        var n = t - +e;
        return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n))
    });
const ua = {
    rangeStep: vO,
    getDigitCount: dO,
    interpolateNumber: yO,
    uninterpolateNumber: mO,
    uninterpolateTruncation: gO
};

function xu(e) {
    return wO(e) || xO(e) || Ld(e) || bO()
}

function bO() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function xO(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function wO(e) {
    if (Array.isArray(e)) return wu(e)
}

function an(e, t) {
    return PO(e) || SO(e, t) || Ld(e, t) || OO()
}

function OO() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Ld(e, t) {
    if (e) {
        if (typeof e == "string") return wu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wu(e, t)
    }
}

function wu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function SO(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0);
        } catch (c) {
            i = !0, a = c
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function PO(e) {
    if (Array.isArray(e)) return e
}

function qd(e) {
    var t = an(e, 2),
        r = t[0],
        n = t[1],
        i = r,
        a = n;
    return r > n && (i = n, a = r), [i, a]
}

function Fd(e, t, r) {
    if (e.lte(0)) return new ae(0);
    var n = ua.getDigitCount(e.toNumber()),
        i = new ae(10).pow(n),
        a = e.div(i),
        o = n !== 1 ? .05 : .1,
        u = new ae(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
        c = u.mul(i);
    return t ? c : new ae(Math.ceil(c))
}

function AO(e, t, r) {
    var n = 1,
        i = new ae(e);
    if (!i.isint() && r) {
        var a = Math.abs(e);
        a < 1 ? (n = new ae(10).pow(ua.getDigitCount(e) - 1), i = new ae(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ae(Math.floor(e)))
    } else e === 0 ? i = new ae(Math.floor((t - 1) / 2)) : r || (i = new ae(Math.floor(e)));
    var o = Math.floor((t - 1) / 2),
        u = pO(hO(function(c) {
            return i.add(new ae(c - o).mul(n)).toNumber()
        }), gu);
    return u(0, t)
}

function Wd(e, t, r, n) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (r - 1))) return {
        step: new ae(0),
        tickMin: new ae(0),
        tickMax: new ae(0)
    };
    var a = Fd(new ae(t).sub(e).div(r - 1), n, i),
        o;
    e <= 0 && t >= 0 ? o = new ae(0) : (o = new ae(e).add(t).div(2), o = o.sub(new ae(o).mod(a)));
    var u = Math.ceil(o.sub(e).div(a).toNumber()),
        c = Math.ceil(new ae(t).sub(o).div(a).toNumber()),
        l = u + c + 1;
    return l > r ? Wd(e, t, r, n, i + 1) : (l < r && (c = t > 0 ? c + (r - l) : c, u = t > 0 ? u : u + (r - l)), {
        step: a,
        tickMin: o.sub(new ae(u).mul(a)),
        tickMax: o.add(new ae(c).mul(a))
    })
}

function _O(e) {
    var t = an(e, 2),
        r = t[0],
        n = t[1],
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = Math.max(i, 2),
        u = qd([r, n]),
        c = an(u, 2),
        l = c[0],
        f = c[1];
    if (l === -1 / 0 || f === 1 / 0) {
        var s = f === 1 / 0 ? [l].concat(xu(gu(0, i - 1).map(function() {
            return 1 / 0
        }))) : [].concat(xu(gu(0, i - 1).map(function() {
            return -1 / 0
        })), [f]);
        return r > n ? bu(s) : s
    }
    if (l === f) return AO(l, i, a);
    var h = Wd(l, f, o, a),
        d = h.step,
        y = h.tickMin,
        v = h.tickMax,
        p = ua.rangeStep(y, v.add(new ae(.1).mul(d)), d);
    return r > n ? bu(p) : p
}

function EO(e, t) {
    var r = an(e, 2),
        n = r[0],
        i = r[1],
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = qd([n, i]),
        u = an(o, 2),
        c = u[0],
        l = u[1];
    if (c === -1 / 0 || l === 1 / 0) return [n, i];
    if (c === l) return [c];
    var f = Math.max(t, 2),
        s = Fd(new ae(l).sub(c).div(f - 1), a, 0),
        h = [].concat(xu(ua.rangeStep(new ae(c), new ae(l).sub(new ae(.99).mul(s)), s)), [l]);
    return n > i ? bu(h) : h
}
var TO = Bd(_O),
    jO = Bd(EO),
    MO = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

function pr(e) {
    "@babel/helpers - typeof";
    return pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, pr(e)
}

function wi() {
    return wi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, wi.apply(this, arguments)
}

function $O(e, t) {
    return NO(e) || kO(e, t) || IO(e, t) || CO()
}

function CO() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function IO(e, t) {
    if (e) {
        if (typeof e == "string") return xf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xf(e, t)
    }
}

function xf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function kO(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function NO(e) {
    if (Array.isArray(e)) return e
}

function DO(e, t) {
    if (e == null) return {};
    var r = RO(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function RO(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function BO(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function LO(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Hd(n.key), n)
    }
}

function qO(e, t, r) {
    return t && LO(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function FO(e, t, r) {
    return t = Oi(t), WO(e, zd() ? Reflect.construct(t, r || [], Oi(e).constructor) : t.apply(e, r))
}

function WO(e, t) {
    if (t && (pr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return zO(e)
}

function zO(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function zd() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (zd = function() {
        return !!e
    })()
}

function Oi(e) {
    return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Oi(e)
}

function UO(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Ou(e, t)
}

function Ou(e, t) {
    return Ou = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Ou(e, t)
}

function Ud(e, t, r) {
    return t = Hd(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Hd(e) {
    var t = HO(e, "string");
    return pr(t) == "symbol" ? t : t + ""
}

function HO(e, t) {
    if (pr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (pr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var ca = function(e) {
    function t() {
        return BO(this, t), FO(this, t, arguments)
    }
    return UO(t, e), qO(t, [{
        key: "render",
        value: function() {
            var n = this.props,
                i = n.offset,
                a = n.layout,
                o = n.width,
                u = n.dataKey,
                c = n.data,
                l = n.dataPointFormatter,
                f = n.xAxis,
                s = n.yAxis,
                h = DO(n, MO),
                d = ee(h, !1);
            this.props.direction === "x" && f.type !== "number" && Bt();
            var y = c.map(function(v) {
                var p = l(v, u),
                    x = p.x,
                    w = p.y,
                    b = p.value,
                    O = p.errorVal;
                if (!O) return null;
                var m = [],
                    g, S;
                if (Array.isArray(O)) {
                    var P = $O(O, 2);
                    g = P[0], S = P[1]
                } else g = S = O;
                if (a === "vertical") {
                    var _ = f.scale,
                        M = w + i,
                        E = M + o,
                        T = M - o,
                        I = _(b - g),
                        C = _(b + S);
                    m.push({
                        x1: C,
                        y1: E,
                        x2: C,
                        y2: T
                    }), m.push({
                        x1: I,
                        y1: M,
                        x2: C,
                        y2: M
                    }), m.push({
                        x1: I,
                        y1: E,
                        x2: I,
                        y2: T
                    })
                } else if (a === "horizontal") {
                    var $ = s.scale,
                        k = x + i,
                        D = k - o,
                        L = k + o,
                        q = $(b - g),
                        U = $(b + S);
                    m.push({
                        x1: D,
                        y1: U,
                        x2: L,
                        y2: U
                    }), m.push({
                        x1: k,
                        y1: q,
                        x2: k,
                        y2: U
                    }), m.push({
                        x1: D,
                        y1: q,
                        x2: L,
                        y2: q
                    })
                }
                return A.createElement(Pe, wi({
                    className: "recharts-errorBar",
                    key: "bar-".concat(m.map(function(G) {
                        return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
                    }))
                }, d), m.map(function(G) {
                    return A.createElement("line", wi({}, G, {
                        key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2)
                    }))
                }))
            });
            return A.createElement(Pe, {
                className: "recharts-errorBars"
            }, y)
        }
    }])
}(A.Component);
Ud(ca, "defaultProps", {
    stroke: "black",
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: "horizontal"
});
Ud(ca, "displayName", "ErrorBar");

function on(e) {
    "@babel/helpers - typeof";
    return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, on(e)
}

function wf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Tt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wf(Object(r), !0).forEach(function(n) {
            GO(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function GO(e, t, r) {
    return t = KO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function KO(e) {
    var t = XO(e, "string");
    return on(t) == "symbol" ? t : t + ""
}

function XO(e, t) {
    if (on(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (on(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Gd = function(t) {
    var r = t.children,
        n = t.formattedGraphicalItems,
        i = t.legendWidth,
        a = t.legendContent,
        o = Re(r, rr);
    if (!o) return null;
    var u = rr.defaultProps,
        c = u !== void 0 ? Tt(Tt({}, u), o.props) : {},
        l;
    return o.props && o.props.payload ? l = o.props && o.props.payload : a === "children" ? l = (n || []).reduce(function(f, s) {
        var h = s.item,
            d = s.props,
            y = d.sectors || d.data || [];
        return f.concat(y.map(function(v) {
            return {
                type: o.props.iconType || h.props.legendType,
                value: v.name,
                color: v.fill,
                payload: v
            }
        }))
    }, []) : l = (n || []).map(function(f) {
        var s = f.item,
            h = s.type.defaultProps,
            d = h !== void 0 ? Tt(Tt({}, h), s.props) : {},
            y = d.dataKey,
            v = d.name,
            p = d.legendType,
            x = d.hide;
        return {
            inactive: x,
            dataKey: y,
            type: c.iconType || p || "square",
            color: Fc(s),
            value: v || y,
            payload: d
        }
    }), Tt(Tt(Tt({}, c), rr.getWithHeight(o, i)), {}, {
        payload: l,
        item: o
    })
};

function un(e) {
    "@babel/helpers - typeof";
    return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, un(e)
}

function Of(e) {
    return JO(e) || ZO(e) || YO(e) || VO()
}

function VO() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function YO(e, t) {
    if (e) {
        if (typeof e == "string") return Su(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Su(e, t)
    }
}

function ZO(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function JO(e) {
    if (Array.isArray(e)) return Su(e)
}

function Su(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function Sf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function pe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Sf(Object(r), !0).forEach(function(n) {
            ir(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ir(e, t, r) {
    return t = QO(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function QO(e) {
    var t = e1(e, "string");
    return un(t) == "symbol" ? t : t + ""
}

function e1(e, t) {
    if (un(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (un(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function nt(e, t, r) {
    return re(e) || re(t) ? r : we(t) ? ze(e, t, r) : Y(t) ? t(e) : r
}

function zr(e, t, r, n) {
    var i = tO(e, function(u) {
        return nt(u, t)
    });
    if (r === "number") {
        var a = i.filter(function(u) {
            return B(u) || parseFloat(u)
        });
        return a.length ? [aa(a), ia(a)] : [1 / 0, -1 / 0]
    }
    var o = n ? i.filter(function(u) {
        return !re(u)
    }) : i;
    return o.map(function(u) {
        return we(u) || u instanceof Date ? u : ""
    })
}
var t1 = function(t) {
        var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
        if (u <= 1) return 0;
        if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
            for (var c = a.range, l = 0; l < u; l++) {
                var f = l > 0 ? i[l - 1].coordinate : i[u - 1].coordinate,
                    s = i[l].coordinate,
                    h = l >= u - 1 ? i[0].coordinate : i[l + 1].coordinate,
                    d = void 0;
                if (Ye(s - f) !== Ye(h - s)) {
                    var y = [];
                    if (Ye(h - s) === Ye(c[1] - c[0])) {
                        d = h;
                        var v = s + c[1] - c[0];
                        y[0] = Math.min(v, (v + f) / 2), y[1] = Math.max(v, (v + f) / 2)
                    } else {
                        d = f;
                        var p = h + c[1] - c[0];
                        y[0] = Math.min(s, (p + s) / 2), y[1] = Math.max(s, (p + s) / 2)
                    }
                    var x = [Math.min(s, (d + s) / 2), Math.max(s, (d + s) / 2)];
                    if (t > x[0] && t <= x[1] || t >= y[0] && t <= y[1]) {
                        o = i[l].index;
                        break
                    }
                } else {
                    var w = Math.min(f, h),
                        b = Math.max(f, h);
                    if (t > (w + s) / 2 && t <= (b + s) / 2) {
                        o = i[l].index;
                        break
                    }
                }
            } else
                for (var O = 0; O < u; O++)
                    if (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O > 0 && O < u - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O === u - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2) {
                        o = n[O].index;
                        break
                    } return o
    },
    Fc = function(t) {
        var r, n = t,
            i = n.type.displayName,
            a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? pe(pe({}, t.type.defaultProps), t.props) : t.props,
            o = a.stroke,
            u = a.fill,
            c;
        switch (i) {
            case "Line":
                c = o;
                break;
            case "Area":
            case "Radar":
                c = o && o !== "none" ? o : u;
                break;
            default:
                c = u;
                break
        }
        return c
    },
    r1 = function(t) {
        var r = t.barSize,
            n = t.totalSize,
            i = t.stackGroups,
            a = i === void 0 ? {} : i;
        if (!a) return {};
        for (var o = {}, u = Object.keys(a), c = 0, l = u.length; c < l; c++)
            for (var f = a[u[c]].stackGroups, s = Object.keys(f), h = 0, d = s.length; h < d; h++) {
                var y = f[s[h]],
                    v = y.items,
                    p = y.cateAxisId,
                    x = v.filter(function(S) {
                        return ct(S.type).indexOf("Bar") >= 0
                    });
                if (x && x.length) {
                    var w = x[0].type.defaultProps,
                        b = w !== void 0 ? pe(pe({}, w), x[0].props) : x[0].props,
                        O = b.barSize,
                        m = b[p];
                    o[m] || (o[m] = []);
                    var g = re(O) ? r : O;
                    o[m].push({
                        item: x[0],
                        stackList: x.slice(1),
                        barSize: re(g) ? void 0 : qt(g, n, 0)
                    })
                }
            }
        return o
    },
    n1 = function(t) {
        var r = t.barGap,
            n = t.barCategoryGap,
            i = t.bandSize,
            a = t.sizeList,
            o = a === void 0 ? [] : a,
            u = t.maxBarSize,
            c = o.length;
        if (c < 1) return null;
        var l = qt(r, i, 0, !0),
            f, s = [];
        if (o[0].barSize === +o[0].barSize) {
            var h = !1,
                d = i / c,
                y = o.reduce(function(O, m) {
                    return O + m.barSize || 0
                }, 0);
            y += (c - 1) * l, y >= i && (y -= (c - 1) * l, l = 0), y >= i && d > 0 && (h = !0, d *= .9, y = c * d);
            var v = (i - y) / 2 >> 0,
                p = {
                    offset: v - l,
                    size: 0
                };
            f = o.reduce(function(O, m) {
                var g = {
                        item: m.item,
                        position: {
                            offset: p.offset + p.size + l,
                            size: h ? d : m.barSize
                        }
                    },
                    S = [].concat(Of(O), [g]);
                return p = S[S.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(P) {
                    S.push({
                        item: P,
                        position: p
                    })
                }), S
            }, s)
        } else {
            var x = qt(n, i, 0, !0);
            i - 2 * x - (c - 1) * l <= 0 && (l = 0);
            var w = (i - 2 * x - (c - 1) * l) / c;
            w > 1 && (w >>= 0);
            var b = u === +u ? Math.min(w, u) : w;
            f = o.reduce(function(O, m, g) {
                var S = [].concat(Of(O), [{
                    item: m.item,
                    position: {
                        offset: x + (w + l) * g + (w - b) / 2,
                        size: b
                    }
                }]);
                return m.stackList && m.stackList.length && m.stackList.forEach(function(P) {
                    S.push({
                        item: P,
                        position: S[S.length - 1].position
                    })
                }), S
            }, s)
        }
        return f
    },
    i1 = function(t, r, n, i) {
        var a = n.children,
            o = n.width,
            u = n.margin,
            c = o - (u.left || 0) - (u.right || 0),
            l = Gd({
                children: a,
                legendWidth: c
            });
        if (l) {
            var f = i || {},
                s = f.width,
                h = f.height,
                d = l.align,
                y = l.verticalAlign,
                v = l.layout;
            if ((v === "vertical" || v === "horizontal" && y === "middle") && d !== "center" && B(t[d])) return pe(pe({}, t), {}, ir({}, d, t[d] + (s || 0)));
            if ((v === "horizontal" || v === "vertical" && d === "center") && y !== "middle" && B(t[y])) return pe(pe({}, t), {}, ir({}, y, t[y] + (h || 0)))
        }
        return t
    },
    a1 = function(t, r, n) {
        return re(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0
    },
    Kd = function(t, r, n, i, a) {
        var o = r.props.children,
            u = Ze(o, ca).filter(function(l) {
                return a1(i, a, l.props.direction)
            });
        if (u && u.length) {
            var c = u.map(function(l) {
                return l.props.dataKey
            });
            return t.reduce(function(l, f) {
                var s = nt(f, n);
                if (re(s)) return l;
                var h = Array.isArray(s) ? [aa(s), ia(s)] : [s, s],
                    d = c.reduce(function(y, v) {
                        var p = nt(f, v, 0),
                            x = h[0] - Math.abs(Array.isArray(p) ? p[0] : p),
                            w = h[1] + Math.abs(Array.isArray(p) ? p[1] : p);
                        return [Math.min(x, y[0]), Math.max(w, y[1])]
                    }, [1 / 0, -1 / 0]);
                return [Math.min(d[0], l[0]), Math.max(d[1], l[1])]
            }, [1 / 0, -1 / 0])
        }
        return null
    },
    o1 = function(t, r, n, i, a) {
        var o = r.map(function(u) {
            return Kd(t, u, n, a, i)
        }).filter(function(u) {
            return !re(u)
        });
        return o && o.length ? o.reduce(function(u, c) {
            return [Math.min(u[0], c[0]), Math.max(u[1], c[1])]
        }, [1 / 0, -1 / 0]) : null
    },
    Xd = function(t, r, n, i, a) {
        var o = r.map(function(c) {
            var l = c.props.dataKey;
            return n === "number" && l && Kd(t, c, l, i) || zr(t, l, n, a)
        });
        if (n === "number") return o.reduce(function(c, l) {
            return [Math.min(c[0], l[0]), Math.max(c[1], l[1])]
        }, [1 / 0, -1 / 0]);
        var u = {};
        return o.reduce(function(c, l) {
            for (var f = 0, s = l.length; f < s; f++) u[l[f]] || (u[l[f]] = !0, c.push(l[f]));
            return c
        }, [])
    },
    Vd = function(t, r) {
        return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis"
    },
    Yd = function(t, r, n, i) {
        if (i) return t.map(function(c) {
            return c.coordinate
        });
        var a, o, u = t.map(function(c) {
            return c.coordinate === r && (a = !0), c.coordinate === n && (o = !0), c.coordinate
        });
        return a || u.push(r), o || u.push(n), u
    },
    ut = function(t, r, n) {
        if (!t) return null;
        var i = t.scale,
            a = t.duplicateDomain,
            o = t.type,
            u = t.range,
            c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
            l = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
        if (l = t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2 ? Ye(u[0] - u[1]) * 2 * l : l, r && (t.ticks || t.niceTicks)) {
            var f = (t.ticks || t.niceTicks).map(function(s) {
                var h = a ? a.indexOf(s) : s;
                return {
                    coordinate: i(h) + l,
                    value: s,
                    offset: l
                }
            });
            return f.filter(function(s) {
                return !Mn(s.coordinate)
            })
        }
        return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(s, h) {
            return {
                coordinate: i(s) + l,
                value: s,
                index: h,
                offset: l
            }
        }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(s) {
            return {
                coordinate: i(s) + l,
                value: s,
                offset: l
            }
        }) : i.domain().map(function(s, h) {
            return {
                coordinate: i(s) + l,
                value: a ? a[s] : s,
                index: h,
                offset: l
            }
        })
    },
    wo = new WeakMap,
    Un = function(t, r) {
        if (typeof r != "function") return t;
        wo.has(t) || wo.set(t, new WeakMap);
        var n = wo.get(t);
        if (n.has(r)) return n.get(r);
        var i = function() {
            t.apply(void 0, arguments), r.apply(void 0, arguments)
        };
        return n.set(r, i), i
    },
    u1 = function(t, r, n) {
        var i = t.scale,
            a = t.type,
            o = t.layout,
            u = t.axisType;
        if (i === "auto") return o === "radial" && u === "radiusAxis" ? {
            scale: Jr(),
            realScaleType: "band"
        } : o === "radial" && u === "angleAxis" ? {
            scale: yi(),
            realScaleType: "linear"
        } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
            scale: Wr(),
            realScaleType: "point"
        } : a === "category" ? {
            scale: Jr(),
            realScaleType: "band"
        } : {
            scale: yi(),
            realScaleType: "linear"
        };
        if (Lt(i)) {
            var c = "scale".concat(Ki(i));
            return {
                scale: (sf[c] || Wr)(),
                realScaleType: sf[c] ? c : "point"
            }
        }
        return Y(i) ? {
            scale: i
        } : {
            scale: Wr(),
            realScaleType: "point"
        }
    },
    Pf = 1e-4,
    c1 = function(t) {
        var r = t.domain();
        if (!(!r || r.length <= 2)) {
            var n = r.length,
                i = t.range(),
                a = Math.min(i[0], i[1]) - Pf,
                o = Math.max(i[0], i[1]) + Pf,
                u = t(r[0]),
                c = t(r[n - 1]);
            (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]])
        }
    },
    l1 = function(t, r) {
        if (!t) return null;
        for (var n = 0, i = t.length; n < i; n++)
            if (t[n].item === r) return t[n].position;
        return null
    },
    s1 = function(t, r) {
        if (!r || r.length !== 2 || !B(r[0]) || !B(r[1])) return t;
        var n = Math.min(r[0], r[1]),
            i = Math.max(r[0], r[1]),
            a = [t[0], t[1]];
        return (!B(t[0]) || t[0] < n) && (a[0] = n), (!B(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a
    },
    f1 = function(t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0, u = 0; u < r; ++u) {
                    var c = Mn(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
                    c >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + c, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + c, o = t[u][n][1])
                }
    },
    h1 = function(t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0; o < r; ++o) {
                    var u = Mn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                    u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0)
                }
    },
    p1 = {
        sign: f1,
        expand: Xm,
        none: ar,
        silhouette: Vm,
        wiggle: Ym,
        positive: h1
    },
    d1 = function(t, r, n) {
        var i = r.map(function(u) {
                return u.props.dataKey
            }),
            a = p1[n],
            o = Km().keys(i).value(function(u, c) {
                return +nt(u, c, 0)
            }).order(Qo).offset(a);
        return o(t)
    },
    v1 = function(t, r, n, i, a, o) {
        if (!t) return null;
        var u = o ? r.reverse() : r,
            c = {},
            l = u.reduce(function(s, h) {
                var d, y = (d = h.type) !== null && d !== void 0 && d.defaultProps ? pe(pe({}, h.type.defaultProps), h.props) : h.props,
                    v = y.stackId,
                    p = y.hide;
                if (p) return s;
                var x = y[n],
                    w = s[x] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if (we(v)) {
                    var b = w.stackGroups[v] || {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: []
                    };
                    b.items.push(h), w.hasStack = !0, w.stackGroups[v] = b
                } else w.stackGroups[Gi("_stackId_")] = {
                    numericAxisId: n,
                    cateAxisId: i,
                    items: [h]
                };
                return pe(pe({}, s), {}, ir({}, x, w))
            }, c),
            f = {};
        return Object.keys(l).reduce(function(s, h) {
            var d = l[h];
            if (d.hasStack) {
                var y = {};
                d.stackGroups = Object.keys(d.stackGroups).reduce(function(v, p) {
                    var x = d.stackGroups[p];
                    return pe(pe({}, v), {}, ir({}, p, {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: x.items,
                        stackedData: d1(t, x.items, a)
                    }))
                }, y)
            }
            return pe(pe({}, s), {}, ir({}, h, d))
        }, f)
    },
    y1 = function(t, r) {
        var n = r.realScaleType,
            i = r.type,
            a = r.tickCount,
            o = r.originalDomain,
            u = r.allowDecimals,
            c = n || r.scale;
        if (c !== "auto" && c !== "linear") return null;
        if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
            var l = t.domain();
            if (!l.length) return null;
            var f = TO(l, a, u);
            return t.domain([aa(f), ia(f)]), {
                niceTicks: f
            }
        }
        if (a && i === "number") {
            var s = t.domain(),
                h = jO(s, a, u);
            return {
                niceTicks: h
            }
        }
        return null
    },
    Af = function(t) {
        var r = t.axis,
            n = t.ticks,
            i = t.offset,
            a = t.bandSize,
            o = t.entry,
            u = t.index;
        if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
        var c = nt(o, r.dataKey, r.domain[u]);
        return re(c) ? null : r.scale(c) - a / 2 + i
    },
    m1 = function(t) {
        var r = t.numericAxis,
            n = r.scale.domain();
        if (r.type === "number") {
            var i = Math.min(n[0], n[1]),
                a = Math.max(n[0], n[1]);
            return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i
        }
        return n[0]
    },
    g1 = function(t, r) {
        var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? pe(pe({}, t.type.defaultProps), t.props) : t.props,
            a = i.stackId;
        if (we(a)) {
            var o = r[a];
            if (o) {
                var u = o.items.indexOf(t);
                return u >= 0 ? o.stackedData[u] : null
            }
        }
        return null
    },
    b1 = function(t) {
        return t.reduce(function(r, n) {
            return [aa(n.concat([r[0]]).filter(B)), ia(n.concat([r[1]]).filter(B))]
        }, [1 / 0, -1 / 0])
    },
    Zd = function(t, r, n) {
        return Object.keys(t).reduce(function(i, a) {
            var o = t[a],
                u = o.stackedData,
                c = u.reduce(function(l, f) {
                    var s = b1(f.slice(r, n + 1));
                    return [Math.min(l[0], s[0]), Math.max(l[1], s[1])]
                }, [1 / 0, -1 / 0]);
            return [Math.min(c[0], i[0]), Math.max(c[1], i[1])]
        }, [1 / 0, -1 / 0]).map(function(i) {
            return i === 1 / 0 || i === -1 / 0 ? 0 : i
        })
    },
    _f = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    Ef = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    Pu = function(t, r, n) {
        if (Y(t)) return t(r, n);
        if (!Array.isArray(t)) return r;
        var i = [];
        if (B(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
        else if (_f.test(t[0])) {
            var a = +_f.exec(t[0])[1];
            i[0] = r[0] - a
        } else Y(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
        if (B(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
        else if (Ef.test(t[1])) {
            var o = +Ef.exec(t[1])[1];
            i[1] = r[1] + o
        } else Y(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
        return i
    },
    Si = function(t, r, n) {
        if (t && t.scale && t.scale.bandwidth) {
            var i = t.scale.bandwidth();
            if (!n || i > 0) return i
        }
        if (t && r && r.length >= 2) {
            for (var a = vc(r, function(s) {
                    return s.coordinate
                }), o = 1 / 0, u = 1, c = a.length; u < c; u++) {
                var l = a[u],
                    f = a[u - 1];
                o = Math.min((l.coordinate || 0) - (f.coordinate || 0), o)
            }
            return o === 1 / 0 ? 0 : o
        }
        return n ? void 0 : 0
    },
    Tf = function(t, r, n) {
        return !t || !t.length || uc(t, ze(n, "type.defaultProps.domain")) ? r : t
    },
    Jd = function(t, r) {
        var n = t.type.defaultProps ? pe(pe({}, t.type.defaultProps), t.props) : t.props,
            i = n.dataKey,
            a = n.name,
            o = n.unit,
            u = n.formatter,
            c = n.tooltipType,
            l = n.chartType,
            f = n.hide;
        return pe(pe({}, ee(t, !1)), {}, {
            dataKey: i,
            unit: o,
            formatter: u,
            name: a || i,
            color: Fc(t),
            value: nt(r, i),
            type: c,
            payload: r,
            chartType: l,
            hide: f
        })
    };

function cn(e) {
    "@babel/helpers - typeof";
    return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, cn(e)
}

function jf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Mf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? jf(Object(r), !0).forEach(function(n) {
            x1(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function x1(e, t, r) {
    return t = w1(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function w1(e) {
    var t = O1(e, "string");
    return cn(t) == "symbol" ? t : t + ""
}

function O1(e, t) {
    if (cn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (cn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Pi = Math.PI / 180,
    S1 = function(t) {
        return t * 180 / Math.PI
    },
    Ee = function(t, r, n, i) {
        return {
            x: t + Math.cos(-Pi * i) * n,
            y: r + Math.sin(-Pi * i) * n
        }
    },
    P1 = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2))
    },
    A1 = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.cx,
            o = r.cy,
            u = P1({
                x: n,
                y: i
            }, {
                x: a,
                y: o
            });
        if (u <= 0) return {
            radius: u
        };
        var c = (n - a) / u,
            l = Math.acos(c);
        return i > o && (l = 2 * Math.PI - l), {
            radius: u,
            angle: S1(l),
            angleInRadian: l
        }
    },
    _1 = function(t) {
        var r = t.startAngle,
            n = t.endAngle,
            i = Math.floor(r / 360),
            a = Math.floor(n / 360),
            o = Math.min(i, a);
        return {
            startAngle: r - o * 360,
            endAngle: n - o * 360
        }
    },
    E1 = function(t, r) {
        var n = r.startAngle,
            i = r.endAngle,
            a = Math.floor(n / 360),
            o = Math.floor(i / 360),
            u = Math.min(a, o);
        return t + u * 360
    },
    $f = function(t, r) {
        var n = t.x,
            i = t.y,
            a = A1({
                x: n,
                y: i
            }, r),
            o = a.radius,
            u = a.angle,
            c = r.innerRadius,
            l = r.outerRadius;
        if (o < c || o > l) return !1;
        if (o === 0) return !0;
        var f = _1(r),
            s = f.startAngle,
            h = f.endAngle,
            d = u,
            y;
        if (s <= h) {
            for (; d > h;) d -= 360;
            for (; d < s;) d += 360;
            y = d >= s && d <= h
        } else {
            for (; d > s;) d -= 360;
            for (; d < h;) d += 360;
            y = d >= h && d <= s
        }
        return y ? Mf(Mf({}, r), {}, {
            radius: o,
            angle: E1(d, r)
        }) : null
    };

function ln(e) {
    "@babel/helpers - typeof";
    return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ln(e)
}
var T1 = ["offset"];

function j1(e) {
    return I1(e) || C1(e) || $1(e) || M1()
}

function M1() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function $1(e, t) {
    if (e) {
        if (typeof e == "string") return Au(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Au(e, t)
    }
}

function C1(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function I1(e) {
    if (Array.isArray(e)) return Au(e)
}

function Au(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function k1(e, t) {
    if (e == null) return {};
    var r = N1(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function N1(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function Cf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function xe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Cf(Object(r), !0).forEach(function(n) {
            D1(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function D1(e, t, r) {
    return t = R1(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function R1(e) {
    var t = B1(e, "string");
    return ln(t) == "symbol" ? t : t + ""
}

function B1(e, t) {
    if (ln(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ln(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function sn() {
    return sn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, sn.apply(this, arguments)
}
var L1 = function(t) {
        var r = t.value,
            n = t.formatter,
            i = re(t.children) ? r : t.children;
        return Y(n) ? n(i) : i
    },
    q1 = function(t, r) {
        var n = Ye(r - t),
            i = Math.min(Math.abs(r - t), 360);
        return n * i
    },
    F1 = function(t, r, n) {
        var i = t.position,
            a = t.viewBox,
            o = t.offset,
            u = t.className,
            c = a,
            l = c.cx,
            f = c.cy,
            s = c.innerRadius,
            h = c.outerRadius,
            d = c.startAngle,
            y = c.endAngle,
            v = c.clockWise,
            p = (s + h) / 2,
            x = q1(d, y),
            w = x >= 0 ? 1 : -1,
            b, O;
        i === "insideStart" ? (b = d + w * o, O = v) : i === "insideEnd" ? (b = y - w * o, O = !v) : i === "end" && (b = y + w * o, O = v), O = x <= 0 ? O : !O;
        var m = Ee(l, f, p, b),
            g = Ee(l, f, p, b + (O ? 1 : -1) * 359),
            S = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(g.x, ",").concat(g.y),
            P = re(t.id) ? Gi("recharts-radial-line-") : t.id;
        return A.createElement("text", sn({}, n, {
            dominantBaseline: "central",
            className: te("recharts-radial-bar-label", u)
        }), A.createElement("defs", null, A.createElement("path", {
            id: P,
            d: S
        })), A.createElement("textPath", {
            xlinkHref: "#".concat(P)
        }, r))
    },
    W1 = function(t) {
        var r = t.viewBox,
            n = t.offset,
            i = t.position,
            a = r,
            o = a.cx,
            u = a.cy,
            c = a.innerRadius,
            l = a.outerRadius,
            f = a.startAngle,
            s = a.endAngle,
            h = (f + s) / 2;
        if (i === "outside") {
            var d = Ee(o, u, l + n, h),
                y = d.x,
                v = d.y;
            return {
                x: y,
                y: v,
                textAnchor: y >= o ? "start" : "end",
                verticalAnchor: "middle"
            }
        }
        if (i === "center") return {
            x: o,
            y: u,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
        if (i === "centerTop") return {
            x: o,
            y: u,
            textAnchor: "middle",
            verticalAnchor: "start"
        };
        if (i === "centerBottom") return {
            x: o,
            y: u,
            textAnchor: "middle",
            verticalAnchor: "end"
        };
        var p = (c + l) / 2,
            x = Ee(o, u, p, h),
            w = x.x,
            b = x.y;
        return {
            x: w,
            y: b,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }
    },
    z1 = function(t) {
        var r = t.viewBox,
            n = t.parentViewBox,
            i = t.offset,
            a = t.position,
            o = r,
            u = o.x,
            c = o.y,
            l = o.width,
            f = o.height,
            s = f >= 0 ? 1 : -1,
            h = s * i,
            d = s > 0 ? "end" : "start",
            y = s > 0 ? "start" : "end",
            v = l >= 0 ? 1 : -1,
            p = v * i,
            x = v > 0 ? "end" : "start",
            w = v > 0 ? "start" : "end";
        if (a === "top") {
            var b = {
                x: u + l / 2,
                y: c - s * i,
                textAnchor: "middle",
                verticalAnchor: d
            };
            return xe(xe({}, b), n ? {
                height: Math.max(c - n.y, 0),
                width: l
            } : {})
        }
        if (a === "bottom") {
            var O = {
                x: u + l / 2,
                y: c + f + h,
                textAnchor: "middle",
                verticalAnchor: y
            };
            return xe(xe({}, O), n ? {
                height: Math.max(n.y + n.height - (c + f), 0),
                width: l
            } : {})
        }
        if (a === "left") {
            var m = {
                x: u - p,
                y: c + f / 2,
                textAnchor: x,
                verticalAnchor: "middle"
            };
            return xe(xe({}, m), n ? {
                width: Math.max(m.x - n.x, 0),
                height: f
            } : {})
        }
        if (a === "right") {
            var g = {
                x: u + l + p,
                y: c + f / 2,
                textAnchor: w,
                verticalAnchor: "middle"
            };
            return xe(xe({}, g), n ? {
                width: Math.max(n.x + n.width - g.x, 0),
                height: f
            } : {})
        }
        var S = n ? {
            width: l,
            height: f
        } : {};
        return a === "insideLeft" ? xe({
            x: u + p,
            y: c + f / 2,
            textAnchor: w,
            verticalAnchor: "middle"
        }, S) : a === "insideRight" ? xe({
            x: u + l - p,
            y: c + f / 2,
            textAnchor: x,
            verticalAnchor: "middle"
        }, S) : a === "insideTop" ? xe({
            x: u + l / 2,
            y: c + h,
            textAnchor: "middle",
            verticalAnchor: y
        }, S) : a === "insideBottom" ? xe({
            x: u + l / 2,
            y: c + f - h,
            textAnchor: "middle",
            verticalAnchor: d
        }, S) : a === "insideTopLeft" ? xe({
            x: u + p,
            y: c + h,
            textAnchor: w,
            verticalAnchor: y
        }, S) : a === "insideTopRight" ? xe({
            x: u + l - p,
            y: c + h,
            textAnchor: x,
            verticalAnchor: y
        }, S) : a === "insideBottomLeft" ? xe({
            x: u + p,
            y: c + f - h,
            textAnchor: w,
            verticalAnchor: d
        }, S) : a === "insideBottomRight" ? xe({
            x: u + l - p,
            y: c + f - h,
            textAnchor: x,
            verticalAnchor: d
        }, S) : _r(a) && (B(a.x) || $t(a.x)) && (B(a.y) || $t(a.y)) ? xe({
            x: u + qt(a.x, l),
            y: c + qt(a.y, f),
            textAnchor: "end",
            verticalAnchor: "end"
        }, S) : xe({
            x: u + l / 2,
            y: c + f / 2,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }, S)
    },
    U1 = function(t) {
        return "cx" in t && B(t.cx)
    };

function je(e) {
    var t = e.offset,
        r = t === void 0 ? 5 : t,
        n = k1(e, T1),
        i = xe({
            offset: r
        }, n),
        a = i.viewBox,
        o = i.position,
        u = i.value,
        c = i.children,
        l = i.content,
        f = i.className,
        s = f === void 0 ? "" : f,
        h = i.textBreakAll;
    if (!a || re(u) && re(c) && !R.isValidElement(l) && !Y(l)) return null;
    if (R.isValidElement(l)) return R.cloneElement(l, i);
    var d;
    if (Y(l)) {
        if (d = R.createElement(l, i), R.isValidElement(d)) return d
    } else d = L1(i);
    var y = U1(a),
        v = ee(i, !0);
    if (y && (o === "insideStart" || o === "insideEnd" || o === "end")) return F1(i, d, v);
    var p = y ? W1(i) : z1(i);
    return A.createElement(li, sn({
        className: te("recharts-label", s)
    }, v, p, {
        breakAll: h
    }), d)
}
je.displayName = "Label";
var Qd = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.angle,
            a = t.startAngle,
            o = t.endAngle,
            u = t.r,
            c = t.radius,
            l = t.innerRadius,
            f = t.outerRadius,
            s = t.x,
            h = t.y,
            d = t.top,
            y = t.left,
            v = t.width,
            p = t.height,
            x = t.clockWise,
            w = t.labelViewBox;
        if (w) return w;
        if (B(v) && B(p)) {
            if (B(s) && B(h)) return {
                x: s,
                y: h,
                width: v,
                height: p
            };
            if (B(d) && B(y)) return {
                x: d,
                y,
                width: v,
                height: p
            }
        }
        return B(s) && B(h) ? {
            x: s,
            y: h,
            width: 0,
            height: 0
        } : B(r) && B(n) ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: l || 0,
            outerRadius: f || c || u || 0,
            clockWise: x
        } : t.viewBox ? t.viewBox : {}
    },
    H1 = function(t, r) {
        return t ? t === !0 ? A.createElement(je, {
            key: "label-implicit",
            viewBox: r
        }) : we(t) ? A.createElement(je, {
            key: "label-implicit",
            viewBox: r,
            value: t
        }) : R.isValidElement(t) ? t.type === je ? R.cloneElement(t, {
            key: "label-implicit",
            viewBox: r
        }) : A.createElement(je, {
            key: "label-implicit",
            content: t,
            viewBox: r
        }) : Y(t) ? A.createElement(je, {
            key: "label-implicit",
            content: t,
            viewBox: r
        }) : _r(t) ? A.createElement(je, sn({
            viewBox: r
        }, t, {
            key: "label-implicit"
        })) : null : null
    },
    G1 = function(t, r) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (!t || !t.children && n && !t.label) return null;
        var i = t.children,
            a = Qd(t),
            o = Ze(i, je).map(function(c, l) {
                return R.cloneElement(c, {
                    viewBox: r || a,
                    key: "label-".concat(l)
                })
            });
        if (!n) return o;
        var u = H1(t.label, r || a);
        return [u].concat(j1(o))
    };
je.parseViewBox = Qd;
je.renderCallByParent = G1;
var Oo, If;

function K1() {
    if (If) return Oo;
    If = 1;

    function e(t) {
        var r = t == null ? 0 : t.length;
        return r ? t[r - 1] : void 0
    }
    return Oo = e, Oo
}
var X1 = K1();
const V1 = fe(X1);

function fn(e) {
    "@babel/helpers - typeof";
    return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, fn(e)
}
var Y1 = ["valueAccessor"],
    Z1 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

function J1(e) {
    return rS(e) || tS(e) || eS(e) || Q1()
}

function Q1() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function eS(e, t) {
    if (e) {
        if (typeof e == "string") return _u(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _u(e, t)
    }
}

function tS(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function rS(e) {
    if (Array.isArray(e)) return _u(e)
}

function _u(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function Ai() {
    return Ai = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ai.apply(this, arguments)
}

function kf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Nf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? kf(Object(r), !0).forEach(function(n) {
            nS(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function nS(e, t, r) {
    return t = iS(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function iS(e) {
    var t = aS(e, "string");
    return fn(t) == "symbol" ? t : t + ""
}

function aS(e, t) {
    if (fn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (fn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Df(e, t) {
    if (e == null) return {};
    var r = oS(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function oS(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}
var uS = function(t) {
    return Array.isArray(t.value) ? V1(t.value) : t.value
};

function Rt(e) {
    var t = e.valueAccessor,
        r = t === void 0 ? uS : t,
        n = Df(e, Y1),
        i = n.data,
        a = n.dataKey,
        o = n.clockWise,
        u = n.id,
        c = n.textBreakAll,
        l = Df(n, Z1);
    return !i || !i.length ? null : A.createElement(Pe, {
        className: "recharts-label-list"
    }, i.map(function(f, s) {
        var h = re(a) ? r(f, s) : nt(f && f.payload, a),
            d = re(u) ? {} : {
                id: "".concat(u, "-").concat(s)
            };
        return A.createElement(je, Ai({}, ee(f, !0), l, d, {
            parentViewBox: f.parentViewBox,
            value: h,
            textBreakAll: c,
            viewBox: je.parseViewBox(re(o) ? f : Nf(Nf({}, f), {}, {
                clockWise: o
            })),
            key: "label-".concat(s),
            index: s
        }))
    }))
}
Rt.displayName = "LabelList";

function cS(e, t) {
    return e ? e === !0 ? A.createElement(Rt, {
        key: "labelList-implicit",
        data: t
    }) : A.isValidElement(e) || Y(e) ? A.createElement(Rt, {
        key: "labelList-implicit",
        data: t,
        content: e
    }) : _r(e) ? A.createElement(Rt, Ai({
        data: t
    }, e, {
        key: "labelList-implicit"
    })) : null : null
}

function lS(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || !e.children && r && !e.label) return null;
    var n = e.children,
        i = Ze(n, Rt).map(function(o, u) {
            return R.cloneElement(o, {
                data: t,
                key: "labelList-".concat(u)
            })
        });
    if (!r) return i;
    var a = cS(e.label, t);
    return [a].concat(J1(i))
}
Rt.renderCallByParent = lS;

function hn(e) {
    "@babel/helpers - typeof";
    return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, hn(e)
}

function Eu() {
    return Eu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Eu.apply(this, arguments)
}

function Rf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Bf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Rf(Object(r), !0).forEach(function(n) {
            sS(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function sS(e, t, r) {
    return t = fS(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function fS(e) {
    var t = hS(e, "string");
    return hn(t) == "symbol" ? t : t + ""
}

function hS(e, t) {
    if (hn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (hn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var pS = function(t, r) {
        var n = Ye(r - t),
            i = Math.min(Math.abs(r - t), 359.999);
        return n * i
    },
    Hn = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.radius,
            a = t.angle,
            o = t.sign,
            u = t.isExternal,
            c = t.cornerRadius,
            l = t.cornerIsExternal,
            f = c * (u ? 1 : -1) + i,
            s = Math.asin(c / f) / Pi,
            h = l ? a : a + o * s,
            d = Ee(r, n, f, h),
            y = Ee(r, n, i, h),
            v = l ? a - o * s : a,
            p = Ee(r, n, f * Math.cos(s * Pi), v);
        return {
            center: d,
            circleTangency: y,
            lineTangency: p,
            theta: s
        }
    },
    ev = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.startAngle,
            u = t.endAngle,
            c = pS(o, u),
            l = o + c,
            f = Ee(r, n, a, o),
            s = Ee(r, n, a, l),
            h = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > l), `,
    `).concat(s.x, ",").concat(s.y, `
  `);
        if (i > 0) {
            var d = Ee(r, n, i, o),
                y = Ee(r, n, i, l);
            h += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= l), `,
            `).concat(d.x, ",").concat(d.y, " Z")
        } else h += "L ".concat(r, ",").concat(n, " Z");
        return h
    },
    dS = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.cornerRadius,
            u = t.forceCornerRadius,
            c = t.cornerIsExternal,
            l = t.startAngle,
            f = t.endAngle,
            s = Ye(f - l),
            h = Hn({
                cx: r,
                cy: n,
                radius: a,
                angle: l,
                sign: s,
                cornerRadius: o,
                cornerIsExternal: c
            }),
            d = h.circleTangency,
            y = h.lineTangency,
            v = h.theta,
            p = Hn({
                cx: r,
                cy: n,
                radius: a,
                angle: f,
                sign: -s,
                cornerRadius: o,
                cornerIsExternal: c
            }),
            x = p.circleTangency,
            w = p.lineTangency,
            b = p.theta,
            O = c ? Math.abs(l - f) : Math.abs(l - f) - v - b;
        if (O < 0) return u ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : ev({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: l,
            endAngle: f
        });
        var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(s < 0), ",").concat(d.x, ",").concat(d.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(O > 180), ",").concat(+(s < 0), ",").concat(x.x, ",").concat(x.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(s < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
        if (i > 0) {
            var g = Hn({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: l,
                    sign: s,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: c
                }),
                S = g.circleTangency,
                P = g.lineTangency,
                _ = g.theta,
                M = Hn({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: f,
                    sign: -s,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: c
                }),
                E = M.circleTangency,
                T = M.lineTangency,
                I = M.theta,
                C = c ? Math.abs(l - f) : Math.abs(l - f) - _ - I;
            if (C < 0 && o === 0) return "".concat(m, "L").concat(r, ",").concat(n, "Z");
            m += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(s < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(C > 180), ",").concat(+(s > 0), ",").concat(S.x, ",").concat(S.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(s < 0), ",").concat(P.x, ",").concat(P.y, "Z")
        } else m += "L".concat(r, ",").concat(n, "Z");
        return m
    },
    vS = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
    },
    tv = function(t) {
        var r = Bf(Bf({}, vS), t),
            n = r.cx,
            i = r.cy,
            a = r.innerRadius,
            o = r.outerRadius,
            u = r.cornerRadius,
            c = r.forceCornerRadius,
            l = r.cornerIsExternal,
            f = r.startAngle,
            s = r.endAngle,
            h = r.className;
        if (o < a || f === s) return null;
        var d = te("recharts-sector", h),
            y = o - a,
            v = qt(u, y, 0, !0),
            p;
        return v > 0 && Math.abs(f - s) < 360 ? p = dS({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(v, y / 2),
            forceCornerRadius: c,
            cornerIsExternal: l,
            startAngle: f,
            endAngle: s
        }) : p = ev({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: s
        }), A.createElement("path", Eu({}, ee(r, !0), {
            className: d,
            d: p,
            role: "img"
        }))
    };

function pn(e) {
    "@babel/helpers - typeof";
    return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, pn(e)
}

function Tu() {
    return Tu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Tu.apply(this, arguments)
}

function Lf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function qf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Lf(Object(r), !0).forEach(function(n) {
            yS(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function yS(e, t, r) {
    return t = mS(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function mS(e) {
    var t = gS(e, "string");
    return pn(t) == "symbol" ? t : t + ""
}

function gS(e, t) {
    if (pn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (pn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Ff = {
        curveBasisClosed: Dm,
        curveBasisOpen: Rm,
        curveBasis: Nm,
        curveBumpX: wm,
        curveBumpY: Om,
        curveLinearClosed: Bm,
        curveLinear: Vi,
        curveMonotoneX: Lm,
        curveMonotoneY: qm,
        curveNatural: Fm,
        curveStep: Wm,
        curveStepAfter: Um,
        curveStepBefore: zm
    },
    Gn = function(t) {
        return t.x === +t.x && t.y === +t.y
    },
    Dr = function(t) {
        return t.x
    },
    Rr = function(t) {
        return t.y
    },
    bS = function(t, r) {
        if (Y(t)) return t;
        var n = "curve".concat(Ki(t));
        return (n === "curveMonotone" || n === "curveBump") && r ? Ff["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Ff[n] || Vi
    },
    xS = function(t) {
        var r = t.type,
            n = r === void 0 ? "linear" : r,
            i = t.points,
            a = i === void 0 ? [] : i,
            o = t.baseLine,
            u = t.layout,
            c = t.connectNulls,
            l = c === void 0 ? !1 : c,
            f = bS(n, u),
            s = l ? a.filter(function(v) {
                return Gn(v)
            }) : a,
            h;
        if (Array.isArray(o)) {
            var d = l ? o.filter(function(v) {
                    return Gn(v)
                }) : o,
                y = s.map(function(v, p) {
                    return qf(qf({}, v), {}, {
                        base: d[p]
                    })
                });
            return u === "vertical" ? h = Rn().y(Rr).x1(Dr).x0(function(v) {
                return v.base.x
            }) : h = Rn().x(Dr).y1(Rr).y0(function(v) {
                return v.base.y
            }), h.defined(Gn).curve(f), h(y)
        }
        return u === "vertical" && B(o) ? h = Rn().y(Rr).x1(Dr).x0(o) : B(o) ? h = Rn().x(Dr).y1(Rr).y0(o) : h = Op().x(Dr).y(Rr), h.defined(Gn).curve(f), h(s)
    },
    Wf = function(t) {
        var r = t.className,
            n = t.points,
            i = t.path,
            a = t.pathRef;
        if ((!n || !n.length) && !i) return null;
        var o = n && n.length ? xS(t) : i;
        return R.createElement("path", Tu({}, ee(t, !1), Zn(t), {
            className: te("recharts-curve", r),
            d: o,
            ref: a
        }))
    },
    wS = Object.getOwnPropertyNames,
    OS = Object.getOwnPropertySymbols,
    SS = Object.prototype.hasOwnProperty;

function zf(e, t) {
    return function(n, i, a) {
        return e(n, i, a) && t(n, i, a)
    }
}

function Kn(e) {
    return function(r, n, i) {
        if (!r || !n || typeof r != "object" || typeof n != "object") return e(r, n, i);
        var a = i.cache,
            o = a.get(r),
            u = a.get(n);
        if (o && u) return o === n && u === r;
        a.set(r, n), a.set(n, r);
        var c = e(r, n, i);
        return a.delete(r), a.delete(n), c
    }
}

function Uf(e) {
    return wS(e).concat(OS(e))
}
var PS = Object.hasOwn || function(e, t) {
    return SS.call(e, t)
};

function Gt(e, t) {
    return e === t || !e && !t && e !== e && t !== t
}
var AS = "__v",
    _S = "__o",
    ES = "_owner",
    Hf = Object.getOwnPropertyDescriptor,
    Gf = Object.keys;

function TS(e, t, r) {
    var n = e.length;
    if (t.length !== n) return !1;
    for (; n-- > 0;)
        if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
    return !0
}

function jS(e, t) {
    return Gt(e.getTime(), t.getTime())
}

function MS(e, t) {
    return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack
}

function $S(e, t) {
    return e === t
}

function Kf(e, t, r) {
    var n = e.size;
    if (n !== t.size) return !1;
    if (!n) return !0;
    for (var i = new Array(n), a = e.entries(), o, u, c = 0;
        (o = a.next()) && !o.done;) {
        for (var l = t.entries(), f = !1, s = 0;
            (u = l.next()) && !u.done;) {
            if (i[s]) {
                s++;
                continue
            }
            var h = o.value,
                d = u.value;
            if (r.equals(h[0], d[0], c, s, e, t, r) && r.equals(h[1], d[1], h[0], d[0], e, t, r)) {
                f = i[s] = !0;
                break
            }
            s++
        }
        if (!f) return !1;
        c++
    }
    return !0
}
var CS = Gt;

function IS(e, t, r) {
    var n = Gf(e),
        i = n.length;
    if (Gf(t).length !== i) return !1;
    for (; i-- > 0;)
        if (!rv(e, t, r, n[i])) return !1;
    return !0
}

function Br(e, t, r) {
    var n = Uf(e),
        i = n.length;
    if (Uf(t).length !== i) return !1;
    for (var a, o, u; i-- > 0;)
        if (a = n[i], !rv(e, t, r, a) || (o = Hf(e, a), u = Hf(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable))) return !1;
    return !0
}

function kS(e, t) {
    return Gt(e.valueOf(), t.valueOf())
}

function NS(e, t) {
    return e.source === t.source && e.flags === t.flags
}

function Xf(e, t, r) {
    var n = e.size;
    if (n !== t.size) return !1;
    if (!n) return !0;
    for (var i = new Array(n), a = e.values(), o, u;
        (o = a.next()) && !o.done;) {
        for (var c = t.values(), l = !1, f = 0;
            (u = c.next()) && !u.done;) {
            if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
                l = i[f] = !0;
                break
            }
            f++
        }
        if (!l) return !1
    }
    return !0
}

function DS(e, t) {
    var r = e.length;
    if (t.length !== r) return !1;
    for (; r-- > 0;)
        if (e[r] !== t[r]) return !1;
    return !0
}

function RS(e, t) {
    return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password
}

function rv(e, t, r, n) {
    return (n === ES || n === _S || n === AS) && (e.$$typeof || t.$$typeof) ? !0 : PS(t, n) && r.equals(e[n], t[n], n, n, e, t, r)
}
var BS = "[object Arguments]",
    LS = "[object Boolean]",
    qS = "[object Date]",
    FS = "[object Error]",
    WS = "[object Map]",
    zS = "[object Number]",
    US = "[object Object]",
    HS = "[object RegExp]",
    GS = "[object Set]",
    KS = "[object String]",
    XS = "[object URL]",
    VS = Array.isArray,
    Vf = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null,
    Yf = Object.assign,
    YS = Object.prototype.toString.call.bind(Object.prototype.toString);

function ZS(e) {
    var t = e.areArraysEqual,
        r = e.areDatesEqual,
        n = e.areErrorsEqual,
        i = e.areFunctionsEqual,
        a = e.areMapsEqual,
        o = e.areNumbersEqual,
        u = e.areObjectsEqual,
        c = e.arePrimitiveWrappersEqual,
        l = e.areRegExpsEqual,
        f = e.areSetsEqual,
        s = e.areTypedArraysEqual,
        h = e.areUrlsEqual;
    return function(y, v, p) {
        if (y === v) return !0;
        if (y == null || v == null) return !1;
        var x = typeof y;
        if (x !== typeof v) return !1;
        if (x !== "object") return x === "number" ? o(y, v, p) : x === "function" ? i(y, v, p) : !1;
        var w = y.constructor;
        if (w !== v.constructor) return !1;
        if (w === Object) return u(y, v, p);
        if (VS(y)) return t(y, v, p);
        if (Vf != null && Vf(y)) return s(y, v, p);
        if (w === Date) return r(y, v, p);
        if (w === RegExp) return l(y, v, p);
        if (w === Map) return a(y, v, p);
        if (w === Set) return f(y, v, p);
        var b = YS(y);
        return b === qS ? r(y, v, p) : b === HS ? l(y, v, p) : b === WS ? a(y, v, p) : b === GS ? f(y, v, p) : b === US ? typeof y.then != "function" && typeof v.then != "function" && u(y, v, p) : b === XS ? h(y, v, p) : b === FS ? n(y, v, p) : b === BS ? u(y, v, p) : b === LS || b === zS || b === KS ? c(y, v, p) : !1
    }
}

function JS(e) {
    var t = e.circular,
        r = e.createCustomConfig,
        n = e.strict,
        i = {
            areArraysEqual: n ? Br : TS,
            areDatesEqual: jS,
            areErrorsEqual: MS,
            areFunctionsEqual: $S,
            areMapsEqual: n ? zf(Kf, Br) : Kf,
            areNumbersEqual: CS,
            areObjectsEqual: n ? Br : IS,
            arePrimitiveWrappersEqual: kS,
            areRegExpsEqual: NS,
            areSetsEqual: n ? zf(Xf, Br) : Xf,
            areTypedArraysEqual: n ? Br : DS,
            areUrlsEqual: RS
        };
    if (r && (i = Yf({}, i, r(i))), t) {
        var a = Kn(i.areArraysEqual),
            o = Kn(i.areMapsEqual),
            u = Kn(i.areObjectsEqual),
            c = Kn(i.areSetsEqual);
        i = Yf({}, i, {
            areArraysEqual: a,
            areMapsEqual: o,
            areObjectsEqual: u,
            areSetsEqual: c
        })
    }
    return i
}

function QS(e) {
    return function(t, r, n, i, a, o, u) {
        return e(t, r, u)
    }
}

function eP(e) {
    var t = e.circular,
        r = e.comparator,
        n = e.createState,
        i = e.equals,
        a = e.strict;
    if (n) return function(c, l) {
        var f = n(),
            s = f.cache,
            h = s === void 0 ? t ? new WeakMap : void 0 : s,
            d = f.meta;
        return r(c, l, {
            cache: h,
            equals: i,
            meta: d,
            strict: a
        })
    };
    if (t) return function(c, l) {
        return r(c, l, {
            cache: new WeakMap,
            equals: i,
            meta: void 0,
            strict: a
        })
    };
    var o = {
        cache: void 0,
        equals: i,
        meta: void 0,
        strict: a
    };
    return function(c, l) {
        return r(c, l, o)
    }
}
var tP = Pt();
Pt({
    strict: !0
});
Pt({
    circular: !0
});
Pt({
    circular: !0,
    strict: !0
});
Pt({
    createInternalComparator: function() {
        return Gt
    }
});
Pt({
    strict: !0,
    createInternalComparator: function() {
        return Gt
    }
});
Pt({
    circular: !0,
    createInternalComparator: function() {
        return Gt
    }
});
Pt({
    circular: !0,
    createInternalComparator: function() {
        return Gt
    },
    strict: !0
});

function Pt(e) {
    e === void 0 && (e = {});
    var t = e.circular,
        r = t === void 0 ? !1 : t,
        n = e.createInternalComparator,
        i = e.createState,
        a = e.strict,
        o = a === void 0 ? !1 : a,
        u = JS(e),
        c = ZS(u),
        l = n ? n(c) : QS(c);
    return eP({
        circular: r,
        comparator: c,
        createState: i,
        equals: l,
        strict: o
    })
}

function rP(e) {
    typeof requestAnimationFrame < "u" && requestAnimationFrame(e)
}

function Zf(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = -1,
        n = function i(a) {
            r < 0 && (r = a), a - r > t ? (e(a), r = -1) : rP(i)
        };
    requestAnimationFrame(n)
}

function ju(e) {
    "@babel/helpers - typeof";
    return ju = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ju(e)
}

function nP(e) {
    return uP(e) || oP(e) || aP(e) || iP()
}

function iP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function aP(e, t) {
    if (e) {
        if (typeof e == "string") return Jf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jf(e, t)
    }
}

function Jf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function oP(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function uP(e) {
    if (Array.isArray(e)) return e
}

function cP() {
    var e = {},
        t = function() {
            return null
        },
        r = !1,
        n = function i(a) {
            if (!r) {
                if (Array.isArray(a)) {
                    if (!a.length) return;
                    var o = a,
                        u = nP(o),
                        c = u[0],
                        l = u.slice(1);
                    if (typeof c == "number") {
                        Zf(i.bind(null, l), c);
                        return
                    }
                    i(c), Zf(i.bind(null, l));
                    return
                }
                ju(a) === "object" && (e = a, t(e)), typeof a == "function" && a()
            }
        };
    return {
        stop: function() {
            r = !0
        },
        start: function(a) {
            r = !1, n(a)
        },
        subscribe: function(a) {
            return t = a,
                function() {
                    t = function() {
                        return null
                    }
                }
        }
    }
}

function dn(e) {
    "@babel/helpers - typeof";
    return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, dn(e)
}

function Qf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Qf(Object(r), !0).forEach(function(n) {
            nv(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function nv(e, t, r) {
    return t = lP(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function lP(e) {
    var t = sP(e, "string");
    return dn(t) === "symbol" ? t : String(t)
}

function sP(e, t) {
    if (dn(e) !== "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (dn(n) !== "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var fP = function(t, r) {
        return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
            return n.filter(function(a) {
                return i.includes(a)
            })
        })
    },
    hP = function(t) {
        return t
    },
    pP = function(t) {
        return t.replace(/([A-Z])/g, function(r) {
            return "-".concat(r.toLowerCase())
        })
    },
    Ur = function(t, r) {
        return Object.keys(r).reduce(function(n, i) {
            return eh(eh({}, n), {}, nv({}, i, t(i, r[i])))
        }, {})
    },
    th = function(t, r, n) {
        return t.map(function(i) {
            return "".concat(pP(i), " ").concat(r, "ms ").concat(n)
        }).join(",")
    };

function dP(e, t) {
    return mP(e) || yP(e, t) || iv(e, t) || vP()
}

function vP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function yP(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function mP(e) {
    if (Array.isArray(e)) return e
}

function gP(e) {
    return wP(e) || xP(e) || iv(e) || bP()
}

function bP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function iv(e, t) {
    if (e) {
        if (typeof e == "string") return Mu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mu(e, t)
    }
}

function xP(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function wP(e) {
    if (Array.isArray(e)) return Mu(e)
}

function Mu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var _i = 1e-4,
    av = function(t, r) {
        return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1]
    },
    ov = function(t, r) {
        return t.map(function(n, i) {
            return n * Math.pow(r, i)
        }).reduce(function(n, i) {
            return n + i
        })
    },
    rh = function(t, r) {
        return function(n) {
            var i = av(t, r);
            return ov(i, n)
        }
    },
    OP = function(t, r) {
        return function(n) {
            var i = av(t, r),
                a = [].concat(gP(i.map(function(o, u) {
                    return o * u
                }).slice(1)), [0]);
            return ov(a, n)
        }
    },
    nh = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var i = r[0],
            a = r[1],
            o = r[2],
            u = r[3];
        if (r.length === 1) switch (r[0]) {
            case "linear":
                i = 0, a = 0, o = 1, u = 1;
                break;
            case "ease":
                i = .25, a = .1, o = .25, u = 1;
                break;
            case "ease-in":
                i = .42, a = 0, o = 1, u = 1;
                break;
            case "ease-out":
                i = .42, a = 0, o = .58, u = 1;
                break;
            case "ease-in-out":
                i = 0, a = 0, o = .58, u = 1;
                break;
            default: {
                var c = r[0].split("(");
                if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
                    var l = c[1].split(")")[0].split(",").map(function(p) {
                            return parseFloat(p)
                        }),
                        f = dP(l, 4);
                    i = f[0], a = f[1], o = f[2], u = f[3]
                }
            }
        }
        var s = rh(i, o),
            h = rh(a, u),
            d = OP(i, o),
            y = function(x) {
                return x > 1 ? 1 : x < 0 ? 0 : x
            },
            v = function(x) {
                for (var w = x > 1 ? 1 : x, b = w, O = 0; O < 8; ++O) {
                    var m = s(b) - w,
                        g = d(b);
                    if (Math.abs(m - w) < _i || g < _i) return h(b);
                    b = y(b - m / g)
                }
                return h(b)
            };
        return v.isStepper = !1, v
    },
    SP = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = t.stiff,
            n = r === void 0 ? 100 : r,
            i = t.damping,
            a = i === void 0 ? 8 : i,
            o = t.dt,
            u = o === void 0 ? 17 : o,
            c = function(f, s, h) {
                var d = -(f - s) * n,
                    y = h * a,
                    v = h + (d - y) * u / 1e3,
                    p = h * u / 1e3 + f;
                return Math.abs(p - s) < _i && Math.abs(v) < _i ? [s, 0] : [p, v]
            };
        return c.isStepper = !0, c.dt = u, c
    },
    PP = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var i = r[0];
        if (typeof i == "string") switch (i) {
            case "ease":
            case "ease-in-out":
            case "ease-out":
            case "ease-in":
            case "linear":
                return nh(i);
            case "spring":
                return SP();
            default:
                if (i.split("(")[0] === "cubic-bezier") return nh(i)
        }
        return typeof i == "function" ? i : null
    };

function vn(e) {
    "@babel/helpers - typeof";
    return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, vn(e)
}

function ih(e) {
    return EP(e) || _P(e) || uv(e) || AP()
}

function AP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function _P(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function EP(e) {
    if (Array.isArray(e)) return Cu(e)
}

function ah(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function _e(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ah(Object(r), !0).forEach(function(n) {
            $u(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ah(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function $u(e, t, r) {
    return t = TP(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function TP(e) {
    var t = jP(e, "string");
    return vn(t) === "symbol" ? t : String(t)
}

function jP(e, t) {
    if (vn(e) !== "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (vn(n) !== "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function MP(e, t) {
    return IP(e) || CP(e, t) || uv(e, t) || $P()
}

function $P() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function uv(e, t) {
    if (e) {
        if (typeof e == "string") return Cu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cu(e, t)
    }
}

function Cu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function CP(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function IP(e) {
    if (Array.isArray(e)) return e
}
var Ei = function(t, r, n) {
        return t + (r - t) * n
    },
    Iu = function(t) {
        var r = t.from,
            n = t.to;
        return r !== n
    },
    kP = function e(t, r, n) {
        var i = Ur(function(a, o) {
            if (Iu(o)) {
                var u = t(o.from, o.to, o.velocity),
                    c = MP(u, 2),
                    l = c[0],
                    f = c[1];
                return _e(_e({}, o), {}, {
                    from: l,
                    velocity: f
                })
            }
            return o
        }, r);
        return n < 1 ? Ur(function(a, o) {
            return Iu(o) ? _e(_e({}, o), {}, {
                velocity: Ei(o.velocity, i[a].velocity, n),
                from: Ei(o.from, i[a].from, n)
            }) : o
        }, r) : e(t, i, n - 1)
    };
const NP = function(e, t, r, n, i) {
    var a = fP(e, t),
        o = a.reduce(function(p, x) {
            return _e(_e({}, p), {}, $u({}, x, [e[x], t[x]]))
        }, {}),
        u = a.reduce(function(p, x) {
            return _e(_e({}, p), {}, $u({}, x, {
                from: e[x],
                velocity: 0,
                to: t[x]
            }))
        }, {}),
        c = -1,
        l, f, s = function() {
            return null
        },
        h = function() {
            return Ur(function(x, w) {
                return w.from
            }, u)
        },
        d = function() {
            return !Object.values(u).filter(Iu).length
        },
        y = function(x) {
            l || (l = x);
            var w = x - l,
                b = w / r.dt;
            u = kP(r, u, b), i(_e(_e(_e({}, e), t), h())), l = x, d() || (c = requestAnimationFrame(s))
        },
        v = function(x) {
            f || (f = x);
            var w = (x - f) / n,
                b = Ur(function(m, g) {
                    return Ei.apply(void 0, ih(g).concat([r(w)]))
                }, o);
            if (i(_e(_e(_e({}, e), t), b)), w < 1) c = requestAnimationFrame(s);
            else {
                var O = Ur(function(m, g) {
                    return Ei.apply(void 0, ih(g).concat([r(1)]))
                }, o);
                i(_e(_e(_e({}, e), t), O))
            }
        };
    return s = r.isStepper ? y : v,
        function() {
            return requestAnimationFrame(s),
                function() {
                    cancelAnimationFrame(c)
                }
        }
};

function dr(e) {
    "@babel/helpers - typeof";
    return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, dr(e)
}
var DP = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

function RP(e, t) {
    if (e == null) return {};
    var r = BP(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function BP(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function So(e) {
    return WP(e) || FP(e) || qP(e) || LP()
}

function LP() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function qP(e, t) {
    if (e) {
        if (typeof e == "string") return ku(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ku(e, t)
    }
}

function FP(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function WP(e) {
    if (Array.isArray(e)) return ku(e)
}

function ku(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function oh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ge(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? oh(Object(r), !0).forEach(function(n) {
            qr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function qr(e, t, r) {
    return t = cv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function zP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function UP(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cv(n.key), n)
    }
}

function HP(e, t, r) {
    return t && UP(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function cv(e) {
    var t = GP(e, "string");
    return dr(t) === "symbol" ? t : String(t)
}

function GP(e, t) {
    if (dr(e) !== "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (dr(n) !== "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function KP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Nu(e, t)
}

function Nu(e, t) {
    return Nu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Nu(e, t)
}

function XP(e) {
    var t = VP();
    return function() {
        var n = Ti(e),
            i;
        if (t) {
            var a = Ti(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return Du(this, i)
    }
}

function Du(e, t) {
    if (t && (dr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Ru(e)
}

function Ru(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function VP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ti(e) {
    return Ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ti(e)
}
var xt = function(e) {
    KP(r, e);
    var t = XP(r);

    function r(n, i) {
        var a;
        zP(this, r), a = t.call(this, n, i);
        var o = a.props,
            u = o.isActive,
            c = o.attributeName,
            l = o.from,
            f = o.to,
            s = o.steps,
            h = o.children,
            d = o.duration;
        if (a.handleStyleChange = a.handleStyleChange.bind(Ru(a)), a.changeStyle = a.changeStyle.bind(Ru(a)), !u || d <= 0) return a.state = {
            style: {}
        }, typeof h == "function" && (a.state = {
            style: f
        }), Du(a);
        if (s && s.length) a.state = {
            style: s[0].style
        };
        else if (l) {
            if (typeof h == "function") return a.state = {
                style: l
            }, Du(a);
            a.state = {
                style: c ? qr({}, c, l) : l
            }
        } else a.state = {
            style: {}
        };
        return a
    }
    return HP(r, [{
        key: "componentDidMount",
        value: function() {
            var i = this.props,
                a = i.isActive,
                o = i.canBegin;
            this.mounted = !0, !(!a || !o) && this.runAnimation(this.props)
        }
    }, {
        key: "componentDidUpdate",
        value: function(i) {
            var a = this.props,
                o = a.isActive,
                u = a.canBegin,
                c = a.attributeName,
                l = a.shouldReAnimate,
                f = a.to,
                s = a.from,
                h = this.state.style;
            if (u) {
                if (!o) {
                    var d = {
                        style: c ? qr({}, c, f) : f
                    };
                    this.state && h && (c && h[c] !== f || !c && h !== f) && this.setState(d);
                    return
                }
                if (!(tP(i.to, f) && i.canBegin && i.isActive)) {
                    var y = !i.canBegin || !i.isActive;
                    this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                    var v = y || l ? s : i.to;
                    if (this.state && h) {
                        var p = {
                            style: c ? qr({}, c, v) : v
                        };
                        (c && h[c] !== v || !c && h !== v) && this.setState(p)
                    }
                    this.runAnimation(Ge(Ge({}, this.props), {}, {
                        from: v,
                        begin: 0
                    }))
                }
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.mounted = !1;
            var i = this.props.onAnimationEnd;
            this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i()
        }
    }, {
        key: "handleStyleChange",
        value: function(i) {
            this.changeStyle(i)
        }
    }, {
        key: "changeStyle",
        value: function(i) {
            this.mounted && this.setState({
                style: i
            })
        }
    }, {
        key: "runJSAnimation",
        value: function(i) {
            var a = this,
                o = i.from,
                u = i.to,
                c = i.duration,
                l = i.easing,
                f = i.begin,
                s = i.onAnimationEnd,
                h = i.onAnimationStart,
                d = NP(o, u, PP(l), c, this.changeStyle),
                y = function() {
                    a.stopJSAnimation = d()
                };
            this.manager.start([h, f, y, c, s])
        }
    }, {
        key: "runStepAnimation",
        value: function(i) {
            var a = this,
                o = i.steps,
                u = i.begin,
                c = i.onAnimationStart,
                l = o[0],
                f = l.style,
                s = l.duration,
                h = s === void 0 ? 0 : s,
                d = function(v, p, x) {
                    if (x === 0) return v;
                    var w = p.duration,
                        b = p.easing,
                        O = b === void 0 ? "ease" : b,
                        m = p.style,
                        g = p.properties,
                        S = p.onAnimationEnd,
                        P = x > 0 ? o[x - 1] : p,
                        _ = g || Object.keys(m);
                    if (typeof O == "function" || O === "spring") return [].concat(So(v), [a.runJSAnimation.bind(a, {
                        from: P.style,
                        to: m,
                        duration: w,
                        easing: O
                    }), w]);
                    var M = th(_, w, O),
                        E = Ge(Ge(Ge({}, P.style), m), {}, {
                            transition: M
                        });
                    return [].concat(So(v), [E, w, S]).filter(hP)
                };
            return this.manager.start([c].concat(So(o.reduce(d, [f, Math.max(h, u)])), [i.onAnimationEnd]))
        }
    }, {
        key: "runAnimation",
        value: function(i) {
            this.manager || (this.manager = cP());
            var a = i.begin,
                o = i.duration,
                u = i.attributeName,
                c = i.to,
                l = i.easing,
                f = i.onAnimationStart,
                s = i.onAnimationEnd,
                h = i.steps,
                d = i.children,
                y = this.manager;
            if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof l == "function" || typeof d == "function" || l === "spring") {
                this.runJSAnimation(i);
                return
            }
            if (h.length > 1) {
                this.runStepAnimation(i);
                return
            }
            var v = u ? qr({}, u, c) : c,
                p = th(Object.keys(v), o, l);
            y.start([f, a, Ge(Ge({}, v), {}, {
                transition: p
            }), o, s])
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props,
                a = i.children;
            i.begin;
            var o = i.duration;
            i.attributeName, i.easing;
            var u = i.isActive;
            i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
            var c = RP(i, DP),
                l = R.Children.count(a),
                f = this.state.style;
            if (typeof a == "function") return a(f);
            if (!u || l === 0 || o <= 0) return a;
            var s = function(d) {
                var y = d.props,
                    v = y.style,
                    p = v === void 0 ? {} : v,
                    x = y.className,
                    w = R.cloneElement(d, Ge(Ge({}, c), {}, {
                        style: Ge(Ge({}, p), f),
                        className: x
                    }));
                return w
            };
            return l === 1 ? s(R.Children.only(a)) : A.createElement("div", null, R.Children.map(a, function(h) {
                return s(h)
            }))
        }
    }]), r
}(R.PureComponent);
xt.displayName = "Animate";
xt.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function() {},
    onAnimationStart: function() {}
};
xt.propTypes = {
    from: ne.oneOfType([ne.object, ne.string]),
    to: ne.oneOfType([ne.object, ne.string]),
    attributeName: ne.string,
    duration: ne.number,
    begin: ne.number,
    easing: ne.oneOfType([ne.string, ne.func]),
    steps: ne.arrayOf(ne.shape({
        duration: ne.number.isRequired,
        style: ne.object.isRequired,
        easing: ne.oneOfType([ne.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ne.func]),
        properties: ne.arrayOf("string"),
        onAnimationEnd: ne.func
    })),
    children: ne.oneOfType([ne.node, ne.func]),
    isActive: ne.bool,
    canBegin: ne.bool,
    onAnimationEnd: ne.func,
    shouldReAnimate: ne.bool,
    onAnimationStart: ne.func,
    onAnimationReStart: ne.func
};

function yn(e) {
    "@babel/helpers - typeof";
    return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, yn(e)
}

function ji() {
    return ji = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ji.apply(this, arguments)
}

function YP(e, t) {
    return eA(e) || QP(e, t) || JP(e, t) || ZP()
}

function ZP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function JP(e, t) {
    if (e) {
        if (typeof e == "string") return uh(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e, t)
    }
}

function uh(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function QP(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function eA(e) {
    if (Array.isArray(e)) return e
}

function ch(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function lh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ch(Object(r), !0).forEach(function(n) {
            tA(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ch(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function tA(e, t, r) {
    return t = rA(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function rA(e) {
    var t = nA(e, "string");
    return yn(t) == "symbol" ? t : t + ""
}

function nA(e, t) {
    if (yn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (yn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var sh = function(t, r, n, i, a) {
        var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
            u = i >= 0 ? 1 : -1,
            c = n >= 0 ? 1 : -1,
            l = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0,
            f;
        if (o > 0 && a instanceof Array) {
            for (var s = [0, 0, 0, 0], h = 0, d = 4; h < d; h++) s[h] = a[h] > o ? o : a[h];
            f = "M".concat(t, ",").concat(r + u * s[0]), s[0] > 0 && (f += "A ".concat(s[0], ",").concat(s[0], ",0,0,").concat(l, ",").concat(t + c * s[0], ",").concat(r)), f += "L ".concat(t + n - c * s[1], ",").concat(r), s[1] > 0 && (f += "A ".concat(s[1], ",").concat(s[1], ",0,0,").concat(l, `,
        `).concat(t + n, ",").concat(r + u * s[1])), f += "L ".concat(t + n, ",").concat(r + i - u * s[2]), s[2] > 0 && (f += "A ".concat(s[2], ",").concat(s[2], ",0,0,").concat(l, `,
        `).concat(t + n - c * s[2], ",").concat(r + i)), f += "L ".concat(t + c * s[3], ",").concat(r + i), s[3] > 0 && (f += "A ".concat(s[3], ",").concat(s[3], ",0,0,").concat(l, `,
        `).concat(t, ",").concat(r + i - u * s[3])), f += "Z"
        } else if (o > 0 && a === +a && a > 0) {
            var y = Math.min(o, a);
            f = "M ".concat(t, ",").concat(r + u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t + c * y, ",").concat(r, `
            L `).concat(t + n - c * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t + n, ",").concat(r + u * y, `
            L `).concat(t + n, ",").concat(r + i - u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t + n - c * y, ",").concat(r + i, `
            L `).concat(t + c * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(l, ",").concat(t, ",").concat(r + i - u * y, " Z")
        } else f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
        return f
    },
    iA = function(t, r) {
        if (!t || !r) return !1;
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y,
            u = r.width,
            c = r.height;
        if (Math.abs(u) > 0 && Math.abs(c) > 0) {
            var l = Math.min(a, a + u),
                f = Math.max(a, a + u),
                s = Math.min(o, o + c),
                h = Math.max(o, o + c);
            return n >= l && n <= f && i >= s && i <= h
        }
        return !1
    },
    aA = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    },
    Wc = function(t) {
        var r = lh(lh({}, aA), t),
            n = R.useRef(),
            i = R.useState(-1),
            a = YP(i, 2),
            o = a[0],
            u = a[1];
        R.useEffect(function() {
            if (n.current && n.current.getTotalLength) try {
                var O = n.current.getTotalLength();
                O && u(O)
            } catch {}
        }, []);
        var c = r.x,
            l = r.y,
            f = r.width,
            s = r.height,
            h = r.radius,
            d = r.className,
            y = r.animationEasing,
            v = r.animationDuration,
            p = r.animationBegin,
            x = r.isAnimationActive,
            w = r.isUpdateAnimationActive;
        if (c !== +c || l !== +l || f !== +f || s !== +s || f === 0 || s === 0) return null;
        var b = te("recharts-rectangle", d);
        return w ? A.createElement(xt, {
            canBegin: o > 0,
            from: {
                width: f,
                height: s,
                x: c,
                y: l
            },
            to: {
                width: f,
                height: s,
                x: c,
                y: l
            },
            duration: v,
            animationEasing: y,
            isActive: w
        }, function(O) {
            var m = O.width,
                g = O.height,
                S = O.x,
                P = O.y;
            return A.createElement(xt, {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: p,
                duration: v,
                isActive: x,
                easing: y
            }, A.createElement("path", ji({}, ee(r, !0), {
                className: b,
                d: sh(S, P, m, g, h),
                ref: n
            })))
        }) : A.createElement("path", ji({}, ee(r, !0), {
            className: b,
            d: sh(c, l, f, s, h)
        }))
    };

function Bu() {
    return Bu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Bu.apply(this, arguments)
}
var lv = function(t) {
    var r = t.cx,
        n = t.cy,
        i = t.r,
        a = t.className,
        o = te("recharts-dot", a);
    return r === +r && n === +n && i === +i ? R.createElement("circle", Bu({}, ee(t, !1), Zn(t), {
        className: o,
        cx: r,
        cy: n,
        r: i
    })) : null
};

function mn(e) {
    "@babel/helpers - typeof";
    return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, mn(e)
}
var oA = ["x", "y", "top", "left", "width", "height", "className"];

function Lu() {
    return Lu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Lu.apply(this, arguments)
}

function fh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function uA(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? fh(Object(r), !0).forEach(function(n) {
            cA(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function cA(e, t, r) {
    return t = lA(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function lA(e) {
    var t = sA(e, "string");
    return mn(t) == "symbol" ? t : t + ""
}

function sA(e, t) {
    if (mn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (mn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function fA(e, t) {
    if (e == null) return {};
    var r = hA(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function hA(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}
var pA = function(t, r, n, i, a, o) {
        return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n)
    },
    dA = function(t) {
        var r = t.x,
            n = r === void 0 ? 0 : r,
            i = t.y,
            a = i === void 0 ? 0 : i,
            o = t.top,
            u = o === void 0 ? 0 : o,
            c = t.left,
            l = c === void 0 ? 0 : c,
            f = t.width,
            s = f === void 0 ? 0 : f,
            h = t.height,
            d = h === void 0 ? 0 : h,
            y = t.className,
            v = fA(t, oA),
            p = uA({
                x: n,
                y: a,
                top: u,
                left: l,
                width: s,
                height: d
            }, v);
        return !B(n) || !B(a) || !B(s) || !B(d) || !B(u) || !B(l) ? null : A.createElement("path", Lu({}, ee(p, !0), {
            className: te("recharts-cross", y),
            d: pA(n, a, s, d, u, l)
        }))
    },
    vA = fy();
const yA = fe(vA);
var Po, hh;

function mA() {
    if (hh) return Po;
    hh = 1;
    var e = sp(),
        t = fp(),
        r = "[object Boolean]";

    function n(i) {
        return i === !0 || i === !1 || t(i) && e(i) == r
    }
    return Po = n, Po
}
var gA = mA();
const bA = fe(gA);

function gn(e) {
    "@babel/helpers - typeof";
    return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, gn(e)
}

function Mi() {
    return Mi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Mi.apply(this, arguments)
}

function xA(e, t) {
    return PA(e) || SA(e, t) || OA(e, t) || wA()
}

function wA() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function OA(e, t) {
    if (e) {
        if (typeof e == "string") return ph(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ph(e, t)
    }
}

function ph(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function SA(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function PA(e) {
    if (Array.isArray(e)) return e
}

function dh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function vh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? dh(Object(r), !0).forEach(function(n) {
            AA(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function AA(e, t, r) {
    return t = _A(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function _A(e) {
    var t = EA(e, "string");
    return gn(t) == "symbol" ? t : t + ""
}

function EA(e, t) {
    if (gn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (gn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var yh = function(t, r, n, i, a) {
        var o = n - i,
            u;
        return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u
    },
    TA = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
    },
    jA = function(t) {
        var r = vh(vh({}, TA), t),
            n = R.useRef(),
            i = R.useState(-1),
            a = xA(i, 2),
            o = a[0],
            u = a[1];
        R.useEffect(function() {
            if (n.current && n.current.getTotalLength) try {
                var b = n.current.getTotalLength();
                b && u(b)
            } catch {}
        }, []);
        var c = r.x,
            l = r.y,
            f = r.upperWidth,
            s = r.lowerWidth,
            h = r.height,
            d = r.className,
            y = r.animationEasing,
            v = r.animationDuration,
            p = r.animationBegin,
            x = r.isUpdateAnimationActive;
        if (c !== +c || l !== +l || f !== +f || s !== +s || h !== +h || f === 0 && s === 0 || h === 0) return null;
        var w = te("recharts-trapezoid", d);
        return x ? A.createElement(xt, {
            canBegin: o > 0,
            from: {
                upperWidth: 0,
                lowerWidth: 0,
                height: h,
                x: c,
                y: l
            },
            to: {
                upperWidth: f,
                lowerWidth: s,
                height: h,
                x: c,
                y: l
            },
            duration: v,
            animationEasing: y,
            isActive: x
        }, function(b) {
            var O = b.upperWidth,
                m = b.lowerWidth,
                g = b.height,
                S = b.x,
                P = b.y;
            return A.createElement(xt, {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: p,
                duration: v,
                easing: y
            }, A.createElement("path", Mi({}, ee(r, !0), {
                className: w,
                d: yh(S, P, O, m, g),
                ref: n
            })))
        }) : A.createElement("g", null, A.createElement("path", Mi({}, ee(r, !0), {
            className: w,
            d: yh(c, l, f, s, h)
        })))
    },
    MA = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

function bn(e) {
    "@babel/helpers - typeof";
    return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, bn(e)
}

function $A(e, t) {
    if (e == null) return {};
    var r = CA(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function CA(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function mh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function $i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? mh(Object(r), !0).forEach(function(n) {
            IA(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function IA(e, t, r) {
    return t = kA(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function kA(e) {
    var t = NA(e, "string");
    return bn(t) == "symbol" ? t : t + ""
}

function NA(e, t) {
    if (bn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (bn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function DA(e, t) {
    return $i($i({}, t), e)
}

function RA(e, t) {
    return e === "symbols"
}

function gh(e) {
    var t = e.shapeType,
        r = e.elementProps;
    switch (t) {
        case "rectangle":
            return A.createElement(Wc, r);
        case "trapezoid":
            return A.createElement(jA, r);
        case "sector":
            return A.createElement(tv, r);
        case "symbols":
            if (RA(t)) return A.createElement(pc, r);
            break;
        default:
            return null
    }
}

function BA(e) {
    return R.isValidElement(e) ? e.props : e
}

function LA(e) {
    var t = e.option,
        r = e.shapeType,
        n = e.propTransformer,
        i = n === void 0 ? DA : n,
        a = e.activeClassName,
        o = a === void 0 ? "recharts-active-shape" : a,
        u = e.isActive,
        c = $A(e, MA),
        l;
    if (R.isValidElement(t)) l = R.cloneElement(t, $i($i({}, c), BA(t)));
    else if (Y(t)) l = t(c);
    else if (yA(t) && !bA(t)) {
        var f = i(t, c);
        l = A.createElement(gh, {
            shapeType: r,
            elementProps: f
        })
    } else {
        var s = c;
        l = A.createElement(gh, {
            shapeType: r,
            elementProps: s
        })
    }
    return u ? A.createElement(Pe, {
        className: o
    }, l) : l
}

function la(e, t) {
    return t != null && "trapezoids" in e.props
}

function sa(e, t) {
    return t != null && "sectors" in e.props
}

function xn(e, t) {
    return t != null && "points" in e.props
}

function qA(e, t) {
    var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x,
        a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
    return i && a
}

function FA(e, t) {
    var r = e.endAngle === t.endAngle,
        n = e.startAngle === t.startAngle;
    return r && n
}

function WA(e, t) {
    var r = e.x === t.x,
        n = e.y === t.y,
        i = e.z === t.z;
    return r && n && i
}

function zA(e, t) {
    var r;
    return la(e, t) ? r = qA : sa(e, t) ? r = FA : xn(e, t) && (r = WA), r
}

function UA(e, t) {
    var r;
    return la(e, t) ? r = "trapezoids" : sa(e, t) ? r = "sectors" : xn(e, t) && (r = "points"), r
}

function HA(e, t) {
    if (la(e, t)) {
        var r;
        return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload
    }
    if (sa(e, t)) {
        var n;
        return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload
    }
    return xn(e, t) ? t.payload : {}
}

function GA(e) {
    var t = e.activeTooltipItem,
        r = e.graphicalItem,
        n = e.itemData,
        i = UA(r, t),
        a = HA(r, t),
        o = n.filter(function(c, l) {
            var f = uc(a, c),
                s = r.props[i].filter(function(y) {
                    var v = zA(r, t);
                    return v(y, t)
                }),
                h = r.props[i].indexOf(s[s.length - 1]),
                d = l === h;
            return f && d
        }),
        u = n.indexOf(o[o.length - 1]);
    return u
}

function wn(e) {
    "@babel/helpers - typeof";
    return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, wn(e)
}

function bh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function xh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? bh(Object(r), !0).forEach(function(n) {
            sv(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function sv(e, t, r) {
    return t = KA(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function KA(e) {
    var t = XA(e, "string");
    return wn(t) == "symbol" ? t : t + ""
}

function XA(e, t) {
    if (wn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (wn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var VA = ["Webkit", "Moz", "O", "ms"],
    YA = function(t, r) {
        var n = t.replace(/(\w)/, function(a) {
                return a.toUpperCase()
            }),
            i = VA.reduce(function(a, o) {
                return xh(xh({}, a), {}, sv({}, o + n, r))
            }, {});
        return i[t] = r, i
    };

function vr(e) {
    "@babel/helpers - typeof";
    return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, vr(e)
}

function Ci() {
    return Ci = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ci.apply(this, arguments)
}

function wh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ao(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? wh(Object(r), !0).forEach(function(n) {
            De(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ZA(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Oh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hv(n.key), n)
    }
}

function JA(e, t, r) {
    return t && Oh(e.prototype, t), r && Oh(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function QA(e, t, r) {
    return t = Ii(t), e_(e, fv() ? Reflect.construct(t, r || [], Ii(e).constructor) : t.apply(e, r))
}

function e_(e, t) {
    if (t && (vr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return t_(e)
}

function t_(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function fv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (fv = function() {
        return !!e
    })()
}

function Ii(e) {
    return Ii = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ii(e)
}

function r_(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && qu(e, t)
}

function qu(e, t) {
    return qu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, qu(e, t)
}

function De(e, t, r) {
    return t = hv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function hv(e) {
    var t = n_(e, "string");
    return vr(t) == "symbol" ? t : t + ""
}

function n_(e, t) {
    if (vr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (vr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var i_ = function(t) {
        var r = t.data,
            n = t.startIndex,
            i = t.endIndex,
            a = t.x,
            o = t.width,
            u = t.travellerWidth;
        if (!r || !r.length) return {};
        var c = r.length,
            l = Wr().domain(Yn(0, c)).range([a, a + o - u]),
            f = l.domain().map(function(s) {
                return l(s)
            });
        return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            isTravellerFocused: !1,
            startX: l(n),
            endX: l(i),
            scale: l,
            scaleValues: f
        }
    },
    Sh = function(t) {
        return t.changedTouches && !!t.changedTouches.length
    },
    yr = function(e) {
        function t(r) {
            var n;
            return ZA(this, t), n = QA(this, t, [r]), De(n, "handleDrag", function(i) {
                n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i)
            }), De(n, "handleTouchMove", function(i) {
                i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0])
            }), De(n, "handleDragEnd", function() {
                n.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !1
                }, function() {
                    var i = n.props,
                        a = i.endIndex,
                        o = i.onDragEnd,
                        u = i.startIndex;
                    o == null || o({
                        endIndex: a,
                        startIndex: u
                    })
                }), n.detachDragEndListener()
            }), De(n, "handleLeaveWrapper", function() {
                (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut))
            }), De(n, "handleEnterSlideOrTraveller", function() {
                n.setState({
                    isTextActive: !0
                })
            }), De(n, "handleLeaveSlideOrTraveller", function() {
                n.setState({
                    isTextActive: !1
                })
            }), De(n, "handleSlideDragStart", function(i) {
                var a = Sh(i) ? i.changedTouches[0] : i;
                n.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !0,
                    slideMoveStartX: a.pageX
                }), n.attachDragEndListener()
            }), n.travellerDragStartHandlers = {
                startX: n.handleTravellerDragStart.bind(n, "startX"),
                endX: n.handleTravellerDragStart.bind(n, "endX")
            }, n.state = {}, n
        }
        return r_(t, e), JA(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
            }
        }, {
            key: "getIndex",
            value: function(n) {
                var i = n.startX,
                    a = n.endX,
                    o = this.state.scaleValues,
                    u = this.props,
                    c = u.gap,
                    l = u.data,
                    f = l.length - 1,
                    s = Math.min(i, a),
                    h = Math.max(i, a),
                    d = t.getIndexInRange(o, s),
                    y = t.getIndexInRange(o, h);
                return {
                    startIndex: d - d % c,
                    endIndex: y === f ? f : y - y % c
                }
            }
        }, {
            key: "getTextOfTick",
            value: function(n) {
                var i = this.props,
                    a = i.data,
                    o = i.tickFormatter,
                    u = i.dataKey,
                    c = nt(a[n], u, n);
                return Y(o) ? o(c, n) : c
            }
        }, {
            key: "attachDragEndListener",
            value: function() {
                window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0)
            }
        }, {
            key: "detachDragEndListener",
            value: function() {
                window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0)
            }
        }, {
            key: "handleSlideDrag",
            value: function(n) {
                var i = this.state,
                    a = i.slideMoveStartX,
                    o = i.startX,
                    u = i.endX,
                    c = this.props,
                    l = c.x,
                    f = c.width,
                    s = c.travellerWidth,
                    h = c.startIndex,
                    d = c.endIndex,
                    y = c.onChange,
                    v = n.pageX - a;
                v > 0 ? v = Math.min(v, l + f - s - u, l + f - s - o) : v < 0 && (v = Math.max(v, l - o, l - u));
                var p = this.getIndex({
                    startX: o + v,
                    endX: u + v
                });
                (p.startIndex !== h || p.endIndex !== d) && y && y(p), this.setState({
                    startX: o + v,
                    endX: u + v,
                    slideMoveStartX: n.pageX
                })
            }
        }, {
            key: "handleTravellerDragStart",
            value: function(n, i) {
                var a = Sh(i) ? i.changedTouches[0] : i;
                this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: n,
                    brushMoveStartX: a.pageX
                }), this.attachDragEndListener()
            }
        }, {
            key: "handleTravellerMove",
            value: function(n) {
                var i = this.state,
                    a = i.brushMoveStartX,
                    o = i.movingTravellerId,
                    u = i.endX,
                    c = i.startX,
                    l = this.state[o],
                    f = this.props,
                    s = f.x,
                    h = f.width,
                    d = f.travellerWidth,
                    y = f.onChange,
                    v = f.gap,
                    p = f.data,
                    x = {
                        startX: this.state.startX,
                        endX: this.state.endX
                    },
                    w = n.pageX - a;
                w > 0 ? w = Math.min(w, s + h - d - l) : w < 0 && (w = Math.max(w, s - l)), x[o] = l + w;
                var b = this.getIndex(x),
                    O = b.startIndex,
                    m = b.endIndex,
                    g = function() {
                        var P = p.length - 1;
                        return o === "startX" && (u > c ? O % v === 0 : m % v === 0) || u < c && m === P || o === "endX" && (u > c ? m % v === 0 : O % v === 0) || u > c && m === P
                    };
                this.setState(De(De({}, o, l + w), "brushMoveStartX", n.pageX), function() {
                    y && g() && y(b)
                })
            }
        }, {
            key: "handleTravellerMoveKeyboard",
            value: function(n, i) {
                var a = this,
                    o = this.state,
                    u = o.scaleValues,
                    c = o.startX,
                    l = o.endX,
                    f = this.state[i],
                    s = u.indexOf(f);
                if (s !== -1) {
                    var h = s + n;
                    if (!(h === -1 || h >= u.length)) {
                        var d = u[h];
                        i === "startX" && d >= l || i === "endX" && d <= c || this.setState(De({}, i, d), function() {
                            a.props.onChange(a.getIndex({
                                startX: a.state.startX,
                                endX: a.state.endX
                            }))
                        })
                    }
                }
            }
        }, {
            key: "renderBackground",
            value: function() {
                var n = this.props,
                    i = n.x,
                    a = n.y,
                    o = n.width,
                    u = n.height,
                    c = n.fill,
                    l = n.stroke;
                return A.createElement("rect", {
                    stroke: l,
                    fill: c,
                    x: i,
                    y: a,
                    width: o,
                    height: u
                })
            }
        }, {
            key: "renderPanorama",
            value: function() {
                var n = this.props,
                    i = n.x,
                    a = n.y,
                    o = n.width,
                    u = n.height,
                    c = n.data,
                    l = n.children,
                    f = n.padding,
                    s = R.Children.only(l);
                return s ? A.cloneElement(s, {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: c
                }) : null
            }
        }, {
            key: "renderTravellerLayer",
            value: function(n, i) {
                var a, o, u = this,
                    c = this.props,
                    l = c.y,
                    f = c.travellerWidth,
                    s = c.height,
                    h = c.traveller,
                    d = c.ariaLabel,
                    y = c.data,
                    v = c.startIndex,
                    p = c.endIndex,
                    x = Math.max(n, this.props.x),
                    w = Ao(Ao({}, ee(this.props, !1)), {}, {
                        x,
                        y: l,
                        width: f,
                        height: s
                    }),
                    b = d || "Min value: ".concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
                return A.createElement(Pe, {
                    tabIndex: 0,
                    role: "slider",
                    "aria-label": b,
                    "aria-valuenow": n,
                    className: "recharts-brush-traveller",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[i],
                    onTouchStart: this.travellerDragStartHandlers[i],
                    onKeyDown: function(m) {
                        ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), u.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i))
                    },
                    onFocus: function() {
                        u.setState({
                            isTravellerFocused: !0
                        })
                    },
                    onBlur: function() {
                        u.setState({
                            isTravellerFocused: !1
                        })
                    },
                    style: {
                        cursor: "col-resize"
                    }
                }, t.renderTraveller(h, w))
            }
        }, {
            key: "renderSlide",
            value: function(n, i) {
                var a = this.props,
                    o = a.y,
                    u = a.height,
                    c = a.stroke,
                    l = a.travellerWidth,
                    f = Math.min(n, i) + l,
                    s = Math.max(Math.abs(i - n) - l, 0);
                return A.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: {
                        cursor: "move"
                    },
                    stroke: "none",
                    fill: c,
                    fillOpacity: .2,
                    x: f,
                    y: o,
                    width: s,
                    height: u
                })
            }
        }, {
            key: "renderText",
            value: function() {
                var n = this.props,
                    i = n.startIndex,
                    a = n.endIndex,
                    o = n.y,
                    u = n.height,
                    c = n.travellerWidth,
                    l = n.stroke,
                    f = this.state,
                    s = f.startX,
                    h = f.endX,
                    d = 5,
                    y = {
                        pointerEvents: "none",
                        fill: l
                    };
                return A.createElement(Pe, {
                    className: "recharts-brush-texts"
                }, A.createElement(li, Ci({
                    textAnchor: "end",
                    verticalAnchor: "middle",
                    x: Math.min(s, h) - d,
                    y: o + u / 2
                }, y), this.getTextOfTick(i)), A.createElement(li, Ci({
                    textAnchor: "start",
                    verticalAnchor: "middle",
                    x: Math.max(s, h) + c + d,
                    y: o + u / 2
                }, y), this.getTextOfTick(a)))
            }
        }, {
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.data,
                    a = n.className,
                    o = n.children,
                    u = n.x,
                    c = n.y,
                    l = n.width,
                    f = n.height,
                    s = n.alwaysShowText,
                    h = this.state,
                    d = h.startX,
                    y = h.endX,
                    v = h.isTextActive,
                    p = h.isSlideMoving,
                    x = h.isTravellerMoving,
                    w = h.isTravellerFocused;
                if (!i || !i.length || !B(u) || !B(c) || !B(l) || !B(f) || l <= 0 || f <= 0) return null;
                var b = te("recharts-brush", a),
                    O = A.Children.count(o) === 1,
                    m = YA("userSelect", "none");
                return A.createElement(Pe, {
                    className: b,
                    onMouseLeave: this.handleLeaveWrapper,
                    onTouchMove: this.handleTouchMove,
                    style: m
                }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(d, y), this.renderTravellerLayer(d, "startX"), this.renderTravellerLayer(y, "endX"), (v || p || x || w || s) && this.renderText())
            }
        }], [{
            key: "renderDefaultTraveller",
            value: function(n) {
                var i = n.x,
                    a = n.y,
                    o = n.width,
                    u = n.height,
                    c = n.stroke,
                    l = Math.floor(a + u / 2) - 1;
                return A.createElement(A.Fragment, null, A.createElement("rect", {
                    x: i,
                    y: a,
                    width: o,
                    height: u,
                    fill: c,
                    stroke: "none"
                }), A.createElement("line", {
                    x1: i + 1,
                    y1: l,
                    x2: i + o - 1,
                    y2: l,
                    fill: "none",
                    stroke: "#fff"
                }), A.createElement("line", {
                    x1: i + 1,
                    y1: l + 2,
                    x2: i + o - 1,
                    y2: l + 2,
                    fill: "none",
                    stroke: "#fff"
                }))
            }
        }, {
            key: "renderTraveller",
            value: function(n, i) {
                var a;
                return A.isValidElement(n) ? a = A.cloneElement(n, i) : Y(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a
            }
        }, {
            key: "getDerivedStateFromProps",
            value: function(n, i) {
                var a = n.data,
                    o = n.width,
                    u = n.x,
                    c = n.travellerWidth,
                    l = n.updateId,
                    f = n.startIndex,
                    s = n.endIndex;
                if (a !== i.prevData || l !== i.prevUpdateId) return Ao({
                    prevData: a,
                    prevTravellerWidth: c,
                    prevUpdateId: l,
                    prevX: u,
                    prevWidth: o
                }, a && a.length ? i_({
                    data: a,
                    width: o,
                    x: u,
                    travellerWidth: c,
                    startIndex: f,
                    endIndex: s
                }) : {
                    scale: null,
                    scaleValues: null
                });
                if (i.scale && (o !== i.prevWidth || u !== i.prevX || c !== i.prevTravellerWidth)) {
                    i.scale.range([u, u + o - c]);
                    var h = i.scale.domain().map(function(d) {
                        return i.scale(d)
                    });
                    return {
                        prevData: a,
                        prevTravellerWidth: c,
                        prevUpdateId: l,
                        prevX: u,
                        prevWidth: o,
                        startX: i.scale(n.startIndex),
                        endX: i.scale(n.endIndex),
                        scaleValues: h
                    }
                }
                return null
            }
        }, {
            key: "getIndexInRange",
            value: function(n, i) {
                for (var a = n.length, o = 0, u = a - 1; u - o > 1;) {
                    var c = Math.floor((o + u) / 2);
                    n[c] > i ? u = c : o = c
                }
                return i >= n[u] ? u : o
            }
        }])
    }(R.PureComponent);
De(yr, "displayName", "Brush");
De(yr, "defaultProps", {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    leaveTimeOut: 1e3,
    alwaysShowText: !1
});
var _o, Ph;

function a_() {
    if (Ph) return _o;
    Ph = 1;
    var e = lp();

    function t(r, n) {
        var i;
        return e(r, function(a, o, u) {
            return i = n(a, o, u), !i
        }), !!i
    }
    return _o = t, _o
}
var Eo, Ah;

function o_() {
    if (Ah) return Eo;
    Ah = 1;
    var e = _y(),
        t = zt(),
        r = a_(),
        n = Hi(),
        i = oc();

    function a(o, u, c) {
        var l = n(o) ? e : r;
        return c && i(o, u, c) && (u = void 0), l(o, t(u, 3))
    }
    return Eo = a, Eo
}
var u_ = o_();
const c_ = fe(u_);
var tt = function(t, r) {
        var n = t.alwaysShow,
            i = t.ifOverflow;
        return n && (i = "extendDomain"), i === r
    },
    To, _h;

function l_() {
    if (_h) return To;
    _h = 1;
    var e = hy(),
        t = py(),
        r = zt();

    function n(i, a) {
        var o = {};
        return a = r(a, 3), t(i, function(u, c, l) {
            e(o, c, a(u, c, l))
        }), o
    }
    return To = n, To
}
var s_ = l_();
const f_ = fe(s_);
var jo, Eh;

function h_() {
    if (Eh) return jo;
    Eh = 1;

    function e(t, r) {
        for (var n = -1, i = t == null ? 0 : t.length; ++n < i;)
            if (!r(t[n], n, t)) return !1;
        return !0
    }
    return jo = e, jo
}
var Mo, Th;

function p_() {
    if (Th) return Mo;
    Th = 1;
    var e = lp();

    function t(r, n) {
        var i = !0;
        return e(r, function(a, o, u) {
            return i = !!n(a, o, u), i
        }), i
    }
    return Mo = t, Mo
}
var $o, jh;

function d_() {
    if (jh) return $o;
    jh = 1;
    var e = h_(),
        t = p_(),
        r = zt(),
        n = Hi(),
        i = oc();

    function a(o, u, c) {
        var l = n(o) ? e : t;
        return c && i(o, u, c) && (u = void 0), l(o, r(u, 3))
    }
    return $o = a, $o
}
var v_ = d_();
const pv = fe(v_);
var y_ = ["x", "y"];

function On(e) {
    "@babel/helpers - typeof";
    return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, On(e)
}

function Fu() {
    return Fu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Fu.apply(this, arguments)
}

function Mh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Lr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Mh(Object(r), !0).forEach(function(n) {
            m_(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function m_(e, t, r) {
    return t = g_(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function g_(e) {
    var t = b_(e, "string");
    return On(t) == "symbol" ? t : t + ""
}

function b_(e, t) {
    if (On(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (On(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function x_(e, t) {
    if (e == null) return {};
    var r = w_(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function w_(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function O_(e, t) {
    var r = e.x,
        n = e.y,
        i = x_(e, y_),
        a = "".concat(r),
        o = parseInt(a, 10),
        u = "".concat(n),
        c = parseInt(u, 10),
        l = "".concat(t.height || i.height),
        f = parseInt(l, 10),
        s = "".concat(t.width || i.width),
        h = parseInt(s, 10);
    return Lr(Lr(Lr(Lr(Lr({}, t), i), o ? {
        x: o
    } : {}), c ? {
        y: c
    } : {}), {}, {
        height: f,
        width: h,
        name: t.name,
        radius: t.radius
    })
}

function $h(e) {
    return A.createElement(LA, Fu({
        shapeType: "rectangle",
        propTransformer: O_,
        activeClassName: "recharts-active-bar"
    }, e))
}
var S_ = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return function(n, i) {
            if (typeof t == "number") return t;
            var a = B(n) || zy(n);
            return a ? t(n, i) : (a || Bt(), r)
        }
    },
    P_ = ["value", "background"],
    dv;

function mr(e) {
    "@babel/helpers - typeof";
    return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, mr(e)
}

function A_(e, t) {
    if (e == null) return {};
    var r = __(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function __(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function ki() {
    return ki = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ki.apply(this, arguments)
}

function Ch(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function ve(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ch(Object(r), !0).forEach(function(n) {
            gt(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ch(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function E_(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ih(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, yv(n.key), n)
    }
}

function T_(e, t, r) {
    return t && Ih(e.prototype, t), r && Ih(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function j_(e, t, r) {
    return t = Ni(t), M_(e, vv() ? Reflect.construct(t, r || [], Ni(e).constructor) : t.apply(e, r))
}

function M_(e, t) {
    if (t && (mr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return $_(e)
}

function $_(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function vv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (vv = function() {
        return !!e
    })()
}

function Ni(e) {
    return Ni = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ni(e)
}

function C_(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Wu(e, t)
}

function Wu(e, t) {
    return Wu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Wu(e, t)
}

function gt(e, t, r) {
    return t = yv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function yv(e) {
    var t = I_(e, "string");
    return mr(t) == "symbol" ? t : t + ""
}

function I_(e, t) {
    if (mr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (mr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var wt = function(e) {
    function t() {
        var r;
        E_(this, t);
        for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
        return r = j_(this, t, [].concat(i)), gt(r, "state", {
            isAnimationFinished: !1
        }), gt(r, "id", Gi("recharts-bar-")), gt(r, "handleAnimationEnd", function() {
            var o = r.props.onAnimationEnd;
            r.setState({
                isAnimationFinished: !0
            }), o && o()
        }), gt(r, "handleAnimationStart", function() {
            var o = r.props.onAnimationStart;
            r.setState({
                isAnimationFinished: !1
            }), o && o()
        }), r
    }
    return C_(t, e), T_(t, [{
        key: "renderRectanglesStatically",
        value: function(n) {
            var i = this,
                a = this.props,
                o = a.shape,
                u = a.dataKey,
                c = a.activeIndex,
                l = a.activeBar,
                f = ee(this.props, !1);
            return n && n.map(function(s, h) {
                var d = h === c,
                    y = d ? l : o,
                    v = ve(ve(ve({}, f), s), {}, {
                        isActive: d,
                        option: y,
                        index: h,
                        dataKey: u,
                        onAnimationStart: i.handleAnimationStart,
                        onAnimationEnd: i.handleAnimationEnd
                    });
                return A.createElement(Pe, ki({
                    className: "recharts-bar-rectangle"
                }, Jn(i.props, s, h), {
                    key: "rectangle-".concat(s == null ? void 0 : s.x, "-").concat(s == null ? void 0 : s.y, "-").concat(s == null ? void 0 : s.value, "-").concat(h)
                }), A.createElement($h, v))
            })
        }
    }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
            var n = this,
                i = this.props,
                a = i.data,
                o = i.layout,
                u = i.isAnimationActive,
                c = i.animationBegin,
                l = i.animationDuration,
                f = i.animationEasing,
                s = i.animationId,
                h = this.state.prevData;
            return A.createElement(xt, {
                begin: c,
                duration: l,
                isActive: u,
                easing: f,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                key: "bar-".concat(s),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart
            }, function(d) {
                var y = d.t,
                    v = a.map(function(p, x) {
                        var w = h && h[x];
                        if (w) {
                            var b = Xt(w.x, p.x),
                                O = Xt(w.y, p.y),
                                m = Xt(w.width, p.width),
                                g = Xt(w.height, p.height);
                            return ve(ve({}, p), {}, {
                                x: b(y),
                                y: O(y),
                                width: m(y),
                                height: g(y)
                            })
                        }
                        if (o === "horizontal") {
                            var S = Xt(0, p.height),
                                P = S(y);
                            return ve(ve({}, p), {}, {
                                y: p.y + p.height - P,
                                height: P
                            })
                        }
                        var _ = Xt(0, p.width),
                            M = _(y);
                        return ve(ve({}, p), {}, {
                            width: M
                        })
                    });
                return A.createElement(Pe, null, n.renderRectanglesStatically(v))
            })
        }
    }, {
        key: "renderRectangles",
        value: function() {
            var n = this.props,
                i = n.data,
                a = n.isAnimationActive,
                o = this.state.prevData;
            return a && i && i.length && (!o || !uc(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i)
        }
    }, {
        key: "renderBackground",
        value: function() {
            var n = this,
                i = this.props,
                a = i.data,
                o = i.dataKey,
                u = i.activeIndex,
                c = ee(this.props.background, !1);
            return a.map(function(l, f) {
                l.value;
                var s = l.background,
                    h = A_(l, P_);
                if (!s) return null;
                var d = ve(ve(ve(ve(ve({}, h), {}, {
                    fill: "#eee"
                }, s), c), Jn(n.props, l, f)), {}, {
                    onAnimationStart: n.handleAnimationStart,
                    onAnimationEnd: n.handleAnimationEnd,
                    dataKey: o,
                    index: f,
                    className: "recharts-bar-background-rectangle"
                });
                return A.createElement($h, ki({
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === u
                }, d))
            })
        }
    }, {
        key: "renderErrorBar",
        value: function(n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
            var a = this.props,
                o = a.data,
                u = a.xAxis,
                c = a.yAxis,
                l = a.layout,
                f = a.children,
                s = Ze(f, ca);
            if (!s) return null;
            var h = l === "vertical" ? o[0].height / 2 : o[0].width / 2,
                d = function(p, x) {
                    var w = Array.isArray(p.value) ? p.value[1] : p.value;
                    return {
                        x: p.x,
                        y: p.y,
                        value: w,
                        errorVal: nt(p, x)
                    }
                },
                y = {
                    clipPath: n ? "url(#clipPath-".concat(i, ")") : null
                };
            return A.createElement(Pe, y, s.map(function(v) {
                return A.cloneElement(v, {
                    key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
                    data: o,
                    xAxis: u,
                    yAxis: c,
                    layout: l,
                    offset: h,
                    dataPointFormatter: d
                })
            }))
        }
    }, {
        key: "render",
        value: function() {
            var n = this.props,
                i = n.hide,
                a = n.data,
                o = n.className,
                u = n.xAxis,
                c = n.yAxis,
                l = n.left,
                f = n.top,
                s = n.width,
                h = n.height,
                d = n.isAnimationActive,
                y = n.background,
                v = n.id;
            if (i || !a || !a.length) return null;
            var p = this.state.isAnimationFinished,
                x = te("recharts-bar", o),
                w = u && u.allowDataOverflow,
                b = c && c.allowDataOverflow,
                O = w || b,
                m = re(v) ? this.id : v;
            return A.createElement(Pe, {
                className: x
            }, w || b ? A.createElement("defs", null, A.createElement("clipPath", {
                id: "clipPath-".concat(m)
            }, A.createElement("rect", {
                x: w ? l : l - s / 2,
                y: b ? f : f - h / 2,
                width: w ? s : s * 2,
                height: b ? h : h * 2
            }))) : null, A.createElement(Pe, {
                className: "recharts-bar-rectangles",
                clipPath: O ? "url(#clipPath-".concat(m, ")") : null
            }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, m), (!d || p) && Rt.renderCallByParent(this.props, a))
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function(n, i) {
            return n.animationId !== i.prevAnimationId ? {
                prevAnimationId: n.animationId,
                curData: n.data,
                prevData: i.curData
            } : n.data !== i.curData ? {
                curData: n.data
            } : null
        }
    }])
}(R.PureComponent);
dv = wt;
gt(wt, "displayName", "Bar");
gt(wt, "defaultProps", {
    xAxisId: 0,
    yAxisId: 0,
    legendType: "rect",
    minPointSize: 0,
    hide: !1,
    data: [],
    layout: "vertical",
    activeBar: !1,
    isAnimationActive: !$n.isSsr,
    animationBegin: 0,
    animationDuration: 400,
    animationEasing: "ease"
});
gt(wt, "getComposedData", function(e) {
    var t = e.props,
        r = e.item,
        n = e.barPosition,
        i = e.bandSize,
        a = e.xAxis,
        o = e.yAxis,
        u = e.xAxisTicks,
        c = e.yAxisTicks,
        l = e.stackedData,
        f = e.dataStartIndex,
        s = e.displayedData,
        h = e.offset,
        d = l1(n, r);
    if (!d) return null;
    var y = t.layout,
        v = r.type.defaultProps,
        p = v !== void 0 ? ve(ve({}, v), r.props) : r.props,
        x = p.dataKey,
        w = p.children,
        b = p.minPointSize,
        O = y === "horizontal" ? o : a,
        m = l ? O.scale.domain() : null,
        g = m1({
            numericAxis: O
        }),
        S = Ze(w, Gp),
        P = s.map(function(_, M) {
            var E, T, I, C, $, k;
            l ? E = s1(l[f + M], m) : (E = nt(_, x), Array.isArray(E) || (E = [g, E]));
            var D = S_(b, dv.defaultProps.minPointSize)(E[1], M);
            if (y === "horizontal") {
                var L, q = [o.scale(E[0]), o.scale(E[1])],
                    U = q[0],
                    G = q[1];
                T = Af({
                    axis: a,
                    ticks: u,
                    bandSize: i,
                    offset: d.offset,
                    entry: _,
                    index: M
                }), I = (L = G ?? U) !== null && L !== void 0 ? L : void 0, C = d.size;
                var W = U - G;
                if ($ = Number.isNaN(W) ? 0 : W, k = {
                        x: T,
                        y: o.y,
                        width: C,
                        height: o.height
                    }, Math.abs(D) > 0 && Math.abs($) < Math.abs(D)) {
                    var K = Ye($ || D) * (Math.abs(D) - Math.abs($));
                    I -= K, $ += K
                }
            } else {
                var ce = [a.scale(E[0]), a.scale(E[1])],
                    de = ce[0],
                    Ne = ce[1];
                if (T = de, I = Af({
                        axis: o,
                        ticks: c,
                        bandSize: i,
                        offset: d.offset,
                        entry: _,
                        index: M
                    }), C = Ne - de, $ = d.size, k = {
                        x: a.x,
                        y: I,
                        width: a.width,
                        height: $
                    }, Math.abs(D) > 0 && Math.abs(C) < Math.abs(D)) {
                    var At = Ye(C || D) * (Math.abs(D) - Math.abs(C));
                    C += At
                }
            }
            return ve(ve(ve({}, _), {}, {
                x: T,
                y: I,
                width: C,
                height: $,
                value: l ? E : E[1],
                payload: _,
                background: k
            }, S && S[M] && S[M].props), {}, {
                tooltipPayload: [Jd(r, _)],
                tooltipPosition: {
                    x: T + C / 2,
                    y: I + $ / 2
                }
            })
        });
    return ve({
        data: P,
        layout: y
    }, h)
});

function Sn(e) {
    "@babel/helpers - typeof";
    return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Sn(e)
}

function k_(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function kh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mv(n.key), n)
    }
}

function N_(e, t, r) {
    return t && kh(e.prototype, t), r && kh(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Nh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Xe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Nh(Object(r), !0).forEach(function(n) {
            fa(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function fa(e, t, r) {
    return t = mv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function mv(e) {
    var t = D_(e, "string");
    return Sn(t) == "symbol" ? t : t + ""
}

function D_(e, t) {
    if (Sn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Sn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var R_ = function(t, r, n, i, a) {
        var o = t.width,
            u = t.height,
            c = t.layout,
            l = t.children,
            f = Object.keys(r),
            s = {
                left: n.left,
                leftMirror: n.left,
                right: o - n.right,
                rightMirror: o - n.right,
                top: n.top,
                topMirror: n.top,
                bottom: u - n.bottom,
                bottomMirror: u - n.bottom
            },
            h = !!Re(l, wt);
        return f.reduce(function(d, y) {
            var v = r[y],
                p = v.orientation,
                x = v.domain,
                w = v.padding,
                b = w === void 0 ? {} : w,
                O = v.mirror,
                m = v.reversed,
                g = "".concat(p).concat(O ? "Mirror" : ""),
                S, P, _, M, E;
            if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
                var T = x[1] - x[0],
                    I = 1 / 0,
                    C = v.categoricalDomain.sort(Gy);
                if (C.forEach(function(ce, de) {
                        de > 0 && (I = Math.min((ce || 0) - (C[de - 1] || 0), I))
                    }), Number.isFinite(I)) {
                    var $ = I / T,
                        k = v.layout === "vertical" ? n.height : n.width;
                    if (v.padding === "gap" && (S = $ * k / 2), v.padding === "no-gap") {
                        var D = qt(t.barCategoryGap, $ * k),
                            L = $ * k / 2;
                        S = L - D - (L - D) / k * D
                    }
                }
            }
            i === "xAxis" ? P = [n.left + (b.left || 0) + (S || 0), n.left + n.width - (b.right || 0) - (S || 0)] : i === "yAxis" ? P = c === "horizontal" ? [n.top + n.height - (b.bottom || 0), n.top + (b.top || 0)] : [n.top + (b.top || 0) + (S || 0), n.top + n.height - (b.bottom || 0) - (S || 0)] : P = v.range, m && (P = [P[1], P[0]]);
            var q = u1(v, a, h),
                U = q.scale,
                G = q.realScaleType;
            U.domain(x).range(P), c1(U);
            var W = y1(U, Xe(Xe({}, v), {}, {
                realScaleType: G
            }));
            i === "xAxis" ? (E = p === "top" && !O || p === "bottom" && O, _ = n.left, M = s[g] - E * v.height) : i === "yAxis" && (E = p === "left" && !O || p === "right" && O, _ = s[g] - E * v.width, M = n.top);
            var K = Xe(Xe(Xe({}, v), W), {}, {
                realScaleType: G,
                x: _,
                y: M,
                scale: U,
                width: i === "xAxis" ? n.width : v.width,
                height: i === "yAxis" ? n.height : v.height
            });
            return K.bandSize = Si(K, W), !v.hide && i === "xAxis" ? s[g] += (E ? -1 : 1) * K.height : v.hide || (s[g] += (E ? -1 : 1) * K.width), Xe(Xe({}, d), {}, fa({}, y, K))
        }, {})
    },
    gv = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return {
            x: Math.min(n, a),
            y: Math.min(i, o),
            width: Math.abs(a - n),
            height: Math.abs(o - i)
        }
    },
    B_ = function(t) {
        var r = t.x1,
            n = t.y1,
            i = t.x2,
            a = t.y2;
        return gv({
            x: r,
            y: n
        }, {
            x: i,
            y: a
        })
    },
    bv = function() {
        function e(t) {
            k_(this, e), this.scale = t
        }
        return N_(e, [{
            key: "domain",
            get: function() {
                return this.scale.domain
            }
        }, {
            key: "range",
            get: function() {
                return this.scale.range
            }
        }, {
            key: "rangeMin",
            get: function() {
                return this.range()[0]
            }
        }, {
            key: "rangeMax",
            get: function() {
                return this.range()[1]
            }
        }, {
            key: "bandwidth",
            get: function() {
                return this.scale.bandwidth
            }
        }, {
            key: "apply",
            value: function(r) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    i = n.bandAware,
                    a = n.position;
                if (r !== void 0) {
                    if (a) switch (a) {
                        case "start":
                            return this.scale(r);
                        case "middle": {
                            var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(r) + o
                        }
                        case "end": {
                            var u = this.bandwidth ? this.bandwidth() : 0;
                            return this.scale(r) + u
                        }
                        default:
                            return this.scale(r)
                    }
                    if (i) {
                        var c = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(r) + c
                    }
                    return this.scale(r)
                }
            }
        }, {
            key: "isInRange",
            value: function(r) {
                var n = this.range(),
                    i = n[0],
                    a = n[n.length - 1];
                return i <= a ? r >= i && r <= a : r >= a && r <= i
            }
        }], [{
            key: "create",
            value: function(r) {
                return new e(r)
            }
        }])
    }();
fa(bv, "EPS", 1e-4);
var zc = function(t) {
    var r = Object.keys(t).reduce(function(n, i) {
        return Xe(Xe({}, n), {}, fa({}, i, bv.create(t[i])))
    }, {});
    return Xe(Xe({}, r), {}, {
        apply: function(i) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                o = a.bandAware,
                u = a.position;
            return f_(i, function(c, l) {
                return r[l].apply(c, {
                    bandAware: o,
                    position: u
                })
            })
        },
        isInRange: function(i) {
            return pv(i, function(a, o) {
                return r[o].isInRange(a)
            })
        }
    })
};

function L_(e) {
    return (e % 180 + 180) % 180
}
var q_ = function(t) {
        var r = t.width,
            n = t.height,
            i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
            a = L_(i),
            o = a * Math.PI / 180,
            u = Math.atan(n / r),
            c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
        return Math.abs(c)
    },
    Co, Dh;

function F_() {
    if (Dh) return Co;
    Dh = 1;
    var e = zt(),
        t = Ey(),
        r = Ty();

    function n(i) {
        return function(a, o, u) {
            var c = Object(a);
            if (!t(a)) {
                var l = e(o, 3);
                a = r(a), o = function(s) {
                    return l(c[s], s, c)
                }
            }
            var f = i(a, o, u);
            return f > -1 ? c[l ? a[f] : f] : void 0
        }
    }
    return Co = n, Co
}
var Io, Rh;

function W_() {
    if (Rh) return Io;
    Rh = 1;
    var e = Dp(),
        t = zt(),
        r = jy(),
        n = Math.max;

    function i(a, o, u) {
        var c = a == null ? 0 : a.length;
        if (!c) return -1;
        var l = u == null ? 0 : r(u);
        return l < 0 && (l = n(c + l, 0)), e(a, t(o, 3), l)
    }
    return Io = i, Io
}
var ko, Bh;

function z_() {
    if (Bh) return ko;
    Bh = 1;
    var e = F_(),
        t = W_(),
        r = e(t);
    return ko = r, ko
}
var U_ = z_();
const H_ = fe(U_);
var G_ = dy();
const K_ = fe(G_);
var X_ = K_(function(e) {
        return {
            x: e.left,
            y: e.top,
            width: e.width,
            height: e.height
        }
    }, function(e) {
        return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("")
    }),
    Uc = R.createContext(void 0),
    Hc = R.createContext(void 0),
    xv = R.createContext(void 0),
    wv = R.createContext({}),
    Ov = R.createContext(void 0),
    Sv = R.createContext(0),
    Pv = R.createContext(0),
    Lh = function(t) {
        var r = t.state,
            n = r.xAxisMap,
            i = r.yAxisMap,
            a = r.offset,
            o = t.clipPathId,
            u = t.children,
            c = t.width,
            l = t.height,
            f = X_(a);
        return A.createElement(Uc.Provider, {
            value: n
        }, A.createElement(Hc.Provider, {
            value: i
        }, A.createElement(wv.Provider, {
            value: a
        }, A.createElement(xv.Provider, {
            value: f
        }, A.createElement(Ov.Provider, {
            value: o
        }, A.createElement(Sv.Provider, {
            value: l
        }, A.createElement(Pv.Provider, {
            value: c
        }, u)))))))
    },
    V_ = function() {
        return R.useContext(Ov)
    },
    Av = function(t) {
        var r = R.useContext(Uc);
        r == null && Bt();
        var n = r[t];
        return n == null && Bt(), n
    },
    Y_ = function() {
        var t = R.useContext(Uc);
        return mt(t)
    },
    Z_ = function() {
        var t = R.useContext(Hc),
            r = H_(t, function(n) {
                return pv(n.domain, Number.isFinite)
            });
        return r || mt(t)
    },
    _v = function(t) {
        var r = R.useContext(Hc);
        r == null && Bt();
        var n = r[t];
        return n == null && Bt(), n
    },
    J_ = function() {
        var t = R.useContext(xv);
        return t
    },
    Q_ = function() {
        return R.useContext(wv)
    },
    Gc = function() {
        return R.useContext(Pv)
    },
    Kc = function() {
        return R.useContext(Sv)
    };

function gr(e) {
    "@babel/helpers - typeof";
    return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, gr(e)
}

function eE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function tE(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Tv(n.key), n)
    }
}

function rE(e, t, r) {
    return t && tE(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function nE(e, t, r) {
    return t = Di(t), iE(e, Ev() ? Reflect.construct(t, r || [], Di(e).constructor) : t.apply(e, r))
}

function iE(e, t) {
    if (t && (gr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return aE(e)
}

function aE(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Ev() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Ev = function() {
        return !!e
    })()
}

function Di(e) {
    return Di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Di(e)
}

function oE(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && zu(e, t)
}

function zu(e, t) {
    return zu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, zu(e, t)
}

function qh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Fh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? qh(Object(r), !0).forEach(function(n) {
            Xc(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Xc(e, t, r) {
    return t = Tv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Tv(e) {
    var t = uE(e, "string");
    return gr(t) == "symbol" ? t : t + ""
}

function uE(e, t) {
    if (gr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (gr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}

function cE(e, t) {
    return hE(e) || fE(e, t) || sE(e, t) || lE()
}

function lE() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function sE(e, t) {
    if (e) {
        if (typeof e == "string") return Wh(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wh(e, t)
    }
}

function Wh(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function fE(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function hE(e) {
    if (Array.isArray(e)) return e
}

function Uu() {
    return Uu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Uu.apply(this, arguments)
}
var pE = function(t, r) {
        var n;
        return A.isValidElement(t) ? n = A.cloneElement(t, r) : Y(t) ? n = t(r) : n = A.createElement("line", Uu({}, r, {
            className: "recharts-reference-line-line"
        })), n
    },
    dE = function(t, r, n, i, a, o, u, c, l) {
        var f = a.x,
            s = a.y,
            h = a.width,
            d = a.height;
        if (n) {
            var y = l.y,
                v = t.y.apply(y, {
                    position: o
                });
            if (tt(l, "discard") && !t.y.isInRange(v)) return null;
            var p = [{
                x: f + h,
                y: v
            }, {
                x: f,
                y: v
            }];
            return c === "left" ? p.reverse() : p
        }
        if (r) {
            var x = l.x,
                w = t.x.apply(x, {
                    position: o
                });
            if (tt(l, "discard") && !t.x.isInRange(w)) return null;
            var b = [{
                x: w,
                y: s + d
            }, {
                x: w,
                y: s
            }];
            return u === "top" ? b.reverse() : b
        }
        if (i) {
            var O = l.segment,
                m = O.map(function(g) {
                    return t.apply(g, {
                        position: o
                    })
                });
            return tt(l, "discard") && c_(m, function(g) {
                return !t.isInRange(g)
            }) ? null : m
        }
        return null
    };

function vE(e) {
    var t = e.x,
        r = e.y,
        n = e.segment,
        i = e.xAxisId,
        a = e.yAxisId,
        o = e.shape,
        u = e.className,
        c = e.alwaysShow,
        l = V_(),
        f = Av(i),
        s = _v(a),
        h = J_();
    if (!l || !h) return null;
    lt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var d = zc({
            x: f.scale,
            y: s.scale
        }),
        y = we(t),
        v = we(r),
        p = n && n.length === 2,
        x = dE(d, y, v, p, h, e.position, f.orientation, s.orientation, e);
    if (!x) return null;
    var w = cE(x, 2),
        b = w[0],
        O = b.x,
        m = b.y,
        g = w[1],
        S = g.x,
        P = g.y,
        _ = tt(e, "hidden") ? "url(#".concat(l, ")") : void 0,
        M = Fh(Fh({
            clipPath: _
        }, ee(e, !0)), {}, {
            x1: O,
            y1: m,
            x2: S,
            y2: P
        });
    return A.createElement(Pe, {
        className: te("recharts-reference-line", u)
    }, pE(o, M), je.renderCallByParent(e, B_({
        x1: O,
        y1: m,
        x2: S,
        y2: P
    })))
}
var Vc = function(e) {
    function t() {
        return eE(this, t), nE(this, t, arguments)
    }
    return oE(t, e), rE(t, [{
        key: "render",
        value: function() {
            return A.createElement(vE, this.props)
        }
    }])
}(A.Component);
Xc(Vc, "displayName", "ReferenceLine");
Xc(Vc, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle"
});

function Hu() {
    return Hu = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Hu.apply(this, arguments)
}

function br(e) {
    "@babel/helpers - typeof";
    return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, br(e)
}

function zh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Uh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? zh(Object(r), !0).forEach(function(n) {
            ha(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function yE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function mE(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mv(n.key), n)
    }
}

function gE(e, t, r) {
    return t && mE(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function bE(e, t, r) {
    return t = Ri(t), xE(e, jv() ? Reflect.construct(t, r || [], Ri(e).constructor) : t.apply(e, r))
}

function xE(e, t) {
    if (t && (br(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return wE(e)
}

function wE(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function jv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (jv = function() {
        return !!e
    })()
}

function Ri(e) {
    return Ri = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ri(e)
}

function OE(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Gu(e, t)
}

function Gu(e, t) {
    return Gu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Gu(e, t)
}

function ha(e, t, r) {
    return t = Mv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Mv(e) {
    var t = SE(e, "string");
    return br(t) == "symbol" ? t : t + ""
}

function SE(e, t) {
    if (br(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (br(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var PE = function(t) {
        var r = t.x,
            n = t.y,
            i = t.xAxis,
            a = t.yAxis,
            o = zc({
                x: i.scale,
                y: a.scale
            }),
            u = o.apply({
                x: r,
                y: n
            }, {
                bandAware: !0
            });
        return tt(t, "discard") && !o.isInRange(u) ? null : u
    },
    pa = function(e) {
        function t() {
            return yE(this, t), bE(this, t, arguments)
        }
        return OE(t, e), gE(t, [{
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.x,
                    a = n.y,
                    o = n.r,
                    u = n.alwaysShow,
                    c = n.clipPathId,
                    l = we(i),
                    f = we(a);
                if (lt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !l || !f) return null;
                var s = PE(this.props);
                if (!s) return null;
                var h = s.x,
                    d = s.y,
                    y = this.props,
                    v = y.shape,
                    p = y.className,
                    x = tt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0,
                    w = Uh(Uh({
                        clipPath: x
                    }, ee(this.props, !0)), {}, {
                        cx: h,
                        cy: d
                    });
                return A.createElement(Pe, {
                    className: te("recharts-reference-dot", p)
                }, t.renderDot(v, w), je.renderCallByParent(this.props, {
                    x: h - o,
                    y: d - o,
                    width: 2 * o,
                    height: 2 * o
                }))
            }
        }])
    }(A.Component);
ha(pa, "displayName", "ReferenceDot");
ha(pa, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1
});
ha(pa, "renderDot", function(e, t) {
    var r;
    return A.isValidElement(e) ? r = A.cloneElement(e, t) : Y(e) ? r = e(t) : r = A.createElement(lv, Hu({}, t, {
        cx: t.cx,
        cy: t.cy,
        className: "recharts-reference-dot-dot"
    })), r
});

function Ku() {
    return Ku = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ku.apply(this, arguments)
}

function xr(e) {
    "@babel/helpers - typeof";
    return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, xr(e)
}

function Hh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Gh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Hh(Object(r), !0).forEach(function(n) {
            da(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function AE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _E(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Cv(n.key), n)
    }
}

function EE(e, t, r) {
    return t && _E(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function TE(e, t, r) {
    return t = Bi(t), jE(e, $v() ? Reflect.construct(t, r || [], Bi(e).constructor) : t.apply(e, r))
}

function jE(e, t) {
    if (t && (xr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ME(e)
}

function ME(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function $v() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return ($v = function() {
        return !!e
    })()
}

function Bi(e) {
    return Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Bi(e)
}

function $E(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Xu(e, t)
}

function Xu(e, t) {
    return Xu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Xu(e, t)
}

function da(e, t, r) {
    return t = Cv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Cv(e) {
    var t = CE(e, "string");
    return xr(t) == "symbol" ? t : t + ""
}

function CE(e, t) {
    if (xr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (xr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var IE = function(t, r, n, i, a) {
        var o = a.x1,
            u = a.x2,
            c = a.y1,
            l = a.y2,
            f = a.xAxis,
            s = a.yAxis;
        if (!f || !s) return null;
        var h = zc({
                x: f.scale,
                y: s.scale
            }),
            d = {
                x: t ? h.x.apply(o, {
                    position: "start"
                }) : h.x.rangeMin,
                y: n ? h.y.apply(c, {
                    position: "start"
                }) : h.y.rangeMin
            },
            y = {
                x: r ? h.x.apply(u, {
                    position: "end"
                }) : h.x.rangeMax,
                y: i ? h.y.apply(l, {
                    position: "end"
                }) : h.y.rangeMax
            };
        return tt(a, "discard") && (!h.isInRange(d) || !h.isInRange(y)) ? null : gv(d, y)
    },
    va = function(e) {
        function t() {
            return AE(this, t), TE(this, t, arguments)
        }
        return $E(t, e), EE(t, [{
            key: "render",
            value: function() {
                var n = this.props,
                    i = n.x1,
                    a = n.x2,
                    o = n.y1,
                    u = n.y2,
                    c = n.className,
                    l = n.alwaysShow,
                    f = n.clipPathId;
                lt(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
                var s = we(i),
                    h = we(a),
                    d = we(o),
                    y = we(u),
                    v = this.props.shape;
                if (!s && !h && !d && !y && !v) return null;
                var p = IE(s, h, d, y, this.props);
                if (!p && !v) return null;
                var x = tt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
                return A.createElement(Pe, {
                    className: te("recharts-reference-area", c)
                }, t.renderRect(v, Gh(Gh({
                    clipPath: x
                }, ee(this.props, !0)), p)), je.renderCallByParent(this.props, p))
            }
        }])
    }(A.Component);
da(va, "displayName", "ReferenceArea");
da(va, "defaultProps", {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: .5,
    stroke: "none",
    strokeWidth: 1
});
da(va, "renderRect", function(e, t) {
    var r;
    return A.isValidElement(e) ? r = A.cloneElement(e, t) : Y(e) ? r = e(t) : r = A.createElement(Wc, Ku({}, t, {
        className: "recharts-reference-area-rect"
    })), r
});

function Iv(e, t, r) {
    if (t < 1) return [];
    if (t === 1 && r === void 0) return e;
    for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
    return n
}

function kE(e, t, r) {
    var n = {
        width: e.width + t.width,
        height: e.height + t.height
    };
    return q_(n, r)
}

function NE(e, t, r) {
    var n = r === "width",
        i = e.x,
        a = e.y,
        o = e.width,
        u = e.height;
    return t === 1 ? {
        start: n ? i : a,
        end: n ? i + o : a + u
    } : {
        start: n ? i + o : a + u,
        end: n ? i : a
    }
}

function Li(e, t, r, n, i) {
    if (e * t < e * n || e * t > e * i) return !1;
    var a = r();
    return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0
}

function DE(e, t) {
    return Iv(e, t + 1)
}

function RE(e, t, r, n, i) {
    for (var a = (n || []).slice(), o = t.start, u = t.end, c = 0, l = 1, f = o, s = function() {
            var y = n == null ? void 0 : n[c];
            if (y === void 0) return {
                v: Iv(n, l)
            };
            var v = c,
                p, x = function() {
                    return p === void 0 && (p = r(y, v)), p
                },
                w = y.coordinate,
                b = c === 0 || Li(e, w, x, f, u);
            b || (c = 0, f = o, l += 1), b && (f = w + e * (x() / 2 + i), c += l)
        }, h; l <= a.length;)
        if (h = s(), h) return h.v;
    return []
}

function Pn(e) {
    "@babel/helpers - typeof";
    return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Pn(e)
}

function Kh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Te(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Kh(Object(r), !0).forEach(function(n) {
            BE(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function BE(e, t, r) {
    return t = LE(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function LE(e) {
    var t = qE(e, "string");
    return Pn(t) == "symbol" ? t : t + ""
}

function qE(e, t) {
    if (Pn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Pn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function FE(e, t, r, n, i) {
    for (var a = (n || []).slice(), o = a.length, u = t.start, c = t.end, l = function(h) {
            var d = a[h],
                y, v = function() {
                    return y === void 0 && (y = r(d, h)), y
                };
            if (h === o - 1) {
                var p = e * (d.coordinate + e * v() / 2 - c);
                a[h] = d = Te(Te({}, d), {}, {
                    tickCoord: p > 0 ? d.coordinate - p * e : d.coordinate
                })
            } else a[h] = d = Te(Te({}, d), {}, {
                tickCoord: d.coordinate
            });
            var x = Li(e, d.tickCoord, v, u, c);
            x && (c = d.tickCoord - e * (v() / 2 + i), a[h] = Te(Te({}, d), {}, {
                isShow: !0
            }))
        }, f = o - 1; f >= 0; f--) l(f);
    return a
}

function WE(e, t, r, n, i, a) {
    var o = (n || []).slice(),
        u = o.length,
        c = t.start,
        l = t.end;
    if (a) {
        var f = n[u - 1],
            s = r(f, u - 1),
            h = e * (f.coordinate + e * s / 2 - l);
        o[u - 1] = f = Te(Te({}, f), {}, {
            tickCoord: h > 0 ? f.coordinate - h * e : f.coordinate
        });
        var d = Li(e, f.tickCoord, function() {
            return s
        }, c, l);
        d && (l = f.tickCoord - e * (s / 2 + i), o[u - 1] = Te(Te({}, f), {}, {
            isShow: !0
        }))
    }
    for (var y = a ? u - 1 : u, v = function(w) {
            var b = o[w],
                O, m = function() {
                    return O === void 0 && (O = r(b, w)), O
                };
            if (w === 0) {
                var g = e * (b.coordinate - e * m() / 2 - c);
                o[w] = b = Te(Te({}, b), {}, {
                    tickCoord: g < 0 ? b.coordinate - g * e : b.coordinate
                })
            } else o[w] = b = Te(Te({}, b), {}, {
                tickCoord: b.coordinate
            });
            var S = Li(e, b.tickCoord, m, c, l);
            S && (c = b.tickCoord + e * (m() / 2 + i), o[w] = Te(Te({}, b), {}, {
                isShow: !0
            }))
        }, p = 0; p < y; p++) v(p);
    return o
}

function Yc(e, t, r) {
    var n = e.tick,
        i = e.ticks,
        a = e.viewBox,
        o = e.minTickGap,
        u = e.orientation,
        c = e.interval,
        l = e.tickFormatter,
        f = e.unit,
        s = e.angle;
    if (!i || !i.length || !n) return [];
    if (B(c) || $n.isSsr) return DE(i, typeof c == "number" && B(c) ? c : 0);
    var h = [],
        d = u === "top" || u === "bottom" ? "width" : "height",
        y = f && d === "width" ? Fr(f, {
            fontSize: t,
            letterSpacing: r
        }) : {
            width: 0,
            height: 0
        },
        v = function(b, O) {
            var m = Y(l) ? l(b.value, O) : b.value;
            return d === "width" ? kE(Fr(m, {
                fontSize: t,
                letterSpacing: r
            }), y, s) : Fr(m, {
                fontSize: t,
                letterSpacing: r
            })[d]
        },
        p = i.length >= 2 ? Ye(i[1].coordinate - i[0].coordinate) : 1,
        x = NE(a, p, d);
    return c === "equidistantPreserveStart" ? RE(p, x, v, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? h = WE(p, x, v, i, o, c === "preserveStartEnd") : h = FE(p, x, v, i, o), h.filter(function(w) {
        return w.isShow
    }))
}
var zE = ["viewBox"],
    UE = ["viewBox"],
    HE = ["ticks"];

function wr(e) {
    "@babel/helpers - typeof";
    return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, wr(e)
}

function Qt() {
    return Qt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Qt.apply(this, arguments)
}

function Xh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function be(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Xh(Object(r), !0).forEach(function(n) {
            Zc(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function No(e, t) {
    if (e == null) return {};
    var r = GE(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function GE(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function KE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Vh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Nv(n.key), n)
    }
}

function XE(e, t, r) {
    return t && Vh(e.prototype, t), r && Vh(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function VE(e, t, r) {
    return t = qi(t), YE(e, kv() ? Reflect.construct(t, r || [], qi(e).constructor) : t.apply(e, r))
}

function YE(e, t) {
    if (t && (wr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ZE(e)
}

function ZE(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function kv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (kv = function() {
        return !!e
    })()
}

function qi(e) {
    return qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, qi(e)
}

function JE(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Vu(e, t)
}

function Vu(e, t) {
    return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Vu(e, t)
}

function Zc(e, t, r) {
    return t = Nv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Nv(e) {
    var t = QE(e, "string");
    return wr(t) == "symbol" ? t : t + ""
}

function QE(e, t) {
    if (wr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (wr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var Mr = function(e) {
    function t(r) {
        var n;
        return KE(this, t), n = VE(this, t, [r]), n.state = {
            fontSize: "",
            letterSpacing: ""
        }, n
    }
    return JE(t, e), XE(t, [{
        key: "shouldComponentUpdate",
        value: function(n, i) {
            var a = n.viewBox,
                o = No(n, zE),
                u = this.props,
                c = u.viewBox,
                l = No(u, UE);
            return !tr(a, c) || !tr(o, l) || !tr(i, this.state)
        }
    }, {
        key: "componentDidMount",
        value: function() {
            var n = this.layerReference;
            if (n) {
                var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                i && this.setState({
                    fontSize: window.getComputedStyle(i).fontSize,
                    letterSpacing: window.getComputedStyle(i).letterSpacing
                })
            }
        }
    }, {
        key: "getTickLineCoord",
        value: function(n) {
            var i = this.props,
                a = i.x,
                o = i.y,
                u = i.width,
                c = i.height,
                l = i.orientation,
                f = i.tickSize,
                s = i.mirror,
                h = i.tickMargin,
                d, y, v, p, x, w, b = s ? -1 : 1,
                O = n.tickSize || f,
                m = B(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (l) {
                case "top":
                    d = y = n.coordinate, p = o + +!s * c, v = p - b * O, w = v - b * h, x = m;
                    break;
                case "left":
                    v = p = n.coordinate, y = a + +!s * u, d = y - b * O, x = d - b * h, w = m;
                    break;
                case "right":
                    v = p = n.coordinate, y = a + +s * u, d = y + b * O, x = d + b * h, w = m;
                    break;
                default:
                    d = y = n.coordinate, p = o + +s * c, v = p + b * O, w = v + b * h, x = m;
                    break
            }
            return {
                line: {
                    x1: d,
                    y1: v,
                    x2: y,
                    y2: p
                },
                tick: {
                    x,
                    y: w
                }
            }
        }
    }, {
        key: "getTickTextAnchor",
        value: function() {
            var n = this.props,
                i = n.orientation,
                a = n.mirror,
                o;
            switch (i) {
                case "left":
                    o = a ? "start" : "end";
                    break;
                case "right":
                    o = a ? "end" : "start";
                    break;
                default:
                    o = "middle";
                    break
            }
            return o
        }
    }, {
        key: "getTickVerticalAnchor",
        value: function() {
            var n = this.props,
                i = n.orientation,
                a = n.mirror,
                o = "end";
            switch (i) {
                case "left":
                case "right":
                    o = "middle";
                    break;
                case "top":
                    o = a ? "start" : "end";
                    break;
                default:
                    o = a ? "end" : "start";
                    break
            }
            return o
        }
    }, {
        key: "renderAxisLine",
        value: function() {
            var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                u = n.height,
                c = n.orientation,
                l = n.mirror,
                f = n.axisLine,
                s = be(be(be({}, ee(this.props, !1)), ee(f, !1)), {}, {
                    fill: "none"
                });
            if (c === "top" || c === "bottom") {
                var h = +(c === "top" && !l || c === "bottom" && l);
                s = be(be({}, s), {}, {
                    x1: i,
                    y1: a + h * u,
                    x2: i + o,
                    y2: a + h * u
                })
            } else {
                var d = +(c === "left" && !l || c === "right" && l);
                s = be(be({}, s), {}, {
                    x1: i + d * o,
                    y1: a,
                    x2: i + d * o,
                    y2: a + u
                })
            }
            return A.createElement("line", Qt({}, s, {
                className: te("recharts-cartesian-axis-line", ze(f, "className"))
            }))
        }
    }, {
        key: "renderTicks",
        value: function(n, i, a) {
            var o = this,
                u = this.props,
                c = u.tickLine,
                l = u.stroke,
                f = u.tick,
                s = u.tickFormatter,
                h = u.unit,
                d = Yc(be(be({}, this.props), {}, {
                    ticks: n
                }), i, a),
                y = this.getTickTextAnchor(),
                v = this.getTickVerticalAnchor(),
                p = ee(this.props, !1),
                x = ee(f, !1),
                w = be(be({}, p), {}, {
                    fill: "none"
                }, ee(c, !1)),
                b = d.map(function(O, m) {
                    var g = o.getTickLineCoord(O),
                        S = g.line,
                        P = g.tick,
                        _ = be(be(be(be({
                            textAnchor: y,
                            verticalAnchor: v
                        }, p), {}, {
                            stroke: "none",
                            fill: l
                        }, x), P), {}, {
                            index: m,
                            payload: O,
                            visibleTicksCount: d.length,
                            tickFormatter: s
                        });
                    return A.createElement(Pe, Qt({
                        className: "recharts-cartesian-axis-tick",
                        key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
                    }, Jn(o.props, O, m)), c && A.createElement("line", Qt({}, w, S, {
                        className: te("recharts-cartesian-axis-tick-line", ze(c, "className"))
                    })), f && t.renderTickItem(f, _, "".concat(Y(s) ? s(O.value, m) : O.value).concat(h || "")))
                });
            return A.createElement("g", {
                className: "recharts-cartesian-axis-ticks"
            }, b)
        }
    }, {
        key: "render",
        value: function() {
            var n = this,
                i = this.props,
                a = i.axisLine,
                o = i.width,
                u = i.height,
                c = i.ticksGenerator,
                l = i.className,
                f = i.hide;
            if (f) return null;
            var s = this.props,
                h = s.ticks,
                d = No(s, HE),
                y = h;
            return Y(c) && (y = h && h.length > 0 ? c(this.props) : c(d)), o <= 0 || u <= 0 || !y || !y.length ? null : A.createElement(Pe, {
                className: te("recharts-cartesian-axis", l),
                ref: function(p) {
                    n.layerReference = p
                }
            }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), je.renderCallByParent(this.props))
        }
    }], [{
        key: "renderTickItem",
        value: function(n, i, a) {
            var o, u = te(i.className, "recharts-cartesian-axis-tick-value");
            return A.isValidElement(n) ? o = A.cloneElement(n, be(be({}, i), {}, {
                className: u
            })) : Y(n) ? o = n(be(be({}, i), {}, {
                className: u
            })) : o = A.createElement(li, Qt({}, i, {
                className: "recharts-cartesian-axis-tick-value"
            }), a), o
        }
    }])
}(R.Component);
Zc(Mr, "displayName", "CartesianAxis");
Zc(Mr, "defaultProps", {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd"
});
var eT = ["x1", "y1", "x2", "y2", "key"],
    tT = ["offset"];

function Wt(e) {
    "@babel/helpers - typeof";
    return Wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Wt(e)
}

function Yh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Me(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Yh(Object(r), !0).forEach(function(n) {
            rT(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function rT(e, t, r) {
    return t = nT(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function nT(e) {
    var t = iT(e, "string");
    return Wt(t) == "symbol" ? t : t + ""
}

function iT(e, t) {
    if (Wt(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Wt(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function kt() {
    return kt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, kt.apply(this, arguments)
}

function Zh(e, t) {
    if (e == null) return {};
    var r = aT(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function aT(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}
var oT = function(t) {
    var r = t.fill;
    if (!r || r === "none") return null;
    var n = t.fillOpacity,
        i = t.x,
        a = t.y,
        o = t.width,
        u = t.height,
        c = t.ry;
    return A.createElement("rect", {
        x: i,
        y: a,
        ry: c,
        width: o,
        height: u,
        stroke: "none",
        fill: r,
        fillOpacity: n,
        className: "recharts-cartesian-grid-bg"
    })
};

function Dv(e, t) {
    var r;
    if (A.isValidElement(e)) r = A.cloneElement(e, t);
    else if (Y(e)) r = e(t);
    else {
        var n = t.x1,
            i = t.y1,
            a = t.x2,
            o = t.y2,
            u = t.key,
            c = Zh(t, eT),
            l = ee(c, !1);
        l.offset;
        var f = Zh(l, tT);
        r = A.createElement("line", kt({}, f, {
            x1: n,
            y1: i,
            x2: a,
            y2: o,
            fill: "none",
            key: u
        }))
    }
    return r
}

function uT(e) {
    var t = e.x,
        r = e.width,
        n = e.horizontal,
        i = n === void 0 ? !0 : n,
        a = e.horizontalPoints;
    if (!i || !a || !a.length) return null;
    var o = a.map(function(u, c) {
        var l = Me(Me({}, e), {}, {
            x1: t,
            y1: u,
            x2: t + r,
            y2: u,
            key: "line-".concat(c),
            index: c
        });
        return Dv(i, l)
    });
    return A.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
    }, o)
}

function cT(e) {
    var t = e.y,
        r = e.height,
        n = e.vertical,
        i = n === void 0 ? !0 : n,
        a = e.verticalPoints;
    if (!i || !a || !a.length) return null;
    var o = a.map(function(u, c) {
        var l = Me(Me({}, e), {}, {
            x1: u,
            y1: t,
            x2: u,
            y2: t + r,
            key: "line-".concat(c),
            index: c
        });
        return Dv(i, l)
    });
    return A.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
    }, o)
}

function lT(e) {
    var t = e.horizontalFill,
        r = e.fillOpacity,
        n = e.x,
        i = e.y,
        a = e.width,
        o = e.height,
        u = e.horizontalPoints,
        c = e.horizontal,
        l = c === void 0 ? !0 : c;
    if (!l || !t || !t.length) return null;
    var f = u.map(function(h) {
        return Math.round(h + i - i)
    }).sort(function(h, d) {
        return h - d
    });
    i !== f[0] && f.unshift(0);
    var s = f.map(function(h, d) {
        var y = !f[d + 1],
            v = y ? i + o - h : f[d + 1] - h;
        if (v <= 0) return null;
        var p = d % t.length;
        return A.createElement("rect", {
            key: "react-".concat(d),
            y: h,
            x: n,
            height: v,
            width: a,
            stroke: "none",
            fill: t[p],
            fillOpacity: r,
            className: "recharts-cartesian-grid-bg"
        })
    });
    return A.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
    }, s)
}

function sT(e) {
    var t = e.vertical,
        r = t === void 0 ? !0 : t,
        n = e.verticalFill,
        i = e.fillOpacity,
        a = e.x,
        o = e.y,
        u = e.width,
        c = e.height,
        l = e.verticalPoints;
    if (!r || !n || !n.length) return null;
    var f = l.map(function(h) {
        return Math.round(h + a - a)
    }).sort(function(h, d) {
        return h - d
    });
    a !== f[0] && f.unshift(0);
    var s = f.map(function(h, d) {
        var y = !f[d + 1],
            v = y ? a + u - h : f[d + 1] - h;
        if (v <= 0) return null;
        var p = d % n.length;
        return A.createElement("rect", {
            key: "react-".concat(d),
            x: h,
            y: o,
            width: v,
            height: c,
            stroke: "none",
            fill: n[p],
            fillOpacity: i,
            className: "recharts-cartesian-grid-bg"
        })
    });
    return A.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
    }, s)
}
var fT = function(t, r) {
        var n = t.xAxis,
            i = t.width,
            a = t.height,
            o = t.offset;
        return Yd(Yc(Me(Me(Me({}, Mr.defaultProps), n), {}, {
            ticks: ut(n, !0),
            viewBox: {
                x: 0,
                y: 0,
                width: i,
                height: a
            }
        })), o.left, o.left + o.width, r)
    },
    hT = function(t, r) {
        var n = t.yAxis,
            i = t.width,
            a = t.height,
            o = t.offset;
        return Yd(Yc(Me(Me(Me({}, Mr.defaultProps), n), {}, {
            ticks: ut(n, !0),
            viewBox: {
                x: 0,
                y: 0,
                width: i,
                height: a
            }
        })), o.top, o.top + o.height, r)
    },
    Zt = {
        horizontal: !0,
        vertical: !0,
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
    };

function Yu(e) {
    var t, r, n, i, a, o, u = Gc(),
        c = Kc(),
        l = Q_(),
        f = Me(Me({}, e), {}, {
            stroke: (t = e.stroke) !== null && t !== void 0 ? t : Zt.stroke,
            fill: (r = e.fill) !== null && r !== void 0 ? r : Zt.fill,
            horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Zt.horizontal,
            horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Zt.horizontalFill,
            vertical: (a = e.vertical) !== null && a !== void 0 ? a : Zt.vertical,
            verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Zt.verticalFill,
            x: B(e.x) ? e.x : l.left,
            y: B(e.y) ? e.y : l.top,
            width: B(e.width) ? e.width : l.width,
            height: B(e.height) ? e.height : l.height
        }),
        s = f.x,
        h = f.y,
        d = f.width,
        y = f.height,
        v = f.syncWithTicks,
        p = f.horizontalValues,
        x = f.verticalValues,
        w = Y_(),
        b = Z_();
    if (!B(d) || d <= 0 || !B(y) || y <= 0 || !B(s) || s !== +s || !B(h) || h !== +h) return null;
    var O = f.verticalCoordinatesGenerator || fT,
        m = f.horizontalCoordinatesGenerator || hT,
        g = f.horizontalPoints,
        S = f.verticalPoints;
    if ((!g || !g.length) && Y(m)) {
        var P = p && p.length,
            _ = m({
                yAxis: b ? Me(Me({}, b), {}, {
                    ticks: P ? p : b.ticks
                }) : void 0,
                width: u,
                height: c,
                offset: l
            }, P ? !0 : v);
        lt(Array.isArray(_), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Wt(_), "]")), Array.isArray(_) && (g = _)
    }
    if ((!S || !S.length) && Y(O)) {
        var M = x && x.length,
            E = O({
                xAxis: w ? Me(Me({}, w), {}, {
                    ticks: M ? x : w.ticks
                }) : void 0,
                width: u,
                height: c,
                offset: l
            }, M ? !0 : v);
        lt(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Wt(E), "]")), Array.isArray(E) && (S = E)
    }
    return A.createElement("g", {
        className: "recharts-cartesian-grid"
    }, A.createElement(oT, {
        fill: f.fill,
        fillOpacity: f.fillOpacity,
        x: f.x,
        y: f.y,
        width: f.width,
        height: f.height,
        ry: f.ry
    }), A.createElement(uT, kt({}, f, {
        offset: l,
        horizontalPoints: g,
        xAxis: w,
        yAxis: b
    })), A.createElement(cT, kt({}, f, {
        offset: l,
        verticalPoints: S,
        xAxis: w,
        yAxis: b
    })), A.createElement(lT, kt({}, f, {
        horizontalPoints: g
    })), A.createElement(sT, kt({}, f, {
        verticalPoints: S
    })))
}
Yu.displayName = "CartesianGrid";

function Or(e) {
    "@babel/helpers - typeof";
    return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Or(e)
}

function pT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function dT(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lv(n.key), n)
    }
}

function vT(e, t, r) {
    return t && dT(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function yT(e, t, r) {
    return t = Fi(t), mT(e, Rv() ? Reflect.construct(t, r || [], Fi(e).constructor) : t.apply(e, r))
}

function mT(e, t) {
    if (t && (Or(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return gT(e)
}

function gT(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Rv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Rv = function() {
        return !!e
    })()
}

function Fi(e) {
    return Fi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Fi(e)
}

function bT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Zu(e, t)
}

function Zu(e, t) {
    return Zu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Zu(e, t)
}

function Bv(e, t, r) {
    return t = Lv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Lv(e) {
    var t = xT(e, "string");
    return Or(t) == "symbol" ? t : t + ""
}

function xT(e, t) {
    if (Or(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Or(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}

function Ju() {
    return Ju = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ju.apply(this, arguments)
}

function wT(e) {
    var t = e.xAxisId,
        r = Gc(),
        n = Kc(),
        i = Av(t);
    return i == null ? null : R.createElement(Mr, Ju({}, i, {
        className: te("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
        viewBox: {
            x: 0,
            y: 0,
            width: r,
            height: n
        },
        ticksGenerator: function(o) {
            return ut(o, !0)
        }
    }))
}
var An = function(e) {
    function t() {
        return pT(this, t), yT(this, t, arguments)
    }
    return bT(t, e), vT(t, [{
        key: "render",
        value: function() {
            return R.createElement(wT, this.props)
        }
    }])
}(R.Component);
Bv(An, "displayName", "XAxis");
Bv(An, "defaultProps", {
    allowDecimals: !0,
    hide: !1,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    padding: {
        left: 0,
        right: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
    allowDuplicatedCategory: !0
});

function Sr(e) {
    "@babel/helpers - typeof";
    return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Sr(e)
}

function OT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ST(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wv(n.key), n)
    }
}

function PT(e, t, r) {
    return t && ST(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function AT(e, t, r) {
    return t = Wi(t), _T(e, qv() ? Reflect.construct(t, r || [], Wi(e).constructor) : t.apply(e, r))
}

function _T(e, t) {
    if (t && (Sr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ET(e)
}

function ET(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function qv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (qv = function() {
        return !!e
    })()
}

function Wi(e) {
    return Wi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Wi(e)
}

function TT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Qu(e, t)
}

function Qu(e, t) {
    return Qu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, Qu(e, t)
}

function Fv(e, t, r) {
    return t = Wv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Wv(e) {
    var t = jT(e, "string");
    return Sr(t) == "symbol" ? t : t + ""
}

function jT(e, t) {
    if (Sr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Sr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}

function ec() {
    return ec = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ec.apply(this, arguments)
}
var MT = function(t) {
        var r = t.yAxisId,
            n = Gc(),
            i = Kc(),
            a = _v(r);
        return a == null ? null : R.createElement(Mr, ec({}, a, {
            className: te("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
            viewBox: {
                x: 0,
                y: 0,
                width: n,
                height: i
            },
            ticksGenerator: function(u) {
                return ut(u, !0)
            }
        }))
    },
    _n = function(e) {
        function t() {
            return OT(this, t), AT(this, t, arguments)
        }
        return TT(t, e), PT(t, [{
            key: "render",
            value: function() {
                return R.createElement(MT, this.props)
            }
        }])
    }(R.Component);
Fv(_n, "displayName", "YAxis");
Fv(_n, "defaultProps", {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    padding: {
        top: 0,
        bottom: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1
});

function Jh(e) {
    return kT(e) || IT(e) || CT(e) || $T()
}

function $T() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function CT(e, t) {
    if (e) {
        if (typeof e == "string") return tc(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tc(e, t)
    }
}

function IT(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function kT(e) {
    if (Array.isArray(e)) return tc(e)
}

function tc(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var rc = function(t, r, n, i, a) {
        var o = Ze(t, Vc),
            u = Ze(t, pa),
            c = [].concat(Jh(o), Jh(u)),
            l = Ze(t, va),
            f = "".concat(i, "Id"),
            s = i[0],
            h = r;
        if (c.length && (h = c.reduce(function(v, p) {
                if (p.props[f] === n && tt(p.props, "extendDomain") && B(p.props[s])) {
                    var x = p.props[s];
                    return [Math.min(v[0], x), Math.max(v[1], x)]
                }
                return v
            }, h)), l.length) {
            var d = "".concat(s, "1"),
                y = "".concat(s, "2");
            h = l.reduce(function(v, p) {
                if (p.props[f] === n && tt(p.props, "extendDomain") && B(p.props[d]) && B(p.props[y])) {
                    var x = p.props[d],
                        w = p.props[y];
                    return [Math.min(v[0], x, w), Math.max(v[1], x, w)]
                }
                return v
            }, h)
        }
        return a && a.length && (h = a.reduce(function(v, p) {
            return B(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v
        }, h)), h
    },
    Do = {
        exports: {}
    },
    Qh;

function NT() {
    return Qh || (Qh = 1, function(e) {
        var t = Object.prototype.hasOwnProperty,
            r = "~";

        function n() {}
        Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1));

        function i(c, l, f) {
            this.fn = c, this.context = l, this.once = f || !1
        }

        function a(c, l, f, s, h) {
            if (typeof f != "function") throw new TypeError("The listener must be a function");
            var d = new i(f, s || c, h),
                y = r ? r + l : l;
            return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], d] : c._events[y].push(d) : (c._events[y] = d, c._eventsCount++), c
        }

        function o(c, l) {
            --c._eventsCount === 0 ? c._events = new n : delete c._events[l]
        }

        function u() {
            this._events = new n, this._eventsCount = 0
        }
        u.prototype.eventNames = function() {
            var l = [],
                f, s;
            if (this._eventsCount === 0) return l;
            for (s in f = this._events) t.call(f, s) && l.push(r ? s.slice(1) : s);
            return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(f)) : l
        }, u.prototype.listeners = function(l) {
            var f = r ? r + l : l,
                s = this._events[f];
            if (!s) return [];
            if (s.fn) return [s.fn];
            for (var h = 0, d = s.length, y = new Array(d); h < d; h++) y[h] = s[h].fn;
            return y
        }, u.prototype.listenerCount = function(l) {
            var f = r ? r + l : l,
                s = this._events[f];
            return s ? s.fn ? 1 : s.length : 0
        }, u.prototype.emit = function(l, f, s, h, d, y) {
            var v = r ? r + l : l;
            if (!this._events[v]) return !1;
            var p = this._events[v],
                x = arguments.length,
                w, b;
            if (p.fn) {
                switch (p.once && this.removeListener(l, p.fn, void 0, !0), x) {
                    case 1:
                        return p.fn.call(p.context), !0;
                    case 2:
                        return p.fn.call(p.context, f), !0;
                    case 3:
                        return p.fn.call(p.context, f, s), !0;
                    case 4:
                        return p.fn.call(p.context, f, s, h), !0;
                    case 5:
                        return p.fn.call(p.context, f, s, h, d), !0;
                    case 6:
                        return p.fn.call(p.context, f, s, h, d, y), !0
                }
                for (b = 1, w = new Array(x - 1); b < x; b++) w[b - 1] = arguments[b];
                p.fn.apply(p.context, w)
            } else {
                var O = p.length,
                    m;
                for (b = 0; b < O; b++) switch (p[b].once && this.removeListener(l, p[b].fn, void 0, !0), x) {
                    case 1:
                        p[b].fn.call(p[b].context);
                        break;
                    case 2:
                        p[b].fn.call(p[b].context, f);
                        break;
                    case 3:
                        p[b].fn.call(p[b].context, f, s);
                        break;
                    case 4:
                        p[b].fn.call(p[b].context, f, s, h);
                        break;
                    default:
                        if (!w)
                            for (m = 1, w = new Array(x - 1); m < x; m++) w[m - 1] = arguments[m];
                        p[b].fn.apply(p[b].context, w)
                }
            }
            return !0
        }, u.prototype.on = function(l, f, s) {
            return a(this, l, f, s, !1)
        }, u.prototype.once = function(l, f, s) {
            return a(this, l, f, s, !0)
        }, u.prototype.removeListener = function(l, f, s, h) {
            var d = r ? r + l : l;
            if (!this._events[d]) return this;
            if (!f) return o(this, d), this;
            var y = this._events[d];
            if (y.fn) y.fn === f && (!h || y.once) && (!s || y.context === s) && o(this, d);
            else {
                for (var v = 0, p = [], x = y.length; v < x; v++)(y[v].fn !== f || h && !y[v].once || s && y[v].context !== s) && p.push(y[v]);
                p.length ? this._events[d] = p.length === 1 ? p[0] : p : o(this, d)
            }
            return this
        }, u.prototype.removeAllListeners = function(l) {
            var f;
            return l ? (f = r ? r + l : l, this._events[f] && o(this, f)) : (this._events = new n, this._eventsCount = 0), this
        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u
    }(Do)), Do.exports
}
var DT = NT();
const RT = fe(DT);
var Ro = new RT,
    Bo = "recharts.syncMouseEvents";

function En(e) {
    "@babel/helpers - typeof";
    return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, En(e)
}

function BT(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function LT(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zv(n.key), n)
    }
}

function qT(e, t, r) {
    return t && LT(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Lo(e, t, r) {
    return t = zv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function zv(e) {
    var t = FT(e, "string");
    return En(t) == "symbol" ? t : t + ""
}

function FT(e, t) {
    if (En(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (En(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return String(e)
}
var WT = function() {
    function e() {
        BT(this, e), Lo(this, "activeIndex", 0), Lo(this, "coordinateList", []), Lo(this, "layout", "horizontal")
    }
    return qT(e, [{
        key: "setDetails",
        value: function(r) {
            var n, i = r.coordinateList,
                a = i === void 0 ? null : i,
                o = r.container,
                u = o === void 0 ? null : o,
                c = r.layout,
                l = c === void 0 ? null : c,
                f = r.offset,
                s = f === void 0 ? null : f,
                h = r.mouseHandlerCallback,
                d = h === void 0 ? null : h;
            this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = l ?? this.layout, this.offset = s ?? this.offset, this.mouseHandlerCallback = d ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
    }, {
        key: "focus",
        value: function() {
            this.spoofMouse()
        }
    }, {
        key: "keyboardEvent",
        value: function(r) {
            if (this.coordinateList.length !== 0) switch (r.key) {
                case "ArrowRight": {
                    if (this.layout !== "horizontal") return;
                    this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
                    break
                }
                case "ArrowLeft": {
                    if (this.layout !== "horizontal") return;
                    this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
                    break
                }
            }
        }
    }, {
        key: "setIndex",
        value: function(r) {
            this.activeIndex = r
        }
    }, {
        key: "spoofMouse",
        value: function() {
            var r, n;
            if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
                var i = this.container.getBoundingClientRect(),
                    a = i.x,
                    o = i.y,
                    u = i.height,
                    c = this.coordinateList[this.activeIndex].coordinate,
                    l = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
                    f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
                    s = a + c + l,
                    h = o + this.offset.top + u / 2 + f;
                this.mouseHandlerCallback({
                    pageX: s,
                    pageY: h
                })
            }
        }
    }])
}();

function zT(e, t, r) {
    if (r === "number" && t === !0 && Array.isArray(e)) {
        var n = e == null ? void 0 : e[0],
            i = e == null ? void 0 : e[1];
        if (n && i && B(n) && B(i)) return !0
    }
    return !1
}

function UT(e, t, r, n) {
    var i = n / 2;
    return {
        stroke: "none",
        fill: "#ccc",
        x: e === "horizontal" ? t.x - i : r.left + .5,
        y: e === "horizontal" ? r.top + .5 : t.y - i,
        width: e === "horizontal" ? n : r.width - 1,
        height: e === "horizontal" ? r.height - 1 : n
    }
}

function Uv(e) {
    var t = e.cx,
        r = e.cy,
        n = e.radius,
        i = e.startAngle,
        a = e.endAngle,
        o = Ee(t, r, n, i),
        u = Ee(t, r, n, a);
    return {
        points: [o, u],
        cx: t,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: a
    }
}

function HT(e, t, r) {
    var n, i, a, o;
    if (e === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
    else if (e === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
    else if (t.cx != null && t.cy != null)
        if (e === "centric") {
            var u = t.cx,
                c = t.cy,
                l = t.innerRadius,
                f = t.outerRadius,
                s = t.angle,
                h = Ee(u, c, l, s),
                d = Ee(u, c, f, s);
            n = h.x, i = h.y, a = d.x, o = d.y
        } else return Uv(t);
    return [{
        x: n,
        y: i
    }, {
        x: a,
        y: o
    }]
}

function Tn(e) {
    "@babel/helpers - typeof";
    return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Tn(e)
}

function ep(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Xn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? ep(Object(r), !0).forEach(function(n) {
            GT(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ep(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function GT(e, t, r) {
    return t = KT(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function KT(e) {
    var t = XT(e, "string");
    return Tn(t) == "symbol" ? t : t + ""
}

function XT(e, t) {
    if (Tn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Tn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function VT(e) {
    var t, r, n = e.element,
        i = e.tooltipEventType,
        a = e.isActive,
        o = e.activeCoordinate,
        u = e.activePayload,
        c = e.offset,
        l = e.activeTooltipIndex,
        f = e.tooltipAxisBandSize,
        s = e.layout,
        h = e.chartName,
        d = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
    if (!n || !d || !a || !o || h !== "ScatterChart" && i !== "axis") return null;
    var y, v = Wf;
    if (h === "ScatterChart") y = o, v = dA;
    else if (h === "BarChart") y = UT(s, o, c, f), v = Wc;
    else if (s === "radial") {
        var p = Uv(o),
            x = p.cx,
            w = p.cy,
            b = p.radius,
            O = p.startAngle,
            m = p.endAngle;
        y = {
            cx: x,
            cy: w,
            startAngle: O,
            endAngle: m,
            innerRadius: b,
            outerRadius: b
        }, v = tv
    } else y = {
        points: HT(s, o, c)
    }, v = Wf;
    var g = Xn(Xn(Xn(Xn({
        stroke: "#ccc",
        pointerEvents: "none"
    }, c), y), ee(d, !1)), {}, {
        payload: u,
        payloadIndex: l,
        className: te("recharts-tooltip-cursor", d.className)
    });
    return R.isValidElement(d) ? R.cloneElement(d, g) : R.createElement(v, g)
}
var YT = ["item"],
    ZT = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

function Pr(e) {
    "@babel/helpers - typeof";
    return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Pr(e)
}

function er() {
    return er = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, er.apply(this, arguments)
}

function tp(e, t) {
    return ej(e) || QT(e, t) || Gv(e, t) || JT()
}

function JT() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function QT(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, i, a, o, u = [],
            c = !0,
            l = !1;
        try {
            if (a = (r = r.call(e)).next, t !== 0)
                for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (f) {
            l = !0, i = f
        } finally {
            try {
                if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return
            } finally {
                if (l) throw i
            }
        }
        return u
    }
}

function ej(e) {
    if (Array.isArray(e)) return e
}

function rp(e, t) {
    if (e == null) return {};
    var r = tj(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function tj(e, t) {
    if (e == null) return {};
    var r = {};
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) >= 0) continue;
            r[n] = e[n]
        } return r
}

function rj(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function nj(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Kv(n.key), n)
    }
}

function ij(e, t, r) {
    return t && nj(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function aj(e, t, r) {
    return t = zi(t), oj(e, Hv() ? Reflect.construct(t, r || [], zi(e).constructor) : t.apply(e, r))
}

function oj(e, t) {
    if (t && (Pr(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return uj(e)
}

function uj(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Hv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Hv = function() {
        return !!e
    })()
}

function zi(e) {
    return zi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, zi(e)
}

function cj(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && nc(e, t)
}

function nc(e, t) {
    return nc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i, n
    }, nc(e, t)
}

function Ar(e) {
    return fj(e) || sj(e) || Gv(e) || lj()
}

function lj() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Gv(e, t) {
    if (e) {
        if (typeof e == "string") return ic(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ic(e, t)
    }
}

function sj(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function fj(e) {
    if (Array.isArray(e)) return ic(e)
}

function ic(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function np(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? np(Object(r), !0).forEach(function(n) {
            H(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : np(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function H(e, t, r) {
    return t = Kv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Kv(e) {
    var t = hj(e, "string");
    return Pr(t) == "symbol" ? t : t + ""
}

function hj(e, t) {
    if (Pr(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (Pr(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var pj = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
    },
    dj = {
        width: "100%",
        height: "100%"
    },
    Xv = {
        x: 0,
        y: 0
    };

function Vn(e) {
    return e
}
var vj = function(t, r) {
        return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius
    },
    yj = function(t, r, n, i) {
        var a = r.find(function(f) {
            return f && f.index === n
        });
        if (a) {
            if (t === "horizontal") return {
                x: a.coordinate,
                y: i.y
            };
            if (t === "vertical") return {
                x: i.x,
                y: a.coordinate
            };
            if (t === "centric") {
                var o = a.coordinate,
                    u = i.radius;
                return j(j(j({}, i), Ee(i.cx, i.cy, u, o)), {}, {
                    angle: o,
                    radius: u
                })
            }
            var c = a.coordinate,
                l = i.angle;
            return j(j(j({}, i), Ee(i.cx, i.cy, c, l)), {}, {
                angle: l,
                radius: c
            })
        }
        return Xv
    },
    ya = function(t, r) {
        var n = r.graphicalItems,
            i = r.dataStartIndex,
            a = r.dataEndIndex,
            o = (n ?? []).reduce(function(u, c) {
                var l = c.props.data;
                return l && l.length ? [].concat(Ar(u), Ar(l)) : u
            }, []);
        return o.length > 0 ? o : t && t.length && B(i) && B(a) ? t.slice(i, a + 1) : []
    };

function Vv(e) {
    return e === "number" ? [0, "auto"] : void 0
}
var ac = function(t, r, n, i) {
        var a = t.graphicalItems,
            o = t.tooltipAxis,
            u = ya(r, t);
        return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(c, l) {
            var f, s = (f = l.props.data) !== null && f !== void 0 ? f : r;
            s && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (s = s.slice(t.dataStartIndex, t.dataEndIndex + 1));
            var h;
            if (o.dataKey && !o.allowDuplicatedCategory) {
                var d = s === void 0 ? u : s;
                h = Uo(d, o.dataKey, i)
            } else h = s && s[n] || u[n];
            return h ? [].concat(Ar(c), [Jd(l, h)]) : c
        }, [])
    },
    ip = function(t, r, n, i) {
        var a = i || {
                x: t.chartX,
                y: t.chartY
            },
            o = vj(a, n),
            u = t.orderedTooltipTicks,
            c = t.tooltipAxis,
            l = t.tooltipTicks,
            f = t1(o, u, l, c);
        if (f >= 0 && l) {
            var s = l[f] && l[f].value,
                h = ac(t, r, f, s),
                d = yj(n, u, f, a);
            return {
                activeTooltipIndex: f,
                activeLabel: s,
                activePayload: h,
                activeCoordinate: d
            }
        }
        return null
    },
    mj = function(t, r) {
        var n = r.axes,
            i = r.graphicalItems,
            a = r.axisType,
            o = r.axisIdKey,
            u = r.stackGroups,
            c = r.dataStartIndex,
            l = r.dataEndIndex,
            f = t.layout,
            s = t.children,
            h = t.stackOffset,
            d = Vd(f, a);
        return n.reduce(function(y, v) {
            var p, x = v.type.defaultProps !== void 0 ? j(j({}, v.type.defaultProps), v.props) : v.props,
                w = x.type,
                b = x.dataKey,
                O = x.allowDataOverflow,
                m = x.allowDuplicatedCategory,
                g = x.scale,
                S = x.ticks,
                P = x.includeHidden,
                _ = x[o];
            if (y[_]) return y;
            var M = ya(t.data, {
                    graphicalItems: i.filter(function(W) {
                        var K, ce = o in W.props ? W.props[o] : (K = W.type.defaultProps) === null || K === void 0 ? void 0 : K[o];
                        return ce === _
                    }),
                    dataStartIndex: c,
                    dataEndIndex: l
                }),
                E = M.length,
                T, I, C;
            zT(x.domain, O, w) && (T = Pu(x.domain, null, O), d && (w === "number" || g !== "auto") && (C = zr(M, b, "category")));
            var $ = Vv(w);
            if (!T || T.length === 0) {
                var k, D = (k = x.domain) !== null && k !== void 0 ? k : $;
                if (b) {
                    if (T = zr(M, b, w), w === "category" && d) {
                        var L = Hy(T);
                        m && L ? (I = T, T = Yn(0, E)) : m || (T = Tf(D, T, v).reduce(function(W, K) {
                            return W.indexOf(K) >= 0 ? W : [].concat(Ar(W), [K])
                        }, []))
                    } else if (w === "category") m ? T = T.filter(function(W) {
                        return W !== "" && !re(W)
                    }) : T = Tf(D, T, v).reduce(function(W, K) {
                        return W.indexOf(K) >= 0 || K === "" || re(K) ? W : [].concat(Ar(W), [K])
                    }, []);
                    else if (w === "number") {
                        var q = o1(M, i.filter(function(W) {
                            var K, ce, de = o in W.props ? W.props[o] : (K = W.type.defaultProps) === null || K === void 0 ? void 0 : K[o],
                                Ne = "hide" in W.props ? W.props.hide : (ce = W.type.defaultProps) === null || ce === void 0 ? void 0 : ce.hide;
                            return de === _ && (P || !Ne)
                        }), b, a, f);
                        q && (T = q)
                    }
                    d && (w === "number" || g !== "auto") && (C = zr(M, b, "category"))
                } else d ? T = Yn(0, E) : u && u[_] && u[_].hasStack && w === "number" ? T = h === "expand" ? [0, 1] : Zd(u[_].stackGroups, c, l) : T = Xd(M, i.filter(function(W) {
                    var K = o in W.props ? W.props[o] : W.type.defaultProps[o],
                        ce = "hide" in W.props ? W.props.hide : W.type.defaultProps.hide;
                    return K === _ && (P || !ce)
                }), w, f, !0);
                if (w === "number") T = rc(s, T, _, a, S), D && (T = Pu(D, T, O));
                else if (w === "category" && D) {
                    var U = D,
                        G = T.every(function(W) {
                            return U.indexOf(W) >= 0
                        });
                    G && (T = U)
                }
            }
            return j(j({}, y), {}, H({}, _, j(j({}, x), {}, {
                axisType: a,
                domain: T,
                categoricalDomain: C,
                duplicateDomain: I,
                originalDomain: (p = x.domain) !== null && p !== void 0 ? p : $,
                isCategorical: d,
                layout: f
            })))
        }, {})
    },
    gj = function(t, r) {
        var n = r.graphicalItems,
            i = r.Axis,
            a = r.axisType,
            o = r.axisIdKey,
            u = r.stackGroups,
            c = r.dataStartIndex,
            l = r.dataEndIndex,
            f = t.layout,
            s = t.children,
            h = ya(t.data, {
                graphicalItems: n,
                dataStartIndex: c,
                dataEndIndex: l
            }),
            d = h.length,
            y = Vd(f, a),
            v = -1;
        return n.reduce(function(p, x) {
            var w = x.type.defaultProps !== void 0 ? j(j({}, x.type.defaultProps), x.props) : x.props,
                b = w[o],
                O = Vv("number");
            if (!p[b]) {
                v++;
                var m;
                return y ? m = Yn(0, d) : u && u[b] && u[b].hasStack ? (m = Zd(u[b].stackGroups, c, l), m = rc(s, m, b, a)) : (m = Pu(O, Xd(h, n.filter(function(g) {
                    var S, P, _ = o in g.props ? g.props[o] : (S = g.type.defaultProps) === null || S === void 0 ? void 0 : S[o],
                        M = "hide" in g.props ? g.props.hide : (P = g.type.defaultProps) === null || P === void 0 ? void 0 : P.hide;
                    return _ === b && !M
                }), "number", f), i.defaultProps.allowDataOverflow), m = rc(s, m, b, a)), j(j({}, p), {}, H({}, b, j(j({
                    axisType: a
                }, i.defaultProps), {}, {
                    hide: !0,
                    orientation: ze(pj, "".concat(a, ".").concat(v % 2), null),
                    domain: m,
                    originalDomain: O,
                    isCategorical: y,
                    layout: f
                })))
            }
            return p
        }, {})
    },
    bj = function(t, r) {
        var n = r.axisType,
            i = n === void 0 ? "xAxis" : n,
            a = r.AxisComp,
            o = r.graphicalItems,
            u = r.stackGroups,
            c = r.dataStartIndex,
            l = r.dataEndIndex,
            f = t.children,
            s = "".concat(i, "Id"),
            h = Ze(f, a),
            d = {};
        return h && h.length ? d = mj(t, {
            axes: h,
            graphicalItems: o,
            axisType: i,
            axisIdKey: s,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: l
        }) : o && o.length && (d = gj(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: s,
            stackGroups: u,
            dataStartIndex: c,
            dataEndIndex: l
        })), d
    },
    xj = function(t) {
        var r = mt(t),
            n = ut(r, !1, !0);
        return {
            tooltipTicks: n,
            orderedTooltipTicks: vc(n, function(i) {
                return i.coordinate
            }),
            tooltipAxis: r,
            tooltipAxisBandSize: Si(r, n)
        }
    },
    ap = function(t) {
        var r = t.children,
            n = t.defaultShowTooltip,
            i = Re(r, yr),
            a = 0,
            o = 0;
        return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
            chartX: 0,
            chartY: 0,
            dataStartIndex: a,
            dataEndIndex: o,
            activeTooltipIndex: -1,
            isTooltipActive: !!n
        }
    },
    wj = function(t) {
        return !t || !t.length ? !1 : t.some(function(r) {
            var n = ct(r && r.type);
            return n && n.indexOf("Bar") >= 0
        })
    },
    op = function(t) {
        return t === "horizontal" ? {
            numericAxisName: "yAxis",
            cateAxisName: "xAxis"
        } : t === "vertical" ? {
            numericAxisName: "xAxis",
            cateAxisName: "yAxis"
        } : t === "centric" ? {
            numericAxisName: "radiusAxis",
            cateAxisName: "angleAxis"
        } : {
            numericAxisName: "angleAxis",
            cateAxisName: "radiusAxis"
        }
    },
    Oj = function(t, r) {
        var n = t.props,
            i = t.graphicalItems,
            a = t.xAxisMap,
            o = a === void 0 ? {} : a,
            u = t.yAxisMap,
            c = u === void 0 ? {} : u,
            l = n.width,
            f = n.height,
            s = n.children,
            h = n.margin || {},
            d = Re(s, yr),
            y = Re(s, rr),
            v = Object.keys(c).reduce(function(m, g) {
                var S = c[g],
                    P = S.orientation;
                return !S.mirror && !S.hide ? j(j({}, m), {}, H({}, P, m[P] + S.width)) : m
            }, {
                left: h.left || 0,
                right: h.right || 0
            }),
            p = Object.keys(o).reduce(function(m, g) {
                var S = o[g],
                    P = S.orientation;
                return !S.mirror && !S.hide ? j(j({}, m), {}, H({}, P, ze(m, "".concat(P)) + S.height)) : m
            }, {
                top: h.top || 0,
                bottom: h.bottom || 0
            }),
            x = j(j({}, p), v),
            w = x.bottom;
        d && (x.bottom += d.props.height || yr.defaultProps.height), y && r && (x = i1(x, i, n, r));
        var b = l - x.left - x.right,
            O = f - x.top - x.bottom;
        return j(j({
            brushBottom: w
        }, x), {}, {
            width: Math.max(b, 0),
            height: Math.max(O, 0)
        })
    },
    Sj = function(t, r) {
        if (r === "xAxis") return t[r].width;
        if (r === "yAxis") return t[r].height
    },
    Pj = function(t) {
        var r = t.chartName,
            n = t.GraphicalChild,
            i = t.defaultTooltipEventType,
            a = i === void 0 ? "axis" : i,
            o = t.validateTooltipEventTypes,
            u = o === void 0 ? ["axis"] : o,
            c = t.axisComponents,
            l = t.legendContent,
            f = t.formatAxisMap,
            s = t.defaultProps,
            h = function(x, w) {
                var b = w.graphicalItems,
                    O = w.stackGroups,
                    m = w.offset,
                    g = w.updateId,
                    S = w.dataStartIndex,
                    P = w.dataEndIndex,
                    _ = x.barSize,
                    M = x.layout,
                    E = x.barGap,
                    T = x.barCategoryGap,
                    I = x.maxBarSize,
                    C = op(M),
                    $ = C.numericAxisName,
                    k = C.cateAxisName,
                    D = wj(b),
                    L = [];
                return b.forEach(function(q, U) {
                    var G = ya(x.data, {
                            graphicalItems: [q],
                            dataStartIndex: S,
                            dataEndIndex: P
                        }),
                        W = q.type.defaultProps !== void 0 ? j(j({}, q.type.defaultProps), q.props) : q.props,
                        K = W.dataKey,
                        ce = W.maxBarSize,
                        de = W["".concat($, "Id")],
                        Ne = W["".concat(k, "Id")],
                        At = {},
                        Ce = c.reduce(function(_t, Et) {
                            var ma = w["".concat(Et.axisType, "Map")],
                                Jc = W["".concat(Et.axisType, "Id")];
                            ma && ma[Jc] || Et.axisType === "zAxis" || Bt();
                            var Qc = ma[Jc];
                            return j(j({}, _t), {}, H(H({}, Et.axisType, Qc), "".concat(Et.axisType, "Ticks"), ut(Qc)))
                        }, At),
                        F = Ce[k],
                        X = Ce["".concat(k, "Ticks")],
                        V = O && O[de] && O[de].hasStack && g1(q, O[de].stackGroups),
                        N = ct(q.type).indexOf("Bar") >= 0,
                        he = Si(F, X),
                        J = [],
                        me = D && r1({
                            barSize: _,
                            stackGroups: O,
                            totalSize: Sj(Ce, k)
                        });
                    if (N) {
                        var ge, Ie, vt = re(ce) ? I : ce,
                            Kt = (ge = (Ie = Si(F, X, !0)) !== null && Ie !== void 0 ? Ie : vt) !== null && ge !== void 0 ? ge : 0;
                        J = n1({
                            barGap: E,
                            barCategoryGap: T,
                            bandSize: Kt !== he ? Kt : he,
                            sizeList: me[Ne],
                            maxBarSize: vt
                        }), Kt !== he && (J = J.map(function(_t) {
                            return j(j({}, _t), {}, {
                                position: j(j({}, _t.position), {}, {
                                    offset: _t.position.offset - Kt / 2
                                })
                            })
                        }))
                    }
                    var Dn = q && q.type && q.type.getComposedData;
                    Dn && L.push({
                        props: j(j({}, Dn(j(j({}, Ce), {}, {
                            displayedData: G,
                            props: x,
                            dataKey: K,
                            item: q,
                            bandSize: he,
                            barPosition: J,
                            offset: m,
                            stackedData: V,
                            layout: M,
                            dataStartIndex: S,
                            dataEndIndex: P
                        }))), {}, H(H(H({
                            key: q.key || "item-".concat(U)
                        }, $, Ce[$]), k, Ce[k]), "animationId", g)),
                        childIndex: nm(q, x.children),
                        item: q
                    })
                }), L
            },
            d = function(x, w) {
                var b = x.props,
                    O = x.dataStartIndex,
                    m = x.dataEndIndex,
                    g = x.updateId;
                if (!fl({
                        props: b
                    })) return null;
                var S = b.children,
                    P = b.layout,
                    _ = b.stackOffset,
                    M = b.data,
                    E = b.reverseStackOrder,
                    T = op(P),
                    I = T.numericAxisName,
                    C = T.cateAxisName,
                    $ = Ze(S, n),
                    k = v1(M, $, "".concat(I, "Id"), "".concat(C, "Id"), _, E),
                    D = c.reduce(function(W, K) {
                        var ce = "".concat(K.axisType, "Map");
                        return j(j({}, W), {}, H({}, ce, bj(b, j(j({}, K), {}, {
                            graphicalItems: $,
                            stackGroups: K.axisType === I && k,
                            dataStartIndex: O,
                            dataEndIndex: m
                        }))))
                    }, {}),
                    L = Oj(j(j({}, D), {}, {
                        props: b,
                        graphicalItems: $
                    }), w == null ? void 0 : w.legendBBox);
                Object.keys(D).forEach(function(W) {
                    D[W] = f(b, D[W], L, W.replace("Map", ""), r)
                });
                var q = D["".concat(C, "Map")],
                    U = xj(q),
                    G = h(b, j(j({}, D), {}, {
                        dataStartIndex: O,
                        dataEndIndex: m,
                        updateId: g,
                        graphicalItems: $,
                        stackGroups: k,
                        offset: L
                    }));
                return j(j({
                    formattedGraphicalItems: G,
                    graphicalItems: $,
                    offset: L,
                    stackGroups: k
                }, U), D)
            },
            y = function(p) {
                function x(w) {
                    var b, O, m;
                    return rj(this, x), m = aj(this, x, [w]), H(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), H(m, "accessibilityManager", new WT), H(m, "handleLegendBBoxUpdate", function(g) {
                        if (g) {
                            var S = m.state,
                                P = S.dataStartIndex,
                                _ = S.dataEndIndex,
                                M = S.updateId;
                            m.setState(j({
                                legendBBox: g
                            }, d({
                                props: m.props,
                                dataStartIndex: P,
                                dataEndIndex: _,
                                updateId: M
                            }, j(j({}, m.state), {}, {
                                legendBBox: g
                            }))))
                        }
                    }), H(m, "handleReceiveSyncEvent", function(g, S, P) {
                        if (m.props.syncId === g) {
                            if (P === m.eventEmitterSymbol && typeof m.props.syncMethod != "function") return;
                            m.applySyncEvent(S)
                        }
                    }), H(m, "handleBrushChange", function(g) {
                        var S = g.startIndex,
                            P = g.endIndex;
                        if (S !== m.state.dataStartIndex || P !== m.state.dataEndIndex) {
                            var _ = m.state.updateId;
                            m.setState(function() {
                                return j({
                                    dataStartIndex: S,
                                    dataEndIndex: P
                                }, d({
                                    props: m.props,
                                    dataStartIndex: S,
                                    dataEndIndex: P,
                                    updateId: _
                                }, m.state))
                            }), m.triggerSyncEvent({
                                dataStartIndex: S,
                                dataEndIndex: P
                            })
                        }
                    }), H(m, "handleMouseEnter", function(g) {
                        var S = m.getMouseInfo(g);
                        if (S) {
                            var P = j(j({}, S), {}, {
                                isTooltipActive: !0
                            });
                            m.setState(P), m.triggerSyncEvent(P);
                            var _ = m.props.onMouseEnter;
                            Y(_) && _(P, g)
                        }
                    }), H(m, "triggeredAfterMouseMove", function(g) {
                        var S = m.getMouseInfo(g),
                            P = S ? j(j({}, S), {}, {
                                isTooltipActive: !0
                            }) : {
                                isTooltipActive: !1
                            };
                        m.setState(P), m.triggerSyncEvent(P);
                        var _ = m.props.onMouseMove;
                        Y(_) && _(P, g)
                    }), H(m, "handleItemMouseEnter", function(g) {
                        m.setState(function() {
                            return {
                                isTooltipActive: !0,
                                activeItem: g,
                                activePayload: g.tooltipPayload,
                                activeCoordinate: g.tooltipPosition || {
                                    x: g.cx,
                                    y: g.cy
                                }
                            }
                        })
                    }), H(m, "handleItemMouseLeave", function() {
                        m.setState(function() {
                            return {
                                isTooltipActive: !1
                            }
                        })
                    }), H(m, "handleMouseMove", function(g) {
                        g.persist(), m.throttleTriggeredAfterMouseMove(g)
                    }), H(m, "handleMouseLeave", function(g) {
                        m.throttleTriggeredAfterMouseMove.cancel();
                        var S = {
                            isTooltipActive: !1
                        };
                        m.setState(S), m.triggerSyncEvent(S);
                        var P = m.props.onMouseLeave;
                        Y(P) && P(S, g)
                    }), H(m, "handleOuterEvent", function(g) {
                        var S = rm(g),
                            P = ze(m.props, "".concat(S));
                        if (S && Y(P)) {
                            var _, M;
                            /.*touch.*/i.test(S) ? M = m.getMouseInfo(g.changedTouches[0]) : M = m.getMouseInfo(g), P((_ = M) !== null && _ !== void 0 ? _ : {}, g)
                        }
                    }), H(m, "handleClick", function(g) {
                        var S = m.getMouseInfo(g);
                        if (S) {
                            var P = j(j({}, S), {}, {
                                isTooltipActive: !0
                            });
                            m.setState(P), m.triggerSyncEvent(P);
                            var _ = m.props.onClick;
                            Y(_) && _(P, g)
                        }
                    }), H(m, "handleMouseDown", function(g) {
                        var S = m.props.onMouseDown;
                        if (Y(S)) {
                            var P = m.getMouseInfo(g);
                            S(P, g)
                        }
                    }), H(m, "handleMouseUp", function(g) {
                        var S = m.props.onMouseUp;
                        if (Y(S)) {
                            var P = m.getMouseInfo(g);
                            S(P, g)
                        }
                    }), H(m, "handleTouchMove", function(g) {
                        g.changedTouches != null && g.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(g.changedTouches[0])
                    }), H(m, "handleTouchStart", function(g) {
                        g.changedTouches != null && g.changedTouches.length > 0 && m.handleMouseDown(g.changedTouches[0])
                    }), H(m, "handleTouchEnd", function(g) {
                        g.changedTouches != null && g.changedTouches.length > 0 && m.handleMouseUp(g.changedTouches[0])
                    }), H(m, "handleDoubleClick", function(g) {
                        var S = m.props.onDoubleClick;
                        if (Y(S)) {
                            var P = m.getMouseInfo(g);
                            S(P, g)
                        }
                    }), H(m, "handleContextMenu", function(g) {
                        var S = m.props.onContextMenu;
                        if (Y(S)) {
                            var P = m.getMouseInfo(g);
                            S(P, g)
                        }
                    }), H(m, "triggerSyncEvent", function(g) {
                        m.props.syncId !== void 0 && Ro.emit(Bo, m.props.syncId, g, m.eventEmitterSymbol)
                    }), H(m, "applySyncEvent", function(g) {
                        var S = m.props,
                            P = S.layout,
                            _ = S.syncMethod,
                            M = m.state.updateId,
                            E = g.dataStartIndex,
                            T = g.dataEndIndex;
                        if (g.dataStartIndex !== void 0 || g.dataEndIndex !== void 0) m.setState(j({
                            dataStartIndex: E,
                            dataEndIndex: T
                        }, d({
                            props: m.props,
                            dataStartIndex: E,
                            dataEndIndex: T,
                            updateId: M
                        }, m.state)));
                        else if (g.activeTooltipIndex !== void 0) {
                            var I = g.chartX,
                                C = g.chartY,
                                $ = g.activeTooltipIndex,
                                k = m.state,
                                D = k.offset,
                                L = k.tooltipTicks;
                            if (!D) return;
                            if (typeof _ == "function") $ = _(L, g);
                            else if (_ === "value") {
                                $ = -1;
                                for (var q = 0; q < L.length; q++)
                                    if (L[q].value === g.activeLabel) {
                                        $ = q;
                                        break
                                    }
                            }
                            var U = j(j({}, D), {}, {
                                    x: D.left,
                                    y: D.top
                                }),
                                G = Math.min(I, U.x + U.width),
                                W = Math.min(C, U.y + U.height),
                                K = L[$] && L[$].value,
                                ce = ac(m.state, m.props.data, $),
                                de = L[$] ? {
                                    x: P === "horizontal" ? L[$].coordinate : G,
                                    y: P === "horizontal" ? W : L[$].coordinate
                                } : Xv;
                            m.setState(j(j({}, g), {}, {
                                activeLabel: K,
                                activeCoordinate: de,
                                activePayload: ce,
                                activeTooltipIndex: $
                            }))
                        } else m.setState(g)
                    }), H(m, "renderCursor", function(g) {
                        var S, P = m.state,
                            _ = P.isTooltipActive,
                            M = P.activeCoordinate,
                            E = P.activePayload,
                            T = P.offset,
                            I = P.activeTooltipIndex,
                            C = P.tooltipAxisBandSize,
                            $ = m.getTooltipEventType(),
                            k = (S = g.props.active) !== null && S !== void 0 ? S : _,
                            D = m.props.layout,
                            L = g.key || "_recharts-cursor";
                        return A.createElement(VT, {
                            key: L,
                            activeCoordinate: M,
                            activePayload: E,
                            activeTooltipIndex: I,
                            chartName: r,
                            element: g,
                            isActive: k,
                            layout: D,
                            offset: T,
                            tooltipAxisBandSize: C,
                            tooltipEventType: $
                        })
                    }), H(m, "renderPolarAxis", function(g, S, P) {
                        var _ = ze(g, "type.axisType"),
                            M = ze(m.state, "".concat(_, "Map")),
                            E = g.type.defaultProps,
                            T = E !== void 0 ? j(j({}, E), g.props) : g.props,
                            I = M && M[T["".concat(_, "Id")]];
                        return R.cloneElement(g, j(j({}, I), {}, {
                            className: te(_, I.className),
                            key: g.key || "".concat(S, "-").concat(P),
                            ticks: ut(I, !0)
                        }))
                    }), H(m, "renderPolarGrid", function(g) {
                        var S = g.props,
                            P = S.radialLines,
                            _ = S.polarAngles,
                            M = S.polarRadius,
                            E = m.state,
                            T = E.radiusAxisMap,
                            I = E.angleAxisMap,
                            C = mt(T),
                            $ = mt(I),
                            k = $.cx,
                            D = $.cy,
                            L = $.innerRadius,
                            q = $.outerRadius;
                        return R.cloneElement(g, {
                            polarAngles: Array.isArray(_) ? _ : ut($, !0).map(function(U) {
                                return U.coordinate
                            }),
                            polarRadius: Array.isArray(M) ? M : ut(C, !0).map(function(U) {
                                return U.coordinate
                            }),
                            cx: k,
                            cy: D,
                            innerRadius: L,
                            outerRadius: q,
                            key: g.key || "polar-grid",
                            radialLines: P
                        })
                    }), H(m, "renderLegend", function() {
                        var g = m.state.formattedGraphicalItems,
                            S = m.props,
                            P = S.children,
                            _ = S.width,
                            M = S.height,
                            E = m.props.margin || {},
                            T = _ - (E.left || 0) - (E.right || 0),
                            I = Gd({
                                children: P,
                                formattedGraphicalItems: g,
                                legendWidth: T,
                                legendContent: l
                            });
                        if (!I) return null;
                        var C = I.item,
                            $ = rp(I, YT);
                        return R.cloneElement(C, j(j({}, $), {}, {
                            chartWidth: _,
                            chartHeight: M,
                            margin: E,
                            onBBoxUpdate: m.handleLegendBBoxUpdate
                        }))
                    }), H(m, "renderTooltip", function() {
                        var g, S = m.props,
                            P = S.children,
                            _ = S.accessibilityLayer,
                            M = Re(P, Ke);
                        if (!M) return null;
                        var E = m.state,
                            T = E.isTooltipActive,
                            I = E.activeCoordinate,
                            C = E.activePayload,
                            $ = E.activeLabel,
                            k = E.offset,
                            D = (g = M.props.active) !== null && g !== void 0 ? g : T;
                        return R.cloneElement(M, {
                            viewBox: j(j({}, k), {}, {
                                x: k.left,
                                y: k.top
                            }),
                            active: D,
                            label: $,
                            payload: D ? C : [],
                            coordinate: I,
                            accessibilityLayer: _
                        })
                    }), H(m, "renderBrush", function(g) {
                        var S = m.props,
                            P = S.margin,
                            _ = S.data,
                            M = m.state,
                            E = M.offset,
                            T = M.dataStartIndex,
                            I = M.dataEndIndex,
                            C = M.updateId;
                        return R.cloneElement(g, {
                            key: g.key || "_recharts-brush",
                            onChange: Un(m.handleBrushChange, g.props.onChange),
                            data: _,
                            x: B(g.props.x) ? g.props.x : E.left,
                            y: B(g.props.y) ? g.props.y : E.top + E.height + E.brushBottom - (P.bottom || 0),
                            width: B(g.props.width) ? g.props.width : E.width,
                            startIndex: T,
                            endIndex: I,
                            updateId: "brush-".concat(C)
                        })
                    }), H(m, "renderReferenceElement", function(g, S, P) {
                        if (!g) return null;
                        var _ = m,
                            M = _.clipPathId,
                            E = m.state,
                            T = E.xAxisMap,
                            I = E.yAxisMap,
                            C = E.offset,
                            $ = g.type.defaultProps || {},
                            k = g.props,
                            D = k.xAxisId,
                            L = D === void 0 ? $.xAxisId : D,
                            q = k.yAxisId,
                            U = q === void 0 ? $.yAxisId : q;
                        return R.cloneElement(g, {
                            key: g.key || "".concat(S, "-").concat(P),
                            xAxis: T[L],
                            yAxis: I[U],
                            viewBox: {
                                x: C.left,
                                y: C.top,
                                width: C.width,
                                height: C.height
                            },
                            clipPathId: M
                        })
                    }), H(m, "renderActivePoints", function(g) {
                        var S = g.item,
                            P = g.activePoint,
                            _ = g.basePoint,
                            M = g.childIndex,
                            E = g.isRange,
                            T = [],
                            I = S.props.key,
                            C = S.item.type.defaultProps !== void 0 ? j(j({}, S.item.type.defaultProps), S.item.props) : S.item.props,
                            $ = C.activeDot,
                            k = C.dataKey,
                            D = j(j({
                                index: M,
                                dataKey: k,
                                cx: P.x,
                                cy: P.y,
                                r: 4,
                                fill: Fc(S.item),
                                strokeWidth: 2,
                                stroke: "#fff",
                                payload: P.payload,
                                value: P.value
                            }, ee($, !1)), Zn($));
                        return T.push(x.renderActiveDot($, D, "".concat(I, "-activePoint-").concat(M))), _ ? T.push(x.renderActiveDot($, j(j({}, D), {}, {
                            cx: _.x,
                            cy: _.y
                        }), "".concat(I, "-basePoint-").concat(M))) : E && T.push(null), T
                    }), H(m, "renderGraphicChild", function(g, S, P) {
                        var _ = m.filterFormatItem(g, S, P);
                        if (!_) return null;
                        var M = m.getTooltipEventType(),
                            E = m.state,
                            T = E.isTooltipActive,
                            I = E.tooltipAxis,
                            C = E.activeTooltipIndex,
                            $ = E.activeLabel,
                            k = m.props.children,
                            D = Re(k, Ke),
                            L = _.props,
                            q = L.points,
                            U = L.isRange,
                            G = L.baseLine,
                            W = _.item.type.defaultProps !== void 0 ? j(j({}, _.item.type.defaultProps), _.item.props) : _.item.props,
                            K = W.activeDot,
                            ce = W.hide,
                            de = W.activeBar,
                            Ne = W.activeShape,
                            At = !!(!ce && T && D && (K || de || Ne)),
                            Ce = {};
                        M !== "axis" && D && D.props.trigger === "click" ? Ce = {
                            onClick: Un(m.handleItemMouseEnter, g.props.onClick)
                        } : M !== "axis" && (Ce = {
                            onMouseLeave: Un(m.handleItemMouseLeave, g.props.onMouseLeave),
                            onMouseEnter: Un(m.handleItemMouseEnter, g.props.onMouseEnter)
                        });
                        var F = R.cloneElement(g, j(j({}, _.props), Ce));

                        function X(Et) {
                            return typeof I.dataKey == "function" ? I.dataKey(Et.payload) : null
                        }
                        if (At)
                            if (C >= 0) {
                                var V, N;
                                if (I.dataKey && !I.allowDuplicatedCategory) {
                                    var he = typeof I.dataKey == "function" ? X : "payload.".concat(I.dataKey.toString());
                                    V = Uo(q, he, $), N = U && G && Uo(G, he, $)
                                } else V = q == null ? void 0 : q[C], N = U && G && G[C];
                                if (Ne || de) {
                                    var J = g.props.activeIndex !== void 0 ? g.props.activeIndex : C;
                                    return [R.cloneElement(g, j(j(j({}, _.props), Ce), {}, {
                                        activeIndex: J
                                    })), null, null]
                                }
                                if (!re(V)) return [F].concat(Ar(m.renderActivePoints({
                                    item: _,
                                    activePoint: V,
                                    basePoint: N,
                                    childIndex: C,
                                    isRange: U
                                })))
                            } else {
                                var me, ge = (me = m.getItemByXY(m.state.activeCoordinate)) !== null && me !== void 0 ? me : {
                                        graphicalItem: F
                                    },
                                    Ie = ge.graphicalItem,
                                    vt = Ie.item,
                                    Kt = vt === void 0 ? g : vt,
                                    Dn = Ie.childIndex,
                                    _t = j(j(j({}, _.props), Ce), {}, {
                                        activeIndex: Dn
                                    });
                                return [R.cloneElement(Kt, _t), null, null]
                            } return U ? [F, null, null] : [F, null]
                    }), H(m, "renderCustomized", function(g, S, P) {
                        return R.cloneElement(g, j(j({
                            key: "recharts-customized-".concat(P)
                        }, m.props), m.state))
                    }), H(m, "renderMap", {
                        CartesianGrid: {
                            handler: Vn,
                            once: !0
                        },
                        ReferenceArea: {
                            handler: m.renderReferenceElement
                        },
                        ReferenceLine: {
                            handler: Vn
                        },
                        ReferenceDot: {
                            handler: m.renderReferenceElement
                        },
                        XAxis: {
                            handler: Vn
                        },
                        YAxis: {
                            handler: Vn
                        },
                        Brush: {
                            handler: m.renderBrush,
                            once: !0
                        },
                        Bar: {
                            handler: m.renderGraphicChild
                        },
                        Line: {
                            handler: m.renderGraphicChild
                        },
                        Area: {
                            handler: m.renderGraphicChild
                        },
                        Radar: {
                            handler: m.renderGraphicChild
                        },
                        RadialBar: {
                            handler: m.renderGraphicChild
                        },
                        Scatter: {
                            handler: m.renderGraphicChild
                        },
                        Pie: {
                            handler: m.renderGraphicChild
                        },
                        Funnel: {
                            handler: m.renderGraphicChild
                        },
                        Tooltip: {
                            handler: m.renderCursor,
                            once: !0
                        },
                        PolarGrid: {
                            handler: m.renderPolarGrid,
                            once: !0
                        },
                        PolarAngleAxis: {
                            handler: m.renderPolarAxis
                        },
                        PolarRadiusAxis: {
                            handler: m.renderPolarAxis
                        },
                        Customized: {
                            handler: m.renderCustomized
                        }
                    }), m.clipPathId = "".concat((b = w.id) !== null && b !== void 0 ? b : Gi("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = Hp(m.triggeredAfterMouseMove, (O = w.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m
                }
                return cj(x, p), ij(x, [{
                    key: "componentDidMount",
                    value: function() {
                        var b, O;
                        this.addListener(), this.accessibilityManager.setDetails({
                            container: this.container,
                            offset: {
                                left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0,
                                top: (O = this.props.margin.top) !== null && O !== void 0 ? O : 0
                            },
                            coordinateList: this.state.tooltipTicks,
                            mouseHandlerCallback: this.triggeredAfterMouseMove,
                            layout: this.props.layout
                        }), this.displayDefaultTooltip()
                    }
                }, {
                    key: "displayDefaultTooltip",
                    value: function() {
                        var b = this.props,
                            O = b.children,
                            m = b.data,
                            g = b.height,
                            S = b.layout,
                            P = Re(O, Ke);
                        if (P) {
                            var _ = P.props.defaultIndex;
                            if (!(typeof _ != "number" || _ < 0 || _ > this.state.tooltipTicks.length - 1)) {
                                var M = this.state.tooltipTicks[_] && this.state.tooltipTicks[_].value,
                                    E = ac(this.state, m, _, M),
                                    T = this.state.tooltipTicks[_].coordinate,
                                    I = (this.state.offset.top + g) / 2,
                                    C = S === "horizontal",
                                    $ = C ? {
                                        x: T,
                                        y: I
                                    } : {
                                        y: T,
                                        x: I
                                    },
                                    k = this.state.formattedGraphicalItems.find(function(L) {
                                        var q = L.item;
                                        return q.type.name === "Scatter"
                                    });
                                k && ($ = j(j({}, $), k.props.points[_].tooltipPosition), E = k.props.points[_].tooltipPayload);
                                var D = {
                                    activeTooltipIndex: _,
                                    isTooltipActive: !0,
                                    activeLabel: M,
                                    activePayload: E,
                                    activeCoordinate: $
                                };
                                this.setState(D), this.renderCursor(P), this.accessibilityManager.setIndex(_)
                            }
                        }
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function(b, O) {
                        if (!this.props.accessibilityLayer) return null;
                        if (this.state.tooltipTicks !== O.tooltipTicks && this.accessibilityManager.setDetails({
                                coordinateList: this.state.tooltipTicks
                            }), this.props.layout !== b.layout && this.accessibilityManager.setDetails({
                                layout: this.props.layout
                            }), this.props.margin !== b.margin) {
                            var m, g;
                            this.accessibilityManager.setDetails({
                                offset: {
                                    left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
                                    top: (g = this.props.margin.top) !== null && g !== void 0 ? g : 0
                                }
                            })
                        }
                        return null
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(b) {
                        Go([Re(b.children, Ke)], [Re(this.props.children, Ke)]) || this.displayDefaultTooltip()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
                    }
                }, {
                    key: "getTooltipEventType",
                    value: function() {
                        var b = Re(this.props.children, Ke);
                        if (b && typeof b.props.shared == "boolean") {
                            var O = b.props.shared ? "axis" : "item";
                            return u.indexOf(O) >= 0 ? O : a
                        }
                        return a
                    }
                }, {
                    key: "getMouseInfo",
                    value: function(b) {
                        if (!this.container) return null;
                        var O = this.container,
                            m = O.getBoundingClientRect(),
                            g = Vb(m),
                            S = {
                                chartX: Math.round(b.pageX - g.left),
                                chartY: Math.round(b.pageY - g.top)
                            },
                            P = m.width / O.offsetWidth || 1,
                            _ = this.inRange(S.chartX, S.chartY, P);
                        if (!_) return null;
                        var M = this.state,
                            E = M.xAxisMap,
                            T = M.yAxisMap,
                            I = this.getTooltipEventType(),
                            C = ip(this.state, this.props.data, this.props.layout, _);
                        if (I !== "axis" && E && T) {
                            var $ = mt(E).scale,
                                k = mt(T).scale,
                                D = $ && $.invert ? $.invert(S.chartX) : null,
                                L = k && k.invert ? k.invert(S.chartY) : null;
                            return j(j({}, S), {}, {
                                xValue: D,
                                yValue: L
                            }, C)
                        }
                        return C ? j(j({}, S), C) : null
                    }
                }, {
                    key: "inRange",
                    value: function(b, O) {
                        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                            g = this.props.layout,
                            S = b / m,
                            P = O / m;
                        if (g === "horizontal" || g === "vertical") {
                            var _ = this.state.offset,
                                M = S >= _.left && S <= _.left + _.width && P >= _.top && P <= _.top + _.height;
                            return M ? {
                                x: S,
                                y: P
                            } : null
                        }
                        var E = this.state,
                            T = E.angleAxisMap,
                            I = E.radiusAxisMap;
                        if (T && I) {
                            var C = mt(T);
                            return $f({
                                x: S,
                                y: P
                            }, C)
                        }
                        return null
                    }
                }, {
                    key: "parseEventsOfWrapper",
                    value: function() {
                        var b = this.props.children,
                            O = this.getTooltipEventType(),
                            m = Re(b, Ke),
                            g = {};
                        m && O === "axis" && (m.props.trigger === "click" ? g = {
                            onClick: this.handleClick
                        } : g = {
                            onMouseEnter: this.handleMouseEnter,
                            onDoubleClick: this.handleDoubleClick,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd,
                            onContextMenu: this.handleContextMenu
                        });
                        var S = Zn(this.props, this.handleOuterEvent);
                        return j(j({}, S), g)
                    }
                }, {
                    key: "addListener",
                    value: function() {
                        Ro.on(Bo, this.handleReceiveSyncEvent)
                    }
                }, {
                    key: "removeListener",
                    value: function() {
                        Ro.removeListener(Bo, this.handleReceiveSyncEvent)
                    }
                }, {
                    key: "filterFormatItem",
                    value: function(b, O, m) {
                        for (var g = this.state.formattedGraphicalItems, S = 0, P = g.length; S < P; S++) {
                            var _ = g[S];
                            if (_.item === b || _.props.key === b.key || O === ct(_.item.type) && m === _.childIndex) return _
                        }
                        return null
                    }
                }, {
                    key: "renderClipPath",
                    value: function() {
                        var b = this.clipPathId,
                            O = this.state.offset,
                            m = O.left,
                            g = O.top,
                            S = O.height,
                            P = O.width;
                        return A.createElement("defs", null, A.createElement("clipPath", {
                            id: b
                        }, A.createElement("rect", {
                            x: m,
                            y: g,
                            height: S,
                            width: P
                        })))
                    }
                }, {
                    key: "getXScales",
                    value: function() {
                        var b = this.state.xAxisMap;
                        return b ? Object.entries(b).reduce(function(O, m) {
                            var g = tp(m, 2),
                                S = g[0],
                                P = g[1];
                            return j(j({}, O), {}, H({}, S, P.scale))
                        }, {}) : null
                    }
                }, {
                    key: "getYScales",
                    value: function() {
                        var b = this.state.yAxisMap;
                        return b ? Object.entries(b).reduce(function(O, m) {
                            var g = tp(m, 2),
                                S = g[0],
                                P = g[1];
                            return j(j({}, O), {}, H({}, S, P.scale))
                        }, {}) : null
                    }
                }, {
                    key: "getXScaleByAxisId",
                    value: function(b) {
                        var O;
                        return (O = this.state.xAxisMap) === null || O === void 0 || (O = O[b]) === null || O === void 0 ? void 0 : O.scale
                    }
                }, {
                    key: "getYScaleByAxisId",
                    value: function(b) {
                        var O;
                        return (O = this.state.yAxisMap) === null || O === void 0 || (O = O[b]) === null || O === void 0 ? void 0 : O.scale
                    }
                }, {
                    key: "getItemByXY",
                    value: function(b) {
                        var O = this.state,
                            m = O.formattedGraphicalItems,
                            g = O.activeItem;
                        if (m && m.length)
                            for (var S = 0, P = m.length; S < P; S++) {
                                var _ = m[S],
                                    M = _.props,
                                    E = _.item,
                                    T = E.type.defaultProps !== void 0 ? j(j({}, E.type.defaultProps), E.props) : E.props,
                                    I = ct(E.type);
                                if (I === "Bar") {
                                    var C = (M.data || []).find(function(L) {
                                        return iA(b, L)
                                    });
                                    if (C) return {
                                        graphicalItem: _,
                                        payload: C
                                    }
                                } else if (I === "RadialBar") {
                                    var $ = (M.data || []).find(function(L) {
                                        return $f(b, L)
                                    });
                                    if ($) return {
                                        graphicalItem: _,
                                        payload: $
                                    }
                                } else if (la(_, g) || sa(_, g) || xn(_, g)) {
                                    var k = GA({
                                            graphicalItem: _,
                                            activeTooltipItem: g,
                                            itemData: T.data
                                        }),
                                        D = T.activeIndex === void 0 ? k : T.activeIndex;
                                    return {
                                        graphicalItem: j(j({}, _), {}, {
                                            childIndex: D
                                        }),
                                        payload: xn(_, g) ? T.data[k] : _.props.data[k]
                                    }
                                }
                            }
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var b = this;
                        if (!fl(this)) return null;
                        var O = this.props,
                            m = O.children,
                            g = O.className,
                            S = O.width,
                            P = O.height,
                            _ = O.style,
                            M = O.compact,
                            E = O.title,
                            T = O.desc,
                            I = rp(O, ZT),
                            C = ee(I, !1);
                        if (M) return A.createElement(Lh, {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, A.createElement(Xo, er({}, C, {
                            width: S,
                            height: P,
                            title: E,
                            desc: T
                        }), this.renderClipPath(), pl(m, this.renderMap)));
                        if (this.props.accessibilityLayer) {
                            var $, k;
                            C.tabIndex = ($ = this.props.tabIndex) !== null && $ !== void 0 ? $ : 0, C.role = (k = this.props.role) !== null && k !== void 0 ? k : "application", C.onKeyDown = function(L) {
                                b.accessibilityManager.keyboardEvent(L)
                            }, C.onFocus = function() {
                                b.accessibilityManager.focus()
                            }
                        }
                        var D = this.parseEventsOfWrapper();
                        return A.createElement(Lh, {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId
                        }, A.createElement("div", er({
                            className: te("recharts-wrapper", g),
                            style: j({
                                position: "relative",
                                cursor: "default",
                                width: S,
                                height: P
                            }, _)
                        }, D, {
                            ref: function(q) {
                                b.container = q
                            }
                        }), A.createElement(Xo, er({}, C, {
                            width: S,
                            height: P,
                            title: E,
                            desc: T,
                            style: dj
                        }), this.renderClipPath(), pl(m, this.renderMap)), this.renderLegend(), this.renderTooltip()))
                    }
                }])
            }(R.Component);
        H(y, "displayName", r), H(y, "defaultProps", j({
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
            reverseStackOrder: !1,
            syncMethod: "index"
        }, s)), H(y, "getDerivedStateFromProps", function(p, x) {
            var w = p.dataKey,
                b = p.data,
                O = p.children,
                m = p.width,
                g = p.height,
                S = p.layout,
                P = p.stackOffset,
                _ = p.margin,
                M = x.dataStartIndex,
                E = x.dataEndIndex;
            if (x.updateId === void 0) {
                var T = ap(p);
                return j(j(j({}, T), {}, {
                    updateId: 0
                }, d(j(j({
                    props: p
                }, T), {}, {
                    updateId: 0
                }), x)), {}, {
                    prevDataKey: w,
                    prevData: b,
                    prevWidth: m,
                    prevHeight: g,
                    prevLayout: S,
                    prevStackOffset: P,
                    prevMargin: _,
                    prevChildren: O
                })
            }
            if (w !== x.prevDataKey || b !== x.prevData || m !== x.prevWidth || g !== x.prevHeight || S !== x.prevLayout || P !== x.prevStackOffset || !tr(_, x.prevMargin)) {
                var I = ap(p),
                    C = {
                        chartX: x.chartX,
                        chartY: x.chartY,
                        isTooltipActive: x.isTooltipActive
                    },
                    $ = j(j({}, ip(x, b, S)), {}, {
                        updateId: x.updateId + 1
                    }),
                    k = j(j(j({}, I), C), $);
                return j(j(j({}, k), d(j({
                    props: p
                }, k), x)), {}, {
                    prevDataKey: w,
                    prevData: b,
                    prevWidth: m,
                    prevHeight: g,
                    prevLayout: S,
                    prevStackOffset: P,
                    prevMargin: _,
                    prevChildren: O
                })
            }
            if (!Go(O, x.prevChildren)) {
                var D, L, q, U, G = Re(O, yr),
                    W = G && (D = (L = G.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && D !== void 0 ? D : M,
                    K = G && (q = (U = G.props) === null || U === void 0 ? void 0 : U.endIndex) !== null && q !== void 0 ? q : E,
                    ce = W !== M || K !== E,
                    de = !re(b),
                    Ne = de && !ce ? x.updateId : x.updateId + 1;
                return j(j({
                    updateId: Ne
                }, d(j(j({
                    props: p
                }, x), {}, {
                    updateId: Ne,
                    dataStartIndex: W,
                    dataEndIndex: K
                }), x)), {}, {
                    prevChildren: O,
                    dataStartIndex: W,
                    dataEndIndex: K
                })
            }
            return null
        }), H(y, "renderActiveDot", function(p, x, w) {
            var b;
            return R.isValidElement(p) ? b = R.cloneElement(p, x) : Y(p) ? b = p(x) : b = A.createElement(lv, x), A.createElement(Pe, {
                className: "recharts-active-dot",
                key: w
            }, b)
        });
        var v = R.forwardRef(function(x, w) {
            return A.createElement(y, er({}, x, {
                ref: w
            }))
        });
        return v.displayName = y.displayName, v
    },
    up = Pj({
        chartName: "BarChart",
        GraphicalChild: wt,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: An
        }, {
            axisType: "yAxis",
            AxisComp: _n
        }],
        formatAxisMap: R_
    });
const Aj = ["bulk-analytics"],
    _j = e => ty({
        queryKey: [Aj, e],
        queryFn: () => Yv({
            url: "/api/bulk/usage/" + e
        }),
        retry: 0
    }),
    vM = e => {
        const {
            bulkId: t
        } = e, {
            data: r,
            isLoading: n
        } = _j(t);
        if (n) return Z.jsx(qo, {
            children: Z.jsx(Zv, {
                paragraph: {
                    rows: 14
                }
            })
        });
        const i = r == null ? void 0 : r.monthlyInfo;
        if (!i || !i.length) {
            const a = Math.abs(el().diff(el(Jv(t)), "months")) < 2;
            return Z.jsx(qo, {
                children: Z.jsxs("div", {
                    className: "maxWidth flex-center flex-column",
                    style: {
                        minHeight: 400
                    },
                    children: [Z.jsx("div", {
                        style: {
                            fontSize: 54,
                            opacity: .8
                        },
                        children: Z.jsx(ry, {})
                    }), Z.jsx("div", {
                        style: {
                            fontSize: 19,
                            marginTop: 8,
                            textAlign: "center"
                        },
                        children: a ? "No usage data is available for this group license yet. Check back soon!" : "No usage data is available for this group license."
                    })]
                })
            })
        }
        return Z.jsxs(qo, {
            children: [Z.jsx(Fo, {
                children: "Group Usage"
            }), Z.jsx(Wo, {
                children: "The percentage of members have hosted a live game since the group license was activated"
            }), Z.jsx("div", {
                style: {
                    height: 15
                }
            }), Z.jsx(ny, {
                type: "circle",
                width: 200,
                percent: Math.ceil(r.percentageUsage * 100),
                format: () => Math.ceil(r.percentageUsage * 100) + "%",
                strokeColor: "#66bb6a"
            }), Z.jsx("div", {
                style: {
                    height: 30
                }
            }), Z.jsx(Fo, {
                children: "Monthly Usage"
            }), Z.jsx(Wo, {
                children: "Percentage of members who hosted a live game in a given month."
            }), Z.jsx("div", {
                style: {
                    height: 15
                }
            }), Z.jsx(cp, {
                children: Z.jsx(ps, {
                    height: 270,
                    children: Z.jsxs(up, {
                        margin: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        data: i.map(a => ({
                            name: a.monthName,
                            Percentage: Math.ceil(a.percentageOfMembersWhoHosted * 100)
                        })),
                        children: [Z.jsx(Yu, {
                            strokeDasharray: "3 3"
                        }), Z.jsx(An, {
                            dataKey: "name"
                        }), Z.jsx(_n, {
                            tickFormatter: a => a + "%"
                        }), Z.jsx(Ke, {
                            formatter: a => tl(a) + "%"
                        }), Z.jsx(wt, {
                            dataKey: "Percentage",
                            fill: zo.BackgroundPurple
                        })]
                    })
                })
            }), Z.jsx("div", {
                style: {
                    height: 30
                }
            }), Z.jsx(Fo, {
                children: "Monthly Usage Frequency"
            }), Z.jsx(Wo, {
                children: "Average live games hosted per active member each month"
            }), Z.jsx("div", {
                style: {
                    height: 15
                }
            }), Z.jsx(cp, {
                children: Z.jsx(ps, {
                    height: 270,
                    children: Z.jsxs(up, {
                        margin: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        },
                        data: i.map(a => ({
                            name: a.monthName,
                            "Average Live Games Hosted": Math.round(a.averageGamesHosted)
                        })),
                        children: [Z.jsx(Yu, {
                            strokeDasharray: "3 3"
                        }), Z.jsx(An, {
                            dataKey: "name"
                        }), Z.jsx(_n, {}), Z.jsx(Ke, {
                            formatter: a => tl(a)
                        }), Z.jsx(wt, {
                            dataKey: "Average Live Games Hosted",
                            fill: zo.BackgroundPurple
                        })]
                    })
                })
            })]
        })
    },
    qo = Ui.div.attrs({
        className: "maxWidth"
    })`
  color: ${zo.Black};
  font-family: ${Qv.SFPro};
  padding-top: 8px;
`,
    Fo = Ui.div`
  font-size: 25px;
  font-weight: ${ey.UltraBold};
`,
    Wo = Ui.div`
  font-size: 17px;
`,
    cp = Ui.div.attrs({
        className: "maxWidth"
    })`
  padding: 25px;
  background: rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding-bottom: 8px;
`;
export {
    vM as
    default
};