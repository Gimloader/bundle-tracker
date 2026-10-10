import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    l as n
} from "./assertThisInitialized.js";
var r = e(t()),
    i = e(n());

function a(e) {
    var t = !1;
    return function() {
        t || (console.warn(e), t = !0)
    }
}
var o = a(`
>> Warning, via react-flip-move <<

When using "wrapperless" mode (by supplying 'typeName' of 'null'), strange things happen when the direct parent has the default "static" position.

FlipMove has added 'position: relative' to this node, to ensure Flip Move animates correctly.

To avoid seeing this warning, simply apply a non-static position to that parent node.
`),
    s = a(`
>> Warning, via react-flip-move <<

One or more of Flip Move's child elements have the html attribute 'disabled' set to true.

Please note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set 'animation' to false.
`),
    c = {
        elevator: {
            from: {
                transform: `scale(0)`,
                opacity: `0`
            },
            to: {
                transform: ``,
                opacity: ``
            }
        },
        fade: {
            from: {
                opacity: `0`
            },
            to: {
                opacity: ``
            }
        },
        accordionVertical: {
            from: {
                transform: `scaleY(0)`,
                transformOrigin: `center top`
            },
            to: {
                transform: ``,
                transformOrigin: `center top`
            }
        },
        accordionHorizontal: {
            from: {
                transform: `scaleX(0)`,
                transformOrigin: `left center`
            },
            to: {
                transform: ``,
                transformOrigin: `left center`
            }
        },
        none: null
    },
    l = {
        elevator: {
            from: {
                transform: `scale(1)`,
                opacity: `1`
            },
            to: {
                transform: `scale(0)`,
                opacity: `0`
            }
        },
        fade: {
            from: {
                opacity: `1`
            },
            to: {
                opacity: `0`
            }
        },
        accordionVertical: {
            from: {
                transform: `scaleY(1)`,
                transformOrigin: `center top`
            },
            to: {
                transform: `scaleY(0)`,
                transformOrigin: `center top`
            }
        },
        accordionHorizontal: {
            from: {
                transform: `scaleX(1)`,
                transformOrigin: `left center`
            },
            to: {
                transform: `scaleX(0)`,
                transformOrigin: `left center`
            }
        },
        none: null
    },
    u = c,
    d = `elevator`,
    f = `none`,
    p = function(e, t) {
        for (var n = 0; n < t.length; n++)
            if (e(t[n], n, t)) return t[n]
    },
    m = function(e, t) {
        for (var n = 0; n < t.length; n++)
            if (!e(t[n], n, t)) return !1;
        return !0
    },
    h = function(e) {
        return h = Array.isArray || function(e) {
            return Object.prototype.toString.call(e) === `[object Array]`
        }, h(e)
    };

function g(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
        n = {};
    return Object.keys(e).forEach(function(r) {
        t.indexOf(r) === -1 && (n[r] = e[r])
    }), n
}

function _(e, t) {
    if (e === t) return !0;
    var n = !h(e) || !h(t),
        r = e.length !== t.length;
    return n || r ? !1 : m(function(e, n) {
        return e === t[n]
    }, e)
}

function v(e) {
    var t = {};
    return function(n) {
        return t[n] || (t[n] = e(n)), t[n]
    }
}
var y = v(function(e) {
        return e.replace(/([A-Z])/g, `-$1`).toLowerCase()
    }),
    b = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    },
    x = function(e, t) {
        if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
    },
    S = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    C = function(e, t) {
        if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    },
    w = function(e, t) {
        if (!e) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
        return t && (typeof t == `object` || typeof t == `function`) ? t : e
    };

