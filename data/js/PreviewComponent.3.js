function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('w8Dki', function(b, c) {
    _h(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    a('FJVE0');
    var f = a('o6L40'),
        g = a('x8CoD'),
        h = a('dDoty'),
        i = a('X133d'),
        j = a('SqJXp'),
        k = a('T4lH8');
    var _l = _h => {
        const [m, n] = _b(e).useState(!1), {
            image: o,
            audio: p,
            latex: q
        } = _h;
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
}), a.register('FJVE0', function(_b, c) {
    _h(_b.exports, 'Lightbox', function() {
        return a('o6L40').default;
    });
    var d = a('LEQ5w'),
        e = a('o6L40');
    e = a('o6L40');

    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(h) {
            return typeof h;
        } : function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, f(g);
    }

    function f(g, _h) {
        if (!(g instanceof _h))
            throw new TypeError('Cannot call a class as a function');
    }

    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
        }
    }

    function f(g, h) {
        return !h || 'object' !== _e(h) && 'function' != typeof h ? _f(g) : h;
    }

    function f(g) {
        return Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }

    function _f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }

    function f(g, h) {
        return Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }

    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    d.Component;
}), a.register('o6L40', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('LEQ5w'),
        _e = a('5FsHy'),
        f = a('95Z1g'),
        g = a('2t30s');

    function h(i) {
        return h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(j) {
            return typeof j;
        } : function(j) {
            return j && 'function' == typeof Symbol && j.constructor === Symbol && j !== Symbol.prototype ? 'symbol' : typeof j;
        }, h(i);
    }

    function h(i, _j) {
        if (!(i instanceof _j))
            throw new TypeError('Cannot call a class as a function');
    }

    function h(i, j) {
        for (var k = 0; k < j.length; k++) {
            var l = j[k];
            l.enumerable = l.enumerable || !1, l.configurable = !0, 'value' in l && (l.writable = !0), Object.defineProperty(i, l.key, l);
        }
    }

    function h(i, j) {
        return !j || 'object' !== _l(j) && 'function' != typeof j ? _h(i) : j;
    }

    function h(i) {
        return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(j) {
            return j.__proto__ || Object.getPrototypeOf(j);
        }, h(i);
    }

    function _h(i) {
        if (void 0 === i)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return i;
    }

    function h(i, j) {
        return h = Object.setPrototypeOf || function(k, l) {
            return k.__proto__ = l, k;
        }, h(i, j);
    }

    function h(i, j, k) {
        return j in i ? Object.defineProperty(i, j, {
            value: k,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[j] = k, i;
    }
    var _h = function(i) {
        function j() {
            var k, l;
            _r(this, j);
            for (var m = arguments.length, n = new Array(m), o = 0; o < m; o++)
                n[o] = arguments[o];
            return _x(_v(l = _t(this, (k = _u(j)).call.apply(k, [this].concat(n)))), 'state', {
                move: {
                    x: 0,
                    y: 0
                },
                moveStart: void 0,
                zoomed: !1,
                rotationDeg: 0
            }), _x(_v(l), 'handleKeyDown', function(p) {
                27 !== p.keyCode && 13 !== p.keyCode || l.props.onClose();
            }), _x(_v(l), 'getCoordinatesIfOverImg', function(p) {
                var q = p.changedTouches ? p.changedTouches[0] : p;
                if ('react-modal-image-img' === q.target.id) {
                    var r = l.contentEl.getBoundingClientRect();
                    return {
                        x: q.clientX - r.left,
                        y: q.clientY - r.top
                    };
                }
            }), _x(_v(l), 'handleMouseDownOrTouchStart', function(p) {
                if (p.preventDefault(), !(p.touches && p.touches.length > 1)) {
                    var q = l.getCoordinatesIfOverImg(p);
                    q || l.props.onClose(), l.state.zoomed && l.setState(function(r) {
                        return {
                            moveStart: {
                                x: q.x - r.move.x,
                                y: q.y - r.move.y
                            }
                        };
                    });
                }
            }), _x(_v(l), 'handleMouseMoveOrTouchMove', function(p) {
                if (p.preventDefault(), l.state.zoomed && l.state.moveStart && !(p.touches && p.touches.length > 1)) {
                    var q = l.getCoordinatesIfOverImg(p);
                    q && l.setState(function(r) {
                        return {
                            move: {
                                x: q.x - r.moveStart.x,
                                y: q.y - r.moveStart.y
                            }
                        };
                    });
                }
            }), _x(_v(l), 'handleMouseUpOrTouchEnd', function(p) {
                l.setState({
                    moveStart: void 0
                });
            }), _x(_v(l), 'toggleZoom', function(p) {
                p.preventDefault(), l.setState(function(q) {
                    return {
                        zoomed: !q.zoomed,
                        move: q.zoomed ? {
                            x: 0,
                            y: 0
                        } : q.move
                    };
                });
            }), _x(_v(l), 'toggleRotate', function(p) {
                p.preventDefault(), 360 !== l.state.rotationDeg ? l.setState(function(q) {
                    return {
                        rotationDeg: q.rotationDeg += 90
                    };
                }) : l.setState({
                    rotationDeg: 90
                });
            }), l;
        }
        var j, k, _l;
        return function(m, n) {
            if ('function' != typeof n && null !== n)
                throw new TypeError('Super expression must either be null or a function');
            m.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: m,
                    writable: !0,
                    configurable: !0
                }
            }), n && _w(m, n);
        }(a, i), j = a, (k = [{
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
                    var m = this,
                        n = this.props,
                        o = n.medium,
                        p = n.large,
                        q = n.alt,
                        _r = n.onClose,
                        s = n.hideDownload,
                        _t = n.hideZoom,
                        _u = n.showRotate,
                        _v = n.imageBackgroundColor,
                        _w = void 0 === _v ? 'black' : _v,
                        _x = this.state,
                        y = _x.move,
                        z = _x.zoomed,
                        A = _x.rotationDeg;
                    return _B(d).createElement('div', null, _B(d).createElement(_e.default, {
                        name: '__react_modal_image__lightbox',
                        css: (0, _e.lightboxStyles)({
                            imageBackgroundColor: _w
                        })
                    }), _B(d).createElement('div', {
                        className: '__react_modal_image__modal_container'
                    }, _B(d).createElement('div', {
                        className: '__react_modal_image__modal_content',
                        onMouseDown: this.handleMouseDownOrTouchStart,
                        onMouseUp: this.handleMouseUpOrTouchEnd,
                        onMouseMove: this.handleMouseMoveOrTouchMove,
                        onTouchStart: this.handleMouseDownOrTouchStart,
                        onTouchEnd: this.handleMouseUpOrTouchEnd,
                        onTouchMove: this.handleMouseMoveOrTouchMove,
                        ref: function(_B) {
                            m.contentEl = _B;
                        }
                    }, z && _b(d).createElement(g.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__large_img',
                        src: p || o,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) translate3d('.concat(y.x, 'px, ').concat(y.y, 'px, 0) rotate(').concat(A, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(y.x, 'px, ').concat(y.y, 'px, 0) rotate(').concat(A, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) translate3d('.concat(y.x, 'px, ').concat(y.y, 'px, 0) rotate(').concat(A, 'deg)')
                        },
                        handleDoubleClick: this.toggleZoom
                    }), !z && _b(d).createElement(g.default, {
                        id: 'react-modal-image-img',
                        className: '__react_modal_image__medium_img',
                        src: o || p,
                        handleDoubleClick: this.toggleZoom,
                        contextMenu: !o,
                        style: {
                            transform: 'translate3d(-50%, -50%, 0) rotate('.concat(A, 'deg)'),
                            WebkitTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(A, 'deg)'),
                            MsTransform: 'translate3d(-50%, -50%, 0) rotate('.concat(A, 'deg)')
                        }
                    })), _b(d).createElement(f.default, {
                        image: p || o,
                        alt: q,
                        zoomed: z,
                        toggleZoom: this.toggleZoom,
                        toggleRotate: this.toggleRotate,
                        onClose: _r,
                        enableDownload: !s,
                        enableZoom: !_t,
                        enableRotate: !!_u
                    })));
                }
            }
        ]) && _e(j.prototype, k), _l && _e(j, _l), a;
    }(d.Component);
}), a.register('5FsHy', function(_b, c) {
    function d(e) {
        return d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(f) {
            return typeof f;
        } : function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, d(e);
    }

    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }

    function d(e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(e, h.key, h);
        }
    }

    function d(e, f) {
        return !f || 'object' !== _h(f) && 'function' != typeof f ? function(g) {
            if (void 0 === g)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return g;
        }(e) : f;
    }

    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }

    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _f(_b.exports, 'default', function() {
        return _d;
    }), _f(_b.exports, 'lightboxStyles', function() {
        return _e;
    });
    var _d = function(e) {
            function _f() {
                return _d(this, _f), _f(this, _l(_f).apply(this, arguments));
            }
            var f, g, _h;
            return function(i, j) {
                if ('function' != typeof j && null !== j)
                    throw new TypeError('Super expression must either be null or a function');
                i.prototype = Object.create(j && j.prototype, {
                    constructor: {
                        value: i,
                        writable: !0,
                        configurable: !0
                    }
                }), j && _m(i, j);
            }(_j, e), f = _j, (g = [{
                    key: 'componentDidMount',
                    value: function() {
                        ! function(i, _j) {
                            if (!document.head.querySelector('#' + i)) {
                                var k = document.createElement('style');
                                k.textContent = _j, k.type = 'text/css', k.id = i, document.head.appendChild(k);
                            }
                        }(this.props.name, this.props.css);
                    }
                },
                {
                    key: 'componentWillUnmount',
                    value: function() {
                        var i = document.getElementById(this.props.name);
                        i.parentNode.removeChild(i);
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        return null;
                    }
                }
            ]) && _e(f.prototype, g), _h && _e(f, _h), _g;
        }(a('LEQ5w').Component),
        _e = function(f) {
            var _g = f.imageBackgroundColor;
            return '\n  body {\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_container {\n    position: fixed;\n    z-index: 5000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    touch-action: none;\n    overflow: hidden;\n  }\n\n  .__react_modal_image__modal_content {\n    position: relative;\n    height: 100%;\n    width: 100%;\n  }\n\n  .__react_modal_image__modal_content img, \n  .__react_modal_image__modal_content svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    -ms-transform: translate3d(-50%, -50%, 0);\n    overflow: hidden;\n  }\n\n  .__react_modal_image__medium_img {\n    max-width: 98%;\n    max-height: 98%;\n    background-color: '.concat(_g, ';\n  }\n\n  .__react_modal_image__large_img {\n    cursor: move;\n    background-color: ').concat(_g, '\n  }\n\n  .__react_modal_image__icon_menu a {\n    display: inline-block;\n    font-size: 40px;\n    cursor: pointer;\n    line-height: 40px;\n    box-sizing: border-box;\n    border: none;\n    padding: 0px 5px 0px 5px;\n    margin-left: 10px;\n    color: white;\n    background-color: rgba(0, 0, 0, 0);\n  }\n\n  .__react_modal_image__icon_menu {\n    display: inline-block;\n    float: right;\n  }\n\n  .__react_modal_image__caption {\n    display: inline-block;\n    color: white;\n    font-size: 120%;\n    padding: 10px;\n    margin: 0;\n  }\n\n  .__react_modal_image__header {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n  }\n');
        };
}), a.register('95Z1g', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var _d = a('LEQ5w'),
        _e = a('1UhBc'),
        _f = function(_g) {
            var h = _g.image,
                i = _g.alt,
                j = _g.zoomed,
                k = _g.toggleZoom,
                _l = _g.toggleRotate,
                _m = _g.onClose,
                n = _g.enableDownload,
                o = _g.enableZoom,
                p = _g.enableRotate;
            return _g(_d).createElement('div', {
                className: '__react_modal_image__header'
            }, _g(_d).createElement('span', {
                className: '__react_modal_image__icon_menu'
            }, n && _g(_d).createElement('a', {
                href: h,
                download: !0
            }, _g(_d).createElement(_e.DownloadIcon, null)), o && _g(_d).createElement('a', {
                onClick: k
            }, j ? _g(_d).createElement(_e.ZoomOutIcon, null) : _g(_d).createElement(_e.ZoomInIcon, null)), p && _g(_d).createElement('a', {
                onClick: _l
            }, _g(_d).createElement(_e.RotateIcon, null)), _g(_d).createElement('a', {
                onClick: _m
            }, _g(_d).createElement(_e.CloseIcon, null))), i && _g(_d).createElement('span', {
                className: '__react_modal_image__caption'
            }, i));
        };
}), a.register('1UhBc', function(b, c) {
    _h(b.exports, 'ZoomInIcon', function() {
        return _e;
    }), _h(b.exports, 'ZoomOutIcon', function() {
        return _f;
    }), _h(b.exports, 'DownloadIcon', function() {
        return _g;
    }), _h(b.exports, 'CloseIcon', function() {
        return _h;
    }), _h(b.exports, 'SpinnerIcon', function() {
        return _i;
    }), _h(b.exports, 'RotateIcon', function() {
        return _j;
    });
    var d = a('LEQ5w'),
        _e = function() {
            return _g(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, _g(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }), _g(d).createElement('path', {
                d: 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'
            }));
        },
        _f = function() {
            return _g(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, _g(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }), _g(d).createElement('path', {
                d: 'M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z'
            }));
        },
        _g = function() {
            return _g(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, _g(d).createElement('path', {
                d: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z'
            }), _g(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }));
        },
        _h = function() {
            return _g(d).createElement('svg', {
                fill: '#ffffff',
                height: '24',
                viewBox: '0 0 24 24',
                width: '24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, _g(d).createElement('path', {
                d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
            }), _g(d).createElement('path', {
                d: 'M0 0h24v24H0z',
                fill: 'none'
            }));
        },
        _i = function() {
            return _g(d).createElement('svg', {
                fill: '#ffffff',
                height: '48',
                viewBox: '0 0 24 24',
                width: '48',
                xmlns: 'http://www.w3.org/2000/svg'
            }, _g(d).createElement('path', {
                d: 'M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z'
            }), _g(d).createElement('path', {
                d: 'M0 0h24v24H0V0z',
                fill: 'none'
            }));
        },
        _j = function() {
            return _g(d).createElement('svg', {
                fill: '#ffffff',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                xmlns: 'http://www.w3.org/2000/svg'
            }, _g(d).createElement('path', {
                fill: 'none',
                d: 'M0 0h24v24H0V0zm0 0h24v24H0V0z'
            }), _g(d).createElement('path', {
                d: 'M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z'
            }));
        };
}), a.register('2t30s', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('1UhBc');

    function f(_g) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(h) {
            return typeof h;
        } : function(h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, f(_g);
    }

    function f(g, _h) {
        if (!(g instanceof _h))
            throw new TypeError('Cannot call a class as a function');
    }

    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
        }
    }

    function f(g, h) {
        return !h || 'object' !== _j(h) && 'function' != typeof h ? _f(g) : h;
    }

    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }

    function _f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }

    function f(g, h) {
        return f = Object.setPrototypeOf || function(i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }

    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    var _f = function(g) {
        function h() {
            var i, j;
            _p(this, h);
            for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                l[m] = arguments[m];
            return _n(_l(j = _j(this, (i = _k(h)).call.apply(i, [this].concat(l)))), 'state', {
                loading: !0
            }), _n(_l(j), 'handleOnLoad', function() {
                j.setState({
                    loading: !1
                });
            }), _n(_l(j), 'handleOnContextMenu', function(n) {
                !j.props.contextMenu && n.preventDefault();
            }), j;
        }
        var h, i, _j;
        return function(k, l) {
            if ('function' != typeof l && null !== l)
                throw new TypeError('Super expression must either be null or a function');
            k.prototype = Object.create(l && l.prototype, {
                constructor: {
                    value: k,
                    writable: !0,
                    configurable: !0
                }
            }), l && _m(k, l);
        }(a, g), h = a, (i = [{
            key: 'render',
            value: function() {
                var k = this.props,
                    l = k.id,
                    m = k.className,
                    n = k.src,
                    o = k.style,
                    _p = k.handleDoubleClick;
                return _b(d).createElement('div', null, this.state.loading && _b(d).createElement(e.SpinnerIcon, null), _b(d).createElement('img', {
                    id: l,
                    className: m,
                    src: n,
                    style: o,
                    onLoad: this.handleOnLoad,
                    onDoubleClick: _p,
                    onContextMenu: this.handleOnContextMenu
                }));
            }
        }]) && _i(h.prototype, i), _j && _i(h, _j), a;
    }(d.Component);
}), a.register('X133d', function(_b, c) {
    _n(_b.exports, 'default', function() {
        return _m;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('86aCL'),
        h = a('Axq+p');
    let _i;
    const _j = {
            backgroundColor: 'rgba(255,255,31, 0.21)',
            boxShadow: '10px 0 0 rgba(255,255,31, 0.21), -10px 0 0 rgba(255,255,31, 0.21)',
            borderRadius: 9
        },
        _k = h.default.div(_i || (_i = (_b => _b)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`));
    class _l extends f.Component {
            render() {
                const {
                    paddingHorizontal: m,
                    paddingVertical: _n,
                    customStyle: o,
                    ...p
                } = this.props;
                return delete p.text, delete p.highlighted, (0, e.jsx)(_k, {
                    className: this.props.customClass,
                    style: o,
                    children: (0, e.jsx)(g.Textfit, {
                        style: {
                            height: '100%',
                            width: '100%',
                            display: 'flex',
                            justifyContent: this.props.disableHorizontalCentering ? 'flex-start' : 'center',
                            alignItems: 'center',
                            paddingTop: _n,
                            paddingBottom: _n,
                            paddingLeft: this.props.paddingLeft || m,
                            paddingRight: m,
                            boxSizing: 'border-box',
                            fontWeight: this.props.noBold ? 'normal' : 900
                        },
                        ...p,
                        children: (0, e.jsx)('div', {
                            style: this.props.highlighted ? _j : void 0,
                            children: this.props.text
                        })
                    })
                });
            }
        }
        (0, d.default)(_l, 'defaultProps', {
            paddingHorizontal: '6%',
            paddingVertical: 15,
            max: 50,
            mode: 'single',
            forceSingleModeWidth: !1
        });
    var _m = _l;
}), a.register('86aCL', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.Textfit = void 0;
    var d, e = a('1TDyR'),
        f = (d = e) && d.__esModule ? d : {
            default: d
        };
    b.exports.Textfit = f.default, b.exports.default = f.default;
}), a.register('1TDyR', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    });
    var d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        },
        e = function() {
            function f(g, h) {
                for (var i = 0; i < h.length; i++) {
                    var j = h[i];
                    j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, j.key, j);
                }
            }
            return function(f, g, h) {
                return g && b(f.prototype, g), h && b(f, h), f;
            };
        }(),
        f = _n(a('LEQ5w')),
        g = _n(a('WPpLv')),
        h = _n(a('JapHG')),
        i = _n(a('cXEOI')),
        j = _n(a('AeSec')),
        k = _n(a('ONbNc')),
        l = _n(a('XG2O2')),
        m = a('24YsP');

    function _n(o) {
        return o && o.__esModule ? o : {
            default: o
        };
    }

    function _n(o, p) {
        return o.scrollWidth - 1 <= p;
    }

    function n(o, p) {
        return o.scrollHeight - 1 <= p;
    }
    var n = function(o) {
        function p(q) {
            ! function(r, s) {
                if (!(r instanceof s))
                    throw new TypeError('Cannot call a class as a function');
            }(this, p);
            var r = function(s, t) {
                if (!s)
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                return !t || 'object' != typeof t && 'function' != typeof t ? s : t;
            }(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, q));
            return r.state = {
                fontSize: null,
                ready: !1
            }, r.handleWindowResize = function() {
                r.process();
            }, 'perfectFit' in q && console.warn('TextFit property perfectFit has been removed.'), r;
        }
        return function(p, q) {
            if ('function' != typeof q && null !== q)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof q);
            p.prototype = Object.create(q && q.prototype, {
                constructor: {
                    value: p,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), q && (Object.setPrototypeOf ? Object.setPrototypeOf(p, q) : p.__proto__ = q);
        }(c, o), e(c, [{
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
                value: function(p) {
                    this.state.ready && ((0, h.default)(this.props, p) || this.process());
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
                    var p = this,
                        q = this.props,
                        r = q.min,
                        s = q.max,
                        t = q.mode,
                        u = q.forceSingleModeWidth,
                        v = q.onReady,
                        w = this._parent,
                        x = this._child,
                        y = (0, m.innerWidth)(w),
                        z = (0, m.innerHeight)(w);
                    if (z <= 0 || isNaN(z))
                        console.warn('Can not process element without height. Make sure the element is displayed and has a static height.');
                    else if (y <= 0 || isNaN(y))
                        console.warn('Can not process element without width. Make sure the element is displayed and has a static width.');
                    else {
                        var A = (0, l.default)();
                        this.pid = A;
                        var B = function() {
                                return A !== p.pid;
                            },
                            C = 'multi' === t ? function() {
                                return _u(x, z);
                            } : function() {
                                return _t(x, y);
                            },
                            D = 'multi' === t ? function() {
                                return _t(x, y);
                            } : function() {
                                return _u(x, z);
                            },
                            E = void 0,
                            F = r,
                            G = s;
                        this.setState({
                            ready: !1
                        }), (0, i.default)([
                            function(H) {
                                return (0, j.default)(function() {
                                    return F <= G;
                                }, function(I) {
                                    if (B())
                                        return I(!0);
                                    E = parseInt((F + G) / 2, 10), p.setState({
                                        fontSize: E
                                    }, function() {
                                        return B() ? I(!0) : (C() ? F = E + 1 : G = E - 1, I());
                                    });
                                }, H);
                            },
                            function(H) {
                                return 'single' === t && u || D() ? H() : (F = r, G = E, (0, j.default)(function() {
                                    return F < G;
                                }, function(I) {
                                    if (B())
                                        return I(!0);
                                    E = parseInt((F + G) / 2, 10), p.setState({
                                        fontSize: E
                                    }, function() {
                                        return A !== p.pid ? I(!0) : (D() ? F = E + 1 : G = E - 1, I());
                                    });
                                }, H));
                            },
                            function(H) {
                                if (E = Math.min(F, G), E = Math.max(E, r), E = Math.min(E, s), E = Math.max(E, 0), B())
                                    return H(!0);
                                p.setState({
                                    fontSize: E
                                }, H);
                            }
                        ], function(H) {
                            H || B() || p.setState({
                                ready: !0
                            }, function() {
                                return v(E);
                            });
                        });
                    }
                }
            },
            {
                key: 'render',
                value: function() {
                    var p = this,
                        q = this.props,
                        r = q.children,
                        s = q.text,
                        t = q.style,
                        u = (q.min, q.max, q.mode),
                        v = (q.forceWidth, q.forceSingleModeWidth, q.throttle, q.autoResize, q.onReady, function(w, x) {
                            var y = {};
                            for (var z in w)
                                x.indexOf(z) >= 0 || Object.prototype.hasOwnProperty.call(w, z) && (y[z] = w[z]);
                            return y;
                        }(q, [
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
                        w = this.state,
                        x = w.fontSize,
                        y = w.ready,
                        z = d({}, t, {
                            fontSize: x
                        }),
                        A = {
                            display: y ? 'block' : 'inline-block'
                        };
                    return 'single' === u && (A.whiteSpace = 'nowrap'), f.default.createElement('div', d({
                        ref: function(B) {
                            return p._parent = B;
                        },
                        style: z
                    }, v), f.default.createElement('div', {
                        ref: function(B) {
                            return p._child = B;
                        },
                        style: A
                    }, s && 'function' == typeof r ? y ? r(s) : s : r));
                }
            }
        ]), c;
    }(f.default.Component);
    n.propTypes = {
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
    }, n.defaultProps = {
        min: 1,
        max: 100,
        mode: 'multi',
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
    }, b.exports.default = n;
}), a.register('JapHG', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = function(d, e) {
        if (d === e)
            return !0;
        var f = Object.keys(d),
            g = Object.keys(e);
        if (f.length !== g.length)
            return !1;
        for (var h = Object.prototype.hasOwnProperty, i = 0; i < f.length; i++)
            if (!h.call(e, f[i]) || d[f[i]] !== e[f[i]])
                return !1;
        return !0;
    };
}), a.register('cXEOI', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = function(d, e) {
        var f = [],
            g = 0,
            h = !0;

        function i(j) {
            function k() {
                e && e(j, f);
            }
            h ? _j.default.nextTick(g) : g();
        }
        d.length > 0 ? d[0](function e(i, _j) {
            f.push(_j), ++g >= d.length || i ? _i(i) : d[g](e);
        }) : _i(null);
        h = !1;
    };
    var d, e = a('jOoxx'),
        f = (d = e) && d.__esModule ? d : {
            default: d
        };
}), a.register('AeSec', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = function(d, e) {
        var f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
        d() ? e(function a(g) {
            for (var h = arguments.length, _i = Array(h > 1 ? h - 1 : 0), j = 1; j < h; j++)
                _i[j - 1] = arguments[j];
            g ? f(g) : d.apply(this, _i) ? e(a) : f(null);
        }) : f(null);
    };
    var d = function() {};
}), a.register('ONbNc', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = function(d, e) {
        var f = void 0,
            g = void 0,
            h = void 0,
            i = void 0,
            j = 0;

        function k() {
            i = 0, j = +new Date(), h = d.apply(f, g), f = null, g = null;
        }
        return function() {
            f = this, g = arguments;
            var k = new Date() - j;
            return i || (k >= e ? _f() : i = setTimeout(_f, e - k)), h;
        };
    };
}), a.register('XG2O2', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = function() {
        return a++;
    };
    var d = 0;
}), a.register('24YsP', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.innerHeight = function(d) {
        var e = window.getComputedStyle(d, null);
        return d.clientHeight - parseInt(e.getPropertyValue('padding-top'), 10) - parseInt(e.getPropertyValue('padding-bottom'), 10);
    }, b.exports.innerWidth = function(d) {
        var e = window.getComputedStyle(d, null);
        return d.clientWidth - parseInt(e.getPropertyValue('padding-left'), 10) - parseInt(e.getPropertyValue('padding-right'), 10);
    };
}), a.register('SqJXp', function(b, c) {
    _m(b.exports, 'default', function() {
        return _j;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2x11J'),
        _f = a('ckElv'),
        g = a('amKpW'),
        h = a('PddPJ'),
        i = a('kOSsb');
    var _j = (0, e.observer)(_m => (0, d.jsx)(g.default, {
        title: (0, d.jsx)('span', {
            style: {
                fontSize: 14
            },
            children: 'Replay Audio'
        }),
        placement: 'left',
        children: (0, d.jsx)(_f.default, {
            onClick: () => {
                i.default.playAudio(_m.audio);
            },
            color: 'secondary',
            style: {
                flexShrink: 0
            },
            children: (0, d.jsx)(_b(h), {})
        })
    }));
}), a.register('ckElv', function(_b, c) {
    _m(_b.exports, 'default', function() {
        return _r;
    });
    var d = a('GepBD'),
        e = a('r98tK1'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('+4L0f'),
        j = a('mmS5q'),
        k = f.forwardRef(function(l, _m) {
            var n = l.children,
                o = l.classes,
                p = l.className,
                q = l.color,
                _r = void 0 === q ? 'default' : q,
                s = l.component,
                _t = void 0 === s ? 'button' : s,
                _u = l.disabled,
                v = void 0 !== _u && _u,
                w = l.disableFocusRipple,
                x = void 0 !== w && w,
                y = l.focusVisibleClassName,
                z = l.size,
                A = void 0 === z ? 'large' : z,
                B = l.variant,
                C = void 0 === B ? 'round' : B,
                D = (0, d.default)(l, [
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
                className: (0, g.default)(o.root, p, 'round' !== C && o.extended, 'large' !== A && o['size'.concat((0, j.default)(A))], v && o.disabled, {
                    primary: o.primary,
                    secondary: o.secondary,
                    inherit: o.colorInherit
                } [_r]),
                component: _t,
                disabled: v,
                focusRipple: !x,
                focusVisibleClassName: (0, g.default)(o.focusVisible, y),
                ref: _m
            }, D), f.createElement('span', {
                className: o.label
            }, n));
        }),
        l = (0, h.default)(function(m) {
            return {
                root: (0, e.default)({}, m.typography.button, {
                    boxSizing: 'border-box',
                    minHeight: 36,
                    transition: m.transitions.create([
                        'background-color',
                        'box-shadow',
                        'border'
                    ], {
                        duration: m.transitions.duration.short
                    }),
                    borderRadius: '50%',
                    padding: 0,
                    minWidth: 0,
                    width: 56,
                    height: 56,
                    boxShadow: m.shadows[6],
                    '&:active': {
                        boxShadow: m.shadows[12]
                    },
                    color: m.palette.getContrastText(m.palette.grey[300]),
                    backgroundColor: m.palette.grey[300],
                    '&:hover': {
                        backgroundColor: m.palette.grey.A100,
                        '@media (hover: none)': {
                            backgroundColor: m.palette.grey[300]
                        },
                        '&$disabled': {
                            backgroundColor: m.palette.action.disabledBackground
                        },
                        textDecoration: 'none'
                    },
                    '&$focusVisible': {
                        boxShadow: m.shadows[6]
                    },
                    '&$disabled': {
                        color: m.palette.action.disabled,
                        boxShadow: m.shadows[0],
                        backgroundColor: m.palette.action.disabledBackground
                    }
                }),
                label: {
                    width: '100%',
                    display: 'inherit',
                    alignItems: 'inherit',
                    justifyContent: 'inherit'
                },
                primary: {
                    color: m.palette.primary.contrastText,
                    backgroundColor: m.palette.primary.main,
                    '&:hover': {
                        backgroundColor: m.palette.primary.dark,
                        '@media (hover: none)': {
                            backgroundColor: m.palette.primary.main
                        }
                    }
                },
                secondary: {
                    color: m.palette.secondary.contrastText,
                    backgroundColor: m.palette.secondary.main,
                    '&:hover': {
                        backgroundColor: m.palette.secondary.dark,
                        '@media (hover: none)': {
                            backgroundColor: m.palette.secondary.main
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
}), a.register('+4L0f', function(b, c) {
    _p(b.exports, 'default', function() {
        return _u;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('Z/8fU'),
        h = a('cO49c'),
        i = a('hZetO'),
        j = a('OOg43'),
        k = a('QvROH'),
        l = a('pKUM4'),
        m = a('/fKyd'),
        n = f.forwardRef(function(o, _p) {
            var q = o.action,
                r = o.buttonRef,
                s = o.centerRipple,
                t = void 0 !== s && s,
                _u = o.children,
                v = o.classes,
                w = o.className,
                x = o.component,
                y = void 0 === x ? 'button' : x,
                z = o.disabled,
                A = void 0 !== z && z,
                B = o.disableRipple,
                C = void 0 !== B && B,
                D = o.disableTouchRipple,
                E = void 0 !== D && D,
                F = o.focusRipple,
                G = void 0 !== F && F,
                H = o.focusVisibleClassName,
                I = o.onBlur,
                J = o.onClick,
                K = o.onFocus,
                L = o.onFocusVisible,
                M = o.onKeyDown,
                N = o.onKeyUp,
                O = o.onMouseDown,
                P = o.onMouseLeave,
                Q = o.onMouseUp,
                R = o.onTouchEnd,
                S = o.onTouchMove,
                T = o.onTouchStart,
                U = o.onDragLeave,
                V = o.tabIndex,
                W = void 0 === V ? 0 : V,
                X = o.TouchRippleProps,
                Y = o.type,
                Z = void 0 === Y ? 'button' : Y,
                $ = (0, e.default)(o, [
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
                ab = f.useRef(null);
            var bb = f.useRef(null),
                cb = f.useState(!1),
                db = cb[0],
                eb = cb[1];
            A && db && eb(!1);
            var fb = (0, l.default)(),
                gb = fb.isFocusVisible,
                hb = fb.onBlurVisible,
                ib = fb.ref;

            function jb(kb, lb) {
                var mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
                return (0, j.default)(function(nb) {
                    return lb && lb(nb), !mb && bb.current && bb.current[kb](nb), !0;
                });
            }
            f.useImperativeHandle(q, function() {
                return {
                    focusVisible: function() {
                        eb(!0), ab.current.focus();
                    }
                };
            }, []), f.useEffect(function() {
                db && G && !C && bb.current.pulsate();
            }, [
                C,
                G,
                db
            ]);
            var jb = oe('start', O),
                kb = oe('stop', U),
                lb = oe('stop', Q),
                mb = oe('stop', function(nb) {
                    db && nb.preventDefault(), P && P(nb);
                }),
                nb = oe('start', T),
                ob = oe('stop', R),
                pb = oe('stop', S),
                qb = oe('stop', function(rb) {
                    db && (hb(rb), eb(!1)), I && I(rb);
                }, !1),
                rb = (0, j.default)(function(sb) {
                    ab.current || (ab.current = sb.currentTarget), gb(sb) && (eb(!0), L && L(sb)), K && K(sb);
                }),
                sb = function() {
                    var tb = g.findDOMNode(ab.current);
                    return y && 'button' !== y && !('A' === tb.tagName && tb.href);
                },
                tb = f.useRef(!1),
                ub = (0, j.default)(function(vb) {
                    G && !tb.current && db && bb.current && ' ' === vb.key && (tb.current = !0, vb.persist(), bb.current.stop(vb, function() {
                        bb.current.start(vb);
                    })), vb.target === vb.currentTarget && sb() && ' ' === vb.key && vb.preventDefault(), M && M(vb), vb.target === vb.currentTarget && sb() && 'Enter' === vb.key && !A && (vb.preventDefault(), J && J(vb));
                }),
                vb = (0, j.default)(function(wb) {
                    G && ' ' === wb.key && bb.current && db && !wb.defaultPrevented && (tb.current = !1, wb.persist(), bb.current.stop(wb, function() {
                        bb.current.pulsate(wb);
                    })), N && N(wb), J && wb.target === wb.currentTarget && sb() && ' ' === wb.key && !wb.defaultPrevented && J(wb);
                }),
                wb = y;
            'button' === wb && $.href && (wb = 'a');
            var xb = {};
            'button' === wb ? (xb.type = Z, xb.disabled = A) : ('a' === wb && $.href || (xb.role = 'button'), xb['aria-disabled'] = A);
            var yb = (0, i.default)(r, _p),
                zb = (0, i.default)(ib, ab),
                Ab = (0, i.default)(yb, zb),
                Bb = f.useState(!1),
                Cb = Bb[0],
                Db = Bb[1];
            f.useEffect(function() {
                Db(!0);
            }, []);
            var Eb = Cb && !C && !A;
            return f.createElement(wb, (0, d.default)({
                className: (0, h.default)(v.root, w, db && [
                    v.focusVisible,
                    H
                ], A && v.disabled),
                onBlur: qb,
                onClick: J,
                onFocus: rb,
                onKeyDown: ub,
                onKeyUp: vb,
                onMouseDown: jb,
                onMouseLeave: mb,
                onMouseUp: lb,
                onDragLeave: kb,
                onTouchEnd: ob,
                onTouchMove: pb,
                onTouchStart: nb,
                ref: Ab,
                tabIndex: A ? -1 : W
            }, xb, $), _u, Eb ? f.createElement(m.default, (0, d.default)({
                ref: bb,
                center: t
            }, X)) : null);
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
}), a.register('OOg43', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = 'undefined' != typeof window ? d.useLayoutEffect : d.useEffect;

    function _f(g) {
        var _h = d.useRef(g);
        return e(function() {
            _h.current = g;
        }), d.useCallback(function() {
            return _h.current.apply(void 0, arguments);
        }, []);
    }
}), a.register('/fKyd', function(b, c) {
    _n(b.exports, 'default', function() {
        return _s;
    });
    var d = a('r98tK1'),
        e = a('zDnXd'),
        f = a('GepBD'),
        g = a('LEQ5w');
    a('WPpLv');
    var h = a('w/gq/'),
        i = a('cO49c'),
        j = a('QvROH'),
        k = a('9eSoL'),
        l = g.forwardRef(function(m, _n) {
            var o = m.center,
                p = void 0 !== o && o,
                q = m.classes,
                r = m.className,
                _s = (0, f.default)(m, [
                    'center',
                    'classes',
                    'className'
                ]),
                t = g.useState([]),
                u = t[0],
                v = t[1],
                w = g.useRef(0),
                x = g.useRef(null);
            g.useEffect(function() {
                x.current && (x.current(), x.current = null);
            }, [u]);
            var y = g.useRef(!1),
                z = g.useRef(null),
                A = g.useRef(null),
                B = g.useRef(null);
            g.useEffect(function() {
                return function() {
                    clearTimeout(z.current);
                };
            }, []);
            var C = g.useCallback(function(D) {
                    var E = D.pulsate,
                        F = D.rippleX,
                        G = D.rippleY,
                        H = D.rippleSize,
                        I = D.cb;
                    v(function(J) {
                        return [].concat((0, e.default)(J), [g.createElement(k.default, {
                            key: w.current,
                            classes: q,
                            timeout: 550,
                            pulsate: E,
                            rippleX: F,
                            rippleY: G,
                            rippleSize: H
                        })]);
                    }), w.current += 1, x.current = I;
                }, [q]),
                D = g.useCallback(function() {
                    var E = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        F = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        G = arguments.length > 2 ? arguments[2] : void 0,
                        H = F.pulsate,
                        I = void 0 !== H && H,
                        J = F.center,
                        K = void 0 === J ? p || F.pulsate : J,
                        L = F.fakeElement,
                        M = void 0 !== L && L;
                    if ('mousedown' === E.type && y.current)
                        y.current = !1;
                    else {
                        'touchstart' === E.type && (y.current = !0);
                        var N, O, P, Q = M ? null : B.current,
                            R = Q ? Q.getBoundingClientRect() : {
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            };
                        if (K || 0 === E.clientX && 0 === E.clientY || !E.clientX && !E.touches)
                            N = Math.round(R.width / 2), O = Math.round(R.height / 2);
                        else {
                            var S = E.touches ? E.touches[0] : E,
                                T = S.clientX,
                                U = S.clientY;
                            N = Math.round(T - R.left), O = Math.round(U - R.top);
                        }
                        if (K)
                            (P = Math.sqrt((2 * Math.pow(R.width, 2) + Math.pow(R.height, 2)) / 3)) % 2 == 0 && (P += 1);
                        else {
                            var S = 2 * Math.max(Math.abs((Q ? Q.clientWidth : 0) - N), N) + 2,
                                T = 2 * Math.max(Math.abs((Q ? Q.clientHeight : 0) - O), O) + 2;
                            P = Math.sqrt(Math.pow(S, 2) + Math.pow(T, 2));
                        }
                        E.touches ? null === A.current && (A.current = function() {
                            C({
                                pulsate: I,
                                rippleX: N,
                                rippleY: O,
                                rippleSize: P,
                                cb: G
                            });
                        }, z.current = setTimeout(function() {
                            A.current && (A.current(), A.current = null);
                        }, 80)) : C({
                            pulsate: I,
                            rippleX: N,
                            rippleY: O,
                            rippleSize: P,
                            cb: G
                        });
                    }
                }, [
                    p,
                    C
                ]),
                E = g.useCallback(function() {
                    D({}, {
                        pulsate: !0
                    });
                }, [D]),
                F = g.useCallback(function(G, H) {
                    if (clearTimeout(z.current), 'touchend' === G.type && A.current)
                        return G.persist(), A.current(), A.current = null, void(z.current = setTimeout(function() {
                            F(G, H);
                        }));
                    A.current = null, v(function(I) {
                        return I.length > 0 ? I.slice(1) : I;
                    }), x.current = H;
                }, []);
            return g.useImperativeHandle(_n, function() {
                return {
                    pulsate: E,
                    start: D,
                    stop: F
                };
            }, [
                E,
                D,
                F
            ]), g.createElement('span', (0, d.default)({
                className: (0, i.default)(q.root, r),
                ref: B
            }, _s), g.createElement(h.default, {
                component: null,
                exit: !0
            }, u));
        }),
        m = (0, j.default)(function(n) {
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
                    animation: '$enter '.concat(550, 'ms ').concat(n.transitions.easing.easeInOut)
                },
                ripplePulsate: {
                    animationDuration: ''.concat(n.transitions.duration.shorter, 'ms')
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
                    animation: '$exit '.concat(550, 'ms ').concat(n.transitions.easing.easeInOut)
                },
                childPulsate: {
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    animation: '$pulsate 2500ms '.concat(n.transitions.easing.easeInOut, ' 200ms infinite')
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
}), a.register('w/gq/', function(b, c) {
    _m(b.exports, 'default', function() {
        return _m;
    });
    var d = a('m64Cp1'),
        e = a('r98tK1'),
        f = a('aTFgN3'),
        g = a('5iwax');
    a('WPpLv');
    var h = a('LEQ5w'),
        i = a('6Bsnh'),
        j = a('zMjR4'),
        k = Object.values || function(l) {
            return Object.keys(l).map(function(_m) {
                return l[_m];
            });
        },
        l = function(m) {
            function n(o, p) {
                var q, r = (q = m.call(this, o, p) || this).handleExited.bind((0, f.default)(q));
                return q.state = {
                    contextValue: {
                        isMounting: !0
                    },
                    handleExited: r,
                    firstRender: !0
                }, q;
            }
            (0, g.default)(a, m);
            var n = a.prototype;
            return n.componentDidMount = function() {
                this.mounted = !0, this.setState({
                    contextValue: {
                        isMounting: !1
                    }
                });
            }, n.componentWillUnmount = function() {
                this.mounted = !1;
            }, a.getDerivedStateFromProps = function(o, p) {
                var q = p.children,
                    r = p.handleExited;
                return {
                    children: p.firstRender ? (0, j.getInitialChildMapping)(o, r) : (0, j.getNextChildMapping)(o, q, r),
                    firstRender: !1
                };
            }, n.handleExited = function(o, p) {
                var q = (0, j.getChildMapping)(this.props.children);
                o.key in q || (o.props.onExited && o.props.onExited(p), this.mounted && this.setState(function(r) {
                    var s = (0, e.default)({}, r.children);
                    return delete s[o.key], {
                        children: s
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
                return delete r.appear, delete r.enter, delete r.exit, null === p ? _m(h).createElement(i.default.Provider, {
                    value: s
                }, t) : _m(h).createElement(i.default.Provider, {
                    value: s
                }, _m(h).createElement(p, r, t));
            }, a;
        }(_m(h).Component);
    l.propTypes = {}, l.defaultProps = {
        component: 'div',
        childFactory: function(_m) {
            return _m;
        }
    };
    var _m = l;
}), a.register('zMjR4', function(b, c) {
    _g(b.exports, 'getChildMapping', function() {
        return _e;
    }), _g(b.exports, 'getInitialChildMapping', function() {
        return _e;
    }), _g(b.exports, 'getNextChildMapping', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(f, _g) {
        var h = Object.create(null);
        return f && d.Children.map(f, function(i) {
            return i;
        }).forEach(function(i) {
            h[i.key] = function(j) {
                return _g && (0, d.isValidElement)(j) ? _g(j) : j;
            }(i);
        }), h;
    }

    function e(f, g, h) {
        return null != h[g] ? h[g] : f.props[g];
    }

    function _e(f, g) {
        return _o(f.children, function(h) {
            return (0, d.cloneElement)(h, {
                onExited: g.bind(null, h),
                in: !0,
                appear: _p(h, 'appear', f),
                enter: _p(h, 'enter', f),
                exit: _p(h, 'exit', f)
            });
        });
    }

    function _e(f, g, h) {
        var i = _o(f.children),
            j = function(k, l) {
                function m(n) {
                    return n in l ? l[n] : k[n];
                }
                k = k || {}, l = l || {};
                var m, n = Object.create(null),
                    _o = [];
                for (var _p in k)
                    _p in l ? _o.length && (n[_p] = _o, _o = []) : _o.push(_p);
                var q = {};
                for (var r in l) {
                    if (n[r])
                        for (m = 0; m < n[r].length; m++) {
                            var s = n[r][m];
                            q[n[r][m]] = h(s);
                        }
                    q[r] = h(r);
                }
                for (m = 0; m < _o.length; m++)
                    q[_o[m]] = h(_o[m]);
                return q;
            }(g, i);
        return Object.keys(j).forEach(function(k) {
            var l = j[k];
            if ((0, d.isValidElement)(l)) {
                var m = k in g,
                    n = k in i,
                    o = g[k],
                    p = (0, d.isValidElement)(o) && !o.props.in;
                !n || m && !p ? n || !m || p ? n && m && (0, d.isValidElement)(o) && (j[k] = (0, d.cloneElement)(l, {
                    onExited: h.bind(null, l),
                    in: o.props.in,
                    exit: _f(l, 'exit', f),
                    enter: _f(l, 'enter', f)
                })) : j[k] = (0, d.cloneElement)(l, {
                    in: !1
                }) : j[k] = (0, d.cloneElement)(l, {
                    onExited: h.bind(null, l),
                    in: !0,
                    exit: _f(l, 'exit', f),
                    enter: _f(l, 'enter', f)
                });
            }
        }), j;
    }
}), a.register('9eSoL', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('LEQ5w');
    a('WPpLv');
    var e = a('cO49c'),
        _f = a('OOg43'),
        g = 'undefined' == typeof window ? d.useEffect : d.useLayoutEffect;
    var _h = function(i) {
        var _j = i.classes,
            k = i.pulsate,
            l = void 0 !== k && k,
            m = i.rippleX,
            n = i.rippleY,
            o = i.rippleSize,
            p = i.in,
            q = i.onExited,
            r = void 0 === q ? function() {} : q,
            s = i.timeout,
            t = d.useState(!1),
            u = t[0],
            v = t[1],
            w = (0, e.default)(_j.ripple, _j.rippleVisible, l && _j.ripplePulsate),
            x = {
                width: o,
                height: o,
                top: -o / 2 + n,
                left: -o / 2 + m
            },
            y = (0, e.default)(_j.child, u && _j.childLeaving, l && _j.childPulsate),
            z = (0, _f.default)(r);
        return g(function() {
            if (!p) {
                v(!0);
                var A = setTimeout(z, s);
                return function() {
                    clearTimeout(A);
                };
            }
        }, [
            z,
            p,
            s
        ]), d.createElement('span', {
            className: w,
            style: x
        }, d.createElement('span', {
            className: y
        }));
    };
}), a.register('PddPJ', function(b, c) {
    var d = a('CO72t');
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = void 0;
    var e = d(a('LEQ5w')),
        f = (0, d(a('Sf/mW')).default)(e.default.createElement('path', {
            d: 'M8 5v14l11-7z'
        }), 'PlayArrow');
    b.exports.default = f;
}), a.register('Sf/mW', function(b, c) {
    var d = a('CO72t');
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.default = function(e, f) {
        var g = _f.default.memo(_f.default.forwardRef(function(h, i) {
            return _f.default.createElement(_g.default, (0, _e.default)({
                ref: i
            }, h), e);
        }));
        return g.muiName = _g.default.muiName, g;
    };
    var _e = d(a('a1pPZ')),
        _f = d(a('LEQ5w')),
        _g = d(a('BePRT'));
}), a.register('a1pPZ', function(b, c) {
    function d() {
        return b.exports = d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    b.exports = a;
}), a.register('BePRT', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _l(b.exports, 'default', function() {
        return a('h+POK').default;
    });
    a('h+POK');
}), a.register('h+POK', function(b, c) {
    _l(b.exports, 'default', function() {
        return _q;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('mmS5q'),
        j = f.forwardRef(function(k, _l) {
            var m = k.children,
                n = k.classes,
                o = k.className,
                p = k.color,
                _q = void 0 === p ? 'inherit' : p,
                r = k.component,
                s = void 0 === r ? 'svg' : r,
                t = k.fontSize,
                u = void 0 === t ? 'default' : t,
                v = k.htmlColor,
                w = k.titleAccess,
                x = k.viewBox,
                y = void 0 === x ? '0 0 24 24' : x,
                z = (0, e.default)(k, [
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
            return f.createElement(s, (0, d.default)({
                className: (0, g.default)(n.root, o, 'inherit' !== _q && n['color'.concat((0, i.default)(_q))], 'default' !== u && n['fontSize'.concat((0, i.default)(u))]),
                focusable: 'false',
                viewBox: y,
                color: v,
                'aria-hidden': !w || void 0,
                role: w ? 'img' : void 0,
                ref: _l
            }, z), m, w ? f.createElement('title', null, w) : null);
        });
    j.muiName = 'SvgIcon';
    var k = (0, h.default)(function(l) {
        return {
            root: {
                userSelect: 'none',
                width: '1em',
                height: '1em',
                display: 'inline-block',
                fill: 'currentColor',
                flexShrink: 0,
                fontSize: l.typography.pxToRem(24),
                transition: l.transitions.create('fill', {
                    duration: l.transitions.duration.shorter
                })
            },
            colorPrimary: {
                color: l.palette.primary.main
            },
            colorSecondary: {
                color: l.palette.secondary.main
            },
            colorAction: {
                color: l.palette.action.active
            },
            colorError: {
                color: l.palette.error.main
            },
            colorDisabled: {
                color: l.palette.action.disabled
            },
            fontSizeInherit: {
                fontSize: 'inherit'
            },
            fontSizeSmall: {
                fontSize: l.typography.pxToRem(20)
            },
            fontSizeLarge: {
                fontSize: l.typography.pxToRem(35)
            }
        };
    }, {
        name: 'MuiSvgIcon'
    })(j);
}), a.register('kOSsb', function(b, c) {
    _k(b.exports, 'default', function() {
        return _r;
    });
    var d = a('6yrsF'),
        e = a('x8CoD'),
        f = a('4RTv9'),
        g = a('dt9Wz');
    const h = [
            'Samantha',
            'Victoria'
        ],
        i = b => {
            g.default.readToMe.audioQuestion && (g.default.readToMe.audioQuestion.stop(), g.default.readToMe.audioQuestion = null), g.default.readToMe.speechQuestion && (g.default.readToMe.speechQuestion.onend = null, g.default.readToMe.speechQuestion = null), g.default.readToMe.answersTimeout && clearTimeout(g.default.readToMe.answersTimeout), g.default.readToMe.reset(b), window.speechSynthesis.cancel();
        },
        j = async b => {
            if (g.default.readToMe.enabled || !b.audio || g.default.readToMe.hasPlayedForCurrentQuestion) {
                if ('speechSynthesis' in window && g.default.readToMe.enabled && !g.default.readToMe.isCurrentlySpeaking && !g.default.readToMe.hasPlayedForCurrentQuestion) {
                    let _k, l;
                    g.default.readToMe.isCurrentlySpeaking = !0, (null == b ? void 0 : b.text) && (l = new SpeechSynthesisUtterance(b.text), l.voice = await _p(), l.rate = 0.8, g.default.readToMe.speechQuestion = l), (null == b ? void 0 : b.audio) && (_k = new(0, d.Howl)({
                        src: [b.audio],
                        onplay: _m,
                        onend: (null == b ? void 0 : b.text) ? () => window.speechSynthesis.speak(l) : () => _o(b)
                    }), g.default.readToMe.audioQuestion = _k), _k && l ? (l.onstart = _n, l.onend = () => _o(b), _k.play(), g.default.readToMe.hasPlayedForCurrentQuestion = !0) : l ? (l.onstart = _n, l.onend = () => _o(b), window.speechSynthesis.speak(l), g.default.readToMe.hasPlayedForCurrentQuestion = !0) : _k ? (_k.play(), g.default.readToMe.hasPlayedForCurrentQuestion = !0) : (_o(b), g.default.readToMe.hasPlayedForCurrentQuestion = !0);
                }
            } else
                _k(b.audio);
        }, _k = b => {
            if (!g.default.readToMe.enabled || g.default.readToMe.enabled && !g.default.readToMe.currentlyPlayingQuestionAudio && !g.default.readToMe.currentlyPlayingAnswerAudio && g.default.readToMe.hasPlayedForCurrentQuestion) {
                let l = new(0, d.Howl)({
                    src: [(0, e.getCloudinaryUrl)(b)],
                    onplay: () => _m(),
                    onend: () => _o(),
                    html5: !0
                });
                g.default.readToMe.audioQuestion = l, l.play();
            }
        }, l = () => {
            g.default.readToMe.isCurrentlySpeaking = !1, g.default.readToMe.currentlyPlayingAnswerAudio = !1, g.default.readToMe.finishedReadingQuestion = !0, window.speechSynthesis.cancel();
        }, _m = () => {
            g.default.readToMe.currentlyPlayingQuestionAudio = !0;
        }, _n = () => {
            g.default.readToMe.currentlyPlayingQuestionText = !0;
        }, _o = b => {
            g.default.readToMe.currentlyPlayingQuestionAudio = !1, g.default.readToMe.currentlyPlayingQuestionText = !1, b && (g.default.readToMe.answersTimeout = setTimeout(() => (async b => {
                g.default.readToMe.isCurrentlySpeaking = !0;
                const p = b.answers.filter(b => null != b.text);
                if (b.type === f.QuestionType.multipleChoice && p.length) {
                    g.default.readToMe.currentlyPlayingAnswerAudio = !0;
                    const q = b.answers.findIndex(b => b._id === p[p.length - 1]._id);
                    for (const [r, s] of b.answers.entries()) {
                        if (!s.text)
                            continue;
                        let t = new SpeechSynthesisUtterance();
                        t.text = s.text, t.rate = 0.8, t.voice = await _p(), t.onstart = () => g.default.readToMe.answerIndex = r, t.onend = () => {
                            window.speechSynthesis.pause(), setTimeout(() => window.speechSynthesis.resume(), 500);
                        }, r >= q && (t.onend = () => l()), window.speechSynthesis.speak(t);
                    }
                } else
                    l();
            })(b), 500));
        }, _p = async () => {
            let q = await _q();
            if (null == q ? void 0 : q.length) {
                const r = q.filter(q => h.includes(q.name));
                if (r.length)
                    return r[0];
            }
            return null;
        }, _q = () => new Promise(b => {
            g.default.readToMe.chosenVoice && b([g.default.readToMe.chosenVoice]);
            let r = speechSynthesis.getVoices();
            r.length ? b(r) : (b([]), speechSynthesis.onvoiceschanged = () => {
                r = speechSynthesis.getVoices(), b(r);
            });
        });
    var _r = {
        play: (b, s = !0) => {
            i(s), j(b);
        },
        stop: i,
        hasFinishedReading: () => g.default.readToMe.finishedReadingQuestion,
        playAudio: _k,
        canPlayAgain: () => g.default.readToMe.canPlayAgain
    };
}), a.register('4RTv9', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    _m(b.exports, 'QuestionType', function() {
        return d;
    }), _m(b.exports, 'TextInputAnswerType', function() {
        return f;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {}))[g.exact = 1] = 'exact', g[g.contains = 2] = 'contains';
}), a.register('dt9Wz', function(b, c) {
    _m(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        readToMe: new(0, (a('rzzju')).default)()
    };
}), a.register('rzzju', function(b, c) {
    _m(b.exports, 'default', function() {
        return _h;
    });
    var d = a('1bFPu'),
        e = a('csYze'),
        f = a('YuT/D');
    class g {
        constructor() {
            (0, d.default)(this, 'audioQuestion', null), this.enabled = !1, this.canPlayAgain = !0, this.isCurrentlySpeaking = !1, this.hasPlayedForCurrentQuestion = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.finishedReadingQuestion = !1, this.speechQuestion = null, this.chosenVoice = null, this.answersTimeout = null, this.reset = b => {
                this.isCurrentlySpeaking = !1, this.currentlyPlayingQuestionAudio = !1, this.currentlyPlayingQuestionText = !1, this.currentlyPlayingAnswerAudio = !1, this.answerIndex = 0, this.audioQuestion = null, this.speechQuestion = null, b && (this.hasPlayedForCurrentQuestion = !1, this.finishedReadingQuestion = !1, this.canPlayAgain = !0);
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], g.prototype, 'enabled', void 0), (0, e.__decorate)([f.observable], g.prototype, 'canPlayAgain', void 0), (0, e.__decorate)([f.observable], g.prototype, 'isCurrentlySpeaking', void 0), (0, e.__decorate)([f.observable], g.prototype, 'hasPlayedForCurrentQuestion', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentlyPlayingQuestionAudio', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentlyPlayingQuestionText', void 0), (0, e.__decorate)([f.observable], g.prototype, 'currentlyPlayingAnswerAudio', void 0), (0, e.__decorate)([f.observable], g.prototype, 'answerIndex', void 0), (0, e.__decorate)([f.observable], g.prototype, 'finishedReadingQuestion', void 0), (0, e.__decorate)([f.observable], g.prototype, 'speechQuestion', void 0), (0, e.__decorate)([f.observable], g.prototype, 'chosenVoice', void 0), (0, e.__decorate)([f.observable], g.prototype, 'answersTimeout', void 0), (0, e.__decorate)([f.action.bound], g.prototype, 'reset', void 0);
    var _h = g;
}), a.register('T4lH8', function(b, c) {
    _m(b.exports, 'Container', function() {
        return _t;
    }), _m(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('/tBKx');
    a('FJVE0');
    var h = a('o6L40'),
        i = a('SqJXp'),
        j = a('G8w+m'),
        k = a('X133d'),
        l = a('x8CoD'),
        m = a('dDoty');
    let n, o, p, q, r = _C => _C;
    var _s = _m => {
        const [t, u] = _C(e).useState({
            width: -1,
            height: -1
        }), [v, w] = _C(e).useState(!1), {
            text: x,
            image: y,
            audio: z,
            latex: A
        } = _m, {
            width: B
        } = t;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                v && (0, d.jsx)(h.default, {
                    large: (0, l.getCloudinaryUrl)(y),
                    onClose: () => w(!1),
                    hideDownload: !0,
                    showRotate: !1,
                    hideZoom: !0
                }),
                (0, d.jsxs)(_t, {
                    children: [
                        (0, d.jsxs)(_u, {
                            children: [
                                (0, d.jsx)(g.default, {
                                    bounds: !0,
                                    onResize: _C => {
                                        _C.bounds && u(_C.bounds);
                                    },
                                    children: ({
                                        measureRef: _C
                                    }) => (0, d.jsx)('div', {
                                        ref: _C,
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
                                A && (0, d.jsx)(_v, {
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
                        (0, d.jsxs)(_w, {
                            children: [
                                (0, d.jsx)(k.default, {
                                    text: (0, j.parseText)(_m.allowGoogleTranslate, x),
                                    paddingHorizontal: '0px',
                                    paddingVertical: '6%',
                                    customStyle: {
                                        width: `calc(100% - ${ B }px)`
                                    },
                                    mode: 'multi',
                                    disableHorizontalCentering: !0,
                                    highlighted: _m.highlighted,
                                    noBold: _m.noBold
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        width: B,
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
    const _t = f.default.div(n || (n = r`
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
        _u = f.default.div(o || (o = r`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
`)),
        _v = f.default.div(p || (p = r`
  height: 90%;
  margin-right: 2vw;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10%;
`)),
        _w = f.default.div(q || (q = r`
  width: 60%;
  display: flex;
  align-items: center;
  height: 100%;
`));
}), a.register('/tBKx', function(b, c) {
    _m(b.exports, 'default', function() {
        return _p;
    });
    var d = a('r98tK1'),
        e = a('m64Cp1'),
        f = a('5iwax'),
        g = a('LEQ5w'),
        h = a('WPpLv'),
        i = a('iIbRn'),
        j = [
            'client',
            'offset',
            'scroll',
            'bounds',
            'margin'
        ];

    function k(l) {
        var _m = [];
        return j.forEach(function(n) {
            l[n] && _m.push(n);
        }), _m;
    }

    function k(l, m) {
        var n = {};
        if (m.indexOf('client') > -1 && (n.client = {
                top: l.clientTop,
                left: l.clientLeft,
                width: l.clientWidth,
                height: l.clientHeight
            }), m.indexOf('offset') > -1 && (n.offset = {
                top: l.offsetTop,
                left: l.offsetLeft,
                width: l.offsetWidth,
                height: l.offsetHeight
            }), m.indexOf('scroll') > -1 && (n.scroll = {
                top: l.scrollTop,
                left: l.scrollLeft,
                width: l.scrollWidth,
                height: l.scrollHeight
            }), m.indexOf('bounds') > -1) {
            var o = l.getBoundingClientRect();
            n.bounds = {
                top: o.top,
                right: o.right,
                bottom: o.bottom,
                left: o.left,
                width: o.width,
                height: o.height
            };
        }
        if (m.indexOf('margin') > -1) {
            var o = getComputedStyle(l);
            n.margin = {
                top: o ? parseInt(o.marginTop) : 0,
                right: o ? parseInt(o.marginRight) : 0,
                bottom: o ? parseInt(o.marginBottom) : 0,
                left: o ? parseInt(o.marginLeft) : 0
            };
        }
        return n;
    }

    function k(l) {
        return l && l.ownerDocument && l.ownerDocument.defaultView || window;
    }
    var k, l, m, n, o = (k = function(p) {
        var q = p.measure,
            r = p.measureRef,
            s = p.contentRect;
        return (0, p.children)({
            measure: q,
            measureRef: r,
            contentRect: s
        });
    }, m = l = function(p) {
        function q() {
            for (var r, s = arguments.length, t = new Array(s), u = 0; u < s; u++)
                t[u] = arguments[u];
            return (r = p.call.apply(p, [this].concat(t)) || this).state = {
                contentRect: {
                    entry: {},
                    client: {},
                    offset: {},
                    scroll: {},
                    bounds: {},
                    margin: {}
                }
            }, r._animationFrameID = null, r._resizeObserver = null, r._node = null, r._window = null, r.measure = function(v) {
                var w = p(r._node, n || f(r.props));
                v && (w.entry = v[0].contentRect), r._animationFrameID = r._window.requestAnimationFrame(function() {
                    null !== r._resizeObserver && (r.setState({
                        contentRect: w
                    }), 'function' == typeof r.props.onResize && r.props.onResize(w));
                });
            }, r._handleRef = function(v) {
                null !== r._resizeObserver && null !== r._node && r._resizeObserver.unobserve(r._node), r._node = v, r._window = h(r._node);
                var w = r.props.innerRef;
                w && ('function' == typeof w ? w(r._node) : w.current = r._node), null !== r._resizeObserver && null !== r._node && r._resizeObserver.observe(r._node);
            }, r;
        }
        (0, f.default)(_s, p);
        var q = _s.prototype;
        return q.componentDidMount = function() {
            this._resizeObserver = null !== this._window && this._window.ResizeObserver ? new this._window.ResizeObserver(this.measure) : new(0, i.default)(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), 'function' == typeof this.props.onResize && this.props.onResize(p(this._node, n || f(this.props))));
        }, q.componentWillUnmount = function() {
            null !== this._window && this._window.cancelAnimationFrame(this._animationFrameID), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null);
        }, q.render = function() {
            var r = this.props,
                _s = (r.innerRef, r.onResize, (0, e.default)(r, [
                    'innerRef',
                    'onResize'
                ]));
            return (0, g.createElement)(k, (0, d.default)({}, _s, {
                measureRef: this._handleRef,
                measure: this.measure,
                contentRect: this.state.contentRect
            }));
        }, _j;
    }(g.Component), l.propTypes = {
        client: _b(h).bool,
        offset: _b(h).bool,
        scroll: _b(h).bool,
        bounds: _b(h).bool,
        margin: _b(h).bool,
        innerRef: _b(h).oneOfType([
            _b(h).object,
            _b(h).func
        ]),
        onResize: _b(h).func
    }, m);
    o.displayName = 'Measure', o.propTypes.children = _b(h).func;
    var _p = o;
}), a.register('G8w+m', function(_b, c) {
    _j(_b.exports, 'parseText', function() {
        return _f;
    }), _j(_b.exports, 'clickHandler', function() {
        return _g;
    }), _j(_b.exports, 'isQuestionCorrect', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('4RTv9');
    const _f = (_b, _j) => (0, d.jsx)('span', {
            className: _b ? '' : 'notranslate lang-en',
            children: _j
        }),
        _g = (_b, _j) => {
            _j && (_b => !_b || !0 !== _b.isTrusted && !1 !== _b.isTrusted || _b.isTrusted)(_b) && _j();
        },
        _h = (_b, _j) => {
            if (!_j)
                return !1;
            let i = !1;
            if (_b) {
                _b.answers.find(i => {
                    if (i.correct) {
                        if (_b.type === e.QuestionType.multipleChoice)
                            return _j === i._id;
                        if (_b.type === e.QuestionType.textInput) {
                            const j = _i(_j),
                                k = _i(i.text);
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
        _i = _b => {
            let _j = _b.trim();
            return _j = _j.replace(/[\u2018\u2019]/g, '\'').replace(/[\u201C\u201D]/g, '"'), _j = _j.toLowerCase(), _j;
        };
}), a.register('VSAwN', function(b, c) {
    t(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('X133d'),
        f = a('G8w+m');
    var _g = b => (0, d.jsx)(e.default, {
        mode: 'multi',
        text: (0, f.parseText)(b.allowGoogleTranslate || !1, b.text),
        highlighted: b.highlighted,
        noBold: b.noBold
    });
});