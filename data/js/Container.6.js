function t(t) {
    return t && t.__esModule ? t.default : t
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("2cVVi", (function(e, i) {
    var o, r, a, s;
    o = e.exports, r = "default", a = function() {
        return j
    }, Object.defineProperty(o, r, {
        get: a,
        set: s,
        enumerable: !0,
        configurable: !0
    });
    var l = n("fywoC"),
        p = n("kK88x");

    function d(t) {
        var n = !1;
        return function() {
            n || (console.warn(t), n = !0)
        }
    }
    d("\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"), d("\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n");
    var c = d("\n>> Warning, via react-flip-move <<\n\nWhen using \"wrapperless\" mode (by supplying 'typeName' of 'null'), strange things happen when the direct parent has the default \"static\" position.\n\nFlipMove has added 'position: relative' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n"),
        h = d("\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move's child elements have the html attribute 'disabled' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set 'animation' to false.\n"),
        u = {
            elevator: {
                from: {
                    transform: "scale(0)",
                    opacity: "0"
                },
                to: {
                    transform: "",
                    opacity: ""
                }
            },
            fade: {
                from: {
                    opacity: "0"
                },
                to: {
                    opacity: ""
                }
            },
            accordionVertical: {
                from: {
                    transform: "scaleY(0)",
                    transformOrigin: "center top"
                },
                to: {
                    transform: "",
                    transformOrigin: "center top"
                }
            },
            accordionHorizontal: {
                from: {
                    transform: "scaleX(0)",
                    transformOrigin: "left center"
                },
                to: {
                    transform: "",
                    transformOrigin: "left center"
                }
            },
            none: null
        },
        f = {
            elevator: {
                from: {
                    transform: "scale(1)",
                    opacity: "1"
                },
                to: {
                    transform: "scale(0)",
                    opacity: "0"
                }
            },
            fade: {
                from: {
                    opacity: "1"
                },
                to: {
                    opacity: "0"
                }
            },
            accordionVertical: {
                from: {
                    transform: "scaleY(1)",
                    transformOrigin: "center top"
                },
                to: {
                    transform: "scaleY(0)",
                    transformOrigin: "center top"
                }
            },
            accordionHorizontal: {
                from: {
                    transform: "scaleX(1)",
                    transformOrigin: "left center"
                },
                to: {
                    transform: "scaleX(0)",
                    transformOrigin: "left center"
                }
            },
            none: null
        },
        m = u,
        g = "elevator",
        y = function(t, n) {
            for (var e = 0; e < n.length; e++)
                if (t(n[e], e, n)) return n[e]
        },
        v = function(t) {
            return (v = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            })(t)
        };
    var b, A, D = (b = function(t) {
            return t.replace(/([A-Z])/g, "-$1").toLowerCase()
        }, A = {}, function(t) {
            return A[t] || (A[t] = b(t)), A[t]
        }),
        N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        C = function(t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        },
        P = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            return t
        },
        B = function(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
        },
        O = function(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? t : n
        };

    function w(n) {
        var e, i;
        return i = e = function(e) {
            function i() {
                return C(this, i), O(this, e.apply(this, arguments))
            }
            return B(i, e), i.prototype.checkChildren = function(t) {}, i.prototype.convertProps = function(t) {
                var n = {
                    children: t.children,
                    easing: t.easing,
                    onStart: t.onStart,
                    onFinish: t.onFinish,
                    onStartAll: t.onStartAll,
                    onFinishAll: t.onFinishAll,
                    typeName: t.typeName,
                    disableAllAnimations: t.disableAllAnimations,
                    getPosition: t.getPosition,
                    maintainContainerHeight: t.maintainContainerHeight,
                    verticalAlignment: t.verticalAlignment,
                    duration: this.convertTimingProp("duration"),
                    delay: this.convertTimingProp("delay"),
                    staggerDurationBy: this.convertTimingProp("staggerDurationBy"),
                    staggerDelayBy: this.convertTimingProp("staggerDelayBy"),
                    appearAnimation: this.convertAnimationProp(t.appearAnimation, m),
                    enterAnimation: this.convertAnimationProp(t.enterAnimation, u),
                    leaveAnimation: this.convertAnimationProp(t.leaveAnimation, f),
                    delegated: {}
                };
                this.checkChildren(n.children);
                var e = Object.keys(n),
                    i = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            e = {};
                        return Object.keys(t).forEach((function(i) {
                            -1 === n.indexOf(i) && (e[i] = t[i])
                        })), e
                    }(this.props, e);
                return i.style = P({
                    position: "relative"
                }, i.style), n.delegated = i, n
            }, i.prototype.convertTimingProp = function(t) {
                var n = this.props[t],
                    e = "number" == typeof n ? n : parseInt(n, 10);
                return isNaN(e) ? i.defaultProps[t] : e
            }, i.prototype.convertAnimationProp = function(t, n) {
                switch (void 0 === t ? "undefined" : N(t)) {
                    case "boolean":
                        return n[t ? g : "none"];
                    case "string":
                        return -1 === Object.keys(n).indexOf(t) ? n[g] : n[t];
                    default:
                        return t
                }
            }, i.prototype.render = function() {
                return t(l).createElement(n, this.convertProps(this.props))
            }, i
        }(l.Component), e.defaultProps = {
            easing: "ease-in-out",
            duration: 350,
            delay: 0,
            staggerDurationBy: 0,
            staggerDelayBy: 0,
            typeName: "div",
            enterAnimation: g,
            leaveAnimation: g,
            disableAllAnimations: !1,
            getPosition: function(t) {
                return t.getBoundingClientRect()
            },
            maintainContainerHeight: !1,
            verticalAlignment: "top"
        }, i
    }

    function x(t) {
        var n = t.domNode,
            e = t.styles;
        Object.keys(e).forEach((function(t) {
            n.style.setProperty(D(t), e[t])
        }))
    }
    var E = function(t) {
            var n = t.childDomNode,
                e = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 0,
                    width: 0
                },
                i = t.childBoundingBox || e,
                o = t.parentBoundingBox || e,
                r = (0, t.getPosition)(n),
                a = r.top - o.top,
                s = r.left - o.left;
            return [i.left - s, i.top - a]
        },
        S = function(t, n) {
            var e = n.delay,
                i = n.duration,
                o = n.staggerDurationBy,
                r = n.staggerDelayBy,
                a = n.easing;
            e += t * r, i += t * o;
            return ["transform", "opacity"].map((function(t) {
                return t + " " + i + "ms " + a + " " + e + "ms"
            })).join(", ")
        },
        k = function() {
            var t = {
                transition: "transitionend",
                "-o-transition": "oTransitionEnd",
                "-moz-transition": "transitionend",
                "-webkit-transition": "webkitTransitionEnd"
            };
            if ("undefined" == typeof document) return "";
            var n = document.createElement("fakeelement"),
                e = y((function(t) {
                    return void 0 !== n.style.getPropertyValue(t)
                }), Object.keys(t));
            return e ? t[e] : ""
        }(),
        T = !k;

    function F(t) {
        return t.key || ""
    }

    function H(t) {
        return l.Children.toArray(t)
    }
    var M = function(n) {
            function e() {
                var i, o;
                C(this, e);
                for (var r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                return i = o = O(this, n.call.apply(n, [this].concat(a))), o.state = {
                    children: H(o.props ? o.props.children : []).map((function(t) {
                        return P({}, t, {
                            element: t,
                            appearing: !0
                        })
                    }))
                }, o.childrenData = {}, o.parentData = {
                    domNode: null,
                    boundingBox: null
                }, o.heightPlaceholderData = {
                    domNode: null
                }, o.remainingAnimations = 0, o.childrenToAnimate = [], o.findDOMContainer = function() {
                    var n = t(p).findDOMNode(o),
                        e = n && n.parentNode;
                    e && e instanceof HTMLElement && ("static" === window.getComputedStyle(e).position && (e.style.position = "relative", c()), o.parentData.domNode = e)
                }, o.runAnimation = function() {
                    var t = o.state.children.filter(o.doesChildNeedToBeAnimated),
                        n = t.map((function(t) {
                            return o.computeInitialStyles(t)
                        }));
                    t.forEach((function(t, e) {
                        o.remainingAnimations += 1, o.childrenToAnimate.push(F(t)), o.animateChild(t, e, n[e])
                    })), "function" == typeof o.props.onStartAll && o.callChildrenHook(o.props.onStartAll)
                }, o.doesChildNeedToBeAnimated = function(t) {
                    if (!F(t)) return !1;
                    var n = o.getChildData(F(t)),
                        e = n.domNode,
                        i = n.boundingBox,
                        r = o.parentData.boundingBox;
                    if (!e) return !1;
                    var a = o.props,
                        s = a.appearAnimation,
                        l = a.enterAnimation,
                        p = a.leaveAnimation,
                        d = a.getPosition,
                        c = t.appearing && s,
                        h = t.entering && l,
                        u = t.leaving && p;
                    if (c || h || u) return !0;
                    var f = E({
                            childDomNode: e,
                            childBoundingBox: i,
                            parentBoundingBox: r,
                            getPosition: d
                        }),
                        m = f[0],
                        g = f[1];
                    return 0 !== m || 0 !== g
                }, O(o, i)
            }
            return B(e, n), e.prototype.componentDidMount = function() {
                null === this.props.typeName && this.findDOMContainer(), this.props.appearAnimation && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation())
            }, e.prototype.componentDidUpdate = function(t) {
                null === this.props.typeName && this.findDOMContainer(), ! function(t, n) {
                    if (t === n) return !0;
                    var e = !v(t) || !v(n),
                        i = t.length !== n.length;
                    return !e && !i && function(t, n) {
                        for (var e = 0; e < n.length; e++)
                            if (!t(n[e], e, n)) return !1;
                        return !0
                    }((function(t, e) {
                        return t === n[e]
                    }), t)
                }(H(this.props.children).map((function(t) {
                    return t.key
                })), H(t.children).map((function(t) {
                    return t.key
                }))) && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation())
            }, e.prototype.calculateNextSetOfChildren = function(t) {
                var n = this,
                    e = t.map((function(t) {
                        var e = n.findChildByKey(t.key),
                            i = !e || e.leaving;
                        return P({}, t, {
                            element: t,
                            entering: i
                        })
                    })),
                    i = 0;
                return this.state.children.forEach((function(o, r) {
                    if (!y((function(t) {
                            return t.key === F(o)
                        }), t) && n.props.leaveAnimation) {
                        var a = P({}, o, {
                                leaving: !0
                            }),
                            s = r + i;
                        e.splice(s, 0, a), i += 1
                    }
                })), e
            }, e.prototype.prepForAnimation = function() {
                var t = this,
                    n = this.props,
                    e = n.leaveAnimation,
                    i = n.maintainContainerHeight,
                    o = n.getPosition;
                e && (this.state.children.filter((function(t) {
                    return t.leaving
                })).forEach((function(n) {
                    var e = t.getChildData(F(n));
                    !t.isAnimationDisabled(t.props) && e.domNode && e.domNode.disabled && h(), e.boundingBox && function(t, n) {
                        var e = t.domNode,
                            i = t.boundingBox;
                        if (e && i) {
                            var o = window.getComputedStyle(e),
                                r = ["margin-top", "margin-left", "margin-right"].reduce((function(t, n) {
                                    var e, i = o.getPropertyValue(n);
                                    return P({}, t, ((e = {})[n] = Number(i.replace("px", "")), e))
                                }), {});
                            x({
                                domNode: e,
                                styles: {
                                    position: "absolute",
                                    top: ("bottom" === n ? i.top - i.height : i.top) - r["margin-top"] + "px",
                                    left: i.left - r["margin-left"] + "px",
                                    right: i.right - r["margin-right"] + "px"
                                }
                            })
                        }
                    }(e, t.props.verticalAlignment)
                })), i && this.heightPlaceholderData.domNode && function(t) {
                    var n = t.domNode,
                        e = t.parentData,
                        i = t.getPosition,
                        o = e.domNode,
                        r = e.boundingBox;
                    if (o && r) {
                        x({
                            domNode: n,
                            styles: {
                                height: "0"
                            }
                        });
                        var a = r.height - i(o).height;
                        x({
                            domNode: n,
                            styles: {
                                height: a > 0 ? a + "px" : "0"
                            }
                        })
                    }
                }({
                    domNode: this.heightPlaceholderData.domNode,
                    parentData: this.parentData,
                    getPosition: o
                }));
                this.state.children.forEach((function(n) {
                    var e = t.getChildData(F(n)).domNode;
                    e && (n.entering || n.leaving || x({
                        domNode: e,
                        styles: {
                            transition: ""
                        }
                    }))
                }))
            }, e.prototype.UNSAFE_componentWillReceiveProps = function(t) {
                this.updateBoundingBoxCaches();
                var n = H(t.children);
                this.setState({
                    children: this.isAnimationDisabled(t) ? n.map((function(t) {
                        return P({}, t, {
                            element: t
                        })
                    })) : this.calculateNextSetOfChildren(n)
                })
            }, e.prototype.animateChild = function(t, n, e) {
                var i = this,
                    o = this.getChildData(F(t)).domNode;
                o && (x({
                    domNode: o,
                    styles: e
                }), this.props.onStart && this.props.onStart(t, o), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        var e = {
                            transition: S(n, i.props),
                            transform: "",
                            opacity: ""
                        };
                        t.appearing && i.props.appearAnimation ? e = P({}, e, i.props.appearAnimation.to) : t.entering && i.props.enterAnimation ? e = P({}, e, i.props.enterAnimation.to) : t.leaving && i.props.leaveAnimation && (e = P({}, e, i.props.leaveAnimation.to)), x({
                            domNode: o,
                            styles: e
                        })
                    }))
                })), this.bindTransitionEndHandler(t))
            }, e.prototype.bindTransitionEndHandler = function(t) {
                var n = this,
                    e = this.getChildData(F(t)).domNode;
                if (e) {
                    e.addEventListener(k, (function i(o) {
                        o.target === e && (e.style.transition = "", n.triggerFinishHooks(t, e), e.removeEventListener(k, i), t.leaving && n.removeChildData(F(t)))
                    }))
                }
            }, e.prototype.triggerFinishHooks = function(t, n) {
                var e = this;
                if (this.props.onFinish && this.props.onFinish(t, n), this.remainingAnimations -= 1, 0 === this.remainingAnimations) {
                    var i = this.state.children.filter((function(t) {
                        return !t.leaving
                    })).map((function(t) {
                        return P({}, t, {
                            element: t.element,
                            appearing: !1,
                            entering: !1
                        })
                    }));
                    this.setState({
                        children: i
                    }, (function() {
                        "function" == typeof e.props.onFinishAll && e.callChildrenHook(e.props.onFinishAll), e.childrenToAnimate = []
                    })), this.heightPlaceholderData.domNode && (this.heightPlaceholderData.domNode.style.height = "0")
                }
            }, e.prototype.callChildrenHook = function(t) {
                var n = this,
                    e = [],
                    i = [];
                this.childrenToAnimate.forEach((function(t) {
                    var o = n.findChildByKey(t);
                    o && (e.push(o), n.hasChildData(t) && i.push(n.getChildData(t).domNode))
                })), t(e, i)
            }, e.prototype.updateBoundingBoxCaches = function() {
                var t = this,
                    n = this.parentData.domNode;
                if (n) {
                    this.parentData.boundingBox = this.props.getPosition(n);
                    var e = [];
                    this.state.children.forEach((function(i) {
                        var o = F(i);
                        if (o)
                            if (t.hasChildData(o)) {
                                var r = t.getChildData(o);
                                r.domNode && i ? e.push(function(t) {
                                    var n = t.childDomNode,
                                        e = t.parentDomNode,
                                        i = t.getPosition,
                                        o = i(e),
                                        r = i(n),
                                        a = r.top,
                                        s = r.left,
                                        l = r.right,
                                        p = r.bottom,
                                        d = r.width,
                                        c = r.height;
                                    return {
                                        top: a - o.top,
                                        left: s - o.left,
                                        right: o.right - l,
                                        bottom: o.bottom - p,
                                        width: d,
                                        height: c
                                    }
                                }({
                                    childDomNode: r.domNode,
                                    parentDomNode: n,
                                    getPosition: t.props.getPosition
                                })) : e.push(null)
                            } else e.push(null);
                        else e.push(null)
                    })), this.state.children.forEach((function(n, i) {
                        var o = F(n),
                            r = e[i];
                        o && t.setChildData(o, {
                            boundingBox: r
                        })
                    }))
                }
            }, e.prototype.computeInitialStyles = function(t) {
                if (t.appearing) return this.props.appearAnimation ? this.props.appearAnimation.from : {};
                if (t.entering) return this.props.enterAnimation ? P({
                    position: "",
                    top: "",
                    left: "",
                    right: "",
                    bottom: ""
                }, this.props.enterAnimation.from) : {};
                if (t.leaving) return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
                var n = this.getChildData(F(t)),
                    e = n.domNode,
                    i = n.boundingBox,
                    o = this.parentData.boundingBox;
                if (!e) return {};
                var r = E({
                    childDomNode: e,
                    childBoundingBox: i,
                    parentBoundingBox: o,
                    getPosition: this.props.getPosition
                });
                return {
                    transform: "translate(" + r[0] + "px, " + r[1] + "px)"
                }
            }, e.prototype.isAnimationDisabled = function(t) {
                return T || t.disableAllAnimations || 0 === t.duration && 0 === t.delay && 0 === t.staggerDurationBy && 0 === t.staggerDelayBy
            }, e.prototype.findChildByKey = function(t) {
                return y((function(n) {
                    return F(n) === t
                }), this.state.children)
            }, e.prototype.hasChildData = function(t) {
                return Object.prototype.hasOwnProperty.call(this.childrenData, t)
            }, e.prototype.getChildData = function(t) {
                return this.hasChildData(t) ? this.childrenData[t] : {}
            }, e.prototype.setChildData = function(t, n) {
                this.childrenData[t] = P({}, this.getChildData(t), n)
            }, e.prototype.removeChildData = function(t) {
                delete this.childrenData[t], this.setState((function(n) {
                    return P({}, n, {
                        children: n.children.filter((function(n) {
                            return n.element.key !== t
                        }))
                    })
                }))
            }, e.prototype.createHeightPlaceholder = function() {
                var t = this,
                    n = this.props.typeName,
                    e = "ul" === n || "ol" === n ? "li" : "div";
                return (0, l.createElement)(e, {
                    key: "height-placeholder",
                    ref: function(n) {
                        t.heightPlaceholderData.domNode = n
                    },
                    style: {
                        visibility: "hidden",
                        height: 0
                    }
                })
            }, e.prototype.childrenWithRefs = function() {
                var t = this;
                return this.state.children.map((function(n) {
                    return (0, l.cloneElement)(n.element, {
                        ref: function(e) {
                            if (e) {
                                var i = function(t) {
                                    if ("undefined" == typeof HTMLElement) return null;
                                    if (t instanceof HTMLElement) return t;
                                    var n = (0, p.findDOMNode)(t);
                                    return n && n.nodeType === Node.TEXT_NODE ? null : n
                                }(e);
                                t.setChildData(F(n), {
                                    domNode: i
                                })
                            }
                        }
                    })
                }))
            }, e.prototype.render = function() {
                var t = this,
                    n = this.props,
                    e = n.typeName,
                    i = n.delegated,
                    o = n.leaveAnimation,
                    r = n.maintainContainerHeight,
                    a = this.childrenWithRefs();
                if (o && r && a.push(this.createHeightPlaceholder()), !e) return a;
                var s = P({}, i, {
                    children: a,
                    ref: function(n) {
                        t.parentData.domNode = n
                    }
                });
                return (0, l.createElement)(e, s)
            }, e
        }(l.Component),
        j = w(M)
}));