import {
    aw as at,
    r as m,
    j as d,
    M as st,
    B as Ye,
    b$ as ct,
    x as je,
    d as Q,
    F as Ve,
    u as lt,
    D as pt,
    X as dt
} from "./_index.js";
import {
    U as Ke
} from "./index-19.js";
import {
    S as fe
} from "./index-28.js";
import {
    C as ue
} from "./Button.js";
import {
    S as ze
} from "./index-2.js";
import {
    s as Me
} from "./index-4.js";
import {
    C as ut
} from "./Names.js";
import {
    A as Te
} from "./AccessibleAnchor.js";
import {
    S as ht
} from "./SeasonTicketName.js";
import {
    O as mt
} from "./OwnsSeasonTicket.js";
import {
    S as ft,
    J as gt
} from "./App-41.js";
import {
    A as vt
} from "./TrackEvent.js";
import {
    F as U
} from "./index-16.js";
import {
    I as Ie
} from "./index-3.js";
import {
    S as ge
} from "./index-8.js";
import {
    C as Ne
} from "./index-11.js";
import {
    R as xt
} from "./StarOutlined.js";
import {
    T as Re
} from "./index-14.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./PaperClipOutlined.js";
import "./useForceUpdate.js";
import "./DeleteOutlined.js";
import "./DownloadOutlined.js";
import "./progress.js";
import "./CheckOutlined.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./context.js";
import "./FixSpinePlugin.js";
import "./GetAssetPath.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./howler.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-18.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./motion.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./ElementIds.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
import "./TrackPostHogEvent.js";
import "./useForm.js";
import "./useBreakpoint.js";
import "./QuestionCircleOutlined.js";
import "./DownOutlined.js";
import "./useBubbleLock.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./CopyOutlined.js";
var _e = function(n, r) {
    return _e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t
    } || function(e, t) {
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }, _e(n, r)
};

function wt(n, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    _e(n, r);

    function e() {
        this.constructor = n
    }
    n.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e)
}
var S = function() {
    return S = Object.assign || function(r) {
        for (var e, t = 1, o = arguments.length; t < o; t++) {
            e = arguments[t];
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
        }
        return r
    }, S.apply(this, arguments)
};

function yt(n, r) {
    var e = {};
    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && r.indexOf(t) < 0 && (e[t] = n[t]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, t = Object.getOwnPropertySymbols(n); o < t.length; o++) r.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[o]) && (e[t[o]] = n[t[o]]);
    return e
}

function ce(n, r, e, t) {
    function o(i) {
        return i instanceof e ? i : new e(function(a) {
            a(i)
        })
    }
    return new(e || (e = Promise))(function(i, a) {
        function s(l) {
            try {
                c(t.next(l))
            } catch (u) {
                a(u)
            }
        }

        function p(l) {
            try {
                c(t.throw(l))
            } catch (u) {
                a(u)
            }
        }

        function c(l) {
            l.done ? i(l.value) : o(l.value).then(s, p)
        }
        c((t = t.apply(n, r || [])).next())
    })
}
var ve, Oe;

