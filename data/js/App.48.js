function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('tMe0P', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('8KqQ+'),
        g = b('Eh2Wh');
    var _h = a => {
        const i = {
            ...a.style,
            fontFamily: g.Fonts.SFPro,
            color: a.style && a.style.color ? a.style.color : f.default.Black
        };
        return (0, e.jsx)('div', {
            onClick: a.onClick ? a.onClick : () => !1,
            style: i,
            children: a.children
        });
    };
}), b.register('oLX/y', function(c, d) {
    a(c.exports, 'default', function() {
        return _E;
    });
    var e = b('s/YA9'),
        f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('quE27'),
        i = b('n293W'),
        j = b('5MDCt'),
        k = b('qMSe6'),
        l = b('P1KtI'),
        m = b('aevdF'),
        n = b('yruHD'),
        o = b('Ll6/N'),
        p = b('u4s09'),
        q = b('tMe0P'),
        r = b('8KqQ+'),
        s = b('jetH0'),
        t = b('hecDa'),
        u = b('fMXqI');
    let v, w, x = a => a;
    const y = o.default.TabPane,
        z = m.default.Search,
        A = a => (0, f.jsxs)('div', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            children: [
                (0, f.jsx)(_D, {
                    className: 'lightShadow mediumShadowOnHover',
                    url: a.details.url,
                    isMiddle: a.isMiddle,
                    onClick: () => {
                        a.onSelect(a.details.url), (0, h.request)({
                            url: '/api/v1/editor/download-image',
                            method: 'POST',
                            data: {
                                photoId: a.details.id
                            },
                            success: () => !1,
                            error: () => !1
                        });
                    }
                }),
                (0, f.jsx)('a', {
                    target: '_blank',
                    href: a.details.creator.link,
                    style: {
                        marginBottom: 10,
                        width: 146
                    },
                    children: (0, f.jsxs)(q.default, {
                        style: {
                            fontSize: 11,
                            width: '100%',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                        },
                        children: [
                            'Image by ',
                            a.details.creator.name
                        ]
                    })
                })
            ]
        });
    class B extends g.Component {
        componentDidMount() {
            this.props.defaultSearchTerm && this.requestImages(this.props.defaultSearchTerm);
        }
        render() {
            return (0, f.jsxs)(f.Fragment, {
                children: [
                    this.getContent(),
                    (0, f.jsx)(t.default, {
                        id: 'upload image',
                        visible: this.state.upgradeModalOpen,
                        close: this.closeUpgradeModal,
                        copy: {
                            title: u.IMAGE_UPLOAD_TITLE,
                            description: u.IMAGE_UPLOAD_DESCRIPTION
                        }
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                loading: !1,
                error: !1,
                imageResults: [],
                customLinkUrl: '',
                searchCount: 0,
                currentTabKey: this.props.blockUnsplash ? '2' : '1',
                upgradeModalOpen: !1
            }), (0, e.default)(this, 'onSearch', a => {
                this.setState({
                    imageResults: []
                }), this.requestImages(a);
            }), (0, e.default)(this, 'requestImages', a => {
                this.setState({
                    loading: !0
                }), (0, h.request)({
                    method: 'POST',
                    url: '/api/v1/editor/images',
                    data: {
                        searchQuery: a
                    },
                    success: a => this.setState({
                        imageResults: a.photos,
                        searchCount: this.state.searchCount + 1
                    }),
                    error: () => this.setState({
                        error: !0
                    }),
                    both: () => this.setState({
                        loading: !1
                    })
                });
            }), (0, e.default)(this, 'onImageChange', a => {
                const C = a.target.value,
                    D = new Image();
                D.onload = () => {
                    this.setState({
                        customLinkUrl: C
                    });
                }, D.src = C;
            }), (0, e.default)(this, 'onPickCustomImage', () => this.props.onImagePicked(this.state.customLinkUrl)), (0, e.default)(this, 'onImageUploaded', a => this.props.onImagePicked(a)), (0, e.default)(this, 'handleTabClick', a => {
                '3' !== a || (0, h.isUpgraded)() || (0, h.isStudent)() ? this.setState({
                    currentTabKey: a
                }) : this.setState({
                    upgradeModalOpen: !0
                });
            }), (0, e.default)(this, 'closeUpgradeModal', () => this.setState({
                upgradeModalOpen: !1
            })), (0, e.default)(this, 'getContent', () => (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(q.default, {
                        style: {
                            fontWeight: 900,
                            fontSize: this.props.titleFontSize || 38,
                            marginBottom: this.props.titleBottomMargin || 0
                        },
                        children: this.props.title
                    }),
                    (0, f.jsxs)(o.default, {
                        type: 'card',
                        activeKey: this.state.currentTabKey,
                        onTabClick: this.handleTabClick,
                        children: [
                            !this.props.blockUnsplash && (0, f.jsxs)(y, {
                                tab: 'Unsplash',
                                children: [
                                    (0, f.jsx)(z, {
                                        placeholder: 'Search photos...',
                                        size: 'large',
                                        enterButton: !0,
                                        style: {
                                            width: 464,
                                            marginBottom: 10,
                                            marginTop: -3
                                        },
                                        autoFocus: this.props.autoFocus,
                                        onSearch: this.onSearch
                                    }),
                                    this.state.loading && (0, f.jsx)('div', {
                                        style: {
                                            marginTop: 5
                                        },
                                        children: (0, f.jsx)(n.default, {
                                            size: 'large'
                                        })
                                    }),
                                    this.state.error && (0, f.jsx)(k.default, {
                                        message: 'Error',
                                        description: 'There was an error searching from Unsplash. Please try again later or enter a link.',
                                        type: 'error',
                                        showIcon: !0
                                    }),
                                    !this.state.loading && this.props.unsplashDefaultText && 0 === this.state.searchCount && (0, f.jsxs)('div', {
                                        className: 'flex hc vc flex-column',
                                        style: {
                                            color: r.default.Black,
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, f.jsx)(j.default, {
                                                style: {
                                                    fontSize: 50,
                                                    marginBottom: 5
                                                }
                                            }),
                                            (0, f.jsx)('div', {
                                                style: {
                                                    fontSize: 15,
                                                    textAlign: 'center'
                                                },
                                                children: this.props.unsplashDefaultText
                                            })
                                        ]
                                    }),
                                    !this.state.loading && 0 !== this.state.searchCount && 0 === this.state.imageResults.length && (0, f.jsxs)('div', {
                                        className: 'flex hc vc flex-column',
                                        style: {
                                            color: r.default.Black,
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, f.jsx)(i.default, {
                                                style: {
                                                    fontSize: 50,
                                                    marginBottom: 5
                                                }
                                            }),
                                            (0, f.jsx)('div', {
                                                style: {
                                                    fontSize: 15,
                                                    textAlign: 'center'
                                                },
                                                children: 1 === this.state.searchCount ? 'No images found. Try searching for something!' : 'No results found.'
                                            })
                                        ]
                                    }),
                                    (0, f.jsx)(_C, {
                                        children: this.state.imageResults.map((a, b) => (0, f.jsx)(A, {
                                            details: a,
                                            isMiddle: (b - 1) % 3 == 0,
                                            onSelect: this.props.onImagePicked
                                        }, a.url))
                                    })
                                ]
                            }, '1'),
                            (0, f.jsxs)(y, {
                                tab: 'Link',
                                children: [
                                    (0, f.jsx)(m.default, {
                                        size: 'large',
                                        placeholder: 'Image link',
                                        style: {
                                            marginTop: -3
                                        },
                                        onChange: this.onImageChange
                                    }),
                                    (0, f.jsx)(l.default, {
                                        style: {
                                            marginTop: 5
                                        },
                                        type: 'primary',
                                        size: 'large',
                                        block: !0,
                                        onClick: this.onPickCustomImage,
                                        disabled: !this.state.customLinkUrl,
                                        children: 'Add'
                                    })
                                ]
                            }, '2'),
                            this.props.allowUpload && (0, f.jsx)(y, {
                                tab: 'Upload',
                                children: (0, f.jsx)(s.default, {
                                    onPhotoUploaded: this.onImageUploaded
                                })
                            }, '3')
                        ]
                    })
                ]
            }));
        }
    }
    const _C = p.default.div(v || (v = x`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  width: ${ 0 }px;
`), () => 464),
        _D = p.default.div(w || (w = x`
  height: 146px;
  width: 146px;
  background-image: url(${ 0 });
  background-size: cover;
  background-position: center;
  margin-bottom: 3px;
  border-radius: 5px;
  margin-right: ${ 0 }px;
  margin-left: ${ 0 }px;
  cursor: pointer;
`), a => a.url, a => a.isMiddle ? 13 : 0, a => a.isMiddle ? 13 : 0);
    var _E = B;
}), b.register('n293W', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('aRZ/m'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'MehOutlined';
    var _j = f.forwardRef(i);
}), b.register('aRZ/m', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'meh',
        theme: 'outlined'
    };
}), b.register('jetH0', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('s/YA9'),
        f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('Ew6Wj'),
        i = b('Bjl070'),
        j = b('yruHD'),
        k = b('lbcQe'),
        l = b('quE27');
    class m extends g.Component {
        render() {
            return (0, f.jsx)(f.Fragment, {
                children: (0, f.jsx)('div', {
                    style: {
                        width: '100%',
                        height: 300
                    },
                    children: (0, f.jsx)(k.default.Dragger, {
                        customRequest: this.uploadImage,
                        multiple: !1,
                        accept: 'image/*',
                        beforeUpload: this.fileIsSmallEnough,
                        children: this.state.loading ? (0, f.jsx)(j.default, {
                            size: 'large'
                        }) : (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)('p', {
                                    className: 'ant-upload-drag-icon',
                                    children: (0, f.jsx)(h.default, {})
                                }),
                                (0, f.jsx)('p', {
                                    className: 'ant-upload-text',
                                    children: 'Click or drag to upload a photo!'
                                }),
                                (0, f.jsx)('p', {
                                    className: 'ant-upload-hint',
                                    children: 'Photo must be less than 5MB.'
                                })
                            ]
                        })
                    })
                })
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'state', {
                loading: !1
            }), (0, e.default)(this, 'uploadImage', ({
                file: n
            }) => {
                const o = new FormData();
                o.append('file', n), this.setState({
                    loading: !0
                }), (0, l.request)({
                    url: '/api/games/image/add',
                    method: 'post',
                    data: o,
                    success: n => {
                        this.setState({
                            loading: !1
                        }), this.props.onPhotoUploaded(n.url);
                    },
                    error: n => {
                        this.setState({
                            loading: !1
                        }), i.default.error('Error uploading. Please try again.');
                    }
                });
            }), (0, e.default)(this, 'fileIsSmallEnough', n => {
                const o = n.size / 1024 / 1024 < 5;
                return o || i.default.error('Photo must be less than 5MB'), o;
            });
        }
    }
    var _n = m;
}), b.register('Ew6Wj', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('utRuN'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'InboxOutlined';
    var _j = f.forwardRef(i);
}), b.register('utRuN', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '0 0 1024 1024',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z'
                }
            }]
        },
        name: 'inbox',
        theme: 'outlined'
    };
}), b.register('fMXqI', function(c, d) {
    a(c.exports, 'AUDIO_TITLE', function() {
        return _g;
    }), a(c.exports, 'AUDIO_DESCRIPTION', function() {
        return _h;
    }), a(c.exports, 'IMAGE_UPLOAD_TITLE', function() {
        return _i;
    }), a(c.exports, 'IMAGE_UPLOAD_DESCRIPTION', function() {
        return _j;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('jw1ib');
    const _g = (0, e.jsx)(e.Fragment, {
            children: 'Add audio with Pro'
        }),
        _h = (0, e.jsxs)(e.Fragment, {
            children: [
                'Record your voice and have the audio played each time a student goes to answer this question. ',
                (0, e.jsxs)('b', {
                    children: [
                        'To add audio, upgrade to ',
                        f.COMPANY_NAME,
                        ' Pro.'
                    ]
                })
            ]
        }),
        _i = (0, e.jsx)(e.Fragment, {
            children: 'Upload images with Pro'
        }),
        _j = (0, e.jsxs)(e.Fragment, {
            children: [
                'To add your own images to questions, ',
                (0, e.jsxs)('b', {
                    children: [
                        'upgrade to ',
                        f.COMPANY_NAME,
                        ' Pro.'
                    ]
                })
            ]
        });
}), b.register('9V5aJ', function(c, d) {
    a(c.exports, 'defaultAnswer', function() {
        return _q;
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('gRbUn'),
        f = b('qMSe6'),
        g = b('AE7vR'),
        h = b('6jmvl'),
        i = b('NU2gN'),
        j = b('O0Kav'),
        k = b('rDgzs'),
        l = b('gXAfo'),
        m = b('7F8kR'),
        n = b('2zo+z'),
        o = b('8aoBB'),
        p = b('XWDzK');
    const _q = a => ({
            _id: Math.random().toString(),
            text: '',
            correct: a
        }),
        r = () => ({
            _id: '',
            text: '',
            type: k.QuestionType.multipleChoice,
            image: '',
            audio: '',
            answers: [
                _q(!0),
                _q(!1),
                _q(!1),
                _q(!1)
            ]
        });
    var _s = (0, h.observer)(j.forwardRef((a, b) => {
        var t;
        const u = (0, i.useLocalObservable)(() => r()),
            v = (0, p.default)(u) && !a.blockAddingNewQuestions,
            w = () => {
                const x = r();
                Object.keys(x).forEach(b => {
                    u[b] = x[b];
                });
            };
        j.useImperativeHandle(b, () => ({
            clear: w
        })), j.useEffect(() => {
            a.existingQuestion ? Object.keys(a.existingQuestion).forEach(b => {
                u[b] = a.existingQuestion[b];
            }) : w();
        }, [null === (t = a.existingQuestion) || void 0 === t ? void 0 : t._id]);
        const x = () => {
            v && a.submitQuestion(u);
        };
        return (0, e.jsxs)(g.default, {
            open: a.visible,
            width: 670,
            style: {
                top: 20
            },
            onCancel: a.close,
            afterClose: a.afterClose,
            closable: !1,
            footer: (0, e.jsx)(o.default, {
                label: a.buttonLabel || 'Add',
                onClick: x,
                loading: a.loading,
                disabledMessage: (0, p.canAddQuestionErrorMessage)(u),
                disabled: !v
            }),
            children: [
                (0, e.jsx)(l.default, {
                    question: u
                }),
                (0, e.jsx)(m.default, {
                    question: u,
                    onPressEnter: x,
                    imagesBlocked: a.imagesBlocked,
                    audioBlocked: a.audioBlocked,
                    latexBlocked: a.latexBlocked
                }),
                (0, e.jsx)(n.default, {
                    question: u,
                    onPressEnter: x,
                    imagesBlocked: a.imagesBlocked,
                    latexBlocked: a.latexBlocked
                }),
                a.errorMessage ? (0, e.jsx)(f.default, {
                    message: 'Error',
                    description: a.errorMessage,
                    type: 'error',
                    showIcon: !0
                }) : null
            ]
        });
    }));
}), b.register('gXAfo', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('u4s09'),
        h = b('VNuyu'),
        i = b('Q2kdB0'),
        j = b('rDgzs'),
        k = b('Eh2Wh'),
        l = b('9V5aJ');
    let m;
    var _n = (0, b('6jmvl').observer)(a => {
        const o = f.useCallback(a => {
                a.target.value === j.QuestionType.multipleChoice && d(), a.target.value === j.QuestionType.textInput && c();
            }, []),
            p = () => {
                const q = a.question.answers.filter(a => a.correct && a.text && !a.image);
                q.length ? a.question.answers = q : a.question.answers = [(0, l.defaultAnswer)(!0)], a.question.type = j.QuestionType.textInput;
            },
            q = () => {
                const r = a.question.answers.filter((a, r) => r <= 3);
                a.question.answers = r;
                for (let s = r.length; s < 4; s++)
                    a.question.answers.push((0, l.defaultAnswer)(!1));
                a.question.type = j.QuestionType.multipleChoice;
            };
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_p, {
                    children: [
                        (0, e.jsx)('div', {}),
                        (0, e.jsx)('div', {
                            children: (0, e.jsxs)(i.default.Group, {
                                onChange: o,
                                value: a.question.type,
                                children: [
                                    (0, e.jsx)(i.default, {
                                        value: j.QuestionType.multipleChoice,
                                        children: (0, e.jsx)('span', {
                                            style: _o,
                                            children: 'Multiple Choice'
                                        })
                                    }),
                                    (0, e.jsx)(i.default, {
                                        value: j.QuestionType.textInput,
                                        children: (0, e.jsx)('span', {
                                            style: _o,
                                            children: 'Text Input'
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, e.jsx)(h.default, {
                    style: {
                        marginTop: 16,
                        marginBottom: 11
                    }
                })
            ]
        });
    });
    const _o = {
            fontFamily: k.Fonts.SFPro
        },
        _p = g.default.div(m || (m = (a => a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`));
}), b.register('7F8kR', function(c, d) {
    a(c.exports, 'default', function() {
        return _z;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('8KqQ+'),
        h = b('Eh2Wh'),
        i = b('rFeNc'),
        j = b('P1KtI'),
        k = b('6jmvl'),
        l = b('W0U6L'),
        m = b('HFnro8'),
        n = b('sqdRe'),
        o = b('quE27'),
        p = b('hecDa'),
        q = b('fMXqI'),
        r = (o = b('quE27'), b('p7/H4')),
        s = b('JuRCP'),
        t = b('0qHa9'),
        u = b('XcwvV'),
        v = b('7yE7K');
    let w, x, y = a => a;
    var _z = (0, k.observer)(a => {
        const [A, B, C] = (0, o.useBoolean)(!1), [D, E, F] = (0, o.useBoolean)(!1), [G, H, I] = (0, o.useBoolean)(!1), [J, K, L] = (0, o.useBoolean)(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(p.default, {
                    visible: G,
                    close: I,
                    id: 'add audio',
                    copy: {
                        title: q.AUDIO_TITLE,
                        description: q.AUDIO_DESCRIPTION
                    }
                }),
                (0, e.jsx)(l.default, {
                    visible: A,
                    close: C,
                    onImageChange: A => {
                        a.question.image = A;
                    },
                    currentImage: a.question.image
                }),
                (0, e.jsx)(n.default, {
                    visible: D,
                    close: F,
                    onAudioChanged: A => {
                        a.question.audio = A, F();
                    },
                    audio: a.question.audio
                }),
                (0, e.jsx)(r.default, {
                    visible: J,
                    close: L,
                    latex: a.question.latex,
                    onChange: A => {
                        a.question.latex = A;
                    }
                }),
                (0, e.jsx)(_A, {
                    children: 'Question'
                }),
                (0, e.jsx)(i.default, {
                    value: a.question.text,
                    onTextChange: A => {
                        a.question.text = A;
                    },
                    placeholder: 'Ask away...',
                    disabled: !1,
                    onPressEnter: a.onPressEnter
                }),
                a.imagesBlocked && a.audioBlocked && a.latexBlocked ? null : (0, e.jsxs)(_B, {
                    children: [
                        (0, e.jsx)(_C, {
                            icon: (0, e.jsx)(u.default, {}),
                            label: 'Add Photo',
                            onClick: B,
                            disabled: a.imagesBlocked || !!a.question.latex,
                            customContent: a.question.image ? (0, e.jsx)('div', {
                                className: 'flex maxWidth hc vc',
                                children: (0, e.jsx)(m.default, {
                                    image: a.question.image,
                                    blockModalOpen: !0,
                                    size: 30,
                                    onClick: B
                                })
                            }) : null
                        }),
                        (0, e.jsx)('div', {
                            style: {
                                width: 6
                            }
                        }),
                        (0, e.jsx)(_C, {
                            disabled: a.audioBlocked || !window.MediaRecorder || (0, o.isStudent)(),
                            icon: (0, e.jsx)(t.default, {}),
                            label: (a.question.audio ? '' : 'Add ') + 'Audio',
                            onClick: () => {
                                (0, o.isUpgraded)() ? E(): H();
                            }
                        }),
                        (0, e.jsx)('div', {
                            style: {
                                width: 6
                            }
                        }),
                        (0, e.jsx)(_C, {
                            icon: (0, e.jsx)(v.default, {}),
                            disabled: !!a.question.image,
                            label: 'Add Equation',
                            customContent: a.question.latex ? (0, e.jsx)('div', {
                                style: {
                                    cursor: 'pointer'
                                },
                                children: (0, e.jsx)(s.default, {
                                    latex: a.question.latex
                                })
                            }) : null,
                            onClick: K
                        })
                    ]
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 12
                    }
                })
            ]
        });
    });
    const _A = f.default.div(w || (w = y`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), g.default.Black, h.Fonts.SFPro, h.FontWeights.UltraBold),
        _B = f.default.div.attrs({
            className: 'flex maxWidth'
        })(x || (x = y`
  margin-top: 8px;
  height: 48px;
`)),
        _C = a => (0, e.jsx)(j.default, {
            disabled: a.disabled,
            style: {
                width: '33.33%',
                height: '100%',
                overflow: 'hidden'
            },
            type: 'dashed',
            tabIndex: '-1',
            onClick: a.onClick,
            children: a.customContent ? a.customContent : (0, e.jsxs)('div', {
                className: 'flex maxHeight hc vc',
                style: {
                    fontFamily: h.Fonts.SFPro
                },
                children: [
                    a.icon,
                    (0, e.jsx)('div', {
                        style: {
                            marginLeft: 5
                        },
                        children: a.label
                    })
                ]
            })
        });
}), b.register('rFeNc', function(c, d) {
    a(c.exports, 'default', function() {
        return _l;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('jH8Dk'),
        h = b('aevdF'),
        i = b('Dn89R'),
        j = b('6BO4R'),
        k = b('Eh2Wh');
    var _l = a => {
        const m = f.useRef(),
            [n, o] = f.useState(!1);
        return (0, e.jsxs)('div', {
            style: {
                width: '100%'
            },
            children: [
                (0, e.jsx)(h.default, {
                    ref: m,
                    onPressEnter: a.onPressEnter,
                    maxLength: 220,
                    disabled: a.disabled,
                    autoFocus: a.autoFocus,
                    style: {
                        display: 'flex',
                        fontFamily: k.Fonts.SFPro,
                        fontWeight: k.FontWeights.Bold,
                        width: '100%',
                        height: 40
                    },
                    size: 'large',
                    placeholder: a.placeholder,
                    value: a.value,
                    onChange: m => {
                        n && o(!1), (m => {
                            a.onTextChange(m.target.value);
                        })(m);
                    },
                    suffix: n ? (0, e.jsx)('span', {}) : (0, e.jsx)(i.default, {
                        title: 'Show Symbol Keyboard',
                        children: (0, e.jsx)(g.default, {
                            onClick: () => {
                                o(!0), m.current.focus();
                            }
                        })
                    })
                }),
                n ? (0, e.jsx)(j.default, {
                    onSymbolSelected: m => a.onTextChange(a.value + m),
                    focusInput: () => {
                        var p;
                        null === (p = m.current) || void 0 === p || p.focus();
                    }
                }) : null
            ]
        });
    };
}), b.register('6BO4R', function(c, d) {
    a(c.exports, 'default', function() {
        return _m;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('P1KtI'),
        h = b('Ll6/N'),
        i = b('QgQdg');
    let j;
    const k = b('u4s09').default.div(j || (j = (a => a)`
  margin-top: 1px;
`)),
        {
            TabPane: l
        } = h.default;
    var _m = a => {
        const [n, o] = f.useState(i.default[0].name);
        return (0, e.jsx)(k, {
            children: (0, e.jsx)(h.default, {
                onChange: o,
                activeKey: n,
                tabPosition: a.tabPosition || 'top',
                children: i.default.map(n => (0, e.jsx)(l, {
                    tab: n.name,
                    style: {
                        boxSizing: 'border-box',
                        maxHeight: 255
                    },
                    className: 'scroll',
                    children: n.characters.map(o => (0, e.jsx)(g.default, {
                        style: {
                            margin: 2
                        },
                        size: 'small',
                        onClick: () => {
                            return n = o, null == a || a.onSymbolSelected(n), void(null == a || a.focusInput());
                            var p;
                        },
                        children: o
                    }, `${ n.name }-${ o }`))
                }, n.name))
            })
        });
    };
}), b.register('QgQdg', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = [{
            name: 'Symbols',
            characters: [
                'À',
                'Á',
                'Â',
                'Ã',
                'Ä',
                'Å',
                'Æ',
                'Ç',
                'È',
                'É',
                'Ê',
                'Ë',
                'Ì',
                'Í',
                'Î',
                'Ï',
                'Ð',
                'Ñ',
                'Ò',
                'Ó',
                'Ô',
                'Õ',
                'Ö',
                'Ø',
                'Ù',
                'Ú',
                'Û',
                'Ü',
                'Ý',
                'Þ',
                'ß',
                'à',
                'á',
                'â',
                'ã',
                'ä',
                'å',
                'æ',
                'ç',
                'è',
                'é',
                'ê',
                'ë',
                'ì',
                'í',
                'î',
                'ï',
                'ð',
                'ñ',
                'ò',
                'ó',
                'ô',
                'õ',
                'ö',
                'ø',
                'ù',
                'ú',
                'û',
                'ü',
                'ý',
                'þ',
                'Ā',
                'ā',
                'Ă',
                'ă',
                'Ą',
                'ą',
                'Ć',
                'ć',
                'Ĉ',
                'ĉ',
                'Ċ',
                'ċ',
                'Č',
                'č',
                'Ď',
                'ď',
                'Đ',
                'đ',
                'Ē',
                'ē',
                'Ĕ',
                'ĕ',
                'Ė',
                'ė',
                'Ę',
                'ę',
                'Ě',
                'ě',
                'Ĝ',
                'ĝ',
                'Ğ',
                'ğ',
                'Ġ',
                'ġ',
                'Ģ',
                'ģ',
                'Ĥ',
                'ĥ',
                'Ħ',
                'ħ',
                'Ĩ',
                'ĩ',
                'Ī',
                'ī',
                'Ĭ',
                'ĭ',
                'Į',
                'į',
                'İ',
                'ı',
                'Ĳ',
                'ĳ',
                'Ĵ',
                'ĵ',
                'Ķ',
                'ķ',
                'ĸ',
                'Ĺ',
                'ĺ',
                'Ļ',
                'ļ',
                'Ľ',
                'ľ',
                'Ŀ',
                'ŀ',
                'Ł',
                'ł',
                'Ń',
                'ń',
                'Ņ',
                'ņ',
                'Ň',
                'ň',
                'ŉ',
                'Ŋ',
                'ŋ',
                'Ō',
                'ō',
                'Ŏ',
                'ŏ',
                'Ő',
                'ő',
                'Œ',
                'œ',
                'Ż',
                'ż',
                'Ž',
                'ž',
                'Ŕ',
                'ŕ',
                'Ŗ',
                'ŗ',
                'Ř',
                'ř',
                'Ś',
                'ś',
                'Ŝ',
                'ŝ',
                'Ş',
                'ş',
                'Š',
                'š',
                'Ţ',
                'ţ',
                'Ť',
                'ť',
                'Ŧ',
                'ŧ',
                'Ũ',
                'ũ',
                'Ū',
                'ū',
                'Ŭ',
                'ŭ',
                'Ů',
                'ů',
                'Ű',
                'ű',
                'Ų',
                'ų',
                'Ŵ',
                'ŵ',
                'Ŷ',
                'ŷ',
                'Ÿ',
                'Ź',
                'ź',
                'ƀ',
                'Ɓ',
                'Ƃ',
                'ƃ',
                'Ƅ',
                'ƅ',
                'Ɔ',
                'Ƈ',
                'ƈ',
                'Ɖ',
                'Ɗ',
                'Ƌ',
                'ƌ',
                'ƍ',
                'Ǝ',
                'Ə',
                'Ɛ',
                'Ƒ',
                'ƒ',
                'Ɠ',
                'Ɣ',
                'ƕ',
                'Ɩ',
                'Ɨ',
                'Ƙ',
                'ƙ',
                'ƚ',
                'ƛ',
                'Ɯ',
                'Ɲ',
                'ƞ',
                'Ɵ',
                'Ơ',
                'ơ',
                'Ƣ',
                'ƣ',
                'Ƥ',
                'ƥ',
                'Ʀ',
                'Ƨ',
                'ƨ',
                'Ʃ',
                'ƪ',
                'ƫ',
                'Ƭ',
                'ƭ',
                'Ʈ',
                'Ư',
                'ư',
                'Ʊ',
                'Ʋ',
                'Ƴ',
                'ƴ',
                'Ƶ',
                'ƶ',
                'Ʒ',
                'Ƹ',
                'ƹ',
                'ƺ',
                'ƻ',
                'Ƽ',
                'ƽ',
                'ƾ',
                'ƿ',
                'ǀ',
                'ǁ',
                'ǂ',
                'ǃ',
                'Ǆ',
                'ǅ',
                'ǆ',
                'Ǉ',
                'ǈ',
                'ǉ',
                'Ǌ',
                'ǋ',
                'ǌ',
                'Ǎ',
                'ǎ',
                'Ǐ',
                'ǐ',
                'Ǒ',
                'ǒ',
                'Ǔ',
                'ǔ',
                'Ǖ',
                'ǖ',
                'Ǘ',
                'ǘ',
                'Ǚ',
                'ǚ',
                'Ǜ',
                'ǜ',
                'ǝ',
                'Ǟ',
                'ǟ',
                'Ǡ',
                'ǡ',
                'Ǣ',
                'ǣ',
                'Ǥ',
                'ǥ',
                'Ǧ',
                'ǧ',
                'Ǩ',
                'ǩ',
                'Ǫ',
                'ǫ',
                'Ǭ',
                'ǭ',
                'Ǯ',
                'ǯ',
                'ǰ',
                'Ǳ',
                'ǲ',
                'ǳ',
                'Ǵ',
                'ǵ',
                'Ƕ',
                'Ƿ',
                'Ǹ',
                'ǹ',
                'Ǻ',
                'ǻ',
                'Ǽ',
                'ǽ',
                'Ǿ',
                'ǿ',
                'Ȁ',
                'ȁ',
                'Ȃ',
                'ȃ',
                'Ȅ',
                'ȅ',
                'Ȇ',
                'ȇ',
                'Ȉ',
                'ȉ',
                'Ȋ',
                'ȋ',
                'Ȍ',
                'ȍ',
                'Ȏ',
                'ȏ',
                'Ȑ',
                'ȑ',
                'Ȓ',
                'ȓ',
                'Ȕ',
                'ȕ',
                'Ȗ',
                'ȗ',
                'Ș',
                'ș',
                'Ț',
                'ț',
                'Ȝ',
                'ȝ',
                'Ȟ',
                'ȟ',
                'Ƞ',
                'ȡ',
                'Ȣ',
                'ȣ',
                'Ȥ',
                'ȥ',
                'Ȧ',
                'ȧ',
                'Ȩ',
                'ȩ',
                'Ȫ',
                'ȫ',
                'Ȭ',
                'ȭ',
                'Ȯ',
                'ȯ',
                'Ȱ',
                'ȱ',
                'Ȳ',
                'ȳ',
                'ȴ',
                'ȵ',
                'ȶ',
                'ȷ',
                'ȸ',
                'ȹ',
                'Ⱥ',
                'Ȼ',
                'ȼ',
                'Ƚ',
                'Ⱦ',
                'ȿ',
                'ɀ',
                'Ɂ',
                'ɂ',
                'Ƀ',
                'Ʉ',
                'Ʌ',
                'Ɇ',
                'ɇ',
                'Ɉ',
                'ɉ',
                'Ɋ',
                'ɋ',
                'Ɍ',
                'ɍ',
                'Ɏ',
                'Ḁ',
                'ḁ',
                'Ḃ',
                'ḃ',
                'Ḅ',
                'ḅ',
                'Ḇ',
                'ḇ',
                'Ḉ',
                'ḉ',
                'Ḋ',
                'ḋ',
                'Ḍ',
                'ḍ',
                'Ḏ',
                'ḏ',
                'Ḑ',
                'ḑ',
                'Ḓ',
                'ḓ',
                'Ḕ',
                'ḕ',
                'Ḗ',
                'ḗ',
                'Ḙ',
                'ḙ',
                'Ḛ',
                'ḛ',
                'Ḝ',
                'ḝ',
                'Ḟ',
                'ḟ',
                'Ḡ',
                'ḡ',
                'Ḣ',
                'ḣ',
                'Ḥ',
                'ḥ',
                'Ḧ',
                'ḧ',
                'Ḩ',
                'ḩ',
                'Ḫ',
                'ḫ',
                'Ḭ',
                'ḭ',
                'Ḯ',
                'ḯ',
                'Ḱ',
                'ḱ',
                'Ḳ',
                'ḳ',
                'Ḵ',
                'ḵ',
                'Ḷ',
                'ḷ',
                'Ḹ',
                'ḹ',
                'Ḻ',
                'ḻ',
                'Ḽ',
                'ḽ',
                'Ḿ',
                'ḿ',
                'Ṁ',
                'ṁ',
                'Ṃ',
                'ṃ',
                'Ṅ',
                'ṅ',
                'Ṇ',
                'ṇ',
                'Ṉ',
                'ṉ',
                'Ṋ',
                'ṋ',
                'Ṍ',
                'ṍ',
                'Ṏ',
                'ṏ',
                'Ṑ',
                'ṑ',
                'Ṓ',
                'ṓ',
                'Ṕ',
                'ṕ',
                'Ṗ',
                'ṗ',
                'Ṙ',
                'ṙ',
                'Ṛ',
                'ṛ',
                'Ṝ',
                'ṝ',
                'Ṟ',
                'ṟ',
                'Ṡ',
                'ṡ',
                'Ṣ',
                'ṣ',
                'Ṥ',
                'ṥ',
                'Ṧ',
                'ṧ',
                'Ṩ',
                'ṩ',
                'Ṫ',
                'ṫ',
                'Ṭ',
                'ṭ',
                'Ṯ',
                'ṯ',
                'Ṱ',
                'ṱ',
                'Ṳ',
                'ṳ',
                'Ṵ',
                'ṵ',
                'Ṷ',
                'ṷ',
                'Ṹ',
                'ṹ',
                'Ṻ',
                'ṻ',
                'Ṽ',
                'ṽ',
                'Ṿ',
                'ṿ',
                'Ẁ',
                'ẁ',
                'Ẃ',
                'ẃ',
                'Ẅ',
                'ẅ',
                'Ẇ',
                'ẇ',
                'Ẉ',
                'ẉ',
                'Ẋ',
                'ẋ',
                'Ẍ',
                'ẍ',
                'Ẏ',
                'ẏ',
                'Ẑ',
                'ẑ',
                'Ẓ',
                'ẓ',
                'Ẕ',
                'ẕ',
                'ẖ',
                'ẗ',
                'ẘ',
                'ẙ',
                'ẚ',
                'ẛ',
                'ẜ',
                'ẝ',
                'ẞ',
                'ẟ',
                'Ạ',
                'ạ',
                'Ả',
                'ả',
                'Ấ',
                'ấ',
                'Ầ',
                'ầ',
                'Ẩ',
                'ẩ',
                'Ẫ',
                'ẫ',
                'Ậ',
                'ậ',
                'Ắ',
                'ắ',
                'Ằ',
                'ằ',
                'Ẳ',
                'ẳ',
                'Ẵ',
                'ẵ',
                'Ặ',
                'ặ',
                'Ẹ',
                'ẹ',
                'Ẻ',
                'ẻ',
                'Ẽ',
                'ẽ',
                'Ế',
                'ế',
                'Ề',
                'ề',
                'Ễ',
                'ễ',
                'Ệ',
                'ệ',
                'Ỉ',
                'ỉ',
                'Ị',
                'ị',
                'Ọ',
                'ọ',
                'Ỏ',
                'ỏ',
                'Ố',
                'ố',
                'Ồ',
                'ồ',
                'Ổ',
                'ổ',
                'Ỗ',
                'ỗ',
                'Ộ',
                'ộ',
                'Ớ',
                'ớ',
                'Ờ',
                'ờ',
                'Ở',
                'ở',
                'Ỡ',
                'ỡ',
                'Ợ',
                'ợ',
                'Ụ',
                'ụ',
                'Ủ',
                'ủ',
                'Ứ',
                'ứ',
                'Ừ',
                'ừ',
                'Ử',
                'ử',
                'Ữ',
                'ữ',
                'Ự',
                'ự',
                'Ỳ',
                'ỳ',
                'Ỵ',
                'ỵ',
                'Ỷ',
                'ỷ',
                'Ỹ',
                'ỹ',
                'Ỻ',
                'ỻ',
                'Ỽ',
                'ỽ',
                'Ỿ'
            ]
        },
        {
            name: 'Currency',
            characters: [
                '$',
                '\xA3',
                '\u20AC',
                '\xA5',
                '\u20BD',
                '\u060B',
                'ƒ',
                '\u20BC',
                '\u17DB',
                '\u20A1',
                '\u20B1',
                '\u20B5',
                '\u20B9',
                '\uFDFC',
                '\u20AA',
                '\u20A9',
                '\u20AD',
                '\u20AE',
                '\u20A6',
                '\u20BA',
                '\u20B4',
                '\u20AB',
                '\u20A2',
                '\u20A3',
                '\u20A5',
                '\u20AF',
                '\u20B0',
                '\u20B2',
                '\u20B3',
                '\u20B6',
                '\u20B8'
            ]
        },
        {
            name: 'Math',
            characters: [
                '\u2212',
                '\xF7',
                '\xD7',
                '=',
                'π',
                '\uD835\uDC99',
                '\uD835\uDC9A',
                '\xBD',
                '\xBC',
                '\xBE',
                '\u2215',
                '<',
                '>',
                '\u2265',
                '\u2264',
                '%',
                '*',
                '\u221A',
                '\xB0',
                '^',
                '\u2190',
                '\u2192',
                '\u2220',
                '\u22C5',
                '\u221E',
                '~',
                '\xB1',
                '\u2213',
                '\u2245',
                '\u221C',
                '\u220F',
                '\u2260',
                '\u2248',
                '\u222B',
                '\u222C',
                '\u222D',
                '\u2A0C',
                '\u222E',
                '\u222F',
                '\u2230',
                '\u2A0D',
                '\u2231',
                'ƒ',
                '\u2AEA',
                '\u2221',
                '\u223B',
                '\u2208',
                '\u2229',
                '\u2205',
                '\u2A7D',
                '\u2A7E',
                '\u2211',
                '\u220E',
                '\u2194',
                '\u21D2',
                '\u2225',
                '\u2202',
                '\u22A5',
                '\u2222',
                '\u27E9',
                '\u224C',
                '\u2266',
                '\u27E8',
                '\u2227',
                '\u221D',
                '\u22C4',
                '\u2244',
                '\xAC',
                '\u29E0',
                '\u2200',
                'Ǝ',
                '\u2238',
                '\u227B',
                '\u227A',
                '\u2267',
                '\u29A4',
                '\u2AAF',
                '\u22C6',
                '\u2209',
                '\u2AB0',
                '\u2234',
                '\u2235',
                '\u29A5',
                '\u2A57',
                '\u299C',
                '\u2A02',
                '\u22A2'
            ]
        },
        {
            name: 'Greek',
            characters: [
                'Α',
                'Β',
                'Γ',
                'Δ',
                'Ε',
                'Ζ',
                'Η',
                'Θ',
                'Ι',
                'Κ',
                'Λ',
                'Μ',
                'Ν',
                'Ξ',
                'Ο',
                'Π',
                'Ρ',
                'Σ',
                'Τ',
                'Υ',
                'Φ',
                'Χ',
                'Ψ',
                'Ω',
                'α',
                'β',
                'γ',
                'δ',
                'ε',
                'ζ',
                'η',
                'θ',
                'ι',
                'κ',
                'λ',
                'μ',
                'ν',
                'ξ',
                'ο',
                'π',
                'ρ',
                'ς',
                'τ',
                'υ',
                'φ',
                'χ',
                'ψ',
                'ω'
            ]
        },
        {
            name: 'Other',
            characters: [
                '\xBF',
                '&',
                '!',
                '\xA1',
                '#',
                '@',
                '\xB6',
                '\xA4',
                '\xAE',
                '\xA9',
                ':',
                ';',
                '(',
                ')',
                '[',
                ']',
                '{',
                '}',
                '|',
                '\xA6',
                '\u2190',
                '\u2192',
                '\xBB',
                '\xAB',
                '\u2193',
                '\u2191',
                '\u21C4',
                '\u21E8',
                '\u21E6',
                '\u20A7',
                '\u20A8',
                '\u20A0'
            ]
        }
    ];
}), b.register('W0U6L', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('s/YA9'),
        f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('P1KtI'),
        i = b('3t9ce'),
        j = b('oLX/y'),
        k = b('quE27'),
        l = b('HloXO');
    class m extends g.Component {
        render() {
            const {
                visible: n,
                close: o
            } = this.props;
            return (0, f.jsx)(i.default, {
                open: n,
                placement: 'right',
                closable: !0,
                destroyOnClose: !0,
                onClose: o,
                width: 528,
                drawerStyle: {
                    height: '100%',
                    overflowY: 'auto',
                    scrollbarWidth: 'none'
                },
                children: this.getContent()
            });
        }
        constructor(...a) {
            super(...a), (0, e.default)(this, 'removeImage', () => {
                this.onImagePicked('');
            }), (0, e.default)(this, 'onImagePicked', a => {
                this.props.close(), this.setState({}), this.props.onImageChange(a);
            }), (0, e.default)(this, 'getContent', () => this.props.currentImage ? (0, f.jsxs)('div', {
                className: 'flex hc vc flex-column',
                children: [
                    (0, f.jsx)('img', {
                        src: (0, l.getCloudinaryUrl)(this.props.currentImage),
                        style: {
                            maxWidth: '100%',
                            maxHeight: 300,
                            borderRadius: 5
                        }
                    }),
                    (0, f.jsx)(h.default, {
                        type: 'primary',
                        style: {
                            marginTop: 10
                        },
                        size: 'large',
                        onClick: this.removeImage,
                        children: 'Remove Image'
                    })
                ]
            }) : (0, f.jsx)(j.default, {
                title: 'Add Photo',
                titleFontSize: 34,
                titleBottomMargin: 6,
                defaultSearchTerm: '',
                onImagePicked: this.onImagePicked,
                allowUpload: !(0, k.isStudent)(),
                unsplashDefaultText: 'Search for anything!'
            }));
        }
    }
    var _n = m;
}), b.register('sqdRe', function(c, d) {
    a(c.exports, 'default', function() {
        return _w;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('0qHa9'),
        h = b('Y6i538'),
        i = b('zcv8p4'),
        j = b('FHjL91'),
        k = b('6vx9l'),
        l = b('QNE16'),
        m = b('P1KtI'),
        n = b('VNuyu'),
        o = b('3t9ce'),
        p = b('Bjl070'),
        q = b('tMe0P'),
        r = b('Eh2Wh'),
        s = b('quE27'),
        t = b('lptuh'),
        u = b('HloXO');
    const v = {
        height: 111,
        width: '100%'
    };
    var _w = a => {
        const [x, y] = f.useState(!1), {
            status: z,
            startRecording: A,
            stopRecording: B,
            mediaBlobUrl: C
        } = (0, l.useReactMediaRecorder)({
            video: !1,
            audio: !0
        }), D = () => {
            new Audio((0, u.getCloudinaryUrl)(a.audio)).play();
        }, E = () => a.onAudioChanged('');
        return (0, e.jsx)(o.default, {
            open: a.visible,
            placement: 'right',
            width: 515,
            closable: !0,
            destroyOnClose: !0,
            drawerStyle: {
                height: '100%',
                overflowY: 'auto',
                scrollbarWidth: 'none'
            },
            onClose: a.close,
            children: a.audio ? (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(q.default, {
                        style: {
                            fontWeight: r.FontWeights.Black,
                            fontSize: 34
                        },
                        children: 'Audio'
                    }),
                    (0, e.jsx)(q.default, {
                        style: {
                            fontSize: 16,
                            marginTop: -8
                        },
                        children: 'This audio will be played each time a student goes to answer this question.'
                    }),
                    (0, e.jsx)(n.default, {}),
                    (0, e.jsxs)('div', {
                        className: 'flex vc',
                        children: [
                            (0, e.jsx)(m.default, {
                                size: 'large',
                                type: 'primary',
                                onClick: D,
                                icon: (0, e.jsx)(i.default, {}),
                                style: {
                                    marginRight: 5
                                },
                                children: 'Play Audio'
                            }),
                            (0, e.jsx)(m.default, {
                                size: 'large',
                                type: 'dashed',
                                icon: (0, e.jsx)(h.default, {}),
                                onClick: E,
                                children: 'Remove Audio'
                            })
                        ]
                    })
                ]
            }) : (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(q.default, {
                        style: {
                            fontWeight: r.FontWeights.Black,
                            fontSize: 34
                        },
                        children: 'Add Audio'
                    }),
                    (0, e.jsx)(q.default, {
                        style: {
                            fontSize: 16,
                            marginTop: 2,
                            marginBottom: -2,
                            lineHeight: 1.2
                        },
                        children: 'Record your voice! It will be played each time a student goes to answer this question.'
                    }),
                    (0, e.jsx)(n.default, {}),
                    (0, e.jsxs)('div', {
                        children: [
                            C && 'recording' !== z && (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)(q.default, {
                                        style: {
                                            fontWeight: r.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Finished Recording'
                                    }),
                                    (0, e.jsx)('audio', {
                                        src: C,
                                        controls: !0
                                    }),
                                    (0, e.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, e.jsx)(m.default, {
                                                size: 'large',
                                                type: 'primary',
                                                icon: (0, e.jsx)(j.default, {}),
                                                loading: x,
                                                style: {
                                                    marginRight: 10
                                                },
                                                onClick: () => {
                                                    return z = C, void(x || fetch(z).then(a => a.blob()).then(x => {
                                                        const F = new File([x], `recording-${ Date.now() }.wav`);
                                                        if (F.size / 1000000 > 3)
                                                            return void(0, t.throwError)({
                                                                title: 'Audio too long',
                                                                content: 'Please record a shorter clip'
                                                            });
                                                        const G = new FormData();
                                                        G.append('file', F), y(!0), (0, s.request)({
                                                            url: '/api/games/audio/add',
                                                            method: 'post',
                                                            data: G,
                                                            success: x => a.onAudioChanged(x.url),
                                                            error: a => p.default.error('Error uploading. Please try again.'),
                                                            both: () => y(!1)
                                                        });
                                                    }).catch());
                                                    var F;
                                                },
                                                children: 'Save'
                                            }),
                                            (0, e.jsx)(m.default, {
                                                onClick: A,
                                                size: 'large',
                                                type: 'dashed',
                                                icon: (0, e.jsx)(g.default, {}),
                                                children: 'New Recording'
                                            })
                                        ]
                                    }),
                                    (0, e.jsx)('div', {
                                        style: {
                                            height: 10
                                        }
                                    })
                                ]
                            }),
                            'idle' === z && (0, e.jsx)(m.default, {
                                onClick: A,
                                style: v,
                                icon: (0, e.jsx)(g.default, {}),
                                type: 'dashed',
                                children: 'Start Recording'
                            }),
                            'recording' === z && (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)(q.default, {
                                        style: {
                                            fontWeight: r.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Recording...'
                                    }),
                                    (0, e.jsx)(m.default, {
                                        onClick: B,
                                        style: v,
                                        type: 'dashed',
                                        icon: (0, e.jsx)(k.default, {}),
                                        children: 'Stop Recording'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
}), b.register('6vx9l', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('ENhJH'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'StopOutlined';
    var _j = f.forwardRef(i);
}), b.register('ENhJH', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z'
                }
            }]
        },
        name: 'stop',
        theme: 'outlined'
    };
}), b.register('QNE16', function(c, d) {
    c.exports = b('UFe9G');
}), b.register('UFe9G', function(c, d) {
    var e = c.exports && c.exports.__awaiter || function(f, g, h, i) {
            return new(h || (h = Promise))(function(j, k) {
                function l(m) {
                    try {
                        _n(i.next(m));
                    } catch (m) {
                        k(m);
                    }
                }

                function m(n) {
                    try {
                        _n(i.throw(n));
                    } catch (n) {
                        k(n);
                    }
                }

                function _n(o) {
                    var p;
                    o.done ? j(o.value) : (p = o.value, p instanceof h ? p : new h(function(q) {
                        q(p);
                    })).then(l, m);
                }
                _n((i = i.apply(f, g || [])).next());
            });
        },
        f = c.exports && c.exports.__generator || function(g, h) {
            var i, j, k, l, m = {
                label: 0,
                sent: function() {
                    if (1 & k[0])
                        throw k[1];
                    return k[1];
                },
                trys: [],
                ops: []
            };
            return l = {
                next: _n(0),
                throw: _n(1),
                return: _n(2)
            }, 'function' == typeof Symbol && (l[Symbol.iterator] = function() {
                return this;
            }), l;

            function _n(o) {
                return function(p) {
                    return function(q) {
                        if (i)
                            throw new TypeError('Generator is already executing.');
                        for (; m;)
                            try {
                                if (i = 1, j && (k = 2 & q[0] ? j.return : q[0] ? j.throw || ((k = j.return) && k.call(j), 0) : j.next) && !(k = k.call(j, q[1])).done)
                                    return k;
                                switch (j = 0, k && (q = [
                                        2 & q[0],
                                        k.value
                                    ]), q[0]) {
                                    case 0:
                                    case 1:
                                        k = q;
                                        break;
                                    case 4:
                                        return m.label++, {
                                            value: q[1],
                                            done: !1
                                        };
                                    case 5:
                                        m.label++, j = q[1], q = [0];
                                        continue;
                                    case 7:
                                        q = m.ops.pop(), m.trys.pop();
                                        continue;
                                    default:
                                        if (!(k = m.trys, (k = k.length > 0 && k[k.length - 1]) || 6 !== q[0] && 2 !== q[0])) {
                                            m = 0;
                                            continue;
                                        }
                                        if (3 === q[0] && (!k || q[1] > k[0] && q[1] < k[3])) {
                                            m.label = q[1];
                                            break;
                                        }
                                        if (6 === q[0] && m.label < k[1]) {
                                            m.label = k[1], k = q;
                                            break;
                                        }
                                        if (k && m.label < k[2]) {
                                            m.label = k[2], m.ops.push(q);
                                            break;
                                        }
                                        k[2] && m.ops.pop(), m.trys.pop();
                                        continue;
                                }
                                q = h.call(g, m);
                            } catch (g) {
                                q = [
                                    6,
                                    g
                                ], j = 0;
                            } finally {
                                i = k = 0;
                            }
                        if (5 & q[0])
                            throw q[1];
                        return {
                            value: q[0] ? q[1] : void 0,
                            done: !0
                        };
                    }([
                        o,
                        p
                    ]);
                };
            }
        };
    Object.defineProperty(c.exports, '__esModule', {
        value: !0
    }), c.exports.ReactMediaRecorder = c.exports.useReactMediaRecorder = c.exports.RecorderErrors = void 0;
    var g, h, i = b('FPbD9'),
        j = b('O0Kav'),
        k = b('h93oD');

    function l(m) {
        var n = this,
            o = m.audio,
            p = void 0 === o || o,
            q = m.video,
            r = void 0 !== q && q,
            s = m.onStop,
            t = void 0 === s ? function() {
                return null;
            } : s,
            u = m.onStart,
            v = void 0 === u ? function() {
                return null;
            } : u,
            w = m.blobPropertyBag,
            x = m.screen,
            y = void 0 !== x && x,
            z = m.mediaRecorderOptions,
            A = void 0 === z ? void 0 : z,
            B = m.customMediaStream,
            C = void 0 === B ? null : B,
            D = m.stopStreamsOnStop,
            E = void 0 === D || D,
            F = m.askPermissionOnMount,
            G = void 0 !== F && F,
            H = (0, j.useRef)(null),
            I = (0, j.useRef)([]),
            J = (0, j.useRef)(null),
            K = (0, j.useState)('idle'),
            L = K[0],
            M = K[1],
            N = (0, j.useState)(!1),
            O = N[0],
            P = N[1],
            Q = (0, j.useState)(void 0),
            R = Q[0],
            S = Q[1],
            T = (0, j.useState)('NONE'),
            U = T[0],
            V = T[1];
        (0, j.useEffect)(function() {
            e(n, void 0, void 0, function() {
                var W;
                return f(this, function(X) {
                    switch (X.label) {
                        case 0:
                            return W = i.register, [
                                4,
                                (0, k.connect)()
                            ];
                        case 1:
                            return [
                                4,
                                W.apply(void 0, [X.sent()])
                            ];
                        case 2:
                            return X.sent(), [2];
                    }
                });
            });
        }, []);
        var W = (0, j.useCallback)(function() {
            return e(n, void 0, void 0, function() {
                var X, Y, Z, $;
                return f(this, function(ab) {
                    switch (ab.label) {
                        case 0:
                            M('acquiring_media'), X = {
                                audio: 'boolean' == typeof p ? !!p : p,
                                video: 'boolean' == typeof r ? !!r : r
                            }, ab.label = 1;
                        case 1:
                            return ab.trys.push([
                                1,
                                9, ,
                                10
                            ]), C ? (J.current = C, [
                                3,
                                8
                            ]) : [
                                3,
                                2
                            ];
                        case 2:
                            return y ? [
                                4,
                                window.navigator.mediaDevices.getDisplayMedia({
                                    video: r || !0
                                })
                            ] : [
                                3,
                                6
                            ];
                        case 3:
                            return (Y = ab.sent()).getVideoTracks()[0].addEventListener('ended', function() {
                                _ab();
                            }), p ? [
                                4,
                                window.navigator.mediaDevices.getUserMedia({
                                    audio: p
                                })
                            ] : [
                                3,
                                5
                            ];
                        case 4:
                            ab.sent().getAudioTracks().forEach(function(bb) {
                                return Y.addTrack(bb);
                            }), ab.label = 5;
                        case 5:
                            return J.current = Y, [
                                3,
                                8
                            ];
                        case 6:
                            return [
                                4,
                                window.navigator.mediaDevices.getUserMedia(X)
                            ];
                        case 7:
                            Z = ab.sent(), J.current = Z, ab.label = 8;
                        case 8:
                            return M('idle'), [
                                3,
                                10
                            ];
                        case 9:
                            return $ = ab.sent(), V($.name), M('idle'), [
                                3,
                                10
                            ];
                        case 10:
                            return [2];
                    }
                });
            });
        }, [
            p,
            r,
            y
        ]);
        (0, j.useEffect)(function() {
            if (!window.MediaRecorder)
                throw new Error('Unsupported Browser');
            if (y && !window.navigator.mediaDevices.getDisplayMedia)
                throw new Error('This browser doesn\'t support screen capturing');
            var X = function(Y) {
                var Z = navigator.mediaDevices.getSupportedConstraints(),
                    $ = Object.keys(Y).filter(function(ab) {
                        return !Z[ab];
                    });
                $.length > 0 && console.error('The constraints '.concat($.join(','), ' doesn\'t support on this browser. Please check your ReactMediaRecorder component.'));
            };
            return 'object' == typeof p && X(p), 'object' == typeof r && X(r), A && A.mimeType && (MediaRecorder.isTypeSupported(A.mimeType) || console.error('The specified MIME type you supplied for MediaRecorder doesn\'t support this browser')), !J.current && G && W(),
                function() {
                    J.current && J.current.getTracks().forEach(function(Y) {
                        return Y.clone().stop();
                    });
                };
        }, [
            p,
            y,
            r,
            W,
            A,
            G
        ]);
        var X = function(Y) {
                var Z = Y.data;
                I.current.push(Z);
            },
            Y = function() {
                v();
            },
            Z = function() {
                var $ = I.current[0],
                    ab = Object.assign({
                        type: $.type
                    }, w || (r ? {
                        type: 'video/mp4'
                    } : {
                        type: 'audio/wav'
                    })),
                    bb = new Blob(I.current, ab),
                    cb = URL.createObjectURL(bb);
                M('stopped'), S(cb), t(cb, bb);
            },
            $ = function(ab) {
                P(ab), J.current && J.current.getAudioTracks().forEach(function(bb) {
                    return bb.enabled = !ab;
                });
            },
            _ab = function() {
                H.current && 'inactive' !== H.current.state && (M('stopping'), H.current.stop(), E && J.current && J.current.getTracks().forEach(function(bb) {
                    return bb.stop();
                }), I.current = []);
            };
        return {
            error: g[U],
            muteAudio: function() {
                return $(!0);
            },
            unMuteAudio: function() {
                return $(!1);
            },
            startRecording: function() {
                return e(n, void 0, void 0, function() {
                    return f(this, function(bb) {
                        switch (bb.label) {
                            case 0:
                                return V('NONE'), J.current ? [
                                    3,
                                    2
                                ] : [
                                    4,
                                    W()
                                ];
                            case 1:
                                bb.sent(), bb.label = 2;
                            case 2:
                                return J.current ? J.current.getTracks().some(function(cb) {
                                    return 'ended' === cb.readyState;
                                }) ? [
                                    4,
                                    W()
                                ] : [
                                    3,
                                    4
                                ] : [
                                    3,
                                    5
                                ];
                            case 3:
                                bb.sent(), bb.label = 4;
                            case 4:
                                if (!J.current.active)
                                    return [2];
                                H.current = new i.MediaRecorder(J.current, A || void 0), H.current.ondataavailable = X, H.current.onstop = Z, H.current.onstart = Y, H.current.onerror = function() {
                                    V('NO_RECORDER'), M('idle');
                                }, H.current.start(), M('recording'), bb.label = 5;
                            case 5:
                                return [2];
                        }
                    });
                });
            },
            pauseRecording: function() {
                H.current && 'recording' === H.current.state && (M('paused'), H.current.pause());
            },
            resumeRecording: function() {
                H.current && 'paused' === H.current.state && (M('recording'), H.current.resume());
            },
            stopRecording: _ab,
            mediaBlobUrl: R,
            status: L,
            isAudioMuted: O,
            previewStream: J.current ? new MediaStream(J.current.getVideoTracks()) : null,
            previewAudioStream: J.current ? new MediaStream(J.current.getAudioTracks()) : null,
            clearBlobUrl: function() {
                R && URL.revokeObjectURL(R), S(void 0), M('idle');
            }
        };
    }
    (h = g = c.exports.RecorderErrors || (c.exports.RecorderErrors = {})).AbortError = 'media_aborted', h.NotAllowedError = 'permission_denied', h.NotFoundError = 'no_specified_media_found', h.NotReadableError = 'media_in_use', h.OverconstrainedError = 'invalid_media_constraints', h.TypeError = 'no_constraints', h.NONE = '', h.NO_RECORDER = 'recorder_error', c.exports.useReactMediaRecorder = l;
    c.exports.ReactMediaRecorder = function(m) {
        return m.render(l(m));
    };
}), b.register('FPbD9', function(c, d) {
    a(c.exports, 'MediaRecorder', function() {
        return _L;
    }), a(c.exports, 'register', function() {
        return _M;
    });
    var e = b('lyOZT'),
        f = b('psx/p'),
        g = b('8d5ZA'),
        h = b('vmBeP'),
        i = b('ONCby'),
        j = b('S9sbA'),
        k = b('/P66Z'),
        l = (b('Myjs0'), b('GvgK0')),
        m = b('BV71G'),
        n = b('j+1mu'),
        o = b('SMnuw'),
        p = b('LGRSr'),
        q = b('9PZ0F'),
        r = b('6+efZ'),
        s = b('FkSBg'),
        t = b('Dz5M6'),
        u = b('FEiId'),
        v = b('jBm/j'),
        w = b('T83ym'),
        x = b('FPX+q');
    b('iaku/'), b('MyAkP');
    const y = [],
        z = (0, v.createWindow)(),
        A = (0, m.createNativeBlobEventConstructor)(z),
        B = (0, f.createBlobEventFactory)(A),
        C = (0, t.createWebAudioMediaRecorderFactory)(B, j.createInvalidModificationError, k.createInvalidStateError, p.createNotSupportedError),
        D = (0, s.createReadVariableSizeInteger)(w.readVariableSizeIntegerLength),
        E = (0, q.createReadElementContent)(D),
        F = (0, r.createReadElementType)(D),
        G = (0, g.createDecodeWebMChunk)(E, F),
        H = (0, u.createWebmPcmMediaRecorderFactory)(B, j.createInvalidModificationError, p.createNotSupportedError, G, D),
        I = (0, i.createEventTargetFactory)(z),
        J = (0, o.createNativeMediaRecorderConstructor)(z),
        K = (0, n.createNativeMediaRecorderFactory)(j.createInvalidModificationError, p.createNotSupportedError),
        _L = (0, l.createMediaRecorderConstructor)(K, p.createNotSupportedError, C, H, y, (0, h.createEventTargetConstructor)(I, x.wrapEventListener), J),
        _M = async a => {
            y.push(await (0, e.register)(a));
        };
}), b.register('lyOZT', function(c, d) {
    a(c.exports, 'encode', function() {
        return _j;
    }), a(c.exports, 'instantiate', function() {
        return _k;
    }), a(c.exports, 'register', function() {
        return _l;
    });
    var e = b('gdfvc'),
        f = b('PiBMX');
    const g = new Blob([f.worker], {
            type: 'application/javascript; charset=utf-8'
        }),
        h = URL.createObjectURL(g),
        i = (0, e.load)(h),
        _j = (i.connect, i.disconnect, i.encode),
        _k = i.instantiate,
        _l = (i.isSupported, i.register);
    URL.revokeObjectURL(h);
}), b.register('gdfvc', function(c, d) {
    a(c.exports, 'load', function() {
        return _l;
    });
    var e = b('bo9mQ'),
        f = b('5KWr9');
    b('5eHN+'), b('IhpV8');
    const g = new Set(),
        h = (0, e.createBroker)({
            encode: ({
                call: i
            }) => async (b, c) => {
                const j = await i('encode', {
                    encoderId: b,
                    timeslice: c
                });
                return g.delete(b), j;
            },
            instantiate: ({
                call: j
            }) => async (b, c) => {
                const k = (0, f.addUniqueNumber)(g);
                return {
                    encoderId: k,
                    port: await j('instantiate', {
                        encoderId: k,
                        mimeType: b,
                        sampleRate: c
                    })
                };
            },
            register: ({
                call: k
            }) => b => k('register', {
                port: b
            }, [b])
        }),
        _l = k => {
            const m = new Worker(k);
            return h(m);
        };
}), b.register('bo9mQ', function(c, d) {
    a(c.exports, 'createBroker', function() {
        return _i;
    });
    var e = b('5KWr9'),
        f = b('YknU9'),
        g = b('/5UWr');
    b('iRicU'), b('504Y1');
    const h = new WeakMap(),
        _i = a => {
            const j = (0, g.extendBrokerImplementation)(a);
            return a => {
                const k = (a => {
                    if (h.has(a))
                        return h.get(a);
                    const l = new Map();
                    return h.set(a, l), l;
                })(a);
                a.addEventListener('message', ({
                    data: l
                }) => {
                    const {
                        id: m
                    } = l;
                    if (null !== m && k.has(m)) {
                        const {
                            reject: n,
                            resolve: o
                        } = k.get(m);
                        k.delete(m), void 0 === l.error ? o(l.result) : n(new Error(l.error.message));
                    }
                }), (0, f.isMessagePort)(l) && l.start();
                const m = (j, n = null, o = []) => new Promise((g, h) => {
                        const p = (0, e.generateUniqueNumber)(k);
                        k.set(p, {
                            reject: h,
                            resolve: g
                        }), null === n ? l.postMessage({
                            id: p,
                            method: j
                        }, o) : l.postMessage({
                            id: p,
                            method: j,
                            params: n
                        }, o);
                    }),
                    p = (j, k, q = []) => {
                        l.postMessage({
                            id: null,
                            method: j,
                            params: k
                        }, q);
                    };
                let r = {};
                for (const [s, t] of Object.entries(j))
                    r = {
                        ...r,
                        [s]: t({
                            call: q,
                            notify: p
                        })
                    };
                return {
                    ...r
                };
            };
        };
}), b.register('5KWr9', function(c, d) {
    var e, f, g, h, i, j, k, l, m, n, o;
    c.exports, e = c.exports, f = function(p) {
        return function(q) {
            var r = p(q);
            return q.add(r), r;
        };
    }, g = function(p) {
        return function(q, r) {
            return p.set(q, r), r;
        };
    }, h = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, j = 2 * (i = 536870912), k = function(p, q) {
        return function(r) {
            var s = q.get(r),
                t = void 0 === s ? r.size : s < j ? s + 1 : 0;
            if (!r.has(t))
                return p(r, t);
            if (r.size < i) {
                for (; r.has(t);)
                    t = Math.floor(Math.random() * j);
                return p(r, t);
            }
            if (r.size > h)
                throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
            for (; r.has(t);)
                t = Math.floor(Math.random() * h);
            return p(r, t);
        };
    }, l = new WeakMap(), m = g(l), n = k(m, l), o = f(n), e.addUniqueNumber = o, e.generateUniqueNumber = n, Object.defineProperty(e, '__esModule', {
        value: !0
    });
}), b.register('YknU9', function(c, d) {
    a(c.exports, 'isMessagePort', function() {
        return _e;
    });
    const _e = a => 'function' == typeof a.start;
}), b.register('/5UWr', function(c, d) {
    a(c.exports, 'extendBrokerImplementation', function() {
        return _f;
    });
    var e = b('aN0ry');
    const _f = a => ({
        ...a,
        connect: ({
            call: g
        }) => async () => {
            const {
                port1: h,
                port2: i
            } = new MessageChannel(), j = await g('connect', {
                port: h
            }, [h]);
            return e.PORT_MAP.set(i, j), i;
        },
        disconnect: ({
            call: h
        }) => async b => {
            const i = e.PORT_MAP.get(b);
            if (void 0 === i)
                throw new Error('The given port is not connected.');
            await h('disconnect', {
                portId: i
            });
        },
        isSupported: ({
            call: i
        }) => () => i('isSupported')
    });
}), b.register('aN0ry', function(c, d) {
    a(c.exports, 'PORT_MAP', function() {
        return _e;
    });
    const _e = new WeakMap();
}), b.register('iRicU', function(c, d) {
    b('CJP4m642'), b('CJP4m641'), b('CJP4m640'), b('CJP4m639');
}), b.register('CJP4m642', function(c, d) {}), b.register('CJP4m641', function(c, d) {}), b.register('CJP4m640', function(c, d) {}), b.register('CJP4m639', function(c, d) {}), b.register('504Y1', function(c, d) {
    b('CJP4m638');
}), b.register('CJP4m638', function(c, d) {}), b.register('5eHN+', function(c, d) {
    b('CJP4m637');
}), b.register('CJP4m637', function(c, d) {}), b.register('IhpV8', function(c, d) {
    b('CJP4m636'), b('CJP4m635');
}), b.register('CJP4m636', function(c, d) {}), b.register('CJP4m635', function(c, d) {}), b.register('PiBMX', function(c, d) {
    a(c.exports, 'worker', function() {
        return _e;
    });
    const _e = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t),s=o(r),i=o(n),c=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},u=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)s.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(s),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(u(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(a.default(e),[c(t[r.name],r.modifiers),n]):[].concat(a.default(e),[function(e){return c(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(a.default(e),a.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(a.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,a=2*o,s=function(e,t){return function(r){var s=t.get(r),i=void 0===s?r.size:s<a?s+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=s(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),a=r(906),s=r(344);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,a=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),s=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),c=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),u=(e,t)=>async r=>{let{data:{id:n,method:o,params:c}}=r;const u=t[o];try{if(void 0===u)throw a({method:o});const t=void 0===c?u():u(c);if(void 0===t)throw s({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=(0,l.generateUniqueNumber)(d);return d.set(a,(()=>{o(),n.close(),d.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw c({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=u(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>{e.onmessage=null,e.close()},h=new WeakMap,g=new WeakMap,v=(e=>{const t=(r=e,{...r,connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return h.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=h.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var r;return e=>{const r=(e=>{if(g.has(e))return g.get(e);const t=new Map;return g.set(e,t),t})(e);e.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,s)=>{const i=(0,l.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)}))},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a={...a,[e]:r({call:n,notify:o})};return{...a}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),w=async(e,t)=>{const r=v(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},x=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(x),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(x,y),b=new Map,E=((e,t)=>r=>{const[n,o,a,s]=t(r);return a?new Promise((t=>{o.onmessage=a=>{let{data:i}=a;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,s,i)}})):n.encode(r,null)})(m,M),A=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(b),_=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error(\'There is already an encoder registered with an id called "\'.concat(n,\'".\'));const s=r(o),{port1:i,port2:c}=new MessageChannel,u=[s,i,!0,a];return t.set(n,u),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),u[2]=!1):s.record(n,a,r)},c})(m,x,A),I=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);p(self,{encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await I(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=_(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await w(b,t)}}})})()})();';
}), b.register('psx/p', function(c, d) {
    a(c.exports, 'createBlobEventFactory', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        if (null === a) {
            const {
                data: f,
                ...g
            } = d, h = new Event(c, g);
            return h.data = f, h;
        }
        return new a(c, d);
    };
}), b.register('8d5ZA', function(c, d) {
    a(c.exports, 'createDecodeWebMChunk', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e, _k) => {
        const f = [];
        let g = _e,
            h = 0;
        for (; h < d.byteLength;)
            if (null === g) {
                const i = c(d, h);
                if (null === i)
                    break;
                const {
                    length: j,
                    type: _k
                } = i;
                g = _k, h += j;
            } else {
                const i = a(d, h, g, _i);
                if (null === i)
                    break;
                const {
                    content: j,
                    length: k
                } = i;
                g = null, h += k, null !== j && f.push(j);
            }
        return {
            contents: f,
            currentElementType: g,
            offset: h
        };
    };
}), b.register('vmBeP', function(c, d) {
    a(c.exports, 'createEventTargetConstructor', function() {
        return _e;
    });
    const _e = (a, c) => class {
        addEventListener(f, g, h) {
            if (null !== g) {
                let _i = this._listeners.get(g);
                void 0 === _i && (_i = c(this, g), 'function' == typeof g && this._listeners.set(g, _i)), this._nativeEventTarget.addEventListener(f, _i, h);
            }
        }
        dispatchEvent(f) {
            return this._nativeEventTarget.dispatchEvent(f);
        }
        removeEventListener(f, g, h) {
            const i = null === g ? void 0 : this._listeners.get(g);
            this._nativeEventTarget.removeEventListener(f, void 0 === i ? null : i, h);
        }
        constructor(f = null) {
            this._listeners = new WeakMap(), this._nativeEventTarget = null === f ? a() : f;
        }
    };
}), b.register('ONCby', function(c, d) {
    a(c.exports, 'createEventTargetFactory', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            throw new Error('A native EventTarget could not be created.');
        return a.document.createElement('p');
    };
}), b.register('S9sbA', function(c, d) {
    a(c.exports, 'createInvalidModificationError', function() {
        return _e;
    });
    const _e = (f = '') => {
        try {
            return new DOMException(f, 'InvalidModificationError');
        } catch (c) {
            return c.code = 13, c.message = f, c.name = 'InvalidModificationError', c;
        }
    };
}), b.register('/P66Z', function(c, d) {
    a(c.exports, 'createInvalidStateError', function() {
        return _e;
    });
    const _e = () => {
        try {
            return new DOMException('', 'InvalidStateError');
        } catch (a) {
            return a.code = 11, a.name = 'InvalidStateError', a;
        }
    };
}), b.register('Myjs0', function(c, d) {
    a(c.exports, 'createIsSupportedPromise', function() {
        return _e;
    });
    const _e = a => null === a || void 0 === a.MediaStream || void 0 !== a.MediaRecorder && void 0 === a.MediaRecorder.isTypeSupported ? Promise.resolve(!1) : new Promise(c => {
        if (void 0 === a.MediaRecorder)
            return c(!0);
        const f = document.createElement('canvas');
        if (f.getContext('2d'), 'function' != typeof f.captureStream)
            return c(!1);
        const g = f.captureStream(),
            h = 'audio/webm';
        try {
            const i = new a.MediaRecorder(g, {
                mimeType: h
            });
            i.addEventListener('dataavailable', ({
                data: j
            }) => c(j.type === h)), i.start(), setTimeout(() => i.stop(), 10);
        } catch (a) {
            c('NotSupportedError' === a.name);
        }
    });
}), b.register('GvgK0', function(c, d) {
    a(c.exports, 'createMediaRecorderConstructor', function() {
        return _e;
    });
    const _e = (a, c, d, _e, _p, _f, _g) => class extends _f {
        get mimeType() {
            return this._internalMediaRecorder.mimeType;
        }
        get ondataavailable() {
            return null === this._ondataavailable ? this._ondataavailable : this._ondataavailable[0];
        }
        set ondataavailable(f) {
            if (null !== this._ondataavailable && this.removeEventListener('dataavailable', this._ondataavailable[1]), 'function' == typeof f) {
                const g = f.bind(this);
                this.addEventListener('dataavailable', g), this._ondataavailable = [
                    f,
                    g
                ];
            } else
                this._ondataavailable = null;
        }
        get onerror() {
            return null === this._onerror ? this._onerror : this._onerror[0];
        }
        set onerror(f) {
            if (null !== this._onerror && this.removeEventListener('error', this._onerror[1]), 'function' == typeof f) {
                const g = f.bind(this);
                this.addEventListener('error', g), this._onerror = [
                    f,
                    g
                ];
            } else
                this._onerror = null;
        }
        get onpause() {
            return null === this._onpause ? this._onpause : this._onpause[0];
        }
        set onpause(f) {
            if (null !== this._onpause && this.removeEventListener('pause', this._onpause[1]), 'function' == typeof f) {
                const g = f.bind(this);
                this.addEventListener('pause', g), this._onpause = [
                    f,
                    g
                ];
            } else
                this._onpause = null;
        }
        get onresume() {
            return null === this._onresume ? this._onresume : this._onresume[0];
        }
        set onresume(f) {
            if (null !== this._onresume && this.removeEventListener('resume', this._onresume[1]), 'function' == typeof f) {
                const g = f.bind(this);
                this.addEventListener('resume', g), this._onresume = [
                    f,
                    g
                ];
            } else
                this._onresume = null;
        }
        get onstart() {
            return null === this._onstart ? this._onstart : this._onstart[0];
        }
        set onstart(f) {
            if (null !== this._onstart && this.removeEventListener('start', this._onstart[1]), 'function' == typeof f) {
                const g = f.bind(this);
                this.addEventListener('start', g), this._onstart = [
                    f,
                    g
                ];
            } else
                this._onstart = null;
        }
        get onstop() {
            return null === this._onstop ? this._onstop : this._onstop[0];
        }
        set onstop(f) {
            if (null !== this._onstop && this.removeEventListener('stop', this._onstop[1]), 'function' == typeof f) {
                const g = f.bind(this);
                this.addEventListener('stop', g), this._onstop = [
                    f,
                    g
                ];
            } else
                this._onstop = null;
        }
        get state() {
            return this._internalMediaRecorder.state;
        }
        pause() {
            return this._internalMediaRecorder.pause();
        }
        resume() {
            return this._internalMediaRecorder.resume();
        }
        start(f) {
            return this._internalMediaRecorder.start(f);
        }
        stop() {
            return this._internalMediaRecorder.stop();
        }
        static isTypeSupported(f) {
            return null !== _g && void 0 !== _g.isTypeSupported && _g.isTypeSupported(f) || _p.some(c => c.test(f));
        }
        constructor(_f, g = {}) {
            const {
                mimeType: h
            } = g;
            if (null !== _g && (void 0 === h || void 0 !== _g.isTypeSupported && _g.isTypeSupported(h))) {
                const i = a(_g, _f, g);
                super(i), this._internalMediaRecorder = i;
            } else {
                if (void 0 === h || !_p.some(a => a.test(h)))
                    throw null !== _g && a(_g, _f, g), c();
                super(), null !== _g && void 0 !== _g.isTypeSupported && _g.isTypeSupported('audio/webm;codecs=pcm') ? this._internalMediaRecorder = _e(this, _g, _f, h) : this._internalMediaRecorder = d(this, _f, h);
            }
            this._ondataavailable = null, this._onerror = null, this._onpause = null, this._onresume = null, this._onstart = null, this._onstop = null;
        }
    };
}), b.register('BV71G', function(c, d) {
    a(c.exports, 'createNativeBlobEventConstructor', function() {
        return _e;
    });
    const _e = a => null !== a && void 0 !== a.BlobEvent ? a.BlobEvent : null;
}), b.register('j+1mu', function(c, d) {
    a(c.exports, 'createNativeMediaRecorderFactory', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e, _p) => {
        const f = [],
            _g = new WeakMap(),
            h = new WeakMap(),
            i = new d(_e, _p),
            j = new WeakMap();
        let k = !0;
        var l, m, n, o;
        return i.addEventListener = (l = i.addEventListener, (c, d, _e) => {
            let _p = d;
            return 'function' == typeof d && ('dataavailable' === c ? (_p = a => {
                setTimeout(() => {
                    if (k && 'inactive' === i.state)
                        f.push(a.data);
                    else {
                        if (f.length > 0) {
                            const q = a.data;
                            Object.defineProperty(a, 'data', {
                                value: new Blob([
                                    ...f,
                                    q
                                ], {
                                    type: q.type
                                })
                            }), f.length = 0;
                        }
                        d.call(i, a);
                    }
                });
            }, _g.set(d, _p)) : 'error' === c ? (_p = c => {
                if (void 0 === c.error)
                    d.call(i, new ErrorEvent('error', {
                        error: a()
                    }));
                else if ('UnknownError' === c.error.name) {
                    const q = c.error.message;
                    d.call(i, new ErrorEvent('error', {
                        error: a(q)
                    }));
                } else
                    c instanceof ErrorEvent ? d.call(i, c) : d.call(i, new ErrorEvent('error', {
                        error: c.error
                    }));
            }, h.set(d, _p)) : 'stop' === c && (_p = a => {
                k = !1, setTimeout(() => d.call(i, a));
            }, j.set(d, _p))), l.call(i, c, _p, _e);
        }), i.dispatchEvent = (m = i.dispatchEvent, a => {
            let p;
            setTimeout(() => {
                p = k, k = !1;
            });
            const q = m.call(i, a);
            return setTimeout(() => k = p), q;
        }), i.removeEventListener = (n = i.removeEventListener, (a, c, d) => {
            let p = c;
            if ('function' == typeof c)
                if ('dataavailable' === a) {
                    const q = _g.get(c);
                    void 0 !== q && (p = q);
                } else if ('error' === a) {
                const q = h.get(c);
                void 0 !== q && (p = q);
            } else if ('stop' === a) {
                const q = j.get(c);
                void 0 !== q && (p = q);
            }
            return n.call(i, a, p, d);
        }), i.start = (o = i.start, a => {
            if (void 0 !== _f.mimeType && _f.mimeType.startsWith('audio/') && _e.getVideoTracks().length > 0)
                throw c();
            return k = void 0 !== a, void 0 === a ? o.call(i) : o.call(i, a);
        }), i;
    };
}), b.register('SMnuw', function(c, d) {
    a(c.exports, 'createNativeMediaRecorderConstructor', function() {
        return _e;
    });
    const _e = a => null === a || void 0 === a.MediaRecorder ? null : a.MediaRecorder;
}), b.register('LGRSr', function(c, d) {
    a(c.exports, 'createNotSupportedError', function() {
        return _e;
    });
    const _e = () => {
        try {
            return new DOMException('', 'NotSupportedError');
        } catch (a) {
            return a.code = 9, a.name = 'NotSupportedError', a;
        }
    };
}), b.register('9PZ0F', function(c, d) {
    a(c.exports, 'createReadElementContent', function() {
        return _e;
    });
    const _e = a => (c, d, _e, _f = 2) => {
        const g = a(c, d);
        if (null === g)
            return g;
        const {
            length: h,
            value: i
        } = g;
        if ('master' === _e)
            return {
                content: null,
                length: h
            };
        if (d + h + i > c.byteLength)
            return null;
        if ('binary' === _e) {
            const j = (i / Float32Array.BYTES_PER_ELEMENT - 1) / _f,
                k = Array.from({
                    length: _f
                }, () => new Float32Array(j));
            for (let l = 0; l < j; l += 1) {
                const m = l * _f + 1;
                for (let n = 0; n < _f; n += 1)
                    k[n][l] = c.getFloat32(d + h + (m + n) * Float32Array.BYTES_PER_ELEMENT, !0);
            }
            return {
                content: k,
                length: h + i
            };
        }
        return {
            content: null,
            length: h + i
        };
    };
}), b.register('6+efZ', function(c, d) {
    a(c.exports, 'createReadElementType', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        const f = a(c, d);
        if (null === f)
            return f;
        const {
            length: g,
            value: h
        } = f;
        return 35 === h ? {
            length: g,
            type: 'binary'
        } : 46 === h || 97 === h || 88713574 === h || 106212971 === h || 139690087 === h || 172351395 === h || 256095861 === h ? {
            length: g,
            type: 'master'
        } : {
            length: g,
            type: 'unknown'
        };
    };
}), b.register('FkSBg', function(c, d) {
    a(c.exports, 'createReadVariableSizeInteger', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        const f = a(c, d);
        if (null === f)
            return f;
        const g = d + Math.floor((f - 1) / 8);
        if (g + f > c.byteLength)
            return null;
        let h = c.getUint8(g) & (1 << 8 - f % 8) - 1;
        for (let i = 1; i < f; i += 1)
            h = (h << 8) + c.getUint8(g + i);
        return {
            length: f,
            value: h
        };
    };
}), b.register('Dz5M6', function(c, d) {
    a(c.exports, 'createWebAudioMediaRecorderFactory', function() {
        return _i;
    });
    var e = b('lyOZT'),
        f = b('giedA'),
        g = b('m7t6S');
    const h = 'Missing AudioWorklet support. Maybe this is not running in a secure context.',
        _i = (a, b, c, d) => (_i, _E, _F) => {
            var j;
            const k = null === (j = _E.getAudioTracks()[0]) || void 0 === j ? void 0 : j.getSettings().sampleRate,
                l = new(0, g.MinimalAudioContext)({
                    latencyHint: 'playback',
                    sampleRate: k
                }),
                m = Math.max(1024, Math.ceil(l.baseLatency * l.sampleRate)),
                n = new(0, g.AudioBuffer)({
                    length: m,
                    sampleRate: l.sampleRate
                }),
                o = [],
                p = (0, f.addRecorderAudioWorkletModule)(a => {
                    if (void 0 === g.addAudioWorkletModule)
                        throw new Error(h);
                    return (0, g.addAudioWorkletModule)(l, a);
                });
            let q = null,
                r = null,
                s = null,
                t = null,
                u = !0;
            const v = b => {
                    _i.dispatchEvent(a('dataavailable', {
                        data: new Blob(b, {
                            type: _F
                        })
                    }));
                },
                w = async (a, b) => {
                    const x = await (0, e.encode)(a, b);
                    null === s ? o.push(...x) : (v(x), t = w(a, b));
                }, x = () => (u = !0, l.resume()), y = () => {
                    null !== s && (null !== q && (_E.removeEventListener('addtrack', q), _E.removeEventListener('removetrack', q)), null !== r && clearTimeout(r), s.then(async ({
                        constantSourceNode: z,
                        encoderId: A,
                        mediaStreamAudioSourceNode: B,
                        recorderAudioWorkletNode: C
                    }) => {
                        null !== t && (t.catch(() => {}), t = null), await C.stop(), B.disconnect(C), z.stop();
                        const D = await (0, e.encode)(A, null);
                        null === s && await _z(), v([
                            ...o,
                            ...D
                        ]), o.length = 0, _i.dispatchEvent(new Event('stop'));
                    }), s = null);
                }, _z = () => (u = !1, l.suspend());
            return _z(), {
                get mimeType() {
                    return _F;
                },
                get state() {
                    return null === s ? 'inactive' : u ? 'recording' : 'paused';
                },
                pause() {
                    if (null === s)
                        throw c();
                    u && (_z(), _i.dispatchEvent(new Event('pause')));
                },
                resume() {
                    if (null === s)
                        throw c();
                    u || (x(), _i.dispatchEvent(new Event('resume')));
                },
                start(A) {
                    var B;
                    if (null !== s)
                        throw c();
                    if (_E.getVideoTracks().length > 0)
                        throw d();
                    _i.dispatchEvent(new Event('start'));
                    const C = _E.getAudioTracks(),
                        D = 0 === C.length ? 2 : null !== (B = C[0].getSettings().channelCount) && void 0 !== B ? B : 2;
                    s = Promise.all([
                        x(),
                        p.then(() => (async (A, b, c, d, _i) => {
                            const {
                                encoderId: _E,
                                port: _F
                            } = await (0, e.instantiate)(_i, b.sampleRate);
                            if (void 0 === g.AudioWorkletNode)
                                throw new Error(h);
                            return {
                                audioBufferSourceNode: new(0, g.AudioBufferSourceNode)(b, {
                                    buffer: A
                                }),
                                encoderId: _E,
                                mediaStreamAudioSourceNode: new(0, g.MediaStreamAudioSourceNode)(b, {
                                    mediaStream: d
                                }),
                                port: _F,
                                recorderAudioWorkletNode: (0, f.createRecorderAudioWorkletNode)(g.AudioWorkletNode, b, {
                                    channelCount: c
                                })
                            };
                        })(n, l, D, _j, _k))
                    ]).then(async ([, {
                        audioBufferSourceNode: E,
                        encoderId: F,
                        mediaStreamAudioSourceNode: G,
                        port: H,
                        recorderAudioWorkletNode: I
                    }]) => {
                        G.connect(I), await new Promise(A => {
                            E.onended = A, E.connect(I), E.start(l.currentTime + m / l.sampleRate);
                        }), E.disconnect(I);
                        const J = new(0, g.ConstantSourceNode)(l, {
                            offset: 0
                        });
                        return J.onended = () => J.disconnect(), J.connect(l.destination), J.start(), await I.record(H), void 0 !== A && (t = w(F, A)), {
                            constantSourceNode: J,
                            encoderId: F,
                            mediaStreamAudioSourceNode: G,
                            recorderAudioWorkletNode: I
                        };
                    });
                    const J = _j.getTracks();
                    q = () => {
                        y(), _i.dispatchEvent(new ErrorEvent('error', {
                            error: E()
                        }));
                    }, _j.addEventListener('addtrack', q), _j.addEventListener('removetrack', q), r = setInterval(() => {
                        const K = _j.getTracks();
                        K.length === J.length && !K.some((K, E) => K !== J[E]) || null === q || q();
                    }, 1000);
                },
                stop: y
            };
        };
}), b.register('giedA', function(c, d) {
    a(c.exports, 'addRecorderAudioWorkletModule', function() {
        return _m;
    }), a(c.exports, 'createRecorderAudioWorkletNode', function() {
        return _n;
    });
    var e = b('5KWr9'),
        f = b('wC6Om');
    b('s1H8z');
    b('LlJWl');
    var g = b('BIvI+'),
        h = b('r+F5r'),
        i = b('jDHqT'),
        _j = b('Dtg9J'),
        _k = b('fm2rV'),
        l = b('LMpWr');
    b('J6Rif'), b('3SjsH');
    const _m = (0, g.createAddRecorderAudioWorkletModule)(Blob, URL, l.worklet),
        _n = (0, _j.createRecorderAudioWorkletNodeFactory)(h.createListener, (0, i.createPostMessageFactory)(e.generateUniqueNumber), f.on, _k.validateState);
}), b.register('wC6Om', function(c, d) {
    a(c.exports, 'on', function() {
        return _I;
    });
    var e = b('m+f4h'),
        f = b('p2UCL'),
        g = b('c0rAs'),
        h = b('V0tVB'),
        i = b('ND+eN'),
        j = b('yvLRu'),
        k = b('Rnk7J'),
        l = b('WKDqX'),
        m = b('WJ0UL'),
        n = b('Dfnky'),
        o = b('DjOfm'),
        p = b('5vwrm'),
        q = b('LHtGy'),
        r = b('lyn5J'),
        s = b('Hxdzh'),
        t = b('rOp5s'),
        u = b('bRVkh'),
        v = b('F5Km8'),
        w = b('M/f9A'),
        x = b('yNaPY'),
        y = b('jBIY0'),
        z = b('Ygd8x'),
        A = b('jBm/j1'),
        B = b('UNFft'),
        C = b('8+k/1');
    b('8fhLD'), b('NWIg1');
    const D = (0, A.createWindow)(),
        E = (0, B.createWrapSubscribeFunction)(e.patch, f.toObserver),
        F = ((0, g.createAnimationFrame)(C.emitNotSupportedError, D, E), (0, q.createMutations)(C.emitNotSupportedError, D, E)),
        G = (0, k.createMapSubscribableThing)(E),
        H = (0, u.createPrependSubscribableThing)(E),
        _I = ((0, h.createAttribute)(G, F, H), (0, i.createGeolocation)(C.emitNotSupportedError, D, E), (0, j.createIntersections)(C.emitNotSupportedError, D, E), (0, l.createMediaDevices)(C.emitNotSupportedError, D, E), (0, m.createMediaQueryMatch)(C.emitNotSupportedError, D, E), (0, n.createMetrics)(C.emitNotSupportedError, D, E), (0, o.createMidiInputs)(E), (0, p.createMidiOutputs)(E), (0, r.createOn)(E));
    (0, s.createOnline)(C.emitNotSupportedError, D, E), (0, t.createPermissionState)(C.emitNotSupportedError, D, E), (0, v.createReports)(C.emitNotSupportedError, D, E), (0, w.createResizes)(C.emitNotSupportedError, D, E), (0, x.createUnhandledRejection)(C.emitNotSupportedError, D, E), (0, y.createVideoFrame)(C.emitNotSupportedError, E), (0, z.createWakeLock)(C.emitNotSupportedError, D, E);
}), b.register('m+f4h', function(c, d) {
    a(c.exports, 'patch', function() {
        return _f;
    });
    var e = b('kneCD');

    function _f(g) {
        return Symbol.observable || ('function' == typeof g && g.prototype && g.prototype[Symbol.observable] ? (g.prototype[e.observable] = g.prototype[Symbol.observable], delete g.prototype[Symbol.observable]) : (g[e.observable] = g[Symbol.observable], delete g[Symbol.observable])), g;
    }
}), b.register('kneCD', function(c, d) {
    a(c.exports, 'observable', function() {
        return _e;
    });
    const _e = Symbol.observable || '@@observable';
}), b.register('p2UCL', function(c, d) {
    a(c.exports, 'toObserver', function() {
        return _g;
    });
    const e = () => {},
        f = a => {
            throw a;
        };

    function _g(h) {
        var i, j, k;
        return h ? h.next && h.error && h.complete ? h : {
            complete: (null !== (i = h.complete) && void 0 !== i ? i : e).bind(h),
            error: (null !== (j = h.error) && void 0 !== j ? j : f).bind(h),
            next: (null !== (k = h.next) && void 0 !== k ? k : e).bind(h)
        } : {
            complete: e,
            error: f,
            next: e
        };
    }
}), b.register('c0rAs', function(c, d) {
    a(c.exports, 'createAnimationFrame', function() {
        return _e;
    });
    const _e = (a, c, d) => () => d(d => {
        if (null === c || void 0 === c.cancelAnimationFrame || void 0 === c.requestAnimationFrame)
            return a(d);
        let f = c.requestAnimationFrame(function a(g) {
            f = c.requestAnimationFrame(a), d.next(g);
        });
        return () => c.cancelAnimationFrame(f);
    });
}), b.register('V0tVB', function(c, d) {
    a(c.exports, 'createAttribute', function() {
        return _e;
    });
    const _e = (a, c, d) => (_e, _f) => {
        const f = () => _e.getAttribute(_f);
        return d(a(c(_e, {
            attributeFilter: [_f],
            childList: !1,
            subtree: !1
        }), () => f()), f());
    };
}), b.register('ND+eN', function(c, d) {
    a(c.exports, 'createGeolocation', function() {
        return _e;
    });
    const _e = (a, c, d) => _e => d(d => {
        if (null === c || void 0 === c.navigator || void 0 === c.navigator.geolocation || void 0 === c.navigator.geolocation.clearWatch || void 0 === c.navigator.geolocation.watchPosition)
            return a(d);
        const _f = c.navigator.geolocation.watchPosition(a => d.next(a), a => d.error(a), _e);
        return () => c.navigator.geolocation.clearWatch(_f);
    });
}), b.register('yvLRu', function(c, d) {
    a(c.exports, 'createIntersections', function() {
        return _e;
    });
    const _e = (a, c, d) => (_e, _g) => d(d => {
        if (null === c || void 0 === c.IntersectionObserver)
            return a(d);
        const f = new c.IntersectionObserver(a => d.next(a), _g);
        try {
            f.observe(_e);
        } catch (a) {
            d.error(a);
        }
        return () => f.disconnect();
    });
}), b.register('Rnk7J', function(c, d) {
    a(c.exports, 'createMapSubscribableThing', function() {
        return _e;
    });
    const _e = a => (c, d) => a(a => c({
        ...a,
        next: c => a.next(d(c))
    }));
}), b.register('WKDqX', function(c, d) {
    a(c.exports, 'createMediaDevices', function() {
        return _e;
    });
    const _e = (a, c, d) => () => d(d => {
        if (null === c || void 0 === c.navigator || void 0 === c.navigator.mediaDevices || void 0 === c.navigator.mediaDevices.enumerateDevices)
            return a(d);
        let f = !0;
        const _g = () => {
                c.navigator.mediaDevices.enumerateDevices().then(a => {
                    f && d.next(a);
                }, a => {
                    f && (_h(), d.error(a));
                });
            },
            _h = () => {
                f = !1, c.navigator.mediaDevices.removeEventListener('devicechange', _g);
            };
        return _g(), c.navigator.mediaDevices.addEventListener('devicechange', _g), _h;
    });
}), b.register('WJ0UL', function(c, d) {
    a(c.exports, 'createMediaQueryMatch', function() {
        return _e;
    });
    const _e = (a, c, d) => _e => d(d => {
        if (null === c || void 0 === c.matchMedia)
            return a(d);
        const f = c.matchMedia(_e);
        return d.next(f.matches), f.onchange = () => d.next(f.matches), () => {
            f.onchange = null;
        };
    });
}), b.register('Dfnky', function(c, d) {
    a(c.exports, 'createMetrics', function() {
        return _e;
    });
    const _e = (a, c, d) => _e => d(d => {
        if (null === c || void 0 === c.PerformanceObserver)
            return a(d);
        const f = new c.PerformanceObserver(a => d.next(a.getEntries()));
        try {
            f.observe(_e);
        } catch (a) {
            d.error(a);
        }
        return () => f.disconnect();
    });
}), b.register('DjOfm', function(c, d) {
    a(c.exports, 'createMidiInputs', function() {
        return _e;
    });
    const _e = a => c => a(a => {
        let f = Array.from(c.inputs.values());
        const g = () => {
            const h = c.inputs;
            (f.length !== h.size || f.some(({
                id: i
            }) => !h.has(i))) && (f = Array.from(h.values()), i.next(f));
        };
        return a.next(f), c.addEventListener('statechange', g), () => c.removeEventListener('statechange', g);
    });
}), b.register('5vwrm', function(c, d) {
    a(c.exports, 'createMidiOutputs', function() {
        return _e;
    });
    const _e = a => c => a(a => {
        let f = Array.from(c.outputs.values());
        const g = () => {
            const h = c.outputs;
            (f.length !== h.size || f.some(({
                id: i
            }) => !h.has(i))) && (f = Array.from(h.values()), i.next(f));
        };
        return a.next(f), c.addEventListener('statechange', g), () => c.removeEventListener('statechange', g);
    });
}), b.register('LHtGy', function(c, d) {
    a(c.exports, 'createMutations', function() {
        return _e;
    });
    const _e = (a, c, d) => (_e, _f) => d(d => {
        if (null === c || void 0 === c.MutationObserver)
            return a(d);
        const f = new c.MutationObserver(a => d.next(a));
        try {
            f.observe(_e, _f);
        } catch (a) {
            d.error(a);
        }
        return () => f.disconnect();
    });
}), b.register('lyn5J', function(c, d) {
    a(c.exports, 'createOn', function() {
        return _e;
    });
    const _e = a => (c, d, _e) => a(a => {
        const _f = c => a.next(c);
        return c.addEventListener(d, _f, _e), () => c.removeEventListener(d, _f, _e);
    });
}), b.register('Hxdzh', function(c, d) {
    a(c.exports, 'createOnline', function() {
        return _e;
    });
    const _e = (a, c, d) => () => d(d => {
        if (null === c || void 0 === c.navigator || void 0 === c.navigator.onLine)
            return a(d);
        const f = () => d.next(!1),
            g = () => d.next(!0);
        return c.addEventListener('offline', f), c.addEventListener('online', g), d.next(c.navigator.onLine), () => {
            c.removeEventListener('offline', f), c.removeEventListener('online', g);
        };
    });
}), b.register('rOp5s', function(c, d) {
    a(c.exports, 'createPermissionState', function() {
        return _e;
    });
    const _e = (a, c, d) => _e => d(d => {
        if (null === c || void 0 === c.navigator || void 0 === c.navigator.permissions || void 0 === c.navigator.permissions.query)
            return a(d);
        let f = !0,
            g = () => {
                f = !1;
            };
        return c.navigator.permissions.query(_e).then(a => {
            f && d.next(a.state), f && (a.onchange = () => d.next(a.state), g = () => {
                a.onchange = null;
            });
        }, a => {
            f && d.error(a);
        }), () => g();
    });
}), b.register('bRVkh', function(c, d) {
    a(c.exports, 'createPrependSubscribableThing', function() {
        return _e;
    });
    const _e = a => (c, d) => a(a => (a.next(d), c(a)));
}), b.register('F5Km8', function(c, d) {
    a(c.exports, 'createReports', function() {
        return _e;
    });
    const _e = (a, c, d) => _e => d(d => {
        if (null === c || void 0 === c.ReportingObserver)
            return a(d);
        const f = new c.ReportingObserver(a => d.next(a), _e);
        return f.observe(), () => f.disconnect();
    });
}), b.register('M/f9A', function(c, d) {
    a(c.exports, 'createResizes', function() {
        return _e;
    });
    const _e = (a, c, d) => (_e, _f) => d(d => {
        if (null === c || void 0 === c.ResizeObserver)
            return a(d);
        const f = new c.ResizeObserver(a => d.next(a));
        try {
            f.observe(_e, _f);
        } catch (a) {
            d.error(a);
        }
        return () => f.disconnect();
    });
}), b.register('yNaPY', function(c, d) {
    a(c.exports, 'createUnhandledRejection', function() {
        return _e;
    });
    const _e = (a, c, d) => _e => d(d => {
        if (null === c || void 0 === c.clearInterval || void 0 === c.setInterval)
            return a(d);
        const _f = new Map();
        let g = null;
        const h = ({
                promise: i
            }) => _f.delete(i),
            j = () => {
                const k = Date.now() - _e;
                _f.forEach(({
                    reason: l,
                    timestamp: m
                }, g) => {
                    m > k || (_f.delete(g), d.next(l));
                }), null !== g && 0 === _f.size && (l.clearInterval(g), g = null);
            },
            k = i => {
                i.preventDefault(), _f.set(i.promise, {
                    reason: i.reason,
                    timestamp: Date.now()
                }), null === g && (g = c.setInterval(j, _e / 2));
            };
        return c.addEventListener('rejectionhandled', h), c.addEventListener('unhandledrejection', k), () => {
            null !== g && c.clearInterval(g), c.removeEventListener('rejectionhandled', h), c.removeEventListener('unhandledrejection', k);
        };
    });
}), b.register('jBIY0', function(c, d) {
    a(c.exports, 'createVideoFrame', function() {
        return _e;
    });
    const _e = (a, c) => d => c(c => {
        if (void 0 === d.cancelVideoFrameCallback || void 0 === d.requestVideoFrameCallback)
            return a(c);
        let f = d.requestVideoFrameCallback(function a(g, h) {
            f = d.requestVideoFrameCallback(a), c.next({
                ...h,
                now: g
            });
        });
        return () => d.cancelVideoFrameCallback(f);
    });
}), b.register('Ygd8x', function(c, d) {
    a(c.exports, 'createWakeLock', function() {
        return _e;
    });
    const _e = (a, c, d) => _e => d(d => {
        if (null === c || void 0 === c.navigator || void 0 === c.navigator.wakeLock)
            return a(d);
        const f = a => a.release().catch(() => {}),
            g = a => {
                a.onrelease = null;
            };
        let h = !0;
        const i = () => {
            h = !1;
        };
        let j = i;
        const k = () => c.navigator.wakeLock.request(_e).then(a => {
            h && d.next(!0), h ? (a.onrelease = () => {
                d.next(!1), j = i, g(a), k();
            }, j = () => {
                g(a), f(a);
            }) : f(a);
        }, a => {
            h && d.error(a);
        });
        return k(), () => j();
    });
}), b.register('jBm/j1', function(c, d) {
    a(c.exports, 'createWindow', function() {
        return _e;
    });
    const _e = () => 'undefined' == typeof window ? null : window;
}), b.register('UNFft', function(c, d) {
    a(c.exports, 'createWrapSubscribeFunction', function() {
        return _e;
    });
    const _e = (a, c) => {
        const f = () => {};
        return _e => {
            const g = (...a) => {
                const h = _e((a => 'function' == typeof a[0])(a) ? c({
                    next: a[0]
                }) : c(...a));
                return void 0 !== h ? h : f;
            };
            return g[Symbol.observable] = () => ({
                subscribe: (...a) => ({
                    unsubscribe: g(...a)
                })
            }), a(g);
        };
    };
}), b.register('8+k/1', function(c, d) {
    a(c.exports, 'emitNotSupportedError', function() {
        return _e;
    });
    const _e = a => (a.error(new Error('The required browser API seems to be not supported.')), () => {});
}), b.register('8fhLD', function(c, d) {
    b('CJP4m634'), b('CJP4m633'), b('CJP4m632'), b('CJP4m631'), b('CJP4m630'), b('CJP4m629'), b('CJP4m628'), b('CJP4m627'), b('CJP4m626'), b('CJP4m625'), b('CJP4m624'), b('CJP4m623'), b('CJP4m622'), b('CJP4m621'), b('CJP4m620'), b('CJP4m619'), b('CJP4m618'), b('CJP4m617'), b('CJP4m616'), b('CJP4m615'), b('CJP4m614');
}), b.register('CJP4m634', function(c, d) {}), b.register('CJP4m633', function(c, d) {}), b.register('CJP4m632', function(c, d) {}), b.register('CJP4m631', function(c, d) {}), b.register('CJP4m630', function(c, d) {}), b.register('CJP4m629', function(c, d) {}), b.register('CJP4m628', function(c, d) {}), b.register('CJP4m627', function(c, d) {}), b.register('CJP4m626', function(c, d) {}), b.register('CJP4m625', function(c, d) {}), b.register('CJP4m624', function(c, d) {}), b.register('CJP4m623', function(c, d) {}), b.register('CJP4m622', function(c, d) {}), b.register('CJP4m621', function(c, d) {}), b.register('CJP4m620', function(c, d) {}), b.register('CJP4m619', function(c, d) {}), b.register('CJP4m618', function(c, d) {}), b.register('CJP4m617', function(c, d) {}), b.register('CJP4m616', function(c, d) {}), b.register('CJP4m615', function(c, d) {}), b.register('CJP4m614', function(c, d) {}), b.register('NWIg1', function(c, d) {
    b('CJP4m613'), b('CJP4m612'), b('CJP4m611'), b('CJP4m610'), b('CJP4m609'), b('CJP4m608'), b('CJP4m607'), b('CJP4m606'), b('CJP4m605'), b('CJP4m604'), b('CJP4m603'), b('CJP4m602'), b('CJP4m601'), b('CJP4m600'), b('CJP4m599'), b('CJP4m598'), b('CJP4m597'), b('CJP4m596'), b('CJP4m595'), b('CJP4m594'), b('CJP4m593'), b('CJP4m592'), b('CJP4m591'), b('CJP4m590'), b('CJP4m589'), b('CJP4m588'), b('CJP4m587'), b('CJP4m586'), b('CJP4m585'), b('CJP4m584'), b('CJP4m583'), b('CJP4m582'), b('CJP4m581'), b('CJP4m580'), b('CJP4m579'), b('CJP4m578'), b('CJP4m577'), b('CJP4m576'), b('CJP4m575'), b('CJP4m574'), b('CJP4m573'), b('CJP4m572'), b('CJP4m571'), b('CJP4m570'), b('CJP4m569'), b('CJP4m568'), b('CJP4m567'), b('CJP4m566'), b('CJP4m565'), b('CJP4m564'), b('CJP4m563'), b('CJP4m562'), b('CJP4m561'), b('CJP4m560'), b('CJP4m559');
}), b.register('CJP4m613', function(c, d) {}), b.register('CJP4m612', function(c, d) {}), b.register('CJP4m611', function(c, d) {}), b.register('CJP4m610', function(c, d) {}), b.register('CJP4m609', function(c, d) {}), b.register('CJP4m608', function(c, d) {}), b.register('CJP4m607', function(c, d) {}), b.register('CJP4m606', function(c, d) {}), b.register('CJP4m605', function(c, d) {}), b.register('CJP4m604', function(c, d) {}), b.register('CJP4m603', function(c, d) {}), b.register('CJP4m602', function(c, d) {}), b.register('CJP4m601', function(c, d) {}), b.register('CJP4m600', function(c, d) {}), b.register('CJP4m599', function(c, d) {}), b.register('CJP4m598', function(c, d) {}), b.register('CJP4m597', function(c, d) {}), b.register('CJP4m596', function(c, d) {}), b.register('CJP4m595', function(c, d) {}), b.register('CJP4m594', function(c, d) {}), b.register('CJP4m593', function(c, d) {}), b.register('CJP4m592', function(c, d) {}), b.register('CJP4m591', function(c, d) {}), b.register('CJP4m590', function(c, d) {}), b.register('CJP4m589', function(c, d) {}), b.register('CJP4m588', function(c, d) {}), b.register('CJP4m587', function(c, d) {}), b.register('CJP4m586', function(c, d) {}), b.register('CJP4m585', function(c, d) {}), b.register('CJP4m584', function(c, d) {}), b.register('CJP4m583', function(c, d) {}), b.register('CJP4m582', function(c, d) {}), b.register('CJP4m581', function(c, d) {}), b.register('CJP4m580', function(c, d) {}), b.register('CJP4m579', function(c, d) {}), b.register('CJP4m578', function(c, d) {}), b.register('CJP4m577', function(c, d) {}), b.register('CJP4m576', function(c, d) {}), b.register('CJP4m575', function(c, d) {}), b.register('CJP4m574', function(c, d) {}), b.register('CJP4m573', function(c, d) {}), b.register('CJP4m572', function(c, d) {}), b.register('CJP4m571', function(c, d) {}), b.register('CJP4m570', function(c, d) {}), b.register('CJP4m569', function(c, d) {}), b.register('CJP4m568', function(c, d) {}), b.register('CJP4m567', function(c, d) {}), b.register('CJP4m566', function(c, d) {}), b.register('CJP4m565', function(c, d) {}), b.register('CJP4m564', function(c, d) {}), b.register('CJP4m563', function(c, d) {}), b.register('CJP4m562', function(c, d) {}), b.register('CJP4m561', function(c, d) {}), b.register('CJP4m560', function(c, d) {}), b.register('CJP4m559', function(c, d) {}), b.register('s1H8z', function(c, d) {
    b('ZyX4x'), b('8781x'), b('LlJWl');
    b('odlrz'), b('6o6oo');
}), b.register('ZyX4x', function(c, d) {
    a(c.exports, 'createMessageHandler', function() {
        return _f;
    });
    var e = b('uyVLS');
    const _f = (a, b) => async ({
        data: {
            id: g,
            method: h,
            params: i
        }
    }) => {
        const j = b[h];
        try {
            if (void 0 === j)
                throw (0, e.renderMethodNotFoundError)({
                    method: h
                });
            const k = void 0 === i ? j() : j(i);
            if (void 0 === k)
                throw (0, e.renderMissingResponseError)({
                    method: h
                });
            const l = k instanceof Promise ? await k : k;
            if (null === g) {
                if (void 0 !== l.result)
                    throw (0, e.renderUnexpectedResultError)({
                        method: h
                    });
            } else {
                if (void 0 === l.result)
                    throw (0, e.renderUnexpectedResultError)({
                        method: h
                    });
                const {
                    result: m,
                    transferables: n = []
                } = l;
                a.postMessage({
                    id: g,
                    result: m
                }, n);
            }
        } catch (b) {
            const {
                message: k,
                status: l = -32603
            } = b;
            a.postMessage({
                error: {
                    code: l,
                    message: k
                },
                id: g
            });
        }
    };
}), b.register('uyVLS', function(c, d) {
    a(c.exports, 'renderMethodNotFoundError', function() {
        return _i;
    }), a(c.exports, 'renderMissingResponseError', function() {
        return _j;
    }), a(c.exports, 'renderUnexpectedResultError', function() {
        return _k;
    }), a(c.exports, 'renderUnknownPortIdError', function() {
        return _l;
    });
    var e = b('w0A4J');
    const f = -32603,
        g = -32602,
        h = -32601,
        _i = (0, e.compile)({
            message: 'The requested method called "${method}" is not supported.',
            status: h
        }),
        _j = (0, e.compile)({
            message: 'The handler of the method called "${method}" returned no required result.',
            status: f
        }),
        _k = (0, e.compile)({
            message: 'The handler of the method called "${method}" returned an unexpected result.',
            status: f
        }),
        _l = (0, e.compile)({
            message: 'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
            status: g
        });
}), b.register('w0A4J', function(c, d) {
    c.exports,
        function(e, f, g, h) {
            function i(j) {
                return j && 'object' == typeof j && 'default' in j ? j : {
                    default: j
                };
            }
            var j = i(f),
                k = i(g),
                l = i(h),
                m = function(n, o) {
                    return void 0 === o ? n : o.reduce(function(p, q) {
                        if ('capitalize' === q) {
                            var r = p.charAt(0).toUpperCase(),
                                s = p.slice(1);
                            return ''.concat(r).concat(s);
                        }
                        return 'dashify' === q ? k.default(p) : 'prependIndefiniteArticle' === q ? ''.concat(l.default(p), ' ').concat(p) : p;
                    }, n);
                },
                n = function(o) {
                    var p = o.name + o.modifiers.map(function(q) {
                        return '\\.'.concat(q, '\\(\\)');
                    }).join('');
                    return new RegExp('\\$\\{'.concat(p, '}'), 'g');
                },
                o = function(p, q) {
                    for (var r = /\${([^.}]+)((\.[^(]+\(\))*)}/g, s = [], t = r.exec(p); null !== t;) {
                        var u = {
                            modifiers: [],
                            name: t[1]
                        };
                        if (void 0 !== t[3])
                            for (var v = /\.[^(]+\(\)/g, w = v.exec(t[2]); null !== w;)
                                u.modifiers.push(w[0].slice(1, -2)), w = v.exec(t[2]);
                        s.push(u), t = r.exec(p);
                    }
                    var u = s.reduce(function(v, w) {
                        return v.map(function(x) {
                            return 'string' == typeof x ? x.split(n(w)).reduce(function(y, z, A) {
                                return 0 === A ? [z] : w.name in q ? [].concat(j.default(y), [
                                    m(q[w.name], w.modifiers),
                                    z
                                ]) : [].concat(j.default(y), [
                                    function(B) {
                                        return m(B[w.name], w.modifiers);
                                    },
                                    z
                                ]);
                            }, []) : [x];
                        }).reduce(function(x, y) {
                            return [].concat(j.default(x), j.default(y));
                        }, []);
                    }, [p]);
                    return function(v) {
                        return u.reduce(function(w, x) {
                            return [].concat(j.default(w), 'string' == typeof x ? [x] : [x(v)]);
                        }, []).join('');
                    };
                },
                p = function(q) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = void 0 === q.code ? void 0 : o(q.code, r),
                        t = void 0 === q.message ? void 0 : o(q.message, r);

                    function u() {
                        var v = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            w = arguments.length > 1 ? arguments[1] : void 0,
                            x = void 0 === w && (v instanceof Error || void 0 !== v.code && 'Exception' === v.code.slice(-9)) ? {
                                cause: v,
                                missingParameters: {}
                            } : {
                                cause: w,
                                missingParameters: v
                            },
                            y = x.cause,
                            z = x.missingParameters,
                            A = void 0 === t ? new Error() : new Error(t(z));
                        return null !== y && (A.cause = y), void 0 !== s && (A.code = s(z)), void 0 !== q.status && (A.status = q.status), A;
                    }
                    return u;
                };
            e.compile = p, Object.defineProperty(e, '__esModule', {
                value: !0
            });
        }(c.exports, b('nWAPq'), b('QUDoE'), b('z0kpi'));
}), b.register('nWAPq', function(c, d) {
    var e = b('XLktP'),
        f = b('CbEM0'),
        g = b('VsB5z'),
        h = b('jakCr');
    c.exports = function(i) {
        return e(i) || f(i) || g(i) || h();
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('XLktP', function(c, d) {
    var e = b('lpsIZ1');
    c.exports = function(f) {
        if (Array.isArray(f))
            return e(f);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('lpsIZ1', function(c, d) {
    c.exports = function(e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('CbEM0', function(c, d) {
    c.exports = function(e) {
        if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator'])
            return Array.from(e);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('VsB5z', function(c, d) {
    var e = b('lpsIZ1');
    c.exports = function(f, g) {
        if (f) {
            if ('string' == typeof f)
                return e(f, g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? e(f, g) : void 0;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('jakCr', function(c, d) {
    c.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('QUDoE', function(c, d) {
    c.exports = (c, d) => {
        if ('string' != typeof c)
            throw new TypeError('expected a string');
        return c.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, c => /[À-ž]/.test(c) ? c : '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, c => d && d.condense ? '-' : c).toLowerCase();
    };
}), b.register('z0kpi', function(c, d) {
    var e = function(f) {
        var g, h, i = /\w+/.exec(f);
        if (!i)
            return 'an';
        var j = (h = i[0]).toLowerCase(),
            k = [
                'honest',
                'hour',
                'hono'
            ];
        for (g in k)
            if (0 == j.indexOf(k[g]))
                return 'an';
        if (1 == j.length)
            return 'aedhilmnorsx'.indexOf(j) >= 0 ? 'an' : 'a';
        if (h.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))
            return 'an';
        var l = [
            /^e[uw]/,
            /^onc?e\b/,
            /^uni([^nmd]|mo)/,
            /^u[bcfhjkqrst][aeiou]/
        ];
        for (g = 0; g < l.length; g++)
            if (j.match(l[g]))
                return 'a';
        return h.match(/^U[NK][AIEO]/) ? 'a' : h == h.toUpperCase() ? 'aedhilmnorsx'.indexOf(j[0]) >= 0 ? 'an' : 'a' : 'aeiou'.indexOf(j[0]) >= 0 || j.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/) ? 'an' : 'a';
    };
    void 0 !== c.exports ? c.exports = e : window.indefiniteArticle = e;
}), b.register('8781x', function(c, d) {
    a(c.exports, 'extendWorkerImplementation', function() {
        return _i;
    });
    var e = b('5KWr9'),
        f = b('uyVLS'),
        g = b('LlJWl');
    const h = new Map(),
        _i = (a, b, c) => ({
            ...b,
            connect: ({
                port: j
            }) => {
                j.start();
                const k = a(j, b),
                    l = (0, e.generateUniqueNumber)(h);
                return h.set(l, () => {
                    k(), j.close(), h.delete(l);
                }), {
                    result: l
                };
            },
            disconnect: ({
                portId: k
            }) => {
                const l = h.get(k);
                if (void 0 === l)
                    throw (0, f.renderUnknownPortIdError)({
                        portId: k.toString()
                    });
                return l(), {
                    result: null
                };
            },
            isSupported: async () => {
                if (await (0, g.isSupportingTransferables)()) {
                    const l = j();
                    return {
                        result: l instanceof Promise ? await l : l
                    };
                }
                return {
                    result: !1
                };
            }
        });
}), b.register('LlJWl', function(c, d) {
    a(c.exports, 'isSupportingTransferables', function() {
        return _e;
    });
    const _e = () => new Promise(a => {
        const f = new ArrayBuffer(0),
            {
                port1: g,
                port2: h
            } = new MessageChannel();
        g.onmessage = ({
            data: i
        }) => a(null !== i), h.postMessage(i, [i]);
    });
}), b.register('odlrz', function(c, d) {
    b('CJP4m558'), b('CJP4m557'), b('CJP4m556'), b('CJP4m555'), b('CJP4m554'), b('CJP4m553'), b('CJP4m552'), b('CJP4m551'), b('CJP4m550'), b('CJP4m549'), b('CJP4m548'), b('CJP4m547'), b('CJP4m546'), b('CJP4m545');
}), b.register('CJP4m558', function(c, d) {}), b.register('CJP4m557', function(c, d) {}), b.register('CJP4m556', function(c, d) {}), b.register('CJP4m555', function(c, d) {}), b.register('CJP4m554', function(c, d) {}), b.register('CJP4m553', function(c, d) {}), b.register('CJP4m552', function(c, d) {}), b.register('CJP4m551', function(c, d) {}), b.register('CJP4m550', function(c, d) {}), b.register('CJP4m549', function(c, d) {}), b.register('CJP4m548', function(c, d) {}), b.register('CJP4m547', function(c, d) {}), b.register('CJP4m546', function(c, d) {}), b.register('CJP4m545', function(c, d) {}), b.register('6o6oo', function(c, d) {
    b('CJP4m544'), b('CJP4m543'), b('CJP4m542'), b('CJP4m541'), b('CJP4m540'), b('CJP4m539'), b('CJP4m538'), b('CJP4m537'), b('CJP4m536'), b('CJP4m535'), b('CJP4m534');
}), b.register('CJP4m544', function(c, d) {}), b.register('CJP4m543', function(c, d) {}), b.register('CJP4m542', function(c, d) {}), b.register('CJP4m541', function(c, d) {}), b.register('CJP4m540', function(c, d) {}), b.register('CJP4m539', function(c, d) {}), b.register('CJP4m538', function(c, d) {}), b.register('CJP4m537', function(c, d) {}), b.register('CJP4m536', function(c, d) {}), b.register('CJP4m535', function(c, d) {}), b.register('CJP4m534', function(c, d) {}), b.register('BIvI+', function(c, d) {
    a(c.exports, 'createAddRecorderAudioWorkletModule', function() {
        return _e;
    });
    const _e = (a, c, d) => async _e => {
        const f = new a([d], {
                type: 'application/javascript; charset=utf-8'
            }),
            g = c.createObjectURL(f);
        try {
            await _e(g);
        } finally {
            c.revokeObjectURL(g);
        }
    };
}), b.register('r+F5r', function(c, d) {
    a(c.exports, 'createListener', function() {
        return _e;
    });
    const _e = a => ({
        data: f
    }) => {
        const {
            id: g
        } = f;
        if (null !== g) {
            const h = a.get(g);
            if (void 0 !== h) {
                const {
                    reject: i,
                    resolve: j
                } = h;
                a.delete(g), void 0 === f.error ? j(f.result) : i(new Error(f.error.message));
            }
        }
    };
}), b.register('jDHqT', function(c, d) {
    a(c.exports, 'createPostMessageFactory', function() {
        return _e;
    });
    const _e = a => (c, d) => (_e, f = []) => new Promise((_f, _f) => {
        const g = a(c);
        c.set(g, {
            reject: _f,
            resolve: _f
        }), d.postMessage({
            id: g,
            ..._e
        }, f);
    });
}), b.register('Dtg9J', function(c, d) {
    a(c.exports, 'createRecorderAudioWorkletNodeFactory', function() {
        return _e;
    });
    const _e = (a, c, d, _e) => (_e, _f, _f = {}) => {
        const g = new _e(_f, 'recorder-audio-worklet-processor', {
                ..._f,
                channelCountMode: 'explicit',
                numberOfInputs: 1,
                numberOfOutputs: 0
            }),
            h = new Map(),
            i = c(h, g.port),
            j = d(g.port, 'message')(a(h));
        g.port.start();
        let k = 'inactive';
        return Object.defineProperties(g, {
            pause: {
                get: () => async () => (_e(['recording'], k), k = 'paused', i({
                    method: 'pause'
                }))
            },
            port: {
                get() {
                    throw new Error('The port of a RecorderAudioWorkletNode can\'t be accessed.');
                }
            },
            record: {
                get: () => async a => (_e(['inactive'], k), k = 'recording', i({
                    method: 'record',
                    params: {
                        encoderPort: a
                    }
                }, [a]))
            },
            resume: {
                get: () => async () => (_e(['paused'], k), k = 'recording', i({
                    method: 'resume'
                }))
            },
            stop: {
                get: () => async () => {
                    _e([
                        'paused',
                        'recording'
                    ], k), k = 'stopped';
                    try {
                        await i({
                            method: 'stop'
                        });
                    } finally {
                        j();
                    }
                }
            }
        }), g;
    };
}), b.register('fm2rV', function(c, d) {
    a(c.exports, 'validateState', function() {
        return _e;
    });
    const _e = (a, c) => {
        if (!a.includes(c))
            throw new Error(`Expected the state to be ${ a.map(a => `"${ a }"`).join(' or ') } but it was "${ c }".`);
    };
}), b.register('LMpWr', function(c, d) {
    a(c.exports, 'worklet', function() {
        return _e;
    });
    const _e = '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();';
}), b.register('J6Rif', function(c, d) {
    b('CJP4m533'), b('CJP4m532');
}), b.register('CJP4m533', function(c, d) {}), b.register('CJP4m532', function(c, d) {}), b.register('3SjsH', function(c, d) {
    b('CJP4m531'), b('CJP4m530'), b('CJP4m529'), b('CJP4m528');
}), b.register('CJP4m531', function(c, d) {}), b.register('CJP4m530', function(c, d) {}), b.register('CJP4m529', function(c, d) {}), b.register('CJP4m528', function(c, d) {}), b.register('m7t6S', function(c, d) {
    a(c.exports, 'AudioBuffer', function() {
        return _ee;
    }), a(c.exports, 'AudioBufferSourceNode', function() {
        return _me;
    }), a(c.exports, 'ConstantSourceNode', function() {
        return _Be;
    }), a(c.exports, 'addAudioWorkletModule', function() {
        return _rf;
    }), a(c.exports, 'MediaStreamAudioSourceNode', function() {
        return _xf;
    }), a(c.exports, 'AudioWorkletNode', function() {
        return _Mf;
    }), a(c.exports, 'MinimalAudioContext', function() {
        return _Nf;
    });
    var _e = b('jjKMm'),
        _f = b('NOYdX'),
        g = b('nAEgw'),
        h = b('LgILd'),
        i = b('IwEd6'),
        j = b('UsNLv'),
        k = b('pO5a8'),
        l = b('SVxuC'),
        m = b('3OnKl'),
        n = b('ryN04'),
        o = b('ULU1q'),
        p = b('xzCGn'),
        q = b('6RcW3'),
        r = b('Firc/'),
        s = b('BDGsM'),
        t = b('XstMS'),
        u = b('Hut34'),
        v = b('etj3s'),
        w = b('W6uKv'),
        x = b('Jcy3j'),
        y = b('JoB7x'),
        z = b('MbEPo'),
        A = b('wGOzT'),
        B = b('xe0Z9'),
        C = b('FfnBa'),
        D = b('5uKT/'),
        E = b('A0FnK'),
        F = b('+Mcfq'),
        G = b('JXWfD'),
        H = b('YtOtf'),
        I = b('atgpf'),
        J = b('oRfdP'),
        K = b('+UHex'),
        L = b('bIVcd'),
        M = b('22eDl'),
        N = b('XK2if'),
        O = b('u3FUD'),
        P = b('HavP+'),
        Q = b('CHLaj'),
        R = b('yf2tu'),
        S = b('SJGVa'),
        T = b('aRxq5'),
        U = b('uGrX9'),
        V = b('06CWL'),
        W = b('ISjrK'),
        X = b('QK3kB'),
        Y = b('m1F0R'),
        Z = b('y40Yo'),
        $ = b('fCp/b'),
        ab = b('0X3VT'),
        bb = b('TpWra'),
        cb = b('PR62L'),
        db = b('caL7K'),
        eb = b('fOOOx'),
        fb = b('PqVHf'),
        gb = b('cL63r'),
        hb = b('PUeZb'),
        ib = b('DSKiM'),
        jb = b('VQOQz'),
        kb = b('CYBrZ'),
        lb = b('NbGEC'),
        mb = b('hT+6d'),
        nb = b('JvicU'),
        ob = b('z6kgi'),
        pb = b('r03vy'),
        qb = b('jShmk'),
        rb = b('e77tk'),
        sb = b('zKiU8'),
        tb = b('kJgDI'),
        ub = b('X6OVf'),
        vb = b('l2iy4'),
        wb = b('YQMJR'),
        xb = b('Ep+/d'),
        yb = b('ZeXBu'),
        zb = b('2ZRD2'),
        Ab = b('RIWKV'),
        Bb = b('w1Ob1'),
        Cb = b('mbHoF'),
        Db = b('uDcNO'),
        Eb = b('J2PBS'),
        Fb = b('k2gVx'),
        Gb = b('Qsrta'),
        Hb = b('zjpeB'),
        Ib = (b('htmdI'), b('3hpvk')),
        Jb = b('FWkLY'),
        Kb = b('cutsw'),
        Lb = b('D9E10'),
        Mb = b('Yipaq'),
        Nb = b('XPd+g'),
        Ob = b('tOuwz'),
        Pb = b('SZXvy'),
        Qb = b('cdK1S'),
        Rb = b('wUrlN'),
        Sb = b('jjB5R'),
        Tb = b('TLSwU'),
        Ub = b('kl21Y'),
        Vb = b('4ZiTz'),
        Wb = b('patq4'),
        Xb = b('cW/jZ'),
        Yb = b('jeD3g'),
        Zb = b('5OSft'),
        $b = b('Mx0JO'),
        ac = b('Qx9mr'),
        bc = b('7FMa3'),
        cc = b('4UFaA'),
        dc = b('DF8kS'),
        ec = b('AX8Lk'),
        fc = b('f68MK'),
        gc = b('OAlmo'),
        hc = b('XdT3V'),
        ic = b('yHRvH'),
        jc = b('DXfSw'),
        kc = b('D71Bp'),
        lc = b('ugafs'),
        mc = b('yifgi'),
        nc = b('ipWQI'),
        oc = b('t3XBu'),
        pc = b('9jIu8'),
        qc = b('EoeAh'),
        rc = b('YDSeH'),
        sc = b('c6+mD'),
        tc = b('HD1w7'),
        uc = b('a7yIS'),
        vc = b('wjJSK'),
        wc = b('09F8G'),
        xc = b('tSDQD'),
        yc = b('DiiGd'),
        zc = b('OXdSH'),
        Ac = b('K8I5n'),
        Bc = b('zd4dD'),
        Cc = b('+sxCa'),
        Dc = b('g6eoK'),
        Ec = b('fBEVx'),
        Fc = b('jgU1j'),
        Gc = b('qiAnP'),
        Hc = b('RcMtl'),
        Ic = b('jn5v/'),
        Jc = b('ZaHsb'),
        Kc = b('nDGJu'),
        Lc = b('Z2YNM'),
        Mc = b('rO/oR'),
        Nc = (b('DtaKO'), b('VXOAb'), b('iQv1U'), b('fj8D/'), b('bGl4+'), b('hgjqh'), b('ipMuz')),
        Oc = (b('AE5g7'), b('tQv7o'), b('GmvK9'), b('ukzqi'), b('5vOJY'), b('uO85m'), b('wIH/7')),
        Pc = (b('Lg0xp'), b('uiLcs')),
        Qc = b('iNVny'),
        Rc = b('zpwcF'),
        Sc = b('jBm/j0'),
        Tc = b('BrNBU'),
        Uc = b('uPjLw'),
        Vc = b('9QabD'),
        Wc = b('ZSVGP'),
        Xc = b('H8j0Q'),
        Yc = b('MjxEc'),
        Zc = b('CZySC'),
        $c = b('FwDzM'),
        ad = b('O4C4I'),
        bd = b('JrumW'),
        cd = b('dy3EA'),
        dd = b('fkCg6'),
        ed = b('9fyAW'),
        fd = b('6VM4W'),
        gd = b('NEU1a'),
        hd = b('6wEyH'),
        id = b('zgITH'),
        jd = b('L8EAk'),
        kd = b('bJ7H1'),
        ld = b('ScS5M'),
        md = b('IFD+w'),
        nd = b('TIa7A'),
        od = b('7+Ki0'),
        pd = b('ZTvu2'),
        qd = b('61TVm'),
        rd = b('eXgTp'),
        sd = b('CN8ed'),
        td = b('jaEae'),
        ud = b('1DKZM'),
        vd = b('FTg3C'),
        wd = b('jUaVf'),
        xd = b('V7E5r'),
        yd = b('zznei'),
        zd = (b('DRdRU'), b('68Sdk')),
        Ad = (b('zkMgM'), b('d2Q5p')),
        Bd = b('kjhU9'),
        Cd = b('FPX+q0');
    b('NRsVY'), b('xQamc');
    const Dd = (0, g.createAddActiveInputConnectionToAudioNode)(gd.insertElementInSet),
        Ed = (0, l.createAddPassiveInputConnectionToAudioNode)(gd.insertElementInSet),
        Fd = (0, Y.createDeleteActiveInputConnectionToAudioNode)(md.pickElementFromSet),
        Gd = new WeakMap(),
        Hd = (0, mb.createGetAudioNodeTailTime)(Gd),
        Id = (0, F.createCacheTestResult)(new Map(), new WeakMap()),
        Jd = (0, Sc.createWindow)(),
        Kd = (0, Qb.createNativeAnalyserNodeFactory)(Id, vb.createIndexSizeError),
        Ld = (0, lb.createGetAudioNodeRenderer)($c.getAudioNodeConnections),
        Md = (0, Ec.createRenderInputsOfAudioNode)($c.getAudioNodeConnections, Ld, jd.isPartOfACycle),
        Nd = (0, p.createAnalyserNodeRendererFactory)(Kd, dd.getNativeAudioNode, Md),
        Od = (0, pb.createGetNativeContext)(Xc.CONTEXT_STORE),
        Pd = (0, mc.createNativeOfflineAudioContextConstructor)(Jd),
        Qd = (0, Gb.createIsNativeOfflineAudioContext)(Pd),
        Rd = new WeakMap(),
        Sd = (0, fb.createEventTargetConstructor)(Cd.wrapEventListener),
        Td = (0, Tb.createNativeAudioContextConstructor)(Jd),
        Ud = (0, Cb.createIsNativeAudioContext)(Td),
        Vd = (0, Db.createIsNativeAudioNode)(Jd),
        Wd = (0, Eb.createIsNativeAudioParam)(Jd),
        Xd = (0, Vb.createNativeAudioWorkletNodeConstructor)(Jd),
        Yd = (0, x.createAudioNodeConstructor)((0, h.createAddAudioNodeConnections)(Xc.AUDIO_NODE_CONNECTIONS_STORE), (0, k.createAddConnectionToAudioNode)(Dd, Ed, Yc.connectNativeAudioNodeToNativeAudioNode, Fd, Zc.disconnectNativeAudioNodeFromNativeAudioNode, $c.getAudioNodeConnections, Hd, bd.getEventListenersOfAudioNode, dd.getNativeAudioNode, gd.insertElementInSet, hd.isActiveAudioNode, jd.isPartOfACycle, kd.isPassiveAudioNode), Id, (0, ub.createIncrementCycleCounterFactory)(Xc.CYCLE_COUNTERS, Zc.disconnectNativeAudioNodeFromNativeAudioNode, $c.getAudioNodeConnections, dd.getNativeAudioNode, ed.getNativeAudioParam, hd.isActiveAudioNode), vb.createIndexSizeError, wb.createInvalidAccessError, wc.createNotSupportedError, (0, V.createDecrementCycleCounter)(Yc.connectNativeAudioNodeToNativeAudioNode, Xc.CYCLE_COUNTERS, $c.getAudioNodeConnections, dd.getNativeAudioNode, ed.getNativeAudioParam, Od, hd.isActiveAudioNode, Qd), (0, $.createDetectCycles)(Rd, $c.getAudioNodeConnections, fd.getValueForKey), Sd, Od, Ud, Vd, Wd, Qd, Xd),
        Zd = (0, o.createAnalyserNodeConstructor)(Yd, Nd, vb.createIndexSizeError, Kd, Od, Qd),
        $d = new WeakSet(),
        ae = (0, Rb.createNativeAudioBufferConstructor)(Jd),
        be = (0, P.createConvertNumberToUnsignedLong)(new Uint32Array(1)),
        ce = (0, Tc.createWrapAudioBufferCopyChannelMethods)(be, vb.createIndexSizeError),
        de = (0, Uc.createWrapAudioBufferCopyChannelMethodsOutOfBounds)(be),
        _ee = (0, q.createAudioBufferConstructor)($d, Id, wc.createNotSupportedError, ae, Pd, (0, Mc.createTestAudioBufferConstructorSupport)(ae), ce, de),
        fe = (0, m.createAddSilentConnection)(fc.createNativeGainNode),
        ge = (0, Fc.createRenderInputsOfAudioParam)(Ld, ad.getAudioParamConnections, jd.isPartOfACycle),
        he = (0, K.createConnectAudioParam)(ge),
        ie = (0, Sb.createNativeAudioBufferSourceNodeFactory)(fe, Id, sd.testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, td.testAudioBufferSourceNodeStartMethodOffsetClampingSupport, ud.testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, vd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, wd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, xd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, Ad.wrapAudioBufferSourceNodeStartMethodOffsetClamping, (0, Vc.createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer)(ld.overwriteAccessors), Bd.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        je = (0, Dc.createRenderAutomation)((0, nb.createGetAudioParamRenderer)(ad.getAudioParamConnections), ge),
        ke = (0, s.createAudioBufferSourceNodeRendererFactory)(he, ie, dd.getNativeAudioNode, je, Md),
        le = (0, y.createAudioParamFactory)((0, i.createAddAudioParamConnections)(Xc.AUDIO_PARAM_CONNECTIONS_STORE), Rd, Xc.AUDIO_PARAM_STORE, z.createAudioParamRenderer, _e.createCancelAndHoldAutomationEvent, _e.createCancelScheduledValuesAutomationEvent, _e.createExponentialRampToValueAutomationEvent, _e.createLinearRampToValueAutomationEvent, _e.createSetTargetAutomationEvent, _e.createSetValueAutomationEvent, _e.createSetValueCurveAutomationEvent, Td, qd.setValueAtTimeUntilPossible),
        _me = (0, r.createAudioBufferSourceNodeConstructor)(Yd, ke, le, xb.createInvalidStateError, ie, Od, Qd, Cd.wrapEventListener),
        ne = (0, u.createAudioDestinationNodeConstructor)(Yd, v.createAudioDestinationNodeRenderer, vb.createIndexSizeError, xb.createInvalidStateError, (0, Ub.createNativeAudioDestinationNodeFactory)(fc.createNativeGainNode, ld.overwriteAccessors), Od, Qd, Md),
        oe = (0, E.createBiquadFilterNodeRendererFactory)(he, Yb.createNativeBiquadFilterNode, dd.getNativeAudioNode, je, Md),
        pe = (0, Ic.createSetAudioNodeTailTime)(Gd),
        qe = (0, D.createBiquadFilterNodeConstructor)(Yd, le, oe, wb.createInvalidAccessError, Yb.createNativeBiquadFilterNode, Od, Qd, pe),
        re = (0, Pb.createMonitorConnections)(gd.insertElementInSet, Vd),
        se = (0, Wc.createWrapChannelMergerNode)(xb.createInvalidStateError, re),
        te = (0, Zb.createNativeChannelMergerNodeFactory)(Td, se),
        ue = (0, H.createChannelMergerNodeRendererFactory)(te, dd.getNativeAudioNode, Md),
        ve = (0, G.createChannelMergerNodeConstructor)(Yd, ue, te, Od, Qd),
        we = (0, J.createChannelSplitterNodeRendererFactory)($b.createNativeChannelSplitterNode, dd.getNativeAudioNode, Md),
        xe = (0, I.createChannelSplitterNodeConstructor)(Yd, we, $b.createNativeChannelSplitterNode, Od, Qd, od.sanitizeChannelSplitterOptions),
        ye = (0, bc.createNativeConstantSourceNodeFakerFactory)(fe, ie, fc.createNativeGainNode, re),
        ze = (0, ac.createNativeConstantSourceNodeFactory)(fe, Id, ye, vd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, xd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport),
        Ae = (0, O.createConstantSourceNodeRendererFactory)(he, ze, dd.getNativeAudioNode, je, Md),
        _Be = (0, N.createConstantSourceNodeConstructor)(Yd, le, Ae, ze, Od, Qd, Cd.wrapEventListener),
        Ce = (0, cc.createNativeConvolverNodeFactory)(wc.createNotSupportedError, ld.overwriteAccessors),
        De = (0, R.createConvolverNodeRendererFactory)(Ce, dd.getNativeAudioNode, Md),
        Ee = (0, Q.createConvolverNodeConstructor)(Yd, De, Ce, Od, Qd, pe),
        Fe = (0, X.createDelayNodeRendererFactory)(he, dc.createNativeDelayNode, dd.getNativeAudioNode, je, Md),
        Ge = (0, W.createDelayNodeConstructor)(Yd, le, Fe, dc.createNativeDelayNode, Od, Qd, pe),
        He = (0, ec.createNativeDynamicsCompressorNodeFactory)(wc.createNotSupportedError),
        Ie = (0, cb.createDynamicsCompressorNodeRendererFactory)(he, He, dd.getNativeAudioNode, je, Md),
        Je = (0, bb.createDynamicsCompressorNodeConstructor)(Yd, le, Ie, He, wc.createNotSupportedError, Od, Qd, pe),
        Ke = (0, jb.createGainNodeRendererFactory)(he, fc.createNativeGainNode, dd.getNativeAudioNode, je, Md),
        Le = (0, ib.createGainNodeConstructor)(Yd, le, Ke, fc.createNativeGainNode, Od, Qd),
        Me = (0, hc.createNativeIIRFilterNodeFakerFactory)(wb.createInvalidAccessError, xb.createInvalidStateError, rc.createNativeScriptProcessorNode, wc.createNotSupportedError),
        Ne = (0, Gc.createRenderNativeOfflineAudioContext)(Id, fc.createNativeGainNode, rc.createNativeScriptProcessorNode, (0, Oc.createTestOfflineAudioContextCurrentTimeSupport)(fc.createNativeGainNode, Pd)),
        Oe = (0, tb.createIIRFilterNodeRendererFactory)(ie, dd.getNativeAudioNode, Pd, Md, Ne),
        Pe = (0, gc.createNativeIIRFilterNodeFactory)(Me),
        Qe = (0, sb.createIIRFilterNodeConstructor)(Yd, Pe, Oe, Od, Qd, pe),
        Re = (0, w.createAudioListenerFactory)(le, te, ze, rc.createNativeScriptProcessorNode, wc.createNotSupportedError, cd.getFirstSample, Qd, ld.overwriteAccessors),
        Se = new WeakMap(),
        Te = (0, Nb.createMinimalBaseAudioContextConstructor)(ne, Re, Sd, Qd, Se, Cd.wrapEventListener),
        Ue = (0, nc.createNativeOscillatorNodeFactory)(fe, Id, vd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, wd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, xd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, Bd.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        Ve = (0, zc.createOscillatorNodeRendererFactory)(he, Ue, dd.getNativeAudioNode, je, Md),
        We = (0, yc.createOscillatorNodeConstructor)(Yd, le, Ue, Ve, Od, Qd, Cd.wrapEventListener),
        Xe = (0, M.createConnectedNativeAudioBufferSourceNodeFactory)(ie),
        Ye = (0, vc.createNativeWaveShaperNodeFakerFactory)(Xe, xb.createInvalidStateError, fc.createNativeGainNode, id.isDCCurve, re),
        Ze = (0, uc.createNativeWaveShaperNodeFactory)(Xe, xb.createInvalidStateError, Ye, id.isDCCurve, re, Td, ld.overwriteAccessors),
        $e = (0, pc.createNativePannerNodeFakerFactory)(Yc.connectNativeAudioNodeToNativeAudioNode, xb.createInvalidStateError, te, fc.createNativeGainNode, rc.createNativeScriptProcessorNode, Ze, wc.createNotSupportedError, Zc.disconnectNativeAudioNodeFromNativeAudioNode, cd.getFirstSample, re),
        af = (0, oc.createNativePannerNodeFactory)($e),
        bf = (0, Bc.createPannerNodeRendererFactory)(he, te, ze, fc.createNativeGainNode, af, dd.getNativeAudioNode, Pd, je, Md, Ne),
        cf = (0, Ac.createPannerNodeConstructor)(Yd, le, af, bf, Od, Qd, pe),
        df = (0, qc.createNativePeriodicWaveFactory)(vb.createIndexSizeError),
        ef = (0, Cc.createPeriodicWaveConstructor)(df, Od, new WeakSet(), pd.sanitizePeriodicWaveOptions),
        ff = (0, tc.createNativeStereoPannerNodeFakerFactory)(te, $b.createNativeChannelSplitterNode, fc.createNativeGainNode, Ze, wc.createNotSupportedError, re),
        gf = (0, sc.createNativeStereoPannerNodeFactory)(ff, wc.createNotSupportedError),
        hf = (0, Lc.createStereoPannerNodeRendererFactory)(he, gf, dd.getNativeAudioNode, je, Md),
        jf = (0, Kc.createStereoPannerNodeConstructor)(Yd, le, gf, hf, Od, Qd),
        kf = (0, Rc.createWaveShaperNodeRendererFactory)(Ze, dd.getNativeAudioNode, Md),
        lf = (0, Qc.createWaveShaperNodeConstructor)(Yd, xb.createInvalidStateError, Ze, kf, Od, Qd, pe),
        mf = (0, Hb.createIsSecureContext)(Jd),
        nf = (0, gb.createExposeCurrentFrameAndCurrentTime)(Jd),
        pf = new WeakMap(),
        qf = (0, qb.createGetOrCreateBackupOfflineAudioContext)(pf, Pd),
        _rf = mf ? (0, j.createAddAudioWorkletModule)(Id, wc.createNotSupportedError, (0, eb.createEvaluateSource)(Jd), nf, (0, hb.createFetchSource)(_f.createAbortError), Od, qf, Qd, Xd, new WeakMap(), new WeakMap(), (0, Nc.createTestAudioWorkletProcessorPostMessageSupport)(Xd, Pd), Jd) : void 0,
        sf = (0, Fb.createIsNativeContext)(Ud, Qd),
        tf = (0, U.createDecodeAudioData)($d, Id, T.createDataCloneError, db.createEncodingError, new WeakSet(), Od, sf, rd.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, zd.testPromiseSupport, ce, de),
        uf = (0, C.createBaseAudioContextConstructor)(_rf, Zd, _ee, _me, qe, ve, xe, _Be, Ee, tf, Ge, Je, Le, Qe, Te, We, cf, ef, jf, lf),
        vf = (0, Ib.createMediaElementAudioSourceNodeConstructor)(Yd, ic.createNativeMediaElementAudioSourceNode, Od, Qd),
        wf = (0, Jb.createMediaStreamAudioDestinationNodeConstructor)(Yd, jc.createNativeMediaStreamAudioDestinationNode, Od, Qd),
        _xf = (0, Kb.createMediaStreamAudioSourceNodeConstructor)(Yd, kc.createNativeMediaStreamAudioSourceNode, Od, Qd),
        yf = (0, lc.createNativeMediaStreamTrackAudioSourceNodeFactory)(xb.createInvalidStateError, Qd),
        zf = (0, Lb.createMediaStreamTrackAudioSourceNodeConstructor)(Yd, yf, Od),
        Af = ((0, t.createAudioContextConstructor)(uf, xb.createInvalidStateError, wc.createNotSupportedError, Pc.createUnknownError, vf, wf, _xf, zf, Td), (0, rb.createGetUnrenderedAudioWorkletNodes)(Se)),
        Bf = (0, n.createAddUnrenderedAudioWorkletNode)(Af),
        Cf = (0, L.createConnectMultipleOutputs)(vb.createIndexSizeError),
        Df = (0, Z.createDeleteUnrenderedAudioWorkletNode)(Af),
        Ef = (0, ab.createDisconnectMultipleOutputs)(vb.createIndexSizeError),
        Ff = new WeakMap(),
        Gf = (0, kb.createGetActiveAudioWorkletNodeInputs)(Ff, fd.getValueForKey),
        Hf = (0, Xb.createNativeAudioWorkletNodeFakerFactory)(Cf, vb.createIndexSizeError, xb.createInvalidStateError, te, $b.createNativeChannelSplitterNode, ze, fc.createNativeGainNode, rc.createNativeScriptProcessorNode, wc.createNotSupportedError, Ef, nf, Gf, re),
        If = (0, Wb.createNativeAudioWorkletNodeFactory)(xb.createInvalidStateError, Hf, fc.createNativeGainNode, wc.createNotSupportedError, re),
        Jf = (0, B.createAudioWorkletNodeRendererFactory)(he, Cf, ie, te, $b.createNativeChannelSplitterNode, ze, fc.createNativeGainNode, Df, Ef, nf, dd.getNativeAudioNode, Xd, Pd, je, Md, Ne),
        Kf = (0, ob.createGetBackupOfflineAudioContext)(pf),
        Lf = (0, Hc.createSetActiveAudioWorkletNodeInputs)(Ff),
        _Mf = mf ? (0, A.createAudioWorkletNodeConstructor)(Bf, Yd, le, Jf, If, $c.getAudioNodeConnections, Kf, Od, Qd, Xd, nd.sanitizeAudioWorkletNodeOptions, Lf, yd.testAudioWorkletNodeOptionsClonability, Cd.wrapEventListener) : void 0,
        _Nf = (0, Mb.createMinimalAudioContextConstructor)(xb.createInvalidStateError, wc.createNotSupportedError, Pc.createUnknownError, Te, Td),
        Of = (0, S.createCreateNativeOfflineAudioContext)(wc.createNotSupportedError, Pd),
        Pf = (0, Jc.createStartRendering)($d, Id, Ld, Af, Ne, rd.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, ce, de);
    (0, Ob.createMinimalOfflineAudioContextConstructor)(Id, xb.createInvalidStateError, Of, Te, Pf), (0, xc.createOfflineAudioContextConstructor)(uf, Id, xb.createInvalidStateError, Of, Pf), (0, yb.createIsAnyAudioContext)(Xc.CONTEXT_STORE, Ud), (0, zb.createIsAnyAudioNode)(Xc.AUDIO_NODE_STORE, Vd), (0, Ab.createIsAnyAudioParam)(Xc.AUDIO_PARAM_STORE, Wd), (0, Bb.createIsAnyOfflineAudioContext)(Xc.CONTEXT_STORE, Qd);
}), b.register('jjKMm', function(c, d) {
    c.exports,
        function(e, f, g, h) {
            function i(j) {
                return j && 'object' == typeof j && 'default' in j ? j : {
                    default: j
                };
            }
            var j = i(f),
                k = i(g),
                l = i(h),
                m = function(n, o, p) {
                    return {
                        endTime: o,
                        insertTime: p,
                        type: 'exponentialRampToValue',
                        value: n
                    };
                },
                n = function(o, p, q) {
                    return {
                        endTime: p,
                        insertTime: q,
                        type: 'linearRampToValue',
                        value: o
                    };
                },
                o = function(p, q) {
                    return {
                        startTime: q,
                        type: 'setValue',
                        value: p
                    };
                },
                p = function(q, r, s) {
                    return {
                        duration: s,
                        startTime: r,
                        type: 'setValueCurve',
                        values: q
                    };
                },
                q = function(r, s, t) {
                    var u = t.startTime,
                        v = t.target,
                        w = t.timeConstant;
                    return v + (s - v) * Math.exp((u - r) / w);
                },
                r = function(s) {
                    return 'exponentialRampToValue' === s.type;
                },
                s = function(t) {
                    return 'linearRampToValue' === t.type;
                },
                t = function(u) {
                    return r(u) || s(u);
                },
                u = function(v) {
                    return 'setValue' === v.type;
                },
                v = function(w) {
                    return 'setValueCurve' === w.type;
                },
                w = function e(x, y, z, A) {
                    var B = x[y];
                    return void 0 === B ? A : t(B) || u(B) ? B.value : v(B) ? B.values[B.values.length - 1] : q(z, e(x, y - 1, B.startTime, A), B);
                },
                x = function(y, z, A, B, C) {
                    return void 0 === A ? [
                        B.insertTime,
                        C
                    ] : t(A) ? [
                        A.endTime,
                        A.value
                    ] : u(A) ? [
                        A.startTime,
                        A.value
                    ] : v(A) ? [
                        A.startTime + A.duration,
                        A.values[A.values.length - 1]
                    ] : [
                        A.startTime,
                        w(y, z - 1, A.startTime, C)
                    ];
                },
                y = function(z) {
                    return 'cancelAndHold' === z.type;
                },
                z = function(A) {
                    return 'cancelScheduledValues' === A.type;
                },
                A = function(B) {
                    return y(B) || z(B) ? B.cancelTime : r(B) || s(B) ? B.endTime : B.startTime;
                },
                B = function(C, D, E, F) {
                    var G = F.endTime,
                        H = F.value;
                    return E === H ? H : 0 < E && 0 < H || E < 0 && H < 0 ? E * Math.pow(H / E, (C - D) / (G - D)) : 0;
                },
                C = function(D, E, F, G) {
                    return F + (D - E) / (G.endTime - E) * (G.value - F);
                },
                D = function(E, F) {
                    var G = Math.floor(F),
                        H = Math.ceil(F);
                    return G === H ? E[G] : (1 - (F - G)) * E[G] + (1 - (H - F)) * E[H];
                },
                E = function(F, G) {
                    var H = G.duration,
                        I = G.startTime,
                        J = G.values,
                        K = (F - I) / H * (J.length - 1);
                    return D(J, K);
                },
                F = function(G) {
                    return 'setTarget' === G.type;
                },
                G = function(H) {
                    function I(J) {
                        k.default(this, I), this._automationEvents = [], this._currenTime = 0, this._defaultValue = J;
                    }
                    return l.default(I, [{
                            key: H,
                            value: function() {
                                return this._automationEvents[Symbol.iterator]();
                            }
                        },
                        {
                            key: 'add',
                            value: function(J) {
                                var K = A(J);
                                if (y(J) || z(J)) {
                                    var L = this._automationEvents.findIndex(function(M) {
                                            return z(J) && v(M) ? M.startTime + M.duration >= K : A(M) >= K;
                                        }),
                                        M = this._automationEvents[L];
                                    if (-1 !== L && (this._automationEvents = this._automationEvents.slice(0, L)), y(J)) {
                                        var N = this._automationEvents[this._automationEvents.length - 1];
                                        if (void 0 !== M && t(M)) {
                                            if (F(N))
                                                throw new Error('The internal list is malformed.');
                                            var O = v(N) ? N.startTime + N.duration : A(N),
                                                P = v(N) ? N.values[N.values.length - 1] : N.value,
                                                Q = r(M) ? B(K, O, P, M) : C(K, O, P, M),
                                                R = r(M) ? m(Q, K, this._currenTime) : n(Q, K, this._currenTime);
                                            this._automationEvents.push(R);
                                        }
                                        void 0 !== N && F(N) && this._automationEvents.push(o(this.getValue(K), K)), void 0 !== N && v(N) && N.startTime + N.duration > K && (this._automationEvents[this._automationEvents.length - 1] = p(new Float32Array([
                                            6,
                                            7
                                        ]), N.startTime, K - N.startTime));
                                    }
                                } else {
                                    var L = this._automationEvents.findIndex(function(M) {
                                            return A(M) > K;
                                        }),
                                        M = -1 === L ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[L - 1];
                                    if (void 0 !== M && v(M) && A(M) + M.duration > K)
                                        return !1;
                                    var N = r(J) ? m(J.value, J.endTime, this._currenTime) : s(J) ? n(J.value, K, this._currenTime) : J;
                                    if (-1 === L)
                                        this._automationEvents.push(N);
                                    else {
                                        if (v(J) && K + J.duration > A(this._automationEvents[L]))
                                            return !1;
                                        this._automationEvents.splice(L, 0, N);
                                    }
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'flush',
                            value: function(J) {
                                var K = this._automationEvents.findIndex(function(L) {
                                    return A(L) > J;
                                });
                                if (K > 1) {
                                    var L = this._automationEvents.slice(K - 1),
                                        M = L[0];
                                    F(M) && L.unshift(o(w(this._automationEvents, K - 2, M.startTime, this._defaultValue), M.startTime)), this._automationEvents = L;
                                }
                            }
                        },
                        {
                            key: 'getValue',
                            value: function(J) {
                                if (0 === this._automationEvents.length)
                                    return this._defaultValue;
                                var K = this._automationEvents.findIndex(function(L) {
                                        return A(L) > J;
                                    }),
                                    L = this._automationEvents[K],
                                    M = (-1 === K ? this._automationEvents.length : K) - 1,
                                    N = this._automationEvents[M];
                                if (void 0 !== N && F(N) && (void 0 === L || !t(L) || L.insertTime > J))
                                    return q(J, w(this._automationEvents, M - 1, N.startTime, this._defaultValue), N);
                                if (void 0 !== N && u(N) && (void 0 === L || !t(L)))
                                    return N.value;
                                if (void 0 !== N && v(N) && (void 0 === L || !t(L) || N.startTime + N.duration > J))
                                    return J < N.startTime + N.duration ? E(J, N) : N.values[N.values.length - 1];
                                if (void 0 !== N && t(N) && (void 0 === L || !t(L)))
                                    return N.value;
                                if (void 0 !== L && r(L)) {
                                    var O = x(this._automationEvents, M, N, L, this._defaultValue),
                                        P = j.default(O, 2),
                                        Q = P[0],
                                        R = P[1];
                                    return B(J, Q, R, L);
                                }
                                if (void 0 !== L && s(L)) {
                                    var O = x(this._automationEvents, M, N, L, this._defaultValue),
                                        P = j.default(O, 2),
                                        Q = P[0],
                                        R = P[1];
                                    return C(J, Q, R, L);
                                }
                                return this._defaultValue;
                            }
                        }
                    ]), I;
                }(Symbol.iterator),
                H = function(I) {
                    return {
                        cancelTime: I,
                        type: 'cancelAndHold'
                    };
                },
                I = function(J) {
                    return {
                        cancelTime: J,
                        type: 'cancelScheduledValues'
                    };
                },
                J = function(K, L) {
                    return {
                        endTime: L,
                        type: 'exponentialRampToValue',
                        value: K
                    };
                },
                K = function(L, M) {
                    return {
                        endTime: M,
                        type: 'linearRampToValue',
                        value: L
                    };
                },
                L = function(M, N, O) {
                    return {
                        startTime: N,
                        target: M,
                        timeConstant: O,
                        type: 'setTarget'
                    };
                };
            e.AutomationEventList = G, e.createCancelAndHoldAutomationEvent = H, e.createCancelScheduledValuesAutomationEvent = I, e.createExponentialRampToValueAutomationEvent = J, e.createLinearRampToValueAutomationEvent = K, e.createSetTargetAutomationEvent = L, e.createSetValueAutomationEvent = o, e.createSetValueCurveAutomationEvent = p, Object.defineProperty(e, '__esModule', {
                value: !0
            });
        }(c.exports, b('bNxfm'), b('OYtTV0'), b('uGyZ9'));
}), b.register('bNxfm', function(c, d) {
    var e = b('J9HTK0'),
        f = b('RZo5A0'),
        g = b('GcjiO'),
        h = b('unFK00');
    c.exports = function(i, j) {
        return e(i) || f(i, j) || g(i, j) || h();
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('J9HTK0', function(c, d) {
    c.exports = function(e) {
        if (Array.isArray(e))
            return e;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('RZo5A0', function(c, d) {
    c.exports = function(e, f) {
        var g = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != g) {
            var h, i, j, k, l = [],
                m = !0,
                n = !1;
            try {
                if (j = (g = g.call(e)).next, 0 === f) {
                    if (Object(g) !== g)
                        return;
                    m = !1;
                } else
                    for (; !(m = (h = j.call(g)).done) && (l.push(h.value), l.length !== f); m = !0);
            } catch (e) {
                n = !0, i = e;
            } finally {
                try {
                    if (!m && null != g.return && (k = g.return(), Object(k) !== k))
                        return;
                } finally {
                    if (n)
                        throw i;
                }
            }
            return l;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('GcjiO', function(c, d) {
    var e = b('lpsIZ0');
    c.exports = function(f, g) {
        if (f) {
            if ('string' == typeof f)
                return e(f, g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? e(f, g) : void 0;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('lpsIZ0', function(c, d) {
    c.exports = function(e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('unFK00', function(c, d) {
    c.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('OYtTV0', function(c, d) {
    c.exports = function(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('uGyZ9', function(c, d) {
    var e = b('6nbYr');

    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, e(j.key), j);
        }
    }
    c.exports = function(g, h, i) {
        return h && f(g.prototype, h), i && f(g, i), Object.defineProperty(g, 'prototype', {
            writable: !1
        }), g;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('6nbYr', function(c, d) {
    var e = b('2PxHI0').default,
        f = b('6yl23');
    c.exports = function(g) {
        var h = f(g, 'string');
        return 'symbol' === e(h) ? h : String(h);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('2PxHI0', function(c, d) {
    function e(f) {
        return c.exports = e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(g) {
            return typeof g;
        } : function(g) {
            return g && 'function' == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? 'symbol' : typeof g;
        }, c.exports.__esModule = !0, c.exports.default = c.exports, e(f);
    }
    c.exports = e, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('6yl23', function(c, d) {
    var e = b('2PxHI0').default;
    c.exports = function(f, g) {
        if ('object' !== e(f) || null === f)
            return f;
        var h = f[Symbol.toPrimitive];
        if (void 0 !== h) {
            var i = h.call(f, g || 'default');
            if ('object' !== e(i))
                return i;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === g ? String : Number)(f);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('NOYdX', function(c, d) {
    a(c.exports, 'createAbortError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'AbortError');
}), b.register('nAEgw', function(c, d) {
    a(c.exports, 'createAddActiveInputConnectionToAudioNode', function() {
        return _e;
    });
    const _e = a => (c, d, [f, g, h], _g) => {
        a(c[g], [
            d,
            f,
            h
        ], a => a[0] === d && a[1] === f, _g);
    };
}), b.register('LgILd', function(c, d) {
    a(c.exports, 'createAddAudioNodeConnections', function() {
        return _e;
    });
    const _e = a => (c, d, _e) => {
        const f = [];
        for (let g = 0; g < _e.numberOfInputs; g += 1)
            f.push(new Set());
        g.set(c, {
            activeInputs: f,
            outputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: d
        });
    };
}), b.register('IwEd6', function(c, d) {
    a(c.exports, 'createAddAudioParamConnections', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        a.set(c, {
            activeInputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: d
        });
    };
}), b.register('UsNLv', function(c, d) {
    a(c.exports, 'createAddAudioWorkletModule', function() {
        return _j;
    });
    var e = b('H8j0Q'),
        f = b('DV9ei'),
        _g = b('6GQPb');
    const h = a => {
            if (void 0 !== a && !Array.isArray(a))
                throw new TypeError('The parameterDescriptors property of given value for processorCtor is not an array.');
        },
        i = a => {
            if (!(0, f.isConstructible)(a))
                throw new TypeError('The given value for processorCtor should be a constructor.');
            if (null === a.prototype || 'object' != typeof a.prototype)
                throw new TypeError('The given value for processorCtor should have a prototype.');
        },
        _j = (a, b, c, d, f, _j, _l, _m, _n, _k, _l, _m, _i) => {
            let k = 0;
            return (_n, _o, l = {
                credentials: 'omit'
            }) => {
                const m = _l.get(_n);
                if (void 0 !== m && m.has(_o))
                    return Promise.resolve();
                const n = _k.get(_n);
                if (void 0 !== n) {
                    const o = n.get(_o);
                    if (void 0 !== o)
                        return o;
                }
                const o = _j(_n),
                    p = void 0 === o.audioWorklet ? f(_o).then(([q, r]) => {
                        const [s, t] = (0, _g.splitImportStatements)(q, r);
                        return c(`${ s };((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${ t }\n})})(window,'_AWGS')`);
                    }).then(() => {
                        const s = _i._AWGS.pop();
                        if (void 0 === s)
                            throw new SyntaxError();
                        d(o.currentTime, o.sampleRate, () => s(class {}, void 0, (s, c) => {
                            if ('' === s.trim())
                                throw r();
                            const t = e.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(o);
                            if (void 0 !== t) {
                                if (t.has(s))
                                    throw r();
                                i(c), h(c.parameterDescriptors), t.set(s, c);
                            } else
                                i(c), h(c.parameterDescriptors), e.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(o, new Map([
                                    [
                                        s,
                                        c
                                    ]
                                ]));
                        }, o.sampleRate, void 0, void 0));
                    }) : Promise.all([
                        f(_o),
                        Promise.resolve(q(_m, _m))
                    ]).then(([
                        [s, t], u
                    ]) => {
                        const v = k + 1;
                        k = v;
                        const [w, x] = (0, _g.splitImportStatements)(s, t), y = new Blob([`${ w };((AudioWorkletProcessor,registerProcessor)=>{${ x }\n})(${ u ? 'AudioWorkletProcessor' : 'class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}' },(n,p)=>registerProcessor(n,class extends p{${ u ? '' : '__c = (a) => a.forEach(e=>this.__b.add(e.buffer));' }process(i,o,p){${ u ? '' : 'i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));' }return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${ v }',class extends AudioWorkletProcessor{process(){return !1}})`], {
                            type: 'application/javascript; charset=utf-8'
                        }), z = URL.createObjectURL(y);
                        return o.audioWorklet.addModule(z, l).then(() => {
                            if (_m(o))
                                return o;
                            const A = _l(o);
                            return A.audioWorklet.addModule(z, l).then(() => A);
                        }).then(s => {
                            if (null === _n)
                                throw new SyntaxError();
                            try {
                                new _n(s, `__sac${ v }`);
                            } catch {
                                throw new SyntaxError();
                            }
                        }).finally(() => URL.revokeObjectURL(z));
                    });
                return void 0 === n ? _k.set(_n, new Map([
                    [
                        _o,
                        p
                    ]
                ])) : n.set(_o, p), p.then(() => {
                    const v = _l.get(_n);
                    void 0 === v ? _l.set(_n, new Set([_o])) : v.add(_o);
                }).finally(() => {
                    const v = _k.get(_n);
                    void 0 !== v && v.delete(_o);
                }), p;
            };
        };
}), b.register('H8j0Q', function(c, d) {
    a(c.exports, 'ACTIVE_AUDIO_NODE_STORE', function() {
        return _e;
    }), a(c.exports, 'AUDIO_NODE_CONNECTIONS_STORE', function() {
        return _f;
    }), a(c.exports, 'AUDIO_NODE_STORE', function() {
        return _g;
    }), a(c.exports, 'AUDIO_PARAM_CONNECTIONS_STORE', function() {
        return _h;
    }), a(c.exports, 'AUDIO_PARAM_STORE', function() {
        return _i;
    }), a(c.exports, 'CONTEXT_STORE', function() {
        return _j;
    }), a(c.exports, 'EVENT_LISTENERS', function() {
        return _k;
    }), a(c.exports, 'CYCLE_COUNTERS', function() {
        return _l;
    }), a(c.exports, 'NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS', function() {
        return _m;
    }), a(c.exports, 'NODE_TO_PROCESSOR_MAPS', function() {
        return _n;
    });
    const _e = new WeakSet(),
        _f = new WeakMap(),
        _g = new WeakMap(),
        _h = new WeakMap(),
        _i = new WeakMap(),
        _j = new WeakMap(),
        _k = new WeakMap(),
        _l = new WeakMap(),
        _m = new WeakMap(),
        _n = new WeakMap();
}), b.register('DV9ei', function(c, d) {
    a(c.exports, 'isConstructible', function() {
        return _f;
    });
    const e = {
            construct: () => e
        },
        _f = a => {
            try {
                new new Proxy(a, e)();
            } catch {
                return !1;
            }
            return !0;
        };
}), b.register('6GQPb', function(c, d) {
    a(c.exports, 'splitImportStatements', function() {
        return _f;
    });
    const e = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        _f = (a, c) => {
            const g = [];
            let h = a.replace(/^[\s]+/, ''),
                i = h.match(e);
            for (; null !== i;) {
                const j = i[1].slice(1, -1),
                    k = i[0].replace(/([\s]+)?;?$/, '').replace(j, new URL(j, c).toString());
                g.push(k), h = h.slice(i[0].length).replace(/^[\s]+/, ''), i = h.match(e);
            }
            return [
                g.join(';'),
                h
            ];
        };
}), b.register('pO5a8', function(c, d) {
    a(c.exports, 'createAddConnectionToAudioNode', function() {
        return _h;
    });
    var e = b('QOzKt'),
        f = b('NF5ES'),
        g = b('q+H7+');
    const _h = (a, b, c, d, _h, _j, _k, _o, _i, _p, _k, _l, _m) => {
        const _i = new WeakMap();
        return (_m, _n, _o, _p, _z) => {
            const {
                activeInputs: j,
                passiveInputs: k
            } = _j(_n), {
                outputs: l
            } = _j(_m), m = _o(_m), n = _j => {
                const _o = _i(_n),
                    _p = _i(_m);
                if (_j) {
                    const q = (0, e.deletePassiveInputConnectionToAudioNode)(k, _m, _o, _p);
                    a(j, _m, q, !1), _z || _l(_m) || c(_p, _o, _o, _p), _m(_n) && (0, f.setInternalStateToActive)(_n);
                } else {
                    const q = d(j, _m, _o, _p);
                    b(k, _p, q, !1), _z || _l(_m) || _h(_p, _o, _o, _p);
                    const r = _k(_n);
                    if (0 === r)
                        _k(_n) && (0, g.setInternalStateToPassiveWhenNecessary)(_n, j);
                    else {
                        const s = _i.get(_n);
                        void 0 !== s && clearTimeout(s), _i.set(_n, setTimeout(() => {
                            _k(_n) && (0, g.setInternalStateToPassiveWhenNecessary)(_n, j);
                        }, 1000 * r));
                    }
                }
            };
            return !!_j(l, [
                _n,
                _o,
                _p
            ], a => a[0] === _n && a[1] === _o && a[2] === _p, !0) && (m.add(n), _k(_m) ? a(j, _m, [
                _o,
                _p,
                n
            ], !0) : b(k, _p, [
                _m,
                _o,
                n
            ], !0), !0);
        };
    };
}), b.register('QOzKt', function(c, d) {
    a(c.exports, 'deletePassiveInputConnectionToAudioNode', function() {
        return _g;
    });
    var e = b('6VM4W'),
        f = b('IFD+w');
    const _g = (a, b, c, d) => {
        const h = (0, e.getValueForKey)(a, b),
            i = (0, f.pickElementFromSet)(h, a => a[0] === c && a[1] === d);
        return 0 === h.size && a.delete(b), i;
    };
}), b.register('6VM4W', function(c, d) {
    a(c.exports, 'getValueForKey', function() {
        return _e;
    });
    const _e = (a, c) => {
        const f = a.get(c);
        if (void 0 === f)
            throw new Error('A value with the given key could not be found.');
        return f;
    };
}), b.register('IFD+w', function(c, d) {
    a(c.exports, 'pickElementFromSet', function() {
        return _e;
    });
    const _e = (a, c) => {
        const f = Array.from(a).filter(c);
        if (f.length > 1)
            throw Error('More than one element was found.');
        if (0 === f.length)
            throw Error('No element was found.');
        const [g] = f;
        return a.delete(g), g;
    };
}), b.register('NF5ES', function(c, d) {
    a(c.exports, 'setInternalStateToActive', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('JrumW');
    const _g = a => {
        if (e.ACTIVE_AUDIO_NODE_STORE.has(a))
            throw new Error('The AudioNode is already stored.');
        e.ACTIVE_AUDIO_NODE_STORE.add(a), (0, f.getEventListenersOfAudioNode)(a).forEach(a => a(!0));
    };
}), b.register('JrumW', function(c, d) {
    a(c.exports, 'getEventListenersOfAudioNode', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('6VM4W');
    const _g = a => (0, f.getValueForKey)(e.EVENT_LISTENERS, a);
}), b.register('q+H7+', function(c, d) {
    a(c.exports, 'setInternalStateToPassiveWhenNecessary', function() {
        return _g;
    });
    var e = b('cCUCV'),
        f = b('qYGZ8');
    const _g = (a, b) => {
        !(0, e.isAudioWorkletNode)(a) && b.every(a => 0 === a.size) && (0, f.setInternalStateToPassive)(a);
    };
}), b.register('cCUCV', function(c, d) {
    a(c.exports, 'isAudioWorkletNode', function() {
        return _e;
    });
    const _e = a => 'port' in a;
}), b.register('qYGZ8', function(c, d) {
    a(c.exports, 'setInternalStateToPassive', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('JrumW');
    const _g = a => {
        if (!e.ACTIVE_AUDIO_NODE_STORE.has(a))
            throw new Error('The AudioNode is not stored.');
        e.ACTIVE_AUDIO_NODE_STORE.delete(a), (0, f.getEventListenersOfAudioNode)(a).forEach(a => a(!1));
    };
}), b.register('SVxuC', function(c, d) {
    a(c.exports, 'createAddPassiveInputConnectionToAudioNode', function() {
        return _e;
    });
    const _e = a => (c, d, [f, g, h], _i) => {
        const i = c.get(f);
        void 0 === i ? c.set(f, new Set([
            [
                g,
                d,
                h
            ]
        ])) : a(i, [
            g,
            d,
            h
        ], a => a[0] === g && a[1] === d, _i);
    };
}), b.register('3OnKl', function(c, d) {
    a(c.exports, 'createAddSilentConnection', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        const f = a(c, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        d.connect(f).connect(c.destination);
        const g = () => {
            d.removeEventListener('ended', g), d.disconnect(f), f.disconnect();
        };
        d.addEventListener('ended', g);
    };
}), b.register('ryN04', function(c, d) {
    a(c.exports, 'createAddUnrenderedAudioWorkletNode', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        a(c).add(d);
    };
}), b.register('ULU1q', function(c, d) {
    a(c.exports, 'createAnalyserNodeConstructor', function() {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            fftSize: 2048,
            maxDecibels: -30,
            minDecibels: -100,
            smoothingTimeConstant: 0.8
        },
        _f = (a, c, d, _f, _f, _i) => class extends a {
            get fftSize() {
                return this._nativeAnalyserNode.fftSize;
            }
            set fftSize(g) {
                this._nativeAnalyserNode.fftSize = g;
            }
            get frequencyBinCount() {
                return this._nativeAnalyserNode.frequencyBinCount;
            }
            get maxDecibels() {
                return this._nativeAnalyserNode.maxDecibels;
            }
            set maxDecibels(g) {
                const h = this._nativeAnalyserNode.maxDecibels;
                if (this._nativeAnalyserNode.maxDecibels = g, !(g > this._nativeAnalyserNode.minDecibels))
                    throw this._nativeAnalyserNode.maxDecibels = h, d();
            }
            get minDecibels() {
                return this._nativeAnalyserNode.minDecibels;
            }
            set minDecibels(g) {
                const h = this._nativeAnalyserNode.minDecibels;
                if (this._nativeAnalyserNode.minDecibels = g, !(this._nativeAnalyserNode.maxDecibels > g))
                    throw this._nativeAnalyserNode.minDecibels = h, d();
            }
            get smoothingTimeConstant() {
                return this._nativeAnalyserNode.smoothingTimeConstant;
            }
            set smoothingTimeConstant(g) {
                this._nativeAnalyserNode.smoothingTimeConstant = g;
            }
            getByteFrequencyData(g) {
                this._nativeAnalyserNode.getByteFrequencyData(g);
            }
            getByteTimeDomainData(g) {
                this._nativeAnalyserNode.getByteTimeDomainData(g);
            }
            getFloatFrequencyData(g) {
                this._nativeAnalyserNode.getFloatFrequencyData(g);
            }
            getFloatTimeDomainData(g) {
                this._nativeAnalyserNode.getFloatTimeDomainData(g);
            }
            constructor(g, h) {
                const i = _f(g),
                    _j = {
                        ...e,
                        ...h
                    },
                    _k = _f(i, _j);
                super(g, !1, _k, _i(i) ? c() : null), this._nativeAnalyserNode = _k;
            }
        };
}), b.register('xzCGn', function(c, d) {
    a(c.exports, 'createAnalyserNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c) => () => {
        const g = new WeakMap();
        return {
            render(h, _i) {
                const j = g.get(_i);
                return void 0 !== j ? Promise.resolve(j) : (async (h, _i) => {
                    let k = b(h);
                    if (!(0, e.isOwnedByContext)(k, _i)) {
                        const l = {
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            fftSize: k.fftSize,
                            maxDecibels: k.maxDecibels,
                            minDecibels: k.minDecibels,
                            smoothingTimeConstant: k.smoothingTimeConstant
                        };
                        k = a(_i, l);
                    }
                    return g.set(_i, k), await c(h, _i, k), k;
                })(h, _i);
            }
        };
    };
}), b.register('Go0EV', function(c, d) {
    a(c.exports, 'isOwnedByContext', function() {
        return _e;
    });
    const _e = (a, c) => a.context === c;
}), b.register('6RcW3', function(c, d) {
    a(c.exports, 'createAudioBufferConstructor', function() {
        return _h;
    });
    var e = b('eXgTp'),
        f = b('Xqv6q');
    const g = {
            numberOfChannels: 1
        },
        _h = (a, b, c, d, _h, _i, _j, _k) => {
            let _i = null;
            return class _j {
                static[Symbol.hasInstance](j) {
                    return null !== j && 'object' == typeof j && Object.getPrototypeOf(j) === _j.prototype || a.has(j);
                }
                constructor(_j) {
                    if (null === _h)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const {
                        length: _k,
                        numberOfChannels: _l,
                        sampleRate: _m
                    } = {
                        ...g,
                        ..._j
                    };
                    null === _i && (_i = new _h(1, 1, 44100));
                    const n = null !== d && b(_i, _i) ? new d({
                        length: _k,
                        numberOfChannels: _l,
                        sampleRate: _m
                    }) : _i.createBuffer(_l, _k, _m);
                    if (0 === n.numberOfChannels)
                        throw c();
                    return 'function' != typeof n.copyFromChannel ? (_j(n), (0, f.wrapAudioBufferGetChannelDataMethod)(n)) : b(e.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => (0, e.testAudioBufferCopyChannelMethodsOutOfBoundsSupport)(n)) || _k(n), a.add(n), n;
                }
            };
        };
}), b.register('eXgTp', function(c, d) {
    a(c.exports, 'testAudioBufferCopyChannelMethodsOutOfBoundsSupport', function() {
        return _e;
    });
    const _e = a => {
        try {
            a.copyToChannel(new Float32Array(1), 0, -1);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('Xqv6q', function(c, d) {
    a(c.exports, 'wrapAudioBufferGetChannelDataMethod', function() {
        return _f;
    });
    var e = b('l2iy4');
    const _f = a => {
        var g;
        a.getChannelData = (g = a.getChannelData, c => {
            try {
                return g.call(a, c);
            } catch (a) {
                if (12 === a.code)
                    throw (0, e.createIndexSizeError)();
                throw a;
            }
        });
    };
}), b.register('l2iy4', function(c, d) {
    a(c.exports, 'createIndexSizeError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'IndexSizeError');
}), b.register('Firc/', function(c, d) {
    a(c.exports, 'createAudioBufferSourceNodeConstructor', function() {
        return _j;
    });
    var e = b('QulkM'),
        f = b('6wEyH'),
        g = b('NF5ES'),
        h = b('qYGZ8');
    const _i = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
        },
        _j = (a, b, c, d, _j, _k, _l, _p) => class extends a {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer;
            }
            set buffer(k) {
                if (this._nativeAudioBufferSourceNode.buffer = k, null !== k) {
                    if (this._isBufferSet)
                        throw d();
                    this._isBufferSet = !0;
                }
            }
            get loop() {
                return this._nativeAudioBufferSourceNode.loop;
            }
            set loop(k) {
                this._nativeAudioBufferSourceNode.loop = k;
            }
            get loopEnd() {
                return this._nativeAudioBufferSourceNode.loopEnd;
            }
            set loopEnd(k) {
                this._nativeAudioBufferSourceNode.loopEnd = k;
            }
            get loopStart() {
                return this._nativeAudioBufferSourceNode.loopStart;
            }
            set loopStart(k) {
                this._nativeAudioBufferSourceNode.loopStart = k;
            }
            get onended() {
                return this._onended;
            }
            set onended(k) {
                const l = 'function' == typeof k ? _p(this, k) : null;
                this._nativeAudioBufferSourceNode.onended = l;
                const m = this._nativeAudioBufferSourceNode.onended;
                this._onended = null !== m && m === l ? k : m;
            }
            get playbackRate() {
                return this._playbackRate;
            }
            start(k = 0, l = 0, m) {
                if (this._nativeAudioBufferSourceNode.start(k, l, m), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === m ? [
                        k,
                        l
                    ] : [
                        k,
                        l,
                        m
                    ]), 'closed' !== this.context.state) {
                    (0, g.setInternalStateToActive)(this);
                    const n = () => {
                        this._nativeAudioBufferSourceNode.removeEventListener('ended', n), (0, f.isActiveAudioNode)(this) && (0, h.setInternalStateToPassive)(this);
                    };
                    this._nativeAudioBufferSourceNode.addEventListener('ended', n);
                }
            }
            stop(k = 0) {
                this._nativeAudioBufferSourceNode.stop(k), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = k);
            }
            constructor(k, l) {
                const m = _k(k),
                    n = {
                        ..._i,
                        ...l
                    },
                    o = _j(m, n),
                    _p = _l(m),
                    q = _p ? b() : null;
                super(k, !1, o, q), this._audioBufferSourceNodeRenderer = q, this._isBufferNullified = !1, this._isBufferSet = null !== n.buffer, this._nativeAudioBufferSourceNode = o, this._onended = null, this._playbackRate = c(this, _p, o.playbackRate, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), b.register('QulkM', function(c, d) {
    a(c.exports, 'MOST_NEGATIVE_SINGLE_FLOAT', function() {
        return _e;
    }), a(c.exports, 'MOST_POSITIVE_SINGLE_FLOAT', function() {
        return _f;
    });
    const _e = -3.4028234663852886e+38,
        _f = -_e;
}), b.register('6wEyH', function(c, d) {
    a(c.exports, 'isActiveAudioNode', function() {
        return _f;
    });
    var e = b('H8j0Q');
    const _f = a => e.ACTIVE_AUDIO_NODE_STORE.has(a);
}), b.register('BDGsM', function(c, d) {
    a(c.exports, 'createAudioBufferSourceNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c, d, _f) => () => {
        const g = new WeakMap();
        let h = null,
            i = null;
        return {
            set start(j) {
                h = j;
            },
            set stop(j) {
                i = j;
            },
            render(j, _k) {
                const _l = g.get(_k);
                return void 0 !== _l ? Promise.resolve(_l) : (async (j, _k) => {
                    let m = c(j);
                    const n = (0, e.isOwnedByContext)(m, _k);
                    if (!n) {
                        const o = {
                            buffer: m.buffer,
                            channelCount: m.channelCount,
                            channelCountMode: m.channelCountMode,
                            channelInterpretation: m.channelInterpretation,
                            loop: m.loop,
                            loopEnd: m.loopEnd,
                            loopStart: m.loopStart,
                            playbackRate: m.playbackRate.value
                        };
                        m = b(_k, o), null !== h && m.start(...h), null !== i && m.stop(i);
                    }
                    return g.set(_k, m), n ? await a(_k, j.playbackRate, m.playbackRate) : await d(_k, j.playbackRate, m.playbackRate), await _f(j, _k, m), m;
                })(j, _k);
            }
        };
    };
}), b.register('XstMS', function(c, d) {
    a(c.exports, 'createAudioContextConstructor', function() {
        return _g;
    });
    var e = b('zVjiz'),
        f = b('mQVgw');
    const _g = (a, b, c, d, _g, _h, _i, _j, _k) => class extends a {
        get baseLatency() {
            return this._baseLatency;
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state;
        }
        close() {
            return 'closed' === this.state ? this._nativeAudioContext.close().then(() => {
                throw b();
            }) : ('suspended' === this._state && (this._state = null), this._nativeAudioContext.close().then(() => {
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, e.deactivateAudioGraph)(this);
            }));
        }
        createMediaElementSource(h) {
            return new _g(this, {
                mediaElement: h
            });
        }
        createMediaStreamDestination() {
            return new _h(this);
        }
        createMediaStreamSource(h) {
            return new _i(this, {
                mediaStream: h
            });
        }
        createMediaStreamTrackSource(h) {
            return new _j(this, {
                mediaStreamTrack: h
            });
        }
        resume() {
            return 'suspended' === this._state ? new Promise((a, b) => {
                const h = () => {
                    this._nativeAudioContext.removeEventListener('statechange', h), 'running' === this._nativeAudioContext.state ? a() : this.resume().then(a, b);
                };
                this._nativeAudioContext.addEventListener('statechange', h);
            }) : this._nativeAudioContext.resume().catch(a => {
                if (void 0 === a || 15 === a.code)
                    throw b();
                throw a;
            });
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(a => {
                if (void 0 === a)
                    throw b();
                throw a;
            });
        }
        constructor(h = {}) {
            if (null === _k)
                throw new Error('Missing the native AudioContext constructor.');
            let i;
            try {
                i = new _k(h);
            } catch (h) {
                if (12 === h.code && 'sampleRate is not in range' === h.message)
                    throw c();
                throw h;
            }
            if (null === i)
                throw d();
            if (!(0, f.isValidLatencyHint)(h.latencyHint))
                throw new TypeError(`The provided value '${ h.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== h.sampleRate && i.sampleRate !== h.sampleRate)
                throw c();
            super(i, 2);
            const {
                latencyHint: j
            } = h, {
                sampleRate: k
            } = i;
            if (this._baseLatency = 'number' == typeof i.baseLatency ? i.baseLatency : 'balanced' === j ? 512 / k : 'interactive' === j || void 0 === j ? 256 / k : 'playback' === j ? 1024 / k : 128 * Math.max(2, Math.min(128, Math.round(j * k / 128))) / k, this._nativeAudioContext = i, 'webkitAudioContext' === _k.name ? (this._nativeGainNode = i.createGain(), this._nativeOscillatorNode = i.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(i.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === i.state) {
                this._state = 'suspended';
                const l = () => {
                    'suspended' === this._state && (this._state = null), i.removeEventListener('statechange', l);
                };
                i.addEventListener('statechange', l);
            }
        }
    };
}), b.register('zVjiz', function(c, d) {
    a(c.exports, 'deactivateAudioGraph', function() {
        return _f;
    });
    var e = b('X+BTH');
    const _f = a => {
        (0, e.deactivateActiveAudioNodeInputConnections)(a.destination, []);
    };
}), b.register('X+BTH', function(c, d) {
    a(c.exports, 'deactivateActiveAudioNodeInputConnections', function() {
        return _p;
    });
    var e = b('8RQQ2'),
        f = b('cCUCV'),
        g = b('Ze9nC'),
        _h = b('Nvt2S'),
        _i = b('40/oy'),
        _j = b('1W9zG'),
        _k = b('BsFJq'),
        l = b('FwDzM'),
        m = b('O4C4I'),
        n = b('6wEyH'),
        o = b('qYGZ8');
    const _p = (a, b) => {
        const {
            activeInputs: q
        } = (0, l.getAudioNodeConnections)(a);
        q.forEach(q => q.forEach(([r]) => {
            b.includes(a) || _p(r, [
                ...b,
                a
            ]);
        }));
        const s = (0, e.isAudioBufferSourceNode)(a) ? [a.playbackRate] : (0, f.isAudioWorkletNode)(a) ? Array.from(a.parameters.values()) : (0, g.isBiquadFilterNode)(a) ? [
            a.Q,
            a.detune,
            a.frequency,
            a.gain
        ] : (0, _h.isConstantSourceNode)(a) ? [a.offset] : (0, _i.isGainNode)(a) ? [a.gain] : (0, _j.isOscillatorNode)(a) ? [
            a.detune,
            a.frequency
        ] : (0, _k.isStereoPannerNode)(a) ? [a.pan] : [];
        for (const t of s) {
            const u = (0, m.getAudioParamConnections)(t);
            void 0 !== u && u.activeInputs.forEach(([v]) => _p(v, b));
        }
        (0, n.isActiveAudioNode)(t) && (0, o.setInternalStateToPassive)(t);
    };
}), b.register('8RQQ2', function(c, d) {
    a(c.exports, 'isAudioBufferSourceNode', function() {
        return _e;
    });
    const _e = a => 'playbackRate' in a;
}), b.register('Ze9nC', function(c, d) {
    a(c.exports, 'isBiquadFilterNode', function() {
        return _e;
    });
    const _e = a => 'frequency' in a && 'gain' in a;
}), b.register('Nvt2S', function(c, d) {
    a(c.exports, 'isConstantSourceNode', function() {
        return _e;
    });
    const _e = a => 'offset' in a;
}), b.register('40/oy', function(c, d) {
    a(c.exports, 'isGainNode', function() {
        return _e;
    });
    const _e = a => !('frequency' in a) && 'gain' in a;
}), b.register('1W9zG', function(c, d) {
    a(c.exports, 'isOscillatorNode', function() {
        return _e;
    });
    const _e = a => 'detune' in a && 'frequency' in a;
}), b.register('BsFJq', function(c, d) {
    a(c.exports, 'isStereoPannerNode', function() {
        return _e;
    });
    const _e = a => 'pan' in a;
}), b.register('FwDzM', function(c, d) {
    a(c.exports, 'getAudioNodeConnections', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('6VM4W');
    const _g = a => (0, f.getValueForKey)(e.AUDIO_NODE_CONNECTIONS_STORE, a);
}), b.register('O4C4I', function(c, d) {
    a(c.exports, 'getAudioParamConnections', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('6VM4W');
    const _g = a => (0, f.getValueForKey)(e.AUDIO_PARAM_CONNECTIONS_STORE, a);
}), b.register('mQVgw', function(c, d) {
    a(c.exports, 'isValidLatencyHint', function() {
        return _e;
    });
    const _e = a => void 0 === a || 'number' == typeof a || 'string' == typeof a && ('balanced' === a || 'interactive' === a || 'playback' === a);
}), b.register('Hut34', function(c, d) {
    a(c.exports, 'createAudioDestinationNodeConstructor', function() {
        return _e;
    });
    const _e = (a, c, d, _e, _i, _f, _g, _A) => class extends a {
        get channelCount() {
            return this._nativeAudioDestinationNode.channelCount;
        }
        set channelCount(f) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw _e();
            if (f > this._nativeAudioDestinationNode.maxChannelCount)
                throw d();
            this._nativeAudioDestinationNode.channelCount = f;
        }
        get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode;
        }
        set channelCountMode(f) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw _e();
            this._nativeAudioDestinationNode.channelCountMode = f;
        }
        get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount;
        }
        constructor(f, g) {
            const h = _f(f),
                i = _g(h),
                j = _i(h, g, i);
            super(f, !1, j, i ? c(_A) : null), this._isNodeOfNativeOfflineAudioContext = i, this._nativeAudioDestinationNode = j;
        }
    };
}), b.register('etj3s', function(c, d) {
    a(c.exports, 'createAudioDestinationNodeRenderer', function() {
        return _e;
    });
    const _e = a => {
        const f = new WeakMap();
        return {
            render(g, h) {
                const _i = f.get(h);
                return void 0 !== _i ? Promise.resolve(_i) : (async (g, h) => {
                    const j = h.destination;
                    return f.set(h, j), await a(g, h, j), j;
                })(g, h);
            }
        };
    };
}), b.register('W6uKv', function(c, d) {
    a(c.exports, 'createAudioListenerFactory', function() {
        return _f;
    });
    var e = b('QulkM');
    const _f = (a, b, c, d, _f, _g, _A, _i) => (_j, _k) => {
        const g = _k.listener,
            {
                forwardX: h,
                forwardY: i,
                forwardZ: j,
                positionX: k,
                positionY: l,
                positionZ: _m,
                upX: _n,
                upY: _o,
                upZ: _p
            } = void 0 === g.forwardX ? (() => {
                const q = new Float32Array(1),
                    r = b(_k, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: 9
                    }),
                    s = _A(_k);
                let t = !1,
                    u = [
                        0,
                        0,
                        -1,
                        0,
                        1,
                        0
                    ],
                    v = [
                        0,
                        0,
                        0
                    ];
                const w = () => {
                        if (t)
                            return;
                        t = !0;
                        const x = d(_k, 256, 9, 0);
                        x.onaudioprocess = ({
                            inputBuffer: y
                        }) => {
                            const z = [
                                _g(y, q, 0),
                                _g(y, q, 1),
                                _g(y, q, 2),
                                _g(y, q, 3),
                                _g(y, q, 4),
                                _g(y, q, 5)
                            ];
                            z.some((y, z) => y !== u[z]) && (g.setOrientation(...z), u = z);
                            const A = [
                                _g(y, q, 6),
                                _g(y, q, 7),
                                _g(y, q, 8)
                            ];
                            A.some((y, z) => y !== v[z]) && (g.setPosition(...A), v = A);
                        }, r.connect(y);
                    },
                    x = a => b => {
                        b !== u[a] && (u[a] = b, g.setOrientation(...u));
                    },
                    y = a => b => {
                        b !== v[a] && (v[a] = b, g.setPosition(...v));
                    },
                    _z = (b, d, _g) => {
                        const _A = c(_k, {
                            channelCount: 1,
                            channelCountMode: 'explicit',
                            channelInterpretation: 'discrete',
                            offset: d
                        });
                        _A.connect(r, 0, b), _A.start(), Object.defineProperty(_A.offset, 'defaultValue', {
                            get: () => d
                        });
                        const B = a({
                            context: _j
                        }, s, _A.offset, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT);
                        var C, D, E, F, G, H, I;
                        return _i(B, 'value', a => () => a.call(B), a => b => {
                            try {
                                a.call(B, b);
                            } catch (a) {
                                if (9 !== a.code)
                                    throw a;
                            }
                            w(), s && _g(b);
                        }), B.cancelAndHoldAtTime = (C = B.cancelAndHoldAtTime, s ? () => {
                            throw _f();
                        } : (...a) => {
                            const J = C.apply(B, a);
                            return w(), J;
                        }), B.cancelScheduledValues = (D = B.cancelScheduledValues, s ? () => {
                            throw _f();
                        } : (...a) => {
                            const J = D.apply(B, a);
                            return w(), J;
                        }), B.exponentialRampToValueAtTime = (E = B.exponentialRampToValueAtTime, s ? () => {
                            throw _f();
                        } : (...a) => {
                            const J = E.apply(B, a);
                            return w(), J;
                        }), B.linearRampToValueAtTime = (F = B.linearRampToValueAtTime, s ? () => {
                            throw _f();
                        } : (...a) => {
                            const J = F.apply(B, a);
                            return w(), J;
                        }), B.setTargetAtTime = (G = B.setTargetAtTime, s ? () => {
                            throw _f();
                        } : (...a) => {
                            const J = G.apply(B, a);
                            return w(), J;
                        }), B.setValueAtTime = (H = B.setValueAtTime, s ? () => {
                            throw _f();
                        } : (...a) => {
                            const J = H.apply(B, a);
                            return w(), J;
                        }), B.setValueCurveAtTime = (I = B.setValueCurveAtTime, s ? () => {
                            throw _f();
                        } : (...a) => {
                            const J = I.apply(B, a);
                            return w(), J;
                        }), B;
                    };
                return {
                    forwardX: _z(0, 0, x(0)),
                    forwardY: _z(1, 0, x(1)),
                    forwardZ: _z(2, -1, x(2)),
                    positionX: _z(6, 0, y(0)),
                    positionY: _z(7, 0, y(1)),
                    positionZ: _z(8, 0, y(2)),
                    upX: _z(3, 0, x(3)),
                    upY: _z(4, 1, x(4)),
                    upZ: _z(5, 0, x(5))
                };
            })() : g;
        return {
            get forwardX() {
                return h;
            },
            get forwardY() {
                return i;
            },
            get forwardZ() {
                return j;
            },
            get positionX() {
                return k;
            },
            get positionY() {
                return l;
            },
            get positionZ() {
                return _m;
            },
            get upX() {
                return _n;
            },
            get upY() {
                return _o;
            },
            get upZ() {
                return _p;
            }
        };
    };
}), b.register('Jcy3j', function(c, d) {
    a(c.exports, 'createAudioNodeConstructor', function() {
        return _G;
    });
    var e = b('H8j0Q'),
        f = b('WecXl'),
        _g = b('C9hL5'),
        h = b('NpQL6'),
        _i = b('0J6D0'),
        _j = b('MjxEc'),
        _k = b('0JMGL'),
        l = b('yN3lw'),
        m = b('lT2wz'),
        n = b('QOzKt'),
        o = b('G+U9n'),
        p = b('CZySC'),
        q = b('FwDzM'),
        r = b('O4C4I'),
        s = b('JrumW'),
        t = b('fkCg6'),
        u = b('9fyAW'),
        v = b('NEU1a'),
        w = b('6wEyH'),
        x = b('L8EAk'),
        y = b('bJ7H1'),
        z = b('NF5ES'),
        A = b('q+H7+'),
        B = b('FEwiG'),
        C = b('PhbnW'),
        D = b('R55+9');
    const E = (a, b, c, d, e) => {
            const [F, G] = ((a, b, c, d) => {
                const {
                    activeInputs: H,
                    passiveInputs: I
                } = (0, q.getAudioNodeConnections)(b), J = (0, _k.deleteActiveInputConnection)(H[d], a, c);
                if (null === J)
                    return [
                        (0, n.deletePassiveInputConnectionToAudioNode)(I, a, c, d)[2],
                        !1
                    ];
                return [
                    J[2],
                    !0
                ];
            })(a, c, d, e);
            if (null !== F && ((0, m.deleteEventListenerOfAudioNode)(a, F), !G || b || (0, x.isPartOfACycle)(a) || (0, p.disconnectNativeAudioNodeFromNativeAudioNode)((0, t.getNativeAudioNode)(a), (0, t.getNativeAudioNode)(c), d, e)), (0, w.isActiveAudioNode)(c)) {
                const {
                    activeInputs: H
                } = (0, q.getAudioNodeConnections)(c);
                (0, A.setInternalStateToPassiveWhenNecessary)(c, H);
            }
        },
        F = (a, b, c, d) => {
            const [G, H] = ((a, b, c) => {
                const {
                    activeInputs: I,
                    passiveInputs: J
                } = (0, r.getAudioParamConnections)(b), K = (0, _k.deleteActiveInputConnection)(I, a, c);
                if (null === K)
                    return [
                        (0, o.deletePassiveInputConnectionToAudioParam)(J, a, c)[1],
                        !1
                    ];
                return [
                    K[2],
                    !0
                ];
            })(a, c, d);
            null !== G && ((0, m.deleteEventListenerOfAudioNode)(a, G), !H || b || (0, x.isPartOfACycle)(a) || (0, t.getNativeAudioNode)(a).disconnect((0, u.getNativeAudioParam)(c), d));
        },
        _G = (a, b, c, d, _k, m, n, p, A, _G, _w, _x, _y, _z, _C, _E) => class extends _G {
            get channelCount() {
                return this._nativeAudioNode.channelCount;
            }
            set channelCount(H) {
                this._nativeAudioNode.channelCount = H;
            }
            get channelCountMode() {
                return this._nativeAudioNode.channelCountMode;
            }
            set channelCountMode(H) {
                this._nativeAudioNode.channelCountMode = H;
            }
            get channelInterpretation() {
                return this._nativeAudioNode.channelInterpretation;
            }
            set channelInterpretation(H) {
                this._nativeAudioNode.channelInterpretation = H;
            }
            get context() {
                return this._context;
            }
            get numberOfInputs() {
                return this._nativeAudioNode.numberOfInputs;
            }
            get numberOfOutputs() {
                return this._nativeAudioNode.numberOfOutputs;
            }
            connect(H, I = 0, J = 0) {
                if (I < 0 || I >= this._nativeAudioNode.numberOfOutputs)
                    throw _k();
                const K = _w(this._context),
                    L = _C(K);
                if (_y(H) || _z(H))
                    throw m();
                if ((0, f.isAudioNode)(H)) {
                    const M = (0, t.getNativeAudioNode)(H);
                    try {
                        const N = (0, _j.connectNativeAudioNodeToNativeAudioNode)(this._nativeAudioNode, M, I, J),
                            O = (0, y.isPassiveAudioNode)(this);
                        (L || O) && this._nativeAudioNode.disconnect(...N), 'closed' !== this.context.state && !O && (0, y.isPassiveAudioNode)(H) && (0, z.setInternalStateToActive)(H);
                    } catch (H) {
                        if (12 === H.code)
                            throw m();
                        throw H;
                    }
                    if (b(this, H, I, J, L)) {
                        const N = A([this], H);
                        (0, C.visitEachAudioNodeOnce)(N, d(L));
                    }
                    return H;
                }
                const M = (0, u.getNativeAudioParam)(H);
                if ('playbackRate' === M.name && 1024 === M.maxValue)
                    throw n();
                try {
                    this._nativeAudioNode.connect(M, I), (L || (0, y.isPassiveAudioNode)(this)) && this._nativeAudioNode.disconnect(M, I);
                } catch (H) {
                    if (12 === H.code)
                        throw m();
                    throw H;
                }
                const N = ((H, b, I, d) => {
                    const {
                        activeInputs: O,
                        passiveInputs: P
                    } = (0, r.getAudioParamConnections)(b), {
                        outputs: Q
                    } = (0, q.getAudioNodeConnections)(H), R = (0, s.getEventListenersOfAudioNode)(H), S = Q => {
                        const T = (0, t.getNativeAudioNode)(H),
                            U = (0, u.getNativeAudioParam)(b);
                        if (Q) {
                            const V = (0, o.deletePassiveInputConnectionToAudioParam)(P, H, I);
                            (0, h.addActiveInputConnectionToAudioParam)(O, H, V, !1), d || (0, x.isPartOfACycle)(H) || T.connect(U, I);
                        } else {
                            const V = (0, l.deleteActiveInputConnectionToAudioParam)(O, H, I);
                            (0, _i.addPassiveInputConnectionToAudioParam)(P, V, !1), d || (0, x.isPartOfACycle)(H) || T.disconnect(U, I);
                        }
                    };
                    return !!(0, v.insertElementInSet)(Q, [
                        b,
                        I
                    ], H => H[0] === b && H[1] === I, !0) && (R.add(S), (0, w.isActiveAudioNode)(H) ? (0, h.addActiveInputConnectionToAudioParam)(O, H, [
                        I,
                        S
                    ], !0) : (0, _i.addPassiveInputConnectionToAudioParam)(P, [
                        H,
                        I,
                        S
                    ], !0), !0);
                })(this, H, I, L);
                if (N) {
                    const O = A([this], H);
                    (0, C.visitEachAudioNodeOnce)(O, d(L));
                }
            }
            disconnect(H, I, J) {
                let K;
                const L = _w(this._context),
                    M = _C(L);
                if (void 0 === H)
                    K = ((H, I) => {
                        const N = (0, q.getAudioNodeConnections)(H),
                            O = [];
                        for (const P of N.outputs)
                            (0, _g.isAudioNodeOutputConnection)(P) ? E(H, I, ...P) : F(H, I, ...P), O.push(P[0]);
                        return N.outputs.clear(), O;
                    })(this, M);
                else if ('number' == typeof H) {
                    if (H < 0 || H >= this.numberOfOutputs)
                        throw _k();
                    K = ((H, I, J) => {
                        const N = (0, q.getAudioNodeConnections)(H),
                            O = [];
                        for (const P of N.outputs)
                            P[1] === J && ((0, _g.isAudioNodeOutputConnection)(P) ? E(H, I, ...P) : F(H, I, ...P), O.push(P[0]), N.outputs.delete(P));
                        return O;
                    })(this, M, H);
                } else {
                    if (void 0 !== I && (I < 0 || I >= this.numberOfOutputs))
                        throw _k();
                    if ((0, f.isAudioNode)(H) && void 0 !== J && (J < 0 || J >= H.numberOfInputs))
                        throw _k();
                    if (K = ((H, I, J, K, L) => {
                            const N = (0, q.getAudioNodeConnections)(H);
                            return Array.from(N.outputs).filter(H => !(H[0] !== J || void 0 !== K && H[1] !== K || void 0 !== L && H[2] !== L)).map(J => ((0, _g.isAudioNodeOutputConnection)(J) ? E(H, I, ...J) : F(H, I, ...J), N.outputs.delete(J), J[0]));
                        })(this, M, H, I, J), 0 === K.length)
                        throw m();
                }
                for (const N of K) {
                    const O = A([this], N);
                    (0, C.visitEachAudioNodeOnce)(O, p);
                }
            }
            constructor(H, I, J, K) {
                super(J), this._context = H, this._nativeAudioNode = J;
                const L = _w(H);
                _x(L) && !0 !== c(B.testAudioNodeDisconnectMethodSupport, () => (0, B.testAudioNodeDisconnectMethodSupport)(L, _E)) && (0, D.wrapAudioNodeDisconnectMethod)(J), e.AUDIO_NODE_STORE.set(this, J), e.EVENT_LISTENERS.set(this, new Set()), 'closed' !== H.state && I && (0, z.setInternalStateToActive)(this), a(this, K, J);
            }
        };
}), b.register('WecXl', function(c, d) {
    a(c.exports, 'isAudioNode', function() {
        return _e;
    });
    const _e = a => 'context' in a;
}), b.register('C9hL5', function(c, d) {
    a(c.exports, 'isAudioNodeOutputConnection', function() {
        return _f;
    });
    var e = b('WecXl');
    const _f = a => (0, e.isAudioNode)(a[0]);
}), b.register('NpQL6', function(c, d) {
    a(c.exports, 'addActiveInputConnectionToAudioParam', function() {
        return _f;
    });
    var e = b('NEU1a');
    const _f = (a, b, [g, h], _f) => {
        (0, e.insertElementInSet)(a, [
            b,
            g,
            h
        ], a => a[0] === b && a[1] === g, _f);
    };
}), b.register('NEU1a', function(c, d) {
    a(c.exports, 'insertElementInSet', function() {
        return _e;
    });
    const _e = (a, c, d, _e) => {
        for (const f of a)
            if (d(f)) {
                if (_e)
                    return !1;
                throw Error('The set contains at least one similar element.');
            }
        return a.add(f), !0;
    };
}), b.register('0J6D0', function(c, d) {
    a(c.exports, 'addPassiveInputConnectionToAudioParam', function() {
        return _f;
    });
    var e = b('NEU1a');
    const _f = (a, [g, h, i], _f) => {
        const j = a.get(g);
        void 0 === j ? a.set(g, new Set([
            [
                h,
                i
            ]
        ])) : (0, e.insertElementInSet)(j, [
            h,
            i
        ], a => a[0] === h, _f);
    };
}), b.register('MjxEc', function(c, d) {
    a(c.exports, 'connectNativeAudioNodeToNativeAudioNode', function() {
        return _f;
    });
    var e = b('7H2g7');
    const _f = (a, b, c, d) => {
        if ((0, e.isNativeAudioNodeFaker)(b)) {
            const g = b.inputs[d];
            return a.connect(g, c, 0), [
                g,
                c,
                0
            ];
        }
        return a.connect(b, c, d), [
            b,
            c,
            d
        ];
    };
}), b.register('7H2g7', function(c, d) {
    a(c.exports, 'isNativeAudioNodeFaker', function() {
        return _e;
    });
    const _e = a => 'inputs' in a;
}), b.register('0JMGL', function(c, d) {
    a(c.exports, 'deleteActiveInputConnection', function() {
        return _e;
    });
    const _e = (a, c, d) => {
        for (const f of a)
            if (f[0] === c && f[1] === d)
                return a.delete(f), f;
        return null;
    };
}), b.register('yN3lw', function(c, d) {
    a(c.exports, 'deleteActiveInputConnectionToAudioParam', function() {
        return _f;
    });
    var e = b('IFD+w');
    const _f = (a, b, c) => (0, e.pickElementFromSet)(a, a => a[0] === b && a[1] === c);
}), b.register('lT2wz', function(c, d) {
    a(c.exports, 'deleteEventListenerOfAudioNode', function() {
        return _f;
    });
    var e = b('JrumW');
    const _f = (a, b) => {
        if (!(0, e.getEventListenersOfAudioNode)(a).delete(b))
            throw new Error('Missing the expected event listener.');
    };
}), b.register('G+U9n', function(c, d) {
    a(c.exports, 'deletePassiveInputConnectionToAudioParam', function() {
        return _g;
    });
    var e = b('6VM4W'),
        f = b('IFD+w');
    const _g = (a, b, c) => {
        const h = (0, e.getValueForKey)(a, b),
            i = (0, f.pickElementFromSet)(h, a => a[0] === c);
        return 0 === h.size && a.delete(b), i;
    };
}), b.register('CZySC', function(c, d) {
    a(c.exports, 'disconnectNativeAudioNodeFromNativeAudioNode', function() {
        return _f;
    });
    var e = b('7H2g7');
    const _f = (a, b, c, d) => {
        (0, e.isNativeAudioNodeFaker)(b) ? a.disconnect(b.inputs[d], c, 0): a.disconnect(b, c, d);
    };
}), b.register('fkCg6', function(c, d) {
    a(c.exports, 'getNativeAudioNode', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('6VM4W');
    const _g = a => (0, f.getValueForKey)(e.AUDIO_NODE_STORE, a);
}), b.register('9fyAW', function(c, d) {
    a(c.exports, 'getNativeAudioParam', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('6VM4W');
    const _g = a => (0, f.getValueForKey)(e.AUDIO_PARAM_STORE, a);
}), b.register('L8EAk', function(c, d) {
    a(c.exports, 'isPartOfACycle', function() {
        return _f;
    });
    var e = b('H8j0Q');
    const _f = a => e.CYCLE_COUNTERS.has(a);
}), b.register('bJ7H1', function(c, d) {
    a(c.exports, 'isPassiveAudioNode', function() {
        return _f;
    });
    var e = b('H8j0Q');
    const _f = a => !e.ACTIVE_AUDIO_NODE_STORE.has(a);
}), b.register('FEwiG', function(c, d) {
    a(c.exports, 'testAudioNodeDisconnectMethodSupport', function() {
        return _e;
    });
    const _e = (a, c) => new Promise(d => {
        if (null !== c)
            d(!0);
        else {
            const f = a.createScriptProcessor(256, 1, 1),
                g = a.createGain(),
                h = a.createBuffer(1, 2, 44100),
                i = h.getChannelData(0);
            i[0] = 1, i[1] = 1;
            const j = a.createBufferSource();
            j.buffer = h, j.loop = !0, j.connect(f).connect(a.destination), j.connect(g), j.disconnect(g), f.onaudioprocess = g => {
                const k = g.inputBuffer.getChannelData(0);
                Array.prototype.some.call(k, a => 1 === a) ? d(!0) : d(!1), j.stop(), f.onaudioprocess = null, j.disconnect(f), f.disconnect(a.destination);
            }, j.start();
        }
    });
}), b.register('PhbnW', function(c, d) {
    a(c.exports, 'visitEachAudioNodeOnce', function() {
        return _e;
    });
    const _e = (a, c) => {
        const f = new Map();
        for (const g of a)
            for (const h of g) {
                const i = f.get(h);
                f.set(h, void 0 === i ? 1 : i + 1);
            }
        f.forEach((h, f) => g(f, h));
    };
}), b.register('R55+9', function(c, d) {
    a(c.exports, 'wrapAudioNodeDisconnectMethod', function() {
        return _f;
    });
    var e = b('Yv1Na');
    const _f = a => {
        const g = new Map();
        var h, i;
        a.connect = (h = a.connect.bind(a), (a, j = 0, k = 0) => {
            const l = (0, e.isNativeAudioNode)(a) ? h(a, j, k) : h(a, j),
                m = g.get(a);
            return void 0 === m ? g.set(a, [{
                input: k,
                output: j
            }]) : m.every(a => a.input !== k || a.output !== j) && m.push({
                input: k,
                output: j
            }), l;
        }), a.disconnect = (j = a.disconnect, (h, k, _s) => {
            if (j.apply(a), void 0 === h)
                g.clear();
            else if ('number' == typeof h)
                for (const [l, m] of g) {
                    const n = m.filter(l => l.output !== h);
                    0 === n.length ? g.delete(l) : g.set(l, n);
                }
            else if (g.has(h))
                if (void 0 === k)
                    g.delete(h);
                else {
                    const n = g.get(h);
                    if (void 0 !== n) {
                        const o = n.filter(n => n.output !== k && (n.input !== _s || void 0 === _s));
                        0 === o.length ? g.delete(h) : g.set(h, o);
                    }
                }
            for (const [l, m] of g)
                m.forEach(g => {
                    (0, e.isNativeAudioNode)(l) ? a.connect(l, g.output, g.input): a.connect(l, g.output);
                });
        });
    };
}), b.register('Yv1Na', function(c, d) {
    a(c.exports, 'isNativeAudioNode', function() {
        return _e;
    });
    const _e = a => 'context' in a;
}), b.register('JoB7x', function(c, d) {
    a(c.exports, 'createAudioParamFactory', function() {
        return _f;
    });
    var e = b('jjKMm');
    const _f = (a, b, c, d, _f, _s, _t, _u, _y, _k, _k, _w, _x) => (_y, _z, _j, g = null, h = null) => {
        const i = new(0, e.AutomationEventList)(_j.defaultValue),
            j = _z ? d(i) : null,
            k = {
                get defaultValue() {
                    return _j.defaultValue;
                },
                get maxValue() {
                    return null === g ? _j.maxValue : g;
                },
                get minValue() {
                    return null === h ? _j.minValue : h;
                },
                get value() {
                    return _j.value;
                },
                set value(l) {
                    _j.value = l, k.setValueAtTime(l, _y.context.currentTime);
                },
                cancelAndHoldAtTime(l) {
                    if ('function' == typeof _j.cancelAndHoldAtTime)
                        null === j && i.flush(_y.context.currentTime), i.add(_f(l)), _j.cancelAndHoldAtTime(l);
                    else {
                        const m = Array.from(i).pop();
                        null === j && i.flush(_y.context.currentTime), i.add(_f(l));
                        const n = Array.from(i).pop();
                        _j.cancelScheduledValues(l), m !== n && void 0 !== n && ('exponentialRampToValue' === n.type ? _j.exponentialRampToValueAtTime(n.value, n.endTime) : 'linearRampToValue' === n.type ? _j.linearRampToValueAtTime(n.value, n.endTime) : 'setValue' === n.type ? _j.setValueAtTime(n.value, n.startTime) : 'setValueCurve' === n.type && _j.setValueCurveAtTime(n.values, n.startTime, n.duration));
                    }
                    return k;
                },
                cancelScheduledValues: a => (null === j && i.flush(_y.context.currentTime), i.add(_s(a)), _j.cancelScheduledValues(a), k),
                exponentialRampToValueAtTime(l, m) {
                    if (0 === l)
                        throw new RangeError();
                    if (!Number.isFinite(m) || m < 0)
                        throw new RangeError();
                    return null === j && i.flush(_y.context.currentTime), i.add(_t(l, m)), _j.exponentialRampToValueAtTime(l, m), k;
                },
                linearRampToValueAtTime: (a, b) => (null === j && i.flush(_y.context.currentTime), i.add(_u(a, b)), _j.linearRampToValueAtTime(a, b), k),
                setTargetAtTime: (a, b, c) => (null === j && i.flush(_y.context.currentTime), i.add(_y(a, b, c)), _j.setTargetAtTime(a, b, c), k),
                setValueAtTime: (a, b) => (null === j && i.flush(_y.context.currentTime), i.add(_k(a, b)), _j.setValueAtTime(a, b), k),
                setValueCurveAtTime(l, m, n) {
                    const o = l instanceof Float32Array ? l : new Float32Array(l);
                    if (null !== _w && 'webkitAudioContext' === _w.name) {
                        const p = m + n,
                            q = _y.context.sampleRate,
                            r = Math.ceil(m * q),
                            _s = Math.floor(p * q),
                            _t = _s - r,
                            _u = new Float32Array(_t);
                        for (let v = 0; v < _t; v += 1) {
                            const w = (o.length - 1) / n * ((r + v) / q - m),
                                x = Math.floor(w),
                                _y = Math.ceil(w);
                            _u[v] = x === _y ? o[x] : (1 - (w - x)) * o[x] + (1 - (_y - w)) * o[_y];
                        }
                        null === j && i.flush(_y.context.currentTime), i.add(_k(_u, m, n)), _j.setValueCurveAtTime(_u, m, n);
                        const w = _s / q;
                        w < v && _x(k, _u[_u.length - 1], w), _x(k, o[o.length - 1], v);
                    } else
                        null === j && i.flush(_y.context.currentTime), i.add(_k(o, m, n)), _j.setValueCurveAtTime(o, m, n);
                    return k;
                }
            };
        return c.set(k, _j), b.set(k, _y), a(k, j), k;
    };
}), b.register('MbEPo', function(c, d) {
    a(c.exports, 'createAudioParamRenderer', function() {
        return _e;
    });
    const _e = a => ({
        replay(f) {
            for (const g of a)
                if ('exponentialRampToValue' === g.type) {
                    const {
                        endTime: h,
                        value: i
                    } = g;
                    f.exponentialRampToValueAtTime(i, h);
                } else if ('linearRampToValue' === g.type) {
                const {
                    endTime: h,
                    value: i
                } = g;
                f.linearRampToValueAtTime(i, h);
            } else if ('setTarget' === g.type) {
                const {
                    startTime: h,
                    target: i,
                    timeConstant: j
                } = g;
                f.setTargetAtTime(i, h, j);
            } else if ('setValue' === g.type) {
                const {
                    startTime: h,
                    value: i
                } = g;
                f.setValueAtTime(i, h);
            } else {
                if ('setValueCurve' !== g.type)
                    throw new Error('Can\'t apply an unknown automation.');
                {
                    const {
                        duration: h,
                        startTime: i,
                        values: j
                    } = g;
                    f.setValueCurveAtTime(j, i, h);
                }
            }
        }
    });
}), b.register('wGOzT', function(c, d) {
    a(c.exports, 'createAudioWorkletNodeConstructor', function() {
        return _h;
    });
    var e = b('H8j0Q'),
        f = b('F+5Am');
    const g = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 1,
            numberOfOutputs: 1,
            parameterData: {},
            processorOptions: {}
        },
        _h = (a, b, c, d, _h, _i, _j, _k, _k, _w, _x, _y, _z, _j) => class extends b {
            get onprocessorerror() {
                return this._onprocessorerror;
            }
            set onprocessorerror(i) {
                const j = 'function' == typeof i ? _j(this, i) : null;
                this._nativeAudioWorkletNode.onprocessorerror = j;
                const k = this._nativeAudioWorkletNode.onprocessorerror;
                this._onprocessorerror = null !== k && k === j ? i : k;
            }
            get parameters() {
                return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters;
            }
            get port() {
                return this._nativeAudioWorkletNode.port;
            }
            constructor(i, _j, k) {
                var l;
                const m = _k(i),
                    n = _k(m),
                    o = _x({
                        ...g,
                        ...k
                    });
                _z(o);
                const p = e.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(m),
                    q = null == p ? void 0 : p.get(_j),
                    r = n || 'closed' !== m.state ? m : null !== (l = _j(m)) && void 0 !== l ? l : m,
                    s = _h(r, n ? null : i.baseLatency, _w, _j, q, o);
                super(i, !0, s, n ? d(_j, o, q) : null);
                const t = [];
                s.parameters.forEach((a, i) => {
                    const u = c(this, n, a);
                    t.push([
                        i,
                        u
                    ]);
                }), this._nativeAudioWorkletNode = s, this._onprocessorerror = null, this._parameters = new(0, f.ReadOnlyMap)(t), n && a(m, this);
                const {
                    activeInputs: u
                } = _i(this);
                _y(s, u);
            }
        };
}), b.register('F+5Am', function(c, d) {
    a(c.exports, 'ReadOnlyMap', function() {
        return _e;
    });
    class _e {
        get size() {
            return this._map.size;
        }
        entries() {
            return this._map.entries();
        }
        forEach(f, g = null) {
            return this._map.forEach((d, _e) => f.call(g, d, _e, this));
        }
        get(f) {
            return this._map.get(f);
        }
        has(f) {
            return this._map.has(f);
        }
        keys() {
            return this._map.keys();
        }
        values() {
            return this._map.values();
        }
        constructor(f) {
            this._map = new Map(f);
        }
    }
}), b.register('xe0Z9', function(c, d) {
    a(c.exports, 'createAudioWorkletNodeRendererFactory', function() {
        return _k;
    });
    var e = b('FcbDD'),
        f = b('UVk5T'),
        g = b('ff2BN'),
        h = b('FwDzM'),
        _i = b('9e73v'),
        _j = b('Go0EV');
    const _k = (a, b, c, d, _k, _k, _w, _x, _y, _z, _A, _B, _C, _D, _E, _u) => (_v, _w, _m) => {
        const l = new WeakMap();
        let m = null;
        const n = async (_x, n) => {
            let o = _A(_x),
                p = null;
            const q = (0, _j.isOwnedByContext)(o, n),
                r = Array.isArray(_w.outputChannelCount) ? _w.outputChannelCount : Array.from(_w.outputChannelCount);
            if (null === _B) {
                const s = r.reduce((s, b) => s + b, 0),
                    t = _k(n, {
                        channelCount: Math.max(1, s),
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        numberOfOutputs: Math.max(1, s)
                    }),
                    u = [];
                for (let v = 0; v < _x.numberOfOutputs; v += 1)
                    u.push(d(n, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: r[v]
                    }));
                const w = _w(n, {
                    channelCount: _w.channelCount,
                    channelCountMode: _w.channelCountMode,
                    channelInterpretation: _w.channelInterpretation,
                    gain: 1
                });
                w.connect = b.bind(null, u), w.disconnect = _y.bind(null, u), p = [
                    t,
                    u,
                    w
                ];
            } else
                q || (o = new _B(n, _v));
            if (l.set(n, null === p ? o : p[2]), null !== p) {
                if (null === m) {
                    if (void 0 === _m)
                        throw new Error('Missing the processor constructor.');
                    if (null === _C)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const s = _x.channelCount * _x.numberOfInputs,
                        t = void 0 === _m.parameterDescriptors ? 0 : _m.parameterDescriptors.length,
                        u = s + t,
                        v = async () => {
                            const w = new _C(u, 128 * Math.ceil(_x.context.length / 128), n.sampleRate),
                                x = [],
                                y = [];
                            for (let z = 0; z < _w.numberOfInputs; z += 1)
                                x.push(_w(w, {
                                    channelCount: _w.channelCount,
                                    channelCountMode: _w.channelCountMode,
                                    channelInterpretation: _w.channelInterpretation,
                                    gain: 1
                                })), y.push(_k(w, {
                                    channelCount: _w.channelCount,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'discrete',
                                    numberOfOutputs: _w.channelCount
                                }));
                            const A = await Promise.all(Array.from(_x.parameters.values()).map(async z => {
                                    const B = _k(w, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: z.value
                                    });
                                    return await _D(w, z, B.offset), B;
                                })),
                                B = d(w, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: Math.max(1, z + t)
                                });
                            for (let C = 0; C < _w.numberOfInputs; C += 1) {
                                x[C].connect(y[C]);
                                for (let D = 0; D < _w.channelCount; D += 1)
                                    y[C].connect(B, D, C * _w.channelCount + D);
                            }
                            for (const [D, E] of A.entries())
                                E.connect(B, 0, C + D), E.start(0);
                            return B.connect(w.destination), await Promise.all(x.map(C => _E(_x, w, C))), _u(w);
                        };
                    m = (async (s, t, u, d, v, _k, _k) => {
                        const _w = null === t ? 128 * Math.ceil(s.context.length / 128) : t.length,
                            _x = d.channelCount * d.numberOfInputs,
                            _y = v.reduce((s, t) => s + t, 0),
                            _z = 0 === _y ? null : u.createBuffer(_y, _w, u.sampleRate);
                        if (void 0 === _k)
                            throw new Error('Missing the processor constructor.');
                        const _A = (0, h.getAudioNodeConnections)(s),
                            _B = await (0, _i.getAudioWorkletProcessor)(u, s),
                            _C = (0, g.createNestedArrays)(d.numberOfInputs, d.channelCount),
                            _D = (0, g.createNestedArrays)(d.numberOfOutputs, v),
                            _E = Array.from(s.parameters.keys()).reduce((s, t) => ({
                                ...s,
                                [t]: new Float32Array(128)
                            }), {});
                        for (let F = 0; F < _w; F += 128) {
                            if (d.numberOfInputs > 0 && null !== t)
                                for (let G = 0; G < d.numberOfInputs; G += 1)
                                    for (let H = 0; H < d.channelCount; H += 1)
                                        (0, e.copyFromChannel)(t, _C[G], H, H, F);
                            void 0 !== _k.parameterDescriptors && null !== t && _k.parameterDescriptors.forEach(({
                                name: G
                            }, u) => {
                                (0, e.copyFromChannel)(t, _E, G, _x + u, F);
                            });
                            for (let H = 0; H < d.numberOfInputs; H += 1)
                                for (let I = 0; I < v[H]; I += 1)
                                    0 === _D[H][I].byteLength && (_D[H][I] = new Float32Array(128));
                            try {
                                const J = _C.map((J, I) => 0 === _A.activeInputs[I].size ? [] : J),
                                    K = _k(F / u.sampleRate, u.sampleRate, () => _B.process(J, _D, _E));
                                if (null !== _z)
                                    for (let L = 0, M = 0; L < d.numberOfOutputs; L += 1) {
                                        for (let N = 0; N < v[L]; N += 1)
                                            (0, f.copyToChannel)(_z, _D[L], N, M + N, F);
                                        M += v[L];
                                    }
                                if (!K)
                                    break;
                            } catch (I) {
                                H.dispatchEvent(new ErrorEvent('processorerror', {
                                    colno: I.colno,
                                    filename: I.filename,
                                    lineno: I.lineno,
                                    message: I.message
                                }));
                                break;
                            }
                        }
                        return _z;
                    })(_m, 0 === u ? null : await v(), n, _w, r, _m, _h);
                }
                const s = await m,
                    t = c(n, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: 'max',
                        channelInterpretation: 'speakers',
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }),
                    [u, v, w] = p;
                null !== s && (t.buffer = s, t.start(0)), t.connect(u);
                for (let x = 0, y = 0; x < _m.numberOfOutputs; x += 1) {
                    const z = v[x];
                    for (let A = 0; A < r[x]; A += 1)
                        u.connect(z, y + A, A);
                    y += r[x];
                }
                return w;
            }
            if (q)
                for (const [s, t] of _m.parameters.entries())
                    await a(n, t, o.parameters.get(s));
            else
                for (const [u, v] of _m.parameters.entries())
                    await _l(n, v, o.parameters.get(u));
            return await _t(_m, n, o), o;
        };
        return {
            render(o, p) {
                _m(p, o);
                const q = l.get(p);
                return void 0 !== q ? Promise.resolve(q) : n(o, p);
            }
        };
    };
}), b.register('FcbDD', function(c, d) {
    function e(f, g, h, i, j) {
        if ('function' == typeof f.copyFromChannel)
            0 === g[h].byteLength && (g[h] = new Float32Array(128)), f.copyFromChannel(g[h], i, j);
        else {
            const k = f.getChannelData(i);
            if (0 === g[h].byteLength)
                g[h] = k.slice(j, j + 128);
            else {
                const l = new Float32Array(k.buffer, j * Float32Array.BYTES_PER_ELEMENT, 128);
                g[h].set(l);
            }
        }
    }
    a(c.exports, 'copyFromChannel', function() {
        return e;
    });
}), b.register('UVk5T', function(c, d) {
    a(c.exports, 'copyToChannel', function() {
        return _e;
    });
    const _e = (a, c, d, _e, _i) => {
        'function' == typeof a.copyToChannel ? 0 !== c[d].byteLength && a.copyToChannel(c[d], _e, _i) : 0 !== c[d].byteLength && a.getChannelData(_e).set(c[d], _i);
    };
}), b.register('ff2BN', function(c, d) {
    a(c.exports, 'createNestedArrays', function() {
        return _e;
    });
    const _e = (a, c) => {
        const f = [];
        for (let g = 0; g < a; g += 1) {
            const h = [],
                _i = 'number' == typeof c ? c : c[g];
            for (let j = 0; j < _i; j += 1)
                h.push(new Float32Array(128));
            f.push(h);
        }
        return f;
    };
}), b.register('9e73v', function(c, d) {
    a(c.exports, 'getAudioWorkletProcessor', function() {
        return _h;
    });
    var e = b('H8j0Q'),
        f = b('fkCg6'),
        g = b('6VM4W');
    const _h = (a, b) => {
        const i = (0, g.getValueForKey)(e.NODE_TO_PROCESSOR_MAPS, a),
            j = (0, f.getNativeAudioNode)(b);
        return (0, g.getValueForKey)(i, j);
    };
}), b.register('FfnBa', function(c, d) {
    a(c.exports, 'createBaseAudioContextConstructor', function() {
        return _e;
    });
    const _e = (a, c, d, _e, _e, _f, _g, _h, _i, _j, _j, _k, _l, _m, _l, _h, _p, _q, _r, _l) => class extends _l {
        get audioWorklet() {
            return this._audioWorklet;
        }
        createAnalyser() {
            return new c(this);
        }
        createBiquadFilter() {
            return new _e(this);
        }
        createBuffer(f, g, h) {
            return new d({
                length: g,
                numberOfChannels: f,
                sampleRate: h
            });
        }
        createBufferSource() {
            return new _e(this);
        }
        createChannelMerger(f = 6) {
            return new _f(this, {
                numberOfInputs: f
            });
        }
        createChannelSplitter(f = 6) {
            return new _g(this, {
                numberOfOutputs: f
            });
        }
        createConstantSource() {
            return new _h(this);
        }
        createConvolver() {
            return new _i(this);
        }
        createDelay(f = 1) {
            return new _j(this, {
                maxDelayTime: f
            });
        }
        createDynamicsCompressor() {
            return new _k(this);
        }
        createGain() {
            return new _l(this);
        }
        createIIRFilter(f, g) {
            return new _m(this, {
                feedback: g,
                feedforward: f
            });
        }
        createOscillator() {
            return new _h(this);
        }
        createPanner() {
            return new _p(this);
        }
        createPeriodicWave(f, g, h = {
            disableNormalization: !1
        }) {
            return new _q(this, {
                ...h,
                imag: g,
                real: f
            });
        }
        createStereoPanner() {
            return new _r(this);
        }
        createWaveShaper() {
            return new _l(this);
        }
        decodeAudioData(f, g, h) {
            return _j(this._nativeContext, f).then(f => ('function' == typeof g && g(f), f), f => {
                throw 'function' == typeof h && h(f), f;
            });
        }
        constructor(f, g) {
            super(f, g), this._nativeContext = f, this._audioWorklet = void 0 === a ? void 0 : {
                addModule: (f, g) => a(this, f, g)
            };
        }
    };
}), b.register('5uKT/', function(c, d) {
    a(c.exports, 'createBiquadFilterNodeConstructor', function() {
        return _g;
    });
    var _e = b('QulkM');
    const _f = {
            Q: 1,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 350,
            gain: 0,
            type: 'lowpass'
        },
        _g = (a, b, c, d, _g, _h, _i, _j) => class extends a {
            get detune() {
                return this._detune;
            }
            get frequency() {
                return this._frequency;
            }
            get gain() {
                return this._gain;
            }
            get Q() {
                return this._Q;
            }
            get type() {
                return this._nativeBiquadFilterNode.type;
            }
            set type(h) {
                this._nativeBiquadFilterNode.type = h;
            }
            getFrequencyResponse(h, i, j) {
                try {
                    this._nativeBiquadFilterNode.getFrequencyResponse(h, i, j);
                } catch (h) {
                    if (11 === h.code)
                        throw d();
                    throw h;
                }
                if (h.length !== i.length || i.length !== j.length)
                    throw d();
            }
            constructor(h, i) {
                const _j = _h(h),
                    _k = {
                        ..._f,
                        ...i
                    },
                    _l = _g(_j, _k),
                    _m = _i(_j);
                super(h, !1, _l, _m ? c() : null), this._Q = b(this, _m, _l.Q, _e.MOST_POSITIVE_SINGLE_FLOAT, _e.MOST_NEGATIVE_SINGLE_FLOAT), this._detune = b(this, _m, _l.detune, 1200 * Math.log2(_e.MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(_e.MOST_POSITIVE_SINGLE_FLOAT)), this._frequency = b(this, _m, _l.frequency, h.sampleRate / 2, 0), this._gain = b(this, _m, _l.gain, 40 * Math.log10(_e.MOST_POSITIVE_SINGLE_FLOAT), _e.MOST_NEGATIVE_SINGLE_FLOAT), this._nativeBiquadFilterNode = _l, _j(this, 1);
            }
        };
}), b.register('A0FnK', function(c, d) {
    a(c.exports, 'createBiquadFilterNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c, d, _f) => () => {
        const g = new WeakMap();
        return {
            render(_h, _i) {
                const _j = g.get(_i);
                return void 0 !== _j ? Promise.resolve(_j) : (async (_h, _i) => {
                    let k = c(_h);
                    const l = (0, e.isOwnedByContext)(k, _i);
                    if (!l) {
                        const m = {
                            Q: k.Q.value,
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            detune: k.detune.value,
                            frequency: k.frequency.value,
                            gain: k.gain.value,
                            type: k.type
                        };
                        k = b(_i, m);
                    }
                    return g.set(_i, k), l ? (await a(_i, _h.Q, k.Q), await a(_i, _h.detune, k.detune), await a(_i, _h.frequency, k.frequency), await a(_i, _h.gain, k.gain)) : (await d(_i, _h.Q, k.Q), await d(_i, _h.detune, k.detune), await d(_i, _h.frequency, k.frequency), await d(_i, _h.gain, k.gain)), await _f(_h, _i, k), k;
                })(_h, _i);
            }
        };
    };
}), b.register('+Mcfq', function(c, d) {
    a(c.exports, 'createCacheTestResult', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e) => {
        const f = c.get(d);
        if (void 0 !== f)
            return f;
        const g = a.get(d);
        if (void 0 !== g)
            return g;
        try {
            const h = _e();
            return h instanceof Promise ? (a.set(d, h), h.catch(() => !1).then(_e => (a.delete(d), c.set(d, _e), _e))) : (c.set(d, h), h);
        } catch {
            return c.set(d, !1), !1;
        }
    };
}), b.register('JXWfD', function(c, d) {
    a(c.exports, 'createChannelMergerNodeConstructor', function() {
        return _f;
    });
    const e = {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 6
        },
        _f = (a, c, d, _f, _f) => class extends a {
            constructor(g, h) {
                const i = _f(g),
                    j = {
                        ...e,
                        ...h
                    };
                super(g, !1, d(i, j), _f(i) ? c() : null);
            }
        };
}), b.register('YtOtf', function(c, d) {
    a(c.exports, 'createChannelMergerNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c) => () => {
        const g = new WeakMap();
        return {
            render(h, i) {
                const j = g.get(i);
                return void 0 !== j ? Promise.resolve(j) : (async (h, i) => {
                    let k = b(h);
                    if (!(0, e.isOwnedByContext)(k, i)) {
                        const l = {
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            numberOfInputs: k.numberOfInputs
                        };
                        k = a(i, l);
                    }
                    return g.set(i, k), await c(h, i, k), k;
                })(h, i);
            }
        };
    };
}), b.register('atgpf', function(c, d) {
    a(c.exports, 'createChannelSplitterNodeConstructor', function() {
        return _f;
    });
    const e = {
            channelCount: 6,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: 6
        },
        _f = (a, c, d, _f, _f, _i) => class extends a {
            constructor(g, h) {
                const i = _f(g),
                    j = _i({
                        ...e,
                        ...h
                    });
                super(g, !1, d(i, j), _f(i) ? c() : null);
            }
        };
}), b.register('oRfdP', function(c, d) {
    a(c.exports, 'createChannelSplitterNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c) => () => {
        const g = new WeakMap();
        return {
            render(h, _i) {
                const j = g.get(_i);
                return void 0 !== j ? Promise.resolve(j) : (async (h, _i) => {
                    let k = b(h);
                    if (!(0, e.isOwnedByContext)(k, _i)) {
                        const l = {
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            numberOfOutputs: k.numberOfOutputs
                        };
                        k = a(_i, l);
                    }
                    return g.set(_i, k), await c(h, _i, k), k;
                })(h, _i);
            }
        };
    };
}), b.register('+UHex', function(c, d) {
    a(c.exports, 'createConnectAudioParam', function() {
        return _e;
    });
    const _e = a => (c, d, _e) => a(d, c, _e);
}), b.register('bIVcd', function(c, d) {
    a(c.exports, 'createConnectMultipleOutputs', function() {
        return _f;
    });
    var e = b('Yv1Na');
    const _f = a => (b, c, g = 0, h = 0) => {
        const i = b[g];
        if (void 0 === i)
            throw a();
        return (0, e.isNativeAudioNode)(c) ? i.connect(c, 0, h) : i.connect(c, 0);
    };
}), b.register('22eDl', function(c, d) {
    a(c.exports, 'createConnectedNativeAudioBufferSourceNodeFactory', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        const f = a(c, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            g = c.createBuffer(1, 2, 44100);
        return f.buffer = g, f.loop = !0, f.connect(d), f.start(), () => {
            f.stop(), f.disconnect(d);
        };
    };
}), b.register('XK2if', function(c, d) {
    a(c.exports, 'createConstantSourceNodeConstructor', function() {
        return _j;
    });
    var e = b('QulkM'),
        f = b('6wEyH'),
        g = b('NF5ES'),
        h = b('qYGZ8');
    const i = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            offset: 1
        },
        _j = (a, b, c, d, _j, _k, _o) => class extends a {
            get offset() {
                return this._offset;
            }
            get onended() {
                return this._onended;
            }
            set onended(k) {
                const l = 'function' == typeof k ? _o(this, k) : null;
                this._nativeConstantSourceNode.onended = l;
                const m = this._nativeConstantSourceNode.onended;
                this._onended = null !== m && m === l ? k : m;
            }
            start(k = 0) {
                if (this._nativeConstantSourceNode.start(k), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = k), 'closed' !== this.context.state) {
                    (0, g.setInternalStateToActive)(this);
                    const l = () => {
                        this._nativeConstantSourceNode.removeEventListener('ended', l), (0, f.isActiveAudioNode)(this) && (0, h.setInternalStateToPassive)(this);
                    };
                    this._nativeConstantSourceNode.addEventListener('ended', l);
                }
            }
            stop(k = 0) {
                this._nativeConstantSourceNode.stop(k), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = k);
            }
            constructor(k, l) {
                const m = _j(k),
                    n = {
                        ...i,
                        ...l
                    },
                    _o = d(m, n),
                    p = _k(m),
                    q = p ? c() : null;
                super(k, !1, _o, q), this._constantSourceNodeRenderer = q, this._nativeConstantSourceNode = _o, this._offset = b(this, p, _o.offset, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._onended = null;
            }
        };
}), b.register('u3FUD', function(c, d) {
    a(c.exports, 'createConstantSourceNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c, d, _f) => () => {
        const g = new WeakMap();
        let h = null,
            i = null;
        return {
            set start(j) {
                h = j;
            },
            set stop(j) {
                i = j;
            },
            render(j, _k) {
                const l = g.get(_k);
                return void 0 !== l ? Promise.resolve(l) : (async (j, _k) => {
                    let m = c(j);
                    const n = (0, e.isOwnedByContext)(m, _k);
                    if (!n) {
                        const o = {
                            channelCount: m.channelCount,
                            channelCountMode: m.channelCountMode,
                            channelInterpretation: m.channelInterpretation,
                            offset: m.offset.value
                        };
                        m = b(_k, o), null !== h && m.start(h), null !== i && m.stop(i);
                    }
                    return g.set(_k, m), n ? await a(_k, j.offset, m.offset) : await d(_k, j.offset, m.offset), await _f(j, _k, m), m;
                })(j, _k);
            }
        };
    };
}), b.register('HavP+', function(c, d) {
    a(c.exports, 'createConvertNumberToUnsignedLong', function() {
        return _e;
    });
    const _e = a => c => (a[0] = c, a[0]);
}), b.register('CHLaj', function(c, d) {
    a(c.exports, 'createConvolverNodeConstructor', function() {
        return _f;
    });
    const e = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            disableNormalization: !1
        },
        _f = (a, c, d, _f, _f, _g) => class extends a {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeConvolverNode.buffer;
            }
            set buffer(g) {
                if (this._nativeConvolverNode.buffer = g, null === g && null !== this._nativeConvolverNode.buffer) {
                    const h = this._nativeConvolverNode.context;
                    this._nativeConvolverNode.buffer = h.createBuffer(1, 1, h.sampleRate), this._isBufferNullified = !0, _g(this, 0);
                } else
                    this._isBufferNullified = !1, _g(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration);
            }
            get normalize() {
                return this._nativeConvolverNode.normalize;
            }
            set normalize(g) {
                this._nativeConvolverNode.normalize = g;
            }
            constructor(g, h) {
                const i = _f(g),
                    j = {
                        ...e,
                        ...h
                    },
                    k = d(i, j);
                super(g, !1, k, _f(i) ? c() : null), this._isBufferNullified = !1, this._nativeConvolverNode = k, null !== j.buffer && _g(this, j.buffer.duration);
            }
        };
}), b.register('yf2tu', function(c, d) {
    a(c.exports, 'createConvolverNodeRendererFactory', function() {
        return _g;
    });
    var e = b('7H2g7'),
        _f = b('Go0EV');
    const _g = (a, b, c) => () => {
        const h = new WeakMap();
        return {
            render(i, j) {
                const k = h.get(j);
                return void 0 !== k ? Promise.resolve(k) : (async (i, j) => {
                    let l = b(i);
                    if (!(0, _f.isOwnedByContext)(l, j)) {
                        const m = {
                            buffer: l.buffer,
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            disableNormalization: !l.normalize
                        };
                        l = a(j, m);
                    }
                    return h.set(j, l), (0, e.isNativeAudioNodeFaker)(l) ? await c(i, j, l.inputs[0]) : await c(i, j, l), l;
                })(i, j);
            }
        };
    };
}), b.register('SJGVa', function(c, d) {
    a(c.exports, 'createCreateNativeOfflineAudioContext', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e, _e) => {
        if (null === c)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        try {
            return new c(d, _e, _e);
        } catch (c) {
            if ('SyntaxError' === c.name)
                throw a();
            throw c;
        }
    };
}), b.register('aRxq5', function(c, d) {
    a(c.exports, 'createDataCloneError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'DataCloneError');
}), b.register('uGrX9', function(c, d) {
    a(c.exports, 'createDecodeAudioData', function() {
        return _g;
    });
    var _e = b('SCEmq'),
        f = b('Xqv6q');
    const _g = (a, b, c, d, _g, _j, _h, _i, _j, _g, _h) => (_i, _l) => {
        const _h = _h(_i) ? _i : _j(_i);
        if (_g.has(_l)) {
            const i = c();
            return Promise.reject(i);
        }
        try {
            _g.add(_l);
        } catch {}
        return b(_j, () => _j(_h)) ? _h.decodeAudioData(_l).then(c => ((0, _e.detachArrayBuffer)(_l).catch(() => {}), b(_i, () => _i(c)) || _h(c), a.add(c), c)) : new Promise((b, c) => {
            const i = async () => {
                try {
                    await (0, _e.detachArrayBuffer)(_l);
                } catch {}
            }, _j = a => {
                c(a), i();
            };
            try {
                _h.decodeAudioData(_l, c => {
                    'function' != typeof c.copyFromChannel && (_g(c), (0, f.wrapAudioBufferGetChannelDataMethod)(c)), a.add(c), i().then(() => b(c));
                }, a => {
                    _j(null === a ? d() : a);
                });
            } catch (a) {
                _j(a);
            }
        });
    };
}), b.register('SCEmq', function(c, d) {
    a(c.exports, 'detachArrayBuffer', function() {
        return _e;
    });
    const _e = a => {
        const {
            port1: f,
            port2: g
        } = new MessageChannel();
        return new Promise(_e => {
            const h = () => {
                g.onmessage = null, f.close(), g.close(), _e();
            };
            g.onmessage = () => h();
            try {
                f.postMessage(a, [a]);
            } finally {
                h();
            }
        });
    };
}), b.register('06CWL', function(c, d) {
    a(c.exports, 'createDecrementCycleCounter', function() {
        return _f;
    });
    var e = b('C9hL5');
    const _f = (a, b, c, d, _f, _k, _g, _h) => (_i, _j) => {
        const _g = b.get(_i);
        if (void 0 === _g)
            throw new Error('Missing the expected cycle count.');
        const _h = _k(_i.context),
            _i = _h(_h);
        if (_g === _j) {
            if (b.delete(_i), !_i && _g(_i)) {
                const j = d(_i),
                    {
                        outputs: _k
                    } = c(_i);
                for (const l of _k)
                    if ((0, e.isAudioNodeOutputConnection)(l)) {
                        const m = d(l[0]);
                        a(j, m, l[1], l[2]);
                    } else {
                        const m = _f(l[0]);
                        j.connect(m, l[1]);
                    }
            }
        } else
            b.set(_i, _g - _j);
    };
}), b.register('ISjrK', function(c, d) {
    a(c.exports, 'createDelayNodeConstructor', function() {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            delayTime: 0,
            maxDelayTime: 1
        },
        _f = (a, c, d, _f, _f, _g, _g) => class extends a {
            get delayTime() {
                return this._delayTime;
            }
            constructor(g, _h) {
                const _i = _f(g),
                    _j = {
                        ...e,
                        ..._h
                    },
                    k = _f(_i, _j),
                    l = _g(_i);
                super(g, !1, k, l ? d(_j.maxDelayTime) : null), this._delayTime = c(this, l, k.delayTime), _g(this, _j.maxDelayTime);
            }
        };
}), b.register('QK3kB', function(c, d) {
    a(c.exports, 'createDelayNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c, d, _f) => _g => {
        const _g = new WeakMap();
        return {
            render(h, i) {
                const j = _g.get(i);
                return void 0 !== j ? Promise.resolve(j) : (async (h, i) => {
                    let k = c(h);
                    const l = (0, e.isOwnedByContext)(k, i);
                    if (!l) {
                        const m = {
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            delayTime: k.delayTime.value,
                            maxDelayTime: _g
                        };
                        k = b(i, m);
                    }
                    return _g.set(i, k), l ? await a(i, h.delayTime, k.delayTime) : await d(i, h.delayTime, k.delayTime), await _f(h, i, k), k;
                })(h, i);
            }
        };
    };
}), b.register('m1F0R', function(c, d) {
    a(c.exports, 'createDeleteActiveInputConnectionToAudioNode', function() {
        return _e;
    });
    const _e = a => (c, d, _e, _e) => a(c[_e], a => a[0] === d && a[1] === _e);
}), b.register('y40Yo', function(c, d) {
    a(c.exports, 'createDeleteUnrenderedAudioWorkletNode', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        a(c).delete(d);
    };
}), b.register('fCp/b', function(c, d) {
    a(c.exports, 'createDetectCycles', function() {
        return _g;
    });
    var _e = b('WecXl'),
        f = b('FhpnH');
    const _g = (a, b, c) => function d(h, i) {
        const j = (0, _e.isAudioNode)(i) ? i : c(a, i);
        if ((0, f.isDelayNode)(j))
            return [];
        if (h[0] === j)
            return [h];
        if (h.includes(j))
            return [];
        const {
            outputs: k
        } = b(j);
        return Array.from(k).map(a => d([
            ...h,
            j
        ], a[0])).reduce((a, b) => a.concat(b), []);
    };
}), b.register('FhpnH', function(c, d) {
    a(c.exports, 'isDelayNode', function() {
        return _e;
    });
    const _e = a => 'delayTime' in a;
}), b.register('0X3VT', function(c, d) {
    a(c.exports, 'createDisconnectMultipleOutputs', function() {
        return _g;
    });
    var e = b('Yv1Na');
    const f = (a, b, c) => {
            const g = b[c];
            if (void 0 === g)
                throw a();
            return g;
        },
        _g = a => (b, c, d, h = 0) => void 0 === c ? b.forEach(a => a.disconnect()) : 'number' == typeof c ? f(a, b, c).disconnect() : (0, e.isNativeAudioNode)(c) ? void 0 === d ? b.forEach(a => a.disconnect(c)) : void 0 === h ? f(a, b, d).disconnect(c, 0) : f(a, b, d).disconnect(c, 0, h) : void 0 === d ? b.forEach(a => a.disconnect(c)) : f(a, b, d).disconnect(c, 0);
}), b.register('TpWra', function(c, d) {
    a(c.exports, 'createDynamicsCompressorNodeConstructor', function() {
        return _f;
    });
    const e = {
            attack: 0.003,
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            knee: 30,
            ratio: 12,
            release: 0.25,
            threshold: -24
        },
        _f = (a, c, d, _f, _h, _g, _h, _i) => class extends a {
            get attack() {
                return this._attack;
            }
            get channelCount() {
                return this._nativeDynamicsCompressorNode.channelCount;
            }
            set channelCount(g) {
                const h = this._nativeDynamicsCompressorNode.channelCount;
                if (this._nativeDynamicsCompressorNode.channelCount = g, g > 2)
                    throw this._nativeDynamicsCompressorNode.channelCount = h, _h();
            }
            get channelCountMode() {
                return this._nativeDynamicsCompressorNode.channelCountMode;
            }
            set channelCountMode(g) {
                const h = this._nativeDynamicsCompressorNode.channelCountMode;
                if (this._nativeDynamicsCompressorNode.channelCountMode = g, 'max' === g)
                    throw this._nativeDynamicsCompressorNode.channelCountMode = h, _h();
            }
            get knee() {
                return this._knee;
            }
            get ratio() {
                return this._ratio;
            }
            get reduction() {
                return 'number' == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction;
            }
            get release() {
                return this._release;
            }
            get threshold() {
                return this._threshold;
            }
            constructor(g, _h) {
                const i = _g(g),
                    j = {
                        ...e,
                        ..._h
                    },
                    k = _f(i, j),
                    l = _h(i);
                super(g, !1, k, l ? d() : null), this._attack = c(this, l, k.attack), this._knee = c(this, l, k.knee), this._nativeDynamicsCompressorNode = k, this._ratio = c(this, l, k.ratio), this._release = c(this, l, k.release), this._threshold = c(this, l, k.threshold), _i(this, 0.006);
            }
        };
}), b.register('PR62L', function(c, d) {
    a(c.exports, 'createDynamicsCompressorNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c, d, _f) => () => {
        const _g = new WeakMap();
        return {
            render(_h, _i) {
                const j = _g.get(_i);
                return void 0 !== j ? Promise.resolve(j) : (async (_h, _i) => {
                    let k = c(_h);
                    const l = (0, e.isOwnedByContext)(k, _i);
                    if (!l) {
                        const m = {
                            attack: k.attack.value,
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            knee: k.knee.value,
                            ratio: k.ratio.value,
                            release: k.release.value,
                            threshold: k.threshold.value
                        };
                        k = b(_i, m);
                    }
                    return _g.set(_i, k), l ? (await a(_i, _h.attack, k.attack), await a(_i, _h.knee, k.knee), await a(_i, _h.ratio, k.ratio), await a(_i, _h.release, k.release), await a(_i, _h.threshold, k.threshold)) : (await d(_i, _h.attack, k.attack), await d(_i, _h.knee, k.knee), await d(_i, _h.ratio, k.ratio), await d(_i, _h.release, k.release), await d(_i, _h.threshold, k.threshold)), await _f(_h, _i, k), k;
                })(_h, _i);
            }
        };
    };
}), b.register('caL7K', function(c, d) {
    a(c.exports, 'createEncodingError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'EncodingError');
}), b.register('fOOOx', function(c, d) {
    a(c.exports, 'createEvaluateSource', function() {
        return _e;
    });
    const _e = a => c => new Promise((d, _e) => {
        if (null === a)
            return void _e(new SyntaxError());
        const f = a.document.head;
        if (null === f)
            _e(new SyntaxError());
        else {
            const g = a.document.createElement('script'),
                h = new Blob([c], {
                    type: 'application/javascript'
                }),
                i = URL.createObjectURL(h),
                j = a.onerror,
                k = () => {
                    a.onerror = j, URL.revokeObjectURL(i);
                };
            a.onerror = (c, d, f, g, h) => d === i || d === a.location.href && 1 === f && 1 === g ? (k(), _e(h), !1) : null !== j ? j(c, d, f, g, h) : void 0, g.onerror = () => {
                k(), _e(new SyntaxError());
            }, g.onload = () => {
                k(), d();
            }, g.src = i, g.type = 'module', f.appendChild(g);
        }
    });
}), b.register('PqVHf', function(c, d) {
    a(c.exports, 'createEventTargetConstructor', function() {
        return _e;
    });
    const _e = a => class {
        addEventListener(f, g, h) {
            if (null !== g) {
                let i = this._listeners.get(g);
                void 0 === i && (i = a(this, g), 'function' == typeof g && this._listeners.set(g, i)), this._nativeEventTarget.addEventListener(f, i, h);
            }
        }
        dispatchEvent(f) {
            return this._nativeEventTarget.dispatchEvent(f);
        }
        removeEventListener(f, g, h) {
            const i = null === g ? void 0 : this._listeners.get(g);
            this._nativeEventTarget.removeEventListener(f, void 0 === i ? null : i, h);
        }
        constructor(f) {
            this._nativeEventTarget = f, this._listeners = new WeakMap();
        }
    };
}), b.register('cL63r', function(c, d) {
    a(c.exports, 'createExposeCurrentFrameAndCurrentTime', function() {
        return _e;
    });
    const _e = a => (c, d, _e) => {
        Object.defineProperties(a, {
            currentFrame: {
                configurable: !0,
                get: () => Math.round(c * d)
            },
            currentTime: {
                configurable: !0,
                get: () => c
            }
        });
        try {
            return _e();
        } finally {
            null !== a && (delete a.currentFrame, delete a.currentTime);
        }
    };
}), b.register('PUeZb', function(c, d) {
    a(c.exports, 'createFetchSource', function() {
        return _e;
    });
    const _e = a => async c => {
        try {
            const f = await fetch(c);
            if (f.ok)
                return [
                    await f.text(),
                    f.url
                ];
        } catch {}
        throw a();
    };
}), b.register('DSKiM', function(c, d) {
    a(c.exports, 'createGainNodeConstructor', function() {
        return _g;
    });
    var e = b('QulkM');
    const f = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            gain: 1
        },
        _g = (a, b, c, d, _g, _h) => class extends a {
            get gain() {
                return this._gain;
            }
            constructor(h, i) {
                const j = _g(h),
                    k = {
                        ...f,
                        ...i
                    },
                    l = d(j, k),
                    m = _h(j);
                super(h, !1, l, m ? c() : null), this._gain = b(this, m, l.gain, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), b.register('VQOQz', function(c, d) {
    a(c.exports, 'createGainNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c, d, _f) => () => {
        const g = new WeakMap();
        return {
            render(_h, i) {
                const j = g.get(i);
                return void 0 !== j ? Promise.resolve(j) : (async (_h, i) => {
                    let k = c(_h);
                    const l = (0, e.isOwnedByContext)(k, i);
                    if (!l) {
                        const m = {
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            gain: k.gain.value
                        };
                        k = b(i, m);
                    }
                    return g.set(i, k), l ? await a(i, _h.gain, k.gain) : await d(i, _h.gain, k.gain), await _f(_h, i, k), k;
                })(_h, i);
            }
        };
    };
}), b.register('CYBrZ', function(c, d) {
    a(c.exports, 'createGetActiveAudioWorkletNodeInputs', function() {
        return _e;
    });
    const _e = (a, c) => d => c(a, d);
}), b.register('NbGEC', function(c, d) {
    a(c.exports, 'createGetAudioNodeRenderer', function() {
        return _e;
    });
    const _e = a => c => {
        const f = a(c);
        if (null === f.renderer)
            throw new Error('Missing the renderer of the given AudioNode in the audio graph.');
        return f.renderer;
    };
}), b.register('hT+6d', function(c, d) {
    a(c.exports, 'createGetAudioNodeTailTime', function() {
        return _e;
    });
    const _e = a => c => {
        var f;
        return null !== (f = a.get(c)) && void 0 !== f ? f : 0;
    };
}), b.register('JvicU', function(c, d) {
    a(c.exports, 'createGetAudioParamRenderer', function() {
        return _e;
    });
    const _e = a => c => {
        const f = a(c);
        if (null === f.renderer)
            throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
        return f.renderer;
    };
}), b.register('z6kgi', function(c, d) {
    a(c.exports, 'createGetBackupOfflineAudioContext', function() {
        return _e;
    });
    const _e = a => c => a.get(c);
}), b.register('r03vy', function(c, d) {
    a(c.exports, 'createGetNativeContext', function() {
        return _f;
    });
    var e = b('Ep+/d');
    const _f = a => b => {
        const g = a.get(b);
        if (void 0 === g)
            throw (0, e.createInvalidStateError)();
        return g;
    };
}), b.register('Ep+/d', function(c, d) {
    a(c.exports, 'createInvalidStateError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'InvalidStateError');
}), b.register('jShmk', function(c, d) {
    a(c.exports, 'createGetOrCreateBackupOfflineAudioContext', function() {
        return _e;
    });
    const _e = (a, c) => d => {
        let f = a.get(d);
        if (void 0 !== f)
            return f;
        if (null === c)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        return f = new c(1, 1, 44100), a.set(d, f), f;
    };
}), b.register('e77tk', function(c, d) {
    a(c.exports, 'createGetUnrenderedAudioWorkletNodes', function() {
        return _e;
    });
    const _e = a => c => {
        const f = a.get(c);
        if (void 0 === f)
            throw new Error('The context has no set of AudioWorkletNodes.');
        return f;
    };
}), b.register('zKiU8', function(c, d) {
    a(c.exports, 'createIIRFilterNodeConstructor', function() {
        return _g;
    });
    var e = b('4M1b2');
    const f = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers'
        },
        _g = (a, b, c, d, _g, _q) => class extends a {
            getFrequencyResponse(h, i, j) {
                return this._nativeIIRFilterNode.getFrequencyResponse(h, i, j);
            }
            constructor(h, i) {
                const j = d(h),
                    k = _g(j),
                    l = {
                        ...f,
                        ...i
                    },
                    m = b(j, k ? null : h.baseLatency, l);
                super(h, !1, m, k ? c(l.feedback, l.feedforward) : null), (0, e.wrapIIRFilterNodeGetFrequencyResponseMethod)(m), this._nativeIIRFilterNode = m, _q(this, 1);
            }
        };
}), b.register('4M1b2', function(c, d) {
    a(c.exports, 'wrapIIRFilterNodeGetFrequencyResponseMethod', function() {
        return _f;
    });
    var e = b('YQMJR');
    const _f = a => {
        var g;
        a.getFrequencyResponse = (g = a.getFrequencyResponse, (c, d, _f) => {
            if (c.length !== d.length || d.length !== _f.length)
                throw (0, e.createInvalidAccessError)();
            return g.call(a, c, d, _f);
        });
    };
}), b.register('YQMJR', function(c, d) {
    a(c.exports, 'createInvalidAccessError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'InvalidAccessError');
}), b.register('kJgDI', function(c, d) {
    a(c.exports, 'createIIRFilterNodeRendererFactory', function() {
        return _g;
    });
    var e = b('wMdMh'),
        f = b('Go0EV');
    const _g = (a, b, c, d, _g) => (_q, _r) => {
        const h = new WeakMap();
        let i = null;
        const j = async (j, _v) => {
            let k = null,
                _l = b(j);
            const m = (0, f.isOwnedByContext)(_l, _v);
            if (void 0 === _v.createIIRFilter ? k = a(_v, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: 'max',
                    channelInterpretation: 'speakers',
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                }) : m || (_l = _v.createIIRFilter(_r, _q)), h.set(_v, null === k ? _l : k), null !== k) {
                if (null === i) {
                    if (null === c)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const n = new c(j.context.destination.channelCount, j.context.length, _v.sampleRate);
                    i = (async () => {
                        await d(j, n, n.destination);
                        return ((n, b, c, d) => {
                            const o = c instanceof Float64Array ? c : new Float64Array(c),
                                p = d instanceof Float64Array ? d : new Float64Array(d),
                                _q = o.length,
                                _r = p.length,
                                s = Math.min(_q, _r);
                            if (1 !== o[0]) {
                                for (let t = 0; t < _q; t += 1)
                                    p[t] /= o[0];
                                for (let u = 1; u < _r; u += 1)
                                    o[u] /= o[0];
                            }
                            const t = new Float32Array(32),
                                u = new Float32Array(32),
                                _v = b.createBuffer(n.numberOfChannels, n.length, n.sampleRate),
                                w = n.numberOfChannels;
                            for (let x = 0; x < w; x += 1) {
                                const y = n.getChannelData(x),
                                    z = _v.getChannelData(x);
                                t.fill(0), u.fill(0), (0, e.filterBuffer)(o, _q, p, _r, s, t, u, 0, 32, y, z);
                            }
                            return _v;
                        })(await _g(n), _g, _h, _k);
                    })();
                }
                const n = await i;
                return k.buffer = n, k.start(0), k;
            }
            return await d(j, _g, _l), _l;
        };
        return {
            render(k, l) {
                const m = h.get(l);
                return void 0 !== m ? Promise.resolve(m) : j(k, l);
            }
        };
    };
}), b.register('wMdMh', function(c, d) {
    a(c.exports, 'filterBuffer', function() {
        return _e;
    });
    const _e = (a, c, d, _e, _e, _f, _i, _h, _k, _k, _g) => {
        const f = _k.length;
        let _g = _h;
        for (let _h = 0; _h < f; _h += 1) {
            let i = d[0] * _k[_h];
            for (let j = 1; j < _e; j += 1) {
                const k = _g - j & _k - 1;
                i += d[j] * _f[k], i -= a[j] * _i[k];
            }
            for (let k = _e; k < _e; k += 1)
                i += d[k] * _f[_g - k & _k - 1];
            for (let l = _e; l < j; l += 1)
                i -= k[l] * _i[_g - l & _k - 1];
            _f[_g] = _k[_h], _i[_g] = i, _g = _g + 1 & _k - 1, _g[_h] = i;
        }
        return _g;
    };
}), b.register('X6OVf', function(c, d) {
    a(c.exports, 'createIncrementCycleCounterFactory', function() {
        return _f;
    });
    var _e = b('C9hL5');
    const _f = (a, b, c, d, _f, _i) => _j => (_k, _k) => {
        const _g = a.get(_k);
        if (void 0 === _g) {
            if (!_j && _i(_k)) {
                const h = d(_k),
                    {
                        outputs: _i
                    } = c(_k);
                for (const j of _i)
                    if ((0, _e.isAudioNodeOutputConnection)(j)) {
                        const k = d(j[0]);
                        b(h, k, j[1], j[2]);
                    } else {
                        const k = _f(j[0]);
                        h.disconnect(k, j[1]);
                    }
            }
            a.set(_k, _k);
        } else
            a.set(_k, _g + _k);
    };
}), b.register('ZeXBu', function(c, d) {
    a(c.exports, 'createIsAnyAudioContext', function() {
        return _e;
    });
    const _e = (a, c) => d => {
        const f = a.get(d);
        return c(f) || c(d);
    };
}), b.register('2ZRD2', function(c, d) {
    a(c.exports, 'createIsAnyAudioNode', function() {
        return _e;
    });
    const _e = (a, c) => d => a.has(d) || c(d);
}), b.register('RIWKV', function(c, d) {
    a(c.exports, 'createIsAnyAudioParam', function() {
        return _e;
    });
    const _e = (a, c) => d => a.has(d) || c(d);
}), b.register('w1Ob1', function(c, d) {
    a(c.exports, 'createIsAnyOfflineAudioContext', function() {
        return _e;
    });
    const _e = (a, c) => d => {
        const f = a.get(d);
        return c(f) || c(d);
    };
}), b.register('mbHoF', function(c, d) {
    a(c.exports, 'createIsNativeAudioContext', function() {
        return _e;
    });
    const _e = a => c => null !== a && c instanceof a;
}), b.register('uDcNO', function(c, d) {
    a(c.exports, 'createIsNativeAudioNode', function() {
        return _e;
    });
    const _e = a => c => null !== a && 'function' == typeof a.AudioNode && c instanceof a.AudioNode;
}), b.register('J2PBS', function(c, d) {
    a(c.exports, 'createIsNativeAudioParam', function() {
        return _e;
    });
    const _e = a => c => null !== a && 'function' == typeof a.AudioParam && c instanceof a.AudioParam;
}), b.register('k2gVx', function(c, d) {
    a(c.exports, 'createIsNativeContext', function() {
        return _e;
    });
    const _e = (a, c) => d => a(d) || c(d);
}), b.register('Qsrta', function(c, d) {
    a(c.exports, 'createIsNativeOfflineAudioContext', function() {
        return _e;
    });
    const _e = a => c => null !== a && c instanceof a;
}), b.register('zjpeB', function(c, d) {
    a(c.exports, 'createIsSecureContext', function() {
        return _e;
    });
    const _e = a => null !== a && a.isSecureContext;
}), b.register('htmdI', function(c, d) {
    a(c.exports, 'createIsSupportedPromise', function() {
        return _e;
    });
    const _e = async (a, c, d, _e, _g, _h, _i, _j, _k, _k, _k, _l, _g, _h, _n, _o) => {
        if (a(c, c) && a(d, d) && a(_g, _g) && a(_h, _h) && a(_j, _j) && a(_k, _k) && a(_k, _k) && a(_k, _k) && a(_l, _l) && a(_g, _g) && a(_h, _h)) {
            return (await Promise.all([
                a(_e, _e),
                a(_i, _i),
                a(_n, _n),
                a(_o, _o)
            ])).every(a => a);
        }
        return !1;
    };
}), b.register('3hpvk', function(c, d) {
    a(c.exports, 'createMediaElementAudioSourceNodeConstructor', function() {
        return _e;
    });
    const _e = (a, c, d, _e) => class extends a {
        get mediaElement() {
            return this._nativeMediaElementAudioSourceNode.mediaElement;
        }
        constructor(f, _g) {
            const _h = d(f),
                _i = c(_h, _g);
            if (_e(_h))
                throw TypeError();
            super(f, !0, _i, null), this._nativeMediaElementAudioSourceNode = _i;
        }
    };
}), b.register('FWkLY', function(c, d) {
    a(c.exports, 'createMediaStreamAudioDestinationNodeConstructor', function() {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers'
        },
        _f = (a, c, d, _f) => class extends a {
            get stream() {
                return this._nativeMediaStreamAudioDestinationNode.stream;
            }
            constructor(g, h) {
                const i = d(g);
                if (_f(i))
                    throw new TypeError();
                const _j = {
                        ...e,
                        ...h
                    },
                    _k = c(i, _j);
                super(g, !1, _k, null), this._nativeMediaStreamAudioDestinationNode = _k;
            }
        };
}), b.register('cutsw', function(c, d) {
    a(c.exports, 'createMediaStreamAudioSourceNodeConstructor', function() {
        return _e;
    });
    const _e = (a, c, d, _e) => class extends a {
        get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream;
        }
        constructor(f, g) {
            const h = d(f),
                i = c(h, g);
            if (_e(h))
                throw new TypeError();
            super(f, !0, i, null), this._nativeMediaStreamAudioSourceNode = i;
        }
    };
}), b.register('D9E10', function(c, d) {
    a(c.exports, 'createMediaStreamTrackAudioSourceNodeConstructor', function() {
        return _e;
    });
    const _e = (a, c, d) => class extends a {
        constructor(f, g) {
            const h = d(f);
            super(f, !0, c(h, g), null);
        }
    };
}), b.register('Yipaq', function(c, d) {
    a(c.exports, 'createMinimalAudioContextConstructor', function() {
        return _g;
    });
    var e = b('zVjiz'),
        f = b('mQVgw');
    const _g = (a, b, c, d, _g) => class extends d {
        get baseLatency() {
            return this._baseLatency;
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state;
        }
        close() {
            return 'closed' === this.state ? this._nativeAudioContext.close().then(() => {
                throw a();
            }) : ('suspended' === this._state && (this._state = null), this._nativeAudioContext.close().then(() => {
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, e.deactivateAudioGraph)(this);
            }));
        }
        resume() {
            return 'suspended' === this._state ? new Promise((a, b) => {
                const h = () => {
                    this._nativeAudioContext.removeEventListener('statechange', h), 'running' === this._nativeAudioContext.state ? a() : this.resume().then(a, b);
                };
                this._nativeAudioContext.addEventListener('statechange', h);
            }) : this._nativeAudioContext.resume().catch(b => {
                if (void 0 === b || 15 === b.code)
                    throw a();
                throw b;
            });
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(b => {
                if (void 0 === b)
                    throw a();
                throw b;
            });
        }
        constructor(h = {}) {
            if (null === _g)
                throw new Error('Missing the native AudioContext constructor.');
            let i;
            try {
                i = new _g(h);
            } catch (h) {
                if (12 === h.code && 'sampleRate is not in range' === h.message)
                    throw b();
                throw h;
            }
            if (null === i)
                throw c();
            if (!(0, f.isValidLatencyHint)(h.latencyHint))
                throw new TypeError(`The provided value '${ h.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== h.sampleRate && i.sampleRate !== h.sampleRate)
                throw b();
            super(i, 2);
            const {
                latencyHint: j
            } = h, {
                sampleRate: k
            } = i;
            if (this._baseLatency = 'number' == typeof i.baseLatency ? i.baseLatency : 'balanced' === j ? 512 / k : 'interactive' === j || void 0 === j ? 256 / k : 'playback' === j ? 1024 / k : 128 * Math.max(2, Math.min(128, Math.round(j * k / 128))) / k, this._nativeAudioContext = i, 'webkitAudioContext' === _g.name ? (this._nativeGainNode = i.createGain(), this._nativeOscillatorNode = i.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(i.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === i.state) {
                this._state = 'suspended';
                const l = () => {
                    'suspended' === this._state && (this._state = null), i.removeEventListener('statechange', l);
                };
                i.addEventListener('statechange', l);
            }
        }
    };
}), b.register('XPd+g', function(c, d) {
    a(c.exports, 'createMinimalBaseAudioContextConstructor', function() {
        return _f;
    });
    var e = b('H8j0Q');
    const _f = (a, b, c, d, _f, _h) => class extends c {
        get currentTime() {
            return this._nativeContext.currentTime;
        }
        get destination() {
            return this._destination;
        }
        get listener() {
            return this._listener;
        }
        get onstatechange() {
            return this._onstatechange;
        }
        set onstatechange(g) {
            const h = 'function' == typeof g ? _h(this, g) : null;
            this._nativeContext.onstatechange = h;
            const i = this._nativeContext.onstatechange;
            this._onstatechange = null !== i && i === h ? g : i;
        }
        get sampleRate() {
            return this._nativeContext.sampleRate;
        }
        get state() {
            return this._nativeContext.state;
        }
        constructor(g, _h) {
            super(g), this._nativeContext = g, e.CONTEXT_STORE.set(this, g), d(g) && _f.set(g, new Set()), this._destination = new a(this, _h), this._listener = b(this, g), this._onstatechange = null;
        }
    };
}), b.register('tOuwz', function(c, d) {
    a(c.exports, 'createMinimalOfflineAudioContextConstructor', function() {
        return _h;
    });
    var e = b('zVjiz'),
        f = b('68Sdk');
    const g = {
            numberOfChannels: 1
        },
        _h = (a, b, c, d, _h) => class extends d {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(b()) : (this._state = 'running', _h(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, e.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(i) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(i) : setTimeout(() => this._waitForThePromiseToSettle(i));
            }
            constructor(i) {
                const {
                    length: j,
                    numberOfChannels: k,
                    sampleRate: l
                } = {
                    ...g,
                    ...i
                }, m = c(k, j, l);
                a(f.testPromiseSupport, () => (0, f.testPromiseSupport)(m)) || m.addEventListener('statechange', (() => {
                    let n = 0;
                    const o = c => {
                        'running' === this._state && (n > 0 ? (m.removeEventListener('statechange', o), c.stopImmediatePropagation(), this._waitForThePromiseToSettle(c)) : n += 1);
                    };
                    return o;
                })()), super(m, k), this._length = j, this._nativeOfflineAudioContext = m, this._state = null;
            }
        };
}), b.register('68Sdk', function(c, d) {
    a(c.exports, 'testPromiseSupport', function() {
        return _e;
    });
    const _e = a => {
        const f = new Uint32Array([
            1179011410,
            40,
            1163280727,
            544501094,
            16,
            131073,
            44100,
            176400,
            1048580,
            1635017060,
            4,
            0
        ]);
        try {
            const g = a.decodeAudioData(f.buffer, () => {});
            return void 0 !== g && (g.catch(() => {}), !0);
        } catch {}
        return !1;
    };
}), b.register('SZXvy', function(c, d) {
    a(c.exports, 'createMonitorConnections', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e, _e) => {
        const f = new Set();
        var g, h;
        return d.connect = (g = d.connect, (_e, i = 0, j = 0) => {
            const _k = 0 === f.size;
            if (c(_e))
                return g.call(d, _e, i, j), a(f, [
                    _e,
                    i,
                    j
                ], a => a[0] === _e && a[1] === i && a[2] === j, !0), _k && _e(), _e;
            g.call(d, _e, i), a(f, [
                _e,
                i
            ], a => a[0] === _e && a[1] === i, !0), _k && _e();
        }), d.disconnect = (i = d.disconnect, (a, _e, g) => {
            const k = f.size > 0;
            if (void 0 === a)
                i.apply(d), f.clear();
            else if ('number' == typeof a) {
                i.call(d, a);
                for (const l of f)
                    l[1] === a && f.delete(l);
            } else {
                c(a) ? i.call(d, a, _e, g) : i.call(d, a, _e);
                for (const l of f)
                    l[0] !== a || void 0 !== _e && l[1] !== _e || void 0 !== g && l[2] !== g || f.delete(l);
            }
            const l = 0 === f.size;
            k && l && _e();
        }), d;
    };
}), b.register('cdK1S', function(c, d) {
    a(c.exports, 'createNativeAnalyserNodeFactory', function() {
        return _i;
    });
    var _e = b('h2W9J'),
        f = b('snbg/'),
        g = b('NWIMW'),
        h = b('Bh3ew');
    const _i = (a, b) => (c, d) => {
        const j = c.createAnalyser();
        if ((0, f.assignNativeAudioNodeOptions)(j, d), !(d.maxDecibels > d.minDecibels))
            throw b();
        return (0, _e.assignNativeAudioNodeOption)(j, d, 'fftSize'), (0, _e.assignNativeAudioNodeOption)(j, d, 'maxDecibels'), (0, _e.assignNativeAudioNodeOption)(j, d, 'minDecibels'), (0, _e.assignNativeAudioNodeOption)(j, d, 'smoothingTimeConstant'), a(g.testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => (0, g.testAnalyserNodeGetFloatTimeDomainDataMethodSupport)(j)) || (0, h.wrapAnalyserNodeGetFloatTimeDomainDataMethod)(j), j;
    };
}), b.register('h2W9J', function(c, d) {
    a(c.exports, 'assignNativeAudioNodeOption', function() {
        return _e;
    });
    const _e = (a, c, d) => {
        const f = c[d];
        void 0 !== f && f !== a[d] && (a[d] = f);
    };
}), b.register('snbg/', function(c, d) {
    a(c.exports, 'assignNativeAudioNodeOptions', function() {
        return _f;
    });
    var e = b('h2W9J');
    const _f = (a, b) => {
        (0, e.assignNativeAudioNodeOption)(a, b, 'channelCount'), (0, e.assignNativeAudioNodeOption)(a, b, 'channelCountMode'), (0, e.assignNativeAudioNodeOption)(a, b, 'channelInterpretation');
    };
}), b.register('NWIMW', function(c, d) {
    a(c.exports, 'testAnalyserNodeGetFloatTimeDomainDataMethodSupport', function() {
        return _e;
    });
    const _e = a => 'function' == typeof a.getFloatTimeDomainData;
}), b.register('Bh3ew', function(c, d) {
    a(c.exports, 'wrapAnalyserNodeGetFloatTimeDomainDataMethod', function() {
        return _e;
    });
    const _e = a => {
        a.getFloatTimeDomainData = c => {
            const f = new Uint8Array(c.length);
            a.getByteTimeDomainData(f);
            const g = Math.max(f.length, a.fftSize);
            for (let h = 0; h < g; h += 1)
                c[h] = 0.0078125 * (f[h] - 128);
            return c;
        };
    };
}), b.register('wUrlN', function(c, d) {
    a(c.exports, 'createNativeAudioBufferConstructor', function() {
        return _e;
    });
    const _e = a => null === a ? null : a.hasOwnProperty('AudioBuffer') ? a.AudioBuffer : null;
}), b.register('jjB5R', function(c, d) {
    a(c.exports, 'createNativeAudioBufferSourceNodeFactory', function() {
        return _k;
    });
    var e = b('HfHCO'),
        f = b('h2W9J'),
        g = b('snbg/'),
        h = b('aTYpD'),
        i = b('GNrr4'),
        j = b('JKmfB');
    const _k = (a, b, c, d, _k, _l, _g, _h, _n, _o, _p) => (_q, _r) => {
        const _l = _q.createBufferSource();
        return (0, g.assignNativeAudioNodeOptions)(_l, _r), (0, e.assignNativeAudioNodeAudioParamValue)(_l, _r, 'playbackRate'), (0, f.assignNativeAudioNodeOption)(_l, _r, 'buffer'), (0, f.assignNativeAudioNodeOption)(_l, _r, 'loop'), (0, f.assignNativeAudioNodeOption)(_l, _r, 'loopEnd'), (0, f.assignNativeAudioNodeOption)(_l, _r, 'loopStart'), b(c, () => c(_q)) || (0, h.wrapAudioBufferSourceNodeStartMethodConsecutiveCalls)(_l), b(d, () => d(_q)) || _n(_l), b(_k, () => _k(_q)) || _o(_l, _q), b(_l, () => _l(_q)) || (0, i.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(_l), b(_g, () => _g(_q)) || _p(_l, _q), b(_h, () => _h(_q)) || (0, j.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(_l), a(_q, _l), _l;
    };
}), b.register('HfHCO', function(c, d) {
    a(c.exports, 'assignNativeAudioNodeAudioParamValue', function() {
        return _e;
    });
    const _e = (a, c, d) => {
        const f = c[d];
        void 0 !== f && f !== a[d].value && (a[d].value = f);
    };
}), b.register('aTYpD', function(c, d) {
    a(c.exports, 'wrapAudioBufferSourceNodeStartMethodConsecutiveCalls', function() {
        return _f;
    });
    var e = b('Ep+/d');
    const _f = a => {
        a.start = (b => {
            let g = !1;
            return (h = 0, i = 0, _g) => {
                if (g)
                    throw (0, e.createInvalidStateError)();
                b.call(a, h, i, _g), g = !0;
            };
        })(a.start);
    };
}), b.register('GNrr4', function(c, d) {
    a(c.exports, 'wrapAudioScheduledSourceNodeStartMethodNegativeParameters', function() {
        return _e;
    });
    const _e = a => {
        var f;
        a.start = (f = a.start, (g = 0, h = 0, _e) => {
            if ('number' == typeof _e && _e < 0 || h < 0 || g < 0)
                throw new RangeError('The parameters can\'t be negative.');
            f.call(a, g, h, _e);
        });
    };
}), b.register('JKmfB', function(c, d) {
    a(c.exports, 'wrapAudioScheduledSourceNodeStopMethodNegativeParameters', function() {
        return _e;
    });
    const _e = a => {
        var f;
        a.stop = (f = a.stop, (g = 0) => {
            if (g < 0)
                throw new RangeError('The parameter can\'t be negative.');
            f.call(a, g);
        });
    };
}), b.register('TLSwU', function(c, d) {
    a(c.exports, 'createNativeAudioContextConstructor', function() {
        return _e;
    });
    const _e = a => null === a ? null : a.hasOwnProperty('AudioContext') ? a.AudioContext : a.hasOwnProperty('webkitAudioContext') ? a.webkitAudioContext : null;
}), b.register('kl21Y', function(c, d) {
    a(c.exports, 'createNativeAudioDestinationNodeFactory', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e, _e) => {
        const f = d.destination;
        if (f.channelCount !== _e)
            try {
                f.channelCount = _e;
            } catch {}
        _e && 'explicit' !== f.channelCountMode && (f.channelCountMode = 'explicit'), 0 === f.maxChannelCount && Object.defineProperty(f, 'maxChannelCount', {
            value: _e
        });
        const _g = a(d, {
            channelCount: _e,
            channelCountMode: f.channelCountMode,
            channelInterpretation: f.channelInterpretation,
            gain: 1
        });
        return c(_g, 'channelCount', a => () => a.call(_g), a => c => {
            a.call(_g, c);
            try {
                f.channelCount = c;
            } catch (a) {
                if (c > f.maxChannelCount)
                    throw a;
            }
        }), c(_g, 'channelCountMode', a => () => a.call(_g), a => c => {
            a.call(_g, c), f.channelCountMode = c;
        }), c(_g, 'channelInterpretation', a => () => a.call(_g), a => c => {
            a.call(_g, c), f.channelInterpretation = c;
        }), Object.defineProperty(_g, 'maxChannelCount', {
            get: () => f.maxChannelCount
        }), _g.connect(f), _g;
    };
}), b.register('4ZiTz', function(c, d) {
    a(c.exports, 'createNativeAudioWorkletNodeConstructor', function() {
        return _e;
    });
    const _e = a => null === a ? null : a.hasOwnProperty('AudioWorkletNode') ? a.AudioWorkletNode : null;
}), b.register('patq4', function(c, d) {
    a(c.exports, 'createNativeAudioWorkletNodeFactory', function() {
        return _f;
    });
    var _e = b('ygxTf');
    const _f = (a, b, c, d, _f) => (_g, _h, _i, _j, _k, _l) => {
        if (null !== _i)
            try {
                const g = new _i(_g, _j, _l),
                    h = new Map();
                let i = null;
                if (Object.defineProperties(g, {
                        channelCount: {
                            get: () => _l.channelCount,
                            set: () => {
                                throw a();
                            }
                        },
                        channelCountMode: {
                            get: () => 'explicit',
                            set: () => {
                                throw a();
                            }
                        },
                        onprocessorerror: {
                            get: () => i,
                            set: a => {
                                'function' == typeof i && g.removeEventListener('processorerror', i), i = 'function' == typeof a ? a : null, 'function' == typeof i && g.addEventListener('processorerror', i);
                            }
                        }
                    }), g.addEventListener = (_h = g.addEventListener, (...a) => {
                        if ('processorerror' === a[0]) {
                            const j = 'function' == typeof a[1] ? a[1] : 'object' == typeof a[1] && null !== a[1] && 'function' == typeof a[1].handleEvent ? a[1].handleEvent : null;
                            if (null !== j) {
                                const k = h.get(a[1]);
                                void 0 !== k ? a[1] = k : (a[1] = k => {
                                    'error' === k.type ? (Object.defineProperties(k, {
                                        type: {
                                            value: 'processorerror'
                                        }
                                    }), j(k)) : j(new ErrorEvent(a[0], {
                                        ...k
                                    }));
                                }, h.set(j, a[1]));
                            }
                        }
                        return _h.call(g, 'error', a[1], a[2]), _h.call(g, ...a);
                    }), g.removeEventListener = (_g = g.removeEventListener, (...a) => {
                        if ('processorerror' === a[0]) {
                            const j = h.get(a[1]);
                            void 0 !== j && (h.delete(a[1]), a[1] = j);
                        }
                        return _g.call(g, 'error', a[1], a[2]), _g.call(g, a[0], a[1], a[2]);
                    }), 0 !== _l.numberOfOutputs) {
                    const j = c(_g, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        gain: 0
                    });
                    g.connect(j).connect(_g.destination);
                    return _f(g, () => j.disconnect(), () => j.connect(_g.destination));
                }
                return g;
            } catch (a) {
                if (11 === a.code)
                    throw d();
                throw a;
            }
        var _g, _h;
        if (void 0 === _k)
            throw d();
        return (0, _e.testClonabilityOfAudioWorkletNodeOptions)(_l), b(_g, _h, _k, _l);
    };
}), b.register('ygxTf', function(c, d) {
    a(c.exports, 'testClonabilityOfAudioWorkletNodeOptions', function() {
        return _e;
    });
    const _e = a => {
        const {
            port1: f
        } = new MessageChannel();
        try {
            f.postMessage(a);
        } finally {
            f.close();
        }
    };
}), b.register('cW/jZ', function(c, d) {
    a(c.exports, 'createNativeAudioWorkletNodeFakerFactory', function() {
        return _l;
    });
    var e = b('QulkM'),
        f = b('LMcCk'),
        _g = b('FcbDD'),
        _h = b('UVk5T'),
        _i = b('4pVDa'),
        _j = b('ff2BN'),
        _k = b('F+5Am');
    const _l = (a, b, c, d, _l, _m, _m, _n, _o, _p, _q, _r, _s) => (_t, _u, _v, _w) => {
        if (0 === _w.numberOfInputs && 0 === _w.numberOfOutputs)
            throw _o();
        const _m = Array.isArray(_w.outputChannelCount) ? _w.outputChannelCount : Array.from(_w.outputChannelCount);
        if (_m.some(a => a < 1))
            throw _o();
        if (_m.length !== _w.numberOfOutputs)
            throw b();
        if ('explicit' !== _w.channelCountMode)
            throw _o();
        const n = _w.channelCount * _w.numberOfInputs,
            o = _m.reduce((a, b) => a + b, 0),
            p = void 0 === _v.parameterDescriptors ? 0 : _v.parameterDescriptors.length;
        if (n + p > 6 || o > 6)
            throw _o();
        const q = new MessageChannel(),
            r = [],
            s = [];
        for (let t = 0; t < _w.numberOfInputs; t += 1)
            r.push(_m(_t, {
                channelCount: _w.channelCount,
                channelCountMode: _w.channelCountMode,
                channelInterpretation: _w.channelInterpretation,
                gain: 1
            })), s.push(_l(_t, {
                channelCount: _w.channelCount,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: _w.channelCount
            }));
        const u = [];
        if (void 0 !== _v.parameterDescriptors)
            for (const {
                    defaultValue: v,
                    maxValue: w,
                    minValue: x,
                    name: y
                }
                of _v.parameterDescriptors) {
                const z = _m(_t, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    offset: void 0 !== _w.parameterData[y] ? _w.parameterData[y] : void 0 === v ? 0 : v
                });
                Object.defineProperties(z.offset, {
                    defaultValue: {
                        get: () => void 0 === v ? 0 : v
                    },
                    maxValue: {
                        get: () => void 0 === w ? e.MOST_POSITIVE_SINGLE_FLOAT : w
                    },
                    minValue: {
                        get: () => void 0 === x ? e.MOST_NEGATIVE_SINGLE_FLOAT : x
                    }
                }), u.push(z);
            }
        const v = d(_t, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: Math.max(1, n + p)
            }),
            _w = (0, f.computeBufferSize)(_u, _t.sampleRate),
            _x = _n(_t, _w, n + p, Math.max(1, o)),
            _y = _l(_t, {
                channelCount: Math.max(1, o),
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: Math.max(1, o)
            }),
            _z = [];
        for (let A = 0; A < _w.numberOfOutputs; A += 1)
            _z.push(d(_t, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: _m[A]
            }));
        for (let B = 0; B < _w.numberOfInputs; B += 1) {
            r[B].connect(s[B]);
            for (let C = 0; C < _w.channelCount; C += 1)
                s[B].connect(v, C, B * _w.channelCount + C);
        }
        const _C = new(0, _k.ReadOnlyMap)(void 0 === _v.parameterDescriptors ? [] : _v.parameterDescriptors.map(({
            name: D
        }, b) => {
            const E = u[b];
            return E.connect(v, 0, n + b), E.start(0), [
                D,
                E.offset
            ];
        }));
        v.connect(_x);
        let _E = _w.channelInterpretation,
            F = null;
        const G = 0 === _w.numberOfOutputs ? [_x] : _z,
            H = {
                get bufferSize() {
                    return _w;
                },
                get channelCount() {
                    return _w.channelCount;
                },
                set channelCount(I) {
                    throw c();
                },
                get channelCountMode() {
                    return _w.channelCountMode;
                },
                set channelCountMode(I) {
                    throw c();
                },
                get channelInterpretation() {
                    return _E;
                },
                set channelInterpretation(I) {
                    for (const J of r)
                        J.channelInterpretation = I;
                    _E = I;
                },
                get context() {
                    return _x.context;
                },
                get inputs() {
                    return r;
                },
                get numberOfInputs() {
                    return _w.numberOfInputs;
                },
                get numberOfOutputs() {
                    return _w.numberOfOutputs;
                },
                get onprocessorerror() {
                    return F;
                },
                set onprocessorerror(I) {
                    'function' == typeof F && H.removeEventListener('processorerror', F), F = 'function' == typeof I ? I : null, 'function' == typeof F && H.addEventListener('processorerror', F);
                },
                get parameters() {
                    return _C;
                },
                get port() {
                    return q.port2;
                },
                addEventListener: (...D) => _x.addEventListener(D[0], D[1], D[2]),
                connect: D.bind(null, G),
                disconnect: _p.bind(null, G),
                dispatchEvent: (...D) => _x.dispatchEvent(D[0]),
                removeEventListener: (...D) => _x.removeEventListener(D[0], D[1], D[2])
            },
            I = new Map();
        var J, K;
        q.port1.addEventListener = (J = q.port1.addEventListener, (...D) => {
            if ('message' === D[0]) {
                const L = 'function' == typeof D[1] ? D[1] : 'object' == typeof D[1] && null !== D[1] && 'function' == typeof D[1].handleEvent ? D[1].handleEvent : null;
                if (null !== L) {
                    const M = I.get(D[1]);
                    void 0 !== M ? D[1] = M : (D[1] = D => {
                        _q(_t.currentTime, _t.sampleRate, () => L(D));
                    }, I.set(L, D[1]));
                }
            }
            return J.call(q.port1, D[0], D[1], D[2]);
        }), q.port1.removeEventListener = (K = q.port1.removeEventListener, (...D) => {
            if ('message' === D[0]) {
                const L = I.get(D[1]);
                void 0 !== L && (I.delete(D[1]), D[1] = L);
            }
            return K.call(q.port1, D[0], D[1], D[2]);
        });
        let L = null;
        Object.defineProperty(q.port1, 'onmessage', {
            get: () => L,
            set: D => {
                'function' == typeof L && q.port1.removeEventListener('message', L), L = 'function' == typeof D ? D : null, 'function' == typeof L && (q.port1.addEventListener('message', L), q.port1.start());
            }
        }), _v.prototype.port = q.port1;
        let M = null;
        (0, _i.createAudioWorkletProcessor)(_t, H, _v, _w).then(D => M = D);
        const N = (0, _j.createNestedArrays)(_w.numberOfInputs, _w.channelCount),
            O = (0, _j.createNestedArrays)(_w.numberOfOutputs, _m),
            P = void 0 === _v.parameterDescriptors ? [] : _v.parameterDescriptors.reduce((D, {
                name: Q
            }) => ({
                ...D,
                [Q]: new Float32Array(128)
            }), {});
        let R = !0;
        const S = () => {
                _w.numberOfOutputs > 0 && _x.disconnect(_y);
                for (let T = 0, U = 0; T < _w.numberOfOutputs; T += 1) {
                    const V = _z[T];
                    for (let W = 0; W < _m[T]; W += 1)
                        _y.disconnect(V, U + W, W);
                    U += _m[T];
                }
            },
            T = new Map();
        _x.onaudioprocess = ({
            inputBuffer: U,
            outputBuffer: V
        }) => {
            if (null !== M) {
                const W = _r(H);
                for (let X = 0; X < _w; X += 128) {
                    for (let Y = 0; Y < _w.numberOfInputs; Y += 1)
                        for (let Z = 0; Z < _w.channelCount; Z += 1)
                            (0, _g.copyFromChannel)(U, N[Y], Z, Z, X);
                    void 0 !== _v.parameterDescriptors && _v.parameterDescriptors.forEach(({
                        name: $
                    }, Z) => {
                        (0, _g.copyFromChannel)(U, P, $, n + Z, X);
                    });
                    for (let ab = 0; ab < _w.numberOfInputs; ab += 1)
                        for (let bb = 0; bb < _m[ab]; bb += 1)
                            0 === O[ab][bb].byteLength && (O[ab][bb] = new Float32Array(128));
                    try {
                        const cb = N.map((cb, bb) => {
                                if (Z[bb].size > 0)
                                    return T.set(bb, _w / 128), cb;
                                const db = T.get(bb);
                                return void 0 === db ? [] : (cb.every(cb => cb.every(cb => 0 === cb)) && (1 === db ? T.delete(bb) : T.set(bb, db - 1)), cb);
                            }),
                            db = _q(_t.currentTime + X / _t.sampleRate, _t.sampleRate, () => M.process(cb, O, P));
                        R = db;
                        for (let eb = 0, fb = 0; eb < _w.numberOfOutputs; eb += 1) {
                            for (let gb = 0; gb < _m[eb]; gb += 1)
                                (0, _h.copyToChannel)(bb, O[eb], gb, fb + gb, X);
                            fb += _m[eb];
                        }
                    } catch (ab) {
                        R = !1, H.dispatchEvent(new ErrorEvent('processorerror', {
                            colno: ab.colno,
                            filename: ab.filename,
                            lineno: ab.lineno,
                            message: ab.message
                        }));
                    }
                    if (!R) {
                        for (let cb = 0; cb < _w.numberOfInputs; cb += 1) {
                            r[cb].disconnect(s[cb]);
                            for (let db = 0; db < _w.channelCount; db += 1)
                                s[X].disconnect(v, db, cb * _w.channelCount + db);
                        }
                        if (void 0 !== _v.parameterDescriptors) {
                            const db = _v.parameterDescriptors.length;
                            for (let eb = 0; eb < db; eb += 1) {
                                const fb = u[eb];
                                fb.disconnect(v, 0, n + eb), fb.stop();
                            }
                        }
                        v.disconnect(_x), _x.onaudioprocess = null, _W ? S() : _Z();
                        break;
                    }
                }
            }
        };
        let _W = !1;
        const X = _m(_t, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            }),
            Y = () => _x.connect(X).connect(_t.destination),
            _Z = () => {
                _x.disconnect(X), X.disconnect();
            };
        return Y(), _s(H, () => {
            if (R) {
                _Z(), _w.numberOfOutputs > 0 && _x.connect(_y);
                for (let $ = 0, ab = 0; $ < _w.numberOfOutputs; $ += 1) {
                    const bb = _z[$];
                    for (let cb = 0; cb < _m[$]; cb += 1)
                        _y.connect(bb, ab + cb, cb);
                    ab += _m[$];
                }
            }
            _W = !0;
        }, () => {
            R && (Y(), S()), _W = !1;
        });
    };
}), b.register('LMcCk', function(c, d) {
    a(c.exports, 'computeBufferSize', function() {
        return _e;
    });
    const _e = (a, c) => null === a ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(a * c)))));
}), b.register('4pVDa', function(c, d) {
    a(c.exports, 'createAudioWorkletProcessor', function() {
        return _g;
    });
    var e = b('H8j0Q'),
        f = b('uLd2f');
    const _g = (a, b, c, d) => {
        let h = e.NODE_TO_PROCESSOR_MAPS.get(a);
        void 0 === h && (h = new WeakMap(), e.NODE_TO_PROCESSOR_MAPS.set(a, h));
        const i = (0, f.createAudioWorkletProcessorPromise)(c, d);
        return h.set(b, i), i;
    };
}), b.register('uLd2f', function(c, d) {
    a(c.exports, 'createAudioWorkletProcessorPromise', function() {
        return _f;
    });
    var e = b('i8HOh');
    const _f = async (a, b) => new a(await (0, e.cloneAudioWorkletNodeOptions)(b));
}), b.register('i8HOh', function(c, d) {
    a(c.exports, 'cloneAudioWorkletNodeOptions', function() {
        return _e;
    });
    const _e = a => new Promise((c, d) => {
        const {
            port1: f,
            port2: g
        } = new MessageChannel();
        f.onmessage = ({
            data: h
        }) => {
            f.close(), g.close(), c(h);
        }, f.onmessageerror = ({
            data: i
        }) => {
            f.close(), g.close(), d(i);
        }, g.postMessage(i);
    });
}), b.register('jeD3g', function(c, d) {
    a(c.exports, 'createNativeBiquadFilterNode', function() {
        return _h;
    });
    var e = b('HfHCO'),
        f = b('h2W9J'),
        g = b('snbg/');
    const _h = (a, b) => {
        const i = a.createBiquadFilter();
        return (0, g.assignNativeAudioNodeOptions)(i, b), (0, e.assignNativeAudioNodeAudioParamValue)(i, b, 'Q'), (0, e.assignNativeAudioNodeAudioParamValue)(i, b, 'detune'), (0, e.assignNativeAudioNodeAudioParamValue)(i, b, 'frequency'), (0, e.assignNativeAudioNodeAudioParamValue)(i, b, 'gain'), (0, f.assignNativeAudioNodeOption)(i, b, 'type'), i;
    };
}), b.register('5OSft', function(c, d) {
    a(c.exports, 'createNativeChannelMergerNodeFactory', function() {
        return _f;
    });
    var e = b('snbg/');
    const _f = (a, b) => (c, d) => {
        const g = c.createChannelMerger(d.numberOfInputs);
        return null !== a && 'webkitAudioContext' === a.name && b(c, g), (0, e.assignNativeAudioNodeOptions)(g, d), g;
    };
}), b.register('Mx0JO', function(c, d) {
    a(c.exports, 'createNativeChannelSplitterNode', function() {
        return _g;
    });
    var e = b('snbg/'),
        f = b('tVn30');
    const _g = (a, b) => {
        const h = a.createChannelSplitter(b.numberOfOutputs);
        return (0, e.assignNativeAudioNodeOptions)(h, b), (0, f.wrapChannelSplitterNode)(h), h;
    };
}), b.register('tVn30', function(c, d) {
    a(c.exports, 'wrapChannelSplitterNode', function() {
        return _f;
    });
    var e = b('Ep+/d');
    const _f = a => {
        const g = a.numberOfOutputs;
        Object.defineProperty(a, 'channelCount', {
            get: () => g,
            set: a => {
                if (a !== g)
                    throw (0, e.createInvalidStateError)();
            }
        }), Object.defineProperty(a, 'channelCountMode', {
            get: () => 'explicit',
            set: a => {
                if ('explicit' !== a)
                    throw (0, e.createInvalidStateError)();
            }
        }), Object.defineProperty(a, 'channelInterpretation', {
            get: () => 'discrete',
            set: a => {
                if ('discrete' !== a)
                    throw (0, e.createInvalidStateError)();
            }
        });
    };
}), b.register('Qx9mr', function(c, d) {
    a(c.exports, 'createNativeConstantSourceNodeFactory', function() {
        return _i;
    });
    var e = b('HfHCO'),
        f = b('snbg/'),
        g = b('GNrr4'),
        h = b('JKmfB');
    const _i = (a, b, c, d, _i) => (_j, _k) => {
        if (void 0 === _j.createConstantSource)
            return c(_j, _k);
        const j = _j.createConstantSource();
        return (0, f.assignNativeAudioNodeOptions)(j, _k), (0, e.assignNativeAudioNodeAudioParamValue)(j, _k, 'offset'), b(d, () => d(_j)) || (0, g.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(j), b(_i, () => _i(_j)) || (0, h.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(j), a(_j, j), j;
    };
}), b.register('7FMa3', function(c, d) {
    a(c.exports, 'createNativeConstantSourceNodeFakerFactory', function() {
        return _f;
    });
    var e = b('0Gxwh');
    const _f = (a, b, c, d) => (_f, {
        offset: g,
        ...h
    }) => {
        const i = _f.createBuffer(1, 2, 44100),
            _j = b(_f, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            _k = c(_f, {
                ...h,
                gain: g
            }),
            l = i.getChannelData(0);
        l[0] = 1, l[1] = 1, _j.buffer = i, _j.loop = !0;
        const _m = {
            get bufferSize() {},
            get channelCount() {
                return _k.channelCount;
            },
            set channelCount(n) {
                _k.channelCount = n;
            },
            get channelCountMode() {
                return _k.channelCountMode;
            },
            set channelCountMode(n) {
                _k.channelCountMode = n;
            },
            get channelInterpretation() {
                return _k.channelInterpretation;
            },
            set channelInterpretation(n) {
                _k.channelInterpretation = n;
            },
            get context() {
                return _k.context;
            },
            get inputs() {
                return [];
            },
            get numberOfInputs() {
                return _j.numberOfInputs;
            },
            get numberOfOutputs() {
                return _k.numberOfOutputs;
            },
            get offset() {
                return _k.gain;
            },
            get onended() {
                return _j.onended;
            },
            set onended(n) {
                _j.onended = n;
            },
            addEventListener: (...a) => _j.addEventListener(a[0], a[1], a[2]),
            dispatchEvent: (...a) => _j.dispatchEvent(a[0]),
            removeEventListener: (...a) => _j.removeEventListener(a[0], a[1], a[2]),
            start(n = 0) {
                _j.start.call(_j, n);
            },
            stop(n = 0) {
                _j.stop.call(_j, n);
            }
        };
        return a(_f, _j), d((0, e.interceptConnections)(_m, _k), () => _j.connect(_k), () => _j.disconnect(_k));
    };
}), b.register('0Gxwh', function(c, d) {
    a(c.exports, 'interceptConnections', function() {
        return _e;
    });
    const _e = (a, c) => (a.connect = c.connect.bind(c), a.disconnect = c.disconnect.bind(c), a);
}), b.register('4UFaA', function(c, d) {
    a(c.exports, 'createNativeConvolverNodeFactory', function() {
        return _g;
    });
    var e = b('h2W9J'),
        f = b('snbg/');
    const _g = (a, b) => (c, d) => {
        const h = c.createConvolver();
        if ((0, f.assignNativeAudioNodeOptions)(h, d), d.disableNormalization === h.normalize && (h.normalize = !d.disableNormalization), (0, e.assignNativeAudioNodeOption)(h, d, 'buffer'), d.channelCount > 2)
            throw a();
        if (b(h, 'channelCount', a => () => a.call(h), b => c => {
                if (c > 2)
                    throw a();
                return b.call(h, c);
            }), 'max' === d.channelCountMode)
            throw a();
        return b(h, 'channelCountMode', a => () => a.call(h), b => c => {
            if ('max' === c)
                throw a();
            return b.call(h, c);
        }), h;
    };
}), b.register('DF8kS', function(c, d) {
    a(c.exports, 'createNativeDelayNode', function() {
        return _g;
    });
    var e = b('HfHCO'),
        f = b('snbg/');
    const _g = (a, b) => {
        const h = a.createDelay(b.maxDelayTime);
        return (0, f.assignNativeAudioNodeOptions)(h, b), (0, e.assignNativeAudioNodeAudioParamValue)(h, b, 'delayTime'), h;
    };
}), b.register('AX8Lk', function(c, d) {
    a(c.exports, 'createNativeDynamicsCompressorNodeFactory', function() {
        return _g;
    });
    var e = b('HfHCO'),
        f = b('snbg/');
    const _g = a => (b, c) => {
        const h = b.createDynamicsCompressor();
        if ((0, f.assignNativeAudioNodeOptions)(h, c), c.channelCount > 2)
            throw a();
        if ('max' === c.channelCountMode)
            throw a();
        return (0, e.assignNativeAudioNodeAudioParamValue)(h, c, 'attack'), (0, e.assignNativeAudioNodeAudioParamValue)(h, c, 'knee'), (0, e.assignNativeAudioNodeAudioParamValue)(h, c, 'ratio'), (0, e.assignNativeAudioNodeAudioParamValue)(h, c, 'release'), (0, e.assignNativeAudioNodeAudioParamValue)(h, c, 'threshold'), h;
    };
}), b.register('f68MK', function(c, d) {
    a(c.exports, 'createNativeGainNode', function() {
        return _g;
    });
    var e = b('HfHCO'),
        f = b('snbg/');
    const _g = (a, b) => {
        const h = a.createGain();
        return (0, f.assignNativeAudioNodeOptions)(h, b), (0, e.assignNativeAudioNodeAudioParamValue)(h, b, 'gain'), h;
    };
}), b.register('OAlmo', function(c, d) {
    a(c.exports, 'createNativeIIRFilterNodeFactory', function() {
        return _f;
    });
    var e = b('snbg/');
    const _f = a => (b, c, d) => {
        if (void 0 === b.createIIRFilter)
            return a(b, c, d);
        const g = b.createIIRFilter(d.feedforward, d.feedback);
        return (0, e.assignNativeAudioNodeOptions)(g, d), g;
    };
}), b.register('XdT3V', function(c, d) {
    a(c.exports, 'createNativeIIRFilterNodeFakerFactory', function() {
        return _j;
    });
    var e = b('LMcCk'),
        f = b('wMdMh'),
        g = b('0Gxwh');

    function h(i, j) {
        const k = j[0] * j[0] + j[1] * j[1];
        return [
            (i[0] * j[0] + i[1] * j[1]) / k,
            (i[1] * j[0] - i[0] * j[1]) / k
        ];
    }

    function i(j, k) {
        let l = [
            0,
            0
        ];
        for (let m = j.length - 1; m >= 0; m -= 1)
            e = k, l = [
                (d = l)[0] * e[0] - d[1] * e[1],
                d[0] * e[1] + d[1] * e[0]
            ], l[0] += j[m];
        var n, o;
        return l;
    }
    const _j = (a, b, c, d) => (_j, _j, {
        channelCount: k,
        channelCountMode: l,
        channelInterpretation: _m,
        feedback: _n,
        feedforward: _o
    }) => {
        const _p = (0, e.computeBufferSize)(_j, _j.sampleRate),
            _q = _n instanceof Float64Array ? _n : new Float64Array(_n),
            _r = _o instanceof Float64Array ? _o : new Float64Array(_o),
            _s = _q.length,
            _t = _r.length,
            _u = Math.min(_s, _t);
        if (0 === _s || _s > 20)
            throw d();
        if (0 === _q[0])
            throw b();
        if (0 === _t || _t > 20)
            throw d();
        if (0 === _r[0])
            throw b();
        if (1 !== _q[0]) {
            for (let v = 0; v < _t; v += 1)
                _r[v] /= _q[0];
            for (let w = 1; w < _s; w += 1)
                _q[w] /= _q[0];
        }
        const _v = c(_j, _p, k, k);
        _v.channelCount = k, _v.channelCountMode = l, _v.channelInterpretation = _m;
        const _w = [],
            x = [],
            y = [];
        for (let z = 0; z < k; z += 1) {
            _w.push(0);
            const A = new Float32Array(32),
                B = new Float32Array(32);
            A.fill(0), B.fill(0), x.push(A), y.push(B);
        }
        _v.onaudioprocess = z => {
            const A = z.inputBuffer,
                B = z.outputBuffer,
                C = A.numberOfChannels;
            for (let D = 0; D < C; D += 1) {
                const E = A.getChannelData(D),
                    F = B.getChannelData(D);
                _w[D] = (0, f.filterBuffer)(_q, _s, _r, _t, _u, x[D], y[D], _w[D], 32, E, F);
            }
        };
        const A = _j.sampleRate / 2,
            B = {
                get bufferSize() {
                    return _p;
                },
                get channelCount() {
                    return _v.channelCount;
                },
                set channelCount(C) {
                    _v.channelCount = C;
                },
                get channelCountMode() {
                    return _v.channelCountMode;
                },
                set channelCountMode(C) {
                    _v.channelCountMode = C;
                },
                get channelInterpretation() {
                    return _v.channelInterpretation;
                },
                set channelInterpretation(C) {
                    _v.channelInterpretation = C;
                },
                get context() {
                    return _v.context;
                },
                get inputs() {
                    return [_v];
                },
                get numberOfInputs() {
                    return _v.numberOfInputs;
                },
                get numberOfOutputs() {
                    return _v.numberOfOutputs;
                },
                addEventListener: (...z) => _v.addEventListener(z[0], z[1], z[2]),
                dispatchEvent: (...z) => _v.dispatchEvent(z[0]),
                getFrequencyResponse(C, D, E) {
                    if (C.length !== D.length || D.length !== E.length)
                        throw z();
                    const F = C.length;
                    for (let G = 0; G < F; G += 1) {
                        const H = -Math.PI * (C[G] / A),
                            I = [
                                Math.cos(H),
                                Math.sin(H)
                            ],
                            J = h(i(_r, I), i(_q, I));
                        D[G] = Math.sqrt(J[0] * J[0] + J[1] * J[1]), E[G] = Math.atan2(J[1], J[0]);
                    }
                },
                removeEventListener: (...z) => _v.removeEventListener(z[0], z[1], z[2])
            };
        return (0, g.interceptConnections)(B, _v);
    };
}), b.register('yHRvH', function(c, d) {
    a(c.exports, 'createNativeMediaElementAudioSourceNode', function() {
        return _e;
    });
    const _e = (a, c) => a.createMediaElementSource(c.mediaElement);
}), b.register('DXfSw', function(c, d) {
    a(c.exports, 'createNativeMediaStreamAudioDestinationNode', function() {
        return _f;
    });
    var e = b('snbg/');
    const _f = (a, b) => {
        const g = a.createMediaStreamDestination();
        return (0, e.assignNativeAudioNodeOptions)(g, b), 1 === g.numberOfOutputs && Object.defineProperty(g, 'numberOfOutputs', {
            get: () => 0
        }), g;
    };
}), b.register('D71Bp', function(c, d) {
    a(c.exports, 'createNativeMediaStreamAudioSourceNode', function() {
        return _e;
    });
    const _e = (a, {
        mediaStream: f
    }) => {
        const g = f.getAudioTracks();
        g.sort((a, f) => a.id < f.id ? -1 : a.id > f.id ? 1 : 0);
        const h = g.slice(0, 1),
            i = a.createMediaStreamSource(new MediaStream(h));
        return Object.defineProperty(i, 'mediaStream', {
            value: f
        }), i;
    };
}), b.register('ugafs', function(c, d) {
    a(c.exports, 'createNativeMediaStreamTrackAudioSourceNodeFactory', function() {
        return _e;
    });
    const _e = (a, c) => (d, {
        mediaStreamTrack: f
    }) => {
        if ('function' == typeof d.createMediaStreamTrackSource)
            return d.createMediaStreamTrackSource(f);
        const g = new MediaStream([f]),
            h = d.createMediaStreamSource(g);
        if ('audio' !== f.kind)
            throw a();
        if (c(d))
            throw new TypeError();
        return h;
    };
}), b.register('yifgi', function(c, d) {
    a(c.exports, 'createNativeOfflineAudioContextConstructor', function() {
        return _e;
    });
    const _e = a => null === a ? null : a.hasOwnProperty('OfflineAudioContext') ? a.OfflineAudioContext : a.hasOwnProperty('webkitOfflineAudioContext') ? a.webkitOfflineAudioContext : null;
}), b.register('ipWQI', function(c, d) {
    a(c.exports, 'createNativeOscillatorNodeFactory', function() {
        return _j;
    });
    var e = b('HfHCO'),
        f = b('h2W9J'),
        g = b('snbg/'),
        h = b('GNrr4'),
        i = b('JKmfB');
    const _j = (a, b, c, d, _j, _j) => (_k, _l) => {
        const k = _k.createOscillator();
        return (0, g.assignNativeAudioNodeOptions)(k, _l), (0, e.assignNativeAudioNodeAudioParamValue)(k, _l, 'detune'), (0, e.assignNativeAudioNodeAudioParamValue)(k, _l, 'frequency'), void 0 !== _l.periodicWave ? k.setPeriodicWave(_l.periodicWave) : (0, f.assignNativeAudioNodeOption)(k, _l, 'type'), b(c, () => c(_k)) || (0, h.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(k), b(d, () => d(_k)) || _j(k, _k), b(_j, () => _j(_k)) || (0, i.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(k), a(_k, k), k;
    };
}), b.register('t3XBu', function(c, d) {
    a(c.exports, 'createNativePannerNodeFactory', function() {
        return _h;
    });
    var e = b('HfHCO'),
        f = b('h2W9J'),
        g = b('snbg/');
    const _h = a => (b, c) => {
        const i = b.createPanner();
        return void 0 === i.orientationX ? a(b, c) : ((0, g.assignNativeAudioNodeOptions)(i, c), (0, e.assignNativeAudioNodeAudioParamValue)(i, c, 'orientationX'), (0, e.assignNativeAudioNodeAudioParamValue)(i, c, 'orientationY'), (0, e.assignNativeAudioNodeAudioParamValue)(i, c, 'orientationZ'), (0, e.assignNativeAudioNodeAudioParamValue)(i, c, 'positionX'), (0, e.assignNativeAudioNodeAudioParamValue)(i, c, 'positionY'), (0, e.assignNativeAudioNodeAudioParamValue)(i, c, 'positionZ'), (0, f.assignNativeAudioNodeOption)(i, c, 'coneInnerAngle'), (0, f.assignNativeAudioNodeOption)(i, c, 'coneOuterAngle'), (0, f.assignNativeAudioNodeOption)(i, c, 'coneOuterGain'), (0, f.assignNativeAudioNodeOption)(i, c, 'distanceModel'), (0, f.assignNativeAudioNodeOption)(i, c, 'maxDistance'), (0, f.assignNativeAudioNodeOption)(i, c, 'panningModel'), (0, f.assignNativeAudioNodeOption)(i, c, 'refDistance'), (0, f.assignNativeAudioNodeOption)(i, c, 'rolloffFactor'), i);
    };
}), b.register('9jIu8', function(c, d) {
    a(c.exports, 'createNativePannerNodeFakerFactory', function() {
        return _g;
    });
    var e = b('snbg/'),
        f = b('0Gxwh');
    const _g = (a, b, c, d, _g, _k, _h, _i, _j, _k) => (_l, {
        coneInnerAngle: h,
        coneOuterAngle: i,
        coneOuterGain: j,
        distanceModel: k,
        maxDistance: l,
        orientationX: m,
        orientationY: n,
        orientationZ: o,
        panningModel: p,
        positionX: q,
        positionY: r,
        positionZ: s,
        refDistance: t,
        rolloffFactor: u,
        ...v
    }) => {
        const w = _l.createPanner();
        if (v.channelCount > 2)
            throw _h();
        if ('max' === v.channelCountMode)
            throw _h();
        (0, e.assignNativeAudioNodeOptions)(w, v);
        const x = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            },
            y = c(_l, {
                ...x,
                channelInterpretation: 'speakers',
                numberOfInputs: 6
            }),
            z = d(_l, {
                ...v,
                gain: 1
            }),
            A = d(_l, {
                ...x,
                gain: 1
            }),
            B = d(_l, {
                ...x,
                gain: 0
            }),
            C = d(_l, {
                ...x,
                gain: 0
            }),
            D = d(_l, {
                ...x,
                gain: 0
            }),
            E = d(_l, {
                ...x,
                gain: 0
            }),
            F = d(_l, {
                ...x,
                gain: 0
            }),
            G = _g(_l, 256, 6, 1),
            H = _k(_l, {
                ...x,
                curve: new Float32Array([
                    1,
                    1
                ]),
                oversample: 'none'
            });
        let I = [
                m,
                n,
                o
            ],
            J = [
                q,
                r,
                s
            ];
        const K = new Float32Array(1);
        G.onaudioprocess = ({
            inputBuffer: L
        }) => {
            const M = [
                _j(L, K, 0),
                _j(L, K, 1),
                _j(L, K, 2)
            ];
            M.some((L, M) => L !== I[M]) && (w.setOrientation(...M), I = M);
            const N = [
                _j(L, K, 3),
                _j(L, K, 4),
                _j(L, K, 5)
            ];
            N.some((L, M) => L !== J[M]) && (w.setPosition(...N), J = N);
        }, Object.defineProperty(B.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(C.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(D.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(E.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(F.gain, 'defaultValue', {
            get: () => 0
        });
        const M = {
            get bufferSize() {},
            get channelCount() {
                return w.channelCount;
            },
            set channelCount(N) {
                if (N > 2)
                    throw _h();
                z.channelCount = N, w.channelCount = N;
            },
            get channelCountMode() {
                return w.channelCountMode;
            },
            set channelCountMode(N) {
                if ('max' === N)
                    throw _h();
                z.channelCountMode = N, w.channelCountMode = N;
            },
            get channelInterpretation() {
                return w.channelInterpretation;
            },
            set channelInterpretation(N) {
                z.channelInterpretation = N, w.channelInterpretation = N;
            },
            get coneInnerAngle() {
                return w.coneInnerAngle;
            },
            set coneInnerAngle(N) {
                w.coneInnerAngle = N;
            },
            get coneOuterAngle() {
                return w.coneOuterAngle;
            },
            set coneOuterAngle(N) {
                w.coneOuterAngle = N;
            },
            get coneOuterGain() {
                return w.coneOuterGain;
            },
            set coneOuterGain(N) {
                if (N < 0 || N > 1)
                    throw b();
                w.coneOuterGain = N;
            },
            get context() {
                return w.context;
            },
            get distanceModel() {
                return w.distanceModel;
            },
            set distanceModel(N) {
                w.distanceModel = N;
            },
            get inputs() {
                return [z];
            },
            get maxDistance() {
                return w.maxDistance;
            },
            set maxDistance(N) {
                if (N < 0)
                    throw new RangeError();
                w.maxDistance = N;
            },
            get numberOfInputs() {
                return w.numberOfInputs;
            },
            get numberOfOutputs() {
                return w.numberOfOutputs;
            },
            get orientationX() {
                return A.gain;
            },
            get orientationY() {
                return B.gain;
            },
            get orientationZ() {
                return C.gain;
            },
            get panningModel() {
                return w.panningModel;
            },
            set panningModel(N) {
                w.panningModel = N;
            },
            get positionX() {
                return D.gain;
            },
            get positionY() {
                return E.gain;
            },
            get positionZ() {
                return F.gain;
            },
            get refDistance() {
                return w.refDistance;
            },
            set refDistance(N) {
                if (N < 0)
                    throw new RangeError();
                w.refDistance = N;
            },
            get rolloffFactor() {
                return w.rolloffFactor;
            },
            set rolloffFactor(N) {
                if (N < 0)
                    throw new RangeError();
                w.rolloffFactor = N;
            },
            addEventListener: (...L) => z.addEventListener(L[0], L[1], L[2]),
            dispatchEvent: (...L) => z.dispatchEvent(L[0]),
            removeEventListener: (...L) => z.removeEventListener(L[0], L[1], L[2])
        };
        h !== M.coneInnerAngle && (M.coneInnerAngle = h), i !== M.coneOuterAngle && (M.coneOuterAngle = i), j !== M.coneOuterGain && (M.coneOuterGain = j), k !== M.distanceModel && (M.distanceModel = k), l !== M.maxDistance && (M.maxDistance = l), m !== M.orientationX.value && (M.orientationX.value = m), n !== M.orientationY.value && (M.orientationY.value = n), o !== M.orientationZ.value && (M.orientationZ.value = o), p !== M.panningModel && (M.panningModel = p), q !== M.positionX.value && (M.positionX.value = q), r !== M.positionY.value && (M.positionY.value = r), s !== M.positionZ.value && (M.positionZ.value = s), t !== M.refDistance && (M.refDistance = t), u !== M.rolloffFactor && (M.rolloffFactor = u), 1 === I[0] && 0 === I[1] && 0 === I[2] || w.setOrientation(...I), 0 === J[0] && 0 === J[1] && 0 === J[2] || w.setPosition(...J);
        return _k((0, f.interceptConnections)(M, w), () => {
            z.connect(w), L(z, H, 0, 0), H.connect(A).connect(y, 0, 0), H.connect(B).connect(y, 0, 1), H.connect(C).connect(y, 0, 2), H.connect(D).connect(y, 0, 3), H.connect(E).connect(y, 0, 4), H.connect(F).connect(y, 0, 5), y.connect(G).connect(_l.destination);
        }, () => {
            z.disconnect(w), _i(z, H, 0, 0), H.disconnect(A), A.disconnect(y), H.disconnect(B), B.disconnect(y), H.disconnect(C), C.disconnect(y), H.disconnect(D), D.disconnect(y), H.disconnect(E), E.disconnect(y), H.disconnect(F), F.disconnect(y), y.disconnect(G), G.disconnect(_l.destination);
        });
    };
}), b.register('EoeAh', function(c, d) {
    a(c.exports, 'createNativePeriodicWaveFactory', function() {
        return _e;
    });
    const _e = a => (c, {
        disableNormalization: f,
        imag: g,
        real: h
    }) => {
        const i = g instanceof Float32Array ? g : new Float32Array(g),
            j = h instanceof Float32Array ? h : new Float32Array(h),
            _k = c.createPeriodicWave(j, i, {
                disableNormalization: f
            });
        if (Array.from(g).length < 2)
            throw a();
        return _k;
    };
}), b.register('YDSeH', function(c, d) {
    a(c.exports, 'createNativeScriptProcessorNode', function() {
        return _e;
    });
    const _e = (a, c, d, _e) => a.createScriptProcessor(c, d, _e);
}), b.register('c6+mD', function(c, d) {
    a(c.exports, 'createNativeStereoPannerNodeFactory', function() {
        return _g;
    });
    var e = b('HfHCO'),
        f = b('snbg/');
    const _g = (a, b) => (c, d) => {
        const h = d.channelCountMode;
        if ('clamped-max' === h)
            throw b();
        if (void 0 === c.createStereoPanner)
            return a(c, d);
        const i = c.createStereoPanner();
        return (0, f.assignNativeAudioNodeOptions)(i, d), (0, e.assignNativeAudioNodeAudioParamValue)(i, d, 'pan'), Object.defineProperty(i, 'channelCountMode', {
            get: () => h,
            set: a => {
                if (a !== h)
                    throw b();
            }
        }), i;
    };
}), b.register('HD1w7', function(c, d) {
    a(c.exports, 'createNativeStereoPannerNodeFakerFactory', function() {
        return _f;
    });
    var e = b('0Gxwh');
    const _f = (a, b, c, d, _f, _m) => {
        const g = 16385,
            _h = new Float32Array([
                1,
                1
            ]),
            _i = Math.PI / 2,
            _j = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            },
            _k = {
                ..._j,
                oversample: 'none'
            },
            _l = (a, e, _m, _l, _p) => {
                if (1 === e)
                    return ((a, b, e, _f) => {
                        const _m = new Float32Array(g),
                            n = new Float32Array(g);
                        for (let o = 0; o < g; o += 1) {
                            const p = o / 16384 * _i;
                            _m[o] = Math.cos(p), n[o] = Math.sin(p);
                        }
                        const _p = c(o, {
                                ..._j,
                                gain: 0
                            }),
                            q = d(o, {
                                ..._k,
                                curve: _m
                            }),
                            r = d(o, {
                                ..._k,
                                curve: _h
                            }),
                            s = c(o, {
                                ..._j,
                                gain: 0
                            }),
                            t = d(o, {
                                ..._k,
                                curve: n
                            });
                        return {
                            connectGraph() {
                                b.connect(_p), b.connect(void 0 === r.inputs ? r : r.inputs[0]), b.connect(s), r.connect(e), e.connect(void 0 === q.inputs ? q : q.inputs[0]), e.connect(void 0 === t.inputs ? t : t.inputs[0]), q.connect(_p.gain), t.connect(s.gain), _p.connect(_f, 0, 0), s.connect(_f, 0, 1);
                            },
                            disconnectGraph() {
                                b.disconnect(_p), b.disconnect(void 0 === r.inputs ? r : r.inputs[0]), b.disconnect(s), r.disconnect(e), e.disconnect(void 0 === q.inputs ? q : q.inputs[0]), e.disconnect(void 0 === t.inputs ? t : t.inputs[0]), q.disconnect(_p.gain), t.disconnect(s.gain), _p.disconnect(_f, 0, 0), s.disconnect(_f, 0, 1);
                            }
                        };
                    })(a, _g, _l, _n);
                if (2 === e)
                    return ((a, e, _f, _g) => {
                        const m = new Float32Array(g),
                            _n = new Float32Array(g),
                            o = new Float32Array(g),
                            p = new Float32Array(g),
                            q = Math.floor(8192.5);
                        for (let r = 0; r < g; r += 1)
                            if (r > q) {
                                const s = (r - q) / (16384 - q) * _i;
                                m[r] = Math.cos(s), _n[r] = Math.sin(s), o[r] = 0, p[r] = 1;
                            } else {
                                const s = r / (16384 - q) * _i;
                                m[r] = 1, _n[r] = 0, o[r] = Math.cos(s), p[r] = Math.sin(s);
                            }
                        const s = b(r, {
                                channelCount: 2,
                                channelCountMode: 'explicit',
                                channelInterpretation: 'discrete',
                                numberOfOutputs: 2
                            }),
                            t = c(r, {
                                ..._j,
                                gain: 0
                            }),
                            u = d(r, {
                                ..._k,
                                curve: m
                            }),
                            v = c(r, {
                                ..._j,
                                gain: 0
                            }),
                            w = d(r, {
                                ..._k,
                                curve: _n
                            }),
                            x = d(r, {
                                ..._k,
                                curve: _h
                            }),
                            y = c(r, {
                                ..._j,
                                gain: 0
                            }),
                            z = d(r, {
                                ..._k,
                                curve: o
                            }),
                            A = c(r, {
                                ..._j,
                                gain: 0
                            }),
                            B = d(r, {
                                ..._k,
                                curve: p
                            });
                        return {
                            connectGraph() {
                                e.connect(s), e.connect(void 0 === x.inputs ? x : x.inputs[0]), s.connect(t, 0), s.connect(v, 0), s.connect(y, 1), s.connect(A, 1), x.connect(_f), _f.connect(void 0 === u.inputs ? u : u.inputs[0]), _f.connect(void 0 === w.inputs ? w : w.inputs[0]), _f.connect(void 0 === z.inputs ? z : z.inputs[0]), _f.connect(void 0 === B.inputs ? B : B.inputs[0]), u.connect(t.gain), w.connect(v.gain), z.connect(y.gain), B.connect(A.gain), t.connect(_g, 0, 0), y.connect(_g, 0, 0), v.connect(_g, 0, 1), A.connect(_g, 0, 1);
                            },
                            disconnectGraph() {
                                e.disconnect(s), e.disconnect(void 0 === x.inputs ? x : x.inputs[0]), s.disconnect(t, 0), s.disconnect(v, 0), s.disconnect(y, 1), s.disconnect(A, 1), x.disconnect(_f), _f.disconnect(void 0 === u.inputs ? u : u.inputs[0]), _f.disconnect(void 0 === w.inputs ? w : w.inputs[0]), _f.disconnect(void 0 === z.inputs ? z : z.inputs[0]), _f.disconnect(void 0 === B.inputs ? B : B.inputs[0]), u.disconnect(t.gain), w.disconnect(v.gain), z.disconnect(y.gain), B.disconnect(A.gain), t.disconnect(_g, 0, 0), y.disconnect(_g, 0, 0), v.disconnect(_g, 0, 1), A.disconnect(_g, 0, 1);
                            }
                        };
                    })(a, _g, _l, _s);
                throw _f();
            };
        return (b, {
            channelCount: m,
            channelCountMode: n,
            pan: o,
            ...p
        }) => {
            if ('max' === n)
                throw _f();
            const q = a(b, {
                    ...p,
                    channelCount: 1,
                    channelCountMode: n,
                    numberOfInputs: 2
                }),
                r = c(b, {
                    ...p,
                    channelCount: m,
                    channelCountMode: n,
                    gain: 1
                }),
                _s = c(b, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    gain: o
                });
            let {
                connectGraph: t,
                disconnectGraph: u
            } = _l(b, m, r, _s, q);
            Object.defineProperty(_s.gain, 'defaultValue', {
                get: () => 0
            }), Object.defineProperty(_s.gain, 'maxValue', {
                get: () => 1
            }), Object.defineProperty(_s.gain, 'minValue', {
                get: () => -1
            });
            const v = {
                get bufferSize() {},
                get channelCount() {
                    return r.channelCount;
                },
                set channelCount(w) {
                    r.channelCount !== w && (_w && u(), {
                        connectGraph: x,
                        disconnectGraph: y
                    } = _l(b, w, r, _s, q), _w && x()), r.channelCount = w;
                },
                get channelCountMode() {
                    return r.channelCountMode;
                },
                set channelCountMode(w) {
                    if ('clamped-max' === w || 'max' === w)
                        throw _f();
                    r.channelCountMode = w;
                },
                get channelInterpretation() {
                    return r.channelInterpretation;
                },
                set channelInterpretation(w) {
                    r.channelInterpretation = w;
                },
                get context() {
                    return r.context;
                },
                get inputs() {
                    return [r];
                },
                get numberOfInputs() {
                    return r.numberOfInputs;
                },
                get numberOfOutputs() {
                    return r.numberOfOutputs;
                },
                get pan() {
                    return _s.gain;
                },
                addEventListener: (...a) => r.addEventListener(a[0], a[1], a[2]),
                dispatchEvent: (...a) => r.dispatchEvent(a[0]),
                removeEventListener: (...a) => r.removeEventListener(a[0], a[1], a[2])
            };
            let _w = !1;
            return _g((0, e.interceptConnections)(v, q), () => {
                t(), _w = !0;
            }, () => {
                u(), _w = !1;
            });
        };
    };
}), b.register('a7yIS', function(c, d) {
    a(c.exports, 'createNativeWaveShaperNodeFactory', function() {
        return _g;
    });
    var e = b('h2W9J'),
        f = b('snbg/');
    const _g = (a, b, c, d, _g, _B, _h) => (_i, _j) => {
        const h = _i.createWaveShaper();
        if (null !== _B && 'webkitAudioContext' === _B.name && void 0 === _i.createGain().gain.automationRate)
            return c(_i, _j);
        (0, f.assignNativeAudioNodeOptions)(h, _j);
        const i = null === _j.curve || _j.curve instanceof Float32Array ? _j.curve : new Float32Array(_j.curve);
        if (null !== i && i.length < 2)
            throw b();
        (0, e.assignNativeAudioNodeOption)(h, {
            curve: i
        }, 'curve'), (0, e.assignNativeAudioNodeOption)(h, _j, 'oversample');
        let j = null,
            k = !1;
        _h(h, 'curve', a => () => a.call(h), b => c => (b.call(h, c), k && (d(c) && null === j ? j = a(_i, h) : d(c) || null === j || (j(), j = null)), c));
        return _g(h, () => {
            k = !0, d(h.curve) && (j = a(_i, h));
        }, () => {
            k = !1, null !== j && (j(), j = null);
        });
    };
}), b.register('wjJSK', function(c, d) {
    a(c.exports, 'createNativeWaveShaperNodeFakerFactory', function() {
        return _g;
    });
    var e = b('snbg/'),
        f = b('0Gxwh');
    const _g = (a, b, c, d, _g) => (_B, {
        curve: _h,
        oversample: _i,
        ..._j
    }) => {
        const k = _B.createWaveShaper(),
            l = _B.createWaveShaper();
        (0, e.assignNativeAudioNodeOptions)(k, _j), (0, e.assignNativeAudioNodeOptions)(l, _j);
        const m = c(_B, {
                ..._j,
                gain: 1
            }),
            n = c(_B, {
                ..._j,
                gain: -1
            }),
            o = c(_B, {
                ..._j,
                gain: 1
            }),
            p = c(_B, {
                ..._j,
                gain: -1
            });
        let q = null,
            r = !1,
            s = null;
        const t = {
            get bufferSize() {},
            get channelCount() {
                return k.channelCount;
            },
            set channelCount(u) {
                m.channelCount = u, n.channelCount = u, k.channelCount = u, o.channelCount = u, l.channelCount = u, p.channelCount = u;
            },
            get channelCountMode() {
                return k.channelCountMode;
            },
            set channelCountMode(u) {
                m.channelCountMode = u, n.channelCountMode = u, k.channelCountMode = u, o.channelCountMode = u, l.channelCountMode = u, p.channelCountMode = u;
            },
            get channelInterpretation() {
                return k.channelInterpretation;
            },
            set channelInterpretation(u) {
                m.channelInterpretation = u, n.channelInterpretation = u, k.channelInterpretation = u, o.channelInterpretation = u, l.channelInterpretation = u, p.channelInterpretation = u;
            },
            get context() {
                return k.context;
            },
            get curve() {
                return s;
            },
            set curve(u) {
                if (null !== u && u.length < 2)
                    throw b();
                if (null === u)
                    k.curve = u, l.curve = u;
                else {
                    const v = u.length,
                        w = new Float32Array(v + 2 - v % 2),
                        x = new Float32Array(v + 2 - v % 2);
                    w[0] = u[0], x[0] = -u[v - 1];
                    const y = Math.ceil((v + 1) / 2),
                        z = (v + 1) / 2 - 1;
                    for (let A = 1; A < y; A += 1) {
                        const _B = A / y * z,
                            C = Math.floor(_B),
                            D = Math.ceil(_B);
                        w[A] = C === D ? u[C] : (1 - (_B - C)) * u[C] + (1 - (D - _B)) * u[D], x[A] = C === D ? -u[v - 1 - C] : -(1 - (_B - C)) * u[v - 1 - C] - (1 - (D - _B)) * u[v - 1 - D];
                    }
                    w[y] = v % 2 == 1 ? u[y - 1] : (u[y - 2] + u[y - 1]) / 2, k.curve = w, l.curve = x;
                }
                s = u, r && (d(s) && null === q ? q = a(_h, m) : null !== q && (q(), q = null));
            },
            get inputs() {
                return [m];
            },
            get numberOfInputs() {
                return k.numberOfInputs;
            },
            get numberOfOutputs() {
                return k.numberOfOutputs;
            },
            get oversample() {
                return k.oversample;
            },
            set oversample(u) {
                k.oversample = u, l.oversample = u;
            },
            addEventListener: (...a) => m.addEventListener(a[0], a[1], a[2]),
            dispatchEvent: (...a) => m.dispatchEvent(a[0]),
            removeEventListener: (...a) => m.removeEventListener(a[0], a[1], a[2])
        };
        null !== _h && (t.curve = _h instanceof Float32Array ? _h : new Float32Array(_h)), _i !== t.oversample && (t.oversample = _i);
        return _g((0, f.interceptConnections)(t, o), () => {
            m.connect(k).connect(o), m.connect(n).connect(l).connect(p).connect(o), r = !0, d(s) && (q = a(_h, m));
        }, () => {
            m.disconnect(k), k.disconnect(o), m.disconnect(n), n.disconnect(l), l.disconnect(p), p.disconnect(o), r = !1, null !== q && (q(), q = null);
        });
    };
}), b.register('09F8G', function(c, d) {
    a(c.exports, 'createNotSupportedError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'NotSupportedError');
}), b.register('tSDQD', function(c, d) {
    a(c.exports, 'createOfflineAudioContextConstructor', function() {
        return _h;
    });
    var e = b('zVjiz'),
        f = b('68Sdk');
    const g = {
            numberOfChannels: 1
        },
        _h = (a, b, c, d, _h) => class extends a {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(c()) : (this._state = 'running', _h(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, e.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(i) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(i) : setTimeout(() => this._waitForThePromiseToSettle(i));
            }
            constructor(i, j, k) {
                let l;
                if ('number' == typeof i && void 0 !== j && void 0 !== k)
                    l = {
                        length: j,
                        numberOfChannels: i,
                        sampleRate: k
                    };
                else {
                    if ('object' != typeof i)
                        throw new Error('The given parameters are not valid.');
                    l = i;
                }
                const {
                    length: m,
                    numberOfChannels: n,
                    sampleRate: o
                } = {
                    ...g,
                    ...l
                }, p = d(n, m, o);
                b(f.testPromiseSupport, () => (0, f.testPromiseSupport)(p)) || p.addEventListener('statechange', (() => {
                    let q = 0;
                    const r = j => {
                        'running' === this._state && (q > 0 ? (p.removeEventListener('statechange', r), j.stopImmediatePropagation(), this._waitForThePromiseToSettle(j)) : q += 1);
                    };
                    return r;
                })()), super(p, n), this._length = m, this._nativeOfflineAudioContext = p, this._state = null;
            }
        };
}), b.register('DiiGd', function(c, d) {
    a(c.exports, 'createOscillatorNodeConstructor', function() {
        return _i;
    });
    var e = b('6wEyH'),
        f = b('NF5ES'),
        g = b('qYGZ8');
    const h = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 440,
            periodicWave: void 0,
            type: 'sine'
        },
        _i = (a, b, c, d, _i, _j, _n) => class extends a {
            get detune() {
                return this._detune;
            }
            get frequency() {
                return this._frequency;
            }
            get onended() {
                return this._onended;
            }
            set onended(j) {
                const k = 'function' == typeof j ? _n(this, j) : null;
                this._nativeOscillatorNode.onended = k;
                const l = this._nativeOscillatorNode.onended;
                this._onended = null !== l && l === k ? j : l;
            }
            get type() {
                return this._nativeOscillatorNode.type;
            }
            set type(j) {
                this._nativeOscillatorNode.type = j, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null);
            }
            setPeriodicWave(j) {
                this._nativeOscillatorNode.setPeriodicWave(j), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = j);
            }
            start(j = 0) {
                if (this._nativeOscillatorNode.start(j), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = j), 'closed' !== this.context.state) {
                    (0, f.setInternalStateToActive)(this);
                    const k = () => {
                        this._nativeOscillatorNode.removeEventListener('ended', k), (0, e.isActiveAudioNode)(this) && (0, g.setInternalStateToPassive)(this);
                    };
                    this._nativeOscillatorNode.addEventListener('ended', k);
                }
            }
            stop(j = 0) {
                this._nativeOscillatorNode.stop(j), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = j);
            }
            constructor(j, k) {
                const l = _i(j),
                    m = {
                        ...h,
                        ...k
                    },
                    _n = c(l, m),
                    o = _j(l),
                    p = o ? d() : null,
                    q = j.sampleRate / 2;
                super(j, !1, _n, p), this._detune = b(this, o, _n.detune, 153600, -153600), this._frequency = b(this, o, _n.frequency, q, -q), this._nativeOscillatorNode = _n, this._onended = null, this._oscillatorNodeRenderer = p, null !== this._oscillatorNodeRenderer && void 0 !== m.periodicWave && (this._oscillatorNodeRenderer.periodicWave = m.periodicWave);
            }
        };
}), b.register('OXdSH', function(c, d) {
    a(c.exports, 'createOscillatorNodeRendererFactory', function() {
        return _f;
    });
    var e = b('Go0EV');
    const _f = (a, b, c, d, _f) => () => {
        const g = new WeakMap();
        let h = null,
            i = null,
            _j = null;
        return {
            set periodicWave(k) {
                h = k;
            },
            set start(k) {
                i = k;
            },
            set stop(k) {
                _j = k;
            },
            render(k, l) {
                const m = g.get(l);
                return void 0 !== m ? Promise.resolve(m) : (async (k, l) => {
                    let n = c(k);
                    const o = (0, e.isOwnedByContext)(n, l);
                    if (!o) {
                        const p = {
                            channelCount: n.channelCount,
                            channelCountMode: n.channelCountMode,
                            channelInterpretation: n.channelInterpretation,
                            detune: n.detune.value,
                            frequency: n.frequency.value,
                            periodicWave: null === h ? void 0 : h,
                            type: n.type
                        };
                        n = b(l, p), null !== i && n.start(i), null !== _j && n.stop(_j);
                    }
                    return g.set(l, n), o ? (await a(l, k.detune, n.detune), await a(l, k.frequency, n.frequency)) : (await d(l, k.detune, n.detune), await d(l, k.frequency, n.frequency)), await _f(k, l, n), n;
                })(k, l);
            }
        };
    };
}), b.register('K8I5n', function(c, d) {
    a(c.exports, 'createPannerNodeConstructor', function() {
        return _g;
    });
    var e = b('QulkM');
    const f = {
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            coneInnerAngle: 360,
            coneOuterAngle: 360,
            coneOuterGain: 0,
            distanceModel: 'inverse',
            maxDistance: 10000,
            orientationX: 1,
            orientationY: 0,
            orientationZ: 0,
            panningModel: 'equalpower',
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            refDistance: 1,
            rolloffFactor: 1
        },
        _g = (a, b, c, d, _g, _v, _j) => class extends a {
            get coneInnerAngle() {
                return this._nativePannerNode.coneInnerAngle;
            }
            set coneInnerAngle(h) {
                this._nativePannerNode.coneInnerAngle = h;
            }
            get coneOuterAngle() {
                return this._nativePannerNode.coneOuterAngle;
            }
            set coneOuterAngle(h) {
                this._nativePannerNode.coneOuterAngle = h;
            }
            get coneOuterGain() {
                return this._nativePannerNode.coneOuterGain;
            }
            set coneOuterGain(h) {
                this._nativePannerNode.coneOuterGain = h;
            }
            get distanceModel() {
                return this._nativePannerNode.distanceModel;
            }
            set distanceModel(h) {
                this._nativePannerNode.distanceModel = h;
            }
            get maxDistance() {
                return this._nativePannerNode.maxDistance;
            }
            set maxDistance(h) {
                this._nativePannerNode.maxDistance = h;
            }
            get orientationX() {
                return this._orientationX;
            }
            get orientationY() {
                return this._orientationY;
            }
            get orientationZ() {
                return this._orientationZ;
            }
            get panningModel() {
                return this._nativePannerNode.panningModel;
            }
            set panningModel(h) {
                this._nativePannerNode.panningModel = h;
            }
            get positionX() {
                return this._positionX;
            }
            get positionY() {
                return this._positionY;
            }
            get positionZ() {
                return this._positionZ;
            }
            get refDistance() {
                return this._nativePannerNode.refDistance;
            }
            set refDistance(h) {
                this._nativePannerNode.refDistance = h;
            }
            get rolloffFactor() {
                return this._nativePannerNode.rolloffFactor;
            }
            set rolloffFactor(h) {
                this._nativePannerNode.rolloffFactor = h;
            }
            constructor(h, i) {
                const j = _g(h),
                    k = {
                        ...f,
                        ...i
                    },
                    l = c(j, k),
                    m = _v(j);
                super(h, !1, l, m ? d() : null), this._nativePannerNode = l, this._orientationX = b(this, m, l.orientationX, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationY = b(this, m, l.orientationY, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationZ = b(this, m, l.orientationZ, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._positionX = b(this, m, l.positionX, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._positionY = b(this, m, l.positionY, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._positionZ = b(this, m, l.positionZ, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), _j(this, 1);
            }
        };
}), b.register('zd4dD', function(c, d) {
    a(c.exports, 'createPannerNodeRendererFactory', function() {
        return _g;
    });
    var e = b('7H2g7'),
        f = b('Go0EV');
    const _g = (a, b, c, d, _g, _v, _j, _k, _k, _l) => () => {
        const h = new WeakMap();
        let i = null;
        return {
            render(j, k) {
                const l = h.get(k);
                return void 0 !== l ? Promise.resolve(l) : (async (j, k) => {
                    let m = null,
                        n = _v(j);
                    const o = {
                            channelCount: n.channelCount,
                            channelCountMode: n.channelCountMode,
                            channelInterpretation: n.channelInterpretation
                        },
                        p = {
                            ...o,
                            coneInnerAngle: n.coneInnerAngle,
                            coneOuterAngle: n.coneOuterAngle,
                            coneOuterGain: n.coneOuterGain,
                            distanceModel: n.distanceModel,
                            maxDistance: n.maxDistance,
                            panningModel: n.panningModel,
                            refDistance: n.refDistance,
                            rolloffFactor: n.rolloffFactor
                        },
                        q = (0, f.isOwnedByContext)(n, k);
                    if ('bufferSize' in n)
                        m = d(k, {
                            ...o,
                            gain: 1
                        });
                    else if (!q) {
                        const r = {
                            ...p,
                            orientationX: n.orientationX.value,
                            orientationY: n.orientationY.value,
                            orientationZ: n.orientationZ.value,
                            positionX: n.positionX.value,
                            positionY: n.positionY.value,
                            positionZ: n.positionZ.value
                        };
                        n = _g(k, r);
                    }
                    if (h.set(k, null === m ? n : m), null !== m) {
                        if (null === i) {
                            if (null === _j)
                                throw new Error('Missing the native OfflineAudioContext constructor.');
                            const r = new _j(6, j.context.length, k.sampleRate),
                                s = b(r, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: 6
                                });
                            s.connect(r.destination), i = (async () => {
                                const t = await Promise.all([
                                    j.orientationX,
                                    j.orientationY,
                                    j.orientationZ,
                                    j.positionX,
                                    j.positionY,
                                    j.positionZ
                                ].map(async (t, s) => {
                                    const u = c(r, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: 0 === s ? 1 : 0
                                    });
                                    return await _k(r, t, u.offset), u;
                                }));
                                for (let u = 0; u < 6; u += 1)
                                    t[u].connect(s, 0, u), t[u].start(0);
                                return _l(u);
                            })();
                        }
                        const r = await i,
                            s = d(k, {
                                ...o,
                                gain: 1
                            });
                        await _k(j, k, s);
                        const t = [];
                        for (let u = 0; u < r.numberOfChannels; u += 1)
                            t.push(r.getChannelData(u));
                        let _v = [
                                t[0][0],
                                t[1][0],
                                t[2][0]
                            ],
                            w = [
                                t[3][0],
                                t[4][0],
                                t[5][0]
                            ],
                            x = d(k, {
                                ...o,
                                gain: 1
                            }),
                            y = _g(k, {
                                ...p,
                                orientationX: _v[0],
                                orientationY: _v[1],
                                orientationZ: _v[2],
                                positionX: w[0],
                                positionY: w[1],
                                positionZ: w[2]
                            });
                        s.connect(x).connect(y.inputs[0]), y.connect(m);
                        for (let z = 128; z < r.length; z += 128) {
                            const A = [
                                    t[0][z],
                                    t[1][z],
                                    t[2][z]
                                ],
                                B = [
                                    t[3][z],
                                    t[4][z],
                                    t[5][z]
                                ];
                            if (A.some((A, z) => A !== _v[z]) || B.some((A, z) => A !== w[z])) {
                                _v = A, w = B;
                                const C = z / k.sampleRate;
                                x.gain.setValueAtTime(0, C), x = d(k, {
                                    ...o,
                                    gain: 0
                                }), y = _g(k, {
                                    ...p,
                                    orientationX: _v[0],
                                    orientationY: _v[1],
                                    orientationZ: _v[2],
                                    positionX: w[0],
                                    positionY: w[1],
                                    positionZ: w[2]
                                }), x.gain.setValueAtTime(1, C), s.connect(x).connect(y.inputs[0]), y.connect(m);
                            }
                        }
                        return m;
                    }
                    return q ? (await a(k, j.orientationX, n.orientationX), await a(k, j.orientationY, n.orientationY), await a(k, j.orientationZ, n.orientationZ), await a(k, j.positionX, n.positionX), await a(k, j.positionY, n.positionY), await a(k, j.positionZ, n.positionZ)) : (await _k(k, j.orientationX, n.orientationX), await _k(k, j.orientationY, n.orientationY), await _k(k, j.orientationZ, n.orientationZ), await _k(k, j.positionX, n.positionX), await _k(k, j.positionY, n.positionY), await _k(k, j.positionZ, n.positionZ)), (0, e.isNativeAudioNodeFaker)(n) ? await _k(j, k, n.inputs[0]) : await _k(j, k, n), n;
                })(j, k);
            }
        };
    };
}), b.register('+sxCa', function(c, d) {
    a(c.exports, 'createPeriodicWaveConstructor', function() {
        return _f;
    });
    const e = {
            disableNormalization: !1
        },
        _f = (a, c, d, _f) => class _g {
            static[Symbol.hasInstance](g) {
                return null !== g && 'object' == typeof g && Object.getPrototypeOf(g) === _g.prototype || d.has(g);
            }
            constructor(_g, h) {
                const i = c(_g),
                    _j = _f({
                        ...e,
                        ...h
                    }),
                    _k = a(i, _j);
                return d.add(_k), _k;
            }
        };
}), b.register('g6eoK', function(c, d) {
    a(c.exports, 'createRenderAutomation', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e, _e) => (a(_e).replay(_e), c(_e, d, _e));
}), b.register('fBEVx', function(c, d) {
    a(c.exports, 'createRenderInputsOfAudioNode', function() {
        return _e;
    });
    const _e = (a, c, d) => async (_e, _e, _f) => {
        const f = a(_e);
        await Promise.all(f.activeInputs.map((a, f) => Array.from(a).map(async ([g, h]) => {
            const i = c(g),
                j = await i.render(g, _e),
                _k = _e.context.destination;
            d(g) || _e === _k && d(_e) || j.connect(_f, h, f);
        })).reduce((g, c) => [
            ...g,
            ...c
        ], []));
    };
}), b.register('jgU1j', function(c, d) {
    a(c.exports, 'createRenderInputsOfAudioParam', function() {
        return _e;
    });
    const _e = (a, c, d) => async (_e, _e, _f) => {
        const f = c(_e);
        await Promise.all(Array.from(f.activeInputs).map(async ([g, h]) => {
            const i = a(g),
                j = await i.render(g, _e);
            d(g) || j.connect(_f, h);
        }));
    };
}), b.register('qiAnP', function(c, d) {
    a(c.exports, 'createRenderNativeOfflineAudioContext', function() {
        return _f;
    });
    var _e = b('68Sdk');
    const _f = (a, b, c, d) => _f => a(_e.testPromiseSupport, () => (0, _e.testPromiseSupport)(_f)) ? Promise.resolve(a(d, d)).then(a => {
        if (!a) {
            const g = c(_f, 512, 0, 1);
            _f.oncomplete = () => {
                g.onaudioprocess = null, g.disconnect();
            }, g.onaudioprocess = () => _f.currentTime, g.connect(_f.destination);
        }
        return _f.startRendering();
    }) : new Promise(a => {
        const g = b(_f, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        _f.oncomplete = b => {
            g.disconnect(), a(b.renderedBuffer);
        }, g.connect(_f.destination), _f.startRendering();
    });
}), b.register('RcMtl', function(c, d) {
    a(c.exports, 'createSetActiveAudioWorkletNodeInputs', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        a.set(c, d);
    };
}), b.register('jn5v/', function(c, d) {
    a(c.exports, 'createSetAudioNodeTailTime', function() {
        return _e;
    });
    const _e = a => (c, d) => a.set(c, d);
}), b.register('ZaHsb', function(c, d) {
    a(c.exports, 'createStartRendering', function() {
        return _f;
    });
    var e = b('Xqv6q');
    const _f = (a, b, c, d, _f, _g, _h, _i) => (_j, _k) => c(_j).render(_j, _k).then(() => Promise.all(Array.from(d(_k)).map(a => c(a).render(a, _k)))).then(() => _f(_k)).then(c => ('function' != typeof c.copyFromChannel ? (_h(c), (0, e.wrapAudioBufferGetChannelDataMethod)(c)) : b(_g, () => _g(c)) || _i(c), a.add(c), c));
}), b.register('nDGJu', function(c, d) {
    a(c.exports, 'createStereoPannerNodeConstructor', function() {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            pan: 0
        },
        _f = (a, c, d, _f, _f, _g) => class extends a {
            get pan() {
                return this._pan;
            }
            constructor(g, _h) {
                const _i = _f(g),
                    _j = {
                        ...e,
                        ..._h
                    },
                    _k = d(_i, _j),
                    _l = _g(_i);
                super(g, !1, _k, _l ? _f() : null), this._pan = c(this, _l, _k.pan);
            }
        };
}), b.register('Z2YNM', function(c, d) {
    a(c.exports, 'createStereoPannerNodeRendererFactory', function() {
        return _g;
    });
    var e = b('7H2g7'),
        _f = b('Go0EV');
    const _g = (a, b, c, d, _g) => () => {
        const h = new WeakMap();
        return {
            render(i, j) {
                const k = h.get(j);
                return void 0 !== k ? Promise.resolve(k) : (async (i, j) => {
                    let l = c(i);
                    const m = (0, _f.isOwnedByContext)(l, j);
                    if (!m) {
                        const n = {
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            pan: l.pan.value
                        };
                        l = b(j, n);
                    }
                    return h.set(j, l), m ? await a(j, i.pan, l.pan) : await d(j, i.pan, l.pan), (0, e.isNativeAudioNodeFaker)(l) ? await _g(i, j, l.inputs[0]) : await _g(i, j, l), l;
                })(i, j);
            }
        };
    };
}), b.register('rO/oR', function(c, d) {
    a(c.exports, 'createTestAudioBufferConstructorSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        try {
            new a({
                length: 1,
                sampleRate: 44100
            });
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('DtaKO', function(c, d) {
    a(c.exports, 'createTestAudioBufferCopyChannelMethodsSubarraySupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        const f = new a(1, 1, 44100).createBuffer(1, 1, 44100);
        if (void 0 === f.copyToChannel)
            return !0;
        const g = new Float32Array(2);
        try {
            f.copyFromChannel(g, 0, 0);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('VXOAb', function(c, d) {
    a(c.exports, 'createTestAudioContextCloseMethodSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        if (void 0 !== a.prototype && void 0 !== a.prototype.close)
            return !0;
        const f = new a(),
            g = void 0 !== f.close;
        try {
            f.close();
        } catch {}
        return g;
    };
}), b.register('iQv1U', function(c, d) {
    a(c.exports, 'createTestAudioContextDecodeAudioDataMethodTypeErrorSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return Promise.resolve(!1);
        const f = new a(1, 1, 44100);
        return new Promise(a => {
            let g = !0;
            const h = h => {
                g && (g = !1, f.startRendering(), a(h instanceof TypeError));
            };
            let i;
            try {
                i = f.decodeAudioData(null, () => {}, h);
            } catch (a) {
                h(a);
            }
            void 0 !== i && i.catch(h);
        });
    };
}), b.register('fj8D/', function(c, d) {
    a(c.exports, 'createTestAudioContextOptionsSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        let f;
        try {
            f = new a({
                latencyHint: 'balanced'
            });
        } catch {
            return !1;
        }
        return f.close(), !0;
    };
}), b.register('bGl4+', function(c, d) {
    a(c.exports, 'createTestAudioNodeConnectMethodSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        const f = new a(1, 1, 44100).createGain(),
            g = f.connect(f) === f;
        return f.disconnect(f), g;
    };
}), b.register('hgjqh', function(c, d) {
    a(c.exports, 'createTestAudioWorkletProcessorNoOutputsSupport', function() {
        return _e;
    });
    const _e = (a, c) => async () => {
        if (null === a)
            return !0;
        if (null === c)
            return !1;
        const f = new Blob(['let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'], {
                type: 'application/javascript; charset=utf-8'
            }),
            g = new MessageChannel(),
            h = new c(1, 128, 44100),
            i = URL.createObjectURL(f);
        let j = !1;
        try {
            await h.audioWorklet.addModule(i);
            const k = new a(h, 'a', {
                    numberOfOutputs: 0
                }),
                l = h.createOscillator();
            await new Promise(a => {
                k.port.onmessage = () => a(), k.port.postMessage(g.port2, [g.port2]);
            }), k.port.onmessage = () => j = !0, l.connect(k), l.start(0), await h.startRendering(), j = await new Promise(a => {
                g.port1.onmessage = ({
                    data: m
                }) => a(1 === m), g.port1.postMessage(0);
            });
        } catch {} finally {
            g.port1.close(), URL.revokeObjectURL(i);
        }
        return j;
    };
}), b.register('ipMuz', function(c, d) {
    a(c.exports, 'createTestAudioWorkletProcessorPostMessageSupport', function() {
        return _e;
    });
    const _e = (a, c) => async () => {
        if (null === a)
            return !0;
        if (null === c)
            return !1;
        const f = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
                type: 'application/javascript; charset=utf-8'
            }),
            g = new c(1, 128, 44100),
            h = URL.createObjectURL(f);
        let i = !1,
            j = !1;
        try {
            await g.audioWorklet.addModule(h);
            const k = new a(g, 'a', {
                    numberOfOutputs: 0
                }),
                l = g.createOscillator();
            k.port.onmessage = () => i = !0, k.onprocessorerror = () => j = !0, l.connect(k), l.start(0), await g.startRendering();
        } catch {} finally {
            URL.revokeObjectURL(h);
        }
        return i && !j;
    };
}), b.register('AE5g7', function(c, d) {
    a(c.exports, 'createTestChannelMergerNodeChannelCountSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        const f = new a(1, 1, 44100).createChannelMerger();
        if ('max' === f.channelCountMode)
            return !0;
        try {
            f.channelCount = 2;
        } catch {
            return !0;
        }
        return !1;
    };
}), b.register('tQv7o', function(c, d) {
    a(c.exports, 'createTestConstantSourceNodeAccurateSchedulingSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        const f = new a(1, 1, 44100);
        if (void 0 === f.createConstantSource)
            return !0;
        return f.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY;
    };
}), b.register('GmvK9', function(c, d) {
    a(c.exports, 'createTestConvolverNodeBufferReassignabilitySupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        const f = new a(1, 1, 44100),
            g = f.createConvolver();
        g.buffer = f.createBuffer(1, 1, f.sampleRate);
        try {
            g.buffer = f.createBuffer(1, 1, f.sampleRate);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('ukzqi', function(c, d) {
    a(c.exports, 'createTestConvolverNodeChannelCountSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        const f = new a(1, 1, 44100).createConvolver();
        try {
            f.channelCount = 1;
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('5vOJY', function(c, d) {
    a(c.exports, 'createTestIsSecureContextSupport', function() {
        return _e;
    });
    const _e = a => () => null !== a && a.hasOwnProperty('isSecureContext');
}), b.register('uO85m', function(c, d) {
    a(c.exports, 'createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return !1;
        const f = new a();
        try {
            return f.createMediaStreamSource(new MediaStream()), !1;
        } catch (a) {
            return !0;
        } finally {
            f.close();
        }
    };
}), b.register('wIH/7', function(c, d) {
    a(c.exports, 'createTestOfflineAudioContextCurrentTimeSupport', function() {
        return _e;
    });
    const _e = (a, c) => () => {
        if (null === c)
            return Promise.resolve(!1);
        const f = new c(1, 1, 44100),
            g = a(f, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            });
        return new Promise(a => {
            f.oncomplete = () => {
                g.disconnect(), a(0 !== f.currentTime);
            }, f.startRendering();
        });
    };
}), b.register('Lg0xp', function(c, d) {
    a(c.exports, 'createTestStereoPannerNodeDefaultValueSupport', function() {
        return _e;
    });
    const _e = a => () => {
        if (null === a)
            return Promise.resolve(!1);
        const f = new a(1, 1, 44100);
        if (void 0 === f.createStereoPanner)
            return Promise.resolve(!0);
        if (void 0 === f.createConstantSource)
            return Promise.resolve(!0);
        const g = f.createConstantSource(),
            h = f.createStereoPanner();
        return g.channelCount = 1, g.offset.value = 1, h.channelCount = 1, g.start(), g.connect(h).connect(f.destination), f.startRendering().then(a => 1 !== a.getChannelData(0)[0]);
    };
}), b.register('uiLcs', function(c, d) {
    a(c.exports, 'createUnknownError', function() {
        return _e;
    });
    const _e = () => new DOMException('', 'UnknownError');
}), b.register('iNVny', function(c, d) {
    a(c.exports, 'createWaveShaperNodeConstructor', function() {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            curve: null,
            oversample: 'none'
        },
        _f = (a, c, d, _f, _f, _g, _j) => class extends a {
            get curve() {
                return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
            }
            set curve(g) {
                if (null === g)
                    this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([
                        0,
                        0
                    ]);
                else {
                    if (g.length < 2)
                        throw c();
                    this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = g;
                }
            }
            get oversample() {
                return this._nativeWaveShaperNode.oversample;
            }
            set oversample(g) {
                this._nativeWaveShaperNode.oversample = g;
            }
            constructor(g, h) {
                const i = _f(g),
                    j = {
                        ...e,
                        ...h
                    },
                    k = d(i, j);
                super(g, !0, k, _g(i) ? _f() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = k, _j(this, 1);
            }
        };
}), b.register('zpwcF', function(c, d) {
    a(c.exports, 'createWaveShaperNodeRendererFactory', function() {
        return _g;
    });
    var e = b('7H2g7'),
        _f = b('Go0EV');
    const _g = (a, b, c) => () => {
        const h = new WeakMap();
        return {
            render(i, _j) {
                const k = h.get(_j);
                return void 0 !== k ? Promise.resolve(k) : (async (i, _j) => {
                    let l = b(i);
                    if (!(0, _f.isOwnedByContext)(l, _j)) {
                        const m = {
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            curve: l.curve,
                            oversample: l.oversample
                        };
                        l = a(_j, m);
                    }
                    return h.set(_j, l), (0, e.isNativeAudioNodeFaker)(l) ? await c(i, _j, l.inputs[0]) : await c(i, _j, l), l;
                })(i, _j);
            }
        };
    };
}), b.register('jBm/j0', function(c, d) {
    a(c.exports, 'createWindow', function() {
        return _e;
    });
    const _e = () => 'undefined' == typeof window ? null : window;
}), b.register('BrNBU', function(c, d) {
    a(c.exports, 'createWrapAudioBufferCopyChannelMethods', function() {
        return _e;
    });
    const _e = (a, c) => d => {
        d.copyFromChannel = (_e, _f, f = 0) => {
            const g = a(f),
                h = a(_f);
            if (h >= d.numberOfChannels)
                throw c();
            const i = d.length,
                j = d.getChannelData(h),
                k = _e.length;
            for (let l = g < 0 ? -g : 0; l + g < i && l < k; l += 1)
                _e[l] = j[l + g];
        }, d.copyToChannel = (_e, _f, g = 0) => {
            const h = a(g),
                i = a(_f);
            if (i >= d.numberOfChannels)
                throw c();
            const j = d.length,
                k = d.getChannelData(i),
                l = _e.length;
            for (let m = h < 0 ? -h : 0; m + h < j && m < l; m += 1)
                k[m + h] = _e[m];
        };
    };
}), b.register('uPjLw', function(c, d) {
    a(c.exports, 'createWrapAudioBufferCopyChannelMethodsOutOfBounds', function() {
        return _e;
    });
    const _e = a => c => {
        var f, g;
        c.copyFromChannel = (f = c.copyFromChannel, (g, _f, h = 0) => {
            const i = a(h),
                j = a(_f);
            if (i < c.length)
                return f.call(c, g, j, i);
        }), c.copyToChannel = (g = c.copyToChannel, (f, _f, i = 0) => {
            const j = a(i),
                k = a(_f);
            if (j < c.length)
                return g.call(c, f, k, j);
        });
    };
}), b.register('9QabD', function(c, d) {
    a(c.exports, 'createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer', function() {
        return _e;
    });
    const _e = a => (c, d) => {
        const f = d.createBuffer(1, 1, 44100);
        null === c.buffer && (c.buffer = f), a(c, 'buffer', a => () => {
            const g = a.call(c);
            return g === f ? null : g;
        }, a => d => a.call(c, null === d ? f : d));
    };
}), b.register('ZSVGP', function(c, d) {
    a(c.exports, 'createWrapChannelMergerNode', function() {
        return _e;
    });
    const _e = (a, c) => (d, _e) => {
        _e.channelCount = 1, _e.channelCountMode = 'explicit', Object.defineProperty(_e, 'channelCount', {
            get: () => 1,
            set: () => {
                throw a();
            }
        }), Object.defineProperty(_e, 'channelCountMode', {
            get: () => 'explicit',
            set: () => {
                throw a();
            }
        });
        const _f = d.createBufferSource();
        c(_e, () => {
            const g = _e.numberOfInputs;
            for (let h = 0; h < g; h += 1)
                _f.connect(_e, 0, h);
        }, () => _f.disconnect(_e));
    };
}), b.register('dy3EA', function(c, d) {
    a(c.exports, 'getFirstSample', function() {
        return _e;
    });
    const _e = (a, c, d) => void 0 === a.copyFromChannel ? a.getChannelData(d)[0] : (a.copyFromChannel(c, d), c[0]);
}), b.register('zgITH', function(c, d) {
    a(c.exports, 'isDCCurve', function() {
        return _e;
    });
    const _e = a => {
        if (null === a)
            return !1;
        const f = a.length;
        return f % 2 != 0 ? 0 !== a[Math.floor(f / 2)] : a[f / 2 - 1] + a[f / 2] !== 0;
    };
}), b.register('ScS5M', function(c, d) {
    a(c.exports, 'overwriteAccessors', function() {
        return _e;
    });
    const _e = (a, c, d, _e) => {
        let f = a;
        for (; !f.hasOwnProperty(c);)
            f = Object.getPrototypeOf(f);
        const {
            get: g,
            set: h
        } = Object.getOwnPropertyDescriptor(f, c);
        Object.defineProperty(a, c, {
            get: d(g),
            set: _e(h)
        });
    };
}), b.register('TIa7A', function(c, d) {
    a(c.exports, 'sanitizeAudioWorkletNodeOptions', function() {
        return _e;
    });
    const _e = a => ({
        ...a,
        outputChannelCount: void 0 !== a.outputChannelCount ? a.outputChannelCount : 1 === a.numberOfInputs && 1 === a.numberOfOutputs ? [a.channelCount] : Array.from({
            length: a.numberOfOutputs
        }, () => 1)
    });
}), b.register('7+Ki0', function(c, d) {
    a(c.exports, 'sanitizeChannelSplitterOptions', function() {
        return _e;
    });
    const _e = a => ({
        ...a,
        channelCount: a.numberOfOutputs
    });
}), b.register('ZTvu2', function(c, d) {
    a(c.exports, 'sanitizePeriodicWaveOptions', function() {
        return _e;
    });
    const _e = a => {
        const {
            imag: f,
            real: g
        } = a;
        return void 0 === f ? void 0 === g ? {
            ...a,
            imag: [
                0,
                0
            ],
            real: [
                0,
                0
            ]
        } : {
            ...a,
            imag: Array.from(g, () => 0),
            real: g
        } : void 0 === g ? {
            ...a,
            imag: f,
            real: Array.from(f, () => 0)
        } : {
            ...a,
            imag: f,
            real: g
        };
    };
}), b.register('61TVm', function(c, d) {
    a(c.exports, 'setValueAtTimeUntilPossible', function() {
        return _e;
    });
    const _e = (a, c, d) => {
        try {
            a.setValueAtTime(c, d);
        } catch (_e) {
            if (9 !== _e.code)
                throw _e;
            _e(a, c, d + 1e-7);
        }
    };
}), b.register('CN8ed', function(c, d) {
    a(c.exports, 'testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport', function() {
        return _e;
    });
    const _e = a => {
        const f = a.createBufferSource();
        f.start();
        try {
            f.start();
        } catch {
            return !0;
        }
        return !1;
    };
}), b.register('jaEae', function(c, d) {
    a(c.exports, 'testAudioBufferSourceNodeStartMethodOffsetClampingSupport', function() {
        return _e;
    });
    const _e = a => {
        const f = a.createBufferSource(),
            g = a.createBuffer(1, 1, 44100);
        f.buffer = g;
        try {
            f.start(0, 1);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('1DKZM', function(c, d) {
    a(c.exports, 'testAudioBufferSourceNodeStopMethodNullifiedBufferSupport', function() {
        return _e;
    });
    const _e = a => {
        const f = a.createBufferSource();
        f.start();
        try {
            f.stop();
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('FTg3C', function(c, d) {
    a(c.exports, 'testAudioScheduledSourceNodeStartMethodNegativeParametersSupport', function() {
        return _e;
    });
    const _e = a => {
        const f = a.createOscillator();
        try {
            f.start(-1);
        } catch (a) {
            return a instanceof RangeError;
        }
        return !1;
    };
}), b.register('jUaVf', function(c, d) {
    a(c.exports, 'testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport', function() {
        return _e;
    });
    const _e = a => {
        const f = a.createBuffer(1, 1, 44100),
            g = a.createBufferSource();
        g.buffer = f, g.start(), g.stop();
        try {
            return g.stop(), !0;
        } catch {
            return !1;
        }
    };
}), b.register('V7E5r', function(c, d) {
    a(c.exports, 'testAudioScheduledSourceNodeStopMethodNegativeParametersSupport', function() {
        return _e;
    });
    const _e = a => {
        const f = a.createOscillator();
        try {
            f.stop(-1);
        } catch (a) {
            return a instanceof RangeError;
        }
        return !1;
    };
}), b.register('zznei', function(c, d) {
    a(c.exports, 'testAudioWorkletNodeOptionsClonability', function() {
        return _e;
    });
    const _e = a => {
        const {
            port1: f,
            port2: g
        } = new MessageChannel();
        try {
            f.postMessage(a);
        } finally {
            f.close(), g.close();
        }
    };
}), b.register('DRdRU', function(c, d) {
    a(c.exports, 'testDomExceptionConstructorSupport', function() {
        return _e;
    });
    const _e = () => {
        try {
            new DOMException();
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('zkMgM', function(c, d) {
    a(c.exports, 'testTransferablesSupport', function() {
        return _e;
    });
    const _e = () => new Promise(a => {
        const f = new ArrayBuffer(0),
            {
                port1: g,
                port2: h
            } = new MessageChannel();
        g.onmessage = ({
            data: i
        }) => a(null !== i), h.postMessage(i, [i]);
    });
}), b.register('d2Q5p', function(c, d) {
    a(c.exports, 'wrapAudioBufferSourceNodeStartMethodOffsetClamping', function() {
        return _e;
    });
    const _e = a => {
        var f;
        a.start = (f = a.start, (g = 0, h = 0, _e) => {
            const i = a.buffer,
                j = null === i ? h : Math.min(i.duration, h);
            null !== i && j > i.duration - 0.5 / a.context.sampleRate ? f.call(a, g, 0, 0) : f.call(a, g, j, _e);
        });
    };
}), b.register('kjhU9', function(c, d) {
    a(c.exports, 'wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls', function() {
        return _f;
    });
    var _e = b('0Gxwh');
    const _f = (a, b) => {
        const g = b.createGain();
        a.connect(g);
        const h = (_f = a.disconnect, () => {
            _f.call(a, g), a.removeEventListener('ended', h);
        });
        var i;
        a.addEventListener('ended', h), (0, _e.interceptConnections)(a, g), a.stop = (b => {
            let j = !1;
            return (k = 0) => {
                if (j)
                    try {
                        b.call(a, k);
                    } catch {
                        g.gain.setValueAtTime(0, k);
                    }
                else
                    b.call(a, k), j = !0;
            };
        })(a.stop);
    };
}), b.register('FPX+q0', function(c, d) {
    a(c.exports, 'wrapEventListener', function() {
        return _e;
    });
    const _e = (a, c) => d => {
        const f = {
            value: a
        };
        return Object.defineProperties(d, {
            currentTarget: f,
            target: f
        }), 'function' == typeof c ? c.call(a, d) : c.handleEvent.call(a, d);
    };
}), b.register('NRsVY', function(c, d) {
    b('CJP4m527'), b('CJP4m526'), b('CJP4m525'), b('CJP4m524'), b('CJP4m523'), b('CJP4m522'), b('CJP4m521'), b('CJP4m520'), b('CJP4m519'), b('CJP4m518'), b('CJP4m517'), b('CJP4m516'), b('CJP4m515'), b('CJP4m514'), b('CJP4m513'), b('CJP4m512'), b('CJP4m511'), b('CJP4m510'), b('CJP4m509'), b('CJP4m508'), b('CJP4m507'), b('CJP4m506'), b('CJP4m505'), b('CJP4m504'), b('CJP4m503'), b('CJP4m502'), b('CJP4m501'), b('CJP4m500'), b('CJP4m499'), b('CJP4m498'), b('CJP4m497'), b('CJP4m496'), b('CJP4m495'), b('CJP4m494'), b('CJP4m493'), b('CJP4m492'), b('CJP4m491'), b('CJP4m490'), b('CJP4m489'), b('CJP4m488'), b('CJP4m487'), b('CJP4m486'), b('CJP4m485'), b('CJP4m484'), b('CJP4m483'), b('CJP4m482'), b('CJP4m481'), b('CJP4m480'), b('CJP4m479'), b('CJP4m478'), b('CJP4m477'), b('CJP4m476'), b('CJP4m475'), b('CJP4m474'), b('CJP4m473'), b('CJP4m472'), b('CJP4m471'), b('CJP4m470'), b('CJP4m469'), b('CJP4m468'), b('CJP4m467'), b('CJP4m466'), b('CJP4m465'), b('CJP4m464'), b('CJP4m463'), b('CJP4m462'), b('CJP4m461'), b('CJP4m460'), b('CJP4m459'), b('CJP4m458'), b('CJP4m457'), b('CJP4m456'), b('CJP4m455'), b('CJP4m454'), b('CJP4m453'), b('CJP4m452'), b('CJP4m451'), b('CJP4m450'), b('CJP4m449'), b('CJP4m448'), b('CJP4m447'), b('CJP4m446'), b('CJP4m445'), b('CJP4m444');
}), b.register('CJP4m527', function(c, d) {}), b.register('CJP4m526', function(c, d) {}), b.register('CJP4m525', function(c, d) {}), b.register('CJP4m524', function(c, d) {}), b.register('CJP4m523', function(c, d) {}), b.register('CJP4m522', function(c, d) {}), b.register('CJP4m521', function(c, d) {}), b.register('CJP4m520', function(c, d) {}), b.register('CJP4m519', function(c, d) {}), b.register('CJP4m518', function(c, d) {}), b.register('CJP4m517', function(c, d) {}), b.register('CJP4m516', function(c, d) {}), b.register('CJP4m515', function(c, d) {}), b.register('CJP4m514', function(c, d) {}), b.register('CJP4m513', function(c, d) {}), b.register('CJP4m512', function(c, d) {}), b.register('CJP4m511', function(c, d) {}), b.register('CJP4m510', function(c, d) {}), b.register('CJP4m509', function(c, d) {}), b.register('CJP4m508', function(c, d) {}), b.register('CJP4m507', function(c, d) {}), b.register('CJP4m506', function(c, d) {}), b.register('CJP4m505', function(c, d) {}), b.register('CJP4m504', function(c, d) {}), b.register('CJP4m503', function(c, d) {}), b.register('CJP4m502', function(c, d) {}), b.register('CJP4m501', function(c, d) {}), b.register('CJP4m500', function(c, d) {}), b.register('CJP4m499', function(c, d) {}), b.register('CJP4m498', function(c, d) {}), b.register('CJP4m497', function(c, d) {}), b.register('CJP4m496', function(c, d) {}), b.register('CJP4m495', function(c, d) {}), b.register('CJP4m494', function(c, d) {}), b.register('CJP4m493', function(c, d) {}), b.register('CJP4m492', function(c, d) {}), b.register('CJP4m491', function(c, d) {}), b.register('CJP4m490', function(c, d) {}), b.register('CJP4m489', function(c, d) {}), b.register('CJP4m488', function(c, d) {}), b.register('CJP4m487', function(c, d) {}), b.register('CJP4m486', function(c, d) {}), b.register('CJP4m485', function(c, d) {}), b.register('CJP4m484', function(c, d) {}), b.register('CJP4m483', function(c, d) {}), b.register('CJP4m482', function(c, d) {}), b.register('CJP4m481', function(c, d) {}), b.register('CJP4m480', function(c, d) {}), b.register('CJP4m479', function(c, d) {}), b.register('CJP4m478', function(c, d) {}), b.register('CJP4m477', function(c, d) {}), b.register('CJP4m476', function(c, d) {}), b.register('CJP4m475', function(c, d) {}), b.register('CJP4m474', function(c, d) {}), b.register('CJP4m473', function(c, d) {}), b.register('CJP4m472', function(c, d) {}), b.register('CJP4m471', function(c, d) {}), b.register('CJP4m470', function(c, d) {}), b.register('CJP4m469', function(c, d) {}), b.register('CJP4m468', function(c, d) {}), b.register('CJP4m467', function(c, d) {}), b.register('CJP4m466', function(c, d) {}), b.register('CJP4m465', function(c, d) {}), b.register('CJP4m464', function(c, d) {}), b.register('CJP4m463', function(c, d) {}), b.register('CJP4m462', function(c, d) {}), b.register('CJP4m461', function(c, d) {}), b.register('CJP4m460', function(c, d) {}), b.register('CJP4m459', function(c, d) {}), b.register('CJP4m458', function(c, d) {}), b.register('CJP4m457', function(c, d) {}), b.register('CJP4m456', function(c, d) {}), b.register('CJP4m455', function(c, d) {}), b.register('CJP4m454', function(c, d) {}), b.register('CJP4m453', function(c, d) {}), b.register('CJP4m452', function(c, d) {}), b.register('CJP4m451', function(c, d) {}), b.register('CJP4m450', function(c, d) {}), b.register('CJP4m449', function(c, d) {}), b.register('CJP4m448', function(c, d) {}), b.register('CJP4m447', function(c, d) {}), b.register('CJP4m446', function(c, d) {}), b.register('CJP4m445', function(c, d) {}), b.register('CJP4m444', function(c, d) {}), b.register('xQamc', function(c, d) {
    b('CJP4m443'), b('CJP4m442'), b('CJP4m441'), b('CJP4m440'), b('CJP4m439'), b('CJP4m438'), b('CJP4m437'), b('CJP4m436'), b('CJP4m435'), b('CJP4m434'), b('CJP4m433'), b('CJP4m432'), b('CJP4m431'), b('CJP4m430'), b('CJP4m429'), b('CJP4m428'), b('CJP4m427'), b('CJP4m426'), b('CJP4m425'), b('CJP4m424'), b('CJP4m423'), b('CJP4m422'), b('CJP4m421'), b('CJP4m420'), b('CJP4m419'), b('CJP4m418'), b('CJP4m417'), b('CJP4m416'), b('CJP4m415'), b('CJP4m414'), b('CJP4m413'), b('CJP4m412'), b('CJP4m411'), b('CJP4m410'), b('CJP4m409'), b('CJP4m408'), b('CJP4m407'), b('CJP4m406'), b('CJP4m405'), b('CJP4m404'), b('CJP4m403'), b('CJP4m402'), b('CJP4m401'), b('CJP4m400'), b('CJP4m399'), b('CJP4m398'), b('CJP4m397'), b('CJP4m396'), b('CJP4m395'), b('CJP4m394'), b('CJP4m393'), b('CJP4m392'), b('CJP4m391'), b('CJP4m390'), b('CJP4m389'), b('CJP4m388'), b('CJP4m387'), b('CJP4m386'), b('CJP4m385'), b('CJP4m384'), b('CJP4m383'), b('CJP4m382'), b('CJP4m381'), b('CJP4m380'), b('CJP4m379'), b('CJP4m378'), b('CJP4m377'), b('CJP4m376'), b('CJP4m375'), b('CJP4m374'), b('CJP4m373'), b('CJP4m372'), b('CJP4m371'), b('CJP4m370'), b('CJP4m369'), b('CJP4m368'), b('CJP4m367'), b('CJP4m366'), b('CJP4m365'), b('CJP4m364'), b('CJP4m363'), b('CJP4m362'), b('CJP4m361'), b('CJP4m360'), b('CJP4m359'), b('CJP4m358'), b('CJP4m357'), b('CJP4m356'), b('CJP4m355'), b('CJP4m354'), b('CJP4m353'), b('CJP4m352'), b('CJP4m351'), b('CJP4m350'), b('CJP4m349'), b('CJP4m348'), b('CJP4m347'), b('CJP4m346'), b('CJP4m345'), b('CJP4m344'), b('CJP4m343'), b('CJP4m342'), b('CJP4m341'), b('CJP4m340'), b('CJP4m339'), b('CJP4m338'), b('CJP4m337'), b('CJP4m336'), b('CJP4m335'), b('CJP4m334'), b('CJP4m333'), b('CJP4m332'), b('CJP4m331'), b('CJP4m330'), b('CJP4m329'), b('CJP4m328'), b('CJP4m327'), b('CJP4m326'), b('CJP4m325'), b('CJP4m324'), b('CJP4m323'), b('CJP4m322'), b('CJP4m321'), b('CJP4m320'), b('CJP4m319'), b('CJP4m318'), b('CJP4m317'), b('CJP4m316'), b('CJP4m315'), b('CJP4m314'), b('CJP4m313'), b('CJP4m312'), b('CJP4m311'), b('CJP4m310'), b('CJP4m309'), b('CJP4m308'), b('CJP4m307'), b('CJP4m306'), b('CJP4m305'), b('CJP4m304'), b('CJP4m303'), b('CJP4m302'), b('CJP4m301'), b('CJP4m300'), b('CJP4m299'), b('CJP4m298'), b('CJP4m297'), b('CJP4m296'), b('CJP4m295'), b('CJP4m294'), b('CJP4m293'), b('CJP4m292'), b('CJP4m291'), b('CJP4m290'), b('CJP4m289'), b('CJP4m288'), b('CJP4m287'), b('CJP4m286'), b('CJP4m285'), b('CJP4m284'), b('CJP4m283'), b('CJP4m282'), b('CJP4m281'), b('CJP4m280'), b('CJP4m279'), b('CJP4m278'), b('CJP4m277'), b('CJP4m276'), b('CJP4m275'), b('CJP4m274'), b('CJP4m273'), b('CJP4m272'), b('CJP4m271'), b('CJP4m270'), b('CJP4m269'), b('CJP4m268'), b('CJP4m267'), b('CJP4m266'), b('CJP4m265'), b('CJP4m264'), b('CJP4m263'), b('CJP4m262'), b('CJP4m261'), b('CJP4m260'), b('CJP4m259'), b('CJP4m258'), b('CJP4m257'), b('CJP4m256'), b('CJP4m255'), b('CJP4m254'), b('CJP4m253'), b('CJP4m252'), b('CJP4m251'), b('CJP4m250'), b('CJP4m249'), b('CJP4m248'), b('CJP4m247'), b('CJP4m246'), b('CJP4m245'), b('CJP4m244'), b('CJP4m243'), b('CJP4m242'), b('CJP4m241'), b('CJP4m240'), b('CJP4m239'), b('CJP4m238'), b('CJP4m237'), b('CJP4m236'), b('CJP4m235'), b('CJP4m234'), b('CJP4m233'), b('CJP4m232'), b('CJP4m231'), b('CJP4m230'), b('CJP4m229'), b('CJP4m228'), b('CJP4m227'), b('CJP4m226'), b('CJP4m225'), b('CJP4m224'), b('CJP4m223'), b('CJP4m222'), b('CJP4m221'), b('CJP4m220'), b('CJP4m219'), b('CJP4m218'), b('CJP4m217'), b('rxE/f'), b('CJP4m216'), b('CJP4m215'), b('CJP4m214'), b('CJP4m213'), b('CJP4m212'), b('CJP4m211'), b('CJP4m210'), b('CJP4m209'), b('CJP4m208'), b('CJP4m207'), b('CJP4m206'), b('CJP4m205'), b('CJP4m204'), b('CJP4m203'), b('CJP4m202'), b('CJP4m201'), b('CJP4m200'), b('CJP4m199'), b('CJP4m198'), b('CJP4m197'), b('CJP4m196'), b('CJP4m195'), b('CJP4m194'), b('CJP4m193'), b('CJP4m192'), b('CJP4m191'), b('CJP4m190'), b('CJP4m189'), b('CJP4m188'), b('CJP4m187'), b('CJP4m186'), b('CJP4m185'), b('CJP4m184'), b('CJP4m183'), b('CJP4m182'), b('CJP4m181'), b('CJP4m180'), b('CJP4m179'), b('CJP4m178'), b('CJP4m177'), b('CJP4m176'), b('CJP4m175'), b('CJP4m174'), b('CJP4m173'), b('CJP4m172'), b('CJP4m171'), b('CJP4m170'), b('CJP4m169'), b('CJP4m168'), b('CJP4m167'), b('CJP4m166'), b('CJP4m165'), b('CJP4m164'), b('CJP4m163'), b('CJP4m162'), b('CJP4m161'), b('CJP4m160'), b('CJP4m159'), b('CJP4m158'), b('CJP4m157'), b('CJP4m156'), b('CJP4m155'), b('CJP4m154'), b('CJP4m153'), b('CJP4m152'), b('CJP4m151'), b('CJP4m150'), b('CJP4m149'), b('CJP4m148'), b('CJP4m147'), b('CJP4m146'), b('CJP4m145'), b('CJP4m144'), b('CJP4m143'), b('CJP4m142'), b('CJP4m141'), b('CJP4m140'), b('CJP4m139'), b('CJP4m138'), b('CJP4m137'), b('CJP4m136'), b('CJP4m135'), b('CJP4m134'), b('CJP4m133'), b('CJP4m132'), b('CJP4m131'), b('CJP4m130'), b('CJP4m129'), b('CJP4m128'), b('CJP4m127'), b('CJP4m126'), b('CJP4m125'), b('CJP4m124'), b('CJP4m123'), b('CJP4m122'), b('CJP4m121'), b('CJP4m120'), b('CJP4m119'), b('CJP4m118'), b('CJP4m117'), b('CJP4m116'), b('CJP4m115'), b('CJP4m114'), b('CJP4m113'), b('CJP4m112'), b('CJP4m111'), b('CJP4m110'), b('CJP4m109'), b('CJP4m108'), b('CJP4m107'), b('CJP4m106'), b('CJP4m105'), b('CJP4m104'), b('CJP4m103'), b('CJP4m102'), b('CJP4m101'), b('CJP4m100'), b('CJP4m99'), b('CJP4m98'), b('CJP4m97'), b('CJP4m96'), b('CJP4m95'), b('CJP4m94'), b('CJP4m93'), b('CJP4m92'), b('CJP4m91'), b('CJP4m90'), b('CJP4m89'), b('CJP4m88'), b('CJP4m87'), b('CJP4m86'), b('CJP4m85'), b('CJP4m84'), b('CJP4m83'), b('CJP4m82'), b('CJP4m81'), b('CJP4m80'), b('CJP4m79'), b('CJP4m78'), b('CJP4m77'), b('CJP4m76'), b('CJP4m75'), b('CJP4m74'), b('CJP4m73'), b('CJP4m72'), b('CJP4m71'), b('CJP4m70'), b('CJP4m69'), b('CJP4m68'), b('CJP4m67'), b('CJP4m66'), b('CJP4m65'), b('CJP4m64'), b('CJP4m63'), b('CJP4m62'), b('CJP4m61'), b('CJP4m60'), b('CJP4m59'), b('CJP4m58'), b('CJP4m57'), b('CJP4m56'), b('CJP4m55'), b('CJP4m54'), b('CJP4m53'), b('CJP4m52'), b('CJP4m51'), b('CJP4m50');
}), b.register('CJP4m443', function(c, d) {}), b.register('CJP4m442', function(c, d) {}), b.register('CJP4m441', function(c, d) {}), b.register('CJP4m440', function(c, d) {}), b.register('CJP4m439', function(c, d) {}), b.register('CJP4m438', function(c, d) {}), b.register('CJP4m437', function(c, d) {}), b.register('CJP4m436', function(c, d) {}), b.register('CJP4m435', function(c, d) {}), b.register('CJP4m434', function(c, d) {}), b.register('CJP4m433', function(c, d) {}), b.register('CJP4m432', function(c, d) {}), b.register('CJP4m431', function(c, d) {}), b.register('CJP4m430', function(c, d) {}), b.register('CJP4m429', function(c, d) {}), b.register('CJP4m428', function(c, d) {}), b.register('CJP4m427', function(c, d) {}), b.register('CJP4m426', function(c, d) {}), b.register('CJP4m425', function(c, d) {}), b.register('CJP4m424', function(c, d) {}), b.register('CJP4m423', function(c, d) {}), b.register('CJP4m422', function(c, d) {}), b.register('CJP4m421', function(c, d) {}), b.register('CJP4m420', function(c, d) {}), b.register('CJP4m419', function(c, d) {}), b.register('CJP4m418', function(c, d) {}), b.register('CJP4m417', function(c, d) {}), b.register('CJP4m416', function(c, d) {}), b.register('CJP4m415', function(c, d) {}), b.register('CJP4m414', function(c, d) {}), b.register('CJP4m413', function(c, d) {}), b.register('CJP4m412', function(c, d) {}), b.register('CJP4m411', function(c, d) {}), b.register('CJP4m410', function(c, d) {}), b.register('CJP4m409', function(c, d) {}), b.register('CJP4m408', function(c, d) {}), b.register('CJP4m407', function(c, d) {}), b.register('CJP4m406', function(c, d) {}), b.register('CJP4m405', function(c, d) {}), b.register('CJP4m404', function(c, d) {}), b.register('CJP4m403', function(c, d) {}), b.register('CJP4m402', function(c, d) {}), b.register('CJP4m401', function(c, d) {}), b.register('CJP4m400', function(c, d) {}), b.register('CJP4m399', function(c, d) {}), b.register('CJP4m398', function(c, d) {}), b.register('CJP4m397', function(c, d) {}), b.register('CJP4m396', function(c, d) {}), b.register('CJP4m395', function(c, d) {}), b.register('CJP4m394', function(c, d) {}), b.register('CJP4m393', function(c, d) {}), b.register('CJP4m392', function(c, d) {}), b.register('CJP4m391', function(c, d) {}), b.register('CJP4m390', function(c, d) {}), b.register('CJP4m389', function(c, d) {}), b.register('CJP4m388', function(c, d) {}), b.register('CJP4m387', function(c, d) {}), b.register('CJP4m386', function(c, d) {}), b.register('CJP4m385', function(c, d) {}), b.register('CJP4m384', function(c, d) {}), b.register('CJP4m383', function(c, d) {}), b.register('CJP4m382', function(c, d) {}), b.register('CJP4m381', function(c, d) {}), b.register('CJP4m380', function(c, d) {}), b.register('CJP4m379', function(c, d) {}), b.register('CJP4m378', function(c, d) {}), b.register('CJP4m377', function(c, d) {}), b.register('CJP4m376', function(c, d) {}), b.register('CJP4m375', function(c, d) {}), b.register('CJP4m374', function(c, d) {}), b.register('CJP4m373', function(c, d) {}), b.register('CJP4m372', function(c, d) {}), b.register('CJP4m371', function(c, d) {}), b.register('CJP4m370', function(c, d) {}), b.register('CJP4m369', function(c, d) {}), b.register('CJP4m368', function(c, d) {}), b.register('CJP4m367', function(c, d) {}), b.register('CJP4m366', function(c, d) {}), b.register('CJP4m365', function(c, d) {}), b.register('CJP4m364', function(c, d) {}), b.register('CJP4m363', function(c, d) {}), b.register('CJP4m362', function(c, d) {}), b.register('CJP4m361', function(c, d) {}), b.register('CJP4m360', function(c, d) {}), b.register('CJP4m359', function(c, d) {}), b.register('CJP4m358', function(c, d) {}), b.register('CJP4m357', function(c, d) {}), b.register('CJP4m356', function(c, d) {}), b.register('CJP4m355', function(c, d) {}), b.register('CJP4m354', function(c, d) {}), b.register('CJP4m353', function(c, d) {}), b.register('CJP4m352', function(c, d) {}), b.register('CJP4m351', function(c, d) {}), b.register('CJP4m350', function(c, d) {}), b.register('CJP4m349', function(c, d) {}), b.register('CJP4m348', function(c, d) {}), b.register('CJP4m347', function(c, d) {}), b.register('CJP4m346', function(c, d) {}), b.register('CJP4m345', function(c, d) {}), b.register('CJP4m344', function(c, d) {}), b.register('CJP4m343', function(c, d) {}), b.register('CJP4m342', function(c, d) {}), b.register('CJP4m341', function(c, d) {}), b.register('CJP4m340', function(c, d) {}), b.register('CJP4m339', function(c, d) {}), b.register('CJP4m338', function(c, d) {}), b.register('CJP4m337', function(c, d) {}), b.register('CJP4m336', function(c, d) {}), b.register('CJP4m335', function(c, d) {}), b.register('CJP4m334', function(c, d) {}), b.register('CJP4m333', function(c, d) {}), b.register('CJP4m332', function(c, d) {}), b.register('CJP4m331', function(c, d) {}), b.register('CJP4m330', function(c, d) {}), b.register('CJP4m329', function(c, d) {}), b.register('CJP4m328', function(c, d) {}), b.register('CJP4m327', function(c, d) {}), b.register('CJP4m326', function(c, d) {}), b.register('CJP4m325', function(c, d) {}), b.register('CJP4m324', function(c, d) {}), b.register('CJP4m323', function(c, d) {}), b.register('CJP4m322', function(c, d) {}), b.register('CJP4m321', function(c, d) {}), b.register('CJP4m320', function(c, d) {}), b.register('CJP4m319', function(c, d) {}), b.register('CJP4m318', function(c, d) {}), b.register('CJP4m317', function(c, d) {}), b.register('CJP4m316', function(c, d) {}), b.register('CJP4m315', function(c, d) {}), b.register('CJP4m314', function(c, d) {}), b.register('CJP4m313', function(c, d) {}), b.register('CJP4m312', function(c, d) {}), b.register('CJP4m311', function(c, d) {}), b.register('CJP4m310', function(c, d) {}), b.register('CJP4m309', function(c, d) {}), b.register('CJP4m308', function(c, d) {}), b.register('CJP4m307', function(c, d) {}), b.register('CJP4m306', function(c, d) {}), b.register('CJP4m305', function(c, d) {}), b.register('CJP4m304', function(c, d) {}), b.register('CJP4m303', function(c, d) {}), b.register('CJP4m302', function(c, d) {}), b.register('CJP4m301', function(c, d) {}), b.register('CJP4m300', function(c, d) {}), b.register('CJP4m299', function(c, d) {}), b.register('CJP4m298', function(c, d) {}), b.register('CJP4m297', function(c, d) {}), b.register('CJP4m296', function(c, d) {}), b.register('CJP4m295', function(c, d) {}), b.register('CJP4m294', function(c, d) {}), b.register('CJP4m293', function(c, d) {}), b.register('CJP4m292', function(c, d) {}), b.register('CJP4m291', function(c, d) {}), b.register('CJP4m290', function(c, d) {}), b.register('CJP4m289', function(c, d) {}), b.register('CJP4m288', function(c, d) {}), b.register('CJP4m287', function(c, d) {}), b.register('CJP4m286', function(c, d) {}), b.register('CJP4m285', function(c, d) {}), b.register('CJP4m284', function(c, d) {}), b.register('CJP4m283', function(c, d) {}), b.register('CJP4m282', function(c, d) {}), b.register('CJP4m281', function(c, d) {}), b.register('CJP4m280', function(c, d) {}), b.register('CJP4m279', function(c, d) {}), b.register('CJP4m278', function(c, d) {}), b.register('CJP4m277', function(c, d) {}), b.register('CJP4m276', function(c, d) {}), b.register('CJP4m275', function(c, d) {}), b.register('CJP4m274', function(c, d) {}), b.register('CJP4m273', function(c, d) {}), b.register('CJP4m272', function(c, d) {}), b.register('CJP4m271', function(c, d) {}), b.register('CJP4m270', function(c, d) {}), b.register('CJP4m269', function(c, d) {}), b.register('CJP4m268', function(c, d) {}), b.register('CJP4m267', function(c, d) {}), b.register('CJP4m266', function(c, d) {}), b.register('CJP4m265', function(c, d) {}), b.register('CJP4m264', function(c, d) {}), b.register('CJP4m263', function(c, d) {}), b.register('CJP4m262', function(c, d) {}), b.register('CJP4m261', function(c, d) {}), b.register('CJP4m260', function(c, d) {}), b.register('CJP4m259', function(c, d) {}), b.register('CJP4m258', function(c, d) {}), b.register('CJP4m257', function(c, d) {}), b.register('CJP4m256', function(c, d) {}), b.register('CJP4m255', function(c, d) {}), b.register('CJP4m254', function(c, d) {}), b.register('CJP4m253', function(c, d) {}), b.register('CJP4m252', function(c, d) {}), b.register('CJP4m251', function(c, d) {}), b.register('CJP4m250', function(c, d) {}), b.register('CJP4m249', function(c, d) {}), b.register('CJP4m248', function(c, d) {}), b.register('CJP4m247', function(c, d) {}), b.register('CJP4m246', function(c, d) {}), b.register('CJP4m245', function(c, d) {}), b.register('CJP4m244', function(c, d) {}), b.register('CJP4m243', function(c, d) {}), b.register('CJP4m242', function(c, d) {}), b.register('CJP4m241', function(c, d) {}), b.register('CJP4m240', function(c, d) {}), b.register('CJP4m239', function(c, d) {}), b.register('CJP4m238', function(c, d) {}), b.register('CJP4m237', function(c, d) {}), b.register('CJP4m236', function(c, d) {}), b.register('CJP4m235', function(c, d) {}), b.register('CJP4m234', function(c, d) {}), b.register('CJP4m233', function(c, d) {}), b.register('CJP4m232', function(c, d) {}), b.register('CJP4m231', function(c, d) {}), b.register('CJP4m230', function(c, d) {}), b.register('CJP4m229', function(c, d) {}), b.register('CJP4m228', function(c, d) {}), b.register('CJP4m227', function(c, d) {}), b.register('CJP4m226', function(c, d) {}), b.register('CJP4m225', function(c, d) {}), b.register('CJP4m224', function(c, d) {}), b.register('CJP4m223', function(c, d) {}), b.register('CJP4m222', function(c, d) {}), b.register('CJP4m221', function(c, d) {}), b.register('CJP4m220', function(c, d) {}), b.register('CJP4m219', function(c, d) {}), b.register('CJP4m218', function(c, d) {}), b.register('CJP4m217', function(c, d) {}), b.register('rxE/f', function(c, d) {});
b.register('CJP4m216', function(c, d) {}), b.register('CJP4m215', function(c, d) {}), b.register('CJP4m214', function(c, d) {}), b.register('CJP4m213', function(c, d) {}), b.register('CJP4m212', function(c, d) {}), b.register('CJP4m211', function(c, d) {}), b.register('CJP4m210', function(c, d) {}), b.register('CJP4m209', function(c, d) {}), b.register('CJP4m208', function(c, d) {}), b.register('CJP4m207', function(c, d) {}), b.register('CJP4m206', function(c, d) {}), b.register('CJP4m205', function(c, d) {}), b.register('CJP4m204', function(c, d) {}), b.register('CJP4m203', function(c, d) {}), b.register('CJP4m202', function(c, d) {}), b.register('CJP4m201', function(c, d) {}), b.register('CJP4m200', function(c, d) {}), b.register('CJP4m199', function(c, d) {}), b.register('CJP4m198', function(c, d) {}), b.register('CJP4m197', function(c, d) {}), b.register('CJP4m196', function(c, d) {}), b.register('CJP4m195', function(c, d) {}), b.register('CJP4m194', function(c, d) {}), b.register('CJP4m193', function(c, d) {}), b.register('CJP4m192', function(c, d) {}), b.register('CJP4m191', function(c, d) {}), b.register('CJP4m190', function(c, d) {}), b.register('CJP4m189', function(c, d) {}), b.register('CJP4m188', function(c, d) {}), b.register('CJP4m187', function(c, d) {}), b.register('CJP4m186', function(c, d) {}), b.register('CJP4m185', function(c, d) {}), b.register('CJP4m184', function(c, d) {}), b.register('CJP4m183', function(c, d) {}), b.register('CJP4m182', function(c, d) {}), b.register('CJP4m181', function(c, d) {}), b.register('CJP4m180', function(c, d) {}), b.register('CJP4m179', function(c, d) {}), b.register('CJP4m178', function(c, d) {}), b.register('CJP4m177', function(c, d) {}), b.register('CJP4m176', function(c, d) {}), b.register('CJP4m175', function(c, d) {}), b.register('CJP4m174', function(c, d) {}), b.register('CJP4m173', function(c, d) {}), b.register('CJP4m172', function(c, d) {}), b.register('CJP4m171', function(c, d) {}), b.register('CJP4m170', function(c, d) {}), b.register('CJP4m169', function(c, d) {}), b.register('CJP4m168', function(c, d) {}), b.register('CJP4m167', function(c, d) {}), b.register('CJP4m166', function(c, d) {}), b.register('CJP4m165', function(c, d) {}), b.register('CJP4m164', function(c, d) {}), b.register('CJP4m163', function(c, d) {}), b.register('CJP4m162', function(c, d) {}), b.register('CJP4m161', function(c, d) {}), b.register('CJP4m160', function(c, d) {}), b.register('CJP4m159', function(c, d) {}), b.register('CJP4m158', function(c, d) {}), b.register('CJP4m157', function(c, d) {}), b.register('CJP4m156', function(c, d) {}), b.register('CJP4m155', function(c, d) {}), b.register('CJP4m154', function(c, d) {}), b.register('CJP4m153', function(c, d) {}), b.register('CJP4m152', function(c, d) {}), b.register('CJP4m151', function(c, d) {}), b.register('CJP4m150', function(c, d) {}), b.register('CJP4m149', function(c, d) {}), b.register('CJP4m148', function(c, d) {}), b.register('CJP4m147', function(c, d) {}), b.register('CJP4m146', function(c, d) {}), b.register('CJP4m145', function(c, d) {}), b.register('CJP4m144', function(c, d) {}), b.register('CJP4m143', function(c, d) {}), b.register('CJP4m142', function(c, d) {}), b.register('CJP4m141', function(c, d) {}), b.register('CJP4m140', function(c, d) {}), b.register('CJP4m139', function(c, d) {}), b.register('CJP4m138', function(c, d) {}), b.register('CJP4m137', function(c, d) {}), b.register('CJP4m136', function(c, d) {}), b.register('CJP4m135', function(c, d) {}), b.register('CJP4m134', function(c, d) {}), b.register('CJP4m133', function(c, d) {}), b.register('CJP4m132', function(c, d) {}), b.register('CJP4m131', function(c, d) {}), b.register('CJP4m130', function(c, d) {}), b.register('CJP4m129', function(c, d) {}), b.register('CJP4m128', function(c, d) {}), b.register('CJP4m127', function(c, d) {}), b.register('CJP4m126', function(c, d) {}), b.register('CJP4m125', function(c, d) {}), b.register('CJP4m124', function(c, d) {}), b.register('CJP4m123', function(c, d) {}), b.register('CJP4m122', function(c, d) {}), b.register('CJP4m121', function(c, d) {}), b.register('CJP4m120', function(c, d) {}), b.register('CJP4m119', function(c, d) {}), b.register('CJP4m118', function(c, d) {}), b.register('CJP4m117', function(c, d) {}), b.register('CJP4m116', function(c, d) {}), b.register('CJP4m115', function(c, d) {}), b.register('CJP4m114', function(c, d) {}), b.register('CJP4m113', function(c, d) {}), b.register('CJP4m112', function(c, d) {}), b.register('CJP4m111', function(c, d) {}), b.register('CJP4m110', function(c, d) {}), b.register('CJP4m109', function(c, d) {}), b.register('CJP4m108', function(c, d) {}), b.register('CJP4m107', function(c, d) {}), b.register('CJP4m106', function(c, d) {}), b.register('CJP4m105', function(c, d) {}), b.register('CJP4m104', function(c, d) {}), b.register('CJP4m103', function(c, d) {}), b.register('CJP4m102', function(c, d) {}), b.register('CJP4m101', function(c, d) {}), b.register('CJP4m100', function(c, d) {}), b.register('CJP4m99', function(c, d) {}), b.register('CJP4m98', function(c, d) {}), b.register('CJP4m97', function(c, d) {}), b.register('CJP4m96', function(c, d) {}), b.register('CJP4m95', function(c, d) {}), b.register('CJP4m94', function(c, d) {}), b.register('CJP4m93', function(c, d) {}), b.register('CJP4m92', function(c, d) {}), b.register('CJP4m91', function(c, d) {}), b.register('CJP4m90', function(c, d) {}), b.register('CJP4m89', function(c, d) {}), b.register('CJP4m88', function(c, d) {}), b.register('CJP4m87', function(c, d) {}), b.register('CJP4m86', function(c, d) {}), b.register('CJP4m85', function(c, d) {}), b.register('CJP4m84', function(c, d) {}), b.register('CJP4m83', function(c, d) {}), b.register('CJP4m82', function(c, d) {}), b.register('CJP4m81', function(c, d) {}), b.register('CJP4m80', function(c, d) {}), b.register('CJP4m79', function(c, d) {}), b.register('CJP4m78', function(c, d) {}), b.register('CJP4m77', function(c, d) {}), b.register('CJP4m76', function(c, d) {}), b.register('CJP4m75', function(c, d) {}), b.register('CJP4m74', function(c, d) {}), b.register('CJP4m73', function(c, d) {}), b.register('CJP4m72', function(c, d) {}), b.register('CJP4m71', function(c, d) {}), b.register('CJP4m70', function(c, d) {}), b.register('CJP4m69', function(c, d) {}), b.register('CJP4m68', function(c, d) {}), b.register('CJP4m67', function(c, d) {}), b.register('CJP4m66', function(c, d) {}), b.register('CJP4m65', function(c, d) {}), b.register('CJP4m64', function(c, d) {}), b.register('CJP4m63', function(c, d) {}), b.register('CJP4m62', function(c, d) {}), b.register('CJP4m61', function(c, d) {}), b.register('CJP4m60', function(c, d) {}), b.register('CJP4m59', function(c, d) {}), b.register('CJP4m58', function(c, d) {}), b.register('CJP4m57', function(c, d) {}), b.register('CJP4m56', function(c, d) {}), b.register('CJP4m55', function(c, d) {}), b.register('CJP4m54', function(c, d) {}), b.register('CJP4m53', function(c, d) {}), b.register('CJP4m52', function(c, d) {}), b.register('CJP4m51', function(c, d) {}), b.register('CJP4m50', function(c, d) {}), b.register('FEiId', function(c, d) {
    a(c.exports, 'createWebmPcmMediaRecorderFactory', function() {
        return _h;
    });
    var e = b('lyOZT'),
        f = b('Mz5Eh'),
        g = b('wC6Om');
    const _h = (a, b, c, d, _h) => (_m, _v, _w, _B) => {
        const i = _w.getAudioTracks(),
            j = [],
            k = 0 === i.length ? void 0 : i[0].getSettings().channelCount,
            l = new _v(_w, {
                mimeType: 'audio/webm;codecs=pcm'
            }),
            m = 0 === i.length ? void 0 : i[0].getSettings().sampleRate;
        let n = null,
            o = () => {};
        const p = b => {
                _m.dispatchEvent(a('dataavailable', {
                    data: new Blob(b, {
                        type: _B
                    })
                }));
            },
            q = async (a, b) => {
                const r = await (0, e.encode)(a, b);
                'inactive' === l.state ? j.push(...r) : (p(r), n = q(a, b));
            }, r = () => {
                'inactive' !== l.state && (null !== n && (n.catch(() => {}), n = null), o(), o = () => {}, l.stop());
            };
        return l.addEventListener('error', () => {
            r(), _m.dispatchEvent(new ErrorEvent('error', {
                error: b()
            }));
        }), l.addEventListener('start', () => _m.dispatchEvent(new Event('start'))), {
            get mimeType() {
                return _B;
            },
            get state() {
                return l.state;
            },
            pause: () => l.pause(),
            resume: () => l.resume(),
            start(s) {
                if (_w.getVideoTracks().length > 0)
                    throw c();
                if ('inactive' === l.state) {
                    if (void 0 === m)
                        throw new Error('The sampleRate is not defined.');
                    let t = !1,
                        u = !1,
                        _v = 0,
                        _w = (0, e.instantiate)(_B, m);
                    o = () => {
                        u = !0;
                    };
                    const x = (0, g.on)(l, 'dataavailable')(({
                        data: y
                    }) => {
                        _v += 1, _w = _w.then(async ({
                            dataView: z = null,
                            elementType: A = null,
                            encoderId: _B,
                            port: C
                        }) => {
                            const D = await y.arrayBuffer();
                            _v -= 1;
                            const E = null === z ? new(0, f.MultiBufferDataView)([D]) : new(0, f.MultiBufferDataView)([
                                ...z.buffers,
                                D
                            ], z.byteOffset);
                            if (!t && 'recording' === l.state && !u) {
                                const F = _h(E, 0);
                                if (null === F)
                                    return {
                                        dataView: E,
                                        elementType: A,
                                        encoderId: _B,
                                        port: C
                                    };
                                const {
                                    value: G
                                } = F;
                                if (172351395 !== G)
                                    return {
                                        dataView: z,
                                        elementType: A,
                                        encoderId: _B,
                                        port: C
                                    };
                                t = !0;
                            }
                            const {
                                currentElementType: F,
                                offset: G,
                                contents: H
                            } = d(E, A, k), I = G < E.byteLength ? new(0, f.MultiBufferDataView)(E.buffers, E.byteOffset + G) : null;
                            return H.forEach(y => C.postMessage(y, y.map(({
                                buffer: J
                            }) => J))), 0 !== _v || 'inactive' !== l.state && !u || ((0, e.encode)(_B, null).then(J => {
                                p([
                                    ...j,
                                    ...J
                                ]), j.length = 0, _m.dispatchEvent(new Event('stop'));
                            }), C.postMessage([]), C.close(), x()), {
                                dataView: I,
                                elementType: F,
                                encoderId: _B,
                                port: C
                            };
                        });
                    });
                    void 0 !== y && _w.then(({
                        encoderId: z
                    }) => n = q(z, y));
                }
                l.start(100);
            },
            stop: r
        };
    };
}), b.register('Mz5Eh', function(c, d) {
    c.exports,
        function(e, f, g, h) {
            function i(j) {
                return j && 'object' == typeof j && 'default' in j ? j : {
                    default: j
                };
            }
            var j = i(f),
                k = i(g),
                l = i(h);

            function _m(n, o) {
                var p = 'undefined' != typeof Symbol && n[Symbol.iterator] || n['@@iterator'];
                if (!p) {
                    if (Array.isArray(n) || (p = _n(n)) || o && n && 'number' == typeof n.length) {
                        p && (n = p);
                        var q = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return q >= n.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: n[q++]
                                };
                            },
                            e: function(s) {
                                throw s;
                            },
                            f: r
                        };
                    }
                    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }
                var q, r = !0,
                    s = !1;
                return {
                    s: function() {
                        p = p.call(n);
                    },
                    n: function() {
                        var t = p.next();
                        return r = t.done, t;
                    },
                    e: function(t) {
                        s = !0, q = t;
                    },
                    f: function() {
                        try {
                            r || null == p.return || p.return();
                        } finally {
                            if (s)
                                throw q;
                        }
                    }
                };
            }

            function _n(o, p) {
                if (o) {
                    if ('string' == typeof o)
                        return _o(o, p);
                    var q = Object.prototype.toString.call(o).slice(8, -1);
                    return 'Object' === q && o.constructor && (q = o.constructor.name), 'Map' === q || 'Set' === q ? Array.from(o) : 'Arguments' === q || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q) ? _o(o, p) : void 0;
                }
            }

            function _o(p, q) {
                (null == q || q > p.length) && (q = p.length);
                for (var r = 0, s = new Array(q); r < q; r++)
                    s[r] = p[r];
                return s;
            }
            var p = function() {
                function q(r) {
                    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        t = arguments.length > 2 ? arguments[2] : void 0;
                    if (k.default(this, q), s < 0 || void 0 !== t && t < 0)
                        throw new RangeError();
                    var u = r.reduce(function(v, w) {
                        return v + w.byteLength;
                    }, 0);
                    if (s > u || void 0 !== t && s + t > u)
                        throw new RangeError();
                    var v, w = [],
                        x = void 0 === t ? u - s : t,
                        y = [],
                        z = 0,
                        A = s,
                        B = _m(r);
                    try {
                        for (B.s(); !(v = B.n()).done;) {
                            var C = v.value;
                            if (0 === y.length)
                                if (C.byteLength > A) {
                                    var D = (z = C.byteLength - A) > x ? x : z;
                                    w.push(new DataView(C, A, D)), y.push(C);
                                } else
                                    A -= C.byteLength;
                            else if (z < x) {
                                var D = (z += C.byteLength) > x ? C.byteLength - z + x : C.byteLength;
                                w.push(new DataView(C, 0, D)), y.push(C);
                            }
                        }
                    } catch (q) {
                        B.e(q);
                    } finally {
                        B.f();
                    }
                    this._buffers = y, this._byteLength = x, this._byteOffset = A, this._dataViews = w, this._internalBuffer = new DataView(new ArrayBuffer(8));
                }
                return l.default(q, [{
                        key: 'buffers',
                        get: function() {
                            return this._buffers;
                        }
                    },
                    {
                        key: 'byteLength',
                        get: function() {
                            return this._byteLength;
                        }
                    },
                    {
                        key: 'byteOffset',
                        get: function() {
                            return this._byteOffset;
                        }
                    },
                    {
                        key: 'getFloat32',
                        value: function(r, s) {
                            return this._internalBuffer.setUint8(0, this.getUint8(r + 0)), this._internalBuffer.setUint8(1, this.getUint8(r + 1)), this._internalBuffer.setUint8(2, this.getUint8(r + 2)), this._internalBuffer.setUint8(3, this.getUint8(r + 3)), this._internalBuffer.getFloat32(0, s);
                        }
                    },
                    {
                        key: 'getFloat64',
                        value: function(r, s) {
                            return this._internalBuffer.setUint8(0, this.getUint8(r + 0)), this._internalBuffer.setUint8(1, this.getUint8(r + 1)), this._internalBuffer.setUint8(2, this.getUint8(r + 2)), this._internalBuffer.setUint8(3, this.getUint8(r + 3)), this._internalBuffer.setUint8(4, this.getUint8(r + 4)), this._internalBuffer.setUint8(5, this.getUint8(r + 5)), this._internalBuffer.setUint8(6, this.getUint8(r + 6)), this._internalBuffer.setUint8(7, this.getUint8(r + 7)), this._internalBuffer.getFloat64(0, s);
                        }
                    },
                    {
                        key: 'getInt16',
                        value: function(r, s) {
                            return this._internalBuffer.setUint8(0, this.getUint8(r + 0)), this._internalBuffer.setUint8(1, this.getUint8(r + 1)), this._internalBuffer.getInt16(0, s);
                        }
                    },
                    {
                        key: 'getInt32',
                        value: function(r, s) {
                            return this._internalBuffer.setUint8(0, this.getUint8(r + 0)), this._internalBuffer.setUint8(1, this.getUint8(r + 1)), this._internalBuffer.setUint8(2, this.getUint8(r + 2)), this._internalBuffer.setUint8(3, this.getUint8(r + 3)), this._internalBuffer.getInt32(0, s);
                        }
                    },
                    {
                        key: 'getInt8',
                        value: function(r) {
                            var s = this._findDataViewWithOffset(r),
                                t = j.default(s, 2),
                                u = t[0],
                                v = t[1];
                            return u.getInt8(r - v);
                        }
                    },
                    {
                        key: 'getUint16',
                        value: function(r, s) {
                            return this._internalBuffer.setUint8(0, this.getUint8(r + 0)), this._internalBuffer.setUint8(1, this.getUint8(r + 1)), this._internalBuffer.getUint16(0, s);
                        }
                    },
                    {
                        key: 'getUint32',
                        value: function(r, s) {
                            return this._internalBuffer.setUint8(0, this.getUint8(r + 0)), this._internalBuffer.setUint8(1, this.getUint8(r + 1)), this._internalBuffer.setUint8(2, this.getUint8(r + 2)), this._internalBuffer.setUint8(3, this.getUint8(r + 3)), this._internalBuffer.getUint32(0, s);
                        }
                    },
                    {
                        key: 'getUint8',
                        value: function(r) {
                            var s = this._findDataViewWithOffset(r),
                                t = j.default(s, 2),
                                u = t[0],
                                v = t[1];
                            return u.getUint8(r - v);
                        }
                    },
                    {
                        key: 'setFloat32',
                        value: function(r, s, t) {
                            this._internalBuffer.setFloat32(0, s, t), this.setUint8(r, this._internalBuffer.getUint8(0)), this.setUint8(r + 1, this._internalBuffer.getUint8(1)), this.setUint8(r + 2, this._internalBuffer.getUint8(2)), this.setUint8(r + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setFloat64',
                        value: function(r, s, t) {
                            this._internalBuffer.setFloat64(0, s, t), this.setUint8(r, this._internalBuffer.getUint8(0)), this.setUint8(r + 1, this._internalBuffer.getUint8(1)), this.setUint8(r + 2, this._internalBuffer.getUint8(2)), this.setUint8(r + 3, this._internalBuffer.getUint8(3)), this.setUint8(r + 4, this._internalBuffer.getUint8(4)), this.setUint8(r + 5, this._internalBuffer.getUint8(5)), this.setUint8(r + 6, this._internalBuffer.getUint8(6)), this.setUint8(r + 7, this._internalBuffer.getUint8(7));
                        }
                    },
                    {
                        key: 'setInt16',
                        value: function(r, s, t) {
                            this._internalBuffer.setInt16(0, s, t), this.setUint8(r, this._internalBuffer.getUint8(0)), this.setUint8(r + 1, this._internalBuffer.getUint8(1));
                        }
                    },
                    {
                        key: 'setInt32',
                        value: function(r, s, t) {
                            this._internalBuffer.setInt32(0, s, t), this.setUint8(r, this._internalBuffer.getUint8(0)), this.setUint8(r + 1, this._internalBuffer.getUint8(1)), this.setUint8(r + 2, this._internalBuffer.getUint8(2)), this.setUint8(r + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setInt8',
                        value: function(r, s) {
                            var t = this._findDataViewWithOffset(r),
                                u = j.default(t, 2),
                                v = u[0],
                                w = u[1];
                            v.setInt8(r - w, s);
                        }
                    },
                    {
                        key: 'setUint16',
                        value: function(r, s, t) {
                            this._internalBuffer.setUint16(0, s, t), this.setUint8(r, this._internalBuffer.getUint8(0)), this.setUint8(r + 1, this._internalBuffer.getUint8(1));
                        }
                    },
                    {
                        key: 'setUint32',
                        value: function(r, s, t) {
                            this._internalBuffer.setUint32(0, s, t), this.setUint8(r, this._internalBuffer.getUint8(0)), this.setUint8(r + 1, this._internalBuffer.getUint8(1)), this.setUint8(r + 2, this._internalBuffer.getUint8(2)), this.setUint8(r + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setUint8',
                        value: function(r, s) {
                            var t = this._findDataViewWithOffset(r),
                                u = j.default(t, 2),
                                v = u[0],
                                w = u[1];
                            v.setUint8(r - w, s);
                        }
                    },
                    {
                        key: '_findDataViewWithOffset',
                        value: function(r) {
                            var s, t = 0,
                                u = _m(this._dataViews);
                            try {
                                for (u.s(); !(s = u.n()).done;) {
                                    var v = s.value,
                                        w = t + v.byteLength;
                                    if (r >= t && r < w)
                                        return [
                                            v,
                                            t
                                        ];
                                    t = w;
                                }
                            } catch (r) {
                                u.e(r);
                            } finally {
                                u.f();
                            }
                            throw new RangeError();
                        }
                    }
                ]), q;
            }();
            e.MultiBufferDataView = p, Object.defineProperty(e, '__esModule', {
                value: !0
            });
        }(c.exports, b('fXhy8'), b('OYtTV'), b('1eIhT'));
}), b.register('fXhy8', function(c, d) {
    var e = b('J9HTK'),
        f = b('RZo5A'),
        g = b('Jj5nw'),
        h = b('unFK0');
    c.exports = function(i, j) {
        return e(i) || f(i, j) || g(i, j) || h();
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('J9HTK', function(c, d) {
    c.exports = function(e) {
        if (Array.isArray(e))
            return e;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('RZo5A', function(c, d) {
    c.exports = function(e, f) {
        var g = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != g) {
            var h, i, j, k, l = [],
                m = !0,
                n = !1;
            try {
                if (j = (g = g.call(e)).next, 0 === f) {
                    if (Object(g) !== g)
                        return;
                    m = !1;
                } else
                    for (; !(m = (h = j.call(g)).done) && (l.push(h.value), l.length !== f); m = !0);
            } catch (e) {
                n = !0, i = e;
            } finally {
                try {
                    if (!m && null != g.return && (k = g.return(), Object(k) !== k))
                        return;
                } finally {
                    if (n)
                        throw i;
                }
            }
            return l;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('Jj5nw', function(c, d) {
    var e = b('lpsIZ');
    c.exports = function(f, g) {
        if (f) {
            if ('string' == typeof f)
                return e(f, g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? e(f, g) : void 0;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('lpsIZ', function(c, d) {
    c.exports = function(e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('unFK0', function(c, d) {
    c.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('OYtTV', function(c, d) {
    c.exports = function(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('1eIhT', function(c, d) {
    var e = b('dmvEl');

    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            j.enumerable = j.enumerable || !1, j.configurable = !0, 'value' in j && (j.writable = !0), Object.defineProperty(g, e(j.key), j);
        }
    }
    c.exports = function(g, h, i) {
        return h && f(g.prototype, h), i && f(g, i), Object.defineProperty(g, 'prototype', {
            writable: !1
        }), g;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('dmvEl', function(c, d) {
    var e = b('2PxHI').default,
        f = b('pxPT7');
    c.exports = function(g) {
        var h = f(g, 'string');
        return 'symbol' === e(h) ? h : String(h);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('2PxHI', function(c, d) {
    function e(f) {
        return c.exports = e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(g) {
            return typeof g;
        } : function(g) {
            return g && 'function' == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? 'symbol' : typeof g;
        }, c.exports.__esModule = !0, c.exports.default = c.exports, e(f);
    }
    c.exports = e, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('pxPT7', function(c, d) {
    var e = b('2PxHI').default;
    c.exports = function(f, g) {
        if ('object' !== e(f) || null === f)
            return f;
        var h = f[Symbol.toPrimitive];
        if (void 0 !== h) {
            var i = h.call(f, g || 'default');
            if ('object' !== e(i))
                return i;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === g ? String : Number)(f);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('jBm/j', function(c, d) {
    a(c.exports, 'createWindow', function() {
        return _e;
    });
    const _e = () => 'undefined' == typeof window ? null : window;
}), b.register('T83ym', function(c, d) {
    a(c.exports, 'readVariableSizeIntegerLength', function() {
        return _e;
    });
    const _e = (a, c) => {
        if (c >= a.byteLength)
            return null;
        const f = a.getUint8(c);
        if (f > 127)
            return 1;
        if (f > 63)
            return 2;
        if (f > 31)
            return 3;
        if (f > 15)
            return 4;
        if (f > 7)
            return 5;
        if (f > 3)
            return 6;
        if (f > 1)
            return 7;
        if (f > 0)
            return 8;
        const g = _e(a, c + 1);
        return null === g ? null : g + 8;
    };
}), b.register('FPX+q', function(c, d) {
    a(c.exports, 'wrapEventListener', function() {
        return _e;
    });
    const _e = (a, c) => d => {
        const f = {
            value: a
        };
        return Object.defineProperties(d, {
            currentTarget: f,
            target: f
        }), 'function' == typeof c ? c.call(a, d) : c.handleEvent.call(a, d);
    };
}), b.register('iaku/', function(c, d) {
    b('CJP4m49'), b('CJP4m48'), b('CJP4m47'), b('CJP4m46'), b('CJP4m45'), b('CJP4m44'), b('CJP4m43'), b('CJP4m42');
}), b.register('CJP4m49', function(c, d) {}), b.register('CJP4m48', function(c, d) {}), b.register('CJP4m47', function(c, d) {}), b.register('CJP4m46', function(c, d) {}), b.register('CJP4m45', function(c, d) {}), b.register('CJP4m44', function(c, d) {}), b.register('CJP4m43', function(c, d) {}), b.register('CJP4m42', function(c, d) {}), b.register('MyAkP', function(c, d) {
    b('CJP4m41'), b('CJP4m40'), b('CJP4m39'), b('CJP4m38'), b('CJP4m37'), b('CJP4m36'), b('CJP4m35'), b('CJP4m34'), b('CJP4m33'), b('CJP4m32'), b('CJP4m31'), b('CJP4m30'), b('CJP4m29'), b('CJP4m28'), b('CJP4m27'), b('CJP4m26'), b('CJP4m25'), b('CJP4m24'), b('CJP4m23'), b('CJP4m22'), b('CJP4m21'), b('CJP4m20'), b('CJP4m19'), b('CJP4m18'), b('CJP4m17'), b('CJP4m16'), b('CJP4m15'), b('CJP4m14'), b('CJP4m13'), b('CJP4m12'), b('CJP4m11'), b('CJP4m10'), b('CJP4m9'), b('CJP4m8'), b('CJP4m7'), b('CJP4m6'), b('CJP4m5'), b('CJP4m4'), b('CJP4m3');
}), b.register('CJP4m41', function(c, d) {}), b.register('CJP4m40', function(c, d) {}), b.register('CJP4m39', function(c, d) {}), b.register('CJP4m38', function(c, d) {}), b.register('CJP4m37', function(c, d) {}), b.register('CJP4m36', function(c, d) {}), b.register('CJP4m35', function(c, d) {}), b.register('CJP4m34', function(c, d) {}), b.register('CJP4m33', function(c, d) {}), b.register('CJP4m32', function(c, d) {}), b.register('CJP4m31', function(c, d) {}), b.register('CJP4m30', function(c, d) {}), b.register('CJP4m29', function(c, d) {}), b.register('CJP4m28', function(c, d) {}), b.register('CJP4m27', function(c, d) {}), b.register('CJP4m26', function(c, d) {}), b.register('CJP4m25', function(c, d) {}), b.register('CJP4m24', function(c, d) {}), b.register('CJP4m23', function(c, d) {}), b.register('CJP4m22', function(c, d) {}), b.register('CJP4m21', function(c, d) {}), b.register('CJP4m20', function(c, d) {}), b.register('CJP4m19', function(c, d) {}), b.register('CJP4m18', function(c, d) {}), b.register('CJP4m17', function(c, d) {}), b.register('CJP4m16', function(c, d) {}), b.register('CJP4m15', function(c, d) {}), b.register('CJP4m14', function(c, d) {}), b.register('CJP4m13', function(c, d) {}), b.register('CJP4m12', function(c, d) {}), b.register('CJP4m11', function(c, d) {}), b.register('CJP4m10', function(c, d) {}), b.register('CJP4m9', function(c, d) {}), b.register('CJP4m8', function(c, d) {}), b.register('CJP4m7', function(c, d) {}), b.register('CJP4m6', function(c, d) {}), b.register('CJP4m5', function(c, d) {}), b.register('CJP4m4', function(c, d) {}), b.register('CJP4m3', function(c, d) {}), b.register('h93oD', function(c, d) {
    a(c.exports, 'connect', function() {
        return _j;
    });
    var e = b('zqnJu'),
        f = b('EyHS3');
    const g = new Blob([f.worker], {
            type: 'application/javascript; charset=utf-8'
        }),
        h = URL.createObjectURL(g),
        i = (0, e.load)(h),
        _j = (i.characterize, i.connect);
    i.disconnect, i.encode, i.isSupported, i.record;
    URL.revokeObjectURL(h);
}), b.register('zqnJu', function(c, d) {
    a(c.exports, 'load', function() {
        return _j;
    });
    var e = b('bo9mQ');
    b('V/EQe'), b('sgRcz');
    const f = (0, e.createBroker)({
            characterize: ({
                call: g
            }) => () => g('characterize'),
            encode: ({
                call: h
            }) => (b, c) => h('encode', {
                recordingId: b,
                timeslice: c
            }),
            record: ({
                call: i
            }) => async (b, c, d) => {
                await i('record', {
                    recordingId: b,
                    sampleRate: c,
                    typedArrays: d
                }, d.map(({
                    buffer: j
                }) => j));
            }
        }),
        _j = i => {
            const k = new Worker(i);
            return f(k);
        };
}), b.register('V/EQe', function(c, d) {
    b('CJP4m2');
}), b.register('CJP4m2', function(c, d) {}), b.register('sgRcz', function(c, d) {
    b('CJP4m1'), b('CJP4m0'), b('CJP4m');
}), b.register('CJP4m1', function(c, d) {}), b.register('CJP4m0', function(c, d) {}), b.register('CJP4m', function(c, d) {}), b.register('EyHS3', function(c, d) {
    a(c.exports, 'worker', function() {
        return _e;
    });
    const _e = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t),a=o(r),i=o(n),u=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?a.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var a={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)a.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(a),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(c(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(s.default(e),[u(t[r.name],r.modifiers),n]):[].concat(s.default(e),[function(e){return u(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(s.default(e),s.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(s.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,s=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=s.cause,i=s.missingParameters,u=void 0===n?new Error:new Error(n(i));return null!==a&&(u.cause=a),void 0!==r&&(u.code=r(i)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),s=["honest","hour","hono"];for(t in s)if(0==o.indexOf(s[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),s=r(906),a=r(344);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,s=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),a=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),u=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),c=(e,t)=>async r=>{let{data:{id:n,method:o,params:u}}=r;const c=t[o];try{if(void 0===c)throw s({method:o});const t=void 0===u?c():c(u);if(void 0===t)throw a({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),s=(0,l.generateUniqueNumber)(d);return d.set(s,(()=>{o(),n.close(),d.delete(s)})),{result:s}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw u({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=c(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let o=0;o<t;o+=1){const t=e[o];void 0===r[o]&&(r[o]=[]);const s=t.shift();if(void 0===s)break e;r[o].push(s),0===o&&(n+=s.length)}}if(n>t){const o=n-t;r.forEach(((t,r)=>{const n=t.pop(),s=n.length-o;t.push(n.subarray(0,s)),e[r].unshift(n.subarray(s))}))}return r},v=new Map,g=(e=>(t,r,n)=>{const o=e.get(t);if(void 0===o){const o={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,o),o}return o.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),o})(v),x=((e,t)=>(r,n,o,s)=>{const a=o>>3,i="subsequent"===n?0:44,u=r.length,c=e(r[0]),l=new ArrayBuffer(c*u*a+i),d=new DataView(l);return"subsequent"!==n&&t(d,o,u,"complete"===n?c:Number.POSITIVE_INFINITY,s),r.forEach(((e,t)=>{let r=i+t*a;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=u*a}}))})),[l]})(m,((e,t,r,n,o)=>{const s=t>>3,a=Math.min(n*r*s,4294967251);e.setUint32(0,1380533830),e.setUint32(4,a+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,o,!0),e.setUint32(28,o*r*s,!0),e.setUint16(32,r*s,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,a,!0)})),w=new Map;p(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:e=>{let{recordingId:t,timeslice:r}=e;const n=w.get(t);void 0!==n&&(w.delete(t),n.reject(new Error("Another request was made to initiate an encoding.")));const o=v.get(t);if(null!==r){if(void 0===o||m(o.channelDataArrays[0])*(1e3/o.sampleRate)<r)return new Promise(((e,n)=>{w.set(t,{reject:n,resolve:e,timeslice:r})}));const e=h(o.channelDataArrays,Math.ceil(r*(o.sampleRate/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,o.sampleRate);return o.isComplete=!1,{result:n,transferables:n}}if(void 0!==o){const e=x(o.channelDataArrays,o.isComplete?"complete":"subsequent",16,o.sampleRate);return v.delete(t),{result:e,transferables:e}}return{result:[],transferables:[]}},record:e=>{let{recordingId:t,sampleRate:r,typedArrays:n}=e;const o=g(t,r,n),s=w.get(t);if(void 0!==s&&m(o.channelDataArrays[0])*(1e3/r)>=s.timeslice){const e=h(o.channelDataArrays,Math.ceil(s.timeslice*(r/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,r);o.isComplete=!1,w.delete(t),s.resolve({result:n,transferables:n})}return{result:null}}})})()})();';
}), b.register('p7/H4', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('gRbUn'),
        f = b('P1KtI'),
        g = b('AE7vR'),
        h = b('O0Kav'),
        i = b('B5Xo6');
    var _j = a => {
        const [k, l] = h.useState(a.latex), m = h.useCallback(() => {
            a.onChange(k), a.close();
        }, [
            k,
            a.onChange,
            a.close
        ]);
        return (0, e.jsx)(g.default, {
            open: a.visible,
            width: 670,
            closable: !1,
            destroyOnClose: !0,
            style: {
                top: 20
            },
            onCancel: a.close,
            footer: (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(f.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }),
                    a.latex ? (0, e.jsx)(f.default, {
                        onClick: () => {
                            a.onChange(void 0), a.close();
                        },
                        children: 'Remove Equation'
                    }) : null,
                    (0, e.jsx)(f.default, {
                        type: 'primary',
                        onClick: m,
                        children: a.latex ? 'Update' : 'Insert'
                    })
                ]
            }),
            children: (0, e.jsx)(i.default, {
                latex: a.latex,
                onChange: l
            })
        });
    };
}), b.register('B5Xo6', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('YbZFB'),
        h = b('u4s09'),
        i = b('8KqQ+'),
        j = b('Eh2Wh');
    let k, l, m, n = a => a;
    var _o = a => {
        const p = f.useRef(),
            [q, r] = f.useState(a.latex);
        return f.useEffect(() => {
            const s = new(0, g.MathfieldElement)({
                virtualKeyboardMode: 'off'
            });
            a.latex && s.setValue(a.latex), document.body.style.setProperty('--keyboard-zindex', '1000'), s.addEventListener('mount', () => {
                s.focus(), s.virtualKeyboardState = 'visible';
            }), s.addEventListener('input', p => {
                var t;
                if ('insertLineBreak' === p.inputType)
                    null == a || null === (t = a.onComplete) || void 0 === t || t.call(a);
                else {
                    const u = s.getValue('latex');
                    r(u), a.onChange && a.onChange(u);
                }
            }), s.addEventListener('unmount', () => {
                s.virtualKeyboardState = 'hidden';
            }), p.current.appendChild(s);
        }, []), (0, e.jsxs)(_p, {
            children: [
                (0, e.jsx)(_q, {
                    ref: p
                }),
                (null == q ? void 0 : q.length) ? null : (0, e.jsx)(_r, {
                    children: 'Enter math...'
                })
            ]
        });
    };
    const _p = h.default.div(k || (k = n`
  position: relative;
`)),
        _q = h.default.div(l || (l = n`
  math-field {
    font-size: 32px;
    color: ${ 0 };
    padding: 15px;
    outline: #40a9ff auto 2px; // Color of the AntD focus outline
  }
`), i.default.Black),
        _r = h.default.div(m || (m = n`
  position: absolute;
  top: 23px;
  left: 16px;
  font-family: ${ 0 };
  font-style: italic;
  color: #bfbfbf;
  font-size: 18px;
  pointer-events: none;
`), j.Fonts.SFPro);
}), b.register('XcwvV', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('mFrag'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CameraOutlined';
    var _j = f.forwardRef(i);
}), b.register('mFrag', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z'
                }
            }]
        },
        name: 'camera',
        theme: 'outlined'
    };
}), b.register('7yE7K', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('ZqPQY'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'FunctionOutlined';
    var _j = f.forwardRef(i);
}), b.register('ZqPQY', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'defs',
                    attrs: {},
                    children: [{
                        tag: 'style',
                        attrs: {}
                    }]
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M841 370c3-3.3 2.7-8.3-.6-11.3a8.24 8.24 0 00-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6a7.96 7.96 0 01-13.4-1.9l-63.5-141.3a7.9 7.9 0 00-7.3-4.7H380.7l.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415a8.07 8.07 0 007.8 9.7H284l-89 429.9a8.07 8.07 0 007.8 9.7H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 .9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6a8.02 8.02 0 007.2-11.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z'
                    }
                }
            ]
        },
        name: 'function',
        theme: 'outlined'
    };
}), b.register('2zo+z', function(c, d) {
    a(c.exports, 'default', function() {
        return _r;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('gPef4'),
        h = b('u4s09'),
        i = b('8KqQ+'),
        j = b('Eh2Wh'),
        k = b('9V5aJ'),
        l = b('rDgzs'),
        m = b('quE27'),
        n = b('tMe0P');
    let o;
    const p = (0, b('6jmvl').observer)(a => {
            const q = a.question.type === l.QuestionType.multipleChoice,
                r = a.question.type === l.QuestionType.textInput;
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(_q, {
                        children: (0, m.plural)('Answer', a.question.answers.length)
                    }),
                    a.question.answers.map((d, h) => (0, e.jsxs)(f.Fragment, {
                        children: [
                            (0, e.jsx)(g.default, {
                                questionType: a.question.type,
                                onCorrectChange: q => ((q, r) => a.question.answers = a.question.answers.map((a, d) => d !== q ? a : {
                                    ...a,
                                    correct: r
                                }))(h, q),
                                onTextChange: q => ((q, r) => a.question.answers = a.question.answers.map((a, d) => d !== q ? a : {
                                    ...a,
                                    text: r
                                }))(h, q),
                                text: d.text,
                                correct: d.correct,
                                image: d.image,
                                latex: d.latex,
                                textType: d.textType,
                                onImageChange: q => ((q, r) => a.question.answers = a.question.answers.map((a, d) => d !== q ? a : {
                                    ...a,
                                    image: r
                                }))(h, q),
                                onLatexChange: q => ((q, r) => a.question.answers = a.question.answers.map((a, d) => d !== q ? a : {
                                    ...a,
                                    latex: r
                                }))(h, q),
                                onTextTypeChange: q => {
                                    ((q, r) => {
                                        a.question.answers = a.question.answers.map((a, d) => d !== q ? a : {
                                            ...a,
                                            textType: r
                                        });
                                    })(h, q);
                                },
                                allowPhoto: q && !a.imagesBlocked,
                                allowLatex: q && !a.latexBlocked,
                                blockChangingCorrect: r,
                                canRemove: h > 0 && r || h > 1,
                                onRemove: () => (q => {
                                    a.question.answers = a.question.answers.filter((a, r) => q !== r);
                                })(h),
                                onPressEnter: a.onPressEnter
                            }),
                            (0, e.jsx)('div', {
                                style: {
                                    height: 10
                                }
                            })
                        ]
                    }, `answer-${ h }`)),
                    a.question.answers.length < 4 && (0, e.jsx)(n.default, {
                        style: {
                            fontSize: 14,
                            marginLeft: a.question.type === l.QuestionType.textInput ? 0 : 38,
                            opacity: 0.7,
                            cursor: 'pointer',
                            marginTop: -4,
                            fontStyle: 'italic'
                        },
                        onClick: () => a.question.answers.push((0, k.defaultAnswer)(!q)),
                        children: 'Add another answer'
                    })
                ]
            });
        }),
        _q = h.default.div(o || (o = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), i.default.Black, j.Fonts.SFPro, j.FontWeights.UltraBold);
    var _r = p;
}), b.register('gPef4', function(c, d) {
    a(c.exports, 'default', function() {
        return _B;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('u4s09'),
        g = b('P1KtI'),
        h = b('M3JwW'),
        i = b('u8Dt8'),
        j = b('rFeNc'),
        k = b('W0U6L'),
        l = b('HFnro8'),
        m = b('XcwvV'),
        n = b('M420r'),
        o = b('64MPi'),
        p = b('Y6i538'),
        q = b('1ZCzi'),
        r = b('7yE7K'),
        s = b('quE27'),
        t = b('p7/H4'),
        u = b('8KqQ+'),
        v = b('JuRCP'),
        w = b('rDgzs');
    let x, y, z = a => a;
    g.default;
    const A = a => {
        const B = {
            twoToneColor: a.correct ? '#4caf50' : '#f44336',
            style: {
                cursor: 'pointer',
                marginRight: 10
            },
            onClick: a.onClick
        };
        return a.correct ? (0, e.jsx)(n.default, {
            ...B
        }) : (0, e.jsx)(o.default, {
            ...B
        });
    };
    var _B = a => {
        const [C, D, E] = (0, s.useBoolean)(!1), [F, G, H] = (0, s.useBoolean)(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_C, {
                    children: [
                        a.questionType === w.QuestionType.textInput ? (0, e.jsxs)(i.default, {
                            value: a.textType || w.TextInputAnswerType.exact,
                            size: 'large',
                            style: {
                                marginRight: 10,
                                width: 120
                            },
                            onChange: a.onTextTypeChange,
                            children: [
                                (0, e.jsx)(i.default.Option, {
                                    value: w.TextInputAnswerType.exact,
                                    children: 'Is Exactly'
                                }),
                                (0, e.jsx)(i.default.Option, {
                                    value: w.TextInputAnswerType.contains,
                                    children: 'Contains'
                                })
                            ]
                        }) : (0, e.jsx)(A, {
                            correct: a.correct,
                            onClick: () => {
                                a.blockChangingCorrect || a.onCorrectChange && a.onCorrectChange(!a.correct);
                            }
                        }),
                        (() => {
                            const I = [{
                                    key: 'add-image',
                                    label: 'Add Image',
                                    onClick: D,
                                    icon: (0, e.jsx)(m.default, {}),
                                    disabled: !(a.allowPhoto && !a.image && !a.latex && !a.text)
                                },
                                {
                                    key: 'add-latex',
                                    label: 'Add Equation',
                                    onClick: G,
                                    icon: (0, e.jsx)(r.default, {}),
                                    disabled: !(a.allowLatex && !a.image && !a.latex && !a.text)
                                },
                                {
                                    key: 'remove',
                                    label: 'Remove Answer',
                                    onClick: a.onRemove,
                                    icon: (0, e.jsx)(p.default, {}),
                                    disabled: !a.canRemove,
                                    danger: !0
                                }
                            ];
                            return (0, e.jsxs)('div', {
                                className: 'maxWidth flex vc between',
                                children: [
                                    a.image ? (0, e.jsx)(l.default, {
                                        image: a.image,
                                        size: 40,
                                        blockModalOpen: !0,
                                        onClick: D,
                                        showBorder: !0
                                    }) : a.latex ? (0, e.jsx)(_D, {
                                        onClick: G,
                                        children: (0, e.jsx)(v.default, {
                                            latex: a.latex
                                        })
                                    }) : (0, e.jsx)(j.default, {
                                        value: a.text,
                                        onPressEnter: a.onPressEnter,
                                        onTextChange: a.onTextChange,
                                        placeholder: (a.correct ? 'Correct' : 'Incorrect') + ' answer...',
                                        disabled: !1
                                    }),
                                    (0, e.jsx)(h.default, {
                                        menu: {
                                            items: I
                                        },
                                        trigger: ['hover'],
                                        children: (0, e.jsx)(q.default, {
                                            style: {
                                                marginLeft: 10,
                                                fontSize: 23,
                                                cursor: 'pointer'
                                            }
                                        })
                                    })
                                ]
                            });
                        })()
                    ]
                }),
                (0, e.jsx)(k.default, {
                    visible: C,
                    close: E,
                    currentImage: a.image,
                    onImageChange: a.onImageChange
                }),
                (0, e.jsx)(t.default, {
                    visible: F,
                    close: H,
                    latex: a.latex,
                    onChange: a.onLatexChange
                })
            ]
        });
    };
    const _C = f.default.div.attrs({
            className: 'flex maxWidth vc'
        })(x || (x = z`
  font-size: 28px;
  span {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`)),
        _D = f.default.div(y || (y = z`
  cursor: pointer;
  font-size: 16px;
  color: ${ 0 };
  padding: 5px 21px;
  border: 2px dashed ${ 0 };
  border-radius: 6px;
`), u.default.Black, u.default.BorderGray);
}), b.register('M420r', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('R1/B3'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CheckCircleTwoTone';
    var _j = f.forwardRef(i);
}), b.register('R1/B3', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: function(f, g) {
            return {
                tag: 'svg',
                attrs: {
                    viewBox: '64 64 896 896',
                    focusable: 'false'
                },
                children: [{
                        tag: 'path',
                        attrs: {
                            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
                            fill: f
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z',
                            fill: g
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
                            fill: f
                        }
                    }
                ]
            };
        },
        name: 'check-circle',
        theme: 'twotone'
    };
}), b.register('64MPi', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('NMPAt'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CloseCircleTwoTone';
    var _j = f.forwardRef(i);
}), b.register('NMPAt', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: function(f, g) {
            return {
                tag: 'svg',
                attrs: {
                    viewBox: '64 64 896 896',
                    focusable: 'false'
                },
                children: [{
                        tag: 'path',
                        attrs: {
                            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
                            fill: f
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z',
                            fill: g
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
                            fill: f
                        }
                    }
                ]
            };
        },
        name: 'close-circle',
        theme: 'twotone'
    };
}), b.register('8aoBB', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('P1KtI'),
        g = b('45b72');
    var _h = a => {
        const i = (0, e.jsx)(f.default, {
            loading: a.loading,
            type: 'primary',
            disabled: a.disabled,
            onClick: a.onClick,
            children: a.label
        });
        return a.disabledMessage ? (0, e.jsx)(g.default, {
            title: a.disabledMessage,
            children: i
        }) : i;
    };
}), b.register('XWDzK', function(c, d) {
    a(c.exports, 'canAddQuestionErrorMessage', function() {
        return _g;
    }), a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('rDgzs');
    const f = 'Question must have text, audio, image, or an equation',
        _g = a => {
            if (a.text) {
                if (!a.text.trim())
                    return f;
            } else if (!a.audio && !a.image && !a.latex)
                return f;
            if (a.image && a.latex)
                return 'Question cannot contain an image and equation.';
            const h = a.answers.filter(a => {
                var i;
                return !!(null === (i = a.text) || void 0 === i ? void 0 : i.trim()) || !(!a.image && !a.latex);
            });
            return a.type === e.QuestionType.multipleChoice && h.length < 2 ? 'Question must have at least two answers.' : h.length < 1 ? 'Question must have at least one answer.' : null;
        };
    var _h = a => null === _g(a);
});