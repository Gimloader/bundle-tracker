function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("h0NTP", (function(n, r) {
    e(n.exports, "default", (function() {
        return s
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("lKmIF"),
        a = t("69SUA");
    var s = e => {
        const t = {
            ...e.style,
            fontFamily: a.Fonts.SFPro,
            color: e.style && e.style.color ? e.style.color : i.default.Black
        };
        return (0, o.jsx)("div", {
            onClick: e.onClick ? e.onClick : () => !1,
            style: t,
            children: e.children
        })
    }
})), t.register("ePZZc", (function(n, r) {
    e(n.exports, "default", (function() {
        return T
    }));
    var o = t("divCp"),
        i = t("hxEiv"),
        a = t("fywoC"),
        s = t("iMOcM"),
        c = t("8wSHq"),
        u = t("jNBFu"),
        l = t("bfV0l"),
        d = t("93yIm"),
        f = t("b9Zw0"),
        p = t("gHmyG"),
        h = t("hdT9U"),
        g = t("2FDaO"),
        v = t("h0NTP"),
        m = t("lKmIF"),
        y = t("dwMi1"),
        x = t("8j47p"),
        C = t("aj9M4");
    let N, A, w = e => e;
    const b = h.default.TabPane,
        S = f.default.Search,
        E = e => (0, i.jsxs)("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: [(0, i.jsx)(M, {
                className: "lightShadow mediumShadowOnHover",
                url: e.details.url,
                isMiddle: e.isMiddle,
                onClick: () => {
                    e.onSelect(e.details.url), (0, s.request)({
                        url: "/api/v1/editor/download-image",
                        method: "POST",
                        data: {
                            photoId: e.details.id
                        },
                        success: () => !1,
                        error: () => !1
                    })
                }
            }), (0, i.jsx)("a", {
                target: "_blank",
                href: e.details.creator.link,
                style: {
                    marginBottom: 10,
                    width: 146
                },
                children: (0, i.jsxs)(v.default, {
                    style: {
                        fontSize: 11,
                        width: "100%",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    },
                    children: ["Image by ", e.details.creator.name]
                })
            })]
        });
    class O extends a.Component {
        componentDidMount() {
            this.props.defaultSearchTerm && this.requestImages(this.props.defaultSearchTerm)
        }
        render() {
            return (0, i.jsxs)(i.Fragment, {
                children: [this.getContent(), (0, i.jsx)(x.default, {
                    id: "upload image",
                    visible: this.state.upgradeModalOpen,
                    close: this.closeUpgradeModal,
                    copy: {
                        title: C.IMAGE_UPLOAD_TITLE,
                        description: C.IMAGE_UPLOAD_DESCRIPTION
                    }
                })]
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                loading: !1,
                error: !1,
                imageResults: [],
                customLinkUrl: "",
                searchCount: 0,
                currentTabKey: this.props.blockUnsplash ? "2" : "1",
                upgradeModalOpen: !1
            }), (0, o.default)(this, "onSearch", (e => {
                this.setState({
                    imageResults: []
                }), this.requestImages(e)
            })), (0, o.default)(this, "requestImages", (e => {
                this.setState({
                    loading: !0
                }), (0, s.request)({
                    method: "POST",
                    url: "/api/v1/editor/images",
                    data: {
                        searchQuery: e
                    },
                    success: e => this.setState({
                        imageResults: e.photos,
                        searchCount: this.state.searchCount + 1
                    }),
                    error: () => this.setState({
                        error: !0
                    }),
                    both: () => this.setState({
                        loading: !1
                    })
                })
            })), (0, o.default)(this, "onImageChange", (e => {
                const t = e.target.value,
                    n = new Image;
                n.onload = () => {
                    this.setState({
                        customLinkUrl: t
                    })
                }, n.src = t
            })), (0, o.default)(this, "onPickCustomImage", (() => this.props.onImagePicked(this.state.customLinkUrl))), (0, o.default)(this, "onImageUploaded", (e => this.props.onImagePicked(e))), (0, o.default)(this, "handleTabClick", (e => {
                "3" !== e || (0, s.isUpgraded)() || (0, s.isStudent)() ? this.setState({
                    currentTabKey: e
                }) : this.setState({
                    upgradeModalOpen: !0
                })
            })), (0, o.default)(this, "closeUpgradeModal", (() => this.setState({
                upgradeModalOpen: !1
            }))), (0, o.default)(this, "getContent", (() => (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(v.default, {
                    style: {
                        fontWeight: 900,
                        fontSize: this.props.titleFontSize || 38,
                        marginBottom: this.props.titleBottomMargin || 0
                    },
                    children: this.props.title
                }), (0, i.jsxs)(h.default, {
                    type: "card",
                    activeKey: this.state.currentTabKey,
                    onTabClick: this.handleTabClick,
                    children: [!this.props.blockUnsplash && (0, i.jsxs)(b, {
                        tab: "Unsplash",
                        children: [(0, i.jsx)(S, {
                            placeholder: "Search photos...",
                            size: "large",
                            enterButton: !0,
                            style: {
                                width: 464,
                                marginBottom: 10,
                                marginTop: -3
                            },
                            autoFocus: this.props.autoFocus,
                            onSearch: this.onSearch
                        }), this.state.loading && (0, i.jsx)("div", {
                            style: {
                                marginTop: 5
                            },
                            children: (0, i.jsx)(p.default, {
                                size: "large"
                            })
                        }), this.state.error && (0, i.jsx)(l.default, {
                            message: "Error",
                            description: "There was an error searching from Unsplash. Please try again later or enter a link.",
                            type: "error",
                            showIcon: !0
                        }), !this.state.loading && this.props.unsplashDefaultText && 0 === this.state.searchCount && (0, i.jsxs)("div", {
                            className: "flex hc vc flex-column",
                            style: {
                                color: m.default.Black,
                                marginTop: 10
                            },
                            children: [(0, i.jsx)(u.default, {
                                style: {
                                    fontSize: 50,
                                    marginBottom: 5
                                }
                            }), (0, i.jsx)("div", {
                                style: {
                                    fontSize: 15,
                                    textAlign: "center"
                                },
                                children: this.props.unsplashDefaultText
                            })]
                        }), !this.state.loading && 0 !== this.state.searchCount && 0 === this.state.imageResults.length && (0, i.jsxs)("div", {
                            className: "flex hc vc flex-column",
                            style: {
                                color: m.default.Black,
                                marginTop: 10
                            },
                            children: [(0, i.jsx)(c.default, {
                                style: {
                                    fontSize: 50,
                                    marginBottom: 5
                                }
                            }), (0, i.jsx)("div", {
                                style: {
                                    fontSize: 15,
                                    textAlign: "center"
                                },
                                children: 1 === this.state.searchCount ? "No images found. Try searching for something!" : "No results found."
                            })]
                        }), (0, i.jsx)(_, {
                            children: this.state.imageResults.map(((e, t) => (0, i.jsx)(E, {
                                details: e,
                                isMiddle: (t - 1) % 3 == 0,
                                onSelect: this.props.onImagePicked
                            }, e.url)))
                        })]
                    }, "1"), (0, i.jsxs)(b, {
                        tab: "Link",
                        children: [(0, i.jsx)(f.default, {
                            size: "large",
                            placeholder: "Image link",
                            style: {
                                marginTop: -3
                            },
                            onChange: this.onImageChange
                        }), (0, i.jsx)(d.default, {
                            style: {
                                marginTop: 5
                            },
                            type: "primary",
                            size: "large",
                            block: !0,
                            onClick: this.onPickCustomImage,
                            disabled: !this.state.customLinkUrl,
                            children: "Add"
                        })]
                    }, "2"), this.props.allowUpload && (0, i.jsx)(b, {
                        tab: "Upload",
                        children: (0, i.jsx)(y.default, {
                            onPhotoUploaded: this.onImageUploaded
                        })
                    }, "3")]
                })]
            })))
        }
    }
    const _ = g.default.div(N || (N = w`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  width: ${0}px;
`), (() => 464)),
        M = g.default.div(A || (A = w`
  height: 146px;
  width: 146px;
  background-image: url(${0});
  background-size: cover;
  background-position: center;
  margin-bottom: 3px;
  border-radius: 5px;
  margin-right: ${0}px;
  margin-left: ${0}px;
  cursor: pointer;
`), (e => e.url), (e => e.isMiddle ? 13 : 0), (e => e.isMiddle ? 13 : 0));
    var T = O
})), t.register("8wSHq", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("dnh3u"),
        i = t("fywoC"),
        a = t("bT3mf"),
        s = t("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "MehOutlined";
    var u = i.forwardRef(c)
})), t.register("bT3mf", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
                }
            }]
        },
        name: "meh",
        theme: "outlined"
    }
})), t.register("dwMi1", (function(n, r) {
    e(n.exports, "default", (function() {
        return p
    }));
    var o = t("divCp"),
        i = t("hxEiv"),
        a = t("fywoC"),
        s = t("cxXjY"),
        c = t("cy4A6"),
        u = t("gHmyG"),
        l = t("03g0M"),
        d = t("iMOcM");
    class f extends a.Component {
        render() {
            return (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)("div", {
                    style: {
                        width: "100%",
                        height: 300
                    },
                    children: (0, i.jsx)(l.default.Dragger, {
                        customRequest: this.uploadImage,
                        multiple: !1,
                        accept: "image/*",
                        beforeUpload: this.fileIsSmallEnough,
                        children: this.state.loading ? (0, i.jsx)(u.default, {
                            size: "large"
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("p", {
                                className: "ant-upload-drag-icon",
                                children: (0, i.jsx)(s.default, {})
                            }), (0, i.jsx)("p", {
                                className: "ant-upload-text",
                                children: "Click or drag to upload a photo!"
                            }), (0, i.jsx)("p", {
                                className: "ant-upload-hint",
                                children: "Photo must be less than 5MB."
                            })]
                        })
                    })
                })
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "state", {
                loading: !1
            }), (0, o.default)(this, "uploadImage", (({
                file: e
            }) => {
                const t = new FormData;
                t.append("file", e), this.setState({
                    loading: !0
                }), (0, d.request)({
                    url: "/api/games/image/add",
                    method: "post",
                    data: t,
                    success: e => {
                        this.setState({
                            loading: !1
                        }), this.props.onPhotoUploaded(e.url)
                    },
                    error: e => {
                        this.setState({
                            loading: !1
                        }), c.default.error("Error uploading. Please try again.")
                    }
                })
            })), (0, o.default)(this, "fileIsSmallEnough", (e => {
                const t = e.size / 1024 / 1024 < 5;
                return t || c.default.error("Photo must be less than 5MB"), t
            }))
        }
    }
    var p = f
})), t.register("cxXjY", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("dnh3u"),
        i = t("fywoC"),
        a = t("enkai"),
        s = t("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "InboxOutlined";
    var u = i.forwardRef(c)
})), t.register("enkai", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "0 0 1024 1024",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"
                }
            }]
        },
        name: "inbox",
        theme: "outlined"
    }
})), t.register("aj9M4", (function(n, r) {
    e(n.exports, "AUDIO_TITLE", (function() {
        return a
    })), e(n.exports, "AUDIO_DESCRIPTION", (function() {
        return s
    })), e(n.exports, "IMAGE_UPLOAD_TITLE", (function() {
        return c
    })), e(n.exports, "IMAGE_UPLOAD_DESCRIPTION", (function() {
        return u
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("46bRO");
    const a = (0, o.jsx)(o.Fragment, {
            children: "Add audio with Pro"
        }),
        s = (0, o.jsxs)(o.Fragment, {
            children: ["Record your voice and have the audio played each time a student goes to answer this question. ", (0, o.jsxs)("b", {
                children: ["To add audio, upgrade to ", i.COMPANY_NAME, " Pro."]
            })]
        }),
        c = (0, o.jsx)(o.Fragment, {
            children: "Upload images with Pro"
        }),
        u = (0, o.jsxs)(o.Fragment, {
            children: ["To add your own images to questions, ", (0, o.jsxs)("b", {
                children: ["upgrade to ", i.COMPANY_NAME, " Pro."]
            })]
        })
})), t.register("b1wB5", (function(n, r) {
    e(n.exports, "defaultAnswer", (function() {
        return v
    })), e(n.exports, "default", (function() {
        return y
    }));
    var o = t("hxEiv"),
        i = t("bfV0l"),
        a = t("fBuQJ"),
        s = t("lpEVe"),
        c = t("cSKYy"),
        u = t("fywoC"),
        l = t("iUwFC"),
        d = t("lUroP"),
        f = t("E5rQb"),
        p = t("cqSvC"),
        h = t("kcrfp"),
        g = t("jnwv3");
    const v = e => ({
            _id: Math.random().toString(),
            text: "",
            correct: e
        }),
        m = () => ({
            _id: "",
            text: "",
            type: l.QuestionType.multipleChoice,
            image: "",
            audio: "",
            answers: [v(!0), v(!1), v(!1), v(!1)]
        });
    var y = (0, s.observer)(u.forwardRef(((e, t) => {
        var n;
        const r = (0, c.useLocalObservable)((() => m())),
            s = (0, g.default)(r) && !e.blockAddingNewQuestions,
            l = () => {
                const e = m();
                Object.keys(e).forEach((t => {
                    r[t] = e[t]
                }))
            };
        u.useImperativeHandle(t, (() => ({
            clear: l
        }))), u.useEffect((() => {
            e.existingQuestion ? Object.keys(e.existingQuestion).forEach((t => {
                r[t] = e.existingQuestion[t]
            })) : l()
        }), [null === (n = e.existingQuestion) || void 0 === n ? void 0 : n._id]);
        const v = () => {
            s && e.submitQuestion(r)
        };
        return (0, o.jsxs)(a.default, {
            open: e.visible,
            width: 670,
            style: {
                top: 20
            },
            onCancel: e.close,
            afterClose: e.afterClose,
            closable: !1,
            footer: (0, o.jsx)(h.default, {
                label: e.buttonLabel || "Add",
                onClick: v,
                loading: e.loading,
                disabledMessage: (0, g.canAddQuestionErrorMessage)(r),
                disabled: !s
            }),
            children: [(0, o.jsx)(d.default, {
                question: r
            }), (0, o.jsx)(f.default, {
                question: r,
                onPressEnter: v,
                imagesBlocked: e.imagesBlocked,
                audioBlocked: e.audioBlocked,
                latexBlocked: e.latexBlocked
            }), (0, o.jsx)(p.default, {
                question: r,
                onPressEnter: v,
                imagesBlocked: e.imagesBlocked,
                latexBlocked: e.latexBlocked
            }), e.errorMessage ? (0, o.jsx)(i.default, {
                message: "Error",
                description: e.errorMessage,
                type: "error",
                showIcon: !0
            }) : null]
        })
    })))
})), t.register("lUroP", (function(n, r) {
    e(n.exports, "default", (function() {
        return p
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        a = t("2FDaO"),
        s = t("fC6cp"),
        c = t("f1yKZ"),
        u = t("iUwFC"),
        l = t("69SUA"),
        d = t("b1wB5");
    let f;
    var p = (0, t("lpEVe").observer)((e => {
        const t = i.useCallback((e => {
                e.target.value === u.QuestionType.multipleChoice && r(), e.target.value === u.QuestionType.textInput && n()
            }), []),
            n = () => {
                const t = e.question.answers.filter((e => e.correct && e.text && !e.image));
                t.length ? e.question.answers = t : e.question.answers = [(0, d.defaultAnswer)(!0)], e.question.type = u.QuestionType.textInput
            },
            r = () => {
                const t = e.question.answers.filter(((e, t) => t <= 3));
                e.question.answers = t;
                for (let n = t.length; n < 4; n++) e.question.answers.push((0, d.defaultAnswer)(!1));
                e.question.type = u.QuestionType.multipleChoice
            };
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(g, {
                children: [(0, o.jsx)("div", {}), (0, o.jsx)("div", {
                    children: (0, o.jsxs)(c.default.Group, {
                        onChange: t,
                        value: e.question.type,
                        children: [(0, o.jsx)(c.default, {
                            value: u.QuestionType.multipleChoice,
                            children: (0, o.jsx)("span", {
                                style: h,
                                children: "Multiple Choice"
                            })
                        }), (0, o.jsx)(c.default, {
                            value: u.QuestionType.textInput,
                            children: (0, o.jsx)("span", {
                                style: h,
                                children: "Text Input"
                            })
                        })]
                    })
                })]
            }), (0, o.jsx)(s.default, {
                style: {
                    marginTop: 16,
                    marginBottom: 11
                }
            })]
        })
    }));
    const h = {
            fontFamily: l.Fonts.SFPro
        },
        g = a.default.div(f || (f = (e => e)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`))
})), t.register("E5rQb", (function(n, r) {
    e(n.exports, "default", (function() {
        return S
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        a = t("lKmIF"),
        s = t("69SUA"),
        c = t("2TdZR"),
        u = t("93yIm"),
        l = t("lpEVe"),
        d = t("7Jt5L"),
        f = t("fK8ya"),
        p = t("c5Bl6"),
        h = t("iMOcM"),
        g = t("8j47p"),
        v = t("aj9M4"),
        m = (h = t("iMOcM"), t("1nYp9")),
        y = t("fgoFz"),
        x = t("ibETQ"),
        C = t("6jIfW"),
        N = t("7RWiL");
    let A, w, b = e => e;
    var S = (0, l.observer)((e => {
        const [t, n, r] = (0, h.useBoolean)(!1), [i, a, s] = (0, h.useBoolean)(!1), [u, l, A] = (0, h.useBoolean)(!1), [w, b, S] = (0, h.useBoolean)(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(g.default, {
                visible: u,
                close: A,
                id: "add audio",
                copy: {
                    title: v.AUDIO_TITLE,
                    description: v.AUDIO_DESCRIPTION
                }
            }), (0, o.jsx)(d.default, {
                visible: t,
                close: r,
                onImageChange: t => {
                    e.question.image = t
                },
                currentImage: e.question.image
            }), (0, o.jsx)(p.default, {
                visible: i,
                close: s,
                onAudioChanged: t => {
                    e.question.audio = t, s()
                },
                audio: e.question.audio
            }), (0, o.jsx)(m.default, {
                visible: w,
                close: S,
                latex: e.question.latex,
                onChange: t => {
                    e.question.latex = t
                }
            }), (0, o.jsx)(E, {
                children: "Question"
            }), (0, o.jsx)(c.default, {
                value: e.question.text,
                onTextChange: t => {
                    e.question.text = t
                },
                placeholder: "Ask away...",
                disabled: !1,
                onPressEnter: e.onPressEnter
            }), e.imagesBlocked && e.audioBlocked && e.latexBlocked ? null : (0, o.jsxs)(O, {
                children: [(0, o.jsx)(_, {
                    icon: (0, o.jsx)(C.default, {}),
                    label: "Add Photo",
                    onClick: n,
                    disabled: e.imagesBlocked || !!e.question.latex,
                    customContent: e.question.image ? (0, o.jsx)("div", {
                        className: "flex maxWidth hc vc",
                        children: (0, o.jsx)(f.default, {
                            image: e.question.image,
                            blockModalOpen: !0,
                            size: 30,
                            onClick: n
                        })
                    }) : null
                }), (0, o.jsx)("div", {
                    style: {
                        width: 6
                    }
                }), (0, o.jsx)(_, {
                    disabled: e.audioBlocked || !window.MediaRecorder || (0, h.isStudent)(),
                    icon: (0, o.jsx)(x.default, {}),
                    label: (e.question.audio ? "" : "Add ") + "Audio",
                    onClick: () => {
                        (0, h.isUpgraded)() ? a(): l()
                    }
                }), (0, o.jsx)("div", {
                    style: {
                        width: 6
                    }
                }), (0, o.jsx)(_, {
                    icon: (0, o.jsx)(N.default, {}),
                    disabled: !!e.question.image,
                    label: "Add Equation",
                    customContent: e.question.latex ? (0, o.jsx)("div", {
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, o.jsx)(y.default, {
                            latex: e.question.latex
                        })
                    }) : null,
                    onClick: b
                })]
            }), (0, o.jsx)("div", {
                style: {
                    height: 12
                }
            })]
        })
    }));
    const E = i.default.div(A || (A = b`
  color: ${0};
  font-family: ${0};
  font-weight: ${0};
  font-size: 23px;
  margin-bottom: 2px;
`), a.default.Black, s.Fonts.SFPro, s.FontWeights.UltraBold),
        O = i.default.div.attrs({
            className: "flex maxWidth"
        })(w || (w = b`
  margin-top: 8px;
  height: 48px;
`)),
        _ = e => (0, o.jsx)(u.default, {
            disabled: e.disabled,
            style: {
                width: "33.33%",
                height: "100%",
                overflow: "hidden"
            },
            type: "dashed",
            tabIndex: "-1",
            onClick: e.onClick,
            children: e.customContent ? e.customContent : (0, o.jsxs)("div", {
                className: "flex maxHeight hc vc",
                style: {
                    fontFamily: s.Fonts.SFPro
                },
                children: [e.icon, (0, o.jsx)("div", {
                    style: {
                        marginLeft: 5
                    },
                    children: e.label
                })]
            })
        })
})), t.register("2TdZR", (function(n, r) {
    e(n.exports, "default", (function() {
        return d
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        a = t("hKWVS"),
        s = t("b9Zw0"),
        c = t("e4KJZ"),
        u = t("7vgK6"),
        l = t("69SUA");
    var d = e => {
        const t = i.useRef(),
            [n, r] = i.useState(!1);
        return (0, o.jsxs)("div", {
            style: {
                width: "100%"
            },
            children: [(0, o.jsx)(s.default, {
                ref: t,
                onPressEnter: e.onPressEnter,
                maxLength: 220,
                disabled: e.disabled,
                autoFocus: e.autoFocus,
                style: {
                    display: "flex",
                    fontFamily: l.Fonts.SFPro,
                    fontWeight: l.FontWeights.Bold,
                    width: "100%",
                    height: 40
                },
                size: "large",
                placeholder: e.placeholder,
                value: e.value,
                onChange: t => {
                    n && r(!1), (t => {
                        e.onTextChange(t.target.value)
                    })(t)
                },
                suffix: n ? (0, o.jsx)("span", {}) : (0, o.jsx)(c.default, {
                    title: "Show Symbol Keyboard",
                    children: (0, o.jsx)(a.default, {
                        onClick: () => {
                            r(!0), t.current.focus()
                        }
                    })
                })
            }), n ? (0, o.jsx)(u.default, {
                onSymbolSelected: t => e.onTextChange(e.value + t),
                focusInput: () => {
                    var e;
                    null === (e = t.current) || void 0 === e || e.focus()
                }
            }) : null]
        })
    }
})), t.register("7vgK6", (function(n, r) {
    e(n.exports, "default", (function() {
        return f
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        a = t("93yIm"),
        s = t("hdT9U"),
        c = t("818Pq");
    let u;
    const l = t("2FDaO").default.div(u || (u = (e => e)`
  margin-top: 1px;
`)),
        {
            TabPane: d
        } = s.default;
    var f = e => {
        const [t, n] = i.useState(c.default[0].name);
        return (0, o.jsx)(l, {
            children: (0, o.jsx)(s.default, {
                onChange: n,
                activeKey: t,
                tabPosition: e.tabPosition || "top",
                children: c.default.map((t => (0, o.jsx)(d, {
                    tab: t.name,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: 255
                    },
                    className: "scroll",
                    children: t.characters.map((n => (0, o.jsx)(a.default, {
                        style: {
                            margin: 2
                        },
                        size: "small",
                        onClick: () => {
                            return t = n, null == e || e.onSymbolSelected(t), void(null == e || e.focusInput());
                            var t
                        },
                        children: n
                    }, `${t.name}-${n}`)))
                }, t.name)))
            })
        })
    }
})), t.register("818Pq", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = [{
        name: "Symbols",
        characters: ["À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß", "à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï", "ð", "ñ", "ò", "ó", "ô", "õ", "ö", "ø", "ù", "ú", "û", "ü", "ý", "þ", "Ā", "ā", "Ă", "ă", "Ą", "ą", "Ć", "ć", "Ĉ", "ĉ", "Ċ", "ċ", "Č", "č", "Ď", "ď", "Đ", "đ", "Ē", "ē", "Ĕ", "ĕ", "Ė", "ė", "Ę", "ę", "Ě", "ě", "Ĝ", "ĝ", "Ğ", "ğ", "Ġ", "ġ", "Ģ", "ģ", "Ĥ", "ĥ", "Ħ", "ħ", "Ĩ", "ĩ", "Ī", "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı", "Ĳ", "ĳ", "Ĵ", "ĵ", "Ķ", "ķ", "ĸ", "Ĺ", "ĺ", "Ļ", "ļ", "Ľ", "ľ", "Ŀ", "ŀ", "Ł", "ł", "Ń", "ń", "Ņ", "ņ", "Ň", "ň", "ŉ", "Ŋ", "ŋ", "Ō", "ō", "Ŏ", "ŏ", "Ő", "ő", "Œ", "œ", "Ż", "ż", "Ž", "ž", "Ŕ", "ŕ", "Ŗ", "ŗ", "Ř", "ř", "Ś", "ś", "Ŝ", "ŝ", "Ş", "ş", "Š", "š", "Ţ", "ţ", "Ť", "ť", "Ŧ", "ŧ", "Ũ", "ũ", "Ū", "ū", "Ŭ", "ŭ", "Ů", "ů", "Ű", "ű", "Ų", "ų", "Ŵ", "ŵ", "Ŷ", "ŷ", "Ÿ", "Ź", "ź", "ƀ", "Ɓ", "Ƃ", "ƃ", "Ƅ", "ƅ", "Ɔ", "Ƈ", "ƈ", "Ɖ", "Ɗ", "Ƌ", "ƌ", "ƍ", "Ǝ", "Ə", "Ɛ", "Ƒ", "ƒ", "Ɠ", "Ɣ", "ƕ", "Ɩ", "Ɨ", "Ƙ", "ƙ", "ƚ", "ƛ", "Ɯ", "Ɲ", "ƞ", "Ɵ", "Ơ", "ơ", "Ƣ", "ƣ", "Ƥ", "ƥ", "Ʀ", "Ƨ", "ƨ", "Ʃ", "ƪ", "ƫ", "Ƭ", "ƭ", "Ʈ", "Ư", "ư", "Ʊ", "Ʋ", "Ƴ", "ƴ", "Ƶ", "ƶ", "Ʒ", "Ƹ", "ƹ", "ƺ", "ƻ", "Ƽ", "ƽ", "ƾ", "ƿ", "ǀ", "ǁ", "ǂ", "ǃ", "Ǆ", "ǅ", "ǆ", "Ǉ", "ǈ", "ǉ", "Ǌ", "ǋ", "ǌ", "Ǎ", "ǎ", "Ǐ", "ǐ", "Ǒ", "ǒ", "Ǔ", "ǔ", "Ǖ", "ǖ", "Ǘ", "ǘ", "Ǚ", "ǚ", "Ǜ", "ǜ", "ǝ", "Ǟ", "ǟ", "Ǡ", "ǡ", "Ǣ", "ǣ", "Ǥ", "ǥ", "Ǧ", "ǧ", "Ǩ", "ǩ", "Ǫ", "ǫ", "Ǭ", "ǭ", "Ǯ", "ǯ", "ǰ", "Ǳ", "ǲ", "ǳ", "Ǵ", "ǵ", "Ƕ", "Ƿ", "Ǹ", "ǹ", "Ǻ", "ǻ", "Ǽ", "ǽ", "Ǿ", "ǿ", "Ȁ", "ȁ", "Ȃ", "ȃ", "Ȅ", "ȅ", "Ȇ", "ȇ", "Ȉ", "ȉ", "Ȋ", "ȋ", "Ȍ", "ȍ", "Ȏ", "ȏ", "Ȑ", "ȑ", "Ȓ", "ȓ", "Ȕ", "ȕ", "Ȗ", "ȗ", "Ș", "ș", "Ț", "ț", "Ȝ", "ȝ", "Ȟ", "ȟ", "Ƞ", "ȡ", "Ȣ", "ȣ", "Ȥ", "ȥ", "Ȧ", "ȧ", "Ȩ", "ȩ", "Ȫ", "ȫ", "Ȭ", "ȭ", "Ȯ", "ȯ", "Ȱ", "ȱ", "Ȳ", "ȳ", "ȴ", "ȵ", "ȶ", "ȷ", "ȸ", "ȹ", "Ⱥ", "Ȼ", "ȼ", "Ƚ", "Ⱦ", "ȿ", "ɀ", "Ɂ", "ɂ", "Ƀ", "Ʉ", "Ʌ", "Ɇ", "ɇ", "Ɉ", "ɉ", "Ɋ", "ɋ", "Ɍ", "ɍ", "Ɏ", "Ḁ", "ḁ", "Ḃ", "ḃ", "Ḅ", "ḅ", "Ḇ", "ḇ", "Ḉ", "ḉ", "Ḋ", "ḋ", "Ḍ", "ḍ", "Ḏ", "ḏ", "Ḑ", "ḑ", "Ḓ", "ḓ", "Ḕ", "ḕ", "Ḗ", "ḗ", "Ḙ", "ḙ", "Ḛ", "ḛ", "Ḝ", "ḝ", "Ḟ", "ḟ", "Ḡ", "ḡ", "Ḣ", "ḣ", "Ḥ", "ḥ", "Ḧ", "ḧ", "Ḩ", "ḩ", "Ḫ", "ḫ", "Ḭ", "ḭ", "Ḯ", "ḯ", "Ḱ", "ḱ", "Ḳ", "ḳ", "Ḵ", "ḵ", "Ḷ", "ḷ", "Ḹ", "ḹ", "Ḻ", "ḻ", "Ḽ", "ḽ", "Ḿ", "ḿ", "Ṁ", "ṁ", "Ṃ", "ṃ", "Ṅ", "ṅ", "Ṇ", "ṇ", "Ṉ", "ṉ", "Ṋ", "ṋ", "Ṍ", "ṍ", "Ṏ", "ṏ", "Ṑ", "ṑ", "Ṓ", "ṓ", "Ṕ", "ṕ", "Ṗ", "ṗ", "Ṙ", "ṙ", "Ṛ", "ṛ", "Ṝ", "ṝ", "Ṟ", "ṟ", "Ṡ", "ṡ", "Ṣ", "ṣ", "Ṥ", "ṥ", "Ṧ", "ṧ", "Ṩ", "ṩ", "Ṫ", "ṫ", "Ṭ", "ṭ", "Ṯ", "ṯ", "Ṱ", "ṱ", "Ṳ", "ṳ", "Ṵ", "ṵ", "Ṷ", "ṷ", "Ṹ", "ṹ", "Ṻ", "ṻ", "Ṽ", "ṽ", "Ṿ", "ṿ", "Ẁ", "ẁ", "Ẃ", "ẃ", "Ẅ", "ẅ", "Ẇ", "ẇ", "Ẉ", "ẉ", "Ẋ", "ẋ", "Ẍ", "ẍ", "Ẏ", "ẏ", "Ẑ", "ẑ", "Ẓ", "ẓ", "Ẕ", "ẕ", "ẖ", "ẗ", "ẘ", "ẙ", "ẚ", "ẛ", "ẜ", "ẝ", "ẞ", "ẟ", "Ạ", "ạ", "Ả", "ả", "Ấ", "ấ", "Ầ", "ầ", "Ẩ", "ẩ", "Ẫ", "ẫ", "Ậ", "ậ", "Ắ", "ắ", "Ằ", "ằ", "Ẳ", "ẳ", "Ẵ", "ẵ", "Ặ", "ặ", "Ẹ", "ẹ", "Ẻ", "ẻ", "Ẽ", "ẽ", "Ế", "ế", "Ề", "ề", "Ễ", "ễ", "Ệ", "ệ", "Ỉ", "ỉ", "Ị", "ị", "Ọ", "ọ", "Ỏ", "ỏ", "Ố", "ố", "Ồ", "ồ", "Ổ", "ổ", "Ỗ", "ỗ", "Ộ", "ộ", "Ớ", "ớ", "Ờ", "ờ", "Ở", "ở", "Ỡ", "ỡ", "Ợ", "ợ", "Ụ", "ụ", "Ủ", "ủ", "Ứ", "ứ", "Ừ", "ừ", "Ử", "ử", "Ữ", "ữ", "Ự", "ự", "Ỳ", "ỳ", "Ỵ", "ỵ", "Ỷ", "ỷ", "Ỹ", "ỹ", "Ỻ", "ỻ", "Ỽ", "ỽ", "Ỿ"]
    }, {
        name: "Currency",
        characters: ["$", "£", "€", "¥", "₽", "؋", "ƒ", "₼", "៛", "₡", "₱", "₵", "₹", "﷼", "₪", "₩", "₭", "₮", "₦", "₺", "₴", "₫", "₢", "₣", "₥", "₯", "₰", "₲", "₳", "₶", "₸"]
    }, {
        name: "Math",
        characters: ["−", "÷", "×", "=", "π", "𝒙", "𝒚", "½", "¼", "¾", "∕", "<", ">", "≥", "≤", "%", "*", "√", "°", "^", "←", "→", "∠", "⋅", "∞", "~", "±", "∓", "≅", "∜", "∏", "≠", "≈", "∫", "∬", "∭", "⨌", "∮", "∯", "∰", "⨍", "∱", "ƒ", "⫪", "∡", "∻", "∈", "∩", "∅", "⩽", "⩾", "∑", "∎", "↔", "⇒", "∥", "∂", "⊥", "∢", "⟩", "≌", "≦", "⟨", "∧", "∝", "⋄", "≄", "¬", "⧠", "∀", "Ǝ", "∸", "≻", "≺", "≧", "⦤", "⪯", "⋆", "∉", "⪰", "∴", "∵", "⦥", "⩗", "⦜", "⨂", "⊢"]
    }, {
        name: "Greek",
        characters: ["Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ", "Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π", "Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι", "κ", "λ", "μ", "ν", "ξ", "ο", "π", "ρ", "ς", "τ", "υ", "φ", "χ", "ψ", "ω"]
    }, {
        name: "Other",
        characters: ["¿", "&", "!", "¡", "#", "@", "¶", "¤", "®", "©", ":", ";", "(", ")", "[", "]", "{", "}", "|", "¦", "←", "→", "»", "«", "↓", "↑", "⇄", "⇨", "⇦", "₧", "₨", "₠"]
    }]
})), t.register("7Jt5L", (function(n, r) {
    e(n.exports, "default", (function() {
        return p
    }));
    var o = t("divCp"),
        i = t("hxEiv"),
        a = t("fywoC"),
        s = t("93yIm"),
        c = t("9xElQ"),
        u = t("ePZZc"),
        l = t("iMOcM"),
        d = t("1djzF");
    class f extends a.Component {
        render() {
            const {
                visible: e,
                close: t
            } = this.props;
            return (0, i.jsx)(c.default, {
                open: e,
                placement: "right",
                closable: !0,
                destroyOnClose: !0,
                onClose: t,
                width: 528,
                drawerStyle: {
                    height: "100%",
                    overflowY: "auto",
                    scrollbarWidth: "none"
                },
                children: this.getContent()
            })
        }
        constructor(...e) {
            super(...e), (0, o.default)(this, "removeImage", (() => {
                this.onImagePicked("")
            })), (0, o.default)(this, "onImagePicked", (e => {
                this.props.close(), this.setState({}), this.props.onImageChange(e)
            })), (0, o.default)(this, "getContent", (() => this.props.currentImage ? (0, i.jsxs)("div", {
                className: "flex hc vc flex-column",
                children: [(0, i.jsx)("img", {
                    src: (0, d.getCloudinaryUrl)(this.props.currentImage),
                    style: {
                        maxWidth: "100%",
                        maxHeight: 300,
                        borderRadius: 5
                    }
                }), (0, i.jsx)(s.default, {
                    type: "primary",
                    style: {
                        marginTop: 10
                    },
                    size: "large",
                    onClick: this.removeImage,
                    children: "Remove Image"
                })]
            }) : (0, i.jsx)(u.default, {
                title: "Add Photo",
                titleFontSize: 34,
                titleBottomMargin: 6,
                defaultSearchTerm: "",
                onImagePicked: this.onImagePicked,
                allowUpload: !(0, l.isStudent)(),
                unsplashDefaultText: "Search for anything!"
            })))
        }
    }
    var p = f
})), t.register("c5Bl6", (function(n, r) {
    e(n.exports, "default", (function() {
        return A
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        a = t("ibETQ"),
        s = t("9g8O0"),
        c = t("5WQCk"),
        u = t("kPX2r"),
        l = t("iCVoN"),
        d = t("hO01w"),
        f = t("93yIm"),
        p = t("fC6cp"),
        h = t("9xElQ"),
        g = t("cy4A6"),
        v = t("h0NTP"),
        m = t("69SUA"),
        y = t("iMOcM"),
        x = t("sgWtV"),
        C = t("1djzF");
    const N = {
        height: 111,
        width: "100%"
    };
    var A = e => {
        const [t, n] = i.useState(!1), {
            status: r,
            startRecording: A,
            stopRecording: w,
            mediaBlobUrl: b
        } = (0, d.useReactMediaRecorder)({
            video: !1,
            audio: !0
        }), S = () => {
            new Audio((0, C.getCloudinaryUrl)(e.audio)).play()
        }, E = () => e.onAudioChanged("");
        return (0, o.jsx)(h.default, {
            open: e.visible,
            placement: "right",
            width: 515,
            closable: !0,
            destroyOnClose: !0,
            drawerStyle: {
                height: "100%",
                overflowY: "auto",
                scrollbarWidth: "none"
            },
            onClose: e.close,
            children: e.audio ? (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(v.default, {
                    style: {
                        fontWeight: m.FontWeights.Black,
                        fontSize: 34
                    },
                    children: "Audio"
                }), (0, o.jsx)(v.default, {
                    style: {
                        fontSize: 16,
                        marginTop: -8
                    },
                    children: "This audio will be played each time a student goes to answer this question."
                }), (0, o.jsx)(p.default, {}), (0, o.jsxs)("div", {
                    className: "flex vc",
                    children: [(0, o.jsx)(f.default, {
                        size: "large",
                        type: "primary",
                        onClick: S,
                        icon: (0, o.jsx)(c.default, {}),
                        style: {
                            marginRight: 5
                        },
                        children: "Play Audio"
                    }), (0, o.jsx)(f.default, {
                        size: "large",
                        type: "dashed",
                        icon: (0, o.jsx)(s.default, {}),
                        onClick: E,
                        children: "Remove Audio"
                    })]
                })]
            }) : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(v.default, {
                    style: {
                        fontWeight: m.FontWeights.Black,
                        fontSize: 34
                    },
                    children: "Add Audio"
                }), (0, o.jsx)(v.default, {
                    style: {
                        fontSize: 16,
                        marginTop: 2,
                        marginBottom: -2,
                        lineHeight: 1.2
                    },
                    children: "Record your voice! It will be played each time a student goes to answer this question."
                }), (0, o.jsx)(p.default, {}), (0, o.jsxs)("div", {
                    children: [b && "recording" !== r && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(v.default, {
                            style: {
                                fontWeight: m.FontWeights.Bold,
                                fontSize: 24
                            },
                            children: "Finished Recording"
                        }), (0, o.jsx)("audio", {
                            src: b,
                            controls: !0
                        }), (0, o.jsxs)("div", {
                            className: "flex vc",
                            style: {
                                marginTop: 10
                            },
                            children: [(0, o.jsx)(f.default, {
                                size: "large",
                                type: "primary",
                                icon: (0, o.jsx)(u.default, {}),
                                loading: t,
                                style: {
                                    marginRight: 10
                                },
                                onClick: () => {
                                    return r = b, void(t || fetch(r).then((e => e.blob())).then((t => {
                                        const r = new File([t], `recording-${Date.now()}.wav`);
                                        if (r.size / 1e6 > 3) return void(0, x.throwError)({
                                            title: "Audio too long",
                                            content: "Please record a shorter clip"
                                        });
                                        const o = new FormData;
                                        o.append("file", r), n(!0), (0, y.request)({
                                            url: "/api/games/audio/add",
                                            method: "post",
                                            data: o,
                                            success: t => e.onAudioChanged(t.url),
                                            error: e => g.default.error("Error uploading. Please try again."),
                                            both: () => n(!1)
                                        })
                                    })).catch());
                                    var r
                                },
                                children: "Save"
                            }), (0, o.jsx)(f.default, {
                                onClick: A,
                                size: "large",
                                type: "dashed",
                                icon: (0, o.jsx)(a.default, {}),
                                children: "New Recording"
                            })]
                        }), (0, o.jsx)("div", {
                            style: {
                                height: 10
                            }
                        })]
                    }), "idle" === r && (0, o.jsx)(f.default, {
                        onClick: A,
                        style: N,
                        icon: (0, o.jsx)(a.default, {}),
                        type: "dashed",
                        children: "Start Recording"
                    }), "recording" === r && (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(v.default, {
                            style: {
                                fontWeight: m.FontWeights.Bold,
                                fontSize: 24
                            },
                            children: "Recording..."
                        }), (0, o.jsx)(f.default, {
                            onClick: w,
                            style: N,
                            type: "dashed",
                            icon: (0, o.jsx)(l.default, {}),
                            children: "Stop Recording"
                        })]
                    })]
                })]
            })
        })
    }
})), t.register("iCVoN", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("dnh3u"),
        i = t("fywoC"),
        a = t("g82Ft"),
        s = t("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "StopOutlined";
    var u = i.forwardRef(c)
})), t.register("g82Ft", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"
                }
            }]
        },
        name: "stop",
        theme: "outlined"
    }
})), t.register("hO01w", (function(e, n) {
    e.exports = t("3nC0P")
})), t.register("3nC0P", (function(e, n) {
    var r = e.exports && e.exports.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        },
        o = e.exports && e.exports.__generator || function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }), i;

            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = i[1], i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1], o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2], a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e], r = 0
                        } finally {
                            n = o = 0
                        }
                        if (5 & i[0]) throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.ReactMediaRecorder = e.exports.useReactMediaRecorder = e.exports.RecorderErrors = void 0;
    var i, a, s = t("j8MCb"),
        c = t("fywoC"),
        u = t("5PnQu");

    function l(e) {
        var t = this,
            n = e.audio,
            a = void 0 === n || n,
            l = e.video,
            d = void 0 !== l && l,
            f = e.onStop,
            p = void 0 === f ? function() {
                return null
            } : f,
            h = e.onStart,
            g = void 0 === h ? function() {
                return null
            } : h,
            v = e.blobPropertyBag,
            m = e.screen,
            y = void 0 !== m && m,
            x = e.mediaRecorderOptions,
            C = void 0 === x ? void 0 : x,
            N = e.customMediaStream,
            A = void 0 === N ? null : N,
            w = e.stopStreamsOnStop,
            b = void 0 === w || w,
            S = e.askPermissionOnMount,
            E = void 0 !== S && S,
            O = (0, c.useRef)(null),
            _ = (0, c.useRef)([]),
            M = (0, c.useRef)(null),
            T = (0, c.useState)("idle"),
            I = T[0],
            k = T[1],
            P = (0, c.useState)(!1),
            R = P[0],
            F = P[1],
            j = (0, c.useState)(void 0),
            B = j[0],
            L = j[1],
            D = (0, c.useState)("NONE"),
            U = D[0],
            W = D[1];
        (0, c.useEffect)((function() {
            r(t, void 0, void 0, (function() {
                var e;
                return o(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return e = s.register, [4, (0, u.connect)()];
                        case 1:
                            return [4, e.apply(void 0, [t.sent()])];
                        case 2:
                            return t.sent(), [2]
                    }
                }))
            }))
        }), []);
        var V = (0, c.useCallback)((function() {
            return r(t, void 0, void 0, (function() {
                var e, t, n, r;
                return o(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            k("acquiring_media"), e = {
                                audio: "boolean" == typeof a ? !!a : a,
                                video: "boolean" == typeof d ? !!d : d
                            }, o.label = 1;
                        case 1:
                            return o.trys.push([1, 9, , 10]), A ? (M.current = A, [3, 8]) : [3, 2];
                        case 2:
                            return y ? [4, window.navigator.mediaDevices.getDisplayMedia({
                                video: d || !0
                            })] : [3, 6];
                        case 3:
                            return (t = o.sent()).getVideoTracks()[0].addEventListener("ended", (function() {
                                H()
                            })), a ? [4, window.navigator.mediaDevices.getUserMedia({
                                audio: a
                            })] : [3, 5];
                        case 4:
                            o.sent().getAudioTracks().forEach((function(e) {
                                return t.addTrack(e)
                            })), o.label = 5;
                        case 5:
                            return M.current = t, [3, 8];
                        case 6:
                            return [4, window.navigator.mediaDevices.getUserMedia(e)];
                        case 7:
                            n = o.sent(), M.current = n, o.label = 8;
                        case 8:
                            return k("idle"), [3, 10];
                        case 9:
                            return r = o.sent(), W(r.name), k("idle"), [3, 10];
                        case 10:
                            return [2]
                    }
                }))
            }))
        }), [a, d, y]);
        (0, c.useEffect)((function() {
            if (!window.MediaRecorder) throw new Error("Unsupported Browser");
            if (y && !window.navigator.mediaDevices.getDisplayMedia) throw new Error("This browser doesn't support screen capturing");
            var e = function(e) {
                var t = navigator.mediaDevices.getSupportedConstraints(),
                    n = Object.keys(e).filter((function(e) {
                        return !t[e]
                    }));
                n.length > 0 && console.error("The constraints ".concat(n.join(","), " doesn't support on this browser. Please check your ReactMediaRecorder component."))
            };
            return "object" == typeof a && e(a), "object" == typeof d && e(d), C && C.mimeType && (MediaRecorder.isTypeSupported(C.mimeType) || console.error("The specified MIME type you supplied for MediaRecorder doesn't support this browser")), !M.current && E && V(),
                function() {
                    M.current && M.current.getTracks().forEach((function(e) {
                        return e.clone().stop()
                    }))
                }
        }), [a, y, d, V, C, E]);
        var q = function(e) {
                var t = e.data;
                _.current.push(t)
            },
            G = function() {
                g()
            },
            z = function() {
                var e = _.current[0],
                    t = Object.assign({
                        type: e.type
                    }, v || (d ? {
                        type: "video/mp4"
                    } : {
                        type: "audio/wav"
                    })),
                    n = new Blob(_.current, t),
                    r = URL.createObjectURL(n);
                k("stopped"), L(r), p(r, n)
            },
            Q = function(e) {
                F(e), M.current && M.current.getAudioTracks().forEach((function(t) {
                    return t.enabled = !e
                }))
            },
            H = function() {
                O.current && "inactive" !== O.current.state && (k("stopping"), O.current.stop(), b && M.current && M.current.getTracks().forEach((function(e) {
                    return e.stop()
                })), _.current = [])
            };
        return {
            error: i[U],
            muteAudio: function() {
                return Q(!0)
            },
            unMuteAudio: function() {
                return Q(!1)
            },
            startRecording: function() {
                return r(t, void 0, void 0, (function() {
                    return o(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return W("NONE"), M.current ? [3, 2] : [4, V()];
                            case 1:
                                e.sent(), e.label = 2;
                            case 2:
                                return M.current ? M.current.getTracks().some((function(e) {
                                    return "ended" === e.readyState
                                })) ? [4, V()] : [3, 4] : [3, 5];
                            case 3:
                                e.sent(), e.label = 4;
                            case 4:
                                if (!M.current.active) return [2];
                                O.current = new s.MediaRecorder(M.current, C || void 0), O.current.ondataavailable = q, O.current.onstop = z, O.current.onstart = G, O.current.onerror = function() {
                                    W("NO_RECORDER"), k("idle")
                                }, O.current.start(), k("recording"), e.label = 5;
                            case 5:
                                return [2]
                        }
                    }))
                }))
            },
            pauseRecording: function() {
                O.current && "recording" === O.current.state && (k("paused"), O.current.pause())
            },
            resumeRecording: function() {
                O.current && "paused" === O.current.state && (k("recording"), O.current.resume())
            },
            stopRecording: H,
            mediaBlobUrl: B,
            status: I,
            isAudioMuted: R,
            previewStream: M.current ? new MediaStream(M.current.getVideoTracks()) : null,
            previewAudioStream: M.current ? new MediaStream(M.current.getAudioTracks()) : null,
            clearBlobUrl: function() {
                B && URL.revokeObjectURL(B), L(void 0), k("idle")
            }
        }
    }(a = i = e.exports.RecorderErrors || (e.exports.RecorderErrors = {})).AbortError = "media_aborted", a.NotAllowedError = "permission_denied", a.NotFoundError = "no_specified_media_found", a.NotReadableError = "media_in_use", a.OverconstrainedError = "invalid_media_constraints", a.TypeError = "no_constraints", a.NONE = "", a.NO_RECORDER = "recorder_error", e.exports.useReactMediaRecorder = l;
    e.exports.ReactMediaRecorder = function(e) {
        return e.render(l(e))
    }
})), t.register("j8MCb", (function(n, r) {
    e(n.exports, "MediaRecorder", (function() {
        return B
    })), e(n.exports, "register", (function() {
        return L
    }));
    var o = t("8wn2Z"),
        i = t("5D4Bl"),
        a = t("dlqxb"),
        s = t("cu0A8"),
        c = t("hL8Lh"),
        u = t("20qjY"),
        l = t("bh0By"),
        d = (t("gg0a7"), t("ab8wv")),
        f = t("bPu89"),
        p = t("7uYFF"),
        h = t("imik6"),
        g = t("69cyv"),
        v = t("6Fxan"),
        m = t("OBO1o"),
        y = t("9Jb3c"),
        x = t("eAzqf"),
        C = t("cdIYa"),
        N = t("fhqBi"),
        A = t("5aSyY"),
        w = t("kqaFr");
    t("9ABEw"), t("9qj3B");
    const b = [],
        S = (0, N.createWindow)(),
        E = (0, f.createNativeBlobEventConstructor)(S),
        O = (0, i.createBlobEventFactory)(E),
        _ = (0, x.createWebAudioMediaRecorderFactory)(O, u.createInvalidModificationError, l.createInvalidStateError, g.createNotSupportedError),
        M = (0, y.createReadVariableSizeInteger)(A.readVariableSizeIntegerLength),
        T = (0, v.createReadElementContent)(M),
        I = (0, m.createReadElementType)(M),
        k = (0, a.createDecodeWebMChunk)(T, I),
        P = (0, C.createWebmPcmMediaRecorderFactory)(O, u.createInvalidModificationError, g.createNotSupportedError, k, M),
        R = (0, c.createEventTargetFactory)(S),
        F = (0, h.createNativeMediaRecorderConstructor)(S),
        j = (0, p.createNativeMediaRecorderFactory)(u.createInvalidModificationError, g.createNotSupportedError),
        B = (0, d.createMediaRecorderConstructor)(j, g.createNotSupportedError, _, P, b, (0, s.createEventTargetConstructor)(R, w.wrapEventListener), F),
        L = async e => {
            b.push(await (0, o.register)(e))
        }
})), t.register("8wn2Z", (function(n, r) {
    e(n.exports, "encode", (function() {
        return u
    })), e(n.exports, "instantiate", (function() {
        return l
    })), e(n.exports, "register", (function() {
        return d
    }));
    var o = t("fozkE"),
        i = t("iuFZR");
    const a = new Blob([i.worker], {
            type: "application/javascript; charset=utf-8"
        }),
        s = URL.createObjectURL(a),
        c = (0, o.load)(s),
        u = (c.connect, c.disconnect, c.encode),
        l = c.instantiate,
        d = (c.isSupported, c.register);
    URL.revokeObjectURL(s)
})), t.register("fozkE", (function(n, r) {
    e(n.exports, "load", (function() {
        return c
    }));
    var o = t("gMNno"),
        i = t("jrryh");
    t("an8Kp"), t("4hAxr");
    const a = new Set,
        s = (0, o.createBroker)({
            encode: ({
                call: e
            }) => async (t, n) => {
                const r = await e("encode", {
                    encoderId: t,
                    timeslice: n
                });
                return a.delete(t), r
            },
            instantiate: ({
                call: e
            }) => async (t, n) => {
                const r = (0, i.addUniqueNumber)(a);
                return {
                    encoderId: r,
                    port: await e("instantiate", {
                        encoderId: r,
                        mimeType: t,
                        sampleRate: n
                    })
                }
            },
            register: ({
                call: e
            }) => t => e("register", {
                port: t
            }, [t])
        }),
        c = e => {
            const t = new Worker(e);
            return s(t)
        }
})), t.register("gMNno", (function(n, r) {
    e(n.exports, "createBroker", (function() {
        return c
    }));
    var o = t("jrryh"),
        i = t("2HSAL"),
        a = t("3MDOD");
    t("kl7co"), t("jpLzD");
    const s = new WeakMap,
        c = e => {
            const t = (0, a.extendBrokerImplementation)(e);
            return e => {
                const n = (e => {
                    if (s.has(e)) return s.get(e);
                    const t = new Map;
                    return s.set(e, t), t
                })(e);
                e.addEventListener("message", (({
                    data: e
                }) => {
                    const {
                        id: t
                    } = e;
                    if (null !== t && n.has(t)) {
                        const {
                            reject: r,
                            resolve: o
                        } = n.get(t);
                        n.delete(t), void 0 === e.error ? o(e.result) : r(new Error(e.error.message))
                    }
                })), (0, i.isMessagePort)(e) && e.start();
                const r = (t, r = null, i = []) => new Promise(((a, s) => {
                        const c = (0, o.generateUniqueNumber)(n);
                        n.set(c, {
                            reject: s,
                            resolve: a
                        }), null === r ? e.postMessage({
                            id: c,
                            method: t
                        }, i) : e.postMessage({
                            id: c,
                            method: t,
                            params: r
                        }, i)
                    })),
                    a = (t, n, r = []) => {
                        e.postMessage({
                            id: null,
                            method: t,
                            params: n
                        }, r)
                    };
                let c = {};
                for (const [e, n] of Object.entries(t)) c = {
                    ...c,
                    [e]: n({
                        call: r,
                        notify: a
                    })
                };
                return {
                    ...c
                }
            }
        }
})), t.register("jrryh", (function(e, t) {
    var n, r, o, i, a, s, c, u, l, d, f;
    e.exports, n = e.exports, r = function(e) {
        return function(t) {
            var n = e(t);
            return t.add(n), n
        }
    }, o = function(e) {
        return function(t, n) {
            return e.set(t, n), n
        }
    }, i = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, s = 2 * (a = 536870912), c = function(e, t) {
        return function(n) {
            var r = t.get(n),
                o = void 0 === r ? n.size : r < s ? r + 1 : 0;
            if (!n.has(o)) return e(n, o);
            if (n.size < a) {
                for (; n.has(o);) o = Math.floor(Math.random() * s);
                return e(n, o)
            }
            if (n.size > i) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
            for (; n.has(o);) o = Math.floor(Math.random() * i);
            return e(n, o)
        }
    }, u = new WeakMap, l = o(u), d = c(l, u), f = r(d), n.addUniqueNumber = f, n.generateUniqueNumber = d, Object.defineProperty(n, "__esModule", {
        value: !0
    })
})), t.register("2HSAL", (function(t, n) {
    e(t.exports, "isMessagePort", (function() {
        return r
    }));
    const r = e => "function" == typeof e.start
})), t.register("3MDOD", (function(n, r) {
    e(n.exports, "extendBrokerImplementation", (function() {
        return i
    }));
    var o = t("58Iwn");
    const i = e => ({
        ...e,
        connect: ({
            call: e
        }) => async () => {
            const {
                port1: t,
                port2: n
            } = new MessageChannel, r = await e("connect", {
                port: t
            }, [t]);
            return o.PORT_MAP.set(n, r), n
        },
        disconnect: ({
            call: e
        }) => async t => {
            const n = o.PORT_MAP.get(t);
            if (void 0 === n) throw new Error("The given port is not connected.");
            await e("disconnect", {
                portId: n
            })
        },
        isSupported: ({
            call: e
        }) => () => e("isSupported")
    })
})), t.register("58Iwn", (function(t, n) {
    e(t.exports, "PORT_MAP", (function() {
        return r
    }));
    const r = new WeakMap
})), t.register("kl7co", (function(e, n) {
    t("iIENy"), t("5iWE3"), t("h7Asy"), t("iSXzc")
})), t.register("iIENy", (function(e, t) {})), t.register("5iWE3", (function(e, t) {})), t.register("h7Asy", (function(e, t) {})), t.register("iSXzc", (function(e, t) {})), t.register("jpLzD", (function(e, n) {
    t("a6Um3")
})), t.register("a6Um3", (function(e, t) {})), t.register("an8Kp", (function(e, n) {
    t("BqCHw")
})), t.register("BqCHw", (function(e, t) {})), t.register("4hAxr", (function(e, n) {
    t("5jpVJ"), t("eCuWU")
})), t.register("5jpVJ", (function(e, t) {})), t.register("eCuWU", (function(e, t) {})), t.register("iuFZR", (function(t, n) {
    e(t.exports, "worker", (function() {
        return r
    }));
    const r = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(t),s=o(r),i=o(n),c=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},u=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)s.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(s),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(u(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(a.default(e),[c(t[r.name],r.modifiers),n]):[].concat(a.default(e),[function(e){return c(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(a.default(e),a.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(a.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,a=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=a.cause,i=a.missingParameters,c=void 0===n?new Error:new Error(n(i));return null!==s&&(c.cause=s),void 0!==r&&(c.code=r(i)),void 0!==e.status&&(c.status=e.status),c}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,a=2*o,s=function(e,t){return function(r){var s=t.get(r),i=void 0===s?r.size:s<a?s+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),u=s(c,i),l=t(u);e.addUniqueNumber=l,e.generateUniqueNumber=u,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),a=["honest","hour","hono"];for(t in a)if(0==o.indexOf(a[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),a=r(906),s=r(344);e.exports=function(e){return n(e)||o(e)||a(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,a=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),s=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),c=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),u=(e,t)=>async r=>{let{data:{id:n,method:o,params:c}}=r;const u=t[o];try{if(void 0===u)throw a({method:o});const t=void 0===c?u():u(c);if(void 0===t)throw s({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:a=[]}=r;e.postMessage({id:n,result:t},a)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),a=(0,l.generateUniqueNumber)(d);return d.set(a,(()=>{o(),n.close(),d.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw c({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=u(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>{e.onmessage=null,e.close()},h=new WeakMap,g=new WeakMap,v=(e=>{const t=(r=e,{...r,connect:e=>{let{call:t}=e;return async()=>{const{port1:e,port2:r}=new MessageChannel,n=await t("connect",{port:e},[e]);return h.set(r,n),r}},disconnect:e=>{let{call:t}=e;return async e=>{const r=h.get(e);if(void 0===r)throw new Error("The given port is not connected.");await t("disconnect",{portId:r})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var r;return e=>{const r=(e=>{if(g.has(e))return g.get(e);const t=new Map;return g.set(e,t),t})(e);e.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(e)&&e.start();const n=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,s)=>{const i=(0,l.generateUniqueNumber)(r);r.set(i,{reject:s,resolve:a}),null===n?e.postMessage({id:i,method:t},o):e.postMessage({id:i,method:t,params:n},o)}))},o=function(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e.postMessage({id:null,method:t,params:r},n)};let a={};for(const[e,r]of Object.entries(t))a={...a,[e]:r({call:n,notify:o})};return{...a}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),w=async(e,t)=>{const r=v(t),n=await r.characterize(),o=n.toString();if(e.has(o))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(o,[n,r]),n},x=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(x),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(x,y),b=new Map,E=((e,t)=>r=>{const[n,o,a,s]=t(r);return a?new Promise((t=>{o.onmessage=a=>{let{data:i}=a;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,s,i)}})):n.encode(r,null)})(m,M),A=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(b),_=((e,t,r)=>(n,o,a)=>{if(t.has(n))throw new Error(\'There is already an encoder registered with an id called "\'.concat(n,\'".\'));const s=r(o),{port1:i,port2:c}=new MessageChannel,u=[s,i,!0,a];return t.set(n,u),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),u[2]=!1):s.record(n,a,r)},c})(m,x,A),I=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);p(self,{encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await I(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=_(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await w(b,t)}}})})()})();'
})), t.register("5D4Bl", (function(t, n) {
    e(t.exports, "createBlobEventFactory", (function() {
        return r
    }));
    const r = e => (t, n) => {
        if (null === e) {
            const {
                data: e,
                ...r
            } = n, o = new Event(t, r);
            return o.data = e, o
        }
        return new e(t, n)
    }
})), t.register("dlqxb", (function(t, n) {
    e(t.exports, "createDecodeWebMChunk", (function() {
        return r
    }));
    const r = (e, t) => (n, r, o) => {
        const i = [];
        let a = r,
            s = 0;
        for (; s < n.byteLength;)
            if (null === a) {
                const e = t(n, s);
                if (null === e) break;
                const {
                    length: r,
                    type: o
                } = e;
                a = o, s += r
            } else {
                const t = e(n, s, a, o);
                if (null === t) break;
                const {
                    content: r,
                    length: c
                } = t;
                a = null, s += c, null !== r && i.push(r)
            } return {
            contents: i,
            currentElementType: a,
            offset: s
        }
    }
})), t.register("cu0A8", (function(t, n) {
    e(t.exports, "createEventTargetConstructor", (function() {
        return r
    }));
    const r = (e, t) => class {
        addEventListener(e, n, r) {
            if (null !== n) {
                let o = this._listeners.get(n);
                void 0 === o && (o = t(this, n), "function" == typeof n && this._listeners.set(n, o)), this._nativeEventTarget.addEventListener(e, o, r)
            }
        }
        dispatchEvent(e) {
            return this._nativeEventTarget.dispatchEvent(e)
        }
        removeEventListener(e, t, n) {
            const r = null === t ? void 0 : this._listeners.get(t);
            this._nativeEventTarget.removeEventListener(e, void 0 === r ? null : r, n)
        }
        constructor(t = null) {
            this._listeners = new WeakMap, this._nativeEventTarget = null === t ? e() : t
        }
    }
})), t.register("hL8Lh", (function(t, n) {
    e(t.exports, "createEventTargetFactory", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) throw new Error("A native EventTarget could not be created.");
        return e.document.createElement("p")
    }
})), t.register("20qjY", (function(t, n) {
    e(t.exports, "createInvalidModificationError", (function() {
        return r
    }));
    const r = (e = "") => {
        try {
            return new DOMException(e, "InvalidModificationError")
        } catch (t) {
            return t.code = 13, t.message = e, t.name = "InvalidModificationError", t
        }
    }
})), t.register("bh0By", (function(t, n) {
    e(t.exports, "createInvalidStateError", (function() {
        return r
    }));
    const r = () => {
        try {
            return new DOMException("", "InvalidStateError")
        } catch (e) {
            return e.code = 11, e.name = "InvalidStateError", e
        }
    }
})), t.register("gg0a7", (function(t, n) {
    e(t.exports, "createIsSupportedPromise", (function() {
        return r
    }));
    const r = e => null === e || void 0 === e.MediaStream || void 0 !== e.MediaRecorder && void 0 === e.MediaRecorder.isTypeSupported ? Promise.resolve(!1) : new Promise((t => {
        if (void 0 === e.MediaRecorder) return t(!0);
        const n = document.createElement("canvas");
        if (n.getContext("2d"), "function" != typeof n.captureStream) return t(!1);
        const r = n.captureStream(),
            o = "audio/webm";
        try {
            const n = new e.MediaRecorder(r, {
                mimeType: o
            });
            n.addEventListener("dataavailable", (({
                data: e
            }) => t(e.type === o))), n.start(), setTimeout((() => n.stop()), 10)
        } catch (e) {
            t("NotSupportedError" === e.name)
        }
    }))
})), t.register("ab8wv", (function(t, n) {
    e(t.exports, "createMediaRecorderConstructor", (function() {
        return r
    }));
    const r = (e, t, n, r, o, i, a) => class extends i {
        get mimeType() {
            return this._internalMediaRecorder.mimeType
        }
        get ondataavailable() {
            return null === this._ondataavailable ? this._ondataavailable : this._ondataavailable[0]
        }
        set ondataavailable(e) {
            if (null !== this._ondataavailable && this.removeEventListener("dataavailable", this._ondataavailable[1]), "function" == typeof e) {
                const t = e.bind(this);
                this.addEventListener("dataavailable", t), this._ondataavailable = [e, t]
            } else this._ondataavailable = null
        }
        get onerror() {
            return null === this._onerror ? this._onerror : this._onerror[0]
        }
        set onerror(e) {
            if (null !== this._onerror && this.removeEventListener("error", this._onerror[1]), "function" == typeof e) {
                const t = e.bind(this);
                this.addEventListener("error", t), this._onerror = [e, t]
            } else this._onerror = null
        }
        get onpause() {
            return null === this._onpause ? this._onpause : this._onpause[0]
        }
        set onpause(e) {
            if (null !== this._onpause && this.removeEventListener("pause", this._onpause[1]), "function" == typeof e) {
                const t = e.bind(this);
                this.addEventListener("pause", t), this._onpause = [e, t]
            } else this._onpause = null
        }
        get onresume() {
            return null === this._onresume ? this._onresume : this._onresume[0]
        }
        set onresume(e) {
            if (null !== this._onresume && this.removeEventListener("resume", this._onresume[1]), "function" == typeof e) {
                const t = e.bind(this);
                this.addEventListener("resume", t), this._onresume = [e, t]
            } else this._onresume = null
        }
        get onstart() {
            return null === this._onstart ? this._onstart : this._onstart[0]
        }
        set onstart(e) {
            if (null !== this._onstart && this.removeEventListener("start", this._onstart[1]), "function" == typeof e) {
                const t = e.bind(this);
                this.addEventListener("start", t), this._onstart = [e, t]
            } else this._onstart = null
        }
        get onstop() {
            return null === this._onstop ? this._onstop : this._onstop[0]
        }
        set onstop(e) {
            if (null !== this._onstop && this.removeEventListener("stop", this._onstop[1]), "function" == typeof e) {
                const t = e.bind(this);
                this.addEventListener("stop", t), this._onstop = [e, t]
            } else this._onstop = null
        }
        get state() {
            return this._internalMediaRecorder.state
        }
        pause() {
            return this._internalMediaRecorder.pause()
        }
        resume() {
            return this._internalMediaRecorder.resume()
        }
        start(e) {
            return this._internalMediaRecorder.start(e)
        }
        stop() {
            return this._internalMediaRecorder.stop()
        }
        static isTypeSupported(e) {
            return null !== a && void 0 !== a.isTypeSupported && a.isTypeSupported(e) || o.some((t => t.test(e)))
        }
        constructor(i, s = {}) {
            const {
                mimeType: c
            } = s;
            if (null !== a && (void 0 === c || void 0 !== a.isTypeSupported && a.isTypeSupported(c))) {
                const t = e(a, i, s);
                super(t), this._internalMediaRecorder = t
            } else {
                if (void 0 === c || !o.some((e => e.test(c)))) throw null !== a && e(a, i, s), t();
                super(), null !== a && void 0 !== a.isTypeSupported && a.isTypeSupported("audio/webm;codecs=pcm") ? this._internalMediaRecorder = r(this, a, i, c) : this._internalMediaRecorder = n(this, i, c)
            }
            this._ondataavailable = null, this._onerror = null, this._onpause = null, this._onresume = null, this._onstart = null, this._onstop = null
        }
    }
})), t.register("bPu89", (function(t, n) {
    e(t.exports, "createNativeBlobEventConstructor", (function() {
        return r
    }));
    const r = e => null !== e && void 0 !== e.BlobEvent ? e.BlobEvent : null
})), t.register("7uYFF", (function(t, n) {
    e(t.exports, "createNativeMediaRecorderFactory", (function() {
        return r
    }));
    const r = (e, t) => (n, r, o) => {
        const i = [],
            a = new WeakMap,
            s = new WeakMap,
            c = new n(r, o),
            u = new WeakMap;
        let l = !0;
        var d, f, p, h;
        return c.addEventListener = (d = c.addEventListener, (t, n, r) => {
            let o = n;
            return "function" == typeof n && ("dataavailable" === t ? (o = e => {
                setTimeout((() => {
                    if (l && "inactive" === c.state) i.push(e.data);
                    else {
                        if (i.length > 0) {
                            const t = e.data;
                            Object.defineProperty(e, "data", {
                                value: new Blob([...i, t], {
                                    type: t.type
                                })
                            }), i.length = 0
                        }
                        n.call(c, e)
                    }
                }))
            }, a.set(n, o)) : "error" === t ? (o = t => {
                if (void 0 === t.error) n.call(c, new ErrorEvent("error", {
                    error: e()
                }));
                else if ("UnknownError" === t.error.name) {
                    const r = t.error.message;
                    n.call(c, new ErrorEvent("error", {
                        error: e(r)
                    }))
                } else t instanceof ErrorEvent ? n.call(c, t) : n.call(c, new ErrorEvent("error", {
                    error: t.error
                }))
            }, s.set(n, o)) : "stop" === t && (o = e => {
                l = !1, setTimeout((() => n.call(c, e)))
            }, u.set(n, o))), d.call(c, t, o, r)
        }), c.dispatchEvent = (f = c.dispatchEvent, e => {
            let t;
            setTimeout((() => {
                t = l, l = !1
            }));
            const n = f.call(c, e);
            return setTimeout((() => l = t)), n
        }), c.removeEventListener = (p = c.removeEventListener, (e, t, n) => {
            let r = t;
            if ("function" == typeof t)
                if ("dataavailable" === e) {
                    const e = a.get(t);
                    void 0 !== e && (r = e)
                } else if ("error" === e) {
                const e = s.get(t);
                void 0 !== e && (r = e)
            } else if ("stop" === e) {
                const e = u.get(t);
                void 0 !== e && (r = e)
            }
            return p.call(c, e, r, n)
        }), c.start = (h = c.start, e => {
            if (void 0 !== o.mimeType && o.mimeType.startsWith("audio/") && r.getVideoTracks().length > 0) throw t();
            return l = void 0 !== e, void 0 === e ? h.call(c) : h.call(c, e)
        }), c
    }
})), t.register("imik6", (function(t, n) {
    e(t.exports, "createNativeMediaRecorderConstructor", (function() {
        return r
    }));
    const r = e => null === e || void 0 === e.MediaRecorder ? null : e.MediaRecorder
})), t.register("69cyv", (function(t, n) {
    e(t.exports, "createNotSupportedError", (function() {
        return r
    }));
    const r = () => {
        try {
            return new DOMException("", "NotSupportedError")
        } catch (e) {
            return e.code = 9, e.name = "NotSupportedError", e
        }
    }
})), t.register("6Fxan", (function(t, n) {
    e(t.exports, "createReadElementContent", (function() {
        return r
    }));
    const r = e => (t, n, r, o = 2) => {
        const i = e(t, n);
        if (null === i) return i;
        const {
            length: a,
            value: s
        } = i;
        if ("master" === r) return {
            content: null,
            length: a
        };
        if (n + a + s > t.byteLength) return null;
        if ("binary" === r) {
            const e = (s / Float32Array.BYTES_PER_ELEMENT - 1) / o,
                r = Array.from({
                    length: o
                }, (() => new Float32Array(e)));
            for (let i = 0; i < e; i += 1) {
                const e = i * o + 1;
                for (let s = 0; s < o; s += 1) r[s][i] = t.getFloat32(n + a + (e + s) * Float32Array.BYTES_PER_ELEMENT, !0)
            }
            return {
                content: r,
                length: a + s
            }
        }
        return {
            content: null,
            length: a + s
        }
    }
})), t.register("OBO1o", (function(t, n) {
    e(t.exports, "createReadElementType", (function() {
        return r
    }));
    const r = e => (t, n) => {
        const r = e(t, n);
        if (null === r) return r;
        const {
            length: o,
            value: i
        } = r;
        return 35 === i ? {
            length: o,
            type: "binary"
        } : 46 === i || 97 === i || 88713574 === i || 106212971 === i || 139690087 === i || 172351395 === i || 256095861 === i ? {
            length: o,
            type: "master"
        } : {
            length: o,
            type: "unknown"
        }
    }
})), t.register("9Jb3c", (function(t, n) {
    e(t.exports, "createReadVariableSizeInteger", (function() {
        return r
    }));
    const r = e => (t, n) => {
        const r = e(t, n);
        if (null === r) return r;
        const o = n + Math.floor((r - 1) / 8);
        if (o + r > t.byteLength) return null;
        let i = t.getUint8(o) & (1 << 8 - r % 8) - 1;
        for (let e = 1; e < r; e += 1) i = (i << 8) + t.getUint8(o + e);
        return {
            length: r,
            value: i
        }
    }
})), t.register("eAzqf", (function(n, r) {
    e(n.exports, "createWebAudioMediaRecorderFactory", (function() {
        return c
    }));
    var o = t("8wn2Z"),
        i = t("gIXrK"),
        a = t("4xuAx");
    const s = "Missing AudioWorklet support. Maybe this is not running in a secure context.",
        c = (e, t, n, r) => (c, u, l) => {
            var d;
            const f = null === (d = u.getAudioTracks()[0]) || void 0 === d ? void 0 : d.getSettings().sampleRate,
                p = new(0, a.MinimalAudioContext)({
                    latencyHint: "playback",
                    sampleRate: f
                }),
                h = Math.max(1024, Math.ceil(p.baseLatency * p.sampleRate)),
                g = new(0, a.AudioBuffer)({
                    length: h,
                    sampleRate: p.sampleRate
                }),
                v = [],
                m = (0, i.addRecorderAudioWorkletModule)((e => {
                    if (void 0 === a.addAudioWorkletModule) throw new Error(s);
                    return (0, a.addAudioWorkletModule)(p, e)
                }));
            let y = null,
                x = null,
                C = null,
                N = null,
                A = !0;
            const w = t => {
                    c.dispatchEvent(e("dataavailable", {
                        data: new Blob(t, {
                            type: l
                        })
                    }))
                },
                b = async (e, t) => {
                    const n = await (0, o.encode)(e, t);
                    null === C ? v.push(...n) : (w(n), N = b(e, t))
                }, S = () => (A = !0, p.resume()), E = () => {
                    null !== C && (null !== y && (u.removeEventListener("addtrack", y), u.removeEventListener("removetrack", y)), null !== x && clearTimeout(x), C.then((async ({
                        constantSourceNode: e,
                        encoderId: t,
                        mediaStreamAudioSourceNode: n,
                        recorderAudioWorkletNode: r
                    }) => {
                        null !== N && (N.catch((() => {})), N = null), await r.stop(), n.disconnect(r), e.stop();
                        const i = await (0, o.encode)(t, null);
                        null === C && await O(), w([...v, ...i]), v.length = 0, c.dispatchEvent(new Event("stop"))
                    })), C = null)
                }, O = () => (A = !1, p.suspend());
            return O(), {
                get mimeType() {
                    return l
                },
                get state() {
                    return null === C ? "inactive" : A ? "recording" : "paused"
                },
                pause() {
                    if (null === C) throw n();
                    A && (O(), c.dispatchEvent(new Event("pause")))
                },
                resume() {
                    if (null === C) throw n();
                    A || (S(), c.dispatchEvent(new Event("resume")))
                },
                start(e) {
                    var d;
                    if (null !== C) throw n();
                    if (u.getVideoTracks().length > 0) throw r();
                    c.dispatchEvent(new Event("start"));
                    const f = u.getAudioTracks(),
                        v = 0 === f.length ? 2 : null !== (d = f[0].getSettings().channelCount) && void 0 !== d ? d : 2;
                    C = Promise.all([S(), m.then((() => (async (e, t, n, r, c) => {
                        const {
                            encoderId: u,
                            port: l
                        } = await (0, o.instantiate)(c, t.sampleRate);
                        if (void 0 === a.AudioWorkletNode) throw new Error(s);
                        return {
                            audioBufferSourceNode: new(0, a.AudioBufferSourceNode)(t, {
                                buffer: e
                            }),
                            encoderId: u,
                            mediaStreamAudioSourceNode: new(0, a.MediaStreamAudioSourceNode)(t, {
                                mediaStream: r
                            }),
                            port: l,
                            recorderAudioWorkletNode: (0, i.createRecorderAudioWorkletNode)(a.AudioWorkletNode, t, {
                                channelCount: n
                            })
                        }
                    })(g, p, v, u, l)))]).then((async ([, {
                        audioBufferSourceNode: t,
                        encoderId: n,
                        mediaStreamAudioSourceNode: r,
                        port: o,
                        recorderAudioWorkletNode: i
                    }]) => {
                        r.connect(i), await new Promise((e => {
                            t.onended = e, t.connect(i), t.start(p.currentTime + h / p.sampleRate)
                        })), t.disconnect(i);
                        const s = new(0, a.ConstantSourceNode)(p, {
                            offset: 0
                        });
                        return s.onended = () => s.disconnect(), s.connect(p.destination), s.start(), await i.record(o), void 0 !== e && (N = b(n, e)), {
                            constantSourceNode: s,
                            encoderId: n,
                            mediaStreamAudioSourceNode: r,
                            recorderAudioWorkletNode: i
                        }
                    }));
                    const A = u.getTracks();
                    y = () => {
                        E(), c.dispatchEvent(new ErrorEvent("error", {
                            error: t()
                        }))
                    }, u.addEventListener("addtrack", y), u.addEventListener("removetrack", y), x = setInterval((() => {
                        const e = u.getTracks();
                        e.length === A.length && !e.some(((e, t) => e !== A[t])) || null === y || y()
                    }), 1e3)
                },
                stop: E
            }
        }
})), t.register("gIXrK", (function(n, r) {
    e(n.exports, "addRecorderAudioWorkletModule", (function() {
        return f
    })), e(n.exports, "createRecorderAudioWorkletNode", (function() {
        return p
    }));
    var o = t("jrryh"),
        i = t("byttE");
    t("9Yi0Z");
    t("7ugbc");
    var a = t("aKdEl"),
        s = t("1vkE0"),
        c = t("8c3l4"),
        u = t("9giGU"),
        l = t("556J8"),
        d = t("e3gaq");
    t("1fFaP"), t("iaff2");
    const f = (0, a.createAddRecorderAudioWorkletModule)(Blob, URL, d.worklet),
        p = (0, u.createRecorderAudioWorkletNodeFactory)(s.createListener, (0, c.createPostMessageFactory)(o.generateUniqueNumber), i.on, l.validateState)
})), t.register("byttE", (function(n, r) {
    e(n.exports, "on", (function() {
        return R
    }));
    var o = t("3dWOG"),
        i = t("3U1Tv"),
        a = t("au3Rj"),
        s = t("8z2d3"),
        c = t("jvjRi"),
        u = t("ix9pi"),
        l = t("NLGQL"),
        d = t("7Xjzk"),
        f = t("hkawV"),
        p = t("1miWL"),
        h = t("8bqlq"),
        g = t("gt6I2"),
        v = t("cOQsh"),
        m = t("fqkzs"),
        y = t("1nVPV"),
        x = t("5gx4n"),
        C = t("3PlKl"),
        N = t("is8Kh"),
        A = t("21XGJ"),
        w = t("bIP2P"),
        b = t("05bbl"),
        S = t("6iWlG"),
        E = t("5yuZf"),
        O = t("cWzIU"),
        _ = t("iScDV");
    t("185Qy"), t("3k4n3");
    const M = (0, E.createWindow)(),
        T = (0, O.createWrapSubscribeFunction)(o.patch, i.toObserver),
        I = ((0, a.createAnimationFrame)(_.emitNotSupportedError, M, T), (0, v.createMutations)(_.emitNotSupportedError, M, T)),
        k = (0, l.createMapSubscribableThing)(T),
        P = (0, C.createPrependSubscribableThing)(T),
        R = ((0, s.createAttribute)(k, I, P), (0, c.createGeolocation)(_.emitNotSupportedError, M, T), (0, u.createIntersections)(_.emitNotSupportedError, M, T), (0, d.createMediaDevices)(_.emitNotSupportedError, M, T), (0, f.createMediaQueryMatch)(_.emitNotSupportedError, M, T), (0, p.createMetrics)(_.emitNotSupportedError, M, T), (0, h.createMidiInputs)(T), (0, g.createMidiOutputs)(T), (0, m.createOn)(T));
    (0, y.createOnline)(_.emitNotSupportedError, M, T), (0, x.createPermissionState)(_.emitNotSupportedError, M, T), (0, N.createReports)(_.emitNotSupportedError, M, T), (0, A.createResizes)(_.emitNotSupportedError, M, T), (0, w.createUnhandledRejection)(_.emitNotSupportedError, M, T), (0, b.createVideoFrame)(_.emitNotSupportedError, T), (0, S.createWakeLock)(_.emitNotSupportedError, M, T)
})), t.register("3dWOG", (function(n, r) {
    e(n.exports, "patch", (function() {
        return i
    }));
    var o = t("12b0r");

    function i(e) {
        return Symbol.observable || ("function" == typeof e && e.prototype && e.prototype[Symbol.observable] ? (e.prototype[o.observable] = e.prototype[Symbol.observable], delete e.prototype[Symbol.observable]) : (e[o.observable] = e[Symbol.observable], delete e[Symbol.observable])), e
    }
})), t.register("12b0r", (function(t, n) {
    e(t.exports, "observable", (function() {
        return r
    }));
    const r = Symbol.observable || "@@observable"
})), t.register("3U1Tv", (function(t, n) {
    e(t.exports, "toObserver", (function() {
        return i
    }));
    const r = () => {},
        o = e => {
            throw e
        };

    function i(e) {
        var t, n, i;
        return e ? e.next && e.error && e.complete ? e : {
            complete: (null !== (t = e.complete) && void 0 !== t ? t : r).bind(e),
            error: (null !== (n = e.error) && void 0 !== n ? n : o).bind(e),
            next: (null !== (i = e.next) && void 0 !== i ? i : r).bind(e)
        } : {
            complete: r,
            error: o,
            next: r
        }
    }
})), t.register("au3Rj", (function(t, n) {
    e(t.exports, "createAnimationFrame", (function() {
        return r
    }));
    const r = (e, t, n) => () => n((n => {
        if (null === t || void 0 === t.cancelAnimationFrame || void 0 === t.requestAnimationFrame) return e(n);
        let r = t.requestAnimationFrame((function e(o) {
            r = t.requestAnimationFrame(e), n.next(o)
        }));
        return () => t.cancelAnimationFrame(r)
    }))
})), t.register("8z2d3", (function(t, n) {
    e(t.exports, "createAttribute", (function() {
        return r
    }));
    const r = (e, t, n) => (r, o) => {
        const i = () => r.getAttribute(o);
        return n(e(t(r, {
            attributeFilter: [o],
            childList: !1,
            subtree: !1
        }), (() => i())), i())
    }
})), t.register("jvjRi", (function(t, n) {
    e(t.exports, "createGeolocation", (function() {
        return r
    }));
    const r = (e, t, n) => r => n((n => {
        if (null === t || void 0 === t.navigator || void 0 === t.navigator.geolocation || void 0 === t.navigator.geolocation.clearWatch || void 0 === t.navigator.geolocation.watchPosition) return e(n);
        const o = t.navigator.geolocation.watchPosition((e => n.next(e)), (e => n.error(e)), r);
        return () => t.navigator.geolocation.clearWatch(o)
    }))
})), t.register("ix9pi", (function(t, n) {
    e(t.exports, "createIntersections", (function() {
        return r
    }));
    const r = (e, t, n) => (r, o) => n((n => {
        if (null === t || void 0 === t.IntersectionObserver) return e(n);
        const i = new t.IntersectionObserver((e => n.next(e)), o);
        try {
            i.observe(r)
        } catch (e) {
            n.error(e)
        }
        return () => i.disconnect()
    }))
})), t.register("NLGQL", (function(t, n) {
    e(t.exports, "createMapSubscribableThing", (function() {
        return r
    }));
    const r = e => (t, n) => e((e => t({
        ...e,
        next: t => e.next(n(t))
    })))
})), t.register("7Xjzk", (function(t, n) {
    e(t.exports, "createMediaDevices", (function() {
        return r
    }));
    const r = (e, t, n) => () => n((n => {
        if (null === t || void 0 === t.navigator || void 0 === t.navigator.mediaDevices || void 0 === t.navigator.mediaDevices.enumerateDevices) return e(n);
        let r = !0;
        const o = () => {
                t.navigator.mediaDevices.enumerateDevices().then((e => {
                    r && n.next(e)
                }), (e => {
                    r && (i(), n.error(e))
                }))
            },
            i = () => {
                r = !1, t.navigator.mediaDevices.removeEventListener("devicechange", o)
            };
        return o(), t.navigator.mediaDevices.addEventListener("devicechange", o), i
    }))
})), t.register("hkawV", (function(t, n) {
    e(t.exports, "createMediaQueryMatch", (function() {
        return r
    }));
    const r = (e, t, n) => r => n((n => {
        if (null === t || void 0 === t.matchMedia) return e(n);
        const o = t.matchMedia(r);
        return n.next(o.matches), o.onchange = () => n.next(o.matches), () => {
            o.onchange = null
        }
    }))
})), t.register("1miWL", (function(t, n) {
    e(t.exports, "createMetrics", (function() {
        return r
    }));
    const r = (e, t, n) => r => n((n => {
        if (null === t || void 0 === t.PerformanceObserver) return e(n);
        const o = new t.PerformanceObserver((e => n.next(e.getEntries())));
        try {
            o.observe(r)
        } catch (e) {
            n.error(e)
        }
        return () => o.disconnect()
    }))
})), t.register("8bqlq", (function(t, n) {
    e(t.exports, "createMidiInputs", (function() {
        return r
    }));
    const r = e => t => e((e => {
        let n = Array.from(t.inputs.values());
        const r = () => {
            const r = t.inputs;
            (n.length !== r.size || n.some((({
                id: e
            }) => !r.has(e)))) && (n = Array.from(r.values()), e.next(n))
        };
        return e.next(n), t.addEventListener("statechange", r), () => t.removeEventListener("statechange", r)
    }))
})), t.register("gt6I2", (function(t, n) {
    e(t.exports, "createMidiOutputs", (function() {
        return r
    }));
    const r = e => t => e((e => {
        let n = Array.from(t.outputs.values());
        const r = () => {
            const r = t.outputs;
            (n.length !== r.size || n.some((({
                id: e
            }) => !r.has(e)))) && (n = Array.from(r.values()), e.next(n))
        };
        return e.next(n), t.addEventListener("statechange", r), () => t.removeEventListener("statechange", r)
    }))
})), t.register("cOQsh", (function(t, n) {
    e(t.exports, "createMutations", (function() {
        return r
    }));
    const r = (e, t, n) => (r, o) => n((n => {
        if (null === t || void 0 === t.MutationObserver) return e(n);
        const i = new t.MutationObserver((e => n.next(e)));
        try {
            i.observe(r, o)
        } catch (e) {
            n.error(e)
        }
        return () => i.disconnect()
    }))
})), t.register("fqkzs", (function(t, n) {
    e(t.exports, "createOn", (function() {
        return r
    }));
    const r = e => (t, n, r) => e((e => {
        const o = t => e.next(t);
        return t.addEventListener(n, o, r), () => t.removeEventListener(n, o, r)
    }))
})), t.register("1nVPV", (function(t, n) {
    e(t.exports, "createOnline", (function() {
        return r
    }));
    const r = (e, t, n) => () => n((n => {
        if (null === t || void 0 === t.navigator || void 0 === t.navigator.onLine) return e(n);
        const r = () => n.next(!1),
            o = () => n.next(!0);
        return t.addEventListener("offline", r), t.addEventListener("online", o), n.next(t.navigator.onLine), () => {
            t.removeEventListener("offline", r), t.removeEventListener("online", o)
        }
    }))
})), t.register("5gx4n", (function(t, n) {
    e(t.exports, "createPermissionState", (function() {
        return r
    }));
    const r = (e, t, n) => r => n((n => {
        if (null === t || void 0 === t.navigator || void 0 === t.navigator.permissions || void 0 === t.navigator.permissions.query) return e(n);
        let o = !0,
            i = () => {
                o = !1
            };
        return t.navigator.permissions.query(r).then((e => {
            o && n.next(e.state), o && (e.onchange = () => n.next(e.state), i = () => {
                e.onchange = null
            })
        }), (e => {
            o && n.error(e)
        })), () => i()
    }))
})), t.register("3PlKl", (function(t, n) {
    e(t.exports, "createPrependSubscribableThing", (function() {
        return r
    }));
    const r = e => (t, n) => e((e => (e.next(n), t(e))))
})), t.register("is8Kh", (function(t, n) {
    e(t.exports, "createReports", (function() {
        return r
    }));
    const r = (e, t, n) => r => n((n => {
        if (null === t || void 0 === t.ReportingObserver) return e(n);
        const o = new t.ReportingObserver((e => n.next(e)), r);
        return o.observe(), () => o.disconnect()
    }))
})), t.register("21XGJ", (function(t, n) {
    e(t.exports, "createResizes", (function() {
        return r
    }));
    const r = (e, t, n) => (r, o) => n((n => {
        if (null === t || void 0 === t.ResizeObserver) return e(n);
        const i = new t.ResizeObserver((e => n.next(e)));
        try {
            i.observe(r, o)
        } catch (e) {
            n.error(e)
        }
        return () => i.disconnect()
    }))
})), t.register("bIP2P", (function(t, n) {
    e(t.exports, "createUnhandledRejection", (function() {
        return r
    }));
    const r = (e, t, n) => r => n((n => {
        if (null === t || void 0 === t.clearInterval || void 0 === t.setInterval) return e(n);
        const o = new Map;
        let i = null;
        const a = ({
                promise: e
            }) => o.delete(e),
            s = () => {
                const e = Date.now() - r;
                o.forEach((({
                    reason: t,
                    timestamp: r
                }, i) => {
                    r > e || (o.delete(i), n.next(t))
                })), null !== i && 0 === o.size && (t.clearInterval(i), i = null)
            },
            c = e => {
                e.preventDefault(), o.set(e.promise, {
                    reason: e.reason,
                    timestamp: Date.now()
                }), null === i && (i = t.setInterval(s, r / 2))
            };
        return t.addEventListener("rejectionhandled", a), t.addEventListener("unhandledrejection", c), () => {
            null !== i && t.clearInterval(i), t.removeEventListener("rejectionhandled", a), t.removeEventListener("unhandledrejection", c)
        }
    }))
})), t.register("05bbl", (function(t, n) {
    e(t.exports, "createVideoFrame", (function() {
        return r
    }));
    const r = (e, t) => n => t((t => {
        if (void 0 === n.cancelVideoFrameCallback || void 0 === n.requestVideoFrameCallback) return e(t);
        let r = n.requestVideoFrameCallback((function e(o, i) {
            r = n.requestVideoFrameCallback(e), t.next({
                ...i,
                now: o
            })
        }));
        return () => n.cancelVideoFrameCallback(r)
    }))
})), t.register("6iWlG", (function(t, n) {
    e(t.exports, "createWakeLock", (function() {
        return r
    }));
    const r = (e, t, n) => r => n((n => {
        if (null === t || void 0 === t.navigator || void 0 === t.navigator.wakeLock) return e(n);
        const o = e => e.release().catch((() => {})),
            i = e => {
                e.onrelease = null
            };
        let a = !0;
        const s = () => {
            a = !1
        };
        let c = s;
        const u = () => t.navigator.wakeLock.request(r).then((e => {
            a && n.next(!0), a ? (e.onrelease = () => {
                n.next(!1), c = s, i(e), u()
            }, c = () => {
                i(e), o(e)
            }) : o(e)
        }), (e => {
            a && n.error(e)
        }));
        return u(), () => c()
    }))
})), t.register("5yuZf", (function(t, n) {
    e(t.exports, "createWindow", (function() {
        return r
    }));
    const r = () => "undefined" == typeof window ? null : window
})), t.register("cWzIU", (function(t, n) {
    e(t.exports, "createWrapSubscribeFunction", (function() {
        return r
    }));
    const r = (e, t) => {
        const n = () => {};
        return r => {
            const o = (...e) => {
                const o = r((e => "function" == typeof e[0])(e) ? t({
                    next: e[0]
                }) : t(...e));
                return void 0 !== o ? o : n
            };
            return o[Symbol.observable] = () => ({
                subscribe: (...e) => ({
                    unsubscribe: o(...e)
                })
            }), e(o)
        }
    }
})), t.register("iScDV", (function(t, n) {
    e(t.exports, "emitNotSupportedError", (function() {
        return r
    }));
    const r = e => (e.error(new Error("The required browser API seems to be not supported.")), () => {})
})), t.register("185Qy", (function(e, n) {
    t("1qTwf"), t("7eQki"), t("fzPZJ"), t("kaohG"), t("farXU"), t("4w5Hq"), t("jBY2s"), t("ezIc7"), t("fSlHi"), t("03fQk"), t("aBy46"), t("11Em3"), t("3RxXS"), t("jg4My"), t("dWBne"), t("8ck3R"), t("cbglo"), t("eCsAb"), t("3ZmVL"), t("dTifp"), t("ftFmX")
})), t.register("1qTwf", (function(e, t) {})), t.register("7eQki", (function(e, t) {})), t.register("fzPZJ", (function(e, t) {})), t.register("kaohG", (function(e, t) {})), t.register("farXU", (function(e, t) {})), t.register("4w5Hq", (function(e, t) {})), t.register("jBY2s", (function(e, t) {})), t.register("ezIc7", (function(e, t) {})), t.register("fSlHi", (function(e, t) {})), t.register("03fQk", (function(e, t) {})), t.register("aBy46", (function(e, t) {})), t.register("11Em3", (function(e, t) {})), t.register("3RxXS", (function(e, t) {})), t.register("jg4My", (function(e, t) {})), t.register("dWBne", (function(e, t) {})), t.register("8ck3R", (function(e, t) {})), t.register("cbglo", (function(e, t) {})), t.register("eCsAb", (function(e, t) {})), t.register("3ZmVL", (function(e, t) {})), t.register("dTifp", (function(e, t) {})), t.register("ftFmX", (function(e, t) {})), t.register("3k4n3", (function(e, n) {
    t("aM7iO"), t("h9QCr"), t("clVOw"), t("7eHXc"), t("l3WvD"), t("b3iOC"), t("hk1sV"), t("bEFNM"), t("85g6W"), t("6f1oP"), t("5zAs0"), t("eSnkU"), t("6Kqdw"), t("gyAJ1"), t("3tx6j"), t("4wpzX"), t("hv1aE"), t("HMWPQ"), t("i5am2"), t("lu2WG"), t("gblG6"), t("j43h5"), t("kj3g3"), t("9c0wU"), t("lILOI"), t("luIMC"), t("5hBpt"), t("b6NiC"), t("8SNi4"), t("cy8Wx"), t("3EQ0R"), t("hDfu0"), t("02VXQ"), t("j2jDc"), t("cr9XD"), t("lxGYq"), t("iBWZV"), t("1oIz7"), t("3Qohj"), t("8uQd1"), t("aupBm"), t("4WQ33"), t("8PCYp"), t("39nl4"), t("5eLrk"), t("2xmyN"), t("3ZJRy"), t("9pVSx"), t("fNxyF"), t("3CEbk"), t("5Xojq"), t("9oE0e"), t("4YVyB"), t("cVXgX"), t("3IW5H")
})), t.register("aM7iO", (function(e, t) {})), t.register("h9QCr", (function(e, t) {})), t.register("clVOw", (function(e, t) {})), t.register("7eHXc", (function(e, t) {})), t.register("l3WvD", (function(e, t) {})), t.register("b3iOC", (function(e, t) {})), t.register("hk1sV", (function(e, t) {})), t.register("bEFNM", (function(e, t) {})), t.register("85g6W", (function(e, t) {})), t.register("6f1oP", (function(e, t) {})), t.register("5zAs0", (function(e, t) {})), t.register("eSnkU", (function(e, t) {})), t.register("6Kqdw", (function(e, t) {})), t.register("gyAJ1", (function(e, t) {})), t.register("3tx6j", (function(e, t) {})), t.register("4wpzX", (function(e, t) {})), t.register("hv1aE", (function(e, t) {})), t.register("HMWPQ", (function(e, t) {})), t.register("i5am2", (function(e, t) {})), t.register("lu2WG", (function(e, t) {})), t.register("gblG6", (function(e, t) {})), t.register("j43h5", (function(e, t) {})), t.register("kj3g3", (function(e, t) {})), t.register("9c0wU", (function(e, t) {})), t.register("lILOI", (function(e, t) {})), t.register("luIMC", (function(e, t) {})), t.register("5hBpt", (function(e, t) {})), t.register("b6NiC", (function(e, t) {})), t.register("8SNi4", (function(e, t) {})), t.register("cy8Wx", (function(e, t) {})), t.register("3EQ0R", (function(e, t) {})), t.register("hDfu0", (function(e, t) {})), t.register("02VXQ", (function(e, t) {})), t.register("j2jDc", (function(e, t) {})), t.register("cr9XD", (function(e, t) {})), t.register("lxGYq", (function(e, t) {})), t.register("iBWZV", (function(e, t) {})), t.register("1oIz7", (function(e, t) {})), t.register("3Qohj", (function(e, t) {})), t.register("8uQd1", (function(e, t) {})), t.register("aupBm", (function(e, t) {})), t.register("4WQ33", (function(e, t) {})), t.register("8PCYp", (function(e, t) {})), t.register("39nl4", (function(e, t) {})), t.register("5eLrk", (function(e, t) {})), t.register("2xmyN", (function(e, t) {})), t.register("3ZJRy", (function(e, t) {})), t.register("9pVSx", (function(e, t) {})), t.register("fNxyF", (function(e, t) {})), t.register("3CEbk", (function(e, t) {})), t.register("5Xojq", (function(e, t) {})), t.register("9oE0e", (function(e, t) {})), t.register("4YVyB", (function(e, t) {})), t.register("cVXgX", (function(e, t) {})), t.register("3IW5H", (function(e, t) {})), t.register("9Yi0Z", (function(e, n) {
    t("6IvDu"), t("hXr0n"), t("7ugbc");
    t("j09PV"), t("lwogV")
})), t.register("6IvDu", (function(n, r) {
    e(n.exports, "createMessageHandler", (function() {
        return i
    }));
    var o = t("QByK8");
    const i = (e, t) => async ({
        data: {
            id: n,
            method: r,
            params: i
        }
    }) => {
        const a = t[r];
        try {
            if (void 0 === a) throw (0, o.renderMethodNotFoundError)({
                method: r
            });
            const t = void 0 === i ? a() : a(i);
            if (void 0 === t) throw (0, o.renderMissingResponseError)({
                method: r
            });
            const s = t instanceof Promise ? await t : t;
            if (null === n) {
                if (void 0 !== s.result) throw (0, o.renderUnexpectedResultError)({
                    method: r
                })
            } else {
                if (void 0 === s.result) throw (0, o.renderUnexpectedResultError)({
                    method: r
                });
                const {
                    result: t,
                    transferables: i = []
                } = s;
                e.postMessage({
                    id: n,
                    result: t
                }, i)
            }
        } catch (t) {
            const {
                message: r,
                status: o = -32603
            } = t;
            e.postMessage({
                error: {
                    code: o,
                    message: r
                },
                id: n
            })
        }
    }
})), t.register("QByK8", (function(n, r) {
    e(n.exports, "renderMethodNotFoundError", (function() {
        return c
    })), e(n.exports, "renderMissingResponseError", (function() {
        return u
    })), e(n.exports, "renderUnexpectedResultError", (function() {
        return l
    })), e(n.exports, "renderUnknownPortIdError", (function() {
        return d
    }));
    var o = t("h5pcE");
    const i = -32603,
        a = -32602,
        s = -32601,
        c = (0, o.compile)({
            message: 'The requested method called "${method}" is not supported.',
            status: s
        }),
        u = (0, o.compile)({
            message: 'The handler of the method called "${method}" returned no required result.',
            status: i
        }),
        l = (0, o.compile)({
            message: 'The handler of the method called "${method}" returned an unexpected result.',
            status: i
        }),
        d = (0, o.compile)({
            message: 'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
            status: a
        })
})), t.register("h5pcE", (function(e, n) {
    e.exports,
        function(e, t, n, r) {
            function o(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var i = o(t),
                a = o(n),
                s = o(r),
                c = function(e, t) {
                    return void 0 === t ? e : t.reduce((function(e, t) {
                        if ("capitalize" === t) {
                            var n = e.charAt(0).toUpperCase(),
                                r = e.slice(1);
                            return "".concat(n).concat(r)
                        }
                        return "dashify" === t ? a.default(e) : "prependIndefiniteArticle" === t ? "".concat(s.default(e), " ").concat(e) : e
                    }), e)
                },
                u = function(e) {
                    var t = e.name + e.modifiers.map((function(e) {
                        return "\\.".concat(e, "\\(\\)")
                    })).join("");
                    return new RegExp("\\$\\{".concat(t, "}"), "g")
                },
                l = function(e, t) {
                    for (var n = /\${([^.}]+)((\.[^(]+\(\))*)}/g, r = [], o = n.exec(e); null !== o;) {
                        var a = {
                            modifiers: [],
                            name: o[1]
                        };
                        if (void 0 !== o[3])
                            for (var s = /\.[^(]+\(\)/g, l = s.exec(o[2]); null !== l;) a.modifiers.push(l[0].slice(1, -2)), l = s.exec(o[2]);
                        r.push(a), o = n.exec(e)
                    }
                    var d = r.reduce((function(e, n) {
                        return e.map((function(e) {
                            return "string" == typeof e ? e.split(u(n)).reduce((function(e, r, o) {
                                return 0 === o ? [r] : n.name in t ? [].concat(i.default(e), [c(t[n.name], n.modifiers), r]) : [].concat(i.default(e), [function(e) {
                                    return c(e[n.name], n.modifiers)
                                }, r])
                            }), []) : [e]
                        })).reduce((function(e, t) {
                            return [].concat(i.default(e), i.default(t))
                        }), [])
                    }), [e]);
                    return function(e) {
                        return d.reduce((function(t, n) {
                            return [].concat(i.default(t), "string" == typeof n ? [n] : [n(e)])
                        }), []).join("")
                    }
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = void 0 === e.code ? void 0 : l(e.code, t),
                        r = void 0 === e.message ? void 0 : l(e.message, t);

                    function o() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = arguments.length > 1 ? arguments[1] : void 0,
                            i = void 0 === o && (t instanceof Error || void 0 !== t.code && "Exception" === t.code.slice(-9)) ? {
                                cause: t,
                                missingParameters: {}
                            } : {
                                cause: o,
                                missingParameters: t
                            },
                            a = i.cause,
                            s = i.missingParameters,
                            c = void 0 === r ? new Error : new Error(r(s));
                        return null !== a && (c.cause = a), void 0 !== n && (c.code = n(s)), void 0 !== e.status && (c.status = e.status), c
                    }
                    return o
                };
            e.compile = d, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(e.exports, t("bEZaQ"), t("57GOH"), t("l10WK"))
})), t.register("bEZaQ", (function(e, n) {
    var r = t("6iQHQ"),
        o = t("oW2sZ"),
        i = t("bdNCs"),
        a = t("6hxY4");
    e.exports = function(e) {
        return r(e) || o(e) || i(e) || a()
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("6iQHQ", (function(e, n) {
    var r = t("e9cUd");
    e.exports = function(e) {
        if (Array.isArray(e)) return r(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("e9cUd", (function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("oW2sZ", (function(e, t) {
    e.exports = function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("bdNCs", (function(e, n) {
    var r = t("e9cUd");
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("6hxY4", (function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("57GOH", (function(e, t) {
    e.exports = (e, t) => {
        if ("string" != typeof e) throw new TypeError("expected a string");
        return e.trim().replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\W/g, (e => /[À-ž]/.test(e) ? e : "-")).replace(/^-+|-+$/g, "").replace(/-{2,}/g, (e => t && t.condense ? "-" : e)).toLowerCase()
    }
})), t.register("l10WK", (function(e, t) {
    var n = function(e) {
        var t, n, r = /\w+/.exec(e);
        if (!r) return "an";
        var o = (n = r[0]).toLowerCase(),
            i = ["honest", "hour", "hono"];
        for (t in i)
            if (0 == o.indexOf(i[t])) return "an";
        if (1 == o.length) return "aedhilmnorsx".indexOf(o) >= 0 ? "an" : "a";
        if (n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) return "an";
        var a = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
        for (t = 0; t < a.length; t++)
            if (o.match(a[t])) return "a";
        return n.match(/^U[NK][AIEO]/) ? "a" : n == n.toUpperCase() ? "aedhilmnorsx".indexOf(o[0]) >= 0 ? "an" : "a" : "aeiou".indexOf(o[0]) >= 0 || o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/) ? "an" : "a"
    };
    void 0 !== e.exports ? e.exports = n : window.indefiniteArticle = n
})), t.register("hXr0n", (function(n, r) {
    e(n.exports, "extendWorkerImplementation", (function() {
        return c
    }));
    var o = t("jrryh"),
        i = t("QByK8"),
        a = t("7ugbc");
    const s = new Map,
        c = (e, t, n) => ({
            ...t,
            connect: ({
                port: n
            }) => {
                n.start();
                const r = e(n, t),
                    i = (0, o.generateUniqueNumber)(s);
                return s.set(i, (() => {
                    r(), n.close(), s.delete(i)
                })), {
                    result: i
                }
            },
            disconnect: ({
                portId: e
            }) => {
                const t = s.get(e);
                if (void 0 === t) throw (0, i.renderUnknownPortIdError)({
                    portId: e.toString()
                });
                return t(), {
                    result: null
                }
            },
            isSupported: async () => {
                if (await (0, a.isSupportingTransferables)()) {
                    const e = n();
                    return {
                        result: e instanceof Promise ? await e : e
                    }
                }
                return {
                    result: !1
                }
            }
        })
})), t.register("7ugbc", (function(t, n) {
    e(t.exports, "isSupportingTransferables", (function() {
        return r
    }));
    const r = () => new Promise((e => {
        const t = new ArrayBuffer(0),
            {
                port1: n,
                port2: r
            } = new MessageChannel;
        n.onmessage = ({
            data: t
        }) => e(null !== t), r.postMessage(t, [t])
    }))
})), t.register("j09PV", (function(e, n) {
    t("lvWTl"), t("i8nVX"), t("6DtYf"), t("hyErR"), t("fh569"), t("h7brO"), t("ki6CH"), t("7Yu2p"), t("c4r7F"), t("7CQ5K"), t("hheEZ"), t("jGC28"), t("bXaE0"), t("awU2O")
})), t.register("lvWTl", (function(e, t) {})), t.register("i8nVX", (function(e, t) {})), t.register("6DtYf", (function(e, t) {})), t.register("hyErR", (function(e, t) {})), t.register("fh569", (function(e, t) {})), t.register("h7brO", (function(e, t) {})), t.register("ki6CH", (function(e, t) {})), t.register("7Yu2p", (function(e, t) {})), t.register("c4r7F", (function(e, t) {})), t.register("7CQ5K", (function(e, t) {})), t.register("hheEZ", (function(e, t) {})), t.register("jGC28", (function(e, t) {})), t.register("bXaE0", (function(e, t) {})), t.register("awU2O", (function(e, t) {})), t.register("lwogV", (function(e, n) {
    t("bTfJ0"), t("9NmRd"), t("3rMpk"), t("c3rrL"), t("a7GdQ"), t("ijpqD"), t("bOGiG"), t("fipLy"), t("85O8N"), t("2IrKI"), t("lVjRr")
})), t.register("bTfJ0", (function(e, t) {})), t.register("9NmRd", (function(e, t) {})), t.register("3rMpk", (function(e, t) {})), t.register("c3rrL", (function(e, t) {})), t.register("a7GdQ", (function(e, t) {})), t.register("ijpqD", (function(e, t) {})), t.register("bOGiG", (function(e, t) {})), t.register("fipLy", (function(e, t) {})), t.register("85O8N", (function(e, t) {})), t.register("2IrKI", (function(e, t) {})), t.register("lVjRr", (function(e, t) {})), t.register("aKdEl", (function(t, n) {
    e(t.exports, "createAddRecorderAudioWorkletModule", (function() {
        return r
    }));
    const r = (e, t, n) => async r => {
        const o = new e([n], {
                type: "application/javascript; charset=utf-8"
            }),
            i = t.createObjectURL(o);
        try {
            await r(i)
        } finally {
            t.revokeObjectURL(i)
        }
    }
})), t.register("1vkE0", (function(t, n) {
    e(t.exports, "createListener", (function() {
        return r
    }));
    const r = e => ({
        data: t
    }) => {
        const {
            id: n
        } = t;
        if (null !== n) {
            const r = e.get(n);
            if (void 0 !== r) {
                const {
                    reject: o,
                    resolve: i
                } = r;
                e.delete(n), void 0 === t.error ? i(t.result) : o(new Error(t.error.message))
            }
        }
    }
})), t.register("8c3l4", (function(t, n) {
    e(t.exports, "createPostMessageFactory", (function() {
        return r
    }));
    const r = e => (t, n) => (r, o = []) => new Promise(((i, a) => {
        const s = e(t);
        t.set(s, {
            reject: a,
            resolve: i
        }), n.postMessage({
            id: s,
            ...r
        }, o)
    }))
})), t.register("9giGU", (function(t, n) {
    e(t.exports, "createRecorderAudioWorkletNodeFactory", (function() {
        return r
    }));
    const r = (e, t, n, r) => (o, i, a = {}) => {
        const s = new o(i, "recorder-audio-worklet-processor", {
                ...a,
                channelCountMode: "explicit",
                numberOfInputs: 1,
                numberOfOutputs: 0
            }),
            c = new Map,
            u = t(c, s.port),
            l = n(s.port, "message")(e(c));
        s.port.start();
        let d = "inactive";
        return Object.defineProperties(s, {
            pause: {
                get: () => async () => (r(["recording"], d), d = "paused", u({
                    method: "pause"
                }))
            },
            port: {
                get() {
                    throw new Error("The port of a RecorderAudioWorkletNode can't be accessed.")
                }
            },
            record: {
                get: () => async e => (r(["inactive"], d), d = "recording", u({
                    method: "record",
                    params: {
                        encoderPort: e
                    }
                }, [e]))
            },
            resume: {
                get: () => async () => (r(["paused"], d), d = "recording", u({
                    method: "resume"
                }))
            },
            stop: {
                get: () => async () => {
                    r(["paused", "recording"], d), d = "stopped";
                    try {
                        await u({
                            method: "stop"
                        })
                    } finally {
                        l()
                    }
                }
            }
        }), s
    }
})), t.register("556J8", (function(t, n) {
    e(t.exports, "validateState", (function() {
        return r
    }));
    const r = (e, t) => {
        if (!e.includes(t)) throw new Error(`Expected the state to be ${e.map((e=>`"${e}"`)).join(" or ")} but it was "${t}".`)
    }
})), t.register("e3gaq", (function(t, n) {
    e(t.exports, "worklet", (function() {
        return r
    }));
    const r = '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();'
})), t.register("1fFaP", (function(e, n) {
    t("9oA5d"), t("44p64")
})), t.register("9oA5d", (function(e, t) {})), t.register("44p64", (function(e, t) {})), t.register("iaff2", (function(e, n) {
    t("i5OvX"), t("bIv4B"), t("g28Q9"), t("9qx28")
})), t.register("i5OvX", (function(e, t) {})), t.register("bIv4B", (function(e, t) {})), t.register("g28Q9", (function(e, t) {})), t.register("9qx28", (function(e, t) {})), t.register("4xuAx", (function(n, r) {
    e(n.exports, "AudioBuffer", (function() {
        return tr
    })), e(n.exports, "AudioBufferSourceNode", (function() {
        return ur
    })), e(n.exports, "ConstantSourceNode", (function() {
        return br
    })), e(n.exports, "addAudioWorkletModule", (function() {
        return fo
    })), e(n.exports, "MediaStreamAudioSourceNode", (function() {
        return yo
    })), e(n.exports, "AudioWorkletNode", (function() {
        return Po
    })), e(n.exports, "MinimalAudioContext", (function() {
        return Ro
    }));
    var o = t("eG4Jc"),
        i = t("6rAPC"),
        a = t("aRxJb"),
        s = t("5qhAh"),
        c = t("5sVy5"),
        u = t("bs79n"),
        l = t("aWMpD"),
        d = t("adchJ"),
        f = t("cZSGp"),
        p = t("e00tE"),
        h = t("eXj2m"),
        g = t("dLUY1"),
        v = t("fcRB9"),
        m = t("6KBUc"),
        y = t("1PVKv"),
        x = t("8Uqp2"),
        C = t("gQZKf"),
        N = t("gN80f"),
        A = t("lvCzA"),
        w = t("5iui3"),
        b = t("dmLlG"),
        S = t("iqKRb"),
        E = t("8fTst"),
        O = t("k23tA"),
        _ = t("bRmn7"),
        M = t("51PuQ"),
        T = t("6pP28"),
        I = t("bo8zQ"),
        k = t("lUsHk"),
        P = t("famxC"),
        R = t("fUBM8"),
        F = t("1xvB2"),
        j = t("hmbsB"),
        B = t("fjhoZ"),
        L = t("6YiyM"),
        D = t("blyi1"),
        U = t("jlfrv"),
        W = t("1effW"),
        V = t("5wDdS"),
        q = t("5uOZ0"),
        G = t("jfFtQ"),
        z = t("gAZT8"),
        Q = t("3vVy2"),
        H = t("jT2R8"),
        Y = t("h85pl"),
        Z = t("3GMKq"),
        X = t("bHQHS"),
        K = t("bxCup"),
        J = t("cQiJN"),
        $ = t("isPvb"),
        ee = t("hA9Rk"),
        te = t("aMmRU"),
        ne = t("iSsAY"),
        re = t("8jk0X"),
        oe = t("fb0Vw"),
        ie = t("2HpQL"),
        ae = t("c6jsg"),
        se = t("1Pybj"),
        ce = t("fPGel"),
        ue = t("k5IRs"),
        le = t("gcxM9"),
        de = t("UM6wK"),
        fe = t("50rM6"),
        pe = t("fHjo2"),
        he = t("b3GtY"),
        ge = t("7yNNb"),
        ve = t("jLaeT"),
        me = t("kGpcf"),
        ye = t("dswoR"),
        xe = t("dDipS"),
        Ce = t("8VRlJ"),
        Ne = t("cpAhI"),
        Ae = t("7zlTw"),
        we = t("bdsPg"),
        be = t("5IJmC"),
        Se = t("f91Wt"),
        Ee = t("4HRqq"),
        Oe = t("eezQE"),
        _e = t("bd62t"),
        Me = t("jawYE"),
        Te = t("14KXU"),
        Ie = t("4OxjN"),
        ke = t("cWdRO"),
        Pe = (t("4gFmz"), t("fFKyu")),
        Re = t("5i7Gk"),
        Fe = t("2PQ9t"),
        je = t("02b73"),
        Be = t("ilx6E"),
        Le = t("8LiRu"),
        De = t("2qfFQ"),
        Ue = t("4faM7"),
        We = t("eX5IJ"),
        Ve = t("hXOMq"),
        qe = t("d99SO"),
        Ge = t("8yoTn"),
        ze = t("1f4tp"),
        Qe = t("6okQU"),
        He = t("648ST"),
        Ye = t("3VTJW"),
        Ze = t("7v0s6"),
        Xe = t("cjjHT"),
        Ke = t("iaD45"),
        Je = t("2M581"),
        $e = t("c547j"),
        et = t("9LACZ"),
        tt = t("jol1z"),
        nt = t("likde"),
        rt = t("3jzJs"),
        ot = t("cFhuS"),
        it = t("9fDPx"),
        at = t("3Q4lv"),
        st = t("548Mg"),
        ct = t("4FbD5"),
        ut = t("9c1Wy"),
        lt = t("dCwGZ"),
        dt = t("gpl8H"),
        ft = t("g5bC5"),
        pt = t("2dzzt"),
        ht = t("d01G1"),
        gt = t("kmp2k"),
        vt = t("fya02"),
        mt = t("6V7uX"),
        yt = t("isczR"),
        xt = t("leTiP"),
        Ct = t("eH59t"),
        Nt = t("4YX5x"),
        At = t("5nrID"),
        wt = t("bTsSI"),
        bt = t("cQWJg"),
        St = t("j5BOm"),
        Et = t("1CLtp"),
        Ot = t("eWNR0"),
        _t = t("2Zzms"),
        Mt = t("kp3cf"),
        Tt = t("sba44"),
        It = t("diV5r"),
        kt = t("giQqf"),
        Pt = t("fd8YT"),
        Rt = t("jjRoo"),
        Ft = t("h5LfI"),
        jt = t("9Y32Y"),
        Bt = (t("iAkBb"), t("6iaEd"), t("9RJTC"), t("4PK5J"), t("bNbtD"), t("hpQXM"), t("ktH67")),
        Lt = (t("fRhAg"), t("ekT3O"), t("67oOG"), t("lyEmq"), t("6NEgj"), t("eIEJo"), t("h0VAr")),
        Dt = (t("5FaVX"), t("b2EDi")),
        Ut = t("8eIgx"),
        Wt = t("fDrtP"),
        Vt = t("2KNWl"),
        qt = t("e3CAR"),
        Gt = t("6ljiI"),
        zt = t("fpdYT"),
        Qt = t("cGzZk"),
        Ht = t("h3W3B"),
        Yt = t("2P7cE"),
        Zt = t("6xjTf"),
        Xt = t("c6Cvm"),
        Kt = t("4d99l"),
        Jt = t("h40Bm"),
        $t = t("1Nqgn"),
        en = t("j0lVj"),
        tn = t("7adm4"),
        nn = t("6K4L5"),
        rn = t("82U8o"),
        on = t("5H21Q"),
        an = t("3D8tM"),
        sn = t("652JR"),
        cn = t("jOPn5"),
        un = t("7mcQM"),
        ln = t("kN3QQ"),
        dn = t("b1QSS"),
        fn = t("anl26"),
        pn = t("it3oI"),
        hn = t("aH21Y"),
        gn = t("dZG77"),
        vn = t("2uGOa"),
        mn = t("5kV2a"),
        yn = t("fJNth"),
        xn = t("gbL7G"),
        Cn = t("ig78e"),
        Nn = t("cHSFE"),
        An = t("dE0YL"),
        wn = (t("93KhB"), t("46dAu")),
        bn = (t("bUpH6"), t("9RAJX")),
        Sn = t("fPYBC"),
        En = t("8oVbR");
    t("61ucN"), t("1Kf5t");
    const On = (0, a.createAddActiveInputConnectionToAudioNode)(rn.insertElementInSet),
        _n = (0, d.createAddPassiveInputConnectionToAudioNode)(rn.insertElementInSet),
        Mn = (0, X.createDeleteActiveInputConnectionToAudioNode)(ln.pickElementFromSet),
        Tn = new WeakMap,
        In = (0, de.createGetAudioNodeTailTime)(Tn),
        kn = (0, I.createCacheTestResult)(new Map, new WeakMap),
        Pn = (0, Vt.createWindow)(),
        Rn = (0, We.createNativeAnalyserNodeFactory)(kn, Ce.createIndexSizeError),
        Fn = (0, le.createGetAudioNodeRenderer)(Xt.getAudioNodeConnections),
        jn = (0, _t.createRenderInputsOfAudioNode)(Xt.getAudioNodeConnections, Fn, sn.isPartOfACycle),
        Bn = (0, g.createAnalyserNodeRendererFactory)(Rn, en.getNativeAudioNode, jn),
        Ln = (0, he.createGetNativeContext)(Ht.CONTEXT_STORE),
        Dn = (0, lt.createNativeOfflineAudioContextConstructor)(Pn),
        Un = (0, Ie.createIsNativeOfflineAudioContext)(Dn),
        Wn = new WeakMap,
        Vn = (0, oe.createEventTargetConstructor)(En.wrapEventListener),
        qn = (0, Ge.createNativeAudioContextConstructor)(Pn),
        Gn = (0, Oe.createIsNativeAudioContext)(qn),
        zn = (0, _e.createIsNativeAudioNode)(Pn),
        Qn = (0, Me.createIsNativeAudioParam)(Pn),
        Hn = (0, Qe.createNativeAudioWorkletNodeConstructor)(Pn),
        Yn = (0, w.createAudioNodeConstructor)((0, s.createAddAudioNodeConnections)(Ht.AUDIO_NODE_CONNECTIONS_STORE), (0, l.createAddConnectionToAudioNode)(On, _n, Yt.connectNativeAudioNodeToNativeAudioNode, Mn, Zt.disconnectNativeAudioNodeFromNativeAudioNode, Xt.getAudioNodeConnections, In, Jt.getEventListenersOfAudioNode, en.getNativeAudioNode, rn.insertElementInSet, on.isActiveAudioNode, sn.isPartOfACycle, cn.isPassiveAudioNode), kn, (0, xe.createIncrementCycleCounterFactory)(Ht.CYCLE_COUNTERS, Zt.disconnectNativeAudioNodeFromNativeAudioNode, Xt.getAudioNodeConnections, en.getNativeAudioNode, tn.getNativeAudioParam, on.isActiveAudioNode), Ce.createIndexSizeError, Ne.createInvalidAccessError, Ct.createNotSupportedError, (0, H.createDecrementCycleCounter)(Yt.connectNativeAudioNodeToNativeAudioNode, Ht.CYCLE_COUNTERS, Xt.getAudioNodeConnections, en.getNativeAudioNode, tn.getNativeAudioParam, Ln, on.isActiveAudioNode, Un), (0, J.createDetectCycles)(Wn, Xt.getAudioNodeConnections, nn.getValueForKey), Vn, Ln, Gn, zn, Qn, Un, Hn),
        Zn = (0, h.createAnalyserNodeConstructor)(Yn, Bn, Ce.createIndexSizeError, Rn, Ln, Un),
        Xn = new WeakSet,
        Kn = (0, Ve.createNativeAudioBufferConstructor)(Pn),
        Jn = (0, W.createConvertNumberToUnsignedLong)(new Uint32Array(1)),
        $n = (0, qt.createWrapAudioBufferCopyChannelMethods)(Jn, Ce.createIndexSizeError),
        er = (0, Gt.createWrapAudioBufferCopyChannelMethodsOutOfBounds)(Jn),
        tr = (0, v.createAudioBufferConstructor)(Xn, kn, Ct.createNotSupportedError, Kn, Dn, (0, jt.createTestAudioBufferConstructorSupport)(Kn), $n, er),
        nr = (0, f.createAddSilentConnection)(rt.createNativeGainNode),
        rr = (0, Mt.createRenderInputsOfAudioParam)(Fn, Kt.getAudioParamConnections, sn.isPartOfACycle),
        or = (0, j.createConnectAudioParam)(rr),
        ir = (0, qe.createNativeAudioBufferSourceNodeFactory)(nr, kn, vn.testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, mn.testAudioBufferSourceNodeStartMethodOffsetClampingSupport, yn.testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, xn.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, Cn.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, Nn.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, bn.wrapAudioBufferSourceNodeStartMethodOffsetClamping, (0, zt.createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer)(un.overwriteAccessors), Sn.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        ar = (0, Ot.createRenderAutomation)((0, fe.createGetAudioParamRenderer)(Kt.getAudioParamConnections), rr),
        sr = (0, y.createAudioBufferSourceNodeRendererFactory)(or, ir, en.getNativeAudioNode, ar, jn),
        cr = (0, b.createAudioParamFactory)((0, c.createAddAudioParamConnections)(Ht.AUDIO_PARAM_CONNECTIONS_STORE), Wn, Ht.AUDIO_PARAM_STORE, S.createAudioParamRenderer, o.createCancelAndHoldAutomationEvent, o.createCancelScheduledValuesAutomationEvent, o.createExponentialRampToValueAutomationEvent, o.createLinearRampToValueAutomationEvent, o.createSetTargetAutomationEvent, o.createSetValueAutomationEvent, o.createSetValueCurveAutomationEvent, qn, hn.setValueAtTimeUntilPossible),
        ur = (0, m.createAudioBufferSourceNodeConstructor)(Yn, sr, cr, Ae.createInvalidStateError, ir, Ln, Un, En.wrapEventListener),
        lr = (0, C.createAudioDestinationNodeConstructor)(Yn, N.createAudioDestinationNodeRenderer, Ce.createIndexSizeError, Ae.createInvalidStateError, (0, ze.createNativeAudioDestinationNodeFactory)(rt.createNativeGainNode, un.overwriteAccessors), Ln, Un, jn),
        dr = (0, T.createBiquadFilterNodeRendererFactory)(or, Ze.createNativeBiquadFilterNode, en.getNativeAudioNode, ar, jn),
        fr = (0, kt.createSetAudioNodeTailTime)(Tn),
        pr = (0, M.createBiquadFilterNodeConstructor)(Yn, cr, dr, Ne.createInvalidAccessError, Ze.createNativeBiquadFilterNode, Ln, Un, fr),
        hr = (0, Ue.createMonitorConnections)(rn.insertElementInSet, zn),
        gr = (0, Qt.createWrapChannelMergerNode)(Ae.createInvalidStateError, hr),
        vr = (0, Xe.createNativeChannelMergerNodeFactory)(qn, gr),
        mr = (0, P.createChannelMergerNodeRendererFactory)(vr, en.getNativeAudioNode, jn),
        yr = (0, k.createChannelMergerNodeConstructor)(Yn, mr, vr, Ln, Un),
        xr = (0, F.createChannelSplitterNodeRendererFactory)(Ke.createNativeChannelSplitterNode, en.getNativeAudioNode, jn),
        Cr = (0, R.createChannelSplitterNodeConstructor)(Yn, xr, Ke.createNativeChannelSplitterNode, Ln, Un, fn.sanitizeChannelSplitterOptions),
        Nr = (0, $e.createNativeConstantSourceNodeFakerFactory)(nr, ir, rt.createNativeGainNode, hr),
        Ar = (0, Je.createNativeConstantSourceNodeFactory)(nr, kn, Nr, xn.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, Nn.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport),
        wr = (0, U.createConstantSourceNodeRendererFactory)(or, Ar, en.getNativeAudioNode, ar, jn),
        br = (0, D.createConstantSourceNodeConstructor)(Yn, cr, wr, Ar, Ln, Un, En.wrapEventListener),
        Sr = (0, et.createNativeConvolverNodeFactory)(Ct.createNotSupportedError, un.overwriteAccessors),
        Er = (0, q.createConvolverNodeRendererFactory)(Sr, en.getNativeAudioNode, jn),
        Or = (0, V.createConvolverNodeConstructor)(Yn, Er, Sr, Ln, Un, fr),
        _r = (0, Z.createDelayNodeRendererFactory)(or, tt.createNativeDelayNode, en.getNativeAudioNode, ar, jn),
        Mr = (0, Y.createDelayNodeConstructor)(Yn, cr, _r, tt.createNativeDelayNode, Ln, Un, fr),
        Tr = (0, nt.createNativeDynamicsCompressorNodeFactory)(Ct.createNotSupportedError),
        Ir = (0, te.createDynamicsCompressorNodeRendererFactory)(or, Tr, en.getNativeAudioNode, ar, jn),
        kr = (0, ee.createDynamicsCompressorNodeConstructor)(Yn, cr, Ir, Tr, Ct.createNotSupportedError, Ln, Un, fr),
        Pr = (0, ce.createGainNodeRendererFactory)(or, rt.createNativeGainNode, en.getNativeAudioNode, ar, jn),
        Rr = (0, se.createGainNodeConstructor)(Yn, cr, Pr, rt.createNativeGainNode, Ln, Un),
        Fr = (0, it.createNativeIIRFilterNodeFakerFactory)(Ne.createInvalidAccessError, Ae.createInvalidStateError, gt.createNativeScriptProcessorNode, Ct.createNotSupportedError),
        jr = (0, Tt.createRenderNativeOfflineAudioContext)(kn, rt.createNativeGainNode, gt.createNativeScriptProcessorNode, (0, Lt.createTestOfflineAudioContextCurrentTimeSupport)(rt.createNativeGainNode, Dn)),
        Br = (0, ye.createIIRFilterNodeRendererFactory)(ir, en.getNativeAudioNode, Dn, jn, jr),
        Lr = (0, ot.createNativeIIRFilterNodeFactory)(Fr),
        Dr = (0, me.createIIRFilterNodeConstructor)(Yn, Lr, Br, Ln, Un, fr),
        Ur = (0, A.createAudioListenerFactory)(cr, vr, Ar, gt.createNativeScriptProcessorNode, Ct.createNotSupportedError, $t.getFirstSample, Un, un.overwriteAccessors),
        Wr = new WeakMap,
        Vr = (0, Le.createMinimalBaseAudioContextConstructor)(lr, Ur, Vn, Un, Wr, En.wrapEventListener),
        qr = (0, dt.createNativeOscillatorNodeFactory)(nr, kn, xn.testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, Cn.testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, Nn.testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, Sn.wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls),
        Gr = (0, wt.createOscillatorNodeRendererFactory)(or, qr, en.getNativeAudioNode, ar, jn),
        zr = (0, At.createOscillatorNodeConstructor)(Yn, cr, qr, Gr, Ln, Un, En.wrapEventListener),
        Qr = (0, L.createConnectedNativeAudioBufferSourceNodeFactory)(ir),
        Hr = (0, xt.createNativeWaveShaperNodeFakerFactory)(Qr, Ae.createInvalidStateError, rt.createNativeGainNode, an.isDCCurve, hr),
        Yr = (0, yt.createNativeWaveShaperNodeFactory)(Qr, Ae.createInvalidStateError, Hr, an.isDCCurve, hr, qn, un.overwriteAccessors),
        Zr = (0, pt.createNativePannerNodeFakerFactory)(Yt.connectNativeAudioNodeToNativeAudioNode, Ae.createInvalidStateError, vr, rt.createNativeGainNode, gt.createNativeScriptProcessorNode, Yr, Ct.createNotSupportedError, Zt.disconnectNativeAudioNodeFromNativeAudioNode, $t.getFirstSample, hr),
        Xr = (0, ft.createNativePannerNodeFactory)(Zr),
        Kr = (0, St.createPannerNodeRendererFactory)(or, vr, Ar, rt.createNativeGainNode, Xr, en.getNativeAudioNode, Dn, ar, jn, jr),
        Jr = (0, bt.createPannerNodeConstructor)(Yn, cr, Xr, Kr, Ln, Un, fr),
        $r = (0, ht.createNativePeriodicWaveFactory)(Ce.createIndexSizeError),
        eo = (0, Et.createPeriodicWaveConstructor)($r, Ln, new WeakSet, pn.sanitizePeriodicWaveOptions),
        to = (0, mt.createNativeStereoPannerNodeFakerFactory)(vr, Ke.createNativeChannelSplitterNode, rt.createNativeGainNode, Yr, Ct.createNotSupportedError, hr),
        no = (0, vt.createNativeStereoPannerNodeFactory)(to, Ct.createNotSupportedError),
        ro = (0, Ft.createStereoPannerNodeRendererFactory)(or, no, en.getNativeAudioNode, ar, jn),
        oo = (0, Rt.createStereoPannerNodeConstructor)(Yn, cr, no, ro, Ln, Un),
        io = (0, Wt.createWaveShaperNodeRendererFactory)(Yr, en.getNativeAudioNode, jn),
        ao = (0, Ut.createWaveShaperNodeConstructor)(Yn, Ae.createInvalidStateError, Yr, io, Ln, Un, fr),
        so = (0, ke.createIsSecureContext)(Pn),
        co = (0, ie.createExposeCurrentFrameAndCurrentTime)(Pn),
        uo = new WeakMap,
        lo = (0, ge.createGetOrCreateBackupOfflineAudioContext)(uo, Dn),
        fo = so ? (0, u.createAddAudioWorkletModule)(kn, Ct.createNotSupportedError, (0, re.createEvaluateSource)(Pn), co, (0, ae.createFetchSource)(i.createAbortError), Ln, lo, Un, Hn, new WeakMap, new WeakMap, (0, Bt.createTestAudioWorkletProcessorPostMessageSupport)(Hn, Dn), Pn) : void 0,
        po = (0, Te.createIsNativeContext)(Gn, Un),
        ho = (0, Q.createDecodeAudioData)(Xn, kn, z.createDataCloneError, ne.createEncodingError, new WeakSet, Ln, po, gn.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, wn.testPromiseSupport, $n, er),
        go = (0, _.createBaseAudioContextConstructor)(fo, Zn, tr, ur, pr, yr, Cr, br, Or, ho, Mr, kr, Rr, Dr, Vr, zr, Jr, eo, oo, ao),
        vo = (0, Pe.createMediaElementAudioSourceNodeConstructor)(Yn, at.createNativeMediaElementAudioSourceNode, Ln, Un),
        mo = (0, Re.createMediaStreamAudioDestinationNodeConstructor)(Yn, st.createNativeMediaStreamAudioDestinationNode, Ln, Un),
        yo = (0, Fe.createMediaStreamAudioSourceNodeConstructor)(Yn, ct.createNativeMediaStreamAudioSourceNode, Ln, Un),
        xo = (0, ut.createNativeMediaStreamTrackAudioSourceNodeFactory)(Ae.createInvalidStateError, Un),
        Co = (0, je.createMediaStreamTrackAudioSourceNodeConstructor)(Yn, xo, Ln),
        No = ((0, x.createAudioContextConstructor)(go, Ae.createInvalidStateError, Ct.createNotSupportedError, Dt.createUnknownError, vo, mo, yo, Co, qn), (0, ve.createGetUnrenderedAudioWorkletNodes)(Wr)),
        Ao = (0, p.createAddUnrenderedAudioWorkletNode)(No),
        wo = (0, B.createConnectMultipleOutputs)(Ce.createIndexSizeError),
        bo = (0, K.createDeleteUnrenderedAudioWorkletNode)(No),
        So = (0, $.createDisconnectMultipleOutputs)(Ce.createIndexSizeError),
        Eo = new WeakMap,
        Oo = (0, ue.createGetActiveAudioWorkletNodeInputs)(Eo, nn.getValueForKey),
        _o = (0, Ye.createNativeAudioWorkletNodeFakerFactory)(wo, Ce.createIndexSizeError, Ae.createInvalidStateError, vr, Ke.createNativeChannelSplitterNode, Ar, rt.createNativeGainNode, gt.createNativeScriptProcessorNode, Ct.createNotSupportedError, So, co, Oo, hr),
        Mo = (0, He.createNativeAudioWorkletNodeFactory)(Ae.createInvalidStateError, _o, rt.createNativeGainNode, Ct.createNotSupportedError, hr),
        To = (0, O.createAudioWorkletNodeRendererFactory)(or, wo, ir, vr, Ke.createNativeChannelSplitterNode, Ar, rt.createNativeGainNode, bo, So, co, en.getNativeAudioNode, Hn, Dn, ar, jn, jr),
        Io = (0, pe.createGetBackupOfflineAudioContext)(uo),
        ko = (0, It.createSetActiveAudioWorkletNodeInputs)(Eo),
        Po = so ? (0, E.createAudioWorkletNodeConstructor)(Ao, Yn, cr, To, Mo, Xt.getAudioNodeConnections, Io, Ln, Un, Hn, dn.sanitizeAudioWorkletNodeOptions, ko, An.testAudioWorkletNodeOptionsClonability, En.wrapEventListener) : void 0,
        Ro = (0, Be.createMinimalAudioContextConstructor)(Ae.createInvalidStateError, Ct.createNotSupportedError, Dt.createUnknownError, Vr, qn),
        Fo = (0, G.createCreateNativeOfflineAudioContext)(Ct.createNotSupportedError, Dn),
        jo = (0, Pt.createStartRendering)(Xn, kn, Fn, No, jr, gn.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, $n, er);
    (0, De.createMinimalOfflineAudioContextConstructor)(kn, Ae.createInvalidStateError, Fo, Vr, jo), (0, Nt.createOfflineAudioContextConstructor)(go, kn, Ae.createInvalidStateError, Fo, jo), (0, we.createIsAnyAudioContext)(Ht.CONTEXT_STORE, Gn), (0, be.createIsAnyAudioNode)(Ht.AUDIO_NODE_STORE, zn), (0, Se.createIsAnyAudioParam)(Ht.AUDIO_PARAM_STORE, Qn), (0, Ee.createIsAnyOfflineAudioContext)(Ht.CONTEXT_STORE, Un)
})), t.register("eG4Jc", (function(e, n) {
    e.exports,
        function(e, t, n, r) {
            function o(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var i = o(t),
                a = o(n),
                s = o(r),
                c = function(e, t, n) {
                    return {
                        endTime: t,
                        insertTime: n,
                        type: "exponentialRampToValue",
                        value: e
                    }
                },
                u = function(e, t, n) {
                    return {
                        endTime: t,
                        insertTime: n,
                        type: "linearRampToValue",
                        value: e
                    }
                },
                l = function(e, t) {
                    return {
                        startTime: t,
                        type: "setValue",
                        value: e
                    }
                },
                d = function(e, t, n) {
                    return {
                        duration: n,
                        startTime: t,
                        type: "setValueCurve",
                        values: e
                    }
                },
                f = function(e, t, n) {
                    var r = n.startTime,
                        o = n.target,
                        i = n.timeConstant;
                    return o + (t - o) * Math.exp((r - e) / i)
                },
                p = function(e) {
                    return "exponentialRampToValue" === e.type
                },
                h = function(e) {
                    return "linearRampToValue" === e.type
                },
                g = function(e) {
                    return p(e) || h(e)
                },
                v = function(e) {
                    return "setValue" === e.type
                },
                m = function(e) {
                    return "setValueCurve" === e.type
                },
                y = function e(t, n, r, o) {
                    var i = t[n];
                    return void 0 === i ? o : g(i) || v(i) ? i.value : m(i) ? i.values[i.values.length - 1] : f(r, e(t, n - 1, i.startTime, o), i)
                },
                x = function(e, t, n, r, o) {
                    return void 0 === n ? [r.insertTime, o] : g(n) ? [n.endTime, n.value] : v(n) ? [n.startTime, n.value] : m(n) ? [n.startTime + n.duration, n.values[n.values.length - 1]] : [n.startTime, y(e, t - 1, n.startTime, o)]
                },
                C = function(e) {
                    return "cancelAndHold" === e.type
                },
                N = function(e) {
                    return "cancelScheduledValues" === e.type
                },
                A = function(e) {
                    return C(e) || N(e) ? e.cancelTime : p(e) || h(e) ? e.endTime : e.startTime
                },
                w = function(e, t, n, r) {
                    var o = r.endTime,
                        i = r.value;
                    return n === i ? i : 0 < n && 0 < i || n < 0 && i < 0 ? n * Math.pow(i / n, (e - t) / (o - t)) : 0
                },
                b = function(e, t, n, r) {
                    return n + (e - t) / (r.endTime - t) * (r.value - n)
                },
                S = function(e, t) {
                    var n = Math.floor(t),
                        r = Math.ceil(t);
                    return n === r ? e[n] : (1 - (t - n)) * e[n] + (1 - (r - t)) * e[r]
                },
                E = function(e, t) {
                    var n = t.duration,
                        r = t.startTime,
                        o = t.values,
                        i = (e - r) / n * (o.length - 1);
                    return S(o, i)
                },
                O = function(e) {
                    return "setTarget" === e.type
                },
                _ = function(e) {
                    function t(e) {
                        a.default(this, t), this._automationEvents = [], this._currenTime = 0, this._defaultValue = e
                    }
                    return s.default(t, [{
                        key: e,
                        value: function() {
                            return this._automationEvents[Symbol.iterator]()
                        }
                    }, {
                        key: "add",
                        value: function(e) {
                            var t = A(e);
                            if (C(e) || N(e)) {
                                var n = this._automationEvents.findIndex((function(n) {
                                        return N(e) && m(n) ? n.startTime + n.duration >= t : A(n) >= t
                                    })),
                                    r = this._automationEvents[n];
                                if (-1 !== n && (this._automationEvents = this._automationEvents.slice(0, n)), C(e)) {
                                    var o = this._automationEvents[this._automationEvents.length - 1];
                                    if (void 0 !== r && g(r)) {
                                        if (O(o)) throw new Error("The internal list is malformed.");
                                        var i = m(o) ? o.startTime + o.duration : A(o),
                                            a = m(o) ? o.values[o.values.length - 1] : o.value,
                                            s = p(r) ? w(t, i, a, r) : b(t, i, a, r),
                                            f = p(r) ? c(s, t, this._currenTime) : u(s, t, this._currenTime);
                                        this._automationEvents.push(f)
                                    }
                                    void 0 !== o && O(o) && this._automationEvents.push(l(this.getValue(t), t)), void 0 !== o && m(o) && o.startTime + o.duration > t && (this._automationEvents[this._automationEvents.length - 1] = d(new Float32Array([6, 7]), o.startTime, t - o.startTime))
                                }
                            } else {
                                var v = this._automationEvents.findIndex((function(e) {
                                        return A(e) > t
                                    })),
                                    y = -1 === v ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[v - 1];
                                if (void 0 !== y && m(y) && A(y) + y.duration > t) return !1;
                                var x = p(e) ? c(e.value, e.endTime, this._currenTime) : h(e) ? u(e.value, t, this._currenTime) : e;
                                if (-1 === v) this._automationEvents.push(x);
                                else {
                                    if (m(e) && t + e.duration > A(this._automationEvents[v])) return !1;
                                    this._automationEvents.splice(v, 0, x)
                                }
                            }
                            return !0
                        }
                    }, {
                        key: "flush",
                        value: function(e) {
                            var t = this._automationEvents.findIndex((function(t) {
                                return A(t) > e
                            }));
                            if (t > 1) {
                                var n = this._automationEvents.slice(t - 1),
                                    r = n[0];
                                O(r) && n.unshift(l(y(this._automationEvents, t - 2, r.startTime, this._defaultValue), r.startTime)), this._automationEvents = n
                            }
                        }
                    }, {
                        key: "getValue",
                        value: function(e) {
                            if (0 === this._automationEvents.length) return this._defaultValue;
                            var t = this._automationEvents.findIndex((function(t) {
                                    return A(t) > e
                                })),
                                n = this._automationEvents[t],
                                r = (-1 === t ? this._automationEvents.length : t) - 1,
                                o = this._automationEvents[r];
                            if (void 0 !== o && O(o) && (void 0 === n || !g(n) || n.insertTime > e)) return f(e, y(this._automationEvents, r - 1, o.startTime, this._defaultValue), o);
                            if (void 0 !== o && v(o) && (void 0 === n || !g(n))) return o.value;
                            if (void 0 !== o && m(o) && (void 0 === n || !g(n) || o.startTime + o.duration > e)) return e < o.startTime + o.duration ? E(e, o) : o.values[o.values.length - 1];
                            if (void 0 !== o && g(o) && (void 0 === n || !g(n))) return o.value;
                            if (void 0 !== n && p(n)) {
                                var a = x(this._automationEvents, r, o, n, this._defaultValue),
                                    s = i.default(a, 2),
                                    c = s[0],
                                    u = s[1];
                                return w(e, c, u, n)
                            }
                            if (void 0 !== n && h(n)) {
                                var l = x(this._automationEvents, r, o, n, this._defaultValue),
                                    d = i.default(l, 2),
                                    C = d[0],
                                    N = d[1];
                                return b(e, C, N, n)
                            }
                            return this._defaultValue
                        }
                    }]), t
                }(Symbol.iterator),
                M = function(e) {
                    return {
                        cancelTime: e,
                        type: "cancelAndHold"
                    }
                },
                T = function(e) {
                    return {
                        cancelTime: e,
                        type: "cancelScheduledValues"
                    }
                },
                I = function(e, t) {
                    return {
                        endTime: t,
                        type: "exponentialRampToValue",
                        value: e
                    }
                },
                k = function(e, t) {
                    return {
                        endTime: t,
                        type: "linearRampToValue",
                        value: e
                    }
                },
                P = function(e, t, n) {
                    return {
                        startTime: t,
                        target: e,
                        timeConstant: n,
                        type: "setTarget"
                    }
                };
            e.AutomationEventList = _, e.createCancelAndHoldAutomationEvent = M, e.createCancelScheduledValuesAutomationEvent = T, e.createExponentialRampToValueAutomationEvent = I, e.createLinearRampToValueAutomationEvent = k, e.createSetTargetAutomationEvent = P, e.createSetValueAutomationEvent = l, e.createSetValueCurveAutomationEvent = d, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(e.exports, t("5gSWB"), t("gGf3R"), t("1yAHe"))
})), t.register("5gSWB", (function(e, n) {
    var r = t("lFgnZ"),
        o = t("j2Sih"),
        i = t("g2tid"),
        a = t("gOeNb");
    e.exports = function(e, t) {
        return r(e) || o(e, t) || i(e, t) || a()
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("lFgnZ", (function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("j2Sih", (function(e, t) {
    e.exports = function(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, i, a, s = [],
                c = !0,
                u = !1;
            try {
                if (i = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    c = !1
                } else
                    for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("g2tid", (function(e, n) {
    var r = t("8b3RA");
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("8b3RA", (function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("gOeNb", (function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("gGf3R", (function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("1yAHe", (function(e, n) {
    var r = t("4P4uz");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, r(o.key), o)
        }
    }
    e.exports = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("4P4uz", (function(e, n) {
    var r = t("hiWyw").default,
        o = t("aw3Qe");
    e.exports = function(e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("hiWyw", (function(e, t) {
    function n(t) {
        return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("aw3Qe", (function(e, n) {
    var r = t("hiWyw").default;
    e.exports = function(e, t) {
        if ("object" !== r(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("6rAPC", (function(t, n) {
    e(t.exports, "createAbortError", (function() {
        return r
    }));
    const r = () => new DOMException("", "AbortError")
})), t.register("aRxJb", (function(t, n) {
    e(t.exports, "createAddActiveInputConnectionToAudioNode", (function() {
        return r
    }));
    const r = e => (t, n, [r, o, i], a) => {
        e(t[o], [n, r, i], (e => e[0] === n && e[1] === r), a)
    }
})), t.register("5qhAh", (function(t, n) {
    e(t.exports, "createAddAudioNodeConnections", (function() {
        return r
    }));
    const r = e => (t, n, r) => {
        const o = [];
        for (let e = 0; e < r.numberOfInputs; e += 1) o.push(new Set);
        e.set(t, {
            activeInputs: o,
            outputs: new Set,
            passiveInputs: new WeakMap,
            renderer: n
        })
    }
})), t.register("5sVy5", (function(t, n) {
    e(t.exports, "createAddAudioParamConnections", (function() {
        return r
    }));
    const r = e => (t, n) => {
        e.set(t, {
            activeInputs: new Set,
            passiveInputs: new WeakMap,
            renderer: n
        })
    }
})), t.register("bs79n", (function(n, r) {
    e(n.exports, "createAddAudioWorkletModule", (function() {
        return u
    }));
    var o = t("h3W3B"),
        i = t("8IQO3"),
        a = t("1ScKt");
    const s = e => {
            if (void 0 !== e && !Array.isArray(e)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")
        },
        c = e => {
            if (!(0, i.isConstructible)(e)) throw new TypeError("The given value for processorCtor should be a constructor.");
            if (null === e.prototype || "object" != typeof e.prototype) throw new TypeError("The given value for processorCtor should have a prototype.")
        },
        u = (e, t, n, r, i, u, l, d, f, p, h, g, v) => {
            let m = 0;
            return (y, x, C = {
                credentials: "omit"
            }) => {
                const N = h.get(y);
                if (void 0 !== N && N.has(x)) return Promise.resolve();
                const A = p.get(y);
                if (void 0 !== A) {
                    const e = A.get(x);
                    if (void 0 !== e) return e
                }
                const w = u(y),
                    b = void 0 === w.audioWorklet ? i(x).then((([e, t]) => {
                        const [r, o] = (0, a.splitImportStatements)(e, t);
                        return n(`${r};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${o}\n})})(window,'_AWGS')`)
                    })).then((() => {
                        const e = v._AWGS.pop();
                        if (void 0 === e) throw new SyntaxError;
                        r(w.currentTime, w.sampleRate, (() => e(class {}, void 0, ((e, n) => {
                            if ("" === e.trim()) throw t();
                            const r = o.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(w);
                            if (void 0 !== r) {
                                if (r.has(e)) throw t();
                                c(n), s(n.parameterDescriptors), r.set(e, n)
                            } else c(n), s(n.parameterDescriptors), o.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(w, new Map([
                                [e, n]
                            ]))
                        }), w.sampleRate, void 0, void 0)))
                    })) : Promise.all([i(x), Promise.resolve(e(g, g))]).then((([
                        [e, t], n
                    ]) => {
                        const r = m + 1;
                        m = r;
                        const [o, i] = (0, a.splitImportStatements)(e, t), s = new Blob([`${o};((AudioWorkletProcessor,registerProcessor)=>{${i}\n})(${n?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${n?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${n?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${r}',class extends AudioWorkletProcessor{process(){return !1}})`], {
                            type: "application/javascript; charset=utf-8"
                        }), c = URL.createObjectURL(s);
                        return w.audioWorklet.addModule(c, C).then((() => {
                            if (d(w)) return w;
                            const e = l(w);
                            return e.audioWorklet.addModule(c, C).then((() => e))
                        })).then((e => {
                            if (null === f) throw new SyntaxError;
                            try {
                                new f(e, `__sac${r}`)
                            } catch {
                                throw new SyntaxError
                            }
                        })).finally((() => URL.revokeObjectURL(c)))
                    }));
                return void 0 === A ? p.set(y, new Map([
                    [x, b]
                ])) : A.set(x, b), b.then((() => {
                    const e = h.get(y);
                    void 0 === e ? h.set(y, new Set([x])) : e.add(x)
                })).finally((() => {
                    const e = p.get(y);
                    void 0 !== e && e.delete(x)
                })), b
            }
        }
})), t.register("h3W3B", (function(t, n) {
    e(t.exports, "ACTIVE_AUDIO_NODE_STORE", (function() {
        return r
    })), e(t.exports, "AUDIO_NODE_CONNECTIONS_STORE", (function() {
        return o
    })), e(t.exports, "AUDIO_NODE_STORE", (function() {
        return i
    })), e(t.exports, "AUDIO_PARAM_CONNECTIONS_STORE", (function() {
        return a
    })), e(t.exports, "AUDIO_PARAM_STORE", (function() {
        return s
    })), e(t.exports, "CONTEXT_STORE", (function() {
        return c
    })), e(t.exports, "EVENT_LISTENERS", (function() {
        return u
    })), e(t.exports, "CYCLE_COUNTERS", (function() {
        return l
    })), e(t.exports, "NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS", (function() {
        return d
    })), e(t.exports, "NODE_TO_PROCESSOR_MAPS", (function() {
        return f
    }));
    const r = new WeakSet,
        o = new WeakMap,
        i = new WeakMap,
        a = new WeakMap,
        s = new WeakMap,
        c = new WeakMap,
        u = new WeakMap,
        l = new WeakMap,
        d = new WeakMap,
        f = new WeakMap
})), t.register("8IQO3", (function(t, n) {
    e(t.exports, "isConstructible", (function() {
        return o
    }));
    const r = {
            construct: () => r
        },
        o = e => {
            try {
                new new Proxy(e, r)
            } catch {
                return !1
            }
            return !0
        }
})), t.register("1ScKt", (function(t, n) {
    e(t.exports, "splitImportStatements", (function() {
        return o
    }));
    const r = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
        o = (e, t) => {
            const n = [];
            let o = e.replace(/^[\s]+/, ""),
                i = o.match(r);
            for (; null !== i;) {
                const e = i[1].slice(1, -1),
                    a = i[0].replace(/([\s]+)?;?$/, "").replace(e, new URL(e, t).toString());
                n.push(a), o = o.slice(i[0].length).replace(/^[\s]+/, ""), i = o.match(r)
            }
            return [n.join(";"), o]
        }
})), t.register("aWMpD", (function(n, r) {
    e(n.exports, "createAddConnectionToAudioNode", (function() {
        return s
    }));
    var o = t("1yGRY"),
        i = t("hcOfm"),
        a = t("etJQF");
    const s = (e, t, n, r, s, c, u, l, d, f, p, h, g) => {
        const v = new WeakMap;
        return (m, y, x, C, N) => {
            const {
                activeInputs: A,
                passiveInputs: w
            } = c(y), {
                outputs: b
            } = c(m), S = l(m), E = c => {
                const l = d(y),
                    f = d(m);
                if (c) {
                    const t = (0, o.deletePassiveInputConnectionToAudioNode)(w, m, x, C);
                    e(A, m, t, !1), N || h(m) || n(f, l, x, C), g(y) && (0, i.setInternalStateToActive)(y)
                } else {
                    const e = r(A, m, x, C);
                    t(w, C, e, !1), N || h(m) || s(f, l, x, C);
                    const n = u(y);
                    if (0 === n) p(y) && (0, a.setInternalStateToPassiveWhenNecessary)(y, A);
                    else {
                        const e = v.get(y);
                        void 0 !== e && clearTimeout(e), v.set(y, setTimeout((() => {
                            p(y) && (0, a.setInternalStateToPassiveWhenNecessary)(y, A)
                        }), 1e3 * n))
                    }
                }
            };
            return !!f(b, [y, x, C], (e => e[0] === y && e[1] === x && e[2] === C), !0) && (S.add(E), p(m) ? e(A, m, [x, C, E], !0) : t(w, C, [m, x, E], !0), !0)
        }
    }
})), t.register("1yGRY", (function(n, r) {
    e(n.exports, "deletePassiveInputConnectionToAudioNode", (function() {
        return a
    }));
    var o = t("6K4L5"),
        i = t("kN3QQ");
    const a = (e, t, n, r) => {
        const a = (0, o.getValueForKey)(e, t),
            s = (0, i.pickElementFromSet)(a, (e => e[0] === n && e[1] === r));
        return 0 === a.size && e.delete(t), s
    }
})), t.register("6K4L5", (function(t, n) {
    e(t.exports, "getValueForKey", (function() {
        return r
    }));
    const r = (e, t) => {
        const n = e.get(t);
        if (void 0 === n) throw new Error("A value with the given key could not be found.");
        return n
    }
})), t.register("kN3QQ", (function(t, n) {
    e(t.exports, "pickElementFromSet", (function() {
        return r
    }));
    const r = (e, t) => {
        const n = Array.from(e).filter(t);
        if (n.length > 1) throw Error("More than one element was found.");
        if (0 === n.length) throw Error("No element was found.");
        const [r] = n;
        return e.delete(r), r
    }
})), t.register("hcOfm", (function(n, r) {
    e(n.exports, "setInternalStateToActive", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("h40Bm");
    const a = e => {
        if (o.ACTIVE_AUDIO_NODE_STORE.has(e)) throw new Error("The AudioNode is already stored.");
        o.ACTIVE_AUDIO_NODE_STORE.add(e), (0, i.getEventListenersOfAudioNode)(e).forEach((e => e(!0)))
    }
})), t.register("h40Bm", (function(n, r) {
    e(n.exports, "getEventListenersOfAudioNode", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("6K4L5");
    const a = e => (0, i.getValueForKey)(o.EVENT_LISTENERS, e)
})), t.register("etJQF", (function(n, r) {
    e(n.exports, "setInternalStateToPassiveWhenNecessary", (function() {
        return a
    }));
    var o = t("lE9if"),
        i = t("4J26V");
    const a = (e, t) => {
        !(0, o.isAudioWorkletNode)(e) && t.every((e => 0 === e.size)) && (0, i.setInternalStateToPassive)(e)
    }
})), t.register("lE9if", (function(t, n) {
    e(t.exports, "isAudioWorkletNode", (function() {
        return r
    }));
    const r = e => "port" in e
})), t.register("4J26V", (function(n, r) {
    e(n.exports, "setInternalStateToPassive", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("h40Bm");
    const a = e => {
        if (!o.ACTIVE_AUDIO_NODE_STORE.has(e)) throw new Error("The AudioNode is not stored.");
        o.ACTIVE_AUDIO_NODE_STORE.delete(e), (0, i.getEventListenersOfAudioNode)(e).forEach((e => e(!1)))
    }
})), t.register("adchJ", (function(t, n) {
    e(t.exports, "createAddPassiveInputConnectionToAudioNode", (function() {
        return r
    }));
    const r = e => (t, n, [r, o, i], a) => {
        const s = t.get(r);
        void 0 === s ? t.set(r, new Set([
            [o, n, i]
        ])) : e(s, [o, n, i], (e => e[0] === o && e[1] === n), a)
    }
})), t.register("cZSGp", (function(t, n) {
    e(t.exports, "createAddSilentConnection", (function() {
        return r
    }));
    const r = e => (t, n) => {
        const r = e(t, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
        });
        n.connect(r).connect(t.destination);
        const o = () => {
            n.removeEventListener("ended", o), n.disconnect(r), r.disconnect()
        };
        n.addEventListener("ended", o)
    }
})), t.register("e00tE", (function(t, n) {
    e(t.exports, "createAddUnrenderedAudioWorkletNode", (function() {
        return r
    }));
    const r = e => (t, n) => {
        e(t).add(n)
    }
})), t.register("eXj2m", (function(t, n) {
    e(t.exports, "createAnalyserNodeConstructor", (function() {
        return o
    }));
    const r = {
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            fftSize: 2048,
            maxDecibels: -30,
            minDecibels: -100,
            smoothingTimeConstant: .8
        },
        o = (e, t, n, o, i, a) => class extends e {
            get fftSize() {
                return this._nativeAnalyserNode.fftSize
            }
            set fftSize(e) {
                this._nativeAnalyserNode.fftSize = e
            }
            get frequencyBinCount() {
                return this._nativeAnalyserNode.frequencyBinCount
            }
            get maxDecibels() {
                return this._nativeAnalyserNode.maxDecibels
            }
            set maxDecibels(e) {
                const t = this._nativeAnalyserNode.maxDecibels;
                if (this._nativeAnalyserNode.maxDecibels = e, !(e > this._nativeAnalyserNode.minDecibels)) throw this._nativeAnalyserNode.maxDecibels = t, n()
            }
            get minDecibels() {
                return this._nativeAnalyserNode.minDecibels
            }
            set minDecibels(e) {
                const t = this._nativeAnalyserNode.minDecibels;
                if (this._nativeAnalyserNode.minDecibels = e, !(this._nativeAnalyserNode.maxDecibels > e)) throw this._nativeAnalyserNode.minDecibels = t, n()
            }
            get smoothingTimeConstant() {
                return this._nativeAnalyserNode.smoothingTimeConstant
            }
            set smoothingTimeConstant(e) {
                this._nativeAnalyserNode.smoothingTimeConstant = e
            }
            getByteFrequencyData(e) {
                this._nativeAnalyserNode.getByteFrequencyData(e)
            }
            getByteTimeDomainData(e) {
                this._nativeAnalyserNode.getByteTimeDomainData(e)
            }
            getFloatFrequencyData(e) {
                this._nativeAnalyserNode.getFloatFrequencyData(e)
            }
            getFloatTimeDomainData(e) {
                this._nativeAnalyserNode.getFloatTimeDomainData(e)
            }
            constructor(e, n) {
                const s = i(e),
                    c = {
                        ...r,
                        ...n
                    },
                    u = o(s, c);
                super(e, !1, u, a(s) ? t() : null), this._nativeAnalyserNode = u
            }
        }
})), t.register("dLUY1", (function(n, r) {
    e(n.exports, "createAnalyserNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n) => () => {
        const r = new WeakMap;
        return {
            render(i, a) {
                const s = r.get(a);
                return void 0 !== s ? Promise.resolve(s) : (async (i, a) => {
                    let s = t(i);
                    if (!(0, o.isOwnedByContext)(s, a)) {
                        const t = {
                            channelCount: s.channelCount,
                            channelCountMode: s.channelCountMode,
                            channelInterpretation: s.channelInterpretation,
                            fftSize: s.fftSize,
                            maxDecibels: s.maxDecibels,
                            minDecibels: s.minDecibels,
                            smoothingTimeConstant: s.smoothingTimeConstant
                        };
                        s = e(a, t)
                    }
                    return r.set(a, s), await n(i, a, s), s
                })(i, a)
            }
        }
    }
})), t.register("gf4ZQ", (function(t, n) {
    e(t.exports, "isOwnedByContext", (function() {
        return r
    }));
    const r = (e, t) => e.context === t
})), t.register("fcRB9", (function(n, r) {
    e(n.exports, "createAudioBufferConstructor", (function() {
        return s
    }));
    var o = t("dZG77"),
        i = t("fF9c7");
    const a = {
            numberOfChannels: 1
        },
        s = (e, t, n, r, s, c, u, l) => {
            let d = null;
            return class f {
                static[Symbol.hasInstance](t) {
                    return null !== t && "object" == typeof t && Object.getPrototypeOf(t) === f.prototype || e.has(t)
                }
                constructor(f) {
                    if (null === s) throw new Error("Missing the native OfflineAudioContext constructor.");
                    const {
                        length: p,
                        numberOfChannels: h,
                        sampleRate: g
                    } = {
                        ...a,
                        ...f
                    };
                    null === d && (d = new s(1, 1, 44100));
                    const v = null !== r && t(c, c) ? new r({
                        length: p,
                        numberOfChannels: h,
                        sampleRate: g
                    }) : d.createBuffer(h, p, g);
                    if (0 === v.numberOfChannels) throw n();
                    return "function" != typeof v.copyFromChannel ? (u(v), (0, i.wrapAudioBufferGetChannelDataMethod)(v)) : t(o.testAudioBufferCopyChannelMethodsOutOfBoundsSupport, (() => (0, o.testAudioBufferCopyChannelMethodsOutOfBoundsSupport)(v))) || l(v), e.add(v), v
                }
            }
        }
})), t.register("dZG77", (function(t, n) {
    e(t.exports, "testAudioBufferCopyChannelMethodsOutOfBoundsSupport", (function() {
        return r
    }));
    const r = e => {
        try {
            e.copyToChannel(new Float32Array(1), 0, -1)
        } catch {
            return !1
        }
        return !0
    }
})), t.register("fF9c7", (function(n, r) {
    e(n.exports, "wrapAudioBufferGetChannelDataMethod", (function() {
        return i
    }));
    var o = t("8VRlJ");
    const i = e => {
        var t;
        e.getChannelData = (t = e.getChannelData, n => {
            try {
                return t.call(e, n)
            } catch (e) {
                if (12 === e.code) throw (0, o.createIndexSizeError)();
                throw e
            }
        })
    }
})), t.register("8VRlJ", (function(t, n) {
    e(t.exports, "createIndexSizeError", (function() {
        return r
    }));
    const r = () => new DOMException("", "IndexSizeError")
})), t.register("6KBUc", (function(n, r) {
    e(n.exports, "createAudioBufferSourceNodeConstructor", (function() {
        return u
    }));
    var o = t("2HEdW"),
        i = t("5H21Q"),
        a = t("hcOfm"),
        s = t("4J26V");
    const c = {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: !1,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
        },
        u = (e, t, n, r, u, l, d, f) => class extends e {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer
            }
            set buffer(e) {
                if (this._nativeAudioBufferSourceNode.buffer = e, null !== e) {
                    if (this._isBufferSet) throw r();
                    this._isBufferSet = !0
                }
            }
            get loop() {
                return this._nativeAudioBufferSourceNode.loop
            }
            set loop(e) {
                this._nativeAudioBufferSourceNode.loop = e
            }
            get loopEnd() {
                return this._nativeAudioBufferSourceNode.loopEnd
            }
            set loopEnd(e) {
                this._nativeAudioBufferSourceNode.loopEnd = e
            }
            get loopStart() {
                return this._nativeAudioBufferSourceNode.loopStart
            }
            set loopStart(e) {
                this._nativeAudioBufferSourceNode.loopStart = e
            }
            get onended() {
                return this._onended
            }
            set onended(e) {
                const t = "function" == typeof e ? f(this, e) : null;
                this._nativeAudioBufferSourceNode.onended = t;
                const n = this._nativeAudioBufferSourceNode.onended;
                this._onended = null !== n && n === t ? e : n
            }
            get playbackRate() {
                return this._playbackRate
            }
            start(e = 0, t = 0, n) {
                if (this._nativeAudioBufferSourceNode.start(e, t, n), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.start = void 0 === n ? [e, t] : [e, t, n]), "closed" !== this.context.state) {
                    (0, a.setInternalStateToActive)(this);
                    const e = () => {
                        this._nativeAudioBufferSourceNode.removeEventListener("ended", e), (0, i.isActiveAudioNode)(this) && (0, s.setInternalStateToPassive)(this)
                    };
                    this._nativeAudioBufferSourceNode.addEventListener("ended", e)
                }
            }
            stop(e = 0) {
                this._nativeAudioBufferSourceNode.stop(e), null !== this._audioBufferSourceNodeRenderer && (this._audioBufferSourceNodeRenderer.stop = e)
            }
            constructor(e, r) {
                const i = l(e),
                    a = {
                        ...c,
                        ...r
                    },
                    s = u(i, a),
                    f = d(i),
                    p = f ? t() : null;
                super(e, !1, s, p), this._audioBufferSourceNodeRenderer = p, this._isBufferNullified = !1, this._isBufferSet = null !== a.buffer, this._nativeAudioBufferSourceNode = s, this._onended = null, this._playbackRate = n(this, f, s.playbackRate, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT)
            }
        }
})), t.register("2HEdW", (function(t, n) {
    e(t.exports, "MOST_NEGATIVE_SINGLE_FLOAT", (function() {
        return r
    })), e(t.exports, "MOST_POSITIVE_SINGLE_FLOAT", (function() {
        return o
    }));
    const r = -34028234663852886e22,
        o = -r
})), t.register("5H21Q", (function(n, r) {
    e(n.exports, "isActiveAudioNode", (function() {
        return i
    }));
    var o = t("h3W3B");
    const i = e => o.ACTIVE_AUDIO_NODE_STORE.has(e)
})), t.register("1PVKv", (function(n, r) {
    e(n.exports, "createAudioBufferSourceNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n, r, i) => () => {
        const a = new WeakMap;
        let s = null,
            c = null;
        return {
            set start(e) {
                s = e
            },
            set stop(e) {
                c = e
            },
            render(u, l) {
                const d = a.get(l);
                return void 0 !== d ? Promise.resolve(d) : (async (u, l) => {
                    let d = n(u);
                    const f = (0, o.isOwnedByContext)(d, l);
                    if (!f) {
                        const e = {
                            buffer: d.buffer,
                            channelCount: d.channelCount,
                            channelCountMode: d.channelCountMode,
                            channelInterpretation: d.channelInterpretation,
                            loop: d.loop,
                            loopEnd: d.loopEnd,
                            loopStart: d.loopStart,
                            playbackRate: d.playbackRate.value
                        };
                        d = t(l, e), null !== s && d.start(...s), null !== c && d.stop(c)
                    }
                    return a.set(l, d), f ? await e(l, u.playbackRate, d.playbackRate) : await r(l, u.playbackRate, d.playbackRate), await i(u, l, d), d
                })(u, l)
            }
        }
    }
})), t.register("8Uqp2", (function(n, r) {
    e(n.exports, "createAudioContextConstructor", (function() {
        return a
    }));
    var o = t("5KQXf"),
        i = t("a2BIY");
    const a = (e, t, n, r, a, s, c, u, l) => class extends e {
        get baseLatency() {
            return this._baseLatency
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state
        }
        close() {
            return "closed" === this.state ? this._nativeAudioContext.close().then((() => {
                throw t()
            })) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close().then((() => {
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, o.deactivateAudioGraph)(this)
            })))
        }
        createMediaElementSource(e) {
            return new a(this, {
                mediaElement: e
            })
        }
        createMediaStreamDestination() {
            return new s(this)
        }
        createMediaStreamSource(e) {
            return new c(this, {
                mediaStream: e
            })
        }
        createMediaStreamTrackSource(e) {
            return new u(this, {
                mediaStreamTrack: e
            })
        }
        resume() {
            return "suspended" === this._state ? new Promise(((e, t) => {
                const n = () => {
                    this._nativeAudioContext.removeEventListener("statechange", n), "running" === this._nativeAudioContext.state ? e() : this.resume().then(e, t)
                };
                this._nativeAudioContext.addEventListener("statechange", n)
            })) : this._nativeAudioContext.resume().catch((e => {
                if (void 0 === e || 15 === e.code) throw t();
                throw e
            }))
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch((e => {
                if (void 0 === e) throw t();
                throw e
            }))
        }
        constructor(e = {}) {
            if (null === l) throw new Error("Missing the native AudioContext constructor.");
            let t;
            try {
                t = new l(e)
            } catch (e) {
                if (12 === e.code && "sampleRate is not in range" === e.message) throw n();
                throw e
            }
            if (null === t) throw r();
            if (!(0, i.isValidLatencyHint)(e.latencyHint)) throw new TypeError(`The provided value '${e.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== e.sampleRate && t.sampleRate !== e.sampleRate) throw n();
            super(t, 2);
            const {
                latencyHint: o
            } = e, {
                sampleRate: a
            } = t;
            if (this._baseLatency = "number" == typeof t.baseLatency ? t.baseLatency : "balanced" === o ? 512 / a : "interactive" === o || void 0 === o ? 256 / a : "playback" === o ? 1024 / a : 128 * Math.max(2, Math.min(128, Math.round(o * a / 128))) / a, this._nativeAudioContext = t, "webkitAudioContext" === l.name ? (this._nativeGainNode = t.createGain(), this._nativeOscillatorNode = t.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(t.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, "running" === t.state) {
                this._state = "suspended";
                const e = () => {
                    "suspended" === this._state && (this._state = null), t.removeEventListener("statechange", e)
                };
                t.addEventListener("statechange", e)
            }
        }
    }
})), t.register("5KQXf", (function(n, r) {
    e(n.exports, "deactivateAudioGraph", (function() {
        return i
    }));
    var o = t("3tifL");
    const i = e => {
        (0, o.deactivateActiveAudioNodeInputConnections)(e.destination, [])
    }
})), t.register("3tifL", (function(n, r) {
    e(n.exports, "deactivateActiveAudioNodeInputConnections", (function() {
        return g
    }));
    var o = t("dhbA6"),
        i = t("lE9if"),
        a = t("foyzf"),
        s = t("1yT4P"),
        c = t("dxL0w"),
        u = t("aTyoG"),
        l = t("3YN2V"),
        d = t("c6Cvm"),
        f = t("4d99l"),
        p = t("5H21Q"),
        h = t("4J26V");
    const g = (e, t) => {
        const {
            activeInputs: n
        } = (0, d.getAudioNodeConnections)(e);
        n.forEach((n => n.forEach((([n]) => {
            t.includes(e) || g(n, [...t, e])
        }))));
        const r = (0, o.isAudioBufferSourceNode)(e) ? [e.playbackRate] : (0, i.isAudioWorkletNode)(e) ? Array.from(e.parameters.values()) : (0, a.isBiquadFilterNode)(e) ? [e.Q, e.detune, e.frequency, e.gain] : (0, s.isConstantSourceNode)(e) ? [e.offset] : (0, c.isGainNode)(e) ? [e.gain] : (0, u.isOscillatorNode)(e) ? [e.detune, e.frequency] : (0, l.isStereoPannerNode)(e) ? [e.pan] : [];
        for (const e of r) {
            const n = (0, f.getAudioParamConnections)(e);
            void 0 !== n && n.activeInputs.forEach((([e]) => g(e, t)))
        }(0, p.isActiveAudioNode)(e) && (0, h.setInternalStateToPassive)(e)
    }
})), t.register("dhbA6", (function(t, n) {
    e(t.exports, "isAudioBufferSourceNode", (function() {
        return r
    }));
    const r = e => "playbackRate" in e
})), t.register("foyzf", (function(t, n) {
    e(t.exports, "isBiquadFilterNode", (function() {
        return r
    }));
    const r = e => "frequency" in e && "gain" in e
})), t.register("1yT4P", (function(t, n) {
    e(t.exports, "isConstantSourceNode", (function() {
        return r
    }));
    const r = e => "offset" in e
})), t.register("dxL0w", (function(t, n) {
    e(t.exports, "isGainNode", (function() {
        return r
    }));
    const r = e => !("frequency" in e) && "gain" in e
})), t.register("aTyoG", (function(t, n) {
    e(t.exports, "isOscillatorNode", (function() {
        return r
    }));
    const r = e => "detune" in e && "frequency" in e
})), t.register("3YN2V", (function(t, n) {
    e(t.exports, "isStereoPannerNode", (function() {
        return r
    }));
    const r = e => "pan" in e
})), t.register("c6Cvm", (function(n, r) {
    e(n.exports, "getAudioNodeConnections", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("6K4L5");
    const a = e => (0, i.getValueForKey)(o.AUDIO_NODE_CONNECTIONS_STORE, e)
})), t.register("4d99l", (function(n, r) {
    e(n.exports, "getAudioParamConnections", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("6K4L5");
    const a = e => (0, i.getValueForKey)(o.AUDIO_PARAM_CONNECTIONS_STORE, e)
})), t.register("a2BIY", (function(t, n) {
    e(t.exports, "isValidLatencyHint", (function() {
        return r
    }));
    const r = e => void 0 === e || "number" == typeof e || "string" == typeof e && ("balanced" === e || "interactive" === e || "playback" === e)
})), t.register("gQZKf", (function(t, n) {
    e(t.exports, "createAudioDestinationNodeConstructor", (function() {
        return r
    }));
    const r = (e, t, n, r, o, i, a, s) => class extends e {
        get channelCount() {
            return this._nativeAudioDestinationNode.channelCount
        }
        set channelCount(e) {
            if (this._isNodeOfNativeOfflineAudioContext) throw r();
            if (e > this._nativeAudioDestinationNode.maxChannelCount) throw n();
            this._nativeAudioDestinationNode.channelCount = e
        }
        get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode
        }
        set channelCountMode(e) {
            if (this._isNodeOfNativeOfflineAudioContext) throw r();
            this._nativeAudioDestinationNode.channelCountMode = e
        }
        get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount
        }
        constructor(e, n) {
            const r = i(e),
                c = a(r),
                u = o(r, n, c);
            super(e, !1, u, c ? t(s) : null), this._isNodeOfNativeOfflineAudioContext = c, this._nativeAudioDestinationNode = u
        }
    }
})), t.register("gN80f", (function(t, n) {
    e(t.exports, "createAudioDestinationNodeRenderer", (function() {
        return r
    }));
    const r = e => {
        const t = new WeakMap;
        return {
            render(n, r) {
                const o = t.get(r);
                return void 0 !== o ? Promise.resolve(o) : (async (n, r) => {
                    const o = r.destination;
                    return t.set(r, o), await e(n, r, o), o
                })(n, r)
            }
        }
    }
})), t.register("lvCzA", (function(n, r) {
    e(n.exports, "createAudioListenerFactory", (function() {
        return i
    }));
    var o = t("2HEdW");
    const i = (e, t, n, r, i, a, s, c) => (u, l) => {
        const d = l.listener,
            {
                forwardX: f,
                forwardY: p,
                forwardZ: h,
                positionX: g,
                positionY: v,
                positionZ: m,
                upX: y,
                upY: x,
                upZ: C
            } = void 0 === d.forwardX ? (() => {
                const f = new Float32Array(1),
                    p = t(l, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: 9
                    }),
                    h = s(l);
                let g = !1,
                    v = [0, 0, -1, 0, 1, 0],
                    m = [0, 0, 0];
                const y = () => {
                        if (g) return;
                        g = !0;
                        const e = r(l, 256, 9, 0);
                        e.onaudioprocess = ({
                            inputBuffer: e
                        }) => {
                            const t = [a(e, f, 0), a(e, f, 1), a(e, f, 2), a(e, f, 3), a(e, f, 4), a(e, f, 5)];
                            t.some(((e, t) => e !== v[t])) && (d.setOrientation(...t), v = t);
                            const n = [a(e, f, 6), a(e, f, 7), a(e, f, 8)];
                            n.some(((e, t) => e !== m[t])) && (d.setPosition(...n), m = n)
                        }, p.connect(e)
                    },
                    x = e => t => {
                        t !== v[e] && (v[e] = t, d.setOrientation(...v))
                    },
                    C = e => t => {
                        t !== m[e] && (m[e] = t, d.setPosition(...m))
                    },
                    N = (t, r, a) => {
                        const s = n(l, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: r
                        });
                        s.connect(p, 0, t), s.start(), Object.defineProperty(s.offset, "defaultValue", {
                            get: () => r
                        });
                        const d = e({
                            context: u
                        }, h, s.offset, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT);
                        var f, g, v, m, x, C, N;
                        return c(d, "value", (e => () => e.call(d)), (e => t => {
                            try {
                                e.call(d, t)
                            } catch (e) {
                                if (9 !== e.code) throw e
                            }
                            y(), h && a(t)
                        })), d.cancelAndHoldAtTime = (f = d.cancelAndHoldAtTime, h ? () => {
                            throw i()
                        } : (...e) => {
                            const t = f.apply(d, e);
                            return y(), t
                        }), d.cancelScheduledValues = (g = d.cancelScheduledValues, h ? () => {
                            throw i()
                        } : (...e) => {
                            const t = g.apply(d, e);
                            return y(), t
                        }), d.exponentialRampToValueAtTime = (v = d.exponentialRampToValueAtTime, h ? () => {
                            throw i()
                        } : (...e) => {
                            const t = v.apply(d, e);
                            return y(), t
                        }), d.linearRampToValueAtTime = (m = d.linearRampToValueAtTime, h ? () => {
                            throw i()
                        } : (...e) => {
                            const t = m.apply(d, e);
                            return y(), t
                        }), d.setTargetAtTime = (x = d.setTargetAtTime, h ? () => {
                            throw i()
                        } : (...e) => {
                            const t = x.apply(d, e);
                            return y(), t
                        }), d.setValueAtTime = (C = d.setValueAtTime, h ? () => {
                            throw i()
                        } : (...e) => {
                            const t = C.apply(d, e);
                            return y(), t
                        }), d.setValueCurveAtTime = (N = d.setValueCurveAtTime, h ? () => {
                            throw i()
                        } : (...e) => {
                            const t = N.apply(d, e);
                            return y(), t
                        }), d
                    };
                return {
                    forwardX: N(0, 0, x(0)),
                    forwardY: N(1, 0, x(1)),
                    forwardZ: N(2, -1, x(2)),
                    positionX: N(6, 0, C(0)),
                    positionY: N(7, 0, C(1)),
                    positionZ: N(8, 0, C(2)),
                    upX: N(3, 0, x(3)),
                    upY: N(4, 1, x(4)),
                    upZ: N(5, 0, x(5))
                }
            })() : d;
        return {
            get forwardX() {
                return f
            },
            get forwardY() {
                return p
            },
            get forwardZ() {
                return h
            },
            get positionX() {
                return g
            },
            get positionY() {
                return v
            },
            get positionZ() {
                return m
            },
            get upX() {
                return y
            },
            get upY() {
                return x
            },
            get upZ() {
                return C
            }
        }
    }
})), t.register("5iui3", (function(n, r) {
    e(n.exports, "createAudioNodeConstructor", (function() {
        return k
    }));
    var o = t("h3W3B"),
        i = t("fp9VA"),
        a = t("ejQOB"),
        s = t("2uAdB"),
        c = t("jOJuA"),
        u = t("2P7cE"),
        l = t("c3RI5"),
        d = t("dYpvY"),
        f = t("3bAkG"),
        p = t("1yGRY"),
        h = t("xFwuB"),
        g = t("6xjTf"),
        v = t("c6Cvm"),
        m = t("4d99l"),
        y = t("h40Bm"),
        x = t("j0lVj"),
        C = t("7adm4"),
        N = t("82U8o"),
        A = t("5H21Q"),
        w = t("652JR"),
        b = t("jOPn5"),
        S = t("hcOfm"),
        E = t("etJQF"),
        O = t("dMQPr"),
        _ = t("ksEjT"),
        M = t("7TPOg");
    const T = (e, t, n, r, o) => {
            const [i, a] = ((e, t, n, r) => {
                const {
                    activeInputs: o,
                    passiveInputs: i
                } = (0, v.getAudioNodeConnections)(t), a = (0, l.deleteActiveInputConnection)(o[r], e, n);
                if (null === a) return [(0, p.deletePassiveInputConnectionToAudioNode)(i, e, n, r)[2], !1];
                return [a[2], !0]
            })(e, n, r, o);
            if (null !== i && ((0, f.deleteEventListenerOfAudioNode)(e, i), !a || t || (0, w.isPartOfACycle)(e) || (0, g.disconnectNativeAudioNodeFromNativeAudioNode)((0, x.getNativeAudioNode)(e), (0, x.getNativeAudioNode)(n), r, o)), (0, A.isActiveAudioNode)(n)) {
                const {
                    activeInputs: e
                } = (0, v.getAudioNodeConnections)(n);
                (0, E.setInternalStateToPassiveWhenNecessary)(n, e)
            }
        },
        I = (e, t, n, r) => {
            const [o, i] = ((e, t, n) => {
                const {
                    activeInputs: r,
                    passiveInputs: o
                } = (0, m.getAudioParamConnections)(t), i = (0, l.deleteActiveInputConnection)(r, e, n);
                if (null === i) return [(0, h.deletePassiveInputConnectionToAudioParam)(o, e, n)[1], !1];
                return [i[2], !0]
            })(e, n, r);
            null !== o && ((0, f.deleteEventListenerOfAudioNode)(e, o), !i || t || (0, w.isPartOfACycle)(e) || (0, x.getNativeAudioNode)(e).disconnect((0, C.getNativeAudioParam)(n), r))
        },
        k = (e, t, n, r, l, f, p, g, E, k, P, R, F, j, B, L) => class extends k {
            get channelCount() {
                return this._nativeAudioNode.channelCount
            }
            set channelCount(e) {
                this._nativeAudioNode.channelCount = e
            }
            get channelCountMode() {
                return this._nativeAudioNode.channelCountMode
            }
            set channelCountMode(e) {
                this._nativeAudioNode.channelCountMode = e
            }
            get channelInterpretation() {
                return this._nativeAudioNode.channelInterpretation
            }
            set channelInterpretation(e) {
                this._nativeAudioNode.channelInterpretation = e
            }
            get context() {
                return this._context
            }
            get numberOfInputs() {
                return this._nativeAudioNode.numberOfInputs
            }
            get numberOfOutputs() {
                return this._nativeAudioNode.numberOfOutputs
            }
            connect(e, n = 0, o = 0) {
                if (n < 0 || n >= this._nativeAudioNode.numberOfOutputs) throw l();
                const a = P(this._context),
                    g = B(a);
                if (F(e) || j(e)) throw f();
                if ((0, i.isAudioNode)(e)) {
                    const i = (0, x.getNativeAudioNode)(e);
                    try {
                        const t = (0, u.connectNativeAudioNodeToNativeAudioNode)(this._nativeAudioNode, i, n, o),
                            r = (0, b.isPassiveAudioNode)(this);
                        (g || r) && this._nativeAudioNode.disconnect(...t), "closed" !== this.context.state && !r && (0, b.isPassiveAudioNode)(e) && (0, S.setInternalStateToActive)(e)
                    } catch (e) {
                        if (12 === e.code) throw f();
                        throw e
                    }
                    if (t(this, e, n, o, g)) {
                        const t = E([this], e);
                        (0, _.visitEachAudioNodeOnce)(t, r(g))
                    }
                    return e
                }
                const O = (0, C.getNativeAudioParam)(e);
                if ("playbackRate" === O.name && 1024 === O.maxValue) throw p();
                try {
                    this._nativeAudioNode.connect(O, n), (g || (0, b.isPassiveAudioNode)(this)) && this._nativeAudioNode.disconnect(O, n)
                } catch (e) {
                    if (12 === e.code) throw f();
                    throw e
                }
                const M = ((e, t, n, r) => {
                    const {
                        activeInputs: o,
                        passiveInputs: i
                    } = (0, m.getAudioParamConnections)(t), {
                        outputs: a
                    } = (0, v.getAudioNodeConnections)(e), u = (0, y.getEventListenersOfAudioNode)(e), l = a => {
                        const u = (0, x.getNativeAudioNode)(e),
                            l = (0, C.getNativeAudioParam)(t);
                        if (a) {
                            const t = (0, h.deletePassiveInputConnectionToAudioParam)(i, e, n);
                            (0, s.addActiveInputConnectionToAudioParam)(o, e, t, !1), r || (0, w.isPartOfACycle)(e) || u.connect(l, n)
                        } else {
                            const t = (0, d.deleteActiveInputConnectionToAudioParam)(o, e, n);
                            (0, c.addPassiveInputConnectionToAudioParam)(i, t, !1), r || (0, w.isPartOfACycle)(e) || u.disconnect(l, n)
                        }
                    };
                    return !!(0, N.insertElementInSet)(a, [t, n], (e => e[0] === t && e[1] === n), !0) && (u.add(l), (0, A.isActiveAudioNode)(e) ? (0, s.addActiveInputConnectionToAudioParam)(o, e, [n, l], !0) : (0, c.addPassiveInputConnectionToAudioParam)(i, [e, n, l], !0), !0)
                })(this, e, n, g);
                if (M) {
                    const t = E([this], e);
                    (0, _.visitEachAudioNodeOnce)(t, r(g))
                }
            }
            disconnect(e, t, n) {
                let r;
                const o = P(this._context),
                    s = B(o);
                if (void 0 === e) r = ((e, t) => {
                    const n = (0, v.getAudioNodeConnections)(e),
                        r = [];
                    for (const o of n.outputs)(0, a.isAudioNodeOutputConnection)(o) ? T(e, t, ...o) : I(e, t, ...o), r.push(o[0]);
                    return n.outputs.clear(), r
                })(this, s);
                else if ("number" == typeof e) {
                    if (e < 0 || e >= this.numberOfOutputs) throw l();
                    r = ((e, t, n) => {
                        const r = (0, v.getAudioNodeConnections)(e),
                            o = [];
                        for (const i of r.outputs) i[1] === n && ((0, a.isAudioNodeOutputConnection)(i) ? T(e, t, ...i) : I(e, t, ...i), o.push(i[0]), r.outputs.delete(i));
                        return o
                    })(this, s, e)
                } else {
                    if (void 0 !== t && (t < 0 || t >= this.numberOfOutputs)) throw l();
                    if ((0, i.isAudioNode)(e) && void 0 !== n && (n < 0 || n >= e.numberOfInputs)) throw l();
                    if (r = ((e, t, n, r, o) => {
                            const i = (0, v.getAudioNodeConnections)(e);
                            return Array.from(i.outputs).filter((e => !(e[0] !== n || void 0 !== r && e[1] !== r || void 0 !== o && e[2] !== o))).map((n => ((0, a.isAudioNodeOutputConnection)(n) ? T(e, t, ...n) : I(e, t, ...n), i.outputs.delete(n), n[0])))
                        })(this, s, e, t, n), 0 === r.length) throw f()
                }
                for (const e of r) {
                    const t = E([this], e);
                    (0, _.visitEachAudioNodeOnce)(t, g)
                }
            }
            constructor(t, r, i, a) {
                super(i), this._context = t, this._nativeAudioNode = i;
                const s = P(t);
                R(s) && !0 !== n(O.testAudioNodeDisconnectMethodSupport, (() => (0, O.testAudioNodeDisconnectMethodSupport)(s, L))) && (0, M.wrapAudioNodeDisconnectMethod)(i), o.AUDIO_NODE_STORE.set(this, i), o.EVENT_LISTENERS.set(this, new Set), "closed" !== t.state && r && (0, S.setInternalStateToActive)(this), e(this, a, i)
            }
        }
})), t.register("fp9VA", (function(t, n) {
    e(t.exports, "isAudioNode", (function() {
        return r
    }));
    const r = e => "context" in e
})), t.register("ejQOB", (function(n, r) {
    e(n.exports, "isAudioNodeOutputConnection", (function() {
        return i
    }));
    var o = t("fp9VA");
    const i = e => (0, o.isAudioNode)(e[0])
})), t.register("2uAdB", (function(n, r) {
    e(n.exports, "addActiveInputConnectionToAudioParam", (function() {
        return i
    }));
    var o = t("82U8o");
    const i = (e, t, [n, r], i) => {
        (0, o.insertElementInSet)(e, [t, n, r], (e => e[0] === t && e[1] === n), i)
    }
})), t.register("82U8o", (function(t, n) {
    e(t.exports, "insertElementInSet", (function() {
        return r
    }));
    const r = (e, t, n, r) => {
        for (const t of e)
            if (n(t)) {
                if (r) return !1;
                throw Error("The set contains at least one similar element.")
            } return e.add(t), !0
    }
})), t.register("jOJuA", (function(n, r) {
    e(n.exports, "addPassiveInputConnectionToAudioParam", (function() {
        return i
    }));
    var o = t("82U8o");
    const i = (e, [t, n, r], i) => {
        const a = e.get(t);
        void 0 === a ? e.set(t, new Set([
            [n, r]
        ])) : (0, o.insertElementInSet)(a, [n, r], (e => e[0] === n), i)
    }
})), t.register("2P7cE", (function(n, r) {
    e(n.exports, "connectNativeAudioNodeToNativeAudioNode", (function() {
        return i
    }));
    var o = t("1gZ6F");
    const i = (e, t, n, r) => {
        if ((0, o.isNativeAudioNodeFaker)(t)) {
            const o = t.inputs[r];
            return e.connect(o, n, 0), [o, n, 0]
        }
        return e.connect(t, n, r), [t, n, r]
    }
})), t.register("1gZ6F", (function(t, n) {
    e(t.exports, "isNativeAudioNodeFaker", (function() {
        return r
    }));
    const r = e => "inputs" in e
})), t.register("c3RI5", (function(t, n) {
    e(t.exports, "deleteActiveInputConnection", (function() {
        return r
    }));
    const r = (e, t, n) => {
        for (const r of e)
            if (r[0] === t && r[1] === n) return e.delete(r), r;
        return null
    }
})), t.register("dYpvY", (function(n, r) {
    e(n.exports, "deleteActiveInputConnectionToAudioParam", (function() {
        return i
    }));
    var o = t("kN3QQ");
    const i = (e, t, n) => (0, o.pickElementFromSet)(e, (e => e[0] === t && e[1] === n))
})), t.register("3bAkG", (function(n, r) {
    e(n.exports, "deleteEventListenerOfAudioNode", (function() {
        return i
    }));
    var o = t("h40Bm");
    const i = (e, t) => {
        if (!(0, o.getEventListenersOfAudioNode)(e).delete(t)) throw new Error("Missing the expected event listener.")
    }
})), t.register("xFwuB", (function(n, r) {
    e(n.exports, "deletePassiveInputConnectionToAudioParam", (function() {
        return a
    }));
    var o = t("6K4L5"),
        i = t("kN3QQ");
    const a = (e, t, n) => {
        const r = (0, o.getValueForKey)(e, t),
            a = (0, i.pickElementFromSet)(r, (e => e[0] === n));
        return 0 === r.size && e.delete(t), a
    }
})), t.register("6xjTf", (function(n, r) {
    e(n.exports, "disconnectNativeAudioNodeFromNativeAudioNode", (function() {
        return i
    }));
    var o = t("1gZ6F");
    const i = (e, t, n, r) => {
        (0, o.isNativeAudioNodeFaker)(t) ? e.disconnect(t.inputs[r], n, 0): e.disconnect(t, n, r)
    }
})), t.register("j0lVj", (function(n, r) {
    e(n.exports, "getNativeAudioNode", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("6K4L5");
    const a = e => (0, i.getValueForKey)(o.AUDIO_NODE_STORE, e)
})), t.register("7adm4", (function(n, r) {
    e(n.exports, "getNativeAudioParam", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("6K4L5");
    const a = e => (0, i.getValueForKey)(o.AUDIO_PARAM_STORE, e)
})), t.register("652JR", (function(n, r) {
    e(n.exports, "isPartOfACycle", (function() {
        return i
    }));
    var o = t("h3W3B");
    const i = e => o.CYCLE_COUNTERS.has(e)
})), t.register("jOPn5", (function(n, r) {
    e(n.exports, "isPassiveAudioNode", (function() {
        return i
    }));
    var o = t("h3W3B");
    const i = e => !o.ACTIVE_AUDIO_NODE_STORE.has(e)
})), t.register("dMQPr", (function(t, n) {
    e(t.exports, "testAudioNodeDisconnectMethodSupport", (function() {
        return r
    }));
    const r = (e, t) => new Promise((n => {
        if (null !== t) n(!0);
        else {
            const t = e.createScriptProcessor(256, 1, 1),
                r = e.createGain(),
                o = e.createBuffer(1, 2, 44100),
                i = o.getChannelData(0);
            i[0] = 1, i[1] = 1;
            const a = e.createBufferSource();
            a.buffer = o, a.loop = !0, a.connect(t).connect(e.destination), a.connect(r), a.disconnect(r), t.onaudioprocess = r => {
                const o = r.inputBuffer.getChannelData(0);
                Array.prototype.some.call(o, (e => 1 === e)) ? n(!0) : n(!1), a.stop(), t.onaudioprocess = null, a.disconnect(t), t.disconnect(e.destination)
            }, a.start()
        }
    }))
})), t.register("ksEjT", (function(t, n) {
    e(t.exports, "visitEachAudioNodeOnce", (function() {
        return r
    }));
    const r = (e, t) => {
        const n = new Map;
        for (const t of e)
            for (const e of t) {
                const t = n.get(e);
                n.set(e, void 0 === t ? 1 : t + 1)
            }
        n.forEach(((e, n) => t(n, e)))
    }
})), t.register("7TPOg", (function(n, r) {
    e(n.exports, "wrapAudioNodeDisconnectMethod", (function() {
        return i
    }));
    var o = t("jMH3q");
    const i = e => {
        const t = new Map;
        var n, r;
        e.connect = (n = e.connect.bind(e), (e, r = 0, i = 0) => {
            const a = (0, o.isNativeAudioNode)(e) ? n(e, r, i) : n(e, r),
                s = t.get(e);
            return void 0 === s ? t.set(e, [{
                input: i,
                output: r
            }]) : s.every((e => e.input !== i || e.output !== r)) && s.push({
                input: i,
                output: r
            }), a
        }), e.disconnect = (r = e.disconnect, (n, i, a) => {
            if (r.apply(e), void 0 === n) t.clear();
            else if ("number" == typeof n)
                for (const [e, r] of t) {
                    const o = r.filter((e => e.output !== n));
                    0 === o.length ? t.delete(e) : t.set(e, o)
                } else if (t.has(n))
                    if (void 0 === i) t.delete(n);
                    else {
                        const e = t.get(n);
                        if (void 0 !== e) {
                            const r = e.filter((e => e.output !== i && (e.input !== a || void 0 === a)));
                            0 === r.length ? t.delete(n) : t.set(n, r)
                        }
                    } for (const [n, r] of t) r.forEach((t => {
                (0, o.isNativeAudioNode)(n) ? e.connect(n, t.output, t.input): e.connect(n, t.output)
            }))
        })
    }
})), t.register("jMH3q", (function(t, n) {
    e(t.exports, "isNativeAudioNode", (function() {
        return r
    }));
    const r = e => "context" in e
})), t.register("dmLlG", (function(n, r) {
    e(n.exports, "createAudioParamFactory", (function() {
        return i
    }));
    var o = t("eG4Jc");
    const i = (e, t, n, r, i, a, s, c, u, l, d, f, p) => (h, g, v, m = null, y = null) => {
        const x = new(0, o.AutomationEventList)(v.defaultValue),
            C = g ? r(x) : null,
            N = {
                get defaultValue() {
                    return v.defaultValue
                },
                get maxValue() {
                    return null === m ? v.maxValue : m
                },
                get minValue() {
                    return null === y ? v.minValue : y
                },
                get value() {
                    return v.value
                },
                set value(e) {
                    v.value = e, N.setValueAtTime(e, h.context.currentTime)
                },
                cancelAndHoldAtTime(e) {
                    if ("function" == typeof v.cancelAndHoldAtTime) null === C && x.flush(h.context.currentTime), x.add(i(e)), v.cancelAndHoldAtTime(e);
                    else {
                        const t = Array.from(x).pop();
                        null === C && x.flush(h.context.currentTime), x.add(i(e));
                        const n = Array.from(x).pop();
                        v.cancelScheduledValues(e), t !== n && void 0 !== n && ("exponentialRampToValue" === n.type ? v.exponentialRampToValueAtTime(n.value, n.endTime) : "linearRampToValue" === n.type ? v.linearRampToValueAtTime(n.value, n.endTime) : "setValue" === n.type ? v.setValueAtTime(n.value, n.startTime) : "setValueCurve" === n.type && v.setValueCurveAtTime(n.values, n.startTime, n.duration))
                    }
                    return N
                },
                cancelScheduledValues: e => (null === C && x.flush(h.context.currentTime), x.add(a(e)), v.cancelScheduledValues(e), N),
                exponentialRampToValueAtTime(e, t) {
                    if (0 === e) throw new RangeError;
                    if (!Number.isFinite(t) || t < 0) throw new RangeError;
                    return null === C && x.flush(h.context.currentTime), x.add(s(e, t)), v.exponentialRampToValueAtTime(e, t), N
                },
                linearRampToValueAtTime: (e, t) => (null === C && x.flush(h.context.currentTime), x.add(c(e, t)), v.linearRampToValueAtTime(e, t), N),
                setTargetAtTime: (e, t, n) => (null === C && x.flush(h.context.currentTime), x.add(u(e, t, n)), v.setTargetAtTime(e, t, n), N),
                setValueAtTime: (e, t) => (null === C && x.flush(h.context.currentTime), x.add(l(e, t)), v.setValueAtTime(e, t), N),
                setValueCurveAtTime(e, t, n) {
                    const r = e instanceof Float32Array ? e : new Float32Array(e);
                    if (null !== f && "webkitAudioContext" === f.name) {
                        const e = t + n,
                            o = h.context.sampleRate,
                            i = Math.ceil(t * o),
                            a = Math.floor(e * o),
                            s = a - i,
                            c = new Float32Array(s);
                        for (let e = 0; e < s; e += 1) {
                            const a = (r.length - 1) / n * ((i + e) / o - t),
                                s = Math.floor(a),
                                u = Math.ceil(a);
                            c[e] = s === u ? r[s] : (1 - (a - s)) * r[s] + (1 - (u - a)) * r[u]
                        }
                        null === C && x.flush(h.context.currentTime), x.add(d(c, t, n)), v.setValueCurveAtTime(c, t, n);
                        const u = a / o;
                        u < e && p(N, c[c.length - 1], u), p(N, r[r.length - 1], e)
                    } else null === C && x.flush(h.context.currentTime), x.add(d(r, t, n)), v.setValueCurveAtTime(r, t, n);
                    return N
                }
            };
        return n.set(N, v), t.set(N, h), e(N, C), N
    }
})), t.register("iqKRb", (function(t, n) {
    e(t.exports, "createAudioParamRenderer", (function() {
        return r
    }));
    const r = e => ({
        replay(t) {
            for (const n of e)
                if ("exponentialRampToValue" === n.type) {
                    const {
                        endTime: e,
                        value: r
                    } = n;
                    t.exponentialRampToValueAtTime(r, e)
                } else if ("linearRampToValue" === n.type) {
                const {
                    endTime: e,
                    value: r
                } = n;
                t.linearRampToValueAtTime(r, e)
            } else if ("setTarget" === n.type) {
                const {
                    startTime: e,
                    target: r,
                    timeConstant: o
                } = n;
                t.setTargetAtTime(r, e, o)
            } else if ("setValue" === n.type) {
                const {
                    startTime: e,
                    value: r
                } = n;
                t.setValueAtTime(r, e)
            } else {
                if ("setValueCurve" !== n.type) throw new Error("Can't apply an unknown automation.");
                {
                    const {
                        duration: e,
                        startTime: r,
                        values: o
                    } = n;
                    t.setValueCurveAtTime(o, r, e)
                }
            }
        }
    })
})), t.register("8fTst", (function(n, r) {
    e(n.exports, "createAudioWorkletNodeConstructor", (function() {
        return s
    }));
    var o = t("h3W3B"),
        i = t("fkAlu");
    const a = {
            channelCount: 2,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: 1,
            numberOfOutputs: 1,
            parameterData: {},
            processorOptions: {}
        },
        s = (e, t, n, r, s, c, u, l, d, f, p, h, g, v) => class extends t {
            get onprocessorerror() {
                return this._onprocessorerror
            }
            set onprocessorerror(e) {
                const t = "function" == typeof e ? v(this, e) : null;
                this._nativeAudioWorkletNode.onprocessorerror = t;
                const n = this._nativeAudioWorkletNode.onprocessorerror;
                this._onprocessorerror = null !== n && n === t ? e : n
            }
            get parameters() {
                return null === this._parameters ? this._nativeAudioWorkletNode.parameters : this._parameters
            }
            get port() {
                return this._nativeAudioWorkletNode.port
            }
            constructor(t, v, m) {
                var y;
                const x = l(t),
                    C = d(x),
                    N = p({
                        ...a,
                        ...m
                    });
                g(N);
                const A = o.NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(x),
                    w = null == A ? void 0 : A.get(v),
                    b = C || "closed" !== x.state ? x : null !== (y = u(x)) && void 0 !== y ? y : x,
                    S = s(b, C ? null : t.baseLatency, f, v, w, N);
                super(t, !0, S, C ? r(v, N, w) : null);
                const E = [];
                S.parameters.forEach(((e, t) => {
                    const r = n(this, C, e);
                    E.push([t, r])
                })), this._nativeAudioWorkletNode = S, this._onprocessorerror = null, this._parameters = new(0, i.ReadOnlyMap)(E), C && e(x, this);
                const {
                    activeInputs: O
                } = c(this);
                h(S, O)
            }
        }
})), t.register("fkAlu", (function(t, n) {
    e(t.exports, "ReadOnlyMap", (function() {
        return r
    }));
    class r {
        get size() {
            return this._map.size
        }
        entries() {
            return this._map.entries()
        }
        forEach(e, t = null) {
            return this._map.forEach(((n, r) => e.call(t, n, r, this)))
        }
        get(e) {
            return this._map.get(e)
        }
        has(e) {
            return this._map.has(e)
        }
        keys() {
            return this._map.keys()
        }
        values() {
            return this._map.values()
        }
        constructor(e) {
            this._map = new Map(e)
        }
    }
})), t.register("k23tA", (function(n, r) {
    e(n.exports, "createAudioWorkletNodeRendererFactory", (function() {
        return l
    }));
    var o = t("7Pd5N"),
        i = t("jLXEe"),
        a = t("ifJVS"),
        s = t("c6Cvm"),
        c = t("gV4Zc"),
        u = t("gf4ZQ");
    const l = (e, t, n, r, l, d, f, p, h, g, v, m, y, x, C, N) => (A, w, b) => {
        const S = new WeakMap;
        let E = null;
        const O = async (p, O) => {
            let _ = v(p),
                M = null;
            const T = (0, u.isOwnedByContext)(_, O),
                I = Array.isArray(w.outputChannelCount) ? w.outputChannelCount : Array.from(w.outputChannelCount);
            if (null === m) {
                const e = I.reduce(((e, t) => e + t), 0),
                    n = l(O, {
                        channelCount: Math.max(1, e),
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: Math.max(1, e)
                    }),
                    o = [];
                for (let e = 0; e < p.numberOfOutputs; e += 1) o.push(r(O, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: I[e]
                }));
                const i = f(O, {
                    channelCount: w.channelCount,
                    channelCountMode: w.channelCountMode,
                    channelInterpretation: w.channelInterpretation,
                    gain: 1
                });
                i.connect = t.bind(null, o), i.disconnect = h.bind(null, o), M = [n, o, i]
            } else T || (_ = new m(O, A));
            if (S.set(O, null === M ? _ : M[2]), null !== M) {
                if (null === E) {
                    if (void 0 === b) throw new Error("Missing the processor constructor.");
                    if (null === y) throw new Error("Missing the native OfflineAudioContext constructor.");
                    const e = p.channelCount * p.numberOfInputs,
                        t = void 0 === b.parameterDescriptors ? 0 : b.parameterDescriptors.length,
                        n = e + t,
                        u = async () => {
                            const o = new y(n, 128 * Math.ceil(p.context.length / 128), O.sampleRate),
                                i = [],
                                a = [];
                            for (let e = 0; e < w.numberOfInputs; e += 1) i.push(f(o, {
                                channelCount: w.channelCount,
                                channelCountMode: w.channelCountMode,
                                channelInterpretation: w.channelInterpretation,
                                gain: 1
                            })), a.push(l(o, {
                                channelCount: w.channelCount,
                                channelCountMode: "explicit",
                                channelInterpretation: "discrete",
                                numberOfOutputs: w.channelCount
                            }));
                            const s = await Promise.all(Array.from(p.parameters.values()).map((async e => {
                                    const t = d(o, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        offset: e.value
                                    });
                                    return await x(o, e, t.offset), t
                                }))),
                                c = r(o, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "speakers",
                                    numberOfInputs: Math.max(1, e + t)
                                });
                            for (let e = 0; e < w.numberOfInputs; e += 1) {
                                i[e].connect(a[e]);
                                for (let t = 0; t < w.channelCount; t += 1) a[e].connect(c, t, e * w.channelCount + t)
                            }
                            for (const [t, n] of s.entries()) n.connect(c, 0, e + t), n.start(0);
                            return c.connect(o.destination), await Promise.all(i.map((e => C(p, o, e)))), N(o)
                        };
                    E = (async (e, t, n, r, u, l, d) => {
                        const f = null === t ? 128 * Math.ceil(e.context.length / 128) : t.length,
                            p = r.channelCount * r.numberOfInputs,
                            h = u.reduce(((e, t) => e + t), 0),
                            g = 0 === h ? null : n.createBuffer(h, f, n.sampleRate);
                        if (void 0 === l) throw new Error("Missing the processor constructor.");
                        const v = (0, s.getAudioNodeConnections)(e),
                            m = await (0, c.getAudioWorkletProcessor)(n, e),
                            y = (0, a.createNestedArrays)(r.numberOfInputs, r.channelCount),
                            x = (0, a.createNestedArrays)(r.numberOfOutputs, u),
                            C = Array.from(e.parameters.keys()).reduce(((e, t) => ({
                                ...e,
                                [t]: new Float32Array(128)
                            })), {});
                        for (let a = 0; a < f; a += 128) {
                            if (r.numberOfInputs > 0 && null !== t)
                                for (let e = 0; e < r.numberOfInputs; e += 1)
                                    for (let n = 0; n < r.channelCount; n += 1)(0, o.copyFromChannel)(t, y[e], n, n, a);
                            void 0 !== l.parameterDescriptors && null !== t && l.parameterDescriptors.forEach((({
                                name: e
                            }, n) => {
                                (0, o.copyFromChannel)(t, C, e, p + n, a)
                            }));
                            for (let e = 0; e < r.numberOfInputs; e += 1)
                                for (let t = 0; t < u[e]; t += 1) 0 === x[e][t].byteLength && (x[e][t] = new Float32Array(128));
                            try {
                                const e = y.map(((e, t) => 0 === v.activeInputs[t].size ? [] : e)),
                                    t = d(a / n.sampleRate, n.sampleRate, (() => m.process(e, x, C)));
                                if (null !== g)
                                    for (let e = 0, t = 0; e < r.numberOfOutputs; e += 1) {
                                        for (let n = 0; n < u[e]; n += 1)(0, i.copyToChannel)(g, x[e], n, t + n, a);
                                        t += u[e]
                                    }
                                if (!t) break
                            } catch (t) {
                                e.dispatchEvent(new ErrorEvent("processorerror", {
                                    colno: t.colno,
                                    filename: t.filename,
                                    lineno: t.lineno,
                                    message: t.message
                                }));
                                break
                            }
                        }
                        return g
                    })(p, 0 === n ? null : await u(), O, w, I, b, g)
                }
                const e = await E,
                    t = n(O, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: "max",
                        channelInterpretation: "speakers",
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }),
                    [u, h, v] = M;
                null !== e && (t.buffer = e, t.start(0)), t.connect(u);
                for (let e = 0, t = 0; e < p.numberOfOutputs; e += 1) {
                    const n = h[e];
                    for (let r = 0; r < I[e]; r += 1) u.connect(n, t + r, r);
                    t += I[e]
                }
                return v
            }
            if (T)
                for (const [t, n] of p.parameters.entries()) await e(O, n, _.parameters.get(t));
            else
                for (const [e, t] of p.parameters.entries()) await x(O, t, _.parameters.get(e));
            return await C(p, O, _), _
        };
        return {
            render(e, t) {
                p(t, e);
                const n = S.get(t);
                return void 0 !== n ? Promise.resolve(n) : O(e, t)
            }
        }
    }
})), t.register("7Pd5N", (function(t, n) {
    function r(e, t, n, r, o) {
        if ("function" == typeof e.copyFromChannel) 0 === t[n].byteLength && (t[n] = new Float32Array(128)), e.copyFromChannel(t[n], r, o);
        else {
            const i = e.getChannelData(r);
            if (0 === t[n].byteLength) t[n] = i.slice(o, o + 128);
            else {
                const e = new Float32Array(i.buffer, o * Float32Array.BYTES_PER_ELEMENT, 128);
                t[n].set(e)
            }
        }
    }
    e(t.exports, "copyFromChannel", (function() {
        return r
    }))
})), t.register("jLXEe", (function(t, n) {
    e(t.exports, "copyToChannel", (function() {
        return r
    }));
    const r = (e, t, n, r, o) => {
        "function" == typeof e.copyToChannel ? 0 !== t[n].byteLength && e.copyToChannel(t[n], r, o) : 0 !== t[n].byteLength && e.getChannelData(r).set(t[n], o)
    }
})), t.register("ifJVS", (function(t, n) {
    e(t.exports, "createNestedArrays", (function() {
        return r
    }));
    const r = (e, t) => {
        const n = [];
        for (let r = 0; r < e; r += 1) {
            const e = [],
                o = "number" == typeof t ? t : t[r];
            for (let t = 0; t < o; t += 1) e.push(new Float32Array(128));
            n.push(e)
        }
        return n
    }
})), t.register("gV4Zc", (function(n, r) {
    e(n.exports, "getAudioWorkletProcessor", (function() {
        return s
    }));
    var o = t("h3W3B"),
        i = t("j0lVj"),
        a = t("6K4L5");
    const s = (e, t) => {
        const n = (0, a.getValueForKey)(o.NODE_TO_PROCESSOR_MAPS, e),
            r = (0, i.getNativeAudioNode)(t);
        return (0, a.getValueForKey)(n, r)
    }
})), t.register("bRmn7", (function(t, n) {
    e(t.exports, "createBaseAudioContextConstructor", (function() {
        return r
    }));
    const r = (e, t, n, r, o, i, a, s, c, u, l, d, f, p, h, g, v, m, y, x) => class extends h {
        get audioWorklet() {
            return this._audioWorklet
        }
        createAnalyser() {
            return new t(this)
        }
        createBiquadFilter() {
            return new o(this)
        }
        createBuffer(e, t, r) {
            return new n({
                length: t,
                numberOfChannels: e,
                sampleRate: r
            })
        }
        createBufferSource() {
            return new r(this)
        }
        createChannelMerger(e = 6) {
            return new i(this, {
                numberOfInputs: e
            })
        }
        createChannelSplitter(e = 6) {
            return new a(this, {
                numberOfOutputs: e
            })
        }
        createConstantSource() {
            return new s(this)
        }
        createConvolver() {
            return new c(this)
        }
        createDelay(e = 1) {
            return new l(this, {
                maxDelayTime: e
            })
        }
        createDynamicsCompressor() {
            return new d(this)
        }
        createGain() {
            return new f(this)
        }
        createIIRFilter(e, t) {
            return new p(this, {
                feedback: t,
                feedforward: e
            })
        }
        createOscillator() {
            return new g(this)
        }
        createPanner() {
            return new v(this)
        }
        createPeriodicWave(e, t, n = {
            disableNormalization: !1
        }) {
            return new m(this, {
                ...n,
                imag: t,
                real: e
            })
        }
        createStereoPanner() {
            return new y(this)
        }
        createWaveShaper() {
            return new x(this)
        }
        decodeAudioData(e, t, n) {
            return u(this._nativeContext, e).then((e => ("function" == typeof t && t(e), e)), (e => {
                throw "function" == typeof n && n(e), e
            }))
        }
        constructor(t, n) {
            super(t, n), this._nativeContext = t, this._audioWorklet = void 0 === e ? void 0 : {
                addModule: (t, n) => e(this, t, n)
            }
        }
    }
})), t.register("51PuQ", (function(n, r) {
    e(n.exports, "createBiquadFilterNodeConstructor", (function() {
        return a
    }));
    var o = t("2HEdW");
    const i = {
            Q: 1,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            detune: 0,
            frequency: 350,
            gain: 0,
            type: "lowpass"
        },
        a = (e, t, n, r, a, s, c, u) => class extends e {
            get detune() {
                return this._detune
            }
            get frequency() {
                return this._frequency
            }
            get gain() {
                return this._gain
            }
            get Q() {
                return this._Q
            }
            get type() {
                return this._nativeBiquadFilterNode.type
            }
            set type(e) {
                this._nativeBiquadFilterNode.type = e
            }
            getFrequencyResponse(e, t, n) {
                try {
                    this._nativeBiquadFilterNode.getFrequencyResponse(e, t, n)
                } catch (e) {
                    if (11 === e.code) throw r();
                    throw e
                }
                if (e.length !== t.length || t.length !== n.length) throw r()
            }
            constructor(e, r) {
                const l = s(e),
                    d = {
                        ...i,
                        ...r
                    },
                    f = a(l, d),
                    p = c(l);
                super(e, !1, f, p ? n() : null), this._Q = t(this, p, f.Q, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), this._detune = t(this, p, f.detune, 1200 * Math.log2(o.MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(o.MOST_POSITIVE_SINGLE_FLOAT)), this._frequency = t(this, p, f.frequency, e.sampleRate / 2, 0), this._gain = t(this, p, f.gain, 40 * Math.log10(o.MOST_POSITIVE_SINGLE_FLOAT), o.MOST_NEGATIVE_SINGLE_FLOAT), this._nativeBiquadFilterNode = f, u(this, 1)
            }
        }
})), t.register("6pP28", (function(n, r) {
    e(n.exports, "createBiquadFilterNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n, r, i) => () => {
        const a = new WeakMap;
        return {
            render(s, c) {
                const u = a.get(c);
                return void 0 !== u ? Promise.resolve(u) : (async (s, c) => {
                    let u = n(s);
                    const l = (0, o.isOwnedByContext)(u, c);
                    if (!l) {
                        const e = {
                            Q: u.Q.value,
                            channelCount: u.channelCount,
                            channelCountMode: u.channelCountMode,
                            channelInterpretation: u.channelInterpretation,
                            detune: u.detune.value,
                            frequency: u.frequency.value,
                            gain: u.gain.value,
                            type: u.type
                        };
                        u = t(c, e)
                    }
                    return a.set(c, u), l ? (await e(c, s.Q, u.Q), await e(c, s.detune, u.detune), await e(c, s.frequency, u.frequency), await e(c, s.gain, u.gain)) : (await r(c, s.Q, u.Q), await r(c, s.detune, u.detune), await r(c, s.frequency, u.frequency), await r(c, s.gain, u.gain)), await i(s, c, u), u
                })(s, c)
            }
        }
    }
})), t.register("bo8zQ", (function(t, n) {
    e(t.exports, "createCacheTestResult", (function() {
        return r
    }));
    const r = (e, t) => (n, r) => {
        const o = t.get(n);
        if (void 0 !== o) return o;
        const i = e.get(n);
        if (void 0 !== i) return i;
        try {
            const o = r();
            return o instanceof Promise ? (e.set(n, o), o.catch((() => !1)).then((r => (e.delete(n), t.set(n, r), r)))) : (t.set(n, o), o)
        } catch {
            return t.set(n, !1), !1
        }
    }
})), t.register("lUsHk", (function(t, n) {
    e(t.exports, "createChannelMergerNodeConstructor", (function() {
        return o
    }));
    const r = {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: 6
        },
        o = (e, t, n, o, i) => class extends e {
            constructor(e, a) {
                const s = o(e),
                    c = {
                        ...r,
                        ...a
                    };
                super(e, !1, n(s, c), i(s) ? t() : null)
            }
        }
})), t.register("famxC", (function(n, r) {
    e(n.exports, "createChannelMergerNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n) => () => {
        const r = new WeakMap;
        return {
            render(i, a) {
                const s = r.get(a);
                return void 0 !== s ? Promise.resolve(s) : (async (i, a) => {
                    let s = t(i);
                    if (!(0, o.isOwnedByContext)(s, a)) {
                        const t = {
                            channelCount: s.channelCount,
                            channelCountMode: s.channelCountMode,
                            channelInterpretation: s.channelInterpretation,
                            numberOfInputs: s.numberOfInputs
                        };
                        s = e(a, t)
                    }
                    return r.set(a, s), await n(i, a, s), s
                })(i, a)
            }
        }
    }
})), t.register("fUBM8", (function(t, n) {
    e(t.exports, "createChannelSplitterNodeConstructor", (function() {
        return o
    }));
    const r = {
            channelCount: 6,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: 6
        },
        o = (e, t, n, o, i, a) => class extends e {
            constructor(e, s) {
                const c = o(e),
                    u = a({
                        ...r,
                        ...s
                    });
                super(e, !1, n(c, u), i(c) ? t() : null)
            }
        }
})), t.register("1xvB2", (function(n, r) {
    e(n.exports, "createChannelSplitterNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n) => () => {
        const r = new WeakMap;
        return {
            render(i, a) {
                const s = r.get(a);
                return void 0 !== s ? Promise.resolve(s) : (async (i, a) => {
                    let s = t(i);
                    if (!(0, o.isOwnedByContext)(s, a)) {
                        const t = {
                            channelCount: s.channelCount,
                            channelCountMode: s.channelCountMode,
                            channelInterpretation: s.channelInterpretation,
                            numberOfOutputs: s.numberOfOutputs
                        };
                        s = e(a, t)
                    }
                    return r.set(a, s), await n(i, a, s), s
                })(i, a)
            }
        }
    }
})), t.register("hmbsB", (function(t, n) {
    e(t.exports, "createConnectAudioParam", (function() {
        return r
    }));
    const r = e => (t, n, r) => e(n, t, r)
})), t.register("fjhoZ", (function(n, r) {
    e(n.exports, "createConnectMultipleOutputs", (function() {
        return i
    }));
    var o = t("jMH3q");
    const i = e => (t, n, r = 0, i = 0) => {
        const a = t[r];
        if (void 0 === a) throw e();
        return (0, o.isNativeAudioNode)(n) ? a.connect(n, 0, i) : a.connect(n, 0)
    }
})), t.register("6YiyM", (function(t, n) {
    e(t.exports, "createConnectedNativeAudioBufferSourceNodeFactory", (function() {
        return r
    }));
    const r = e => (t, n) => {
        const r = e(t, {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            o = t.createBuffer(1, 2, 44100);
        return r.buffer = o, r.loop = !0, r.connect(n), r.start(), () => {
            r.stop(), r.disconnect(n)
        }
    }
})), t.register("blyi1", (function(n, r) {
    e(n.exports, "createConstantSourceNodeConstructor", (function() {
        return u
    }));
    var o = t("2HEdW"),
        i = t("5H21Q"),
        a = t("hcOfm"),
        s = t("4J26V");
    const c = {
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            offset: 1
        },
        u = (e, t, n, r, u, l, d) => class extends e {
            get offset() {
                return this._offset
            }
            get onended() {
                return this._onended
            }
            set onended(e) {
                const t = "function" == typeof e ? d(this, e) : null;
                this._nativeConstantSourceNode.onended = t;
                const n = this._nativeConstantSourceNode.onended;
                this._onended = null !== n && n === t ? e : n
            }
            start(e = 0) {
                if (this._nativeConstantSourceNode.start(e), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.start = e), "closed" !== this.context.state) {
                    (0, a.setInternalStateToActive)(this);
                    const e = () => {
                        this._nativeConstantSourceNode.removeEventListener("ended", e), (0, i.isActiveAudioNode)(this) && (0, s.setInternalStateToPassive)(this)
                    };
                    this._nativeConstantSourceNode.addEventListener("ended", e)
                }
            }
            stop(e = 0) {
                this._nativeConstantSourceNode.stop(e), null !== this._constantSourceNodeRenderer && (this._constantSourceNodeRenderer.stop = e)
            }
            constructor(e, i) {
                const a = u(e),
                    s = {
                        ...c,
                        ...i
                    },
                    d = r(a, s),
                    f = l(a),
                    p = f ? n() : null;
                super(e, !1, d, p), this._constantSourceNodeRenderer = p, this._nativeConstantSourceNode = d, this._offset = t(this, f, d.offset, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), this._onended = null
            }
        }
})), t.register("jlfrv", (function(n, r) {
    e(n.exports, "createConstantSourceNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n, r, i) => () => {
        const a = new WeakMap;
        let s = null,
            c = null;
        return {
            set start(e) {
                s = e
            },
            set stop(e) {
                c = e
            },
            render(u, l) {
                const d = a.get(l);
                return void 0 !== d ? Promise.resolve(d) : (async (u, l) => {
                    let d = n(u);
                    const f = (0, o.isOwnedByContext)(d, l);
                    if (!f) {
                        const e = {
                            channelCount: d.channelCount,
                            channelCountMode: d.channelCountMode,
                            channelInterpretation: d.channelInterpretation,
                            offset: d.offset.value
                        };
                        d = t(l, e), null !== s && d.start(s), null !== c && d.stop(c)
                    }
                    return a.set(l, d), f ? await e(l, u.offset, d.offset) : await r(l, u.offset, d.offset), await i(u, l, d), d
                })(u, l)
            }
        }
    }
})), t.register("1effW", (function(t, n) {
    e(t.exports, "createConvertNumberToUnsignedLong", (function() {
        return r
    }));
    const r = e => t => (e[0] = t, e[0])
})), t.register("5wDdS", (function(t, n) {
    e(t.exports, "createConvolverNodeConstructor", (function() {
        return o
    }));
    const r = {
            buffer: null,
            channelCount: 2,
            channelCountMode: "clamped-max",
            channelInterpretation: "speakers",
            disableNormalization: !1
        },
        o = (e, t, n, o, i, a) => class extends e {
            get buffer() {
                return this._isBufferNullified ? null : this._nativeConvolverNode.buffer
            }
            set buffer(e) {
                if (this._nativeConvolverNode.buffer = e, null === e && null !== this._nativeConvolverNode.buffer) {
                    const e = this._nativeConvolverNode.context;
                    this._nativeConvolverNode.buffer = e.createBuffer(1, 1, e.sampleRate), this._isBufferNullified = !0, a(this, 0)
                } else this._isBufferNullified = !1, a(this, null === this._nativeConvolverNode.buffer ? 0 : this._nativeConvolverNode.buffer.duration)
            }
            get normalize() {
                return this._nativeConvolverNode.normalize
            }
            set normalize(e) {
                this._nativeConvolverNode.normalize = e
            }
            constructor(e, s) {
                const c = o(e),
                    u = {
                        ...r,
                        ...s
                    },
                    l = n(c, u);
                super(e, !1, l, i(c) ? t() : null), this._isBufferNullified = !1, this._nativeConvolverNode = l, null !== u.buffer && a(this, u.buffer.duration)
            }
        }
})), t.register("5uOZ0", (function(n, r) {
    e(n.exports, "createConvolverNodeRendererFactory", (function() {
        return a
    }));
    var o = t("1gZ6F"),
        i = t("gf4ZQ");
    const a = (e, t, n) => () => {
        const r = new WeakMap;
        return {
            render(a, s) {
                const c = r.get(s);
                return void 0 !== c ? Promise.resolve(c) : (async (a, s) => {
                    let c = t(a);
                    if (!(0, i.isOwnedByContext)(c, s)) {
                        const t = {
                            buffer: c.buffer,
                            channelCount: c.channelCount,
                            channelCountMode: c.channelCountMode,
                            channelInterpretation: c.channelInterpretation,
                            disableNormalization: !c.normalize
                        };
                        c = e(s, t)
                    }
                    return r.set(s, c), (0, o.isNativeAudioNodeFaker)(c) ? await n(a, s, c.inputs[0]) : await n(a, s, c), c
                })(a, s)
            }
        }
    }
})), t.register("jfFtQ", (function(t, n) {
    e(t.exports, "createCreateNativeOfflineAudioContext", (function() {
        return r
    }));
    const r = (e, t) => (n, r, o) => {
        if (null === t) throw new Error("Missing the native OfflineAudioContext constructor.");
        try {
            return new t(n, r, o)
        } catch (t) {
            if ("SyntaxError" === t.name) throw e();
            throw t
        }
    }
})), t.register("gAZT8", (function(t, n) {
    e(t.exports, "createDataCloneError", (function() {
        return r
    }));
    const r = () => new DOMException("", "DataCloneError")
})), t.register("3vVy2", (function(n, r) {
    e(n.exports, "createDecodeAudioData", (function() {
        return a
    }));
    var o = t("dJlKN"),
        i = t("fF9c7");
    const a = (e, t, n, r, a, s, c, u, l, d, f) => (p, h) => {
        const g = c(p) ? p : s(p);
        if (a.has(h)) {
            const e = n();
            return Promise.reject(e)
        }
        try {
            a.add(h)
        } catch {}
        return t(l, (() => l(g))) ? g.decodeAudioData(h).then((n => ((0, o.detachArrayBuffer)(h).catch((() => {})), t(u, (() => u(n))) || f(n), e.add(n), n))) : new Promise(((t, n) => {
            const a = async () => {
                try {
                    await (0, o.detachArrayBuffer)(h)
                } catch {}
            }, s = e => {
                n(e), a()
            };
            try {
                g.decodeAudioData(h, (n => {
                    "function" != typeof n.copyFromChannel && (d(n), (0, i.wrapAudioBufferGetChannelDataMethod)(n)), e.add(n), a().then((() => t(n)))
                }), (e => {
                    s(null === e ? r() : e)
                }))
            } catch (e) {
                s(e)
            }
        }))
    }
})), t.register("dJlKN", (function(t, n) {
    e(t.exports, "detachArrayBuffer", (function() {
        return r
    }));
    const r = e => {
        const {
            port1: t,
            port2: n
        } = new MessageChannel;
        return new Promise((r => {
            const o = () => {
                n.onmessage = null, t.close(), n.close(), r()
            };
            n.onmessage = () => o();
            try {
                t.postMessage(e, [e])
            } finally {
                o()
            }
        }))
    }
})), t.register("jT2R8", (function(n, r) {
    e(n.exports, "createDecrementCycleCounter", (function() {
        return i
    }));
    var o = t("ejQOB");
    const i = (e, t, n, r, i, a, s, c) => (u, l) => {
        const d = t.get(u);
        if (void 0 === d) throw new Error("Missing the expected cycle count.");
        const f = a(u.context),
            p = c(f);
        if (d === l) {
            if (t.delete(u), !p && s(u)) {
                const t = r(u),
                    {
                        outputs: a
                    } = n(u);
                for (const n of a)
                    if ((0, o.isAudioNodeOutputConnection)(n)) {
                        const o = r(n[0]);
                        e(t, o, n[1], n[2])
                    } else {
                        const e = i(n[0]);
                        t.connect(e, n[1])
                    }
            }
        } else t.set(u, d - l)
    }
})), t.register("h85pl", (function(t, n) {
    e(t.exports, "createDelayNodeConstructor", (function() {
        return o
    }));
    const r = {
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            delayTime: 0,
            maxDelayTime: 1
        },
        o = (e, t, n, o, i, a, s) => class extends e {
            get delayTime() {
                return this._delayTime
            }
            constructor(e, c) {
                const u = i(e),
                    l = {
                        ...r,
                        ...c
                    },
                    d = o(u, l),
                    f = a(u);
                super(e, !1, d, f ? n(l.maxDelayTime) : null), this._delayTime = t(this, f, d.delayTime), s(this, l.maxDelayTime)
            }
        }
})), t.register("3GMKq", (function(n, r) {
    e(n.exports, "createDelayNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n, r, i) => a => {
        const s = new WeakMap;
        return {
            render(c, u) {
                const l = s.get(u);
                return void 0 !== l ? Promise.resolve(l) : (async (c, u) => {
                    let l = n(c);
                    const d = (0, o.isOwnedByContext)(l, u);
                    if (!d) {
                        const e = {
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            delayTime: l.delayTime.value,
                            maxDelayTime: a
                        };
                        l = t(u, e)
                    }
                    return s.set(u, l), d ? await e(u, c.delayTime, l.delayTime) : await r(u, c.delayTime, l.delayTime), await i(c, u, l), l
                })(c, u)
            }
        }
    }
})), t.register("bHQHS", (function(t, n) {
    e(t.exports, "createDeleteActiveInputConnectionToAudioNode", (function() {
        return r
    }));
    const r = e => (t, n, r, o) => e(t[o], (e => e[0] === n && e[1] === r))
})), t.register("bxCup", (function(t, n) {
    e(t.exports, "createDeleteUnrenderedAudioWorkletNode", (function() {
        return r
    }));
    const r = e => (t, n) => {
        e(t).delete(n)
    }
})), t.register("cQiJN", (function(n, r) {
    e(n.exports, "createDetectCycles", (function() {
        return a
    }));
    var o = t("fp9VA"),
        i = t("d7ueG");
    const a = (e, t, n) => function r(a, s) {
        const c = (0, o.isAudioNode)(s) ? s : n(e, s);
        if ((0, i.isDelayNode)(c)) return [];
        if (a[0] === c) return [a];
        if (a.includes(c)) return [];
        const {
            outputs: u
        } = t(c);
        return Array.from(u).map((e => r([...a, c], e[0]))).reduce(((e, t) => e.concat(t)), [])
    }
})), t.register("d7ueG", (function(t, n) {
    e(t.exports, "isDelayNode", (function() {
        return r
    }));
    const r = e => "delayTime" in e
})), t.register("isPvb", (function(n, r) {
    e(n.exports, "createDisconnectMultipleOutputs", (function() {
        return a
    }));
    var o = t("jMH3q");
    const i = (e, t, n) => {
            const r = t[n];
            if (void 0 === r) throw e();
            return r
        },
        a = e => (t, n, r, a = 0) => void 0 === n ? t.forEach((e => e.disconnect())) : "number" == typeof n ? i(e, t, n).disconnect() : (0, o.isNativeAudioNode)(n) ? void 0 === r ? t.forEach((e => e.disconnect(n))) : void 0 === a ? i(e, t, r).disconnect(n, 0) : i(e, t, r).disconnect(n, 0, a) : void 0 === r ? t.forEach((e => e.disconnect(n))) : i(e, t, r).disconnect(n, 0)
})), t.register("hA9Rk", (function(t, n) {
    e(t.exports, "createDynamicsCompressorNodeConstructor", (function() {
        return o
    }));
    const r = {
            attack: .003,
            channelCount: 2,
            channelCountMode: "clamped-max",
            channelInterpretation: "speakers",
            knee: 30,
            ratio: 12,
            release: .25,
            threshold: -24
        },
        o = (e, t, n, o, i, a, s, c) => class extends e {
            get attack() {
                return this._attack
            }
            get channelCount() {
                return this._nativeDynamicsCompressorNode.channelCount
            }
            set channelCount(e) {
                const t = this._nativeDynamicsCompressorNode.channelCount;
                if (this._nativeDynamicsCompressorNode.channelCount = e, e > 2) throw this._nativeDynamicsCompressorNode.channelCount = t, i()
            }
            get channelCountMode() {
                return this._nativeDynamicsCompressorNode.channelCountMode
            }
            set channelCountMode(e) {
                const t = this._nativeDynamicsCompressorNode.channelCountMode;
                if (this._nativeDynamicsCompressorNode.channelCountMode = e, "max" === e) throw this._nativeDynamicsCompressorNode.channelCountMode = t, i()
            }
            get knee() {
                return this._knee
            }
            get ratio() {
                return this._ratio
            }
            get reduction() {
                return "number" == typeof this._nativeDynamicsCompressorNode.reduction.value ? this._nativeDynamicsCompressorNode.reduction.value : this._nativeDynamicsCompressorNode.reduction
            }
            get release() {
                return this._release
            }
            get threshold() {
                return this._threshold
            }
            constructor(e, i) {
                const u = a(e),
                    l = {
                        ...r,
                        ...i
                    },
                    d = o(u, l),
                    f = s(u);
                super(e, !1, d, f ? n() : null), this._attack = t(this, f, d.attack), this._knee = t(this, f, d.knee), this._nativeDynamicsCompressorNode = d, this._ratio = t(this, f, d.ratio), this._release = t(this, f, d.release), this._threshold = t(this, f, d.threshold), c(this, .006)
            }
        }
})), t.register("aMmRU", (function(n, r) {
    e(n.exports, "createDynamicsCompressorNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n, r, i) => () => {
        const a = new WeakMap;
        return {
            render(s, c) {
                const u = a.get(c);
                return void 0 !== u ? Promise.resolve(u) : (async (s, c) => {
                    let u = n(s);
                    const l = (0, o.isOwnedByContext)(u, c);
                    if (!l) {
                        const e = {
                            attack: u.attack.value,
                            channelCount: u.channelCount,
                            channelCountMode: u.channelCountMode,
                            channelInterpretation: u.channelInterpretation,
                            knee: u.knee.value,
                            ratio: u.ratio.value,
                            release: u.release.value,
                            threshold: u.threshold.value
                        };
                        u = t(c, e)
                    }
                    return a.set(c, u), l ? (await e(c, s.attack, u.attack), await e(c, s.knee, u.knee), await e(c, s.ratio, u.ratio), await e(c, s.release, u.release), await e(c, s.threshold, u.threshold)) : (await r(c, s.attack, u.attack), await r(c, s.knee, u.knee), await r(c, s.ratio, u.ratio), await r(c, s.release, u.release), await r(c, s.threshold, u.threshold)), await i(s, c, u), u
                })(s, c)
            }
        }
    }
})), t.register("iSsAY", (function(t, n) {
    e(t.exports, "createEncodingError", (function() {
        return r
    }));
    const r = () => new DOMException("", "EncodingError")
})), t.register("8jk0X", (function(t, n) {
    e(t.exports, "createEvaluateSource", (function() {
        return r
    }));
    const r = e => t => new Promise(((n, r) => {
        if (null === e) return void r(new SyntaxError);
        const o = e.document.head;
        if (null === o) r(new SyntaxError);
        else {
            const i = e.document.createElement("script"),
                a = new Blob([t], {
                    type: "application/javascript"
                }),
                s = URL.createObjectURL(a),
                c = e.onerror,
                u = () => {
                    e.onerror = c, URL.revokeObjectURL(s)
                };
            e.onerror = (t, n, o, i, a) => n === s || n === e.location.href && 1 === o && 1 === i ? (u(), r(a), !1) : null !== c ? c(t, n, o, i, a) : void 0, i.onerror = () => {
                u(), r(new SyntaxError)
            }, i.onload = () => {
                u(), n()
            }, i.src = s, i.type = "module", o.appendChild(i)
        }
    }))
})), t.register("fb0Vw", (function(t, n) {
    e(t.exports, "createEventTargetConstructor", (function() {
        return r
    }));
    const r = e => class {
        addEventListener(t, n, r) {
            if (null !== n) {
                let o = this._listeners.get(n);
                void 0 === o && (o = e(this, n), "function" == typeof n && this._listeners.set(n, o)), this._nativeEventTarget.addEventListener(t, o, r)
            }
        }
        dispatchEvent(e) {
            return this._nativeEventTarget.dispatchEvent(e)
        }
        removeEventListener(e, t, n) {
            const r = null === t ? void 0 : this._listeners.get(t);
            this._nativeEventTarget.removeEventListener(e, void 0 === r ? null : r, n)
        }
        constructor(e) {
            this._nativeEventTarget = e, this._listeners = new WeakMap
        }
    }
})), t.register("2HpQL", (function(t, n) {
    e(t.exports, "createExposeCurrentFrameAndCurrentTime", (function() {
        return r
    }));
    const r = e => (t, n, r) => {
        Object.defineProperties(e, {
            currentFrame: {
                configurable: !0,
                get: () => Math.round(t * n)
            },
            currentTime: {
                configurable: !0,
                get: () => t
            }
        });
        try {
            return r()
        } finally {
            null !== e && (delete e.currentFrame, delete e.currentTime)
        }
    }
})), t.register("c6jsg", (function(t, n) {
    e(t.exports, "createFetchSource", (function() {
        return r
    }));
    const r = e => async t => {
        try {
            const e = await fetch(t);
            if (e.ok) return [await e.text(), e.url]
        } catch {}
        throw e()
    }
})), t.register("1Pybj", (function(n, r) {
    e(n.exports, "createGainNodeConstructor", (function() {
        return a
    }));
    var o = t("2HEdW");
    const i = {
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            gain: 1
        },
        a = (e, t, n, r, a, s) => class extends e {
            get gain() {
                return this._gain
            }
            constructor(e, c) {
                const u = a(e),
                    l = {
                        ...i,
                        ...c
                    },
                    d = r(u, l),
                    f = s(u);
                super(e, !1, d, f ? n() : null), this._gain = t(this, f, d.gain, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT)
            }
        }
})), t.register("fPGel", (function(n, r) {
    e(n.exports, "createGainNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n, r, i) => () => {
        const a = new WeakMap;
        return {
            render(s, c) {
                const u = a.get(c);
                return void 0 !== u ? Promise.resolve(u) : (async (s, c) => {
                    let u = n(s);
                    const l = (0, o.isOwnedByContext)(u, c);
                    if (!l) {
                        const e = {
                            channelCount: u.channelCount,
                            channelCountMode: u.channelCountMode,
                            channelInterpretation: u.channelInterpretation,
                            gain: u.gain.value
                        };
                        u = t(c, e)
                    }
                    return a.set(c, u), l ? await e(c, s.gain, u.gain) : await r(c, s.gain, u.gain), await i(s, c, u), u
                })(s, c)
            }
        }
    }
})), t.register("k5IRs", (function(t, n) {
    e(t.exports, "createGetActiveAudioWorkletNodeInputs", (function() {
        return r
    }));
    const r = (e, t) => n => t(e, n)
})), t.register("gcxM9", (function(t, n) {
    e(t.exports, "createGetAudioNodeRenderer", (function() {
        return r
    }));
    const r = e => t => {
        const n = e(t);
        if (null === n.renderer) throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
        return n.renderer
    }
})), t.register("UM6wK", (function(t, n) {
    e(t.exports, "createGetAudioNodeTailTime", (function() {
        return r
    }));
    const r = e => t => {
        var n;
        return null !== (n = e.get(t)) && void 0 !== n ? n : 0
    }
})), t.register("50rM6", (function(t, n) {
    e(t.exports, "createGetAudioParamRenderer", (function() {
        return r
    }));
    const r = e => t => {
        const n = e(t);
        if (null === n.renderer) throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
        return n.renderer
    }
})), t.register("fHjo2", (function(t, n) {
    e(t.exports, "createGetBackupOfflineAudioContext", (function() {
        return r
    }));
    const r = e => t => e.get(t)
})), t.register("b3GtY", (function(n, r) {
    e(n.exports, "createGetNativeContext", (function() {
        return i
    }));
    var o = t("7zlTw");
    const i = e => t => {
        const n = e.get(t);
        if (void 0 === n) throw (0, o.createInvalidStateError)();
        return n
    }
})), t.register("7zlTw", (function(t, n) {
    e(t.exports, "createInvalidStateError", (function() {
        return r
    }));
    const r = () => new DOMException("", "InvalidStateError")
})), t.register("7yNNb", (function(t, n) {
    e(t.exports, "createGetOrCreateBackupOfflineAudioContext", (function() {
        return r
    }));
    const r = (e, t) => n => {
        let r = e.get(n);
        if (void 0 !== r) return r;
        if (null === t) throw new Error("Missing the native OfflineAudioContext constructor.");
        return r = new t(1, 1, 44100), e.set(n, r), r
    }
})), t.register("jLaeT", (function(t, n) {
    e(t.exports, "createGetUnrenderedAudioWorkletNodes", (function() {
        return r
    }));
    const r = e => t => {
        const n = e.get(t);
        if (void 0 === n) throw new Error("The context has no set of AudioWorkletNodes.");
        return n
    }
})), t.register("kGpcf", (function(n, r) {
    e(n.exports, "createIIRFilterNodeConstructor", (function() {
        return a
    }));
    var o = t("jIwkC");
    const i = {
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers"
        },
        a = (e, t, n, r, a, s) => class extends e {
            getFrequencyResponse(e, t, n) {
                return this._nativeIIRFilterNode.getFrequencyResponse(e, t, n)
            }
            constructor(e, c) {
                const u = r(e),
                    l = a(u),
                    d = {
                        ...i,
                        ...c
                    },
                    f = t(u, l ? null : e.baseLatency, d);
                super(e, !1, f, l ? n(d.feedback, d.feedforward) : null), (0, o.wrapIIRFilterNodeGetFrequencyResponseMethod)(f), this._nativeIIRFilterNode = f, s(this, 1)
            }
        }
})), t.register("jIwkC", (function(n, r) {
    e(n.exports, "wrapIIRFilterNodeGetFrequencyResponseMethod", (function() {
        return i
    }));
    var o = t("cpAhI");
    const i = e => {
        var t;
        e.getFrequencyResponse = (t = e.getFrequencyResponse, (n, r, i) => {
            if (n.length !== r.length || r.length !== i.length) throw (0, o.createInvalidAccessError)();
            return t.call(e, n, r, i)
        })
    }
})), t.register("cpAhI", (function(t, n) {
    e(t.exports, "createInvalidAccessError", (function() {
        return r
    }));
    const r = () => new DOMException("", "InvalidAccessError")
})), t.register("dswoR", (function(n, r) {
    e(n.exports, "createIIRFilterNodeRendererFactory", (function() {
        return a
    }));
    var o = t("6N9jz"),
        i = t("gf4ZQ");
    const a = (e, t, n, r, a) => (s, c) => {
        const u = new WeakMap;
        let l = null;
        const d = async (d, f) => {
            let p = null,
                h = t(d);
            const g = (0, i.isOwnedByContext)(h, f);
            if (void 0 === f.createIIRFilter ? p = e(f, {
                    buffer: null,
                    channelCount: 2,
                    channelCountMode: "max",
                    channelInterpretation: "speakers",
                    loop: !1,
                    loopEnd: 0,
                    loopStart: 0,
                    playbackRate: 1
                }) : g || (h = f.createIIRFilter(c, s)), u.set(f, null === p ? h : p), null !== p) {
                if (null === l) {
                    if (null === n) throw new Error("Missing the native OfflineAudioContext constructor.");
                    const e = new n(d.context.destination.channelCount, d.context.length, f.sampleRate);
                    l = (async () => {
                        await r(d, e, e.destination);
                        return ((e, t, n, r) => {
                            const i = n instanceof Float64Array ? n : new Float64Array(n),
                                a = r instanceof Float64Array ? r : new Float64Array(r),
                                s = i.length,
                                c = a.length,
                                u = Math.min(s, c);
                            if (1 !== i[0]) {
                                for (let e = 0; e < s; e += 1) a[e] /= i[0];
                                for (let e = 1; e < c; e += 1) i[e] /= i[0]
                            }
                            const l = new Float32Array(32),
                                d = new Float32Array(32),
                                f = t.createBuffer(e.numberOfChannels, e.length, e.sampleRate),
                                p = e.numberOfChannels;
                            for (let t = 0; t < p; t += 1) {
                                const n = e.getChannelData(t),
                                    r = f.getChannelData(t);
                                l.fill(0), d.fill(0), (0, o.filterBuffer)(i, s, a, c, u, l, d, 0, 32, n, r)
                            }
                            return f
                        })(await a(e), f, s, c)
                    })()
                }
                const e = await l;
                return p.buffer = e, p.start(0), p
            }
            return await r(d, f, h), h
        };
        return {
            render(e, t) {
                const n = u.get(t);
                return void 0 !== n ? Promise.resolve(n) : d(e, t)
            }
        }
    }
})), t.register("6N9jz", (function(t, n) {
    e(t.exports, "filterBuffer", (function() {
        return r
    }));
    const r = (e, t, n, r, o, i, a, s, c, u, l) => {
        const d = u.length;
        let f = s;
        for (let s = 0; s < d; s += 1) {
            let d = n[0] * u[s];
            for (let t = 1; t < o; t += 1) {
                const r = f - t & c - 1;
                d += n[t] * i[r], d -= e[t] * a[r]
            }
            for (let e = o; e < r; e += 1) d += n[e] * i[f - e & c - 1];
            for (let n = o; n < t; n += 1) d -= e[n] * a[f - n & c - 1];
            i[f] = u[s], a[f] = d, f = f + 1 & c - 1, l[s] = d
        }
        return f
    }
})), t.register("dDipS", (function(n, r) {
    e(n.exports, "createIncrementCycleCounterFactory", (function() {
        return i
    }));
    var o = t("ejQOB");
    const i = (e, t, n, r, i, a) => s => (c, u) => {
        const l = e.get(c);
        if (void 0 === l) {
            if (!s && a(c)) {
                const e = r(c),
                    {
                        outputs: a
                    } = n(c);
                for (const n of a)
                    if ((0, o.isAudioNodeOutputConnection)(n)) {
                        const o = r(n[0]);
                        t(e, o, n[1], n[2])
                    } else {
                        const t = i(n[0]);
                        e.disconnect(t, n[1])
                    }
            }
            e.set(c, u)
        } else e.set(c, l + u)
    }
})), t.register("bdsPg", (function(t, n) {
    e(t.exports, "createIsAnyAudioContext", (function() {
        return r
    }));
    const r = (e, t) => n => {
        const r = e.get(n);
        return t(r) || t(n)
    }
})), t.register("5IJmC", (function(t, n) {
    e(t.exports, "createIsAnyAudioNode", (function() {
        return r
    }));
    const r = (e, t) => n => e.has(n) || t(n)
})), t.register("f91Wt", (function(t, n) {
    e(t.exports, "createIsAnyAudioParam", (function() {
        return r
    }));
    const r = (e, t) => n => e.has(n) || t(n)
})), t.register("4HRqq", (function(t, n) {
    e(t.exports, "createIsAnyOfflineAudioContext", (function() {
        return r
    }));
    const r = (e, t) => n => {
        const r = e.get(n);
        return t(r) || t(n)
    }
})), t.register("eezQE", (function(t, n) {
    e(t.exports, "createIsNativeAudioContext", (function() {
        return r
    }));
    const r = e => t => null !== e && t instanceof e
})), t.register("bd62t", (function(t, n) {
    e(t.exports, "createIsNativeAudioNode", (function() {
        return r
    }));
    const r = e => t => null !== e && "function" == typeof e.AudioNode && t instanceof e.AudioNode
})), t.register("jawYE", (function(t, n) {
    e(t.exports, "createIsNativeAudioParam", (function() {
        return r
    }));
    const r = e => t => null !== e && "function" == typeof e.AudioParam && t instanceof e.AudioParam
})), t.register("14KXU", (function(t, n) {
    e(t.exports, "createIsNativeContext", (function() {
        return r
    }));
    const r = (e, t) => n => e(n) || t(n)
})), t.register("4OxjN", (function(t, n) {
    e(t.exports, "createIsNativeOfflineAudioContext", (function() {
        return r
    }));
    const r = e => t => null !== e && t instanceof e
})), t.register("cWdRO", (function(t, n) {
    e(t.exports, "createIsSecureContext", (function() {
        return r
    }));
    const r = e => null !== e && e.isSecureContext
})), t.register("4gFmz", (function(t, n) {
    e(t.exports, "createIsSupportedPromise", (function() {
        return r
    }));
    const r = async (e, t, n, r, o, i, a, s, c, u, l, d, f, p, h, g) => {
        if (e(t, t) && e(n, n) && e(o, o) && e(i, i) && e(s, s) && e(c, c) && e(u, u) && e(l, l) && e(d, d) && e(f, f) && e(p, p)) {
            return (await Promise.all([e(r, r), e(a, a), e(h, h), e(g, g)])).every((e => e))
        }
        return !1
    }
})), t.register("fFKyu", (function(t, n) {
    e(t.exports, "createMediaElementAudioSourceNodeConstructor", (function() {
        return r
    }));
    const r = (e, t, n, r) => class extends e {
        get mediaElement() {
            return this._nativeMediaElementAudioSourceNode.mediaElement
        }
        constructor(e, o) {
            const i = n(e),
                a = t(i, o);
            if (r(i)) throw TypeError();
            super(e, !0, a, null), this._nativeMediaElementAudioSourceNode = a
        }
    }
})), t.register("5i7Gk", (function(t, n) {
    e(t.exports, "createMediaStreamAudioDestinationNodeConstructor", (function() {
        return o
    }));
    const r = {
            channelCount: 2,
            channelCountMode: "explicit",
            channelInterpretation: "speakers"
        },
        o = (e, t, n, o) => class extends e {
            get stream() {
                return this._nativeMediaStreamAudioDestinationNode.stream
            }
            constructor(e, i) {
                const a = n(e);
                if (o(a)) throw new TypeError;
                const s = {
                        ...r,
                        ...i
                    },
                    c = t(a, s);
                super(e, !1, c, null), this._nativeMediaStreamAudioDestinationNode = c
            }
        }
})), t.register("2PQ9t", (function(t, n) {
    e(t.exports, "createMediaStreamAudioSourceNodeConstructor", (function() {
        return r
    }));
    const r = (e, t, n, r) => class extends e {
        get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream
        }
        constructor(e, o) {
            const i = n(e),
                a = t(i, o);
            if (r(i)) throw new TypeError;
            super(e, !0, a, null), this._nativeMediaStreamAudioSourceNode = a
        }
    }
})), t.register("02b73", (function(t, n) {
    e(t.exports, "createMediaStreamTrackAudioSourceNodeConstructor", (function() {
        return r
    }));
    const r = (e, t, n) => class extends e {
        constructor(e, r) {
            const o = n(e);
            super(e, !0, t(o, r), null)
        }
    }
})), t.register("ilx6E", (function(n, r) {
    e(n.exports, "createMinimalAudioContextConstructor", (function() {
        return a
    }));
    var o = t("5KQXf"),
        i = t("a2BIY");
    const a = (e, t, n, r, a) => class extends r {
        get baseLatency() {
            return this._baseLatency
        }
        get state() {
            return null !== this._state ? this._state : this._nativeAudioContext.state
        }
        close() {
            return "closed" === this.state ? this._nativeAudioContext.close().then((() => {
                throw e()
            })) : ("suspended" === this._state && (this._state = null), this._nativeAudioContext.close().then((() => {
                null !== this._nativeGainNode && null !== this._nativeOscillatorNode && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), (0, o.deactivateAudioGraph)(this)
            })))
        }
        resume() {
            return "suspended" === this._state ? new Promise(((e, t) => {
                const n = () => {
                    this._nativeAudioContext.removeEventListener("statechange", n), "running" === this._nativeAudioContext.state ? e() : this.resume().then(e, t)
                };
                this._nativeAudioContext.addEventListener("statechange", n)
            })) : this._nativeAudioContext.resume().catch((t => {
                if (void 0 === t || 15 === t.code) throw e();
                throw t
            }))
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch((t => {
                if (void 0 === t) throw e();
                throw t
            }))
        }
        constructor(e = {}) {
            if (null === a) throw new Error("Missing the native AudioContext constructor.");
            let r;
            try {
                r = new a(e)
            } catch (e) {
                if (12 === e.code && "sampleRate is not in range" === e.message) throw t();
                throw e
            }
            if (null === r) throw n();
            if (!(0, i.isValidLatencyHint)(e.latencyHint)) throw new TypeError(`The provided value '${e.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (void 0 !== e.sampleRate && r.sampleRate !== e.sampleRate) throw t();
            super(r, 2);
            const {
                latencyHint: o
            } = e, {
                sampleRate: s
            } = r;
            if (this._baseLatency = "number" == typeof r.baseLatency ? r.baseLatency : "balanced" === o ? 512 / s : "interactive" === o || void 0 === o ? 256 / s : "playback" === o ? 1024 / s : 128 * Math.max(2, Math.min(128, Math.round(o * s / 128))) / s, this._nativeAudioContext = r, "webkitAudioContext" === a.name ? (this._nativeGainNode = r.createGain(), this._nativeOscillatorNode = r.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(r.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, "running" === r.state) {
                this._state = "suspended";
                const e = () => {
                    "suspended" === this._state && (this._state = null), r.removeEventListener("statechange", e)
                };
                r.addEventListener("statechange", e)
            }
        }
    }
})), t.register("8LiRu", (function(n, r) {
    e(n.exports, "createMinimalBaseAudioContextConstructor", (function() {
        return i
    }));
    var o = t("h3W3B");
    const i = (e, t, n, r, i, a) => class extends n {
        get currentTime() {
            return this._nativeContext.currentTime
        }
        get destination() {
            return this._destination
        }
        get listener() {
            return this._listener
        }
        get onstatechange() {
            return this._onstatechange
        }
        set onstatechange(e) {
            const t = "function" == typeof e ? a(this, e) : null;
            this._nativeContext.onstatechange = t;
            const n = this._nativeContext.onstatechange;
            this._onstatechange = null !== n && n === t ? e : n
        }
        get sampleRate() {
            return this._nativeContext.sampleRate
        }
        get state() {
            return this._nativeContext.state
        }
        constructor(n, a) {
            super(n), this._nativeContext = n, o.CONTEXT_STORE.set(this, n), r(n) && i.set(n, new Set), this._destination = new e(this, a), this._listener = t(this, n), this._onstatechange = null
        }
    }
})), t.register("2qfFQ", (function(n, r) {
    e(n.exports, "createMinimalOfflineAudioContextConstructor", (function() {
        return s
    }));
    var o = t("5KQXf"),
        i = t("46dAu");
    const a = {
            numberOfChannels: 1
        },
        s = (e, t, n, r, s) => class extends r {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state
            }
            startRendering() {
                return "running" === this._state ? Promise.reject(t()) : (this._state = "running", s(this.destination, this._nativeOfflineAudioContext).finally((() => {
                    this._state = null, (0, o.deactivateAudioGraph)(this)
                })))
            }
            _waitForThePromiseToSettle(e) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(e) : setTimeout((() => this._waitForThePromiseToSettle(e)))
            }
            constructor(t) {
                const {
                    length: r,
                    numberOfChannels: o,
                    sampleRate: s
                } = {
                    ...a,
                    ...t
                }, c = n(o, r, s);
                e(i.testPromiseSupport, (() => (0, i.testPromiseSupport)(c))) || c.addEventListener("statechange", (() => {
                    let e = 0;
                    const t = n => {
                        "running" === this._state && (e > 0 ? (c.removeEventListener("statechange", t), n.stopImmediatePropagation(), this._waitForThePromiseToSettle(n)) : e += 1)
                    };
                    return t
                })()), super(c, o), this._length = r, this._nativeOfflineAudioContext = c, this._state = null
            }
        }
})), t.register("46dAu", (function(t, n) {
    e(t.exports, "testPromiseSupport", (function() {
        return r
    }));
    const r = e => {
        const t = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
        try {
            const n = e.decodeAudioData(t.buffer, (() => {}));
            return void 0 !== n && (n.catch((() => {})), !0)
        } catch {}
        return !1
    }
})), t.register("4faM7", (function(t, n) {
    e(t.exports, "createMonitorConnections", (function() {
        return r
    }));
    const r = (e, t) => (n, r, o) => {
        const i = new Set;
        var a, s;
        return n.connect = (a = n.connect, (o, s = 0, c = 0) => {
            const u = 0 === i.size;
            if (t(o)) return a.call(n, o, s, c), e(i, [o, s, c], (e => e[0] === o && e[1] === s && e[2] === c), !0), u && r(), o;
            a.call(n, o, s), e(i, [o, s], (e => e[0] === o && e[1] === s), !0), u && r()
        }), n.disconnect = (s = n.disconnect, (e, r, a) => {
            const c = i.size > 0;
            if (void 0 === e) s.apply(n), i.clear();
            else if ("number" == typeof e) {
                s.call(n, e);
                for (const t of i) t[1] === e && i.delete(t)
            } else {
                t(e) ? s.call(n, e, r, a) : s.call(n, e, r);
                for (const t of i) t[0] !== e || void 0 !== r && t[1] !== r || void 0 !== a && t[2] !== a || i.delete(t)
            }
            const u = 0 === i.size;
            c && u && o()
        }), n
    }
})), t.register("eX5IJ", (function(n, r) {
    e(n.exports, "createNativeAnalyserNodeFactory", (function() {
        return c
    }));
    var o = t("7qFAC"),
        i = t("au1vy"),
        a = t("jqELz"),
        s = t("fzikY");
    const c = (e, t) => (n, r) => {
        const c = n.createAnalyser();
        if ((0, i.assignNativeAudioNodeOptions)(c, r), !(r.maxDecibels > r.minDecibels)) throw t();
        return (0, o.assignNativeAudioNodeOption)(c, r, "fftSize"), (0, o.assignNativeAudioNodeOption)(c, r, "maxDecibels"), (0, o.assignNativeAudioNodeOption)(c, r, "minDecibels"), (0, o.assignNativeAudioNodeOption)(c, r, "smoothingTimeConstant"), e(a.testAnalyserNodeGetFloatTimeDomainDataMethodSupport, (() => (0, a.testAnalyserNodeGetFloatTimeDomainDataMethodSupport)(c))) || (0, s.wrapAnalyserNodeGetFloatTimeDomainDataMethod)(c), c
    }
})), t.register("7qFAC", (function(t, n) {
    e(t.exports, "assignNativeAudioNodeOption", (function() {
        return r
    }));
    const r = (e, t, n) => {
        const r = t[n];
        void 0 !== r && r !== e[n] && (e[n] = r)
    }
})), t.register("au1vy", (function(n, r) {
    e(n.exports, "assignNativeAudioNodeOptions", (function() {
        return i
    }));
    var o = t("7qFAC");
    const i = (e, t) => {
        (0, o.assignNativeAudioNodeOption)(e, t, "channelCount"), (0, o.assignNativeAudioNodeOption)(e, t, "channelCountMode"), (0, o.assignNativeAudioNodeOption)(e, t, "channelInterpretation")
    }
})), t.register("jqELz", (function(t, n) {
    e(t.exports, "testAnalyserNodeGetFloatTimeDomainDataMethodSupport", (function() {
        return r
    }));
    const r = e => "function" == typeof e.getFloatTimeDomainData
})), t.register("fzikY", (function(t, n) {
    e(t.exports, "wrapAnalyserNodeGetFloatTimeDomainDataMethod", (function() {
        return r
    }));
    const r = e => {
        e.getFloatTimeDomainData = t => {
            const n = new Uint8Array(t.length);
            e.getByteTimeDomainData(n);
            const r = Math.max(n.length, e.fftSize);
            for (let e = 0; e < r; e += 1) t[e] = .0078125 * (n[e] - 128);
            return t
        }
    }
})), t.register("hXOMq", (function(t, n) {
    e(t.exports, "createNativeAudioBufferConstructor", (function() {
        return r
    }));
    const r = e => null === e ? null : e.hasOwnProperty("AudioBuffer") ? e.AudioBuffer : null
})), t.register("d99SO", (function(n, r) {
    e(n.exports, "createNativeAudioBufferSourceNodeFactory", (function() {
        return l
    }));
    var o = t("8ap0g"),
        i = t("7qFAC"),
        a = t("au1vy"),
        s = t("luuvW"),
        c = t("cNN21"),
        u = t("6BSVx");
    const l = (e, t, n, r, l, d, f, p, h, g, v) => (m, y) => {
        const x = m.createBufferSource();
        return (0, a.assignNativeAudioNodeOptions)(x, y), (0, o.assignNativeAudioNodeAudioParamValue)(x, y, "playbackRate"), (0, i.assignNativeAudioNodeOption)(x, y, "buffer"), (0, i.assignNativeAudioNodeOption)(x, y, "loop"), (0, i.assignNativeAudioNodeOption)(x, y, "loopEnd"), (0, i.assignNativeAudioNodeOption)(x, y, "loopStart"), t(n, (() => n(m))) || (0, s.wrapAudioBufferSourceNodeStartMethodConsecutiveCalls)(x), t(r, (() => r(m))) || h(x), t(l, (() => l(m))) || g(x, m), t(d, (() => d(m))) || (0, c.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(x), t(f, (() => f(m))) || v(x, m), t(p, (() => p(m))) || (0, u.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(x), e(m, x), x
    }
})), t.register("8ap0g", (function(t, n) {
    e(t.exports, "assignNativeAudioNodeAudioParamValue", (function() {
        return r
    }));
    const r = (e, t, n) => {
        const r = t[n];
        void 0 !== r && r !== e[n].value && (e[n].value = r)
    }
})), t.register("luuvW", (function(n, r) {
    e(n.exports, "wrapAudioBufferSourceNodeStartMethodConsecutiveCalls", (function() {
        return i
    }));
    var o = t("7zlTw");
    const i = e => {
        e.start = (t => {
            let n = !1;
            return (r = 0, i = 0, a) => {
                if (n) throw (0, o.createInvalidStateError)();
                t.call(e, r, i, a), n = !0
            }
        })(e.start)
    }
})), t.register("cNN21", (function(t, n) {
    e(t.exports, "wrapAudioScheduledSourceNodeStartMethodNegativeParameters", (function() {
        return r
    }));
    const r = e => {
        var t;
        e.start = (t = e.start, (n = 0, r = 0, o) => {
            if ("number" == typeof o && o < 0 || r < 0 || n < 0) throw new RangeError("The parameters can't be negative.");
            t.call(e, n, r, o)
        })
    }
})), t.register("6BSVx", (function(t, n) {
    e(t.exports, "wrapAudioScheduledSourceNodeStopMethodNegativeParameters", (function() {
        return r
    }));
    const r = e => {
        var t;
        e.stop = (t = e.stop, (n = 0) => {
            if (n < 0) throw new RangeError("The parameter can't be negative.");
            t.call(e, n)
        })
    }
})), t.register("8yoTn", (function(t, n) {
    e(t.exports, "createNativeAudioContextConstructor", (function() {
        return r
    }));
    const r = e => null === e ? null : e.hasOwnProperty("AudioContext") ? e.AudioContext : e.hasOwnProperty("webkitAudioContext") ? e.webkitAudioContext : null
})), t.register("1f4tp", (function(t, n) {
    e(t.exports, "createNativeAudioDestinationNodeFactory", (function() {
        return r
    }));
    const r = (e, t) => (n, r, o) => {
        const i = n.destination;
        if (i.channelCount !== r) try {
            i.channelCount = r
        } catch {}
        o && "explicit" !== i.channelCountMode && (i.channelCountMode = "explicit"), 0 === i.maxChannelCount && Object.defineProperty(i, "maxChannelCount", {
            value: r
        });
        const a = e(n, {
            channelCount: r,
            channelCountMode: i.channelCountMode,
            channelInterpretation: i.channelInterpretation,
            gain: 1
        });
        return t(a, "channelCount", (e => () => e.call(a)), (e => t => {
            e.call(a, t);
            try {
                i.channelCount = t
            } catch (e) {
                if (t > i.maxChannelCount) throw e
            }
        })), t(a, "channelCountMode", (e => () => e.call(a)), (e => t => {
            e.call(a, t), i.channelCountMode = t
        })), t(a, "channelInterpretation", (e => () => e.call(a)), (e => t => {
            e.call(a, t), i.channelInterpretation = t
        })), Object.defineProperty(a, "maxChannelCount", {
            get: () => i.maxChannelCount
        }), a.connect(i), a
    }
})), t.register("6okQU", (function(t, n) {
    e(t.exports, "createNativeAudioWorkletNodeConstructor", (function() {
        return r
    }));
    const r = e => null === e ? null : e.hasOwnProperty("AudioWorkletNode") ? e.AudioWorkletNode : null
})), t.register("648ST", (function(n, r) {
    e(n.exports, "createNativeAudioWorkletNodeFactory", (function() {
        return i
    }));
    var o = t("ew294");
    const i = (e, t, n, r, i) => (a, s, c, u, l, d) => {
        if (null !== c) try {
            const t = new c(a, u, d),
                r = new Map;
            let o = null;
            if (Object.defineProperties(t, {
                    channelCount: {
                        get: () => d.channelCount,
                        set: () => {
                            throw e()
                        }
                    },
                    channelCountMode: {
                        get: () => "explicit",
                        set: () => {
                            throw e()
                        }
                    },
                    onprocessorerror: {
                        get: () => o,
                        set: e => {
                            "function" == typeof o && t.removeEventListener("processorerror", o), o = "function" == typeof e ? e : null, "function" == typeof o && t.addEventListener("processorerror", o)
                        }
                    }
                }), t.addEventListener = (p = t.addEventListener, (...e) => {
                    if ("processorerror" === e[0]) {
                        const t = "function" == typeof e[1] ? e[1] : "object" == typeof e[1] && null !== e[1] && "function" == typeof e[1].handleEvent ? e[1].handleEvent : null;
                        if (null !== t) {
                            const n = r.get(e[1]);
                            void 0 !== n ? e[1] = n : (e[1] = n => {
                                "error" === n.type ? (Object.defineProperties(n, {
                                    type: {
                                        value: "processorerror"
                                    }
                                }), t(n)) : t(new ErrorEvent(e[0], {
                                    ...n
                                }))
                            }, r.set(t, e[1]))
                        }
                    }
                    return p.call(t, "error", e[1], e[2]), p.call(t, ...e)
                }), t.removeEventListener = (f = t.removeEventListener, (...e) => {
                    if ("processorerror" === e[0]) {
                        const t = r.get(e[1]);
                        void 0 !== t && (r.delete(e[1]), e[1] = t)
                    }
                    return f.call(t, "error", e[1], e[2]), f.call(t, e[0], e[1], e[2])
                }), 0 !== d.numberOfOutputs) {
                const e = n(a, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                t.connect(e).connect(a.destination);
                return i(t, (() => e.disconnect()), (() => e.connect(a.destination)))
            }
            return t
        } catch (e) {
            if (11 === e.code) throw r();
            throw e
        }
        var f, p;
        if (void 0 === l) throw r();
        return (0, o.testClonabilityOfAudioWorkletNodeOptions)(d), t(a, s, l, d)
    }
})), t.register("ew294", (function(t, n) {
    e(t.exports, "testClonabilityOfAudioWorkletNodeOptions", (function() {
        return r
    }));
    const r = e => {
        const {
            port1: t
        } = new MessageChannel;
        try {
            t.postMessage(e)
        } finally {
            t.close()
        }
    }
})), t.register("3VTJW", (function(n, r) {
    e(n.exports, "createNativeAudioWorkletNodeFakerFactory", (function() {
        return d
    }));
    var o = t("2HEdW"),
        i = t("gMFDB"),
        a = t("7Pd5N"),
        s = t("jLXEe"),
        c = t("5C7Wa"),
        u = t("ifJVS"),
        l = t("fkAlu");
    const d = (e, t, n, r, d, f, p, h, g, v, m, y, x) => (C, N, A, w) => {
        if (0 === w.numberOfInputs && 0 === w.numberOfOutputs) throw g();
        const b = Array.isArray(w.outputChannelCount) ? w.outputChannelCount : Array.from(w.outputChannelCount);
        if (b.some((e => e < 1))) throw g();
        if (b.length !== w.numberOfOutputs) throw t();
        if ("explicit" !== w.channelCountMode) throw g();
        const S = w.channelCount * w.numberOfInputs,
            E = b.reduce(((e, t) => e + t), 0),
            O = void 0 === A.parameterDescriptors ? 0 : A.parameterDescriptors.length;
        if (S + O > 6 || E > 6) throw g();
        const _ = new MessageChannel,
            M = [],
            T = [];
        for (let e = 0; e < w.numberOfInputs; e += 1) M.push(p(C, {
            channelCount: w.channelCount,
            channelCountMode: w.channelCountMode,
            channelInterpretation: w.channelInterpretation,
            gain: 1
        })), T.push(d(C, {
            channelCount: w.channelCount,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: w.channelCount
        }));
        const I = [];
        if (void 0 !== A.parameterDescriptors)
            for (const {
                    defaultValue: e,
                    maxValue: t,
                    minValue: n,
                    name: r
                }
                of A.parameterDescriptors) {
                const i = f(C, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    offset: void 0 !== w.parameterData[r] ? w.parameterData[r] : void 0 === e ? 0 : e
                });
                Object.defineProperties(i.offset, {
                    defaultValue: {
                        get: () => void 0 === e ? 0 : e
                    },
                    maxValue: {
                        get: () => void 0 === t ? o.MOST_POSITIVE_SINGLE_FLOAT : t
                    },
                    minValue: {
                        get: () => void 0 === n ? o.MOST_NEGATIVE_SINGLE_FLOAT : n
                    }
                }), I.push(i)
            }
        const k = r(C, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: Math.max(1, S + O)
            }),
            P = (0, i.computeBufferSize)(N, C.sampleRate),
            R = h(C, P, S + O, Math.max(1, E)),
            F = d(C, {
                channelCount: Math.max(1, E),
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: Math.max(1, E)
            }),
            j = [];
        for (let e = 0; e < w.numberOfOutputs; e += 1) j.push(r(C, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: b[e]
        }));
        for (let e = 0; e < w.numberOfInputs; e += 1) {
            M[e].connect(T[e]);
            for (let t = 0; t < w.channelCount; t += 1) T[e].connect(k, t, e * w.channelCount + t)
        }
        const B = new(0, l.ReadOnlyMap)(void 0 === A.parameterDescriptors ? [] : A.parameterDescriptors.map((({
            name: e
        }, t) => {
            const n = I[t];
            return n.connect(k, 0, S + t), n.start(0), [e, n.offset]
        })));
        k.connect(R);
        let L = w.channelInterpretation,
            D = null;
        const U = 0 === w.numberOfOutputs ? [R] : j,
            W = {
                get bufferSize() {
                    return P
                },
                get channelCount() {
                    return w.channelCount
                },
                set channelCount(e) {
                    throw n()
                },
                get channelCountMode() {
                    return w.channelCountMode
                },
                set channelCountMode(e) {
                    throw n()
                },
                get channelInterpretation() {
                    return L
                },
                set channelInterpretation(e) {
                    for (const t of M) t.channelInterpretation = e;
                    L = e
                },
                get context() {
                    return R.context
                },
                get inputs() {
                    return M
                },
                get numberOfInputs() {
                    return w.numberOfInputs
                },
                get numberOfOutputs() {
                    return w.numberOfOutputs
                },
                get onprocessorerror() {
                    return D
                },
                set onprocessorerror(e) {
                    "function" == typeof D && W.removeEventListener("processorerror", D), D = "function" == typeof e ? e : null, "function" == typeof D && W.addEventListener("processorerror", D)
                },
                get parameters() {
                    return B
                },
                get port() {
                    return _.port2
                },
                addEventListener: (...e) => R.addEventListener(e[0], e[1], e[2]),
                connect: e.bind(null, U),
                disconnect: v.bind(null, U),
                dispatchEvent: (...e) => R.dispatchEvent(e[0]),
                removeEventListener: (...e) => R.removeEventListener(e[0], e[1], e[2])
            },
            V = new Map;
        var q, G;
        _.port1.addEventListener = (q = _.port1.addEventListener, (...e) => {
            if ("message" === e[0]) {
                const t = "function" == typeof e[1] ? e[1] : "object" == typeof e[1] && null !== e[1] && "function" == typeof e[1].handleEvent ? e[1].handleEvent : null;
                if (null !== t) {
                    const n = V.get(e[1]);
                    void 0 !== n ? e[1] = n : (e[1] = e => {
                        m(C.currentTime, C.sampleRate, (() => t(e)))
                    }, V.set(t, e[1]))
                }
            }
            return q.call(_.port1, e[0], e[1], e[2])
        }), _.port1.removeEventListener = (G = _.port1.removeEventListener, (...e) => {
            if ("message" === e[0]) {
                const t = V.get(e[1]);
                void 0 !== t && (V.delete(e[1]), e[1] = t)
            }
            return G.call(_.port1, e[0], e[1], e[2])
        });
        let z = null;
        Object.defineProperty(_.port1, "onmessage", {
            get: () => z,
            set: e => {
                "function" == typeof z && _.port1.removeEventListener("message", z), z = "function" == typeof e ? e : null, "function" == typeof z && (_.port1.addEventListener("message", z), _.port1.start())
            }
        }), A.prototype.port = _.port1;
        let Q = null;
        (0, c.createAudioWorkletProcessor)(C, W, A, w).then((e => Q = e));
        const H = (0, u.createNestedArrays)(w.numberOfInputs, w.channelCount),
            Y = (0, u.createNestedArrays)(w.numberOfOutputs, b),
            Z = void 0 === A.parameterDescriptors ? [] : A.parameterDescriptors.reduce(((e, {
                name: t
            }) => ({
                ...e,
                [t]: new Float32Array(128)
            })), {});
        let X = !0;
        const K = () => {
                w.numberOfOutputs > 0 && R.disconnect(F);
                for (let e = 0, t = 0; e < w.numberOfOutputs; e += 1) {
                    const n = j[e];
                    for (let r = 0; r < b[e]; r += 1) F.disconnect(n, t + r, r);
                    t += b[e]
                }
            },
            J = new Map;
        R.onaudioprocess = ({
            inputBuffer: e,
            outputBuffer: t
        }) => {
            if (null !== Q) {
                const n = y(W);
                for (let r = 0; r < P; r += 128) {
                    for (let t = 0; t < w.numberOfInputs; t += 1)
                        for (let n = 0; n < w.channelCount; n += 1)(0, a.copyFromChannel)(e, H[t], n, n, r);
                    void 0 !== A.parameterDescriptors && A.parameterDescriptors.forEach((({
                        name: t
                    }, n) => {
                        (0, a.copyFromChannel)(e, Z, t, S + n, r)
                    }));
                    for (let e = 0; e < w.numberOfInputs; e += 1)
                        for (let t = 0; t < b[e]; t += 1) 0 === Y[e][t].byteLength && (Y[e][t] = new Float32Array(128));
                    try {
                        const e = H.map(((e, t) => {
                                if (n[t].size > 0) return J.set(t, P / 128), e;
                                const r = J.get(t);
                                return void 0 === r ? [] : (e.every((e => e.every((e => 0 === e)))) && (1 === r ? J.delete(t) : J.set(t, r - 1)), e)
                            })),
                            o = m(C.currentTime + r / C.sampleRate, C.sampleRate, (() => Q.process(e, Y, Z)));
                        X = o;
                        for (let e = 0, n = 0; e < w.numberOfOutputs; e += 1) {
                            for (let o = 0; o < b[e]; o += 1)(0, s.copyToChannel)(t, Y[e], o, n + o, r);
                            n += b[e]
                        }
                    } catch (e) {
                        X = !1, W.dispatchEvent(new ErrorEvent("processorerror", {
                            colno: e.colno,
                            filename: e.filename,
                            lineno: e.lineno,
                            message: e.message
                        }))
                    }
                    if (!X) {
                        for (let e = 0; e < w.numberOfInputs; e += 1) {
                            M[e].disconnect(T[e]);
                            for (let t = 0; t < w.channelCount; t += 1) T[r].disconnect(k, t, e * w.channelCount + t)
                        }
                        if (void 0 !== A.parameterDescriptors) {
                            const e = A.parameterDescriptors.length;
                            for (let t = 0; t < e; t += 1) {
                                const e = I[t];
                                e.disconnect(k, 0, S + t), e.stop()
                            }
                        }
                        k.disconnect(R), R.onaudioprocess = null, $ ? K() : ne();
                        break
                    }
                }
            }
        };
        let $ = !1;
        const ee = p(C, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0
            }),
            te = () => R.connect(ee).connect(C.destination),
            ne = () => {
                R.disconnect(ee), ee.disconnect()
            };
        return te(), x(W, (() => {
            if (X) {
                ne(), w.numberOfOutputs > 0 && R.connect(F);
                for (let e = 0, t = 0; e < w.numberOfOutputs; e += 1) {
                    const n = j[e];
                    for (let r = 0; r < b[e]; r += 1) F.connect(n, t + r, r);
                    t += b[e]
                }
            }
            $ = !0
        }), (() => {
            X && (te(), K()), $ = !1
        }))
    }
})), t.register("gMFDB", (function(t, n) {
    e(t.exports, "computeBufferSize", (function() {
        return r
    }));
    const r = (e, t) => null === e ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(e * t)))))
})), t.register("5C7Wa", (function(n, r) {
    e(n.exports, "createAudioWorkletProcessor", (function() {
        return a
    }));
    var o = t("h3W3B"),
        i = t("dHNyc");
    const a = (e, t, n, r) => {
        let a = o.NODE_TO_PROCESSOR_MAPS.get(e);
        void 0 === a && (a = new WeakMap, o.NODE_TO_PROCESSOR_MAPS.set(e, a));
        const s = (0, i.createAudioWorkletProcessorPromise)(n, r);
        return a.set(t, s), s
    }
})), t.register("dHNyc", (function(n, r) {
    e(n.exports, "createAudioWorkletProcessorPromise", (function() {
        return i
    }));
    var o = t("kGsSz");
    const i = async (e, t) => new e(await (0, o.cloneAudioWorkletNodeOptions)(t))
})), t.register("kGsSz", (function(t, n) {
    e(t.exports, "cloneAudioWorkletNodeOptions", (function() {
        return r
    }));
    const r = e => new Promise(((t, n) => {
        const {
            port1: r,
            port2: o
        } = new MessageChannel;
        r.onmessage = ({
            data: e
        }) => {
            r.close(), o.close(), t(e)
        }, r.onmessageerror = ({
            data: e
        }) => {
            r.close(), o.close(), n(e)
        }, o.postMessage(e)
    }))
})), t.register("7v0s6", (function(n, r) {
    e(n.exports, "createNativeBiquadFilterNode", (function() {
        return s
    }));
    var o = t("8ap0g"),
        i = t("7qFAC"),
        a = t("au1vy");
    const s = (e, t) => {
        const n = e.createBiquadFilter();
        return (0, a.assignNativeAudioNodeOptions)(n, t), (0, o.assignNativeAudioNodeAudioParamValue)(n, t, "Q"), (0, o.assignNativeAudioNodeAudioParamValue)(n, t, "detune"), (0, o.assignNativeAudioNodeAudioParamValue)(n, t, "frequency"), (0, o.assignNativeAudioNodeAudioParamValue)(n, t, "gain"), (0, i.assignNativeAudioNodeOption)(n, t, "type"), n
    }
})), t.register("cjjHT", (function(n, r) {
    e(n.exports, "createNativeChannelMergerNodeFactory", (function() {
        return i
    }));
    var o = t("au1vy");
    const i = (e, t) => (n, r) => {
        const i = n.createChannelMerger(r.numberOfInputs);
        return null !== e && "webkitAudioContext" === e.name && t(n, i), (0, o.assignNativeAudioNodeOptions)(i, r), i
    }
})), t.register("iaD45", (function(n, r) {
    e(n.exports, "createNativeChannelSplitterNode", (function() {
        return a
    }));
    var o = t("au1vy"),
        i = t("eIs7Q");
    const a = (e, t) => {
        const n = e.createChannelSplitter(t.numberOfOutputs);
        return (0, o.assignNativeAudioNodeOptions)(n, t), (0, i.wrapChannelSplitterNode)(n), n
    }
})), t.register("eIs7Q", (function(n, r) {
    e(n.exports, "wrapChannelSplitterNode", (function() {
        return i
    }));
    var o = t("7zlTw");
    const i = e => {
        const t = e.numberOfOutputs;
        Object.defineProperty(e, "channelCount", {
            get: () => t,
            set: e => {
                if (e !== t) throw (0, o.createInvalidStateError)()
            }
        }), Object.defineProperty(e, "channelCountMode", {
            get: () => "explicit",
            set: e => {
                if ("explicit" !== e) throw (0, o.createInvalidStateError)()
            }
        }), Object.defineProperty(e, "channelInterpretation", {
            get: () => "discrete",
            set: e => {
                if ("discrete" !== e) throw (0, o.createInvalidStateError)()
            }
        })
    }
})), t.register("2M581", (function(n, r) {
    e(n.exports, "createNativeConstantSourceNodeFactory", (function() {
        return c
    }));
    var o = t("8ap0g"),
        i = t("au1vy"),
        a = t("cNN21"),
        s = t("6BSVx");
    const c = (e, t, n, r, c) => (u, l) => {
        if (void 0 === u.createConstantSource) return n(u, l);
        const d = u.createConstantSource();
        return (0, i.assignNativeAudioNodeOptions)(d, l), (0, o.assignNativeAudioNodeAudioParamValue)(d, l, "offset"), t(r, (() => r(u))) || (0, a.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(d), t(c, (() => c(u))) || (0, s.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(d), e(u, d), d
    }
})), t.register("c547j", (function(n, r) {
    e(n.exports, "createNativeConstantSourceNodeFakerFactory", (function() {
        return i
    }));
    var o = t("dY4pa");
    const i = (e, t, n, r) => (i, {
        offset: a,
        ...s
    }) => {
        const c = i.createBuffer(1, 2, 44100),
            u = t(i, {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            l = n(i, {
                ...s,
                gain: a
            }),
            d = c.getChannelData(0);
        d[0] = 1, d[1] = 1, u.buffer = c, u.loop = !0;
        const f = {
            get bufferSize() {},
            get channelCount() {
                return l.channelCount
            },
            set channelCount(e) {
                l.channelCount = e
            },
            get channelCountMode() {
                return l.channelCountMode
            },
            set channelCountMode(e) {
                l.channelCountMode = e
            },
            get channelInterpretation() {
                return l.channelInterpretation
            },
            set channelInterpretation(e) {
                l.channelInterpretation = e
            },
            get context() {
                return l.context
            },
            get inputs() {
                return []
            },
            get numberOfInputs() {
                return u.numberOfInputs
            },
            get numberOfOutputs() {
                return l.numberOfOutputs
            },
            get offset() {
                return l.gain
            },
            get onended() {
                return u.onended
            },
            set onended(e) {
                u.onended = e
            },
            addEventListener: (...e) => u.addEventListener(e[0], e[1], e[2]),
            dispatchEvent: (...e) => u.dispatchEvent(e[0]),
            removeEventListener: (...e) => u.removeEventListener(e[0], e[1], e[2]),
            start(e = 0) {
                u.start.call(u, e)
            },
            stop(e = 0) {
                u.stop.call(u, e)
            }
        };
        return e(i, u), r((0, o.interceptConnections)(f, l), (() => u.connect(l)), (() => u.disconnect(l)))
    }
})), t.register("dY4pa", (function(t, n) {
    e(t.exports, "interceptConnections", (function() {
        return r
    }));
    const r = (e, t) => (e.connect = t.connect.bind(t), e.disconnect = t.disconnect.bind(t), e)
})), t.register("9LACZ", (function(n, r) {
    e(n.exports, "createNativeConvolverNodeFactory", (function() {
        return a
    }));
    var o = t("7qFAC"),
        i = t("au1vy");
    const a = (e, t) => (n, r) => {
        const a = n.createConvolver();
        if ((0, i.assignNativeAudioNodeOptions)(a, r), r.disableNormalization === a.normalize && (a.normalize = !r.disableNormalization), (0, o.assignNativeAudioNodeOption)(a, r, "buffer"), r.channelCount > 2) throw e();
        if (t(a, "channelCount", (e => () => e.call(a)), (t => n => {
                if (n > 2) throw e();
                return t.call(a, n)
            })), "max" === r.channelCountMode) throw e();
        return t(a, "channelCountMode", (e => () => e.call(a)), (t => n => {
            if ("max" === n) throw e();
            return t.call(a, n)
        })), a
    }
})), t.register("jol1z", (function(n, r) {
    e(n.exports, "createNativeDelayNode", (function() {
        return a
    }));
    var o = t("8ap0g"),
        i = t("au1vy");
    const a = (e, t) => {
        const n = e.createDelay(t.maxDelayTime);
        return (0, i.assignNativeAudioNodeOptions)(n, t), (0, o.assignNativeAudioNodeAudioParamValue)(n, t, "delayTime"), n
    }
})), t.register("likde", (function(n, r) {
    e(n.exports, "createNativeDynamicsCompressorNodeFactory", (function() {
        return a
    }));
    var o = t("8ap0g"),
        i = t("au1vy");
    const a = e => (t, n) => {
        const r = t.createDynamicsCompressor();
        if ((0, i.assignNativeAudioNodeOptions)(r, n), n.channelCount > 2) throw e();
        if ("max" === n.channelCountMode) throw e();
        return (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "attack"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "knee"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "ratio"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "release"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "threshold"), r
    }
})), t.register("3jzJs", (function(n, r) {
    e(n.exports, "createNativeGainNode", (function() {
        return a
    }));
    var o = t("8ap0g"),
        i = t("au1vy");
    const a = (e, t) => {
        const n = e.createGain();
        return (0, i.assignNativeAudioNodeOptions)(n, t), (0, o.assignNativeAudioNodeAudioParamValue)(n, t, "gain"), n
    }
})), t.register("cFhuS", (function(n, r) {
    e(n.exports, "createNativeIIRFilterNodeFactory", (function() {
        return i
    }));
    var o = t("au1vy");
    const i = e => (t, n, r) => {
        if (void 0 === t.createIIRFilter) return e(t, n, r);
        const i = t.createIIRFilter(r.feedforward, r.feedback);
        return (0, o.assignNativeAudioNodeOptions)(i, r), i
    }
})), t.register("9fDPx", (function(n, r) {
    e(n.exports, "createNativeIIRFilterNodeFakerFactory", (function() {
        return u
    }));
    var o = t("gMFDB"),
        i = t("6N9jz"),
        a = t("dY4pa");

    function s(e, t) {
        const n = t[0] * t[0] + t[1] * t[1];
        return [(e[0] * t[0] + e[1] * t[1]) / n, (e[1] * t[0] - e[0] * t[1]) / n]
    }

    function c(e, t) {
        let n = [0, 0];
        for (let i = e.length - 1; i >= 0; i -= 1) o = t, n = [(r = n)[0] * o[0] - r[1] * o[1], r[0] * o[1] + r[1] * o[0]], n[0] += e[i];
        var r, o;
        return n
    }
    const u = (e, t, n, r) => (u, l, {
        channelCount: d,
        channelCountMode: f,
        channelInterpretation: p,
        feedback: h,
        feedforward: g
    }) => {
        const v = (0, o.computeBufferSize)(l, u.sampleRate),
            m = h instanceof Float64Array ? h : new Float64Array(h),
            y = g instanceof Float64Array ? g : new Float64Array(g),
            x = m.length,
            C = y.length,
            N = Math.min(x, C);
        if (0 === x || x > 20) throw r();
        if (0 === m[0]) throw t();
        if (0 === C || C > 20) throw r();
        if (0 === y[0]) throw t();
        if (1 !== m[0]) {
            for (let e = 0; e < C; e += 1) y[e] /= m[0];
            for (let e = 1; e < x; e += 1) m[e] /= m[0]
        }
        const A = n(u, v, d, d);
        A.channelCount = d, A.channelCountMode = f, A.channelInterpretation = p;
        const w = [],
            b = [],
            S = [];
        for (let e = 0; e < d; e += 1) {
            w.push(0);
            const e = new Float32Array(32),
                t = new Float32Array(32);
            e.fill(0), t.fill(0), b.push(e), S.push(t)
        }
        A.onaudioprocess = e => {
            const t = e.inputBuffer,
                n = e.outputBuffer,
                r = t.numberOfChannels;
            for (let e = 0; e < r; e += 1) {
                const r = t.getChannelData(e),
                    o = n.getChannelData(e);
                w[e] = (0, i.filterBuffer)(m, x, y, C, N, b[e], S[e], w[e], 32, r, o)
            }
        };
        const E = u.sampleRate / 2,
            O = {
                get bufferSize() {
                    return v
                },
                get channelCount() {
                    return A.channelCount
                },
                set channelCount(e) {
                    A.channelCount = e
                },
                get channelCountMode() {
                    return A.channelCountMode
                },
                set channelCountMode(e) {
                    A.channelCountMode = e
                },
                get channelInterpretation() {
                    return A.channelInterpretation
                },
                set channelInterpretation(e) {
                    A.channelInterpretation = e
                },
                get context() {
                    return A.context
                },
                get inputs() {
                    return [A]
                },
                get numberOfInputs() {
                    return A.numberOfInputs
                },
                get numberOfOutputs() {
                    return A.numberOfOutputs
                },
                addEventListener: (...e) => A.addEventListener(e[0], e[1], e[2]),
                dispatchEvent: (...e) => A.dispatchEvent(e[0]),
                getFrequencyResponse(t, n, r) {
                    if (t.length !== n.length || n.length !== r.length) throw e();
                    const o = t.length;
                    for (let e = 0; e < o; e += 1) {
                        const o = -Math.PI * (t[e] / E),
                            i = [Math.cos(o), Math.sin(o)],
                            a = s(c(y, i), c(m, i));
                        n[e] = Math.sqrt(a[0] * a[0] + a[1] * a[1]), r[e] = Math.atan2(a[1], a[0])
                    }
                },
                removeEventListener: (...e) => A.removeEventListener(e[0], e[1], e[2])
            };
        return (0, a.interceptConnections)(O, A)
    }
})), t.register("3Q4lv", (function(t, n) {
    e(t.exports, "createNativeMediaElementAudioSourceNode", (function() {
        return r
    }));
    const r = (e, t) => e.createMediaElementSource(t.mediaElement)
})), t.register("548Mg", (function(n, r) {
    e(n.exports, "createNativeMediaStreamAudioDestinationNode", (function() {
        return i
    }));
    var o = t("au1vy");
    const i = (e, t) => {
        const n = e.createMediaStreamDestination();
        return (0, o.assignNativeAudioNodeOptions)(n, t), 1 === n.numberOfOutputs && Object.defineProperty(n, "numberOfOutputs", {
            get: () => 0
        }), n
    }
})), t.register("4FbD5", (function(t, n) {
    e(t.exports, "createNativeMediaStreamAudioSourceNode", (function() {
        return r
    }));
    const r = (e, {
        mediaStream: t
    }) => {
        const n = t.getAudioTracks();
        n.sort(((e, t) => e.id < t.id ? -1 : e.id > t.id ? 1 : 0));
        const r = n.slice(0, 1),
            o = e.createMediaStreamSource(new MediaStream(r));
        return Object.defineProperty(o, "mediaStream", {
            value: t
        }), o
    }
})), t.register("9c1Wy", (function(t, n) {
    e(t.exports, "createNativeMediaStreamTrackAudioSourceNodeFactory", (function() {
        return r
    }));
    const r = (e, t) => (n, {
        mediaStreamTrack: r
    }) => {
        if ("function" == typeof n.createMediaStreamTrackSource) return n.createMediaStreamTrackSource(r);
        const o = new MediaStream([r]),
            i = n.createMediaStreamSource(o);
        if ("audio" !== r.kind) throw e();
        if (t(n)) throw new TypeError;
        return i
    }
})), t.register("dCwGZ", (function(t, n) {
    e(t.exports, "createNativeOfflineAudioContextConstructor", (function() {
        return r
    }));
    const r = e => null === e ? null : e.hasOwnProperty("OfflineAudioContext") ? e.OfflineAudioContext : e.hasOwnProperty("webkitOfflineAudioContext") ? e.webkitOfflineAudioContext : null
})), t.register("gpl8H", (function(n, r) {
    e(n.exports, "createNativeOscillatorNodeFactory", (function() {
        return u
    }));
    var o = t("8ap0g"),
        i = t("7qFAC"),
        a = t("au1vy"),
        s = t("cNN21"),
        c = t("6BSVx");
    const u = (e, t, n, r, u, l) => (d, f) => {
        const p = d.createOscillator();
        return (0, a.assignNativeAudioNodeOptions)(p, f), (0, o.assignNativeAudioNodeAudioParamValue)(p, f, "detune"), (0, o.assignNativeAudioNodeAudioParamValue)(p, f, "frequency"), void 0 !== f.periodicWave ? p.setPeriodicWave(f.periodicWave) : (0, i.assignNativeAudioNodeOption)(p, f, "type"), t(n, (() => n(d))) || (0, s.wrapAudioScheduledSourceNodeStartMethodNegativeParameters)(p), t(r, (() => r(d))) || l(p, d), t(u, (() => u(d))) || (0, c.wrapAudioScheduledSourceNodeStopMethodNegativeParameters)(p), e(d, p), p
    }
})), t.register("g5bC5", (function(n, r) {
    e(n.exports, "createNativePannerNodeFactory", (function() {
        return s
    }));
    var o = t("8ap0g"),
        i = t("7qFAC"),
        a = t("au1vy");
    const s = e => (t, n) => {
        const r = t.createPanner();
        return void 0 === r.orientationX ? e(t, n) : ((0, a.assignNativeAudioNodeOptions)(r, n), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "orientationX"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "orientationY"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "orientationZ"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "positionX"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "positionY"), (0, o.assignNativeAudioNodeAudioParamValue)(r, n, "positionZ"), (0, i.assignNativeAudioNodeOption)(r, n, "coneInnerAngle"), (0, i.assignNativeAudioNodeOption)(r, n, "coneOuterAngle"), (0, i.assignNativeAudioNodeOption)(r, n, "coneOuterGain"), (0, i.assignNativeAudioNodeOption)(r, n, "distanceModel"), (0, i.assignNativeAudioNodeOption)(r, n, "maxDistance"), (0, i.assignNativeAudioNodeOption)(r, n, "panningModel"), (0, i.assignNativeAudioNodeOption)(r, n, "refDistance"), (0, i.assignNativeAudioNodeOption)(r, n, "rolloffFactor"), r)
    }
})), t.register("2dzzt", (function(n, r) {
    e(n.exports, "createNativePannerNodeFakerFactory", (function() {
        return a
    }));
    var o = t("au1vy"),
        i = t("dY4pa");
    const a = (e, t, n, r, a, s, c, u, l, d) => (f, {
        coneInnerAngle: p,
        coneOuterAngle: h,
        coneOuterGain: g,
        distanceModel: v,
        maxDistance: m,
        orientationX: y,
        orientationY: x,
        orientationZ: C,
        panningModel: N,
        positionX: A,
        positionY: w,
        positionZ: b,
        refDistance: S,
        rolloffFactor: E,
        ...O
    }) => {
        const _ = f.createPanner();
        if (O.channelCount > 2) throw c();
        if ("max" === O.channelCountMode) throw c();
        (0, o.assignNativeAudioNodeOptions)(_, O);
        const M = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete"
            },
            T = n(f, {
                ...M,
                channelInterpretation: "speakers",
                numberOfInputs: 6
            }),
            I = r(f, {
                ...O,
                gain: 1
            }),
            k = r(f, {
                ...M,
                gain: 1
            }),
            P = r(f, {
                ...M,
                gain: 0
            }),
            R = r(f, {
                ...M,
                gain: 0
            }),
            F = r(f, {
                ...M,
                gain: 0
            }),
            j = r(f, {
                ...M,
                gain: 0
            }),
            B = r(f, {
                ...M,
                gain: 0
            }),
            L = a(f, 256, 6, 1),
            D = s(f, {
                ...M,
                curve: new Float32Array([1, 1]),
                oversample: "none"
            });
        let U = [y, x, C],
            W = [A, w, b];
        const V = new Float32Array(1);
        L.onaudioprocess = ({
            inputBuffer: e
        }) => {
            const t = [l(e, V, 0), l(e, V, 1), l(e, V, 2)];
            t.some(((e, t) => e !== U[t])) && (_.setOrientation(...t), U = t);
            const n = [l(e, V, 3), l(e, V, 4), l(e, V, 5)];
            n.some(((e, t) => e !== W[t])) && (_.setPosition(...n), W = n)
        }, Object.defineProperty(P.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(R.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(F.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(j.gain, "defaultValue", {
            get: () => 0
        }), Object.defineProperty(B.gain, "defaultValue", {
            get: () => 0
        });
        const q = {
            get bufferSize() {},
            get channelCount() {
                return _.channelCount
            },
            set channelCount(e) {
                if (e > 2) throw c();
                I.channelCount = e, _.channelCount = e
            },
            get channelCountMode() {
                return _.channelCountMode
            },
            set channelCountMode(e) {
                if ("max" === e) throw c();
                I.channelCountMode = e, _.channelCountMode = e
            },
            get channelInterpretation() {
                return _.channelInterpretation
            },
            set channelInterpretation(e) {
                I.channelInterpretation = e, _.channelInterpretation = e
            },
            get coneInnerAngle() {
                return _.coneInnerAngle
            },
            set coneInnerAngle(e) {
                _.coneInnerAngle = e
            },
            get coneOuterAngle() {
                return _.coneOuterAngle
            },
            set coneOuterAngle(e) {
                _.coneOuterAngle = e
            },
            get coneOuterGain() {
                return _.coneOuterGain
            },
            set coneOuterGain(e) {
                if (e < 0 || e > 1) throw t();
                _.coneOuterGain = e
            },
            get context() {
                return _.context
            },
            get distanceModel() {
                return _.distanceModel
            },
            set distanceModel(e) {
                _.distanceModel = e
            },
            get inputs() {
                return [I]
            },
            get maxDistance() {
                return _.maxDistance
            },
            set maxDistance(e) {
                if (e < 0) throw new RangeError;
                _.maxDistance = e
            },
            get numberOfInputs() {
                return _.numberOfInputs
            },
            get numberOfOutputs() {
                return _.numberOfOutputs
            },
            get orientationX() {
                return k.gain
            },
            get orientationY() {
                return P.gain
            },
            get orientationZ() {
                return R.gain
            },
            get panningModel() {
                return _.panningModel
            },
            set panningModel(e) {
                _.panningModel = e
            },
            get positionX() {
                return F.gain
            },
            get positionY() {
                return j.gain
            },
            get positionZ() {
                return B.gain
            },
            get refDistance() {
                return _.refDistance
            },
            set refDistance(e) {
                if (e < 0) throw new RangeError;
                _.refDistance = e
            },
            get rolloffFactor() {
                return _.rolloffFactor
            },
            set rolloffFactor(e) {
                if (e < 0) throw new RangeError;
                _.rolloffFactor = e
            },
            addEventListener: (...e) => I.addEventListener(e[0], e[1], e[2]),
            dispatchEvent: (...e) => I.dispatchEvent(e[0]),
            removeEventListener: (...e) => I.removeEventListener(e[0], e[1], e[2])
        };
        p !== q.coneInnerAngle && (q.coneInnerAngle = p), h !== q.coneOuterAngle && (q.coneOuterAngle = h), g !== q.coneOuterGain && (q.coneOuterGain = g), v !== q.distanceModel && (q.distanceModel = v), m !== q.maxDistance && (q.maxDistance = m), y !== q.orientationX.value && (q.orientationX.value = y), x !== q.orientationY.value && (q.orientationY.value = x), C !== q.orientationZ.value && (q.orientationZ.value = C), N !== q.panningModel && (q.panningModel = N), A !== q.positionX.value && (q.positionX.value = A), w !== q.positionY.value && (q.positionY.value = w), b !== q.positionZ.value && (q.positionZ.value = b), S !== q.refDistance && (q.refDistance = S), E !== q.rolloffFactor && (q.rolloffFactor = E), 1 === U[0] && 0 === U[1] && 0 === U[2] || _.setOrientation(...U), 0 === W[0] && 0 === W[1] && 0 === W[2] || _.setPosition(...W);
        return d((0, i.interceptConnections)(q, _), (() => {
            I.connect(_), e(I, D, 0, 0), D.connect(k).connect(T, 0, 0), D.connect(P).connect(T, 0, 1), D.connect(R).connect(T, 0, 2), D.connect(F).connect(T, 0, 3), D.connect(j).connect(T, 0, 4), D.connect(B).connect(T, 0, 5), T.connect(L).connect(f.destination)
        }), (() => {
            I.disconnect(_), u(I, D, 0, 0), D.disconnect(k), k.disconnect(T), D.disconnect(P), P.disconnect(T), D.disconnect(R), R.disconnect(T), D.disconnect(F), F.disconnect(T), D.disconnect(j), j.disconnect(T), D.disconnect(B), B.disconnect(T), T.disconnect(L), L.disconnect(f.destination)
        }))
    }
})), t.register("d01G1", (function(t, n) {
    e(t.exports, "createNativePeriodicWaveFactory", (function() {
        return r
    }));
    const r = e => (t, {
        disableNormalization: n,
        imag: r,
        real: o
    }) => {
        const i = r instanceof Float32Array ? r : new Float32Array(r),
            a = o instanceof Float32Array ? o : new Float32Array(o),
            s = t.createPeriodicWave(a, i, {
                disableNormalization: n
            });
        if (Array.from(r).length < 2) throw e();
        return s
    }
})), t.register("kmp2k", (function(t, n) {
    e(t.exports, "createNativeScriptProcessorNode", (function() {
        return r
    }));
    const r = (e, t, n, r) => e.createScriptProcessor(t, n, r)
})), t.register("fya02", (function(n, r) {
    e(n.exports, "createNativeStereoPannerNodeFactory", (function() {
        return a
    }));
    var o = t("8ap0g"),
        i = t("au1vy");
    const a = (e, t) => (n, r) => {
        const a = r.channelCountMode;
        if ("clamped-max" === a) throw t();
        if (void 0 === n.createStereoPanner) return e(n, r);
        const s = n.createStereoPanner();
        return (0, i.assignNativeAudioNodeOptions)(s, r), (0, o.assignNativeAudioNodeAudioParamValue)(s, r, "pan"), Object.defineProperty(s, "channelCountMode", {
            get: () => a,
            set: e => {
                if (e !== a) throw t()
            }
        }), s
    }
})), t.register("6V7uX", (function(n, r) {
    e(n.exports, "createNativeStereoPannerNodeFakerFactory", (function() {
        return i
    }));
    var o = t("dY4pa");
    const i = (e, t, n, r, i, a) => {
        const s = 16385,
            c = new Float32Array([1, 1]),
            u = Math.PI / 2,
            l = {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete"
            },
            d = {
                ...l,
                oversample: "none"
            },
            f = (e, o, a, f, p) => {
                if (1 === o) return ((e, t, o, i) => {
                    const a = new Float32Array(s),
                        f = new Float32Array(s);
                    for (let e = 0; e < s; e += 1) {
                        const t = e / 16384 * u;
                        a[e] = Math.cos(t), f[e] = Math.sin(t)
                    }
                    const p = n(e, {
                            ...l,
                            gain: 0
                        }),
                        h = r(e, {
                            ...d,
                            curve: a
                        }),
                        g = r(e, {
                            ...d,
                            curve: c
                        }),
                        v = n(e, {
                            ...l,
                            gain: 0
                        }),
                        m = r(e, {
                            ...d,
                            curve: f
                        });
                    return {
                        connectGraph() {
                            t.connect(p), t.connect(void 0 === g.inputs ? g : g.inputs[0]), t.connect(v), g.connect(o), o.connect(void 0 === h.inputs ? h : h.inputs[0]), o.connect(void 0 === m.inputs ? m : m.inputs[0]), h.connect(p.gain), m.connect(v.gain), p.connect(i, 0, 0), v.connect(i, 0, 1)
                        },
                        disconnectGraph() {
                            t.disconnect(p), t.disconnect(void 0 === g.inputs ? g : g.inputs[0]), t.disconnect(v), g.disconnect(o), o.disconnect(void 0 === h.inputs ? h : h.inputs[0]), o.disconnect(void 0 === m.inputs ? m : m.inputs[0]), h.disconnect(p.gain), m.disconnect(v.gain), p.disconnect(i, 0, 0), v.disconnect(i, 0, 1)
                        }
                    }
                })(e, a, f, p);
                if (2 === o) return ((e, o, i, a) => {
                    const f = new Float32Array(s),
                        p = new Float32Array(s),
                        h = new Float32Array(s),
                        g = new Float32Array(s),
                        v = Math.floor(8192.5);
                    for (let e = 0; e < s; e += 1)
                        if (e > v) {
                            const t = (e - v) / (16384 - v) * u;
                            f[e] = Math.cos(t), p[e] = Math.sin(t), h[e] = 0, g[e] = 1
                        } else {
                            const t = e / (16384 - v) * u;
                            f[e] = 1, p[e] = 0, h[e] = Math.cos(t), g[e] = Math.sin(t)
                        } const m = t(e, {
                            channelCount: 2,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            numberOfOutputs: 2
                        }),
                        y = n(e, {
                            ...l,
                            gain: 0
                        }),
                        x = r(e, {
                            ...d,
                            curve: f
                        }),
                        C = n(e, {
                            ...l,
                            gain: 0
                        }),
                        N = r(e, {
                            ...d,
                            curve: p
                        }),
                        A = r(e, {
                            ...d,
                            curve: c
                        }),
                        w = n(e, {
                            ...l,
                            gain: 0
                        }),
                        b = r(e, {
                            ...d,
                            curve: h
                        }),
                        S = n(e, {
                            ...l,
                            gain: 0
                        }),
                        E = r(e, {
                            ...d,
                            curve: g
                        });
                    return {
                        connectGraph() {
                            o.connect(m), o.connect(void 0 === A.inputs ? A : A.inputs[0]), m.connect(y, 0), m.connect(C, 0), m.connect(w, 1), m.connect(S, 1), A.connect(i), i.connect(void 0 === x.inputs ? x : x.inputs[0]), i.connect(void 0 === N.inputs ? N : N.inputs[0]), i.connect(void 0 === b.inputs ? b : b.inputs[0]), i.connect(void 0 === E.inputs ? E : E.inputs[0]), x.connect(y.gain), N.connect(C.gain), b.connect(w.gain), E.connect(S.gain), y.connect(a, 0, 0), w.connect(a, 0, 0), C.connect(a, 0, 1), S.connect(a, 0, 1)
                        },
                        disconnectGraph() {
                            o.disconnect(m), o.disconnect(void 0 === A.inputs ? A : A.inputs[0]), m.disconnect(y, 0), m.disconnect(C, 0), m.disconnect(w, 1), m.disconnect(S, 1), A.disconnect(i), i.disconnect(void 0 === x.inputs ? x : x.inputs[0]), i.disconnect(void 0 === N.inputs ? N : N.inputs[0]), i.disconnect(void 0 === b.inputs ? b : b.inputs[0]), i.disconnect(void 0 === E.inputs ? E : E.inputs[0]), x.disconnect(y.gain), N.disconnect(C.gain), b.disconnect(w.gain), E.disconnect(S.gain), y.disconnect(a, 0, 0), w.disconnect(a, 0, 0), C.disconnect(a, 0, 1), S.disconnect(a, 0, 1)
                        }
                    }
                })(e, a, f, p);
                throw i()
            };
        return (t, {
            channelCount: r,
            channelCountMode: s,
            pan: c,
            ...u
        }) => {
            if ("max" === s) throw i();
            const l = e(t, {
                    ...u,
                    channelCount: 1,
                    channelCountMode: s,
                    numberOfInputs: 2
                }),
                d = n(t, {
                    ...u,
                    channelCount: r,
                    channelCountMode: s,
                    gain: 1
                }),
                p = n(t, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: c
                });
            let {
                connectGraph: h,
                disconnectGraph: g
            } = f(t, r, d, p, l);
            Object.defineProperty(p.gain, "defaultValue", {
                get: () => 0
            }), Object.defineProperty(p.gain, "maxValue", {
                get: () => 1
            }), Object.defineProperty(p.gain, "minValue", {
                get: () => -1
            });
            const v = {
                get bufferSize() {},
                get channelCount() {
                    return d.channelCount
                },
                set channelCount(e) {
                    d.channelCount !== e && (m && g(), ({
                        connectGraph: h,
                        disconnectGraph: g
                    } = f(t, e, d, p, l)), m && h()), d.channelCount = e
                },
                get channelCountMode() {
                    return d.channelCountMode
                },
                set channelCountMode(e) {
                    if ("clamped-max" === e || "max" === e) throw i();
                    d.channelCountMode = e
                },
                get channelInterpretation() {
                    return d.channelInterpretation
                },
                set channelInterpretation(e) {
                    d.channelInterpretation = e
                },
                get context() {
                    return d.context
                },
                get inputs() {
                    return [d]
                },
                get numberOfInputs() {
                    return d.numberOfInputs
                },
                get numberOfOutputs() {
                    return d.numberOfOutputs
                },
                get pan() {
                    return p.gain
                },
                addEventListener: (...e) => d.addEventListener(e[0], e[1], e[2]),
                dispatchEvent: (...e) => d.dispatchEvent(e[0]),
                removeEventListener: (...e) => d.removeEventListener(e[0], e[1], e[2])
            };
            let m = !1;
            return a((0, o.interceptConnections)(v, l), (() => {
                h(), m = !0
            }), (() => {
                g(), m = !1
            }))
        }
    }
})), t.register("isczR", (function(n, r) {
    e(n.exports, "createNativeWaveShaperNodeFactory", (function() {
        return a
    }));
    var o = t("7qFAC"),
        i = t("au1vy");
    const a = (e, t, n, r, a, s, c) => (u, l) => {
        const d = u.createWaveShaper();
        if (null !== s && "webkitAudioContext" === s.name && void 0 === u.createGain().gain.automationRate) return n(u, l);
        (0, i.assignNativeAudioNodeOptions)(d, l);
        const f = null === l.curve || l.curve instanceof Float32Array ? l.curve : new Float32Array(l.curve);
        if (null !== f && f.length < 2) throw t();
        (0, o.assignNativeAudioNodeOption)(d, {
            curve: f
        }, "curve"), (0, o.assignNativeAudioNodeOption)(d, l, "oversample");
        let p = null,
            h = !1;
        c(d, "curve", (e => () => e.call(d)), (t => n => (t.call(d, n), h && (r(n) && null === p ? p = e(u, d) : r(n) || null === p || (p(), p = null)), n)));
        return a(d, (() => {
            h = !0, r(d.curve) && (p = e(u, d))
        }), (() => {
            h = !1, null !== p && (p(), p = null)
        }))
    }
})), t.register("leTiP", (function(n, r) {
    e(n.exports, "createNativeWaveShaperNodeFakerFactory", (function() {
        return a
    }));
    var o = t("au1vy"),
        i = t("dY4pa");
    const a = (e, t, n, r, a) => (s, {
        curve: c,
        oversample: u,
        ...l
    }) => {
        const d = s.createWaveShaper(),
            f = s.createWaveShaper();
        (0, o.assignNativeAudioNodeOptions)(d, l), (0, o.assignNativeAudioNodeOptions)(f, l);
        const p = n(s, {
                ...l,
                gain: 1
            }),
            h = n(s, {
                ...l,
                gain: -1
            }),
            g = n(s, {
                ...l,
                gain: 1
            }),
            v = n(s, {
                ...l,
                gain: -1
            });
        let m = null,
            y = !1,
            x = null;
        const C = {
            get bufferSize() {},
            get channelCount() {
                return d.channelCount
            },
            set channelCount(e) {
                p.channelCount = e, h.channelCount = e, d.channelCount = e, g.channelCount = e, f.channelCount = e, v.channelCount = e
            },
            get channelCountMode() {
                return d.channelCountMode
            },
            set channelCountMode(e) {
                p.channelCountMode = e, h.channelCountMode = e, d.channelCountMode = e, g.channelCountMode = e, f.channelCountMode = e, v.channelCountMode = e
            },
            get channelInterpretation() {
                return d.channelInterpretation
            },
            set channelInterpretation(e) {
                p.channelInterpretation = e, h.channelInterpretation = e, d.channelInterpretation = e, g.channelInterpretation = e, f.channelInterpretation = e, v.channelInterpretation = e
            },
            get context() {
                return d.context
            },
            get curve() {
                return x
            },
            set curve(n) {
                if (null !== n && n.length < 2) throw t();
                if (null === n) d.curve = n, f.curve = n;
                else {
                    const e = n.length,
                        t = new Float32Array(e + 2 - e % 2),
                        r = new Float32Array(e + 2 - e % 2);
                    t[0] = n[0], r[0] = -n[e - 1];
                    const o = Math.ceil((e + 1) / 2),
                        i = (e + 1) / 2 - 1;
                    for (let a = 1; a < o; a += 1) {
                        const s = a / o * i,
                            c = Math.floor(s),
                            u = Math.ceil(s);
                        t[a] = c === u ? n[c] : (1 - (s - c)) * n[c] + (1 - (u - s)) * n[u], r[a] = c === u ? -n[e - 1 - c] : -(1 - (s - c)) * n[e - 1 - c] - (1 - (u - s)) * n[e - 1 - u]
                    }
                    t[o] = e % 2 == 1 ? n[o - 1] : (n[o - 2] + n[o - 1]) / 2, d.curve = t, f.curve = r
                }
                x = n, y && (r(x) && null === m ? m = e(s, p) : null !== m && (m(), m = null))
            },
            get inputs() {
                return [p]
            },
            get numberOfInputs() {
                return d.numberOfInputs
            },
            get numberOfOutputs() {
                return d.numberOfOutputs
            },
            get oversample() {
                return d.oversample
            },
            set oversample(e) {
                d.oversample = e, f.oversample = e
            },
            addEventListener: (...e) => p.addEventListener(e[0], e[1], e[2]),
            dispatchEvent: (...e) => p.dispatchEvent(e[0]),
            removeEventListener: (...e) => p.removeEventListener(e[0], e[1], e[2])
        };
        null !== c && (C.curve = c instanceof Float32Array ? c : new Float32Array(c)), u !== C.oversample && (C.oversample = u);
        return a((0, i.interceptConnections)(C, g), (() => {
            p.connect(d).connect(g), p.connect(h).connect(f).connect(v).connect(g), y = !0, r(x) && (m = e(s, p))
        }), (() => {
            p.disconnect(d), d.disconnect(g), p.disconnect(h), h.disconnect(f), f.disconnect(v), v.disconnect(g), y = !1, null !== m && (m(), m = null)
        }))
    }
})), t.register("eH59t", (function(t, n) {
    e(t.exports, "createNotSupportedError", (function() {
        return r
    }));
    const r = () => new DOMException("", "NotSupportedError")
})), t.register("4YX5x", (function(n, r) {
    e(n.exports, "createOfflineAudioContextConstructor", (function() {
        return s
    }));
    var o = t("5KQXf"),
        i = t("46dAu");
    const a = {
            numberOfChannels: 1
        },
        s = (e, t, n, r, s) => class extends e {
            get length() {
                return void 0 === this._nativeOfflineAudioContext.length ? this._length : this._nativeOfflineAudioContext.length
            }
            get state() {
                return null === this._state ? this._nativeOfflineAudioContext.state : this._state
            }
            startRendering() {
                return "running" === this._state ? Promise.reject(n()) : (this._state = "running", s(this.destination, this._nativeOfflineAudioContext).finally((() => {
                    this._state = null, (0, o.deactivateAudioGraph)(this)
                })))
            }
            _waitForThePromiseToSettle(e) {
                null === this._state ? this._nativeOfflineAudioContext.dispatchEvent(e) : setTimeout((() => this._waitForThePromiseToSettle(e)))
            }
            constructor(e, n, o) {
                let s;
                if ("number" == typeof e && void 0 !== n && void 0 !== o) s = {
                    length: n,
                    numberOfChannels: e,
                    sampleRate: o
                };
                else {
                    if ("object" != typeof e) throw new Error("The given parameters are not valid.");
                    s = e
                }
                const {
                    length: c,
                    numberOfChannels: u,
                    sampleRate: l
                } = {
                    ...a,
                    ...s
                }, d = r(u, c, l);
                t(i.testPromiseSupport, (() => (0, i.testPromiseSupport)(d))) || d.addEventListener("statechange", (() => {
                    let e = 0;
                    const t = n => {
                        "running" === this._state && (e > 0 ? (d.removeEventListener("statechange", t), n.stopImmediatePropagation(), this._waitForThePromiseToSettle(n)) : e += 1)
                    };
                    return t
                })()), super(d, u), this._length = c, this._nativeOfflineAudioContext = d, this._state = null
            }
        }
})), t.register("5nrID", (function(n, r) {
    e(n.exports, "createOscillatorNodeConstructor", (function() {
        return c
    }));
    var o = t("5H21Q"),
        i = t("hcOfm"),
        a = t("4J26V");
    const s = {
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            detune: 0,
            frequency: 440,
            periodicWave: void 0,
            type: "sine"
        },
        c = (e, t, n, r, c, u, l) => class extends e {
            get detune() {
                return this._detune
            }
            get frequency() {
                return this._frequency
            }
            get onended() {
                return this._onended
            }
            set onended(e) {
                const t = "function" == typeof e ? l(this, e) : null;
                this._nativeOscillatorNode.onended = t;
                const n = this._nativeOscillatorNode.onended;
                this._onended = null !== n && n === t ? e : n
            }
            get type() {
                return this._nativeOscillatorNode.type
            }
            set type(e) {
                this._nativeOscillatorNode.type = e, null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = null)
            }
            setPeriodicWave(e) {
                this._nativeOscillatorNode.setPeriodicWave(e), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.periodicWave = e)
            }
            start(e = 0) {
                if (this._nativeOscillatorNode.start(e), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.start = e), "closed" !== this.context.state) {
                    (0, i.setInternalStateToActive)(this);
                    const e = () => {
                        this._nativeOscillatorNode.removeEventListener("ended", e), (0, o.isActiveAudioNode)(this) && (0, a.setInternalStateToPassive)(this)
                    };
                    this._nativeOscillatorNode.addEventListener("ended", e)
                }
            }
            stop(e = 0) {
                this._nativeOscillatorNode.stop(e), null !== this._oscillatorNodeRenderer && (this._oscillatorNodeRenderer.stop = e)
            }
            constructor(e, o) {
                const i = c(e),
                    a = {
                        ...s,
                        ...o
                    },
                    l = n(i, a),
                    d = u(i),
                    f = d ? r() : null,
                    p = e.sampleRate / 2;
                super(e, !1, l, f), this._detune = t(this, d, l.detune, 153600, -153600), this._frequency = t(this, d, l.frequency, p, -p), this._nativeOscillatorNode = l, this._onended = null, this._oscillatorNodeRenderer = f, null !== this._oscillatorNodeRenderer && void 0 !== a.periodicWave && (this._oscillatorNodeRenderer.periodicWave = a.periodicWave)
            }
        }
})), t.register("bTsSI", (function(n, r) {
    e(n.exports, "createOscillatorNodeRendererFactory", (function() {
        return i
    }));
    var o = t("gf4ZQ");
    const i = (e, t, n, r, i) => () => {
        const a = new WeakMap;
        let s = null,
            c = null,
            u = null;
        return {
            set periodicWave(e) {
                s = e
            },
            set start(e) {
                c = e
            },
            set stop(e) {
                u = e
            },
            render(l, d) {
                const f = a.get(d);
                return void 0 !== f ? Promise.resolve(f) : (async (l, d) => {
                    let f = n(l);
                    const p = (0, o.isOwnedByContext)(f, d);
                    if (!p) {
                        const e = {
                            channelCount: f.channelCount,
                            channelCountMode: f.channelCountMode,
                            channelInterpretation: f.channelInterpretation,
                            detune: f.detune.value,
                            frequency: f.frequency.value,
                            periodicWave: null === s ? void 0 : s,
                            type: f.type
                        };
                        f = t(d, e), null !== c && f.start(c), null !== u && f.stop(u)
                    }
                    return a.set(d, f), p ? (await e(d, l.detune, f.detune), await e(d, l.frequency, f.frequency)) : (await r(d, l.detune, f.detune), await r(d, l.frequency, f.frequency)), await i(l, d, f), f
                })(l, d)
            }
        }
    }
})), t.register("cQWJg", (function(n, r) {
    e(n.exports, "createPannerNodeConstructor", (function() {
        return a
    }));
    var o = t("2HEdW");
    const i = {
            channelCount: 2,
            channelCountMode: "clamped-max",
            channelInterpretation: "speakers",
            coneInnerAngle: 360,
            coneOuterAngle: 360,
            coneOuterGain: 0,
            distanceModel: "inverse",
            maxDistance: 1e4,
            orientationX: 1,
            orientationY: 0,
            orientationZ: 0,
            panningModel: "equalpower",
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            refDistance: 1,
            rolloffFactor: 1
        },
        a = (e, t, n, r, a, s, c) => class extends e {
            get coneInnerAngle() {
                return this._nativePannerNode.coneInnerAngle
            }
            set coneInnerAngle(e) {
                this._nativePannerNode.coneInnerAngle = e
            }
            get coneOuterAngle() {
                return this._nativePannerNode.coneOuterAngle
            }
            set coneOuterAngle(e) {
                this._nativePannerNode.coneOuterAngle = e
            }
            get coneOuterGain() {
                return this._nativePannerNode.coneOuterGain
            }
            set coneOuterGain(e) {
                this._nativePannerNode.coneOuterGain = e
            }
            get distanceModel() {
                return this._nativePannerNode.distanceModel
            }
            set distanceModel(e) {
                this._nativePannerNode.distanceModel = e
            }
            get maxDistance() {
                return this._nativePannerNode.maxDistance
            }
            set maxDistance(e) {
                this._nativePannerNode.maxDistance = e
            }
            get orientationX() {
                return this._orientationX
            }
            get orientationY() {
                return this._orientationY
            }
            get orientationZ() {
                return this._orientationZ
            }
            get panningModel() {
                return this._nativePannerNode.panningModel
            }
            set panningModel(e) {
                this._nativePannerNode.panningModel = e
            }
            get positionX() {
                return this._positionX
            }
            get positionY() {
                return this._positionY
            }
            get positionZ() {
                return this._positionZ
            }
            get refDistance() {
                return this._nativePannerNode.refDistance
            }
            set refDistance(e) {
                this._nativePannerNode.refDistance = e
            }
            get rolloffFactor() {
                return this._nativePannerNode.rolloffFactor
            }
            set rolloffFactor(e) {
                this._nativePannerNode.rolloffFactor = e
            }
            constructor(e, u) {
                const l = a(e),
                    d = {
                        ...i,
                        ...u
                    },
                    f = n(l, d),
                    p = s(l);
                super(e, !1, f, p ? r() : null), this._nativePannerNode = f, this._orientationX = t(this, p, f.orientationX, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationY = t(this, p, f.orientationY, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), this._orientationZ = t(this, p, f.orientationZ, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), this._positionX = t(this, p, f.positionX, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), this._positionY = t(this, p, f.positionY, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), this._positionZ = t(this, p, f.positionZ, o.MOST_POSITIVE_SINGLE_FLOAT, o.MOST_NEGATIVE_SINGLE_FLOAT), c(this, 1)
            }
        }
})), t.register("j5BOm", (function(n, r) {
    e(n.exports, "createPannerNodeRendererFactory", (function() {
        return a
    }));
    var o = t("1gZ6F"),
        i = t("gf4ZQ");
    const a = (e, t, n, r, a, s, c, u, l, d) => () => {
        const f = new WeakMap;
        let p = null;
        return {
            render(h, g) {
                const v = f.get(g);
                return void 0 !== v ? Promise.resolve(v) : (async (h, g) => {
                    let v = null,
                        m = s(h);
                    const y = {
                            channelCount: m.channelCount,
                            channelCountMode: m.channelCountMode,
                            channelInterpretation: m.channelInterpretation
                        },
                        x = {
                            ...y,
                            coneInnerAngle: m.coneInnerAngle,
                            coneOuterAngle: m.coneOuterAngle,
                            coneOuterGain: m.coneOuterGain,
                            distanceModel: m.distanceModel,
                            maxDistance: m.maxDistance,
                            panningModel: m.panningModel,
                            refDistance: m.refDistance,
                            rolloffFactor: m.rolloffFactor
                        },
                        C = (0, i.isOwnedByContext)(m, g);
                    if ("bufferSize" in m) v = r(g, {
                        ...y,
                        gain: 1
                    });
                    else if (!C) {
                        const e = {
                            ...x,
                            orientationX: m.orientationX.value,
                            orientationY: m.orientationY.value,
                            orientationZ: m.orientationZ.value,
                            positionX: m.positionX.value,
                            positionY: m.positionY.value,
                            positionZ: m.positionZ.value
                        };
                        m = a(g, e)
                    }
                    if (f.set(g, null === v ? m : v), null !== v) {
                        if (null === p) {
                            if (null === c) throw new Error("Missing the native OfflineAudioContext constructor.");
                            const e = new c(6, h.context.length, g.sampleRate),
                                r = t(e, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "speakers",
                                    numberOfInputs: 6
                                });
                            r.connect(e.destination), p = (async () => {
                                const t = await Promise.all([h.orientationX, h.orientationY, h.orientationZ, h.positionX, h.positionY, h.positionZ].map((async (t, r) => {
                                    const o = n(e, {
                                        channelCount: 1,
                                        channelCountMode: "explicit",
                                        channelInterpretation: "discrete",
                                        offset: 0 === r ? 1 : 0
                                    });
                                    return await u(e, t, o.offset), o
                                })));
                                for (let e = 0; e < 6; e += 1) t[e].connect(r, 0, e), t[e].start(0);
                                return d(e)
                            })()
                        }
                        const e = await p,
                            o = r(g, {
                                ...y,
                                gain: 1
                            });
                        await l(h, g, o);
                        const i = [];
                        for (let t = 0; t < e.numberOfChannels; t += 1) i.push(e.getChannelData(t));
                        let s = [i[0][0], i[1][0], i[2][0]],
                            f = [i[3][0], i[4][0], i[5][0]],
                            m = r(g, {
                                ...y,
                                gain: 1
                            }),
                            C = a(g, {
                                ...x,
                                orientationX: s[0],
                                orientationY: s[1],
                                orientationZ: s[2],
                                positionX: f[0],
                                positionY: f[1],
                                positionZ: f[2]
                            });
                        o.connect(m).connect(C.inputs[0]), C.connect(v);
                        for (let t = 128; t < e.length; t += 128) {
                            const e = [i[0][t], i[1][t], i[2][t]],
                                n = [i[3][t], i[4][t], i[5][t]];
                            if (e.some(((e, t) => e !== s[t])) || n.some(((e, t) => e !== f[t]))) {
                                s = e, f = n;
                                const i = t / g.sampleRate;
                                m.gain.setValueAtTime(0, i), m = r(g, {
                                    ...y,
                                    gain: 0
                                }), C = a(g, {
                                    ...x,
                                    orientationX: s[0],
                                    orientationY: s[1],
                                    orientationZ: s[2],
                                    positionX: f[0],
                                    positionY: f[1],
                                    positionZ: f[2]
                                }), m.gain.setValueAtTime(1, i), o.connect(m).connect(C.inputs[0]), C.connect(v)
                            }
                        }
                        return v
                    }
                    return C ? (await e(g, h.orientationX, m.orientationX), await e(g, h.orientationY, m.orientationY), await e(g, h.orientationZ, m.orientationZ), await e(g, h.positionX, m.positionX), await e(g, h.positionY, m.positionY), await e(g, h.positionZ, m.positionZ)) : (await u(g, h.orientationX, m.orientationX), await u(g, h.orientationY, m.orientationY), await u(g, h.orientationZ, m.orientationZ), await u(g, h.positionX, m.positionX), await u(g, h.positionY, m.positionY), await u(g, h.positionZ, m.positionZ)), (0, o.isNativeAudioNodeFaker)(m) ? await l(h, g, m.inputs[0]) : await l(h, g, m), m
                })(h, g)
            }
        }
    }
})), t.register("1CLtp", (function(t, n) {
    e(t.exports, "createPeriodicWaveConstructor", (function() {
        return o
    }));
    const r = {
            disableNormalization: !1
        },
        o = (e, t, n, o) => class i {
            static[Symbol.hasInstance](e) {
                return null !== e && "object" == typeof e && Object.getPrototypeOf(e) === i.prototype || n.has(e)
            }
            constructor(i, a) {
                const s = t(i),
                    c = o({
                        ...r,
                        ...a
                    }),
                    u = e(s, c);
                return n.add(u), u
            }
        }
})), t.register("eWNR0", (function(t, n) {
    e(t.exports, "createRenderAutomation", (function() {
        return r
    }));
    const r = (e, t) => (n, r, o) => (e(r).replay(o), t(r, n, o))
})), t.register("2Zzms", (function(t, n) {
    e(t.exports, "createRenderInputsOfAudioNode", (function() {
        return r
    }));
    const r = (e, t, n) => async (r, o, i) => {
        const a = e(r);
        await Promise.all(a.activeInputs.map(((e, a) => Array.from(e).map((async ([e, s]) => {
            const c = t(e),
                u = await c.render(e, o),
                l = r.context.destination;
            n(e) || r === l && n(r) || u.connect(i, s, a)
        })))).reduce(((e, t) => [...e, ...t]), []))
    }
})), t.register("kp3cf", (function(t, n) {
    e(t.exports, "createRenderInputsOfAudioParam", (function() {
        return r
    }));
    const r = (e, t, n) => async (r, o, i) => {
        const a = t(r);
        await Promise.all(Array.from(a.activeInputs).map((async ([t, r]) => {
            const a = e(t),
                s = await a.render(t, o);
            n(t) || s.connect(i, r)
        })))
    }
})), t.register("sba44", (function(n, r) {
    e(n.exports, "createRenderNativeOfflineAudioContext", (function() {
        return i
    }));
    var o = t("46dAu");
    const i = (e, t, n, r) => i => e(o.testPromiseSupport, (() => (0, o.testPromiseSupport)(i))) ? Promise.resolve(e(r, r)).then((e => {
        if (!e) {
            const e = n(i, 512, 0, 1);
            i.oncomplete = () => {
                e.onaudioprocess = null, e.disconnect()
            }, e.onaudioprocess = () => i.currentTime, e.connect(i.destination)
        }
        return i.startRendering()
    })) : new Promise((e => {
        const n = t(i, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
        });
        i.oncomplete = t => {
            n.disconnect(), e(t.renderedBuffer)
        }, n.connect(i.destination), i.startRendering()
    }))
})), t.register("diV5r", (function(t, n) {
    e(t.exports, "createSetActiveAudioWorkletNodeInputs", (function() {
        return r
    }));
    const r = e => (t, n) => {
        e.set(t, n)
    }
})), t.register("giQqf", (function(t, n) {
    e(t.exports, "createSetAudioNodeTailTime", (function() {
        return r
    }));
    const r = e => (t, n) => e.set(t, n)
})), t.register("fd8YT", (function(n, r) {
    e(n.exports, "createStartRendering", (function() {
        return i
    }));
    var o = t("fF9c7");
    const i = (e, t, n, r, i, a, s, c) => (u, l) => n(u).render(u, l).then((() => Promise.all(Array.from(r(l)).map((e => n(e).render(e, l)))))).then((() => i(l))).then((n => ("function" != typeof n.copyFromChannel ? (s(n), (0, o.wrapAudioBufferGetChannelDataMethod)(n)) : t(a, (() => a(n))) || c(n), e.add(n), n)))
})), t.register("jjRoo", (function(t, n) {
    e(t.exports, "createStereoPannerNodeConstructor", (function() {
        return o
    }));
    const r = {
            channelCount: 2,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            pan: 0
        },
        o = (e, t, n, o, i, a) => class extends e {
            get pan() {
                return this._pan
            }
            constructor(e, s) {
                const c = i(e),
                    u = {
                        ...r,
                        ...s
                    },
                    l = n(c, u),
                    d = a(c);
                super(e, !1, l, d ? o() : null), this._pan = t(this, d, l.pan)
            }
        }
})), t.register("h5LfI", (function(n, r) {
    e(n.exports, "createStereoPannerNodeRendererFactory", (function() {
        return a
    }));
    var o = t("1gZ6F"),
        i = t("gf4ZQ");
    const a = (e, t, n, r, a) => () => {
        const s = new WeakMap;
        return {
            render(c, u) {
                const l = s.get(u);
                return void 0 !== l ? Promise.resolve(l) : (async (c, u) => {
                    let l = n(c);
                    const d = (0, i.isOwnedByContext)(l, u);
                    if (!d) {
                        const e = {
                            channelCount: l.channelCount,
                            channelCountMode: l.channelCountMode,
                            channelInterpretation: l.channelInterpretation,
                            pan: l.pan.value
                        };
                        l = t(u, e)
                    }
                    return s.set(u, l), d ? await e(u, c.pan, l.pan) : await r(u, c.pan, l.pan), (0, o.isNativeAudioNodeFaker)(l) ? await a(c, u, l.inputs[0]) : await a(c, u, l), l
                })(c, u)
            }
        }
    }
})), t.register("9Y32Y", (function(t, n) {
    e(t.exports, "createTestAudioBufferConstructorSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        try {
            new e({
                length: 1,
                sampleRate: 44100
            })
        } catch {
            return !1
        }
        return !0
    }
})), t.register("iAkBb", (function(t, n) {
    e(t.exports, "createTestAudioBufferCopyChannelMethodsSubarraySupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        const t = new e(1, 1, 44100).createBuffer(1, 1, 44100);
        if (void 0 === t.copyToChannel) return !0;
        const n = new Float32Array(2);
        try {
            t.copyFromChannel(n, 0, 0)
        } catch {
            return !1
        }
        return !0
    }
})), t.register("6iaEd", (function(t, n) {
    e(t.exports, "createTestAudioContextCloseMethodSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        if (void 0 !== e.prototype && void 0 !== e.prototype.close) return !0;
        const t = new e,
            n = void 0 !== t.close;
        try {
            t.close()
        } catch {}
        return n
    }
})), t.register("9RJTC", (function(t, n) {
    e(t.exports, "createTestAudioContextDecodeAudioDataMethodTypeErrorSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return Promise.resolve(!1);
        const t = new e(1, 1, 44100);
        return new Promise((e => {
            let n = !0;
            const r = r => {
                n && (n = !1, t.startRendering(), e(r instanceof TypeError))
            };
            let o;
            try {
                o = t.decodeAudioData(null, (() => {}), r)
            } catch (e) {
                r(e)
            }
            void 0 !== o && o.catch(r)
        }))
    }
})), t.register("4PK5J", (function(t, n) {
    e(t.exports, "createTestAudioContextOptionsSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        let t;
        try {
            t = new e({
                latencyHint: "balanced"
            })
        } catch {
            return !1
        }
        return t.close(), !0
    }
})), t.register("bNbtD", (function(t, n) {
    e(t.exports, "createTestAudioNodeConnectMethodSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        const t = new e(1, 1, 44100).createGain(),
            n = t.connect(t) === t;
        return t.disconnect(t), n
    }
})), t.register("hpQXM", (function(t, n) {
    e(t.exports, "createTestAudioWorkletProcessorNoOutputsSupport", (function() {
        return r
    }));
    const r = (e, t) => async () => {
        if (null === e) return !0;
        if (null === t) return !1;
        const n = new Blob(['let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'], {
                type: "application/javascript; charset=utf-8"
            }),
            r = new MessageChannel,
            o = new t(1, 128, 44100),
            i = URL.createObjectURL(n);
        let a = !1;
        try {
            await o.audioWorklet.addModule(i);
            const t = new e(o, "a", {
                    numberOfOutputs: 0
                }),
                n = o.createOscillator();
            await new Promise((e => {
                t.port.onmessage = () => e(), t.port.postMessage(r.port2, [r.port2])
            })), t.port.onmessage = () => a = !0, n.connect(t), n.start(0), await o.startRendering(), a = await new Promise((e => {
                r.port1.onmessage = ({
                    data: t
                }) => e(1 === t), r.port1.postMessage(0)
            }))
        } catch {} finally {
            r.port1.close(), URL.revokeObjectURL(i)
        }
        return a
    }
})), t.register("ktH67", (function(t, n) {
    e(t.exports, "createTestAudioWorkletProcessorPostMessageSupport", (function() {
        return r
    }));
    const r = (e, t) => async () => {
        if (null === e) return !0;
        if (null === t) return !1;
        const n = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
                type: "application/javascript; charset=utf-8"
            }),
            r = new t(1, 128, 44100),
            o = URL.createObjectURL(n);
        let i = !1,
            a = !1;
        try {
            await r.audioWorklet.addModule(o);
            const t = new e(r, "a", {
                    numberOfOutputs: 0
                }),
                n = r.createOscillator();
            t.port.onmessage = () => i = !0, t.onprocessorerror = () => a = !0, n.connect(t), n.start(0), await r.startRendering()
        } catch {} finally {
            URL.revokeObjectURL(o)
        }
        return i && !a
    }
})), t.register("fRhAg", (function(t, n) {
    e(t.exports, "createTestChannelMergerNodeChannelCountSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        const t = new e(1, 1, 44100).createChannelMerger();
        if ("max" === t.channelCountMode) return !0;
        try {
            t.channelCount = 2
        } catch {
            return !0
        }
        return !1
    }
})), t.register("ekT3O", (function(t, n) {
    e(t.exports, "createTestConstantSourceNodeAccurateSchedulingSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        const t = new e(1, 1, 44100);
        if (void 0 === t.createConstantSource) return !0;
        return t.createConstantSource().offset.maxValue !== Number.POSITIVE_INFINITY
    }
})), t.register("67oOG", (function(t, n) {
    e(t.exports, "createTestConvolverNodeBufferReassignabilitySupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        const t = new e(1, 1, 44100),
            n = t.createConvolver();
        n.buffer = t.createBuffer(1, 1, t.sampleRate);
        try {
            n.buffer = t.createBuffer(1, 1, t.sampleRate)
        } catch {
            return !1
        }
        return !0
    }
})), t.register("lyEmq", (function(t, n) {
    e(t.exports, "createTestConvolverNodeChannelCountSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        const t = new e(1, 1, 44100).createConvolver();
        try {
            t.channelCount = 1
        } catch {
            return !1
        }
        return !0
    }
})), t.register("6NEgj", (function(t, n) {
    e(t.exports, "createTestIsSecureContextSupport", (function() {
        return r
    }));
    const r = e => () => null !== e && e.hasOwnProperty("isSecureContext")
})), t.register("eIEJo", (function(t, n) {
    e(t.exports, "createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return !1;
        const t = new e;
        try {
            return t.createMediaStreamSource(new MediaStream), !1
        } catch (e) {
            return !0
        } finally {
            t.close()
        }
    }
})), t.register("h0VAr", (function(t, n) {
    e(t.exports, "createTestOfflineAudioContextCurrentTimeSupport", (function() {
        return r
    }));
    const r = (e, t) => () => {
        if (null === t) return Promise.resolve(!1);
        const n = new t(1, 1, 44100),
            r = e(n, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0
            });
        return new Promise((e => {
            n.oncomplete = () => {
                r.disconnect(), e(0 !== n.currentTime)
            }, n.startRendering()
        }))
    }
})), t.register("5FaVX", (function(t, n) {
    e(t.exports, "createTestStereoPannerNodeDefaultValueSupport", (function() {
        return r
    }));
    const r = e => () => {
        if (null === e) return Promise.resolve(!1);
        const t = new e(1, 1, 44100);
        if (void 0 === t.createStereoPanner) return Promise.resolve(!0);
        if (void 0 === t.createConstantSource) return Promise.resolve(!0);
        const n = t.createConstantSource(),
            r = t.createStereoPanner();
        return n.channelCount = 1, n.offset.value = 1, r.channelCount = 1, n.start(), n.connect(r).connect(t.destination), t.startRendering().then((e => 1 !== e.getChannelData(0)[0]))
    }
})), t.register("b2EDi", (function(t, n) {
    e(t.exports, "createUnknownError", (function() {
        return r
    }));
    const r = () => new DOMException("", "UnknownError")
})), t.register("8eIgx", (function(t, n) {
    e(t.exports, "createWaveShaperNodeConstructor", (function() {
        return o
    }));
    const r = {
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            curve: null,
            oversample: "none"
        },
        o = (e, t, n, o, i, a, s) => class extends e {
            get curve() {
                return this._isCurveNullified ? null : this._nativeWaveShaperNode.curve
            }
            set curve(e) {
                if (null === e) this._isCurveNullified = !0, this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
                else {
                    if (e.length < 2) throw t();
                    this._isCurveNullified = !1, this._nativeWaveShaperNode.curve = e
                }
            }
            get oversample() {
                return this._nativeWaveShaperNode.oversample
            }
            set oversample(e) {
                this._nativeWaveShaperNode.oversample = e
            }
            constructor(e, t) {
                const c = i(e),
                    u = {
                        ...r,
                        ...t
                    },
                    l = n(c, u);
                super(e, !0, l, a(c) ? o() : null), this._isCurveNullified = !1, this._nativeWaveShaperNode = l, s(this, 1)
            }
        }
})), t.register("fDrtP", (function(n, r) {
    e(n.exports, "createWaveShaperNodeRendererFactory", (function() {
        return a
    }));
    var o = t("1gZ6F"),
        i = t("gf4ZQ");
    const a = (e, t, n) => () => {
        const r = new WeakMap;
        return {
            render(a, s) {
                const c = r.get(s);
                return void 0 !== c ? Promise.resolve(c) : (async (a, s) => {
                    let c = t(a);
                    if (!(0, i.isOwnedByContext)(c, s)) {
                        const t = {
                            channelCount: c.channelCount,
                            channelCountMode: c.channelCountMode,
                            channelInterpretation: c.channelInterpretation,
                            curve: c.curve,
                            oversample: c.oversample
                        };
                        c = e(s, t)
                    }
                    return r.set(s, c), (0, o.isNativeAudioNodeFaker)(c) ? await n(a, s, c.inputs[0]) : await n(a, s, c), c
                })(a, s)
            }
        }
    }
})), t.register("2KNWl", (function(t, n) {
    e(t.exports, "createWindow", (function() {
        return r
    }));
    const r = () => "undefined" == typeof window ? null : window
})), t.register("e3CAR", (function(t, n) {
    e(t.exports, "createWrapAudioBufferCopyChannelMethods", (function() {
        return r
    }));
    const r = (e, t) => n => {
        n.copyFromChannel = (r, o, i = 0) => {
            const a = e(i),
                s = e(o);
            if (s >= n.numberOfChannels) throw t();
            const c = n.length,
                u = n.getChannelData(s),
                l = r.length;
            for (let e = a < 0 ? -a : 0; e + a < c && e < l; e += 1) r[e] = u[e + a]
        }, n.copyToChannel = (r, o, i = 0) => {
            const a = e(i),
                s = e(o);
            if (s >= n.numberOfChannels) throw t();
            const c = n.length,
                u = n.getChannelData(s),
                l = r.length;
            for (let e = a < 0 ? -a : 0; e + a < c && e < l; e += 1) u[e + a] = r[e]
        }
    }
})), t.register("6ljiI", (function(t, n) {
    e(t.exports, "createWrapAudioBufferCopyChannelMethodsOutOfBounds", (function() {
        return r
    }));
    const r = e => t => {
        var n, r;
        t.copyFromChannel = (n = t.copyFromChannel, (r, o, i = 0) => {
            const a = e(i),
                s = e(o);
            if (a < t.length) return n.call(t, r, s, a)
        }), t.copyToChannel = (r = t.copyToChannel, (n, o, i = 0) => {
            const a = e(i),
                s = e(o);
            if (a < t.length) return r.call(t, n, s, a)
        })
    }
})), t.register("fpdYT", (function(t, n) {
    e(t.exports, "createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer", (function() {
        return r
    }));
    const r = e => (t, n) => {
        const r = n.createBuffer(1, 1, 44100);
        null === t.buffer && (t.buffer = r), e(t, "buffer", (e => () => {
            const n = e.call(t);
            return n === r ? null : n
        }), (e => n => e.call(t, null === n ? r : n)))
    }
})), t.register("cGzZk", (function(t, n) {
    e(t.exports, "createWrapChannelMergerNode", (function() {
        return r
    }));
    const r = (e, t) => (n, r) => {
        r.channelCount = 1, r.channelCountMode = "explicit", Object.defineProperty(r, "channelCount", {
            get: () => 1,
            set: () => {
                throw e()
            }
        }), Object.defineProperty(r, "channelCountMode", {
            get: () => "explicit",
            set: () => {
                throw e()
            }
        });
        const o = n.createBufferSource();
        t(r, (() => {
            const e = r.numberOfInputs;
            for (let t = 0; t < e; t += 1) o.connect(r, 0, t)
        }), (() => o.disconnect(r)))
    }
})), t.register("1Nqgn", (function(t, n) {
    e(t.exports, "getFirstSample", (function() {
        return r
    }));
    const r = (e, t, n) => void 0 === e.copyFromChannel ? e.getChannelData(n)[0] : (e.copyFromChannel(t, n), t[0])
})), t.register("3D8tM", (function(t, n) {
    e(t.exports, "isDCCurve", (function() {
        return r
    }));
    const r = e => {
        if (null === e) return !1;
        const t = e.length;
        return t % 2 != 0 ? 0 !== e[Math.floor(t / 2)] : e[t / 2 - 1] + e[t / 2] !== 0
    }
})), t.register("7mcQM", (function(t, n) {
    e(t.exports, "overwriteAccessors", (function() {
        return r
    }));
    const r = (e, t, n, r) => {
        let o = e;
        for (; !o.hasOwnProperty(t);) o = Object.getPrototypeOf(o);
        const {
            get: i,
            set: a
        } = Object.getOwnPropertyDescriptor(o, t);
        Object.defineProperty(e, t, {
            get: n(i),
            set: r(a)
        })
    }
})), t.register("b1QSS", (function(t, n) {
    e(t.exports, "sanitizeAudioWorkletNodeOptions", (function() {
        return r
    }));
    const r = e => ({
        ...e,
        outputChannelCount: void 0 !== e.outputChannelCount ? e.outputChannelCount : 1 === e.numberOfInputs && 1 === e.numberOfOutputs ? [e.channelCount] : Array.from({
            length: e.numberOfOutputs
        }, (() => 1))
    })
})), t.register("anl26", (function(t, n) {
    e(t.exports, "sanitizeChannelSplitterOptions", (function() {
        return r
    }));
    const r = e => ({
        ...e,
        channelCount: e.numberOfOutputs
    })
})), t.register("it3oI", (function(t, n) {
    e(t.exports, "sanitizePeriodicWaveOptions", (function() {
        return r
    }));
    const r = e => {
        const {
            imag: t,
            real: n
        } = e;
        return void 0 === t ? void 0 === n ? {
            ...e,
            imag: [0, 0],
            real: [0, 0]
        } : {
            ...e,
            imag: Array.from(n, (() => 0)),
            real: n
        } : void 0 === n ? {
            ...e,
            imag: t,
            real: Array.from(t, (() => 0))
        } : {
            ...e,
            imag: t,
            real: n
        }
    }
})), t.register("aH21Y", (function(t, n) {
    e(t.exports, "setValueAtTimeUntilPossible", (function() {
        return r
    }));
    const r = (e, t, n) => {
        try {
            e.setValueAtTime(t, n)
        } catch (o) {
            if (9 !== o.code) throw o;
            r(e, t, n + 1e-7)
        }
    }
})), t.register("2uGOa", (function(t, n) {
    e(t.exports, "testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport", (function() {
        return r
    }));
    const r = e => {
        const t = e.createBufferSource();
        t.start();
        try {
            t.start()
        } catch {
            return !0
        }
        return !1
    }
})), t.register("5kV2a", (function(t, n) {
    e(t.exports, "testAudioBufferSourceNodeStartMethodOffsetClampingSupport", (function() {
        return r
    }));
    const r = e => {
        const t = e.createBufferSource(),
            n = e.createBuffer(1, 1, 44100);
        t.buffer = n;
        try {
            t.start(0, 1)
        } catch {
            return !1
        }
        return !0
    }
})), t.register("fJNth", (function(t, n) {
    e(t.exports, "testAudioBufferSourceNodeStopMethodNullifiedBufferSupport", (function() {
        return r
    }));
    const r = e => {
        const t = e.createBufferSource();
        t.start();
        try {
            t.stop()
        } catch {
            return !1
        }
        return !0
    }
})), t.register("gbL7G", (function(t, n) {
    e(t.exports, "testAudioScheduledSourceNodeStartMethodNegativeParametersSupport", (function() {
        return r
    }));
    const r = e => {
        const t = e.createOscillator();
        try {
            t.start(-1)
        } catch (e) {
            return e instanceof RangeError
        }
        return !1
    }
})), t.register("ig78e", (function(t, n) {
    e(t.exports, "testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport", (function() {
        return r
    }));
    const r = e => {
        const t = e.createBuffer(1, 1, 44100),
            n = e.createBufferSource();
        n.buffer = t, n.start(), n.stop();
        try {
            return n.stop(), !0
        } catch {
            return !1
        }
    }
})), t.register("cHSFE", (function(t, n) {
    e(t.exports, "testAudioScheduledSourceNodeStopMethodNegativeParametersSupport", (function() {
        return r
    }));
    const r = e => {
        const t = e.createOscillator();
        try {
            t.stop(-1)
        } catch (e) {
            return e instanceof RangeError
        }
        return !1
    }
})), t.register("dE0YL", (function(t, n) {
    e(t.exports, "testAudioWorkletNodeOptionsClonability", (function() {
        return r
    }));
    const r = e => {
        const {
            port1: t,
            port2: n
        } = new MessageChannel;
        try {
            t.postMessage(e)
        } finally {
            t.close(), n.close()
        }
    }
})), t.register("93KhB", (function(t, n) {
    e(t.exports, "testDomExceptionConstructorSupport", (function() {
        return r
    }));
    const r = () => {
        try {
            new DOMException
        } catch {
            return !1
        }
        return !0
    }
})), t.register("bUpH6", (function(t, n) {
    e(t.exports, "testTransferablesSupport", (function() {
        return r
    }));
    const r = () => new Promise((e => {
        const t = new ArrayBuffer(0),
            {
                port1: n,
                port2: r
            } = new MessageChannel;
        n.onmessage = ({
            data: t
        }) => e(null !== t), r.postMessage(t, [t])
    }))
})), t.register("9RAJX", (function(t, n) {
    e(t.exports, "wrapAudioBufferSourceNodeStartMethodOffsetClamping", (function() {
        return r
    }));
    const r = e => {
        var t;
        e.start = (t = e.start, (n = 0, r = 0, o) => {
            const i = e.buffer,
                a = null === i ? r : Math.min(i.duration, r);
            null !== i && a > i.duration - .5 / e.context.sampleRate ? t.call(e, n, 0, 0) : t.call(e, n, a, o)
        })
    }
})), t.register("fPYBC", (function(n, r) {
    e(n.exports, "wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls", (function() {
        return i
    }));
    var o = t("dY4pa");
    const i = (e, t) => {
        const n = t.createGain();
        e.connect(n);
        const r = (i = e.disconnect, () => {
            i.call(e, n), e.removeEventListener("ended", r)
        });
        var i;
        e.addEventListener("ended", r), (0, o.interceptConnections)(e, n), e.stop = (t => {
            let r = !1;
            return (o = 0) => {
                if (r) try {
                    t.call(e, o)
                } catch {
                    n.gain.setValueAtTime(0, o)
                } else t.call(e, o), r = !0
            }
        })(e.stop)
    }
})), t.register("8oVbR", (function(t, n) {
    e(t.exports, "wrapEventListener", (function() {
        return r
    }));
    const r = (e, t) => n => {
        const r = {
            value: e
        };
        return Object.defineProperties(n, {
            currentTarget: r,
            target: r
        }), "function" == typeof t ? t.call(e, n) : t.handleEvent.call(e, n)
    }
})), t.register("61ucN", (function(e, n) {
    t("3yCC0"), t("4tLlH"), t("f9UNh"), t("8Tafx"), t("bQ1F4"), t("8DQUV"), t("ffPZt"), t("7BlbN"), t("kDeQ2"), t("gjLs5"), t("47tOC"), t("aDVQI"), t("2t13Z"), t("2b0jn"), t("dz4r9"), t("1Sxat"), t("9Jok2"), t("4vwlh"), t("ha5DH"), t("34wwI"), t("byyYZ"), t("kYPQB"), t("gvhKQ"), t("dxBbx"), t("eT068"), t("gCwyk"), t("5U8Wz"), t("aj8Mq"), t("awbWK"), t("6Gt4R"), t("bDBuB"), t("9xDo8"), t("8jrJF"), t("chXDJ"), t("5ym4o"), t("7mtJQ"), t("2ILUB"), t("9OWj4"), t("5wnTa"), t("hVeZ6"), t("fxx8m"), t("hEnCx"), t("1gUa7"), t("3Uv9P"), t("h3Ony"), t("kSB2U"), t("1GhyG"), t("4R9Xy"), t("5uQ1j"), t("1ccpH"), t("bofyo"), t("9RRF5"), t("lkccm"), t("ikheP"), t("6l6o6"), t("7c4HB"), t("fCx5i"), t("gzDFQ"), t("8RwAi"), t("kHTVV"), t("28ru1"), t("8ZCGH"), t("1CrSI"), t("kqgSn"), t("4njaA"), t("Kfp7Y"), t("cs6vd"), t("61yzc"), t("7PlsY"), t("eh6TX"), t("khqRw"), t("fWEw1"), t("6xHDC"), t("6gMqB"), t("kLT1G"), t("9yaU2"), t("8Z0kH"), t("dL8bD"), t("bZCaO"), t("2zGzO"), t("kUkYv"), t("lCOGw"), t("24G55"), t("47Yjm")
})), t.register("3yCC0", (function(e, t) {})), t.register("4tLlH", (function(e, t) {})), t.register("f9UNh", (function(e, t) {})), t.register("8Tafx", (function(e, t) {})), t.register("bQ1F4", (function(e, t) {})), t.register("8DQUV", (function(e, t) {})), t.register("ffPZt", (function(e, t) {})), t.register("7BlbN", (function(e, t) {})), t.register("kDeQ2", (function(e, t) {})), t.register("gjLs5", (function(e, t) {})), t.register("47tOC", (function(e, t) {})), t.register("aDVQI", (function(e, t) {})), t.register("2t13Z", (function(e, t) {})), t.register("2b0jn", (function(e, t) {})), t.register("dz4r9", (function(e, t) {})), t.register("1Sxat", (function(e, t) {})), t.register("9Jok2", (function(e, t) {})), t.register("4vwlh", (function(e, t) {})), t.register("ha5DH", (function(e, t) {})), t.register("34wwI", (function(e, t) {})), t.register("byyYZ", (function(e, t) {})), t.register("kYPQB", (function(e, t) {})), t.register("gvhKQ", (function(e, t) {})), t.register("dxBbx", (function(e, t) {})), t.register("eT068", (function(e, t) {})), t.register("gCwyk", (function(e, t) {})), t.register("5U8Wz", (function(e, t) {})), t.register("aj8Mq", (function(e, t) {})), t.register("awbWK", (function(e, t) {})), t.register("6Gt4R", (function(e, t) {})), t.register("bDBuB", (function(e, t) {})), t.register("9xDo8", (function(e, t) {})), t.register("8jrJF", (function(e, t) {})), t.register("chXDJ", (function(e, t) {})), t.register("5ym4o", (function(e, t) {})), t.register("7mtJQ", (function(e, t) {})), t.register("2ILUB", (function(e, t) {})), t.register("9OWj4", (function(e, t) {})), t.register("5wnTa", (function(e, t) {})), t.register("hVeZ6", (function(e, t) {})), t.register("fxx8m", (function(e, t) {})), t.register("hEnCx", (function(e, t) {})), t.register("1gUa7", (function(e, t) {})), t.register("3Uv9P", (function(e, t) {})), t.register("h3Ony", (function(e, t) {})), t.register("kSB2U", (function(e, t) {})), t.register("1GhyG", (function(e, t) {})), t.register("4R9Xy", (function(e, t) {})), t.register("5uQ1j", (function(e, t) {})), t.register("1ccpH", (function(e, t) {})), t.register("bofyo", (function(e, t) {})), t.register("9RRF5", (function(e, t) {})), t.register("lkccm", (function(e, t) {})), t.register("ikheP", (function(e, t) {})), t.register("6l6o6", (function(e, t) {})), t.register("7c4HB", (function(e, t) {})), t.register("fCx5i", (function(e, t) {})), t.register("gzDFQ", (function(e, t) {})), t.register("8RwAi", (function(e, t) {})), t.register("kHTVV", (function(e, t) {})), t.register("28ru1", (function(e, t) {})), t.register("8ZCGH", (function(e, t) {})), t.register("1CrSI", (function(e, t) {})), t.register("kqgSn", (function(e, t) {})), t.register("4njaA", (function(e, t) {})), t.register("Kfp7Y", (function(e, t) {})), t.register("cs6vd", (function(e, t) {})), t.register("61yzc", (function(e, t) {})), t.register("7PlsY", (function(e, t) {})), t.register("eh6TX", (function(e, t) {})), t.register("khqRw", (function(e, t) {})), t.register("fWEw1", (function(e, t) {})), t.register("6xHDC", (function(e, t) {})), t.register("6gMqB", (function(e, t) {})), t.register("kLT1G", (function(e, t) {})), t.register("9yaU2", (function(e, t) {})), t.register("8Z0kH", (function(e, t) {})), t.register("dL8bD", (function(e, t) {})), t.register("bZCaO", (function(e, t) {})), t.register("2zGzO", (function(e, t) {})), t.register("kUkYv", (function(e, t) {})), t.register("lCOGw", (function(e, t) {})), t.register("24G55", (function(e, t) {})), t.register("47Yjm", (function(e, t) {})), t.register("1Kf5t", (function(e, n) {
    t("hoeTn"), t("jLmU1"), t("7hwdI"), t("8Q1fn"), t("dJcY8"), t("8Q7pT"), t("aASvx"), t("hC66Q"), t("1jt26"), t("hJpkG"), t("lJTBa"), t("b3GxR"), t("7wM97"), t("hsQg7"), t("lHRqa"), t("2i51L"), t("5w0sl"), t("f9in2"), t("lwugj"), t("kbBAz"), t("dXZCJ"), t("cDfMV"), t("bXAkO"), t("8PjUo"), t("Mwh0Y"), t("2NYGY"), t("fivJF"), t("cCi0y"), t("57lIf"), t("ktIQP"), t("6MjvY"), t("gTs2R"), t("6y5GC"), t("6ARNt"), t("idKee"), t("LKQ4b"), t("69DNm"), t("ftz5O"), t("7jaM4"), t("cjsv6"), t("9lDY8"), t("9KYIJ"), t("2Itu7"), t("hq7SD"), t("f5q5C"), t("kFH3Y"), t("2WRNs"), t("5Or2U"), t("1jLEW"), t("8u8d0"), t("kjgf2"), t("3ikO9"), t("9wJLv"), t("jAn9v"), t("gAO4J"), t("1GVSm"), t("fhKWA"), t("crhH4"), t("gLQr5"), t("hx6Hm"), t("hhGd1"), t("iaYJe"), t("h37m6"), t("g4m7D"), t("gA3bk"), t("hUUVv"), t("ebLev"), t("dzerN"), t("jYMwP"), t("ih3MF"), t("dabL1"), t("ckFl8"), t("dYhgZ"), t("1RcDR"), t("0L0uU"), t("g6urq"), t("bf2cW"), t("aye8Y"), t("9dU5A"), t("hhJbn"), t("bmjvu"), t("ivd5F"), t("i67Pe"), t("5JkEM"), t("lWDVe"), t("ajzHH"), t("8d5GL"), t("a58TY"), t("dKMiU"), t("czhVE"), t("6oySf"), t("e8WUP"), t("1wGww"), t("dEN8H"), t("kTD0I"), t("nkZZi"), t("loojX"), t("7z5fr"), t("7V05p"), t("jSFC0"), t("cGApD"), t("8l8n9"), t("fvOtd"), t("4hpIJ"), t("iG3EA"), t("dFoSJ"), t("6grKd"), t("8aR9F"), t("9JTlc"), t("6UD3Z"), t("k5QuT"), t("bQtkk"), t("47xB7"), t("jPaUs"), t("hwQYn"), t("afQ6Z"), t("drQmz"), t("9Jplp"), t("ltQcN"), t("2GIyD"), t("bQuBl"), t("fcFHh"), t("80nOn"), t("3SaeH"), t("lD0Sb"), t("aRbrA"), t("IMdqc"), t("4zvFm"), t("5DGF8"), t("lNCzd"), t("aaozk"), t("aVYG0"), t("8eKV1"), t("1Aee1"), t("dffTC"), t("2tJzZ"), t("4QT6V"), t("jzu5K"), t("2X4qJ"), t("jtSHT"), t("gj8rD"), t("4E6Fw"), t("9u7I7"), t("M1IRT"), t("kBBzM"), t("bfqBH"), t("kTT1P"), t("9BB6n"), t("ftn23"), t("joBqp"), t("ajIFY"), t("i4mTw"), t("lv4S0"), t("dRuOt"), t("gXagy"), t("iDoi5"), t("hWA7e"), t("2FiY5"), t("74zax"), t("dLlqy"), t("c37ph"), t("2rfnV"), t("ji6dr"), t("cR5jU"), t("2gNQF"), t("8fJ18"), t("7qcjw"), t("iZiJU"), t("gO3PG"), t("lQzRG"), t("dyEON"), t("3F3zs"), t("4PePH"), t("jHQnZ"), t("iGseF"), t("4DqkH"), t("dm1Yd"), t("dBxMe"), t("cq4Kl"), t("fCXHs"), t("eSBdz"), t("8JHXA"), t("cNq98"), t("i6NKN"), t("2ubfb"), t("73vrr"), t("hRZr3"), t("5tgFJ"), t("aCotQ"), t("75j4T"), t("4PekB"), t("8p1WQ"), t("50I5U"), t("6T3uJ"), t("4316m"), t("fGPZN"), t("8wvRC"), t("2SVSY"), t("3bUWI"), t("CPifp"), t("bFjvY"), t("2b7do"), t("lc8R1"), t("40fFH"), t("7IZLs"), t("kp3th"), t("6IM9B"), t("hgjAv"), t("ef1Ma"), t("c4Xc2"), t("2sNqf"), t("4CcWO"), t("8BZ0x"), t("f1CrP"), t("Wgs58"), t("6MgzX"), t("dtwCR"), t("btlR1"), t("ctQo8"), t("1KDlq"), t("8OCkk"), t("gUD87"), t("diP8b"), t("8k2BF"), t("eew5w"), t("3moK0"), t("ffptR"), t("leLfo"), t("92SKB"), t("jERTU"), t("3z1pH"), t("73Lpu"), t("9mTM8"), t("9AdfO"), t("4DiRz"), t("1OBE3"), t("lnHAs"), t("hQtYQ"), t("7B6t5"), t("8OxEQ"), t("h0JNY"), t("kChRS"), t("0v6P5"), t("6ruD9"), t("68qUv"), t("l75Vj"), t("dH5CU"), t("f2k23"), t("427m7"), t("8RJ9P"), t("1whyE"), t("75wV7"), t("95ojP"), t("emHu2"), t("dXKca"), t("e4mjF"), t("8ed0u"), t("kCMUe"), t("eXW7l"), t("hTgOm"), t("7wdpj"), t("98QS0"), t("4wkEb"), t("gYhsf"), t("6GCtW"), t("gc8xM"), t("iL2jH"), t("aV69Z"), t("ldqBN"), t("65UmL"), t("4eu75"), t("iFJgq"), t("iG8po"), t("emAsF"), t("fHc94"), t("bJ7Ih"), t("1zcgc"), t("1GqEf"), t("fGrbF"), t("97un6"), t("ftMEJ"), t("6hXQb"), t("g5oo5"), t("3Fw1y"), t("8qtWU"), t("b2lAx"), t("82LFm"), t("2uroq"), t("4jYWf"), t("kJFYQ"), t("aycr0"), t("6mqAH"), t("8jIdM"), t("dxDSI"), t("lGSd4"), t("vrHMr"), t("fyFi3"), t("36cdL"), t("3TBhE"), t("dd2zK"), t("2rbaC"), t("1SvjR"), t("6aUmd"), t("lQgT0"), t("iye3L"), t("cifPE"), t("64oaW"), t("ffcDq"), t("gajAR"), t("jyGlJ"), t("bze4S"), t("akcNf"), t("5kv1S"), t("60wFR"), t("2P8Pq"), t("gFmwJ"), t("bPCt5"), t("1xhS0"), t("1wYD4"), t("7DVHw"), t("fV86z"), t("dbKmB"), t("78RTu"), t("djuoe"), t("2DRS8"), t("eSU18"), t("jeORh"), t("jnbW2"), t("aEB1Z"), t("gmFlT"), t("jmQJ4"), t("vrAtS"), t("aSeer"), t("3NGtT"), t("fsGQM"), t("kB8LR"), t("eJAF9"), t("ioHbo"), t("79Gog"), t("eUcDx"), t("8drVP"), t("fFiWu"), t("5XFe3"), t("gL46M"), t("6ufO6"), t("kRzCU"), t("bw8La"), t("8wnyn"), t("2zlq0"), t("6Zcyz"), t("76iX8"), t("eZigV"), t("jWQyQ"), t("eSR2k"), t("h55yg"), t("chMr9"), t("d7W0G"), t("5FSDL"), t("e0ysm"), t("33Eje"), t("bNvC0"), t("YuGk2"), t("70QIT"), t("fzkaz"), t("QhQ6O"), t("bnZA9"), t("fHxm8"), t("5UJAN"), t("17xPs"), t("eIJRa"), t("aJtYd"), t("k5FPN"), t("dGu2R"), t("8lFXS"), t("aRSfZ"), t("boghw"), t("H9M5d"), t("BGV1F"), t("9cwFQ"), t("2QO4t"), t("9tTxV"), t("e4vz0"), t("ls5dU"), t("82Sn2"), t("3S4qW"), t("8TLgq"), t("jbpX0"), t("58QOC"), t("8KU8l"), t("jacNi"), t("3lHRf"), t("lVvFc"), t("65T5E"), t("hPiI8"), t("lkHam")
})), t.register("hoeTn", (function(e, t) {})), t.register("jLmU1", (function(e, t) {})), t.register("7hwdI", (function(e, t) {})), t.register("8Q1fn", (function(e, t) {})), t.register("dJcY8", (function(e, t) {})), t.register("8Q7pT", (function(e, t) {})), t.register("aASvx", (function(e, t) {})), t.register("hC66Q", (function(e, t) {})), t.register("1jt26", (function(e, t) {})), t.register("hJpkG", (function(e, t) {})), t.register("lJTBa", (function(e, t) {})), t.register("b3GxR", (function(e, t) {})), t.register("7wM97", (function(e, t) {})), t.register("hsQg7", (function(e, t) {})), t.register("lHRqa", (function(e, t) {})), t.register("2i51L", (function(e, t) {})), t.register("5w0sl", (function(e, t) {})), t.register("f9in2", (function(e, t) {})), t.register("lwugj", (function(e, t) {})), t.register("kbBAz", (function(e, t) {})), t.register("dXZCJ", (function(e, t) {})), t.register("cDfMV", (function(e, t) {})), t.register("bXAkO", (function(e, t) {})), t.register("8PjUo", (function(e, t) {})), t.register("Mwh0Y", (function(e, t) {})), t.register("2NYGY", (function(e, t) {})), t.register("fivJF", (function(e, t) {})), t.register("cCi0y", (function(e, t) {})), t.register("57lIf", (function(e, t) {})), t.register("ktIQP", (function(e, t) {})), t.register("6MjvY", (function(e, t) {})), t.register("gTs2R", (function(e, t) {})), t.register("6y5GC", (function(e, t) {})), t.register("6ARNt", (function(e, t) {})), t.register("idKee", (function(e, t) {})), t.register("LKQ4b", (function(e, t) {})), t.register("69DNm", (function(e, t) {})), t.register("ftz5O", (function(e, t) {})), t.register("7jaM4", (function(e, t) {})), t.register("cjsv6", (function(e, t) {})), t.register("9lDY8", (function(e, t) {})), t.register("9KYIJ", (function(e, t) {})), t.register("2Itu7", (function(e, t) {})), t.register("hq7SD", (function(e, t) {})), t.register("f5q5C", (function(e, t) {})), t.register("kFH3Y", (function(e, t) {})), t.register("2WRNs", (function(e, t) {})), t.register("5Or2U", (function(e, t) {})), t.register("1jLEW", (function(e, t) {})), t.register("8u8d0", (function(e, t) {})), t.register("kjgf2", (function(e, t) {})), t.register("3ikO9", (function(e, t) {})), t.register("9wJLv", (function(e, t) {})), t.register("jAn9v", (function(e, t) {})), t.register("gAO4J", (function(e, t) {})), t.register("1GVSm", (function(e, t) {})), t.register("fhKWA", (function(e, t) {})), t.register("crhH4", (function(e, t) {})), t.register("gLQr5", (function(e, t) {})), t.register("hx6Hm", (function(e, t) {})), t.register("hhGd1", (function(e, t) {})), t.register("iaYJe", (function(e, t) {})), t.register("h37m6", (function(e, t) {})), t.register("g4m7D", (function(e, t) {})), t.register("gA3bk", (function(e, t) {})), t.register("hUUVv", (function(e, t) {})), t.register("ebLev", (function(e, t) {})), t.register("dzerN", (function(e, t) {})), t.register("jYMwP", (function(e, t) {})), t.register("ih3MF", (function(e, t) {})), t.register("dabL1", (function(e, t) {})), t.register("ckFl8", (function(e, t) {})), t.register("dYhgZ", (function(e, t) {})), t.register("1RcDR", (function(e, t) {})), t.register("0L0uU", (function(e, t) {})), t.register("g6urq", (function(e, t) {})), t.register("bf2cW", (function(e, t) {})), t.register("aye8Y", (function(e, t) {})), t.register("9dU5A", (function(e, t) {})), t.register("hhJbn", (function(e, t) {})), t.register("bmjvu", (function(e, t) {})), t.register("ivd5F", (function(e, t) {})), t.register("i67Pe", (function(e, t) {})), t.register("5JkEM", (function(e, t) {})), t.register("lWDVe", (function(e, t) {})), t.register("ajzHH", (function(e, t) {})), t.register("8d5GL", (function(e, t) {})), t.register("a58TY", (function(e, t) {})), t.register("dKMiU", (function(e, t) {})), t.register("czhVE", (function(e, t) {})), t.register("6oySf", (function(e, t) {})), t.register("e8WUP", (function(e, t) {})), t.register("1wGww", (function(e, t) {})), t.register("dEN8H", (function(e, t) {})), t.register("kTD0I", (function(e, t) {})), t.register("nkZZi", (function(e, t) {})), t.register("loojX", (function(e, t) {})), t.register("7z5fr", (function(e, t) {})), t.register("7V05p", (function(e, t) {})), t.register("jSFC0", (function(e, t) {})), t.register("cGApD", (function(e, t) {})), t.register("8l8n9", (function(e, t) {})), t.register("fvOtd", (function(e, t) {})), t.register("4hpIJ", (function(e, t) {})), t.register("iG3EA", (function(e, t) {})), t.register("dFoSJ", (function(e, t) {})), t.register("6grKd", (function(e, t) {})), t.register("8aR9F", (function(e, t) {})), t.register("9JTlc", (function(e, t) {})), t.register("6UD3Z", (function(e, t) {})), t.register("k5QuT", (function(e, t) {})), t.register("bQtkk", (function(e, t) {})), t.register("47xB7", (function(e, t) {})), t.register("jPaUs", (function(e, t) {})), t.register("hwQYn", (function(e, t) {})), t.register("afQ6Z", (function(e, t) {})), t.register("drQmz", (function(e, t) {})), t.register("9Jplp", (function(e, t) {})), t.register("ltQcN", (function(e, t) {})), t.register("2GIyD", (function(e, t) {})), t.register("bQuBl", (function(e, t) {})), t.register("fcFHh", (function(e, t) {})), t.register("80nOn", (function(e, t) {})), t.register("3SaeH", (function(e, t) {})), t.register("lD0Sb", (function(e, t) {})), t.register("aRbrA", (function(e, t) {})), t.register("IMdqc", (function(e, t) {})), t.register("4zvFm", (function(e, t) {})), t.register("5DGF8", (function(e, t) {})), t.register("lNCzd", (function(e, t) {})), t.register("aaozk", (function(e, t) {})), t.register("aVYG0", (function(e, t) {})), t.register("8eKV1", (function(e, t) {})), t.register("1Aee1", (function(e, t) {})), t.register("dffTC", (function(e, t) {})), t.register("2tJzZ", (function(e, t) {})), t.register("4QT6V", (function(e, t) {})), t.register("jzu5K", (function(e, t) {})), t.register("2X4qJ", (function(e, t) {})), t.register("jtSHT", (function(e, t) {})), t.register("gj8rD", (function(e, t) {})), t.register("4E6Fw", (function(e, t) {})), t.register("9u7I7", (function(e, t) {})), t.register("M1IRT", (function(e, t) {})), t.register("kBBzM", (function(e, t) {})), t.register("bfqBH", (function(e, t) {})), t.register("kTT1P", (function(e, t) {})), t.register("9BB6n", (function(e, t) {})), t.register("ftn23", (function(e, t) {})), t.register("joBqp", (function(e, t) {})), t.register("ajIFY", (function(e, t) {})), t.register("i4mTw", (function(e, t) {})), t.register("lv4S0", (function(e, t) {})), t.register("dRuOt", (function(e, t) {})), t.register("gXagy", (function(e, t) {})), t.register("iDoi5", (function(e, t) {})), t.register("hWA7e", (function(e, t) {})), t.register("2FiY5", (function(e, t) {})), t.register("74zax", (function(e, t) {})), t.register("dLlqy", (function(e, t) {})), t.register("c37ph", (function(e, t) {})), t.register("2rfnV", (function(e, t) {})), t.register("ji6dr", (function(e, t) {})), t.register("cR5jU", (function(e, t) {})), t.register("2gNQF", (function(e, t) {})), t.register("8fJ18", (function(e, t) {})), t.register("7qcjw", (function(e, t) {})), t.register("iZiJU", (function(e, t) {})), t.register("gO3PG", (function(e, t) {})), t.register("lQzRG", (function(e, t) {})), t.register("dyEON", (function(e, t) {})), t.register("3F3zs", (function(e, t) {})), t.register("4PePH", (function(e, t) {})), t.register("jHQnZ", (function(e, t) {})), t.register("iGseF", (function(e, t) {})), t.register("4DqkH", (function(e, t) {})), t.register("dm1Yd", (function(e, t) {})), t.register("dBxMe", (function(e, t) {})), t.register("cq4Kl", (function(e, t) {})), t.register("fCXHs", (function(e, t) {})), t.register("eSBdz", (function(e, t) {})), t.register("8JHXA", (function(e, t) {})), t.register("cNq98", (function(e, t) {})), t.register("i6NKN", (function(e, t) {})), t.register("2ubfb", (function(e, t) {})), t.register("73vrr", (function(e, t) {})), t.register("hRZr3", (function(e, t) {})), t.register("5tgFJ", (function(e, t) {})), t.register("aCotQ", (function(e, t) {})), t.register("75j4T", (function(e, t) {})), t.register("4PekB", (function(e, t) {})), t.register("8p1WQ", (function(e, t) {})), t.register("50I5U", (function(e, t) {})), t.register("6T3uJ", (function(e, t) {})), t.register("4316m", (function(e, t) {})), t.register("fGPZN", (function(e, t) {})), t.register("8wvRC", (function(e, t) {})), t.register("2SVSY", (function(e, t) {})), t.register("3bUWI", (function(e, t) {})), t.register("CPifp", (function(e, t) {})), t.register("bFjvY", (function(e, t) {})), t.register("2b7do", (function(e, t) {})), t.register("lc8R1", (function(e, t) {})), t.register("40fFH", (function(e, t) {})), t.register("7IZLs", (function(e, t) {})), t.register("kp3th", (function(e, t) {})), t.register("6IM9B", (function(e, t) {})), t.register("hgjAv", (function(e, t) {})), t.register("ef1Ma", (function(e, t) {})), t.register("c4Xc2", (function(e, t) {})), t.register("2sNqf", (function(e, t) {})), t.register("4CcWO", (function(e, t) {})), t.register("8BZ0x", (function(e, t) {})), t.register("f1CrP", (function(e, t) {})), t.register("Wgs58", (function(e, t) {})), t.register("6MgzX", (function(e, t) {})), t.register("dtwCR", (function(e, t) {})), t.register("btlR1", (function(e, t) {})), t.register("ctQo8", (function(e, t) {})), t.register("1KDlq", (function(e, t) {})), t.register("8OCkk", (function(e, t) {})), t.register("gUD87", (function(e, t) {})), t.register("diP8b", (function(e, t) {})), t.register("8k2BF", (function(e, t) {})), t.register("eew5w", (function(e, t) {})), t.register("3moK0", (function(e, t) {})), t.register("ffptR", (function(e, t) {})), t.register("leLfo", (function(e, t) {}));
t.register("92SKB", (function(e, t) {})), t.register("jERTU", (function(e, t) {})), t.register("3z1pH", (function(e, t) {})), t.register("73Lpu", (function(e, t) {})), t.register("9mTM8", (function(e, t) {})), t.register("9AdfO", (function(e, t) {})), t.register("4DiRz", (function(e, t) {})), t.register("1OBE3", (function(e, t) {})), t.register("lnHAs", (function(e, t) {})), t.register("hQtYQ", (function(e, t) {})), t.register("7B6t5", (function(e, t) {})), t.register("8OxEQ", (function(e, t) {})), t.register("h0JNY", (function(e, t) {})), t.register("kChRS", (function(e, t) {})), t.register("0v6P5", (function(e, t) {})), t.register("6ruD9", (function(e, t) {})), t.register("68qUv", (function(e, t) {})), t.register("l75Vj", (function(e, t) {})), t.register("dH5CU", (function(e, t) {})), t.register("f2k23", (function(e, t) {})), t.register("427m7", (function(e, t) {})), t.register("8RJ9P", (function(e, t) {})), t.register("1whyE", (function(e, t) {})), t.register("75wV7", (function(e, t) {})), t.register("95ojP", (function(e, t) {})), t.register("emHu2", (function(e, t) {})), t.register("dXKca", (function(e, t) {})), t.register("e4mjF", (function(e, t) {})), t.register("8ed0u", (function(e, t) {})), t.register("kCMUe", (function(e, t) {})), t.register("eXW7l", (function(e, t) {})), t.register("hTgOm", (function(e, t) {})), t.register("7wdpj", (function(e, t) {})), t.register("98QS0", (function(e, t) {})), t.register("4wkEb", (function(e, t) {})), t.register("gYhsf", (function(e, t) {})), t.register("6GCtW", (function(e, t) {})), t.register("gc8xM", (function(e, t) {})), t.register("iL2jH", (function(e, t) {})), t.register("aV69Z", (function(e, t) {})), t.register("ldqBN", (function(e, t) {})), t.register("65UmL", (function(e, t) {})), t.register("4eu75", (function(e, t) {})), t.register("iFJgq", (function(e, t) {})), t.register("iG8po", (function(e, t) {})), t.register("emAsF", (function(e, t) {})), t.register("fHc94", (function(e, t) {})), t.register("bJ7Ih", (function(e, t) {})), t.register("1zcgc", (function(e, t) {})), t.register("1GqEf", (function(e, t) {})), t.register("fGrbF", (function(e, t) {})), t.register("97un6", (function(e, t) {})), t.register("ftMEJ", (function(e, t) {})), t.register("6hXQb", (function(e, t) {})), t.register("g5oo5", (function(e, t) {})), t.register("3Fw1y", (function(e, t) {})), t.register("8qtWU", (function(e, t) {})), t.register("b2lAx", (function(e, t) {})), t.register("82LFm", (function(e, t) {})), t.register("2uroq", (function(e, t) {})), t.register("4jYWf", (function(e, t) {})), t.register("kJFYQ", (function(e, t) {})), t.register("aycr0", (function(e, t) {})), t.register("6mqAH", (function(e, t) {})), t.register("8jIdM", (function(e, t) {})), t.register("dxDSI", (function(e, t) {})), t.register("lGSd4", (function(e, t) {})), t.register("vrHMr", (function(e, t) {})), t.register("fyFi3", (function(e, t) {})), t.register("36cdL", (function(e, t) {})), t.register("3TBhE", (function(e, t) {})), t.register("dd2zK", (function(e, t) {})), t.register("2rbaC", (function(e, t) {})), t.register("1SvjR", (function(e, t) {})), t.register("6aUmd", (function(e, t) {})), t.register("lQgT0", (function(e, t) {})), t.register("iye3L", (function(e, t) {})), t.register("cifPE", (function(e, t) {})), t.register("64oaW", (function(e, t) {})), t.register("ffcDq", (function(e, t) {})), t.register("gajAR", (function(e, t) {})), t.register("jyGlJ", (function(e, t) {})), t.register("bze4S", (function(e, t) {})), t.register("akcNf", (function(e, t) {})), t.register("5kv1S", (function(e, t) {})), t.register("60wFR", (function(e, t) {})), t.register("2P8Pq", (function(e, t) {})), t.register("gFmwJ", (function(e, t) {})), t.register("bPCt5", (function(e, t) {})), t.register("1xhS0", (function(e, t) {})), t.register("1wYD4", (function(e, t) {})), t.register("7DVHw", (function(e, t) {})), t.register("fV86z", (function(e, t) {})), t.register("dbKmB", (function(e, t) {})), t.register("78RTu", (function(e, t) {})), t.register("djuoe", (function(e, t) {})), t.register("2DRS8", (function(e, t) {})), t.register("eSU18", (function(e, t) {})), t.register("jeORh", (function(e, t) {})), t.register("jnbW2", (function(e, t) {})), t.register("aEB1Z", (function(e, t) {})), t.register("gmFlT", (function(e, t) {})), t.register("jmQJ4", (function(e, t) {})), t.register("vrAtS", (function(e, t) {})), t.register("aSeer", (function(e, t) {})), t.register("3NGtT", (function(e, t) {})), t.register("fsGQM", (function(e, t) {})), t.register("kB8LR", (function(e, t) {})), t.register("eJAF9", (function(e, t) {})), t.register("ioHbo", (function(e, t) {})), t.register("79Gog", (function(e, t) {})), t.register("eUcDx", (function(e, t) {})), t.register("8drVP", (function(e, t) {})), t.register("fFiWu", (function(e, t) {})), t.register("5XFe3", (function(e, t) {})), t.register("gL46M", (function(e, t) {})), t.register("6ufO6", (function(e, t) {})), t.register("kRzCU", (function(e, t) {})), t.register("bw8La", (function(e, t) {})), t.register("8wnyn", (function(e, t) {})), t.register("2zlq0", (function(e, t) {})), t.register("6Zcyz", (function(e, t) {})), t.register("76iX8", (function(e, t) {})), t.register("eZigV", (function(e, t) {})), t.register("jWQyQ", (function(e, t) {})), t.register("eSR2k", (function(e, t) {})), t.register("h55yg", (function(e, t) {})), t.register("chMr9", (function(e, t) {})), t.register("d7W0G", (function(e, t) {})), t.register("5FSDL", (function(e, t) {})), t.register("e0ysm", (function(e, t) {})), t.register("33Eje", (function(e, t) {})), t.register("bNvC0", (function(e, t) {})), t.register("YuGk2", (function(e, t) {})), t.register("70QIT", (function(e, t) {})), t.register("fzkaz", (function(e, t) {})), t.register("QhQ6O", (function(e, t) {})), t.register("bnZA9", (function(e, t) {})), t.register("fHxm8", (function(e, t) {})), t.register("5UJAN", (function(e, t) {})), t.register("17xPs", (function(e, t) {})), t.register("eIJRa", (function(e, t) {})), t.register("aJtYd", (function(e, t) {})), t.register("k5FPN", (function(e, t) {})), t.register("dGu2R", (function(e, t) {})), t.register("8lFXS", (function(e, t) {})), t.register("aRSfZ", (function(e, t) {})), t.register("boghw", (function(e, t) {})), t.register("H9M5d", (function(e, t) {})), t.register("BGV1F", (function(e, t) {})), t.register("9cwFQ", (function(e, t) {})), t.register("2QO4t", (function(e, t) {})), t.register("9tTxV", (function(e, t) {})), t.register("e4vz0", (function(e, t) {})), t.register("ls5dU", (function(e, t) {})), t.register("82Sn2", (function(e, t) {})), t.register("3S4qW", (function(e, t) {})), t.register("8TLgq", (function(e, t) {})), t.register("jbpX0", (function(e, t) {})), t.register("58QOC", (function(e, t) {})), t.register("8KU8l", (function(e, t) {})), t.register("jacNi", (function(e, t) {})), t.register("3lHRf", (function(e, t) {})), t.register("lVvFc", (function(e, t) {})), t.register("65T5E", (function(e, t) {})), t.register("hPiI8", (function(e, t) {})), t.register("lkHam", (function(e, t) {})), t.register("cdIYa", (function(n, r) {
    e(n.exports, "createWebmPcmMediaRecorderFactory", (function() {
        return s
    }));
    var o = t("8wn2Z"),
        i = t("ePM61"),
        a = t("byttE");
    const s = (e, t, n, r, s) => (c, u, l, d) => {
        const f = l.getAudioTracks(),
            p = [],
            h = 0 === f.length ? void 0 : f[0].getSettings().channelCount,
            g = new u(l, {
                mimeType: "audio/webm;codecs=pcm"
            }),
            v = 0 === f.length ? void 0 : f[0].getSettings().sampleRate;
        let m = null,
            y = () => {};
        const x = t => {
                c.dispatchEvent(e("dataavailable", {
                    data: new Blob(t, {
                        type: d
                    })
                }))
            },
            C = async (e, t) => {
                const n = await (0, o.encode)(e, t);
                "inactive" === g.state ? p.push(...n) : (x(n), m = C(e, t))
            }, N = () => {
                "inactive" !== g.state && (null !== m && (m.catch((() => {})), m = null), y(), y = () => {}, g.stop())
            };
        return g.addEventListener("error", (() => {
            N(), c.dispatchEvent(new ErrorEvent("error", {
                error: t()
            }))
        })), g.addEventListener("start", (() => c.dispatchEvent(new Event("start")))), {
            get mimeType() {
                return d
            },
            get state() {
                return g.state
            },
            pause: () => g.pause(),
            resume: () => g.resume(),
            start(e) {
                if (l.getVideoTracks().length > 0) throw n();
                if ("inactive" === g.state) {
                    if (void 0 === v) throw new Error("The sampleRate is not defined.");
                    let t = !1,
                        n = !1,
                        u = 0,
                        l = (0, o.instantiate)(d, v);
                    y = () => {
                        n = !0
                    };
                    const f = (0, a.on)(g, "dataavailable")((({
                        data: e
                    }) => {
                        u += 1, l = l.then((async ({
                            dataView: a = null,
                            elementType: l = null,
                            encoderId: d,
                            port: v
                        }) => {
                            const m = await e.arrayBuffer();
                            u -= 1;
                            const y = null === a ? new(0, i.MultiBufferDataView)([m]) : new(0, i.MultiBufferDataView)([...a.buffers, m], a.byteOffset);
                            if (!t && "recording" === g.state && !n) {
                                const e = s(y, 0);
                                if (null === e) return {
                                    dataView: y,
                                    elementType: l,
                                    encoderId: d,
                                    port: v
                                };
                                const {
                                    value: n
                                } = e;
                                if (172351395 !== n) return {
                                    dataView: a,
                                    elementType: l,
                                    encoderId: d,
                                    port: v
                                };
                                t = !0
                            }
                            const {
                                currentElementType: C,
                                offset: N,
                                contents: A
                            } = r(y, l, h), w = N < y.byteLength ? new(0, i.MultiBufferDataView)(y.buffers, y.byteOffset + N) : null;
                            return A.forEach((e => v.postMessage(e, e.map((({
                                buffer: e
                            }) => e))))), 0 !== u || "inactive" !== g.state && !n || ((0, o.encode)(d, null).then((e => {
                                x([...p, ...e]), p.length = 0, c.dispatchEvent(new Event("stop"))
                            })), v.postMessage([]), v.close(), f()), {
                                dataView: w,
                                elementType: C,
                                encoderId: d,
                                port: v
                            }
                        }))
                    }));
                    void 0 !== e && l.then((({
                        encoderId: t
                    }) => m = C(t, e)))
                }
                g.start(100)
            },
            stop: N
        }
    }
})), t.register("ePM61", (function(e, n) {
    e.exports,
        function(e, t, n, r) {
            function o(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var i = o(t),
                a = o(n),
                s = o(r);

            function c(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = u(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, i = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function u(e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var d = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    if (a.default(this, e), n < 0 || void 0 !== r && r < 0) throw new RangeError;
                    var o = t.reduce((function(e, t) {
                        return e + t.byteLength
                    }), 0);
                    if (n > o || void 0 !== r && n + r > o) throw new RangeError;
                    var i, s = [],
                        u = void 0 === r ? o - n : r,
                        l = [],
                        d = 0,
                        f = n,
                        p = c(t);
                    try {
                        for (p.s(); !(i = p.n()).done;) {
                            var h = i.value;
                            if (0 === l.length)
                                if (h.byteLength > f) {
                                    var g = (d = h.byteLength - f) > u ? u : d;
                                    s.push(new DataView(h, f, g)), l.push(h)
                                } else f -= h.byteLength;
                            else if (d < u) {
                                var v = (d += h.byteLength) > u ? h.byteLength - d + u : h.byteLength;
                                s.push(new DataView(h, 0, v)), l.push(h)
                            }
                        }
                    } catch (e) {
                        p.e(e)
                    } finally {
                        p.f()
                    }
                    this._buffers = l, this._byteLength = u, this._byteOffset = f, this._dataViews = s, this._internalBuffer = new DataView(new ArrayBuffer(8))
                }
                return s.default(e, [{
                    key: "buffers",
                    get: function() {
                        return this._buffers
                    }
                }, {
                    key: "byteLength",
                    get: function() {
                        return this._byteLength
                    }
                }, {
                    key: "byteOffset",
                    get: function() {
                        return this._byteOffset
                    }
                }, {
                    key: "getFloat32",
                    value: function(e, t) {
                        return this._internalBuffer.setUint8(0, this.getUint8(e + 0)), this._internalBuffer.setUint8(1, this.getUint8(e + 1)), this._internalBuffer.setUint8(2, this.getUint8(e + 2)), this._internalBuffer.setUint8(3, this.getUint8(e + 3)), this._internalBuffer.getFloat32(0, t)
                    }
                }, {
                    key: "getFloat64",
                    value: function(e, t) {
                        return this._internalBuffer.setUint8(0, this.getUint8(e + 0)), this._internalBuffer.setUint8(1, this.getUint8(e + 1)), this._internalBuffer.setUint8(2, this.getUint8(e + 2)), this._internalBuffer.setUint8(3, this.getUint8(e + 3)), this._internalBuffer.setUint8(4, this.getUint8(e + 4)), this._internalBuffer.setUint8(5, this.getUint8(e + 5)), this._internalBuffer.setUint8(6, this.getUint8(e + 6)), this._internalBuffer.setUint8(7, this.getUint8(e + 7)), this._internalBuffer.getFloat64(0, t)
                    }
                }, {
                    key: "getInt16",
                    value: function(e, t) {
                        return this._internalBuffer.setUint8(0, this.getUint8(e + 0)), this._internalBuffer.setUint8(1, this.getUint8(e + 1)), this._internalBuffer.getInt16(0, t)
                    }
                }, {
                    key: "getInt32",
                    value: function(e, t) {
                        return this._internalBuffer.setUint8(0, this.getUint8(e + 0)), this._internalBuffer.setUint8(1, this.getUint8(e + 1)), this._internalBuffer.setUint8(2, this.getUint8(e + 2)), this._internalBuffer.setUint8(3, this.getUint8(e + 3)), this._internalBuffer.getInt32(0, t)
                    }
                }, {
                    key: "getInt8",
                    value: function(e) {
                        var t = this._findDataViewWithOffset(e),
                            n = i.default(t, 2),
                            r = n[0],
                            o = n[1];
                        return r.getInt8(e - o)
                    }
                }, {
                    key: "getUint16",
                    value: function(e, t) {
                        return this._internalBuffer.setUint8(0, this.getUint8(e + 0)), this._internalBuffer.setUint8(1, this.getUint8(e + 1)), this._internalBuffer.getUint16(0, t)
                    }
                }, {
                    key: "getUint32",
                    value: function(e, t) {
                        return this._internalBuffer.setUint8(0, this.getUint8(e + 0)), this._internalBuffer.setUint8(1, this.getUint8(e + 1)), this._internalBuffer.setUint8(2, this.getUint8(e + 2)), this._internalBuffer.setUint8(3, this.getUint8(e + 3)), this._internalBuffer.getUint32(0, t)
                    }
                }, {
                    key: "getUint8",
                    value: function(e) {
                        var t = this._findDataViewWithOffset(e),
                            n = i.default(t, 2),
                            r = n[0],
                            o = n[1];
                        return r.getUint8(e - o)
                    }
                }, {
                    key: "setFloat32",
                    value: function(e, t, n) {
                        this._internalBuffer.setFloat32(0, t, n), this.setUint8(e, this._internalBuffer.getUint8(0)), this.setUint8(e + 1, this._internalBuffer.getUint8(1)), this.setUint8(e + 2, this._internalBuffer.getUint8(2)), this.setUint8(e + 3, this._internalBuffer.getUint8(3))
                    }
                }, {
                    key: "setFloat64",
                    value: function(e, t, n) {
                        this._internalBuffer.setFloat64(0, t, n), this.setUint8(e, this._internalBuffer.getUint8(0)), this.setUint8(e + 1, this._internalBuffer.getUint8(1)), this.setUint8(e + 2, this._internalBuffer.getUint8(2)), this.setUint8(e + 3, this._internalBuffer.getUint8(3)), this.setUint8(e + 4, this._internalBuffer.getUint8(4)), this.setUint8(e + 5, this._internalBuffer.getUint8(5)), this.setUint8(e + 6, this._internalBuffer.getUint8(6)), this.setUint8(e + 7, this._internalBuffer.getUint8(7))
                    }
                }, {
                    key: "setInt16",
                    value: function(e, t, n) {
                        this._internalBuffer.setInt16(0, t, n), this.setUint8(e, this._internalBuffer.getUint8(0)), this.setUint8(e + 1, this._internalBuffer.getUint8(1))
                    }
                }, {
                    key: "setInt32",
                    value: function(e, t, n) {
                        this._internalBuffer.setInt32(0, t, n), this.setUint8(e, this._internalBuffer.getUint8(0)), this.setUint8(e + 1, this._internalBuffer.getUint8(1)), this.setUint8(e + 2, this._internalBuffer.getUint8(2)), this.setUint8(e + 3, this._internalBuffer.getUint8(3))
                    }
                }, {
                    key: "setInt8",
                    value: function(e, t) {
                        var n = this._findDataViewWithOffset(e),
                            r = i.default(n, 2),
                            o = r[0],
                            a = r[1];
                        o.setInt8(e - a, t)
                    }
                }, {
                    key: "setUint16",
                    value: function(e, t, n) {
                        this._internalBuffer.setUint16(0, t, n), this.setUint8(e, this._internalBuffer.getUint8(0)), this.setUint8(e + 1, this._internalBuffer.getUint8(1))
                    }
                }, {
                    key: "setUint32",
                    value: function(e, t, n) {
                        this._internalBuffer.setUint32(0, t, n), this.setUint8(e, this._internalBuffer.getUint8(0)), this.setUint8(e + 1, this._internalBuffer.getUint8(1)), this.setUint8(e + 2, this._internalBuffer.getUint8(2)), this.setUint8(e + 3, this._internalBuffer.getUint8(3))
                    }
                }, {
                    key: "setUint8",
                    value: function(e, t) {
                        var n = this._findDataViewWithOffset(e),
                            r = i.default(n, 2),
                            o = r[0],
                            a = r[1];
                        o.setUint8(e - a, t)
                    }
                }, {
                    key: "_findDataViewWithOffset",
                    value: function(e) {
                        var t, n = 0,
                            r = c(this._dataViews);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var o = t.value,
                                    i = n + o.byteLength;
                                if (e >= n && e < i) return [o, n];
                                n = i
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        throw new RangeError
                    }
                }]), e
            }();
            e.MultiBufferDataView = d, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(e.exports, t("cDEii"), t("kOoQ8"), t("k14uy"))
})), t.register("cDEii", (function(e, n) {
    var r = t("kQKrp"),
        o = t("dk1HQ"),
        i = t("1SoKa"),
        a = t("lpcQN");
    e.exports = function(e, t) {
        return r(e) || o(e, t) || i(e, t) || a()
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("kQKrp", (function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("dk1HQ", (function(e, t) {
    e.exports = function(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, o, i, a, s = [],
                c = !0,
                u = !1;
            try {
                if (i = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    c = !1
                } else
                    for (; !(c = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
            } catch (e) {
                u = !0, o = e
            } finally {
                try {
                    if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                } finally {
                    if (u) throw o
                }
            }
            return s
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("1SoKa", (function(e, n) {
    var r = t("9GWtJ");
    e.exports = function(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("9GWtJ", (function(e, t) {
    e.exports = function(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("lpcQN", (function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("kOoQ8", (function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("k14uy", (function(e, n) {
    var r = t("emmyL");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, r(o.key), o)
        }
    }
    e.exports = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("emmyL", (function(e, n) {
    var r = t("4YLac").default,
        o = t("4KhOl");
    e.exports = function(e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("4YLac", (function(e, t) {
    function n(t) {
        return e.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t)
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("4KhOl", (function(e, n) {
    var r = t("4YLac").default;
    e.exports = function(e, t) {
        if ("object" !== r(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" !== r(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
})), t.register("fhqBi", (function(t, n) {
    e(t.exports, "createWindow", (function() {
        return r
    }));
    const r = () => "undefined" == typeof window ? null : window
})), t.register("5aSyY", (function(t, n) {
    e(t.exports, "readVariableSizeIntegerLength", (function() {
        return r
    }));
    const r = (e, t) => {
        if (t >= e.byteLength) return null;
        const n = e.getUint8(t);
        if (n > 127) return 1;
        if (n > 63) return 2;
        if (n > 31) return 3;
        if (n > 15) return 4;
        if (n > 7) return 5;
        if (n > 3) return 6;
        if (n > 1) return 7;
        if (n > 0) return 8;
        const o = r(e, t + 1);
        return null === o ? null : o + 8
    }
})), t.register("kqaFr", (function(t, n) {
    e(t.exports, "wrapEventListener", (function() {
        return r
    }));
    const r = (e, t) => n => {
        const r = {
            value: e
        };
        return Object.defineProperties(n, {
            currentTarget: r,
            target: r
        }), "function" == typeof t ? t.call(e, n) : t.handleEvent.call(e, n)
    }
})), t.register("9ABEw", (function(e, n) {
    t("bE4TX"), t("02jtF"), t("8Groh"), t("cIxOo"), t("58A9T"), t("cqCiE"), t("iAQkq"), t("frL8b")
})), t.register("bE4TX", (function(e, t) {})), t.register("02jtF", (function(e, t) {})), t.register("8Groh", (function(e, t) {})), t.register("cIxOo", (function(e, t) {})), t.register("58A9T", (function(e, t) {})), t.register("cqCiE", (function(e, t) {})), t.register("iAQkq", (function(e, t) {})), t.register("frL8b", (function(e, t) {})), t.register("9qj3B", (function(e, n) {
    t("bocjS"), t("kUV1u"), t("jLZAs"), t("fLqnZ"), t("kCSeC"), t("9ZID5"), t("9HbOU"), t("erU8J"), t("bkvis"), t("hGvjy"), t("6r81e"), t("4eJkZ"), t("ePX0p"), t("hsE8Z"), t("lLunO"), t("iGjNZ"), t("9Tktk"), t("b8HuL"), t("4OOTO"), t("fnRqa"), t("4ZHhW"), t("hpCHA"), t("iDxSO"), t("l70I9"), t("6kHcf"), t("hw04Z"), t("e0fRp"), t("3q7nq"), t("bOpFN"), t("vdmKK"), t("fkN3P"), t("1G0CV"), t("amHAM"), t("jZPYj"), t("ihEsh"), t("4rwbm"), t("igUpt"), t("6ni6F"), t("biBds")
})), t.register("bocjS", (function(e, t) {})), t.register("kUV1u", (function(e, t) {})), t.register("jLZAs", (function(e, t) {})), t.register("fLqnZ", (function(e, t) {})), t.register("kCSeC", (function(e, t) {})), t.register("9ZID5", (function(e, t) {})), t.register("9HbOU", (function(e, t) {})), t.register("erU8J", (function(e, t) {})), t.register("bkvis", (function(e, t) {})), t.register("hGvjy", (function(e, t) {})), t.register("6r81e", (function(e, t) {})), t.register("4eJkZ", (function(e, t) {})), t.register("ePX0p", (function(e, t) {})), t.register("hsE8Z", (function(e, t) {})), t.register("lLunO", (function(e, t) {})), t.register("iGjNZ", (function(e, t) {})), t.register("9Tktk", (function(e, t) {})), t.register("b8HuL", (function(e, t) {})), t.register("4OOTO", (function(e, t) {})), t.register("fnRqa", (function(e, t) {})), t.register("4ZHhW", (function(e, t) {})), t.register("hpCHA", (function(e, t) {})), t.register("iDxSO", (function(e, t) {})), t.register("l70I9", (function(e, t) {})), t.register("6kHcf", (function(e, t) {})), t.register("hw04Z", (function(e, t) {})), t.register("e0fRp", (function(e, t) {})), t.register("3q7nq", (function(e, t) {})), t.register("bOpFN", (function(e, t) {})), t.register("vdmKK", (function(e, t) {})), t.register("fkN3P", (function(e, t) {})), t.register("1G0CV", (function(e, t) {})), t.register("amHAM", (function(e, t) {})), t.register("jZPYj", (function(e, t) {})), t.register("ihEsh", (function(e, t) {})), t.register("4rwbm", (function(e, t) {})), t.register("igUpt", (function(e, t) {})), t.register("6ni6F", (function(e, t) {})), t.register("biBds", (function(e, t) {})), t.register("5PnQu", (function(n, r) {
    e(n.exports, "connect", (function() {
        return u
    }));
    var o = t("eCE4r"),
        i = t("7Ceya");
    const a = new Blob([i.worker], {
            type: "application/javascript; charset=utf-8"
        }),
        s = URL.createObjectURL(a),
        c = (0, o.load)(s),
        u = (c.characterize, c.connect);
    c.disconnect, c.encode, c.isSupported, c.record;
    URL.revokeObjectURL(s)
})), t.register("eCE4r", (function(n, r) {
    e(n.exports, "load", (function() {
        return a
    }));
    var o = t("gMNno");
    t("2ei5x"), t("eInkP");
    const i = (0, o.createBroker)({
            characterize: ({
                call: e
            }) => () => e("characterize"),
            encode: ({
                call: e
            }) => (t, n) => e("encode", {
                recordingId: t,
                timeslice: n
            }),
            record: ({
                call: e
            }) => async (t, n, r) => {
                await e("record", {
                    recordingId: t,
                    sampleRate: n,
                    typedArrays: r
                }, r.map((({
                    buffer: e
                }) => e)))
            }
        }),
        a = e => {
            const t = new Worker(e);
            return i(t)
        }
})), t.register("2ei5x", (function(e, n) {
    t("l5qk9")
})), t.register("l5qk9", (function(e, t) {})), t.register("eInkP", (function(e, n) {
    t("k1Xke"), t("bvC5m"), t("2ve5j")
})), t.register("k1Xke", (function(e, t) {})), t.register("bvC5m", (function(e, t) {})), t.register("2ve5j", (function(e, t) {})), t.register("7Ceya", (function(t, n) {
    e(t.exports, "worker", (function() {
        return r
    }));
    const r = '(()=>{var e={775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t),a=o(r),i=o(n),u=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?a.default(e):"prependIndefiniteArticle"===t?"".concat(i.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},l=function(e,t){for(var r=/\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var a={modifiers:[],name:o[1]};if(void 0!==o[3])for(var i=/\\.[^(]+\\(\\)/g,l=i.exec(o[2]);null!==l;)a.modifiers.push(l[0].slice(1,-2)),l=i.exec(o[2]);n.push(a),o=r.exec(e)}var d=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(c(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(s.default(e),[u(t[r.name],r.modifiers),n]):[].concat(s.default(e),[function(e){return u(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(s.default(e),s.default(t))}),[])}),[e]);return function(e){return d.reduce((function(t,r){return[].concat(s.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:l(e.code,t),n=void 0===e.message?void 0:l(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,s=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=s.cause,i=s.missingParameters,u=void 0===n?new Error:new Error(n(i));return null!==a&&(u.cause=a),void 0!==r&&(u.code=r(i)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=d,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(106),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),s=["honest","hour","hono"];for(t in s)if(0==o.indexOf(s[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t},768:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},907:(e,t,r)=>{var n=r(768);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},642:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},344:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},106:(e,t,r)=>{var n=r(907),o=r(642),s=r(906),a=r(344);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},906:(e,t,r)=>{var n=r(768);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,s=(0,e.compile)({message:\'The requested method called "${method}" is not supported.\',status:o}),a=(0,e.compile)({message:\'The handler of the method called "${method}" returned no required result.\',status:t}),i=(0,e.compile)({message:\'The handler of the method called "${method}" returned an unexpected result.\',status:t}),u=(0,e.compile)({message:\'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.\',status:n}),c=(e,t)=>async r=>{let{data:{id:n,method:o,params:u}}=r;const c=t[o];try{if(void 0===c)throw s({method:o});const t=void 0===u?c():c(u);if(void 0===t)throw a({method:o});const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw i({method:o})}else{if(void 0===r.result)throw i({method:o});const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}};var l=r(107);const d=new Map,f=(e,t,r)=>({...t,connect:r=>{let{port:n}=r;n.start();const o=e(n,t),s=(0,l.generateUniqueNumber)(d);return d.set(s,(()=>{o(),n.close(),d.delete(s)})),{result:s}},disconnect:e=>{let{portId:t}=e;const r=d.get(t);if(void 0===r)throw u({portId:t.toString()});return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0;const n=f(p,t,r),o=c(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},m=e=>e.reduce(((e,t)=>e+t.length),0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let o=0;o<t;o+=1){const t=e[o];void 0===r[o]&&(r[o]=[]);const s=t.shift();if(void 0===s)break e;r[o].push(s),0===o&&(n+=s.length)}}if(n>t){const o=n-t;r.forEach(((t,r)=>{const n=t.pop(),s=n.length-o;t.push(n.subarray(0,s)),e[r].unshift(n.subarray(s))}))}return r},v=new Map,g=(e=>(t,r,n)=>{const o=e.get(t);if(void 0===o){const o={channelDataArrays:n.map((e=>[e])),isComplete:!0,sampleRate:r};return e.set(t,o),o}return o.channelDataArrays.forEach(((e,t)=>e.push(n[t]))),o})(v),x=((e,t)=>(r,n,o,s)=>{const a=o>>3,i="subsequent"===n?0:44,u=r.length,c=e(r[0]),l=new ArrayBuffer(c*u*a+i),d=new DataView(l);return"subsequent"!==n&&t(d,o,u,"complete"===n?c:Number.POSITIVE_INFINITY,s),r.forEach(((e,t)=>{let r=i+t*a;e.forEach((e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=u*a}}))})),[l]})(m,((e,t,r,n,o)=>{const s=t>>3,a=Math.min(n*r*s,4294967251);e.setUint32(0,1380533830),e.setUint32(4,a+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,o,!0),e.setUint32(28,o*r*s,!0),e.setUint16(32,r*s,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,a,!0)})),w=new Map;p(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:e=>{let{recordingId:t,timeslice:r}=e;const n=w.get(t);void 0!==n&&(w.delete(t),n.reject(new Error("Another request was made to initiate an encoding.")));const o=v.get(t);if(null!==r){if(void 0===o||m(o.channelDataArrays[0])*(1e3/o.sampleRate)<r)return new Promise(((e,n)=>{w.set(t,{reject:n,resolve:e,timeslice:r})}));const e=h(o.channelDataArrays,Math.ceil(r*(o.sampleRate/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,o.sampleRate);return o.isComplete=!1,{result:n,transferables:n}}if(void 0!==o){const e=x(o.channelDataArrays,o.isComplete?"complete":"subsequent",16,o.sampleRate);return v.delete(t),{result:e,transferables:e}}return{result:[],transferables:[]}},record:e=>{let{recordingId:t,sampleRate:r,typedArrays:n}=e;const o=g(t,r,n),s=w.get(t);if(void 0!==s&&m(o.channelDataArrays[0])*(1e3/r)>=s.timeslice){const e=h(o.channelDataArrays,Math.ceil(s.timeslice*(r/1e3))),n=x(e,o.isComplete?"initial":"subsequent",16,r);o.isComplete=!1,w.delete(t),s.resolve({result:n,transferables:n})}return{result:null}}})})()})();'
})), t.register("1nYp9", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("hxEiv"),
        i = t("93yIm"),
        a = t("fBuQJ"),
        s = t("fywoC"),
        c = t("Ebz5x");
    var u = e => {
        const [t, n] = s.useState(e.latex), r = s.useCallback((() => {
            e.onChange(t), e.close()
        }), [t, e.onChange, e.close]);
        return (0, o.jsx)(a.default, {
            open: e.visible,
            width: 670,
            closable: !1,
            destroyOnClose: !0,
            style: {
                top: 20
            },
            onCancel: e.close,
            footer: (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(i.default, {
                    onClick: e.close,
                    children: "Cancel"
                }), e.latex ? (0, o.jsx)(i.default, {
                    onClick: () => {
                        e.onChange(void 0), e.close()
                    },
                    children: "Remove Equation"
                }) : null, (0, o.jsx)(i.default, {
                    type: "primary",
                    onClick: r,
                    children: e.latex ? "Update" : "Insert"
                })]
            }),
            children: (0, o.jsx)(c.default, {
                latex: e.latex,
                onChange: n
            })
        })
    }
})), t.register("Ebz5x", (function(n, r) {
    e(n.exports, "default", (function() {
        return h
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        a = t("mS2fe"),
        s = t("2FDaO"),
        c = t("lKmIF"),
        u = t("69SUA");
    let l, d, f, p = e => e;
    var h = e => {
        const t = i.useRef(),
            [n, r] = i.useState(e.latex);
        return i.useEffect((() => {
            const n = new(0, a.MathfieldElement)({
                virtualKeyboardMode: "off"
            });
            e.latex && n.setValue(e.latex), document.body.style.setProperty("--keyboard-zindex", "1000"), n.addEventListener("mount", (() => {
                n.focus(), n.virtualKeyboardState = "visible"
            })), n.addEventListener("input", (t => {
                var o;
                if ("insertLineBreak" === t.inputType) null == e || null === (o = e.onComplete) || void 0 === o || o.call(e);
                else {
                    const t = n.getValue("latex");
                    r(t), e.onChange && e.onChange(t)
                }
            })), n.addEventListener("unmount", (() => {
                n.virtualKeyboardState = "hidden"
            })), t.current.appendChild(n)
        }), []), (0, o.jsxs)(g, {
            children: [(0, o.jsx)(v, {
                ref: t
            }), (null == n ? void 0 : n.length) ? null : (0, o.jsx)(m, {
                children: "Enter math..."
            })]
        })
    };
    const g = s.default.div(l || (l = p`
  position: relative;
`)),
        v = s.default.div(d || (d = p`
  math-field {
    font-size: 32px;
    color: ${0};
    padding: 15px;
    outline: #40a9ff auto 2px; // Color of the AntD focus outline
  }
`), c.default.Black),
        m = s.default.div(f || (f = p`
  position: absolute;
  top: 23px;
  left: 16px;
  font-family: ${0};
  font-style: italic;
  color: #bfbfbf;
  font-size: 18px;
  pointer-events: none;
`), u.Fonts.SFPro)
})), t.register("6jIfW", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("dnh3u"),
        i = t("fywoC"),
        a = t("kSQzU"),
        s = t("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "CameraOutlined";
    var u = i.forwardRef(c)
})), t.register("kSQzU", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"
                }
            }]
        },
        name: "camera",
        theme: "outlined"
    }
})), t.register("7RWiL", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("dnh3u"),
        i = t("fywoC"),
        a = t("7FzWP"),
        s = t("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "FunctionOutlined";
    var u = i.forwardRef(c)
})), t.register("7FzWP", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "defs",
                attrs: {},
                children: [{
                    tag: "style",
                    attrs: {}
                }]
            }, {
                tag: "path",
                attrs: {
                    d: "M841 370c3-3.3 2.7-8.3-.6-11.3a8.24 8.24 0 00-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6a7.96 7.96 0 01-13.4-1.9l-63.5-141.3a7.9 7.9 0 00-7.3-4.7H380.7l.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415a8.07 8.07 0 007.8 9.7H284l-89 429.9a8.07 8.07 0 007.8 9.7H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 .9.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6a8.02 8.02 0 007.2-11.5l-95.2-198.9c-1.4-2.9-.9-6.4 1.3-8.8L841 370z"
                }
            }]
        },
        name: "function",
        theme: "outlined"
    }
})), t.register("cqSvC", (function(n, r) {
    e(n.exports, "default", (function() {
        return m
    }));
    var o = t("hxEiv"),
        i = t("fywoC"),
        a = t("h8HTy"),
        s = t("2FDaO"),
        c = t("lKmIF"),
        u = t("69SUA"),
        l = t("b1wB5"),
        d = t("iUwFC"),
        f = t("iMOcM"),
        p = t("h0NTP");
    let h;
    const g = (0, t("lpEVe").observer)((e => {
            const t = e.question.type === d.QuestionType.multipleChoice,
                n = e.question.type === d.QuestionType.textInput;
            return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(v, {
                    children: (0, f.plural)("Answer", e.question.answers.length)
                }), e.question.answers.map(((r, s) => (0, o.jsxs)(i.Fragment, {
                    children: [(0, o.jsx)(a.default, {
                        questionType: e.question.type,
                        onCorrectChange: t => ((t, n) => e.question.answers = e.question.answers.map(((e, r) => r !== t ? e : {
                            ...e,
                            correct: n
                        })))(s, t),
                        onTextChange: t => ((t, n) => e.question.answers = e.question.answers.map(((e, r) => r !== t ? e : {
                            ...e,
                            text: n
                        })))(s, t),
                        text: r.text,
                        correct: r.correct,
                        image: r.image,
                        latex: r.latex,
                        textType: r.textType,
                        onImageChange: t => ((t, n) => e.question.answers = e.question.answers.map(((e, r) => r !== t ? e : {
                            ...e,
                            image: n
                        })))(s, t),
                        onLatexChange: t => ((t, n) => e.question.answers = e.question.answers.map(((e, r) => r !== t ? e : {
                            ...e,
                            latex: n
                        })))(s, t),
                        onTextTypeChange: t => {
                            ((t, n) => {
                                e.question.answers = e.question.answers.map(((e, r) => r !== t ? e : {
                                    ...e,
                                    textType: n
                                }))
                            })(s, t)
                        },
                        allowPhoto: t && !e.imagesBlocked,
                        allowLatex: t && !e.latexBlocked,
                        blockChangingCorrect: n,
                        canRemove: s > 0 && n || s > 1,
                        onRemove: () => (t => {
                            e.question.answers = e.question.answers.filter(((e, n) => t !== n))
                        })(s),
                        onPressEnter: e.onPressEnter
                    }), (0, o.jsx)("div", {
                        style: {
                            height: 10
                        }
                    })]
                }, `answer-${s}`))), e.question.answers.length < 4 && (0, o.jsx)(p.default, {
                    style: {
                        fontSize: 14,
                        marginLeft: e.question.type === d.QuestionType.textInput ? 0 : 38,
                        opacity: .7,
                        cursor: "pointer",
                        marginTop: -4,
                        fontStyle: "italic"
                    },
                    onClick: () => e.question.answers.push((0, l.defaultAnswer)(!t)),
                    children: "Add another answer"
                })]
            })
        })),
        v = s.default.div(h || (h = (e => e)`
  color: ${0};
  font-family: ${0};
  font-weight: ${0};
  font-size: 23px;
  margin-bottom: 2px;
`), c.default.Black, u.Fonts.SFPro, u.FontWeights.UltraBold);
    var m = g
})), t.register("h8HTy", (function(n, r) {
    e(n.exports, "default", (function() {
        return O
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("2FDaO"),
        a = t("93yIm"),
        s = t("gnAdP"),
        c = t("lqzWa"),
        u = t("2TdZR"),
        l = t("7Jt5L"),
        d = t("fK8ya"),
        f = t("6jIfW"),
        p = t("eqjGW"),
        h = t("68irI"),
        g = t("9g8O0"),
        v = t("90RCV"),
        m = t("7RWiL"),
        y = t("iMOcM"),
        x = t("1nYp9"),
        C = t("lKmIF"),
        N = t("fgoFz"),
        A = t("iUwFC");
    let w, b, S = e => e;
    a.default;
    const E = e => {
        const t = {
            twoToneColor: e.correct ? "#4caf50" : "#f44336",
            style: {
                cursor: "pointer",
                marginRight: 10
            },
            onClick: e.onClick
        };
        return e.correct ? (0, o.jsx)(p.default, {
            ...t
        }) : (0, o.jsx)(h.default, {
            ...t
        })
    };
    var O = e => {
        const [t, n, r] = (0, y.useBoolean)(!1), [i, a, p] = (0, y.useBoolean)(!1);
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsxs)(_, {
                children: [e.questionType === A.QuestionType.textInput ? (0, o.jsxs)(c.default, {
                    value: e.textType || A.TextInputAnswerType.exact,
                    size: "large",
                    style: {
                        marginRight: 10,
                        width: 120
                    },
                    onChange: e.onTextTypeChange,
                    children: [(0, o.jsx)(c.default.Option, {
                        value: A.TextInputAnswerType.exact,
                        children: "Is Exactly"
                    }), (0, o.jsx)(c.default.Option, {
                        value: A.TextInputAnswerType.contains,
                        children: "Contains"
                    })]
                }) : (0, o.jsx)(E, {
                    correct: e.correct,
                    onClick: () => {
                        e.blockChangingCorrect || e.onCorrectChange && e.onCorrectChange(!e.correct)
                    }
                }), (() => {
                    const t = [{
                        key: "add-image",
                        label: "Add Image",
                        onClick: n,
                        icon: (0, o.jsx)(f.default, {}),
                        disabled: !(e.allowPhoto && !e.image && !e.latex && !e.text)
                    }, {
                        key: "add-latex",
                        label: "Add Equation",
                        onClick: a,
                        icon: (0, o.jsx)(m.default, {}),
                        disabled: !(e.allowLatex && !e.image && !e.latex && !e.text)
                    }, {
                        key: "remove",
                        label: "Remove Answer",
                        onClick: e.onRemove,
                        icon: (0, o.jsx)(g.default, {}),
                        disabled: !e.canRemove,
                        danger: !0
                    }];
                    return (0, o.jsxs)("div", {
                        className: "maxWidth flex vc between",
                        children: [e.image ? (0, o.jsx)(d.default, {
                            image: e.image,
                            size: 40,
                            blockModalOpen: !0,
                            onClick: n,
                            showBorder: !0
                        }) : e.latex ? (0, o.jsx)(M, {
                            onClick: a,
                            children: (0, o.jsx)(N.default, {
                                latex: e.latex
                            })
                        }) : (0, o.jsx)(u.default, {
                            value: e.text,
                            onPressEnter: e.onPressEnter,
                            onTextChange: e.onTextChange,
                            placeholder: (e.correct ? "Correct" : "Incorrect") + " answer...",
                            disabled: !1
                        }), (0, o.jsx)(s.default, {
                            menu: {
                                items: t
                            },
                            trigger: ["hover"],
                            children: (0, o.jsx)(v.default, {
                                style: {
                                    marginLeft: 10,
                                    fontSize: 23,
                                    cursor: "pointer"
                                }
                            })
                        })]
                    })
                })()]
            }), (0, o.jsx)(l.default, {
                visible: t,
                close: r,
                currentImage: e.image,
                onImageChange: e.onImageChange
            }), (0, o.jsx)(x.default, {
                visible: i,
                close: p,
                latex: e.latex,
                onChange: e.onLatexChange
            })]
        })
    };
    const _ = i.default.div.attrs({
            className: "flex maxWidth vc"
        })(w || (w = S`
  font-size: 28px;
  span {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`)),
        M = i.default.div(b || (b = S`
  cursor: pointer;
  font-size: 16px;
  color: ${0};
  padding: 5px 21px;
  border: 2px dashed ${0};
  border-radius: 6px;
`), C.default.Black, C.default.BorderGray)
})), t.register("eqjGW", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("dnh3u"),
        i = t("fywoC"),
        a = t("lO6NN"),
        s = t("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "CheckCircleTwoTone";
    var u = i.forwardRef(c)
})), t.register("lO6NN", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: function(e, t) {
            return {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                        fill: e
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",
                        fill: t
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                        fill: e
                    }
                }]
            }
        },
        name: "check-circle",
        theme: "twotone"
    }
})), t.register("68irI", (function(n, r) {
    e(n.exports, "default", (function() {
        return u
    }));
    var o = t("dnh3u"),
        i = t("fywoC"),
        a = t("7gVA5"),
        s = t("dwKuN"),
        c = function(e, t) {
            return i.createElement(s.default, (0, o.default)((0, o.default)({}, e), {}, {
                ref: t,
                icon: a.default
            }))
        };
    c.displayName = "CloseCircleTwoTone";
    var u = i.forwardRef(c)
})), t.register("7gVA5", (function(t, n) {
    e(t.exports, "default", (function() {
        return r
    }));
    var r = {
        icon: function(e, t) {
            return {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                        fill: e
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z",
                        fill: t
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",
                        fill: e
                    }
                }]
            }
        },
        name: "close-circle",
        theme: "twotone"
    }
})), t.register("kcrfp", (function(n, r) {
    e(n.exports, "default", (function() {
        return s
    }));
    var o = t("hxEiv");
    t("fywoC");
    var i = t("93yIm"),
        a = t("5RLZo");
    var s = e => {
        const t = (0, o.jsx)(i.default, {
            loading: e.loading,
            type: "primary",
            disabled: e.disabled,
            onClick: e.onClick,
            children: e.label
        });
        return e.disabledMessage ? (0, o.jsx)(a.default, {
            title: e.disabledMessage,
            children: t
        }) : t
    }
})), t.register("jnwv3", (function(n, r) {
    e(n.exports, "canAddQuestionErrorMessage", (function() {
        return a
    })), e(n.exports, "default", (function() {
        return s
    }));
    var o = t("iUwFC");
    const i = "Question must have text, audio, image, or an equation",
        a = e => {
            if (e.text) {
                if (!e.text.trim()) return i
            } else if (!e.audio && !e.image && !e.latex) return i;
            if (e.image && e.latex) return "Question cannot contain an image and equation.";
            const t = e.answers.filter((e => {
                var t;
                return !!(null === (t = e.text) || void 0 === t ? void 0 : t.trim()) || !(!e.image && !e.latex)
            }));
            return e.type === o.QuestionType.multipleChoice && t.length < 2 ? "Question must have at least two answers." : t.length < 1 ? "Question must have at least one answer." : null
        };
    var s = e => null === a(e)
}));