function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....');
    c('.....');
    var h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....');
    var _n = o => {
        const [p, q] = a(g).useState(!1), {
            image: r,
            audio: s,
            latex: t
        } = o;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                r && p && (0, f.jsx)(h.default, {
                    large: (0, i.getCloudinaryUrl)(r),
                    onClose: () => q(!1),
                    hideDownload: !0,
                    showRotate: !1,
                    hideZoom: !0
                }),
                (0, f.jsxs)(m.Container, {
                    children: [
                        s && (0, f.jsx)(l.default, {
                            audio: s
                        }),
                        r && (0, f.jsx)('img', {
                            src: (0, i.getCloudinaryUrl)(r),
                            alt: 'Question',
                            onClick: () => q(!0),
                            style: {
                                maxHeight: '90%',
                                height: '90%',
                                maxWidth: '90%',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }
                        }),
                        t && (0, f.jsx)(k.default, {
                            text: (0, f.jsx)(j.default, {
                                latex: t
                            }),
                            noBold: !0
                        })
                    ]
                })
            ]
        });
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'Lightbox', function() {
        return c('.....').default;
    });
    var f = c('.....'),
        g = c('.....');
    g = c('.....');

    function h(i) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(j) {
            return typeof j;
        } : function(j) {
            return j && 'function' == typeof Symbol && j.constructor === Symbol && j !== Symbol.prototype ? 'symbol' : typeof j;
        }, h(i);
    }

    function i(j, k) {
        if (!(j instanceof k))
            throw new TypeError('Cannot call a class as a function');
    }

    function j(k, l) {
        for (var m = 0; m < l.length; m++) {
            var n = l[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(k, n.key, n);
        }
    }

    function m(n, o) {
        return !o || 'object' !== h(o) && 'function' != typeof o ? _o(n) : o;
    }

    function n(o) {
        return Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
            return p.__proto__ || Object.getPrototypeOf(p);
        }, n(o);
    }

    function _o(p) {
        if (void 0 === p)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return p;
    }

    function p(q, r) {
        return Object.setPrototypeOf || function(s, t) {
            return s.__proto__ = t, s;
        }, p(q, r);
    }

    function q(r, s, t) {
        return s in r ? Object.defineProperty(r, s, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[s] = t, r;
    }
    f.Component;
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _t;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');

    function j(k) {
        return j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(l) {
            return typeof l;
        } : function(l) {
            return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
        }, j(k);
    }

    function k(l, m) {
        if (!(l instanceof m))
            throw new TypeError('Cannot call a class as a function');
    }

    function l(m, n) {
        for (var o = 0; o < n.length; o++) {
            var p = n[o];
            p.enumerable = p.enumerable || !1, p.configurable = !0, 'value' in p && (p.writable = !0), Object.defineProperty(m, p.key, p);
        }
    }

    function o(p, q) {
        return !q || 'object' !== j(q) && 'function' != typeof q ? _q(p) : q;
    }

    function p(q) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r);
        }, p(q);
    }

    function _q(r) {
        if (void 0 === r)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return r;
    }

    function r(s, t) {
        return r = Object.setPrototypeOf || function(u, v) {
            return u.__proto__ = v, u;
        }, r(s, t);
    }

    function s(t, u, v) {
        return u in t ? Object.defineProperty(t, u, {
            value: v,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[u] = v, t;
    }
    var _t = function(u) {
        function v() {
            var w, x;
            k(this, v);
            for (var y = arguments.length, z = new Array(y), A = 0; A < y; A++)
                z[A] = arguments[A];
            return s(_q(x = o(this, (w = p(v)).call.apply(w, [this].concat(z)))), 'state', {
                move: {
                    x: 0,
                    y: 0
                },
                moveStart: void 0,
                zoomed: !1,
                rotationDeg: 0
            }), s(_q(x), 'handleKeyDown', function(B) {
                27 !== B.keyCode && 13 !== B.keyCode || x.props.onClose();
            }), s(_q(x), 'getCoordinatesIfOverImg', function(B) {
                var C = B.changedTouches ? B.changedTouches[0] : B;
                if ('react-modal-image-img' === C.target.id) {
                    var D = x.contentEl.getBoundingClientRect();
                    return {
                        x: C.clientX - D.left,
                        y: C.clientY - D.top
                    };
                }
            }), s(_q(x), 'handleMouseDownOrTouchStart', function(B) {
                if (B.preventDefault(), !(B.touches && B.touches.length > 1)) {
                    var C = x.getCoordinatesIfOverImg(B);
                    C || x.props.onClose(), x.state.zoomed && x.setState(function(D) {
                        return {
                            moveStart: {
                                x: C.x - D.move.x,
                                y: C.y - D.move.y
                            }
                        };
                    });
                }
            }), s(_q(x), 'handleMouseMoveOrTouchMove', function(B) {
                if (B.preventDefault(), x.state.zoomed && x.state.moveStart && !(B.touches && B.touches.length > 1)) {
                    var C = x.getCoordinatesIfOverImg(B);
                    C && x.setState(function(D) {
                        return {
                            move: {
                                x: C.x - D.moveStart.x,
                                y: C.y - D.moveStart.y
                            }
                        };
                    });
                }
            }), s(_q(x), 'handleMouseUpOrTouchEnd', function(B) {
                x.setState({
                    moveStart: void 0
                });
            }), s(_q(x), 'toggleZoom', function(B) {
                B.preventDefault(), x.setState(function(C) {
                    return {
                        zoomed: !C.zoomed,
                        move: C.zoomed ? {
                            x: 0,
                            y: 0
                        } : C.move
                    };
                });
            }), s(_q(x), 'toggleRotate', function(B) {
                B.preventDefault(), 360 !== x.state.rotationDeg ? x.setState(function(C) {
                    return {
                        rotationDeg: C.rotationDeg += 90
                    };
                }) : x.setState({
                    rotationDeg: 90
                });
            }), x;
        }
        var B, C, D;
        return function(E, F) {
            if ('function' != typeof F && null !== F)
                throw new TypeError('Super expression must either be null or a function');
            E.prototype = Object.create(F && F.prototype, {
                constructor: {
                    value: E,
                    writable: !0,
                    configurable: !0
                }
            }), F && r(E, F);
        }(v, x), B = v, (C = [{
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
                    var E = this,
                        F = this.props,
                        G = F.medium,
                        H = F.large,
                        I = F.alt,
                        J = F.onClose,
                        K = F.hideDownload,
                        L = F.hideZoom,
                        M = F.showRotate,
                        N = F.imageBackgroundColor,
                        O = void 0 === N ? 'black' : N,
                        P = this.state,
                        Q = P.move,
                        R = P.zoomed,
                        S = P.rotationDeg;
                    return w(A).createElement('div', null, w(A).createElement(g.default, {
                        name: '__react_modal_image__lightbox',
                        css: (0, g.lightboxStyles)({
                            imageBackgroundColor: O
                        })
                    }), w(A).createElement('div', {
                        className: '__react_modal_image__modal_container'
                    }, w(A).createElement('div', {
                        className: '__react_modal_image__modal_content',
                        onMouseDown: this.handleMouseDownOrTouchStart,
                        onMouseUp: this.handleMouseUpOrTouchEnd,
                        onMouseMove: this.handleMouseMoveOrTouchMove,
                        onTouchStart: this.handleMouseDownOrTouchStart,
                        onTouchEnd: this.handleMouseUpOrTouchEnd,
                        onTouchMove: this.handleMouseMoveOrTouchMove,
                        ref: function(T) {
                            E.contentEl = T;
                        }
                    }, R && w(A).createElement(i.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__large_img',
                        src: H || G,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) translate3d('.concat(Q.x, 'px, ').concat(Q.y, 'px, 0) rotate(').concat(S, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(Q.x, 'px, ').concat(Q.y, 'px, 0) rotate(').concat(S, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(Q.x, 'px, ').concat(Q.y, 'px, 0) rotate(').concat(S, 'deg)')
                        },
                        handleDoubleClick: this.toggleZoom
                    }), !R && w(A).createElement(i.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__medium_img',
                        src: G || H,
                        handleDoubleClick: this.toggleZoom,
                        contextMenu: !G,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) rotate('.concat(S, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(S, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(S, 'deg)')
                        }
                    })), w(A).createElement(h.default, {
                        image: H || G,
                        alt: I,
                        zoomed: R,
                        toggleZoom: this.toggleZoom,
                        toggleRotate: this.toggleRotate,
                        onClose: J,
                        enableDownload: !K,
                        enableZoom: !L,
                        enableRotate: !!M
                    })));
                }
            }
        ]) && l(B.prototype, C), D && l(B, D), v;
    }(f.Component);
}), c.register('.....', function(d, e) {
    function f(g) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(h) {
            return typeof h;
        } : function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, f(g);
    }

    function g(h, i) {
        if (!(h instanceof i))
            throw new TypeError('Cannot call a class as a function');
    }

    function h(i, j) {
        for (var k = 0; k < j.length; k++) {
            var l = j[k];
            l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
        }
    }

    function k(l, m) {
        return !m || 'object' !== f(m) && 'function' != typeof m ? function(n) {
            if (void 0 === n)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return n;
        }(l) : m;
    }

    function l(m) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n);
        }, l(m);
    }

    function m(n, o) {
        return m = Object.setPrototypeOf || function(p, q) {
            return p.__proto__ = q, p;
        }, m(n, o);
    }
    b(d.exports, 'default', function() {
        return _n;
    }), b(d.exports, 'lightboxStyles', function() {
        return _o;
    });
    var _n = function(o) {
            function p() {
                return g(this, p), k(this, l(p).apply(this, arguments));
            }
            var q, r, s;
            return function(t, u) {
                if ('function' != typeof u && null !== u)
                    throw new TypeError('Super expression must either be null or a function');
                t.prototype = Object.create(u && u.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), u && m(t, u);
            }(p, o), q = p, (r = [{
                    key: 'componentDidMount',
                    value: function() {
                        ! function(t, u) {
                            if (!document.head.querySelector('#' + t)) {
                                var v = document.createElement('style');
                                v.textContent = u, v.type = 'text/css', v.id = t, document.head.appendChild(v);
                            }
                        }(this.props.name, this.props.css);
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function() {
                        var t = document.getElementById(this.props.name);
                        t.parentNode.removeChild(t);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return null;
                    }
                }
            ]) && h(q.prototype, r), s && h(q, s), p;
        }(k('.....').Component),
        _o = function(p) {
            var q = p.imageBackgroundColor;
            return '\n  body {\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_container {\n    position: fixed;\n    z-index: 5000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    touch-action: none;\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_content {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n\n  .__react_modal_image__modal_content img, \n  .__react_modal_image__modal_content svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    overflow: hidden;\n  }\n\n  .__react_modal_image__medium_img {\n    max-width: 98%;\n    max-height: 98%;\n    background-color: '.concat(q, ';\n  }\n\n  .__react_modal_image__large_img {\n    cursor: move;\n    background-color: ').concat(q, '\n  }\n\n  .__react_modal_image__icon_menu a {\n    display: inline-block;\n    font-size: 40px;\n    cursor: pointer;\n    line-height: 40px;\n    box-sizing: border-box;\n    border: none;\n    padding: 0px 5px 0px 5px;\n    margin-left: 10px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  .__react_modal_image__icon_menu {\n    display: inline-block;\n    float: right;\n  }\n\n  .__react_modal_image__caption {\n    display: inline-block;\n    color: white;\n    font-size: 120%;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .__react_modal_image__header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n  }\n');
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = c('.....'),
        _h = function(i) {
            var j = i.image,
                k = i.alt,
                l = i.zoomed,
                m = i.toggleZoom,
                n = i.toggleRotate,
                o = i.onClose,
                p = i.enableDownload,
                q = i.enableZoom,
                r = i.enableRotate;
            return a(f).createElement('div', {
                className: '__react_modal_image__header'
            }, a(f).createElement('span', {
                className: '__react_modal_image__icon_menu'
            }, p && a(f).createElement('a', {
                href: j,
                download: !0
            }, a(f).createElement(g.DownloadIcon, null)), q && a(f).createElement('a', {
                onClick: m
            }, l ? a(f).createElement(g.ZoomOutIcon, null) : a(f).createElement(g.ZoomInIcon, null)), r && a(f).createElement('a', {
                onClick: n
            }, a(f).createElement(g.RotateIcon, null)), a(f).createElement('a', {
                onClick: o
            }, a(f).createElement(g.CloseIcon, null))), k && a(f).createElement('span', {
                className: '__react_modal_image__caption'
            }, k));
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'ZoomInIcon', function() {
        return _g;
    }), b(d.exports, 'ZoomOutIcon', function() {
        return _h;
    }), b(d.exports, 'DownloadIcon', function() {
        return _i;
    }), b(d.exports, 'CloseIcon', function() {
        return _j;
    }), b(d.exports, 'SpinnerIcon', function() {
        return _k;
    }), b(d.exports, 'RotateIcon', function() {
        return _l;
    });
    var f = c('.....'),
        _g = function() {
            return a(f).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(f).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }), a(f).createElement('path', {
                d: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'
            }));
        },
        _h = function() {
            return a(f).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(f).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }), a(f).createElement('path', {
                d: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z'
            }));
        },
        _i = function() {
            return a(f).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(f).createElement('path', {
                d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'
            }), a(f).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }));
        },
        _j = function() {
            return a(f).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(f).createElement('path', {
                d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
            }), a(f).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }));
        },
        _k = function() {
            return a(f).createElement('svg', {
                fill: '#ffffff',
                height: '48',
                viewBox: '0 0 24 24',
                width: '48',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(f).createElement('path', {
                d: 'M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z'
            }), a(f).createElement('path', {
                d: 'M0 0h24v24H0V0z',
                fill: 'none'
            }));
        },
        _l = function() {
            return a(f).createElement('svg', {
                fill: '#ffffff',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, a(f).createElement('path', {
                fill: 'none',
                d: 'M0 0h24v24H0V0zm0 0h24v24H0V0z'
            }), a(f).createElement('path', {
                d: 'M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z'
            }));
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _r;
    });
    var f = c('.....'),
        g = c('.....');

    function h(i) {
        return h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(j) {
            return typeof j;
        } : function(j) {
            return j && 'function' == typeof Symbol && j.constructor === Symbol && j !== Symbol.prototype ? 'symbol' : typeof j;
        }, h(i);
    }

    function i(j, k) {
        if (!(j instanceof k))
            throw new TypeError('Cannot call a class as a function');
    }

    function j(k, l) {
        for (var m = 0; m < l.length; m++) {
            var n = l[m];
            n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(k, n.key, n);
        }
    }

    function m(n, o) {
        return !o || 'object' !== h(o) && 'function' != typeof o ? _o(n) : o;
    }

    function n(o) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(p) {
            return p.__proto__ || Object.getPrototypeOf(p);
        }, n(o);
    }

    function _o(p) {
        if (void 0 === p)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return p;
    }

    function p(q, r) {
        return p = Object.setPrototypeOf || function(s, t) {
            return s.__proto__ = t, s;
        }, p(q, r);
    }

    function q(r, s, t) {
        return s in r ? Object.defineProperty(r, s, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[s] = t, r;
    }
    var _r = function(s) {
        function t() {
            var u, v;
            i(this, t);
            for (var w = arguments.length, x = new Array(w), y = 0; y < w; y++)
                x[y] = arguments[y];
            return q(_o(v = m(this, (u = n(t)).call.apply(u, [this].concat(x)))), 'state', {
                loading: !0
            }), q(_o(v), 'handleOnLoad', function() {
                v.setState({
                    loading: !1
                });
            }), q(_o(v), 'handleOnContextMenu', function(z) {
                !v.props.contextMenu && z.preventDefault();
            }), v;
        }
        var z, A, B;
        return function(C, D) {
            if ('function' != typeof D && null !== D)
                throw new TypeError('Super expression must either be null or a function');
            C.prototype = Object.create(D && D.prototype, {
                constructor: {
                    value: C,
                    writable: !0,
                    configurable: !0
                }
            }), D && p(C, D);
        }(t, v), z = t, (A = [{
            key: 'render',
            value: function() {
                var C = this.props,
                    D = C.id,
                    E = C.className,
                    F = C.src,
                    G = C.style,
                    H = C.handleDoubleClick;
                return u(y).createElement('div', null, this.state.loading && u(y).createElement(g.SpinnerIcon, null), u(y).createElement('img', {
                    id: D,
                    className: E,
                    src: F,
                    style: G,
                    onLoad: this.handleOnLoad,
                    onDoubleClick: H,
                    onContextMenu: this.handleOnContextMenu
                }));
            }
        }]) && j(z.prototype, A), B && j(z, B), t;
    }(f.Component);
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....');
    let k;
    const l = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        },
        m = j.default.div(k || (k = (n => n)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class n extends h.Component {
            render() {
                const {
                    paddingHorizontal: o,
                    paddingVertical: p,
                    customStyle: q,
                    ...r
                } = this.props;
                return delete r.text, delete r.highlighted, (0, g.jsx)(m, {
                    className: this.props.customClass,
                    style: q,
                    children: (0, g.jsx)(i.Textfit, {
                        style: {
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            justifyContent: this.props.disableHorizontalCentering ? 'flex-start' : 'center',
                            alignItems: 'center',
                            paddingTop: p,
                            paddingBottom: p,
                            paddingLeft: this.props.paddingLeft || o,
                            paddingRight: o,
                            boxSizing: 'border-box',
                            fontWeight: this.props.noBold ? 'normal' : 900
                        },
                        ...r,
                        children: (0, g.jsx)('div', {
                            style: this.props.highlighted ? l : void 0,
                            children: this.props.text
                        })
                    })
                });
            }
        }
        (0, f.default)(n, 'defaultProps', {
            paddingHorizontal: '6%',
            paddingVertical: 15,
            max: 50,
            mode: 'single',
            forceSingleModeWidth: !1
        });
    var _o = n;
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.Textfit = void 0;
    var f, g = c('.....'),
        h = (f = g) && f.__esModule ? f : {
            default: f
        };
    d.exports.Textfit = h.default, d.exports.default = h.default;
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    });
    var f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        },
        g = function() {
            function h(i, j) {
                for (var k = 0; k < j.length; k++) {
                    var l = j[k];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
                }
            }
            return function(k, l, m) {
                return l && h(k.prototype, l), m && h(k, m), k;
            };
        }(),
        h = _p(c('.....')),
        i = _p(c('.....')),
        j = _p(c('.....')),
        k = _p(c('.....')),
        l = _p(c('.....')),
        m = _p(c('.....')),
        n = _p(c('.....')),
        o = c('.....');

    function _p(q) {
        return q && q.__esModule ? q : {
            default: q
        };
    }

    function q(r, s) {
        return r.scrollWidth - 1 <= s;
    }

    function r(s, t) {
        return s.scrollHeight - 1 <= t;
    }
    var s = function(t) {
        function u(v) {
            ! function(w, x) {
                if (!(w instanceof x))
                    throw new TypeError('Cannot call a class as a function');
            }(this, u);
            var w = function(x, y) {
                if (!x)
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                return !y || 'object' != typeof y && 'function' != typeof y ? x : y;
            }(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, v));
            return w.state = {
                fontSize: null,
                ready: !1
            }, w.handleWindowResize = function() {
                w.process();
            }, 'perfectFit' in v && console.warn('TextFit property perfectFit has been removed.'), w;
        }
        return function(w, x) {
            if ('function' != typeof x && null !== x)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof x);
            w.prototype = Object.create(x && x.prototype, {
                constructor: {
                    value: w,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(w, x) : w.__proto__ = x);
        }(u, t), g(u, [{
                key: 'componentWillMount',
                value: function() {
                    this.handleWindowResize = (0, m.default)(this.handleWindowResize, this.props.throttle);
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
                value: function(w) {
                    this.state.ready && ((0, j.default)(this.props, w) || this.process());
                }
            },
            {
                key: 'componentWillUnmount',
                value: function() {
                    this.props.autoResize && window.removeEventListener('resize', this.handleWindowResize), this.pid = (0, n.default)();
                }
            },
            {
                key: 'process',
                value: function() {
                    var w = this,
                        x = this.props,
                        y = x.min,
                        z = x.max,
                        A = x.mode,
                        B = x.forceSingleModeWidth,
                        C = x.onReady,
                        D = this._parent,
                        E = this._child,
                        F = (0, o.innerWidth)(D),
                        G = (0, o.innerHeight)(D);
                    if (G <= 0 || isNaN(G))
                        console.warn('Can not process element without height. Make sure the element is displayed and has a static height.');
                    else if (F <= 0 || isNaN(F))
                        console.warn('Can not process element without width. Make sure the element is displayed and has a static width.');
                    else {
                        var H = (0, n.default)();
                        this.pid = H;
                        var I = function() {
                                return H !== w.pid;
                            },
                            J = 'multi' === A ? function() {
                                return r(E, G);
                            } : function() {
                                return q(E, F);
                            },
                            K = 'multi' === A ? function() {
                                return q(E, F);
                            } : function() {
                                return r(E, G);
                            },
                            L = void 0,
                            M = y,
                            N = z;
                        this.setState({
                            ready: !1
                        }), (0, k.default)([
                            function(O) {
                                return (0, l.default)(function() {
                                    return M <= N;
                                }, function(P) {
                                    if (I())
                                        return P(!0);
                                    L = parseInt((M + N) / 2, 10), w.setState({
                                        fontSize: L
                                    }, function() {
                                        return I() ? P(!0) : (J() ? M = L + 1 : N = L - 1, P());
                                    });
                                }, O);
                            },
                            function(O) {
                                return 'single' === A && B || K() ? O() : (M = y, N = L, (0, l.default)(function() {
                                    return M < N;
                                }, function(P) {
                                    if (I())
                                        return P(!0);
                                    L = parseInt((M + N) / 2, 10), w.setState({
                                        fontSize: L
                                    }, function() {
                                        return H !== w.pid ? P(!0) : (K() ? M = L + 1 : N = L - 1, P());
                                    });
                                }, O));
                            },
                            function(O) {
                                if (L = Math.min(M, N), L = Math.max(L, y), L = Math.min(L, z), L = Math.max(L, 0), I())
                                    return O(!0);
                                w.setState({
                                    fontSize: L
                                }, O);
                            }
                        ], function(O) {
                            O || I() || w.setState({
                                ready: !0
                            }, function() {
                                return C(L);
                            });
                        });
                    }
                }
            },
            {
                key: 'render',
                value: function() {
                    var w = this,
                        x = this.props,
                        y = x.children,
                        z = x.text,
                        A = x.style,
                        B = (x.min, x.max, x.mode),
                        C = (x.forceWidth, x.forceSingleModeWidth, x.throttle, x.autoResize, x.onReady, function(D, E) {
                            var F = {};
                            for (var G in D)
                                E.indexOf(G) >= 0 || Object.prototype.hasOwnProperty.call(D, G) && (F[G] = D[G]);
                            return F;
                        }(x, [
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
                        D = this.state,
                        E = D.fontSize,
                        F = D.ready,
                        G = f({}, A, {
                            fontSize: E
                        }),
                        H = {
                            display: F ? 'block' : 'inline-block'
                        };
                    return 'single' === B && (H.whiteSpace = 'nowrap'), h.default.createElement('div', f({
                        ref: function(I) {
                            return w._parent = I;
                        },
                        style: G
                    }, C), h.default.createElement('div', {
                        ref: function(I) {
                            return w._child = I;
                        },
                        style: H
                    }, z && 'function' == typeof y ? F ? y(z) : z : y));
                }
            }
        ]), u;
    }(h.default.Component);
    s.propTypes = {
        children: i.default.node,
        text: i.default.string,
        min: i.default.number,
        max: i.default.number,
        mode: i.default.oneOf([
            'single',
            'multi'
        ]),
        forceSingleModeWidth: i.default.bool,
        throttle: i.default.number,
        onReady: i.default.func
    }, s.defaultProps = {
        min: 1,
        max: 100,
        mode: 'multi',
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
    }, d.exports.default = s;
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = function(f, g) {
        if (f === g)
            return !0;
        var h = Object.keys(f),
            i = Object.keys(g);
        if (h.length !== i.length)
            return !1;
        for (var j = Object.prototype.hasOwnProperty, k = 0; k < h.length; k++)
            if (!j.call(g, h[k]) || f[h[k]] !== g[h[k]])
                return !1;
        return !0;
    };
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = function(f, g) {
        var h = [],
            i = 0,
            j = !0;

        function k(l) {
            function m() {
                g && g(l, h);
            }
            j ? _h.default.nextTick(m) : m();
        }
        f.length > 0 ? f[0](function g(l, m) {
            h.push(m), ++i >= f.length || l ? k(l) : f[i](g);
        }) : k(null);
        j = !1;
    };
    var f, g = c('.....'),
        _h = (f = g) && f.__esModule ? f : {
            default: f
        };
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = function(f, g) {
        var h = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
        f() ? g(function c(i) {
            for (var j = arguments.length, k = Array(j > 1 ? j - 1 : 0), l = 1; l < j; l++)
                k[l - 1] = arguments[l];
            i ? h(i) : f.apply(this, k) ? g(c) : h(null);
        }) : h(null);
    };
    var f = function() {};
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = function(f, g) {
        var h = void 0,
            i = void 0,
            j = void 0,
            k = void 0,
            l = 0;

        function m() {
            k = 0, l = +new Date(), j = f.apply(h, i), h = null, i = null;
        }
        return function() {
            h = this, i = arguments;
            var n = new Date() - l;
            return k || (n >= g ? m() : k = setTimeout(m, g - n)), j;
        };
    };
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = function() {
        return c++;
    };
    var f = 0;
}), c.register('.....', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.innerHeight = function(f) {
        var g = window.getComputedStyle(f, null);
        return f.clientHeight - parseInt(g.getPropertyValue('padding-top'), 10) - parseInt(g.getPropertyValue('padding-bottom'), 10);
    }, d.exports.innerWidth = function(f) {
        var g = window.getComputedStyle(f, null);
        return f.clientWidth - parseInt(g.getPropertyValue('padding-left'), 10) - parseInt(g.getPropertyValue('padding-right'), 10);
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....');
    var _l = (0, g.observer)(m => (0, f.jsx)(i.default, {
        title: (0, f.jsx)('span', {
            style: {
                fontSize: 14
            },
            children: 'Replay Audio'
        }),
        placement: 'left',
        children: (0, f.jsx)(h.default, {
            onClick: () => {
                k.default.playAudio(m.audio);
            },
            color: 'secondary',
            style: {
                flexShrink: 0
            },
            children: (0, f.jsx)(a(j), {})
        })
    }));
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = h.forwardRef(function(n, o) {
            var p = n.children,
                q = n.classes,
                r = n.className,
                s = n.color,
                t = void 0 === s ? 'default' : s,
                u = n.component,
                v = void 0 === u ? 'button' : u,
                w = n.disabled,
                x = void 0 !== w && w,
                y = n.disableFocusRipple,
                z = void 0 !== y && y,
                A = n.focusVisibleClassName,
                B = n.size,
                C = void 0 === B ? 'large' : B,
                D = n.variant,
                E = void 0 === D ? 'round' : D,
                F = (0, f.default)(n, [
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
            return h.createElement(k.default, (0, g.default)({
                className: (0, i.default)(q.root, r, 'round' !== E && q.extended, 'large' !== C && q['size'.concat((0, l.default)(C))], x && q.disabled, {
                    primary: q.primary,
                    secondary: q.secondary,
                    inherit: q.colorInherit
                } [t]),
                component: v,
                disabled: x,
                focusRipple: !z,
                focusVisibleClassName: (0, i.default)(q.focusVisible, A),
                ref: o
            }, F), h.createElement('span', {
                className: q.label
            }, p));
        }),
        _n = (0, j.default)(function(o) {
            return {
                root: (0, g.default)({}, o.typography.button, {
                    boxSizing: 'border-box',
                    minHeight: 36,
                    transition: o.transitions.create([
                        'background-color',
                        'box-shadow',
                        'border'
                    ], {
                        duration: o.transitions.duration.short
                    }),
                    borderRadius: '50%',
                    padding: 0,
                    minWidth: 0,
                    width: 56,
                    height: 56,
                    boxShadow: o.shadows[6],
                    '&:active': {
                        boxShadow: o.shadows[12]
                    },
                    color: o.palette.getContrastText(o.palette.grey[300]),
                    backgroundColor: o.palette.grey[300],
                    '&:hover': {
                        backgroundColor: o.palette.grey.A100,
                        '@media (hover: none)': {
                            backgroundColor: o.palette.grey[300]
                        },
                        '&$disabled': {
                            backgroundColor: o.palette.action.disabledBackground
                        },
                        textDecoration: 'none'
                    },
                    '&$focusVisible': {
                        boxShadow: o.shadows[6]
                    },
                    '&$disabled': {
                        color: o.palette.action.disabled,
                        boxShadow: o.shadows[0],
                        backgroundColor: o.palette.action.disabledBackground
                    }
                }),
                label: {
                    width: '100%',
                    display: 'inherit',
                    alignItems: 'inherit',
                    justifyContent: 'inherit'
                },
                primary: {
                    color: o.palette.primary.contrastText,
                    backgroundColor: o.palette.primary.main,
                    '&:hover': {
                        backgroundColor: o.palette.primary.dark,
                        '@media (hover: none)': {
                            backgroundColor: o.palette.primary.main
                        }
                    }
                },
                secondary: {
                    color: o.palette.secondary.contrastText,
                    backgroundColor: o.palette.secondary.main,
                    '&:hover': {
                        backgroundColor: o.palette.secondary.dark,
                        '@media (hover: none)': {
                            backgroundColor: o.palette.secondary.main
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
        })(m);
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _q;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....'),
        p = h.forwardRef(function(q, r) {
            var s = q.action,
                t = q.buttonRef,
                u = q.centerRipple,
                v = void 0 !== u && u,
                w = q.children,
                x = q.classes,
                y = q.className,
                z = q.component,
                A = void 0 === z ? 'button' : z,
                B = q.disabled,
                C = void 0 !== B && B,
                D = q.disableRipple,
                E = void 0 !== D && D,
                F = q.disableTouchRipple,
                G = void 0 !== F && F,
                H = q.focusRipple,
                I = void 0 !== H && H,
                J = q.focusVisibleClassName,
                K = q.onBlur,
                L = q.onClick,
                M = q.onFocus,
                N = q.onFocusVisible,
                O = q.onKeyDown,
                P = q.onKeyUp,
                Q = q.onMouseDown,
                R = q.onMouseLeave,
                S = q.onMouseUp,
                T = q.onTouchEnd,
                U = q.onTouchMove,
                V = q.onTouchStart,
                W = q.onDragLeave,
                X = q.tabIndex,
                Y = void 0 === X ? 0 : X,
                Z = q.TouchRippleProps,
                $ = q.type,
                ab = void 0 === $ ? 'button' : $,
                bb = (0, g.default)(q, [
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
                cb = h.useRef(null);
            var db = h.useRef(null),
                eb = h.useState(!1),
                fb = eb[0],
                gb = eb[1];
            C && fb && gb(!1);
            var hb = (0, n.default)(),
                ib = hb.isFocusVisible,
                jb = hb.onBlurVisible,
                kb = hb.ref;

            function lb(mb, nb) {
                var ob = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : G;
                return (0, l.default)(function(pb) {
                    return nb && nb(pb), !ob && db.current && db.current[mb](pb), !0;
                });
            }
            h.useImperativeHandle(ob, function() {
                return {
                    focusVisible: function() {
                        gb(!0), cb.current.focus();
                    }
                };
            }, []), h.useEffect(function() {
                fb && I && !E && db.current.pulsate();
            }, [
                E,
                I,
                fb
            ]);
            var nb = lb('start', Q),
                ob = lb('stop', W),
                pb = lb('stop', S),
                qb = lb('stop', function(rb) {
                    fb && rb.preventDefault(), R && R(rb);
                }),
                rb = lb('start', V),
                sb = lb('stop', T),
                tb = lb('stop', U),
                ub = lb('stop', function(vb) {
                    fb && (jb(vb), gb(!1)), K && K(vb);
                }, !1),
                vb = (0, l.default)(function(wb) {
                    cb.current || (cb.current = wb.currentTarget), ib(wb) && (gb(!0), N && N(wb)), M && M(wb);
                }),
                wb = function() {
                    var xb = i.findDOMNode(cb.current);
                    return A && 'button' !== A && !('A' === xb.tagName && xb.href);
                },
                xb = h.useRef(!1),
                yb = (0, l.default)(function(zb) {
                    I && !xb.current && fb && db.current && ' ' === zb.key && (xb.current = !0, zb.persist(), db.current.stop(zb, function() {
                        db.current.start(zb);
                    })), zb.target === zb.currentTarget && wb() && ' ' === zb.key && zb.preventDefault(), O && O(zb), zb.target === zb.currentTarget && wb() && 'Enter' === zb.key && !C && (zb.preventDefault(), L && L(zb));
                }),
                zb = (0, l.default)(function(Ab) {
                    I && ' ' === Ab.key && db.current && fb && !Ab.defaultPrevented && (xb.current = !1, Ab.persist(), db.current.stop(Ab, function() {
                        db.current.pulsate(Ab);
                    })), P && P(Ab), L && Ab.target === Ab.currentTarget && wb() && ' ' === Ab.key && !Ab.defaultPrevented && L(Ab);
                }),
                Ab = A;
            'button' === Ab && bb.href && (Ab = 'a');
            var Bb = {};
            'button' === Ab ? (Bb.type = ab, Bb.disabled = C) : ('a' === Ab && bb.href || (Bb.role = 'button'), Bb['aria-disabled'] = C);
            var Cb = (0, k.default)(t, r),
                Db = (0, k.default)(kb, cb),
                Eb = (0, k.default)(Cb, Db),
                Fb = h.useState(!1),
                Gb = Fb[0],
                Hb = Fb[1];
            h.useEffect(function() {
                Hb(!0);
            }, []);
            var Ib = Gb && !E && !C;
            return h.createElement(Ab, (0, f.default)({
                className: (0, j.default)(x.root, y, fb && [
                    x.focusVisible,
                    J
                ], C && x.disabled),
                onBlur: ub,
                onClick: L,
                onFocus: vb,
                onKeyDown: yb,
                onKeyUp: zb,
                onMouseDown: nb,
                onMouseLeave: qb,
                onMouseUp: pb,
                onDragLeave: ob,
                onTouchEnd: sb,
                onTouchMove: tb,
                onTouchStart: rb,
                ref: Eb,
                tabIndex: C ? -1 : Y
            }, Bb, bb), w, Ib ? h.createElement(o.default, (0, f.default)({
                ref: db,
                center: v
            }, Z)) : null);
        }),
        _q = (0, m.default)({
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
        })(p);
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('.....'),
        g = 'undefined' != typeof window ? f.useLayoutEffect : f.useEffect;

    function _h(i) {
        var j = f.useRef(i);
        return g(function() {
            j.current = i;
        }), f.useCallback(function() {
            return j.current.apply(void 0, arguments);
        }, []);
    }
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    c('.....');
    var j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = i.forwardRef(function(o, p) {
            var q = o.center,
                r = void 0 !== q && q,
                s = o.classes,
                t = o.className,
                u = (0, h.default)(o, [
                    'center',
                    'classes',
                    'className'
                ]),
                v = i.useState([]),
                w = v[0],
                x = v[1],
                y = i.useRef(0),
                z = i.useRef(null);
            i.useEffect(function() {
                z.current && (z.current(), z.current = null);
            }, [w]);
            var A = i.useRef(!1),
                B = i.useRef(null),
                C = i.useRef(null),
                D = i.useRef(null);
            i.useEffect(function() {
                return function() {
                    clearTimeout(B.current);
                };
            }, []);
            var E = i.useCallback(function(F) {
                    var G = F.pulsate,
                        H = F.rippleX,
                        I = F.rippleY,
                        J = F.rippleSize,
                        K = F.cb;
                    x(function(L) {
                        return [].concat((0, g.default)(L), [i.createElement(m.default, {
                            key: y.current,
                            classes: s,
                            timeout: 550,
                            pulsate: G,
                            rippleX: H,
                            rippleY: I,
                            rippleSize: J
                        })]);
                    }), y.current += 1, z.current = K;
                }, [s]),
                F = i.useCallback(function() {
                    var G = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        H = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        I = arguments.length > 2 ? arguments[2] : void 0,
                        J = H.pulsate,
                        K = void 0 !== J && J,
                        L = H.center,
                        M = void 0 === L ? r || H.pulsate : L,
                        N = H.fakeElement,
                        O = void 0 !== N && N;
                    if ('mousedown' === G.type && A.current)
                        A.current = !1;
                    else {
                        'touchstart' === G.type && (A.current = !0);
                        var P, Q, R, S = O ? null : D.current,
                            T = S ? S.getBoundingClientRect() : {
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            };
                        if (M || 0 === G.clientX && 0 === G.clientY || !G.clientX && !G.touches)
                            P = Math.round(T.width / 2), Q = Math.round(T.height / 2);
                        else {
                            var U = G.touches ? G.touches[0] : G,
                                V = U.clientX,
                                W = U.clientY;
                            P = Math.round(V - T.left), Q = Math.round(W - T.top);
                        }
                        if (M)
                            (R = Math.sqrt((2 * Math.pow(T.width, 2) + Math.pow(T.height, 2)) / 3)) % 2 == 0 && (R += 1);
                        else {
                            var X = 2 * Math.max(Math.abs((S ? S.clientWidth : 0) - P), P) + 2,
                                Y = 2 * Math.max(Math.abs((S ? S.clientHeight : 0) - Q), Q) + 2;
                            R = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
                        }
                        G.touches ? null === C.current && (C.current = function() {
                            E({
                                pulsate: K,
                                rippleX: P,
                                rippleY: Q,
                                rippleSize: R,
                                cb: I
                            });
                        }, B.current = setTimeout(function() {
                            C.current && (C.current(), C.current = null);
                        }, 80)) : E({
                            pulsate: K,
                            rippleX: P,
                            rippleY: Q,
                            rippleSize: R,
                            cb: I
                        });
                    }
                }, [
                    r,
                    E
                ]),
                G = i.useCallback(function() {
                    F({}, {
                        pulsate: !0
                    });
                }, [F]),
                H = i.useCallback(function(I, J) {
                    if (clearTimeout(B.current), 'touchend' === I.type && C.current)
                        return I.persist(), C.current(), C.current = null, void(B.current = setTimeout(function() {
                            H(I, J);
                        }));
                    C.current = null, x(function(K) {
                        return K.length > 0 ? K.slice(1) : K;
                    }), z.current = J;
                }, []);
            return i.useImperativeHandle(p, function() {
                return {
                    pulsate: G,
                    start: F,
                    stop: H
                };
            }, [
                G,
                F,
                H
            ]), i.createElement('span', (0, f.default)({
                className: (0, k.default)(s.root, t),
                ref: D
            }, u), i.createElement(j.default, {
                component: null,
                exit: !0
            }, w));
        }),
        _o = (0, l.default)(function(p) {
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
                    animation: '$enter '.concat(550, 'ms ').concat(p.transitions.easing.easeInOut)
                },
                ripplePulsate: {
                    animationDuration: ''.concat(p.transitions.duration.shorter, 'ms')
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
                    animation: '$exit '.concat(550, 'ms ').concat(p.transitions.easing.easeInOut)
                },
                childPulsate: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    animation: '$pulsate 2500ms '.concat(p.transitions.easing.easeInOut, ' 200ms infinite')
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
        })(i.memo(n));
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    c('.....');
    var j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = Object.values || function(n) {
            return Object.keys(n).map(function(o) {
                return n[o];
            });
        },
        n = function(o) {
            function p(q, r) {
                var s, t = (s = o.call(this, q, r) || this).handleExited.bind((0, h.default)(s));
                return s.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: t,
                    firstRender: !0
                }, s;
            }
            (0, i.default)(p, o);
            var s = p.prototype;
            return s.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                });
            }, s.componentWillUnmount = function() {
                this.mounted = !1;
            }, p.getDerivedStateFromProps = function(t, u) {
                var v = u.children,
                    w = u.handleExited;
                return {
                    children: u.firstRender ? (0, l.getInitialChildMapping)(t, w) : (0, l.getNextChildMapping)(t, v, w),
                    firstRender: !1
                };
            }, s.handleExited = function(t, u) {
                var v = (0, l.getChildMapping)(this.props.children);
                t.key in v || (t.props.onExited && t.props.onExited(u), this.mounted && this.setState(function(w) {
                    var x = (0, g.default)({}, w.children);
                    return delete x[t.key], {
                        children: x
                    };
                }));
            }, s.render = function() {
                var t = this.props,
                    u = t.component,
                    v = t.childFactory,
                    w = (0, f.default)(t, [
                        'component',
                        'childFactory'
                    ]),
                    x = this.state.contextValue,
                    y = m(this.state.children).map(v);
                return delete w.appear, delete w.enter, delete w.exit, null === u ? a(j).createElement(k.default.Provider, {
                    value: x
                }, y) : a(j).createElement(k.default.Provider, {
                    value: x
                }, a(j).createElement(u, w, y));
            }, p;
        }(a(j).Component);
    n.propTypes = {}, n.defaultProps = {
        component: 'div',
        childFactory: function(o) {
            return o;
        }
    };
    var _o = n;
}), c.register('.....', function(d, e) {
    b(d.exports, 'getChildMapping', function() {
        return _g;
    }), b(d.exports, 'getInitialChildMapping', function() {
        return _j;
    }), b(d.exports, 'getNextChildMapping', function() {
        return _k;
    });
    var f = c('.....');

    function _g(h, i) {
        var j = Object.create(null);
        return h && f.Children.map(h, function(k) {
            return k;
        }).forEach(function(k) {
            j[k.key] = function(l) {
                return i && (0, f.isValidElement)(l) ? i(l) : l;
            }(k);
        }), j;
    }

    function i(j, k, l) {
        return null != l[k] ? l[k] : j.props[k];
    }

    function _j(k, l) {
        return _g(k.children, function(m) {
            return (0, f.cloneElement)(m, {
                onExited: l.bind(null, m),
                in: !0,
                appear: i(m, 'appear', k),
                enter: i(m, 'enter', k),
                exit: i(m, 'exit', k)
            });
        });
    }

    function _k(l, m, n) {
        var o = _g(l.children),
            p = function(q, r) {
                function s(t) {
                    return t in r ? r[t] : q[t];
                }
                q = q || {}, r = r || {};
                var t, u = Object.create(null),
                    v = [];
                for (var w in q)
                    w in r ? v.length && (u[w] = v, v = []) : v.push(w);
                var x = {};
                for (var y in r) {
                    if (u[y])
                        for (t = 0; t < u[y].length; t++) {
                            var z = u[y][t];
                            x[u[y][t]] = s(z);
                        }
                    x[y] = s(y);
                }
                for (t = 0; t < v.length; t++)
                    x[v[t]] = s(v[t]);
                return x;
            }(m, o);
        return Object.keys(_j).forEach(function(q) {
            var r = _j[q];
            if ((0, f.isValidElement)(r)) {
                var s = q in m,
                    t = q in o,
                    u = m[q],
                    v = (0, f.isValidElement)(u) && !u.props.in;
                !t || s && !v ? t || !s || v ? t && s && (0, f.isValidElement)(u) && (_j[q] = (0, f.cloneElement)(r, {
                    onExited: n.bind(null, r),
                    in: u.props.in,
                    exit: i(r, 'exit', l),
                    enter: i(r, 'enter', l)
                })) : _j[q] = (0, f.cloneElement)(r, {
                    in: !1
                }) : _j[q] = (0, f.cloneElement)(r, {
                    onExited: n.bind(null, r),
                    in: !0,
                    exit: i(r, 'exit', l),
                    enter: i(r, 'enter', l)
                });
            }
        }), _j;
    }
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....'),
        i = 'undefined' == typeof window ? f.useEffect : f.useLayoutEffect;
    var _j = function(k) {
        var l = k.classes,
            m = k.pulsate,
            n = void 0 !== m && m,
            o = k.rippleX,
            p = k.rippleY,
            q = k.rippleSize,
            r = k.in,
            s = k.onExited,
            t = void 0 === s ? function() {} : s,
            u = k.timeout,
            v = f.useState(!1),
            w = v[0],
            x = v[1],
            y = (0, g.default)(l.ripple, l.rippleVisible, n && l.ripplePulsate),
            z = {
                width: q,
                height: q,
                top: -q / 2 + p,
                left: -q / 2 + o
            },
            A = (0, g.default)(l.child, w && l.childLeaving, n && l.childPulsate),
            B = (0, h.default)(t);
        return i(function() {
            if (!r) {
                x(!0);
                var C = setTimeout(B, u);
                return function() {
                    clearTimeout(C);
                };
            }
        }, [
            B,
            r,
            u
        ]), f.createElement('span', {
            className: y,
            style: z
        }, f.createElement('span', {
            className: A
        }));
    };
}), c.register('.....', function(d, e) {
    var f = c('.....');
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = void 0;
    var g = f(c('.....')),
        h = (0, f(c('.....')).default)(g.default.createElement('path', {
            d: 'M8 5v14l11-7z'
        }), 'PlayArrow');
    d.exports.default = h;
}), c.register('.....', function(d, e) {
    var f = c('.....');
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = function(g, h) {
        var i = _h.default.memo(_h.default.forwardRef(function(j, k) {
            return _h.default.createElement(_i.default, (0, _g.default)({
                ref: k
            }, j), g);
        }));
        return i.muiName = _i.default.muiName, i;
    };
    var _g = f(c('.....')),
        _h = f(c('.....')),
        _i = f(c('.....'));
}), c.register('.....', function(d, e) {
    function f() {
        return d.exports = f = Object.assign || function(g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    d.exports = f;
}), c.register('.....', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return c('.....').default;
    });
    c('.....');
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _m;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    c('.....');
    var i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = h.forwardRef(function(m, n) {
            var o = m.children,
                p = m.classes,
                q = m.className,
                r = m.color,
                s = void 0 === r ? 'inherit' : r,
                t = m.component,
                u = void 0 === t ? 'svg' : t,
                v = m.fontSize,
                w = void 0 === v ? 'default' : v,
                x = m.htmlColor,
                y = m.titleAccess,
                z = m.viewBox,
                A = void 0 === z ? '0 0 24 24' : z,
                B = (0, g.default)(m, [
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
            return h.createElement(u, (0, f.default)({
                className: (0, i.default)(p.root, q, 'inherit' !== s && p['color'.concat((0, k.default)(s))], 'default' !== w && p['fontSize'.concat((0, k.default)(w))]),
                focusable: 'false',
                viewBox: A,
                color: x,
                'aria-hidden': !y || void 0,
                role: y ? 'img' : void 0,
                ref: n
            }, B), o, y ? h.createElement('title', null, y) : null);
        });
    l.muiName = 'SvgIcon';
    var _m = (0, j.default)(function(n) {
        return {
            root: {
                userSelect: 'none',
                width: '1em',
                height: '1em',
                display: 'inline-block',
                fill: 'currentColor',
                flexShrink: 0,
                fontSize: n.typography.pxToRem(24),
                transition: n.transitions.create('fill', {
                    duration: n.transitions.duration.shorter
                })
            },
            colorPrimary: {
                color: n.palette.primary.main
            },
            colorSecondary: {
                color: n.palette.secondary.main
            },
            colorAction: {
                color: n.palette.action.active
            },
            colorError: {
                color: n.palette.error.main
            },
            colorDisabled: {
                color: n.palette.action.disabled
            },
            fontSizeInherit: {
                fontSize: 'inherit'
            },
            fontSizeSmall: {
                fontSize: n.typography.pxToRem(20)
            },
            fontSizeLarge: {
                fontSize: n.typography.pxToRem(35)
            }
        };
    }, {
        name: 'MuiSvgIcon'
    })(l);
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _t;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    const j = [
            'Samantha',
            'Victoria'
        ],
        k = l => {
            i.default.readToMe.audioQuestion && (i.default.readToMe.audioQuestion.stop(), i.default.readToMe.audioQuestion = null), i.default.readToMe.speechQuestion && (i.default.readToMe.speechQuestion.onend = null, i.default.readToMe.speechQuestion = null), i.default.readToMe.answersTimeout && clearTimeout(i.default.readToMe.answersTimeout), i.default.readToMe.reset(l), window.speechSynthesis.cancel();
        },
        l = async m => {
            if (i.default.readToMe.enabled || !m.audio || i.default.readToMe.hasPlayedForCurrentQuestion) {
                if ('speechSynthesis' in window && i.default.readToMe.enabled && !i.default.readToMe.isCurrentlySpeaking && !i.default.readToMe.hasPlayedForCurrentQuestion) {
                    let n, o;
                    i.default.readToMe.isCurrentlySpeaking = !0, (null == m ? void 0 : m.text) && (o = new SpeechSynthesisUtterance(m.text), o.voice = await _r(), o.rate = 0.8, i.default.readToMe.speechQuestion = o), (null == m ? void 0 : m.audio) && (n = new(0, f.Howl)({
                        src: [m.audio],
                        onplay: _o,
                        onend: (null == m ? void 0 : m.text) ? () => window.speechSynthesis.speak(o) : () => _q(m)
                    }), i.default.readToMe.audioQuestion = n), n && o ? (o.onstart = _p, o.onend = () => _q(m), n.play(), i.default.readToMe.hasPlayedForCurrentQuestion = !0) : o ? (o.onstart = _p, o.onend = () => _q(m), window.speechSynthesis.speak(o), i.default.readToMe.hasPlayedForCurrentQuestion = !0) : n ? (n.play(), i.default.readToMe.hasPlayedForCurrentQuestion = !0) : (_q(m), i.default.readToMe.hasPlayedForCurrentQuestion = !0);
                }
            } else
                _m(m.audio);
        }, _m = n => {
            if (!i.default.readToMe.enabled || i.default.readToMe.enabled && !i.default.readToMe.currentlyPlayingQuestionAudio && !i.default.readToMe.currentlyPlayingAnswerAudio && i.default.readToMe.hasPlayedForCurrentQuestion) {
                let o = new(0, f.Howl)({
                    src: [(0, g.getCloudinaryUrl)(n)],
                    onplay: () => _o(),
                    onend: () => _q(),
                    html5: !0
                });
                i.default.readToMe.audioQuestion = o, o.play();
            }
        }, n = () => {
            i.default.readToMe.isCurrentlySpeaking = !1, i.default.readToMe.currentlyPlayingAnswerAudio = !1, i.default.readToMe.finishedReadingQuestion = !0, window.speechSynthesis.cancel();
        }, _o = () => {
            i.default.readToMe.currentlyPlayingQuestionAudio = !0;
        }, _p = () => {
            i.default.readToMe.currentlyPlayingQuestionText = !0;
        }, _q = r => {
            i.default.readToMe.currentlyPlayingQuestionAudio = !1, i.default.readToMe.currentlyPlayingQuestionText = !1, r && (i.default.readToMe.answersTimeout = setTimeout(() => (async s => {
                i.default.readToMe.isCurrentlySpeaking = !0;
                const t = s.answers.filter(u => null != u.text);
                if (s.type === h.QuestionType.multipleChoice && t.length) {
                    i.default.readToMe.currentlyPlayingAnswerAudio = !0;
                    const u = s.answers.findIndex(v => v._id === t[t.length - 1]._id);
                    for (const [v, w] of s.answers.entries()) {
                        if (!w.text)
                            continue;
                        let x = new SpeechSynthesisUtterance();
                        x.text = w.text, x.rate = 0.8, x.voice = await _r(), x.onstart = () => i.default.readToMe.answerIndex = v, x.onend = () => {
                            window.speechSynthesis.pause(), setTimeout(() => window.speechSynthesis.resume(), 500);
                        }, v >= u && (x.onend = () => n()), window.speechSynthesis.speak(x);
                    }
                } else
                    n();
            })(r), 500));
        }, _r = async () => {
            let s = await _s();
            if (null == s ? void 0 : s.length) {
                const t = s.filter(u => j.includes(u.name));
                if (t.length)
                    return t[0];
            }
            return null;
        }, _s = () => new Promise(t => {
            i.default.readToMe.chosenVoice && t([i.default.readToMe.chosenVoice]);
            let u = speechSynthesis.getVoices();
            u.length ? t(u) : (t([]), speechSynthesis.onvoiceschanged = () => {
                u = speechSynthesis.getVoices(), t(u);
            });
        });
    var _t = {
        play: (u, v = !0) => {
            k(v), l(u);
        },
        stop: k,
        hasFinishedReading: () => i.default.readToMe.finishedReadingQuestion,
        playAudio: _m,
        canPlayAgain: () => i.default.readToMe.canPlayAgain
    };
}), c.register('.....', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    b(d.exports, 'QuestionType', function() {
        return f;
    }), b(d.exports, 'TextInputAnswerType', function() {
        return h;
    }), (g = f || (f = {})).multipleChoice = 'mc', g.textInput = 'text', (i = h || (h = {}))[i.exact = 1] = 'exact', i[i.contains = 2] = 'contains';
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        readToMe: new(0, (c('.....')).default)()
    };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....');
    class i {
        constructor() {
            (0, f.default)(this, 'audioQuestion', null), this.enabled = !1, this.canPlayAgain = !0, this.isCurrentlySpeaking = !1, this.hasPlayedForCurrentQuestion = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.finishedReadingQuestion = !1, this.speechQuestion = null, this.chosenVoice = null, this.answersTimeout = null, this.reset = j => {
                this.isCurrentlySpeaking = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.audioQuestion = null, this.speechQuestion = null, j && (this.hasPlayedForCurrentQuestion = !1, this.finishedReadingQuestion = !1, this.canPlayAgain = !0);
            }, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'enabled', void 0), (0, g.__decorate)([h.observable], i.prototype, 'canPlayAgain', void 0), (0, g.__decorate)([h.observable], i.prototype, 'isCurrentlySpeaking', void 0), (0, g.__decorate)([h.observable], i.prototype, 'hasPlayedForCurrentQuestion', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentlyPlayingQuestionAudio', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentlyPlayingQuestionText', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentlyPlayingAnswerAudio', void 0), (0, g.__decorate)([h.observable], i.prototype, 'answerIndex', void 0), (0, g.__decorate)([h.observable], i.prototype, 'finishedReadingQuestion', void 0), (0, g.__decorate)([h.observable], i.prototype, 'speechQuestion', void 0), (0, g.__decorate)([h.observable], i.prototype, 'chosenVoice', void 0), (0, g.__decorate)([h.observable], i.prototype, 'answersTimeout', void 0), (0, g.__decorate)([h.action.bound], i.prototype, 'reset', void 0);
    var _j = i;
}), c.register('.....', function(d, e) {
    b(d.exports, 'Container', function() {
        return _v;
    }), b(d.exports, 'default', function() {
        return _u;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....');
    c('.....');
    var j = c('.....'),
        k = c('.....'),
        l = c('.....'),
        m = c('.....'),
        n = c('.....'),
        o = c('.....');
    let p, q, r, s, t = u => u;
    var _u = v => {
        const [w, x] = a(g).useState({
            width: -1,
            height: -1
        }), [y, z] = a(g).useState(!1), {
            text: A,
            image: B,
            audio: C,
            latex: D
        } = v, {
            width: E
        } = w;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                y && (0, f.jsx)(j.default, {
                    large: (0, n.getCloudinaryUrl)(B),
                    onClose: () => z(!1),
                    hideDownload: !0,
                    showRotate: !1,
                    hideZoom: !0
                }),
                (0, f.jsxs)(_v, {
                    children: [
                        (0, f.jsxs)(_w, {
                            children: [
                                (0, f.jsx)(i.default, {
                                    bounds: !0,
                                    onResize: F => {
                                        F.bounds && x(F.bounds);
                                    },
                                    children: ({
                                        measureRef: F
                                    }) => (0, f.jsx)('div', {
                                        ref: F,
                                        style: {
                                            flex: 1
                                        }
                                    })
                                }),
                                C && (0, f.jsx)(k.default, {
                                    audio: C
                                }),
                                C && !B && !D && (0, f.jsx)('div', {
                                    style: {
                                        width: '2vw'
                                    }
                                }),
                                B && (0, f.jsx)('img', {
                                    src: (0, n.getCloudinaryUrl)(B),
                                    alt: 'Question',
                                    onClick: () => z(!0),
                                    style: {
                                        maxHeight: '90%',
                                        maxWidth: `calc(80% - ${ C ? 56 : 0 }px)`,
                                        marginRight: '2vw',
                                        marginLeft: C ? '2vw' : 0,
                                        borderRadius: 4,
                                        cursor: 'pointer'
                                    }
                                }),
                                D && (0, f.jsx)(_x, {
                                    style: {
                                        width: `calc(80% - ${ C ? 56 : 0 }px)`,
                                        marginLeft: C ? '2vw' : 0
                                    },
                                    children: (0, f.jsx)(m.default, {
                                        text: (0, f.jsx)(o.default, {
                                            latex: D
                                        }),
                                        noBold: !0
                                    })
                                })
                            ]
                        }),
                        (0, f.jsxs)(_y, {
                            children: [
                                (0, f.jsx)(m.default, {
                                    text: (0, l.parseText)(v.allowGoogleTranslate, A),
                                    paddingHorizontal: '0px',
                                    paddingVertical: '6%',
                                    customStyle: {
                                        width: `calc(100% - ${ E }px)`
                                    },
                                    mode: 'multi',
                                    disableHorizontalCentering: !0,
                                    highlighted: v.highlighted,
                                    noBold: v.noBold
                                }),
                                (0, f.jsx)('div', {
                                    style: {
                                        width: E,
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
    const _v = h.default.div(p || (p = t`
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
        _w = h.default.div(q || (q = t`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`)),
        _x = h.default.div(r || (r = t`
  height: 90%;
  margin-right: 2vw;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10%;
`)),
        _y = h.default.div(s || (s = t`
  width: 60%;
  display: flex;
  align-items: center;
  height: 100%;
`));
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _y;
    });
    var f = c('.....'),
        g = c('.....'),
        h = c('.....'),
        i = c('.....'),
        j = c('.....'),
        k = c('.....'),
        l = [
            'client',
            'offset',
            'scroll',
            'bounds',
            'margin'
        ];

    function m(n) {
        var o = [];
        return l.forEach(function(p) {
            n[p] && o.push(p);
        }), o;
    }

    function o(p, q) {
        var r = {};
        if (q.indexOf('client') > -1 && (r.client = {
                top: p.clientTop,
                left: p.clientLeft,
                width: p.clientWidth,
                height: p.clientHeight
            }), q.indexOf('offset') > -1 && (r.offset = {
                top: p.offsetTop,
                left: p.offsetLeft,
                width: p.offsetWidth,
                height: p.offsetHeight
            }), q.indexOf('scroll') > -1 && (r.scroll = {
                top: p.scrollTop,
                left: p.scrollLeft,
                width: p.scrollWidth,
                height: p.scrollHeight
            }), q.indexOf('bounds') > -1) {
            var s = p.getBoundingClientRect();
            r.bounds = {
                top: s.top,
                right: s.right,
                bottom: s.bottom,
                left: s.left,
                width: s.width,
                height: s.height
            };
        }
        if (q.indexOf('margin') > -1) {
            var t = getComputedStyle(p);
            r.margin = {
                top: t ? parseInt(t.marginTop) : 0,
                right: t ? parseInt(t.marginRight) : 0,
                bottom: t ? parseInt(t.marginBottom) : 0,
                left: t ? parseInt(t.marginLeft) : 0
            };
        }
        return r;
    }

    function s(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView || window;
    }
    var t, u, v, w, x = (t = function(y) {
        var z = y.measure,
            A = y.measureRef,
            B = y.contentRect;
        return (0, y.children)({
            measure: z,
            measureRef: A,
            contentRect: B
        });
    }, v = u = function(y) {
        function z() {
            for (var A, B = arguments.length, C = new Array(B), D = 0; D < B; D++)
                C[D] = arguments[D];
            return (z = y.call.apply(y, [this].concat(C)) || this).state = {
                contentRect: {
                    entry: {},
                    client: {},
                    offset: {},
                    scroll: {},
                    bounds: {},
                    margin: {}
                }
            }, z._animationFrameID = null, z._resizeObserver = null, z._node = null, z._window = null, z.measure = function(E) {
                var F = o(z._node, w || m(z.props));
                E && (F.entry = E[0].contentRect), z._animationFrameID = z._window.requestAnimationFrame(function() {
                    null !== z._resizeObserver && (z.setState({
                        contentRect: F
                    }), 'function' == typeof z.props.onResize && z.props.onResize(F));
                });
            }, z._handleRef = function(E) {
                null !== z._resizeObserver && null !== z._node && z._resizeObserver.unobserve(z._node), z._node = E, z._window = s(z._node);
                var F = z.props.innerRef;
                F && ('function' == typeof F ? F(z._node) : F.current = z._node), null !== z._resizeObserver && null !== z._node && z._resizeObserver.observe(z._node);
            }, z;
        }
        (0, h.default)(z, y);
        var E = z.prototype;
        return E.componentDidMount = function() {
            this._resizeObserver = null !== this._window && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new(0, k.default)(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), 'function' == typeof this.props.onResize && this.props.onResize(o(this._node, w || m(this.props))));
        }, E.componentWillUnmount = function() {
            null !== this._window && this._window.cancelAnimationFrame(this._animationFrameID), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
        }, E.render = function() {
            var F = this.props,
                G = (F.innerRef, F.onResize, (0, g.default)(F, [
                    'innerRef',
                    'onResize'
                ]));
            return (0, i.createElement)(t, (0, f.default)({}, G, {
                measureRef: this._handleRef,
                measure: this.measure,
                contentRect: this.state.contentRect
            }));
        }, z;
    }(i.Component), u.propTypes = {
        client: a(j).bool,
        offset: a(j).bool,
        scroll: a(j).bool,
        bounds: a(j).bool,
        margin: a(j).bool,
        innerRef: a(j).oneOfType([
            a(j).object,
            a(j).func
        ]),
        onResize: a(j).func
    }, v);
    x.displayName = 'Measure', x.propTypes.children = a(j).func;
    var _y = x;
}), c.register('.....', function(d, e) {
    b(d.exports, 'parseText', function() {
        return _h;
    }), b(d.exports, 'clickHandler', function() {
        return _i;
    }), b(d.exports, 'isQuestionCorrect', function() {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    const _h = (i, j) => (0, f.jsx)('span', {
            className: i ? '' : 'notranslate lang-en',
            children: j
        }),
        _i = (j, k) => {
            k && (l => !l || !0 !== l.isTrusted && !1 !== l.isTrusted || l.isTrusted)(j) && k();
        },
        _j = (k, l) => {
            if (!l)
                return !1;
            let m = !1;
            if (k) {
                k.answers.find(n => {
                    if (n.correct) {
                        if (k.type === g.QuestionType.multipleChoice)
                            return l === n._id;
                        if (k.type === g.QuestionType.textInput) {
                            const o = _k(l),
                                p = _k(n.text);
                            var q;
                            const r = null !== (q = n.textType) && void 0 !== q ? q : g.TextInputAnswerType.exact;
                            if (r === g.TextInputAnswerType.exact)
                                return o === p;
                            if (r === g.TextInputAnswerType.contains)
                                return o.includes(p);
                        }
                    }
                    return !1;
                }) && (m = !0);
            }
            return m;
        },
        _k = l => {
            let m = l.trim();
            return m = m.replace(/[\u2018\u2019]/g, '\'').replace(/[\u201C\u201D]/g, '"'), m = m.toLowerCase(), m;
        };
}), c.register('.....', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'),
        h = c('.....');
    var _i = j => (0, f.jsx)(g.default, {
        mode: 'multi',
        text: (0, h.parseText)(j.allowGoogleTranslate || !1, j.text),
        highlighted: j.highlighted,
        noBold: j.noBold
    });
});