function a(b) {
    return b && b.__esModule ? b.default : b;
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('hQxzs', function(c, d) {
    var e, f, g, h;
    e = c.exports, f = 'default', g = function() {
        return _K;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = b('O0Kav'),
        j = b('kZLBJ');

    function k(l) {
        var m = !1;
        return function() {
            m || (console.warn(l), m = !0);
        };
    }
    k('\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren\'t supported, because Flip Move needs access to the backing instances via refs, and SFCs don\'t have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n'), k('\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n');
    var l = k('\n>> Warning, via react-flip-move <<\n\nWhen using "wrapperless" mode (by supplying \'typeName\' of \'null\'), strange things happen when the direct parent has the default "static" position.\n\nFlipMove has added \'position: relative\' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n'),
        m = k('\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move\'s child elements have the html attribute \'disabled\' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set \'animation\' to false.\n'),
        n = {
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
        o = {
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
        p = n,
        q = 'elevator',
        r = function(s, t) {
            for (var u = 0; u < t.length; u++)
                if (s(t[u], u, t))
                    return t[u];
        },
        s = function(t) {
            return (s = Array.isArray || function(u) {
                return '[object Array]' === Object.prototype.toString.call(u);
            })(t);
        };
    var t, u, v = (t = function(w) {
            return w.replace(/([A-Z])/g, '-$1').toLowerCase();
        }, u = {}, function(w) {
            return u[w] || (u[w] = t(w)), u[w];
        }),
        w = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(x) {
            return typeof x;
        } : function(x) {
            return x && 'function' == typeof Symbol && x.constructor === Symbol && x !== Symbol.prototype ? 'symbol' : typeof x;
        },
        x = function(y, z) {
            if (!(y instanceof z))
                throw new TypeError('Cannot call a class as a function');
        },
        y = Object.assign || function(z) {
            for (var A = 1; A < arguments.length; A++) {
                var B = arguments[A];
                for (var C in B)
                    Object.prototype.hasOwnProperty.call(B, C) && (z[C] = B[C]);
            }
            return z;
        },
        z = function(A, B) {
            if ('function' != typeof B && null !== B)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof B);
            A.prototype = Object.create(B && B.prototype, {
                constructor: {
                    value: A,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), B && (Object.setPrototypeOf ? Object.setPrototypeOf(A, B) : A.__proto__ = B);
        },
        A = function(B, C) {
            if (!B)
                throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return !C || 'object' != typeof C && 'function' != typeof C ? B : C;
        };

    function B(C) {
        var D, E;
        return E = D = function(F) {
            function G() {
                return x(this, G), A(this, F.apply(this, arguments));
            }
            return z(G, F), G.prototype.checkChildren = function(H) {}, G.prototype.convertProps = function(H) {
                var I = {
                    children: H.children,
                    easing: H.easing,
                    onStart: H.onStart,
                    onFinish: H.onFinish,
                    onStartAll: H.onStartAll,
                    onFinishAll: H.onFinishAll,
                    typeName: H.typeName,
                    disableAllAnimations: H.disableAllAnimations,
                    getPosition: H.getPosition,
                    maintainContainerHeight: H.maintainContainerHeight,
                    verticalAlignment: H.verticalAlignment,
                    duration: this.convertTimingProp('duration'),
                    delay: this.convertTimingProp('delay'),
                    staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
                    staggerDelayBy: this.convertTimingProp('staggerDelayBy'),
                    appearAnimation: this.convertAnimationProp(H.appearAnimation, p),
                    enterAnimation: this.convertAnimationProp(H.enterAnimation, n),
                    leaveAnimation: this.convertAnimationProp(H.leaveAnimation, o),
                    delegated: {}
                };
                this.checkChildren(I.children);
                var J = Object.keys(I),
                    K = function(L) {
                        var M = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            N = {};
                        return Object.keys(L).forEach(function(O) {
                            -1 === M.indexOf(O) && (N[O] = L[O]);
                        }), N;
                    }(this.props, J);
                return K.style = y({
                    position: 'relative'
                }, K.style), I.delegated = K, I;
            }, G.prototype.convertTimingProp = function(H) {
                var I = this.props[H],
                    J = 'number' == typeof I ? I : parseInt(I, 10);
                return isNaN(J) ? G.defaultProps[H] : J;
            }, G.prototype.convertAnimationProp = function(H, I) {
                switch (void 0 === H ? 'undefined' : w(H)) {
                    case 'boolean':
                        return I[H ? q : 'none'];
                    case 'string':
                        return -1 === Object.keys(I).indexOf(H) ? I[q] : I[H];
                    default:
                        return H;
                }
            }, G.prototype.render = function() {
                return a(i).createElement(C, this.convertProps(this.props));
            }, G;
        }(i.Component), D.defaultProps = {
            easing: 'ease-in-out',
            duration: 350,
            delay: 0,
            staggerDurationBy: 0,
            staggerDelayBy: 0,
            typeName: 'div',
            enterAnimation: q,
            leaveAnimation: q,
            disableAllAnimations: !1,
            getPosition: function(F) {
                return F.getBoundingClientRect();
            },
            maintainContainerHeight: !1,
            verticalAlignment: 'top'
        }, E;
    }

    function C(D) {
        var E = D.domNode,
            F = D.styles;
        Object.keys(F).forEach(function(G) {
            E.style.setProperty(v(G), F[G]);
        });
    }
    var D = function(E) {
            var F = E.childDomNode,
                G = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 0,
                    width: 0
                },
                H = E.childBoundingBox || G,
                I = E.parentBoundingBox || G,
                J = (0, E.getPosition)(F),
                K = J.top - I.top,
                L = J.left - I.left;
            return [
                H.left - L,
                H.top - K
            ];
        },
        E = function(F, G) {
            var H = G.delay,
                I = G.duration,
                J = G.staggerDurationBy,
                K = G.staggerDelayBy,
                L = G.easing;
            H += F * K, I += F * J;
            return [
                'transform',
                'opacity'
            ].map(function(M) {
                return M + ' ' + I + 'ms ' + L + ' ' + H + 'ms';
            }).join(', ');
        },
        F = function() {
            var G = {
                transition: 'transitionend',
                '-o-transition': 'oTransitionEnd',
                '-moz-transition': 'transitionend',
                '-webkit-transition': 'webkitTransitionEnd'
            };
            if ('undefined' == typeof document)
                return '';
            var H = document.createElement('fakeelement'),
                I = r(function(J) {
                    return void 0 !== H.style.getPropertyValue(J);
                }, Object.keys(G));
            return I ? G[I] : '';
        }(),
        G = !F;

    function H(I) {
        return I.key || '';
    }

    function I(J) {
        return i.Children.toArray(J);
    }
    var J = function(K) {
            function L() {
                var M, N;
                x(this, L);
                for (var O = arguments.length, P = Array(O), Q = 0; Q < O; Q++)
                    P[Q] = arguments[Q];
                return M = N = A(this, K.call.apply(K, [this].concat(P))), N.state = {
                    children: I(N.props ? N.props.children : []).map(function(R) {
                        return y({}, R, {
                            element: R,
                            appearing: !0
                        });
                    })
                }, N.childrenData = {}, N.parentData = {
                    domNode: null,
                    boundingBox: null
                }, N.heightPlaceholderData = {
                    domNode: null
                }, N.remainingAnimations = 0, N.childrenToAnimate = [], N.findDOMContainer = function() {
                    var R = a(j).findDOMNode(N),
                        S = R && R.parentNode;
                    S && S instanceof HTMLElement && ('static' === window.getComputedStyle(S).position && (S.style.position = 'relative', l()), N.parentData.domNode = S);
                }, N.runAnimation = function() {
                    var R = N.state.children.filter(N.doesChildNeedToBeAnimated),
                        S = R.map(function(T) {
                            return N.computeInitialStyles(T);
                        });
                    R.forEach(function(T, U) {
                        N.remainingAnimations += 1, N.childrenToAnimate.push(H(T)), N.animateChild(T, U, S[U]);
                    }), 'function' == typeof N.props.onStartAll && N.callChildrenHook(N.props.onStartAll);
                }, N.doesChildNeedToBeAnimated = function(R) {
                    if (!H(R))
                        return !1;
                    var S = N.getChildData(H(R)),
                        T = S.domNode,
                        U = S.boundingBox,
                        V = N.parentData.boundingBox;
                    if (!T)
                        return !1;
                    var W = N.props,
                        X = W.appearAnimation,
                        Y = W.enterAnimation,
                        Z = W.leaveAnimation,
                        $ = W.getPosition,
                        ab = R.appearing && X,
                        bb = R.entering && Y,
                        cb = R.leaving && Z;
                    if (ab || bb || cb)
                        return !0;
                    var db = D({
                            childDomNode: T,
                            childBoundingBox: U,
                            parentBoundingBox: V,
                            getPosition: $
                        }),
                        eb = db[0],
                        fb = db[1];
                    return 0 !== eb || 0 !== fb;
                }, A(N, M);
            }
            return z(L, K), L.prototype.componentDidMount = function() {
                null === this.props.typeName && this.findDOMContainer(), this.props.appearAnimation && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, L.prototype.componentDidUpdate = function(M) {
                null === this.props.typeName && this.findDOMContainer(), ! function(N, O) {
                    if (N === O)
                        return !0;
                    var P = !s(N) || !s(O),
                        Q = N.length !== O.length;
                    return !P && !Q && function(R, S) {
                        for (var T = 0; T < S.length; T++)
                            if (!R(S[T], T, S))
                                return !1;
                        return !0;
                    }(function(R, S) {
                        return R === O[S];
                    }, N);
                }(I(this.props.children).map(function(N) {
                    return N.key;
                }), I(M.children).map(function(N) {
                    return N.key;
                })) && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation());
            }, L.prototype.calculateNextSetOfChildren = function(M) {
                var N = this,
                    O = M.map(function(P) {
                        var Q = N.findChildByKey(P.key),
                            R = !Q || Q.leaving;
                        return y({}, P, {
                            element: P,
                            entering: R
                        });
                    }),
                    P = 0;
                return this.state.children.forEach(function(Q, R) {
                    if (!r(function(S) {
                            return S.key === H(Q);
                        }, M) && N.props.leaveAnimation) {
                        var S = y({}, Q, {
                                leaving: !0
                            }),
                            T = R + P;
                        O.splice(T, 0, S), P += 1;
                    }
                }), O;
            }, L.prototype.prepForAnimation = function() {
                var M = this,
                    N = this.props,
                    O = N.leaveAnimation,
                    P = N.maintainContainerHeight,
                    Q = N.getPosition;
                O && (this.state.children.filter(function(R) {
                    return R.leaving;
                }).forEach(function(R) {
                    var S = M.getChildData(H(R));
                    !M.isAnimationDisabled(M.props) && S.domNode && S.domNode.disabled && m(), S.boundingBox && function(T, U) {
                        var V = T.domNode,
                            W = T.boundingBox;
                        if (V && W) {
                            var X = window.getComputedStyle(V),
                                Y = [
                                    'margin-top',
                                    'margin-left',
                                    'margin-right'
                                ].reduce(function(Z, $) {
                                    var ab, bb = X.getPropertyValue($);
                                    return y({}, Z, ((ab = {})[$] = Number(bb.replace('px', '')), ab));
                                }, {});
                            C({
                                domNode: V,
                                styles: {
                                    position: 'absolute',
                                    top: ('bottom' === U ? W.top - W.height : W.top) - Y['margin-top'] + 'px',
                                    left: W.left - Y['margin-left'] + 'px',
                                    right: W.right - Y['margin-right'] + 'px'
                                }
                            });
                        }
                    }(S, M.props.verticalAlignment);
                }), P && this.heightPlaceholderData.domNode && function(R) {
                    var S = R.domNode,
                        T = R.parentData,
                        U = R.getPosition,
                        V = T.domNode,
                        W = T.boundingBox;
                    if (V && W) {
                        C({
                            domNode: S,
                            styles: {
                                height: '0'
                            }
                        });
                        var X = W.height - U(V).height;
                        C({
                            domNode: S,
                            styles: {
                                height: X > 0 ? X + 'px' : '0'
                            }
                        });
                    }
                }({
                    domNode: this.heightPlaceholderData.domNode,
                    parentData: this.parentData,
                    getPosition: Q
                }));
                this.state.children.forEach(function(R) {
                    var S = M.getChildData(H(R)).domNode;
                    S && (R.entering || R.leaving || C({
                        domNode: S,
                        styles: {
                            transition: ''
                        }
                    }));
                });
            }, L.prototype.UNSAFE_componentWillReceiveProps = function(M) {
                this.updateBoundingBoxCaches();
                var N = I(M.children);
                this.setState({
                    children: this.isAnimationDisabled(M) ? N.map(function(O) {
                        return y({}, O, {
                            element: O
                        });
                    }) : this.calculateNextSetOfChildren(N)
                });
            }, L.prototype.animateChild = function(M, N, O) {
                var P = this,
                    Q = this.getChildData(H(M)).domNode;
                Q && (C({
                    domNode: Q,
                    styles: O
                }), this.props.onStart && this.props.onStart(M, Q), requestAnimationFrame(function() {
                    requestAnimationFrame(function() {
                        var R = {
                            transition: E(N, P.props),
                            transform: '',
                            opacity: ''
                        };
                        M.appearing && P.props.appearAnimation ? R = y({}, R, P.props.appearAnimation.to) : M.entering && P.props.enterAnimation ? R = y({}, R, P.props.enterAnimation.to) : M.leaving && P.props.leaveAnimation && (R = y({}, R, P.props.leaveAnimation.to)), C({
                            domNode: Q,
                            styles: R
                        });
                    });
                }), this.bindTransitionEndHandler(M));
            }, L.prototype.bindTransitionEndHandler = function(M) {
                var N = this,
                    O = this.getChildData(H(M)).domNode;
                if (O) {
                    O.addEventListener(F, function d(P) {
                        P.target === O && (O.style.transition = '', N.triggerFinishHooks(M, O), O.removeEventListener(F, d), M.leaving && N.removeChildData(H(M)));
                    });
                }
            }, L.prototype.triggerFinishHooks = function(M, N) {
                var O = this;
                if (this.props.onFinish && this.props.onFinish(M, N), this.remainingAnimations -= 1, 0 === this.remainingAnimations) {
                    var P = this.state.children.filter(function(Q) {
                        return !Q.leaving;
                    }).map(function(Q) {
                        return y({}, Q, {
                            element: Q.element,
                            appearing: !1,
                            entering: !1
                        });
                    });
                    this.setState({
                        children: P
                    }, function() {
                        'function' == typeof O.props.onFinishAll && O.callChildrenHook(O.props.onFinishAll), O.childrenToAnimate = [];
                    }), this.heightPlaceholderData.domNode && (this.heightPlaceholderData.domNode.style.height = '0');
                }
            }, L.prototype.callChildrenHook = function(M) {
                var N = this,
                    O = [],
                    P = [];
                this.childrenToAnimate.forEach(function(Q) {
                    var R = N.findChildByKey(Q);
                    R && (O.push(R), N.hasChildData(Q) && P.push(N.getChildData(Q).domNode));
                }), M(O, P);
            }, L.prototype.updateBoundingBoxCaches = function() {
                var M = this,
                    N = this.parentData.domNode;
                if (N) {
                    this.parentData.boundingBox = this.props.getPosition(N);
                    var O = [];
                    this.state.children.forEach(function(P) {
                        var Q = H(P);
                        if (Q)
                            if (M.hasChildData(Q)) {
                                var R = M.getChildData(Q);
                                R.domNode && P ? O.push(function(S) {
                                    var T = S.childDomNode,
                                        U = S.parentDomNode,
                                        V = S.getPosition,
                                        W = V(U),
                                        X = V(T),
                                        Y = X.top,
                                        Z = X.left,
                                        $ = X.right,
                                        ab = X.bottom,
                                        bb = X.width,
                                        cb = X.height;
                                    return {
                                        top: Y - W.top,
                                        left: Z - W.left,
                                        right: W.right - $,
                                        bottom: W.bottom - ab,
                                        width: bb,
                                        height: cb
                                    };
                                }({
                                    childDomNode: R.domNode,
                                    parentDomNode: N,
                                    getPosition: M.props.getPosition
                                })) : O.push(null);
                            } else
                                O.push(null);
                        else
                            O.push(null);
                    }), this.state.children.forEach(function(P, Q) {
                        var R = H(P),
                            S = O[Q];
                        R && M.setChildData(R, {
                            boundingBox: S
                        });
                    });
                }
            }, L.prototype.computeInitialStyles = function(M) {
                if (M.appearing)
                    return this.props.appearAnimation ? this.props.appearAnimation.from : {};
                if (M.entering)
                    return this.props.enterAnimation ? y({
                        position: '',
                        top: '',
                        left: '',
                        right: '',
                        bottom: ''
                    }, this.props.enterAnimation.from) : {};
                if (M.leaving)
                    return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
                var N = this.getChildData(H(M)),
                    O = N.domNode,
                    P = N.boundingBox,
                    Q = this.parentData.boundingBox;
                if (!O)
                    return {};
                var R = D({
                    childDomNode: O,
                    childBoundingBox: P,
                    parentBoundingBox: Q,
                    getPosition: this.props.getPosition
                });
                return {
                    transform: 'translate(' + R[0] + 'px, ' + R[1] + 'px)'
                };
            }, L.prototype.isAnimationDisabled = function(M) {
                return G || M.disableAllAnimations || 0 === M.duration && 0 === M.delay && 0 === M.staggerDurationBy && 0 === M.staggerDelayBy;
            }, L.prototype.findChildByKey = function(M) {
                return r(function(N) {
                    return H(N) === M;
                }, this.state.children);
            }, L.prototype.hasChildData = function(M) {
                return Object.prototype.hasOwnProperty.call(this.childrenData, M);
            }, L.prototype.getChildData = function(M) {
                return this.hasChildData(M) ? this.childrenData[M] : {};
            }, L.prototype.setChildData = function(M, N) {
                this.childrenData[M] = y({}, this.getChildData(M), N);
            }, L.prototype.removeChildData = function(M) {
                delete this.childrenData[M], this.setState(function(N) {
                    return y({}, N, {
                        children: N.children.filter(function(O) {
                            return O.element.key !== M;
                        })
                    });
                });
            }, L.prototype.createHeightPlaceholder = function() {
                var M = this,
                    N = this.props.typeName,
                    O = 'ul' === N || 'ol' === N ? 'li' : 'div';
                return (0, i.createElement)(O, {
                    key: 'height-placeholder',
                    ref: function(P) {
                        M.heightPlaceholderData.domNode = P;
                    },
                    style: {
                        visibility: 'hidden',
                        height: 0
                    }
                });
            }, L.prototype.childrenWithRefs = function() {
                var M = this;
                return this.state.children.map(function(N) {
                    return (0, i.cloneElement)(N.element, {
                        ref: function(O) {
                            if (O) {
                                var P = function(Q) {
                                    if ('undefined' == typeof HTMLElement)
                                        return null;
                                    if (Q instanceof HTMLElement)
                                        return Q;
                                    var R = (0, j.findDOMNode)(Q);
                                    return R && R.nodeType === Node.TEXT_NODE ? null : R;
                                }(O);
                                M.setChildData(H(N), {
                                    domNode: P
                                });
                            }
                        }
                    });
                });
            }, L.prototype.render = function() {
                var M = this,
                    N = this.props,
                    O = N.typeName,
                    P = N.delegated,
                    Q = N.leaveAnimation,
                    R = N.maintainContainerHeight,
                    S = this.childrenWithRefs();
                if (Q && R && S.push(this.createHeightPlaceholder()), !O)
                    return S;
                var T = y({}, P, {
                    children: S,
                    ref: function(U) {
                        M.parentData.domNode = U;
                    }
                });
                return (0, i.createElement)(O, T);
            }, L;
        }(i.Component),
        _K = B(J);
});