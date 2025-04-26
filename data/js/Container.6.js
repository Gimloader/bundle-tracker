function a(a) {
    return a && a.__esModule ? a.default : a;
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('cBb/w', function(r, A) {
    var c, d, e, f;
    c = r.exports, d = 'default', e = function() {
        return J;
    }, Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
    var g = b('uPP4W'),
        h = b('nLioi');

    function i(a) {
        var j = !1;
        return function() {
            j || (console.warn(a), j = !0);
        };
    }
    i('\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren\'t supported, because Flip Move needs access to the backing instances via refs, and SFCs don\'t have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n'), i('\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n');
    var j = i('\n>> Warning, via react-flip-move <<\n\nWhen using "wrapperless" mode (by supplying \'typeName\' of \'null\'), strange things happen when the direct parent has the default "static" position.\n\nFlipMove has added \'position: relative\' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n'),
        k = i('\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move\'s child elements have the html attribute \'disabled\' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set \'animation\' to false.\n'),
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
        n = o,
        p = 'elevator',
        q = function(a, b) {
            for (var r = 0; r < b.length; r++)
                if (a(b[r], r, b))
                    return b[r];
        },
        r = function(a) {
            return (r = Array.isArray || function(a) {
                return '[object Array]' === Object.prototype.toString.call(a);
            })(a);
        };
    var s, t, u = (s = function(a) {
            return a.replace(/([A-Z])/g, '-$1').toLowerCase();
        }, t = {}, function(a) {
            return t[a] || (t[a] = s(a)), t[a];
        }),
        v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        },
        w = function(a, b) {
            if (!(a instanceof b))
                throw new TypeError('Cannot call a class as a function');
        },
        x = Object.assign || function(a) {
            for (var y = 1; y < arguments.length; y++) {
                var z = arguments[y];
                for (var A in z)
                    Object.prototype.hasOwnProperty.call(z, A) && (a[A] = z[A]);
            }
            return a;
        },
        y = function(a, b) {
            if ('function' != typeof b && null !== b)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
        },
        z = function(a, b) {
            if (!a)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return !b || 'object' != typeof b && 'function' != typeof b ? a : b;
        };

    function A(b) {
        var B, C;
        return C = B = function(B) {
            function D() {
                return w(this, D), z(this, B.apply(this, arguments));
            }
            return y(D, B), D.prototype.checkChildren = function(a) {}, D.prototype.convertProps = function(a) {
                var E = {
                    children: a.children,
                    easing: a.easing,
                    onStart: a.onStart,
                    onFinish: a.onFinish,
                    onStartAll: a.onStartAll,
                    onFinishAll: a.onFinishAll,
                    typeName: a.typeName,
                    disableAllAnimations: a.disableAllAnimations,
                    getPosition: a.getPosition,
                    maintainContainerHeight: a.maintainContainerHeight,
                    verticalAlignment: a.verticalAlignment,
                    duration: this.convertTimingProp('duration'),
                    delay: this.convertTimingProp('delay'),
                    staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
                    staggerDelayBy: this.convertTimingProp('staggerDelayBy'),
                    appearAnimation: this.convertAnimationProp(a.appearAnimation, n),
                    enterAnimation: this.convertAnimationProp(a.enterAnimation, o),
                    leaveAnimation: this.convertAnimationProp(a.leaveAnimation, m),
                    delegated: {}
                };
                this.checkChildren(E.children);
                var F = Object.keys(E),
                    G = function(a) {
                        var H = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            I = {};
                        return Object.keys(a).forEach(function(G) {
                            -1 === H.indexOf(G) && (I[G] = a[G]);
                        }), I;
                    }(this.props, F);
                return G.style = x({
                    position: 'relative'
                }, G.style), E.delegated = G, E;
            }, D.prototype.convertTimingProp = function(a) {
                var E = this.props[a],
                    F = 'number' == typeof E ? E : parseInt(E, 10);
                return isNaN(F) ? D.defaultProps[a] : F;
            }, D.prototype.convertAnimationProp = function(a, b) {
                switch (void 0 === a ? 'undefined' : v(a)) {
                    case 'boolean':
                        return b[a ? p : 'none'];
                    case 'string':
                        return -1 === Object.keys(b).indexOf(a) ? b[p] : b[a];
                    default:
                        return a;
                }
            }, D.prototype.render = function() {
                return a(g).createElement(b, this.convertProps(this.props));
            }, D;
        }(g.Component), B.defaultProps = {
            easing: 'ease-in-out',
            duration: 350,
            delay: 0,
            staggerDurationBy: 0,
            staggerDelayBy: 0,
            typeName: 'div',
            enterAnimation: p,
            leaveAnimation: p,
            disableAllAnimations: !1,
            getPosition: function(a) {
                return a.getBoundingClientRect();
            },
            maintainContainerHeight: !1,
            verticalAlignment: 'top'
        }, C;
    }

    function B(a) {
        var C = a.domNode,
            D = a.styles;
        Object.keys(D).forEach(function(a) {
            C.style.setProperty(u(a), D[a]);
        });
    }
    var C = function(a) {
            var D = a.childDomNode,
                E = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 0,
                    width: 0
                },
                F = a.childBoundingBox || E,
                G = a.parentBoundingBox || E,
                H = (0, a.getPosition)(D),
                I = H.top - G.top,
                J = H.left - G.left;
            return [
                F.left - J,
                F.top - I
            ];
        },
        D = function(a, b) {
            var E = b.delay,
                F = b.duration,
                G = b.staggerDurationBy,
                H = b.staggerDelayBy,
                I = b.easing;
            E += a * H, F += a * G;
            return [
                'transform',
                'opacity'
            ].map(function(a) {
                return a + ' ' + F + 'ms ' + I + ' ' + E + 'ms';
            }).join(', ');
        },
        E = function() {
            var F = {
                transition: 'transitionend',
                '-o-transition': 'oTransitionEnd',
                '-moz-transition': 'transitionend',
                '-webkit-transition': 'webkitTransitionEnd'
            };
            if ('undefined' == typeof document)
                return '';
            var G = document.createElement('fakeelement'),
                H = q(function(F) {
                    return void 0 !== G.style.getPropertyValue(F);
                }, Object.keys(F));
            return H ? F[H] : '';
        }(),
        F = !E;

    function G(a) {
        return a.key || '';
    }

    function H(a) {
        return g.Children.toArray(a);
    }
    var I = function(b) {
            function J() {
                var K, L;
                w(this, J);
                for (var M = arguments.length, N = Array(M), O = 0; O < M; O++)
                    N[O] = arguments[O];
                return K = L = z(this, b.call.apply(b, [this].concat(N))), L.state = {
                    children: H(L.props ? L.props.children : []).map(function(a) {
                        return x({}, a, {
                            element: a,
                            appearing: !0
                        });
                    })
                }, L.childrenData = {}, L.parentData = {
                    domNode: null,
                    boundingBox: null
                }, L.heightPlaceholderData = {
                    domNode: null
                }, L.remainingAnimations = 0, L.childrenToAnimate = [], L.findDOMContainer = function() {
                    var P = a(h).findDOMNode(L),
                        Q = P && P.parentNode;
                    Q && Q instanceof HTMLElement && ('static' === window.getComputedStyle(Q).position && (Q.style.position = 'relative', j()), L.parentData.domNode = Q);
                }, L.runAnimation = function() {
                    var P = L.state.children.filter(L.doesChildNeedToBeAnimated),
                        Q = P.map(function(P) {
                            return L.computeInitialStyles(P);
                        });
                    P.forEach(function(P, J) {
                        L.remainingAnimations += 1, L.childrenToAnimate.push(G(P)), L.animateChild(P, J, Q[J]);
                    }), 'function' == typeof L.props.onStartAll && L.callChildrenHook(L.props.onStartAll);
                }, L.doesChildNeedToBeAnimated = function(a) {
                    if (!G(a))
                        return !1;
                    var P = L.getChildData(G(a)),
                        Q = P.domNode,
                        R = P.boundingBox,
                        S = L.parentData.boundingBox;
                    if (!Q)
                        return !1;
                    var T = L.props,
                        U = T.appearAnimation,
                        V = T.enterAnimation,
                        W = T.leaveAnimation,
                        X = T.getPosition,
                        Y = a.appearing && U,
                        Z = a.entering && V,
                        $ = a.leaving && W;
                    if (Y || Z || $)
                        return !0;
                    var _ = C({
                            childDomNode: Q,
                            childBoundingBox: R,
                            parentBoundingBox: S,
                            getPosition: X
                        }),
                        ab = _[0],
                        bb = _[1];
                    return 0 !== ab || 0 !== bb;
                }, z(L, K);
            }
            return y(J, b), J.prototype.componentDidMount = function() {
                null === this.props.typeName && this.findDOMContainer(), this.props.appearAnimation && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, J.prototype.componentDidUpdate = function(a) {
                null === this.props.typeName && this.findDOMContainer(), ! function(a, b) {
                    if (a === b)
                        return !0;
                    var K = !r(a) || !r(b),
                        L = a.length !== b.length;
                    return !K && !L && function(a, b) {
                        for (var M = 0; M < b.length; M++)
                            if (!a(b[M], M, b))
                                return !1;
                        return !0;
                    }(function(a, K) {
                        return a === b[K];
                    }, a);
                }(H(this.props.children).map(function(a) {
                    return a.key;
                }), H(a.children).map(function(a) {
                    return a.key;
                })) && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, J.prototype.calculateNextSetOfChildren = function(a) {
                var K = this,
                    L = a.map(function(a) {
                        var M = K.findChildByKey(a.key),
                            N = !M || M.leaving;
                        return x({}, a, {
                            element: a,
                            entering: N
                        });
                    }),
                    M = 0;
                return this.state.children.forEach(function(c, d) {
                    if (!q(function(a) {
                            return a.key === G(c);
                        }, a) && K.props.leaveAnimation) {
                        var N = x({}, c, {
                                leaving: !0
                            }),
                            O = d + M;
                        L.splice(O, 0, N), M += 1;
                    }
                }), L;
            }, J.prototype.prepForAnimation = function() {
                var K = this,
                    L = this.props,
                    M = L.leaveAnimation,
                    N = L.maintainContainerHeight,
                    O = L.getPosition;
                M && (this.state.children.filter(function(K) {
                    return K.leaving;
                }).forEach(function(L) {
                    var P = K.getChildData(G(L));
                    !K.isAnimationDisabled(K.props) && P.domNode && P.domNode.disabled && k(), P.boundingBox && function(K, L) {
                        var Q = K.domNode,
                            R = K.boundingBox;
                        if (Q && R) {
                            var S = window.getComputedStyle(Q),
                                T = [
                                    'margin-top',
                                    'margin-left',
                                    'margin-right'
                                ].reduce(function(K, L) {
                                    var U, V = S.getPropertyValue(L);
                                    return x({}, K, ((U = {})[L] = Number(V.replace('px', '')), U));
                                }, {});
                            B({
                                domNode: Q,
                                styles: {
                                    position: 'absolute',
                                    top: ('bottom' === L ? R.top - R.height : R.top) - T['margin-top'] + 'px',
                                    left: R.left - T['margin-left'] + 'px',
                                    right: R.right - T['margin-right'] + 'px'
                                }
                            });
                        }
                    }(P, K.props.verticalAlignment);
                }), N && this.heightPlaceholderData.domNode && function(K) {
                    var P = K.domNode,
                        Q = K.parentData,
                        R = K.getPosition,
                        S = Q.domNode,
                        T = Q.boundingBox;
                    if (S && T) {
                        B({
                            domNode: P,
                            styles: {
                                height: '0'
                            }
                        });
                        var U = T.height - R(S).height;
                        B({
                            domNode: P,
                            styles: {
                                height: U > 0 ? U + 'px' : '0'
                            }
                        });
                    }
                }({
                    domNode: this.heightPlaceholderData.domNode,
                    parentData: this.parentData,
                    getPosition: O
                }));
                this.state.children.forEach(function(L) {
                    var P = K.getChildData(G(L)).domNode;
                    P && (L.entering || L.leaving || B({
                        domNode: P,
                        styles: {
                            transition: ''
                        }
                    }));
                });
            }, J.prototype.UNSAFE_componentWillReceiveProps = function(a) {
                this.updateBoundingBoxCaches();
                var K = H(a.children);
                this.setState({
                    children: this.isAnimationDisabled(a) ? K.map(function(a) {
                        return x({}, a, {
                            element: a
                        });
                    }) : this.calculateNextSetOfChildren(K)
                });
            }, J.prototype.animateChild = function(a, b, J) {
                var K = this,
                    L = this.getChildData(G(a)).domNode;
                L && (B({
                    domNode: L,
                    styles: J
                }), this.props.onStart && this.props.onStart(a, L), requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        var M = {
                            transition: D(b, K.props),
                            transform: '',
                            opacity: ''
                        };
                        a.appearing && K.props.appearAnimation ? M = x({}, M, K.props.appearAnimation.to) : a.entering && K.props.enterAnimation ? M = x({}, M, K.props.enterAnimation.to) : a.leaving && K.props.leaveAnimation && (M = x({}, M, K.props.leaveAnimation.to)), B({
                            domNode: L,
                            styles: M
                        });
                    });
                }), this.bindTransitionEndHandler(a));
            }, J.prototype.bindTransitionEndHandler = function(a) {
                var K = this,
                    L = this.getChildData(G(a)).domNode;
                if (L) {
                    L.addEventListener(E, function L(c) {
                        c.target === L && (L.style.transition = '', K.triggerFinishHooks(a, L), L.removeEventListener(E, L), a.leaving && K.removeChildData(G(a)));
                    });
                }
            }, J.prototype.triggerFinishHooks = function(a, b) {
                var K = this;
                if (this.props.onFinish && this.props.onFinish(a, b), this.remainingAnimations -= 1, 0 === this.remainingAnimations) {
                    var L = this.state.children.filter(function(a) {
                        return !a.leaving;
                    }).map(function(a) {
                        return x({}, a, {
                            element: a.element,
                            appearing: !1,
                            entering: !1
                        });
                    });
                    this.setState({
                        children: L
                    }, function() {
                        'function' == typeof K.props.onFinishAll && K.callChildrenHook(K.props.onFinishAll), K.childrenToAnimate = [];
                    }), this.heightPlaceholderData.domNode && (this.heightPlaceholderData.domNode.style.height = '0');
                }
            }, J.prototype.callChildrenHook = function(a) {
                var K = this,
                    L = [],
                    M = [];
                this.childrenToAnimate.forEach(function(a) {
                    var N = K.findChildByKey(a);
                    N && (L.push(N), K.hasChildData(a) && M.push(K.getChildData(a).domNode));
                }), a(L, M);
            }, J.prototype.updateBoundingBoxCaches = function() {
                var K = this,
                    L = this.parentData.domNode;
                if (L) {
                    this.parentData.boundingBox = this.props.getPosition(L);
                    var M = [];
                    this.state.children.forEach(function(R) {
                        var N = G(R);
                        if (N)
                            if (K.hasChildData(N)) {
                                var O = K.getChildData(N);
                                O.domNode && R ? M.push(function(K) {
                                    var P = K.childDomNode,
                                        Q = K.parentDomNode,
                                        R = K.getPosition,
                                        S = R(Q),
                                        T = R(P),
                                        U = T.top,
                                        V = T.left,
                                        W = T.right,
                                        X = T.bottom,
                                        Y = T.width,
                                        Z = T.height;
                                    return {
                                        top: U - S.top,
                                        left: V - S.left,
                                        right: S.right - W,
                                        bottom: S.bottom - X,
                                        width: Y,
                                        height: Z
                                    };
                                }({
                                    childDomNode: O.domNode,
                                    parentDomNode: L,
                                    getPosition: K.props.getPosition
                                })) : M.push(null);
                            } else
                                M.push(null);
                        else
                            M.push(null);
                    }), this.state.children.forEach(function(L, M) {
                        var N = G(L),
                            O = M[M];
                        N && K.setChildData(N, {
                            boundingBox: O
                        });
                    });
                }
            }, J.prototype.computeInitialStyles = function(a) {
                if (a.appearing)
                    return this.props.appearAnimation ? this.props.appearAnimation.from : {};
                if (a.entering)
                    return this.props.enterAnimation ? x({
                        position: '',
                        top: '',
                        left: '',
                        right: '',
                        bottom: ''
                    }, this.props.enterAnimation.from) : {};
                if (a.leaving)
                    return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
                var K = this.getChildData(G(a)),
                    L = K.domNode,
                    M = K.boundingBox,
                    N = this.parentData.boundingBox;
                if (!L)
                    return {};
                var O = C({
                    childDomNode: L,
                    childBoundingBox: M,
                    parentBoundingBox: N,
                    getPosition: this.props.getPosition
                });
                return {
                    transform: 'translate(' + O[0] + 'px, ' + O[1] + 'px)'
                };
            }, J.prototype.isAnimationDisabled = function(a) {
                return F || a.disableAllAnimations || 0 === a.duration && 0 === a.delay && 0 === a.staggerDurationBy && 0 === a.staggerDelayBy;
            }, J.prototype.findChildByKey = function(a) {
                return q(function(b) {
                    return G(b) === a;
                }, this.state.children);
            }, J.prototype.hasChildData = function(a) {
                return Object.prototype.hasOwnProperty.call(this.childrenData, a);
            }, J.prototype.getChildData = function(a) {
                return this.hasChildData(a) ? this.childrenData[a] : {};
            }, J.prototype.setChildData = function(a, b) {
                this.childrenData[a] = x({}, this.getChildData(a), b);
            }, J.prototype.removeChildData = function(a) {
                delete this.childrenData[a], this.setState(function(b) {
                    return x({}, b, {
                        children: b.children.filter(function(b) {
                            return b.element.key !== a;
                        })
                    });
                });
            }, J.prototype.createHeightPlaceholder = function() {
                var K = this,
                    L = this.props.typeName,
                    M = 'ul' === L || 'ol' === L ? 'li' : 'div';
                return (0, g.createElement)(M, {
                    key: 'height-placeholder',
                    ref: function(L) {
                        K.heightPlaceholderData.domNode = L;
                    },
                    style: {
                        visibility: 'hidden',
                        height: 0
                    }
                });
            }, J.prototype.childrenWithRefs = function() {
                var K = this;
                return this.state.children.map(function(b) {
                    return (0, g.cloneElement)(b.element, {
                        ref: function(J) {
                            if (J) {
                                var L = function(K) {
                                    if ('undefined' == typeof HTMLElement)
                                        return null;
                                    if (K instanceof HTMLElement)
                                        return K;
                                    var M = (0, h.findDOMNode)(K);
                                    return M && M.nodeType === Node.TEXT_NODE ? null : M;
                                }(J);
                                K.setChildData(G(b), {
                                    domNode: L
                                });
                            }
                        }
                    });
                });
            }, J.prototype.render = function() {
                var K = this,
                    L = this.props,
                    M = L.typeName,
                    N = L.delegated,
                    O = L.leaveAnimation,
                    P = L.maintainContainerHeight,
                    Q = this.childrenWithRefs();
                if (O && P && Q.push(this.createHeightPlaceholder()), !M)
                    return Q;
                var R = x({}, N, {
                    children: Q,
                    ref: function(L) {
                        K.parentData.domNode = L;
                    }
                });
                return (0, g.createElement)(M, R);
            }, J;
        }(g.Component),
        J = A(I);
});