function Ct() {
    if (Oe) return ve;
    Oe = 1;
    var n = !1,
        r, e, t, o, i, a, s, p, c, l, u, h, f, y, C;

    function v() {
        if (!n) {
            n = !0;
            var x = navigator.userAgent,
                g = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(x),
                P = /(Mac OS X)|(Windows)|(Linux)/.exec(x);
            if (h = /\b(iPhone|iP[ao]d)/.exec(x), f = /\b(iP[ao]d)/.exec(x), l = /Android/i.exec(x), y = /FBAN\/\w+;/i.exec(x), C = /Mobile/i.exec(x), u = !!/Win64/.exec(x), g) {
                r = g[1] ? parseFloat(g[1]) : g[5] ? parseFloat(g[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
                var _ = /(?:Trident\/(\d+.\d+))/.exec(x);
                a = _ ? parseFloat(_[1]) + 4 : r, e = g[2] ? parseFloat(g[2]) : NaN, t = g[3] ? parseFloat(g[3]) : NaN, o = g[4] ? parseFloat(g[4]) : NaN, o ? (g = /(?:Chrome\/(\d+\.\d+))/.exec(x), i = g && g[1] ? parseFloat(g[1]) : NaN) : i = NaN
            } else r = e = t = i = o = NaN;
            if (P) {
                if (P[1]) {
                    var z = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(x);
                    s = z ? parseFloat(z[1].replace("_", ".")) : !0
                } else s = !1;
                p = !!P[2], c = !!P[3]
            } else s = p = c = !1
        }
    }
    var R = {
        ie: function() {
            return v() || r
        },
        ieCompatibilityMode: function() {
            return v() || a > r
        },
        ie64: function() {
            return R.ie() && u
        },
        firefox: function() {
            return v() || e
        },
        opera: function() {
            return v() || t
        },
        webkit: function() {
            return v() || o
        },
        safari: function() {
            return R.webkit()
        },
        chrome: function() {
            return v() || i
        },
        windows: function() {
            return v() || p
        },
        osx: function() {
            return v() || s
        },
        linux: function() {
            return v() || c
        },
        iphone: function() {
            return v() || h
        },
        mobile: function() {
            return v() || h || f || l || C
        },
        nativeApp: function() {
            return v() || y
        },
        android: function() {
            return v() || l
        },
        ipad: function() {
            return v() || f
        }
    };
    return ve = R, ve
}
var xe, Fe;

function bt() {
    if (Fe) return xe;
    Fe = 1;
    var n = !!(typeof window < "u" && window.document && window.document.createElement),
        r = {
            canUseDOM: n,
            canUseWorkers: typeof Worker < "u",
            canUseEventListeners: n && !!(window.addEventListener || window.attachEvent),
            canUseViewport: n && !!window.screen,
            isInWorker: !n
        };
    return xe = r, xe
}
var we, We;

function St() {
    if (We) return we;
    We = 1;
    var n = bt(),
        r;
    n.canUseDOM && (r = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @param {?boolean} capture Check if the capture phase is supported.
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function e(t, o) {
        if (!n.canUseDOM || o && !("addEventListener" in document)) return !1;
        var i = "on" + t,
            a = i in document;
        if (!a) {
            var s = document.createElement("div");
            s.setAttribute(i, "return;"), a = typeof s[i] == "function"
        }
        return !a && r && t === "wheel" && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a
    }
    return we = e, we
}
var ye, Le;

function Rt() {
    if (Le) return ye;
    Le = 1;
    var n = Ct(),
        r = St(),
        e = 10,
        t = 40,
        o = 800;

    function i(a) {
        var s = 0,
            p = 0,
            c = 0,
            l = 0;
        return "detail" in a && (p = a.detail), "wheelDelta" in a && (p = -a.wheelDelta / 120), "wheelDeltaY" in a && (p = -a.wheelDeltaY / 120), "wheelDeltaX" in a && (s = -a.wheelDeltaX / 120), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (s = p, p = 0), c = s * e, l = p * e, "deltaY" in a && (l = a.deltaY), "deltaX" in a && (c = a.deltaX), (c || l) && a.deltaMode && (a.deltaMode == 1 ? (c *= t, l *= t) : (c *= o, l *= o)), c && !s && (s = c < 1 ? -1 : 1), l && !p && (p = l < 1 ? -1 : 1), {
            spinX: s,
            spinY: p,
            pixelX: c,
            pixelY: l
        }
    }
    return i.getEventType = function() {
        return n.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel"
    }, ye = i, ye
}
var Ce, ke;

function _t() {
    return ke || (ke = 1, Ce = Rt()), Ce
}
var Et = _t();
const Pt = at(Et);

function Dt(n, r, e, t, o, i) {
    i === void 0 && (i = 0);
    var a = J(n, r, i),
        s = a.width,
        p = a.height,
        c = Math.min(s, e),
        l = Math.min(p, t);
    return c > l * o ? {
        width: l * o,
        height: l
    } : {
        width: c,
        height: c / o
    }
}

function At(n) {
    return n.width > n.height ? n.width / n.naturalWidth : n.height / n.naturalHeight
}

function re(n, r, e, t, o) {
    o === void 0 && (o = 0);
    var i = J(r.width, r.height, o),
        a = i.width,
        s = i.height;
    return {
        x: Ue(n.x, a, e.width, t),
        y: Ue(n.y, s, e.height, t)
    }
}

function Ue(n, r, e, t) {
    var o = r * t / 2 - e / 2;
    return he(n, -o, o)
}

function Ze(n, r) {
    return Math.sqrt(Math.pow(n.y - r.y, 2) + Math.pow(n.x - r.x, 2))
}

function Be(n, r) {
    return Math.atan2(r.y - n.y, r.x - n.x) * 180 / Math.PI
}

function jt(n, r, e, t, o, i, a) {
    i === void 0 && (i = 0), a === void 0 && (a = !0);
    var s = a ? zt : Mt,
        p = J(r.width, r.height, i),
        c = J(r.naturalWidth, r.naturalHeight, i),
        l = {
            x: s(100, ((p.width - e.width / o) / 2 - n.x / o) / p.width * 100),
            y: s(100, ((p.height - e.height / o) / 2 - n.y / o) / p.height * 100),
            width: s(100, e.width / p.width * 100 / o),
            height: s(100, e.height / p.height * 100 / o)
        },
        u = Math.round(s(c.width, l.width * c.width / 100)),
        h = Math.round(s(c.height, l.height * c.height / 100)),
        f = c.width >= c.height * t,
        y = f ? {
            width: Math.round(h * t),
            height: h
        } : {
            width: u,
            height: Math.round(u / t)
        },
        C = S(S({}, y), {
            x: Math.round(s(c.width - y.width, l.x * c.width / 100)),
            y: Math.round(s(c.height - y.height, l.y * c.height / 100))
        });
    return {
        croppedAreaPercentages: l,
        croppedAreaPixels: C
    }
}

function zt(n, r) {
    return Math.min(n, Math.max(0, r))
}

function Mt(n, r) {
    return r
}

function Tt(n, r, e, t, o, i) {
    var a = J(r.width, r.height, e),
        s = he(t.width / a.width * (100 / n.width), o, i),
        p = {
            x: s * a.width / 2 - t.width / 2 - a.width * s * (n.x / 100),
            y: s * a.height / 2 - t.height / 2 - a.height * s * (n.y / 100)
        };
    return {
        crop: p,
        zoom: s
    }
}

function It(n, r, e) {
    var t = At(r);
    return e.height > e.width ? e.height / (n.height * t) : e.width / (n.width * t)
}

function Nt(n, r, e, t, o, i) {
    e === void 0 && (e = 0);
    var a = J(r.naturalWidth, r.naturalHeight, e),
        s = he(It(n, r, t), o, i),
        p = t.height > t.width ? t.height / n.height : t.width / n.width,
        c = {
            x: ((a.width - n.width) / 2 - n.x) * p,
            y: ((a.height - n.height) / 2 - n.y) * p
        };
    return {
        crop: c,
        zoom: s
    }
}

function Ge(n, r) {
    return {
        x: (r.x + n.x) / 2,
        y: (r.y + n.y) / 2
    }
}

function Ot(n) {
    return n * Math.PI / 180
}

function J(n, r, e) {
    var t = Ot(e);
    return {
        width: Math.abs(Math.cos(t) * n) + Math.abs(Math.sin(t) * r),
        height: Math.abs(Math.sin(t) * n) + Math.abs(Math.cos(t) * r)
    }
}

function he(n, r, e) {
    return Math.min(Math.max(n, r), e)
}

function le() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    return n.filter(function(e) {
        return typeof e == "string" && e.length > 0
    }).join(" ").trim()
}
var Ft = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,
    Wt = 1,
    Lt = 3,
    kt = 1,
    Ut = function(n) {
        wt(r, n);

        function r() {
            var e = n !== null && n.apply(this, arguments) || this;
            return e.cropperRef = m.createRef(), e.imageRef = m.createRef(), e.videoRef = m.createRef(), e.containerPosition = {
                x: 0,
                y: 0
            }, e.containerRef = null, e.styleRef = null, e.containerRect = null, e.mediaSize = {
                width: 0,
                height: 0,
                naturalWidth: 0,
                naturalHeight: 0
            }, e.dragStartPosition = {
                x: 0,
                y: 0
            }, e.dragStartCrop = {
                x: 0,
                y: 0
            }, e.gestureZoomStart = 0, e.gestureRotationStart = 0, e.isTouching = !1, e.lastPinchDistance = 0, e.lastPinchRotation = 0, e.rafDragTimeout = null, e.rafPinchTimeout = null, e.wheelTimer = null, e.currentDoc = typeof document < "u" ? document : null, e.currentWindow = typeof window < "u" ? window : null, e.resizeObserver = null, e.state = {
                cropSize: null,
                hasWheelJustStarted: !1,
                mediaObjectFit: void 0
            }, e.initResizeObserver = function() {
                if (!(typeof window.ResizeObserver > "u" || !e.containerRef)) {
                    var t = !0;
                    e.resizeObserver = new window.ResizeObserver(function(o) {
                        if (t) {
                            t = !1;
                            return
                        }
                        e.computeSizes()
                    }), e.resizeObserver.observe(e.containerRef)
                }
            }, e.preventZoomSafari = function(t) {
                return t.preventDefault()
            }, e.cleanEvents = function() {
                e.currentDoc && (e.currentDoc.removeEventListener("mousemove", e.onMouseMove), e.currentDoc.removeEventListener("mouseup", e.onDragStopped), e.currentDoc.removeEventListener("touchmove", e.onTouchMove), e.currentDoc.removeEventListener("touchend", e.onDragStopped), e.currentDoc.removeEventListener("gesturechange", e.onGestureChange), e.currentDoc.removeEventListener("gestureend", e.onGestureEnd), e.currentDoc.removeEventListener("scroll", e.onScroll))
            }, e.clearScrollEvent = function() {
                e.containerRef && e.containerRef.removeEventListener("wheel", e.onWheel), e.wheelTimer && clearTimeout(e.wheelTimer)
            }, e.onMediaLoad = function() {
                var t = e.computeSizes();
                t && (e.emitCropData(), e.setInitialCrop(t)), e.props.onMediaLoaded && e.props.onMediaLoaded(e.mediaSize)
            }, e.setInitialCrop = function(t) {
                if (e.props.initialCroppedAreaPercentages) {
                    var o = Tt(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom),
                        i = o.crop,
                        a = o.zoom;
                    e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(a)
                } else if (e.props.initialCroppedAreaPixels) {
                    var s = Nt(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom),
                        i = s.crop,
                        a = s.zoom;
                    e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(a)
                }
            }, e.computeSizes = function() {
                var t, o, i, a, s, p, c = e.imageRef.current || e.videoRef.current;
                if (c && e.containerRef) {
                    e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
                    var l = e.containerRect.width / e.containerRect.height,
                        u = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((o = e.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0,
                        h = ((i = e.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((a = e.videoRef.current) === null || a === void 0 ? void 0 : a.videoHeight) || 0,
                        f = c.offsetWidth < u || c.offsetHeight < h,
                        y = u / h,
                        C = void 0;
                    if (f) switch (e.state.mediaObjectFit) {
                        default:
                        case "contain":
                            C = l > y ? {
                                width: e.containerRect.height * y,
                                height: e.containerRect.height
                            } : {
                                width: e.containerRect.width,
                                height: e.containerRect.width / y
                            };
                            break;
                        case "horizontal-cover":
                            C = {
                                width: e.containerRect.width,
                                height: e.containerRect.width / y
                            };
                            break;
                        case "vertical-cover":
                            C = {
                                width: e.containerRect.height * y,
                                height: e.containerRect.height
                            };
                            break
                    } else C = {
                        width: c.offsetWidth,
                        height: c.offsetHeight
                    };
                    e.mediaSize = S(S({}, C), {
                        naturalWidth: u,
                        naturalHeight: h
                    }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
                    var v = e.props.cropSize ? e.props.cropSize : Dt(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
                    return (((s = e.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== v.height || ((p = e.state.cropSize) === null || p === void 0 ? void 0 : p.width) !== v.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(v), e.setState({
                        cropSize: v
                    }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(v), v
                }
            }, e.saveContainerPosition = function() {
                if (e.containerRef) {
                    var t = e.containerRef.getBoundingClientRect();
                    e.containerPosition = {
                        x: t.left,
                        y: t.top
                    }
                }
            }, e.onMouseDown = function(t) {
                e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(r.getMousePoint(t)))
            }, e.onMouseMove = function(t) {
                return e.onDrag(r.getMousePoint(t))
            }, e.onScroll = function(t) {
                e.currentDoc && (t.preventDefault(), e.saveContainerPosition())
            }, e.onTouchStart = function(t) {
                e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(t)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
                    passive: !1
                }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), t.touches.length === 2 ? e.onPinchStart(t) : t.touches.length === 1 && e.onDragStart(r.getTouchPoint(t.touches[0]))))
            }, e.onTouchMove = function(t) {
                t.preventDefault(), t.touches.length === 2 ? e.onPinchMove(t) : t.touches.length === 1 && e.onDrag(r.getTouchPoint(t.touches[0]))
            }, e.onGestureStart = function(t) {
                e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureChange), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation)
            }, e.onGestureChange = function(t) {
                if (t.preventDefault(), !e.isTouching) {
                    var o = r.getMousePoint(t),
                        i = e.gestureZoomStart - 1 + t.scale;
                    if (e.setNewZoom(i, o, {
                            shouldUpdatePosition: !0
                        }), e.props.onRotationChange) {
                        var a = e.gestureRotationStart + t.rotation;
                        e.props.onRotationChange(a)
                    }
                }
            }, e.onGestureEnd = function(t) {
                e.cleanEvents()
            }, e.onDragStart = function(t) {
                var o, i, a = t.x,
                    s = t.y;
                e.dragStartPosition = {
                    x: a,
                    y: s
                }, e.dragStartCrop = S({}, e.props.crop), (i = (o = e.props).onInteractionStart) === null || i === void 0 || i.call(o)
            }, e.onDrag = function(t) {
                var o = t.x,
                    i = t.y;
                e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
                    if (e.state.cropSize && !(o === void 0 || i === void 0)) {
                        var a = o - e.dragStartPosition.x,
                            s = i - e.dragStartPosition.y,
                            p = {
                                x: e.dragStartCrop.x + a,
                                y: e.dragStartCrop.y + s
                            },
                            c = e.props.restrictPosition ? re(p, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : p;
                        e.props.onCropChange(c)
                    }
                }))
            }, e.onDragStopped = function() {
                var t, o;
                e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (o = (t = e.props).onInteractionEnd) === null || o === void 0 || o.call(t)
            }, e.onWheel = function(t) {
                if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(t))) {
                    t.preventDefault();
                    var o = r.getMousePoint(t),
                        i = Pt(t).pixelY,
                        a = e.props.zoom - i * e.props.zoomSpeed / 200;
                    e.setNewZoom(a, o, {
                        shouldUpdatePosition: !0
                    }), e.state.hasWheelJustStarted || e.setState({
                        hasWheelJustStarted: !0
                    }, function() {
                        var s, p;
                        return (p = (s = e.props).onInteractionStart) === null || p === void 0 ? void 0 : p.call(s)
                    }), e.wheelTimer && clearTimeout(e.wheelTimer), e.wheelTimer = e.currentWindow.setTimeout(function() {
                        return e.setState({
                            hasWheelJustStarted: !1
                        }, function() {
                            var s, p;
                            return (p = (s = e.props).onInteractionEnd) === null || p === void 0 ? void 0 : p.call(s)
                        })
                    }, 250)
                }
            }, e.getPointOnContainer = function(t, o) {
                var i = t.x,
                    a = t.y;
                if (!e.containerRect) throw new Error("The Cropper is not mounted");
                return {
                    x: e.containerRect.width / 2 - (i - o.x),
                    y: e.containerRect.height / 2 - (a - o.y)
                }
            }, e.getPointOnMedia = function(t) {
                var o = t.x,
                    i = t.y,
                    a = e.props,
                    s = a.crop,
                    p = a.zoom;
                return {
                    x: (o + s.x) / p,
                    y: (i + s.y) / p
                }
            }, e.setNewZoom = function(t, o, i) {
                var a = i === void 0 ? {} : i,
                    s = a.shouldUpdatePosition,
                    p = s === void 0 ? !0 : s;
                if (!(!e.state.cropSize || !e.props.onZoomChange)) {
                    var c = he(t, e.props.minZoom, e.props.maxZoom);
                    if (p) {
                        var l = e.getPointOnContainer(o, e.containerPosition),
                            u = e.getPointOnMedia(l),
                            h = {
                                x: u.x * c - l.x,
                                y: u.y * c - l.y
                            },
                            f = e.props.restrictPosition ? re(h, e.mediaSize, e.state.cropSize, c, e.props.rotation) : h;
                        e.props.onCropChange(f)
                    }
                    e.props.onZoomChange(c)
                }
            }, e.getCropData = function() {
                if (!e.state.cropSize) return null;
                var t = e.props.restrictPosition ? re(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
                return jt(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition)
            }, e.emitCropData = function() {
                var t = e.getCropData();
                if (t) {
                    var o = t.croppedAreaPercentages,
                        i = t.croppedAreaPixels;
                    e.props.onCropComplete && e.props.onCropComplete(o, i), e.props.onCropAreaChange && e.props.onCropAreaChange(o, i)
                }
            }, e.emitCropAreaChange = function() {
                var t = e.getCropData();
                if (t) {
                    var o = t.croppedAreaPercentages,
                        i = t.croppedAreaPixels;
                    e.props.onCropAreaChange && e.props.onCropAreaChange(o, i)
                }
            }, e.recomputeCropPosition = function() {
                if (e.state.cropSize) {
                    var t = e.props.restrictPosition ? re(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
                    e.props.onCropChange(t), e.emitCropData()
                }
            }, e.onKeyDown = function(t) {
                var o, i, a = e.props,
                    s = a.crop,
                    p = a.onCropChange,
                    c = a.keyboardStep,
                    l = a.zoom,
                    u = a.rotation,
                    h = c;
                if (e.state.cropSize) {
                    t.shiftKey && (h *= .2);
                    var f = S({}, s);
                    switch (t.key) {
                        case "ArrowUp":
                            f.y -= h, t.preventDefault();
                            break;
                        case "ArrowDown":
                            f.y += h, t.preventDefault();
                            break;
                        case "ArrowLeft":
                            f.x -= h, t.preventDefault();
                            break;
                        case "ArrowRight":
                            f.x += h, t.preventDefault();
                            break;
                        default:
                            return
                    }
                    e.props.restrictPosition && (f = re(f, e.mediaSize, e.state.cropSize, l, u)), t.repeat || (i = (o = e.props).onInteractionStart) === null || i === void 0 || i.call(o), p(f)
                }
            }, e.onKeyUp = function(t) {
                var o, i;
                switch (t.key) {
                    case "ArrowUp":
                    case "ArrowDown":
                    case "ArrowLeft":
                    case "ArrowRight":
                        t.preventDefault();
                        break;
                    default:
                        return
                }
                e.emitCropData(), (i = (o = e.props).onInteractionEnd) === null || i === void 0 || i.call(o)
            }, e
        }
        return r.prototype.componentDidMount = function() {
            !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
                passive: !1
            }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Ft, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef))
        }, r.prototype.componentWillUnmount = function() {
            var e, t;
            !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent())
        }, r.prototype.componentDidUpdate = function(e) {
            var t, o, i, a, s, p, c, l, u;
            e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = e.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((a = this.props.cropSize) === null || a === void 0 ? void 0 : a.width) ? this.computeSizes() : (((s = e.crop) === null || s === void 0 ? void 0 : s.x) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.x) || ((c = e.crop) === null || c === void 0 ? void 0 : c.y) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
                passive: !1
            }) : this.clearScrollEvent()), e.video !== this.props.video && ((u = this.videoRef.current) === null || u === void 0 || u.load());
            var h = this.getObjectFit();
            h !== this.state.mediaObjectFit && this.setState({
                mediaObjectFit: h
            }, this.computeSizes)
        }, r.prototype.getAspect = function() {
            var e = this.props,
                t = e.cropSize,
                o = e.aspect;
            return t ? t.width / t.height : o
        }, r.prototype.getObjectFit = function() {
            var e, t, o, i;
            if (this.props.objectFit === "cover") {
                var a = this.imageRef.current || this.videoRef.current;
                if (a && this.containerRef) {
                    this.containerRect = this.containerRef.getBoundingClientRect();
                    var s = this.containerRect.width / this.containerRect.height,
                        p = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) === null || t === void 0 ? void 0 : t.videoWidth) || 0,
                        c = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0,
                        l = p / c;
                    return l < s ? "horizontal-cover" : "vertical-cover"
                }
                return "horizontal-cover"
            }
            return this.props.objectFit
        }, r.prototype.onPinchStart = function(e) {
            var t = r.getTouchPoint(e.touches[0]),
                o = r.getTouchPoint(e.touches[1]);
            this.lastPinchDistance = Ze(t, o), this.lastPinchRotation = Be(t, o), this.onDragStart(Ge(t, o))
        }, r.prototype.onPinchMove = function(e) {
            var t = this;
            if (!(!this.currentDoc || !this.currentWindow)) {
                var o = r.getTouchPoint(e.touches[0]),
                    i = r.getTouchPoint(e.touches[1]),
                    a = Ge(o, i);
                this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
                    var s = Ze(o, i),
                        p = t.props.zoom * (s / t.lastPinchDistance);
                    t.setNewZoom(p, a, {
                        shouldUpdatePosition: !1
                    }), t.lastPinchDistance = s;
                    var c = Be(o, i),
                        l = t.props.rotation + (c - t.lastPinchRotation);
                    t.props.onRotationChange && t.props.onRotationChange(l), t.lastPinchRotation = c
                })
            }
        }, r.prototype.render = function() {
            var e = this,
                t, o = this.props,
                i = o.image,
                a = o.video,
                s = o.mediaProps,
                p = o.cropperProps,
                c = o.transform,
                l = o.crop,
                u = l.x,
                h = l.y,
                f = o.rotation,
                y = o.zoom,
                C = o.cropShape,
                v = o.showGrid,
                R = o.roundCropAreaPixels,
                x = o.style,
                g = x.containerStyle,
                P = x.cropAreaStyle,
                _ = x.mediaStyle,
                z = o.classes,
                X = z.containerClassName,
                ee = z.cropAreaClassName,
                H = z.mediaClassName,
                F = (t = this.state.mediaObjectFit) !== null && t !== void 0 ? t : this.getObjectFit();
            return m.createElement("div", {
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                ref: function(N) {
                    return e.containerRef = N
                },
                "data-testid": "container",
                style: g,
                className: le("reactEasyCrop_Container", X)
            }, i ? m.createElement("img", S({
                alt: "",
                className: le("reactEasyCrop_Image", F === "contain" && "reactEasyCrop_Contain", F === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", F === "vertical-cover" && "reactEasyCrop_Cover_Vertical", H)
            }, s, {
                src: i,
                ref: this.imageRef,
                style: S(S({}, _), {
                    transform: c || "translate(".concat(u, "px, ").concat(h, "px) rotate(").concat(f, "deg) scale(").concat(y, ")")
                }),
                onLoad: this.onMediaLoad
            })) : a && m.createElement("video", S({
                autoPlay: !0,
                playsInline: !0,
                loop: !0,
                muted: !0,
                className: le("reactEasyCrop_Video", F === "contain" && "reactEasyCrop_Contain", F === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", F === "vertical-cover" && "reactEasyCrop_Cover_Vertical", H)
            }, s, {
                ref: this.videoRef,
                onLoadedMetadata: this.onMediaLoad,
                style: S(S({}, _), {
                    transform: c || "translate(".concat(u, "px, ").concat(h, "px) rotate(").concat(f, "deg) scale(").concat(y, ")")
                }),
                controls: !1
            }), (Array.isArray(a) ? a : [{
                src: a
            }]).map(function(M) {
                return m.createElement("source", S({
                    key: M.src
                }, M))
            })), this.state.cropSize && m.createElement("div", S({
                ref: this.cropperRef,
                style: S(S({}, P), {
                    width: R ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
                    height: R ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
                }),
                tabIndex: 0,
                onKeyDown: this.onKeyDown,
                onKeyUp: this.onKeyUp,
                "data-testid": "cropper",
                className: le("reactEasyCrop_CropArea", C === "round" && "reactEasyCrop_CropAreaRound", v && "reactEasyCrop_CropAreaGrid", ee)
            }, p)))
        }, r.defaultProps = {
            zoom: 1,
            rotation: 0,
            aspect: 4 / 3,
            maxZoom: Lt,
            minZoom: Wt,
            cropShape: "rect",
            objectFit: "contain",
            showGrid: !0,
            style: {},
            classes: {},
            mediaProps: {},
            cropperProps: {},
            zoomSpeed: 1,
            restrictPosition: !0,
            zoomWithScroll: !0,
            keyboardStep: kt
        }, r.getMousePoint = function(e) {
            return {
                x: Number(e.clientX),
                y: Number(e.clientY)
            }
        }, r.getTouchPoint = function(e) {
            return {
                x: Number(e.clientX),
                y: Number(e.clientY)
            }
        }, r
    }(m.Component);
const L = "img-crop",
    be = 1,
    ne = .1,
    de = 0,
    qe = -180,
    He = 180,
    Se = 1,
    ie = .01,
    Zt = m.forwardRef((n, r) => {
        const {
            cropperRef: e,
            zoomSlider: t,
            rotationSlider: o,
            aspectSlider: i,
            showReset: a,
            resetBtnText: s,
            modalImage: p,
            aspect: c,
            minZoom: l,
            maxZoom: u,
            minAspect: h,
            maxAspect: f,
            cropShape: y,
            showGrid: C,
            cropperProps: v
        } = n, [R, x] = m.useState(be), [g, P] = m.useState(de), [_, z] = m.useState(c), X = m.useRef(c);
        X.current !== c && (X.current = c, z(c));
        const ee = R !== be || g !== de || _ !== c,
            H = () => {
                x(be), P(de), z(c)
            },
            [F, M] = m.useState({
                x: 0,
                y: 0
            }),
            N = m.useRef({
                width: 0,
                height: 0,
                x: 0,
                y: 0
            }),
            se = m.useCallback((me, K) => {
                N.current = K
            }, []);
        m.useImperativeHandle(r, () => ({
            rotation: g,
            cropPixelsRef: N,
            onReset: H
        }));
        const Y = "[display:flex] [align-items:center] [width:60%] [margin-inline:auto]",
            W = "[display:flex] [align-items:center] [justify-content:center] [height:32px] [width:32px] [background:transparent] [border:0] [font-family:inherit] [font-size:18px] [cursor:pointer] disabled:[opacity:20%] disabled:[cursor:default]",
            V = "[flex:1]";
        return d.jsxs(d.Fragment, {
            children: [d.jsx(Ut, Object.assign({}, v, {
                ref: e,
                image: p,
                crop: F,
                zoom: R,
                rotation: g,
                aspect: _,
                minZoom: l,
                maxZoom: u,
                zoomWithScroll: t,
                cropShape: y,
                showGrid: C,
                onCropChange: M,
                onZoomChange: x,
                onRotationChange: P,
                onCropComplete: se,
                classes: {
                    containerClassName: `${L}-container ![position:relative] [width:100%] [height:40vh] [&~section:first-of-type]:[margin-top:16px] [&~section:last-of-type]:[margin-bottom:16px]`,
                    mediaClassName: `${L}-media`
                }
            })), t && d.jsxs("section", {
                className: `${L}-control ${L}-control-zoom ${Y}`,
                children: [d.jsx("button", {
                    className: W,
                    onClick: () => x(+(R - ne).toFixed(1)),
                    disabled: R - ne < l,
                    children: "－"
                }), d.jsx(fe, {
                    className: V,
                    min: l,
                    max: u,
                    step: ne,
                    value: R,
                    onChange: x
                }), d.jsx("button", {
                    className: W,
                    onClick: () => x(+(R + ne).toFixed(1)),
                    disabled: R + ne > u,
                    children: "＋"
                })]
            }), o && d.jsxs("section", {
                className: `${L}-control ${L}-control-rotation ${Y}`,
                children: [d.jsx("button", {
                    className: `${W} [font-size:16px]`,
                    onClick: () => P(g - Se),
                    disabled: g === qe,
                    children: "↺"
                }), d.jsx(fe, {
                    className: V,
                    min: qe,
                    max: He,
                    step: Se,
                    value: g,
                    onChange: P
                }), d.jsx("button", {
                    className: `${W} [font-size:16px]`,
                    onClick: () => P(g + Se),
                    disabled: g === He,
                    children: "↻"
                })]
            }), i && d.jsxs("section", {
                className: `${L}-control ${L}-control-aspect ${Y}`,
                children: [d.jsx("button", {
                    className: W,
                    onClick: () => z(+(_ - ie).toFixed(2)),
                    disabled: _ - ie < h,
                    children: "↕"
                }), d.jsx(fe, {
                    className: V,
                    min: h,
                    max: f,
                    step: ie,
                    value: _,
                    onChange: z
                }), d.jsx("button", {
                    className: W,
                    onClick: () => z(+(_ + ie).toFixed(2)),
                    disabled: _ + ie > f,
                    children: "↔"
                })]
            }), a && (t || o || i) && d.jsx(Ye, {
                className: "[position:absolute] [bottom:20px]",
                style: ee ? {} : {
                    opacity: .3,
                    pointerEvents: "none"
                },
                onClick: H,
                children: s
            })]
        })
    });
var Bt = m.memo(Zt);

function Gt(n, r) {
    r === void 0 && (r = {});
    var e = r.insertAt;
    if (!(typeof document > "u")) {
        var t = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
        o.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(o, t.firstChild) : t.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n))
    }
}
var qt = "/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */.visible{visibility:visible}.\\!\\[position\\:relative\\]{position:relative!important}.\\[position\\:absolute\\]{position:absolute}.\\[bottom\\:20px\\]{bottom:20px}.container{width:100%}.\\[margin-inline\\:auto\\]{margin-inline:auto}.\\[display\\:flex\\]{display:flex}.grid{display:grid}.\\[height\\:32px\\]{height:32px}.\\[height\\:40vh\\]{height:40vh}.\\[width\\:32px\\]{width:32px}.\\[width\\:60\\%\\]{width:60%}.\\[width\\:100\\%\\]{width:100%}.\\[flex\\:1\\]{flex:1}.\\[cursor\\:pointer\\]{cursor:pointer}.\\[align-items\\:center\\]{align-items:center}.\\[justify-content\\:center\\]{justify-content:center}.\\[font-family\\:inherit\\]{font-family:inherit}.\\[font-size\\:16px\\]{font-size:16px}.\\[font-size\\:18px\\]{font-size:18px}.\\[background\\:transparent\\]{background:transparent}.\\[border\\:0\\]{border:0}.disabled\\:\\[cursor\\:default\\]{&:disabled{cursor:default}}.disabled\\:\\[opacity\\:20\\%\\]{&:disabled{opacity:20%}}.\\[\\&\\~section\\:first-of-type\\]\\:\\[margin-top\\:16px\\]{&~section:first-of-type{margin-top:16px}}.\\[\\&\\~section\\:last-of-type\\]\\:\\[margin-bottom\\:16px\\]{&~section:last-of-type{margin-bottom:16px}}";
Gt(qt, {
    insertAt: "top"
});
const Ht = m.forwardRef((n, r) => {
        const {
            quality: e = .4,
            fillColor: t = "white",
            zoomSlider: o = !0,
            rotationSlider: i = !1,
            aspectSlider: a = !1,
            showReset: s = !1,
            resetText: p,
            aspect: c = 1,
            minZoom: l = 1,
            maxZoom: u = 3,
            minAspect: h = .5,
            maxAspect: f = 2,
            cropShape: y = "rect",
            showGrid: C = !1,
            cropperProps: v,
            modalClassName: R,
            modalTitle: x,
            modalWidth: g,
            modalOk: P,
            modalCancel: _,
            onModalOk: z,
            onModalCancel: X,
            modalProps: ee,
            beforeCrop: H,
            children: F
        } = n, M = m.useRef({});
        M.current.onModalOk = z, M.current.onModalCancel = X, M.current.beforeCrop = H;
        const N = m.useRef(null),
            se = m.useCallback(b => {
                var A;
                const E = document.createElement("canvas"),
                    w = E.getContext("2d"),
                    I = (((A = b == null ? void 0 : b.getRootNode) === null || A === void 0 ? void 0 : A.call(b)) || document).querySelector(`.${L}-media`),
                    {
                        width: D,
                        height: j,
                        x: B,
                        y: G
                    } = N.current.cropPixelsRef.current;
                if (i && N.current.rotation !== de) {
                    const {
                        naturalWidth: k,
                        naturalHeight: $
                    } = I, te = N.current.rotation * (Math.PI / 180), oe = Math.abs(Math.sin(te)), q = Math.abs(Math.cos(te)), O = k * q + $ * oe, T = $ * q + k * oe;
                    E.width = O, E.height = T, w.fillStyle = t, w.fillRect(0, 0, O, T);
                    const De = O / 2,
                        Ae = T / 2;
                    w.translate(De, Ae), w.rotate(te), w.translate(-De, -Ae);
                    const rt = (O - k) / 2,
                        nt = (T - $) / 2;
                    w.drawImage(I, 0, 0, k, $, rt, nt, k, $);
                    const it = w.getImageData(0, 0, O, T);
                    E.width = D, E.height = j, w.putImageData(it, -B, -G)
                } else E.width = D, E.height = j, w.fillStyle = t, w.fillRect(0, 0, D, j), w.drawImage(I, B, G, D, j, 0, 0, D, j);
                return E
            }, [t, i]),
            [Y, W] = m.useState(""),
            V = m.useRef(void 0),
            me = m.useRef(void 0),
            K = m.useCallback(b => ce(void 0, [b], void 0, function*({
                beforeUpload: A,
                file: E,
                resolve: w,
                reject: Z
            }) {
                const I = E;
                if (typeof A != "function") {
                    w(I);
                    return
                }
                try {
                    const D = yield A(E, [E]);
                    w(D === !1 ? !1 : D !== !0 && D || I)
                } catch (D) {
                    Z(D)
                }
            }), []),
            Ee = m.useCallback(b => (A, E) => new Promise((w, Z) => ce(void 0, void 0, void 0, function*() {
                let I = A;
                if (typeof M.current.beforeCrop == "function") try {
                    const j = yield M.current.beforeCrop(A, E);
                    if (j === !1) return K({
                        beforeUpload: b,
                        file: A,
                        resolve: w,
                        reject: Z
                    });
                    j !== !0 && (I = j || A)
                } catch {
                    return K({
                        beforeUpload: b,
                        file: A,
                        resolve: w,
                        reject: Z
                    })
                }
                const D = new FileReader;
                D.addEventListener("load", () => {
                    typeof D.result == "string" && W(D.result)
                }), D.readAsDataURL(I), V.current = () => {
                    var j, B;
                    W(""), N.current.onReset();
                    let G = !1;
                    (B = (j = M.current).onModalCancel) === null || B === void 0 || B.call(j, k => {
                        w(k), G = !0
                    }), G || w(Ke.LIST_IGNORE)
                }, me.current = j => ce(void 0, void 0, void 0, function*() {
                    W(""), N.current.onReset();
                    const B = se(j.target),
                        {
                            type: G,
                            name: k,
                            uid: $
                        } = I;
                    B.toBlob(te => ce(void 0, void 0, void 0, function*() {
                        const oe = new File([te], k, {
                            type: G
                        });
                        Object.assign(oe, {
                            uid: $
                        }), K({
                            beforeUpload: b,
                            file: oe,
                            resolve: q => {
                                var O, T;
                                w(q), (T = (O = M.current).onModalOk) === null || T === void 0 || T.call(O, q)
                            },
                            reject: q => {
                                var O, T;
                                Z(q), (T = (O = M.current).onModalOk) === null || T === void 0 || T.call(O, q)
                            }
                        })
                    }), G, e)
                })
            })), [se, e, K]),
            Je = m.useCallback(b => {
                const A = Array.isArray(b) ? b[0] : b,
                    E = A.props,
                    {
                        beforeUpload: w,
                        accept: Z
                    } = E,
                    I = yt(E, ["beforeUpload", "accept"]);
                return Object.assign(Object.assign({}, A), {
                    props: Object.assign(Object.assign({}, I), {
                        accept: Z || "image/*",
                        beforeUpload: Ee(w)
                    })
                })
            }, [Ee]),
            Qe = m.useMemo(() => {
                const b = {};
                return g !== void 0 && (b.width = g), P !== void 0 && (b.okText = P), _ !== void 0 && (b.cancelText = _), b
            }, [_, P, g]),
            et = `${L}-modal${R?` ${R}`:""}`,
            Pe = (typeof window > "u" ? "" : window.navigator.language) === "zh-CN",
            tt = x || (Pe ? "编辑图片" : "Edit image"),
            ot = p || (Pe ? "重置" : "Reset");
        return d.jsxs(d.Fragment, {
            children: [Je(F), Y && d.jsx(st, Object.assign({}, ee, Qe, {
                open: !0,
                title: tt,
                onCancel: V.current,
                onOk: me.current,
                wrapClassName: et,
                maskClosable: !1,
                destroyOnClose: !0,
                children: d.jsx(Bt, {
                    ref: N,
                    cropperRef: r,
                    zoomSlider: o,
                    rotationSlider: i,
                    aspectSlider: a,
                    showReset: s,
                    resetBtnText: ot,
                    modalImage: Y,
                    aspect: c,
                    minZoom: l,
                    maxZoom: u,
                    minAspect: h,
                    maxAspect: f,
                    cropShape: y,
                    showGrid: C,
                    cropperProps: v
                })
            }))]
        })
    }),
    $t = n => new Promise((r, e) => {
        const t = new Image;
        t.addEventListener("load", () => r(t)), t.addEventListener("error", o => e(o)), t.setAttribute("crossOrigin", "anonymous"), t.src = n
    });

