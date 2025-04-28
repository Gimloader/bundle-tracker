function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('d2sMy', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _o(b.exports, 'default', function() {
        return _g;
    });
    var e = a('0hzx+');
    a('LEQ5w');
    var f = a('6MZos');
    var _g = () => (0, e.jsx)(f.default, {});
}), a.register('6MZos', function(b, c) {
    _o(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('wYGc3'),
        g = a('4A/d/0'),
        h = a('RJjEi'),
        i = a('RC6kl3'),
        j = a('9twzo'),
        k = a('jzxyj10');
    let l;
    var m;
    (m = l || (l = {})).recent = 'recent', m.relevant = 'relevant';
    var _n = () => {
        const [_o] = (0, f.useSearchParams)(), p = _o.get('q');
        return e.useEffect(() => {
            p || (0, k.NavigateTo)(j.default.navigation.homeUrl);
        }, [p]), p ? (0, d.jsx)(i.default, {
            children: (0, d.jsxs)('div', {
                className: 'maxHeight flex-column',
                style: {
                    overflow: 'hidden'
                },
                children: [
                    (0, d.jsx)(h.default, {
                        includeSpacer: !0
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            flex: 1,
                            overflow: 'hidden'
                        },
                        children: (0, d.jsx)(g.default, {
                            searchQuery: p,
                            overrideTitle: !0
                        })
                    })
                ]
            })
        }) : null;
    };
}), a.register('4A/d/0', function(b, c) {
    _v(b.exports, 'default', function() {
        return _v;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('12/UA'),
        h = a('PMl60'),
        i = a('Z8D3a'),
        j = a('OrfQT'),
        k = a('+0Sy50'),
        l = a('INKb2'),
        m = a('0qmC91'),
        n = a('4iV4e'),
        o = a('b5kvC'),
        p = a('wYGc3'),
        q = a('983xi'),
        r = a('7i/0c'),
        s = a('ECzOP');
    const t = 'GIMKIT_SEARCH_CACHE';
    class u extends f.Component {
        componentDidMount() {
            this.state.searchQuery && this.onSearch(!0);
        }
        componentDidUpdate(_v, w) {
            this.state.language === w.language && this.state.subject === w.subject && this.state.sort === w.sort && this.props.showMyKits === _v.showMyKits || this.onSearch(!0);
        }
        render() {
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    this.props.overrideTitle && (0, e.jsx)(h.Title, {
                        title: `Kits about "${ this.props.searchQuery }"`
                    }),
                    (0, e.jsxs)(g.Container, {
                        customBackgroundColor: this.props.customBackgroundColor,
                        customHeight: this.props.customHeight,
                        children: [
                            (0, e.jsx)(j.LeftSide, {
                                customPadding: this.props.customLeftSidePadding,
                                children: (0, e.jsxs)('div', {
                                    children: [
                                        !this.props.showMyKits && (0, e.jsx)('div', {
                                            style: {
                                                position: 'sticky',
                                                top: 0,
                                                zIndex: 999
                                            },
                                            className: 'maxWidth',
                                            children: (0, e.jsx)(r.default, {
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
                            (0, e.jsx)(j.RightSide, {
                                children: this.getRightSide()
                            })
                        ]
                    })
                ]
            });
        }
        constructor(v) {
            super(v), (0, d.default)(this, 'state', {
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
                sort: r.SortOptions.relevant,
                showFilters: !1,
                firstSearch: !0,
                fetchingResults: !1
            }), (0, d.default)(this, 'fetchSearchResults', () => {
                const w = this.state.searchQuery;
                if (w && this.state.hasMore && !this.state.fetchingResults) {
                    this.setState({
                        fetchingResults: !0,
                        error: !1
                    });
                    const x = {
                        query: w,
                        page: this.state.page,
                        sort: this.state.sort
                    };
                    this.state.language && (x.language = (0, q.getLanguageKey)(this.state.language)), this.state.subject && (x.subject = this.state.subject), (0, h.request)({
                        url: '/api/games/search',
                        data: x,
                        cacheKey: t,
                        success: w => {
                            this.setState({
                                results: [
                                    ...this.state.results,
                                    ...w.results
                                ],
                                hasMore: w.hasMore,
                                page: w.page
                            });
                        },
                        error: () => {
                            this.setState({
                                error: !0
                            }), (0, l.throwError)({
                                title: 'Error searching',
                                content: 'Please try again'
                            });
                        },
                        both: () => {
                            if (!this.props.blockChangingUrl) {
                                const y = new URL(window.location.href);
                                y.searchParams.set('q', w), window.history.pushState({}, '', y);
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
                    this.setState({
                        loading: !1
                    });
            }), (0, d.default)(this, 'fetchMyKits', () => {
                this.setState({
                    fetchingResults: !0
                }), (0, h.request)({
                    cacheKey: t,
                    url: '/api/games/summary/me',
                    method: 'GET',
                    success: v => {
                        this.setState({
                            results: v.games.map(v => ({
                                _id: v._id,
                                title: v.title,
                                gif: v.gif,
                                questions: 0,
                                creator: '',
                                dateCreated: _b(s)(v.createdAt).toISOString()
                            }))
                        });
                    },
                    error: () => (0, l.throwError)({
                        title: 'Error fetching Kits'
                    }),
                    both: () => this.setState({
                        hasMore: !1,
                        loading: !1,
                        fetchingResults: !1
                    })
                });
            }), (0, d.default)(this, 'fetchQuestions', v => {
                (0, h.request)({
                    url: `/api/games/questions/search/${ v }?limit=${ this.props.questionFetchLimit || 30 }`,
                    cacheKey: t,
                    method: 'get',
                    success: _b => {
                        const w = _b.reverse();
                        this.setState({
                            questions: w,
                            currentKit: v
                        });
                    },
                    error: () => !1
                });
            }), (0, d.default)(this, 'onSearch', v => {
                this.state.fetchingResults || this.setState({
                    searchQuery: this.state.draftSearchQuery,
                    loading: v,
                    currentKit: '',
                    results: [],
                    questions: [],
                    page: 0,
                    hasMore: !0,
                    firstSearch: !0
                }, this.props.showMyKits ? this.fetchMyKits : this.fetchSearchResults);
            }), (0, d.default)(this, 'debouncedHover', (0, n.debounce)(v => {
                document.getElementById('right-side-search').scrollTo(0, 0), this.fetchQuestions(v._id);
            }, 50)), (0, d.default)(this, 'onUpdateSearchQuery', v => {
                this.setState({
                    draftSearchQuery: v
                });
            }), (0, d.default)(this, 'onLanguageSelected', v => {
                this.setState({
                    language: v
                });
            }), (0, d.default)(this, 'onSubjectSelected', v => {
                this.setState({
                    subject: v
                });
            }), (0, d.default)(this, 'onSortSelected', v => {
                this.setState({
                    sort: v
                });
            }), (0, d.default)(this, 'getLeftSide', () => this.state.results.length || this.state.loading || this.state.firstSearch ? (0, e.jsx)(m.default, {
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
                children: this.state.results.map((v, _b) => (0, e.jsx)(f.Fragment, {
                    children: (0, e.jsx)(i.default, {
                        id: v._id,
                        title: v.title,
                        gif: v.gif,
                        handleHover: () => this.debouncedHover(v),
                        numberOfQuestions: v.questions,
                        blockRedirect: this.props.blockKitRedirect,
                        creator: v.creator,
                        dateCreated: v.dateCreated,
                        redirectOnImageClick: !0,
                        size: 'normal',
                        selected: this.state.currentKit === v._id,
                        blockHoverable: !0
                    }, v._id)
                }, `read-item-${ v._id }`))
            }) : !this.state.results.length && (0, e.jsx)('div', {
                className: 'maxWidth flex hc vc flex-column',
                children: (0, e.jsxs)('div', {
                    style: {
                        padding: '0 38px',
                        marginTop: 42,
                        textAlign: 'center'
                    },
                    children: [
                        (0, e.jsx)('img', {
                            src: '/client/img/icons/sad.svg'
                        }),
                        (0, e.jsxs)('div', {
                            style: {
                                marginTop: 18,
                                fontFamily: o.Fonts.SFPro,
                                fontSize: 20
                            },
                            children: [
                                (0, e.jsx)('div', {
                                    children: 'We couldn\'t find any results.'
                                }),
                                !this.props.isFromQuestionBank && (0, e.jsxs)('div', {
                                    style: {
                                        marginTop: 24
                                    },
                                    children: [
                                        'Try another search or maybe',
                                        ' ',
                                        (0, e.jsx)(p.Link, {
                                            to: '/create',
                                            children: 'make your own kit!'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })), (0, d.default)(this, 'getRightSide', () => this.props.questionRenderer ? this.props.questionRenderer(this.state.questions) : this.state.questions.map(v => (0, e.jsx)(k.default, {
                question: v,
                showAllAnswers: !0
            }, v._id)));
        }
    }
    var _v = u;
}), a.register('Z8D3a', function(b, c) {
    _f(b.exports, 'default', function() {
        return _L;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('oXQNI'),
        f = a('fmVdR'),
        g = a('b5kvC'),
        h = a('DKaq/'),
        i = a('Axq+p'),
        j = a('PMl60'),
        k = a('sHRDd'),
        l = a('2HvvA11'),
        m = a('jzxyj10'),
        n = a('ECzOP');
    let o, p, q, r, s, t, u, v, w, x, y, z = _f => _f;
    const A = (0, i.default)(l.default).attrs({
            className: 'maxWidth'
        })(o || (o = z`
  display: flex;
  margin-bottom: 15px;
  text-decoration: none;
`)),
        B = (0, i.default)(e.default)(p || (p = z`
  background-color: ${ 0 };
  border-radius: 7px;
  border: 2px solid ${ 0 };
  font-family: ${ 0 };
`), k.default.White, k.default.BorderGray, g.Fonts.SFPro),
        C = i.default.div.attrs({
            className: 'flex-column'
        })(q || (q = z`
  padding: 20px;
  width: calc(100% - ${ 0 }px);
`), 178),
        D = i.default.div(r || (r = z`
  margin-left: 7px;
  flex: 1;
  overflow: hidden;
`)),
        E = i.default.div(s || (s = z`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: ${ 0 };
`), g.FontWeights.Bold),
        F = i.default.div(t || (t = z`
  overflow: visible;
  letter-spacing: 0px;
  line-height: 1.2;
`)),
        G = i.default.div(u || (u = z`
  font-size: 13px;
  margin-bottom: 6px;
  opacity: 0.8;
`)),
        H = i.default.div(v || (v = z`
  font-size: 13px;
  opacity: 0.8;
  font-family: ${ 0 };
`), g.Fonts.SFPro),
        I = i.default.i(w || (w = z`
  width: 17px;
  margin-right: 10px;
  font-size: 17px;
`)),
        J = (0, i.default)(I).attrs({
            className: 'fad fa-list'
        })(x || (x = z``)),
        K = (0, i.default)(I).attrs({
            className: 'fad fa-calendar-alt'
        })(y || (y = z``));
    var _L = _f => {
        const M = 'normal' === _f.size;
        return (0, d.jsx)(A, {
            to: _f.blockRedirect ? void 0 : `/view/${ _f.id }`,
            children: (0, d.jsx)(B, {
                className: 'maxWidth',
                onMouseEnter: _f.handleHover,
                bodyStyle: {
                    padding: 14
                },
                hoverable: !_f.blockHoverable,
                style: {
                    backgroundColor: _f.selected ? '#eeeeee' : k.default.White
                },
                children: (0, d.jsxs)('div', {
                    className: 'flex maxWidth',
                    children: [
                        (0, d.jsx)('div', {
                            children: (0, d.jsx)(h.default, {
                                image: _f.gif,
                                size: M ? 178 : 148,
                                onClick: _f.redirectOnImageClick && (() => _f.blockRedirect ? null : (0, m.NavigateTo)(`/view/${ _f.id }`))
                            })
                        }),
                        (0, d.jsx)(C, {
                            children: (0, d.jsxs)(D, {
                                children: [
                                    (0, d.jsx)(E, {
                                        style: {
                                            fontSize: M ? 32 : 23
                                        },
                                        children: _f.title
                                    }),
                                    _f.creator && (0, d.jsx)(F, {
                                        style: {
                                            fontSize: M ? 18 : 16
                                        },
                                        children: (0, j.capitalizeFirstLetter)(_f.creator)
                                    }),
                                    (0, d.jsx)(f.default, {
                                        style: {
                                            margin: '16px 0px 18px 0px'
                                        }
                                    }),
                                    !!_f.numberOfQuestions && (0, d.jsxs)(G, {
                                        children: [
                                            (0, d.jsx)(J, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    _f.numberOfQuestions ? _f.numberOfQuestions : '',
                                                    ' ',
                                                    _f.numberOfQuestions ? (0, j.plural)('question', _f.numberOfQuestions) : ''
                                                ]
                                            })
                                        ]
                                    }),
                                    _f.dateCreated && M && (0, d.jsxs)(H, {
                                        children: [
                                            (0, d.jsx)(K, {}),
                                            (0, d.jsxs)('span', {
                                                children: [
                                                    'Created ',
                                                    _b(n)(_f.dateCreated).fromNow()
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    };
}), a.register('DKaq/', function(_b, c) {
    _f(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('x8CoD');
    let j;
    const k = f.default.img.attrs(_f => ({
        src: _f.image
    }))(j || (j = (_f => _f)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), _f => _f.size, _f => _f.size, _f => _f.customRightMargin ? _f.customRightMargin : 0, _f => _f.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var _l = _f => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ..._f,
                    onClick: m => {
                        m.stopPropagation(), _f.onClick && _f.onClick(), _f.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: _f => {
                        _f.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(_f.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), a.register('x8CoD', function(b, c) {
    _f(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _f => {
            const e = _e(_f);
            return e ? _f.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _f;
        },
        _e = _f => {
            if (!_i.some(b => _f.includes(b)))
                return null;
            if (_f.includes(_g) && !_f.includes(`/${ _h }/`))
                return null;
            const f = _f.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('2HvvA11', function(b, c) {
    _f(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _f => _f.external || !_f.to ? (0, d.jsx)('a', {
        href: _f.to,
        tabIndex: Number(_f.tabIndex || '0'),
        onClick: _f.onClick,
        onKeyPress: b => {
            _f.onClick && 'Enter' === b.key && (b.preventDefault(), _f.onClick());
        },
        className: _f.className,
        target: _f.target,
        style: _f.style,
        children: _f.children
    }) : (0, d.jsx)(e.Link, {
        to: _f.to,
        tabIndex: Number(_f.tabIndex || '0'),
        onClick: _f.onClick,
        className: _f.className,
        target: _f.target,
        style: _f.style,
        children: _f.children
    });
}), a.register('jzxyj10', function(b, c) {
    _f(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _f => {
        d.history.push(_f);
    };
}), a.register('OrfQT', function(b, c) {
    _f(b.exports, 'LeftSide', function() {
        return _k;
    }), _f(b.exports, 'RightSide', function() {
        return _l;
    });
    var d = a('Axq+p'),
        e = a('sHRDd'),
        f = a('b5kvC');
    let g, h, i, j = _f => _f;
    const _k = d.default.div.attrs({
            id: 'left-side-search',
            className: 'scroll-y'
        })(g || (g = j`
  width: 647px;
  background: ${ 0 };
  border-right: 1px solid ${ 0 };
  box-sizing: border-box;
  padding: ${ 0 };
  padding-top: 0px;
`), e.default.White, e.default.BorderGray, _f => _f.customPadding ? _f.customPadding : '15px'),
        _l = d.default.div.attrs({
            id: 'right-side-search',
            className: 'scroll-y'
        })(h || (h = j`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
`));
    d.default.div(i || (i = j`
  font-size: 20px;
  font-weight: ${ 0 };
  margin-bottom: 2px;
`), f.FontWeights.Bold);
}), a.register('0qmC91', function(b, c) {
    _f(b.exports, 'default', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = function(_f, g) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(h, i) {
                h.__proto__ = i;
            } || function(h, i) {
                for (var j in i)
                    i.hasOwnProperty(j) && (h[j] = i[j]);
            }, e(_f, g);
        };
    var f = function() {
        return f = Object.assign || function(g) {
            for (var h, i = 1, j = arguments.length; i < j; i++)
                for (var k in h = arguments[i])
                    Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
            return g;
        }, f.apply(this, arguments);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(k) {
        return 'number' == typeof k ? {
            unit: h,
            value: 100 * k
        } : 'string' == typeof k ? k.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(k)
        } : k.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(k)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var j = function(k) {
            function l(m) {
                var n = k.call(this, m) || this;
                return n.lastScrollTop = 0, n.actionTriggered = !1, n.startY = 0, n.currentY = 0, n.dragging = !1, n.maxPullDownDistance = 0, n.getScrollableTarget = function() {
                    return n.props.scrollableTarget instanceof HTMLElement ? n.props.scrollableTarget : 'string' == typeof n.props.scrollableTarget ? document.getElementById(n.props.scrollableTarget) : (null === n.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, n.onStart = function(o) {
                    n.lastScrollTop || (n.dragging = !0, o instanceof MouseEvent ? n.startY = o.pageY : o instanceof TouchEvent && (n.startY = o.touches[0].pageY), n.currentY = n.startY, n._infScroll && (n._infScroll.style.willChange = 'transform', n._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, n.onMove = function(o) {
                    n.dragging && (o instanceof MouseEvent ? n.currentY = o.pageY : o instanceof TouchEvent && (n.currentY = o.touches[0].pageY), n.currentY < n.startY || (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) && n.setState({
                        pullToRefreshThresholdBreached: !0
                    }), n.currentY - n.startY > 1.5 * n.maxPullDownDistance || n._infScroll && (n._infScroll.style.overflow = 'visible', n._infScroll.style.transform = 'translate3d(0px, ' + (n.currentY - n.startY) + 'px, 0px)')));
                }, n.onEnd = function() {
                    n.startY = 0, n.currentY = 0, n.dragging = !1, n.state.pullToRefreshThresholdBreached && (n.props.refreshFunction && n.props.refreshFunction(), n.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        n._infScroll && (n._infScroll.style.overflow = 'auto', n._infScroll.style.transform = 'none', n._infScroll.style.willChange = 'none');
                    });
                }, n.onScrollListener = function(o) {
                    'function' == typeof n.props.onScroll && setTimeout(function() {
                        return n.props.onScroll && n.props.onScroll(o);
                    }, 0);
                    var p = n.props.height || n._scrollableNode ? o.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    n.actionTriggered || ((n.props.inverse ? n.isElementAtTop(p, n.props.scrollThreshold) : n.isElementAtBottom(p, n.props.scrollThreshold)) && n.props.hasMore && (n.actionTriggered = !0, n.setState({
                        showLoader: !0
                    }), n.props.next && n.props.next()), n.lastScrollTop = p.scrollTop);
                }, n.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, n.throttledOnScrollListener = function(o, p, q, r) {
                    var s, t = !1,
                        u = 0;

                    function v() {
                        s && clearTimeout(s);
                    }

                    function v() {
                        var w = this,
                            x = Date.now() - u,
                            y = arguments;

                        function z() {
                            u = Date.now(), q.apply(w, y);
                        }

                        function z() {
                            s = void 0;
                        }
                        t || (r && !s && _k(), f(), void 0 === r && x > o ? _k() : !0 !== p && (s = setTimeout(r ? j : _k, void 0 === r ? o - x : o)));
                    }
                    return 'boolean' != typeof p && (r = q, q = p, p = void 0), g.cancel = function() {
                        f(), t = !0;
                    }, g;
                }(150, n.onScrollListener).bind(n), n.onStart = n.onStart.bind(n), n.onMove = n.onMove.bind(n), n.onEnd = n.onEnd.bind(n), n;
            }
            return function(l, m) {
                function n() {
                    this.constructor = l;
                }
                e(l, m), l.prototype = null === m ? Object.create(m) : (a.prototype = m.prototype, new a());
            }(a, k), a.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, a.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, a.prototype.UNSAFE_componentWillReceiveProps = function(l) {
                this.props.dataLength !== l.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, a.prototype.isElementAtTop = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _k(m);
                return o.unit === g ? l.scrollTop <= o.value + n - l.scrollHeight + 1 || 0 === l.scrollTop : l.scrollTop <= o.value / 100 + n - l.scrollHeight + 1 || 0 === l.scrollTop;
            }, a.prototype.isElementAtBottom = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = _k(m);
                return o.unit === g ? l.scrollTop + n >= l.scrollHeight - o.value : l.scrollTop + n >= o.value / 100 * l.scrollHeight;
            }, a.prototype.render = function() {
                var l = this,
                    m = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return _p(d).createElement('div', {
                    style: o,
                    className: 'infinite-scroll-component__outerdiv'
                }, _p(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(_p) {
                        return l._infScroll = _p;
                    },
                    style: m
                }, this.props.pullDownToRefresh && _p(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(_p) {
                        return l._pullDown = _p;
                    }
                }, _b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, a;
        }(d.Component),
        _k = j;
}), a.register('983xi', function(_b, c) {
    _d(_b.exports, 'getListOfLanguages', function() {
        return _e;
    }), _d(_b.exports, 'getLanguageKey', function() {
        return _f;
    }), _d(_b.exports, 'getLanguageName', function() {
        return _g;
    });
    const d = {
            en: 'English',
            af: 'Afrikaans',
            sq: 'Albanian',
            am: 'Amharic',
            ar: 'Arabic',
            hy: 'Armenian',
            az: 'Azerbaijani',
            eu: 'Basque',
            be: 'Belarusian',
            bn: 'Bengali',
            bs: 'Bosnian',
            bg: 'Bulgarian',
            ca: 'Catalan',
            ceb: 'Cebuano',
            ny: 'Chichewa',
            'zh-cn': 'Chinese Simplified',
            'zh-tw': 'Chinese Traditional',
            co: 'Corsican',
            hr: 'Croatian',
            cs: 'Czech',
            da: 'Danish',
            nl: 'Dutch',
            eo: 'Esperanto',
            et: 'Estonian',
            tl: 'Filipino',
            fi: 'Finnish',
            fr: 'French',
            fy: 'Frisian',
            gl: 'Galician',
            ka: 'Georgian',
            de: 'German',
            el: 'Greek',
            gu: 'Gujarati',
            ht: 'Haitian Creole',
            ha: 'Hausa',
            haw: 'Hawaiian',
            iw: 'Hebrew',
            hi: 'Hindi',
            hmn: 'Hmong',
            hu: 'Hungarian',
            is: 'Icelandic',
            ig: 'Igbo',
            id: 'Indonesian',
            ga: 'Irish',
            it: 'Italian',
            ja: 'Japanese',
            jw: 'Javanese',
            kn: 'Kannada',
            kk: 'Kazakh',
            km: 'Khmer',
            ko: 'Korean',
            ku: 'Kurdish (Kurmanji)',
            ky: 'Kyrgyz',
            lo: 'Lao',
            la: 'Latin',
            lv: 'Latvian',
            lt: 'Lithuanian',
            lb: 'Luxembourgish',
            mk: 'Macedonian',
            mg: 'Malagasy',
            ms: 'Malay',
            ml: 'Malayalam',
            mt: 'Maltese',
            mi: 'Maori',
            mr: 'Marathi',
            mn: 'Mongolian',
            my: 'Myanmar (Burmese)',
            ne: 'Nepali',
            no: 'Norwegian',
            ps: 'Pashto',
            fa: 'Persian',
            pl: 'Polish',
            pt: 'Portuguese',
            ma: 'Punjabi',
            ro: 'Romanian',
            ru: 'Russian',
            sm: 'Samoan',
            gd: 'Scots Gaelic',
            sr: 'Serbian',
            st: 'Sesotho',
            sn: 'Shona',
            sd: 'Sindhi',
            si: 'Sinhala',
            sk: 'Slovak',
            sl: 'Slovenian',
            so: 'Somali',
            es: 'Spanish',
            su: 'Sundanese',
            sw: 'Swahili',
            sv: 'Swedish',
            tg: 'Tajik',
            ta: 'Tamil',
            te: 'Telugu',
            th: 'Thai',
            tr: 'Turkish',
            uk: 'Ukrainian',
            ur: 'Urdu',
            uz: 'Uzbek',
            vi: 'Vietnamese',
            cy: 'Welsh',
            xh: 'Xhosa',
            yi: 'Yiddish',
            yo: 'Yoruba',
            zu: 'Zulu'
        },
        _e = () => Object.keys(d).map(_d => d[_d]),
        _f = _d => Object.keys(d).filter(_b => d[_b] === _d)[0],
        _g = _d => d[_d];
}), a.register('7i/0c', function(b, c) {
    _d(b.exports, 'SortOptions', function() {
        return _t;
    }), _d(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ulE4q'),
        g = a('ewwAh'),
        h = a('DzGwD'),
        i = a('inwN3'),
        j = a('ZBY0K1'),
        _k = a('983xi'),
        l = a('b5kvC'),
        m = a('uHpNo1'),
        n = a('R0rU70');
    let o, p, q = _d => _d;
    const r = e.default.div(o || (o = q`
  width: 71px;
  height: 17px;
  line-height: 1.2;
  font-weight: ${ 0 };
  font-family: ${ 0 };
  font-size: 14px;
  color: #3d3d3d;
  margin-bottom: 4px;
`), l.FontWeights.Bold, l.Fonts.SFPro),
        s = (0, e.default)(h.default).attrs({
            placement: 'bottomLeft',
            trigger: 'click',
            overlayStyle: {
                width: 220
            }
        })(p || (p = q``));
    let _t;
    var u;
    (u = _t || (_t = {})).relevant = 'relevant', u.recent = 'recent';
    var _v = _d => (0, d.jsxs)('div', {
        className: 'maxWidth',
        style: {
            borderBottom: _d.showFilters ? '1px solid #e8e8e8' : '',
            background: 'white',
            paddingTop: 16,
            paddingBottom: 18
        },
        children: [
            (0, d.jsx)(g.default.Search, {
                placeholder: 'Search for kits...',
                onSearch: _d.onSearch,
                size: 'large',
                enterButton: !0,
                autoFocus: !0,
                style: {
                    flex: 1
                },
                loading: _d.loading,
                value: _d.searchQuery,
                onChange: b => _d.onUpdateSearchQuery(b.target.value)
            }),
            (0, d.jsxs)('div', {
                style: {
                    marginTop: 13,
                    visibility: _d.showFilters ? 'visible' : 'hidden'
                },
                children: [
                    (0, d.jsx)(s, {
                        content: (0, d.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, d.jsx)(r, {
                                    children: 'Language:'
                                }),
                                (0, d.jsx)(i.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Languages',
                                    className: 'maxWidth',
                                    value: _d.language,
                                    onChange: b => _d.onLanguageSelected(b),
                                    children: [...(0, _k.getListOfLanguages)()].map(_d => (0, d.jsx)(i.default.Option, {
                                        value: _d,
                                        children: _d
                                    }, _d))
                                }),
                                (0, d.jsx)(r, {
                                    style: {
                                        marginTop: 12
                                    },
                                    children: 'Subject:'
                                }),
                                (0, d.jsx)(i.default, {
                                    showSearch: !0,
                                    allowClear: !0,
                                    placeholder: 'All Subjects',
                                    className: 'maxWidth',
                                    value: _d.subject,
                                    onChange: b => _d.onSubjectSelected(b),
                                    children: [...j.optionsForAreaOfExpertise].map(_d => (0, d.jsx)(i.default.Option, {
                                        value: _d,
                                        children: _d
                                    }, _d))
                                })
                            ]
                        }),
                        children: (0, d.jsx)(f.default, {
                            style: {
                                marginRight: 12
                            },
                            icon: (0, d.jsx)(m.default, {}),
                            size: 'small',
                            type: _d.language || _d.subject ? 'primary' : 'default',
                            children: 'Filter'
                        })
                    }),
                    (0, d.jsx)(s, {
                        content: (0, d.jsxs)('div', {
                            className: 'maxWidth',
                            children: [
                                (0, d.jsx)(r, {
                                    children: 'Sort By:'
                                }),
                                (0, d.jsxs)(i.default, {
                                    className: 'maxWidth',
                                    value: _d.sort,
                                    onChange: b => _d.onSortSelected(b),
                                    children: [
                                        (0, d.jsx)(i.default.Option, {
                                            value: _t.relevant,
                                            children: 'Most Relevant'
                                        }),
                                        (0, d.jsx)(i.default.Option, {
                                            value: _t.recent,
                                            children: 'Most Recent'
                                        })
                                    ]
                                })
                            ]
                        }),
                        children: (0, d.jsx)(f.default, {
                            icon: (0, d.jsx)(n.default, {}),
                            size: 'small',
                            children: 'Sort'
                        })
                    })
                ]
            })
        ]
    });
}), a.register('DzGwD', function(b, c) {
    _d(b.exports, 'default', function() {
        return _t;
    }, function(_d) {
        return _t = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('ijg0s'),
        h = a('fLB6s'),
        i = a('GaHpv'),
        j = a('0RCFm'),
        k = a('zRcGn'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = _d => {
            let {
                title: n,
                content: o,
                prefixCls: p
            } = _d;
            return n || o ? e.createElement(e.Fragment, null, n && e.createElement('div', {
                className: `${ p }-title`
            }, (0, h.getRenderPropValue)(n)), e.createElement('div', {
                className: `${ p }-inner-content`
            }, (0, h.getRenderPropValue)(o))) : null;
        },
        n = e.forwardRef((_d, a) => {
            var o, p;
            const {
                prefixCls: q,
                title: r,
                content: s,
                overlayClassName: _t,
                placement: u = 'top',
                trigger: v = 'hover',
                mouseEnterDelay: w = 0.1,
                mouseLeaveDelay: x = 0.1,
                overlayStyle: y = {},
                arrowPointAtCenter: z,
                arrow: A
            } = _d, B = l(_d, [
                'prefixCls',
                'title',
                'content',
                'overlayClassName',
                'placement',
                'trigger',
                'mouseEnterDelay',
                'mouseLeaveDelay',
                'overlayStyle',
                'arrowPointAtCenter',
                'arrow'
            ]), {
                getPrefixCls: C
            } = e.useContext(f.ConfigContext), D = C('popover', q), [E, F] = (0, k.default)(D), G = C(), H = _b(d)(_t, F), I = null !== (p = null !== (o = 'boolean' != typeof A && (null == A ? void 0 : A.arrowPointAtCenter)) && void 0 !== o ? o : z) && void 0 !== p && p, J = null != A ? A : {
                arrowPointAtCenter: I
            };
            return E(e.createElement(g.default, Object.assign({
                placement: u,
                arrow: J,
                trigger: v,
                mouseEnterDelay: w,
                mouseLeaveDelay: x,
                overlayStyle: y
            }, B, {
                prefixCls: D,
                overlayClassName: H,
                ref: a,
                overlay: e.createElement(m, {
                    prefixCls: D,
                    title: r,
                    content: s
                }),
                transitionName: (0, i.getTransitionName)(G, 'zoom-big', B.transitionName),
                'data-popover-inject': !0
            })));
        });
    n._InternalPanelDoNotUseOrYouWillBeFired = j.default;
    var o = n;
}), a.register('fLB6s', function(_b, c) {
    _d(_b.exports, 'getRenderPropValue', function() {
        return _d;
    });
    const _d = _d => _d ? 'function' == typeof _d ? _d() : _d : null;
}), a.register('0RCFm', function(b, c) {
    _d(b.exports, 'getOverlay', function() {
        return _k;
    }, function(_d) {
        return _k = _d;
    }), _d(b.exports, 'RawPurePanel', function() {
        return _l;
    }, function(_d) {
        return _l = _d;
    }), _d(b.exports, 'default', function() {
        return _l;
    }, function(_d) {
        return _l = _d;
    });
    var d = a('LEQ5w'),
        e = a('JrtKP'),
        f = a('4a/hT'),
        g = a('1P5ls'),
        h = a('zRcGn'),
        i = a('fLB6s'),
        j = function(k, l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    const _k = (_m, _n, a) => {
        if (_n || a)
            return d.createElement(d.Fragment, null, _n && d.createElement('div', {
                className: `${ _m }-title`
            }, (0, i.getRenderPropValue)(_n)), d.createElement('div', {
                className: `${ _m }-inner-content`
            }, (0, i.getRenderPropValue)(a)));
    };

    function _l(_m) {
        const {
            hashId: n,
            prefixCls: o,
            className: p,
            style: q,
            placement: r = 'top',
            title: s,
            content: t,
            children: u
        } = _m;
        return d.createElement('div', {
            className: _n(e)(n, o, `${ o }-pure`, `${ o }-placement-${ r }`, p),
            style: q
        }, d.createElement(f.Popup, Object.assign({}, _m, {
            className: n,
            prefixCls: o
        }), u || _k(o, s, t)));
    }

    function _l(m) {
        const {
            prefixCls: _n
        } = m, o = j(m, ['prefixCls']), {
            getPrefixCls: p
        } = d.useContext(g.ConfigContext), q = p('popover', _n), [r, s] = (0, h.default)(q);
        return r(d.createElement(_u, Object.assign({}, o, {
            prefixCls: q,
            hashId: s
        })));
    }
}), a.register('zRcGn', function(b, c) {
    _q(b.exports, 'default', function() {
        return _u;
    });
    var d = a('USVCQ'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('ndmtK'),
        h = a('7hbGU'),
        i = a('Su/HH');
    const j = _q => {
            const {
                componentCls: k,
                popoverBg: l,
                popoverColor: m,
                width: n,
                fontWeightStrong: o,
                popoverPadding: p,
                boxShadowSecondary: q,
                colorTextHeading: r,
                borderRadiusLG: s,
                zIndexPopup: t,
                marginXS: _u,
                colorBgElevated: v
            } = _q;
            return [{
                    [k]: Object.assign(Object.assign({}, (0, h.resetComponent)(_q)), {
                        position: 'absolute',
                        top: 0,
                        left: {
                            _skip_check_: !0,
                            value: 0
                        },
                        zIndex: t,
                        fontWeight: 'normal',
                        whiteSpace: 'normal',
                        textAlign: 'start',
                        cursor: 'auto',
                        userSelect: 'text',
                        '--antd-arrow-background-color': v,
                        '&-rtl': {
                            direction: 'rtl'
                        },
                        '&-hidden': {
                            display: 'none'
                        },
                        [`${ k }-content`]: {
                            position: 'relative'
                        },
                        [`${ k }-inner`]: {
                            backgroundColor: l,
                            backgroundClip: 'padding-box',
                            borderRadius: s,
                            boxShadow: q,
                            padding: p
                        },
                        [`${ k }-title`]: {
                            minWidth: n,
                            marginBottom: _u,
                            color: r,
                            fontWeight: o
                        },
                        [`${ k }-inner-content`]: {
                            color: m
                        }
                    })
                },
                (0, i.default)(_q, {
                    colorBg: 'var(--antd-arrow-background-color)'
                }),
                {
                    [`${ k }-pure`]: {
                        position: 'relative',
                        maxWidth: 'none',
                        [`${ k }-content`]: {
                            display: 'inline-block'
                        }
                    }
                }
            ];
        },
        k = _q => {
            const {
                componentCls: l
            } = _q;
            return {
                [l]: g.PresetColors.map(a => {
                    const m = _q[`${ a }-6`];
                    return {
                        [`&${ l }-${ a }`]: {
                            '--antd-arrow-background-color': m,
                            [`${ l }-inner`]: {
                                backgroundColor: m
                            },
                            [`${ l }-arrow`]: {
                                background: 'transparent'
                            }
                        }
                    };
                })
            };
        },
        l = _q => {
            const {
                componentCls: m,
                lineWidth: n,
                lineType: o,
                colorSplit: p,
                paddingSM: q,
                controlHeight: r,
                fontSize: s,
                lineHeight: t,
                padding: u
            } = _q, v = r - Math.round(s * t);
            return {
                [m]: {
                    [`${ m }-inner`]: {
                        padding: 0
                    },
                    [`${ m }-title`]: {
                        margin: 0,
                        padding: `${ v / 2 }px ${ u }px ${ v / 2 - n }px`,
                        borderBottom: `${ n }px ${ o } ${ p }`
                    },
                    [`${ m }-inner-content`]: {
                        padding: `${ q }px ${ u }px`
                    }
                }
            };
        };
    var m = (0, e.default)('Popover', _q => {
        const {
            colorBgElevated: n,
            colorText: o,
            wireframe: p
        } = _q, q = (0, f.merge)(_q, {
            popoverBg: n,
            popoverColor: o,
            popoverPadding: 12
        });
        return [
            j(q),
            k(q),
            p && l(q),
            (0, d.initZoomMotion)(q, 'zoom-big')
        ];
    }, _q => {
        let {
            zIndexPopupBase: n
        } = _q;
        return {
            zIndexPopup: n + 30,
            width: 177
        };
    });
}), a.register('ZBY0K1', function(b, c) {
    _q(b.exports, 'optionsForAreaOfExpertise', function() {
        return _n;
    }), _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('d1g2b2'),
        g = a('fmVdR'),
        h = a('inwN3'),
        i = a('pYmyT1'),
        j = a('NmrDs1'),
        k = a('Hi0/F0'),
        l = a('XQD071'),
        m = a('gs4MT');
    const _n = [
            'STEM',
            'Arts',
            'Communications',
            'Computer Science',
            'Counselor',
            'Deaf Education',
            'World Languages',
            'Speech and Language',
            'English/Language Arts',
            'American Sign Language',
            'Science',
            'Special Education',
            'Gifted and Talented',
            'Technology',
            'Engineering',
            'Math',
            'History and Social Studies',
            'Health/Physical Education',
            'English Language Learner (ELL)',
            'Family & Consumer Science (FACS)',
            'Homeschool',
            'School Administrator',
            'Librarian',
            'Technology/Instructional Coach',
            'Other'
        ].sort(),
        o = [
            'Pre-K',
            'Elementary School',
            'Middle School',
            'High School',
            'Post High School',
            'Other School',
            'Not Using For School',
            'Other'
        ];
    var _p = () => {
        const {
            login: _q
        } = e.useContext(j.default), [r, s] = e.useState(''), [t, u] = e.useState(''), v = !r || !t;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(f.Title, {
                    children: '\uD83D\uDCA1 Area of Expertise'
                }),
                (0, d.jsx)(h.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: _q => s(_q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: _n.map(_q => ({
                        value: _q,
                        label: _q
                    }))
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(f.Title, {
                    children: '\uD83C\uDF82 Grade Level'
                }),
                (0, d.jsx)(h.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: _q => u(_q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: o.map(_q => ({
                        value: _q,
                        label: _q
                    }))
                }),
                (0, d.jsx)(i.default, {
                    size: 'large',
                    style: {
                        marginTop: 10
                    },
                    disabled: v,
                    onClick: () => {
                        v || (_q.areaOfExpertise = r, _q.gradeLevel = t, _q.informationNeeded.replace(_q.informationNeeded.filter(_q => _q !== k.informationTypes.areaOfExpertise && _q !== k.informationTypes.gradeLevel)));
                    },
                    children: 'Continue'
                }),
                (0, d.jsx)(g.default, {}),
                (0, d.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        'By continuing, you agree to our',
                        ' ',
                        (0, d.jsx)('a', {
                            href: m.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        'and',
                        ' ',
                        (0, d.jsx)('a', {
                            href: m.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        '.'
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 25
                    }
                }),
                (0, d.jsx)(l.default, {
                    link: 'https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52'
                })
            ]
        });
    };
}), a.register('d1g2b2', function(b, c) {
    _t(b.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return _o;
    }), _t(b.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return _p;
    }), _t(b.exports, 'Title', function() {
        return _q;
    }), _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('NmrDs1'),
        g = a('b5kvC'),
        h = a('sHRDd'),
        i = a('fmVdR'),
        j = a('ewwAh'),
        k = a('pYmyT1'),
        l = a('Hi0/F0'),
        m = a('XQD071'),
        n = a('dq4zH');
    const _o = 20,
        _p = 25,
        _q = _t => (0, d.jsx)('div', {
            style: {
                fontFamily: g.Fonts.SFPro,
                fontWeight: g.FontWeights.Bold,
                color: h.default.Black,
                fontSize: 18
            },
            children: _t.children
        }),
        r = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var _s = () => {
        const {
            login: _t
        } = e.useContext(f.default), [u, v] = e.useState(_t.firstName), [w, x] = e.useState(_t.lastName), [y, z] = e.useState(_t.password), A = () => {
            let B = !0;
            return _t.informationNeeded.includes(l.informationTypes.firstName) && (u || (B = !1)), _t.informationNeeded.includes(l.informationTypes.lastName) && (w || (B = !1)), _t.informationNeeded.includes(l.informationTypes.accountPassword) && (!y || y.length < 6) && (B = !1), B;
        }, B = () => {
            A() && (u && (_t.firstName = u), w && (_t.lastName = w), y && (_t.password = y), _t.informationNeeded.replace(_t.informationNeeded.filter(_t => _t !== l.informationTypes.firstName && _t !== l.informationTypes.lastName && _t !== l.informationTypes.accountPassword)));
        }, C = _t.accountType === n.default.student;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_q, {
                    children: 'First Name'
                }),
                (0, d.jsx)(j.default, {
                    maxLength: _o,
                    style: r,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: _t => v(_t.target.value),
                    onPressEnter: B,
                    autoFocus: !0
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsxs)(_q, {
                    children: [
                        'Last ',
                        C ? 'Initial' : 'Name'
                    ]
                }),
                (0, d.jsx)(j.default, {
                    maxLength: C ? 1 : _p,
                    style: r,
                    size: 'large',
                    placeholder: `Last ${ C ? 'Initial' : 'Name' } here...`,
                    onChange: _t => x(_t.target.value),
                    onPressEnter: B
                }),
                _t.informationNeeded.includes(l.informationTypes.accountPassword) && (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(i.default, {}),
                        (0, d.jsx)(_q, {
                            children: 'Password'
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 12,
                                marginTop: -5,
                                marginBottom: 4
                            },
                            children: 'Must contain at least 6 characters'
                        }),
                        (0, d.jsx)(j.default.Password, {
                            style: r,
                            onChange: _t => z(_t.target.value),
                            placeholder: 'Password here...',
                            size: 'large',
                            maxLength: 96,
                            onPressEnter: B
                        })
                    ]
                }),
                (0, d.jsx)(i.default, {}),
                (0, d.jsx)(k.default, {
                    disabled: !A(),
                    onClick: B,
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                !C && (0, d.jsx)(m.default, {
                    link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061'
                })
            ]
        });
    };
}), a.register('NmrDs1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('ha/3p1');
    var _f = d.createContext(e.default);
}), a.register('ha/3p1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Hi0/F0'),
        e = a('5ka2e1');
    var _f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), a.register('Hi0/F0', function(b, c) {
    _i(b.exports, 'informationTypes', function() {
        return _f;
    }), _i(b.exports, 'default', function() {
        return _x;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const _f = {
            email: 'EMAIL',
            password: 'PASSWORD',
            accountPassword: 'ACCOUNT_PASSWORD',
            firstName: 'FIRST_NAME',
            lastName: 'LAST_NAME',
            accountType: 'ACCOUNT_TYPE',
            country: 'COUNTRY',
            areaOfExpertise: 'AREA_OF_EXPERTISE',
            gradeLevel: 'GRADE_LEVEL',
            organization: 'ORGANIZATION',
            acceptedLatestPolicies: 'ACCEPTED_LATEST_POLICIES',
            schoolId: 'SCHOOL_ID',
            districtId: 'DISTRICT_ID'
        },
        g = {
            userExists: !1,
            email: '',
            accountType: null,
            googleToken: '',
            firstName: '',
            lastName: '',
            password: '',
            schoolId: '',
            districtId: '',
            country: '',
            areaOfExpertise: '',
            gradeLevel: '',
            organization: '',
            acceptsLatestPolicies: !1,
            authenticated: !1
        },
        {
            userExists: h,
            email: i,
            accountType: j,
            googleToken: k,
            firstName: l,
            lastName: m,
            password: n,
            schoolId: o,
            districtId: p,
            country: q,
            areaOfExpertise: r,
            gradeLevel: s,
            organization: t,
            acceptsLatestPolicies: u,
            authenticated: v
        } = g;
    class w {
        constructor() {
            this.userExists = h, this.email = i, this.accountType = j, this.googleToken = k, this.firstName = l, this.lastName = m, this.password = n, this.schoolId = o, this.districtId = p, this.country = q, this.areaOfExpertise = r, this.gradeLevel = s, this.organization = t, this.acceptsLatestPolicies = u, this.authenticated = v, this.informationNeeded = e.observable.array([_f.email]), this.reset = () => {
                Object.keys(g).forEach(_i => this[_i] = g[_i]), this.informationNeeded.replace([_f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], w.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], w.prototype, 'email', void 0), (0, d.__decorate)([e.observable], w.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], w.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], w.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'password', void 0), (0, d.__decorate)([e.observable], w.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'country', void 0), (0, d.__decorate)([e.observable], w.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], w.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], w.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], w.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], w.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], w.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], w.prototype, 'reset', void 0);
    var _x = w;
}), a.register('5ka2e1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _r;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const f = {
            currentStage: a('AUbBm1').default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: '',
            classJoiningId: '',
            classJoiningName: '',
            classJoiningTeacherName: ''
        },
        {
            currentStage: g,
            emailSignInBlocked: h,
            creatingAccount: i,
            loggingIn: j,
            updatingAccountInformation: k,
            loginError: l,
            redirectUri: m,
            classJoiningId: n,
            classJoiningName: o,
            classJoiningTeacherName: p
        } = f;
    class q {
        constructor() {
            this.currentStage = g, this.emailSignInBlocked = h, this.creatingAccount = i, this.loggingIn = j, this.updatingAccountInformation = k, this.loginError = l, this.redirectUri = m, this.classJoiningId = n, this.classJoiningName = o, this.classJoiningTeacherName = p, this.reset = () => {
                Object.keys(f).forEach(_i => this[_i] = f[_i]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], q.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], q.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], q.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], q.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], q.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], q.prototype, 'reset', void 0);
    var _r = q;
}), a.register('AUbBm1', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var _f = d;
}), a.register('pYmyT1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2x11J'),
        f = a('ulE4q');
    var _g = (0, e.observer)(_i => (0, d.jsx)(f.default, {
        disabled: _i.disabled,
        size: _i.size || 'middle',
        type: 'primary',
        onClick: _i.onClick,
        style: Object.assign({
            width: '100%'
        }, _i.style),
        loading: _i.loading,
        children: _i.children
    }));
}), a.register('XQD071', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('aFzmN2');
    var _f = _i => (0, d.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, d.jsx)('div', {}),
            (0, d.jsx)(e.default, {
                link: _i.link
            })
        ]
    });
}), a.register('aFzmN2', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('13V8F2'),
        f = a('ulE4q'),
        g = a('ijg0s');
    var _h = _i => (0, d.jsx)(g.default, {
        title: 'Learn more on why we collect this data',
        children: (0, d.jsx)(f.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, d.jsx)(e.default, {}),
            href: _i.link || '',
            target: '_blank'
        })
    });
}), a.register('13V8F2', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('5uH+S'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LockOutlined';
    var _i = e.forwardRef(h);
}), a.register('5uH+S', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z'
                }
            }]
        },
        name: 'lock',
        theme: 'outlined'
    };
}), a.register('dq4zH', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).educator = 'educator', e.student = 'student', e.guardian = 'guardian', e.nonSchool = 'nonSchool';
    var _f = d;
}), a.register('uHpNo1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('in/jk1'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'FilterOutlined';
    var _i = e.forwardRef(h);
}), a.register('in/jk1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z'
                }
            }]
        },
        name: 'filter',
        theme: 'outlined'
    };
}), a.register('R0rU70', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('939mY'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'SortDescendingOutlined';
    var _i = e.forwardRef(h);
}), a.register('939mY', function(b, c) {
    _d(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M839.6 433.8L749 150.5a9.24 9.24 0 00-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 00-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 00-9.2-9.3zM310.3 167.1a8 8 0 00-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z'
                }
            }]
        },
        name: 'sort-descending',
        theme: 'outlined'
    };
}), a.register('RC6kl3', function(b, c) {
    _d(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('KAA9h2');
    var _f = _d => {
        const g = (0, e.use100vh)();
        return (0, d.jsx)('div', {
            style: {
                height: g,
                width: '100%'
            },
            className: _d.className,
            children: _d.children
        });
    };
}), a.register('KAA9h2', function(b, c) {
    _d(b.exports, 'use100vh', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('LEQ5w'),
        e = function() {
            return e = Object.assign || function(f) {
                for (var g, h = 1, i = arguments.length; h < i; h++)
                    for (var j in g = arguments[h])
                        Object.prototype.hasOwnProperty.call(g, j) && (f[j] = g[j]);
                return f;
            }, e.apply(this, arguments);
        },
        f = function(g, h) {
            var i = {};
            for (var j in g)
                Object.prototype.hasOwnProperty.call(g, j) && h.indexOf(j) < 0 && (i[j] = g[j]);
            if (null != g && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(g); k < j.length; k++)
                    h.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(g, j[k]) && (i[j[k]] = g[j[k]]);
            }
            return i;
        },
        g = !1,
        h = (0, d.forwardRef)(function(i, j) {
            var k = i.style,
                l = f(i, ['style']),
                m = _i();
            !g && (null == k ? void 0 : k.height) && (g = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var n = e(e({}, k), {
                height: m ? m + 'px' : '100vh'
            });
            return _k(d).createElement('div', e({
                ref: j,
                style: n
            }, l));
        });
    h.displayName = 'Div100vh';

    function _i() {
        var j = (0, d.useState)(_i),
            _k = j[0],
            l = j[1],
            m = function() {
                var n = (0, d.useState)(!1),
                    o = n[0],
                    p = n[1];
                return (0, d.useEffect)(function() {
                    _i() && p(!0);
                }, []), o;
            }();
        return (0, d.useEffect)(function() {
            if (m)
                return window.addEventListener('resize', j),
                    function() {
                        return window.removeEventListener('resize', j);
                    };

            function n() {
                var o = _i();
                l(o);
            }
        }, [m]), m ? _k : null;
    }

    function _i() {
        return _i() ? window.innerHeight : null;
    }

    function _i() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), a.register('gn3Uk7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('haBtH6'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CopyOutlined';
    var _i = e.forwardRef(h);
}), a.register('haBtH6', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z'
                }
            }]
        },
        name: 'copy',
        theme: 'outlined'
    };
}), a.register('ieNls8', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('8auc66'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DeleteOutlined';
    var _i = e.forwardRef(h);
}), a.register('8auc66', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z'
                }
            }]
        },
        name: 'delete',
        theme: 'outlined'
    };
}), a.register('GldUd7', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('1tgJh4'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'EditOutlined';
    var _i = e.forwardRef(h);
}), a.register('1tgJh4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z'
                }
            }]
        },
        name: 'edit',
        theme: 'outlined'
    };
}), a.register('ZYBJo4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('CHYV/2'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PlayCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('CHYV/2', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z'
                    }
                }
            ]
        },
        name: 'play-circle',
        theme: 'outlined'
    };
}), a.register('kRwUk25', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(_h, i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            p(x.offsetHeight + 8), r(x.offsetWidth);
                        }),
                        x = setInterval(() => {
                            var y;
                            const z = j ? `.${ j(v) }` : `.${ v }-dropdown`,
                                A = null === (y = n.current) || void 0 === y ? void 0 : y.querySelector(z);
                            A && (clearInterval(x), w.observe(A));
                        }, 10);
                    return () => {
                        clearInterval(x), w.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: n,
                style: {
                    paddingBottom: o,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: q
                }
            }, e.createElement(_h, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, m), {
                    margin: 0
                }),
                open: s,
                visible: s,
                getPopupContainer: () => n.current
            }))));
        };
    }
}), a.register('N9LXh20', function(b, c) {
    _d(b.exports, 'initMoveMotion', function() {
        return _m;
    });
    var d = a('wC0DT'),
        e = a('4vKB9');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        g = new(0, d.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        h = new(0, d.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        i = new(0, d.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        j = new(0, d.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }),
        k = new(0, d.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }),
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        _m = (_d, b) => {
            const {
                antCls: n
            } = _d, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _d.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _d.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _d.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
            'size',
            'align',
            'className',
            'rootClassName',
            'children',
            'direction',
            'prefixCls',
            'split',
            'style',
            'wrap'
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('jlX4s16', function(b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('6BM9K6', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    }, function(_d) {
        return _s = _d;
    });
    var d = a('QECub'),
        e = a('JrtKP'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('dFMJk'),
        i = a('QyNEL'),
        j = a('J4wJU8'),
        k = a('E4QrV8'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = (_d, a) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: _s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = _d, x = l(_d, [
                'prefixCls',
                'className',
                'rootClassName',
                'style',
                'children',
                'icon',
                'color',
                'onClose',
                'closeIcon',
                'closable'
            ]);
            const {
                getPrefixCls: y,
                direction: z
            } = f.useContext(g.ConfigContext), [A, B] = f.useState(!0);
            f.useEffect(() => {
                'visible' in x && B(x.visible);
            }, [x.visible]);
            const C = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                D = Object.assign({
                    backgroundColor: t && !C ? t : void 0
                }, q),
                E = y('tag', n),
                [F, G] = (0, k.default)(E),
                H = _j(e)(E, {
                    [`${ E }-${ t }`]: C,
                    [`${ E }-has-color`]: t && !C,
                    [`${ E }-hidden`]: !A,
                    [`${ E }-rtl`]: 'rtl' === z
                }, o, p, G),
                I = _d => {
                    _d.stopPropagation(), null == u || u(_d), _d.defaultPrevented || B(!1);
                },
                J = 'function' == typeof x.onClick || r && 'a' === r.type,
                K = _s || null,
                L = K ? f.createElement(f.Fragment, null, K, f.createElement('span', null, r)) : r,
                M = f.createElement('span', Object.assign({}, x, {
                    ref: a,
                    className: H,
                    style: D
                }), L, w ? v ? f.createElement('span', {
                    className: `${ E }-close-icon`,
                    onClick: I
                }, v) : f.createElement(d.default, {
                    className: `${ E }-close-icon`,
                    onClick: I
                }) : null);
            return F(J ? f.createElement(i.default, null, M) : M);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = n;
}), a.register('J4wJU8', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('E4QrV8'),
        h = function(i, _j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && _j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    _j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = _e => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = _e, o = h(_e, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: p
        } = e.useContext(f.ConfigContext), q = p('tag', j), [r, s] = (0, g.default)(q), t = _b(d)(q, {
            [`${ q }-checkable`]: !0,
            [`${ q }-checkable-checked`]: l
        }, k, s);
        return r(e.createElement('span', Object.assign({}, o, {
            className: t,
            onClick: _e => {
                null == m || m(!l), null == n || n(_e);
            }
        })));
    };
}), a.register('E4QrV8', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('xbYck1'),
        g = a('bL6OF'),
        h = a('7hbGU');
    const i = (_e, _b, a) => {
            const j = (0, f.default)(a);
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: _e[`color${ a }`],
                    background: _e[`color${ j }Bg`],
                    borderColor: _e[`color${ j }Border`]
                }
            };
        },
        j = _e => (0, g.genPresetColor)(_e, (_b, a) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = a;
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: _e.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = _e => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = _e, p = n - m, q = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(_e)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: _e.marginXS,
                    paddingInline: p,
                    fontSize: _e.tagFontSize,
                    lineHeight: `${ _e.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: _e.tagDefaultBg,
                    border: `${ _e.lineWidth }px ${ _e.lineType } ${ _e.colorBorder }`,
                    borderRadius: _e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ _e.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: _e.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: q,
                        color: _e.colorTextDescription,
                        fontSize: _e.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ _e.motionDurationMid }`,
                        '&:hover': {
                            color: _e.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ _e.iconCls }-close, ${ _e.iconCls }-close:hover`]: {
                            color: _e.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: _e.colorPrimary,
                            backgroundColor: _e.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: _e.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: _e.colorPrimary,
                            '&:hover': {
                                backgroundColor: _e.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: _e.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ _e.iconCls } + span, > span + ${ _e.iconCls }`]: {
                        marginInlineStart: p
                    }
                })
            };
        };
    var _l = (0, d.default)('Tag', _e => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = _e, q = Math.round(m * n), r = _e.fontSizeSM, s = q - 2 * o, t = _e.colorFillAlter, u = _e.colorText, v = (0, e.merge)(_e, {
            tagFontSize: r,
            tagLineHeight: s,
            tagDefaultBg: t,
            tagDefaultColor: u,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(v),
            j(v),
            i(v, 'success', 'Success'),
            i(v, 'processing', 'Info'),
            i(v, 'error', 'Error'),
            i(v, 'warning', 'Warning')
        ];
    });
}), a.register('xbYck1', function(b, c) {
    function d(_e) {
        if ('string' != typeof _e)
            return _e;
        return _e.charAt(0).toUpperCase() + _e.slice(1);
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('Kc6XZ23', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('/2bBN24', function(b, c) {
    _f(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var g = (0, d.useMemo)(function() {
                return window.matchMedia(_f);
            }, [_f]),
            h = (0, d.useState)(function() {
                return g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return g.addEventListener ? (g.addEventListener('change', k), function() {
                return g.removeEventListener('change', k);
            }) : (g.addListener(k), function() {
                return g.removeListener(k);
            });
        }, [g]), i;
    }
}), a.register('ptkti24', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__exportStar || function(f, g) {
            for (var h in f)
                'default' === h || Object.prototype.hasOwnProperty.call(g, h) || d(g, f, h);
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), e(a('hDE9a25'), b.exports), e(a('rPed825'), b.exports), e(a('hpMH825'), b.exports);
}), a.register('hDE9a25', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useBreakpoints = b.exports.useBreakpoint = void 0;
    var d = a('hpMH825');
    b.exports.useBreakpoint = function(e) {
        return (0, d.useWindowSize)().width < e;
    }, b.exports.useBreakpoints = function(e) {
        var f = (0, d.useWindowSize)().width;
        return e.map(function(g) {
            return f < g;
        });
    };
}), a.register('hpMH825', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__setModuleDefault || (Object.create ? function(f, g) {
            Object.defineProperty(f, 'default', {
                enumerable: !0,
                value: g
            });
        } : function(f, g) {
            f.default = g;
        }),
        f = b.exports && b.exports.__importStar || function(g) {
            if (g && g.__esModule)
                return g;
            var h = {};
            if (null != g)
                for (var i in g)
                    'default' !== i && Object.prototype.hasOwnProperty.call(g, i) && d(h, g, i);
            return e(h, g), h;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useWindowSize = void 0;
    var g = f(a('LEQ5w'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    b.exports.useWindowSize = function() {
        var h = g.useState(_h()),
            i = h[0],
            j = h[1];
        return g.useLayoutEffect(function() {
            function k() {
                j(_h());
            }
            return window.addEventListener('resize', h),
                function() {
                    return window.removeEventListener('resize', h);
                };
        }, []), i;
    };
}), a.register('rPed825', function(b, c) {
    var d = b.exports && b.exports.__assign || function() {
            return d = Object.assign || function(e) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (e[i] = f[i]);
                return e;
            }, d.apply(this, arguments);
        },
        e = b.exports && b.exports.__createBinding || (Object.create ? function(f, g, h, i) {
            void 0 === i && (i = h), Object.defineProperty(f, i, {
                enumerable: !0,
                get: function() {
                    return g[h];
                }
            });
        } : function(f, g, h, i) {
            void 0 === i && (i = h), f[i] = g[h];
        }),
        f = b.exports && b.exports.__setModuleDefault || (Object.create ? function(g, h) {
            Object.defineProperty(g, 'default', {
                enumerable: !0,
                value: h
            });
        } : function(g, h) {
            g.default = h;
        }),
        g = b.exports && b.exports.__importStar || function(h) {
            if (h && h.__esModule)
                return h;
            var i = {};
            if (null != h)
                for (var j in h)
                    'default' !== j && Object.prototype.hasOwnProperty.call(h, j) && e(i, h, j);
            return f(i, h), i;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useComponentSize = void 0;
    var _h = g(a('LEQ5w'));
    b.exports.useComponentSize = function() {
        var i = _h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = _h.useRef(),
            m = _h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return _h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _b(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _b(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('d1E7w3', function(b, c) {
    _b(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('oBBW6'),
        f = a('LEQ5w');
    const g = f.lazy(() => a('7cBN63'));
    var _h = _b => {
        const i = _b.hideSkeleton ? (0, d.jsx)('div', {
            className: 'maxWidth'
        }) : (0, d.jsx)('div', {
            className: 'maxWidth',
            children: (0, d.jsx)(e.default, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return (0, d.jsx)(f.Suspense, {
            fallback: i,
            children: (0, d.jsx)(g, {
                ..._b
            })
        });
    };
}), a.register('7cBN63', function(_b, c) {
    _b.exports = Promise.all([
        a('o60By')(new URL(a('HmN9A').resolve('2nG1U'), import.meta.url).toString()),
        import('./' + a('HmN9A').resolve('6iUO5'))
    ]).then(() => a('cg5Ud'));
}), a.register('LvSG/', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('yXL4x'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ClockCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('yXL4x', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'
                    }
                }
            ]
        },
        name: 'clock-circle',
        theme: 'outlined'
    };
}), a.register('AIgxT', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('yqz0G'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'TrophyOutlined';
    var _i = e.forwardRef(h);
}), a.register('yqz0G', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z'
                }
            }]
        },
        name: 'trophy',
        theme: 'outlined'
    };
}), a.register('RMEzW', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        normal: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 400;\n',
        bold: '\n    font-family: \'Product Sans\', sans-serif;\n    font-weight: 800;\n  ',
        black: '\n  font-family: \'Product Sans\', sans-serif;\n  font-weight: 900;\n',
        fontFamilyName: 'Product Sans, sans-serif'
    };
}), a.register('gCqar24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), a.register('+UyIc24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), a.register('CJCpN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('v47zB'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var _i = e.forwardRef(h);
}), a.register('v47zB', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    _o(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), a.register('xoHbD', function(b, c) {
    _o(b.exports, 'CLASSIC', function() {
        return _d;
    }), _o(b.exports, 'TEAMS', function() {
        return _e;
    }), _o(b.exports, 'THANOS', function() {
        return _f;
    }), _o(b.exports, 'BOSS_BATTLE', function() {
        return _g;
    }), _o(b.exports, 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE', function() {
        return _h;
    }), _o(b.exports, 'LAVA', function() {
        return _i;
    }), _o(b.exports, 'IMPOSTER', function() {
        return _j;
    }), _o(b.exports, 'DRAW', function() {
        return _k;
    }), _o(b.exports, 'PARDY', function() {
        return _l;
    });
    const _d = 'CLASSIC',
        _e = 'TEAMS',
        _f = 'THANOS',
        _g = 'BOSS_BATTLE',
        _h = 'HUMAN_ZOMBIE_DEFENDING_HOMEBASE',
        _i = 'LAVA',
        _j = 'IMPOSTER',
        _k = 'DRAW',
        _l = 'PARDY';
}), a.register('RW2Mp', function(b, c) {
    _o(b.exports, 'default', function() {
        return _A;
    });
    var d = a('5jnR813'),
        e = a('8DsNq12'),
        f = a('Li49B9'),
        g = a('hc2IK9'),
        h = a('HgFD113'),
        i = a('a01Gf12'),
        j = a('i+h089'),
        k = a('kp44T9'),
        l = a('LEQ5w'),
        m = a('JrtKP'),
        n = function(_o) {
            (0, j.default)(b, _o);
            var p = (0, k.default)(b);

            function q(r) {
                var s;
                (0, h.default)(this, q), (s = p.call(this, r)).handleChange = function(t) {
                    var u = s.props,
                        v = u.disabled,
                        w = u.onChange;
                    v || ('checked' in s.props || s.setState({
                        checked: t.target.checked
                    }), w && w({
                        target: (0, g.default)((0, g.default)({}, s.props), {}, {
                            checked: t.target.checked
                        }),
                        stopPropagation: function() {
                            t.stopPropagation();
                        },
                        preventDefault: function() {
                            t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                    }));
                }, s.saveInput = function(t) {
                    s.input = t;
                };
                var t = 'checked' in r ? r.checked : r.defaultChecked;
                return s.state = {
                    checked: t
                }, s;
            }
            return (0, i.default)(b, [{
                    key: 'focus',
                    value: function() {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function() {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var q, r = this.props,
                            s = r.prefixCls,
                            t = r.className,
                            u = r.style,
                            v = r.name,
                            w = r.id,
                            x = r.type,
                            y = r.disabled,
                            z = r.readOnly,
                            _A = r.tabIndex,
                            B = r.onClick,
                            C = r.onFocus,
                            D = r.onBlur,
                            E = r.onKeyDown,
                            F = r.onKeyPress,
                            G = r.onKeyUp,
                            H = r.autoFocus,
                            I = r.value,
                            J = r.required,
                            K = (0, f.default)(r, [
                                'prefixCls',
                                'className',
                                'style',
                                'name',
                                'id',
                                'type',
                                'disabled',
                                'readOnly',
                                'tabIndex',
                                'onClick',
                                'onFocus',
                                'onBlur',
                                'onKeyDown',
                                'onKeyPress',
                                'onKeyUp',
                                'autoFocus',
                                'value',
                                'required'
                            ]),
                            L = Object.keys(K).reduce(function(M, N) {
                                return 'aria-' !== N.substr(0, 5) && 'data-' !== N.substr(0, 5) && 'role' !== N || (M[N] = K[N]), M;
                            }, {}),
                            M = this.state.checked,
                            N = _r(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return _r(l).createElement('span', {
                            className: N,
                            style: u
                        }, _r(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: _A,
                            className: ''.concat(s, '-input'),
                            checked: !!M,
                            onClick: B,
                            onFocus: C,
                            onBlur: D,
                            onKeyUp: G,
                            onKeyDown: E,
                            onKeyPress: F,
                            onChange: this.handleChange,
                            autoFocus: H,
                            ref: this.saveInput,
                            value: I
                        }, L)), _r(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(q, _r) {
                    return 'checked' in q ? (0, g.default)((0, g.default)({}, _r), {}, {
                        checked: q.checked
                    }) : null;
                }
            }]), b;
        }(l.Component);
    n.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var o = n;
}), a.register('5jnR813', function(b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('8DsNq12', function(b, c) {
    function _d(_e, f, g) {
        return f in _e ? Object.defineProperty(_e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _e[f] = g, _e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Li49B9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QUESF9');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('QUESF9', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('hc2IK9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8DsNq12');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HgFD113', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf12', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('i+h089', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF15');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF15', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kp44T9', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf16'),
        e = a('sQfA/14'),
        f = a('rKHa09');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf16', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/14', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rKHa09', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX14'),
        e = a('JgIFg');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX14', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('JgIFg', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _b(b.exports, 'default', function() {
        return _c;
    });
}), a.register('dDoty', function(b, _c) {
    _b(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w');
    const f = e.lazy(() => a('l3sIa'));
    var _g = _b => (0, d.jsx)(e.Suspense, {
        fallback: _b.fallback || null,
        children: (0, d.jsx)(f, {
            latex: _b.latex
        })
    });
}), a.register('l3sIa', function(_b, c) {
    _b.exports = Promise.all([
        import('./' + a('HmN9A').resolve('8pe9D')),
        import('./' + a('HmN9A').resolve('5OCdz'))
    ]).then(() => a('vZVkZ'));
}), a.register('QdGLB', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'HookType', function() {
        return d;
    }), (e = d || (d = {})).selectBox = 'selectBox', e.kit = 'kit', e.number = 'number';
}), a.register('y4x7Q', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    _i(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), a.register('Rtfgy20', function(b, c) {
    _i(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('xQDqe25', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _j(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), a.register('6XgQB1', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    let h;
    var i;
    let j;
    let k;
    var l;
    _j(b.exports, 'QuestionType', function() {
        return d;
    }), _j(b.exports, 'Privacy', function() {
        return f;
    }), _j(b.exports, 'GameStatus', function() {
        return h;
    }), _j(b.exports, 'GameType', function() {
        return j;
    }), _j(b.exports, 'GameGoal', function() {
        return k;
    }), _j(b.exports, 'themes', function() {
        return _q;
    }), _j(b.exports, 'ExperienceSource', function() {
        return _r;
    }), (e = d || (d = {})).multipleChoice = 'mc', e.textInput = 'text', (g = f || (f = {})).public = 'public', g.private = 'private', (i = h || (h = {})).setup = 'setup', i.join = 'join', i.teams = 'teams', i.gameplay = 'gameplay', i.results = 'results', (j || (j = {})).live = 'live', (l = k || (k = {})).time = 'time', l.race = 'race', l.allIn = 'allIn';
    const m = '#ffffff',
        n = '#000000';
    let o;
    var p;
    (p = o || (o = {})).easy = 'easy', p.medium = 'medium', p.hard = 'hard', p.veryHard = 'veryHard', p.veryVeryHard = 'veryVeryHard';
    const _q = [{
            cost: 0,
            name: 'Default',
            description: 'Works fine, that\'s all',
            question: {
                background: '#303f9f',
                text: m
            },
            palette: [{
                    background: '#771322',
                    text: m
                },
                {
                    background: '#A85C15',
                    text: m
                },
                {
                    background: '#0D6B33',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
                }
            ],
            owned: !0,
            isActive: !0
        },
        {
            cost: 5,
            name: 'Thanksgiving',
            description: 'The perfect theme to show your thanks',
            question: {
                background: '#6C2F00',
                text: m
            },
            palette: [{
                    background: '#9E682A',
                    text: m
                },
                {
                    background: '#B54730',
                    text: m
                },
                {
                    background: '#8A9748',
                    text: m
                },
                {
                    background: '#F1B930',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 10,
            name: 'Night',
            description: 'A little easier on the eyes',
            question: {
                background: '#000a12',
                text: m
            },
            palette: [{
                    background: '#263238',
                    text: m
                },
                {
                    background: '#37474f',
                    text: m
                },
                {
                    background: '#455a64',
                    text: m
                },
                {
                    background: '#546e7a',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500000,
            name: 'Thanos',
            description: 'Perfectly balanced, as all things should be',
            question: {
                background: '#0D0019',
                text: m
            },
            palette: [{
                    background: '#220044',
                    text: m
                },
                {
                    background: '#330066',
                    text: m
                },
                {
                    background: '#3E007C',
                    text: m
                },
                {
                    background: '#4F1787',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 2000,
            name: 'Ocean',
            description: 'Under the sea...',
            question: {
                background: '#000063',
                text: m
            },
            palette: [{
                    background: '#283593',
                    text: m
                },
                {
                    background: '#076296',
                    text: m
                },
                {
                    background: '#0277bd',
                    text: m
                },
                {
                    background: '#1565c0',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000,
            name: 'Forest',
            description: 'A walk through the woods',
            question: {
                background: '#4c3d33',
                text: m
            },
            palette: [{
                    background: '#385645',
                    text: m
                },
                {
                    background: '#425C49',
                    text: m
                },
                {
                    background: '#415641',
                    text: m
                },
                {
                    background: '#4C6349',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 1250,
            name: 'Sunset',
            description: 'Take a breather',
            question: {
                background: '#7F7496',
                text: m
            },
            palette: [{
                    background: '#F46F5A',
                    text: m
                },
                {
                    background: '#ED712D',
                    text: m
                },
                {
                    background: '#7A596A',
                    text: m
                },
                {
                    background: '#E8AB3C',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 750,
            name: 'Pastel',
            description: 'Lighten the mood',
            question: {
                background: '#FFbfd1',
                text: '#434343'
            },
            palette: [{
                    background: '#FFA69E',
                    text: '#5b5b5b'
                },
                {
                    background: '#FCF6BF',
                    text: '#5b5b5b'
                },
                {
                    background: '#D0F4DE',
                    text: '#5b5b5b'
                },
                {
                    background: '#93E1D8',
                    text: '#5b5b5b'
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 500,
            name: 'Retro',
            description: 'Old school...',
            question: {
                background: '#9C0022',
                text: m
            },
            palette: [{
                    background: '#001D3B',
                    text: m
                },
                {
                    background: '#FFAE52',
                    text: m
                },
                {
                    background: '#FE5963',
                    text: m
                },
                {
                    background: '#A71C94',
                    text: m
                }
            ],
            owned: !1,
            isActive: !1
        },
        {
            cost: 100000000,
            name: 'Pure Gold',
            description: 'Now you\'re just showing off',
            question: {
                background: n,
                text: '#FFCD2B'
            },
            palette: [{
                    background: '#FFCD2B',
                    text: n
                },
                {
                    background: '#FFC721',
                    text: n
                },
                {
                    background: '#FFD147',
                    text: n
                },
                {
                    background: '#FFCD38',
                    text: n
                }
            ],
            owned: !1,
            isActive: !1
        }
    ];
    let _r;
    var s;
    (s = _r || (_r = {})).original = 'original', s.map = 'map';
}), a.register('66RLp2', function(b, c) {
    let d;
    var e;
    _j(b.exports, 'MapModeType', function() {
        return d;
    }), (e = d || (d = {})).liveGame = 'liveGame', e.assignment = 'assignment';
}), a.register('Pq0g9', function(b, c) {
    _j(b.exports, 'AnalyticsTrackEvent', function() {
        return _h;
    });
    var d = a('e7pFf'),
        e = a('PMl60'),
        f = a('Td6aM'),
        g = a('J3ZQI');
    const _h = _j => {
        var i, j, k;
        if ((window.gtag && !(null === (i = _j.blockedSource) || void 0 === i ? void 0 : i.google) && window.gtag('event', _j.event, _j.properties), f.AnalyticsFlags.educatorOnly) && (null === (k = (0, e.getUser)()) || void 0 === k ? void 0 : k.accountType) !== d.default.educator)
            return;
        (null === (j = _j.blockedSource) || void 0 === j ? void 0 : j.posthog) || (0, g.TrackPostHogEvent)({
            event: _j.event,
            properties: _j.properties,
            force: _j.forcePostHog
        });
    };
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _e => {
        const f = d.useRef(_e);
        return d.useEffect(() => {
            f.current = _e;
        }), f;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('FpbFp', function(b, c) {
    _l(b.exports, 'default', function() {
        return _r;
    });
    var d = a('r98tK1'),
        e = a('GepBD'),
        f = a('LEQ5w');
    a('WPpLv');
    var g = a('cO49c'),
        h = a('QvROH'),
        i = a('mmS5q'),
        j = 44;

    function k(_l) {
        var m, n, o;
        return m = _l, n = 0, o = 1, _l = (Math.min(Math.max(n, m), o) - n) / (o - n), _l = (_l -= 1) * _l * _l + 1;
    }
    var k = f.forwardRef(function(l, m) {
            var n, o = l.classes,
                p = l.className,
                q = l.color,
                _r = void 0 === q ? 'primary' : q,
                s = l.disableShrink,
                t = void 0 !== s && s,
                u = l.size,
                v = void 0 === u ? 40 : u,
                w = l.style,
                x = l.thickness,
                y = void 0 === x ? 3.6 : x,
                z = l.value,
                A = void 0 === z ? 0 : z,
                B = l.variant,
                C = void 0 === B ? 'indeterminate' : B,
                D = (0, e.default)(l, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]),
                E = {},
                F = {},
                G = {};
            if ('determinate' === C || 'static' === C) {
                var H = 2 * Math.PI * ((j - y) / 2);
                E.strokeDasharray = H.toFixed(3), G['aria-valuenow'] = Math.round(A), 'static' === C ? (E.strokeDashoffset = ''.concat(((100 - A) / 100 * H).toFixed(3), 'px'), F.transform = 'rotate(-90deg)') : (E.strokeDashoffset = ''.concat((n = (100 - A) / 100, n * n * H).toFixed(3), 'px'), F.transform = 'rotate('.concat((270 * _o(A / 70)).toFixed(3), 'deg)'));
            }
            return f.createElement('div', (0, d.default)({
                className: (0, g.default)(o.root, p, 'inherit' !== _r && o['color'.concat((0, i.default)(_r))], {
                    indeterminate: o.indeterminate,
                    static: o.static
                } [C]),
                style: (0, d.default)({
                    width: v,
                    height: v
                }, F, w),
                ref: m,
                role: 'progressbar'
            }, G, D), f.createElement('svg', {
                className: o.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(j, ' ').concat(j)
            }, f.createElement('circle', {
                className: (0, g.default)(o.circle, t && o.circleDisableShrink, {
                    indeterminate: o.circleIndeterminate,
                    static: o.circleStatic
                } [C]),
                style: E,
                cx: j,
                cy: j,
                r: (j - y) / 2,
                fill: 'none',
                strokeWidth: y
            })));
        }),
        l = (0, h.default)(function(m) {
            return {
                root: {
                    display: 'inline-block'
                },
                static: {
                    transition: m.transitions.create('transform')
                },
                indeterminate: {
                    animation: '$circular-rotate 1.4s linear infinite'
                },
                colorPrimary: {
                    color: m.palette.primary.main
                },
                colorSecondary: {
                    color: m.palette.secondary.main
                },
                svg: {
                    display: 'block'
                },
                circle: {
                    stroke: 'currentColor'
                },
                circleStatic: {
                    transition: m.transitions.create('stroke-dashoffset')
                },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': {
                        transformOrigin: '50% 50%'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                },
                '@keyframes circular-dash': {
                    '0%': {
                        strokeDasharray: '1px, 200px',
                        strokeDashoffset: '0px'
                    },
                    '50%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-15px'
                    },
                    '100%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-125px'
                    }
                },
                circleDisableShrink: {
                    animation: 'none'
                }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(k);
}), a.register('I1JN8', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('0qmC91'),
        g = a('PMl60');
    var _h = _h => {
        const [i, j] = e.useState([]), [k] = e.useState(_h.limit), [l, m] = e.useState(_h.defaultPage), [n, _o] = e.useState(!0), [p, q] = e.useState([]), [r, s] = e.useState(!1), t = e.useMemo(() => (_h.modifyItems ? _h.modifyItems(p) : p).map((i, j) => _h.toRender(i, j)), [
            p.length,
            _h.toRender
        ]), u = () => {
            if (i.includes(l))
                return;
            j(_h => [
                ..._h,
                l
            ]);
            const v = {
                page: l,
                limit: k
            };
            (0, g.request)({
                url: _h.url,
                method: 'post',
                cacheKey: _h.cacheKey,
                data: _h.modifyBody ? _h.modifyBody(v) : v,
                success: (i, j) => {
                    _h.onTotalItems && !r && (_h.onTotalItems(i.totalItems), s(!0)), i.items.forEach(i => {
                        _h.onItemFetched && _h.onItemFetched(i, j);
                    }), q(_h => [
                        ..._h,
                        ...i.items
                    ]), _o(i.hasNextPage), m(i.nextPage);
                },
                error: () => {
                    _h.onTotalItems && !r && (_h.onTotalItems(0), s(!0)), _o(!1);
                },
                both: () => j(_h => _h.filter(_h => _h !== v.page))
            });
        };
        return e.useEffect(u, []), !n && _h.forceEmptyMessage || !n && 0 === p.length && _h.emptyMessage ? _h.emptyMessage(p) : (0, d.jsxs)(f.default, {
            dataLength: p.length,
            hasMore: n,
            style: _h.scrollStyle,
            next: u,
            loader: _h.loader || (0, d.jsx)('div', {}),
            scrollThreshold: _h.scrollThreshold,
            endMessage: _h.endMessage ? _h.endMessage(p) : null,
            scrollableTarget: _h.scrollableTarget,
            children: [
                _h.prefix ? _h.prefix() : null,
                t
            ]
        });
    };
}), a.register('7s5R80', function(b, c) {
    _h(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd');
    let g;
    var _h = _h => (0, d.jsx)(_i, {
        onClick: _h.onClick,
        className: _h.className,
        style: _h.style,
        children: _h.children
    });
    const _i = e.default.div(g || (g = (_h => _h)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), f.default.White);
}), a.register('vj5K40', function(b, c) {
    _h(b.exports, 'GetHomepagePath', function() {
        return _h;
    }), _h(b.exports, 'RedirectToHomepage', function() {
        return _i;
    }), _h(b.exports, 'ReplaceToHomePage', function() {
        return _j;
    });
    var d = a('gs4MT'),
        e = a('oBJ9G'),
        f = a('PMl60'),
        g = a('jzxyj10');
    const _h = () => (0, f.isLoggedIn)() ? (0, f.isStudent)() ? d.HOME : d.KITS : '/',
        _i = () => {
            (0, g.NavigateTo)(_h());
        },
        _j = () => {
            e.history.replace(_h());
        };
}), a.register('9R7cy', function(b, c) {
    _h(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _h => (0, d.jsx)('i', {
        className: `${ _h.name }${ _h.className ? ` ${ _h.className }` : '' }`,
        style: _h.style
    });
}), a.register('gi1Ds0', function(b, c) {
    _h(b.exports, 'UpgradeModal_CopyKit', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('hHkFq');
    const _f = {
        title: (0, d.jsx)(d.Fragment, {
            children: 'Copy kits with Pro'
        }),
        description: (0, d.jsxs)(d.Fragment, {
            children: [
                'To copy kits and make them your own, upgrade to ',
                e.COMPANY_NAME,
                ' Pro.'
            ]
        })
    };
}), a.register('fuuXY5', function(b, c) {
    _h(b.exports, 'responsiveArray', function() {
        return _f;
    }), _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('XpGPm');
    const _f = [
        'xxl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs'
    ];

    function _g() {
        const [, _h] = (0, e.useToken)(), i = (_h => ({
            xs: `(max-width: ${ _h.screenXSMax }px)`,
            sm: `(min-width: ${ _h.screenSM }px)`,
            md: `(min-width: ${ _h.screenMD }px)`,
            lg: `(min-width: ${ _h.screenLG }px)`,
            xl: `(min-width: ${ _h.screenXL }px)`,
            xxl: `(min-width: ${ _h.screenXXL }px)`
        }))((_h => {
            const j = _h,
                k = [].concat(_f).reverse();
            return k.forEach((_h, b) => {
                const l = _h.toUpperCase(),
                    m = `screen${ l }Min`,
                    n = `screen${ l }`;
                if (!(j[m] <= j[n]))
                    throw new Error(`${ m }<=${ n } fails : !(${ j[m] }<=${ j[n] })`);
                if (b < k.length - 1) {
                    const o = `screen${ l }Max`;
                    if (!(j[n] <= j[o]))
                        throw new Error(`${ n }<=${ o } fails : !(${ j[n] }<=${ j[o] })`);
                    const p = `screen${ k[b + 1].toUpperCase() }Min`;
                    if (!(j[o] <= j[p]))
                        throw new Error(`${ o }<=${ p } fails : !(${ j[o] }<=${ j[p] })`);
                }
            }), _h;
        })(_h));
        return _k(d).useMemo(() => {
            const j = new Map();
            let _k = -1,
                l = {};
            return {
                matchHandlers: {},
                dispatch: _k => (l = _k, j.forEach(j => j(l)), j.size >= 1),
                subscribe(m) {
                    return j.size || this.register(), _k += 1, j.set(_k, m), m(l), _k;
                },
                unsubscribe(m) {
                    j.delete(m), j.size || this.unregister();
                },
                unregister() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = this.matchHandlers[m];
                        null == n || n.mql.removeListener(null == n ? void 0 : n.listener);
                    }), j.clear();
                },
                register() {
                    Object.keys(i).forEach(j => {
                        const m = i[j],
                            n = m => {
                                let {
                                    matches: o
                                } = m;
                                this.dispatch(Object.assign(Object.assign({}, l), {
                                    [j]: o
                                }));
                            },
                            o = window.matchMedia(m);
                        o.addListener(n), this.matchHandlers[m] = {
                            mql: o,
                            listener: n
                        }, n(o);
                    });
                },
                responsiveMap: i
            };
        }, [_h]);
    }
}), a.register('7B+hJ16', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.lazyWithPreload = void 0;
    var d = a('LEQ5w');

    function e(f) {
        var g, h, i = (0, d.lazy)(f),
            j = (0, d.forwardRef)(function(k, l) {
                var m = (0, d.useRef)(null != g ? g : i);
                return (0, d.createElement)(m.current, Object.assign(l ? {
                    ref: l
                } : {}, k));
            });
        return j.preload = function() {
            return h || (h = f().then(function(k) {
                return g = k.default;
            })), h;
        }, j;
    }
    b.exports.lazyWithPreload = _d, b.exports.default = _d;
}), a.register('ibLRf19', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
}), a.register('dBHoZ22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var _d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, _d.default)((0, _d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
    _r(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: {
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
}), a.register('YEu6T2', function(b, c) {
    _r(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('b5kvC');
    let i, j, k, l = _r => _r;
    const m = '#1890FF',
        n = f.default.div(i || (i = l`
  width: 100%;
  box-sizing: border-box;
  font-family: ${ 0 };
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${ 0 }px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${ 0 };
  color: ${ 0 };
  ${ 0 }
  transition: all 0.25s;
  &:hover {
    color: ${ 0 };
  }
`), h.Fonts.SFPro, 14, _r => _r.selected && !_r.blockBackground ? '#E5F7FE' : g.default.White, _r => _r.selected ? m : 'rgba(0,0,0,.65)', _r => _r.selected && !_r.blockStripe && 'border-right: 3px solid ' + m + ';', m),
        o = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(j || (j = l``)),
        p = f.default.div(k || (k = l``));
    class q extends e.Component {
        render() {
            const {
                title: _r,
                onClick: s,
                selected: t,
                blockStripe: u,
                blockBackground: v
            } = this.props, w = this.props.icon;
            return (0, d.jsxs)(n, {
                selected: t,
                blockStripe: u,
                blockBackground: v,
                onClick: s,
                className: this.props.className,
                ...this.props.style,
                children: [
                    w ? (0, d.jsx)(w, {
                        style: {
                            fontSize: 14,
                            marginRight: 10
                        },
                        theme: this.props.customIconColor ? 'twoTone' : 'outlined',
                        twoToneColor: this.props.customIconColor || ''
                    }) : null,
                    (0, d.jsxs)(o, {
                        children: [
                            (0, d.jsx)(p, {
                                children: _r
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _r = q;
}), a.register('XCvA52', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Onj9L2'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'ShareAltOutlined';
    var _i = e.forwardRef(h);
}), a.register('Onj9L2', function(b, c) {
    _b(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z'
                }
            }]
        },
        name: 'share-alt',
        theme: 'outlined'
    };
}), a.register('PjBn7', function(_b, c) {
    'function' == typeof Object.create ? _b.exports = function(d, e) {
        e && (d.super_ = e, d.prototype = Object.create(e.prototype, {
            constructor: {
                value: d,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : _b.exports = function(d, e) {
        if (e) {
            d.super_ = e;
            var f = function() {};
            f.prototype = e.prototype, d.prototype = new f(), d.prototype.constructor = d;
        }
    };
});