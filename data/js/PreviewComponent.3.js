function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, n, o) {
    Object.defineProperty(e, t, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("exv1w", (function(o, r) {
    t(o.exports, "default", (function() {
        return p
    }));
    var i = n("hxEiv"),
        a = n("fywoC");
    n("aTC01");
    var l = n("91480"),
        u = n("1djzF"),
        s = n("fgoFz"),
        c = n("3W7rN"),
        d = n("cLcBl"),
        f = n("Xyj21");
    var p = t => {
        const [n, o] = e(a).useState(!1), {
            image: r,
            audio: p,
            latex: h
        } = t;
        return (0, i.jsxs)(i.Fragment, {
            children: [r && n && (0, i.jsx)(l.default, {
                large: (0, u.getCloudinaryUrl)(r),
                onClose: () => o(!1),
                hideDownload: !0,
                showRotate: !1,
                hideZoom: !0
            }), (0, i.jsxs)(f.Container, {
                children: [p && (0, i.jsx)(d.default, {
                    audio: p
                }), r && (0, i.jsx)("img", {
                    src: (0, u.getCloudinaryUrl)(r),
                    alt: "Question",
                    onClick: () => o(!0),
                    style: {
                        maxHeight: "90%",
                        height: "90%",
                        maxWidth: "90%",
                        borderRadius: 4,
                        cursor: "pointer"
                    }
                }), h && (0, i.jsx)(c.default, {
                    text: (0, i.jsx)(s.default, {
                        latex: h
                    }),
                    noBold: !0
                })]
            })]
        })
    }
})), n.register("aTC01", (function(e, o) {
    t(e.exports, "Lightbox", (function() {
        return n("91480").default
    }));
    var r = n("fywoC"),
        i = n("91480");
    i = n("91480");

    function a(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, a(e)
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function s(e, t) {
        return !t || "object" !== a(t) && "function" != typeof t ? d(e) : t
    }

    function c(e) {
        return Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
    }

    function d(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        return Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, f(e, t)
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    r.Component
})), n.register("91480", (function(o, r) {
    t(o.exports, "default", (function() {
        return y
    }));
    var i = n("fywoC"),
        a = n("8BcbG"),
        l = n("8LsRe"),
        u = n("8bzDO");

    function s(e) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s(e)
    }

    function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function f(e, t) {
        return !t || "object" !== s(t) && "function" != typeof t ? h(e) : t
    }

    function p(e) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, p(e)
    }

    function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        return m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, m(e, t)
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var y = function(t) {
        function n() {
            var e, t;
            c(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
            return g(h(t = f(this, (e = p(n)).call.apply(e, [this].concat(r)))), "state", {
                move: {
                    x: 0,
                    y: 0
                },
                moveStart: void 0,
                zoomed: !1,
                rotationDeg: 0
            }), g(h(t), "handleKeyDown", (function(e) {
                27 !== e.keyCode && 13 !== e.keyCode || t.props.onClose()
            })), g(h(t), "getCoordinatesIfOverImg", (function(e) {
                var n = e.changedTouches ? e.changedTouches[0] : e;
                if ("react-modal-image-img" === n.target.id) {
                    var o = t.contentEl.getBoundingClientRect();
                    return {
                        x: n.clientX - o.left,
                        y: n.clientY - o.top
                    }
                }
            })), g(h(t), "handleMouseDownOrTouchStart", (function(e) {
                if (e.preventDefault(), !(e.touches && e.touches.length > 1)) {
                    var n = t.getCoordinatesIfOverImg(e);
                    n || t.props.onClose(), t.state.zoomed && t.setState((function(e) {
                        return {
                            moveStart: {
                                x: n.x - e.move.x,
                                y: n.y - e.move.y
                            }
                        }
                    }))
                }
            })), g(h(t), "handleMouseMoveOrTouchMove", (function(e) {
                if (e.preventDefault(), t.state.zoomed && t.state.moveStart && !(e.touches && e.touches.length > 1)) {
                    var n = t.getCoordinatesIfOverImg(e);
                    n && t.setState((function(e) {
                        return {
                            move: {
                                x: n.x - e.moveStart.x,
                                y: n.y - e.moveStart.y
                            }
                        }
                    }))
                }
            })), g(h(t), "handleMouseUpOrTouchEnd", (function(e) {
                t.setState({
                    moveStart: void 0
                })
            })), g(h(t), "toggleZoom", (function(e) {
                e.preventDefault(), t.setState((function(e) {
                    return {
                        zoomed: !e.zoomed,
                        move: e.zoomed ? {
                            x: 0,
                            y: 0
                        } : e.move
                    }
                }))
            })), g(h(t), "toggleRotate", (function(e) {
                e.preventDefault(), 360 !== t.state.rotationDeg ? t.setState((function(e) {
                    return {
                        rotationDeg: e.rotationDeg += 90
                    }
                })) : t.setState({
                    rotationDeg: 90
                })
            })), t
        }
        var o, r, s;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(n, t), o = n, (r = [{
            key: "componentDidMount",
            value: function() {
                document.addEventListener("keydown", this.handleKeyDown, !1)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyDown, !1)
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    n = this.props,
                    o = n.medium,
                    r = n.large,
                    s = n.alt,
                    c = n.onClose,
                    d = n.hideDownload,
                    f = n.hideZoom,
                    p = n.showRotate,
                    h = n.imageBackgroundColor,
                    m = void 0 === h ? "black" : h,
                    g = this.state,
                    y = g.move,
                    v = g.zoomed,
                    b = g.rotationDeg;
                return e(i).createElement("div", null, e(i).createElement(a.default, {
                    name: "__react_modal_image__lightbox",
                    css: (0, a.lightboxStyles)({
                        imageBackgroundColor: m
                    })
                }), e(i).createElement("div", {
                    className: "__react_modal_image__modal_container"
                }, e(i).createElement("div", {
                    className: "__react_modal_image__modal_content",
                    onMouseDown: this.handleMouseDownOrTouchStart,
                    onMouseUp: this.handleMouseUpOrTouchEnd,
                    onMouseMove: this.handleMouseMoveOrTouchMove,
                    onTouchStart: this.handleMouseDownOrTouchStart,
                    onTouchEnd: this.handleMouseUpOrTouchEnd,
                    onTouchMove: this.handleMouseMoveOrTouchMove,
                    ref: function(e) {
                        t.contentEl = e
                    }
                }, v && e(i).createElement(u.default, {
                    id: "react-modal-image-img",
                    className: "__react_modal_image__large_img",
                    src: r || o,
                    style: {
                        transform: "translate3d(-50%, -50%, 0) translate3d(".concat(y.x, "px, ").concat(y.y, "px, 0) rotate(").concat(b, "deg)"),
                        WebkitTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(y.x, "px, ").concat(y.y, "px, 0) rotate(").concat(b, "deg)"),
                        MsTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(y.x, "px, ").concat(y.y, "px, 0) rotate(").concat(b, "deg)")
                    },
                    handleDoubleClick: this.toggleZoom
                }), !v && e(i).createElement(u.default, {
                    id: "react-modal-image-img",
                    className: "__react_modal_image__medium_img",
                    src: o || r,
                    handleDoubleClick: this.toggleZoom,
                    contextMenu: !o,
                    style: {
                        transform: "translate3d(-50%, -50%, 0) rotate(".concat(b, "deg)"),
                        WebkitTransform: "translate3d(-50%, -50%, 0) rotate(".concat(b, "deg)"),
                        MsTransform: "translate3d(-50%, -50%, 0) rotate(".concat(b, "deg)")
                    }
                })), e(i).createElement(l.default, {
                    image: r || o,
                    alt: s,
                    zoomed: v,
                    toggleZoom: this.toggleZoom,
                    toggleRotate: this.toggleRotate,
                    onClose: c,
                    enableDownload: !d,
                    enableZoom: !f,
                    enableRotate: !!p
                })))
            }
        }]) && d(o.prototype, r), s && d(o, s), n
    }(i.Component)
})), n.register("8BcbG", (function(e, o) {
    function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function l(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function u(e) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, u(e)
    }

    function s(e, t) {
        return s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, s(e, t)
    }
    t(e.exports, "default", (function() {
        return c
    })), t(e.exports, "lightboxStyles", (function() {
        return d
    }));
    var c = function(e) {
            function t() {
                return i(this, t), l(this, u(t).apply(this, arguments))
            }
            var n, o, r;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && s(e, t)
            }(t, e), n = t, (o = [{
                key: "componentDidMount",
                value: function() {
                    ! function(e, t) {
                        if (!document.head.querySelector("#" + e)) {
                            var n = document.createElement("style");
                            n.textContent = t, n.type = "text/css", n.id = e, document.head.appendChild(n)
                        }
                    }(this.props.name, this.props.css)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = document.getElementById(this.props.name);
                    e.parentNode.removeChild(e)
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]) && a(n.prototype, o), r && a(n, r), t
        }(n("fywoC").Component),
        d = function(e) {
            var t = e.imageBackgroundColor;
            return "\n  body {\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_container {\n    position: fixed;\n    z-index: 5000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    touch-action: none;\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_content {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n\n  .__react_modal_image__modal_content img, \n  .__react_modal_image__modal_content svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    overflow: hidden;\n  }\n\n  .__react_modal_image__medium_img {\n    max-width: 98%;\n    max-height: 98%;\n    background-color: ".concat(t, ";\n  }\n\n  .__react_modal_image__large_img {\n    cursor: move;\n    background-color: ").concat(t, "\n  }\n\n  .__react_modal_image__icon_menu a {\n    display: inline-block;\n    font-size: 40px;\n    cursor: pointer;\n    line-height: 40px;\n    box-sizing: border-box;\n    border: none;\n    padding: 0px 5px 0px 5px;\n    margin-left: 10px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  .__react_modal_image__icon_menu {\n    display: inline-block;\n    float: right;\n  }\n\n  .__react_modal_image__caption {\n    display: inline-block;\n    color: white;\n    font-size: 120%;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .__react_modal_image__header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n  }\n")
        }
})), n.register("8LsRe", (function(o, r) {
    t(o.exports, "default", (function() {
        return l
    }));
    var i = n("fywoC"),
        a = n("6cH93"),
        l = function(t) {
            var n = t.image,
                o = t.alt,
                r = t.zoomed,
                l = t.toggleZoom,
                u = t.toggleRotate,
                s = t.onClose,
                c = t.enableDownload,
                d = t.enableZoom,
                f = t.enableRotate;
            return e(i).createElement("div", {
                className: "__react_modal_image__header"
            }, e(i).createElement("span", {
                className: "__react_modal_image__icon_menu"
            }, c && e(i).createElement("a", {
                href: n,
                download: !0
            }, e(i).createElement(a.DownloadIcon, null)), d && e(i).createElement("a", {
                onClick: l
            }, r ? e(i).createElement(a.ZoomOutIcon, null) : e(i).createElement(a.ZoomInIcon, null)), f && e(i).createElement("a", {
                onClick: u
            }, e(i).createElement(a.RotateIcon, null)), e(i).createElement("a", {
                onClick: s
            }, e(i).createElement(a.CloseIcon, null))), o && e(i).createElement("span", {
                className: "__react_modal_image__caption"
            }, o))
        }
})), n.register("6cH93", (function(o, r) {
    t(o.exports, "ZoomInIcon", (function() {
        return a
    })), t(o.exports, "ZoomOutIcon", (function() {
        return l
    })), t(o.exports, "DownloadIcon", (function() {
        return u
    })), t(o.exports, "CloseIcon", (function() {
        return s
    })), t(o.exports, "SpinnerIcon", (function() {
        return c
    })), t(o.exports, "RotateIcon", (function() {
        return d
    }));
    var i = n("fywoC"),
        a = function() {
            return e(i).createElement("svg", {
                fill: "#ffffff",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e(i).createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), e(i).createElement("path", {
                d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
            }))
        },
        l = function() {
            return e(i).createElement("svg", {
                fill: "#ffffff",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e(i).createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }), e(i).createElement("path", {
                d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
            }))
        },
        u = function() {
            return e(i).createElement("svg", {
                fill: "#ffffff",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e(i).createElement("path", {
                d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
            }), e(i).createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }))
        },
        s = function() {
            return e(i).createElement("svg", {
                fill: "#ffffff",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e(i).createElement("path", {
                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            }), e(i).createElement("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }))
        },
        c = function() {
            return e(i).createElement("svg", {
                fill: "#ffffff",
                height: "48",
                viewBox: "0 0 24 24",
                width: "48",
                xmlns: "http://www.w3.org/2000/svg"
            }, e(i).createElement("path", {
                d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
            }), e(i).createElement("path", {
                d: "M0 0h24v24H0V0z",
                fill: "none"
            }))
        },
        d = function() {
            return e(i).createElement("svg", {
                fill: "#ffffff",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e(i).createElement("path", {
                fill: "none",
                d: "M0 0h24v24H0V0zm0 0h24v24H0V0z"
            }), e(i).createElement("path", {
                d: "M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"
            }))
        }
})), n.register("8bzDO", (function(o, r) {
    t(o.exports, "default", (function() {
        return m
    }));
    var i = n("fywoC"),
        a = n("6cH93");

    function l(e) {
        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, l(e)
    }

    function u(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function c(e, t) {
        return !t || "object" !== l(t) && "function" != typeof t ? f(e) : t
    }

    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, d(e)
    }

    function f(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function p(e, t) {
        return p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, p(e, t)
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var m = function(t) {
        function n() {
            var e, t;
            u(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
            return h(f(t = c(this, (e = d(n)).call.apply(e, [this].concat(r)))), "state", {
                loading: !0
            }), h(f(t), "handleOnLoad", (function() {
                t.setState({
                    loading: !1
                })
            })), h(f(t), "handleOnContextMenu", (function(e) {
                !t.props.contextMenu && e.preventDefault()
            })), t
        }
        var o, r, l;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(n, t), o = n, (r = [{
            key: "render",
            value: function() {
                var t = this.props,
                    n = t.id,
                    o = t.className,
                    r = t.src,
                    l = t.style,
                    u = t.handleDoubleClick;
                return e(i).createElement("div", null, this.state.loading && e(i).createElement(a.SpinnerIcon, null), e(i).createElement("img", {
                    id: n,
                    className: o,
                    src: r,
                    style: l,
                    onLoad: this.handleOnLoad,
                    onDoubleClick: u,
                    onContextMenu: this.handleOnContextMenu
                }))
            }
        }]) && s(o.prototype, r), l && s(o, l), n
    }(i.Component)
})), n.register("3W7rN", (function(e, o) {
    t(e.exports, "default", (function() {
        return p
    }));
    var r = n("divCp"),
        i = n("hxEiv"),
        a = n("fywoC"),
        l = n("cHX3f"),
        u = n("2FDaO");
    let s;
    const c = {
            backgroundColor: "rgba(255,255,31, 0.21)",
            boxShadow: "10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)",
            borderRadius: 9
        },
        d = u.default.div(s || (s = (e => e)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class f extends a.Component {
        render() {
            const {
                paddingHorizontal: e,
                paddingVertical: t,
                customStyle: n,
                ...o
            } = this.props;
            return delete o.text, delete o.highlighted, (0, i.jsx)(d, {
                className: this.props.customClass,
                style: n,
                children: (0, i.jsx)(l.Textfit, {
                    style: {
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: this.props.disableHorizontalCentering ? "flex-start" : "center",
                        alignItems: "center",
                        paddingTop: t,
                        paddingBottom: t,
                        paddingLeft: this.props.paddingLeft || e,
                        paddingRight: e,
                        boxSizing: "border-box",
                        fontWeight: this.props.noBold ? "normal" : 900
                    },
                    ...o,
                    children: (0, i.jsx)("div", {
                        style: this.props.highlighted ? c : void 0,
                        children: this.props.text
                    })
                })
            })
        }
    }(0, r.default)(f, "defaultProps", {
        paddingHorizontal: "6%",
        paddingVertical: 15,
        max: 50,
        mode: "single",
        forceSingleModeWidth: !1
    });
    var p = f
})), n.register("cHX3f", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.Textfit = void 0;
    var o, r = n("ikcGe"),
        i = (o = r) && o.__esModule ? o : {
            default: o
        };
    e.exports.Textfit = i.default, e.exports.default = i.default
})), n.register("ikcGe", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        i = p(n("fywoC")),
        a = p(n("djNMu")),
        l = p(n("cr8lt")),
        u = p(n("aD4FA")),
        s = p(n("jBwOr")),
        c = p(n("kQXgQ")),
        d = p(n("leZxx")),
        f = n("fmGE2");

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function h(e, t) {
        return e.scrollWidth - 1 <= t
    }

    function m(e, t) {
        return e.scrollHeight - 1 <= t
    }
    var g = function(e) {
        function t(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = {
                fontSize: null,
                ready: !1
            }, n.handleWindowResize = function() {
                n.process()
            }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), r(t, [{
            key: "componentWillMount",
            value: function() {
                this.handleWindowResize = (0, c.default)(this.handleWindowResize, this.props.throttle)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                this.state.ready && ((0, l.default)(this.props, e) || this.process())
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, d.default)()
            }
        }, {
            key: "process",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.min,
                    o = t.max,
                    r = t.mode,
                    i = t.forceSingleModeWidth,
                    a = t.onReady,
                    l = this._parent,
                    c = this._child,
                    p = (0, f.innerWidth)(l),
                    g = (0, f.innerHeight)(l);
                if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
                else if (p <= 0 || isNaN(p)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
                else {
                    var y = (0, d.default)();
                    this.pid = y;
                    var v = function() {
                            return y !== e.pid
                        },
                        b = "multi" === r ? function() {
                            return m(c, g)
                        } : function() {
                            return h(c, p)
                        },
                        x = "multi" === r ? function() {
                            return h(c, p)
                        } : function() {
                            return m(c, g)
                        },
                        w = void 0,
                        _ = n,
                        M = o;
                    this.setState({
                        ready: !1
                    }), (0, u.default)([function(t) {
                        return (0, s.default)((function() {
                            return _ <= M
                        }), (function(t) {
                            if (v()) return t(!0);
                            w = parseInt((_ + M) / 2, 10), e.setState({
                                fontSize: w
                            }, (function() {
                                return v() ? t(!0) : (b() ? _ = w + 1 : M = w - 1, t())
                            }))
                        }), t)
                    }, function(t) {
                        return "single" === r && i || x() ? t() : (_ = n, M = w, (0, s.default)((function() {
                            return _ < M
                        }), (function(t) {
                            if (v()) return t(!0);
                            w = parseInt((_ + M) / 2, 10), e.setState({
                                fontSize: w
                            }, (function() {
                                return y !== e.pid ? t(!0) : (x() ? _ = w + 1 : M = w - 1, t())
                            }))
                        }), t))
                    }, function(t) {
                        if (w = Math.min(_, M), w = Math.max(w, n), w = Math.min(w, o), w = Math.max(w, 0), v()) return t(!0);
                        e.setState({
                            fontSize: w
                        }, t)
                    }], (function(t) {
                        t || v() || e.setState({
                            ready: !0
                        }, (function() {
                            return a(w)
                        }))
                    }))
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.children,
                    r = t.text,
                    a = t.style,
                    l = (t.min, t.max, t.mode),
                    u = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                        var n = {};
                        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
                    s = this.state,
                    c = s.fontSize,
                    d = s.ready,
                    f = o({}, a, {
                        fontSize: c
                    }),
                    p = {
                        display: d ? "block" : "inline-block"
                    };
                return "single" === l && (p.whiteSpace = "nowrap"), i.default.createElement("div", o({
                    ref: function(t) {
                        return e._parent = t
                    },
                    style: f
                }, u), i.default.createElement("div", {
                    ref: function(t) {
                        return e._child = t
                    },
                    style: p
                }, r && "function" == typeof n ? d ? n(r) : r : n))
            }
        }]), t
    }(i.default.Component);
    g.propTypes = {
        children: a.default.node,
        text: a.default.string,
        min: a.default.number,
        max: a.default.number,
        mode: a.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: a.default.bool,
        throttle: a.default.number,
        onReady: a.default.func
    }, g.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
    }, e.exports.default = g
})), n.register("cr8lt", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = function(e, t) {
        if (e === t) return !0;
        var n = Object.keys(e),
            o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var r = Object.prototype.hasOwnProperty, i = 0; i < n.length; i++)
            if (!r.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
        return !0
    }
})), n.register("aD4FA", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = function(e, t) {
        var n = [],
            o = 0,
            r = !0;

        function a(e) {
            function o() {
                t && t(e, n)
            }
            r ? i.default.nextTick(o) : o()
        }
        e.length > 0 ? e[0]((function t(r, i) {
            n.push(i), ++o >= e.length || r ? a(r) : e[o](t)
        })) : a(null);
        r = !1
    };
    var o, r = n("hgOME"),
        i = (o = r) && o.__esModule ? o : {
            default: o
        }
})), n.register("jBwOr", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = function(e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        e() ? t((function n(r) {
            for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++) a[l - 1] = arguments[l];
            r ? o(r) : e.apply(this, a) ? t(n) : o(null)
        })) : o(null)
    };
    var n = function() {}
})), n.register("kQXgQ", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = function(e, t) {
        var n = void 0,
            o = void 0,
            r = void 0,
            i = void 0,
            a = 0;

        function l() {
            i = 0, a = +new Date, r = e.apply(n, o), n = null, o = null
        }
        return function() {
            n = this, o = arguments;
            var e = new Date - a;
            return i || (e >= t ? l() : i = setTimeout(l, t - e)), r
        }
    }
})), n.register("leZxx", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = function() {
        return n++
    };
    var n = 0
})), n.register("fmGE2", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10)
    }, e.exports.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10)
    }
})), n.register("cLcBl", (function(o, r) {
    t(o.exports, "default", (function() {
        return d
    }));
    var i = n("hxEiv");
    n("fywoC");
    var a = n("lpEVe"),
        l = n("gToTC"),
        u = n("5RLZo"),
        s = n("3MLfN"),
        c = n("5xS5K");
    var d = (0, a.observer)((t => (0, i.jsx)(u.default, {
        title: (0, i.jsx)("span", {
            style: {
                fontSize: 14
            },
            children: "Replay Audio"
        }),
        placement: "left",
        children: (0, i.jsx)(l.default, {
            onClick: () => {
                c.default.playAudio(t.audio)
            },
            color: "secondary",
            style: {
                flexShrink: 0
            },
            children: (0, i.jsx)(e(s), {})
        })
    })))
})), n.register("gToTC", (function(e, o) {
    t(e.exports, "default", (function() {
        return f
    }));
    var r = n("2Af7I"),
        i = n("kqQIs"),
        a = n("fywoC");
    n("djNMu");
    var l = n("aWdbz"),
        u = n("cY4lv"),
        s = n("7s22H"),
        c = n("kYx4h"),
        d = a.forwardRef((function(e, t) {
            var n = e.children,
                o = e.classes,
                u = e.className,
                d = e.color,
                f = void 0 === d ? "default" : d,
                p = e.component,
                h = void 0 === p ? "button" : p,
                m = e.disabled,
                g = void 0 !== m && m,
                y = e.disableFocusRipple,
                v = void 0 !== y && y,
                b = e.focusVisibleClassName,
                x = e.size,
                w = void 0 === x ? "large" : x,
                _ = e.variant,
                M = void 0 === _ ? "round" : _,
                C = (0, r.default)(e, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);
            return a.createElement(s.default, (0, i.default)({
                className: (0, l.default)(o.root, u, "round" !== M && o.extended, "large" !== w && o["size".concat((0, c.default)(w))], g && o.disabled, {
                    primary: o.primary,
                    secondary: o.secondary,
                    inherit: o.colorInherit
                } [f]),
                component: h,
                disabled: g,
                focusRipple: !v,
                focusVisibleClassName: (0, l.default)(o.focusVisible, b),
                ref: t
            }, C), a.createElement("span", {
                className: o.label
            }, n))
        })),
        f = (0, u.default)((function(e) {
            return {
                root: (0, i.default)({}, e.typography.button, {
                    boxSizing: "border-box",
                    minHeight: 36,
                    transition: e.transitions.create(["background-color", "box-shadow", "border"], {
                        duration: e.transitions.duration.short
                    }),
                    borderRadius: "50%",
                    padding: 0,
                    minWidth: 0,
                    width: 56,
                    height: 56,
                    boxShadow: e.shadows[6],
                    "&:active": {
                        boxShadow: e.shadows[12]
                    },
                    color: e.palette.getContrastText(e.palette.grey[300]),
                    backgroundColor: e.palette.grey[300],
                    "&:hover": {
                        backgroundColor: e.palette.grey.A100,
                        "@media (hover: none)": {
                            backgroundColor: e.palette.grey[300]
                        },
                        "&$disabled": {
                            backgroundColor: e.palette.action.disabledBackground
                        },
                        textDecoration: "none"
                    },
                    "&$focusVisible": {
                        boxShadow: e.shadows[6]
                    },
                    "&$disabled": {
                        color: e.palette.action.disabled,
                        boxShadow: e.shadows[0],
                        backgroundColor: e.palette.action.disabledBackground
                    }
                }),
                label: {
                    width: "100%",
                    display: "inherit",
                    alignItems: "inherit",
                    justifyContent: "inherit"
                },
                primary: {
                    color: e.palette.primary.contrastText,
                    backgroundColor: e.palette.primary.main,
                    "&:hover": {
                        backgroundColor: e.palette.primary.dark,
                        "@media (hover: none)": {
                            backgroundColor: e.palette.primary.main
                        }
                    }
                },
                secondary: {
                    color: e.palette.secondary.contrastText,
                    backgroundColor: e.palette.secondary.main,
                    "&:hover": {
                        backgroundColor: e.palette.secondary.dark,
                        "@media (hover: none)": {
                            backgroundColor: e.palette.secondary.main
                        }
                    }
                },
                extended: {
                    borderRadius: 24,
                    padding: "0 16px",
                    width: "auto",
                    minHeight: "auto",
                    minWidth: 48,
                    height: 48,
                    "&$sizeSmall": {
                        width: "auto",
                        padding: "0 8px",
                        borderRadius: 17,
                        minWidth: 34,
                        height: 34
                    },
                    "&$sizeMedium": {
                        width: "auto",
                        padding: "0 16px",
                        borderRadius: 20,
                        minWidth: 40,
                        height: 40
                    }
                },
                focusVisible: {},
                disabled: {},
                colorInherit: {
                    color: "inherit"
                },
                sizeSmall: {
                    width: 40,
                    height: 40
                },
                sizeMedium: {
                    width: 48,
                    height: 48
                }
            }
        }), {
            name: "MuiFab"
        })(d)
})), n.register("7s22H", (function(e, o) {
    t(e.exports, "default", (function() {
        return m
    }));
    var r = n("kqQIs"),
        i = n("2Af7I"),
        a = n("fywoC");
    n("djNMu");
    var l = n("kK88x"),
        u = n("aWdbz"),
        s = n("eV2r6"),
        c = n("knNeR"),
        d = n("cY4lv"),
        f = n("gLAIX"),
        p = n("bRCyZ"),
        h = a.forwardRef((function(e, t) {
            var n = e.action,
                o = e.buttonRef,
                d = e.centerRipple,
                h = void 0 !== d && d,
                m = e.children,
                g = e.classes,
                y = e.className,
                v = e.component,
                b = void 0 === v ? "button" : v,
                x = e.disabled,
                w = void 0 !== x && x,
                _ = e.disableRipple,
                M = void 0 !== _ && _,
                C = e.disableTouchRipple,
                T = void 0 !== C && C,
                S = e.focusRipple,
                E = void 0 !== S && S,
                O = e.focusVisibleClassName,
                k = e.onBlur,
                R = e.onClick,
                z = e.onFocus,
                j = e.onFocusVisible,
                P = e.onKeyDown,
                I = e.onKeyUp,
                D = e.onMouseDown,
                N = e.onMouseLeave,
                H = e.onMouseUp,
                Q = e.onTouchEnd,
                V = e.onTouchMove,
                A = e.onTouchStart,
                W = e.onDragLeave,
                F = e.tabIndex,
                L = void 0 === F ? 0 : F,
                B = e.TouchRippleProps,
                U = e.type,
                X = void 0 === U ? "button" : U,
                Z = (0, i.default)(e, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]),
                q = a.useRef(null);
            var Y = a.useRef(null),
                K = a.useState(!1),
                $ = K[0],
                G = K[1];
            w && $ && G(!1);
            var J = (0, f.default)(),
                ee = J.isFocusVisible,
                te = J.onBlurVisible,
                ne = J.ref;

            function oe(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
                return (0, c.default)((function(o) {
                    return t && t(o), !n && Y.current && Y.current[e](o), !0
                }))
            }
            a.useImperativeHandle(n, (function() {
                return {
                    focusVisible: function() {
                        G(!0), q.current.focus()
                    }
                }
            }), []), a.useEffect((function() {
                $ && E && !M && Y.current.pulsate()
            }), [M, E, $]);
            var re = oe("start", D),
                ie = oe("stop", W),
                ae = oe("stop", H),
                le = oe("stop", (function(e) {
                    $ && e.preventDefault(), N && N(e)
                })),
                ue = oe("start", A),
                se = oe("stop", Q),
                ce = oe("stop", V),
                de = oe("stop", (function(e) {
                    $ && (te(e), G(!1)), k && k(e)
                }), !1),
                fe = (0, c.default)((function(e) {
                    q.current || (q.current = e.currentTarget), ee(e) && (G(!0), j && j(e)), z && z(e)
                })),
                pe = function() {
                    var e = l.findDOMNode(q.current);
                    return b && "button" !== b && !("A" === e.tagName && e.href)
                },
                he = a.useRef(!1),
                me = (0, c.default)((function(e) {
                    E && !he.current && $ && Y.current && " " === e.key && (he.current = !0, e.persist(), Y.current.stop(e, (function() {
                        Y.current.start(e)
                    }))), e.target === e.currentTarget && pe() && " " === e.key && e.preventDefault(), P && P(e), e.target === e.currentTarget && pe() && "Enter" === e.key && !w && (e.preventDefault(), R && R(e))
                })),
                ge = (0, c.default)((function(e) {
                    E && " " === e.key && Y.current && $ && !e.defaultPrevented && (he.current = !1, e.persist(), Y.current.stop(e, (function() {
                        Y.current.pulsate(e)
                    }))), I && I(e), R && e.target === e.currentTarget && pe() && " " === e.key && !e.defaultPrevented && R(e)
                })),
                ye = b;
            "button" === ye && Z.href && (ye = "a");
            var ve = {};
            "button" === ye ? (ve.type = X, ve.disabled = w) : ("a" === ye && Z.href || (ve.role = "button"), ve["aria-disabled"] = w);
            var be = (0, s.default)(o, t),
                xe = (0, s.default)(ne, q),
                we = (0, s.default)(be, xe),
                _e = a.useState(!1),
                Me = _e[0],
                Ce = _e[1];
            a.useEffect((function() {
                Ce(!0)
            }), []);
            var Te = Me && !M && !w;
            return a.createElement(ye, (0, r.default)({
                className: (0, u.default)(g.root, y, $ && [g.focusVisible, O], w && g.disabled),
                onBlur: de,
                onClick: R,
                onFocus: fe,
                onKeyDown: me,
                onKeyUp: ge,
                onMouseDown: re,
                onMouseLeave: le,
                onMouseUp: ae,
                onDragLeave: ie,
                onTouchEnd: se,
                onTouchMove: ce,
                onTouchStart: ue,
                ref: we,
                tabIndex: w ? -1 : L
            }, ve, Z), m, Te ? a.createElement(p.default, (0, r.default)({
                ref: Y,
                center: h
            }, B)) : null)
        })),
        m = (0, d.default)({
            root: {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                WebkitTapHighlightColor: "transparent",
                backgroundColor: "transparent",
                outline: 0,
                border: 0,
                margin: 0,
                borderRadius: 0,
                padding: 0,
                cursor: "pointer",
                userSelect: "none",
                verticalAlign: "middle",
                "-moz-appearance": "none",
                "-webkit-appearance": "none",
                textDecoration: "none",
                color: "inherit",
                "&::-moz-focus-inner": {
                    borderStyle: "none"
                },
                "&$disabled": {
                    pointerEvents: "none",
                    cursor: "default"
                },
                "@media print": {
                    colorAdjust: "exact"
                }
            },
            disabled: {},
            focusVisible: {}
        }, {
            name: "MuiButtonBase"
        })(h)
})), n.register("knNeR", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("fywoC"),
        i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

    function a(e) {
        var t = r.useRef(e);
        return i((function() {
            t.current = e
        })), r.useCallback((function() {
            return t.current.apply(void 0, arguments)
        }), [])
    }
})), n.register("bRCyZ", (function(e, o) {
    t(e.exports, "default", (function() {
        return p
    }));
    var r = n("kqQIs"),
        i = n("9qi0g"),
        a = n("2Af7I"),
        l = n("fywoC");
    n("djNMu");
    var u = n("9Hmab"),
        s = n("aWdbz"),
        c = n("cY4lv"),
        d = n("5HiE9"),
        f = l.forwardRef((function(e, t) {
            var n = e.center,
                o = void 0 !== n && n,
                c = e.classes,
                f = e.className,
                p = (0, a.default)(e, ["center", "classes", "className"]),
                h = l.useState([]),
                m = h[0],
                g = h[1],
                y = l.useRef(0),
                v = l.useRef(null);
            l.useEffect((function() {
                v.current && (v.current(), v.current = null)
            }), [m]);
            var b = l.useRef(!1),
                x = l.useRef(null),
                w = l.useRef(null),
                _ = l.useRef(null);
            l.useEffect((function() {
                return function() {
                    clearTimeout(x.current)
                }
            }), []);
            var M = l.useCallback((function(e) {
                    var t = e.pulsate,
                        n = e.rippleX,
                        o = e.rippleY,
                        r = e.rippleSize,
                        a = e.cb;
                    g((function(e) {
                        return [].concat((0, i.default)(e), [l.createElement(d.default, {
                            key: y.current,
                            classes: c,
                            timeout: 550,
                            pulsate: t,
                            rippleX: n,
                            rippleY: o,
                            rippleSize: r
                        })])
                    })), y.current += 1, v.current = a
                }), [c]),
                C = l.useCallback((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = t.pulsate,
                        i = void 0 !== r && r,
                        a = t.center,
                        l = void 0 === a ? o || t.pulsate : a,
                        u = t.fakeElement,
                        s = void 0 !== u && u;
                    if ("mousedown" === e.type && b.current) b.current = !1;
                    else {
                        "touchstart" === e.type && (b.current = !0);
                        var c, d, f, p = s ? null : _.current,
                            h = p ? p.getBoundingClientRect() : {
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            };
                        if (l || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) c = Math.round(h.width / 2), d = Math.round(h.height / 2);
                        else {
                            var m = e.touches ? e.touches[0] : e,
                                g = m.clientX,
                                y = m.clientY;
                            c = Math.round(g - h.left), d = Math.round(y - h.top)
                        }
                        if (l)(f = Math.sqrt((2 * Math.pow(h.width, 2) + Math.pow(h.height, 2)) / 3)) % 2 == 0 && (f += 1);
                        else {
                            var v = 2 * Math.max(Math.abs((p ? p.clientWidth : 0) - c), c) + 2,
                                C = 2 * Math.max(Math.abs((p ? p.clientHeight : 0) - d), d) + 2;
                            f = Math.sqrt(Math.pow(v, 2) + Math.pow(C, 2))
                        }
                        e.touches ? null === w.current && (w.current = function() {
                            M({
                                pulsate: i,
                                rippleX: c,
                                rippleY: d,
                                rippleSize: f,
                                cb: n
                            })
                        }, x.current = setTimeout((function() {
                            w.current && (w.current(), w.current = null)
                        }), 80)) : M({
                            pulsate: i,
                            rippleX: c,
                            rippleY: d,
                            rippleSize: f,
                            cb: n
                        })
                    }
                }), [o, M]),
                T = l.useCallback((function() {
                    C({}, {
                        pulsate: !0
                    })
                }), [C]),
                S = l.useCallback((function(e, t) {
                    if (clearTimeout(x.current), "touchend" === e.type && w.current) return e.persist(), w.current(), w.current = null, void(x.current = setTimeout((function() {
                        S(e, t)
                    })));
                    w.current = null, g((function(e) {
                        return e.length > 0 ? e.slice(1) : e
                    })), v.current = t
                }), []);
            return l.useImperativeHandle(t, (function() {
                return {
                    pulsate: T,
                    start: C,
                    stop: S
                }
            }), [T, C, S]), l.createElement("span", (0, r.default)({
                className: (0, s.default)(c.root, f),
                ref: _
            }, p), l.createElement(u.default, {
                component: null,
                exit: !0
            }, m))
        })),
        p = (0, c.default)((function(e) {
            return {
                root: {
                    overflow: "hidden",
                    pointerEvents: "none",
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: "inherit"
                },
                ripple: {
                    opacity: 0,
                    position: "absolute"
                },
                rippleVisible: {
                    opacity: .3,
                    transform: "scale(1)",
                    animation: "$enter ".concat(550, "ms ").concat(e.transitions.easing.easeInOut)
                },
                ripplePulsate: {
                    animationDuration: "".concat(e.transitions.duration.shorter, "ms")
                },
                child: {
                    opacity: 1,
                    display: "block",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "currentColor"
                },
                childLeaving: {
                    opacity: 0,
                    animation: "$exit ".concat(550, "ms ").concat(e.transitions.easing.easeInOut)
                },
                childPulsate: {
                    position: "absolute",
                    left: 0,
                    top: 0,
                    animation: "$pulsate 2500ms ".concat(e.transitions.easing.easeInOut, " 200ms infinite")
                },
                "@keyframes enter": {
                    "0%": {
                        transform: "scale(0)",
                        opacity: .1
                    },
                    "100%": {
                        transform: "scale(1)",
                        opacity: .3
                    }
                },
                "@keyframes exit": {
                    "0%": {
                        opacity: 1
                    },
                    "100%": {
                        opacity: 0
                    }
                },
                "@keyframes pulsate": {
                    "0%": {
                        transform: "scale(1)"
                    },
                    "50%": {
                        transform: "scale(0.92)"
                    },
                    "100%": {
                        transform: "scale(1)"
                    }
                }
            }
        }), {
            flip: !1,
            name: "MuiTouchRipple"
        })(l.memo(f))
})), n.register("9Hmab", (function(o, r) {
    t(o.exports, "default", (function() {
        return h
    }));
    var i = n("2zXu0"),
        a = n("kqQIs"),
        l = n("7lS6M"),
        u = n("aoNqR");
    n("djNMu");
    var s = n("fywoC"),
        c = n("bC9XV"),
        d = n("vpKe4"),
        f = Object.values || function(e) {
            return Object.keys(e).map((function(t) {
                return e[t]
            }))
        },
        p = function(t) {
            function n(e, n) {
                var o, r = (o = t.call(this, e, n) || this).handleExited.bind((0, l.default)(o));
                return o.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: r,
                    firstRender: !0
                }, o
            }(0, u.default)(n, t);
            var o = n.prototype;
            return o.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                })
            }, o.componentWillUnmount = function() {
                this.mounted = !1
            }, n.getDerivedStateFromProps = function(e, t) {
                var n = t.children,
                    o = t.handleExited;
                return {
                    children: t.firstRender ? (0, d.getInitialChildMapping)(e, o) : (0, d.getNextChildMapping)(e, n, o),
                    firstRender: !1
                }
            }, o.handleExited = function(e, t) {
                var n = (0, d.getChildMapping)(this.props.children);
                e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                    var n = (0, a.default)({}, t.children);
                    return delete n[e.key], {
                        children: n
                    }
                })))
            }, o.render = function() {
                var t = this.props,
                    n = t.component,
                    o = t.childFactory,
                    r = (0, i.default)(t, ["component", "childFactory"]),
                    a = this.state.contextValue,
                    l = f(this.state.children).map(o);
                return delete r.appear, delete r.enter, delete r.exit, null === n ? e(s).createElement(c.default.Provider, {
                    value: a
                }, l) : e(s).createElement(c.default.Provider, {
                    value: a
                }, e(s).createElement(n, r, l))
            }, n
        }(e(s).Component);
    p.propTypes = {}, p.defaultProps = {
        component: "div",
        childFactory: function(e) {
            return e
        }
    };
    var h = p
})), n.register("vpKe4", (function(e, o) {
    t(e.exports, "getChildMapping", (function() {
        return i
    })), t(e.exports, "getInitialChildMapping", (function() {
        return l
    })), t(e.exports, "getNextChildMapping", (function() {
        return u
    }));
    var r = n("fywoC");

    function i(e, t) {
        var n = Object.create(null);
        return e && r.Children.map(e, (function(e) {
            return e
        })).forEach((function(e) {
            n[e.key] = function(e) {
                return t && (0, r.isValidElement)(e) ? t(e) : e
            }(e)
        })), n
    }

    function a(e, t, n) {
        return null != n[t] ? n[t] : e.props[t]
    }

    function l(e, t) {
        return i(e.children, (function(n) {
            return (0, r.cloneElement)(n, {
                onExited: t.bind(null, n),
                in: !0,
                appear: a(n, "appear", e),
                enter: a(n, "enter", e),
                exit: a(n, "exit", e)
            })
        }))
    }

    function u(e, t, n) {
        var o = i(e.children),
            l = function(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {}, t = t || {};
                var o, r = Object.create(null),
                    i = [];
                for (var a in e) a in t ? i.length && (r[a] = i, i = []) : i.push(a);
                var l = {};
                for (var u in t) {
                    if (r[u])
                        for (o = 0; o < r[u].length; o++) {
                            var s = r[u][o];
                            l[r[u][o]] = n(s)
                        }
                    l[u] = n(u)
                }
                for (o = 0; o < i.length; o++) l[i[o]] = n(i[o]);
                return l
            }(t, o);
        return Object.keys(l).forEach((function(i) {
            var u = l[i];
            if ((0, r.isValidElement)(u)) {
                var s = i in t,
                    c = i in o,
                    d = t[i],
                    f = (0, r.isValidElement)(d) && !d.props.in;
                !c || s && !f ? c || !s || f ? c && s && (0, r.isValidElement)(d) && (l[i] = (0, r.cloneElement)(u, {
                    onExited: n.bind(null, u),
                    in: d.props.in,
                    exit: a(u, "exit", e),
                    enter: a(u, "enter", e)
                })) : l[i] = (0, r.cloneElement)(u, {
                    in: !1
                }) : l[i] = (0, r.cloneElement)(u, {
                    onExited: n.bind(null, u),
                    in: !0,
                    exit: a(u, "exit", e),
                    enter: a(u, "enter", e)
                })
            }
        })), l
    }
})), n.register("5HiE9", (function(e, o) {
    t(e.exports, "default", (function() {
        return u
    }));
    var r = n("fywoC");
    n("djNMu");
    var i = n("aWdbz"),
        a = n("knNeR"),
        l = "undefined" == typeof window ? r.useEffect : r.useLayoutEffect;
    var u = function(e) {
        var t = e.classes,
            n = e.pulsate,
            o = void 0 !== n && n,
            u = e.rippleX,
            s = e.rippleY,
            c = e.rippleSize,
            d = e.in,
            f = e.onExited,
            p = void 0 === f ? function() {} : f,
            h = e.timeout,
            m = r.useState(!1),
            g = m[0],
            y = m[1],
            v = (0, i.default)(t.ripple, t.rippleVisible, o && t.ripplePulsate),
            b = {
                width: c,
                height: c,
                top: -c / 2 + s,
                left: -c / 2 + u
            },
            x = (0, i.default)(t.child, g && t.childLeaving, o && t.childPulsate),
            w = (0, a.default)(p);
        return l((function() {
            if (!d) {
                y(!0);
                var e = setTimeout(w, h);
                return function() {
                    clearTimeout(e)
                }
            }
        }), [w, d, h]), r.createElement("span", {
            className: v,
            style: b
        }, r.createElement("span", {
            className: x
        }))
    }
})), n.register("3MLfN", (function(e, t) {
    var o = n("8IEkO");
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = void 0;
    var r = o(n("fywoC")),
        i = (0, o(n("54q3O")).default)(r.default.createElement("path", {
            d: "M8 5v14l11-7z"
        }), "PlayArrow");
    e.exports.default = i
})), n.register("54q3O", (function(e, t) {
    var o = n("8IEkO");
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.default = function(e, t) {
        var n = i.default.memo(i.default.forwardRef((function(t, n) {
            return i.default.createElement(a.default, (0, r.default)({
                ref: n
            }, t), e)
        })));
        return n.muiName = a.default.muiName, n
    };
    var r = o(n("j9T61")),
        i = o(n("fywoC")),
        a = o(n("8iY2z"))
})), n.register("j9T61", (function(e, t) {
    function n() {
        return e.exports = n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }, n.apply(this, arguments)
    }
    e.exports = n
})), n.register("8iY2z", (function(e, o) {
    var r;
    r = e.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), t(e.exports, "default", (function() {
        return n("fpXJx").default
    }));
    n("fpXJx")
})), n.register("fpXJx", (function(e, o) {
    t(e.exports, "default", (function() {
        return d
    }));
    var r = n("kqQIs"),
        i = n("2Af7I"),
        a = n("fywoC");
    n("djNMu");
    var l = n("aWdbz"),
        u = n("cY4lv"),
        s = n("kYx4h"),
        c = a.forwardRef((function(e, t) {
            var n = e.children,
                o = e.classes,
                u = e.className,
                c = e.color,
                d = void 0 === c ? "inherit" : c,
                f = e.component,
                p = void 0 === f ? "svg" : f,
                h = e.fontSize,
                m = void 0 === h ? "default" : h,
                g = e.htmlColor,
                y = e.titleAccess,
                v = e.viewBox,
                b = void 0 === v ? "0 0 24 24" : v,
                x = (0, i.default)(e, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);
            return a.createElement(p, (0, r.default)({
                className: (0, l.default)(o.root, u, "inherit" !== d && o["color".concat((0, s.default)(d))], "default" !== m && o["fontSize".concat((0, s.default)(m))]),
                focusable: "false",
                viewBox: b,
                color: g,
                "aria-hidden": !y || void 0,
                role: y ? "img" : void 0,
                ref: t
            }, x), n, y ? a.createElement("title", null, y) : null)
        }));
    c.muiName = "SvgIcon";
    var d = (0, u.default)((function(e) {
        return {
            root: {
                userSelect: "none",
                width: "1em",
                height: "1em",
                display: "inline-block",
                fill: "currentColor",
                flexShrink: 0,
                fontSize: e.typography.pxToRem(24),
                transition: e.transitions.create("fill", {
                    duration: e.transitions.duration.shorter
                })
            },
            colorPrimary: {
                color: e.palette.primary.main
            },
            colorSecondary: {
                color: e.palette.secondary.main
            },
            colorAction: {
                color: e.palette.action.active
            },
            colorError: {
                color: e.palette.error.main
            },
            colorDisabled: {
                color: e.palette.action.disabled
            },
            fontSizeInherit: {
                fontSize: "inherit"
            },
            fontSizeSmall: {
                fontSize: e.typography.pxToRem(20)
            },
            fontSizeLarge: {
                fontSize: e.typography.pxToRem(35)
            }
        }
    }), {
        name: "MuiSvgIcon"
    })(c)
})), n.register("5xS5K", (function(e, o) {
    t(e.exports, "default", (function() {
        return v
    }));
    var r = n("6yrsF"),
        i = n("1djzF"),
        a = n("lmemm"),
        l = n("7GM8t");
    const u = ["Samantha", "Victoria"],
        s = e => {
            l.default.readToMe.audioQuestion && (l.default.readToMe.audioQuestion.stop(), l.default.readToMe.audioQuestion = null), l.default.readToMe.speechQuestion && (l.default.readToMe.speechQuestion.onend = null, l.default.readToMe.speechQuestion = null), l.default.readToMe.answersTimeout && clearTimeout(l.default.readToMe.answersTimeout), l.default.readToMe.reset(e), window.speechSynthesis.cancel()
        },
        c = async e => {
            if (l.default.readToMe.enabled || !e.audio || l.default.readToMe.hasPlayedForCurrentQuestion) {
                if ("speechSynthesis" in window && l.default.readToMe.enabled && !l.default.readToMe.isCurrentlySpeaking && !l.default.readToMe.hasPlayedForCurrentQuestion) {
                    let t, n;
                    l.default.readToMe.isCurrentlySpeaking = !0, (null == e ? void 0 : e.text) && (n = new SpeechSynthesisUtterance(e.text), n.voice = await g(), n.rate = .8, l.default.readToMe.speechQuestion = n), (null == e ? void 0 : e.audio) && (t = new(0, r.Howl)({
                        src: [e.audio],
                        onplay: p,
                        onend: (null == e ? void 0 : e.text) ? () => window.speechSynthesis.speak(n) : () => m(e)
                    }), l.default.readToMe.audioQuestion = t), t && n ? (n.onstart = h, n.onend = () => m(e), t.play(), l.default.readToMe.hasPlayedForCurrentQuestion = !0) : n ? (n.onstart = h, n.onend = () => m(e), window.speechSynthesis.speak(n), l.default.readToMe.hasPlayedForCurrentQuestion = !0) : t ? (t.play(), l.default.readToMe.hasPlayedForCurrentQuestion = !0) : (m(e), l.default.readToMe.hasPlayedForCurrentQuestion = !0)
                }
            } else d(e.audio)
        }, d = e => {
            if (!l.default.readToMe.enabled || l.default.readToMe.enabled && !l.default.readToMe.currentlyPlayingQuestionAudio && !l.default.readToMe.currentlyPlayingAnswerAudio && l.default.readToMe.hasPlayedForCurrentQuestion) {
                let t = new(0, r.Howl)({
                    src: [(0, i.getCloudinaryUrl)(e)],
                    onplay: () => p(),
                    onend: () => m(),
                    html5: !0
                });
                l.default.readToMe.audioQuestion = t, t.play()
            }
        }, f = () => {
            l.default.readToMe.isCurrentlySpeaking = !1, l.default.readToMe.currentlyPlayingAnswerAudio = !1, l.default.readToMe.finishedReadingQuestion = !0, window.speechSynthesis.cancel()
        }, p = () => {
            l.default.readToMe.currentlyPlayingQuestionAudio = !0
        }, h = () => {
            l.default.readToMe.currentlyPlayingQuestionText = !0
        }, m = e => {
            l.default.readToMe.currentlyPlayingQuestionAudio = !1, l.default.readToMe.currentlyPlayingQuestionText = !1, e && (l.default.readToMe.answersTimeout = setTimeout((() => (async e => {
                l.default.readToMe.isCurrentlySpeaking = !0;
                const t = e.answers.filter((e => null != e.text));
                if (e.type === a.QuestionType.multipleChoice && t.length) {
                    l.default.readToMe.currentlyPlayingAnswerAudio = !0;
                    const n = e.answers.findIndex((e => e._id === t[t.length - 1]._id));
                    for (const [t, o] of e.answers.entries()) {
                        if (!o.text) continue;
                        let e = new SpeechSynthesisUtterance;
                        e.text = o.text, e.rate = .8, e.voice = await g(), e.onstart = () => l.default.readToMe.answerIndex = t, e.onend = () => {
                            window.speechSynthesis.pause(), setTimeout((() => window.speechSynthesis.resume()), 500)
                        }, t >= n && (e.onend = () => f()), window.speechSynthesis.speak(e)
                    }
                } else f()
            })(e)), 500))
        }, g = async () => {
            let e = await y();
            if (null == e ? void 0 : e.length) {
                const t = e.filter((e => u.includes(e.name)));
                if (t.length) return t[0]
            }
            return null
        }, y = () => new Promise((e => {
            l.default.readToMe.chosenVoice && e([l.default.readToMe.chosenVoice]);
            let t = speechSynthesis.getVoices();
            t.length ? e(t) : (e([]), speechSynthesis.onvoiceschanged = () => {
                t = speechSynthesis.getVoices(), e(t)
            })
        }));
    var v = {
        play: (e, t = !0) => {
            s(t), c(e)
        },
        stop: s,
        hasFinishedReading: () => l.default.readToMe.finishedReadingQuestion,
        playAudio: d,
        canPlayAgain: () => l.default.readToMe.canPlayAgain
    }
})), n.register("lmemm", (function(e, n) {
    let o;
    var r;
    let i;
    var a;
    t(e.exports, "QuestionType", (function() {
        return o
    })), t(e.exports, "TextInputAnswerType", (function() {
        return i
    })), (r = o || (o = {})).multipleChoice = "mc", r.textInput = "text", (a = i || (i = {}))[a.exact = 1] = "exact", a[a.contains = 2] = "contains"
})), n.register("7GM8t", (function(e, o) {
    t(e.exports, "default", (function() {
        return r
    }));
    var r = {
        readToMe: new(0, n("jQp1O").default)
    }
})), n.register("jQp1O", (function(e, o) {
    t(e.exports, "default", (function() {
        return u
    }));
    var r = n("divCp"),
        i = n("kHqmx"),
        a = n("4MuSt");
    class l {
        constructor() {
            (0, r.default)(this, "audioQuestion", null), this.enabled = !1, this.canPlayAgain = !0, this.isCurrentlySpeaking = !1, this.hasPlayedForCurrentQuestion = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.finishedReadingQuestion = !1, this.speechQuestion = null, this.chosenVoice = null, this.answersTimeout = null, this.reset = e => {
                this.isCurrentlySpeaking = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.audioQuestion = null, this.speechQuestion = null, e && (this.hasPlayedForCurrentQuestion = !1, this.finishedReadingQuestion = !1, this.canPlayAgain = !0)
            }, (0, a.makeObservable)(this)
        }
    }(0, i.__decorate)([a.observable], l.prototype, "enabled", void 0), (0, i.__decorate)([a.observable], l.prototype, "canPlayAgain", void 0), (0, i.__decorate)([a.observable], l.prototype, "isCurrentlySpeaking", void 0), (0, i.__decorate)([a.observable], l.prototype, "hasPlayedForCurrentQuestion", void 0), (0, i.__decorate)([a.observable], l.prototype, "currentlyPlayingQuestionAudio", void 0), (0, i.__decorate)([a.observable], l.prototype, "currentlyPlayingQuestionText", void 0), (0, i.__decorate)([a.observable], l.prototype, "currentlyPlayingAnswerAudio", void 0), (0, i.__decorate)([a.observable], l.prototype, "answerIndex", void 0), (0, i.__decorate)([a.observable], l.prototype, "finishedReadingQuestion", void 0), (0, i.__decorate)([a.observable], l.prototype, "speechQuestion", void 0), (0, i.__decorate)([a.observable], l.prototype, "chosenVoice", void 0), (0, i.__decorate)([a.observable], l.prototype, "answersTimeout", void 0), (0, i.__decorate)([a.action.bound], l.prototype, "reset", void 0);
    var u = l
})), n.register("Xyj21", (function(o, r) {
    t(o.exports, "Container", (function() {
        return w
    })), t(o.exports, "default", (function() {
        return x
    }));
    var i = n("hxEiv"),
        a = n("fywoC"),
        l = n("2FDaO"),
        u = n("qgeyC");
    n("aTC01");
    var s = n("91480"),
        c = n("cLcBl"),
        d = n("i08pn"),
        f = n("3W7rN"),
        p = n("1djzF"),
        h = n("fgoFz");
    let m, g, y, v, b = e => e;
    var x = t => {
        const [n, o] = e(a).useState({
            width: -1,
            height: -1
        }), [r, l] = e(a).useState(!1), {
            text: m,
            image: g,
            audio: y,
            latex: v
        } = t, {
            width: b
        } = n;
        return (0, i.jsxs)(i.Fragment, {
            children: [r && (0, i.jsx)(s.default, {
                large: (0, p.getCloudinaryUrl)(g),
                onClose: () => l(!1),
                hideDownload: !0,
                showRotate: !1,
                hideZoom: !0
            }), (0, i.jsxs)(w, {
                children: [(0, i.jsxs)(_, {
                    children: [(0, i.jsx)(u.default, {
                        bounds: !0,
                        onResize: e => {
                            e.bounds && o(e.bounds)
                        },
                        children: ({
                            measureRef: e
                        }) => (0, i.jsx)("div", {
                            ref: e,
                            style: {
                                flex: 1
                            }
                        })
                    }), y && (0, i.jsx)(c.default, {
                        audio: y
                    }), y && !g && !v && (0, i.jsx)("div", {
                        style: {
                            width: "2vw"
                        }
                    }), g && (0, i.jsx)("img", {
                        src: (0, p.getCloudinaryUrl)(g),
                        alt: "Question",
                        onClick: () => l(!0),
                        style: {
                            maxHeight: "90%",
                            maxWidth: `calc(80% - ${y?56:0}px)`,
                            marginRight: "2vw",
                            marginLeft: y ? "2vw" : 0,
                            borderRadius: 4,
                            cursor: "pointer"
                        }
                    }), v && (0, i.jsx)(M, {
                        style: {
                            width: `calc(80% - ${y?56:0}px)`,
                            marginLeft: y ? "2vw" : 0
                        },
                        children: (0, i.jsx)(f.default, {
                            text: (0, i.jsx)(h.default, {
                                latex: v
                            }),
                            noBold: !0
                        })
                    })]
                }), (0, i.jsxs)(C, {
                    children: [(0, i.jsx)(f.default, {
                        text: (0, d.parseText)(t.allowGoogleTranslate, m),
                        paddingHorizontal: "0px",
                        paddingVertical: "6%",
                        customStyle: {
                            width: `calc(100% - ${b}px)`
                        },
                        mode: "multi",
                        disableHorizontalCentering: !0,
                        highlighted: t.highlighted,
                        noBold: t.noBold
                    }), (0, i.jsx)("div", {
                        style: {
                            width: b,
                            height: "100%"
                        }
                    })]
                })]
            })]
        })
    };
    const w = l.default.div(m || (m = b`
  box-sizing: border-box;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 4%;
`)),
        _ = l.default.div(g || (g = b`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`)),
        M = l.default.div(y || (y = b`
  height: 90%;
  margin-right: 2vw;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10%;
`)),
        C = l.default.div(v || (v = b`
  width: 60%;
  display: flex;
  align-items: center;
  height: 100%;
`))
})), n.register("qgeyC", (function(o, r) {
    t(o.exports, "default", (function() {
        return x
    }));
    var i = n("kqQIs"),
        a = n("2zXu0"),
        l = n("aoNqR"),
        u = n("fywoC"),
        s = n("djNMu"),
        c = n("6rvT3"),
        d = ["client", "offset", "scroll", "bounds", "margin"];

    function f(e) {
        var t = [];
        return d.forEach((function(n) {
            e[n] && t.push(n)
        })), t
    }

    function p(e, t) {
        var n = {};
        if (t.indexOf("client") > -1 && (n.client = {
                top: e.clientTop,
                left: e.clientLeft,
                width: e.clientWidth,
                height: e.clientHeight
            }), t.indexOf("offset") > -1 && (n.offset = {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight
            }), t.indexOf("scroll") > -1 && (n.scroll = {
                top: e.scrollTop,
                left: e.scrollLeft,
                width: e.scrollWidth,
                height: e.scrollHeight
            }), t.indexOf("bounds") > -1) {
            var o = e.getBoundingClientRect();
            n.bounds = {
                top: o.top,
                right: o.right,
                bottom: o.bottom,
                left: o.left,
                width: o.width,
                height: o.height
            }
        }
        if (t.indexOf("margin") > -1) {
            var r = getComputedStyle(e);
            n.margin = {
                top: r ? parseInt(r.marginTop) : 0,
                right: r ? parseInt(r.marginRight) : 0,
                bottom: r ? parseInt(r.marginBottom) : 0,
                left: r ? parseInt(r.marginLeft) : 0
            }
        }
        return n
    }

    function h(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || window
    }
    var m, g, y, v, b = (m = function(e) {
        var t = e.measure,
            n = e.measureRef,
            o = e.contentRect;
        return (0, e.children)({
            measure: t,
            measureRef: n,
            contentRect: o
        })
    }, y = g = function(e) {
        function t() {
            for (var t, n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
            return (t = e.call.apply(e, [this].concat(o)) || this).state = {
                contentRect: {
                    entry: {},
                    client: {},
                    offset: {},
                    scroll: {},
                    bounds: {},
                    margin: {}
                }
            }, t._animationFrameID = null, t._resizeObserver = null, t._node = null, t._window = null, t.measure = function(e) {
                var n = p(t._node, v || f(t.props));
                e && (n.entry = e[0].contentRect), t._animationFrameID = t._window.requestAnimationFrame((function() {
                    null !== t._resizeObserver && (t.setState({
                        contentRect: n
                    }), "function" == typeof t.props.onResize && t.props.onResize(n))
                }))
            }, t._handleRef = function(e) {
                null !== t._resizeObserver && null !== t._node && t._resizeObserver.unobserve(t._node), t._node = e, t._window = h(t._node);
                var n = t.props.innerRef;
                n && ("function" == typeof n ? n(t._node) : n.current = t._node), null !== t._resizeObserver && null !== t._node && t._resizeObserver.observe(t._node)
            }, t
        }(0, l.default)(t, e);
        var n = t.prototype;
        return n.componentDidMount = function() {
            this._resizeObserver = null !== this._window && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new(0, c.default)(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), "function" == typeof this.props.onResize && this.props.onResize(p(this._node, v || f(this.props))))
        }, n.componentWillUnmount = function() {
            null !== this._window && this._window.cancelAnimationFrame(this._animationFrameID), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null)
        }, n.render = function() {
            var e = this.props,
                t = (e.innerRef, e.onResize, (0, a.default)(e, ["innerRef", "onResize"]));
            return (0, u.createElement)(m, (0, i.default)({}, t, {
                measureRef: this._handleRef,
                measure: this.measure,
                contentRect: this.state.contentRect
            }))
        }, t
    }(u.Component), g.propTypes = {
        client: e(s).bool,
        offset: e(s).bool,
        scroll: e(s).bool,
        bounds: e(s).bool,
        margin: e(s).bool,
        innerRef: e(s).oneOfType([e(s).object, e(s).func]),
        onResize: e(s).func
    }, y);
    b.displayName = "Measure", b.propTypes.children = e(s).func;
    var x = b
})), n.register("i08pn", (function(e, o) {
    t(e.exports, "parseText", (function() {
        return a
    })), t(e.exports, "clickHandler", (function() {
        return l
    })), t(e.exports, "isQuestionCorrect", (function() {
        return u
    }));
    var r = n("hxEiv");
    n("fywoC");
    var i = n("lmemm");
    const a = (e, t) => (0, r.jsx)("span", {
            className: e ? "" : "notranslate lang-en",
            children: t
        }),
        l = (e, t) => {
            t && (e => !e || !0 !== e.isTrusted && !1 !== e.isTrusted || e.isTrusted)(e) && t()
        },
        u = (e, t) => {
            if (!t) return !1;
            let n = !1;
            if (e) {
                e.answers.find((n => {
                    if (n.correct) {
                        if (e.type === i.QuestionType.multipleChoice) return t === n._id;
                        if (e.type === i.QuestionType.textInput) {
                            const e = s(t),
                                r = s(n.text);
                            var o;
                            const a = null !== (o = n.textType) && void 0 !== o ? o : i.TextInputAnswerType.exact;
                            if (a === i.TextInputAnswerType.exact) return e === r;
                            if (a === i.TextInputAnswerType.contains) return e.includes(r)
                        }
                    }
                    return !1
                })) && (n = !0)
            }
            return n
        },
        s = e => {
            let t = e.trim();
            return t = t.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"'), t = t.toLowerCase(), t
        }
})), n.register("5fdt2", (function(e, o) {
    t(e.exports, "default", (function() {
        return l
    }));
    var r = n("hxEiv");
    n("fywoC");
    var i = n("3W7rN"),
        a = n("i08pn");
    var l = e => (0, r.jsx)(i.default, {
        mode: "multi",
        text: (0, a.parseText)(e.allowGoogleTranslate || !1, e.text),
        highlighted: e.highlighted,
        noBold: e.noBold
    })
}));