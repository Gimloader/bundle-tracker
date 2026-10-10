import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    G as n,
    Q as r,
    t as i
} from "./utils.js";
import {
    t as a
} from "./react-1.js";
import {
    c as o,
    s
} from "./assertThisInitialized.js";
import {
    n as c
} from "./dist-3.js";
import {
    r as l
} from "./compact-item.js";
import {
    t as u
} from "./button.js";
import {
    t as d
} from "./select.js";
import {
    t as f
} from "./input.js";
import {
    t as p
} from "./popover.js";
import {
    t as m
} from "./Question.js";
import {
    t as h
} from "./ContentContainer.js";
import {
    t as g
} from "./FilterOutlined.js";
import {
    t as _
} from "./jsx-runtime.js";
import {
    c as v,
    l as y,
    n as b,
    s as x
} from "./_index.js";
import {
    t as S
} from "./lodash.js";
import {
    t as C
} from "./index.es.js";
import {
    t as w
} from "./KitPreview.js";
import {
    i as T,
    t as E
} from "./Language.js";
import {
    n as D
} from "./EducatorSpecificInfoStage.js";
var O = e(a());
o();
var k = {
        icon: {
            tag: `svg`,
            attrs: {
                viewBox: `64 64 896 896`,
                focusable: `false`
            },
            children: [{
                tag: `path`,
                attrs: {
                    d: `M839.6 433.8L749 150.5a9.24 9.24 0 00-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 00-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 00-9.2-9.3zM310.3 167.1a8 8 0 00-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z`
                }
            }]
        },
        name: `sort-descending`,
        theme: `outlined`
    },
    A = O.forwardRef(function(e, t) {
        return O.createElement(l, s({}, e, {
            ref: t,
            icon: k
        }))
    }),
    j = y.div.attrs({
        id: `left-side-search`,
        className: `scroll-y`
    })`
  width: 647px;
  background: ${b.White};
  border-right: 1px solid ${b.BorderGray};
  box-sizing: border-box;
  padding: ${e=>e.customPadding?e.customPadding:`15px`};
  padding-top: 0px;
`,
    M = y.div.attrs({
        id: `right-side-search`,
        className: `scroll-y`
    })`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`;
