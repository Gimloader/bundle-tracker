import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    O as n,
    c as r
} from "./utils.js";
import {
    t as i
} from "./react-1.js";
import {
    t as a
} from "./message.js";
import {
    t as o
} from "./modal-1.js";
import {
    t as s
} from "./button-1.js";
import {
    t as c
} from "./select.js";
import {
    t as l
} from "./input.js";
import {
    t as u
} from "./checkbox.js";
import {
    t as d
} from "./form-1.js";
import {
    t as f
} from "./slider.js";
import {
    t as p
} from "./space.js";
import {
    t as m
} from "./typography.js";
import {
    t as h
} from "./upload.js";
import {
    t as g
} from "./StarOutlined.js";
import {
    Q as _
} from "./Paths.js";
import {
    t as v
} from "./jsx-runtime.js";
import {
    l as y,
    s as b,
    y as x
} from "./_index.js";
import {
    t as S
} from "./AccessibleAnchor.js";
import {
    t as C
} from "./TrackEvent.js";
import {
    t as w
} from "./Names.js";
import {
    t as T
} from "./SeasonTicketName.js";
import {
    t as E
} from "./OwnsSeasonTicket.js";
import {
    n as D
} from "./Button-2.js";
import {
    n as O,
    t as k
} from "./Send.js";
var A = e(i()),
    j = function(e, t) {
        return j = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, j(e, t)
    };

function M(e, t) {
    if (typeof t != `function` && t !== null) throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
    j(e, t);

    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var N = function() {
    return N = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }, N.apply(this, arguments)
};

function P(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == `function`)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}

function F(e, t, n, r) {
    function i(e) {
        return e instanceof n ? e : new n(function(t) {
            t(e)
        })
    }
    return new(n || (n = Promise))(function(n, a) {
        function o(e) {
            try {
                c(r.next(e))
            } catch (e) {
                a(e)
            }
        }

        function s(e) {
            try {
                c(r.throw(e))
            } catch (e) {
                a(e)
            }
        }

        function c(e) {
            e.done ? n(e.value) : i(e.value).then(o, s)
        }
        c((r = r.apply(e, t || [])).next())
    })
}
var I = t(((e, t) => {
        var n = !1,
            r, i, a, o, s, c, l, u, d, f, p, m, h, g, _;

        function v() {
            if (!n) {
                n = !0;
                var e = navigator.userAgent,
                    t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),
                    v = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
                if (m = /\b(iPhone|iP[ao]d)/.exec(e), h = /\b(iP[ao]d)/.exec(e), f = /Android/i.exec(e), g = /FBAN\/\w+;/i.exec(e), _ = /Mobile/i.exec(e), p = !!/Win64/.exec(e), t) {
                    r = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
                    var y = /(?:Trident\/(\d+.\d+))/.exec(e);
                    c = y ? parseFloat(y[1]) + 4 : r, i = t[2] ? parseFloat(t[2]) : NaN, a = t[3] ? parseFloat(t[3]) : NaN, o = t[4] ? parseFloat(t[4]) : NaN, o ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), s = t && t[1] ? parseFloat(t[1]) : NaN) : s = NaN
                } else r = i = a = s = o = NaN;
                if (v) {
                    if (v[1]) {
                        var b = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                        l = !b || parseFloat(b[1].replace(`_`, `.`))
                    } else l = !1;
                    u = !!v[2], d = !!v[3]
                } else l = u = d = !1
            }
        }
        var y = {
            ie: function() {
                return v() || r
            },
            ieCompatibilityMode: function() {
                return v() || c > r
            },
            ie64: function() {
                return y.ie() && p
            },
            firefox: function() {
                return v() || i
            },
            opera: function() {
                return v() || a
            },
            webkit: function() {
                return v() || o
            },
            safari: function() {
                return y.webkit()
            },
            chrome: function() {
                return v() || s
            },
            windows: function() {
                return v() || u
            },
            osx: function() {
                return v() || l
            },
            linux: function() {
                return v() || d
            },
            iphone: function() {
                return v() || m
            },
            mobile: function() {
                return v() || m || h || f || _
            },
            nativeApp: function() {
                return v() || g
            },
            android: function() {
                return v() || f
            },
            ipad: function() {
                return v() || h
            }
        };
        t.exports = y
    })),
    L = t(((e, t) => {
        var n = !!(typeof window < `u` && window.document && window.document.createElement);
        t.exports = {
            canUseDOM: n,
            canUseWorkers: typeof Worker < `u`,
            canUseEventListeners: n && !!(window.addEventListener || window.attachEvent),
            canUseViewport: n && !!window.screen,
            isInWorker: !n
        }
    })),
    R = t(((e, t) => {
        var n = L(),
            r;
        n.canUseDOM && (r = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature(``, ``) !== !0);

        function i(e, t) {
            if (!n.canUseDOM || t && !(`addEventListener` in document)) return !1;
            var i = `on` + e,
                a = i in document;
            if (!a) {
                var o = document.createElement(`div`);
                o.setAttribute(i, `return;`), a = typeof o[i] == `function`
            }
            return !a && r && e === `wheel` && (a = document.implementation.hasFeature(`Events.wheel`, `3.0`)), a
        }
        t.exports = i
    })),
    z = t(((e, t) => {
        var n = I(),
            r = R(),
            i = 10,
            a = 40,
            o = 800;

        function s(e) {
            var t = 0,
                n = 0,
                r = 0,
                s = 0;
            return `detail` in e && (n = e.detail), `wheelDelta` in e && (n = -e.wheelDelta / 120), `wheelDeltaY` in e && (n = -e.wheelDeltaY / 120), `wheelDeltaX` in e && (t = -e.wheelDeltaX / 120), `axis` in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = t * i, s = n * i, `deltaY` in e && (s = e.deltaY), `deltaX` in e && (r = e.deltaX), (r || s) && e.deltaMode && (e.deltaMode == 1 ? (r *= a, s *= a) : (r *= o, s *= o)), r && !t && (t = r < 1 ? -1 : 1), s && !n && (n = s < 1 ? -1 : 1), {
                spinX: t,
                spinY: n,
                pixelX: r,
                pixelY: s
            }
        }
        s.getEventType = function() {
            return n.firefox() ? `DOMMouseScroll` : r(`wheel`) ? `wheel` : `mousewheel`
        }, t.exports = s
    })),
    B = t(((e, t) => {
        t.exports = z()
    })),
    V = v(),
    ee = e(B());

function te(e, t, n, r, i, a) {
    a === void 0 && (a = 0);
    var o = G(e, t, a),
        s = o.width,
        c = o.height,
        l = Math.min(s, n),
        u = Math.min(c, r);
    return l > u * i ? {
        width: u * i,
        height: u
    } : {
        width: l,
        height: l / i
    }
}

function ne(e) {
    return e.width > e.height ? e.width / e.naturalWidth : e.height / e.naturalHeight
}

