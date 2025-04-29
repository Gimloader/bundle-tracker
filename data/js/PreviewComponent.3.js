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
c.register('NevzH', function(d, e) {
    b(d.exports, 'default', function() {
        return _n;
    });
    var f = c('gRbUn'),
        g = c('O0Kav');
    c('FtjD+');
    var h = c('cCJZF'),
        i = c('HloXO'),
        j = c('JuRCP'),
        k = c('F3ltk'),
        l = c('8V870'),
        m = c('YBABi');
    var _n = b => {
        const [o, p] = a(g).useState(!1), {
            image: q,
            audio: r,
            latex: s
        } = b;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                q && o && (0, f.jsx)(h.default, {
                    large: (0, i.getCloudinaryUrl)(q),
                    onClose: () => p(!1),
                    hideDownload: !0,
                    showRotate: !1,
                    hideZoom: !0
                }),
                (0, f.jsxs)(m.Container, {
                    children: [
                        r && (0, f.jsx)(l.default, {
                            audio: r
                        }),
                        q && (0, f.jsx)('img', {
                            src: (0, i.getCloudinaryUrl)(q),
                            alt: 'Question',
                            onClick: () => p(!0),
                            style: {
                                maxHeight: '90%',
                                height: '90%',
                                maxWidth: '90%',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }
                        }),
                        s && (0, f.jsx)(k.default, {
                            text: (0, f.jsx)(j.default, {
                                latex: s
                            }),
                            noBold: !0
                        })
                    ]
                })
            ]
        });
    };
}), c.register('FtjD+', function(d, e) {
    b(d.exports, 'Lightbox', function() {
        return c('cCJZF').default;
    });
    var f = c('O0Kav'),
        g = c('cCJZF');
    g = c('cCJZF');

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

    function k(l, m) {
        return !m || 'object' !== h(m) && 'function' != typeof m ? _m(l) : m;
    }

    function l(m) {
        return Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n);
        }, l(m);
    }

    function _m(n) {
        if (void 0 === n)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return n;
    }

    function n(o, p) {
        return Object.setPrototypeOf || function(q, r) {
            return q.__proto__ = r, q;
        }, n(o, p);
    }

    function o(p, q, r) {
        return q in p ? Object.defineProperty(p, q, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[q] = r, p;
    }
    f.Component;
}), c.register('cCJZF', function(d, e) {
    b(d.exports, 'default', function() {
        return _r;
    });
    var f = c('O0Kav'),
        g = c('8POCS'),
        h = c('I5/Uy'),
        i = c('PSeGP');

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

    function m(n, o) {
        return !o || 'object' !== j(o) && 'function' != typeof o ? _o(n) : o;
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
            k(this, t);
            for (var w = arguments.length, x = new Array(w), y = 0; y < w; y++)
                x[y] = arguments[y];
            return q(_o(v = m(this, (u = n(t)).call.apply(u, [this].concat(x)))), 'state', {
                move: {
                    x: 0,
                    y: 0
                },
                moveStart: void 0,
                zoomed: !1,
                rotationDeg: 0
            }), q(_o(v), 'handleKeyDown', function(z) {
                27 !== z.keyCode && 13 !== z.keyCode || v.props.onClose();
            }), q(_o(v), 'getCoordinatesIfOverImg', function(z) {
                var A = z.changedTouches ? z.changedTouches[0] : z;
                if ('react-modal-image-img' === A.target.id) {
                    var B = v.contentEl.getBoundingClientRect();
                    return {
                        x: A.clientX - B.left,
                        y: A.clientY - B.top
                    };
                }
            }), q(_o(v), 'handleMouseDownOrTouchStart', function(z) {
                if (z.preventDefault(), !(z.touches && z.touches.length > 1)) {
                    var A = v.getCoordinatesIfOverImg(z);
                    A || v.props.onClose(), v.state.zoomed && v.setState(function(B) {
                        return {
                            moveStart: {
                                x: A.x - B.move.x,
                                y: A.y - B.move.y
                            }
                        };
                    });
                }
            }), q(_o(v), 'handleMouseMoveOrTouchMove', function(z) {
                if (z.preventDefault(), v.state.zoomed && v.state.moveStart && !(z.touches && z.touches.length > 1)) {
                    var A = v.getCoordinatesIfOverImg(z);
                    A && v.setState(function(B) {
                        return {
                            move: {
                                x: A.x - B.moveStart.x,
                                y: A.y - B.moveStart.y
                            }
                        };
                    });
                }
            }), q(_o(v), 'handleMouseUpOrTouchEnd', function(z) {
                v.setState({
                    moveStart: void 0
                });
            }), q(_o(v), 'toggleZoom', function(z) {
                z.preventDefault(), v.setState(function(A) {
                    return {
                        zoomed: !A.zoomed,
                        move: A.zoomed ? {
                            x: 0,
                            y: 0
                        } : A.move
                    };
                });
            }), q(_o(v), 'toggleRotate', function(z) {
                z.preventDefault(), 360 !== v.state.rotationDeg ? v.setState(function(A) {
                    return {
                        rotationDeg: A.rotationDeg += 90
                    };
                }) : v.setState({
                    rotationDeg: 90
                });
            }), v;
        }
        var u, v, w;
        return function(x, y) {
            if ('function' != typeof y && null !== y)
                throw new TypeError('Super expression must either be null or a function');
            x.prototype = Object.create(y && y.prototype, {
                constructor: {
                    value: x,
                    writable: !0,
                    configurable: !0
                }
            }), y && p(x, y);
        }(t, s), u = t, (v = [{
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
                    var x = this,
                        y = this.props,
                        z = y.medium,
                        A = y.large,
                        B = y.alt,
                        C = y.onClose,
                        D = y.hideDownload,
                        E = y.hideZoom,
                        F = y.showRotate,
                        G = y.imageBackgroundColor,
                        H = void 0 === G ? 'black' : G,
                        I = this.state,
                        J = I.move,
                        K = I.zoomed,
                        L = I.rotationDeg;
                    return a(f).createElement('div', null, a(f).createElement(g.default, {
                        name: '__react_modal_image__lightbox',
                        css: (0, g.lightboxStyles)({
                            imageBackgroundColor: H
                        })
                    }), a(f).createElement('div', {
                        className: '__react_modal_image__modal_container'
                    }, a(f).createElement('div', {
                        className: '__react_modal_image__modal_content',
                        onMouseDown: this.handleMouseDownOrTouchStart,
                        onMouseUp: this.handleMouseUpOrTouchEnd,
                        onMouseMove: this.handleMouseMoveOrTouchMove,
                        onTouchStart: this.handleMouseDownOrTouchStart,
                        onTouchEnd: this.handleMouseUpOrTouchEnd,
                        onTouchMove: this.handleMouseMoveOrTouchMove,
                        ref: function(M) {
                            x.contentEl = M;
                        }
                    }, K && a(f).createElement(i.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__large_img',
                        src: A || z,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) translate3d('.concat(J.x, 'px, ').concat(J.y, 'px, 0) rotate(').concat(L, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(J.x, 'px, ').concat(J.y, 'px, 0) rotate(').concat(L, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(J.x, 'px, ').concat(J.y, 'px, 0) rotate(').concat(L, 'deg)')
                        },
                        handleDoubleClick: this.toggleZoom
                    }), !K && a(f).createElement(i.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__medium_img',
                        src: z || A,
                        handleDoubleClick: this.toggleZoom,
                        contextMenu: !z,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) rotate('.concat(L, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(L, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(L, 'deg)')
                        }
                    })), a(f).createElement(h.default, {
                        image: A || z,
                        alt: B,
                        zoomed: K,
                        toggleZoom: this.toggleZoom,
                        toggleRotate: this.toggleRotate,
                        onClose: C,
                        enableDownload: !D,
                        enableZoom: !E,
                        enableRotate: !!F
                    })));
                }
            }
        ]) && l(u.prototype, v), w && l(u, w), t;
    }(f.Component);
}), c.register('8POCS', function(d, e) {
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

    function i(j, k) {
        return !k || 'object' !== f(k) && 'function' != typeof k ? function(l) {
            if (void 0 === l)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return l;
        }(j) : k;
    }

    function j(k) {
        return j = Object.setPrototypeOf ? Object.getPrototypeOf : function(l) {
            return l.__proto__ || Object.getPrototypeOf(l);
        }, j(k);
    }

    function k(l, m) {
        return k = Object.setPrototypeOf || function(n, o) {
            return n.__proto__ = o, n;
        }, k(l, m);
    }
    b(d.exports, 'default', function() {
        return _l;
    }), b(d.exports, 'lightboxStyles', function() {
        return _m;
    });
    var _l = function(m) {
            function n() {
                return g(this, n), i(this, j(n).apply(this, arguments));
            }
            var o, p, q;
            return function(r, s) {
                if ('function' != typeof s && null !== s)
                    throw new TypeError('Super expression must either be null or a function');
                r.prototype = Object.create(s && s.prototype, {
                    constructor: {
                        value: r,
                        writable: !0,
                        configurable: !0
                    }
                }), s && k(r, s);
            }(n, m), o = n, (p = [{
                    key: 'componentDidMount',
                    value: function() {
                        ! function(r, s) {
                            if (!document.head.querySelector('#' + r)) {
                                var t = document.createElement('style');
                                t.textContent = s, t.type = 'text/css', t.id = r, document.head.appendChild(t);
                            }
                        }(this.props.name, this.props.css);
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function() {
                        var r = document.getElementById(this.props.name);
                        r.parentNode.removeChild(r);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return null;
                    }
                }
            ]) && h(o.prototype, p), q && h(o, q), n;
        }(c('O0Kav').Component),
        _m = function(n) {
            var o = n.imageBackgroundColor;
            return '\n  body {\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_container {\n    position: fixed;\n    z-index: 5000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    touch-action: none;\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_content {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n\n  .__react_modal_image__modal_content img, \n  .__react_modal_image__modal_content svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    overflow: hidden;\n  }\n\n  .__react_modal_image__medium_img {\n    max-width: 98%;\n    max-height: 98%;\n    background-color: '.concat(o, ';\n  }\n\n  .__react_modal_image__large_img {\n    cursor: move;\n    background-color: ').concat(o, '\n  }\n\n  .__react_modal_image__icon_menu a {\n    display: inline-block;\n    font-size: 40px;\n    cursor: pointer;\n    line-height: 40px;\n    box-sizing: border-box;\n    border: none;\n    padding: 0px 5px 0px 5px;\n    margin-left: 10px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  .__react_modal_image__icon_menu {\n    display: inline-block;\n    float: right;\n  }\n\n  .__react_modal_image__caption {\n    display: inline-block;\n    color: white;\n    font-size: 120%;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .__react_modal_image__header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n  }\n');
        };
}), c.register('I5/Uy', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = c('sWXef'),
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
}), c.register('sWXef', function(d, e) {
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
    var f = c('O0Kav'),
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
}), c.register('PSeGP', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('O0Kav'),
        g = c('sWXef');

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

    function k(l, m) {
        return !m || 'object' !== h(m) && 'function' != typeof m ? _m(l) : m;
    }

    function l(m) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n);
        }, l(m);
    }

    function _m(n) {
        if (void 0 === n)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return n;
    }

    function n(o, p) {
        return n = Object.setPrototypeOf || function(q, r) {
            return q.__proto__ = r, q;
        }, n(o, p);
    }

    function o(p, q, r) {
        return q in p ? Object.defineProperty(p, q, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[q] = r, p;
    }
    var _p = function(q) {
        function r() {
            var s, t;
            i(this, r);
            for (var u = arguments.length, v = new Array(u), w = 0; w < u; w++)
                v[w] = arguments[w];
            return o(_m(t = k(this, (s = l(r)).call.apply(s, [this].concat(v)))), 'state', {
                loading: !0
            }), o(_m(t), 'handleOnLoad', function() {
                t.setState({
                    loading: !1
                });
            }), o(_m(t), 'handleOnContextMenu', function(x) {
                !t.props.contextMenu && x.preventDefault();
            }), t;
        }
        var s, t, u;
        return function(v, w) {
            if ('function' != typeof w && null !== w)
                throw new TypeError('Super expression must either be null or a function');
            v.prototype = Object.create(w && w.prototype, {
                constructor: {
                    value: v,
                    writable: !0,
                    configurable: !0
                }
            }), w && n(v, w);
        }(r, q), s = r, (t = [{
            key: 'render',
            value: function() {
                var v = this.props,
                    w = v.id,
                    x = v.className,
                    y = v.src,
                    z = v.style,
                    A = v.handleDoubleClick;
                return a(f).createElement('div', null, this.state.loading && a(f).createElement(g.SpinnerIcon, null), a(f).createElement('img', {
                    id: w,
                    className: x,
                    src: y,
                    style: z,
                    onLoad: this.handleOnLoad,
                    onDoubleClick: A,
                    onContextMenu: this.handleOnContextMenu
                }));
            }
        }]) && j(s.prototype, t), u && j(s, u), r;
    }(f.Component);
}), c.register('F3ltk', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('s/YA9'),
        g = c('gRbUn'),
        h = c('O0Kav'),
        i = c('DbXyp'),
        j = c('u4s09');
    let k;
    const l = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        },
        m = j.default.div(k || (k = (d => d)`
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
}), c.register('DbXyp', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.Textfit = void 0;
    var f, g = c('2raYc'),
        h = (f = g) && f.__esModule ? f : {
            default: f
        };
    d.exports.Textfit = h.default, d.exports.default = h.default;
}), c.register('2raYc', function(d, e) {
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
            return function(i, j, k) {
                return j && h(i.prototype, j), k && h(i, k), i;
            };
        }(),
        h = _p(c('O0Kav')),
        i = _p(c('HoW8Y')),
        j = _p(c('aKySM')),
        k = _p(c('LK0dV')),
        l = _p(c('k22j1')),
        m = _p(c('pu1rW')),
        n = _p(c('J6c2a')),
        o = c('O3v6e');

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
        return function(v, w) {
            if ('function' != typeof w && null !== w)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof w);
            v.prototype = Object.create(w && w.prototype, {
                constructor: {
                    value: v,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), w && (Object.setPrototypeOf ? Object.setPrototypeOf(v, w) : v.__proto__ = w);
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
                value: function(v) {
                    this.state.ready && ((0, j.default)(this.props, v) || this.process());
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
                    var v = this,
                        w = this.props,
                        x = w.min,
                        y = w.max,
                        z = w.mode,
                        A = w.forceSingleModeWidth,
                        B = w.onReady,
                        C = this._parent,
                        D = this._child,
                        E = (0, o.innerWidth)(C),
                        F = (0, o.innerHeight)(C);
                    if (F <= 0 || isNaN(F))
                        console.warn('Can not process element without height. Make sure the element is displayed and has a static height.');
                    else if (E <= 0 || isNaN(E))
                        console.warn('Can not process element without width. Make sure the element is displayed and has a static width.');
                    else {
                        var G = (0, n.default)();
                        this.pid = G;
                        var H = function() {
                                return G !== v.pid;
                            },
                            I = 'multi' === z ? function() {
                                return r(D, F);
                            } : function() {
                                return q(D, E);
                            },
                            J = 'multi' === z ? function() {
                                return q(D, E);
                            } : function() {
                                return r(D, F);
                            },
                            K = void 0,
                            L = x,
                            M = y;
                        this.setState({
                            ready: !1
                        }), (0, k.default)([
                            function(N) {
                                return (0, l.default)(function() {
                                    return L <= M;
                                }, function(O) {
                                    if (H())
                                        return O(!0);
                                    K = parseInt((L + M) / 2, 10), v.setState({
                                        fontSize: K
                                    }, function() {
                                        return H() ? O(!0) : (I() ? L = K + 1 : M = K - 1, O());
                                    });
                                }, N);
                            },
                            function(N) {
                                return 'single' === z && A || J() ? N() : (L = x, M = K, (0, l.default)(function() {
                                    return L < M;
                                }, function(O) {
                                    if (H())
                                        return O(!0);
                                    K = parseInt((L + M) / 2, 10), v.setState({
                                        fontSize: K
                                    }, function() {
                                        return G !== v.pid ? O(!0) : (J() ? L = K + 1 : M = K - 1, O());
                                    });
                                }, N));
                            },
                            function(N) {
                                if (K = Math.min(L, M), K = Math.max(K, x), K = Math.min(K, y), K = Math.max(K, 0), H())
                                    return N(!0);
                                v.setState({
                                    fontSize: K
                                }, N);
                            }
                        ], function(N) {
                            N || H() || v.setState({
                                ready: !0
                            }, function() {
                                return B(K);
                            });
                        });
                    }
                }
            },
            {
                key: 'render',
                value: function() {
                    var v = this,
                        w = this.props,
                        x = w.children,
                        y = w.text,
                        z = w.style,
                        A = (w.min, w.max, w.mode),
                        B = (w.forceWidth, w.forceSingleModeWidth, w.throttle, w.autoResize, w.onReady, function(C, D) {
                            var E = {};
                            for (var F in C)
                                D.indexOf(F) >= 0 || Object.prototype.hasOwnProperty.call(C, F) && (E[F] = C[F]);
                            return E;
                        }(w, [
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
                        C = this.state,
                        D = C.fontSize,
                        E = C.ready,
                        F = f({}, z, {
                            fontSize: D
                        }),
                        G = {
                            display: E ? 'block' : 'inline-block'
                        };
                    return 'single' === A && (G.whiteSpace = 'nowrap'), h.default.createElement('div', f({
                        ref: function(H) {
                            return v._parent = H;
                        },
                        style: F
                    }, B), h.default.createElement('div', {
                        ref: function(H) {
                            return v._child = H;
                        },
                        style: G
                    }, y && 'function' == typeof x ? E ? x(y) : y : x));
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
}), c.register('aKySM', function(d, e) {
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
}), c.register('LK0dV', function(d, e) {
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
            j ? _m.default.nextTick(m) : m();
        }
        f.length > 0 ? f[0](function g(l, _m) {
            h.push(_m), ++i >= f.length || l ? k(l) : f[i](g);
        }) : k(null);
        j = !1;
    };
    var f, g = c('SOClG'),
        h = (f = g) && f.__esModule ? f : {
            default: f
        };
}), c.register('k22j1', function(d, e) {
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
}), c.register('pu1rW', function(d, e) {
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
}), c.register('J6c2a', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = function() {
        return c++;
    };
    var f = 0;
}), c.register('O3v6e', function(d, e) {
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.innerHeight = function(f) {
        var g = window.getComputedStyle(f, null);
        return f.clientHeight - parseInt(g.getPropertyValue('padding-top'), 10) - parseInt(g.getPropertyValue('padding-bottom'), 10);
    }, d.exports.innerWidth = function(f) {
        var g = window.getComputedStyle(f, null);
        return f.clientWidth - parseInt(g.getPropertyValue('padding-left'), 10) - parseInt(g.getPropertyValue('padding-right'), 10);
    };
}), c.register('8V870', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('6jmvl'),
        h = c('JczHT'),
        i = c('45b72'),
        j = c('nuCd2'),
        k = c('svlca');
    var _l = (0, g.observer)(b => (0, f.jsx)(i.default, {
        title: (0, f.jsx)('span', {
            style: {
                fontSize: 14
            },
            children: 'Replay Audio'
        }),
        placement: 'left',
        children: (0, f.jsx)(h.default, {
            onClick: () => {
                k.default.playAudio(b.audio);
            },
            color: 'secondary',
            style: {
                flexShrink: 0
            },
            children: (0, f.jsx)(a(j), {})
        })
    }));
}), c.register('JczHT', function(d, e) {
    b(d.exports, 'default', function() {
        return _t;
    });
    var f = c('DFnC8'),
        g = c('+pD1R19'),
        h = c('O0Kav');
    c('HoW8Y');
    var i = c('PEco5'),
        j = c('T8OqN'),
        k = c('grJHt'),
        l = c('KOz0K'),
        m = h.forwardRef(function(n, o) {
            var p = n.children,
                q = n.classes,
                r = n.className,
                s = n.color,
                _t = void 0 === s ? 'default' : s,
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
                } [_t]),
                component: v,
                disabled: x,
                focusRipple: !z,
                focusVisibleClassName: (0, i.default)(q.focusVisible, A),
                ref: o
            }, F), h.createElement('span', {
                className: q.label
            }, p));
        }),
        n = (0, j.default)(function(o) {
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
}), c.register('grJHt', function(d, e) {
    b(d.exports, 'default', function() {
        return _w;
    });
    var f = c('+pD1R19'),
        g = c('DFnC8'),
        h = c('O0Kav');
    c('HoW8Y');
    var i = c('kZLBJ'),
        j = c('PEco5'),
        k = c('ZzxNA'),
        l = c('DieOV'),
        m = c('T8OqN'),
        n = c('jFtOv'),
        o = c('dEXb8'),
        p = h.forwardRef(function(q, r) {
            var s = q.action,
                t = q.buttonRef,
                u = q.centerRipple,
                v = void 0 !== u && u,
                _w = q.children,
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
            h.useImperativeHandle(s, function() {
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
            var mb = lb('start', Q),
                nb = lb('stop', W),
                ob = lb('stop', S),
                pb = lb('stop', function(qb) {
                    fb && qb.preventDefault(), R && R(qb);
                }),
                qb = lb('start', V),
                rb = lb('stop', T),
                sb = lb('stop', U),
                tb = lb('stop', function(ub) {
                    fb && (jb(ub), gb(!1)), K && K(ub);
                }, !1),
                ub = (0, l.default)(function(vb) {
                    cb.current || (cb.current = vb.currentTarget), ib(vb) && (gb(!0), N && N(vb)), M && M(vb);
                }),
                vb = function() {
                    var wb = i.findDOMNode(cb.current);
                    return A && 'button' !== A && !('A' === wb.tagName && wb.href);
                },
                wb = h.useRef(!1),
                xb = (0, l.default)(function(yb) {
                    I && !wb.current && fb && db.current && ' ' === yb.key && (wb.current = !0, yb.persist(), db.current.stop(yb, function() {
                        db.current.start(yb);
                    })), yb.target === yb.currentTarget && vb() && ' ' === yb.key && yb.preventDefault(), O && O(yb), yb.target === yb.currentTarget && vb() && 'Enter' === yb.key && !C && (yb.preventDefault(), L && L(yb));
                }),
                yb = (0, l.default)(function(zb) {
                    I && ' ' === zb.key && db.current && fb && !zb.defaultPrevented && (wb.current = !1, zb.persist(), db.current.stop(zb, function() {
                        db.current.pulsate(zb);
                    })), P && P(zb), L && zb.target === zb.currentTarget && vb() && ' ' === zb.key && !zb.defaultPrevented && L(zb);
                }),
                zb = A;
            'button' === zb && bb.href && (zb = 'a');
            var Ab = {};
            'button' === zb ? (Ab.type = ab, Ab.disabled = C) : ('a' === zb && bb.href || (Ab.role = 'button'), Ab['aria-disabled'] = C);
            var Bb = (0, k.default)(t, r),
                Cb = (0, k.default)(kb, cb),
                Db = (0, k.default)(Bb, Cb),
                Eb = h.useState(!1),
                Fb = Eb[0],
                Gb = Eb[1];
            h.useEffect(function() {
                Gb(!0);
            }, []);
            var Hb = Fb && !E && !C;
            return h.createElement(zb, (0, f.default)({
                className: (0, j.default)(x.root, y, fb && [
                    x.focusVisible,
                    J
                ], C && x.disabled),
                onBlur: tb,
                onClick: L,
                onFocus: ub,
                onKeyDown: xb,
                onKeyUp: yb,
                onMouseDown: mb,
                onMouseLeave: pb,
                onMouseUp: ob,
                onDragLeave: nb,
                onTouchEnd: rb,
                onTouchMove: sb,
                onTouchStart: qb,
                ref: Db,
                tabIndex: C ? -1 : Y
            }, Ab, bb), _w, Hb ? h.createElement(o.default, (0, f.default)({
                ref: db,
                center: v
            }, Z)) : null);
        }),
        q = (0, m.default)({
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
}), c.register('DieOV', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('O0Kav'),
        g = 'undefined' != typeof window ? f.useLayoutEffect : f.useEffect;

    function _h(i) {
        var j = f.useRef(i);
        return g(function() {
            j.current = i;
        }), f.useCallback(function() {
            return j.current.apply(void 0, arguments);
        }, []);
    }
}), c.register('dEXb8', function(d, e) {
    b(d.exports, 'default', function() {
        return _u;
    });
    var f = c('+pD1R19'),
        g = c('q3eUo'),
        h = c('DFnC8'),
        i = c('O0Kav');
    c('HoW8Y');
    var j = c('Gp8sI'),
        k = c('PEco5'),
        l = c('T8OqN'),
        m = c('s0iZN'),
        n = i.forwardRef(function(o, p) {
            var q = o.center,
                r = void 0 !== q && q,
                s = o.classes,
                t = o.className,
                _u = (0, h.default)(o, [
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
                            var U = 2 * Math.max(Math.abs((S ? S.clientWidth : 0) - P), P) + 2,
                                V = 2 * Math.max(Math.abs((S ? S.clientHeight : 0) - Q), Q) + 2;
                            R = Math.sqrt(Math.pow(U, 2) + Math.pow(V, 2));
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
            }, _u), i.createElement(j.default, {
                component: null,
                exit: !0
            }, w));
        }),
        o = (0, l.default)(function(p) {
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
}), c.register('Gp8sI', function(d, e) {
    b(d.exports, 'default', function() {
        return _o;
    });
    var f = c('wlMK916'),
        g = c('+pD1R19'),
        h = c('SUQix16'),
        i = c('a8MeA');
    c('HoW8Y');
    var j = c('O0Kav'),
        k = c('zbXQY'),
        l = c('vCv/V'),
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
            var q = p.prototype;
            return q.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                });
            }, q.componentWillUnmount = function() {
                this.mounted = !1;
            }, p.getDerivedStateFromProps = function(r, s) {
                var t = s.children,
                    u = s.handleExited;
                return {
                    children: s.firstRender ? (0, l.getInitialChildMapping)(r, u) : (0, l.getNextChildMapping)(r, t, u),
                    firstRender: !1
                };
            }, q.handleExited = function(r, s) {
                var t = (0, l.getChildMapping)(this.props.children);
                r.key in t || (r.props.onExited && r.props.onExited(s), this.mounted && this.setState(function(u) {
                    var v = (0, g.default)({}, u.children);
                    return delete v[r.key], {
                        children: v
                    };
                }));
            }, q.render = function() {
                var r = this.props,
                    s = r.component,
                    t = r.childFactory,
                    u = (0, f.default)(r, [
                        'component',
                        'childFactory'
                    ]),
                    v = this.state.contextValue,
                    w = m(this.state.children).map(t);
                return delete u.appear, delete u.enter, delete u.exit, null === s ? a(j).createElement(k.default.Provider, {
                    value: v
                }, w) : a(j).createElement(k.default.Provider, {
                    value: v
                }, a(j).createElement(s, u, w));
            }, p;
        }(a(j).Component);
    n.propTypes = {}, n.defaultProps = {
        component: 'div',
        childFactory: function(o) {
            return o;
        }
    };
    var _o = n;
}), c.register('vCv/V', function(d, e) {
    b(d.exports, 'getChildMapping', function() {
        return _g;
    }), b(d.exports, 'getInitialChildMapping', function() {
        return _i;
    }), b(d.exports, 'getNextChildMapping', function() {
        return _j;
    });
    var f = c('O0Kav');

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

    function h(i, j, k) {
        return null != k[j] ? k[j] : i.props[j];
    }

    function _i(j, k) {
        return _g(j.children, function(l) {
            return (0, f.cloneElement)(l, {
                onExited: k.bind(null, l),
                in: !0,
                appear: h(l, 'appear', j),
                enter: h(l, 'enter', j),
                exit: h(l, 'exit', j)
            });
        });
    }

    function _j(k, l, m) {
        var n = _g(k.children),
            o = function(p, q) {
                function r(s) {
                    return s in q ? q[s] : p[s];
                }
                p = p || {}, q = q || {};
                var s, t = Object.create(null),
                    u = [];
                for (var v in p)
                    v in q ? u.length && (t[v] = u, u = []) : u.push(v);
                var w = {};
                for (var x in q) {
                    if (t[x])
                        for (s = 0; s < t[x].length; s++) {
                            var y = t[x][s];
                            w[t[x][s]] = r(y);
                        }
                    w[x] = r(x);
                }
                for (s = 0; s < u.length; s++)
                    w[u[s]] = r(u[s]);
                return w;
            }(l, n);
        return Object.keys(o).forEach(function(p) {
            var q = o[p];
            if ((0, f.isValidElement)(q)) {
                var r = p in l,
                    s = p in n,
                    t = l[p],
                    u = (0, f.isValidElement)(t) && !t.props.in;
                !s || r && !u ? s || !r || u ? s && r && (0, f.isValidElement)(t) && (o[p] = (0, f.cloneElement)(q, {
                    onExited: m.bind(null, q),
                    in: t.props.in,
                    exit: h(q, 'exit', k),
                    enter: h(q, 'enter', k)
                })) : o[p] = (0, f.cloneElement)(q, {
                    in: !1
                }) : o[p] = (0, f.cloneElement)(q, {
                    onExited: m.bind(null, q),
                    in: !0,
                    exit: h(q, 'exit', k),
                    enter: h(q, 'enter', k)
                });
            }
        }), o;
    }
}), c.register('s0iZN', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('O0Kav');
    c('HoW8Y');
    var g = c('PEco5'),
        h = c('DieOV'),
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
}), c.register('nuCd2', function(d, e) {
    var f = c('C0gCp');
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.default = void 0;
    var g = f(c('O0Kav')),
        h = (0, f(c('fvqhx')).default)(g.default.createElement('path', {
            d: 'M8 5v14l11-7z'
        }), 'PlayArrow');
    d.exports.default = h;
}), c.register('fvqhx', function(d, e) {
    var f = c('C0gCp');
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
    var _g = f(c('bioss')),
        _h = f(c('O0Kav')),
        _i = f(c('hTY3h'));
}), c.register('bioss', function(d, e) {
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
}), c.register('hTY3h', function(d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), b(d.exports, 'default', function() {
        return c('jU7Od').default;
    });
    c('jU7Od');
}), c.register('jU7Od', function(d, e) {
    b(d.exports, 'default', function() {
        return _s;
    });
    var f = c('+pD1R19'),
        g = c('DFnC8'),
        h = c('O0Kav');
    c('HoW8Y');
    var i = c('PEco5'),
        j = c('T8OqN'),
        k = c('KOz0K'),
        l = h.forwardRef(function(m, n) {
            var o = m.children,
                p = m.classes,
                q = m.className,
                r = m.color,
                _s = void 0 === r ? 'inherit' : r,
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
                className: (0, i.default)(p.root, q, 'inherit' !== _s && p['color'.concat((0, k.default)(_s))], 'default' !== w && p['fontSize'.concat((0, k.default)(w))]),
                focusable: 'false',
                viewBox: A,
                color: x,
                'aria-hidden': !y || void 0,
                role: y ? 'img' : void 0,
                ref: n
            }, B), o, y ? h.createElement('title', null, y) : null);
        });
    l.muiName = 'SvgIcon';
    var m = (0, j.default)(function(n) {
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
}), c.register('svlca', function(d, e) {
    b(d.exports, 'default', function() {
        return _t;
    });
    var f = c('6yrsF'),
        g = c('HloXO'),
        h = c('VJDaA'),
        i = c('eoj6K');
    const j = [
            'Samantha',
            'Victoria'
        ],
        k = d => {
            i.default.readToMe.audioQuestion && (i.default.readToMe.audioQuestion.stop(), i.default.readToMe.audioQuestion = null), i.default.readToMe.speechQuestion && (i.default.readToMe.speechQuestion.onend = null, i.default.readToMe.speechQuestion = null), i.default.readToMe.answersTimeout && clearTimeout(i.default.readToMe.answersTimeout), i.default.readToMe.reset(d), window.speechSynthesis.cancel();
        },
        l = async d => {
            if (i.default.readToMe.enabled || !d.audio || i.default.readToMe.hasPlayedForCurrentQuestion) {
                if ('speechSynthesis' in window && i.default.readToMe.enabled && !i.default.readToMe.isCurrentlySpeaking && !i.default.readToMe.hasPlayedForCurrentQuestion) {
                    let m, n;
                    i.default.readToMe.isCurrentlySpeaking = !0, (null == d ? void 0 : d.text) && (n = new SpeechSynthesisUtterance(d.text), n.voice = await _r(), n.rate = 0.8, i.default.readToMe.speechQuestion = n), (null == d ? void 0 : d.audio) && (m = new(0, f.Howl)({
                        src: [d.audio],
                        onplay: _o,
                        onend: (null == d ? void 0 : d.text) ? () => window.speechSynthesis.speak(n) : () => _q(d)
                    }), i.default.readToMe.audioQuestion = m), m && n ? (n.onstart = _p, n.onend = () => _q(d), m.play(), i.default.readToMe.hasPlayedForCurrentQuestion = !0) : n ? (n.onstart = _p, n.onend = () => _q(d), window.speechSynthesis.speak(n), i.default.readToMe.hasPlayedForCurrentQuestion = !0) : m ? (m.play(), i.default.readToMe.hasPlayedForCurrentQuestion = !0) : (_q(d), i.default.readToMe.hasPlayedForCurrentQuestion = !0);
                }
            } else
                _m(d.audio);
        }, _m = d => {
            if (!i.default.readToMe.enabled || i.default.readToMe.enabled && !i.default.readToMe.currentlyPlayingQuestionAudio && !i.default.readToMe.currentlyPlayingAnswerAudio && i.default.readToMe.hasPlayedForCurrentQuestion) {
                let n = new(0, f.Howl)({
                    src: [(0, g.getCloudinaryUrl)(d)],
                    onplay: () => _o(),
                    onend: () => _q(),
                    html5: !0
                });
                i.default.readToMe.audioQuestion = n, n.play();
            }
        }, n = () => {
            i.default.readToMe.isCurrentlySpeaking = !1, i.default.readToMe.currentlyPlayingAnswerAudio = !1, i.default.readToMe.finishedReadingQuestion = !0, window.speechSynthesis.cancel();
        }, _o = () => {
            i.default.readToMe.currentlyPlayingQuestionAudio = !0;
        }, _p = () => {
            i.default.readToMe.currentlyPlayingQuestionText = !0;
        }, _q = d => {
            i.default.readToMe.currentlyPlayingQuestionAudio = !1, i.default.readToMe.currentlyPlayingQuestionText = !1, d && (i.default.readToMe.answersTimeout = setTimeout(() => (async d => {
                i.default.readToMe.isCurrentlySpeaking = !0;
                const r = d.answers.filter(d => null != d.text);
                if (d.type === h.QuestionType.multipleChoice && r.length) {
                    i.default.readToMe.currentlyPlayingAnswerAudio = !0;
                    const s = d.answers.findIndex(d => d._id === r[r.length - 1]._id);
                    for (const [t, u] of d.answers.entries()) {
                        if (!u.text)
                            continue;
                        let v = new SpeechSynthesisUtterance();
                        v.text = u.text, v.rate = 0.8, v.voice = await _r(), v.onstart = () => i.default.readToMe.answerIndex = t, v.onend = () => {
                            window.speechSynthesis.pause(), setTimeout(() => window.speechSynthesis.resume(), 500);
                        }, t >= s && (v.onend = () => n()), window.speechSynthesis.speak(v);
                    }
                } else
                    n();
            })(d), 500));
        }, _r = async () => {
            let s = await _s();
            if (null == s ? void 0 : s.length) {
                const t = s.filter(s => j.includes(s.name));
                if (t.length)
                    return t[0];
            }
            return null;
        }, _s = () => new Promise(d => {
            i.default.readToMe.chosenVoice && d([i.default.readToMe.chosenVoice]);
            let t = speechSynthesis.getVoices();
            t.length ? d(t) : (d([]), speechSynthesis.onvoiceschanged = () => {
                t = speechSynthesis.getVoices(), d(t);
            });
        });
    var _t = {
        play: (d, u = !0) => {
            k(u), l(d);
        },
        stop: k,
        hasFinishedReading: () => i.default.readToMe.finishedReadingQuestion,
        playAudio: _m,
        canPlayAgain: () => i.default.readToMe.canPlayAgain
    };
}), c.register('VJDaA', function(d, e) {
    let f;
    var g;
    let h;
    var i;
    b(d.exports, 'QuestionType', function() {
        return f;
    }), b(d.exports, 'TextInputAnswerType', function() {
        return h;
    }), (g = f || (f = {})).multipleChoice = 'mc', g.textInput = 'text', (i = h || (h = {}))[i.exact = 1] = 'exact', i[i.contains = 2] = 'contains';
}), c.register('eoj6K', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = {
        readToMe: new(0, (c('DZ4dK')).default)()
    };
}), c.register('DZ4dK', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('s/YA9'),
        g = c('4F2ZN'),
        h = c('JkQCT');
    class i {
        constructor() {
            (0, f.default)(this, 'audioQuestion', null), this.enabled = !1, this.canPlayAgain = !0, this.isCurrentlySpeaking = !1, this.hasPlayedForCurrentQuestion = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.finishedReadingQuestion = !1, this.speechQuestion = null, this.chosenVoice = null, this.answersTimeout = null, this.reset = d => {
                this.isCurrentlySpeaking = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.audioQuestion = null, this.speechQuestion = null, d && (this.hasPlayedForCurrentQuestion = !1, this.finishedReadingQuestion = !1, this.canPlayAgain = !0);
            }, (0, h.makeObservable)(this);
        }
    }
    (0, g.__decorate)([h.observable], i.prototype, 'enabled', void 0), (0, g.__decorate)([h.observable], i.prototype, 'canPlayAgain', void 0), (0, g.__decorate)([h.observable], i.prototype, 'isCurrentlySpeaking', void 0), (0, g.__decorate)([h.observable], i.prototype, 'hasPlayedForCurrentQuestion', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentlyPlayingQuestionAudio', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentlyPlayingQuestionText', void 0), (0, g.__decorate)([h.observable], i.prototype, 'currentlyPlayingAnswerAudio', void 0), (0, g.__decorate)([h.observable], i.prototype, 'answerIndex', void 0), (0, g.__decorate)([h.observable], i.prototype, 'finishedReadingQuestion', void 0), (0, g.__decorate)([h.observable], i.prototype, 'speechQuestion', void 0), (0, g.__decorate)([h.observable], i.prototype, 'chosenVoice', void 0), (0, g.__decorate)([h.observable], i.prototype, 'answersTimeout', void 0), (0, g.__decorate)([h.action.bound], i.prototype, 'reset', void 0);
    var _j = i;
}), c.register('YBABi', function(d, e) {
    b(d.exports, 'Container', function() {
        return _v;
    }), b(d.exports, 'default', function() {
        return _u;
    });
    var f = c('gRbUn'),
        g = c('O0Kav'),
        h = c('u4s09'),
        i = c('8J0zk');
    c('FtjD+');
    var j = c('cCJZF'),
        k = c('8V870'),
        l = c('5oXbu'),
        m = c('F3ltk'),
        n = c('HloXO'),
        o = c('JuRCP');
    let p, q, r, s, t = a => a;
    var _u = b => {
        const [v, w] = a(g).useState({
            width: -1,
            height: -1
        }), [x, y] = a(g).useState(!1), {
            text: z,
            image: A,
            audio: B,
            latex: C
        } = b, {
            width: D
        } = v;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                x && (0, f.jsx)(j.default, {
                    large: (0, n.getCloudinaryUrl)(A),
                    onClose: () => y(!1),
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
                                    onResize: a => {
                                        a.bounds && w(a.bounds);
                                    },
                                    children: ({
                                        measureRef: E
                                    }) => (0, f.jsx)('div', {
                                        ref: E,
                                        style: {
                                            flex: 1
                                        }
                                    })
                                }),
                                B && (0, f.jsx)(k.default, {
                                    audio: B
                                }),
                                B && !A && !C && (0, f.jsx)('div', {
                                    style: {
                                        width: '2vw'
                                    }
                                }),
                                A && (0, f.jsx)('img', {
                                    src: (0, n.getCloudinaryUrl)(A),
                                    alt: 'Question',
                                    onClick: () => y(!0),
                                    style: {
                                        maxHeight: '90%',
                                        maxWidth: `calc(80% - ${ B ? 56 : 0 }px)`,
                                        marginRight: '2vw',
                                        marginLeft: B ? '2vw' : 0,
                                        borderRadius: 4,
                                        cursor: 'pointer'
                                    }
                                }),
                                C && (0, f.jsx)(_x, {
                                    style: {
                                        width: `calc(80% - ${ B ? 56 : 0 }px)`,
                                        marginLeft: B ? '2vw' : 0
                                    },
                                    children: (0, f.jsx)(m.default, {
                                        text: (0, f.jsx)(o.default, {
                                            latex: C
                                        }),
                                        noBold: !0
                                    })
                                })
                            ]
                        }),
                        (0, f.jsxs)(_y, {
                            children: [
                                (0, f.jsx)(m.default, {
                                    text: (0, l.parseText)(b.allowGoogleTranslate, z),
                                    paddingHorizontal: '0px',
                                    paddingVertical: '6%',
                                    customStyle: {
                                        width: `calc(100% - ${ D }px)`
                                    },
                                    mode: 'multi',
                                    disableHorizontalCentering: !0,
                                    highlighted: b.highlighted,
                                    noBold: b.noBold
                                }),
                                (0, f.jsx)('div', {
                                    style: {
                                        width: D,
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
}), c.register('8J0zk', function(d, e) {
    b(d.exports, 'default', function() {
        return _u;
    });
    var f = c('+pD1R19'),
        g = c('wlMK916'),
        h = c('a8MeA'),
        i = c('O0Kav'),
        j = c('HoW8Y'),
        k = c('1PitP'),
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

    function n(o, p) {
        var q = {};
        if (p.indexOf('client') > -1 && (q.client = {
                top: o.clientTop,
                left: o.clientLeft,
                width: o.clientWidth,
                height: o.clientHeight
            }), p.indexOf('offset') > -1 && (q.offset = {
                top: o.offsetTop,
                left: o.offsetLeft,
                width: o.offsetWidth,
                height: o.offsetHeight
            }), p.indexOf('scroll') > -1 && (q.scroll = {
                top: o.scrollTop,
                left: o.scrollLeft,
                width: o.scrollWidth,
                height: o.scrollHeight
            }), p.indexOf('bounds') > -1) {
            var r = o.getBoundingClientRect();
            q.bounds = {
                top: r.top,
                right: r.right,
                bottom: r.bottom,
                left: r.left,
                width: r.width,
                height: r.height
            };
        }
        if (p.indexOf('margin') > -1) {
            var r = getComputedStyle(o);
            q.margin = {
                top: r ? parseInt(r.marginTop) : 0,
                right: r ? parseInt(r.marginRight) : 0,
                bottom: r ? parseInt(r.marginBottom) : 0,
                left: r ? parseInt(r.marginLeft) : 0
            };
        }
        return q;
    }

    function o(p) {
        return p && p.ownerDocument && p.ownerDocument.defaultView || window;
    }
    var p, q, r, s, t = (p = function(u) {
        var v = u.measure,
            w = u.measureRef,
            x = u.contentRect;
        return (0, u.children)({
            measure: v,
            measureRef: w,
            contentRect: x
        });
    }, r = q = function(u) {
        function v() {
            for (var w, x = arguments.length, y = new Array(x), z = 0; z < x; z++)
                y[z] = arguments[z];
            return (w = u.call.apply(u, [this].concat(y)) || this).state = {
                contentRect: {
                    entry: {},
                    client: {},
                    offset: {},
                    scroll: {},
                    bounds: {},
                    margin: {}
                }
            }, w._animationFrameID = null, w._resizeObserver = null, w._node = null, w._window = null, w.measure = function(A) {
                var B = n(w._node, s || m(w.props));
                A && (B.entry = A[0].contentRect), w._animationFrameID = w._window.requestAnimationFrame(function() {
                    null !== w._resizeObserver && (w.setState({
                        contentRect: B
                    }), 'function' == typeof w.props.onResize && w.props.onResize(B));
                });
            }, w._handleRef = function(A) {
                null !== w._resizeObserver && null !== w._node && w._resizeObserver.unobserve(w._node), w._node = A, w._window = o(w._node);
                var B = w.props.innerRef;
                B && ('function' == typeof B ? B(w._node) : B.current = w._node), null !== w._resizeObserver && null !== w._node && w._resizeObserver.observe(w._node);
            }, w;
        }
        (0, h.default)(v, u);
        var w = v.prototype;
        return w.componentDidMount = function() {
            this._resizeObserver = null !== this._window && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new(0, k.default)(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), 'function' == typeof this.props.onResize && this.props.onResize(n(this._node, s || m(this.props))));
        }, w.componentWillUnmount = function() {
            null !== this._window && this._window.cancelAnimationFrame(this._animationFrameID), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
        }, w.render = function() {
            var x = this.props,
                y = (x.innerRef, x.onResize, (0, g.default)(x, [
                    'innerRef',
                    'onResize'
                ]));
            return (0, i.createElement)(p, (0, f.default)({}, y, {
                measureRef: this._handleRef,
                measure: this.measure,
                contentRect: this.state.contentRect
            }));
        }, v;
    }(i.Component), q.propTypes = {
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
    }, r);
    t.displayName = 'Measure', t.propTypes.children = a(j).func;
    var _u = t;
}), c.register('5oXbu', function(d, e) {
    b(d.exports, 'parseText', function() {
        return _h;
    }), b(d.exports, 'clickHandler', function() {
        return _i;
    }), b(d.exports, 'isQuestionCorrect', function() {
        return _j;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('VJDaA');
    const _h = (d, b) => (0, f.jsx)('span', {
            className: d ? '' : 'notranslate lang-en',
            children: b
        }),
        _i = (d, b) => {
            b && (d => !d || !0 !== d.isTrusted && !1 !== d.isTrusted || d.isTrusted)(d) && b();
        },
        _j = (d, b) => {
            if (!b)
                return !1;
            let k = !1;
            if (d) {
                d.answers.find(k => {
                    if (k.correct) {
                        if (d.type === g.QuestionType.multipleChoice)
                            return b === k._id;
                        if (d.type === g.QuestionType.textInput) {
                            const l = _k(b),
                                m = _k(k.text);
                            var n;
                            const o = null !== (n = k.textType) && void 0 !== n ? n : g.TextInputAnswerType.exact;
                            if (o === g.TextInputAnswerType.exact)
                                return l === m;
                            if (o === g.TextInputAnswerType.contains)
                                return l.includes(m);
                        }
                    }
                    return !1;
                }) && (k = !0);
            }
            return k;
        },
        _k = d => {
            let l = d.trim();
            return l = l.replace(/[\u2018\u2019]/g, '\'').replace(/[\u201C\u201D]/g, '"'), l = l.toLowerCase(), l;
        };
}), c.register('LBV5W', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('gRbUn');
    c('O0Kav');
    var g = c('F3ltk'),
        h = c('5oXbu');
    var _i = d => (0, f.jsx)(g.default, {
        mode: 'multi',
        text: (0, h.parseText)(d.allowGoogleTranslate || !1, d.text),
        highlighted: d.highlighted,
        noBold: d.noBold
    });
});