y.div`
  font-size: 20px;
  font-weight: ${x.Bold};
  margin-bottom: 2px;
`;
var N = S(),
    P = _(),
    F = y.div`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${x.Bold};
  font-family: ${v.SFPro};
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`,
    I = y(p).attrs({
        placement: `bottomLeft`,
        trigger: `click`,
        overlayStyle: {
            width: 220
        }
    })``,
    L = function(e) {
        return e.relevant = `relevant`, e.recent = `recent`, e
    }({}),
    R = e => (0, P.jsxs)(`div`, {
        className: `maxWidth`,
        style: {
            borderBottom: e.showFilters ? `1px solid #e8e8e8` : ``,
            background: `white`,
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [(0, P.jsx)(f.Search, {
            placeholder: `Search for kits...`,
            onSearch: e.onSearch,
            size: `large`,
            enterButton: !0,
            autoFocus: !0,
            style: {
                flex: 1
            },
            loading: e.loading,
            value: e.searchQuery,
            onChange: t => e.onUpdateSearchQuery(t.target.value)
        }), (0, P.jsxs)(`div`, {
            style: {
                marginTop: 13,
                visibility: e.showFilters ? `visible` : `hidden`
            },
            children: [(0, P.jsx)(I, {
                content: (0, P.jsxs)(`div`, {
                    className: `maxWidth`,
                    children: [(0, P.jsx)(F, {
                        children: `Language:`
                    }), (0, P.jsx)(d, {
                        showSearch: !0,
                        allowClear: !0,
                        placeholder: `All Languages`,
                        className: `maxWidth`,
                        value: e.language,
                        onChange: t => e.onLanguageSelected(t),
                        children: [...T()].map(e => (0, P.jsx)(d.Option, {
                            value: e,
                            children: e
                        }, e))
                    }), (0, P.jsx)(F, {
                        style: {
                            marginTop: 12
                        },
                        children: `Subject:`
                    }), (0, P.jsx)(d, {
                        showSearch: !0,
                        allowClear: !0,
                        placeholder: `All Subjects`,
                        className: `maxWidth`,
                        value: e.subject,
                        onChange: t => e.onSubjectSelected(t),
                        children: [...D].map(e => (0, P.jsx)(d.Option, {
                            value: e,
                            children: e
                        }, e))
                    })]
                }),
                children: (0, P.jsx)(u, {
                    style: {
                        marginRight: 12
                    },
                    icon: (0, P.jsx)(g, {}),
                    size: `small`,
                    type: e.language || e.subject ? `primary` : `default`,
                    children: `Filter`
                })
            }), (0, P.jsx)(I, {
                content: (0, P.jsxs)(`div`, {
                    className: `maxWidth`,
                    children: [(0, P.jsx)(F, {
                        children: `Sort By:`
                    }), (0, P.jsxs)(d, {
                        className: `maxWidth`,
                        value: e.sort,
                        onChange: t => e.onSortSelected(t),
                        children: [(0, P.jsx)(d.Option, {
                            value: `relevant`,
                            children: `Most Relevant`
                        }), (0, P.jsx)(d.Option, {
                            value: `recent`,
                            children: `Most Recent`
                        })]
                    })]
                }),
                children: (0, P.jsx)(u, {
                    icon: (0, P.jsx)(A, {}),
                    size: `small`,
                    children: `Sort`
                })
            })]
        })]
    }),
    z = e(r()),
    B = `GIMKIT_SEARCH_CACHE`,
    V = class extends O.Component {
        constructor(e) {
            super(e), this.state = {
                loading: !1,
                currentKit: ``,
                questions: [],
                page: 0,
                hasMore: !0,
                error: !1,
                results: [],
                searchQuery: this.props.searchQuery,
                draftSearchQuery: this.props.searchQuery,
                language: void 0,
                subject: void 0,
                sort: L.relevant,
                showFilters: !1,
                firstSearch: !0,
                fetchingResults: !1
            }, this.fetchSearchResults = () => {
                let e = this.state.searchQuery;
                if (e && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    let r = {
                        query: e,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (r.language = E(this.state.language)), this.state.subject && (r.subject = this.state.subject), t({
                        url: `/api/games/search`,
                        data: r,
                        cacheKey: B,
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
                            }), n({
                                title: `Error searching`,
                                content: `Please try again`
                            })
                        },
                        both: () => {
                            if (!this.props.blockChangingUrl) {
                                let t = new URL(window.location.href);
                                t.searchParams.set(`q`, e), window.history.pushState({}, ``, t)
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
                }), t({
                    cacheKey: B,
                    url: `/api/games/summary/me`,
                    method: `GET`,
                    success: e => {
                        this.setState({
                            results: e.games.map(e => ({
                                _id: e._id,
                                title: e.title,
                                gif: e.gif,
                                questions: 0,
                                creator: ``,
                                dateCreated: (0, z.default)(e.createdAt).toISOString()
                            }))
                        })
                    },
                    error: () => n({
                        title: `Error fetching Kits`
                    }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                })
            }, this.fetchQuestions = e => {
                t({
                    url: `/api/games/questions/search/${e}?limit=${this.props.questionFetchLimit||30}`,
                    cacheKey: B,
                    method: `get`,
                    success: t => {
                        let n = t.reverse();
                        this.setState({
                            questions: n,
                            currentKit: e
                        })
                    },
                    error: () => !1
                })
            }, this.onSearch = e => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: e,
                    currentKit: ``,
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults)
            }, this.debouncedHover = (0, N.debounce)(e => {
                document.getElementById(`right-side-search`).scrollTo(0, 0), this.fetchQuestions(e._id)
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
            }, this.getLeftSide = () => !this.state.results.length && !this.state.loading && !this.state.firstSearch ? !this.state.results.length && (0, P.jsx)(`div`, {
                className: `maxWidth flex hc vc flex-column`,
                children: (0, P.jsxs)(`div`, {
                    style: {
                        padding: `0 38px`,
                        marginTop: 42,
                        textAlign: `center`
                    },
                    children: [(0, P.jsx)(`img`, {
                        src: `/client/img/icons/sad.svg`
                    }), (0, P.jsxs)(`div`, {
                        style: {
                            marginTop: 18,
                            fontFamily: v.SFPro,
                            fontSize: 20
                        },
                        children: [(0, P.jsx)(`div`, {
                            children: `We couldn't find any results.`
                        }), !this.props.isFromQuestionBank && (0, P.jsxs)(`div`, {
                            style: {
                                marginTop: 24
                            },
                            children: [`Try another search or maybe`, ` `, (0, P.jsx)(c, {
                                to: `/create`,
                                children: `make your own kit!`
                            })]
                        })]
                    })]
                })
            }) : (0, P.jsx)(C, {
                dataLength: this.state.results.length,
                hasMore: this.state.hasMore,
                style: {
                    width: `100%`,
                    display: `flex`,
                    flexWrap: `wrap`,
                    paddingTop: 18,
                    overflow: `visible`
                },
                scrollableTarget: `left-side-search`,
                next: this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults,
                loader: null,
                children: this.state.results.map((e, t) => (0, P.jsx)(O.Fragment, {
                    children: (0, P.jsx)(w, {
                        id: e._id,
                        title: e.title,
                        gif: e.gif,
                        handleHover: () => this.debouncedHover(e),
                        numberOfQuestions: e.questionCount,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: e.creator,
                        dateCreated: e.dateCreated,
                        redirectOnImageClick: !0,
                        size: `normal`,
                        selected: this.state.currentKit === e._id,
                        blockHoverable: !0
                    }, e._id)
                }, `read-item-${e._id}`))
            }), this.getRightSide = () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(e => (0, P.jsx)(m, {
                question: e,
                showAllAnswers: !0
            }, e._id))
        }
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0)
        }
        componentDidUpdate(e, t) {
            (this.state.language !== t.language || this.state.subject !== t.subject || this.state.sort !== t.sort || this.props.showMyKits !== e.showMyKits) && this.onSearch(!0)
        }
        render() {
            return (0, P.jsxs)(P.Fragment, {
                children: [this.props.overrideTitle && (0, P.jsx)(i, {
                    title: `Kits about "${this.props.searchQuery}"`
                }), (0, P.jsxs)(h, {
                    customBackgroundColor: this.props.customBackgroundColor,
                    customHeight: this.props.customHeight,
                    children: [(0, P.jsx)(j, {
                        customPadding: this.props.customLeftSidePadding,
                        children: (0, P.jsxs)(`div`, {
                            children: [!this.props.showMyKits && (0, P.jsx)(`div`, {
                                style: {
                                    position: `sticky`,
                                    top: 0,
                                    zIndex: 999
                                },
                                className: `maxWidth`,
                                children: (0, P.jsx)(R, {
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
                    }), (0, P.jsx)(M, {
                        children: this.getRightSide()
                    })]
                })]
            })
        }
    };
export {
    V as t
};