function H(e, t, n, r, i) {
    i === void 0 && (i = 0);
    var a = G(t.width, t.height, i),
        o = a.width,
        s = a.height;
    return {
        x: U(e.x, o, n.width, r),
        y: U(e.y, s, n.height, r)
    }
}

function U(e, t, n, r) {
    var i = t * r / 2 - n / 2;
    return K(e, -i, i)
}

function W(e, t) {
    return Math.sqrt((e.y - t.y) ** 2 + (e.x - t.x) ** 2)
}

function re(e, t) {
    return Math.atan2(t.y - e.y, t.x - e.x) * 180 / Math.PI
}

function ie(e, t, n, r, i, a, o) {
    a === void 0 && (a = 0), o === void 0 && (o = !0);
    var s = o ? ae : oe,
        c = G(t.width, t.height, a),
        l = G(t.naturalWidth, t.naturalHeight, a),
        u = {
            x: s(100, ((c.width - n.width / i) / 2 - e.x / i) / c.width * 100),
            y: s(100, ((c.height - n.height / i) / 2 - e.y / i) / c.height * 100),
            width: s(100, n.width / c.width * 100 / i),
            height: s(100, n.height / c.height * 100 / i)
        },
        d = Math.round(s(l.width, u.width * l.width / 100)),
        f = Math.round(s(l.height, u.height * l.height / 100)),
        p = l.width >= l.height * r ? {
            width: Math.round(f * r),
            height: f
        } : {
            width: d,
            height: Math.round(d / r)
        };
    return {
        croppedAreaPercentages: u,
        croppedAreaPixels: N(N({}, p), {
            x: Math.round(s(l.width - p.width, u.x * l.width / 100)),
            y: Math.round(s(l.height - p.height, u.y * l.height / 100))
        })
    }
}

function ae(e, t) {
    return Math.min(e, Math.max(0, t))
}

function oe(e, t) {
    return t
}

function se(e, t, n, r, i, a) {
    var o = G(t.width, t.height, n),
        s = K(r.width / o.width * (100 / e.width), i, a);
    return {
        crop: {
            x: s * o.width / 2 - r.width / 2 - o.width * s * (e.x / 100),
            y: s * o.height / 2 - r.height / 2 - o.height * s * (e.y / 100)
        },
        zoom: s
    }
}

function ce(e, t, n) {
    var r = ne(t);
    return n.height > n.width ? n.height / (e.height * r) : n.width / (e.width * r)
}

function le(e, t, n, r, i, a) {
    n === void 0 && (n = 0);
    var o = G(t.naturalWidth, t.naturalHeight, n),
        s = K(ce(e, t, r), i, a),
        c = r.height > r.width ? r.height / e.height : r.width / e.width;
    return {
        crop: {
            x: ((o.width - e.width) / 2 - e.x) * c,
            y: ((o.height - e.height) / 2 - e.y) * c
        },
        zoom: s
    }
}

function ue(e, t) {
    return {
        x: (t.x + e.x) / 2,
        y: (t.y + e.y) / 2
    }
}

function de(e) {
    return e * Math.PI / 180
}

function G(e, t, n) {
    var r = de(n);
    return {
        width: Math.abs(Math.cos(r) * e) + Math.abs(Math.sin(r) * t),
        height: Math.abs(Math.sin(r) * e) + Math.abs(Math.cos(r) * t)
    }
}

function K(e, t, n) {
    return Math.min(Math.max(e, t), n)
}