function T(e) {
    var t, n = t = function(t) {
        C(n, t);

        function n() {
            return x(this, n), w(this, t.apply(this, arguments))
        }
        return n.prototype.checkChildren = function(e) {}, n.prototype.convertProps = function(e) {
            var t = {
                children: e.children,
                easing: e.easing,
                onStart: e.onStart,
                onFinish: e.onFinish,
                onStartAll: e.onStartAll,
                onFinishAll: e.onFinishAll,
                typeName: e.typeName,
                disableAllAnimations: e.disableAllAnimations,
                getPosition: e.getPosition,
                maintainContainerHeight: e.maintainContainerHeight,
                verticalAlignment: e.verticalAlignment,
                duration: this.convertTimingProp(`duration`),
                delay: this.convertTimingProp(`delay`),
                staggerDurationBy: this.convertTimingProp(`staggerDurationBy`),
                staggerDelayBy: this.convertTimingProp(`staggerDelayBy`),
                appearAnimation: this.convertAnimationProp(e.appearAnimation, u),
                enterAnimation: this.convertAnimationProp(e.enterAnimation, c),
                leaveAnimation: this.convertAnimationProp(e.leaveAnimation, l),
                delegated: {}
            };
            this.checkChildren(t.children);
            var n = Object.keys(t),
                r = g(this.props, n);
            return r.style = S({
                position: `relative`
            }, r.style), t.delegated = r, t
        }, n.prototype.convertTimingProp = function(e) {
            var t = this.props[e],
                r = typeof t == `number` ? t : parseInt(t, 10);
            return isNaN(r) ? n.defaultProps[e] : r
        }, n.prototype.convertAnimationProp = function(e, t) {
            switch (e === void 0 ? `undefined` : b(e)) {
                case `boolean`:
                    return t[e ? d : f];
                case `string`:
                    return Object.keys(t).indexOf(e) === -1 ? t[d] : t[e];
                default:
                    return e
            }
        }, n.prototype.render = function() {
            return r.createElement(e, this.convertProps(this.props))
        }, n
    }(r.Component);
    return t.defaultProps = {
        easing: `ease-in-out`,
        duration: 350,
        delay: 0,
        staggerDurationBy: 0,
        staggerDelayBy: 0,
        typeName: `div`,
        enterAnimation: d,
        leaveAnimation: d,
        disableAllAnimations: !1,
        getPosition: function(e) {
            return e.getBoundingClientRect()
        },
        maintainContainerHeight: !1,
        verticalAlignment: `top`
    }, n
}

function E(e) {
    var t = e.domNode,
        n = e.styles;
    Object.keys(n).forEach(function(e) {
        t.style.setProperty(y(e), n[e])
    })
}

function D() {
    var e = {
        transition: `transitionend`,
        "-o-transition": `oTransitionEnd`,
        "-moz-transition": `transitionend`,
        "-webkit-transition": `webkitTransitionEnd`
    };
    if (typeof document > `u`) return ``;
    var t = document.createElement(`fakeelement`),
        n = p(function(e) {
            return t.style.getPropertyValue(e) !== void 0
        }, Object.keys(e));
    return n ? e[n] : ``
}
var O = function(e) {
        var t = e.childDomNode,
            n = e.parentDomNode,
            r = e.getPosition,
            i = r(n),
            a = r(t),
            o = a.top,
            s = a.left,
            c = a.right,
            l = a.bottom,
            u = a.width,
            d = a.height;
        return {
            top: o - i.top,
            left: s - i.left,
            right: i.right - c,
            bottom: i.bottom - l,
            width: u,
            height: d
        }
    },
    k = function(e) {
        var t = e.childDomNode,
            n = e.childBoundingBox,
            r = e.parentBoundingBox,
            i = e.getPosition,
            a = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: 0,
                width: 0
            },
            o = n || a,
            s = r || a,
            c = i(t),
            l = {
                top: c.top - s.top,
                left: c.left - s.left
            };
        return [o.left - l.left, o.top - l.top]
    },
    A = function(e, t) {
        var n = e.domNode,
            r = e.boundingBox;
        if (n && r) {
            var i = window.getComputedStyle(n),
                a = [`margin-top`, `margin-left`, `margin-right`].reduce(function(e, t) {
                    var n, r = i.getPropertyValue(t);
                    return S({}, e, (n = {}, n[t] = Number(r.replace(`px`, ``)), n))
                }, {});
            E({
                domNode: n,
                styles: {
                    position: `absolute`,
                    top: (t === `bottom` ? r.top - r.height : r.top) - a[`margin-top`] + `px`,
                    left: r.left - a[`margin-left`] + `px`,
                    right: r.right - a[`margin-right`] + `px`
                }
            })
        }
    },
    j = function(e) {
        var t = e.domNode,
            n = e.parentData,
            r = e.getPosition,
            i = n.domNode,
            a = n.boundingBox;
        if (i && a) {
            E({
                domNode: t,
                styles: {
                    height: `0`
                }
            });
            var o = a.height - r(i).height;
            E({
                domNode: t,
                styles: {
                    height: o > 0 ? o + `px` : `0`
                }
            })
        }
    },
    M = function(e) {
        if (typeof HTMLElement > `u`) return null;
        if (e instanceof HTMLElement) return e;
        var t = (0, i.findDOMNode)(e);
        return t && t.nodeType === Node.TEXT_NODE ? null : t
    },
    N = function(e, t) {
        var n = t.delay,
            r = t.duration,
            i = t.staggerDurationBy,
            a = t.staggerDelayBy,
            o = t.easing;
        return n += e * a, r += e * i, [`transform`, `opacity`].map(function(e) {
            return e + ` ` + r + `ms ` + o + ` ` + n + `ms`
        }).join(`, `)
    },
    P = D(),
    F = !P;

