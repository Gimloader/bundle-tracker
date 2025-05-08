function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    var _h = i => {
        const j = {
            ...i.style,
            fontFamily: g.Fonts.SFPro,
            color: i.style && i.style.color ? i.style.color : f.default.Black
        };
        return (0, e.jsx)('div', {
            onClick: i.onClick ? i.onClick : () => !1,
            style: j,
            children: i.children
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _E;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    let v, w, x = y => y;
    const y = o.default.TabPane, z = m.default.Search, A = B => (0, f.jsxs)('div', {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            children: [
                (0, f.jsx)(_D, {
                    className: 'lightShadow mediumShadowOnHover',
                    url: B.details.url,
                    isMiddle: B.isMiddle,
                    onClick: () => {
                        B.onSelect(B.details.url), (0, h.request)({
                            url: '/api/v1/editor/download-image',
                            method: 'POST',
                            data: { photoId: B.details.id },
                            success: () => !1,
                            error: () => !1
                        });
                    }
                }),
                (0, f.jsx)('a', {
                    target: '_blank',
                    href: B.details.creator.link,
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
                            B.details.creator.name
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
            }), (0, e.default)(this, 'onSearch', C => {
                this.setState({ imageResults: [] }), this.requestImages(C);
            }), (0, e.default)(this, 'requestImages', C => {
                this.setState({ loading: !0 }), (0, h.request)({
                    method: 'POST',
                    url: '/api/v1/editor/images',
                    data: { searchQuery: C },
                    success: D => this.setState({
                        imageResults: D.photos,
                        searchCount: this.state.searchCount + 1
                    }),
                    error: () => this.setState({ error: !0 }),
                    both: () => this.setState({ loading: !1 })
                });
            }), (0, e.default)(this, 'onImageChange', C => {
                const D = C.target.value, E = new Image();
                E.onload = () => {
                    this.setState({ customLinkUrl: D });
                }, E.src = D;
            }), (0, e.default)(this, 'onPickCustomImage', () => this.props.onImagePicked(this.state.customLinkUrl)), (0, e.default)(this, 'onImageUploaded', C => this.props.onImagePicked(C)), (0, e.default)(this, 'handleTabClick', C => {
                '3' !== C || (0, h.isUpgraded)() || (0, h.isStudent)() ? this.setState({ currentTabKey: C }) : this.setState({ upgradeModalOpen: !0 });
            }), (0, e.default)(this, 'closeUpgradeModal', () => this.setState({ upgradeModalOpen: !1 })), (0, e.default)(this, 'getContent', () => (0, f.jsxs)(f.Fragment, {
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
                                        style: { marginTop: 5 },
                                        children: (0, f.jsx)(n.default, { size: 'large' })
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
                                        children: this.state.imageResults.map((C, D) => (0, f.jsx)(A, {
                                            details: C,
                                            isMiddle: (D - 1) % 3 == 0,
                                            onSelect: this.props.onImagePicked
                                        }, C.url))
                                    })
                                ]
                            }, '1'),
                            (0, f.jsxs)(y, {
                                tab: 'Link',
                                children: [
                                    (0, f.jsx)(m.default, {
                                        size: 'large',
                                        placeholder: 'Image link',
                                        style: { marginTop: -3 },
                                        onChange: this.onImageChange
                                    }),
                                    (0, f.jsx)(l.default, {
                                        style: { marginTop: 5 },
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
                                children: (0, f.jsx)(s.default, { onPhotoUploaded: this.onImageUploaded })
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
`), () => 464), _D = p.default.div(w || (w = x`
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
`), E => E.url, E => E.isMiddle ? 13 : 0, E => E.isMiddle ? 13 : 0);
    var _E = B;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'MehOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
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
                    attrs: { d: 'M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z' }
                }]
        },
        name: 'meh',
        theme: 'outlined'
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _n;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
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
                        children: this.state.loading ? (0, f.jsx)(j.default, { size: 'large' }) : (0, f.jsxs)(f.Fragment, {
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
            super(...a), (0, e.default)(this, 'state', { loading: !1 }), (0, e.default)(this, 'uploadImage', ({file: n}) => {
                const o = new FormData();
                o.append('file', n), this.setState({ loading: !0 }), (0, l.request)({
                    url: '/api/games/image/add',
                    method: 'post',
                    data: o,
                    success: p => {
                        this.setState({ loading: !1 }), this.props.onPhotoUploaded(p.url);
                    },
                    error: p => {
                        this.setState({ loading: !1 }), i.default.error('Error uploading. Please try again.');
                    }
                });
            }), (0, e.default)(this, 'fileIsSmallEnough', n => {
                const o = n.size / 1024 / 1024 < 5;
                return o || i.default.error('Photo must be less than 5MB'), o;
            });
        }
    }
    var _n = m;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'InboxOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
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
                    attrs: { d: 'M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z' }
                }]
        },
        name: 'inbox',
        theme: 'outlined'
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'AUDIO_TITLE', function () {
        return _g;
    }), a(c.exports, 'AUDIO_DESCRIPTION', function () {
        return _h;
    }), a(c.exports, 'IMAGE_UPLOAD_TITLE', function () {
        return _i;
    }), a(c.exports, 'IMAGE_UPLOAD_DESCRIPTION', function () {
        return _j;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
    const _g = (0, e.jsx)(e.Fragment, { children: 'Add audio with Pro' }), _h = (0, e.jsxs)(e.Fragment, {
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
        }), _i = (0, e.jsx)(e.Fragment, { children: 'Upload images with Pro' }), _j = (0, e.jsxs)(e.Fragment, {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'defaultAnswer', function () {
        return _q;
    }), a(c.exports, 'default', function () {
        return _s;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....');
    const _q = r => ({
            _id: Math.random().toString(),
            text: '',
            correct: r
        }), r = () => ({
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
    var _s = (0, h.observer)(j.forwardRef((t, u) => {
        var v;
        const w = (0, i.useLocalObservable)(() => r()), x = (0, p.default)(w) && !t.blockAddingNewQuestions, y = () => {
                const z = r();
                Object.keys(z).forEach(A => {
                    w[A] = z[A];
                });
            };
        j.useImperativeHandle(u, () => ({ clear: y })), j.useEffect(() => {
            t.existingQuestion ? Object.keys(t.existingQuestion).forEach(z => {
                w[z] = t.existingQuestion[z];
            }) : y();
        }, [null === (v = t.existingQuestion) || void 0 === v ? void 0 : v._id]);
        const z = () => {
            x && t.submitQuestion(w);
        };
        return (0, e.jsxs)(g.default, {
            open: t.visible,
            width: 670,
            style: { top: 20 },
            onCancel: t.close,
            afterClose: t.afterClose,
            closable: !1,
            footer: (0, e.jsx)(o.default, {
                label: t.buttonLabel || 'Add',
                onClick: z,
                loading: t.loading,
                disabledMessage: (0, p.canAddQuestionErrorMessage)(w),
                disabled: !x
            }),
            children: [
                (0, e.jsx)(l.default, { question: w }),
                (0, e.jsx)(m.default, {
                    question: w,
                    onPressEnter: z,
                    imagesBlocked: t.imagesBlocked,
                    audioBlocked: t.audioBlocked,
                    latexBlocked: t.latexBlocked
                }),
                (0, e.jsx)(n.default, {
                    question: w,
                    onPressEnter: z,
                    imagesBlocked: t.imagesBlocked,
                    latexBlocked: t.latexBlocked
                }),
                t.errorMessage ? (0, e.jsx)(f.default, {
                    message: 'Error',
                    description: t.errorMessage,
                    type: 'error',
                    showIcon: !0
                }) : null
            ]
        });
    }));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _n;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
    let m;
    var _n = (0, b('.....').observer)(o => {
        const p = f.useCallback(q => {
                q.target.value === j.QuestionType.multipleChoice && d(), q.target.value === j.QuestionType.textInput && c();
            }, []), q = () => {
                const r = o.question.answers.filter(s => s.correct && s.text && !s.image);
                r.length ? o.question.answers = r : o.question.answers = [(0, l.defaultAnswer)(!0)], o.question.type = j.QuestionType.textInput;
            }, r = () => {
                const s = o.question.answers.filter((t, u) => u <= 3);
                o.question.answers = s;
                for (let t = s.length; t < 4; t++)
                    o.question.answers.push((0, l.defaultAnswer)(!1));
                o.question.type = j.QuestionType.multipleChoice;
            };
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_p, {
                    children: [
                        (0, e.jsx)('div', {}),
                        (0, e.jsx)('div', {
                            children: (0, e.jsxs)(i.default.Group, {
                                onChange: p,
                                value: o.question.type,
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
    const _o = { fontFamily: k.Fonts.SFPro }, _p = g.default.div(m || (m = (q => q)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _z;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = (o = b('.....'), b('.....')), s = b('.....'), t = b('.....'), u = b('.....'), v = b('.....');
    let w, x, y = z => z;
    var _z = (0, k.observer)(A => {
        const [B, C, D] = (0, o.useBoolean)(!1), [E, F, G] = (0, o.useBoolean)(!1), [H, I, J] = (0, o.useBoolean)(!1), [K, L, M] = (0, o.useBoolean)(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(p.default, {
                    visible: H,
                    close: J,
                    id: 'add audio',
                    copy: {
                        title: q.AUDIO_TITLE,
                        description: q.AUDIO_DESCRIPTION
                    }
                }),
                (0, e.jsx)(l.default, {
                    visible: B,
                    close: D,
                    onImageChange: N => {
                        A.question.image = N;
                    },
                    currentImage: A.question.image
                }),
                (0, e.jsx)(n.default, {
                    visible: E,
                    close: G,
                    onAudioChanged: N => {
                        A.question.audio = N, G();
                    },
                    audio: A.question.audio
                }),
                (0, e.jsx)(r.default, {
                    visible: K,
                    close: M,
                    latex: A.question.latex,
                    onChange: N => {
                        A.question.latex = N;
                    }
                }),
                (0, e.jsx)(_A, { children: 'Question' }),
                (0, e.jsx)(i.default, {
                    value: A.question.text,
                    onTextChange: N => {
                        A.question.text = N;
                    },
                    placeholder: 'Ask away...',
                    disabled: !1,
                    onPressEnter: A.onPressEnter
                }),
                A.imagesBlocked && A.audioBlocked && A.latexBlocked ? null : (0, e.jsxs)(_B, {
                    children: [
                        (0, e.jsx)(_C, {
                            icon: (0, e.jsx)(u.default, {}),
                            label: 'Add Photo',
                            onClick: C,
                            disabled: A.imagesBlocked || !!A.question.latex,
                            customContent: A.question.image ? (0, e.jsx)('div', {
                                className: 'flex maxWidth hc vc',
                                children: (0, e.jsx)(m.default, {
                                    image: A.question.image,
                                    blockModalOpen: !0,
                                    size: 30,
                                    onClick: C
                                })
                            }) : null
                        }),
                        (0, e.jsx)('div', { style: { width: 6 } }),
                        (0, e.jsx)(_C, {
                            disabled: A.audioBlocked || !window.MediaRecorder || (0, o.isStudent)(),
                            icon: (0, e.jsx)(t.default, {}),
                            label: (A.question.audio ? '' : 'Add ') + 'Audio',
                            onClick: () => {
                                (0, o.isUpgraded)() ? F() : I();
                            }
                        }),
                        (0, e.jsx)('div', { style: { width: 6 } }),
                        (0, e.jsx)(_C, {
                            icon: (0, e.jsx)(v.default, {}),
                            disabled: !!A.question.image,
                            label: 'Add Equation',
                            customContent: A.question.latex ? (0, e.jsx)('div', {
                                style: { cursor: 'pointer' },
                                children: (0, e.jsx)(s.default, { latex: A.question.latex })
                            }) : null,
                            onClick: L
                        })
                    ]
                }),
                (0, e.jsx)('div', { style: { height: 12 } })
            ]
        });
    });
    const _A = f.default.div(w || (w = y`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), g.default.Black, h.Fonts.SFPro, h.FontWeights.UltraBold), _B = f.default.div.attrs({ className: 'flex maxWidth' })(x || (x = y`
  margin-top: 8px;
  height: 48px;
`)), _C = D => (0, e.jsx)(j.default, {
            disabled: D.disabled,
            style: {
                width: '33.33%',
                height: '100%',
                overflow: 'hidden'
            },
            type: 'dashed',
            tabIndex: '-1',
            onClick: D.onClick,
            children: D.customContent ? D.customContent : (0, e.jsxs)('div', {
                className: 'flex maxHeight hc vc',
                style: { fontFamily: h.Fonts.SFPro },
                children: [
                    D.icon,
                    (0, e.jsx)('div', {
                        style: { marginLeft: 5 },
                        children: D.label
                    })
                ]
            })
        });
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    var _l = m => {
        const n = f.useRef(), [o, p] = f.useState(!1);
        return (0, e.jsxs)('div', {
            style: { width: '100%' },
            children: [
                (0, e.jsx)(h.default, {
                    ref: n,
                    onPressEnter: m.onPressEnter,
                    maxLength: 220,
                    disabled: m.disabled,
                    autoFocus: m.autoFocus,
                    style: {
                        display: 'flex',
                        fontFamily: k.Fonts.SFPro,
                        fontWeight: k.FontWeights.Bold,
                        width: '100%',
                        height: 40
                    },
                    size: 'large',
                    placeholder: m.placeholder,
                    value: m.value,
                    onChange: q => {
                        o && p(!1), (r => {
                            m.onTextChange(r.target.value);
                        })(q);
                    },
                    suffix: o ? (0, e.jsx)('span', {}) : (0, e.jsx)(i.default, {
                        title: 'Show Symbol Keyboard',
                        children: (0, e.jsx)(g.default, {
                            onClick: () => {
                                p(!0), n.current.focus();
                            }
                        })
                    })
                }),
                o ? (0, e.jsx)(j.default, {
                    onSymbolSelected: q => m.onTextChange(m.value + q),
                    focusInput: () => {
                        var q;
                        null === (q = n.current) || void 0 === q || q.focus();
                    }
                }) : null
            ]
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _m;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    let j;
    const k = b('.....').default.div(j || (j = (l => l)`
  margin-top: 1px;
`)), {TabPane: l} = h.default;
    var _m = n => {
        const [o, p] = f.useState(i.default[0].name);
        return (0, e.jsx)(k, {
            children: (0, e.jsx)(h.default, {
                onChange: p,
                activeKey: o,
                tabPosition: n.tabPosition || 'top',
                children: i.default.map(q => (0, e.jsx)(l, {
                    tab: q.name,
                    style: {
                        boxSizing: 'border-box',
                        maxHeight: 255
                    },
                    className: 'scroll',
                    children: q.characters.map(r => (0, e.jsx)(g.default, {
                        style: { margin: 2 },
                        size: 'small',
                        onClick: () => {
                            return q = r, null == n || n.onSymbolSelected(q), void (null == n || n.focusInput());
                            var s;
                        },
                        children: r
                    }, `${ q.name }-${ r }`))
                }, q.name))
            })
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = [
        {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _n;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
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
            }), (0, e.default)(this, 'onImagePicked', n => {
                this.props.close(), this.setState({}), this.props.onImageChange(n);
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
                        style: { marginTop: 10 },
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _w;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    const v = {
        height: 111,
        width: '100%'
    };
    var _w = x => {
        const [y, z] = f.useState(!1), {
                status: A,
                startRecording: B,
                stopRecording: C,
                mediaBlobUrl: D
            } = (0, l.useReactMediaRecorder)({
                video: !1,
                audio: !0
            }), E = () => {
                new Audio((0, u.getCloudinaryUrl)(x.audio)).play();
            }, F = () => x.onAudioChanged('');
        return (0, e.jsx)(o.default, {
            open: x.visible,
            placement: 'right',
            width: 515,
            closable: !0,
            destroyOnClose: !0,
            drawerStyle: {
                height: '100%',
                overflowY: 'auto',
                scrollbarWidth: 'none'
            },
            onClose: x.close,
            children: x.audio ? (0, e.jsxs)(e.Fragment, {
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
                                onClick: E,
                                icon: (0, e.jsx)(i.default, {}),
                                style: { marginRight: 5 },
                                children: 'Play Audio'
                            }),
                            (0, e.jsx)(m.default, {
                                size: 'large',
                                type: 'dashed',
                                icon: (0, e.jsx)(h.default, {}),
                                onClick: F,
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
                            D && 'recording' !== A && (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)(q.default, {
                                        style: {
                                            fontWeight: r.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Finished Recording'
                                    }),
                                    (0, e.jsx)('audio', {
                                        src: D,
                                        controls: !0
                                    }),
                                    (0, e.jsxs)('div', {
                                        className: 'flex vc',
                                        style: { marginTop: 10 },
                                        children: [
                                            (0, e.jsx)(m.default, {
                                                size: 'large',
                                                type: 'primary',
                                                icon: (0, e.jsx)(j.default, {}),
                                                loading: y,
                                                style: { marginRight: 10 },
                                                onClick: () => {
                                                    return A = D, void (y || fetch(A).then(G => G.blob()).then(G => {
                                                        const H = new File([G], `recording-${ Date.now() }.wav`);
                                                        if (H.size / 1000000 > 3)
                                                            return void (0, t.throwError)({
                                                                title: 'Audio too long',
                                                                content: 'Please record a shorter clip'
                                                            });
                                                        const I = new FormData();
                                                        I.append('file', H), z(!0), (0, s.request)({
                                                            url: '/api/games/audio/add',
                                                            method: 'post',
                                                            data: I,
                                                            success: J => x.onAudioChanged(J.url),
                                                            error: J => p.default.error('Error uploading. Please try again.'),
                                                            both: () => z(!1)
                                                        });
                                                    }).catch());
                                                    var G;
                                                },
                                                children: 'Save'
                                            }),
                                            (0, e.jsx)(m.default, {
                                                onClick: B,
                                                size: 'large',
                                                type: 'dashed',
                                                icon: (0, e.jsx)(g.default, {}),
                                                children: 'New Recording'
                                            })
                                        ]
                                    }),
                                    (0, e.jsx)('div', { style: { height: 10 } })
                                ]
                            }),
                            'idle' === A && (0, e.jsx)(m.default, {
                                onClick: B,
                                style: v,
                                icon: (0, e.jsx)(g.default, {}),
                                type: 'dashed',
                                children: 'Start Recording'
                            }),
                            'recording' === A && (0, e.jsxs)(e.Fragment, {
                                children: [
                                    (0, e.jsx)(q.default, {
                                        style: {
                                            fontWeight: r.FontWeights.Bold,
                                            fontSize: 24
                                        },
                                        children: 'Recording...'
                                    }),
                                    (0, e.jsx)(m.default, {
                                        onClick: C,
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'StopOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
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
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z' }
                }]
        },
        name: 'stop',
        theme: 'outlined'
    };
}), b.register('.....', function (c, d) {
    c.exports = b('.....');
}), b.register('.....', function (c, d) {
    var e = c.exports && c.exports.__awaiter || function (f, g, h, i) {
            return new (h || (h = Promise))(function (j, k) {
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
                    o.done ? j(o.value) : (p = o.value, p instanceof h ? p : new h(function (q) {
                        q(p);
                    })).then(l, m);
                }
                _n((i = i.apply(f, p || [])).next());
            });
        }, f = c.exports && c.exports.__generator || function (g, h) {
            var i, j, k, l, m = {
                    label: 0,
                    sent: function () {
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
            }, 'function' == typeof Symbol && (l[Symbol.iterator] = function () {
                return this;
            }), l;
            function _n(o) {
                return function (p) {
                    return function (q) {
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
    Object.defineProperty(c.exports, '__esModule', { value: !0 }), c.exports.ReactMediaRecorder = c.exports.useReactMediaRecorder = c.exports.RecorderErrors = void 0;
    var g, h, i = b('.....'), j = b('.....'), k = b('.....');
    function l(m) {
        var n = this, o = m.audio, p = void 0 === o || o, q = m.video, r = void 0 !== l && l, s = m.onStop, t = void 0 === s ? function () {
                return null;
            } : s, u = m.onStart, v = void 0 === u ? function () {
                return null;
            } : u, w = m.blobPropertyBag, x = m.screen, y = void 0 !== x && x, z = m.mediaRecorderOptions, A = void 0 === z ? void 0 : z, B = m.customMediaStream, C = void 0 === B ? null : B, D = m.stopStreamsOnStop, E = void 0 === D || D, F = m.askPermissionOnMount, G = void 0 !== F && F, H = (0, j.useRef)(null), I = (0, j.useRef)([]), J = (0, j.useRef)(null), K = (0, j.useState)('idle'), L = K[0], M = K[1], N = (0, j.useState)(!1), O = N[0], P = N[1], Q = (0, j.useState)(void 0), R = Q[0], S = Q[1], T = (0, j.useState)('NONE'), U = T[0], V = T[1];
        (0, j.useEffect)(function () {
            e(n, void 0, void 0, function () {
                var W;
                return f(this, function (X) {
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
        var W = (0, j.useCallback)(function () {
            return e(n, void 0, void 0, function () {
                var X, Y, Z, $;
                return f(this, function (ab) {
                    switch (ab.label) {
                    case 0:
                        M('acquiring_media'), X = {
                            audio: 'boolean' == typeof p ? !!p : p,
                            video: 'boolean' == typeof r ? !!r : r
                        }, ab.label = 1;
                    case 1:
                        return ab.trys.push([
                            1,
                            9,
                            ,
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
                            window.navigator.mediaDevices.getDisplayMedia({ video: r || !0 })
                        ] : [
                            3,
                            6
                        ];
                    case 3:
                        return (Y = ab.sent()).getVideoTracks()[0].addEventListener('ended', function () {
                            _ab();
                        }), p ? [
                            4,
                            window.navigator.mediaDevices.getUserMedia({ audio: p })
                        ] : [
                            3,
                            5
                        ];
                    case 4:
                        ab.sent().getAudioTracks().forEach(function (bb) {
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
        (0, j.useEffect)(function () {
            if (!window.MediaRecorder)
                throw new Error('Unsupported Browser');
            if (y && !window.navigator.mediaDevices.getDisplayMedia)
                throw new Error('This browser doesn\'t support screen capturing');
            var X = function (Y) {
                var Z = navigator.mediaDevices.getSupportedConstraints(), $ = Object.keys(Y).filter(function (ab) {
                        return !Z[ab];
                    });
                $.length > 0 && console.error('The constraints '.concat($.join(','), ' doesn\'t support on this browser. Please check your ReactMediaRecorder component.'));
            };
            return 'object' == typeof p && X(p), 'object' == typeof r && X(r), A && A.mimeType && (MediaRecorder.isTypeSupported(A.mimeType) || console.error('The specified MIME type you supplied for MediaRecorder doesn\'t support this browser')), !J.current && G && W(), function () {
                J.current && J.current.getTracks().forEach(function (Y) {
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
        var X = function (Y) {
                var Z = Y.data;
                I.current.push(Z);
            }, Y = function () {
                v();
            }, Z = function () {
                var $ = I.current[0], ab = Object.assign({ type: $.type }, w || (r ? { type: 'video/mp4' } : { type: 'audio/wav' })), bb = new Blob(I.current, ab), cb = URL.createObjectURL(bb);
                M('stopped'), S(cb), t(cb, bb);
            }, $ = function (ab) {
                P(ab), J.current && J.current.getAudioTracks().forEach(function (bb) {
                    return bb.enabled = !ab;
                });
            }, _ab = function () {
                H.current && 'inactive' !== H.current.state && (M('stopping'), H.current.stop(), E && J.current && J.current.getTracks().forEach(function (bb) {
                    return bb.stop();
                }), I.current = []);
            };
        return {
            error: g[U],
            muteAudio: function () {
                return $(!0);
            },
            unMuteAudio: function () {
                return $(!1);
            },
            startRecording: function () {
                return e(n, void 0, void 0, function () {
                    return f(this, function (bb) {
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
                            return J.current ? J.current.getTracks().some(function (cb) {
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
                            H.current = new i.MediaRecorder(J.current, A || void 0), H.current.ondataavailable = X, H.current.onstop = Z, H.current.onstart = Y, H.current.onerror = function () {
                                V('NO_RECORDER'), M('idle');
                            }, H.current.start(), M('recording'), bb.label = 5;
                        case 5:
                            return [2];
                        }
                    });
                });
            },
            pauseRecording: function () {
                H.current && 'recording' === H.current.state && (M('paused'), H.current.pause());
            },
            resumeRecording: function () {
                H.current && 'paused' === H.current.state && (M('recording'), H.current.resume());
            },
            stopRecording: _ab,
            mediaBlobUrl: R,
            status: L,
            isAudioMuted: O,
            previewStream: J.current ? new MediaStream(J.current.getVideoTracks()) : null,
            previewAudioStream: J.current ? new MediaStream(J.current.getAudioTracks()) : null,
            clearBlobUrl: function () {
                R && URL.revokeObjectURL(R), S(void 0), M('idle');
            }
        };
    }
    (p = g = c.exports.RecorderErrors || (c.exports.RecorderErrors = {})).AbortError = 'media_aborted', p.NotAllowedError = 'permission_denied', p.NotFoundError = 'no_specified_media_found', p.NotReadableError = 'media_in_use', p.OverconstrainedError = 'invalid_media_constraints', p.TypeError = 'no_constraints', p.NONE = '', p.NO_RECORDER = 'recorder_error', c.exports.useReactMediaRecorder = l;
    c.exports.ReactMediaRecorder = function (ab) {
        return ab.render(l(ab));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'MediaRecorder', function () {
        return _L;
    }), a(c.exports, 'register', function () {
        return _M;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = (b('.....'), b('.....')), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....'), v = b('.....'), w = b('.....'), x = b('.....');
    b('.....'), b('.....');
    const y = [], z = (0, v.createWindow)(), A = (0, m.createNativeBlobEventConstructor)(z), B = (0, f.createBlobEventFactory)(A), C = (0, t.createWebAudioMediaRecorderFactory)(B, j.createInvalidModificationError, k.createInvalidStateError, p.createNotSupportedError), D = (0, s.createReadVariableSizeInteger)(w.readVariableSizeIntegerLength), E = (0, q.createReadElementContent)(D), F = (0, r.createReadElementType)(D), G = (0, g.createDecodeWebMChunk)(E, F), H = (0, u.createWebmPcmMediaRecorderFactory)(B, j.createInvalidModificationError, p.createNotSupportedError, G, D), I = (0, i.createEventTargetFactory)(z), J = (0, o.createNativeMediaRecorderConstructor)(z), K = (0, n.createNativeMediaRecorderFactory)(j.createInvalidModificationError, p.createNotSupportedError), _L = (0, l.createMediaRecorderConstructor)(K, p.createNotSupportedError, C, H, y, (0, h.createEventTargetConstructor)(I, x.wrapEventListener), J), _M = async N => {
            y.push(await (0, e.register)(N));
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'encode', function () {
        return _j;
    }), a(c.exports, 'instantiate', function () {
        return _k;
    }), a(c.exports, 'register', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....');
    const g = new Blob([f.worker], { type: 'application/javascript; charset=utf-8' }), h = URL.createObjectURL(g), i = (0, e.load)(h), _j = (i.connect, i.disconnect, i.encode), _k = i.instantiate, _l = (i.isSupported, i.register);
    URL.revokeObjectURL(h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'load', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....');
    b('.....'), b('.....');
    const g = new Set(), h = (0, e.createBroker)({
            encode: ({call: i}) => async (j, k) => {
                const l = await i('encode', {
                    encoderId: j,
                    timeslice: k
                });
                return g.delete(j), l;
            },
            instantiate: ({call: i}) => async (j, k) => {
                const l = (0, f.addUniqueNumber)(g);
                return {
                    encoderId: l,
                    port: await i('instantiate', {
                        encoderId: l,
                        mimeType: j,
                        sampleRate: k
                    })
                };
            },
            register: ({call: i}) => j => i('register', { port: j }, [j])
        }), _i = j => {
            const k = new Worker(j);
            return h(k);
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createBroker', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    b('.....'), b('.....');
    const h = new WeakMap(), _i = j => {
            const k = (0, g.extendBrokerImplementation)(j);
            return l => {
                const m = (n => {
                    if (h.has(n))
                        return h.get(n);
                    const o = new Map();
                    return h.set(n, o), o;
                })(l);
                l.addEventListener('message', ({data: n}) => {
                    const {id: o} = n;
                    if (null !== o && m.has(o)) {
                        const {
                            reject: p,
                            resolve: q
                        } = m.get(o);
                        m.delete(o), void 0 === n.error ? q(n.result) : p(new Error(n.error.message));
                    }
                }), (0, f.isMessagePort)(l) && l.start();
                const n = (o, p = null, q = []) => new Promise((r, s) => {
                        const t = (0, e.generateUniqueNumber)(m);
                        m.set(t, {
                            reject: s,
                            resolve: r
                        }), null === p ? l.postMessage({
                            id: t,
                            method: o
                        }, q) : l.postMessage({
                            id: t,
                            method: o,
                            params: p
                        }, q);
                    }), o = (p, q, r = []) => {
                        l.postMessage({
                            id: null,
                            method: p,
                            params: q
                        }, r);
                    };
                let p = {};
                for (const [q, r] of Object.entries(k))
                    p = {
                        ...p,
                        [q]: r({
                            call: n,
                            notify: o
                        })
                    };
                return { ...p };
            };
        };
}), b.register('.....', function (c, d) {
    var e, f, g, h, i, j, k, l, m, n, o;
    c.exports, e = c.exports, f = function (p) {
        return function (q) {
            var r = p(q);
            return q.add(r), r;
        };
    }, g = function (p) {
        return function (q, r) {
            return p.set(q, r), r;
        };
    }, h = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, j = 2 * (i = 536870912), k = function (p, q) {
        return function (r) {
            var s = q.get(r), t = void 0 === s ? r.size : s < j ? s + 1 : 0;
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
    }, l = new WeakMap(), m = g(l), n = k(m, l), o = f(n), e.addUniqueNumber = o, e.generateUniqueNumber = n, Object.defineProperty(e, '__esModule', { value: !0 });
}), b.register('.....', function (c, d) {
    a(c.exports, 'isMessagePort', function () {
        return _e;
    });
    const _e = f => 'function' == typeof f.start;
}), b.register('.....', function (c, d) {
    a(c.exports, 'extendBrokerImplementation', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => ({
        ...g,
        connect: ({call: h}) => async () => {
            const {
                    port1: i,
                    port2: j
                } = new MessageChannel(), k = await h('connect', { port: i }, [i]);
            return e.PORT_MAP.set(j, k), j;
        },
        disconnect: ({call: h}) => async i => {
            const j = e.PORT_MAP.get(i);
            if (void 0 === j)
                throw new Error('The given port is not connected.');
            await h('disconnect', { portId: j });
        },
        isSupported: ({call: h}) => () => h('isSupported')
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'PORT_MAP', function () {
        return _e;
    });
    const _e = new WeakMap();
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    a(c.exports, 'worker', function () {
        return _e;
    });
    const _e = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t),s=o(r),i=o(n),c=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},u=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)s.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(s),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(u(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(a.default(e),[c(t[r.name],r.modifiers),n]):[].concat(a.default(e),[function(e){return c(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(a.default(e),a.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(a.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,a=2*o,s=function(e,t){return function(r){var s=t.get(r),i=void 0===s?r.size:s<a?s+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=s(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),a=r(906),s=r(344);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,a=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),s=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),c=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),u=(e,t)=>async r=>{let{data:{id:n,method:o,params:c}}=r;const u=t[o];try{if(void 0===u)throw a({method:o});const t=void 0===c?u():u(c);if(void 0===t)throw s({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=(0,l.generateUniqueNumber)(d);return d.set(a,(()=>{o(),n.close(),d.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw c({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=u(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>{e.onmessage=null,e.close()},h=new WeakMap,g=new WeakMap,v=(e=>{const t=(r=e,{...r,connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return h.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=h.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var r;return e=>{const r=(e=>{if(g.has(e))return g.get(e);const t=new Map;return g.set(e,t),t})(e);e.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,s)=>{const i=(0,l.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)}))},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a={...a,[e]:r({call:n,notify:o})};return{...a}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),w=async(e,t)=>{const r=v(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},x=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(x),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(x,y),b=new Map,E=((e,t)=>r=>{const[n,o,a,s]=t(r);return a?new Promise((t=>{o.onmessage=a=>{let{data:i}=a;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,s,i)}})):n.encode(r,null)})(m,M),A=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(b),_=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error(\'There is already an encoder registered with an id called "\'.concat(n,\'".\'));const s=r(o),{port1:i,port2:c}=new MessageChannel,u=[s,i,!0,a];return t.set(n,u),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),u[2]=!1):s.record(n,a,r)},c})(m,x,A),I=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);p(self,{encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await I(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=_(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await w(b,t)}}})})()})();';
}), b.register('.....', function (c, d) {
    a(c.exports, 'createBlobEventFactory', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        if (null === f) {
            const {
                    data: i,
                    ...j
                } = h, k = new Event(g, j);
            return k.data = i, k;
        }
        return new i(g, h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDecodeWebMChunk', function () {
        return _e;
    });
    const _e = (f, g) => (h, i, j) => {
        const k = [];
        let l = i, m = 0;
        for (; m < h.byteLength;)
            if (null === l) {
                const n = g(h, m);
                if (null === n)
                    break;
                const {
                    length: o,
                    type: p
                } = n;
                l = p, m += o;
            } else {
                const q = n(h, m, l, p);
                if (null === q)
                    break;
                const {
                    content: r,
                    length: s
                } = q;
                l = null, m += s, null !== r && k.push(r);
            }
        return {
            contents: k,
            currentElementType: l,
            offset: m
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createEventTargetConstructor', function () {
        return _e;
    });
    const _e = (f, g) => class {
        addEventListener(h, i, j) {
            if (null !== i) {
                let k = this._listeners.get(i);
                void 0 === k && (k = g(this, i), 'function' == typeof i && this._listeners.set(i, k)), this._nativeEventTarget.addEventListener(h, k, j);
            }
        }
        dispatchEvent(h) {
            return this._nativeEventTarget.dispatchEvent(h);
        }
        removeEventListener(h, i, j) {
            const k = null === i ? void 0 : this._listeners.get(i);
            this._nativeEventTarget.removeEventListener(h, void 0 === k ? null : k, j);
        }
        constructor(h = null) {
            this._listeners = new WeakMap(), this._nativeEventTarget = null === h ? f() : h;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createEventTargetFactory', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            throw new Error('A native EventTarget could not be created.');
        return f.document.createElement('p');
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createInvalidModificationError', function () {
        return _e;
    });
    const _e = (f = '') => {
        try {
            return new DOMException(f, 'InvalidModificationError');
        } catch (c) {
            return c.code = 13, c.message = f, c.name = 'InvalidModificationError', c;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createInvalidStateError', function () {
        return _e;
    });
    const _e = () => {
        try {
            return new DOMException('', 'InvalidStateError');
        } catch (a) {
            return a.code = 11, a.name = 'InvalidStateError', a;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsSupportedPromise', function () {
        return _e;
    });
    const _e = f => null === f || void 0 === f.MediaStream || void 0 !== f.MediaRecorder && void 0 === f.MediaRecorder.isTypeSupported ? Promise.resolve(!1) : new Promise(g => {
        if (void 0 === f.MediaRecorder)
            return g(!0);
        const h = document.createElement('canvas');
        if (h.getContext('2d'), 'function' != typeof h.captureStream)
            return g(!1);
        const i = h.captureStream(), j = 'audio/webm';
        try {
            const k = new f.MediaRecorder(i, { mimeType: j });
            k.addEventListener('dataavailable', ({data: l}) => g(l.type === j)), k.start(), setTimeout(() => k.stop(), 10);
        } catch (f) {
            g('NotSupportedError' === f.name);
        }
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMediaRecorderConstructor', function () {
        return _e;
    });
    const _e = (f, g, h, i, j, k, l) => class extends k {
        get mimeType() {
            return this._internalMediaRecorder.mimeType;
        }
        get ondataavailable() {
            return null === this._ondataavailable ? this._ondataavailable : this._ondataavailable[0];
        }
        set ondataavailable(m) {
            if (null !== this._ondataavailable && this.removeEventListener('dataavailable', this._ondataavailable[1]), 'function' == typeof m) {
                const n = m.bind(this);
                this.addEventListener('dataavailable', n), this._ondataavailable = [
                    m,
                    n
                ];
            } else
                this._ondataavailable = null;
        }
        get onerror() {
            return null === this._onerror ? this._onerror : this._onerror[0];
        }
        set onerror(m) {
            if (null !== this._onerror && this.removeEventListener('error', this._onerror[1]), 'function' == typeof m) {
                const n = m.bind(this);
                this.addEventListener('error', n), this._onerror = [
                    m,
                    n
                ];
            } else
                this._onerror = null;
        }
        get onpause() {
            return null === this._onpause ? this._onpause : this._onpause[0];
        }
        set onpause(m) {
            if (null !== this._onpause && this.removeEventListener('pause', this._onpause[1]), 'function' == typeof m) {
                const n = m.bind(this);
                this.addEventListener('pause', n), this._onpause = [
                    m,
                    n
                ];
            } else
                this._onpause = null;
        }
        get onresume() {
            return null === this._onresume ? this._onresume : this._onresume[0];
        }
        set onresume(m) {
            if (null !== this._onresume && this.removeEventListener('resume', this._onresume[1]), 'function' == typeof m) {
                const n = m.bind(this);
                this.addEventListener('resume', n), this._onresume = [
                    m,
                    n
                ];
            } else
                this._onresume = null;
        }
        get onstart() {
            return null === this._onstart ? this._onstart : this._onstart[0];
        }
        set onstart(m) {
            if (null !== this._onstart && this.removeEventListener('start', this._onstart[1]), 'function' == typeof m) {
                const n = m.bind(this);
                this.addEventListener('start', n), this._onstart = [
                    m,
                    n
                ];
            } else
                this._onstart = null;
        }
        get onstop() {
            return null === this._onstop ? this._onstop : this._onstop[0];
        }
        set onstop(m) {
            if (null !== this._onstop && this.removeEventListener('stop', this._onstop[1]), 'function' == typeof m) {
                const n = m.bind(this);
                this.addEventListener('stop', n), this._onstop = [
                    m,
                    n
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
        start(m) {
            return this._internalMediaRecorder.start(m);
        }
        stop() {
            return this._internalMediaRecorder.stop();
        }
        static isTypeSupported(m) {
            return null !== l && void 0 !== l.isTypeSupported && l.isTypeSupported(m) || j.some(n => n.test(m));
        }
        constructor(m, n = {}) {
            const {mimeType: o} = n;
            if (null !== l && (void 0 === o || void 0 !== l.isTypeSupported && l.isTypeSupported(o))) {
                const p = f(l, m, n);
                super(p), this._internalMediaRecorder = p;
            } else {
                if (void 0 === o || !j.some(q => q.test(o)))
                    throw null !== l && f(l, m, n), p();
                super(), null !== l && void 0 !== l.isTypeSupported && l.isTypeSupported('audio/webm;codecs=pcm') ? this._internalMediaRecorder = i(this, l, m, o) : this._internalMediaRecorder = h(this, m, o);
            }
            this._ondataavailable = null, this._onerror = null, this._onpause = null, this._onresume = null, this._onstart = null, this._onstop = null;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeBlobEventConstructor', function () {
        return _e;
    });
    const _e = f => null !== f && void 0 !== f.BlobEvent ? f.BlobEvent : null;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeMediaRecorderFactory', function () {
        return _e;
    });
    const _e = (f, g) => (h, i, j) => {
        const k = [], l = new WeakMap(), m = new WeakMap(), n = new h(i, j), o = new WeakMap();
        let p = !0;
        var q, r, s, t;
        return n.addEventListener = (q = n.addEventListener, (u, v, w) => {
            let x = v;
            return 'function' == typeof v && ('dataavailable' === u ? (x = y => {
                setTimeout(() => {
                    if (p && 'inactive' === n.state)
                        k.push(y.data);
                    else {
                        if (k.length > 0) {
                            const z = y.data;
                            Object.defineProperty(y, 'data', {
                                value: new Blob([
                                    ...k,
                                    z
                                ], { type: z.type })
                            }), k.length = 0;
                        }
                        v.call(n, y);
                    }
                });
            }, l.set(v, x)) : 'error' === u ? (x = y => {
                if (void 0 === y.error)
                    v.call(n, new ErrorEvent('error', { error: f() }));
                else if ('UnknownError' === y.error.name) {
                    const z = y.error.message;
                    v.call(n, new ErrorEvent('error', { error: f(z) }));
                } else
                    y instanceof ErrorEvent ? v.call(n, y) : v.call(n, new ErrorEvent('error', { error: y.error }));
            }, m.set(v, x)) : 'stop' === u && (x = y => {
                p = !1, setTimeout(() => v.call(n, y));
            }, o.set(v, x))), q.call(n, u, x, w);
        }), n.dispatchEvent = (r = n.dispatchEvent, u => {
            let v;
            setTimeout(() => {
                v = p, p = !1;
            });
            const w = r.call(n, u);
            return setTimeout(() => p = v), w;
        }), n.removeEventListener = (s = n.removeEventListener, (u, v, w) => {
            let x = v;
            if ('function' == typeof v)
                if ('dataavailable' === u) {
                    const y = l.get(v);
                    void 0 !== y && (x = y);
                } else if ('error' === y) {
                    const z = m.get(v);
                    void 0 !== z && (x = z);
                } else if ('stop' === z) {
                    const A = o.get(v);
                    void 0 !== A && (x = A);
                }
            return s.call(n, A, x, w);
        }), n.start = (t = n.start, u => {
            if (void 0 !== j.mimeType && j.mimeType.startsWith('audio/') && i.getVideoTracks().length > 0)
                throw g();
            return p = void 0 !== u, void 0 === u ? t.call(n) : t.call(n, u);
        }), n;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeMediaRecorderConstructor', function () {
        return _e;
    });
    const _e = f => null === f || void 0 === f.MediaRecorder ? null : f.MediaRecorder;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNotSupportedError', function () {
        return _e;
    });
    const _e = () => {
        try {
            return new DOMException('', 'NotSupportedError');
        } catch (a) {
            return a.code = 9, a.name = 'NotSupportedError', a;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createReadElementContent', function () {
        return _e;
    });
    const _e = f => (g, h, i, j = 2) => {
        const k = f(g, h);
        if (null === k)
            return k;
        const {
            length: l,
            value: m
        } = k;
        if ('master' === i)
            return {
                content: null,
                length: l
            };
        if (h + l + m > g.byteLength)
            return null;
        if ('binary' === i) {
            const n = (m / Float32Array.BYTES_PER_ELEMENT - 1) / j, o = Array.from({ length: j }, () => new Float32Array(n));
            for (let p = 0; p < n; p += 1) {
                const q = p * j + 1;
                for (let r = 0; r < j; r += 1)
                    o[r][p] = g.getFloat32(h + l + (q + r) * Float32Array.BYTES_PER_ELEMENT, !0);
            }
            return {
                content: o,
                length: l + m
            };
        }
        return {
            content: null,
            length: l + m
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createReadElementType', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        const i = f(g, h);
        if (null === i)
            return i;
        const {
            length: j,
            value: k
        } = i;
        return 35 === k ? {
            length: j,
            type: 'binary'
        } : 46 === k || 97 === k || 88713574 === k || 106212971 === k || 139690087 === k || 172351395 === k || 256095861 === k ? {
            length: j,
            type: 'master'
        } : {
            length: j,
            type: 'unknown'
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createReadVariableSizeInteger', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        const i = f(g, h);
        if (null === i)
            return i;
        const j = h + Math.floor((i - 1) / 8);
        if (j + i > g.byteLength)
            return null;
        let k = g.getUint8(j) & (1 << 8 - i % 8) - 1;
        for (let l = 1; l < i; l += 1)
            k = (k << 8) + g.getUint8(j + l);
        return {
            length: i,
            value: k
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWebAudioMediaRecorderFactory', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const h = 'Missing AudioWorklet support. Maybe this is not running in a secure context.', _i = (j, k, l, m) => (n, o, p) => {
            var q;
            const r = null === (q = o.getAudioTracks()[0]) || void 0 === q ? void 0 : q.getSettings().sampleRate, s = new (0, g.MinimalAudioContext)({
                    latencyHint: 'playback',
                    sampleRate: r
                }), t = Math.max(1024, Math.ceil(s.baseLatency * s.sampleRate)), u = new (0, g.AudioBuffer)({
                    length: t,
                    sampleRate: s.sampleRate
                }), v = [], w = (0, f.addRecorderAudioWorkletModule)(x => {
                    if (void 0 === g.addAudioWorkletModule)
                        throw new Error(h);
                    return (0, g.addAudioWorkletModule)(s, x);
                });
            let x = null, y = null, z = null, A = null, B = !0;
            const C = D => {
                    n.dispatchEvent(j('dataavailable', { data: new Blob(D, { type: p }) }));
                }, D = async (E, F) => {
                    const G = await (0, e.encode)(E, F);
                    null === z ? v.push(...G) : (C(G), A = D(E, F));
                }, E = () => (B = !0, s.resume()), F = () => {
                    null !== z && (null !== x && (o.removeEventListener('addtrack', x), o.removeEventListener('removetrack', x)), null !== y && clearTimeout(y), z.then(async ({
                        constantSourceNode: G,
                        encoderId: H,
                        mediaStreamAudioSourceNode: I,
                        recorderAudioWorkletNode: J
                    }) => {
                        null !== A && (A.catch(() => {
                        }), A = null), await J.stop(), I.disconnect(J), G.stop();
                        const K = await (0, e.encode)(H, null);
                        null === z && await _G(), C([
                            ...v,
                            ...K
                        ]), v.length = 0, n.dispatchEvent(new Event('stop'));
                    }), z = null);
                }, _G = () => (B = !1, s.suspend());
            return _G(), {
                get mimeType() {
                    return p;
                },
                get state() {
                    return null === z ? 'inactive' : B ? 'recording' : 'paused';
                },
                pause() {
                    if (null === z)
                        throw l();
                    B && (_G(), n.dispatchEvent(new Event('pause')));
                },
                resume() {
                    if (null === z)
                        throw l();
                    B || (E(), n.dispatchEvent(new Event('resume')));
                },
                start(H) {
                    var I;
                    if (null !== z)
                        throw l();
                    if (o.getVideoTracks().length > 0)
                        throw m();
                    n.dispatchEvent(new Event('start'));
                    const J = o.getAudioTracks(), K = 0 === J.length ? 2 : null !== (I = J[0].getSettings().channelCount) && void 0 !== I ? I : 2;
                    z = Promise.all([
                        E(),
                        w.then(() => (async (L, M, N, O, P) => {
                            const {
                                encoderId: Q,
                                port: R
                            } = await (0, e.instantiate)(P, M.sampleRate);
                            if (void 0 === g.AudioWorkletNode)
                                throw new Error(h);
                            return {
                                audioBufferSourceNode: new (0, g.AudioBufferSourceNode)(M, { buffer: L }),
                                encoderId: Q,
                                mediaStreamAudioSourceNode: new (0, g.MediaStreamAudioSourceNode)(M, { mediaStream: O }),
                                port: R,
                                recorderAudioWorkletNode: (0, f.createRecorderAudioWorkletNode)(g.AudioWorkletNode, M, { channelCount: N })
                            };
                        })(u, s, K, o, p))
                    ]).then(async ([, {
                            audioBufferSourceNode: L,
                            encoderId: M,
                            mediaStreamAudioSourceNode: N,
                            port: O,
                            recorderAudioWorkletNode: P
                        }]) => {
                        N.connect(P), await new Promise(Q => {
                            L.onended = Q, L.connect(P), L.start(s.currentTime + t / s.sampleRate);
                        }), L.disconnect(P);
                        const Q = new (0, g.ConstantSourceNode)(s, { offset: 0 });
                        return Q.onended = () => Q.disconnect(), Q.connect(s.destination), Q.start(), await P.record(O), void 0 !== H && (A = D(M, H)), {
                            constantSourceNode: Q,
                            encoderId: M,
                            mediaStreamAudioSourceNode: N,
                            recorderAudioWorkletNode: P
                        };
                    });
                    const L = o.getTracks();
                    x = () => {
                        F(), n.dispatchEvent(new ErrorEvent('error', { error: k() }));
                    }, o.addEventListener('addtrack', x), o.addEventListener('removetrack', x), y = setInterval(() => {
                        const M = o.getTracks();
                        M.length === L.length && !M.some((N, O) => N !== L[O]) || null === x || x();
                    }, 1000);
                },
                stop: F
            };
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'addRecorderAudioWorkletModule', function () {
        return _m;
    }), a(c.exports, 'createRecorderAudioWorkletNode', function () {
        return _n;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....');
    b('.....'), b('.....');
    const _m = (0, g.createAddRecorderAudioWorkletModule)(Blob, URL, l.worklet), _n = (0, j.createRecorderAudioWorkletNodeFactory)(h.createListener, (0, i.createPostMessageFactory)(e.generateUniqueNumber), f.on, k.validateState);
}), b.register('.....', function (c, d) {
    a(c.exports, 'on', function () {
        return _I;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....'), v = b('.....'), w = b('.....'), x = b('.....'), y = b('.....'), z = b('.....'), A = b('.....'), B = b('.....'), C = b('.....');
    b('.....'), b('.....');
    const D = (0, A.createWindow)(), E = (0, B.createWrapSubscribeFunction)(e.patch, f.toObserver), F = ((0, g.createAnimationFrame)(C.emitNotSupportedError, D, E), (0, q.createMutations)(C.emitNotSupportedError, D, E)), G = (0, k.createMapSubscribableThing)(E), H = (0, u.createPrependSubscribableThing)(E), _I = ((0, h.createAttribute)(G, F, H), (0, i.createGeolocation)(C.emitNotSupportedError, D, E), (0, j.createIntersections)(C.emitNotSupportedError, D, E), (0, l.createMediaDevices)(C.emitNotSupportedError, D, E), (0, m.createMediaQueryMatch)(C.emitNotSupportedError, D, E), (0, n.createMetrics)(C.emitNotSupportedError, D, E), (0, o.createMidiInputs)(E), (0, p.createMidiOutputs)(E), (0, r.createOn)(E));
    (0, s.createOnline)(C.emitNotSupportedError, D, E), (0, t.createPermissionState)(C.emitNotSupportedError, D, E), (0, v.createReports)(C.emitNotSupportedError, D, E), (0, w.createResizes)(C.emitNotSupportedError, D, E), (0, x.createUnhandledRejection)(C.emitNotSupportedError, D, E), (0, y.createVideoFrame)(C.emitNotSupportedError, E), (0, z.createWakeLock)(C.emitNotSupportedError, D, E);
}), b.register('.....', function (c, d) {
    a(c.exports, 'patch', function () {
        return _f;
    });
    var e = b('.....');
    function _f(g) {
        return Symbol.observable || ('function' == typeof g && g.prototype && g.prototype[Symbol.observable] ? (g.prototype[e.observable] = g.prototype[Symbol.observable], delete g.prototype[Symbol.observable]) : (g[e.observable] = g[Symbol.observable], delete g[Symbol.observable])), g;
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'observable', function () {
        return _e;
    });
    const _e = Symbol.observable || '@@observable';
}), b.register('.....', function (c, d) {
    a(c.exports, 'toObserver', function () {
        return _g;
    });
    const e = () => {
        }, f = g => {
            throw g;
        };
    function _g(h) {
        var i, j, k;
        return h ? h.next && h.error && h.complete ? h : {
            complete: (null !== (i = h.complete) && void 0 !== i ? i : e).bind(h),
            error: (null !== (j = h.error) && void 0 !== j ? j : f).bind(h),
            next: (null !== (_g = h.next) && void 0 !== _g ? _g : e).bind(h)
        } : {
            complete: e,
            error: f,
            next: e
        };
    }
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAnimationFrame', function () {
        return _e;
    });
    const _e = (f, g, h) => () => h(i => {
        if (null === g || void 0 === g.cancelAnimationFrame || void 0 === g.requestAnimationFrame)
            return f(i);
        let j = g.requestAnimationFrame(function f(k) {
            j = g.requestAnimationFrame(f), i.next(k);
        });
        return () => g.cancelAnimationFrame(j);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAttribute', function () {
        return _e;
    });
    const _e = (f, g, h) => (i, j) => {
        const k = () => i.getAttribute(j);
        return h(f(g(i, {
            attributeFilter: [j],
            childList: !1,
            subtree: !1
        }), () => k()), k());
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGeolocation', function () {
        return _e;
    });
    const _e = (f, g, h) => i => h(j => {
        if (null === g || void 0 === g.navigator || void 0 === g.navigator.geolocation || void 0 === g.navigator.geolocation.clearWatch || void 0 === g.navigator.geolocation.watchPosition)
            return f(j);
        const k = g.navigator.geolocation.watchPosition(l => j.next(l), l => j.error(l), i);
        return () => g.navigator.geolocation.clearWatch(k);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIntersections', function () {
        return _e;
    });
    const _e = (f, g, h) => (i, j) => h(k => {
        if (null === g || void 0 === g.IntersectionObserver)
            return f(k);
        const l = new g.IntersectionObserver(m => k.next(m), j);
        try {
            l.observe(i);
        } catch (f) {
            k.error(f);
        }
        return () => l.disconnect();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMapSubscribableThing', function () {
        return _e;
    });
    const _e = f => (g, h) => f(i => g({
        ...i,
        next: j => i.next(h(j))
    }));
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMediaDevices', function () {
        return _e;
    });
    const _e = (f, g, h) => () => h(i => {
        if (null === g || void 0 === g.navigator || void 0 === g.navigator.mediaDevices || void 0 === g.navigator.mediaDevices.enumerateDevices)
            return f(i);
        let j = !0;
        const k = () => {
                g.navigator.mediaDevices.enumerateDevices().then(l => {
                    j && i.next(l);
                }, l => {
                    j && (_l(), i.error(l));
                });
            }, _l = () => {
                j = !1, g.navigator.mediaDevices.removeEventListener('devicechange', k);
            };
        return k(), g.navigator.mediaDevices.addEventListener('devicechange', k), _l;
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMediaQueryMatch', function () {
        return _e;
    });
    const _e = (f, g, h) => i => h(j => {
        if (null === g || void 0 === g.matchMedia)
            return f(j);
        const k = g.matchMedia(i);
        return j.next(k.matches), k.onchange = () => j.next(k.matches), () => {
            k.onchange = null;
        };
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMetrics', function () {
        return _e;
    });
    const _e = (f, g, h) => i => h(j => {
        if (null === g || void 0 === g.PerformanceObserver)
            return f(j);
        const k = new g.PerformanceObserver(l => j.next(l.getEntries()));
        try {
            k.observe(i);
        } catch (f) {
            j.error(f);
        }
        return () => k.disconnect();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMidiInputs', function () {
        return _e;
    });
    const _e = f => g => f(h => {
        let i = Array.from(g.inputs.values());
        const j = () => {
            const k = g.inputs;
            (i.length !== k.size || i.some(({id: l}) => !k.has(l))) && (i = Array.from(k.values()), h.next(i));
        };
        return h.next(i), g.addEventListener('statechange', j), () => g.removeEventListener('statechange', j);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMidiOutputs', function () {
        return _e;
    });
    const _e = f => g => f(h => {
        let i = Array.from(g.outputs.values());
        const j = () => {
            const k = g.outputs;
            (i.length !== k.size || i.some(({id: l}) => !k.has(l))) && (i = Array.from(k.values()), h.next(i));
        };
        return h.next(i), g.addEventListener('statechange', j), () => g.removeEventListener('statechange', j);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMutations', function () {
        return _e;
    });
    const _e = (f, g, h) => (i, j) => h(k => {
        if (null === g || void 0 === g.MutationObserver)
            return f(k);
        const l = new g.MutationObserver(m => k.next(m));
        try {
            l.observe(i, j);
        } catch (f) {
            k.error(f);
        }
        return () => l.disconnect();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createOn', function () {
        return _e;
    });
    const _e = f => (g, h, i) => f(j => {
        const k = l => j.next(l);
        return g.addEventListener(h, k, i), () => g.removeEventListener(h, k, i);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createOnline', function () {
        return _e;
    });
    const _e = (f, g, h) => () => h(i => {
        if (null === g || void 0 === g.navigator || void 0 === g.navigator.onLine)
            return f(i);
        const j = () => i.next(!1), k = () => i.next(!0);
        return g.addEventListener('offline', j), g.addEventListener('online', k), i.next(g.navigator.onLine), () => {
            g.removeEventListener('offline', j), g.removeEventListener('online', k);
        };
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createPermissionState', function () {
        return _e;
    });
    const _e = (f, g, h) => i => h(j => {
        if (null === g || void 0 === g.navigator || void 0 === g.navigator.permissions || void 0 === g.navigator.permissions.query)
            return f(j);
        let k = !0, l = () => {
                k = !1;
            };
        return g.navigator.permissions.query(i).then(m => {
            k && j.next(m.state), k && (m.onchange = () => j.next(m.state), l = () => {
                m.onchange = null;
            });
        }, m => {
            k && j.error(m);
        }), () => l();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createPrependSubscribableThing', function () {
        return _e;
    });
    const _e = f => (g, h) => f(i => (i.next(h), g(i)));
}), b.register('.....', function (c, d) {
    a(c.exports, 'createReports', function () {
        return _e;
    });
    const _e = (f, g, h) => i => h(j => {
        if (null === g || void 0 === g.ReportingObserver)
            return f(j);
        const k = new g.ReportingObserver(l => j.next(l), i);
        return k.observe(), () => k.disconnect();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createResizes', function () {
        return _e;
    });
    const _e = (f, g, h) => (i, j) => h(k => {
        if (null === g || void 0 === g.ResizeObserver)
            return f(k);
        const l = new g.ResizeObserver(m => k.next(m));
        try {
            l.observe(i, j);
        } catch (f) {
            k.error(f);
        }
        return () => l.disconnect();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createUnhandledRejection', function () {
        return _e;
    });
    const _e = (f, g, h) => i => h(j => {
        if (null === g || void 0 === g.clearInterval || void 0 === g.setInterval)
            return f(j);
        const k = new Map();
        let l = null;
        const m = ({promise: n}) => k.delete(n), n = () => {
                const o = Date.now() - i;
                k.forEach(({
                    reason: p,
                    timestamp: q
                }, r) => {
                    q > o || (k.delete(r), j.next(p));
                }), null !== l && 0 === k.size && (g.clearInterval(l), l = null);
            }, o = p => {
                p.preventDefault(), k.set(p.promise, {
                    reason: p.reason,
                    timestamp: Date.now()
                }), null === l && (l = g.setInterval(n, i / 2));
            };
        return g.addEventListener('rejectionhandled', m), g.addEventListener('unhandledrejection', o), () => {
            null !== l && g.clearInterval(l), g.removeEventListener('rejectionhandled', m), g.removeEventListener('unhandledrejection', o);
        };
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createVideoFrame', function () {
        return _e;
    });
    const _e = (f, g) => h => g(i => {
        if (void 0 === h.cancelVideoFrameCallback || void 0 === h.requestVideoFrameCallback)
            return f(i);
        let j = h.requestVideoFrameCallback(function f(k, l) {
            j = h.requestVideoFrameCallback(f), i.next({
                ...l,
                now: k
            });
        });
        return () => h.cancelVideoFrameCallback(j);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWakeLock', function () {
        return _e;
    });
    const _e = (f, g, h) => i => h(j => {
        if (null === g || void 0 === g.navigator || void 0 === g.navigator.wakeLock)
            return f(j);
        const k = l => l.release().catch(() => {
            }), l = m => {
                m.onrelease = null;
            };
        let m = !0;
        const n = () => {
            m = !1;
        };
        let o = n;
        const p = () => g.navigator.wakeLock.request(i).then(q => {
            m && j.next(!0), m ? (q.onrelease = () => {
                j.next(!1), o = n, l(q), p();
            }, o = () => {
                l(q), k(q);
            }) : k(q);
        }, q => {
            m && j.error(q);
        });
        return p(), () => o();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWindow', function () {
        return _e;
    });
    const _e = () => 'undefined' == typeof window ? null : window;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWrapSubscribeFunction', function () {
        return _e;
    });
    const _e = (f, g) => {
        const h = () => {
        };
        return i => {
            const j = (...f) => {
                const k = i((l => 'function' == typeof l[0])(f) ? g({ next: f[0] }) : g(...f));
                return void 0 !== k ? k : h;
            };
            return j[Symbol.observable] = () => ({ subscribe: (...f) => ({ unsubscribe: j(...f) }) }), f(j);
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'emitNotSupportedError', function () {
        return _e;
    });
    const _e = f => (f.error(new Error('The required browser API seems to be not supported.')), () => {
    });
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....');
    b('.....'), b('.....');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMessageHandler', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h) => async ({
        data: {
            id: i,
            method: j,
            params: k
        }
    }) => {
        const l = h[j];
        try {
            if (void 0 === l)
                throw (0, e.renderMethodNotFoundError)({ method: j });
            const m = void 0 === k ? l() : l(k);
            if (void 0 === m)
                throw (0, e.renderMissingResponseError)({ method: j });
            const n = m instanceof Promise ? await m : m;
            if (null === i) {
                if (void 0 !== n.result)
                    throw (0, e.renderUnexpectedResultError)({ method: j });
            } else {
                if (void 0 === n.result)
                    throw (0, e.renderUnexpectedResultError)({ method: j });
                const {
                    result: o,
                    transferables: p = []
                } = n;
                g.postMessage({
                    id: i,
                    result: o
                }, p);
            }
        } catch (o) {
            const {
                message: p,
                status: q = -32603
            } = o;
            g.postMessage({
                error: {
                    code: q,
                    message: p
                },
                id: i
            });
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'renderMethodNotFoundError', function () {
        return _i;
    }), a(c.exports, 'renderMissingResponseError', function () {
        return _j;
    }), a(c.exports, 'renderUnexpectedResultError', function () {
        return _k;
    }), a(c.exports, 'renderUnknownPortIdError', function () {
        return _l;
    });
    var e = b('.....');
    const f = -32603, g = -32602, h = -32601, _i = (0, e.compile)({
            message: 'The requested method called "${method}" is not supported.',
            status: h
        }), _j = (0, e.compile)({
            message: 'The handler of the method called "${method}" returned no required result.',
            status: f
        }), _k = (0, e.compile)({
            message: 'The handler of the method called "${method}" returned an unexpected result.',
            status: f
        }), _l = (0, e.compile)({
            message: 'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
            status: g
        });
}), b.register('.....', function (c, d) {
    c.exports, function (e, f, g, h) {
        function i(j) {
            return j && 'object' == typeof j && 'default' in j ? j : { default: j };
        }
        var j = i(f), k = i(g), l = i(h), m = function (n, o) {
                return void 0 === o ? n : o.reduce(function (p, q) {
                    if ('capitalize' === q) {
                        var r = p.charAt(0).toUpperCase(), s = p.slice(1);
                        return ''.concat(r).concat(s);
                    }
                    return 'dashify' === q ? k.default(p) : 'prependIndefiniteArticle' === q ? ''.concat(l.default(p), ' ').concat(p) : p;
                }, n);
            }, n = function (o) {
                var p = o.name + o.modifiers.map(function (q) {
                    return '\\.'.concat(q, '\\(\\)');
                }).join('');
                return new RegExp('\\$\\{'.concat(p, '}'), 'g');
            }, o = function (p, q) {
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
                var x = s.reduce(function (y, z) {
                    return y.map(function (A) {
                        return 'string' == typeof A ? A.split(n(z)).reduce(function (B, C, D) {
                            return 0 === D ? [C] : z.name in q ? [].concat(j.default(B), [
                                m(q[z.name], z.modifiers),
                                C
                            ]) : [].concat(j.default(B), [
                                function (E) {
                                    return m(E[z.name], z.modifiers);
                                },
                                C
                            ]);
                        }, []) : [A];
                    }).reduce(function (A, B) {
                        return [].concat(j.default(A), j.default(B));
                    }, []);
                }, [p]);
                return function (y) {
                    return x.reduce(function (z, A) {
                        return [].concat(j.default(z), 'string' == typeof A ? [A] : [A(y)]);
                    }, []).join('');
                };
            }, p = function (q) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = void 0 === q.code ? void 0 : o(q.code, r), t = void 0 === q.message ? void 0 : o(q.message, r);
                function u() {
                    var v = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, w = arguments.length > 1 ? arguments[1] : void 0, x = void 0 === u && (v instanceof Error || void 0 !== v.code && 'Exception' === v.code.slice(-9)) ? {
                            cause: v,
                            missingParameters: {}
                        } : {
                            cause: u,
                            missingParameters: v
                        }, y = x.cause, z = x.missingParameters, A = void 0 === t ? new Error() : new Error(t(z));
                    return null !== y && (A.cause = y), void 0 !== s && (A.code = s(z)), void 0 !== q.status && (A.status = q.status), A;
                }
                return u;
            };
        e.compile = p, Object.defineProperty(e, '__esModule', { value: !0 });
    }(c.exports, b('.....'), b('.....'), b('.....'));
}), b.register('.....', function (c, d) {
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    c.exports = function (i) {
        return e(i) || f(i) || g(i) || h();
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....');
    c.exports = function (f) {
        if (Array.isArray(f))
            return e(f);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e) {
        if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator'])
            return Array.from(e);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....');
    c.exports = function (f, g) {
        if (f) {
            if ('string' == typeof f)
                return e(f, g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? e(f, g) : void 0;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = (e, f) => {
        if ('string' != typeof e)
            throw new TypeError('expected a string');
        return e.trim().replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\W/g, g => /[À-ž]/.test(g) ? g : '-').replace(/^-+|-+$/g, '').replace(/-{2,}/g, g => f && f.condense ? '-' : g).toLowerCase();
    };
}), b.register('.....', function (c, d) {
    var e = function (f) {
        var g, h, i = /\w+/.exec(f);
        if (!i)
            return 'an';
        var j = (h = i[0]).toLowerCase(), k = [
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'extendWorkerImplementation', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const h = new Map(), _i = (j, k, l) => ({
            ...k,
            connect: ({port: m}) => {
                m.start();
                const n = j(m, k), o = (0, e.generateUniqueNumber)(h);
                return h.set(o, () => {
                    n(), m.close(), h.delete(o);
                }), { result: o };
            },
            disconnect: ({portId: m}) => {
                const n = h.get(m);
                if (void 0 === n)
                    throw (0, f.renderUnknownPortIdError)({ portId: m.toString() });
                return n(), { result: null };
            },
            isSupported: async () => {
                if (await (0, g.isSupportingTransferables)()) {
                    const m = l();
                    return { result: m instanceof Promise ? await m : m };
                }
                return { result: !1 };
            }
        });
}), b.register('.....', function (c, d) {
    a(c.exports, 'isSupportingTransferables', function () {
        return _e;
    });
    const _e = () => new Promise(f => {
        const g = new ArrayBuffer(0), {
                port1: h,
                port2: i
            } = new MessageChannel();
        h.onmessage = ({data: j}) => f(null !== j), i.postMessage(g, [g]);
    });
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddRecorderAudioWorkletModule', function () {
        return _e;
    });
    const _e = (f, g, h) => async i => {
        const j = new f([h], { type: 'application/javascript; charset=utf-8' }), k = g.createObjectURL(j);
        try {
            await i(k);
        } finally {
            g.revokeObjectURL(k);
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createListener', function () {
        return _e;
    });
    const _e = f => ({data: g}) => {
        const {id: h} = g;
        if (null !== h) {
            const i = f.get(h);
            if (void 0 !== i) {
                const {
                    reject: j,
                    resolve: k
                } = i;
                f.delete(h), void 0 === g.error ? k(g.result) : j(new Error(g.error.message));
            }
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createPostMessageFactory', function () {
        return _e;
    });
    const _e = f => (g, h) => (i, j = []) => new Promise((k, l) => {
        const m = f(g);
        g.set(m, {
            reject: l,
            resolve: k
        }), h.postMessage({
            id: m,
            ...i
        }, j);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createRecorderAudioWorkletNodeFactory', function () {
        return _e;
    });
    const _e = (f, g, h, i) => (j, k, l = {}) => {
        const m = new j(k, 'recorder-audio-worklet-processor', {
                ...l,
                channelCountMode: 'explicit',
                numberOfInputs: 1,
                numberOfOutputs: 0
            }), n = new Map(), o = g(n, m.port), p = h(m.port, 'message')(f(n));
        m.port.start();
        let q = 'inactive';
        return Object.defineProperties(m, {
            pause: { get: () => async () => (i(['recording'], q), q = 'paused', o({ method: 'pause' })) },
            port: {
                get() {
                    throw new Error('The port of a RecorderAudioWorkletNode can\'t be accessed.');
                }
            },
            record: {
                get: () => async r => (i(['inactive'], q), q = 'recording', o({
                    method: 'record',
                    params: { encoderPort: r }
                }, [r]))
            },
            resume: { get: () => async () => (i(['paused'], q), q = 'recording', o({ method: 'resume' })) },
            stop: {
                get: () => async () => {
                    i([
                        'paused',
                        'recording'
                    ], q), q = 'stopped';
                    try {
                        await o({ method: 'stop' });
                    } finally {
                        p();
                    }
                }
            }
        }), m;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'validateState', function () {
        return _e;
    });
    const _e = (f, g) => {
        if (!f.includes(g))
            throw new Error(`Expected the state to be ${ f.map(h => `"${ h }"`).join(' or ') } but it was "${ g }".`);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'worklet', function () {
        return _e;
    });
    const _e = '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();';
}), b.register('.....', function (c, d) {
    b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    a(c.exports, 'AudioBuffer', function () {
        return _ee;
    }), a(c.exports, 'AudioBufferSourceNode', function () {
        return _me;
    }), a(c.exports, 'ConstantSourceNode', function () {
        return _Be;
    }), a(c.exports, 'addAudioWorkletModule', function () {
        return _rf;
    }), a(c.exports, 'MediaStreamAudioSourceNode', function () {
        return _xf;
    }), a(c.exports, 'AudioWorkletNode', function () {
        return _Mf;
    }), a(c.exports, 'MinimalAudioContext', function () {
        return _Nf;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....'), v = b('.....'), w = b('.....'), x = b('.....'), y = b('.....'), z = b('.....'), A = b('.....'), B = b('.....'), C = b('.....'), D = b('.....'), E = b('.....'), F = b('.....'), G = b('.....'), H = b('.....'), I = b('.....'), J = b('.....'), K = b('.....'), L = b('.....'), M = b('.....'), N = b('.....'), O = b('.....'), P = b('.....'), Q = b('.....'), R = b('.....'), S = b('.....'), T = b('.....'), U = b('.....'), V = b('.....'), W = b('.....'), X = b('.....'), Y = b('.....'), Z = b('.....'), $ = b('.....'), ab = b('.....'), bb = b('.....'), cb = b('.....'), db = b('.....'), eb = b('.....'), fb = b('.....'), gb = b('.....'), hb = b('.....'), ib = b('.....'), jb = b('.....'), kb = b('.....'), lb = b('.....'), mb = b('.....'), nb = b('.....'), ob = b('.....'), pb = b('.....'), qb = b('.....'), rb = b('.....'), sb = b('.....'), tb = b('.....'), ub = b('.....'), vb = b('.....'), wb = b('.....'), xb = b('.....'), yb = b('.....'), zb = b('.....'), Ab = b('.....'), Bb = b('.....'), Cb = b('.....'), Db = b('.....'), Eb = b('.....'), Fb = b('.....'), Gb = b('.....'), Hb = b('.....'), Ib = (b('.....'), b('.....')), Jb = b('.....'), Kb = b('.....'), Lb = b('.....'), Mb = b('.....'), Nb = b('.....'), Ob = b('.....'), Pb = b('.....'), Qb = b('.....'), Rb = b('.....'), Sb = b('.....'), Tb = b('.....'), Ub = b('.....'), Vb = b('.....'), Wb = b('.....'), Xb = b('.....'), Yb = b('.....'), Zb = b('.....'), $b = b('.....'), ac = b('.....'), bc = b('.....'), cc = b('.....'), dc = b('.....'), ec = b('.....'), fc = b('.....'), gc = b('.....'), hc = b('.....'), ic = b('.....'), jc = b('.....'), kc = b('.....'), lc = b('.....'), mc = b('.....'), nc = b('.....'), oc = b('.....'), pc = b('.....'), qc = b('.....'), rc = b('.....'), sc = b('.....'), tc = b('.....'), uc = b('.....'), vc = b('.....'), wc = b('.....'), xc = b('.....'), yc = b('.....'), zc = b('.....'), Ac = b('.....'), Bc = b('.....'), Cc = b('.....'), Dc = b('.....'), Ec = b('.....'), Fc = b('.....'), Gc = b('.....'), Hc = b('.....'), Ic = b('.....'), Jc = b('.....'), Kc = b('.....'), Lc = b('.....'), Mc = b('.....'), Nc = (b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....')), Oc = (b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....')), Pc = (b('.....'), b('.....')), Qc = b('.....'), Rc = b('.....'), Sc = b('.....'), Tc = b('.....'), Uc = b('.....'), Vc = b('.....'), Wc = b('.....'), Xc = b('.....'), Yc = b('.....'), Zc = b('.....'), $c = b('.....'), ad = b('.....'), bd = b('.....'), cd = b('.....'), dd = b('.....'), ed = b('.....'), fd = b('.....'), gd = b('.....'), hd = b('.....'), id = b('.....'), jd = b('.....'), kd = b('.....'), ld = b('.....'), md = b('.....'), nd = b('.....'), od = b('.....'), pd = b('.....'), qd = b('.....'), rd = b('.....'), sd = b('.....'), td = b('.....'), ud = b('.....'), vd = b('.....'), wd = b('.....'), xd = b('.....'), yd = b('.....'), zd = (b('.....'), b('.....')), Ad = (b('.....'), b('.....')), Bd = b('.....'), Cd = b('.....');
    b('.....'), b('.....');
    const Dd = (0, g.createAddActiveInputConnectionToAudioNode)(gd.insertElementInSet), Ed = (0, l.createAddPassiveInputConnectionToAudioNode)(gd.insertElementInSet), Fd = (0, Y.createDeleteActiveInputConnectionToAudioNode)(md.pickElementFromSet), Gd = new WeakMap(), Hd = (0, mb.createGetAudioNodeTailTime)(Gd), Id = (0, F.createCacheTestResult)(new Map(), new WeakMap()), Jd = (0, Sc.createWindow)(), Kd = (0, Qb.createNativeAnalyserNodeFactory)(Id, vb.createIndexSizeError), Ld = (0, lb.createGetAudioNodeRenderer)($c.getAudioNodeConnections), Md = (0, Ec.createRenderInputsOfAudioNode)($c.getAudioNodeConnections, Ld, jd.isPartOfACycle), Nd = (0, p.createAnalyserNodeRendererFactory)(Kd, dd.getNativeAudioNode, Md), Od = (0, pb.createGetNativeContext)(Xc.CONTEXT_STORE), Pd = (0, mc.createNativeOfflineAudioContextConstructor)(Jd), Qd = (0, Gb.createIsNativeOfflineAudioContext)(Pd), Rd = new WeakMap(), Sd = (0, fb.createEventTargetConstructor)(Cd.wrapEventListener), Td = (0, Tb.createNativeAudioContextConstructor)(Jd), Ud = (0, Cb.createIsNativeAudioContext)(Td), Vd = (0, Db.createIsNativeAudioNode)(Jd), Wd = (0, Eb.createIsNativeAudioParam)(Jd), Xd = (0, Vb.createNativeAudioWorkletNodeConstructor)(Jd), Yd = (0, x.createAudioNodeConstructor)((0, h.createAddAudioNodeConnections)(Xc.AUDIO_NODE_CONNECTIONS_STORE), (0, k.createAddConnectionToAudioNode)(Dd, Ed, Yc.connectNativeAudioNodeToNativeAudioNode, Fd, Zc.disconnectNativeAudioNodeFromNativeAudioNode, $c.getAudioNodeConnections, Hd, bd.getEventListenersOfAudioNode, dd.getNativeAudioNode, gd.insertElementInSet, hd.isActiveAudioNode, jd.isPartOfACycle, kd.isPassiveAudioNode), Id, (0, ub.createIncrementCycleCounterFactory)(Xc.CYCLE_COUNTERS, Zc.disconnectNativeAudioNodeFromNativeAudioNode, $c.getAudioNodeConnections, dd.getNativeAudioNode, ed.getNativeAudioParam, hd.isActiveAudioNode), vb.createIndexSizeError, wb.createInvalidAccessError, wc.createNotSupportedError, (0, V.createDecrementCycleCounter)(Yc.connectNativeAudioNodeToNativeAudioNode, Xc.CYCLE_COUNTERS, $c.getAudioNodeConnections, dd.getNativeAudioNode, ed.getNativeAudioParam, Od, hd.isActiveAudioNode, Qd), (0, $.createDetectCycles)(Rd, $c.getAudioNodeConnections, fd.getValueForKey), Sd, Od, Ud, Vd, Wd, Qd, Xd), Zd = (0, o.createAnalyserNodeConstructor)(Yd, Nd, vb.createIndexSizeError, Kd, Od, Qd), $d = new WeakSet(), ae = (0, Rb.createNativeAudioBufferConstructor)(Jd), be = (0, P.createConvertNumberToUnsignedLong)(new Uint32Array(1)), ce = (0, Tc.createWrapAudioBufferCopyChannelMethods)(be, vb.createIndexSizeError), de = (0, Uc.createWrapAudioBufferCopyChannelMethodsOutOfBounds)(be), _ee = (0, q.createAudioBufferConstructor)($d, Id, wc.createNotSupportedError, ae, Pd, (0, Mc.createTestAudioBufferConstructorSupport)(ae), ce, de), fe = (0, m.createAddSilentConnection)(fc.createNativeGainNode), ge = (0, Fc.createRenderInputsOfAudioParam)(Ld, ad.getAudioParamConnections, jd.isPartOfACycle), he = (0, K.createConnectAudioParam)(ge), ie = (0, Sb.createNativeAudioBufferSourceNodeFactory)(fe, Id, sd.testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, td.testAudioBufferSourceNodeStartMethodOffsetClampingSupport, ud.testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, vd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, wd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, xd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, Ad.wrapAudioBufferSourceNodeStartMethodOffsetClamping, (0, Vc.createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer)(ld.overwriteAccessors), Bd.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls), je = (0, Dc.createRenderAutomation)((0, nb.createGetAudioParamRenderer)(ad.getAudioParamConnections), ge), ke = (0, s.createAudioBufferSourceNodeRendererFactory)(he, ie, dd.getNativeAudioNode, je, Md), le = (0, y.createAudioParamFactory)((0, i.createAddAudioParamConnections)(Xc.AUDIO_PARAM_CONNECTIONS_STORE), Rd, Xc.AUDIO_PARAM_STORE, z.createAudioParamRenderer, e.createCancelAndHoldAutomationEvent, e.createCancelScheduledValuesAutomationEvent, e.createExponentialRampToValueAutomationEvent, e.createLinearRampToValueAutomationEvent, e.createSetTargetAutomationEvent, e.createSetValueAutomationEvent, e.createSetValueCurveAutomationEvent, Td, qd.setValueAtTimeUntilPossible), _me = (0, r.createAudioBufferSourceNodeConstructor)(Yd, ke, le, xb.createInvalidStateError, ie, Od, Qd, Cd.wrapEventListener), ne = (0, u.createAudioDestinationNodeConstructor)(Yd, v.createAudioDestinationNodeRenderer, vb.createIndexSizeError, xb.createInvalidStateError, (0, Ub.createNativeAudioDestinationNodeFactory)(fc.createNativeGainNode, ld.overwriteAccessors), Od, Qd, Md), oe = (0, E.createBiquadFilterNodeRendererFactory)(he, Yb.createNativeBiquadFilterNode, dd.getNativeAudioNode, je, Md), pe = (0, Ic.createSetAudioNodeTailTime)(Gd), qe = (0, D.createBiquadFilterNodeConstructor)(Yd, le, oe, wb.createInvalidAccessError, Yb.createNativeBiquadFilterNode, Od, Qd, pe), re = (0, Pb.createMonitorConnections)(gd.insertElementInSet, Vd), se = (0, Wc.createWrapChannelMergerNode)(xb.createInvalidStateError, re), te = (0, Zb.createNativeChannelMergerNodeFactory)(Td, se), ue = (0, H.createChannelMergerNodeRendererFactory)(te, dd.getNativeAudioNode, Md), ve = (0, G.createChannelMergerNodeConstructor)(Yd, ue, te, Od, Qd), we = (0, J.createChannelSplitterNodeRendererFactory)($b.createNativeChannelSplitterNode, dd.getNativeAudioNode, Md), xe = (0, I.createChannelSplitterNodeConstructor)(Yd, we, $b.createNativeChannelSplitterNode, Od, Qd, od.sanitizeChannelSplitterOptions), ye = (0, bc.createNativeConstantSourceNodeFakerFactory)(fe, ie, fc.createNativeGainNode, re), ze = (0, ac.createNativeConstantSourceNodeFactory)(fe, Id, ye, vd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, xd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport), Ae = (0, O.createConstantSourceNodeRendererFactory)(he, ze, dd.getNativeAudioNode, je, Md), _Be = (0, N.createConstantSourceNodeConstructor)(Yd, le, Ae, ze, Od, Qd, Cd.wrapEventListener), Ce = (0, cc.createNativeConvolverNodeFactory)(wc.createNotSupportedError, ld.overwriteAccessors), De = (0, R.createConvolverNodeRendererFactory)(Ce, dd.getNativeAudioNode, Md), Ee = (0, Q.createConvolverNodeConstructor)(Yd, De, Ce, Od, Qd, pe), Fe = (0, X.createDelayNodeRendererFactory)(he, dc.createNativeDelayNode, dd.getNativeAudioNode, je, Md), Ge = (0, W.createDelayNodeConstructor)(Yd, le, Fe, dc.createNativeDelayNode, Od, Qd, pe), He = (0, ec.createNativeDynamicsCompressorNodeFactory)(wc.createNotSupportedError), Ie = (0, cb.createDynamicsCompressorNodeRendererFactory)(he, He, dd.getNativeAudioNode, je, Md), Je = (0, bb.createDynamicsCompressorNodeConstructor)(Yd, le, Ie, He, wc.createNotSupportedError, Od, Qd, pe), Ke = (0, jb.createGainNodeRendererFactory)(he, fc.createNativeGainNode, dd.getNativeAudioNode, je, Md), Le = (0, ib.createGainNodeConstructor)(Yd, le, Ke, fc.createNativeGainNode, Od, Qd), Me = (0, hc.createNativeIIRFilterNodeFakerFactory)(wb.createInvalidAccessError, xb.createInvalidStateError, rc.createNativeScriptProcessorNode, wc.createNotSupportedError), Ne = (0, Gc.createRenderNativeOfflineAudioContext)(Id, fc.createNativeGainNode, rc.createNativeScriptProcessorNode, (0, Oc.createTestOfflineAudioContextCurrentTimeSupport)(fc.createNativeGainNode, Pd)), Oe = (0, tb.createIIRFilterNodeRendererFactory)(ie, dd.getNativeAudioNode, Pd, Md, Ne), Pe = (0, gc.createNativeIIRFilterNodeFactory)(Me), Qe = (0, sb.createIIRFilterNodeConstructor)(Yd, Pe, Oe, Od, Qd, pe), Re = (0, w.createAudioListenerFactory)(le, te, ze, rc.createNativeScriptProcessorNode, wc.createNotSupportedError, cd.getFirstSample, Qd, ld.overwriteAccessors), Se = new WeakMap(), Te = (0, Nb.createMinimalBaseAudioContextConstructor)(ne, Re, Sd, Qd, Se, Cd.wrapEventListener), Ue = (0, nc.createNativeOscillatorNodeFactory)(fe, Id, vd.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, wd.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, xd.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, Bd.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls), Ve = (0, zc.createOscillatorNodeRendererFactory)(he, Ue, dd.getNativeAudioNode, je, Md), We = (0, yc.createOscillatorNodeConstructor)(Yd, le, Ue, Ve, Od, Qd, Cd.wrapEventListener), Xe = (0, M.createConnectedNativeAudioBufferSourceNodeFactory)(ie), Ye = (0, vc.createNativeWaveShaperNodeFakerFactory)(Xe, xb.createInvalidStateError, fc.createNativeGainNode, id.isDCCurve, re), Ze = (0, uc.createNativeWaveShaperNodeFactory)(Xe, xb.createInvalidStateError, Ye, id.isDCCurve, re, Td, ld.overwriteAccessors), $e = (0, pc.createNativePannerNodeFakerFactory)(Yc.connectNativeAudioNodeToNativeAudioNode, xb.createInvalidStateError, te, fc.createNativeGainNode, rc.createNativeScriptProcessorNode, Ze, wc.createNotSupportedError, Zc.disconnectNativeAudioNodeFromNativeAudioNode, cd.getFirstSample, re), af = (0, oc.createNativePannerNodeFactory)($e), bf = (0, Bc.createPannerNodeRendererFactory)(he, te, ze, fc.createNativeGainNode, af, dd.getNativeAudioNode, Pd, je, Md, Ne), cf = (0, Ac.createPannerNodeConstructor)(Yd, le, af, bf, Od, Qd, pe), df = (0, qc.createNativePeriodicWaveFactory)(vb.createIndexSizeError), ef = (0, Cc.createPeriodicWaveConstructor)(df, Od, new WeakSet(), pd.sanitizePeriodicWaveOptions), ff = (0, tc.createNativeStereoPannerNodeFakerFactory)(te, $b.createNativeChannelSplitterNode, fc.createNativeGainNode, Ze, wc.createNotSupportedError, re), gf = (0, sc.createNativeStereoPannerNodeFactory)(ff, wc.createNotSupportedError), hf = (0, Lc.createStereoPannerNodeRendererFactory)(he, gf, dd.getNativeAudioNode, je, Md), jf = (0, Kc.createStereoPannerNodeConstructor)(Yd, le, gf, hf, Od, Qd), kf = (0, Rc.createWaveShaperNodeRendererFactory)(Ze, dd.getNativeAudioNode, Md), lf = (0, Qc.createWaveShaperNodeConstructor)(Yd, xb.createInvalidStateError, Ze, kf, Od, Qd, pe), mf = (0, Hb.createIsSecureContext)(Jd), nf = (0, gb.createExposeCurrentFrameAndCurrentTime)(Jd), pf = new WeakMap(), qf = (0, qb.createGetOrCreateBackupOfflineAudioContext)(pf, Pd), _rf = mf ? (0, j.createAddAudioWorkletModule)(Id, wc.createNotSupportedError, (0, eb.createEvaluateSource)(Jd), nf, (0, hb.createFetchSource)(f.createAbortError), Od, qf, Qd, Xd, new WeakMap(), new WeakMap(), (0, Nc.createTestAudioWorkletProcessorPostMessageSupport)(Xd, Pd), Jd) : void 0, sf = (0, Fb.createIsNativeContext)(Ud, Qd), tf = (0, U.createDecodeAudioData)($d, Id, T.createDataCloneError, db.createEncodingError, new WeakSet(), Od, sf, rd.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, zd.testPromiseSupport, ce, de), uf = (0, C.createBaseAudioContextConstructor)(_rf, Zd, _ee, _me, qe, ve, xe, _Be, Ee, tf, Ge, Je, Le, Qe, Te, We, cf, ef, jf, lf), vf = (0, Ib.createMediaElementAudioSourceNodeConstructor)(Yd, ic.createNativeMediaElementAudioSourceNode, Od, Qd), wf = (0, Jb.createMediaStreamAudioDestinationNodeConstructor)(Yd, jc.createNativeMediaStreamAudioDestinationNode, Od, Qd), _xf = (0, Kb.createMediaStreamAudioSourceNodeConstructor)(Yd, kc.createNativeMediaStreamAudioSourceNode, Od, Qd), yf = (0, lc.createNativeMediaStreamTrackAudioSourceNodeFactory)(xb.createInvalidStateError, Qd), zf = (0, Lb.createMediaStreamTrackAudioSourceNodeConstructor)(Yd, yf, Od), Af = ((0, t.createAudioContextConstructor)(uf, xb.createInvalidStateError, wc.createNotSupportedError, Pc.createUnknownError, vf, wf, _xf, zf, Td), (0, rb.createGetUnrenderedAudioWorkletNodes)(Se)), Bf = (0, n.createAddUnrenderedAudioWorkletNode)(Af), Cf = (0, L.createConnectMultipleOutputs)(vb.createIndexSizeError), Df = (0, Z.createDeleteUnrenderedAudioWorkletNode)(Af), Ef = (0, ab.createDisconnectMultipleOutputs)(vb.createIndexSizeError), Ff = new WeakMap(), Gf = (0, kb.createGetActiveAudioWorkletNodeInputs)(Ff, fd.getValueForKey), Hf = (0, Xb.createNativeAudioWorkletNodeFakerFactory)(Cf, vb.createIndexSizeError, xb.createInvalidStateError, te, $b.createNativeChannelSplitterNode, ze, fc.createNativeGainNode, rc.createNativeScriptProcessorNode, wc.createNotSupportedError, Ef, nf, Gf, re), If = (0, Wb.createNativeAudioWorkletNodeFactory)(xb.createInvalidStateError, Hf, fc.createNativeGainNode, wc.createNotSupportedError, re), Jf = (0, B.createAudioWorkletNodeRendererFactory)(he, Cf, ie, te, $b.createNativeChannelSplitterNode, ze, fc.createNativeGainNode, Df, Ef, nf, dd.getNativeAudioNode, Xd, Pd, je, Md, Ne), Kf = (0, ob.createGetBackupOfflineAudioContext)(pf), Lf = (0, Hc.createSetActiveAudioWorkletNodeInputs)(Ff), _Mf = mf ? (0, A.createAudioWorkletNodeConstructor)(Bf, Yd, le, Jf, If, $c.getAudioNodeConnections, Kf, Od, Qd, Xd, nd.sanitizeAudioWorkletNodeOptions, Lf, yd.testAudioWorkletNodeOptionsClonability, Cd.wrapEventListener) : void 0, _Nf = (0, Mb.createMinimalAudioContextConstructor)(xb.createInvalidStateError, wc.createNotSupportedError, Pc.createUnknownError, Te, Td), Of = (0, S.createCreateNativeOfflineAudioContext)(wc.createNotSupportedError, Pd), Pf = (0, Jc.createStartRendering)($d, Id, Ld, Af, Ne, rd.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, ce, de);
    (0, Ob.createMinimalOfflineAudioContextConstructor)(Id, xb.createInvalidStateError, Of, Te, Pf), (0, xc.createOfflineAudioContextConstructor)(uf, Id, xb.createInvalidStateError, Of, Pf), (0, yb.createIsAnyAudioContext)(Xc.CONTEXT_STORE, Ud), (0, zb.createIsAnyAudioNode)(Xc.AUDIO_NODE_STORE, Vd), (0, Ab.createIsAnyAudioParam)(Xc.AUDIO_PARAM_STORE, Wd), (0, Bb.createIsAnyOfflineAudioContext)(Xc.CONTEXT_STORE, Qd);
}), b.register('.....', function (c, d) {
    c.exports, function (e, f, g, h) {
        function i(j) {
            return j && 'object' == typeof j && 'default' in j ? j : { default: j };
        }
        var j = i(f), k = i(g), l = i(h), m = function (n, o, p) {
                return {
                    endTime: o,
                    insertTime: p,
                    type: 'exponentialRampToValue',
                    value: n
                };
            }, n = function (o, p, q) {
                return {
                    endTime: p,
                    insertTime: q,
                    type: 'linearRampToValue',
                    value: o
                };
            }, o = function (p, q) {
                return {
                    startTime: q,
                    type: 'setValue',
                    value: p
                };
            }, p = function (q, r, s) {
                return {
                    duration: s,
                    startTime: r,
                    type: 'setValueCurve',
                    values: q
                };
            }, q = function (r, s, t) {
                var u = t.startTime, v = t.target, w = t.timeConstant;
                return v + (s - v) * Math.exp((u - r) / w);
            }, r = function (s) {
                return 'exponentialRampToValue' === s.type;
            }, s = function (t) {
                return 'linearRampToValue' === t.type;
            }, t = function (u) {
                return r(u) || s(u);
            }, u = function (v) {
                return 'setValue' === v.type;
            }, v = function (w) {
                return 'setValueCurve' === w.type;
            }, w = function e(x, y, z, A) {
                var B = x[y];
                return void 0 === B ? A : t(B) || u(B) ? B.value : v(B) ? B.values[B.values.length - 1] : q(z, e(x, y - 1, B.startTime, A), B);
            }, x = function (y, z, A, B, C) {
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
            }, y = function (z) {
                return 'cancelAndHold' === z.type;
            }, z = function (A) {
                return 'cancelScheduledValues' === A.type;
            }, A = function (B) {
                return y(B) || z(B) ? B.cancelTime : r(B) || s(B) ? B.endTime : B.startTime;
            }, B = function (C, D, E, F) {
                var G = F.endTime, H = F.value;
                return E === H ? H : 0 < E && 0 < H || E < 0 && H < 0 ? E * Math.pow(H / E, (C - D) / (G - D)) : 0;
            }, C = function (D, E, F, G) {
                return F + (D - E) / (G.endTime - E) * (G.value - F);
            }, D = function (E, F) {
                var G = Math.floor(F), H = Math.ceil(F);
                return G === H ? E[G] : (1 - (F - G)) * E[G] + (1 - (H - F)) * E[H];
            }, E = function (F, G) {
                var H = G.duration, I = G.startTime, J = G.values, K = (F - I) / H * (J.length - 1);
                return D(J, K);
            }, F = function (G) {
                return 'setTarget' === G.type;
            }, G = function (H) {
                function I(J) {
                    k.default(this, I), this._automationEvents = [], this._currenTime = 0, this._defaultValue = J;
                }
                return l.default(I, [
                    {
                        key: H,
                        value: function () {
                            return this._automationEvents[Symbol.iterator]();
                        }
                    },
                    {
                        key: 'add',
                        value: function (J) {
                            var K = A(J);
                            if (y(J) || z(J)) {
                                var L = this._automationEvents.findIndex(function (M) {
                                        return z(J) && v(M) ? M.startTime + M.duration >= K : A(M) >= K;
                                    }), M = this._automationEvents[L];
                                if (-1 !== L && (this._automationEvents = this._automationEvents.slice(0, L)), y(J)) {
                                    var N = this._automationEvents[this._automationEvents.length - 1];
                                    if (void 0 !== M && t(M)) {
                                        if (F(N))
                                            throw new Error('The internal list is malformed.');
                                        var O = v(N) ? N.startTime + N.duration : A(N), P = v(N) ? N.values[N.values.length - 1] : N.value, Q = r(M) ? B(K, O, P, M) : C(K, O, P, M), R = r(M) ? m(Q, K, this._currenTime) : n(Q, K, this._currenTime);
                                        this._automationEvents.push(R);
                                    }
                                    void 0 !== N && F(N) && this._automationEvents.push(o(this.getValue(K), K)), void 0 !== N && v(N) && N.startTime + N.duration > K && (this._automationEvents[this._automationEvents.length - 1] = p(new Float32Array([
                                        6,
                                        7
                                    ]), N.startTime, K - N.startTime));
                                }
                            } else {
                                var S = this._automationEvents.findIndex(function (T) {
                                        return A(T) > K;
                                    }), T = -1 === S ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[S - 1];
                                if (void 0 !== T && v(T) && A(T) + T.duration > K)
                                    return !1;
                                var U = r(J) ? m(J.value, J.endTime, this._currenTime) : s(J) ? n(J.value, K, this._currenTime) : J;
                                if (-1 === S)
                                    this._automationEvents.push(U);
                                else {
                                    if (v(J) && K + J.duration > A(this._automationEvents[S]))
                                        return !1;
                                    this._automationEvents.splice(S, 0, U);
                                }
                            }
                            return !0;
                        }
                    },
                    {
                        key: 'flush',
                        value: function (J) {
                            var K = this._automationEvents.findIndex(function (L) {
                                return A(L) > J;
                            });
                            if (K > 1) {
                                var L = this._automationEvents.slice(K - 1), M = L[0];
                                F(M) && L.unshift(o(w(this._automationEvents, K - 2, M.startTime, this._defaultValue), M.startTime)), this._automationEvents = L;
                            }
                        }
                    },
                    {
                        key: 'getValue',
                        value: function (J) {
                            if (0 === this._automationEvents.length)
                                return this._defaultValue;
                            var K = this._automationEvents.findIndex(function (L) {
                                    return A(L) > J;
                                }), L = this._automationEvents[K], M = (-1 === K ? this._automationEvents.length : K) - 1, N = this._automationEvents[M];
                            if (void 0 !== N && F(N) && (void 0 === L || !t(L) || L.insertTime > J))
                                return q(J, w(this._automationEvents, M - 1, N.startTime, this._defaultValue), N);
                            if (void 0 !== N && u(N) && (void 0 === L || !t(L)))
                                return N.value;
                            if (void 0 !== N && v(N) && (void 0 === L || !t(L) || N.startTime + N.duration > J))
                                return J < N.startTime + N.duration ? E(J, N) : N.values[N.values.length - 1];
                            if (void 0 !== N && t(N) && (void 0 === L || !t(L)))
                                return N.value;
                            if (void 0 !== L && r(L)) {
                                var O = x(this._automationEvents, M, N, L, this._defaultValue), P = j.default(O, 2), Q = P[0], R = P[1];
                                return B(J, Q, R, L);
                            }
                            if (void 0 !== L && s(L)) {
                                var S = x(this._automationEvents, M, N, L, this._defaultValue), T = j.default(S, 2), U = T[0], V = T[1];
                                return C(J, U, V, L);
                            }
                            return this._defaultValue;
                        }
                    }
                ]), I;
            }(Symbol.iterator), H = function (I) {
                return {
                    cancelTime: I,
                    type: 'cancelAndHold'
                };
            }, I = function (J) {
                return {
                    cancelTime: J,
                    type: 'cancelScheduledValues'
                };
            }, J = function (K, L) {
                return {
                    endTime: L,
                    type: 'exponentialRampToValue',
                    value: K
                };
            }, K = function (L, M) {
                return {
                    endTime: M,
                    type: 'linearRampToValue',
                    value: L
                };
            }, L = function (M, N, O) {
                return {
                    startTime: N,
                    target: M,
                    timeConstant: O,
                    type: 'setTarget'
                };
            };
        e.AutomationEventList = G, e.createCancelAndHoldAutomationEvent = H, e.createCancelScheduledValuesAutomationEvent = I, e.createExponentialRampToValueAutomationEvent = J, e.createLinearRampToValueAutomationEvent = K, e.createSetTargetAutomationEvent = L, e.createSetValueAutomationEvent = o, e.createSetValueCurveAutomationEvent = p, Object.defineProperty(e, '__esModule', { value: !0 });
    }(c.exports, b('.....'), b('.....'), b('.....'));
}), b.register('.....', function (c, d) {
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    c.exports = function (i, j) {
        return e(i) || f(i, j) || g(i, j) || h();
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e) {
        if (Array.isArray(e))
            return e;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e, f) {
        var g = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != g) {
            var h, i, j, k, l = [], m = !0, n = !1;
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
}), b.register('.....', function (c, d) {
    var e = b('.....');
    c.exports = function (f, g) {
        if (f) {
            if ('string' == typeof f)
                return e(f, g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? e(f, g) : void 0;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....');
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, e(f.key), f);
        }
    }
    c.exports = function (i, j, k) {
        return j && f(i.prototype, j), k && f(i, k), Object.defineProperty(i, 'prototype', { writable: !1 }), i;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....').default, f = b('.....');
    c.exports = function (g) {
        var h = f(g, 'string');
        return 'symbol' === e(h) ? h : String(h);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    function e(f) {
        return c.exports = e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (g) {
            return typeof g;
        } : function (g) {
            return g && 'function' == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? 'symbol' : typeof g;
        }, c.exports.__esModule = !0, c.exports.default = c.exports, e(f);
    }
    c.exports = e, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....').default;
    c.exports = function (f, g) {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAbortError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'AbortError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddActiveInputConnectionToAudioNode', function () {
        return _e;
    });
    const _e = f => (g, h, [i, j, k], l) => {
        f(g[j], [
            h,
            i,
            k
        ], m => m[0] === h && m[1] === i, l);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddAudioNodeConnections', function () {
        return _e;
    });
    const _e = f => (g, h, i) => {
        const j = [];
        for (let k = 0; k < i.numberOfInputs; k += 1)
            j.push(new Set());
        k.set(g, {
            activeInputs: j,
            outputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: h
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddAudioParamConnections', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        f.set(g, {
            activeInputs: new Set(),
            passiveInputs: new WeakMap(),
            renderer: h
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddAudioWorkletModule', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const h = i => {
            if (void 0 !== i && !Array.isArray(i))
                throw new TypeError('The parameterDescriptors property of given value for processorCtor is not an array.');
        }, i = j => {
            if (!(0, f.isConstructible)(j))
                throw new TypeError('The given value for processorCtor should be a constructor.');
            if (null === j.prototype || 'object' != typeof j.prototype)
                throw new TypeError('The given value for processorCtor should have a prototype.');
        }, _j = (k, l, m, n, o, p, q, r, s, t, u, v, w) => {
            let x = 0;
            return (y, z, A = { credentials: 'omit' }) => {
                const B = u.get(y);
                if (void 0 !== B && B.has(z))
                    return Promise.resolve();
                const C = t.get(y);
                if (void 0 !== C) {
                    const D = C.get(z);
                    if (void 0 !== D)
                        return D;
                }
                const E = p(y), F = void 0 === E.audioWorklet ? o(z).then(([G, H]) => {
                        const [I, J] = (0, g.splitImportStatements)(G, H);
                        return m(`${ I };((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${ J }\n})})(window,'_AWGS')`);
                    }).then(() => {
                        const G = w._AWGS.pop();
                        if (void 0 === G)
                            throw new SyntaxError();
                        n(E.currentTime, E.sampleRate, () => G(class {
                        }, void 0, (H, I) => {
                            if ('' === H.trim())
                                throw l();
                            const J = e.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(E);
                            if (void 0 !== J) {
                                if (J.has(H))
                                    throw l();
                                i(I), h(I.parameterDescriptors), J.set(H, I);
                            } else
                                i(I), h(I.parameterDescriptors), e.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(E, new Map([[
                                        H,
                                        I
                                    ]]));
                        }, E.sampleRate, void 0, void 0));
                    }) : Promise.all([
                        o(z),
                        Promise.resolve(D(v, v))
                    ]).then(([[G, H], I]) => {
                        const J = x + 1;
                        x = J;
                        const [K, L] = (0, g.splitImportStatements)(G, H), M = new Blob([`${ K };((AudioWorkletProcessor,registerProcessor)=>{${ L }\n})(${ I ? 'AudioWorkletProcessor' : 'class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}' },(n,p)=>registerProcessor(n,class extends p{${ I ? '' : '__c = (a) => a.forEach(e=>this.__b.add(e.buffer));' }process(i,o,p){${ I ? '' : 'i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));' }return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${ J }',class extends AudioWorkletProcessor{process(){return !1}})`], { type: 'application/javascript; charset=utf-8' }), N = URL.createObjectURL(M);
                        return E.audioWorklet.addModule(N, A).then(() => {
                            if (r(E))
                                return E;
                            const O = q(E);
                            return O.audioWorklet.addModule(N, A).then(() => O);
                        }).then(O => {
                            if (null === s)
                                throw new SyntaxError();
                            try {
                                new s(O, `__sac${ J }`);
                            } catch {
                                throw new SyntaxError();
                            }
                        }).finally(() => URL.revokeObjectURL(N));
                    });
                return void 0 === C ? t.set(y, new Map([[
                        z,
                        F
                    ]])) : C.set(z, F), F.then(() => {
                    const G = u.get(y);
                    void 0 === G ? u.set(y, new Set([z])) : G.add(z);
                }).finally(() => {
                    const G = t.get(y);
                    void 0 !== G && G.delete(z);
                }), F;
            };
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'ACTIVE_AUDIO_NODE_STORE', function () {
        return _e;
    }), a(c.exports, 'AUDIO_NODE_CONNECTIONS_STORE', function () {
        return _f;
    }), a(c.exports, 'AUDIO_NODE_STORE', function () {
        return _g;
    }), a(c.exports, 'AUDIO_PARAM_CONNECTIONS_STORE', function () {
        return _h;
    }), a(c.exports, 'AUDIO_PARAM_STORE', function () {
        return _i;
    }), a(c.exports, 'CONTEXT_STORE', function () {
        return _j;
    }), a(c.exports, 'EVENT_LISTENERS', function () {
        return _k;
    }), a(c.exports, 'CYCLE_COUNTERS', function () {
        return _l;
    }), a(c.exports, 'NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS', function () {
        return _m;
    }), a(c.exports, 'NODE_TO_PROCESSOR_MAPS', function () {
        return _n;
    });
    const _e = new WeakSet(), _f = new WeakMap(), _g = new WeakMap(), _h = new WeakMap(), _i = new WeakMap(), _j = new WeakMap(), _k = new WeakMap(), _l = new WeakMap(), _m = new WeakMap(), _n = new WeakMap();
}), b.register('.....', function (c, d) {
    a(c.exports, 'isConstructible', function () {
        return _f;
    });
    const e = { construct: () => e }, _f = g => {
            try {
                new new Proxy(g, e)();
            } catch {
                return !1;
            }
            return !0;
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'splitImportStatements', function () {
        return _f;
    });
    const e = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/, _f = (g, h) => {
            const i = [];
            let j = g.replace(/^[\s]+/, ''), k = j.match(e);
            for (; null !== k;) {
                const l = k[1].slice(1, -1), m = k[0].replace(/([\s]+)?;?$/, '').replace(l, new URL(l, h).toString());
                i.push(m), j = j.slice(k[0].length).replace(/^[\s]+/, ''), k = j.match(e);
            }
            return [
                i.join(';'),
                j
            ];
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddConnectionToAudioNode', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const _h = (i, j, k, l, m, n, o, p, q, r, s, t, u) => {
        const v = new WeakMap();
        return (w, x, y, z, A) => {
            const {
                    activeInputs: B,
                    passiveInputs: C
                } = n(x), {outputs: D} = n(w), E = p(w), F = G => {
                    const H = q(x), I = q(w);
                    if (G) {
                        const J = (0, e.deletePassiveInputConnectionToAudioNode)(C, w, y, z);
                        i(B, w, J, !1), A || t(w) || k(I, H, y, z), u(x) && (0, f.setInternalStateToActive)(x);
                    } else {
                        const K = l(B, w, y, z);
                        J(C, z, K, !1), A || t(w) || m(I, H, y, z);
                        const L = o(x);
                        if (0 === L)
                            s(x) && (0, g.setInternalStateToPassiveWhenNecessary)(x, B);
                        else {
                            const M = v.get(x);
                            void 0 !== M && clearTimeout(M), v.set(x, setTimeout(() => {
                                s(x) && (0, g.setInternalStateToPassiveWhenNecessary)(x, B);
                            }, 1000 * L));
                        }
                    }
                };
            return !!r(D, [
                x,
                y,
                z
            ], G => G[0] === x && G[1] === y && G[2] === z, !0) && (E.add(F), s(w) ? i(B, w, [
                y,
                z,
                F
            ], !0) : j(C, z, [
                w,
                y,
                F
            ], !0), !0);
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'deletePassiveInputConnectionToAudioNode', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k) => {
        const l = (0, e.getValueForKey)(h, i), m = (0, f.pickElementFromSet)(l, n => n[0] === j && n[1] === k);
        return 0 === l.size && h.delete(i), m;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'getValueForKey', function () {
        return _e;
    });
    const _e = (f, g) => {
        const h = f.get(g);
        if (void 0 === h)
            throw new Error('A value with the given key could not be found.');
        return h;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'pickElementFromSet', function () {
        return _e;
    });
    const _e = (f, g) => {
        const h = Array.from(f).filter(g);
        if (h.length > 1)
            throw Error('More than one element was found.');
        if (0 === h.length)
            throw Error('No element was found.');
        const [i] = h;
        return f.delete(i), i;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'setInternalStateToActive', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => {
        if (e.ACTIVE_AUDIO_NODE_STORE.has(h))
            throw new Error('The AudioNode is already stored.');
        e.ACTIVE_AUDIO_NODE_STORE.add(h), (0, f.getEventListenersOfAudioNode)(h).forEach(i => i(!0));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'getEventListenersOfAudioNode', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => (0, f.getValueForKey)(e.EVENT_LISTENERS, h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'setInternalStateToPassiveWhenNecessary', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i) => {
        !(0, e.isAudioWorkletNode)(h) && i.every(j => 0 === j.size) && (0, f.setInternalStateToPassive)(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'isAudioWorkletNode', function () {
        return _e;
    });
    const _e = f => 'port' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'setInternalStateToPassive', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => {
        if (!e.ACTIVE_AUDIO_NODE_STORE.has(h))
            throw new Error('The AudioNode is not stored.');
        e.ACTIVE_AUDIO_NODE_STORE.delete(h), (0, f.getEventListenersOfAudioNode)(h).forEach(i => i(!1));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddPassiveInputConnectionToAudioNode', function () {
        return _e;
    });
    const _e = f => (g, h, [i, j, k], l) => {
        const m = g.get(i);
        void 0 === m ? g.set(i, new Set([[
                j,
                h,
                k
            ]])) : f(m, [
            j,
            h,
            k
        ], n => n[0] === j && n[1] === h, l);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddSilentConnection', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        const i = f(g, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        h.connect(i).connect(g.destination);
        const j = () => {
            h.removeEventListener('ended', j), h.disconnect(i), i.disconnect();
        };
        h.addEventListener('ended', j);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAddUnrenderedAudioWorkletNode', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        f(g).add(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAnalyserNodeConstructor', function () {
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
        }, _f = (g, h, i, j, k, l) => class extends g {
            get fftSize() {
                return this._nativeAnalyserNode.fftSize;
            }
            set fftSize(m) {
                this._nativeAnalyserNode.fftSize = m;
            }
            get frequencyBinCount() {
                return this._nativeAnalyserNode.frequencyBinCount;
            }
            get maxDecibels() {
                return this._nativeAnalyserNode.maxDecibels;
            }
            set maxDecibels(m) {
                const n = this._nativeAnalyserNode.maxDecibels;
                if (this._nativeAnalyserNode.maxDecibels = m, !(m > this._nativeAnalyserNode.minDecibels))
                    throw this._nativeAnalyserNode.maxDecibels = n, i();
            }
            get minDecibels() {
                return this._nativeAnalyserNode.minDecibels;
            }
            set minDecibels(m) {
                const n = this._nativeAnalyserNode.minDecibels;
                if (this._nativeAnalyserNode.minDecibels = m, !(this._nativeAnalyserNode.maxDecibels > m))
                    throw this._nativeAnalyserNode.minDecibels = n, i();
            }
            get smoothingTimeConstant() {
                return this._nativeAnalyserNode.smoothingTimeConstant;
            }
            set smoothingTimeConstant(m) {
                this._nativeAnalyserNode.smoothingTimeConstant = m;
            }
            getByteFrequencyData(m) {
                this._nativeAnalyserNode.getByteFrequencyData(m);
            }
            getByteTimeDomainData(m) {
                this._nativeAnalyserNode.getByteTimeDomainData(m);
            }
            getFloatFrequencyData(m) {
                this._nativeAnalyserNode.getFloatFrequencyData(m);
            }
            getFloatTimeDomainData(m) {
                this._nativeAnalyserNode.getFloatTimeDomainData(m);
            }
            constructor(m, n) {
                const o = k(m), p = {
                        ...e,
                        ...n
                    }, q = j(o, p);
                super(m, !1, q, l(o) ? h() : null), this._nativeAnalyserNode = q;
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAnalyserNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i) => () => {
        const j = new WeakMap();
        return {
            render(k, l) {
                const m = j.get(l);
                return void 0 !== m ? Promise.resolve(m) : (async (n, o) => {
                    let p = h(n);
                    if (!(0, e.isOwnedByContext)(p, o)) {
                        const q = {
                            channelCount: p.channelCount,
                            channelCountMode: p.channelCountMode,
                            channelInterpretation: p.channelInterpretation,
                            fftSize: p.fftSize,
                            maxDecibels: p.maxDecibels,
                            minDecibels: p.minDecibels,
                            smoothingTimeConstant: p.smoothingTimeConstant
                        };
                        p = g(o, q);
                    }
                    return j.set(o, p), await i(n, o, p), p;
                })(k, l);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'isOwnedByContext', function () {
        return _e;
    });
    const _e = (f, g) => f.context === g;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioBufferConstructor', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....');
    const g = { numberOfChannels: 1 }, _h = (i, j, k, l, m, n, o, p) => {
            let q = null;
            return class f {
                static [Symbol.hasInstance](r) {
                    return null !== r && 'object' == typeof r && Object.getPrototypeOf(r) === f.prototype || i.has(r);
                }
                constructor(r) {
                    if (null === m)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const {
                        length: s,
                        numberOfChannels: t,
                        sampleRate: u
                    } = {
                        ...g,
                        ...r
                    };
                    null === q && (q = new m(1, 1, 44100));
                    const v = null !== l && j(n, n) ? new l({
                        length: s,
                        numberOfChannels: t,
                        sampleRate: u
                    }) : q.createBuffer(t, s, u);
                    if (0 === v.numberOfChannels)
                        throw k();
                    return 'function' != typeof v.copyFromChannel ? (o(v), (0, f.wrapAudioBufferGetChannelDataMethod)(v)) : j(e.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => (0, e.testAudioBufferCopyChannelMethodsOutOfBoundsSupport)(v)) || p(v), i.add(v), v;
                }
            };
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioBufferCopyChannelMethodsOutOfBoundsSupport', function () {
        return _e;
    });
    const _e = f => {
        try {
            f.copyToChannel(new Float32Array(1), 0, -1);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAudioBufferGetChannelDataMethod', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        var h;
        g.getChannelData = (h = g.getChannelData, i => {
            try {
                return h.call(g, i);
            } catch (g) {
                if (12 === g.code)
                    throw (0, e.createIndexSizeError)();
                throw g;
            }
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIndexSizeError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'IndexSizeError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioBufferSourceNodeConstructor', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const i = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
        }, _j = (k, l, m, n, o, p, q, r) => class extends k {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer;
            }
            set buffer(s) {
                if (this._nativeAudioBufferSourceNode.buffer = s, null !== s) {
                    if (this._isBufferSet)
                        throw n();
                    this._isBufferSet = !0;
                }
            }
            get loop() {
                return this._nativeAudioBufferSourceNode.loop;
            }
            set loop(s) {
                this._nativeAudioBufferSourceNode.loop = s;
            }
            get loopEnd() {
                return this._nativeAudioBufferSourceNode.loopEnd;
            }
            set loopEnd(s) {
                this._nativeAudioBufferSourceNode.loopEnd = s;
            }
            get loopStart() {
                return this._nativeAudioBufferSourceNode.loopStart;
            }
            set loopStart(s) {
                this._nativeAudioBufferSourceNode.loopStart = s;
            }
            get onended() {
                return this._onended;
            }
            set onended(s) {
                const t = 'function' == typeof s ? r(this, s) : null;
                this._nativeAudioBufferSourceNode.onended = t;
                const u = this._nativeAudioBufferSourceNode.onended;
                this._onended = null !== u && u === t ? s : u;
            }
            get playbackRate() {
                return this._playbackRate;
            }
            start(s = 0, t = 0, u) {
                if (this._nativeAudioBufferSourceNode.start(s, t, u), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === u ? [
                        s,
                        t
                    ] : [
                        s,
                        t,
                        u
                    ]), 'closed' !== this.context.state) {
                    (0, g.setInternalStateToActive)(this);
                    const v = () => {
                        this._nativeAudioBufferSourceNode.removeEventListener('ended', v), (0, f.isActiveAudioNode)(this) && (0, h.setInternalStateToPassive)(this);
                    };
                    this._nativeAudioBufferSourceNode.addEventListener('ended', v);
                }
            }
            stop(s = 0) {
                this._nativeAudioBufferSourceNode.stop(s), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = s);
            }
            constructor(s, t) {
                const u = p(s), v = {
                        ...i,
                        ...t
                    }, w = o(u, v), x = q(u), y = x ? l() : null;
                super(s, !1, w, y), this._audioBufferSourceNodeRenderer = y, this._isBufferNullified = !1, this._isBufferSet = null !== v.buffer, this._nativeAudioBufferSourceNode = w, this._onended = null, this._playbackRate = m(this, x, w.playbackRate, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'MOST_NEGATIVE_SINGLE_FLOAT', function () {
        return _e;
    }), a(c.exports, 'MOST_POSITIVE_SINGLE_FLOAT', function () {
        return _f;
    });
    const _e = -3.4028234663852886e+38, _f = -_e;
}), b.register('.....', function (c, d) {
    a(c.exports, 'isActiveAudioNode', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => e.ACTIVE_AUDIO_NODE_STORE.has(g);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioBufferSourceNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => () => {
        const l = new WeakMap();
        let m = null, n = null;
        return {
            set start(o) {
                m = o;
            },
            set stop(o) {
                n = o;
            },
            render(o, p) {
                const q = l.get(p);
                return void 0 !== q ? Promise.resolve(q) : (async (r, s) => {
                    let t = i(r);
                    const u = (0, e.isOwnedByContext)(t, s);
                    if (!u) {
                        const v = {
                            buffer: t.buffer,
                            channelCount: t.channelCount,
                            channelCountMode: t.channelCountMode,
                            channelInterpretation: t.channelInterpretation,
                            loop: t.loop,
                            loopEnd: t.loopEnd,
                            loopStart: t.loopStart,
                            playbackRate: t.playbackRate.value
                        };
                        t = h(s, v), null !== m && t.start(...m), null !== n && t.stop(n);
                    }
                    return l.set(s, t), u ? await v(s, r.playbackRate, t.playbackRate) : await j(s, r.playbackRate, t.playbackRate), await k(r, s, t), t;
                })(o, p);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioContextConstructor', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l, m, n, o, p) => class extends h {
        get baseLatency() {
            return this._baseLatency;
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state;
        }
        close() {
            return 'closed' === this.state ? this._nativeAudioContext.close().then(() => {
                throw i();
            }) : ('suspended' === this._state && (this._state = null), this._nativeAudioContext.close().then(() => {
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, e.deactivateAudioGraph)(this);
            }));
        }
        createMediaElementSource(q) {
            return new l(this, { mediaElement: q });
        }
        createMediaStreamDestination() {
            return new m(this);
        }
        createMediaStreamSource(q) {
            return new n(this, { mediaStream: q });
        }
        createMediaStreamTrackSource(q) {
            return new o(this, { mediaStreamTrack: q });
        }
        resume() {
            return 'suspended' === this._state ? new Promise((q, r) => {
                const s = () => {
                    this._nativeAudioContext.removeEventListener('statechange', s), 'running' === this._nativeAudioContext.state ? q() : this.resume().then(q, r);
                };
                this._nativeAudioContext.addEventListener('statechange', s);
            }) : this._nativeAudioContext.resume().catch(q => {
                if (void 0 === q || 15 === q.code)
                    throw i();
                throw q;
            });
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(q => {
                if (void 0 === q)
                    throw i();
                throw q;
            });
        }
        constructor(q = {}) {
            if (null === p)
                throw new Error('Missing the native AudioContext constructor.');
            let r;
            try {
                r = new p(q);
            } catch (q) {
                if (12 === q.code && 'sampleRate is not in range' === q.message)
                    throw j();
                throw q;
            }
            if (null === r)
                throw k();
            if (!(0, f.isValidLatencyHint)(q.latencyHint))
                throw new TypeError(`The provided value '${ q.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== q.sampleRate && r.sampleRate !== q.sampleRate)
                throw j();
            super(r, 2);
            const {latencyHint: s} = q, {sampleRate: t} = r;
            if (this._baseLatency = 'number' == typeof r.baseLatency ? r.baseLatency : 'balanced' === s ? 512 / t : 'interactive' === s || void 0 === s ? 256 / t : 'playback' === s ? 1024 / t : 128 * Math.max(2, Math.min(128, Math.round(s * t / 128))) / t, this._nativeAudioContext = r, 'webkitAudioContext' === p.name ? (this._nativeGainNode = r.createGain(), this._nativeOscillatorNode = r.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(r.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === r.state) {
                this._state = 'suspended';
                const u = () => {
                    'suspended' === this._state && (this._state = null), r.removeEventListener('statechange', u);
                };
                r.addEventListener('statechange', u);
            }
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'deactivateAudioGraph', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        (0, e.deactivateActiveAudioNodeInputConnections)(g.destination, []);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'deactivateActiveAudioNodeInputConnections', function () {
        return _p;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....');
    const _p = (q, r) => {
        const {activeInputs: s} = (0, l.getAudioNodeConnections)(q);
        s.forEach(t => t.forEach(([u]) => {
            r.includes(q) || _p(u, [
                ...r,
                q
            ]);
        }));
        const t = (0, e.isAudioBufferSourceNode)(q) ? [q.playbackRate] : (0, f.isAudioWorkletNode)(q) ? Array.from(q.parameters.values()) : (0, g.isBiquadFilterNode)(q) ? [
            q.Q,
            q.detune,
            q.frequency,
            q.gain
        ] : (0, h.isConstantSourceNode)(q) ? [q.offset] : (0, i.isGainNode)(q) ? [q.gain] : (0, j.isOscillatorNode)(q) ? [
            q.detune,
            q.frequency
        ] : (0, k.isStereoPannerNode)(q) ? [q.pan] : [];
        for (const u of t) {
            const v = (0, m.getAudioParamConnections)(u);
            void 0 !== v && v.activeInputs.forEach(([w]) => _p(w, r));
        }
        (0, n.isActiveAudioNode)(u) && (0, o.setInternalStateToPassive)(u);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'isAudioBufferSourceNode', function () {
        return _e;
    });
    const _e = f => 'playbackRate' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'isBiquadFilterNode', function () {
        return _e;
    });
    const _e = f => 'frequency' in f && 'gain' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'isConstantSourceNode', function () {
        return _e;
    });
    const _e = f => 'offset' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'isGainNode', function () {
        return _e;
    });
    const _e = f => !('frequency' in f) && 'gain' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'isOscillatorNode', function () {
        return _e;
    });
    const _e = f => 'detune' in f && 'frequency' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'isStereoPannerNode', function () {
        return _e;
    });
    const _e = f => 'pan' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'getAudioNodeConnections', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => (0, f.getValueForKey)(e.AUDIO_NODE_CONNECTIONS_STORE, h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'getAudioParamConnections', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => (0, f.getValueForKey)(e.AUDIO_PARAM_CONNECTIONS_STORE, h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'isValidLatencyHint', function () {
        return _e;
    });
    const _e = f => void 0 === f || 'number' == typeof f || 'string' == typeof f && ('balanced' === f || 'interactive' === f || 'playback' === f);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioDestinationNodeConstructor', function () {
        return _e;
    });
    const _e = (f, g, h, i, j, k, l, m) => class extends f {
        get channelCount() {
            return this._nativeAudioDestinationNode.channelCount;
        }
        set channelCount(n) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw i();
            if (n > this._nativeAudioDestinationNode.maxChannelCount)
                throw h();
            this._nativeAudioDestinationNode.channelCount = n;
        }
        get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode;
        }
        set channelCountMode(n) {
            if (this._isNodeOfNativeOfflineAudioContext)
                throw i();
            this._nativeAudioDestinationNode.channelCountMode = n;
        }
        get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount;
        }
        constructor(n, o) {
            const p = k(n), q = l(p), r = j(p, o, q);
            super(n, !1, r, q ? g(m) : null), this._isNodeOfNativeOfflineAudioContext = q, this._nativeAudioDestinationNode = r;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioDestinationNodeRenderer', function () {
        return _e;
    });
    const _e = f => {
        const g = new WeakMap();
        return {
            render(h, i) {
                const j = g.get(i);
                return void 0 !== j ? Promise.resolve(j) : (async (k, l) => {
                    const m = l.destination;
                    return g.set(l, m), await f(k, l, m), m;
                })(h, i);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioListenerFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k, l, m, n) => (o, p) => {
        const q = p.listener, {
                forwardX: r,
                forwardY: s,
                forwardZ: t,
                positionX: u,
                positionY: v,
                positionZ: w,
                upX: x,
                upY: y,
                upZ: z
            } = void 0 === q.forwardX ? (() => {
                const A = new Float32Array(1), B = h(p, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: 9
                    }), C = m(p);
                let D = !1, E = [
                        0,
                        0,
                        -1,
                        0,
                        1,
                        0
                    ], F = [
                        0,
                        0,
                        0
                    ];
                const G = () => {
                        if (D)
                            return;
                        D = !0;
                        const H = j(p, 256, 9, 0);
                        H.onaudioprocess = ({inputBuffer: I}) => {
                            const J = [
                                l(I, A, 0),
                                l(I, A, 1),
                                l(I, A, 2),
                                l(I, A, 3),
                                l(I, A, 4),
                                l(I, A, 5)
                            ];
                            J.some((K, L) => K !== E[L]) && (q.setOrientation(...J), E = J);
                            const K = [
                                l(I, A, 6),
                                l(I, A, 7),
                                l(I, A, 8)
                            ];
                            K.some((L, M) => L !== F[M]) && (q.setPosition(...K), F = K);
                        }, B.connect(H);
                    }, H = I => J => {
                        J !== E[I] && (E[I] = J, q.setOrientation(...E));
                    }, I = J => K => {
                        K !== F[J] && (F[J] = K, q.setPosition(...F));
                    }, J = (K, L, M) => {
                        const N = i(p, {
                            channelCount: 1,
                            channelCountMode: 'explicit',
                            channelInterpretation: 'discrete',
                            offset: L
                        });
                        N.connect(B, 0, K), N.start(), Object.defineProperty(N.offset, 'defaultValue', { get: () => L });
                        const O = g({ context: o }, C, N.offset, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT);
                        var P, Q, R, S, T, U, V;
                        return n(O, 'value', W => () => W.call(O), W => X => {
                            try {
                                W.call(O, X);
                            } catch (W) {
                                if (9 !== W.code)
                                    throw W;
                            }
                            G(), C && M(X);
                        }), O.cancelAndHoldAtTime = (P = O.cancelAndHoldAtTime, C ? () => {
                            throw k();
                        } : (...g) => {
                            const W = P.apply(O, g);
                            return G(), W;
                        }), O.cancelScheduledValues = (Q = O.cancelScheduledValues, C ? () => {
                            throw k();
                        } : (...g) => {
                            const W = Q.apply(O, g);
                            return G(), W;
                        }), O.exponentialRampToValueAtTime = (R = O.exponentialRampToValueAtTime, C ? () => {
                            throw k();
                        } : (...g) => {
                            const W = R.apply(O, g);
                            return G(), W;
                        }), O.linearRampToValueAtTime = (S = O.linearRampToValueAtTime, C ? () => {
                            throw k();
                        } : (...g) => {
                            const W = S.apply(O, g);
                            return G(), W;
                        }), O.setTargetAtTime = (T = O.setTargetAtTime, C ? () => {
                            throw k();
                        } : (...g) => {
                            const W = T.apply(O, g);
                            return G(), W;
                        }), O.setValueAtTime = (U = O.setValueAtTime, C ? () => {
                            throw k();
                        } : (...g) => {
                            const W = U.apply(O, g);
                            return G(), W;
                        }), O.setValueCurveAtTime = (V = O.setValueCurveAtTime, C ? () => {
                            throw k();
                        } : (...g) => {
                            const W = V.apply(O, g);
                            return G(), W;
                        }), O;
                    };
                return {
                    forwardX: J(0, 0, H(0)),
                    forwardY: J(1, 0, H(1)),
                    forwardZ: J(2, -1, H(2)),
                    positionX: J(6, 0, I(0)),
                    positionY: J(7, 0, I(1)),
                    positionZ: J(8, 0, I(2)),
                    upX: J(3, 0, H(3)),
                    upY: J(4, 1, H(4)),
                    upZ: J(5, 0, H(5))
                };
            })() : q;
        return {
            get forwardX() {
                return r;
            },
            get forwardY() {
                return s;
            },
            get forwardZ() {
                return t;
            },
            get positionX() {
                return u;
            },
            get positionY() {
                return v;
            },
            get positionZ() {
                return w;
            },
            get upX() {
                return x;
            },
            get upY() {
                return y;
            },
            get upZ() {
                return z;
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioNodeConstructor', function () {
        return _G;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....'), v = b('.....'), w = b('.....'), x = b('.....'), y = b('.....'), z = b('.....'), A = b('.....'), B = b('.....'), C = b('.....'), D = b('.....');
    const E = (F, G, H, I, J) => {
            const [K, L] = ((M, N, O, P) => {
                const {
                        activeInputs: Q,
                        passiveInputs: R
                    } = (0, q.getAudioNodeConnections)(N), S = (0, k.deleteActiveInputConnection)(Q[P], M, O);
                if (null === S)
                    return [
                        (0, n.deletePassiveInputConnectionToAudioNode)(R, M, O, P)[2],
                        !1
                    ];
                return [
                    S[2],
                    !0
                ];
            })(F, H, I, J);
            if (null !== K && ((0, m.deleteEventListenerOfAudioNode)(F, K), !L || G || (0, x.isPartOfACycle)(F) || (0, p.disconnectNativeAudioNodeFromNativeAudioNode)((0, t.getNativeAudioNode)(F), (0, t.getNativeAudioNode)(H), I, J)), (0, w.isActiveAudioNode)(H)) {
                const {activeInputs: M} = (0, q.getAudioNodeConnections)(H);
                (0, A.setInternalStateToPassiveWhenNecessary)(H, M);
            }
        }, F = (G, H, I, J) => {
            const [K, L] = ((M, N, O) => {
                const {
                        activeInputs: P,
                        passiveInputs: Q
                    } = (0, r.getAudioParamConnections)(N), R = (0, k.deleteActiveInputConnection)(P, M, O);
                if (null === R)
                    return [
                        (0, o.deletePassiveInputConnectionToAudioParam)(Q, M, O)[1],
                        !1
                    ];
                return [
                    R[2],
                    !0
                ];
            })(G, I, J);
            null !== K && ((0, m.deleteEventListenerOfAudioNode)(G, K), !L || H || (0, x.isPartOfACycle)(G) || (0, t.getNativeAudioNode)(G).disconnect((0, u.getNativeAudioParam)(I), J));
        }, _G = (H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W) => class extends Q {
            get channelCount() {
                return this._nativeAudioNode.channelCount;
            }
            set channelCount(X) {
                this._nativeAudioNode.channelCount = X;
            }
            get channelCountMode() {
                return this._nativeAudioNode.channelCountMode;
            }
            set channelCountMode(X) {
                this._nativeAudioNode.channelCountMode = X;
            }
            get channelInterpretation() {
                return this._nativeAudioNode.channelInterpretation;
            }
            set channelInterpretation(X) {
                this._nativeAudioNode.channelInterpretation = X;
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
            connect(X, Y = 0, Z = 0) {
                if (Y < 0 || Y >= this._nativeAudioNode.numberOfOutputs)
                    throw L();
                const $ = R(this._context), ab = V($);
                if (T(X) || U(X))
                    throw M();
                if ((0, f.isAudioNode)(X)) {
                    const bb = (0, t.getNativeAudioNode)(X);
                    try {
                        const cb = (0, j.connectNativeAudioNodeToNativeAudioNode)(this._nativeAudioNode, bb, Y, Z), db = (0, y.isPassiveAudioNode)(this);
                        (ab || db) && this._nativeAudioNode.disconnect(...cb), 'closed' !== this.context.state && !db && (0, y.isPassiveAudioNode)(X) && (0, z.setInternalStateToActive)(X);
                    } catch (X) {
                        if (12 === X.code)
                            throw M();
                        throw X;
                    }
                    if (cb(this, X, Y, Z, ab)) {
                        const eb = P([this], X);
                        (0, C.visitEachAudioNodeOnce)(eb, db(ab));
                    }
                    return X;
                }
                const fb = (0, u.getNativeAudioParam)(X);
                if ('playbackRate' === fb.name && 1024 === fb.maxValue)
                    throw N();
                try {
                    this._nativeAudioNode.connect(fb, Y), (ab || (0, y.isPassiveAudioNode)(this)) && this._nativeAudioNode.disconnect(fb, Y);
                } catch (X) {
                    if (12 === X.code)
                        throw M();
                    throw X;
                }
                const gb = ((hb, ib, jb, kb) => {
                    const {
                            activeInputs: lb,
                            passiveInputs: mb
                        } = (0, r.getAudioParamConnections)(ib), {outputs: nb} = (0, q.getAudioNodeConnections)(hb), ob = (0, s.getEventListenersOfAudioNode)(hb), pb = qb => {
                            const rb = (0, t.getNativeAudioNode)(hb), sb = (0, u.getNativeAudioParam)(ib);
                            if (qb) {
                                const tb = (0, o.deletePassiveInputConnectionToAudioParam)(mb, hb, jb);
                                (0, h.addActiveInputConnectionToAudioParam)(lb, hb, tb, !1), kb || (0, x.isPartOfACycle)(hb) || rb.connect(sb, jb);
                            } else {
                                const ub = (0, l.deleteActiveInputConnectionToAudioParam)(lb, hb, jb);
                                (0, i.addPassiveInputConnectionToAudioParam)(mb, ub, !1), kb || (0, x.isPartOfACycle)(hb) || rb.disconnect(sb, jb);
                            }
                        };
                    return !!(0, v.insertElementInSet)(nb, [
                        ib,
                        jb
                    ], qb => qb[0] === ib && qb[1] === jb, !0) && (ob.add(pb), (0, w.isActiveAudioNode)(hb) ? (0, h.addActiveInputConnectionToAudioParam)(lb, hb, [
                        jb,
                        pb
                    ], !0) : (0, i.addPassiveInputConnectionToAudioParam)(mb, [
                        hb,
                        jb,
                        pb
                    ], !0), !0);
                })(this, X, Y, ab);
                if (gb) {
                    const hb = P([this], X);
                    (0, C.visitEachAudioNodeOnce)(hb, db(ab));
                }
            }
            disconnect(X, Y, Z) {
                let $;
                const ab = R(this._context), bb = V(ab);
                if (void 0 === X)
                    $ = ((cb, db) => {
                        const eb = (0, q.getAudioNodeConnections)(cb), fb = [];
                        for (const gb of eb.outputs)
                            (0, g.isAudioNodeOutputConnection)(gb) ? E(cb, db, ...gb) : F(cb, db, ...gb), fb.push(gb[0]);
                        return eb.outputs.clear(), fb;
                    })(this, bb);
                else if ('number' == typeof X) {
                    if (X < 0 || X >= this.numberOfOutputs)
                        throw L();
                    $ = ((cb, db, eb) => {
                        const fb = (0, q.getAudioNodeConnections)(cb), gb = [];
                        for (const hb of fb.outputs)
                            hb[1] === eb && ((0, g.isAudioNodeOutputConnection)(hb) ? E(cb, db, ...hb) : F(cb, db, ...hb), gb.push(hb[0]), fb.outputs.delete(hb));
                        return gb;
                    })(this, bb, X);
                } else {
                    if (void 0 !== Y && (Y < 0 || Y >= this.numberOfOutputs))
                        throw L();
                    if ((0, f.isAudioNode)(X) && void 0 !== Z && (Z < 0 || Z >= X.numberOfInputs))
                        throw L();
                    if ($ = ((cb, db, eb, fb, gb) => {
                            const hb = (0, q.getAudioNodeConnections)(cb);
                            return Array.from(hb.outputs).filter(ib => !(ib[0] !== eb || void 0 !== fb && ib[1] !== fb || void 0 !== gb && ib[2] !== gb)).map(ib => ((0, g.isAudioNodeOutputConnection)(ib) ? E(cb, db, ...ib) : F(cb, db, ...ib), hb.outputs.delete(ib), ib[0]));
                        })(this, bb, X, Y, Z), 0 === $.length)
                        throw M();
                }
                for (const cb of $) {
                    const db = P([this], cb);
                    (0, C.visitEachAudioNodeOnce)(db, O);
                }
            }
            constructor(X, Y, Z, $) {
                super(Z), this._context = X, this._nativeAudioNode = Z;
                const ab = R(X);
                S(ab) && !0 !== J(B.testAudioNodeDisconnectMethodSupport, () => (0, B.testAudioNodeDisconnectMethodSupport)(ab, W)) && (0, D.wrapAudioNodeDisconnectMethod)(Z), e.AUDIO_NODE_STORE.set(this, Z), e.EVENT_LISTENERS.set(this, new Set()), 'closed' !== X.state && Y && (0, z.setInternalStateToActive)(this), H(this, $, Z);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'isAudioNode', function () {
        return _e;
    });
    const _e = f => 'context' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'isAudioNodeOutputConnection', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => (0, e.isAudioNode)(g[0]);
}), b.register('.....', function (c, d) {
    a(c.exports, 'addActiveInputConnectionToAudioParam', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, [i, j], k) => {
        (0, e.insertElementInSet)(g, [
            h,
            i,
            j
        ], l => l[0] === h && l[1] === i, k);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'insertElementInSet', function () {
        return _e;
    });
    const _e = (f, g, h, i) => {
        for (const j of f)
            if (h(j)) {
                if (i)
                    return !1;
                throw Error('The set contains at least one similar element.');
            }
        return f.add(j), !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'addPassiveInputConnectionToAudioParam', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, [h, i, j], k) => {
        const l = g.get(h);
        void 0 === l ? g.set(h, new Set([[
                i,
                j
            ]])) : (0, e.insertElementInSet)(l, [
            i,
            j
        ], m => m[0] === i, k);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'connectNativeAudioNodeToNativeAudioNode', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j) => {
        if ((0, e.isNativeAudioNodeFaker)(h)) {
            const k = h.inputs[j];
            return g.connect(k, i, 0), [
                k,
                i,
                0
            ];
        }
        return g.connect(h, i, j), [
            h,
            i,
            j
        ];
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'isNativeAudioNodeFaker', function () {
        return _e;
    });
    const _e = f => 'inputs' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'deleteActiveInputConnection', function () {
        return _e;
    });
    const _e = (f, g, h) => {
        for (const i of f)
            if (i[0] === g && i[1] === h)
                return f.delete(i), i;
        return null;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'deleteActiveInputConnectionToAudioParam', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i) => (0, e.pickElementFromSet)(g, j => j[0] === h && j[1] === i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'deleteEventListenerOfAudioNode', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h) => {
        if (!(0, e.getEventListenersOfAudioNode)(g).delete(h))
            throw new Error('Missing the expected event listener.');
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'deletePassiveInputConnectionToAudioParam', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j) => {
        const k = (0, e.getValueForKey)(h, i), l = (0, f.pickElementFromSet)(k, m => m[0] === j);
        return 0 === k.size && h.delete(i), l;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'disconnectNativeAudioNodeFromNativeAudioNode', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j) => {
        (0, e.isNativeAudioNodeFaker)(h) ? g.disconnect(h.inputs[j], i, 0) : g.disconnect(h, i, j);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'getNativeAudioNode', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => (0, f.getValueForKey)(e.AUDIO_NODE_STORE, h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'getNativeAudioParam', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => (0, f.getValueForKey)(e.AUDIO_PARAM_STORE, h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'isPartOfACycle', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => e.CYCLE_COUNTERS.has(g);
}), b.register('.....', function (c, d) {
    a(c.exports, 'isPassiveAudioNode', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => !e.ACTIVE_AUDIO_NODE_STORE.has(g);
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioNodeDisconnectMethodSupport', function () {
        return _e;
    });
    const _e = (f, g) => new Promise(h => {
        if (null !== g)
            h(!0);
        else {
            const i = f.createScriptProcessor(256, 1, 1), j = f.createGain(), k = f.createBuffer(1, 2, 44100), l = k.getChannelData(0);
            l[0] = 1, l[1] = 1;
            const m = f.createBufferSource();
            m.buffer = k, m.loop = !0, m.connect(i).connect(f.destination), m.connect(j), m.disconnect(j), i.onaudioprocess = n => {
                const o = n.inputBuffer.getChannelData(0);
                Array.prototype.some.call(o, p => 1 === p) ? h(!0) : h(!1), m.stop(), i.onaudioprocess = null, m.disconnect(i), i.disconnect(f.destination);
            }, m.start();
        }
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'visitEachAudioNodeOnce', function () {
        return _e;
    });
    const _e = (f, g) => {
        const h = new Map();
        for (const i of f)
            for (const j of i) {
                const k = h.get(j);
                h.set(j, void 0 === k ? 1 : k + 1);
            }
        h.forEach((l, m) => k(m, l));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAudioNodeDisconnectMethod', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = new Map();
        var i, j;
        g.connect = (i = g.connect.bind(g), (k, l = 0, m = 0) => {
            const n = (0, e.isNativeAudioNode)(k) ? i(k, l, m) : i(k, l), o = h.get(k);
            return void 0 === o ? h.set(k, [{
                    input: m,
                    output: l
                }]) : o.every(p => p.input !== m || p.output !== l) && o.push({
                input: m,
                output: l
            }), n;
        }), g.disconnect = (j = g.disconnect, (k, l, m) => {
            if (j.apply(g), void 0 === k)
                h.clear();
            else if ('number' == typeof k)
                for (const [n, o] of h) {
                    const p = o.filter(q => q.output !== k);
                    0 === p.length ? h.delete(n) : h.set(n, p);
                }
            else if (h.has(k))
                if (void 0 === l)
                    h.delete(k);
                else {
                    const q = h.get(k);
                    if (void 0 !== n) {
                        const r = n.filter(s => s.output !== l && (s.input !== m || void 0 === m));
                        0 === o.length ? h.delete(k) : h.set(k, o);
                    }
                }
            for (const [q, r] of h)
                r.forEach(s => {
                    (0, p.isNativeAudioNode)(q) ? q.connect(q, s.output, s.input) : q.connect(q, s.output);
                });
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'isNativeAudioNode', function () {
        return _e;
    });
    const _e = f => 'context' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioParamFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k, l, m, n, o, p, q, r, s) => (t, u, v, w = null, x = null) => {
        const y = new (0, e.AutomationEventList)(v.defaultValue), z = u ? j(y) : null, A = {
                get defaultValue() {
                    return v.defaultValue;
                },
                get maxValue() {
                    return null === w ? v.maxValue : w;
                },
                get minValue() {
                    return null === x ? v.minValue : x;
                },
                get value() {
                    return v.value;
                },
                set value(B) {
                    v.value = B, A.setValueAtTime(B, t.context.currentTime);
                },
                cancelAndHoldAtTime(B) {
                    if ('function' == typeof v.cancelAndHoldAtTime)
                        null === z && y.flush(t.context.currentTime), y.add(k(B)), v.cancelAndHoldAtTime(B);
                    else {
                        const C = Array.from(y).pop();
                        null === z && y.flush(t.context.currentTime), y.add(k(B));
                        const D = Array.from(y).pop();
                        v.cancelScheduledValues(B), C !== D && void 0 !== D && ('exponentialRampToValue' === D.type ? v.exponentialRampToValueAtTime(D.value, D.endTime) : 'linearRampToValue' === D.type ? v.linearRampToValueAtTime(D.value, D.endTime) : 'setValue' === D.type ? v.setValueAtTime(D.value, D.startTime) : 'setValueCurve' === D.type && v.setValueCurveAtTime(D.values, D.startTime, D.duration));
                    }
                    return A;
                },
                cancelScheduledValues: B => (null === z && y.flush(t.context.currentTime), y.add(l(B)), v.cancelScheduledValues(B), A),
                exponentialRampToValueAtTime(B, C) {
                    if (0 === B)
                        throw new RangeError();
                    if (!Number.isFinite(C) || C < 0)
                        throw new RangeError();
                    return null === z && y.flush(t.context.currentTime), y.add(m(B, C)), v.exponentialRampToValueAtTime(B, C), A;
                },
                linearRampToValueAtTime: (B, C) => (null === z && y.flush(t.context.currentTime), y.add(n(B, C)), v.linearRampToValueAtTime(B, C), A),
                setTargetAtTime: (B, C, D) => (null === z && y.flush(t.context.currentTime), y.add(o(B, C, D)), v.setTargetAtTime(B, C, D), A),
                setValueAtTime: (B, C) => (null === z && y.flush(t.context.currentTime), y.add(p(B, C)), v.setValueAtTime(B, C), A),
                setValueCurveAtTime(B, C, D) {
                    const E = B instanceof Float32Array ? B : new Float32Array(B);
                    if (null !== r && 'webkitAudioContext' === r.name) {
                        const F = C + D, G = t.context.sampleRate, H = Math.ceil(C * G), I = Math.floor(F * G), J = I - H, K = new Float32Array(J);
                        for (let L = 0; L < J; L += 1) {
                            const M = (E.length - 1) / D * ((H + L) / G - C), N = Math.floor(M), O = Math.ceil(M);
                            K[L] = N === O ? E[N] : (1 - (M - N)) * E[N] + (1 - (O - M)) * E[O];
                        }
                        null === z && y.flush(t.context.currentTime), y.add(q(K, C, D)), v.setValueCurveAtTime(K, C, D);
                        const P = M / G;
                        P < L && s(A, K[K.length - 1], P), s(A, E[E.length - 1], L);
                    } else
                        null === z && y.flush(t.context.currentTime), y.add(q(E, C, D)), v.setValueCurveAtTime(E, C, D);
                    return A;
                }
            };
        return i.set(A, v), h.set(A, t), g(A, z), A;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioParamRenderer', function () {
        return _e;
    });
    const _e = f => ({
        replay(g) {
            for (const h of f)
                if ('exponentialRampToValue' === h.type) {
                    const {
                        endTime: i,
                        value: j
                    } = h;
                    g.exponentialRampToValueAtTime(j, i);
                } else if ('linearRampToValue' === h.type) {
                    const {
                        endTime: k,
                        value: l
                    } = h;
                    g.linearRampToValueAtTime(l, k);
                } else if ('setTarget' === h.type) {
                    const {
                        startTime: m,
                        target: n,
                        timeConstant: o
                    } = h;
                    g.setTargetAtTime(n, m, o);
                } else if ('setValue' === h.type) {
                    const {
                        startTime: p,
                        value: q
                    } = h;
                    g.setValueAtTime(q, p);
                } else {
                    if ('setValueCurve' !== h.type)
                        throw new Error('Can\'t apply an unknown automation.');
                    {
                        const {
                            duration: r,
                            startTime: s,
                            values: t
                        } = h;
                        g.setValueCurveAtTime(t, s, r);
                    }
                }
        }
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioWorkletNodeConstructor', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....');
    const g = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 1,
            numberOfOutputs: 1,
            parameterData: {},
            processorOptions: {}
        }, _h = (i, j, k, l, m, n, o, p, q, r, s, t, u, v) => class extends j {
            get onprocessorerror() {
                return this._onprocessorerror;
            }
            set onprocessorerror(w) {
                const x = 'function' == typeof w ? v(this, w) : null;
                this._nativeAudioWorkletNode.onprocessorerror = x;
                const y = this._nativeAudioWorkletNode.onprocessorerror;
                this._onprocessorerror = null !== y && y === x ? w : y;
            }
            get parameters() {
                return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters;
            }
            get port() {
                return this._nativeAudioWorkletNode.port;
            }
            constructor(w, x, y) {
                var z;
                const A = p(w), B = q(A), C = s({
                        ...g,
                        ...y
                    });
                u(C);
                const D = e.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(A), E = null == D ? void 0 : D.get(x), F = B || 'closed' !== A.state ? A : null !== (z = o(A)) && void 0 !== z ? z : A, G = m(F, B ? null : w.baseLatency, r, x, E, C);
                super(w, !0, G, B ? l(x, C, E) : null);
                const H = [];
                G.parameters.forEach((I, J) => {
                    const K = k(this, B, I);
                    H.push([
                        J,
                        K
                    ]);
                }), this._nativeAudioWorkletNode = G, this._onprocessorerror = null, this._parameters = new (0, f.ReadOnlyMap)(H), B && i(A, this);
                const {activeInputs: I} = n(this);
                t(G, I);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'ReadOnlyMap', function () {
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
            return this._map.forEach((h, i) => f.call(g, h, i, this));
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioWorkletNodeRendererFactory', function () {
        return _k;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    const _k = (l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A) => (B, C, D) => {
        const E = new WeakMap();
        let F = null;
        const G = async (H, I) => {
            let J = v(H), K = null;
            const L = (0, j.isOwnedByContext)(J, I), M = Array.isArray(C.outputChannelCount) ? C.outputChannelCount : Array.from(C.outputChannelCount);
            if (null === w) {
                const N = M.reduce((O, P) => O + P, 0), O = p(I, {
                        channelCount: Math.max(1, N),
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        numberOfOutputs: Math.max(1, N)
                    }), P = [];
                for (let Q = 0; Q < H.numberOfOutputs; Q += 1)
                    P.push(o(I, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'speakers',
                        numberOfInputs: M[Q]
                    }));
                const R = r(I, {
                    channelCount: C.channelCount,
                    channelCountMode: C.channelCountMode,
                    channelInterpretation: C.channelInterpretation,
                    gain: 1
                });
                R.connect = m.bind(null, P), R.disconnect = t.bind(null, P), K = [
                    O,
                    P,
                    R
                ];
            } else
                L || (J = new w(I, B));
            if (E.set(I, null === K ? J : K[2]), null !== K) {
                if (null === F) {
                    if (void 0 === D)
                        throw new Error('Missing the processor constructor.');
                    if (null === x)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const R = H.channelCount * H.numberOfInputs, S = void 0 === D.parameterDescriptors ? 0 : D.parameterDescriptors.length, T = R + S, U = async () => {
                            const V = new x(T, 128 * Math.ceil(H.context.length / 128), I.sampleRate), W = [], X = [];
                            for (let Y = 0; Y < C.numberOfInputs; Y += 1)
                                W.push(r(V, {
                                    channelCount: C.channelCount,
                                    channelCountMode: C.channelCountMode,
                                    channelInterpretation: C.channelInterpretation,
                                    gain: 1
                                })), X.push(p(V, {
                                    channelCount: C.channelCount,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'discrete',
                                    numberOfOutputs: C.channelCount
                                }));
                            const Z = await Promise.all(Array.from(H.parameters.values()).map(async $ => {
                                    const ab = q(V, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: $.value
                                    });
                                    return await y(V, $, ab.offset), ab;
                                })), $ = o(V, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: Math.max(1, Y + S)
                                });
                            for (let ab = 0; ab < C.numberOfInputs; ab += 1) {
                                W[ab].connect(X[ab]);
                                for (let bb = 0; bb < C.channelCount; bb += 1)
                                    X[ab].connect($, bb, ab * C.channelCount + bb);
                            }
                            for (const [bb, cb] of Z.entries())
                                cb.connect($, 0, ab + bb), cb.start(0);
                            return $.connect(V.destination), await Promise.all(W.map(db => z(H, V, db))), A(V);
                        };
                    F = (async (V, W, X, Y, Z, $, ab) => {
                        const bb = null === W ? 128 * Math.ceil(V.context.length / 128) : W.length, cb = Y.channelCount * Y.numberOfInputs, db = Z.reduce((eb, fb) => eb + fb, 0), eb = 0 === db ? null : X.createBuffer(db, bb, X.sampleRate);
                        if (void 0 === $)
                            throw new Error('Missing the processor constructor.');
                        const fb = (0, h.getAudioNodeConnections)(V), gb = await (0, i.getAudioWorkletProcessor)(X, V), hb = (0, g.createNestedArrays)(Y.numberOfInputs, Y.channelCount), ib = (0, g.createNestedArrays)(Y.numberOfOutputs, Z), jb = Array.from(V.parameters.keys()).reduce((kb, lb) => ({
                                ...kb,
                                [lb]: new Float32Array(128)
                            }), {});
                        for (let kb = 0; kb < bb; kb += 128) {
                            if (Y.numberOfInputs > 0 && null !== W)
                                for (let lb = 0; lb < Y.numberOfInputs; lb += 1)
                                    for (let mb = 0; mb < Y.channelCount; mb += 1)
                                        (0, P.copyFromChannel)(W, hb[lb], mb, mb, kb);
                            void 0 !== $.parameterDescriptors && null !== W && $.parameterDescriptors.forEach(({name: lb}, mb) => {
                                (0, P.copyFromChannel)(W, jb, lb, cb + mb, kb);
                            });
                            for (let lb = 0; lb < Y.numberOfInputs; lb += 1)
                                for (let mb = 0; mb < Z[lb]; mb += 1)
                                    0 === ib[lb][mb].byteLength && (ib[lb][mb] = new Float32Array(128));
                            try {
                                const nb = hb.map((ob, pb) => 0 === fb.activeInputs[pb].size ? [] : ob), ob = ab(kb / X.sampleRate, X.sampleRate, () => gb.process(lb, ib, jb));
                                if (null !== eb)
                                    for (let pb = 0, qb = 0; pb < Y.numberOfOutputs; pb += 1) {
                                        for (let rb = 0; rb < Z[pb]; rb += 1)
                                            (0, R.copyToChannel)(eb, ib[pb], rb, qb + rb, kb);
                                        qb += Z[pb];
                                    }
                                if (!mb)
                                    break;
                            } catch (mb) {
                                lb.dispatchEvent(new ErrorEvent('processorerror', {
                                    colno: mb.colno,
                                    filename: mb.filename,
                                    lineno: mb.lineno,
                                    message: mb.message
                                }));
                                break;
                            }
                        }
                        return eb;
                    })(H, 0 === T ? null : await U(), I, C, M, D, u);
                }
                const V = await F, W = T(I, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: 'max',
                        channelInterpretation: 'speakers',
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }), [X, Y, Z] = K;
                null !== V && (W.buffer = V, W.start(0)), W.connect(X);
                for (let $ = 0, ab = 0; $ < H.numberOfOutputs; $ += 1) {
                    const bb = Y[$];
                    for (let cb = 0; cb < M[$]; cb += 1)
                        X.connect(bb, ab + cb, cb);
                    ab += M[$];
                }
                return Z;
            }
            if (L)
                for (const [Y, Z] of H.parameters.entries())
                    await V(I, Z, J.parameters.get(Y));
            else
                for (const [$, ab] of H.parameters.entries())
                    await y(I, ab, J.parameters.get($));
            return await z(H, I, J), J;
        };
        return {
            render(H, I) {
                s(I, H);
                const J = E.get(I);
                return void 0 !== J ? Promise.resolve(J) : G(H, I);
            }
        };
    };
}), b.register('.....', function (c, d) {
    function e(f, g, h, i, j) {
        if ('function' == typeof f.copyFromChannel)
            0 === g[h].byteLength && (g[h] = new Float32Array(128)), f.copyFromChannel(g[h], i, j);
        else {
            const k = f.getChannelData(i);
            if (0 === g[h].byteLength)
                g[h] = k.slice(j, j + 128);
            else {
                const l = new Float32Array(k.buffer, j * Float32Array.BYTES_PER_ELEMENT, 128);
                g[h].set(f);
            }
        }
    }
    l(c.exports, 'copyFromChannel', function () {
        return e;
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'copyToChannel', function () {
        return _e;
    });
    const _e = (f, g, h, i, j) => {
        'function' == typeof f.copyToChannel ? 0 !== g[h].byteLength && f.copyToChannel(g[h], i, j) : 0 !== g[h].byteLength && f.getChannelData(i).set(g[h], j);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNestedArrays', function () {
        return _e;
    });
    const _e = (f, g) => {
        const h = [];
        for (let i = 0; i < f; i += 1) {
            const j = [], k = 'number' == typeof g ? g : g[i];
            for (let l = 0; l < k; l += 1)
                j.push(new Float32Array(128));
            h.push(j);
        }
        return h;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'getAudioWorkletProcessor', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const _h = (i, j) => {
        const k = (0, g.getValueForKey)(e.NODE_TO_PROCESSOR_MAPS, i), l = (0, f.getNativeAudioNode)(j);
        return (0, g.getValueForKey)(k, l);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createBaseAudioContextConstructor', function () {
        return _e;
    });
    const _e = (f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) => class extends t {
        get audioWorklet() {
            return this._audioWorklet;
        }
        createAnalyser() {
            return new g(this);
        }
        createBiquadFilter() {
            return new j(this);
        }
        createBuffer(z, A, B) {
            return new h({
                length: A,
                numberOfChannels: z,
                sampleRate: B
            });
        }
        createBufferSource() {
            return new i(this);
        }
        createChannelMerger(z = 6) {
            return new k(this, { numberOfInputs: z });
        }
        createChannelSplitter(z = 6) {
            return new l(this, { numberOfOutputs: z });
        }
        createConstantSource() {
            return new m(this);
        }
        createConvolver() {
            return new n(this);
        }
        createDelay(z = 1) {
            return new p(this, { maxDelayTime: z });
        }
        createDynamicsCompressor() {
            return new q(this);
        }
        createGain() {
            return new r(this);
        }
        createIIRFilter(z, A) {
            return new s(this, {
                feedback: A,
                feedforward: z
            });
        }
        createOscillator() {
            return new u(this);
        }
        createPanner() {
            return new v(this);
        }
        createPeriodicWave(z, A, B = { disableNormalization: !1 }) {
            return new w(this, {
                ...B,
                imag: A,
                real: z
            });
        }
        createStereoPanner() {
            return new x(this);
        }
        createWaveShaper() {
            return new y(this);
        }
        decodeAudioData(z, A, B) {
            return o(this._nativeContext, z).then(C => ('function' == typeof A && A(C), C), C => {
                throw 'function' == typeof B && B(C), C;
            });
        }
        constructor(z, A) {
            super(z, A), this._nativeContext = z, this._audioWorklet = void 0 === f ? void 0 : { addModule: (B, C) => f(this, B, C) };
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createBiquadFilterNodeConstructor', function () {
        return _g;
    });
    var e = b('.....');
    const f = {
            Q: 1,
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 350,
            gain: 0,
            type: 'lowpass'
        }, _g = (h, i, j, k, l, m, n, o) => class extends h {
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
            set type(p) {
                this._nativeBiquadFilterNode.type = p;
            }
            getFrequencyResponse(p, q, r) {
                try {
                    this._nativeBiquadFilterNode.getFrequencyResponse(p, q, r);
                } catch (p) {
                    if (11 === p.code)
                        throw k();
                    throw p;
                }
                if (p.length !== q.length || q.length !== r.length)
                    throw k();
            }
            constructor(p, q) {
                const r = m(p), s = {
                        ...f,
                        ...q
                    }, t = l(r, s), u = n(r);
                super(p, !1, t, u ? j() : null), this._Q = i(this, u, t.Q, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._detune = i(this, u, t.detune, 1200 * Math.log2(e.MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(e.MOST_POSITIVE_SINGLE_FLOAT)), this._frequency = i(this, u, t.frequency, p.sampleRate / 2, 0), this._gain = i(this, u, t.gain, 40 * Math.log10(e.MOST_POSITIVE_SINGLE_FLOAT), e.MOST_NEGATIVE_SINGLE_FLOAT), this._nativeBiquadFilterNode = t, o(this, 1);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createBiquadFilterNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => () => {
        const l = new WeakMap();
        return {
            render(m, n) {
                const o = l.get(n);
                return void 0 !== o ? Promise.resolve(o) : (async (p, q) => {
                    let r = i(p);
                    const s = (0, e.isOwnedByContext)(r, q);
                    if (!s) {
                        const t = {
                            Q: r.Q.value,
                            channelCount: r.channelCount,
                            channelCountMode: r.channelCountMode,
                            channelInterpretation: r.channelInterpretation,
                            detune: r.detune.value,
                            frequency: r.frequency.value,
                            gain: r.gain.value,
                            type: r.type
                        };
                        r = h(q, t);
                    }
                    return l.set(q, r), s ? (await t(q, p.Q, r.Q), await t(q, p.detune, r.detune), await t(q, p.frequency, r.frequency), await t(q, p.gain, r.gain)) : (await j(q, p.Q, r.Q), await j(q, p.detune, r.detune), await j(q, p.frequency, r.frequency), await j(q, p.gain, r.gain)), await k(p, q, r), r;
                })(m, n);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createCacheTestResult', function () {
        return _e;
    });
    const _e = (f, g) => (h, i) => {
        const j = g.get(h);
        if (void 0 !== j)
            return j;
        const k = f.get(h);
        if (void 0 !== k)
            return k;
        try {
            const l = i();
            return l instanceof Promise ? (f.set(h, l), l.catch(() => !1).then(m => (f.delete(h), g.set(h, m), m))) : (g.set(h, l), l);
        } catch {
            return g.set(h, !1), !1;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createChannelMergerNodeConstructor', function () {
        return _f;
    });
    const e = {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            numberOfInputs: 6
        }, _f = (g, h, i, j, k) => class extends g {
            constructor(l, m) {
                const n = j(l), o = {
                        ...e,
                        ...m
                    };
                super(l, !1, i(n, o), k(n) ? h() : null);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createChannelMergerNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i) => () => {
        const j = new WeakMap();
        return {
            render(k, l) {
                const m = j.get(l);
                return void 0 !== m ? Promise.resolve(m) : (async (n, o) => {
                    let p = h(n);
                    if (!(0, e.isOwnedByContext)(p, o)) {
                        const q = {
                            channelCount: p.channelCount,
                            channelCountMode: p.channelCountMode,
                            channelInterpretation: p.channelInterpretation,
                            numberOfInputs: p.numberOfInputs
                        };
                        p = g(o, q);
                    }
                    return j.set(o, p), await i(n, o, p), p;
                })(k, l);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createChannelSplitterNodeConstructor', function () {
        return _f;
    });
    const e = {
            channelCount: 6,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            numberOfOutputs: 6
        }, _f = (g, h, i, j, k, l) => class extends g {
            constructor(m, n) {
                const o = j(m), p = l({
                        ...e,
                        ...n
                    });
                super(m, !1, i(o, p), k(o) ? h() : null);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createChannelSplitterNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i) => () => {
        const j = new WeakMap();
        return {
            render(k, l) {
                const m = j.get(l);
                return void 0 !== m ? Promise.resolve(m) : (async (n, o) => {
                    let p = h(n);
                    if (!(0, e.isOwnedByContext)(p, o)) {
                        const q = {
                            channelCount: p.channelCount,
                            channelCountMode: p.channelCountMode,
                            channelInterpretation: p.channelInterpretation,
                            numberOfOutputs: p.numberOfOutputs
                        };
                        p = g(o, q);
                    }
                    return j.set(o, p), await i(n, o, p), p;
                })(k, l);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConnectAudioParam', function () {
        return _e;
    });
    const _e = f => (g, h, i) => f(h, g, i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConnectMultipleOutputs', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => (h, i, j = 0, k = 0) => {
        const l = h[j];
        if (void 0 === l)
            throw g();
        return (0, e.isNativeAudioNode)(i) ? l.connect(i, 0, k) : l.connect(i, 0);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConnectedNativeAudioBufferSourceNodeFactory', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        const i = f(g, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }), j = g.createBuffer(1, 2, 44100);
        return i.buffer = j, i.loop = !0, i.connect(h), i.start(), () => {
            i.stop(), i.disconnect(h);
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConstantSourceNodeConstructor', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const i = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            offset: 1
        }, _j = (k, l, m, n, o, p, q) => class extends k {
            get offset() {
                return this._offset;
            }
            get onended() {
                return this._onended;
            }
            set onended(r) {
                const s = 'function' == typeof r ? q(this, r) : null;
                this._nativeConstantSourceNode.onended = s;
                const t = this._nativeConstantSourceNode.onended;
                this._onended = null !== t && t === s ? r : t;
            }
            start(r = 0) {
                if (this._nativeConstantSourceNode.start(r), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = r), 'closed' !== this.context.state) {
                    (0, g.setInternalStateToActive)(this);
                    const s = () => {
                        this._nativeConstantSourceNode.removeEventListener('ended', s), (0, f.isActiveAudioNode)(this) && (0, h.setInternalStateToPassive)(this);
                    };
                    this._nativeConstantSourceNode.addEventListener('ended', s);
                }
            }
            stop(r = 0) {
                this._nativeConstantSourceNode.stop(r), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = r);
            }
            constructor(r, s) {
                const t = o(r), u = {
                        ...i,
                        ...s
                    }, v = n(t, u), w = p(t), x = w ? m() : null;
                super(r, !1, v, x), this._constantSourceNodeRenderer = x, this._nativeConstantSourceNode = v, this._offset = l(this, w, v.offset, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._onended = null;
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConstantSourceNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => () => {
        const l = new WeakMap();
        let m = null, n = null;
        return {
            set start(o) {
                m = o;
            },
            set stop(o) {
                n = o;
            },
            render(o, p) {
                const q = l.get(p);
                return void 0 !== q ? Promise.resolve(q) : (async (r, s) => {
                    let t = i(r);
                    const u = (0, e.isOwnedByContext)(t, s);
                    if (!u) {
                        const v = {
                            channelCount: t.channelCount,
                            channelCountMode: t.channelCountMode,
                            channelInterpretation: t.channelInterpretation,
                            offset: t.offset.value
                        };
                        t = h(s, v), null !== m && t.start(m), null !== n && t.stop(n);
                    }
                    return l.set(s, t), u ? await v(s, r.offset, t.offset) : await j(s, r.offset, t.offset), await k(r, s, t), t;
                })(o, p);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConvertNumberToUnsignedLong', function () {
        return _e;
    });
    const _e = f => g => (f[0] = g, f[0]);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConvolverNodeConstructor', function () {
        return _f;
    });
    const e = {
            buffer: null,
            channelCount: 2,
            channelCountMode: 'clamped-max',
            channelInterpretation: 'speakers',
            disableNormalization: !1
        }, _f = (g, h, i, j, k, l) => class extends g {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeConvolverNode.buffer;
            }
            set buffer(m) {
                if (this._nativeConvolverNode.buffer = m, null === m && null !== this._nativeConvolverNode.buffer) {
                    const n = this._nativeConvolverNode.context;
                    this._nativeConvolverNode.buffer = n.createBuffer(1, 1, n.sampleRate), this._isBufferNullified = !0, l(this, 0);
                } else
                    this._isBufferNullified = !1, l(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration);
            }
            get normalize() {
                return this._nativeConvolverNode.normalize;
            }
            set normalize(m) {
                this._nativeConvolverNode.normalize = m;
            }
            constructor(m, n) {
                const o = j(m), p = {
                        ...e,
                        ...n
                    }, q = i(o, p);
                super(m, !1, q, k(o) ? h() : null), this._isBufferNullified = !1, this._nativeConvolverNode = q, null !== p.buffer && l(this, p.buffer.duration);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createConvolverNodeRendererFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j) => () => {
        const k = new WeakMap();
        return {
            render(l, m) {
                const n = k.get(m);
                return void 0 !== n ? Promise.resolve(n) : (async (o, p) => {
                    let q = i(o);
                    if (!(0, f.isOwnedByContext)(q, p)) {
                        const r = {
                            buffer: q.buffer,
                            channelCount: q.channelCount,
                            channelCountMode: q.channelCountMode,
                            channelInterpretation: q.channelInterpretation,
                            disableNormalization: !q.normalize
                        };
                        q = h(p, r);
                    }
                    return k.set(p, q), (0, e.isNativeAudioNodeFaker)(q) ? await j(o, p, q.inputs[0]) : await j(o, p, q), q;
                })(l, m);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createCreateNativeOfflineAudioContext', function () {
        return _e;
    });
    const _e = (f, g) => (h, i, j) => {
        if (null === g)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        try {
            return new g(h, i, j);
        } catch (g) {
            if ('SyntaxError' === g.name)
                throw f();
            throw g;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDataCloneError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'DataCloneError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDecodeAudioData', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l, m, n, o, p, q, r) => (s, t) => {
        const u = n(s) ? s : m(s);
        if (l.has(t)) {
            const v = j();
            return Promise.reject(v);
        }
        try {
            l.add(t);
        } catch {
        }
        return i(p, () => p(u)) ? u.decodeAudioData(t).then(w => ((0, e.detachArrayBuffer)(t).catch(() => {
        }), i(o, () => o(w)) || r(w), v.add(w), w)) : new Promise((w, x) => {
            const y = async () => {
                    try {
                        await (0, e.detachArrayBuffer)(t);
                    } catch {
                    }
                }, z = A => {
                    x(A), y();
                };
            try {
                u.decodeAudioData(t, A => {
                    'function' != typeof A.copyFromChannel && (q(A), (0, f.wrapAudioBufferGetChannelDataMethod)(A)), v.add(A), y().then(() => w(A));
                }, A => {
                    z(null === A ? k() : A);
                });
            } catch (v) {
                z(v);
            }
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'detachArrayBuffer', function () {
        return _e;
    });
    const _e = f => {
        const {
            port1: g,
            port2: h
        } = new MessageChannel();
        return new Promise(i => {
            const j = () => {
                h.onmessage = null, g.close(), h.close(), i();
            };
            h.onmessage = () => j();
            try {
                g.postMessage(f, [f]);
            } finally {
                j();
            }
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDecrementCycleCounter', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k, l, m, n) => (o, p) => {
        const q = h.get(o);
        if (void 0 === q)
            throw new Error('Missing the expected cycle count.');
        const r = l(o.context), s = n(r);
        if (q === p) {
            if (h.delete(o), !s && m(o)) {
                const t = j(o), {outputs: u} = i(o);
                for (const v of u)
                    if ((0, e.isAudioNodeOutputConnection)(v)) {
                        const w = j(v[0]);
                        g(t, w, v[1], v[2]);
                    } else {
                        const x = k(v[0]);
                        t.connect(x, v[1]);
                    }
            }
        } else
            t.set(o, q - p);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDelayNodeConstructor', function () {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            delayTime: 0,
            maxDelayTime: 1
        }, _f = (g, h, i, j, k, l, m) => class extends g {
            get delayTime() {
                return this._delayTime;
            }
            constructor(n, o) {
                const p = k(n), q = {
                        ...e,
                        ...o
                    }, r = j(p, q), s = l(p);
                super(n, !1, r, s ? i(q.maxDelayTime) : null), this._delayTime = h(this, s, r.delayTime), m(this, q.maxDelayTime);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDelayNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => l => {
        const m = new WeakMap();
        return {
            render(n, o) {
                const p = m.get(o);
                return void 0 !== p ? Promise.resolve(p) : (async (q, r) => {
                    let s = i(q);
                    const t = (0, e.isOwnedByContext)(s, r);
                    if (!t) {
                        const u = {
                            channelCount: s.channelCount,
                            channelCountMode: s.channelCountMode,
                            channelInterpretation: s.channelInterpretation,
                            delayTime: s.delayTime.value,
                            maxDelayTime: l
                        };
                        s = h(r, u);
                    }
                    return m.set(r, s), t ? await u(r, q.delayTime, s.delayTime) : await j(r, q.delayTime, s.delayTime), await k(q, r, s), s;
                })(n, o);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDeleteActiveInputConnectionToAudioNode', function () {
        return _e;
    });
    const _e = f => (g, h, i, j) => f(g[j], k => k[0] === h && k[1] === i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDeleteUnrenderedAudioWorkletNode', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        f(g).delete(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDetectCycles', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j) => function d(k, l) {
        const m = (0, e.isAudioNode)(l) ? l : j(h, l);
        if ((0, f.isDelayNode)(m))
            return [];
        if (k[0] === m)
            return [k];
        if (k.includes(m))
            return [];
        const {outputs: n} = i(m);
        return Array.from(n).map(o => d([
            ...k,
            m
        ], o[0])).reduce((o, p) => o.concat(p), []);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'isDelayNode', function () {
        return _e;
    });
    const _e = f => 'delayTime' in f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDisconnectMultipleOutputs', function () {
        return _g;
    });
    var e = b('.....');
    const f = (g, h, i) => {
            const j = h[i];
            if (void 0 === j)
                throw g();
            return j;
        }, _g = h => (i, j, k, l = 0) => void 0 === j ? i.forEach(m => m.disconnect()) : 'number' == typeof j ? f(h, i, j).disconnect() : (0, e.isNativeAudioNode)(j) ? void 0 === k ? i.forEach(m => m.disconnect(j)) : void 0 === l ? f(h, i, k).disconnect(j, 0) : f(h, i, k).disconnect(j, 0, l) : void 0 === k ? i.forEach(m => m.disconnect(j)) : f(h, i, k).disconnect(j, 0);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDynamicsCompressorNodeConstructor', function () {
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
        }, _f = (g, h, i, j, k, l, m, n) => class extends g {
            get attack() {
                return this._attack;
            }
            get channelCount() {
                return this._nativeDynamicsCompressorNode.channelCount;
            }
            set channelCount(o) {
                const p = this._nativeDynamicsCompressorNode.channelCount;
                if (this._nativeDynamicsCompressorNode.channelCount = o, o > 2)
                    throw this._nativeDynamicsCompressorNode.channelCount = p, k();
            }
            get channelCountMode() {
                return this._nativeDynamicsCompressorNode.channelCountMode;
            }
            set channelCountMode(o) {
                const p = this._nativeDynamicsCompressorNode.channelCountMode;
                if (this._nativeDynamicsCompressorNode.channelCountMode = o, 'max' === o)
                    throw this._nativeDynamicsCompressorNode.channelCountMode = p, k();
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
            constructor(o, p) {
                const q = l(o), r = {
                        ...e,
                        ...p
                    }, s = j(q, r), t = m(q);
                super(o, !1, s, t ? i() : null), this._attack = h(this, t, s.attack), this._knee = h(this, t, s.knee), this._nativeDynamicsCompressorNode = s, this._ratio = h(this, t, s.ratio), this._release = h(this, t, s.release), this._threshold = h(this, t, s.threshold), n(this, 0.006);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createDynamicsCompressorNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => () => {
        const l = new WeakMap();
        return {
            render(m, n) {
                const o = l.get(n);
                return void 0 !== o ? Promise.resolve(o) : (async (p, q) => {
                    let r = i(p);
                    const s = (0, e.isOwnedByContext)(r, q);
                    if (!s) {
                        const t = {
                            attack: r.attack.value,
                            channelCount: r.channelCount,
                            channelCountMode: r.channelCountMode,
                            channelInterpretation: r.channelInterpretation,
                            knee: r.knee.value,
                            ratio: r.ratio.value,
                            release: r.release.value,
                            threshold: r.threshold.value
                        };
                        r = h(q, t);
                    }
                    return l.set(q, r), s ? (await t(q, p.attack, r.attack), await t(q, p.knee, r.knee), await t(q, p.ratio, r.ratio), await t(q, p.release, r.release), await t(q, p.threshold, r.threshold)) : (await j(q, p.attack, r.attack), await j(q, p.knee, r.knee), await j(q, p.ratio, r.ratio), await j(q, p.release, r.release), await j(q, p.threshold, r.threshold)), await k(p, q, r), r;
                })(m, n);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createEncodingError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'EncodingError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createEvaluateSource', function () {
        return _e;
    });
    const _e = f => g => new Promise((h, i) => {
        if (null === f)
            return void i(new SyntaxError());
        const j = f.document.head;
        if (null === j)
            i(new SyntaxError());
        else {
            const k = f.document.createElement('script'), l = new Blob([g], { type: 'application/javascript' }), m = URL.createObjectURL(l), n = f.onerror, o = () => {
                    f.onerror = n, URL.revokeObjectURL(m);
                };
            f.onerror = (p, q, r, s, t) => q === m || q === f.location.href && 1 === r && 1 === s ? (o(), i(t), !1) : null !== n ? n(p, q, r, s, t) : void 0, k.onerror = () => {
                o(), i(new SyntaxError());
            }, k.onload = () => {
                o(), h();
            }, k.src = m, k.type = 'module', j.appendChild(k);
        }
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createEventTargetConstructor', function () {
        return _e;
    });
    const _e = f => class {
        addEventListener(g, h, i) {
            if (null !== h) {
                let j = this._listeners.get(h);
                void 0 === j && (j = f(this, h), 'function' == typeof h && this._listeners.set(h, j)), this._nativeEventTarget.addEventListener(g, j, i);
            }
        }
        dispatchEvent(g) {
            return this._nativeEventTarget.dispatchEvent(g);
        }
        removeEventListener(g, h, i) {
            const j = null === h ? void 0 : this._listeners.get(h);
            this._nativeEventTarget.removeEventListener(g, void 0 === j ? null : j, i);
        }
        constructor(g) {
            this._nativeEventTarget = g, this._listeners = new WeakMap();
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createExposeCurrentFrameAndCurrentTime', function () {
        return _e;
    });
    const _e = f => (g, h, i) => {
        Object.defineProperties(f, {
            currentFrame: {
                configurable: !0,
                get: () => Math.round(g * h)
            },
            currentTime: {
                configurable: !0,
                get: () => g
            }
        });
        try {
            return i();
        } finally {
            null !== f && (delete f.currentFrame, delete f.currentTime);
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createFetchSource', function () {
        return _e;
    });
    const _e = f => async g => {
        try {
            const h = await fetch(g);
            if (h.ok)
                return [
                    await h.text(),
                    h.url
                ];
        } catch {
        }
        throw h();
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGainNodeConstructor', function () {
        return _g;
    });
    var e = b('.....');
    const f = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            gain: 1
        }, _g = (h, i, j, k, l, m) => class extends h {
            get gain() {
                return this._gain;
            }
            constructor(n, o) {
                const p = l(n), q = {
                        ...f,
                        ...o
                    }, r = k(p, q), s = m(p);
                super(n, !1, r, s ? j() : null), this._gain = i(this, s, r.gain, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGainNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => () => {
        const l = new WeakMap();
        return {
            render(m, n) {
                const o = l.get(n);
                return void 0 !== o ? Promise.resolve(o) : (async (p, q) => {
                    let r = i(p);
                    const s = (0, e.isOwnedByContext)(r, q);
                    if (!s) {
                        const t = {
                            channelCount: r.channelCount,
                            channelCountMode: r.channelCountMode,
                            channelInterpretation: r.channelInterpretation,
                            gain: r.gain.value
                        };
                        r = h(q, t);
                    }
                    return l.set(q, r), s ? await t(q, p.gain, r.gain) : await j(q, p.gain, r.gain), await k(p, q, r), r;
                })(m, n);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetActiveAudioWorkletNodeInputs', function () {
        return _e;
    });
    const _e = (f, g) => h => g(f, h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetAudioNodeRenderer', function () {
        return _e;
    });
    const _e = f => g => {
        const h = f(g);
        if (null === h.renderer)
            throw new Error('Missing the renderer of the given AudioNode in the audio graph.');
        return h.renderer;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetAudioNodeTailTime', function () {
        return _e;
    });
    const _e = f => g => {
        var h;
        return null !== (h = f.get(g)) && void 0 !== h ? h : 0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetAudioParamRenderer', function () {
        return _e;
    });
    const _e = f => g => {
        const h = f(g);
        if (null === h.renderer)
            throw new Error('Missing the renderer of the given AudioParam in the audio graph.');
        return h.renderer;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetBackupOfflineAudioContext', function () {
        return _e;
    });
    const _e = f => g => f.get(g);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetNativeContext', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => h => {
        const i = g.get(h);
        if (void 0 === i)
            throw (0, e.createInvalidStateError)();
        return i;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createInvalidStateError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'InvalidStateError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetOrCreateBackupOfflineAudioContext', function () {
        return _e;
    });
    const _e = (f, g) => h => {
        let i = f.get(h);
        if (void 0 !== i)
            return i;
        if (null === g)
            throw new Error('Missing the native OfflineAudioContext constructor.');
        return i = new g(1, 1, 44100), f.set(h, i), i;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createGetUnrenderedAudioWorkletNodes', function () {
        return _e;
    });
    const _e = f => g => {
        const h = f.get(g);
        if (void 0 === h)
            throw new Error('The context has no set of AudioWorkletNodes.');
        return h;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIIRFilterNodeConstructor', function () {
        return _g;
    });
    var e = b('.....');
    const f = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers'
        }, _g = (h, i, j, k, l, m) => class extends h {
            getFrequencyResponse(n, o, p) {
                return this._nativeIIRFilterNode.getFrequencyResponse(n, o, p);
            }
            constructor(n, o) {
                const p = k(n), q = l(p), r = {
                        ...f,
                        ...o
                    }, s = i(p, q ? null : n.baseLatency, r);
                super(n, !1, s, q ? j(r.feedback, r.feedforward) : null), (0, e.wrapIIRFilterNodeGetFrequencyResponseMethod)(s), this._nativeIIRFilterNode = s, m(this, 1);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapIIRFilterNodeGetFrequencyResponseMethod', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        var h;
        g.getFrequencyResponse = (h = g.getFrequencyResponse, (i, j, k) => {
            if (i.length !== j.length || j.length !== k.length)
                throw (0, e.createInvalidAccessError)();
            return h.call(g, i, j, k);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createInvalidAccessError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'InvalidAccessError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIIRFilterNodeRendererFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l) => (m, n) => {
        const o = new WeakMap();
        let p = null;
        const q = async (r, s) => {
            let t = null, u = i(r);
            const v = (0, f.isOwnedByContext)(u, s);
            if (void 0 === s.createIIRFilter ? t = h(s, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: 'max',
                    channelInterpretation: 'speakers',
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                }) : v || (u = s.createIIRFilter(n, m)), o.set(s, null === t ? u : t), null !== t) {
                if (null === p) {
                    if (null === j)
                        throw new Error('Missing the native OfflineAudioContext constructor.');
                    const w = new j(r.context.destination.channelCount, r.context.length, s.sampleRate);
                    p = (async () => {
                        await k(r, w, w.destination);
                        return ((x, y, z, A) => {
                            const B = z instanceof Float64Array ? z : new Float64Array(z), C = A instanceof Float64Array ? A : new Float64Array(A), D = B.length, E = C.length, F = Math.min(D, E);
                            if (1 !== B[0]) {
                                for (let G = 0; G < D; G += 1)
                                    C[G] /= B[0];
                                for (let H = 1; H < E; H += 1)
                                    B[H] /= B[0];
                            }
                            const G = new Float32Array(32), H = new Float32Array(32), I = y.createBuffer(x.numberOfChannels, x.length, x.sampleRate), J = x.numberOfChannels;
                            for (let K = 0; K < J; K += 1) {
                                const L = x.getChannelData(K), M = I.getChannelData(K);
                                G.fill(0), H.fill(0), (0, e.filterBuffer)(B, D, C, E, F, G, H, 0, 32, L, M);
                            }
                            return I;
                        })(await l(w), s, m, n);
                    })();
                }
                const x = await p;
                return t.buffer = x, t.start(0), t;
            }
            return await k(r, s, u), u;
        };
        return {
            render(r, s) {
                const t = o.get(s);
                return void 0 !== t ? Promise.resolve(t) : q(r, s);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'filterBuffer', function () {
        return _e;
    });
    const _e = (f, g, h, i, j, k, l, m, n, o, p) => {
        const q = o.length;
        let r = m;
        for (let s = 0; s < q; s += 1) {
            let t = h[0] * o[s];
            for (let u = 1; u < j; u += 1) {
                const v = r - u & n - 1;
                t += h[u] * k[v], t -= f[u] * l[v];
            }
            for (let w = j; w < v; w += 1)
                t += h[w] * k[r - w & n - 1];
            for (let x = j; x < u; x += 1)
                t -= w[x] * l[r - x & n - 1];
            k[r] = o[s], l[r] = t, r = r + 1 & n - 1, p[s] = t;
        }
        return r;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIncrementCycleCounterFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k, l) => m => (n, o) => {
        const p = g.get(n);
        if (void 0 === p) {
            if (!m && l(n)) {
                const q = j(n), {outputs: r} = i(n);
                for (const s of r)
                    if ((0, e.isAudioNodeOutputConnection)(s)) {
                        const t = j(s[0]);
                        h(q, t, s[1], s[2]);
                    } else {
                        const u = k(s[0]);
                        q.disconnect(u, s[1]);
                    }
            }
            q.set(n, o);
        } else
            q.set(n, p + o);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsAnyAudioContext', function () {
        return _e;
    });
    const _e = (f, g) => h => {
        const i = f.get(h);
        return g(i) || g(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsAnyAudioNode', function () {
        return _e;
    });
    const _e = (f, g) => h => f.has(h) || g(h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsAnyAudioParam', function () {
        return _e;
    });
    const _e = (f, g) => h => f.has(h) || g(h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsAnyOfflineAudioContext', function () {
        return _e;
    });
    const _e = (f, g) => h => {
        const i = f.get(h);
        return g(i) || g(h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsNativeAudioContext', function () {
        return _e;
    });
    const _e = f => g => null !== f && g instanceof f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsNativeAudioNode', function () {
        return _e;
    });
    const _e = f => g => null !== f && 'function' == typeof f.AudioNode && g instanceof f.AudioNode;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsNativeAudioParam', function () {
        return _e;
    });
    const _e = f => g => null !== f && 'function' == typeof f.AudioParam && g instanceof f.AudioParam;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsNativeContext', function () {
        return _e;
    });
    const _e = (f, g) => h => f(h) || g(h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsNativeOfflineAudioContext', function () {
        return _e;
    });
    const _e = f => g => null !== f && g instanceof f;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsSecureContext', function () {
        return _e;
    });
    const _e = f => null !== f && f.isSecureContext;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createIsSupportedPromise', function () {
        return _e;
    });
    const _e = async (f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) => {
        if (f(g, g) && f(h, h) && f(j, j) && f(k, k) && f(m, m) && f(n, n) && f(o, o) && f(p, p) && f(q, q) && f(r, r) && f(s, s)) {
            return (await Promise.all([
                f(i, i),
                f(l, l),
                f(t, t),
                f(u, u)
            ])).every(v => v);
        }
        return !1;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMediaElementAudioSourceNodeConstructor', function () {
        return _e;
    });
    const _e = (f, g, h, i) => class extends f {
        get mediaElement() {
            return this._nativeMediaElementAudioSourceNode.mediaElement;
        }
        constructor(j, k) {
            const l = h(j), m = g(l, k);
            if (i(l))
                throw TypeError();
            super(j, !0, m, null), this._nativeMediaElementAudioSourceNode = m;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMediaStreamAudioDestinationNodeConstructor', function () {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers'
        }, _f = (g, h, i, j) => class extends g {
            get stream() {
                return this._nativeMediaStreamAudioDestinationNode.stream;
            }
            constructor(k, l) {
                const m = i(k);
                if (j(m))
                    throw new TypeError();
                const n = {
                        ...e,
                        ...l
                    }, o = h(m, n);
                super(k, !1, o, null), this._nativeMediaStreamAudioDestinationNode = o;
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMediaStreamAudioSourceNodeConstructor', function () {
        return _e;
    });
    const _e = (f, g, h, i) => class extends f {
        get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream;
        }
        constructor(j, k) {
            const l = h(j), m = g(l, k);
            if (i(l))
                throw new TypeError();
            super(j, !0, m, null), this._nativeMediaStreamAudioSourceNode = m;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMediaStreamTrackAudioSourceNodeConstructor', function () {
        return _e;
    });
    const _e = (f, g, h) => class extends f {
        constructor(i, j) {
            const k = h(i);
            super(i, !0, g(k, j), null);
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMinimalAudioContextConstructor', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l) => class extends k {
        get baseLatency() {
            return this._baseLatency;
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state;
        }
        close() {
            return 'closed' === this.state ? this._nativeAudioContext.close().then(() => {
                throw h();
            }) : ('suspended' === this._state && (this._state = null), this._nativeAudioContext.close().then(() => {
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, e.deactivateAudioGraph)(this);
            }));
        }
        resume() {
            return 'suspended' === this._state ? new Promise((m, n) => {
                const o = () => {
                    this._nativeAudioContext.removeEventListener('statechange', o), 'running' === this._nativeAudioContext.state ? m() : this.resume().then(m, n);
                };
                this._nativeAudioContext.addEventListener('statechange', o);
            }) : this._nativeAudioContext.resume().catch(m => {
                if (void 0 === m || 15 === m.code)
                    throw h();
                throw m;
            });
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(m => {
                if (void 0 === m)
                    throw h();
                throw m;
            });
        }
        constructor(m = {}) {
            if (null === l)
                throw new Error('Missing the native AudioContext constructor.');
            let n;
            try {
                n = new l(m);
            } catch (m) {
                if (12 === m.code && 'sampleRate is not in range' === m.message)
                    throw i();
                throw m;
            }
            if (null === n)
                throw j();
            if (!(0, f.isValidLatencyHint)(m.latencyHint))
                throw new TypeError(`The provided value '${ m.latencyHint }' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== m.sampleRate && n.sampleRate !== m.sampleRate)
                throw i();
            super(n, 2);
            const {latencyHint: o} = m, {sampleRate: p} = n;
            if (this._baseLatency = 'number' == typeof n.baseLatency ? n.baseLatency : 'balanced' === o ? 512 / p : 'interactive' === o || void 0 === o ? 256 / p : 'playback' === o ? 1024 / p : 128 * Math.max(2, Math.min(128, Math.round(o * p / 128))) / p, this._nativeAudioContext = n, 'webkitAudioContext' === l.name ? (this._nativeGainNode = n.createGain(), this._nativeOscillatorNode = n.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(n.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, 'running' === n.state) {
                this._state = 'suspended';
                const q = () => {
                    'suspended' === this._state && (this._state = null), n.removeEventListener('statechange', q);
                };
                n.addEventListener('statechange', q);
            }
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMinimalBaseAudioContextConstructor', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k, l) => class extends i {
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
        set onstatechange(m) {
            const n = 'function' == typeof m ? l(this, m) : null;
            this._nativeContext.onstatechange = n;
            const o = this._nativeContext.onstatechange;
            this._onstatechange = null !== o && o === n ? m : o;
        }
        get sampleRate() {
            return this._nativeContext.sampleRate;
        }
        get state() {
            return this._nativeContext.state;
        }
        constructor(m, n) {
            super(m), this._nativeContext = m, e.CONTEXT_STORE.set(this, m), j(m) && k.set(m, new Set()), this._destination = new g(this, n), this._listener = h(this, m), this._onstatechange = null;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMinimalOfflineAudioContextConstructor', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....');
    const g = { numberOfChannels: 1 }, _h = (i, j, k, l, m) => class extends l {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(j()) : (this._state = 'running', m(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, e.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(n) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(n) : setTimeout(() => this._waitForThePromiseToSettle(n));
            }
            constructor(n) {
                const {
                        length: o,
                        numberOfChannels: p,
                        sampleRate: q
                    } = {
                        ...g,
                        ...n
                    }, r = k(p, o, q);
                i(f.testPromiseSupport, () => (0, f.testPromiseSupport)(r)) || r.addEventListener('statechange', (() => {
                    let s = 0;
                    const t = u => {
                        'running' === this._state && (s > 0 ? (r.removeEventListener('statechange', t), u.stopImmediatePropagation(), this._waitForThePromiseToSettle(u)) : s += 1);
                    };
                    return t;
                })()), super(r, p), this._length = o, this._nativeOfflineAudioContext = r, this._state = null;
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testPromiseSupport', function () {
        return _e;
    });
    const _e = f => {
        const g = new Uint32Array([
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
            const h = f.decodeAudioData(g.buffer, () => {
            });
            return void 0 !== h && (h.catch(() => {
            }), !0);
        } catch {
        }
        return !1;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createMonitorConnections', function () {
        return _e;
    });
    const _e = (f, g) => (h, i, j) => {
        const k = new Set();
        var l, m;
        return h.connect = (l = h.connect, (n, o = 0, p = 0) => {
            const q = 0 === k.size;
            if (g(n))
                return l.call(h, n, o, p), f(k, [
                    n,
                    o,
                    p
                ], r => r[0] === n && r[1] === o && r[2] === p, !0), q && i(), n;
            l.call(h, n, o), f(k, [
                n,
                o
            ], r => r[0] === n && r[1] === o, !0), q && i();
        }), h.disconnect = (m = h.disconnect, (n, o, p) => {
            const q = k.size > 0;
            if (void 0 === n)
                m.apply(h), k.clear();
            else if ('number' == typeof n) {
                m.call(h, n);
                for (const r of k)
                    r[1] === n && k.delete(r);
            } else {
                r(n) ? m.call(h, n, o, p) : m.call(h, n, o);
                for (const s of k)
                    s[0] !== n || void 0 !== o && s[1] !== o || void 0 !== p && s[2] !== p || k.delete(s);
            }
            const t = 0 === k.size;
            q && t && j();
        }), h;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAnalyserNodeFactory', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = (j, k) => (l, m) => {
        const n = l.createAnalyser();
        if ((0, f.assignNativeAudioNodeOptions)(n, m), !(m.maxDecibels > m.minDecibels))
            throw k();
        return (0, e.assignNativeAudioNodeOption)(n, m, 'fftSize'), (0, e.assignNativeAudioNodeOption)(n, m, 'maxDecibels'), (0, e.assignNativeAudioNodeOption)(n, m, 'minDecibels'), (0, e.assignNativeAudioNodeOption)(n, m, 'smoothingTimeConstant'), j(g.testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => (0, g.testAnalyserNodeGetFloatTimeDomainDataMethodSupport)(n)) || (0, h.wrapAnalyserNodeGetFloatTimeDomainDataMethod)(n), n;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'assignNativeAudioNodeOption', function () {
        return _e;
    });
    const _e = (f, g, h) => {
        const i = g[h];
        void 0 !== i && i !== f[h] && (f[h] = i);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'assignNativeAudioNodeOptions', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h) => {
        (0, e.assignNativeAudioNodeOption)(g, h, 'channelCount'), (0, e.assignNativeAudioNodeOption)(g, h, 'channelCountMode'), (0, e.assignNativeAudioNodeOption)(g, h, 'channelInterpretation');
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAnalyserNodeGetFloatTimeDomainDataMethodSupport', function () {
        return _e;
    });
    const _e = f => 'function' == typeof f.getFloatTimeDomainData;
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAnalyserNodeGetFloatTimeDomainDataMethod', function () {
        return _e;
    });
    const _e = f => {
        f.getFloatTimeDomainData = g => {
            const h = new Uint8Array(g.length);
            f.getByteTimeDomainData(h);
            const i = Math.max(h.length, f.fftSize);
            for (let j = 0; j < i; j += 1)
                g[j] = 0.0078125 * (h[j] - 128);
            return g;
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAudioBufferConstructor', function () {
        return _e;
    });
    const _e = f => null === f ? null : f.hasOwnProperty('AudioBuffer') ? f.AudioBuffer : null;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAudioBufferSourceNodeFactory', function () {
        return _k;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    const _k = (l, m, n, o, p, q, r, s, t, u, v) => (w, x) => {
        const y = w.createBufferSource();
        return (0, g.assignNativeAudioNodeOptions)(y, x), (0, e.assignNativeAudioNodeAudioParamValue)(y, x, 'playbackRate'), (0, f.assignNativeAudioNodeOption)(y, x, 'buffer'), (0, f.assignNativeAudioNodeOption)(y, x, 'loop'), (0, f.assignNativeAudioNodeOption)(y, x, 'loopEnd'), (0, f.assignNativeAudioNodeOption)(y, x, 'loopStart'), m(n, () => n(w)) || (0, h.wrapAudioBufferSourceNodeStartMethodConsecutiveCalls)(y), m(o, () => o(w)) || t(y), m(p, () => p(w)) || u(y, w), m(q, () => q(w)) || (0, i.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(y), m(r, () => r(w)) || v(y, w), m(s, () => s(w)) || (0, j.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(y), l(w, y), y;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'assignNativeAudioNodeAudioParamValue', function () {
        return _e;
    });
    const _e = (f, g, h) => {
        const i = g[h];
        void 0 !== i && i !== f[h].value && (f[h].value = i);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAudioBufferSourceNodeStartMethodConsecutiveCalls', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        g.start = (h => {
            let i = !1;
            return (j = 0, k = 0, l) => {
                if (i)
                    throw (0, e.createInvalidStateError)();
                h.call(g, j, k, l), i = !0;
            };
        })(g.start);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAudioScheduledSourceNodeStartMethodNegativeParameters', function () {
        return _e;
    });
    const _e = f => {
        var g;
        f.start = (g = f.start, (h = 0, i = 0, j) => {
            if ('number' == typeof j && j < 0 || i < 0 || h < 0)
                throw new RangeError('The parameters can\'t be negative.');
            g.call(f, h, i, j);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAudioScheduledSourceNodeStopMethodNegativeParameters', function () {
        return _e;
    });
    const _e = f => {
        var g;
        f.stop = (g = f.stop, (h = 0) => {
            if (h < 0)
                throw new RangeError('The parameter can\'t be negative.');
            g.call(f, h);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAudioContextConstructor', function () {
        return _e;
    });
    const _e = f => null === f ? null : f.hasOwnProperty('AudioContext') ? f.AudioContext : f.hasOwnProperty('webkitAudioContext') ? f.webkitAudioContext : null;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAudioDestinationNodeFactory', function () {
        return _e;
    });
    const _e = (f, g) => (h, i, j) => {
        const k = h.destination;
        if (k.channelCount !== i)
            try {
                k.channelCount = i;
            } catch {
            }
        j && 'explicit' !== k.channelCountMode && (k.channelCountMode = 'explicit'), 0 === k.maxChannelCount && Object.defineProperty(k, 'maxChannelCount', { value: i });
        const l = f(h, {
            channelCount: i,
            channelCountMode: k.channelCountMode,
            channelInterpretation: k.channelInterpretation,
            gain: 1
        });
        return g(l, 'channelCount', m => () => m.call(l), m => n => {
            m.call(l, n);
            try {
                k.channelCount = n;
            } catch (m) {
                if (n > k.maxChannelCount)
                    throw m;
            }
        }), g(l, 'channelCountMode', m => () => m.call(l), m => n => {
            m.call(l, n), k.channelCountMode = n;
        }), g(l, 'channelInterpretation', m => () => m.call(l), m => n => {
            m.call(l, n), k.channelInterpretation = n;
        }), Object.defineProperty(l, 'maxChannelCount', { get: () => k.maxChannelCount }), l.connect(k), l;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAudioWorkletNodeConstructor', function () {
        return _e;
    });
    const _e = f => null === f ? null : f.hasOwnProperty('AudioWorkletNode') ? f.AudioWorkletNode : null;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAudioWorkletNodeFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => (l, m, n, o, p, q) => {
        if (null !== n)
            try {
                const r = new n(l, o, q), s = new Map();
                let t = null;
                if (Object.defineProperties(r, {
                        channelCount: {
                            get: () => q.channelCount,
                            set: () => {
                                throw g();
                            }
                        },
                        channelCountMode: {
                            get: () => 'explicit',
                            set: () => {
                                throw g();
                            }
                        },
                        onprocessorerror: {
                            get: () => t,
                            set: u => {
                                'function' == typeof t && r.removeEventListener('processorerror', t), t = 'function' == typeof u ? u : null, 'function' == typeof t && r.addEventListener('processorerror', t);
                            }
                        }
                    }), r.addEventListener = (_v = r.addEventListener, (...g) => {
                        if ('processorerror' === g[0]) {
                            const u = 'function' == typeof g[1] ? g[1] : 'object' == typeof g[1] && null !== g[1] && 'function' == typeof g[1].handleEvent ? g[1].handleEvent : null;
                            if (null !== u) {
                                const v = s.get(g[1]);
                                void 0 !== v ? g[1] = v : (g[1] = w => {
                                    'error' === w.type ? (Object.defineProperties(w, { type: { value: 'processorerror' } }), u(w)) : u(new ErrorEvent(g[0], { ...w }));
                                }, s.set(u, g[1]));
                            }
                        }
                        return _v.call(u, 'error', g[1], g[2]), _v.call(u, ...g);
                    }), r.removeEventListener = (_u = r.removeEventListener, (...g) => {
                        if ('processorerror' === g[0]) {
                            const u = s.get(g[1]);
                            void 0 !== u && (s.delete(g[1]), g[1] = u);
                        }
                        return _u.call(u, 'error', g[1], g[2]), _u.call(u, g[0], g[1], g[2]);
                    }), 0 !== q.numberOfOutputs) {
                    const u = i(l, {
                        channelCount: 1,
                        channelCountMode: 'explicit',
                        channelInterpretation: 'discrete',
                        gain: 0
                    });
                    r.connect(u).connect(l.destination);
                    return k(r, () => u.disconnect(), () => u.connect(l.destination));
                }
                return r;
            } catch (u) {
                if (11 === u.code)
                    throw s();
                throw u;
            }
        var _u, _v;
        if (void 0 === p)
            throw s();
        return (0, e.testClonabilityOfAudioWorkletNodeOptions)(q), r(l, m, p, q);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testClonabilityOfAudioWorkletNodeOptions', function () {
        return _e;
    });
    const _e = f => {
        const {port1: g} = new MessageChannel();
        try {
            g.postMessage(f);
        } finally {
            g.close();
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeAudioWorkletNodeFakerFactory', function () {
        return _l;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....');
    const _l = (m, n, o, p, q, r, s, t, u, v, w, x, y) => (z, A, B, C) => {
        if (0 === C.numberOfInputs && 0 === C.numberOfOutputs)
            throw u();
        const D = Array.isArray(C.outputChannelCount) ? C.outputChannelCount : Array.from(C.outputChannelCount);
        if (D.some(E => E < 1))
            throw u();
        if (D.length !== C.numberOfOutputs)
            throw n();
        if ('explicit' !== C.channelCountMode)
            throw u();
        const E = C.channelCount * C.numberOfInputs, F = D.reduce((G, H) => G + H, 0), G = void 0 === B.parameterDescriptors ? 0 : B.parameterDescriptors.length;
        if (E + G > 6 || F > 6)
            throw u();
        const H = new MessageChannel(), I = [], J = [];
        for (let K = 0; K < C.numberOfInputs; K += 1)
            I.push(s(z, {
                channelCount: C.channelCount,
                channelCountMode: C.channelCountMode,
                channelInterpretation: C.channelInterpretation,
                gain: 1
            })), J.push(q(z, {
                channelCount: C.channelCount,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: C.channelCount
            }));
        const L = [];
        if (void 0 !== B.parameterDescriptors)
            for (const {
                        defaultValue: M,
                        maxValue: N,
                        minValue: O,
                        name: P
                    } of B.parameterDescriptors) {
                const Q = r(z, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    offset: void 0 !== C.parameterData[P] ? C.parameterData[P] : void 0 === K ? 0 : K
                });
                Object.defineProperties(Q.offset, {
                    defaultValue: { get: () => void 0 === K ? 0 : K },
                    maxValue: { get: () => void 0 === N ? e.MOST_POSITIVE_SINGLE_FLOAT : N },
                    minValue: { get: () => void 0 === O ? e.MOST_NEGATIVE_SINGLE_FLOAT : O }
                }), L.push(Q);
            }
        const R = P(z, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: Math.max(1, E + G)
            }), S = (0, Q.computeBufferSize)(A, z.sampleRate), T = t(z, S, E + G, Math.max(1, F)), U = q(z, {
                channelCount: Math.max(1, F),
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                numberOfOutputs: Math.max(1, F)
            }), V = [];
        for (let W = 0; W < C.numberOfOutputs; W += 1)
            V.push(P(z, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'speakers',
                numberOfInputs: D[W]
            }));
        for (let X = 0; X < C.numberOfInputs; X += 1) {
            I[X].connect(J[X]);
            for (let Y = 0; Y < C.channelCount; Y += 1)
                J[X].connect(R, Y, X * C.channelCount + Y);
        }
        const Y = new (0, k.ReadOnlyMap)(void 0 === B.parameterDescriptors ? [] : B.parameterDescriptors.map(({name: Z}, $) => {
            const ab = L[$];
            return ab.connect(R, 0, E + $), ab.start(0), [
                Z,
                ab.offset
            ];
        }));
        R.connect(T);
        let Z = C.channelInterpretation, $ = null;
        const ab = 0 === C.numberOfOutputs ? [T] : V, bb = {
                get bufferSize() {
                    return S;
                },
                get channelCount() {
                    return C.channelCount;
                },
                set channelCount(cb) {
                    throw O();
                },
                get channelCountMode() {
                    return C.channelCountMode;
                },
                set channelCountMode(cb) {
                    throw O();
                },
                get channelInterpretation() {
                    return Z;
                },
                set channelInterpretation(cb) {
                    for (const db of I)
                        db.channelInterpretation = cb;
                    Z = cb;
                },
                get context() {
                    return T.context;
                },
                get inputs() {
                    return I;
                },
                get numberOfInputs() {
                    return C.numberOfInputs;
                },
                get numberOfOutputs() {
                    return C.numberOfOutputs;
                },
                get onprocessorerror() {
                    return $;
                },
                set onprocessorerror(cb) {
                    'function' == typeof $ && bb.removeEventListener('processorerror', $), $ = 'function' == typeof cb ? cb : null, 'function' == typeof $ && bb.addEventListener('processorerror', $);
                },
                get parameters() {
                    return Y;
                },
                get port() {
                    return H.port2;
                },
                addEventListener: (...X) => T.addEventListener(X[0], X[1], X[2]),
                connect: X.bind(null, ab),
                disconnect: v.bind(null, ab),
                dispatchEvent: (...X) => T.dispatchEvent(X[0]),
                removeEventListener: (...X) => T.removeEventListener(X[0], X[1], X[2])
            }, cb = new Map();
        var db, eb;
        H.port1.addEventListener = (db = H.port1.addEventListener, (...X) => {
            if ('message' === X[0]) {
                const fb = 'function' == typeof X[1] ? X[1] : 'object' == typeof X[1] && null !== X[1] && 'function' == typeof X[1].handleEvent ? X[1].handleEvent : null;
                if (null !== fb) {
                    const gb = cb.get(X[1]);
                    void 0 !== gb ? X[1] = gb : (X[1] = hb => {
                        w(z.currentTime, z.sampleRate, () => fb(hb));
                    }, cb.set(fb, X[1]));
                }
            }
            return db.call(H.port1, X[0], X[1], X[2]);
        }), H.port1.removeEventListener = (eb = H.port1.removeEventListener, (...X) => {
            if ('message' === X[0]) {
                const fb = cb.get(X[1]);
                void 0 !== fb && (cb.delete(X[1]), X[1] = fb);
            }
            return eb.call(H.port1, X[0], X[1], X[2]);
        });
        let fb = null;
        Object.defineProperty(H.port1, 'onmessage', {
            get: () => fb,
            set: gb => {
                'function' == typeof fb && H.port1.removeEventListener('message', fb), fb = 'function' == typeof gb ? gb : null, 'function' == typeof fb && (H.port1.addEventListener('message', fb), H.port1.start());
            }
        }), B.prototype.port = H.port1;
        let gb = null;
        (0, i.createAudioWorkletProcessor)(z, bb, B, C).then(hb => gb = hb);
        const hb = (0, j.createNestedArrays)(C.numberOfInputs, C.channelCount), ib = (0, j.createNestedArrays)(C.numberOfOutputs, D), jb = void 0 === B.parameterDescriptors ? [] : B.parameterDescriptors.reduce((kb, {name: lb}) => ({
                ...kb,
                [lb]: new Float32Array(128)
            }), {});
        let kb = !0;
        const lb = () => {
                C.numberOfOutputs > 0 && T.disconnect(U);
                for (let mb = 0, nb = 0; mb < C.numberOfOutputs; mb += 1) {
                    const ob = V[mb];
                    for (let pb = 0; pb < D[mb]; pb += 1)
                        U.disconnect(ob, nb + pb, pb);
                    nb += D[mb];
                }
            }, mb = new Map();
        T.onaudioprocess = ({
            inputBuffer: nb,
            outputBuffer: ob
        }) => {
            if (null !== gb) {
                const pb = x(bb);
                for (let qb = 0; qb < S; qb += 128) {
                    for (let rb = 0; rb < C.numberOfInputs; rb += 1)
                        for (let sb = 0; sb < C.channelCount; sb += 1)
                            (0, g.copyFromChannel)(nb, hb[rb], sb, sb, qb);
                    void 0 !== B.parameterDescriptors && B.parameterDescriptors.forEach(({name: tb}, ub) => {
                        (0, g.copyFromChannel)(nb, jb, tb, E + ub, qb);
                    });
                    for (let tb = 0; tb < C.numberOfInputs; tb += 1)
                        for (let ub = 0; ub < D[tb]; ub += 1)
                            0 === ib[tb][ub].byteLength && (ib[tb][ub] = new Float32Array(128));
                    try {
                        const vb = hb.map((wb, xb) => {
                                if (sb[xb].size > 0)
                                    return mb.set(xb, S / 128), wb;
                                const yb = mb.get(xb);
                                return void 0 === yb ? [] : (wb.every(zb => zb.every(Ab => 0 === Ab)) && (1 === yb ? mb.delete(xb) : mb.set(xb, yb - 1)), wb);
                            }), wb = w(z.currentTime + qb / z.sampleRate, z.sampleRate, () => gb.process(tb, ib, jb));
                        kb = wb;
                        for (let xb = 0, yb = 0; xb < C.numberOfOutputs; xb += 1) {
                            for (let zb = 0; zb < D[xb]; zb += 1)
                                (0, h.copyToChannel)(ub, ib[xb], zb, yb + zb, qb);
                            yb += D[xb];
                        }
                    } catch (tb) {
                        kb = !1, bb.dispatchEvent(new ErrorEvent('processorerror', {
                            colno: tb.colno,
                            filename: tb.filename,
                            lineno: tb.lineno,
                            message: tb.message
                        }));
                    }
                    if (!kb) {
                        for (let xb = 0; xb < C.numberOfInputs; xb += 1) {
                            I[xb].disconnect(J[xb]);
                            for (let yb = 0; yb < C.channelCount; yb += 1)
                                J[qb].disconnect(R, yb, xb * C.channelCount + yb);
                        }
                        if (void 0 !== B.parameterDescriptors) {
                            const yb = B.parameterDescriptors.length;
                            for (let zb = 0; zb < xb; zb += 1) {
                                const Ab = L[zb];
                                xb.disconnect(R, 0, E + zb), xb.stop();
                            }
                        }
                        R.disconnect(T), T.onaudioprocess = null, _nb ? lb() : _qb();
                        break;
                    }
                }
            }
        };
        let _nb = !1;
        const ob = s(z, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            }), pb = () => T.connect(ob).connect(z.destination), _qb = () => {
                T.disconnect(ob), ob.disconnect();
            };
        return pb(), y(bb, () => {
            if (kb) {
                _qb(), C.numberOfOutputs > 0 && T.connect(U);
                for (let rb = 0, sb = 0; rb < C.numberOfOutputs; rb += 1) {
                    const tb = V[rb];
                    for (let ub = 0; ub < D[rb]; ub += 1)
                        U.connect(tb, sb + ub, ub);
                    sb += D[rb];
                }
            }
            _nb = !0;
        }, () => {
            kb && (pb(), lb()), _nb = !1;
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'computeBufferSize', function () {
        return _e;
    });
    const _e = (f, g) => null === f ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(f * g)))));
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioWorkletProcessor', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k) => {
        let l = e.NODE_TO_PROCESSOR_MAPS.get(h);
        void 0 === l && (l = new WeakMap(), e.NODE_TO_PROCESSOR_MAPS.set(h, l));
        const m = (0, f.createAudioWorkletProcessorPromise)(j, k);
        return l.set(i, m), m;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createAudioWorkletProcessorPromise', function () {
        return _f;
    });
    var e = b('.....');
    const _f = async (g, h) => new g(await (0, e.cloneAudioWorkletNodeOptions)(h));
}), b.register('.....', function (c, d) {
    a(c.exports, 'cloneAudioWorkletNodeOptions', function () {
        return _e;
    });
    const _e = f => new Promise((g, h) => {
        const {
            port1: i,
            port2: j
        } = new MessageChannel();
        i.onmessage = ({data: k}) => {
            i.close(), j.close(), g(k);
        }, i.onmessageerror = ({data: k}) => {
            i.close(), j.close(), h(k);
        }, j.postMessage(f);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeBiquadFilterNode', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const _h = (i, j) => {
        const k = i.createBiquadFilter();
        return (0, g.assignNativeAudioNodeOptions)(k, j), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'Q'), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'detune'), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'frequency'), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'gain'), (0, f.assignNativeAudioNodeOption)(k, j, 'type'), k;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeChannelMergerNodeFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h) => (i, j) => {
        const k = i.createChannelMerger(j.numberOfInputs);
        return null !== g && 'webkitAudioContext' === g.name && h(i, k), (0, e.assignNativeAudioNodeOptions)(k, j), k;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeChannelSplitterNode', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i) => {
        const j = h.createChannelSplitter(i.numberOfOutputs);
        return (0, e.assignNativeAudioNodeOptions)(j, i), (0, f.wrapChannelSplitterNode)(j), j;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapChannelSplitterNode', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = g.numberOfOutputs;
        Object.defineProperty(g, 'channelCount', {
            get: () => h,
            set: i => {
                if (i !== h)
                    throw (0, e.createInvalidStateError)();
            }
        }), Object.defineProperty(g, 'channelCountMode', {
            get: () => 'explicit',
            set: i => {
                if ('explicit' !== i)
                    throw (0, e.createInvalidStateError)();
            }
        }), Object.defineProperty(g, 'channelInterpretation', {
            get: () => 'discrete',
            set: i => {
                if ('discrete' !== i)
                    throw (0, e.createInvalidStateError)();
            }
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeConstantSourceNodeFactory', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    const _i = (j, k, l, m, n) => (o, p) => {
        if (void 0 === o.createConstantSource)
            return l(o, p);
        const q = o.createConstantSource();
        return (0, f.assignNativeAudioNodeOptions)(q, p), (0, e.assignNativeAudioNodeAudioParamValue)(q, p, 'offset'), k(m, () => m(o)) || (0, g.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(q), k(n, () => n(o)) || (0, h.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(q), j(o, q), q;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeConstantSourceNodeFakerFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j) => (k, {
        offset: l,
        ...m
    }) => {
        const n = k.createBuffer(1, 2, 44100), o = h(k, {
                buffer: null,
                channelCount: 2,
                channelCountMode: 'max',
                channelInterpretation: 'speakers',
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }), p = i(k, {
                ...m,
                gain: l
            }), q = n.getChannelData(0);
        q[0] = 1, q[1] = 1, o.buffer = n, o.loop = !0;
        const r = {
            get bufferSize() {
            },
            get channelCount() {
                return p.channelCount;
            },
            set channelCount(s) {
                p.channelCount = s;
            },
            get channelCountMode() {
                return p.channelCountMode;
            },
            set channelCountMode(s) {
                p.channelCountMode = s;
            },
            get channelInterpretation() {
                return p.channelInterpretation;
            },
            set channelInterpretation(s) {
                p.channelInterpretation = s;
            },
            get context() {
                return p.context;
            },
            get inputs() {
                return [];
            },
            get numberOfInputs() {
                return o.numberOfInputs;
            },
            get numberOfOutputs() {
                return p.numberOfOutputs;
            },
            get offset() {
                return p.gain;
            },
            get onended() {
                return o.onended;
            },
            set onended(s) {
                o.onended = s;
            },
            addEventListener: (...g) => o.addEventListener(g[0], g[1], g[2]),
            dispatchEvent: (...g) => o.dispatchEvent(g[0]),
            removeEventListener: (...g) => o.removeEventListener(g[0], g[1], g[2]),
            start(s = 0) {
                o.start.call(o, s);
            },
            stop(s = 0) {
                o.stop.call(o, s);
            }
        };
        return g(k, o), j((0, e.interceptConnections)(r, p), () => o.connect(p), () => o.disconnect(p));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'interceptConnections', function () {
        return _e;
    });
    const _e = (f, g) => (f.connect = g.connect.bind(g), f.disconnect = g.disconnect.bind(g), f);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeConvolverNodeFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i) => (j, k) => {
        const l = j.createConvolver();
        if ((0, f.assignNativeAudioNodeOptions)(l, k), k.disableNormalization === l.normalize && (l.normalize = !k.disableNormalization), (0, e.assignNativeAudioNodeOption)(l, k, 'buffer'), k.channelCount > 2)
            throw h();
        if (i(l, 'channelCount', m => () => m.call(l), m => n => {
                if (n > 2)
                    throw h();
                return m.call(l, n);
            }), 'max' === k.channelCountMode)
            throw h();
        return i(l, 'channelCountMode', m => () => m.call(l), m => n => {
            if ('max' === n)
                throw h();
            return m.call(l, n);
        }), l;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeDelayNode', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i) => {
        const j = h.createDelay(i.maxDelayTime);
        return (0, f.assignNativeAudioNodeOptions)(j, i), (0, e.assignNativeAudioNodeAudioParamValue)(j, i, 'delayTime'), j;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeDynamicsCompressorNodeFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = h => (i, j) => {
        const k = i.createDynamicsCompressor();
        if ((0, f.assignNativeAudioNodeOptions)(k, j), j.channelCount > 2)
            throw h();
        if ('max' === j.channelCountMode)
            throw h();
        return (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'attack'), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'knee'), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'ratio'), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'release'), (0, e.assignNativeAudioNodeAudioParamValue)(k, j, 'threshold'), k;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeGainNode', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i) => {
        const j = h.createGain();
        return (0, f.assignNativeAudioNodeOptions)(j, i), (0, e.assignNativeAudioNodeAudioParamValue)(j, i, 'gain'), j;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeIIRFilterNodeFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => (h, i, j) => {
        if (void 0 === h.createIIRFilter)
            return g(h, i, j);
        const k = h.createIIRFilter(j.feedforward, j.feedback);
        return (0, e.assignNativeAudioNodeOptions)(k, j), k;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeIIRFilterNodeFakerFactory', function () {
        return _m;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    function h(i, j) {
        const k = j[0] * j[0] + j[1] * j[1];
        return [
            (i[0] * j[0] + i[1] * j[1]) / k,
            (i[1] * j[0] - i[0] * j[1]) / k
        ];
    }
    function j(k, l) {
        let m = [
            0,
            0
        ];
        for (let n = k.length - 1; n >= 0; n -= 1)
            e = l, m = [
                (d = m)[0] * e[0] - d[1] * e[1],
                d[0] * e[1] + d[1] * e[0]
            ], m[0] += k[n];
        var o, p;
        return m;
    }
    const _m = (n, o, p, q) => (r, s, {
        channelCount: t,
        channelCountMode: u,
        channelInterpretation: v,
        feedback: w,
        feedforward: x
    }) => {
        const y = (0, p.computeBufferSize)(s, r.sampleRate), z = w instanceof Float64Array ? w : new Float64Array(w), A = x instanceof Float64Array ? x : new Float64Array(x), B = z.length, C = A.length, D = Math.min(B, C);
        if (0 === B || B > 20)
            throw q();
        if (0 === z[0])
            throw o();
        if (0 === C || C > 20)
            throw q();
        if (0 === A[0])
            throw o();
        if (1 !== z[0]) {
            for (let E = 0; E < C; E += 1)
                A[E] /= z[0];
            for (let F = 1; F < B; F += 1)
                z[F] /= z[0];
        }
        const E = p(r, y, t, t);
        E.channelCount = t, E.channelCountMode = u, E.channelInterpretation = v;
        const F = [], G = [], H = [];
        for (let I = 0; I < t; I += 1) {
            F.push(0);
            const J = new Float32Array(32), K = new Float32Array(32);
            I.fill(0), K.fill(0), G.push(I), H.push(K);
        }
        E.onaudioprocess = L => {
            const M = L.inputBuffer, N = L.outputBuffer, O = M.numberOfChannels;
            for (let P = 0; P < O; P += 1) {
                const Q = M.getChannelData(P), R = N.getChannelData(P);
                F[P] = (0, f.filterBuffer)(z, B, A, C, D, G[P], H[P], F[P], 32, Q, R);
            }
        };
        const L = r.sampleRate / 2, M = {
                get bufferSize() {
                    return y;
                },
                get channelCount() {
                    return E.channelCount;
                },
                set channelCount(N) {
                    E.channelCount = N;
                },
                get channelCountMode() {
                    return E.channelCountMode;
                },
                set channelCountMode(N) {
                    E.channelCountMode = N;
                },
                get channelInterpretation() {
                    return E.channelInterpretation;
                },
                set channelInterpretation(N) {
                    E.channelInterpretation = N;
                },
                get context() {
                    return E.context;
                },
                get inputs() {
                    return [E];
                },
                get numberOfInputs() {
                    return E.numberOfInputs;
                },
                get numberOfOutputs() {
                    return E.numberOfOutputs;
                },
                addEventListener: (...I) => E.addEventListener(I[0], I[1], I[2]),
                dispatchEvent: (...I) => E.dispatchEvent(I[0]),
                getFrequencyResponse(N, O, P) {
                    if (N.length !== O.length || O.length !== P.length)
                        throw I();
                    const Q = N.length;
                    for (let R = 0; R < Q; R += 1) {
                        const S = -Math.PI * (N[R] / L), T = [
                                Math.cos(S),
                                Math.sin(S)
                            ], U = h(j(A, T), j(z, T));
                        O[R] = Math.sqrt(U[0] * U[0] + U[1] * U[1]), P[R] = Math.atan2(U[1], U[0]);
                    }
                },
                removeEventListener: (...I) => E.removeEventListener(I[0], I[1], I[2])
            };
        return (0, g.interceptConnections)(M, E);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeMediaElementAudioSourceNode', function () {
        return _e;
    });
    const _e = (f, g) => f.createMediaElementSource(g.mediaElement);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeMediaStreamAudioDestinationNode', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h) => {
        const i = g.createMediaStreamDestination();
        return (0, e.assignNativeAudioNodeOptions)(i, h), 1 === i.numberOfOutputs && Object.defineProperty(i, 'numberOfOutputs', { get: () => 0 }), i;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeMediaStreamAudioSourceNode', function () {
        return _e;
    });
    const _e = (f, {mediaStream: g}) => {
        const h = g.getAudioTracks();
        h.sort((i, j) => i.id < j.id ? -1 : i.id > j.id ? 1 : 0);
        const i = h.slice(0, 1), j = f.createMediaStreamSource(new MediaStream(i));
        return Object.defineProperty(j, 'mediaStream', { value: g }), j;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeMediaStreamTrackAudioSourceNodeFactory', function () {
        return _e;
    });
    const _e = (f, g) => (h, {mediaStreamTrack: i}) => {
        if ('function' == typeof h.createMediaStreamTrackSource)
            return h.createMediaStreamTrackSource(i);
        const j = new MediaStream([i]), k = h.createMediaStreamSource(j);
        if ('audio' !== i.kind)
            throw f();
        if (g(h))
            throw new TypeError();
        return k;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeOfflineAudioContextConstructor', function () {
        return _e;
    });
    const _e = f => null === f ? null : f.hasOwnProperty('OfflineAudioContext') ? f.OfflineAudioContext : f.hasOwnProperty('webkitOfflineAudioContext') ? f.webkitOfflineAudioContext : null;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeOscillatorNodeFactory', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    const _j = (k, l, m, n, o, p) => (q, r) => {
        const s = q.createOscillator();
        return (0, g.assignNativeAudioNodeOptions)(s, r), (0, e.assignNativeAudioNodeAudioParamValue)(s, r, 'detune'), (0, e.assignNativeAudioNodeAudioParamValue)(s, r, 'frequency'), void 0 !== r.periodicWave ? s.setPeriodicWave(r.periodicWave) : (0, f.assignNativeAudioNodeOption)(s, r, 'type'), l(m, () => m(q)) || (0, h.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(s), l(n, () => n(q)) || p(s, q), l(o, () => o(q)) || (0, i.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(s), k(q, s), s;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativePannerNodeFactory', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const _h = i => (j, k) => {
        const l = j.createPanner();
        return void 0 === l.orientationX ? i(j, k) : ((0, g.assignNativeAudioNodeOptions)(l, k), (0, e.assignNativeAudioNodeAudioParamValue)(l, k, 'orientationX'), (0, e.assignNativeAudioNodeAudioParamValue)(l, k, 'orientationY'), (0, e.assignNativeAudioNodeAudioParamValue)(l, k, 'orientationZ'), (0, e.assignNativeAudioNodeAudioParamValue)(l, k, 'positionX'), (0, e.assignNativeAudioNodeAudioParamValue)(l, k, 'positionY'), (0, e.assignNativeAudioNodeAudioParamValue)(l, k, 'positionZ'), (0, f.assignNativeAudioNodeOption)(l, k, 'coneInnerAngle'), (0, f.assignNativeAudioNodeOption)(l, k, 'coneOuterAngle'), (0, f.assignNativeAudioNodeOption)(l, k, 'coneOuterGain'), (0, f.assignNativeAudioNodeOption)(l, k, 'distanceModel'), (0, f.assignNativeAudioNodeOption)(l, k, 'maxDistance'), (0, f.assignNativeAudioNodeOption)(l, k, 'panningModel'), (0, f.assignNativeAudioNodeOption)(l, k, 'refDistance'), (0, f.assignNativeAudioNodeOption)(l, k, 'rolloffFactor'), l);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativePannerNodeFakerFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l, m, n, o, p, q) => (r, {
        coneInnerAngle: s,
        coneOuterAngle: t,
        coneOuterGain: u,
        distanceModel: v,
        maxDistance: w,
        orientationX: x,
        orientationY: y,
        orientationZ: z,
        panningModel: A,
        positionX: B,
        positionY: C,
        positionZ: D,
        refDistance: E,
        rolloffFactor: F,
        ...G
    }) => {
        const H = r.createPanner();
        if (G.channelCount > 2)
            throw n();
        if ('max' === G.channelCountMode)
            throw n();
        (0, e.assignNativeAudioNodeOptions)(H, G);
        const I = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            }, J = j(r, {
                ...I,
                channelInterpretation: 'speakers',
                numberOfInputs: 6
            }), K = k(r, {
                ...G,
                gain: 1
            }), L = k(r, {
                ...I,
                gain: 1
            }), M = k(r, {
                ...I,
                gain: 0
            }), N = k(r, {
                ...I,
                gain: 0
            }), O = k(r, {
                ...I,
                gain: 0
            }), P = k(r, {
                ...I,
                gain: 0
            }), Q = k(r, {
                ...I,
                gain: 0
            }), R = l(r, 256, 6, 1), S = m(r, {
                ...I,
                curve: new Float32Array([
                    1,
                    1
                ]),
                oversample: 'none'
            });
        let T = [
                x,
                y,
                z
            ], U = [
                B,
                C,
                D
            ];
        const V = new Float32Array(1);
        R.onaudioprocess = ({inputBuffer: W}) => {
            const X = [
                p(W, V, 0),
                p(W, V, 1),
                p(W, V, 2)
            ];
            X.some((Y, Z) => Y !== T[Z]) && (H.setOrientation(...X), T = X);
            const Y = [
                p(W, V, 3),
                p(W, V, 4),
                p(W, V, 5)
            ];
            Y.some((Z, $) => Z !== U[$]) && (H.setPosition(...Y), U = Y);
        }, Object.defineProperty(M.gain, 'defaultValue', { get: () => 0 }), Object.defineProperty(N.gain, 'defaultValue', { get: () => 0 }), Object.defineProperty(O.gain, 'defaultValue', { get: () => 0 }), Object.defineProperty(P.gain, 'defaultValue', { get: () => 0 }), Object.defineProperty(Q.gain, 'defaultValue', { get: () => 0 });
        const W = {
            get bufferSize() {
            },
            get channelCount() {
                return H.channelCount;
            },
            set channelCount(X) {
                if (X > 2)
                    throw n();
                K.channelCount = X, H.channelCount = X;
            },
            get channelCountMode() {
                return H.channelCountMode;
            },
            set channelCountMode(X) {
                if ('max' === X)
                    throw n();
                K.channelCountMode = X, H.channelCountMode = X;
            },
            get channelInterpretation() {
                return H.channelInterpretation;
            },
            set channelInterpretation(X) {
                K.channelInterpretation = X, H.channelInterpretation = X;
            },
            get coneInnerAngle() {
                return H.coneInnerAngle;
            },
            set coneInnerAngle(X) {
                H.coneInnerAngle = X;
            },
            get coneOuterAngle() {
                return H.coneOuterAngle;
            },
            set coneOuterAngle(X) {
                H.coneOuterAngle = X;
            },
            get coneOuterGain() {
                return H.coneOuterGain;
            },
            set coneOuterGain(X) {
                if (X < 0 || X > 1)
                    throw i();
                H.coneOuterGain = X;
            },
            get context() {
                return H.context;
            },
            get distanceModel() {
                return H.distanceModel;
            },
            set distanceModel(X) {
                H.distanceModel = X;
            },
            get inputs() {
                return [K];
            },
            get maxDistance() {
                return H.maxDistance;
            },
            set maxDistance(X) {
                if (X < 0)
                    throw new RangeError();
                H.maxDistance = X;
            },
            get numberOfInputs() {
                return H.numberOfInputs;
            },
            get numberOfOutputs() {
                return H.numberOfOutputs;
            },
            get orientationX() {
                return L.gain;
            },
            get orientationY() {
                return M.gain;
            },
            get orientationZ() {
                return N.gain;
            },
            get panningModel() {
                return H.panningModel;
            },
            set panningModel(X) {
                H.panningModel = X;
            },
            get positionX() {
                return O.gain;
            },
            get positionY() {
                return P.gain;
            },
            get positionZ() {
                return Q.gain;
            },
            get refDistance() {
                return H.refDistance;
            },
            set refDistance(X) {
                if (X < 0)
                    throw new RangeError();
                H.refDistance = X;
            },
            get rolloffFactor() {
                return H.rolloffFactor;
            },
            set rolloffFactor(X) {
                if (X < 0)
                    throw new RangeError();
                H.rolloffFactor = X;
            },
            addEventListener: (...h) => K.addEventListener(h[0], h[1], h[2]),
            dispatchEvent: (...h) => K.dispatchEvent(h[0]),
            removeEventListener: (...h) => K.removeEventListener(h[0], h[1], h[2])
        };
        s !== W.coneInnerAngle && (W.coneInnerAngle = s), t !== W.coneOuterAngle && (W.coneOuterAngle = t), u !== W.coneOuterGain && (W.coneOuterGain = u), v !== W.distanceModel && (W.distanceModel = v), w !== W.maxDistance && (W.maxDistance = w), x !== W.orientationX.value && (W.orientationX.value = x), y !== W.orientationY.value && (W.orientationY.value = y), z !== W.orientationZ.value && (W.orientationZ.value = z), A !== W.panningModel && (W.panningModel = A), B !== W.positionX.value && (W.positionX.value = B), C !== W.positionY.value && (W.positionY.value = C), D !== W.positionZ.value && (W.positionZ.value = D), E !== W.refDistance && (W.refDistance = E), F !== W.rolloffFactor && (W.rolloffFactor = F), 1 === T[0] && 0 === T[1] && 0 === T[2] || H.setOrientation(...T), 0 === U[0] && 0 === U[1] && 0 === U[2] || H.setPosition(...U);
        return q((0, f.interceptConnections)(W, H), () => {
            K.connect(H), h(K, S, 0, 0), S.connect(L).connect(J, 0, 0), S.connect(M).connect(J, 0, 1), S.connect(N).connect(J, 0, 2), S.connect(O).connect(J, 0, 3), S.connect(P).connect(J, 0, 4), S.connect(Q).connect(J, 0, 5), J.connect(R).connect(r.destination);
        }, () => {
            K.disconnect(H), o(K, S, 0, 0), S.disconnect(L), L.disconnect(J), S.disconnect(M), M.disconnect(J), S.disconnect(N), N.disconnect(J), S.disconnect(O), O.disconnect(J), S.disconnect(P), P.disconnect(J), S.disconnect(Q), Q.disconnect(J), J.disconnect(R), R.disconnect(r.destination);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativePeriodicWaveFactory', function () {
        return _e;
    });
    const _e = f => (g, {
        disableNormalization: h,
        imag: i,
        real: j
    }) => {
        const k = i instanceof Float32Array ? i : new Float32Array(i), l = j instanceof Float32Array ? j : new Float32Array(j), m = g.createPeriodicWave(l, k, { disableNormalization: h });
        if (Array.from(i).length < 2)
            throw f();
        return m;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeScriptProcessorNode', function () {
        return _e;
    });
    const _e = (f, g, h, i) => f.createScriptProcessor(g, h, i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeStereoPannerNodeFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i) => (j, k) => {
        const l = k.channelCountMode;
        if ('clamped-max' === l)
            throw i();
        if (void 0 === j.createStereoPanner)
            return h(j, k);
        const m = j.createStereoPanner();
        return (0, f.assignNativeAudioNodeOptions)(m, k), (0, e.assignNativeAudioNodeAudioParamValue)(m, k, 'pan'), Object.defineProperty(m, 'channelCountMode', {
            get: () => l,
            set: n => {
                if (n !== l)
                    throw i();
            }
        }), m;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeStereoPannerNodeFakerFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k, l) => {
        const m = 16385, n = new Float32Array([
                1,
                1
            ]), o = Math.PI / 2, p = {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete'
            }, q = {
                ...p,
                oversample: 'none'
            }, r = (s, t, u, v, w) => {
                if (1 === t)
                    return ((x, y, z, A) => {
                        const B = new Float32Array(m), C = new Float32Array(m);
                        for (let D = 0; D < m; D += 1) {
                            const E = D / 16384 * o;
                            B[D] = Math.cos(E), C[D] = Math.sin(E);
                        }
                        const F = i(D, {
                                ...p,
                                gain: 0
                            }), G = j(D, {
                                ...q,
                                curve: B
                            }), H = j(D, {
                                ...q,
                                curve: n
                            }), I = i(D, {
                                ...p,
                                gain: 0
                            }), J = j(D, {
                                ...q,
                                curve: C
                            });
                        return {
                            connectGraph() {
                                E.connect(F), E.connect(void 0 === H.inputs ? H : H.inputs[0]), E.connect(I), H.connect(z), z.connect(void 0 === G.inputs ? G : G.inputs[0]), z.connect(void 0 === J.inputs ? J : J.inputs[0]), G.connect(F.gain), J.connect(I.gain), F.connect(A, 0, 0), I.connect(A, 0, 1);
                            },
                            disconnectGraph() {
                                E.disconnect(F), E.disconnect(void 0 === H.inputs ? H : H.inputs[0]), E.disconnect(I), H.disconnect(z), z.disconnect(void 0 === G.inputs ? G : G.inputs[0]), z.disconnect(void 0 === J.inputs ? J : J.inputs[0]), G.disconnect(F.gain), J.disconnect(I.gain), F.disconnect(A, 0, 0), I.disconnect(A, 0, 1);
                            }
                        };
                    })(s, u, v, w);
                if (2 === t)
                    return ((x, y, z, A) => {
                        const B = new Float32Array(m), C = new Float32Array(m), D = new Float32Array(m), E = new Float32Array(m), F = Math.floor(8192.5);
                        for (let G = 0; G < m; G += 1)
                            if (G > F) {
                                const H = (G - F) / (16384 - F) * o;
                                B[G] = Math.cos(H), C[G] = Math.sin(H), D[G] = 0, E[G] = 1;
                            } else {
                                const I = G / (16384 - F) * o;
                                B[G] = 1, C[G] = 0, D[G] = Math.cos(I), E[G] = Math.sin(I);
                            }
                        const J = I(G, {
                                channelCount: 2,
                                channelCountMode: 'explicit',
                                channelInterpretation: 'discrete',
                                numberOfOutputs: 2
                            }), K = i(G, {
                                ...p,
                                gain: 0
                            }), L = j(G, {
                                ...q,
                                curve: B
                            }), M = i(G, {
                                ...p,
                                gain: 0
                            }), N = j(G, {
                                ...q,
                                curve: C
                            }), O = j(G, {
                                ...q,
                                curve: n
                            }), P = i(G, {
                                ...p,
                                gain: 0
                            }), Q = j(G, {
                                ...q,
                                curve: D
                            }), R = i(G, {
                                ...p,
                                gain: 0
                            }), S = j(G, {
                                ...q,
                                curve: E
                            });
                        return {
                            connectGraph() {
                                y.connect(J), y.connect(void 0 === O.inputs ? O : O.inputs[0]), J.connect(K, 0), J.connect(M, 0), J.connect(P, 1), J.connect(R, 1), O.connect(z), z.connect(void 0 === L.inputs ? L : L.inputs[0]), z.connect(void 0 === N.inputs ? N : N.inputs[0]), z.connect(void 0 === Q.inputs ? Q : Q.inputs[0]), z.connect(void 0 === S.inputs ? S : S.inputs[0]), L.connect(K.gain), N.connect(M.gain), Q.connect(P.gain), S.connect(R.gain), K.connect(A, 0, 0), P.connect(A, 0, 0), M.connect(A, 0, 1), R.connect(A, 0, 1);
                            },
                            disconnectGraph() {
                                y.disconnect(J), y.disconnect(void 0 === O.inputs ? O : O.inputs[0]), J.disconnect(K, 0), J.disconnect(M, 0), J.disconnect(P, 1), J.disconnect(R, 1), O.disconnect(z), z.disconnect(void 0 === L.inputs ? L : L.inputs[0]), z.disconnect(void 0 === N.inputs ? N : N.inputs[0]), z.disconnect(void 0 === Q.inputs ? Q : Q.inputs[0]), z.disconnect(void 0 === S.inputs ? S : S.inputs[0]), L.disconnect(K.gain), N.disconnect(M.gain), Q.disconnect(P.gain), S.disconnect(R.gain), K.disconnect(A, 0, 0), P.disconnect(A, 0, 0), M.disconnect(A, 0, 1), R.disconnect(A, 0, 1);
                            }
                        };
                    })(s, u, v, w);
                throw k();
            };
        return (s, {
            channelCount: t,
            channelCountMode: u,
            pan: v,
            ...w
        }) => {
            if ('max' === u)
                throw k();
            const x = g(s, {
                    ...w,
                    channelCount: 1,
                    channelCountMode: u,
                    numberOfInputs: 2
                }), y = i(s, {
                    ...w,
                    channelCount: t,
                    channelCountMode: u,
                    gain: 1
                }), z = i(s, {
                    channelCount: 1,
                    channelCountMode: 'explicit',
                    channelInterpretation: 'discrete',
                    gain: v
                });
            let {
                connectGraph: A,
                disconnectGraph: B
            } = r(s, t, y, z, x);
            Object.defineProperty(z.gain, 'defaultValue', { get: () => 0 }), Object.defineProperty(z.gain, 'maxValue', { get: () => 1 }), Object.defineProperty(z.gain, 'minValue', { get: () => -1 });
            const C = {
                get bufferSize() {
                },
                get channelCount() {
                    return y.channelCount;
                },
                set channelCount(D) {
                    y.channelCount !== D && (_D && B(), {
                        connectGraph: E,
                        disconnectGraph: F
                    } = r(s, D, y, z, x), _D && E()), y.channelCount = D;
                },
                get channelCountMode() {
                    return y.channelCountMode;
                },
                set channelCountMode(D) {
                    if ('clamped-max' === D || 'max' === D)
                        throw k();
                    y.channelCountMode = D;
                },
                get channelInterpretation() {
                    return y.channelInterpretation;
                },
                set channelInterpretation(D) {
                    y.channelInterpretation = D;
                },
                get context() {
                    return y.context;
                },
                get inputs() {
                    return [y];
                },
                get numberOfInputs() {
                    return y.numberOfInputs;
                },
                get numberOfOutputs() {
                    return y.numberOfOutputs;
                },
                get pan() {
                    return z.gain;
                },
                addEventListener: (...g) => y.addEventListener(g[0], g[1], g[2]),
                dispatchEvent: (...g) => y.dispatchEvent(g[0]),
                removeEventListener: (...g) => y.removeEventListener(g[0], g[1], g[2])
            };
            let _D = !1;
            return l((0, e.interceptConnections)(C, x), () => {
                A(), _D = !0;
            }, () => {
                B(), _D = !1;
            });
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeWaveShaperNodeFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l, m, n) => (o, p) => {
        const q = o.createWaveShaper();
        if (null !== m && 'webkitAudioContext' === m.name && void 0 === o.createGain().gain.automationRate)
            return j(o, p);
        (0, f.assignNativeAudioNodeOptions)(q, p);
        const r = null === p.curve || p.curve instanceof Float32Array ? p.curve : new Float32Array(p.curve);
        if (null !== r && r.length < 2)
            throw i();
        (0, e.assignNativeAudioNodeOption)(q, { curve: r }, 'curve'), (0, e.assignNativeAudioNodeOption)(q, p, 'oversample');
        let s = null, t = !1;
        n(q, 'curve', u => () => u.call(q), u => v => (u.call(q, v), t && (k(v) && null === s ? s = h(o, q) : k(v) || null === s || (s(), s = null)), v));
        return l(q, () => {
            t = !0, k(q.curve) && (s = h(o, q));
        }, () => {
            t = !1, null !== s && (s(), s = null);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNativeWaveShaperNodeFakerFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l) => (m, {
        curve: n,
        oversample: o,
        ...p
    }) => {
        const q = m.createWaveShaper(), r = m.createWaveShaper();
        (0, e.assignNativeAudioNodeOptions)(q, p), (0, e.assignNativeAudioNodeOptions)(r, p);
        const s = j(m, {
                ...p,
                gain: 1
            }), t = j(m, {
                ...p,
                gain: -1
            }), u = j(m, {
                ...p,
                gain: 1
            }), v = j(m, {
                ...p,
                gain: -1
            });
        let w = null, x = !1, y = null;
        const z = {
            get bufferSize() {
            },
            get channelCount() {
                return q.channelCount;
            },
            set channelCount(A) {
                s.channelCount = A, t.channelCount = A, q.channelCount = A, u.channelCount = A, r.channelCount = A, v.channelCount = A;
            },
            get channelCountMode() {
                return q.channelCountMode;
            },
            set channelCountMode(A) {
                s.channelCountMode = A, t.channelCountMode = A, q.channelCountMode = A, u.channelCountMode = A, r.channelCountMode = A, v.channelCountMode = A;
            },
            get channelInterpretation() {
                return q.channelInterpretation;
            },
            set channelInterpretation(A) {
                s.channelInterpretation = A, t.channelInterpretation = A, q.channelInterpretation = A, u.channelInterpretation = A, r.channelInterpretation = A, v.channelInterpretation = A;
            },
            get context() {
                return q.context;
            },
            get curve() {
                return y;
            },
            set curve(A) {
                if (null !== A && A.length < 2)
                    throw i();
                if (null === A)
                    q.curve = A, r.curve = A;
                else {
                    const B = A.length, C = new Float32Array(B + 2 - B % 2), D = new Float32Array(B + 2 - B % 2);
                    C[0] = A[0], D[0] = -A[B - 1];
                    const E = Math.ceil((B + 1) / 2), F = (B + 1) / 2 - 1;
                    for (let G = 1; G < E; G += 1) {
                        const H = G / E * F, I = Math.floor(H), J = Math.ceil(H);
                        C[G] = I === J ? A[I] : (1 - (H - I)) * A[I] + (1 - (J - H)) * A[J], D[G] = I === J ? -A[B - 1 - I] : -(1 - (H - I)) * A[B - 1 - I] - (1 - (J - H)) * A[B - 1 - J];
                    }
                    C[E] = B % 2 == 1 ? A[E - 1] : (A[E - 2] + A[E - 1]) / 2, q.curve = C, r.curve = D;
                }
                y = A, x && (D(y) && null === w ? w = B(H, s) : null !== w && (w(), w = null));
            },
            get inputs() {
                return [s];
            },
            get numberOfInputs() {
                return q.numberOfInputs;
            },
            get numberOfOutputs() {
                return q.numberOfOutputs;
            },
            get oversample() {
                return q.oversample;
            },
            set oversample(A) {
                q.oversample = A, r.oversample = A;
            },
            addEventListener: (...h) => s.addEventListener(h[0], h[1], h[2]),
            dispatchEvent: (...h) => s.dispatchEvent(h[0]),
            removeEventListener: (...h) => s.removeEventListener(h[0], h[1], h[2])
        };
        null !== n && (z.curve = n instanceof Float32Array ? n : new Float32Array(n)), o !== z.oversample && (z.oversample = o);
        return l((0, f.interceptConnections)(z, u), () => {
            s.connect(q).connect(u), s.connect(t).connect(r).connect(v).connect(u), x = !0, k(y) && (w = h(m, s));
        }, () => {
            s.disconnect(q), q.disconnect(u), s.disconnect(t), t.disconnect(r), r.disconnect(v), v.disconnect(u), x = !1, null !== w && (w(), w = null);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createNotSupportedError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'NotSupportedError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createOfflineAudioContextConstructor', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....');
    const g = { numberOfChannels: 1 }, _h = (i, j, k, l, m) => class extends i {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length;
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state;
            }
            startRendering() {
                return 'running' === this._state ? Promise.reject(k()) : (this._state = 'running', m(this.destination, this._nativeOfflineAudioContext).finally(() => {
                    this._state = null, (0, e.deactivateAudioGraph)(this);
                }));
            }
            _waitForThePromiseToSettle(n) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(n) : setTimeout(() => this._waitForThePromiseToSettle(n));
            }
            constructor(n, o, p) {
                let q;
                if ('number' == typeof n && void 0 !== o && void 0 !== p)
                    q = {
                        length: o,
                        numberOfChannels: n,
                        sampleRate: p
                    };
                else {
                    if ('object' != typeof n)
                        throw new Error('The given parameters are not valid.');
                    q = n;
                }
                const {
                        length: r,
                        numberOfChannels: s,
                        sampleRate: t
                    } = {
                        ...g,
                        ...q
                    }, u = l(s, r, t);
                j(f.testPromiseSupport, () => (0, f.testPromiseSupport)(u)) || u.addEventListener('statechange', (() => {
                    let v = 0;
                    const w = x => {
                        'running' === this._state && (v > 0 ? (u.removeEventListener('statechange', w), x.stopImmediatePropagation(), this._waitForThePromiseToSettle(x)) : v += 1);
                    };
                    return w;
                })()), super(u, s), this._length = r, this._nativeOfflineAudioContext = u, this._state = null;
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createOscillatorNodeConstructor', function () {
        return _i;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const h = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            detune: 0,
            frequency: 440,
            periodicWave: void 0,
            type: 'sine'
        }, _i = (j, k, l, m, n, o, p) => class extends j {
            get detune() {
                return this._detune;
            }
            get frequency() {
                return this._frequency;
            }
            get onended() {
                return this._onended;
            }
            set onended(q) {
                const r = 'function' == typeof q ? p(this, q) : null;
                this._nativeOscillatorNode.onended = r;
                const s = this._nativeOscillatorNode.onended;
                this._onended = null !== s && s === r ? q : s;
            }
            get type() {
                return this._nativeOscillatorNode.type;
            }
            set type(q) {
                this._nativeOscillatorNode.type = q, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null);
            }
            setPeriodicWave(q) {
                this._nativeOscillatorNode.setPeriodicWave(q), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = q);
            }
            start(q = 0) {
                if (this._nativeOscillatorNode.start(q), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = q), 'closed' !== this.context.state) {
                    (0, f.setInternalStateToActive)(this);
                    const r = () => {
                        this._nativeOscillatorNode.removeEventListener('ended', r), (0, e.isActiveAudioNode)(this) && (0, g.setInternalStateToPassive)(this);
                    };
                    this._nativeOscillatorNode.addEventListener('ended', r);
                }
            }
            stop(q = 0) {
                this._nativeOscillatorNode.stop(q), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = q);
            }
            constructor(q, r) {
                const s = n(q), t = {
                        ...h,
                        ...r
                    }, u = l(s, t), v = o(s), w = v ? m() : null, x = q.sampleRate / 2;
                super(q, !1, u, w), this._detune = k(this, v, u.detune, 153600, -153600), this._frequency = k(this, v, u.frequency, x, -x), this._nativeOscillatorNode = u, this._onended = null, this._oscillatorNodeRenderer = w, null !== this._oscillatorNodeRenderer && void 0 !== t.periodicWave && (this._oscillatorNodeRenderer.periodicWave = t.periodicWave);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createOscillatorNodeRendererFactory', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k) => () => {
        const l = new WeakMap();
        let m = null, n = null, o = null;
        return {
            set periodicWave(p) {
                m = p;
            },
            set start(p) {
                n = p;
            },
            set stop(p) {
                o = p;
            },
            render(p, q) {
                const r = l.get(q);
                return void 0 !== r ? Promise.resolve(r) : (async (s, t) => {
                    let u = i(s);
                    const v = (0, e.isOwnedByContext)(u, t);
                    if (!v) {
                        const w = {
                            channelCount: u.channelCount,
                            channelCountMode: u.channelCountMode,
                            channelInterpretation: u.channelInterpretation,
                            detune: u.detune.value,
                            frequency: u.frequency.value,
                            periodicWave: null === m ? void 0 : m,
                            type: u.type
                        };
                        u = h(t, w), null !== n && u.start(n), null !== o && u.stop(o);
                    }
                    return l.set(t, u), v ? (await w(t, s.detune, u.detune), await w(t, s.frequency, u.frequency)) : (await j(t, s.detune, u.detune), await j(t, s.frequency, u.frequency)), await k(s, t, u), u;
                })(p, q);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createPannerNodeConstructor', function () {
        return _g;
    });
    var e = b('.....');
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
        }, _g = (h, i, j, k, l, m, n) => class extends h {
            get coneInnerAngle() {
                return this._nativePannerNode.coneInnerAngle;
            }
            set coneInnerAngle(o) {
                this._nativePannerNode.coneInnerAngle = o;
            }
            get coneOuterAngle() {
                return this._nativePannerNode.coneOuterAngle;
            }
            set coneOuterAngle(o) {
                this._nativePannerNode.coneOuterAngle = o;
            }
            get coneOuterGain() {
                return this._nativePannerNode.coneOuterGain;
            }
            set coneOuterGain(o) {
                this._nativePannerNode.coneOuterGain = o;
            }
            get distanceModel() {
                return this._nativePannerNode.distanceModel;
            }
            set distanceModel(o) {
                this._nativePannerNode.distanceModel = o;
            }
            get maxDistance() {
                return this._nativePannerNode.maxDistance;
            }
            set maxDistance(o) {
                this._nativePannerNode.maxDistance = o;
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
            set panningModel(o) {
                this._nativePannerNode.panningModel = o;
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
            set refDistance(o) {
                this._nativePannerNode.refDistance = o;
            }
            get rolloffFactor() {
                return this._nativePannerNode.rolloffFactor;
            }
            set rolloffFactor(o) {
                this._nativePannerNode.rolloffFactor = o;
            }
            constructor(o, p) {
                const q = l(o), r = {
                        ...f,
                        ...p
                    }, s = j(q, r), t = m(q);
                super(o, !1, s, t ? k() : null), this._nativePannerNode = s, this._orientationX = i(this, t, s.orientationX, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationY = i(this, t, s.orientationY, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationZ = i(this, t, s.orientationZ, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._positionX = i(this, t, s.positionX, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._positionY = i(this, t, s.positionY, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), this._positionZ = i(this, t, s.positionZ, e.MOST_POSITIVE_SINGLE_FLOAT, e.MOST_NEGATIVE_SINGLE_FLOAT), n(this, 1);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createPannerNodeRendererFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l, m, n, o, p, q) => () => {
        const r = new WeakMap();
        let s = null;
        return {
            render(t, u) {
                const v = r.get(u);
                return void 0 !== v ? Promise.resolve(v) : (async (w, x) => {
                    let y = null, z = m(w);
                    const A = {
                            channelCount: z.channelCount,
                            channelCountMode: z.channelCountMode,
                            channelInterpretation: z.channelInterpretation
                        }, B = {
                            ...A,
                            coneInnerAngle: z.coneInnerAngle,
                            coneOuterAngle: z.coneOuterAngle,
                            coneOuterGain: z.coneOuterGain,
                            distanceModel: z.distanceModel,
                            maxDistance: z.maxDistance,
                            panningModel: z.panningModel,
                            refDistance: z.refDistance,
                            rolloffFactor: z.rolloffFactor
                        }, C = (0, f.isOwnedByContext)(z, x);
                    if ('bufferSize' in z)
                        y = k(x, {
                            ...A,
                            gain: 1
                        });
                    else if (!C) {
                        const D = {
                            ...B,
                            orientationX: z.orientationX.value,
                            orientationY: z.orientationY.value,
                            orientationZ: z.orientationZ.value,
                            positionX: z.positionX.value,
                            positionY: z.positionY.value,
                            positionZ: z.positionZ.value
                        };
                        z = l(x, D);
                    }
                    if (r.set(x, null === y ? z : y), null !== y) {
                        if (null === s) {
                            if (null === n)
                                throw new Error('Missing the native OfflineAudioContext constructor.');
                            const E = new n(6, w.context.length, x.sampleRate), F = i(E, {
                                    channelCount: 1,
                                    channelCountMode: 'explicit',
                                    channelInterpretation: 'speakers',
                                    numberOfInputs: 6
                                });
                            F.connect(E.destination), s = (async () => {
                                const G = await Promise.all([
                                    w.orientationX,
                                    w.orientationY,
                                    w.orientationZ,
                                    w.positionX,
                                    w.positionY,
                                    w.positionZ
                                ].map(async (H, I) => {
                                    const J = j(E, {
                                        channelCount: 1,
                                        channelCountMode: 'explicit',
                                        channelInterpretation: 'discrete',
                                        offset: 0 === I ? 1 : 0
                                    });
                                    return await o(E, H, J.offset), J;
                                }));
                                for (let H = 0; H < 6; H += 1)
                                    G[H].connect(F, 0, H), G[H].start(0);
                                return q(H);
                            })();
                        }
                        const G = await s, H = F(x, {
                                ...A,
                                gain: 1
                            });
                        await p(w, x, H);
                        const I = [];
                        for (let J = 0; J < G.numberOfChannels; J += 1)
                            I.push(G.getChannelData(J));
                        let K = [
                                I[0][0],
                                I[1][0],
                                I[2][0]
                            ], L = [
                                I[3][0],
                                I[4][0],
                                I[5][0]
                            ], M = F(x, {
                                ...A,
                                gain: 1
                            }), N = l(x, {
                                ...B,
                                orientationX: K[0],
                                orientationY: K[1],
                                orientationZ: K[2],
                                positionX: L[0],
                                positionY: L[1],
                                positionZ: L[2]
                            });
                        H.connect(M).connect(N.inputs[0]), N.connect(y);
                        for (let O = 128; O < G.length; O += 128) {
                            const P = [
                                    I[0][O],
                                    I[1][O],
                                    I[2][O]
                                ], Q = [
                                    I[3][O],
                                    I[4][O],
                                    I[5][O]
                                ];
                            if (P.some((R, S) => R !== K[S]) || Q.some((R, S) => R !== L[S])) {
                                K = P, L = Q;
                                const R = O / x.sampleRate;
                                M.gain.setValueAtTime(0, R), M = F(x, {
                                    ...A,
                                    gain: 0
                                }), N = l(x, {
                                    ...B,
                                    orientationX: K[0],
                                    orientationY: K[1],
                                    orientationZ: K[2],
                                    positionX: L[0],
                                    positionY: L[1],
                                    positionZ: L[2]
                                }), M.gain.setValueAtTime(1, R), H.connect(M).connect(N.inputs[0]), N.connect(y);
                            }
                        }
                        return y;
                    }
                    return C ? (await P(x, w.orientationX, z.orientationX), await P(x, w.orientationY, z.orientationY), await P(x, w.orientationZ, z.orientationZ), await P(x, w.positionX, z.positionX), await P(x, w.positionY, z.positionY), await P(x, w.positionZ, z.positionZ)) : (await o(x, w.orientationX, z.orientationX), await o(x, w.orientationY, z.orientationY), await o(x, w.orientationZ, z.orientationZ), await o(x, w.positionX, z.positionX), await o(x, w.positionY, z.positionY), await o(x, w.positionZ, z.positionZ)), (0, H.isNativeAudioNodeFaker)(z) ? await p(w, x, z.inputs[0]) : await p(w, x, z), z;
                })(t, u);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createPeriodicWaveConstructor', function () {
        return _f;
    });
    const e = { disableNormalization: !1 }, _f = (g, h, i, j) => class i {
            static [Symbol.hasInstance](k) {
                return null !== k && 'object' == typeof k && Object.getPrototypeOf(k) === i.prototype || i.has(k);
            }
            constructor(k, l) {
                const m = h(k), n = j({
                        ...e,
                        ...l
                    }), o = g(m, n);
                return i.add(o), o;
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createRenderAutomation', function () {
        return _e;
    });
    const _e = (f, g) => (h, i, j) => (f(i).replay(j), g(i, h, j));
}), b.register('.....', function (c, d) {
    a(c.exports, 'createRenderInputsOfAudioNode', function () {
        return _e;
    });
    const _e = (f, g, h) => async (i, j, k) => {
        const l = f(i);
        await Promise.all(l.activeInputs.map((m, n) => Array.from(m).map(async ([o, p]) => {
            const q = g(o), r = await q.render(o, j), s = i.context.destination;
            h(o) || i === s && h(i) || r.connect(k, p, n);
        })).reduce((m, n) => [
            ...m,
            ...n
        ], []));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createRenderInputsOfAudioParam', function () {
        return _e;
    });
    const _e = (f, g, h) => async (i, j, k) => {
        const l = g(i);
        await Promise.all(Array.from(l.activeInputs).map(async ([m, n]) => {
            const o = f(m), p = await o.render(m, j);
            h(m) || p.connect(k, n);
        }));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createRenderNativeOfflineAudioContext', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j) => k => g(e.testPromiseSupport, () => (0, e.testPromiseSupport)(k)) ? Promise.resolve(g(j, j)).then(l => {
        if (!l) {
            const m = i(k, 512, 0, 1);
            k.oncomplete = () => {
                m.onaudioprocess = null, m.disconnect();
            }, m.onaudioprocess = () => k.currentTime, m.connect(k.destination);
        }
        return k.startRendering();
    }) : new Promise(l => {
        const m = h(k, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        k.oncomplete = n => {
            m.disconnect(), l(n.renderedBuffer);
        }, m.connect(k.destination), k.startRendering();
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'createSetActiveAudioWorkletNodeInputs', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        f.set(g, h);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createSetAudioNodeTailTime', function () {
        return _e;
    });
    const _e = f => (g, h) => f.set(g, h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'createStartRendering', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h, i, j, k, l, m, n) => (o, p) => i(o).render(o, p).then(() => Promise.all(Array.from(j(p)).map(q => i(q).render(q, p)))).then(() => k(p)).then(q => ('function' != typeof q.copyFromChannel ? (m(q), (0, e.wrapAudioBufferGetChannelDataMethod)(q)) : h(l, () => l(q)) || n(q), g.add(q), q));
}), b.register('.....', function (c, d) {
    a(c.exports, 'createStereoPannerNodeConstructor', function () {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'explicit',
            channelInterpretation: 'speakers',
            pan: 0
        }, _f = (g, h, i, j, k, l) => class extends g {
            get pan() {
                return this._pan;
            }
            constructor(m, n) {
                const o = k(m), p = {
                        ...e,
                        ...n
                    }, q = i(o, p), r = l(o);
                super(m, !1, q, r ? j() : null), this._pan = h(this, r, q.pan);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createStereoPannerNodeRendererFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j, k, l) => () => {
        const m = new WeakMap();
        return {
            render(n, o) {
                const p = m.get(o);
                return void 0 !== p ? Promise.resolve(p) : (async (q, r) => {
                    let s = j(q);
                    const t = (0, f.isOwnedByContext)(s, r);
                    if (!t) {
                        const u = {
                            channelCount: s.channelCount,
                            channelCountMode: s.channelCountMode,
                            channelInterpretation: s.channelInterpretation,
                            pan: s.pan.value
                        };
                        s = i(r, u);
                    }
                    return m.set(r, s), t ? await u(r, q.pan, s.pan) : await k(r, q.pan, s.pan), (0, e.isNativeAudioNodeFaker)(s) ? await l(q, r, s.inputs[0]) : await l(q, r, s), s;
                })(n, o);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioBufferConstructorSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        try {
            new f({
                length: 1,
                sampleRate: 44100
            });
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioBufferCopyChannelMethodsSubarraySupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        const g = new f(1, 1, 44100).createBuffer(1, 1, 44100);
        if (void 0 === g.copyToChannel)
            return !0;
        const h = new Float32Array(2);
        try {
            g.copyFromChannel(h, 0, 0);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioContextCloseMethodSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        if (void 0 !== f.prototype && void 0 !== f.prototype.close)
            return !0;
        const g = new f(), h = void 0 !== g.close;
        try {
            g.close();
        } catch {
        }
        return h;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioContextDecodeAudioDataMethodTypeErrorSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return Promise.resolve(!1);
        const g = new f(1, 1, 44100);
        return new Promise(h => {
            let i = !0;
            const j = k => {
                i && (i = !1, g.startRendering(), h(k instanceof TypeError));
            };
            let k;
            try {
                k = g.decodeAudioData(null, () => {
                }, j);
            } catch (h) {
                j(h);
            }
            void 0 !== k && k.catch(j);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioContextOptionsSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        let g;
        try {
            g = new f({ latencyHint: 'balanced' });
        } catch {
            return !1;
        }
        return g.close(), !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioNodeConnectMethodSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        const g = new f(1, 1, 44100).createGain(), h = g.connect(g) === g;
        return g.disconnect(g), h;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioWorkletProcessorNoOutputsSupport', function () {
        return _e;
    });
    const _e = (f, g) => async () => {
        if (null === f)
            return !0;
        if (null === g)
            return !1;
        const h = new Blob(['let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'], { type: 'application/javascript; charset=utf-8' }), i = new MessageChannel(), j = new g(1, 128, 44100), k = URL.createObjectURL(h);
        let l = !1;
        try {
            await j.audioWorklet.addModule(k);
            const m = new f(j, 'a', { numberOfOutputs: 0 }), n = j.createOscillator();
            await new Promise(o => {
                m.port.onmessage = () => o(), m.port.postMessage(i.port2, [i.port2]);
            }), m.port.onmessage = () => l = !0, n.connect(m), n.start(0), await j.startRendering(), l = await new Promise(o => {
                i.port1.onmessage = ({data: p}) => o(1 === p), i.port1.postMessage(0);
            });
        } catch {
        } finally {
            i.port1.close(), URL.revokeObjectURL(k);
        }
        return l;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestAudioWorkletProcessorPostMessageSupport', function () {
        return _e;
    });
    const _e = (f, g) => async () => {
        if (null === f)
            return !0;
        if (null === g)
            return !1;
        const h = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], { type: 'application/javascript; charset=utf-8' }), i = new g(1, 128, 44100), j = URL.createObjectURL(h);
        let k = !1, l = !1;
        try {
            await i.audioWorklet.addModule(j);
            const m = new f(i, 'a', { numberOfOutputs: 0 }), n = i.createOscillator();
            m.port.onmessage = () => k = !0, m.onprocessorerror = () => l = !0, n.connect(m), n.start(0), await i.startRendering();
        } catch {
        } finally {
            URL.revokeObjectURL(j);
        }
        return k && !l;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestChannelMergerNodeChannelCountSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        const g = new f(1, 1, 44100).createChannelMerger();
        if ('max' === g.channelCountMode)
            return !0;
        try {
            g.channelCount = 2;
        } catch {
            return !0;
        }
        return !1;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestConstantSourceNodeAccurateSchedulingSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        const g = new f(1, 1, 44100);
        if (void 0 === g.createConstantSource)
            return !0;
        return g.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestConvolverNodeBufferReassignabilitySupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        const g = new f(1, 1, 44100), h = g.createConvolver();
        h.buffer = g.createBuffer(1, 1, g.sampleRate);
        try {
            h.buffer = g.createBuffer(1, 1, g.sampleRate);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestConvolverNodeChannelCountSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        const g = new f(1, 1, 44100).createConvolver();
        try {
            g.channelCount = 1;
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestIsSecureContextSupport', function () {
        return _e;
    });
    const _e = f => () => null !== f && f.hasOwnProperty('isSecureContext');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return !1;
        const g = new f();
        try {
            return g.createMediaStreamSource(new MediaStream()), !1;
        } catch (f) {
            return !0;
        } finally {
            g.close();
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestOfflineAudioContextCurrentTimeSupport', function () {
        return _e;
    });
    const _e = (f, g) => () => {
        if (null === g)
            return Promise.resolve(!1);
        const h = new g(1, 1, 44100), i = f(h, {
                channelCount: 1,
                channelCountMode: 'explicit',
                channelInterpretation: 'discrete',
                gain: 0
            });
        return new Promise(j => {
            h.oncomplete = () => {
                i.disconnect(), j(0 !== h.currentTime);
            }, h.startRendering();
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createTestStereoPannerNodeDefaultValueSupport', function () {
        return _e;
    });
    const _e = f => () => {
        if (null === f)
            return Promise.resolve(!1);
        const g = new f(1, 1, 44100);
        if (void 0 === g.createStereoPanner)
            return Promise.resolve(!0);
        if (void 0 === g.createConstantSource)
            return Promise.resolve(!0);
        const h = g.createConstantSource(), i = g.createStereoPanner();
        return h.channelCount = 1, h.offset.value = 1, i.channelCount = 1, h.start(), h.connect(i).connect(g.destination), g.startRendering().then(j => 1 !== j.getChannelData(0)[0]);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createUnknownError', function () {
        return _e;
    });
    const _e = () => new DOMException('', 'UnknownError');
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWaveShaperNodeConstructor', function () {
        return _f;
    });
    const e = {
            channelCount: 2,
            channelCountMode: 'max',
            channelInterpretation: 'speakers',
            curve: null,
            oversample: 'none'
        }, _f = (g, h, i, j, k, l, m) => class extends g {
            get curve() {
                return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve;
            }
            set curve(n) {
                if (null === n)
                    this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([
                        0,
                        0
                    ]);
                else {
                    if (n.length < 2)
                        throw h();
                    this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = n;
                }
            }
            get oversample() {
                return this._nativeWaveShaperNode.oversample;
            }
            set oversample(n) {
                this._nativeWaveShaperNode.oversample = n;
            }
            constructor(n, o) {
                const p = k(n), q = {
                        ...e,
                        ...o
                    }, r = i(p, q);
                super(n, !0, r, l(p) ? j() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = r, m(this, 1);
            }
        };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWaveShaperNodeRendererFactory', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    const _g = (h, i, j) => () => {
        const k = new WeakMap();
        return {
            render(l, m) {
                const n = k.get(m);
                return void 0 !== n ? Promise.resolve(n) : (async (o, p) => {
                    let q = i(o);
                    if (!(0, f.isOwnedByContext)(q, p)) {
                        const r = {
                            channelCount: q.channelCount,
                            channelCountMode: q.channelCountMode,
                            channelInterpretation: q.channelInterpretation,
                            curve: q.curve,
                            oversample: q.oversample
                        };
                        q = h(p, r);
                    }
                    return k.set(p, q), (0, e.isNativeAudioNodeFaker)(q) ? await j(o, p, q.inputs[0]) : await j(o, p, q), q;
                })(l, m);
            }
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWindow', function () {
        return _e;
    });
    const _e = () => 'undefined' == typeof window ? null : window;
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWrapAudioBufferCopyChannelMethods', function () {
        return _e;
    });
    const _e = (f, g) => h => {
        h.copyFromChannel = (i, j, k = 0) => {
            const l = f(k), m = f(j);
            if (m >= h.numberOfChannels)
                throw g();
            const n = h.length, o = h.getChannelData(m), p = i.length;
            for (let q = l < 0 ? -l : 0; q + l < n && q < p; q += 1)
                i[q] = o[q + l];
        }, h.copyToChannel = (i, j, k = 0) => {
            const l = f(k), m = f(j);
            if (m >= h.numberOfChannels)
                throw g();
            const n = h.length, o = h.getChannelData(m), p = i.length;
            for (let q = l < 0 ? -l : 0; q + l < n && q < p; q += 1)
                o[q + l] = i[q];
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWrapAudioBufferCopyChannelMethodsOutOfBounds', function () {
        return _e;
    });
    const _e = f => g => {
        var h, i;
        g.copyFromChannel = (h = g.copyFromChannel, (j, k, l = 0) => {
            const m = f(l), n = f(k);
            if (m < g.length)
                return h.call(g, j, n, m);
        }), g.copyToChannel = (i = g.copyToChannel, (j, k, l = 0) => {
            const m = f(l), n = f(k);
            if (m < g.length)
                return i.call(g, j, n, m);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer', function () {
        return _e;
    });
    const _e = f => (g, h) => {
        const i = h.createBuffer(1, 1, 44100);
        null === g.buffer && (g.buffer = i), f(g, 'buffer', j => () => {
            const k = j.call(g);
            return k === i ? null : k;
        }, j => k => j.call(g, null === k ? i : k));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWrapChannelMergerNode', function () {
        return _e;
    });
    const _e = (f, g) => (h, i) => {
        i.channelCount = 1, i.channelCountMode = 'explicit', Object.defineProperty(i, 'channelCount', {
            get: () => 1,
            set: () => {
                throw f();
            }
        }), Object.defineProperty(i, 'channelCountMode', {
            get: () => 'explicit',
            set: () => {
                throw f();
            }
        });
        const j = h.createBufferSource();
        g(i, () => {
            const k = i.numberOfInputs;
            for (let l = 0; l < k; l += 1)
                j.connect(i, 0, l);
        }, () => j.disconnect(i));
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'getFirstSample', function () {
        return _e;
    });
    const _e = (f, g, h) => void 0 === f.copyFromChannel ? f.getChannelData(h)[0] : (f.copyFromChannel(g, h), g[0]);
}), b.register('.....', function (c, d) {
    a(c.exports, 'isDCCurve', function () {
        return _e;
    });
    const _e = f => {
        if (null === f)
            return !1;
        const g = f.length;
        return g % 2 != 0 ? 0 !== f[Math.floor(g / 2)] : f[g / 2 - 1] + f[g / 2] !== 0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'overwriteAccessors', function () {
        return _e;
    });
    const _e = (f, g, h, i) => {
        let j = f;
        for (; !j.hasOwnProperty(g);)
            j = Object.getPrototypeOf(j);
        const {
            get: k,
            set: l
        } = Object.getOwnPropertyDescriptor(j, g);
        Object.defineProperty(f, g, {
            get: h(k),
            set: i(l)
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'sanitizeAudioWorkletNodeOptions', function () {
        return _e;
    });
    const _e = f => ({
        ...f,
        outputChannelCount: void 0 !== f.outputChannelCount ? f.outputChannelCount : 1 === f.numberOfInputs && 1 === f.numberOfOutputs ? [f.channelCount] : Array.from({ length: f.numberOfOutputs }, () => 1)
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'sanitizeChannelSplitterOptions', function () {
        return _e;
    });
    const _e = f => ({
        ...f,
        channelCount: f.numberOfOutputs
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'sanitizePeriodicWaveOptions', function () {
        return _e;
    });
    const _e = f => {
        const {
            imag: g,
            real: h
        } = f;
        return void 0 === g ? void 0 === h ? {
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
            imag: Array.from(h, () => 0),
            real: h
        } : void 0 === h ? {
            ...f,
            imag: g,
            real: Array.from(g, () => 0)
        } : {
            ...f,
            imag: g,
            real: h
        };
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'setValueAtTimeUntilPossible', function () {
        return _e;
    });
    const _e = (f, g, h) => {
        try {
            f.setValueAtTime(g, h);
        } catch (o) {
            if (9 !== o.code)
                throw o;
            _e(f, g, h + 1e-7);
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport', function () {
        return _e;
    });
    const _e = f => {
        const g = f.createBufferSource();
        g.start();
        try {
            g.start();
        } catch {
            return !0;
        }
        return !1;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioBufferSourceNodeStartMethodOffsetClampingSupport', function () {
        return _e;
    });
    const _e = f => {
        const g = f.createBufferSource(), h = f.createBuffer(1, 1, 44100);
        g.buffer = h;
        try {
            g.start(0, 1);
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioBufferSourceNodeStopMethodNullifiedBufferSupport', function () {
        return _e;
    });
    const _e = f => {
        const g = f.createBufferSource();
        g.start();
        try {
            g.stop();
        } catch {
            return !1;
        }
        return !0;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioScheduledSourceNodeStartMethodNegativeParametersSupport', function () {
        return _e;
    });
    const _e = f => {
        const g = f.createOscillator();
        try {
            g.start(-1);
        } catch (f) {
            return f instanceof RangeError;
        }
        return !1;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport', function () {
        return _e;
    });
    const _e = f => {
        const g = f.createBuffer(1, 1, 44100), h = f.createBufferSource();
        h.buffer = g, h.start(), h.stop();
        try {
            return h.stop(), !0;
        } catch {
            return !1;
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioScheduledSourceNodeStopMethodNegativeParametersSupport', function () {
        return _e;
    });
    const _e = f => {
        const g = f.createOscillator();
        try {
            g.stop(-1);
        } catch (f) {
            return f instanceof RangeError;
        }
        return !1;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testAudioWorkletNodeOptionsClonability', function () {
        return _e;
    });
    const _e = f => {
        const {
            port1: g,
            port2: h
        } = new MessageChannel();
        try {
            g.postMessage(f);
        } finally {
            g.close(), h.close();
        }
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'testDomExceptionConstructorSupport', function () {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'testTransferablesSupport', function () {
        return _e;
    });
    const _e = () => new Promise(f => {
        const g = new ArrayBuffer(0), {
                port1: h,
                port2: i
            } = new MessageChannel();
        h.onmessage = ({data: j}) => f(null !== j), i.postMessage(g, [g]);
    });
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAudioBufferSourceNodeStartMethodOffsetClamping', function () {
        return _e;
    });
    const _e = f => {
        var g;
        f.start = (g = f.start, (h = 0, i = 0, j) => {
            const k = f.buffer, l = null === k ? i : Math.min(k.duration, i);
            null !== k && l > k.duration - 0.5 / f.context.sampleRate ? g.call(f, h, 0, 0) : g.call(f, h, l, j);
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls', function () {
        return _f;
    });
    var e = b('.....');
    const _f = (g, h) => {
        const i = h.createGain();
        g.connect(i);
        const j = (_f = g.disconnect, () => {
            _f.call(g, i), g.removeEventListener('ended', j);
        });
        var k;
        g.addEventListener('ended', j), (0, e.interceptConnections)(g, i), g.stop = (l => {
            let m = !1;
            return (n = 0) => {
                if (m)
                    try {
                        l.call(g, n);
                    } catch {
                        i.gain.setValueAtTime(0, n);
                    }
                else
                    l.call(g, n), m = !0;
            };
        })(g.stop);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapEventListener', function () {
        return _e;
    });
    const _e = (f, g) => h => {
        const i = { value: f };
        return Object.defineProperties(h, {
            currentTarget: i,
            target: i
        }), 'function' == typeof g ? g.call(f, h) : g.handleEvent.call(f, h);
    };
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
});
b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWebmPcmMediaRecorderFactory', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....'), g = b('.....');
    const _h = (i, j, k, l, m) => (n, o, p, q) => {
        const r = p.getAudioTracks(), s = [], t = 0 === r.length ? void 0 : r[0].getSettings().channelCount, u = new o(p, { mimeType: 'audio/webm;codecs=pcm' }), v = 0 === r.length ? void 0 : r[0].getSettings().sampleRate;
        let w = null, x = () => {
            };
        const y = z => {
                n.dispatchEvent(i('dataavailable', { data: new Blob(z, { type: q }) }));
            }, z = async (A, B) => {
                const C = await (0, e.encode)(A, B);
                'inactive' === u.state ? s.push(...C) : (y(C), w = z(A, B));
            }, A = () => {
                'inactive' !== u.state && (null !== w && (w.catch(() => {
                }), w = null), x(), x = () => {
                }, u.stop());
            };
        return u.addEventListener('error', () => {
            A(), n.dispatchEvent(new ErrorEvent('error', { error: j() }));
        }), u.addEventListener('start', () => n.dispatchEvent(new Event('start'))), {
            get mimeType() {
                return q;
            },
            get state() {
                return u.state;
            },
            pause: () => u.pause(),
            resume: () => u.resume(),
            start(B) {
                if (p.getVideoTracks().length > 0)
                    throw k();
                if ('inactive' === u.state) {
                    if (void 0 === v)
                        throw new Error('The sampleRate is not defined.');
                    let C = !1, D = !1, E = 0, F = (0, e.instantiate)(q, v);
                    x = () => {
                        D = !0;
                    };
                    const G = (0, g.on)(u, 'dataavailable')(({data: H}) => {
                        E += 1, F = F.then(async ({
                            dataView: I = null,
                            elementType: J = null,
                            encoderId: K,
                            port: L
                        }) => {
                            const M = await H.arrayBuffer();
                            E -= 1;
                            const N = null === I ? new (0, f.MultiBufferDataView)([M]) : new (0, f.MultiBufferDataView)([
                                ...I.buffers,
                                M
                            ], I.byteOffset);
                            if (!C && 'recording' === u.state && !D) {
                                const O = m(N, 0);
                                if (null === O)
                                    return {
                                        dataView: N,
                                        elementType: J,
                                        encoderId: K,
                                        port: L
                                    };
                                const {value: P} = O;
                                if (172351395 !== P)
                                    return {
                                        dataView: I,
                                        elementType: J,
                                        encoderId: K,
                                        port: L
                                    };
                                C = !0;
                            }
                            const {
                                    currentElementType: Q,
                                    offset: R,
                                    contents: S
                                } = l(N, J, t), T = R < N.byteLength ? new (0, f.MultiBufferDataView)(N.buffers, N.byteOffset + R) : null;
                            return S.forEach(U => L.postMessage(U, U.map(({buffer: V}) => V))), 0 !== E || 'inactive' !== u.state && !P || ((0, e.encode)(K, null).then(U => {
                                y([
                                    ...s,
                                    ...U
                                ]), s.length = 0, n.dispatchEvent(new Event('stop'));
                            }), L.postMessage([]), L.close(), G()), {
                                dataView: T,
                                elementType: Q,
                                encoderId: K,
                                port: L
                            };
                        });
                    });
                    void 0 !== B && F.then(({encoderId: H}) => w = z(H, B));
                }
                u.start(100);
            },
            stop: A
        };
    };
}), b.register('.....', function (c, d) {
    c.exports, function (e, f, g, h) {
        function i(j) {
            return j && 'object' == typeof j && 'default' in j ? j : { default: j };
        }
        var j = i(f), k = i(g), l = i(h);
        function m(n, o) {
            var p = 'undefined' != typeof Symbol && n[Symbol.iterator] || n['@@iterator'];
            if (!p) {
                if (Array.isArray(n) || (p = _t(n)) || o && n && 'number' == typeof n.length) {
                    p && (n = p);
                    var q = 0, r = function () {
                        };
                    return {
                        s: i,
                        n: function () {
                            return q >= n.length ? { done: !0 } : {
                                done: !1,
                                value: n[q++]
                            };
                        },
                        e: function (s) {
                            throw s;
                        },
                        f: i
                    };
                }
                throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
            }
            var s, t = !0, u = !1;
            return {
                s: function () {
                    p = p.call(n);
                },
                n: function () {
                    var v = p.next();
                    return t = v.done, v;
                },
                e: function (v) {
                    u = !0, s = v;
                },
                f: function () {
                    try {
                        t || null == p.return || p.return();
                    } finally {
                        if (u)
                            throw s;
                    }
                }
            };
        }
        function _t(u, v) {
            if (u) {
                if ('string' == typeof u)
                    return _v(u, v);
                var w = Object.prototype.toString.call(u).slice(8, -1);
                return 'Object' === w && u.constructor && (w = u.constructor.name), 'Map' === w || 'Set' === w ? Array.from(u) : 'Arguments' === w || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? _v(u, v) : void 0;
            }
        }
        function _v(w, x) {
            (null == x || x > w.length) && (x = w.length);
            for (var y = 0, z = new Array(x); y < x; y++)
                z[y] = w[y];
            return z;
        }
        var y = function () {
            function z(A) {
                var B = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, C = arguments.length > 2 ? arguments[2] : void 0;
                if (t.default(this, z), B < 0 || void 0 !== C && C < 0)
                    throw new RangeError();
                var D = A.reduce(function (E, F) {
                    return E + F.byteLength;
                }, 0);
                if (B > D || void 0 !== C && B + C > D)
                    throw new RangeError();
                var E, F = [], G = void 0 === C ? D - B : C, H = [], I = 0, J = B, K = m(A);
                try {
                    for (K.s(); !(E = K.n()).done;) {
                        var L = E.value;
                        if (0 === H.length)
                            if (L.byteLength > J) {
                                var M = (I = L.byteLength - J) > G ? G : I;
                                F.push(new DataView(L, J, M)), H.push(L);
                            } else
                                J -= L.byteLength;
                        else if (I < G) {
                            var N = (I += L.byteLength) > G ? L.byteLength - I + G : L.byteLength;
                            F.push(new DataView(L, 0, N)), H.push(L);
                        }
                    }
                } catch (z) {
                    K.e(z);
                } finally {
                    K.f();
                }
                this._buffers = H, this._byteLength = G, this._byteOffset = J, this._dataViews = F, this._internalBuffer = new DataView(new ArrayBuffer(8));
            }
            return F.default(z, [
                {
                    key: 'buffers',
                    get: function () {
                        return this._buffers;
                    }
                },
                {
                    key: 'byteLength',
                    get: function () {
                        return this._byteLength;
                    }
                },
                {
                    key: 'byteOffset',
                    get: function () {
                        return this._byteOffset;
                    }
                },
                {
                    key: 'getFloat32',
                    value: function (N, O) {
                        return this._internalBuffer.setUint8(0, this.getUint8(N + 0)), this._internalBuffer.setUint8(1, this.getUint8(N + 1)), this._internalBuffer.setUint8(2, this.getUint8(N + 2)), this._internalBuffer.setUint8(3, this.getUint8(N + 3)), this._internalBuffer.getFloat32(0, O);
                    }
                },
                {
                    key: 'getFloat64',
                    value: function (N, O) {
                        return this._internalBuffer.setUint8(0, this.getUint8(N + 0)), this._internalBuffer.setUint8(1, this.getUint8(N + 1)), this._internalBuffer.setUint8(2, this.getUint8(N + 2)), this._internalBuffer.setUint8(3, this.getUint8(N + 3)), this._internalBuffer.setUint8(4, this.getUint8(N + 4)), this._internalBuffer.setUint8(5, this.getUint8(N + 5)), this._internalBuffer.setUint8(6, this.getUint8(N + 6)), this._internalBuffer.setUint8(7, this.getUint8(N + 7)), this._internalBuffer.getFloat64(0, O);
                    }
                },
                {
                    key: 'getInt16',
                    value: function (N, O) {
                        return this._internalBuffer.setUint8(0, this.getUint8(N + 0)), this._internalBuffer.setUint8(1, this.getUint8(N + 1)), this._internalBuffer.getInt16(0, O);
                    }
                },
                {
                    key: 'getInt32',
                    value: function (N, O) {
                        return this._internalBuffer.setUint8(0, this.getUint8(N + 0)), this._internalBuffer.setUint8(1, this.getUint8(N + 1)), this._internalBuffer.setUint8(2, this.getUint8(N + 2)), this._internalBuffer.setUint8(3, this.getUint8(N + 3)), this._internalBuffer.getInt32(0, O);
                    }
                },
                {
                    key: 'getInt8',
                    value: function (N) {
                        var O = this._findDataViewWithOffset(N), P = E.default(O, 2), Q = P[0], R = P[1];
                        return Q.getInt8(N - R);
                    }
                },
                {
                    key: 'getUint16',
                    value: function (N, O) {
                        return this._internalBuffer.setUint8(0, this.getUint8(N + 0)), this._internalBuffer.setUint8(1, this.getUint8(N + 1)), this._internalBuffer.getUint16(0, O);
                    }
                },
                {
                    key: 'getUint32',
                    value: function (N, O) {
                        return this._internalBuffer.setUint8(0, this.getUint8(N + 0)), this._internalBuffer.setUint8(1, this.getUint8(N + 1)), this._internalBuffer.setUint8(2, this.getUint8(N + 2)), this._internalBuffer.setUint8(3, this.getUint8(N + 3)), this._internalBuffer.getUint32(0, O);
                    }
                },
                {
                    key: 'getUint8',
                    value: function (N) {
                        var O = this._findDataViewWithOffset(N), P = E.default(O, 2), Q = P[0], R = P[1];
                        return Q.getUint8(N - R);
                    }
                },
                {
                    key: 'setFloat32',
                    value: function (N, O, P) {
                        this._internalBuffer.setFloat32(0, O, P), this.setUint8(N, this._internalBuffer.getUint8(0)), this.setUint8(N + 1, this._internalBuffer.getUint8(1)), this.setUint8(N + 2, this._internalBuffer.getUint8(2)), this.setUint8(N + 3, this._internalBuffer.getUint8(3));
                    }
                },
                {
                    key: 'setFloat64',
                    value: function (N, O, P) {
                        this._internalBuffer.setFloat64(0, O, P), this.setUint8(N, this._internalBuffer.getUint8(0)), this.setUint8(N + 1, this._internalBuffer.getUint8(1)), this.setUint8(N + 2, this._internalBuffer.getUint8(2)), this.setUint8(N + 3, this._internalBuffer.getUint8(3)), this.setUint8(N + 4, this._internalBuffer.getUint8(4)), this.setUint8(N + 5, this._internalBuffer.getUint8(5)), this.setUint8(N + 6, this._internalBuffer.getUint8(6)), this.setUint8(N + 7, this._internalBuffer.getUint8(7));
                    }
                },
                {
                    key: 'setInt16',
                    value: function (N, O, P) {
                        this._internalBuffer.setInt16(0, O, P), this.setUint8(N, this._internalBuffer.getUint8(0)), this.setUint8(N + 1, this._internalBuffer.getUint8(1));
                    }
                },
                {
                    key: 'setInt32',
                    value: function (N, O, P) {
                        this._internalBuffer.setInt32(0, O, P), this.setUint8(N, this._internalBuffer.getUint8(0)), this.setUint8(N + 1, this._internalBuffer.getUint8(1)), this.setUint8(N + 2, this._internalBuffer.getUint8(2)), this.setUint8(N + 3, this._internalBuffer.getUint8(3));
                    }
                },
                {
                    key: 'setInt8',
                    value: function (N, O) {
                        var P = this._findDataViewWithOffset(N), Q = E.default(P, 2), R = Q[0], S = Q[1];
                        R.setInt8(N - S, O);
                    }
                },
                {
                    key: 'setUint16',
                    value: function (N, O, P) {
                        this._internalBuffer.setUint16(0, O, P), this.setUint8(N, this._internalBuffer.getUint8(0)), this.setUint8(N + 1, this._internalBuffer.getUint8(1));
                    }
                },
                {
                    key: 'setUint32',
                    value: function (N, O, P) {
                        this._internalBuffer.setUint32(0, O, P), this.setUint8(N, this._internalBuffer.getUint8(0)), this.setUint8(N + 1, this._internalBuffer.getUint8(1)), this.setUint8(N + 2, this._internalBuffer.getUint8(2)), this.setUint8(N + 3, this._internalBuffer.getUint8(3));
                    }
                },
                {
                    key: 'setUint8',
                    value: function (N, O) {
                        var P = this._findDataViewWithOffset(N), Q = E.default(P, 2), R = Q[0], S = Q[1];
                        R.setUint8(N - S, O);
                    }
                },
                {
                    key: '_findDataViewWithOffset',
                    value: function (N) {
                        var O, P = 0, Q = m(this._dataViews);
                        try {
                            for (Q.s(); !(O = Q.n()).done;) {
                                var R = O.value, S = P + R.byteLength;
                                if (N >= P && N < S)
                                    return [
                                        R,
                                        P
                                    ];
                                P = S;
                            }
                        } catch (N) {
                            Q.e(N);
                        } finally {
                            Q.f();
                        }
                        throw new RangeError();
                    }
                }
            ]), z;
        }();
        e.MultiBufferDataView = y, Object.defineProperty(e, '__esModule', { value: !0 });
    }(c.exports, b('.....'), b('.....'), b('.....'));
}), b.register('.....', function (c, d) {
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....');
    c.exports = function (i, j) {
        return e(i) || f(i, j) || g(i, j) || h();
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e) {
        if (Array.isArray(e))
            return e;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e, f) {
        var g = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
        if (null != g) {
            var h, i, j, k, l = [], m = !0, n = !1;
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
}), b.register('.....', function (c, d) {
    var e = b('.....');
    c.exports = function (f, g) {
        if (f) {
            if ('string' == typeof f)
                return e(f, g);
            var h = Object.prototype.toString.call(f).slice(8, -1);
            return 'Object' === h && f.constructor && (h = f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? e(f, g) : void 0;
        }
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    c.exports = function (e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....');
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, e(f.key), f);
        }
    }
    c.exports = function (i, j, k) {
        return j && f(i.prototype, j), k && f(i, k), Object.defineProperty(i, 'prototype', { writable: !1 }), i;
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....').default, f = b('.....');
    c.exports = function (g) {
        var h = f(g, 'string');
        return 'symbol' === e(h) ? h : String(h);
    }, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    function e(f) {
        return c.exports = e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (g) {
            return typeof g;
        } : function (g) {
            return g && 'function' == typeof Symbol && g.constructor === Symbol && g !== Symbol.prototype ? 'symbol' : typeof g;
        }, c.exports.__esModule = !0, c.exports.default = c.exports, e(f);
    }
    c.exports = e, c.exports.__esModule = !0, c.exports.default = c.exports;
}), b.register('.....', function (c, d) {
    var e = b('.....').default;
    c.exports = function (f, g) {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'createWindow', function () {
        return _e;
    });
    const _e = () => 'undefined' == typeof window ? null : window;
}), b.register('.....', function (c, d) {
    a(c.exports, 'readVariableSizeIntegerLength', function () {
        return _e;
    });
    const _e = (f, g) => {
        if (g >= f.byteLength)
            return null;
        const h = f.getUint8(g);
        if (h > 127)
            return 1;
        if (h > 63)
            return 2;
        if (h > 31)
            return 3;
        if (h > 15)
            return 4;
        if (h > 7)
            return 5;
        if (h > 3)
            return 6;
        if (h > 1)
            return 7;
        if (h > 0)
            return 8;
        const i = _e(f, g + 1);
        return null === i ? null : i + 8;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'wrapEventListener', function () {
        return _e;
    });
    const _e = (f, g) => h => {
        const i = { value: f };
        return Object.defineProperties(h, {
            currentTarget: i,
            target: i
        }), 'function' == typeof g ? g.call(f, h) : g.handleEvent.call(f, h);
    };
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    a(c.exports, 'connect', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....');
    const g = new Blob([f.worker], { type: 'application/javascript; charset=utf-8' }), h = URL.createObjectURL(g), i = (0, e.load)(h), _j = (i.characterize, i.connect);
    i.disconnect, i.encode, i.isSupported, i.record;
    URL.revokeObjectURL(h);
}), b.register('.....', function (c, d) {
    a(c.exports, 'load', function () {
        return _g;
    });
    var e = b('.....');
    b('.....'), b('.....');
    const f = (0, e.createBroker)({
            characterize: ({call: g}) => () => g('characterize'),
            encode: ({call: g}) => (h, i) => g('encode', {
                recordingId: h,
                timeslice: i
            }),
            record: ({call: g}) => async (h, i, j) => {
                await g('record', {
                    recordingId: h,
                    sampleRate: i,
                    typedArrays: j
                }, j.map(({buffer: k}) => k));
            }
        }), _g = h => {
            const i = new Worker(h);
            return f(i);
        };
}), b.register('.....', function (c, d) {
    b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    b('.....'), b('.....'), b('.....');
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
}), b.register('.....', function (c, d) {
    a(c.exports, 'worker', function () {
        return _e;
    });
    const _e = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t),a=o(r),i=o(n),u=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?a.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var a={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)a.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(a),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(c(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(s.default(e),[u(t[r.name],r.modifiers),n]):[].concat(s.default(e),[function(e){return u(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(s.default(e),s.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(s.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,s=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=s.cause,i=s.missingParameters,u=void 0===n?new Error:new Error(n(i));return null!==a&&(u.cause=a),void 0!==r&&(u.code=r(i)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),s=["honest","hour","hono"];for(t in s)if(0==o.indexOf(s[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),s=r(906),a=r(344);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,s=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),a=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),u=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),c=(e,t)=>async r=>{let{data:{id:n,method:o,params:u}}=r;const c=t[o];try{if(void 0===c)throw s({method:o});const t=void 0===u?c():c(u);if(void 0===t)throw a({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),s=(0,l.generateUniqueNumber)(d);return d.set(s,(()=>{o(),n.close(),d.delete(s)})),{result:s}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw u({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=c(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let o=0;o<t;o+=1){const t=e[o];void 0===r[o]&&(r[o]=[]);const s=t.shift();if(void 0===s)break e;r[o].push(s),0===o&&(n+=s.length)}}if(n>t){const o=n-t;r.forEach(((t,r)=>{const n=t.pop(),s=n.length-o;t.push(n.subarray(0,s)),e[r].unshift(n.subarray(s))}))}return r},v=new Map,g=(e=>(t,r,n)=>{const o=e.get(t);if(void 0===o){const o={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,o),o}return o.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),o})(v),x=((e,t)=>(r,n,o,s)=>{const a=o>>3,i="subsequent"===n?0:44,u=r.length,c=e(r[0]),l=new ArrayBuffer(c*u*a+i),d=new DataView(l);return"subsequent"!==n&&t(d,o,u,"complete"===n?c:Number.POSITIVE_INFINITY,s),r.forEach(((e,t)=>{let r=i+t*a;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=u*a}}))})),[l]})(m,((e,t,r,n,o)=>{const s=t>>3,a=Math.min(n*r*s,4294967251);e.setUint32(0,1380533830),e.setUint32(4,a+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,o,!0),e.setUint32(28,o*r*s,!0),e.setUint16(32,r*s,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,a,!0)})),w=new Map;p(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:e=>{let{recordingId:t,timeslice:r}=e;const n=w.get(t);void 0!==n&&(w.delete(t),n.reject(new Error("Another request was made to initiate an encoding.")));const o=v.get(t);if(null!==r){if(void 0===o||m(o.channelDataArrays[0])*(1e3/o.sampleRate)<r)return new Promise(((e,n)=>{w.set(t,{reject:n,resolve:e,timeslice:r})}));const e=h(o.channelDataArrays,Math.ceil(r*(o.sampleRate/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,o.sampleRate);return o.isComplete=!1,{result:n,transferables:n}}if(void 0!==o){const e=x(o.channelDataArrays,o.isComplete?"complete":"subsequent",16,o.sampleRate);return v.delete(t),{result:e,transferables:e}}return{result:[],transferables:[]}},record:e=>{let{recordingId:t,sampleRate:r,typedArrays:n}=e;const o=g(t,r,n),s=w.get(t);if(void 0!==s&&m(o.channelDataArrays[0])*(1e3/r)>=s.timeslice){const e=h(o.channelDataArrays,Math.ceil(s.timeslice*(r/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,r);o.isComplete=!1,w.delete(t),s.resolve({result:n,transferables:n})}return{result:null}}})})()})();';
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....');
    var _j = k => {
        const [l, m] = h.useState(k.latex), n = h.useCallback(() => {
                k.onChange(l), k.close();
            }, [
                l,
                k.onChange,
                k.close
            ]);
        return (0, e.jsx)(g.default, {
            open: k.visible,
            width: 670,
            closable: !1,
            destroyOnClose: !0,
            style: { top: 20 },
            onCancel: k.close,
            footer: (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(f.default, {
                        onClick: k.close,
                        children: 'Cancel'
                    }),
                    k.latex ? (0, e.jsx)(f.default, {
                        onClick: () => {
                            k.onChange(void 0), k.close();
                        },
                        children: 'Remove Equation'
                    }) : null,
                    (0, e.jsx)(f.default, {
                        type: 'primary',
                        onClick: n,
                        children: k.latex ? 'Update' : 'Insert'
                    })
                ]
            }),
            children: (0, e.jsx)(i.default, {
                latex: k.latex,
                onChange: m
            })
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _o;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    let k, l, m, n = o => o;
    var _o = p => {
        const q = f.useRef(), [r, s] = f.useState(p.latex);
        return f.useEffect(() => {
            const t = new (0, g.MathfieldElement)({ virtualKeyboardMode: 'off' });
            p.latex && t.setValue(p.latex), document.body.style.setProperty('--keyboard-zindex', '1000'), t.addEventListener('mount', () => {
                t.focus(), t.virtualKeyboardState = 'visible';
            }), t.addEventListener('input', u => {
                var v;
                if ('insertLineBreak' === u.inputType)
                    null == p || null === (v = p.onComplete) || void 0 === v || v.call(p);
                else {
                    const w = t.getValue('latex');
                    s(w), p.onChange && p.onChange(w);
                }
            }), t.addEventListener('unmount', () => {
                t.virtualKeyboardState = 'hidden';
            }), q.current.appendChild(t);
        }, []), (0, e.jsxs)(_p, {
            children: [
                (0, e.jsx)(_q, { ref: q }),
                (null == r ? void 0 : r.length) ? null : (0, e.jsx)(_r, { children: 'Enter math...' })
            ]
        });
    };
    const _p = h.default.div(k || (k = n`
  position: relative;
`)), _q = h.default.div(l || (l = n`
  math-field {
    font-size: 32px;
    color: ${ 0 };
    padding: 15px;
    outline: #40a9ff auto 2px; // Color of the AntD focus outline
  }
`), i.default.Black), _r = h.default.div(m || (m = n`
  position: absolute;
  top: 23px;
  left: 16px;
  font-family: ${ 0 };
  font-style: italic;
  color: #bfbfbf;
  font-size: 18px;
  pointer-events: none;
`), j.Fonts.SFPro);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CameraOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
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
                    attrs: { d: 'M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' }
                }]
        },
        name: 'camera',
        theme: 'outlined'
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'FunctionOutlined';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [
                {
                    tag: 'defs',
                    attrs: {},
                    children: [{
                            tag: 'style',
                            attrs: {}
                        }]
                },
                {
                    tag: 'path',
                    attrs: { d: 'M841 370c3-3.3 2.7-8.3-.6-11.3a8.24 8.24 0 00-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6a7.96 7.96 0 01-13.4-1.9l-63.5-141.3a7.9 7.9 0 00-7.3-4.7H380.7l.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415a8.07 8.07 0 007.8 9.7H284l-89 429.9a8.07 8.07 0 007.8 9.7H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 .9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6a8.02 8.02 0 007.2-11.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z' }
                }
            ]
        },
        name: 'function',
        theme: 'outlined'
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _r;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    let o;
    const p = (0, b('.....').observer)(q => {
            const r = q.question.type === l.QuestionType.multipleChoice, s = q.question.type === l.QuestionType.textInput;
            return (0, e.jsxs)(e.Fragment, {
                children: [
                    (0, e.jsx)(_q, { children: (0, m.plural)('Answer', q.question.answers.length) }),
                    q.question.answers.map((t, u) => (0, e.jsxs)(f.Fragment, {
                        children: [
                            (0, e.jsx)(g.default, {
                                questionType: q.question.type,
                                onCorrectChange: v => ((w, x) => q.question.answers = q.question.answers.map((y, z) => z !== w ? y : {
                                    ...y,
                                    correct: x
                                }))(u, v),
                                onTextChange: v => ((w, x) => q.question.answers = q.question.answers.map((y, z) => z !== w ? y : {
                                    ...y,
                                    text: x
                                }))(u, v),
                                text: t.text,
                                correct: t.correct,
                                image: t.image,
                                latex: t.latex,
                                textType: t.textType,
                                onImageChange: v => ((w, x) => q.question.answers = q.question.answers.map((y, z) => z !== w ? y : {
                                    ...y,
                                    image: x
                                }))(u, v),
                                onLatexChange: v => ((w, x) => q.question.answers = q.question.answers.map((y, z) => z !== w ? y : {
                                    ...y,
                                    latex: x
                                }))(u, v),
                                onTextTypeChange: v => {
                                    ((w, x) => {
                                        q.question.answers = q.question.answers.map((y, z) => z !== w ? y : {
                                            ...y,
                                            textType: x
                                        });
                                    })(u, v);
                                },
                                allowPhoto: r && !q.imagesBlocked,
                                allowLatex: r && !q.latexBlocked,
                                blockChangingCorrect: s,
                                canRemove: u > 0 && s || u > 1,
                                onRemove: () => (v => {
                                    q.question.answers = q.question.answers.filter((w, x) => v !== x);
                                })(u),
                                onPressEnter: q.onPressEnter
                            }),
                            (0, e.jsx)('div', { style: { height: 10 } })
                        ]
                    }, `answer-${ u }`)),
                    q.question.answers.length < 4 && (0, e.jsx)(n.default, {
                        style: {
                            fontSize: 14,
                            marginLeft: q.question.type === l.QuestionType.textInput ? 0 : 38,
                            opacity: 0.7,
                            cursor: 'pointer',
                            marginTop: -4,
                            fontStyle: 'italic'
                        },
                        onClick: () => q.question.answers.push((0, k.defaultAnswer)(!r)),
                        children: 'Add another answer'
                    })
                ]
            });
        }), _q = h.default.div(o || (o = (r => r)`
  color: ${ 0 };
  font-family: ${ 0 };
  font-weight: ${ 0 };
  font-size: 23px;
  margin-bottom: 2px;
`), i.default.Black, j.Fonts.SFPro, j.FontWeights.UltraBold);
    var _r = p;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _B;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....'), v = b('.....'), w = b('.....');
    let x, y, z = A => A;
    g.default;
    const A = B => {
        const C = {
            twoToneColor: B.correct ? '#4caf50' : '#f44336',
            style: {
                cursor: 'pointer',
                marginRight: 10
            },
            onClick: B.onClick
        };
        return B.correct ? (0, e.jsx)(n.default, { ...C }) : (0, e.jsx)(o.default, { ...C });
    };
    var _B = C => {
        const [D, E, F] = (0, s.useBoolean)(!1), [G, H, I] = (0, s.useBoolean)(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)(_C, {
                    children: [
                        C.questionType === w.QuestionType.textInput ? (0, e.jsxs)(i.default, {
                            value: C.textType || w.TextInputAnswerType.exact,
                            size: 'large',
                            style: {
                                marginRight: 10,
                                width: 120
                            },
                            onChange: C.onTextTypeChange,
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
                            correct: C.correct,
                            onClick: () => {
                                C.blockChangingCorrect || C.onCorrectChange && C.onCorrectChange(!C.correct);
                            }
                        }),
                        (() => {
                            const J = [
                                {
                                    key: 'add-image',
                                    label: 'Add Image',
                                    onClick: E,
                                    icon: (0, e.jsx)(m.default, {}),
                                    disabled: !(C.allowPhoto && !C.image && !C.latex && !C.text)
                                },
                                {
                                    key: 'add-latex',
                                    label: 'Add Equation',
                                    onClick: H,
                                    icon: (0, e.jsx)(r.default, {}),
                                    disabled: !(C.allowLatex && !C.image && !C.latex && !C.text)
                                },
                                {
                                    key: 'remove',
                                    label: 'Remove Answer',
                                    onClick: C.onRemove,
                                    icon: (0, e.jsx)(p.default, {}),
                                    disabled: !C.canRemove,
                                    danger: !0
                                }
                            ];
                            return (0, e.jsxs)('div', {
                                className: 'maxWidth flex vc between',
                                children: [
                                    C.image ? (0, e.jsx)(l.default, {
                                        image: C.image,
                                        size: 40,
                                        blockModalOpen: !0,
                                        onClick: E,
                                        showBorder: !0
                                    }) : C.latex ? (0, e.jsx)(_D, {
                                        onClick: H,
                                        children: (0, e.jsx)(v.default, { latex: C.latex })
                                    }) : (0, e.jsx)(j.default, {
                                        value: C.text,
                                        onPressEnter: C.onPressEnter,
                                        onTextChange: C.onTextChange,
                                        placeholder: (C.correct ? 'Correct' : 'Incorrect') + ' answer...',
                                        disabled: !1
                                    }),
                                    (0, e.jsx)(h.default, {
                                        menu: { items: J },
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
                    visible: D,
                    close: F,
                    currentImage: C.image,
                    onImageChange: C.onImageChange
                }),
                (0, e.jsx)(t.default, {
                    visible: G,
                    close: I,
                    latex: C.latex,
                    onChange: C.onLatexChange
                })
            ]
        });
    };
    const _C = f.default.div.attrs({ className: 'flex maxWidth vc' })(x || (x = z`
  font-size: 28px;
  span {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`)), _D = f.default.div(y || (y = z`
  cursor: pointer;
  font-size: 16px;
  color: ${ 0 };
  padding: 5px 21px;
  border: 2px dashed ${ 0 };
  border-radius: 6px;
`), u.default.Black, u.default.BorderGray);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CheckCircleTwoTone';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = {
        icon: function (f, g) {
            return {
                tag: 'svg',
                attrs: {
                    viewBox: '64 64 896 896',
                    focusable: 'false'
                },
                children: [
                    {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _j;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = function (j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CloseCircleTwoTone';
    var _j = f.forwardRef(i);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _e;
    });
    var _e = {
        icon: function (f, g) {
            return {
                tag: 'svg',
                attrs: {
                    viewBox: '64 64 896 896',
                    focusable: 'false'
                },
                children: [
                    {
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
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    var _h = i => {
        const j = (0, e.jsx)(f.default, {
            loading: i.loading,
            type: 'primary',
            disabled: i.disabled,
            onClick: i.onClick,
            children: i.label
        });
        return i.disabledMessage ? (0, e.jsx)(g.default, {
            title: i.disabledMessage,
            children: j
        }) : j;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'canAddQuestionErrorMessage', function () {
        return _g;
    }), a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....');
    const f = 'Question must have text, audio, image, or an equation', _g = h => {
            if (h.text) {
                if (!h.text.trim())
                    return f;
            } else if (!h.audio && !h.image && !h.latex)
                return f;
            if (h.image && h.latex)
                return 'Question cannot contain an image and equation.';
            const i = h.answers.filter(j => {
                var k;
                return !!(null === (k = j.text) || void 0 === k ? void 0 : k.trim()) || !(!j.image && !j.latex);
            });
            return h.type === e.QuestionType.multipleChoice && i.length < 2 ? 'Question must have at least two answers.' : i.length < 1 ? 'Question must have at least one answer.' : null;
        };
    var _h = i => null === _g(i);
});