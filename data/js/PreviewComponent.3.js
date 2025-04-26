function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, n) {
    Object.defineProperty(a, b, {
        get: c,
        set: n,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('Ez+ug', function(n, o) {
    b(n.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W');
    c('GdSeg');
    var f = c('lav0d'),
        g = c('2WDH6'),
        h = c('bTRJM'),
        i = c('pm/mI'),
        j = c('R2YnU'),
        k = c('Ud+L4');
    var l = b => {
        const [m, n] = a(e).useState(!1), {
            image: o,
            audio: p,
            latex: q
        } = r;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                o && m && (0, d.jsx)(f.default, {
                    large: (0, g.getCloudinaryUrl)(o),
                    onClose: () => n(!1),
                    hideDownload: !0,
                    showRotate: !1,
                    hideZoom: !0
                }),
                (0, d.jsxs)(k.Container, {
                    children: [
                        p && (0, d.jsx)(j.default, {
                            audio: p
                        }),
                        o && (0, d.jsx)('img', {
                            src: (0, g.getCloudinaryUrl)(o),
                            alt: 'Question',
                            onClick: () => n(!0),
                            style: {
                                maxHeight: '90%',
                                height: '90%',
                                maxWidth: '90%',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }
                        }),
                        q && (0, d.jsx)(i.default, {
                            text: (0, d.jsx)(h.default, {
                                latex: q
                            }),
                            noBold: !0
                        })
                    ]
                })
            ]
        });
    };
}), c.register('GdSeg', function(a, j) {
    b(a.exports, 'Lightbox', function() {
        return c('lav0d').default;
    });
    var d = c('uPP4W'),
        e = c('lav0d');
    e = c('lav0d');

    function f(a) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, f(a);
    }

    function g(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function h(a, b) {
        for (var i = 0; i < b.length; i++) {
            var j = b[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(a, j.key, j);
        }
    }

    function i(a, b) {
        return !b || 'object' !== f(b) && 'function' != typeof b ? k(a) : b;
    }

    function j(a) {
        return Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, j(a);
    }

    function k(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }

    function l(a, b) {
        return Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, l(a, b);
    }

    function m(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    d.Component;
}), c.register('lav0d', function(l, u) {
    b(l.exports, 'default', function() {
        return p;
    });
    var d = c('uPP4W'),
        e = c('FL6M9'),
        f = c('CAmCy'),
        g = c('t6j+z');

    function h(a) {
        return h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, h(a);
    }

    function i(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function j(a, b) {
        for (var k = 0; k < b.length; k++) {
            var l = b[k];
            l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(a, l.key, l);
        }
    }

    function k(a, b) {
        return !b || 'object' !== h(b) && 'function' != typeof b ? m(a) : b;
    }

    function l(a) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, l(a);
    }

    function m(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }

    function n(a, b) {
        return n = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, n(a, b);
    }

    function o(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    var p = function(b) {
        function q() {
            var r, s;
            i(this, q);
            for (var t = arguments.length, u = new Array(t), v = 0; v < t; v++)
                u[v] = arguments[v];
            return o(m(s = k(this, (r = l(q)).call.apply(r, [this].concat(u)))), 'state', {
                move: {
                    x: 0,
                    y: 0
                },
                moveStart: void 0,
                zoomed: !1,
                rotationDeg: 0
            }), o(m(s), 'handleKeyDown', function(r) {
                27 !== r.keyCode && 13 !== r.keyCode || s.props.onClose();
            }), o(m(s), 'getCoordinatesIfOverImg', function(r) {
                var w = r.changedTouches ? r.changedTouches[0] : r;
                if ('react-modal-image-img' === w.target.id) {
                    var x = s.contentEl.getBoundingClientRect();
                    return {
                        x: w.clientX - x.left,
                        y: w.clientY - x.top
                    };
                }
            }), o(m(s), 'handleMouseDownOrTouchStart', function(r) {
                if (r.preventDefault(), !(r.touches && r.touches.length > 1)) {
                    var w = s.getCoordinatesIfOverImg(r);
                    w || s.props.onClose(), s.state.zoomed && s.setState(function(r) {
                        return {
                            moveStart: {
                                x: w.x - r.move.x,
                                y: w.y - r.move.y
                            }
                        };
                    });
                }
            }), o(m(s), 'handleMouseMoveOrTouchMove', function(r) {
                if (r.preventDefault(), s.state.zoomed && s.state.moveStart && !(r.touches && r.touches.length > 1)) {
                    var w = s.getCoordinatesIfOverImg(r);
                    w && s.setState(function(r) {
                        return {
                            move: {
                                x: w.x - r.moveStart.x,
                                y: w.y - r.moveStart.y
                            }
                        };
                    });
                }
            }), o(m(s), 'handleMouseUpOrTouchEnd', function(r) {
                s.setState({
                    moveStart: void 0
                });
            }), o(m(s), 'toggleZoom', function(r) {
                r.preventDefault(), s.setState(function(r) {
                    return {
                        zoomed: !r.zoomed,
                        move: r.zoomed ? {
                            x: 0,
                            y: 0
                        } : r.move
                    };
                });
            }), o(m(s), 'toggleRotate', function(r) {
                r.preventDefault(), 360 !== s.state.rotationDeg ? s.setState(function(r) {
                    return {
                        rotationDeg: r.rotationDeg += 90
                    };
                }) : s.setState({
                    rotationDeg: 90
                });
            }), s;
        }
        var r, s, t;
        return function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && n(a, b);
        }(q, b), r = q, (s = [{
                key: 'componentDidMount',
                value: function() {
                    document.addEventListener('keydown', this.handleKeyDown, !1);
                }
            },
            {
                key: 'componentWillUnmount',
                value: function() {
                    document.removeEventListener('keydown', this.handleKeyDown, !1);
                }
            },
            {
                key: 'render',
                value: function() {
                    var u = this,
                        v = this.props,
                        w = v.medium,
                        x = v.large,
                        y = v.alt,
                        z = v.onClose,
                        A = v.hideDownload,
                        B = v.hideZoom,
                        C = v.showRotate,
                        D = v.imageBackgroundColor,
                        E = void 0 === D ? 'black' : D,
                        F = this.state,
                        G = F.move,
                        H = F.zoomed,
                        I = F.rotationDeg;
                    return a(d).createElement('div', null, a(d).createElement(e.default, {
                        name: '__react_modal_image__lightbox',
                        css: (0, e.lightboxStyles)({
                            imageBackgroundColor: E
                        })
                    }), a(d).createElement('div', {
                        className: '__react_modal_image__modal_container'
                    }, a(d).createElement('div', {
                        className: '__react_modal_image__modal_content',
                        onMouseDown: this.handleMouseDownOrTouchStart,
                        onMouseUp: this.handleMouseUpOrTouchEnd,
                        onMouseMove: this.handleMouseMoveOrTouchMove,
                        onTouchStart: this.handleMouseDownOrTouchStart,
                        onTouchEnd: this.handleMouseUpOrTouchEnd,
                        onTouchMove: this.handleMouseMoveOrTouchMove,
                        ref: function(a) {
                            u.contentEl = a;
                        }
                    }, H && a(d).createElement(g.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__large_img',
                        src: x || w,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) translate3d('.concat(G.x, 'px, ').concat(G.y, 'px, 0) rotate(').concat(I, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(G.x, 'px, ').concat(G.y, 'px, 0) rotate(').concat(I, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(G.x, 'px, ').concat(G.y, 'px, 0) rotate(').concat(I, 'deg)')
                        },
                        handleDoubleClick: this.toggleZoom
                    }), !H && a(d).createElement(g.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__medium_img',
                        src: w || x,
                        handleDoubleClick: this.toggleZoom,
                        contextMenu: !w,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) rotate('.concat(I, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(I, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(I, 'deg)')
                        }
                    })), a(d).createElement(f.default, {
                        image: x || w,
                        alt: y,
                        zoomed: H,
                        toggleZoom: this.toggleZoom,
                        toggleRotate: this.toggleRotate,
                        onClose: z,
                        enableDownload: !A,
                        enableZoom: !B,
                        enableRotate: !!C
                    })));
                }
            }
        ]) && j(r.prototype, s), t && j(r, t), q;
    }(d.Component);
}), c.register('FL6M9', function(a, h) {
    function d(a) {
        return d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, d(a);
    }

    function e(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function f(a, b) {
        for (var g = 0; g < b.length; g++) {
            var h = b[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(a, h.key, h);
        }
    }

    function g(a, b) {
        return !b || 'object' !== d(b) && 'function' != typeof b ? function(a) {
            if (void 0 === a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return a;
        }(a) : b;
    }

    function h(a) {
        return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, h(a);
    }

    function i(a, b) {
        return i = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, i(a, b);
    }
    b(a.exports, 'default', function() {
        return j;
    }), b(a.exports, 'lightboxStyles', function() {
        return k;
    });
    var j = function(a) {
            function k() {
                return e(this, k), g(this, h(k).apply(this, arguments));
            }
            var l, m, n;
            return function(a, k) {
                if ('function' != typeof k && null !== k)
                    throw new TypeError('Super expression must either be null or a function');
                a.prototype = Object.create(k && k.prototype, {
                    constructor: {
                        value: a,
                        writable: !0,
                        configurable: !0
                    }
                }), k && i(a, k);
            }(k, a), l = k, (m = [{
                    key: 'componentDidMount',
                    value: function() {
                        ! function(a, k) {
                            if (!document.head.querySelector('#' + a)) {
                                var o = document.createElement('style');
                                o.textContent = k, o.type = 'text/css', o.id = a, document.head.appendChild(o);
                            }
                        }(this.props.name, this.props.css);
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function() {
                        var o = document.getElementById(this.props.name);
                        o.parentNode.removeChild(o);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return null;
                    }
                }
            ]) && f(l.prototype, m), n && f(l, n), k;
        }(c('uPP4W').Component),
        k = function(a) {
            var l = a.imageBackgroundColor;
            return '\n  body {\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_container {\n    position: fixed;\n    z-index: 5000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    touch-action: none;\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_content {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n\n  .__react_modal_image__modal_content img, \n  .__react_modal_image__modal_content svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    overflow: hidden;\n  }\n\n  .__react_modal_image__medium_img {\n    max-width: 98%;\n    max-height: 98%;\n    background-color: '.concat(l, ';\n  }\n\n  .__react_modal_image__large_img {\n    cursor: move;\n    background-color: ').concat(l, '\n  }\n\n  .__react_modal_image__icon_menu a {\n    display: inline-block;\n    font-size: 40px;\n    cursor: pointer;\n    line-height: 40px;\n    box-sizing: border-box;\n    border: none;\n    padding: 0px 5px 0px 5px;\n    margin-left: 10px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  .__react_modal_image__icon_menu {\n    display: inline-block;\n    float: right;\n  }\n\n  .__react_modal_image__caption {\n    display: inline-block;\n    color: white;\n    font-size: 120%;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .__react_modal_image__header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n  }\n');
        };
}), c.register('CAmCy', function(h, i) {
    b(h.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('/Vqdv'),
        f = function(b) {
            var g = b.image,
                h = b.alt,
                i = b.zoomed,
                j = b.toggleZoom,
                k = b.toggleRotate,
                l = b.onClose,
                m = b.enableDownload,
                n = b.enableZoom,
                o = b.enableRotate;
            return a(d).createElement('div', {
                className: '__react_modal_image__header'
            }, a(d).createElement('span', {
                className: '__react_modal_image__icon_menu'
            }, m && a(d).createElement('a', {
                href: g,
                download: !0
            }, a(d).createElement(e.DownloadIcon, null)), n && a(d).createElement('a', {
                onClick: j
            }, i ? a(d).createElement(e.ZoomOutIcon, null) : a(d).createElement(e.ZoomInIcon, null)), o && a(d).createElement('a', {
                onClick: k
            }, a(d).createElement(e.RotateIcon, null)), a(d).createElement('a', {
                onClick: l
            }, a(d).createElement(e.CloseIcon, null))), h && a(d).createElement('span', {
                className: '__react_modal_image__caption'
            }, h));
        };
}), c.register('/Vqdv', function(j, s) {
    b(j.exports, 'ZoomInIcon', function() {
        return e;
    }), b(j.exports, 'ZoomOutIcon', function() {
        return f;
    }), b(j.exports, 'DownloadIcon', function() {
        return g;
    }), b(j.exports, 'CloseIcon', function() {
        return h;
    }), b(j.exports, 'SpinnerIcon', function() {
        return i;
    }), b(j.exports, 'RotateIcon', function() {
        return j;
    });
    var d = c('uPP4W'),
        e = function() {
            return a(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }), a(d).createElement('path', {
                d: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'
            }));
        },
        f = function() {
            return a(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }), a(d).createElement('path', {
                d: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z'
            }));
        },
        g = function() {
            return a(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(d).createElement('path', {
                d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'
            }), a(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }));
        },
        h = function() {
            return a(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(d).createElement('path', {
                d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
            }), a(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }));
        },
        i = function() {
            return a(d).createElement('svg', {
                fill: '#ffffff',
                height: '48',
                viewBox: '0 0 24 24',
                width: '48',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(d).createElement('path', {
                d: 'M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z'
            }), a(d).createElement('path', {
                d: 'M0 0h24v24H0V0z',
                fill: 'none'
            }));
        },
        j = function() {
            return a(d).createElement('svg', {
                fill: '#ffffff',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(d).createElement('path', {
                fill: 'none',
                d: 'M0 0h24v24H0V0zm0 0h24v24H0V0z'
            }), a(d).createElement('path', {
                d: 'M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z'
            }));
        };
}), c.register('t6j+z', function(j, s) {
    b(j.exports, 'default', function() {
        return n;
    });
    var d = c('uPP4W'),
        e = c('/Vqdv');

    function f(a) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, f(a);
    }

    function g(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }

    function h(a, b) {
        for (var i = 0; i < b.length; i++) {
            var j = b[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(a, j.key, j);
        }
    }

    function i(a, b) {
        return !b || 'object' !== f(b) && 'function' != typeof b ? k(a) : b;
    }

    function j(a) {
        return j = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, j(a);
    }

    function k(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }

    function l(a, b) {
        return l = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, l(a, b);
    }

    function m(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    var n = function(b) {
        function o() {
            var p, q;
            g(this, o);
            for (var r = arguments.length, s = new Array(r), t = 0; t < r; t++)
                s[t] = arguments[t];
            return m(k(q = i(this, (p = j(o)).call.apply(p, [this].concat(s)))), 'state', {
                loading: !0
            }), m(k(q), 'handleOnLoad', function() {
                q.setState({
                    loading: !1
                });
            }), m(k(q), 'handleOnContextMenu', function(p) {
                !q.props.contextMenu && p.preventDefault();
            }), q;
        }
        var p, q, r;
        return function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function');
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    writable: !0,
                    configurable: !0
                }
            }), b && l(a, b);
        }(o, b), p = o, (q = [{
            key: 'render',
            value: function() {
                var s = this.props,
                    t = s.id,
                    u = s.className,
                    v = s.src,
                    w = s.style,
                    x = s.handleDoubleClick;
                return a(d).createElement('div', null, this.state.loading && a(d).createElement(e.SpinnerIcon, null), a(d).createElement('img', {
                    id: t,
                    className: u,
                    src: v,
                    style: w,
                    onLoad: this.handleOnLoad,
                    onDoubleClick: x,
                    onContextMenu: this.handleOnContextMenu
                }));
            }
        }]) && h(p.prototype, q), r && h(p, r), o;
    }(d.Component);
}), c.register('pm/mI', function(a, p) {
    b(a.exports, 'default', function() {
        return m;
    });
    var d = c('UM8oI'),
        e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('iVIaF'),
        h = c('h99Nu');
    let i;
    const j = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        },
        k = h.default.div(i || (i = (a => a)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class l extends f.Component {
            render() {
                const {
                    paddingHorizontal: m,
                    paddingVertical: n,
                    customStyle: o,
                    ...p
                } = this.props;
                return delete p.text, delete p.highlighted, (0, e.jsx)(k, {
                    className: this.props.customClass,
                    style: o,
                    children: (0, e.jsx)(g.Textfit, {
                        style: {
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            justifyContent: this.props.disableHorizontalCentering ? 'flex-start' : 'center',
                            alignItems: 'center',
                            paddingTop: n,
                            paddingBottom: n,
                            paddingLeft: this.props.paddingLeft || m,
                            paddingRight: m,
                            boxSizing: 'border-box',
                            fontWeight: this.props.noBold ? 'normal' : 900
                        },
                        ...p,
                        children: (0, e.jsx)('div', {
                            style: this.props.highlighted ? j : void 0,
                            children: this.props.text
                        })
                    })
                });
            }
        }
        (0, d.default)(l, 'defaultProps', {
            paddingHorizontal: '6%',
            paddingVertical: 15,
            max: 50,
            mode: 'single',
            forceSingleModeWidth: !1
        });
    var m = n;
}), c.register('iVIaF', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.Textfit = void 0;
    var d, e = c('OvUA2'),
        f = (d = e) && d.__esModule ? d : {
            default: d
        };
    a.exports.Textfit = f.default, a.exports.default = f.default;
}), c.register('OvUA2', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    });
    var d = Object.assign || function(a) {
            for (var e = 1; e < arguments.length; e++) {
                var f = arguments[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        },
        e = function() {
            function f(f, b) {
                for (var g = 0; g < b.length; g++) {
                    var h = b[g];
                    h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(f, h.key, h);
                }
            }
            return function(b, c, d) {
                return c && f(b.prototype, c), d && f(b, d), b;
            };
        }(),
        f = n(c('uPP4W')),
        g = n(c('uj3CK')),
        h = n(c('8jUXR')),
        i = n(c('pEsz+')),
        j = n(c('f7mjk')),
        k = n(c('It0Tq')),
        l = n(c('rUoqV')),
        m = c('KOgs/');

    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        };
    }

    function o(a, b) {
        return a.scrollWidth - 1 <= b;
    }

    function p(a, b) {
        return a.scrollHeight - 1 <= b;
    }
    var q = function(a) {
        function r(a) {
            ! function(a, r) {
                if (!(a instanceof r))
                    throw new TypeError('Cannot call a class as a function');
            }(this, r);
            var s = function(a, r) {
                if (!a)
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                return !r || 'object' != typeof r && 'function' != typeof r ? a : r;
            }(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, a));
            return s.state = {
                fontSize: null,
                ready: !1
            }, s.handleWindowResize = function() {
                s.process();
            }, 'perfectFit' in a && console.warn('TextFit property perfectFit has been removed.'), s;
        }
        return function(a, r) {
            if ('function' != typeof r && null !== r)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof r);
            a.prototype = Object.create(r && r.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(a, r) : a.__proto__ = r);
        }(r, a), e(r, [{
                key: 'componentWillMount',
                value: function() {
                    this.handleWindowResize = (0, k.default)(this.handleWindowResize, this.props.throttle);
                }
            },
            {
                key: 'componentDidMount',
                value: function() {
                    this.props.autoResize && window.addEventListener('resize', this.handleWindowResize), this.process();
                }
            },
            {
                key: 'componentDidUpdate',
                value: function(a) {
                    this.state.ready && ((0, h.default)(this.props, a) || this.process());
                }
            },
            {
                key: 'componentWillUnmount',
                value: function() {
                    this.props.autoResize && window.removeEventListener('resize', this.handleWindowResize), this.pid = (0, l.default)();
                }
            },
            {
                key: 'process',
                value: function() {
                    var s = this,
                        t = this.props,
                        u = t.min,
                        v = t.max,
                        w = t.mode,
                        x = t.forceSingleModeWidth,
                        y = t.onReady,
                        z = this._parent,
                        A = this._child,
                        B = (0, m.innerWidth)(z),
                        C = (0, m.innerHeight)(z);
                    if (C <= 0 || isNaN(C))
                        console.warn('Can not process element without height. Make sure the element is displayed and has a static height.');
                    else if (B <= 0 || isNaN(B))
                        console.warn('Can not process element without width. Make sure the element is displayed and has a static width.');
                    else {
                        var D = (0, l.default)();
                        this.pid = D;
                        var E = function() {
                                return D !== s.pid;
                            },
                            F = 'multi' === w ? function() {
                                return p(A, C);
                            } : function() {
                                return o(A, B);
                            },
                            G = 'multi' === w ? function() {
                                return o(A, B);
                            } : function() {
                                return p(A, C);
                            },
                            H = void 0,
                            I = J,
                            K = L;
                        this.setState({
                            ready: !1
                        }), (0, i.default)([
                            function(t) {
                                return (0, j.default)(function() {
                                    return I <= K;
                                }, function(t) {
                                    if (E())
                                        return t(!0);
                                    H = parseInt((I + K) / 2, 10), s.setState({
                                        fontSize: H
                                    }, function() {
                                        return E() ? t(!0) : (F() ? I = H + 1 : K = H - 1, t());
                                    });
                                }, t);
                            },
                            function(t) {
                                return 'single' === w && x || G() ? t() : (I = J, K = H, (0, j.default)(function() {
                                    return I < K;
                                }, function(t) {
                                    if (E())
                                        return t(!0);
                                    H = parseInt((I + K) / 2, 10), s.setState({
                                        fontSize: H
                                    }, function() {
                                        return D !== s.pid ? t(!0) : (G() ? I = H + 1 : K = H - 1, t());
                                    });
                                }, t));
                            },
                            function(t) {
                                if (H = Math.min(I, K), H = Math.max(H, J), H = Math.min(H, L), H = Math.max(H, 0), E())
                                    return t(!0);
                                s.setState({
                                    fontSize: H
                                }, t);
                            }
                        ], function(t) {
                            t || E() || s.setState({
                                ready: !0
                            }, function() {
                                return y(H);
                            });
                        });
                    }
                }
            },
            {
                key: 'render',
                value: function() {
                    var D = this,
                        E = this.props,
                        F = E.children,
                        G = E.text,
                        H = E.style,
                        I = (E.min, E.max, E.mode),
                        J = (E.forceWidth, E.forceSingleModeWidth, E.throttle, E.autoResize, E.onReady, function(D, E) {
                            var K = {};
                            for (var L in D)
                                E.indexOf(L) >= 0 || Object.prototype.hasOwnProperty.call(D, L) && (K[L] = D[L]);
                            return K;
                        }(E, [
                            'children',
                            'text',
                            'style',
                            'min',
                            'max',
                            'mode',
                            'forceWidth',
                            'forceSingleModeWidth',
                            'throttle',
                            'autoResize',
                            'onReady'
                        ])),
                        K = this.state,
                        L = K.fontSize,
                        M = K.ready,
                        N = v({}, H, {
                            fontSize: L
                        }),
                        O = {
                            display: M ? 'block' : 'inline-block'
                        };
                    return 'single' === I && (O.whiteSpace = 'nowrap'), x.default.createElement('div', v({
                        ref: function(E) {
                            return D._parent = E;
                        },
                        style: N
                    }, J), x.default.createElement('div', {
                        ref: function(E) {
                            return D._child = E;
                        },
                        style: O
                    }, G && 'function' == typeof F ? M ? F(G) : G : F));
                }
            }
        ]), r;
    }(f.default.Component);
    q.propTypes = {
        children: g.default.node,
        text: g.default.string,
        min: g.default.number,
        max: g.default.number,
        mode: g.default.oneOf([
            'single',
            'multi'
        ]),
        forceSingleModeWidth: g.default.bool,
        throttle: g.default.number,
        onReady: g.default.func
    }, q.defaultProps = {
        min: 1,
        max: 100,
        mode: 'multi',
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
    }, a.exports.default = q;
}), c.register('8jUXR', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = function(a, b) {
        if (a === b)
            return !0;
        var d = Object.keys(a),
            e = Object.keys(b);
        if (d.length !== e.length)
            return !1;
        for (var f = Object.prototype.hasOwnProperty, g = 0; g < d.length; g++)
            if (!f.call(b, d[g]) || a[d[g]] !== b[d[g]])
                return !1;
        return !0;
    };
}), c.register('pEsz+', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = function(a, b) {
        var d = [],
            e = 0,
            f = !0;

        function g(a) {
            function h() {
                b && b(a, d);
            }
            f ? f.default.nextTick(h) : h();
        }
        a.length > 0 ? a[0](function b(f, f) {
            d.push(f), ++e >= a.length || f ? g(f) : a[e](b);
        }) : g(null);
        f = !1;
    };
    var d, e = c('wpWTd'),
        f = (d = e) && d.__esModule ? d : {
            default: d
        };
}), c.register('f7mjk', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = function(a, b) {
        var d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
        a() ? b(function c(f) {
            for (var e = arguments.length, f = Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++)
                f[g - 1] = arguments[g];
            f ? d(f) : a.apply(this, f) ? b(c) : d(null);
        }) : d(null);
    };
    var d = function() {};
}), c.register('It0Tq', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = function(a, b) {
        var d = void 0,
            e = void 0,
            f = void 0,
            g = void 0,
            h = 0;

        function i() {
            g = 0, h = +new Date(), f = a.apply(d, e), d = null, e = null;
        }
        return function() {
            d = this, e = arguments;
            var j = new Date() - h;
            return g || (j >= b ? i() : g = setTimeout(i, b - j)), f;
        };
    };
}), c.register('rUoqV', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = function() {
        return c++;
    };
    var d = 0;
}), c.register('KOgs/', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.innerHeight = function(a) {
        var d = window.getComputedStyle(a, null);
        return a.clientHeight - parseInt(d.getPropertyValue('padding-top'), 10) - parseInt(d.getPropertyValue('padding-bottom'), 10);
    }, a.exports.innerWidth = function(a) {
        var d = window.getComputedStyle(a, null);
        return a.clientWidth - parseInt(d.getPropertyValue('padding-left'), 10) - parseInt(d.getPropertyValue('padding-right'), 10);
    };
}), c.register('R2YnU', function(m, d) {
    b(m.exports, 'default', function() {
        return j;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('Vlfxs'),
        f = c('2g/LK'),
        g = c('GJN+q'),
        h = c('62PaB'),
        i = c('P8qrB');
    var j = (0, e.observer)(b => (0, d.jsx)(g.default, {
        title: (0, d.jsx)('span', {
            style: {
                fontSize: 14
            },
            children: 'Replay Audio'
        }),
        placement: 'left',
        children: (0, d.jsx)(f.default, {
            onClick: () => {
                i.default.playAudio(b.audio);
            },
            color: 'secondary',
            style: {
                flexShrink: 0
            },
            children: (0, d.jsx)(a(h), {})
        })
    }));
}), c.register('2g/LK', function(a, m) {
    b(a.exports, 'default', function() {
        return p;
    });
    var d = c('lWzbN'),
        e = c('b5p1k12'),
        f = c('uPP4W');
    c('uj3CK');
    var g = c('LS7Qv'),
        h = c('knVNm'),
        i = c('8nGxX'),
        j = c('l/I4j'),
        k = f.forwardRef(function(a, b) {
            var l = a.children,
                m = a.classes,
                n = a.className,
                o = a.color,
                p = void 0 === o ? 'default' : o,
                q = a.component,
                r = void 0 === q ? 'button' : q,
                s = a.disabled,
                t = void 0 !== s && s,
                u = a.disableFocusRipple,
                v = void 0 !== u && u,
                w = a.focusVisibleClassName,
                x = a.size,
                y = void 0 === x ? 'large' : x,
                z = a.variant,
                A = void 0 === z ? 'round' : z,
                B = (0, d.default)(a, [
                    'children',
                    'classes',
                    'className',
                    'color',
                    'component',
                    'disabled',
                    'disableFocusRipple',
                    'focusVisibleClassName',
                    'size',
                    'variant'
                ]);
            return f.createElement(i.default, (0, e.default)({
                className: (0, g.default)(m.root, n, 'round' !== A && m.extended, 'large' !== y && m['size'.concat((0, j.default)(y))], t && m.disabled, {
                    primary: m.primary,
                    secondary: m.secondary,
                    inherit: m.colorInherit
                } [p]),
                component: r,
                disabled: t,
                focusRipple: !v,
                focusVisibleClassName: (0, g.default)(m.focusVisible, w),
                ref: b
            }, B), f.createElement('span', {
                className: m.label
            }, l));
        }),
        l = (0, h.default)(function(a) {
            return {
                root: (0, e.default)({}, a.typography.button, {
                    boxSizing: 'border-box',
                    minHeight: 36,
                    transition: a.transitions.create([
                        'background-color',
                        'box-shadow',
                        'border'
                    ], {
                        duration: a.transitions.duration.short
                    }),
                    borderRadius: '50%',
                    padding: 0,
                    minWidth: 0,
                    width: 56,
                    height: 56,
                    boxShadow: a.shadows[6],
                    '&:active': {
                        boxShadow: a.shadows[12]
                    },
                    color: a.palette.getContrastText(a.palette.grey[300]),
                    backgroundColor: a.palette.grey[300],
                    '&:hover': {
                        backgroundColor: a.palette.grey.A100,
                        '@media (hover: none)': {
                            backgroundColor: a.palette.grey[300]
                        },
                        '&$disabled': {
                            backgroundColor: a.palette.action.disabledBackground
                        },
                        textDecoration: 'none'
                    },
                    '&$focusVisible': {
                        boxShadow: a.shadows[6]
                    },
                    '&$disabled': {
                        color: a.palette.action.disabled,
                        boxShadow: a.shadows[0],
                        backgroundColor: a.palette.action.disabledBackground
                    }
                }),
                label: {
                    width: '100%',
                    display: 'inherit',
                    alignItems: 'inherit',
                    justifyContent: 'inherit'
                },
                primary: {
                    color: a.palette.primary.contrastText,
                    backgroundColor: a.palette.primary.main,
                    '&:hover': {
                        backgroundColor: a.palette.primary.dark,
                        '@media (hover: none)': {
                            backgroundColor: a.palette.primary.main
                        }
                    }
                },
                secondary: {
                    color: a.palette.secondary.contrastText,
                    backgroundColor: a.palette.secondary.main,
                    '&:hover': {
                        backgroundColor: a.palette.secondary.dark,
                        '@media (hover: none)': {
                            backgroundColor: a.palette.secondary.main
                        }
                    }
                },
                extended: {
                    borderRadius: 24,
                    padding: '0 16px',
                    width: 'auto',
                    minHeight: 'auto',
                    minWidth: 48,
                    height: 48,
                    '&$sizeSmall': {
                        width: 'auto',
                        padding: '0 8px',
                        borderRadius: 17,
                        minWidth: 34,
                        height: 34
                    },
                    '&$sizeMedium': {
                        width: 'auto',
                        padding: '0 16px',
                        borderRadius: 20,
                        minWidth: 40,
                        height: 40
                    }
                },
                focusVisible: {},
                disabled: {},
                colorInherit: {
                    color: 'inherit'
                },
                sizeSmall: {
                    width: 40,
                    height: 40
                },
                sizeMedium: {
                    width: 48,
                    height: 48
                }
            };
        }, {
            name: 'MuiFab'
        })(k);
}), c.register('8nGxX', function(a, p) {
    b(a.exports, 'default', function() {
        return s;
    });
    var d = c('b5p1k12'),
        e = c('lWzbN'),
        f = c('uPP4W');
    c('uj3CK');
    var g = c('nLioi'),
        h = c('LS7Qv'),
        i = c('KsiaO'),
        j = c('Knu8L'),
        k = c('knVNm'),
        l = c('eFk7f'),
        m = c('qJuRN'),
        n = f.forwardRef(function(a, b) {
            var o = a.action,
                p = a.buttonRef,
                q = a.centerRipple,
                r = void 0 !== q && q,
                s = a.children,
                t = a.classes,
                u = a.className,
                v = a.component,
                w = void 0 === v ? 'button' : v,
                x = a.disabled,
                y = void 0 !== x && x,
                z = a.disableRipple,
                A = void 0 !== z && z,
                B = a.disableTouchRipple,
                C = void 0 !== B && B,
                D = a.focusRipple,
                E = void 0 !== D && D,
                F = a.focusVisibleClassName,
                G = a.onBlur,
                H = a.onClick,
                I = a.onFocus,
                J = a.onFocusVisible,
                K = a.onKeyDown,
                L = a.onKeyUp,
                M = a.onMouseDown,
                N = a.onMouseLeave,
                O = a.onMouseUp,
                P = a.onTouchEnd,
                Q = a.onTouchMove,
                R = a.onTouchStart,
                S = a.onDragLeave,
                T = a.tabIndex,
                U = void 0 === T ? 0 : T,
                V = a.TouchRippleProps,
                W = a.type,
                X = void 0 === W ? 'button' : W,
                Y = (0, e.default)(a, [
                    'action',
                    'buttonRef',
                    'centerRipple',
                    'children',
                    'classes',
                    'className',
                    'component',
                    'disabled',
                    'disableRipple',
                    'disableTouchRipple',
                    'focusRipple',
                    'focusVisibleClassName',
                    'onBlur',
                    'onClick',
                    'onFocus',
                    'onFocusVisible',
                    'onKeyDown',
                    'onKeyUp',
                    'onMouseDown',
                    'onMouseLeave',
                    'onMouseUp',
                    'onTouchEnd',
                    'onTouchMove',
                    'onTouchStart',
                    'onDragLeave',
                    'tabIndex',
                    'TouchRippleProps',
                    'type'
                ]),
                Z = f.useRef(null);
            var $ = f.useRef(null),
                _ = f.useState(!1),
                ab = _[0],
                bb = _[1];
            y && ab && bb(!1);
            var cb = (0, l.default)(),
                db = cb.isFocusVisible,
                eb = cb.onBlurVisible,
                fb = cb.ref;

            function gb(a, b) {
                var hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
                return (0, j.default)(function(p) {
                    return b && b(p), !hb && $.current && $.current[a](p), !0;
                });
            }
            f.useImperativeHandle(o, function() {
                return {
                    focusVisible: function() {
                        bb(!0), Z.current.focus();
                    }
                };
            }, []), f.useEffect(function() {
                ab && E && !A && $.current.pulsate();
            }, [
                A,
                E,
                ab
            ]);
            var hb = gb('start', M),
                ib = gb('stop', S),
                jb = gb('stop', O),
                kb = gb('stop', function(a) {
                    ab && a.preventDefault(), N && N(a);
                }),
                lb = gb('start', R),
                mb = gb('stop', P),
                nb = gb('stop', Q),
                ob = gb('stop', function(a) {
                    ab && (eb(a), bb(!1)), G && G(a);
                }, !1),
                pb = (0, j.default)(function(a) {
                    Z.current || (Z.current = a.currentTarget), db(a) && (bb(!0), J && J(a)), I && I(a);
                }),
                qb = function() {
                    var rb = g.findDOMNode(Z.current);
                    return w && 'button' !== w && !('A' === rb.tagName && rb.href);
                },
                rb = f.useRef(!1),
                sb = (0, j.default)(function(a) {
                    E && !rb.current && ab && $.current && ' ' === a.key && (rb.current = !0, a.persist(), $.current.stop(a, function() {
                        $.current.start(a);
                    })), a.target === a.currentTarget && qb() && ' ' === a.key && a.preventDefault(), K && K(a), a.target === a.currentTarget && qb() && 'Enter' === a.key && !y && (a.preventDefault(), H && H(a));
                }),
                tb = (0, j.default)(function(a) {
                    E && ' ' === a.key && $.current && ab && !a.defaultPrevented && (rb.current = !1, a.persist(), $.current.stop(a, function() {
                        $.current.pulsate(a);
                    })), L && L(a), H && a.target === a.currentTarget && qb() && ' ' === a.key && !a.defaultPrevented && H(a);
                }),
                ub = vb;
            'button' === ub && Y.href && (ub = 'a');
            var wb = {};
            'button' === ub ? (wb.type = X, wb.disabled = y) : ('a' === ub && Y.href || (wb.role = 'button'), wb['aria-disabled'] = y);
            var xb = (0, i.default)(p, b),
                yb = (0, i.default)(fb, Z),
                zb = (0, i.default)(xb, yb),
                Ab = f.useState(!1),
                Bb = Ab[0],
                Cb = Ab[1];
            f.useEffect(function() {
                Cb(!0);
            }, []);
            var Db = Bb && !A && !y;
            return f.createElement(ub, (0, d.default)({
                className: (0, h.default)(t.root, u, ab && [
                    t.focusVisible,
                    F
                ], y && t.disabled),
                onBlur: ob,
                onClick: H,
                onFocus: pb,
                onKeyDown: sb,
                onKeyUp: tb,
                onMouseDown: hb,
                onMouseLeave: kb,
                onMouseUp: jb,
                onDragLeave: ib,
                onTouchEnd: mb,
                onTouchMove: nb,
                onTouchStart: lb,
                ref: zb,
                tabIndex: y ? -1 : U
            }, wb, Y), s, Db ? f.createElement(m.default, (0, d.default)({
                ref: $,
                center: r
            }, V)) : null);
        }),
        o = (0, k.default)({
            root: {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                WebkitTapHighlightColor: 'transparent',
                backgroundColor: 'transparent',
                outline: 0,
                border: 0,
                margin: 0,
                borderRadius: 0,
                padding: 0,
                cursor: 'pointer',
                userSelect: 'none',
                verticalAlign: 'middle',
                '-moz-appearance': 'none',
                '-webkit-appearance': 'none',
                textDecoration: 'none',
                color: 'inherit',
                '&::-moz-focus-inner': {
                    borderStyle: 'none'
                },
                '&$disabled': {
                    pointerEvents: 'none',
                    cursor: 'default'
                },
                '@media print': {
                    colorAdjust: 'exact'
                }
            },
            disabled: {},
            focusVisible: {}
        }, {
            name: 'MuiButtonBase'
        })(n);
}), c.register('Knu8L', function(a, n) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = 'undefined' != typeof window ? d.useLayoutEffect : d.useEffect;

    function f(a) {
        var g = d.useRef(a);
        return e(function() {
            g.current = a;
        }), d.useCallback(function() {
            return g.current.apply(void 0, arguments);
        }, []);
    }
}), c.register('qJuRN', function(a, n) {
    b(a.exports, 'default', function() {
        return q;
    });
    var d = c('b5p1k12'),
        e = c('h1rqk'),
        f = c('lWzbN'),
        g = c('uPP4W');
    c('uj3CK');
    var h = c('DA/U6'),
        i = c('LS7Qv'),
        j = c('knVNm'),
        k = c('x1hBV'),
        l = g.forwardRef(function(a, b) {
            var m = a.center,
                n = void 0 !== m && m,
                o = a.classes,
                p = a.className,
                q = (0, f.default)(a, [
                    'center',
                    'classes',
                    'className'
                ]),
                r = g.useState([]),
                s = r[0],
                t = r[1],
                u = g.useRef(0),
                v = g.useRef(null);
            g.useEffect(function() {
                v.current && (v.current(), v.current = null);
            }, [s]);
            var w = g.useRef(!1),
                x = g.useRef(null),
                y = g.useRef(null),
                z = g.useRef(null);
            g.useEffect(function() {
                return function() {
                    clearTimeout(x.current);
                };
            }, []);
            var A = g.useCallback(function(a) {
                    var B = a.pulsate,
                        C = a.rippleX,
                        D = a.rippleY,
                        E = a.rippleSize,
                        F = a.cb;
                    t(function(a) {
                        return [].concat((0, e.default)(a), [g.createElement(k.default, {
                            key: u.current,
                            classes: o,
                            timeout: 550,
                            pulsate: B,
                            rippleX: C,
                            rippleY: D,
                            rippleSize: E
                        })]);
                    }), u.current += 1, v.current = F;
                }, [o]),
                B = g.useCallback(function() {
                    var C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        E = arguments.length > 2 ? arguments[2] : void 0,
                        F = D.pulsate,
                        G = void 0 !== F && F,
                        H = D.center,
                        I = void 0 === H ? n || D.pulsate : H,
                        J = D.fakeElement,
                        K = void 0 !== J && J;
                    if ('mousedown' === C.type && w.current)
                        w.current = !1;
                    else {
                        'touchstart' === C.type && (w.current = !0);
                        var L, M, N, O = K ? null : z.current,
                            P = O ? O.getBoundingClientRect() : {
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            };
                        if (I || 0 === C.clientX && 0 === C.clientY || !C.clientX && !C.touches)
                            L = Math.round(P.width / 2), M = Math.round(P.height / 2);
                        else {
                            var Q = C.touches ? C.touches[0] : C,
                                R = Q.clientX,
                                S = Q.clientY;
                            L = Math.round(R - P.left), M = Math.round(S - P.top);
                        }
                        if (I)
                            (N = Math.sqrt((2 * Math.pow(P.width, 2) + Math.pow(P.height, 2)) / 3)) % 2 == 0 && (N += 1);
                        else {
                            var Q = 2 * Math.max(Math.abs((O ? O.clientWidth : 0) - L), L) + 2,
                                R = 2 * Math.max(Math.abs((O ? O.clientHeight : 0) - M), M) + 2;
                            N = Math.sqrt(Math.pow(Q, 2) + Math.pow(R, 2));
                        }
                        C.touches ? null === y.current && (y.current = function() {
                            A({
                                pulsate: G,
                                rippleX: L,
                                rippleY: M,
                                rippleSize: N,
                                cb: E
                            });
                        }, x.current = setTimeout(function() {
                            y.current && (y.current(), y.current = null);
                        }, 80)) : A({
                            pulsate: G,
                            rippleX: L,
                            rippleY: M,
                            rippleSize: N,
                            cb: E
                        });
                    }
                }, [
                    n,
                    A
                ]),
                C = g.useCallback(function() {
                    B({}, {
                        pulsate: !0
                    });
                }, [B]),
                D = g.useCallback(function(a, b) {
                    if (clearTimeout(x.current), 'touchend' === a.type && y.current)
                        return a.persist(), y.current(), y.current = null, void(x.current = setTimeout(function() {
                            D(a, b);
                        }));
                    y.current = null, t(function(a) {
                        return a.length > 0 ? a.slice(1) : a;
                    }), v.current = b;
                }, []);
            return g.useImperativeHandle(b, function() {
                return {
                    pulsate: C,
                    start: B,
                    stop: D
                };
            }, [
                C,
                B,
                D
            ]), g.createElement('span', (0, d.default)({
                className: (0, i.default)(o.root, p),
                ref: z
            }, q), g.createElement(h.default, {
                component: null,
                exit: !0
            }, s));
        }),
        m = (0, j.default)(function(a) {
            return {
                root: {
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    position: 'absolute',
                    zIndex: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    borderRadius: 'inherit'
                },
                ripple: {
                    opacity: 0,
                    position: 'absolute'
                },
                rippleVisible: {
                    opacity: 0.3,
                    transform: 'scale(1)',
                    animation: '$enter '.concat(550, 'ms ').concat(a.transitions.easing.easeInOut)
                },
                ripplePulsate: {
                    animationDuration: ''.concat(a.transitions.duration.shorter, 'ms')
                },
                child: {
                    opacity: 1,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'currentColor'
                },
                childLeaving: {
                    opacity: 0,
                    animation: '$exit '.concat(550, 'ms ').concat(a.transitions.easing.easeInOut)
                },
                childPulsate: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    animation: '$pulsate 2500ms '.concat(a.transitions.easing.easeInOut, ' 200ms infinite')
                },
                '@keyframes enter': {
                    '0%': {
                        transform: 'scale(0)',
                        opacity: 0.1
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: 0.3
                    }
                },
                '@keyframes exit': {
                    '0%': {
                        opacity: 1
                    },
                    '100%': {
                        opacity: 0
                    }
                },
                '@keyframes pulsate': {
                    '0%': {
                        transform: 'scale(1)'
                    },
                    '50%': {
                        transform: 'scale(0.92)'
                    },
                    '100%': {
                        transform: 'scale(1)'
                    }
                }
            };
        }, {
            flip: !1,
            name: 'MuiTouchRipple'
        })(g.memo(l));
}), c.register('DA/U6', function(n, o) {
    b(n.exports, 'default', function() {
        return m;
    });
    var d = c('l2czd16'),
        e = c('b5p1k12'),
        f = c('//YgM16'),
        g = c('6YDvM');
    c('uj3CK');
    var h = c('uPP4W'),
        i = c('RBdJR'),
        j = c('MB378'),
        k = Object.values || function(a) {
            return Object.keys(a).map(function(b) {
                return a[b];
            });
        },
        l = function(b) {
            function m(a, m) {
                var n, o = (n = b.call(this, a, m) || this).handleExited.bind((0, f.default)(n));
                return n.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: o,
                    firstRender: !0
                }, n;
            }
            (0, g.default)(m, b);
            var n = m.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                });
            }, n.componentWillUnmount = function() {
                this.mounted = !1;
            }, m.getDerivedStateFromProps = function(a, b) {
                var o = b.children,
                    p = b.handleExited;
                return {
                    children: b.firstRender ? (0, j.getInitialChildMapping)(a, p) : (0, j.getNextChildMapping)(a, o, p),
                    firstRender: !1
                };
            }, n.handleExited = function(a, b) {
                var o = (0, j.getChildMapping)(this.props.children);
                a.key in o || (a.props.onExited && a.props.onExited(b), this.mounted && this.setState(function(b) {
                    var p = (0, e.default)({}, b.children);
                    return delete p[a.key], {
                        children: p
                    };
                }));
            }, n.render = function() {
                var o = this.props,
                    p = o.component,
                    q = o.childFactory,
                    r = (0, d.default)(o, [
                        'component',
                        'childFactory'
                    ]),
                    s = this.state.contextValue,
                    t = k(this.state.children).map(q);
                return delete r.appear, delete r.enter, delete r.exit, null === p ? a(h).createElement(i.default.Provider, {
                    value: s
                }, t) : a(h).createElement(i.default.Provider, {
                    value: s
                }, a(h).createElement(p, r, t));
            }, m;
        }(a(h).Component);
    l.propTypes = {}, l.defaultProps = {
        component: 'div',
        childFactory: function(a) {
            return a;
        }
    };
    var m = n;
}), c.register('MB378', function(a, i) {
    b(a.exports, 'getChildMapping', function() {
        return e;
    }), b(a.exports, 'getInitialChildMapping', function() {
        return g;
    }), b(a.exports, 'getNextChildMapping', function() {
        return h;
    });
    var d = c('uPP4W');

    function e(a, b) {
        var f = Object.create(null);
        return a && d.Children.map(a, function(a) {
            return a;
        }).forEach(function(a) {
            f[a.key] = function(a) {
                return b && (0, d.isValidElement)(a) ? b(a) : a;
            }(a);
        }), f;
    }

    function f(a, b, c) {
        return null != c[b] ? c[b] : a.props[b];
    }

    function g(a, b) {
        return e(a.children, function(c) {
            return (0, d.cloneElement)(c, {
                onExited: b.bind(null, c),
                in: !0,
                appear: f(c, 'appear', a),
                enter: f(c, 'enter', a),
                exit: f(c, 'exit', a)
            });
        });
    }

    function h(a, b, c) {
        var i = e(a.children),
            j = function(a, b) {
                function k(k) {
                    return k in b ? b[k] : a[k];
                }
                a = a || {}, b = b || {};
                var l, m = Object.create(null),
                    n = [];
                for (var o in a)
                    o in b ? n.length && (m[o] = n, n = []) : n.push(o);
                var p = {};
                for (var q in b) {
                    if (m[q])
                        for (l = 0; l < m[q].length; l++) {
                            var r = m[q][l];
                            p[m[q][l]] = k(r);
                        }
                    p[q] = k(q);
                }
                for (l = 0; l < n.length; l++)
                    p[n[l]] = k(n[l]);
                return p;
            }(b, i);
        return Object.keys(j).forEach(function(e) {
            var k = j[e];
            if ((0, d.isValidElement)(k)) {
                var l = e in b,
                    m = e in i,
                    n = b[e],
                    o = (0, d.isValidElement)(n) && !n.props.in;
                !m || l && !o ? m || !l || o ? m && l && (0, d.isValidElement)(n) && (j[e] = (0, d.cloneElement)(k, {
                    onExited: c.bind(null, k),
                    in: n.props.in,
                    exit: f(k, 'exit', a),
                    enter: f(k, 'enter', a)
                })) : j[e] = (0, d.cloneElement)(k, {
                    in: !1
                }) : j[e] = (0, d.cloneElement)(k, {
                    onExited: c.bind(null, k),
                    in: !0,
                    exit: f(k, 'exit', a),
                    enter: f(k, 'enter', a)
                });
            }
        }), j;
    }
}), c.register('x1hBV', function(a, k) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('uPP4W');
    c('uj3CK');
    var e = c('LS7Qv'),
        f = c('Knu8L'),
        g = 'undefined' == typeof window ? d.useEffect : d.useLayoutEffect;
    var h = function(a) {
        var i = a.classes,
            j = a.pulsate,
            k = void 0 !== j && j,
            l = a.rippleX,
            m = a.rippleY,
            n = a.rippleSize,
            o = a.in,
            p = a.onExited,
            q = void 0 === p ? function() {} : p,
            r = a.timeout,
            s = d.useState(!1),
            t = s[0],
            u = s[1],
            v = (0, e.default)(i.ripple, i.rippleVisible, k && i.ripplePulsate),
            w = {
                width: n,
                height: n,
                top: -n / 2 + m,
                left: -n / 2 + l
            },
            x = (0, e.default)(i.child, t && i.childLeaving, k && i.childPulsate),
            y = (0, f.default)(q);
        return g(function() {
            if (!o) {
                u(!0);
                var z = setTimeout(y, r);
                return function() {
                    clearTimeout(z);
                };
            }
        }, [
            y,
            o,
            r
        ]), d.createElement('span', {
            className: v,
            style: w
        }, d.createElement('span', {
            className: x
        }));
    };
}), c.register('62PaB', function(a, b) {
    var d = c('FV1v91');
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = void 0;
    var e = d(c('uPP4W')),
        f = (0, d(c('wuu0l')).default)(e.default.createElement('path', {
            d: 'M8 5v14l11-7z'
        }), 'PlayArrow');
    a.exports.default = f;
}), c.register('wuu0l', function(a, b) {
    var d = c('FV1v91');
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.default = function(a, b) {
        var e = f.default.memo(f.default.forwardRef(function(b, e) {
            return f.default.createElement(g.default, (0, e.default)({
                ref: e
            }, b), a);
        }));
        return e.muiName = g.default.muiName, e;
    };
    var e = d(c('UxJSo')),
        f = d(c('uPP4W')),
        g = d(c('Bh56L'));
}), c.register('UxJSo', function(a, b) {
    function d() {
        return a.exports = d = Object.assign || function(a) {
            for (var e = 1; e < arguments.length; e++) {
                var f = arguments[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, arguments);
    }
    a.exports = d;
}), c.register('Bh56L', function(a, l) {
    var d;
    d = a.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), b(a.exports, 'default', function() {
        return c('3lnmR').default;
    });
    c('3lnmR');
}), c.register('3lnmR', function(a, l) {
    b(a.exports, 'default', function() {
        return o;
    });
    var d = c('b5p1k12'),
        e = c('lWzbN'),
        f = c('uPP4W');
    c('uj3CK');
    var g = c('LS7Qv'),
        h = c('knVNm'),
        i = c('l/I4j'),
        j = f.forwardRef(function(a, b) {
            var k = a.children,
                l = a.classes,
                m = a.className,
                n = a.color,
                o = void 0 === n ? 'inherit' : n,
                p = a.component,
                q = void 0 === p ? 'svg' : p,
                r = a.fontSize,
                s = void 0 === r ? 'default' : r,
                t = a.htmlColor,
                u = a.titleAccess,
                v = a.viewBox,
                w = void 0 === v ? '0 0 24 24' : v,
                x = (0, e.default)(a, [
                    'children',
                    'classes',
                    'className',
                    'color',
                    'component',
                    'fontSize',
                    'htmlColor',
                    'titleAccess',
                    'viewBox'
                ]);
            return f.createElement(q, (0, d.default)({
                className: (0, g.default)(l.root, m, 'inherit' !== o && l['color'.concat((0, i.default)(o))], 'default' !== s && l['fontSize'.concat((0, i.default)(s))]),
                focusable: 'false',
                viewBox: w,
                color: t,
                'aria-hidden': !u || void 0,
                role: u ? 'img' : void 0,
                ref: b
            }, x), k, u ? f.createElement('title', null, u) : null);
        });
    j.muiName = 'SvgIcon';
    var k = (0, h.default)(function(a) {
        return {
            root: {
                userSelect: 'none',
                width: '1em',
                height: '1em',
                display: 'inline-block',
                fill: 'currentColor',
                flexShrink: 0,
                fontSize: a.typography.pxToRem(24),
                transition: a.transitions.create('fill', {
                    duration: a.transitions.duration.shorter
                })
            },
            colorPrimary: {
                color: a.palette.primary.main
            },
            colorSecondary: {
                color: a.palette.secondary.main
            },
            colorAction: {
                color: a.palette.action.active
            },
            colorError: {
                color: a.palette.error.main
            },
            colorDisabled: {
                color: a.palette.action.disabled
            },
            fontSizeInherit: {
                fontSize: 'inherit'
            },
            fontSizeSmall: {
                fontSize: a.typography.pxToRem(20)
            },
            fontSizeLarge: {
                fontSize: a.typography.pxToRem(35)
            }
        };
    }, {
        name: 'MuiSvgIcon'
    })(j);
}), c.register('P8qrB', function(a, s) {
    b(a.exports, 'default', function() {
        return r;
    });
    var d = c('6yrsF'),
        e = c('2WDH6'),
        f = c('bfuFC'),
        g = c('l6m0e');
    const h = [
            'Samantha',
            'Victoria'
        ],
        i = a => {
            g.default.readToMe.audioQuestion && (g.default.readToMe.audioQuestion.stop(), g.default.readToMe.audioQuestion = null), g.default.readToMe.speechQuestion && (g.default.readToMe.speechQuestion.onend = null, g.default.readToMe.speechQuestion = null), g.default.readToMe.answersTimeout && clearTimeout(g.default.readToMe.answersTimeout), g.default.readToMe.reset(a), window.speechSynthesis.cancel();
        },
        j = async a => {
            if (g.default.readToMe.enabled || !a.audio || g.default.readToMe.hasPlayedForCurrentQuestion) {
                if ('speechSynthesis' in window && g.default.readToMe.enabled && !g.default.readToMe.isCurrentlySpeaking && !g.default.readToMe.hasPlayedForCurrentQuestion) {
                    let k, l;
                    g.default.readToMe.isCurrentlySpeaking = !0, (null == a ? void 0 : a.text) && (l = new SpeechSynthesisUtterance(a.text), l.voice = await p(), l.rate = 0.8, g.default.readToMe.speechQuestion = l), (null == a ? void 0 : a.audio) && (k = new(0, d.Howl)({
                        src: [a.audio],
                        onplay: m,
                        onend: (null == a ? void 0 : a.text) ? () => window.speechSynthesis.speak(l) : () => o(a)
                    }), g.default.readToMe.audioQuestion = k), k && l ? (l.onstart = n, l.onend = () => o(a), k.play(), g.default.readToMe.hasPlayedForCurrentQuestion = !0) : l ? (l.onstart = n, l.onend = () => o(a), window.speechSynthesis.speak(l), g.default.readToMe.hasPlayedForCurrentQuestion = !0) : k ? (k.play(), g.default.readToMe.hasPlayedForCurrentQuestion = !0) : (o(a), g.default.readToMe.hasPlayedForCurrentQuestion = !0);
                }
            } else
                k(a.audio);
        }, k = a => {
            if (!g.default.readToMe.enabled || g.default.readToMe.enabled && !g.default.readToMe.currentlyPlayingQuestionAudio && !g.default.readToMe.currentlyPlayingAnswerAudio && g.default.readToMe.hasPlayedForCurrentQuestion) {
                let l = new(0, d.Howl)({
                    src: [(0, e.getCloudinaryUrl)(a)],
                    onplay: () => m(),
                    onend: () => o(),
                    html5: !0
                });
                g.default.readToMe.audioQuestion = l, l.play();
            }
        }, l = () => {
            g.default.readToMe.isCurrentlySpeaking = !1, g.default.readToMe.currentlyPlayingAnswerAudio = !1, g.default.readToMe.finishedReadingQuestion = !0, window.speechSynthesis.cancel();
        }, m = () => {
            g.default.readToMe.currentlyPlayingQuestionAudio = !0;
        }, n = () => {
            g.default.readToMe.currentlyPlayingQuestionText = !0;
        }, o = a => {
            g.default.readToMe.currentlyPlayingQuestionAudio = !1, g.default.readToMe.currentlyPlayingQuestionText = !1, a && (g.default.readToMe.answersTimeout = setTimeout(() => (async a => {
                g.default.readToMe.isCurrentlySpeaking = !0;
                const p = a.answers.filter(a => null != a.text);
                if (a.type === f.QuestionType.multipleChoice && p.length) {
                    g.default.readToMe.currentlyPlayingAnswerAudio = !0;
                    const q = a.answers.findIndex(a => a._id === p[p.length - 1]._id);
                    for (const [r, s] of a.answers.entries()) {
                        if (!s.text)
                            continue;
                        let t = new SpeechSynthesisUtterance();
                        t.text = s.text, t.rate = 0.8, t.voice = await p(), t.onstart = () => g.default.readToMe.answerIndex = r, t.onend = () => {
                            window.speechSynthesis.pause(), setTimeout(() => window.speechSynthesis.resume(), 500);
                        }, r >= q && (t.onend = () => l()), window.speechSynthesis.speak(t);
                    }
                } else
                    l();
            })(a), 500));
        }, p = async () => {
            let q = await q();
            if (null == q ? void 0 : q.length) {
                const r = q.filter(q => h.includes(q.name));
                if (r.length)
                    return r[0];
            }
            return null;
        }, q = () => new Promise(a => {
            g.default.readToMe.chosenVoice && a([g.default.readToMe.chosenVoice]);
            let r = speechSynthesis.getVoices();
            r.length ? a(r) : (a([]), speechSynthesis.onvoiceschanged = () => {
                r = speechSynthesis.getVoices(), a(r);
            });
        });
    var r = {
        play: (a, s = !0) => {
            i(s), j(a);
        },
        stop: i,
        hasFinishedReading: () => g.default.readToMe.finishedReadingQuestion,
        playAudio: k,
        canPlayAgain: () => g.default.readToMe.canPlayAgain
    };
}), c.register('bfuFC', function(a, c) {
    let d;
    var e;
    let f;
    var g;
    b(a.exports, 'QuestionType', function() {
        return d;
    }), b(a.exports, 'TextInputAnswerType', function() {
        return f;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {}))[g.exact = 1] = 'exact', g[g.contains = 2] = 'contains';
}), c.register('l6m0e', function(a, u) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = {
        readToMe: new(0, (c('5eQEo')).default)()
    };
}), c.register('5eQEo', function(a, u) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('UM8oI'),
        e = c('6gioo'),
        f = c('UnUp5');
    class g {
        constructor() {
            (0, d.default)(this, 'audioQuestion', null), this.enabled = !1, this.canPlayAgain = !0, this.isCurrentlySpeaking = !1, this.hasPlayedForCurrentQuestion = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.finishedReadingQuestion = !1, this.speechQuestion = null, this.chosenVoice = null, this.answersTimeout = null, this.reset = a => {
                this.isCurrentlySpeaking = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.audioQuestion = null, this.speechQuestion = null, a && (this.hasPlayedForCurrentQuestion = !1, this.finishedReadingQuestion = !1, this.canPlayAgain = !0);
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'enabled', void 0), (0, e.__decorate)([f.observable], g.prototype, 'canPlayAgain', void 0), (0, e.__decorate)([f.observable], g.prototype, 'isCurrentlySpeaking', void 0), (0, e.__decorate)([f.observable], g.prototype, 'hasPlayedForCurrentQuestion', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentlyPlayingQuestionAudio', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentlyPlayingQuestionText', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentlyPlayingAnswerAudio', void 0), (0, e.__decorate)([f.observable], g.prototype, 'answerIndex', void 0), (0, e.__decorate)([f.observable], g.prototype, 'finishedReadingQuestion', void 0), (0, e.__decorate)([f.observable], g.prototype, 'speechQuestion', void 0), (0, e.__decorate)([f.observable], g.prototype, 'chosenVoice', void 0), (0, e.__decorate)([f.observable], g.prototype, 'answersTimeout', void 0), (0, e.__decorate)([f.action.bound], g.prototype, 'reset', void 0);
    var h = i;
}), c.register('Ud+L4', function(u, v) {
    b(u.exports, 'Container', function() {
        return t;
    }), b(u.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('yN8+W');
    c('GdSeg');
    var h = c('lav0d'),
        i = c('R2YnU'),
        j = c('pd99Q'),
        k = c('pm/mI'),
        l = c('2WDH6'),
        m = c('bTRJM');
    let n, o, p, q, r = a => a;
    var s = b => {
        const [t, u] = a(e).useState({
            width: -1,
            height: -1
        }), [v, w] = a(e).useState(!1), {
            text: x,
            image: y,
            audio: z,
            latex: A
        } = B, {
            width: C
        } = D;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                v && (0, d.jsx)(h.default, {
                    large: (0, l.getCloudinaryUrl)(y),
                    onClose: () => w(!1),
                    hideDownload: !0,
                    showRotate: !1,
                    hideZoom: !0
                }),
                (0, d.jsxs)(t, {
                    children: [
                        (0, d.jsxs)(u, {
                            children: [
                                (0, d.jsx)(g.default, {
                                    bounds: !0,
                                    onResize: a => {
                                        a.bounds && u(a.bounds);
                                    },
                                    children: ({
                                        measureRef: E
                                    }) => (0, d.jsx)('div', {
                                        ref: E,
                                        style: {
                                            flex: 1
                                        }
                                    })
                                }),
                                z && (0, d.jsx)(i.default, {
                                    audio: z
                                }),
                                z && !y && !A && (0, d.jsx)('div', {
                                    style: {
                                        width: '2vw'
                                    }
                                }),
                                y && (0, d.jsx)('img', {
                                    src: (0, l.getCloudinaryUrl)(y),
                                    alt: 'Question',
                                    onClick: () => w(!0),
                                    style: {
                                        maxHeight: '90%',
                                        maxWidth: `calc(80% - ${ z ? 56 : 0 }px)`,
                                        marginRight: '2vw',
                                        marginLeft: z ? '2vw' : 0,
                                        borderRadius: 4,
                                        cursor: 'pointer'
                                    }
                                }),
                                A && (0, d.jsx)(v, {
                                    style: {
                                        width: `calc(80% - ${ z ? 56 : 0 }px)`,
                                        marginLeft: z ? '2vw' : 0
                                    },
                                    children: (0, d.jsx)(k.default, {
                                        text: (0, d.jsx)(m.default, {
                                            latex: A
                                        }),
                                        noBold: !0
                                    })
                                })
                            ]
                        }),
                        (0, d.jsxs)(w, {
                            children: [
                                (0, d.jsx)(k.default, {
                                    text: (0, j.parseText)(B.allowGoogleTranslate, x),
                                    paddingHorizontal: '0px',
                                    paddingVertical: '6%',
                                    customStyle: {
                                        width: `calc(100% - ${ C }px)`
                                    },
                                    mode: 'multi',
                                    disableHorizontalCentering: !0,
                                    highlighted: B.highlighted,
                                    noBold: B.noBold
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        width: C,
                                        height: '100%'
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    const t = f.default.div(n || (n = r`
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
        u = f.default.div(o || (o = r`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`)),
        v = f.default.div(p || (p = r`
  height: 90%;
  margin-right: 2vw;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10%;
`)),
        w = f.default.div(q || (q = r`
  width: 60%;
  display: flex;
  align-items: center;
  height: 100%;
`));
}), c.register('yN8+W', function(n, n) {
    b(n.exports, 'default', function() {
        return s;
    });
    var d = c('b5p1k12'),
        e = c('l2czd16'),
        f = c('6YDvM'),
        g = c('uPP4W'),
        h = c('uj3CK'),
        i = c('tDeyh'),
        j = [
            'client',
            'offset',
            'scroll',
            'bounds',
            'margin'
        ];

    function k(a) {
        var l = [];
        return j.forEach(function(c) {
            a[c] && l.push(c);
        }), l;
    }

    function l(a, b) {
        var m = {};
        if (b.indexOf('client') > -1 && (m.client = {
                top: a.clientTop,
                left: a.clientLeft,
                width: a.clientWidth,
                height: a.clientHeight
            }), b.indexOf('offset') > -1 && (m.offset = {
                top: a.offsetTop,
                left: a.offsetLeft,
                width: a.offsetWidth,
                height: a.offsetHeight
            }), b.indexOf('scroll') > -1 && (m.scroll = {
                top: a.scrollTop,
                left: a.scrollLeft,
                width: a.scrollWidth,
                height: a.scrollHeight
            }), b.indexOf('bounds') > -1) {
            var n = a.getBoundingClientRect();
            m.bounds = {
                top: n.top,
                right: n.right,
                bottom: n.bottom,
                left: n.left,
                width: n.width,
                height: n.height
            };
        }
        if (b.indexOf('margin') > -1) {
            var n = getComputedStyle(a);
            m.margin = {
                top: n ? parseInt(n.marginTop) : 0,
                right: n ? parseInt(n.marginRight) : 0,
                bottom: n ? parseInt(n.marginBottom) : 0,
                left: n ? parseInt(n.marginLeft) : 0
            };
        }
        return m;
    }

    function m(a) {
        return a && a.ownerDocument && a.ownerDocument.defaultView || window;
    }
    var n, o, p, q, r = (n = function(a) {
        var s = a.measure,
            t = a.measureRef,
            u = a.contentRect;
        return (0, a.children)({
            measure: s,
            measureRef: t,
            contentRect: u
        });
    }, p = o = function(a) {
        function s() {
            for (var t, u = arguments.length, v = new Array(u), w = 0; w < u; w++)
                v[w] = arguments[w];
            return (t = a.call.apply(a, [this].concat(v)) || this).state = {
                contentRect: {
                    entry: {},
                    client: {},
                    offset: {},
                    scroll: {},
                    bounds: {},
                    margin: {}
                }
            }, t._animationFrameID = null, t._resizeObserver = null, t._node = null, t._window = null, t.measure = function(a) {
                var x = l(t._node, q || k(t.props));
                a && (x.entry = a[0].contentRect), t._animationFrameID = t._window.requestAnimationFrame(function() {
                    null !== t._resizeObserver && (t.setState({
                        contentRect: x
                    }), 'function' == typeof t.props.onResize && t.props.onResize(x));
                });
            }, t._handleRef = function(a) {
                null !== t._resizeObserver && null !== t._node && t._resizeObserver.unobserve(t._node), t._node = a, t._window = m(t._node);
                var x = t.props.innerRef;
                x && ('function' == typeof x ? x(t._node) : x.current = t._node), null !== t._resizeObserver && null !== t._node && t._resizeObserver.observe(t._node);
            }, t;
        }
        (0, f.default)(s, a);
        var t = s.prototype;
        return t.componentDidMount = function() {
            this._resizeObserver = null !== this._window && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new(0, i.default)(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), 'function' == typeof this.props.onResize && this.props.onResize(l(this._node, q || k(this.props))));
        }, t.componentWillUnmount = function() {
            null !== this._window && this._window.cancelAnimationFrame(this._animationFrameID), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
        }, t.render = function() {
            var u = this.props,
                v = (u.innerRef, u.onResize, (0, e.default)(u, [
                    'innerRef',
                    'onResize'
                ]));
            return (0, g.createElement)(n, (0, d.default)({}, v, {
                measureRef: this._handleRef,
                measure: this.measure,
                contentRect: this.state.contentRect
            }));
        }, s;
    }(g.Component), o.propTypes = {
        client: a(h).bool,
        offset: a(h).bool,
        scroll: a(h).bool,
        bounds: a(h).bool,
        margin: a(h).bool,
        innerRef: a(h).oneOfType([
            a(h).object,
            a(h).func
        ]),
        onResize: a(h).func
    }, p);
    r.displayName = 'Measure', r.propTypes.children = a(h).func;
    var s = t;
}), c.register('pd99Q', function(a, l) {
    b(a.exports, 'parseText', function() {
        return f;
    }), b(a.exports, 'clickHandler', function() {
        return g;
    }), b(a.exports, 'isQuestionCorrect', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('bfuFC');
    const f = (a, b) => (0, d.jsx)('span', {
            className: a ? '' : 'notranslate lang-en',
            children: b
        }),
        g = (a, b) => {
            b && (a => !a || !0 !== a.isTrusted && !1 !== a.isTrusted || a.isTrusted)(a) && b();
        },
        h = (a, b) => {
            if (!b)
                return !1;
            let i = !1;
            if (a) {
                a.answers.find(i => {
                    if (i.correct) {
                        if (a.type === e.QuestionType.multipleChoice)
                            return b === i._id;
                        if (a.type === e.QuestionType.textInput) {
                            const j = i(b),
                                k = i(i.text);
                            var l;
                            const m = null !== (l = i.textType) && void 0 !== l ? l : e.TextInputAnswerType.exact;
                            if (m === e.TextInputAnswerType.exact)
                                return j === k;
                            if (m === e.TextInputAnswerType.contains)
                                return j.includes(k);
                        }
                    }
                    return !1;
                }) && (i = !0);
            }
            return i;
        },
        i = a => {
            let j = a.trim();
            return j = j.replace(/[\u2018\u2019]/g, '\'').replace(/[\u201C\u201D]/g, '"'), j = j.toLowerCase(), j;
        };
}), c.register('T19c3', function(a, o) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('pm/mI'),
        f = c('pd99Q');
    var g = a => (0, d.jsx)(e.default, {
        mode: 'multi',
        text: (0, f.parseText)(a.allowGoogleTranslate || !1, a.text),
        highlighted: a.highlighted,
        noBold: a.noBold
    });
});