function I(e) {
    return e.key || ``
}

function L(e) {
    return r.Children.toArray(e)
}
var R = T(function(e) {
    C(t, e);

    function t() {
        var n, r, a;
        x(this, t);
        var s = [...arguments];
        return a = (n = (r = w(this, e.call.apply(e, [this].concat(s))), r), r.state = {
            children: L(r.props ? r.props.children : []).map(function(e) {
                return S({}, e, {
                    element: e,
                    appearing: !0
                })
            })
        }, r.childrenData = {}, r.parentData = {
            domNode: null,
            boundingBox: null
        }, r.heightPlaceholderData = {
            domNode: null
        }, r.remainingAnimations = 0, r.childrenToAnimate = [], r.findDOMContainer = function() {
            var e = i.findDOMNode(r),
                t = e && e.parentNode;
            t && t instanceof HTMLElement && (window.getComputedStyle(t).position === `static` && (t.style.position = `relative`, o()), r.parentData.domNode = t)
        }, r.runAnimation = function() {
            var e = r.state.children.filter(r.doesChildNeedToBeAnimated),
                t = e.map(function(e) {
                    return r.computeInitialStyles(e)
                });
            e.forEach(function(e, n) {
                r.remainingAnimations += 1, r.childrenToAnimate.push(I(e)), r.animateChild(e, n, t[n])
            }), typeof r.props.onStartAll == `function` && r.callChildrenHook(r.props.onStartAll)
        }, r.doesChildNeedToBeAnimated = function(e) {
            if (!I(e)) return !1;
            var t = r.getChildData(I(e)),
                n = t.domNode,
                i = t.boundingBox,
                a = r.parentData.boundingBox;
            if (!n) return !1;
            var o = r.props,
                s = o.appearAnimation,
                c = o.enterAnimation,
                l = o.leaveAnimation,
                u = o.getPosition,
                d = e.appearing && s,
                f = e.entering && c,
                p = e.leaving && l;
            if (d || f || p) return !0;
            var m = k({
                    childDomNode: n,
                    childBoundingBox: i,
                    parentBoundingBox: a,
                    getPosition: u
                }),
                h = m[0],
                g = m[1];
            return h !== 0 || g !== 0
        }, n), w(r, a)
    }
    return t.prototype.componentDidMount = function() {
        this.props.typeName === null && this.findDOMContainer(), this.props.appearAnimation && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation())
    }, t.prototype.componentDidUpdate = function(e) {
        this.props.typeName === null && this.findDOMContainer(), !_(L(this.props.children).map(function(e) {
            return e.key
        }), L(e.children).map(function(e) {
            return e.key
        })) && !this.isAnimationDisabled(this.props) && (this.prepForAnimation(), this.runAnimation())
    }, t.prototype.calculateNextSetOfChildren = function(e) {
        var t = this,
            n = e.map(function(e) {
                var n = t.findChildByKey(e.key);
                return S({}, e, {
                    element: e,
                    entering: !n || n.leaving
                })
            }),
            r = 0;
        return this.state.children.forEach(function(i, a) {
            if (!p(function(e) {
                    return e.key === I(i)
                }, e) && t.props.leaveAnimation) {
                var o = S({}, i, {
                        leaving: !0
                    }),
                    s = a + r;
                n.splice(s, 0, o), r += 1
            }
        }), n
    }, t.prototype.prepForAnimation = function() {
        var e = this,
            t = this.props,
            n = t.leaveAnimation,
            r = t.maintainContainerHeight,
            i = t.getPosition;
        n && (this.state.children.filter(function(e) {
            return e.leaving
        }).forEach(function(t) {
            var n = e.getChildData(I(t));
            !e.isAnimationDisabled(e.props) && n.domNode && n.domNode.disabled && s(), n.boundingBox && A(n, e.props.verticalAlignment)
        }), r && this.heightPlaceholderData.domNode && j({
            domNode: this.heightPlaceholderData.domNode,
            parentData: this.parentData,
            getPosition: i
        })), this.state.children.forEach(function(t) {
            var n = e.getChildData(I(t)).domNode;
            n && !t.entering && !t.leaving && E({
                domNode: n,
                styles: {
                    transition: ``
                }
            })
        })
    }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
        this.updateBoundingBoxCaches();
        var t = L(e.children);
        this.setState({
            children: this.isAnimationDisabled(e) ? t.map(function(e) {
                return S({}, e, {
                    element: e
                })
            }) : this.calculateNextSetOfChildren(t)
        })
    }, t.prototype.animateChild = function(e, t, n) {
        var r = this,
            i = this.getChildData(I(e)).domNode;
        i && (E({
            domNode: i,
            styles: n
        }), this.props.onStart && this.props.onStart(e, i), requestAnimationFrame(function() {
            requestAnimationFrame(function() {
                var n = {
                    transition: N(t, r.props),
                    transform: ``,
                    opacity: ``
                };
                e.appearing && r.props.appearAnimation ? n = S({}, n, r.props.appearAnimation.to) : e.entering && r.props.enterAnimation ? n = S({}, n, r.props.enterAnimation.to) : e.leaving && r.props.leaveAnimation && (n = S({}, n, r.props.leaveAnimation.to)), E({
                    domNode: i,
                    styles: n
                })
            })
        }), this.bindTransitionEndHandler(e))
    }, t.prototype.bindTransitionEndHandler = function(e) {
        var t = this,
            n = this.getChildData(I(e)).domNode;
        n && n.addEventListener(P, function r(i) {
            i.target === n && (n.style.transition = ``, t.triggerFinishHooks(e, n), n.removeEventListener(P, r), e.leaving && t.removeChildData(I(e)))
        })
    }, t.prototype.triggerFinishHooks = function(e, t) {
        var n = this;
        if (this.props.onFinish && this.props.onFinish(e, t), --this.remainingAnimations, this.remainingAnimations === 0) {
            var r = this.state.children.filter(function(e) {
                return !e.leaving
            }).map(function(e) {
                return S({}, e, {
                    element: e.element,
                    appearing: !1,
                    entering: !1
                })
            });
            this.setState({
                children: r
            }, function() {
                typeof n.props.onFinishAll == `function` && n.callChildrenHook(n.props.onFinishAll), n.childrenToAnimate = []
            }), this.heightPlaceholderData.domNode && (this.heightPlaceholderData.domNode.style.height = `0`)
        }
    }, t.prototype.callChildrenHook = function(e) {
        var t = this,
            n = [],
            r = [];
        this.childrenToAnimate.forEach(function(e) {
            var i = t.findChildByKey(e);
            i && (n.push(i), t.hasChildData(e) && r.push(t.getChildData(e).domNode))
        }), e(n, r)
    }, t.prototype.updateBoundingBoxCaches = function() {
        var e = this,
            t = this.parentData.domNode;
        if (t) {
            this.parentData.boundingBox = this.props.getPosition(t);
            var n = [];
            this.state.children.forEach(function(r) {
                var i = I(r);
                if (!i) n.push(null);
                else if (!e.hasChildData(i)) n.push(null);
                else {
                    var a = e.getChildData(i);
                    !a.domNode || !r ? n.push(null) : n.push(O({
                        childDomNode: a.domNode,
                        parentDomNode: t,
                        getPosition: e.props.getPosition
                    }))
                }
            }), this.state.children.forEach(function(t, r) {
                var i = I(t),
                    a = n[r];
                i && e.setChildData(i, {
                    boundingBox: a
                })
            })
        }
    }, t.prototype.computeInitialStyles = function(e) {
        if (e.appearing) return this.props.appearAnimation ? this.props.appearAnimation.from : {};
        if (e.entering) return this.props.enterAnimation ? S({
            position: ``,
            top: ``,
            left: ``,
            right: ``,
            bottom: ``
        }, this.props.enterAnimation.from) : {};
        if (e.leaving) return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
        var t = this.getChildData(I(e)),
            n = t.domNode,
            r = t.boundingBox,
            i = this.parentData.boundingBox;
        if (!n) return {};
        var a = k({
                childDomNode: n,
                childBoundingBox: r,
                parentBoundingBox: i,
                getPosition: this.props.getPosition
            }),
            o = a[0],
            s = a[1];
        return {
            transform: `translate(` + o + `px, ` + s + `px)`
        }
    }, t.prototype.isAnimationDisabled = function(e) {
        return F || e.disableAllAnimations || e.duration === 0 && e.delay === 0 && e.staggerDurationBy === 0 && e.staggerDelayBy === 0
    }, t.prototype.findChildByKey = function(e) {
        return p(function(t) {
            return I(t) === e
        }, this.state.children)
    }, t.prototype.hasChildData = function(e) {
        return Object.prototype.hasOwnProperty.call(this.childrenData, e)
    }, t.prototype.getChildData = function(e) {
        return this.hasChildData(e) ? this.childrenData[e] : {}
    }, t.prototype.setChildData = function(e, t) {
        this.childrenData[e] = S({}, this.getChildData(e), t)
    }, t.prototype.removeChildData = function(e) {
        delete this.childrenData[e], this.setState(function(t) {
            return S({}, t, {
                children: t.children.filter(function(t) {
                    return t.element.key !== e
                })
            })
        })
    }, t.prototype.createHeightPlaceholder = function() {
        var e = this,
            t = this.props.typeName;
        return (0, r.createElement)(t === `ul` || t === `ol` ? `li` : `div`, {
            key: `height-placeholder`,
            ref: function(t) {
                e.heightPlaceholderData.domNode = t
            },
            style: {
                visibility: `hidden`,
                height: 0
            }
        })
    }, t.prototype.childrenWithRefs = function() {
        var e = this;
        return this.state.children.map(function(t) {
            return (0, r.cloneElement)(t.element, {
                ref: function(n) {
                    if (n) {
                        var r = M(n);
                        e.setChildData(I(t), {
                            domNode: r
                        })
                    }
                }
            })
        })
    }, t.prototype.render = function() {
        var e = this,
            t = this.props,
            n = t.typeName,
            i = t.delegated,
            a = t.leaveAnimation,
            o = t.maintainContainerHeight,
            s = this.childrenWithRefs();
        if (a && o && s.push(this.createHeightPlaceholder()), !n) return s;
        var c = S({}, i, {
            children: s,
            ref: function(t) {
                e.parentData.domNode = t
            }
        });
        return (0, r.createElement)(n, c)
    }, t
}(r.Component));
export {
    R as t
};