function Xt(n) {
    return n * Math.PI / 180
}
const Yt = async (n, r, e = 0) => {
    const t = await $t(n),
        o = document.createElement("canvas"),
        i = o.getContext("2d"),
        s = 2 * (Math.max(t.width, t.height) / 2 * Math.sqrt(2));
    o.width = s, o.height = s, i.translate(s / 2, s / 2), i.rotate(Xt(e)), i.translate(-s / 2, -s / 2), i.drawImage(t, s / 2 - t.width * .5, s / 2 - t.height * .5);
    const p = i.getImageData(0, 0, s, s);
    return o.width = r.width, o.height = r.height, i.putImageData(p, 0 - s / 2 + t.width * .5 - r.x, 0 - s / 2 + t.height * .5 - r.y), o.toDataURL("image/jpeg")
}, $e = 2, Vt = n => {
    const [r, e] = m.useState(n.imageUrl ? [{
        uid: ct(),
        name: "Image",
        thumbUrl: n.imageUrl,
        url: n.imageUrl
    }] : []), [t, o] = m.useState({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }), i = ({
        fileList: l
    }) => {
        e(l)
    }, a = async l => {
        let u = l.url;
        u || (u = await new Promise(y => {
            const C = new FileReader;
            C.readAsDataURL(l.originFileObj), C.onload = () => y(C.result)
        }));
        const h = new Image;
        h.src = u;
        const f = window.open(u);
        f == null || f.document.write(h.outerHTML)
    }, s = l => {
        const u = l.type === "image/jpeg";
        u || Me.error("You can only upload JPEG files!");
        const h = l.size / 1024 / 1024 < $e;
        return h || Me.error(`Image must be less than ${$e}MB!`), u && h
    }, p = l => new Promise(u => {
        const h = new FileReader;
        h.readAsDataURL(l), h.onload = () => {
            const f = h.result;
            u(f)
        }
    }), c = async () => {
        try {
            const l = await p(r[0].originFileObj),
                u = await Yt(l, t);
            n.onImageChange(u)
        } catch {
            n.onImageChange(n.imageUrl)
        }
    };
    return je.useEffect(() => {
        r.length ? c().then(l => !0).catch(l => !1) : n.onImageChange()
    }, [r.length, t]), d.jsxs(je.Fragment, {
        children: [d.jsxs(Jt, {
            children: [d.jsxs(Qt, {
                children: [d.jsx(Xe, {
                    children: "Good Thumbnails"
                }), d.jsxs(ze, {
                    className: "maxWidth",
                    direction: "vertical",
                    size: 10,
                    children: [d.jsx(ae, {
                        children: "Screenshot of your map"
                    }), d.jsx(ae, {
                        children: "Custom logo you designed for your map"
                    })]
                })]
            }), d.jsxs(eo, {
                children: [d.jsx(Xe, {
                    children: "Not Allowed"
                }), d.jsxs(ze, {
                    className: "maxWidth",
                    direction: "vertical",
                    size: 10,
                    children: [d.jsx(ae, {
                        children: "Images from other games, movies, or companies"
                    }), d.jsx(ae, {
                        children: "Memes"
                    }), d.jsx(ae, {
                        children: "Pictures of people, animals, or other real-life objects"
                    })]
                })]
            })]
        }), d.jsx(Kt, {
            children: d.jsx(Ht, {
                rotationSlider: !1,
                modalTitle: "Crop image",
                aspect: 16 / 9,
                cropperProps: {
                    onCropAreaChange: (l, u) => {
                        o(u)
                    }
                },
                children: d.jsx(Ke, {
                    beforeUpload: s,
                    action: p,
                    listType: "picture-card",
                    fileList: r,
                    maxCount: 1,
                    onChange: i,
                    onPreview: a,
                    accept: "image/jpeg",
                    children: r.length ? void 0 : "+ Upload"
                })
            })
        })]
    })
}, Kt = Q.div`
  width: 100%;
  .ant-upload,
  .ant-upload-list-item,
  .ant-upload-list-item-container {
    width: 100% !important;
    height: 130px !important;
  }
`, Jt = Q.div.attrs({
    className: "maxWidth flex"
})`
  color: ${ue.White};
  border-radius: 6px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 20px;
`, Qt = Q.div`
  width: 50%;
  background: #0a6c13;
  padding: 15px 20px;
  flex: 1;
`, eo = Q.div`
  width: 50%;
  background: #930606;
  padding: 20px;
`, Xe = Q.div`
  font-weight: ${Ve.UltraBold};
  margin-bottom: 10px;
  font-size: 16px;
`, ae = Q.div.attrs({
    className: "maxWidth"
})`
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  border-radius: 6px;
`, to = "https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative", Wr = n => {
    const [r, e, t] = lt(!1), [o] = U.useForm(), i = mt(), a = c => {
        o.setFieldsValue({
            imageUrl: c
        })
    }, s = c => {
        r || (e(), vt({
            event: "creative_map_published"
        }), window.addEventListener("MAP_SAVED", () => {
            n.handleSubmit({
                name: c.name,
                description: c.description,
                imageUrl: c.imageUrl,
                educationalRating: c.educationalRating
            }).finally(t)
        }, {
            once: !0
        }), ft(gt.save, {
            ignoreNotification: !0
        }))
    }, p = d.jsx(Te, {
        to,
        style: {
            color: ue.Yellow,
            textDecoration: "underline"
        },
        target: "_blank",
        external: !0,
        children: "Community Guidelines"
    });
    return d.jsxs(U, {
        form: o,
        style: {
            width: "100%"
        },
        autoComplete: "off",
        onFinish: s,
        initialValues: {
            name: n.name,
            description: n.description,
            imageUrl: n.imageUrl,
            educationalRating: n.educationalRating
        },
        children: [d.jsx(pe, {
            label: "Name"
        }), d.jsx(U.Item, {
            name: "name",
            rules: [{
                required: !0,
                message: "Please input a name"
            }, {
                min: 3,
                message: "Name must be at least 3 characters long"
            }, {
                max: 32,
                message: "Name must be less than 32 characters long"
            }],
            children: d.jsx(Ie, {
                placeholder: "Zapper Battle",
                maxLength: 32
            })
        }), d.jsx(pe, {
            label: "Description",
            description: "Write a little bit about your map and how to play it!"
        }), d.jsx(U.Item, {
            name: "description",
            rules: [{
                required: !0,
                message: "Please input a description"
            }, {
                min: 12,
                message: "Description must be at least 12 characters long"
            }, {
                max: 256,
                message: "Description must be less than 256 characters long"
            }],
            children: d.jsx(Ie, {
                placeholder: "Two teams battle against one another with Zappers. The team with the most knockouts wins!",
                maxLength: 256
            })
        }), d.jsx(pe, {
            label: "Thumbnail",
            description: "Upload an image to highlight your map."
        }), d.jsx(U.Item, {
            name: "imageUrl",
            rules: [{
                required: !0,
                message: "Please upload a thumbnail"
            }],
            children: d.jsx(Vt, {
                imageUrl: n.imageUrl,
                onImageChange: a
            })
        }), d.jsx(pe, {
            label: "Educational Rating",
            description: "Select if your map is educational (players answer questions to progress) or just for fun"
        }), d.jsx(U.Item, {
            name: "educationalRating",
            rules: [{
                required: !0,
                message: "Please select a rating"
            }],
            children: d.jsxs(ge, {
                placeholder: "Select a rating",
                children: [d.jsx(ge.Option, {
                    value: "non-educational",
                    children: "Just For Fun"
                }), d.jsx(ge.Option, {
                    value: "educational",
                    children: "Educational"
                })]
            })
        }), d.jsx(U.Item, {
            valuePropName: "checked",
            name: "guidelines",
            rules: [{
                required: !0,
                validator: (c, l) => l ? Promise.resolve() : Promise.reject("Please accept")
            }],
            children: d.jsxs(Ne, {
                children: ["I confirm that all content written/upload above and all content in my map follow the ", p]
            })
        }), d.jsx(U.Item, {
            valuePropName: "checked",
            name: "ban",
            rules: [{
                required: !0,
                validator: (c, l) => l ? Promise.resolve() : Promise.reject("Please accept")
            }],
            children: d.jsxs(Ne, {
                children: ["I understand that my account may be permanently banned if I violate the ", p]
            })
        }), d.jsx(pt, {}), d.jsx(U.Item, {
            children: d.jsx(Ye, {
                type: "primary",
                htmlType: "submit",
                block: !0,
                style: {
                    height: 70
                },
                size: "large",
                icon: d.jsx(xt, {}),
                loading: r,
                children: n.isForUpdating ? "Save Changes" : `Publish for ${i?"Free":"1,000 "+ut.currency}`
            })
        }), !i && !n.isForUpdating ? d.jsx("div", {
            className: "maxWidth",
            style: {
                marginTop: -10,
                textAlign: "center"
            },
            children: d.jsxs(Re.Text, {
                children: ["Publishing is free with the", " ", d.jsx(Te, {
                    style: {
                        color: ue.Yellow,
                        textDecoration: "underline"
                    },
                    to: dt,
                    target: "_blank",
                    children: ht.name
                })]
            })
        }) : null]
    })
}, pe = n => d.jsxs("div", {
    className: "maxWidth",
    style: {
        marginBottom: 4
    },
    children: [d.jsx(Re.Text, {
        style: {
            fontWeight: Ve.Bold,
            color: ue.White
        },
        children: n.label
    }), n.description ? d.jsx("div", {
        children: d.jsx(Re.Text, {
            style: {
                marginTop: 5
            },
            italic: !0,
            children: n.description
        })
    }) : null]
});
export {
    Wr as
    default
};