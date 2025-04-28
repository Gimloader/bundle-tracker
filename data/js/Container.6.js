function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('R6gfH', function(b, c) {
    var d, e, f, g;
    d = b.exports, e = 'default', f = function() {
        return _E;
    }, Object.defineProperty(d, e, {
        get: f,
        set: g,
        enumerable: !0,
        configurable: !0
    });
    var h = a('LEQ5w'),
        i = a('Z/8fU');

    function j(k) {
        var l = !1;
        return function() {
            l || (console.warn(k), l = !0);
        };
    }
    _U('\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren\'t supported, because Flip Move needs access to the backing instances via refs, and SFCs don\'t have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n'), _U('\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n');
    var j = _U('\n>> Warning, via react-flip-move <<\n\nWhen using "wrapperless" mode (by supplying \'typeName\' of \'null\'), strange things happen when the direct parent has the default "static" position.\n\nFlipMove has added \'position: relative\' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n'),
        k = _U('\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move\'s child elements have the html attribute \'disabled\' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set \'animation\' to false.\n'),
        l = {
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
                from: {
                    opacity: '0'
                },
                to: {
                    opacity: ''
                }
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
        },
        m = {
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
                from: {
                    opacity: '1'
                },
                to: {
                    opacity: '0'
                }
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
        },
        n = l,
        o = 'elevator',
        p = function(q, r) {
            for (var s = 0; s < r.length; s++)
                if (q(r[s], s, r))
                    return r[s];
        },
        q = function(r) {
            return (q = Array.isArray || function(s) {
                return '[object Array]' === Object.prototype.toString.call(s);
            })(r);
        };
    var r, s, t = (r = function(u) {
            return u.replace(/([A-Z])/g, '-$1').toLowerCase();
        }, s = {}, function(u) {
            return s[u] || (s[u] = r(u)), s[u];
        }),
        u = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(v) {
            return typeof v;
        } : function(v) {
            return v && 'function' == typeof Symbol && v.constructor === Symbol && v !== Symbol.prototype ? 'symbol' : typeof v;
        },
        v = function(w, x) {
            if (!(w instanceof x))
                throw new TypeError('Cannot call a class as a function');
        },
        w = Object.assign || function(x) {
            for (var y = 1; y < arguments.length; y++) {
                var z = arguments[y];
                for (var A in z)
                    Object.prototype.hasOwnProperty.call(z, A) && (x[A] = z[A]);
            }
            return x;
        },
        x = function(y, z) {
            if ('function' != typeof z && null !== z)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof z);
            y.prototype = Object.create(z && z.prototype, {
                constructor: {
                    value: y,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), z && (Object.setPrototypeOf ? Object.setPrototypeOf(y, z) : y.__proto__ = z);
        },
        y = function(z, A) {
            if (!z)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return !A || 'object' != typeof A && 'function' != typeof A ? z : A;
        };

    function z(A) {
        var B, C;
        return C = B = function(D) {
            function E() {
                return v(this, E), y(this, D.apply(this, arguments));
            }
            return x(C, D), C.prototype.checkChildren = function(E) {}, C.prototype.convertProps = function(E) {
                var F = {
                    children: E.children,
                    easing: E.easing,
                    onStart: E.onStart,
                    onFinish: E.onFinish,
                    onStartAll: E.onStartAll,
                    onFinishAll: E.onFinishAll,
                    typeName: E.typeName,
                    disableAllAnimations: E.disableAllAnimations,
                    getPosition: E.getPosition,
                    maintainContainerHeight: E.maintainContainerHeight,
                    verticalAlignment: E.verticalAlignment,
                    duration: this.convertTimingProp('duration'),
                    delay: this.convertTimingProp('delay'),
                    staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
                    staggerDelayBy: this.convertTimingProp('staggerDelayBy'),
                    appearAnimation: this.convertAnimationProp(E.appearAnimation, n),
                    enterAnimation: this.convertAnimationProp(E.enterAnimation, l),
                    leaveAnimation: this.convertAnimationProp(E.leaveAnimation, m),
                    delegated: {}
                };
                this.checkChildren(F.children);
                var G = Object.keys(F),
                    H = function(I) {
                        var J = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            K = {};
                        return Object.keys(I).forEach(function(L) {
                            -1 === J.indexOf(L) && (K[L] = I[L]);
                        }), K;
                    }(this.props, G);
                return H.style = w({
                    position: 'relative'
                }, H.style), F.delegated = H, F;
            }, C.prototype.convertTimingProp = function(E) {
                var F = this.props[E],
                    G = 'number' == typeof F ? F : parseInt(F, 10);
                return isNaN(G) ? C.defaultProps[E] : G;
            }, C.prototype.convertAnimationProp = function(E, F) {
                switch (void 0 === E ? 'undefined' : u(E)) {
                    case 'boolean':
                        return F[E ? o : 'none'];
                    case 'string':
                        return -1 === Object.keys(F).indexOf(E) ? F[o] : F[E];
                    default:
                        return E;
                }
            }, C.prototype.render = function() {
                return _D(h).createElement(A, this.convertProps(this.props));
            }, C;
        }(h.Component), B.defaultProps = {
            easing: 'ease-in-out',
            duration: 350,
            delay: 0,
            staggerDurationBy: 0,
            staggerDelayBy: 0,
            typeName: 'div',
            enterAnimation: o,
            leaveAnimation: o,
            disableAllAnimations: !1,
            getPosition: function(_D) {
                return _D.getBoundingClientRect();
            },
            maintainContainerHeight: !1,
            verticalAlignment: 'top'
        }, C;
    }

    function z(A) {
        var B = A.domNode,
            C = A.styles;
        Object.keys(C).forEach(function(D) {
            B.style.setProperty(t(D), C[D]);
        });
    }
    var z = function(A) {
            var B = A.childDomNode,
                C = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 0,
                    width: 0
                },
                D = A.childBoundingBox || C,
                E = A.parentBoundingBox || C,
                F = (0, A.getPosition)(B),
                G = F.top - E.top,
                H = F.left - E.left;
            return [
                D.left - H,
                D.top - G
            ];
        },
        A = function(B, C) {
            var D = C.delay,
                E = C.duration,
                F = C.staggerDurationBy,
                G = C.staggerDelayBy,
                H = C.easing;
            D += B * G, E += B * F;
            return [
                'transform',
                'opacity'
            ].map(function(I) {
                return I + ' ' + E + 'ms ' + H + ' ' + D + 'ms';
            }).join(', ');
        },
        B = function() {
            var C = {
                transition: 'transitionend',
                '-o-transition': 'oTransitionEnd',
                '-moz-transition': 'transitionend',
                '-webkit-transition': 'webkitTransitionEnd'
            };
            if ('undefined' == typeof document)
                return '';
            var D = document.createElement('fakeelement'),
                E = p(function(F) {
                    return void 0 !== D.style.getPropertyValue(F);
                }, Object.keys(C));
            return E ? C[E] : '';
        }(),
        C = !B;

    function D(E) {
        return E.key || '';
    }

    function D(E) {
        return h.Children.toArray(E);
    }
    var D = function(E) {
            function F() {
                var G, H;
                v(this, F);
                for (var I = arguments.length, J = Array(I), K = 0; K < I; K++)
                    J[K] = arguments[K];
                return G = H = y(this, E.call.apply(E, [this].concat(J))), H.state = {
                    children: H(H.props ? H.props.children : []).map(function(L) {
                        return w({}, L, {
                            element: L,
                            appearing: !0
                        });
                    })
                }, H.childrenData = {}, H.parentData = {
                    domNode: null,
                    boundingBox: null
                }, H.heightPlaceholderData = {
                    domNode: null
                }, H.remainingAnimations = 0, H.childrenToAnimate = [], H.findDOMContainer = function() {
                    var L = _L(i).findDOMNode(H),
                        M = L && L.parentNode;
                    M && M instanceof HTMLElement && ('static' === window.getComputedStyle(M).position && (M.style.position = 'relative', j()), H.parentData.domNode = M);
                }, H.runAnimation = function() {
                    var _L = H.state.children.filter(H.doesChildNeedToBeAnimated),
                        M = _L.map(function(N) {
                            return H.computeInitialStyles(N);
                        });
                    _L.forEach(function(N, O) {
                        H.remainingAnimations += 1, H.childrenToAnimate.push(F(N)), H.animateChild(N, O, M[O]);
                    }), 'function' == typeof H.props.onStartAll && H.callChildrenHook(H.props.onStartAll);
                }, H.doesChildNeedToBeAnimated = function(L) {
                    if (!F(L))
                        return !1;
                    var M = H.getChildData(F(L)),
                        N = M.domNode,
                        O = M.boundingBox,
                        P = H.parentData.boundingBox;
                    if (!N)
                        return !1;
                    var Q = H.props,
                        R = Q.appearAnimation,
                        S = Q.enterAnimation,
                        T = Q.leaveAnimation,
                        _U = Q.getPosition,
                        V = L.appearing && R,
                        W = L.entering && S,
                        X = L.leaving && T;
                    if (V || W || X)
                        return !0;
                    var Y = z({
                            childDomNode: N,
                            childBoundingBox: O,
                            parentBoundingBox: P,
                            getPosition: _U
                        }),
                        Z = Y[0],
                        $ = Y[1];
                    return 0 !== Z || 0 !== $;
                }, y(H, G);
            }
            return x(b, E), b.prototype.componentDidMount = function() {
                null === this.props.typeName && this.findDOMContainer(), this.props.appearAnimation && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, b.prototype.componentDidUpdate = function(F) {
                null === this.props.typeName && this.findDOMContainer(), ! function(G, H) {
                    if (G === H)
                        return !0;
                    var I = !q(G) || !q(H),
                        J = G.length !== H.length;
                    return !I && !J && function(K, L) {
                        for (var M = 0; M < L.length; M++)
                            if (!K(L[M], M, L))
                                return !1;
                        return !0;
                    }(function(K, L) {
                        return K === H[L];
                    }, G);
                }(H(this.props.children).map(function(G) {
                    return G.key;
                }), H(F.children).map(function(G) {
                    return G.key;
                })) && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, b.prototype.calculateNextSetOfChildren = function(F) {
                var G = this,
                    H = F.map(function(I) {
                        var J = G.findChildByKey(I.key),
                            K = !J || J.leaving;
                        return w({}, I, {
                            element: I,
                            entering: K
                        });
                    }),
                    I = 0;
                return this.state.children.forEach(function(J, K) {
                    if (!p(function(L) {
                            return L.key === F(J);
                        }, F) && G.props.leaveAnimation) {
                        var L = w({}, J, {
                                leaving: !0
                            }),
                            M = K + I;
                        H.splice(M, 0, L), I += 1;
                    }
                }), H;
            }, b.prototype.prepForAnimation = function() {
                var F = this,
                    G = this.props,
                    H = G.leaveAnimation,
                    I = G.maintainContainerHeight,
                    J = G.getPosition;
                H && (this.state.children.filter(function(K) {
                    return K.leaving;
                }).forEach(function(K) {
                    var L = F.getChildData(F(K));
                    !F.isAnimationDisabled(F.props) && L.domNode && L.domNode.disabled && k(), L.boundingBox && function(M, N) {
                        var O = M.domNode,
                            P = M.boundingBox;
                        if (O && P) {
                            var Q = window.getComputedStyle(O),
                                R = [
                                    'margin-top',
                                    'margin-left',
                                    'margin-right'
                                ].reduce(function(S, T) {
                                    var U, V = Q.getPropertyValue(T);
                                    return w({}, S, ((U = {})[T] = Number(V.replace('px', '')), U));
                                }, {});
                            x({
                                domNode: O,
                                styles: {
                                    position: 'absolute',
                                    top: ('bottom' === N ? P.top - P.height : P.top) - R['margin-top'] + 'px',
                                    left: P.left - R['margin-left'] + 'px',
                                    right: P.right - R['margin-right'] + 'px'
                                }
                            });
                        }
                    }(L, F.props.verticalAlignment);
                }), I && this.heightPlaceholderData.domNode && function(K) {
                    var L = K.domNode,
                        M = K.parentData,
                        N = K.getPosition,
                        O = M.domNode,
                        P = M.boundingBox;
                    if (O && P) {
                        x({
                            domNode: L,
                            styles: {
                                height: '0'
                            }
                        });
                        var Q = P.height - N(O).height;
                        x({
                            domNode: L,
                            styles: {
                                height: Q > 0 ? Q + 'px' : '0'
                            }
                        });
                    }
                }({
                    domNode: this.heightPlaceholderData.domNode,
                    parentData: this.parentData,
                    getPosition: J
                }));
                this.state.children.forEach(function(K) {
                    var L = F.getChildData(F(K)).domNode;
                    L && (K.entering || K.leaving || x({
                        domNode: L,
                        styles: {
                            transition: ''
                        }
                    }));
                });
            }, b.prototype.UNSAFE_componentWillReceiveProps = function(F) {
                this.updateBoundingBoxCaches();
                var G = H(F.children);
                this.setState({
                    children: this.isAnimationDisabled(F) ? G.map(function(H) {
                        return w({}, H, {
                            element: H
                        });
                    }) : this.calculateNextSetOfChildren(G)
                });
            }, b.prototype.animateChild = function(F, G, H) {
                var I = this,
                    J = this.getChildData(F(F)).domNode;
                J && (x({
                    domNode: J,
                    styles: H
                }), this.props.onStart && this.props.onStart(F, J), requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        var K = {
                            transition: A(G, I.props),
                            transform: '',
                            opacity: ''
                        };
                        F.appearing && I.props.appearAnimation ? K = w({}, K, I.props.appearAnimation.to) : F.entering && I.props.enterAnimation ? K = w({}, K, I.props.enterAnimation.to) : F.leaving && I.props.leaveAnimation && (K = w({}, K, I.props.leaveAnimation.to)), x({
                            domNode: J,
                            styles: K
                        });
                    });
                }), this.bindTransitionEndHandler(F));
            }, b.prototype.bindTransitionEndHandler = function(F) {
                var G = this,
                    H = this.getChildData(F(F)).domNode;
                if (H) {
                    H.addEventListener(B, function c(I) {
                        I.target === H && (H.style.transition = '', G.triggerFinishHooks(F, H), H.removeEventListener(B, c), F.leaving && G.removeChildData(F(F)));
                    });
                }
            }, b.prototype.triggerFinishHooks = function(F, G) {
                var H = this;
                if (this.props.onFinish && this.props.onFinish(F, G), this.remainingAnimations -= 1, 0 === this.remainingAnimations) {
                    var I = this.state.children.filter(function(J) {
                        return !J.leaving;
                    }).map(function(J) {
                        return w({}, J, {
                            element: J.element,
                            appearing: !1,
                            entering: !1
                        });
                    });
                    this.setState({
                        children: I
                    }, function() {
                        'function' == typeof H.props.onFinishAll && H.callChildrenHook(H.props.onFinishAll), H.childrenToAnimate = [];
                    }), this.heightPlaceholderData.domNode && (this.heightPlaceholderData.domNode.style.height = '0');
                }
            }, b.prototype.callChildrenHook = function(F) {
                var G = this,
                    H = [],
                    I = [];
                this.childrenToAnimate.forEach(function(J) {
                    var K = G.findChildByKey(J);
                    K && (H.push(K), G.hasChildData(J) && I.push(G.getChildData(J).domNode));
                }), F(H, I);
            }, b.prototype.updateBoundingBoxCaches = function() {
                var F = this,
                    G = this.parentData.domNode;
                if (G) {
                    this.parentData.boundingBox = this.props.getPosition(G);
                    var H = [];
                    this.state.children.forEach(function(I) {
                        var J = F(I);
                        if (J)
                            if (F.hasChildData(J)) {
                                var K = F.getChildData(J);
                                K.domNode && I ? H.push(function(L) {
                                    var M = L.childDomNode,
                                        N = L.parentDomNode,
                                        O = L.getPosition,
                                        P = O(N),
                                        Q = O(M),
                                        R = Q.top,
                                        S = Q.left,
                                        T = Q.right,
                                        U = Q.bottom,
                                        V = Q.width,
                                        W = Q.height;
                                    return {
                                        top: R - P.top,
                                        left: S - P.left,
                                        right: P.right - T,
                                        bottom: P.bottom - U,
                                        width: V,
                                        height: W
                                    };
                                }({
                                    childDomNode: K.domNode,
                                    parentDomNode: G,
                                    getPosition: F.props.getPosition
                                })) : H.push(null);
                            } else
                                H.push(null);
                        else
                            H.push(null);
                    }), this.state.children.forEach(function(I, J) {
                        var K = F(I),
                            L = H[J];
                        K && F.setChildData(K, {
                            boundingBox: L
                        });
                    });
                }
            }, b.prototype.computeInitialStyles = function(F) {
                if (F.appearing)
                    return this.props.appearAnimation ? this.props.appearAnimation.from : {};
                if (F.entering)
                    return this.props.enterAnimation ? w({
                        position: '',
                        top: '',
                        left: '',
                        right: '',
                        bottom: ''
                    }, this.props.enterAnimation.from) : {};
                if (F.leaving)
                    return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
                var G = this.getChildData(F(F)),
                    H = G.domNode,
                    I = G.boundingBox,
                    J = this.parentData.boundingBox;
                if (!H)
                    return {};
                var K = z({
                    childDomNode: H,
                    childBoundingBox: I,
                    parentBoundingBox: J,
                    getPosition: this.props.getPosition
                });
                return {
                    transform: 'translate(' + K[0] + 'px, ' + K[1] + 'px)'
                };
            }, b.prototype.isAnimationDisabled = function(F) {
                return C || F.disableAllAnimations || 0 === F.duration && 0 === F.delay && 0 === F.staggerDurationBy && 0 === F.staggerDelayBy;
            }, b.prototype.findChildByKey = function(F) {
                return p(function(G) {
                    return F(G) === F;
                }, this.state.children);
            }, b.prototype.hasChildData = function(F) {
                return Object.prototype.hasOwnProperty.call(this.childrenData, F);
            }, b.prototype.getChildData = function(F) {
                return this.hasChildData(F) ? this.childrenData[F] : {};
            }, b.prototype.setChildData = function(F, G) {
                this.childrenData[F] = w({}, this.getChildData(F), G);
            }, b.prototype.removeChildData = function(F) {
                delete this.childrenData[F], this.setState(function(G) {
                    return w({}, G, {
                        children: G.children.filter(function(H) {
                            return H.element.key !== F;
                        })
                    });
                });
            }, b.prototype.createHeightPlaceholder = function() {
                var F = this,
                    G = this.props.typeName,
                    H = 'ul' === G || 'ol' === G ? 'li' : 'div';
                return (0, h.createElement)(H, {
                    key: 'height-placeholder',
                    ref: function(I) {
                        F.heightPlaceholderData.domNode = I;
                    },
                    style: {
                        visibility: 'hidden',
                        height: 0
                    }
                });
            }, b.prototype.childrenWithRefs = function() {
                var F = this;
                return this.state.children.map(function(G) {
                    return (0, h.cloneElement)(G.element, {
                        ref: function(H) {
                            if (H) {
                                var I = function(J) {
                                    if ('undefined' == typeof HTMLElement)
                                        return null;
                                    if (J instanceof HTMLElement)
                                        return J;
                                    var K = (0, i.findDOMNode)(J);
                                    return K && K.nodeType === Node.TEXT_NODE ? null : K;
                                }(H);
                                F.setChildData(F(G), {
                                    domNode: I
                                });
                            }
                        }
                    });
                });
            }, b.prototype.render = function() {
                var F = this,
                    G = this.props,
                    H = G.typeName,
                    I = G.delegated,
                    J = G.leaveAnimation,
                    K = G.maintainContainerHeight,
                    L = this.childrenWithRefs();
                if (J && K && L.push(this.createHeightPlaceholder()), !H)
                    return L;
                var M = w({}, I, {
                    children: L,
                    ref: function(N) {
                        F.parentData.domNode = N;
                    }
                });
                return (0, h.createElement)(H, M);
            }, b;
        }(h.Component),
        _E = w(D);
});