function a(b) {
    return b && b.__esModule ? b.default : b;
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e, f, g, h;
    e = c.exports, f = 'default', g = function () {
        return _P;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = b('.....'), j = b('.....');
    function k(l) {
        var m = !1;
        return function () {
            m || (console.warn(l), m = !0);
        };
    }
    k('\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren\'t supported, because Flip Move needs access to the backing instances via refs, and SFCs don\'t have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n'), k('\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n');
    var m = k('\n>> Warning, via react-flip-move <<\n\nWhen using "wrapperless" mode (by supplying \'typeName\' of \'null\'), strange things happen when the direct parent has the default "static" position.\n\nFlipMove has added \'position: relative\' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n'), n = k('\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move\'s child elements have the html attribute \'disabled\' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set \'animation\' to false.\n'), o = {
            elevator: {
                from: {
                    transform: 'scale(0)',
                    opacity: '0'
                },
                to: {
                    transform: '',
                    opacity: ''
                }
            },
            fade: {
                from: { opacity: '0' },
                to: { opacity: '' }
            },
            accordionVertical: {
                from: {
                    transform: 'scaleY(0)',
                    transformOrigin: 'center top'
                },
                to: {
                    transform: '',
                    transformOrigin: 'center top'
                }
            },
            accordionHorizontal: {
                from: {
                    transform: 'scaleX(0)',
                    transformOrigin: 'left center'
                },
                to: {
                    transform: '',
                    transformOrigin: 'left center'
                }
            },
            none: null
        }, p = {
            elevator: {
                from: {
                    transform: 'scale(1)',
                    opacity: '1'
                },
                to: {
                    transform: 'scale(0)',
                    opacity: '0'
                }
            },
            fade: {
                from: { opacity: '1' },
                to: { opacity: '0' }
            },
            accordionVertical: {
                from: {
                    transform: 'scaleY(1)',
                    transformOrigin: 'center top'
                },
                to: {
                    transform: 'scaleY(0)',
                    transformOrigin: 'center top'
                }
            },
            accordionHorizontal: {
                from: {
                    transform: 'scaleX(1)',
                    transformOrigin: 'left center'
                },
                to: {
                    transform: 'scaleX(0)',
                    transformOrigin: 'left center'
                }
            },
            none: null
        }, q = o, r = 'elevator', s = function (t, u) {
            for (var v = 0; v < u.length; v++)
                if (t(u[v], v, u))
                    return u[v];
        }, t = function (u) {
            return (t = Array.isArray || function (v) {
                return '[object Array]' === Object.prototype.toString.call(v);
            })(u);
        };
    var u, v, w = (u = function (x) {
            return x.replace(/([A-Z])/g, '-$1').toLowerCase();
        }, v = {}, function (x) {
            return v[x] || (v[x] = u(x)), v[x];
        }), x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (y) {
            return typeof y;
        } : function (y) {
            return y && 'function' == typeof Symbol && y.constructor === Symbol && y !== Symbol.prototype ? 'symbol' : typeof y;
        }, y = function (z, A) {
            if (!(z instanceof A))
                throw new TypeError('Cannot call a class as a function');
        }, z = Object.assign || function (A) {
            for (var B = 1; B < arguments.length; B++) {
                var C = arguments[B];
                for (var D in C)
                    Object.prototype.hasOwnProperty.call(C, D) && (A[D] = C[D]);
            }
            return A;
        }, A = function (B, C) {
            if ('function' != typeof C && null !== C)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof C);
            B.prototype = Object.create(C && C.prototype, {
                constructor: {
                    value: B,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), C && (Object.setPrototypeOf ? Object.setPrototypeOf(B, C) : B.__proto__ = C);
        }, B = function (C, D) {
            if (!C)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return !D || 'object' != typeof D && 'function' != typeof D ? C : D;
        };
    function C(D) {
        var E, F;
        return F = E = function (G) {
            function H() {
                return y(this, H), B(this, G.apply(this, arguments));
            }
            return A(H, G), H.prototype.checkChildren = function (I) {
            }, H.prototype.convertProps = function (I) {
                var J = {
                    children: I.children,
                    easing: I.easing,
                    onStart: I.onStart,
                    onFinish: I.onFinish,
                    onStartAll: I.onStartAll,
                    onFinishAll: I.onFinishAll,
                    typeName: I.typeName,
                    disableAllAnimations: I.disableAllAnimations,
                    getPosition: I.getPosition,
                    maintainContainerHeight: I.maintainContainerHeight,
                    verticalAlignment: I.verticalAlignment,
                    duration: this.convertTimingProp('duration'),
                    delay: this.convertTimingProp('delay'),
                    staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
                    staggerDelayBy: this.convertTimingProp('staggerDelayBy'),
                    appearAnimation: this.convertAnimationProp(I.appearAnimation, q),
                    enterAnimation: this.convertAnimationProp(I.enterAnimation, o),
                    leaveAnimation: this.convertAnimationProp(I.leaveAnimation, p),
                    delegated: {}
                };
                this.checkChildren(J.children);
                var K = Object.keys(J), L = function (M) {
                        var N = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], O = {};
                        return Object.keys(M).forEach(function (P) {
                            -1 === N.indexOf(P) && (O[P] = M[P]);
                        }), O;
                    }(this.props, K);
                return L.style = z({ position: 'relative' }, L.style), J.delegated = L, J;
            }, H.prototype.convertTimingProp = function (I) {
                var J = this.props[I], K = 'number' == typeof J ? J : parseInt(J, 10);
                return isNaN(K) ? H.defaultProps[I] : K;
            }, H.prototype.convertAnimationProp = function (I, J) {
                switch (void 0 === I ? 'undefined' : x(I)) {
                case 'boolean':
                    return J[I ? r : 'none'];
                case 'string':
                    return -1 === Object.keys(J).indexOf(I) ? J[r] : J[I];
                default:
                    return I;
                }
            }, H.prototype.render = function () {
                return a(i).createElement(D, this.convertProps(this.props));
            }, H;
        }(i.Component), E.defaultProps = {
            easing: 'ease-in-out',
            duration: 350,
            delay: 0,
            staggerDurationBy: 0,
            staggerDelayBy: 0,
            typeName: 'div',
            enterAnimation: r,
            leaveAnimation: r,
            disableAllAnimations: !1,
            getPosition: function (G) {
                return G.getBoundingClientRect();
            },
            maintainContainerHeight: !1,
            verticalAlignment: 'top'
        }, F;
    }
    function F(G) {
        var H = G.domNode, I = G.styles;
        Object.keys(I).forEach(function (J) {
            H.style.setProperty(w(J), I[J]);
        });
    }
    var I = function (J) {
            var K = J.childDomNode, L = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 0,
                    width: 0
                }, M = J.childBoundingBox || L, N = J.parentBoundingBox || L, O = (0, J.getPosition)(K), P = O.top - N.top, Q = O.left - N.left;
            return [
                M.left - Q,
                M.top - P
            ];
        }, J = function (K, L) {
            var M = L.delay, N = L.duration, O = L.staggerDurationBy, P = L.staggerDelayBy, Q = L.easing;
            M += K * P, N += K * O;
            return [
                'transform',
                'opacity'
            ].map(function (R) {
                return R + ' ' + N + 'ms ' + Q + ' ' + M + 'ms';
            }).join(', ');
        }, K = function () {
            var L = {
                transition: 'transitionend',
                '-o-transition': 'oTransitionEnd',
                '-moz-transition': 'transitionend',
                '-webkit-transition': 'webkitTransitionEnd'
            };
            if ('undefined' == typeof document)
                return '';
            var M = document.createElement('fakeelement'), N = s(function (O) {
                    return void 0 !== M.style.getPropertyValue(O);
                }, Object.keys(L));
            return N ? L[N] : '';
        }(), L = !K;
    function M(N) {
        return N.key || '';
    }
    function N(O) {
        return i.Children.toArray(O);
    }
    var O = function (P) {
            function Q() {
                var R, S;
                y(this, Q);
                for (var T = arguments.length, U = Array(T), V = 0; V < T; V++)
                    U[V] = arguments[V];
                return R = S = B(this, P.call.apply(P, [this].concat(U))), S.state = {
                    children: N(S.props ? S.props.children : []).map(function (W) {
                        return z({}, W, {
                            element: W,
                            appearing: !0
                        });
                    })
                }, S.childrenData = {}, S.parentData = {
                    domNode: null,
                    boundingBox: null
                }, S.heightPlaceholderData = { domNode: null }, S.remainingAnimations = 0, S.childrenToAnimate = [], S.findDOMContainer = function () {
                    var W = a(j).findDOMNode(S), X = W && W.parentNode;
                    X && X instanceof HTMLElement && ('static' === window.getComputedStyle(X).position && (X.style.position = 'relative', m()), S.parentData.domNode = X);
                }, S.runAnimation = function () {
                    var W = S.state.children.filter(S.doesChildNeedToBeAnimated), X = W.map(function (Y) {
                            return S.computeInitialStyles(Y);
                        });
                    W.forEach(function (Y, Z) {
                        S.remainingAnimations += 1, S.childrenToAnimate.push(M(Y)), S.animateChild(Y, Z, X[Z]);
                    }), 'function' == typeof S.props.onStartAll && S.callChildrenHook(S.props.onStartAll);
                }, S.doesChildNeedToBeAnimated = function (W) {
                    if (!M(W))
                        return !1;
                    var X = S.getChildData(M(W)), Y = X.domNode, Z = X.boundingBox, $ = S.parentData.boundingBox;
                    if (!Y)
                        return !1;
                    var ab = S.props, bb = ab.appearAnimation, cb = ab.enterAnimation, db = ab.leaveAnimation, eb = ab.getPosition, fb = W.appearing && bb, gb = W.entering && cb, hb = W.leaving && db;
                    if (fb || gb || hb)
                        return !0;
                    var ib = I({
                            childDomNode: Y,
                            childBoundingBox: Z,
                            parentBoundingBox: $,
                            getPosition: eb
                        }), jb = ib[0], kb = ib[1];
                    return 0 !== jb || 0 !== kb;
                }, B(S, R);
            }
            return A(Q, P), Q.prototype.componentDidMount = function () {
                null === this.props.typeName && this.findDOMContainer(), this.props.appearAnimation && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, Q.prototype.componentDidUpdate = function (W) {
                null === this.props.typeName && this.findDOMContainer(), !function (X, Y) {
                    if (X === Y)
                        return !0;
                    var Z = !t(X) || !t(Y), $ = X.length !== Y.length;
                    return !Z && !$ && function (ab, bb) {
                        for (var cb = 0; cb < bb.length; cb++)
                            if (!ab(bb[cb], cb, bb))
                                return !1;
                        return !0;
                    }(function (ab, bb) {
                        return ab === Y[bb];
                    }, X);
                }(N(this.props.children).map(function (X) {
                    return X.key;
                }), N(W.children).map(function (X) {
                    return X.key;
                })) && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, Q.prototype.calculateNextSetOfChildren = function (W) {
                var X = this, Y = W.map(function (Z) {
                        var $ = X.findChildByKey(Z.key), ab = !$ || $.leaving;
                        return z({}, Z, {
                            element: Z,
                            entering: ab
                        });
                    }), Z = 0;
                return this.state.children.forEach(function ($, ab) {
                    if (!s(function (bb) {
                            return bb.key === M($);
                        }, W) && X.props.leaveAnimation) {
                        var bb = z({}, $, { leaving: !0 }), cb = ab + Z;
                        Y.splice(cb, 0, bb), Z += 1;
                    }
                }), Y;
            }, Q.prototype.prepForAnimation = function () {
                var W = this, X = this.props, Y = X.leaveAnimation, Z = X.maintainContainerHeight, $ = X.getPosition;
                Y && (this.state.children.filter(function (ab) {
                    return ab.leaving;
                }).forEach(function (ab) {
                    var bb = W.getChildData(M(ab));
                    !W.isAnimationDisabled(W.props) && bb.domNode && bb.domNode.disabled && n(), bb.boundingBox && function (cb, db) {
                        var eb = cb.domNode, fb = cb.boundingBox;
                        if (eb && fb) {
                            var gb = window.getComputedStyle(eb), hb = [
                                    'margin-top',
                                    'margin-left',
                                    'margin-right'
                                ].reduce(function (ib, jb) {
                                    var kb, lb = gb.getPropertyValue(jb);
                                    return z({}, ib, ((kb = {})[jb] = Number(lb.replace('px', '')), kb));
                                }, {});
                            F({
                                domNode: eb,
                                styles: {
                                    position: 'absolute',
                                    top: ('bottom' === db ? fb.top - fb.height : fb.top) - hb['margin-top'] + 'px',
                                    left: fb.left - hb['margin-left'] + 'px',
                                    right: fb.right - hb['margin-right'] + 'px'
                                }
                            });
                        }
                    }(bb, W.props.verticalAlignment);
                }), Z && this.heightPlaceholderData.domNode && function (ab) {
                    var bb = ab.domNode, cb = ab.parentData, db = ab.getPosition, eb = cb.domNode, fb = cb.boundingBox;
                    if (eb && fb) {
                        F({
                            domNode: bb,
                            styles: { height: '0' }
                        });
                        var gb = fb.height - db(eb).height;
                        F({
                            domNode: bb,
                            styles: { height: gb > 0 ? gb + 'px' : '0' }
                        });
                    }
                }({
                    domNode: this.heightPlaceholderData.domNode,
                    parentData: this.parentData,
                    getPosition: $
                }));
                this.state.children.forEach(function (ab) {
                    var bb = W.getChildData(M(ab)).domNode;
                    bb && (ab.entering || ab.leaving || F({
                        domNode: bb,
                        styles: { transition: '' }
                    }));
                });
            }, Q.prototype.UNSAFE_componentWillReceiveProps = function (W) {
                this.updateBoundingBoxCaches();
                var X = N(W.children);
                this.setState({
                    children: this.isAnimationDisabled(W) ? X.map(function (Y) {
                        return z({}, Y, { element: Y });
                    }) : this.calculateNextSetOfChildren(X)
                });
            }, Q.prototype.animateChild = function (W, X, Y) {
                var Z = this, $ = this.getChildData(M(W)).domNode;
                $ && (F({
                    domNode: $,
                    styles: Y
                }), this.props.onStart && this.props.onStart(W, $), requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        var ab = {
                            transition: J(X, Z.props),
                            transform: '',
                            opacity: ''
                        };
                        W.appearing && Z.props.appearAnimation ? ab = z({}, ab, Z.props.appearAnimation.to) : W.entering && Z.props.enterAnimation ? ab = z({}, ab, Z.props.enterAnimation.to) : W.leaving && Z.props.leaveAnimation && (ab = z({}, ab, Z.props.leaveAnimation.to)), F({
                            domNode: $,
                            styles: ab
                        });
                    });
                }), this.bindTransitionEndHandler(W));
            }, Q.prototype.bindTransitionEndHandler = function (W) {
                var X = this, Y = this.getChildData(M(W)).domNode;
                if (Y) {
                    Y.addEventListener(K, function R(Z) {
                        Z.target === Y && (Y.style.transition = '', X.triggerFinishHooks(W, Y), Y.removeEventListener(K, R), W.leaving && X.removeChildData(M(W)));
                    });
                }
            }, Q.prototype.triggerFinishHooks = function (W, X) {
                var Y = this;
                if (this.props.onFinish && this.props.onFinish(W, X), this.remainingAnimations -= 1, 0 === this.remainingAnimations) {
                    var Z = this.state.children.filter(function ($) {
                        return !$.leaving;
                    }).map(function ($) {
                        return z({}, $, {
                            element: $.element,
                            appearing: !1,
                            entering: !1
                        });
                    });
                    this.setState({ children: Z }, function () {
                        'function' == typeof Y.props.onFinishAll && Y.callChildrenHook(Y.props.onFinishAll), Y.childrenToAnimate = [];
                    }), this.heightPlaceholderData.domNode && (this.heightPlaceholderData.domNode.style.height = '0');
                }
            }, Q.prototype.callChildrenHook = function (W) {
                var X = this, Y = [], Z = [];
                this.childrenToAnimate.forEach(function ($) {
                    var ab = X.findChildByKey($);
                    ab && (Y.push(ab), X.hasChildData($) && Z.push(X.getChildData($).domNode));
                }), W(Y, Z);
            }, Q.prototype.updateBoundingBoxCaches = function () {
                var W = this, X = this.parentData.domNode;
                if (X) {
                    this.parentData.boundingBox = this.props.getPosition(X);
                    var Y = [];
                    this.state.children.forEach(function (Z) {
                        var $ = M(Z);
                        if ($)
                            if (W.hasChildData($)) {
                                var ab = W.getChildData($);
                                ab.domNode && Z ? Y.push(function (bb) {
                                    var cb = bb.childDomNode, db = bb.parentDomNode, eb = bb.getPosition, fb = eb(db), gb = eb(cb), hb = gb.top, ib = gb.left, jb = gb.right, kb = gb.bottom, lb = gb.width, mb = gb.height;
                                    return {
                                        top: hb - fb.top,
                                        left: ib - fb.left,
                                        right: fb.right - jb,
                                        bottom: fb.bottom - kb,
                                        width: lb,
                                        height: mb
                                    };
                                }({
                                    childDomNode: ab.domNode,
                                    parentDomNode: X,
                                    getPosition: W.props.getPosition
                                })) : Y.push(null);
                            } else
                                Y.push(null);
                        else
                            Y.push(null);
                    }), this.state.children.forEach(function (Z, $) {
                        var ab = M(Z), bb = Y[$];
                        ab && W.setChildData(ab, { boundingBox: bb });
                    });
                }
            }, Q.prototype.computeInitialStyles = function (W) {
                if (W.appearing)
                    return this.props.appearAnimation ? this.props.appearAnimation.from : {};
                if (W.entering)
                    return this.props.enterAnimation ? z({
                        position: '',
                        top: '',
                        left: '',
                        right: '',
                        bottom: ''
                    }, this.props.enterAnimation.from) : {};
                if (W.leaving)
                    return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
                var X = this.getChildData(M(W)), Y = X.domNode, Z = X.boundingBox, $ = this.parentData.boundingBox;
                if (!Y)
                    return {};
                var ab = I({
                    childDomNode: Y,
                    childBoundingBox: Z,
                    parentBoundingBox: $,
                    getPosition: this.props.getPosition
                });
                return { transform: 'translate(' + ab[0] + 'px, ' + ab[1] + 'px)' };
            }, Q.prototype.isAnimationDisabled = function (W) {
                return L || W.disableAllAnimations || 0 === W.duration && 0 === W.delay && 0 === W.staggerDurationBy && 0 === W.staggerDelayBy;
            }, Q.prototype.findChildByKey = function (W) {
                return s(function (X) {
                    return M(X) === W;
                }, this.state.children);
            }, Q.prototype.hasChildData = function (W) {
                return Object.prototype.hasOwnProperty.call(this.childrenData, W);
            }, Q.prototype.getChildData = function (W) {
                return this.hasChildData(W) ? this.childrenData[W] : {};
            }, Q.prototype.setChildData = function (W, X) {
                this.childrenData[W] = z({}, this.getChildData(W), X);
            }, Q.prototype.removeChildData = function (W) {
                delete this.childrenData[W], this.setState(function (X) {
                    return z({}, X, {
                        children: X.children.filter(function (Y) {
                            return Y.element.key !== W;
                        })
                    });
                });
            }, Q.prototype.createHeightPlaceholder = function () {
                var W = this, X = this.props.typeName, Y = 'ul' === X || 'ol' === X ? 'li' : 'div';
                return (0, i.createElement)(Y, {
                    key: 'height-placeholder',
                    ref: function (Z) {
                        W.heightPlaceholderData.domNode = Z;
                    },
                    style: {
                        visibility: 'hidden',
                        height: 0
                    }
                });
            }, Q.prototype.childrenWithRefs = function () {
                var W = this;
                return this.state.children.map(function (X) {
                    return (0, i.cloneElement)(X.element, {
                        ref: function (Y) {
                            if (Y) {
                                var Z = function ($) {
                                    if ('undefined' == typeof HTMLElement)
                                        return null;
                                    if ($ instanceof HTMLElement)
                                        return $;
                                    var ab = (0, j.findDOMNode)($);
                                    return ab && ab.nodeType === Node.TEXT_NODE ? null : ab;
                                }(Y);
                                W.setChildData(M(X), { domNode: Z });
                            }
                        }
                    });
                });
            }, Q.prototype.render = function () {
                var W = this, X = this.props, Y = X.typeName, Z = X.delegated, $ = X.leaveAnimation, ab = X.maintainContainerHeight, bb = this.childrenWithRefs();
                if ($ && ab && bb.push(this.createHeightPlaceholder()), !Y)
                    return bb;
                var cb = z({}, Z, {
                    children: bb,
                    ref: function (db) {
                        W.parentData.domNode = db;
                    }
                });
                return (0, i.createElement)(Y, cb);
            }, Q;
        }(i.Component), _P = C(O);
});