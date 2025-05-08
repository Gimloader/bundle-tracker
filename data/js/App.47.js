function a(b) {
    return b && b.__esModule ? b.default : b;
}
function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    const v = 'GIMKIT_SEARCH_CACHE';
    class w extends h.Component {
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0);
        }
        componentDidUpdate(x, y) {
            this.state.language === y.language && this.state.subject === y.subject && this.state.sort === y.sort && this.props.showMyKits === x.showMyKits || this.onSearch(!0);
        }
        render() {
            return (0, g.jsxs)(g.Fragment, {
                children: [
                    this.props.overrideTitle && (0, g.jsx)(j.Title, { title: `Kits about "${ this.props.searchQuery }"` }),
                    (0, g.jsxs)(i.Container, {
                        customBackgroundColor: this.props.customBackgroundColor,
                        customHeight: this.props.customHeight,
                        children: [
                            (0, g.jsx)(l.LeftSide, {
                                customPadding: this.props.customLeftSidePadding,
                                children: (0, g.jsxs)('div', {
                                    children: [
                                        !this.props.showMyKits && (0, g.jsx)('div', {
                                            style: {
                                                position: 'sticky',
                                                top: 0,
                                                zIndex: 999
                                            },
                                            className: 'maxWidth',
                                            children: (0, g.jsx)(t.default, {
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
                                        }),
                                        this.getLeftSide()
                                    ]
                                })
                            }),
                            (0, g.jsx)(l.RightSide, { children: this.getRightSide() })
                        ]
                    })
                ]
            });
        }
        constructor(x) {
            super(x), (0, f.default)(this, 'state', {
                loading: !1,
                currentKit: '',
                questions: [],
                page: 0,
                hasMore: !0,
                error: !1,
                results: [],
                searchQuery: this.props.searchQuery,
                draftSearchQuery: this.props.searchQuery,
                language: void 0,
                subject: void 0,
                sort: t.SortOptions.relevant,
                showFilters: !1,
                firstSearch: !0,
                fetchingResults: !1
            }), (0, f.default)(this, 'fetchSearchResults', () => {
                const y = this.state.searchQuery;
                if (y && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    const z = {
                        query: y,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (z.language = (0, s.getLanguageKey)(this.state.language)), this.state.subject && (z.subject = this.state.subject), (0, j.request)({
                        url: '/api/games/search',
                        data: z,
                        cacheKey: v,
                        success: A => {
                            this.setState({
                                results: [
                                    ...this.state.results,
                                    ...A.results
                                ],
                                hasMore: A.hasMore,
                                page: A.page
                            });
                        },
                        error: () => {
                            this.setState({ error: !0 }), (0, n.throwError)({
                                title: 'Error searching',
                                content: 'Please try again'
                            });
                        },
                        both: () => {
                            if (!this.props.blockChangingUrl) {
                                const A = new URL(window.location.href);
                                A.searchParams.set('q', y), window.history.pushState({}, '', A);
                            }
                            this.setState({
                                showFilters: !0,
                                loading: !1,
                                firstSearch: !1,
                                fetchingResults: !1
                            });
                        }
                    });
                } else
                    this.setState({ loading: !1 });
            }), (0, f.default)(this, 'fetchMyKits', () => {
                this.setState({ fetchingResults: !0 }), (0, j.request)({
                    cacheKey: v,
                    url: '/api/games/summary/me',
                    method: 'GET',
                    success: y => {
                        this.setState({
                            results: y.games.map(z => ({
                                _id: z._id,
                                title: z.title,
                                gif: z.gif,
                                questions: 0,
                                creator: '',
                                dateCreated: a(u)(z.createdAt).toISOString()
                            }))
                        });
                    },
                    error: () => (0, n.throwError)({ title: 'Error fetching Kits' }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                });
            }), (0, f.default)(this, 'fetchQuestions', y => {
                (0, j.request)({
                    url: `/api/games/questions/search/${ y }?limit=${ this.props.questionFetchLimit || 30 }`,
                    cacheKey: v,
                    method: 'get',
                    success: z => {
                        const A = z.reverse();
                        this.setState({
                            questions: A,
                            currentKit: y
                        });
                    },
                    error: () => !1
                });
            }), (0, f.default)(this, 'onSearch', y => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: y,
                    currentKit: '',
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults);
            }), (0, f.default)(this, 'debouncedHover', (0, p.debounce)(y => {
                document.getElementById('right-side-search').scrollTo(0, 0), this.fetchQuestions(y._id);
            }, 50)), (0, f.default)(this, 'onUpdateSearchQuery', y => {
                this.setState({ draftSearchQuery: y });
            }), (0, f.default)(this, 'onLanguageSelected', y => {
                this.setState({ language: y });
            }), (0, f.default)(this, 'onSubjectSelected', y => {
                this.setState({ subject: y });
            }), (0, f.default)(this, 'onSortSelected', y => {
                this.setState({ sort: y });
            }), (0, f.default)(this, 'getLeftSide', () => this.state.results.length || this.state.loading || this.state.firstSearch ? (0, g.jsx)(o.default, {
                dataLength: this.state.results.length,
                hasMore: this.state.hasMore,
                style: {
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingTop: 18,
                    overflow: 'visible'
                },
                scrollableTarget: 'left-side-search',
                next: this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults,
                loader: null,
                children: this.state.results.map((y, z) => (0, g.jsx)(h.Fragment, {
                    children: (0, g.jsx)(k.default, {
                        id: y._id,
                        title: y.title,
                        gif: y.gif,
                        handleHover: () => this.debouncedHover(y),
                        numberOfQuestions: y.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: y.creator,
                        dateCreated: y.dateCreated,
                        redirectOnImageClick: !0,
                        size: 'normal',
                        selected: this.state.currentKit === y._id,
                        blockHoverable: !0
                    }, y._id)
                }, `read-item-${ y._id }`))
            }) : !this.state.results.length && (0, g.jsx)('div', {
                className: 'maxWidth flex hc vc flex-column',
                children: (0, g.jsxs)('div', {
                    style: {
                        padding: '0 38px',
                        marginTop: 42,
                        textAlign: 'center'
                    },
                    children: [
                        (0, g.jsx)('img', { src: '/client/img/icons/sad.svg' }),
                        (0, g.jsxs)('div', {
                            style: {
                                marginTop: 18,
                                fontFamily: q.Fonts.SFPro,
                                fontSize: 20
                            },
                            children: [
                                (0, g.jsx)('div', { children: 'We couldn\'t find any results.' }),
                                !this.props.isFromQuestionBank && (0, g.jsxs)('div', {
                                    style: { marginTop: 24 },
                                    children: [
                                        'Try another search or maybe',
                                        ' ',
                                        (0, g.jsx)(r.Link, {
                                            to: '/create',
                                            children: 'make your own kit!'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })), (0, f.default)(this, 'getRightSide', () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(y => (0, g.jsx)(m.default, {
                question: y,
                showAllAnswers: !0
            }, y._id)));
        }
    }
    var _x = w;
}), c.register('.....', function (d, e) {
    b(d.exports, 'LeftSide', function () {
        return _m;
    }), b(d.exports, 'RightSide', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    let i, j, k, l = m => m;
    const _m = f.default.div.attrs({
            id: 'left-side-search',
            className: 'scroll-y'
        })(i || (i = l`
  width: 647px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  padding: ${ 0 };
  padding-top: 0px;
`), g.default.White, g.default.BorderGray, n => n.customPadding ? n.customPadding : '15px'), _n = f.default.div.attrs({
            id: 'right-side-search',
            className: 'scroll-y'
        })(j || (j = l`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`));
    f.default.div(k || (k = l`
  font-size: 20px;
  font-weight: ${ 0 };
  margin-bottom: 2px;
`), h.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    b(d.exports, 'SortOptions', function () {
        return _v;
    }), b(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s = t => t;
    const t = g.default.div(q || (q = s`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${ 0 };
  font-family: ${ 0 };
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`), n.FontWeights.Bold, n.Fonts.SFPro), u = (0, g.default)(j.default).attrs({
            placement: 'bottomLeft',
            trigger: 'click',
            overlayStyle: { width: 220 }
        })(r || (r = s``));
    let _v;
    var w;
    (w = _v || (_v = {})).relevant = 'relevant', w.recent = 'recent';
    var _x = y => (0, f.jsxs)('div', {
        className: 'maxWidth',
        style: {
            borderBottom: y.showFilters ? '1px solid #e8e8e8' : '',
            background: 'white',
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [
            (0, f.jsx)(i.default.Search, {
                placeholder: 'Search for kits...',
                onSearch: y.onSearch,
                size: 'large',
                enterButton: !0,
                autoFocus: !0,
                style: { flex: 1 },
                loading: y.loading,
                value: y.searchQuery,
                onChange: z => y.onUpdateSearchQuery(z.target.value)
            }),
            (0, f.jsxs)('div', {
                style: {
                    marginTop: 13,
                    visibility: y.showFilters ? 'visible' : 'hidden'
                },
                children: [
                    (0, f.jsx)(u, {
                        content: (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(t, { children: 'Language:' }),
                                (0, f.jsx)(k.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Languages',
                                    className: 'maxWidth',
                                    value: y.language,
                                    onChange: z => y.onLanguageSelected(z),
                                    children: [...(0, m.getListOfLanguages)()].map(z => (0, f.jsx)(k.default.Option, {
                                        value: z,
                                        children: z
                                    }, z))
                                }),
                                (0, f.jsx)(t, {
                                    style: { marginTop: 12 },
                                    children: 'Subject:'
                                }),
                                (0, f.jsx)(k.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Subjects',
                                    className: 'maxWidth',
                                    value: y.subject,
                                    onChange: z => y.onSubjectSelected(z),
                                    children: [...l.optionsForAreaOfExpertise].map(z => (0, f.jsx)(k.default.Option, {
                                        value: z,
                                        children: z
                                    }, z))
                                })
                            ]
                        }),
                        children: (0, f.jsx)(h.default, {
                            style: { marginRight: 12 },
                            icon: (0, f.jsx)(o.default, {}),
                            size: 'small',
                            type: y.language || y.subject ? 'primary' : 'default',
                            children: 'Filter'
                        })
                    }),
                    (0, f.jsx)(u, {
                        content: (0, f.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, f.jsx)(t, { children: 'Sort By:' }),
                                (0, f.jsxs)(k.default, {
                                    className: 'maxWidth',
                                    value: y.sort,
                                    onChange: z => y.onSortSelected(z),
                                    children: [
                                        (0, f.jsx)(k.default.Option, {
                                            value: _v.relevant,
                                            children: 'Most Relevant'
                                        }),
                                        (0, f.jsx)(k.default.Option, {
                                            value: _v.recent,
                                            children: 'Most Recent'
                                        })
                                    ]
                                })
                            ]
                        }),
                        children: (0, f.jsx)(h.default, {
                            icon: (0, f.jsx)(p.default, {}),
                            size: 'small',
                            children: 'Sort'
                        })
                    })
                ]
            })
        ]
    });
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'SortDescendingOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    b(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M839.6 433.8L749 150.5a9.24 9.24 0 00-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 00-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 00-9.2-9.3zM310.3 167.1a8 8 0 00-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z' }
                }]
        },
        name: 'sort-descending',
        theme: 'outlined'
    };
});