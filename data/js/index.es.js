import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
var n = e(t()),
    r = function(e, t) {
        return r = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, r(e, t)
    };

function i(e, t) {
    r(e, t);

    function n() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var a = function() {
    return a = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }, a.apply(this, arguments)
};

function o(e, t, n, r) {
    var i, a = !1,
        o = 0;

    function s() {
        i && clearTimeout(i)
    }

    function c() {
        s(), a = !0
    }
    typeof t != `boolean` && (r = n, n = t, t = void 0);

    function l() {
        var c = this,
            l = Date.now() - o,
            u = arguments;
        if (a) return;

        function d() {
            o = Date.now(), n.apply(c, u)
        }

        function f() {
            i = void 0
        }
        r && !i && d(), s(), r === void 0 && l > e ? d() : t !== !0 && (i = setTimeout(r ? f : d, r === void 0 ? e - l : e))
    }
    return l.cancel = c, l
}
var s = {
        Pixel: `Pixel`,
        Percent: `Percent`
    },
    c = {
        unit: s.Percent,
        value: .8
    };

function l(e) {
    return typeof e == `number` ? {
        unit: s.Percent,
        value: e * 100
    } : typeof e == `string` ? e.match(/^(\d*(\.\d+)?)px$/) ? {
        unit: s.Pixel,
        value: parseFloat(e)
    } : e.match(/^(\d*(\.\d+)?)%$/) ? {
        unit: s.Percent,
        value: parseFloat(e)
    } : (console.warn(`scrollThreshold format is invalid. Valid formats: "120px", "50%"...`), c) : (console.warn(`scrollThreshold should be string or number`), c)
}
var u = function(e) {
    i(t, e);

    function t(t) {
        var n = e.call(this, t) || this;
        return n.lastScrollTop = 0, n.actionTriggered = !1, n.startY = 0, n.currentY = 0, n.dragging = !1, n.maxPullDownDistance = 0, n.getScrollableTarget = function() {
            return n.props.scrollableTarget instanceof HTMLElement ? n.props.scrollableTarget : typeof n.props.scrollableTarget == `string` ? document.getElementById(n.props.scrollableTarget) : (n.props.scrollableTarget === null && console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `), null)
        }, n.onStart = function(e) {
            n.lastScrollTop || (n.dragging = !0, e instanceof MouseEvent ? n.startY = e.pageY : e instanceof TouchEvent && (n.startY = e.touches[0].pageY), n.currentY = n.startY, n._infScroll && (n._infScroll.style.willChange = `transform`, n._infScroll.style.transition = `transform 0.2s cubic-bezier(0,0,0.31,1)`))
        }, n.onMove = function(e) {
            n.dragging && (e instanceof MouseEvent ? n.currentY = e.pageY : e instanceof TouchEvent && (n.currentY = e.touches[0].pageY), !(n.currentY < n.startY) && (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) && n.setState({
                pullToRefreshThresholdBreached: !0
            }), !(n.currentY - n.startY > n.maxPullDownDistance * 1.5) && n._infScroll && (n._infScroll.style.overflow = `visible`, n._infScroll.style.transform = `translate3d(0px, ` + (n.currentY - n.startY) + `px, 0px)`)))
        }, n.onEnd = function() {
            n.startY = 0, n.currentY = 0, n.dragging = !1, n.state.pullToRefreshThresholdBreached && (n.props.refreshFunction && n.props.refreshFunction(), n.setState({
                pullToRefreshThresholdBreached: !1
            })), requestAnimationFrame(function() {
                n._infScroll && (n._infScroll.style.overflow = `auto`, n._infScroll.style.transform = `none`, n._infScroll.style.willChange = `none`)
            })
        }, n.onScrollListener = function(e) {
            typeof n.props.onScroll == `function` && setTimeout(function() {
                return n.props.onScroll && n.props.onScroll(e)
            }, 0);
            var t = n.props.height || n._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
            n.actionTriggered || ((n.props.inverse ? n.isElementAtTop(t, n.props.scrollThreshold) : n.isElementAtBottom(t, n.props.scrollThreshold)) && n.props.hasMore && (n.actionTriggered = !0, n.setState({
                showLoader: !0
            }), n.props.next && n.props.next()), n.lastScrollTop = t.scrollTop)
        }, n.state = {
            showLoader: !1,
            pullToRefreshThresholdBreached: !1
        }, n.throttledOnScrollListener = o(150, n.onScrollListener).bind(n), n.onStart = n.onStart.bind(n), n.onMove = n.onMove.bind(n), n.onEnd = n.onEnd.bind(n), n
    }
    return t.prototype.componentDidMount = function() {
        if (this.props.dataLength === void 0) throw Error(`mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage`);
        if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener(`scroll`, this.throttledOnScrollListener), typeof this.props.initialScrollY == `number` && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener(`touchstart`, this.onStart), this.el.addEventListener(`touchmove`, this.onMove), this.el.addEventListener(`touchend`, this.onEnd), this.el.addEventListener(`mousedown`, this.onStart), this.el.addEventListener(`mousemove`, this.onMove), this.el.addEventListener(`mouseup`, this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), typeof this.props.refreshFunction != `function`)) throw Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)
    }, t.prototype.componentWillUnmount = function() {
        this.el && (this.el.removeEventListener(`scroll`, this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener(`touchstart`, this.onStart), this.el.removeEventListener(`touchmove`, this.onMove), this.el.removeEventListener(`touchend`, this.onEnd), this.el.removeEventListener(`mousedown`, this.onStart), this.el.removeEventListener(`mousemove`, this.onMove), this.el.removeEventListener(`mouseup`, this.onEnd)))
    }, t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
        this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
            showLoader: !1
        }))
    }, t.prototype.isElementAtTop = function(e, t) {
        t === void 0 && (t = .8);
        var n = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
            r = l(t);
        return r.unit === s.Pixel ? e.scrollTop <= r.value + n - e.scrollHeight + 1 || e.scrollTop === 0 : e.scrollTop <= r.value / 100 + n - e.scrollHeight + 1 || e.scrollTop === 0
    }, t.prototype.isElementAtBottom = function(e, t) {
        t === void 0 && (t = .8);
        var n = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
            r = l(t);
        return r.unit === s.Pixel ? e.scrollTop + n >= e.scrollHeight - r.value : e.scrollTop + n >= r.value / 100 * e.scrollHeight
    }, t.prototype.render = function() {
        var e = this,
            t = a({
                height: this.props.height || `auto`,
                overflow: `auto`,
                WebkitOverflowScrolling: `touch`
            }, this.props.style),
            r = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
            i = this.props.pullDownToRefresh && this.props.height ? {
                overflow: `auto`
            } : {};
        return n.createElement(`div`, {
            style: i,
            className: `infinite-scroll-component__outerdiv`
        }, n.createElement(`div`, {
            className: `infinite-scroll-component ` + (this.props.className || ``),
            ref: function(t) {
                return e._infScroll = t
            },
            style: t
        }, this.props.pullDownToRefresh && n.createElement(`div`, {
            style: {
                position: `relative`
            },
            ref: function(t) {
                return e._pullDown = t
            }
        }, n.createElement(`div`, {
            style: {
                position: `absolute`,
                left: 0,
                right: 0,
                top: -1 * this.maxPullDownDistance
            }
        }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !r && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
    }, t
}(n.Component);
export {
    u as t
};