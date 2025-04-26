function a(a, b, B, c) {
    Object.defineProperty(a, b, {
        get: B,
        set: c,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('xcGI7', function(B, c) {
    a(B.exports, 'default', function() {
        return f;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('lmfrI'),
        e = b('gSUVO');
    var f = a => {
        const g = {
            ...a.style,
            fontFamily: e.Fonts.SFPro,
            color: a.style && a.style.color ? a.style.color : d.default.Black
        };
        return (0, c.jsx)('div', {
            onClick: a.onClick ? a.onClick : () => !1,
            style: g,
            children: a.children
        });
    };
}), b.register('xgdF8', function(B, c) {
    a(B.exports, 'default', function() {
        return C;
    });
    var c = b('UM8oI'),
        d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('PjB0f'),
        g = b('jMWad'),
        h = b('5BgNK'),
        i = b('bPH7V'),
        j = b('IsmrL'),
        k = b('c6x8w'),
        l = b('iHElh'),
        m = b('/nMwY'),
        n = b('h99Nu'),
        o = b('xcGI7'),
        p = b('lmfrI'),
        q = b('4kbDa'),
        r = b('VsZIM'),
        s = b('N1uqT');
    let t, u, v = a => a;
    const w = m.default.TabPane,
        x = k.default.Search,
        y = a => (0, d.jsxs)('div', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            children: [
                (0, d.jsx)(B, {
                    className: 'lightShadow mediumShadowOnHover',
                    url: a.details.url,
                    isMiddle: a.isMiddle,
                    onClick: () => {
                        a.onSelect(a.details.url), (0, f.request)({
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
                (0, d.jsx)('a', {
                    target: '_blank',
                    href: a.details.creator.link,
                    style: {
                        marginBottom: 10,
                        width: 146
                    },
                    children: (0, d.jsxs)(o.default, {
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
    class z extends e.Component {
        componentDidMount() {
            this.props.defaultSearchTerm && this.requestImages(this.props.defaultSearchTerm);
        }
        render() {
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    this.getContent(),
                    (0, d.jsx)(r.default, {
                        id: 'upload image',
                        visible: this.state.upgradeModalOpen,
                        close: this.closeUpgradeModal,
                        copy: {
                            title: s.IMAGE_UPLOAD_TITLE,
                            description: s.IMAGE_UPLOAD_DESCRIPTION
                        }
                    })
                ]
            });
        }
        constructor(...a) {
            super(...a), (0, c.default)(this, 'state', {
                loading: !1,
                error: !1,
                imageResults: [],
                customLinkUrl: '',
                searchCount: 0,
                currentTabKey: this.props.blockUnsplash ? '2' : '1',
                upgradeModalOpen: !1
            }), (0, c.default)(this, 'onSearch', a => {
                this.setState({
                    imageResults: []
                }), this.requestImages(a);
            }), (0, c.default)(this, 'requestImages', a => {
                this.setState({
                    loading: !0
                }), (0, f.request)({
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
            }), (0, c.default)(this, 'onImageChange', a => {
                const A = a.target.value,
                    B = new Image();
                B.onload = () => {
                    this.setState({
                        customLinkUrl: A
                    });
                }, B.src = A;
            }), (0, c.default)(this, 'onPickCustomImage', () => this.props.onImagePicked(this.state.customLinkUrl)), (0, c.default)(this, 'onImageUploaded', a => this.props.onImagePicked(a)), (0, c.default)(this, 'handleTabClick', a => {
                '3' !== a || (0, f.isUpgraded)() || (0, f.isStudent)() ? this.setState({
                    currentTabKey: a
                }) : this.setState({
                    upgradeModalOpen: !0
                });
            }), (0, c.default)(this, 'closeUpgradeModal', () => this.setState({
                upgradeModalOpen: !1
            })), (0, c.default)(this, 'getContent', () => (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(o.default, {
                        style: {
                            fontWeight: 900,
                            fontSize: this.props.titleFontSize || 38,
                            marginBottom: this.props.titleBottomMargin || 0
                        },
                        children: this.props.title
                    }),
                    (0, d.jsxs)(m.default, {
                        type: 'card',
                        activeKey: this.state.currentTabKey,
                        onTabClick: this.handleTabClick,
                        children: [
                            !this.props.blockUnsplash && (0, d.jsxs)(w, {
                                tab: 'Unsplash',
                                children: [
                                    (0, d.jsx)(x, {
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
                                    this.state.loading && (0, d.jsx)('div', {
                                        style: {
                                            marginTop: 5
                                        },
                                        children: (0, d.jsx)(l.default, {
                                            size: 'large'
                                        })
                                    }),
                                    this.state.error && (0, d.jsx)(i.default, {
                                        message: 'Error',
                                        description: 'There was an error searching from Unsplash. Please try again later or enter a link.',
                                        type: 'error',
                                        showIcon: !0
                                    }),
                                    !this.state.loading && this.props.unsplashDefaultText && 0 === this.state.searchCount && (0, d.jsxs)('div', {
                                        className: 'flex hc vc flex-column',
                                        style: {
                                            color: p.default.Black,
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, d.jsx)(h.default, {
                                                style: {
                                                    fontSize: 50,
                                                    marginBottom: 5
                                                }
                                            }),
                                            (0, d.jsx)('div', {
                                                style: {
                                                    fontSize: 15,
                                                    textAlign: 'center'
                                                },
                                                children: this.props.unsplashDefaultText
                                            })
                                        ]
                                    }),
                                    !this.state.loading && 0 !== this.state.searchCount && 0 === this.state.imageResults.length && (0, d.jsxs)('div', {
                                        className: 'flex hc vc flex-column',
                                        style: {
                                            color: p.default.Black,
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, d.jsx)(g.default, {
                                                style: {
                                                    fontSize: 50,
                                                    marginBottom: 5
                                                }
                                            }),
                                            (0, d.jsx)('div', {
                                                style: {
                                                    fontSize: 15,
                                                    textAlign: 'center'
                                                },
                                                children: 1 === this.state.searchCount ? 'No images found. Try searching for something!' : 'No results found.'
                                            })
                                        ]
                                    }),
                                    (0, d.jsx)(A, {
                                        children: this.state.imageResults.map((a, b) => (0, d.jsx)(y, {
                                            details: a,
                                            isMiddle: (b - 1) % 3 == 0,
                                            onSelect: this.props.onImagePicked
                                        }, a.url))
                                    })
                                ]
                            }, '1'),
                            (0, d.jsxs)(w, {
                                tab: 'Link',
                                children: [
                                    (0, d.jsx)(k.default, {
                                        size: 'large',
                                        placeholder: 'Image link',
                                        style: {
                                            marginTop: -3
                                        },
                                        onChange: this.onImageChange
                                    }),
                                    (0, d.jsx)(j.default, {
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
                            this.props.allowUpload && (0, d.jsx)(w, {
                                tab: 'Upload',
                                children: (0, d.jsx)(q.default, {
                                    onPhotoUploaded: this.onImageUploaded
                                })
                            }, '3')
                        ]
                    })
                ]
            }));
        }
    }
    const A = n.default.div(t || (t = v`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  width: ${ 0 }px;
`), () => 464),
        B = n.default.div(u || (u = v`
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
    var C = D;
}), b.register('jMWad', function(r, c) {
    a(r.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('/xtXr'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'MehOutlined';
    var h = d.forwardRef(g);
}), b.register('/xtXr', function(b, r) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('4kbDa', function(r, c) {
    a(r.exports, 'default', function() {
        return l;
    });
    var c = b('UM8oI'),
        d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('Mnkhh'),
        g = b('jrTkz0'),
        h = b('iHElh'),
        i = b('f4DIF'),
        j = b('PjB0f');
    class k extends e.Component {
        render() {
            return (0, d.jsx)(d.Fragment, {
                children: (0, d.jsx)('div', {
                    style: {
                        width: '100%',
                        height: 300
                    },
                    children: (0, d.jsx)(i.default.Dragger, {
                        customRequest: this.uploadImage,
                        multiple: !1,
                        accept: 'image/*',
                        beforeUpload: this.fileIsSmallEnough,
                        children: this.state.loading ? (0, d.jsx)(h.default, {
                            size: 'large'
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)('p', {
                                    className: 'ant-upload-drag-icon',
                                    children: (0, d.jsx)(f.default, {})
                                }),
                                (0, d.jsx)('p', {
                                    className: 'ant-upload-text',
                                    children: 'Click or drag to upload a photo!'
                                }),
                                (0, d.jsx)('p', {
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
            super(...a), (0, c.default)(this, 'state', {
                loading: !1
            }), (0, c.default)(this, 'uploadImage', ({
                file: l
            }) => {
                const m = new FormData();
                m.append('file', l), this.setState({
                    loading: !0
                }), (0, j.request)({
                    url: '/api/games/image/add',
                    method: 'post',
                    data: m,
                    success: l => {
                        this.setState({
                            loading: !1
                        }), this.props.onPhotoUploaded(l.url);
                    },
                    error: l => {
                        this.setState({
                            loading: !1
                        }), g.default.error('Error uploading. Please try again.');
                    }
                });
            }), (0, c.default)(this, 'fileIsSmallEnough', l => {
                const m = l.size / 1024 / 1024 < 5;
                return m || g.default.error('Photo must be less than 5MB'), m;
            });
        }
    }
    var l = m;
}), b.register('Mnkhh', function(r, c) {
    a(r.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('/bfU6'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'InboxOutlined';
    var h = d.forwardRef(g);
}), b.register('/bfU6', function(b, r) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('N1uqT', function(r, s) {
    a(r.exports, 'AUDIO_TITLE', function() {
        return e;
    }), a(r.exports, 'AUDIO_DESCRIPTION', function() {
        return f;
    }), a(r.exports, 'IMAGE_UPLOAD_TITLE', function() {
        return g;
    }), a(r.exports, 'IMAGE_UPLOAD_DESCRIPTION', function() {
        return h;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('0wLl2');
    const e = (0, c.jsx)(c.Fragment, {
            children: 'Add audio with Pro'
        }),
        f = (0, c.jsxs)(c.Fragment, {
            children: [
                'Record your voice and have the audio played each time a student goes to answer this question. ',
                (0, c.jsxs)('b', {
                    children: [
                        'To add audio, upgrade to ',
                        d.COMPANY_NAME,
                        ' Pro.'
                    ]
                })
            ]
        }),
        g = (0, c.jsx)(c.Fragment, {
            children: 'Upload images with Pro'
        }),
        h = (0, c.jsxs)(c.Fragment, {
            children: [
                'To add your own images to questions, ',
                (0, c.jsxs)('b', {
                    children: [
                        'upgrade to ',
                        d.COMPANY_NAME,
                        ' Pro.'
                    ]
                })
            ]
        });
}), b.register('14Th7', function(r, s) {
    a(r.exports, 'defaultAnswer', function() {
        return o;
    }), a(r.exports, 'default', function() {
        return q;
    });
    var c = b('8kSQZ'),
        d = b('bPH7V'),
        e = b('cR5QE'),
        f = b('Vlfxs'),
        g = b('8k9IL'),
        h = b('uPP4W'),
        i = b('o/FCM'),
        j = b('74LM8'),
        k = b('6WXOc'),
        l = b('rDRgw'),
        m = b('BEXLu'),
        n = b('SRoMp');
    const o = a => ({
            _id: Math.random().toString(),
            text: '',
            correct: a
        }),
        p = () => ({
            _id: '',
            text: '',
            type: i.QuestionType.multipleChoice,
            image: '',
            audio: '',
            answers: [
                o(!0),
                o(!1),
                o(!1),
                o(!1)
            ]
        });
    var q = (0, f.observer)(h.forwardRef((a, b) => {
        var r;
        const s = (0, g.useLocalObservable)(() => p()),
            t = (0, n.default)(s) && !a.blockAddingNewQuestions,
            u = () => {
                const v = p();
                Object.keys(v).forEach(b => {
                    s[b] = v[b];
                });
            };
        h.useImperativeHandle(b, () => ({
            clear: u
        })), h.useEffect(() => {
            a.existingQuestion ? Object.keys(a.existingQuestion).forEach(b => {
                s[b] = a.existingQuestion[b];
            }) : u();
        }, [null === (r = a.existingQuestion) || void 0 === r ? void 0 : r._id]);
        const v = () => {
            t && a.submitQuestion(s);
        };
        return (0, c.jsxs)(e.default, {
            open: a.visible,
            width: 670,
            style: {
                top: 20
            },
            onCancel: a.close,
            afterClose: a.afterClose,
            closable: !1,
            footer: (0, c.jsx)(m.default, {
                label: a.buttonLabel || 'Add',
                onClick: v,
                loading: a.loading,
                disabledMessage: (0, n.canAddQuestionErrorMessage)(s),
                disabled: !t
            }),
            children: [
                (0, c.jsx)(j.default, {
                    question: s
                }),
                (0, c.jsx)(k.default, {
                    question: s,
                    onPressEnter: v,
                    imagesBlocked: a.imagesBlocked,
                    audioBlocked: a.audioBlocked,
                    latexBlocked: a.latexBlocked
                }),
                (0, c.jsx)(l.default, {
                    question: s,
                    onPressEnter: v,
                    imagesBlocked: a.imagesBlocked,
                    latexBlocked: a.latexBlocked
                }),
                a.errorMessage ? (0, c.jsx)(d.default, {
                    message: 'Error',
                    description: a.errorMessage,
                    type: 'error',
                    showIcon: !0
                }) : null
            ]
        });
    }));
}), b.register('74LM8', function(n, o) {
    a(n.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('ExtIT'),
        g = b('eAjRL0'),
        h = b('o/FCM'),
        i = b('gSUVO'),
        j = b('14Th7');
    let k;
    var l = (0, b('Vlfxs').observer)(a => {
        const m = d.useCallback(a => {
                a.target.value === h.QuestionType.multipleChoice && o(), a.target.value === h.QuestionType.textInput && n();
            }, []),
            n = () => {
                const o = a.question.answers.filter(a => a.correct && a.text && !a.image);
                o.length ? a.question.answers = o : a.question.answers = [(0, j.defaultAnswer)(!0)], a.question.type = h.QuestionType.textInput;
            },
            o = () => {
                const p = a.question.answers.filter((a, p) => p <= 3);
                a.question.answers = p;
                for (let q = p.length; q < 4; q++)
                    a.question.answers.push((0, j.defaultAnswer)(!1));
                a.question.type = h.QuestionType.multipleChoice;
            };
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsxs)(n, {
                    children: [
                        (0, c.jsx)('div', {}),
                        (0, c.jsx)('div', {
                            children: (0, c.jsxs)(g.default.Group, {
                                onChange: m,
                                value: a.question.type,
                                children: [
                                    (0, c.jsx)(g.default, {
                                        value: h.QuestionType.multipleChoice,
                                        children: (0, c.jsx)('span', {
                                            style: m,
                                            children: 'Multiple Choice'
                                        })
                                    }),
                                    (0, c.jsx)(g.default, {
                                        value: h.QuestionType.textInput,
                                        children: (0, c.jsx)('span', {
                                            style: m,
                                            children: 'Text Input'
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, c.jsx)(f.default, {
                    style: {
                        marginTop: 16,
                        marginBottom: 11
                    }
                })
            ]
        });
    });
    const m = {
            fontFamily: i.Fonts.SFPro
        },
        n = e.default.div(k || (k = (a => a)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`));
}), b.register('6WXOc', function(z, A) {
    a(z.exports, 'default', function() {
        return x;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('lmfrI'),
        f = b('gSUVO'),
        g = b('ECQaz'),
        h = b('IsmrL'),
        i = b('Vlfxs'),
        j = b('gBQ22'),
        k = b('qLhB38'),
        l = b('jrukz'),
        m = b('PjB0f'),
        n = b('VsZIM'),
        o = b('N1uqT'),
        p = (m = b('PjB0f'), b('5WxMK')),
        q = b('bTRJM'),
        r = b('s/4yx'),
        s = b('OIAFH'),
        t = b('Cadqq');
    let u, v, w = a => a;
    var x = (0, i.observer)(a => {
        const [y, z, A] = (0, m.useBoolean)(!1), [B, C, D] = (0, m.useBoolean)(!1), [E, F, G] = (0, m.useBoolean)(!1), [H, I, J] = (0, m.useBoolean)(!1);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(n.default, {
                    visible: E,
                    close: G,
                    id: 'add audio',
                    copy: {
                        title: o.AUDIO_TITLE,
                        description: o.AUDIO_DESCRIPTION
                    }
                }),
                (0, c.jsx)(j.default, {
                    visible: y,
                    close: A,
                    onImageChange: y => {
                        a.question.image = y;
                    },
                    currentImage: a.question.image
                }),
                (0, c.jsx)(l.default, {
                    visible: B,
                    close: D,
                    onAudioChanged: y => {
                        a.question.audio = y, D();
                    },
                    audio: a.question.audio
                }),
                (0, c.jsx)(p.default, {
                    visible: H,
                    close: J,
                    latex: a.question.latex,
                    onChange: y => {
                        a.question.latex = y;
                    }
                }),
                (0, c.jsx)(y, {
                    children: 'Question'
                }),
                (0, c.jsx)(g.default, {
                    value: a.question.text,
                    onTextChange: y => {
                        a.question.text = y;
                    },
                    placeholder: 'Ask away...',
                    disabled: !1,
                    onPressEnter: a.onPressEnter
                }),
                a.imagesBlocked && a.audioBlocked && a.latexBlocked ? null : (0, c.jsxs)(z, {
                    children: [
                        (0, c.jsx)(A, {
                            icon: (0, c.jsx)(s.default, {}),
                            label: 'Add Photo',
                            onClick: z,
                            disabled: a.imagesBlocked || !!a.question.latex,
                            customContent: a.question.image ? (0, c.jsx)('div', {
                                className: 'flex maxWidth hc vc',
                                children: (0, c.jsx)(k.default, {
                                    image: a.question.image,
                                    blockModalOpen: !0,
                                    size: 30,
                                    onClick: z
                                })
                            }) : null
                        }),
                        (0, c.jsx)('div', {
                            style: {
                                width: 6
                            }
                        }),
                        (0, c.jsx)(A, {
                            disabled: a.audioBlocked || !window.MediaRecorder || (0, m.isStudent)(),
                            icon: (0, c.jsx)(r.default, {}),
                            label: (a.question.audio ? '' : 'Add ') + 'Audio',
                            onClick: () => {
                                (0, m.isUpgraded)() ? C(): F();
                            }
                        }),
                        (0, c.jsx)('div', {
                            style: {
                                width: 6
                            }
                        }),
                        (0, c.jsx)(A, {
                            icon: (0, c.jsx)(t.default, {}),
                            disabled: !!a.question.image,
                            label: 'Add Equation',
                            customContent: a.question.latex ? (0, c.jsx)('div', {
                                style: {
                                    cursor: 'pointer'
                                },
                                children: (0, c.jsx)(q.default, {
                                    latex: a.question.latex
                                })
                            }) : null,
                            onClick: I
                        })
                    ]
                }),
                (0, c.jsx)('div', {
                    style: {
                        height: 12
                    }
                })
            ]
        });
    });
    const y = d.default.div(u || (u = w`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), e.default.Black, f.Fonts.SFPro, f.FontWeights.UltraBold),
        z = d.default.div.attrs({
            className: 'flex maxWidth'
        })(v || (v = w`
  margin-top: 8px;
  height: 48px;
`)),
        A = a => (0, c.jsx)(h.default, {
            disabled: a.disabled,
            style: {
                width: '33.33%',
                height: '100%',
                overflow: 'hidden'
            },
            type: 'dashed',
            tabIndex: '-1',
            onClick: a.onClick,
            children: a.customContent ? a.customContent : (0, c.jsxs)('div', {
                className: 'flex maxHeight hc vc',
                style: {
                    fontFamily: f.Fonts.SFPro
                },
                children: [
                    a.icon,
                    (0, c.jsx)('div', {
                        style: {
                            marginLeft: 5
                        },
                        children: a.label
                    })
                ]
            })
        });
}), b.register('ECQaz', function(l, m) {
    a(l.exports, 'default', function() {
        return j;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('L2h2Z'),
        f = b('c6x8w'),
        g = b('YfLmS'),
        h = b('0mVuc'),
        i = b('gSUVO');
    var j = a => {
        const k = d.useRef(),
            [l, m] = d.useState(!1);
        return (0, c.jsxs)('div', {
            style: {
                width: '100%'
            },
            children: [
                (0, c.jsx)(f.default, {
                    ref: k,
                    onPressEnter: a.onPressEnter,
                    maxLength: 220,
                    disabled: a.disabled,
                    autoFocus: a.autoFocus,
                    style: {
                        display: 'flex',
                        fontFamily: i.Fonts.SFPro,
                        fontWeight: i.FontWeights.Bold,
                        width: '100%',
                        height: 40
                    },
                    size: 'large',
                    placeholder: a.placeholder,
                    value: a.value,
                    onChange: k => {
                        l && m(!1), (k => {
                            a.onTextChange(k.target.value);
                        })(k);
                    },
                    suffix: l ? (0, c.jsx)('span', {}) : (0, c.jsx)(g.default, {
                        title: 'Show Symbol Keyboard',
                        children: (0, c.jsx)(e.default, {
                            onClick: () => {
                                m(!0), k.current.focus();
                            }
                        })
                    })
                }),
                l ? (0, c.jsx)(h.default, {
                    onSymbolSelected: k => a.onTextChange(a.value + k),
                    focusInput: () => {
                        var n;
                        null === (n = k.current) || void 0 === n || n.focus();
                    }
                }) : null
            ]
        });
    };
}), b.register('0mVuc', function(m, c) {
    a(m.exports, 'default', function() {
        return k;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('IsmrL'),
        f = b('/nMwY'),
        g = b('gJZsu');
    let h;
    const i = b('h99Nu').default.div(h || (h = (a => a)`
  margin-top: 1px;
`)),
        {
            TabPane: j
        } = f.default;
    var k = a => {
        const [l, m] = d.useState(g.default[0].name);
        return (0, c.jsx)(i, {
            children: (0, c.jsx)(f.default, {
                onChange: m,
                activeKey: l,
                tabPosition: a.tabPosition || 'top',
                children: g.default.map(l => (0, c.jsx)(j, {
                    tab: l.name,
                    style: {
                        boxSizing: 'border-box',
                        maxHeight: 255
                    },
                    className: 'scroll',
                    children: l.characters.map(m => (0, c.jsx)(e.default, {
                        style: {
                            margin: 2
                        },
                        size: 'small',
                        onClick: () => {
                            return l = m, null == a || a.onSymbolSelected(l), void(null == a || a.focusInput());
                            var n;
                        },
                        children: m
                    }, `${ l.name }-${ m }`))
                }, l.name))
            })
        });
    };
}), b.register('gJZsu', function(b, w) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = [{
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
}), b.register('gBQ22', function(w, x) {
    a(w.exports, 'default', function() {
        return l;
    });
    var c = b('UM8oI'),
        d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('IsmrL'),
        g = b('KV+OV'),
        h = b('xgdF8'),
        i = b('PjB0f'),
        j = b('2WDH6');
    class k extends e.Component {
        render() {
            const {
                visible: l,
                close: m
            } = this.props;
            return (0, d.jsx)(g.default, {
                open: l,
                placement: 'right',
                closable: !0,
                destroyOnClose: !0,
                onClose: m,
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
            super(...a), (0, c.default)(this, 'removeImage', () => {
                this.onImagePicked('');
            }), (0, c.default)(this, 'onImagePicked', a => {
                this.props.close(), this.setState({}), this.props.onImageChange(a);
            }), (0, c.default)(this, 'getContent', () => this.props.currentImage ? (0, d.jsxs)('div', {
                className: 'flex hc vc flex-column',
                children: [
                    (0, d.jsx)('img', {
                        src: (0, j.getCloudinaryUrl)(this.props.currentImage),
                        style: {
                            maxWidth: '100%',
                            maxHeight: 300,
                            borderRadius: 5
                        }
                    }),
                    (0, d.jsx)(f.default, {
                        type: 'primary',
                        style: {
                            marginTop: 10
                        },
                        size: 'large',
                        onClick: this.removeImage,
                        children: 'Remove Image'
                    })
                ]
            }) : (0, d.jsx)(h.default, {
                title: 'Add Photo',
                titleFontSize: 34,
                titleBottomMargin: 6,
                defaultSearchTerm: '',
                onImagePicked: this.onImagePicked,
                allowUpload: !(0, i.isStudent)(),
                unsplashDefaultText: 'Search for anything!'
            }));
        }
    }
    var l = m;
}), b.register('jrukz', function(w, x) {
    a(w.exports, 'default', function() {
        return u;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('s/4yx'),
        f = b('4jOgw8'),
        g = b('2Hg8W4'),
        h = b('8dKJo1'),
        i = b('S44R9'),
        j = b('CxoOi'),
        k = b('IsmrL'),
        l = b('ExtIT'),
        m = b('KV+OV'),
        n = b('jrTkz0'),
        o = b('xcGI7'),
        p = b('gSUVO'),
        q = b('PjB0f'),
        r = b('GFgjD'),
        s = b('2WDH6');
    const t = {
        height: 111,
        width: '100%'
    };
    var u = a => {
        const [v, w] = d.useState(!1), {
            status: x,
            startRecording: y,
            stopRecording: z,
            mediaBlobUrl: A
        } = (0, j.useReactMediaRecorder)({
            video: !1,
            audio: !0
        }), B = () => {
            new Audio((0, s.getCloudinaryUrl)(a.audio)).play();
        }, C = () => a.onAudioChanged('');
        return (0, c.jsx)(m.default, {
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
            children: a.audio ? (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(o.default, {
                        style: {
                            fontWeight: p.FontWeights.Black,
                            fontSize: 34
                        },
                        children: 'Audio'
                    }),
                    (0, c.jsx)(o.default, {
                        style: {
                            fontSize: 16,
                            marginTop: -8
                        },
                        children: 'This audio will be played each time a student goes to answer this question.'
                    }),
                    (0, c.jsx)(l.default, {}),
                    (0, c.jsxs)('div', {
                        className: 'flex vc',
                        children: [
                            (0, c.jsx)(k.default, {
                                size: 'large',
                                type: 'primary',
                                onClick: B,
                                icon: (0, c.jsx)(g.default, {}),
                                style: {
                                    marginRight: 5
                                },
                                children: 'Play Audio'
                            }),
                            (0, c.jsx)(k.default, {
                                size: 'large',
                                type: 'dashed',
                                icon: (0, c.jsx)(f.default, {}),
                                onClick: C,
                                children: 'Remove Audio'
                            })
                        ]
                    })
                ]
            }) : (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(o.default, {
                        style: {
                            fontWeight: p.FontWeights.Black,
                            fontSize: 34
                        },
                        children: 'Add Audio'
                    }),
                    (0, c.jsx)(o.default, {
                        style: {
                            fontSize: 16,
                            marginTop: 2,
                            marginBottom: -2,
                            lineHeight: 1.2
                        },
                        children: 'Record your voice! It will be played each time a student goes to answer this question.'
                    }),
                    (0, c.jsx)(l.default, {}),
                    (0, c.jsxs)('div', {
                        children: [
                            A && 'recording' !== x && (0, c.jsxs)(c.Fragment, {
                                children: [
                                    (0, c.jsx)(o.default, {
                                        style: {
                                            fontWeight: p.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Finished Recording'
                                    }),
                                    (0, c.jsx)('audio', {
                                        src: A,
                                        controls: !0
                                    }),
                                    (0, c.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, c.jsx)(k.default, {
                                                size: 'large',
                                                type: 'primary',
                                                icon: (0, c.jsx)(h.default, {}),
                                                loading: v,
                                                style: {
                                                    marginRight: 10
                                                },
                                                onClick: () => {
                                                    return x = A, void(v || fetch(x).then(a => a.blob()).then(v => {
                                                        const D = new File([v], `recording-${ Date.now() }.wav`);
                                                        if (D.size / 1000000 > 3)
                                                            return void(0, r.throwError)({
                                                                title: 'Audio too long',
                                                                content: 'Please record a shorter clip'
                                                            });
                                                        const E = new FormData();
                                                        E.append('file', D), w(!0), (0, q.request)({
                                                            url: '/api/games/audio/add',
                                                            method: 'post',
                                                            data: E,
                                                            success: v => a.onAudioChanged(v.url),
                                                            error: a => n.default.error('Error uploading. Please try again.'),
                                                            both: () => w(!1)
                                                        });
                                                    }).catch());
                                                    var D;
                                                },
                                                children: 'Save'
                                            }),
                                            (0, c.jsx)(k.default, {
                                                onClick: y,
                                                size: 'large',
                                                type: 'dashed',
                                                icon: (0, c.jsx)(e.default, {}),
                                                children: 'New Recording'
                                            })
                                        ]
                                    }),
                                    (0, c.jsx)('div', {
                                        style: {
                                            height: 10
                                        }
                                    })
                                ]
                            }),
                            'idle' === x && (0, c.jsx)(k.default, {
                                onClick: y,
                                style: t,
                                icon: (0, c.jsx)(e.default, {}),
                                type: 'dashed',
                                children: 'Start Recording'
                            }),
                            'recording' === x && (0, c.jsxs)(c.Fragment, {
                                children: [
                                    (0, c.jsx)(o.default, {
                                        style: {
                                            fontWeight: p.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Recording...'
                                    }),
                                    (0, c.jsx)(k.default, {
                                        onClick: z,
                                        style: t,
                                        type: 'dashed',
                                        icon: (0, c.jsx)(i.default, {}),
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
}), b.register('S44R9', function(e, c) {
    a(e.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('0ATtR'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'StopOutlined';
    var h = d.forwardRef(g);
}), b.register('0ATtR', function(b, e) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('CxoOi', function(a, e) {
    a.exports = b('YNV0B');
}), b.register('YNV0B', function(a, e) {
    var c = a.exports && a.exports.__awaiter || function(a, b, e, c) {
            return new(e || (e = Promise))(function(d, h) {
                function d(a) {
                    try {
                        f(c.next(a));
                    } catch (a) {
                        h(a);
                    }
                }

                function e(a) {
                    try {
                        f(c.throw(a));
                    } catch (a) {
                        h(a);
                    }
                }

                function f(a) {
                    var g;
                    a.done ? d(a.value) : (g = a.value, g instanceof e ? g : new e(function(a) {
                        a(g);
                    })).then(d, e);
                }
                f((c = c.apply(a, b || [])).next());
            });
        },
        d = a.exports && a.exports.__generator || function(a, b) {
            var e, f, g, h, i = {
                label: 0,
                sent: function() {
                    if (1 & g[0])
                        throw g[1];
                    return g[1];
                },
                trys: [],
                ops: []
            };
            return h = {
                next: j(0),
                throw: j(1),
                return: j(2)
            }, 'function' == typeof Symbol && (h[Symbol.iterator] = function() {
                return this;
            }), h;

            function j(h) {
                return function(j) {
                    return function(h) {
                        if (e)
                            throw new TypeError('Generator is already executing.');
                        for (; i;)
                            try {
                                if (e = 1, f && (g = 2 & h[0] ? f.return : h[0] ? f.throw || ((g = f.return) && g.call(f), 0) : f.next) && !(g = g.call(f, h[1])).done)
                                    return g;
                                switch (f = 0, g && (h = [
                                        2 & h[0],
                                        g.value
                                    ]), h[0]) {
                                    case 0:
                                    case 1:
                                        g = h;
                                        break;
                                    case 4:
                                        return i.label++, {
                                            value: h[1],
                                            done: !1
                                        };
                                    case 5:
                                        i.label++, f = h[1], h = [0];
                                        continue;
                                    case 7:
                                        h = i.ops.pop(), i.trys.pop();
                                        continue;
                                    default:
                                        if (!(g = i.trys, (g = g.length > 0 && g[g.length - 1]) || 6 !== h[0] && 2 !== h[0])) {
                                            i = 0;
                                            continue;
                                        }
                                        if (3 === h[0] && (!g || h[1] > g[0] && h[1] < g[3])) {
                                            i.label = h[1];
                                            break;
                                        }
                                        if (6 === h[0] && i.label < g[1]) {
                                            i.label = g[1], g = h;
                                            break;
                                        }
                                        if (g && i.label < g[2]) {
                                            i.label = g[2], i.ops.push(h);
                                            break;
                                        }
                                        g[2] && i.ops.pop(), i.trys.pop();
                                        continue;
                                }
                                h = b.call(a, i);
                            } catch (a) {
                                h = [
                                    6,
                                    a
                                ], f = 0;
                            } finally {
                                e = g = 0;
                            }
                        if (5 & h[0])
                            throw h[1];
                        return {
                            value: h[0] ? h[1] : void 0,
                            done: !0
                        };
                    }([
                        h,
                        j
                    ]);
                };
            }
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.ReactMediaRecorder = a.exports.useReactMediaRecorder = a.exports.RecorderErrors = void 0;
    var e, f, g = b('sNRoB'),
        h = b('uPP4W'),
        i = b('dGvKz');

    function j(a) {
        var k = this,
            l = a.audio,
            m = void 0 === l || l,
            n = a.video,
            o = void 0 !== n && n,
            p = a.onStop,
            q = void 0 === p ? function() {
                return null;
            } : p,
            r = a.onStart,
            s = void 0 === r ? function() {
                return null;
            } : r,
            t = a.blobPropertyBag,
            u = a.screen,
            v = void 0 !== u && u,
            w = a.mediaRecorderOptions,
            x = void 0 === w ? void 0 : w,
            y = a.customMediaStream,
            z = void 0 === y ? null : y,
            A = a.stopStreamsOnStop,
            B = void 0 === A || A,
            C = a.askPermissionOnMount,
            D = void 0 !== C && C,
            E = (0, h.useRef)(null),
            F = (0, h.useRef)([]),
            G = (0, h.useRef)(null),
            H = (0, h.useState)('idle'),
            I = H[0],
            J = H[1],
            K = (0, h.useState)(!1),
            L = K[0],
            M = K[1],
            N = (0, h.useState)(void 0),
            O = N[0],
            P = N[1],
            Q = (0, h.useState)('NONE'),
            R = Q[0],
            S = Q[1];
        (0, h.useEffect)(function() {
            c(k, void 0, void 0, function() {
                var T;
                return d(this, function(k) {
                    switch (k.label) {
                        case 0:
                            return T = g.register, [
                                4,
                                (0, i.connect)()
                            ];
                        case 1:
                            return [
                                4,
                                T.apply(void 0, [k.sent()])
                            ];
                        case 2:
                            return k.sent(), [2];
                    }
                });
            });
        }, []);
        var T = (0, h.useCallback)(function() {
            return c(k, void 0, void 0, function() {
                var U, V, W, X;
                return d(this, function(d) {
                    switch (d.label) {
                        case 0:
                            J('acquiring_media'), U = {
                                audio: 'boolean' == typeof m ? !!m : m,
                                video: 'boolean' == typeof o ? !!o : o
                            }, d.label = 1;
                        case 1:
                            return d.trys.push([
                                1,
                                9, ,
                                10
                            ]), z ? (G.current = z, [
                                3,
                                8
                            ]) : [
                                3,
                                2
                            ];
                        case 2:
                            return v ? [
                                4,
                                window.navigator.mediaDevices.getDisplayMedia({
                                    video: o || !0
                                })
                            ] : [
                                3,
                                6
                            ];
                        case 3:
                            return (V = d.sent()).getVideoTracks()[0].addEventListener('ended', function() {
                                Y();
                            }), m ? [
                                4,
                                window.navigator.mediaDevices.getUserMedia({
                                    audio: m
                                })
                            ] : [
                                3,
                                5
                            ];
                        case 4:
                            d.sent().getAudioTracks().forEach(function(U) {
                                return V.addTrack(U);
                            }), d.label = 5;
                        case 5:
                            return G.current = V, [
                                3,
                                8
                            ];
                        case 6:
                            return [
                                4,
                                window.navigator.mediaDevices.getUserMedia(U)
                            ];
                        case 7:
                            W = d.sent(), G.current = W, d.label = 8;
                        case 8:
                            return J('idle'), [
                                3,
                                10
                            ];
                        case 9:
                            return X = d.sent(), S(X.name), J('idle'), [
                                3,
                                10
                            ];
                        case 10:
                            return [2];
                    }
                });
            });
        }, [
            m,
            o,
            v
        ]);
        (0, h.useEffect)(function() {
            if (!window.MediaRecorder)
                throw new Error('Unsupported Browser');
            if (v && !window.navigator.mediaDevices.getDisplayMedia)
                throw new Error('This browser doesn\'t support screen capturing');
            var U = function(U) {
                var V = navigator.mediaDevices.getSupportedConstraints(),
                    W = Object.keys(U).filter(function(U) {
                        return !V[U];
                    });
                W.length > 0 && console.error('The constraints '.concat(W.join(','), ' doesn\'t support on this browser. Please check your ReactMediaRecorder component.'));
            };
            return 'object' == typeof m && U(m), 'object' == typeof o && U(o), x && x.mimeType && (MediaRecorder.isTypeSupported(x.mimeType) || console.error('The specified MIME type you supplied for MediaRecorder doesn\'t support this browser')), !G.current && D && T(),
                function() {
                    G.current && G.current.getTracks().forEach(function(U) {
                        return U.clone().stop();
                    });
                };
        }, [
            m,
            v,
            o,
            T,
            x,
            D
        ]);
        var U = function(a) {
                var V = a.data;
                F.current.push(V);
            },
            V = function() {
                s();
            },
            W = function() {
                var X = F.current[0],
                    Y = Object.assign({
                        type: X.type
                    }, t || (o ? {
                        type: 'video/mp4'
                    } : {
                        type: 'audio/wav'
                    })),
                    Z = new Blob(F.current, Y),
                    $ = URL.createObjectURL(Z);
                J('stopped'), P($), q($, Z);
            },
            X = function(a) {
                M(a), G.current && G.current.getAudioTracks().forEach(function(k) {
                    return k.enabled = !a;
                });
            },
            Y = function() {
                E.current && 'inactive' !== E.current.state && (J('stopping'), E.current.stop(), B && G.current && G.current.getTracks().forEach(function(a) {
                    return a.stop();
                }), F.current = []);
            };
        return {
            error: e[R],
            muteAudio: function() {
                return X(!0);
            },
            unMuteAudio: function() {
                return X(!1);
            },
            startRecording: function() {
                return c(k, void 0, void 0, function() {
                    return d(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return S('NONE'), G.current ? [
                                    3,
                                    2
                                ] : [
                                    4,
                                    T()
                                ];
                            case 1:
                                a.sent(), a.label = 2;
                            case 2:
                                return G.current ? G.current.getTracks().some(function(a) {
                                    return 'ended' === a.readyState;
                                }) ? [
                                    4,
                                    T()
                                ] : [
                                    3,
                                    4
                                ] : [
                                    3,
                                    5
                                ];
                            case 3:
                                a.sent(), a.label = 4;
                            case 4:
                                if (!G.current.active)
                                    return [2];
                                E.current = new g.MediaRecorder(G.current, x || void 0), E.current.ondataavailable = U, E.current.onstop = W, E.current.onstart = V, E.current.onerror = function() {
                                    S('NO_RECORDER'), J('idle');
                                }, E.current.start(), J('recording'), a.label = 5;
                            case 5:
                                return [2];
                        }
                    });
                });
            },
            pauseRecording: function() {
                E.current && 'recording' === E.current.state && (J('paused'), E.current.pause());
            },
            resumeRecording: function() {
                E.current && 'paused' === E.current.state && (J('recording'), E.current.resume());
            },
            stopRecording: Y,
            mediaBlobUrl: O,
            status: I,
            isAudioMuted: L,
            previewStream: G.current ? new MediaStream(G.current.getVideoTracks()) : null,
            previewAudioStream: G.current ? new MediaStream(G.current.getAudioTracks()) : null,
            clearBlobUrl: function() {
                O && URL.revokeObjectURL(O), P(void 0), J('idle');
            }
        };
    }
    (f = e = a.exports.RecorderErrors || (a.exports.RecorderErrors = {})).AbortError = 'media_aborted', f.NotAllowedError = 'permission_denied', f.NotFoundError = 'no_specified_media_found', f.NotReadableError = 'media_in_use', f.OverconstrainedError = 'invalid_media_constraints', f.TypeError = 'no_constraints', f.NONE = '', f.NO_RECORDER = 'recorder_error', a.exports.useReactMediaRecorder = j;
    a.exports.ReactMediaRecorder = function(a) {
        return a.render(j(a));
    };
}), b.register('sNRoB', function(i, h) {
    a(i.exports, 'MediaRecorder', function() {
        return J;
    }), a(i.exports, 'register', function() {
        return K;
    });
    var c = b('m4qJn'),
        d = b('gvFcD'),
        e = b('wJM/d'),
        f = b('iU6Jx'),
        g = b('ndoUe'),
        h = b('gNneL'),
        i = b('A5pJM'),
        j = (b('IYJr9'), b('Nxz4r')),
        k = b('CfNYx'),
        l = b('bxadq'),
        m = b('AMDhp'),
        n = b('SITq6'),
        o = b('33hyX'),
        p = b('8rvOo'),
        q = b('7oqcj'),
        r = b('qMKfV'),
        s = b('8whZA'),
        t = b('6zPeJ'),
        u = b('YH7Z+'),
        v = b('QiHlD');
    b('qXvNn'), b('zE9L5');
    const w = [],
        x = (0, t.createWindow)(),
        y = (0, k.createNativeBlobEventConstructor)(x),
        z = (0, d.createBlobEventFactory)(y),
        A = (0, r.createWebAudioMediaRecorderFactory)(z, h.createInvalidModificationError, i.createInvalidStateError, n.createNotSupportedError),
        B = (0, q.createReadVariableSizeInteger)(u.readVariableSizeIntegerLength),
        C = (0, o.createReadElementContent)(B),
        D = (0, p.createReadElementType)(B),
        E = (0, e.createDecodeWebMChunk)(C, D),
        F = (0, s.createWebmPcmMediaRecorderFactory)(z, h.createInvalidModificationError, n.createNotSupportedError, E, B),
        G = (0, g.createEventTargetFactory)(x),
        H = (0, m.createNativeMediaRecorderConstructor)(x),
        I = (0, l.createNativeMediaRecorderFactory)(h.createInvalidModificationError, n.createNotSupportedError),
        J = (0, j.createMediaRecorderConstructor)(I, n.createNotSupportedError, A, F, w, (0, f.createEventTargetConstructor)(G, v.wrapEventListener), H),
        K = async a => {
            w.push(await (0, c.register)(a));
        };
}), b.register('m4qJn', function(i, h) {
    a(i.exports, 'encode', function() {
        return h;
    }), a(i.exports, 'instantiate', function() {
        return i;
    }), a(i.exports, 'register', function() {
        return j;
    });
    var c = b('JpLig'),
        d = b('MH0Ld');
    const e = new Blob([d.worker], {
            type: 'application/javascript; charset=utf-8'
        }),
        f = URL.createObjectURL(e),
        g = (0, c.load)(f),
        h = (g.connect, g.disconnect, g.encode),
        i = g.instantiate,
        j = (g.isSupported, g.register);
    URL.revokeObjectURL(f);
}), b.register('JpLig', function(i, h) {
    a(i.exports, 'load', function() {
        return j;
    });
    var c = b('qDwZR'),
        d = b('4nzHq');
    b('ROTUq'), b('85Dqi');
    const e = new Set(),
        f = (0, c.createBroker)({
            encode: ({
                call: g
            }) => async (b, i) => {
                const h = await g('encode', {
                    encoderId: b,
                    timeslice: i
                });
                return e.delete(b), h;
            },
            instantiate: ({
                call: h
            }) => async (b, i) => {
                const i = (0, d.addUniqueNumber)(e);
                return {
                    encoderId: i,
                    port: await h('instantiate', {
                        encoderId: i,
                        mimeType: b,
                        sampleRate: i
                    })
                };
            },
            register: ({
                call: i
            }) => b => i('register', {
                port: b
            }, [b])
        }),
        j = i => {
            const k = new Worker(i);
            return f(k);
        };
}), b.register('qDwZR', function(i, m) {
    a(i.exports, 'createBroker', function() {
        return g;
    });
    var c = b('4nzHq'),
        d = b('8DufR'),
        e = b('rs+Nd');
    b('2Am3I'), b('AGCRj');
    const f = new WeakMap(),
        g = a => {
            const h = (0, e.extendBrokerImplementation)(a);
            return a => {
                const i = (a => {
                    if (f.has(a))
                        return f.get(a);
                    const j = new Map();
                    return f.set(a, j), j;
                })(a);
                a.addEventListener('message', ({
                    data: j
                }) => {
                    const {
                        id: k
                    } = l;
                    if (null !== k && i.has(k)) {
                        const {
                            reject: m,
                            resolve: n
                        } = i.get(k);
                        i.delete(k), void 0 === l.error ? n(l.result) : m(new Error(l.error.message));
                    }
                }), (0, d.isMessagePort)(j) && j.start();
                const k = (h, l = null, m = []) => new Promise((e, f) => {
                        const n = (0, c.generateUniqueNumber)(i);
                        i.set(n, {
                            reject: f,
                            resolve: e
                        }), null === l ? j.postMessage({
                            id: n,
                            method: h
                        }, m) : j.postMessage({
                            id: n,
                            method: h,
                            params: l
                        }, m);
                    }),
                    n = (h, i, o = []) => {
                        j.postMessage({
                            id: null,
                            method: h,
                            params: i
                        }, o);
                    };
                let p = {};
                for (const [q, r] of Object.entries(h))
                    p = {
                        ...p,
                        [q]: r({
                            call: o,
                            notify: n
                        })
                    };
                return {
                    ...p
                };
            };
        };
}), b.register('4nzHq', function(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m;
    a.exports, c = a.exports, d = function(a) {
        return function(b) {
            var n = a(b);
            return b.add(n), n;
        };
    }, e = function(a) {
        return function(b, c) {
            return a.set(b, c), c;
        };
    }, f = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, h = 2 * (g = 536870912), i = function(a, b) {
        return function(c) {
            var n = b.get(c),
                o = void 0 === n ? c.size : n < h ? n + 1 : 0;
            if (!c.has(o))
                return a(c, o);
            if (c.size < g) {
                for (; c.has(o);)
                    o = Math.floor(Math.random() * h);
                return a(c, o);
            }
            if (c.size > f)
                throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
            for (; c.has(o);)
                o = Math.floor(Math.random() * f);
            return a(c, o);
        };
    }, j = new WeakMap(), k = e(j), l = i(k, j), m = d(l), c.addUniqueNumber = m, c.generateUniqueNumber = l, Object.defineProperty(c, '__esModule', {
        value: !0
    });
}), b.register('8DufR', function(b, g) {
    a(b.exports, 'isMessagePort', function() {
        return c;
    });
    const c = a => 'function' == typeof a.start;
}), b.register('rs+Nd', function(g, h) {
    a(g.exports, 'extendBrokerImplementation', function() {
        return d;
    });
    var c = b('8Oyc/');
    const d = a => ({
        ...a,
        connect: ({
            call: e
        }) => async () => {
            const {
                port1: f,
                port2: g
            } = new MessageChannel(), h = await e('connect', {
                port: f
            }, [f]);
            return c.PORT_MAP.set(g, h), g;
        },
        disconnect: ({
            call: f
        }) => async b => {
            const g = c.PORT_MAP.get(b);
            if (void 0 === g)
                throw new Error('The given port is not connected.');
            await f('disconnect', {
                portId: g
            });
        },
        isSupported: ({
            call: g
        }) => () => g('isSupported')
    });
}), b.register('8Oyc/', function(b, f) {
    a(b.exports, 'PORT_MAP', function() {
        return c;
    });
    const c = new WeakMap();
}), b.register('2Am3I', function(a, f) {
    b('sCcFp644'), b('sCcFp643'), b('sCcFp642'), b('sCcFp641');
}), b.register('sCcFp644', function(a, b) {}), b.register('sCcFp643', function(a, b) {}), b.register('sCcFp642', function(a, b) {}), b.register('sCcFp641', function(a, b) {}), b.register('AGCRj', function(a, f) {
    b('sCcFp640');
}), b.register('sCcFp640', function(a, b) {}), b.register('ROTUq', function(a, f) {
    b('sCcFp639');
}), b.register('sCcFp639', function(a, b) {}), b.register('85Dqi', function(a, f) {
    b('sCcFp638'), b('sCcFp637');
}), b.register('sCcFp638', function(a, b) {}), b.register('sCcFp637', function(a, b) {}), b.register('MH0Ld', function(b, f) {
    a(b.exports, 'worker', function() {
        return c;
    });
    const c = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t),s=o(r),i=o(n),c=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},u=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)s.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(s),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(u(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(a.default(e),[c(t[r.name],r.modifiers),n]):[].concat(a.default(e),[function(e){return c(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(a.default(e),a.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(a.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,a=2*o,s=function(e,t){return function(r){var s=t.get(r),i=void 0===s?r.size:s<a?s+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=s(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),a=r(906),s=r(344);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,a=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),s=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),c=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),u=(e,t)=>async r=>{let{data:{id:n,method:o,params:c}}=r;const u=t[o];try{if(void 0===u)throw a({method:o});const t=void 0===c?u():u(c);if(void 0===t)throw s({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=(0,l.generateUniqueNumber)(d);return d.set(a,(()=>{o(),n.close(),d.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw c({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=u(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>{e.onmessage=null,e.close()},h=new WeakMap,g=new WeakMap,v=(e=>{const t=(r=e,{...r,connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return h.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=h.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var r;return e=>{const r=(e=>{if(g.has(e))return g.get(e);const t=new Map;return g.set(e,t),t})(e);e.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,s)=>{const i=(0,l.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)}))},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a={...a,[e]:r({call:n,notify:o})};return{...a}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),w=async(e,t)=>{const r=v(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},x=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(x),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(x,y),b=new Map,E=((e,t)=>r=>{const[n,o,a,s]=t(r);return a?new Promise((t=>{o.onmessage=a=>{let{data:i}=a;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,s,i)}})):n.encode(r,null)})(m,M),A=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(b),_=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error(\'There is already an encoder registered with an id called "\'.concat(n,\'".\'));const s=r(o),{port1:i,port2:c}=new MessageChannel,u=[s,i,!0,a];return t.set(n,u),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),u[2]=!1):s.record(n,a,r)},c})(m,x,A),I=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);p(self,{encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await I(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=_(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await w(b,t)}}})})()})();';
}), b.register('gvFcD', function(b, f) {
    a(b.exports, 'createBlobEventFactory', function() {
        return c;
    });
    const c = a => (b, f) => {
        if (null === a) {
            const {
                data: d,
                ...e
            } = f, g = new Event(b, e);
            return g.data = d, g;
        }
        return new a(b, d);
    };
}), b.register('wJM/d', function(b, d) {
    a(b.exports, 'createDecodeWebMChunk', function() {
        return c;
    });
    const c = (a, b) => (d, c, j) => {
        const d = [];
        let e = f,
            g = 0;
        for (; g < d.byteLength;)
            if (null === e) {
                const h = b(d, g);
                if (null === h)
                    break;
                const {
                    length: i,
                    type: j
                } = k;
                e = j, g += i;
            } else {
                const l = k(d, g, e, j);
                if (null === l)
                    break;
                const {
                    content: m,
                    length: n
                } = o;
                e = null, g += n, null !== m && d.push(m);
            }
        return {
            contents: d,
            currentElementType: e,
            offset: g
        };
    };
}), b.register('iU6Jx', function(b, d) {
    a(b.exports, 'createEventTargetConstructor', function() {
        return c;
    });
    const c = (a, b) => class {
        addEventListener(a, d, c) {
            if (null !== d) {
                let d = this._listeners.get(d);
                void 0 === d && (d = b(this, d), 'function' == typeof d && this._listeners.set(d, d)), this._nativeEventTarget.addEventListener(a, d, c);
            }
        }
        dispatchEvent(a) {
            return this._nativeEventTarget.dispatchEvent(a);
        }
        removeEventListener(a, b, d) {
            const d = null === b ? void 0 : this._listeners.get(b);
            this._nativeEventTarget.removeEventListener(a, void 0 === d ? null : d, d);
        }
        constructor(d = null) {
            this._listeners = new WeakMap(), this._nativeEventTarget = null === d ? a() : d;
        }
    };
}), b.register('ndoUe', function(b, d) {
    a(b.exports, 'createEventTargetFactory', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            throw new Error('A native EventTarget could not be created.');
        return a.document.createElement('p');
    };
}), b.register('gNneL', function(b, d) {
    a(b.exports, 'createInvalidModificationError', function() {
        return c;
    });
    const c = (d = '') => {
        try {
            return new DOMException(d, 'InvalidModificationError');
        } catch (b) {
            return b.code = 13, b.message = d, b.name = 'InvalidModificationError', b;
        }
    };
}), b.register('A5pJM', function(b, d) {
    a(b.exports, 'createInvalidStateError', function() {
        return c;
    });
    const c = () => {
        try {
            return new DOMException('', 'InvalidStateError');
        } catch (a) {
            return a.code = 11, a.name = 'InvalidStateError', a;
        }
    };
}), b.register('IYJr9', function(b, d) {
    a(b.exports, 'createIsSupportedPromise', function() {
        return c;
    });
    const c = a => null === a || void 0 === a.MediaStream || void 0 !== a.MediaRecorder && void 0 === a.MediaRecorder.isTypeSupported ? Promise.resolve(!1) : new Promise(b => {
        if (void 0 === a.MediaRecorder)
            return b(!0);
        const d = document.createElement('canvas');
        if (d.getContext('2d'), 'function' != typeof d.captureStream)
            return b(!1);
        const e = d.captureStream(),
            f = 'audio/webm';
        try {
            const g = new a.MediaRecorder(e, {
                mimeType: f
            });
            g.addEventListener('dataavailable', ({
                data: h
            }) => b(h.type === f)), g.start(), setTimeout(() => g.stop(), 10);
        } catch (a) {
            b('NotSupportedError' === a.name);
        }
    });
}), b.register('Nxz4r', function(b, o) {
    a(b.exports, 'createMediaRecorderConstructor', function() {
        return c;
    });
    const c = (a, b, o, c, n, d, e) => class extends d {
        get mimeType() {
            return this._internalMediaRecorder.mimeType;
        }
        get ondataavailable() {
            return null === this._ondataavailable ? this._ondataavailable : this._ondataavailable[0];
        }
        set ondataavailable(a) {
            if (null !== this._ondataavailable && this.removeEventListener('dataavailable', this._ondataavailable[1]), 'function' == typeof a) {
                const d = a.bind(this);
                this.addEventListener('dataavailable', d), this._ondataavailable = [
                    a,
                    d
                ];
            } else
                this._ondataavailable = null;
        }
        get onerror() {
            return null === this._onerror ? this._onerror : this._onerror[0];
        }
        set onerror(a) {
            if (null !== this._onerror && this.removeEventListener('error', this._onerror[1]), 'function' == typeof a) {
                const d = a.bind(this);
                this.addEventListener('error', d), this._onerror = [
                    a,
                    d
                ];
            } else
                this._onerror = null;
        }
        get onpause() {
            return null === this._onpause ? this._onpause : this._onpause[0];
        }
        set onpause(a) {
            if (null !== this._onpause && this.removeEventListener('pause', this._onpause[1]), 'function' == typeof a) {
                const d = a.bind(this);
                this.addEventListener('pause', d), this._onpause = [
                    a,
                    d
                ];
            } else
                this._onpause = null;
        }
        get onresume() {
            return null === this._onresume ? this._onresume : this._onresume[0];
        }
        set onresume(a) {
            if (null !== this._onresume && this.removeEventListener('resume', this._onresume[1]), 'function' == typeof a) {
                const d = a.bind(this);
                this.addEventListener('resume', d), this._onresume = [
                    a,
                    d
                ];
            } else
                this._onresume = null;
        }
        get onstart() {
            return null === this._onstart ? this._onstart : this._onstart[0];
        }
        set onstart(a) {
            if (null !== this._onstart && this.removeEventListener('start', this._onstart[1]), 'function' == typeof a) {
                const d = a.bind(this);
                this.addEventListener('start', d), this._onstart = [
                    a,
                    d
                ];
            } else
                this._onstart = null;
        }
        get onstop() {
            return null === this._onstop ? this._onstop : this._onstop[0];
        }
        set onstop(a) {
            if (null !== this._onstop && this.removeEventListener('stop', this._onstop[1]), 'function' == typeof a) {
                const d = a.bind(this);
                this.addEventListener('stop', d), this._onstop = [
                    a,
                    d
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
        start(a) {
            return this._internalMediaRecorder.start(a);
        }
        stop() {
            return this._internalMediaRecorder.stop();
        }
        static isTypeSupported(a) {
            return null !== e && void 0 !== e.isTypeSupported && e.isTypeSupported(a) || n.some(b => b.test(a));
        }
        constructor(d, d = {}) {
            const {
                mimeType: e
            } = f;
            if (null !== e && (void 0 === e || void 0 !== e.isTypeSupported && e.isTypeSupported(e))) {
                const g = a(e, d, f);
                super(g), this._internalMediaRecorder = g;
            } else {
                if (void 0 === e || !n.some(a => a.test(e)))
                    throw null !== e && a(e, d, f), g();
                super(), null !== e && void 0 !== e.isTypeSupported && e.isTypeSupported('audio/webm;codecs=pcm') ? this._internalMediaRecorder = c(this, e, d, e) : this._internalMediaRecorder = o(this, d, e);
            }
            this._ondataavailable = null, this._onerror = null, this._onpause = null, this._onresume = null, this._onstart = null, this._onstop = null;
        }
    };
}), b.register('CfNYx', function(b, o) {
    a(b.exports, 'createNativeBlobEventConstructor', function() {
        return c;
    });
    const c = a => null !== a && void 0 !== a.BlobEvent ? a.BlobEvent : null;
}), b.register('bxadq', function(b, o) {
    a(b.exports, 'createNativeMediaRecorderFactory', function() {
        return c;
    });
    const c = (a, b) => (o, c, n) => {
        const d = [],
            e = new WeakMap(),
            f = new WeakMap(),
            g = new o(c, n),
            h = new WeakMap();
        let i = !0;
        var j, k, l, m;
        return g.addEventListener = (j = g.addEventListener, (b, o, c) => {
            let n = o;
            return 'function' == typeof o && ('dataavailable' === b ? (n = a => {
                setTimeout(() => {
                    if (i && 'inactive' === g.state)
                        d.push(a.data);
                    else {
                        if (d.length > 0) {
                            const p = a.data;
                            Object.defineProperty(a, 'data', {
                                value: new Blob([
                                    ...d,
                                    p
                                ], {
                                    type: p.type
                                })
                            }), d.length = 0;
                        }
                        o.call(g, a);
                    }
                });
            }, e.set(o, n)) : 'error' === b ? (n = b => {
                if (void 0 === b.error)
                    o.call(g, new ErrorEvent('error', {
                        error: a()
                    }));
                else if ('UnknownError' === b.error.name) {
                    const p = b.error.message;
                    o.call(g, new ErrorEvent('error', {
                        error: a(p)
                    }));
                } else
                    b instanceof ErrorEvent ? o.call(g, b) : o.call(g, new ErrorEvent('error', {
                        error: b.error
                    }));
            }, f.set(o, n)) : 'stop' === b && (n = a => {
                i = !1, setTimeout(() => o.call(g, a));
            }, h.set(o, n))), j.call(g, b, n, c);
        }), g.dispatchEvent = (k = g.dispatchEvent, a => {
            let n;
            setTimeout(() => {
                n = i, i = !1;
            });
            const o = k.call(g, a);
            return setTimeout(() => i = n), o;
        }), g.removeEventListener = (l = g.removeEventListener, (a, b, v) => {
            let n = o;
            if ('function' == typeof o)
                if ('dataavailable' === a) {
                    const p = e.get(o);
                    void 0 !== p && (n = p);
                } else if ('error' === p) {
                const q = f.get(o);
                void 0 !== q && (n = q);
            } else if ('stop' === q) {
                const r = h.get(o);
                void 0 !== r && (n = r);
            }
            return l.call(g, a, n, v);
        }), g.start = (m = g.start, a => {
            if (void 0 !== d.mimeType && d.mimeType.startsWith('audio/') && c.getVideoTracks().length > 0)
                throw b();
            return i = void 0 !== a, void 0 === a ? m.call(g) : m.call(g, a);
        }), g;
    };
}), b.register('AMDhp', function(b, v) {
    a(b.exports, 'createNativeMediaRecorderConstructor', function() {
        return c;
    });
    const c = a => null === a || void 0 === a.MediaRecorder ? null : a.MediaRecorder;
}), b.register('SITq6', function(b, v) {
    a(b.exports, 'createNotSupportedError', function() {
        return c;
    });
    const c = () => {
        try {
            return new DOMException('', 'NotSupportedError');
        } catch (a) {
            return a.code = 9, a.name = 'NotSupportedError', a;
        }
    };
}), b.register('33hyX', function(b, v) {
    a(b.exports, 'createReadElementContent', function() {
        return c;
    });
    const c = a => (b, v, c, d = 2) => {
        const e = a(b, v);
        if (null === e)
            return e;
        const {
            length: f,
            value: g
        } = h;
        if ('master' === c)
            return {
                content: null,
                length: f
            };
        if (v + f + g > b.byteLength)
            return null;
        if ('binary' === c) {
            const i = (g / Float32Array.BYTES_PER_ELEMENT - 1) / d,
                j = Array.from({
                    length: d
                }, () => new Float32Array(i));
            for (let k = 0; k < i; k += 1) {
                const l = k * d + 1;
                for (let m = 0; m < d; m += 1)
                    j[m][k] = b.getFloat32(v + f + (l + m) * Float32Array.BYTES_PER_ELEMENT, !0);
            }
            return {
                content: j,
                length: f + g
            };
        }
        return {
            content: null,
            length: f + g
        };
    };
}), b.register('8rvOo', function(b, v) {
    a(b.exports, 'createReadElementType', function() {
        return c;
    });
    const c = a => (b, v) => {
        const d = a(b, v);
        if (null === d)
            return d;
        const {
            length: e,
            value: f
        } = g;
        return 35 === f ? {
            length: e,
            type: 'binary'
        } : 46 === f || 97 === f || 88713574 === f || 106212971 === f || 139690087 === f || 172351395 === f || 256095861 === f ? {
            length: e,
            type: 'master'
        } : {
            length: e,
            type: 'unknown'
        };
    };
}), b.register('7oqcj', function(b, v) {
    a(b.exports, 'createReadVariableSizeInteger', function() {
        return c;
    });
    const c = a => (b, v) => {
        const d = a(b, v);
        if (null === d)
            return d;
        const e = v + Math.floor((d - 1) / 8);
        if (e + d > b.byteLength)
            return null;
        let f = b.getUint8(e) & (1 << 8 - d % 8) - 1;
        for (let g = 1; g < d; g += 1)
            f = (f << 8) + b.getUint8(e + g);
        return {
            length: d,
            value: f
        };
    };
}), b.register('qMKfV', function(v, A) {
    a(v.exports, 'createWebAudioMediaRecorderFactory', function() {
        return g;
    });
    var c = b('m4qJn'),
        d = b('yVzyh'),
        e = b('KinD8');
    const f = 'Missing AudioWorklet support. Maybe this is not running in a secure context.',
        g = (a, b, v, A) => (g, B, C) => {
            var h;
            const i = null === (h = B.getAudioTracks()[0]) || void 0 === h ? void 0 : h.getSettings().sampleRate,
                j = new(0, e.MinimalAudioContext)({
                    latencyHint: 'playback',
                    sampleRate: i
                }),
                k = Math.max(1024, Math.ceil(j.baseLatency * j.sampleRate)),
                l = new(0, e.AudioBuffer)({
                    length: k,
                    sampleRate: j.sampleRate
                }),
                m = [],
                n = (0, d.addRecorderAudioWorkletModule)(a => {
                    if (void 0 === e.addAudioWorkletModule)
                        throw new Error(f);
                    return (0, e.addAudioWorkletModule)(j, a);
                });
            let o = null,
                p = null,
                q = null,
                r = null,
                s = !0;
            const t = b => {
                    g.dispatchEvent(a('dataavailable', {
                        data: new Blob(b, {
                            type: C
                        })
                    }));
                },
                u = async (a, b) => {
                    const v = await (0, c.encode)(a, b);
                    null === q ? m.push(...v) : (t(v), r = u(a, b));
                }, v = () => (s = !0, j.resume()), w = () => {
                    null !== q && (null !== o && (B.removeEventListener('addtrack', o), B.removeEventListener('removetrack', o)), null !== p && clearTimeout(p), q.then(async ({
                        constantSourceNode: x,
                        encoderId: y,
                        mediaStreamAudioSourceNode: z,
                        recorderAudioWorkletNode: A
                    }) => {
                        null !== r && (r.catch(() => {}), r = null), await A.stop(), z.disconnect(A), x.stop();
                        const B = await (0, c.encode)(y, null);
                        null === q && await x(), t([
                            ...m,
                            ...B
                        ]), m.length = 0, g.dispatchEvent(new Event('stop'));
                    }), q = null);
                }, x = () => (s = !1, j.suspend());
            return x(), {
                get mimeType() {
                    return C;
                },
                get state() {
                    return null === q ? 'inactive' : s ? 'recording' : 'paused';
                },
                pause() {
                    if (null === q)
                        throw C();
                    s && (x(), g.dispatchEvent(new Event('pause')));
                },
                resume() {
                    if (null === q)
                        throw C();
                    s || (v(), g.dispatchEvent(new Event('resume')));
                },
                start(a) {
                    var y;
                    if (null !== q)
                        throw C();
                    if (B.getVideoTracks().length > 0)
                        throw D();
                    g.dispatchEvent(new Event('start'));
                    const z = B.getAudioTracks(),
                        A = 0 === z.length ? 2 : null !== (y = z[0].getSettings().channelCount) && void 0 !== y ? y : 2;
                    q = Promise.all([
                        v(),
                        n.then(() => (async (a, b, C, D, g) => {
                            const {
                                encoderId: B,
                                port: C
                            } = await (0, c.instantiate)(g, b.sampleRate);
                            if (void 0 === e.AudioWorkletNode)
                                throw new Error(f);
                            return {
                                audioBufferSourceNode: new(0, e.AudioBufferSourceNode)(b, {
                                    buffer: a
                                }),
                                encoderId: B,
                                mediaStreamAudioSourceNode: new(0, e.MediaStreamAudioSourceNode)(b, {
                                    mediaStream: D
                                }),
                                port: C,
                                recorderAudioWorkletNode: (0, d.createRecorderAudioWorkletNode)(e.AudioWorkletNode, b, {
                                    channelCount: C
                                })
                            };
                        })(l, j, A, h, i))
                    ]).then(async ([, {
                        audioBufferSourceNode: B,
                        encoderId: C,
                        mediaStreamAudioSourceNode: D,
                        port: E,
                        recorderAudioWorkletNode: F
                    }]) => {
                        D.connect(F), await new Promise(a => {
                            B.onended = a, B.connect(F), B.start(j.currentTime + k / j.sampleRate);
                        }), B.disconnect(F);
                        const G = new(0, e.ConstantSourceNode)(j, {
                            offset: 0
                        });
                        return G.onended = () => G.disconnect(), G.connect(j.destination), G.start(), await F.record(E), void 0 !== a && (r = u(C, a)), {
                            constantSourceNode: G,
                            encoderId: C,
                            mediaStreamAudioSourceNode: D,
                            recorderAudioWorkletNode: F
                        };
                    });
                    const G = h.getTracks();
                    o = () => {
                        w(), g.dispatchEvent(new ErrorEvent('error', {
                            error: B()
                        }));
                    }, h.addEventListener('addtrack', o), h.addEventListener('removetrack', o), p = setInterval(() => {
                        const H = h.getTracks();
                        H.length === G.length && !H.some((H, B) => H !== G[B]) || null === o || o();
                    }, 1000);
                },
                stop: w
            };
        };
}), b.register('yVzyh', function(g, c) {
    a(g.exports, 'addRecorderAudioWorkletModule', function() {
        return k;
    }), a(g.exports, 'createRecorderAudioWorkletNode', function() {
        return l;
    });
    var c = b('4nzHq'),
        d = b('cd1Pi');
    b('RKK2Q');
    b('ktcvZ');
    var e = b('+DAX5'),
        f = b('REstk'),
        g = b('YZX6P'),
        h = b('5ax/q'),
        i = b('kmaS+'),
        j = b('O5Diw');
    b('2aNy/'), b('MbMDB');
    const k = (0, e.createAddRecorderAudioWorkletModule)(Blob, URL, j.worklet),
        l = (0, h.createRecorderAudioWorkletNodeFactory)(f.createListener, (0, g.createPostMessageFactory)(c.generateUniqueNumber), d.on, i.validateState);
}), b.register('cd1Pi', function(g, c) {
    a(g.exports, 'on', function() {
        return G;
    });
    var c = b('d8sEf'),
        d = b('iUD+N'),
        e = b('rkJ8O'),
        f = b('zBeVn'),
        g = b('gDEOW'),
        h = b('ov8dD'),
        i = b('Jq8q1'),
        j = b('mwEA8'),
        k = b('4DAMQ'),
        l = b('li+Ue'),
        m = b('8pw0f'),
        n = b('gvccE'),
        o = b('jp0Mz'),
        p = b('Eq8yW'),
        q = b('KjOvi'),
        r = b('2i8+E'),
        s = b('TrBiy'),
        t = b('7Bavb'),
        u = b('NCZJK'),
        v = b('5fu7k'),
        w = b('IzQnA'),
        x = b('61hWj'),
        y = b('6zPeJ1'),
        z = b('l5sfK'),
        A = b('3R16W');
    b('3EMWK'), b('biHJe');
    const B = (0, y.createWindow)(),
        C = (0, z.createWrapSubscribeFunction)(c.patch, d.toObserver),
        D = ((0, e.createAnimationFrame)(A.emitNotSupportedError, B, C), (0, o.createMutations)(A.emitNotSupportedError, B, C)),
        E = (0, i.createMapSubscribableThing)(C),
        F = (0, s.createPrependSubscribableThing)(C),
        G = ((0, f.createAttribute)(E, D, F), (0, g.createGeolocation)(A.emitNotSupportedError, B, C), (0, h.createIntersections)(A.emitNotSupportedError, B, C), (0, j.createMediaDevices)(A.emitNotSupportedError, B, C), (0, k.createMediaQueryMatch)(A.emitNotSupportedError, B, C), (0, l.createMetrics)(A.emitNotSupportedError, B, C), (0, m.createMidiInputs)(C), (0, n.createMidiOutputs)(C), (0, p.createOn)(C));
    (0, q.createOnline)(A.emitNotSupportedError, B, C), (0, r.createPermissionState)(A.emitNotSupportedError, B, C), (0, t.createReports)(A.emitNotSupportedError, B, C), (0, u.createResizes)(A.emitNotSupportedError, B, C), (0, v.createUnhandledRejection)(A.emitNotSupportedError, B, C), (0, w.createVideoFrame)(A.emitNotSupportedError, C), (0, x.createWakeLock)(A.emitNotSupportedError, B, C);
}), b.register('d8sEf', function(g, c) {
    a(g.exports, 'patch', function() {
        return d;
    });
    var c = b('muLVM');

    function d(a) {
        return Symbol.observable || ('function' == typeof a && a.prototype && a.prototype[Symbol.observable] ? (a.prototype[c.observable] = a.prototype[Symbol.observable], delete a.prototype[Symbol.observable]) : (a[c.observable] = a[Symbol.observable], delete a[Symbol.observable])), a;
    }
}), b.register('muLVM', function(b, g) {
    a(b.exports, 'observable', function() {
        return c;
    });
    const c = Symbol.observable || '@@observable';
}), b.register('iUD+N', function(b, g) {
    a(b.exports, 'toObserver', function() {
        return e;
    });
    const c = () => {},
        d = a => {
            throw a;
        };

    function e(a) {
        var f, g, h;
        return a ? a.next && a.error && a.complete ? a : {
            complete: (null !== (f = a.complete) && void 0 !== f ? f : c).bind(a),
            error: (null !== (g = a.error) && void 0 !== g ? g : d).bind(a),
            next: (null !== (h = a.next) && void 0 !== h ? h : c).bind(a)
        } : {
            complete: c,
            error: d,
            next: c
        };
    }
}), b.register('rkJ8O', function(b, d) {
    a(b.exports, 'createAnimationFrame', function() {
        return c;
    });
    const c = (a, b, d) => () => d(d => {
        if (null === b || void 0 === b.cancelAnimationFrame || void 0 === b.requestAnimationFrame)
            return a(d);
        let d = b.requestAnimationFrame(function a(d) {
            d = b.requestAnimationFrame(a), d.next(d);
        });
        return () => b.cancelAnimationFrame(d);
    });
}), b.register('zBeVn', function(b, d) {
    a(b.exports, 'createAttribute', function() {
        return c;
    });
    const c = (a, b, d) => (c, d) => {
        const d = () => c.getAttribute(d);
        return d(a(b(c, {
            attributeFilter: [d],
            childList: !1,
            subtree: !1
        }), () => d()), d());
    };
}), b.register('gDEOW', function(b, d) {
    a(b.exports, 'createGeolocation', function() {
        return c;
    });
    const c = (a, b, d) => c => d(d => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.geolocation || void 0 === b.navigator.geolocation.clearWatch || void 0 === b.navigator.geolocation.watchPosition)
            return a(d);
        const d = b.navigator.geolocation.watchPosition(a => d.next(a), a => d.error(a), c);
        return () => b.navigator.geolocation.clearWatch(d);
    });
}), b.register('ov8dD', function(b, d) {
    a(b.exports, 'createIntersections', function() {
        return c;
    });
    const c = (a, b, d) => (c, e) => d(d => {
        if (null === b || void 0 === b.IntersectionObserver)
            return a(d);
        const d = new b.IntersectionObserver(a => d.next(a), e);
        try {
            d.observe(c);
        } catch (a) {
            d.error(a);
        }
        return () => d.disconnect();
    });
}), b.register('Jq8q1', function(b, d) {
    a(b.exports, 'createMapSubscribableThing', function() {
        return c;
    });
    const c = a => (b, d) => a(a => b({
        ...a,
        next: b => a.next(d(b))
    }));
}), b.register('mwEA8', function(b, d) {
    a(b.exports, 'createMediaDevices', function() {
        return c;
    });
    const c = (a, b, d) => () => d(d => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.mediaDevices || void 0 === b.navigator.mediaDevices.enumerateDevices)
            return a(d);
        let d = !0;
        const e = () => {
                b.navigator.mediaDevices.enumerateDevices().then(a => {
                    d && d.next(a);
                }, a => {
                    d && (f(), d.error(a));
                });
            },
            f = () => {
                d = !1, b.navigator.mediaDevices.removeEventListener('devicechange', e);
            };
        return e(), b.navigator.mediaDevices.addEventListener('devicechange', e), f;
    });
}), b.register('4DAMQ', function(b, d) {
    a(b.exports, 'createMediaQueryMatch', function() {
        return c;
    });
    const c = (a, b, d) => c => d(d => {
        if (null === b || void 0 === b.matchMedia)
            return a(d);
        const d = b.matchMedia(c);
        return d.next(d.matches), d.onchange = () => d.next(d.matches), () => {
            d.onchange = null;
        };
    });
}), b.register('li+Ue', function(b, d) {
    a(b.exports, 'createMetrics', function() {
        return c;
    });
    const c = (a, b, d) => c => d(d => {
        if (null === b || void 0 === b.PerformanceObserver)
            return a(d);
        const d = new b.PerformanceObserver(a => d.next(a.getEntries()));
        try {
            d.observe(c);
        } catch (a) {
            d.error(a);
        }
        return () => d.disconnect();
    });
}), b.register('8pw0f', function(b, d) {
    a(b.exports, 'createMidiInputs', function() {
        return c;
    });
    const c = a => b => a(a => {
        let d = Array.from(b.inputs.values());
        const e = () => {
            const f = b.inputs;
            (d.length !== f.size || d.some(({
                id: g
            }) => !f.has(g))) && (d = Array.from(f.values()), g.next(d));
        };
        return a.next(d), b.addEventListener('statechange', e), () => b.removeEventListener('statechange', e);
    });
}), b.register('gvccE', function(b, d) {
    a(b.exports, 'createMidiOutputs', function() {
        return c;
    });
    const c = a => b => a(a => {
        let d = Array.from(b.outputs.values());
        const e = () => {
            const f = b.outputs;
            (d.length !== f.size || d.some(({
                id: g
            }) => !f.has(g))) && (d = Array.from(f.values()), g.next(d));
        };
        return a.next(d), b.addEventListener('statechange', e), () => b.removeEventListener('statechange', e);
    });
}), b.register('jp0Mz', function(b, d) {
    a(b.exports, 'createMutations', function() {
        return c;
    });
    const c = (a, b, d) => (c, d) => d(d => {
        if (null === b || void 0 === b.MutationObserver)
            return a(d);
        const d = new b.MutationObserver(a => d.next(a));
        try {
            d.observe(c, d);
        } catch (a) {
            d.error(a);
        }
        return () => d.disconnect();
    });
}), b.register('Eq8yW', function(b, d) {
    a(b.exports, 'createOn', function() {
        return c;
    });
    const c = a => (b, d, c) => a(a => {
        const d = b => a.next(b);
        return b.addEventListener(d, d, c), () => b.removeEventListener(d, d, c);
    });
}), b.register('KjOvi', function(b, d) {
    a(b.exports, 'createOnline', function() {
        return c;
    });
    const c = (a, b, d) => () => d(d => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.onLine)
            return a(d);
        const d = () => d.next(!1),
            e = () => d.next(!0);
        return b.addEventListener('offline', d), b.addEventListener('online', e), d.next(b.navigator.onLine), () => {
            b.removeEventListener('offline', d), b.removeEventListener('online', e);
        };
    });
}), b.register('2i8+E', function(b, d) {
    a(b.exports, 'createPermissionState', function() {
        return c;
    });
    const c = (a, b, d) => c => d(d => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.permissions || void 0 === b.navigator.permissions.query)
            return a(d);
        let d = !0,
            e = () => {
                d = !1;
            };
        return b.navigator.permissions.query(c).then(a => {
            d && d.next(a.state), d && (a.onchange = () => d.next(a.state), e = () => {
                a.onchange = null;
            });
        }, a => {
            d && d.error(a);
        }), () => e();
    });
}), b.register('TrBiy', function(b, d) {
    a(b.exports, 'createPrependSubscribableThing', function() {
        return c;
    });
    const c = a => (b, d) => a(a => (a.next(d), b(a)));
}), b.register('7Bavb', function(b, d) {
    a(b.exports, 'createReports', function() {
        return c;
    });
    const c = (a, b, d) => c => d(d => {
        if (null === b || void 0 === b.ReportingObserver)
            return a(d);
        const d = new b.ReportingObserver(a => d.next(a), c);
        return d.observe(), () => d.disconnect();
    });
}), b.register('NCZJK', function(b, d) {
    a(b.exports, 'createResizes', function() {
        return c;
    });
    const c = (a, b, d) => (c, d) => d(d => {
        if (null === b || void 0 === b.ResizeObserver)
            return a(d);
        const d = new b.ResizeObserver(a => d.next(a));
        try {
            d.observe(c, d);
        } catch (a) {
            d.error(a);
        }
        return () => d.disconnect();
    });
}), b.register('5fu7k', function(b, d) {
    a(b.exports, 'createUnhandledRejection', function() {
        return c;
    });
    const c = (a, b, d) => c => d(d => {
        if (null === b || void 0 === b.clearInterval || void 0 === b.setInterval)
            return a(d);
        const d = new Map();
        let e = null;
        const f = ({
                promise: g
            }) => d.delete(g),
            h = () => {
                const i = Date.now() - c;
                d.forEach(({
                    reason: j,
                    timestamp: k
                }, e) => {
                    k > i || (d.delete(e), d.next(j));
                }), null !== e && 0 === d.size && (j.clearInterval(e), e = null);
            },
            i = g => {
                g.preventDefault(), d.set(g.promise, {
                    reason: g.reason,
                    timestamp: Date.now()
                }), null === e && (e = b.setInterval(h, c / 2));
            };
        return b.addEventListener('rejectionhandled', f), b.addEventListener('unhandledrejection', i), () => {
            null !== e && b.clearInterval(e), b.removeEventListener('rejectionhandled', f), b.removeEventListener('unhandledrejection', i);
        };
    });
}), b.register('IzQnA', function(b, d) {
    a(b.exports, 'createVideoFrame', function() {
        return c;
    });
    const c = (a, b) => d => b(b => {
        if (void 0 === d.cancelVideoFrameCallback || void 0 === d.requestVideoFrameCallback)
            return a(b);
        let d = d.requestVideoFrameCallback(function a(d, e) {
            d = d.requestVideoFrameCallback(a), b.next({
                ...e,
                now: d
            });
        });
        return () => d.cancelVideoFrameCallback(d);
    });
}), b.register('61hWj', function(b, d) {
    a(b.exports, 'createWakeLock', function() {
        return c;
    });
    const c = (a, b, d) => c => d(d => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.wakeLock)
            return a(d);
        const d = a => a.release().catch(() => {}),
            e = a => {
                a.onrelease = null;
            };
        let f = !0;
        const g = () => {
            f = !1;
        };
        let h = i;
        const j = () => b.navigator.wakeLock.request(c).then(a => {
            f && d.next(!0), f ? (a.onrelease = () => {
                d.next(!1), h = i, e(a), j();
            }, h = () => {
                e(a), d(a);
            }) : d(a);
        }, a => {
            f && d.error(a);
        });
        return j(), () => h();
    });
}), b.register('6zPeJ1', function(b, d) {
    a(b.exports, 'createWindow', function() {
        return c;
    });
    const c = () => 'undefined' == typeof window ? null : window;
}), b.register('l5sfK', function(b, d) {
    a(b.exports, 'createWrapSubscribeFunction', function() {
        return c;
    });
    const c = (a, b) => {
        const d = () => {};
        return c => {
            const e = (...a) => {
                const f = c((a => 'function' == typeof a[0])(a) ? b({
                    next: a[0]
                }) : b(...a));
                return void 0 !== f ? f : d;
            };
            return e[Symbol.observable] = () => ({
                subscribe: (...a) => ({
                    unsubscribe: e(...a)
                })
            }), a(e);
        };
    };
}), b.register('3R16W', function(b, e) {
    a(b.exports, 'emitNotSupportedError', function() {
        return c;
    });
    const c = a => (a.error(new Error('The required browser API seems to be not supported.')), () => {});
}), b.register('3EMWK', function(a, e) {
    b('sCcFp636'), b('sCcFp635'), b('sCcFp634'), b('sCcFp633'), b('sCcFp632'), b('sCcFp631'), b('sCcFp630'), b('sCcFp629'), b('sCcFp628'), b('sCcFp627'), b('sCcFp626'), b('sCcFp625'), b('sCcFp624'), b('sCcFp623'), b('sCcFp622'), b('sCcFp621'), b('sCcFp620'), b('sCcFp619'), b('sCcFp618'), b('sCcFp617'), b('sCcFp616');
}), b.register('sCcFp636', function(a, b) {}), b.register('sCcFp635', function(a, b) {}), b.register('sCcFp634', function(a, b) {}), b.register('sCcFp633', function(a, b) {}), b.register('sCcFp632', function(a, b) {}), b.register('sCcFp631', function(a, b) {}), b.register('sCcFp630', function(a, b) {}), b.register('sCcFp629', function(a, b) {}), b.register('sCcFp628', function(a, b) {}), b.register('sCcFp627', function(a, b) {}), b.register('sCcFp626', function(a, b) {}), b.register('sCcFp625', function(a, b) {}), b.register('sCcFp624', function(a, b) {}), b.register('sCcFp623', function(a, b) {}), b.register('sCcFp622', function(a, b) {}), b.register('sCcFp621', function(a, b) {}), b.register('sCcFp620', function(a, b) {}), b.register('sCcFp619', function(a, b) {}), b.register('sCcFp618', function(a, b) {}), b.register('sCcFp617', function(a, b) {}), b.register('sCcFp616', function(a, b) {}), b.register('biHJe', function(a, e) {
    b('sCcFp615'), b('sCcFp614'), b('sCcFp613'), b('sCcFp612'), b('sCcFp611'), b('sCcFp610'), b('sCcFp609'), b('sCcFp608'), b('sCcFp607'), b('sCcFp606'), b('sCcFp605'), b('sCcFp604'), b('sCcFp603'), b('sCcFp602'), b('sCcFp601'), b('sCcFp600'), b('sCcFp599'), b('sCcFp598'), b('sCcFp597'), b('sCcFp596'), b('sCcFp595'), b('sCcFp594'), b('sCcFp593'), b('sCcFp592'), b('sCcFp591'), b('sCcFp590'), b('sCcFp589'), b('sCcFp588'), b('sCcFp587'), b('sCcFp586'), b('sCcFp585'), b('sCcFp584'), b('sCcFp583'), b('sCcFp582'), b('sCcFp581'), b('sCcFp580'), b('sCcFp579'), b('sCcFp578'), b('sCcFp577'), b('sCcFp576'), b('sCcFp575'), b('sCcFp574'), b('sCcFp573'), b('sCcFp572'), b('sCcFp571'), b('sCcFp570'), b('sCcFp569'), b('sCcFp568'), b('sCcFp567'), b('sCcFp566'), b('sCcFp565'), b('sCcFp564'), b('sCcFp563'), b('sCcFp562'), b('sCcFp561');
}), b.register('sCcFp615', function(a, b) {}), b.register('sCcFp614', function(a, b) {}), b.register('sCcFp613', function(a, b) {}), b.register('sCcFp612', function(a, b) {}), b.register('sCcFp611', function(a, b) {}), b.register('sCcFp610', function(a, b) {}), b.register('sCcFp609', function(a, b) {}), b.register('sCcFp608', function(a, b) {}), b.register('sCcFp607', function(a, b) {}), b.register('sCcFp606', function(a, b) {}), b.register('sCcFp605', function(a, b) {}), b.register('sCcFp604', function(a, b) {}), b.register('sCcFp603', function(a, b) {}), b.register('sCcFp602', function(a, b) {}), b.register('sCcFp601', function(a, b) {}), b.register('sCcFp600', function(a, b) {}), b.register('sCcFp599', function(a, b) {}), b.register('sCcFp598', function(a, b) {}), b.register('sCcFp597', function(a, b) {}), b.register('sCcFp596', function(a, b) {}), b.register('sCcFp595', function(a, b) {}), b.register('sCcFp594', function(a, b) {}), b.register('sCcFp593', function(a, b) {}), b.register('sCcFp592', function(a, b) {}), b.register('sCcFp591', function(a, b) {}), b.register('sCcFp590', function(a, b) {}), b.register('sCcFp589', function(a, b) {}), b.register('sCcFp588', function(a, b) {}), b.register('sCcFp587', function(a, b) {}), b.register('sCcFp586', function(a, b) {}), b.register('sCcFp585', function(a, b) {}), b.register('sCcFp584', function(a, b) {}), b.register('sCcFp583', function(a, b) {}), b.register('sCcFp582', function(a, b) {}), b.register('sCcFp581', function(a, b) {}), b.register('sCcFp580', function(a, b) {}), b.register('sCcFp579', function(a, b) {}), b.register('sCcFp578', function(a, b) {}), b.register('sCcFp577', function(a, b) {}), b.register('sCcFp576', function(a, b) {}), b.register('sCcFp575', function(a, b) {}), b.register('sCcFp574', function(a, b) {}), b.register('sCcFp573', function(a, b) {}), b.register('sCcFp572', function(a, b) {}), b.register('sCcFp571', function(a, b) {}), b.register('sCcFp570', function(a, b) {}), b.register('sCcFp569', function(a, b) {}), b.register('sCcFp568', function(a, b) {}), b.register('sCcFp567', function(a, b) {}), b.register('sCcFp566', function(a, b) {}), b.register('sCcFp565', function(a, b) {}), b.register('sCcFp564', function(a, b) {}), b.register('sCcFp563', function(a, b) {}), b.register('sCcFp562', function(a, b) {}), b.register('sCcFp561', function(a, b) {}), b.register('RKK2Q', function(a, e) {
    b('RGaPr'), b('o3Ts0'), b('ktcvZ');
    b('DuXR8'), b('5ykG2');
}), b.register('RGaPr', function(e, f) {
    a(e.exports, 'createMessageHandler', function() {
        return d;
    });
    var c = b('hBFwc');
    const d = (a, b) => async ({
        data: {
            id: e,
            method: f,
            params: g
        }
    }) => {
        const h = b[f];
        try {
            if (void 0 === h)
                throw (0, c.renderMethodNotFoundError)({
                    method: f
                });
            const i = void 0 === g ? h() : h(g);
            if (void 0 === i)
                throw (0, c.renderMissingResponseError)({
                    method: f
                });
            const j = i instanceof Promise ? await i : i;
            if (null === e) {
                if (void 0 !== j.result)
                    throw (0, c.renderUnexpectedResultError)({
                        method: f
                    });
            } else {
                if (void 0 === j.result)
                    throw (0, c.renderUnexpectedResultError)({
                        method: f
                    });
                const {
                    result: k,
                    transferables: l = []
                } = m;
                a.postMessage({
                    id: e,
                    result: k
                }, l);
            }
        } catch (b) {
            const {
                message: i,
                status: j = -32603
            } = k;
            a.postMessage({
                error: {
                    code: j,
                    message: i
                },
                id: e
            });
        }
    };
}), b.register('hBFwc', function(h, i) {
    a(h.exports, 'renderMethodNotFoundError', function() {
        return g;
    }), a(h.exports, 'renderMissingResponseError', function() {
        return h;
    }), a(h.exports, 'renderUnexpectedResultError', function() {
        return i;
    }), a(h.exports, 'renderUnknownPortIdError', function() {
        return j;
    });
    var c = b('VQx6u');
    const d = -32603,
        e = -32602,
        f = -32601,
        g = (0, c.compile)({
            message: 'The requested method called "${method}" is not supported.',
            status: f
        }),
        h = (0, c.compile)({
            message: 'The handler of the method called "${method}" returned no required result.',
            status: d
        }),
        i = (0, c.compile)({
            message: 'The handler of the method called "${method}" returned an unexpected result.',
            status: d
        }),
        j = (0, c.compile)({
            message: 'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
            status: e
        });
}), b.register('VQx6u', function(a, h) {
    a.exports,
        function(a, b, h, i) {
            function c(a) {
                return a && 'object' == typeof a && 'default' in a ? a : {
                    default: a
                };
            }
            var d = c(b),
                e = c(h),
                f = c(i),
                g = function(a, b) {
                    return void 0 === b ? a : b.reduce(function(a, b) {
                        if ('capitalize' === b) {
                            var h = a.charAt(0).toUpperCase(),
                                i = a.slice(1);
                            return ''.concat(h).concat(i);
                        }
                        return 'dashify' === b ? e.default(a) : 'prependIndefiniteArticle' === b ? ''.concat(f.default(a), ' ').concat(a) : a;
                    }, a);
                },
                h = function(a) {
                    var i = a.name + a.modifiers.map(function(a) {
                        return '\\.'.concat(a, '\\(\\)');
                    }).join('');
                    return new RegExp('\\$\\{'.concat(i, '}'), 'g');
                },
                i = function(a, b) {
                    for (var j = /\${([^.}]+)((\.[^(]+\(\))*)}/g, k = [], l = j.exec(a); null !== l;) {
                        var m = {
                            modifiers: [],
                            name: l[1]
                        };
                        if (void 0 !== l[3])
                            for (var n = /\.[^(]+\(\)/g, o = n.exec(l[2]); null !== o;)
                                m.modifiers.push(o[0].slice(1, -2)), o = n.exec(l[2]);
                        k.push(m), l = j.exec(a);
                    }
                    var m = k.reduce(function(a, j) {
                        return a.map(function(a) {
                            return 'string' == typeof a ? a.split(h(j)).reduce(function(a, k, l) {
                                return 0 === l ? [k] : j.name in b ? [].concat(d.default(a), [
                                    g(b[j.name], j.modifiers),
                                    k
                                ]) : [].concat(d.default(a), [
                                    function(a) {
                                        return g(a[j.name], j.modifiers);
                                    },
                                    k
                                ]);
                            }, []) : [a];
                        }).reduce(function(a, b) {
                            return [].concat(d.default(a), d.default(b));
                        }, []);
                    }, [a]);
                    return function(a) {
                        return m.reduce(function(b, j) {
                            return [].concat(d.default(b), 'string' == typeof j ? [j] : [j(a)]);
                        }, []).join('');
                    };
                },
                j = function(a) {
                    var k = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        l = void 0 === a.code ? void 0 : i(a.code, k),
                        m = void 0 === a.message ? void 0 : i(a.message, k);

                    function n() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            p = arguments.length > 1 ? arguments[1] : void 0,
                            q = void 0 === p && (o instanceof Error || void 0 !== o.code && 'Exception' === o.code.slice(-9)) ? {
                                cause: o,
                                missingParameters: {}
                            } : {
                                cause: p,
                                missingParameters: o
                            },
                            r = q.cause,
                            s = q.missingParameters,
                            t = void 0 === m ? new Error() : new Error(m(s));
                        return null !== r && (t.cause = r), void 0 !== l && (t.code = l(s)), void 0 !== a.status && (t.status = a.status), t;
                    }
                    return n;
                };
            a.compile = j, Object.defineProperty(a, '__esModule', {
                value: !0
            });
        }(a.exports, b('td86y'), b('zkhIp'), b('F4Vc/'));
}), b.register('td86y', function(a, c) {
    var c = b('pLbIS'),
        d = b('dbiXn'),
        e = b('8HxaM'),
        f = b('maX1N');
    a.exports = function(a) {
        return c(a) || d(a) || e(a) || f();
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('pLbIS', function(a, c) {
    var c = b('vZCw+1');
    a.exports = function(a) {
        if (Array.isArray(a))
            return c(a);
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('vZCw+1', function(a, b) {
    a.exports = function(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); c < b; c++)
            d[c] = a[c];
        return d;
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('dbiXn', function(a, b) {
    a.exports = function(a) {
        if ('undefined' != typeof Symbol && null != a[Symbol.iterator] || null != a['@@iterator'])
            return Array.from(a);
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('8HxaM', function(a, d) {
    var c = b('vZCw+1');
    a.exports = function(a, b) {
        if (a) {
            if ('string' == typeof a)
                return c(a, b);
            var d = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === d && a.constructor && (d = a.constructor.name), 'Map' === d || 'Set' === d ? Array.from(a) : 'Arguments' === d || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? c(a, b) : void 0;
        }
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('maX1N', function(a, b) {
    a.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('zkhIp', function(a, b) {
    a.exports = (a, b) => {
        if ('string' != typeof a)
            throw new TypeError('expected a string');
        return a.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, a => /[À-ž]/.test(a) ? a : '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, a => b && b.condense ? '-' : a).toLowerCase();
    };
}), b.register('F4Vc/', function(a, b) {
    var c = function(a) {
        var d, e, f = /\w+/.exec(a);
        if (!f)
            return 'an';
        var g = (e = f[0]).toLowerCase(),
            h = [
                'honest',
                'hour',
                'hono'
            ];
        for (d in h)
            if (0 == g.indexOf(h[d]))
                return 'an';
        if (1 == g.length)
            return 'aedhilmnorsx'.indexOf(g) >= 0 ? 'an' : 'a';
        if (e.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))
            return 'an';
        var i = [
            /^e[uw]/,
            /^onc?e\b/,
            /^uni([^nmd]|mo)/,
            /^u[bcfhjkqrst][aeiou]/
        ];
        for (d = 0; d < i.length; d++)
            if (g.match(i[d]))
                return 'a';
        return e.match(/^U[NK][AIEO]/) ? 'a' : e == e.toUpperCase() ? 'aedhilmnorsx'.indexOf(g[0]) >= 0 ? 'an' : 'a' : 'aeiou'.indexOf(g[0]) >= 0 || g.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/) ? 'an' : 'a';
    };
    void 0 !== a.exports ? a.exports = c : window.indefiniteArticle = c;
}), b.register('o3Ts0', function(h, i) {
    a(h.exports, 'extendWorkerImplementation', function() {
        return g;
    });
    var c = b('4nzHq'),
        d = b('hBFwc'),
        e = b('ktcvZ');
    const f = new Map(),
        g = (a, b, h) => ({
            ...b,
            connect: ({
                port: h
            }) => {
                h.start();
                const i = a(h, b),
                    j = (0, c.generateUniqueNumber)(f);
                return f.set(j, () => {
                    i(), h.close(), f.delete(j);
                }), {
                    result: j
                };
            },
            disconnect: ({
                portId: i
            }) => {
                const j = f.get(i);
                if (void 0 === j)
                    throw (0, d.renderUnknownPortIdError)({
                        portId: i.toString()
                    });
                return j(), {
                    result: null
                };
            },
            isSupported: async () => {
                if (await (0, e.isSupportingTransferables)()) {
                    const k = h();
                    return {
                        result: k instanceof Promise ? await k : k
                    };
                }
                return {
                    result: !1
                };
            }
        });
}), b.register('ktcvZ', function(b, e) {
    a(b.exports, 'isSupportingTransferables', function() {
        return c;
    });
    const c = () => new Promise(a => {
        const d = new ArrayBuffer(0),
            {
                port1: e,
                port2: f
            } = new MessageChannel();
        e.onmessage = ({
            data: g
        }) => a(null !== g), f.postMessage(g, [g]);
    });
}), b.register('DuXR8', function(a, e) {
    b('sCcFp560'), b('sCcFp559'), b('sCcFp558'), b('sCcFp557'), b('sCcFp556'), b('sCcFp555'), b('sCcFp554'), b('sCcFp553'), b('sCcFp552'), b('sCcFp551'), b('sCcFp550'), b('sCcFp549'), b('sCcFp548'), b('sCcFp547');
}), b.register('sCcFp560', function(a, b) {}), b.register('sCcFp559', function(a, b) {}), b.register('sCcFp558', function(a, b) {}), b.register('sCcFp557', function(a, b) {}), b.register('sCcFp556', function(a, b) {}), b.register('sCcFp555', function(a, b) {}), b.register('sCcFp554', function(a, b) {}), b.register('sCcFp553', function(a, b) {}), b.register('sCcFp552', function(a, b) {}), b.register('sCcFp551', function(a, b) {}), b.register('sCcFp550', function(a, b) {}), b.register('sCcFp549', function(a, b) {}), b.register('sCcFp548', function(a, b) {}), b.register('sCcFp547', function(a, b) {}), b.register('5ykG2', function(a, e) {
    b('sCcFp546'), b('sCcFp545'), b('sCcFp544'), b('sCcFp543'), b('sCcFp542'), b('sCcFp541'), b('sCcFp540'), b('sCcFp539'), b('sCcFp538'), b('sCcFp537'), b('sCcFp536');
}), b.register('sCcFp546', function(a, b) {}), b.register('sCcFp545', function(a, b) {}), b.register('sCcFp544', function(a, b) {}), b.register('sCcFp543', function(a, b) {}), b.register('sCcFp542', function(a, b) {}), b.register('sCcFp541', function(a, b) {}), b.register('sCcFp540', function(a, b) {}), b.register('sCcFp539', function(a, b) {}), b.register('sCcFp538', function(a, b) {}), b.register('sCcFp537', function(a, b) {}), b.register('sCcFp536', function(a, b) {}), b.register('+DAX5', function(b, e) {
    a(b.exports, 'createAddRecorderAudioWorkletModule', function() {
        return c;
    });
    const c = (a, b, e) => async c => {
        const d = new a([e], {
                type: 'application/javascript; charset=utf-8'
            }),
            e = b.createObjectURL(d);
        try {
            await c(e);
        } finally {
            b.revokeObjectURL(e);
        }
    };
}), b.register('REstk', function(b, e) {
    a(b.exports, 'createListener', function() {
        return c;
    });
    const c = a => ({
        data: d
    }) => {
        const {
            id: e
        } = f;
        if (null !== e) {
            const g = a.get(e);
            if (void 0 !== g) {
                const {
                    reject: h,
                    resolve: i
                } = j;
                a.delete(e), void 0 === f.error ? i(f.result) : h(new Error(f.error.message));
            }
        }
    };
}), b.register('YZX6P', function(b, y) {
    a(b.exports, 'createPostMessageFactory', function() {
        return c;
    });
    const c = a => (b, y) => (c, d = []) => new Promise((d, d) => {
        const e = a(b);
        b.set(e, {
            reject: d,
            resolve: d
        }), y.postMessage({
            id: e,
            ...c
        }, d);
    });
}), b.register('5ax/q', function(b, y) {
    a(b.exports, 'createRecorderAudioWorkletNodeFactory', function() {
        return c;
    });
    const c = (a, b, y, c) => (c, d, d = {}) => {
        const e = new c(d, 'recorder-audio-worklet-processor', {
                ...d,
                channelCountMode: 'explicit',
                numberOfInputs: 1,
                numberOfOutputs: 0
            }),
            f = new Map(),
            g = b(f, e.port),
            h = y(e.port, 'message')(a(f));
        e.port.start();
        let i = 'inactive';
        return Object.defineProperties(e, {
            pause: {
                get: () => async () => (c(['recording'], i), i = 'paused', g({
                    method: 'pause'
                }))
            },
            port: {
                get() {
                    throw new Error('The port of a RecorderAudioWorkletNode can\'t be accessed.');
                }
            },
            record: {
                get: () => async a => (c(['inactive'], i), i = 'recording', g({
                    method: 'record',
                    params: {
                        encoderPort: a
                    }
                }, [a]))
            },
            resume: {
                get: () => async () => (c(['paused'], i), i = 'recording', g({
                    method: 'resume'
                }))
            },
            stop: {
                get: () => async () => {
                    c([
                        'paused',
                        'recording'
                    ], i), i = 'stopped';
                    try {
                        await g({
                            method: 'stop'
                        });
                    } finally {
                        h();
                    }
                }
            }
        }), e;
    };
}), b.register('kmaS+', function(b, y) {
    a(b.exports, 'validateState', function() {
        return c;
    });
    const c = (a, b) => {
        if (!a.includes(b))
            throw new Error(`Expected the state to be ${ a.map(a => `"${ a }"`).join(' or ') } but it was "${ b }".`);
    };
}), b.register('O5Diw', function(b, y) {
    a(b.exports, 'worklet', function() {
        return c;
    });
    const c = '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();';
}), b.register('2aNy/', function(a, y) {
    b('sCcFp535'), b('sCcFp534');
}), b.register('sCcFp535', function(a, b) {}), b.register('sCcFp534', function(a, b) {}), b.register('MbMDB', function(a, y) {
    b('sCcFp533'), b('sCcFp532'), b('sCcFp531'), b('sCcFp530');
}), b.register('sCcFp533', function(a, b) {}), b.register('sCcFp532', function(a, b) {}), b.register('sCcFp531', function(a, b) {}), b.register('sCcFp530', function(a, b) {}), b.register('KinD8', function(y, l) {
    a(y.exports, 'AudioBuffer', function() {
        return $d;
    }), a(y.exports, 'AudioBufferSourceNode', function() {
        return ge;
    }), a(y.exports, 'ConstantSourceNode', function() {
        return ve;
    }), a(y.exports, 'addAudioWorkletModule', function() {
        return jf;
    }), a(y.exports, 'MediaStreamAudioSourceNode', function() {
        return qf;
    }), a(y.exports, 'AudioWorkletNode', function() {
        return Ff;
    }), a(y.exports, 'MinimalAudioContext', function() {
        return Gf;
    });
    var c = b('KRv6y'),
        d = b('gDg4C'),
        e = b('cMkoT'),
        f = b('DSfPS'),
        g = b('jE42E'),
        h = b('d/i0l'),
        i = b('QQfzV'),
        j = b('8JTFE'),
        k = b('hya93'),
        l = b('YKaTG'),
        m = b('lvrDo'),
        n = b('Rb88y'),
        o = b('8nC3d'),
        p = b('v1pff'),
        q = b('yYd4o'),
        r = b('nplTQ'),
        s = b('mus+u'),
        t = b('zjr0x'),
        u = b('Z0AeO'),
        v = b('i0D5j'),
        w = b('pGnuH'),
        x = b('xaSLF'),
        y = b('UmXFG'),
        z = b('GmuQZ'),
        A = b('Via4K'),
        B = b('rUyEv'),
        C = b('9rLaL'),
        D = b('cNSpP'),
        E = b('qhsnV'),
        F = b('/GtNx'),
        G = b('AjJqr'),
        H = b('KVQM7'),
        I = b('Blkm+'),
        J = b('k6WHE'),
        K = b('/qdYr'),
        L = b('FUyBX'),
        M = b('iKkw6'),
        N = b('Cvocb'),
        O = b('znSI8'),
        P = b('iTVzf'),
        Q = b('6VoVu'),
        R = b('zRQRG'),
        S = b('Ldxxk'),
        T = b('vpxhg'),
        U = b('V4Iws'),
        V = b('LCSra'),
        W = b('wJVa8'),
        X = b('LoJUH'),
        Y = b('au8QZ'),
        Z = b('bDQsh'),
        $ = b('eW9cF'),
        _ = b('FaDO6'),
        ab = b('WXQq4'),
        bb = b('JXLFs'),
        cb = b('qxDVb'),
        db = b('YVaEa'),
        eb = b('llF2t'),
        fb = b('jNvSL'),
        gb = b('+M8Yz'),
        hb = b('A4rT9'),
        ib = b('wBsqC'),
        jb = b('drn0D'),
        kb = b('5xFZD'),
        lb = b('X1vpW'),
        mb = b('ACLEb'),
        nb = b('rl1IO'),
        ob = b('4kuMl'),
        pb = b('zGnbi'),
        qb = b('/iAko'),
        rb = b('putA0'),
        sb = b('VkB5W'),
        tb = b('BQZzx'),
        ub = b('Nb/UW'),
        vb = b('J/QcH'),
        wb = b('pMC+4'),
        xb = b('TlgaO'),
        yb = b('f7syP'),
        zb = b('L4MVA'),
        Ab = b('vY7T5'),
        Bb = b('zNKwY'),
        Cb = b('zXbgA'),
        Db = b('wnCnY'),
        Eb = b('x+zpQ'),
        Fb = (b('AHUTz'), b('TNeCp')),
        Gb = b('/5MWs'),
        Hb = b('ef83U'),
        Ib = b('FuZpT'),
        Jb = b('5/rIM'),
        Kb = b('K3Iy+'),
        Lb = b('Ue+e2'),
        Mb = b('CC25T'),
        Nb = b('mAWSV'),
        Ob = b('ymiP6'),
        Pb = b('Tooi1'),
        Qb = b('YZ2dH'),
        Rb = b('sTKI6'),
        Sb = b('jEQEd'),
        Tb = b('8/Cu0'),
        Ub = b('GF2qM'),
        Vb = b('0rC9n'),
        Wb = b('7tGFy'),
        Xb = b('tpdVu'),
        Yb = b('syfoi'),
        Zb = b('yhyMC'),
        $b = b('+ROSp'),
        _b = b('DQTbn'),
        ac = b('nOGD7'),
        bc = b('LwX7e'),
        cc = b('kacNt'),
        dc = b('Ma1d6'),
        ec = b('2f9Cd'),
        fc = b('0IXD8'),
        gc = b('g4qin'),
        hc = b('IDeXa'),
        ic = b('usaGd'),
        jc = b('q5Go7'),
        kc = b('zSm8k'),
        lc = b('AnJ4y'),
        mc = b('BK83q'),
        nc = b('gPgQY'),
        oc = b('Uj4Xv'),
        pc = b('HFvuQ'),
        qc = b('2lJ8D'),
        rc = b('0x2jw'),
        sc = b('u+ySU'),
        tc = b('o1UCw'),
        uc = b('2vQsZ'),
        vc = b('X6bSm'),
        wc = b('EOVnq'),
        xc = b('pNbNq'),
        yc = b('hnkVR'),
        zc = b('zbibj'),
        Ac = b('1yh9R'),
        Bc = b('kzR6K'),
        Cc = b('OKtcX'),
        Dc = b('ZUNuZ'),
        Ec = b('xIh7J'),
        Fc = b('dDwxy'),
        Gc = b('QJ76a'),
        Hc = b('gtEcJ'),
        Ic = b('CTSM/'),
        Jc = (b('VcrqA'), b('nXtQ4'), b('ymEkf'), b('dfUGN'), b('6rqOq'), b('tJLWg'), b('YTJiX')),
        Kc = (b('hHPn1'), b('YYyKH'), b('8qd9Z'), b('Kvyj0'), b('jJcY7'), b('EpVkB'), b('u8tjC')),
        Lc = (b('BuMnf'), b('eQ5eh')),
        Mc = b('0gKds'),
        Nc = b('eVguZ'),
        Oc = b('6zPeJ0'),
        Pc = b('k2yXg'),
        Qc = b('qTaXw'),
        Rc = b('635v3'),
        Sc = b('YNMZp'),
        Tc = b('GBhK6'),
        Uc = b('W9I5G'),
        Vc = b('GHHWR'),
        Wc = b('QC5yV'),
        Xc = b('OhNIY'),
        Yc = b('x2usf'),
        Zc = b('0Nb5F'),
        $c = b('ztwLu'),
        _c = b('O+IaO'),
        ad = b('wVe0j'),
        bd = b('UUKxx'),
        cd = b('8fUiO'),
        dd = b('FxuKE'),
        ed = b('GjHYu'),
        fd = b('Epr/x'),
        gd = b('Ot0bl'),
        hd = b('8NJyd'),
        id = b('OkUF4'),
        jd = b('rcVrM'),
        kd = b('f3YRl'),
        ld = b('Zhdu/'),
        md = b('9AAhp'),
        nd = b('PNRpP'),
        od = b('vC1MB'),
        pd = b('yfKmd'),
        qd = b('pydyb'),
        rd = b('69Ah7'),
        sd = b('DGMmt'),
        td = b('y/XEx'),
        ud = (b('K20XD'), b('3CTHk')),
        vd = (b('lfXp6'), b('b6VZj')),
        wd = b('GB9rx'),
        xd = b('Yui4E');
    b('HPGUm'), b('D/cYZ');
    const yd = (0, e.createAddActiveInputConnectionToAudioNode)(bd.insertElementInSet),
        zd = (0, j.createAddPassiveInputConnectionToAudioNode)(bd.insertElementInSet),
        Ad = (0, W.createDeleteActiveInputConnectionToAudioNode)(hd.pickElementFromSet),
        Bd = new WeakMap(),
        Cd = (0, jb.createGetAudioNodeTailTime)(Bd),
        Dd = (0, D.createCacheTestResult)(new Map(), new WeakMap()),
        Ed = (0, Oc.createWindow)(),
        Fd = (0, Nb.createNativeAnalyserNodeFactory)(Dd, sb.createIndexSizeError),
        Gd = (0, ib.createGetAudioNodeRenderer)(Wc.getAudioNodeConnections),
        Hd = (0, Ac.createRenderInputsOfAudioNode)(Wc.getAudioNodeConnections, Gd, ed.isPartOfACycle),
        Id = (0, n.createAnalyserNodeRendererFactory)(Fd, $c.getNativeAudioNode, Hd),
        Jd = (0, mb.createGetNativeContext)(Tc.CONTEXT_STORE),
        Kd = (0, ic.createNativeOfflineAudioContextConstructor)(Ed),
        Ld = (0, Db.createIsNativeOfflineAudioContext)(Kd),
        Md = new WeakMap(),
        Nd = (0, cb.createEventTargetConstructor)(xd.wrapEventListener),
        Od = (0, Qb.createNativeAudioContextConstructor)(Ed),
        Pd = (0, zb.createIsNativeAudioContext)(Od),
        Qd = (0, Ab.createIsNativeAudioNode)(Ed),
        Rd = (0, Bb.createIsNativeAudioParam)(Ed),
        Sd = (0, Sb.createNativeAudioWorkletNodeConstructor)(Ed),
        Td = (0, v.createAudioNodeConstructor)((0, f.createAddAudioNodeConnections)(Tc.AUDIO_NODE_CONNECTIONS_STORE), (0, i.createAddConnectionToAudioNode)(yd, zd, Uc.connectNativeAudioNodeToNativeAudioNode, Ad, Vc.disconnectNativeAudioNodeFromNativeAudioNode, Wc.getAudioNodeConnections, Cd, Yc.getEventListenersOfAudioNode, $c.getNativeAudioNode, bd.insertElementInSet, cd.isActiveAudioNode, ed.isPartOfACycle, fd.isPassiveAudioNode), Dd, (0, rb.createIncrementCycleCounterFactory)(Tc.CYCLE_COUNTERS, Vc.disconnectNativeAudioNodeFromNativeAudioNode, Wc.getAudioNodeConnections, $c.getNativeAudioNode, _c.getNativeAudioParam, cd.isActiveAudioNode), sb.createIndexSizeError, tb.createInvalidAccessError, sc.createNotSupportedError, (0, T.createDecrementCycleCounter)(Uc.connectNativeAudioNodeToNativeAudioNode, Tc.CYCLE_COUNTERS, Wc.getAudioNodeConnections, $c.getNativeAudioNode, _c.getNativeAudioParam, Jd, cd.isActiveAudioNode, Ld), (0, Y.createDetectCycles)(Md, Wc.getAudioNodeConnections, ad.getValueForKey), Nd, Jd, Pd, Qd, Rd, Ld, Sd),
        Ud = (0, m.createAnalyserNodeConstructor)(Td, Id, sb.createIndexSizeError, Fd, Jd, Ld),
        Vd = new WeakSet(),
        Wd = (0, Ob.createNativeAudioBufferConstructor)(Ed),
        Xd = (0, N.createConvertNumberToUnsignedLong)(new Uint32Array(1)),
        Yd = (0, Pc.createWrapAudioBufferCopyChannelMethods)(Xd, sb.createIndexSizeError),
        Zd = (0, Qc.createWrapAudioBufferCopyChannelMethodsOutOfBounds)(Xd),
        $d = (0, o.createAudioBufferConstructor)(Vd, Dd, sc.createNotSupportedError, Wd, Kd, (0, Ic.createTestAudioBufferConstructorSupport)(Wd), Yd, Zd),
        _d = (0, k.createAddSilentConnection)(bc.createNativeGainNode),
        ae = (0, Bc.createRenderInputsOfAudioParam)(Gd, Xc.getAudioParamConnections, ed.isPartOfACycle),
        be = (0, I.createConnectAudioParam)(ae),
        ce = (0, Pb.createNativeAudioBufferSourceNodeFactory)(_d, Dd, nd.testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, od.testAudioBufferSourceNodeStartMethodOffsetClampingSupport, pd.testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, qd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, rd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, sd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, vd.wrapAudioBufferSourceNodeStartMethodOffsetClamping, (0, Rc.createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer)(gd.overwriteAccessors), wd.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        de = (0, zc.createRenderAutomation)((0, kb.createGetAudioParamRenderer)(Xc.getAudioParamConnections), ae),
        ee = (0, q.createAudioBufferSourceNodeRendererFactory)(be, ce, $c.getNativeAudioNode, de, Hd),
        fe = (0, w.createAudioParamFactory)((0, g.createAddAudioParamConnections)(Tc.AUDIO_PARAM_CONNECTIONS_STORE), Md, Tc.AUDIO_PARAM_STORE, x.createAudioParamRenderer, c.createCancelAndHoldAutomationEvent, c.createCancelScheduledValuesAutomationEvent, c.createExponentialRampToValueAutomationEvent, c.createLinearRampToValueAutomationEvent, c.createSetTargetAutomationEvent, c.createSetValueAutomationEvent, c.createSetValueCurveAutomationEvent, Od, ld.setValueAtTimeUntilPossible),
        ge = (0, p.createAudioBufferSourceNodeConstructor)(Td, ee, fe, ub.createInvalidStateError, ce, Jd, Ld, xd.wrapEventListener),
        he = (0, s.createAudioDestinationNodeConstructor)(Td, t.createAudioDestinationNodeRenderer, sb.createIndexSizeError, ub.createInvalidStateError, (0, Rb.createNativeAudioDestinationNodeFactory)(bc.createNativeGainNode, gd.overwriteAccessors), Jd, Ld, Hd),
        ie = (0, C.createBiquadFilterNodeRendererFactory)(be, Vb.createNativeBiquadFilterNode, $c.getNativeAudioNode, de, Hd),
        je = (0, Ec.createSetAudioNodeTailTime)(Bd),
        ke = (0, B.createBiquadFilterNodeConstructor)(Td, fe, ie, tb.createInvalidAccessError, Vb.createNativeBiquadFilterNode, Jd, Ld, je),
        le = (0, Mb.createMonitorConnections)(bd.insertElementInSet, Qd),
        me = (0, Sc.createWrapChannelMergerNode)(ub.createInvalidStateError, le),
        ne = (0, Wb.createNativeChannelMergerNodeFactory)(Od, me),
        oe = (0, F.createChannelMergerNodeRendererFactory)(ne, $c.getNativeAudioNode, Hd),
        pe = (0, E.createChannelMergerNodeConstructor)(Td, oe, ne, Jd, Ld),
        qe = (0, H.createChannelSplitterNodeRendererFactory)(Xb.createNativeChannelSplitterNode, $c.getNativeAudioNode, Hd),
        re = (0, G.createChannelSplitterNodeConstructor)(Td, qe, Xb.createNativeChannelSplitterNode, Jd, Ld, jd.sanitizeChannelSplitterOptions),
        se = (0, Zb.createNativeConstantSourceNodeFakerFactory)(_d, ce, bc.createNativeGainNode, le),
        te = (0, Yb.createNativeConstantSourceNodeFactory)(_d, Dd, se, qd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, sd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport),
        ue = (0, M.createConstantSourceNodeRendererFactory)(be, te, $c.getNativeAudioNode, de, Hd),
        ve = (0, L.createConstantSourceNodeConstructor)(Td, fe, ue, te, Jd, Ld, xd.wrapEventListener),
        we = (0, $b.createNativeConvolverNodeFactory)(sc.createNotSupportedError, gd.overwriteAccessors),
        xe = (0, P.createConvolverNodeRendererFactory)(we, $c.getNativeAudioNode, Hd),
        ye = (0, O.createConvolverNodeConstructor)(Td, xe, we, Jd, Ld, je),
        ze = (0, V.createDelayNodeRendererFactory)(be, _b.createNativeDelayNode, $c.getNativeAudioNode, de, Hd),
        Ae = (0, U.createDelayNodeConstructor)(Td, fe, ze, _b.createNativeDelayNode, Jd, Ld, je),
        Be = (0, ac.createNativeDynamicsCompressorNodeFactory)(sc.createNotSupportedError),
        Ce = (0, _.createDynamicsCompressorNodeRendererFactory)(be, Be, $c.getNativeAudioNode, de, Hd),
        De = (0, $.createDynamicsCompressorNodeConstructor)(Td, fe, Ce, Be, sc.createNotSupportedError, Jd, Ld, je),
        Ee = (0, gb.createGainNodeRendererFactory)(be, bc.createNativeGainNode, $c.getNativeAudioNode, de, Hd),
        Fe = (0, fb.createGainNodeConstructor)(Td, fe, Ee, bc.createNativeGainNode, Jd, Ld),
        Ge = (0, dc.createNativeIIRFilterNodeFakerFactory)(tb.createInvalidAccessError, ub.createInvalidStateError, nc.createNativeScriptProcessorNode, sc.createNotSupportedError),
        He = (0, Cc.createRenderNativeOfflineAudioContext)(Dd, bc.createNativeGainNode, nc.createNativeScriptProcessorNode, (0, Kc.createTestOfflineAudioContextCurrentTimeSupport)(bc.createNativeGainNode, Kd)),
        Ie = (0, qb.createIIRFilterNodeRendererFactory)(ce, $c.getNativeAudioNode, Kd, Hd, He),
        Je = (0, cc.createNativeIIRFilterNodeFactory)(Ge),
        Ke = (0, pb.createIIRFilterNodeConstructor)(Td, Je, Ie, Jd, Ld, je),
        Le = (0, u.createAudioListenerFactory)(fe, ne, te, nc.createNativeScriptProcessorNode, sc.createNotSupportedError, Zc.getFirstSample, Ld, gd.overwriteAccessors),
        Me = new WeakMap(),
        Ne = (0, Kb.createMinimalBaseAudioContextConstructor)(he, Le, Nd, Ld, Me, xd.wrapEventListener),
        Oe = (0, jc.createNativeOscillatorNodeFactory)(_d, Dd, qd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, rd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, sd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wd.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        Pe = (0, vc.createOscillatorNodeRendererFactory)(be, Oe, $c.getNativeAudioNode, de, Hd),
        Qe = (0, uc.createOscillatorNodeConstructor)(Td, fe, Oe, Pe, Jd, Ld, xd.wrapEventListener),
        Re = (0, K.createConnectedNativeAudioBufferSourceNodeFactory)(ce),
        Se = (0, rc.createNativeWaveShaperNodeFakerFactory)(Re, ub.createInvalidStateError, bc.createNativeGainNode, dd.isDCCurve, le),
        Te = (0, qc.createNativeWaveShaperNodeFactory)(Re, ub.createInvalidStateError, Se, dd.isDCCurve, le, Od, gd.overwriteAccessors),
        Ue = (0, lc.createNativePannerNodeFakerFactory)(Uc.connectNativeAudioNodeToNativeAudioNode, ub.createInvalidStateError, ne, bc.createNativeGainNode, nc.createNativeScriptProcessorNode, Te, sc.createNotSupportedError, Vc.disconnectNativeAudioNodeFromNativeAudioNode, Zc.getFirstSample, le),
        Ve = (0, kc.createNativePannerNodeFactory)(Ue),
        We = (0, xc.createPannerNodeRendererFactory)(be, ne, te, bc.createNativeGainNode, Ve, $c.getNativeAudioNode, Kd, de, Hd, He),
        Xe = (0, wc.createPannerNodeConstructor)(Td, fe, Ve, We, Jd, Ld, je),
        Ye = (0, mc.createNativePeriodicWaveFactory)(sb.createIndexSizeError),
        Ze = (0, yc.createPeriodicWaveConstructor)(Ye, Jd, new WeakSet(), kd.sanitizePeriodicWaveOptions),
        $e = (0, pc.createNativeStereoPannerNodeFakerFactory)(ne, Xb.createNativeChannelSplitterNode, bc.createNativeGainNode, Te, sc.createNotSupportedError, le),
        _e = (0, oc.createNativeStereoPannerNodeFactory)($e, sc.createNotSupportedError),
        af = (0, Hc.createStereoPannerNodeRendererFactory)(be, _e, $c.getNativeAudioNode, de, Hd),
        bf = (0, Gc.createStereoPannerNodeConstructor)(Td, fe, _e, af, Jd, Ld),
        cf = (0, Nc.createWaveShaperNodeRendererFactory)(Te, $c.getNativeAudioNode, Hd),
        df = (0, Mc.createWaveShaperNodeConstructor)(Td, ub.createInvalidStateError, Te, cf, Jd, Ld, je),
        ef = (0, Eb.createIsSecureContext)(Ed),
        ff = (0, db.createExposeCurrentFrameAndCurrentTime)(Ed),
        gf = new WeakMap(),
        hf = (0, nb.createGetOrCreateBackupOfflineAudioContext)(gf, Kd),
        jf = ef ? (0, h.createAddAudioWorkletModule)(Dd, sc.createNotSupportedError, (0, bb.createEvaluateSource)(Ed), ff, (0, eb.createFetchSource)(d.createAbortError), Jd, hf, Ld, Sd, new WeakMap(), new WeakMap(), (0, Jc.createTestAudioWorkletProcessorPostMessageSupport)(Sd, Kd), Ed) : void 0,
        kf = (0, Cb.createIsNativeContext)(Pd, Ld),
        lf = (0, S.createDecodeAudioData)(Vd, Dd, R.createDataCloneError, ab.createEncodingError, new WeakSet(), Jd, kf, md.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, ud.testPromiseSupport, Yd, Zd),
        mf = (0, A.createBaseAudioContextConstructor)(jf, Ud, $d, ge, ke, pe, re, ve, ye, lf, Ae, De, Fe, Ke, Ne, Qe, Xe, Ze, bf, df),
        nf = (0, Fb.createMediaElementAudioSourceNodeConstructor)(Td, ec.createNativeMediaElementAudioSourceNode, Jd, Ld),
        pf = (0, Gb.createMediaStreamAudioDestinationNodeConstructor)(Td, fc.createNativeMediaStreamAudioDestinationNode, Jd, Ld),
        qf = (0, Hb.createMediaStreamAudioSourceNodeConstructor)(Td, gc.createNativeMediaStreamAudioSourceNode, Jd, Ld),
        rf = (0, hc.createNativeMediaStreamTrackAudioSourceNodeFactory)(ub.createInvalidStateError, Ld),
        sf = (0, Ib.createMediaStreamTrackAudioSourceNodeConstructor)(Td, rf, Jd),
        tf = ((0, r.createAudioContextConstructor)(mf, ub.createInvalidStateError, sc.createNotSupportedError, Lc.createUnknownError, nf, pf, qf, sf, Od), (0, ob.createGetUnrenderedAudioWorkletNodes)(Me)),
        uf = (0, l.createAddUnrenderedAudioWorkletNode)(tf),
        vf = (0, J.createConnectMultipleOutputs)(sb.createIndexSizeError),
        wf = (0, X.createDeleteUnrenderedAudioWorkletNode)(tf),
        xf = (0, Z.createDisconnectMultipleOutputs)(sb.createIndexSizeError),
        yf = new WeakMap(),
        zf = (0, hb.createGetActiveAudioWorkletNodeInputs)(yf, ad.getValueForKey),
        Af = (0, Ub.createNativeAudioWorkletNodeFakerFactory)(vf, sb.createIndexSizeError, ub.createInvalidStateError, ne, Xb.createNativeChannelSplitterNode, te, bc.createNativeGainNode, nc.createNativeScriptProcessorNode, sc.createNotSupportedError, xf, ff, zf, le),
        Bf = (0, Tb.createNativeAudioWorkletNodeFactory)(ub.createInvalidStateError, Af, bc.createNativeGainNode, sc.createNotSupportedError, le),
        Cf = (0, z.createAudioWorkletNodeRendererFactory)(be, vf, ce, ne, Xb.createNativeChannelSplitterNode, te, bc.createNativeGainNode, wf, xf, ff, $c.getNativeAudioNode, Sd, Kd, de, Hd, He),
        Df = (0, lb.createGetBackupOfflineAudioContext)(gf),
        Ef = (0, Dc.createSetActiveAudioWorkletNodeInputs)(yf),
        Ff = ef ? (0, y.createAudioWorkletNodeConstructor)(uf, Td, fe, Cf, Bf, Wc.getAudioNodeConnections, Df, Jd, Ld, Sd, id.sanitizeAudioWorkletNodeOptions, Ef, td.testAudioWorkletNodeOptionsClonability, xd.wrapEventListener) : void 0,
        Gf = (0, Jb.createMinimalAudioContextConstructor)(ub.createInvalidStateError, sc.createNotSupportedError, Lc.createUnknownError, Ne, Od),
        Hf = (0, Q.createCreateNativeOfflineAudioContext)(sc.createNotSupportedError, Kd),
        If = (0, Fc.createStartRendering)(Vd, Dd, Gd, tf, He, md.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, Yd, Zd);
    (0, Lb.createMinimalOfflineAudioContextConstructor)(Dd, ub.createInvalidStateError, Hf, Ne, If), (0, tc.createOfflineAudioContextConstructor)(mf, Dd, ub.createInvalidStateError, Hf, If), (0, vb.createIsAnyAudioContext)(Tc.CONTEXT_STORE, Pd), (0, wb.createIsAnyAudioNode)(Tc.AUDIO_NODE_STORE, Qd), (0, xb.createIsAnyAudioParam)(Tc.AUDIO_PARAM_STORE, Rd), (0, yb.createIsAnyOfflineAudioContext)(Tc.CONTEXT_STORE, Ld);
}), b.register('KRv6y', function(a, y) {
    a.exports,
        function(a, b, y, l) {
            function c(a) {
                return a && 'object' == typeof a && 'default' in a ? a : {
                    default: a
                };
            }
            var d = c(b),
                e = c(y),
                f = c(l),
                g = function(a, b, y) {
                    return {
                        endTime: b,
                        insertTime: y,
                        type: 'exponentialRampToValue',
                        value: a
                    };
                },
                h = function(a, b, y) {
                    return {
                        endTime: b,
                        insertTime: y,
                        type: 'linearRampToValue',
                        value: a
                    };
                },
                i = function(a, b) {
                    return {
                        startTime: b,
                        type: 'setValue',
                        value: a
                    };
                },
                j = function(a, b, y) {
                    return {
                        duration: y,
                        startTime: b,
                        type: 'setValueCurve',
                        values: a
                    };
                },
                k = function(a, b, y) {
                    var l = y.startTime,
                        m = y.target,
                        n = y.timeConstant;
                    return m + (b - m) * Math.exp((l - a) / n);
                },
                l = function(a) {
                    return 'exponentialRampToValue' === a.type;
                },
                m = function(a) {
                    return 'linearRampToValue' === a.type;
                },
                n = function(a) {
                    return l(a) || m(a);
                },
                o = function(a) {
                    return 'setValue' === a.type;
                },
                p = function(a) {
                    return 'setValueCurve' === a.type;
                },
                q = function a(b, y, z, c) {
                    var r = b[y];
                    return void 0 === r ? c : n(r) || o(r) ? r.value : p(r) ? r.values[r.values.length - 1] : k(z, a(b, y - 1, r.startTime, c), r);
                },
                r = function(a, b, y, z, c) {
                    return void 0 === y ? [
                        z.insertTime,
                        c
                    ] : n(y) ? [
                        y.endTime,
                        y.value
                    ] : o(y) ? [
                        y.startTime,
                        y.value
                    ] : p(y) ? [
                        y.startTime + y.duration,
                        y.values[y.values.length - 1]
                    ] : [
                        y.startTime,
                        q(a, b - 1, y.startTime, c)
                    ];
                },
                s = function(a) {
                    return 'cancelAndHold' === a.type;
                },
                t = function(a) {
                    return 'cancelScheduledValues' === a.type;
                },
                u = function(a) {
                    return s(a) || t(a) ? a.cancelTime : l(a) || m(a) ? a.endTime : a.startTime;
                },
                v = function(a, b, y, z) {
                    var w = z.endTime,
                        x = z.value;
                    return y === x ? x : 0 < y && 0 < x || y < 0 && x < 0 ? y * Math.pow(x / y, (a - b) / (w - b)) : 0;
                },
                w = function(a, b, y, z) {
                    return y + (a - b) / (z.endTime - b) * (z.value - y);
                },
                x = function(a, b) {
                    var y = Math.floor(b),
                        z = Math.ceil(b);
                    return y === z ? a[y] : (1 - (b - y)) * a[y] + (1 - (z - b)) * a[z];
                },
                y = function(a, b) {
                    var z = b.duration,
                        A = b.startTime,
                        B = b.values,
                        C = (a - A) / z * (B.length - 1);
                    return x(B, C);
                },
                z = function(a) {
                    return 'setTarget' === a.type;
                },
                A = function(a) {
                    function B(a) {
                        e.default(this, B), this._automationEvents = [], this._currenTime = 0, this._defaultValue = a;
                    }
                    return f.default(B, [{
                            key: a,
                            value: function() {
                                return this._automationEvents[Symbol.iterator]();
                            }
                        },
                        {
                            key: 'add',
                            value: function(a) {
                                var C = u(a);
                                if (s(a) || t(a)) {
                                    var D = this._automationEvents.findIndex(function(D) {
                                            return t(a) && p(D) ? D.startTime + D.duration >= C : u(D) >= C;
                                        }),
                                        E = this._automationEvents[D];
                                    if (-1 !== D && (this._automationEvents = this._automationEvents.slice(0, D)), s(a)) {
                                        var F = this._automationEvents[this._automationEvents.length - 1];
                                        if (void 0 !== E && n(E)) {
                                            if (z(F))
                                                throw new Error('The internal list is malformed.');
                                            var G = p(F) ? F.startTime + F.duration : u(F),
                                                H = p(F) ? F.values[F.values.length - 1] : F.value,
                                                I = l(E) ? v(C, G, H, E) : w(C, G, H, E),
                                                J = l(E) ? g(I, C, this._currenTime) : h(I, C, this._currenTime);
                                            this._automationEvents.push(J);
                                        }
                                        void 0 !== F && z(F) && this._automationEvents.push(i(this.getValue(C), C)), void 0 !== F && p(F) && F.startTime + F.duration > C && (this._automationEvents[this._automationEvents.length - 1] = j(new Float32Array([
                                            6,
                                            7
                                        ]), F.startTime, C - F.startTime));
                                    }
                                } else {
                                    var F = this._automationEvents.findIndex(function(a) {
                                            return u(a) > C;
                                        }),
                                        G = -1 === F ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[F - 1];
                                    if (void 0 !== G && p(G) && u(G) + G.duration > C)
                                        return !1;
                                    var H = l(a) ? g(a.value, a.endTime, this._currenTime) : m(a) ? h(a.value, C, this._currenTime) : a;
                                    if (-1 === F)
                                        this._automationEvents.push(H);
                                    else {
                                        if (p(a) && C + a.duration > u(this._automationEvents[F]))
                                            return !1;
                                        this._automationEvents.splice(F, 0, H);
                                    }
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'flush',
                            value: function(a) {
                                var C = this._automationEvents.findIndex(function(C) {
                                    return u(C) > a;
                                });
                                if (C > 1) {
                                    var D = this._automationEvents.slice(C - 1),
                                        E = D[0];
                                    z(E) && D.unshift(i(q(this._automationEvents, C - 2, E.startTime, this._defaultValue), E.startTime)), this._automationEvents = D;
                                }
                            }
                        },
                        {
                            key: 'getValue',
                            value: function(a) {
                                if (0 === this._automationEvents.length)
                                    return this._defaultValue;
                                var C = this._automationEvents.findIndex(function(C) {
                                        return u(C) > a;
                                    }),
                                    D = this._automationEvents[C],
                                    E = (-1 === C ? this._automationEvents.length : C) - 1,
                                    F = this._automationEvents[E];
                                if (void 0 !== F && z(F) && (void 0 === D || !n(D) || D.insertTime > a))
                                    return k(a, q(this._automationEvents, E - 1, F.startTime, this._defaultValue), F);
                                if (void 0 !== F && o(F) && (void 0 === D || !n(D)))
                                    return F.value;
                                if (void 0 !== F && p(F) && (void 0 === D || !n(D) || F.startTime + F.duration > a))
                                    return a < F.startTime + F.duration ? y(a, F) : F.values[F.values.length - 1];
                                if (void 0 !== F && n(F) && (void 0 === D || !n(D)))
                                    return F.value;
                                if (void 0 !== D && l(D)) {
                                    var G = r(this._automationEvents, E, F, D, this._defaultValue),
                                        H = d.default(G, 2),
                                        I = H[0],
                                        J = H[1];
                                    return v(a, I, J, D);
                                }
                                if (void 0 !== D && m(D)) {
                                    var G = r(this._automationEvents, E, F, D, this._defaultValue),
                                        H = d.default(G, 2),
                                        I = H[0],
                                        J = H[1];
                                    return w(a, I, J, D);
                                }
                                return this._defaultValue;
                            }
                        }
                    ]), B;
                }(Symbol.iterator),
                B = function(a) {
                    return {
                        cancelTime: a,
                        type: 'cancelAndHold'
                    };
                },
                C = function(a) {
                    return {
                        cancelTime: a,
                        type: 'cancelScheduledValues'
                    };
                },
                D = function(a, b) {
                    return {
                        endTime: b,
                        type: 'exponentialRampToValue',
                        value: a
                    };
                },
                E = function(a, b) {
                    return {
                        endTime: b,
                        type: 'linearRampToValue',
                        value: a
                    };
                },
                F = function(a, b, c) {
                    return {
                        startTime: b,
                        target: a,
                        timeConstant: c,
                        type: 'setTarget'
                    };
                };
            a.AutomationEventList = A, a.createCancelAndHoldAutomationEvent = B, a.createCancelScheduledValuesAutomationEvent = C, a.createExponentialRampToValueAutomationEvent = D, a.createLinearRampToValueAutomationEvent = E, a.createSetTargetAutomationEvent = F, a.createSetValueAutomationEvent = i, a.createSetValueCurveAutomationEvent = j, Object.defineProperty(a, '__esModule', {
                value: !0
            });
        }(a.exports, b('o6d/F'), b('rv10a0'), b('GqIlt'));
}), b.register('o6d/F', function(a, c) {
    var c = b('yof6K0'),
        d = b('9D9hd0'),
        e = b('yW6HT'),
        f = b('/mesN0');
    a.exports = function(a, b) {
        return c(a) || d(a, b) || e(a, b) || f();
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('yof6K0', function(a, b) {
    a.exports = function(a) {
        if (Array.isArray(a))
            return a;
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('9D9hd0', function(a, b) {
    a.exports = function(a, b) {
        var c = null == a ? null : 'undefined' != typeof Symbol && a[Symbol.iterator] || a['@@iterator'];
        if (null != c) {
            var d, e, f, g, h = [],
                i = !0,
                j = !1;
            try {
                if (f = (c = c.call(a)).next, 0 === b) {
                    if (Object(c) !== c)
                        return;
                    i = !1;
                } else
                    for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = !0);
            } catch (a) {
                j = !0, e = a;
            } finally {
                try {
                    if (!i && null != c.return && (g = c.return(), Object(g) !== g))
                        return;
                } finally {
                    if (j)
                        throw e;
                }
            }
            return h;
        }
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('yW6HT', function(a, d) {
    var c = b('vZCw+0');
    a.exports = function(a, b) {
        if (a) {
            if ('string' == typeof a)
                return c(a, b);
            var d = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === d && a.constructor && (d = a.constructor.name), 'Map' === d || 'Set' === d ? Array.from(a) : 'Arguments' === d || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? c(a, b) : void 0;
        }
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('vZCw+0', function(a, b) {
    a.exports = function(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); c < b; c++)
            d[c] = a[c];
        return d;
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('/mesN0', function(a, b) {
    a.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('rv10a0', function(a, b) {
    a.exports = function(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('GqIlt', function(a, e) {
    var c = b('ERAdX');

    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, c(f.key), f);
        }
    }
    a.exports = function(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), Object.defineProperty(a, 'prototype', {
            writable: !1
        }), a;
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('ERAdX', function(a, c) {
    var c = b('wJBRd0').default,
        d = b('DS62H');
    a.exports = function(a) {
        var e = d(a, 'string');
        return 'symbol' === c(e) ? e : String(e);
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('wJBRd0', function(a, b) {
    function c(b) {
        return a.exports = c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.__esModule = !0, a.exports.default = a.exports, c(b);
    }
    a.exports = c, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('DS62H', function(a, d) {
    var c = b('wJBRd0').default;
    a.exports = function(a, b) {
        if ('object' !== c(a) || null === a)
            return a;
        var d = a[Symbol.toPrimitive];
        if (void 0 !== d) {
            var e = d.call(a, b || 'default');
            if ('object' !== c(e))
                return e;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === b ? String : Number)(a);
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('gDg4C', function(b, s) {
    a(b.exports, 'createAbortError', function() {
        return c;
    });
    const c = () => new DOMException('', 'AbortError');
}), b.register('cMkoT', function(b, s) {
    a(b.exports, 'createAddActiveInputConnectionToAudioNode', function() {
        return c;
    });
    const c = a => (b, s, [d, e, f], e) => {
        a(b[e], [
            s,
            d,
            f
        ], a => a[0] === s && a[1] === d, e);
    };
}), b.register('DSfPS', function(b, s) {
    a(b.exports, 'createAddAudioNodeConnections', function() {
        return c;
    });
    const c = a => (b, s, c) => {
        const d = [];
        for (let e = 0; e < c.numberOfInputs; e += 1)
            d.push(new Set());
        e.set(b, {
            activeInputs: d,
            outputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: s
        });
    };
}), b.register('jE42E', function(b, s) {
    a(b.exports, 'createAddAudioParamConnections', function() {
        return c;
    });
    const c = a => (b, s) => {
        a.set(b, {
            activeInputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: s
        });
    };
}), b.register('d/i0l', function(s, q) {
    a(s.exports, 'createAddAudioWorkletModule', function() {
        return h;
    });
    var c = b('GBhK6'),
        d = b('GWoGh'),
        e = b('7V4/A');
    const f = a => {
            if (void 0 !== a && !Array.isArray(a))
                throw new TypeError('The parameterDescriptors property of given value for processorCtor is not an array.');
        },
        g = a => {
            if (!(0, d.isConstructible)(a))
                throw new TypeError('The given value for processorCtor should be a constructor.');
            if (null === a.prototype || 'object' != typeof a.prototype)
                throw new TypeError('The given value for processorCtor should have a prototype.');
        },
        h = (a, b, s, q, d, h, j, k, l, h, i, j, g) => {
            let i = 0;
            return (l, m, j = {
                credentials: 'omit'
            }) => {
                const k = i.get(l);
                if (void 0 !== k && k.has(m))
                    return Promise.resolve();
                const l = h.get(l);
                if (void 0 !== l) {
                    const m = l.get(m);
                    if (void 0 !== m)
                        return m;
                }
                const m = h(l),
                    n = void 0 === m.audioWorklet ? d(m).then(([o, p]) => {
                        const [q, r] = (0, e.splitImportStatements)(o, p);
                        return s(`${ q };((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${ r }\n})})(window,'_AWGS')`);
                    }).then(() => {
                        const s = g._AWGS.pop();
                        if (void 0 === s)
                            throw new SyntaxError();
                        q(m.currentTime, m.sampleRate, () => s(class {}, void 0, (s, s) => {
                            if ('' === s.trim())
                                throw p();
                            const t = r.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(m);
                            if (void 0 !== t) {
                                if (t.has(s))
                                    throw p();
                                g(s), f(s.parameterDescriptors), t.set(s, s);
                            } else
                                g(s), f(s.parameterDescriptors), r.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(m, new Map([
                                    [
                                        s,
                                        s
                                    ]
                                ]));
                        }, m.sampleRate, void 0, void 0));
                    }) : Promise.all([
                        d(m),
                        Promise.resolve(o(j, j))
                    ]).then(([
                        [q, r], s
                    ]) => {
                        const t = i + 1;
                        i = t;
                        const [u, v] = (0, e.splitImportStatements)(q, r), w = new Blob([`${ u };((AudioWorkletProcessor,registerProcessor)=>{${ v }\n})(${ s ? 'AudioWorkletProcessor' : 'class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}' },(n,p)=>registerProcessor(n,class extends p{${ s ? '' : '__c = (a) => a.forEach(e=>this.__b.add(e.buffer));' }process(i,o,p){${ s ? '' : 'i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));' }return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${ t }',class extends AudioWorkletProcessor{process(){return !1}})`], {
                            type: 'application/javascript; charset=utf-8'
                        }), x = URL.createObjectURL(w);
                        return m.audioWorklet.addModule(x, j).then(() => {
                            if (k(m))
                                return m;
                            const y = j(m);
                            return y.audioWorklet.addModule(x, j).then(() => y);
                        }).then(q => {
                            if (null === l)
                                throw new SyntaxError();
                            try {
                                new l(q, `__sac${ t }`);
                            } catch {
                                throw new SyntaxError();
                            }
                        }).finally(() => URL.revokeObjectURL(x));
                    });
                return void 0 === l ? h.set(l, new Map([
                    [
                        m,
                        n
                    ]
                ])) : l.set(m, n), n.then(() => {
                    const t = i.get(l);
                    void 0 === t ? i.set(l, new Set([m])) : t.add(m);
                }).finally(() => {
                    const u = h.get(l);
                    void 0 !== u && u.delete(m);
                }), n;
            };
        };
}), b.register('GBhK6', function(b, e) {
    a(b.exports, 'ACTIVE_AUDIO_NODE_STORE', function() {
        return c;
    }), a(b.exports, 'AUDIO_NODE_CONNECTIONS_STORE', function() {
        return d;
    }), a(b.exports, 'AUDIO_NODE_STORE', function() {
        return e;
    }), a(b.exports, 'AUDIO_PARAM_CONNECTIONS_STORE', function() {
        return f;
    }), a(b.exports, 'AUDIO_PARAM_STORE', function() {
        return g;
    }), a(b.exports, 'CONTEXT_STORE', function() {
        return h;
    }), a(b.exports, 'EVENT_LISTENERS', function() {
        return i;
    }), a(b.exports, 'CYCLE_COUNTERS', function() {
        return j;
    }), a(b.exports, 'NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS', function() {
        return k;
    }), a(b.exports, 'NODE_TO_PROCESSOR_MAPS', function() {
        return l;
    });
    const c = new WeakSet(),
        d = new WeakMap(),
        e = new WeakMap(),
        f = new WeakMap(),
        g = new WeakMap(),
        h = new WeakMap(),
        i = new WeakMap(),
        j = new WeakMap(),
        k = new WeakMap(),
        l = new WeakMap();
}), b.register('GWoGh', function(b, e) {
    a(b.exports, 'isConstructible', function() {
        return d;
    });
    const c = {
            construct: () => c
        },
        d = a => {
            try {
                new new Proxy(a, c)();
            } catch {
                return !1;
            }
            return !0;
        };
}), b.register('7V4/A', function(b, e) {
    a(b.exports, 'splitImportStatements', function() {
        return d;
    });
    const c = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        d = (a, b) => {
            const e = [];
            let f = a.replace(/^[\s]+/, ''),
                g = f.match(c);
            for (; null !== g;) {
                const h = g[1].slice(1, -1),
                    i = g[0].replace(/([\s]+)?;?$/, '').replace(h, new URL(h, b).toString());
                e.push(i), f = f.slice(g[0].length).replace(/^[\s]+/, ''), g = f.match(c);
            }
            return [
                e.join(';'),
                f
            ];
        };
}), b.register('QQfzV', function(q, c) {
    a(q.exports, 'createAddConnectionToAudioNode', function() {
        return f;
    });
    var c = b('vcqvA'),
        d = b('vL9Ob'),
        e = b('QzRPl');
    const f = (a, b, q, c, f, f, g, m, g, n, h, i, j) => {
        const g = new WeakMap();
        return (k, l, m, n, x) => {
            const {
                activeInputs: h,
                passiveInputs: i
            } = f(l), {
                outputs: j
            } = f(k), k = m(k), l = f => {
                const m = g(l),
                    n = g(k);
                if (f) {
                    const o = (0, c.deletePassiveInputConnectionToAudioNode)(i, k, m, n);
                    a(h, k, o, !1), x || i(k) || q(n, m, m, n), j(l) && (0, d.setInternalStateToActive)(l);
                } else {
                    const p = c(h, k, m, n);
                    o(i, n, p, !1), x || i(k) || f(n, m, m, n);
                    const q = g(l);
                    if (0 === q)
                        h(l) && (0, e.setInternalStateToPassiveWhenNecessary)(l, h);
                    else {
                        const r = g.get(l);
                        void 0 !== r && clearTimeout(r), g.set(l, setTimeout(() => {
                            h(l) && (0, e.setInternalStateToPassiveWhenNecessary)(l, h);
                        }, 1000 * q));
                    }
                }
            };
            return !!o(j, [
                l,
                m,
                n
            ], a => a[0] === l && a[1] === m && a[2] === n, !0) && (k.add(l), h(k) ? a(h, k, [
                m,
                n,
                l
            ], !0) : b(i, n, [
                k,
                m,
                l
            ], !0), !0);
        };
    };
}), b.register('vcqvA', function(d, c) {
    a(d.exports, 'deletePassiveInputConnectionToAudioNode', function() {
        return e;
    });
    var c = b('wVe0j'),
        d = b('8NJyd');
    const e = (a, b, d, c) => {
        const f = (0, c.getValueForKey)(a, b),
            g = (0, d.pickElementFromSet)(f, a => a[0] === d && a[1] === c);
        return 0 === f.size && a.delete(b), g;
    };
}), b.register('wVe0j', function(b, d) {
    a(b.exports, 'getValueForKey', function() {
        return c;
    });
    const c = (a, b) => {
        const d = a.get(b);
        if (void 0 === d)
            throw new Error('A value with the given key could not be found.');
        return d;
    };
}), b.register('8NJyd', function(b, d) {
    a(b.exports, 'pickElementFromSet', function() {
        return c;
    });
    const c = (a, b) => {
        const d = Array.from(a).filter(b);
        if (d.length > 1)
            throw Error('More than one element was found.');
        if (0 === d.length)
            throw Error('No element was found.');
        const [e] = f;
        return a.delete(e), e;
    };
}), b.register('vL9Ob', function(j, c) {
    a(j.exports, 'setInternalStateToActive', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('x2usf');
    const e = a => {
        if (c.ACTIVE_AUDIO_NODE_STORE.has(a))
            throw new Error('The AudioNode is already stored.');
        c.ACTIVE_AUDIO_NODE_STORE.add(a), (0, d.getEventListenersOfAudioNode)(a).forEach(a => a(!0));
    };
}), b.register('x2usf', function(j, c) {
    a(j.exports, 'getEventListenersOfAudioNode', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('wVe0j');
    const e = a => (0, d.getValueForKey)(c.EVENT_LISTENERS, a);
}), b.register('QzRPl', function(j, c) {
    a(j.exports, 'setInternalStateToPassiveWhenNecessary', function() {
        return e;
    });
    var c = b('z6oqi'),
        d = b('gVhQ2');
    const e = (a, b) => {
        !(0, c.isAudioWorkletNode)(a) && b.every(a => 0 === a.size) && (0, d.setInternalStateToPassive)(a);
    };
}), b.register('z6oqi', function(b, j) {
    a(b.exports, 'isAudioWorkletNode', function() {
        return c;
    });
    const c = a => 'port' in a;
}), b.register('gVhQ2', function(j, c) {
    a(j.exports, 'setInternalStateToPassive', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('x2usf');
    const e = a => {
        if (!c.ACTIVE_AUDIO_NODE_STORE.has(a))
            throw new Error('The AudioNode is not stored.');
        c.ACTIVE_AUDIO_NODE_STORE.delete(a), (0, d.getEventListenersOfAudioNode)(a).forEach(a => a(!1));
    };
}), b.register('8JTFE', function(b, j) {
    a(b.exports, 'createAddPassiveInputConnectionToAudioNode', function() {
        return c;
    });
    const c = a => (b, j, [d, e, f], e) => {
        const g = b.get(d);
        void 0 === g ? b.set(d, new Set([
            [
                e,
                j,
                f
            ]
        ])) : a(g, [
            e,
            j,
            f
        ], a => a[0] === e && a[1] === j, e);
    };
}), b.register('hya93', function(b, j) {
    a(b.exports, 'createAddSilentConnection', function() {
        return c;
    });
    const c = a => (b, j) => {
        const d = a(b, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        j.connect(d).connect(b.destination);
        const e = () => {
            j.removeEventListener('ended', e), j.disconnect(d), d.disconnect();
        };
        j.addEventListener('ended', e);
    };
}), b.register('YKaTG', function(b, j) {
    a(b.exports, 'createAddUnrenderedAudioWorkletNode', function() {
        return c;
    });
    const c = a => (b, j) => {
        a(b).add(j);
    };
}), b.register('lvrDo', function(b, j) {
    a(b.exports, 'createAnalyserNodeConstructor', function() {
        return d;
    });
    const c = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            fftSize: 2048,
            maxDecibels: -30,
            minDecibels: -100,
            smoothingTimeConstant: 0.8
        },
        d = (a, b, j, d, d, e) => class extends a {
            get fftSize() {
                return this._nativeAnalyserNode.fftSize;
            }
            set fftSize(a) {
                this._nativeAnalyserNode.fftSize = a;
            }
            get frequencyBinCount() {
                return this._nativeAnalyserNode.frequencyBinCount;
            }
            get maxDecibels() {
                return this._nativeAnalyserNode.maxDecibels;
            }
            set maxDecibels(a) {
                const e = this._nativeAnalyserNode.maxDecibels;
                if (this._nativeAnalyserNode.maxDecibels = a, !(a > this._nativeAnalyserNode.minDecibels))
                    throw this._nativeAnalyserNode.maxDecibels = e, j();
            }
            get minDecibels() {
                return this._nativeAnalyserNode.minDecibels;
            }
            set minDecibels(a) {
                const e = this._nativeAnalyserNode.minDecibels;
                if (this._nativeAnalyserNode.minDecibels = a, !(this._nativeAnalyserNode.maxDecibels > a))
                    throw this._nativeAnalyserNode.minDecibels = e, j();
            }
            get smoothingTimeConstant() {
                return this._nativeAnalyserNode.smoothingTimeConstant;
            }
            set smoothingTimeConstant(a) {
                this._nativeAnalyserNode.smoothingTimeConstant = a;
            }
            getByteFrequencyData(a) {
                this._nativeAnalyserNode.getByteFrequencyData(a);
            }
            getByteTimeDomainData(a) {
                this._nativeAnalyserNode.getByteTimeDomainData(a);
            }
            getFloatFrequencyData(a) {
                this._nativeAnalyserNode.getFloatFrequencyData(a);
            }
            getFloatTimeDomainData(a) {
                this._nativeAnalyserNode.getFloatTimeDomainData(a);
            }
            constructor(a, j) {
                const e = d(a),
                    f = {
                        ...c,
                        ...j
                    },
                    g = d(e, f);
                super(a, !1, g, e(e) ? b() : null), this._nativeAnalyserNode = g;
            }
        };
}), b.register('Rb88y', function(j, e) {
    a(j.exports, 'createAnalyserNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, j) => () => {
        const e = new WeakMap();
        return {
            render(d, e) {
                const f = e.get(e);
                return void 0 !== f ? Promise.resolve(f) : (async (d, e) => {
                    let g = b(d);
                    if (!(0, c.isOwnedByContext)(g, e)) {
                        const h = {
                            channelCount: g.channelCount,
                            channelCountMode: g.channelCountMode,
                            channelInterpretation: g.channelInterpretation,
                            fftSize: g.fftSize,
                            maxDecibels: g.maxDecibels,
                            minDecibels: g.minDecibels,
                            smoothingTimeConstant: g.smoothingTimeConstant
                        };
                        g = a(e, h);
                    }
                    return e.set(e, g), await j(d, e, g), g;
                })(d, e);
            }
        };
    };
}), b.register('BRlDZ', function(b, j) {
    a(b.exports, 'isOwnedByContext', function() {
        return c;
    });
    const c = (a, b) => a.context === b;
}), b.register('8nC3d', function(j, c) {
    a(j.exports, 'createAudioBufferConstructor', function() {
        return f;
    });
    var c = b('9AAhp'),
        d = b('0+f0e');
    const e = {
            numberOfChannels: 1
        },
        f = (a, b, j, c, f, g, h, i) => {
            let g = null;
            return class o {
                static[Symbol.hasInstance](b) {
                    return null !== b && 'object' == typeof b && Object.getPrototypeOf(b) === o.prototype || a.has(b);
                }
                constructor(o) {
                    if (null === f)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const {
                        length: h,
                        numberOfChannels: i,
                        sampleRate: j
                    } = {
                        ...e,
                        ...o
                    };
                    null === g && (g = new f(1, 1, 44100));
                    const k = null !== c && b(g, g) ? new c({
                        length: h,
                        numberOfChannels: i,
                        sampleRate: j
                    }) : g.createBuffer(i, h, j);
                    if (0 === k.numberOfChannels)
                        throw j();
                    return 'function' != typeof k.copyFromChannel ? (h(k), (0, d.wrapAudioBufferGetChannelDataMethod)(k)) : b(c.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => (0, c.testAudioBufferCopyChannelMethodsOutOfBoundsSupport)(k)) || i(k), a.add(k), k;
                }
            };
        };
}), b.register('9AAhp', function(b, j) {
    a(b.exports, 'testAudioBufferCopyChannelMethodsOutOfBoundsSupport', function() {
        return c;
    });
    const c = a => {
        try {
            a.copyToChannel(new Float32Array(1), 0, -1);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('0+f0e', function(j, c) {
    a(j.exports, 'wrapAudioBufferGetChannelDataMethod', function() {
        return d;
    });
    var c = b('VkB5W');
    const d = a => {
        var e;
        a.getChannelData = (e = a.getChannelData, j => {
            try {
                return e.call(a, j);
            } catch (a) {
                if (12 === a.code)
                    throw (0, c.createIndexSizeError)();
                throw a;
            }
        });
    };
}), b.register('VkB5W', function(b, j) {
    a(b.exports, 'createIndexSizeError', function() {
        return c;
    });
    const c = () => new DOMException('', 'IndexSizeError');
}), b.register('v1pff', function(j, c) {
    a(j.exports, 'createAudioBufferSourceNodeConstructor', function() {
        return h;
    });
    var c = b('0D9Ao'),
        d = b('8fUiO'),
        e = b('vL9Ob'),
        f = b('gVhQ2');
    const g = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
        },
        h = (a, b, j, c, h, i, h, o) => class extends a {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer;
            }
            set buffer(a) {
                if (this._nativeAudioBufferSourceNode.buffer = a, null !== a) {
                    if (this._isBufferSet)
                        throw c();
                    this._isBufferSet = !0;
                }
            }
            get loop() {
                return this._nativeAudioBufferSourceNode.loop;
            }
            set loop(a) {
                this._nativeAudioBufferSourceNode.loop = a;
            }
            get loopEnd() {
                return this._nativeAudioBufferSourceNode.loopEnd;
            }
            set loopEnd(a) {
                this._nativeAudioBufferSourceNode.loopEnd = a;
            }
            get loopStart() {
                return this._nativeAudioBufferSourceNode.loopStart;
            }
            set loopStart(a) {
                this._nativeAudioBufferSourceNode.loopStart = a;
            }
            get onended() {
                return this._onended;
            }
            set onended(a) {
                const i = 'function' == typeof a ? o(this, a) : null;
                this._nativeAudioBufferSourceNode.onended = i;
                const j = this._nativeAudioBufferSourceNode.onended;
                this._onended = null !== j && j === i ? a : j;
            }
            get playbackRate() {
                return this._playbackRate;
            }
            start(i = 0, j = 0, f) {
                if (this._nativeAudioBufferSourceNode.start(i, j, f), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === f ? [
                        i,
                        j
                    ] : [
                        i,
                        j,
                        f
                    ]), 'closed' !== this.context.state) {
                    (0, e.setInternalStateToActive)(this);
                    const k = () => {
                        this._nativeAudioBufferSourceNode.removeEventListener('ended', k), (0, d.isActiveAudioNode)(this) && (0, f.setInternalStateToPassive)(this);
                    };
                    this._nativeAudioBufferSourceNode.addEventListener('ended', k);
                }
            }
            stop(k = 0) {
                this._nativeAudioBufferSourceNode.stop(k), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = k);
            }
            constructor(k, c) {
                const l = i(k),
                    m = {
                        ...g,
                        ...c
                    },
                    n = h(l, m),
                    o = h(l),
                    p = o ? j() : null;
                super(k, !1, n, p), this._audioBufferSourceNodeRenderer = p, this._isBufferNullified = !1, this._isBufferSet = null !== m.buffer, this._nativeAudioBufferSourceNode = n, this._onended = null, this._playbackRate = f(this, o, n.playbackRate, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), b.register('0D9Ao', function(b, f) {
    a(b.exports, 'MOST_NEGATIVE_SINGLE_FLOAT', function() {
        return c;
    }), a(b.exports, 'MOST_POSITIVE_SINGLE_FLOAT', function() {
        return d;
    });
    const c = -3.4028234663852886e+38,
        d = -c;
}), b.register('8fUiO', function(f, q) {
    a(f.exports, 'isActiveAudioNode', function() {
        return d;
    });
    var c = b('GBhK6');
    const d = a => c.ACTIVE_AUDIO_NODE_STORE.has(a);
}), b.register('yYd4o', function(f, q) {
    a(f.exports, 'createAudioBufferSourceNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, f, q, d) => () => {
        const e = new WeakMap();
        let f = null,
            g = null;
        return {
            set start(a) {
                f = a;
            },
            set stop(a) {
                g = a;
            },
            render(h, i) {
                const h = e.get(i);
                return void 0 !== h ? Promise.resolve(h) : (async (h, i) => {
                    let i = f(h);
                    const j = (0, c.isOwnedByContext)(i, i);
                    if (!j) {
                        const k = {
                            buffer: i.buffer,
                            channelCount: i.channelCount,
                            channelCountMode: i.channelCountMode,
                            channelInterpretation: i.channelInterpretation,
                            loop: i.loop,
                            loopEnd: i.loopEnd,
                            loopStart: i.loopStart,
                            playbackRate: i.playbackRate.value
                        };
                        i = b(i, k), null !== f && i.start(...f), null !== g && i.stop(g);
                    }
                    return e.set(i, i), j ? await a(i, h.playbackRate, i.playbackRate) : await q(i, h.playbackRate, i.playbackRate), await d(h, i, i), i;
                })(h, i);
            }
        };
    };
}), b.register('nplTQ', function(f, q) {
    a(f.exports, 'createAudioContextConstructor', function() {
        return e;
    });
    var c = b('d1yi+'),
        d = b('6BGPA');
    const e = (a, b, f, q, e, f, g, h, i) => class extends a {
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
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, c.deactivateAudioGraph)(this);
            }));
        }
        createMediaElementSource(a) {
            return new e(this, {
                mediaElement: a
            });
        }
        createMediaStreamDestination() {
            return new f(this);
        }
        createMediaStreamSource(a) {
            return new g(this, {
                mediaStream: a
            });
        }
        createMediaStreamTrackSource(a) {
            return new h(this, {
                mediaStreamTrack: a
            });
        }
        resume() {
            return 'suspended' === this._state ? new Promise((a, b) => {
                const f = () => {
                    this._nativeAudioContext.removeEventListener('statechange', f), 'running' === this._nativeAudioContext.state ? a() : this.resume().then(a, b);
                };
                this._nativeAudioContext.addEventListener('statechange', f);
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
        constructor(f = {}) {
            if (null === i)
                throw new Error('Missing the native AudioContext constructor.');
            let g;
            try {
                g = new i(f);
            } catch (f) {
                if (12 === f.code && 'sampleRate is not in range' === f.message)
                    throw o();
                throw f;
            }
            if (null === g)
                throw q();
            if (!(0, d.isValidLatencyHint)(f.latencyHint))
                throw new TypeError(`The provided value '${ f.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== f.sampleRate && g.sampleRate !== f.sampleRate)
                throw o();
            super(g, 2);
            const {
                latencyHint: h
            } = i, {
                sampleRate: j
            } = k;
            if (this._baseLatency = 'number' == typeof k.baseLatency ? k.baseLatency : 'balanced' === h ? 512 / j : 'interactive' === h || void 0 === h ? 256 / j : 'playback' === h ? 1024 / j : 128 * Math.max(2, Math.min(128, Math.round(h * j / 128))) / j, this._nativeAudioContext = k, 'webkitAudioContext' === i.name ? (this._nativeGainNode = k.createGain(), this._nativeOscillatorNode = k.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(k.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === k.state) {
                this._state = 'suspended';
                const l = () => {
                    'suspended' === this._state && (this._state = null), k.removeEventListener('statechange', l);
                };
                k.addEventListener('statechange', l);
            }
        }
    };
}), b.register('d1yi+', function(o, q) {
    a(o.exports, 'deactivateAudioGraph', function() {
        return d;
    });
    var c = b('maqlJ');
    const d = a => {
        (0, c.deactivateActiveAudioNodeInputConnections)(a.destination, []);
    };
}), b.register('maqlJ', function(o, q) {
    a(o.exports, 'deactivateActiveAudioNodeInputConnections', function() {
        return n;
    });
    var c = b('TD3NE'),
        d = b('z6oqi'),
        e = b('eLFTO'),
        f = b('L+9Ko'),
        g = b('bOv/8'),
        h = b('osHoR'),
        i = b('ceXwh'),
        j = b('QC5yV'),
        k = b('OhNIY'),
        l = b('8fUiO'),
        m = b('gVhQ2');
    const n = (a, b) => {
        const {
            activeInputs: o
        } = (0, j.getAudioNodeConnections)(a);
        o.forEach(o => o.forEach(([p]) => {
            b.includes(a) || n(p, [
                ...b,
                a
            ]);
        }));
        const q = (0, c.isAudioBufferSourceNode)(a) ? [a.playbackRate] : (0, d.isAudioWorkletNode)(a) ? Array.from(a.parameters.values()) : (0, e.isBiquadFilterNode)(a) ? [
            a.Q,
            a.detune,
            a.frequency,
            a.gain
        ] : (0, f.isConstantSourceNode)(a) ? [a.offset] : (0, g.isGainNode)(a) ? [a.gain] : (0, h.isOscillatorNode)(a) ? [
            a.detune,
            a.frequency
        ] : (0, i.isStereoPannerNode)(a) ? [a.pan] : [];
        for (const r of q) {
            const s = (0, k.getAudioParamConnections)(r);
            void 0 !== s && s.activeInputs.forEach(([t]) => n(t, b));
        }
        (0, l.isActiveAudioNode)(r) && (0, m.setInternalStateToPassive)(r);
    };
}), b.register('TD3NE', function(b, y) {
    a(b.exports, 'isAudioBufferSourceNode', function() {
        return c;
    });
    const c = a => 'playbackRate' in a;
}), b.register('eLFTO', function(b, y) {
    a(b.exports, 'isBiquadFilterNode', function() {
        return c;
    });
    const c = a => 'frequency' in a && 'gain' in a;
}), b.register('L+9Ko', function(b, y) {
    a(b.exports, 'isConstantSourceNode', function() {
        return c;
    });
    const c = a => 'offset' in a;
}), b.register('bOv/8', function(b, y) {
    a(b.exports, 'isGainNode', function() {
        return c;
    });
    const c = a => !('frequency' in a) && 'gain' in a;
}), b.register('osHoR', function(b, y) {
    a(b.exports, 'isOscillatorNode', function() {
        return c;
    });
    const c = a => 'detune' in a && 'frequency' in a;
}), b.register('ceXwh', function(b, y) {
    a(b.exports, 'isStereoPannerNode', function() {
        return c;
    });
    const c = a => 'pan' in a;
}), b.register('QC5yV', function(y, c) {
    a(y.exports, 'getAudioNodeConnections', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('wVe0j');
    const e = a => (0, d.getValueForKey)(c.AUDIO_NODE_CONNECTIONS_STORE, a);
}), b.register('OhNIY', function(y, c) {
    a(y.exports, 'getAudioParamConnections', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('wVe0j');
    const e = a => (0, d.getValueForKey)(c.AUDIO_PARAM_CONNECTIONS_STORE, a);
}), b.register('6BGPA', function(b, y) {
    a(b.exports, 'isValidLatencyHint', function() {
        return c;
    });
    const c = a => void 0 === a || 'number' == typeof a || 'string' == typeof a && ('balanced' === a || 'interactive' === a || 'playback' === a);
}), b.register('mus+u', function(b, y) {
    a(b.exports, 'createAudioDestinationNodeConstructor', function() {
        return c;
    });
    const c = (a, b, y, c, e, d, e, y) => class extends a {
        get channelCount() {
            return this._nativeAudioDestinationNode.channelCount;
        }
        set channelCount(a) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw c();
            if (a > this._nativeAudioDestinationNode.maxChannelCount)
                throw y();
            this._nativeAudioDestinationNode.channelCount = a;
        }
        get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode;
        }
        set channelCountMode(a) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw c();
            this._nativeAudioDestinationNode.channelCountMode = a;
        }
        get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount;
        }
        constructor(a, y) {
            const d = d(a),
                e = e(d),
                f = e(d, y, e);
            super(a, !1, f, e ? b(y) : null), this._isNodeOfNativeOfflineAudioContext = e, this._nativeAudioDestinationNode = f;
        }
    };
}), b.register('zjr0x', function(b, y) {
    a(b.exports, 'createAudioDestinationNodeRenderer', function() {
        return c;
    });
    const c = a => {
        const d = new WeakMap();
        return {
            render(y, c) {
                const e = d.get(c);
                return void 0 !== e ? Promise.resolve(e) : (async (y, c) => {
                    const f = c.destination;
                    return d.set(c, f), await a(y, c, f), f;
                })(y, c);
            }
        };
    };
}), b.register('Z0AeO', function(y, G) {
    a(y.exports, 'createAudioListenerFactory', function() {
        return d;
    });
    var c = b('0D9Ao');
    const d = (a, b, y, G, d, e, y, g) => (h, i) => {
        const e = i.listener,
            {
                forwardX: f,
                forwardY: g,
                forwardZ: h,
                positionX: i,
                positionY: j,
                positionZ: k,
                upX: l,
                upY: m,
                upZ: n
            } = void 0 === e.forwardX ? (() => {
                const o = new Float32Array(1),
                    p = b(i, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: 9
                    }),
                    q = y(i);
                let r = !1,
                    s = [
                        0,
                        0,
                        -1,
                        0,
                        1,
                        0
                    ],
                    t = [
                        0,
                        0,
                        0
                    ];
                const u = () => {
                        if (r)
                            return;
                        r = !0;
                        const v = G(i, 256, 9, 0);
                        v.onaudioprocess = ({
                            inputBuffer: w
                        }) => {
                            const x = [
                                e(w, o, 0),
                                e(w, o, 1),
                                e(w, o, 2),
                                e(w, o, 3),
                                e(w, o, 4),
                                e(w, o, 5)
                            ];
                            x.some((w, x) => w !== s[x]) && (e.setOrientation(...x), s = x);
                            const y = [
                                e(w, o, 6),
                                e(w, o, 7),
                                e(w, o, 8)
                            ];
                            y.some((w, x) => w !== t[x]) && (e.setPosition(...y), t = y);
                        }, p.connect(w);
                    },
                    v = a => b => {
                        b !== s[a] && (s[a] = b, e.setOrientation(...s));
                    },
                    w = a => b => {
                        b !== t[a] && (t[a] = b, e.setPosition(...t));
                    },
                    x = (b, G, e) => {
                        const y = F(i, {
                            channelCount: 1,
                            channelCountMode: 'explicit',
                            channelInterpretation: 'discrete',
                            offset: G
                        });
                        y.connect(p, 0, b), y.start(), Object.defineProperty(y.offset, 'defaultValue', {
                            get: () => G
                        });
                        const z = a({
                            context: h
                        }, q, y.offset, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT);
                        var A, B, C, D, E, F, G;
                        return g(z, 'value', a => () => a.call(z), a => b => {
                            try {
                                a.call(z, b);
                            } catch (a) {
                                if (9 !== a.code)
                                    throw a;
                            }
                            u(), q && e(b);
                        }), z.cancelAndHoldAtTime = (A = z.cancelAndHoldAtTime, q ? () => {
                            throw d();
                        } : (...a) => {
                            const H = A.apply(z, a);
                            return u(), H;
                        }), z.cancelScheduledValues = (B = z.cancelScheduledValues, q ? () => {
                            throw d();
                        } : (...a) => {
                            const H = B.apply(z, a);
                            return u(), H;
                        }), z.exponentialRampToValueAtTime = (C = z.exponentialRampToValueAtTime, q ? () => {
                            throw d();
                        } : (...a) => {
                            const H = C.apply(z, a);
                            return u(), H;
                        }), z.linearRampToValueAtTime = (D = z.linearRampToValueAtTime, q ? () => {
                            throw d();
                        } : (...a) => {
                            const H = D.apply(z, a);
                            return u(), H;
                        }), z.setTargetAtTime = (E = z.setTargetAtTime, q ? () => {
                            throw d();
                        } : (...a) => {
                            const H = E.apply(z, a);
                            return u(), H;
                        }), z.setValueAtTime = (F = z.setValueAtTime, q ? () => {
                            throw d();
                        } : (...a) => {
                            const H = F.apply(z, a);
                            return u(), H;
                        }), z.setValueCurveAtTime = (G = z.setValueCurveAtTime, q ? () => {
                            throw d();
                        } : (...a) => {
                            const H = G.apply(z, a);
                            return u(), H;
                        }), z;
                    };
                return {
                    forwardX: x(0, 0, v(0)),
                    forwardY: x(1, 0, v(1)),
                    forwardZ: x(2, -1, v(2)),
                    positionX: x(6, 0, w(0)),
                    positionY: x(7, 0, w(1)),
                    positionZ: x(8, 0, w(2)),
                    upX: x(3, 0, v(3)),
                    upY: x(4, 1, v(4)),
                    upZ: x(5, 0, v(5))
                };
            })() : e;
        return {
            get forwardX() {
                return f;
            },
            get forwardY() {
                return g;
            },
            get forwardZ() {
                return h;
            },
            get positionX() {
                return i;
            },
            get positionY() {
                return j;
            },
            get positionZ() {
                return k;
            },
            get upX() {
                return l;
            },
            get upY() {
                return m;
            },
            get upZ() {
                return n;
            }
        };
    };
}), b.register('i0D5j', function(F, G) {
    a(F.exports, 'createAudioNodeConstructor', function() {
        return E;
    });
    var c = b('GBhK6'),
        d = b('21mpK'),
        e = b('D0C9f'),
        f = b('niSnE'),
        g = b('WkSfb'),
        h = b('W9I5G'),
        i = b('l2PWO'),
        j = b('RML0u'),
        k = b('vReem'),
        l = b('vcqvA'),
        m = b('cMGVr'),
        n = b('GHHWR'),
        o = b('QC5yV'),
        p = b('OhNIY'),
        q = b('x2usf'),
        r = b('ztwLu'),
        s = b('O+IaO'),
        t = b('UUKxx'),
        u = b('8fUiO'),
        v = b('GjHYu'),
        w = b('Epr/x'),
        x = b('vL9Ob'),
        y = b('QzRPl'),
        z = b('JMXuE'),
        A = b('DsupX'),
        B = b('pWl0Z');
    const C = (a, b, F, G, c) => {
            const [D, E] = ((a, b, F, G) => {
                const {
                    activeInputs: F,
                    passiveInputs: G
                } = (0, o.getAudioNodeConnections)(b), H = (0, i.deleteActiveInputConnection)(F[G], a, F);
                if (null === H)
                    return [
                        (0, l.deletePassiveInputConnectionToAudioNode)(G, a, F, G)[2],
                        !1
                    ];
                return [
                    H[2],
                    !0
                ];
            })(a, F, G, c);
            if (null !== D && ((0, k.deleteEventListenerOfAudioNode)(a, D), !E || b || (0, v.isPartOfACycle)(a) || (0, n.disconnectNativeAudioNodeFromNativeAudioNode)((0, r.getNativeAudioNode)(a), (0, r.getNativeAudioNode)(F), G, c)), (0, u.isActiveAudioNode)(F)) {
                const {
                    activeInputs: F
                } = (0, o.getAudioNodeConnections)(F);
                (0, y.setInternalStateToPassiveWhenNecessary)(F, F);
            }
        },
        D = (a, b, F, G) => {
            const [E, F] = ((a, b, F) => {
                const {
                    activeInputs: G,
                    passiveInputs: H
                } = (0, p.getAudioParamConnections)(b), I = (0, i.deleteActiveInputConnection)(G, a, F);
                if (null === I)
                    return [
                        (0, m.deletePassiveInputConnectionToAudioParam)(H, a, F)[1],
                        !1
                    ];
                return [
                    I[2],
                    !0
                ];
            })(a, F, L);
            null !== E && ((0, k.deleteEventListenerOfAudioNode)(a, E), !F || b || (0, v.isPartOfACycle)(a) || (0, r.getNativeAudioNode)(a).disconnect((0, s.getNativeAudioParam)(F), L));
        },
        E = (a, b, F, L, i, k, l, n, y, E, u, v, w, x, A, C) => class extends E {
            get channelCount() {
                return this._nativeAudioNode.channelCount;
            }
            set channelCount(a) {
                this._nativeAudioNode.channelCount = a;
            }
            get channelCountMode() {
                return this._nativeAudioNode.channelCountMode;
            }
            set channelCountMode(a) {
                this._nativeAudioNode.channelCountMode = a;
            }
            get channelInterpretation() {
                return this._nativeAudioNode.channelInterpretation;
            }
            set channelInterpretation(a) {
                this._nativeAudioNode.channelInterpretation = a;
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
            connect(a, F = 0, G = 0) {
                if (F < 0 || F >= this._nativeAudioNode.numberOfOutputs)
                    throw i();
                const H = u(this._context),
                    I = A(H);
                if (w(a) || x(a))
                    throw k();
                if ((0, d.isAudioNode)(a)) {
                    const J = (0, r.getNativeAudioNode)(a);
                    try {
                        const K = (0, h.connectNativeAudioNodeToNativeAudioNode)(this._nativeAudioNode, J, F, G),
                            L = (0, w.isPassiveAudioNode)(this);
                        (I || L) && this._nativeAudioNode.disconnect(...K), 'closed' !== this.context.state && !L && (0, w.isPassiveAudioNode)(a) && (0, x.setInternalStateToActive)(a);
                    } catch (a) {
                        if (12 === a.code)
                            throw k();
                        throw a;
                    }
                    if (b(this, a, F, G, I)) {
                        const K = y([this], a);
                        (0, A.visitEachAudioNodeOnce)(K, H(I));
                    }
                    return a;
                }
                const J = (0, s.getNativeAudioParam)(a);
                if ('playbackRate' === J.name && 1024 === J.maxValue)
                    throw l();
                try {
                    this._nativeAudioNode.connect(J, F), (I || (0, w.isPassiveAudioNode)(this)) && this._nativeAudioNode.disconnect(J, F);
                } catch (a) {
                    if (12 === a.code)
                        throw k();
                    throw a;
                }
                const K = ((a, b, F, H) => {
                    const {
                        activeInputs: L,
                        passiveInputs: M
                    } = (0, p.getAudioParamConnections)(b), {
                        outputs: N
                    } = (0, o.getAudioNodeConnections)(a), O = (0, q.getEventListenersOfAudioNode)(a), P = N => {
                        const Q = (0, r.getNativeAudioNode)(a),
                            R = (0, s.getNativeAudioParam)(b);
                        if (N) {
                            const S = (0, m.deletePassiveInputConnectionToAudioParam)(M, a, F);
                            (0, f.addActiveInputConnectionToAudioParam)(L, a, S, !1), H || (0, v.isPartOfACycle)(a) || Q.connect(R, F);
                        } else {
                            const T = (0, j.deleteActiveInputConnectionToAudioParam)(L, a, F);
                            (0, g.addPassiveInputConnectionToAudioParam)(M, T, !1), H || (0, v.isPartOfACycle)(a) || Q.disconnect(R, F);
                        }
                    };
                    return !!(0, t.insertElementInSet)(N, [
                        b,
                        F
                    ], a => a[0] === b && a[1] === F, !0) && (O.add(P), (0, u.isActiveAudioNode)(a) ? (0, f.addActiveInputConnectionToAudioParam)(L, a, [
                        F,
                        P
                    ], !0) : (0, g.addPassiveInputConnectionToAudioParam)(M, [
                        a,
                        F,
                        P
                    ], !0), !0);
                })(this, a, F, I);
                if (K) {
                    const L = y([this], a);
                    (0, A.visitEachAudioNodeOnce)(L, H(I));
                }
            }
            disconnect(a, b, F) {
                let H;
                const I = u(this._context),
                    J = A(I);
                if (void 0 === a)
                    H = ((a, b) => {
                        const K = (0, o.getAudioNodeConnections)(a),
                            L = [];
                        for (const M of K.outputs)
                            (0, e.isAudioNodeOutputConnection)(M) ? C(a, b, ...M) : D(a, b, ...M), L.push(M[0]);
                        return K.outputs.clear(), L;
                    })(this, J);
                else if ('number' == typeof a) {
                    if (a < 0 || a >= this.numberOfOutputs)
                        throw i();
                    H = ((a, b, F) => {
                        const K = (0, o.getAudioNodeConnections)(a),
                            L = [];
                        for (const M of K.outputs)
                            M[1] === F && ((0, e.isAudioNodeOutputConnection)(M) ? C(a, b, ...M) : D(a, b, ...M), L.push(M[0]), K.outputs.delete(M));
                        return L;
                    })(this, J, a);
                } else {
                    if (void 0 !== b && (b < 0 || b >= this.numberOfOutputs))
                        throw i();
                    if ((0, d.isAudioNode)(a) && void 0 !== F && (F < 0 || F >= a.numberOfInputs))
                        throw i();
                    if (H = ((a, b, F, H, I) => {
                            const K = (0, o.getAudioNodeConnections)(a);
                            return Array.from(K.outputs).filter(a => !(a[0] !== F || void 0 !== H && a[1] !== H || void 0 !== I && a[2] !== I)).map(F => ((0, e.isAudioNodeOutputConnection)(F) ? C(a, b, ...F) : D(a, b, ...F), K.outputs.delete(F), F[0]));
                        })(this, J, a, b, F), 0 === H.length)
                        throw k();
                }
                for (const K of H) {
                    const L = y([this], K);
                    (0, A.visitEachAudioNodeOnce)(L, n);
                }
            }
            constructor(b, c, d, e) {
                super(d), this._context = b, this._nativeAudioNode = d;
                const H = u(b);
                v(H) && !0 !== F(z.testAudioNodeDisconnectMethodSupport, () => (0, z.testAudioNodeDisconnectMethodSupport)(H, C)) && (0, B.wrapAudioNodeDisconnectMethod)(d), G.AUDIO_NODE_STORE.set(this, d), G.EVENT_LISTENERS.set(this, new Set()), 'closed' !== b.state && c && (0, x.setInternalStateToActive)(this), a(this, e, d);
            }
        };
}), b.register('21mpK', function(b, e) {
    a(b.exports, 'isAudioNode', function() {
        return c;
    });
    const c = a => 'context' in a;
}), b.register('D0C9f', function(e, f) {
    a(e.exports, 'isAudioNodeOutputConnection', function() {
        return d;
    });
    var c = b('21mpK');
    const d = a => (0, c.isAudioNode)(a[0]);
}), b.register('niSnE', function(e, f) {
    a(e.exports, 'addActiveInputConnectionToAudioParam', function() {
        return d;
    });
    var c = b('UUKxx');
    const d = (a, b, [e, f], d) => {
        (0, c.insertElementInSet)(a, [
            b,
            e,
            f
        ], a => a[0] === b && a[1] === e, d);
    };
}), b.register('UUKxx', function(b, f) {
    a(b.exports, 'insertElementInSet', function() {
        return c;
    });
    const c = (a, b, f, c) => {
        for (const d of a)
            if (f(d)) {
                if (c)
                    return !1;
                throw Error('The set contains at least one similar element.');
            }
        return a.add(d), !0;
    };
}), b.register('WkSfb', function(f, g) {
    a(f.exports, 'addPassiveInputConnectionToAudioParam', function() {
        return d;
    });
    var c = b('UUKxx');
    const d = (a, [e, f, g], d) => {
        const h = a.get(e);
        void 0 === h ? a.set(e, new Set([
            [
                f,
                g
            ]
        ])) : (0, c.insertElementInSet)(h, [
            f,
            g
        ], a => a[0] === f, d);
    };
}), b.register('W9I5G', function(d, c) {
    a(d.exports, 'connectNativeAudioNodeToNativeAudioNode', function() {
        return d;
    });
    var c = b('JoVZe');
    const d = (a, b, d, c) => {
        if ((0, c.isNativeAudioNodeFaker)(b)) {
            const e = b.inputs[c];
            return a.connect(e, d, 0), [
                e,
                d,
                0
            ];
        }
        return a.connect(b, d, c), [
            b,
            d,
            c
        ];
    };
}), b.register('JoVZe', function(b, d) {
    a(b.exports, 'isNativeAudioNodeFaker', function() {
        return c;
    });
    const c = a => 'inputs' in a;
}), b.register('l2PWO', function(b, d) {
    a(b.exports, 'deleteActiveInputConnection', function() {
        return c;
    });
    const c = (a, b, d) => {
        for (const d of a)
            if (d[0] === b && d[1] === d)
                return a.delete(d), d;
        return null;
    };
}), b.register('RML0u', function(d, f) {
    a(d.exports, 'deleteActiveInputConnectionToAudioParam', function() {
        return d;
    });
    var c = b('8NJyd');
    const d = (a, b, d) => (0, c.pickElementFromSet)(a, a => a[0] === b && a[1] === d);
}), b.register('vReem', function(d, f) {
    a(d.exports, 'deleteEventListenerOfAudioNode', function() {
        return d;
    });
    var c = b('x2usf');
    const d = (a, b) => {
        if (!(0, c.getEventListenersOfAudioNode)(a).delete(b))
            throw new Error('Missing the expected event listener.');
    };
}), b.register('cMGVr', function(d, f) {
    a(d.exports, 'deletePassiveInputConnectionToAudioParam', function() {
        return e;
    });
    var c = b('wVe0j'),
        d = b('8NJyd');
    const e = (a, b, d) => {
        const f = (0, c.getValueForKey)(a, b),
            g = (0, d.pickElementFromSet)(f, a => a[0] === d);
        return 0 === f.size && a.delete(b), g;
    };
}), b.register('GHHWR', function(d, c) {
    a(d.exports, 'disconnectNativeAudioNodeFromNativeAudioNode', function() {
        return d;
    });
    var c = b('JoVZe');
    const d = (a, b, d, c) => {
        (0, c.isNativeAudioNodeFaker)(b) ? a.disconnect(b.inputs[c], d, 0): a.disconnect(b, d, c);
    };
}), b.register('ztwLu', function(d, c) {
    a(d.exports, 'getNativeAudioNode', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('wVe0j');
    const e = a => (0, d.getValueForKey)(c.AUDIO_NODE_STORE, a);
}), b.register('O+IaO', function(d, c) {
    a(d.exports, 'getNativeAudioParam', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('wVe0j');
    const e = a => (0, d.getValueForKey)(c.AUDIO_PARAM_STORE, a);
}), b.register('GjHYu', function(d, c) {
    a(d.exports, 'isPartOfACycle', function() {
        return d;
    });
    var c = b('GBhK6');
    const d = a => c.CYCLE_COUNTERS.has(a);
}), b.register('Epr/x', function(d, c) {
    a(d.exports, 'isPassiveAudioNode', function() {
        return d;
    });
    var c = b('GBhK6');
    const d = a => !c.ACTIVE_AUDIO_NODE_STORE.has(a);
}), b.register('JMXuE', function(b, d) {
    a(b.exports, 'testAudioNodeDisconnectMethodSupport', function() {
        return c;
    });
    const c = (a, b) => new Promise(d => {
        if (null !== b)
            d(!0);
        else {
            const d = a.createScriptProcessor(256, 1, 1),
                e = a.createGain(),
                f = a.createBuffer(1, 2, 44100),
                g = f.getChannelData(0);
            g[0] = 1, g[1] = 1;
            const h = a.createBufferSource();
            h.buffer = f, h.loop = !0, h.connect(d).connect(a.destination), h.connect(e), h.disconnect(e), d.onaudioprocess = e => {
                const i = e.inputBuffer.getChannelData(0);
                Array.prototype.some.call(i, a => 1 === a) ? d(!0) : d(!1), h.stop(), d.onaudioprocess = null, h.disconnect(d), d.disconnect(a.destination);
            }, h.start();
        }
    });
}), b.register('DsupX', function(b, d) {
    a(b.exports, 'visitEachAudioNodeOnce', function() {
        return c;
    });
    const c = (a, b) => {
        const d = new Map();
        for (const e of a)
            for (const f of e) {
                const g = d.get(f);
                d.set(f, void 0 === g ? 1 : g + 1);
            }
        d.forEach((f, d) => e(d, f));
    };
}), b.register('pWl0Z', function(f, g) {
    a(f.exports, 'wrapAudioNodeDisconnectMethod', function() {
        return d;
    });
    var c = b('b3yGw');
    const d = a => {
        const e = new Map();
        var f, g;
        a.connect = (f = a.connect.bind(a), (a, h = 0, i = 0) => {
            const j = (0, c.isNativeAudioNode)(a) ? f(a, h, i) : f(a, h),
                k = e.get(a);
            return void 0 === k ? e.set(a, [{
                input: i,
                output: h
            }]) : k.every(a => a.input !== i || a.output !== h) && k.push({
                input: i,
                output: h
            }), j;
        }), a.disconnect = (h = a.disconnect, (f, i, n) => {
            if (h.apply(a), void 0 === f)
                e.clear();
            else if ('number' == typeof f)
                for (const [j, k] of e) {
                    const l = k.filter(j => j.output !== f);
                    0 === l.length ? e.delete(j) : e.set(j, l);
                }
            else if (e.has(f))
                if (void 0 === i)
                    e.delete(f);
                else {
                    const m = e.get(f);
                    if (void 0 !== m) {
                        const n = m.filter(m => m.output !== i && (m.input !== n || void 0 === n));
                        0 === n.length ? e.delete(f) : e.set(f, n);
                    }
                }
            for (const [j, k] of e)
                k.forEach(e => {
                    (0, c.isNativeAudioNode)(j) ? a.connect(j, e.output, e.input): a.connect(j, e.output);
                });
        });
    };
}), b.register('b3yGw', function(b, k) {
    a(b.exports, 'isNativeAudioNode', function() {
        return c;
    });
    const c = a => 'context' in a;
}), b.register('pGnuH', function(k, j) {
    a(k.exports, 'createAudioParamFactory', function() {
        return d;
    });
    var c = b('KRv6y');
    const d = (a, b, k, j, d, n, o, p, t, i, g, u, v) => (w, x, y, e = null, f = null) => {
        const g = new(0, c.AutomationEventList)(y.defaultValue),
            h = x ? j(g) : null,
            i = {
                get defaultValue() {
                    return y.defaultValue;
                },
                get maxValue() {
                    return null === e ? y.maxValue : e;
                },
                get minValue() {
                    return null === f ? y.minValue : f;
                },
                get value() {
                    return y.value;
                },
                set value(a) {
                    y.value = a, i.setValueAtTime(a, w.context.currentTime);
                },
                cancelAndHoldAtTime(a) {
                    if ('function' == typeof y.cancelAndHoldAtTime)
                        null === h && g.flush(w.context.currentTime), g.add(d(a)), y.cancelAndHoldAtTime(a);
                    else {
                        const j = Array.from(g).pop();
                        null === h && g.flush(w.context.currentTime), g.add(d(a));
                        const k = Array.from(g).pop();
                        y.cancelScheduledValues(a), j !== k && void 0 !== k && ('exponentialRampToValue' === k.type ? y.exponentialRampToValueAtTime(k.value, k.endTime) : 'linearRampToValue' === k.type ? y.linearRampToValueAtTime(k.value, k.endTime) : 'setValue' === k.type ? y.setValueAtTime(k.value, k.startTime) : 'setValueCurve' === k.type && y.setValueCurveAtTime(k.values, k.startTime, k.duration));
                    }
                    return i;
                },
                cancelScheduledValues: a => (null === h && g.flush(w.context.currentTime), g.add(n(a)), y.cancelScheduledValues(a), i),
                exponentialRampToValueAtTime(a, b) {
                    if (0 === a)
                        throw new RangeError();
                    if (!Number.isFinite(b) || b < 0)
                        throw new RangeError();
                    return null === h && g.flush(w.context.currentTime), g.add(o(a, b)), y.exponentialRampToValueAtTime(a, b), i;
                },
                linearRampToValueAtTime: (a, b) => (null === h && g.flush(w.context.currentTime), g.add(p(a, b)), y.linearRampToValueAtTime(a, b), i),
                setTargetAtTime: (a, b, d) => (null === h && g.flush(w.context.currentTime), g.add(t(a, b, d)), y.setTargetAtTime(a, b, d), i),
                setValueAtTime: (a, b) => (null === h && g.flush(w.context.currentTime), g.add(i(a, b)), y.setValueAtTime(a, b), i),
                setValueCurveAtTime(a, b, d) {
                    const j = a instanceof Float32Array ? a : new Float32Array(a);
                    if (null !== u && 'webkitAudioContext' === u.name) {
                        const k = b + d,
                            l = w.context.sampleRate,
                            m = Math.ceil(b * l),
                            n = Math.floor(k * l),
                            o = n - m,
                            p = new Float32Array(o);
                        for (let q = 0; q < o; q += 1) {
                            const r = (j.length - 1) / d * ((m + q) / l - b),
                                s = Math.floor(r),
                                t = Math.ceil(r);
                            p[q] = s === t ? j[s] : (1 - (r - s)) * j[s] + (1 - (t - r)) * j[t];
                        }
                        null === h && g.flush(w.context.currentTime), g.add(g(p, b, d)), y.setValueCurveAtTime(p, b, d);
                        const r = n / l;
                        r < q && v(i, p[p.length - 1], r), v(i, j[j.length - 1], q);
                    } else
                        null === h && g.flush(w.context.currentTime), g.add(g(j, b, d)), y.setValueCurveAtTime(j, b, d);
                    return i;
                }
            };
        return d.set(i, y), b.set(i, w), a(i, h), i;
    };
}), b.register('xaSLF', function(b, d) {
    a(b.exports, 'createAudioParamRenderer', function() {
        return c;
    });
    const c = a => ({
        replay(b) {
            for (const d of a)
                if ('exponentialRampToValue' === d.type) {
                    const {
                        endTime: e,
                        value: f
                    } = g;
                    b.exponentialRampToValueAtTime(f, e);
                } else if ('linearRampToValue' === g.type) {
                const {
                    endTime: h,
                    value: i
                } = j;
                b.linearRampToValueAtTime(i, h);
            } else if ('setTarget' === j.type) {
                const {
                    startTime: k,
                    target: l,
                    timeConstant: m
                } = n;
                b.setTargetAtTime(l, k, m);
            } else if ('setValue' === n.type) {
                const {
                    startTime: o,
                    value: p
                } = q;
                b.setValueAtTime(p, o);
            } else {
                if ('setValueCurve' !== q.type)
                    throw new Error('Can\'t apply an unknown automation.');
                {
                    const {
                        duration: r,
                        startTime: s,
                        values: t
                    } = u;
                    b.setValueCurveAtTime(t, s, r);
                }
            }
        }
    });
}), b.register('UmXFG', function(h, p) {
    a(h.exports, 'createAudioWorkletNodeConstructor', function() {
        return f;
    });
    var c = b('GBhK6'),
        d = b('h4f3y');
    const e = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 1,
            numberOfOutputs: 1,
            parameterData: {},
            processorOptions: {}
        },
        f = (a, b, h, p, f, g, h, i, g, u, v, w, x, y) => class extends b {
            get onprocessorerror() {
                return this._onprocessorerror;
            }
            set onprocessorerror(a) {
                const g = 'function' == typeof a ? y(this, a) : null;
                this._nativeAudioWorkletNode.onprocessorerror = g;
                const h = this._nativeAudioWorkletNode.onprocessorerror;
                this._onprocessorerror = null !== h && h === g ? a : h;
            }
            get parameters() {
                return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters;
            }
            get port() {
                return this._nativeAudioWorkletNode.port;
            }
            constructor(b, y, z) {
                var g;
                const h = i(b),
                    i = g(h),
                    j = v({
                        ...e,
                        ...z
                    });
                x(j);
                const k = c.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(h),
                    l = null == k ? void 0 : k.get(y),
                    m = i || 'closed' !== h.state ? h : null !== (g = h(h)) && void 0 !== g ? g : h,
                    n = f(m, i ? null : b.baseLatency, u, y, l, j);
                super(b, !0, n, i ? p(y, j, l) : null);
                const o = [];
                n.parameters.forEach((a, b) => {
                    const p = r(this, i, a);
                    o.push([
                        b,
                        p
                    ]);
                }), this._nativeAudioWorkletNode = n, this._onprocessorerror = null, this._parameters = new(0, d.ReadOnlyMap)(o), i && a(h, this);
                const {
                    activeInputs: p
                } = g(this);
                w(n, p);
            }
        };
}), b.register('h4f3y', function(b, r) {
    a(b.exports, 'ReadOnlyMap', function() {
        return c;
    });
    class c {
        get size() {
            return this._map.size;
        }
        entries() {
            return this._map.entries();
        }
        forEach(a, d = null) {
            return this._map.forEach((r, c) => a.call(d, r, c, this));
        }
        get(a) {
            return this._map.get(a);
        }
        has(a) {
            return this._map.has(a);
        }
        keys() {
            return this._map.keys();
        }
        values() {
            return this._map.values();
        }
        constructor(a) {
            this._map = new Map(a);
        }
    }
}), b.register('GmuQZ', function(r, z) {
    a(r.exports, 'createAudioWorkletNodeRendererFactory', function() {
        return i;
    });
    var c = b('dkf+F'),
        d = b('x2jOu'),
        e = b('WVTmJ'),
        f = b('QC5yV'),
        g = b('o6Hrq'),
        h = b('BRlDZ');
    const i = (a, b, r, z, i, g, u, v, w, x, y, z, A, B, C, s) => (t, u, k) => {
        const j = new WeakMap();
        let k = null;
        const l = async (v, l) => {
            let m = y(v),
                n = null;
            const o = (0, h.isOwnedByContext)(m, l),
                p = Array.isArray(u.outputChannelCount) ? u.outputChannelCount : Array.from(u.outputChannelCount);
            if (null === z) {
                const q = p.reduce((q, b) => q + b, 0),
                    r = i(l, {
                        channelCount: Math.max(1, q),
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        numberOfOutputs: Math.max(1, q)
                    }),
                    s = [];
                for (let t = 0; t < v.numberOfOutputs; t += 1)
                    s.push(z(l, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: p[t]
                    }));
                const u = u(l, {
                    channelCount: u.channelCount,
                    channelCountMode: u.channelCountMode,
                    channelInterpretation: u.channelInterpretation,
                    gain: 1
                });
                u.connect = b.bind(null, s), u.disconnect = w.bind(null, s), n = [
                    r,
                    s,
                    u
                ];
            } else
                o || (m = new z(l, t));
            if (j.set(l, null === n ? m : n[2]), null !== n) {
                if (null === k) {
                    if (void 0 === k)
                        throw new Error('Missing the processor constructor.');
                    if (null === A)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const q = v.channelCount * v.numberOfInputs,
                        r = void 0 === k.parameterDescriptors ? 0 : k.parameterDescriptors.length,
                        s = q + r,
                        t = async () => {
                            const u = new A(s, 128 * Math.ceil(v.context.length / 128), l.sampleRate),
                                v = [],
                                w = [];
                            for (let x = 0; x < u.numberOfInputs; x += 1)
                                v.push(u(u, {
                                    channelCount: u.channelCount,
                                    channelCountMode: u.channelCountMode,
                                    channelInterpretation: u.channelInterpretation,
                                    gain: 1
                                })), w.push(i(u, {
                                    channelCount: u.channelCount,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'discrete',
                                    numberOfOutputs: u.channelCount
                                }));
                            const y = await Promise.all(Array.from(v.parameters.values()).map(async x => {
                                    const z = g(u, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: x.value
                                    });
                                    return await B(u, x, z.offset), z;
                                })),
                                z = z(u, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: Math.max(1, x + r)
                                });
                            for (let A = 0; A < u.numberOfInputs; A += 1) {
                                v[A].connect(w[A]);
                                for (let B = 0; B < u.channelCount; B += 1)
                                    w[A].connect(z, B, A * u.channelCount + B);
                            }
                            for (const [B, C] of y.entries())
                                C.connect(z, 0, A + B), C.start(0);
                            return z.connect(u.destination), await Promise.all(v.map(A => C(v, u, A))), s(u);
                        };
                    k = (async (q, r, s, z, t, i, g) => {
                        const u = null === r ? 128 * Math.ceil(q.context.length / 128) : r.length,
                            v = z.channelCount * z.numberOfInputs,
                            w = t.reduce((q, r) => q + r, 0),
                            x = 0 === w ? null : s.createBuffer(w, u, s.sampleRate);
                        if (void 0 === i)
                            throw new Error('Missing the processor constructor.');
                        const y = (0, f.getAudioNodeConnections)(q),
                            z = await (0, g.getAudioWorkletProcessor)(s, q),
                            A = (0, e.createNestedArrays)(z.numberOfInputs, z.channelCount),
                            B = (0, e.createNestedArrays)(z.numberOfOutputs, t),
                            C = Array.from(q.parameters.keys()).reduce((q, r) => ({
                                ...q,
                                [r]: new Float32Array(128)
                            }), {});
                        for (let D = 0; D < u; D += 128) {
                            if (z.numberOfInputs > 0 && null !== r)
                                for (let E = 0; E < z.numberOfInputs; E += 1)
                                    for (let F = 0; F < z.channelCount; F += 1)
                                        (0, c.copyFromChannel)(r, A[E], F, F, D);
                            void 0 !== i.parameterDescriptors && null !== r && i.parameterDescriptors.forEach(({
                                name: E
                            }, s) => {
                                (0, c.copyFromChannel)(r, C, E, v + s, D);
                            });
                            for (let F = 0; F < z.numberOfInputs; F += 1)
                                for (let G = 0; G < t[F]; G += 1)
                                    0 === B[F][G].byteLength && (B[F][G] = new Float32Array(128));
                            try {
                                const H = A.map((H, G) => 0 === y.activeInputs[G].size ? [] : H),
                                    I = g(D / s.sampleRate, s.sampleRate, () => z.process(H, B, C));
                                if (null !== x)
                                    for (let J = 0, K = 0; J < z.numberOfOutputs; J += 1) {
                                        for (let L = 0; L < t[J]; L += 1)
                                            (0, d.copyToChannel)(x, B[J], L, K + L, D);
                                        K += t[J];
                                    }
                                if (!K)
                                    break;
                            } catch (G) {
                                F.dispatchEvent(new ErrorEvent('processorerror', {
                                    colno: G.colno,
                                    filename: G.filename,
                                    lineno: G.lineno,
                                    message: G.message
                                }));
                                break;
                            }
                        }
                        return x;
                    })(i, 0 === s ? null : await t(), l, u, p, k, f);
                }
                const q = await k,
                    r = y(l, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: 'max',
                        channelInterpretation: 'speakers',
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }),
                    [s, t, u] = v;
                null !== q && (r.buffer = q, r.start(0)), r.connect(s);
                for (let w = 0, x = 0; w < i.numberOfOutputs; w += 1) {
                    const y = t[w];
                    for (let z = 0; z < p[w]; z += 1)
                        s.connect(y, x + z, z);
                    x += p[w];
                }
                return u;
            }
            if (o)
                for (const [q, r] of i.parameters.entries())
                    await a(l, r, m.parameters.get(q));
            else
                for (const [s, t] of i.parameters.entries())
                    await j(l, t, m.parameters.get(s));
            return await r(i, l, m), m;
        };
        return {
            render(a, b) {
                i(b, a);
                const m = j.get(b);
                return void 0 !== m ? Promise.resolve(m) : l(a, b);
            }
        };
    };
}), b.register('dkf+F', function(b, d) {
    function c(a, b, d, c, g) {
        if ('function' == typeof a.copyFromChannel)
            0 === b[d].byteLength && (b[d] = new Float32Array(128)), a.copyFromChannel(b[d], c, g);
        else {
            const d = a.getChannelData(c);
            if (0 === b[d].byteLength)
                b[d] = d.slice(g, g + 128);
            else {
                const e = new Float32Array(d.buffer, g * Float32Array.BYTES_PER_ELEMENT, 128);
                b[d].set(e);
            }
        }
    }
    a(b.exports, 'copyFromChannel', function() {
        return c;
    });
}), b.register('x2jOu', function(b, d) {
    a(b.exports, 'copyToChannel', function() {
        return c;
    });
    const c = (a, b, d, c, g) => {
        'function' == typeof a.copyToChannel ? 0 !== b[d].byteLength && a.copyToChannel(b[d], c, g) : 0 !== b[d].byteLength && a.getChannelData(c).set(b[d], g);
    };
}), b.register('WVTmJ', function(b, d) {
    a(b.exports, 'createNestedArrays', function() {
        return c;
    });
    const c = (a, b) => {
        const d = [];
        for (let e = 0; e < a; e += 1) {
            const f = [],
                g = 'number' == typeof b ? b : b[e];
            for (let h = 0; h < g; h += 1)
                f.push(new Float32Array(128));
            d.push(f);
        }
        return d;
    };
}), b.register('o6Hrq', function(g, h) {
    a(g.exports, 'getAudioWorkletProcessor', function() {
        return f;
    });
    var c = b('GBhK6'),
        d = b('ztwLu'),
        e = b('wVe0j');
    const f = (a, b) => {
        const g = (0, e.getValueForKey)(c.NODE_TO_PROCESSOR_MAPS, a),
            h = (0, d.getNativeAudioNode)(b);
        return (0, e.getValueForKey)(g, h);
    };
}), b.register('Via4K', function(b, g) {
    a(b.exports, 'createBaseAudioContextConstructor', function() {
        return c;
    });
    const c = (a, b, g, c, c, d, e, e, f, f, f, g, h, i, j, f, n, o, p, j) => class extends j {
        get audioWorklet() {
            return this._audioWorklet;
        }
        createAnalyser() {
            return new b(this);
        }
        createBiquadFilter() {
            return new c(this);
        }
        createBuffer(a, b, c) {
            return new g({
                length: b,
                numberOfChannels: a,
                sampleRate: c
            });
        }
        createBufferSource() {
            return new c(this);
        }
        createChannelMerger(d = 6) {
            return new d(this, {
                numberOfInputs: d
            });
        }
        createChannelSplitter(e = 6) {
            return new e(this, {
                numberOfOutputs: e
            });
        }
        createConstantSource() {
            return new e(this);
        }
        createConvolver() {
            return new f(this);
        }
        createDelay(f = 1) {
            return new f(this, {
                maxDelayTime: f
            });
        }
        createDynamicsCompressor() {
            return new g(this);
        }
        createGain() {
            return new h(this);
        }
        createIIRFilter(f, b) {
            return new i(this, {
                feedback: b,
                feedforward: f
            });
        }
        createOscillator() {
            return new f(this);
        }
        createPanner() {
            return new n(this);
        }
        createPeriodicWave(f, b, g = {
            disableNormalization: !1
        }) {
            return new o(this, {
                ...g,
                imag: b,
                real: f
            });
        }
        createStereoPanner() {
            return new p(this);
        }
        createWaveShaper() {
            return new j(this);
        }
        decodeAudioData(f, b, g) {
            return f(this._nativeContext, f).then(f => ('function' == typeof b && b(f), f), f => {
                throw 'function' == typeof g && g(f), f;
            });
        }
        constructor(b, g) {
            super(b, g), this._nativeContext = b, this._audioWorklet = void 0 === f ? void 0 : {
                addModule: (b, g) => f(this, b, g)
            };
        }
    };
}), b.register('rUyEv', function(j, c) {
    a(j.exports, 'createBiquadFilterNodeConstructor', function() {
        return e;
    });
    var c = b('0D9Ao');
    const d = {
            Q: 1,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 350,
            gain: 0,
            type: 'lowpass'
        },
        e = (a, b, j, c, e, e, f, f) => class extends a {
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
            set type(a) {
                this._nativeBiquadFilterNode.type = a;
            }
            getFrequencyResponse(a, b, j) {
                try {
                    this._nativeBiquadFilterNode.getFrequencyResponse(a, b, j);
                } catch (a) {
                    if (11 === a.code)
                        throw c();
                    throw a;
                }
                if (a.length !== b.length || b.length !== j.length)
                    throw c();
            }
            constructor(a, c) {
                const f = e(a),
                    g = {
                        ...d,
                        ...c
                    },
                    h = e(f, g),
                    i = f(f);
                super(a, !1, h, i ? j() : null), this._Q = b(this, i, h.Q, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), this._detune = b(this, i, h.detune, 1200 * Math.log2(c.MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(c.MOST_POSITIVE_SINGLE_FLOAT)), this._frequency = b(this, i, h.frequency, a.sampleRate / 2, 0), this._gain = b(this, i, h.gain, 40 * Math.log10(c.MOST_POSITIVE_SINGLE_FLOAT), c.MOST_NEGATIVE_SINGLE_FLOAT), this._nativeBiquadFilterNode = h, f(this, 1);
            }
        };
}), b.register('9rLaL', function(j, c) {
    a(j.exports, 'createBiquadFilterNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, j, c, d) => () => {
        const e = new WeakMap();
        return {
            render(e, f) {
                const f = e.get(f);
                return void 0 !== f ? Promise.resolve(f) : (async (e, f) => {
                    let g = j(e);
                    const h = (0, c.isOwnedByContext)(g, f);
                    if (!h) {
                        const i = {
                            Q: g.Q.value,
                            channelCount: g.channelCount,
                            channelCountMode: g.channelCountMode,
                            channelInterpretation: g.channelInterpretation,
                            detune: g.detune.value,
                            frequency: g.frequency.value,
                            gain: g.gain.value,
                            type: g.type
                        };
                        g = b(f, i);
                    }
                    return e.set(f, g), h ? (await a(f, e.Q, g.Q), await a(f, e.detune, g.detune), await a(f, e.frequency, g.frequency), await a(f, e.gain, g.gain)) : (await c(f, e.Q, g.Q), await c(f, e.detune, g.detune), await c(f, e.frequency, g.frequency), await c(f, e.gain, g.gain)), await d(e, f, g), g;
                })(e, f);
            }
        };
    };
}), b.register('cNSpP', function(b, j) {
    a(b.exports, 'createCacheTestResult', function() {
        return c;
    });
    const c = (a, b) => (j, c) => {
        const d = b.get(j);
        if (void 0 !== d)
            return d;
        const e = a.get(j);
        if (void 0 !== e)
            return e;
        try {
            const f = c();
            return f instanceof Promise ? (a.set(j, f), f.catch(() => !1).then(c => (a.delete(j), b.set(j, c), c))) : (b.set(j, f), f);
        } catch {
            return b.set(j, !1), !1;
        }
    };
}), b.register('qhsnV', function(b, j) {
    a(b.exports, 'createChannelMergerNodeConstructor', function() {
        return d;
    });
    const c = {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 6
        },
        d = (a, b, j, d, d) => class extends a {
            constructor(a, g) {
                const e = d(a),
                    f = {
                        ...c,
                        ...g
                    };
                super(a, !1, j(e, f), d(e) ? b() : null);
            }
        };
}), b.register('/GtNx', function(j, e) {
    a(j.exports, 'createChannelMergerNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, j) => () => {
        const e = new WeakMap();
        return {
            render(d, g) {
                const f = e.get(g);
                return void 0 !== f ? Promise.resolve(f) : (async (d, g) => {
                    let g = b(d);
                    if (!(0, c.isOwnedByContext)(g, g)) {
                        const h = {
                            channelCount: g.channelCount,
                            channelCountMode: g.channelCountMode,
                            channelInterpretation: g.channelInterpretation,
                            numberOfInputs: g.numberOfInputs
                        };
                        g = a(g, h);
                    }
                    return e.set(g, g), await j(d, g, g), g;
                })(d, g);
            }
        };
    };
}), b.register('AjJqr', function(b, j) {
    a(b.exports, 'createChannelSplitterNodeConstructor', function() {
        return d;
    });
    const c = {
            channelCount: 6,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: 6
        },
        d = (a, b, j, d, d, g) => class extends a {
            constructor(a, f) {
                const e = d(a),
                    f = g({
                        ...c,
                        ...f
                    });
                super(a, !1, j(e, f), d(e) ? b() : null);
            }
        };
}), b.register('KVQM7', function(j, e) {
    a(j.exports, 'createChannelSplitterNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, j) => () => {
        const e = new WeakMap();
        return {
            render(d, g) {
                const f = e.get(g);
                return void 0 !== f ? Promise.resolve(f) : (async (d, g) => {
                    let g = b(d);
                    if (!(0, c.isOwnedByContext)(g, g)) {
                        const h = {
                            channelCount: g.channelCount,
                            channelCountMode: g.channelCountMode,
                            channelInterpretation: g.channelInterpretation,
                            numberOfOutputs: g.numberOfOutputs
                        };
                        g = a(g, h);
                    }
                    return e.set(g, g), await j(d, g, g), g;
                })(d, g);
            }
        };
    };
}), b.register('Blkm+', function(b, j) {
    a(b.exports, 'createConnectAudioParam', function() {
        return c;
    });
    const c = a => (b, j, c) => a(j, b, c);
}), b.register('k6WHE', function(j, e) {
    a(j.exports, 'createConnectMultipleOutputs', function() {
        return d;
    });
    var c = b('b3yGw');
    const d = a => (b, j, e = 0, f = 0) => {
        const g = b[e];
        if (void 0 === g)
            throw a();
        return (0, c.isNativeAudioNode)(j) ? g.connect(j, 0, f) : g.connect(j, 0);
    };
}), b.register('/qdYr', function(b, j) {
    a(b.exports, 'createConnectedNativeAudioBufferSourceNodeFactory', function() {
        return c;
    });
    const c = a => (b, j) => {
        const d = a(b, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            e = b.createBuffer(1, 2, 44100);
        return d.buffer = e, d.loop = !0, d.connect(j), d.start(), () => {
            d.stop(), d.disconnect(j);
        };
    };
}), b.register('FUyBX', function(j, c) {
    a(j.exports, 'createConstantSourceNodeConstructor', function() {
        return h;
    });
    var c = b('0D9Ao'),
        d = b('8fUiO'),
        e = b('vL9Ob'),
        f = b('gVhQ2');
    const g = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            offset: 1
        },
        h = (a, b, j, c, h, g, m) => class extends a {
            get offset() {
                return this._offset;
            }
            get onended() {
                return this._onended;
            }
            set onended(a) {
                const i = 'function' == typeof a ? m(this, a) : null;
                this._nativeConstantSourceNode.onended = i;
                const j = this._nativeConstantSourceNode.onended;
                this._onended = null !== j && j === i ? a : j;
            }
            start(i = 0) {
                if (this._nativeConstantSourceNode.start(i), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = i), 'closed' !== this.context.state) {
                    (0, e.setInternalStateToActive)(this);
                    const j = () => {
                        this._nativeConstantSourceNode.removeEventListener('ended', j), (0, d.isActiveAudioNode)(this) && (0, f.setInternalStateToPassive)(this);
                    };
                    this._nativeConstantSourceNode.addEventListener('ended', j);
                }
            }
            stop(j = 0) {
                this._nativeConstantSourceNode.stop(j), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = j);
            }
            constructor(j, d) {
                const k = h(j),
                    l = {
                        ...g,
                        ...d
                    },
                    m = c(k, l),
                    n = g(k),
                    o = n ? e() : null;
                super(j, !1, m, o), this._constantSourceNodeRenderer = o, this._nativeConstantSourceNode = m, this._offset = b(this, n, m.offset, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), this._onended = null;
            }
        };
}), b.register('iKkw6', function(e, c) {
    a(e.exports, 'createConstantSourceNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, e, c, d) => () => {
        const e = new WeakMap();
        let f = null,
            g = null;
        return {
            set start(a) {
                f = a;
            },
            set stop(a) {
                g = a;
            },
            render(f, g) {
                const h = e.get(g);
                return void 0 !== h ? Promise.resolve(h) : (async (f, g) => {
                    let i = e(f);
                    const j = (0, c.isOwnedByContext)(i, g);
                    if (!j) {
                        const k = {
                            channelCount: i.channelCount,
                            channelCountMode: i.channelCountMode,
                            channelInterpretation: i.channelInterpretation,
                            offset: i.offset.value
                        };
                        i = b(g, k), null !== f && i.start(f), null !== g && i.stop(g);
                    }
                    return e.set(g, i), j ? await a(g, f.offset, i.offset) : await c(g, f.offset, i.offset), await d(f, g, i), i;
                })(f, g);
            }
        };
    };
}), b.register('Cvocb', function(b, e) {
    a(b.exports, 'createConvertNumberToUnsignedLong', function() {
        return c;
    });
    const c = a => b => (a[0] = b, a[0]);
}), b.register('znSI8', function(b, e) {
    a(b.exports, 'createConvolverNodeConstructor', function() {
        return d;
    });
    const c = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            disableNormalization: !1
        },
        d = (a, b, e, d, d, e) => class extends a {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeConvolverNode.buffer;
            }
            set buffer(a) {
                if (this._nativeConvolverNode.buffer = a, null === a && null !== this._nativeConvolverNode.buffer) {
                    const e = this._nativeConvolverNode.context;
                    this._nativeConvolverNode.buffer = e.createBuffer(1, 1, e.sampleRate), this._isBufferNullified = !0, e(this, 0);
                } else
                    this._isBufferNullified = !1, e(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration);
            }
            get normalize() {
                return this._nativeConvolverNode.normalize;
            }
            set normalize(a) {
                this._nativeConvolverNode.normalize = a;
            }
            constructor(a, h) {
                const e = d(a),
                    f = {
                        ...c,
                        ...h
                    },
                    g = e(e, f);
                super(a, !1, g, d(e) ? b() : null), this._isBufferNullified = !1, this._nativeConvolverNode = g, null !== f.buffer && e(this, f.buffer.duration);
            }
        };
}), b.register('iTVzf', function(e, f) {
    a(e.exports, 'createConvolverNodeRendererFactory', function() {
        return e;
    });
    var c = b('JoVZe'),
        d = b('BRlDZ');
    const e = (a, b, e) => () => {
        const f = new WeakMap();
        return {
            render(e, h) {
                const g = f.get(h);
                return void 0 !== g ? Promise.resolve(g) : (async (e, h) => {
                    let h = b(e);
                    if (!(0, d.isOwnedByContext)(h, h)) {
                        const i = {
                            buffer: h.buffer,
                            channelCount: h.channelCount,
                            channelCountMode: h.channelCountMode,
                            channelInterpretation: h.channelInterpretation,
                            disableNormalization: !h.normalize
                        };
                        h = a(h, i);
                    }
                    return f.set(h, h), (0, c.isNativeAudioNodeFaker)(h) ? await e(e, h, h.inputs[0]) : await e(e, h, h), h;
                })(e, h);
            }
        };
    };
}), b.register('6VoVu', function(b, e) {
    a(b.exports, 'createCreateNativeOfflineAudioContext', function() {
        return c;
    });
    const c = (a, b) => (e, c, c) => {
        if (null === b)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        try {
            return new b(e, c, c);
        } catch (b) {
            if ('SyntaxError' === b.name)
                throw a();
            throw b;
        }
    };
}), b.register('zRQRG', function(b, e) {
    a(b.exports, 'createDataCloneError', function() {
        return c;
    });
    const c = () => new DOMException('', 'DataCloneError');
}), b.register('Ldxxk', function(e, c) {
    a(e.exports, 'createDecodeAudioData', function() {
        return e;
    });
    var c = b('e+7gF'),
        d = b('0+f0e');
    const e = (a, b, e, c, e, h, f, e, f, e, f) => (g, j) => {
        const f = f(g) ? g : h(g);
        if (e.has(j)) {
            const g = e();
            return Promise.reject(g);
        }
        try {
            e.add(j);
        } catch {}
        return b(f, () => f(f)) ? f.decodeAudioData(j).then(e => ((0, c.detachArrayBuffer)(j).catch(() => {}), b(e, () => e(e)) || f(e), a.add(e), e)) : new Promise((b, e) => {
            const g = async () => {
                try {
                    await (0, c.detachArrayBuffer)(j);
                } catch {}
            }, h = a => {
                e(a), g();
            };
            try {
                f.decodeAudioData(j, e => {
                    'function' != typeof e.copyFromChannel && (e(e), (0, d.wrapAudioBufferGetChannelDataMethod)(e)), a.add(e), g().then(() => b(e));
                }, a => {
                    h(null === a ? c() : a);
                });
            } catch (a) {
                h(a);
            }
        });
    };
}), b.register('e+7gF', function(b, e) {
    a(b.exports, 'detachArrayBuffer', function() {
        return c;
    });
    const c = a => {
        const {
            port1: d,
            port2: e
        } = new MessageChannel();
        return new Promise(c => {
            const f = () => {
                e.onmessage = null, d.close(), e.close(), c();
            };
            e.onmessage = () => f();
            try {
                d.postMessage(a, [a]);
            } finally {
                f();
            }
        });
    };
}), b.register('vpxhg', function(j, c) {
    a(j.exports, 'createDecrementCycleCounter', function() {
        return d;
    });
    var c = b('D0C9f');
    const d = (a, b, j, c, d, i, e, f) => (e, f) => {
        const e = b.get(e);
        if (void 0 === e)
            throw new Error('Missing the expected cycle count.');
        const f = i(e.context),
            g = f(f);
        if (e === f) {
            if (b.delete(e), !g && e(e)) {
                const h = c(e),
                    {
                        outputs: i
                    } = j(e);
                for (const j of i)
                    if ((0, c.isAudioNodeOutputConnection)(j)) {
                        const k = c(j[0]);
                        a(h, k, j[1], j[2]);
                    } else {
                        const l = d(j[0]);
                        h.connect(l, j[1]);
                    }
            }
        } else
            b.set(e, e - f);
    };
}), b.register('V4Iws', function(b, d) {
    a(b.exports, 'createDelayNodeConstructor', function() {
        return d;
    });
    const c = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            delayTime: 0,
            maxDelayTime: 1
        },
        d = (a, b, d, d, d, e, e) => class extends a {
            get delayTime() {
                return this._delayTime;
            }
            constructor(a, f) {
                const e = d(a),
                    f = {
                        ...c,
                        ...f
                    },
                    g = d(e, f),
                    h = e(e);
                super(a, !1, g, h ? d(f.maxDelayTime) : null), this._delayTime = b(this, h, g.delayTime), e(this, f.maxDelayTime);
            }
        };
}), b.register('LCSra', function(d, c) {
    a(d.exports, 'createDelayNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, d, c, d) => e => {
        const e = new WeakMap();
        return {
            render(f, g) {
                const f = e.get(g);
                return void 0 !== f ? Promise.resolve(f) : (async (f, g) => {
                    let g = d(f);
                    const h = (0, c.isOwnedByContext)(g, g);
                    if (!h) {
                        const i = {
                            channelCount: g.channelCount,
                            channelCountMode: g.channelCountMode,
                            channelInterpretation: g.channelInterpretation,
                            delayTime: g.delayTime.value,
                            maxDelayTime: e
                        };
                        g = b(g, i);
                    }
                    return e.set(g, g), h ? await a(g, f.delayTime, g.delayTime) : await c(g, f.delayTime, g.delayTime), await d(f, g, g), g;
                })(f, g);
            }
        };
    };
}), b.register('wJVa8', function(b, d) {
    a(b.exports, 'createDeleteActiveInputConnectionToAudioNode', function() {
        return c;
    });
    const c = a => (b, d, c, c) => a(b[c], a => a[0] === d && a[1] === c);
}), b.register('LoJUH', function(b, d) {
    a(b.exports, 'createDeleteUnrenderedAudioWorkletNode', function() {
        return c;
    });
    const c = a => (b, d) => {
        a(b).delete(d);
    };
}), b.register('au8QZ', function(d, c) {
    a(d.exports, 'createDetectCycles', function() {
        return e;
    });
    var c = b('21mpK'),
        d = b('xXPIM');
    const e = (a, b, d) => function c(e, g) {
        const f = (0, c.isAudioNode)(g) ? g : d(a, g);
        if ((0, d.isDelayNode)(f))
            return [];
        if (e[0] === f)
            return [e];
        if (e.includes(f))
            return [];
        const {
            outputs: g
        } = b(f);
        return Array.from(g).map(a => c([
            ...e,
            f
        ], a[0])).reduce((a, b) => a.concat(b), []);
    };
}), b.register('xXPIM', function(b, d) {
    a(b.exports, 'isDelayNode', function() {
        return c;
    });
    const c = a => 'delayTime' in a;
}), b.register('bDQsh', function(d, e) {
    a(d.exports, 'createDisconnectMultipleOutputs', function() {
        return e;
    });
    var c = b('b3yGw');
    const d = (a, b, d) => {
            const e = b[d];
            if (void 0 === e)
                throw a();
            return e;
        },
        e = a => (b, d, c, f = 0) => void 0 === d ? b.forEach(a => a.disconnect()) : 'number' == typeof d ? d(a, b, d).disconnect() : (0, c.isNativeAudioNode)(d) ? void 0 === c ? b.forEach(a => a.disconnect(d)) : void 0 === f ? d(a, b, c).disconnect(d, 0) : d(a, b, c).disconnect(d, 0, f) : void 0 === c ? b.forEach(a => a.disconnect(d)) : d(a, b, c).disconnect(d, 0);
}), b.register('eW9cF', function(b, d) {
    a(b.exports, 'createDynamicsCompressorNodeConstructor', function() {
        return d;
    });
    const c = {
            attack: 0.003,
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            knee: 30,
            ratio: 12,
            release: 0.25,
            threshold: -24
        },
        d = (a, b, d, d, d, e, g, h) => class extends a {
            get attack() {
                return this._attack;
            }
            get channelCount() {
                return this._nativeDynamicsCompressorNode.channelCount;
            }
            set channelCount(a) {
                const e = this._nativeDynamicsCompressorNode.channelCount;
                if (this._nativeDynamicsCompressorNode.channelCount = a, a > 2)
                    throw this._nativeDynamicsCompressorNode.channelCount = e, d();
            }
            get channelCountMode() {
                return this._nativeDynamicsCompressorNode.channelCountMode;
            }
            set channelCountMode(a) {
                const e = this._nativeDynamicsCompressorNode.channelCountMode;
                if (this._nativeDynamicsCompressorNode.channelCountMode = a, 'max' === a)
                    throw this._nativeDynamicsCompressorNode.channelCountMode = e, d();
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
            constructor(a, d) {
                const e = e(a),
                    f = {
                        ...c,
                        ...d
                    },
                    g = d(e, f),
                    h = g(e);
                super(a, !1, g, h ? d() : null), this._attack = b(this, h, g.attack), this._knee = b(this, h, g.knee), this._nativeDynamicsCompressorNode = g, this._ratio = b(this, h, g.ratio), this._release = b(this, h, g.release), this._threshold = b(this, h, g.threshold), h(this, 0.006);
            }
        };
}), b.register('FaDO6', function(d, c) {
    a(d.exports, 'createDynamicsCompressorNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, d, c, d) => () => {
        const e = new WeakMap();
        return {
            render(g, h) {
                const f = e.get(h);
                return void 0 !== f ? Promise.resolve(f) : (async (g, h) => {
                    let g = d(g);
                    const h = (0, c.isOwnedByContext)(g, h);
                    if (!h) {
                        const i = {
                            attack: g.attack.value,
                            channelCount: g.channelCount,
                            channelCountMode: g.channelCountMode,
                            channelInterpretation: g.channelInterpretation,
                            knee: g.knee.value,
                            ratio: g.ratio.value,
                            release: g.release.value,
                            threshold: g.threshold.value
                        };
                        g = b(h, i);
                    }
                    return e.set(h, g), h ? (await a(h, g.attack, g.attack), await a(h, g.knee, g.knee), await a(h, g.ratio, g.ratio), await a(h, g.release, g.release), await a(h, g.threshold, g.threshold)) : (await c(h, g.attack, g.attack), await c(h, g.knee, g.knee), await c(h, g.ratio, g.ratio), await c(h, g.release, g.release), await c(h, g.threshold, g.threshold)), await d(g, h, g), g;
                })(g, h);
            }
        };
    };
}), b.register('WXQq4', function(b, d) {
    a(b.exports, 'createEncodingError', function() {
        return c;
    });
    const c = () => new DOMException('', 'EncodingError');
}), b.register('JXLFs', function(b, d) {
    a(b.exports, 'createEvaluateSource', function() {
        return c;
    });
    const c = a => b => new Promise((d, c) => {
        if (null === a)
            return void c(new SyntaxError());
        const d = a.document.head;
        if (null === d)
            c(new SyntaxError());
        else {
            const e = a.document.createElement('script'),
                f = new Blob([b], {
                    type: 'application/javascript'
                }),
                g = URL.createObjectURL(f),
                h = a.onerror,
                i = () => {
                    a.onerror = h, URL.revokeObjectURL(g);
                };
            a.onerror = (b, d, d, e, f) => d === g || d === a.location.href && 1 === d && 1 === e ? (i(), c(f), !1) : null !== h ? h(b, d, d, e, f) : void 0, e.onerror = () => {
                i(), c(new SyntaxError());
            }, e.onload = () => {
                i(), d();
            }, e.src = g, e.type = 'module', d.appendChild(e);
        }
    });
}), b.register('qxDVb', function(b, d) {
    a(b.exports, 'createEventTargetConstructor', function() {
        return c;
    });
    const c = a => class {
        addEventListener(b, d, c) {
            if (null !== d) {
                let d = this._listeners.get(d);
                void 0 === d && (d = a(this, d), 'function' == typeof d && this._listeners.set(d, d)), this._nativeEventTarget.addEventListener(b, d, c);
            }
        }
        dispatchEvent(a) {
            return this._nativeEventTarget.dispatchEvent(a);
        }
        removeEventListener(a, b, d) {
            const d = null === b ? void 0 : this._listeners.get(b);
            this._nativeEventTarget.removeEventListener(a, void 0 === d ? null : d, d);
        }
        constructor(a) {
            this._nativeEventTarget = a, this._listeners = new WeakMap();
        }
    };
}), b.register('YVaEa', function(b, d) {
    a(b.exports, 'createExposeCurrentFrameAndCurrentTime', function() {
        return c;
    });
    const c = a => (b, d, c) => {
        Object.defineProperties(a, {
            currentFrame: {
                configurable: !0,
                get: () => Math.round(b * d)
            },
            currentTime: {
                configurable: !0,
                get: () => b
            }
        });
        try {
            return c();
        } finally {
            null !== a && (delete a.currentFrame, delete a.currentTime);
        }
    };
}), b.register('llF2t', function(b, d) {
    a(b.exports, 'createFetchSource', function() {
        return c;
    });
    const c = a => async b => {
        try {
            const d = await fetch(b);
            if (d.ok)
                return [
                    await d.text(),
                    d.url
                ];
        } catch {}
        throw a();
    };
}), b.register('jNvSL', function(d, c) {
    a(d.exports, 'createGainNodeConstructor', function() {
        return e;
    });
    var c = b('0D9Ao');
    const d = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            gain: 1
        },
        e = (a, b, d, c, e, o) => class extends a {
            get gain() {
                return this._gain;
            }
            constructor(a, p) {
                const f = e(a),
                    g = {
                        ...d,
                        ...p
                    },
                    h = c(f, g),
                    i = o(f);
                super(a, !1, h, i ? d() : null), this._gain = b(this, i, h.gain, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), b.register('+M8Yz', function(d, c) {
    a(d.exports, 'createGainNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, d, c, d) => () => {
        const e = new WeakMap();
        return {
            render(o, p) {
                const f = e.get(p);
                return void 0 !== f ? Promise.resolve(f) : (async (o, p) => {
                    let g = d(o);
                    const h = (0, c.isOwnedByContext)(g, p);
                    if (!h) {
                        const i = {
                            channelCount: g.channelCount,
                            channelCountMode: g.channelCountMode,
                            channelInterpretation: g.channelInterpretation,
                            gain: g.gain.value
                        };
                        g = b(p, i);
                    }
                    return e.set(p, g), h ? await a(p, o.gain, g.gain) : await c(p, o.gain, g.gain), await d(o, p, g), g;
                })(o, p);
            }
        };
    };
}), b.register('A4rT9', function(b, d) {
    a(b.exports, 'createGetActiveAudioWorkletNodeInputs', function() {
        return c;
    });
    const c = (a, b) => d => b(a, d);
}), b.register('wBsqC', function(b, d) {
    a(b.exports, 'createGetAudioNodeRenderer', function() {
        return c;
    });
    const c = a => b => {
        const d = a(b);
        if (null === d.renderer)
            throw new Error('Missing the renderer of the given AudioNode in the audio graph.');
        return d.renderer;
    };
}), b.register('drn0D', function(b, d) {
    a(b.exports, 'createGetAudioNodeTailTime', function() {
        return c;
    });
    const c = a => b => {
        var d;
        return null !== (d = a.get(b)) && void 0 !== d ? d : 0;
    };
}), b.register('5xFZD', function(b, d) {
    a(b.exports, 'createGetAudioParamRenderer', function() {
        return c;
    });
    const c = a => b => {
        const d = a(b);
        if (null === d.renderer)
            throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
        return d.renderer;
    };
}), b.register('X1vpW', function(b, e) {
    a(b.exports, 'createGetBackupOfflineAudioContext', function() {
        return c;
    });
    const c = a => b => a.get(b);
}), b.register('ACLEb', function(e, c) {
    a(e.exports, 'createGetNativeContext', function() {
        return d;
    });
    var c = b('Nb/UW');
    const d = a => b => {
        const e = a.get(b);
        if (void 0 === e)
            throw (0, c.createInvalidStateError)();
        return e;
    };
}), b.register('Nb/UW', function(b, d) {
    a(b.exports, 'createInvalidStateError', function() {
        return c;
    });
    const c = () => new DOMException('', 'InvalidStateError');
}), b.register('rl1IO', function(b, d) {
    a(b.exports, 'createGetOrCreateBackupOfflineAudioContext', function() {
        return c;
    });
    const c = (a, b) => d => {
        let d = a.get(d);
        if (void 0 !== d)
            return d;
        if (null === b)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        return d = new b(1, 1, 44100), a.set(d, d), d;
    };
}), b.register('4kuMl', function(b, d) {
    a(b.exports, 'createGetUnrenderedAudioWorkletNodes', function() {
        return c;
    });
    const c = a => b => {
        const d = a.get(b);
        if (void 0 === d)
            throw new Error('The context has no set of AudioWorkletNodes.');
        return d;
    };
}), b.register('zGnbi', function(w, c) {
    a(w.exports, 'createIIRFilterNodeConstructor', function() {
        return e;
    });
    var c = b('Rr+yH');
    const d = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers'
        },
        e = (a, b, w, c, e, o) => class extends a {
            getFrequencyResponse(a, b, w) {
                return this._nativeIIRFilterNode.getFrequencyResponse(a, b, w);
            }
            constructor(a, p) {
                const f = c(a),
                    g = e(f),
                    h = {
                        ...d,
                        ...p
                    },
                    i = b(f, g ? null : a.baseLatency, h);
                super(a, !1, i, g ? w(h.feedback, h.feedforward) : null), (0, c.wrapIIRFilterNodeGetFrequencyResponseMethod)(i), this._nativeIIRFilterNode = i, o(this, 1);
            }
        };
}), b.register('Rr+yH', function(w, c) {
    a(w.exports, 'wrapIIRFilterNodeGetFrequencyResponseMethod', function() {
        return d;
    });
    var c = b('BQZzx');
    const d = a => {
        var e;
        a.getFrequencyResponse = (e = a.getFrequencyResponse, (w, c, d) => {
            if (w.length !== c.length || c.length !== d.length)
                throw (0, c.createInvalidAccessError)();
            return e.call(a, w, c, d);
        });
    };
}), b.register('BQZzx', function(b, w) {
    a(b.exports, 'createInvalidAccessError', function() {
        return c;
    });
    const c = () => new DOMException('', 'InvalidAccessError');
}), b.register('/iAko', function(w, x) {
    a(w.exports, 'createIIRFilterNodeRendererFactory', function() {
        return e;
    });
    var c = b('HBKUG'),
        d = b('BRlDZ');
    const e = (a, b, w, x, e) => (o, p) => {
        const f = new WeakMap();
        let g = null;
        const h = async (h, t) => {
            let i = null,
                j = b(h);
            const k = (0, d.isOwnedByContext)(j, t);
            if (void 0 === t.createIIRFilter ? i = a(t, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: 'max',
                    channelInterpretation: 'speakers',
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                }) : k || (j = t.createIIRFilter(p, o)), f.set(t, null === i ? j : i), null !== i) {
                if (null === g) {
                    if (null === w)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const l = new w(h.context.destination.channelCount, h.context.length, t.sampleRate);
                    g = (async () => {
                        await x(h, l, l.destination);
                        return ((l, b, w, x) => {
                            const m = w instanceof Float64Array ? w : new Float64Array(w),
                                n = x instanceof Float64Array ? x : new Float64Array(x),
                                o = m.length,
                                p = n.length,
                                q = Math.min(o, p);
                            if (1 !== m[0]) {
                                for (let r = 0; r < o; r += 1)
                                    n[r] /= m[0];
                                for (let s = 1; s < p; s += 1)
                                    m[s] /= m[0];
                            }
                            const r = new Float32Array(32),
                                s = new Float32Array(32),
                                t = b.createBuffer(l.numberOfChannels, l.length, l.sampleRate),
                                u = l.numberOfChannels;
                            for (let v = 0; v < u; v += 1) {
                                const w = l.getChannelData(v),
                                    x = t.getChannelData(v);
                                r.fill(0), s.fill(0), (0, c.filterBuffer)(m, o, n, p, q, r, s, 0, 32, w, x);
                            }
                            return t;
                        })(await e(l), e, f, g);
                    })();
                }
                const l = await g;
                return i.buffer = l, i.start(0), i;
            }
            return await c(h, e, j), j;
        };
        return {
            render(a, b) {
                const i = f.get(b);
                return void 0 !== i ? Promise.resolve(i) : h(a, b);
            }
        };
    };
}), b.register('HBKUG', function(b, l) {
    a(b.exports, 'filterBuffer', function() {
        return c;
    });
    const c = (a, b, l, c, k, d, g, f, g, i, e) => {
        const d = i.length;
        let e = f;
        for (let g = 0; g < d; g += 1) {
            let h = l[0] * i[g];
            for (let i = 1; i < k; i += 1) {
                const j = e - i & g - 1;
                h += l[i] * d[j], h -= a[i] * g[j];
            }
            for (let j = k; j < c; j += 1)
                h += l[j] * d[e - j & g - 1];
            for (let l = m; l < i; l += 1)
                h -= j[l] * g[e - l & g - 1];
            d[e] = i[g], g[e] = h, e = e + 1 & g - 1, e[g] = h;
        }
        return e;
    };
}), b.register('putA0', function(h, c) {
    a(h.exports, 'createIncrementCycleCounterFactory', function() {
        return d;
    });
    var c = b('D0C9f');
    const d = (a, b, h, c, d, g) => f => (g, i) => {
        const e = a.get(g);
        if (void 0 === e) {
            if (!f && g(g)) {
                const f = c(g),
                    {
                        outputs: g
                    } = h(g);
                for (const h of g)
                    if ((0, c.isAudioNodeOutputConnection)(h)) {
                        const i = c(h[0]);
                        b(f, i, h[1], h[2]);
                    } else {
                        const j = d(h[0]);
                        f.disconnect(j, h[1]);
                    }
            }
            a.set(g, i);
        } else
            a.set(g, e + i);
    };
}), b.register('J/QcH', function(b, f) {
    a(b.exports, 'createIsAnyAudioContext', function() {
        return c;
    });
    const c = (a, b) => f => {
        const d = a.get(f);
        return b(d) || b(f);
    };
}), b.register('pMC+4', function(b, f) {
    a(b.exports, 'createIsAnyAudioNode', function() {
        return c;
    });
    const c = (a, b) => f => a.has(f) || b(f);
}), b.register('TlgaO', function(b, f) {
    a(b.exports, 'createIsAnyAudioParam', function() {
        return c;
    });
    const c = (a, b) => f => a.has(f) || b(f);
}), b.register('f7syP', function(b, f) {
    a(b.exports, 'createIsAnyOfflineAudioContext', function() {
        return c;
    });
    const c = (a, b) => f => {
        const d = a.get(f);
        return b(d) || b(f);
    };
}), b.register('L4MVA', function(b, f) {
    a(b.exports, 'createIsNativeAudioContext', function() {
        return c;
    });
    const c = a => b => null !== a && b instanceof a;
}), b.register('vY7T5', function(b, f) {
    a(b.exports, 'createIsNativeAudioNode', function() {
        return c;
    });
    const c = a => b => null !== a && 'function' == typeof a.AudioNode && b instanceof a.AudioNode;
}), b.register('zNKwY', function(b, f) {
    a(b.exports, 'createIsNativeAudioParam', function() {
        return c;
    });
    const c = a => b => null !== a && 'function' == typeof a.AudioParam && b instanceof a.AudioParam;
}), b.register('zXbgA', function(b, f) {
    a(b.exports, 'createIsNativeContext', function() {
        return c;
    });
    const c = (a, b) => f => a(f) || b(f);
}), b.register('wnCnY', function(b, f) {
    a(b.exports, 'createIsNativeOfflineAudioContext', function() {
        return c;
    });
    const c = a => b => null !== a && b instanceof a;
}), b.register('x+zpQ', function(b, f) {
    a(b.exports, 'createIsSecureContext', function() {
        return c;
    });
    const c = a => null !== a && a.isSecureContext;
}), b.register('AHUTz', function(b, f) {
    a(b.exports, 'createIsSupportedPromise', function() {
        return c;
    });
    const c = async (a, b, f, c, d, d, e, f, g, i, i, j, e, f, l, m) => {
        if (a(b, b) && a(f, f) && a(d, d) && a(d, d) && a(f, f) && a(g, g) && a(i, i) && a(i, i) && a(j, j) && a(e, e) && a(f, f)) {
            return (await Promise.all([
                a(c, c),
                a(e, e),
                a(l, l),
                a(m, m)
            ])).every(a => a);
        }
        return !1;
    };
}), b.register('TNeCp', function(b, f) {
    a(b.exports, 'createMediaElementAudioSourceNodeConstructor', function() {
        return c;
    });
    const c = (a, b, f, c) => class extends a {
        get mediaElement() {
            return this._nativeMediaElementAudioSourceNode.mediaElement;
        }
        constructor(a, d) {
            const d = f(a),
                e = b(d, d);
            if (c(d))
                throw TypeError();
            super(a, !0, e, null), this._nativeMediaElementAudioSourceNode = e;
        }
    };
}), b.register('/5MWs', function(b, f) {
    a(b.exports, 'createMediaStreamAudioDestinationNodeConstructor', function() {
        return d;
    });
    const c = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers'
        },
        d = (a, b, f, d) => class extends a {
            get stream() {
                return this._nativeMediaStreamAudioDestinationNode.stream;
            }
            constructor(a, d) {
                const e = f(a);
                if (d(e))
                    throw new TypeError();
                const f = {
                        ...c,
                        ...d
                    },
                    g = b(e, f);
                super(a, !1, g, null), this._nativeMediaStreamAudioDestinationNode = g;
            }
        };
}), b.register('ef83U', function(b, f) {
    a(b.exports, 'createMediaStreamAudioSourceNodeConstructor', function() {
        return c;
    });
    const c = (a, b, f, c) => class extends a {
        get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream;
        }
        constructor(a, d) {
            const d = f(a),
                e = b(d, d);
            if (c(d))
                throw new TypeError();
            super(a, !0, e, null), this._nativeMediaStreamAudioSourceNode = e;
        }
    };
}), b.register('FuZpT', function(b, f) {
    a(b.exports, 'createMediaStreamTrackAudioSourceNodeConstructor', function() {
        return c;
    });
    const c = (a, b, f) => class extends a {
        constructor(a, c) {
            const d = f(a);
            super(a, !0, b(d, c), null);
        }
    };
}), b.register('5/rIM', function(f, g) {
    a(f.exports, 'createMinimalAudioContextConstructor', function() {
        return e;
    });
    var c = b('d1yi+'),
        d = b('6BGPA');
    const e = (a, b, f, g, e) => class extends g {
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
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, c.deactivateAudioGraph)(this);
            }));
        }
        resume() {
            return 'suspended' === this._state ? new Promise((a, b) => {
                const f = () => {
                    this._nativeAudioContext.removeEventListener('statechange', f), 'running' === this._nativeAudioContext.state ? a() : this.resume().then(a, b);
                };
                this._nativeAudioContext.addEventListener('statechange', f);
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
        constructor(f = {}) {
            if (null === e)
                throw new Error('Missing the native AudioContext constructor.');
            let g;
            try {
                g = new e(f);
            } catch (f) {
                if (12 === f.code && 'sampleRate is not in range' === f.message)
                    throw b();
                throw f;
            }
            if (null === g)
                throw f();
            if (!(0, d.isValidLatencyHint)(f.latencyHint))
                throw new TypeError(`The provided value '${ f.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== f.sampleRate && g.sampleRate !== f.sampleRate)
                throw b();
            super(g, 2);
            const {
                latencyHint: h
            } = i, {
                sampleRate: j
            } = k;
            if (this._baseLatency = 'number' == typeof k.baseLatency ? k.baseLatency : 'balanced' === h ? 512 / j : 'interactive' === h || void 0 === h ? 256 / j : 'playback' === h ? 1024 / j : 128 * Math.max(2, Math.min(128, Math.round(h * j / 128))) / j, this._nativeAudioContext = k, 'webkitAudioContext' === e.name ? (this._nativeGainNode = k.createGain(), this._nativeOscillatorNode = k.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(k.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === k.state) {
                this._state = 'suspended';
                const l = () => {
                    'suspended' === this._state && (this._state = null), k.removeEventListener('statechange', l);
                };
                k.addEventListener('statechange', l);
            }
        }
    };
}), b.register('K3Iy+', function(f, g) {
    a(f.exports, 'createMinimalBaseAudioContextConstructor', function() {
        return d;
    });
    var c = b('GBhK6');
    const d = (a, b, f, g, d, e) => class extends f {
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
        set onstatechange(a) {
            const e = 'function' == typeof a ? e(this, a) : null;
            this._nativeContext.onstatechange = e;
            const f = this._nativeContext.onstatechange;
            this._onstatechange = null !== f && f === e ? a : f;
        }
        get sampleRate() {
            return this._nativeContext.sampleRate;
        }
        get state() {
            return this._nativeContext.state;
        }
        constructor(e, e) {
            super(e), this._nativeContext = e, c.CONTEXT_STORE.set(this, e), g(e) && d.set(e, new Set()), this._destination = new a(this, e), this._listener = b(this, e), this._onstatechange = null;
        }
    };
}), b.register('Ue+e2', function(e, g) {
    a(e.exports, 'createMinimalOfflineAudioContextConstructor', function() {
        return f;
    });
    var c = b('d1yi+'),
        d = b('3CTHk');
    const e = {
            numberOfChannels: 1
        },
        f = (a, b, e, g, f) => class extends g {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(b()) : (this._state = 'running', f(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, c.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(a) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(a) : setTimeout(() => this._waitForThePromiseToSettle(a));
            }
            constructor(b) {
                const {
                    length: g,
                    numberOfChannels: h,
                    sampleRate: i
                } = {
                    ...e,
                    ...b
                }, j = e(h, g, i);
                a(d.testPromiseSupport, () => (0, d.testPromiseSupport)(j)) || j.addEventListener('statechange', (() => {
                    let k = 0;
                    const l = e => {
                        'running' === this._state && (k > 0 ? (j.removeEventListener('statechange', l), e.stopImmediatePropagation(), this._waitForThePromiseToSettle(e)) : k += 1);
                    };
                    return l;
                })()), super(j, h), this._length = g, this._nativeOfflineAudioContext = j, this._state = null;
            }
        };
}), b.register('3CTHk', function(b, e) {
    a(b.exports, 'testPromiseSupport', function() {
        return c;
    });
    const c = a => {
        const d = new Uint32Array([
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
            const e = a.decodeAudioData(d.buffer, () => {});
            return void 0 !== e && (e.catch(() => {}), !0);
        } catch {}
        return !1;
    };
}), b.register('CC25T', function(b, d) {
    a(b.exports, 'createMonitorConnections', function() {
        return c;
    });
    const c = (a, b) => (d, c, c) => {
        const d = new Set();
        var e, f;
        return d.connect = (e = d.connect, (c, g = 0, h = 0) => {
            const i = 0 === d.size;
            if (b(c))
                return e.call(d, c, g, h), a(d, [
                    c,
                    g,
                    h
                ], a => a[0] === c && a[1] === g && a[2] === h, !0), i && c(), c;
            e.call(d, c, g), a(d, [
                c,
                g
            ], a => a[0] === c && a[1] === g, !0), i && c();
        }), d.disconnect = (g = d.disconnect, (a, c, e) => {
            const i = d.size > 0;
            if (void 0 === a)
                g.apply(d), d.clear();
            else if ('number' == typeof a) {
                g.call(d, a);
                for (const j of d)
                    j[1] === a && d.delete(j);
            } else {
                j(a) ? g.call(d, a, c, e) : g.call(d, a, c);
                for (const k of d)
                    k[0] !== a || void 0 !== c && k[1] !== c || void 0 !== e && k[2] !== e || d.delete(k);
            }
            const j = 0 === d.size;
            i && j && c();
        }), d;
    };
}), b.register('mAWSV', function(d, c) {
    a(d.exports, 'createNativeAnalyserNodeFactory', function() {
        return g;
    });
    var c = b('3CFsN'),
        d = b('z8d4d'),
        e = b('NY6rV'),
        f = b('QPH1D');
    const g = (a, b) => (d, c) => {
        const h = d.createAnalyser();
        if ((0, d.assignNativeAudioNodeOptions)(h, c), !(c.maxDecibels > c.minDecibels))
            throw b();
        return (0, c.assignNativeAudioNodeOption)(h, c, 'fftSize'), (0, c.assignNativeAudioNodeOption)(h, c, 'maxDecibels'), (0, c.assignNativeAudioNodeOption)(h, c, 'minDecibels'), (0, c.assignNativeAudioNodeOption)(h, c, 'smoothingTimeConstant'), a(e.testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => (0, e.testAnalyserNodeGetFloatTimeDomainDataMethodSupport)(h)) || (0, f.wrapAnalyserNodeGetFloatTimeDomainDataMethod)(h), h;
    };
}), b.register('3CFsN', function(b, d) {
    a(b.exports, 'assignNativeAudioNodeOption', function() {
        return c;
    });
    const c = (a, b, d) => {
        const d = b[d];
        void 0 !== d && d !== a[d] && (a[d] = d);
    };
}), b.register('z8d4d', function(d, c) {
    a(d.exports, 'assignNativeAudioNodeOptions', function() {
        return d;
    });
    var c = b('3CFsN');
    const d = (a, b) => {
        (0, c.assignNativeAudioNodeOption)(a, b, 'channelCount'), (0, c.assignNativeAudioNodeOption)(a, b, 'channelCountMode'), (0, c.assignNativeAudioNodeOption)(a, b, 'channelInterpretation');
    };
}), b.register('NY6rV', function(b, d) {
    a(b.exports, 'testAnalyserNodeGetFloatTimeDomainDataMethodSupport', function() {
        return c;
    });
    const c = a => 'function' == typeof a.getFloatTimeDomainData;
}), b.register('QPH1D', function(b, d) {
    a(b.exports, 'wrapAnalyserNodeGetFloatTimeDomainDataMethod', function() {
        return c;
    });
    const c = a => {
        a.getFloatTimeDomainData = b => {
            const d = new Uint8Array(b.length);
            a.getByteTimeDomainData(d);
            const e = Math.max(d.length, a.fftSize);
            for (let f = 0; f < e; f += 1)
                b[f] = 0.0078125 * (d[f] - 128);
            return b;
        };
    };
}), b.register('ymiP6', function(b, e) {
    a(b.exports, 'createNativeAudioBufferConstructor', function() {
        return c;
    });
    const c = a => null === a ? null : a.hasOwnProperty('AudioBuffer') ? a.AudioBuffer : null;
}), b.register('Tooi1', function(e, c) {
    a(e.exports, 'createNativeAudioBufferSourceNodeFactory', function() {
        return i;
    });
    var c = b('oZH62'),
        d = b('3CFsN'),
        e = b('z8d4d'),
        f = b('vxzTi'),
        g = b('epDkx'),
        h = b('eIvW0');
    const i = (a, b, e, c, i, j, e, f, l, m, n) => (o, p) => {
        const j = o.createBufferSource();
        return (0, e.assignNativeAudioNodeOptions)(j, p), (0, c.assignNativeAudioNodeAudioParamValue)(j, p, 'playbackRate'), (0, d.assignNativeAudioNodeOption)(j, p, 'buffer'), (0, d.assignNativeAudioNodeOption)(j, p, 'loop'), (0, d.assignNativeAudioNodeOption)(j, p, 'loopEnd'), (0, d.assignNativeAudioNodeOption)(j, p, 'loopStart'), b(e, () => e(o)) || (0, f.wrapAudioBufferSourceNodeStartMethodConsecutiveCalls)(j), b(c, () => c(o)) || l(j), b(i, () => i(o)) || m(j, o), b(j, () => j(o)) || (0, g.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(j), b(e, () => e(o)) || n(j, o), b(f, () => f(o)) || (0, h.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(j), a(o, j), j;
    };
}), b.register('oZH62', function(b, e) {
    a(b.exports, 'assignNativeAudioNodeAudioParamValue', function() {
        return c;
    });
    const c = (a, b, e) => {
        const d = b[e];
        void 0 !== d && d !== a[e].value && (a[e].value = d);
    };
}), b.register('vxzTi', function(e, f) {
    a(e.exports, 'wrapAudioBufferSourceNodeStartMethodConsecutiveCalls', function() {
        return d;
    });
    var c = b('Nb/UW');
    const d = a => {
        a.start = (b => {
            let e = !1;
            return (f = 0, g = 0, e) => {
                if (e)
                    throw (0, c.createInvalidStateError)();
                b.call(a, f, g, e), e = !0;
            };
        })(a.start);
    };
}), b.register('epDkx', function(b, e) {
    a(b.exports, 'wrapAudioScheduledSourceNodeStartMethodNegativeParameters', function() {
        return c;
    });
    const c = a => {
        var d;
        a.start = (d = a.start, (e = 0, f = 0, c) => {
            if ('number' == typeof c && c < 0 || f < 0 || e < 0)
                throw new RangeError('The parameters can\'t be negative.');
            d.call(a, e, f, c);
        });
    };
}), b.register('eIvW0', function(b, e) {
    a(b.exports, 'wrapAudioScheduledSourceNodeStopMethodNegativeParameters', function() {
        return c;
    });
    const c = a => {
        var d;
        a.stop = (d = a.stop, (e = 0) => {
            if (e < 0)
                throw new RangeError('The parameter can\'t be negative.');
            d.call(a, e);
        });
    };
}), b.register('YZ2dH', function(b, i) {
    a(b.exports, 'createNativeAudioContextConstructor', function() {
        return c;
    });
    const c = a => null === a ? null : a.hasOwnProperty('AudioContext') ? a.AudioContext : a.hasOwnProperty('webkitAudioContext') ? a.webkitAudioContext : null;
}), b.register('sTKI6', function(b, i) {
    a(b.exports, 'createNativeAudioDestinationNodeFactory', function() {
        return c;
    });
    const c = (a, b) => (i, c, c) => {
        const d = i.destination;
        if (d.channelCount !== c)
            try {
                d.channelCount = c;
            } catch {}
        c && 'explicit' !== d.channelCountMode && (d.channelCountMode = 'explicit'), 0 === d.maxChannelCount && Object.defineProperty(d, 'maxChannelCount', {
            value: c
        });
        const e = a(i, {
            channelCount: c,
            channelCountMode: d.channelCountMode,
            channelInterpretation: d.channelInterpretation,
            gain: 1
        });
        return b(e, 'channelCount', a => () => a.call(e), a => b => {
            a.call(e, b);
            try {
                d.channelCount = b;
            } catch (a) {
                if (b > d.maxChannelCount)
                    throw a;
            }
        }), b(e, 'channelCountMode', a => () => a.call(e), a => b => {
            a.call(e, b), d.channelCountMode = b;
        }), b(e, 'channelInterpretation', a => () => a.call(e), a => b => {
            a.call(e, b), d.channelInterpretation = b;
        }), Object.defineProperty(e, 'maxChannelCount', {
            get: () => d.maxChannelCount
        }), e.connect(d), e;
    };
}), b.register('jEQEd', function(b, i) {
    a(b.exports, 'createNativeAudioWorkletNodeConstructor', function() {
        return c;
    });
    const c = a => null === a ? null : a.hasOwnProperty('AudioWorkletNode') ? a.AudioWorkletNode : null;
}), b.register('8/Cu0', function(i, f) {
    a(i.exports, 'createNativeAudioWorkletNodeFactory', function() {
        return d;
    });
    var c = b('NxFKx');
    const d = (a, b, i, f, d) => (e, f, g, h, i, j) => {
        if (null !== g)
            try {
                const e = new g(e, h, j),
                    f = new Map();
                let g = null;
                if (Object.defineProperties(e, {
                        channelCount: {
                            get: () => j.channelCount,
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
                            get: () => g,
                            set: a => {
                                'function' == typeof g && e.removeEventListener('processorerror', g), g = 'function' == typeof a ? a : null, 'function' == typeof g && e.addEventListener('processorerror', g);
                            }
                        }
                    }), e.addEventListener = (f = e.addEventListener, (...a) => {
                        if ('processorerror' === a[0]) {
                            const h = 'function' == typeof a[1] ? a[1] : 'object' == typeof a[1] && null !== a[1] && 'function' == typeof a[1].handleEvent ? a[1].handleEvent : null;
                            if (null !== h) {
                                const i = f.get(a[1]);
                                void 0 !== i ? a[1] = i : (a[1] = i => {
                                    'error' === i.type ? (Object.defineProperties(i, {
                                        type: {
                                            value: 'processorerror'
                                        }
                                    }), h(i)) : h(new ErrorEvent(a[0], {
                                        ...i
                                    }));
                                }, f.set(h, a[1]));
                            }
                        }
                        return f.call(e, 'error', a[1], a[2]), f.call(e, ...a);
                    }), e.removeEventListener = (e = e.removeEventListener, (...a) => {
                        if ('processorerror' === a[0]) {
                            const h = f.get(a[1]);
                            void 0 !== h && (f.delete(a[1]), a[1] = h);
                        }
                        return e.call(e, 'error', a[1], a[2]), e.call(e, a[0], a[1], a[2]);
                    }), 0 !== j.numberOfOutputs) {
                    const h = v(e, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        gain: 0
                    });
                    e.connect(h).connect(e.destination);
                    return d(e, () => h.disconnect(), () => h.connect(e.destination));
                }
                return e;
            } catch (a) {
                if (11 === a.code)
                    throw c();
                throw a;
            }
        var e, f;
        if (void 0 === i)
            throw c();
        return (0, c.testClonabilityOfAudioWorkletNodeOptions)(j), b(e, f, i, j);
    };
}), b.register('NxFKx', function(b, v) {
    a(b.exports, 'testClonabilityOfAudioWorkletNodeOptions', function() {
        return c;
    });
    const c = a => {
        const {
            port1: d
        } = new MessageChannel();
        try {
            d.postMessage(a);
        } finally {
            d.close();
        }
    };
}), b.register('GF2qM', function(v, w) {
    a(v.exports, 'createNativeAudioWorkletNodeFakerFactory', function() {
        return j;
    });
    var c = b('0D9Ao'),
        d = b('DsawC'),
        e = b('dkf+F'),
        f = b('x2jOu'),
        g = b('tgJaz'),
        h = b('WVTmJ'),
        i = b('h4f3y');
    const j = (a, b, v, w, j, k, k, l, m, n, o, p, q) => (r, s, t, u) => {
        if (0 === u.numberOfInputs && 0 === u.numberOfOutputs)
            throw m();
        const k = Array.isArray(u.outputChannelCount) ? u.outputChannelCount : Array.from(u.outputChannelCount);
        if (k.some(a => a < 1))
            throw m();
        if (k.length !== u.numberOfOutputs)
            throw b();
        if ('explicit' !== u.channelCountMode)
            throw m();
        const l = u.channelCount * u.numberOfInputs,
            m = k.reduce((a, b) => a + b, 0),
            n = void 0 === t.parameterDescriptors ? 0 : t.parameterDescriptors.length;
        if (l + n > 6 || m > 6)
            throw m();
        const o = new MessageChannel(),
            p = [],
            q = [];
        for (let r = 0; r < u.numberOfInputs; r += 1)
            p.push(k(r, {
                channelCount: u.channelCount,
                channelCountMode: u.channelCountMode,
                channelInterpretation: u.channelInterpretation,
                gain: 1
            })), q.push(j(r, {
                channelCount: u.channelCount,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: u.channelCount
            }));
        const s = [];
        if (void 0 !== t.parameterDescriptors)
            for (const {
                    defaultValue: t,
                    maxValue: u,
                    minValue: v,
                    name: w
                }
                of t.parameterDescriptors) {
                const x = k(r, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    offset: void 0 !== u.parameterData[w] ? u.parameterData[w] : void 0 === t ? 0 : t
                });
                Object.defineProperties(x.offset, {
                    defaultValue: {
                        get: () => void 0 === t ? 0 : t
                    },
                    maxValue: {
                        get: () => void 0 === u ? c.MOST_POSITIVE_SINGLE_FLOAT : u
                    },
                    minValue: {
                        get: () => void 0 === v ? c.MOST_NEGATIVE_SINGLE_FLOAT : v
                    }
                }), s.push(x);
            }
        const t = U(r, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: Math.max(1, l + n)
            }),
            u = (0, d.computeBufferSize)(s, r.sampleRate),
            v = l(r, u, l + n, Math.max(1, m)),
            w = j(r, {
                channelCount: Math.max(1, m),
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: Math.max(1, m)
            }),
            x = [];
        for (let y = 0; y < u.numberOfOutputs; y += 1)
            x.push(U(r, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: k[y]
            }));
        for (let z = 0; z < u.numberOfInputs; z += 1) {
            p[z].connect(q[z]);
            for (let A = 0; A < u.channelCount; A += 1)
                q[z].connect(t, A, z * u.channelCount + A);
        }
        const A = new(0, i.ReadOnlyMap)(void 0 === t.parameterDescriptors ? [] : t.parameterDescriptors.map(({
            name: B
        }, b) => {
            const C = s[b];
            return C.connect(t, 0, l + b), C.start(0), [
                B,
                C.offset
            ];
        }));
        t.connect(v);
        let C = u.channelInterpretation,
            D = null;
        const E = 0 === u.numberOfOutputs ? [v] : x,
            F = {
                get bufferSize() {
                    return u;
                },
                get channelCount() {
                    return u.channelCount;
                },
                set channelCount(B) {
                    throw K();
                },
                get channelCountMode() {
                    return u.channelCountMode;
                },
                set channelCountMode(B) {
                    throw K();
                },
                get channelInterpretation() {
                    return C;
                },
                set channelInterpretation(B) {
                    for (const G of p)
                        G.channelInterpretation = B;
                    C = B;
                },
                get context() {
                    return v.context;
                },
                get inputs() {
                    return p;
                },
                get numberOfInputs() {
                    return u.numberOfInputs;
                },
                get numberOfOutputs() {
                    return u.numberOfOutputs;
                },
                get onprocessorerror() {
                    return D;
                },
                set onprocessorerror(B) {
                    'function' == typeof D && F.removeEventListener('processorerror', D), D = 'function' == typeof B ? B : null, 'function' == typeof D && F.addEventListener('processorerror', D);
                },
                get parameters() {
                    return A;
                },
                get port() {
                    return o.port2;
                },
                addEventListener: (...B) => v.addEventListener(B[0], B[1], B[2]),
                connect: B.bind(null, E),
                disconnect: n.bind(null, E),
                dispatchEvent: (...B) => v.dispatchEvent(B[0]),
                removeEventListener: (...B) => v.removeEventListener(B[0], B[1], B[2])
            },
            G = new Map();
        var H, I;
        o.port1.addEventListener = (H = o.port1.addEventListener, (...B) => {
            if ('message' === B[0]) {
                const J = 'function' == typeof B[1] ? B[1] : 'object' == typeof B[1] && null !== B[1] && 'function' == typeof B[1].handleEvent ? B[1].handleEvent : null;
                if (null !== J) {
                    const K = G.get(B[1]);
                    void 0 !== K ? B[1] = K : (B[1] = B => {
                        o(r.currentTime, r.sampleRate, () => J(B));
                    }, G.set(J, B[1]));
                }
            }
            return H.call(o.port1, B[0], B[1], B[2]);
        }), o.port1.removeEventListener = (I = o.port1.removeEventListener, (...B) => {
            if ('message' === B[0]) {
                const J = G.get(B[1]);
                void 0 !== J && (G.delete(B[1]), B[1] = J);
            }
            return I.call(o.port1, B[0], B[1], B[2]);
        });
        let J = null;
        Object.defineProperty(o.port1, 'onmessage', {
            get: () => J,
            set: B => {
                'function' == typeof J && o.port1.removeEventListener('message', J), J = 'function' == typeof B ? B : null, 'function' == typeof J && (o.port1.addEventListener('message', J), o.port1.start());
            }
        }), t.prototype.port = o.port1;
        let K = null;
        (0, g.createAudioWorkletProcessor)(r, F, t, u).then(B => K = B);
        const L = (0, h.createNestedArrays)(u.numberOfInputs, u.channelCount),
            M = (0, h.createNestedArrays)(u.numberOfOutputs, k),
            N = void 0 === t.parameterDescriptors ? [] : t.parameterDescriptors.reduce((B, {
                name: O
            }) => ({
                ...B,
                [O]: new Float32Array(128)
            }), {});
        let P = !0;
        const Q = () => {
                u.numberOfOutputs > 0 && v.disconnect(w);
                for (let R = 0, S = 0; R < u.numberOfOutputs; R += 1) {
                    const T = x[R];
                    for (let U = 0; U < k[R]; U += 1)
                        w.disconnect(T, S + U, U);
                    S += k[R];
                }
            },
            R = new Map();
        v.onaudioprocess = ({
            inputBuffer: S,
            outputBuffer: T
        }) => {
            if (null !== K) {
                const U = p(F);
                for (let V = 0; V < u; V += 128) {
                    for (let W = 0; W < u.numberOfInputs; W += 1)
                        for (let X = 0; X < u.channelCount; X += 1)
                            (0, e.copyFromChannel)(S, L[W], X, X, V);
                    void 0 !== t.parameterDescriptors && t.parameterDescriptors.forEach(({
                        name: Y
                    }, X) => {
                        (0, e.copyFromChannel)(S, N, Y, l + X, V);
                    });
                    for (let Z = 0; Z < u.numberOfInputs; Z += 1)
                        for (let $ = 0; $ < k[Z]; $ += 1)
                            0 === M[Z][$].byteLength && (M[Z][$] = new Float32Array(128));
                    try {
                        const _ = L.map((_, $) => {
                                if (X[$].size > 0)
                                    return R.set($, u / 128), _;
                                const ab = R.get($);
                                return void 0 === ab ? [] : (_.every(_ => _.every(_ => 0 === _)) && (1 === ab ? R.delete($) : R.set($, ab - 1)), _);
                            }),
                            ab = o(r.currentTime + V / r.sampleRate, r.sampleRate, () => K.process(_, M, N));
                        P = ab;
                        for (let bb = 0, cb = 0; bb < u.numberOfOutputs; bb += 1) {
                            for (let db = 0; db < k[bb]; db += 1)
                                (0, f.copyToChannel)($, M[bb], db, cb + db, V);
                            cb += k[bb];
                        }
                    } catch (Z) {
                        P = !1, F.dispatchEvent(new ErrorEvent('processorerror', {
                            colno: Z.colno,
                            filename: Z.filename,
                            lineno: Z.lineno,
                            message: Z.message
                        }));
                    }
                    if (!P) {
                        for (let _ = 0; _ < u.numberOfInputs; _ += 1) {
                            p[_].disconnect(q[_]);
                            for (let ab = 0; ab < u.channelCount; ab += 1)
                                q[V].disconnect(t, ab, _ * u.channelCount + ab);
                        }
                        if (void 0 !== t.parameterDescriptors) {
                            const bb = t.parameterDescriptors.length;
                            for (let cb = 0; cb < bb; cb += 1) {
                                const db = s[cb];
                                db.disconnect(t, 0, l + cb), db.stop();
                            }
                        }
                        t.disconnect(v), v.onaudioprocess = null, U ? Q() : X();
                        break;
                    }
                }
            }
        };
        let U = !1;
        const V = k(r, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            }),
            W = () => v.connect(V).connect(r.destination),
            X = () => {
                v.disconnect(V), V.disconnect();
            };
        return W(), q(F, () => {
            if (P) {
                X(), u.numberOfOutputs > 0 && v.connect(w);
                for (let Y = 0, Z = 0; Y < u.numberOfOutputs; Y += 1) {
                    const $ = x[Y];
                    for (let _ = 0; _ < k[Y]; _ += 1)
                        w.connect($, Z + _, _);
                    Z += k[Y];
                }
            }
            U = !0;
        }, () => {
            P && (W(), Q()), U = !1;
        });
    };
}), b.register('DsawC', function(b, g) {
    a(b.exports, 'computeBufferSize', function() {
        return c;
    });
    const c = (a, b) => null === a ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(a * b)))));
}), b.register('tgJaz', function(g, c) {
    a(g.exports, 'createAudioWorkletProcessor', function() {
        return e;
    });
    var c = b('GBhK6'),
        d = b('rKjtt');
    const e = (a, b, g, c) => {
        let f = c.NODE_TO_PROCESSOR_MAPS.get(a);
        void 0 === f && (f = new WeakMap(), c.NODE_TO_PROCESSOR_MAPS.set(a, f));
        const g = (0, d.createAudioWorkletProcessorPromise)(g, c);
        return f.set(b, g), g;
    };
}), b.register('rKjtt', function(g, c) {
    a(g.exports, 'createAudioWorkletProcessorPromise', function() {
        return d;
    });
    var c = b('j0O/t');
    const d = async (a, b) => new a(await (0, c.cloneAudioWorkletNodeOptions)(b));
}), b.register('j0O/t', function(b, g) {
    a(b.exports, 'cloneAudioWorkletNodeOptions', function() {
        return c;
    });
    const c = a => new Promise((b, g) => {
        const {
            port1: d,
            port2: e
        } = new MessageChannel();
        d.onmessage = ({
            data: f
        }) => {
            d.close(), e.close(), b(f);
        }, d.onmessageerror = ({
            data: g
        }) => {
            d.close(), e.close(), g(g);
        }, e.postMessage(g);
    });
}), b.register('0rC9n', function(g, c) {
    a(g.exports, 'createNativeBiquadFilterNode', function() {
        return f;
    });
    var c = b('oZH62'),
        d = b('3CFsN'),
        e = b('z8d4d');
    const f = (a, b) => {
        const g = a.createBiquadFilter();
        return (0, e.assignNativeAudioNodeOptions)(g, b), (0, c.assignNativeAudioNodeAudioParamValue)(g, b, 'Q'), (0, c.assignNativeAudioNodeAudioParamValue)(g, b, 'detune'), (0, c.assignNativeAudioNodeAudioParamValue)(g, b, 'frequency'), (0, c.assignNativeAudioNodeAudioParamValue)(g, b, 'gain'), (0, d.assignNativeAudioNodeOption)(g, b, 'type'), g;
    };
}), b.register('7tGFy', function(f, c) {
    a(f.exports, 'createNativeChannelMergerNodeFactory', function() {
        return d;
    });
    var c = b('z8d4d');
    const d = (a, b) => (f, c) => {
        const e = f.createChannelMerger(c.numberOfInputs);
        return null !== a && 'webkitAudioContext' === a.name && b(f, e), (0, c.assignNativeAudioNodeOptions)(e, c), e;
    };
}), b.register('tpdVu', function(f, c) {
    a(f.exports, 'createNativeChannelSplitterNode', function() {
        return e;
    });
    var c = b('z8d4d'),
        d = b('NWqHC');
    const e = (a, b) => {
        const f = a.createChannelSplitter(b.numberOfOutputs);
        return (0, c.assignNativeAudioNodeOptions)(f, b), (0, d.wrapChannelSplitterNode)(f), f;
    };
}), b.register('NWqHC', function(f, c) {
    a(f.exports, 'wrapChannelSplitterNode', function() {
        return d;
    });
    var c = b('Nb/UW');
    const d = a => {
        const e = a.numberOfOutputs;
        Object.defineProperty(a, 'channelCount', {
            get: () => e,
            set: a => {
                if (a !== e)
                    throw (0, c.createInvalidStateError)();
            }
        }), Object.defineProperty(a, 'channelCountMode', {
            get: () => 'explicit',
            set: a => {
                if ('explicit' !== a)
                    throw (0, c.createInvalidStateError)();
            }
        }), Object.defineProperty(a, 'channelInterpretation', {
            get: () => 'discrete',
            set: a => {
                if ('discrete' !== a)
                    throw (0, c.createInvalidStateError)();
            }
        });
    };
}), b.register('syfoi', function(f, c) {
    a(f.exports, 'createNativeConstantSourceNodeFactory', function() {
        return g;
    });
    var c = b('oZH62'),
        d = b('z8d4d'),
        e = b('epDkx'),
        f = b('eIvW0');
    const g = (a, b, f, c, g) => (h, i) => {
        if (void 0 === h.createConstantSource)
            return f(h, i);
        const h = h.createConstantSource();
        return (0, d.assignNativeAudioNodeOptions)(h, i), (0, c.assignNativeAudioNodeAudioParamValue)(h, i, 'offset'), b(c, () => c(h)) || (0, e.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(h), b(g, () => g(h)) || (0, f.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(h), a(h, h), h;
    };
}), b.register('yhyMC', function(f, c) {
    a(f.exports, 'createNativeConstantSourceNodeFakerFactory', function() {
        return d;
    });
    var c = b('HNggc');
    const d = (a, b, f, c) => (d, {
        offset: e,
        ...f
    }) => {
        const g = d.createBuffer(1, 2, 44100),
            h = b(d, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            i = f(d, {
                ...f,
                gain: e
            }),
            j = g.getChannelData(0);
        j[0] = 1, j[1] = 1, h.buffer = g, h.loop = !0;
        const k = {
            get bufferSize() {},
            get channelCount() {
                return i.channelCount;
            },
            set channelCount(a) {
                i.channelCount = a;
            },
            get channelCountMode() {
                return i.channelCountMode;
            },
            set channelCountMode(a) {
                i.channelCountMode = a;
            },
            get channelInterpretation() {
                return i.channelInterpretation;
            },
            set channelInterpretation(a) {
                i.channelInterpretation = a;
            },
            get context() {
                return i.context;
            },
            get inputs() {
                return [];
            },
            get numberOfInputs() {
                return h.numberOfInputs;
            },
            get numberOfOutputs() {
                return i.numberOfOutputs;
            },
            get offset() {
                return i.gain;
            },
            get onended() {
                return h.onended;
            },
            set onended(a) {
                h.onended = a;
            },
            addEventListener: (...a) => h.addEventListener(a[0], a[1], a[2]),
            dispatchEvent: (...a) => h.dispatchEvent(a[0]),
            removeEventListener: (...a) => h.removeEventListener(a[0], a[1], a[2]),
            start(l = 0) {
                h.start.call(h, l);
            },
            stop(m = 0) {
                h.stop.call(h, m);
            }
        };
        return m(d, h), c((0, c.interceptConnections)(k, i), () => h.connect(i), () => h.disconnect(i));
    };
}), b.register('HNggc', function(b, f) {
    a(b.exports, 'interceptConnections', function() {
        return c;
    });
    const c = (a, b) => (a.connect = b.connect.bind(b), a.disconnect = b.disconnect.bind(b), a);
}), b.register('+ROSp', function(f, f) {
    a(f.exports, 'createNativeConvolverNodeFactory', function() {
        return e;
    });
    var c = b('3CFsN'),
        d = b('z8d4d');
    const e = (a, b) => (f, f) => {
        const f = f.createConvolver();
        if ((0, d.assignNativeAudioNodeOptions)(f, f), f.disableNormalization === f.normalize && (f.normalize = !f.disableNormalization), (0, c.assignNativeAudioNodeOption)(f, f, 'buffer'), f.channelCount > 2)
            throw a();
        if (b(f, 'channelCount', a => () => a.call(f), b => f => {
                if (f > 2)
                    throw a();
                return b.call(f, f);
            }), 'max' === f.channelCountMode)
            throw a();
        return b(f, 'channelCountMode', a => () => a.call(f), b => f => {
            if ('max' === f)
                throw a();
            return b.call(f, f);
        }), f;
    };
}), b.register('DQTbn', function(f, f) {
    a(f.exports, 'createNativeDelayNode', function() {
        return e;
    });
    var c = b('oZH62'),
        d = b('z8d4d');
    const e = (a, b) => {
        const f = a.createDelay(b.maxDelayTime);
        return (0, d.assignNativeAudioNodeOptions)(f, b), (0, c.assignNativeAudioNodeAudioParamValue)(f, b, 'delayTime'), f;
    };
}), b.register('nOGD7', function(f, f) {
    a(f.exports, 'createNativeDynamicsCompressorNodeFactory', function() {
        return e;
    });
    var c = b('oZH62'),
        d = b('z8d4d');
    const e = a => (b, f) => {
        const f = b.createDynamicsCompressor();
        if ((0, d.assignNativeAudioNodeOptions)(f, f), f.channelCount > 2)
            throw a();
        if ('max' === f.channelCountMode)
            throw a();
        return (0, c.assignNativeAudioNodeAudioParamValue)(f, f, 'attack'), (0, c.assignNativeAudioNodeAudioParamValue)(f, f, 'knee'), (0, c.assignNativeAudioNodeAudioParamValue)(f, f, 'ratio'), (0, c.assignNativeAudioNodeAudioParamValue)(f, f, 'release'), (0, c.assignNativeAudioNodeAudioParamValue)(f, f, 'threshold'), f;
    };
}), b.register('LwX7e', function(f, j) {
    a(f.exports, 'createNativeGainNode', function() {
        return e;
    });
    var c = b('oZH62'),
        d = b('z8d4d');
    const e = (a, b) => {
        const f = a.createGain();
        return (0, d.assignNativeAudioNodeOptions)(f, b), (0, c.assignNativeAudioNodeAudioParamValue)(f, b, 'gain'), f;
    };
}), b.register('kacNt', function(g, j) {
    a(g.exports, 'createNativeIIRFilterNodeFactory', function() {
        return d;
    });
    var c = b('z8d4d');
    const d = a => (b, g, j) => {
        if (void 0 === b.createIIRFilter)
            return a(b, g, j);
        const e = b.createIIRFilter(j.feedforward, j.feedback);
        return (0, c.assignNativeAudioNodeOptions)(e, j), e;
    };
}), b.register('Ma1d6', function(g, j) {
    a(g.exports, 'createNativeIIRFilterNodeFakerFactory', function() {
        return h;
    });
    var c = b('DsawC'),
        d = b('HBKUG'),
        e = b('HNggc');

    function f(a, b) {
        const g = b[0] * b[0] + b[1] * b[1];
        return [
            (a[0] * b[0] + a[1] * b[1]) / g,
            (a[1] * b[0] - a[0] * b[1]) / g
        ];
    }

    function g(a, b) {
        let h = [
            0,
            0
        ];
        for (let i = a.length - 1; i >= 0; i -= 1)
            c = b, h = [
                (j = h)[0] * c[0] - j[1] * c[1],
                j[0] * c[1] + j[1] * c[0]
            ], h[0] += a[i];
        var j, k;
        return h;
    }
    const h = (a, b, z, A) => (h, h, {
        channelCount: i,
        channelCountMode: j,
        channelInterpretation: k,
        feedback: l,
        feedforward: m
    }) => {
        const n = (0, c.computeBufferSize)(h, h.sampleRate),
            o = l instanceof Float64Array ? l : new Float64Array(l),
            p = m instanceof Float64Array ? m : new Float64Array(m),
            q = o.length,
            r = p.length,
            s = Math.min(q, r);
        if (0 === q || q > 20)
            throw A();
        if (0 === o[0])
            throw b();
        if (0 === r || r > 20)
            throw A();
        if (0 === p[0])
            throw b();
        if (1 !== o[0]) {
            for (let t = 0; t < r; t += 1)
                p[t] /= o[0];
            for (let u = 1; u < q; u += 1)
                o[u] /= o[0];
        }
        const t = z(h, n, i, i);
        t.channelCount = i, t.channelCountMode = j, t.channelInterpretation = k;
        const u = [],
            v = [],
            w = [];
        for (let x = 0; x < i; x += 1) {
            u.push(0);
            const y = new Float32Array(32),
                z = new Float32Array(32);
            y.fill(0), z.fill(0), v.push(y), w.push(z);
        }
        t.onaudioprocess = x => {
            const y = x.inputBuffer,
                z = x.outputBuffer,
                A = y.numberOfChannels;
            for (let B = 0; B < A; B += 1) {
                const C = y.getChannelData(B),
                    D = z.getChannelData(B);
                u[B] = (0, d.filterBuffer)(o, q, p, r, s, v[B], w[B], u[B], 32, C, D);
            }
        };
        const y = h.sampleRate / 2,
            z = {
                get bufferSize() {
                    return n;
                },
                get channelCount() {
                    return t.channelCount;
                },
                set channelCount(x) {
                    t.channelCount = x;
                },
                get channelCountMode() {
                    return t.channelCountMode;
                },
                set channelCountMode(x) {
                    t.channelCountMode = x;
                },
                get channelInterpretation() {
                    return t.channelInterpretation;
                },
                set channelInterpretation(x) {
                    t.channelInterpretation = x;
                },
                get context() {
                    return t.context;
                },
                get inputs() {
                    return [t];
                },
                get numberOfInputs() {
                    return t.numberOfInputs;
                },
                get numberOfOutputs() {
                    return t.numberOfOutputs;
                },
                addEventListener: (...x) => t.addEventListener(x[0], x[1], x[2]),
                dispatchEvent: (...x) => t.dispatchEvent(x[0]),
                getFrequencyResponse(b, e, c) {
                    if (b.length !== e.length || e.length !== c.length)
                        throw x();
                    const A = b.length;
                    for (let B = 0; B < A; B += 1) {
                        const C = -Math.PI * (b[B] / y),
                            D = [
                                Math.cos(C),
                                Math.sin(C)
                            ],
                            E = f(g(p, D), g(o, D));
                        e[B] = Math.sqrt(E[0] * E[0] + E[1] * E[1]), c[B] = Math.atan2(E[1], E[0]);
                    }
                },
                removeEventListener: (...x) => t.removeEventListener(x[0], x[1], x[2])
            };
        return (0, e.interceptConnections)(z, t);
    };
}), b.register('2f9Cd', function(b, e) {
    a(b.exports, 'createNativeMediaElementAudioSourceNode', function() {
        return c;
    });
    const c = (a, b) => a.createMediaElementSource(b.mediaElement);
}), b.register('0IXD8', function(e, c) {
    a(e.exports, 'createNativeMediaStreamAudioDestinationNode', function() {
        return d;
    });
    var c = b('z8d4d');
    const d = (a, b) => {
        const e = a.createMediaStreamDestination();
        return (0, c.assignNativeAudioNodeOptions)(e, b), 1 === e.numberOfOutputs && Object.defineProperty(e, 'numberOfOutputs', {
            get: () => 0
        }), e;
    };
}), b.register('g4qin', function(b, e) {
    a(b.exports, 'createNativeMediaStreamAudioSourceNode', function() {
        return c;
    });
    const c = (a, {
        mediaStream: d
    }) => {
        const e = d.getAudioTracks();
        e.sort((a, d) => a.id < d.id ? -1 : a.id > d.id ? 1 : 0);
        const f = e.slice(0, 1),
            g = a.createMediaStreamSource(new MediaStream(f));
        return Object.defineProperty(g, 'mediaStream', {
            value: d
        }), g;
    };
}), b.register('IDeXa', function(b, L) {
    a(b.exports, 'createNativeMediaStreamTrackAudioSourceNodeFactory', function() {
        return c;
    });
    const c = (a, b) => (L, {
        mediaStreamTrack: d
    }) => {
        if ('function' == typeof L.createMediaStreamTrackSource)
            return L.createMediaStreamTrackSource(d);
        const e = new MediaStream([d]),
            f = L.createMediaStreamSource(e);
        if ('audio' !== d.kind)
            throw a();
        if (b(L))
            throw new TypeError();
        return f;
    };
}), b.register('usaGd', function(b, L) {
    a(b.exports, 'createNativeOfflineAudioContextConstructor', function() {
        return c;
    });
    const c = a => null === a ? null : a.hasOwnProperty('OfflineAudioContext') ? a.OfflineAudioContext : a.hasOwnProperty('webkitOfflineAudioContext') ? a.webkitOfflineAudioContext : null;
}), b.register('q5Go7', function(L, g) {
    a(L.exports, 'createNativeOscillatorNodeFactory', function() {
        return h;
    });
    var c = b('oZH62'),
        d = b('3CFsN'),
        e = b('z8d4d'),
        f = b('epDkx'),
        g = b('eIvW0');
    const h = (a, b, L, g, h, h) => (i, j) => {
        const i = i.createOscillator();
        return (0, e.assignNativeAudioNodeOptions)(i, j), (0, c.assignNativeAudioNodeAudioParamValue)(i, j, 'detune'), (0, c.assignNativeAudioNodeAudioParamValue)(i, j, 'frequency'), void 0 !== j.periodicWave ? i.setPeriodicWave(j.periodicWave) : (0, d.assignNativeAudioNodeOption)(i, j, 'type'), b(L, () => L(i)) || (0, f.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(i), b(g, () => g(i)) || h(i, i), b(h, () => h(i)) || (0, g.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(i), a(i, i), i;
    };
}), b.register('zSm8k', function(L, g) {
    a(L.exports, 'createNativePannerNodeFactory', function() {
        return f;
    });
    var c = b('oZH62'),
        d = b('3CFsN'),
        e = b('z8d4d');
    const f = a => (b, L) => {
        const g = b.createPanner();
        return void 0 === g.orientationX ? a(b, L) : ((0, e.assignNativeAudioNodeOptions)(g, L), (0, c.assignNativeAudioNodeAudioParamValue)(g, L, 'orientationX'), (0, c.assignNativeAudioNodeAudioParamValue)(g, L, 'orientationY'), (0, c.assignNativeAudioNodeAudioParamValue)(g, L, 'orientationZ'), (0, c.assignNativeAudioNodeAudioParamValue)(g, L, 'positionX'), (0, c.assignNativeAudioNodeAudioParamValue)(g, L, 'positionY'), (0, c.assignNativeAudioNodeAudioParamValue)(g, L, 'positionZ'), (0, d.assignNativeAudioNodeOption)(g, L, 'coneInnerAngle'), (0, d.assignNativeAudioNodeOption)(g, L, 'coneOuterAngle'), (0, d.assignNativeAudioNodeOption)(g, L, 'coneOuterGain'), (0, d.assignNativeAudioNodeOption)(g, L, 'distanceModel'), (0, d.assignNativeAudioNodeOption)(g, L, 'maxDistance'), (0, d.assignNativeAudioNodeOption)(g, L, 'panningModel'), (0, d.assignNativeAudioNodeOption)(g, L, 'refDistance'), (0, d.assignNativeAudioNodeOption)(g, L, 'rolloffFactor'), g);
    };
}), b.register('AnJ4y', function(L, c) {
    a(L.exports, 'createNativePannerNodeFakerFactory', function() {
        return e;
    });
    var c = b('z8d4d'),
        d = b('HNggc');
    const e = (a, b, L, c, e, i, f, g, h, i) => (j, {
        coneInnerAngle: f,
        coneOuterAngle: g,
        coneOuterGain: h,
        distanceModel: i,
        maxDistance: j,
        orientationX: k,
        orientationY: l,
        orientationZ: m,
        panningModel: n,
        positionX: o,
        positionY: p,
        positionZ: q,
        refDistance: r,
        rolloffFactor: s,
        ...t
    }) => {
        const u = j.createPanner();
        if (t.channelCount > 2)
            throw f();
        if ('max' === t.channelCountMode)
            throw f();
        (0, c.assignNativeAudioNodeOptions)(u, t);
        const v = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            },
            w = L(j, {
                ...v,
                channelInterpretation: 'speakers',
                numberOfInputs: 6
            }),
            x = c(j, {
                ...t,
                gain: 1
            }),
            y = c(j, {
                ...v,
                gain: 1
            }),
            z = c(j, {
                ...v,
                gain: 0
            }),
            A = c(j, {
                ...v,
                gain: 0
            }),
            B = c(j, {
                ...v,
                gain: 0
            }),
            C = c(j, {
                ...v,
                gain: 0
            }),
            D = c(j, {
                ...v,
                gain: 0
            }),
            E = e(j, 256, 6, 1),
            F = i(j, {
                ...v,
                curve: new Float32Array([
                    1,
                    1
                ]),
                oversample: 'none'
            });
        let G = [
                k,
                l,
                m
            ],
            H = [
                o,
                p,
                q
            ];
        const I = new Float32Array(1);
        E.onaudioprocess = ({
            inputBuffer: J
        }) => {
            const K = [
                h(J, I, 0),
                h(J, I, 1),
                h(J, I, 2)
            ];
            K.some((J, K) => J !== G[K]) && (u.setOrientation(...K), G = K);
            const L = [
                h(J, I, 3),
                h(J, I, 4),
                h(J, I, 5)
            ];
            L.some((J, K) => J !== H[K]) && (u.setPosition(...L), H = L);
        }, Object.defineProperty(z.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(A.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(B.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(C.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(D.gain, 'defaultValue', {
            get: () => 0
        });
        const K = {
            get bufferSize() {},
            get channelCount() {
                return u.channelCount;
            },
            set channelCount(J) {
                if (J > 2)
                    throw f();
                x.channelCount = J, u.channelCount = J;
            },
            get channelCountMode() {
                return u.channelCountMode;
            },
            set channelCountMode(J) {
                if ('max' === J)
                    throw f();
                x.channelCountMode = J, u.channelCountMode = J;
            },
            get channelInterpretation() {
                return u.channelInterpretation;
            },
            set channelInterpretation(J) {
                x.channelInterpretation = J, u.channelInterpretation = J;
            },
            get coneInnerAngle() {
                return u.coneInnerAngle;
            },
            set coneInnerAngle(J) {
                u.coneInnerAngle = J;
            },
            get coneOuterAngle() {
                return u.coneOuterAngle;
            },
            set coneOuterAngle(J) {
                u.coneOuterAngle = J;
            },
            get coneOuterGain() {
                return u.coneOuterGain;
            },
            set coneOuterGain(J) {
                if (J < 0 || J > 1)
                    throw b();
                u.coneOuterGain = J;
            },
            get context() {
                return u.context;
            },
            get distanceModel() {
                return u.distanceModel;
            },
            set distanceModel(J) {
                u.distanceModel = J;
            },
            get inputs() {
                return [x];
            },
            get maxDistance() {
                return u.maxDistance;
            },
            set maxDistance(J) {
                if (J < 0)
                    throw new RangeError();
                u.maxDistance = J;
            },
            get numberOfInputs() {
                return u.numberOfInputs;
            },
            get numberOfOutputs() {
                return u.numberOfOutputs;
            },
            get orientationX() {
                return y.gain;
            },
            get orientationY() {
                return z.gain;
            },
            get orientationZ() {
                return A.gain;
            },
            get panningModel() {
                return u.panningModel;
            },
            set panningModel(J) {
                u.panningModel = J;
            },
            get positionX() {
                return B.gain;
            },
            get positionY() {
                return C.gain;
            },
            get positionZ() {
                return D.gain;
            },
            get refDistance() {
                return u.refDistance;
            },
            set refDistance(J) {
                if (J < 0)
                    throw new RangeError();
                u.refDistance = J;
            },
            get rolloffFactor() {
                return u.rolloffFactor;
            },
            set rolloffFactor(J) {
                if (J < 0)
                    throw new RangeError();
                u.rolloffFactor = J;
            },
            addEventListener: (...J) => x.addEventListener(J[0], J[1], J[2]),
            dispatchEvent: (...J) => x.dispatchEvent(J[0]),
            removeEventListener: (...J) => x.removeEventListener(J[0], J[1], J[2])
        };
        f !== K.coneInnerAngle && (K.coneInnerAngle = f), g !== K.coneOuterAngle && (K.coneOuterAngle = g), h !== K.coneOuterGain && (K.coneOuterGain = h), i !== K.distanceModel && (K.distanceModel = i), j !== K.maxDistance && (K.maxDistance = j), k !== K.orientationX.value && (K.orientationX.value = k), l !== K.orientationY.value && (K.orientationY.value = l), m !== K.orientationZ.value && (K.orientationZ.value = m), n !== K.panningModel && (K.panningModel = n), o !== K.positionX.value && (K.positionX.value = o), p !== K.positionY.value && (K.positionY.value = p), q !== K.positionZ.value && (K.positionZ.value = q), r !== K.refDistance && (K.refDistance = r), s !== K.rolloffFactor && (K.rolloffFactor = s), 1 === G[0] && 0 === G[1] && 0 === G[2] || u.setOrientation(...G), 0 === H[0] && 0 === H[1] && 0 === H[2] || u.setPosition(...H);
        return i((0, d.interceptConnections)(K, u), () => {
            x.connect(u), J(x, F, 0, 0), F.connect(y).connect(w, 0, 0), F.connect(z).connect(w, 0, 1), F.connect(A).connect(w, 0, 2), F.connect(B).connect(w, 0, 3), F.connect(C).connect(w, 0, 4), F.connect(D).connect(w, 0, 5), w.connect(E).connect(j.destination);
        }, () => {
            x.disconnect(u), g(x, F, 0, 0), F.disconnect(y), y.disconnect(w), F.disconnect(z), z.disconnect(w), F.disconnect(A), A.disconnect(w), F.disconnect(B), B.disconnect(w), F.disconnect(C), C.disconnect(w), F.disconnect(D), D.disconnect(w), w.disconnect(E), E.disconnect(j.destination);
        });
    };
}), b.register('BK83q', function(b, d) {
    a(b.exports, 'createNativePeriodicWaveFactory', function() {
        return c;
    });
    const c = a => (b, {
        disableNormalization: d,
        imag: e,
        real: f
    }) => {
        const g = e instanceof Float32Array ? e : new Float32Array(e),
            h = f instanceof Float32Array ? f : new Float32Array(f),
            i = b.createPeriodicWave(h, g, {
                disableNormalization: d
            });
        if (Array.from(e).length < 2)
            throw a();
        return i;
    };
}), b.register('gPgQY', function(b, i) {
    a(b.exports, 'createNativeScriptProcessorNode', function() {
        return c;
    });
    const c = (a, b, i, c) => a.createScriptProcessor(b, i, c);
}), b.register('Uj4Xv', function(i, k) {
    a(i.exports, 'createNativeStereoPannerNodeFactory', function() {
        return e;
    });
    var c = b('oZH62'),
        d = b('z8d4d');
    const e = (a, b) => (i, k) => {
        const f = k.channelCountMode;
        if ('clamped-max' === f)
            throw b();
        if (void 0 === i.createStereoPanner)
            return a(i, k);
        const g = i.createStereoPanner();
        return (0, d.assignNativeAudioNodeOptions)(g, k), (0, c.assignNativeAudioNodeAudioParamValue)(g, k, 'pan'), Object.defineProperty(g, 'channelCountMode', {
            get: () => f,
            set: a => {
                if (a !== f)
                    throw b();
            }
        }), g;
    };
}), b.register('HFvuQ', function(i, k) {
    a(i.exports, 'createNativeStereoPannerNodeFakerFactory', function() {
        return d;
    });
    var c = b('HNggc');
    const d = (a, b, i, k, d, k) => {
        const e = 16385,
            f = new Float32Array([
                1,
                1
            ]),
            g = Math.PI / 2,
            h = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            },
            i = {
                ...h,
                oversample: 'none'
            },
            j = (a, c, k, j, n) => {
                if (1 === c)
                    return ((a, b, c, d) => {
                        const k = new Float32Array(e),
                            l = new Float32Array(e);
                        for (let m = 0; m < e; m += 1) {
                            const n = m / 16384 * g;
                            k[m] = Math.cos(n), l[m] = Math.sin(n);
                        }
                        const n = i(m, {
                                ...h,
                                gain: 0
                            }),
                            o = k(m, {
                                ...i,
                                curve: k
                            }),
                            p = k(m, {
                                ...i,
                                curve: f
                            }),
                            q = i(m, {
                                ...h,
                                gain: 0
                            }),
                            r = k(m, {
                                ...i,
                                curve: l
                            });
                        return {
                            connectGraph() {
                                b.connect(n), b.connect(void 0 === p.inputs ? p : p.inputs[0]), b.connect(q), p.connect(c), c.connect(void 0 === o.inputs ? o : o.inputs[0]), c.connect(void 0 === r.inputs ? r : r.inputs[0]), o.connect(n.gain), r.connect(q.gain), n.connect(d, 0, 0), q.connect(d, 0, 1);
                            },
                            disconnectGraph() {
                                b.disconnect(n), b.disconnect(void 0 === p.inputs ? p : p.inputs[0]), b.disconnect(q), p.disconnect(c), c.disconnect(void 0 === o.inputs ? o : o.inputs[0]), c.disconnect(void 0 === r.inputs ? r : r.inputs[0]), o.disconnect(n.gain), r.disconnect(q.gain), n.disconnect(d, 0, 0), q.disconnect(d, 0, 1);
                            }
                        };
                    })(a, e, j, l);
                if (2 === c)
                    return ((a, c, d, e) => {
                        const k = new Float32Array(e),
                            l = new Float32Array(e),
                            m = new Float32Array(e),
                            n = new Float32Array(e),
                            o = Math.floor(8192.5);
                        for (let p = 0; p < e; p += 1)
                            if (p > o) {
                                const q = (p - o) / (16384 - o) * g;
                                k[p] = Math.cos(q), l[p] = Math.sin(q), m[p] = 0, n[p] = 1;
                            } else {
                                const r = p / (16384 - o) * g;
                                k[p] = 1, l[p] = 0, m[p] = Math.cos(r), n[p] = Math.sin(r);
                            }
                        const q = b(p, {
                                channelCount: 2,
                                channelCountMode: 'explicit',
                                channelInterpretation: 'discrete',
                                numberOfOutputs: 2
                            }),
                            r = i(p, {
                                ...h,
                                gain: 0
                            }),
                            s = k(p, {
                                ...i,
                                curve: k
                            }),
                            t = i(p, {
                                ...h,
                                gain: 0
                            }),
                            u = k(p, {
                                ...i,
                                curve: l
                            }),
                            v = k(p, {
                                ...i,
                                curve: f
                            }),
                            w = i(p, {
                                ...h,
                                gain: 0
                            }),
                            x = k(p, {
                                ...i,
                                curve: m
                            }),
                            y = i(p, {
                                ...h,
                                gain: 0
                            }),
                            z = k(p, {
                                ...i,
                                curve: n
                            });
                        return {
                            connectGraph() {
                                c.connect(q), c.connect(void 0 === v.inputs ? v : v.inputs[0]), q.connect(r, 0), q.connect(t, 0), q.connect(w, 1), q.connect(y, 1), v.connect(d), d.connect(void 0 === s.inputs ? s : s.inputs[0]), d.connect(void 0 === u.inputs ? u : u.inputs[0]), d.connect(void 0 === x.inputs ? x : x.inputs[0]), d.connect(void 0 === z.inputs ? z : z.inputs[0]), s.connect(r.gain), u.connect(t.gain), x.connect(w.gain), z.connect(y.gain), r.connect(e, 0, 0), w.connect(e, 0, 0), t.connect(e, 0, 1), y.connect(e, 0, 1);
                            },
                            disconnectGraph() {
                                c.disconnect(q), c.disconnect(void 0 === v.inputs ? v : v.inputs[0]), q.disconnect(r, 0), q.disconnect(t, 0), q.disconnect(w, 1), q.disconnect(y, 1), v.disconnect(d), d.disconnect(void 0 === s.inputs ? s : s.inputs[0]), d.disconnect(void 0 === u.inputs ? u : u.inputs[0]), d.disconnect(void 0 === x.inputs ? x : x.inputs[0]), d.disconnect(void 0 === z.inputs ? z : z.inputs[0]), s.disconnect(r.gain), u.disconnect(t.gain), x.disconnect(w.gain), z.disconnect(y.gain), r.disconnect(e, 0, 0), w.disconnect(e, 0, 0), t.disconnect(e, 0, 1), y.disconnect(e, 0, 1);
                            }
                        };
                    })(a, e, j, q);
                throw d();
            };
        return (b, {
            channelCount: k,
            channelCountMode: l,
            pan: m,
            ...n
        }) => {
            if ('max' === l)
                throw d();
            const o = a(b, {
                    ...n,
                    channelCount: 1,
                    channelCountMode: l,
                    numberOfInputs: 2
                }),
                p = i(b, {
                    ...n,
                    channelCount: k,
                    channelCountMode: l,
                    gain: 1
                }),
                q = i(b, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    gain: m
                });
            let {
                connectGraph: r,
                disconnectGraph: s
            } = j(b, k, p, q, o);
            Object.defineProperty(q.gain, 'defaultValue', {
                get: () => 0
            }), Object.defineProperty(q.gain, 'maxValue', {
                get: () => 1
            }), Object.defineProperty(q.gain, 'minValue', {
                get: () => -1
            });
            const t = {
                get bufferSize() {},
                get channelCount() {
                    return p.channelCount;
                },
                set channelCount(a) {
                    p.channelCount !== a && (u && s(), {
                        connectGraph: u,
                        disconnectGraph: v
                    } = j(b, a, p, q, o), u && u()), p.channelCount = a;
                },
                get channelCountMode() {
                    return p.channelCountMode;
                },
                set channelCountMode(a) {
                    if ('clamped-max' === a || 'max' === a)
                        throw d();
                    p.channelCountMode = a;
                },
                get channelInterpretation() {
                    return p.channelInterpretation;
                },
                set channelInterpretation(a) {
                    p.channelInterpretation = a;
                },
                get context() {
                    return p.context;
                },
                get inputs() {
                    return [p];
                },
                get numberOfInputs() {
                    return p.numberOfInputs;
                },
                get numberOfOutputs() {
                    return p.numberOfOutputs;
                },
                get pan() {
                    return q.gain;
                },
                addEventListener: (...a) => p.addEventListener(a[0], a[1], a[2]),
                dispatchEvent: (...a) => p.dispatchEvent(a[0]),
                removeEventListener: (...a) => p.removeEventListener(a[0], a[1], a[2])
            };
            let u = !1;
            return e((0, c.interceptConnections)(t, o), () => {
                r(), u = !0;
            }, () => {
                s(), u = !1;
            });
        };
    };
}), b.register('2lJ8D', function(i, u) {
    a(i.exports, 'createNativeWaveShaperNodeFactory', function() {
        return e;
    });
    var c = b('3CFsN'),
        d = b('z8d4d');
    const e = (a, b, i, u, e, y, f) => (g, h) => {
        const f = g.createWaveShaper();
        if (null !== y && 'webkitAudioContext' === y.name && void 0 === g.createGain().gain.automationRate)
            return i(g, h);
        (0, d.assignNativeAudioNodeOptions)(f, h);
        const g = null === h.curve || h.curve instanceof Float32Array ? h.curve : new Float32Array(h.curve);
        if (null !== g && g.length < 2)
            throw b();
        (0, c.assignNativeAudioNodeOption)(f, {
            curve: g
        }, 'curve'), (0, c.assignNativeAudioNodeOption)(f, h, 'oversample');
        let h = null,
            i = !1;
        f(f, 'curve', a => () => a.call(f), b => i => (b.call(f, i), i && (u(i) && null === h ? h = a(g, f) : u(i) || null === h || (h(), h = null)), i));
        return e(f, () => {
            i = !0, u(f.curve) && (h = a(g, f));
        }, () => {
            i = !1, null !== h && (h(), h = null);
        });
    };
}), b.register('0x2jw', function(i, u) {
    a(i.exports, 'createNativeWaveShaperNodeFakerFactory', function() {
        return e;
    });
    var c = b('z8d4d'),
        d = b('HNggc');
    const e = (a, b, i, u, e) => (y, {
        curve: f,
        oversample: g,
        ...h
    }) => {
        const i = y.createWaveShaper(),
            j = y.createWaveShaper();
        (0, c.assignNativeAudioNodeOptions)(i, h), (0, c.assignNativeAudioNodeOptions)(j, h);
        const k = i(y, {
                ...h,
                gain: 1
            }),
            l = i(y, {
                ...h,
                gain: -1
            }),
            m = i(y, {
                ...h,
                gain: 1
            }),
            n = i(y, {
                ...h,
                gain: -1
            });
        let o = null,
            p = !1,
            q = null;
        const r = {
            get bufferSize() {},
            get channelCount() {
                return i.channelCount;
            },
            set channelCount(a) {
                k.channelCount = a, l.channelCount = a, i.channelCount = a, m.channelCount = a, j.channelCount = a, n.channelCount = a;
            },
            get channelCountMode() {
                return i.channelCountMode;
            },
            set channelCountMode(a) {
                k.channelCountMode = a, l.channelCountMode = a, i.channelCountMode = a, m.channelCountMode = a, j.channelCountMode = a, n.channelCountMode = a;
            },
            get channelInterpretation() {
                return i.channelInterpretation;
            },
            set channelInterpretation(a) {
                k.channelInterpretation = a, l.channelInterpretation = a, i.channelInterpretation = a, m.channelInterpretation = a, j.channelInterpretation = a, n.channelInterpretation = a;
            },
            get context() {
                return i.context;
            },
            get curve() {
                return q;
            },
            set curve(i) {
                if (null !== i && i.length < 2)
                    throw b();
                if (null === i)
                    i.curve = i, j.curve = i;
                else {
                    const s = i.length,
                        t = new Float32Array(s + 2 - s % 2),
                        u = new Float32Array(s + 2 - s % 2);
                    t[0] = i[0], u[0] = -i[s - 1];
                    const v = Math.ceil((s + 1) / 2),
                        w = (s + 1) / 2 - 1;
                    for (let x = 1; x < v; x += 1) {
                        const y = x / v * w,
                            z = Math.floor(y),
                            A = Math.ceil(y);
                        t[x] = z === A ? i[z] : (1 - (y - z)) * i[z] + (1 - (A - y)) * i[A], u[x] = z === A ? -i[s - 1 - z] : -(1 - (y - z)) * i[s - 1 - z] - (1 - (A - y)) * i[s - 1 - A];
                    }
                    t[v] = s % 2 == 1 ? i[v - 1] : (i[v - 2] + i[v - 1]) / 2, i.curve = t, j.curve = u;
                }
                q = i, p && (c(q) && null === o ? o = a(f, k) : null !== o && (o(), o = null));
            },
            get inputs() {
                return [k];
            },
            get numberOfInputs() {
                return i.numberOfInputs;
            },
            get numberOfOutputs() {
                return i.numberOfOutputs;
            },
            get oversample() {
                return i.oversample;
            },
            set oversample(a) {
                i.oversample = a, j.oversample = a;
            },
            addEventListener: (...a) => k.addEventListener(a[0], a[1], a[2]),
            dispatchEvent: (...a) => k.dispatchEvent(a[0]),
            removeEventListener: (...a) => k.removeEventListener(a[0], a[1], a[2])
        };
        null !== f && (r.curve = f instanceof Float32Array ? f : new Float32Array(f)), g !== r.oversample && (r.oversample = g);
        return e((0, d.interceptConnections)(r, m), () => {
            k.connect(i).connect(m), k.connect(l).connect(j).connect(n).connect(m), p = !0, c(q) && (o = a(f, k));
        }, () => {
            k.disconnect(i), i.disconnect(m), k.disconnect(l), l.disconnect(j), j.disconnect(n), n.disconnect(m), p = !1, null !== o && (o(), o = null);
        });
    };
}), b.register('u+ySU', function(b, i) {
    a(b.exports, 'createNotSupportedError', function() {
        return c;
    });
    const c = () => new DOMException('', 'NotSupportedError');
}), b.register('o1UCw', function(i, o) {
    a(i.exports, 'createOfflineAudioContextConstructor', function() {
        return f;
    });
    var c = b('d1yi+'),
        d = b('3CTHk');
    const e = {
            numberOfChannels: 1
        },
        f = (a, b, i, o, f) => class extends a {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(i()) : (this._state = 'running', f(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, c.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(a) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(a) : setTimeout(() => this._waitForThePromiseToSettle(a));
            }
            constructor(a, i, c) {
                let g;
                if ('number' == typeof a && void 0 !== i && void 0 !== c)
                    g = {
                        length: i,
                        numberOfChannels: a,
                        sampleRate: c
                    };
                else {
                    if ('object' != typeof a)
                        throw new Error('The given parameters are not valid.');
                    g = a;
                }
                const {
                    length: h,
                    numberOfChannels: i,
                    sampleRate: j
                } = {
                    ...e,
                    ...g
                }, k = o(i, h, j);
                b(d.testPromiseSupport, () => (0, d.testPromiseSupport)(k)) || k.addEventListener('statechange', (() => {
                    let l = 0;
                    const m = i => {
                        'running' === this._state && (l > 0 ? (k.removeEventListener('statechange', m), i.stopImmediatePropagation(), this._waitForThePromiseToSettle(i)) : l += 1);
                    };
                    return m;
                })()), super(k, i), this._length = h, this._nativeOfflineAudioContext = k, this._state = null;
            }
        };
}), b.register('2vQsZ', function(i, o) {
    a(i.exports, 'createOscillatorNodeConstructor', function() {
        return g;
    });
    var c = b('8fUiO'),
        d = b('vL9Ob'),
        e = b('gVhQ2');
    const f = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 440,
            periodicWave: void 0,
            type: 'sine'
        },
        g = (a, b, i, o, g, h, l) => class extends a {
            get detune() {
                return this._detune;
            }
            get frequency() {
                return this._frequency;
            }
            get onended() {
                return this._onended;
            }
            set onended(a) {
                const h = 'function' == typeof a ? l(this, a) : null;
                this._nativeOscillatorNode.onended = h;
                const i = this._nativeOscillatorNode.onended;
                this._onended = null !== i && i === h ? a : i;
            }
            get type() {
                return this._nativeOscillatorNode.type;
            }
            set type(a) {
                this._nativeOscillatorNode.type = a, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null);
            }
            setPeriodicWave(a) {
                this._nativeOscillatorNode.setPeriodicWave(a), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = a);
            }
            start(h = 0) {
                if (this._nativeOscillatorNode.start(h), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = h), 'closed' !== this.context.state) {
                    (0, d.setInternalStateToActive)(this);
                    const i = () => {
                        this._nativeOscillatorNode.removeEventListener('ended', i), (0, c.isActiveAudioNode)(this) && (0, e.setInternalStateToPassive)(this);
                    };
                    this._nativeOscillatorNode.addEventListener('ended', i);
                }
            }
            stop(i = 0) {
                this._nativeOscillatorNode.stop(i), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = i);
            }
            constructor(i, c) {
                const j = g(i),
                    k = {
                        ...f,
                        ...c
                    },
                    l = x(j, k),
                    m = h(j),
                    n = m ? o() : null,
                    o = i.sampleRate / 2;
                super(i, !1, l, n), this._detune = b(this, m, l.detune, 153600, -153600), this._frequency = b(this, m, l.frequency, o, -o), this._nativeOscillatorNode = l, this._onended = null, this._oscillatorNodeRenderer = n, null !== this._oscillatorNodeRenderer && void 0 !== k.periodicWave && (this._oscillatorNodeRenderer.periodicWave = k.periodicWave);
            }
        };
}), b.register('X6bSm', function(x, o) {
    a(x.exports, 'createOscillatorNodeRendererFactory', function() {
        return d;
    });
    var c = b('BRlDZ');
    const d = (a, b, x, o, d) => () => {
        const e = new WeakMap();
        let f = null,
            g = null,
            h = null;
        return {
            set periodicWave(a) {
                f = a;
            },
            set start(a) {
                g = a;
            },
            set stop(a) {
                h = a;
            },
            render(f, g) {
                const i = e.get(g);
                return void 0 !== i ? Promise.resolve(i) : (async (f, g) => {
                    let j = x(f);
                    const k = (0, c.isOwnedByContext)(j, g);
                    if (!k) {
                        const l = {
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            detune: j.detune.value,
                            frequency: j.frequency.value,
                            periodicWave: null === f ? void 0 : f,
                            type: j.type
                        };
                        j = b(g, l), null !== g && j.start(g), null !== h && j.stop(h);
                    }
                    return e.set(g, j), k ? (await a(g, f.detune, j.detune), await a(g, f.frequency, j.frequency)) : (await o(g, f.detune, j.detune), await o(g, f.frequency, j.frequency)), await d(f, g, j), j;
                })(f, g);
            }
        };
    };
}), b.register('EOVnq', function(x, o) {
    a(x.exports, 'createPannerNodeConstructor', function() {
        return e;
    });
    var c = b('0D9Ao');
    const d = {
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
        e = (a, b, x, o, e, r, f) => class extends a {
            get coneInnerAngle() {
                return this._nativePannerNode.coneInnerAngle;
            }
            set coneInnerAngle(a) {
                this._nativePannerNode.coneInnerAngle = a;
            }
            get coneOuterAngle() {
                return this._nativePannerNode.coneOuterAngle;
            }
            set coneOuterAngle(a) {
                this._nativePannerNode.coneOuterAngle = a;
            }
            get coneOuterGain() {
                return this._nativePannerNode.coneOuterGain;
            }
            set coneOuterGain(a) {
                this._nativePannerNode.coneOuterGain = a;
            }
            get distanceModel() {
                return this._nativePannerNode.distanceModel;
            }
            set distanceModel(a) {
                this._nativePannerNode.distanceModel = a;
            }
            get maxDistance() {
                return this._nativePannerNode.maxDistance;
            }
            set maxDistance(a) {
                this._nativePannerNode.maxDistance = a;
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
            set panningModel(a) {
                this._nativePannerNode.panningModel = a;
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
            set refDistance(a) {
                this._nativePannerNode.refDistance = a;
            }
            get rolloffFactor() {
                return this._nativePannerNode.rolloffFactor;
            }
            set rolloffFactor(a) {
                this._nativePannerNode.rolloffFactor = a;
            }
            constructor(a, g) {
                const f = e(a),
                    g = {
                        ...d,
                        ...g
                    },
                    h = x(f, g),
                    i = r(f);
                super(a, !1, h, i ? o() : null), this._nativePannerNode = h, this._orientationX = b(this, i, h.orientationX, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationY = b(this, i, h.orientationY, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationZ = b(this, i, h.orientationZ, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), this._positionX = b(this, i, h.positionX, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), this._positionY = b(this, i, h.positionY, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), this._positionZ = b(this, i, h.positionZ, c.MOST_POSITIVE_SINGLE_FLOAT, c.MOST_NEGATIVE_SINGLE_FLOAT), f(this, 1);
            }
        };
}), b.register('pNbNq', function(x, o) {
    a(x.exports, 'createPannerNodeRendererFactory', function() {
        return e;
    });
    var c = b('JoVZe'),
        d = b('BRlDZ');
    const e = (a, b, x, o, e, r, f, g, i, h) => () => {
        const f = new WeakMap();
        let g = null;
        return {
            render(i, j) {
                const h = f.get(j);
                return void 0 !== h ? Promise.resolve(h) : (async (i, j) => {
                    let i = null,
                        j = r(i);
                    const k = {
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation
                        },
                        l = {
                            ...k,
                            coneInnerAngle: j.coneInnerAngle,
                            coneOuterAngle: j.coneOuterAngle,
                            coneOuterGain: j.coneOuterGain,
                            distanceModel: j.distanceModel,
                            maxDistance: j.maxDistance,
                            panningModel: j.panningModel,
                            refDistance: j.refDistance,
                            rolloffFactor: j.rolloffFactor
                        },
                        m = (0, d.isOwnedByContext)(j, j);
                    if ('bufferSize' in j)
                        i = o(j, {
                            ...k,
                            gain: 1
                        });
                    else if (!m) {
                        const n = {
                            ...l,
                            orientationX: j.orientationX.value,
                            orientationY: j.orientationY.value,
                            orientationZ: j.orientationZ.value,
                            positionX: j.positionX.value,
                            positionY: j.positionY.value,
                            positionZ: j.positionZ.value
                        };
                        j = e(j, n);
                    }
                    if (f.set(j, null === i ? j : i), null !== i) {
                        if (null === g) {
                            if (null === f)
                                throw new Error('Missing the native OfflineAudioContext constructor.');
                            const n = new f(6, i.context.length, j.sampleRate),
                                o = b(n, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: 6
                                });
                            o.connect(n.destination), g = (async () => {
                                const p = await Promise.all([
                                    i.orientationX,
                                    i.orientationY,
                                    i.orientationZ,
                                    i.positionX,
                                    i.positionY,
                                    i.positionZ
                                ].map(async (p, o) => {
                                    const q = x(n, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: 0 === o ? 1 : 0
                                    });
                                    return await g(n, p, q.offset), q;
                                }));
                                for (let q = 0; q < 6; q += 1)
                                    p[q].connect(o, 0, q), p[q].start(0);
                                return h(q);
                            })();
                        }
                        const n = await g,
                            o = c(j, {
                                ...k,
                                gain: 1
                            });
                        await i(i, j, o);
                        const p = [];
                        for (let q = 0; q < n.numberOfChannels; q += 1)
                            p.push(n.getChannelData(q));
                        let r = [
                                p[0][0],
                                p[1][0],
                                p[2][0]
                            ],
                            s = [
                                p[3][0],
                                p[4][0],
                                p[5][0]
                            ],
                            t = c(j, {
                                ...k,
                                gain: 1
                            }),
                            u = e(j, {
                                ...l,
                                orientationX: r[0],
                                orientationY: r[1],
                                orientationZ: r[2],
                                positionX: s[0],
                                positionY: s[1],
                                positionZ: s[2]
                            });
                        o.connect(t).connect(u.inputs[0]), u.connect(i);
                        for (let v = 128; v < n.length; v += 128) {
                            const w = [
                                    p[0][v],
                                    p[1][v],
                                    p[2][v]
                                ],
                                x = [
                                    p[3][v],
                                    p[4][v],
                                    p[5][v]
                                ];
                            if (w.some((w, v) => w !== r[v]) || x.some((w, v) => w !== s[v])) {
                                r = w, s = x;
                                const y = v / j.sampleRate;
                                t.gain.setValueAtTime(0, y), t = c(j, {
                                    ...k,
                                    gain: 0
                                }), u = e(j, {
                                    ...l,
                                    orientationX: r[0],
                                    orientationY: r[1],
                                    orientationZ: r[2],
                                    positionX: s[0],
                                    positionY: s[1],
                                    positionZ: s[2]
                                }), t.gain.setValueAtTime(1, y), o.connect(t).connect(u.inputs[0]), u.connect(i);
                            }
                        }
                        return i;
                    }
                    return m ? (await a(j, i.orientationX, j.orientationX), await a(j, i.orientationY, j.orientationY), await a(j, i.orientationZ, j.orientationZ), await a(j, i.positionX, j.positionX), await a(j, i.positionY, j.positionY), await a(j, i.positionZ, j.positionZ)) : (await g(j, i.orientationX, j.orientationX), await g(j, i.orientationY, j.orientationY), await g(j, i.orientationZ, j.orientationZ), await g(j, i.positionX, j.positionX), await g(j, i.positionY, j.positionY), await g(j, i.positionZ, j.positionZ)), (0, c.isNativeAudioNodeFaker)(j) ? await i(i, j, j.inputs[0]) : await i(i, j, j), j;
                })(i, j);
            }
        };
    };
}), b.register('hnkVR', function(b, e) {
    a(b.exports, 'createPeriodicWaveConstructor', function() {
        return d;
    });
    const c = {
            disableNormalization: !1
        },
        d = (a, b, e, d) => class d {
            static[Symbol.hasInstance](a) {
                return null !== a && 'object' == typeof a && Object.getPrototypeOf(a) === d.prototype || e.has(a);
            }
            constructor(d, d) {
                const e = b(d),
                    f = d({
                        ...c,
                        ...d
                    }),
                    g = a(e, f);
                return e.add(g), g;
            }
        };
}), b.register('zbibj', function(b, e) {
    a(b.exports, 'createRenderAutomation', function() {
        return c;
    });
    const c = (a, b) => (e, c, c) => (a(c).replay(c), b(c, e, c));
}), b.register('1yh9R', function(b, e) {
    a(b.exports, 'createRenderInputsOfAudioNode', function() {
        return c;
    });
    const c = (a, b, e) => async (c, c, d) => {
        const d = a(c);
        await Promise.all(d.activeInputs.map((a, d) => Array.from(a).map(async ([e, f]) => {
            const g = b(e),
                h = await g.render(e, c),
                i = c.context.destination;
            e(e) || c === i && e(c) || h.connect(d, f, d);
        })).reduce((e, b) => [
            ...e,
            ...b
        ], []));
    };
}), b.register('kzR6K', function(b, e) {
    a(b.exports, 'createRenderInputsOfAudioParam', function() {
        return c;
    });
    const c = (a, b, e) => async (c, c, d) => {
        const d = b(c);
        await Promise.all(Array.from(d.activeInputs).map(async ([e, f]) => {
            const g = a(e),
                h = await g.render(e, c);
            e(e) || h.connect(d, f);
        }));
    };
}), b.register('OKtcX', function(e, c) {
    a(e.exports, 'createRenderNativeOfflineAudioContext', function() {
        return d;
    });
    var c = b('3CTHk');
    const d = (a, b, e, c) => d => a(c.testPromiseSupport, () => (0, c.testPromiseSupport)(d)) ? Promise.resolve(a(c, c)).then(a => {
        if (!a) {
            const e = e(d, 512, 0, 1);
            d.oncomplete = () => {
                e.onaudioprocess = null, e.disconnect();
            }, e.onaudioprocess = () => d.currentTime, e.connect(d.destination);
        }
        return d.startRendering();
    }) : new Promise(a => {
        const e = b(d, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        d.oncomplete = b => {
            e.disconnect(), a(b.renderedBuffer);
        }, e.connect(d.destination), d.startRendering();
    });
}), b.register('ZUNuZ', function(b, e) {
    a(b.exports, 'createSetActiveAudioWorkletNodeInputs', function() {
        return c;
    });
    const c = a => (b, e) => {
        a.set(b, e);
    };
}), b.register('xIh7J', function(b, e) {
    a(b.exports, 'createSetAudioNodeTailTime', function() {
        return c;
    });
    const c = a => (b, e) => a.set(b, e);
}), b.register('dDwxy', function(e, c) {
    a(e.exports, 'createStartRendering', function() {
        return d;
    });
    var c = b('0+f0e');
    const d = (a, b, e, c, d, e, f, e) => (f, g) => e(f).render(f, g).then(() => Promise.all(Array.from(c(g)).map(a => e(a).render(a, g)))).then(() => d(g)).then(e => ('function' != typeof e.copyFromChannel ? (f(e), (0, c.wrapAudioBufferGetChannelDataMethod)(e)) : b(e, () => e(e)) || e(e), a.add(e), e));
}), b.register('QJ76a', function(b, e) {
    a(b.exports, 'createStereoPannerNodeConstructor', function() {
        return d;
    });
    const c = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            pan: 0
        },
        d = (a, b, e, d, d, e) => class extends a {
            get pan() {
                return this._pan;
            }
            constructor(a, f) {
                const e = d(a),
                    f = {
                        ...c,
                        ...f
                    },
                    g = e(e, f),
                    h = e(e);
                super(a, !1, g, h ? d() : null), this._pan = b(this, h, g.pan);
            }
        };
}), b.register('gtEcJ', function(e, c) {
    a(e.exports, 'createStereoPannerNodeRendererFactory', function() {
        return e;
    });
    var c = b('JoVZe'),
        d = b('BRlDZ');
    const e = (a, b, e, c, e) => () => {
        const f = new WeakMap();
        return {
            render(e, f) {
                const g = f.get(f);
                return void 0 !== g ? Promise.resolve(g) : (async (e, f) => {
                    let h = e(e);
                    const i = (0, d.isOwnedByContext)(h, f);
                    if (!i) {
                        const j = {
                            channelCount: h.channelCount,
                            channelCountMode: h.channelCountMode,
                            channelInterpretation: h.channelInterpretation,
                            pan: h.pan.value
                        };
                        h = b(f, j);
                    }
                    return f.set(f, h), i ? await a(f, e.pan, h.pan) : await c(f, e.pan, h.pan), (0, c.isNativeAudioNodeFaker)(h) ? await e(e, f, h.inputs[0]) : await e(e, f, h), h;
                })(e, f);
            }
        };
    };
}), b.register('CTSM/', function(b, e) {
    a(b.exports, 'createTestAudioBufferConstructorSupport', function() {
        return c;
    });
    const c = a => () => {
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
}), b.register('VcrqA', function(b, e) {
    a(b.exports, 'createTestAudioBufferCopyChannelMethodsSubarraySupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        const d = new a(1, 1, 44100).createBuffer(1, 1, 44100);
        if (void 0 === d.copyToChannel)
            return !0;
        const e = new Float32Array(2);
        try {
            d.copyFromChannel(e, 0, 0);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('nXtQ4', function(b, e) {
    a(b.exports, 'createTestAudioContextCloseMethodSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        if (void 0 !== a.prototype && void 0 !== a.prototype.close)
            return !0;
        const d = new a(),
            e = void 0 !== d.close;
        try {
            d.close();
        } catch {}
        return e;
    };
}), b.register('ymEkf', function(b, e) {
    a(b.exports, 'createTestAudioContextDecodeAudioDataMethodTypeErrorSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return Promise.resolve(!1);
        const d = new a(1, 1, 44100);
        return new Promise(a => {
            let e = !0;
            const f = f => {
                e && (e = !1, d.startRendering(), a(f instanceof TypeError));
            };
            let g;
            try {
                g = d.decodeAudioData(null, () => {}, f);
            } catch (a) {
                f(a);
            }
            void 0 !== g && g.catch(f);
        });
    };
}), b.register('dfUGN', function(b, e) {
    a(b.exports, 'createTestAudioContextOptionsSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        let d;
        try {
            d = new a({
                latencyHint: 'balanced'
            });
        } catch {
            return !1;
        }
        return d.close(), !0;
    };
}), b.register('6rqOq', function(b, e) {
    a(b.exports, 'createTestAudioNodeConnectMethodSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        const d = new a(1, 1, 44100).createGain(),
            e = d.connect(d) === d;
        return d.disconnect(d), e;
    };
}), b.register('tJLWg', function(b, d) {
    a(b.exports, 'createTestAudioWorkletProcessorNoOutputsSupport', function() {
        return c;
    });
    const c = (a, b) => async () => {
        if (null === a)
            return !0;
        if (null === b)
            return !1;
        const d = new Blob(['let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'], {
                type: 'application/javascript; charset=utf-8'
            }),
            e = new MessageChannel(),
            f = new b(1, 128, 44100),
            g = URL.createObjectURL(d);
        let h = !1;
        try {
            await f.audioWorklet.addModule(g);
            const i = new a(f, 'a', {
                    numberOfOutputs: 0
                }),
                j = f.createOscillator();
            await new Promise(a => {
                i.port.onmessage = () => a(), i.port.postMessage(e.port2, [e.port2]);
            }), i.port.onmessage = () => h = !0, j.connect(i), j.start(0), await f.startRendering(), h = await new Promise(a => {
                e.port1.onmessage = ({
                    data: k
                }) => a(1 === k), e.port1.postMessage(0);
            });
        } catch {} finally {
            e.port1.close(), URL.revokeObjectURL(g);
        }
        return h;
    };
}), b.register('YTJiX', function(b, d) {
    a(b.exports, 'createTestAudioWorkletProcessorPostMessageSupport', function() {
        return c;
    });
    const c = (a, b) => async () => {
        if (null === a)
            return !0;
        if (null === b)
            return !1;
        const d = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
                type: 'application/javascript; charset=utf-8'
            }),
            e = new b(1, 128, 44100),
            f = URL.createObjectURL(d);
        let g = !1,
            h = !1;
        try {
            await e.audioWorklet.addModule(f);
            const i = new a(e, 'a', {
                    numberOfOutputs: 0
                }),
                j = e.createOscillator();
            i.port.onmessage = () => g = !0, i.onprocessorerror = () => h = !0, j.connect(i), j.start(0), await e.startRendering();
        } catch {} finally {
            URL.revokeObjectURL(f);
        }
        return g && !h;
    };
}), b.register('hHPn1', function(b, e) {
    a(b.exports, 'createTestChannelMergerNodeChannelCountSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        const d = new a(1, 1, 44100).createChannelMerger();
        if ('max' === d.channelCountMode)
            return !0;
        try {
            d.channelCount = 2;
        } catch {
            return !0;
        }
        return !1;
    };
}), b.register('YYyKH', function(b, e) {
    a(b.exports, 'createTestConstantSourceNodeAccurateSchedulingSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        const d = new a(1, 1, 44100);
        if (void 0 === d.createConstantSource)
            return !0;
        return d.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY;
    };
}), b.register('8qd9Z', function(b, e) {
    a(b.exports, 'createTestConvolverNodeBufferReassignabilitySupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        const d = new a(1, 1, 44100),
            e = d.createConvolver();
        e.buffer = d.createBuffer(1, 1, d.sampleRate);
        try {
            e.buffer = d.createBuffer(1, 1, d.sampleRate);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('Kvyj0', function(b, d) {
    a(b.exports, 'createTestConvolverNodeChannelCountSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        const d = new a(1, 1, 44100).createConvolver();
        try {
            d.channelCount = 1;
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('jJcY7', function(b, d) {
    a(b.exports, 'createTestIsSecureContextSupport', function() {
        return c;
    });
    const c = a => () => null !== a && a.hasOwnProperty('isSecureContext');
}), b.register('EpVkB', function(b, d) {
    a(b.exports, 'createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return !1;
        const d = new a();
        try {
            return d.createMediaStreamSource(new MediaStream()), !1;
        } catch (a) {
            return !0;
        } finally {
            d.close();
        }
    };
}), b.register('u8tjC', function(b, d) {
    a(b.exports, 'createTestOfflineAudioContextCurrentTimeSupport', function() {
        return c;
    });
    const c = (a, b) => () => {
        if (null === b)
            return Promise.resolve(!1);
        const d = new b(1, 1, 44100),
            e = a(d, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            });
        return new Promise(a => {
            d.oncomplete = () => {
                e.disconnect(), a(0 !== d.currentTime);
            }, d.startRendering();
        });
    };
}), b.register('BuMnf', function(b, e) {
    a(b.exports, 'createTestStereoPannerNodeDefaultValueSupport', function() {
        return c;
    });
    const c = a => () => {
        if (null === a)
            return Promise.resolve(!1);
        const d = new a(1, 1, 44100);
        if (void 0 === d.createStereoPanner)
            return Promise.resolve(!0);
        if (void 0 === d.createConstantSource)
            return Promise.resolve(!0);
        const e = d.createConstantSource(),
            f = d.createStereoPanner();
        return e.channelCount = 1, e.offset.value = 1, f.channelCount = 1, e.start(), e.connect(f).connect(d.destination), d.startRendering().then(a => 1 !== a.getChannelData(0)[0]);
    };
}), b.register('eQ5eh', function(b, d) {
    a(b.exports, 'createUnknownError', function() {
        return c;
    });
    const c = () => new DOMException('', 'UnknownError');
}), b.register('0gKds', function(b, d) {
    a(b.exports, 'createWaveShaperNodeConstructor', function() {
        return d;
    });
    const c = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            curve: null,
            oversample: 'none'
        },
        d = (a, b, d, d, d, e, f) => class extends a {
            get curve() {
                return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
            }
            set curve(a) {
                if (null === a)
                    this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([
                        0,
                        0
                    ]);
                else {
                    if (a.length < 2)
                        throw b();
                    this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = a;
                }
            }
            get oversample() {
                return this._nativeWaveShaperNode.oversample;
            }
            set oversample(a) {
                this._nativeWaveShaperNode.oversample = a;
            }
            constructor(a, b) {
                const e = d(a),
                    f = {
                        ...c,
                        ...b
                    },
                    g = d(e, f);
                super(a, !0, g, e(e) ? d() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = g, f(this, 1);
            }
        };
}), b.register('eVguZ', function(d, f) {
    a(d.exports, 'createWaveShaperNodeRendererFactory', function() {
        return e;
    });
    var c = b('JoVZe'),
        d = b('BRlDZ');
    const e = (a, b, d) => () => {
        const f = new WeakMap();
        return {
            render(e, f) {
                const g = f.get(f);
                return void 0 !== g ? Promise.resolve(g) : (async (e, f) => {
                    let h = b(e);
                    if (!(0, d.isOwnedByContext)(h, f)) {
                        const i = {
                            channelCount: h.channelCount,
                            channelCountMode: h.channelCountMode,
                            channelInterpretation: h.channelInterpretation,
                            curve: h.curve,
                            oversample: h.oversample
                        };
                        h = a(f, i);
                    }
                    return f.set(f, h), (0, c.isNativeAudioNodeFaker)(h) ? await d(e, f, h.inputs[0]) : await d(e, f, h), h;
                })(e, f);
            }
        };
    };
}), b.register('6zPeJ0', function(b, d) {
    a(b.exports, 'createWindow', function() {
        return c;
    });
    const c = () => 'undefined' == typeof window ? null : window;
}), b.register('k2yXg', function(b, d) {
    a(b.exports, 'createWrapAudioBufferCopyChannelMethods', function() {
        return c;
    });
    const c = (a, b) => d => {
        d.copyFromChannel = (c, d, d = 0) => {
            const e = a(d),
                f = a(d);
            if (f >= d.numberOfChannels)
                throw b();
            const g = d.length,
                h = d.getChannelData(f),
                i = c.length;
            for (let j = e < 0 ? -e : 0; j + e < g && j < i; j += 1)
                c[j] = h[j + e];
        }, d.copyToChannel = (c, d, e = 0) => {
            const f = a(e),
                g = a(d);
            if (g >= d.numberOfChannels)
                throw b();
            const h = d.length,
                i = d.getChannelData(g),
                j = c.length;
            for (let k = f < 0 ? -f : 0; k + f < h && k < j; k += 1)
                i[k + f] = c[k];
        };
    };
}), b.register('qTaXw', function(b, d) {
    a(b.exports, 'createWrapAudioBufferCopyChannelMethodsOutOfBounds', function() {
        return c;
    });
    const c = a => b => {
        var d, e;
        b.copyFromChannel = (d = b.copyFromChannel, (e, d, f = 0) => {
            const g = a(f),
                h = a(d);
            if (g < b.length)
                return d.call(b, e, h, g);
        }), b.copyToChannel = (e = b.copyToChannel, (d, d, g = 0) => {
            const h = a(g),
                i = a(d);
            if (h < b.length)
                return e.call(b, d, i, h);
        });
    };
}), b.register('635v3', function(b, e) {
    a(b.exports, 'createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer', function() {
        return c;
    });
    const c = a => (b, e) => {
        const d = e.createBuffer(1, 1, 44100);
        null === b.buffer && (b.buffer = d), a(b, 'buffer', a => () => {
            const e = a.call(b);
            return e === d ? null : e;
        }, a => e => a.call(b, null === e ? d : e));
    };
}), b.register('YNMZp', function(b, e) {
    a(b.exports, 'createWrapChannelMergerNode', function() {
        return c;
    });
    const c = (a, b) => (e, c) => {
        c.channelCount = 1, c.channelCountMode = 'explicit', Object.defineProperty(c, 'channelCount', {
            get: () => 1,
            set: () => {
                throw a();
            }
        }), Object.defineProperty(c, 'channelCountMode', {
            get: () => 'explicit',
            set: () => {
                throw a();
            }
        });
        const d = e.createBufferSource();
        b(c, () => {
            const e = c.numberOfInputs;
            for (let f = 0; f < e; f += 1)
                d.connect(c, 0, f);
        }, () => d.disconnect(c));
    };
}), b.register('0Nb5F', function(b, e) {
    a(b.exports, 'getFirstSample', function() {
        return c;
    });
    const c = (a, b, e) => void 0 === a.copyFromChannel ? a.getChannelData(e)[0] : (a.copyFromChannel(b, e), b[0]);
}), b.register('FxuKE', function(b, e) {
    a(b.exports, 'isDCCurve', function() {
        return c;
    });
    const c = a => {
        if (null === a)
            return !1;
        const d = a.length;
        return d % 2 != 0 ? 0 !== a[Math.floor(d / 2)] : a[d / 2 - 1] + a[d / 2] !== 0;
    };
}), b.register('Ot0bl', function(b, e) {
    a(b.exports, 'overwriteAccessors', function() {
        return c;
    });
    const c = (a, b, e, c) => {
        let d = e;
        for (; !d.hasOwnProperty(b);)
            d = Object.getPrototypeOf(d);
        const {
            get: f,
            set: g
        } = Object.getOwnPropertyDescriptor(d, b);
        Object.defineProperty(e, b, {
            get: e(f),
            set: c(g)
        });
    };
}), b.register('OkUF4', function(b, e) {
    a(b.exports, 'sanitizeAudioWorkletNodeOptions', function() {
        return c;
    });
    const c = a => ({
        ...a,
        outputChannelCount: void 0 !== a.outputChannelCount ? a.outputChannelCount : 1 === a.numberOfInputs && 1 === a.numberOfOutputs ? [a.channelCount] : Array.from({
            length: a.numberOfOutputs
        }, () => 1)
    });
}), b.register('rcVrM', function(b, e) {
    a(b.exports, 'sanitizeChannelSplitterOptions', function() {
        return c;
    });
    const c = a => ({
        ...a,
        channelCount: a.numberOfOutputs
    });
}), b.register('f3YRl', function(b, e) {
    a(b.exports, 'sanitizePeriodicWaveOptions', function() {
        return c;
    });
    const c = a => {
        const {
            imag: d,
            real: e
        } = f;
        return void 0 === d ? void 0 === e ? {
            ...f,
            imag: [
                0,
                0
            ],
            real: [
                0,
                0
            ]
        } : {
            ...f,
            imag: Array.from(e, () => 0),
            real: e
        } : void 0 === e ? {
            ...f,
            imag: d,
            real: Array.from(d, () => 0)
        } : {
            ...f,
            imag: d,
            real: e
        };
    };
}), b.register('Zhdu/', function(b, e) {
    a(b.exports, 'setValueAtTimeUntilPossible', function() {
        return c;
    });
    const c = (a, b, e) => {
        try {
            a.setValueAtTime(b, e);
        } catch (c) {
            if (9 !== c.code)
                throw c;
            c(a, b, e + 1e-7);
        }
    };
}), b.register('PNRpP', function(b, e) {
    a(b.exports, 'testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport', function() {
        return c;
    });
    const c = a => {
        const d = a.createBufferSource();
        d.start();
        try {
            d.start();
        } catch {
            return !0;
        }
        return !1;
    };
}), b.register('vC1MB', function(b, e) {
    a(b.exports, 'testAudioBufferSourceNodeStartMethodOffsetClampingSupport', function() {
        return c;
    });
    const c = a => {
        const d = a.createBufferSource(),
            e = a.createBuffer(1, 1, 44100);
        d.buffer = e;
        try {
            d.start(0, 1);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('yfKmd', function(b, e) {
    a(b.exports, 'testAudioBufferSourceNodeStopMethodNullifiedBufferSupport', function() {
        return c;
    });
    const c = a => {
        const d = a.createBufferSource();
        d.start();
        try {
            d.stop();
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('pydyb', function(b, e) {
    a(b.exports, 'testAudioScheduledSourceNodeStartMethodNegativeParametersSupport', function() {
        return c;
    });
    const c = a => {
        const d = a.createOscillator();
        try {
            d.start(-1);
        } catch (a) {
            return a instanceof RangeError;
        }
        return !1;
    };
}), b.register('69Ah7', function(b, e) {
    a(b.exports, 'testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport', function() {
        return c;
    });
    const c = a => {
        const d = a.createBuffer(1, 1, 44100),
            e = a.createBufferSource();
        e.buffer = d, e.start(), e.stop();
        try {
            return e.stop(), !0;
        } catch {
            return !1;
        }
    };
}), b.register('DGMmt', function(b, e) {
    a(b.exports, 'testAudioScheduledSourceNodeStopMethodNegativeParametersSupport', function() {
        return c;
    });
    const c = a => {
        const d = a.createOscillator();
        try {
            d.stop(-1);
        } catch (a) {
            return a instanceof RangeError;
        }
        return !1;
    };
}), b.register('y/XEx', function(b, e) {
    a(b.exports, 'testAudioWorkletNodeOptionsClonability', function() {
        return c;
    });
    const c = a => {
        const {
            port1: d,
            port2: e
        } = new MessageChannel();
        try {
            d.postMessage(a);
        } finally {
            d.close(), e.close();
        }
    };
}), b.register('K20XD', function(b, e) {
    a(b.exports, 'testDomExceptionConstructorSupport', function() {
        return c;
    });
    const c = () => {
        try {
            new DOMException();
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('lfXp6', function(b, e) {
    a(b.exports, 'testTransferablesSupport', function() {
        return c;
    });
    const c = () => new Promise(a => {
        const d = new ArrayBuffer(0),
            {
                port1: e,
                port2: f
            } = new MessageChannel();
        e.onmessage = ({
            data: g
        }) => a(null !== g), f.postMessage(g, [g]);
    });
}), b.register('b6VZj', function(b, e) {
    a(b.exports, 'wrapAudioBufferSourceNodeStartMethodOffsetClamping', function() {
        return c;
    });
    const c = a => {
        var d;
        a.start = (d = a.start, (e = 0, f = 0, c) => {
            const g = a.buffer,
                h = null === g ? f : Math.min(g.duration, f);
            null !== g && h > g.duration - 0.5 / a.context.sampleRate ? d.call(a, e, 0, 0) : d.call(a, e, h, c);
        });
    };
}), b.register('GB9rx', function(e, f) {
    a(e.exports, 'wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls', function() {
        return d;
    });
    var c = b('HNggc');
    const d = (a, b) => {
        const e = b.createGain();
        a.connect(e);
        const f = (d = a.disconnect, () => {
            d.call(a, e), a.removeEventListener('ended', f);
        });
        var g;
        a.addEventListener('ended', f), (0, c.interceptConnections)(a, e), a.stop = (b => {
            let h = !1;
            return (i = 0) => {
                if (h)
                    try {
                        b.call(a, i);
                    } catch {
                        e.gain.setValueAtTime(0, i);
                    }
                else
                    b.call(a, i), h = !0;
            };
        })(a.stop);
    };
}), b.register('Yui4E', function(b, p) {
    a(b.exports, 'wrapEventListener', function() {
        return c;
    });
    const c = (a, b) => p => {
        const d = {
            value: a
        };
        return Object.defineProperties(p, {
            currentTarget: d,
            target: d
        }), 'function' == typeof b ? b.call(a, p) : b.handleEvent.call(a, p);
    };
}), b.register('HPGUm', function(a, p) {
    b('sCcFp529'), b('sCcFp528'), b('sCcFp527'), b('sCcFp526'), b('sCcFp525'), b('sCcFp524'), b('sCcFp523'), b('sCcFp522'), b('sCcFp521'), b('sCcFp520'), b('sCcFp519'), b('sCcFp518'), b('sCcFp517'), b('sCcFp516'), b('sCcFp515'), b('sCcFp514'), b('sCcFp513'), b('sCcFp512'), b('sCcFp511'), b('sCcFp510'), b('sCcFp509'), b('sCcFp508'), b('sCcFp507'), b('sCcFp506'), b('sCcFp505'), b('sCcFp504'), b('sCcFp503'), b('sCcFp502'), b('sCcFp501'), b('sCcFp500'), b('sCcFp499'), b('sCcFp498'), b('sCcFp497'), b('sCcFp496'), b('sCcFp495'), b('sCcFp494'), b('sCcFp493'), b('sCcFp492'), b('sCcFp491'), b('sCcFp490'), b('sCcFp489'), b('sCcFp488'), b('sCcFp487'), b('sCcFp486'), b('sCcFp485'), b('sCcFp484'), b('sCcFp483'), b('sCcFp482'), b('sCcFp481'), b('sCcFp480'), b('sCcFp479'), b('sCcFp478'), b('sCcFp477'), b('sCcFp476'), b('sCcFp475'), b('sCcFp474'), b('sCcFp473'), b('sCcFp472'), b('sCcFp471'), b('sCcFp470'), b('sCcFp469'), b('sCcFp468'), b('sCcFp467'), b('sCcFp466'), b('sCcFp465'), b('sCcFp464'), b('sCcFp463'), b('sCcFp462'), b('sCcFp461'), b('sCcFp460'), b('sCcFp459'), b('sCcFp458'), b('sCcFp457'), b('sCcFp456'), b('sCcFp455'), b('sCcFp454'), b('sCcFp453'), b('sCcFp452'), b('sCcFp451'), b('sCcFp450'), b('sCcFp449'), b('sCcFp448'), b('sCcFp447'), b('sCcFp446');
}), b.register('sCcFp529', function(a, b) {}), b.register('sCcFp528', function(a, b) {}), b.register('sCcFp527', function(a, b) {}), b.register('sCcFp526', function(a, b) {}), b.register('sCcFp525', function(a, b) {}), b.register('sCcFp524', function(a, b) {}), b.register('sCcFp523', function(a, b) {}), b.register('sCcFp522', function(a, b) {}), b.register('sCcFp521', function(a, b) {}), b.register('sCcFp520', function(a, b) {}), b.register('sCcFp519', function(a, b) {}), b.register('sCcFp518', function(a, b) {}), b.register('sCcFp517', function(a, b) {}), b.register('sCcFp516', function(a, b) {}), b.register('sCcFp515', function(a, b) {}), b.register('sCcFp514', function(a, b) {}), b.register('sCcFp513', function(a, b) {}), b.register('sCcFp512', function(a, b) {}), b.register('sCcFp511', function(a, b) {}), b.register('sCcFp510', function(a, b) {}), b.register('sCcFp509', function(a, b) {}), b.register('sCcFp508', function(a, b) {}), b.register('sCcFp507', function(a, b) {}), b.register('sCcFp506', function(a, b) {}), b.register('sCcFp505', function(a, b) {}), b.register('sCcFp504', function(a, b) {}), b.register('sCcFp503', function(a, b) {}), b.register('sCcFp502', function(a, b) {}), b.register('sCcFp501', function(a, b) {}), b.register('sCcFp500', function(a, b) {}), b.register('sCcFp499', function(a, b) {}), b.register('sCcFp498', function(a, b) {}), b.register('sCcFp497', function(a, b) {}), b.register('sCcFp496', function(a, b) {}), b.register('sCcFp495', function(a, b) {}), b.register('sCcFp494', function(a, b) {}), b.register('sCcFp493', function(a, b) {}), b.register('sCcFp492', function(a, b) {}), b.register('sCcFp491', function(a, b) {}), b.register('sCcFp490', function(a, b) {}), b.register('sCcFp489', function(a, b) {}), b.register('sCcFp488', function(a, b) {}), b.register('sCcFp487', function(a, b) {}), b.register('sCcFp486', function(a, b) {}), b.register('sCcFp485', function(a, b) {}), b.register('sCcFp484', function(a, b) {}), b.register('sCcFp483', function(a, b) {}), b.register('sCcFp482', function(a, b) {}), b.register('sCcFp481', function(a, b) {}), b.register('sCcFp480', function(a, b) {}), b.register('sCcFp479', function(a, b) {}), b.register('sCcFp478', function(a, b) {}), b.register('sCcFp477', function(a, b) {}), b.register('sCcFp476', function(a, b) {}), b.register('sCcFp475', function(a, b) {}), b.register('sCcFp474', function(a, b) {}), b.register('sCcFp473', function(a, b) {}), b.register('sCcFp472', function(a, b) {}), b.register('sCcFp471', function(a, b) {}), b.register('sCcFp470', function(a, b) {}), b.register('sCcFp469', function(a, b) {}), b.register('sCcFp468', function(a, b) {}), b.register('sCcFp467', function(a, b) {}), b.register('sCcFp466', function(a, b) {}), b.register('sCcFp465', function(a, b) {}), b.register('sCcFp464', function(a, b) {}), b.register('sCcFp463', function(a, b) {}), b.register('sCcFp462', function(a, b) {}), b.register('sCcFp461', function(a, b) {}), b.register('sCcFp460', function(a, b) {}), b.register('sCcFp459', function(a, b) {}), b.register('sCcFp458', function(a, b) {}), b.register('sCcFp457', function(a, b) {}), b.register('sCcFp456', function(a, b) {}), b.register('sCcFp455', function(a, b) {}), b.register('sCcFp454', function(a, b) {}), b.register('sCcFp453', function(a, b) {}), b.register('sCcFp452', function(a, b) {}), b.register('sCcFp451', function(a, b) {}), b.register('sCcFp450', function(a, b) {}), b.register('sCcFp449', function(a, b) {}), b.register('sCcFp448', function(a, b) {}), b.register('sCcFp447', function(a, b) {}), b.register('sCcFp446', function(a, b) {}), b.register('D/cYZ', function(a, p) {
    b('sCcFp445'), b('sCcFp444'), b('sCcFp443'), b('sCcFp442'), b('sCcFp441'), b('sCcFp440'), b('sCcFp439'), b('sCcFp438'), b('sCcFp437'), b('sCcFp436'), b('sCcFp435'), b('sCcFp434'), b('sCcFp433'), b('sCcFp432'), b('sCcFp431'), b('sCcFp430'), b('sCcFp429'), b('sCcFp428'), b('sCcFp427'), b('sCcFp426'), b('sCcFp425'), b('sCcFp424'), b('sCcFp423'), b('sCcFp422'), b('sCcFp421'), b('sCcFp420'), b('sCcFp419'), b('sCcFp418'), b('sCcFp417'), b('sCcFp416'), b('sCcFp415'), b('sCcFp414'), b('sCcFp413'), b('sCcFp412'), b('sCcFp411'), b('sCcFp410'), b('sCcFp409'), b('sCcFp408'), b('sCcFp407'), b('sCcFp406'), b('sCcFp405'), b('sCcFp404'), b('sCcFp403'), b('sCcFp402'), b('sCcFp401'), b('sCcFp400'), b('sCcFp399'), b('sCcFp398'), b('sCcFp397'), b('sCcFp396'), b('sCcFp395'), b('sCcFp394'), b('sCcFp393'), b('sCcFp392'), b('sCcFp391'), b('sCcFp390'), b('sCcFp389'), b('sCcFp388'), b('sCcFp387'), b('sCcFp386'), b('sCcFp385'), b('sCcFp384'), b('sCcFp383'), b('sCcFp382'), b('sCcFp381'), b('sCcFp380'), b('sCcFp379'), b('sCcFp378'), b('sCcFp377'), b('sCcFp376'), b('sCcFp375'), b('sCcFp374'), b('sCcFp373'), b('sCcFp372'), b('sCcFp371'), b('sCcFp370'), b('sCcFp369'), b('sCcFp368'), b('sCcFp367'), b('sCcFp366'), b('sCcFp365'), b('sCcFp364'), b('sCcFp363'), b('sCcFp362'), b('sCcFp361'), b('sCcFp360'), b('sCcFp359'), b('sCcFp358'), b('sCcFp357'), b('sCcFp356'), b('sCcFp355'), b('sCcFp354'), b('sCcFp353'), b('sCcFp352'), b('sCcFp351'), b('sCcFp350'), b('sCcFp349'), b('sCcFp348'), b('sCcFp347'), b('sCcFp346'), b('sCcFp345'), b('sCcFp344'), b('sCcFp343'), b('sCcFp342'), b('sCcFp341'), b('sCcFp340'), b('sCcFp339'), b('sCcFp338'), b('sCcFp337'), b('sCcFp336'), b('sCcFp335'), b('sCcFp334'), b('sCcFp333'), b('sCcFp332'), b('sCcFp331'), b('sCcFp330'), b('sCcFp329'), b('sCcFp328'), b('sCcFp327'), b('sCcFp326'), b('sCcFp325'), b('sCcFp324'), b('sCcFp323'), b('sCcFp322'), b('sCcFp321'), b('sCcFp320'), b('sCcFp319'), b('sCcFp318'), b('sCcFp317'), b('sCcFp316'), b('sCcFp315'), b('sCcFp314'), b('sCcFp313'), b('sCcFp312'), b('sCcFp311'), b('sCcFp310'), b('sCcFp309'), b('sCcFp308'), b('sCcFp307'), b('sCcFp306'), b('sCcFp305'), b('sCcFp304'), b('sCcFp303'), b('sCcFp302'), b('sCcFp301'), b('sCcFp300'), b('sCcFp299'), b('sCcFp298'), b('sCcFp297'), b('sCcFp296'), b('sCcFp295'), b('sCcFp294'), b('sCcFp293'), b('sCcFp292'), b('sCcFp291'), b('sCcFp290'), b('sCcFp289'), b('sCcFp288'), b('sCcFp287'), b('sCcFp286'), b('sCcFp285'), b('sCcFp284'), b('sCcFp283'), b('sCcFp282'), b('sCcFp281'), b('sCcFp280'), b('sCcFp279'), b('sCcFp278'), b('sCcFp277'), b('sCcFp276'), b('sCcFp275'), b('sCcFp274'), b('sCcFp273'), b('sCcFp272'), b('sCcFp271'), b('sCcFp270'), b('sCcFp269'), b('sCcFp268'), b('sCcFp267'), b('sCcFp266'), b('sCcFp265'), b('sCcFp264'), b('sCcFp263'), b('sCcFp262'), b('sCcFp261'), b('sCcFp260'), b('sCcFp259'), b('sCcFp258'), b('sCcFp257'), b('sCcFp256'), b('sCcFp255'), b('sCcFp254'), b('sCcFp253'), b('sCcFp252'), b('sCcFp251'), b('sCcFp250'), b('sCcFp249'), b('sCcFp248'), b('sCcFp247'), b('sCcFp246'), b('sCcFp245'), b('sCcFp244'), b('sCcFp243'), b('sCcFp242'), b('sCcFp241'), b('sCcFp240'), b('sCcFp239'), b('sCcFp238'), b('sCcFp237'), b('sCcFp236'), b('sCcFp235'), b('sCcFp234'), b('sCcFp233'), b('sCcFp232'), b('sCcFp231'), b('sCcFp230'), b('sCcFp229'), b('sCcFp228'), b('sCcFp227'), b('sCcFp226'), b('sCcFp225'), b('sCcFp224'), b('sCcFp223'), b('sCcFp222'), b('sCcFp221'), b('sCcFp220'), b('sCcFp219'), b('lXMCP'), b('sCcFp218'), b('sCcFp217'), b('sCcFp216'), b('sCcFp215'), b('sCcFp214'), b('sCcFp213'), b('sCcFp212'), b('sCcFp211'), b('sCcFp210'), b('sCcFp209'), b('sCcFp208'), b('sCcFp207'), b('sCcFp206'), b('sCcFp205'), b('sCcFp204'), b('sCcFp203'), b('sCcFp202'), b('sCcFp201'), b('sCcFp200'), b('sCcFp199'), b('sCcFp198'), b('sCcFp197'), b('sCcFp196'), b('sCcFp195'), b('sCcFp194'), b('sCcFp193'), b('sCcFp192'), b('sCcFp191'), b('sCcFp190'), b('sCcFp189'), b('sCcFp188'), b('sCcFp187'), b('sCcFp186'), b('sCcFp185'), b('sCcFp184'), b('sCcFp183'), b('sCcFp182'), b('sCcFp181'), b('sCcFp180'), b('sCcFp179'), b('sCcFp178'), b('sCcFp177'), b('sCcFp176'), b('sCcFp175'), b('sCcFp174'), b('sCcFp173'), b('sCcFp172'), b('sCcFp171'), b('sCcFp170'), b('sCcFp169'), b('sCcFp168'), b('sCcFp167'), b('sCcFp166'), b('sCcFp165'), b('sCcFp164'), b('sCcFp163'), b('sCcFp162'), b('sCcFp161'), b('sCcFp160'), b('sCcFp159'), b('sCcFp158'), b('sCcFp157'), b('sCcFp156'), b('sCcFp155'), b('sCcFp154'), b('sCcFp153'), b('sCcFp152'), b('sCcFp151'), b('sCcFp150'), b('sCcFp149'), b('sCcFp148'), b('sCcFp147'), b('sCcFp146'), b('sCcFp145'), b('sCcFp144'), b('sCcFp143'), b('sCcFp142'), b('sCcFp141'), b('sCcFp140'), b('sCcFp139'), b('sCcFp138'), b('sCcFp137'), b('sCcFp136'), b('sCcFp135'), b('sCcFp134'), b('sCcFp133'), b('sCcFp132'), b('sCcFp131'), b('sCcFp130'), b('sCcFp129'), b('sCcFp128'), b('sCcFp127'), b('sCcFp126'), b('sCcFp125'), b('sCcFp124'), b('sCcFp123'), b('sCcFp122'), b('sCcFp121'), b('sCcFp120'), b('sCcFp119'), b('sCcFp118'), b('sCcFp117'), b('sCcFp116'), b('sCcFp115'), b('sCcFp114'), b('sCcFp113'), b('sCcFp112'), b('sCcFp111'), b('sCcFp110'), b('sCcFp109'), b('sCcFp108'), b('sCcFp107'), b('sCcFp106'), b('sCcFp105'), b('sCcFp104'), b('sCcFp103'), b('sCcFp102'), b('sCcFp101'), b('sCcFp100'), b('sCcFp99'), b('sCcFp98'), b('sCcFp97'), b('sCcFp96'), b('sCcFp95'), b('sCcFp94'), b('sCcFp93'), b('sCcFp92'), b('sCcFp91'), b('sCcFp90'), b('sCcFp89'), b('sCcFp88'), b('sCcFp87'), b('sCcFp86'), b('sCcFp85'), b('sCcFp84'), b('sCcFp83'), b('sCcFp82'), b('sCcFp81'), b('sCcFp80'), b('sCcFp79'), b('sCcFp78'), b('sCcFp77'), b('sCcFp76'), b('sCcFp75'), b('sCcFp74'), b('sCcFp73'), b('sCcFp72'), b('sCcFp71'), b('sCcFp70'), b('sCcFp69'), b('sCcFp68'), b('sCcFp67'), b('sCcFp66'), b('sCcFp65'), b('sCcFp64'), b('sCcFp63'), b('sCcFp62'), b('sCcFp61'), b('sCcFp60'), b('sCcFp59'), b('sCcFp58'), b('sCcFp57'), b('sCcFp56'), b('sCcFp55'), b('sCcFp54'), b('sCcFp53'), b('sCcFp52');
}), b.register('sCcFp445', function(a, b) {}), b.register('sCcFp444', function(a, b) {}), b.register('sCcFp443', function(a, b) {}), b.register('sCcFp442', function(a, b) {}), b.register('sCcFp441', function(a, b) {}), b.register('sCcFp440', function(a, b) {}), b.register('sCcFp439', function(a, b) {}), b.register('sCcFp438', function(a, b) {}), b.register('sCcFp437', function(a, b) {}), b.register('sCcFp436', function(a, b) {}), b.register('sCcFp435', function(a, b) {}), b.register('sCcFp434', function(a, b) {}), b.register('sCcFp433', function(a, b) {}), b.register('sCcFp432', function(a, b) {}), b.register('sCcFp431', function(a, b) {}), b.register('sCcFp430', function(a, b) {}), b.register('sCcFp429', function(a, b) {}), b.register('sCcFp428', function(a, b) {}), b.register('sCcFp427', function(a, b) {}), b.register('sCcFp426', function(a, b) {}), b.register('sCcFp425', function(a, b) {}), b.register('sCcFp424', function(a, b) {}), b.register('sCcFp423', function(a, b) {}), b.register('sCcFp422', function(a, b) {}), b.register('sCcFp421', function(a, b) {}), b.register('sCcFp420', function(a, b) {}), b.register('sCcFp419', function(a, b) {}), b.register('sCcFp418', function(a, b) {}), b.register('sCcFp417', function(a, b) {}), b.register('sCcFp416', function(a, b) {}), b.register('sCcFp415', function(a, b) {}), b.register('sCcFp414', function(a, b) {}), b.register('sCcFp413', function(a, b) {}), b.register('sCcFp412', function(a, b) {}), b.register('sCcFp411', function(a, b) {}), b.register('sCcFp410', function(a, b) {}), b.register('sCcFp409', function(a, b) {}), b.register('sCcFp408', function(a, b) {}), b.register('sCcFp407', function(a, b) {}), b.register('sCcFp406', function(a, b) {}), b.register('sCcFp405', function(a, b) {}), b.register('sCcFp404', function(a, b) {}), b.register('sCcFp403', function(a, b) {}), b.register('sCcFp402', function(a, b) {}), b.register('sCcFp401', function(a, b) {}), b.register('sCcFp400', function(a, b) {}), b.register('sCcFp399', function(a, b) {}), b.register('sCcFp398', function(a, b) {}), b.register('sCcFp397', function(a, b) {}), b.register('sCcFp396', function(a, b) {}), b.register('sCcFp395', function(a, b) {}), b.register('sCcFp394', function(a, b) {}), b.register('sCcFp393', function(a, b) {}), b.register('sCcFp392', function(a, b) {}), b.register('sCcFp391', function(a, b) {}), b.register('sCcFp390', function(a, b) {}), b.register('sCcFp389', function(a, b) {}), b.register('sCcFp388', function(a, b) {}), b.register('sCcFp387', function(a, b) {}), b.register('sCcFp386', function(a, b) {}), b.register('sCcFp385', function(a, b) {}), b.register('sCcFp384', function(a, b) {}), b.register('sCcFp383', function(a, b) {}), b.register('sCcFp382', function(a, b) {}), b.register('sCcFp381', function(a, b) {}), b.register('sCcFp380', function(a, b) {}), b.register('sCcFp379', function(a, b) {}), b.register('sCcFp378', function(a, b) {}), b.register('sCcFp377', function(a, b) {}), b.register('sCcFp376', function(a, b) {}), b.register('sCcFp375', function(a, b) {}), b.register('sCcFp374', function(a, b) {}), b.register('sCcFp373', function(a, b) {}), b.register('sCcFp372', function(a, b) {}), b.register('sCcFp371', function(a, b) {}), b.register('sCcFp370', function(a, b) {}), b.register('sCcFp369', function(a, b) {}), b.register('sCcFp368', function(a, b) {}), b.register('sCcFp367', function(a, b) {}), b.register('sCcFp366', function(a, b) {}), b.register('sCcFp365', function(a, b) {}), b.register('sCcFp364', function(a, b) {}), b.register('sCcFp363', function(a, b) {}), b.register('sCcFp362', function(a, b) {}), b.register('sCcFp361', function(a, b) {}), b.register('sCcFp360', function(a, b) {}), b.register('sCcFp359', function(a, b) {}), b.register('sCcFp358', function(a, b) {}), b.register('sCcFp357', function(a, b) {}), b.register('sCcFp356', function(a, b) {}), b.register('sCcFp355', function(a, b) {}), b.register('sCcFp354', function(a, b) {}), b.register('sCcFp353', function(a, b) {}), b.register('sCcFp352', function(a, b) {}), b.register('sCcFp351', function(a, b) {}), b.register('sCcFp350', function(a, b) {}), b.register('sCcFp349', function(a, b) {}), b.register('sCcFp348', function(a, b) {}), b.register('sCcFp347', function(a, b) {}), b.register('sCcFp346', function(a, b) {}), b.register('sCcFp345', function(a, b) {}), b.register('sCcFp344', function(a, b) {}), b.register('sCcFp343', function(a, b) {}), b.register('sCcFp342', function(a, b) {}), b.register('sCcFp341', function(a, b) {}), b.register('sCcFp340', function(a, b) {}), b.register('sCcFp339', function(a, b) {}), b.register('sCcFp338', function(a, b) {}), b.register('sCcFp337', function(a, b) {}), b.register('sCcFp336', function(a, b) {}), b.register('sCcFp335', function(a, b) {}), b.register('sCcFp334', function(a, b) {}), b.register('sCcFp333', function(a, b) {}), b.register('sCcFp332', function(a, b) {}), b.register('sCcFp331', function(a, b) {}), b.register('sCcFp330', function(a, b) {}), b.register('sCcFp329', function(a, b) {}), b.register('sCcFp328', function(a, b) {}), b.register('sCcFp327', function(a, b) {}), b.register('sCcFp326', function(a, b) {}), b.register('sCcFp325', function(a, b) {}), b.register('sCcFp324', function(a, b) {}), b.register('sCcFp323', function(a, b) {}), b.register('sCcFp322', function(a, b) {}), b.register('sCcFp321', function(a, b) {}), b.register('sCcFp320', function(a, b) {}), b.register('sCcFp319', function(a, b) {}), b.register('sCcFp318', function(a, b) {}), b.register('sCcFp317', function(a, b) {}), b.register('sCcFp316', function(a, b) {}), b.register('sCcFp315', function(a, b) {}), b.register('sCcFp314', function(a, b) {}), b.register('sCcFp313', function(a, b) {}), b.register('sCcFp312', function(a, b) {}), b.register('sCcFp311', function(a, b) {}), b.register('sCcFp310', function(a, b) {}), b.register('sCcFp309', function(a, b) {}), b.register('sCcFp308', function(a, b) {}), b.register('sCcFp307', function(a, b) {}), b.register('sCcFp306', function(a, b) {}), b.register('sCcFp305', function(a, b) {}), b.register('sCcFp304', function(a, b) {}), b.register('sCcFp303', function(a, b) {}), b.register('sCcFp302', function(a, b) {}), b.register('sCcFp301', function(a, b) {}), b.register('sCcFp300', function(a, b) {}), b.register('sCcFp299', function(a, b) {}), b.register('sCcFp298', function(a, b) {}), b.register('sCcFp297', function(a, b) {}), b.register('sCcFp296', function(a, b) {}), b.register('sCcFp295', function(a, b) {}), b.register('sCcFp294', function(a, b) {}), b.register('sCcFp293', function(a, b) {}), b.register('sCcFp292', function(a, b) {}), b.register('sCcFp291', function(a, b) {}), b.register('sCcFp290', function(a, b) {}), b.register('sCcFp289', function(a, b) {}), b.register('sCcFp288', function(a, b) {}), b.register('sCcFp287', function(a, b) {}), b.register('sCcFp286', function(a, b) {}), b.register('sCcFp285', function(a, b) {}), b.register('sCcFp284', function(a, b) {}), b.register('sCcFp283', function(a, b) {}), b.register('sCcFp282', function(a, b) {}), b.register('sCcFp281', function(a, b) {}), b.register('sCcFp280', function(a, b) {}), b.register('sCcFp279', function(a, b) {}), b.register('sCcFp278', function(a, b) {}), b.register('sCcFp277', function(a, b) {}), b.register('sCcFp276', function(a, b) {}), b.register('sCcFp275', function(a, b) {}), b.register('sCcFp274', function(a, b) {}), b.register('sCcFp273', function(a, b) {}), b.register('sCcFp272', function(a, b) {}), b.register('sCcFp271', function(a, b) {}), b.register('sCcFp270', function(a, b) {}), b.register('sCcFp269', function(a, b) {}), b.register('sCcFp268', function(a, b) {}), b.register('sCcFp267', function(a, b) {}), b.register('sCcFp266', function(a, b) {}), b.register('sCcFp265', function(a, b) {}), b.register('sCcFp264', function(a, b) {}), b.register('sCcFp263', function(a, b) {}), b.register('sCcFp262', function(a, b) {}), b.register('sCcFp261', function(a, b) {}), b.register('sCcFp260', function(a, b) {}), b.register('sCcFp259', function(a, b) {}), b.register('sCcFp258', function(a, b) {}), b.register('sCcFp257', function(a, b) {}), b.register('sCcFp256', function(a, b) {}), b.register('sCcFp255', function(a, b) {}), b.register('sCcFp254', function(a, b) {}), b.register('sCcFp253', function(a, b) {}), b.register('sCcFp252', function(a, b) {}), b.register('sCcFp251', function(a, b) {}), b.register('sCcFp250', function(a, b) {}), b.register('sCcFp249', function(a, b) {}), b.register('sCcFp248', function(a, b) {}), b.register('sCcFp247', function(a, b) {}), b.register('sCcFp246', function(a, b) {}), b.register('sCcFp245', function(a, b) {}), b.register('sCcFp244', function(a, b) {}), b.register('sCcFp243', function(a, b) {}), b.register('sCcFp242', function(a, b) {}), b.register('sCcFp241', function(a, b) {}), b.register('sCcFp240', function(a, b) {}), b.register('sCcFp239', function(a, b) {}), b.register('sCcFp238', function(a, b) {}), b.register('sCcFp237', function(a, b) {}), b.register('sCcFp236', function(a, b) {}), b.register('sCcFp235', function(a, b) {}), b.register('sCcFp234', function(a, b) {}), b.register('sCcFp233', function(a, b) {}), b.register('sCcFp232', function(a, b) {}), b.register('sCcFp231', function(a, b) {}), b.register('sCcFp230', function(a, b) {}), b.register('sCcFp229', function(a, b) {}), b.register('sCcFp228', function(a, b) {}), b.register('sCcFp227', function(a, b) {}), b.register('sCcFp226', function(a, b) {}), b.register('sCcFp225', function(a, b) {}), b.register('sCcFp224', function(a, b) {}), b.register('sCcFp223', function(a, b) {}), b.register('sCcFp222', function(a, b) {}), b.register('sCcFp221', function(a, b) {}), b.register('sCcFp220', function(a, b) {}), b.register('sCcFp219', function(a, b) {}), b.register('lXMCP', function(a, b) {});
b.register('sCcFp218', function(a, b) {}), b.register('sCcFp217', function(a, b) {}), b.register('sCcFp216', function(a, b) {}), b.register('sCcFp215', function(a, b) {}), b.register('sCcFp214', function(a, b) {}), b.register('sCcFp213', function(a, b) {}), b.register('sCcFp212', function(a, b) {}), b.register('sCcFp211', function(a, b) {}), b.register('sCcFp210', function(a, b) {}), b.register('sCcFp209', function(a, b) {}), b.register('sCcFp208', function(a, b) {}), b.register('sCcFp207', function(a, b) {}), b.register('sCcFp206', function(a, b) {}), b.register('sCcFp205', function(a, b) {}), b.register('sCcFp204', function(a, b) {}), b.register('sCcFp203', function(a, b) {}), b.register('sCcFp202', function(a, b) {}), b.register('sCcFp201', function(a, b) {}), b.register('sCcFp200', function(a, b) {}), b.register('sCcFp199', function(a, b) {}), b.register('sCcFp198', function(a, b) {}), b.register('sCcFp197', function(a, b) {}), b.register('sCcFp196', function(a, b) {}), b.register('sCcFp195', function(a, b) {}), b.register('sCcFp194', function(a, b) {}), b.register('sCcFp193', function(a, b) {}), b.register('sCcFp192', function(a, b) {}), b.register('sCcFp191', function(a, b) {}), b.register('sCcFp190', function(a, b) {}), b.register('sCcFp189', function(a, b) {}), b.register('sCcFp188', function(a, b) {}), b.register('sCcFp187', function(a, b) {}), b.register('sCcFp186', function(a, b) {}), b.register('sCcFp185', function(a, b) {}), b.register('sCcFp184', function(a, b) {}), b.register('sCcFp183', function(a, b) {}), b.register('sCcFp182', function(a, b) {}), b.register('sCcFp181', function(a, b) {}), b.register('sCcFp180', function(a, b) {}), b.register('sCcFp179', function(a, b) {}), b.register('sCcFp178', function(a, b) {}), b.register('sCcFp177', function(a, b) {}), b.register('sCcFp176', function(a, b) {}), b.register('sCcFp175', function(a, b) {}), b.register('sCcFp174', function(a, b) {}), b.register('sCcFp173', function(a, b) {}), b.register('sCcFp172', function(a, b) {}), b.register('sCcFp171', function(a, b) {}), b.register('sCcFp170', function(a, b) {}), b.register('sCcFp169', function(a, b) {}), b.register('sCcFp168', function(a, b) {}), b.register('sCcFp167', function(a, b) {}), b.register('sCcFp166', function(a, b) {}), b.register('sCcFp165', function(a, b) {}), b.register('sCcFp164', function(a, b) {}), b.register('sCcFp163', function(a, b) {}), b.register('sCcFp162', function(a, b) {}), b.register('sCcFp161', function(a, b) {}), b.register('sCcFp160', function(a, b) {}), b.register('sCcFp159', function(a, b) {}), b.register('sCcFp158', function(a, b) {}), b.register('sCcFp157', function(a, b) {}), b.register('sCcFp156', function(a, b) {}), b.register('sCcFp155', function(a, b) {}), b.register('sCcFp154', function(a, b) {}), b.register('sCcFp153', function(a, b) {}), b.register('sCcFp152', function(a, b) {}), b.register('sCcFp151', function(a, b) {}), b.register('sCcFp150', function(a, b) {}), b.register('sCcFp149', function(a, b) {}), b.register('sCcFp148', function(a, b) {}), b.register('sCcFp147', function(a, b) {}), b.register('sCcFp146', function(a, b) {}), b.register('sCcFp145', function(a, b) {}), b.register('sCcFp144', function(a, b) {}), b.register('sCcFp143', function(a, b) {}), b.register('sCcFp142', function(a, b) {}), b.register('sCcFp141', function(a, b) {}), b.register('sCcFp140', function(a, b) {}), b.register('sCcFp139', function(a, b) {}), b.register('sCcFp138', function(a, b) {}), b.register('sCcFp137', function(a, b) {}), b.register('sCcFp136', function(a, b) {}), b.register('sCcFp135', function(a, b) {}), b.register('sCcFp134', function(a, b) {}), b.register('sCcFp133', function(a, b) {}), b.register('sCcFp132', function(a, b) {}), b.register('sCcFp131', function(a, b) {}), b.register('sCcFp130', function(a, b) {}), b.register('sCcFp129', function(a, b) {}), b.register('sCcFp128', function(a, b) {}), b.register('sCcFp127', function(a, b) {}), b.register('sCcFp126', function(a, b) {}), b.register('sCcFp125', function(a, b) {}), b.register('sCcFp124', function(a, b) {}), b.register('sCcFp123', function(a, b) {}), b.register('sCcFp122', function(a, b) {}), b.register('sCcFp121', function(a, b) {}), b.register('sCcFp120', function(a, b) {}), b.register('sCcFp119', function(a, b) {}), b.register('sCcFp118', function(a, b) {}), b.register('sCcFp117', function(a, b) {}), b.register('sCcFp116', function(a, b) {}), b.register('sCcFp115', function(a, b) {}), b.register('sCcFp114', function(a, b) {}), b.register('sCcFp113', function(a, b) {}), b.register('sCcFp112', function(a, b) {}), b.register('sCcFp111', function(a, b) {}), b.register('sCcFp110', function(a, b) {}), b.register('sCcFp109', function(a, b) {}), b.register('sCcFp108', function(a, b) {}), b.register('sCcFp107', function(a, b) {}), b.register('sCcFp106', function(a, b) {}), b.register('sCcFp105', function(a, b) {}), b.register('sCcFp104', function(a, b) {}), b.register('sCcFp103', function(a, b) {}), b.register('sCcFp102', function(a, b) {}), b.register('sCcFp101', function(a, b) {}), b.register('sCcFp100', function(a, b) {}), b.register('sCcFp99', function(a, b) {}), b.register('sCcFp98', function(a, b) {}), b.register('sCcFp97', function(a, b) {}), b.register('sCcFp96', function(a, b) {}), b.register('sCcFp95', function(a, b) {}), b.register('sCcFp94', function(a, b) {}), b.register('sCcFp93', function(a, b) {}), b.register('sCcFp92', function(a, b) {}), b.register('sCcFp91', function(a, b) {}), b.register('sCcFp90', function(a, b) {}), b.register('sCcFp89', function(a, b) {}), b.register('sCcFp88', function(a, b) {}), b.register('sCcFp87', function(a, b) {}), b.register('sCcFp86', function(a, b) {}), b.register('sCcFp85', function(a, b) {}), b.register('sCcFp84', function(a, b) {}), b.register('sCcFp83', function(a, b) {}), b.register('sCcFp82', function(a, b) {}), b.register('sCcFp81', function(a, b) {}), b.register('sCcFp80', function(a, b) {}), b.register('sCcFp79', function(a, b) {}), b.register('sCcFp78', function(a, b) {}), b.register('sCcFp77', function(a, b) {}), b.register('sCcFp76', function(a, b) {}), b.register('sCcFp75', function(a, b) {}), b.register('sCcFp74', function(a, b) {}), b.register('sCcFp73', function(a, b) {}), b.register('sCcFp72', function(a, b) {}), b.register('sCcFp71', function(a, b) {}), b.register('sCcFp70', function(a, b) {}), b.register('sCcFp69', function(a, b) {}), b.register('sCcFp68', function(a, b) {}), b.register('sCcFp67', function(a, b) {}), b.register('sCcFp66', function(a, b) {}), b.register('sCcFp65', function(a, b) {}), b.register('sCcFp64', function(a, b) {}), b.register('sCcFp63', function(a, b) {}), b.register('sCcFp62', function(a, b) {}), b.register('sCcFp61', function(a, b) {}), b.register('sCcFp60', function(a, b) {}), b.register('sCcFp59', function(a, b) {}), b.register('sCcFp58', function(a, b) {}), b.register('sCcFp57', function(a, b) {}), b.register('sCcFp56', function(a, b) {}), b.register('sCcFp55', function(a, b) {}), b.register('sCcFp54', function(a, b) {}), b.register('sCcFp53', function(a, b) {}), b.register('sCcFp52', function(a, b) {}), b.register('8whZA', function(p, i) {
    a(p.exports, 'createWebmPcmMediaRecorderFactory', function() {
        return f;
    });
    var c = b('m4qJn'),
        d = b('xyCE0'),
        e = b('cd1Pi');
    const f = (a, b, p, i, f) => (g, s, t, y) => {
        const g = t.getAudioTracks(),
            h = [],
            i = 0 === g.length ? void 0 : g[0].getSettings().channelCount,
            j = new s(t, {
                mimeType: 'audio/webm;codecs=pcm'
            }),
            k = 0 === g.length ? void 0 : g[0].getSettings().sampleRate;
        let l = null,
            m = () => {};
        const n = b => {
                g.dispatchEvent(a('dataavailable', {
                    data: new Blob(b, {
                        type: y
                    })
                }));
            },
            o = async (a, b) => {
                const p = await (0, c.encode)(a, b);
                'inactive' === j.state ? h.push(...p) : (n(p), l = o(a, b));
            }, p = () => {
                'inactive' !== j.state && (null !== l && (l.catch(() => {}), l = null), m(), m = () => {}, j.stop());
            };
        return j.addEventListener('error', () => {
            p(), g.dispatchEvent(new ErrorEvent('error', {
                error: b()
            }));
        }), j.addEventListener('start', () => g.dispatchEvent(new Event('start'))), {
            get mimeType() {
                return y;
            },
            get state() {
                return j.state;
            },
            pause: () => j.pause(),
            resume: () => j.resume(),
            start(a) {
                if (t.getVideoTracks().length > 0)
                    throw r();
                if ('inactive' === j.state) {
                    if (void 0 === k)
                        throw new Error('The sampleRate is not defined.');
                    let q = !1,
                        r = !1,
                        s = 0,
                        t = (0, c.instantiate)(y, k);
                    m = () => {
                        r = !0;
                    };
                    const u = (0, e.on)(j, 'dataavailable')(({
                        data: v
                    }) => {
                        s += 1, t = t.then(async ({
                            dataView: w = null,
                            elementType: x = null,
                            encoderId: y,
                            port: z
                        }) => {
                            const A = await v.arrayBuffer();
                            s -= 1;
                            const B = null === w ? new(0, d.MultiBufferDataView)([A]) : new(0, d.MultiBufferDataView)([
                                ...w.buffers,
                                A
                            ], w.byteOffset);
                            if (!q && 'recording' === j.state && !r) {
                                const C = f(B, 0);
                                if (null === C)
                                    return {
                                        dataView: B,
                                        elementType: x,
                                        encoderId: y,
                                        port: z
                                    };
                                const {
                                    value: D
                                } = E;
                                if (172351395 !== D)
                                    return {
                                        dataView: w,
                                        elementType: x,
                                        encoderId: y,
                                        port: z
                                    };
                                q = !0;
                            }
                            const {
                                currentElementType: C,
                                offset: D,
                                contents: E
                            } = i(B, x, i), F = D < B.byteLength ? new(0, d.MultiBufferDataView)(B.buffers, B.byteOffset + D) : null;
                            return E.forEach(v => z.postMessage(v, v.map(({
                                buffer: G
                            }) => G))), 0 !== s || 'inactive' !== j.state && !r || ((0, c.encode)(y, null).then(G => {
                                n([
                                    ...h,
                                    ...G
                                ]), h.length = 0, g.dispatchEvent(new Event('stop'));
                            }), z.postMessage([]), z.close(), u()), {
                                dataView: F,
                                elementType: C,
                                encoderId: y,
                                port: z
                            };
                        });
                    });
                    void 0 !== v && t.then(({
                        encoderId: w
                    }) => l = o(w, v));
                }
                j.start(100);
            },
            stop: p
        };
    };
}), b.register('xyCE0', function(a, h) {
    a.exports,
        function(a, b, h, i) {
            function c(a) {
                return a && 'object' == typeof a && 'default' in a ? a : {
                    default: a
                };
            }
            var d = c(b),
                e = c(h),
                f = c(i);

            function g(a, b) {
                var h = 'undefined' != typeof Symbol && a[Symbol.iterator] || a['@@iterator'];
                if (!h) {
                    if (Array.isArray(a) || (h = h(a)) || b && a && 'number' == typeof a.length) {
                        h && (a = h);
                        var i = 0,
                            j = function() {};
                        return {
                            s: j,
                            n: function() {
                                return i >= a.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: a[i++]
                                };
                            },
                            e: function(a) {
                                throw a;
                            },
                            f: j
                        };
                    }
                    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }
                var i, j = !0,
                    k = !1;
                return {
                    s: function() {
                        h = h.call(a);
                    },
                    n: function() {
                        var l = h.next();
                        return j = l.done, l;
                    },
                    e: function(a) {
                        k = !0, i = a;
                    },
                    f: function() {
                        try {
                            j || null == h.return || h.return();
                        } finally {
                            if (k)
                                throw i;
                        }
                    }
                };
            }

            function h(a, b) {
                if (a) {
                    if ('string' == typeof a)
                        return i(a, b);
                    var i = Object.prototype.toString.call(a).slice(8, -1);
                    return 'Object' === i && a.constructor && (i = a.constructor.name), 'Map' === i || 'Set' === i ? Array.from(a) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? i(a, b) : void 0;
                }
            }

            function i(a, b) {
                (null == b || b > a.length) && (b = a.length);
                for (var j = 0, k = new Array(b); j < b; j++)
                    k[j] = a[j];
                return k;
            }
            var j = function() {
                function k(b) {
                    var l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        m = arguments.length > 2 ? arguments[2] : void 0;
                    if (e.default(this, k), l < 0 || void 0 !== m && m < 0)
                        throw new RangeError();
                    var n = b.reduce(function(k, b) {
                        return k + b.byteLength;
                    }, 0);
                    if (l > n || void 0 !== m && l + m > n)
                        throw new RangeError();
                    var o, p = [],
                        q = void 0 === m ? n - l : m,
                        r = [],
                        s = 0,
                        t = u,
                        v = g(b);
                    try {
                        for (v.s(); !(o = v.n()).done;) {
                            var w = o.value;
                            if (0 === r.length)
                                if (w.byteLength > t) {
                                    var x = (s = w.byteLength - t) > q ? q : s;
                                    p.push(new DataView(w, t, x)), r.push(w);
                                } else
                                    t -= w.byteLength;
                            else if (s < q) {
                                var x = (s += w.byteLength) > q ? w.byteLength - s + q : w.byteLength;
                                p.push(new DataView(w, 0, x)), r.push(w);
                            }
                        }
                    } catch (k) {
                        v.e(k);
                    } finally {
                        v.f();
                    }
                    this._buffers = r, this._byteLength = q, this._byteOffset = t, this._dataViews = p, this._internalBuffer = new DataView(new ArrayBuffer(8));
                }
                return f.default(k, [{
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
                        value: function(k, b) {
                            return this._internalBuffer.setUint8(0, this.getUint8(k + 0)), this._internalBuffer.setUint8(1, this.getUint8(k + 1)), this._internalBuffer.setUint8(2, this.getUint8(k + 2)), this._internalBuffer.setUint8(3, this.getUint8(k + 3)), this._internalBuffer.getFloat32(0, b);
                        }
                    },
                    {
                        key: 'getFloat64',
                        value: function(k, b) {
                            return this._internalBuffer.setUint8(0, this.getUint8(k + 0)), this._internalBuffer.setUint8(1, this.getUint8(k + 1)), this._internalBuffer.setUint8(2, this.getUint8(k + 2)), this._internalBuffer.setUint8(3, this.getUint8(k + 3)), this._internalBuffer.setUint8(4, this.getUint8(k + 4)), this._internalBuffer.setUint8(5, this.getUint8(k + 5)), this._internalBuffer.setUint8(6, this.getUint8(k + 6)), this._internalBuffer.setUint8(7, this.getUint8(k + 7)), this._internalBuffer.getFloat64(0, b);
                        }
                    },
                    {
                        key: 'getInt16',
                        value: function(k, b) {
                            return this._internalBuffer.setUint8(0, this.getUint8(k + 0)), this._internalBuffer.setUint8(1, this.getUint8(k + 1)), this._internalBuffer.getInt16(0, b);
                        }
                    },
                    {
                        key: 'getInt32',
                        value: function(k, b) {
                            return this._internalBuffer.setUint8(0, this.getUint8(k + 0)), this._internalBuffer.setUint8(1, this.getUint8(k + 1)), this._internalBuffer.setUint8(2, this.getUint8(k + 2)), this._internalBuffer.setUint8(3, this.getUint8(k + 3)), this._internalBuffer.getInt32(0, b);
                        }
                    },
                    {
                        key: 'getInt8',
                        value: function(k) {
                            var l = this._findDataViewWithOffset(k),
                                m = d.default(l, 2),
                                n = m[0],
                                o = m[1];
                            return n.getInt8(k - o);
                        }
                    },
                    {
                        key: 'getUint16',
                        value: function(k, b) {
                            return this._internalBuffer.setUint8(0, this.getUint8(k + 0)), this._internalBuffer.setUint8(1, this.getUint8(k + 1)), this._internalBuffer.getUint16(0, b);
                        }
                    },
                    {
                        key: 'getUint32',
                        value: function(k, b) {
                            return this._internalBuffer.setUint8(0, this.getUint8(k + 0)), this._internalBuffer.setUint8(1, this.getUint8(k + 1)), this._internalBuffer.setUint8(2, this.getUint8(k + 2)), this._internalBuffer.setUint8(3, this.getUint8(k + 3)), this._internalBuffer.getUint32(0, b);
                        }
                    },
                    {
                        key: 'getUint8',
                        value: function(k) {
                            var l = this._findDataViewWithOffset(k),
                                m = d.default(l, 2),
                                n = m[0],
                                o = m[1];
                            return n.getUint8(k - o);
                        }
                    },
                    {
                        key: 'setFloat32',
                        value: function(k, b, l) {
                            this._internalBuffer.setFloat32(0, b, l), this.setUint8(k, this._internalBuffer.getUint8(0)), this.setUint8(k + 1, this._internalBuffer.getUint8(1)), this.setUint8(k + 2, this._internalBuffer.getUint8(2)), this.setUint8(k + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setFloat64',
                        value: function(k, b, l) {
                            this._internalBuffer.setFloat64(0, b, l), this.setUint8(k, this._internalBuffer.getUint8(0)), this.setUint8(k + 1, this._internalBuffer.getUint8(1)), this.setUint8(k + 2, this._internalBuffer.getUint8(2)), this.setUint8(k + 3, this._internalBuffer.getUint8(3)), this.setUint8(k + 4, this._internalBuffer.getUint8(4)), this.setUint8(k + 5, this._internalBuffer.getUint8(5)), this.setUint8(k + 6, this._internalBuffer.getUint8(6)), this.setUint8(k + 7, this._internalBuffer.getUint8(7));
                        }
                    },
                    {
                        key: 'setInt16',
                        value: function(k, b, l) {
                            this._internalBuffer.setInt16(0, b, l), this.setUint8(k, this._internalBuffer.getUint8(0)), this.setUint8(k + 1, this._internalBuffer.getUint8(1));
                        }
                    },
                    {
                        key: 'setInt32',
                        value: function(k, b, l) {
                            this._internalBuffer.setInt32(0, b, l), this.setUint8(k, this._internalBuffer.getUint8(0)), this.setUint8(k + 1, this._internalBuffer.getUint8(1)), this.setUint8(k + 2, this._internalBuffer.getUint8(2)), this.setUint8(k + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setInt8',
                        value: function(k, b) {
                            var l = this._findDataViewWithOffset(k),
                                m = d.default(l, 2),
                                n = m[0],
                                o = m[1];
                            n.setInt8(k - o, b);
                        }
                    },
                    {
                        key: 'setUint16',
                        value: function(k, b, l) {
                            this._internalBuffer.setUint16(0, b, l), this.setUint8(k, this._internalBuffer.getUint8(0)), this.setUint8(k + 1, this._internalBuffer.getUint8(1));
                        }
                    },
                    {
                        key: 'setUint32',
                        value: function(k, b, l) {
                            this._internalBuffer.setUint32(0, b, l), this.setUint8(k, this._internalBuffer.getUint8(0)), this.setUint8(k + 1, this._internalBuffer.getUint8(1)), this.setUint8(k + 2, this._internalBuffer.getUint8(2)), this.setUint8(k + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setUint8',
                        value: function(k, b) {
                            var l = this._findDataViewWithOffset(k),
                                m = d.default(l, 2),
                                n = m[0],
                                o = m[1];
                            n.setUint8(k - o, b);
                        }
                    },
                    {
                        key: '_findDataViewWithOffset',
                        value: function(k) {
                            var l, m = 0,
                                n = g(this._dataViews);
                            try {
                                for (n.s(); !(l = n.n()).done;) {
                                    var o = l.value,
                                        p = m + o.byteLength;
                                    if (k >= m && k < p)
                                        return [
                                            o,
                                            m
                                        ];
                                    m = p;
                                }
                            } catch (k) {
                                n.e(k);
                            } finally {
                                n.f();
                            }
                            throw new RangeError();
                        }
                    }
                ]), k;
            }();
            a.MultiBufferDataView = j, Object.defineProperty(a, '__esModule', {
                value: !0
            });
        }(a.exports, b('ya3+v'), b('rv10a'), b('83ErS'));
}), b.register('ya3+v', function(a, c) {
    var c = b('yof6K'),
        d = b('9D9hd'),
        e = b('alNBw'),
        f = b('/mesN');
    a.exports = function(a, b) {
        return c(a) || d(a, b) || e(a, b) || f();
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('yof6K', function(a, b) {
    a.exports = function(a) {
        if (Array.isArray(a))
            return a;
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('9D9hd', function(a, b) {
    a.exports = function(a, b) {
        var c = null == a ? null : 'undefined' != typeof Symbol && a[Symbol.iterator] || a['@@iterator'];
        if (null != c) {
            var d, e, f, g, h = [],
                i = !0,
                j = !1;
            try {
                if (f = (c = c.call(a)).next, 0 === b) {
                    if (Object(c) !== c)
                        return;
                    i = !1;
                } else
                    for (; !(i = (d = f.call(c)).done) && (h.push(d.value), h.length !== b); i = !0);
            } catch (a) {
                j = !0, e = a;
            } finally {
                try {
                    if (!i && null != c.return && (g = c.return(), Object(g) !== g))
                        return;
                } finally {
                    if (j)
                        throw e;
                }
            }
            return h;
        }
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('alNBw', function(a, d) {
    var c = b('vZCw+');
    a.exports = function(a, b) {
        if (a) {
            if ('string' == typeof a)
                return c(a, b);
            var d = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === d && a.constructor && (d = a.constructor.name), 'Map' === d || 'Set' === d ? Array.from(a) : 'Arguments' === d || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? c(a, b) : void 0;
        }
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('vZCw+', function(a, b) {
    a.exports = function(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); c < b; c++)
            d[c] = a[c];
        return d;
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('/mesN', function(a, b) {
    a.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('rv10a', function(a, b) {
    a.exports = function(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('83ErS', function(a, e) {
    var c = b('eVPcR');

    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, c(f.key), f);
        }
    }
    a.exports = function(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), Object.defineProperty(a, 'prototype', {
            writable: !1
        }), a;
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('eVPcR', function(a, c) {
    var c = b('wJBRd').default,
        d = b('O8Qz9');
    a.exports = function(a) {
        var e = d(a, 'string');
        return 'symbol' === c(e) ? e : String(e);
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('wJBRd', function(a, b) {
    function c(b) {
        return a.exports = c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.__esModule = !0, a.exports.default = a.exports, c(b);
    }
    a.exports = c, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('O8Qz9', function(a, d) {
    var c = b('wJBRd').default;
    a.exports = function(a, b) {
        if ('object' !== c(a) || null === a)
            return a;
        var d = a[Symbol.toPrimitive];
        if (void 0 !== d) {
            var e = d.call(a, b || 'default');
            if ('object' !== c(e))
                return e;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === b ? String : Number)(a);
    }, a.exports.__esModule = !0, a.exports.default = a.exports;
}), b.register('6zPeJ', function(b, d) {
    a(b.exports, 'createWindow', function() {
        return c;
    });
    const c = () => 'undefined' == typeof window ? null : window;
}), b.register('YH7Z+', function(b, d) {
    a(b.exports, 'readVariableSizeIntegerLength', function() {
        return c;
    });
    const c = (a, b) => {
        if (b >= a.byteLength)
            return null;
        const d = a.getUint8(b);
        if (d > 127)
            return 1;
        if (d > 63)
            return 2;
        if (d > 31)
            return 3;
        if (d > 15)
            return 4;
        if (d > 7)
            return 5;
        if (d > 3)
            return 6;
        if (d > 1)
            return 7;
        if (d > 0)
            return 8;
        const e = c(a, b + 1);
        return null === e ? null : e + 8;
    };
}), b.register('QiHlD', function(b, j) {
    a(b.exports, 'wrapEventListener', function() {
        return c;
    });
    const c = (a, b) => j => {
        const d = {
            value: a
        };
        return Object.defineProperties(j, {
            currentTarget: d,
            target: d
        }), 'function' == typeof b ? b.call(a, j) : b.handleEvent.call(a, j);
    };
}), b.register('qXvNn', function(a, j) {
    b('sCcFp51'), b('sCcFp50'), b('sCcFp49'), b('sCcFp48'), b('sCcFp47'), b('sCcFp46'), b('sCcFp45'), b('sCcFp44');
}), b.register('sCcFp51', function(a, b) {}), b.register('sCcFp50', function(a, b) {}), b.register('sCcFp49', function(a, b) {}), b.register('sCcFp48', function(a, b) {}), b.register('sCcFp47', function(a, b) {}), b.register('sCcFp46', function(a, b) {}), b.register('sCcFp45', function(a, b) {}), b.register('sCcFp44', function(a, b) {}), b.register('zE9L5', function(a, j) {
    b('sCcFp43'), b('sCcFp42'), b('sCcFp41'), b('sCcFp40'), b('sCcFp39'), b('sCcFp38'), b('sCcFp37'), b('sCcFp36'), b('sCcFp35'), b('sCcFp34'), b('sCcFp33'), b('sCcFp32'), b('sCcFp31'), b('sCcFp30'), b('sCcFp29'), b('sCcFp28'), b('sCcFp27'), b('sCcFp26'), b('sCcFp25'), b('sCcFp24'), b('sCcFp23'), b('sCcFp22'), b('sCcFp21'), b('sCcFp20'), b('sCcFp19'), b('sCcFp18'), b('sCcFp17'), b('sCcFp16'), b('sCcFp15'), b('sCcFp14'), b('sCcFp13'), b('sCcFp12'), b('sCcFp11'), b('sCcFp10'), b('sCcFp9'), b('sCcFp8'), b('sCcFp7'), b('sCcFp6'), b('sCcFp5');
}), b.register('sCcFp43', function(a, b) {}), b.register('sCcFp42', function(a, b) {}), b.register('sCcFp41', function(a, b) {}), b.register('sCcFp40', function(a, b) {}), b.register('sCcFp39', function(a, b) {}), b.register('sCcFp38', function(a, b) {}), b.register('sCcFp37', function(a, b) {}), b.register('sCcFp36', function(a, b) {}), b.register('sCcFp35', function(a, b) {}), b.register('sCcFp34', function(a, b) {}), b.register('sCcFp33', function(a, b) {}), b.register('sCcFp32', function(a, b) {}), b.register('sCcFp31', function(a, b) {}), b.register('sCcFp30', function(a, b) {}), b.register('sCcFp29', function(a, b) {}), b.register('sCcFp28', function(a, b) {}), b.register('sCcFp27', function(a, b) {}), b.register('sCcFp26', function(a, b) {}), b.register('sCcFp25', function(a, b) {}), b.register('sCcFp24', function(a, b) {}), b.register('sCcFp23', function(a, b) {}), b.register('sCcFp22', function(a, b) {}), b.register('sCcFp21', function(a, b) {}), b.register('sCcFp20', function(a, b) {}), b.register('sCcFp19', function(a, b) {}), b.register('sCcFp18', function(a, b) {}), b.register('sCcFp17', function(a, b) {}), b.register('sCcFp16', function(a, b) {}), b.register('sCcFp15', function(a, b) {}), b.register('sCcFp14', function(a, b) {}), b.register('sCcFp13', function(a, b) {}), b.register('sCcFp12', function(a, b) {}), b.register('sCcFp11', function(a, b) {}), b.register('sCcFp10', function(a, b) {}), b.register('sCcFp9', function(a, b) {}), b.register('sCcFp8', function(a, b) {}), b.register('sCcFp7', function(a, b) {}), b.register('sCcFp6', function(a, b) {}), b.register('sCcFp5', function(a, b) {}), b.register('dGvKz', function(j, c) {
    a(j.exports, 'connect', function() {
        return h;
    });
    var c = b('fltYN'),
        d = b('xQzrM');
    const e = new Blob([d.worker], {
            type: 'application/javascript; charset=utf-8'
        }),
        f = URL.createObjectURL(e),
        g = (0, c.load)(f),
        h = (g.characterize, g.connect);
    g.disconnect, g.encode, g.isSupported, g.record;
    URL.revokeObjectURL(f);
}), b.register('fltYN', function(j, c) {
    a(j.exports, 'load', function() {
        return h;
    });
    var c = b('qDwZR');
    b('LCAso'), b('GaHMw');
    const d = (0, c.createBroker)({
            characterize: ({
                call: e
            }) => () => e('characterize'),
            encode: ({
                call: f
            }) => (b, j) => f('encode', {
                recordingId: b,
                timeslice: j
            }),
            record: ({
                call: g
            }) => async (b, j, c) => {
                await g('record', {
                    recordingId: b,
                    sampleRate: j,
                    typedArrays: c
                }, c.map(({
                    buffer: h
                }) => h));
            }
        }),
        h = g => {
            const i = new Worker(g);
            return d(i);
        };
}), b.register('LCAso', function(a, j) {
    b('sCcFp4');
}), b.register('sCcFp4', function(a, b) {}), b.register('GaHMw', function(a, j) {
    b('sCcFp3'), b('sCcFp2'), b('sCcFp1');
}), b.register('sCcFp3', function(a, b) {}), b.register('sCcFp2', function(a, b) {}), b.register('sCcFp1', function(a, b) {}), b.register('xQzrM', function(b, j) {
    a(b.exports, 'worker', function() {
        return c;
    });
    const c = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t),a=o(r),i=o(n),u=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?a.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var a={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)a.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(a),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(c(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(s.default(e),[u(t[r.name],r.modifiers),n]):[].concat(s.default(e),[function(e){return u(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(s.default(e),s.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(s.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,s=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=s.cause,i=s.missingParameters,u=void 0===n?new Error:new Error(n(i));return null!==a&&(u.cause=a),void 0!==r&&(u.code=r(i)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),s=["honest","hour","hono"];for(t in s)if(0==o.indexOf(s[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),s=r(906),a=r(344);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,s=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),a=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),u=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),c=(e,t)=>async r=>{let{data:{id:n,method:o,params:u}}=r;const c=t[o];try{if(void 0===c)throw s({method:o});const t=void 0===u?c():c(u);if(void 0===t)throw a({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),s=(0,l.generateUniqueNumber)(d);return d.set(s,(()=>{o(),n.close(),d.delete(s)})),{result:s}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw u({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=c(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let o=0;o<t;o+=1){const t=e[o];void 0===r[o]&&(r[o]=[]);const s=t.shift();if(void 0===s)break e;r[o].push(s),0===o&&(n+=s.length)}}if(n>t){const o=n-t;r.forEach(((t,r)=>{const n=t.pop(),s=n.length-o;t.push(n.subarray(0,s)),e[r].unshift(n.subarray(s))}))}return r},v=new Map,g=(e=>(t,r,n)=>{const o=e.get(t);if(void 0===o){const o={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,o),o}return o.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),o})(v),x=((e,t)=>(r,n,o,s)=>{const a=o>>3,i="subsequent"===n?0:44,u=r.length,c=e(r[0]),l=new ArrayBuffer(c*u*a+i),d=new DataView(l);return"subsequent"!==n&&t(d,o,u,"complete"===n?c:Number.POSITIVE_INFINITY,s),r.forEach(((e,t)=>{let r=i+t*a;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=u*a}}))})),[l]})(m,((e,t,r,n,o)=>{const s=t>>3,a=Math.min(n*r*s,4294967251);e.setUint32(0,1380533830),e.setUint32(4,a+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,o,!0),e.setUint32(28,o*r*s,!0),e.setUint16(32,r*s,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,a,!0)})),w=new Map;p(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:e=>{let{recordingId:t,timeslice:r}=e;const n=w.get(t);void 0!==n&&(w.delete(t),n.reject(new Error("Another request was made to initiate an encoding.")));const o=v.get(t);if(null!==r){if(void 0===o||m(o.channelDataArrays[0])*(1e3/o.sampleRate)<r)return new Promise(((e,n)=>{w.set(t,{reject:n,resolve:e,timeslice:r})}));const e=h(o.channelDataArrays,Math.ceil(r*(o.sampleRate/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,o.sampleRate);return o.isComplete=!1,{result:n,transferables:n}}if(void 0!==o){const e=x(o.channelDataArrays,o.isComplete?"complete":"subsequent",16,o.sampleRate);return v.delete(t),{result:e,transferables:e}}return{result:[],transferables:[]}},record:e=>{let{recordingId:t,sampleRate:r,typedArrays:n}=e;const o=g(t,r,n),s=w.get(t);if(void 0!==s&&m(o.channelDataArrays[0])*(1e3/r)>=s.timeslice){const e=h(o.channelDataArrays,Math.ceil(s.timeslice*(r/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,r);o.isComplete=!1,w.delete(t),s.resolve({result:n,transferables:n})}return{result:null}}})})()})();';
}), b.register('5WxMK', function(j, k) {
    a(j.exports, 'default', function() {
        return h;
    });
    var c = b('8kSQZ'),
        d = b('IsmrL'),
        e = b('cR5QE'),
        f = b('uPP4W'),
        g = b('4mcf8');
    var h = a => {
        const [i, j] = f.useState(a.latex), k = f.useCallback(() => {
            a.onChange(i), a.close();
        }, [
            i,
            a.onChange,
            a.close
        ]);
        return (0, c.jsx)(e.default, {
            open: a.visible,
            width: 670,
            closable: !1,
            destroyOnClose: !0,
            style: {
                top: 20
            },
            onCancel: a.close,
            footer: (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(d.default, {
                        onClick: a.close,
                        children: 'Cancel'
                    }),
                    a.latex ? (0, c.jsx)(d.default, {
                        onClick: () => {
                            a.onChange(void 0), a.close();
                        },
                        children: 'Remove Equation'
                    }) : null,
                    (0, c.jsx)(d.default, {
                        type: 'primary',
                        onClick: k,
                        children: a.latex ? 'Update' : 'Insert'
                    })
                ]
            }),
            children: (0, c.jsx)(g.default, {
                latex: a.latex,
                onChange: j
            })
        });
    };
}), b.register('4mcf8', function(o, p) {
    a(o.exports, 'default', function() {
        return m;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('f/Oze'),
        f = b('h99Nu'),
        g = b('lmfrI'),
        h = b('gSUVO');
    let i, j, k, l = a => a;
    var m = a => {
        const n = d.useRef(),
            [o, p] = d.useState(a.latex);
        return d.useEffect(() => {
            const q = new(0, e.MathfieldElement)({
                virtualKeyboardMode: 'off'
            });
            a.latex && q.setValue(a.latex), document.body.style.setProperty('--keyboard-zindex', '1000'), q.addEventListener('mount', () => {
                q.focus(), q.virtualKeyboardState = 'visible';
            }), q.addEventListener('input', n => {
                var r;
                if ('insertLineBreak' === n.inputType)
                    null == a || null === (r = a.onComplete) || void 0 === r || r.call(a);
                else {
                    const s = q.getValue('latex');
                    p(s), a.onChange && a.onChange(s);
                }
            }), q.addEventListener('unmount', () => {
                q.virtualKeyboardState = 'hidden';
            }), n.current.appendChild(q);
        }, []), (0, c.jsxs)(n, {
            children: [
                (0, c.jsx)(o, {
                    ref: n
                }),
                (null == o ? void 0 : o.length) ? null : (0, c.jsx)(p, {
                    children: 'Enter math...'
                })
            ]
        });
    };
    const n = f.default.div(i || (i = l`
  position: relative;
`)),
        o = f.default.div(j || (j = l`
  math-field {
    font-size: 32px;
    color: ${ 0 };
    padding: 15px;
    outline: #40a9ff auto 2px; // Color of the AntD focus outline
  }
`), g.default.Black),
        p = f.default.div(k || (k = l`
  position: absolute;
  top: 23px;
  left: 16px;
  font-family: ${ 0 };
  font-style: italic;
  color: #bfbfbf;
  font-size: 18px;
  pointer-events: none;
`), h.Fonts.SFPro);
}), b.register('OIAFH', function(p, c) {
    a(p.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('G4o/H'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'CameraOutlined';
    var h = d.forwardRef(g);
}), b.register('G4o/H', function(b, p) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('Cadqq', function(p, c) {
    a(p.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('4UWhq'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'FunctionOutlined';
    var h = d.forwardRef(g);
}), b.register('4UWhq', function(b, p) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('rDRgw', function(p, C) {
    a(p.exports, 'default', function() {
        return p;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('oAev+'),
        f = b('h99Nu'),
        g = b('lmfrI'),
        h = b('gSUVO'),
        i = b('14Th7'),
        j = b('o/FCM'),
        k = b('PjB0f'),
        l = b('xcGI7');
    let m;
    const n = (0, b('Vlfxs').observer)(a => {
            const o = a.question.type === j.QuestionType.multipleChoice,
                p = a.question.type === j.QuestionType.textInput;
            return (0, c.jsxs)(c.Fragment, {
                children: [
                    (0, c.jsx)(o, {
                        children: (0, k.plural)('Answer', a.question.answers.length)
                    }),
                    a.question.answers.map((C, f) => (0, c.jsxs)(d.Fragment, {
                        children: [
                            (0, c.jsx)(e.default, {
                                questionType: a.question.type,
                                onCorrectChange: o => ((o, p) => a.question.answers = a.question.answers.map((a, C) => C !== o ? a : {
                                    ...a,
                                    correct: p
                                }))(f, o),
                                onTextChange: o => ((o, p) => a.question.answers = a.question.answers.map((a, C) => C !== o ? a : {
                                    ...a,
                                    text: p
                                }))(f, o),
                                text: C.text,
                                correct: C.correct,
                                image: C.image,
                                latex: C.latex,
                                textType: C.textType,
                                onImageChange: o => ((o, p) => a.question.answers = a.question.answers.map((a, C) => C !== o ? a : {
                                    ...a,
                                    image: p
                                }))(f, o),
                                onLatexChange: o => ((o, p) => a.question.answers = a.question.answers.map((a, C) => C !== o ? a : {
                                    ...a,
                                    latex: p
                                }))(f, o),
                                onTextTypeChange: o => {
                                    ((o, p) => {
                                        a.question.answers = a.question.answers.map((a, C) => C !== o ? a : {
                                            ...a,
                                            textType: p
                                        });
                                    })(f, o);
                                },
                                allowPhoto: o && !a.imagesBlocked,
                                allowLatex: o && !a.latexBlocked,
                                blockChangingCorrect: p,
                                canRemove: f > 0 && p || f > 1,
                                onRemove: () => (o => {
                                    a.question.answers = a.question.answers.filter((a, p) => o !== p);
                                })(f),
                                onPressEnter: a.onPressEnter
                            }),
                            (0, c.jsx)('div', {
                                style: {
                                    height: 10
                                }
                            })
                        ]
                    }, `answer-${ f }`)),
                    a.question.answers.length < 4 && (0, c.jsx)(l.default, {
                        style: {
                            fontSize: 14,
                            marginLeft: a.question.type === j.QuestionType.textInput ? 0 : 38,
                            opacity: 0.7,
                            cursor: 'pointer',
                            marginTop: -4,
                            fontStyle: 'italic'
                        },
                        onClick: () => a.question.answers.push((0, i.defaultAnswer)(!o)),
                        children: 'Add another answer'
                    })
                ]
            });
        }),
        o = f.default.div(m || (m = (a => a)`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), g.default.Black, h.Fonts.SFPro, h.FontWeights.UltraBold);
    var p = q;
}), b.register('oAev+', function(B, C) {
    a(B.exports, 'default', function() {
        return z;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('h99Nu'),
        e = b('IsmrL'),
        f = b('M1Vx4'),
        g = b('Ly1h3'),
        h = b('ECQaz'),
        i = b('gBQ22'),
        j = b('qLhB38'),
        k = b('OIAFH'),
        l = b('UnwlJ'),
        m = b('Fi7Fa'),
        n = b('4jOgw8'),
        o = b('j/N3t'),
        p = b('Cadqq'),
        q = b('PjB0f'),
        r = b('5WxMK'),
        s = b('lmfrI'),
        t = b('bTRJM'),
        u = b('o/FCM');
    let v, w, x = a => a;
    e.default;
    const y = a => {
        const z = {
            twoToneColor: a.correct ? '#4caf50' : '#f44336',
            style: {
                cursor: 'pointer',
                marginRight: 10
            },
            onClick: a.onClick
        };
        return a.correct ? (0, c.jsx)(l.default, {
            ...z
        }) : (0, c.jsx)(m.default, {
            ...z
        });
    };
    var z = a => {
        const [A, B, C] = (0, q.useBoolean)(!1), [D, E, F] = (0, q.useBoolean)(!1);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsxs)(A, {
                    children: [
                        a.questionType === u.QuestionType.textInput ? (0, c.jsxs)(g.default, {
                            value: a.textType || u.TextInputAnswerType.exact,
                            size: 'large',
                            style: {
                                marginRight: 10,
                                width: 120
                            },
                            onChange: a.onTextTypeChange,
                            children: [
                                (0, c.jsx)(g.default.Option, {
                                    value: u.TextInputAnswerType.exact,
                                    children: 'Is Exactly'
                                }),
                                (0, c.jsx)(g.default.Option, {
                                    value: u.TextInputAnswerType.contains,
                                    children: 'Contains'
                                })
                            ]
                        }) : (0, c.jsx)(y, {
                            correct: a.correct,
                            onClick: () => {
                                a.blockChangingCorrect || a.onCorrectChange && a.onCorrectChange(!a.correct);
                            }
                        }),
                        (() => {
                            const G = [{
                                    key: 'add-image',
                                    label: 'Add Image',
                                    onClick: B,
                                    icon: (0, c.jsx)(k.default, {}),
                                    disabled: !(a.allowPhoto && !a.image && !a.latex && !a.text)
                                },
                                {
                                    key: 'add-latex',
                                    label: 'Add Equation',
                                    onClick: E,
                                    icon: (0, c.jsx)(p.default, {}),
                                    disabled: !(a.allowLatex && !a.image && !a.latex && !a.text)
                                },
                                {
                                    key: 'remove',
                                    label: 'Remove Answer',
                                    onClick: a.onRemove,
                                    icon: (0, c.jsx)(n.default, {}),
                                    disabled: !a.canRemove,
                                    danger: !0
                                }
                            ];
                            return (0, c.jsxs)('div', {
                                className: 'maxWidth flex vc between',
                                children: [
                                    a.image ? (0, c.jsx)(j.default, {
                                        image: a.image,
                                        size: 40,
                                        blockModalOpen: !0,
                                        onClick: B,
                                        showBorder: !0
                                    }) : a.latex ? (0, c.jsx)(B, {
                                        onClick: E,
                                        children: (0, c.jsx)(t.default, {
                                            latex: a.latex
                                        })
                                    }) : (0, c.jsx)(h.default, {
                                        value: a.text,
                                        onPressEnter: a.onPressEnter,
                                        onTextChange: a.onTextChange,
                                        placeholder: (a.correct ? 'Correct' : 'Incorrect') + ' answer...',
                                        disabled: !1
                                    }),
                                    (0, c.jsx)(f.default, {
                                        menu: {
                                            items: G
                                        },
                                        trigger: ['hover'],
                                        children: (0, c.jsx)(o.default, {
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
                (0, c.jsx)(i.default, {
                    visible: A,
                    close: C,
                    currentImage: a.image,
                    onImageChange: a.onImageChange
                }),
                (0, c.jsx)(r.default, {
                    visible: D,
                    close: F,
                    latex: a.latex,
                    onChange: a.onLatexChange
                })
            ]
        });
    };
    const A = d.default.div.attrs({
            className: 'flex maxWidth vc'
        })(v || (v = x`
  font-size: 28px;
  span {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`)),
        B = d.default.div(w || (w = x`
  cursor: pointer;
  font-size: 16px;
  color: ${ 0 };
  padding: 5px 21px;
  border: 2px dashed ${ 0 };
  border-radius: 6px;
`), s.default.Black, s.default.BorderGray);
}), b.register('UnwlJ', function(n, c) {
    a(n.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('eC6jU'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'CheckCircleTwoTone';
    var h = d.forwardRef(g);
}), b.register('eC6jU', function(b, n) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        icon: function(a, b) {
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
                            fill: a
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z',
                            fill: b
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
                            fill: a
                        }
                    }
                ]
            };
        },
        name: 'check-circle',
        theme: 'twotone'
    };
}), b.register('Fi7Fa', function(n, c) {
    a(n.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('DLDiO'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'CloseCircleTwoTone';
    var h = d.forwardRef(g);
}), b.register('DLDiO', function(b, n) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
        icon: function(a, b) {
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
                            fill: a
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z',
                            fill: b
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
                            fill: a
                        }
                    }
                ]
            };
        },
        name: 'close-circle',
        theme: 'twotone'
    };
}), b.register('BEXLu', function(n, r) {
    a(n.exports, 'default', function() {
        return f;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('IsmrL'),
        e = b('GJN+q');
    var f = a => {
        const g = (0, c.jsx)(d.default, {
            loading: a.loading,
            type: 'primary',
            disabled: a.disabled,
            onClick: a.onClick,
            children: a.label
        });
        return a.disabledMessage ? (0, c.jsx)(e.default, {
            title: a.disabledMessage,
            children: g
        }) : g;
    };
}), b.register('SRoMp', function(n, r) {
    a(n.exports, 'canAddQuestionErrorMessage', function() {
        return e;
    }), a(n.exports, 'default', function() {
        return f;
    });
    var c = b('o/FCM');
    const d = 'Question must have text, audio, image, or an equation',
        e = a => {
            if (a.text) {
                if (!a.text.trim())
                    return d;
            } else if (!a.audio && !a.image && !a.latex)
                return d;
            if (a.image && a.latex)
                return 'Question cannot contain an image and equation.';
            const f = a.answers.filter(a => {
                var g;
                return !!(null === (g = a.text) || void 0 === g ? void 0 : g.trim()) || !(!a.image && !a.latex);
            });
            return a.type === c.QuestionType.multipleChoice && f.length < 2 ? 'Question must have at least two answers.' : f.length < 1 ? 'Question must have at least one answer.' : null;
        };
    var f = a => null === e(a);
});