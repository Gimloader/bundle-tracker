function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('8y5No', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('sHRDd'),
        f = a('b5kvC');
    var _g = _i => {
        const h = {
            ..._i.style,
            fontFamily: f.Fonts.SFPro,
            color: _i.style && _i.style.color ? _i.style.color : e.default.Black
        };
        return (0, d.jsx)('div', {
            onClick: _i.onClick ? _i.onClick : () => !1,
            style: h,
            children: _i.children
        });
    };
}), a.register('vEG5v', function(b, c) {
    _i(b.exports, 'default', function() {
        return _D;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('PMl60'),
        h = a('JcsMz'),
        i = a('e2X+l'),
        j = a('NIZyA'),
        k = a('ulE4q'),
        l = a('ewwAh'),
        m = a('6CIVV'),
        n = a('CAKUf'),
        o = a('Axq+p'),
        p = a('8y5No'),
        q = a('sHRDd'),
        r = a('poI7l'),
        s = a('BtZXP'),
        t = a('j+BT1');
    let u, v, w = _i => _i;
    const x = n.default.TabPane,
        y = l.default.Search,
        z = _i => (0, e.jsxs)('div', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            children: [
                (0, e.jsx)(_C, {
                    className: 'lightShadow mediumShadowOnHover',
                    url: _i.details.url,
                    isMiddle: _i.isMiddle,
                    onClick: () => {
                        _i.onSelect(_i.details.url), (0, g.request)({
                            url: '/api/v1/editor/download-image',
                            method: 'POST',
                            data: {
                                photoId: _i.details.id
                            },
                            success: () => !1,
                            error: () => !1
                        });
                    }
                }),
                (0, e.jsx)('a', {
                    target: '_blank',
                    href: _i.details.creator.link,
                    style: {
                        marginBottom: 10,
                        width: 146
                    },
                    children: (0, e.jsxs)(p.default, {
                        style: {
                            fontSize: 11,
                            width: '100%',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                        },
                        children: [
                            'Image by ',
                            _i.details.creator.name
                        ]
                    })
                })
            ]
        });
    class A extends f.Component {
        componentDidMount() {
            this.props.defaultSearchTerm && this.requestImages(this.props.defaultSearchTerm);
        }
        render() {
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    this.getContent(),
                    (0, e.jsx)(s.default, {
                        id: 'upload image',
                        visible: this.state.upgradeModalOpen,
                        close: this.closeUpgradeModal,
                        copy: {
                            title: t.IMAGE_UPLOAD_TITLE,
                            description: t.IMAGE_UPLOAD_DESCRIPTION
                        }
                    })
                ]
            });
        }
        constructor(..._i) {
            super(..._i), (0, d.default)(this, 'state', {
                loading: !1,
                error: !1,
                imageResults: [],
                customLinkUrl: '',
                searchCount: 0,
                currentTabKey: this.props.blockUnsplash ? '2' : '1',
                upgradeModalOpen: !1
            }), (0, d.default)(this, 'onSearch', _i => {
                this.setState({
                    imageResults: []
                }), this.requestImages(_i);
            }), (0, d.default)(this, 'requestImages', _i => {
                this.setState({
                    loading: !0
                }), (0, g.request)({
                    method: 'POST',
                    url: '/api/v1/editor/images',
                    data: {
                        searchQuery: _i
                    },
                    success: _i => this.setState({
                        imageResults: _i.photos,
                        searchCount: this.state.searchCount + 1
                    }),
                    error: () => this.setState({
                        error: !0
                    }),
                    both: () => this.setState({
                        loading: !1
                    })
                });
            }), (0, d.default)(this, 'onImageChange', _i => {
                const B = _i.target.value,
                    C = new Image();
                C.onload = () => {
                    this.setState({
                        customLinkUrl: B
                    });
                }, C.src = B;
            }), (0, d.default)(this, 'onPickCustomImage', () => this.props.onImagePicked(this.state.customLinkUrl)), (0, d.default)(this, 'onImageUploaded', _i => this.props.onImagePicked(_i)), (0, d.default)(this, 'handleTabClick', _i => {
                '3' !== _i || (0, g.isUpgraded)() || (0, g.isStudent)() ? this.setState({
                    currentTabKey: _i
                }) : this.setState({
                    upgradeModalOpen: !0
                });
            }), (0, d.default)(this, 'closeUpgradeModal', () => this.setState({
                upgradeModalOpen: !1
            })), (0, d.default)(this, 'getContent', () => (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(p.default, {
                        style: {
                            fontWeight: 900,
                            fontSize: this.props.titleFontSize || 38,
                            marginBottom: this.props.titleBottomMargin || 0
                        },
                        children: this.props.title
                    }),
                    (0, e.jsxs)(n.default, {
                        type: 'card',
                        activeKey: this.state.currentTabKey,
                        onTabClick: this.handleTabClick,
                        children: [
                            !this.props.blockUnsplash && (0, e.jsxs)(x, {
                                tab: 'Unsplash',
                                children: [
                                    (0, e.jsx)(y, {
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
                                    this.state.loading && (0, e.jsx)('div', {
                                        style: {
                                            marginTop: 5
                                        },
                                        children: (0, e.jsx)(m.default, {
                                            size: 'large'
                                        })
                                    }),
                                    this.state.error && (0, e.jsx)(j.default, {
                                        message: 'Error',
                                        description: 'There was an error searching from Unsplash. Please try again later or enter a link.',
                                        type: 'error',
                                        showIcon: !0
                                    }),
                                    !this.state.loading && this.props.unsplashDefaultText && 0 === this.state.searchCount && (0, e.jsxs)('div', {
                                        className: 'flex hc vc flex-column',
                                        style: {
                                            color: q.default.Black,
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, e.jsx)(i.default, {
                                                style: {
                                                    fontSize: 50,
                                                    marginBottom: 5
                                                }
                                            }),
                                            (0, e.jsx)('div', {
                                                style: {
                                                    fontSize: 15,
                                                    textAlign: 'center'
                                                },
                                                children: this.props.unsplashDefaultText
                                            })
                                        ]
                                    }),
                                    !this.state.loading && 0 !== this.state.searchCount && 0 === this.state.imageResults.length && (0, e.jsxs)('div', {
                                        className: 'flex hc vc flex-column',
                                        style: {
                                            color: q.default.Black,
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, e.jsx)(h.default, {
                                                style: {
                                                    fontSize: 50,
                                                    marginBottom: 5
                                                }
                                            }),
                                            (0, e.jsx)('div', {
                                                style: {
                                                    fontSize: 15,
                                                    textAlign: 'center'
                                                },
                                                children: 1 === this.state.searchCount ? 'No images found. Try searching for something!' : 'No results found.'
                                            })
                                        ]
                                    }),
                                    (0, e.jsx)(_B, {
                                        children: this.state.imageResults.map((_i, a) => (0, e.jsx)(z, {
                                            details: _i,
                                            isMiddle: (a - 1) % 3 == 0,
                                            onSelect: this.props.onImagePicked
                                        }, _i.url))
                                    })
                                ]
                            }, '1'),
                            (0, e.jsxs)(x, {
                                tab: 'Link',
                                children: [
                                    (0, e.jsx)(l.default, {
                                        size: 'large',
                                        placeholder: 'Image link',
                                        style: {
                                            marginTop: -3
                                        },
                                        onChange: this.onImageChange
                                    }),
                                    (0, e.jsx)(k.default, {
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
                            this.props.allowUpload && (0, e.jsx)(x, {
                                tab: 'Upload',
                                children: (0, e.jsx)(r.default, {
                                    onPhotoUploaded: this.onImageUploaded
                                })
                            }, '3')
                        ]
                    })
                ]
            }));
        }
    }
    const _B = o.default.div(u || (u = w`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  width: ${ 0 }px;
`), () => 464),
        _C = o.default.div(v || (v = w`
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
`), _i => _i.url, _i => _i.isMiddle ? 13 : 0, _i => _i.isMiddle ? 13 : 0);
    var _D = A;
}), a.register('JcsMz', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('Qi9BL'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'MehOutlined';
    var _i = e.forwardRef(h);
}), a.register('Qi9BL', function(b, c) {
    _m(b.exports, 'default', function() {
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
                    d: 'M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z'
                }
            }]
        },
        name: 'meh',
        theme: 'outlined'
    };
}), a.register('poI7l', function(b, c) {
    _m(b.exports, 'default', function() {
        return _m;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('pVVrq'),
        h = a('MSsQO'),
        i = a('6CIVV'),
        j = a('vGnv2'),
        k = a('PMl60');
    class l extends f.Component {
        render() {
            return (0, e.jsx)(e.Fragment, {
                children: (0, e.jsx)('div', {
                    style: {
                        width: '100%',
                        height: 300
                    },
                    children: (0, e.jsx)(j.default.Dragger, {
                        customRequest: this.uploadImage,
                        multiple: !1,
                        accept: 'image/*',
                        beforeUpload: this.fileIsSmallEnough,
                        children: this.state.loading ? (0, e.jsx)(i.default, {
                            size: 'large'
                        }) : (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)('p', {
                                    className: 'ant-upload-drag-icon',
                                    children: (0, e.jsx)(g.default, {})
                                }),
                                (0, e.jsx)('p', {
                                    className: 'ant-upload-text',
                                    children: 'Click or drag to upload a photo!'
                                }),
                                (0, e.jsx)('p', {
                                    className: 'ant-upload-hint',
                                    children: 'Photo must be less than 5MB.'
                                })
                            ]
                        })
                    })
                })
            });
        }
        constructor(..._m) {
            super(..._m), (0, d.default)(this, 'state', {
                loading: !1
            }), (0, d.default)(this, 'uploadImage', ({
                file: _m
            }) => {
                const n = new FormData();
                n.append('file', _m), this.setState({
                    loading: !0
                }), (0, k.request)({
                    url: '/api/games/image/add',
                    method: 'post',
                    data: n,
                    success: _m => {
                        this.setState({
                            loading: !1
                        }), this.props.onPhotoUploaded(_m.url);
                    },
                    error: _m => {
                        this.setState({
                            loading: !1
                        }), h.default.error('Error uploading. Please try again.');
                    }
                });
            }), (0, d.default)(this, 'fileIsSmallEnough', _m => {
                const n = _m.size / 1024 / 1024 < 5;
                return n || h.default.error('Photo must be less than 5MB'), n;
            });
        }
    }
    var _m = l;
}), a.register('pVVrq', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('RvV/X'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'InboxOutlined';
    var _i = e.forwardRef(h);
}), a.register('RvV/X', function(b, c) {
    _w(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('j+BT1', function(b, c) {
    _w(b.exports, 'AUDIO_TITLE', function() {
        return _f;
    }), _w(b.exports, 'AUDIO_DESCRIPTION', function() {
        return _g;
    }), _w(b.exports, 'IMAGE_UPLOAD_TITLE', function() {
        return _h;
    }), _w(b.exports, 'IMAGE_UPLOAD_DESCRIPTION', function() {
        return _i;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('hHkFq');
    const _f = (0, d.jsx)(d.Fragment, {
            children: 'Add audio with Pro'
        }),
        _g = (0, d.jsxs)(d.Fragment, {
            children: [
                'Record your voice and have the audio played each time a student goes to answer this question. ',
                (0, d.jsxs)('b', {
                    children: [
                        'To add audio, upgrade to ',
                        e.COMPANY_NAME,
                        ' Pro.'
                    ]
                })
            ]
        }),
        _h = (0, d.jsx)(d.Fragment, {
            children: 'Upload images with Pro'
        }),
        _i = (0, d.jsxs)(d.Fragment, {
            children: [
                'To add your own images to questions, ',
                (0, d.jsxs)('b', {
                    children: [
                        'upgrade to ',
                        e.COMPANY_NAME,
                        ' Pro.'
                    ]
                })
            ]
        });
}), a.register('DV4ZV', function(b, c) {
    _w(b.exports, 'defaultAnswer', function() {
        return _p;
    }), _w(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('NIZyA'),
        f = a('YRlpt'),
        g = a('2x11J'),
        h = a('7up2I'),
        i = a('LEQ5w'),
        j = a('+M5wm'),
        k = a('J9Msn'),
        l = a('IAdBC'),
        m = a('1shDe'),
        n = a('SB848'),
        o = a('o84Oe');
    const _p = _w => ({
            _id: Math.random().toString(),
            text: '',
            correct: _w
        }),
        q = () => ({
            _id: '',
            text: '',
            type: j.QuestionType.multipleChoice,
            image: '',
            audio: '',
            answers: [
                _p(!0),
                _p(!1),
                _p(!1),
                _p(!1)
            ]
        });
    var _r = (0, g.observer)(i.forwardRef((_w, a) => {
        var s;
        const t = (0, h.useLocalObservable)(() => q()),
            u = (0, o.default)(t) && !_w.blockAddingNewQuestions,
            v = () => {
                const _w = q();
                Object.keys(_w).forEach(a => {
                    t[a] = _w[a];
                });
            };
        i.useImperativeHandle(a, () => ({
            clear: v
        })), i.useEffect(() => {
            _o.existingQuestion ? Object.keys(_o.existingQuestion).forEach(a => {
                t[a] = _o.existingQuestion[a];
            }) : v();
        }, [null === (s = _o.existingQuestion) || void 0 === s ? void 0 : s._id]);
        const w = () => {
            u && _o.submitQuestion(t);
        };
        return (0, d.jsxs)(f.default, {
            open: _o.visible,
            width: 670,
            style: {
                top: 20
            },
            onCancel: _o.close,
            afterClose: _o.afterClose,
            closable: !1,
            footer: (0, d.jsx)(n.default, {
                label: _o.buttonLabel || 'Add',
                onClick: w,
                loading: _o.loading,
                disabledMessage: (0, o.canAddQuestionErrorMessage)(t),
                disabled: !u
            }),
            children: [
                (0, d.jsx)(k.default, {
                    question: t
                }),
                (0, d.jsx)(l.default, {
                    question: t,
                    onPressEnter: w,
                    imagesBlocked: _o.imagesBlocked,
                    audioBlocked: _o.audioBlocked,
                    latexBlocked: _o.latexBlocked
                }),
                (0, d.jsx)(m.default, {
                    question: t,
                    onPressEnter: w,
                    imagesBlocked: _o.imagesBlocked,
                    latexBlocked: _o.latexBlocked
                }),
                _o.errorMessage ? (0, d.jsx)(e.default, {
                    message: 'Error',
                    description: _o.errorMessage,
                    type: 'error',
                    showIcon: !0
                }) : null
            ]
        });
    }));
}), a.register('J9Msn', function(b, c) {
    _o(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('fmVdR'),
        h = a('yiusa0'),
        i = a('+M5wm'),
        j = a('b5kvC'),
        k = a('DV4ZV');
    let l;
    var _m = (0, a('2x11J').observer)(_o => {
        const n = e.useCallback(_o => {
                _o.target.value === i.QuestionType.multipleChoice && c(), _o.target.value === i.QuestionType.textInput && b();
            }, []),
            o = () => {
                const p = _o.question.answers.filter(_o => _o.correct && _o.text && !_o.image);
                p.length ? _o.question.answers = p : _o.question.answers = [(0, k.defaultAnswer)(!0)], _o.question.type = i.QuestionType.textInput;
            },
            p = () => {
                const q = _o.question.answers.filter((_o, q) => q <= 3);
                _o.question.answers = q;
                for (let r = q.length; r < 4; r++)
                    _o.question.answers.push((0, k.defaultAnswer)(!1));
                _o.question.type = i.QuestionType.multipleChoice;
            };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_o, {
                    children: [
                        (0, d.jsx)('div', {}),
                        (0, d.jsx)('div', {
                            children: (0, d.jsxs)(h.default.Group, {
                                onChange: n,
                                value: _o.question.type,
                                children: [
                                    (0, d.jsx)(h.default, {
                                        value: i.QuestionType.multipleChoice,
                                        children: (0, d.jsx)('span', {
                                            style: _n,
                                            children: 'Multiple Choice'
                                        })
                                    }),
                                    (0, d.jsx)(h.default, {
                                        value: i.QuestionType.textInput,
                                        children: (0, d.jsx)('span', {
                                            style: _n,
                                            children: 'Text Input'
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, d.jsx)(g.default, {
                    style: {
                        marginTop: 16,
                        marginBottom: 11
                    }
                })
            ]
        });
    });
    const _n = {
            fontFamily: j.Fonts.SFPro
        },
        _o = f.default.div(l || (l = (_o => _o)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`));
}), a.register('IAdBC', function(b, c) {
    _o(b.exports, 'default', function() {
        return _y;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('sHRDd'),
        g = a('b5kvC'),
        h = a('YJjBj'),
        i = a('ulE4q'),
        j = a('2x11J'),
        k = a('VjaJ4'),
        l = a('DKaq/'),
        m = a('H1Rq4'),
        n = a('PMl60'),
        o = a('BtZXP'),
        p = a('j+BT1'),
        q = (n = a('PMl60'), a('hYhun')),
        r = a('dDoty'),
        s = a('g2qtU0'),
        t = a('iw0Mw'),
        u = a('vIBvW');
    let v, w, x = _o => _o;
    var _y = (0, j.observer)(_o => {
        const [z, A, B] = (0, n.useBoolean)(!1), [C, D, E] = (0, n.useBoolean)(!1), [F, G, H] = (0, n.useBoolean)(!1), [I, J, K] = (0, n.useBoolean)(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(o.default, {
                    visible: F,
                    close: H,
                    id: 'add audio',
                    copy: {
                        title: p.AUDIO_TITLE,
                        description: p.AUDIO_DESCRIPTION
                    }
                }),
                (0, d.jsx)(k.default, {
                    visible: z,
                    close: B,
                    onImageChange: z => {
                        _o.question.image = z;
                    },
                    currentImage: _o.question.image
                }),
                (0, d.jsx)(m.default, {
                    visible: C,
                    close: E,
                    onAudioChanged: z => {
                        _o.question.audio = z, E();
                    },
                    audio: _o.question.audio
                }),
                (0, d.jsx)(q.default, {
                    visible: I,
                    close: K,
                    latex: _o.question.latex,
                    onChange: z => {
                        _o.question.latex = z;
                    }
                }),
                (0, d.jsx)(_z, {
                    children: 'Question'
                }),
                (0, d.jsx)(h.default, {
                    value: _o.question.text,
                    onTextChange: z => {
                        _o.question.text = z;
                    },
                    placeholder: 'Ask away...',
                    disabled: !1,
                    onPressEnter: _o.onPressEnter
                }),
                _o.imagesBlocked && _o.audioBlocked && _o.latexBlocked ? null : (0, d.jsxs)(_A, {
                    children: [
                        (0, d.jsx)(_B, {
                            icon: (0, d.jsx)(t.default, {}),
                            label: 'Add Photo',
                            onClick: A,
                            disabled: _o.imagesBlocked || !!_o.question.latex,
                            customContent: _o.question.image ? (0, d.jsx)('div', {
                                className: 'flex maxWidth hc vc',
                                children: (0, d.jsx)(l.default, {
                                    image: _o.question.image,
                                    blockModalOpen: !0,
                                    size: 30,
                                    onClick: A
                                })
                            }) : null
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                width: 6
                            }
                        }),
                        (0, d.jsx)(_B, {
                            disabled: _o.audioBlocked || !window.MediaRecorder || (0, n.isStudent)(),
                            icon: (0, d.jsx)(s.default, {}),
                            label: (_o.question.audio ? '' : 'Add ') + 'Audio',
                            onClick: () => {
                                (0, n.isUpgraded)() ? D(): G();
                            }
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                width: 6
                            }
                        }),
                        (0, d.jsx)(_B, {
                            icon: (0, d.jsx)(u.default, {}),
                            disabled: !!_o.question.image,
                            label: 'Add Equation',
                            customContent: _o.question.latex ? (0, d.jsx)('div', {
                                style: {
                                    cursor: 'pointer'
                                },
                                children: (0, d.jsx)(r.default, {
                                    latex: _o.question.latex
                                })
                            }) : null,
                            onClick: J
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 12
                    }
                })
            ]
        });
    });
    const _z = e.default.div(v || (v = x`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), f.default.Black, g.Fonts.SFPro, g.FontWeights.UltraBold),
        _A = e.default.div.attrs({
            className: 'flex maxWidth'
        })(w || (w = x`
  margin-top: 8px;
  height: 48px;
`)),
        _B = _o => (0, d.jsx)(i.default, {
            disabled: _o.disabled,
            style: {
                width: '33.33%',
                height: '100%',
                overflow: 'hidden'
            },
            type: 'dashed',
            tabIndex: '-1',
            onClick: _o.onClick,
            children: _o.customContent ? _o.customContent : (0, d.jsxs)('div', {
                className: 'flex maxHeight hc vc',
                style: {
                    fontFamily: g.Fonts.SFPro
                },
                children: [
                    _o.icon,
                    (0, d.jsx)('div', {
                        style: {
                            marginLeft: 5
                        },
                        children: _o.label
                    })
                ]
            })
        });
}), a.register('YJjBj', function(b, c) {
    _o(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('kXV54'),
        g = a('ewwAh'),
        h = a('ijg0s'),
        i = a('cRGbV'),
        j = a('b5kvC');
    var _k = _o => {
        const l = e.useRef(),
            [m, n] = e.useState(!1);
        return (0, d.jsxs)('div', {
            style: {
                width: '100%'
            },
            children: [
                (0, d.jsx)(g.default, {
                    ref: l,
                    onPressEnter: _o.onPressEnter,
                    maxLength: 220,
                    disabled: _o.disabled,
                    autoFocus: _o.autoFocus,
                    style: {
                        display: 'flex',
                        fontFamily: j.Fonts.SFPro,
                        fontWeight: j.FontWeights.Bold,
                        width: '100%',
                        height: 40
                    },
                    size: 'large',
                    placeholder: _o.placeholder,
                    value: _o.value,
                    onChange: l => {
                        m && n(!1), (l => {
                            _o.onTextChange(l.target.value);
                        })(l);
                    },
                    suffix: m ? (0, d.jsx)('span', {}) : (0, d.jsx)(h.default, {
                        title: 'Show Symbol Keyboard',
                        children: (0, d.jsx)(f.default, {
                            onClick: () => {
                                n(!0), l.current.focus();
                            }
                        })
                    })
                }),
                m ? (0, d.jsx)(i.default, {
                    onSymbolSelected: l => _o.onTextChange(_o.value + l),
                    focusInput: () => {
                        var _o;
                        null === (_o = l.current) || void 0 === _o || _o.focus();
                    }
                }) : null
            ]
        });
    };
}), a.register('cRGbV', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('CAKUf'),
        h = a('Sj6gw');
    let i;
    const j = a('Axq+p').default.div(i || (i = (_m => _m)`
  margin-top: 1px;
`)),
        {
            TabPane: k
        } = g.default;
    var _l = _m => {
        const [m, n] = e.useState(h.default[0].name);
        return (0, d.jsx)(j, {
            children: (0, d.jsx)(g.default, {
                onChange: n,
                activeKey: m,
                tabPosition: _m.tabPosition || 'top',
                children: h.default.map(m => (0, d.jsx)(k, {
                    tab: m.name,
                    style: {
                        boxSizing: 'border-box',
                        maxHeight: 255
                    },
                    className: 'scroll',
                    children: m.characters.map(n => (0, d.jsx)(f.default, {
                        style: {
                            margin: 2
                        },
                        size: 'small',
                        onClick: () => {
                            return m = n, null == _m || _m.onSymbolSelected(m), void(null == _m || _m.focusInput());
                            var o;
                        },
                        children: n
                    }, `${ m.name }-${ n }`))
                }, m.name))
            })
        });
    };
}), a.register('Sj6gw', function(b, c) {
    _m(b.exports, 'default', function() {
        return _d;
    });
    var _d = [{
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
}), a.register('VjaJ4', function(b, c) {
    _m(b.exports, 'default', function() {
        return _m;
    });
    var d = a('1bFPu'),
        e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('ulE4q'),
        h = a('sgToH'),
        i = a('vEG5v'),
        j = a('PMl60'),
        k = a('x8CoD');
    class l extends f.Component {
        render() {
            const {
                visible: _m,
                close: n
            } = this.props;
            return (0, e.jsx)(h.default, {
                open: _m,
                placement: 'right',
                closable: !0,
                destroyOnClose: !0,
                onClose: n,
                width: 528,
                drawerStyle: {
                    height: '100%',
                    overflowY: 'auto',
                    scrollbarWidth: 'none'
                },
                children: this.getContent()
            });
        }
        constructor(..._i) {
            super(..._i), (0, d.default)(this, 'removeImage', () => {
                this.onImagePicked('');
            }), (0, d.default)(this, 'onImagePicked', _i => {
                this.props.close(), this.setState({}), this.props.onImageChange(_i);
            }), (0, d.default)(this, 'getContent', () => this.props.currentImage ? (0, e.jsxs)('div', {
                className: 'flex hc vc flex-column',
                children: [
                    (0, e.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(this.props.currentImage),
                        style: {
                            maxWidth: '100%',
                            maxHeight: 300,
                            borderRadius: 5
                        }
                    }),
                    (0, e.jsx)(g.default, {
                        type: 'primary',
                        style: {
                            marginTop: 10
                        },
                        size: 'large',
                        onClick: this.removeImage,
                        children: 'Remove Image'
                    })
                ]
            }) : (0, e.jsx)(i.default, {
                title: 'Add Photo',
                titleFontSize: 34,
                titleBottomMargin: 6,
                defaultSearchTerm: '',
                onImagePicked: this.onImagePicked,
                allowUpload: !(0, j.isStudent)(),
                unsplashDefaultText: 'Search for anything!'
            }));
        }
    }
    var _m = l;
}), a.register('H1Rq4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('g2qtU0'),
        g = a('ieNls8'),
        h = a('ZYBJo4'),
        i = a('xe9IK1'),
        j = a('RJNyj'),
        k = a('JCNIp'),
        l = a('ulE4q'),
        m = a('fmVdR'),
        n = a('sgToH'),
        o = a('MSsQO'),
        p = a('8y5No'),
        q = a('b5kvC'),
        r = a('PMl60'),
        s = a('INKb2'),
        t = a('x8CoD');
    const u = {
        height: 111,
        width: '100%'
    };
    var _v = _i => {
        const [w, x] = e.useState(!1), {
            status: y,
            startRecording: z,
            stopRecording: A,
            mediaBlobUrl: B
        } = (0, k.useReactMediaRecorder)({
            video: !1,
            audio: !0
        }), C = () => {
            new Audio((0, t.getCloudinaryUrl)(_i.audio)).play();
        }, D = () => _i.onAudioChanged('');
        return (0, d.jsx)(n.default, {
            open: _i.visible,
            placement: 'right',
            width: 515,
            closable: !0,
            destroyOnClose: !0,
            drawerStyle: {
                height: '100%',
                overflowY: 'auto',
                scrollbarWidth: 'none'
            },
            onClose: _i.close,
            children: _i.audio ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(p.default, {
                        style: {
                            fontWeight: q.FontWeights.Black,
                            fontSize: 34
                        },
                        children: 'Audio'
                    }),
                    (0, d.jsx)(p.default, {
                        style: {
                            fontSize: 16,
                            marginTop: -8
                        },
                        children: 'This audio will be played each time a student goes to answer this question.'
                    }),
                    (0, d.jsx)(m.default, {}),
                    (0, d.jsxs)('div', {
                        className: 'flex vc',
                        children: [
                            (0, d.jsx)(l.default, {
                                size: 'large',
                                type: 'primary',
                                onClick: C,
                                icon: (0, d.jsx)(h.default, {}),
                                style: {
                                    marginRight: 5
                                },
                                children: 'Play Audio'
                            }),
                            (0, d.jsx)(l.default, {
                                size: 'large',
                                type: 'dashed',
                                icon: (0, d.jsx)(g.default, {}),
                                onClick: D,
                                children: 'Remove Audio'
                            })
                        ]
                    })
                ]
            }) : (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(p.default, {
                        style: {
                            fontWeight: q.FontWeights.Black,
                            fontSize: 34
                        },
                        children: 'Add Audio'
                    }),
                    (0, d.jsx)(p.default, {
                        style: {
                            fontSize: 16,
                            marginTop: 2,
                            marginBottom: -2,
                            lineHeight: 1.2
                        },
                        children: 'Record your voice! It will be played each time a student goes to answer this question.'
                    }),
                    (0, d.jsx)(m.default, {}),
                    (0, d.jsxs)('div', {
                        children: [
                            B && 'recording' !== y && (0, d.jsxs)(d.Fragment, {
                                children: [
                                    (0, d.jsx)(p.default, {
                                        style: {
                                            fontWeight: q.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Finished Recording'
                                    }),
                                    (0, d.jsx)('audio', {
                                        src: B,
                                        controls: !0
                                    }),
                                    (0, d.jsxs)('div', {
                                        className: 'flex vc',
                                        style: {
                                            marginTop: 10
                                        },
                                        children: [
                                            (0, d.jsx)(l.default, {
                                                size: 'large',
                                                type: 'primary',
                                                icon: (0, d.jsx)(i.default, {}),
                                                loading: w,
                                                style: {
                                                    marginRight: 10
                                                },
                                                onClick: () => {
                                                    return y = B, void(w || fetch(y).then(_i => _i.blob()).then(w => {
                                                        const E = new File([w], `recording-${ Date.now() }.wav`);
                                                        if (E.size / 1000000 > 3)
                                                            return void(0, s.throwError)({
                                                                title: 'Audio too long',
                                                                content: 'Please record a shorter clip'
                                                            });
                                                        const F = new FormData();
                                                        F.append('file', E), x(!0), (0, r.request)({
                                                            url: '/api/games/audio/add',
                                                            method: 'post',
                                                            data: F,
                                                            success: w => _i.onAudioChanged(w.url),
                                                            error: _i => o.default.error('Error uploading. Please try again.'),
                                                            both: () => x(!1)
                                                        });
                                                    }).catch());
                                                    var E;
                                                },
                                                children: 'Save'
                                            }),
                                            (0, d.jsx)(l.default, {
                                                onClick: z,
                                                size: 'large',
                                                type: 'dashed',
                                                icon: (0, d.jsx)(f.default, {}),
                                                children: 'New Recording'
                                            })
                                        ]
                                    }),
                                    (0, d.jsx)('div', {
                                        style: {
                                            height: 10
                                        }
                                    })
                                ]
                            }),
                            'idle' === y && (0, d.jsx)(l.default, {
                                onClick: z,
                                style: u,
                                icon: (0, d.jsx)(f.default, {}),
                                type: 'dashed',
                                children: 'Start Recording'
                            }),
                            'recording' === y && (0, d.jsxs)(d.Fragment, {
                                children: [
                                    (0, d.jsx)(p.default, {
                                        style: {
                                            fontWeight: q.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Recording...'
                                    }),
                                    (0, d.jsx)(l.default, {
                                        onClick: A,
                                        style: u,
                                        type: 'dashed',
                                        icon: (0, d.jsx)(j.default, {}),
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
}), a.register('RJNyj', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('CfcPZ'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StopOutlined';
    var _i = e.forwardRef(h);
}), a.register('CfcPZ', function(b, c) {
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
                    d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z'
                }
            }]
        },
        name: 'stop',
        theme: 'outlined'
    };
}), a.register('JCNIp', function(_b, c) {
    _b.exports = a('ASp4a');
}), a.register('ASp4a', function(b, c) {
    var d = b.exports && b.exports.__awaiter || function(e, f, g, h) {
            return new(g || (g = Promise))(function(i, j) {
                function k(l) {
                    try {
                        _k(h.next(l));
                    } catch (l) {
                        j(l);
                    }
                }

                function k(l) {
                    try {
                        _k(h.throw(l));
                    } catch (l) {
                        j(l);
                    }
                }

                function _k(l) {
                    var m;
                    l.done ? i(l.value) : (m = l.value, m instanceof g ? m : new g(function(n) {
                        n(m);
                    })).then(_l, _m);
                }
                _i((h = h.apply(e, f || [])).next());
            });
        },
        e = b.exports && b.exports.__generator || function(f, g) {
            var h, i, j, k, _l = {
                label: 0,
                sent: function() {
                    if (1 & j[0])
                        throw j[1];
                    return j[1];
                },
                trys: [],
                ops: []
            };
            return k = {
                next: _m(0),
                throw: _m(1),
                return: _m(2)
            }, 'function' == typeof Symbol && (k[Symbol.iterator] = function() {
                return this;
            }), k;

            function _m(n) {
                return function(o) {
                    return function(p) {
                        if (h)
                            throw new TypeError('Generator is already executing.');
                        for (; _l;)
                            try {
                                if (h = 1, i && (j = 2 & p[0] ? i.return : p[0] ? i.throw || ((j = i.return) && j.call(i), 0) : i.next) && !(j = j.call(i, p[1])).done)
                                    return j;
                                switch (i = 0, j && (p = [
                                        2 & p[0],
                                        j.value
                                    ]), p[0]) {
                                    case 0:
                                    case 1:
                                        j = p;
                                        break;
                                    case 4:
                                        return _l.label++, {
                                            value: p[1],
                                            done: !1
                                        };
                                    case 5:
                                        _l.label++, i = p[1], p = [0];
                                        continue;
                                    case 7:
                                        p = _l.ops.pop(), _l.trys.pop();
                                        continue;
                                    default:
                                        if (!(j = _l.trys, (j = j.length > 0 && j[j.length - 1]) || 6 !== p[0] && 2 !== p[0])) {
                                            _l = 0;
                                            continue;
                                        }
                                        if (3 === p[0] && (!j || p[1] > j[0] && p[1] < j[3])) {
                                            _l.label = p[1];
                                            break;
                                        }
                                        if (6 === p[0] && _l.label < j[1]) {
                                            _l.label = j[1], j = p;
                                            break;
                                        }
                                        if (j && _l.label < j[2]) {
                                            _l.label = j[2], _l.ops.push(p);
                                            break;
                                        }
                                        j[2] && _l.ops.pop(), _l.trys.pop();
                                        continue;
                                }
                                p = g.call(f, _l);
                            } catch (f) {
                                p = [
                                    6,
                                    f
                                ], i = 0;
                            } finally {
                                h = j = 0;
                            }
                        if (5 & p[0])
                            throw p[1];
                        return {
                            value: p[0] ? p[1] : void 0,
                            done: !0
                        };
                    }([
                        n,
                        o
                    ]);
                };
            }
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.ReactMediaRecorder = b.exports.useReactMediaRecorder = b.exports.RecorderErrors = void 0;
    var f, g, h = a('DEkgQ'),
        _i = a('LEQ5w'),
        j = a('cy3u4');

    function k(l) {
        var m = this,
            n = l.audio,
            o = void 0 === n || n,
            p = l.video,
            q = void 0 !== p && p,
            r = l.onStop,
            s = void 0 === r ? function() {
                return null;
            } : r,
            t = l.onStart,
            u = void 0 === t ? function() {
                return null;
            } : t,
            v = l.blobPropertyBag,
            w = l.screen,
            x = void 0 !== w && w,
            y = l.mediaRecorderOptions,
            z = void 0 === y ? void 0 : y,
            A = l.customMediaStream,
            B = void 0 === A ? null : A,
            C = l.stopStreamsOnStop,
            D = void 0 === C || C,
            E = l.askPermissionOnMount,
            F = void 0 !== E && E,
            G = (0, _i.useRef)(null),
            H = (0, _i.useRef)([]),
            I = (0, _i.useRef)(null),
            J = (0, _i.useState)('idle'),
            K = J[0],
            L = J[1],
            M = (0, _i.useState)(!1),
            N = M[0],
            O = M[1],
            P = (0, _i.useState)(void 0),
            Q = P[0],
            R = P[1],
            S = (0, _i.useState)('NONE'),
            T = S[0],
            U = S[1];
        (0, _i.useEffect)(function() {
            d(m, void 0, void 0, function() {
                var V;
                return e(this, function(W) {
                    switch (W.label) {
                        case 0:
                            return V = h.register, [
                                4,
                                (0, j.connect)()
                            ];
                        case 1:
                            return [
                                4,
                                V.apply(void 0, [W.sent()])
                            ];
                        case 2:
                            return W.sent(), [2];
                    }
                });
            });
        }, []);
        var V = (0, _i.useCallback)(function() {
            return d(m, void 0, void 0, function() {
                var W, X, Y, Z;
                return e(this, function($) {
                    switch ($.label) {
                        case 0:
                            L('acquiring_media'), W = {
                                audio: 'boolean' == typeof o ? !!o : o,
                                video: 'boolean' == typeof q ? !!q : q
                            }, $.label = 1;
                        case 1:
                            return $.trys.push([
                                1,
                                9, ,
                                10
                            ]), B ? (I.current = B, [
                                3,
                                8
                            ]) : [
                                3,
                                2
                            ];
                        case 2:
                            return x ? [
                                4,
                                window.navigator.mediaDevices.getDisplayMedia({
                                    video: q || !0
                                })
                            ] : [
                                3,
                                6
                            ];
                        case 3:
                            return (X = $.sent()).getVideoTracks()[0].addEventListener('ended', function() {
                                _$();
                            }), o ? [
                                4,
                                window.navigator.mediaDevices.getUserMedia({
                                    audio: o
                                })
                            ] : [
                                3,
                                5
                            ];
                        case 4:
                            $.sent().getAudioTracks().forEach(function(ab) {
                                return X.addTrack(ab);
                            }), $.label = 5;
                        case 5:
                            return I.current = X, [
                                3,
                                8
                            ];
                        case 6:
                            return [
                                4,
                                window.navigator.mediaDevices.getUserMedia(W)
                            ];
                        case 7:
                            Y = $.sent(), I.current = Y, $.label = 8;
                        case 8:
                            return L('idle'), [
                                3,
                                10
                            ];
                        case 9:
                            return Z = $.sent(), U(Z.name), L('idle'), [
                                3,
                                10
                            ];
                        case 10:
                            return [2];
                    }
                });
            });
        }, [
            o,
            q,
            x
        ]);
        (0, _i.useEffect)(function() {
            if (!window.MediaRecorder)
                throw new Error('Unsupported Browser');
            if (x && !window.navigator.mediaDevices.getDisplayMedia)
                throw new Error('This browser doesn\'t support screen capturing');
            var W = function(X) {
                var Y = navigator.mediaDevices.getSupportedConstraints(),
                    Z = Object.keys(X).filter(function($) {
                        return !Y[$];
                    });
                Z.length > 0 && console.error('The constraints '.concat(Z.join(','), ' doesn\'t support on this browser. Please check your ReactMediaRecorder component.'));
            };
            return 'object' == typeof o && W(o), 'object' == typeof q && W(q), z && z.mimeType && (MediaRecorder.isTypeSupported(z.mimeType) || console.error('The specified MIME type you supplied for MediaRecorder doesn\'t support this browser')), !I.current && F && V(),
                function() {
                    I.current && I.current.getTracks().forEach(function(X) {
                        return X.clone().stop();
                    });
                };
        }, [
            o,
            x,
            q,
            V,
            z,
            F
        ]);
        var W = function(X) {
                var Y = X.data;
                H.current.push(Y);
            },
            X = function() {
                u();
            },
            Y = function() {
                var Z = H.current[0],
                    $ = Object.assign({
                        type: Z.type
                    }, v || (q ? {
                        type: 'video/mp4'
                    } : {
                        type: 'audio/wav'
                    })),
                    ab = new Blob(H.current, $),
                    bb = URL.createObjectURL(ab);
                L('stopped'), R(bb), s(bb, ab);
            },
            Z = function($) {
                O($), I.current && I.current.getAudioTracks().forEach(function(ab) {
                    return ab.enabled = !$;
                });
            },
            _$ = function() {
                G.current && 'inactive' !== G.current.state && (L('stopping'), G.current.stop(), D && I.current && I.current.getTracks().forEach(function(ab) {
                    return ab.stop();
                }), H.current = []);
            };
        return {
            error: f[T],
            muteAudio: function() {
                return Z(!0);
            },
            unMuteAudio: function() {
                return Z(!1);
            },
            startRecording: function() {
                return d(m, void 0, void 0, function() {
                    return e(this, function(ab) {
                        switch (ab.label) {
                            case 0:
                                return U('NONE'), I.current ? [
                                    3,
                                    2
                                ] : [
                                    4,
                                    V()
                                ];
                            case 1:
                                ab.sent(), ab.label = 2;
                            case 2:
                                return I.current ? I.current.getTracks().some(function(bb) {
                                    return 'ended' === bb.readyState;
                                }) ? [
                                    4,
                                    V()
                                ] : [
                                    3,
                                    4
                                ] : [
                                    3,
                                    5
                                ];
                            case 3:
                                ab.sent(), ab.label = 4;
                            case 4:
                                if (!I.current.active)
                                    return [2];
                                G.current = new h.MediaRecorder(I.current, z || void 0), G.current.ondataavailable = W, G.current.onstop = Y, G.current.onstart = X, G.current.onerror = function() {
                                    U('NO_RECORDER'), L('idle');
                                }, G.current.start(), L('recording'), ab.label = 5;
                            case 5:
                                return [2];
                        }
                    });
                });
            },
            pauseRecording: function() {
                G.current && 'recording' === G.current.state && (L('paused'), G.current.pause());
            },
            resumeRecording: function() {
                G.current && 'paused' === G.current.state && (L('recording'), G.current.resume());
            },
            stopRecording: _$,
            mediaBlobUrl: Q,
            status: K,
            isAudioMuted: N,
            previewStream: I.current ? new MediaStream(I.current.getVideoTracks()) : null,
            previewAudioStream: I.current ? new MediaStream(I.current.getAudioTracks()) : null,
            clearBlobUrl: function() {
                Q && URL.revokeObjectURL(Q), R(void 0), L('idle');
            }
        };
    }
    (g = f = b.exports.RecorderErrors || (b.exports.RecorderErrors = {})).AbortError = 'media_aborted', g.NotAllowedError = 'permission_denied', g.NotFoundError = 'no_specified_media_found', g.NotReadableError = 'media_in_use', g.OverconstrainedError = 'invalid_media_constraints', g.TypeError = 'no_constraints', g.NONE = '', g.NO_RECORDER = 'recorder_error', b.exports.useReactMediaRecorder = _j;
    b.exports.ReactMediaRecorder = function(k) {
        return k.render(_j(k));
    };
}), a.register('DEkgQ', function(b, c) {
    _h(b.exports, 'MediaRecorder', function() {
        return _K;
    }), _h(b.exports, 'register', function() {
        return _L;
    });
    var d = a('Y/6Wh'),
        e = a('LyPk3'),
        f = a('6qrHM'),
        g = a('Dj2ae'),
        h = a('KtClR'),
        i = a('EKXQG'),
        _j = a('8CEC8'),
        k = (a('YOJUU'), a('Yg/Vd')),
        l = a('pgqzt'),
        m = a('slWsH'),
        n = a('ztrKf'),
        o = a('pauGp'),
        p = a('D1acj'),
        q = a('z5CTD'),
        r = a('olU6m'),
        s = a('srhKX'),
        t = a('zjUdg'),
        u = a('+CmSA'),
        v = a('a0iYq'),
        w = a('Z4HQT');
    a('Xw6SH'), a('Ubize');
    const x = [],
        y = (0, u.createWindow)(),
        z = (0, l.createNativeBlobEventConstructor)(y),
        A = (0, e.createBlobEventFactory)(z),
        B = (0, s.createWebAudioMediaRecorderFactory)(A, i.createInvalidModificationError, _j.createInvalidStateError, o.createNotSupportedError),
        C = (0, r.createReadVariableSizeInteger)(v.readVariableSizeIntegerLength),
        D = (0, p.createReadElementContent)(C),
        E = (0, q.createReadElementType)(C),
        F = (0, f.createDecodeWebMChunk)(D, E),
        G = (0, t.createWebmPcmMediaRecorderFactory)(A, i.createInvalidModificationError, o.createNotSupportedError, F, C),
        H = (0, h.createEventTargetFactory)(y),
        I = (0, n.createNativeMediaRecorderConstructor)(y),
        J = (0, m.createNativeMediaRecorderFactory)(i.createInvalidModificationError, o.createNotSupportedError),
        _K = (0, k.createMediaRecorderConstructor)(J, o.createNotSupportedError, B, G, x, (0, g.createEventTargetConstructor)(H, w.wrapEventListener), I),
        _L = async _h => {
            x.push(await (0, d.register)(_h));
        };
}), a.register('Y/6Wh', function(b, c) {
    _h(b.exports, 'encode', function() {
        return _i;
    }), _h(b.exports, 'instantiate', function() {
        return _j;
    }), _h(b.exports, 'register', function() {
        return _k;
    });
    var d = a('yWDBP'),
        e = a('MeREJ');
    const f = new Blob([e.worker], {
            type: 'application/javascript; charset=utf-8'
        }),
        g = URL.createObjectURL(f),
        h = (0, d.load)(g),
        _i = (h.connect, h.disconnect, h.encode),
        _j = h.instantiate,
        _k = (h.isSupported, h.register);
    URL.revokeObjectURL(g);
}), a.register('yWDBP', function(b, c) {
    _h(b.exports, 'load', function() {
        return _k;
    });
    var d = a('xK9rh'),
        e = a('ftI9c');
    a('LvPWk'), a('OYiNc');
    const f = new Set(),
        g = (0, d.createBroker)({
            encode: ({
                call: _h
            }) => async (a, b) => {
                const i = await _h('encode', {
                    encoderId: a,
                    timeslice: b
                });
                return f.delete(a), i;
            },
            instantiate: ({
                call: i
            }) => async (a, b) => {
                const j = (0, e.addUniqueNumber)(f);
                return {
                    encoderId: j,
                    port: await i('instantiate', {
                        encoderId: j,
                        mimeType: a,
                        sampleRate: b
                    })
                };
            },
            register: ({
                call: j
            }) => a => j('register', {
                port: a
            }, [a])
        }),
        _k = j => {
            const l = new Worker(j);
            return g(l);
        };
}), a.register('xK9rh', function(b, c) {
    _k(b.exports, 'createBroker', function() {
        return _h;
    });
    var d = a('ftI9c'),
        e = a('Qykrc'),
        f = a('YelhD');
    a('LDxwI'), a('Zt0Su');
    const g = new WeakMap(),
        _h = _k => {
            const i = (0, f.extendBrokerImplementation)(_k);
            return _k => {
                const j = (_k => {
                    if (g.has(_k))
                        return g.get(_k);
                    const k = new Map();
                    return g.set(_k, k), k;
                })(_k);
                _k.addEventListener('message', ({
                    data: _k
                }) => {
                    const {
                        id: l
                    } = _k;
                    if (null !== l && j.has(l)) {
                        const {
                            reject: m,
                            resolve: n
                        } = j.get(l);
                        j.delete(l), void 0 === _k.error ? n(_k.result) : m(new Error(_k.error.message));
                    }
                }), (0, e.isMessagePort)(_k) && _k.start();
                const l = (i, m = null, n = []) => new Promise((f, g) => {
                        const o = (0, d.generateUniqueNumber)(j);
                        j.set(o, {
                            reject: g,
                            resolve: f
                        }), null === m ? _k.postMessage({
                            id: o,
                            method: i
                        }, n) : _k.postMessage({
                            id: o,
                            method: i,
                            params: m
                        }, n);
                    }),
                    o = (i, j, p = []) => {
                        _k.postMessage({
                            id: null,
                            method: i,
                            params: j
                        }, p);
                    };
                let q = {};
                for (const [r, s] of Object.entries(i))
                    q = {
                        ...q,
                        [r]: s({
                            call: p,
                            notify: o
                        })
                    };
                return {
                    ...q
                };
            };
        };
}), a.register('ftI9c', function(b, c) {
    var d, e, f, g, h, i, j, k, l, m, n;
    b.exports, d = b.exports, e = function(o) {
        return function(p) {
            var q = o(p);
            return p.add(q), q;
        };
    }, f = function(o) {
        return function(p, q) {
            return o.set(p, q), q;
        };
    }, g = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, i = 2 * (h = 536870912), j = function(o, p) {
        return function(q) {
            var r = p.get(q),
                s = void 0 === r ? q.size : r < i ? r + 1 : 0;
            if (!q.has(s))
                return o(q, s);
            if (q.size < h) {
                for (; q.has(s);)
                    s = Math.floor(Math.random() * i);
                return o(q, s);
            }
            if (q.size > g)
                throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
            for (; q.has(s);)
                s = Math.floor(Math.random() * g);
            return o(q, s);
        };
    }, k = new WeakMap(), l = f(k), m = j(l, k), n = e(m), d.addUniqueNumber = n, d.generateUniqueNumber = m, Object.defineProperty(d, '__esModule', {
        value: !0
    });
}), a.register('Qykrc', function(b, c) {
    _f(b.exports, 'isMessagePort', function() {
        return _d;
    });
    const _d = _f => 'function' == typeof _f.start;
}), a.register('YelhD', function(b, c) {
    _f(b.exports, 'extendBrokerImplementation', function() {
        return _e;
    });
    var d = a('gqnw4');
    const _e = _f => ({
        ..._f,
        connect: ({
            call: _f
        }) => async () => {
            const {
                port1: g,
                port2: h
            } = new MessageChannel(), i = await _f('connect', {
                port: g
            }, [g]);
            return d.PORT_MAP.set(h, i), h;
        },
        disconnect: ({
            call: g
        }) => async a => {
            const h = d.PORT_MAP.get(a);
            if (void 0 === h)
                throw new Error('The given port is not connected.');
            await g('disconnect', {
                portId: h
            });
        },
        isSupported: ({
            call: h
        }) => () => h('isSupported')
    });
}), a.register('gqnw4', function(b, c) {
    _b(b.exports, 'PORT_MAP', function() {
        return _d;
    });
    const _d = new WeakMap();
}), a.register('LDxwI', function(_b, c) {
    a('PQSr+642'), a('PQSr+641'), a('PQSr+640'), a('PQSr+639');
}), a.register('PQSr+642', function(b, c) {}), a.register('PQSr+641', function(b, c) {}), a.register('PQSr+640', function(b, c) {}), a.register('PQSr+639', function(b, c) {}), a.register('Zt0Su', function(b, c) {
    a('PQSr+638');
}), a.register('PQSr+638', function(b, c) {}), a.register('LvPWk', function(b, c) {
    a('PQSr+637');
}), a.register('PQSr+637', function(b, c) {}), a.register('OYiNc', function(b, c) {
    a('PQSr+636'), a('PQSr+635');
}), a.register('PQSr+636', function(b, c) {}), a.register('PQSr+635', function(b, c) {}), a.register('MeREJ', function(b, c) {
    _e(b.exports, 'worker', function() {
        return _d;
    });
    const _d = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t),s=o(r),i=o(n),c=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},u=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)s.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(s),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(u(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(a.default(e),[c(t[r.name],r.modifiers),n]):[].concat(a.default(e),[function(e){return c(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(a.default(e),a.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(a.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,a=2*o,s=function(e,t){return function(r){var s=t.get(r),i=void 0===s?r.size:s<a?s+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=s(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),a=r(906),s=r(344);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,a=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),s=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),c=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),u=(e,t)=>async r=>{let{data:{id:n,method:o,params:c}}=r;const u=t[o];try{if(void 0===u)throw a({method:o});const t=void 0===c?u():u(c);if(void 0===t)throw s({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=(0,l.generateUniqueNumber)(d);return d.set(a,(()=>{o(),n.close(),d.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw c({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=u(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>{e.onmessage=null,e.close()},h=new WeakMap,g=new WeakMap,v=(e=>{const t=(r=e,{...r,connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return h.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=h.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var r;return e=>{const r=(e=>{if(g.has(e))return g.get(e);const t=new Map;return g.set(e,t),t})(e);e.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,s)=>{const i=(0,l.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)}))},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a={...a,[e]:r({call:n,notify:o})};return{...a}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),w=async(e,t)=>{const r=v(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},x=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(x),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(x,y),b=new Map,E=((e,t)=>r=>{const[n,o,a,s]=t(r);return a?new Promise((t=>{o.onmessage=a=>{let{data:i}=a;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,s,i)}})):n.encode(r,null)})(m,M),A=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(b),_=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error(\'There is already an encoder registered with an id called "\'.concat(n,\'".\'));const s=r(o),{port1:i,port2:c}=new MessageChannel,u=[s,i,!0,a];return t.set(n,u),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),u[2]=!1):s.record(n,a,r)},c})(m,x,A),I=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);p(self,{encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await I(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=_(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await w(b,t)}}})})()})();';
}), a.register('LyPk3', function(b, c) {
    _e(b.exports, 'createBlobEventFactory', function() {
        return _d;
    });
    const _d = _e => (b, c) => {
        if (null === _e) {
            const {
                data: _e,
                ...f
            } = c, g = new Event(b, f);
            return g.data = _e, g;
        }
        return new _h(b, c);
    };
}), a.register('6qrHM', function(b, c) {
    _h(b.exports, 'createDecodeWebMChunk', function() {
        return _d;
    });
    const _d = (_h, b) => (c, _d, _j) => {
        const e = [];
        let f = _d,
            g = 0;
        for (; g < c.byteLength;)
            if (null === f) {
                const _h = b(c, g);
                if (null === _h)
                    break;
                const {
                    length: i,
                    type: _j
                } = _h;
                f = _j, g += i;
            } else {
                const h = _e(c, g, f, _h);
                if (null === h)
                    break;
                const {
                    content: i,
                    length: j
                } = h;
                f = null, g += j, null !== i && e.push(i);
            }
        return {
            contents: e,
            currentElementType: f,
            offset: g
        };
    };
}), a.register('Dj2ae', function(b, c) {
    _e(b.exports, 'createEventTargetConstructor', function() {
        return _d;
    });
    const _d = (_e, b) => class {
        addEventListener(_e, f, g) {
            if (null !== f) {
                let _h = this._listeners.get(f);
                void 0 === _h && (_h = b(this, f), 'function' == typeof f && this._listeners.set(f, _h)), this._nativeEventTarget.addEventListener(_e, _h, g);
            }
        }
        dispatchEvent(e) {
            return this._nativeEventTarget.dispatchEvent(e);
        }
        removeEventListener(e, f, g) {
            const h = null === f ? void 0 : this._listeners.get(f);
            this._nativeEventTarget.removeEventListener(e, void 0 === h ? null : h, g);
        }
        constructor(e = null) {
            this._listeners = new WeakMap(), this._nativeEventTarget = null === e ? _e() : e;
        }
    };
}), a.register('KtClR', function(b, c) {
    _e(b.exports, 'createEventTargetFactory', function() {
        return _d;
    });
    const _d = _e => () => {
        if (null === _e)
            throw new Error('A native EventTarget could not be created.');
        return _e.document.createElement('p');
    };
}), a.register('EKXQG', function(b, c) {
    _e(b.exports, 'createInvalidModificationError', function() {
        return _d;
    });
    const _d = (_e = '') => {
        try {
            return new DOMException(_e, 'InvalidModificationError');
        } catch (b) {
            return b.code = 13, b.message = _e, b.name = 'InvalidModificationError', b;
        }
    };
}), a.register('8CEC8', function(b, c) {
    _i(b.exports, 'createInvalidStateError', function() {
        return _d;
    });
    const _d = () => {
        try {
            return new DOMException('', 'InvalidStateError');
        } catch (_i) {
            return _i.code = 11, _i.name = 'InvalidStateError', _i;
        }
    };
}), a.register('YOJUU', function(b, c) {
    _i(b.exports, 'createIsSupportedPromise', function() {
        return _d;
    });
    const _d = _i => null === _i || void 0 === _i.MediaStream || void 0 !== _i.MediaRecorder && void 0 === _i.MediaRecorder.isTypeSupported ? Promise.resolve(!1) : new Promise(b => {
        if (void 0 === _i.MediaRecorder)
            return b(!0);
        const e = document.createElement('canvas');
        if (e.getContext('2d'), 'function' != typeof e.captureStream)
            return b(!1);
        const f = e.captureStream(),
            g = 'audio/webm';
        try {
            const h = new _i.MediaRecorder(f, {
                mimeType: g
            });
            h.addEventListener('dataavailable', ({
                data: _i
            }) => b(_i.type === g)), h.start(), setTimeout(() => h.stop(), 10);
        } catch (_e) {
            b('NotSupportedError' === _e.name);
        }
    });
}), a.register('Yg/Vd', function(b, c) {
    _e(b.exports, 'createMediaRecorderConstructor', function() {
        return _d;
    });
    const _d = (_e, b, c, _d, _o, _e, _f) => class extends _e {
        get mimeType() {
            return this._internalMediaRecorder.mimeType;
        }
        get ondataavailable() {
            return null === this._ondataavailable ? this._ondataavailable : this._ondataavailable[0];
        }
        set ondataavailable(_e) {
            if (null !== this._ondataavailable && this.removeEventListener('dataavailable', this._ondataavailable[1]), 'function' == typeof _e) {
                const f = _e.bind(this);
                this.addEventListener('dataavailable', f), this._ondataavailable = [
                    _e,
                    f
                ];
            } else
                this._ondataavailable = null;
        }
        get onerror() {
            return null === this._onerror ? this._onerror : this._onerror[0];
        }
        set onerror(e) {
            if (null !== this._onerror && this.removeEventListener('error', this._onerror[1]), 'function' == typeof e) {
                const f = e.bind(this);
                this.addEventListener('error', f), this._onerror = [
                    e,
                    f
                ];
            } else
                this._onerror = null;
        }
        get onpause() {
            return null === this._onpause ? this._onpause : this._onpause[0];
        }
        set onpause(e) {
            if (null !== this._onpause && this.removeEventListener('pause', this._onpause[1]), 'function' == typeof e) {
                const f = e.bind(this);
                this.addEventListener('pause', f), this._onpause = [
                    e,
                    f
                ];
            } else
                this._onpause = null;
        }
        get onresume() {
            return null === this._onresume ? this._onresume : this._onresume[0];
        }
        set onresume(e) {
            if (null !== this._onresume && this.removeEventListener('resume', this._onresume[1]), 'function' == typeof e) {
                const f = e.bind(this);
                this.addEventListener('resume', f), this._onresume = [
                    e,
                    f
                ];
            } else
                this._onresume = null;
        }
        get onstart() {
            return null === this._onstart ? this._onstart : this._onstart[0];
        }
        set onstart(e) {
            if (null !== this._onstart && this.removeEventListener('start', this._onstart[1]), 'function' == typeof e) {
                const f = e.bind(this);
                this.addEventListener('start', f), this._onstart = [
                    e,
                    f
                ];
            } else
                this._onstart = null;
        }
        get onstop() {
            return null === this._onstop ? this._onstop : this._onstop[0];
        }
        set onstop(e) {
            if (null !== this._onstop && this.removeEventListener('stop', this._onstop[1]), 'function' == typeof e) {
                const f = e.bind(this);
                this.addEventListener('stop', f), this._onstop = [
                    e,
                    f
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
        start(e) {
            return this._internalMediaRecorder.start(e);
        }
        stop() {
            return this._internalMediaRecorder.stop();
        }
        static isTypeSupported(e) {
            return null !== _f && void 0 !== _f.isTypeSupported && _f.isTypeSupported(e) || _o.some(b => b.test(e));
        }
        constructor(_e, f = {}) {
            const {
                mimeType: g
            } = f;
            if (null !== _f && (void 0 === g || void 0 !== _f.isTypeSupported && _f.isTypeSupported(g))) {
                const h = _p(_f, _e, f);
                super(h), this._internalMediaRecorder = h;
            } else {
                if (void 0 === g || !_o.some(_p => _p.test(g)))
                    throw null !== _f && _p(_f, _e, f), b();
                super(), null !== _f && void 0 !== _f.isTypeSupported && _f.isTypeSupported('audio/webm;codecs=pcm') ? this._internalMediaRecorder = _d(this, _f, _e, g) : this._internalMediaRecorder = c(this, _e, g);
            }
            this._ondataavailable = null, this._onerror = null, this._onpause = null, this._onresume = null, this._onstart = null, this._onstop = null;
        }
    };
}), a.register('pgqzt', function(b, c) {
    _p(b.exports, 'createNativeBlobEventConstructor', function() {
        return _d;
    });
    const _d = _p => null !== _p && void 0 !== _p.BlobEvent ? _p.BlobEvent : null;
}), a.register('slWsH', function(b, c) {
    _p(b.exports, 'createNativeMediaRecorderFactory', function() {
        return _d;
    });
    const _d = (_p, b) => (c, _d, _o) => {
        const e = [],
            _f = new WeakMap(),
            g = new WeakMap(),
            h = new c(_d, _o),
            i = new WeakMap();
        let j = !0;
        var k, l, m, n;
        return h.addEventListener = (k = h.addEventListener, (b, c, _d) => {
            let _o = c;
            return 'function' == typeof c && ('dataavailable' === b ? (_o = _p => {
                setTimeout(() => {
                    if (j && 'inactive' === h.state)
                        e.push(_p.data);
                    else {
                        if (e.length > 0) {
                            const p = _p.data;
                            Object.defineProperty(_p, 'data', {
                                value: new Blob([
                                    ...e,
                                    p
                                ], {
                                    type: p.type
                                })
                            }), e.length = 0;
                        }
                        c.call(h, _p);
                    }
                });
            }, _f.set(c, _o)) : 'error' === b ? (_o = b => {
                if (void 0 === b.error)
                    c.call(h, new ErrorEvent('error', {
                        error: _p()
                    }));
                else if ('UnknownError' === b.error.name) {
                    const p = b.error.message;
                    c.call(h, new ErrorEvent('error', {
                        error: _p(p)
                    }));
                } else
                    b instanceof ErrorEvent ? c.call(h, b) : c.call(h, new ErrorEvent('error', {
                        error: b.error
                    }));
            }, g.set(c, _o)) : 'stop' === b && (_o = _p => {
                j = !1, setTimeout(() => c.call(h, _p));
            }, i.set(c, _o))), k.call(h, b, _o, _d);
        }), h.dispatchEvent = (l = h.dispatchEvent, _p => {
            let o;
            setTimeout(() => {
                o = j, j = !1;
            });
            const p = l.call(h, _p);
            return setTimeout(() => j = o), p;
        }), h.removeEventListener = (m = h.removeEventListener, (_p, b, c) => {
            let o = b;
            if ('function' == typeof b)
                if ('dataavailable' === _p) {
                    const _p = _f.get(b);
                    void 0 !== _p && (o = _p);
                } else if ('error' === _p) {
                const _p = g.get(b);
                void 0 !== _p && (o = _p);
            } else if ('stop' === _p) {
                const _p = i.get(b);
                void 0 !== _p && (o = _p);
            }
            return m.call(h, _i, o, c);
        }), h.start = (n = h.start, _i => {
            if (void 0 !== _e.mimeType && _e.mimeType.startsWith('audio/') && _d.getVideoTracks().length > 0)
                throw b();
            return j = void 0 !== _i, void 0 === _i ? n.call(h) : n.call(h, _i);
        }), h;
    };
}), a.register('ztrKf', function(b, c) {
    _i(b.exports, 'createNativeMediaRecorderConstructor', function() {
        return _d;
    });
    const _d = _i => null === _i || void 0 === _i.MediaRecorder ? null : _i.MediaRecorder;
}), a.register('pauGp', function(b, c) {
    _i(b.exports, 'createNotSupportedError', function() {
        return _d;
    });
    const _d = () => {
        try {
            return new DOMException('', 'NotSupportedError');
        } catch (_i) {
            return _i.code = 9, _i.name = 'NotSupportedError', _i;
        }
    };
}), a.register('D1acj', function(b, c) {
    _i(b.exports, 'createReadElementContent', function() {
        return _d;
    });
    const _d = _i => (b, c, _d, _e = 2) => {
        const f = _i(b, c);
        if (null === f)
            return f;
        const {
            length: g,
            value: h
        } = f;
        if ('master' === _d)
            return {
                content: null,
                length: g
            };
        if (c + g + h > b.byteLength)
            return null;
        if ('binary' === _d) {
            const _i = (h / Float32Array.BYTES_PER_ELEMENT - 1) / _e,
                j = Array.from({
                    length: _e
                }, () => new Float32Array(_i));
            for (let k = 0; k < _i; k += 1) {
                const l = k * _e + 1;
                for (let m = 0; m < _e; m += 1)
                    j[m][k] = b.getFloat32(c + g + (l + m) * Float32Array.BYTES_PER_ELEMENT, !0);
            }
            return {
                content: j,
                length: g + h
            };
        }
        return {
            content: null,
            length: g + h
        };
    };
}), a.register('z5CTD', function(b, c) {
    _h(b.exports, 'createReadElementType', function() {
        return _d;
    });
    const _d = _h => (b, c) => {
        const e = _h(b, c);
        if (null === e)
            return e;
        const {
            length: f,
            value: g
        } = e;
        return 35 === g ? {
            length: f,
            type: 'binary'
        } : 46 === g || 97 === g || 88713574 === g || 106212971 === g || 139690087 === g || 172351395 === g || 256095861 === g ? {
            length: f,
            type: 'master'
        } : {
            length: f,
            type: 'unknown'
        };
    };
}), a.register('olU6m', function(b, c) {
    _h(b.exports, 'createReadVariableSizeInteger', function() {
        return _d;
    });
    const _d = _h => (b, c) => {
        const e = _h(b, c);
        if (null === e)
            return e;
        const f = c + Math.floor((e - 1) / 8);
        if (f + e > b.byteLength)
            return null;
        let g = b.getUint8(f) & (1 << 8 - e % 8) - 1;
        for (let _h = 1; _h < e; _h += 1)
            g = (g << 8) + b.getUint8(f + _h);
        return {
            length: e,
            value: g
        };
    };
}), a.register('srhKX', function(b, c) {
    _y(b.exports, 'createWebAudioMediaRecorderFactory', function() {
        return _h;
    });
    var d = a('Y/6Wh'),
        e = a('Y6aGB'),
        f = a('0f4dL');
    const g = 'Missing AudioWorklet support. Maybe this is not running in a secure context.',
        _h = (_y, a, b, c) => (_h, _D, _E) => {
            var i;
            const j = null === (i = _D.getAudioTracks()[0]) || void 0 === i ? void 0 : i.getSettings().sampleRate,
                k = new(0, f.MinimalAudioContext)({
                    latencyHint: 'playback',
                    sampleRate: j
                }),
                l = Math.max(1024, Math.ceil(k.baseLatency * k.sampleRate)),
                m = new(0, f.AudioBuffer)({
                    length: l,
                    sampleRate: k.sampleRate
                }),
                n = [],
                o = (0, e.addRecorderAudioWorkletModule)(_y => {
                    if (void 0 === f.addAudioWorkletModule)
                        throw new Error(g);
                    return (0, f.addAudioWorkletModule)(k, _y);
                });
            let p = null,
                q = null,
                r = null,
                s = null,
                t = !0;
            const u = a => {
                    _h.dispatchEvent(_y('dataavailable', {
                        data: new Blob(a, {
                            type: _E
                        })
                    }));
                },
                v = async (_y, a) => {
                    const w = await (0, d.encode)(_y, a);
                    null === r ? n.push(...w) : (u(w), s = v(_y, a));
                }, w = () => (t = !0, k.resume()), x = () => {
                    null !== r && (null !== p && (_D.removeEventListener('addtrack', p), _D.removeEventListener('removetrack', p)), null !== q && clearTimeout(q), r.then(async ({
                        constantSourceNode: _y,
                        encoderId: z,
                        mediaStreamAudioSourceNode: A,
                        recorderAudioWorkletNode: B
                    }) => {
                        null !== s && (s.catch(() => {}), s = null), await B.stop(), A.disconnect(B), _y.stop();
                        const C = await (0, d.encode)(z, null);
                        null === r && await _y(), u([
                            ...n,
                            ...C
                        ]), n.length = 0, _h.dispatchEvent(new Event('stop'));
                    }), r = null);
                }, _y = () => (t = !1, k.suspend());
            return _y(), {
                get mimeType() {
                    return _E;
                },
                get state() {
                    return null === r ? 'inactive' : t ? 'recording' : 'paused';
                },
                pause() {
                    if (null === r)
                        throw b();
                    t && (_y(), _h.dispatchEvent(new Event('pause')));
                },
                resume() {
                    if (null === r)
                        throw b();
                    t || (w(), _h.dispatchEvent(new Event('resume')));
                },
                start(z) {
                    var A;
                    if (null !== r)
                        throw b();
                    if (_D.getVideoTracks().length > 0)
                        throw c();
                    _h.dispatchEvent(new Event('start'));
                    const B = _D.getAudioTracks(),
                        C = 0 === B.length ? 2 : null !== (A = B[0].getSettings().channelCount) && void 0 !== A ? A : 2;
                    r = Promise.all([
                        w(),
                        o.then(() => (async (z, a, b, c, _h) => {
                            const {
                                encoderId: _D,
                                port: _E
                            } = await (0, d.instantiate)(_h, a.sampleRate);
                            if (void 0 === f.AudioWorkletNode)
                                throw new Error(g);
                            return {
                                audioBufferSourceNode: new(0, f.AudioBufferSourceNode)(a, {
                                    buffer: z
                                }),
                                encoderId: _D,
                                mediaStreamAudioSourceNode: new(0, f.MediaStreamAudioSourceNode)(a, {
                                    mediaStream: c
                                }),
                                port: _E,
                                recorderAudioWorkletNode: (0, e.createRecorderAudioWorkletNode)(f.AudioWorkletNode, a, {
                                    channelCount: b
                                })
                            };
                        })(m, k, C, _i, _j))
                    ]).then(async ([, {
                        audioBufferSourceNode: D,
                        encoderId: E,
                        mediaStreamAudioSourceNode: F,
                        port: G,
                        recorderAudioWorkletNode: H
                    }]) => {
                        F.connect(H), await new Promise(z => {
                            D.onended = z, D.connect(H), D.start(k.currentTime + l / k.sampleRate);
                        }), D.disconnect(H);
                        const I = new(0, f.ConstantSourceNode)(k, {
                            offset: 0
                        });
                        return I.onended = () => I.disconnect(), I.connect(k.destination), I.start(), await H.record(G), void 0 !== z && (s = v(E, z)), {
                            constantSourceNode: I,
                            encoderId: E,
                            mediaStreamAudioSourceNode: F,
                            recorderAudioWorkletNode: H
                        };
                    });
                    const I = _i.getTracks();
                    p = () => {
                        x(), _h.dispatchEvent(new ErrorEvent('error', {
                            error: D()
                        }));
                    }, _i.addEventListener('addtrack', p), _i.addEventListener('removetrack', p), q = setInterval(() => {
                        const J = _i.getTracks();
                        J.length === I.length && !J.some((J, D) => J !== I[D]) || null === p || p();
                    }, 1000);
                },
                stop: x
            };
        };
}), a.register('Y6aGB', function(b, c) {
    _f(b.exports, 'addRecorderAudioWorkletModule', function() {
        return _l;
    }), _f(b.exports, 'createRecorderAudioWorkletNode', function() {
        return _m;
    });
    var d = a('ftI9c'),
        e = a('JZ/gp');
    a('N7QKS');
    a('iHMBz');
    var f = a('/cOA+'),
        g = a('IfMGD'),
        h = a('J0kiC'),
        _i = a('n1a8n'),
        _j = a('+2e+H'),
        k = a('g6o3u');
    a('GdGVl'), a('88Tc9');
    const _l = (0, f.createAddRecorderAudioWorkletModule)(Blob, URL, k.worklet),
        _m = (0, _i.createRecorderAudioWorkletNodeFactory)(g.createListener, (0, h.createPostMessageFactory)(d.generateUniqueNumber), e.on, _j.validateState);
}), a.register('JZ/gp', function(b, c) {
    _f(b.exports, 'on', function() {
        return _H;
    });
    var d = a('FCkXl'),
        e = a('0GhQr'),
        f = a('1am9z'),
        g = a('DD8+k'),
        h = a('sGrEr'),
        i = a('hnZPh'),
        j = a('Ax+r3'),
        k = a('HuDnr'),
        l = a('fWq6W'),
        m = a('ulOqd'),
        n = a('XSLeD'),
        o = a('pVp/z'),
        p = a('Sa5MP'),
        q = a('LPpvX'),
        r = a('2j/IH'),
        s = a('8SkCI'),
        t = a('vTLr3'),
        u = a('fcGmF'),
        v = a('NqA9P'),
        w = a('PzUHc'),
        x = a('jgbRV'),
        y = a('RZp0i'),
        z = a('+CmSA0'),
        A = a('MNpgh'),
        B = a('+xdfm');
    a('DguW3'), a('22YQR');
    const C = (0, z.createWindow)(),
        D = (0, A.createWrapSubscribeFunction)(d.patch, e.toObserver),
        E = ((0, f.createAnimationFrame)(B.emitNotSupportedError, C, D), (0, p.createMutations)(B.emitNotSupportedError, C, D)),
        F = (0, j.createMapSubscribableThing)(D),
        G = (0, t.createPrependSubscribableThing)(D),
        _H = ((0, g.createAttribute)(F, E, G), (0, h.createGeolocation)(B.emitNotSupportedError, C, D), (0, i.createIntersections)(B.emitNotSupportedError, C, D), (0, k.createMediaDevices)(B.emitNotSupportedError, C, D), (0, l.createMediaQueryMatch)(B.emitNotSupportedError, C, D), (0, m.createMetrics)(B.emitNotSupportedError, C, D), (0, n.createMidiInputs)(D), (0, o.createMidiOutputs)(D), (0, q.createOn)(D));
    (0, r.createOnline)(B.emitNotSupportedError, C, D), (0, s.createPermissionState)(B.emitNotSupportedError, C, D), (0, u.createReports)(B.emitNotSupportedError, C, D), (0, v.createResizes)(B.emitNotSupportedError, C, D), (0, w.createUnhandledRejection)(B.emitNotSupportedError, C, D), (0, x.createVideoFrame)(B.emitNotSupportedError, D), (0, y.createWakeLock)(B.emitNotSupportedError, C, D);
}), a.register('FCkXl', function(b, c) {
    _f(b.exports, 'patch', function() {
        return _e;
    });
    var d = a('Tzd8x');

    function _e(_f) {
        return Symbol.observable || ('function' == typeof _f && _f.prototype && _f.prototype[Symbol.observable] ? (_f.prototype[d.observable] = _f.prototype[Symbol.observable], delete _f.prototype[Symbol.observable]) : (_f[d.observable] = _f[Symbol.observable], delete _f[Symbol.observable])), _f;
    }
}), a.register('Tzd8x', function(b, c) {
    _g(b.exports, 'observable', function() {
        return _d;
    });
    const _d = Symbol.observable || '@@observable';
}), a.register('0GhQr', function(b, c) {
    _g(b.exports, 'toObserver', function() {
        return _f;
    });
    const d = () => {},
        e = _g => {
            throw _g;
        };

    function _f(_g) {
        var h, i, j;
        return _g ? _g.next && _g.error && _g.complete ? _g : {
            complete: (null !== (h = _g.complete) && void 0 !== h ? h : d).bind(_g),
            error: (null !== (i = _g.error) && void 0 !== i ? i : e).bind(_g),
            next: (null !== (j = _g.next) && void 0 !== j ? j : d).bind(_g)
        } : {
            complete: d,
            error: e,
            next: d
        };
    }
}), a.register('1am9z', function(b, c) {
    _h(b.exports, 'createAnimationFrame', function() {
        return _d;
    });
    const _d = (_h, b, c) => () => c(c => {
        if (null === b || void 0 === b.cancelAnimationFrame || void 0 === b.requestAnimationFrame)
            return _h(c);
        let e = b.requestAnimationFrame(function _h(f) {
            e = b.requestAnimationFrame(_h), c.next(f);
        });
        return () => b.cancelAnimationFrame(e);
    });
}), a.register('DD8+k', function(b, c) {
    _h(b.exports, 'createAttribute', function() {
        return _d;
    });
    const _d = (_h, b, c) => (_d, _e) => {
        const e = () => _d.getAttribute(_e);
        return c(_h(b(_d, {
            attributeFilter: [_e],
            childList: !1,
            subtree: !1
        }), () => e()), e());
    };
}), a.register('sGrEr', function(b, c) {
    _h(b.exports, 'createGeolocation', function() {
        return _d;
    });
    const _d = (_h, b, c) => _d => c(c => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.geolocation || void 0 === b.navigator.geolocation.clearWatch || void 0 === b.navigator.geolocation.watchPosition)
            return _h(c);
        const _e = b.navigator.geolocation.watchPosition(_h => c.next(_h), _h => c.error(_h), _d);
        return () => b.navigator.geolocation.clearWatch(_e);
    });
}), a.register('hnZPh', function(b, c) {
    _h(b.exports, 'createIntersections', function() {
        return _d;
    });
    const _d = (_h, b, c) => (_d, _f) => c(c => {
        if (null === b || void 0 === b.IntersectionObserver)
            return _h(c);
        const e = new b.IntersectionObserver(_h => c.next(_h), _f);
        try {
            e.observe(_d);
        } catch (_h) {
            c.error(_h);
        }
        return () => e.disconnect();
    });
}), a.register('Ax+r3', function(b, c) {
    _h(b.exports, 'createMapSubscribableThing', function() {
        return _d;
    });
    const _d = _h => (b, c) => _h(_h => b({
        ..._h,
        next: b => _h.next(c(b))
    }));
}), a.register('HuDnr', function(b, c) {
    _h(b.exports, 'createMediaDevices', function() {
        return _d;
    });
    const _d = (_h, b, c) => () => c(c => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.mediaDevices || void 0 === b.navigator.mediaDevices.enumerateDevices)
            return _h(c);
        let e = !0;
        const _f = () => {
                b.navigator.mediaDevices.enumerateDevices().then(_h => {
                    e && c.next(_h);
                }, _h => {
                    e && (_g(), c.error(_h));
                });
            },
            _g = () => {
                e = !1, b.navigator.mediaDevices.removeEventListener('devicechange', _f);
            };
        return _f(), b.navigator.mediaDevices.addEventListener('devicechange', _f), _g;
    });
}), a.register('fWq6W', function(b, c) {
    _h(b.exports, 'createMediaQueryMatch', function() {
        return _d;
    });
    const _d = (_h, b, c) => _d => c(c => {
        if (null === b || void 0 === b.matchMedia)
            return _h(c);
        const e = b.matchMedia(_d);
        return c.next(e.matches), e.onchange = () => c.next(e.matches), () => {
            e.onchange = null;
        };
    });
}), a.register('ulOqd', function(b, c) {
    _h(b.exports, 'createMetrics', function() {
        return _d;
    });
    const _d = (_h, b, c) => _d => c(c => {
        if (null === b || void 0 === b.PerformanceObserver)
            return _h(c);
        const e = new b.PerformanceObserver(_h => c.next(_h.getEntries()));
        try {
            e.observe(_d);
        } catch (_h) {
            c.error(_h);
        }
        return () => e.disconnect();
    });
}), a.register('XSLeD', function(b, c) {
    _h(b.exports, 'createMidiInputs', function() {
        return _d;
    });
    const _d = _h => b => _h(_h => {
        let e = Array.from(b.inputs.values());
        const f = () => {
            const g = b.inputs;
            (e.length !== g.size || e.some(({
                id: _h
            }) => !g.has(_h))) && (e = Array.from(g.values()), _h.next(e));
        };
        return _h.next(e), b.addEventListener('statechange', f), () => b.removeEventListener('statechange', f);
    });
}), a.register('pVp/z', function(b, c) {
    _h(b.exports, 'createMidiOutputs', function() {
        return _d;
    });
    const _d = _h => b => _h(_h => {
        let e = Array.from(b.outputs.values());
        const f = () => {
            const g = b.outputs;
            (e.length !== g.size || e.some(({
                id: _h
            }) => !g.has(_h))) && (e = Array.from(g.values()), _h.next(e));
        };
        return _h.next(e), b.addEventListener('statechange', f), () => b.removeEventListener('statechange', f);
    });
}), a.register('Sa5MP', function(b, c) {
    _h(b.exports, 'createMutations', function() {
        return _d;
    });
    const _d = (_h, b, c) => (_d, _e) => c(c => {
        if (null === b || void 0 === b.MutationObserver)
            return _h(c);
        const e = new b.MutationObserver(_h => c.next(_h));
        try {
            e.observe(_d, _e);
        } catch (_h) {
            c.error(_h);
        }
        return () => e.disconnect();
    });
}), a.register('LPpvX', function(b, c) {
    _h(b.exports, 'createOn', function() {
        return _d;
    });
    const _d = _h => (b, c, _d) => _h(_h => {
        const _e = b => _h.next(b);
        return b.addEventListener(c, _e, _d), () => b.removeEventListener(c, _e, _d);
    });
}), a.register('2j/IH', function(b, c) {
    _h(b.exports, 'createOnline', function() {
        return _d;
    });
    const _d = (_h, b, c) => () => c(c => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.onLine)
            return _h(c);
        const e = () => c.next(!1),
            f = () => c.next(!0);
        return b.addEventListener('offline', e), b.addEventListener('online', f), c.next(b.navigator.onLine), () => {
            b.removeEventListener('offline', e), b.removeEventListener('online', f);
        };
    });
}), a.register('8SkCI', function(b, c) {
    _h(b.exports, 'createPermissionState', function() {
        return _d;
    });
    const _d = (_h, b, c) => _d => c(c => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.permissions || void 0 === b.navigator.permissions.query)
            return _h(c);
        let e = !0,
            f = () => {
                e = !1;
            };
        return b.navigator.permissions.query(_d).then(_h => {
            e && c.next(_h.state), e && (_h.onchange = () => c.next(_h.state), f = () => {
                _h.onchange = null;
            });
        }, _h => {
            e && c.error(_h);
        }), () => f();
    });
}), a.register('vTLr3', function(b, c) {
    _h(b.exports, 'createPrependSubscribableThing', function() {
        return _d;
    });
    const _d = _h => (b, c) => _h(_h => (_h.next(c), b(_h)));
}), a.register('fcGmF', function(b, c) {
    _h(b.exports, 'createReports', function() {
        return _d;
    });
    const _d = (_h, b, c) => _d => c(c => {
        if (null === b || void 0 === b.ReportingObserver)
            return _h(c);
        const e = new b.ReportingObserver(_h => c.next(_h), _d);
        return e.observe(), () => e.disconnect();
    });
}), a.register('NqA9P', function(b, c) {
    _h(b.exports, 'createResizes', function() {
        return _d;
    });
    const _d = (_h, b, c) => (_d, _e) => c(c => {
        if (null === b || void 0 === b.ResizeObserver)
            return _h(c);
        const e = new b.ResizeObserver(_h => c.next(_h));
        try {
            e.observe(_d, _e);
        } catch (_h) {
            c.error(_h);
        }
        return () => e.disconnect();
    });
}), a.register('PzUHc', function(b, c) {
    _h(b.exports, 'createUnhandledRejection', function() {
        return _d;
    });
    const _d = (_h, b, c) => _d => c(c => {
        if (null === b || void 0 === b.clearInterval || void 0 === b.setInterval)
            return _h(c);
        const _e = new Map();
        let f = null;
        const g = ({
                promise: _h
            }) => _e.delete(_h),
            i = () => {
                const j = Date.now() - _d;
                _e.forEach(({
                    reason: k,
                    timestamp: l
                }, f) => {
                    l > j || (_e.delete(f), c.next(k));
                }), null !== f && 0 === _e.size && (k.clearInterval(f), f = null);
            },
            j = _h => {
                _h.preventDefault(), _e.set(_h.promise, {
                    reason: _h.reason,
                    timestamp: Date.now()
                }), null === f && (f = b.setInterval(i, _d / 2));
            };
        return b.addEventListener('rejectionhandled', g), b.addEventListener('unhandledrejection', j), () => {
            null !== f && b.clearInterval(f), b.removeEventListener('rejectionhandled', g), b.removeEventListener('unhandledrejection', j);
        };
    });
}), a.register('jgbRV', function(b, c) {
    _b(b.exports, 'createVideoFrame', function() {
        return _d;
    });
    const _d = (_b, b) => c => b(b => {
        if (void 0 === c.cancelVideoFrameCallback || void 0 === c.requestVideoFrameCallback)
            return _b(b);
        let e = c.requestVideoFrameCallback(function _b(f, g) {
            e = c.requestVideoFrameCallback(_b), b.next({
                ...g,
                now: f
            });
        });
        return () => c.cancelVideoFrameCallback(e);
    });
}), a.register('RZp0i', function(b, c) {
    _b(b.exports, 'createWakeLock', function() {
        return _d;
    });
    const _d = (_b, b, c) => _d => c(c => {
        if (null === b || void 0 === b.navigator || void 0 === b.navigator.wakeLock)
            return _b(c);
        const e = _b => _b.release().catch(() => {}),
            f = _b => {
                _b.onrelease = null;
            };
        let g = !0;
        const h = () => {
            g = !1;
        };
        let i = h;
        const j = () => b.navigator.wakeLock.request(_d).then(_b => {
            g && c.next(!0), g ? (_b.onrelease = () => {
                c.next(!1), i = h, f(_b), j();
            }, i = () => {
                f(_b), e(_b);
            }) : e(_b);
        }, _b => {
            g && c.error(_b);
        });
        return j(), () => i();
    });
}), a.register('+CmSA0', function(b, c) {
    _b(b.exports, 'createWindow', function() {
        return _d;
    });
    const _d = () => 'undefined' == typeof window ? null : window;
}), a.register('MNpgh', function(b, c) {
    _b(b.exports, 'createWrapSubscribeFunction', function() {
        return _d;
    });
    const _d = (_b, b) => {
        const e = () => {};
        return _d => {
            const f = (..._b) => {
                const g = _d((_b => 'function' == typeof _b[0])(_b) ? b({
                    next: _b[0]
                }) : b(..._b));
                return void 0 !== g ? g : e;
            };
            return f[Symbol.observable] = () => ({
                subscribe: (..._b) => ({
                    unsubscribe: f(..._b)
                })
            }), _b(f);
        };
    };
}), a.register('+xdfm', function(b, c) {
    _b(b.exports, 'emitNotSupportedError', function() {
        return _d;
    });
    const _d = _b => (_b.error(new Error('The required browser API seems to be not supported.')), () => {});
}), a.register('DguW3', function(_b, c) {
    a('PQSr+634'), a('PQSr+633'), a('PQSr+632'), a('PQSr+631'), a('PQSr+630'), a('PQSr+629'), a('PQSr+628'), a('PQSr+627'), a('PQSr+626'), a('PQSr+625'), a('PQSr+624'), a('PQSr+623'), a('PQSr+622'), a('PQSr+621'), a('PQSr+620'), a('PQSr+619'), a('PQSr+618'), a('PQSr+617'), a('PQSr+616'), a('PQSr+615'), a('PQSr+614');
}), a.register('PQSr+634', function(b, c) {}), a.register('PQSr+633', function(b, c) {}), a.register('PQSr+632', function(b, c) {}), a.register('PQSr+631', function(b, c) {}), a.register('PQSr+630', function(b, c) {}), a.register('PQSr+629', function(b, c) {}), a.register('PQSr+628', function(b, c) {}), a.register('PQSr+627', function(b, c) {}), a.register('PQSr+626', function(b, c) {}), a.register('PQSr+625', function(b, c) {}), a.register('PQSr+624', function(b, c) {}), a.register('PQSr+623', function(b, c) {}), a.register('PQSr+622', function(b, c) {}), a.register('PQSr+621', function(b, c) {}), a.register('PQSr+620', function(b, c) {}), a.register('PQSr+619', function(b, c) {}), a.register('PQSr+618', function(b, c) {}), a.register('PQSr+617', function(b, c) {}), a.register('PQSr+616', function(b, c) {}), a.register('PQSr+615', function(b, c) {}), a.register('PQSr+614', function(b, c) {}), a.register('22YQR', function(b, c) {
    a('PQSr+613'), a('PQSr+612'), a('PQSr+611'), a('PQSr+610'), a('PQSr+609'), a('PQSr+608'), a('PQSr+607'), a('PQSr+606'), a('PQSr+605'), a('PQSr+604'), a('PQSr+603'), a('PQSr+602'), a('PQSr+601'), a('PQSr+600'), a('PQSr+599'), a('PQSr+598'), a('PQSr+597'), a('PQSr+596'), a('PQSr+595'), a('PQSr+594'), a('PQSr+593'), a('PQSr+592'), a('PQSr+591'), a('PQSr+590'), a('PQSr+589'), a('PQSr+588'), a('PQSr+587'), a('PQSr+586'), a('PQSr+585'), a('PQSr+584'), a('PQSr+583'), a('PQSr+582'), a('PQSr+581'), a('PQSr+580'), a('PQSr+579'), a('PQSr+578'), a('PQSr+577'), a('PQSr+576'), a('PQSr+575'), a('PQSr+574'), a('PQSr+573'), a('PQSr+572'), a('PQSr+571'), a('PQSr+570'), a('PQSr+569'), a('PQSr+568'), a('PQSr+567'), a('PQSr+566'), a('PQSr+565'), a('PQSr+564'), a('PQSr+563'), a('PQSr+562'), a('PQSr+561'), a('PQSr+560'), a('PQSr+559');
}), a.register('PQSr+613', function(b, c) {}), a.register('PQSr+612', function(b, c) {}), a.register('PQSr+611', function(b, c) {}), a.register('PQSr+610', function(b, c) {}), a.register('PQSr+609', function(b, c) {}), a.register('PQSr+608', function(b, c) {}), a.register('PQSr+607', function(b, c) {}), a.register('PQSr+606', function(b, c) {}), a.register('PQSr+605', function(b, c) {}), a.register('PQSr+604', function(b, c) {}), a.register('PQSr+603', function(b, c) {}), a.register('PQSr+602', function(b, c) {}), a.register('PQSr+601', function(b, c) {}), a.register('PQSr+600', function(b, c) {}), a.register('PQSr+599', function(b, c) {}), a.register('PQSr+598', function(b, c) {}), a.register('PQSr+597', function(b, c) {}), a.register('PQSr+596', function(b, c) {}), a.register('PQSr+595', function(b, c) {}), a.register('PQSr+594', function(b, c) {}), a.register('PQSr+593', function(b, c) {}), a.register('PQSr+592', function(b, c) {}), a.register('PQSr+591', function(b, c) {}), a.register('PQSr+590', function(b, c) {}), a.register('PQSr+589', function(b, c) {}), a.register('PQSr+588', function(b, c) {}), a.register('PQSr+587', function(b, c) {}), a.register('PQSr+586', function(b, c) {}), a.register('PQSr+585', function(b, c) {}), a.register('PQSr+584', function(b, c) {}), a.register('PQSr+583', function(b, c) {}), a.register('PQSr+582', function(b, c) {}), a.register('PQSr+581', function(b, c) {}), a.register('PQSr+580', function(b, c) {}), a.register('PQSr+579', function(b, c) {}), a.register('PQSr+578', function(b, c) {}), a.register('PQSr+577', function(b, c) {}), a.register('PQSr+576', function(b, c) {}), a.register('PQSr+575', function(b, c) {}), a.register('PQSr+574', function(b, c) {}), a.register('PQSr+573', function(b, c) {}), a.register('PQSr+572', function(b, c) {}), a.register('PQSr+571', function(b, c) {}), a.register('PQSr+570', function(b, c) {}), a.register('PQSr+569', function(b, c) {}), a.register('PQSr+568', function(b, c) {}), a.register('PQSr+567', function(b, c) {}), a.register('PQSr+566', function(b, c) {}), a.register('PQSr+565', function(b, c) {}), a.register('PQSr+564', function(b, c) {}), a.register('PQSr+563', function(b, c) {}), a.register('PQSr+562', function(b, c) {}), a.register('PQSr+561', function(b, c) {}), a.register('PQSr+560', function(b, c) {}), a.register('PQSr+559', function(b, c) {}), a.register('N7QKS', function(b, c) {
    a('Ks/+r'), a('Ss7bT'), a('iHMBz');
    a('jrvj3'), a('i1VgZ');
}), a.register('Ks/+r', function(b, c) {
    _b(b.exports, 'createMessageHandler', function() {
        return _e;
    });
    var d = a('iU8kq');
    const _e = (_b, a) => async ({
        data: {
            id: f,
            method: g,
            params: h
        }
    }) => {
        const i = a[g];
        try {
            if (void 0 === i)
                throw (0, d.renderMethodNotFoundError)({
                    method: g
                });
            const j = void 0 === h ? i() : i(h);
            if (void 0 === j)
                throw (0, d.renderMissingResponseError)({
                    method: g
                });
            const k = j instanceof Promise ? await j : j;
            if (null === f) {
                if (void 0 !== k.result)
                    throw (0, d.renderUnexpectedResultError)({
                        method: g
                    });
            } else {
                if (void 0 === k.result)
                    throw (0, d.renderUnexpectedResultError)({
                        method: g
                    });
                const {
                    result: l,
                    transferables: m = []
                } = k;
                _b.postMessage({
                    id: f,
                    result: l
                }, m);
            }
        } catch (a) {
            const {
                message: j,
                status: k = -32603
            } = a;
            _b.postMessage({
                error: {
                    code: k,
                    message: j
                },
                id: f
            });
        }
    };
}), a.register('iU8kq', function(b, c) {
    _b(b.exports, 'renderMethodNotFoundError', function() {
        return _h;
    }), _b(b.exports, 'renderMissingResponseError', function() {
        return _i;
    }), _b(b.exports, 'renderUnexpectedResultError', function() {
        return _j;
    }), _b(b.exports, 'renderUnknownPortIdError', function() {
        return _k;
    });
    var d = a('8yjSv');
    const e = -32603,
        f = -32602,
        g = -32601,
        _h = (0, d.compile)({
            message: 'The requested method called "${method}" is not supported.',
            status: g
        }),
        _i = (0, d.compile)({
            message: 'The handler of the method called "${method}" returned no required result.',
            status: e
        }),
        _j = (0, d.compile)({
            message: 'The handler of the method called "${method}" returned an unexpected result.',
            status: e
        }),
        _k = (0, d.compile)({
            message: 'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
            status: f
        });
}), a.register('8yjSv', function(_b, c) {
    _b.exports,
        function(d, e, f, g) {
            function h(i) {
                return i && 'object' == typeof i && 'default' in i ? i : {
                    default: i
                };
            }
            var h = _r(e),
                i = _r(f),
                j = _r(g),
                k = function(l, m) {
                    return void 0 === m ? l : m.reduce(function(n, o) {
                        if ('capitalize' === o) {
                            var p = n.charAt(0).toUpperCase(),
                                q = n.slice(1);
                            return ''.concat(p).concat(q);
                        }
                        return 'dashify' === o ? i.default(n) : 'prependIndefiniteArticle' === o ? ''.concat(j.default(n), ' ').concat(n) : n;
                    }, l);
                },
                l = function(m) {
                    var n = m.name + m.modifiers.map(function(o) {
                        return '\\.'.concat(o, '\\(\\)');
                    }).join('');
                    return new RegExp('\\$\\{'.concat(n, '}'), 'g');
                },
                m = function(n, o) {
                    for (var p = /\${([^.}]+)((\.[^(]+\(\))*)}/g, q = [], _r = p.exec(n); null !== _r;) {
                        var s = {
                            modifiers: [],
                            name: _r[1]
                        };
                        if (void 0 !== _r[3])
                            for (var t = /\.[^(]+\(\)/g, u = t.exec(_r[2]); null !== u;)
                                s.modifiers.push(u[0].slice(1, -2)), u = t.exec(_r[2]);
                        q.push(s), _r = p.exec(n);
                    }
                    var s = q.reduce(function(t, u) {
                        return t.map(function(v) {
                            return 'string' == typeof v ? v.split(l(u)).reduce(function(w, x, y) {
                                return 0 === y ? [x] : u.name in o ? [].concat(h.default(w), [
                                    k(o[u.name], u.modifiers),
                                    x
                                ]) : [].concat(h.default(w), [
                                    function(z) {
                                        return k(z[u.name], u.modifiers);
                                    },
                                    x
                                ]);
                            }, []) : [v];
                        }).reduce(function(v, w) {
                            return [].concat(h.default(v), h.default(w));
                        }, []);
                    }, [n]);
                    return function(t) {
                        return s.reduce(function(u, v) {
                            return [].concat(h.default(u), 'string' == typeof v ? [v] : [v(t)]);
                        }, []).join('');
                    };
                },
                n = function(o) {
                    var p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        q = void 0 === o.code ? void 0 : m(o.code, p),
                        r = void 0 === o.message ? void 0 : m(o.message, p);

                    function s() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            u = arguments.length > 1 ? arguments[1] : void 0,
                            v = void 0 === u && (t instanceof Error || void 0 !== t.code && 'Exception' === t.code.slice(-9)) ? {
                                cause: t,
                                missingParameters: {}
                            } : {
                                cause: u,
                                missingParameters: t
                            },
                            w = v.cause,
                            x = v.missingParameters,
                            y = void 0 === r ? new Error() : new Error(r(x));
                        return null !== w && (y.cause = w), void 0 !== q && (y.code = q(x)), void 0 !== o.status && (y.status = o.status), y;
                    }
                    return _e;
                };
            d.compile = n, Object.defineProperty(d, '__esModule', {
                value: !0
            });
        }(_b.exports, a('V8ANJ'), a('Lwn+J'), a('so/uw'));
}), a.register('V8ANJ', function(b, c) {
    var d = a('d/kXZ'),
        _e = a('1DqPi'),
        f = a('+fKMo'),
        g = a('X5Je3');
    b.exports = function(h) {
        return d(h) || _e(h) || f(h) || g();
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('d/kXZ', function(b, c) {
    var d = a('QcYot1');
    b.exports = function(e) {
        if (Array.isArray(e))
            return d(e);
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('QcYot1', function(b, c) {
    b.exports = function(d, e) {
        (null == e || e > d.length) && (e = d.length);
        for (var f = 0, g = new Array(e); f < e; f++)
            g[f] = d[f];
        return g;
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('1DqPi', function(b, c) {
    b.exports = function(d) {
        if ('undefined' != typeof Symbol && null != d[Symbol.iterator] || null != d['@@iterator'])
            return Array.from(d);
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('+fKMo', function(b, c) {
    var d = a('QcYot1');
    b.exports = function(e, f) {
        if (e) {
            if ('string' == typeof e)
                return d(e, f);
            var g = Object.prototype.toString.call(e).slice(8, -1);
            return 'Object' === g && e.constructor && (g = e.constructor.name), 'Map' === g || 'Set' === g ? Array.from(e) : 'Arguments' === g || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? d(e, f) : void 0;
        }
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('X5Je3', function(b, c) {
    b.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('Lwn+J', function(b, c) {
    b.exports = (b, c) => {
        if ('string' != typeof b)
            throw new TypeError('expected a string');
        return b.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, b => /[À-ž]/.test(b) ? b : '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, b => c && c.condense ? '-' : b).toLowerCase();
    };
}), a.register('so/uw', function(b, c) {
    var d = function(e) {
        var f, g, h = /\w+/.exec(e);
        if (!h)
            return 'an';
        var i = (g = h[0]).toLowerCase(),
            j = [
                'honest',
                'hour',
                'hono'
            ];
        for (f in j)
            if (0 == i.indexOf(j[f]))
                return 'an';
        if (1 == i.length)
            return 'aedhilmnorsx'.indexOf(i) >= 0 ? 'an' : 'a';
        if (g.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))
            return 'an';
        var k = [
            /^e[uw]/,
            /^onc?e\b/,
            /^uni([^nmd]|mo)/,
            /^u[bcfhjkqrst][aeiou]/
        ];
        for (f = 0; f < k.length; f++)
            if (i.match(k[f]))
                return 'a';
        return g.match(/^U[NK][AIEO]/) ? 'a' : g == g.toUpperCase() ? 'aedhilmnorsx'.indexOf(i[0]) >= 0 ? 'an' : 'a' : 'aeiou'.indexOf(i[0]) >= 0 || i.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/) ? 'an' : 'a';
    };
    void 0 !== b.exports ? b.exports = d : window.indefiniteArticle = d;
}), a.register('Ss7bT', function(b, c) {
    _j(b.exports, 'extendWorkerImplementation', function() {
        return _h;
    });
    var d = a('ftI9c'),
        e = a('iU8kq'),
        f = a('iHMBz');
    const g = new Map(),
        _h = (_j, a, b) => ({
            ...a,
            connect: ({
                port: i
            }) => {
                i.start();
                const j = _j(i, a),
                    k = (0, d.generateUniqueNumber)(g);
                return g.set(k, () => {
                    j(), i.close(), g.delete(k);
                }), {
                    result: k
                };
            },
            disconnect: ({
                portId: _j
            }) => {
                const k = g.get(_j);
                if (void 0 === k)
                    throw (0, e.renderUnknownPortIdError)({
                        portId: _j.toString()
                    });
                return k(), {
                    result: null
                };
            },
            isSupported: async () => {
                if (await (0, f.isSupportingTransferables)()) {
                    const k = i();
                    return {
                        result: k instanceof Promise ? await k : k
                    };
                }
                return {
                    result: !1
                };
            }
        });
}), a.register('iHMBz', function(b, c) {
    _b(b.exports, 'isSupportingTransferables', function() {
        return _d;
    });
    const _d = () => new Promise(_b => {
        const e = new ArrayBuffer(0),
            {
                port1: f,
                port2: g
            } = new MessageChannel();
        f.onmessage = ({
            data: h
        }) => _b(null !== h), g.postMessage(h, [h]);
    });
}), a.register('jrvj3', function(_b, c) {
    a('PQSr+558'), a('PQSr+557'), a('PQSr+556'), a('PQSr+555'), a('PQSr+554'), a('PQSr+553'), a('PQSr+552'), a('PQSr+551'), a('PQSr+550'), a('PQSr+549'), a('PQSr+548'), a('PQSr+547'), a('PQSr+546'), a('PQSr+545');
}), a.register('PQSr+558', function(b, c) {}), a.register('PQSr+557', function(b, c) {}), a.register('PQSr+556', function(b, c) {}), a.register('PQSr+555', function(b, c) {}), a.register('PQSr+554', function(b, c) {}), a.register('PQSr+553', function(b, c) {}), a.register('PQSr+552', function(b, c) {}), a.register('PQSr+551', function(b, c) {}), a.register('PQSr+550', function(b, c) {}), a.register('PQSr+549', function(b, c) {}), a.register('PQSr+548', function(b, c) {}), a.register('PQSr+547', function(b, c) {}), a.register('PQSr+546', function(b, c) {}), a.register('PQSr+545', function(b, c) {}), a.register('i1VgZ', function(b, c) {
    a('PQSr+544'), a('PQSr+543'), a('PQSr+542'), a('PQSr+541'), a('PQSr+540'), a('PQSr+539'), a('PQSr+538'), a('PQSr+537'), a('PQSr+536'), a('PQSr+535'), a('PQSr+534');
}), a.register('PQSr+544', function(b, c) {}), a.register('PQSr+543', function(b, c) {}), a.register('PQSr+542', function(b, c) {}), a.register('PQSr+541', function(b, c) {}), a.register('PQSr+540', function(b, c) {}), a.register('PQSr+539', function(b, c) {}), a.register('PQSr+538', function(b, c) {}), a.register('PQSr+537', function(b, c) {}), a.register('PQSr+536', function(b, c) {}), a.register('PQSr+535', function(b, c) {}), a.register('PQSr+534', function(b, c) {}), a.register('/cOA+', function(b, c) {
    _b(b.exports, 'createAddRecorderAudioWorkletModule', function() {
        return _d;
    });
    const _d = (_b, b, c) => async _d => {
        const e = new _b([c], {
                type: 'application/javascript; charset=utf-8'
            }),
            f = b.createObjectURL(e);
        try {
            await _d(f);
        } finally {
            b.revokeObjectURL(f);
        }
    };
}), a.register('IfMGD', function(b, c) {
    _b(b.exports, 'createListener', function() {
        return _d;
    });
    const _d = _b => ({
        data: e
    }) => {
        const {
            id: f
        } = e;
        if (null !== f) {
            const g = _b.get(f);
            if (void 0 !== g) {
                const {
                    reject: h,
                    resolve: i
                } = g;
                _b.delete(f), void 0 === e.error ? i(e.result) : h(new Error(e.error.message));
            }
        }
    };
}), a.register('J0kiC', function(b, c) {
    _b(b.exports, 'createPostMessageFactory', function() {
        return _d;
    });
    const _d = _b => (b, c) => (_d, e = []) => new Promise((_e, _e) => {
        const f = _b(b);
        b.set(f, {
            reject: _e,
            resolve: _e
        }), c.postMessage({
            id: f,
            ..._d
        }, e);
    });
}), a.register('n1a8n', function(b, c) {
    _b(b.exports, 'createRecorderAudioWorkletNodeFactory', function() {
        return _d;
    });
    const _d = (_b, b, c, _d) => (_d, _e, _e = {}) => {
        const f = new _d(_e, 'recorder-audio-worklet-processor', {
                ..._e,
                channelCountMode: 'explicit',
                numberOfInputs: 1,
                numberOfOutputs: 0
            }),
            g = new Map(),
            h = b(g, f.port),
            i = c(f.port, 'message')(_b(g));
        f.port.start();
        let j = 'inactive';
        return Object.defineProperties(f, {
            pause: {
                get: () => async () => (_d(['recording'], j), j = 'paused', h({
                    method: 'pause'
                }))
            },
            port: {
                get() {
                    throw new Error('The port of a RecorderAudioWorkletNode can\'t be accessed.');
                }
            },
            record: {
                get: () => async _b => (_d(['inactive'], j), j = 'recording', h({
                    method: 'record',
                    params: {
                        encoderPort: _b
                    }
                }, [_b]))
            },
            resume: {
                get: () => async () => (_d(['paused'], j), j = 'recording', h({
                    method: 'resume'
                }))
            },
            stop: {
                get: () => async () => {
                    _d([
                        'paused',
                        'recording'
                    ], j), j = 'stopped';
                    try {
                        await h({
                            method: 'stop'
                        });
                    } finally {
                        i();
                    }
                }
            }
        }), f;
    };
}), a.register('+2e+H', function(b, c) {
    _b(b.exports, 'validateState', function() {
        return _d;
    });
    const _d = (_b, b) => {
        if (!_b.includes(b))
            throw new Error(`Expected the state to be ${ _b.map(_b => `"${ _b }"`).join(' or ') } but it was "${ b }".`);
    };
}), a.register('g6o3u', function(b, c) {
    _b(b.exports, 'worklet', function() {
        return _d;
    });
    const _d = '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();';
}), a.register('GdGVl', function(_b, c) {
    a('PQSr+533'), a('PQSr+532');
}), a.register('PQSr+533', function(b, c) {}), a.register('PQSr+532', function(b, c) {}), a.register('88Tc9', function(b, c) {
    a('PQSr+531'), a('PQSr+530'), a('PQSr+529'), a('PQSr+528');
}), a.register('PQSr+531', function(b, c) {}), a.register('PQSr+530', function(b, c) {}), a.register('PQSr+529', function(b, c) {}), a.register('PQSr+528', function(b, c) {}), a.register('0f4dL', function(b, c) {
    _b(b.exports, 'AudioBuffer', function() {
        return _de;
    }), _b(b.exports, 'AudioBufferSourceNode', function() {
        return _le;
    }), _b(b.exports, 'ConstantSourceNode', function() {
        return _Ae;
    }), _b(b.exports, 'addAudioWorkletModule', function() {
        return _qf;
    }), _b(b.exports, 'MediaStreamAudioSourceNode', function() {
        return _wf;
    }), _b(b.exports, 'AudioWorkletNode', function() {
        return _Lf;
    }), _b(b.exports, 'MinimalAudioContext', function() {
        return _Mf;
    });
    var _d = a('++I07'),
        _e = a('07406'),
        f = a('Jn3o9'),
        g = a('XGUz4'),
        h = a('qDD6b'),
        i = a('uro/5'),
        j = a('UKkDy'),
        k = a('JIqWn'),
        l = a('IgY4q'),
        m = a('xiNE4'),
        n = a('c37cu'),
        o = a('5jHvi'),
        p = a('5DF7A'),
        q = a('7EJTO'),
        r = a('tPDdl'),
        s = a('fuUGK'),
        t = a('i5jns'),
        u = a('i6nzF'),
        v = a('hqm/F'),
        w = a('/MYIb'),
        x = a('ofgep'),
        y = a('3HnFy'),
        z = a('fsdv9'),
        A = a('w+B3B'),
        B = a('bfyx8'),
        C = a('zuL/I'),
        D = a('QW5z0'),
        E = a('JkcvB'),
        F = a('RUXIO'),
        G = a('r041q'),
        H = a('ZDVL6'),
        I = a('xJo5p'),
        J = a('vOMGF'),
        K = a('dSP4o'),
        L = a('PgyGW'),
        M = a('vyZzw'),
        N = a('huJRc'),
        O = a('iXlSY'),
        P = a('6umxd'),
        Q = a('HI1Hg'),
        R = a('5Ne7x'),
        S = a('31r1u'),
        T = a('TvMY7'),
        U = a('C0Wag'),
        V = a('63Psl'),
        W = a('4vcnO'),
        X = a('kZXdC'),
        Y = a('5fWAe'),
        Z = a('BE/wz'),
        $ = a('b2030'),
        ab = a('ywLfS'),
        bb = a('N4ab9'),
        cb = a('S0FFj'),
        db = a('TGa5B'),
        eb = a('aEpXE'),
        fb = a('vT8eH'),
        gb = a('ApXsS'),
        hb = a('2Lw3z'),
        ib = a('aMuVK'),
        jb = a('xWuzk'),
        kb = a('F5hD/'),
        lb = a('+4AUy'),
        mb = a('KB2k5'),
        nb = a('T84Vq'),
        ob = a('bVsi5'),
        pb = a('JaSAp'),
        qb = a('jKU20'),
        rb = a('09yT2'),
        sb = a('tnKu8'),
        tb = a('4XRVQ'),
        ub = a('jTId6'),
        vb = a('OzWAz'),
        wb = a('N1Jl6'),
        xb = a('P0wTJ'),
        yb = a('p1pT1'),
        zb = a('TkcOT'),
        Ab = a('mMhB+'),
        Bb = a('cQDbK'),
        Cb = a('TPMWk'),
        Db = a('T0iMQ'),
        Eb = a('xnsAd'),
        Fb = a('iiWiI'),
        Gb = a('8aAT7'),
        Hb = (a('/R/00'), a('7GH0P')),
        Ib = a('yo0uw'),
        Jb = a('fiPMk'),
        Kb = a('IIe6p'),
        Lb = a('3sI2B'),
        Mb = a('sn/5E'),
        Nb = a('Tcdt1'),
        Ob = a('OP3lP'),
        Pb = a('3fzbi'),
        Qb = a('/Sou4'),
        Rb = a('2oRJn'),
        Sb = a('mlIS3'),
        Tb = a('WqZmd'),
        Ub = a('/frO9'),
        Vb = a('rdU83'),
        Wb = a('M5LV7'),
        Xb = a('+6LOn'),
        Yb = a('ySbsW'),
        Zb = a('pYtUK'),
        $b = a('0SSmw'),
        ac = a('Mgc5z'),
        bc = a('FUZxv'),
        cc = a('g4LwS'),
        dc = a('ywPGB'),
        ec = a('JBIoq'),
        fc = a('ZpZj8'),
        gc = a('xiHhn'),
        hc = a('LbFS5'),
        ic = a('NP0gJ'),
        jc = a('6j8R7'),
        kc = a('X/hlt'),
        lc = a('8U8re'),
        mc = a('BM/m1'),
        nc = a('ygQdc'),
        oc = a('cyALO'),
        pc = a('3jODL'),
        qc = a('gTkmD'),
        rc = a('m3weF'),
        sc = a('sBQ4A'),
        tc = a('O916d'),
        uc = a('NS8Qv'),
        vc = a('566HC'),
        wc = a('iCWLu'),
        xc = a('/IpnC'),
        yc = a('zmygh'),
        zc = a('nUeBI'),
        Ac = a('MQOik'),
        Bc = a('RPRTo'),
        Cc = a('Opsxc'),
        Dc = a('oacgo'),
        Ec = a('E3bIR'),
        Fc = a('fU78A'),
        Gc = a('jRMaF'),
        Hc = a('NedRb'),
        Ic = a('u3Wi9'),
        Jc = a('7919z'),
        Kc = a('0s/QR'),
        Lc = a('vSlnD'),
        Mc = (a('aP4wO'), a('EC3NH'), a('m3IG+'), a('eG8vk'), a('w62/V'), a('3Q0vm'), a('VCplO')),
        Nc = (a('4ezA1'), a('x/hu3'), a('eaFnX'), a('tmV5Q'), a('tP/IN'), a('4Tx8Z'), a('gQXmi')),
        Oc = (a('2Zux/'), a('f9CWA')),
        Pc = a('tElmV'),
        Qc = a('37wmf'),
        Rc = a('GfYZt'),
        Sc = a('/tBPj'),
        Tc = a('az1aV'),
        Uc = a('1o46S'),
        Vc = a('Z3PzN'),
        Wc = a('4Bnzk'),
        Xc = a('isUAR'),
        Yc = a('ITwKi'),
        Zc = a('gzRu/'),
        $c = a('uXi12'),
        ad = a('nMrsC'),
        bd = a('d8xAS'),
        cd = a('gfJeZ'),
        dd = a('5a+wO'),
        ed = a('QCE/8'),
        fd = a('H4C9z'),
        gd = a('Higr5'),
        hd = a('V7vd9'),
        id = a('uyeTR'),
        jd = a('eUZ1s'),
        kd = a('YsE1u'),
        ld = a('mb3Kk'),
        md = a('fVieL'),
        nd = a('yf7C4'),
        od = a('gMBz4'),
        pd = a('8Ebgs'),
        qd = a('xoQ7J'),
        rd = a('tUK55'),
        sd = a('lwwpl'),
        td = a('Lkj5q'),
        ud = a('C2FK3'),
        vd = a('9f4HP'),
        wd = a('v8dRM'),
        xd = a('zu7H3'),
        yd = (a('FyTYY'), a('Sqwfw')),
        zd = (a('6Hsxo'), a('1Dgzs')),
        Ad = a('ecJTv'),
        Bd = a('Z4HQT0');
    a('V4qiz'), a('MY8WK');
    const Cd = (0, f.createAddActiveInputConnectionToAudioNode)(fd.insertElementInSet),
        Dd = (0, k.createAddPassiveInputConnectionToAudioNode)(fd.insertElementInSet),
        Ed = (0, X.createDeleteActiveInputConnectionToAudioNode)(ld.pickElementFromSet),
        Fd = new WeakMap(),
        Gd = (0, lb.createGetAudioNodeTailTime)(Fd),
        Hd = (0, E.createCacheTestResult)(new Map(), new WeakMap()),
        Id = (0, Rc.createWindow)(),
        Jd = (0, Pb.createNativeAnalyserNodeFactory)(Hd, ub.createIndexSizeError),
        Kd = (0, kb.createGetAudioNodeRenderer)(Zc.getAudioNodeConnections),
        Ld = (0, Dc.createRenderInputsOfAudioNode)(Zc.getAudioNodeConnections, Kd, id.isPartOfACycle),
        Md = (0, o.createAnalyserNodeRendererFactory)(Jd, cd.getNativeAudioNode, Ld),
        Nd = (0, ob.createGetNativeContext)(Wc.CONTEXT_STORE),
        Od = (0, lc.createNativeOfflineAudioContextConstructor)(Id),
        Pd = (0, Fb.createIsNativeOfflineAudioContext)(Od),
        Qd = new WeakMap(),
        Rd = (0, eb.createEventTargetConstructor)(Bd.wrapEventListener),
        Sd = (0, Sb.createNativeAudioContextConstructor)(Id),
        Td = (0, Bb.createIsNativeAudioContext)(Sd),
        Ud = (0, Cb.createIsNativeAudioNode)(Id),
        Vd = (0, Db.createIsNativeAudioParam)(Id),
        Wd = (0, Ub.createNativeAudioWorkletNodeConstructor)(Id),
        Xd = (0, w.createAudioNodeConstructor)((0, g.createAddAudioNodeConnections)(Wc.AUDIO_NODE_CONNECTIONS_STORE), (0, j.createAddConnectionToAudioNode)(Cd, Dd, Xc.connectNativeAudioNodeToNativeAudioNode, Ed, Yc.disconnectNativeAudioNodeFromNativeAudioNode, Zc.getAudioNodeConnections, Gd, ad.getEventListenersOfAudioNode, cd.getNativeAudioNode, fd.insertElementInSet, gd.isActiveAudioNode, id.isPartOfACycle, jd.isPassiveAudioNode), Hd, (0, tb.createIncrementCycleCounterFactory)(Wc.CYCLE_COUNTERS, Yc.disconnectNativeAudioNodeFromNativeAudioNode, Zc.getAudioNodeConnections, cd.getNativeAudioNode, dd.getNativeAudioParam, gd.isActiveAudioNode), ub.createIndexSizeError, vb.createInvalidAccessError, vc.createNotSupportedError, (0, U.createDecrementCycleCounter)(Xc.connectNativeAudioNodeToNativeAudioNode, Wc.CYCLE_COUNTERS, Zc.getAudioNodeConnections, cd.getNativeAudioNode, dd.getNativeAudioParam, Nd, gd.isActiveAudioNode, Pd), (0, Z.createDetectCycles)(Qd, Zc.getAudioNodeConnections, ed.getValueForKey), Rd, Nd, Td, Ud, Vd, Pd, Wd),
        Yd = (0, n.createAnalyserNodeConstructor)(Xd, Md, ub.createIndexSizeError, Jd, Nd, Pd),
        Zd = new WeakSet(),
        $d = (0, Qb.createNativeAudioBufferConstructor)(Id),
        ae = (0, O.createConvertNumberToUnsignedLong)(new Uint32Array(1)),
        be = (0, Sc.createWrapAudioBufferCopyChannelMethods)(ae, ub.createIndexSizeError),
        ce = (0, Tc.createWrapAudioBufferCopyChannelMethodsOutOfBounds)(ae),
        _de = (0, p.createAudioBufferConstructor)(Zd, Hd, vc.createNotSupportedError, $d, Od, (0, Lc.createTestAudioBufferConstructorSupport)($d), be, ce),
        ee = (0, l.createAddSilentConnection)(ec.createNativeGainNode),
        fe = (0, Ec.createRenderInputsOfAudioParam)(Kd, $c.getAudioParamConnections, id.isPartOfACycle),
        ge = (0, J.createConnectAudioParam)(fe),
        he = (0, Rb.createNativeAudioBufferSourceNodeFactory)(ee, Hd, rd.testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, sd.testAudioBufferSourceNodeStartMethodOffsetClampingSupport, td.testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, ud.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, vd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, wd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, zd.wrapAudioBufferSourceNodeStartMethodOffsetClamping, (0, Uc.createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer)(kd.overwriteAccessors), Ad.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        ie = (0, Cc.createRenderAutomation)((0, mb.createGetAudioParamRenderer)($c.getAudioParamConnections), fe),
        je = (0, r.createAudioBufferSourceNodeRendererFactory)(ge, he, cd.getNativeAudioNode, ie, Ld),
        ke = (0, x.createAudioParamFactory)((0, h.createAddAudioParamConnections)(Wc.AUDIO_PARAM_CONNECTIONS_STORE), Qd, Wc.AUDIO_PARAM_STORE, y.createAudioParamRenderer, _d.createCancelAndHoldAutomationEvent, _d.createCancelScheduledValuesAutomationEvent, _d.createExponentialRampToValueAutomationEvent, _d.createLinearRampToValueAutomationEvent, _d.createSetTargetAutomationEvent, _d.createSetValueAutomationEvent, _d.createSetValueCurveAutomationEvent, Sd, pd.setValueAtTimeUntilPossible),
        _le = (0, q.createAudioBufferSourceNodeConstructor)(Xd, je, ke, wb.createInvalidStateError, he, Nd, Pd, Bd.wrapEventListener),
        me = (0, t.createAudioDestinationNodeConstructor)(Xd, u.createAudioDestinationNodeRenderer, ub.createIndexSizeError, wb.createInvalidStateError, (0, Tb.createNativeAudioDestinationNodeFactory)(ec.createNativeGainNode, kd.overwriteAccessors), Nd, Pd, Ld),
        ne = (0, D.createBiquadFilterNodeRendererFactory)(ge, Xb.createNativeBiquadFilterNode, cd.getNativeAudioNode, ie, Ld),
        oe = (0, Hc.createSetAudioNodeTailTime)(Fd),
        pe = (0, C.createBiquadFilterNodeConstructor)(Xd, ke, ne, vb.createInvalidAccessError, Xb.createNativeBiquadFilterNode, Nd, Pd, oe),
        qe = (0, Ob.createMonitorConnections)(fd.insertElementInSet, Ud),
        re = (0, Vc.createWrapChannelMergerNode)(wb.createInvalidStateError, qe),
        se = (0, Yb.createNativeChannelMergerNodeFactory)(Sd, re),
        te = (0, G.createChannelMergerNodeRendererFactory)(se, cd.getNativeAudioNode, Ld),
        ue = (0, F.createChannelMergerNodeConstructor)(Xd, te, se, Nd, Pd),
        ve = (0, I.createChannelSplitterNodeRendererFactory)(Zb.createNativeChannelSplitterNode, cd.getNativeAudioNode, Ld),
        we = (0, H.createChannelSplitterNodeConstructor)(Xd, ve, Zb.createNativeChannelSplitterNode, Nd, Pd, nd.sanitizeChannelSplitterOptions),
        xe = (0, ac.createNativeConstantSourceNodeFakerFactory)(ee, he, ec.createNativeGainNode, qe),
        ye = (0, $b.createNativeConstantSourceNodeFactory)(ee, Hd, xe, ud.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, wd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport),
        ze = (0, N.createConstantSourceNodeRendererFactory)(ge, ye, cd.getNativeAudioNode, ie, Ld),
        _Ae = (0, M.createConstantSourceNodeConstructor)(Xd, ke, ze, ye, Nd, Pd, Bd.wrapEventListener),
        Be = (0, bc.createNativeConvolverNodeFactory)(vc.createNotSupportedError, kd.overwriteAccessors),
        Ce = (0, Q.createConvolverNodeRendererFactory)(Be, cd.getNativeAudioNode, Ld),
        De = (0, P.createConvolverNodeConstructor)(Xd, Ce, Be, Nd, Pd, oe),
        Ee = (0, W.createDelayNodeRendererFactory)(ge, cc.createNativeDelayNode, cd.getNativeAudioNode, ie, Ld),
        Fe = (0, V.createDelayNodeConstructor)(Xd, ke, Ee, cc.createNativeDelayNode, Nd, Pd, oe),
        Ge = (0, dc.createNativeDynamicsCompressorNodeFactory)(vc.createNotSupportedError),
        He = (0, bb.createDynamicsCompressorNodeRendererFactory)(ge, Ge, cd.getNativeAudioNode, ie, Ld),
        Ie = (0, ab.createDynamicsCompressorNodeConstructor)(Xd, ke, He, Ge, vc.createNotSupportedError, Nd, Pd, oe),
        Je = (0, ib.createGainNodeRendererFactory)(ge, ec.createNativeGainNode, cd.getNativeAudioNode, ie, Ld),
        Ke = (0, hb.createGainNodeConstructor)(Xd, ke, Je, ec.createNativeGainNode, Nd, Pd),
        Le = (0, gc.createNativeIIRFilterNodeFakerFactory)(vb.createInvalidAccessError, wb.createInvalidStateError, qc.createNativeScriptProcessorNode, vc.createNotSupportedError),
        Me = (0, Fc.createRenderNativeOfflineAudioContext)(Hd, ec.createNativeGainNode, qc.createNativeScriptProcessorNode, (0, Nc.createTestOfflineAudioContextCurrentTimeSupport)(ec.createNativeGainNode, Od)),
        Ne = (0, sb.createIIRFilterNodeRendererFactory)(he, cd.getNativeAudioNode, Od, Ld, Me),
        Oe = (0, fc.createNativeIIRFilterNodeFactory)(Le),
        Pe = (0, rb.createIIRFilterNodeConstructor)(Xd, Oe, Ne, Nd, Pd, oe),
        Qe = (0, v.createAudioListenerFactory)(ke, se, ye, qc.createNativeScriptProcessorNode, vc.createNotSupportedError, bd.getFirstSample, Pd, kd.overwriteAccessors),
        Re = new WeakMap(),
        Se = (0, Mb.createMinimalBaseAudioContextConstructor)(me, Qe, Rd, Pd, Re, Bd.wrapEventListener),
        Te = (0, mc.createNativeOscillatorNodeFactory)(ee, Hd, ud.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, vd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, wd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, Ad.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        Ue = (0, yc.createOscillatorNodeRendererFactory)(ge, Te, cd.getNativeAudioNode, ie, Ld),
        Ve = (0, xc.createOscillatorNodeConstructor)(Xd, ke, Te, Ue, Nd, Pd, Bd.wrapEventListener),
        We = (0, L.createConnectedNativeAudioBufferSourceNodeFactory)(he),
        Xe = (0, uc.createNativeWaveShaperNodeFakerFactory)(We, wb.createInvalidStateError, ec.createNativeGainNode, hd.isDCCurve, qe),
        Ye = (0, tc.createNativeWaveShaperNodeFactory)(We, wb.createInvalidStateError, Xe, hd.isDCCurve, qe, Sd, kd.overwriteAccessors),
        Ze = (0, oc.createNativePannerNodeFakerFactory)(Xc.connectNativeAudioNodeToNativeAudioNode, wb.createInvalidStateError, se, ec.createNativeGainNode, qc.createNativeScriptProcessorNode, Ye, vc.createNotSupportedError, Yc.disconnectNativeAudioNodeFromNativeAudioNode, bd.getFirstSample, qe),
        $e = (0, nc.createNativePannerNodeFactory)(Ze),
        af = (0, Ac.createPannerNodeRendererFactory)(ge, se, ye, ec.createNativeGainNode, $e, cd.getNativeAudioNode, Od, ie, Ld, Me),
        bf = (0, zc.createPannerNodeConstructor)(Xd, ke, $e, af, Nd, Pd, oe),
        cf = (0, pc.createNativePeriodicWaveFactory)(ub.createIndexSizeError),
        df = (0, Bc.createPeriodicWaveConstructor)(cf, Nd, new WeakSet(), od.sanitizePeriodicWaveOptions),
        ef = (0, sc.createNativeStereoPannerNodeFakerFactory)(se, Zb.createNativeChannelSplitterNode, ec.createNativeGainNode, Ye, vc.createNotSupportedError, qe),
        ff = (0, rc.createNativeStereoPannerNodeFactory)(ef, vc.createNotSupportedError),
        gf = (0, Kc.createStereoPannerNodeRendererFactory)(ge, ff, cd.getNativeAudioNode, ie, Ld),
        hf = (0, Jc.createStereoPannerNodeConstructor)(Xd, ke, ff, gf, Nd, Pd),
        jf = (0, Qc.createWaveShaperNodeRendererFactory)(Ye, cd.getNativeAudioNode, Ld),
        kf = (0, Pc.createWaveShaperNodeConstructor)(Xd, wb.createInvalidStateError, Ye, jf, Nd, Pd, oe),
        lf = (0, Gb.createIsSecureContext)(Id),
        mf = (0, fb.createExposeCurrentFrameAndCurrentTime)(Id),
        nf = new WeakMap(),
        pf = (0, pb.createGetOrCreateBackupOfflineAudioContext)(nf, Od),
        _qf = lf ? (0, i.createAddAudioWorkletModule)(Hd, vc.createNotSupportedError, (0, db.createEvaluateSource)(Id), mf, (0, gb.createFetchSource)(_e.createAbortError), Nd, pf, Pd, Wd, new WeakMap(), new WeakMap(), (0, Mc.createTestAudioWorkletProcessorPostMessageSupport)(Wd, Od), Id) : void 0,
        rf = (0, Eb.createIsNativeContext)(Td, Pd),
        sf = (0, T.createDecodeAudioData)(Zd, Hd, S.createDataCloneError, cb.createEncodingError, new WeakSet(), Nd, rf, qd.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, yd.testPromiseSupport, be, ce),
        tf = (0, B.createBaseAudioContextConstructor)(_qf, Yd, _de, _le, pe, ue, we, _Ae, De, sf, Fe, Ie, Ke, Pe, Se, Ve, bf, df, hf, kf),
        uf = (0, Hb.createMediaElementAudioSourceNodeConstructor)(Xd, hc.createNativeMediaElementAudioSourceNode, Nd, Pd),
        vf = (0, Ib.createMediaStreamAudioDestinationNodeConstructor)(Xd, ic.createNativeMediaStreamAudioDestinationNode, Nd, Pd),
        _wf = (0, Jb.createMediaStreamAudioSourceNodeConstructor)(Xd, jc.createNativeMediaStreamAudioSourceNode, Nd, Pd),
        xf = (0, kc.createNativeMediaStreamTrackAudioSourceNodeFactory)(wb.createInvalidStateError, Pd),
        yf = (0, Kb.createMediaStreamTrackAudioSourceNodeConstructor)(Xd, xf, Nd),
        zf = ((0, s.createAudioContextConstructor)(tf, wb.createInvalidStateError, vc.createNotSupportedError, Oc.createUnknownError, uf, vf, _wf, yf, Sd), (0, qb.createGetUnrenderedAudioWorkletNodes)(Re)),
        Af = (0, m.createAddUnrenderedAudioWorkletNode)(zf),
        Bf = (0, K.createConnectMultipleOutputs)(ub.createIndexSizeError),
        Cf = (0, Y.createDeleteUnrenderedAudioWorkletNode)(zf),
        Df = (0, $.createDisconnectMultipleOutputs)(ub.createIndexSizeError),
        Ef = new WeakMap(),
        Ff = (0, jb.createGetActiveAudioWorkletNodeInputs)(Ef, ed.getValueForKey),
        Gf = (0, Wb.createNativeAudioWorkletNodeFakerFactory)(Bf, ub.createIndexSizeError, wb.createInvalidStateError, se, Zb.createNativeChannelSplitterNode, ye, ec.createNativeGainNode, qc.createNativeScriptProcessorNode, vc.createNotSupportedError, Df, mf, Ff, qe),
        Hf = (0, Vb.createNativeAudioWorkletNodeFactory)(wb.createInvalidStateError, Gf, ec.createNativeGainNode, vc.createNotSupportedError, qe),
        If = (0, A.createAudioWorkletNodeRendererFactory)(ge, Bf, he, se, Zb.createNativeChannelSplitterNode, ye, ec.createNativeGainNode, Cf, Df, mf, cd.getNativeAudioNode, Wd, Od, ie, Ld, Me),
        Jf = (0, nb.createGetBackupOfflineAudioContext)(nf),
        Kf = (0, Gc.createSetActiveAudioWorkletNodeInputs)(Ef),
        _Lf = lf ? (0, z.createAudioWorkletNodeConstructor)(Af, Xd, ke, If, Hf, Zc.getAudioNodeConnections, Jf, Nd, Pd, Wd, md.sanitizeAudioWorkletNodeOptions, Kf, xd.testAudioWorkletNodeOptionsClonability, Bd.wrapEventListener) : void 0,
        _Mf = (0, Lb.createMinimalAudioContextConstructor)(wb.createInvalidStateError, vc.createNotSupportedError, Oc.createUnknownError, Se, Sd),
        Nf = (0, R.createCreateNativeOfflineAudioContext)(vc.createNotSupportedError, Od),
        Of = (0, Ic.createStartRendering)(Zd, Hd, Kd, zf, Me, qd.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, be, ce);
    (0, Nb.createMinimalOfflineAudioContextConstructor)(Hd, wb.createInvalidStateError, Nf, Se, Of), (0, wc.createOfflineAudioContextConstructor)(tf, Hd, wb.createInvalidStateError, Nf, Of), (0, xb.createIsAnyAudioContext)(Wc.CONTEXT_STORE, Td), (0, yb.createIsAnyAudioNode)(Wc.AUDIO_NODE_STORE, Ud), (0, zb.createIsAnyAudioParam)(Wc.AUDIO_PARAM_STORE, Vd), (0, Ab.createIsAnyOfflineAudioContext)(Wc.CONTEXT_STORE, Pd);
}), a.register('++I07', function(_b, c) {
    _b.exports,
        function(d, e, f, g) {
            function h(i) {
                return i && 'object' == typeof i && 'default' in i ? i : {
                    default: i
                };
            }
            var h = _t(e),
                i = _t(f),
                j = _t(g),
                k = function(l, m, n) {
                    return {
                        endTime: m,
                        insertTime: n,
                        type: 'exponentialRampToValue',
                        value: l
                    };
                },
                l = function(m, n, o) {
                    return {
                        endTime: n,
                        insertTime: o,
                        type: 'linearRampToValue',
                        value: m
                    };
                },
                m = function(n, o) {
                    return {
                        startTime: o,
                        type: 'setValue',
                        value: n
                    };
                },
                n = function(o, p, q) {
                    return {
                        duration: q,
                        startTime: p,
                        type: 'setValueCurve',
                        values: o
                    };
                },
                o = function(p, q, r) {
                    var s = r.startTime,
                        _t = r.target,
                        u = r.timeConstant;
                    return _t + (q - _t) * Math.exp((s - p) / u);
                },
                p = function(q) {
                    return 'exponentialRampToValue' === q.type;
                },
                q = function(r) {
                    return 'linearRampToValue' === r.type;
                },
                r = function(s) {
                    return p(s) || q(s);
                },
                s = function(t) {
                    return 'setValue' === t.type;
                },
                t = function(u) {
                    return 'setValueCurve' === u.type;
                },
                u = function d(v, w, x, y) {
                    var z = v[w];
                    return void 0 === z ? y : r(z) || s(z) ? z.value : t(z) ? z.values[z.values.length - 1] : o(x, d(v, w - 1, z.startTime, y), z);
                },
                v = function(w, x, y, z, A) {
                    return void 0 === y ? [
                        z.insertTime,
                        A
                    ] : r(y) ? [
                        y.endTime,
                        y.value
                    ] : s(y) ? [
                        y.startTime,
                        y.value
                    ] : t(y) ? [
                        y.startTime + y.duration,
                        y.values[y.values.length - 1]
                    ] : [
                        y.startTime,
                        u(w, x - 1, y.startTime, A)
                    ];
                },
                w = function(x) {
                    return 'cancelAndHold' === x.type;
                },
                x = function(y) {
                    return 'cancelScheduledValues' === y.type;
                },
                y = function(z) {
                    return w(z) || x(z) ? z.cancelTime : p(z) || q(z) ? z.endTime : z.startTime;
                },
                z = function(A, B, C, D) {
                    var E = D.endTime,
                        F = D.value;
                    return C === F ? F : 0 < C && 0 < F || C < 0 && F < 0 ? C * Math.pow(F / C, (A - B) / (E - B)) : 0;
                },
                A = function(B, C, D, E) {
                    return D + (B - C) / (E.endTime - C) * (E.value - D);
                },
                B = function(C, D) {
                    var E = Math.floor(D),
                        F = Math.ceil(D);
                    return E === F ? C[E] : (1 - (D - E)) * C[E] + (1 - (F - D)) * C[F];
                },
                C = function(D, E) {
                    var F = E.duration,
                        G = E.startTime,
                        H = E.values,
                        I = (D - G) / F * (H.length - 1);
                    return B(H, I);
                },
                D = function(E) {
                    return 'setTarget' === E.type;
                },
                E = function(F) {
                    function G(H) {
                        i.default(this, G), this._automationEvents = [], this._currenTime = 0, this._defaultValue = H;
                    }
                    return j.default(e, [{
                            key: F,
                            value: function() {
                                return this._automationEvents[Symbol.iterator]();
                            }
                        },
                        {
                            key: 'add',
                            value: function(G) {
                                var H = y(G);
                                if (w(G) || x(G)) {
                                    var I = this._automationEvents.findIndex(function(J) {
                                            return x(G) && t(J) ? J.startTime + J.duration >= H : y(J) >= H;
                                        }),
                                        J = this._automationEvents[I];
                                    if (-1 !== I && (this._automationEvents = this._automationEvents.slice(0, I)), w(G)) {
                                        var K = this._automationEvents[this._automationEvents.length - 1];
                                        if (void 0 !== J && r(J)) {
                                            if (D(K))
                                                throw new Error('The internal list is malformed.');
                                            var L = t(K) ? K.startTime + K.duration : y(K),
                                                M = t(K) ? K.values[K.values.length - 1] : K.value,
                                                N = p(J) ? z(H, L, M, J) : A(H, L, M, J),
                                                O = p(J) ? k(N, H, this._currenTime) : l(N, H, this._currenTime);
                                            this._automationEvents.push(O);
                                        }
                                        void 0 !== K && D(K) && this._automationEvents.push(m(this.getValue(H), H)), void 0 !== K && t(K) && K.startTime + K.duration > H && (this._automationEvents[this._automationEvents.length - 1] = n(new Float32Array([
                                            6,
                                            7
                                        ]), K.startTime, H - K.startTime));
                                    }
                                } else {
                                    var I = this._automationEvents.findIndex(function(J) {
                                            return y(J) > H;
                                        }),
                                        J = -1 === I ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[I - 1];
                                    if (void 0 !== J && t(J) && y(J) + J.duration > H)
                                        return !1;
                                    var K = p(G) ? k(G.value, G.endTime, this._currenTime) : q(G) ? l(G.value, H, this._currenTime) : G;
                                    if (-1 === I)
                                        this._automationEvents.push(K);
                                    else {
                                        if (t(G) && H + G.duration > y(this._automationEvents[I]))
                                            return !1;
                                        this._automationEvents.splice(I, 0, K);
                                    }
                                }
                                return !0;
                            }
                        },
                        {
                            key: 'flush',
                            value: function(G) {
                                var H = this._automationEvents.findIndex(function(I) {
                                    return y(I) > G;
                                });
                                if (H > 1) {
                                    var I = this._automationEvents.slice(H - 1),
                                        J = I[0];
                                    D(J) && I.unshift(m(u(this._automationEvents, H - 2, J.startTime, this._defaultValue), J.startTime)), this._automationEvents = I;
                                }
                            }
                        },
                        {
                            key: 'getValue',
                            value: function(G) {
                                if (0 === this._automationEvents.length)
                                    return this._defaultValue;
                                var H = this._automationEvents.findIndex(function(I) {
                                        return y(I) > G;
                                    }),
                                    I = this._automationEvents[H],
                                    J = (-1 === H ? this._automationEvents.length : H) - 1,
                                    K = this._automationEvents[J];
                                if (void 0 !== K && D(K) && (void 0 === I || !r(I) || I.insertTime > G))
                                    return o(G, u(this._automationEvents, J - 1, K.startTime, this._defaultValue), K);
                                if (void 0 !== K && s(K) && (void 0 === I || !r(I)))
                                    return K.value;
                                if (void 0 !== K && t(K) && (void 0 === I || !r(I) || K.startTime + K.duration > G))
                                    return G < K.startTime + K.duration ? C(G, K) : K.values[K.values.length - 1];
                                if (void 0 !== K && r(K) && (void 0 === I || !r(I)))
                                    return K.value;
                                if (void 0 !== I && p(I)) {
                                    var L = v(this._automationEvents, J, K, I, this._defaultValue),
                                        M = h.default(L, 2),
                                        N = M[0],
                                        O = M[1];
                                    return z(G, N, O, I);
                                }
                                if (void 0 !== I && q(I)) {
                                    var L = v(this._automationEvents, J, K, I, this._defaultValue),
                                        M = h.default(L, 2),
                                        N = M[0],
                                        O = M[1];
                                    return A(G, N, O, I);
                                }
                                return this._defaultValue;
                            }
                        }
                    ]), e;
                }(Symbol.iterator),
                F = function(G) {
                    return {
                        cancelTime: G,
                        type: 'cancelAndHold'
                    };
                },
                G = function(H) {
                    return {
                        cancelTime: H,
                        type: 'cancelScheduledValues'
                    };
                },
                H = function(I, J) {
                    return {
                        endTime: J,
                        type: 'exponentialRampToValue',
                        value: I
                    };
                },
                I = function(J, K) {
                    return {
                        endTime: K,
                        type: 'linearRampToValue',
                        value: J
                    };
                },
                J = function(K, L, M) {
                    return {
                        startTime: L,
                        target: K,
                        timeConstant: M,
                        type: 'setTarget'
                    };
                };
            d.AutomationEventList = E, d.createCancelAndHoldAutomationEvent = F, d.createCancelScheduledValuesAutomationEvent = G, d.createExponentialRampToValueAutomationEvent = H, d.createLinearRampToValueAutomationEvent = I, d.createSetTargetAutomationEvent = J, d.createSetValueAutomationEvent = m, d.createSetValueCurveAutomationEvent = n, Object.defineProperty(d, '__esModule', {
                value: !0
            });
        }(_b.exports, a('A5DYg'), a('dS/Dz0'), a('rRYf2'));
}), a.register('A5DYg', function(b, c) {
    var d = a('+W5dP0'),
        e = a('G5BM5'),
        f = a('AbCH+'),
        g = a('iUBJw0');
    b.exports = function(h, i) {
        return d(h) || e(h, i) || f(h, i) || g();
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('+W5dP0', function(b, c) {
    b.exports = function(d) {
        if (Array.isArray(d))
            return d;
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('G5BM5', function(b, c) {
    b.exports = function(d, e) {
        var f = null == d ? null : 'undefined' != typeof Symbol && d[Symbol.iterator] || d['@@iterator'];
        if (null != f) {
            var g, h, i, j, k = [],
                l = !0,
                m = !1;
            try {
                if (i = (f = f.call(d)).next, 0 === e) {
                    if (Object(f) !== f)
                        return;
                    l = !1;
                } else
                    for (; !(l = (g = i.call(f)).done) && (k.push(g.value), k.length !== e); l = !0);
            } catch (d) {
                m = !0, h = d;
            } finally {
                try {
                    if (!l && null != f.return && (j = f.return(), Object(j) !== j))
                        return;
                } finally {
                    if (m)
                        throw h;
                }
            }
            return k;
        }
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('AbCH+', function(b, c) {
    var d = a('QcYot0');
    b.exports = function(e, f) {
        if (e) {
            if ('string' == typeof e)
                return d(e, f);
            var g = Object.prototype.toString.call(e).slice(8, -1);
            return 'Object' === g && e.constructor && (g = e.constructor.name), 'Map' === g || 'Set' === g ? Array.from(e) : 'Arguments' === g || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? d(e, f) : void 0;
        }
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('QcYot0', function(b, c) {
    b.exports = function(d, e) {
        (null == e || e > d.length) && (e = d.length);
        for (var f = 0, g = new Array(e); f < e; f++)
            g[f] = d[f];
        return g;
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('iUBJw0', function(b, c) {
    b.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('dS/Dz0', function(b, c) {
    b.exports = function(d, e) {
        if (!(d instanceof e))
            throw new TypeError('Cannot call a class as a function');
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('rRYf2', function(b, c) {
    var d = a('iXeOR');

    function e(f, g) {
        for (var h = 0; h < g.length; h++) {
            var i = g[h];
            i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(f, d(i.key), i);
        }
    }
    b.exports = function(e, f, g) {
        return f && _e(e.prototype, f), g && _e(e, g), Object.defineProperty(e, 'prototype', {
            writable: !1
        }), e;
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('iXeOR', function(b, c) {
    var d = a('+6L5h0').default,
        _e = a('Q9OxE');
    b.exports = function(f) {
        var g = _e(f, 'string');
        return 'symbol' === d(g) ? g : String(g);
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('+6L5h0', function(b, c) {
    function d(e) {
        return b.exports = d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(f) {
            return typeof f;
        } : function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.__esModule = !0, b.exports.default = b.exports, d(e);
    }
    b.exports = _c, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('Q9OxE', function(b, _c) {
    var d = a('+6L5h0').default;
    b.exports = function(e, f) {
        if ('object' !== d(e) || null === e)
            return e;
        var g = e[Symbol.toPrimitive];
        if (void 0 !== g) {
            var h = g.call(e, f || 'default');
            if ('object' !== d(h))
                return h;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === f ? String : Number)(e);
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('07406', function(b, c) {
    _f(b.exports, 'createAbortError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'AbortError');
}), a.register('Jn3o9', function(b, c) {
    _f(b.exports, 'createAddActiveInputConnectionToAudioNode', function() {
        return _d;
    });
    const _d = _f => (b, c, [e, f, g], _f) => {
        _f(b[f], [
            c,
            e,
            g
        ], _f => _f[0] === c && _f[1] === e, _f);
    };
}), a.register('XGUz4', function(b, c) {
    _f(b.exports, 'createAddAudioNodeConnections', function() {
        return _d;
    });
    const _d = _f => (b, c, _d) => {
        const e = [];
        for (let _f = 0; _f < _d.numberOfInputs; _f += 1)
            e.push(new Set());
        _f.set(b, {
            activeInputs: e,
            outputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: c
        });
    };
}), a.register('qDD6b', function(b, c) {
    _n(b.exports, 'createAddAudioParamConnections', function() {
        return _d;
    });
    const _d = _n => (b, c) => {
        _n.set(b, {
            activeInputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: c
        });
    };
}), a.register('uro/5', function(b, c) {
    _n(b.exports, 'createAddAudioWorkletModule', function() {
        return _i;
    });
    var d = a('4Bnzk'),
        e = a('LHR7r'),
        _f = a('UcP4v');
    const g = _n => {
            if (void 0 !== _n && !Array.isArray(_n))
                throw new TypeError('The parameterDescriptors property of given value for processorCtor is not an array.');
        },
        h = _n => {
            if (!(0, e.isConstructible)(_n))
                throw new TypeError('The given value for processorCtor should be a constructor.');
            if (null === _n.prototype || 'object' != typeof _n.prototype)
                throw new TypeError('The given value for processorCtor should have a prototype.');
        },
        _i = (_n, a, b, c, e, _i, _k, _l, _m, _j, _k, _l, _h) => {
            let j = 0;
            return (_m, _n, k = {
                credentials: 'omit'
            }) => {
                const l = _k.get(_m);
                if (void 0 !== l && l.has(_n))
                    return Promise.resolve();
                const m = _j.get(_m);
                if (void 0 !== m) {
                    const _n = m.get(_n);
                    if (void 0 !== _n)
                        return _n;
                }
                const n = _i(_m),
                    o = void 0 === n.audioWorklet ? e(_n).then(([p, q]) => {
                        const [r, s] = (0, _f.splitImportStatements)(p, q);
                        return b(`${ r };((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${ s }\n})})(window,'_AWGS')`);
                    }).then(() => {
                        const r = _h._AWGS.pop();
                        if (void 0 === r)
                            throw new SyntaxError();
                        c(n.currentTime, n.sampleRate, () => r(class {}, void 0, (r, b) => {
                            if ('' === r.trim())
                                throw q();
                            const s = d.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(n);
                            if (void 0 !== s) {
                                if (s.has(r))
                                    throw q();
                                h(b), g(b.parameterDescriptors), s.set(r, b);
                            } else
                                h(b), g(b.parameterDescriptors), d.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(n, new Map([
                                    [
                                        r,
                                        b
                                    ]
                                ]));
                        }, n.sampleRate, void 0, void 0));
                    }) : Promise.all([
                        e(_n),
                        Promise.resolve(p(_l, _l))
                    ]).then(([
                        [r, s], t
                    ]) => {
                        const u = j + 1;
                        j = u;
                        const [v, w] = (0, _f.splitImportStatements)(r, s), x = new Blob([`${ v };((AudioWorkletProcessor,registerProcessor)=>{${ w }\n})(${ t ? 'AudioWorkletProcessor' : 'class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}' },(n,p)=>registerProcessor(n,class extends p{${ t ? '' : '__c = (a) => a.forEach(e=>this.__b.add(e.buffer));' }process(i,o,p){${ t ? '' : 'i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));' }return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${ u }',class extends AudioWorkletProcessor{process(){return !1}})`], {
                            type: 'application/javascript; charset=utf-8'
                        }), y = URL.createObjectURL(x);
                        return n.audioWorklet.addModule(y, k).then(() => {
                            if (_l(n))
                                return n;
                            const z = _k(n);
                            return z.audioWorklet.addModule(y, k).then(() => z);
                        }).then(r => {
                            if (null === _m)
                                throw new SyntaxError();
                            try {
                                new _m(r, `__sac${ u }`);
                            } catch {
                                throw new SyntaxError();
                            }
                        }).finally(() => URL.revokeObjectURL(y));
                    });
                return void 0 === m ? _j.set(_m, new Map([
                    [
                        _n,
                        o
                    ]
                ])) : m.set(_n, o), o.then(() => {
                    const u = _k.get(_m);
                    void 0 === u ? _k.set(_m, new Set([_n])) : u.add(_n);
                }).finally(() => {
                    const u = _j.get(_m);
                    void 0 !== u && u.delete(_n);
                }), o;
            };
        };
}), a.register('4Bnzk', function(b, c) {
    _i(b.exports, 'ACTIVE_AUDIO_NODE_STORE', function() {
        return _d;
    }), _i(b.exports, 'AUDIO_NODE_CONNECTIONS_STORE', function() {
        return _e;
    }), _i(b.exports, 'AUDIO_NODE_STORE', function() {
        return _f;
    }), _i(b.exports, 'AUDIO_PARAM_CONNECTIONS_STORE', function() {
        return _g;
    }), _i(b.exports, 'AUDIO_PARAM_STORE', function() {
        return _h;
    }), _i(b.exports, 'CONTEXT_STORE', function() {
        return _i;
    }), _i(b.exports, 'EVENT_LISTENERS', function() {
        return _j;
    }), _i(b.exports, 'CYCLE_COUNTERS', function() {
        return _k;
    }), _i(b.exports, 'NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS', function() {
        return _l;
    }), _i(b.exports, 'NODE_TO_PROCESSOR_MAPS', function() {
        return _m;
    });
    const _d = new WeakSet(),
        _e = new WeakMap(),
        _f = new WeakMap(),
        _g = new WeakMap(),
        _h = new WeakMap(),
        _i = new WeakMap(),
        _j = new WeakMap(),
        _k = new WeakMap(),
        _l = new WeakMap(),
        _m = new WeakMap();
}), a.register('LHR7r', function(b, c) {
    _i(b.exports, 'isConstructible', function() {
        return _e;
    });
    const d = {
            construct: () => d
        },
        _e = _i => {
            try {
                new new Proxy(_i, d)();
            } catch {
                return !1;
            }
            return !0;
        };
}), a.register('UcP4v', function(b, c) {
    _i(b.exports, 'splitImportStatements', function() {
        return _e;
    });
    const d = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        _e = (_i, b) => {
            const f = [];
            let g = _i.replace(/^[\s]+/, ''),
                h = g.match(d);
            for (; null !== h;) {
                const _i = h[1].slice(1, -1),
                    j = h[0].replace(/([\s]+)?;?$/, '').replace(_i, new URL(_i, b).toString());
                f.push(j), g = g.slice(h[0].length).replace(/^[\s]+/, ''), h = g.match(d);
            }
            return [
                f.join(';'),
                g
            ];
        };
}), a.register('UKkDy', function(b, c) {
    _p(b.exports, 'createAddConnectionToAudioNode', function() {
        return _g;
    });
    var d = a('WZ6MH'),
        e = a('gRJJQ'),
        f = a('ViLzL');
    const _g = (_p, a, b, c, _g, _i, _j, _n, _h, _o, _j, _k, _l) => {
        const _h = new WeakMap();
        return (_l, _m, _n, _o, _y) => {
            const {
                activeInputs: i,
                passiveInputs: j
            } = _i(_m), {
                outputs: k
            } = _i(_l), l = _n(_l), m = _i => {
                const _n = _h(_m),
                    _o = _h(_l);
                if (_i) {
                    const p = (0, d.deletePassiveInputConnectionToAudioNode)(j, _l, _n, _o);
                    _p(i, _l, p, !1), _y || _k(_l) || b(_o, _n, _n, _o), _l(_m) && (0, e.setInternalStateToActive)(_m);
                } else {
                    const _p = c(i, _l, _n, _o);
                    a(j, _o, _p, !1), _y || _k(_l) || _g(_o, _n, _n, _o);
                    const q = _j(_m);
                    if (0 === q)
                        _j(_m) && (0, f.setInternalStateToPassiveWhenNecessary)(_m, i);
                    else {
                        const r = _h.get(_m);
                        void 0 !== r && clearTimeout(r), _h.set(_m, setTimeout(() => {
                            _j(_m) && (0, f.setInternalStateToPassiveWhenNecessary)(_m, i);
                        }, 1000 * q));
                    }
                }
            };
            return !!_i(k, [
                _m,
                _n,
                _o
            ], _f => _f[0] === _m && _f[1] === _n && _f[2] === _o, !0) && (l.add(m), _j(_l) ? _f(i, _l, [
                _n,
                _o,
                m
            ], !0) : a(j, _o, [
                _l,
                _n,
                m
            ], !0), !0);
        };
    };
}), a.register('WZ6MH', function(b, c) {
    _f(b.exports, 'deletePassiveInputConnectionToAudioNode', function() {
        return _f;
    });
    var d = a('QCE/8'),
        e = a('mb3Kk');
    const _f = (_f, a, b, c) => {
        const g = (0, d.getValueForKey)(_f, a),
            h = (0, e.pickElementFromSet)(g, _f => _f[0] === b && _f[1] === c);
        return 0 === g.size && _f.delete(a), h;
    };
}), a.register('QCE/8', function(b, c) {
    _f(b.exports, 'getValueForKey', function() {
        return _d;
    });
    const _d = (_f, b) => {
        const e = _f.get(b);
        if (void 0 === e)
            throw new Error('A value with the given key could not be found.');
        return e;
    };
}), a.register('mb3Kk', function(b, c) {
    _f(b.exports, 'pickElementFromSet', function() {
        return _d;
    });
    const _d = (_f, b) => {
        const e = Array.from(_f).filter(b);
        if (e.length > 1)
            throw Error('More than one element was found.');
        if (0 === e.length)
            throw Error('No element was found.');
        const [f] = e;
        return _f.delete(f), f;
    };
}), a.register('gRJJQ', function(b, c) {
    _f(b.exports, 'setInternalStateToActive', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('nMrsC');
    const _f = _f => {
        if (d.ACTIVE_AUDIO_NODE_STORE.has(_f))
            throw new Error('The AudioNode is already stored.');
        d.ACTIVE_AUDIO_NODE_STORE.add(_f), (0, e.getEventListenersOfAudioNode)(_f).forEach(_f => _f(!0));
    };
}), a.register('nMrsC', function(b, c) {
    _f(b.exports, 'getEventListenersOfAudioNode', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('QCE/8');
    const _f = _f => (0, e.getValueForKey)(d.EVENT_LISTENERS, _f);
}), a.register('ViLzL', function(b, c) {
    _f(b.exports, 'setInternalStateToPassiveWhenNecessary', function() {
        return _f;
    });
    var d = a('ajjXz'),
        e = a('fMFC0');
    const _f = (_f, a) => {
        !(0, d.isAudioWorkletNode)(_f) && a.every(_f => 0 === _f.size) && (0, e.setInternalStateToPassive)(_f);
    };
}), a.register('ajjXz', function(b, c) {
    _f(b.exports, 'isAudioWorkletNode', function() {
        return _d;
    });
    const _d = _f => 'port' in _f;
}), a.register('fMFC0', function(b, c) {
    _f(b.exports, 'setInternalStateToPassive', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('nMrsC');
    const _f = _f => {
        if (!d.ACTIVE_AUDIO_NODE_STORE.has(_f))
            throw new Error('The AudioNode is not stored.');
        d.ACTIVE_AUDIO_NODE_STORE.delete(_f), (0, e.getEventListenersOfAudioNode)(_f).forEach(_f => _f(!1));
    };
}), a.register('JIqWn', function(b, c) {
    _f(b.exports, 'createAddPassiveInputConnectionToAudioNode', function() {
        return _d;
    });
    const _d = _f => (b, c, [e, f, g], _h) => {
        const h = b.get(e);
        void 0 === h ? b.set(e, new Set([
            [
                f,
                c,
                g
            ]
        ])) : _f(h, [
            f,
            c,
            g
        ], _f => _f[0] === f && _f[1] === c, _h);
    };
}), a.register('IgY4q', function(b, c) {
    _f(b.exports, 'createAddSilentConnection', function() {
        return _d;
    });
    const _d = _f => (b, c) => {
        const e = _f(b, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        c.connect(e).connect(b.destination);
        const f = () => {
            c.removeEventListener('ended', f), c.disconnect(e), e.disconnect();
        };
        c.addEventListener('ended', f);
    };
}), a.register('xiNE4', function(b, c) {
    _f(b.exports, 'createAddUnrenderedAudioWorkletNode', function() {
        return _d;
    });
    const _d = _f => (b, c) => {
        _f(b).add(c);
    };
}), a.register('c37cu', function(b, c) {
    _f(b.exports, 'createAnalyserNodeConstructor', function() {
        return _e;
    });
    const d = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            fftSize: 2048,
            maxDecibels: -30,
            minDecibels: -100,
            smoothingTimeConstant: 0.8
        },
        _e = (_f, b, c, _e, _e, _h) => class extends _f {
            get fftSize() {
                return this._nativeAnalyserNode.fftSize;
            }
            set fftSize(_f) {
                this._nativeAnalyserNode.fftSize = _f;
            }
            get frequencyBinCount() {
                return this._nativeAnalyserNode.frequencyBinCount;
            }
            get maxDecibels() {
                return this._nativeAnalyserNode.maxDecibels;
            }
            set maxDecibels(f) {
                const g = this._nativeAnalyserNode.maxDecibels;
                if (this._nativeAnalyserNode.maxDecibels = f, !(f > this._nativeAnalyserNode.minDecibels))
                    throw this._nativeAnalyserNode.maxDecibels = g, c();
            }
            get minDecibels() {
                return this._nativeAnalyserNode.minDecibels;
            }
            set minDecibels(f) {
                const g = this._nativeAnalyserNode.minDecibels;
                if (this._nativeAnalyserNode.minDecibels = f, !(this._nativeAnalyserNode.maxDecibels > f))
                    throw this._nativeAnalyserNode.minDecibels = g, c();
            }
            get smoothingTimeConstant() {
                return this._nativeAnalyserNode.smoothingTimeConstant;
            }
            set smoothingTimeConstant(f) {
                this._nativeAnalyserNode.smoothingTimeConstant = f;
            }
            getByteFrequencyData(f) {
                this._nativeAnalyserNode.getByteFrequencyData(f);
            }
            getByteTimeDomainData(f) {
                this._nativeAnalyserNode.getByteTimeDomainData(f);
            }
            getFloatFrequencyData(f) {
                this._nativeAnalyserNode.getFloatFrequencyData(f);
            }
            getFloatTimeDomainData(f) {
                this._nativeAnalyserNode.getFloatTimeDomainData(f);
            }
            constructor(f, g) {
                const h = _e(f),
                    _i = {
                        ...d,
                        ...g
                    },
                    _j = _e(h, _i);
                super(f, !1, _j, _h(h) ? b() : null), this._nativeAnalyserNode = _j;
            }
        };
}), a.register('5jHvi', function(b, c) {
    _j(b.exports, 'createAnalyserNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_j, a, b) => () => {
        const f = new WeakMap();
        return {
            render(g, _h) {
                const i = f.get(_h);
                return void 0 !== i ? Promise.resolve(i) : (async (g, _h) => {
                    let j = a(g);
                    if (!(0, d.isOwnedByContext)(j, _h)) {
                        const k = {
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            fftSize: j.fftSize,
                            maxDecibels: j.maxDecibels,
                            minDecibels: j.minDecibels,
                            smoothingTimeConstant: j.smoothingTimeConstant
                        };
                        j = _j(_h, k);
                    }
                    return f.set(_h, j), await b(g, _h, j), j;
                })(g, _h);
            }
        };
    };
}), a.register('V8YdD', function(b, c) {
    _j(b.exports, 'isOwnedByContext', function() {
        return _d;
    });
    const _d = (_j, b) => _j.context === b;
}), a.register('5DF7A', function(b, c) {
    _j(b.exports, 'createAudioBufferConstructor', function() {
        return _g;
    });
    var d = a('xoQ7J'),
        e = a('saIH8');
    const f = {
            numberOfChannels: 1
        },
        _g = (_j, a, b, c, _g, _h, _i, _j) => {
            let _h = null;
            return class _i {
                static[Symbol.hasInstance](i) {
                    return null !== i && 'object' == typeof i && Object.getPrototypeOf(i) === _i.prototype || _j.has(i);
                }
                constructor(_i) {
                    if (null === _g)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const {
                        length: _j,
                        numberOfChannels: _k,
                        sampleRate: _l
                    } = {
                        ...f,
                        ..._i
                    };
                    null === _h && (_h = new _g(1, 1, 44100));
                    const m = null !== c && a(_h, _h) ? new c({
                        length: _j,
                        numberOfChannels: _k,
                        sampleRate: _l
                    }) : _h.createBuffer(_k, _j, _l);
                    if (0 === m.numberOfChannels)
                        throw b();
                    return 'function' != typeof m.copyFromChannel ? (_i(m), (0, e.wrapAudioBufferGetChannelDataMethod)(m)) : a(d.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => (0, d.testAudioBufferCopyChannelMethodsOutOfBoundsSupport)(m)) || _j(m), _j.add(m), m;
                }
            };
        };
}), a.register('xoQ7J', function(b, c) {
    _j(b.exports, 'testAudioBufferCopyChannelMethodsOutOfBoundsSupport', function() {
        return _d;
    });
    const _d = _j => {
        try {
            _j.copyToChannel(new Float32Array(1), 0, -1);
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('saIH8', function(b, c) {
    _j(b.exports, 'wrapAudioBufferGetChannelDataMethod', function() {
        return _e;
    });
    var d = a('jTId6');
    const _e = _j => {
        var f;
        _j.getChannelData = (f = _j.getChannelData, b => {
            try {
                return f.call(_j, b);
            } catch (_j) {
                if (12 === _j.code)
                    throw (0, d.createIndexSizeError)();
                throw _j;
            }
        });
    };
}), a.register('jTId6', function(b, c) {
    _j(b.exports, 'createIndexSizeError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'IndexSizeError');
}), a.register('7EJTO', function(b, c) {
    _j(b.exports, 'createAudioBufferSourceNodeConstructor', function() {
        return _i;
    });
    var d = a('MZ6ZX'),
        e = a('Higr5'),
        f = a('gRJJQ'),
        g = a('fMFC0');
    const _h = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
        },
        _i = (_j, a, b, c, _i, _j, _k, _o) => class extends _j {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer;
            }
            set buffer(_j) {
                if (this._nativeAudioBufferSourceNode.buffer = _j, null !== _j) {
                    if (this._isBufferSet)
                        throw c();
                    this._isBufferSet = !0;
                }
            }
            get loop() {
                return this._nativeAudioBufferSourceNode.loop;
            }
            set loop(j) {
                this._nativeAudioBufferSourceNode.loop = j;
            }
            get loopEnd() {
                return this._nativeAudioBufferSourceNode.loopEnd;
            }
            set loopEnd(j) {
                this._nativeAudioBufferSourceNode.loopEnd = j;
            }
            get loopStart() {
                return this._nativeAudioBufferSourceNode.loopStart;
            }
            set loopStart(j) {
                this._nativeAudioBufferSourceNode.loopStart = j;
            }
            get onended() {
                return this._onended;
            }
            set onended(j) {
                const k = 'function' == typeof j ? _o(this, j) : null;
                this._nativeAudioBufferSourceNode.onended = k;
                const l = this._nativeAudioBufferSourceNode.onended;
                this._onended = null !== l && l === k ? j : l;
            }
            get playbackRate() {
                return this._playbackRate;
            }
            start(j = 0, k = 0, l) {
                if (this._nativeAudioBufferSourceNode.start(j, k, l), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === l ? [
                        j,
                        k
                    ] : [
                        j,
                        k,
                        l
                    ]), 'closed' !== this.context.state) {
                    (0, f.setInternalStateToActive)(this);
                    const m = () => {
                        this._nativeAudioBufferSourceNode.removeEventListener('ended', m), (0, e.isActiveAudioNode)(this) && (0, g.setInternalStateToPassive)(this);
                    };
                    this._nativeAudioBufferSourceNode.addEventListener('ended', m);
                }
            }
            stop(j = 0) {
                this._nativeAudioBufferSourceNode.stop(j), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = j);
            }
            constructor(j, k) {
                const l = _j(j),
                    m = {
                        ..._h,
                        ...k
                    },
                    n = _i(l, m),
                    _o = _k(l),
                    p = _o ? a() : null;
                super(j, !1, n, p), this._audioBufferSourceNodeRenderer = p, this._isBufferNullified = !1, this._isBufferSet = null !== m.buffer, this._nativeAudioBufferSourceNode = n, this._onended = null, this._playbackRate = b(this, _o, n.playbackRate, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), a.register('MZ6ZX', function(b, c) {
    _i(b.exports, 'MOST_NEGATIVE_SINGLE_FLOAT', function() {
        return _d;
    }), _i(b.exports, 'MOST_POSITIVE_SINGLE_FLOAT', function() {
        return _e;
    });
    const _d = -3.4028234663852886e+38,
        _e = -_d;
}), a.register('Higr5', function(b, c) {
    _i(b.exports, 'isActiveAudioNode', function() {
        return _e;
    });
    var d = a('4Bnzk');
    const _e = _i => d.ACTIVE_AUDIO_NODE_STORE.has(_i);
}), a.register('tPDdl', function(b, c) {
    _i(b.exports, 'createAudioBufferSourceNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_i, a, b, c, _e) => () => {
        const f = new WeakMap();
        let g = null,
            h = null;
        return {
            set start(_i) {
                g = _i;
            },
            set stop(i) {
                h = i;
            },
            render(i, _j) {
                const _k = f.get(_j);
                return void 0 !== _k ? Promise.resolve(_k) : (async (i, _j) => {
                    let l = b(i);
                    const m = (0, d.isOwnedByContext)(l, _j);
                    if (!m) {
                        const n = {
                            buffer: l.buffer,
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            loop: l.loop,
                            loopEnd: l.loopEnd,
                            loopStart: l.loopStart,
                            playbackRate: l.playbackRate.value
                        };
                        l = a(_j, n), null !== g && l.start(...g), null !== h && l.stop(h);
                    }
                    return f.set(_j, l), m ? await _g(_j, i.playbackRate, l.playbackRate) : await c(_j, i.playbackRate, l.playbackRate), await _e(i, _j, l), l;
                })(i, _j);
            }
        };
    };
}), a.register('fuUGK', function(b, c) {
    _g(b.exports, 'createAudioContextConstructor', function() {
        return _f;
    });
    var d = a('N6Hr7'),
        e = a('Nx4/F');
    const _f = (_g, a, b, c, _f, _g, _h, _i, _j) => class extends _g {
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
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, d.deactivateAudioGraph)(this);
            }));
        }
        createMediaElementSource(_g) {
            return new _f(this, {
                mediaElement: _g
            });
        }
        createMediaStreamDestination() {
            return new _g(this);
        }
        createMediaStreamSource(g) {
            return new _h(this, {
                mediaStream: g
            });
        }
        createMediaStreamTrackSource(g) {
            return new _i(this, {
                mediaStreamTrack: g
            });
        }
        resume() {
            return 'suspended' === this._state ? new Promise((_g, a) => {
                const g = () => {
                    this._nativeAudioContext.removeEventListener('statechange', g), 'running' === this._nativeAudioContext.state ? _g() : this.resume().then(_g, a);
                };
                this._nativeAudioContext.addEventListener('statechange', g);
            }) : this._nativeAudioContext.resume().catch(_g => {
                if (void 0 === _g || 15 === _g.code)
                    throw a();
                throw _g;
            });
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(_g => {
                if (void 0 === _g)
                    throw a();
                throw _g;
            });
        }
        constructor(_g = {}) {
            if (null === _j)
                throw new Error('Missing the native AudioContext constructor.');
            let h;
            try {
                h = new _j(_g);
            } catch (_g) {
                if (12 === _g.code && 'sampleRate is not in range' === _g.message)
                    throw b();
                throw _g;
            }
            if (null === h)
                throw c();
            if (!(0, e.isValidLatencyHint)(_g.latencyHint))
                throw new TypeError(`The provided value '${ _g.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== _g.sampleRate && h.sampleRate !== _g.sampleRate)
                throw b();
            super(h, 2);
            const {
                latencyHint: i
            } = _g, {
                sampleRate: j
            } = h;
            if (this._baseLatency = 'number' == typeof h.baseLatency ? h.baseLatency : 'balanced' === i ? 512 / j : 'interactive' === i || void 0 === i ? 256 / j : 'playback' === i ? 1024 / j : 128 * Math.max(2, Math.min(128, Math.round(i * j / 128))) / j, this._nativeAudioContext = h, 'webkitAudioContext' === _j.name ? (this._nativeGainNode = h.createGain(), this._nativeOscillatorNode = h.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === h.state) {
                this._state = 'suspended';
                const k = () => {
                    'suspended' === this._state && (this._state = null), h.removeEventListener('statechange', k);
                };
                h.addEventListener('statechange', k);
            }
        }
    };
}), a.register('N6Hr7', function(b, c) {
    _s(b.exports, 'deactivateAudioGraph', function() {
        return _e;
    });
    var d = a('njCmG');
    const _e = _s => {
        (0, d.deactivateActiveAudioNodeInputConnections)(_s.destination, []);
    };
}), a.register('njCmG', function(b, c) {
    _s(b.exports, 'deactivateActiveAudioNodeInputConnections', function() {
        return _o;
    });
    var d = a('I9wz2'),
        e = a('ajjXz'),
        f = a('XY1r4'),
        _g = a('rcHxm'),
        _h = a('NJEDl'),
        _i = a('HV/j2'),
        _j = a('sGus5'),
        k = a('gzRu/'),
        l = a('uXi12'),
        m = a('Higr5'),
        n = a('fMFC0');
    const _o = (_s, a) => {
        const {
            activeInputs: p
        } = (0, k.getAudioNodeConnections)(_s);
        p.forEach(p => p.forEach(([q]) => {
            a.includes(_s) || _o(q, [
                ...a,
                _s
            ]);
        }));
        const r = (0, d.isAudioBufferSourceNode)(_s) ? [_s.playbackRate] : (0, e.isAudioWorkletNode)(_s) ? Array.from(_s.parameters.values()) : (0, f.isBiquadFilterNode)(_s) ? [
            _s.Q,
            _s.detune,
            _s.frequency,
            _s.gain
        ] : (0, _g.isConstantSourceNode)(_s) ? [_s.offset] : (0, _h.isGainNode)(_s) ? [_s.gain] : (0, _i.isOscillatorNode)(_s) ? [
            _s.detune,
            _s.frequency
        ] : (0, _j.isStereoPannerNode)(_s) ? [_s.pan] : [];
        for (const _s of r) {
            const t = (0, l.getAudioParamConnections)(_s);
            void 0 !== t && t.activeInputs.forEach(([u]) => _o(u, a));
        }
        (0, m.isActiveAudioNode)(_s) && (0, n.setInternalStateToPassive)(_s);
    };
}), a.register('I9wz2', function(b, c) {
    _e(b.exports, 'isAudioBufferSourceNode', function() {
        return _d;
    });
    const _d = _e => 'playbackRate' in _e;
}), a.register('XY1r4', function(b, c) {
    _e(b.exports, 'isBiquadFilterNode', function() {
        return _d;
    });
    const _d = _e => 'frequency' in _e && 'gain' in _e;
}), a.register('rcHxm', function(b, c) {
    _e(b.exports, 'isConstantSourceNode', function() {
        return _d;
    });
    const _d = _e => 'offset' in _e;
}), a.register('NJEDl', function(b, c) {
    _e(b.exports, 'isGainNode', function() {
        return _d;
    });
    const _d = _e => !('frequency' in _e) && 'gain' in _e;
}), a.register('HV/j2', function(b, c) {
    _e(b.exports, 'isOscillatorNode', function() {
        return _d;
    });
    const _d = _e => 'detune' in _e && 'frequency' in _e;
}), a.register('sGus5', function(b, c) {
    _e(b.exports, 'isStereoPannerNode', function() {
        return _d;
    });
    const _d = _e => 'pan' in _e;
}), a.register('gzRu/', function(b, c) {
    _e(b.exports, 'getAudioNodeConnections', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('QCE/8');
    const _f = _e => (0, e.getValueForKey)(d.AUDIO_NODE_CONNECTIONS_STORE, _e);
}), a.register('uXi12', function(b, c) {
    _e(b.exports, 'getAudioParamConnections', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('QCE/8');
    const _f = _e => (0, e.getValueForKey)(d.AUDIO_PARAM_CONNECTIONS_STORE, _e);
}), a.register('Nx4/F', function(b, c) {
    _e(b.exports, 'isValidLatencyHint', function() {
        return _d;
    });
    const _d = _e => void 0 === _e || 'number' == typeof _e || 'string' == typeof _e && ('balanced' === _e || 'interactive' === _e || 'playback' === _e);
}), a.register('i5jns', function(b, c) {
    _e(b.exports, 'createAudioDestinationNodeConstructor', function() {
        return _d;
    });
    const _d = (_e, b, c, _d, _h, _e, _f, _z) => class extends _e {
        get channelCount() {
            return this._nativeAudioDestinationNode.channelCount;
        }
        set channelCount(_e) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw _d();
            if (_e > this._nativeAudioDestinationNode.maxChannelCount)
                throw c();
            this._nativeAudioDestinationNode.channelCount = _e;
        }
        get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode;
        }
        set channelCountMode(e) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw _d();
            this._nativeAudioDestinationNode.channelCountMode = e;
        }
        get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount;
        }
        constructor(e, f) {
            const g = _e(e),
                h = _f(g),
                i = _h(g, f, h);
            super(e, !1, i, h ? b(_z) : null), this._isNodeOfNativeOfflineAudioContext = h, this._nativeAudioDestinationNode = i;
        }
    };
}), a.register('i6nzF', function(b, c) {
    _w(b.exports, 'createAudioDestinationNodeRenderer', function() {
        return _d;
    });
    const _d = _w => {
        const e = new WeakMap();
        return {
            render(f, g) {
                const _h = e.get(g);
                return void 0 !== _h ? Promise.resolve(_h) : (async (f, g) => {
                    const i = g.destination;
                    return e.set(g, i), await _w(f, g, i), i;
                })(f, g);
            }
        };
    };
}), a.register('hqm/F', function(b, c) {
    _w(b.exports, 'createAudioListenerFactory', function() {
        return _e;
    });
    var d = a('MZ6ZX');
    const _e = (_w, a, b, c, _e, _f, _z, _h) => (_i, _j) => {
        const f = _j.listener,
            {
                forwardX: g,
                forwardY: h,
                forwardZ: i,
                positionX: j,
                positionY: k,
                positionZ: _l,
                upX: _m,
                upY: _n,
                upZ: _o
            } = void 0 === f.forwardX ? (() => {
                const p = new Float32Array(1),
                    q = a(_j, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: 9
                    }),
                    r = _z(_j);
                let s = !1,
                    t = [
                        0,
                        0,
                        -1,
                        0,
                        1,
                        0
                    ],
                    u = [
                        0,
                        0,
                        0
                    ];
                const v = () => {
                        if (s)
                            return;
                        s = !0;
                        const _w = c(_j, 256, 9, 0);
                        _w.onaudioprocess = ({
                            inputBuffer: x
                        }) => {
                            const y = [
                                _f(x, p, 0),
                                _f(x, p, 1),
                                _f(x, p, 2),
                                _f(x, p, 3),
                                _f(x, p, 4),
                                _f(x, p, 5)
                            ];
                            y.some((x, y) => x !== t[y]) && (f.setOrientation(...y), t = y);
                            const z = [
                                _f(x, p, 6),
                                _f(x, p, 7),
                                _f(x, p, 8)
                            ];
                            z.some((x, y) => x !== u[y]) && (f.setPosition(...z), u = z);
                        }, q.connect(x);
                    },
                    w = _G => a => {
                        a !== t[_G] && (t[_G] = a, f.setOrientation(...t));
                    },
                    x = _G => a => {
                        a !== u[_G] && (u[_G] = a, f.setPosition(...u));
                    },
                    _y = (a, c, _f) => {
                        const _z = b(_j, {
                            channelCount: 1,
                            channelCountMode: 'explicit',
                            channelInterpretation: 'discrete',
                            offset: c
                        });
                        _z.connect(q, 0, a), _z.start(), Object.defineProperty(_z.offset, 'defaultValue', {
                            get: () => c
                        });
                        const A = _G({
                            context: _i
                        }, r, _z.offset, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT);
                        var B, C, D, E, F, G, H;
                        return _h(A, 'value', _G => () => _G.call(A), _G => a => {
                            try {
                                _G.call(A, a);
                            } catch (_G) {
                                if (9 !== _G.code)
                                    throw _G;
                            }
                            v(), r && _f(a);
                        }), A.cancelAndHoldAtTime = (B = A.cancelAndHoldAtTime, r ? () => {
                            throw _e();
                        } : (..._G) => {
                            const I = B.apply(A, _G);
                            return v(), I;
                        }), A.cancelScheduledValues = (C = A.cancelScheduledValues, r ? () => {
                            throw _e();
                        } : (..._G) => {
                            const I = C.apply(A, _G);
                            return v(), I;
                        }), A.exponentialRampToValueAtTime = (D = A.exponentialRampToValueAtTime, r ? () => {
                            throw _e();
                        } : (..._G) => {
                            const I = D.apply(A, _G);
                            return v(), I;
                        }), A.linearRampToValueAtTime = (E = A.linearRampToValueAtTime, r ? () => {
                            throw _e();
                        } : (..._G) => {
                            const I = E.apply(A, _G);
                            return v(), I;
                        }), A.setTargetAtTime = (F = A.setTargetAtTime, r ? () => {
                            throw _e();
                        } : (..._G) => {
                            const I = F.apply(A, _G);
                            return v(), I;
                        }), A.setValueAtTime = (G = A.setValueAtTime, r ? () => {
                            throw _e();
                        } : (..._G) => {
                            const I = G.apply(A, _G);
                            return v(), I;
                        }), A.setValueCurveAtTime = (H = A.setValueCurveAtTime, r ? () => {
                            throw _e();
                        } : (..._G) => {
                            const I = H.apply(A, _G);
                            return v(), I;
                        }), A;
                    };
                return {
                    forwardX: _y(0, 0, w(0)),
                    forwardY: _y(1, 0, w(1)),
                    forwardZ: _y(2, -1, w(2)),
                    positionX: _y(6, 0, x(0)),
                    positionY: _y(7, 0, x(1)),
                    positionZ: _y(8, 0, x(2)),
                    upX: _y(3, 0, w(3)),
                    upY: _y(4, 1, w(4)),
                    upZ: _y(5, 0, w(5))
                };
            })() : f;
        return {
            get forwardX() {
                return g;
            },
            get forwardY() {
                return h;
            },
            get forwardZ() {
                return i;
            },
            get positionX() {
                return j;
            },
            get positionY() {
                return k;
            },
            get positionZ() {
                return _l;
            },
            get upX() {
                return _m;
            },
            get upY() {
                return _n;
            },
            get upZ() {
                return _o;
            }
        };
    };
}), a.register('/MYIb', function(b, c) {
    _G(b.exports, 'createAudioNodeConstructor', function() {
        return _F;
    });
    var d = a('4Bnzk'),
        e = a('jJ1mz'),
        _f = a('FESF1'),
        g = a('HSudS'),
        _h = a('epyng'),
        _i = a('isUAR'),
        _j = a('u//4E'),
        k = a('GGlVr'),
        l = a('zfGpi'),
        m = a('WZ6MH'),
        n = a('JI9SQ'),
        o = a('ITwKi'),
        p = a('gzRu/'),
        q = a('uXi12'),
        r = a('nMrsC'),
        s = a('gfJeZ'),
        t = a('5a+wO'),
        u = a('H4C9z'),
        v = a('Higr5'),
        w = a('uyeTR'),
        x = a('eUZ1s'),
        y = a('gRJJQ'),
        z = a('ViLzL'),
        A = a('caJ69'),
        B = a('iyIgE'),
        C = a('3nNTu');
    const D = (_G, a, b, c, d) => {
            const [E, F] = ((_G, a, b, c) => {
                const {
                    activeInputs: G,
                    passiveInputs: H
                } = (0, p.getAudioNodeConnections)(a), I = (0, _j.deleteActiveInputConnection)(G[c], _G, b);
                if (null === I)
                    return [
                        (0, m.deletePassiveInputConnectionToAudioNode)(H, _G, b, c)[2],
                        !1
                    ];
                return [
                    I[2],
                    !0
                ];
            })(_G, b, c, d);
            if (null !== E && ((0, l.deleteEventListenerOfAudioNode)(_G, E), !F || a || (0, w.isPartOfACycle)(_G) || (0, o.disconnectNativeAudioNodeFromNativeAudioNode)((0, s.getNativeAudioNode)(_G), (0, s.getNativeAudioNode)(b), c, d)), (0, v.isActiveAudioNode)(b)) {
                const {
                    activeInputs: _G
                } = (0, p.getAudioNodeConnections)(b);
                (0, z.setInternalStateToPassiveWhenNecessary)(b, _G);
            }
        },
        E = (_G, a, b, c) => {
            const [F, G] = ((_G, a, b) => {
                const {
                    activeInputs: H,
                    passiveInputs: I
                } = (0, q.getAudioParamConnections)(a), J = (0, _j.deleteActiveInputConnection)(H, _G, b);
                if (null === J)
                    return [
                        (0, n.deletePassiveInputConnectionToAudioParam)(I, _G, b)[1],
                        !1
                    ];
                return [
                    J[2],
                    !0
                ];
            })(_G, b, c);
            null !== F && ((0, l.deleteEventListenerOfAudioNode)(_G, F), !G || a || (0, w.isPartOfACycle)(_G) || (0, s.getNativeAudioNode)(_G).disconnect((0, t.getNativeAudioParam)(b), c));
        },
        _F = (_G, a, b, c, _j, l, m, o, z, _F, _v, _w, _x, _y, _B, _D) => class extends _F {
            get channelCount() {
                return this._nativeAudioNode.channelCount;
            }
            set channelCount(_G) {
                this._nativeAudioNode.channelCount = _G;
            }
            get channelCountMode() {
                return this._nativeAudioNode.channelCountMode;
            }
            set channelCountMode(G) {
                this._nativeAudioNode.channelCountMode = G;
            }
            get channelInterpretation() {
                return this._nativeAudioNode.channelInterpretation;
            }
            set channelInterpretation(G) {
                this._nativeAudioNode.channelInterpretation = G;
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
            connect(G, H = 0, I = 0) {
                if (H < 0 || H >= this._nativeAudioNode.numberOfOutputs)
                    throw _j();
                const J = _v(this._context),
                    K = _B(J);
                if (_x(G) || _y(G))
                    throw l();
                if ((0, e.isAudioNode)(G)) {
                    const L = (0, s.getNativeAudioNode)(G);
                    try {
                        const M = (0, _i.connectNativeAudioNodeToNativeAudioNode)(this._nativeAudioNode, L, H, I),
                            N = (0, x.isPassiveAudioNode)(this);
                        (K || N) && this._nativeAudioNode.disconnect(...M), 'closed' !== this.context.state && !N && (0, x.isPassiveAudioNode)(G) && (0, y.setInternalStateToActive)(G);
                    } catch (G) {
                        if (12 === G.code)
                            throw l();
                        throw G;
                    }
                    if (a(this, G, H, I, K)) {
                        const M = z([this], G);
                        (0, B.visitEachAudioNodeOnce)(M, c(K));
                    }
                    return G;
                }
                const L = (0, t.getNativeAudioParam)(G);
                if ('playbackRate' === L.name && 1024 === L.maxValue)
                    throw m();
                try {
                    this._nativeAudioNode.connect(L, H), (K || (0, x.isPassiveAudioNode)(this)) && this._nativeAudioNode.disconnect(L, H);
                } catch (G) {
                    if (12 === G.code)
                        throw l();
                    throw G;
                }
                const M = ((G, a, H, c) => {
                    const {
                        activeInputs: N,
                        passiveInputs: O
                    } = (0, q.getAudioParamConnections)(a), {
                        outputs: P
                    } = (0, p.getAudioNodeConnections)(G), Q = (0, r.getEventListenersOfAudioNode)(G), R = P => {
                        const S = (0, s.getNativeAudioNode)(G),
                            T = (0, t.getNativeAudioParam)(a);
                        if (P) {
                            const U = (0, n.deletePassiveInputConnectionToAudioParam)(O, G, H);
                            (0, g.addActiveInputConnectionToAudioParam)(N, G, U, !1), c || (0, w.isPartOfACycle)(G) || S.connect(T, H);
                        } else {
                            const U = (0, k.deleteActiveInputConnectionToAudioParam)(N, G, H);
                            (0, _h.addPassiveInputConnectionToAudioParam)(O, U, !1), c || (0, w.isPartOfACycle)(G) || S.disconnect(T, H);
                        }
                    };
                    return !!(0, u.insertElementInSet)(P, [
                        a,
                        H
                    ], G => G[0] === a && G[1] === H, !0) && (Q.add(R), (0, v.isActiveAudioNode)(G) ? (0, g.addActiveInputConnectionToAudioParam)(N, G, [
                        H,
                        R
                    ], !0) : (0, _h.addPassiveInputConnectionToAudioParam)(O, [
                        G,
                        H,
                        R
                    ], !0), !0);
                })(this, G, H, K);
                if (M) {
                    const N = z([this], G);
                    (0, B.visitEachAudioNodeOnce)(N, c(K));
                }
            }
            disconnect(G, H, I) {
                let J;
                const K = _v(this._context),
                    L = _B(K);
                if (void 0 === G)
                    J = ((G, H) => {
                        const M = (0, p.getAudioNodeConnections)(G),
                            N = [];
                        for (const O of M.outputs)
                            (0, _f.isAudioNodeOutputConnection)(O) ? D(G, H, ...O) : E(G, H, ...O), N.push(O[0]);
                        return M.outputs.clear(), N;
                    })(this, L);
                else if ('number' == typeof G) {
                    if (G < 0 || G >= this.numberOfOutputs)
                        throw _j();
                    J = ((G, H, I) => {
                        const M = (0, p.getAudioNodeConnections)(G),
                            N = [];
                        for (const O of M.outputs)
                            O[1] === I && ((0, _f.isAudioNodeOutputConnection)(O) ? D(G, H, ...O) : E(G, H, ...O), N.push(O[0]), M.outputs.delete(O));
                        return N;
                    })(this, L, G);
                } else {
                    if (void 0 !== H && (H < 0 || H >= this.numberOfOutputs))
                        throw _j();
                    if ((0, e.isAudioNode)(G) && void 0 !== I && (I < 0 || I >= G.numberOfInputs))
                        throw _j();
                    if (J = ((G, H, I, J, K) => {
                            const M = (0, p.getAudioNodeConnections)(G);
                            return Array.from(M.outputs).filter(G => !(G[0] !== I || void 0 !== J && G[1] !== J || void 0 !== K && G[2] !== K)).map(I => ((0, _f.isAudioNodeOutputConnection)(I) ? D(G, H, ...I) : E(G, H, ...I), M.outputs.delete(I), I[0]));
                        })(this, L, G, H, I), 0 === J.length)
                        throw l();
                }
                for (const M of J) {
                    const N = z([this], M);
                    (0, B.visitEachAudioNodeOnce)(N, o);
                }
            }
            constructor(G, H, I, J) {
                super(I), this._context = G, this._nativeAudioNode = I;
                const K = _v(G);
                _w(K) && !0 !== b(A.testAudioNodeDisconnectMethodSupport, () => (0, A.testAudioNodeDisconnectMethodSupport)(K, _D)) && (0, C.wrapAudioNodeDisconnectMethod)(I), d.AUDIO_NODE_STORE.set(this, I), d.EVENT_LISTENERS.set(this, new Set()), 'closed' !== G.state && H && (0, y.setInternalStateToActive)(this), _g(this, J, I);
            }
        };
}), a.register('jJ1mz', function(b, c) {
    _g(b.exports, 'isAudioNode', function() {
        return _d;
    });
    const _d = _g => 'context' in _g;
}), a.register('FESF1', function(b, c) {
    _g(b.exports, 'isAudioNodeOutputConnection', function() {
        return _e;
    });
    var d = a('jJ1mz');
    const _e = _g => (0, d.isAudioNode)(_g[0]);
}), a.register('HSudS', function(b, c) {
    _g(b.exports, 'addActiveInputConnectionToAudioParam', function() {
        return _e;
    });
    var d = a('H4C9z');
    const _e = (_g, a, [f, g], _e) => {
        (0, d.insertElementInSet)(_g, [
            a,
            f,
            g
        ], _g => _g[0] === a && _g[1] === f, _e);
    };
}), a.register('H4C9z', function(b, c) {
    _g(b.exports, 'insertElementInSet', function() {
        return _d;
    });
    const _d = (_g, b, c, _d) => {
        for (const e of _g)
            if (c(e)) {
                if (_d)
                    return !1;
                throw Error('The set contains at least one similar element.');
            }
        return _g.add(e), !0;
    };
}), a.register('epyng', function(b, c) {
    _g(b.exports, 'addPassiveInputConnectionToAudioParam', function() {
        return _e;
    });
    var d = a('H4C9z');
    const _e = (_g, [f, g, h], _e) => {
        const i = _g.get(f);
        void 0 === i ? _g.set(f, new Set([
            [
                g,
                h
            ]
        ])) : (0, d.insertElementInSet)(i, [
            g,
            h
        ], _g => _g[0] === g, _e);
    };
}), a.register('isUAR', function(b, c) {
    _g(b.exports, 'connectNativeAudioNodeToNativeAudioNode', function() {
        return _e;
    });
    var d = a('L0TxC');
    const _e = (_g, a, b, c) => {
        if ((0, d.isNativeAudioNodeFaker)(a)) {
            const f = a.inputs[c];
            return _g.connect(f, b, 0), [
                f,
                b,
                0
            ];
        }
        return _g.connect(a, b, c), [
            a,
            b,
            c
        ];
    };
}), a.register('L0TxC', function(b, c) {
    _g(b.exports, 'isNativeAudioNodeFaker', function() {
        return _d;
    });
    const _d = _g => 'inputs' in _g;
}), a.register('u//4E', function(b, c) {
    _g(b.exports, 'deleteActiveInputConnection', function() {
        return _d;
    });
    const _d = (_g, b, c) => {
        for (const e of _g)
            if (e[0] === b && e[1] === c)
                return _g.delete(e), e;
        return null;
    };
}), a.register('GGlVr', function(b, c) {
    _g(b.exports, 'deleteActiveInputConnectionToAudioParam', function() {
        return _e;
    });
    var d = a('mb3Kk');
    const _e = (_g, a, b) => (0, d.pickElementFromSet)(_g, _g => _g[0] === a && _g[1] === b);
}), a.register('zfGpi', function(b, c) {
    _g(b.exports, 'deleteEventListenerOfAudioNode', function() {
        return _e;
    });
    var d = a('nMrsC');
    const _e = (_g, a) => {
        if (!(0, d.getEventListenersOfAudioNode)(_g).delete(a))
            throw new Error('Missing the expected event listener.');
    };
}), a.register('JI9SQ', function(b, c) {
    _g(b.exports, 'deletePassiveInputConnectionToAudioParam', function() {
        return _f;
    });
    var d = a('QCE/8'),
        e = a('mb3Kk');
    const _f = (_g, a, b) => {
        const g = (0, d.getValueForKey)(_g, a),
            h = (0, e.pickElementFromSet)(g, _g => _g[0] === b);
        return 0 === g.size && _g.delete(a), h;
    };
}), a.register('ITwKi', function(b, c) {
    _g(b.exports, 'disconnectNativeAudioNodeFromNativeAudioNode', function() {
        return _e;
    });
    var d = a('L0TxC');
    const _e = (_g, a, b, c) => {
        (0, d.isNativeAudioNodeFaker)(a) ? _g.disconnect(a.inputs[c], b, 0): _g.disconnect(a, b, c);
    };
}), a.register('gfJeZ', function(b, c) {
    _g(b.exports, 'getNativeAudioNode', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('QCE/8');
    const _f = _g => (0, e.getValueForKey)(d.AUDIO_NODE_STORE, _g);
}), a.register('5a+wO', function(b, c) {
    _g(b.exports, 'getNativeAudioParam', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('QCE/8');
    const _f = _g => (0, e.getValueForKey)(d.AUDIO_PARAM_STORE, _g);
}), a.register('uyeTR', function(b, c) {
    _g(b.exports, 'isPartOfACycle', function() {
        return _e;
    });
    var d = a('4Bnzk');
    const _e = _g => d.CYCLE_COUNTERS.has(_g);
}), a.register('eUZ1s', function(b, c) {
    _g(b.exports, 'isPassiveAudioNode', function() {
        return _e;
    });
    var d = a('4Bnzk');
    const _e = _g => !d.ACTIVE_AUDIO_NODE_STORE.has(_g);
}), a.register('caJ69', function(b, c) {
    _g(b.exports, 'testAudioNodeDisconnectMethodSupport', function() {
        return _d;
    });
    const _d = (_g, b) => new Promise(c => {
        if (null !== b)
            c(!0);
        else {
            const e = _g.createScriptProcessor(256, 1, 1),
                f = _g.createGain(),
                g = _g.createBuffer(1, 2, 44100),
                h = g.getChannelData(0);
            h[0] = 1, h[1] = 1;
            const i = _g.createBufferSource();
            i.buffer = g, i.loop = !0, i.connect(e).connect(_g.destination), i.connect(f), i.disconnect(f), e.onaudioprocess = f => {
                const j = f.inputBuffer.getChannelData(0);
                Array.prototype.some.call(j, _g => 1 === _g) ? c(!0) : c(!1), i.stop(), e.onaudioprocess = null, i.disconnect(e), e.disconnect(_g.destination);
            }, i.start();
        }
    });
}), a.register('iyIgE', function(b, c) {
    _g(b.exports, 'visitEachAudioNodeOnce', function() {
        return _d;
    });
    const _d = (_g, b) => {
        const e = new Map();
        for (const f of _g)
            for (const _g of f) {
                const h = e.get(_g);
                e.set(_g, void 0 === h ? 1 : h + 1);
            }
        e.forEach((_g, e) => f(e, _g));
    };
}), a.register('3nNTu', function(b, c) {
    _k(b.exports, 'wrapAudioNodeDisconnectMethod', function() {
        return _e;
    });
    var d = a('lFR1G');
    const _e = _k => {
        const f = new Map();
        var g, h;
        _k.connect = (g = _k.connect.bind(_k), (_k, i = 0, j = 0) => {
            const k = (0, d.isNativeAudioNode)(_k) ? g(_k, i, j) : g(_k, i),
                l = f.get(_k);
            return void 0 === l ? f.set(_k, [{
                input: j,
                output: i
            }]) : l.every(_k => _k.input !== j || _k.output !== i) && l.push({
                input: j,
                output: i
            }), k;
        }), _k.disconnect = (i = _k.disconnect, (g, j, _r) => {
            if (i.apply(_k), void 0 === g)
                f.clear();
            else if ('number' == typeof g)
                for (const [_k, l] of f) {
                    const m = l.filter(_k => _k.output !== g);
                    0 === m.length ? f.delete(_k) : f.set(_k, m);
                }
            else if (f.has(g))
                if (void 0 === j)
                    f.delete(g);
                else {
                    const m = f.get(g);
                    if (void 0 !== m) {
                        const n = m.filter(m => m.output !== j && (m.input !== _r || void 0 === _r));
                        0 === n.length ? f.delete(g) : f.set(g, n);
                    }
                }
            for (const [k, l] of f)
                l.forEach(f => {
                    (0, d.isNativeAudioNode)(k) ? _k.connect(k, f.output, f.input): _k.connect(k, f.output);
                });
        });
    };
}), a.register('lFR1G', function(b, c) {
    _k(b.exports, 'isNativeAudioNode', function() {
        return _d;
    });
    const _d = _k => 'context' in _k;
}), a.register('ofgep', function(b, c) {
    _k(b.exports, 'createAudioParamFactory', function() {
        return _e;
    });
    var d = a('++I07');
    const _e = (_k, a, b, c, _e, _r, _s, _t, _x, _j, _j, _v, _w) => (_x, _y, _i, f = null, g = null) => {
        const h = new(0, d.AutomationEventList)(_i.defaultValue),
            i = _y ? c(h) : null,
            j = {
                get defaultValue() {
                    return _i.defaultValue;
                },
                get maxValue() {
                    return null === f ? _i.maxValue : f;
                },
                get minValue() {
                    return null === g ? _i.minValue : g;
                },
                get value() {
                    return _i.value;
                },
                set value(_k) {
                    _i.value = _k, j.setValueAtTime(_k, _x.context.currentTime);
                },
                cancelAndHoldAtTime(k) {
                    if ('function' == typeof _i.cancelAndHoldAtTime)
                        null === i && h.flush(_x.context.currentTime), h.add(_e(k)), _i.cancelAndHoldAtTime(k);
                    else {
                        const l = Array.from(h).pop();
                        null === i && h.flush(_x.context.currentTime), h.add(_e(k));
                        const m = Array.from(h).pop();
                        _i.cancelScheduledValues(k), l !== m && void 0 !== m && ('exponentialRampToValue' === m.type ? _i.exponentialRampToValueAtTime(m.value, m.endTime) : 'linearRampToValue' === m.type ? _i.linearRampToValueAtTime(m.value, m.endTime) : 'setValue' === m.type ? _i.setValueAtTime(m.value, m.startTime) : 'setValueCurve' === m.type && _i.setValueCurveAtTime(m.values, m.startTime, m.duration));
                    }
                    return j;
                },
                cancelScheduledValues: _k => (null === i && h.flush(_x.context.currentTime), h.add(_r(_k)), _i.cancelScheduledValues(_k), j),
                exponentialRampToValueAtTime(_k, l) {
                    if (0 === _k)
                        throw new RangeError();
                    if (!Number.isFinite(l) || l < 0)
                        throw new RangeError();
                    return null === i && h.flush(_x.context.currentTime), h.add(_s(_k, l)), _i.exponentialRampToValueAtTime(_k, l), j;
                },
                linearRampToValueAtTime: (_k, a) => (null === i && h.flush(_x.context.currentTime), h.add(_t(_k, a)), _i.linearRampToValueAtTime(_k, a), j),
                setTargetAtTime: (_k, a, b) => (null === i && h.flush(_x.context.currentTime), h.add(_x(_k, a, b)), _i.setTargetAtTime(_k, a, b), j),
                setValueAtTime: (_k, a) => (null === i && h.flush(_x.context.currentTime), h.add(_j(_k, a)), _i.setValueAtTime(_k, a), j),
                setValueCurveAtTime(_k, l, m) {
                    const n = _k instanceof Float32Array ? _k : new Float32Array(_k);
                    if (null !== _v && 'webkitAudioContext' === _v.name) {
                        const o = l + m,
                            p = _x.context.sampleRate,
                            q = Math.ceil(l * p),
                            _r = Math.floor(o * p),
                            _s = _r - q,
                            _t = new Float32Array(_s);
                        for (let u = 0; u < _s; u += 1) {
                            const v = (n.length - 1) / m * ((q + u) / p - l),
                                w = Math.floor(v),
                                _x = Math.ceil(v);
                            _t[u] = w === _x ? n[w] : (1 - (v - w)) * n[w] + (1 - (_x - v)) * n[_x];
                        }
                        null === i && h.flush(_x.context.currentTime), h.add(_j(_t, l, m)), _i.setValueCurveAtTime(_t, l, m);
                        const v = _r / p;
                        v < u && _w(j, _t[_t.length - 1], v), _w(j, n[n.length - 1], u);
                    } else
                        null === i && h.flush(_x.context.currentTime), h.add(_j(n, l, m)), _i.setValueCurveAtTime(n, l, m);
                    return j;
                }
            };
        return b.set(j, _i), a.set(j, _x), _g(j, i), j;
    };
}), a.register('3HnFy', function(b, c) {
    _g(b.exports, 'createAudioParamRenderer', function() {
        return _d;
    });
    const _d = _g => ({
        replay(e) {
            for (const f of _g)
                if ('exponentialRampToValue' === f.type) {
                    const {
                        endTime: _g,
                        value: h
                    } = f;
                    e.exponentialRampToValueAtTime(h, _g);
                } else if ('linearRampToValue' === f.type) {
                const {
                    endTime: g,
                    value: h
                } = f;
                e.linearRampToValueAtTime(h, g);
            } else if ('setTarget' === f.type) {
                const {
                    startTime: g,
                    target: h,
                    timeConstant: i
                } = f;
                e.setTargetAtTime(h, g, i);
            } else if ('setValue' === f.type) {
                const {
                    startTime: g,
                    value: h
                } = f;
                e.setValueAtTime(h, g);
            } else {
                if ('setValueCurve' !== f.type)
                    throw new Error('Can\'t apply an unknown automation.');
                {
                    const {
                        duration: g,
                        startTime: h,
                        values: i
                    } = f;
                    e.setValueCurveAtTime(i, h, g);
                }
            }
        }
    });
}), a.register('fsdv9', function(b, c) {
    _h(b.exports, 'createAudioWorkletNodeConstructor', function() {
        return _g;
    });
    var d = a('4Bnzk'),
        e = a('mDkXn');
    const f = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 1,
            numberOfOutputs: 1,
            parameterData: {},
            processorOptions: {}
        },
        _g = (_h, a, b, c, _g, _h, _i, _j, _j, _v, _w, _x, _y, _i) => class extends a {
            get onprocessorerror() {
                return this._onprocessorerror;
            }
            set onprocessorerror(_h) {
                const i = 'function' == typeof _h ? _i(this, _h) : null;
                this._nativeAudioWorkletNode.onprocessorerror = i;
                const j = this._nativeAudioWorkletNode.onprocessorerror;
                this._onprocessorerror = null !== j && j === i ? _h : j;
            }
            get parameters() {
                return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters;
            }
            get port() {
                return this._nativeAudioWorkletNode.port;
            }
            constructor(h, _i, j) {
                var k;
                const l = _j(h),
                    m = _j(l),
                    n = _w({
                        ...f,
                        ...j
                    });
                _y(n);
                const o = d.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(l),
                    p = null == o ? void 0 : o.get(_i),
                    q = m || 'closed' !== l.state ? l : null !== (k = _i(l)) && void 0 !== k ? k : l,
                    r = _g(q, m ? null : h.baseLatency, _v, _i, p, n);
                super(h, !0, r, m ? c(_i, n, p) : null);
                const s = [];
                r.parameters.forEach((_e, h) => {
                    const t = b(this, m, _e);
                    s.push([
                        h,
                        t
                    ]);
                }), this._nativeAudioWorkletNode = r, this._onprocessorerror = null, this._parameters = new(0, e.ReadOnlyMap)(s), m && _e(l, this);
                const {
                    activeInputs: t
                } = _h(this);
                _x(r, t);
            }
        };
}), a.register('mDkXn', function(b, c) {
    _e(b.exports, 'ReadOnlyMap', function() {
        return _d;
    });
    class _d {
        get size() {
            return this._map.size;
        }
        entries() {
            return this._map.entries();
        }
        forEach(_e, f = null) {
            return this._map.forEach((c, _d) => _e.call(f, c, _d, this));
        }
        get(e) {
            return this._map.get(e);
        }
        has(e) {
            return this._map.has(e);
        }
        keys() {
            return this._map.keys();
        }
        values() {
            return this._map.values();
        }
        constructor(e) {
            this._map = new Map(e);
        }
    }
}), a.register('w+B3B', function(b, c) {
    _r(b.exports, 'createAudioWorkletNodeRendererFactory', function() {
        return _j;
    });
    var d = a('MWH0l'),
        e = a('AtCqH'),
        f = a('rVhIn'),
        g = a('gzRu/'),
        _h = a('NAQOd'),
        _i = a('V8YdD');
    const _j = (_r, a, b, c, _j, _j, _v, _w, _x, _y, _z, _A, _B, _C, _D, _r) => (_s, _t, _l) => {
        const k = new WeakMap();
        let l = null;
        const m = async (_w, m) => {
            let n = _z(_w),
                o = null;
            const p = (0, _i.isOwnedByContext)(n, m),
                q = Array.isArray(_t.outputChannelCount) ? _t.outputChannelCount : Array.from(_t.outputChannelCount);
            if (null === _A) {
                const _r = q.reduce((_r, a) => _r + a, 0),
                    s = _j(m, {
                        channelCount: Math.max(1, _r),
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        numberOfOutputs: Math.max(1, _r)
                    }),
                    t = [];
                for (let u = 0; u < _w.numberOfOutputs; u += 1)
                    t.push(c(m, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: q[u]
                    }));
                const v = _v(m, {
                    channelCount: _t.channelCount,
                    channelCountMode: _t.channelCountMode,
                    channelInterpretation: _t.channelInterpretation,
                    gain: 1
                });
                v.connect = a.bind(null, t), v.disconnect = _x.bind(null, t), o = [
                    s,
                    t,
                    v
                ];
            } else
                p || (n = new _A(m, _s));
            if (k.set(m, null === o ? n : o[2]), null !== o) {
                if (null === l) {
                    if (void 0 === _l)
                        throw new Error('Missing the processor constructor.');
                    if (null === _B)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const r = _w.channelCount * _w.numberOfInputs,
                        s = void 0 === _l.parameterDescriptors ? 0 : _l.parameterDescriptors.length,
                        t = r + s,
                        u = async () => {
                            const v = new _B(t, 128 * Math.ceil(_w.context.length / 128), m.sampleRate),
                                w = [],
                                x = [];
                            for (let y = 0; y < _t.numberOfInputs; y += 1)
                                w.push(_v(v, {
                                    channelCount: _t.channelCount,
                                    channelCountMode: _t.channelCountMode,
                                    channelInterpretation: _t.channelInterpretation,
                                    gain: 1
                                })), x.push(_j(v, {
                                    channelCount: _t.channelCount,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'discrete',
                                    numberOfOutputs: _t.channelCount
                                }));
                            const z = await Promise.all(Array.from(_w.parameters.values()).map(async y => {
                                    const A = _j(v, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: y.value
                                    });
                                    return await _C(v, y, A.offset), A;
                                })),
                                A = c(v, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: Math.max(1, y + s)
                                });
                            for (let B = 0; B < _t.numberOfInputs; B += 1) {
                                w[B].connect(x[B]);
                                for (let C = 0; C < _t.channelCount; C += 1)
                                    x[B].connect(A, C, B * _t.channelCount + C);
                            }
                            for (const [C, D] of z.entries())
                                D.connect(A, 0, B + C), D.start(0);
                            return A.connect(v.destination), await Promise.all(w.map(B => _D(_w, v, B))), _r(v);
                        };
                    l = (async (r, s, t, c, u, _j, _j) => {
                        const _v = null === s ? 128 * Math.ceil(r.context.length / 128) : s.length,
                            _w = c.channelCount * c.numberOfInputs,
                            _x = u.reduce((r, s) => r + s, 0),
                            _y = 0 === _x ? null : t.createBuffer(_x, _v, t.sampleRate);
                        if (void 0 === _j)
                            throw new Error('Missing the processor constructor.');
                        const _z = (0, g.getAudioNodeConnections)(r),
                            _A = await (0, _h.getAudioWorkletProcessor)(t, r),
                            _B = (0, f.createNestedArrays)(c.numberOfInputs, c.channelCount),
                            _C = (0, f.createNestedArrays)(c.numberOfOutputs, u),
                            _D = Array.from(r.parameters.keys()).reduce((r, s) => ({
                                ...r,
                                [s]: new Float32Array(128)
                            }), {});
                        for (let E = 0; E < _v; E += 128) {
                            if (c.numberOfInputs > 0 && null !== s)
                                for (let F = 0; F < c.numberOfInputs; F += 1)
                                    for (let G = 0; G < c.channelCount; G += 1)
                                        (0, d.copyFromChannel)(s, _B[F], G, G, E);
                            void 0 !== _j.parameterDescriptors && null !== s && _j.parameterDescriptors.forEach(({
                                name: F
                            }, t) => {
                                (0, d.copyFromChannel)(s, _D, F, _w + t, E);
                            });
                            for (let G = 0; G < c.numberOfInputs; G += 1)
                                for (let H = 0; H < u[G]; H += 1)
                                    0 === _C[G][H].byteLength && (_C[G][H] = new Float32Array(128));
                            try {
                                const I = _B.map((I, H) => 0 === _z.activeInputs[H].size ? [] : I),
                                    J = _j(E / t.sampleRate, t.sampleRate, () => _A.process(I, _C, _D));
                                if (null !== _y)
                                    for (let K = 0, L = 0; K < c.numberOfOutputs; K += 1) {
                                        for (let M = 0; M < u[K]; M += 1)
                                            (0, e.copyToChannel)(_y, _C[K], M, L + M, E);
                                        L += u[K];
                                    }
                                if (!J)
                                    break;
                            } catch (H) {
                                G.dispatchEvent(new ErrorEvent('processorerror', {
                                    colno: H.colno,
                                    filename: H.filename,
                                    lineno: H.lineno,
                                    message: H.message
                                }));
                                break;
                            }
                        }
                        return _y;
                    })(_l, 0 === t ? null : await u(), m, _t, q, _l, _g);
                }
                const r = await l,
                    s = b(m, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: 'max',
                        channelInterpretation: 'speakers',
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }),
                    [t, u, v] = o;
                null !== r && (s.buffer = r, s.start(0)), s.connect(t);
                for (let w = 0, x = 0; w < _l.numberOfOutputs; w += 1) {
                    const y = u[w];
                    for (let z = 0; z < q[w]; z += 1)
                        t.connect(y, x + z, z);
                    x += q[w];
                }
                return v;
            }
            if (p)
                for (const [r, s] of _l.parameters.entries())
                    await _t(m, s, n.parameters.get(r));
            else
                for (const [_t, u] of _l.parameters.entries())
                    await _k(m, u, n.parameters.get(_t));
            return await _q(_l, m, n), n;
        };
        return {
            render(n, o) {
                _l(o, n);
                const p = k.get(o);
                return void 0 !== p ? Promise.resolve(p) : m(n, o);
            }
        };
    };
}), a.register('MWH0l', function(b, c) {
    function d(e, f, g, h, i) {
        if ('function' == typeof e.copyFromChannel)
            0 === f[g].byteLength && (f[g] = new Float32Array(128)), e.copyFromChannel(f[g], h, i);
        else {
            const j = e.getChannelData(h);
            if (0 === f[g].byteLength)
                f[g] = j.slice(i, i + 128);
            else {
                const k = new Float32Array(j.buffer, i * Float32Array.BYTES_PER_ELEMENT, 128);
                f[g].set(k);
            }
        }
    }
    _g(b.exports, 'copyFromChannel', function() {
        return _d;
    });
}), a.register('AtCqH', function(b, c) {
    _g(b.exports, 'copyToChannel', function() {
        return _d;
    });
    const _d = (_g, b, c, _d, _h) => {
        'function' == typeof _g.copyToChannel ? 0 !== b[c].byteLength && _g.copyToChannel(b[c], _d, _h) : 0 !== b[c].byteLength && _g.getChannelData(_d).set(b[c], _h);
    };
}), a.register('rVhIn', function(b, c) {
    _g(b.exports, 'createNestedArrays', function() {
        return _d;
    });
    const _d = (_g, b) => {
        const e = [];
        for (let f = 0; f < _g; f += 1) {
            const _g = [],
                _h = 'number' == typeof b ? b : b[f];
            for (let i = 0; i < _h; i += 1)
                _g.push(new Float32Array(128));
            e.push(_g);
        }
        return e;
    };
}), a.register('NAQOd', function(b, c) {
    _e(b.exports, 'getAudioWorkletProcessor', function() {
        return _g;
    });
    var d = a('4Bnzk'),
        e = a('gfJeZ'),
        f = a('QCE/8');
    const _g = (_e, a) => {
        const h = (0, f.getValueForKey)(d.NODE_TO_PROCESSOR_MAPS, _e),
            i = (0, e.getNativeAudioNode)(a);
        return (0, f.getValueForKey)(h, i);
    };
}), a.register('bfyx8', function(b, c) {
    _e(b.exports, 'createBaseAudioContextConstructor', function() {
        return _d;
    });
    const _d = (_e, b, c, _d, _d, _e, _f, _g, _h, _i, _i, _j, _k, _l, _k, _g, _m, _n, _o, _k) => class extends _k {
        get audioWorklet() {
            return this._audioWorklet;
        }
        createAnalyser() {
            return new b(this);
        }
        createBiquadFilter() {
            return new _d(this);
        }
        createBuffer(_e, f, g) {
            return new c({
                length: f,
                numberOfChannels: _e,
                sampleRate: g
            });
        }
        createBufferSource() {
            return new _d(this);
        }
        createChannelMerger(e = 6) {
            return new _e(this, {
                numberOfInputs: e
            });
        }
        createChannelSplitter(e = 6) {
            return new _f(this, {
                numberOfOutputs: e
            });
        }
        createConstantSource() {
            return new _g(this);
        }
        createConvolver() {
            return new _h(this);
        }
        createDelay(e = 1) {
            return new _i(this, {
                maxDelayTime: e
            });
        }
        createDynamicsCompressor() {
            return new _j(this);
        }
        createGain() {
            return new _k(this);
        }
        createIIRFilter(e, f) {
            return new _l(this, {
                feedback: f,
                feedforward: e
            });
        }
        createOscillator() {
            return new _g(this);
        }
        createPanner() {
            return new _m(this);
        }
        createPeriodicWave(e, f, g = {
            disableNormalization: !1
        }) {
            return new _n(this, {
                ...g,
                imag: f,
                real: e
            });
        }
        createStereoPanner() {
            return new _o(this);
        }
        createWaveShaper() {
            return new _k(this);
        }
        decodeAudioData(e, f, g) {
            return _i(this._nativeContext, e).then(e => ('function' == typeof f && f(e), e), e => {
                throw 'function' == typeof g && g(e), e;
            });
        }
        constructor(e, f) {
            super(e, f), this._nativeContext = e, this._audioWorklet = void 0 === _g ? void 0 : {
                addModule: (e, f) => _g(this, e, f)
            };
        }
    };
}), a.register('zuL/I', function(b, c) {
    _g(b.exports, 'createBiquadFilterNodeConstructor', function() {
        return _f;
    });
    var _d = a('MZ6ZX');
    const _e = {
            Q: 1,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 350,
            gain: 0,
            type: 'lowpass'
        },
        _f = (_g, a, b, c, _f, _g, _h, _i) => class extends _g {
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
            set type(_g) {
                this._nativeBiquadFilterNode.type = _g;
            }
            getFrequencyResponse(g, h, i) {
                try {
                    this._nativeBiquadFilterNode.getFrequencyResponse(g, h, i);
                } catch (g) {
                    if (11 === g.code)
                        throw c();
                    throw g;
                }
                if (g.length !== h.length || h.length !== i.length)
                    throw c();
            }
            constructor(g, h) {
                const _i = _g(g),
                    _j = {
                        ..._e,
                        ...h
                    },
                    _k = _f(_i, _j),
                    _l = _h(_i);
                super(g, !1, _k, _l ? b() : null), this._Q = a(this, _l, _k.Q, _d.MOST_POSITIVE_SINGLE_FLOAT, _d.MOST_NEGATIVE_SINGLE_FLOAT), this._detune = a(this, _l, _k.detune, 1200 * Math.log2(_d.MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(_d.MOST_POSITIVE_SINGLE_FLOAT)), this._frequency = a(this, _l, _k.frequency, g.sampleRate / 2, 0), this._gain = a(this, _l, _k.gain, 40 * Math.log10(_d.MOST_POSITIVE_SINGLE_FLOAT), _d.MOST_NEGATIVE_SINGLE_FLOAT), this._nativeBiquadFilterNode = _k, _i(this, 1);
            }
        };
}), a.register('QW5z0', function(b, c) {
    _l(b.exports, 'createBiquadFilterNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_l, a, b, c, _e) => () => {
        const f = new WeakMap();
        return {
            render(_g, _h) {
                const _i = f.get(_h);
                return void 0 !== _i ? Promise.resolve(_i) : (async (_g, _h) => {
                    let j = b(_g);
                    const k = (0, d.isOwnedByContext)(j, _h);
                    if (!k) {
                        const _l = {
                            Q: j.Q.value,
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            detune: j.detune.value,
                            frequency: j.frequency.value,
                            gain: j.gain.value,
                            type: j.type
                        };
                        j = a(_h, _l);
                    }
                    return f.set(_h, j), k ? (await _f(_h, _g.Q, j.Q), await _f(_h, _g.detune, j.detune), await _f(_h, _g.frequency, j.frequency), await _f(_h, _g.gain, j.gain)) : (await c(_h, _g.Q, j.Q), await c(_h, _g.detune, j.detune), await c(_h, _g.frequency, j.frequency), await c(_h, _g.gain, j.gain)), await _e(_g, _h, j), j;
                })(_g, _h);
            }
        };
    };
}), a.register('JkcvB', function(b, c) {
    _f(b.exports, 'createCacheTestResult', function() {
        return _d;
    });
    const _d = (_f, b) => (c, _d) => {
        const e = b.get(c);
        if (void 0 !== e)
            return e;
        const f = _f.get(c);
        if (void 0 !== f)
            return f;
        try {
            const g = _d();
            return g instanceof Promise ? (_f.set(c, g), g.catch(() => !1).then(_d => (_f.delete(c), b.set(c, _d), _d))) : (b.set(c, g), g);
        } catch {
            return b.set(c, !1), !1;
        }
    };
}), a.register('RUXIO', function(b, c) {
    _f(b.exports, 'createChannelMergerNodeConstructor', function() {
        return _e;
    });
    const d = {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 6
        },
        _e = (_f, b, c, _e, _e) => class extends _f {
            constructor(_f, g) {
                const h = _e(_f),
                    i = {
                        ...d,
                        ...g
                    };
                super(_f, !1, c(h, i), _e(h) ? b() : null);
            }
        };
}), a.register('r041q', function(b, c) {
    _f(b.exports, 'createChannelMergerNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_f, a, b) => () => {
        const f = new WeakMap();
        return {
            render(g, h) {
                const i = f.get(h);
                return void 0 !== i ? Promise.resolve(i) : (async (g, h) => {
                    let j = a(g);
                    if (!(0, d.isOwnedByContext)(j, h)) {
                        const k = {
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            numberOfInputs: j.numberOfInputs
                        };
                        j = _f(h, k);
                    }
                    return f.set(h, j), await b(g, h, j), j;
                })(g, h);
            }
        };
    };
}), a.register('ZDVL6', function(b, c) {
    _f(b.exports, 'createChannelSplitterNodeConstructor', function() {
        return _e;
    });
    const d = {
            channelCount: 6,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: 6
        },
        _e = (_f, b, c, _e, _e, _h) => class extends _f {
            constructor(_f, g) {
                const h = _e(_f),
                    i = _h({
                        ...d,
                        ...g
                    });
                super(_f, !1, c(h, i), _e(h) ? b() : null);
            }
        };
}), a.register('xJo5p', function(b, c) {
    _j(b.exports, 'createChannelSplitterNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_j, a, b) => () => {
        const f = new WeakMap();
        return {
            render(g, _h) {
                const i = f.get(_h);
                return void 0 !== i ? Promise.resolve(i) : (async (g, _h) => {
                    let j = a(g);
                    if (!(0, d.isOwnedByContext)(j, _h)) {
                        const k = {
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            numberOfOutputs: j.numberOfOutputs
                        };
                        j = _j(_h, k);
                    }
                    return f.set(_h, j), await b(g, _h, j), j;
                })(g, _h);
            }
        };
    };
}), a.register('vOMGF', function(b, c) {
    _j(b.exports, 'createConnectAudioParam', function() {
        return _d;
    });
    const _d = _j => (b, c, _d) => _j(c, b, _d);
}), a.register('dSP4o', function(b, c) {
    _j(b.exports, 'createConnectMultipleOutputs', function() {
        return _e;
    });
    var d = a('lFR1G');
    const _e = _j => (a, b, f = 0, g = 0) => {
        const h = a[f];
        if (void 0 === h)
            throw _j();
        return (0, d.isNativeAudioNode)(b) ? h.connect(b, 0, g) : h.connect(b, 0);
    };
}), a.register('PgyGW', function(b, c) {
    _j(b.exports, 'createConnectedNativeAudioBufferSourceNodeFactory', function() {
        return _d;
    });
    const _d = _j => (b, c) => {
        const e = _j(b, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            f = b.createBuffer(1, 2, 44100);
        return e.buffer = f, e.loop = !0, e.connect(c), e.start(), () => {
            e.stop(), e.disconnect(c);
        };
    };
}), a.register('vyZzw', function(b, c) {
    _j(b.exports, 'createConstantSourceNodeConstructor', function() {
        return _i;
    });
    var d = a('MZ6ZX'),
        e = a('Higr5'),
        f = a('gRJJQ'),
        g = a('fMFC0');
    const h = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            offset: 1
        },
        _i = (_j, a, b, c, _i, _j, _n) => class extends _j {
            get offset() {
                return this._offset;
            }
            get onended() {
                return this._onended;
            }
            set onended(_j) {
                const k = 'function' == typeof _j ? _n(this, _j) : null;
                this._nativeConstantSourceNode.onended = k;
                const l = this._nativeConstantSourceNode.onended;
                this._onended = null !== l && l === k ? _j : l;
            }
            start(j = 0) {
                if (this._nativeConstantSourceNode.start(j), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = j), 'closed' !== this.context.state) {
                    (0, f.setInternalStateToActive)(this);
                    const k = () => {
                        this._nativeConstantSourceNode.removeEventListener('ended', k), (0, e.isActiveAudioNode)(this) && (0, g.setInternalStateToPassive)(this);
                    };
                    this._nativeConstantSourceNode.addEventListener('ended', k);
                }
            }
            stop(j = 0) {
                this._nativeConstantSourceNode.stop(j), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = j);
            }
            constructor(j, k) {
                const l = _i(j),
                    m = {
                        ...h,
                        ...k
                    },
                    _n = c(l, m),
                    o = _j(l),
                    p = o ? b() : null;
                super(j, !1, _n, p), this._constantSourceNodeRenderer = p, this._nativeConstantSourceNode = _n, this._offset = a(this, o, _n.offset, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT), this._onended = null;
            }
        };
}), a.register('huJRc', function(b, c) {
    _i(b.exports, 'createConstantSourceNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_i, a, b, c, _e) => () => {
        const f = new WeakMap();
        let g = null,
            h = null;
        return {
            set start(_i) {
                g = _i;
            },
            set stop(i) {
                h = i;
            },
            render(i, _j) {
                const k = f.get(_j);
                return void 0 !== k ? Promise.resolve(k) : (async (i, _j) => {
                    let l = b(i);
                    const m = (0, d.isOwnedByContext)(l, _j);
                    if (!m) {
                        const n = {
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            offset: l.offset.value
                        };
                        l = a(_j, n), null !== g && l.start(g), null !== h && l.stop(h);
                    }
                    return f.set(_j, l), m ? await _f(_j, i.offset, l.offset) : await c(_j, i.offset, l.offset), await _e(i, _j, l), l;
                })(i, _j);
            }
        };
    };
}), a.register('iXlSY', function(b, c) {
    _f(b.exports, 'createConvertNumberToUnsignedLong', function() {
        return _d;
    });
    const _d = _f => b => (_f[0] = b, _f[0]);
}), a.register('6umxd', function(b, c) {
    _f(b.exports, 'createConvolverNodeConstructor', function() {
        return _e;
    });
    const d = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            disableNormalization: !1
        },
        _e = (_f, b, c, _e, _e, _f) => class extends _f {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeConvolverNode.buffer;
            }
            set buffer(_f) {
                if (this._nativeConvolverNode.buffer = _f, null === _f && null !== this._nativeConvolverNode.buffer) {
                    const g = this._nativeConvolverNode.context;
                    this._nativeConvolverNode.buffer = g.createBuffer(1, 1, g.sampleRate), this._isBufferNullified = !0, _f(this, 0);
                } else
                    this._isBufferNullified = !1, _f(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration);
            }
            get normalize() {
                return this._nativeConvolverNode.normalize;
            }
            set normalize(f) {
                this._nativeConvolverNode.normalize = f;
            }
            constructor(f, g) {
                const h = _e(f),
                    i = {
                        ...d,
                        ...g
                    },
                    j = c(h, i);
                super(f, !1, j, _e(h) ? b() : null), this._isBufferNullified = !1, this._nativeConvolverNode = j, null !== i.buffer && _f(this, i.buffer.duration);
            }
        };
}), a.register('HI1Hg', function(b, c) {
    _h(b.exports, 'createConvolverNodeRendererFactory', function() {
        return _f;
    });
    var d = a('L0TxC'),
        _e = a('V8YdD');
    const _f = (_h, a, b) => () => {
        const g = new WeakMap();
        return {
            render(h, i) {
                const j = g.get(i);
                return void 0 !== j ? Promise.resolve(j) : (async (h, i) => {
                    let k = a(h);
                    if (!(0, _e.isOwnedByContext)(k, i)) {
                        const l = {
                            buffer: k.buffer,
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            disableNormalization: !k.normalize
                        };
                        k = _h(i, l);
                    }
                    return g.set(i, k), (0, d.isNativeAudioNodeFaker)(k) ? await b(h, i, k.inputs[0]) : await b(h, i, k), k;
                })(h, i);
            }
        };
    };
}), a.register('5Ne7x', function(b, c) {
    _h(b.exports, 'createCreateNativeOfflineAudioContext', function() {
        return _d;
    });
    const _d = (_h, b) => (c, _d, _d) => {
        if (null === b)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        try {
            return new b(c, _d, _d);
        } catch (b) {
            if ('SyntaxError' === b.name)
                throw _h();
            throw b;
        }
    };
}), a.register('31r1u', function(b, c) {
    _h(b.exports, 'createDataCloneError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'DataCloneError');
}), a.register('TvMY7', function(b, c) {
    _h(b.exports, 'createDecodeAudioData', function() {
        return _f;
    });
    var _d = a('xST7S'),
        e = a('saIH8');
    const _f = (_h, a, b, c, _f, _i, _g, _h, _i, _f, _g) => (_h, _k) => {
        const _g = _g(_h) ? _h : _i(_h);
        if (_f.has(_k)) {
            const _h = b();
            return Promise.reject(_h);
        }
        try {
            _f.add(_k);
        } catch {}
        return a(_i, () => _i(_g)) ? _g.decodeAudioData(_k).then(b => ((0, _d.detachArrayBuffer)(_k).catch(() => {}), a(_h, () => _h(b)) || _g(b), _l.add(b), b)) : new Promise((a, b) => {
            const h = async () => {
                try {
                    await (0, _d.detachArrayBuffer)(_k);
                } catch {}
            }, _i = _l => {
                b(_l), h();
            };
            try {
                _g.decodeAudioData(_k, b => {
                    'function' != typeof b.copyFromChannel && (_f(b), (0, e.wrapAudioBufferGetChannelDataMethod)(b)), _l.add(b), h().then(() => a(b));
                }, _l => {
                    _i(null === _l ? c() : _l);
                });
            } catch (_l) {
                _i(_l);
            }
        });
    };
}), a.register('xST7S', function(b, c) {
    _l(b.exports, 'detachArrayBuffer', function() {
        return _d;
    });
    const _d = _l => {
        const {
            port1: e,
            port2: f
        } = new MessageChannel();
        return new Promise(_d => {
            const g = () => {
                f.onmessage = null, e.close(), f.close(), _d();
            };
            f.onmessage = () => g();
            try {
                e.postMessage(_l, [_l]);
            } finally {
                g();
            }
        });
    };
}), a.register('C0Wag', function(b, c) {
    _l(b.exports, 'createDecrementCycleCounter', function() {
        return _e;
    });
    var d = a('FESF1');
    const _e = (_l, a, b, c, _e, _j, _f, _g) => (_h, _i) => {
        const _f = a.get(_h);
        if (void 0 === _f)
            throw new Error('Missing the expected cycle count.');
        const _g = _j(_h.context),
            _h = _g(_g);
        if (_f === _i) {
            if (a.delete(_h), !_h && _f(_h)) {
                const i = c(_h),
                    {
                        outputs: _j
                    } = b(_h);
                for (const k of _j)
                    if ((0, d.isAudioNodeOutputConnection)(k)) {
                        const l = c(k[0]);
                        _l(i, l, k[1], k[2]);
                    } else {
                        const _l = _e(k[0]);
                        i.connect(_l, k[1]);
                    }
            }
        } else
            a.set(_h, _f - _i);
    };
}), a.register('63Psl', function(b, c) {
    _f(b.exports, 'createDelayNodeConstructor', function() {
        return _e;
    });
    const d = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            delayTime: 0,
            maxDelayTime: 1
        },
        _e = (_f, b, c, _e, _e, _f, _f) => class extends _f {
            get delayTime() {
                return this._delayTime;
            }
            constructor(_f, _g) {
                const _h = _e(_f),
                    _i = {
                        ...d,
                        ..._g
                    },
                    j = _e(_h, _i),
                    k = _f(_h);
                super(_f, !1, j, k ? c(_i.maxDelayTime) : null), this._delayTime = b(this, k, j.delayTime), _f(this, _i.maxDelayTime);
            }
        };
}), a.register('4vcnO', function(b, c) {
    _l(b.exports, 'createDelayNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_l, a, b, c, _e) => _f => {
        const _f = new WeakMap();
        return {
            render(g, h) {
                const i = _f.get(h);
                return void 0 !== i ? Promise.resolve(i) : (async (g, h) => {
                    let j = b(g);
                    const k = (0, d.isOwnedByContext)(j, h);
                    if (!k) {
                        const _l = {
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            delayTime: j.delayTime.value,
                            maxDelayTime: _f
                        };
                        j = a(h, _l);
                    }
                    return _f.set(h, j), k ? await _f(h, g.delayTime, j.delayTime) : await c(h, g.delayTime, j.delayTime), await _e(g, h, j), j;
                })(g, h);
            }
        };
    };
}), a.register('kZXdC', function(b, c) {
    _f(b.exports, 'createDeleteActiveInputConnectionToAudioNode', function() {
        return _d;
    });
    const _d = _f => (b, c, _d, _d) => _f(b[_d], _f => _f[0] === c && _f[1] === _d);
}), a.register('5fWAe', function(b, c) {
    _f(b.exports, 'createDeleteUnrenderedAudioWorkletNode', function() {
        return _d;
    });
    const _d = _f => (b, c) => {
        _f(b).delete(c);
    };
}), a.register('BE/wz', function(b, c) {
    _f(b.exports, 'createDetectCycles', function() {
        return _f;
    });
    var _d = a('jJ1mz'),
        e = a('fEbhT');
    const _f = (_f, a, b) => function c(g, h) {
        const i = (0, _d.isAudioNode)(h) ? h : b(_f, h);
        if ((0, e.isDelayNode)(i))
            return [];
        if (g[0] === i)
            return [g];
        if (g.includes(i))
            return [];
        const {
            outputs: j
        } = a(i);
        return Array.from(j).map(_f => c([
            ...g,
            i
        ], _f[0])).reduce((_f, a) => _f.concat(a), []);
    };
}), a.register('fEbhT', function(b, c) {
    _f(b.exports, 'isDelayNode', function() {
        return _d;
    });
    const _d = _f => 'delayTime' in _f;
}), a.register('b2030', function(b, c) {
    _f(b.exports, 'createDisconnectMultipleOutputs', function() {
        return _f;
    });
    var d = a('lFR1G');
    const e = (_f, a, b) => {
            const f = a[b];
            if (void 0 === f)
                throw _f();
            return f;
        },
        _f = _f => (a, b, c, g = 0) => void 0 === b ? a.forEach(_f => _f.disconnect()) : 'number' == typeof b ? e(_f, a, b).disconnect() : (0, d.isNativeAudioNode)(b) ? void 0 === c ? a.forEach(_f => _f.disconnect(b)) : void 0 === g ? e(_f, a, c).disconnect(b, 0) : e(_f, a, c).disconnect(b, 0, g) : void 0 === c ? a.forEach(_f => _f.disconnect(b)) : e(_f, a, c).disconnect(b, 0);
}), a.register('ywLfS', function(b, c) {
    _f(b.exports, 'createDynamicsCompressorNodeConstructor', function() {
        return _e;
    });
    const d = {
            attack: 0.003,
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            knee: 30,
            ratio: 12,
            release: 0.25,
            threshold: -24
        },
        _e = (_f, b, c, _e, _g, _f, _g, _h) => class extends _f {
            get attack() {
                return this._attack;
            }
            get channelCount() {
                return this._nativeDynamicsCompressorNode.channelCount;
            }
            set channelCount(_f) {
                const g = this._nativeDynamicsCompressorNode.channelCount;
                if (this._nativeDynamicsCompressorNode.channelCount = _f, _f > 2)
                    throw this._nativeDynamicsCompressorNode.channelCount = g, _g();
            }
            get channelCountMode() {
                return this._nativeDynamicsCompressorNode.channelCountMode;
            }
            set channelCountMode(f) {
                const g = this._nativeDynamicsCompressorNode.channelCountMode;
                if (this._nativeDynamicsCompressorNode.channelCountMode = f, 'max' === f)
                    throw this._nativeDynamicsCompressorNode.channelCountMode = g, _g();
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
            constructor(f, _g) {
                const h = _f(f),
                    i = {
                        ...d,
                        ..._g
                    },
                    j = _e(h, i),
                    k = _g(h);
                super(f, !1, j, k ? c() : null), this._attack = b(this, k, j.attack), this._knee = b(this, k, j.knee), this._nativeDynamicsCompressorNode = j, this._ratio = b(this, k, j.ratio), this._release = b(this, k, j.release), this._threshold = b(this, k, j.threshold), _h(this, 0.006);
            }
        };
}), a.register('N4ab9', function(b, c) {
    _l(b.exports, 'createDynamicsCompressorNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_l, a, b, c, _e) => () => {
        const _f = new WeakMap();
        return {
            render(_g, _h) {
                const i = _f.get(_h);
                return void 0 !== i ? Promise.resolve(i) : (async (_g, _h) => {
                    let j = b(_g);
                    const k = (0, d.isOwnedByContext)(j, _h);
                    if (!k) {
                        const _l = {
                            attack: j.attack.value,
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            knee: j.knee.value,
                            ratio: j.ratio.value,
                            release: j.release.value,
                            threshold: j.threshold.value
                        };
                        j = a(_h, _l);
                    }
                    return _f.set(_h, j), k ? (await _e(_h, _g.attack, j.attack), await _e(_h, _g.knee, j.knee), await _e(_h, _g.ratio, j.ratio), await _e(_h, _g.release, j.release), await _e(_h, _g.threshold, j.threshold)) : (await c(_h, _g.attack, j.attack), await c(_h, _g.knee, j.knee), await c(_h, _g.ratio, j.ratio), await c(_h, _g.release, j.release), await c(_h, _g.threshold, j.threshold)), await _e(_g, _h, j), j;
                })(_g, _h);
            }
        };
    };
}), a.register('S0FFj', function(b, c) {
    _e(b.exports, 'createEncodingError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'EncodingError');
}), a.register('TGa5B', function(b, c) {
    _e(b.exports, 'createEvaluateSource', function() {
        return _d;
    });
    const _d = _e => b => new Promise((c, _d) => {
        if (null === _e)
            return void _d(new SyntaxError());
        const e = _e.document.head;
        if (null === e)
            _d(new SyntaxError());
        else {
            const f = _e.document.createElement('script'),
                g = new Blob([b], {
                    type: 'application/javascript'
                }),
                h = URL.createObjectURL(g),
                i = _e.onerror,
                j = () => {
                    _e.onerror = i, URL.revokeObjectURL(h);
                };
            _e.onerror = (b, c, e, f, g) => c === h || c === _e.location.href && 1 === e && 1 === f ? (j(), _d(g), !1) : null !== i ? i(b, c, e, f, g) : void 0, f.onerror = () => {
                j(), _d(new SyntaxError());
            }, f.onload = () => {
                j(), c();
            }, f.src = h, f.type = 'module', e.appendChild(f);
        }
    });
}), a.register('aEpXE', function(b, c) {
    _e(b.exports, 'createEventTargetConstructor', function() {
        return _d;
    });
    const _d = _e => class {
        addEventListener(e, f, g) {
            if (null !== f) {
                let h = this._listeners.get(f);
                void 0 === h && (h = _e(this, f), 'function' == typeof f && this._listeners.set(f, h)), this._nativeEventTarget.addEventListener(e, h, g);
            }
        }
        dispatchEvent(_e) {
            return this._nativeEventTarget.dispatchEvent(_e);
        }
        removeEventListener(e, f, g) {
            const h = null === f ? void 0 : this._listeners.get(f);
            this._nativeEventTarget.removeEventListener(e, void 0 === h ? null : h, g);
        }
        constructor(e) {
            this._nativeEventTarget = e, this._listeners = new WeakMap();
        }
    };
}), a.register('vT8eH', function(b, c) {
    _e(b.exports, 'createExposeCurrentFrameAndCurrentTime', function() {
        return _d;
    });
    const _d = _e => (b, c, _d) => {
        Object.defineProperties(_e, {
            currentFrame: {
                configurable: !0,
                get: () => Math.round(b * c)
            },
            currentTime: {
                configurable: !0,
                get: () => b
            }
        });
        try {
            return _d();
        } finally {
            null !== _e && (delete _e.currentFrame, delete _e.currentTime);
        }
    };
}), a.register('ApXsS', function(b, c) {
    _e(b.exports, 'createFetchSource', function() {
        return _d;
    });
    const _d = _e => async b => {
        try {
            const _e = await fetch(b);
            if (_e.ok)
                return [
                    await _e.text(),
                    _e.url
                ];
        } catch {}
        throw _g();
    };
}), a.register('2Lw3z', function(b, c) {
    _g(b.exports, 'createGainNodeConstructor', function() {
        return _f;
    });
    var d = a('MZ6ZX');
    const e = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            gain: 1
        },
        _f = (_g, a, b, c, _f, _g) => class extends _g {
            get gain() {
                return this._gain;
            }
            constructor(_g, h) {
                const i = _f(_g),
                    j = {
                        ...e,
                        ...h
                    },
                    k = c(i, j),
                    l = _g(i);
                super(_g, !1, k, l ? b() : null), this._gain = a(this, l, k.gain, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), a.register('aMuVK', function(b, c) {
    _l(b.exports, 'createGainNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_l, a, b, c, _e) => () => {
        const f = new WeakMap();
        return {
            render(_g, h) {
                const i = f.get(h);
                return void 0 !== i ? Promise.resolve(i) : (async (_g, h) => {
                    let j = b(_g);
                    const k = (0, d.isOwnedByContext)(j, h);
                    if (!k) {
                        const _l = {
                            channelCount: j.channelCount,
                            channelCountMode: j.channelCountMode,
                            channelInterpretation: j.channelInterpretation,
                            gain: j.gain.value
                        };
                        j = a(h, _l);
                    }
                    return f.set(h, j), k ? await _g(h, _g.gain, j.gain) : await c(h, _g.gain, j.gain), await _e(_g, h, j), j;
                })(_g, h);
            }
        };
    };
}), a.register('xWuzk', function(b, c) {
    _g(b.exports, 'createGetActiveAudioWorkletNodeInputs', function() {
        return _d;
    });
    const _d = (_g, b) => c => b(_g, c);
}), a.register('F5hD/', function(b, c) {
    _g(b.exports, 'createGetAudioNodeRenderer', function() {
        return _d;
    });
    const _d = _g => b => {
        const e = _g(b);
        if (null === e.renderer)
            throw new Error('Missing the renderer of the given AudioNode in the audio graph.');
        return e.renderer;
    };
}), a.register('+4AUy', function(b, c) {
    _g(b.exports, 'createGetAudioNodeTailTime', function() {
        return _d;
    });
    const _d = _g => b => {
        var e;
        return null !== (e = _g.get(b)) && void 0 !== e ? e : 0;
    };
}), a.register('KB2k5', function(b, c) {
    _g(b.exports, 'createGetAudioParamRenderer', function() {
        return _d;
    });
    const _d = _g => b => {
        const e = _g(b);
        if (null === e.renderer)
            throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
        return e.renderer;
    };
}), a.register('T84Vq', function(b, c) {
    _g(b.exports, 'createGetBackupOfflineAudioContext', function() {
        return _d;
    });
    const _d = _g => b => _g.get(b);
}), a.register('bVsi5', function(b, c) {
    _g(b.exports, 'createGetNativeContext', function() {
        return _e;
    });
    var d = a('N1Jl6');
    const _e = _g => a => {
        const f = _g.get(a);
        if (void 0 === f)
            throw (0, d.createInvalidStateError)();
        return f;
    };
}), a.register('N1Jl6', function(b, c) {
    _g(b.exports, 'createInvalidStateError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'InvalidStateError');
}), a.register('JaSAp', function(b, c) {
    _g(b.exports, 'createGetOrCreateBackupOfflineAudioContext', function() {
        return _d;
    });
    const _d = (_g, b) => c => {
        let e = _g.get(c);
        if (void 0 !== e)
            return e;
        if (null === b)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        return e = new b(1, 1, 44100), _g.set(c, e), e;
    };
}), a.register('jKU20', function(b, c) {
    _g(b.exports, 'createGetUnrenderedAudioWorkletNodes', function() {
        return _d;
    });
    const _d = _g => b => {
        const e = _g.get(b);
        if (void 0 === e)
            throw new Error('The context has no set of AudioWorkletNodes.');
        return e;
    };
}), a.register('09yT2', function(b, c) {
    _g(b.exports, 'createIIRFilterNodeConstructor', function() {
        return _f;
    });
    var d = a('XyM8H');
    const e = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers'
        },
        _f = (_g, a, b, c, _f, _p) => class extends _g {
            getFrequencyResponse(_g, h, i) {
                return this._nativeIIRFilterNode.getFrequencyResponse(_g, h, i);
            }
            constructor(g, h) {
                const i = c(g),
                    j = _f(i),
                    k = {
                        ...e,
                        ...h
                    },
                    l = a(i, j ? null : g.baseLatency, k);
                super(g, !1, l, j ? b(k.feedback, k.feedforward) : null), (0, d.wrapIIRFilterNodeGetFrequencyResponseMethod)(l), this._nativeIIRFilterNode = l, _p(this, 1);
            }
        };
}), a.register('XyM8H', function(b, c) {
    _m(b.exports, 'wrapIIRFilterNodeGetFrequencyResponseMethod', function() {
        return _e;
    });
    var d = a('OzWAz');
    const _e = _m => {
        var f;
        _m.getFrequencyResponse = (f = _m.getFrequencyResponse, (b, c, _e) => {
            if (b.length !== c.length || c.length !== _e.length)
                throw (0, d.createInvalidAccessError)();
            return f.call(_m, b, c, _e);
        });
    };
}), a.register('OzWAz', function(b, c) {
    _m(b.exports, 'createInvalidAccessError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'InvalidAccessError');
}), a.register('tnKu8', function(b, c) {
    _m(b.exports, 'createIIRFilterNodeRendererFactory', function() {
        return _f;
    });
    var d = a('6p3xi'),
        e = a('V8YdD');
    const _f = (_m, a, b, c, _f) => (_p, _q) => {
        const g = new WeakMap();
        let h = null;
        const i = async (i, _u) => {
            let j = null,
                _k = a(i);
            const l = (0, e.isOwnedByContext)(_k, _u);
            if (void 0 === _u.createIIRFilter ? j = _m(_u, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: 'max',
                    channelInterpretation: 'speakers',
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                }) : l || (_k = _u.createIIRFilter(_q, _p)), g.set(_u, null === j ? _k : j), null !== j) {
                if (null === h) {
                    if (null === b)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const _m = new b(i.context.destination.channelCount, i.context.length, _u.sampleRate);
                    h = (async () => {
                        await c(i, _m, _m.destination);
                        return ((_m, a, b, c) => {
                            const n = b instanceof Float64Array ? b : new Float64Array(b),
                                o = c instanceof Float64Array ? c : new Float64Array(c),
                                _p = n.length,
                                _q = o.length,
                                r = Math.min(_p, _q);
                            if (1 !== n[0]) {
                                for (let s = 0; s < _p; s += 1)
                                    o[s] /= n[0];
                                for (let t = 1; t < _q; t += 1)
                                    n[t] /= n[0];
                            }
                            const s = new Float32Array(32),
                                t = new Float32Array(32),
                                _u = a.createBuffer(_m.numberOfChannels, _m.length, _m.sampleRate),
                                v = _m.numberOfChannels;
                            for (let w = 0; w < v; w += 1) {
                                const x = _m.getChannelData(w),
                                    y = _u.getChannelData(w);
                                s.fill(0), t.fill(0), (0, d.filterBuffer)(n, _p, o, _q, r, s, t, 0, 32, x, y);
                            }
                            return _u;
                        })(await _f(_m), _f, _g, _j);
                    })();
                }
                const m = await h;
                return j.buffer = m, j.start(0), j;
            }
            return await c(i, _f, _k), _k;
        };
        return {
            render(j, k) {
                const l = g.get(k);
                return void 0 !== l ? Promise.resolve(l) : i(j, k);
            }
        };
    };
}), a.register('6p3xi', function(b, c) {
    _j(b.exports, 'filterBuffer', function() {
        return _d;
    });
    const _d = (_j, b, c, _d, _d, _e, _h, _g, _j, _j, _f) => {
        const e = _j.length;
        let _f = _g;
        for (let _g = 0; _g < e; _g += 1) {
            let h = c[0] * _j[_g];
            for (let i = 1; i < _d; i += 1) {
                const j = _f - i & _j - 1;
                h += c[i] * _e[j], h -= _j[i] * _h[j];
            }
            for (let _j = _d; _j < _d; _j += 1)
                h += c[_j] * _e[_f - _j & _j - 1];
            for (let k = _d; k < i; k += 1)
                h -= _j[k] * _h[_f - k & _j - 1];
            _e[_f] = _j[_g], _h[_f] = h, _f = _f + 1 & _j - 1, _f[_g] = h;
        }
        return _f;
    };
}), a.register('4XRVQ', function(b, c) {
    _g(b.exports, 'createIncrementCycleCounterFactory', function() {
        return _e;
    });
    var _d = a('FESF1');
    const _e = (_g, a, b, c, _e, _h) => _i => (_j, _j) => {
        const _f = _g.get(_j);
        if (void 0 === _f) {
            if (!_i && _h(_j)) {
                const _g = c(_j),
                    {
                        outputs: _h
                    } = b(_j);
                for (const i of _h)
                    if ((0, _d.isAudioNodeOutputConnection)(i)) {
                        const j = c(i[0]);
                        a(_g, j, i[1], i[2]);
                    } else {
                        const j = _e(i[0]);
                        _g.disconnect(j, i[1]);
                    }
            }
            _e.set(_j, _j);
        } else
            _e.set(_j, _f + _j);
    };
}), a.register('P0wTJ', function(b, c) {
    _e(b.exports, 'createIsAnyAudioContext', function() {
        return _d;
    });
    const _d = (_e, b) => c => {
        const e = _e.get(c);
        return b(e) || b(c);
    };
}), a.register('p1pT1', function(b, c) {
    _e(b.exports, 'createIsAnyAudioNode', function() {
        return _d;
    });
    const _d = (_e, b) => c => _e.has(c) || b(c);
}), a.register('TkcOT', function(b, c) {
    _e(b.exports, 'createIsAnyAudioParam', function() {
        return _d;
    });
    const _d = (_e, b) => c => _e.has(c) || b(c);
}), a.register('mMhB+', function(b, c) {
    _e(b.exports, 'createIsAnyOfflineAudioContext', function() {
        return _d;
    });
    const _d = (_e, b) => c => {
        const e = _e.get(c);
        return b(e) || b(c);
    };
}), a.register('cQDbK', function(b, c) {
    _e(b.exports, 'createIsNativeAudioContext', function() {
        return _d;
    });
    const _d = _e => b => null !== _e && b instanceof _e;
}), a.register('TPMWk', function(b, c) {
    _e(b.exports, 'createIsNativeAudioNode', function() {
        return _d;
    });
    const _d = _e => b => null !== _e && 'function' == typeof _e.AudioNode && b instanceof _e.AudioNode;
}), a.register('T0iMQ', function(b, c) {
    _e(b.exports, 'createIsNativeAudioParam', function() {
        return _d;
    });
    const _d = _e => b => null !== _e && 'function' == typeof _e.AudioParam && b instanceof _e.AudioParam;
}), a.register('xnsAd', function(b, c) {
    _e(b.exports, 'createIsNativeContext', function() {
        return _d;
    });
    const _d = (_e, b) => c => _e(c) || b(c);
}), a.register('iiWiI', function(b, c) {
    _e(b.exports, 'createIsNativeOfflineAudioContext', function() {
        return _d;
    });
    const _d = _e => b => null !== _e && b instanceof _e;
}), a.register('8aAT7', function(b, c) {
    _e(b.exports, 'createIsSecureContext', function() {
        return _d;
    });
    const _d = _e => null !== _e && _e.isSecureContext;
}), a.register('/R/00', function(b, c) {
    _e(b.exports, 'createIsSupportedPromise', function() {
        return _d;
    });
    const _d = async (_e, b, c, _d, _f, _g, _h, _i, _j, _j, _j, _k, _f, _g, _k, _l) => {
        if (_e(b, b) && _e(c, c) && _e(_f, _f) && _e(_g, _g) && _e(_i, _i) && _e(_j, _j) && _e(_j, _j) && _e(_j, _j) && _e(_k, _k) && _e(_f, _f) && _e(_g, _g)) {
            return (await Promise.all([
                _e(_d, _d),
                _e(_h, _h),
                _e(_k, _k),
                _e(_l, _l)
            ])).every(_e => _e);
        }
        return !1;
    };
}), a.register('7GH0P', function(b, c) {
    _e(b.exports, 'createMediaElementAudioSourceNodeConstructor', function() {
        return _d;
    });
    const _d = (_e, b, c, _d) => class extends _e {
        get mediaElement() {
            return this._nativeMediaElementAudioSourceNode.mediaElement;
        }
        constructor(_e, _f) {
            const _g = c(_e),
                _h = b(_g, _f);
            if (_d(_g))
                throw TypeError();
            super(_e, !0, _h, null), this._nativeMediaElementAudioSourceNode = _h;
        }
    };
}), a.register('yo0uw', function(b, c) {
    _f(b.exports, 'createMediaStreamAudioDestinationNodeConstructor', function() {
        return _e;
    });
    const d = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers'
        },
        _e = (_f, b, c, _e) => class extends _f {
            get stream() {
                return this._nativeMediaStreamAudioDestinationNode.stream;
            }
            constructor(_f, g) {
                const h = c(_f);
                if (_e(h))
                    throw new TypeError();
                const _i = {
                        ...d,
                        ...g
                    },
                    _j = b(h, _i);
                super(_f, !1, _j, null), this._nativeMediaStreamAudioDestinationNode = _j;
            }
        };
}), a.register('fiPMk', function(b, c) {
    _e(b.exports, 'createMediaStreamAudioSourceNodeConstructor', function() {
        return _d;
    });
    const _d = (_e, b, c, _d) => class extends _e {
        get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream;
        }
        constructor(_e, f) {
            const g = c(_e),
                h = b(g, f);
            if (_d(g))
                throw new TypeError();
            super(_e, !0, h, null), this._nativeMediaStreamAudioSourceNode = h;
        }
    };
}), a.register('IIe6p', function(b, c) {
    _e(b.exports, 'createMediaStreamTrackAudioSourceNodeConstructor', function() {
        return _d;
    });
    const _d = (_e, b, c) => class extends _e {
        constructor(_e, f) {
            const g = c(_e);
            super(_e, !0, b(g, f), null);
        }
    };
}), a.register('3sI2B', function(b, c) {
    _g(b.exports, 'createMinimalAudioContextConstructor', function() {
        return _f;
    });
    var d = a('N6Hr7'),
        e = a('Nx4/F');
    const _f = (_g, a, b, c, _f) => class extends c {
        get baseLatency() {
            return this._baseLatency;
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state;
        }
        close() {
            return 'closed' === this.state ? this._nativeAudioContext.close().then(() => {
                throw _g();
            }) : ('suspended' === this._state && (this._state = null), this._nativeAudioContext.close().then(() => {
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, d.deactivateAudioGraph)(this);
            }));
        }
        resume() {
            return 'suspended' === this._state ? new Promise((_g, a) => {
                const g = () => {
                    this._nativeAudioContext.removeEventListener('statechange', g), 'running' === this._nativeAudioContext.state ? _g() : this.resume().then(_g, a);
                };
                this._nativeAudioContext.addEventListener('statechange', g);
            }) : this._nativeAudioContext.resume().catch(a => {
                if (void 0 === a || 15 === a.code)
                    throw _g();
                throw a;
            });
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(a => {
                if (void 0 === a)
                    throw _g();
                throw a;
            });
        }
        constructor(_g = {}) {
            if (null === _f)
                throw new Error('Missing the native AudioContext constructor.');
            let h;
            try {
                h = new _f(_g);
            } catch (_g) {
                if (12 === _g.code && 'sampleRate is not in range' === _g.message)
                    throw a();
                throw _g;
            }
            if (null === h)
                throw b();
            if (!(0, e.isValidLatencyHint)(_g.latencyHint))
                throw new TypeError(`The provided value '${ _g.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== _g.sampleRate && h.sampleRate !== _g.sampleRate)
                throw a();
            super(h, 2);
            const {
                latencyHint: i
            } = _g, {
                sampleRate: j
            } = h;
            if (this._baseLatency = 'number' == typeof h.baseLatency ? h.baseLatency : 'balanced' === i ? 512 / j : 'interactive' === i || void 0 === i ? 256 / j : 'playback' === i ? 1024 / j : 128 * Math.max(2, Math.min(128, Math.round(i * j / 128))) / j, this._nativeAudioContext = h, 'webkitAudioContext' === _f.name ? (this._nativeGainNode = h.createGain(), this._nativeOscillatorNode = h.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === h.state) {
                this._state = 'suspended';
                const k = () => {
                    'suspended' === this._state && (this._state = null), h.removeEventListener('statechange', k);
                };
                h.addEventListener('statechange', k);
            }
        }
    };
}), a.register('sn/5E', function(b, c) {
    _f(b.exports, 'createMinimalBaseAudioContextConstructor', function() {
        return _e;
    });
    var d = a('4Bnzk');
    const _e = (_f, a, b, c, _e, _g) => class extends b {
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
        set onstatechange(_f) {
            const g = 'function' == typeof _f ? _g(this, _f) : null;
            this._nativeContext.onstatechange = g;
            const h = this._nativeContext.onstatechange;
            this._onstatechange = null !== h && h === g ? _f : h;
        }
        get sampleRate() {
            return this._nativeContext.sampleRate;
        }
        get state() {
            return this._nativeContext.state;
        }
        constructor(f, _g) {
            super(f), this._nativeContext = f, d.CONTEXT_STORE.set(this, f), c(f) && _e.set(f, new Set()), this._destination = new _h(this, _g), this._listener = a(this, f), this._onstatechange = null;
        }
    };
}), a.register('Tcdt1', function(b, c) {
    _h(b.exports, 'createMinimalOfflineAudioContextConstructor', function() {
        return _g;
    });
    var d = a('N6Hr7'),
        e = a('Sqwfw');
    const f = {
            numberOfChannels: 1
        },
        _g = (_h, a, b, c, _g) => class extends c {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(a()) : (this._state = 'running', _g(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, d.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(_h) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(_h) : setTimeout(() => this._waitForThePromiseToSettle(_h));
            }
            constructor(h) {
                const {
                    length: i,
                    numberOfChannels: j,
                    sampleRate: k
                } = {
                    ...f,
                    ...h
                }, l = b(j, i, k);
                _m(e.testPromiseSupport, () => (0, e.testPromiseSupport)(l)) || l.addEventListener('statechange', (() => {
                    let _m = 0;
                    const n = b => {
                        'running' === this._state && (_m > 0 ? (l.removeEventListener('statechange', n), b.stopImmediatePropagation(), this._waitForThePromiseToSettle(b)) : _m += 1);
                    };
                    return n;
                })()), super(l, j), this._length = i, this._nativeOfflineAudioContext = l, this._state = null;
            }
        };
}), a.register('Sqwfw', function(b, c) {
    _g(b.exports, 'testPromiseSupport', function() {
        return _d;
    });
    const _d = _g => {
        const e = new Uint32Array([
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
            const f = _g.decodeAudioData(e.buffer, () => {});
            return void 0 !== f && (f.catch(() => {}), !0);
        } catch {}
        return !1;
    };
}), a.register('OP3lP', function(b, c) {
    _g(b.exports, 'createMonitorConnections', function() {
        return _d;
    });
    const _d = (_g, b) => (c, _d, _d) => {
        const e = new Set();
        var f, g;
        return c.connect = (f = c.connect, (_d, h = 0, i = 0) => {
            const _j = 0 === e.size;
            if (b(_d))
                return f.call(c, _d, h, i), _g(e, [
                    _d,
                    h,
                    i
                ], _g => _g[0] === _d && _g[1] === h && _g[2] === i, !0), _j && _d(), _d;
            f.call(c, _d, h), _g(e, [
                _d,
                h
            ], _g => _g[0] === _d && _g[1] === h, !0), _j && _d();
        }), c.disconnect = (h = c.disconnect, (_g, _d, f) => {
            const j = e.size > 0;
            if (void 0 === _g)
                h.apply(c), e.clear();
            else if ('number' == typeof _g) {
                h.call(c, _g);
                for (const k of e)
                    k[1] === _g && e.delete(k);
            } else {
                b(_g) ? h.call(c, _g, _d, f) : h.call(c, _g, _d);
                for (const k of e)
                    k[0] !== _g || void 0 !== _d && k[1] !== _d || void 0 !== f && k[2] !== f || e.delete(k);
            }
            const k = 0 === e.size;
            j && k && _d();
        }), c;
    };
}), a.register('3fzbi', function(b, c) {
    _g(b.exports, 'createNativeAnalyserNodeFactory', function() {
        return _h;
    });
    var _d = a('XiQE0'),
        e = a('4ToCz'),
        f = a('sofSs'),
        g = a('DxNy8');
    const _h = (_g, a) => (b, c) => {
        const i = b.createAnalyser();
        if ((0, e.assignNativeAudioNodeOptions)(i, c), !(c.maxDecibels > c.minDecibels))
            throw a();
        return (0, _d.assignNativeAudioNodeOption)(i, c, 'fftSize'), (0, _d.assignNativeAudioNodeOption)(i, c, 'maxDecibels'), (0, _d.assignNativeAudioNodeOption)(i, c, 'minDecibels'), (0, _d.assignNativeAudioNodeOption)(i, c, 'smoothingTimeConstant'), _g(f.testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => (0, f.testAnalyserNodeGetFloatTimeDomainDataMethodSupport)(i)) || (0, g.wrapAnalyserNodeGetFloatTimeDomainDataMethod)(i), i;
    };
}), a.register('XiQE0', function(b, c) {
    _g(b.exports, 'assignNativeAudioNodeOption', function() {
        return _d;
    });
    const _d = (_g, b, c) => {
        const e = b[c];
        void 0 !== e && e !== _g[c] && (_g[c] = e);
    };
}), a.register('4ToCz', function(b, c) {
    _g(b.exports, 'assignNativeAudioNodeOptions', function() {
        return _e;
    });
    var d = a('XiQE0');
    const _e = (_g, a) => {
        (0, d.assignNativeAudioNodeOption)(_g, a, 'channelCount'), (0, d.assignNativeAudioNodeOption)(_g, a, 'channelCountMode'), (0, d.assignNativeAudioNodeOption)(_g, a, 'channelInterpretation');
    };
}), a.register('sofSs', function(b, c) {
    _g(b.exports, 'testAnalyserNodeGetFloatTimeDomainDataMethodSupport', function() {
        return _d;
    });
    const _d = _g => 'function' == typeof _g.getFloatTimeDomainData;
}), a.register('DxNy8', function(b, c) {
    _g(b.exports, 'wrapAnalyserNodeGetFloatTimeDomainDataMethod', function() {
        return _d;
    });
    const _d = _g => {
        _g.getFloatTimeDomainData = b => {
            const e = new Uint8Array(b.length);
            _g.getByteTimeDomainData(e);
            const f = Math.max(e.length, _g.fftSize);
            for (let _g = 0; _g < f; _g += 1)
                b[_g] = 0.0078125 * (e[_g] - 128);
            return b;
        };
    };
}), a.register('/Sou4', function(b, c) {
    _i(b.exports, 'createNativeAudioBufferConstructor', function() {
        return _d;
    });
    const _d = _i => null === _i ? null : _i.hasOwnProperty('AudioBuffer') ? _i.AudioBuffer : null;
}), a.register('2oRJn', function(b, c) {
    _i(b.exports, 'createNativeAudioBufferSourceNodeFactory', function() {
        return _j;
    });
    var d = a('2PpvX'),
        e = a('XiQE0'),
        f = a('4ToCz'),
        g = a('Jtng6'),
        h = a('qgWkr'),
        i = a('BcIeB');
    const _j = (_i, a, b, c, _j, _k, _f, _g, _k, _l, _m) => (_n, _o) => {
        const _k = _n.createBufferSource();
        return (0, f.assignNativeAudioNodeOptions)(_k, _o), (0, d.assignNativeAudioNodeAudioParamValue)(_k, _o, 'playbackRate'), (0, e.assignNativeAudioNodeOption)(_k, _o, 'buffer'), (0, e.assignNativeAudioNodeOption)(_k, _o, 'loop'), (0, e.assignNativeAudioNodeOption)(_k, _o, 'loopEnd'), (0, e.assignNativeAudioNodeOption)(_k, _o, 'loopStart'), a(b, () => b(_n)) || (0, g.wrapAudioBufferSourceNodeStartMethodConsecutiveCalls)(_k), a(c, () => c(_n)) || _k(_k), a(_j, () => _j(_n)) || _l(_k, _n), a(_k, () => _k(_n)) || (0, h.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(_k), a(_f, () => _f(_n)) || _m(_k, _n), a(_g, () => _g(_n)) || (0, i.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(_k), _i(_n, _k), _k;
    };
}), a.register('2PpvX', function(b, c) {
    _i(b.exports, 'assignNativeAudioNodeAudioParamValue', function() {
        return _d;
    });
    const _d = (_i, b, c) => {
        const e = b[c];
        void 0 !== e && e !== _i[c].value && (_i[c].value = e);
    };
}), a.register('Jtng6', function(b, c) {
    _i(b.exports, 'wrapAudioBufferSourceNodeStartMethodConsecutiveCalls', function() {
        return _e;
    });
    var d = a('N1Jl6');
    const _e = _i => {
        _i.start = (a => {
            let f = !1;
            return (g = 0, h = 0, _f) => {
                if (f)
                    throw (0, d.createInvalidStateError)();
                a.call(_i, g, h, _f), f = !0;
            };
        })(_i.start);
    };
}), a.register('qgWkr', function(b, c) {
    _i(b.exports, 'wrapAudioScheduledSourceNodeStartMethodNegativeParameters', function() {
        return _d;
    });
    const _d = _i => {
        var e;
        _i.start = (e = _i.start, (f = 0, g = 0, _d) => {
            if ('number' == typeof _d && _d < 0 || g < 0 || f < 0)
                throw new RangeError('The parameters can\'t be negative.');
            e.call(_i, f, g, _d);
        });
    };
}), a.register('BcIeB', function(b, c) {
    _i(b.exports, 'wrapAudioScheduledSourceNodeStopMethodNegativeParameters', function() {
        return _d;
    });
    const _d = _i => {
        var e;
        _i.stop = (e = _i.stop, (f = 0) => {
            if (f < 0)
                throw new RangeError('The parameter can\'t be negative.');
            e.call(_i, f);
        });
    };
}), a.register('mlIS3', function(b, c) {
    _i(b.exports, 'createNativeAudioContextConstructor', function() {
        return _d;
    });
    const _d = _i => null === _i ? null : _i.hasOwnProperty('AudioContext') ? _i.AudioContext : _i.hasOwnProperty('webkitAudioContext') ? _i.webkitAudioContext : null;
}), a.register('WqZmd', function(b, c) {
    _i(b.exports, 'createNativeAudioDestinationNodeFactory', function() {
        return _d;
    });
    const _d = (_i, b) => (c, _d, _d) => {
        const e = c.destination;
        if (e.channelCount !== _d)
            try {
                e.channelCount = _d;
            } catch {}
        _d && 'explicit' !== e.channelCountMode && (e.channelCountMode = 'explicit'), 0 === e.maxChannelCount && Object.defineProperty(e, 'maxChannelCount', {
            value: _d
        });
        const _f = _i(c, {
            channelCount: _d,
            channelCountMode: e.channelCountMode,
            channelInterpretation: e.channelInterpretation,
            gain: 1
        });
        return b(_f, 'channelCount', _i => () => _i.call(_f), _i => b => {
            _i.call(_f, b);
            try {
                e.channelCount = b;
            } catch (_i) {
                if (b > e.maxChannelCount)
                    throw _i;
            }
        }), b(_f, 'channelCountMode', _i => () => _i.call(_f), _i => b => {
            _i.call(_f, b), e.channelCountMode = b;
        }), b(_f, 'channelInterpretation', _i => () => _i.call(_f), _i => b => {
            _i.call(_f, b), e.channelInterpretation = b;
        }), Object.defineProperty(_f, 'maxChannelCount', {
            get: () => e.maxChannelCount
        }), _f.connect(e), _f;
    };
}), a.register('/frO9', function(b, c) {
    _i(b.exports, 'createNativeAudioWorkletNodeConstructor', function() {
        return _d;
    });
    const _d = _i => null === _i ? null : _i.hasOwnProperty('AudioWorkletNode') ? _i.AudioWorkletNode : null;
}), a.register('rdU83', function(b, c) {
    _i(b.exports, 'createNativeAudioWorkletNodeFactory', function() {
        return _e;
    });
    var _d = a('x8p6B');
    const _e = (_i, a, b, c, _e) => (_f, _g, _h, _i, _j, _k) => {
        if (null !== _h)
            try {
                const f = new _h(_f, _i, _k),
                    g = new Map();
                let h = null;
                if (Object.defineProperties(f, {
                        channelCount: {
                            get: () => _k.channelCount,
                            set: () => {
                                throw _i();
                            }
                        },
                        channelCountMode: {
                            get: () => 'explicit',
                            set: () => {
                                throw _i();
                            }
                        },
                        onprocessorerror: {
                            get: () => h,
                            set: _i => {
                                'function' == typeof h && f.removeEventListener('processorerror', h), h = 'function' == typeof _i ? _i : null, 'function' == typeof h && f.addEventListener('processorerror', h);
                            }
                        }
                    }), f.addEventListener = (_g = f.addEventListener, (..._i) => {
                        if ('processorerror' === _i[0]) {
                            const i = 'function' == typeof _i[1] ? _i[1] : 'object' == typeof _i[1] && null !== _i[1] && 'function' == typeof _i[1].handleEvent ? _i[1].handleEvent : null;
                            if (null !== i) {
                                const j = g.get(_i[1]);
                                void 0 !== j ? _i[1] = j : (_i[1] = j => {
                                    'error' === j.type ? (Object.defineProperties(j, {
                                        type: {
                                            value: 'processorerror'
                                        }
                                    }), i(j)) : i(new ErrorEvent(_i[0], {
                                        ...j
                                    }));
                                }, g.set(i, _i[1]));
                            }
                        }
                        return _g.call(f, 'error', _i[1], _i[2]), _g.call(f, ..._i);
                    }), f.removeEventListener = (_f = f.removeEventListener, (..._i) => {
                        if ('processorerror' === _i[0]) {
                            const i = g.get(_i[1]);
                            void 0 !== i && (g.delete(_i[1]), _i[1] = i);
                        }
                        return _f.call(f, 'error', _i[1], _i[2]), _f.call(f, _i[0], _i[1], _i[2]);
                    }), 0 !== _k.numberOfOutputs) {
                    const _i = b(_f, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        gain: 0
                    });
                    f.connect(_i).connect(_f.destination);
                    return _e(f, () => _i.disconnect(), () => _i.connect(_f.destination));
                }
                return f;
            } catch (_s) {
                if (11 === _s.code)
                    throw c();
                throw _s;
            }
        var _f, _g;
        if (void 0 === _j)
            throw c();
        return (0, _d.testClonabilityOfAudioWorkletNodeOptions)(_k), a(_f, _g, _j, _k);
    };
}), a.register('x8p6B', function(b, c) {
    _s(b.exports, 'testClonabilityOfAudioWorkletNodeOptions', function() {
        return _d;
    });
    const _d = _s => {
        const {
            port1: e
        } = new MessageChannel();
        try {
            e.postMessage(_s);
        } finally {
            e.close();
        }
    };
}), a.register('M5LV7', function(b, c) {
    _s(b.exports, 'createNativeAudioWorkletNodeFakerFactory', function() {
        return _k;
    });
    var d = a('MZ6ZX'),
        e = a('+ZcAX'),
        _f = a('MWH0l'),
        _g = a('AtCqH'),
        _h = a('1OGdb'),
        _i = a('rVhIn'),
        _j = a('mDkXn');
    const _k = (_s, a, b, c, _k, _l, _j, _k, _l, _m, _n, _o, _p) => (_q, _r, _s, _t) => {
        if (0 === _t.numberOfInputs && 0 === _t.numberOfOutputs)
            throw _l();
        const _l = Array.isArray(_t.outputChannelCount) ? _t.outputChannelCount : Array.from(_t.outputChannelCount);
        if (_l.some(_s => _s < 1))
            throw _l();
        if (_l.length !== _t.numberOfOutputs)
            throw a();
        if ('explicit' !== _t.channelCountMode)
            throw _l();
        const m = _t.channelCount * _t.numberOfInputs,
            n = _l.reduce((_s, a) => _s + a, 0),
            o = void 0 === _s.parameterDescriptors ? 0 : _s.parameterDescriptors.length;
        if (m + o > 6 || n > 6)
            throw _l();
        const p = new MessageChannel(),
            q = [],
            r = [];
        for (let _s = 0; _s < _t.numberOfInputs; _s += 1)
            q.push(_j(_q, {
                channelCount: _t.channelCount,
                channelCountMode: _t.channelCountMode,
                channelInterpretation: _t.channelInterpretation,
                gain: 1
            })), r.push(_k(_q, {
                channelCount: _t.channelCount,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: _t.channelCount
            }));
        const t = [];
        if (void 0 !== _s.parameterDescriptors)
            for (const {
                    defaultValue: u,
                    maxValue: v,
                    minValue: w,
                    name: x
                }
                of _s.parameterDescriptors) {
                const y = _l(_q, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    offset: void 0 !== _t.parameterData[x] ? _t.parameterData[x] : void 0 === u ? 0 : u
                });
                Object.defineProperties(y.offset, {
                    defaultValue: {
                        get: () => void 0 === u ? 0 : u
                    },
                    maxValue: {
                        get: () => void 0 === v ? d.MOST_POSITIVE_SINGLE_FLOAT : v
                    },
                    minValue: {
                        get: () => void 0 === w ? d.MOST_NEGATIVE_SINGLE_FLOAT : w
                    }
                }), t.push(y);
            }
        const u = c(_q, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: Math.max(1, m + o)
            }),
            _v = (0, e.computeBufferSize)(_r, _q.sampleRate),
            _w = _k(_q, _v, m + o, Math.max(1, n)),
            _x = _k(_q, {
                channelCount: Math.max(1, n),
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: Math.max(1, n)
            }),
            _y = [];
        for (let z = 0; z < _t.numberOfOutputs; z += 1)
            _y.push(c(_q, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: _l[z]
            }));
        for (let A = 0; A < _t.numberOfInputs; A += 1) {
            q[A].connect(r[A]);
            for (let B = 0; B < _t.channelCount; B += 1)
                r[A].connect(u, B, A * _t.channelCount + B);
        }
        const _B = new(0, _j.ReadOnlyMap)(void 0 === _s.parameterDescriptors ? [] : _s.parameterDescriptors.map(({
            name: C
        }, a) => {
            const D = t[a];
            return D.connect(u, 0, m + a), D.start(0), [
                C,
                D.offset
            ];
        }));
        u.connect(_w);
        let _D = _t.channelInterpretation,
            E = null;
        const F = 0 === _t.numberOfOutputs ? [_w] : _y,
            G = {
                get bufferSize() {
                    return _v;
                },
                get channelCount() {
                    return _t.channelCount;
                },
                set channelCount(H) {
                    throw b();
                },
                get channelCountMode() {
                    return _t.channelCountMode;
                },
                set channelCountMode(H) {
                    throw b();
                },
                get channelInterpretation() {
                    return _D;
                },
                set channelInterpretation(H) {
                    for (const I of q)
                        I.channelInterpretation = H;
                    _D = H;
                },
                get context() {
                    return _w.context;
                },
                get inputs() {
                    return q;
                },
                get numberOfInputs() {
                    return _t.numberOfInputs;
                },
                get numberOfOutputs() {
                    return _t.numberOfOutputs;
                },
                get onprocessorerror() {
                    return E;
                },
                set onprocessorerror(H) {
                    'function' == typeof E && G.removeEventListener('processorerror', E), E = 'function' == typeof H ? H : null, 'function' == typeof E && G.addEventListener('processorerror', E);
                },
                get parameters() {
                    return _B;
                },
                get port() {
                    return p.port2;
                },
                addEventListener: (...C) => _w.addEventListener(C[0], C[1], C[2]),
                connect: C.bind(null, F),
                disconnect: _m.bind(null, F),
                dispatchEvent: (...C) => _w.dispatchEvent(C[0]),
                removeEventListener: (...C) => _w.removeEventListener(C[0], C[1], C[2])
            },
            H = new Map();
        var I, J;
        p.port1.addEventListener = (I = p.port1.addEventListener, (...C) => {
            if ('message' === C[0]) {
                const K = 'function' == typeof C[1] ? C[1] : 'object' == typeof C[1] && null !== C[1] && 'function' == typeof C[1].handleEvent ? C[1].handleEvent : null;
                if (null !== K) {
                    const L = H.get(C[1]);
                    void 0 !== L ? C[1] = L : (C[1] = C => {
                        _n(_q.currentTime, _q.sampleRate, () => K(C));
                    }, H.set(K, C[1]));
                }
            }
            return I.call(p.port1, C[0], C[1], C[2]);
        }), p.port1.removeEventListener = (J = p.port1.removeEventListener, (...C) => {
            if ('message' === C[0]) {
                const K = H.get(C[1]);
                void 0 !== K && (H.delete(C[1]), C[1] = K);
            }
            return J.call(p.port1, C[0], C[1], C[2]);
        });
        let K = null;
        Object.defineProperty(p.port1, 'onmessage', {
            get: () => K,
            set: C => {
                'function' == typeof K && p.port1.removeEventListener('message', K), K = 'function' == typeof C ? C : null, 'function' == typeof K && (p.port1.addEventListener('message', K), p.port1.start());
            }
        }), _s.prototype.port = p.port1;
        let L = null;
        (0, _h.createAudioWorkletProcessor)(_q, G, _s, _t).then(C => L = C);
        const M = (0, _i.createNestedArrays)(_t.numberOfInputs, _t.channelCount),
            N = (0, _i.createNestedArrays)(_t.numberOfOutputs, _l),
            O = void 0 === _s.parameterDescriptors ? [] : _s.parameterDescriptors.reduce((C, {
                name: P
            }) => ({
                ...C,
                [P]: new Float32Array(128)
            }), {});
        let Q = !0;
        const R = () => {
                _t.numberOfOutputs > 0 && _w.disconnect(_x);
                for (let S = 0, T = 0; S < _t.numberOfOutputs; S += 1) {
                    const U = _y[S];
                    for (let V = 0; V < _l[S]; V += 1)
                        _x.disconnect(U, T + V, V);
                    T += _l[S];
                }
            },
            S = new Map();
        _w.onaudioprocess = ({
            inputBuffer: T,
            outputBuffer: U
        }) => {
            if (null !== L) {
                const V = _o(G);
                for (let W = 0; W < _v; W += 128) {
                    for (let X = 0; X < _t.numberOfInputs; X += 1)
                        for (let Y = 0; Y < _t.channelCount; Y += 1)
                            (0, _f.copyFromChannel)(T, M[X], Y, Y, W);
                    void 0 !== _s.parameterDescriptors && _s.parameterDescriptors.forEach(({
                        name: Z
                    }, Y) => {
                        (0, _f.copyFromChannel)(T, O, Z, m + Y, W);
                    });
                    for (let $ = 0; $ < _t.numberOfInputs; $ += 1)
                        for (let ab = 0; ab < _l[$]; ab += 1)
                            0 === N[$][ab].byteLength && (N[$][ab] = new Float32Array(128));
                    try {
                        const bb = M.map((bb, ab) => {
                                if (Y[ab].size > 0)
                                    return S.set(ab, _v / 128), bb;
                                const cb = S.get(ab);
                                return void 0 === cb ? [] : (bb.every(bb => bb.every(bb => 0 === bb)) && (1 === cb ? S.delete(ab) : S.set(ab, cb - 1)), bb);
                            }),
                            cb = _n(_q.currentTime + W / _q.sampleRate, _q.sampleRate, () => L.process(bb, N, O));
                        Q = cb;
                        for (let db = 0, eb = 0; db < _t.numberOfOutputs; db += 1) {
                            for (let fb = 0; fb < _l[db]; fb += 1)
                                (0, _g.copyToChannel)(ab, N[db], fb, eb + fb, W);
                            eb += _l[db];
                        }
                    } catch ($) {
                        Q = !1, G.dispatchEvent(new ErrorEvent('processorerror', {
                            colno: $.colno,
                            filename: $.filename,
                            lineno: $.lineno,
                            message: $.message
                        }));
                    }
                    if (!Q) {
                        for (let bb = 0; bb < _t.numberOfInputs; bb += 1) {
                            q[bb].disconnect(r[bb]);
                            for (let cb = 0; cb < _t.channelCount; cb += 1)
                                r[W].disconnect(u, cb, bb * _t.channelCount + cb);
                        }
                        if (void 0 !== _s.parameterDescriptors) {
                            const cb = _s.parameterDescriptors.length;
                            for (let db = 0; db < cb; db += 1) {
                                const eb = t[db];
                                eb.disconnect(u, 0, m + db), eb.stop();
                            }
                        }
                        u.disconnect(_w), _w.onaudioprocess = null, _V ? R() : _Y();
                        break;
                    }
                }
            }
        };
        let _V = !1;
        const W = _j(_q, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            }),
            X = () => _w.connect(W).connect(_q.destination),
            _Y = () => {
                _w.disconnect(W), W.disconnect();
            };
        return X(), _p(G, () => {
            if (Q) {
                _Y(), _t.numberOfOutputs > 0 && _w.connect(_x);
                for (let Z = 0, $ = 0; Z < _t.numberOfOutputs; Z += 1) {
                    const ab = _y[Z];
                    for (let bb = 0; bb < _l[Z]; bb += 1)
                        _x.connect(ab, $ + bb, bb);
                    $ += _l[Z];
                }
            }
            _V = !0;
        }, () => {
            Q && (X(), R()), _V = !1;
        });
    };
}), a.register('+ZcAX', function(b, c) {
    _g(b.exports, 'computeBufferSize', function() {
        return _d;
    });
    const _d = (_g, b) => null === _g ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(_g * b)))));
}), a.register('1OGdb', function(b, c) {
    _g(b.exports, 'createAudioWorkletProcessor', function() {
        return _f;
    });
    var d = a('4Bnzk'),
        e = a('GajE4');
    const _f = (_g, a, b, c) => {
        let g = d.NODE_TO_PROCESSOR_MAPS.get(_g);
        void 0 === g && (g = new WeakMap(), d.NODE_TO_PROCESSOR_MAPS.set(_g, g));
        const h = (0, e.createAudioWorkletProcessorPromise)(b, c);
        return g.set(a, h), h;
    };
}), a.register('GajE4', function(b, c) {
    _g(b.exports, 'createAudioWorkletProcessorPromise', function() {
        return _e;
    });
    var d = a('Xmoum');
    const _e = async (_g, a) => new _g(await (0, d.cloneAudioWorkletNodeOptions)(a));
}), a.register('Xmoum', function(b, c) {
    _g(b.exports, 'cloneAudioWorkletNodeOptions', function() {
        return _d;
    });
    const _d = _g => new Promise((b, c) => {
        const {
            port1: e,
            port2: f
        } = new MessageChannel();
        e.onmessage = ({
            data: _g
        }) => {
            e.close(), f.close(), b(_g);
        }, e.onmessageerror = ({
            data: h
        }) => {
            e.close(), f.close(), c(h);
        }, f.postMessage(h);
    });
}), a.register('+6LOn', function(b, c) {
    _m(b.exports, 'createNativeBiquadFilterNode', function() {
        return _g;
    });
    var d = a('2PpvX'),
        e = a('XiQE0'),
        f = a('4ToCz');
    const _g = (_m, a) => {
        const h = _m.createBiquadFilter();
        return (0, f.assignNativeAudioNodeOptions)(h, a), (0, d.assignNativeAudioNodeAudioParamValue)(h, a, 'Q'), (0, d.assignNativeAudioNodeAudioParamValue)(h, a, 'detune'), (0, d.assignNativeAudioNodeAudioParamValue)(h, a, 'frequency'), (0, d.assignNativeAudioNodeAudioParamValue)(h, a, 'gain'), (0, e.assignNativeAudioNodeOption)(h, a, 'type'), h;
    };
}), a.register('ySbsW', function(b, c) {
    _m(b.exports, 'createNativeChannelMergerNodeFactory', function() {
        return _e;
    });
    var d = a('4ToCz');
    const _e = (_m, a) => (b, c) => {
        const f = b.createChannelMerger(c.numberOfInputs);
        return null !== _m && 'webkitAudioContext' === _m.name && a(b, f), (0, d.assignNativeAudioNodeOptions)(f, c), f;
    };
}), a.register('pYtUK', function(b, c) {
    _m(b.exports, 'createNativeChannelSplitterNode', function() {
        return _f;
    });
    var d = a('4ToCz'),
        e = a('ie5Hi');
    const _f = (_m, a) => {
        const g = _m.createChannelSplitter(a.numberOfOutputs);
        return (0, d.assignNativeAudioNodeOptions)(g, a), (0, e.wrapChannelSplitterNode)(g), g;
    };
}), a.register('ie5Hi', function(b, c) {
    _m(b.exports, 'wrapChannelSplitterNode', function() {
        return _e;
    });
    var d = a('N1Jl6');
    const _e = _m => {
        const f = _m.numberOfOutputs;
        Object.defineProperty(_m, 'channelCount', {
            get: () => f,
            set: _m => {
                if (_m !== f)
                    throw (0, d.createInvalidStateError)();
            }
        }), Object.defineProperty(_m, 'channelCountMode', {
            get: () => 'explicit',
            set: _m => {
                if ('explicit' !== _m)
                    throw (0, d.createInvalidStateError)();
            }
        }), Object.defineProperty(_m, 'channelInterpretation', {
            get: () => 'discrete',
            set: _m => {
                if ('discrete' !== _m)
                    throw (0, d.createInvalidStateError)();
            }
        });
    };
}), a.register('0SSmw', function(b, c) {
    _m(b.exports, 'createNativeConstantSourceNodeFactory', function() {
        return _h;
    });
    var d = a('2PpvX'),
        e = a('4ToCz'),
        f = a('qgWkr'),
        g = a('BcIeB');
    const _h = (_m, a, b, c, _h) => (_i, _j) => {
        if (void 0 === _i.createConstantSource)
            return b(_i, _j);
        const i = _i.createConstantSource();
        return (0, e.assignNativeAudioNodeOptions)(i, _j), (0, d.assignNativeAudioNodeAudioParamValue)(i, _j, 'offset'), a(c, () => c(_i)) || (0, f.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(i), a(_h, () => _h(_i)) || (0, g.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(i), _m(_i, i), i;
    };
}), a.register('Mgc5z', function(b, c) {
    _m(b.exports, 'createNativeConstantSourceNodeFakerFactory', function() {
        return _e;
    });
    var d = a('vKkD+');
    const _e = (_m, a, b, c) => (_e, {
        offset: f,
        ...g
    }) => {
        const h = _e.createBuffer(1, 2, 44100),
            _i = a(_e, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            _j = b(_e, {
                ...g,
                gain: f
            }),
            k = h.getChannelData(0);
        k[0] = 1, k[1] = 1, _i.buffer = h, _i.loop = !0;
        const _l = {
            get bufferSize() {},
            get channelCount() {
                return _j.channelCount;
            },
            set channelCount(_m) {
                _j.channelCount = _m;
            },
            get channelCountMode() {
                return _j.channelCountMode;
            },
            set channelCountMode(m) {
                _j.channelCountMode = m;
            },
            get channelInterpretation() {
                return _j.channelInterpretation;
            },
            set channelInterpretation(m) {
                _j.channelInterpretation = m;
            },
            get context() {
                return _j.context;
            },
            get inputs() {
                return [];
            },
            get numberOfInputs() {
                return _i.numberOfInputs;
            },
            get numberOfOutputs() {
                return _j.numberOfOutputs;
            },
            get offset() {
                return _j.gain;
            },
            get onended() {
                return _i.onended;
            },
            set onended(m) {
                _i.onended = m;
            },
            addEventListener: (..._m) => _i.addEventListener(_m[0], _m[1], _m[2]),
            dispatchEvent: (..._m) => _i.dispatchEvent(_m[0]),
            removeEventListener: (..._m) => _i.removeEventListener(_m[0], _m[1], _m[2]),
            start(_m = 0) {
                _i.start.call(_i, _m);
            },
            stop(m = 0) {
                _i.stop.call(_i, m);
            }
        };
        return _h(_e, _i), c((0, d.interceptConnections)(_l, _j), () => _i.connect(_j), () => _i.disconnect(_j));
    };
}), a.register('vKkD+', function(b, c) {
    _h(b.exports, 'interceptConnections', function() {
        return _d;
    });
    const _d = (_h, b) => (_h.connect = b.connect.bind(b), _h.disconnect = b.disconnect.bind(b), _h);
}), a.register('FUZxv', function(b, c) {
    _h(b.exports, 'createNativeConvolverNodeFactory', function() {
        return _f;
    });
    var d = a('XiQE0'),
        e = a('4ToCz');
    const _f = (_h, a) => (b, c) => {
        const g = b.createConvolver();
        if ((0, e.assignNativeAudioNodeOptions)(g, c), c.disableNormalization === g.normalize && (g.normalize = !c.disableNormalization), (0, d.assignNativeAudioNodeOption)(g, c, 'buffer'), c.channelCount > 2)
            throw _h();
        if (a(g, 'channelCount', _h => () => _h.call(g), a => b => {
                if (b > 2)
                    throw _h();
                return a.call(g, b);
            }), 'max' === c.channelCountMode)
            throw _h();
        return a(g, 'channelCountMode', _h => () => _h.call(g), a => b => {
            if ('max' === b)
                throw _h();
            return a.call(g, b);
        }), g;
    };
}), a.register('g4LwS', function(b, c) {
    _h(b.exports, 'createNativeDelayNode', function() {
        return _f;
    });
    var d = a('2PpvX'),
        e = a('4ToCz');
    const _f = (_h, a) => {
        const g = _h.createDelay(a.maxDelayTime);
        return (0, e.assignNativeAudioNodeOptions)(g, a), (0, d.assignNativeAudioNodeAudioParamValue)(g, a, 'delayTime'), g;
    };
}), a.register('ywPGB', function(b, c) {
    _h(b.exports, 'createNativeDynamicsCompressorNodeFactory', function() {
        return _f;
    });
    var d = a('2PpvX'),
        e = a('4ToCz');
    const _f = _h => (a, b) => {
        const g = a.createDynamicsCompressor();
        if ((0, e.assignNativeAudioNodeOptions)(g, b), b.channelCount > 2)
            throw _h();
        if ('max' === b.channelCountMode)
            throw _h();
        return (0, d.assignNativeAudioNodeAudioParamValue)(g, b, 'attack'), (0, d.assignNativeAudioNodeAudioParamValue)(g, b, 'knee'), (0, d.assignNativeAudioNodeAudioParamValue)(g, b, 'ratio'), (0, d.assignNativeAudioNodeAudioParamValue)(g, b, 'release'), (0, d.assignNativeAudioNodeAudioParamValue)(g, b, 'threshold'), g;
    };
}), a.register('JBIoq', function(b, c) {
    _h(b.exports, 'createNativeGainNode', function() {
        return _f;
    });
    var d = a('2PpvX'),
        e = a('4ToCz');
    const _f = (_h, a) => {
        const g = _h.createGain();
        return (0, e.assignNativeAudioNodeOptions)(g, a), (0, d.assignNativeAudioNodeAudioParamValue)(g, a, 'gain'), g;
    };
}), a.register('ZpZj8', function(b, c) {
    _h(b.exports, 'createNativeIIRFilterNodeFactory', function() {
        return _e;
    });
    var d = a('4ToCz');
    const _e = _h => (a, b, c) => {
        if (void 0 === a.createIIRFilter)
            return _h(a, b, c);
        const f = a.createIIRFilter(c.feedforward, c.feedback);
        return (0, d.assignNativeAudioNodeOptions)(f, c), f;
    };
}), a.register('xiHhn', function(b, c) {
    _h(b.exports, 'createNativeIIRFilterNodeFakerFactory', function() {
        return _g;
    });
    var d = a('+ZcAX'),
        e = a('6p3xi'),
        f = a('vKkD+');

    function g(_h, i) {
        const j = i[0] * i[0] + i[1] * i[1];
        return [
            (_h[0] * i[0] + _h[1] * i[1]) / j,
            (_h[1] * i[0] - _h[0] * i[1]) / j
        ];
    }

    function g(h, i) {
        let j = [
            0,
            0
        ];
        for (let k = h.length - 1; k >= 0; k -= 1)
            d = i, j = [
                (c = j)[0] * d[0] - c[1] * d[1],
                c[0] * d[1] + c[1] * d[0]
            ], j[0] += h[k];
        var l, m;
        return j;
    }
    const _g = (_s, a, b, c) => (_g, _i, {
        channelCount: h,
        channelCountMode: i,
        channelInterpretation: _j,
        feedback: _k,
        feedforward: _l
    }) => {
        const _m = (0, d.computeBufferSize)(_i, _g.sampleRate),
            _n = _k instanceof Float64Array ? _k : new Float64Array(_k),
            _o = _l instanceof Float64Array ? _l : new Float64Array(_l),
            _p = _n.length,
            _q = _o.length,
            _r = Math.min(_p, _q);
        if (0 === _p || _p > 20)
            throw c();
        if (0 === _n[0])
            throw a();
        if (0 === _q || _q > 20)
            throw c();
        if (0 === _o[0])
            throw a();
        if (1 !== _n[0]) {
            for (let _s = 0; _s < _q; _s += 1)
                _o[_s] /= _n[0];
            for (let t = 1; t < _p; t += 1)
                _n[t] /= _n[0];
        }
        const _s = b(_g, _m, h, h);
        _s.channelCount = h, _s.channelCountMode = i, _s.channelInterpretation = _j;
        const _t = [],
            u = [],
            v = [];
        for (let w = 0; w < h; w += 1) {
            _t.push(0);
            const x = new Float32Array(32),
                y = new Float32Array(32);
            x.fill(0), y.fill(0), u.push(x), v.push(y);
        }
        _s.onaudioprocess = w => {
            const x = w.inputBuffer,
                y = w.outputBuffer,
                z = x.numberOfChannels;
            for (let A = 0; A < z; A += 1) {
                const B = x.getChannelData(A),
                    C = y.getChannelData(A);
                _t[A] = (0, e.filterBuffer)(_n, _p, _o, _q, _r, u[A], v[A], _t[A], 32, B, C);
            }
        };
        const x = _g.sampleRate / 2,
            y = {
                get bufferSize() {
                    return _m;
                },
                get channelCount() {
                    return _s.channelCount;
                },
                set channelCount(z) {
                    _s.channelCount = z;
                },
                get channelCountMode() {
                    return _s.channelCountMode;
                },
                set channelCountMode(z) {
                    _s.channelCountMode = z;
                },
                get channelInterpretation() {
                    return _s.channelInterpretation;
                },
                set channelInterpretation(z) {
                    _s.channelInterpretation = z;
                },
                get context() {
                    return _s.context;
                },
                get inputs() {
                    return [_s];
                },
                get numberOfInputs() {
                    return _s.numberOfInputs;
                },
                get numberOfOutputs() {
                    return _s.numberOfOutputs;
                },
                addEventListener: (...w) => _s.addEventListener(w[0], w[1], w[2]),
                dispatchEvent: (...w) => _s.dispatchEvent(w[0]),
                getFrequencyResponse(z, A, B) {
                    if (z.length !== A.length || A.length !== B.length)
                        throw w();
                    const C = z.length;
                    for (let D = 0; D < C; D += 1) {
                        const E = -Math.PI * (z[D] / x),
                            F = [
                                Math.cos(E),
                                Math.sin(E)
                            ],
                            G = _g(_h(_o, F), _h(_n, F));
                        A[D] = Math.sqrt(G[0] * G[0] + G[1] * G[1]), B[D] = Math.atan2(G[1], G[0]);
                    }
                },
                removeEventListener: (...w) => _s.removeEventListener(w[0], w[1], w[2])
            };
        return (0, f.interceptConnections)(y, _s);
    };
}), a.register('LbFS5', function(b, c) {
    _K(b.exports, 'createNativeMediaElementAudioSourceNode', function() {
        return _d;
    });
    const _d = (_K, b) => _K.createMediaElementSource(b.mediaElement);
}), a.register('NP0gJ', function(b, c) {
    _K(b.exports, 'createNativeMediaStreamAudioDestinationNode', function() {
        return _e;
    });
    var d = a('4ToCz');
    const _e = (_K, a) => {
        const f = _K.createMediaStreamDestination();
        return (0, d.assignNativeAudioNodeOptions)(f, a), 1 === f.numberOfOutputs && Object.defineProperty(f, 'numberOfOutputs', {
            get: () => 0
        }), f;
    };
}), a.register('6j8R7', function(b, c) {
    _K(b.exports, 'createNativeMediaStreamAudioSourceNode', function() {
        return _d;
    });
    const _d = (_K, {
        mediaStream: e
    }) => {
        const f = e.getAudioTracks();
        f.sort((_K, e) => _K.id < e.id ? -1 : _K.id > e.id ? 1 : 0);
        const g = f.slice(0, 1),
            h = _K.createMediaStreamSource(new MediaStream(g));
        return Object.defineProperty(h, 'mediaStream', {
            value: e
        }), h;
    };
}), a.register('X/hlt', function(b, c) {
    _K(b.exports, 'createNativeMediaStreamTrackAudioSourceNodeFactory', function() {
        return _d;
    });
    const _d = (_K, b) => (c, {
        mediaStreamTrack: e
    }) => {
        if ('function' == typeof c.createMediaStreamTrackSource)
            return c.createMediaStreamTrackSource(e);
        const f = new MediaStream([e]),
            g = c.createMediaStreamSource(f);
        if ('audio' !== e.kind)
            throw _K();
        if (b(c))
            throw new TypeError();
        return g;
    };
}), a.register('8U8re', function(b, c) {
    _K(b.exports, 'createNativeOfflineAudioContextConstructor', function() {
        return _d;
    });
    const _d = _K => null === _K ? null : _K.hasOwnProperty('OfflineAudioContext') ? _K.OfflineAudioContext : _K.hasOwnProperty('webkitOfflineAudioContext') ? _K.webkitOfflineAudioContext : null;
}), a.register('BM/m1', function(b, c) {
    _K(b.exports, 'createNativeOscillatorNodeFactory', function() {
        return _i;
    });
    var d = a('2PpvX'),
        e = a('XiQE0'),
        f = a('4ToCz'),
        _g = a('qgWkr'),
        _h = a('BcIeB');
    const _i = (_K, a, b, c, _i, _i) => (_j, _k) => {
        const j = _j.createOscillator();
        return (0, f.assignNativeAudioNodeOptions)(j, _k), (0, d.assignNativeAudioNodeAudioParamValue)(j, _k, 'detune'), (0, d.assignNativeAudioNodeAudioParamValue)(j, _k, 'frequency'), void 0 !== _k.periodicWave ? j.setPeriodicWave(_k.periodicWave) : (0, e.assignNativeAudioNodeOption)(j, _k, 'type'), a(b, () => b(_j)) || (0, _g.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(j), a(c, () => c(_j)) || _i(j, _j), a(_i, () => _i(_j)) || (0, _h.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(j), _K(_j, j), j;
    };
}), a.register('ygQdc', function(b, c) {
    _K(b.exports, 'createNativePannerNodeFactory', function() {
        return _g;
    });
    var d = a('2PpvX'),
        e = a('XiQE0'),
        f = a('4ToCz');
    const _g = _K => (a, b) => {
        const h = a.createPanner();
        return void 0 === h.orientationX ? _K(a, b) : ((0, f.assignNativeAudioNodeOptions)(h, b), (0, d.assignNativeAudioNodeAudioParamValue)(h, b, 'orientationX'), (0, d.assignNativeAudioNodeAudioParamValue)(h, b, 'orientationY'), (0, d.assignNativeAudioNodeAudioParamValue)(h, b, 'orientationZ'), (0, d.assignNativeAudioNodeAudioParamValue)(h, b, 'positionX'), (0, d.assignNativeAudioNodeAudioParamValue)(h, b, 'positionY'), (0, d.assignNativeAudioNodeAudioParamValue)(h, b, 'positionZ'), (0, e.assignNativeAudioNodeOption)(h, b, 'coneInnerAngle'), (0, e.assignNativeAudioNodeOption)(h, b, 'coneOuterAngle'), (0, e.assignNativeAudioNodeOption)(h, b, 'coneOuterGain'), (0, e.assignNativeAudioNodeOption)(h, b, 'distanceModel'), (0, e.assignNativeAudioNodeOption)(h, b, 'maxDistance'), (0, e.assignNativeAudioNodeOption)(h, b, 'panningModel'), (0, e.assignNativeAudioNodeOption)(h, b, 'refDistance'), (0, e.assignNativeAudioNodeOption)(h, b, 'rolloffFactor'), h);
    };
}), a.register('cyALO', function(b, c) {
    _K(b.exports, 'createNativePannerNodeFakerFactory', function() {
        return _f;
    });
    var d = a('4ToCz'),
        e = a('vKkD+');
    const _f = (_K, a, b, c, _f, _j, _g, _h, _i, _j) => (_k, {
        coneInnerAngle: g,
        coneOuterAngle: h,
        coneOuterGain: i,
        distanceModel: j,
        maxDistance: k,
        orientationX: l,
        orientationY: m,
        orientationZ: n,
        panningModel: o,
        positionX: p,
        positionY: q,
        positionZ: r,
        refDistance: s,
        rolloffFactor: t,
        ...u
    }) => {
        const v = _k.createPanner();
        if (u.channelCount > 2)
            throw _g();
        if ('max' === u.channelCountMode)
            throw _g();
        (0, d.assignNativeAudioNodeOptions)(v, u);
        const w = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            },
            x = b(_k, {
                ...w,
                channelInterpretation: 'speakers',
                numberOfInputs: 6
            }),
            y = c(_k, {
                ...u,
                gain: 1
            }),
            z = c(_k, {
                ...w,
                gain: 1
            }),
            A = c(_k, {
                ...w,
                gain: 0
            }),
            B = c(_k, {
                ...w,
                gain: 0
            }),
            C = c(_k, {
                ...w,
                gain: 0
            }),
            D = c(_k, {
                ...w,
                gain: 0
            }),
            E = c(_k, {
                ...w,
                gain: 0
            }),
            F = _f(_k, 256, 6, 1),
            G = _j(_k, {
                ...w,
                curve: new Float32Array([
                    1,
                    1
                ]),
                oversample: 'none'
            });
        let H = [
                l,
                m,
                n
            ],
            I = [
                p,
                q,
                r
            ];
        const J = new Float32Array(1);
        F.onaudioprocess = ({
            inputBuffer: _K
        }) => {
            const L = [
                _i(_K, J, 0),
                _i(_K, J, 1),
                _i(_K, J, 2)
            ];
            L.some((_K, L) => _K !== H[L]) && (v.setOrientation(...L), H = L);
            const M = [
                _i(_K, J, 3),
                _i(_K, J, 4),
                _i(_K, J, 5)
            ];
            M.some((_K, L) => _K !== I[L]) && (v.setPosition(...M), I = M);
        }, Object.defineProperty(A.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(B.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(C.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(D.gain, 'defaultValue', {
            get: () => 0
        }), Object.defineProperty(E.gain, 'defaultValue', {
            get: () => 0
        });
        const L = {
            get bufferSize() {},
            get channelCount() {
                return v.channelCount;
            },
            set channelCount(M) {
                if (M > 2)
                    throw _g();
                y.channelCount = M, v.channelCount = M;
            },
            get channelCountMode() {
                return v.channelCountMode;
            },
            set channelCountMode(M) {
                if ('max' === M)
                    throw _g();
                y.channelCountMode = M, v.channelCountMode = M;
            },
            get channelInterpretation() {
                return v.channelInterpretation;
            },
            set channelInterpretation(M) {
                y.channelInterpretation = M, v.channelInterpretation = M;
            },
            get coneInnerAngle() {
                return v.coneInnerAngle;
            },
            set coneInnerAngle(M) {
                v.coneInnerAngle = M;
            },
            get coneOuterAngle() {
                return v.coneOuterAngle;
            },
            set coneOuterAngle(M) {
                v.coneOuterAngle = M;
            },
            get coneOuterGain() {
                return v.coneOuterGain;
            },
            set coneOuterGain(M) {
                if (M < 0 || M > 1)
                    throw a();
                v.coneOuterGain = M;
            },
            get context() {
                return v.context;
            },
            get distanceModel() {
                return v.distanceModel;
            },
            set distanceModel(M) {
                v.distanceModel = M;
            },
            get inputs() {
                return [y];
            },
            get maxDistance() {
                return v.maxDistance;
            },
            set maxDistance(M) {
                if (M < 0)
                    throw new RangeError();
                v.maxDistance = M;
            },
            get numberOfInputs() {
                return v.numberOfInputs;
            },
            get numberOfOutputs() {
                return v.numberOfOutputs;
            },
            get orientationX() {
                return z.gain;
            },
            get orientationY() {
                return A.gain;
            },
            get orientationZ() {
                return B.gain;
            },
            get panningModel() {
                return v.panningModel;
            },
            set panningModel(M) {
                v.panningModel = M;
            },
            get positionX() {
                return C.gain;
            },
            get positionY() {
                return D.gain;
            },
            get positionZ() {
                return E.gain;
            },
            get refDistance() {
                return v.refDistance;
            },
            set refDistance(M) {
                if (M < 0)
                    throw new RangeError();
                v.refDistance = M;
            },
            get rolloffFactor() {
                return v.rolloffFactor;
            },
            set rolloffFactor(M) {
                if (M < 0)
                    throw new RangeError();
                v.rolloffFactor = M;
            },
            addEventListener: (..._K) => y.addEventListener(_K[0], _K[1], _K[2]),
            dispatchEvent: (..._K) => y.dispatchEvent(_K[0]),
            removeEventListener: (..._K) => y.removeEventListener(_K[0], _K[1], _K[2])
        };
        g !== L.coneInnerAngle && (L.coneInnerAngle = g), h !== L.coneOuterAngle && (L.coneOuterAngle = h), i !== L.coneOuterGain && (L.coneOuterGain = i), j !== L.distanceModel && (L.distanceModel = j), k !== L.maxDistance && (L.maxDistance = k), l !== L.orientationX.value && (L.orientationX.value = l), m !== L.orientationY.value && (L.orientationY.value = m), n !== L.orientationZ.value && (L.orientationZ.value = n), o !== L.panningModel && (L.panningModel = o), p !== L.positionX.value && (L.positionX.value = p), q !== L.positionY.value && (L.positionY.value = q), r !== L.positionZ.value && (L.positionZ.value = r), s !== L.refDistance && (L.refDistance = s), t !== L.rolloffFactor && (L.rolloffFactor = t), 1 === H[0] && 0 === H[1] && 0 === H[2] || v.setOrientation(...H), 0 === I[0] && 0 === I[1] && 0 === I[2] || v.setPosition(...I);
        return _j((0, e.interceptConnections)(L, v), () => {
            y.connect(v), _K(y, G, 0, 0), G.connect(z).connect(x, 0, 0), G.connect(A).connect(x, 0, 1), G.connect(B).connect(x, 0, 2), G.connect(C).connect(x, 0, 3), G.connect(D).connect(x, 0, 4), G.connect(E).connect(x, 0, 5), x.connect(F).connect(_k.destination);
        }, () => {
            y.disconnect(v), _h(y, G, 0, 0), G.disconnect(z), z.disconnect(x), G.disconnect(A), A.disconnect(x), G.disconnect(B), B.disconnect(x), G.disconnect(C), C.disconnect(x), G.disconnect(D), D.disconnect(x), G.disconnect(E), E.disconnect(x), x.disconnect(F), F.disconnect(_k.destination);
        });
    };
}), a.register('3jODL', function(b, c) {
    _n(b.exports, 'createNativePeriodicWaveFactory', function() {
        return _d;
    });
    const _d = _n => (b, {
        disableNormalization: e,
        imag: f,
        real: g
    }) => {
        const h = f instanceof Float32Array ? f : new Float32Array(f),
            i = g instanceof Float32Array ? g : new Float32Array(g),
            _j = b.createPeriodicWave(i, h, {
                disableNormalization: e
            });
        if (Array.from(f).length < 2)
            throw _n();
        return _j;
    };
}), a.register('gTkmD', function(b, c) {
    _n(b.exports, 'createNativeScriptProcessorNode', function() {
        return _d;
    });
    const _d = (_n, b, c, _d) => _n.createScriptProcessor(b, c, _d);
}), a.register('m3weF', function(b, c) {
    _n(b.exports, 'createNativeStereoPannerNodeFactory', function() {
        return _f;
    });
    var d = a('2PpvX'),
        e = a('4ToCz');
    const _f = (_n, a) => (b, c) => {
        const g = c.channelCountMode;
        if ('clamped-max' === g)
            throw a();
        if (void 0 === b.createStereoPanner)
            return _n(b, c);
        const h = b.createStereoPanner();
        return (0, e.assignNativeAudioNodeOptions)(h, c), (0, d.assignNativeAudioNodeAudioParamValue)(h, c, 'pan'), Object.defineProperty(h, 'channelCountMode', {
            get: () => g,
            set: _n => {
                if (_n !== g)
                    throw a();
            }
        }), h;
    };
}), a.register('sBQ4A', function(b, c) {
    _n(b.exports, 'createNativeStereoPannerNodeFakerFactory', function() {
        return _e;
    });
    var d = a('vKkD+');
    const _e = (_n, a, b, c, _e, _l) => {
        const f = 16385,
            _g = new Float32Array([
                1,
                1
            ]),
            _h = Math.PI / 2,
            _i = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            },
            _j = {
                ..._i,
                oversample: 'none'
            },
            _k = (_n, d, _l, _k, _o) => {
                if (1 === d)
                    return ((_n, a, d, _e) => {
                        const _l = new Float32Array(f),
                            m = new Float32Array(f);
                        for (let _n = 0; _n < f; _n += 1) {
                            const o = _n / 16384 * _h;
                            _l[_n] = Math.cos(o), m[_n] = Math.sin(o);
                        }
                        const _o = b(_n, {
                                ..._i,
                                gain: 0
                            }),
                            p = c(_n, {
                                ..._j,
                                curve: _l
                            }),
                            q = c(_n, {
                                ..._j,
                                curve: _g
                            }),
                            r = b(_n, {
                                ..._i,
                                gain: 0
                            }),
                            s = c(_n, {
                                ..._j,
                                curve: m
                            });
                        return {
                            connectGraph() {
                                a.connect(_o), a.connect(void 0 === q.inputs ? q : q.inputs[0]), a.connect(r), q.connect(d), d.connect(void 0 === p.inputs ? p : p.inputs[0]), d.connect(void 0 === s.inputs ? s : s.inputs[0]), p.connect(_o.gain), s.connect(r.gain), _o.connect(_e, 0, 0), r.connect(_e, 0, 1);
                            },
                            disconnectGraph() {
                                a.disconnect(_o), a.disconnect(void 0 === q.inputs ? q : q.inputs[0]), a.disconnect(r), q.disconnect(d), d.disconnect(void 0 === p.inputs ? p : p.inputs[0]), d.disconnect(void 0 === s.inputs ? s : s.inputs[0]), p.disconnect(_o.gain), s.disconnect(r.gain), _o.disconnect(_e, 0, 0), r.disconnect(_e, 0, 1);
                            }
                        };
                    })(_q, _f, _k, _m);
                if (2 === d)
                    return ((_q, d, _e, _f) => {
                        const l = new Float32Array(f),
                            _m = new Float32Array(f),
                            n = new Float32Array(f),
                            o = new Float32Array(f),
                            p = Math.floor(8192.5);
                        for (let _q = 0; _q < f; _q += 1)
                            if (_q > p) {
                                const r = (_q - p) / (16384 - p) * _h;
                                l[_q] = Math.cos(r), _m[_q] = Math.sin(r), n[_q] = 0, o[_q] = 1;
                            } else {
                                const r = _q / (16384 - p) * _h;
                                l[_q] = 1, _m[_q] = 0, n[_q] = Math.cos(r), o[_q] = Math.sin(r);
                            }
                        const r = a(_q, {
                                channelCount: 2,
                                channelCountMode: 'explicit',
                                channelInterpretation: 'discrete',
                                numberOfOutputs: 2
                            }),
                            s = b(_q, {
                                ..._i,
                                gain: 0
                            }),
                            t = c(_q, {
                                ..._j,
                                curve: l
                            }),
                            u = b(_q, {
                                ..._i,
                                gain: 0
                            }),
                            v = c(_q, {
                                ..._j,
                                curve: _m
                            }),
                            w = c(_q, {
                                ..._j,
                                curve: _g
                            }),
                            x = b(_q, {
                                ..._i,
                                gain: 0
                            }),
                            y = c(_q, {
                                ..._j,
                                curve: n
                            }),
                            z = b(_q, {
                                ..._i,
                                gain: 0
                            }),
                            A = c(_q, {
                                ..._j,
                                curve: o
                            });
                        return {
                            connectGraph() {
                                d.connect(r), d.connect(void 0 === w.inputs ? w : w.inputs[0]), r.connect(s, 0), r.connect(u, 0), r.connect(x, 1), r.connect(z, 1), w.connect(_e), _e.connect(void 0 === t.inputs ? t : t.inputs[0]), _e.connect(void 0 === v.inputs ? v : v.inputs[0]), _e.connect(void 0 === y.inputs ? y : y.inputs[0]), _e.connect(void 0 === A.inputs ? A : A.inputs[0]), t.connect(s.gain), v.connect(u.gain), y.connect(x.gain), A.connect(z.gain), s.connect(_f, 0, 0), x.connect(_f, 0, 0), u.connect(_f, 0, 1), z.connect(_f, 0, 1);
                            },
                            disconnectGraph() {
                                d.disconnect(r), d.disconnect(void 0 === w.inputs ? w : w.inputs[0]), r.disconnect(s, 0), r.disconnect(u, 0), r.disconnect(x, 1), r.disconnect(z, 1), w.disconnect(_e), _e.disconnect(void 0 === t.inputs ? t : t.inputs[0]), _e.disconnect(void 0 === v.inputs ? v : v.inputs[0]), _e.disconnect(void 0 === y.inputs ? y : y.inputs[0]), _e.disconnect(void 0 === A.inputs ? A : A.inputs[0]), t.disconnect(s.gain), v.disconnect(u.gain), y.disconnect(x.gain), A.disconnect(z.gain), s.disconnect(_f, 0, 0), x.disconnect(_f, 0, 0), u.disconnect(_f, 0, 1), z.disconnect(_f, 0, 1);
                            }
                        };
                    })(_v, _f, _k, _r);
                throw _e();
            };
        return (a, {
            channelCount: l,
            channelCountMode: m,
            pan: n,
            ...o
        }) => {
            if ('max' === m)
                throw _e();
            const p = _v(a, {
                    ...o,
                    channelCount: 1,
                    channelCountMode: m,
                    numberOfInputs: 2
                }),
                q = b(a, {
                    ...o,
                    channelCount: l,
                    channelCountMode: m,
                    gain: 1
                }),
                _r = b(a, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    gain: n
                });
            let {
                connectGraph: s,
                disconnectGraph: t
            } = _k(a, l, q, _r, p);
            Object.defineProperty(_r.gain, 'defaultValue', {
                get: () => 0
            }), Object.defineProperty(_r.gain, 'maxValue', {
                get: () => 1
            }), Object.defineProperty(_r.gain, 'minValue', {
                get: () => -1
            });
            const u = {
                get bufferSize() {},
                get channelCount() {
                    return q.channelCount;
                },
                set channelCount(_v) {
                    q.channelCount !== _v && (_v && t(), {
                        connectGraph: w,
                        disconnectGraph: x
                    } = _k(a, _v, q, _r, p), _v && w()), q.channelCount = _v;
                },
                get channelCountMode() {
                    return q.channelCountMode;
                },
                set channelCountMode(v) {
                    if ('clamped-max' === v || 'max' === v)
                        throw _e();
                    q.channelCountMode = v;
                },
                get channelInterpretation() {
                    return q.channelInterpretation;
                },
                set channelInterpretation(v) {
                    q.channelInterpretation = v;
                },
                get context() {
                    return q.context;
                },
                get inputs() {
                    return [q];
                },
                get numberOfInputs() {
                    return q.numberOfInputs;
                },
                get numberOfOutputs() {
                    return q.numberOfOutputs;
                },
                get pan() {
                    return _r.gain;
                },
                addEventListener: (..._t) => q.addEventListener(_t[0], _t[1], _t[2]),
                dispatchEvent: (..._t) => q.dispatchEvent(_t[0]),
                removeEventListener: (..._t) => q.removeEventListener(_t[0], _t[1], _t[2])
            };
            let _v = !1;
            return _f((0, d.interceptConnections)(u, p), () => {
                s(), _v = !0;
            }, () => {
                t(), _v = !1;
            });
        };
    };
}), a.register('O916d', function(b, c) {
    _t(b.exports, 'createNativeWaveShaperNodeFactory', function() {
        return _f;
    });
    var d = a('XiQE0'),
        e = a('4ToCz');
    const _f = (_t, a, b, c, _f, _A, _g) => (_h, _i) => {
        const g = _h.createWaveShaper();
        if (null !== _A && 'webkitAudioContext' === _A.name && void 0 === _h.createGain().gain.automationRate)
            return b(_h, _i);
        (0, e.assignNativeAudioNodeOptions)(g, _i);
        const h = null === _i.curve || _i.curve instanceof Float32Array ? _i.curve : new Float32Array(_i.curve);
        if (null !== h && h.length < 2)
            throw a();
        (0, d.assignNativeAudioNodeOption)(g, {
            curve: h
        }, 'curve'), (0, d.assignNativeAudioNodeOption)(g, _i, 'oversample');
        let i = null,
            j = !1;
        _g(g, 'curve', _t => () => _t.call(g), a => b => (a.call(g, b), j && (c(b) && null === i ? i = _t(_h, g) : c(b) || null === i || (i(), i = null)), b));
        return _f(g, () => {
            j = !0, c(g.curve) && (i = _t(_h, g));
        }, () => {
            j = !1, null !== i && (i(), i = null);
        });
    };
}), a.register('NS8Qv', function(b, c) {
    _t(b.exports, 'createNativeWaveShaperNodeFakerFactory', function() {
        return _f;
    });
    var d = a('4ToCz'),
        e = a('vKkD+');
    const _f = (_t, a, b, c, _f) => (_A, {
        curve: _g,
        oversample: _h,
        ..._i
    }) => {
        const j = _A.createWaveShaper(),
            k = _A.createWaveShaper();
        (0, d.assignNativeAudioNodeOptions)(j, _i), (0, d.assignNativeAudioNodeOptions)(k, _i);
        const l = b(_A, {
                ..._i,
                gain: 1
            }),
            m = b(_A, {
                ..._i,
                gain: -1
            }),
            n = b(_A, {
                ..._i,
                gain: 1
            }),
            o = b(_A, {
                ..._i,
                gain: -1
            });
        let p = null,
            q = !1,
            r = null;
        const s = {
            get bufferSize() {},
            get channelCount() {
                return j.channelCount;
            },
            set channelCount(_t) {
                l.channelCount = _t, m.channelCount = _t, j.channelCount = _t, n.channelCount = _t, k.channelCount = _t, o.channelCount = _t;
            },
            get channelCountMode() {
                return j.channelCountMode;
            },
            set channelCountMode(t) {
                l.channelCountMode = t, m.channelCountMode = t, j.channelCountMode = t, n.channelCountMode = t, k.channelCountMode = t, o.channelCountMode = t;
            },
            get channelInterpretation() {
                return j.channelInterpretation;
            },
            set channelInterpretation(t) {
                l.channelInterpretation = t, m.channelInterpretation = t, j.channelInterpretation = t, n.channelInterpretation = t, k.channelInterpretation = t, o.channelInterpretation = t;
            },
            get context() {
                return j.context;
            },
            get curve() {
                return r;
            },
            set curve(t) {
                if (null !== t && t.length < 2)
                    throw a();
                if (null === t)
                    j.curve = t, k.curve = t;
                else {
                    const u = t.length,
                        v = new Float32Array(u + 2 - u % 2),
                        w = new Float32Array(u + 2 - u % 2);
                    v[0] = t[0], w[0] = -t[u - 1];
                    const x = Math.ceil((u + 1) / 2),
                        y = (u + 1) / 2 - 1;
                    for (let z = 1; z < x; z += 1) {
                        const _A = z / x * y,
                            B = Math.floor(_A),
                            C = Math.ceil(_A);
                        v[z] = B === C ? t[B] : (1 - (_A - B)) * t[B] + (1 - (C - _A)) * t[C], w[z] = B === C ? -t[u - 1 - B] : -(1 - (_A - B)) * t[u - 1 - B] - (1 - (C - _A)) * t[u - 1 - C];
                    }
                    v[x] = u % 2 == 1 ? t[x - 1] : (t[x - 2] + t[x - 1]) / 2, j.curve = v, k.curve = w;
                }
                r = t, q && (c(r) && null === p ? p = _t(_g, l) : null !== p && (p(), p = null));
            },
            get inputs() {
                return [l];
            },
            get numberOfInputs() {
                return j.numberOfInputs;
            },
            get numberOfOutputs() {
                return j.numberOfOutputs;
            },
            get oversample() {
                return j.oversample;
            },
            set oversample(_t) {
                j.oversample = _t, k.oversample = _t;
            },
            addEventListener: (..._h) => l.addEventListener(_h[0], _h[1], _h[2]),
            dispatchEvent: (..._h) => l.dispatchEvent(_h[0]),
            removeEventListener: (..._h) => l.removeEventListener(_h[0], _h[1], _h[2])
        };
        null !== _g && (s.curve = _g instanceof Float32Array ? _g : new Float32Array(_g)), _h !== s.oversample && (s.oversample = _h);
        return _f((0, e.interceptConnections)(s, n), () => {
            l.connect(j).connect(n), l.connect(m).connect(k).connect(o).connect(n), q = !0, c(r) && (p = _h(_g, l));
        }, () => {
            l.disconnect(j), j.disconnect(n), l.disconnect(m), m.disconnect(k), k.disconnect(o), o.disconnect(n), q = !1, null !== p && (p(), p = null);
        });
    };
}), a.register('566HC', function(b, c) {
    _h(b.exports, 'createNotSupportedError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'NotSupportedError');
}), a.register('iCWLu', function(b, c) {
    _h(b.exports, 'createOfflineAudioContextConstructor', function() {
        return _g;
    });
    var d = a('N6Hr7'),
        e = a('Sqwfw');
    const f = {
            numberOfChannels: 1
        },
        _g = (_h, a, b, c, _g) => class extends _h {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(b()) : (this._state = 'running', _g(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, d.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(_h) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(_h) : setTimeout(() => this._waitForThePromiseToSettle(_h));
            }
            constructor(h, i, j) {
                let k;
                if ('number' == typeof h && void 0 !== i && void 0 !== j)
                    k = {
                        length: i,
                        numberOfChannels: h,
                        sampleRate: j
                    };
                else {
                    if ('object' != typeof h)
                        throw new Error('The given parameters are not valid.');
                    k = h;
                }
                const {
                    length: l,
                    numberOfChannels: m,
                    sampleRate: n
                } = {
                    ...f,
                    ...k
                }, o = c(m, l, n);
                a(e.testPromiseSupport, () => (0, e.testPromiseSupport)(o)) || o.addEventListener('statechange', (() => {
                    let p = 0;
                    const q = i => {
                        'running' === this._state && (p > 0 ? (o.removeEventListener('statechange', q), i.stopImmediatePropagation(), this._waitForThePromiseToSettle(i)) : p += 1);
                    };
                    return q;
                })()), super(o, m), this._length = l, this._nativeOfflineAudioContext = o, this._state = null;
            }
        };
}), a.register('/IpnC', function(b, c) {
    _i(b.exports, 'createOscillatorNodeConstructor', function() {
        return _h;
    });
    var d = a('Higr5'),
        e = a('gRJJQ'),
        f = a('fMFC0');
    const g = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 440,
            periodicWave: void 0,
            type: 'sine'
        },
        _h = (_i, a, b, c, _h, _i, _m) => class extends _i {
            get detune() {
                return this._detune;
            }
            get frequency() {
                return this._frequency;
            }
            get onended() {
                return this._onended;
            }
            set onended(_i) {
                const j = 'function' == typeof _i ? _m(this, _i) : null;
                this._nativeOscillatorNode.onended = j;
                const k = this._nativeOscillatorNode.onended;
                this._onended = null !== k && k === j ? _i : k;
            }
            get type() {
                return this._nativeOscillatorNode.type;
            }
            set type(i) {
                this._nativeOscillatorNode.type = i, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null);
            }
            setPeriodicWave(i) {
                this._nativeOscillatorNode.setPeriodicWave(i), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = i);
            }
            start(i = 0) {
                if (this._nativeOscillatorNode.start(i), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = i), 'closed' !== this.context.state) {
                    (0, e.setInternalStateToActive)(this);
                    const j = () => {
                        this._nativeOscillatorNode.removeEventListener('ended', j), (0, d.isActiveAudioNode)(this) && (0, f.setInternalStateToPassive)(this);
                    };
                    this._nativeOscillatorNode.addEventListener('ended', j);
                }
            }
            stop(i = 0) {
                this._nativeOscillatorNode.stop(i), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = i);
            }
            constructor(i, j) {
                const k = _h(i),
                    l = {
                        ...g,
                        ...j
                    },
                    _m = b(k, l),
                    n = _i(k),
                    o = n ? c() : null,
                    p = i.sampleRate / 2;
                super(i, !1, _m, o), this._detune = a(this, n, _m.detune, 153600, -153600), this._frequency = a(this, n, _m.frequency, p, -p), this._nativeOscillatorNode = _m, this._onended = null, this._oscillatorNodeRenderer = o, null !== this._oscillatorNodeRenderer && void 0 !== l.periodicWave && (this._oscillatorNodeRenderer.periodicWave = l.periodicWave);
            }
        };
}), a.register('zmygh', function(b, c) {
    _j(b.exports, 'createOscillatorNodeRendererFactory', function() {
        return _e;
    });
    var d = a('V8YdD');
    const _e = (_j, a, b, c, _e) => () => {
        const f = new WeakMap();
        let g = null,
            h = null,
            _i = null;
        return {
            set periodicWave(_j) {
                g = _j;
            },
            set start(j) {
                h = j;
            },
            set stop(j) {
                _i = j;
            },
            render(j, k) {
                const l = f.get(k);
                return void 0 !== l ? Promise.resolve(l) : (async (j, k) => {
                    let m = b(j);
                    const n = (0, d.isOwnedByContext)(m, k);
                    if (!n) {
                        const o = {
                            channelCount: m.channelCount,
                            channelCountMode: m.channelCountMode,
                            channelInterpretation: m.channelInterpretation,
                            detune: m.detune.value,
                            frequency: m.frequency.value,
                            periodicWave: null === g ? void 0 : g,
                            type: m.type
                        };
                        m = a(k, o), null !== h && m.start(h), null !== _i && m.stop(_i);
                    }
                    return f.set(k, m), n ? (await _g(k, j.detune, m.detune), await _g(k, j.frequency, m.frequency)) : (await c(k, j.detune, m.detune), await c(k, j.frequency, m.frequency)), await _e(j, k, m), m;
                })(j, k);
            }
        };
    };
}), a.register('nUeBI', function(b, c) {
    _g(b.exports, 'createPannerNodeConstructor', function() {
        return _f;
    });
    var d = a('MZ6ZX');
    const e = {
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
        _f = (_g, a, b, c, _f, _u, _i) => class extends _g {
            get coneInnerAngle() {
                return this._nativePannerNode.coneInnerAngle;
            }
            set coneInnerAngle(_g) {
                this._nativePannerNode.coneInnerAngle = _g;
            }
            get coneOuterAngle() {
                return this._nativePannerNode.coneOuterAngle;
            }
            set coneOuterAngle(g) {
                this._nativePannerNode.coneOuterAngle = g;
            }
            get coneOuterGain() {
                return this._nativePannerNode.coneOuterGain;
            }
            set coneOuterGain(g) {
                this._nativePannerNode.coneOuterGain = g;
            }
            get distanceModel() {
                return this._nativePannerNode.distanceModel;
            }
            set distanceModel(g) {
                this._nativePannerNode.distanceModel = g;
            }
            get maxDistance() {
                return this._nativePannerNode.maxDistance;
            }
            set maxDistance(g) {
                this._nativePannerNode.maxDistance = g;
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
            set panningModel(g) {
                this._nativePannerNode.panningModel = g;
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
            set refDistance(g) {
                this._nativePannerNode.refDistance = g;
            }
            get rolloffFactor() {
                return this._nativePannerNode.rolloffFactor;
            }
            set rolloffFactor(g) {
                this._nativePannerNode.rolloffFactor = g;
            }
            constructor(g, h) {
                const i = _f(g),
                    j = {
                        ...e,
                        ...h
                    },
                    k = b(i, j),
                    l = _u(i);
                super(g, !1, k, l ? c() : null), this._nativePannerNode = k, this._orientationX = a(this, l, k.orientationX, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationY = a(this, l, k.orientationY, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationZ = a(this, l, k.orientationZ, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT), this._positionX = a(this, l, k.positionX, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT), this._positionY = a(this, l, k.positionY, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT), this._positionZ = a(this, l, k.positionZ, d.MOST_POSITIVE_SINGLE_FLOAT, d.MOST_NEGATIVE_SINGLE_FLOAT), _i(this, 1);
            }
        };
}), a.register('MQOik', function(b, c) {
    _q(b.exports, 'createPannerNodeRendererFactory', function() {
        return _f;
    });
    var d = a('L0TxC'),
        e = a('V8YdD');
    const _f = (_q, a, b, c, _f, _u, _i, _j, _j, _k) => () => {
        const g = new WeakMap();
        let h = null;
        return {
            render(i, j) {
                const k = g.get(j);
                return void 0 !== k ? Promise.resolve(k) : (async (i, j) => {
                    let l = null,
                        m = _u(i);
                    const n = {
                            channelCount: m.channelCount,
                            channelCountMode: m.channelCountMode,
                            channelInterpretation: m.channelInterpretation
                        },
                        o = {
                            ...n,
                            coneInnerAngle: m.coneInnerAngle,
                            coneOuterAngle: m.coneOuterAngle,
                            coneOuterGain: m.coneOuterGain,
                            distanceModel: m.distanceModel,
                            maxDistance: m.maxDistance,
                            panningModel: m.panningModel,
                            refDistance: m.refDistance,
                            rolloffFactor: m.rolloffFactor
                        },
                        p = (0, e.isOwnedByContext)(m, j);
                    if ('bufferSize' in m)
                        l = c(j, {
                            ...n,
                            gain: 1
                        });
                    else if (!p) {
                        const _q = {
                            ...o,
                            orientationX: m.orientationX.value,
                            orientationY: m.orientationY.value,
                            orientationZ: m.orientationZ.value,
                            positionX: m.positionX.value,
                            positionY: m.positionY.value,
                            positionZ: m.positionZ.value
                        };
                        m = _f(j, _q);
                    }
                    if (g.set(j, null === l ? m : l), null !== l) {
                        if (null === h) {
                            if (null === _i)
                                throw new Error('Missing the native OfflineAudioContext constructor.');
                            const q = new _i(6, i.context.length, j.sampleRate),
                                r = a(q, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: 6
                                });
                            r.connect(q.destination), h = (async () => {
                                const s = await Promise.all([
                                    i.orientationX,
                                    i.orientationY,
                                    i.orientationZ,
                                    i.positionX,
                                    i.positionY,
                                    i.positionZ
                                ].map(async (s, r) => {
                                    const t = b(q, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: 0 === r ? 1 : 0
                                    });
                                    return await _j(q, s, t.offset), t;
                                }));
                                for (let t = 0; t < 6; t += 1)
                                    s[t].connect(r, 0, t), s[t].start(0);
                                return _k(t);
                            })();
                        }
                        const q = await h,
                            r = c(j, {
                                ...n,
                                gain: 1
                            });
                        await _j(i, j, r);
                        const s = [];
                        for (let t = 0; t < q.numberOfChannels; t += 1)
                            s.push(q.getChannelData(t));
                        let _u = [
                                s[0][0],
                                s[1][0],
                                s[2][0]
                            ],
                            v = [
                                s[3][0],
                                s[4][0],
                                s[5][0]
                            ],
                            w = c(j, {
                                ...n,
                                gain: 1
                            }),
                            x = _f(j, {
                                ...o,
                                orientationX: _u[0],
                                orientationY: _u[1],
                                orientationZ: _u[2],
                                positionX: v[0],
                                positionY: v[1],
                                positionZ: v[2]
                            });
                        r.connect(w).connect(x.inputs[0]), x.connect(l);
                        for (let y = 128; y < q.length; y += 128) {
                            const z = [
                                    s[0][y],
                                    s[1][y],
                                    s[2][y]
                                ],
                                A = [
                                    s[3][y],
                                    s[4][y],
                                    s[5][y]
                                ];
                            if (z.some((z, y) => z !== _u[y]) || A.some((z, y) => z !== v[y])) {
                                _u = z, v = A;
                                const B = y / j.sampleRate;
                                w.gain.setValueAtTime(0, B), w = c(j, {
                                    ...n,
                                    gain: 0
                                }), x = _f(j, {
                                    ...o,
                                    orientationX: _u[0],
                                    orientationY: _u[1],
                                    orientationZ: _u[2],
                                    positionX: v[0],
                                    positionY: v[1],
                                    positionZ: v[2]
                                }), w.gain.setValueAtTime(1, B), r.connect(w).connect(x.inputs[0]), x.connect(l);
                            }
                        }
                        return l;
                    }
                    return p ? (await _f(j, i.orientationX, m.orientationX), await _f(j, i.orientationY, m.orientationY), await _f(j, i.orientationZ, m.orientationZ), await _f(j, i.positionX, m.positionX), await _f(j, i.positionY, m.positionY), await _f(j, i.positionZ, m.positionZ)) : (await _j(j, i.orientationX, m.orientationX), await _j(j, i.orientationY, m.orientationY), await _j(j, i.orientationZ, m.orientationZ), await _j(j, i.positionX, m.positionX), await _j(j, i.positionY, m.positionY), await _j(j, i.positionZ, m.positionZ)), (0, d.isNativeAudioNodeFaker)(m) ? await _j(i, j, m.inputs[0]) : await _j(i, j, m), m;
                })(i, j);
            }
        };
    };
}), a.register('RPRTo', function(b, c) {
    _f(b.exports, 'createPeriodicWaveConstructor', function() {
        return _e;
    });
    const d = {
            disableNormalization: !1
        },
        _e = (_f, b, c, _e) => class _f {
            static[Symbol.hasInstance](_f) {
                return null !== _f && 'object' == typeof _f && Object.getPrototypeOf(_f) === _f.prototype || c.has(_f);
            }
            constructor(_f, g) {
                const h = b(_f),
                    _i = _e({
                        ...d,
                        ...g
                    }),
                    _j = _f(h, _i);
                return c.add(_j), _j;
            }
        };
}), a.register('Opsxc', function(b, c) {
    _f(b.exports, 'createRenderAutomation', function() {
        return _d;
    });
    const _d = (_f, b) => (c, _d, _d) => (_f(_d).replay(_d), b(_d, c, _d));
}), a.register('oacgo', function(b, c) {
    _f(b.exports, 'createRenderInputsOfAudioNode', function() {
        return _d;
    });
    const _d = (_f, b, c) => async (_d, _d, _e) => {
        const e = _f(_d);
        await Promise.all(e.activeInputs.map((_f, e) => Array.from(_f).map(async ([_f, g]) => {
            const h = b(_f),
                i = await h.render(_f, _d),
                _j = _d.context.destination;
            c(_f) || _d === _j && c(_d) || i.connect(_e, g, e);
        })).reduce((_f, b) => [
            ..._f,
            ...b
        ], []));
    };
}), a.register('E3bIR', function(b, c) {
    _f(b.exports, 'createRenderInputsOfAudioParam', function() {
        return _d;
    });
    const _d = (_f, b, c) => async (_d, _d, _e) => {
        const e = b(_d);
        await Promise.all(Array.from(e.activeInputs).map(async ([f, g]) => {
            const h = _f(f),
                i = await h.render(f, _d);
            c(f) || i.connect(_e, g);
        }));
    };
}), a.register('fU78A', function(b, c) {
    _f(b.exports, 'createRenderNativeOfflineAudioContext', function() {
        return _e;
    });
    var _d = a('Sqwfw');
    const _e = (_f, a, b, c) => _e => _f(_d.testPromiseSupport, () => (0, _d.testPromiseSupport)(_e)) ? Promise.resolve(_f(c, c)).then(_f => {
        if (!_f) {
            const _f = b(_e, 512, 0, 1);
            _e.oncomplete = () => {
                _f.onaudioprocess = null, _f.disconnect();
            }, _f.onaudioprocess = () => _e.currentTime, _f.connect(_e.destination);
        }
        return _e.startRendering();
    }) : new Promise(_f => {
        const f = a(_e, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        _e.oncomplete = a => {
            f.disconnect(), _f(a.renderedBuffer);
        }, f.connect(_e.destination), _e.startRendering();
    });
}), a.register('jRMaF', function(b, c) {
    _f(b.exports, 'createSetActiveAudioWorkletNodeInputs', function() {
        return _d;
    });
    const _d = _f => (b, c) => {
        _f.set(b, c);
    };
}), a.register('NedRb', function(b, c) {
    _f(b.exports, 'createSetAudioNodeTailTime', function() {
        return _d;
    });
    const _d = _f => (b, c) => _f.set(b, c);
}), a.register('u3Wi9', function(b, c) {
    _f(b.exports, 'createStartRendering', function() {
        return _e;
    });
    var d = a('saIH8');
    const _e = (_f, a, b, c, _e, _f, _g, _h) => (_i, _j) => b(_i).render(_i, _j).then(() => Promise.all(Array.from(c(_j)).map(_f => b(_f).render(_f, _j)))).then(() => _e(_j)).then(b => ('function' != typeof b.copyFromChannel ? (_g(b), (0, d.wrapAudioBufferGetChannelDataMethod)(b)) : a(_f, () => _f(b)) || _h(b), _f.add(b), b));
}), a.register('7919z', function(b, c) {
    _f(b.exports, 'createStereoPannerNodeConstructor', function() {
        return _e;
    });
    const d = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            pan: 0
        },
        _e = (_f, b, c, _e, _e, _f) => class extends _f {
            get pan() {
                return this._pan;
            }
            constructor(_f, _g) {
                const _h = _e(_f),
                    _i = {
                        ...d,
                        ..._g
                    },
                    _j = c(_h, _i),
                    _k = _f(_h);
                super(_f, !1, _j, _k ? _e() : null), this._pan = b(this, _k, _j.pan);
            }
        };
}), a.register('0s/QR', function(b, c) {
    _m(b.exports, 'createStereoPannerNodeRendererFactory', function() {
        return _f;
    });
    var d = a('L0TxC'),
        _e = a('V8YdD');
    const _f = (_m, a, b, c, _f) => () => {
        const g = new WeakMap();
        return {
            render(h, i) {
                const j = g.get(i);
                return void 0 !== j ? Promise.resolve(j) : (async (h, i) => {
                    let k = b(h);
                    const l = (0, _e.isOwnedByContext)(k, i);
                    if (!l) {
                        const _m = {
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            pan: k.pan.value
                        };
                        k = a(i, _m);
                    }
                    return g.set(i, k), l ? await _f(i, h.pan, k.pan) : await c(i, h.pan, k.pan), (0, d.isNativeAudioNodeFaker)(k) ? await _f(h, i, k.inputs[0]) : await _f(h, i, k), k;
                })(h, i);
            }
        };
    };
}), a.register('vSlnD', function(b, c) {
    _f(b.exports, 'createTestAudioBufferConstructorSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        try {
            new _f({
                length: 1,
                sampleRate: 44100
            });
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('aP4wO', function(b, c) {
    _f(b.exports, 'createTestAudioBufferCopyChannelMethodsSubarraySupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        const e = new _f(1, 1, 44100).createBuffer(1, 1, 44100);
        if (void 0 === e.copyToChannel)
            return !0;
        const f = new Float32Array(2);
        try {
            e.copyFromChannel(f, 0, 0);
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('EC3NH', function(b, c) {
    _f(b.exports, 'createTestAudioContextCloseMethodSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        if (void 0 !== _f.prototype && void 0 !== _f.prototype.close)
            return !0;
        const e = new _f(),
            f = void 0 !== e.close;
        try {
            e.close();
        } catch {}
        return f;
    };
}), a.register('m3IG+', function(b, c) {
    _f(b.exports, 'createTestAudioContextDecodeAudioDataMethodTypeErrorSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return Promise.resolve(!1);
        const e = new _f(1, 1, 44100);
        return new Promise(_f => {
            let f = !0;
            const g = g => {
                f && (f = !1, e.startRendering(), _f(g instanceof TypeError));
            };
            let h;
            try {
                h = e.decodeAudioData(null, () => {}, g);
            } catch (_f) {
                g(_f);
            }
            void 0 !== h && h.catch(g);
        });
    };
}), a.register('eG8vk', function(b, c) {
    _f(b.exports, 'createTestAudioContextOptionsSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        let e;
        try {
            e = new _f({
                latencyHint: 'balanced'
            });
        } catch {
            return !1;
        }
        return e.close(), !0;
    };
}), a.register('w62/V', function(b, c) {
    _f(b.exports, 'createTestAudioNodeConnectMethodSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        const e = new _f(1, 1, 44100).createGain(),
            f = e.connect(e) === e;
        return e.disconnect(e), f;
    };
}), a.register('3Q0vm', function(b, c) {
    _f(b.exports, 'createTestAudioWorkletProcessorNoOutputsSupport', function() {
        return _d;
    });
    const _d = (_f, b) => async () => {
        if (null === _f)
            return !0;
        if (null === b)
            return !1;
        const e = new Blob(['let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'], {
                type: 'application/javascript; charset=utf-8'
            }),
            f = new MessageChannel(),
            g = new b(1, 128, 44100),
            h = URL.createObjectURL(e);
        let i = !1;
        try {
            await g.audioWorklet.addModule(h);
            const j = new _f(g, 'a', {
                    numberOfOutputs: 0
                }),
                k = g.createOscillator();
            await new Promise(_f => {
                j.port.onmessage = () => _f(), j.port.postMessage(f.port2, [f.port2]);
            }), j.port.onmessage = () => i = !0, k.connect(j), k.start(0), await g.startRendering(), i = await new Promise(_f => {
                f.port1.onmessage = ({
                    data: l
                }) => _f(1 === l), f.port1.postMessage(0);
            });
        } catch {} finally {
            f.port1.close(), URL.revokeObjectURL(h);
        }
        return i;
    };
}), a.register('VCplO', function(b, c) {
    _f(b.exports, 'createTestAudioWorkletProcessorPostMessageSupport', function() {
        return _d;
    });
    const _d = (_f, b) => async () => {
        if (null === _f)
            return !0;
        if (null === b)
            return !1;
        const e = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
                type: 'application/javascript; charset=utf-8'
            }),
            f = new b(1, 128, 44100),
            g = URL.createObjectURL(e);
        let h = !1,
            i = !1;
        try {
            await f.audioWorklet.addModule(g);
            const j = new _f(f, 'a', {
                    numberOfOutputs: 0
                }),
                k = f.createOscillator();
            j.port.onmessage = () => h = !0, j.onprocessorerror = () => i = !0, k.connect(j), k.start(0), await f.startRendering();
        } catch {} finally {
            URL.revokeObjectURL(g);
        }
        return h && !i;
    };
}), a.register('4ezA1', function(b, c) {
    _f(b.exports, 'createTestChannelMergerNodeChannelCountSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        const e = new _f(1, 1, 44100).createChannelMerger();
        if ('max' === e.channelCountMode)
            return !0;
        try {
            e.channelCount = 2;
        } catch {
            return !0;
        }
        return !1;
    };
}), a.register('x/hu3', function(b, c) {
    _f(b.exports, 'createTestConstantSourceNodeAccurateSchedulingSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        const e = new _f(1, 1, 44100);
        if (void 0 === e.createConstantSource)
            return !0;
        return e.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY;
    };
}), a.register('eaFnX', function(b, c) {
    _f(b.exports, 'createTestConvolverNodeBufferReassignabilitySupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        const e = new _f(1, 1, 44100),
            f = e.createConvolver();
        f.buffer = e.createBuffer(1, 1, e.sampleRate);
        try {
            f.buffer = e.createBuffer(1, 1, e.sampleRate);
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('tmV5Q', function(b, c) {
    _f(b.exports, 'createTestConvolverNodeChannelCountSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        const e = new _f(1, 1, 44100).createConvolver();
        try {
            e.channelCount = 1;
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('tP/IN', function(b, c) {
    _f(b.exports, 'createTestIsSecureContextSupport', function() {
        return _d;
    });
    const _d = _f => () => null !== _f && _f.hasOwnProperty('isSecureContext');
}), a.register('4Tx8Z', function(b, c) {
    _f(b.exports, 'createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return !1;
        const e = new _f();
        try {
            return e.createMediaStreamSource(new MediaStream()), !1;
        } catch (_f) {
            return !0;
        } finally {
            e.close();
        }
    };
}), a.register('gQXmi', function(b, c) {
    _f(b.exports, 'createTestOfflineAudioContextCurrentTimeSupport', function() {
        return _d;
    });
    const _d = (_f, b) => () => {
        if (null === b)
            return Promise.resolve(!1);
        const e = new b(1, 1, 44100),
            f = _f(e, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            });
        return new Promise(_f => {
            e.oncomplete = () => {
                f.disconnect(), _f(0 !== e.currentTime);
            }, e.startRendering();
        });
    };
}), a.register('2Zux/', function(b, c) {
    _f(b.exports, 'createTestStereoPannerNodeDefaultValueSupport', function() {
        return _d;
    });
    const _d = _f => () => {
        if (null === _f)
            return Promise.resolve(!1);
        const e = new _f(1, 1, 44100);
        if (void 0 === e.createStereoPanner)
            return Promise.resolve(!0);
        if (void 0 === e.createConstantSource)
            return Promise.resolve(!0);
        const f = e.createConstantSource(),
            g = e.createStereoPanner();
        return f.channelCount = 1, f.offset.value = 1, g.channelCount = 1, f.start(), f.connect(g).connect(e.destination), e.startRendering().then(_f => 1 !== _f.getChannelData(0)[0]);
    };
}), a.register('f9CWA', function(b, c) {
    _f(b.exports, 'createUnknownError', function() {
        return _d;
    });
    const _d = () => new DOMException('', 'UnknownError');
}), a.register('tElmV', function(b, c) {
    _f(b.exports, 'createWaveShaperNodeConstructor', function() {
        return _e;
    });
    const d = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            curve: null,
            oversample: 'none'
        },
        _e = (_f, b, c, _e, _e, _f, _i) => class extends _f {
            get curve() {
                return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
            }
            set curve(_f) {
                if (null === _f)
                    this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([
                        0,
                        0
                    ]);
                else {
                    if (_f.length < 2)
                        throw b();
                    this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = _f;
                }
            }
            get oversample() {
                return this._nativeWaveShaperNode.oversample;
            }
            set oversample(f) {
                this._nativeWaveShaperNode.oversample = f;
            }
            constructor(f, g) {
                const h = _e(f),
                    i = {
                        ...d,
                        ...g
                    },
                    j = c(h, i);
                super(f, !0, j, _f(h) ? _e() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = j, _i(this, 1);
            }
        };
}), a.register('37wmf', function(b, c) {
    _k(b.exports, 'createWaveShaperNodeRendererFactory', function() {
        return _f;
    });
    var d = a('L0TxC'),
        _e = a('V8YdD');
    const _f = (_k, a, b) => () => {
        const g = new WeakMap();
        return {
            render(h, _i) {
                const j = g.get(_i);
                return void 0 !== j ? Promise.resolve(j) : (async (h, _i) => {
                    let k = a(h);
                    if (!(0, _e.isOwnedByContext)(k, _i)) {
                        const l = {
                            channelCount: k.channelCount,
                            channelCountMode: k.channelCountMode,
                            channelInterpretation: k.channelInterpretation,
                            curve: k.curve,
                            oversample: k.oversample
                        };
                        k = _k(_i, l);
                    }
                    return g.set(_i, k), (0, d.isNativeAudioNodeFaker)(k) ? await b(h, _i, k.inputs[0]) : await b(h, _i, k), k;
                })(h, _i);
            }
        };
    };
}), a.register('GfYZt', function(b, c) {
    _k(b.exports, 'createWindow', function() {
        return _d;
    });
    const _d = () => 'undefined' == typeof window ? null : window;
}), a.register('/tBPj', function(b, c) {
    _k(b.exports, 'createWrapAudioBufferCopyChannelMethods', function() {
        return _d;
    });
    const _d = (_k, b) => c => {
        c.copyFromChannel = (_d, _e, e = 0) => {
            const f = _k(e),
                g = _k(_e);
            if (g >= c.numberOfChannels)
                throw b();
            const h = c.length,
                i = c.getChannelData(g),
                j = _d.length;
            for (let _k = f < 0 ? -f : 0; _k + f < h && _k < j; _k += 1)
                _d[_k] = i[_k + f];
        }, c.copyToChannel = (_d, _e, f = 0) => {
            const g = _l(f),
                h = _l(_e);
            if (h >= c.numberOfChannels)
                throw b();
            const i = c.length,
                j = c.getChannelData(h),
                k = _d.length;
            for (let _l = g < 0 ? -g : 0; _l + g < i && _l < k; _l += 1)
                j[_l + g] = _d[_l];
        };
    };
}), a.register('az1aV', function(b, c) {
    _f(b.exports, 'createWrapAudioBufferCopyChannelMethodsOutOfBounds', function() {
        return _d;
    });
    const _d = _f => b => {
        var e, f;
        b.copyFromChannel = (e = b.copyFromChannel, (f, _e, g = 0) => {
            const h = _f(g),
                i = _f(_e);
            if (h < b.length)
                return e.call(b, f, i, h);
        }), b.copyToChannel = (f = b.copyToChannel, (e, _e, h = 0) => {
            const i = _f(h),
                j = _f(_e);
            if (i < b.length)
                return f.call(b, e, j, i);
        });
    };
}), a.register('1o46S', function(b, c) {
    _f(b.exports, 'createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer', function() {
        return _d;
    });
    const _d = _f => (b, c) => {
        const e = c.createBuffer(1, 1, 44100);
        null === b.buffer && (b.buffer = e), _f(b, 'buffer', _f => () => {
            const f = _f.call(b);
            return f === e ? null : f;
        }, _f => c => _f.call(b, null === c ? e : c));
    };
}), a.register('Z3PzN', function(b, c) {
    _f(b.exports, 'createWrapChannelMergerNode', function() {
        return _d;
    });
    const _d = (_f, b) => (c, _d) => {
        _d.channelCount = 1, _d.channelCountMode = 'explicit', Object.defineProperty(_d, 'channelCount', {
            get: () => 1,
            set: () => {
                throw _f();
            }
        }), Object.defineProperty(_d, 'channelCountMode', {
            get: () => 'explicit',
            set: () => {
                throw _f();
            }
        });
        const _e = c.createBufferSource();
        b(_d, () => {
            const _f = _d.numberOfInputs;
            for (let g = 0; g < _f; g += 1)
                _e.connect(_d, 0, g);
        }, () => _e.disconnect(_d));
    };
}), a.register('d8xAS', function(b, c) {
    _b(b.exports, 'getFirstSample', function() {
        return _d;
    });
    const _d = (_b, b, c) => void 0 === _b.copyFromChannel ? _b.getChannelData(c)[0] : (_b.copyFromChannel(b, c), b[0]);
}), a.register('V7vd9', function(b, c) {
    _b(b.exports, 'isDCCurve', function() {
        return _d;
    });
    const _d = _b => {
        if (null === _b)
            return !1;
        const e = _b.length;
        return e % 2 != 0 ? 0 !== _b[Math.floor(e / 2)] : _b[e / 2 - 1] + _b[e / 2] !== 0;
    };
}), a.register('YsE1u', function(b, c) {
    _b(b.exports, 'overwriteAccessors', function() {
        return _d;
    });
    const _d = (_b, b, c, _d) => {
        let e = _b;
        for (; !e.hasOwnProperty(b);)
            e = Object.getPrototypeOf(e);
        const {
            get: f,
            set: g
        } = Object.getOwnPropertyDescriptor(e, b);
        Object.defineProperty(_b, b, {
            get: c(f),
            set: _d(g)
        });
    };
}), a.register('fVieL', function(b, c) {
    _b(b.exports, 'sanitizeAudioWorkletNodeOptions', function() {
        return _d;
    });
    const _d = _b => ({
        ..._b,
        outputChannelCount: void 0 !== _b.outputChannelCount ? _b.outputChannelCount : 1 === _b.numberOfInputs && 1 === _b.numberOfOutputs ? [_b.channelCount] : Array.from({
            length: _b.numberOfOutputs
        }, () => 1)
    });
}), a.register('yf7C4', function(b, c) {
    _b(b.exports, 'sanitizeChannelSplitterOptions', function() {
        return _d;
    });
    const _d = _b => ({
        ..._b,
        channelCount: _b.numberOfOutputs
    });
}), a.register('gMBz4', function(b, c) {
    _b(b.exports, 'sanitizePeriodicWaveOptions', function() {
        return _d;
    });
    const _d = _b => {
        const {
            imag: e,
            real: f
        } = _b;
        return void 0 === e ? void 0 === f ? {
            ..._b,
            imag: [
                0,
                0
            ],
            real: [
                0,
                0
            ]
        } : {
            ..._b,
            imag: Array.from(f, () => 0),
            real: f
        } : void 0 === f ? {
            ..._b,
            imag: e,
            real: Array.from(e, () => 0)
        } : {
            ..._b,
            imag: e,
            real: f
        };
    };
}), a.register('8Ebgs', function(b, c) {
    _b(b.exports, 'setValueAtTimeUntilPossible', function() {
        return _d;
    });
    const _d = (_b, b, c) => {
        try {
            _b.setValueAtTime(b, c);
        } catch (_d) {
            if (9 !== _d.code)
                throw _d;
            _d(_b, b, c + 1e-7);
        }
    };
}), a.register('tUK55', function(b, c) {
    _b(b.exports, 'testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport', function() {
        return _d;
    });
    const _d = _b => {
        const e = _b.createBufferSource();
        e.start();
        try {
            e.start();
        } catch {
            return !0;
        }
        return !1;
    };
}), a.register('lwwpl', function(b, c) {
    _b(b.exports, 'testAudioBufferSourceNodeStartMethodOffsetClampingSupport', function() {
        return _d;
    });
    const _d = _b => {
        const e = _b.createBufferSource(),
            f = _b.createBuffer(1, 1, 44100);
        e.buffer = f;
        try {
            e.start(0, 1);
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('Lkj5q', function(b, c) {
    _b(b.exports, 'testAudioBufferSourceNodeStopMethodNullifiedBufferSupport', function() {
        return _d;
    });
    const _d = _b => {
        const e = _b.createBufferSource();
        e.start();
        try {
            e.stop();
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('C2FK3', function(b, c) {
    _b(b.exports, 'testAudioScheduledSourceNodeStartMethodNegativeParametersSupport', function() {
        return _d;
    });
    const _d = _b => {
        const e = _b.createOscillator();
        try {
            e.start(-1);
        } catch (_b) {
            return _b instanceof RangeError;
        }
        return !1;
    };
}), a.register('9f4HP', function(b, c) {
    _b(b.exports, 'testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport', function() {
        return _d;
    });
    const _d = _b => {
        const e = _b.createBuffer(1, 1, 44100),
            f = _b.createBufferSource();
        f.buffer = e, f.start(), f.stop();
        try {
            return f.stop(), !0;
        } catch {
            return !1;
        }
    };
}), a.register('v8dRM', function(b, c) {
    _b(b.exports, 'testAudioScheduledSourceNodeStopMethodNegativeParametersSupport', function() {
        return _d;
    });
    const _d = _b => {
        const e = _b.createOscillator();
        try {
            e.stop(-1);
        } catch (_b) {
            return _b instanceof RangeError;
        }
        return !1;
    };
}), a.register('zu7H3', function(b, c) {
    _b(b.exports, 'testAudioWorkletNodeOptionsClonability', function() {
        return _d;
    });
    const _d = _b => {
        const {
            port1: e,
            port2: f
        } = new MessageChannel();
        try {
            e.postMessage(_b);
        } finally {
            e.close(), f.close();
        }
    };
}), a.register('FyTYY', function(b, c) {
    _b(b.exports, 'testDomExceptionConstructorSupport', function() {
        return _d;
    });
    const _d = () => {
        try {
            new DOMException();
        } catch {
            return !1;
        }
        return !0;
    };
}), a.register('6Hsxo', function(b, c) {
    _b(b.exports, 'testTransferablesSupport', function() {
        return _d;
    });
    const _d = () => new Promise(_b => {
        const e = new ArrayBuffer(0),
            {
                port1: f,
                port2: g
            } = new MessageChannel();
        f.onmessage = ({
            data: h
        }) => _b(null !== h), g.postMessage(h, [h]);
    });
}), a.register('1Dgzs', function(b, c) {
    _b(b.exports, 'wrapAudioBufferSourceNodeStartMethodOffsetClamping', function() {
        return _d;
    });
    const _d = _b => {
        var e;
        _b.start = (e = _b.start, (f = 0, g = 0, _d) => {
            const h = _b.buffer,
                i = null === h ? g : Math.min(h.duration, g);
            null !== h && i > h.duration - 0.5 / _b.context.sampleRate ? e.call(_b, f, 0, 0) : e.call(_b, f, i, _d);
        });
    };
}), a.register('ecJTv', function(b, c) {
    _b(b.exports, 'wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls', function() {
        return _e;
    });
    var _d = a('vKkD+');
    const _e = (_b, a) => {
        const f = a.createGain();
        _b.connect(f);
        const g = (_e = _b.disconnect, () => {
            _e.call(_b, f), _b.removeEventListener('ended', g);
        });
        var h;
        _b.addEventListener('ended', g), (0, _d.interceptConnections)(_b, f), _b.stop = (a => {
            let i = !1;
            return (j = 0) => {
                if (i)
                    try {
                        a.call(_b, j);
                    } catch {
                        f.gain.setValueAtTime(0, j);
                    }
                else
                    a.call(_b, j), i = !0;
            };
        })(_b.stop);
    };
}), a.register('Z4HQT0', function(b, c) {
    _b(b.exports, 'wrapEventListener', function() {
        return _d;
    });
    const _d = (_b, b) => c => {
        const e = {
            value: _b
        };
        return Object.defineProperties(c, {
            currentTarget: e,
            target: e
        }), 'function' == typeof b ? b.call(_b, c) : b.handleEvent.call(_b, c);
    };
}), a.register('V4qiz', function(_b, c) {
    a('PQSr+527'), a('PQSr+526'), a('PQSr+525'), a('PQSr+524'), a('PQSr+523'), a('PQSr+522'), a('PQSr+521'), a('PQSr+520'), a('PQSr+519'), a('PQSr+518'), a('PQSr+517'), a('PQSr+516'), a('PQSr+515'), a('PQSr+514'), a('PQSr+513'), a('PQSr+512'), a('PQSr+511'), a('PQSr+510'), a('PQSr+509'), a('PQSr+508'), a('PQSr+507'), a('PQSr+506'), a('PQSr+505'), a('PQSr+504'), a('PQSr+503'), a('PQSr+502'), a('PQSr+501'), a('PQSr+500'), a('PQSr+499'), a('PQSr+498'), a('PQSr+497'), a('PQSr+496'), a('PQSr+495'), a('PQSr+494'), a('PQSr+493'), a('PQSr+492'), a('PQSr+491'), a('PQSr+490'), a('PQSr+489'), a('PQSr+488'), a('PQSr+487'), a('PQSr+486'), a('PQSr+485'), a('PQSr+484'), a('PQSr+483'), a('PQSr+482'), a('PQSr+481'), a('PQSr+480'), a('PQSr+479'), a('PQSr+478'), a('PQSr+477'), a('PQSr+476'), a('PQSr+475'), a('PQSr+474'), a('PQSr+473'), a('PQSr+472'), a('PQSr+471'), a('PQSr+470'), a('PQSr+469'), a('PQSr+468'), a('PQSr+467'), a('PQSr+466'), a('PQSr+465'), a('PQSr+464'), a('PQSr+463'), a('PQSr+462'), a('PQSr+461'), a('PQSr+460'), a('PQSr+459'), a('PQSr+458'), a('PQSr+457'), a('PQSr+456'), a('PQSr+455'), a('PQSr+454'), a('PQSr+453'), a('PQSr+452'), a('PQSr+451'), a('PQSr+450'), a('PQSr+449'), a('PQSr+448'), a('PQSr+447'), a('PQSr+446'), a('PQSr+445'), a('PQSr+444');
}), a.register('PQSr+527', function(b, c) {}), a.register('PQSr+526', function(b, c) {}), a.register('PQSr+525', function(b, c) {}), a.register('PQSr+524', function(b, c) {}), a.register('PQSr+523', function(b, c) {}), a.register('PQSr+522', function(b, c) {}), a.register('PQSr+521', function(b, c) {}), a.register('PQSr+520', function(b, c) {}), a.register('PQSr+519', function(b, c) {}), a.register('PQSr+518', function(b, c) {}), a.register('PQSr+517', function(b, c) {}), a.register('PQSr+516', function(b, c) {}), a.register('PQSr+515', function(b, c) {}), a.register('PQSr+514', function(b, c) {}), a.register('PQSr+513', function(b, c) {}), a.register('PQSr+512', function(b, c) {}), a.register('PQSr+511', function(b, c) {}), a.register('PQSr+510', function(b, c) {}), a.register('PQSr+509', function(b, c) {}), a.register('PQSr+508', function(b, c) {}), a.register('PQSr+507', function(b, c) {}), a.register('PQSr+506', function(b, c) {}), a.register('PQSr+505', function(b, c) {}), a.register('PQSr+504', function(b, c) {}), a.register('PQSr+503', function(b, c) {}), a.register('PQSr+502', function(b, c) {}), a.register('PQSr+501', function(b, c) {}), a.register('PQSr+500', function(b, c) {}), a.register('PQSr+499', function(b, c) {}), a.register('PQSr+498', function(b, c) {}), a.register('PQSr+497', function(b, c) {}), a.register('PQSr+496', function(b, c) {}), a.register('PQSr+495', function(b, c) {}), a.register('PQSr+494', function(b, c) {}), a.register('PQSr+493', function(b, c) {}), a.register('PQSr+492', function(b, c) {}), a.register('PQSr+491', function(b, c) {}), a.register('PQSr+490', function(b, c) {}), a.register('PQSr+489', function(b, c) {}), a.register('PQSr+488', function(b, c) {}), a.register('PQSr+487', function(b, c) {}), a.register('PQSr+486', function(b, c) {}), a.register('PQSr+485', function(b, c) {}), a.register('PQSr+484', function(b, c) {}), a.register('PQSr+483', function(b, c) {}), a.register('PQSr+482', function(b, c) {}), a.register('PQSr+481', function(b, c) {}), a.register('PQSr+480', function(b, c) {}), a.register('PQSr+479', function(b, c) {}), a.register('PQSr+478', function(b, c) {}), a.register('PQSr+477', function(b, c) {}), a.register('PQSr+476', function(b, c) {}), a.register('PQSr+475', function(b, c) {}), a.register('PQSr+474', function(b, c) {}), a.register('PQSr+473', function(b, c) {}), a.register('PQSr+472', function(b, c) {}), a.register('PQSr+471', function(b, c) {}), a.register('PQSr+470', function(b, c) {}), a.register('PQSr+469', function(b, c) {}), a.register('PQSr+468', function(b, c) {}), a.register('PQSr+467', function(b, c) {}), a.register('PQSr+466', function(b, c) {}), a.register('PQSr+465', function(b, c) {}), a.register('PQSr+464', function(b, c) {}), a.register('PQSr+463', function(b, c) {}), a.register('PQSr+462', function(b, c) {}), a.register('PQSr+461', function(b, c) {}), a.register('PQSr+460', function(b, c) {}), a.register('PQSr+459', function(b, c) {}), a.register('PQSr+458', function(b, c) {}), a.register('PQSr+457', function(b, c) {}), a.register('PQSr+456', function(b, c) {}), a.register('PQSr+455', function(b, c) {}), a.register('PQSr+454', function(b, c) {}), a.register('PQSr+453', function(b, c) {}), a.register('PQSr+452', function(b, c) {}), a.register('PQSr+451', function(b, c) {}), a.register('PQSr+450', function(b, c) {}), a.register('PQSr+449', function(b, c) {}), a.register('PQSr+448', function(b, c) {}), a.register('PQSr+447', function(b, c) {}), a.register('PQSr+446', function(b, c) {}), a.register('PQSr+445', function(b, c) {}), a.register('PQSr+444', function(b, c) {}), a.register('MY8WK', function(b, c) {
    a('PQSr+443'), a('PQSr+442'), a('PQSr+441'), a('PQSr+440'), a('PQSr+439'), a('PQSr+438'), a('PQSr+437'), a('PQSr+436'), a('PQSr+435'), a('PQSr+434'), a('PQSr+433'), a('PQSr+432'), a('PQSr+431'), a('PQSr+430'), a('PQSr+429'), a('PQSr+428'), a('PQSr+427'), a('PQSr+426'), a('PQSr+425'), a('PQSr+424'), a('PQSr+423'), a('PQSr+422'), a('PQSr+421'), a('PQSr+420'), a('PQSr+419'), a('PQSr+418'), a('PQSr+417'), a('PQSr+416'), a('PQSr+415'), a('PQSr+414'), a('PQSr+413'), a('PQSr+412'), a('PQSr+411'), a('PQSr+410'), a('PQSr+409'), a('PQSr+408'), a('PQSr+407'), a('PQSr+406'), a('PQSr+405'), a('PQSr+404'), a('PQSr+403'), a('PQSr+402'), a('PQSr+401'), a('PQSr+400'), a('PQSr+399'), a('PQSr+398'), a('PQSr+397'), a('PQSr+396'), a('PQSr+395'), a('PQSr+394'), a('PQSr+393'), a('PQSr+392'), a('PQSr+391'), a('PQSr+390'), a('PQSr+389'), a('PQSr+388'), a('PQSr+387'), a('PQSr+386'), a('PQSr+385'), a('PQSr+384'), a('PQSr+383'), a('PQSr+382'), a('PQSr+381'), a('PQSr+380'), a('PQSr+379'), a('PQSr+378'), a('PQSr+377'), a('PQSr+376'), a('PQSr+375'), a('PQSr+374'), a('PQSr+373'), a('PQSr+372'), a('PQSr+371'), a('PQSr+370'), a('PQSr+369'), a('PQSr+368'), a('PQSr+367'), a('PQSr+366'), a('PQSr+365'), a('PQSr+364'), a('PQSr+363'), a('PQSr+362'), a('PQSr+361'), a('PQSr+360'), a('PQSr+359'), a('PQSr+358'), a('PQSr+357'), a('PQSr+356'), a('PQSr+355'), a('PQSr+354'), a('PQSr+353'), a('PQSr+352'), a('PQSr+351'), a('PQSr+350'), a('PQSr+349'), a('PQSr+348'), a('PQSr+347'), a('PQSr+346'), a('PQSr+345'), a('PQSr+344'), a('PQSr+343'), a('PQSr+342'), a('PQSr+341'), a('PQSr+340'), a('PQSr+339'), a('PQSr+338'), a('PQSr+337'), a('PQSr+336'), a('PQSr+335'), a('PQSr+334'), a('PQSr+333'), a('PQSr+332'), a('PQSr+331'), a('PQSr+330'), a('PQSr+329'), a('PQSr+328'), a('PQSr+327'), a('PQSr+326'), a('PQSr+325'), a('PQSr+324'), a('PQSr+323'), a('PQSr+322'), a('PQSr+321'), a('PQSr+320'), a('PQSr+319'), a('PQSr+318'), a('PQSr+317'), a('PQSr+316'), a('PQSr+315'), a('PQSr+314'), a('PQSr+313'), a('PQSr+312'), a('PQSr+311'), a('PQSr+310'), a('PQSr+309'), a('PQSr+308'), a('PQSr+307'), a('PQSr+306'), a('PQSr+305'), a('PQSr+304'), a('PQSr+303'), a('PQSr+302'), a('PQSr+301'), a('PQSr+300'), a('PQSr+299'), a('PQSr+298'), a('PQSr+297'), a('PQSr+296'), a('PQSr+295'), a('PQSr+294'), a('PQSr+293'), a('PQSr+292'), a('PQSr+291'), a('PQSr+290'), a('PQSr+289'), a('PQSr+288'), a('PQSr+287'), a('PQSr+286'), a('PQSr+285'), a('PQSr+284'), a('PQSr+283'), a('PQSr+282'), a('PQSr+281'), a('PQSr+280'), a('PQSr+279'), a('PQSr+278'), a('PQSr+277'), a('PQSr+276'), a('PQSr+275'), a('PQSr+274'), a('PQSr+273'), a('PQSr+272'), a('PQSr+271'), a('PQSr+270'), a('PQSr+269'), a('PQSr+268'), a('PQSr+267'), a('PQSr+266'), a('PQSr+265'), a('PQSr+264'), a('PQSr+263'), a('PQSr+262'), a('PQSr+261'), a('PQSr+260'), a('PQSr+259'), a('PQSr+258'), a('PQSr+257'), a('PQSr+256'), a('PQSr+255'), a('PQSr+254'), a('PQSr+253'), a('PQSr+252'), a('PQSr+251'), a('PQSr+250'), a('PQSr+249'), a('PQSr+248'), a('PQSr+247'), a('PQSr+246'), a('PQSr+245'), a('PQSr+244'), a('PQSr+243'), a('PQSr+242'), a('PQSr+241'), a('PQSr+240'), a('PQSr+239'), a('PQSr+238'), a('PQSr+237'), a('PQSr+236'), a('PQSr+235'), a('PQSr+234'), a('PQSr+233'), a('PQSr+232'), a('PQSr+231'), a('PQSr+230'), a('PQSr+229'), a('PQSr+228'), a('PQSr+227'), a('PQSr+226'), a('PQSr+225'), a('PQSr+224'), a('PQSr+223'), a('PQSr+222'), a('PQSr+221'), a('PQSr+220'), a('PQSr+219'), a('PQSr+218'), a('PQSr+217'), a('5qd96'), a('PQSr+216'), a('PQSr+215'), a('PQSr+214'), a('PQSr+213'), a('PQSr+212'), a('PQSr+211'), a('PQSr+210'), a('PQSr+209'), a('PQSr+208'), a('PQSr+207'), a('PQSr+206'), a('PQSr+205'), a('PQSr+204'), a('PQSr+203'), a('PQSr+202'), a('PQSr+201'), a('PQSr+200'), a('PQSr+199'), a('PQSr+198'), a('PQSr+197'), a('PQSr+196'), a('PQSr+195'), a('PQSr+194'), a('PQSr+193'), a('PQSr+192'), a('PQSr+191'), a('PQSr+190'), a('PQSr+189'), a('PQSr+188'), a('PQSr+187'), a('PQSr+186'), a('PQSr+185'), a('PQSr+184'), a('PQSr+183'), a('PQSr+182'), a('PQSr+181'), a('PQSr+180'), a('PQSr+179'), a('PQSr+178'), a('PQSr+177'), a('PQSr+176'), a('PQSr+175'), a('PQSr+174'), a('PQSr+173'), a('PQSr+172'), a('PQSr+171'), a('PQSr+170'), a('PQSr+169'), a('PQSr+168'), a('PQSr+167'), a('PQSr+166'), a('PQSr+165'), a('PQSr+164'), a('PQSr+163'), a('PQSr+162'), a('PQSr+161'), a('PQSr+160'), a('PQSr+159'), a('PQSr+158'), a('PQSr+157'), a('PQSr+156'), a('PQSr+155'), a('PQSr+154'), a('PQSr+153'), a('PQSr+152'), a('PQSr+151'), a('PQSr+150'), a('PQSr+149'), a('PQSr+148'), a('PQSr+147'), a('PQSr+146'), a('PQSr+145'), a('PQSr+144'), a('PQSr+143'), a('PQSr+142'), a('PQSr+141'), a('PQSr+140'), a('PQSr+139'), a('PQSr+138'), a('PQSr+137'), a('PQSr+136'), a('PQSr+135'), a('PQSr+134'), a('PQSr+133'), a('PQSr+132'), a('PQSr+131'), a('PQSr+130'), a('PQSr+129'), a('PQSr+128'), a('PQSr+127'), a('PQSr+126'), a('PQSr+125'), a('PQSr+124'), a('PQSr+123'), a('PQSr+122'), a('PQSr+121'), a('PQSr+120'), a('PQSr+119'), a('PQSr+118'), a('PQSr+117'), a('PQSr+116'), a('PQSr+115'), a('PQSr+114'), a('PQSr+113'), a('PQSr+112'), a('PQSr+111'), a('PQSr+110'), a('PQSr+109'), a('PQSr+108'), a('PQSr+107'), a('PQSr+106'), a('PQSr+105'), a('PQSr+104'), a('PQSr+103'), a('PQSr+102'), a('PQSr+101'), a('PQSr+100'), a('PQSr+99'), a('PQSr+98'), a('PQSr+97'), a('PQSr+96'), a('PQSr+95'), a('PQSr+94'), a('PQSr+93'), a('PQSr+92'), a('PQSr+91'), a('PQSr+90'), a('PQSr+89'), a('PQSr+88'), a('PQSr+87'), a('PQSr+86'), a('PQSr+85'), a('PQSr+84'), a('PQSr+83'), a('PQSr+82'), a('PQSr+81'), a('PQSr+80'), a('PQSr+79'), a('PQSr+78'), a('PQSr+77'), a('PQSr+76'), a('PQSr+75'), a('PQSr+74'), a('PQSr+73'), a('PQSr+72'), a('PQSr+71'), a('PQSr+70'), a('PQSr+69'), a('PQSr+68'), a('PQSr+67'), a('PQSr+66'), a('PQSr+65'), a('PQSr+64'), a('PQSr+63'), a('PQSr+62'), a('PQSr+61'), a('PQSr+60'), a('PQSr+59'), a('PQSr+58'), a('PQSr+57'), a('PQSr+56'), a('PQSr+55'), a('PQSr+54'), a('PQSr+53'), a('PQSr+52'), a('PQSr+51'), a('PQSr+50');
}), a.register('PQSr+443', function(b, c) {}), a.register('PQSr+442', function(b, c) {}), a.register('PQSr+441', function(b, c) {}), a.register('PQSr+440', function(b, c) {}), a.register('PQSr+439', function(b, c) {}), a.register('PQSr+438', function(b, c) {}), a.register('PQSr+437', function(b, c) {}), a.register('PQSr+436', function(b, c) {}), a.register('PQSr+435', function(b, c) {}), a.register('PQSr+434', function(b, c) {}), a.register('PQSr+433', function(b, c) {}), a.register('PQSr+432', function(b, c) {}), a.register('PQSr+431', function(b, c) {}), a.register('PQSr+430', function(b, c) {}), a.register('PQSr+429', function(b, c) {}), a.register('PQSr+428', function(b, c) {}), a.register('PQSr+427', function(b, c) {}), a.register('PQSr+426', function(b, c) {}), a.register('PQSr+425', function(b, c) {}), a.register('PQSr+424', function(b, c) {}), a.register('PQSr+423', function(b, c) {}), a.register('PQSr+422', function(b, c) {}), a.register('PQSr+421', function(b, c) {}), a.register('PQSr+420', function(b, c) {}), a.register('PQSr+419', function(b, c) {}), a.register('PQSr+418', function(b, c) {}), a.register('PQSr+417', function(b, c) {}), a.register('PQSr+416', function(b, c) {}), a.register('PQSr+415', function(b, c) {}), a.register('PQSr+414', function(b, c) {}), a.register('PQSr+413', function(b, c) {}), a.register('PQSr+412', function(b, c) {}), a.register('PQSr+411', function(b, c) {}), a.register('PQSr+410', function(b, c) {}), a.register('PQSr+409', function(b, c) {}), a.register('PQSr+408', function(b, c) {}), a.register('PQSr+407', function(b, c) {}), a.register('PQSr+406', function(b, c) {}), a.register('PQSr+405', function(b, c) {}), a.register('PQSr+404', function(b, c) {}), a.register('PQSr+403', function(b, c) {}), a.register('PQSr+402', function(b, c) {}), a.register('PQSr+401', function(b, c) {}), a.register('PQSr+400', function(b, c) {}), a.register('PQSr+399', function(b, c) {}), a.register('PQSr+398', function(b, c) {}), a.register('PQSr+397', function(b, c) {}), a.register('PQSr+396', function(b, c) {}), a.register('PQSr+395', function(b, c) {}), a.register('PQSr+394', function(b, c) {}), a.register('PQSr+393', function(b, c) {}), a.register('PQSr+392', function(b, c) {}), a.register('PQSr+391', function(b, c) {}), a.register('PQSr+390', function(b, c) {}), a.register('PQSr+389', function(b, c) {}), a.register('PQSr+388', function(b, c) {}), a.register('PQSr+387', function(b, c) {}), a.register('PQSr+386', function(b, c) {}), a.register('PQSr+385', function(b, c) {}), a.register('PQSr+384', function(b, c) {}), a.register('PQSr+383', function(b, c) {}), a.register('PQSr+382', function(b, c) {}), a.register('PQSr+381', function(b, c) {}), a.register('PQSr+380', function(b, c) {}), a.register('PQSr+379', function(b, c) {}), a.register('PQSr+378', function(b, c) {}), a.register('PQSr+377', function(b, c) {}), a.register('PQSr+376', function(b, c) {}), a.register('PQSr+375', function(b, c) {}), a.register('PQSr+374', function(b, c) {}), a.register('PQSr+373', function(b, c) {}), a.register('PQSr+372', function(b, c) {}), a.register('PQSr+371', function(b, c) {}), a.register('PQSr+370', function(b, c) {}), a.register('PQSr+369', function(b, c) {}), a.register('PQSr+368', function(b, c) {}), a.register('PQSr+367', function(b, c) {}), a.register('PQSr+366', function(b, c) {}), a.register('PQSr+365', function(b, c) {}), a.register('PQSr+364', function(b, c) {}), a.register('PQSr+363', function(b, c) {}), a.register('PQSr+362', function(b, c) {}), a.register('PQSr+361', function(b, c) {}), a.register('PQSr+360', function(b, c) {}), a.register('PQSr+359', function(b, c) {}), a.register('PQSr+358', function(b, c) {}), a.register('PQSr+357', function(b, c) {}), a.register('PQSr+356', function(b, c) {}), a.register('PQSr+355', function(b, c) {}), a.register('PQSr+354', function(b, c) {}), a.register('PQSr+353', function(b, c) {}), a.register('PQSr+352', function(b, c) {}), a.register('PQSr+351', function(b, c) {}), a.register('PQSr+350', function(b, c) {}), a.register('PQSr+349', function(b, c) {}), a.register('PQSr+348', function(b, c) {}), a.register('PQSr+347', function(b, c) {}), a.register('PQSr+346', function(b, c) {}), a.register('PQSr+345', function(b, c) {}), a.register('PQSr+344', function(b, c) {}), a.register('PQSr+343', function(b, c) {}), a.register('PQSr+342', function(b, c) {}), a.register('PQSr+341', function(b, c) {}), a.register('PQSr+340', function(b, c) {}), a.register('PQSr+339', function(b, c) {}), a.register('PQSr+338', function(b, c) {}), a.register('PQSr+337', function(b, c) {}), a.register('PQSr+336', function(b, c) {}), a.register('PQSr+335', function(b, c) {}), a.register('PQSr+334', function(b, c) {}), a.register('PQSr+333', function(b, c) {}), a.register('PQSr+332', function(b, c) {}), a.register('PQSr+331', function(b, c) {}), a.register('PQSr+330', function(b, c) {}), a.register('PQSr+329', function(b, c) {}), a.register('PQSr+328', function(b, c) {}), a.register('PQSr+327', function(b, c) {}), a.register('PQSr+326', function(b, c) {}), a.register('PQSr+325', function(b, c) {}), a.register('PQSr+324', function(b, c) {}), a.register('PQSr+323', function(b, c) {}), a.register('PQSr+322', function(b, c) {}), a.register('PQSr+321', function(b, c) {}), a.register('PQSr+320', function(b, c) {}), a.register('PQSr+319', function(b, c) {}), a.register('PQSr+318', function(b, c) {}), a.register('PQSr+317', function(b, c) {}), a.register('PQSr+316', function(b, c) {}), a.register('PQSr+315', function(b, c) {}), a.register('PQSr+314', function(b, c) {}), a.register('PQSr+313', function(b, c) {}), a.register('PQSr+312', function(b, c) {}), a.register('PQSr+311', function(b, c) {}), a.register('PQSr+310', function(b, c) {}), a.register('PQSr+309', function(b, c) {}), a.register('PQSr+308', function(b, c) {}), a.register('PQSr+307', function(b, c) {}), a.register('PQSr+306', function(b, c) {}), a.register('PQSr+305', function(b, c) {}), a.register('PQSr+304', function(b, c) {}), a.register('PQSr+303', function(b, c) {}), a.register('PQSr+302', function(b, c) {}), a.register('PQSr+301', function(b, c) {}), a.register('PQSr+300', function(b, c) {}), a.register('PQSr+299', function(b, c) {}), a.register('PQSr+298', function(b, c) {}), a.register('PQSr+297', function(b, c) {}), a.register('PQSr+296', function(b, c) {}), a.register('PQSr+295', function(b, c) {}), a.register('PQSr+294', function(b, c) {}), a.register('PQSr+293', function(b, c) {}), a.register('PQSr+292', function(b, c) {}), a.register('PQSr+291', function(b, c) {}), a.register('PQSr+290', function(b, c) {}), a.register('PQSr+289', function(b, c) {}), a.register('PQSr+288', function(b, c) {}), a.register('PQSr+287', function(b, c) {}), a.register('PQSr+286', function(b, c) {}), a.register('PQSr+285', function(b, c) {}), a.register('PQSr+284', function(b, c) {}), a.register('PQSr+283', function(b, c) {}), a.register('PQSr+282', function(b, c) {}), a.register('PQSr+281', function(b, c) {}), a.register('PQSr+280', function(b, c) {}), a.register('PQSr+279', function(b, c) {}), a.register('PQSr+278', function(b, c) {}), a.register('PQSr+277', function(b, c) {}), a.register('PQSr+276', function(b, c) {}), a.register('PQSr+275', function(b, c) {}), a.register('PQSr+274', function(b, c) {}), a.register('PQSr+273', function(b, c) {}), a.register('PQSr+272', function(b, c) {}), a.register('PQSr+271', function(b, c) {}), a.register('PQSr+270', function(b, c) {}), a.register('PQSr+269', function(b, c) {}), a.register('PQSr+268', function(b, c) {}), a.register('PQSr+267', function(b, c) {}), a.register('PQSr+266', function(b, c) {}), a.register('PQSr+265', function(b, c) {}), a.register('PQSr+264', function(b, c) {}), a.register('PQSr+263', function(b, c) {}), a.register('PQSr+262', function(b, c) {}), a.register('PQSr+261', function(b, c) {}), a.register('PQSr+260', function(b, c) {}), a.register('PQSr+259', function(b, c) {}), a.register('PQSr+258', function(b, c) {}), a.register('PQSr+257', function(b, c) {}), a.register('PQSr+256', function(b, c) {}), a.register('PQSr+255', function(b, c) {}), a.register('PQSr+254', function(b, c) {}), a.register('PQSr+253', function(b, c) {}), a.register('PQSr+252', function(b, c) {}), a.register('PQSr+251', function(b, c) {}), a.register('PQSr+250', function(b, c) {}), a.register('PQSr+249', function(b, c) {}), a.register('PQSr+248', function(b, c) {}), a.register('PQSr+247', function(b, c) {}), a.register('PQSr+246', function(b, c) {}), a.register('PQSr+245', function(b, c) {}), a.register('PQSr+244', function(b, c) {}), a.register('PQSr+243', function(b, c) {}), a.register('PQSr+242', function(b, c) {}), a.register('PQSr+241', function(b, c) {}), a.register('PQSr+240', function(b, c) {}), a.register('PQSr+239', function(b, c) {}), a.register('PQSr+238', function(b, c) {}), a.register('PQSr+237', function(b, c) {}), a.register('PQSr+236', function(b, c) {}), a.register('PQSr+235', function(b, c) {}), a.register('PQSr+234', function(b, c) {}), a.register('PQSr+233', function(b, c) {}), a.register('PQSr+232', function(b, c) {}), a.register('PQSr+231', function(b, c) {}), a.register('PQSr+230', function(b, c) {}), a.register('PQSr+229', function(b, c) {}), a.register('PQSr+228', function(b, c) {}), a.register('PQSr+227', function(b, c) {}), a.register('PQSr+226', function(b, c) {}), a.register('PQSr+225', function(b, c) {}), a.register('PQSr+224', function(b, c) {}), a.register('PQSr+223', function(b, c) {}), a.register('PQSr+222', function(b, c) {}), a.register('PQSr+221', function(b, c) {}), a.register('PQSr+220', function(b, c) {}), a.register('PQSr+219', function(b, c) {}), a.register('PQSr+218', function(b, c) {}), a.register('PQSr+217', function(b, c) {}), a.register('5qd96', function(b, c) {});
a.register('PQSr+216', function(b, c) {}), a.register('PQSr+215', function(b, c) {}), a.register('PQSr+214', function(b, c) {}), a.register('PQSr+213', function(b, c) {}), a.register('PQSr+212', function(b, c) {}), a.register('PQSr+211', function(b, c) {}), a.register('PQSr+210', function(b, c) {}), a.register('PQSr+209', function(b, c) {}), a.register('PQSr+208', function(b, c) {}), a.register('PQSr+207', function(b, c) {}), a.register('PQSr+206', function(b, c) {}), a.register('PQSr+205', function(b, c) {}), a.register('PQSr+204', function(b, c) {}), a.register('PQSr+203', function(b, c) {}), a.register('PQSr+202', function(b, c) {}), a.register('PQSr+201', function(b, c) {}), a.register('PQSr+200', function(b, c) {}), a.register('PQSr+199', function(b, c) {}), a.register('PQSr+198', function(b, c) {}), a.register('PQSr+197', function(b, c) {}), a.register('PQSr+196', function(b, c) {}), a.register('PQSr+195', function(b, c) {}), a.register('PQSr+194', function(b, c) {}), a.register('PQSr+193', function(b, c) {}), a.register('PQSr+192', function(b, c) {}), a.register('PQSr+191', function(b, c) {}), a.register('PQSr+190', function(b, c) {}), a.register('PQSr+189', function(b, c) {}), a.register('PQSr+188', function(b, c) {}), a.register('PQSr+187', function(b, c) {}), a.register('PQSr+186', function(b, c) {}), a.register('PQSr+185', function(b, c) {}), a.register('PQSr+184', function(b, c) {}), a.register('PQSr+183', function(b, c) {}), a.register('PQSr+182', function(b, c) {}), a.register('PQSr+181', function(b, c) {}), a.register('PQSr+180', function(b, c) {}), a.register('PQSr+179', function(b, c) {}), a.register('PQSr+178', function(b, c) {}), a.register('PQSr+177', function(b, c) {}), a.register('PQSr+176', function(b, c) {}), a.register('PQSr+175', function(b, c) {}), a.register('PQSr+174', function(b, c) {}), a.register('PQSr+173', function(b, c) {}), a.register('PQSr+172', function(b, c) {}), a.register('PQSr+171', function(b, c) {}), a.register('PQSr+170', function(b, c) {}), a.register('PQSr+169', function(b, c) {}), a.register('PQSr+168', function(b, c) {}), a.register('PQSr+167', function(b, c) {}), a.register('PQSr+166', function(b, c) {}), a.register('PQSr+165', function(b, c) {}), a.register('PQSr+164', function(b, c) {}), a.register('PQSr+163', function(b, c) {}), a.register('PQSr+162', function(b, c) {}), a.register('PQSr+161', function(b, c) {}), a.register('PQSr+160', function(b, c) {}), a.register('PQSr+159', function(b, c) {}), a.register('PQSr+158', function(b, c) {}), a.register('PQSr+157', function(b, c) {}), a.register('PQSr+156', function(b, c) {}), a.register('PQSr+155', function(b, c) {}), a.register('PQSr+154', function(b, c) {}), a.register('PQSr+153', function(b, c) {}), a.register('PQSr+152', function(b, c) {}), a.register('PQSr+151', function(b, c) {}), a.register('PQSr+150', function(b, c) {}), a.register('PQSr+149', function(b, c) {}), a.register('PQSr+148', function(b, c) {}), a.register('PQSr+147', function(b, c) {}), a.register('PQSr+146', function(b, c) {}), a.register('PQSr+145', function(b, c) {}), a.register('PQSr+144', function(b, c) {}), a.register('PQSr+143', function(b, c) {}), a.register('PQSr+142', function(b, c) {}), a.register('PQSr+141', function(b, c) {}), a.register('PQSr+140', function(b, c) {}), a.register('PQSr+139', function(b, c) {}), a.register('PQSr+138', function(b, c) {}), a.register('PQSr+137', function(b, c) {}), a.register('PQSr+136', function(b, c) {}), a.register('PQSr+135', function(b, c) {}), a.register('PQSr+134', function(b, c) {}), a.register('PQSr+133', function(b, c) {}), a.register('PQSr+132', function(b, c) {}), a.register('PQSr+131', function(b, c) {}), a.register('PQSr+130', function(b, c) {}), a.register('PQSr+129', function(b, c) {}), a.register('PQSr+128', function(b, c) {}), a.register('PQSr+127', function(b, c) {}), a.register('PQSr+126', function(b, c) {}), a.register('PQSr+125', function(b, c) {}), a.register('PQSr+124', function(b, c) {}), a.register('PQSr+123', function(b, c) {}), a.register('PQSr+122', function(b, c) {}), a.register('PQSr+121', function(b, c) {}), a.register('PQSr+120', function(b, c) {}), a.register('PQSr+119', function(b, c) {}), a.register('PQSr+118', function(b, c) {}), a.register('PQSr+117', function(b, c) {}), a.register('PQSr+116', function(b, c) {}), a.register('PQSr+115', function(b, c) {}), a.register('PQSr+114', function(b, c) {}), a.register('PQSr+113', function(b, c) {}), a.register('PQSr+112', function(b, c) {}), a.register('PQSr+111', function(b, c) {}), a.register('PQSr+110', function(b, c) {}), a.register('PQSr+109', function(b, c) {}), a.register('PQSr+108', function(b, c) {}), a.register('PQSr+107', function(b, c) {}), a.register('PQSr+106', function(b, c) {}), a.register('PQSr+105', function(b, c) {}), a.register('PQSr+104', function(b, c) {}), a.register('PQSr+103', function(b, c) {}), a.register('PQSr+102', function(b, c) {}), a.register('PQSr+101', function(b, c) {}), a.register('PQSr+100', function(b, c) {}), a.register('PQSr+99', function(b, c) {}), a.register('PQSr+98', function(b, c) {}), a.register('PQSr+97', function(b, c) {}), a.register('PQSr+96', function(b, c) {}), a.register('PQSr+95', function(b, c) {}), a.register('PQSr+94', function(b, c) {}), a.register('PQSr+93', function(b, c) {}), a.register('PQSr+92', function(b, c) {}), a.register('PQSr+91', function(b, c) {}), a.register('PQSr+90', function(b, c) {}), a.register('PQSr+89', function(b, c) {}), a.register('PQSr+88', function(b, c) {}), a.register('PQSr+87', function(b, c) {}), a.register('PQSr+86', function(b, c) {}), a.register('PQSr+85', function(b, c) {}), a.register('PQSr+84', function(b, c) {}), a.register('PQSr+83', function(b, c) {}), a.register('PQSr+82', function(b, c) {}), a.register('PQSr+81', function(b, c) {}), a.register('PQSr+80', function(b, c) {}), a.register('PQSr+79', function(b, c) {}), a.register('PQSr+78', function(b, c) {}), a.register('PQSr+77', function(b, c) {}), a.register('PQSr+76', function(b, c) {}), a.register('PQSr+75', function(b, c) {}), a.register('PQSr+74', function(b, c) {}), a.register('PQSr+73', function(b, c) {}), a.register('PQSr+72', function(b, c) {}), a.register('PQSr+71', function(b, c) {}), a.register('PQSr+70', function(b, c) {}), a.register('PQSr+69', function(b, c) {}), a.register('PQSr+68', function(b, c) {}), a.register('PQSr+67', function(b, c) {}), a.register('PQSr+66', function(b, c) {}), a.register('PQSr+65', function(b, c) {}), a.register('PQSr+64', function(b, c) {}), a.register('PQSr+63', function(b, c) {}), a.register('PQSr+62', function(b, c) {}), a.register('PQSr+61', function(b, c) {}), a.register('PQSr+60', function(b, c) {}), a.register('PQSr+59', function(b, c) {}), a.register('PQSr+58', function(b, c) {}), a.register('PQSr+57', function(b, c) {}), a.register('PQSr+56', function(b, c) {}), a.register('PQSr+55', function(b, c) {}), a.register('PQSr+54', function(b, c) {}), a.register('PQSr+53', function(b, c) {}), a.register('PQSr+52', function(b, c) {}), a.register('PQSr+51', function(b, c) {}), a.register('PQSr+50', function(b, c) {}), a.register('zjUdg', function(b, c) {
    _r(b.exports, 'createWebmPcmMediaRecorderFactory', function() {
        return _g;
    });
    var d = a('Y/6Wh'),
        e = a('us2rw'),
        f = a('JZ/gp');
    const _g = (_r, a, b, c, _g) => (_k, _u, _v, _A) => {
        const h = _v.getAudioTracks(),
            i = [],
            j = 0 === h.length ? void 0 : h[0].getSettings().channelCount,
            k = new _u(_v, {
                mimeType: 'audio/webm;codecs=pcm'
            }),
            l = 0 === h.length ? void 0 : h[0].getSettings().sampleRate;
        let m = null,
            n = () => {};
        const o = a => {
                _k.dispatchEvent(_r('dataavailable', {
                    data: new Blob(a, {
                        type: _A
                    })
                }));
            },
            p = async (_r, a) => {
                const q = await (0, d.encode)(_r, a);
                'inactive' === k.state ? i.push(...q) : (o(q), m = p(_r, a));
            }, q = () => {
                'inactive' !== k.state && (null !== m && (m.catch(() => {}), m = null), n(), n = () => {}, k.stop());
            };
        return k.addEventListener('error', () => {
            q(), _k.dispatchEvent(new ErrorEvent('error', {
                error: a()
            }));
        }), k.addEventListener('start', () => _k.dispatchEvent(new Event('start'))), {
            get mimeType() {
                return _A;
            },
            get state() {
                return k.state;
            },
            pause: () => k.pause(),
            resume: () => k.resume(),
            start(_r) {
                if (_v.getVideoTracks().length > 0)
                    throw b();
                if ('inactive' === k.state) {
                    if (void 0 === l)
                        throw new Error('The sampleRate is not defined.');
                    let s = !1,
                        t = !1,
                        _u = 0,
                        _v = (0, d.instantiate)(_A, l);
                    n = () => {
                        t = !0;
                    };
                    const w = (0, f.on)(k, 'dataavailable')(({
                        data: x
                    }) => {
                        _u += 1, _v = _v.then(async ({
                            dataView: y = null,
                            elementType: z = null,
                            encoderId: _A,
                            port: B
                        }) => {
                            const C = await x.arrayBuffer();
                            _u -= 1;
                            const D = null === y ? new(0, e.MultiBufferDataView)([C]) : new(0, e.MultiBufferDataView)([
                                ...y.buffers,
                                C
                            ], y.byteOffset);
                            if (!s && 'recording' === k.state && !t) {
                                const E = _g(D, 0);
                                if (null === E)
                                    return {
                                        dataView: D,
                                        elementType: z,
                                        encoderId: _A,
                                        port: B
                                    };
                                const {
                                    value: F
                                } = E;
                                if (172351395 !== F)
                                    return {
                                        dataView: y,
                                        elementType: z,
                                        encoderId: _A,
                                        port: B
                                    };
                                s = !0;
                            }
                            const {
                                currentElementType: E,
                                offset: F,
                                contents: G
                            } = c(D, z, j), H = F < D.byteLength ? new(0, e.MultiBufferDataView)(D.buffers, D.byteOffset + F) : null;
                            return G.forEach(x => B.postMessage(x, x.map(({
                                buffer: I
                            }) => I))), 0 !== _u || 'inactive' !== k.state && !t || ((0, d.encode)(_A, null).then(I => {
                                o([
                                    ...i,
                                    ...I
                                ]), i.length = 0, _k.dispatchEvent(new Event('stop'));
                            }), B.postMessage([]), B.close(), w()), {
                                dataView: H,
                                elementType: E,
                                encoderId: _A,
                                port: B
                            };
                        });
                    });
                    void 0 !== x && _v.then(({
                        encoderId: y
                    }) => m = p(y, x));
                }
                k.start(100);
            },
            stop: q
        };
    };
}), a.register('us2rw', function(b, c) {
    b.exports,
        function(d, e, f, g) {
            function h(i) {
                return i && 'object' == typeof i && 'default' in i ? i : {
                    default: i
                };
            }
            var h = _p(e),
                i = _p(f),
                j = _p(g);

            function _k(l, m) {
                var n = 'undefined' != typeof Symbol && l[Symbol.iterator] || l['@@iterator'];
                if (!n) {
                    if (Array.isArray(l) || (n = _k(l)) || m && l && 'number' == typeof l.length) {
                        n && (l = n);
                        var o = 0,
                            _p = function() {};
                        return {
                            s: _p,
                            n: function() {
                                return o >= l.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: l[o++]
                                };
                            },
                            e: function(q) {
                                throw q;
                            },
                            f: _p
                        };
                    }
                    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }
                var o, p = !0,
                    q = !1;
                return {
                    s: function() {
                        n = n.call(l);
                    },
                    n: function() {
                        var r = n.next();
                        return p = r.done, r;
                    },
                    e: function(r) {
                        q = !0, o = r;
                    },
                    f: function() {
                        try {
                            p || null == n.return || n.return();
                        } finally {
                            if (q)
                                throw o;
                        }
                    }
                };
            }

            function _k(l, m) {
                if (l) {
                    if ('string' == typeof l)
                        return _k(l, m);
                    var n = Object.prototype.toString.call(l).slice(8, -1);
                    return 'Object' === n && l.constructor && (n = l.constructor.name), 'Map' === n || 'Set' === n ? Array.from(l) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _k(l, m) : void 0;
                }
            }

            function _k(l, m) {
                (null == m || m > l.length) && (m = l.length);
                for (var n = 0, o = new Array(m); n < m; n++)
                    o[n] = l[n];
                return o;
            }
            var k = function() {
                function l(m) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        o = arguments.length > 2 ? arguments[2] : void 0;
                    if (i.default(this, l), n < 0 || void 0 !== o && o < 0)
                        throw new RangeError();
                    var p = m.reduce(function(q, r) {
                        return q + r.byteLength;
                    }, 0);
                    if (n > p || void 0 !== o && n + o > p)
                        throw new RangeError();
                    var q, r = [],
                        s = void 0 === o ? p - n : o,
                        t = [],
                        u = 0,
                        v = n,
                        w = _l(m);
                    try {
                        for (w.s(); !(q = w.n()).done;) {
                            var x = q.value;
                            if (0 === t.length)
                                if (x.byteLength > v) {
                                    var y = (u = x.byteLength - v) > s ? s : u;
                                    r.push(new DataView(x, v, y)), t.push(x);
                                } else
                                    v -= x.byteLength;
                            else if (u < s) {
                                var y = (u += x.byteLength) > s ? x.byteLength - u + s : x.byteLength;
                                r.push(new DataView(x, 0, y)), t.push(x);
                            }
                        }
                    } catch (l) {
                        w.e(l);
                    } finally {
                        w.f();
                    }
                    this._buffers = t, this._byteLength = s, this._byteOffset = v, this._dataViews = r, this._internalBuffer = new DataView(new ArrayBuffer(8));
                }
                return j.default(d, [{
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
                        value: function(l, m) {
                            return this._internalBuffer.setUint8(0, this.getUint8(l + 0)), this._internalBuffer.setUint8(1, this.getUint8(l + 1)), this._internalBuffer.setUint8(2, this.getUint8(l + 2)), this._internalBuffer.setUint8(3, this.getUint8(l + 3)), this._internalBuffer.getFloat32(0, m);
                        }
                    },
                    {
                        key: 'getFloat64',
                        value: function(l, m) {
                            return this._internalBuffer.setUint8(0, this.getUint8(l + 0)), this._internalBuffer.setUint8(1, this.getUint8(l + 1)), this._internalBuffer.setUint8(2, this.getUint8(l + 2)), this._internalBuffer.setUint8(3, this.getUint8(l + 3)), this._internalBuffer.setUint8(4, this.getUint8(l + 4)), this._internalBuffer.setUint8(5, this.getUint8(l + 5)), this._internalBuffer.setUint8(6, this.getUint8(l + 6)), this._internalBuffer.setUint8(7, this.getUint8(l + 7)), this._internalBuffer.getFloat64(0, m);
                        }
                    },
                    {
                        key: 'getInt16',
                        value: function(l, m) {
                            return this._internalBuffer.setUint8(0, this.getUint8(l + 0)), this._internalBuffer.setUint8(1, this.getUint8(l + 1)), this._internalBuffer.getInt16(0, m);
                        }
                    },
                    {
                        key: 'getInt32',
                        value: function(l, m) {
                            return this._internalBuffer.setUint8(0, this.getUint8(l + 0)), this._internalBuffer.setUint8(1, this.getUint8(l + 1)), this._internalBuffer.setUint8(2, this.getUint8(l + 2)), this._internalBuffer.setUint8(3, this.getUint8(l + 3)), this._internalBuffer.getInt32(0, m);
                        }
                    },
                    {
                        key: 'getInt8',
                        value: function(l) {
                            var m = this._findDataViewWithOffset(l),
                                n = h.default(m, 2),
                                o = n[0],
                                p = n[1];
                            return o.getInt8(l - p);
                        }
                    },
                    {
                        key: 'getUint16',
                        value: function(l, m) {
                            return this._internalBuffer.setUint8(0, this.getUint8(l + 0)), this._internalBuffer.setUint8(1, this.getUint8(l + 1)), this._internalBuffer.getUint16(0, m);
                        }
                    },
                    {
                        key: 'getUint32',
                        value: function(l, m) {
                            return this._internalBuffer.setUint8(0, this.getUint8(l + 0)), this._internalBuffer.setUint8(1, this.getUint8(l + 1)), this._internalBuffer.setUint8(2, this.getUint8(l + 2)), this._internalBuffer.setUint8(3, this.getUint8(l + 3)), this._internalBuffer.getUint32(0, m);
                        }
                    },
                    {
                        key: 'getUint8',
                        value: function(l) {
                            var m = this._findDataViewWithOffset(l),
                                n = h.default(m, 2),
                                o = n[0],
                                p = n[1];
                            return o.getUint8(l - p);
                        }
                    },
                    {
                        key: 'setFloat32',
                        value: function(l, m, n) {
                            this._internalBuffer.setFloat32(0, m, n), this.setUint8(l, this._internalBuffer.getUint8(0)), this.setUint8(l + 1, this._internalBuffer.getUint8(1)), this.setUint8(l + 2, this._internalBuffer.getUint8(2)), this.setUint8(l + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setFloat64',
                        value: function(l, m, n) {
                            this._internalBuffer.setFloat64(0, m, n), this.setUint8(l, this._internalBuffer.getUint8(0)), this.setUint8(l + 1, this._internalBuffer.getUint8(1)), this.setUint8(l + 2, this._internalBuffer.getUint8(2)), this.setUint8(l + 3, this._internalBuffer.getUint8(3)), this.setUint8(l + 4, this._internalBuffer.getUint8(4)), this.setUint8(l + 5, this._internalBuffer.getUint8(5)), this.setUint8(l + 6, this._internalBuffer.getUint8(6)), this.setUint8(l + 7, this._internalBuffer.getUint8(7));
                        }
                    },
                    {
                        key: 'setInt16',
                        value: function(l, m, n) {
                            this._internalBuffer.setInt16(0, m, n), this.setUint8(l, this._internalBuffer.getUint8(0)), this.setUint8(l + 1, this._internalBuffer.getUint8(1));
                        }
                    },
                    {
                        key: 'setInt32',
                        value: function(l, m, n) {
                            this._internalBuffer.setInt32(0, m, n), this.setUint8(l, this._internalBuffer.getUint8(0)), this.setUint8(l + 1, this._internalBuffer.getUint8(1)), this.setUint8(l + 2, this._internalBuffer.getUint8(2)), this.setUint8(l + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setInt8',
                        value: function(l, m) {
                            var n = this._findDataViewWithOffset(l),
                                o = h.default(n, 2),
                                p = o[0],
                                q = o[1];
                            p.setInt8(l - q, m);
                        }
                    },
                    {
                        key: 'setUint16',
                        value: function(l, m, n) {
                            this._internalBuffer.setUint16(0, m, n), this.setUint8(l, this._internalBuffer.getUint8(0)), this.setUint8(l + 1, this._internalBuffer.getUint8(1));
                        }
                    },
                    {
                        key: 'setUint32',
                        value: function(l, m, n) {
                            this._internalBuffer.setUint32(0, m, n), this.setUint8(l, this._internalBuffer.getUint8(0)), this.setUint8(l + 1, this._internalBuffer.getUint8(1)), this.setUint8(l + 2, this._internalBuffer.getUint8(2)), this.setUint8(l + 3, this._internalBuffer.getUint8(3));
                        }
                    },
                    {
                        key: 'setUint8',
                        value: function(l, m) {
                            var n = this._findDataViewWithOffset(l),
                                o = h.default(n, 2),
                                p = o[0],
                                q = o[1];
                            p.setUint8(l - q, m);
                        }
                    },
                    {
                        key: '_findDataViewWithOffset',
                        value: function(l) {
                            var m, n = 0,
                                o = _l(this._dataViews);
                            try {
                                for (o.s(); !(m = o.n()).done;) {
                                    var p = m.value,
                                        q = n + p.byteLength;
                                    if (l >= n && l < q)
                                        return [
                                            p,
                                            n
                                        ];
                                    n = q;
                                }
                            } catch (l) {
                                o.e(l);
                            } finally {
                                o.f();
                            }
                            throw new RangeError();
                        }
                    }
                ]), d;
            }();
            d.MultiBufferDataView = k, Object.defineProperty(d, '__esModule', {
                value: !0
            });
        }(b.exports, a('gUc2a'), a('dS/Dz'), a('txoto'));
}), a.register('gUc2a', function(b, c) {
    var d = a('+W5dP'),
        e = a('f0Tjj'),
        f = a('19dyB'),
        g = a('iUBJw');
    b.exports = function(h, i) {
        return d(h) || e(h, i) || f(h, i) || g();
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('+W5dP', function(b, c) {
    b.exports = function(d) {
        if (Array.isArray(d))
            return d;
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('f0Tjj', function(b, c) {
    b.exports = function(d, e) {
        var f = null == d ? null : 'undefined' != typeof Symbol && d[Symbol.iterator] || d['@@iterator'];
        if (null != f) {
            var g, h, i, j, k = [],
                _l = !0,
                m = !1;
            try {
                if (i = (f = f.call(d)).next, 0 === e) {
                    if (Object(f) !== f)
                        return;
                    _l = !1;
                } else
                    for (; !(_l = (g = i.call(f)).done) && (k.push(g.value), k.length !== e); _l = !0);
            } catch (d) {
                m = !0, h = d;
            } finally {
                try {
                    if (!_l && null != f.return && (j = f.return(), Object(j) !== j))
                        return;
                } finally {
                    if (m)
                        throw h;
                }
            }
            return k;
        }
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('19dyB', function(b, c) {
    var d = a('QcYot');
    b.exports = function(e, f) {
        if (e) {
            if ('string' == typeof e)
                return d(e, f);
            var g = Object.prototype.toString.call(e).slice(8, -1);
            return 'Object' === g && e.constructor && (g = e.constructor.name), 'Map' === g || 'Set' === g ? Array.from(e) : 'Arguments' === g || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? d(e, f) : void 0;
        }
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('QcYot', function(b, c) {
    b.exports = function(d, e) {
        (null == e || e > d.length) && (e = d.length);
        for (var f = 0, g = new Array(e); f < e; f++)
            g[f] = d[f];
        return g;
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('iUBJw', function(b, c) {
    b.exports = function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('dS/Dz', function(b, c) {
    b.exports = function(d, e) {
        if (!(d instanceof e))
            throw new TypeError('Cannot call a class as a function');
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('txoto', function(b, c) {
    var d = a('WJRsE');

    function e(f, g) {
        for (var h = 0; h < g.length; h++) {
            var i = g[h];
            i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(f, d(i.key), i);
        }
    }
    b.exports = function(e, f, g) {
        return f && _e(e.prototype, f), g && _e(e, g), Object.defineProperty(e, 'prototype', {
            writable: !1
        }), e;
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('WJRsE', function(b, c) {
    var d = a('+6L5h').default,
        _e = a('f6KgI');
    b.exports = function(f) {
        var g = _e(f, 'string');
        return 'symbol' === d(g) ? g : String(g);
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('+6L5h', function(b, c) {
    function d(e) {
        return b.exports = d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(f) {
            return typeof f;
        } : function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.__esModule = !0, b.exports.default = b.exports, d(e);
    }
    b.exports = _c, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('f6KgI', function(b, _c) {
    var d = a('+6L5h').default;
    b.exports = function(e, f) {
        if ('object' !== d(e) || null === e)
            return e;
        var g = e[Symbol.toPrimitive];
        if (void 0 !== g) {
            var h = g.call(e, f || 'default');
            if ('object' !== d(h))
                return h;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === f ? String : Number)(e);
    }, b.exports.__esModule = !0, b.exports.default = b.exports;
}), a.register('+CmSA', function(b, c) {
    _b(b.exports, 'createWindow', function() {
        return _d;
    });
    const _d = () => 'undefined' == typeof window ? null : window;
}), a.register('a0iYq', function(b, c) {
    _b(b.exports, 'readVariableSizeIntegerLength', function() {
        return _d;
    });
    const _d = (_b, b) => {
        if (b >= _b.byteLength)
            return null;
        const e = _b.getUint8(b);
        if (e > 127)
            return 1;
        if (e > 63)
            return 2;
        if (e > 31)
            return 3;
        if (e > 15)
            return 4;
        if (e > 7)
            return 5;
        if (e > 3)
            return 6;
        if (e > 1)
            return 7;
        if (e > 0)
            return 8;
        const f = _d(_b, b + 1);
        return null === f ? null : f + 8;
    };
}), a.register('Z4HQT', function(b, c) {
    _b(b.exports, 'wrapEventListener', function() {
        return _d;
    });
    const _d = (_b, b) => c => {
        const e = {
            value: _b
        };
        return Object.defineProperties(c, {
            currentTarget: e,
            target: e
        }), 'function' == typeof b ? b.call(_b, c) : b.handleEvent.call(_b, c);
    };
}), a.register('Xw6SH', function(_b, c) {
    a('PQSr+49'), a('PQSr+48'), a('PQSr+47'), a('PQSr+46'), a('PQSr+45'), a('PQSr+44'), a('PQSr+43'), a('PQSr+42');
}), a.register('PQSr+49', function(b, c) {}), a.register('PQSr+48', function(b, c) {}), a.register('PQSr+47', function(b, c) {}), a.register('PQSr+46', function(b, c) {}), a.register('PQSr+45', function(b, c) {}), a.register('PQSr+44', function(b, c) {}), a.register('PQSr+43', function(b, c) {}), a.register('PQSr+42', function(b, c) {}), a.register('Ubize', function(b, c) {
    a('PQSr+41'), a('PQSr+40'), a('PQSr+39'), a('PQSr+38'), a('PQSr+37'), a('PQSr+36'), a('PQSr+35'), a('PQSr+34'), a('PQSr+33'), a('PQSr+32'), a('PQSr+31'), a('PQSr+30'), a('PQSr+29'), a('PQSr+28'), a('PQSr+27'), a('PQSr+26'), a('PQSr+25'), a('PQSr+24'), a('PQSr+23'), a('PQSr+22'), a('PQSr+21'), a('PQSr+20'), a('PQSr+19'), a('PQSr+18'), a('PQSr+17'), a('PQSr+16'), a('PQSr+15'), a('PQSr+14'), a('PQSr+13'), a('PQSr+12'), a('PQSr+11'), a('PQSr+10'), a('PQSr+9'), a('PQSr+8'), a('PQSr+7'), a('PQSr+6'), a('PQSr+5'), a('PQSr+4'), a('PQSr+3');
}), a.register('PQSr+41', function(b, c) {}), a.register('PQSr+40', function(b, c) {}), a.register('PQSr+39', function(b, c) {}), a.register('PQSr+38', function(b, c) {}), a.register('PQSr+37', function(b, c) {}), a.register('PQSr+36', function(b, c) {}), a.register('PQSr+35', function(b, c) {}), a.register('PQSr+34', function(b, c) {}), a.register('PQSr+33', function(b, c) {}), a.register('PQSr+32', function(b, c) {}), a.register('PQSr+31', function(b, c) {}), a.register('PQSr+30', function(b, c) {}), a.register('PQSr+29', function(b, c) {}), a.register('PQSr+28', function(b, c) {}), a.register('PQSr+27', function(b, c) {}), a.register('PQSr+26', function(b, c) {}), a.register('PQSr+25', function(b, c) {}), a.register('PQSr+24', function(b, c) {}), a.register('PQSr+23', function(b, c) {}), a.register('PQSr+22', function(b, c) {}), a.register('PQSr+21', function(b, c) {}), a.register('PQSr+20', function(b, c) {}), a.register('PQSr+19', function(b, c) {}), a.register('PQSr+18', function(b, c) {}), a.register('PQSr+17', function(b, c) {}), a.register('PQSr+16', function(b, c) {}), a.register('PQSr+15', function(b, c) {}), a.register('PQSr+14', function(b, c) {}), a.register('PQSr+13', function(b, c) {}), a.register('PQSr+12', function(b, c) {}), a.register('PQSr+11', function(b, c) {}), a.register('PQSr+10', function(b, c) {}), a.register('PQSr+9', function(b, c) {}), a.register('PQSr+8', function(b, c) {}), a.register('PQSr+7', function(b, c) {}), a.register('PQSr+6', function(b, c) {}), a.register('PQSr+5', function(b, c) {}), a.register('PQSr+4', function(b, c) {}), a.register('PQSr+3', function(b, c) {}), a.register('cy3u4', function(b, c) {
    _f(b.exports, 'connect', function() {
        return _i;
    });
    var d = a('sCSxV'),
        e = a('t01cw');
    const f = new Blob([e.worker], {
            type: 'application/javascript; charset=utf-8'
        }),
        g = URL.createObjectURL(f),
        h = (0, d.load)(g),
        _i = (h.characterize, h.connect);
    h.disconnect, h.encode, h.isSupported, h.record;
    URL.revokeObjectURL(g);
}), a.register('sCSxV', function(b, c) {
    _f(b.exports, 'load', function() {
        return _i;
    });
    var d = a('xK9rh');
    a('AOQxn'), a('ZZiy4');
    const e = (0, d.createBroker)({
            characterize: ({
                call: _f
            }) => () => _f('characterize'),
            encode: ({
                call: g
            }) => (a, b) => g('encode', {
                recordingId: a,
                timeslice: b
            }),
            record: ({
                call: h
            }) => async (a, b, c) => {
                await h('record', {
                    recordingId: a,
                    sampleRate: b,
                    typedArrays: c
                }, c.map(({
                    buffer: i
                }) => i));
            }
        }),
        _i = h => {
            const j = new Worker(h);
            return e(j);
        };
}), a.register('AOQxn', function(b, c) {
    a('PQSr+2');
}), a.register('PQSr+2', function(b, c) {}), a.register('ZZiy4', function(b, c) {
    a('PQSr+1'), a('PQSr+0'), a('PQSr+');
}), a.register('PQSr+1', function(b, c) {}), a.register('PQSr+0', function(b, c) {}), a.register('PQSr+', function(b, c) {}), a.register('t01cw', function(b, c) {
    _i(b.exports, 'worker', function() {
        return _d;
    });
    const _d = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t),a=o(r),i=o(n),u=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?a.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var a={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)a.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(a),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(c(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(s.default(e),[u(t[r.name],r.modifiers),n]):[].concat(s.default(e),[function(e){return u(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(s.default(e),s.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(s.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,s=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=s.cause,i=s.missingParameters,u=void 0===n?new Error:new Error(n(i));return null!==a&&(u.cause=a),void 0!==r&&(u.code=r(i)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),s=["honest","hour","hono"];for(t in s)if(0==o.indexOf(s[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),s=r(906),a=r(344);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,s=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),a=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),u=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),c=(e,t)=>async r=>{let{data:{id:n,method:o,params:u}}=r;const c=t[o];try{if(void 0===c)throw s({method:o});const t=void 0===u?c():c(u);if(void 0===t)throw a({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),s=(0,l.generateUniqueNumber)(d);return d.set(s,(()=>{o(),n.close(),d.delete(s)})),{result:s}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw u({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=c(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let o=0;o<t;o+=1){const t=e[o];void 0===r[o]&&(r[o]=[]);const s=t.shift();if(void 0===s)break e;r[o].push(s),0===o&&(n+=s.length)}}if(n>t){const o=n-t;r.forEach(((t,r)=>{const n=t.pop(),s=n.length-o;t.push(n.subarray(0,s)),e[r].unshift(n.subarray(s))}))}return r},v=new Map,g=(e=>(t,r,n)=>{const o=e.get(t);if(void 0===o){const o={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,o),o}return o.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),o})(v),x=((e,t)=>(r,n,o,s)=>{const a=o>>3,i="subsequent"===n?0:44,u=r.length,c=e(r[0]),l=new ArrayBuffer(c*u*a+i),d=new DataView(l);return"subsequent"!==n&&t(d,o,u,"complete"===n?c:Number.POSITIVE_INFINITY,s),r.forEach(((e,t)=>{let r=i+t*a;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=u*a}}))})),[l]})(m,((e,t,r,n,o)=>{const s=t>>3,a=Math.min(n*r*s,4294967251);e.setUint32(0,1380533830),e.setUint32(4,a+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,o,!0),e.setUint32(28,o*r*s,!0),e.setUint16(32,r*s,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,a,!0)})),w=new Map;p(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:e=>{let{recordingId:t,timeslice:r}=e;const n=w.get(t);void 0!==n&&(w.delete(t),n.reject(new Error("Another request was made to initiate an encoding.")));const o=v.get(t);if(null!==r){if(void 0===o||m(o.channelDataArrays[0])*(1e3/o.sampleRate)<r)return new Promise(((e,n)=>{w.set(t,{reject:n,resolve:e,timeslice:r})}));const e=h(o.channelDataArrays,Math.ceil(r*(o.sampleRate/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,o.sampleRate);return o.isComplete=!1,{result:n,transferables:n}}if(void 0!==o){const e=x(o.channelDataArrays,o.isComplete?"complete":"subsequent",16,o.sampleRate);return v.delete(t),{result:e,transferables:e}}return{result:[],transferables:[]}},record:e=>{let{recordingId:t,sampleRate:r,typedArrays:n}=e;const o=g(t,r,n),s=w.get(t);if(void 0!==s&&m(o.channelDataArrays[0])*(1e3/r)>=s.timeslice){const e=h(o.channelDataArrays,Math.ceil(s.timeslice*(r/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,r);o.isComplete=!1,w.delete(t),s.resolve({result:n,transferables:n})}return{result:null}}})})()})();';
}), a.register('hYhun', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('ulE4q'),
        f = a('YRlpt'),
        g = a('LEQ5w'),
        h = a('g92U6');
    var _i = _i => {
        const [j, k] = g.useState(_i.latex), l = g.useCallback(() => {
            _i.onChange(j), _i.close();
        }, [
            j,
            _i.onChange,
            _i.close
        ]);
        return (0, d.jsx)(f.default, {
            open: _i.visible,
            width: 670,
            closable: !1,
            destroyOnClose: !0,
            style: {
                top: 20
            },
            onCancel: _i.close,
            footer: (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(e.default, {
                        onClick: _i.close,
                        children: 'Cancel'
                    }),
                    _i.latex ? (0, d.jsx)(e.default, {
                        onClick: () => {
                            _i.onChange(void 0), _i.close();
                        },
                        children: 'Remove Equation'
                    }) : null,
                    (0, d.jsx)(e.default, {
                        type: 'primary',
                        onClick: l,
                        children: _i.latex ? 'Update' : 'Insert'
                    })
                ]
            }),
            children: (0, d.jsx)(h.default, {
                latex: _i.latex,
                onChange: k
            })
        });
    };
}), a.register('g92U6', function(b, c) {
    _i(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('OeG4h'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('b5kvC');
    let j, k, l, m = _i => _i;
    var _n = _i => {
        const o = e.useRef(),
            [p, q] = e.useState(_i.latex);
        return e.useEffect(() => {
            const r = new(0, f.MathfieldElement)({
                virtualKeyboardMode: 'off'
            });
            _i.latex && r.setValue(_i.latex), document.body.style.setProperty('--keyboard-zindex', '1000'), r.addEventListener('mount', () => {
                r.focus(), r.virtualKeyboardState = 'visible';
            }), r.addEventListener('input', o => {
                var s;
                if ('insertLineBreak' === o.inputType)
                    null == _i || null === (s = _i.onComplete) || void 0 === s || s.call(_i);
                else {
                    const t = r.getValue('latex');
                    q(t), _i.onChange && _i.onChange(t);
                }
            }), r.addEventListener('unmount', () => {
                r.virtualKeyboardState = 'hidden';
            }), o.current.appendChild(r);
        }, []), (0, d.jsxs)(_o, {
            children: [
                (0, d.jsx)(_p, {
                    ref: o
                }),
                (null == p ? void 0 : p.length) ? null : (0, d.jsx)(_q, {
                    children: 'Enter math...'
                })
            ]
        });
    };
    const _o = g.default.div(j || (j = m`
  position: relative;
`)),
        _p = g.default.div(k || (k = m`
  math-field {
    font-size: 32px;
    color: ${ 0 };
    padding: 15px;
    outline: #40a9ff auto 2px; // Color of the AntD focus outline
  }
`), h.default.Black),
        _q = g.default.div(l || (l = m`
  position: absolute;
  top: 23px;
  left: 16px;
  font-family: ${ 0 };
  font-style: italic;
  color: #bfbfbf;
  font-size: 18px;
  pointer-events: none;
`), i.Fonts.SFPro);
}), a.register('iw0Mw', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('CdEBb'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CameraOutlined';
    var _i = e.forwardRef(h);
}), a.register('CdEBb', function(b, c) {
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
                    d: 'M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z'
                }
            }]
        },
        name: 'camera',
        theme: 'outlined'
    };
}), a.register('vIBvW', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('f3iwG'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'FunctionOutlined';
    var _i = e.forwardRef(h);
}), a.register('f3iwG', function(b, c) {
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
}), a.register('1shDe', function(b, c) {
    _i(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('KqrSy'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('DV4ZV'),
        k = a('+M5wm'),
        l = a('PMl60'),
        m = a('8y5No');
    let n;
    const o = (0, a('2x11J').observer)(_i => {
            const p = _i.question.type === k.QuestionType.multipleChoice,
                q = _i.question.type === k.QuestionType.textInput;
            return (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(_p, {
                        children: (0, l.plural)('Answer', _i.question.answers.length)
                    }),
                    _i.question.answers.map((c, g) => (0, d.jsxs)(e.Fragment, {
                        children: [
                            (0, d.jsx)(f.default, {
                                questionType: _i.question.type,
                                onCorrectChange: p => ((p, q) => _i.question.answers = _i.question.answers.map((_i, c) => c !== p ? _i : {
                                    ..._i,
                                    correct: q
                                }))(g, p),
                                onTextChange: p => ((p, q) => _i.question.answers = _i.question.answers.map((_i, c) => c !== p ? _i : {
                                    ..._i,
                                    text: q
                                }))(g, p),
                                text: c.text,
                                correct: c.correct,
                                image: c.image,
                                latex: c.latex,
                                textType: c.textType,
                                onImageChange: p => ((p, q) => _i.question.answers = _i.question.answers.map((_i, c) => c !== p ? _i : {
                                    ..._i,
                                    image: q
                                }))(g, p),
                                onLatexChange: p => ((p, q) => _i.question.answers = _i.question.answers.map((_i, c) => c !== p ? _i : {
                                    ..._i,
                                    latex: q
                                }))(g, p),
                                onTextTypeChange: p => {
                                    ((p, q) => {
                                        _i.question.answers = _i.question.answers.map((_i, c) => c !== p ? _i : {
                                            ..._i,
                                            textType: q
                                        });
                                    })(g, p);
                                },
                                allowPhoto: p && !_i.imagesBlocked,
                                allowLatex: p && !_i.latexBlocked,
                                blockChangingCorrect: q,
                                canRemove: g > 0 && q || g > 1,
                                onRemove: () => (p => {
                                    _i.question.answers = _i.question.answers.filter((_i, q) => p !== q);
                                })(g),
                                onPressEnter: _i.onPressEnter
                            }),
                            (0, d.jsx)('div', {
                                style: {
                                    height: 10
                                }
                            })
                        ]
                    }, `answer-${ g }`)),
                    _i.question.answers.length < 4 && (0, d.jsx)(m.default, {
                        style: {
                            fontSize: 14,
                            marginLeft: _i.question.type === k.QuestionType.textInput ? 0 : 38,
                            opacity: 0.7,
                            cursor: 'pointer',
                            marginTop: -4,
                            fontStyle: 'italic'
                        },
                        onClick: () => _i.question.answers.push((0, j.defaultAnswer)(!p)),
                        children: 'Add another answer'
                    })
                ]
            });
        }),
        _p = g.default.div(n || (n = (_i => _i)`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), h.default.Black, i.Fonts.SFPro, i.FontWeights.UltraBold);
    var _q = o;
}), a.register('KqrSy', function(b, c) {
    _i(b.exports, 'default', function() {
        return _A;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('ulE4q'),
        g = a('/rAT0'),
        h = a('inwN3'),
        i = a('YJjBj'),
        j = a('VjaJ4'),
        k = a('DKaq/'),
        l = a('iw0Mw'),
        m = a('U86+x'),
        n = a('HFN4+'),
        o = a('ieNls8'),
        p = a('LHeQv'),
        q = a('vIBvW'),
        r = a('PMl60'),
        s = a('hYhun'),
        t = a('sHRDd'),
        u = a('dDoty'),
        v = a('+M5wm');
    let w, x, y = _i => _i;
    f.default;
    const z = _i => {
        const A = {
            twoToneColor: _i.correct ? '#4caf50' : '#f44336',
            style: {
                cursor: 'pointer',
                marginRight: 10
            },
            onClick: _i.onClick
        };
        return _i.correct ? (0, d.jsx)(m.default, {
            ...A
        }) : (0, d.jsx)(n.default, {
            ...A
        });
    };
    var _A = _i => {
        const [B, C, D] = (0, r.useBoolean)(!1), [E, F, G] = (0, r.useBoolean)(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_B, {
                    children: [
                        _i.questionType === v.QuestionType.textInput ? (0, d.jsxs)(h.default, {
                            value: _i.textType || v.TextInputAnswerType.exact,
                            size: 'large',
                            style: {
                                marginRight: 10,
                                width: 120
                            },
                            onChange: _i.onTextTypeChange,
                            children: [
                                (0, d.jsx)(h.default.Option, {
                                    value: v.TextInputAnswerType.exact,
                                    children: 'Is Exactly'
                                }),
                                (0, d.jsx)(h.default.Option, {
                                    value: v.TextInputAnswerType.contains,
                                    children: 'Contains'
                                })
                            ]
                        }) : (0, d.jsx)(z, {
                            correct: _i.correct,
                            onClick: () => {
                                _i.blockChangingCorrect || _i.onCorrectChange && _i.onCorrectChange(!_i.correct);
                            }
                        }),
                        (() => {
                            const H = [{
                                    key: 'add-image',
                                    label: 'Add Image',
                                    onClick: C,
                                    icon: (0, d.jsx)(l.default, {}),
                                    disabled: !(_i.allowPhoto && !_i.image && !_i.latex && !_i.text)
                                },
                                {
                                    key: 'add-latex',
                                    label: 'Add Equation',
                                    onClick: F,
                                    icon: (0, d.jsx)(q.default, {}),
                                    disabled: !(_i.allowLatex && !_i.image && !_i.latex && !_i.text)
                                },
                                {
                                    key: 'remove',
                                    label: 'Remove Answer',
                                    onClick: _i.onRemove,
                                    icon: (0, d.jsx)(o.default, {}),
                                    disabled: !_i.canRemove,
                                    danger: !0
                                }
                            ];
                            return (0, d.jsxs)('div', {
                                className: 'maxWidth flex vc between',
                                children: [
                                    _i.image ? (0, d.jsx)(k.default, {
                                        image: _i.image,
                                        size: 40,
                                        blockModalOpen: !0,
                                        onClick: C,
                                        showBorder: !0
                                    }) : _i.latex ? (0, d.jsx)(_C, {
                                        onClick: F,
                                        children: (0, d.jsx)(u.default, {
                                            latex: _i.latex
                                        })
                                    }) : (0, d.jsx)(i.default, {
                                        value: _i.text,
                                        onPressEnter: _i.onPressEnter,
                                        onTextChange: _i.onTextChange,
                                        placeholder: (_i.correct ? 'Correct' : 'Incorrect') + ' answer...',
                                        disabled: !1
                                    }),
                                    (0, d.jsx)(g.default, {
                                        menu: {
                                            items: H
                                        },
                                        trigger: ['hover'],
                                        children: (0, d.jsx)(p.default, {
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
                (0, d.jsx)(j.default, {
                    visible: B,
                    close: D,
                    currentImage: _i.image,
                    onImageChange: _i.onImageChange
                }),
                (0, d.jsx)(s.default, {
                    visible: E,
                    close: G,
                    latex: _i.latex,
                    onChange: _i.onLatexChange
                })
            ]
        });
    };
    const _B = e.default.div.attrs({
            className: 'flex maxWidth vc'
        })(w || (w = y`
  font-size: 28px;
  span {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`)),
        _C = e.default.div(x || (x = y`
  cursor: pointer;
  font-size: 16px;
  color: ${ 0 };
  padding: 5px 21px;
  border: 2px dashed ${ 0 };
  border-radius: 6px;
`), t.default.Black, t.default.BorderGray);
}), a.register('U86+x', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('0WMU3'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckCircleTwoTone';
    var _i = e.forwardRef(h);
}), a.register('0WMU3', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: function(_e, f) {
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
                            fill: _e
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z',
                            fill: f
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z',
                            fill: _e
                        }
                    }
                ]
            };
        },
        name: 'check-circle',
        theme: 'twotone'
    };
}), a.register('HFN4+', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('dYKys'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CloseCircleTwoTone';
    var _i = e.forwardRef(h);
}), a.register('dYKys', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        icon: function(_e, f) {
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
                            fill: _e
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z',
                            fill: f
                        }
                    },
                    {
                        tag: 'path',
                        attrs: {
                            d: 'M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z',
                            fill: _e
                        }
                    }
                ]
            };
        },
        name: 'close-circle',
        theme: 'twotone'
    };
}), a.register('SB848', function(b, c) {
    e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('ulE4q'),
        f = a('amKpW');
    var _g = e => {
        const h = (0, d.jsx)(e.default, {
            loading: e.loading,
            type: 'primary',
            disabled: e.disabled,
            onClick: e.onClick,
            children: e.label
        });
        return e.disabledMessage ? (0, d.jsx)(f.default, {
            title: e.disabledMessage,
            children: h
        }) : h;
    };
}), a.register('o84Oe', function(b, c) {
    e(b.exports, 'canAddQuestionErrorMessage', function() {
        return _f;
    }), e(b.exports, 'default', function() {
        return _g;
    });
    var d = a('+M5wm');
    const e = 'Question must have text, audio, image, or an equation',
        _f = e => {
            if (e.text) {
                if (!e.text.trim())
                    return e;
            } else if (!e.audio && !e.image && !e.latex)
                return e;
            if (e.image && e.latex)
                return 'Question cannot contain an image and equation.';
            const g = e.answers.filter(e => {
                var h;
                return !!(null === (h = e.text) || void 0 === h ? void 0 : h.trim()) || !(!e.image && !e.latex);
            });
            return e.type === d.QuestionType.multipleChoice && g.length < 2 ? 'Question must have at least two answers.' : g.length < 1 ? 'Question must have at least one answer.' : null;
        };
    var _g = e => null === _f(e);
});