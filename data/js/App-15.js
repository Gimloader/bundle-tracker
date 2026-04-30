import {
    r as h,
    I as y,
    _ as j,
    e as u,
    d as n,
    F as p,
    j as t,
    B as g,
    U as S,
    a as c,
    h as f,
    b as v,
    ar as b,
    a5 as w,
    T as R
} from "./_index.js";
import {
    a as C
} from "./ContentContainer.js";
import {
    K as Q
} from "./KitPreview.js";
import {
    Q as K
} from "./Question.js";
import {
    I as M
} from "./index.es.js";
import {
    a as L,
    b as F
} from "./Language.js";
import {
    o as B
} from "./EducatorSpecificInfoStage.js";
import {
    I as E
} from "./index-3.js";
import {
    R as T
} from "./FilterOutlined.js";
import {
    S as o
} from "./index-8.js";
import {
    P as z
} from "./index-20.js";
var _ = {
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
    },
    q = function(a, e) {
        return h.createElement(y, j({}, a, {
            ref: e,
            icon: _
        }))
    },
    I = h.forwardRef(q);
const k = n.div.attrs({
        id: "left-side-search",
        className: "scroll-y"
    })`
  width: 647px;
  background: ${u.White};
  border-right: 1px solid ${u.BorderGray};
  box-sizing: border-box;
  padding: ${r=>r.customPadding?r.customPadding:"15px"};
  padding-top: 0px;
`,
    A = n.div.attrs({
        id: "right-side-search",
        className: "scroll-y"
    })`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`;
n.div`
  font-size: 20px;
  font-weight: ${p.Bold};
  margin-bottom: 2px;
`;
const l = n.div`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${p.Bold};
  font-family: ${S.SFPro};
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`,
    m = n(z).attrs({
        placement: "bottomLeft",
        trigger: "click",
        overlayStyle: {
            width: 220
        }
    })``;
var x = (r => (r.relevant = "relevant", r.recent = "recent", r))(x || {});
const P = r => {
        const a = () => t.jsxs("div", {
                className: "maxWidth",
                children: [t.jsx(l, {
                    children: "Language:"
                }), t.jsx(o, {
                    showSearch: !0,
                    allowClear: !0,
                    placeholder: "All Languages",
                    className: "maxWidth",
                    value: r.language,
                    onChange: s => r.onLanguageSelected(s),
                    children: [...L()].map(s => t.jsx(o.Option, {
                        value: s,
                        children: s
                    }, s))
                }), t.jsx(l, {
                    style: {
                        marginTop: 12
                    },
                    children: "Subject:"
                }), t.jsx(o, {
                    showSearch: !0,
                    allowClear: !0,
                    placeholder: "All Subjects",
                    className: "maxWidth",
                    value: r.subject,
                    onChange: s => r.onSubjectSelected(s),
                    children: [...B].map(s => t.jsx(o.Option, {
                        value: s,
                        children: s
                    }, s))
                })]
            }),
            e = () => t.jsxs("div", {
                className: "maxWidth",
                children: [t.jsx(l, {
                    children: "Sort By:"
                }), t.jsxs(o, {
                    className: "maxWidth",
                    value: r.sort,
                    onChange: s => r.onSortSelected(s),
                    children: [t.jsx(o.Option, {
                        value: "relevant",
                        children: "Most Relevant"
                    }), t.jsx(o.Option, {
                        value: "recent",
                        children: "Most Recent"
                    })]
                })]
            });
        return t.jsxs("div", {
            className: "maxWidth",
            style: {
                borderBottom: r.showFilters ? "1px solid #e8e8e8" : "",
                background: "white",
                paddingTop: 16,
                paddingBottom: 18
            },
            children: [t.jsx(E.Search, {
                placeholder: "Search for kits...",
                onSearch: r.onSearch,
                size: "large",
                enterButton: !0,
                autoFocus: !0,
                style: {
                    flex: 1
                },
                loading: r.loading,
                value: r.searchQuery,
                onChange: s => r.onUpdateSearchQuery(s.target.value)
            }), t.jsxs("div", {
                style: {
                    marginTop: 13,
                    visibility: r.showFilters ? "visible" : "hidden"
                },
                children: [t.jsx(m, {
                    content: a(),
                    children: t.jsx(g, {
                        style: {
                            marginRight: 12
                        },
                        icon: t.jsx(T, {}),
                        size: "small",
                        type: r.language || r.subject ? "primary" : "default",
                        children: "Filter"
                    })
                }), t.jsx(m, {
                    content: e(),
                    children: t.jsx(g, {
                        icon: t.jsx(I, {}),
                        size: "small",
                        children: "Sort"
                    })
                })]
            })]
        })
    },
    d = "GIMKIT_SEARCH_CACHE";
