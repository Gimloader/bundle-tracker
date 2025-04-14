function e(e, t, r, n) {
    Object.defineProperty(e, t, {
        get: r,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var r = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
r.register("62Txd", (function(t, n) {
    var o;
    o = t.exports, Object.defineProperty(o, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return s
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("aZCrZ");
    var s = () => (0, a.jsx)(i.default, {})
})), r.register("aZCrZ", (function(t, n) {
    e(t.exports, "default", (function() {
        return h
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("beXRF"),
        s = r("57c8e"),
        l = r("cHCps"),
        c = r("lJSKF"),
        u = r("140Bj"),
        d = r("iROck");
    let f;
    var p;
    (p = f || (f = {})).recent = "recent", p.relevant = "relevant";
    var h = () => {
        const [e] = (0, i.useSearchParams)(), t = e.get("q");
        return a.useEffect((() => {
            t || (0, d.NavigateTo)(u.default.navigation.homeUrl)
        }), [t]), t ? (0, o.jsx)(c.default, {
            children: (0, o.jsxs)("div", {
                className: "maxHeight flex-column",
                style: {
                    overflow: "hidden"
                },
                children: [(0, o.jsx)(l.default, {
                    includeSpacer: !0
                }), (0, o.jsx)("div", {
                    style: {
                        flex: 1,
                        overflow: "hidden"
                    },
                    children: (0, o.jsx)(s.default, {
                        searchQuery: t,
                        overrideTitle: !0
                    })
                })]
            })
        }) : null
    }
})), r.register("57c8e", (function(n, o) {
    e(n.exports, "default", (function() {
        return C
    }));
    var a = r("divCp"),
        i = r("hxEiv"),
        s = r("fywoC"),
        l = r("c6Gty"),
        c = r("iMOcM"),
        u = r("6KLxl"),
        d = r("grHGb"),
        f = r("8FJCY"),
        p = r("sgWtV"),
        h = r("1HsHH"),
        g = r("cmvpZ"),
        m = r("69SUA"),
        v = r("beXRF"),
        y = r("7c9vD"),
        x = r("lmFTK"),
        b = r("2nCEo");
    const w = "GIMKIT_SEARCH_CACHE";
    class S extends s.Component {
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0)
        }
        componentDidUpdate(e, t) {
            this.state.language === t.language && this.state.subject === t.subject && this.state.sort === t.sort && this.props.showMyKits === e.showMyKits || this.onSearch(!0)
        }
        render() {
            return (0, i.jsxs)(i.Fragment, {
                children: [this.props.overrideTitle && (0, i.jsx)(c.Title, {
                    title: `Kits about "${this.props.searchQuery}"`
                }), (0, i.jsxs)(l.Container, {
                    customBackgroundColor: this.props.customBackgroundColor,
                    customHeight: this.props.customHeight,
                    children: [(0, i.jsx)(d.LeftSide, {
                        customPadding: this.props.customLeftSidePadding,
                        children: (0, i.jsxs)("div", {
                            children: [!this.props.showMyKits && (0, i.jsx)("div", {
                                style: {
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 999
                                },
                                className: "maxWidth",
                                children: (0, i.jsx)(x.default, {
                                    onSearch: this.onSearch,
                                    searchQuery: this.state.draftSearchQuery,
                                    onUpdateSearchQuery: this.onUpdateSearchQuery,
                                    language: this.state.language,
                                    onLanguageSelected: this.onLanguageSelected,
                                    subject: this.state.subject,
                                    onSubjectSelected: this.onSubjectSelected,
                                    sort: this.state.sort,
                                    onSortSelected: this.onSortSelected,
                                    loading: this.state.loading,
                                    showFilters: this.state.showFilters
                                })
                            }), this.getLeftSide()]
                        })
                    }), (0, i.jsx)(d.RightSide, {
                        children: this.getRightSide()
                    })]
                })]
            })
        }
        constructor(e) {
            super(e), (0, a.default)(this, "state", {
                loading: !1,
                currentKit: "",
                questions: [],
                page: 0,
                hasMore: !0,
                error: !1,
                results: [],
                searchQuery: this.props.searchQuery,
                draftSearchQuery: this.props.searchQuery,
                language: void 0,
                subject: void 0,
                sort: x.SortOptions.relevant,
                showFilters: !1,
                firstSearch: !0,
                fetchingResults: !1
            }), (0, a.default)(this, "fetchSearchResults", (() => {
                const e = this.state.searchQuery;
                if (e && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    const t = {
                        query: e,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (t.language = (0, y.getLanguageKey)(this.state.language)), this.state.subject && (t.subject = this.state.subject), (0, c.request)({
                        url: "/api/games/search",
                        data: t,
                        cacheKey: w,
                        success: e => {
                            this.setState({
                                results: [...this.state.results, ...e.results],
                                hasMore: e.hasMore,
                                page: e.page
                            })
                        },
                        error: () => {
                            this.setState({
                                error: !0
                            }), (0, p.throwError)({
                                title: "Error searching",
                                content: "Please try again"
                            })
                        },
                        both: () => {
                            if (!this.props.blockChangingUrl) {
                                const t = new URL(window.location.href);
                                t.searchParams.set("q", e), window.history.pushState({}, "", t)
                            }
                            this.setState({
                                showFilters: !0,
                                loading: !1,
                                firstSearch: !1,
                                fetchingResults: !1
                            })
                        }
                    })
                } else this.setState({
                    loading: !1
                })
            })), (0, a.default)(this, "fetchMyKits", (() => {
                this.setState({
                    fetchingResults: !0
                }), (0, c.request)({
                    cacheKey: w,
                    url: "/api/games/summary/me",
                    method: "GET",
                    success: e => {
                        this.setState({
                            results: e.games.map((e => ({
                                _id: e._id,
                                title: e.title,
                                gif: e.gif,
                                questions: 0,
                                creator: "",
                                dateCreated: t(b)(e.createdAt).toISOString()
                            })))
                        })
                    },
                    error: () => (0, p.throwError)({
                        title: "Error fetching Kits"
                    }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                })
            })), (0, a.default)(this, "fetchQuestions", (e => {
                (0, c.request)({
                    url: `/api/games/questions/search/${e}?limit=${this.props.questionFetchLimit||30}`,
                    cacheKey: w,
                    method: "get",
                    success: t => {
                        const r = t.reverse();
                        this.setState({
                            questions: r,
                            currentKit: e
                        })
                    },
                    error: () => !1
                })
            })), (0, a.default)(this, "onSearch", (e => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: e,
                    currentKit: "",
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults)
            })), (0, a.default)(this, "debouncedHover", (0, g.debounce)((e => {
                document.getElementById("right-side-search").scrollTo(0, 0), this.fetchQuestions(e._id)
            }), 50)), (0, a.default)(this, "onUpdateSearchQuery", (e => {
                this.setState({
                    draftSearchQuery: e
                })
            })), (0, a.default)(this, "onLanguageSelected", (e => {
                this.setState({
                    language: e
                })
            })), (0, a.default)(this, "onSubjectSelected", (e => {
                this.setState({
                    subject: e
                })
            })), (0, a.default)(this, "onSortSelected", (e => {
                this.setState({
                    sort: e
                })
            })), (0, a.default)(this, "getLeftSide", (() => this.state.results.length || this.state.loading || this.state.firstSearch ? (0, i.jsx)(h.default, {
                dataLength: this.state.results.length,
                hasMore: this.state.hasMore,
                style: {
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    paddingTop: 18,
                    overflow: "visible"
                },
                scrollableTarget: "left-side-search",
                next: this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults,
                loader: null,
                children: this.state.results.map(((e, t) => (0, i.jsx)(s.Fragment, {
                    children: (0, i.jsx)(u.default, {
                        id: e._id,
                        title: e.title,
                        gif: e.gif,
                        handleHover: () => this.debouncedHover(e),
                        numberOfQuestions: e.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: e.creator,
                        dateCreated: e.dateCreated,
                        redirectOnImageClick: !0,
                        size: "normal",
                        selected: this.state.currentKit === e._id,
                        blockHoverable: !0
                    }, e._id)
                }, `read-item-${e._id}`)))
            }) : !this.state.results.length && (0, i.jsx)("div", {
                className: "maxWidth flex hc vc flex-column",
                children: (0, i.jsxs)("div", {
                    style: {
                        padding: "0 38px",
                        marginTop: 42,
                        textAlign: "center"
                    },
                    children: [(0, i.jsx)("img", {
                        src: "/client/img/icons/sad.svg"
                    }), (0, i.jsxs)("div", {
                        style: {
                            marginTop: 18,
                            fontFamily: m.Fonts.SFPro,
                            fontSize: 20
                        },
                        children: [(0, i.jsx)("div", {
                            children: "We couldn't find any results."
                        }), !this.props.isFromQuestionBank && (0, i.jsxs)("div", {
                            style: {
                                marginTop: 24
                            },
                            children: ["Try another search or maybe", " ", (0, i.jsx)(v.Link, {
                                to: "/create",
                                children: "make your own kit!"
                            })]
                        })]
                    })]
                })
            }))), (0, a.default)(this, "getRightSide", (() => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map((e => (0, i.jsx)(f.default, {
                question: e,
                showAllAnswers: !0
            }, e._id)))))
        }
    }
    var C = S
})), r.register("6KLxl", (function(n, o) {
    e(n.exports, "default", (function() {
        return R
    }));
    var a = r("hxEiv");
    r("fywoC");
    var i = r("7ECC6"),
        s = r("fC6cp"),
        l = r("69SUA"),
        c = r("fK8ya"),
        u = r("2FDaO"),
        d = r("iMOcM"),
        f = r("lKmIF"),
        p = r("kyvf1"),
        h = r("iROck"),
        g = r("2nCEo");
    let m, v, y, x, b, w, S, C, k, E, O, j = e => e;
    const N = (0, u.default)(p.default).attrs({
            className: "maxWidth"
        })(m || (m = j`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        M = (0, u.default)(i.default)(v || (v = j`
  background-color: ${0};
  border-radius: 7px;
  border: 2px solid ${0};
  font-family: ${0};
`), f.default.White, f.default.BorderGray, l.Fonts.SFPro),
        T = u.default.div.attrs({
            className: "flex-column"
        })(y || (y = j`
  padding: 20px;
  width: calc(100% - ${0}px);
`), 178),
        P = u.default.div(x || (x = j`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        L = u.default.div(b || (b = j`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${0};
`), l.FontWeights.Bold),
        _ = u.default.div(w || (w = j`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        z = u.default.div(S || (S = j`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        F = u.default.div(C || (C = j`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${0};
`), l.Fonts.SFPro),
        A = u.default.i(k || (k = j`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        I = (0, u.default)(A).attrs({
            className: "fad fa-list"
        })(E || (E = j``)),
        D = (0, u.default)(A).attrs({
            className: "fad fa-calendar-alt"
        })(O || (O = j``));
    var R = e => {
        const r = "normal" === e.size;
        return (0, a.jsx)(N, {
            to: e.blockRedirect ? void 0 : `/view/${e.id}`,
            children: (0, a.jsx)(M, {
                className: "maxWidth",
                onMouseEnter: e.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !e.blockHoverable,
                style: {
                    backgroundColor: e.selected ? "#eeeeee" : f.default.White
                },
                children: (0, a.jsxs)("div", {
                    className: "flex maxWidth",
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(c.default, {
                            image: e.gif,
                            size: r ? 178 : 148,
                            onClick: e.redirectOnImageClick && (() => e.blockRedirect ? null : (0, h.NavigateTo)(`/view/${e.id}`))
                        })
                    }), (0, a.jsx)(T, {
                        children: (0, a.jsxs)(P, {
                            children: [(0, a.jsx)(L, {
                                style: {
                                    fontSize: r ? 32 : 23
                                },
                                children: e.title
                            }), e.creator && (0, a.jsx)(_, {
                                style: {
                                    fontSize: r ? 18 : 16
                                },
                                children: (0, d.capitalizeFirstLetter)(e.creator)
                            }), (0, a.jsx)(s.default, {
                                style: {
                                    margin: "16px 0px 18px 0px"
                                }
                            }), !!e.numberOfQuestions && (0, a.jsxs)(z, {
                                children: [(0, a.jsx)(I, {}), (0, a.jsxs)("span", {
                                    children: [e.numberOfQuestions ? e.numberOfQuestions : "", " ", e.numberOfQuestions ? (0, d.plural)("question", e.numberOfQuestions) : ""]
                                })]
                            }), e.dateCreated && r && (0, a.jsxs)(F, {
                                children: [(0, a.jsx)(D, {}), (0, a.jsxs)("span", {
                                    children: ["Created ", t(g)(e.dateCreated).fromNow()]
                                })]
                            })]
                        })
                    })]
                })
            })
        })
    }
})), r.register("fK8ya", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        s = r("fBuQJ"),
        l = r("lKmIF"),
        c = r("1djzF");
    let u;
    const d = i.default.img.attrs((e => ({
        src: e.image
    })))(u || (u = (e => e)`
  cursor: pointer;
  height: ${0}px;
  width: ${0}px;
  margin-right: ${0}px;
  border-radius: 5px;
  ${0}
  flex-shrink: 0;
  object-fit: cover;
`), (e => e.size), (e => e.size), (e => e.customRightMargin ? e.customRightMargin : 0), (e => e.showBorder && `border: solid ${l.default.Black} 1px;`));
    var f = e => {
        const [t, r] = a.useState(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(d, {
                ...e,
                onClick: t => {
                    t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || r(!0)
                }
            }), (0, o.jsx)(s.default, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), r(!1)
                },
                footer: null,
                closable: !1,
                children: (0, o.jsx)("img", {
                    src: (0, c.getCloudinaryUrl)(e.image),
                    style: {
                        width: "100%"
                    }
                })
            })]
        })
    }
})), r.register("1djzF", (function(t, r) {
    e(t.exports, "getCloudinaryUrl", (function() {
        return n
    }));
    const n = e => {
            const t = o(e);
            return t ? e.includes("/video/upload") ? `https://${a}/video/upload/${t}` : `https://${a}/image/upload/f_auto,fl_lossy,q_auto/${t}` : e
        },
        o = e => {
            if (!l.some((t => e.includes(t)))) return null;
            if (e.includes(i) && !e.includes(`/${s}/`)) return null;
            const t = e.split("/");
            if (!t || !t.length || t.length < 2) return null;
            const r = t[t.length - 2],
                n = t[t.length - 1];
            return r && n && r.startsWith("v") ? `${r}/${n}` : null
        },
        a = "media.gimkit.com",
        i = "res.cloudinary.com",
        s = "gimkit-production",
        l = [a, i]
})), r.register("kyvf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv"),
        a = r("beXRF");
    r("fywoC");
    var i = e => e.external || !e.to ? (0, o.jsx)("a", {
        href: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        onKeyPress: t => {
            e.onClick && "Enter" === t.key && (t.preventDefault(), e.onClick())
        },
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    }) : (0, o.jsx)(a.Link, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
})), r.register("iROck", (function(t, n) {
    e(t.exports, "NavigateTo", (function() {
        return a
    }));
    var o = r("bd8je");
    const a = e => {
        o.history.push(e)
    }
})), r.register("grHGb", (function(t, n) {
    e(t.exports, "LeftSide", (function() {
        return d
    })), e(t.exports, "RightSide", (function() {
        return f
    }));
    var o = r("2FDaO"),
        a = r("lKmIF"),
        i = r("69SUA");
    let s, l, c, u = e => e;
    const d = o.default.div.attrs({
            id: "left-side-search",
            className: "scroll-y"
        })(s || (s = u`
  width: 647px;
  background: ${0};
  border-right: 1px solid ${0};
  box-sizing: border-box;
  padding: ${0};
  padding-top: 0px;
`), a.default.White, a.default.BorderGray, (e => e.customPadding ? e.customPadding : "15px")),
        f = o.default.div.attrs({
            id: "right-side-search",
            className: "scroll-y"
        })(l || (l = u`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`));
    o.default.div(c || (c = u`
  font-size: 20px;
  font-weight: ${0};
  margin-bottom: 2px;
`), i.FontWeights.Bold)
})), r.register("1HsHH", (function(n, o) {
    e(n.exports, "default", (function() {
        return p
    }));
    var a = r("fywoC"),
        i = function(e, t) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }, i(e, t)
        };
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var s = function() {
        return s = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }, s.apply(this, arguments)
    };
    var l = "Pixel",
        c = "Percent",
        u = {
            unit: c,
            value: .8
        };

    function d(e) {
        return "number" == typeof e ? {
            unit: c,
            value: 100 * e
        } : "string" == typeof e ? e.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: l,
            value: parseFloat(e)
        } : e.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: c,
            value: parseFloat(e)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), u) : (console.warn("scrollThreshold should be string or number"), u)
    }
    var f = function(e) {
            function r(t) {
                var r = e.call(this, t) || this;
                return r.lastScrollTop = 0, r.actionTriggered = !1, r.startY = 0, r.currentY = 0, r.dragging = !1, r.maxPullDownDistance = 0, r.getScrollableTarget = function() {
                    return r.props.scrollableTarget instanceof HTMLElement ? r.props.scrollableTarget : "string" == typeof r.props.scrollableTarget ? document.getElementById(r.props.scrollableTarget) : (null === r.props.scrollableTarget && console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "), null)
                }, r.onStart = function(e) {
                    r.lastScrollTop || (r.dragging = !0, e instanceof MouseEvent ? r.startY = e.pageY : e instanceof TouchEvent && (r.startY = e.touches[0].pageY), r.currentY = r.startY, r._infScroll && (r._infScroll.style.willChange = "transform", r._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)"))
                }, r.onMove = function(e) {
                    r.dragging && (e instanceof MouseEvent ? r.currentY = e.pageY : e instanceof TouchEvent && (r.currentY = e.touches[0].pageY), r.currentY < r.startY || (r.currentY - r.startY >= Number(r.props.pullDownToRefreshThreshold) && r.setState({
                        pullToRefreshThresholdBreached: !0
                    }), r.currentY - r.startY > 1.5 * r.maxPullDownDistance || r._infScroll && (r._infScroll.style.overflow = "visible", r._infScroll.style.transform = "translate3d(0px, " + (r.currentY - r.startY) + "px, 0px)")))
                }, r.onEnd = function() {
                    r.startY = 0, r.currentY = 0, r.dragging = !1, r.state.pullToRefreshThresholdBreached && (r.props.refreshFunction && r.props.refreshFunction(), r.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame((function() {
                        r._infScroll && (r._infScroll.style.overflow = "auto", r._infScroll.style.transform = "none", r._infScroll.style.willChange = "none")
                    }))
                }, r.onScrollListener = function(e) {
                    "function" == typeof r.props.onScroll && setTimeout((function() {
                        return r.props.onScroll && r.props.onScroll(e)
                    }), 0);
                    var t = r.props.height || r._scrollableNode ? e.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    r.actionTriggered || ((r.props.inverse ? r.isElementAtTop(t, r.props.scrollThreshold) : r.isElementAtBottom(t, r.props.scrollThreshold)) && r.props.hasMore && (r.actionTriggered = !0, r.setState({
                        showLoader: !0
                    }), r.props.next && r.props.next()), r.lastScrollTop = t.scrollTop)
                }, r.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, r.throttledOnScrollListener = function(e, t, r, n) {
                    var o, a = !1,
                        i = 0;

                    function s() {
                        o && clearTimeout(o)
                    }

                    function l() {
                        var l = this,
                            c = Date.now() - i,
                            u = arguments;

                        function d() {
                            i = Date.now(), r.apply(l, u)
                        }

                        function f() {
                            o = void 0
                        }
                        a || (n && !o && d(), s(), void 0 === n && c > e ? d() : !0 !== t && (o = setTimeout(n ? f : d, void 0 === n ? e - c : e)))
                    }
                    return "boolean" != typeof t && (n = r, r = t, t = void 0), l.cancel = function() {
                        s(), a = !0
                    }, l
                }(150, r.onScrollListener).bind(r), r.onStart = r.onStart.bind(r), r.onMove = r.onMove.bind(r), r.onEnd = r.onEnd.bind(r), r
            }
            return function(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }(r, e), r.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength) throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener("scroll", this.throttledOnScrollListener), "number" == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener("touchstart", this.onStart), this.el.addEventListener("touchmove", this.onMove), this.el.addEventListener("touchend", this.onEnd), this.el.addEventListener("mousedown", this.onStart), this.el.addEventListener("mousemove", this.onMove), this.el.addEventListener("mouseup", this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), "function" != typeof this.props.refreshFunction)) throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')
            }, r.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener("scroll", this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener("touchstart", this.onStart), this.el.removeEventListener("touchmove", this.onMove), this.el.removeEventListener("touchend", this.onEnd), this.el.removeEventListener("mousedown", this.onStart), this.el.removeEventListener("mousemove", this.onMove), this.el.removeEventListener("mouseup", this.onEnd)))
            }, r.prototype.UNSAFE_componentWillReceiveProps = function(e) {
                this.props.dataLength !== e.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }))
            }, r.prototype.isElementAtTop = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = d(t);
                return n.unit === l ? e.scrollTop <= n.value + r - e.scrollHeight + 1 || 0 === e.scrollTop : e.scrollTop <= n.value / 100 + r - e.scrollHeight + 1 || 0 === e.scrollTop
            }, r.prototype.isElementAtBottom = function(e, t) {
                void 0 === t && (t = .8);
                var r = e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                    n = d(t);
                return n.unit === l ? e.scrollTop + r >= e.scrollHeight - n.value : e.scrollTop + r >= n.value / 100 * e.scrollHeight
            }, r.prototype.render = function() {
                var e = this,
                    r = s({
                        height: this.props.height || "auto",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch"
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: "auto"
                    } : {};
                return t(a).createElement("div", {
                    style: o,
                    className: "infinite-scroll-component__outerdiv"
                }, t(a).createElement("div", {
                    className: "infinite-scroll-component " + (this.props.className || ""),
                    ref: function(t) {
                        return e._infScroll = t
                    },
                    style: r
                }, this.props.pullDownToRefresh && t(a).createElement("div", {
                    style: {
                        position: "relative"
                    },
                    ref: function(t) {
                        return e._pullDown = t
                    }
                }, t(a).createElement("div", {
                    style: {
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage))
            }, r
        }(a.Component),
        p = f
})), r.register("7c9vD", (function(t, r) {
    e(t.exports, "getListOfLanguages", (function() {
        return o
    })), e(t.exports, "getLanguageKey", (function() {
        return a
    })), e(t.exports, "getLanguageName", (function() {
        return i
    }));
    const n = {
            en: "English",
            af: "Afrikaans",
            sq: "Albanian",
            am: "Amharic",
            ar: "Arabic",
            hy: "Armenian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bs: "Bosnian",
            bg: "Bulgarian",
            ca: "Catalan",
            ceb: "Cebuano",
            ny: "Chichewa",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            co: "Corsican",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            eo: "Esperanto",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            fy: "Frisian",
            gl: "Galician",
            ka: "Georgian",
            de: "German",
            el: "Greek",
            gu: "Gujarati",
            ht: "Haitian Creole",
            ha: "Hausa",
            haw: "Hawaiian",
            iw: "Hebrew",
            hi: "Hindi",
            hmn: "Hmong",
            hu: "Hungarian",
            is: "Icelandic",
            ig: "Igbo",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            jw: "Javanese",
            kn: "Kannada",
            kk: "Kazakh",
            km: "Khmer",
            ko: "Korean",
            ku: "Kurdish (Kurmanji)",
            ky: "Kyrgyz",
            lo: "Lao",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "Macedonian",
            mg: "Malagasy",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mn: "Mongolian",
            my: "Myanmar (Burmese)",
            ne: "Nepali",
            no: "Norwegian",
            ps: "Pashto",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ma: "Punjabi",
            ro: "Romanian",
            ru: "Russian",
            sm: "Samoan",
            gd: "Scots Gaelic",
            sr: "Serbian",
            st: "Sesotho",
            sn: "Shona",
            sd: "Sindhi",
            si: "Sinhala",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somali",
            es: "Spanish",
            su: "Sundanese",
            sw: "Swahili",
            sv: "Swedish",
            tg: "Tajik",
            ta: "Tamil",
            te: "Telugu",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            ur: "Urdu",
            uz: "Uzbek",
            vi: "Vietnamese",
            cy: "Welsh",
            xh: "Xhosa",
            yi: "Yiddish",
            yo: "Yoruba",
            zu: "Zulu"
        },
        o = () => Object.keys(n).map((e => n[e])),
        a = e => Object.keys(n).filter((t => n[t] === e))[0],
        i = e => n[e]
})), r.register("lmFTK", (function(t, n) {
    e(t.exports, "SortOptions", (function() {
        return b
    })), e(t.exports, "default", (function() {
        return S
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("93yIm"),
        s = r("b9Zw0"),
        l = r("la5Qa"),
        c = r("lqzWa"),
        u = r("44D8I"),
        d = r("7c9vD"),
        f = r("69SUA"),
        p = r("fetBE"),
        h = r("jIPHX");
    let g, m, v = e => e;
    const y = a.default.div(g || (g = v`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${0};
  font-family: ${0};
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`), f.FontWeights.Bold, f.Fonts.SFPro),
        x = (0, a.default)(l.default).attrs({
            placement: "bottomLeft",
            trigger: "click",
            overlayStyle: {
                width: 220
            }
        })(m || (m = v``));
    let b;
    var w;
    (w = b || (b = {})).relevant = "relevant", w.recent = "recent";
    var S = e => (0, o.jsxs)("div", {
        className: "maxWidth",
        style: {
            borderBottom: e.showFilters ? "1px solid #e8e8e8" : "",
            background: "white",
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [(0, o.jsx)(s.default.Search, {
            placeholder: "Search for kits...",
            onSearch: e.onSearch,
            size: "large",
            enterButton: !0,
            autoFocus: !0,
            style: {
                flex: 1
            },
            loading: e.loading,
            value: e.searchQuery,
            onChange: t => e.onUpdateSearchQuery(t.target.value)
        }), (0, o.jsxs)("div", {
            style: {
                marginTop: 13,
                visibility: e.showFilters ? "visible" : "hidden"
            },
            children: [(0, o.jsx)(x, {
                content: (0, o.jsxs)("div", {
                    className: "maxWidth",
                    children: [(0, o.jsx)(y, {
                        children: "Language:"
                    }), (0, o.jsx)(c.default, {
                        showSearch: !0,
                        allowClear: !0,
                        placeholder: "All Languages",
                        className: "maxWidth",
                        value: e.language,
                        onChange: t => e.onLanguageSelected(t),
                        children: [...(0, d.getListOfLanguages)()].map((e => (0, o.jsx)(c.default.Option, {
                            value: e,
                            children: e
                        }, e)))
                    }), (0, o.jsx)(y, {
                        style: {
                            marginTop: 12
                        },
                        children: "Subject:"
                    }), (0, o.jsx)(c.default, {
                        showSearch: !0,
                        allowClear: !0,
                        placeholder: "All Subjects",
                        className: "maxWidth",
                        value: e.subject,
                        onChange: t => e.onSubjectSelected(t),
                        children: [...u.optionsForAreaOfExpertise].map((e => (0, o.jsx)(c.default.Option, {
                            value: e,
                            children: e
                        }, e)))
                    })]
                }),
                children: (0, o.jsx)(i.default, {
                    style: {
                        marginRight: 12
                    },
                    icon: (0, o.jsx)(p.default, {}),
                    size: "small",
                    type: e.language || e.subject ? "primary" : "default",
                    children: "Filter"
                })
            }), (0, o.jsx)(x, {
                content: (0, o.jsxs)("div", {
                    className: "maxWidth",
                    children: [(0, o.jsx)(y, {
                        children: "Sort By:"
                    }), (0, o.jsxs)(c.default, {
                        className: "maxWidth",
                        value: e.sort,
                        onChange: t => e.onSortSelected(t),
                        children: [(0, o.jsx)(c.default.Option, {
                            value: b.relevant,
                            children: "Most Relevant"
                        }), (0, o.jsx)(c.default.Option, {
                            value: b.recent,
                            children: "Most Recent"
                        })]
                    })]
                }),
                children: (0, o.jsx)(i.default, {
                    icon: (0, o.jsx)(h.default, {}),
                    size: "small",
                    children: "Sort"
                })
            })]
        })]
    })
})), r.register("la5Qa", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = r("fe1on"),
        i = r("fywoC"),
        s = r("4gMdJ"),
        l = r("e4KJZ"),
        c = r("1wAd6"),
        u = r("8pkwz"),
        d = r("72v7R"),
        f = r("bwoVE"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = e => {
            let {
                title: t,
                content: r,
                prefixCls: n
            } = e;
            return t || r ? i.createElement(i.Fragment, null, t && i.createElement("div", {
                className: `${n}-title`
            }, (0, c.getRenderPropValue)(t)), i.createElement("div", {
                className: `${n}-inner-content`
            }, (0, c.getRenderPropValue)(r))) : null
        },
        g = i.forwardRef(((e, r) => {
            var n, o;
            const {
                prefixCls: c,
                title: d,
                content: g,
                overlayClassName: m,
                placement: v = "top",
                trigger: y = "hover",
                mouseEnterDelay: x = .1,
                mouseLeaveDelay: b = .1,
                overlayStyle: w = {},
                arrowPointAtCenter: S,
                arrow: C
            } = e, k = p(e, ["prefixCls", "title", "content", "overlayClassName", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "arrowPointAtCenter", "arrow"]), {
                getPrefixCls: E
            } = i.useContext(s.ConfigContext), O = E("popover", c), [j, N] = (0, f.default)(O), M = E(), T = t(a)(m, N), P = null !== (o = null !== (n = "boolean" != typeof C && (null == C ? void 0 : C.arrowPointAtCenter)) && void 0 !== n ? n : S) && void 0 !== o && o, L = null != C ? C : {
                arrowPointAtCenter: P
            };
            return j(i.createElement(l.default, Object.assign({
                placement: v,
                arrow: L,
                trigger: y,
                mouseEnterDelay: x,
                mouseLeaveDelay: b,
                overlayStyle: w
            }, k, {
                prefixCls: O,
                overlayClassName: T,
                ref: r,
                overlay: i.createElement(h, {
                    prefixCls: O,
                    title: d,
                    content: g
                }),
                transitionName: (0, u.getTransitionName)(M, "zoom-big", k.transitionName),
                "data-popover-inject": !0
            })))
        }));
    g._InternalPanelDoNotUseOrYouWillBeFired = d.default;
    var m = g
})), r.register("1wAd6", (function(t, r) {
    e(t.exports, "getRenderPropValue", (function() {
        return n
    }));
    const n = e => e ? "function" == typeof e ? e() : e : null
})), r.register("72v7R", (function(n, o) {
    e(n.exports, "getOverlay", (function() {
        return f
    }), (function(e) {
        return f = e
    })), e(n.exports, "RawPurePanel", (function() {
        return p
    }), (function(e) {
        return p = e
    })), e(n.exports, "default", (function() {
        return h
    }), (function(e) {
        return h = e
    }));
    var a = r("fywoC"),
        i = r("fe1on"),
        s = r("jUIBx"),
        l = r("4gMdJ"),
        c = r("bwoVE"),
        u = r("1wAd6"),
        d = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const f = (e, t, r) => {
        if (t || r) return a.createElement(a.Fragment, null, t && a.createElement("div", {
            className: `${e}-title`
        }, (0, u.getRenderPropValue)(t)), a.createElement("div", {
            className: `${e}-inner-content`
        }, (0, u.getRenderPropValue)(r)))
    };

    function p(e) {
        const {
            hashId: r,
            prefixCls: n,
            className: o,
            style: l,
            placement: c = "top",
            title: u,
            content: d,
            children: p
        } = e;
        return a.createElement("div", {
            className: t(i)(r, n, `${n}-pure`, `${n}-placement-${c}`, o),
            style: l
        }, a.createElement(s.Popup, Object.assign({}, e, {
            className: r,
            prefixCls: n
        }), p || f(n, u, d)))
    }

    function h(e) {
        const {
            prefixCls: t
        } = e, r = d(e, ["prefixCls"]), {
            getPrefixCls: n
        } = a.useContext(l.ConfigContext), o = n("popover", t), [i, s] = (0, c.default)(o);
        return i(a.createElement(p, Object.assign({}, r, {
            prefixCls: o,
            hashId: s
        })))
    }
})), r.register("bwoVE", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("fvpzM"),
        a = r("huF4L"),
        i = r("1QMe3"),
        s = r("c66eu"),
        l = r("kCC5O"),
        c = r("1r9lV");
    const u = e => {
            const {
                componentCls: t,
                popoverBg: r,
                popoverColor: n,
                width: o,
                fontWeightStrong: a,
                popoverPadding: i,
                boxShadowSecondary: s,
                colorTextHeading: u,
                borderRadiusLG: d,
                zIndexPopup: f,
                marginXS: p,
                colorBgElevated: h
            } = e;
            return [{
                [t]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    position: "absolute",
                    top: 0,
                    left: {
                        _skip_check_: !0,
                        value: 0
                    },
                    zIndex: f,
                    fontWeight: "normal",
                    whiteSpace: "normal",
                    textAlign: "start",
                    cursor: "auto",
                    userSelect: "text",
                    "--antd-arrow-background-color": h,
                    "&-rtl": {
                        direction: "rtl"
                    },
                    "&-hidden": {
                        display: "none"
                    },
                    [`${t}-content`]: {
                        position: "relative"
                    },
                    [`${t}-inner`]: {
                        backgroundColor: r,
                        backgroundClip: "padding-box",
                        borderRadius: d,
                        boxShadow: s,
                        padding: i
                    },
                    [`${t}-title`]: {
                        minWidth: o,
                        marginBottom: p,
                        color: u,
                        fontWeight: a
                    },
                    [`${t}-inner-content`]: {
                        color: n
                    }
                })
            }, (0, c.default)(e, {
                colorBg: "var(--antd-arrow-background-color)"
            }), {
                [`${t}-pure`]: {
                    position: "relative",
                    maxWidth: "none",
                    [`${t}-content`]: {
                        display: "inline-block"
                    }
                }
            }]
        },
        d = e => {
            const {
                componentCls: t
            } = e;
            return {
                [t]: s.PresetColors.map((r => {
                    const n = e[`${r}-6`];
                    return {
                        [`&${t}-${r}`]: {
                            "--antd-arrow-background-color": n,
                            [`${t}-inner`]: {
                                backgroundColor: n
                            },
                            [`${t}-arrow`]: {
                                background: "transparent"
                            }
                        }
                    }
                }))
            }
        },
        f = e => {
            const {
                componentCls: t,
                lineWidth: r,
                lineType: n,
                colorSplit: o,
                paddingSM: a,
                controlHeight: i,
                fontSize: s,
                lineHeight: l,
                padding: c
            } = e, u = i - Math.round(s * l);
            return {
                [t]: {
                    [`${t}-inner`]: {
                        padding: 0
                    },
                    [`${t}-title`]: {
                        margin: 0,
                        padding: `${u/2}px ${c}px ${u/2-r}px`,
                        borderBottom: `${r}px ${n} ${o}`
                    },
                    [`${t}-inner-content`]: {
                        padding: `${a}px ${c}px`
                    }
                }
            }
        };
    var p = (0, a.default)("Popover", (e => {
        const {
            colorBgElevated: t,
            colorText: r,
            wireframe: n
        } = e, a = (0, i.merge)(e, {
            popoverBg: t,
            popoverColor: r,
            popoverPadding: 12
        });
        return [u(a), d(a), n && f(a), (0, o.initZoomMotion)(a, "zoom-big")]
    }), (e => {
        let {
            zIndexPopupBase: t
        } = e;
        return {
            zIndexPopup: t + 30,
            width: 177
        }
    }))
})), r.register("44D8I", (function(t, n) {
    e(t.exports, "optionsForAreaOfExpertise", (function() {
        return h
    })), e(t.exports, "default", (function() {
        return m
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("dEUk2"),
        s = r("fC6cp"),
        l = r("lqzWa"),
        c = r("7abSH"),
        u = r("bcnSK"),
        d = r("g4NpA"),
        f = r("lLJEv"),
        p = r("b1oE9");
    const h = ["STEM", "Arts", "Communications", "Computer Science", "Counselor", "Deaf Education", "World Languages", "Speech and Language", "English/Language Arts", "American Sign Language", "Science", "Special Education", "Gifted and Talented", "Technology", "Engineering", "Math", "History and Social Studies", "Health/Physical Education", "English Language Learner (ELL)", "Family & Consumer Science (FACS)", "Homeschool", "School Administrator", "Librarian", "Technology/Instructional Coach", "Other"].sort(),
        g = ["Pre-K", "Elementary School", "Middle School", "High School", "Post High School", "Other School", "Not Using For School", "Other"];
    var m = () => {
        const {
            login: e
        } = a.useContext(u.default), [t, r] = a.useState(""), [n, m] = a.useState(""), v = !t || !n;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(i.Title, {
                children: "💡 Area of Expertise"
            }), (0, o.jsx)(l.default, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: e => r(e),
                optionFilterProp: "label",
                showSearch: !0,
                options: h.map((e => ({
                    value: e,
                    label: e
                })))
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsx)(i.Title, {
                children: "🎂 Grade Level"
            }), (0, o.jsx)(l.default, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: e => m(e),
                optionFilterProp: "label",
                showSearch: !0,
                options: g.map((e => ({
                    value: e,
                    label: e
                })))
            }), (0, o.jsx)(c.default, {
                size: "large",
                style: {
                    marginTop: 10
                },
                disabled: v,
                onClick: () => {
                    v || (e.areaOfExpertise = t, e.gradeLevel = n, e.informationNeeded.replace(e.informationNeeded.filter((e => e !== d.informationTypes.areaOfExpertise && e !== d.informationTypes.gradeLevel))))
                },
                children: "Continue"
            }), (0, o.jsx)(s.default, {}), (0, o.jsxs)("div", {
                style: {
                    textAlign: "center"
                },
                children: ["By continuing, you agree to our", " ", (0, o.jsx)("a", {
                    href: p.PRIVACY_POLICY,
                    target: "_blank",
                    children: "Privacy Policy"
                }), " ", "and", " ", (0, o.jsx)("a", {
                    href: p.TERMS_OF_SERVICE,
                    target: "_blank",
                    children: "Terms Of Service"
                }), "."]
            }), (0, o.jsx)("div", {
                style: {
                    height: 25
                }
            }), (0, o.jsx)(f.default, {
                link: "https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52"
            })]
        })
    }
})), r.register("dEUk2", (function(t, n) {
    e(t.exports, "MAX_LENGTH_FIRST_NAME", (function() {
        return g
    })), e(t.exports, "MAX_LENGTH_LAST_NAME", (function() {
        return m
    })), e(t.exports, "Title", (function() {
        return v
    })), e(t.exports, "default", (function() {
        return x
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("bcnSK"),
        s = r("69SUA"),
        l = r("lKmIF"),
        c = r("fC6cp"),
        u = r("b9Zw0"),
        d = r("7abSH"),
        f = r("g4NpA"),
        p = r("lLJEv"),
        h = r("9BRL0");
    const g = 20,
        m = 25,
        v = e => (0, o.jsx)("div", {
            style: {
                fontFamily: s.Fonts.SFPro,
                fontWeight: s.FontWeights.Bold,
                color: l.default.Black,
                fontSize: 18
            },
            children: e.children
        }),
        y = {
            width: "100%",
            display: "flex",
            marginTop: 0,
            minHeight: 0
        };
    var x = () => {
        const {
            login: e
        } = a.useContext(i.default), [t, r] = a.useState(e.firstName), [n, s] = a.useState(e.lastName), [l, x] = a.useState(e.password), b = () => {
            let r = !0;
            return e.informationNeeded.includes(f.informationTypes.firstName) && (t || (r = !1)), e.informationNeeded.includes(f.informationTypes.lastName) && (n || (r = !1)), e.informationNeeded.includes(f.informationTypes.accountPassword) && (!l || l.length < 6) && (r = !1), r
        }, w = () => {
            b() && (t && (e.firstName = t), n && (e.lastName = n), l && (e.password = l), e.informationNeeded.replace(e.informationNeeded.filter((e => e !== f.informationTypes.firstName && e !== f.informationTypes.lastName && e !== f.informationTypes.accountPassword))))
        }, S = e.accountType === h.default.student;
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(v, {
                children: "First Name"
            }), (0, o.jsx)(u.default, {
                maxLength: g,
                style: y,
                size: "large",
                placeholder: "First Name here...",
                onChange: e => r(e.target.value),
                onPressEnter: w,
                autoFocus: !0
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), (0, o.jsxs)(v, {
                children: ["Last ", S ? "Initial" : "Name"]
            }), (0, o.jsx)(u.default, {
                maxLength: S ? 1 : m,
                style: y,
                size: "large",
                placeholder: `Last ${S?"Initial":"Name"} here...`,
                onChange: e => s(e.target.value),
                onPressEnter: w
            }), e.informationNeeded.includes(f.informationTypes.accountPassword) && (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(c.default, {}), (0, o.jsx)(v, {
                    children: "Password"
                }), (0, o.jsx)("div", {
                    style: {
                        fontSize: 12,
                        marginTop: -5,
                        marginBottom: 4
                    },
                    children: "Must contain at least 6 characters"
                }), (0, o.jsx)(u.default.Password, {
                    style: y,
                    onChange: e => x(e.target.value),
                    placeholder: "Password here...",
                    size: "large",
                    maxLength: 96,
                    onPressEnter: w
                })]
            }), (0, o.jsx)(c.default, {}), (0, o.jsx)(d.default, {
                disabled: !b(),
                onClick: w,
                style: {
                    width: "100%"
                },
                size: "large",
                children: "Continue"
            }), (0, o.jsx)("div", {
                style: {
                    height: 10
                }
            }), !S && (0, o.jsx)(p.default, {
                link: "https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061"
            })]
        })
    }
})), r.register("bcnSK", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("bSGy0");
    var i = o.createContext(a.default)
})), r.register("bSGy0", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("g4NpA"),
        a = r("lvpm8");
    var i = {
        login: new(0, o.default),
        navigation: new(0, a.default)
    }
})), r.register("g4NpA", (function(t, n) {
    e(t.exports, "informationTypes", (function() {
        return i
    })), e(t.exports, "default", (function() {
        return k
    }));
    var o = r("kHqmx"),
        a = r("4MuSt");
    const i = {
            email: "EMAIL",
            password: "PASSWORD",
            accountPassword: "ACCOUNT_PASSWORD",
            firstName: "FIRST_NAME",
            lastName: "LAST_NAME",
            accountType: "ACCOUNT_TYPE",
            country: "COUNTRY",
            areaOfExpertise: "AREA_OF_EXPERTISE",
            gradeLevel: "GRADE_LEVEL",
            organization: "ORGANIZATION",
            acceptedLatestPolicies: "ACCEPTED_LATEST_POLICIES",
            schoolId: "SCHOOL_ID",
            districtId: "DISTRICT_ID"
        },
        s = {
            userExists: !1,
            email: "",
            accountType: null,
            googleToken: "",
            firstName: "",
            lastName: "",
            password: "",
            schoolId: "",
            districtId: "",
            country: "",
            areaOfExpertise: "",
            gradeLevel: "",
            organization: "",
            acceptsLatestPolicies: !1,
            authenticated: !1
        },
        {
            userExists: l,
            email: c,
            accountType: u,
            googleToken: d,
            firstName: f,
            lastName: p,
            password: h,
            schoolId: g,
            districtId: m,
            country: v,
            areaOfExpertise: y,
            gradeLevel: x,
            organization: b,
            acceptsLatestPolicies: w,
            authenticated: S
        } = s;
    class C {
        constructor() {
            this.userExists = l, this.email = c, this.accountType = u, this.googleToken = d, this.firstName = f, this.lastName = p, this.password = h, this.schoolId = g, this.districtId = m, this.country = v, this.areaOfExpertise = y, this.gradeLevel = x, this.organization = b, this.acceptsLatestPolicies = w, this.authenticated = S, this.informationNeeded = a.observable.array([i.email]), this.reset = () => {
                Object.keys(s).forEach((e => this[e] = s[e])), this.informationNeeded.replace([i.email])
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], C.prototype, "userExists", void 0), (0, o.__decorate)([a.observable], C.prototype, "email", void 0), (0, o.__decorate)([a.observable], C.prototype, "accountType", void 0), (0, o.__decorate)([a.observable], C.prototype, "googleToken", void 0), (0, o.__decorate)([a.observable], C.prototype, "firstName", void 0), (0, o.__decorate)([a.observable], C.prototype, "lastName", void 0), (0, o.__decorate)([a.observable], C.prototype, "password", void 0), (0, o.__decorate)([a.observable], C.prototype, "schoolId", void 0), (0, o.__decorate)([a.observable], C.prototype, "districtId", void 0), (0, o.__decorate)([a.observable], C.prototype, "country", void 0), (0, o.__decorate)([a.observable], C.prototype, "areaOfExpertise", void 0), (0, o.__decorate)([a.observable], C.prototype, "gradeLevel", void 0), (0, o.__decorate)([a.observable], C.prototype, "organization", void 0), (0, o.__decorate)([a.observable], C.prototype, "acceptsLatestPolicies", void 0), (0, o.__decorate)([a.observable], C.prototype, "authenticated", void 0), (0, o.__decorate)([a.observable], C.prototype, "informationNeeded", void 0), (0, o.__decorate)([a.action], C.prototype, "reset", void 0);
    var k = C
})), r.register("lvpm8", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("kHqmx"),
        a = r("4MuSt");
    const i = {
            currentStage: r("9ZLc2").default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: "",
            classJoiningId: "",
            classJoiningName: "",
            classJoiningTeacherName: ""
        },
        {
            currentStage: s,
            emailSignInBlocked: l,
            creatingAccount: c,
            loggingIn: u,
            updatingAccountInformation: d,
            loginError: f,
            redirectUri: p,
            classJoiningId: h,
            classJoiningName: g,
            classJoiningTeacherName: m
        } = i;
    class v {
        constructor() {
            this.currentStage = s, this.emailSignInBlocked = l, this.creatingAccount = c, this.loggingIn = u, this.updatingAccountInformation = d, this.loginError = f, this.redirectUri = p, this.classJoiningId = h, this.classJoiningName = g, this.classJoiningTeacherName = m, this.reset = () => {
                Object.keys(i).forEach((e => this[e] = i[e]))
            }, (0, a.makeObservable)(this)
        }
    }(0, o.__decorate)([a.observable], v.prototype, "currentStage", void 0), (0, o.__decorate)([a.observable], v.prototype, "emailSignInBlocked", void 0), (0, o.__decorate)([a.observable], v.prototype, "creatingAccount", void 0), (0, o.__decorate)([a.observable], v.prototype, "loggingIn", void 0), (0, o.__decorate)([a.observable], v.prototype, "updatingAccountInformation", void 0), (0, o.__decorate)([a.observable], v.prototype, "loginError", void 0), (0, o.__decorate)([a.observable], v.prototype, "redirectUri", void 0), (0, o.__decorate)([a.observable], v.prototype, "classJoiningId", void 0), (0, o.__decorate)([a.observable], v.prototype, "classJoiningName", void 0), (0, o.__decorate)([a.observable], v.prototype, "classJoiningTeacherName", void 0), (0, o.__decorate)([a.action], v.prototype, "reset", void 0);
    var y = v
})), r.register("9ZLc2", (function(t, r) {
    let n;
    var o;
    e(t.exports, "default", (function() {
        return a
    })), (o = n || (n = {})).email = "email", o.password = "password", o.accountType = "accountType", o.studentSpecificInfo = "studentSpecificInfo", o.nameAndPassword = "nameAndPassword", o.school = "school", o.educatorSpecificInfo = "educatorSpecificInfo", o.nonSchoolSpecificInfo = "nonSchoolSpecificInfo", o.acceptPolicies = "acceptPolicies", o.verifyClass = "verifyClass";
    var a = n
})), r.register("7abSH", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("lpEVe"),
        i = r("93yIm");
    var s = (0, a.observer)((e => (0, o.jsx)(i.default, {
        disabled: e.disabled,
        size: e.size || "middle",
        type: "primary",
        onClick: e.onClick,
        style: Object.assign({
            width: "100%"
        }, e.style),
        loading: e.loading,
        children: e.children
    })))
})), r.register("lLJEv", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("bNqCy");
    var i = e => (0, o.jsxs)("div", {
        style: {
            justifyContent: "space-between"
        },
        className: "flex maxWidth",
        children: [(0, o.jsx)("div", {}), (0, o.jsx)(a.default, {
            link: e.link
        })]
    })
})), r.register("bNqCy", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("d55E8"),
        i = r("93yIm"),
        s = r("e4KJZ");
    var l = e => (0, o.jsx)(s.default, {
        title: "Learn more on why we collect this data",
        children: (0, o.jsx)(i.default, {
            style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            },
            shape: "circle",
            icon: (0, o.jsx)(a.default, {}),
            href: e.link || "",
            target: "_blank"
        })
    })
})), r.register("d55E8", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("l6faa"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LockOutlined";
    var c = a.forwardRef(l)
})), r.register("l6faa", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"
                }
            }]
        },
        name: "lock",
        theme: "outlined"
    }
})), r.register("9BRL0", (function(t, r) {
    let n;
    var o;
    e(t.exports, "default", (function() {
        return a
    })), (o = n || (n = {})).educator = "educator", o.student = "student", o.guardian = "guardian", o.nonSchool = "nonSchool";
    var a = n
})), r.register("fetBE", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("d22pb"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "FilterOutlined";
    var c = a.forwardRef(l)
})), r.register("d22pb", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"
                }
            }]
        },
        name: "filter",
        theme: "outlined"
    }
})), r.register("jIPHX", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("8rWtt"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "SortDescendingOutlined";
    var c = a.forwardRef(l)
})), r.register("8rWtt", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M839.6 433.8L749 150.5a9.24 9.24 0 00-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 00-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 00-9.2-9.3zM310.3 167.1a8 8 0 00-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z"
                }
            }]
        },
        name: "sort-descending",
        theme: "outlined"
    }
})), r.register("lJSKF", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("kQLx6");
    var i = e => {
        const t = (0, a.use100vh)();
        return (0, o.jsx)("div", {
            style: {
                height: t,
                width: "100%"
            },
            className: e.className,
            children: e.children
        })
    }
})), r.register("kQLx6", (function(n, o) {
    e(n.exports, "use100vh", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fywoC"),
        i = function() {
            return i = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, i.apply(this, arguments)
        },
        s = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        },
        l = !1,
        c = (0, a.forwardRef)((function(e, r) {
            var n = e.style,
                o = s(e, ["style"]),
                c = u();
            !l && (null == n ? void 0 : n.height) && (l = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
            var d = i(i({}, n), {
                height: c ? c + "px" : "100vh"
            });
            return t(a).createElement("div", i({
                ref: r,
                style: d
            }, o))
        }));
    c.displayName = "Div100vh";

    function u() {
        var e = (0, a.useState)(d),
            t = e[0],
            r = e[1],
            n = function() {
                var e = (0, a.useState)(!1),
                    t = e[0],
                    r = e[1];
                return (0, a.useEffect)((function() {
                    f() && r(!0)
                }), []), t
            }();
        return (0, a.useEffect)((function() {
            if (n) return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                };

            function e() {
                var e = d();
                r(e)
            }
        }), [n]), n ? t : null
    }

    function d() {
        return f() ? window.innerHeight : null
    }

    function f() {
        return "undefined" != typeof window && "undefined" != typeof document
    }
})), r.register("90UiM", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("7WFzL"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CopyOutlined";
    var c = a.forwardRef(l)
})), r.register("7WFzL", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"
                }
            }]
        },
        name: "copy",
        theme: "outlined"
    }
})), r.register("9g8O0", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ewhoP"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DeleteOutlined";
    var c = a.forwardRef(l)
})), r.register("ewhoP", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
                }
            }]
        },
        name: "delete",
        theme: "outlined"
    }
})), r.register("83ivs", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("6tWM4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "EditOutlined";
    var c = a.forwardRef(l)
})), r.register("6tWM4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"
                }
            }]
        },
        name: "edit",
        theme: "outlined"
    }
})), r.register("5WQCk", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("wzfg8"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "PlayCircleOutlined";
    var c = a.forwardRef(l)
})), r.register("wzfg8", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"
                }
            }]
        },
        name: "play-circle",
        theme: "outlined"
    }
})), r.register("kuEJ4", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("iI4DW"),
        a = r("fywoC"),
        i = r("4gMdJ");

    function s(e, t, r) {
        return function(n) {
            const {
                prefixCls: s,
                style: l
            } = n, c = a.useRef(null), [u, d] = a.useState(0), [f, p] = a.useState(0), [h, g] = (0, o.default)(!1, {
                value: n.open
            }), {
                getPrefixCls: m
            } = a.useContext(i.ConfigContext), v = m(t || "select", s);
            return a.useEffect((() => {
                if (g(!0), "undefined" != typeof ResizeObserver) {
                    const e = new ResizeObserver((e => {
                            const t = e[0].target;
                            d(t.offsetHeight + 8), p(t.offsetWidth)
                        })),
                        t = setInterval((() => {
                            var n;
                            const o = r ? `.${r(v)}` : `.${v}-dropdown`,
                                a = null === (n = c.current) || void 0 === n ? void 0 : n.querySelector(o);
                            a && (clearInterval(t), e.observe(a))
                        }), 10);
                    return () => {
                        clearInterval(t), e.disconnect()
                    }
                }
            }), []), a.createElement(i.default, {
                theme: {
                    token: {
                        motionDurationFast: "0.01s",
                        motionDurationMid: "0.01s",
                        motionDurationSlow: "0.01s"
                    }
                }
            }, a.createElement("div", {
                ref: c,
                style: {
                    paddingBottom: u,
                    position: "relative",
                    width: "fit-content",
                    minWidth: f
                }
            }, a.createElement(e, Object.assign({}, n, {
                style: Object.assign(Object.assign({}, l), {
                    margin: 0
                }),
                open: h,
                visible: h,
                getPopupContainer: () => c.current
            }))))
        }
    }
})), r.register("hacAX", (function(t, n) {
    e(t.exports, "initMoveMotion", (function() {
        return p
    }));
    var o = r("lt5sb"),
        a = r("aWAHQ");
    const i = new(0, o.Keyframes)("antMoveDownIn", {
            "0%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        s = new(0, o.Keyframes)("antMoveDownOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(0, 100%, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        l = new(0, o.Keyframes)("antMoveLeftIn", {
            "0%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        c = new(0, o.Keyframes)("antMoveLeftOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(-100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        u = new(0, o.Keyframes)("antMoveRightIn", {
            "0%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            }
        }),
        d = new(0, o.Keyframes)("antMoveRightOut", {
            "0%": {
                transform: "translate3d(0, 0, 0)",
                transformOrigin: "0 0",
                opacity: 1
            },
            "100%": {
                transform: "translate3d(100%, 0, 0)",
                transformOrigin: "0 0",
                opacity: 0
            }
        }),
        f = {
            "move-up": {
                inKeyframes: new(0, o.Keyframes)("antMoveUpIn", {
                    "0%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    },
                    "100%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, o.Keyframes)("antMoveUpOut", {
                    "0%": {
                        transform: "translate3d(0, 0, 0)",
                        transformOrigin: "0 0",
                        opacity: 1
                    },
                    "100%": {
                        transform: "translate3d(0, -100%, 0)",
                        transformOrigin: "0 0",
                        opacity: 0
                    }
                })
            },
            "move-down": {
                inKeyframes: i,
                outKeyframes: s
            },
            "move-left": {
                inKeyframes: l,
                outKeyframes: c
            },
            "move-right": {
                inKeyframes: u,
                outKeyframes: d
            }
        },
        p = (e, t) => {
            const {
                antCls: r
            } = e, n = `${r}-${t}`, {
                inKeyframes: o,
                outKeyframes: i
            } = f[t];
            return [(0, a.initMotion)(n, o, i, e.motionDurationMid), {
                [`\n        ${n}-enter,\n        ${n}-appear\n      `]: {
                    opacity: 0,
                    animationTimingFunction: e.motionEaseOutCirc
                },
                [`${n}-leave`]: {
                    animationTimingFunction: e.motionEaseInOutCirc
                }
            }]
        }
})), r.register("i5Qjx", (function(n, o) {
    e(n.exports, "SpaceContext", (function() {
        return h
    }), (function(e) {
        return h = e
    })), e(n.exports, "default", (function() {
        return v
    }), (function(e) {
        return v = e
    }));
    var a = r("fe1on"),
        i = r("jyxW7"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("1eqVQ"),
        u = r("7yXSw"),
        d = r("c9Vcn"),
        f = r("5gjI2"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = s.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        g = {
            small: 8,
            middle: 16,
            large: 24
        };
    const m = e => {
        const {
            getPrefixCls: r,
            space: n,
            direction: o
        } = s.useContext(l.ConfigContext), {
            size: u = (null == n ? void 0 : n.size) || "small",
            align: m,
            className: v,
            rootClassName: y,
            children: x,
            direction: b = "horizontal",
            prefixCls: w,
            split: S,
            style: C,
            wrap: k = !1
        } = e, E = p(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap"]), O = (0, c.default)(), [j, N] = s.useMemo((() => (Array.isArray(u) ? u : [u, u]).map((e => function(e) {
            return "string" == typeof e ? g[e] : e || 0
        }(e)))), [u]), M = (0, i.default)(x, {
            keepEmpty: !0
        }), T = void 0 === m && "horizontal" === b ? "center" : m, P = r("space", w), [L, _] = (0, f.default)(P), z = t(a)(P, _, `${P}-${b}`, {
            [`${P}-rtl`]: "rtl" === o,
            [`${P}-align-${T}`]: T
        }, v, y), F = `${P}-item`, A = "rtl" === o ? "marginLeft" : "marginRight";
        let I = 0;
        const D = M.map(((e, t) => {
                null != e && (I = t);
                const r = e && e.key || `${F}-${t}`;
                return s.createElement(d.default, {
                    className: F,
                    key: r,
                    direction: b,
                    index: t,
                    marginDirection: A,
                    split: S,
                    wrap: k
                }, e)
            })),
            R = s.useMemo((() => ({
                horizontalSize: j,
                verticalSize: N,
                latestIndex: I,
                supportFlexGap: O
            })), [j, N, I, O]);
        if (0 === M.length) return null;
        const $ = {};
        return k && ($.flexWrap = "wrap", O || ($.marginBottom = -N)), O && ($.columnGap = j, $.rowGap = N), L(s.createElement("div", Object.assign({
            className: z,
            style: Object.assign(Object.assign({}, $), C)
        }, E), s.createElement(h.Provider, {
            value: R
        }, D)))
    };
    m.Compact = u.default;
    var v = m
})), r.register("1eqVQ", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("azMeL"),
        i = () => {
            const [e, t] = o.useState(!1);
            return o.useEffect((() => {
                t((0, a.detectFlexGapSupported)())
            }), []), e
        }
})), r.register("c9Vcn", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("fywoC"),
        a = r("i5Qjx");

    function i(e) {
        let {
            className: t,
            direction: r,
            index: n,
            marginDirection: i,
            children: s,
            split: l,
            wrap: c
        } = e;
        const {
            horizontalSize: u,
            verticalSize: d,
            latestIndex: f,
            supportFlexGap: p
        } = o.useContext(a.SpaceContext);
        let h = {};
        return p || ("vertical" === r ? n < f && (h = {
            marginBottom: u / (l ? 2 : 1)
        }) : h = Object.assign(Object.assign({}, n < f && {
            [i]: u / (l ? 2 : 1)
        }), c && {
            paddingBottom: d
        })), null == s ? null : o.createElement(o.Fragment, null, o.createElement("div", {
            className: t,
            style: h
        }, s), n < f && l && o.createElement("span", {
            className: `${t}-split`,
            style: h
        }, l))
    }
})), r.register("dhxiD", (function(e, t) {
    var n = r("1fK2g"),
        o = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
    e.exports = function(e, t) {
        var r, a, i, s, l, c, u = !1;
        t || (t = {}), r = t.debug || !1;
        try {
            if (i = n(), s = document.createRange(), l = document.getSelection(), (c = document.createElement("span")).textContent = e, c.ariaHidden = "true", c.style.all = "unset", c.style.position = "fixed", c.style.top = 0, c.style.clip = "rect(0, 0, 0, 0)", c.style.whiteSpace = "pre", c.style.webkitUserSelect = "text", c.style.MozUserSelect = "text", c.style.msUserSelect = "text", c.style.userSelect = "text", c.addEventListener("copy", (function(n) {
                    if (n.stopPropagation(), t.format)
                        if (n.preventDefault(), void 0 === n.clipboardData) {
                            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                            var a = o[t.format] || o.default;
                            window.clipboardData.setData(a, e)
                        } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
                    t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData))
                })), document.body.appendChild(c), s.selectNodeContents(c), l.addRange(s), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
            u = !0
        } catch (n) {
            r && console.error("unable to copy using execCommand: ", n), r && console.warn("trying IE specific stuff");
            try {
                window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0
            } catch (n) {
                r && console.error("unable to copy using clipboardData: ", n), r && console.error("falling back to prompt"), a = function(e) {
                    var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                    return e.replace(/#{\s*key\s*}/g, t)
                }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, e)
            }
        } finally {
            l && ("function" == typeof l.removeRange ? l.removeRange(s) : l.removeAllRanges()), c && document.body.removeChild(c), i()
        }
        return u
    }
})), r.register("1fK2g", (function(e, t) {
    e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
        }
        return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach((function(t) {
                    e.addRange(t)
                })), t && t.focus()
            }
    }
})), r.register("5g49A", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }), (function(e) {
        return m = e
    }));
    var a = r("legzE"),
        i = r("fe1on"),
        s = r("fywoC"),
        l = r("4gMdJ"),
        c = r("2iORQ"),
        u = r("eM84N"),
        d = r("8elTB"),
        f = r("jfXop"),
        p = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    const h = (e, r) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: d,
                style: h,
                children: g,
                icon: m,
                color: v,
                onClose: y,
                closeIcon: x,
                closable: b = !1
            } = e, w = p(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);
            const {
                getPrefixCls: S,
                direction: C
            } = s.useContext(l.ConfigContext), [k, E] = s.useState(!0);
            s.useEffect((() => {
                "visible" in w && E(w.visible)
            }), [w.visible]);
            const O = (0, c.isPresetColor)(v) || (0, c.isPresetStatusColor)(v),
                j = Object.assign({
                    backgroundColor: v && !O ? v : void 0
                }, h),
                N = S("tag", n),
                [M, T] = (0, f.default)(N),
                P = t(i)(N, {
                    [`${N}-${v}`]: O,
                    [`${N}-has-color`]: v && !O,
                    [`${N}-hidden`]: !k,
                    [`${N}-rtl`]: "rtl" === C
                }, o, d, T),
                L = e => {
                    e.stopPropagation(), null == y || y(e), e.defaultPrevented || E(!1)
                },
                _ = "function" == typeof w.onClick || g && "a" === g.type,
                z = m || null,
                F = z ? s.createElement(s.Fragment, null, z, s.createElement("span", null, g)) : g,
                A = s.createElement("span", Object.assign({}, w, {
                    ref: r,
                    className: P,
                    style: j
                }), F, b ? x ? s.createElement("span", {
                    className: `${N}-close-icon`,
                    onClick: L
                }, x) : s.createElement(a.default, {
                    className: `${N}-close-icon`,
                    onClick: L
                }) : null);
            return M(_ ? s.createElement(u.default, null, A) : A)
        },
        g = s.forwardRef(h);
    g.CheckableTag = d.default;
    var m = g
})), r.register("8elTB", (function(n, o) {
    e(n.exports, "default", (function() {
        return u
    }), (function(e) {
        return u = e
    }));
    var a = r("fe1on"),
        i = r("fywoC"),
        s = r("4gMdJ"),
        l = r("jfXop"),
        c = function(e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        };
    var u = e => {
        var {
            prefixCls: r,
            className: n,
            checked: o,
            onChange: u,
            onClick: d
        } = e, f = c(e, ["prefixCls", "className", "checked", "onChange", "onClick"]);
        const {
            getPrefixCls: p
        } = i.useContext(s.ConfigContext), h = p("tag", r), [g, m] = (0, l.default)(h), v = t(a)(h, {
            [`${h}-checkable`]: !0,
            [`${h}-checkable-checked`]: o
        }, n, m);
        return g(i.createElement("span", Object.assign({}, f, {
            className: v,
            onClick: e => {
                null == u || u(!o), null == d || d(e)
            }
        })))
    }
})), r.register("jfXop", (function(t, n) {
    e(t.exports, "default", (function() {
        return f
    }));
    var o = r("huF4L"),
        a = r("1QMe3"),
        i = r("3pCmM"),
        s = r("10VQw"),
        l = r("kCC5O");
    const c = (e, t, r) => {
            const n = (0, i.default)(r);
            return {
                [`${e.componentCls}-${t}`]: {
                    color: e[`color${r}`],
                    background: e[`color${n}Bg`],
                    borderColor: e[`color${n}Border`]
                }
            }
        },
        u = e => (0, s.genPresetColor)(e, ((t, r) => {
            let {
                textColor: n,
                lightBorderColor: o,
                lightColor: a,
                darkColor: i
            } = r;
            return {
                [`${e.componentCls}-${t}`]: {
                    color: n,
                    background: a,
                    borderColor: o,
                    "&-inverse": {
                        color: e.colorTextLightSolid,
                        background: i,
                        borderColor: i
                    }
                }
            }
        })),
        d = e => {
            const {
                paddingXXS: t,
                lineWidth: r,
                tagPaddingHorizontal: n,
                componentCls: o
            } = e, a = n - r, i = t - r;
            return {
                [o]: Object.assign(Object.assign({}, (0, l.resetComponent)(e)), {
                    display: "inline-block",
                    height: "auto",
                    marginInlineEnd: e.marginXS,
                    paddingInline: a,
                    fontSize: e.tagFontSize,
                    lineHeight: `${e.tagLineHeight}px`,
                    whiteSpace: "nowrap",
                    background: e.tagDefaultBg,
                    border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
                    borderRadius: e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${e.motionDurationMid}`,
                    textAlign: "start",
                    [`&${o}-rtl`]: {
                        direction: "rtl"
                    },
                    "&, a, a:hover": {
                        color: e.tagDefaultColor
                    },
                    [`${o}-close-icon`]: {
                        marginInlineStart: i,
                        color: e.colorTextDescription,
                        fontSize: e.tagIconSize,
                        cursor: "pointer",
                        transition: `all ${e.motionDurationMid}`,
                        "&:hover": {
                            color: e.colorTextHeading
                        }
                    },
                    [`&${o}-has-color`]: {
                        borderColor: "transparent",
                        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
                            color: e.colorTextLightSolid
                        }
                    },
                    "&-checkable": {
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        cursor: "pointer",
                        [`&:not(${o}-checkable-checked):hover`]: {
                            color: e.colorPrimary,
                            backgroundColor: e.colorFillSecondary
                        },
                        "&:active, &-checked": {
                            color: e.colorTextLightSolid
                        },
                        "&-checked": {
                            backgroundColor: e.colorPrimary,
                            "&:hover": {
                                backgroundColor: e.colorPrimaryHover
                            }
                        },
                        "&:active": {
                            backgroundColor: e.colorPrimaryActive
                        }
                    },
                    "&-hidden": {
                        display: "none"
                    },
                    [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
                        marginInlineStart: a
                    }
                })
            }
        };
    var f = (0, o.default)("Tag", (e => {
        const {
            fontSize: t,
            lineHeight: r,
            lineWidth: n,
            fontSizeIcon: o
        } = e, i = Math.round(t * r), s = e.fontSizeSM, l = i - 2 * n, f = e.colorFillAlter, p = e.colorText, h = (0, a.merge)(e, {
            tagFontSize: s,
            tagLineHeight: l,
            tagDefaultBg: f,
            tagDefaultColor: p,
            tagIconSize: o - 2 * n,
            tagPaddingHorizontal: 8
        });
        return [d(h), u(h), c(h, "success", "Success"), c(h, "processing", "Info"), c(h, "error", "Error"), c(h, "warning", "Warning")]
    }))
})), r.register("3pCmM", (function(t, r) {
    function n(e) {
        if ("string" != typeof e) return e;
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("6WS0O", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        sideMargin: 50,
        optionWidth: 200
    }
})), r.register("77qSl", (function(t, n) {
    e(t.exports, "useMediaMatch", (function() {
        return a
    }));
    var o = r("fywoC");

    function a(e) {
        if ("undefined" == typeof window) return console.warn("useMediaMatch cannot function as window is undefined."), !1;
        var t = (0, o.useMemo)((function() {
                return window.matchMedia(e)
            }), [e]),
            r = (0, o.useState)((function() {
                return t.matches
            })),
            n = r[0],
            a = r[1];
        return (0, o.useEffect)((function() {
            a(t.matches);
            var e = function(e) {
                return a(e.matches)
            };
            return t.addEventListener ? (t.addEventListener("change", e), function() {
                return t.removeEventListener("change", e)
            }) : (t.addListener(e), function() {
                return t.removeListener(e)
            })
        }), [t]), n
    }
})), r.register("3bHhZ", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        o = e.exports && e.exports.__exportStar || function(e, t) {
            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), o(r("coa3i"), e.exports), o(r("exKSe"), e.exports), o(r("4Nv4f"), e.exports)
})), r.register("coa3i", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useBreakpoints = e.exports.useBreakpoint = void 0;
    var n = r("4Nv4f");
    e.exports.useBreakpoint = function(e) {
        return (0, n.useWindowSize)().width < e
    }, e.exports.useBreakpoints = function(e) {
        var t = (0, n.useWindowSize)().width;
        return e.map((function(e) {
            return t < e
        }))
    }
})), r.register("4Nv4f", (function(e, t) {
    var n = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        o = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        a = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useWindowSize = void 0;
    var i = a(r("fywoC"));

    function s() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }
    e.exports.useWindowSize = function() {
        var e = i.useState(s()),
            t = e[0],
            r = e[1];
        return i.useLayoutEffect((function() {
            function e() {
                r(s())
            }
            return window.addEventListener("resize", e),
                function() {
                    return window.removeEventListener("resize", e)
                }
        }), []), t
    }
})), r.register("exKSe", (function(e, t) {
    var n = e.exports && e.exports.__assign || function() {
            return n = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }, n.apply(this, arguments)
        },
        o = e.exports && e.exports.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r), Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        } : function(e, t, r, n) {
            void 0 === n && (n = r), e[n] = t[r]
        }),
        a = e.exports && e.exports.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function(e, t) {
            e.default = t
        }),
        i = e.exports && e.exports.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
            return a(t, e), t
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.useComponentSize = void 0;
    var s = i(r("fywoC"));
    e.exports.useComponentSize = function() {
        var e = s.useState({
                height: 0,
                width: 0
            }),
            t = e[0],
            r = e[1],
            o = s.useRef(),
            a = s.useCallback((function() {
                if (o.current) {
                    var e = o.current.offsetHeight,
                        n = o.current.offsetWidth;
                    e === t.height && n === t.width || r({
                        height: e,
                        width: n
                    })
                }
            }), [t.height, t.width]);
        return s.useLayoutEffect((function() {
            if (o && o.current) {
                var e = new ResizeObserver(a);
                return e.observe(o.current),
                    function() {
                        return e.disconnect()
                    }
            }
        }), [o, a]), n({
            ref: o
        }, t)
    }
})), r.register("hDWWf", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderTheme", (function() {
        return n
    })), (o = n || (n = {})).light = "light", o.dark = "dark"
})), r.register("hSz8d", (function(t, r) {
    let n;
    var o;
    e(t.exports, "SiteHeaderAlpha", (function() {
        return n
    })), (o = n || (n = {})).none = "none", o.standard = "standard", o.darker = "darker"
})), r.register("9Vz35", (function(t, n) {
    e(t.exports, "default", (function() {
        return o
    }));
    var o = {
        name: r("2Y5iQ").default.areaName,
        iconImage: "/client/img/header/rewards.svg"
    }
})), r.register("2Y5iQ", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        areaName: "Rewards",
        level: "Level",
        xp: "XP",
        currency: "GimBucks",
        character: "Gim",
        sticker: "Sticker",
        trail: "Trail"
    }
})), r.register("69bEv", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        a = r("4Gnmi"),
        i = r("fywoC");
    const s = i.lazy((() => r("9mi4b")));
    var l = e => {
        const t = e.hideSkeleton ? (0, o.jsx)("div", {
            className: "maxWidth"
        }) : (0, o.jsx)("div", {
            className: "maxWidth",
            children: (0, o.jsx)(a.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, o.jsx)(i.Suspense, {
            fallback: t,
            children: (0, o.jsx)(s, {
                ...e
            })
        })
    }
})), r.register("9mi4b", (function(e, t) {
    e.exports = Promise.all([r("g2MeW")(new URL(r("ihc6Q").resolve("2nG1U"), import.meta.url).toString()), import("./" + r("ihc6Q").resolve("6iUO5"))]).then((() => r("jLITb")))
})), r.register("l5RHB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5xGm1"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "ClockCircleOutlined";
    var c = a.forwardRef(l)
})), r.register("5xGm1", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                }
            }]
        },
        name: "clock-circle",
        theme: "outlined"
    }
})), r.register("lOxf1", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("cpDNt"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "TrophyOutlined";
    var c = a.forwardRef(l)
})), r.register("cpDNt", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"
                }
            }]
        },
        name: "trophy",
        theme: "outlined"
    }
})), r.register("bbvHy", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        normal: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 400;\n",
        bold: "\n    font-family: 'Product Sans', sans-serif;\n    font-weight: 800;\n  ",
        black: "\n  font-family: 'Product Sans', sans-serif;\n  font-weight: 900;\n",
        fontFamilyName: "Product Sans, sans-serif"
    }
})), r.register("dohZB", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("bVHCc"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "UsergroupAddOutlined";
    var c = a.forwardRef(l)
})), r.register("bVHCc", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"
                }
            }]
        },
        name: "usergroup-add",
        theme: "outlined"
    }
})), r.register("kVS28", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("4GmeK"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "LogoutOutlined";
    var c = a.forwardRef(l)
})), r.register("4GmeK", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"
                }
            }]
        },
        name: "logout",
        theme: "outlined"
    }
})), r.register("kLpOI", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("ayjhg"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "CheckOutlined";
    var c = a.forwardRef(l)
})), r.register("ayjhg", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    }
})), r.register("6gxPk", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5D7Fe"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "DownOutlined";
    var c = a.forwardRef(l)
})), r.register("5D7Fe", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                }
            }]
        },
        name: "down",
        theme: "outlined"
    }
})), r.register("5vs73", (function(t, r) {
    e(t.exports, "CLASSIC", (function() {
        return n
    })), e(t.exports, "TEAMS", (function() {
        return o
    })), e(t.exports, "THANOS", (function() {
        return a
    })), e(t.exports, "BOSS_BATTLE", (function() {
        return i
    })), e(t.exports, "HUMAN_ZOMBIE_DEFENDING_HOMEBASE", (function() {
        return s
    })), e(t.exports, "LAVA", (function() {
        return l
    })), e(t.exports, "IMPOSTER", (function() {
        return c
    })), e(t.exports, "DRAW", (function() {
        return u
    })), e(t.exports, "PARDY", (function() {
        return d
    }));
    const n = "CLASSIC",
        o = "TEAMS",
        a = "THANOS",
        i = "BOSS_BATTLE",
        s = "HUMAN_ZOMBIE_DEFENDING_HOMEBASE",
        l = "LAVA",
        c = "IMPOSTER",
        u = "DRAW",
        d = "PARDY"
})), r.register("5AR3F", (function(n, o) {
    e(n.exports, "default", (function() {
        return m
    }));
    var a = r("2ic9V"),
        i = r("iStnv"),
        s = r("hzerz"),
        l = r("46jhs"),
        c = r("hn4Tf"),
        u = r("7NK35"),
        d = r("b1RjK"),
        f = r("17aYs"),
        p = r("fywoC"),
        h = r("fe1on"),
        g = function(e) {
            (0, d.default)(n, e);
            var r = (0, f.default)(n);

            function n(e) {
                var t;
                (0, c.default)(this, n), (t = r.call(this, e)).handleChange = function(e) {
                    var r = t.props,
                        n = r.disabled,
                        o = r.onChange;
                    n || ("checked" in t.props || t.setState({
                        checked: e.target.checked
                    }), o && o({
                        target: (0, l.default)((0, l.default)({}, t.props), {}, {
                            checked: e.target.checked
                        }),
                        stopPropagation: function() {
                            e.stopPropagation()
                        },
                        preventDefault: function() {
                            e.preventDefault()
                        },
                        nativeEvent: e.nativeEvent
                    }))
                }, t.saveInput = function(e) {
                    t.input = e
                };
                var o = "checked" in e ? e.checked : e.defaultChecked;
                return t.state = {
                    checked: o
                }, t
            }
            return (0, u.default)(n, [{
                key: "focus",
                value: function() {
                    this.input.focus()
                }
            }, {
                key: "blur",
                value: function() {
                    this.input.blur()
                }
            }, {
                key: "render",
                value: function() {
                    var e, r = this.props,
                        n = r.prefixCls,
                        o = r.className,
                        l = r.style,
                        c = r.name,
                        u = r.id,
                        d = r.type,
                        f = r.disabled,
                        g = r.readOnly,
                        m = r.tabIndex,
                        v = r.onClick,
                        y = r.onFocus,
                        x = r.onBlur,
                        b = r.onKeyDown,
                        w = r.onKeyPress,
                        S = r.onKeyUp,
                        C = r.autoFocus,
                        k = r.value,
                        E = r.required,
                        O = (0, s.default)(r, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]),
                        j = Object.keys(O).reduce((function(e, t) {
                            return "aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t || (e[t] = O[t]), e
                        }), {}),
                        N = this.state.checked,
                        M = t(h)(n, o, (e = {}, (0, i.default)(e, "".concat(n, "-checked"), N), (0, i.default)(e, "".concat(n, "-disabled"), f), e));
                    return t(p).createElement("span", {
                        className: M,
                        style: l
                    }, t(p).createElement("input", (0, a.default)({
                        name: c,
                        id: u,
                        type: d,
                        required: E,
                        readOnly: g,
                        disabled: f,
                        tabIndex: m,
                        className: "".concat(n, "-input"),
                        checked: !!N,
                        onClick: v,
                        onFocus: y,
                        onBlur: x,
                        onKeyUp: S,
                        onKeyDown: b,
                        onKeyPress: w,
                        onChange: this.handleChange,
                        autoFocus: C,
                        ref: this.saveInput,
                        value: k
                    }, j)), t(p).createElement("span", {
                        className: "".concat(n, "-inner")
                    }))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return "checked" in e ? (0, l.default)((0, l.default)({}, t), {}, {
                        checked: e.checked
                    }) : null
                }
            }]), n
        }(p.Component);
    g.defaultProps = {
        prefixCls: "rc-checkbox",
        className: "",
        style: {},
        type: "checkbox",
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var m = g
})), r.register("2ic9V", (function(t, r) {
    function n() {
        return n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }, n.apply(this, arguments)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("iStnv", (function(t, r) {
    function n(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("hzerz", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("cK78M");

    function a(e, t) {
        if (null == e) return {};
        var r, n, a = (0, o.default)(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
        }
        return a
    }
})), r.register("cK78M", (function(t, r) {
    function n(e, t) {
        if (null == e) return {};
        var r, n, o = {},
            a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("46jhs", (function(t, n) {
    e(t.exports, "default", (function() {
        return i
    }));
    var o = r("iStnv");

    function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(r), !0).forEach((function(t) {
                (0, o.default)(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }
})), r.register("hn4Tf", (function(t, r) {
    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("7NK35", (function(t, r) {
    function n(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function o(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
    e(t.exports, "default", (function() {
        return o
    }))
})), r.register("b1RjK", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("63PCo");

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && (0, o.default)(e, t)
    }
})), r.register("63PCo", (function(t, r) {
    function n(e, t) {
        return n = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, n(e, t)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("17aYs", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("bArAQ"),
        a = r("lcgmN"),
        i = r("erlXZ");

    function s(e) {
        var t = (0, a.default)();
        return function() {
            var r, n = (0, o.default)(e);
            if (t) {
                var a = (0, o.default)(this).constructor;
                r = Reflect.construct(n, arguments, a)
            } else r = n.apply(this, arguments);
            return (0, i.default)(this, r)
        }
    }
})), r.register("bArAQ", (function(t, r) {
    function n(e) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(e)
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("lcgmN", (function(t, r) {
    function n() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("erlXZ", (function(n, o) {
    e(n.exports, "default", (function() {
        return s
    }));
    var a = r("1eKqi"),
        i = r("cdb2f");

    function s(e, r) {
        if (r && ("object" === t(a)(r) || "function" == typeof r)) return r;
        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
        return (0, i.default)(e)
    }
})), r.register("1eKqi", (function(e, t) {
    function r(t) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = r = function(e) {
            return typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.default = e.exports, e.exports.__esModule = !0), r(t)
    }
    e.exports = r, e.exports.default = e.exports, e.exports.__esModule = !0
})), r.register("cdb2f", (function(t, r) {
    function n(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    e(t.exports, "default", (function() {
        return n
    }))
})), r.register("fgoFz", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("hxEiv"),
        a = r("fywoC");
    const i = a.lazy((() => r("h3n1W")));
    var s = e => (0, o.jsx)(a.Suspense, {
        fallback: e.fallback || null,
        children: (0, o.jsx)(i, {
            latex: e.latex
        })
    })
})), r.register("h3n1W", (function(e, t) {
    e.exports = Promise.all([import("./" + r("ihc6Q").resolve("8pe9D")), import("./" + r("ihc6Q").resolve("5OCdz"))]).then((() => r("9YSp3")))
})), r.register("f9d7r", (function(t, r) {
    let n;
    var o;
    e(t.exports, "HookType", (function() {
        return n
    })), (o = n || (n = {})).selectBox = "selectBox", o.kit = "kit", o.number = "number"
})), r.register("5mRwo", (function(t, r) {
    let n;
    var o;
    let a;
    var i;
    e(t.exports, "LocalStorageNames", (function() {
        return a
    })), (o = n || (n = {})).time = "time", o.target = "target", o.race = "race", o.allIn = "allIn", (i = a || (a = {})).language = "gimkit-3.0-game-language", i.currency = "gimkit-game-currency", i.music = "gimkit-music-track", i.allowGoogleTranslate = "gimkit-google-translate-allowed", i.editorDefaultLanguage = "gimkit-editor-v4-default-language", i.editorDefaultGradeLevel = "gimkit-editor-v4-default-grade-level", i.editorDefaultSubject = "gimkit-editor-v4-default-subject", i.cosmosBlockedInGame = "gimkit-cosmos-blocked-in-game", i.hookSavedOptions = "gimkit-hook-saved-options"
})), r.register("9kZfj", (function(t, n) {
    e(t.exports, "onlyOfferAnnualUpgrade", (function() {
        return a
    }));
    var o = r("hrYih");
    const a = () => "annual-only" === o.default.getFeatureFlag("annual-only-pro")
})), r.register("aYYSA", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("5UEB4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "StarOutlined";
    var c = a.forwardRef(l)
})), r.register("5UEB4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"
                }
            }]
        },
        name: "star",
        theme: "outlined"
    }
})), r.register("j2XHK", (function(t, r) {
    let n;
    var o;
    let a;
    var i;
    let s;
    var l;
    let c;
    let u;
    var d;
    e(t.exports, "QuestionType", (function() {
        return n
    })), e(t.exports, "Privacy", (function() {
        return a
    })), e(t.exports, "GameStatus", (function() {
        return s
    })), e(t.exports, "GameType", (function() {
        return c
    })), e(t.exports, "GameGoal", (function() {
        return u
    })), e(t.exports, "themes", (function() {
        return m
    })), e(t.exports, "ExperienceSource", (function() {
        return v
    })), (o = n || (n = {})).multipleChoice = "mc", o.textInput = "text", (i = a || (a = {})).public = "public", i.private = "private", (l = s || (s = {})).setup = "setup", l.join = "join", l.teams = "teams", l.gameplay = "gameplay", l.results = "results", (c || (c = {})).live = "live", (d = u || (u = {})).time = "time", d.race = "race", d.allIn = "allIn";
    const f = "#ffffff",
        p = "#000000";
    let h;
    var g;
    (g = h || (h = {})).easy = "easy", g.medium = "medium", g.hard = "hard", g.veryHard = "veryHard", g.veryVeryHard = "veryVeryHard";
    const m = [{
        cost: 0,
        name: "Default",
        description: "Works fine, that's all",
        question: {
            background: "#303f9f",
            text: f
        },
        palette: [{
            background: "#771322",
            text: f
        }, {
            background: "#A85C15",
            text: f
        }, {
            background: "#0D6B33",
            text: f
        }, {
            background: "#076296",
            text: f
        }],
        owned: !0,
        isActive: !0
    }, {
        cost: 5,
        name: "Thanksgiving",
        description: "The perfect theme to show your thanks",
        question: {
            background: "#6C2F00",
            text: f
        },
        palette: [{
            background: "#9E682A",
            text: f
        }, {
            background: "#B54730",
            text: f
        }, {
            background: "#8A9748",
            text: f
        }, {
            background: "#F1B930",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 10,
        name: "Night",
        description: "A little easier on the eyes",
        question: {
            background: "#000a12",
            text: f
        },
        palette: [{
            background: "#263238",
            text: f
        }, {
            background: "#37474f",
            text: f
        }, {
            background: "#455a64",
            text: f
        }, {
            background: "#546e7a",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 5e5,
        name: "Thanos",
        description: "Perfectly balanced, as all things should be",
        question: {
            background: "#0D0019",
            text: f
        },
        palette: [{
            background: "#220044",
            text: f
        }, {
            background: "#330066",
            text: f
        }, {
            background: "#3E007C",
            text: f
        }, {
            background: "#4F1787",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 2e3,
        name: "Ocean",
        description: "Under the sea...",
        question: {
            background: "#000063",
            text: f
        },
        palette: [{
            background: "#283593",
            text: f
        }, {
            background: "#076296",
            text: f
        }, {
            background: "#0277bd",
            text: f
        }, {
            background: "#1565c0",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e5,
        name: "Forest",
        description: "A walk through the woods",
        question: {
            background: "#4c3d33",
            text: f
        },
        palette: [{
            background: "#385645",
            text: f
        }, {
            background: "#425C49",
            text: f
        }, {
            background: "#415641",
            text: f
        }, {
            background: "#4C6349",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1250,
        name: "Sunset",
        description: "Take a breather",
        question: {
            background: "#7F7496",
            text: f
        },
        palette: [{
            background: "#F46F5A",
            text: f
        }, {
            background: "#ED712D",
            text: f
        }, {
            background: "#7A596A",
            text: f
        }, {
            background: "#E8AB3C",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 750,
        name: "Pastel",
        description: "Lighten the mood",
        question: {
            background: "#FFbfd1",
            text: "#434343"
        },
        palette: [{
            background: "#FFA69E",
            text: "#5b5b5b"
        }, {
            background: "#FCF6BF",
            text: "#5b5b5b"
        }, {
            background: "#D0F4DE",
            text: "#5b5b5b"
        }, {
            background: "#93E1D8",
            text: "#5b5b5b"
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 500,
        name: "Retro",
        description: "Old school...",
        question: {
            background: "#9C0022",
            text: f
        },
        palette: [{
            background: "#001D3B",
            text: f
        }, {
            background: "#FFAE52",
            text: f
        }, {
            background: "#FE5963",
            text: f
        }, {
            background: "#A71C94",
            text: f
        }],
        owned: !1,
        isActive: !1
    }, {
        cost: 1e8,
        name: "Pure Gold",
        description: "Now you're just showing off",
        question: {
            background: p,
            text: "#FFCD2B"
        },
        palette: [{
            background: "#FFCD2B",
            text: p
        }, {
            background: "#FFC721",
            text: p
        }, {
            background: "#FFD147",
            text: p
        }, {
            background: "#FFCD38",
            text: p
        }],
        owned: !1,
        isActive: !1
    }];
    let v;
    var y;
    (y = v || (v = {})).original = "original", y.map = "map"
})), r.register("3aHwG", (function(t, r) {
    let n;
    var o;
    e(t.exports, "MapModeType", (function() {
        return n
    })), (o = n || (n = {})).liveGame = "liveGame", o.assignment = "assignment"
})), r.register("8p0tB", (function(t, n) {
    e(t.exports, "AnalyticsTrackEvent", (function() {
        return l
    }));
    var o = r("6fFlL"),
        a = r("iMOcM"),
        i = r("dOsOD"),
        s = r("amvOw");
    const l = e => {
        var t, r, n;
        if ((window.gtag && !(null === (t = e.blockedSource) || void 0 === t ? void 0 : t.google) && window.gtag("event", e.event, e.properties), i.AnalyticsFlags.educatorOnly) && (null === (n = (0, a.getUser)()) || void 0 === n ? void 0 : n.accountType) !== o.default.educator) return;
        (null === (r = e.blockedSource) || void 0 === r ? void 0 : r.posthog) || (0, s.TrackPostHogEvent)({
            event: e.event,
            properties: e.properties,
            force: e.forcePostHog
        })
    }
})), r.register("56tQE", (function(t, n) {
    e(t.exports, "default", (function() {
        return s
    }));
    var o = r("fywoC"),
        a = r("3KQc0"),
        i = r("9iNNJ");
    var s = (e, t) => {
        const [r, n] = o.useState((() => {
            var r, n;
            const o = e && "current" in e ? e.current : e;
            return o ? [o.offsetWidth, o.offsetHeight] : [null !== (r = null == t ? void 0 : t.initialWidth) && void 0 !== r ? r : 0, null !== (n = null == t ? void 0 : t.initialHeight) && void 0 !== n ? n : 0]
        }));
        return (0, i.default)((() => {
            const t = e && "current" in e ? e.current : e;
            t && n([t.offsetWidth, t.offsetHeight])
        }), [e]), (0, a.default)(e, (e => {
            const t = e.target;
            n([t.offsetWidth, t.offsetHeight])
        })), r
    }
})), r.register("3KQc0", (function(t, n) {
    e(t.exports, "default", (function() {
        return u
    }));
    var o = r("6rvT3"),
        a = r("9iNNJ"),
        i = r("3Yjty"),
        s = r("f1PHW");
    let l;
    const c = () => l || (l = function() {
        const e = new Map,
            t = new(0, o.default)((0, s.default)(((t, r) => {
                var n;
                if (1 === t.length) null === (n = e.get(t[0].target)) || void 0 === n || n(t[0], r);
                else
                    for (let n = 0; n < t.length; n++) {
                        var o;
                        null === (o = e.get(t[n].target)) || void 0 === o || o(t[n], r)
                    }
            })));
        return {
            observer: t,
            subscribe(r, n) {
                t.observe(r), e.set(r, n)
            },
            unsubscribe(r) {
                t.unobserve(r), e.delete(r)
            }
        }
    }());
    var u = function(e, t) {
        const r = c(),
            n = (0, i.default)(t);
        return (0, a.default)((() => {
            let t = !1;
            const o = e && "current" in e ? e.current : e;
            if (o) return r.subscribe(o, ((e, r) => {
                t || n.current(e, r)
            })), () => {
                t = !0, r.unsubscribe(o)
            }
        }), [e, r, n]), r.observer
    }
})), r.register("9iNNJ", (function(n, o) {
    e(n.exports, "default", (function() {
        return a
    }));
    var a = t(r("fywoC"))["undefined" != typeof document && void 0 !== document.createElement ? "useLayoutEffect" : "useEffect"]
})), r.register("3Yjty", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("fywoC");
    var a = e => {
        const t = o.useRef(e);
        return o.useEffect((() => {
            t.current = e
        })), t
    }
})), r.register("f1PHW", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = function(e) {
        var t = [],
            r = null,
            n = function() {
                for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                t = o, r || (r = requestAnimationFrame((function() {
                    r = null, e.apply(void 0, t)
                })))
            };
        return n.cancel = function() {
            r && (cancelAnimationFrame(r), r = null)
        }, n
    }
})), r.register("9Mv96", (function(t, n) {
    e(t.exports, "default", (function() {
        return p
    }));
    var o = r("kqQIs"),
        a = r("2Af7I"),
        i = r("fywoC");
    r("djNMu");
    var s = r("aWdbz"),
        l = r("cY4lv"),
        c = r("kYx4h"),
        u = 44;

    function d(e) {
        var t, r, n;
        return t = e, r = 0, n = 1, e = (Math.min(Math.max(r, t), n) - r) / (n - r), e = (e -= 1) * e * e + 1
    }
    var f = i.forwardRef((function(e, t) {
            var r, n = e.classes,
                l = e.className,
                f = e.color,
                p = void 0 === f ? "primary" : f,
                h = e.disableShrink,
                g = void 0 !== h && h,
                m = e.size,
                v = void 0 === m ? 40 : m,
                y = e.style,
                x = e.thickness,
                b = void 0 === x ? 3.6 : x,
                w = e.value,
                S = void 0 === w ? 0 : w,
                C = e.variant,
                k = void 0 === C ? "indeterminate" : C,
                E = (0, a.default)(e, ["classes", "className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"]),
                O = {},
                j = {},
                N = {};
            if ("determinate" === k || "static" === k) {
                var M = 2 * Math.PI * ((u - b) / 2);
                O.strokeDasharray = M.toFixed(3), N["aria-valuenow"] = Math.round(S), "static" === k ? (O.strokeDashoffset = "".concat(((100 - S) / 100 * M).toFixed(3), "px"), j.transform = "rotate(-90deg)") : (O.strokeDashoffset = "".concat((r = (100 - S) / 100, r * r * M).toFixed(3), "px"), j.transform = "rotate(".concat((270 * d(S / 70)).toFixed(3), "deg)"))
            }
            return i.createElement("div", (0, o.default)({
                className: (0, s.default)(n.root, l, "inherit" !== p && n["color".concat((0, c.default)(p))], {
                    indeterminate: n.indeterminate,
                    static: n.static
                } [k]),
                style: (0, o.default)({
                    width: v,
                    height: v
                }, j, y),
                ref: t,
                role: "progressbar"
            }, N, E), i.createElement("svg", {
                className: n.svg,
                viewBox: "".concat(22, " ").concat(22, " ").concat(u, " ").concat(u)
            }, i.createElement("circle", {
                className: (0, s.default)(n.circle, g && n.circleDisableShrink, {
                    indeterminate: n.circleIndeterminate,
                    static: n.circleStatic
                } [k]),
                style: O,
                cx: u,
                cy: u,
                r: (u - b) / 2,
                fill: "none",
                strokeWidth: b
            })))
        })),
        p = (0, l.default)((function(e) {
            return {
                root: {
                    display: "inline-block"
                },
                static: {
                    transition: e.transitions.create("transform")
                },
                indeterminate: {
                    animation: "$circular-rotate 1.4s linear infinite"
                },
                colorPrimary: {
                    color: e.palette.primary.main
                },
                colorSecondary: {
                    color: e.palette.secondary.main
                },
                svg: {
                    display: "block"
                },
                circle: {
                    stroke: "currentColor"
                },
                circleStatic: {
                    transition: e.transitions.create("stroke-dashoffset")
                },
                circleIndeterminate: {
                    animation: "$circular-dash 1.4s ease-in-out infinite",
                    strokeDasharray: "80px, 200px",
                    strokeDashoffset: "0px"
                },
                "@keyframes circular-rotate": {
                    "0%": {
                        transformOrigin: "50% 50%"
                    },
                    "100%": {
                        transform: "rotate(360deg)"
                    }
                },
                "@keyframes circular-dash": {
                    "0%": {
                        strokeDasharray: "1px, 200px",
                        strokeDashoffset: "0px"
                    },
                    "50%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-15px"
                    },
                    "100%": {
                        strokeDasharray: "100px, 200px",
                        strokeDashoffset: "-125px"
                    }
                },
                circleDisableShrink: {
                    animation: "none"
                }
            }
        }), {
            name: "MuiCircularProgress",
            flip: !1
        })(f)
})), r.register("lvQ9C", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("1HsHH"),
        s = r("iMOcM");
    var l = e => {
        const [t, r] = a.useState([]), [n] = a.useState(e.limit), [l, c] = a.useState(e.defaultPage), [u, d] = a.useState(!0), [f, p] = a.useState([]), [h, g] = a.useState(!1), m = a.useMemo((() => (e.modifyItems ? e.modifyItems(f) : f).map(((t, r) => e.toRender(t, r)))), [f.length, e.toRender]), v = () => {
            if (t.includes(l)) return;
            r((e => [...e, l]));
            const o = {
                page: l,
                limit: n
            };
            (0, s.request)({
                url: e.url,
                method: "post",
                cacheKey: e.cacheKey,
                data: e.modifyBody ? e.modifyBody(o) : o,
                success: (t, r) => {
                    e.onTotalItems && !h && (e.onTotalItems(t.totalItems), g(!0)), t.items.forEach((t => {
                        e.onItemFetched && e.onItemFetched(t, r)
                    })), p((e => [...e, ...t.items])), d(t.hasNextPage), c(t.nextPage)
                },
                error: () => {
                    e.onTotalItems && !h && (e.onTotalItems(0), g(!0)), d(!1)
                },
                both: () => r((e => e.filter((e => e !== o.page))))
            })
        };
        return a.useEffect(v, []), !u && e.forceEmptyMessage || !u && 0 === f.length && e.emptyMessage ? e.emptyMessage(f) : (0, o.jsxs)(i.default, {
            dataLength: f.length,
            hasMore: u,
            style: e.scrollStyle,
            next: v,
            loader: e.loader || (0, o.jsx)("div", {}),
            scrollThreshold: e.scrollThreshold,
            endMessage: e.endMessage ? e.endMessage(f) : null,
            scrollableTarget: e.scrollableTarget,
            children: [e.prefix ? e.prefix() : null, m]
        })
    }
})), r.register("cO2Su", (function(t, n) {
    e(t.exports, "default", (function() {
        return l
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("2FDaO"),
        i = r("lKmIF");
    let s;
    var l = e => (0, o.jsx)(c, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    });
    const c = a.default.div(s || (s = (e => e)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${0};
  padding: 20px;
`), i.default.White)
})), r.register("bM2u5", (function(t, n) {
    e(t.exports, "GetHomepagePath", (function() {
        return l
    })), e(t.exports, "RedirectToHomepage", (function() {
        return c
    })), e(t.exports, "ReplaceToHomePage", (function() {
        return u
    }));
    var o = r("b1oE9"),
        a = r("bd8je"),
        i = r("iMOcM"),
        s = r("iROck");
    const l = () => (0, i.isLoggedIn)() ? (0, i.isStudent)() ? o.HOME : o.KITS : "/",
        c = () => {
            (0, s.NavigateTo)(l())
        },
        u = () => {
            a.history.replace(l())
        }
})), r.register("py2Xr", (function(t, n) {
    e(t.exports, "default", (function() {
        return a
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = e => (0, o.jsx)("i", {
        className: `${e.name}${e.className?` ${e.className}`:""}`,
        style: e.style
    })
})), r.register("dFdNj", (function(t, n) {
    e(t.exports, "UpgradeModal_CopyKit", (function() {
        return i
    }));
    var o = r("hxEiv");
    r("fywoC");
    var a = r("46bRO");
    const i = {
        title: (0, o.jsx)(o.Fragment, {
            children: "Copy kits with Pro"
        }),
        description: (0, o.jsxs)(o.Fragment, {
            children: ["To copy kits and make them your own, upgrade to ", a.COMPANY_NAME, " Pro."]
        })
    }
})), r.register("gJKjM", (function(n, o) {
    e(n.exports, "responsiveArray", (function() {
        return s
    })), e(n.exports, "default", (function() {
        return l
    }));
    var a = r("fywoC"),
        i = r("2tfup");
    const s = ["xxl", "xl", "lg", "md", "sm", "xs"];

    function l() {
        const [, e] = (0, i.useToken)(), r = (e => ({
            xs: `(max-width: ${e.screenXSMax}px)`,
            sm: `(min-width: ${e.screenSM}px)`,
            md: `(min-width: ${e.screenMD}px)`,
            lg: `(min-width: ${e.screenLG}px)`,
            xl: `(min-width: ${e.screenXL}px)`,
            xxl: `(min-width: ${e.screenXXL}px)`
        }))((e => {
            const t = e,
                r = [].concat(s).reverse();
            return r.forEach(((e, n) => {
                const o = e.toUpperCase(),
                    a = `screen${o}Min`,
                    i = `screen${o}`;
                if (!(t[a] <= t[i])) throw new Error(`${a}<=${i} fails : !(${t[a]}<=${t[i]})`);
                if (n < r.length - 1) {
                    const e = `screen${o}Max`;
                    if (!(t[i] <= t[e])) throw new Error(`${i}<=${e} fails : !(${t[i]}<=${t[e]})`);
                    const a = `screen${r[n+1].toUpperCase()}Min`;
                    if (!(t[e] <= t[a])) throw new Error(`${e}<=${a} fails : !(${t[e]}<=${t[a]})`)
                }
            })), e
        })(e));
        return t(a).useMemo((() => {
            const e = new Map;
            let t = -1,
                n = {};
            return {
                matchHandlers: {},
                dispatch: t => (n = t, e.forEach((e => e(n))), e.size >= 1),
                subscribe(r) {
                    return e.size || this.register(), t += 1, e.set(t, r), r(n), t
                },
                unsubscribe(t) {
                    e.delete(t), e.size || this.unregister()
                },
                unregister() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            n = this.matchHandlers[t];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener)
                    })), e.clear()
                },
                register() {
                    Object.keys(r).forEach((e => {
                        const t = r[e],
                            o = t => {
                                let {
                                    matches: r
                                } = t;
                                this.dispatch(Object.assign(Object.assign({}, n), {
                                    [e]: r
                                }))
                            },
                            a = window.matchMedia(t);
                        a.addListener(o), this.matchHandlers[t] = {
                            mql: a,
                            listener: o
                        }, o(a)
                    }))
                },
                responsiveMap: r
            }
        }), [e])
    }
})), r.register("bmTnW", (function(e, t) {
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.lazyWithPreload = void 0;
    var n = r("fywoC");

    function o(e) {
        var t, r, o = (0, n.lazy)(e),
            a = (0, n.forwardRef)((function(e, r) {
                var a = (0, n.useRef)(null != t ? t : o);
                return (0, n.createElement)(a.current, Object.assign(r ? {
                    ref: r
                } : {}, e))
            }));
        return a.preload = function() {
            return r || (r = e().then((function(e) {
                return t = e.default
            }))), r
        }, a
    }
    e.exports.lazyWithPreload = o, e.exports.default = o
})), r.register("4aaLU", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        White: "white",
        Black: "black",
        BackgroundGray: "#eeeeee",
        PrimaryBlue: "#05f",
        SecondaryPurple: "#1E076B",
        DisabledGray: "#838383",
        LightSuccessGreen: "#6abf69",
        DarkSuccessGreen: "#2e7d32"
    }
})), r.register("exbzb", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("8N8s4"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "QuestionCircleOutlined";
    var c = a.forwardRef(l)
})), r.register("8N8s4", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"
                }
            }]
        },
        name: "question-circle",
        theme: "outlined"
    }
})), r.register("hFybW", (function(t, n) {
    e(t.exports, "default", (function() {
        return y
    }));
    var o = r("hxEiv"),
        a = r("fywoC"),
        i = r("2FDaO"),
        s = r("lKmIF"),
        l = r("69SUA");
    let c, u, d, f = e => e;
    const p = "#1890FF",
        h = i.default.div(c || (c = f`
  width: 100%;
  box-sizing: border-box;
  font-family: ${0};
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${0}px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${0};
  color: ${0};
  ${0}
  transition: all 0.25s;
  &:hover {
    color: ${0};
  }
`), l.Fonts.SFPro, 14, (e => e.selected && !e.blockBackground ? "#E5F7FE" : s.default.White), (e => e.selected ? p : "rgba(0,0,0,.65)"), (e => e.selected && !e.blockStripe && "border-right: 3px solid " + p + ";"), p),
        g = i.default.div.attrs({
            className: "flex vc maxWidth"
        })(u || (u = f``)),
        m = i.default.div(d || (d = f``));
    class v extends a.Component {
        render() {
            const {
                title: e,
                onClick: t,
                selected: r,
                blockStripe: n,
                blockBackground: a
            } = this.props, i = this.props.icon;
            return (0, o.jsxs)(h, {
                selected: r,
                blockStripe: n,
                blockBackground: a,
                onClick: t,
                className: this.props.className,
                ...this.props.style,
                children: [i ? (0, o.jsx)(i, {
                    style: {
                        fontSize: 14,
                        marginRight: 10
                    },
                    theme: this.props.customIconColor ? "twoTone" : "outlined",
                    twoToneColor: this.props.customIconColor || ""
                }) : null, (0, o.jsxs)(g, {
                    children: [(0, o.jsx)(m, {
                        children: e
                    }), this.props.customRightComponent ? this.props.customRightComponent : null]
                })]
            })
        }
    }
    var y = v
})), r.register("c6BvM", (function(t, n) {
    e(t.exports, "default", (function() {
        return c
    }));
    var o = r("dnh3u"),
        a = r("fywoC"),
        i = r("hwpEJ"),
        s = r("dwKuN"),
        l = function(e, t) {
            return a.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: i.default
            }))
        };
    l.displayName = "ShareAltOutlined";
    var c = a.forwardRef(l)
})), r.register("hwpEJ", (function(t, r) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"
                }
            }]
        },
        name: "share-alt",
        theme: "outlined"
    }
})), r.register("kxv2V", (function(e, t) {
    "function" == typeof Object.create ? e.exports = function(e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    } : e.exports = function(e, t) {
        if (t) {
            e.super_ = t;
            var r = function() {};
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
    }
}));