function q() {
    return [...arguments].filter(function(e) {
        return typeof e == `string` && e.length > 0
    }).join(` `).trim()
}
var fe = `.reactEasyCrop_Container {
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
    pe = 1,
    me = 3,
    he = 1,
    ge = function(e) {
        M(t, e);

        function t() {
            var n = e !== null && e.apply(this, arguments) || this;
            return n.cropperRef = A.createRef(), n.imageRef = A.createRef(), n.videoRef = A.createRef(), n.containerPosition = {
                x: 0,
                y: 0
            }, n.containerRef = null, n.styleRef = null, n.containerRect = null, n.mediaSize = {
                width: 0,
                height: 0,
                naturalWidth: 0,
                naturalHeight: 0
            }, n.dragStartPosition = {
                x: 0,
                y: 0
            }, n.dragStartCrop = {
                x: 0,
                y: 0
            }, n.gestureZoomStart = 0, n.gestureRotationStart = 0, n.isTouching = !1, n.lastPinchDistance = 0, n.lastPinchRotation = 0, n.rafDragTimeout = null, n.rafPinchTimeout = null, n.wheelTimer = null, n.currentDoc = typeof document < `u` ? document : null, n.currentWindow = typeof window < `u` ? window : null, n.resizeObserver = null, n.state = {
                cropSize: null,
                hasWheelJustStarted: !1,
                mediaObjectFit: void 0
            }, n.initResizeObserver = function() {
                if (window.ResizeObserver !== void 0 && n.containerRef) {
                    var e = !0;
                    n.resizeObserver = new window.ResizeObserver(function(t) {
                        e ? e = !1 : n.computeSizes()
                    }), n.resizeObserver.observe(n.containerRef)
                }
            }, n.preventZoomSafari = function(e) {
                return e.preventDefault()
            }, n.cleanEvents = function() {
                n.currentDoc && (n.currentDoc.removeEventListener(`mousemove`, n.onMouseMove), n.currentDoc.removeEventListener(`mouseup`, n.onDragStopped), n.currentDoc.removeEventListener(`touchmove`, n.onTouchMove), n.currentDoc.removeEventListener(`touchend`, n.onDragStopped), n.currentDoc.removeEventListener(`gesturechange`, n.onGestureChange), n.currentDoc.removeEventListener(`gestureend`, n.onGestureEnd), n.currentDoc.removeEventListener(`scroll`, n.onScroll))
            }, n.clearScrollEvent = function() {
                n.containerRef && n.containerRef.removeEventListener(`wheel`, n.onWheel), n.wheelTimer && clearTimeout(n.wheelTimer)
            }, n.onMediaLoad = function() {
                var e = n.computeSizes();
                e && (n.emitCropData(), n.setInitialCrop(e)), n.props.onMediaLoaded && n.props.onMediaLoaded(n.mediaSize)
            }, n.setInitialCrop = function(e) {
                if (n.props.initialCroppedAreaPercentages) {
                    var t = se(n.props.initialCroppedAreaPercentages, n.mediaSize, n.props.rotation, e, n.props.minZoom, n.props.maxZoom),
                        r = t.crop,
                        i = t.zoom;
                    n.props.onCropChange(r), n.props.onZoomChange && n.props.onZoomChange(i)
                } else if (n.props.initialCroppedAreaPixels) {
                    var a = le(n.props.initialCroppedAreaPixels, n.mediaSize, n.props.rotation, e, n.props.minZoom, n.props.maxZoom),
                        r = a.crop,
                        i = a.zoom;
                    n.props.onCropChange(r), n.props.onZoomChange && n.props.onZoomChange(i)
                }
            }, n.computeSizes = function() {
                var e, t, r, i, a, o, s = n.imageRef.current || n.videoRef.current;
                if (s && n.containerRef) {
                    n.containerRect = n.containerRef.getBoundingClientRect(), n.saveContainerPosition();
                    var c = n.containerRect.width / n.containerRect.height,
                        l = ((e = n.imageRef.current) == null ? void 0 : e.naturalWidth) || ((t = n.videoRef.current) == null ? void 0 : t.videoWidth) || 0,
                        u = ((r = n.imageRef.current) == null ? void 0 : r.naturalHeight) || ((i = n.videoRef.current) == null ? void 0 : i.videoHeight) || 0,
                        d = s.offsetWidth < l || s.offsetHeight < u,
                        f = l / u,
                        p = void 0;
                    if (d) switch (n.state.mediaObjectFit) {
                        default:
                        case `contain`:
                            p = c > f ? {
                                width: n.containerRect.height * f,
                                height: n.containerRect.height
                            } : {
                                width: n.containerRect.width,
                                height: n.containerRect.width / f
                            };
                            break;
                        case `horizontal-cover`:
                            p = {
                                width: n.containerRect.width,
                                height: n.containerRect.width / f
                            };
                            break;
                        case `vertical-cover`:
                            p = {
                                width: n.containerRect.height * f,
                                height: n.containerRect.height
                            }
                    } else p = {
                        width: s.offsetWidth,
                        height: s.offsetHeight
                    };
                    n.mediaSize = N(N({}, p), {
                        naturalWidth: l,
                        naturalHeight: u
                    }), n.props.setMediaSize && n.props.setMediaSize(n.mediaSize);
                    var m = n.props.cropSize ? n.props.cropSize : te(n.mediaSize.width, n.mediaSize.height, n.containerRect.width, n.containerRect.height, n.props.aspect, n.props.rotation);
                    return (((a = n.state.cropSize) == null ? void 0 : a.height) !== m.height || ((o = n.state.cropSize) == null ? void 0 : o.width) !== m.width) && n.props.onCropSizeChange && n.props.onCropSizeChange(m), n.setState({
                        cropSize: m
                    }, n.recomputeCropPosition), n.props.setCropSize && n.props.setCropSize(m), m
                }
            }, n.saveContainerPosition = function() {
                if (n.containerRef) {
                    var e = n.containerRef.getBoundingClientRect();
                    n.containerPosition = {
                        x: e.left,
                        y: e.top
                    }
                }
            }, n.onMouseDown = function(e) {
                n.currentDoc && (e.preventDefault(), n.currentDoc.addEventListener(`mousemove`, n.onMouseMove), n.currentDoc.addEventListener(`mouseup`, n.onDragStopped), n.saveContainerPosition(), n.onDragStart(t.getMousePoint(e)))
            }, n.onMouseMove = function(e) {
                return n.onDrag(t.getMousePoint(e))
            }, n.onScroll = function(e) {
                n.currentDoc && (e.preventDefault(), n.saveContainerPosition())
            }, n.onTouchStart = function(e) {
                n.currentDoc && (n.isTouching = !0, (!n.props.onTouchRequest || n.props.onTouchRequest(e)) && (n.currentDoc.addEventListener(`touchmove`, n.onTouchMove, {
                    passive: !1
                }), n.currentDoc.addEventListener(`touchend`, n.onDragStopped), n.saveContainerPosition(), e.touches.length === 2 ? n.onPinchStart(e) : e.touches.length === 1 && n.onDragStart(t.getTouchPoint(e.touches[0]))))
            }, n.onTouchMove = function(e) {
                e.preventDefault(), e.touches.length === 2 ? n.onPinchMove(e) : e.touches.length === 1 && n.onDrag(t.getTouchPoint(e.touches[0]))
            }, n.onGestureStart = function(e) {
                n.currentDoc && (e.preventDefault(), n.currentDoc.addEventListener(`gesturechange`, n.onGestureChange), n.currentDoc.addEventListener(`gestureend`, n.onGestureEnd), n.gestureZoomStart = n.props.zoom, n.gestureRotationStart = n.props.rotation)
            }, n.onGestureChange = function(e) {
                if (e.preventDefault(), !n.isTouching) {
                    var r = t.getMousePoint(e),
                        i = n.gestureZoomStart - 1 + e.scale;
                    if (n.setNewZoom(i, r, {
                            shouldUpdatePosition: !0
                        }), n.props.onRotationChange) {
                        var a = n.gestureRotationStart + e.rotation;
                        n.props.onRotationChange(a)
                    }
                }
            }, n.onGestureEnd = function(e) {
                n.cleanEvents()
            }, n.onDragStart = function(e) {
                var t, r;
                n.dragStartPosition = {
                    x: e.x,
                    y: e.y
                }, n.dragStartCrop = N({}, n.props.crop), (r = (t = n.props).onInteractionStart) == null || r.call(t)
            }, n.onDrag = function(e) {
                var t = e.x,
                    r = e.y;
                n.currentWindow && (n.rafDragTimeout && n.currentWindow.cancelAnimationFrame(n.rafDragTimeout), n.rafDragTimeout = n.currentWindow.requestAnimationFrame(function() {
                    if (n.state.cropSize && t !== void 0 && r !== void 0) {
                        var e = t - n.dragStartPosition.x,
                            i = r - n.dragStartPosition.y,
                            a = {
                                x: n.dragStartCrop.x + e,
                                y: n.dragStartCrop.y + i
                            },
                            o = n.props.restrictPosition ? H(a, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : a;
                        n.props.onCropChange(o)
                    }
                }))
            }, n.onDragStopped = function() {
                var e, t;
                n.isTouching = !1, n.cleanEvents(), n.emitCropData(), (t = (e = n.props).onInteractionEnd) == null || t.call(e)
            }, n.onWheel = function(e) {
                if (n.currentWindow && (!n.props.onWheelRequest || n.props.onWheelRequest(e))) {
                    e.preventDefault();
                    var r = t.getMousePoint(e),
                        i = (0, ee.default)(e).pixelY,
                        a = n.props.zoom - i * n.props.zoomSpeed / 200;
                    n.setNewZoom(a, r, {
                        shouldUpdatePosition: !0
                    }), n.state.hasWheelJustStarted || n.setState({
                        hasWheelJustStarted: !0
                    }, function() {
                        var e, t;
                        return (t = (e = n.props).onInteractionStart) == null ? void 0 : t.call(e)
                    }), n.wheelTimer && clearTimeout(n.wheelTimer), n.wheelTimer = n.currentWindow.setTimeout(function() {
                        return n.setState({
                            hasWheelJustStarted: !1
                        }, function() {
                            var e, t;
                            return (t = (e = n.props).onInteractionEnd) == null ? void 0 : t.call(e)
                        })
                    }, 250)
                }
            }, n.getPointOnContainer = function(e, t) {
                var r = e.x,
                    i = e.y;
                if (!n.containerRect) throw Error(`The Cropper is not mounted`);
                return {
                    x: n.containerRect.width / 2 - (r - t.x),
                    y: n.containerRect.height / 2 - (i - t.y)
                }
            }, n.getPointOnMedia = function(e) {
                var t = e.x,
                    r = e.y,
                    i = n.props,
                    a = i.crop,
                    o = i.zoom;
                return {
                    x: (t + a.x) / o,
                    y: (r + a.y) / o
                }
            }, n.setNewZoom = function(e, t, r) {
                var i = (r === void 0 ? {} : r).shouldUpdatePosition,
                    a = i === void 0 || i;
                if (n.state.cropSize && n.props.onZoomChange) {
                    var o = K(e, n.props.minZoom, n.props.maxZoom);
                    if (a) {
                        var s = n.getPointOnContainer(t, n.containerPosition),
                            c = n.getPointOnMedia(s),
                            l = {
                                x: c.x * o - s.x,
                                y: c.y * o - s.y
                            },
                            u = n.props.restrictPosition ? H(l, n.mediaSize, n.state.cropSize, o, n.props.rotation) : l;
                        n.props.onCropChange(u)
                    }
                    n.props.onZoomChange(o)
                }
            }, n.getCropData = function() {
                return n.state.cropSize ? ie(n.props.restrictPosition ? H(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop, n.mediaSize, n.state.cropSize, n.getAspect(), n.props.zoom, n.props.rotation, n.props.restrictPosition) : null
            }, n.emitCropData = function() {
                var e = n.getCropData();
                if (e) {
                    var t = e.croppedAreaPercentages,
                        r = e.croppedAreaPixels;
                    n.props.onCropComplete && n.props.onCropComplete(t, r), n.props.onCropAreaChange && n.props.onCropAreaChange(t, r)
                }
            }, n.emitCropAreaChange = function() {
                var e = n.getCropData();
                if (e) {
                    var t = e.croppedAreaPercentages,
                        r = e.croppedAreaPixels;
                    n.props.onCropAreaChange && n.props.onCropAreaChange(t, r)
                }
            }, n.recomputeCropPosition = function() {
                if (n.state.cropSize) {
                    var e = n.props.restrictPosition ? H(n.props.crop, n.mediaSize, n.state.cropSize, n.props.zoom, n.props.rotation) : n.props.crop;
                    n.props.onCropChange(e), n.emitCropData()
                }
            }, n.onKeyDown = function(e) {
                var t, r, i = n.props,
                    a = i.crop,
                    o = i.onCropChange,
                    s = i.keyboardStep,
                    c = i.zoom,
                    l = i.rotation,
                    u = s;
                if (n.state.cropSize) {
                    e.shiftKey && (u *= .2);
                    var d = N({}, a);
                    switch (e.key) {
                        case `ArrowUp`:
                            d.y -= u, e.preventDefault();
                            break;
                        case `ArrowDown`:
                            d.y += u, e.preventDefault();
                            break;
                        case `ArrowLeft`:
                            d.x -= u, e.preventDefault();
                            break;
                        case `ArrowRight`:
                            d.x += u, e.preventDefault();
                            break;
                        default:
                            return
                    }
                    n.props.restrictPosition && (d = H(d, n.mediaSize, n.state.cropSize, c, l)), e.repeat || (r = (t = n.props).onInteractionStart) == null || r.call(t), o(d)
                }
            }, n.onKeyUp = function(e) {
                var t, r;
                switch (e.key) {
                    case `ArrowUp`:
                    case `ArrowDown`:
                    case `ArrowLeft`:
                    case `ArrowRight`:
                        e.preventDefault();
                        break;
                    default:
                        return
                }
                n.emitCropData(), (r = (t = n.props).onInteractionEnd) == null || r.call(t)
            }, n
        }
        return t.prototype.componentDidMount = function() {
            this.currentDoc && this.currentWindow && (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), window.ResizeObserver === void 0 && this.currentWindow.addEventListener(`resize`, this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener(`wheel`, this.onWheel, {
                passive: !1
            }), this.containerRef.addEventListener(`gesturestart`, this.onGestureStart)), this.currentDoc.addEventListener(`scroll`, this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement(`style`), this.styleRef.setAttribute(`type`, `text/css`), this.props.nonce && this.styleRef.setAttribute(`nonce`, this.props.nonce), this.styleRef.innerHTML = fe, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef))
        }, t.prototype.componentWillUnmount = function() {
            var e, t;
            this.currentDoc && this.currentWindow && (window.ResizeObserver === void 0 && this.currentWindow.removeEventListener(`resize`, this.computeSizes), (e = this.resizeObserver) == null || e.disconnect(), this.containerRef && this.containerRef.removeEventListener(`gesturestart`, this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) == null || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent())
        }, t.prototype.componentDidUpdate = function(e) {
            var t, n, r, i, a, o, s, c, l;
            e.rotation === this.props.rotation ? e.aspect === this.props.aspect && e.objectFit === this.props.objectFit ? e.zoom === this.props.zoom ? ((t = e.cropSize) == null ? void 0 : t.height) !== ((n = this.props.cropSize) == null ? void 0 : n.height) || ((r = e.cropSize) == null ? void 0 : r.width) !== ((i = this.props.cropSize) == null ? void 0 : i.width) ? this.computeSizes() : (((a = e.crop) == null ? void 0 : a.x) !== ((o = this.props.crop) == null ? void 0 : o.x) || ((s = e.crop) == null ? void 0 : s.y) !== ((c = this.props.crop) == null ? void 0 : c.y)) && this.emitCropAreaChange() : this.recomputeCropPosition() : this.computeSizes() : (this.computeSizes(), this.recomputeCropPosition()), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener(`wheel`, this.onWheel, {
                passive: !1
            }) : this.clearScrollEvent()), e.video !== this.props.video && ((l = this.videoRef.current) == null || l.load());
            var u = this.getObjectFit();
            u !== this.state.mediaObjectFit && this.setState({
                mediaObjectFit: u
            }, this.computeSizes)
        }, t.prototype.getAspect = function() {
            var e = this.props,
                t = e.cropSize,
                n = e.aspect;
            return t ? t.width / t.height : n
        }, t.prototype.getObjectFit = function() {
            var e, t, n, r;
            if (this.props.objectFit === `cover`) {
                if ((this.imageRef.current || this.videoRef.current) && this.containerRef) {
                    this.containerRect = this.containerRef.getBoundingClientRect();
                    var i = this.containerRect.width / this.containerRect.height;
                    return (((e = this.imageRef.current) == null ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) == null ? void 0 : t.videoWidth) || 0) / (((n = this.imageRef.current) == null ? void 0 : n.naturalHeight) || ((r = this.videoRef.current) == null ? void 0 : r.videoHeight) || 0) < i ? `horizontal-cover` : `vertical-cover`
                }
                return `horizontal-cover`
            }
            return this.props.objectFit
        }, t.prototype.onPinchStart = function(e) {
            var n = t.getTouchPoint(e.touches[0]),
                r = t.getTouchPoint(e.touches[1]);
            this.lastPinchDistance = W(n, r), this.lastPinchRotation = re(n, r), this.onDragStart(ue(n, r))
        }, t.prototype.onPinchMove = function(e) {
            var n = this;
            if (this.currentDoc && this.currentWindow) {
                var r = t.getTouchPoint(e.touches[0]),
                    i = t.getTouchPoint(e.touches[1]),
                    a = ue(r, i);
                this.onDrag(a), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
                    var e = W(r, i),
                        t = n.props.zoom * (e / n.lastPinchDistance);
                    n.setNewZoom(t, a, {
                        shouldUpdatePosition: !1
                    }), n.lastPinchDistance = e;
                    var o = re(r, i),
                        s = n.props.rotation + (o - n.lastPinchRotation);
                    n.props.onRotationChange && n.props.onRotationChange(s), n.lastPinchRotation = o
                })
            }
        }, t.prototype.render = function() {
            var e = this,
                t = this.props,
                n = t.image,
                r = t.video,
                i = t.mediaProps,
                a = t.cropperProps,
                o = t.transform,
                s = t.crop,
                c = s.x,
                l = s.y,
                u = t.rotation,
                d = t.zoom,
                f = t.cropShape,
                p = t.showGrid,
                m = t.roundCropAreaPixels,
                h = t.style,
                g = h.containerStyle,
                _ = h.cropAreaStyle,
                v = h.mediaStyle,
                y = t.classes,
                b = y.containerClassName,
                x = y.cropAreaClassName,
                S = y.mediaClassName,
                C = this.state.mediaObjectFit ?? this.getObjectFit();
            return A.createElement(`div`, {
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                ref: function(t) {
                    return e.containerRef = t
                },
                "data-testid": `container`,
                style: g,
                className: q(`reactEasyCrop_Container`, b)
            }, n ? A.createElement(`img`, N({
                alt: ``,
                className: q(`reactEasyCrop_Image`, C === `contain` && `reactEasyCrop_Contain`, C === `horizontal-cover` && `reactEasyCrop_Cover_Horizontal`, C === `vertical-cover` && `reactEasyCrop_Cover_Vertical`, S)
            }, i, {
                src: n,
                ref: this.imageRef,
                style: N(N({}, v), {
                    transform: o || `translate(${c}px, ${l}px) rotate(${u}deg) scale(${d})`
                }),
                onLoad: this.onMediaLoad
            })) : r && A.createElement(`video`, N({
                autoPlay: !0,
                playsInline: !0,
                loop: !0,
                muted: !0,
                className: q(`reactEasyCrop_Video`, C === `contain` && `reactEasyCrop_Contain`, C === `horizontal-cover` && `reactEasyCrop_Cover_Horizontal`, C === `vertical-cover` && `reactEasyCrop_Cover_Vertical`, S)
            }, i, {
                ref: this.videoRef,
                onLoadedMetadata: this.onMediaLoad,
                style: N(N({}, v), {
                    transform: o || `translate(${c}px, ${l}px) rotate(${u}deg) scale(${d})`
                }),
                controls: !1
            }), (Array.isArray(r) ? r : [{
                src: r
            }]).map(function(e) {
                return A.createElement(`source`, N({
                    key: e.src
                }, e))
            })), this.state.cropSize && A.createElement(`div`, N({
                ref: this.cropperRef,
                style: N(N({}, _), {
                    width: m ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
                    height: m ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
                }),
                tabIndex: 0,
                onKeyDown: this.onKeyDown,
                onKeyUp: this.onKeyUp,
                "data-testid": `cropper`,
                className: q(`reactEasyCrop_CropArea`, f === `round` && `reactEasyCrop_CropAreaRound`, p && `reactEasyCrop_CropAreaGrid`, x)
            }, a)))
        }, t.defaultProps = {
            zoom: 1,
            rotation: 0,
            aspect: 4 / 3,
            maxZoom: me,
            minZoom: pe,
            cropShape: `rect`,
            objectFit: `contain`,
            showGrid: !0,
            style: {},
            classes: {},
            mediaProps: {},
            cropperProps: {},
            zoomSpeed: 1,
            restrictPosition: !0,
            zoomWithScroll: !0,
            keyboardStep: he
        }, t.getMousePoint = function(e) {
            return {
                x: Number(e.clientX),
                y: Number(e.clientY)
            }
        }, t.getTouchPoint = function(e) {
            return {
                x: Number(e.clientX),
                y: Number(e.clientY)
            }
        }, t
    }(A.Component),
    J = `img-crop`,
    _e = 1,
    Y = .1,
    X = 0,
    ve = -180,
    ye = 180,
    be = 1,
    Z = .01,
    xe = (0, A.forwardRef)((e, t) => {
        let {
            cropperRef: n,
            zoomSlider: r,
            rotationSlider: i,
            aspectSlider: a,
            showReset: o,
            resetBtnText: c,
            modalImage: l,
            aspect: u,
            minZoom: d,
            maxZoom: p,
            minAspect: m,
            maxAspect: h,
            cropShape: g,
            showGrid: _,
            cropperProps: v
        } = e, [y, b] = (0, A.useState)(_e), [x, S] = (0, A.useState)(X), [C, w] = (0, A.useState)(u), T = (0, A.useRef)(u);
        T.current !== u && (T.current = u, w(u));
        let E = y !== _e || x !== X || C !== u,
            D = () => {
                b(_e), S(X), w(u)
            },
            [O, k] = (0, A.useState)({
                x: 0,
                y: 0
            }),
            j = (0, A.useRef)({
                width: 0,
                height: 0,
                x: 0,
                y: 0
            }),
            M = (0, A.useCallback)((e, t) => {
                j.current = t
            }, []);
        (0, A.useImperativeHandle)(t, () => ({
            rotation: x,
            cropPixelsRef: j,
            onReset: D
        }));
        let N = `[display:flex] [align-items:center] [width:60%] [margin-inline:auto]`,
            P = `[display:flex] [align-items:center] [justify-content:center] [height:32px] [width:32px] [background:transparent] [border:0] [font-family:inherit] [font-size:18px] [cursor:pointer] disabled:[opacity:20%] disabled:[cursor:default]`,
            F = `[flex:1]`;
        return (0, V.jsxs)(V.Fragment, {
            children: [(0, V.jsx)(ge, Object.assign({}, v, {
                ref: n,
                image: l,
                crop: O,
                zoom: y,
                rotation: x,
                aspect: C,
                minZoom: d,
                maxZoom: p,
                zoomWithScroll: r,
                cropShape: g,
                showGrid: _,
                onCropChange: k,
                onZoomChange: b,
                onRotationChange: S,
                onCropComplete: M,
                classes: {
                    containerClassName: `${J}-container ![position:relative] [width:100%] [height:40vh] [&~section:first-of-type]:[margin-top:16px] [&~section:last-of-type]:[margin-bottom:16px]`,
                    mediaClassName: `${J}-media`
                }
            })), r && (0, V.jsxs)(`section`, {
                className: `${J}-control ${J}-control-zoom ${N}`,
                children: [(0, V.jsx)(`button`, {
                    className: P,
                    onClick: () => b(+(y - Y).toFixed(1)),
                    disabled: y - Y < d,
                    children: `－`
                }), (0, V.jsx)(f, {
                    className: F,
                    min: d,
                    max: p,
                    step: Y,
                    value: y,
                    onChange: b
                }), (0, V.jsx)(`button`, {
                    className: P,
                    onClick: () => b(+(y + Y).toFixed(1)),
                    disabled: y + Y > p,
                    children: `＋`
                })]
            }), i && (0, V.jsxs)(`section`, {
                className: `${J}-control ${J}-control-rotation ${N}`,
                children: [(0, V.jsx)(`button`, {
                    className: `${P} [font-size:16px]`,
                    onClick: () => S(x - be),
                    disabled: x === ve,
                    children: `↺`
                }), (0, V.jsx)(f, {
                    className: F,
                    min: ve,
                    max: ye,
                    step: be,
                    value: x,
                    onChange: S
                }), (0, V.jsx)(`button`, {
                    className: `${P} [font-size:16px]`,
                    onClick: () => S(x + be),
                    disabled: x === ye,
                    children: `↻`
                })]
            }), a && (0, V.jsxs)(`section`, {
                className: `${J}-control ${J}-control-aspect ${N}`,
                children: [(0, V.jsx)(`button`, {
                    className: P,
                    onClick: () => w(+(C - Z).toFixed(2)),
                    disabled: C - Z < m,
                    children: `↕`
                }), (0, V.jsx)(f, {
                    className: F,
                    min: m,
                    max: h,
                    step: Z,
                    value: C,
                    onChange: w
                }), (0, V.jsx)(`button`, {
                    className: P,
                    onClick: () => w(+(C + Z).toFixed(2)),
                    disabled: C + Z > h,
                    children: `↔`
                })]
            }), o && (r || i || a) && (0, V.jsx)(s, {
                className: `[position:absolute] [bottom:20px]`,
                style: E ? {} : {
                    opacity: .3,
                    pointerEvents: `none`
                },
                onClick: D,
                children: c
            })]
        })
    }),
    Se = (0, A.memo)(xe);

function Ce(e, t) {
    t === void 0 && (t = {});
    var n = t.insertAt;
    if (typeof document < `u`) {
        var r = document.head || document.getElementsByTagName(`head`)[0],
            i = document.createElement(`style`);
        i.type = `text/css`, n === `top` && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
    }
}
Ce(`/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */.visible{visibility:visible}.\\!\\[position\\:relative\\]{position:relative!important}.\\[position\\:absolute\\]{position:absolute}.\\[bottom\\:20px\\]{bottom:20px}.container{width:100%}.\\[margin-inline\\:auto\\]{margin-inline:auto}.\\[display\\:flex\\]{display:flex}.grid{display:grid}.\\[height\\:32px\\]{height:32px}.\\[height\\:40vh\\]{height:40vh}.\\[width\\:32px\\]{width:32px}.\\[width\\:60\\%\\]{width:60%}.\\[width\\:100\\%\\]{width:100%}.\\[flex\\:1\\]{flex:1}.\\[cursor\\:pointer\\]{cursor:pointer}.\\[align-items\\:center\\]{align-items:center}.\\[justify-content\\:center\\]{justify-content:center}.\\[font-family\\:inherit\\]{font-family:inherit}.\\[font-size\\:16px\\]{font-size:16px}.\\[font-size\\:18px\\]{font-size:18px}.\\[background\\:transparent\\]{background:transparent}.\\[border\\:0\\]{border:0}.disabled\\:\\[cursor\\:default\\]{&:disabled{cursor:default}}.disabled\\:\\[opacity\\:20\\%\\]{&:disabled{opacity:20%}}.\\[\\&\\~section\\:first-of-type\\]\\:\\[margin-top\\:16px\\]{&~section:first-of-type{margin-top:16px}}.\\[\\&\\~section\\:last-of-type\\]\\:\\[margin-bottom\\:16px\\]{&~section:last-of-type{margin-bottom:16px}}`, {
    insertAt: `top`
});
var we = (0, A.forwardRef)((e, t) => {
        let {
            quality: n = .4,
            fillColor: r = `white`,
            zoomSlider: i = !0,
            rotationSlider: a = !1,
            aspectSlider: s = !1,
            showReset: c = !1,
            resetText: l,
            aspect: u = 1,
            minZoom: d = 1,
            maxZoom: f = 3,
            minAspect: p = .5,
            maxAspect: m = 2,
            cropShape: g = `rect`,
            showGrid: _ = !1,
            cropperProps: v,
            modalClassName: y,
            modalTitle: b,
            modalWidth: x,
            modalOk: S,
            modalCancel: C,
            onModalOk: w,
            onModalCancel: T,
            modalProps: E,
            beforeCrop: D,
            children: O
        } = e, k = (0, A.useRef)({});
        k.current.onModalOk = w, k.current.onModalCancel = T, k.current.beforeCrop = D;
        let j = (0, A.useRef)(null),
            M = (0, A.useCallback)(e => {
                var t;
                let n = document.createElement(`canvas`),
                    i = n.getContext(`2d`),
                    o = (((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || document).querySelector(`.${J}-media`),
                    {
                        width: s,
                        height: c,
                        x: l,
                        y: u
                    } = j.current.cropPixelsRef.current;
                if (a && j.current.rotation !== X) {
                    let {
                        naturalWidth: e,
                        naturalHeight: t
                    } = o, a = j.current.rotation * (Math.PI / 180), d = Math.abs(Math.sin(a)), f = Math.abs(Math.cos(a)), p = e * f + t * d, m = t * f + e * d;
                    n.width = p, n.height = m, i.fillStyle = r, i.fillRect(0, 0, p, m);
                    let h = p / 2,
                        g = m / 2;
                    i.translate(h, g), i.rotate(a), i.translate(-h, -g);
                    let _ = (p - e) / 2,
                        v = (m - t) / 2;
                    i.drawImage(o, 0, 0, e, t, _, v, e, t);
                    let y = i.getImageData(0, 0, p, m);
                    n.width = s, n.height = c, i.putImageData(y, -l, -u)
                } else n.width = s, n.height = c, i.fillStyle = r, i.fillRect(0, 0, s, c), i.drawImage(o, l, u, s, c, 0, 0, s, c);
                return n
            }, [r, a]),
            [N, I] = (0, A.useState)(``),
            L = (0, A.useRef)(void 0),
            R = (0, A.useRef)(void 0),
            z = (0, A.useCallback)(e => F(void 0, [e], void 0, function*({
                beforeUpload: e,
                file: t,
                resolve: n,
                reject: r
            }) {
                let i = t;
                if (typeof e != `function`) n(i);
                else try {
                    let r = yield e(t, [t]);
                    n(r === !1 ? !1 : r !== !0 && r || i)
                } catch (e) {
                    r(e)
                }
            }), []),
            B = (0, A.useCallback)(e => ((t, r) => new Promise((i, a) => F(void 0, void 0, void 0, function*() {
                let o = t;
                if (typeof k.current.beforeCrop == `function`) try {
                    let n = yield k.current.beforeCrop(t, r);
                    if (n === !1) return z({
                        beforeUpload: e,
                        file: t,
                        resolve: i,
                        reject: a
                    });
                    n !== !0 && (o = n || t)
                } catch {
                    return z({
                        beforeUpload: e,
                        file: t,
                        resolve: i,
                        reject: a
                    })
                }
                let s = new FileReader;
                s.addEventListener(`load`, () => {
                    typeof s.result == `string` && I(s.result)
                }), s.readAsDataURL(o), L.current = () => {
                    var e, t;
                    I(``), j.current.onReset();
                    let n = !1;
                    (t = (e = k.current).onModalCancel) == null || t.call(e, e => {
                        i(e), n = !0
                    }), n || i(h.LIST_IGNORE)
                }, R.current = t => F(void 0, void 0, void 0, function*() {
                    I(``), j.current.onReset();
                    let r = M(t.target),
                        {
                            type: s,
                            name: c,
                            uid: l
                        } = o;
                    r.toBlob(t => F(void 0, void 0, void 0, function*() {
                        let n = new File([t], c, {
                            type: s
                        });
                        Object.assign(n, {
                            uid: l
                        }), z({
                            beforeUpload: e,
                            file: n,
                            resolve: e => {
                                var t, n;
                                i(e), (n = (t = k.current).onModalOk) == null || n.call(t, e)
                            },
                            reject: e => {
                                var t, n;
                                a(e), (n = (t = k.current).onModalOk) == null || n.call(t, e)
                            }
                        })
                    }), s, n)
                })
            }))), [M, n, z]),
            ee = (0, A.useCallback)(e => {
                let t = Array.isArray(e) ? e[0] : e,
                    n = t.props,
                    {
                        beforeUpload: r,
                        accept: i
                    } = n,
                    a = P(n, [`beforeUpload`, `accept`]);
                return Object.assign(Object.assign({}, t), {
                    props: Object.assign(Object.assign({}, a), {
                        accept: i || `image/*`,
                        beforeUpload: B(r)
                    })
                })
            }, [B]),
            te = (0, A.useMemo)(() => {
                let e = {};
                return x !== void 0 && (e.width = x), S !== void 0 && (e.okText = S), C !== void 0 && (e.cancelText = C), e
            }, [C, S, x]),
            ne = `${J}-modal${y?` ${y}`:``}`,
            H = (typeof window > `u` ? `` : window.navigator.language) === `zh-CN`,
            U = b || (H ? `编辑图片` : `Edit image`),
            W = l || (H ? `重置` : `Reset`);
        return (0, V.jsxs)(V.Fragment, {
            children: [ee(O), N && (0, V.jsx)(o, Object.assign({}, E, te, {
                open: !0,
                title: U,
                onCancel: L.current,
                onOk: R.current,
                wrapClassName: ne,
                maskClosable: !1,
                destroyOnClose: !0,
                children: (0, V.jsx)(Se, {
                    ref: j,
                    cropperRef: t,
                    zoomSlider: i,
                    rotationSlider: a,
                    aspectSlider: s,
                    showReset: c,
                    resetBtnText: W,
                    modalImage: N,
                    aspect: u,
                    minZoom: d,
                    maxZoom: f,
                    minAspect: p,
                    maxAspect: m,
                    cropShape: g,
                    showGrid: _,
                    cropperProps: v
                })
            }))]
        })
    }),
    Te = e => new Promise((t, n) => {
        let r = new Image;
        r.addEventListener(`load`, () => t(r)), r.addEventListener(`error`, e => n(e)), r.setAttribute(`crossOrigin`, `anonymous`), r.src = e
    });

function Ee(e) {
    return e * Math.PI / 180
}
var De = async (e, t, n = 0) => {
    let r = await Te(e),
        i = document.createElement(`canvas`),
        a = i.getContext(`2d`),
        o = 2 * (Math.max(r.width, r.height) / 2 * Math.sqrt(2));
    i.width = o, i.height = o, a.translate(o / 2, o / 2), a.rotate(Ee(n)), a.translate(-o / 2, -o / 2), a.drawImage(r, o / 2 - r.width * .5, o / 2 - r.height * .5);
    let s = a.getImageData(0, 0, o, o);
    return i.width = t.width, i.height = t.height, a.putImageData(s, 0 - o / 2 + r.width * .5 - t.x, 0 - o / 2 + r.height * .5 - t.y), i.toDataURL(`image/jpeg`)
}, Oe = 2, ke = e => {
    let [t, n] = (0, A.useState)(e.imageUrl ? [{
        uid: r(),
        name: `Image`,
        thumbUrl: e.imageUrl,
        url: e.imageUrl
    }] : []), [i, o] = (0, A.useState)({
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }), s = ({
        fileList: e
    }) => {
        n(e)
    }, c = async e => {
        let t = e.url;
        t || (t = await new Promise(t => {
            let n = new FileReader;
            n.readAsDataURL(e.originFileObj), n.onload = () => t(n.result)
        }));
        let n = new Image;
        n.src = t;
        let r = window.open(t);
        r == null || r.document.write(n.outerHTML)
    }, l = e => {
        let t = e.type === `image/jpeg`;
        t || a.error(`You can only upload JPEG files!`);
        let n = e.size / 1024 / 1024 < Oe;
        return n || a.error(`Image must be less than ${Oe}MB!`), t && n
    }, u = e => new Promise(t => {
        let n = new FileReader;
        n.readAsDataURL(e), n.onload = () => {
            let e = n.result;
            t(e)
        }
    }), d = async () => {
        try {
            let n = await De(await u(t[0].originFileObj), i);
            e.onImageChange(n)
        } catch {
            e.onImageChange(e.imageUrl)
        }
    };
    return A.useEffect(() => {
        t.length ? d().then(e => !0).catch(e => !1) : e.onImageChange()
    }, [t.length, i]), (0, V.jsxs)(A.Fragment, {
        children: [(0, V.jsxs)(je, {
            children: [(0, V.jsxs)(Me, {
                children: [(0, V.jsx)(Pe, {
                    children: `Good Thumbnails`
                }), (0, V.jsxs)(p, {
                    className: `maxWidth`,
                    direction: `vertical`,
                    size: 10,
                    children: [(0, V.jsx)(Q, {
                        children: `Screenshot of your map`
                    }), (0, V.jsx)(Q, {
                        children: `Custom logo you designed for your map`
                    })]
                })]
            }), (0, V.jsxs)(Ne, {
                children: [(0, V.jsx)(Pe, {
                    children: `Not Allowed`
                }), (0, V.jsxs)(p, {
                    className: `maxWidth`,
                    direction: `vertical`,
                    size: 10,
                    children: [(0, V.jsx)(Q, {
                        children: `Images from other games, movies, or companies`
                    }), (0, V.jsx)(Q, {
                        children: `Memes`
                    }), (0, V.jsx)(Q, {
                        children: `Pictures of people, animals, or other real-life objects`
                    })]
                })]
            })]
        }), (0, V.jsx)(Ae, {
            children: (0, V.jsx)(we, {
                rotationSlider: !1,
                modalTitle: `Crop image`,
                aspect: 16 / 9,
                cropperProps: {
                    onCropAreaChange: (e, t) => {
                        o(t)
                    }
                },
                children: (0, V.jsx)(h, {
                    beforeUpload: l,
                    action: u,
                    listType: `picture-card`,
                    fileList: t,
                    maxCount: 1,
                    onChange: s,
                    onPreview: c,
                    accept: `image/jpeg`,
                    children: t.length ? void 0 : `+ Upload`
                })
            })
        })]
    })
}, Ae = y.div`
  width: 100%;
  .ant-upload,
  .ant-upload-list-item,
  .ant-upload-list-item-container {
    width: 100% !important;
    height: 130px !important;
  }
`, je = y.div.attrs({
    className: `maxWidth flex`
})`
  color: ${D.White};
  border-radius: 6px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 20px;
`, Me = y.div`
  width: 50%;
  background: #0a6c13;
  padding: 15px 20px;
  flex: 1;
`, Ne = y.div`
  width: 50%;
  background: #930606;
  padding: 20px;
`, Pe = y.div`
  font-weight: ${b.UltraBold};
  margin-bottom: 10px;
  font-size: 16px;
`, Q = y.div.attrs({
    className: `maxWidth`
})`
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  border-radius: 6px;
`, Fe = `https://docs.creative.gimkit.com/general/publishing/community-rules-for-publishing-with-gimkit-creative`, Ie = e => {
    let [t, r, i] = n(!1), [a] = d.useForm(), o = E(), f = e => {
        a.setFieldsValue({
            imageUrl: e
        })
    }, p = n => {
        t || (r(), C({
            event: `creative_map_published`
        }), window.addEventListener(`MAP_SAVED`, () => {
            e.handleSubmit({
                name: n.name,
                description: n.description,
                imageUrl: n.imageUrl,
                educationalRating: n.educationalRating
            }).finally(i)
        }, {
            once: !0
        }), k(O.save, {
            ignoreNotification: !0
        }))
    }, h = (0, V.jsx)(S, {
        to: Fe,
        style: {
            color: D.Yellow,
            textDecoration: `underline`
        },
        target: `_blank`,
        external: !0,
        children: `Community Guidelines`
    });
    return (0, V.jsxs)(d, {
        form: a,
        style: {
            width: `100%`
        },
        autoComplete: `off`,
        onFinish: p,
        initialValues: {
            name: e.name,
            description: e.description,
            imageUrl: e.imageUrl,
            educationalRating: e.educationalRating
        },
        children: [(0, V.jsx)($, {
            label: `Name`
        }), (0, V.jsx)(d.Item, {
            name: `name`,
            rules: [{
                required: !0,
                message: `Please input a name`
            }, {
                min: 3,
                message: `Name must be at least 3 characters long`
            }, {
                max: 32,
                message: `Name must be less than 32 characters long`
            }],
            children: (0, V.jsx)(l, {
                placeholder: `Zapper Battle`,
                maxLength: 32
            })
        }), (0, V.jsx)($, {
            label: `Description`,
            description: `Write a little bit about your map and how to play it!`
        }), (0, V.jsx)(d.Item, {
            name: `description`,
            rules: [{
                required: !0,
                message: `Please input a description`
            }, {
                min: 12,
                message: `Description must be at least 12 characters long`
            }, {
                max: 256,
                message: `Description must be less than 256 characters long`
            }],
            children: (0, V.jsx)(l, {
                placeholder: `Two teams battle against one another with Zappers. The team with the most knockouts wins!`,
                maxLength: 256
            })
        }), (0, V.jsx)($, {
            label: `Thumbnail`,
            description: `Upload an image to highlight your map.`
        }), (0, V.jsx)(d.Item, {
            name: `imageUrl`,
            rules: [{
                required: !0,
                message: `Please upload a thumbnail`
            }],
            children: (0, V.jsx)(ke, {
                imageUrl: e.imageUrl,
                onImageChange: f
            })
        }), (0, V.jsx)($, {
            label: `Educational Rating`,
            description: `Select if your map is educational (players answer questions to progress) or just for fun`
        }), (0, V.jsx)(d.Item, {
            name: `educationalRating`,
            rules: [{
                required: !0,
                message: `Please select a rating`
            }],
            children: (0, V.jsxs)(c, {
                placeholder: `Select a rating`,
                children: [(0, V.jsx)(c.Option, {
                    value: `non-educational`,
                    children: `Just For Fun`
                }), (0, V.jsx)(c.Option, {
                    value: `educational`,
                    children: `Educational`
                })]
            })
        }), (0, V.jsx)(d.Item, {
            valuePropName: `checked`,
            name: `guidelines`,
            rules: [{
                required: !0,
                validator: (e, t) => t ? Promise.resolve() : Promise.reject(`Please accept`)
            }],
            children: (0, V.jsxs)(u, {
                children: [`I confirm that all content written/upload above and all content in my map follow the `, h]
            })
        }), (0, V.jsx)(d.Item, {
            valuePropName: `checked`,
            name: `ban`,
            rules: [{
                required: !0,
                validator: (e, t) => t ? Promise.resolve() : Promise.reject(`Please accept`)
            }],
            children: (0, V.jsxs)(u, {
                children: [`I understand that my account may be permanently banned if I violate the `, h]
            })
        }), (0, V.jsx)(x, {}), (0, V.jsx)(d.Item, {
            children: (0, V.jsx)(s, {
                type: `primary`,
                htmlType: `submit`,
                block: !0,
                style: {
                    height: 70
                },
                size: `large`,
                icon: (0, V.jsx)(g, {}),
                loading: t,
                children: e.isForUpdating ? `Save Changes` : `Publish for ${o?`Free`:`1,000 `+w.currency}`
            })
        }), !o && !e.isForUpdating ? (0, V.jsx)(`div`, {
            className: `maxWidth`,
            style: {
                marginTop: -10,
                textAlign: `center`
            },
            children: (0, V.jsxs)(m.Text, {
                children: [`Publishing is free with the`, ` `, (0, V.jsx)(S, {
                    style: {
                        color: D.Yellow,
                        textDecoration: `underline`
                    },
                    to: _,
                    target: `_blank`,
                    children: T.name
                })]
            })
        }) : null]
    })
}, $ = e => (0, V.jsxs)(`div`, {
    className: `maxWidth`,
    style: {
        marginBottom: 4
    },
    children: [(0, V.jsx)(m.Text, {
        style: {
            fontWeight: b.Bold,
            color: D.White
        },
        children: e.label
    }), e.description ? (0, V.jsx)(`div`, {
        children: (0, V.jsx)(m.Text, {
            style: {
                marginTop: 5
            },
            italic: !0,
            children: e.description
        })
    }) : null]
});
export {
    Ie as
    default
};