class X extends h.Component {
    constructor(a) {
        super(a), this.state = {
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
            sort: x.relevant,
            showFilters: !1,
            firstSearch: !0,
            fetchingResults: !1
        }, this.fetchSearchResults = () => {
            const e = this.state.searchQuery;
            if (e && this.state.hasMore && !this.state.fetchingResults) {
                this.setState({
                    fetchingResults: !0,
                    error: !1
                });
                const s = {
                    query: e,
                    page: this.state.page,
                    sort: this.state.sort
                };
                this.state.language && (s.language = F(this.state.language)), this.state.subject && (s.subject = this.state.subject), c({
                    url: "/api/games/search",
                    data: s,
                    cacheKey: d,
                    success: i => {
                        this.setState({
                            results: [...this.state.results, ...i.results],
                            hasMore: i.hasMore,
                            page: i.page
                        })
                    },
                    error: () => {
                        this.setState({
                            error: !0
                        }), f({
                            title: "Error searching",
                            content: "Please try again"
                        })
                    },
                    both: () => {
                        if (!this.props.blockChangingUrl) {
                            const i = new URL(window.location.href);
                            i.searchParams.set("q", e), window.history.pushState({}, "", i)
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
        }, this.fetchMyKits = () => {
            this.setState({
                fetchingResults: !0
            }), c({
                cacheKey: d,
                url: "/api/games/summary/me",
                method: "GET",
                success: e => {
                    this.setState({
                        results: e.games.map(s => ({
                            _id: s._id,
                            title: s.title,
                            gif: s.gif,
                            questions: 0,
                            creator: "",
                            dateCreated: v(s.createdAt).toISOString()
                        }))
                    })
                },
                error: () => f({
                    title: "Error fetching Kits"
                }),
                both: () => this.setState({
                    hasMore: !1,
                    loading: !1,
                    fetchingResults: !1
                })
            })
        }, this.fetchQuestions = e => {
            c({
                url: `/api/games/questions/search/${e}?limit=${this.props.questionFetchLimit||30}`,
                cacheKey: d,
                method: "get",
                success: s => {
                    const i = s.reverse();
                    this.setState({
                        questions: i,
                        currentKit: e
                    })
                },
                error: () => !1
            })
        }, this.onSearch = e => {
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
        }, this.debouncedHover = b.debounce(e => {
            document.getElementById("right-side-search").scrollTo(0, 0), this.fetchQuestions(e._id)
        }, 50), this.onUpdateSearchQuery = e => {
            this.setState({
                draftSearchQuery: e
            })
        }, this.onLanguageSelected = e => {
            this.setState({
                language: e
            })
        }, this.onSubjectSelected = e => {
            this.setState({
                subject: e
            })
        }, this.onSortSelected = e => {
            this.setState({
                sort: e
            })
        }, this.getLeftSide = () => !this.state.results.length && !this.state.loading && !this.state.firstSearch ? !this.state.results.length && t.jsx("div", {
            className: "maxWidth flex hc vc flex-column",
            children: t.jsxs("div", {
                style: {
                    padding: "0 38px",
                    marginTop: 42,
                    textAlign: "center"
                },
                children: [t.jsx("img", {
                    src: "/client/img/icons/sad.svg"
                }), t.jsxs("div", {
                    style: {
                        marginTop: 18,
                        fontFamily: S.SFPro,
                        fontSize: 20
                    },
                    children: [t.jsx("div", {
                        children: "We couldn't find any results."
                    }), !this.props.isFromQuestionBank && t.jsxs("div", {
                        style: {
                            marginTop: 24
                        },
                        children: ["Try another search or maybe", " ", t.jsx(w, {
                            to: "/create",
                            children: "make your own kit!"
                        })]
                    })]
                })]
            })
        }) : t.jsx(M, {
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
            children: this.state.results.map((e, s) => t.jsx(h.Fragment, {
                children: t.jsx(Q, {
                    id: e._id,
                    title: e.title,
                    gif: e.gif,
                    handleHover: () => this.debouncedHover(e),
                    numberOfQuestions: e.questionCount,
                    blockRedirect: this.props.blockKitRedirect,
                    creator: e.creator,
                    dateCreated: e.dateCreated,
                    redirectOnImageClick: !0,
                    size: "normal",
                    selected: this.state.currentKit === e._id,
                    blockHoverable: !0
                }, e._id)
            }, `read-item-${e._id}`))
        }), this.getRightSide = () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(e => t.jsx(K, {
            question: e,
            showAllAnswers: !0
        }, e._id))
    }
    componentDidMount() {
        this.state.searchQuery && this.onSearch(!0)
    }
    componentDidUpdate(a, e) {
        (this.state.language !== e.language || this.state.subject !== e.subject || this.state.sort !== e.sort || this.props.showMyKits !== a.showMyKits) && this.onSearch(!0)
    }
    render() {
        return t.jsxs(t.Fragment, {
            children: [this.props.overrideTitle && t.jsx(R, {
                title: `Kits about "${this.props.searchQuery}"`
            }), t.jsxs(C, {
                customBackgroundColor: this.props.customBackgroundColor,
                customHeight: this.props.customHeight,
                children: [t.jsx(k, {
                    customPadding: this.props.customLeftSidePadding,
                    children: t.jsxs("div", {
                        children: [!this.props.showMyKits && t.jsx("div", {
                            style: {
                                position: "sticky",
                                top: 0,
                                zIndex: 999
                            },
                            className: "maxWidth",
                            children: t.jsx(P, {
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
                }), t.jsx(A, {
                    children: this.getRightSide()
                })]
            })]
        })
    }
}
export {
    X as S
};