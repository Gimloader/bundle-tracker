import {
    r as V,
    o as bs,
    I as Ee,
    _ as xe,
    e as me,
    j as h,
    U as Ie,
    a as en,
    S as tr,
    C as nr,
    f as rr,
    i as tn,
    a$ as gt,
    a4 as sr,
    B as te,
    b as se,
    D as Vt,
    F as Me,
    aw as or,
    ax as ar,
    bJ as Cs,
    h as _s,
    M as ir,
    u as De,
    R as Es,
    q as xs
} from "./_index.js";
import {
    o as vt
} from "./mobxreact.esm.js";
import {
    b as ne,
    c as Ft,
    T as It
} from "./Question.js";
import {
    I as nn,
    R as As
} from "./index-3.js";
import {
    T as Ts
} from "./index-5.js";
import {
    s as zt
} from "./index-4.js";
import {
    U as Ms
} from "./index-20.js";
import {
    U as cr
} from "./App-2.js";
import {
    A as yn
} from "./AccessibleAnchor.js";
import {
    g as lr
} from "./getCloudinaryUrl.js";
import {
    D as ur
} from "./index-6.js";
import {
    I as dr
} from "./ImagePreview.js";
import {
    R as Ss
} from "./SaveOutlined.js";
import {
    R as Rs
} from "./PlayCircleOutlined.js";
import {
    R as fr
} from "./DeleteOutlined.js";
import {
    v as ks
} from "./mathlive.min.js";
import {
    L as hr
} from "./LazyLatexRenderer.js";
import {
    S as Nt
} from "./index-8.js";
import {
    D as Is
} from "./index-10.js";
import {
    T as Ns
} from "./Tooltip.js";
import {
    R as Ot
} from "./index-13.js";

function Os(e, t) {
    return V.useState(function() {
        return bs(e(), t, {
            autoBind: !0
        })
    })[0]
}
var js = {
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
    },
    Ps = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: js
        }))
    },
    mr = V.forwardRef(Ps),
    Ls = {
        icon: function(t, n) {
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
                        fill: t
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",
                        fill: n
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                        fill: t
                    }
                }]
            }
        },
        name: "check-circle",
        theme: "twotone"
    },
    Bs = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: Ls
        }))
    },
    Us = V.forwardRef(Bs),
    Ds = {
        icon: function(t, n) {
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
                        fill: t
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z",
                        fill: n
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",
                        fill: t
                    }
                }]
            }
        },
        name: "close-circle",
        theme: "twotone"
    },
    Ws = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: Ds
        }))
    },
    Vs = V.forwardRef(Ws),
    Fs = {
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
    },
    zs = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: Fs
        }))
    },
    pr = V.forwardRef(zs),
    qs = {
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
    },
    $s = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: qs
        }))
    },
    Gs = V.forwardRef($s),
    Hs = {
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
    },
    Xs = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: Hs
        }))
    },
    Qs = V.forwardRef(Xs),
    Ys = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 00324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z"
                }
            }]
        },
        name: "read",
        theme: "outlined"
    },
    Ks = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: Ys
        }))
    },
    Zs = V.forwardRef(Ks),
    Js = {
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
    },
    eo = function(t, n) {
        return V.createElement(Ee, xe({}, t, {
            ref: n,
            icon: Js
        }))
    },
    to = V.forwardRef(eo);
const he = e => {
    const t = {
        ...e.style,
        fontFamily: Ie.SFPro,
        color: e.style && e.style.color ? e.style.color : me.Black
    };
    return h.jsx("div", {
        onClick: e.onClick ? e.onClick : () => !1,
        style: t,
        children: e.children
    })
};
class no extends V.Component {
    constructor() {
        super(...arguments), this.state = {
            loading: !1
        }, this.uploadImage = ({
            file: t
        }) => {
            const n = new FormData;
            n.append("file", t), this.setState({
                loading: !0
            }), en({
                url: "/api/games/image/add",
                method: "post",
                data: n,
                success: r => {
                    this.setState({
                        loading: !1
                    }), this.props.onPhotoUploaded(r.url)
                },
                error: r => {
                    this.setState({
                        loading: !1
                    }), zt.error("Error uploading. Please try again.")
                }
            })
        }, this.fileIsSmallEnough = t => {
            const n = t.size / 1024 / 1024 < 5;
            return n || zt.error("Photo must be less than 5MB"), n
        }
    }
    render() {
        return h.jsx(h.Fragment, {
            children: h.jsx("div", {
                style: {
                    width: "100%",
                    height: 300
                },
                children: h.jsx(Ms.Dragger, {
                    customRequest: this.uploadImage,
                    multiple: !1,
                    accept: "image/*",
                    beforeUpload: this.fileIsSmallEnough,
                    children: this.state.loading ? h.jsx(tr, {
                        size: "large"
                    }) : h.jsxs(h.Fragment, {
                        children: [h.jsx("p", {
                            className: "ant-upload-drag-icon",
                            children: h.jsx(Gs, {})
                        }), h.jsx("p", {
                            className: "ant-upload-text",
                            children: "Click or drag to upload a photo!"
                        }), h.jsx("p", {
                            className: "ant-upload-hint",
                            children: "Photo must be less than 5MB."
                        })]
                    })
                })
            })
        })
    }
}
const ro = h.jsx(h.Fragment, {
        children: "Add audio with Pro"
    }),
    so = h.jsxs(h.Fragment, {
        children: ["Record your voice and have the audio played each time a student goes to answer this question. ", h.jsxs("b", {
            children: ["To add audio, upgrade to ", nr, " Pro."]
        })]
    }),
    oo = h.jsx(h.Fragment, {
        children: "Upload images with Pro"
    }),
    ao = h.jsxs(h.Fragment, {
        children: ["To add your own images to questions, ", h.jsxs("b", {
            children: ["upgrade to ", nr, " Pro."]
        })]
    }),
    jt = gt.TabPane,
    io = nn.Search,
    gr = 464,
    co = e => {
        const t = () => {
            e.onSelect(e.details.url)
        };
        return h.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            },
            children: [h.jsx(fo, {
                className: "lightShadow mediumShadowOnHover",
                url: e.details.url,
                isMiddle: e.isMiddle,
                onClick: t
            }), h.jsx("a", {
                target: "_blank",
                href: e.details.creator.link,
                style: {
                    marginBottom: 10,
                    width: 146
                },
                children: h.jsxs(he, {
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
        })
    };
class lo extends V.Component {
    constructor() {
        super(...arguments), this.state = {
            loading: !1,
            error: !1,
            imageResults: [],
            customLinkUrl: "",
            searchCount: 0,
            currentTabKey: this.props.blockImageSearch ? "2" : "1",
            upgradeModalOpen: !1
        }, this.onSearch = t => {
            this.setState({
                imageResults: []
            }), this.requestImages(t)
        }, this.requestImages = t => {
            this.setState({
                loading: !0
            }), en({
                method: "POST",
                url: "/api/v1/editor/images",
                data: {
                    searchQuery: t
                },
                success: n => this.setState({
                    imageResults: n.photos,
                    searchCount: this.state.searchCount + 1
                }),
                error: () => this.setState({
                    error: !0
                }),
                both: () => this.setState({
                    loading: !1
                })
            })
        }, this.onImageChange = t => {
            const n = t.target.value,
                r = new Image;
            r.onload = () => {
                this.setState({
                    customLinkUrl: n
                })
            }, r.src = n
        }, this.onPickCustomImage = () => this.props.onImagePicked(this.state.customLinkUrl), this.onImageUploaded = t => this.props.onImagePicked(t), this.handleTabClick = t => {
            if (t === "3" && !rr() && !tn()) {
                this.setState({
                    upgradeModalOpen: !0
                });
                return
            }
            this.setState({
                currentTabKey: t
            })
        }, this.closeUpgradeModal = () => this.setState({
            upgradeModalOpen: !1
        }), this.getContent = () => h.jsxs(h.Fragment, {
            children: [h.jsx(he, {
                style: {
                    fontWeight: 900,
                    fontSize: this.props.titleFontSize || 38,
                    marginBottom: this.props.titleBottomMargin || 0
                },
                children: this.props.title
            }), h.jsxs(gt, {
                type: "card",
                activeKey: this.state.currentTabKey,
                onTabClick: this.handleTabClick,
                children: [!this.props.blockImageSearch && h.jsxs(jt, {
                    tab: "Photo Search",
                    children: [h.jsx(io, {
                        placeholder: "Search photos...",
                        size: "large",
                        enterButton: !0,
                        style: {
                            width: gr,
                            marginBottom: 10,
                            marginTop: -3
                        },
                        autoFocus: this.props.autoFocus,
                        onSearch: this.onSearch
                    }), this.state.loading && h.jsx("div", {
                        style: {
                            marginTop: 5
                        },
                        children: h.jsx(tr, {
                            size: "large"
                        })
                    }), this.state.error && h.jsx(sr, {
                        message: "Error",
                        description: "There was an error searching from our image provider. Please try again later or enter a link.",
                        type: "error",
                        showIcon: !0
                    }), !this.state.loading && this.props.imageSearchDefaultText && this.state.searchCount === 0 && h.jsxs("div", {
                        className: "flex hc vc flex-column",
                        style: {
                            color: me.Black,
                            marginTop: 10
                        },
                        children: [h.jsx(As, {
                            style: {
                                fontSize: 50,
                                marginBottom: 5
                            }
                        }), h.jsx("div", {
                            style: {
                                fontSize: 15,
                                textAlign: "center"
                            },
                            children: this.props.imageSearchDefaultText
                        })]
                    }), !this.state.loading && this.state.searchCount !== 0 && !this.state.error && this.state.imageResults.length === 0 && h.jsxs("div", {
                        className: "flex hc vc flex-column",
                        style: {
                            color: me.Black,
                            marginTop: 10
                        },
                        children: [h.jsx(Qs, {
                            style: {
                                fontSize: 50,
                                marginBottom: 5
                            }
                        }), h.jsx("div", {
                            style: {
                                fontSize: 15,
                                textAlign: "center"
                            },
                            children: this.state.searchCount === 1 ? "No images found. Try searching for something!" : "No results found."
                        })]
                    }), h.jsxs(uo, {
                        children: [this.state.imageResults.map((t, n) => h.jsx(co, {
                            details: t,
                            isMiddle: (n - 1) % 3 === 0,
                            onSelect: this.props.onImagePicked
                        }, t.url)), this.state.imageResults.length ? h.jsxs("div", {
                            className: "flex-column flex-center maxWidth",
                            style: {
                                marginTop: 10
                            },
                            children: [h.jsx("div", {
                                children: h.jsx(yn, {
                                    to: "https://www.pexels.com",
                                    external: !0,
                                    target: "_blank",
                                    children: "Photos provided by Pexels"
                                })
                            }), h.jsx(yn, {
                                to: "https://www.pexels.com",
                                external: !0,
                                target: "_blank",
                                children: h.jsx("img", {
                                    src: "https://images.pexels.com/lib/api/pexels.png",
                                    style: {
                                        height: 55,
                                        marginTop: 6
                                    }
                                })
                            })]
                        }) : null]
                    })]
                }, "1"), h.jsxs(jt, {
                    tab: "Link",
                    children: [h.jsx(nn, {
                        size: "large",
                        placeholder: "Image link",
                        style: {
                            marginTop: -3
                        },
                        onChange: this.onImageChange
                    }), h.jsx(te, {
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
                }, "2"), this.props.allowUpload && h.jsx(jt, {
                    tab: "Upload",
                    children: h.jsx(no, {
                        onPhotoUploaded: this.onImageUploaded
                    })
                }, "3")]
            })]
        })
    }
    componentDidMount() {
        this.props.defaultSearchTerm && this.requestImages(this.props.defaultSearchTerm)
    }
    render() {
        return h.jsxs(h.Fragment, {
            children: [this.getContent(), h.jsx(cr, {
                id: "upload image",
                visible: this.state.upgradeModalOpen,
                close: this.closeUpgradeModal,
                copy: {
                    title: oo,
                    description: ao
                }
            })]
        })
    }
}
const uo = se.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  width: ${()=>gr}px;
`,
    fo = se.div`
  height: 146px;
  width: 146px;
  background-image: url(${e=>e.url});
  background-size: cover;
  background-position: center;
  margin-bottom: 3px;
  border-radius: 5px;
  margin-right: ${e=>e.isMiddle?13:0}px;
  margin-left: ${e=>e.isMiddle?13:0}px;
  cursor: pointer;
`,
    ho = vt(e => {
        const t = V.useCallback(s => {
                s.target.value === ne.multipleChoice && r(), s.target.value === ne.textInput && n()
            }, []),
            n = () => {
                const s = e.question.answers.filter(o => o.correct && o.text && !o.image);
                s.length ? e.question.answers = s : e.question.answers = [Re(!0)], e.question.type = ne.textInput
            },
            r = () => {
                const s = e.question.answers.filter((o, a) => a <= 3);
                e.question.answers = s;
                for (let o = s.length; o < 4; o++) e.question.answers.push(Re(!1));
                e.question.type = ne.multipleChoice
            };
        return h.jsxs(h.Fragment, {
            children: [h.jsxs(mo, {
                children: [h.jsx("div", {}), h.jsx("div", {
                    children: h.jsxs(Ot.Group, {
                        onChange: t,
                        value: e.question.type,
                        children: [h.jsx(Ot, {
                            value: ne.multipleChoice,
                            children: h.jsx("span", {
                                style: bn,
                                children: "Multiple Choice"
                            })
                        }), h.jsx(Ot, {
                            value: ne.textInput,
                            children: h.jsx("span", {
                                style: bn,
                                children: "Text Input"
                            })
                        })]
                    })
                })]
            }), h.jsx(Vt, {
                style: {
                    marginTop: 16,
                    marginBottom: 11
                }
            })]
        })
    }),
    bn = {
        fontFamily: Ie.SFPro
    },
    mo = se.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,
    Cn = [{
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
    }],
    po = se.div`
  margin-top: 1px;
`,
    {
        TabPane: go
    } = gt,
    vo = e => {
        const [t, n] = V.useState(Cn[0].name), r = s => {
            e == null || e.onSymbolSelected(s), e == null || e.focusInput()
        };
        return h.jsx(po, {
            children: h.jsx(gt, {
                onChange: n,
                activeKey: t,
                tabPosition: e.tabPosition || "top",
                children: Cn.map(s => h.jsx(go, {
                    tab: s.name,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: 255
                    },
                    className: "scroll",
                    children: s.characters.map(o => h.jsx(te, {
                        style: {
                            margin: 2
                        },
                        size: "small",
                        onClick: () => r(o),
                        children: o
                    }, `${s.name}-${o}`))
                }, s.name))
            })
        })
    },
    wo = 220,
    vr = e => {
        const t = V.useRef(),
            [n, r] = V.useState(!1),
            s = i => {
                e.onTextChange(i.target.value)
            },
            o = i => {
                n && r(!1), s(i)
            },
            a = () => {
                r(!0), t.current.focus()
            },
            c = () => {
                var i;
                (i = t.current) == null || i.focus()
            };
        return h.jsxs("div", {
            style: {
                width: "100%"
            },
            children: [h.jsx(nn, {
                ref: t,
                onPressEnter: e.onPressEnter,
                maxLength: wo,
                disabled: e.disabled,
                autoFocus: e.autoFocus,
                style: {
                    display: "flex",
                    fontFamily: Ie.SFPro,
                    fontWeight: Me.Bold,
                    width: "100%",
                    height: 40
                },
                size: "large",
                placeholder: e.placeholder,
                value: e.value,
                onChange: o,
                suffix: n ? h.jsx("span", {}) : h.jsx(Ts, {
                    title: "Show Symbol Keyboard",
                    children: h.jsx(Zs, {
                        onClick: a
                    })
                })
            }), n ? h.jsx(vo, {
                onSymbolSelected: i => e.onTextChange(e.value + i),
                focusInput: c
            }) : null]
        })
    };
class wr extends V.Component {
    constructor() {
        super(...arguments), this.removeImage = () => {
            this.onImagePicked("")
        }, this.onImagePicked = t => {
            this.props.close(), this.setState({}), this.props.onImageChange(t)
        }, this.getContent = () => this.props.currentImage ? h.jsxs("div", {
            className: "flex hc vc flex-column",
            children: [h.jsx("img", {
                src: lr(this.props.currentImage),
                style: {
                    maxWidth: "100%",
                    maxHeight: 300,
                    borderRadius: 5
                }
            }), h.jsx(te, {
                type: "primary",
                style: {
                    marginTop: 10
                },
                size: "large",
                onClick: this.removeImage,
                children: "Remove Image"
            })]
        }) : h.jsx(lo, {
            title: "Add Photo",
            titleFontSize: 34,
            titleBottomMargin: 6,
            defaultSearchTerm: "",
            onImagePicked: this.onImagePicked,
            allowUpload: !tn(),
            imageSearchDefaultText: "Search for anything!"
        })
    }
    render() {
        const {
            visible: t,
            close: n
        } = this.props;
        return h.jsx(ur, {
            open: t,
            placement: "right",
            closable: !0,
            destroyOnClose: !0,
            onClose: n,
            width: 528,
            drawerStyle: {
                height: "100%",
                overflowY: "auto",
                scrollbarWidth: "none"
            },
            children: this.getContent()
        })
    }
}
var Te = {};
const yo = e => t => {
        const n = e(t);
        return t.add(n), n
    },
    bo = e => (t, n) => (e.set(t, n), n),
    _n = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER,
    yr = 536870912,
    En = yr * 2,
    Co = (e, t) => n => {
        const r = t.get(n);
        let s = r === void 0 ? n.size : r < En ? r + 1 : 0;
        if (!n.has(s)) return e(n, s);
        if (n.size < yr) {
            for (; n.has(s);) s = Math.floor(Math.random() * En);
            return e(n, s)
        }
        if (n.size > _n) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        for (; n.has(s);) s = Math.floor(Math.random() * _n);
        return e(n, s)
    },
    br = new WeakMap,
    _o = bo(br),
    Cr = Co(_o, br),
    Eo = yo(Cr),
    xo = (e, t, n, r) => s => {
        const o = t(s);
        return a => {
            const c = e(a);
            a.addEventListener("message", (({
                data: u
            }) => {
                const {
                    id: f
                } = u;
                if (f !== null && c.has(f)) {
                    const {
                        reject: p,
                        resolve: m
                    } = c.get(f);
                    c.delete(f), u.error === void 0 ? m(u.result) : p(new Error(u.error.message))
                }
            })), r(a) && a.start();
            const i = (u, f = null, p = []) => new Promise((m, g) => {
                    const v = n(c);
                    c.set(v, {
                        reject: g,
                        resolve: m
                    }), f === null ? a.postMessage({
                        id: v,
                        method: u
                    }, p) : a.postMessage({
                        id: v,
                        method: u,
                        params: f
                    }, p)
                }),
                l = (u, f, p = []) => {
                    a.postMessage({
                        id: null,
                        method: u,
                        params: f
                    }, p)
                };
            let d = {};
            for (const [u, f] of Object.entries(o)) d = {
                ...d,
                [u]: f({
                    call: i,
                    notify: l
                })
            };
            return {
                ...d
            }
        }
    },
    Ao = e => t => {
        if (e.has(t)) return e.get(t);
        const n = new Map;
        return e.set(t, n), n
    },
    To = e => t => ({
        ...t,
        connect: ({
            call: n
        }) => async () => {
            const {
                port1: r,
                port2: s
            } = new MessageChannel, o = await n("connect", {
                port: r
            }, [r]);
            return e.set(s, o), s
        },
        disconnect: ({
            call: n
        }) => async r => {
            const s = e.get(r);
            if (s === void 0) throw new Error("The given port is not connected.");
            await n("disconnect", {
                portId: s
            })
        },
        isSupported: ({
            call: n
        }) => () => n("isSupported")
    }),
    Mo = e => typeof e.start == "function",
    _r = xo(Ao(new WeakMap), To(new WeakMap), Cr, Mo),
    xn = new Set,
    So = _r({
        deregister: ({
            call: e
        }) => t => e("deregister", {
            port: t
        }, [t]),
        encode: ({
            call: e
        }) => async (t, n) => {
            const r = await e("encode", {
                encoderId: t,
                timeslice: n
            });
            return xn.delete(t), r
        },
        instantiate: ({
            call: e
        }) => async (t, n) => {
            const r = Eo(xn),
                s = await e("instantiate", {
                    encoderId: r,
                    mimeType: t,
                    sampleRate: n
                });
            return {
                encoderId: r,
                port: s
            }
        },
        register: ({
            call: e
        }) => t => e("register", {
            port: t
        }, [t])
    }),
    Ro = e => {
        const t = new Worker(e);
        return So(t)
    },
    ko = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),l=a(c,i),d=t(l);e.addUniqueNumber=d,e.generateUniqueNumber=l}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";var e=r(455);const t=new WeakMap,n=new WeakMap,o=(r=>{const o=(s=r,{...s,connect:e=>{let{call:r}=e;return async()=>{const{port1:e,port2:n}=new MessageChannel,o=await r("connect",{port:e},[e]);return t.set(n,o),n}},disconnect:e=>{let{call:r}=e;return async e=>{const n=t.get(e);if(void 0===n)throw new Error("The given port is not connected.");await r("disconnect",{portId:n})}},isSupported:e=>{let{call:t}=e;return()=>t("isSupported")}});var s;return t=>{const r=(e=>{if(n.has(e))return n.get(e);const t=new Map;return n.set(e,t),t})(t);t.addEventListener("message",(e=>{let{data:t}=e;const{id:n}=t;if(null!==n&&r.has(n)){const{reject:e,resolve:o}=r.get(n);r.delete(n),void 0===t.error?o(t.result):e(new Error(t.error.message))}})),(e=>"function"==typeof e.start)(t)&&t.start();const s=function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new Promise(((a,i)=>{const c=(0,e.generateUniqueNumber)(r);r.set(c,{reject:i,resolve:a}),null===o?t.postMessage({id:c,method:n},s):t.postMessage({id:c,method:n,params:o},s)}))},a=function(e,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.postMessage({id:null,method:e,params:r},n)};let i={};for(const[e,t]of Object.entries(o))i={...i,[e]:t({call:s,notify:a})};return{...i}}})({characterize:e=>{let{call:t}=e;return()=>t("characterize")},encode:e=>{let{call:t}=e;return(e,r)=>t("encode",{recordingId:e,timeslice:r})},record:e=>{let{call:t}=e;return async(e,r,n)=>{await t("record",{recordingId:e,sampleRate:r,typedArrays:n},n.map((e=>{let{buffer:t}=e;return t})))}}}),s=-32603,a=-32602,i=-32601,c=(e,t)=>Object.assign(new Error(e),{status:t}),l=e=>c('The handler of the method called "'.concat(e,'" returned an unexpected result.'),s),d=(e,t)=>async r=>{let{data:{id:n,method:o,params:a}}=r;const d=t[o];try{if(void 0===d)throw(e=>c('The requested method called "'.concat(e,'" is not supported.'),i))(o);const t=void 0===a?d():d(a);if(void 0===t)throw(e=>c('The handler of the method called "'.concat(e,'" returned no required result.'),s))(o);const r=t instanceof Promise?await t:t;if(null===n){if(void 0!==r.result)throw l(o)}else{if(void 0===r.result)throw l(o);const{result:t,transferables:s=[]}=r;e.postMessage({id:n,result:t},s)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}},u=new Map,h=(t,r,n)=>({...r,connect:n=>{let{port:o}=n;o.start();const s=t(o,r),a=(0,e.generateUniqueNumber)(u);return u.set(a,(()=>{s(),o.close(),u.delete(a)})),{result:a}},disconnect:e=>{let{portId:t}=e;const r=u.get(t);if(void 0===r)throw(e=>c('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),a))(t);return r(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=t=>{let{data:r}=t;return e(null!==r)},n.postMessage(t,[t])}))){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),f=function(e,t){const r=h(f,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>!0),n=d(e,r);return e.addEventListener("message",n),()=>e.removeEventListener("message",n)},p=e=>{e.onmessage=null,e.close()},w=new Map,m=new WeakMap,g=((e,t)=>r=>{const n=t.get(r);if(void 0===n)throw new Error("There is no encoder stored which wraps this port.");e.delete(n),t.delete(r)})(w,m),v=new Map,y=(e=>t=>{const r=e.get(t);if(void 0===r)throw new Error("There was no instance of an encoder stored with the given id.");return r})(v),M=((e,t)=>r=>{const n=t(r);return e.delete(r),n})(v,y),E=((e,t)=>r=>{const[n,o,s,a]=t(r);return s?new Promise((t=>{o.onmessage=s=>{let{data:i}=s;0===i.length?(e(o),t(n.encode(r,null))):n.record(r,a,i)}})):n.encode(r,null)})(p,M),b=(e=>t=>{for(const[r,n]of Array.from(e.values()))if(r.test(t))return n;throw new Error("There is no encoder registered which could handle the given mimeType.")})(w),T=((e,t,r)=>(n,o,s)=>{if(t.has(n))throw new Error('There is already an encoder registered with an id called "'.concat(n,'".'));const a=r(o),{port1:i,port2:c}=new MessageChannel,l=[a,i,!0,s];return t.set(n,l),i.onmessage=t=>{let{data:r}=t;0===r.length?(e(i),l[2]=!1):a.record(n,s,r.map((e=>"number"==typeof e?new Float32Array(e):e)))},c})(p,v,b),I=((e,t,r)=>async n=>{const o=r(n),s=await o.characterize(),a=s.toString();if(e.has(a)||t.has(n))throw new Error("There is already an encoder stored which handles exactly the same mime types.");return e.set(a,[s,o]),t.set(n,a),s})(w,m,o),A=(e=>(t,r)=>{const[n]=e(t);return n.encode(t,r)})(y);f(self,{deregister:async e=>{let{port:t}=e;return{result:g(t)}},encode:async e=>{let{encoderId:t,timeslice:r}=e;const n=null===r?await E(t):await A(t,r);return{result:n,transferables:n}},instantiate:e=>{let{encoderId:t,mimeType:r,sampleRate:n}=e;const o=T(t,r,n);return{result:o,transferables:[o]}},register:async e=>{let{port:t}=e;return{result:await I(t)}}})})()})();`,
    Io = new Blob([ko], {
        type: "application/javascript; charset=utf-8"
    }),
    Er = URL.createObjectURL(Io),
    rn = Ro(Er),
    lt = rn.encode,
    xr = rn.instantiate,
    No = rn.register;
URL.revokeObjectURL(Er);
const Oo = e => (t, n) => {
        if (e === null) {
            const {
                data: r,
                ...s
            } = n, o = new Event(t, s);
            return o.data = r, o
        }
        return new e(t, n)
    },
    jo = (e, t) => (n, r, s) => {
        const o = [];
        let a = r,
            c = 0;
        for (; c < n.byteLength;)
            if (a === null) {
                const i = t(n, c);
                if (i === null) break;
                const {
                    length: l,
                    type: d
                } = i;
                a = d, c += l
            } else {
                const i = e(n, c, a, s);
                if (i === null) break;
                const {
                    content: l,
                    length: d
                } = i;
                a = null, c += d, l !== null && o.push(l)
            } return {
            contents: o,
            currentElementType: a,
            offset: c
        }
    },
    Po = (e, t) => class {
        constructor(r = null) {
            this._listeners = new WeakMap, this._nativeEventTarget = r === null ? e() : r
        }
        addEventListener(r, s, o) {
            if (s !== null) {
                let a = this._listeners.get(s);
                a === void 0 && (a = t(this, s), typeof s == "function" && this._listeners.set(s, a)), this._nativeEventTarget.addEventListener(r, a, o)
            }
        }
        dispatchEvent(r) {
            return this._nativeEventTarget.dispatchEvent(r)
        }
        removeEventListener(r, s, o) {
            const a = s === null ? void 0 : this._listeners.get(s);
            this._nativeEventTarget.removeEventListener(r, a === void 0 ? null : a, o)
        }
    },
    Lo = e => () => {
        if (e === null) throw new Error("A native EventTarget could not be created.");
        return e.document.createElement("p")
    },
    sn = (e = "") => {
        try {
            return new DOMException(e, "InvalidModificationError")
        } catch (t) {
            return t.code = 13, t.message = e, t.name = "InvalidModificationError", t
        }
    },
    Bo = () => {
        try {
            return new DOMException("", "InvalidStateError")
        } catch (e) {
            return e.code = 11, e.name = "InvalidStateError", e
        }
    },
    Uo = e => e !== null && e.MediaStream !== void 0 && (e.MediaRecorder === void 0 || e.MediaRecorder.isTypeSupported !== void 0) ? new Promise(t => {
        if (e.MediaRecorder === void 0) return t(!0);
        const n = document.createElement("canvas");
        if (n.getContext("2d"), typeof n.captureStream != "function") return t(!1);
        const r = n.captureStream(),
            s = "audio/webm";
        try {
            const o = new e.MediaRecorder(r, {
                mimeType: s
            });
            o.addEventListener("dataavailable", ({
                data: a
            }) => t(a.type === s)), o.start(), setTimeout(() => o.stop(), 10)
        } catch (o) {
            t(o.name === "NotSupportedError")
        }
    }) : Promise.resolve(!1),
    Do = (e, t, n, r, s, o, a) => class extends o {
        constructor(i, l = {}) {
            const {
                mimeType: d
            } = l;
            if (a !== null && (d === void 0 || a.isTypeSupported !== void 0 && a.isTypeSupported(d))) {
                const u = e(a, i, l);
                super(u), this._internalMediaRecorder = u
            } else if (d !== void 0 && s.some(u => u.test(d))) super(), a !== null && a.isTypeSupported !== void 0 && a.isTypeSupported("audio/webm;codecs=pcm") ? this._internalMediaRecorder = r(this, a, i, d) : this._internalMediaRecorder = n(this, i, d);
            else throw a !== null && e(a, i, l), t();
            this._ondataavailable = null, this._onerror = null, this._onpause = null, this._onresume = null, this._onstart = null, this._onstop = null
        }
        get mimeType() {
            return this._internalMediaRecorder.mimeType
        }
        get ondataavailable() {
            return this._ondataavailable === null ? this._ondataavailable : this._ondataavailable[0]
        }
        set ondataavailable(i) {
            if (this._ondataavailable !== null && this.removeEventListener("dataavailable", this._ondataavailable[1]), typeof i == "function") {
                const l = i.bind(this);
                this.addEventListener("dataavailable", l), this._ondataavailable = [i, l]
            } else this._ondataavailable = null
        }
        get onerror() {
            return this._onerror === null ? this._onerror : this._onerror[0]
        }
        set onerror(i) {
            if (this._onerror !== null && this.removeEventListener("error", this._onerror[1]), typeof i == "function") {
                const l = i.bind(this);
                this.addEventListener("error", l), this._onerror = [i, l]
            } else this._onerror = null
        }
        get onpause() {
            return this._onpause === null ? this._onpause : this._onpause[0]
        }
        set onpause(i) {
            if (this._onpause !== null && this.removeEventListener("pause", this._onpause[1]), typeof i == "function") {
                const l = i.bind(this);
                this.addEventListener("pause", l), this._onpause = [i, l]
            } else this._onpause = null
        }
        get onresume() {
            return this._onresume === null ? this._onresume : this._onresume[0]
        }
        set onresume(i) {
            if (this._onresume !== null && this.removeEventListener("resume", this._onresume[1]), typeof i == "function") {
                const l = i.bind(this);
                this.addEventListener("resume", l), this._onresume = [i, l]
            } else this._onresume = null
        }
        get onstart() {
            return this._onstart === null ? this._onstart : this._onstart[0]
        }
        set onstart(i) {
            if (this._onstart !== null && this.removeEventListener("start", this._onstart[1]), typeof i == "function") {
                const l = i.bind(this);
                this.addEventListener("start", l), this._onstart = [i, l]
            } else this._onstart = null
        }
        get onstop() {
            return this._onstop === null ? this._onstop : this._onstop[0]
        }
        set onstop(i) {
            if (this._onstop !== null && this.removeEventListener("stop", this._onstop[1]), typeof i == "function") {
                const l = i.bind(this);
                this.addEventListener("stop", l), this._onstop = [i, l]
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
        start(i) {
            return this._internalMediaRecorder.start(i)
        }
        stop() {
            return this._internalMediaRecorder.stop()
        }
        static isTypeSupported(i) {
            return a !== null && a.isTypeSupported !== void 0 && a.isTypeSupported(i) || s.some(l => l.test(i))
        }
    },
    Wo = e => e !== null && e.BlobEvent !== void 0 ? e.BlobEvent : null,
    Vo = (e, t) => (n, r, s) => {
        const o = [],
            a = new WeakMap,
            c = new WeakMap,
            i = new n(r, s),
            l = new WeakMap;
        let d = !0;
        return i.addEventListener = (u => (f, p, m) => {
            let g = p;
            return typeof p == "function" && (f === "dataavailable" ? (g = v => {
                setTimeout(() => {
                    if (d && i.state === "inactive") o.push(v.data);
                    else {
                        if (o.length > 0) {
                            const w = v.data;
                            Object.defineProperty(v, "data", {
                                value: new Blob([...o, w], {
                                    type: w.type
                                })
                            }), o.length = 0
                        }
                        p.call(i, v)
                    }
                })
            }, a.set(p, g)) : f === "error" ? (g = v => {
                if (v.error === void 0) p.call(i, new ErrorEvent("error", {
                    error: e()
                }));
                else if (v.error.name === "UnknownError") {
                    const w = v.error.message;
                    p.call(i, new ErrorEvent("error", {
                        error: e(w)
                    }))
                } else v instanceof ErrorEvent ? p.call(i, v) : p.call(i, new ErrorEvent("error", {
                    error: v.error
                }))
            }, c.set(p, g)) : f === "stop" && (g = v => {
                d = !1, setTimeout(() => p.call(i, v))
            }, l.set(p, g))), u.call(i, f, g, m)
        })(i.addEventListener), i.dispatchEvent = (u => f => {
            let p;
            setTimeout(() => {
                p = d, d = !1
            });
            const m = u.call(i, f);
            return setTimeout(() => d = p), m
        })(i.dispatchEvent), i.removeEventListener = (u => (f, p, m) => {
            let g = p;
            if (typeof p == "function") {
                if (f === "dataavailable") {
                    const v = a.get(p);
                    v !== void 0 && (g = v)
                } else if (f === "error") {
                    const v = c.get(p);
                    v !== void 0 && (g = v)
                } else if (f === "stop") {
                    const v = l.get(p);
                    v !== void 0 && (g = v)
                }
            }
            return u.call(i, f, g, m)
        })(i.removeEventListener), i.start = (u => f => {
            if (s.mimeType !== void 0 && s.mimeType.startsWith("audio/") && r.getVideoTracks().length > 0) throw t();
            return d = f !== void 0, f === void 0 ? u.call(i) : u.call(i, f)
        })(i.start), i
    },
    Fo = e => e === null || e.MediaRecorder === void 0 ? null : e.MediaRecorder,
    wt = () => {
        try {
            return new DOMException("", "NotSupportedError")
        } catch (e) {
            return e.code = 9, e.name = "NotSupportedError", e
        }
    },
    zo = e => (t, n, r, s = 2) => {
        const o = e(t, n);
        if (o === null) return o;
        const {
            length: a,
            value: c
        } = o;
        if (r === "master") return {
            content: null,
            length: a
        };
        if (n + a + c > t.byteLength) return null;
        if (r === "binary") {
            const i = (c / Float32Array.BYTES_PER_ELEMENT - 1) / s,
                l = Array.from({
                    length: s
                }, () => new Float32Array(i));
            for (let d = 0; d < i; d += 1) {
                const u = d * s + 1;
                for (let f = 0; f < s; f += 1) l[f][d] = t.getFloat32(n + a + (u + f) * Float32Array.BYTES_PER_ELEMENT, !0)
            }
            return {
                content: l,
                length: a + c
            }
        }
        return {
            content: null,
            length: a + c
        }
    },
    qo = e => (t, n) => {
        const r = e(t, n);
        if (r === null) return r;
        const {
            length: s,
            value: o
        } = r;
        return o === 35 ? {
            length: s,
            type: "binary"
        } : o === 46 || o === 97 || o === 88713574 || o === 106212971 || o === 139690087 || o === 172351395 || o === 256095861 ? {
            length: s,
            type: "master"
        } : {
            length: s,
            type: "unknown"
        }
    },
    $o = e => (t, n) => {
        const r = e(t, n);
        if (r === null) return r;
        const s = n + Math.floor((r - 1) / 8);
        if (s + r > t.byteLength) return null;
        let a = t.getUint8(s) & (1 << 8 - r % 8) - 1;
        for (let c = 1; c < r; c += 1) a = (a << 8) + t.getUint8(s + c);
        return {
            length: r,
            value: a
        }
    },
    Go = e => (t, n) => (e.set(t, n), n),
    An = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER,
    Ar = 536870912,
    Tn = Ar * 2,
    Ho = (e, t) => n => {
        const r = t.get(n);
        let s = r === void 0 ? n.size : r < Tn ? r + 1 : 0;
        if (!n.has(s)) return e(n, s);
        if (n.size < Ar) {
            for (; n.has(s);) s = Math.floor(Math.random() * Tn);
            return e(n, s)
        }
        if (n.size > An) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        for (; n.has(s);) s = Math.floor(Math.random() * An);
        return e(n, s)
    },
    Tr = new WeakMap,
    Xo = Go(Tr),
    Qo = Ho(Xo, Tr),
    Mn = Symbol.observable || "@@observable";

function Yo(e) {
    return Symbol.observable || (typeof e == "function" && e.prototype && e.prototype[Symbol.observable] ? (e.prototype[Mn] = e.prototype[Symbol.observable], delete e.prototype[Symbol.observable]) : (e[Mn] = e[Symbol.observable], delete e[Symbol.observable])), e
}
const ot = () => {},
    Sn = e => {
        throw e
    };

function Ko(e) {
    return e ? e.next && e.error && e.complete ? e : {
        complete: (e.complete ?? ot).bind(e),
        error: (e.error ?? Sn).bind(e),
        next: (e.next ?? ot).bind(e)
    } : {
        complete: ot,
        error: Sn,
        next: ot
    }
}
const Zo = e => (t, n, r) => e(s => {
        const o = a => s.next(a);
        return t.addEventListener(n, o, r), () => t.removeEventListener(n, o, r)
    }),
    Jo = (e, t) => {
        const n = () => {},
            r = s => typeof s[0] == "function";
        return s => {
            const o = ((...a) => {
                const c = s(r(a) ? t({
                    next: a[0]
                }) : t(...a));
                return c !== void 0 ? c : n
            });
            return o[Symbol.observable] = () => ({
                subscribe: (...a) => ({
                    unsubscribe: o(...a)
                })
            }), e(o)
        }
    },
    ea = Jo(Yo, Ko),
    Mr = Zo(ea);
/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var Pt, Rn;

function ta() {
    return Rn || (Rn = 1, Pt = (e, t) => {
        if (typeof e != "string") throw new TypeError("expected a string");
        return e.trim().replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\W/g, n => /[À-ž]/.test(n) ? n : "-").replace(/^-+|-+$/g, "").replace(/-{2,}/g, n => t && t.condense ? "-" : n).toLowerCase()
    }), Pt
}
var na = ta();
const ra = or(na);
var Lt = {
        exports: {}
    },
    kn;

function sa() {
    return kn || (kn = 1, (function(e) {
        var t = function(n) {
            var r, s, o = /\w+/.exec(n);
            if (o) s = o[0];
            else return "an";
            var a = s.toLowerCase(),
                c = ["honest", "hour", "hono"];
            for (r in c)
                if (a.indexOf(c[r]) == 0) return "an";
            if (a.length == 1) return "aedhilmnorsx".indexOf(a) >= 0 ? "an" : "a";
            if (s.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/)) return "an";
            var i = [/^e[uw]/, /^onc?e\b/, /^uni([^nmd]|mo)/, /^u[bcfhjkqrst][aeiou]/];
            for (r = 0; r < i.length; r++)
                if (a.match(i[r])) return "a";
            return s.match(/^U[NK][AIEO]/) ? "a" : s == s.toUpperCase() ? "aedhilmnorsx".indexOf(a[0]) >= 0 ? "an" : "a" : "aeiou".indexOf(a[0]) >= 0 || a.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/) ? "an" : "a"
        };
        e.exports = t
    })(Lt)), Lt.exports
}
var oa = sa();
const aa = or(oa),
    In = (e, t) => t === void 0 ? e : t.reduce((n, r) => {
        if (r === "capitalize") {
            const s = n.charAt(0).toUpperCase(),
                o = n.slice(1);
            return `${s}${o}`
        }
        return r === "dashify" ? ra(n) : r === "prependIndefiniteArticle" ? `${aa(n)} ${n}` : n
    }, e),
    ia = e => {
        const t = e.name + e.modifiers.map(n => `\\.${n}\\(\\)`).join("");
        return new RegExp(`\\$\\{${t}}`, "g")
    },
    Nn = (e, t) => {
        const n = /\${([^.}]+)((\.[^(]+\(\))*)}/g,
            r = [];
        let s = n.exec(e);
        for (; s !== null;) {
            const a = {
                modifiers: [],
                name: s[1]
            };
            if (s[3] !== void 0) {
                const c = /\.[^(]+\(\)/g;
                let i = c.exec(s[2]);
                for (; i !== null;) a.modifiers.push(i[0].slice(1, -2)), i = c.exec(s[2])
            }
            r.push(a), s = n.exec(e)
        }
        const o = r.reduce((a, c) => a.map(i => typeof i == "string" ? i.split(ia(c)).reduce((l, d, u) => u === 0 ? [d] : c.name in t ? [...l, In(t[c.name], c.modifiers), d] : [...l, f => In(f[c.name], c.modifiers), d], []) : [i]).reduce((i, l) => [...i, ...l], []), [e]);
        return a => o.reduce((c, i) => typeof i == "string" ? [...c, i] : [...c, i(a)], []).join("")
    },
    yt = (e, t = {}) => {
        const n = e.code === void 0 ? void 0 : Nn(e.code, t),
            r = e.message === void 0 ? void 0 : Nn(e.message, t);

        function s(o = {}, a) {
            const c = a === void 0 && (o instanceof Error || o.code !== void 0 && o.code.slice(-9) === "Exception"),
                {
                    cause: i,
                    missingParameters: l
                } = c ? {
                    cause: o,
                    missingParameters: {}
                } : {
                    cause: a,
                    missingParameters: o
                },
                d = r === void 0 ? new Error : new Error(r(l));
            return i !== null && (d.cause = i), n !== void 0 && (d.code = n(l)), e.status !== void 0 && (d.status = e.status), d
        }
        return s
    },
    bt = {
        INTERNAL_ERROR: -32603,
        INVALID_PARAMS: -32602,
        METHOD_NOT_FOUND: -32601
    };
yt({
    message: 'The requested method called "${method}" is not supported.',
    status: bt.METHOD_NOT_FOUND
});
yt({
    message: 'The handler of the method called "${method}" returned no required result.',
    status: bt.INTERNAL_ERROR
});
yt({
    message: 'The handler of the method called "${method}" returned an unexpected result.',
    status: bt.INTERNAL_ERROR
});
yt({
    message: 'The specified parameter called "portId" with the given value "${portId}" does not identify a port connected to this worker.',
    status: bt.INVALID_PARAMS
});
const ca = (e, t, n) => async r => {
    const s = new e([n], {
            type: "application/javascript; charset=utf-8"
        }),
        o = t.createObjectURL(s);
    try {
        await r(o)
    } finally {
        t.revokeObjectURL(o)
    }
}, la = e => ({
    data: t
}) => {
    const {
        id: n
    } = t;
    if (n !== null) {
        const r = e.get(n);
        if (r !== void 0) {
            const {
                reject: s,
                resolve: o
            } = r;
            e.delete(n), t.error === void 0 ? o(t.result) : s(new Error(t.error.message))
        }
    }
}, ua = e => (t, n) => (r, s = []) => new Promise((o, a) => {
    const c = e(t);
    t.set(c, {
        reject: a,
        resolve: o
    }), n.postMessage({
        id: c,
        ...r
    }, s)
}), da = (e, t, n, r) => (s, o, a = {}) => {
    const c = new s(o, "recorder-audio-worklet-processor", {
            ...a,
            channelCountMode: "explicit",
            numberOfInputs: 1,
            numberOfOutputs: 0
        }),
        i = new Map,
        l = t(i, c.port),
        d = n(c.port, "message")(e(i));
    c.port.start();
    let u = "inactive";
    return Object.defineProperties(c, {
        pause: {
            get() {
                return async () => (r(["recording"], u), u = "paused", l({
                    method: "pause"
                }))
            }
        },
        port: {
            get() {
                throw new Error("The port of a RecorderAudioWorkletNode can't be accessed.")
            }
        },
        record: {
            get() {
                return async f => (r(["inactive"], u), u = "recording", l({
                    method: "record",
                    params: {
                        encoderPort: f
                    }
                }, [f]))
            }
        },
        resume: {
            get() {
                return async () => (r(["paused"], u), u = "recording", l({
                    method: "resume"
                }))
            }
        },
        stop: {
            get() {
                return async () => {
                    r(["paused", "recording"], u), u = "stopped";
                    try {
                        await l({
                            method: "stop"
                        })
                    } finally {
                        d()
                    }
                }
            }
        }
    }), c
}, fa = (e, t) => {
    if (!e.includes(t)) throw new Error(`Expected the state to be ${e.map(n=>`"${n}"`).join(" or ")} but it was "${t}".`)
}, ha = '(()=>{"use strict";class e extends AudioWorkletProcessor{constructor(){super(),this._encoderPort=null,this._state="inactive",this.port.onmessage=e=>{let{data:t}=e;"pause"===t.method?"active"===this._state||"recording"===this._state?(this._state="paused",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"record"===t.method?"inactive"===this._state?(this._encoderPort=t.params.encoderPort,this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"resume"===t.method?"paused"===this._state?(this._state="active",this._sendAcknowledgement(t.id)):this._sendUnexpectedStateError(t.id):"stop"===t.method?"active"!==this._state&&"paused"!==this._state&&"recording"!==this._state||null===this._encoderPort?this._sendUnexpectedStateError(t.id):(this._stop(this._encoderPort),this._sendAcknowledgement(t.id)):"number"==typeof t.id&&this.port.postMessage({error:{code:-32601,message:"The requested method is not supported."},id:t.id})}}process(e){let[t]=e;if("inactive"===this._state||"paused"===this._state)return!0;if("active"===this._state){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0===t.length)return!0;this._state="recording"}if("recording"===this._state&&null!==this._encoderPort){if(void 0===t)throw new Error("No channelData was received for the first input.");if(0!==t.length)return this._encoderPort.postMessage(t,t.map((e=>{let{buffer:t}=e;return t}))),!0;this._stop(this._encoderPort)}return!1}_sendAcknowledgement(e){this.port.postMessage({id:e,result:null})}_sendUnexpectedStateError(e){this.port.postMessage({error:{code:-32603,message:"The internal state does not allow to process the given message."},id:e})}_stop(e){e.postMessage([]),e.close(),this._encoderPort=null,this._state="stopped"}}e.parameterDescriptors=[],registerProcessor("recorder-audio-worklet-processor",e)})();', ma = ca(Blob, URL, ha), pa = da(la, ua(Qo), Mr, fa), On = (e, t, n) => ({
    endTime: t,
    insertTime: n,
    type: "exponentialRampToValue",
    value: e
}), jn = (e, t, n) => ({
    endTime: t,
    insertTime: n,
    type: "linearRampToValue",
    value: e
}), qt = (e, t) => ({
    startTime: t,
    type: "setValue",
    value: e
}), Sr = (e, t, n) => ({
    duration: n,
    startTime: t,
    type: "setValueCurve",
    values: e
}), Rr = (e, t, {
    startTime: n,
    target: r,
    timeConstant: s
}) => r + (t - r) * Math.exp((n - e) / s), We = e => e.type === "exponentialRampToValue", ut = e => e.type === "linearRampToValue", ye = e => We(e) || ut(e), on = e => e.type === "setValue", fe = e => e.type === "setValueCurve", dt = (e, t, n, r) => {
    const s = e[t];
    return s === void 0 ? r : ye(s) || on(s) ? s.value : fe(s) ? s.values[s.values.length - 1] : Rr(n, dt(e, t - 1, s.startTime, r), s)
}, Pn = (e, t, n, r, s) => n === void 0 ? [r.insertTime, s] : ye(n) ? [n.endTime, n.value] : on(n) ? [n.startTime, n.value] : fe(n) ? [n.startTime + n.duration, n.values[n.values.length - 1]] : [n.startTime, dt(e, t - 1, n.startTime, s)], $t = e => e.type === "cancelAndHold", Gt = e => e.type === "cancelScheduledValues", we = e => $t(e) || Gt(e) ? e.cancelTime : We(e) || ut(e) ? e.endTime : e.startTime, Ln = (e, t, n, {
    endTime: r,
    value: s
}) => n === s ? s : 0 < n && 0 < s || n < 0 && s < 0 ? n * (s / n) ** ((e - t) / (r - t)) : e < r ? n : s, Bn = (e, t, n, {
    endTime: r,
    value: s
}) => n + (e - t) / (r - t) * (s - n), ga = (e, t) => {
    const n = Math.floor(t),
        r = Math.ceil(t);
    return n === r ? e[n] : (1 - (t - n)) * e[n] + (1 - (r - t)) * e[r]
}, va = (e, {
    duration: t,
    startTime: n,
    values: r
}) => {
    const s = (e - n) / t * (r.length - 1);
    return ga(r, s)
}, at = e => e.type === "setTarget";
class wa {
    constructor(t) {
        this._automationEvents = [], this._currenTime = 0, this._defaultValue = t
    } [Symbol.iterator]() {
        return this._automationEvents[Symbol.iterator]()
    }
    add(t) {
        const n = we(t);
        if ($t(t) || Gt(t)) {
            const r = this._automationEvents.findIndex(o => Gt(t) && fe(o) ? o.startTime + o.duration >= n : we(o) >= n),
                s = this._automationEvents[r];
            if (r !== -1 && (this._automationEvents = this._automationEvents.slice(0, r)), $t(t)) {
                const o = this._automationEvents[this._automationEvents.length - 1];
                if (s !== void 0 && ye(s)) {
                    if (o !== void 0 && at(o)) throw new Error("The internal list is malformed.");
                    const a = o === void 0 ? s.insertTime : fe(o) ? o.startTime + o.duration : we(o),
                        c = o === void 0 ? this._defaultValue : fe(o) ? o.values[o.values.length - 1] : o.value,
                        i = We(s) ? Ln(n, a, c, s) : Bn(n, a, c, s),
                        l = We(s) ? On(i, n, this._currenTime) : jn(i, n, this._currenTime);
                    this._automationEvents.push(l)
                }
                if (o !== void 0 && at(o) && this._automationEvents.push(qt(this.getValue(n), n)), o !== void 0 && fe(o) && o.startTime + o.duration > n) {
                    const a = n - o.startTime,
                        c = (o.values.length - 1) / o.duration,
                        i = Math.max(2, 1 + Math.ceil(a * c)),
                        l = a / (i - 1) * c,
                        d = o.values.slice(0, i);
                    if (l < 1)
                        for (let u = 1; u < i; u += 1) {
                            const f = l * u % 1;
                            d[u] = o.values[u - 1] * (1 - f) + o.values[u] * f
                        }
                    this._automationEvents[this._automationEvents.length - 1] = Sr(d, o.startTime, a)
                }
            }
        } else {
            const r = this._automationEvents.findIndex(a => we(a) > n),
                s = r === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[r - 1];
            if (s !== void 0 && fe(s) && we(s) + s.duration > n) return !1;
            const o = We(t) ? On(t.value, t.endTime, this._currenTime) : ut(t) ? jn(t.value, n, this._currenTime) : t;
            if (r === -1) this._automationEvents.push(o);
            else {
                if (fe(t) && n + t.duration > we(this._automationEvents[r])) return !1;
                this._automationEvents.splice(r, 0, o)
            }
        }
        return !0
    }
    flush(t) {
        const n = this._automationEvents.findIndex(r => we(r) > t);
        if (n > 1) {
            const r = this._automationEvents.slice(n - 1),
                s = r[0];
            at(s) && r.unshift(qt(dt(this._automationEvents, n - 2, s.startTime, this._defaultValue), s.startTime)), this._automationEvents = r
        }
    }
    getValue(t) {
        if (this._automationEvents.length === 0) return this._defaultValue;
        const n = this._automationEvents.findIndex(a => we(a) > t),
            r = this._automationEvents[n],
            s = (n === -1 ? this._automationEvents.length : n) - 1,
            o = this._automationEvents[s];
        if (o !== void 0 && at(o) && (r === void 0 || !ye(r) || r.insertTime > t)) return Rr(t, dt(this._automationEvents, s - 1, o.startTime, this._defaultValue), o);
        if (o !== void 0 && on(o) && (r === void 0 || !ye(r))) return o.value;
        if (o !== void 0 && fe(o) && (r === void 0 || !ye(r) || o.startTime + o.duration > t)) return t < o.startTime + o.duration ? va(t, o) : o.values[o.values.length - 1];
        if (o !== void 0 && ye(o) && (r === void 0 || !ye(r))) return o.value;
        if (r !== void 0 && We(r)) {
            const [a, c] = Pn(this._automationEvents, s, o, r, this._defaultValue);
            return Ln(t, a, c, r)
        }
        if (r !== void 0 && ut(r)) {
            const [a, c] = Pn(this._automationEvents, s, o, r, this._defaultValue);
            return Bn(t, a, c, r)
        }
        return this._defaultValue
    }
}
const ya = e => ({
        cancelTime: e,
        type: "cancelAndHold"
    }),
    ba = e => ({
        cancelTime: e,
        type: "cancelScheduledValues"
    }),
    Ca = (e, t) => ({
        endTime: t,
        type: "exponentialRampToValue",
        value: e
    }),
    _a = (e, t) => ({
        endTime: t,
        type: "linearRampToValue",
        value: e
    }),
    Ea = (e, t, n) => ({
        startTime: t,
        target: e,
        timeConstant: n,
        type: "setTarget"
    }),
    xa = () => new DOMException("", "AbortError"),
    Aa = e => (t, n, [r, s, o], a) => {
        e(t[s], [n, r, o], c => c[0] === n && c[1] === r, a)
    },
    Ta = e => (t, n, r) => {
        const s = [];
        for (let o = 0; o < r.numberOfInputs; o += 1) s.push(new Set);
        e.set(t, {
            activeInputs: s,
            outputs: new Set,
            passiveInputs: new WeakMap,
            renderer: n
        })
    },
    Ma = e => (t, n) => {
        e.set(t, {
            activeInputs: new Set,
            passiveInputs: new WeakMap,
            renderer: n
        })
    },
    Ve = new WeakSet,
    kr = new WeakMap,
    Ir = new WeakMap,
    Nr = new WeakMap,
    Or = new WeakMap,
    jr = new WeakMap,
    Pr = new WeakMap,
    Ht = new WeakMap,
    Xt = new WeakMap,
    Qt = new WeakMap,
    Lr = {
        construct() {
            return Lr
        }
    },
    Sa = e => {
        try {
            const t = new Proxy(e, Lr);
            new t
        } catch {
            return !1
        }
        return !0
    },
    Un = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,
    Dn = (e, t) => {
        const n = [];
        let r = e.replace(/^[\s]+/, ""),
            s = r.match(Un);
        for (; s !== null;) {
            const o = s[1].slice(1, -1),
                a = s[0].replace(/([\s]+)?;?$/, "").replace(o, new URL(o, t).toString());
            n.push(a), r = r.slice(s[0].length).replace(/^[\s]+/, ""), s = r.match(Un)
        }
        return [n.join(";"), r]
    },
    Wn = e => {
        if (e !== void 0 && !Array.isArray(e)) throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")
    },
    Vn = e => {
        if (!Sa(e)) throw new TypeError("The given value for processorCtor should be a constructor.");
        if (e.prototype === null || typeof e.prototype != "object") throw new TypeError("The given value for processorCtor should have a prototype.")
    },
    Ra = (e, t, n, r, s, o, a, c, i, l, d, u, f) => {
        let p = 0;
        return (m, g, v = {
            credentials: "omit"
        }) => {
            const w = d.get(m);
            if (w !== void 0 && w.has(g)) return Promise.resolve();
            const y = l.get(m);
            if (y !== void 0) {
                const _ = y.get(g);
                if (_ !== void 0) return _
            }
            const b = o(m),
                M = b.audioWorklet === void 0 ? s(g).then(([_, x]) => {
                    const [E, C] = Dn(_, x), R = `${E};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${C}
})})(window,'_AWGS')`;
                    return n(R)
                }).then(() => {
                    const _ = f._AWGS.pop();
                    if (_ === void 0) throw new SyntaxError;
                    r(b.currentTime, b.sampleRate, () => _(class {}, void 0, (x, E) => {
                        if (x.trim() === "") throw t();
                        const C = Xt.get(b);
                        if (C !== void 0) {
                            if (C.has(x)) throw t();
                            Vn(E), Wn(E.parameterDescriptors), C.set(x, E)
                        } else Vn(E), Wn(E.parameterDescriptors), Xt.set(b, new Map([
                            [x, E]
                        ]))
                    }, b.sampleRate, void 0, void 0))
                }) : Promise.all([s(g), Promise.resolve(e(u, u))]).then(([
                    [_, x], E
                ]) => {
                    const C = p + 1;
                    p = C;
                    const [R, O] = Dn(_, x), D = `${R};((AudioWorkletProcessor,registerProcessor)=>{${O}
})(${E?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${E?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${E?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${C}',class extends AudioWorkletProcessor{process(){return !1}})`, B = new Blob([D], {
                        type: "application/javascript; charset=utf-8"
                    }), j = URL.createObjectURL(B);
                    return b.audioWorklet.addModule(j, v).then(() => {
                        if (c(b)) return b;
                        const U = a(b);
                        return U.audioWorklet.addModule(j, v).then(() => U)
                    }).then(U => {
                        if (i === null) throw new SyntaxError;
                        try {
                            new i(U, `__sac${C}`)
                        } catch {
                            throw new SyntaxError
                        }
                    }).finally(() => URL.revokeObjectURL(j))
                });
            return y === void 0 ? l.set(m, new Map([
                [g, M]
            ])) : y.set(g, M), M.then(() => {
                const _ = d.get(m);
                _ === void 0 ? d.set(m, new Set([g])) : _.add(g)
            }).finally(() => {
                const _ = l.get(m);
                _ !== void 0 && _.delete(g)
            }), M
        }
    },
    ae = (e, t) => {
        const n = e.get(t);
        if (n === void 0) throw new Error("A value with the given key could not be found.");
        return n
    },
    Ct = (e, t) => {
        const n = Array.from(e).filter(t);
        if (n.length > 1) throw Error("More than one element was found.");
        if (n.length === 0) throw Error("No element was found.");
        const [r] = n;
        return e.delete(r), r
    },
    Br = (e, t, n, r) => {
        const s = ae(e, t),
            o = Ct(s, a => a[0] === n && a[1] === r);
        return s.size === 0 && e.delete(t), o
    },
    Xe = e => ae(Pr, e),
    $e = e => {
        if (Ve.has(e)) throw new Error("The AudioNode is already stored.");
        Ve.add(e), Xe(e).forEach(t => t(!0))
    },
    Ur = e => "port" in e,
    _t = e => {
        if (!Ve.has(e)) throw new Error("The AudioNode is not stored.");
        Ve.delete(e), Xe(e).forEach(t => t(!1))
    },
    Yt = (e, t) => {
        !Ur(e) && t.every(n => n.size === 0) && _t(e)
    },
    ka = (e, t, n, r, s, o, a, c, i, l, d, u, f) => {
        const p = new WeakMap;
        return (m, g, v, w, y) => {
            const {
                activeInputs: b,
                passiveInputs: M
            } = o(g), {
                outputs: _
            } = o(m), x = c(m), E = C => {
                const R = i(g),
                    O = i(m);
                if (C) {
                    const S = Br(M, m, v, w);
                    e(b, m, S, !1), !y && !u(m) && n(O, R, v, w), f(g) && $e(g)
                } else {
                    const S = r(b, m, v, w);
                    t(M, w, S, !1), !y && !u(m) && s(O, R, v, w);
                    const L = a(g);
                    if (L === 0) d(g) && Yt(g, b);
                    else {
                        const P = p.get(g);
                        P !== void 0 && clearTimeout(P), p.set(g, setTimeout(() => {
                            d(g) && Yt(g, b)
                        }, L * 1e3))
                    }
                }
            };
            return l(_, [g, v, w], C => C[0] === g && C[1] === v && C[2] === w, !0) ? (x.add(E), d(m) ? e(b, m, [v, w, E], !0) : t(M, w, [m, v, E], !0), !0) : !1
        }
    },
    Ia = e => (t, n, [r, s, o], a) => {
        const c = t.get(r);
        c === void 0 ? t.set(r, new Set([
            [s, n, o]
        ])) : e(c, [s, n, o], i => i[0] === s && i[1] === n, a)
    },
    Na = e => (t, n) => {
        const r = e(t, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
        });
        n.connect(r).connect(t.destination);
        const s = () => {
            n.removeEventListener("ended", s), n.disconnect(r), r.disconnect()
        };
        n.addEventListener("ended", s)
    },
    Oa = e => (t, n) => {
        e(t).add(n)
    },
    an = (e, t) => e.context === t,
    Fn = e => {
        try {
            e.copyToChannel(new Float32Array(1), 0, -1)
        } catch {
            return !1
        }
        return !0
    },
    Ne = () => new DOMException("", "IndexSizeError"),
    ja = e => {
        e.getChannelData = (t => n => {
            try {
                return t.call(e, n)
            } catch (r) {
                throw r.code === 12 ? Ne() : r
            }
        })(e.getChannelData)
    },
    Pa = {
        numberOfChannels: 1
    },
    La = (e, t, n, r, s, o, a, c) => {
        let i = null;
        return class Dr {
            constructor(d) {
                if (s === null) throw new Error("Missing the native OfflineAudioContext constructor.");
                const {
                    length: u,
                    numberOfChannels: f,
                    sampleRate: p
                } = {
                    ...Pa,
                    ...d
                };
                i === null && (i = new s(1, 1, 44100));
                const m = r !== null && t(o, o) ? new r({
                    length: u,
                    numberOfChannels: f,
                    sampleRate: p
                }) : i.createBuffer(f, u, p);
                if (m.numberOfChannels === 0) throw n();
                return typeof m.copyFromChannel != "function" ? (a(m), ja(m)) : t(Fn, () => Fn(m)) || c(m), e.add(m), m
            }
            static[Symbol.hasInstance](d) {
                return d !== null && typeof d == "object" && Object.getPrototypeOf(d) === Dr.prototype || e.has(d)
            }
        }
    },
    Qe = -34028234663852886e22,
    Et = -Qe,
    be = e => Ve.has(e),
    Ba = {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: !1,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
    },
    Ua = (e, t, n, r, s, o, a, c) => class extends e {
        constructor(l, d) {
            const u = o(l),
                f = {
                    ...Ba,
                    ...d
                },
                p = s(u, f),
                m = a(u),
                g = m ? t() : null;
            super(l, !1, p, g), this._audioBufferSourceNodeRenderer = g, this._isBufferNullified = !1, this._isBufferSet = f.buffer !== null, this._nativeAudioBufferSourceNode = p, this._onended = null, this._playbackRate = n(this, m, p.playbackRate, Et, Qe)
        }
        get buffer() {
            return this._isBufferNullified ? null : this._nativeAudioBufferSourceNode.buffer
        }
        set buffer(l) {
            if (this._nativeAudioBufferSourceNode.buffer = l, l !== null) {
                if (this._isBufferSet) throw r();
                this._isBufferSet = !0
            }
        }
        get loop() {
            return this._nativeAudioBufferSourceNode.loop
        }
        set loop(l) {
            this._nativeAudioBufferSourceNode.loop = l
        }
        get loopEnd() {
            return this._nativeAudioBufferSourceNode.loopEnd
        }
        set loopEnd(l) {
            this._nativeAudioBufferSourceNode.loopEnd = l
        }
        get loopStart() {
            return this._nativeAudioBufferSourceNode.loopStart
        }
        set loopStart(l) {
            this._nativeAudioBufferSourceNode.loopStart = l
        }
        get onended() {
            return this._onended
        }
        set onended(l) {
            const d = typeof l == "function" ? c(this, l) : null;
            this._nativeAudioBufferSourceNode.onended = d;
            const u = this._nativeAudioBufferSourceNode.onended;
            this._onended = u !== null && u === d ? l : u
        }
        get playbackRate() {
            return this._playbackRate
        }
        start(l = 0, d = 0, u) {
            if (this._nativeAudioBufferSourceNode.start(l, d, u), this._audioBufferSourceNodeRenderer !== null && (this._audioBufferSourceNodeRenderer.start = u === void 0 ? [l, d] : [l, d, u]), this.context.state !== "closed") {
                $e(this);
                const f = () => {
                    this._nativeAudioBufferSourceNode.removeEventListener("ended", f), be(this) && _t(this)
                };
                this._nativeAudioBufferSourceNode.addEventListener("ended", f)
            }
        }
        stop(l = 0) {
            this._nativeAudioBufferSourceNode.stop(l), this._audioBufferSourceNodeRenderer !== null && (this._audioBufferSourceNodeRenderer.stop = l)
        }
    },
    Da = (e, t, n, r, s) => () => {
        const o = new WeakMap;
        let a = null,
            c = null;
        const i = async (l, d) => {
            let u = n(l);
            const f = an(u, d);
            if (!f) {
                const p = {
                    buffer: u.buffer,
                    channelCount: u.channelCount,
                    channelCountMode: u.channelCountMode,
                    channelInterpretation: u.channelInterpretation,
                    loop: u.loop,
                    loopEnd: u.loopEnd,
                    loopStart: u.loopStart,
                    playbackRate: u.playbackRate.value
                };
                u = t(d, p), a !== null && u.start(...a), c !== null && u.stop(c)
            }
            return o.set(d, u), f ? await e(d, l.playbackRate, u.playbackRate) : await r(d, l.playbackRate, u.playbackRate), await s(l, d, u), u
        };
        return {
            set start(l) {
                a = l
            },
            set stop(l) {
                c = l
            },
            render(l, d) {
                const u = o.get(d);
                return u !== void 0 ? Promise.resolve(u) : i(l, d)
            }
        }
    },
    Wa = e => "playbackRate" in e,
    Va = e => "frequency" in e && "gain" in e,
    Fa = e => "offset" in e,
    za = e => !("frequency" in e) && "gain" in e,
    qa = e => "detune" in e && "frequency" in e && !("gain" in e),
    $a = e => "pan" in e,
    ee = e => ae(kr, e),
    Ye = e => ae(Nr, e),
    Kt = (e, t) => {
        const {
            activeInputs: n
        } = ee(e);
        n.forEach(s => s.forEach(([o]) => {
            t.includes(e) || Kt(o, [...t, e])
        }));
        const r = Wa(e) ? [e.playbackRate] : Ur(e) ? Array.from(e.parameters.values()) : Va(e) ? [e.Q, e.detune, e.frequency, e.gain] : Fa(e) ? [e.offset] : za(e) ? [e.gain] : qa(e) ? [e.detune, e.frequency] : $a(e) ? [e.pan] : [];
        for (const s of r) {
            const o = Ye(s);
            o !== void 0 && o.activeInputs.forEach(([a]) => Kt(a, t))
        }
        be(e) && _t(e)
    },
    Ga = e => {
        Kt(e.destination, [])
    },
    Ha = e => e === void 0 || typeof e == "number" || typeof e == "string" && (e === "balanced" || e === "interactive" || e === "playback"),
    Xa = (e, t, n, r, s, o, a, c) => class extends e {
        constructor(l, d) {
            const u = o(l),
                f = a(u),
                p = s(u, d, f),
                m = f ? t(c) : null;
            super(l, !1, p, m), this._isNodeOfNativeOfflineAudioContext = f, this._nativeAudioDestinationNode = p
        }
        get channelCount() {
            return this._nativeAudioDestinationNode.channelCount
        }
        set channelCount(l) {
            if (this._isNodeOfNativeOfflineAudioContext) throw r();
            if (l > this._nativeAudioDestinationNode.maxChannelCount) throw n();
            this._nativeAudioDestinationNode.channelCount = l
        }
        get channelCountMode() {
            return this._nativeAudioDestinationNode.channelCountMode
        }
        set channelCountMode(l) {
            if (this._isNodeOfNativeOfflineAudioContext) throw r();
            this._nativeAudioDestinationNode.channelCountMode = l
        }
        get maxChannelCount() {
            return this._nativeAudioDestinationNode.maxChannelCount
        }
    },
    Qa = e => {
        const t = new WeakMap,
            n = async (r, s) => {
                const o = s.destination;
                return t.set(s, o), await e(r, s, o), o
            };
        return {
            render(r, s) {
                const o = t.get(s);
                return o !== void 0 ? Promise.resolve(o) : n(r, s)
            }
        }
    },
    Ya = (e, t, n, r, s, o, a, c) => (i, l) => {
        const d = l.listener,
            u = () => {
                const _ = new Float32Array(1),
                    x = t(l, {
                        channelCount: 1,
                        channelCountMode: "explicit",
                        channelInterpretation: "speakers",
                        numberOfInputs: 9
                    }),
                    E = a(l);
                let C = !1,
                    R = [0, 0, -1, 0, 1, 0],
                    O = [0, 0, 0];
                const S = () => {
                        if (C) return;
                        C = !0;
                        const B = r(l, 256, 9, 0);
                        B.onaudioprocess = ({
                            inputBuffer: j
                        }) => {
                            const U = [o(j, _, 0), o(j, _, 1), o(j, _, 2), o(j, _, 3), o(j, _, 4), o(j, _, 5)];
                            U.some((k, T) => k !== R[T]) && (d.setOrientation(...U), R = U);
                            const N = [o(j, _, 6), o(j, _, 7), o(j, _, 8)];
                            N.some((k, T) => k !== O[T]) && (d.setPosition(...N), O = N)
                        }, x.connect(B)
                    },
                    L = B => j => {
                        j !== R[B] && (R[B] = j, d.setOrientation(...R))
                    },
                    P = B => j => {
                        j !== O[B] && (O[B] = j, d.setPosition(...O))
                    },
                    D = (B, j, U) => {
                        const N = n(l, {
                            channelCount: 1,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            offset: j
                        });
                        N.connect(x, 0, B), N.start(), Object.defineProperty(N.offset, "defaultValue", {
                            get() {
                                return j
                            }
                        });
                        const k = e({
                            context: i
                        }, E, N.offset, Et, Qe);
                        return c(k, "value", T => () => T.call(k), T => W => {
                            try {
                                T.call(k, W)
                            } catch (H) {
                                if (H.code !== 9) throw H
                            }
                            S(), E && U(W)
                        }), k.cancelAndHoldAtTime = (T => E ? () => {
                            throw s()
                        } : (...W) => {
                            const H = T.apply(k, W);
                            return S(), H
                        })(k.cancelAndHoldAtTime), k.cancelScheduledValues = (T => E ? () => {
                            throw s()
                        } : (...W) => {
                            const H = T.apply(k, W);
                            return S(), H
                        })(k.cancelScheduledValues), k.exponentialRampToValueAtTime = (T => E ? () => {
                            throw s()
                        } : (...W) => {
                            const H = T.apply(k, W);
                            return S(), H
                        })(k.exponentialRampToValueAtTime), k.linearRampToValueAtTime = (T => E ? () => {
                            throw s()
                        } : (...W) => {
                            const H = T.apply(k, W);
                            return S(), H
                        })(k.linearRampToValueAtTime), k.setTargetAtTime = (T => E ? () => {
                            throw s()
                        } : (...W) => {
                            const H = T.apply(k, W);
                            return S(), H
                        })(k.setTargetAtTime), k.setValueAtTime = (T => E ? () => {
                            throw s()
                        } : (...W) => {
                            const H = T.apply(k, W);
                            return S(), H
                        })(k.setValueAtTime), k.setValueCurveAtTime = (T => E ? () => {
                            throw s()
                        } : (...W) => {
                            const H = T.apply(k, W);
                            return S(), H
                        })(k.setValueCurveAtTime), k
                    };
                return {
                    forwardX: D(0, 0, L(0)),
                    forwardY: D(1, 0, L(1)),
                    forwardZ: D(2, -1, L(2)),
                    positionX: D(6, 0, P(0)),
                    positionY: D(7, 0, P(1)),
                    positionZ: D(8, 0, P(2)),
                    upX: D(3, 0, L(3)),
                    upY: D(4, 1, L(4)),
                    upZ: D(5, 0, L(5))
                }
            },
            {
                forwardX: f,
                forwardY: p,
                forwardZ: m,
                positionX: g,
                positionY: v,
                positionZ: w,
                upX: y,
                upY: b,
                upZ: M
            } = d.forwardX === void 0 ? u() : d;
        return {
            get forwardX() {
                return f
            },
            get forwardY() {
                return p
            },
            get forwardZ() {
                return m
            },
            get positionX() {
                return g
            },
            get positionY() {
                return v
            },
            get positionZ() {
                return w
            },
            get upX() {
                return y
            },
            get upY() {
                return b
            },
            get upZ() {
                return M
            }
        }
    },
    ft = e => "context" in e,
    Ke = e => ft(e[0]),
    Oe = (e, t, n, r) => {
        for (const s of e)
            if (n(s)) {
                if (r) return !1;
                throw Error("The set contains at least one similar element.")
            } return e.add(t), !0
    },
    zn = (e, t, [n, r], s) => {
        Oe(e, [t, n, r], o => o[0] === t && o[1] === n, s)
    },
    qn = (e, [t, n, r], s) => {
        const o = e.get(t);
        o === void 0 ? e.set(t, new Set([
            [n, r]
        ])) : Oe(o, [n, r], a => a[0] === n, s)
    },
    Wr = e => "inputs" in e,
    Zt = (e, t, n, r) => {
        if (Wr(t)) {
            const s = t.inputs[r];
            return e.connect(s, n, 0), [s, n, 0]
        }
        return e.connect(t, n, r), [t, n, r]
    },
    Vr = (e, t, n) => {
        for (const r of e)
            if (r[0] === t && r[1] === n) return e.delete(r), r;
        return null
    },
    Ka = (e, t, n) => Ct(e, r => r[0] === t && r[1] === n),
    Fr = (e, t) => {
        if (!Xe(e).delete(t)) throw new Error("Missing the expected event listener.")
    },
    zr = (e, t, n) => {
        const r = ae(e, t),
            s = Ct(r, o => o[0] === n);
        return r.size === 0 && e.delete(t), s
    },
    Jt = (e, t, n, r) => {
        Wr(t) ? e.disconnect(t.inputs[r], n, 0) : e.disconnect(t, n, r)
    },
    re = e => ae(Ir, e),
    Ge = e => ae(Or, e),
    ke = e => Ht.has(e),
    ct = e => !Ve.has(e),
    $n = (e, t) => new Promise(n => {
        if (t !== null) n(!0);
        else {
            const r = e.createScriptProcessor(256, 1, 1),
                s = e.createGain(),
                o = e.createBuffer(1, 2, 44100),
                a = o.getChannelData(0);
            a[0] = 1, a[1] = 1;
            const c = e.createBufferSource();
            c.buffer = o, c.loop = !0, c.connect(r).connect(e.destination), c.connect(s), c.disconnect(s), r.onaudioprocess = i => {
                const l = i.inputBuffer.getChannelData(0);
                Array.prototype.some.call(l, d => d === 1) ? n(!0) : n(!1), c.stop(), r.onaudioprocess = null, c.disconnect(r), r.disconnect(e.destination)
            }, c.start()
        }
    }),
    Bt = (e, t) => {
        const n = new Map;
        for (const r of e)
            for (const s of r) {
                const o = n.get(s);
                n.set(s, o === void 0 ? 1 : o + 1)
            }
        n.forEach((r, s) => t(s, r))
    },
    ht = e => "context" in e,
    Za = e => {
        const t = new Map;
        e.connect = (n => (r, s = 0, o = 0) => {
            const a = ht(r) ? n(r, s, o) : n(r, s),
                c = t.get(r);
            return c === void 0 ? t.set(r, [{
                input: o,
                output: s
            }]) : c.every(i => i.input !== o || i.output !== s) && c.push({
                input: o,
                output: s
            }), a
        })(e.connect.bind(e)), e.disconnect = (n => (r, s, o) => {
            if (n.apply(e), r === void 0) t.clear();
            else if (typeof r == "number")
                for (const [a, c] of t) {
                    const i = c.filter(l => l.output !== r);
                    i.length === 0 ? t.delete(a) : t.set(a, i)
                } else if (t.has(r))
                    if (s === void 0) t.delete(r);
                    else {
                        const a = t.get(r);
                        if (a !== void 0) {
                            const c = a.filter(i => i.output !== s && (i.input !== o || o === void 0));
                            c.length === 0 ? t.delete(r) : t.set(r, c)
                        }
                    } for (const [a, c] of t) c.forEach(i => {
                ht(a) ? e.connect(a, i.output, i.input) : e.connect(a, i.output)
            })
        })(e.disconnect)
    },
    Ja = (e, t, n, r) => {
        const {
            activeInputs: s,
            passiveInputs: o
        } = Ye(t), {
            outputs: a
        } = ee(e), c = Xe(e), i = l => {
            const d = re(e),
                u = Ge(t);
            if (l) {
                const f = zr(o, e, n);
                zn(s, e, f, !1), !r && !ke(e) && d.connect(u, n)
            } else {
                const f = Ka(s, e, n);
                qn(o, f, !1), !r && !ke(e) && d.disconnect(u, n)
            }
        };
        return Oe(a, [t, n], l => l[0] === t && l[1] === n, !0) ? (c.add(i), be(e) ? zn(s, e, [n, i], !0) : qn(o, [e, n, i], !0), !0) : !1
    },
    ei = (e, t, n, r) => {
        const {
            activeInputs: s,
            passiveInputs: o
        } = ee(t), a = Vr(s[r], e, n);
        return a === null ? [Br(o, e, n, r)[2], !1] : [a[2], !0]
    },
    ti = (e, t, n) => {
        const {
            activeInputs: r,
            passiveInputs: s
        } = Ye(t), o = Vr(r, e, n);
        return o === null ? [zr(s, e, n)[1], !1] : [o[2], !0]
    },
    cn = (e, t, n, r, s) => {
        const [o, a] = ei(e, n, r, s);
        if (o !== null && (Fr(e, o), a && !t && !ke(e) && Jt(re(e), re(n), r, s)), be(n)) {
            const {
                activeInputs: c
            } = ee(n);
            Yt(n, c)
        }
    },
    ln = (e, t, n, r) => {
        const [s, o] = ti(e, n, r);
        s !== null && (Fr(e, s), o && !t && !ke(e) && re(e).disconnect(Ge(n), r))
    },
    ni = (e, t) => {
        const n = ee(e),
            r = [];
        for (const s of n.outputs) Ke(s) ? cn(e, t, ...s) : ln(e, t, ...s), r.push(s[0]);
        return n.outputs.clear(), r
    },
    ri = (e, t, n) => {
        const r = ee(e),
            s = [];
        for (const o of r.outputs) o[1] === n && (Ke(o) ? cn(e, t, ...o) : ln(e, t, ...o), s.push(o[0]), r.outputs.delete(o));
        return s
    },
    si = (e, t, n, r, s) => {
        const o = ee(e);
        return Array.from(o.outputs).filter(a => a[0] === n && (r === void 0 || a[1] === r) && (s === void 0 || a[2] === s)).map(a => (Ke(a) ? cn(e, t, ...a) : ln(e, t, ...a), o.outputs.delete(a), a[0]))
    },
    oi = (e, t, n, r, s, o, a, c, i, l, d, u, f, p, m, g) => class extends l {
        constructor(w, y, b, M) {
            super(b), this._context = w, this._nativeAudioNode = b;
            const _ = d(w);
            u(_) && n($n, () => $n(_, g)) !== !0 && Za(b), Ir.set(this, b), Pr.set(this, new Set), w.state !== "closed" && y && $e(this), e(this, M, b)
        }
        get channelCount() {
            return this._nativeAudioNode.channelCount
        }
        set channelCount(w) {
            this._nativeAudioNode.channelCount = w
        }
        get channelCountMode() {
            return this._nativeAudioNode.channelCountMode
        }
        set channelCountMode(w) {
            this._nativeAudioNode.channelCountMode = w
        }
        get channelInterpretation() {
            return this._nativeAudioNode.channelInterpretation
        }
        set channelInterpretation(w) {
            this._nativeAudioNode.channelInterpretation = w
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
        connect(w, y = 0, b = 0) {
            if (y < 0 || y >= this._nativeAudioNode.numberOfOutputs) throw s();
            const M = d(this._context),
                _ = m(M);
            if (f(w) || p(w)) throw o();
            if (ft(w)) {
                const C = re(w);
                try {
                    const O = Zt(this._nativeAudioNode, C, y, b),
                        S = ct(this);
                    (_ || S) && this._nativeAudioNode.disconnect(...O), this.context.state !== "closed" && !S && ct(w) && $e(w)
                } catch (O) {
                    throw O.code === 12 ? o() : O
                }
                if (t(this, w, y, b, _)) {
                    const O = i([this], w);
                    Bt(O, r(_))
                }
                return w
            }
            const x = Ge(w);
            if (x.name === "playbackRate" && x.maxValue === 1024) throw a();
            try {
                this._nativeAudioNode.connect(x, y), (_ || ct(this)) && this._nativeAudioNode.disconnect(x, y)
            } catch (C) {
                throw C.code === 12 ? o() : C
            }
            if (Ja(this, w, y, _)) {
                const C = i([this], w);
                Bt(C, r(_))
            }
        }
        disconnect(w, y, b) {
            let M;
            const _ = d(this._context),
                x = m(_);
            if (w === void 0) M = ni(this, x);
            else if (typeof w == "number") {
                if (w < 0 || w >= this.numberOfOutputs) throw s();
                M = ri(this, x, w)
            } else {
                if (y !== void 0 && (y < 0 || y >= this.numberOfOutputs) || ft(w) && b !== void 0 && (b < 0 || b >= w.numberOfInputs)) throw s();
                if (M = si(this, x, w, y, b), M.length === 0) throw o()
            }
            for (const E of M) {
                const C = i([this], E);
                Bt(C, c)
            }
        }
    },
    ai = (e, t, n, r, s, o, a, c, i, l, d, u, f) => (p, m, g, v = null, w = null) => {
        const y = g.value,
            b = new wa(y),
            M = m ? r(b) : null,
            _ = {
                get defaultValue() {
                    return y
                },
                get maxValue() {
                    return v === null ? g.maxValue : v
                },
                get minValue() {
                    return w === null ? g.minValue : w
                },
                get value() {
                    return g.value
                },
                set value(x) {
                    g.value = x, _.setValueAtTime(x, p.context.currentTime)
                },
                cancelAndHoldAtTime(x) {
                    if (typeof g.cancelAndHoldAtTime == "function") M === null && b.flush(p.context.currentTime), b.add(s(x)), g.cancelAndHoldAtTime(x);
                    else {
                        const E = Array.from(b).pop();
                        M === null && b.flush(p.context.currentTime), b.add(s(x));
                        const C = Array.from(b).pop();
                        g.cancelScheduledValues(x), E !== C && C !== void 0 && (C.type === "exponentialRampToValue" ? g.exponentialRampToValueAtTime(C.value, C.endTime) : C.type === "linearRampToValue" ? g.linearRampToValueAtTime(C.value, C.endTime) : C.type === "setValue" ? g.setValueAtTime(C.value, C.startTime) : C.type === "setValueCurve" && g.setValueCurveAtTime(C.values, C.startTime, C.duration))
                    }
                    return _
                },
                cancelScheduledValues(x) {
                    return M === null && b.flush(p.context.currentTime), b.add(o(x)), g.cancelScheduledValues(x), _
                },
                exponentialRampToValueAtTime(x, E) {
                    if (x === 0) throw new RangeError;
                    if (!Number.isFinite(E) || E < 0) throw new RangeError;
                    const C = p.context.currentTime;
                    return M === null && b.flush(C), Array.from(b).length === 0 && (b.add(l(y, C)), g.setValueAtTime(y, C)), b.add(a(x, E)), g.exponentialRampToValueAtTime(x, E), _
                },
                linearRampToValueAtTime(x, E) {
                    const C = p.context.currentTime;
                    return M === null && b.flush(C), Array.from(b).length === 0 && (b.add(l(y, C)), g.setValueAtTime(y, C)), b.add(c(x, E)), g.linearRampToValueAtTime(x, E), _
                },
                setTargetAtTime(x, E, C) {
                    return M === null && b.flush(p.context.currentTime), b.add(i(x, E, C)), g.setTargetAtTime(x, E, C), _
                },
                setValueAtTime(x, E) {
                    return M === null && b.flush(p.context.currentTime), b.add(l(x, E)), g.setValueAtTime(x, E), _
                },
                setValueCurveAtTime(x, E, C) {
                    const R = x instanceof Float32Array ? x : new Float32Array(x);
                    if (u !== null && u.name === "webkitAudioContext") {
                        const O = E + C,
                            S = p.context.sampleRate,
                            L = Math.ceil(E * S),
                            P = Math.floor(O * S),
                            D = P - L,
                            B = new Float32Array(D);
                        for (let U = 0; U < D; U += 1) {
                            const N = (R.length - 1) / C * ((L + U) / S - E),
                                k = Math.floor(N),
                                T = Math.ceil(N);
                            B[U] = k === T ? R[k] : (1 - (N - k)) * R[k] + (1 - (T - N)) * R[T]
                        }
                        M === null && b.flush(p.context.currentTime), b.add(d(B, E, C)), g.setValueCurveAtTime(B, E, C);
                        const j = P / S;
                        j < O && f(_, B[B.length - 1], j), f(_, R[R.length - 1], O)
                    } else M === null && b.flush(p.context.currentTime), b.add(d(R, E, C)), g.setValueCurveAtTime(R, E, C);
                    return _
                }
            };
        return n.set(_, g), t.set(_, p), e(_, M), _
    },
    ii = e => ({
        replay(t) {
            for (const n of e)
                if (n.type === "exponentialRampToValue") {
                    const {
                        endTime: r,
                        value: s
                    } = n;
                    t.exponentialRampToValueAtTime(s, r)
                } else if (n.type === "linearRampToValue") {
                const {
                    endTime: r,
                    value: s
                } = n;
                t.linearRampToValueAtTime(s, r)
            } else if (n.type === "setTarget") {
                const {
                    startTime: r,
                    target: s,
                    timeConstant: o
                } = n;
                t.setTargetAtTime(s, r, o)
            } else if (n.type === "setValue") {
                const {
                    startTime: r,
                    value: s
                } = n;
                t.setValueAtTime(s, r)
            } else if (n.type === "setValueCurve") {
                const {
                    duration: r,
                    startTime: s,
                    values: o
                } = n;
                t.setValueCurveAtTime(o, s, r)
            } else throw new Error("Can't apply an unknown automation.")
        }
    });
class qr {
    constructor(t) {
        this._map = new Map(t)
    }
    get size() {
        return this._map.size
    }
    entries() {
        return this._map.entries()
    }
    forEach(t, n = null) {
        return this._map.forEach((r, s) => t.call(n, r, s, this))
    }
    get(t) {
        return this._map.get(t)
    }
    has(t) {
        return this._map.has(t)
    }
    keys() {
        return this._map.keys()
    }
    values() {
        return this._map.values()
    }
}
const ci = {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: 1,
        numberOfOutputs: 1,
        parameterData: {},
        processorOptions: {}
    },
    li = (e, t, n, r, s, o, a, c, i, l, d, u, f, p) => class extends t {
        constructor(g, v, w) {
            var y;
            const b = c(g),
                M = i(b),
                _ = d({
                    ...ci,
                    ...w
                });
            f(_);
            const x = Xt.get(b),
                E = x == null ? void 0 : x.get(v),
                C = M || b.state !== "closed" ? b : (y = a(b)) !== null && y !== void 0 ? y : b,
                R = s(C, M ? null : g.baseLatency, l, v, E, _),
                O = M ? r(v, _, E) : null;
            super(g, !0, R, O);
            const S = [];
            R.parameters.forEach((P, D) => {
                const B = n(this, M, P);
                S.push([D, B])
            }), this._nativeAudioWorkletNode = R, this._onprocessorerror = null, this._parameters = new qr(S), M && e(b, this);
            const {
                activeInputs: L
            } = o(this);
            u(R, L)
        }
        get onprocessorerror() {
            return this._onprocessorerror
        }
        set onprocessorerror(g) {
            const v = typeof g == "function" ? p(this, g) : null;
            this._nativeAudioWorkletNode.onprocessorerror = v;
            const w = this._nativeAudioWorkletNode.onprocessorerror;
            this._onprocessorerror = w !== null && w === v ? g : w
        }
        get parameters() {
            return this._parameters === null ? this._nativeAudioWorkletNode.parameters : this._parameters
        }
        get port() {
            return this._nativeAudioWorkletNode.port
        }
    };

function mt(e, t, n, r, s) {
    if (typeof e.copyFromChannel == "function") t[n].byteLength === 0 && (t[n] = new Float32Array(128)), e.copyFromChannel(t[n], r, s);
    else {
        const o = e.getChannelData(r);
        if (t[n].byteLength === 0) t[n] = o.slice(s, s + 128);
        else {
            const a = new Float32Array(o.buffer, s * Float32Array.BYTES_PER_ELEMENT, 128);
            t[n].set(a)
        }
    }
}
const $r = (e, t, n, r, s) => {
        typeof e.copyToChannel == "function" ? t[n].byteLength !== 0 && e.copyToChannel(t[n], r, s) : t[n].byteLength !== 0 && e.getChannelData(r).set(t[n], s)
    },
    pt = (e, t) => {
        const n = [];
        for (let r = 0; r < e; r += 1) {
            const s = [],
                o = typeof t == "number" ? t : t[r];
            for (let a = 0; a < o; a += 1) s.push(new Float32Array(128));
            n.push(s)
        }
        return n
    },
    ui = (e, t) => {
        const n = ae(Qt, e),
            r = re(t);
        return ae(n, r)
    },
    di = async (e, t, n, r, s, o, a) => {
        const c = t === null ? Math.ceil(e.context.length / 128) * 128 : t.length,
            i = r.channelCount * r.numberOfInputs,
            l = s.reduce((v, w) => v + w, 0),
            d = l === 0 ? null : n.createBuffer(l, c, n.sampleRate);
        if (o === void 0) throw new Error("Missing the processor constructor.");
        const u = ee(e),
            f = await ui(n, e),
            p = pt(r.numberOfInputs, r.channelCount),
            m = pt(r.numberOfOutputs, s),
            g = Array.from(e.parameters.keys()).reduce((v, w) => ({
                ...v,
                [w]: new Float32Array(128)
            }), {});
        for (let v = 0; v < c; v += 128) {
            if (r.numberOfInputs > 0 && t !== null)
                for (let w = 0; w < r.numberOfInputs; w += 1)
                    for (let y = 0; y < r.channelCount; y += 1) mt(t, p[w], y, y, v);
            o.parameterDescriptors !== void 0 && t !== null && o.parameterDescriptors.forEach(({
                name: w
            }, y) => {
                mt(t, g, w, i + y, v)
            });
            for (let w = 0; w < r.numberOfInputs; w += 1)
                for (let y = 0; y < s[w]; y += 1) m[w][y].byteLength === 0 && (m[w][y] = new Float32Array(128));
            try {
                const w = p.map((b, M) => u.activeInputs[M].size === 0 ? [] : b),
                    y = a(v / n.sampleRate, n.sampleRate, () => f.process(w, m, g));
                if (d !== null)
                    for (let b = 0, M = 0; b < r.numberOfOutputs; b += 1) {
                        for (let _ = 0; _ < s[b]; _ += 1) $r(d, m[b], _, M + _, v);
                        M += s[b]
                    }
                if (!y) break
            } catch (w) {
                e.dispatchEvent(new ErrorEvent("processorerror", {
                    colno: w.colno,
                    filename: w.filename,
                    lineno: w.lineno,
                    message: w.message
                }));
                break
            }
        }
        return d
    }, fi = (e, t, n, r, s, o, a, c, i, l, d, u, f, p, m, g) => (v, w, y) => {
        const b = new WeakMap;
        let M = null;
        const _ = async (x, E) => {
            let C = d(x),
                R = null;
            const O = an(C, E),
                S = Array.isArray(w.outputChannelCount) ? w.outputChannelCount : Array.from(w.outputChannelCount);
            if (u === null) {
                const L = S.reduce((j, U) => j + U, 0),
                    P = s(E, {
                        channelCount: Math.max(1, L),
                        channelCountMode: "explicit",
                        channelInterpretation: "discrete",
                        numberOfOutputs: Math.max(1, L)
                    }),
                    D = [];
                for (let j = 0; j < x.numberOfOutputs; j += 1) D.push(r(E, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    numberOfInputs: S[j]
                }));
                const B = a(E, {
                    channelCount: w.channelCount,
                    channelCountMode: w.channelCountMode,
                    channelInterpretation: w.channelInterpretation,
                    gain: 1
                });
                B.connect = t.bind(null, D), B.disconnect = i.bind(null, D), R = [P, D, B]
            } else O || (C = new u(E, v));
            if (b.set(E, R === null ? C : R[2]), R !== null) {
                if (M === null) {
                    if (y === void 0) throw new Error("Missing the processor constructor.");
                    if (f === null) throw new Error("Missing the native OfflineAudioContext constructor.");
                    const U = x.channelCount * x.numberOfInputs,
                        N = y.parameterDescriptors === void 0 ? 0 : y.parameterDescriptors.length,
                        k = U + N;
                    M = di(x, k === 0 ? null : await (async () => {
                        const W = new f(k, Math.ceil(x.context.length / 128) * 128, E.sampleRate),
                            H = [],
                            Y = [];
                        for (let $ = 0; $ < w.numberOfInputs; $ += 1) H.push(a(W, {
                            channelCount: w.channelCount,
                            channelCountMode: w.channelCountMode,
                            channelInterpretation: w.channelInterpretation,
                            gain: 1
                        })), Y.push(s(W, {
                            channelCount: w.channelCount,
                            channelCountMode: "explicit",
                            channelInterpretation: "discrete",
                            numberOfOutputs: w.channelCount
                        }));
                        const ue = await Promise.all(Array.from(x.parameters.values()).map(async $ => {
                                const Z = o(W, {
                                    channelCount: 1,
                                    channelCountMode: "explicit",
                                    channelInterpretation: "discrete",
                                    offset: $.value
                                });
                                return await p(W, $, Z.offset), Z
                            })),
                            pe = r(W, {
                                channelCount: 1,
                                channelCountMode: "explicit",
                                channelInterpretation: "speakers",
                                numberOfInputs: Math.max(1, U + N)
                            });
                        for (let $ = 0; $ < w.numberOfInputs; $ += 1) {
                            H[$].connect(Y[$]);
                            for (let Z = 0; Z < w.channelCount; Z += 1) Y[$].connect(pe, Z, $ * w.channelCount + Z)
                        }
                        for (const [$, Z] of ue.entries()) Z.connect(pe, 0, U + $), Z.start(0);
                        return pe.connect(W.destination), await Promise.all(H.map($ => m(x, W, $))), g(W)
                    })(), E, w, S, y, l)
                }
                const L = await M,
                    P = n(E, {
                        buffer: null,
                        channelCount: 2,
                        channelCountMode: "max",
                        channelInterpretation: "speakers",
                        loop: !1,
                        loopEnd: 0,
                        loopStart: 0,
                        playbackRate: 1
                    }),
                    [D, B, j] = R;
                L !== null && (P.buffer = L, P.start(0)), P.connect(D);
                for (let U = 0, N = 0; U < x.numberOfOutputs; U += 1) {
                    const k = B[U];
                    for (let T = 0; T < S[U]; T += 1) D.connect(k, N + T, T);
                    N += S[U]
                }
                return j
            }
            if (O)
                for (const [L, P] of x.parameters.entries()) await e(E, P, C.parameters.get(L));
            else
                for (const [L, P] of x.parameters.entries()) await p(E, P, C.parameters.get(L));
            return await m(x, E, C), C
        };
        return {
            render(x, E) {
                c(E, x);
                const C = b.get(E);
                return C !== void 0 ? Promise.resolve(C) : _(x, E)
            }
        }
    }, hi = (e, t) => (n, r) => {
        const s = t.get(n);
        if (s !== void 0) return s;
        const o = e.get(n);
        if (o !== void 0) return o;
        try {
            const a = r();
            return a instanceof Promise ? (e.set(n, a), a.catch(() => !1).then(c => (e.delete(n), t.set(n, c), c))) : (t.set(n, a), a)
        } catch {
            return t.set(n, !1), !1
        }
    }, mi = e => (t, n, r) => e(n, t, r), pi = e => (t, n, r = 0, s = 0) => {
        const o = t[r];
        if (o === void 0) throw e();
        return ht(n) ? o.connect(n, 0, s) : o.connect(n, 0)
    }, gi = {
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        offset: 1
    }, vi = (e, t, n, r, s, o, a) => class extends e {
        constructor(i, l) {
            const d = s(i),
                u = {
                    ...gi,
                    ...l
                },
                f = r(d, u),
                p = o(d),
                m = p ? n() : null;
            super(i, !1, f, m), this._constantSourceNodeRenderer = m, this._nativeConstantSourceNode = f, this._offset = t(this, p, f.offset, Et, Qe), this._onended = null
        }
        get offset() {
            return this._offset
        }
        get onended() {
            return this._onended
        }
        set onended(i) {
            const l = typeof i == "function" ? a(this, i) : null;
            this._nativeConstantSourceNode.onended = l;
            const d = this._nativeConstantSourceNode.onended;
            this._onended = d !== null && d === l ? i : d
        }
        start(i = 0) {
            if (this._nativeConstantSourceNode.start(i), this._constantSourceNodeRenderer !== null && (this._constantSourceNodeRenderer.start = i), this.context.state !== "closed") {
                $e(this);
                const l = () => {
                    this._nativeConstantSourceNode.removeEventListener("ended", l), be(this) && _t(this)
                };
                this._nativeConstantSourceNode.addEventListener("ended", l)
            }
        }
        stop(i = 0) {
            this._nativeConstantSourceNode.stop(i), this._constantSourceNodeRenderer !== null && (this._constantSourceNodeRenderer.stop = i)
        }
    }, wi = (e, t, n, r, s) => () => {
        const o = new WeakMap;
        let a = null,
            c = null;
        const i = async (l, d) => {
            let u = n(l);
            const f = an(u, d);
            if (!f) {
                const p = {
                    channelCount: u.channelCount,
                    channelCountMode: u.channelCountMode,
                    channelInterpretation: u.channelInterpretation,
                    offset: u.offset.value
                };
                u = t(d, p), a !== null && u.start(a), c !== null && u.stop(c)
            }
            return o.set(d, u), f ? await e(d, l.offset, u.offset) : await r(d, l.offset, u.offset), await s(l, d, u), u
        };
        return {
            set start(l) {
                a = l
            },
            set stop(l) {
                c = l
            },
            render(l, d) {
                const u = o.get(d);
                return u !== void 0 ? Promise.resolve(u) : i(l, d)
            }
        }
    }, yi = e => t => (e[0] = t, e[0]), bi = (e, t, n, r, s, o, a, c) => (i, l) => {
        const d = t.get(i);
        if (d === void 0) throw new Error("Missing the expected cycle count.");
        const u = o(i.context),
            f = c(u);
        if (d === l) {
            if (t.delete(i), !f && a(i)) {
                const p = r(i),
                    {
                        outputs: m
                    } = n(i);
                for (const g of m)
                    if (Ke(g)) {
                        const v = r(g[0]);
                        e(p, v, g[1], g[2])
                    } else {
                        const v = s(g[0]);
                        p.connect(v, g[1])
                    }
            }
        } else t.set(i, d - l)
    }, Ci = e => (t, n, r, s) => e(t[s], o => o[0] === n && o[1] === r), _i = e => (t, n) => {
        e(t).delete(n)
    }, Ei = e => "delayTime" in e, xi = (e, t, n) => function r(s, o) {
        const a = ft(o) ? o : n(e, o);
        if (Ei(a)) return [];
        if (s[0] === a) return [s];
        if (s.includes(a)) return [];
        const {
            outputs: c
        } = t(a);
        return Array.from(c).map(i => r([...s, a], i[0])).reduce((i, l) => i.concat(l), [])
    }, it = (e, t, n) => {
        const r = t[n];
        if (r === void 0) throw e();
        return r
    }, Ai = e => (t, n = void 0, r = void 0, s = 0) => n === void 0 ? t.forEach(o => o.disconnect()) : typeof n == "number" ? it(e, t, n).disconnect() : ht(n) ? r === void 0 ? t.forEach(o => o.disconnect(n)) : s === void 0 ? it(e, t, r).disconnect(n, 0) : it(e, t, r).disconnect(n, 0, s) : r === void 0 ? t.forEach(o => o.disconnect(n)) : it(e, t, r).disconnect(n, 0), Ti = e => t => new Promise((n, r) => {
        if (e === null) {
            r(new SyntaxError);
            return
        }
        const s = e.document.head;
        if (s === null) r(new SyntaxError);
        else {
            const o = e.document.createElement("script"),
                a = new Blob([t], {
                    type: "application/javascript"
                }),
                c = URL.createObjectURL(a),
                i = e.onerror,
                l = () => {
                    e.onerror = i, URL.revokeObjectURL(c)
                };
            e.onerror = (d, u, f, p, m) => {
                if (u === c || u === e.location.href && f === 1 && p === 1) return l(), r(m), !1;
                if (i !== null) return i(d, u, f, p, m)
            }, o.onerror = () => {
                l(), r(new SyntaxError)
            }, o.onload = () => {
                l(), n()
            }, o.src = c, o.type = "module", s.appendChild(o)
        }
    }), Mi = e => class {
        constructor(n) {
            this._nativeEventTarget = n, this._listeners = new WeakMap
        }
        addEventListener(n, r, s) {
            if (r !== null) {
                let o = this._listeners.get(r);
                o === void 0 && (o = e(this, r), typeof r == "function" && this._listeners.set(r, o)), this._nativeEventTarget.addEventListener(n, o, s)
            }
        }
        dispatchEvent(n) {
            return this._nativeEventTarget.dispatchEvent(n)
        }
        removeEventListener(n, r, s) {
            const o = r === null ? void 0 : this._listeners.get(r);
            this._nativeEventTarget.removeEventListener(n, o === void 0 ? null : o, s)
        }
    }, Si = e => (t, n, r) => {
        Object.defineProperties(e, {
            currentFrame: {
                configurable: !0,
                get() {
                    return Math.round(t * n)
                }
            },
            currentTime: {
                configurable: !0,
                get() {
                    return t
                }
            }
        });
        try {
            return r()
        } finally {
            e !== null && (delete e.currentFrame, delete e.currentTime)
        }
    }, Ri = e => async t => {
        try {
            const n = await fetch(t);
            if (n.ok) return [await n.text(), n.url]
        } catch {}
        throw e()
    }, ki = (e, t) => n => t(e, n), Ii = e => t => {
        const n = e(t);
        if (n.renderer === null) throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
        return n.renderer
    }, Ni = e => t => {
        var n;
        return (n = e.get(t)) !== null && n !== void 0 ? n : 0
    }, Oi = e => t => {
        const n = e(t);
        if (n.renderer === null) throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
        return n.renderer
    }, ji = e => t => e.get(t), oe = () => new DOMException("", "InvalidStateError"), Pi = e => t => {
        const n = e.get(t);
        if (n === void 0) throw oe();
        return n
    }, Li = (e, t) => n => {
        let r = e.get(n);
        if (r !== void 0) return r;
        if (t === null) throw new Error("Missing the native OfflineAudioContext constructor.");
        return r = new t(1, 1, 44100), e.set(n, r), r
    }, Bi = e => t => {
        const n = e.get(t);
        if (n === void 0) throw new Error("The context has no set of AudioWorkletNodes.");
        return n
    }, Ui = () => new DOMException("", "InvalidAccessError"), Di = (e, t, n, r, s, o) => a => (c, i) => {
        const l = e.get(c);
        if (l === void 0) {
            if (!a && o(c)) {
                const d = r(c),
                    {
                        outputs: u
                    } = n(c);
                for (const f of u)
                    if (Ke(f)) {
                        const p = r(f[0]);
                        t(d, p, f[1], f[2])
                    } else {
                        const p = s(f[0]);
                        d.disconnect(p, f[1])
                    }
            }
            e.set(c, i)
        } else e.set(c, l + i)
    }, Wi = e => t => e !== null && t instanceof e, Vi = e => t => e !== null && typeof e.AudioNode == "function" && t instanceof e.AudioNode, Fi = e => t => e !== null && typeof e.AudioParam == "function" && t instanceof e.AudioParam, zi = e => t => e !== null && t instanceof e, qi = e => e !== null && e.isSecureContext, $i = (e, t, n, r) => class extends e {
        constructor(o, a) {
            const c = n(o),
                i = t(c, a);
            if (r(c)) throw new TypeError;
            super(o, !0, i, null), this._nativeMediaStreamAudioSourceNode = i
        }
        get mediaStream() {
            return this._nativeMediaStreamAudioSourceNode.mediaStream
        }
    }, Gi = (e, t, n, r, s) => class extends r {
        constructor(a = {}) {
            if (s === null) throw new Error("Missing the native AudioContext constructor.");
            let c;
            try {
                c = new s(a)
            } catch (d) {
                throw d.code === 12 && d.message === "sampleRate is not in range" ? t() : d
            }
            if (c === null) throw n();
            if (!Ha(a.latencyHint)) throw new TypeError(`The provided value '${a.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
            if (a.sampleRate !== void 0 && c.sampleRate !== a.sampleRate) throw t();
            super(c, 2);
            const {
                latencyHint: i
            } = a, {
                sampleRate: l
            } = c;
            if (this._baseLatency = typeof c.baseLatency == "number" ? c.baseLatency : i === "balanced" ? 512 / l : i === "interactive" || i === void 0 ? 256 / l : i === "playback" ? 1024 / l : Math.max(2, Math.min(128, Math.round(i * l / 128))) * 128 / l, this._nativeAudioContext = c, s.name === "webkitAudioContext" ? (this._nativeGainNode = c.createGain(), this._nativeOscillatorNode = c.createOscillator(), this._nativeGainNode.gain.value = 1e-37, this._nativeOscillatorNode.connect(this._nativeGainNode).connect(c.destination), this._nativeOscillatorNode.start()) : (this._nativeGainNode = null, this._nativeOscillatorNode = null), this._state = null, c.state === "running") {
                this._state = "suspended";
                const d = () => {
                    this._state === "suspended" && (this._state = null), c.removeEventListener("statechange", d)
                };
                c.addEventListener("statechange", d)
            }
        }
        get baseLatency() {
            return this._baseLatency
        }
        get state() {
            return this._state !== null ? this._state : this._nativeAudioContext.state
        }
        close() {
            return this.state === "closed" ? this._nativeAudioContext.close().then(() => {
                throw e()
            }) : (this._state === "suspended" && (this._state = null), this._nativeAudioContext.close().then(() => {
                this._nativeGainNode !== null && this._nativeOscillatorNode !== null && (this._nativeOscillatorNode.stop(), this._nativeGainNode.disconnect(), this._nativeOscillatorNode.disconnect()), Ga(this)
            }))
        }
        resume() {
            return this._state === "suspended" ? new Promise((a, c) => {
                const i = () => {
                    this._nativeAudioContext.removeEventListener("statechange", i), this._nativeAudioContext.state === "running" ? a() : this.resume().then(a, c)
                };
                this._nativeAudioContext.addEventListener("statechange", i)
            }) : this._nativeAudioContext.resume().catch(a => {
                throw a === void 0 || a.code === 15 ? e() : a
            })
        }
        suspend() {
            return this._nativeAudioContext.suspend().catch(a => {
                throw a === void 0 ? e() : a
            })
        }
    }, Hi = (e, t, n, r, s, o) => class extends n {
        constructor(c, i) {
            super(c), this._nativeContext = c, jr.set(this, c), r(c) && s.set(c, new Set), this._destination = new e(this, i), this._listener = t(this, c), this._onstatechange = null
        }
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
        set onstatechange(c) {
            const i = typeof c == "function" ? o(this, c) : null;
            this._nativeContext.onstatechange = i;
            const l = this._nativeContext.onstatechange;
            this._onstatechange = l !== null && l === i ? c : l
        }
        get sampleRate() {
            return this._nativeContext.sampleRate
        }
        get state() {
            return this._nativeContext.state
        }
    }, Gn = e => {
        const t = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
        try {
            const n = e.decodeAudioData(t.buffer, () => {});
            return n === void 0 ? !1 : (n.catch(() => {}), !0)
        } catch {}
        return !1
    }, Xi = (e, t) => (n, r, s) => {
        const o = new Set;
        return n.connect = (a => (c, i = 0, l = 0) => {
            const d = o.size === 0;
            if (t(c)) return a.call(n, c, i, l), e(o, [c, i, l], u => u[0] === c && u[1] === i && u[2] === l, !0), d && r(), c;
            a.call(n, c, i), e(o, [c, i], u => u[0] === c && u[1] === i, !0), d && r()
        })(n.connect), n.disconnect = (a => (c, i, l) => {
            const d = o.size > 0;
            if (c === void 0) a.apply(n), o.clear();
            else if (typeof c == "number") {
                a.call(n, c);
                for (const f of o) f[1] === c && o.delete(f)
            } else {
                t(c) ? a.call(n, c, i, l) : a.call(n, c, i);
                for (const f of o) f[0] === c && (i === void 0 || f[1] === i) && (l === void 0 || f[2] === l) && o.delete(f)
            }
            const u = o.size === 0;
            d && u && s()
        })(n.disconnect), n
    }, Se = (e, t, n) => {
        const r = t[n];
        r !== void 0 && r !== e[n] && (e[n] = r)
    }, Ze = (e, t) => {
        Se(e, t, "channelCount"), Se(e, t, "channelCountMode"), Se(e, t, "channelInterpretation")
    }, Qi = e => e === null ? null : e.hasOwnProperty("AudioBuffer") ? e.AudioBuffer : null, un = (e, t, n) => {
        const r = t[n];
        r !== void 0 && r !== e[n].value && (e[n].value = r)
    }, Yi = e => {
        e.start = (t => {
            let n = !1;
            return (r = 0, s = 0, o) => {
                if (n) throw oe();
                t.call(e, r, s, o), n = !0
            }
        })(e.start)
    }, Gr = e => {
        e.start = (t => (n = 0, r = 0, s) => {
            if (typeof s == "number" && s < 0 || r < 0 || n < 0) throw new RangeError("The parameters can't be negative.");
            t.call(e, n, r, s)
        })(e.start)
    }, Hr = e => {
        e.stop = (t => (n = 0) => {
            if (n < 0) throw new RangeError("The parameter can't be negative.");
            t.call(e, n)
        })(e.stop)
    }, Ki = (e, t, n, r, s, o, a, c, i, l, d) => (u, f) => {
        const p = u.createBufferSource();
        return Ze(p, f), un(p, f, "playbackRate"), Se(p, f, "buffer"), Se(p, f, "loop"), Se(p, f, "loopEnd"), Se(p, f, "loopStart"), t(n, () => n(u)) || Yi(p), t(r, () => r(u)) || i(p), t(s, () => s(u)) || l(p, u), t(o, () => o(u)) || Gr(p), t(a, () => a(u)) || d(p, u), t(c, () => c(u)) || Hr(p), e(u, p), p
    }, Zi = e => e === null ? null : e.hasOwnProperty("AudioContext") ? e.AudioContext : e.hasOwnProperty("webkitAudioContext") ? e.webkitAudioContext : null, Ji = (e, t) => (n, r, s) => {
        const o = n.destination;
        if (o.channelCount !== r) try {
            o.channelCount = r
        } catch {}
        s && o.channelCountMode !== "explicit" && (o.channelCountMode = "explicit"), o.maxChannelCount === 0 && Object.defineProperty(o, "maxChannelCount", {
            value: r
        });
        const a = e(n, {
            channelCount: r,
            channelCountMode: o.channelCountMode,
            channelInterpretation: o.channelInterpretation,
            gain: 1
        });
        return t(a, "channelCount", c => () => c.call(a), c => i => {
            c.call(a, i);
            try {
                o.channelCount = i
            } catch (l) {
                if (i > o.maxChannelCount) throw l
            }
        }), t(a, "channelCountMode", c => () => c.call(a), c => i => {
            c.call(a, i), o.channelCountMode = i
        }), t(a, "channelInterpretation", c => () => c.call(a), c => i => {
            c.call(a, i), o.channelInterpretation = i
        }), Object.defineProperty(a, "maxChannelCount", {
            get: () => o.maxChannelCount
        }), a.connect(o), a
    }, ec = e => e === null ? null : e.hasOwnProperty("AudioWorkletNode") ? e.AudioWorkletNode : null, tc = e => {
        const {
            port1: t
        } = new MessageChannel;
        try {
            t.postMessage(e)
        } finally {
            t.close()
        }
    }, nc = (e, t, n, r, s) => (o, a, c, i, l, d) => {
        if (c !== null) try {
            const u = new c(o, i, d),
                f = new Map;
            let p = null;
            if (Object.defineProperties(u, {
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
                        get: () => p,
                        set: m => {
                            typeof p == "function" && u.removeEventListener("processorerror", p), p = typeof m == "function" ? m : null, typeof p == "function" && u.addEventListener("processorerror", p)
                        }
                    }
                }), u.addEventListener = (m => (...g) => {
                    if (g[0] === "processorerror") {
                        const v = typeof g[1] == "function" ? g[1] : typeof g[1] == "object" && g[1] !== null && typeof g[1].handleEvent == "function" ? g[1].handleEvent : null;
                        if (v !== null) {
                            const w = f.get(g[1]);
                            w !== void 0 ? g[1] = w : (g[1] = y => {
                                y.type === "error" ? (Object.defineProperties(y, {
                                    type: {
                                        value: "processorerror"
                                    }
                                }), v(y)) : v(new ErrorEvent(g[0], {
                                    ...y
                                }))
                            }, f.set(v, g[1]))
                        }
                    }
                    return m.call(u, "error", g[1], g[2]), m.call(u, ...g)
                })(u.addEventListener), u.removeEventListener = (m => (...g) => {
                    if (g[0] === "processorerror") {
                        const v = f.get(g[1]);
                        v !== void 0 && (f.delete(g[1]), g[1] = v)
                    }
                    return m.call(u, "error", g[1], g[2]), m.call(u, g[0], g[1], g[2])
                })(u.removeEventListener), d.numberOfOutputs !== 0) {
                const m = n(o, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    gain: 0
                });
                return u.connect(m).connect(o.destination), s(u, () => m.disconnect(), () => m.connect(o.destination))
            }
            return u
        } catch (u) {
            throw u.code === 11 ? r() : u
        }
        if (l === void 0) throw r();
        return tc(d), t(o, a, l, d)
    }, rc = (e, t) => e === null ? 512 : Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(e * t))))), sc = e => new Promise((t, n) => {
        const {
            port1: r,
            port2: s
        } = new MessageChannel;
        r.onmessage = ({
            data: o
        }) => {
            r.close(), s.close(), t(o)
        }, r.onmessageerror = ({
            data: o
        }) => {
            r.close(), s.close(), n(o)
        }, s.postMessage(e)
    }), oc = async (e, t) => {
        const n = await sc(t);
        return new e(n)
    }, ac = (e, t, n, r) => {
        let s = Qt.get(e);
        s === void 0 && (s = new WeakMap, Qt.set(e, s));
        const o = oc(n, r);
        return s.set(t, o), o
    }, ic = (e, t, n, r, s, o, a, c, i, l, d, u, f) => (p, m, g, v) => {
        if (v.numberOfInputs === 0 && v.numberOfOutputs === 0) throw i();
        const w = Array.isArray(v.outputChannelCount) ? v.outputChannelCount : Array.from(v.outputChannelCount);
        if (w.some(A => A < 1)) throw i();
        if (w.length !== v.numberOfOutputs) throw t();
        if (v.channelCountMode !== "explicit") throw i();
        const y = v.channelCount * v.numberOfInputs,
            b = w.reduce((A, I) => A + I, 0),
            M = g.parameterDescriptors === void 0 ? 0 : g.parameterDescriptors.length;
        if (y + M > 6 || b > 6) throw i();
        const _ = new MessageChannel,
            x = [],
            E = [];
        for (let A = 0; A < v.numberOfInputs; A += 1) x.push(a(p, {
            channelCount: v.channelCount,
            channelCountMode: v.channelCountMode,
            channelInterpretation: v.channelInterpretation,
            gain: 1
        })), E.push(s(p, {
            channelCount: v.channelCount,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: v.channelCount
        }));
        const C = [];
        if (g.parameterDescriptors !== void 0)
            for (const {
                    defaultValue: A,
                    maxValue: I,
                    minValue: X,
                    name: q
                }
                of g.parameterDescriptors) {
                const F = o(p, {
                    channelCount: 1,
                    channelCountMode: "explicit",
                    channelInterpretation: "discrete",
                    offset: v.parameterData[q] !== void 0 ? v.parameterData[q] : A === void 0 ? 0 : A
                });
                Object.defineProperties(F.offset, {
                    defaultValue: {
                        get: () => A === void 0 ? 0 : A
                    },
                    maxValue: {
                        get: () => I === void 0 ? Et : I
                    },
                    minValue: {
                        get: () => X === void 0 ? Qe : X
                    }
                }), C.push(F)
            }
        const R = r(p, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: Math.max(1, y + M)
            }),
            O = rc(m, p.sampleRate),
            S = c(p, O, y + M, Math.max(1, b)),
            L = s(p, {
                channelCount: Math.max(1, b),
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                numberOfOutputs: Math.max(1, b)
            }),
            P = [];
        for (let A = 0; A < v.numberOfOutputs; A += 1) P.push(r(p, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            numberOfInputs: w[A]
        }));
        for (let A = 0; A < v.numberOfInputs; A += 1) {
            x[A].connect(E[A]);
            for (let I = 0; I < v.channelCount; I += 1) E[A].connect(R, I, A * v.channelCount + I)
        }
        const D = new qr(g.parameterDescriptors === void 0 ? [] : g.parameterDescriptors.map(({
            name: A
        }, I) => {
            const X = C[I];
            return X.connect(R, 0, y + I), X.start(0), [A, X.offset]
        }));
        R.connect(S);
        let B = v.channelInterpretation,
            j = null;
        const U = v.numberOfOutputs === 0 ? [S] : P,
            N = {
                get bufferSize() {
                    return O
                },
                get channelCount() {
                    return v.channelCount
                },
                set channelCount(A) {
                    throw n()
                },
                get channelCountMode() {
                    return v.channelCountMode
                },
                set channelCountMode(A) {
                    throw n()
                },
                get channelInterpretation() {
                    return B
                },
                set channelInterpretation(A) {
                    for (const I of x) I.channelInterpretation = A;
                    B = A
                },
                get context() {
                    return S.context
                },
                get inputs() {
                    return x
                },
                get numberOfInputs() {
                    return v.numberOfInputs
                },
                get numberOfOutputs() {
                    return v.numberOfOutputs
                },
                get onprocessorerror() {
                    return j
                },
                set onprocessorerror(A) {
                    typeof j == "function" && N.removeEventListener("processorerror", j), j = typeof A == "function" ? A : null, typeof j == "function" && N.addEventListener("processorerror", j)
                },
                get parameters() {
                    return D
                },
                get port() {
                    return _.port2
                },
                addEventListener(...A) {
                    return S.addEventListener(A[0], A[1], A[2])
                },
                connect: e.bind(null, U),
                disconnect: l.bind(null, U),
                dispatchEvent(...A) {
                    return S.dispatchEvent(A[0])
                },
                removeEventListener(...A) {
                    return S.removeEventListener(A[0], A[1], A[2])
                }
            },
            k = new Map;
        _.port1.addEventListener = (A => (...I) => {
            if (I[0] === "message") {
                const X = typeof I[1] == "function" ? I[1] : typeof I[1] == "object" && I[1] !== null && typeof I[1].handleEvent == "function" ? I[1].handleEvent : null;
                if (X !== null) {
                    const q = k.get(I[1]);
                    q !== void 0 ? I[1] = q : (I[1] = F => {
                        d(p.currentTime, p.sampleRate, () => X(F))
                    }, k.set(X, I[1]))
                }
            }
            return A.call(_.port1, I[0], I[1], I[2])
        })(_.port1.addEventListener), _.port1.removeEventListener = (A => (...I) => {
            if (I[0] === "message") {
                const X = k.get(I[1]);
                X !== void 0 && (k.delete(I[1]), I[1] = X)
            }
            return A.call(_.port1, I[0], I[1], I[2])
        })(_.port1.removeEventListener);
        let T = null;
        Object.defineProperty(_.port1, "onmessage", {
            get: () => T,
            set: A => {
                typeof T == "function" && _.port1.removeEventListener("message", T), T = typeof A == "function" ? A : null, typeof T == "function" && (_.port1.addEventListener("message", T), _.port1.start())
            }
        }), g.prototype.port = _.port1;
        let W = null;
        ac(p, N, g, v).then(A => W = A);
        const Y = pt(v.numberOfInputs, v.channelCount),
            ue = pt(v.numberOfOutputs, w),
            pe = g.parameterDescriptors === void 0 ? [] : g.parameterDescriptors.reduce((A, {
                name: I
            }) => ({
                ...A,
                [I]: new Float32Array(128)
            }), {});
        let $ = !0;
        const Z = () => {
                v.numberOfOutputs > 0 && S.disconnect(L);
                for (let A = 0, I = 0; A < v.numberOfOutputs; A += 1) {
                    const X = P[A];
                    for (let q = 0; q < w[A]; q += 1) L.disconnect(X, I + q, q);
                    I += w[A]
                }
            },
            ge = new Map;
        S.onaudioprocess = ({
            inputBuffer: A,
            outputBuffer: I
        }) => {
            if (W !== null) {
                const X = u(N);
                for (let q = 0; q < O; q += 128) {
                    for (let F = 0; F < v.numberOfInputs; F += 1)
                        for (let G = 0; G < v.channelCount; G += 1) mt(A, Y[F], G, G, q);
                    g.parameterDescriptors !== void 0 && g.parameterDescriptors.forEach(({
                        name: F
                    }, G) => {
                        mt(A, pe, F, y + G, q)
                    });
                    for (let F = 0; F < v.numberOfInputs; F += 1)
                        for (let G = 0; G < w[F]; G += 1) ue[F][G].byteLength === 0 && (ue[F][G] = new Float32Array(128));
                    try {
                        const F = Y.map((J, ie) => {
                            if (X[ie].size > 0) return ge.set(ie, O / 128), J;
                            const Ue = ge.get(ie);
                            return Ue === void 0 ? [] : (J.every(Q => Q.every(z => z === 0)) && (Ue === 1 ? ge.delete(ie) : ge.set(ie, Ue - 1)), J)
                        });
                        $ = d(p.currentTime + q / p.sampleRate, p.sampleRate, () => W.process(F, ue, pe));
                        for (let J = 0, ie = 0; J < v.numberOfOutputs; J += 1) {
                            for (let Ae = 0; Ae < w[J]; Ae += 1) $r(I, ue[J], Ae, ie + Ae, q);
                            ie += w[J]
                        }
                    } catch (F) {
                        $ = !1, N.dispatchEvent(new ErrorEvent("processorerror", {
                            colno: F.colno,
                            filename: F.filename,
                            lineno: F.lineno,
                            message: F.message
                        }))
                    }
                    if (!$) {
                        for (let F = 0; F < v.numberOfInputs; F += 1) {
                            x[F].disconnect(E[F]);
                            for (let G = 0; G < v.channelCount; G += 1) E[q].disconnect(R, G, F * v.channelCount + G)
                        }
                        if (g.parameterDescriptors !== void 0) {
                            const F = g.parameterDescriptors.length;
                            for (let G = 0; G < F; G += 1) {
                                const J = C[G];
                                J.disconnect(R, 0, y + G), J.stop()
                            }
                        }
                        R.disconnect(S), S.onaudioprocess = null, Pe ? Z() : Be();
                        break
                    }
                }
            }
        };
        let Pe = !1;
        const Le = a(p, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0
            }),
            nt = () => S.connect(Le).connect(p.destination),
            Be = () => {
                S.disconnect(Le), Le.disconnect()
            },
            rt = () => {
                if ($) {
                    Be(), v.numberOfOutputs > 0 && S.connect(L);
                    for (let A = 0, I = 0; A < v.numberOfOutputs; A += 1) {
                        const X = P[A];
                        for (let q = 0; q < w[A]; q += 1) L.connect(X, I + q, q);
                        I += w[A]
                    }
                }
                Pe = !0
            },
            kt = () => {
                $ && (nt(), Z()), Pe = !1
            };
        return nt(), f(N, rt, kt)
    }, cc = (e, t) => (n, r) => {
        const s = n.createChannelMerger(r.numberOfInputs);
        return e !== null && e.name === "webkitAudioContext" && t(n, s), Ze(s, r), s
    }, lc = e => {
        const t = e.numberOfOutputs;
        Object.defineProperty(e, "channelCount", {
            get: () => t,
            set: n => {
                if (n !== t) throw oe()
            }
        }), Object.defineProperty(e, "channelCountMode", {
            get: () => "explicit",
            set: n => {
                if (n !== "explicit") throw oe()
            }
        }), Object.defineProperty(e, "channelInterpretation", {
            get: () => "discrete",
            set: n => {
                if (n !== "discrete") throw oe()
            }
        })
    }, Xr = (e, t) => {
        const n = e.createChannelSplitter(t.numberOfOutputs);
        return Ze(n, t), lc(n), n
    }, uc = (e, t, n, r, s) => (o, a) => {
        if (o.createConstantSource === void 0) return n(o, a);
        const c = o.createConstantSource();
        return Ze(c, a), un(c, a, "offset"), t(r, () => r(o)) || Gr(c), t(s, () => s(o)) || Hr(c), e(o, c), c
    }, Qr = (e, t) => (e.connect = t.connect.bind(t), e.disconnect = t.disconnect.bind(t), e), dc = (e, t, n, r) => (s, {
        offset: o,
        ...a
    }) => {
        const c = s.createBuffer(1, 2, 44100),
            i = t(s, {
                buffer: null,
                channelCount: 2,
                channelCountMode: "max",
                channelInterpretation: "speakers",
                loop: !1,
                loopEnd: 0,
                loopStart: 0,
                playbackRate: 1
            }),
            l = n(s, {
                ...a,
                gain: o
            }),
            d = c.getChannelData(0);
        d[0] = 1, d[1] = 1, i.buffer = c, i.loop = !0;
        const u = {
                get bufferSize() {},
                get channelCount() {
                    return l.channelCount
                },
                set channelCount(m) {
                    l.channelCount = m
                },
                get channelCountMode() {
                    return l.channelCountMode
                },
                set channelCountMode(m) {
                    l.channelCountMode = m
                },
                get channelInterpretation() {
                    return l.channelInterpretation
                },
                set channelInterpretation(m) {
                    l.channelInterpretation = m
                },
                get context() {
                    return l.context
                },
                get inputs() {
                    return []
                },
                get numberOfInputs() {
                    return i.numberOfInputs
                },
                get numberOfOutputs() {
                    return l.numberOfOutputs
                },
                get offset() {
                    return l.gain
                },
                get onended() {
                    return i.onended
                },
                set onended(m) {
                    i.onended = m
                },
                addEventListener(...m) {
                    return i.addEventListener(m[0], m[1], m[2])
                },
                dispatchEvent(...m) {
                    return i.dispatchEvent(m[0])
                },
                removeEventListener(...m) {
                    return i.removeEventListener(m[0], m[1], m[2])
                },
                start(m = 0) {
                    i.start.call(i, m)
                },
                stop(m = 0) {
                    i.stop.call(i, m)
                }
            },
            f = () => i.connect(l),
            p = () => i.disconnect(l);
        return e(s, i), r(Qr(u, l), f, p)
    }, Ce = (e, t) => {
        const n = e.createGain();
        return Ze(n, t), un(n, t, "gain"), n
    }, fc = (e, {
        mediaStream: t
    }) => {
        const n = t.getAudioTracks();
        n.sort((o, a) => o.id < a.id ? -1 : o.id > a.id ? 1 : 0);
        const r = n.slice(0, 1),
            s = e.createMediaStreamSource(new MediaStream(r));
        return Object.defineProperty(s, "mediaStream", {
            value: t
        }), s
    }, hc = e => e === null ? null : e.hasOwnProperty("OfflineAudioContext") ? e.OfflineAudioContext : e.hasOwnProperty("webkitOfflineAudioContext") ? e.webkitOfflineAudioContext : null, dn = (e, t, n, r) => e.createScriptProcessor(t, n, r), je = () => new DOMException("", "NotSupportedError"), mc = (e, t) => (n, r, s) => (e(r).replay(s), t(r, n, s)), pc = (e, t, n) => async (r, s, o) => {
        const a = e(r);
        await Promise.all(a.activeInputs.map((c, i) => Array.from(c).map(async ([l, d]) => {
            const f = await t(l).render(l, s),
                p = r.context.destination;
            !n(l) && (r !== p || !n(r)) && f.connect(o, d, i)
        })).reduce((c, i) => [...c, ...i], []))
    }, gc = (e, t, n) => async (r, s, o) => {
        const a = t(r);
        await Promise.all(Array.from(a.activeInputs).map(async ([c, i]) => {
            const d = await e(c).render(c, s);
            n(c) || d.connect(o, i)
        }))
    }, vc = (e, t, n, r) => s => e(Gn, () => Gn(s)) ? Promise.resolve(e(r, r)).then(o => {
        if (!o) {
            const a = n(s, 512, 0, 1);
            s.oncomplete = () => {
                a.onaudioprocess = null, a.disconnect()
            }, a.onaudioprocess = () => s.currentTime, a.connect(s.destination)
        }
        return s.startRendering()
    }) : new Promise(o => {
        const a = t(s, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            gain: 0
        });
        s.oncomplete = c => {
            a.disconnect(), o(c.renderedBuffer)
        }, a.connect(s.destination), s.startRendering()
    }), wc = e => (t, n) => {
        e.set(t, n)
    }, yc = e => () => {
        if (e === null) return !1;
        try {
            new e({
                length: 1,
                sampleRate: 44100
            })
        } catch {
            return !1
        }
        return !0
    }, bc = (e, t) => async () => {
        if (e === null) return !0;
        if (t === null) return !1;
        const n = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
                type: "application/javascript; charset=utf-8"
            }),
            r = new t(1, 128, 44100),
            s = URL.createObjectURL(n);
        let o = !1,
            a = !1;
        try {
            await r.audioWorklet.addModule(s);
            const c = new e(r, "a", {
                    numberOfOutputs: 0
                }),
                i = r.createOscillator();
            c.port.onmessage = () => o = !0, c.onprocessorerror = () => a = !0, i.connect(c), i.start(0), await r.startRendering(), await new Promise(l => setTimeout(l))
        } catch {} finally {
            URL.revokeObjectURL(s)
        }
        return o && !a
    }, Cc = (e, t) => () => {
        if (t === null) return Promise.resolve(!1);
        const n = new t(1, 1, 44100),
            r = e(n, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "discrete",
                gain: 0
            });
        return new Promise(s => {
            n.oncomplete = () => {
                r.disconnect(), s(n.currentTime !== 0)
            }, n.startRendering()
        })
    }, _c = () => new DOMException("", "UnknownError"), Ec = () => typeof window > "u" ? null : window, xc = (e, t) => n => {
        n.copyFromChannel = (r, s, o = 0) => {
            const a = e(o),
                c = e(s);
            if (c >= n.numberOfChannels) throw t();
            const i = n.length,
                l = n.getChannelData(c),
                d = r.length;
            for (let u = a < 0 ? -a : 0; u + a < i && u < d; u += 1) r[u] = l[u + a]
        }, n.copyToChannel = (r, s, o = 0) => {
            const a = e(o),
                c = e(s);
            if (c >= n.numberOfChannels) throw t();
            const i = n.length,
                l = n.getChannelData(c),
                d = r.length;
            for (let u = a < 0 ? -a : 0; u + a < i && u < d; u += 1) l[u + a] = r[u]
        }
    }, Ac = e => t => {
        t.copyFromChannel = (n => (r, s, o = 0) => {
            const a = e(o),
                c = e(s);
            if (a < t.length) return n.call(t, r, c, a)
        })(t.copyFromChannel), t.copyToChannel = (n => (r, s, o = 0) => {
            const a = e(o),
                c = e(s);
            if (a < t.length) return n.call(t, r, c, a)
        })(t.copyToChannel)
    }, Tc = e => (t, n) => {
        const r = n.createBuffer(1, 1, 44100);
        t.buffer === null && (t.buffer = r), e(t, "buffer", s => () => {
            const o = s.call(t);
            return o === r ? null : o
        }, s => o => s.call(t, o === null ? r : o))
    }, Mc = (e, t) => (n, r) => {
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
        const s = n.createBufferSource();
        t(r, () => {
            const c = r.numberOfInputs;
            for (let i = 0; i < c; i += 1) s.connect(r, 0, i)
        }, () => s.disconnect(r))
    }, Sc = (e, t, n) => e.copyFromChannel === void 0 ? e.getChannelData(n)[0] : (e.copyFromChannel(t, n), t[0]), fn = (e, t, n, r) => {
        let s = e;
        for (; !s.hasOwnProperty(t);) s = Object.getPrototypeOf(s);
        const {
            get: o,
            set: a
        } = Object.getOwnPropertyDescriptor(s, t);
        Object.defineProperty(e, t, {
            get: n(o),
            set: r(a)
        })
    }, Rc = e => ({
        ...e,
        outputChannelCount: e.outputChannelCount !== void 0 ? e.outputChannelCount : e.numberOfInputs === 1 && e.numberOfOutputs === 1 ? [e.channelCount] : Array.from({
            length: e.numberOfOutputs
        }, () => 1)
    }), Yr = (e, t, n) => {
        try {
            e.setValueAtTime(t, n)
        } catch (r) {
            if (r.code !== 9) throw r;
            Yr(e, t, n + 1e-7)
        }
    }, kc = e => {
        const t = e.createBufferSource();
        t.start();
        try {
            t.start()
        } catch {
            return !0
        }
        return !1
    }, Ic = e => {
        const t = e.createBufferSource(),
            n = e.createBuffer(1, 1, 44100);
        t.buffer = n;
        try {
            t.start(0, 1)
        } catch {
            return !1
        }
        return !0
    }, Nc = e => {
        const t = e.createBufferSource();
        t.start();
        try {
            t.stop()
        } catch {
            return !1
        }
        return !0
    }, Kr = e => {
        const t = e.createOscillator();
        try {
            t.start(-1)
        } catch (n) {
            return n instanceof RangeError
        }
        return !1
    }, Oc = e => {
        const t = e.createBuffer(1, 1, 44100),
            n = e.createBufferSource();
        n.buffer = t, n.start(), n.stop();
        try {
            return n.stop(), !0
        } catch {
            return !1
        }
    }, Zr = e => {
        const t = e.createOscillator();
        try {
            t.stop(-1)
        } catch (n) {
            return n instanceof RangeError
        }
        return !1
    }, jc = e => {
        const {
            port1: t,
            port2: n
        } = new MessageChannel;
        try {
            t.postMessage(e)
        } finally {
            t.close(), n.close()
        }
    }, Pc = e => {
        e.start = (t => (n = 0, r = 0, s) => {
            const o = e.buffer,
                a = o === null ? r : Math.min(o.duration, r);
            o !== null && a > o.duration - .5 / e.context.sampleRate ? t.call(e, n, 0, 0) : t.call(e, n, a, s)
        })(e.start)
    }, Lc = (e, t) => {
        const n = t.createGain();
        e.connect(n);
        const r = (s => () => {
            s.call(e, n), e.removeEventListener("ended", r)
        })(e.disconnect);
        e.addEventListener("ended", r), Qr(e, n), e.stop = (s => {
            let o = !1;
            return (a = 0) => {
                if (o) try {
                    s.call(e, a)
                } catch {
                    n.gain.setValueAtTime(0, a)
                } else s.call(e, a), o = !0
            }
        })(e.stop)
    }, Je = (e, t) => n => {
        const r = {
            value: e
        };
        return Object.defineProperties(n, {
            currentTarget: r,
            target: r
        }), typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
    }, Bc = Aa(Oe), Uc = Ia(Oe), Dc = Ci(Ct), Wc = new WeakMap, Vc = Ni(Wc), Fe = hi(new Map, new WeakMap), ce = Ec(), Jr = Ii(ee), xt = pc(ee, Jr, ke), _e = Pi(jr), ze = hc(ce), le = zi(ze), es = new WeakMap, ts = Mi(Je), At = Zi(ce), Fc = Wi(At), ns = Vi(ce), zc = Fi(ce), He = ec(ce), et = oi(Ta(kr), ka(Bc, Uc, Zt, Dc, Jt, ee, Vc, Xe, re, Oe, be, ke, ct), Fe, Di(Ht, Jt, ee, re, Ge, be), Ne, Ui, je, bi(Zt, Ht, ee, re, Ge, _e, be, le), xi(es, ee, ae), ts, _e, Fc, ns, zc, le, He), qc = new WeakSet, Hn = Qi(ce), rs = yi(new Uint32Array(1)), $c = xc(rs, Ne), Gc = Ac(rs), Hc = La(qc, Fe, je, Hn, ze, yc(Hn), $c, Gc), hn = Na(Ce), ss = gc(Jr, Ye, ke), mn = mi(ss), Tt = Ki(hn, Fe, kc, Ic, Nc, Kr, Oc, Zr, Pc, Tc(fn), Lc), pn = mc(Oi(Ye), ss), Xc = Da(mn, Tt, re, pn, xt), Mt = ai(Ma(Nr), es, Or, ii, ya, ba, Ca, _a, Ea, qt, Sr, At, Yr), Qc = Ua(et, Xc, Mt, oe, Tt, _e, le, Je), Yc = Xa(et, Qa, Ne, oe, Ji(Ce, fn), _e, le, xt), St = Xi(Oe, ns), Kc = Mc(oe, St), gn = cc(At, Kc), Zc = dc(hn, Tt, Ce, St), tt = uc(hn, Fe, Zc, Kr, Zr), Jc = wi(mn, tt, re, pn, xt), el = vi(et, Mt, Jc, tt, _e, le, Je), tl = vc(Fe, Ce, dn, Cc(Ce, ze)), nl = Ya(Mt, gn, tt, dn, je, Sc, le, fn), os = new WeakMap, rl = Hi(Yc, nl, ts, le, os, Je), as = qi(ce), vn = Si(ce), is = new WeakMap, sl = Li(is, ze), Xn = as ? Ra(Fe, je, Ti(ce), vn, Ri(xa), _e, sl, le, He, new WeakMap, new WeakMap, bc(He, ze), ce) : void 0, ol = $i(et, fc, _e, le), cs = Bi(os), al = Oa(cs), ls = pi(Ne), il = _i(cs), us = Ai(Ne), ds = new WeakMap, cl = ki(ds, ae), ll = ic(ls, Ne, oe, gn, Xr, tt, Ce, dn, je, us, vn, cl, St), ul = nc(oe, ll, Ce, je, St), dl = fi(mn, ls, Tt, gn, Xr, tt, Ce, il, us, vn, re, He, ze, pn, xt, tl), fl = ji(is), hl = wc(ds), Qn = as ? li(al, et, Mt, dl, ul, ee, fl, _e, le, He, Rc, hl, jc, Je) : void 0, ml = Gi(oe, je, _c, rl, At), fs = "Missing AudioWorklet support. Maybe this is not running in a secure context.", pl = async (e, t, n, r, s) => {
        const {
            encoderId: o,
            port: a
        } = await xr(s, t.sampleRate);
        if (Qn === void 0) throw new Error(fs);
        const c = new Qc(t, {
                buffer: e
            }),
            i = new ol(t, {
                mediaStream: r
            }),
            l = pa(Qn, t, {
                channelCount: n
            });
        return {
            audioBufferSourceNode: c,
            encoderId: o,
            mediaStreamAudioSourceNode: i,
            port: a,
            recorderAudioWorkletNode: l
        }
    }, gl = (e, t, n, r) => (s, o, a) => {
        var c;
        const i = (c = o.getAudioTracks()[0]) === null || c === void 0 ? void 0 : c.getSettings().sampleRate,
            l = new ml({
                latencyHint: "playback",
                sampleRate: i
            }),
            d = Math.max(1024, Math.ceil(l.baseLatency * l.sampleRate)),
            u = new Hc({
                length: d,
                sampleRate: l.sampleRate
            }),
            f = [],
            p = ma(C => {
                if (Xn === void 0) throw new Error(fs);
                return Xn(l, C)
            });
        let m = null,
            g = null,
            v = null,
            w = null,
            y = !0;
        const b = C => {
                s.dispatchEvent(e("dataavailable", {
                    data: new Blob(C, {
                        type: a
                    })
                }))
            },
            M = async (C, R) => {
                const O = await lt(C, R);
                v === null ? f.push(...O) : (b(O), w = M(C, R))
            }, _ = () => (y = !0, l.resume()), x = () => {
                v !== null && (m !== null && (o.removeEventListener("addtrack", m), o.removeEventListener("removetrack", m)), g !== null && clearTimeout(g), v.then(async ({
                    constantSourceNode: C,
                    encoderId: R,
                    mediaStreamAudioSourceNode: O,
                    recorderAudioWorkletNode: S
                }) => {
                    w !== null && (w.catch(() => {}), w = null), await S.stop(), O.disconnect(S), C.stop();
                    const L = await lt(R, null);
                    v === null && await E(), b([...f, ...L]), f.length = 0, s.dispatchEvent(new Event("stop"))
                }), v = null)
            }, E = () => (y = !1, l.suspend());
        return E(), {
            get mimeType() {
                return a
            },
            get state() {
                return v === null ? "inactive" : y ? "recording" : "paused"
            },
            pause() {
                if (v === null) throw n();
                y && (E(), s.dispatchEvent(new Event("pause")))
            },
            resume() {
                if (v === null) throw n();
                y || (_(), s.dispatchEvent(new Event("resume")))
            },
            start(C) {
                var R;
                if (v !== null) throw n();
                if (o.getVideoTracks().length > 0) throw r();
                s.dispatchEvent(new Event("start"));
                const O = o.getAudioTracks(),
                    S = O.length === 0 ? 2 : (R = O[0].getSettings().channelCount) !== null && R !== void 0 ? R : 2;
                v = Promise.all([_(), p.then(() => pl(u, l, S, o, a))]).then(async ([, {
                    audioBufferSourceNode: P,
                    encoderId: D,
                    mediaStreamAudioSourceNode: B,
                    port: j,
                    recorderAudioWorkletNode: U
                }]) => {
                    B.connect(U), await new Promise(k => {
                        P.onended = k, P.connect(U), P.start(l.currentTime + d / l.sampleRate)
                    }), P.disconnect(U);
                    const N = new el(l, {
                        offset: 0
                    });
                    return N.onended = () => N.disconnect(), N.connect(l.destination), N.start(), await U.record(j), C !== void 0 && (w = M(D, C)), {
                        constantSourceNode: N,
                        encoderId: D,
                        mediaStreamAudioSourceNode: B,
                        recorderAudioWorkletNode: U
                    }
                });
                const L = o.getTracks();
                m = () => {
                    x(), s.dispatchEvent(new ErrorEvent("error", {
                        error: t()
                    }))
                }, o.addEventListener("addtrack", m), o.addEventListener("removetrack", m), g = setInterval(() => {
                    const P = o.getTracks();
                    (P.length !== L.length || P.some((D, B) => D !== L[B])) && m !== null && m()
                }, 1e3)
            },
            stop: x
        }
    };
class Ut {
    constructor(t, n = 0, r) {
        if (n < 0 || r !== void 0 && r < 0) throw new RangeError;
        const s = t.reduce((d, u) => d + u.byteLength, 0);
        if (n > s || r !== void 0 && n + r > s) throw new RangeError;
        const o = [],
            a = r === void 0 ? s - n : r,
            c = [];
        let i = 0,
            l = n;
        for (const d of t)
            if (c.length === 0)
                if (d.byteLength > l) {
                    i = d.byteLength - l;
                    const u = i > a ? a : i;
                    o.push(new DataView(d, l, u)), c.push(d)
                } else l -= d.byteLength;
        else if (i < a) {
            i += d.byteLength;
            const u = i > a ? d.byteLength - i + a : d.byteLength;
            o.push(new DataView(d, 0, u)), c.push(d)
        }
        this._buffers = c, this._byteLength = a, this._byteOffset = l, this._dataViews = o, this._internalBuffer = new DataView(new ArrayBuffer(8))
    }
    get buffers() {
        return this._buffers
    }
    get byteLength() {
        return this._byteLength
    }
    get byteOffset() {
        return this._byteOffset
    }
    getFloat32(t, n) {
        return this._internalBuffer.setUint8(0, this.getUint8(t + 0)), this._internalBuffer.setUint8(1, this.getUint8(t + 1)), this._internalBuffer.setUint8(2, this.getUint8(t + 2)), this._internalBuffer.setUint8(3, this.getUint8(t + 3)), this._internalBuffer.getFloat32(0, n)
    }
    getFloat64(t, n) {
        return this._internalBuffer.setUint8(0, this.getUint8(t + 0)), this._internalBuffer.setUint8(1, this.getUint8(t + 1)), this._internalBuffer.setUint8(2, this.getUint8(t + 2)), this._internalBuffer.setUint8(3, this.getUint8(t + 3)), this._internalBuffer.setUint8(4, this.getUint8(t + 4)), this._internalBuffer.setUint8(5, this.getUint8(t + 5)), this._internalBuffer.setUint8(6, this.getUint8(t + 6)), this._internalBuffer.setUint8(7, this.getUint8(t + 7)), this._internalBuffer.getFloat64(0, n)
    }
    getInt16(t, n) {
        return this._internalBuffer.setUint8(0, this.getUint8(t + 0)), this._internalBuffer.setUint8(1, this.getUint8(t + 1)), this._internalBuffer.getInt16(0, n)
    }
    getInt32(t, n) {
        return this._internalBuffer.setUint8(0, this.getUint8(t + 0)), this._internalBuffer.setUint8(1, this.getUint8(t + 1)), this._internalBuffer.setUint8(2, this.getUint8(t + 2)), this._internalBuffer.setUint8(3, this.getUint8(t + 3)), this._internalBuffer.getInt32(0, n)
    }
    getInt8(t) {
        const [n, r] = this._findDataViewWithOffset(t);
        return n.getInt8(t - r)
    }
    getUint16(t, n) {
        return this._internalBuffer.setUint8(0, this.getUint8(t + 0)), this._internalBuffer.setUint8(1, this.getUint8(t + 1)), this._internalBuffer.getUint16(0, n)
    }
    getUint32(t, n) {
        return this._internalBuffer.setUint8(0, this.getUint8(t + 0)), this._internalBuffer.setUint8(1, this.getUint8(t + 1)), this._internalBuffer.setUint8(2, this.getUint8(t + 2)), this._internalBuffer.setUint8(3, this.getUint8(t + 3)), this._internalBuffer.getUint32(0, n)
    }
    getUint8(t) {
        const [n, r] = this._findDataViewWithOffset(t);
        return n.getUint8(t - r)
    }
    setFloat32(t, n, r) {
        this._internalBuffer.setFloat32(0, n, r), this.setUint8(t, this._internalBuffer.getUint8(0)), this.setUint8(t + 1, this._internalBuffer.getUint8(1)), this.setUint8(t + 2, this._internalBuffer.getUint8(2)), this.setUint8(t + 3, this._internalBuffer.getUint8(3))
    }
    setFloat64(t, n, r) {
        this._internalBuffer.setFloat64(0, n, r), this.setUint8(t, this._internalBuffer.getUint8(0)), this.setUint8(t + 1, this._internalBuffer.getUint8(1)), this.setUint8(t + 2, this._internalBuffer.getUint8(2)), this.setUint8(t + 3, this._internalBuffer.getUint8(3)), this.setUint8(t + 4, this._internalBuffer.getUint8(4)), this.setUint8(t + 5, this._internalBuffer.getUint8(5)), this.setUint8(t + 6, this._internalBuffer.getUint8(6)), this.setUint8(t + 7, this._internalBuffer.getUint8(7))
    }
    setInt16(t, n, r) {
        this._internalBuffer.setInt16(0, n, r), this.setUint8(t, this._internalBuffer.getUint8(0)), this.setUint8(t + 1, this._internalBuffer.getUint8(1))
    }
    setInt32(t, n, r) {
        this._internalBuffer.setInt32(0, n, r), this.setUint8(t, this._internalBuffer.getUint8(0)), this.setUint8(t + 1, this._internalBuffer.getUint8(1)), this.setUint8(t + 2, this._internalBuffer.getUint8(2)), this.setUint8(t + 3, this._internalBuffer.getUint8(3))
    }
    setInt8(t, n) {
        const [r, s] = this._findDataViewWithOffset(t);
        r.setInt8(t - s, n)
    }
    setUint16(t, n, r) {
        this._internalBuffer.setUint16(0, n, r), this.setUint8(t, this._internalBuffer.getUint8(0)), this.setUint8(t + 1, this._internalBuffer.getUint8(1))
    }
    setUint32(t, n, r) {
        this._internalBuffer.setUint32(0, n, r), this.setUint8(t, this._internalBuffer.getUint8(0)), this.setUint8(t + 1, this._internalBuffer.getUint8(1)), this.setUint8(t + 2, this._internalBuffer.getUint8(2)), this.setUint8(t + 3, this._internalBuffer.getUint8(3))
    }
    setUint8(t, n) {
        const [r, s] = this._findDataViewWithOffset(t);
        r.setUint8(t - s, n)
    }
    _findDataViewWithOffset(t) {
        let n = 0;
        for (const r of this._dataViews) {
            const s = n + r.byteLength;
            if (t >= n && t < s) return [r, n];
            n = s
        }
        throw new RangeError
    }
}
const vl = (e, t, n, r, s) => (o, a, c, i) => {
        const l = c.getAudioTracks(),
            d = [],
            u = l.length === 0 ? void 0 : l[0].getSettings().channelCount,
            f = new a(c, {
                mimeType: "audio/webm;codecs=pcm"
            }),
            p = l.length === 0 ? void 0 : l[0].getSettings().sampleRate;
        let m = null,
            g = () => {};
        const v = b => {
                o.dispatchEvent(e("dataavailable", {
                    data: new Blob(b, {
                        type: i
                    })
                }))
            },
            w = async (b, M) => {
                const _ = await lt(b, M);
                f.state === "inactive" ? d.push(..._) : (v(_), m = w(b, M))
            }, y = () => {
                f.state !== "inactive" && (m !== null && (m.catch(() => {}), m = null), g(), g = () => {}, f.stop())
            };
        return f.addEventListener("error", () => {
            y(), o.dispatchEvent(new ErrorEvent("error", {
                error: t()
            }))
        }), f.addEventListener("start", () => o.dispatchEvent(new Event("start"))), {
            get mimeType() {
                return i
            },
            get state() {
                return f.state
            },
            pause() {
                return f.pause()
            },
            resume() {
                return f.resume()
            },
            start(b) {
                if (c.getVideoTracks().length > 0) throw n();
                if (f.state === "inactive") {
                    if (p === void 0) throw new Error("The sampleRate is not defined.");
                    let M = !1,
                        _ = !1,
                        x = 0,
                        E = xr(i, p);
                    g = () => {
                        _ = !0
                    };
                    const C = Mr(f, "dataavailable")(({
                        data: R
                    }) => {
                        x += 1, E = E.then(async ({
                            dataView: O = null,
                            elementType: S = null,
                            encoderId: L,
                            port: P
                        }) => {
                            const D = await R.arrayBuffer();
                            x -= 1;
                            const B = O === null ? new Ut([D]) : new Ut([...O.buffers, D], O.byteOffset);
                            if (!M && f.state === "recording" && !_) {
                                const T = s(B, 0);
                                if (T === null) return {
                                    dataView: B,
                                    elementType: S,
                                    encoderId: L,
                                    port: P
                                };
                                const {
                                    value: W
                                } = T;
                                if (W !== 172351395) return {
                                    dataView: O,
                                    elementType: S,
                                    encoderId: L,
                                    port: P
                                };
                                M = !0
                            }
                            const {
                                currentElementType: j,
                                offset: U,
                                contents: N
                            } = r(B, S, u), k = U < B.byteLength ? new Ut(B.buffers, B.byteOffset + U) : null;
                            return N.forEach(T => P.postMessage(T, T.map(({
                                buffer: W
                            }) => W))), x === 0 && (f.state === "inactive" || _) && (lt(L, null).then(T => {
                                v([...d, ...T]), d.length = 0, o.dispatchEvent(new Event("stop"))
                            }), P.postMessage([]), P.close(), C()), {
                                dataView: k,
                                elementType: j,
                                encoderId: L,
                                port: P
                            }
                        })
                    });
                    b !== void 0 && E.then(({
                        encoderId: R
                    }) => m = w(R, b))
                }
                f.start(100)
            },
            stop: y
        }
    },
    wl = () => typeof window > "u" ? null : window,
    hs = (e, t) => {
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
        const r = hs(e, t + 1);
        return r === null ? null : r + 8
    },
    yl = (e, t) => n => {
        const r = {
            value: e
        };
        return Object.defineProperties(n, {
            currentTarget: r,
            target: r
        }), typeof t == "function" ? t.call(e, n) : t.handleEvent.call(e, n)
    },
    ms = [],
    Rt = wl(),
    bl = Wo(Rt),
    ps = Oo(bl),
    Cl = gl(ps, sn, Bo, wt),
    wn = $o(hs),
    _l = zo(wn),
    El = qo(wn),
    xl = jo(_l, El),
    Al = vl(ps, sn, wt, xl, wn),
    Tl = Lo(Rt),
    Ml = Fo(Rt),
    Sl = Vo(sn, wt),
    Rl = Do(Sl, wt, Cl, Al, ms, Po(Tl, yl), Ml),
    kl = () => Uo(Rt),
    Il = async e => {
        ms.push(await No(e))
    }, Nl = Object.freeze(Object.defineProperty({
        __proto__: null,
        MediaRecorder: Rl,
        isSupported: kl,
        register: Il
    }, Symbol.toStringTag, {
        value: "Module"
    })), Ol = ar(Nl), jl = _r({
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
            }, r.map(({
                buffer: s
            }) => s).filter(s => s instanceof ArrayBuffer))
        }
    }), Pl = e => {
        const t = new Worker(e);
        return jl(t)
    }, Ll = `(()=>{var e={455(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,s=536870912,a=2*s,o=function(e,t){return function(r){var o=t.get(r),i=void 0===o?r.size:o<a?o+1:0;if(!r.has(i))return e(r,i);if(r.size<s){for(;r.has(i);)i=Math.floor(Math.random()*a);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,c=r(i),l=o(c,i),u=t(l);e.addUniqueNumber=u,e.generateUniqueNumber=l}(t)}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,s=(e,t)=>Object.assign(new Error(e),{status:t}),a=t=>s('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),o=(t,r)=>async({data:{id:o,method:i,params:c}})=>{const l=r[i];try{if(void 0===l)throw(e=>s('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===c?l():l(c);if(void 0===r)throw(t=>s('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const u=r instanceof Promise?await r:r;if(null===o){if(void 0!==u.result)throw a(i)}else{if(void 0===u.result)throw a(i);const{result:e,transferables:r=[]}=u;t.postMessage({id:o,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:o})}};var i=r(455);const c=new Map,l=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),s=(0,i.generateUniqueNumber)(c);return c.set(s,()=>{n(),t.close(),c.delete(s)}),{result:s}},disconnect:({portId:e})=>{const r=c.get(e);if(void 0===r)throw(e=>s('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),u=(e,t,r=()=>!0)=>{const n=l(u,t,r),s=o(e,n);return e.addEventListener("message",s),()=>e.removeEventListener("message",s)},d=e=>e.reduce((e,t)=>e+t.length,0),h=(e,t)=>{const r=[];let n=0;e:for(;n<t;){const t=e.length;for(let s=0;s<t;s+=1){const t=e[s];void 0===r[s]&&(r[s]=[]);const a=t.shift();if(void 0===a)break e;r[s].push(a),0===s&&(n+=a.length)}}if(n>t){const s=n-t;r.forEach((t,r)=>{const n=t.pop(),a=n.length-s;t.push(n.subarray(0,a)),e[r].unshift(n.subarray(a))})}return r},f=new Map,m=(e=>(t,r,n)=>{const s=e.get(t);if(void 0===s){const s={channelDataArrays:n.map(e=>[e]),isComplete:!0,sampleRate:r};return e.set(t,s),s}return s.channelDataArrays.forEach((e,t)=>e.push(n[t])),s})(f),p=((e,t)=>(r,n,s,a)=>{const o=s>>3,i="subsequent"===n?0:44,c=r.length,l=e(r[0]),u=new ArrayBuffer(l*c*o+i),d=new DataView(u);return"subsequent"!==n&&t(d,s,c,"complete"===n?l:Number.POSITIVE_INFINITY,a),r.forEach((e,t)=>{let r=i+t*o;e.forEach(e=>{const t=e.length;for(let n=0;n<t;n+=1){const t=e[n];d.setInt16(r,t<0?32768*Math.max(-1,t):32767*Math.min(1,t),!0),r+=c*o}})}),[u]})(d,(e,t,r,n,s)=>{const a=t>>3,o=Math.min(n*r*a,4294967251);e.setUint32(0,1380533830),e.setUint32(4,o+36,!0),e.setUint32(8,1463899717),e.setUint32(12,1718449184),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,r,!0),e.setUint32(24,s,!0),e.setUint32(28,s*r*a,!0),e.setUint16(32,r*a,!0),e.setUint16(34,t,!0),e.setUint32(36,1684108385),e.setUint32(40,o,!0)}),v=new Map;u(self,{characterize:()=>({result:/^audio\\/wav$/}),encode:({recordingId:e,timeslice:t})=>{const r=v.get(e);void 0!==r&&(v.delete(e),r.reject(new Error("Another request was made to initiate an encoding.")));const n=f.get(e);if(null!==t){if(void 0===n||d(n.channelDataArrays[0])*(1e3/n.sampleRate)<t)return new Promise((r,n)=>{v.set(e,{reject:n,resolve:r,timeslice:t})});const r=h(n.channelDataArrays,Math.ceil(t*(n.sampleRate/1e3))),s=p(r,n.isComplete?"initial":"subsequent",16,n.sampleRate);return n.isComplete=!1,{result:s,transferables:s}}if(void 0!==n){const t=p(n.channelDataArrays,n.isComplete?"complete":"subsequent",16,n.sampleRate);return f.delete(e),{result:t,transferables:t}}return{result:[],transferables:[]}},record:({recordingId:e,sampleRate:t,typedArrays:r})=>{const n=m(e,t,r),s=v.get(e);if(void 0!==s&&d(n.channelDataArrays[0])*(1e3/t)>=s.timeslice){const r=h(n.channelDataArrays,Math.ceil(s.timeslice*(t/1e3))),a=p(r,n.isComplete?"initial":"subsequent",16,t);n.isComplete=!1,v.delete(e),s.resolve({result:a,transferables:a})}return{result:null}}})})()})();`, Bl = new Blob([Ll], {
        type: "application/javascript; charset=utf-8"
    }), gs = URL.createObjectURL(Bl), qe = Pl(gs), Ul = qe.characterize, Dl = qe.connect, Wl = qe.disconnect, Vl = qe.encode, Fl = qe.isSupported, zl = qe.record;
URL.revokeObjectURL(gs);
const ql = Object.freeze(Object.defineProperty({
        __proto__: null,
        characterize: Ul,
        connect: Dl,
        disconnect: Wl,
        encode: Vl,
        isSupported: Fl,
        record: zl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $l = ar(ql);
var Yn;

function Gl() {
    return Yn || (Yn = 1, (function(e) {
        var t = Te && Te.__awaiter || function(l, d, u, f) {
                function p(m) {
                    return m instanceof u ? m : new u(function(g) {
                        g(m)
                    })
                }
                return new(u || (u = Promise))(function(m, g) {
                    function v(b) {
                        try {
                            y(f.next(b))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function w(b) {
                        try {
                            y(f.throw(b))
                        } catch (M) {
                            g(M)
                        }
                    }

                    function y(b) {
                        b.done ? m(b.value) : p(b.value).then(v, w)
                    }
                    y((f = f.apply(l, d || [])).next())
                })
            },
            n = Te && Te.__generator || function(l, d) {
                var u = {
                        label: 0,
                        sent: function() {
                            if (m[0] & 1) throw m[1];
                            return m[1]
                        },
                        trys: [],
                        ops: []
                    },
                    f, p, m, g;
                return g = {
                    next: v(0),
                    throw: v(1),
                    return: v(2)
                }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function v(y) {
                    return function(b) {
                        return w([y, b])
                    }
                }

                function w(y) {
                    if (f) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (f = 1, p && (m = y[0] & 2 ? p.return : y[0] ? p.throw || ((m = p.return) && m.call(p), 0) : p.next) && !(m = m.call(p, y[1])).done) return m;
                        switch (p = 0, m && (y = [y[0] & 2, m.value]), y[0]) {
                            case 0:
                            case 1:
                                m = y;
                                break;
                            case 4:
                                return u.label++, {
                                    value: y[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, p = y[1], y = [0];
                                continue;
                            case 7:
                                y = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (m = u.trys, !(m = m.length > 0 && m[m.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                                    u = 0;
                                    continue
                                }
                                if (y[0] === 3 && (!m || y[1] > m[0] && y[1] < m[3])) {
                                    u.label = y[1];
                                    break
                                }
                                if (y[0] === 6 && u.label < m[1]) {
                                    u.label = m[1], m = y;
                                    break
                                }
                                if (m && u.label < m[2]) {
                                    u.label = m[2], u.ops.push(y);
                                    break
                                }
                                m[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        y = d.call(l, u)
                    } catch (b) {
                        y = [6, b], p = 0
                    } finally {
                        f = m = 0
                    }
                    if (y[0] & 5) throw y[1];
                    return {
                        value: y[0] ? y[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.ReactMediaRecorder = e.useReactMediaRecorder = e.RecorderErrors = void 0;
        var r = Ol,
            s = Cs(),
            o = $l,
            a;
        (function(l) {
            l.AbortError = "media_aborted", l.NotAllowedError = "permission_denied", l.NotFoundError = "no_specified_media_found", l.NotReadableError = "media_in_use", l.OverconstrainedError = "invalid_media_constraints", l.TypeError = "no_constraints", l.NONE = "", l.NO_RECORDER = "recorder_error"
        })(a = e.RecorderErrors || (e.RecorderErrors = {}));

        function c(l) {
            var d = this,
                u = l.audio,
                f = u === void 0 ? !0 : u,
                p = l.video,
                m = p === void 0 ? !1 : p,
                g = l.selfBrowserSurface,
                v = g === void 0 ? void 0 : g,
                w = l.preferCurrentTab,
                y = w === void 0 ? !1 : w,
                b = l.onStop,
                M = b === void 0 ? function() {
                    return null
                } : b,
                _ = l.onStart,
                x = _ === void 0 ? function() {
                    return null
                } : _,
                E = l.blobPropertyBag,
                C = l.screen,
                R = C === void 0 ? !1 : C,
                O = l.mediaRecorderOptions,
                S = O === void 0 ? void 0 : O,
                L = l.customMediaStream,
                P = L === void 0 ? null : L,
                D = l.stopStreamsOnStop,
                B = D === void 0 ? !0 : D,
                j = l.askPermissionOnMount,
                U = j === void 0 ? !1 : j,
                N = (0, s.useRef)(null),
                k = (0, s.useRef)([]),
                T = (0, s.useRef)(null),
                W = (0, s.useState)("idle"),
                H = W[0],
                Y = W[1],
                ue = (0, s.useState)(!1),
                pe = ue[0],
                $ = ue[1],
                Z = (0, s.useState)(void 0),
                ge = Z[0],
                Pe = Z[1],
                Le = (0, s.useState)("NONE"),
                nt = Le[0],
                Be = Le[1],
                rt = (0, s.useState)(!1),
                kt = rt[0],
                A = rt[1];
            (0, s.useEffect)(function() {
                if (!kt) {
                    var Q = function() {
                        return t(d, void 0, void 0, function() {
                            var z;
                            return n(this, function(K) {
                                switch (K.label) {
                                    case 0:
                                        return K.trys.push([0, 3, , 4]), z = r.register, [4, (0, o.connect)()];
                                    case 1:
                                        return [4, z.apply(void 0, [K.sent()])];
                                    case 2:
                                        return K.sent(), [3, 4];
                                    case 3:
                                        return K.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    };
                    Q(), A(!0)
                }
            }, []);
            var I = (0, s.useCallback)(function() {
                return t(d, void 0, void 0, function() {
                    var Q, z, K, ve, st;
                    return n(this, function(de) {
                        switch (de.label) {
                            case 0:
                                Y("acquiring_media"), Q = {
                                    audio: typeof f == "boolean" ? !!f : f,
                                    video: typeof m == "boolean" ? !!m : m
                                }, de.label = 1;
                            case 1:
                                return de.trys.push([1, 9, , 10]), P ? (T.current = P, [3, 8]) : [3, 2];
                            case 2:
                                return R ? [4, window.navigator.mediaDevices.getDisplayMedia({
                                    video: m || !0,
                                    selfBrowserSurface: v,
                                    preferCurrentTab: y
                                })] : [3, 6];
                            case 3:
                                return z = de.sent(), z.getVideoTracks()[0].addEventListener("ended", function() {
                                    Ue()
                                }), f ? [4, window.navigator.mediaDevices.getUserMedia({
                                    audio: f
                                })] : [3, 5];
                            case 4:
                                K = de.sent(), K.getAudioTracks().forEach(function(ys) {
                                    return z.addTrack(ys)
                                }), de.label = 5;
                            case 5:
                                return T.current = z, [3, 8];
                            case 6:
                                return [4, window.navigator.mediaDevices.getUserMedia(Q)];
                            case 7:
                                ve = de.sent(), T.current = ve, de.label = 8;
                            case 8:
                                return Y("idle"), [3, 10];
                            case 9:
                                return st = de.sent(), Be(st.name), Y("idle"), [3, 10];
                            case 10:
                                return [2]
                        }
                    })
                })
            }, [f, m, R]);
            (0, s.useEffect)(function() {
                if (!window.MediaRecorder) throw new Error("Unsupported Browser");
                if (R && !window.navigator.mediaDevices.getDisplayMedia) throw new Error("This browser doesn't support screen capturing");
                var Q = function(z) {
                    var K = navigator.mediaDevices.getSupportedConstraints(),
                        ve = Object.keys(z).filter(function(st) {
                            return !K[st]
                        });
                    ve.length > 0 && console.error("The constraints " + ve.join(",") + " doesn't support on this browser. Please check your ReactMediaRecorder component.")
                };
                return typeof f == "object" && Q(f), typeof m == "object" && Q(m), S && S.mimeType && (MediaRecorder.isTypeSupported(S.mimeType) || console.error("The specified MIME type you supplied for MediaRecorder doesn't support this browser")), !T.current && U && I(),
                    function() {
                        if (T.current) {
                            var z = T.current.getTracks();
                            z.forEach(function(K) {
                                return K.clone().stop()
                            })
                        }
                    }
            }, [f, R, m, I, S, U]);
            var X = function() {
                    return t(d, void 0, void 0, function() {
                        var Q;
                        return n(this, function(z) {
                            switch (z.label) {
                                case 0:
                                    return Be("NONE"), T.current ? [3, 2] : [4, I()];
                                case 1:
                                    z.sent(), z.label = 2;
                                case 2:
                                    return T.current ? (Q = T.current.getTracks().some(function(K) {
                                        return K.readyState === "ended"
                                    }), Q ? [4, I()] : [3, 4]) : [3, 5];
                                case 3:
                                    z.sent(), z.label = 4;
                                case 4:
                                    if (!T.current.active) return [2];
                                    N.current = new r.MediaRecorder(T.current, S || void 0), N.current.ondataavailable = q, N.current.onstop = G, N.current.onstart = F, N.current.onerror = function() {
                                        Be("NO_RECORDER"), Y("idle")
                                    }, N.current.start(), Y("recording"), z.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                },
                q = function(Q) {
                    var z = Q.data;
                    k.current.push(z)
                },
                F = function() {
                    x()
                },
                G = function() {
                    var Q = k.current[0],
                        z = Object.assign({
                            type: Q.type
                        }, E || (m ? {
                            type: "video/mp4"
                        } : {
                            type: "audio/wav"
                        })),
                        K = new Blob(k.current, z),
                        ve = URL.createObjectURL(K);
                    Y("stopped"), Pe(ve), M(ve, K)
                },
                J = function(Q) {
                    $(Q), T.current && T.current.getAudioTracks().forEach(function(z) {
                        return z.enabled = !Q
                    })
                },
                ie = function() {
                    N.current && N.current.state === "recording" && (Y("paused"), N.current.pause())
                },
                Ae = function() {
                    N.current && N.current.state === "paused" && (Y("recording"), N.current.resume())
                },
                Ue = function() {
                    N.current && N.current.state !== "inactive" && (Y("stopping"), N.current.stop(), B && T.current && T.current.getTracks().forEach(function(Q) {
                        return Q.stop()
                    }), k.current = [])
                };
            return {
                error: a[nt],
                muteAudio: function() {
                    return J(!0)
                },
                unMuteAudio: function() {
                    return J(!1)
                },
                startRecording: X,
                pauseRecording: ie,
                resumeRecording: Ae,
                stopRecording: Ue,
                mediaBlobUrl: ge,
                status: H,
                isAudioMuted: pe,
                previewStream: T.current ? new MediaStream(T.current.getVideoTracks()) : null,
                previewAudioStream: T.current ? new MediaStream(T.current.getAudioTracks()) : null,
                clearBlobUrl: function() {
                    ge && URL.revokeObjectURL(ge), Pe(void 0), Y("idle")
                }
            }
        }
        e.useReactMediaRecorder = c;
        var i = function(l) {
            return l.render(c(l))
        };
        e.ReactMediaRecorder = i
    })(Te)), Te
}
var Dt, Kn;

function Hl() {
    return Kn || (Kn = 1, Dt = Gl()), Dt
}
var Xl = Hl();
const Ql = 3,
    Zn = {
        height: 111,
        width: "100%"
    },
    Yl = e => {
        const [t, n] = V.useState(!1), {
            status: r,
            startRecording: s,
            stopRecording: o,
            mediaBlobUrl: a
        } = Xl.useReactMediaRecorder({
            video: !1,
            audio: !0
        }), c = u => {
            t || fetch(u).then(f => f.blob()).then(f => {
                const p = new File([f], `recording-${Date.now()}.wav`);
                if (p.size / 1e6 > Ql) {
                    _s({
                        title: "Audio too long",
                        content: "Please record a shorter clip"
                    });
                    return
                }
                const m = new FormData;
                m.append("file", p), n(!0), en({
                    url: "/api/games/audio/add",
                    method: "post",
                    data: m,
                    success: g => e.onAudioChanged(g.url),
                    error: g => zt.error("Error uploading. Please try again."),
                    both: () => n(!1)
                })
            }).catch()
        }, i = () => {
            new Audio(lr(e.audio)).play()
        }, l = () => e.onAudioChanged(""), d = () => e.audio ? h.jsxs(h.Fragment, {
            children: [h.jsx(he, {
                style: {
                    fontWeight: Me.Black,
                    fontSize: 34
                },
                children: "Audio"
            }), h.jsx(he, {
                style: {
                    fontSize: 16,
                    marginTop: -8
                },
                children: "This audio will be played each time a student goes to answer this question."
            }), h.jsx(Vt, {}), h.jsxs("div", {
                className: "flex vc",
                children: [h.jsx(te, {
                    size: "large",
                    type: "primary",
                    onClick: i,
                    icon: h.jsx(Rs, {}),
                    style: {
                        marginRight: 5
                    },
                    children: "Play Audio"
                }), h.jsx(te, {
                    size: "large",
                    type: "dashed",
                    icon: h.jsx(fr, {}),
                    onClick: l,
                    children: "Remove Audio"
                })]
            })]
        }) : h.jsxs(h.Fragment, {
            children: [h.jsx(he, {
                style: {
                    fontWeight: Me.Black,
                    fontSize: 34
                },
                children: "Add Audio"
            }), h.jsx(he, {
                style: {
                    fontSize: 16,
                    marginTop: 2,
                    marginBottom: -2,
                    lineHeight: 1.2
                },
                children: "Record your voice! It will be played each time a student goes to answer this question."
            }), h.jsx(Vt, {}), h.jsxs("div", {
                children: [a && r !== "recording" && h.jsxs(h.Fragment, {
                    children: [h.jsx(he, {
                        style: {
                            fontWeight: Me.Bold,
                            fontSize: 24
                        },
                        children: "Finished Recording"
                    }), h.jsx("audio", {
                        src: a,
                        controls: !0
                    }), h.jsxs("div", {
                        className: "flex vc",
                        style: {
                            marginTop: 10
                        },
                        children: [h.jsx(te, {
                            size: "large",
                            type: "primary",
                            icon: h.jsx(Ss, {}),
                            loading: t,
                            style: {
                                marginRight: 10
                            },
                            onClick: () => c(a),
                            children: "Save"
                        }), h.jsx(te, {
                            onClick: s,
                            size: "large",
                            type: "dashed",
                            icon: h.jsx(Ft, {}),
                            children: "New Recording"
                        })]
                    }), h.jsx("div", {
                        style: {
                            height: 10
                        }
                    })]
                }), r === "idle" && h.jsx(te, {
                    onClick: s,
                    style: Zn,
                    icon: h.jsx(Ft, {}),
                    type: "dashed",
                    children: "Start Recording"
                }), r === "recording" && h.jsxs(h.Fragment, {
                    children: [h.jsx(he, {
                        style: {
                            fontWeight: Me.Bold,
                            fontSize: 24
                        },
                        children: "Recording..."
                    }), h.jsx(te, {
                        onClick: o,
                        style: Zn,
                        type: "dashed",
                        icon: h.jsx(to, {}),
                        children: "Stop Recording"
                    })]
                })]
            })]
        });
        return h.jsx(ur, {
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
            children: d()
        })
    },
    Kl = e => {
        const t = V.useRef(),
            [n, r] = V.useState(e.latex);
        return V.useEffect(() => {
            const s = new ks({
                mathVirtualKeyboardPolicy: "auto"
            });
            e.latex && s.setValue(e.latex), document.body.style.setProperty("--keyboard-zindex", "10000"), s.addEventListener("mount", () => {
                s.focus(), s.executeCommand("showVirtualKeyboard")
            }), s.addEventListener("input", o => {
                var a;
                if (o.inputType === "insertLineBreak")(a = e == null ? void 0 : e.onComplete) == null || a.call(e);
                else {
                    const c = s.getValue("latex");
                    r(c), e.onChange && e.onChange(c)
                }
            }), t.current.appendChild(s)
        }, []), h.jsxs(Zl, {
            children: [h.jsx(Jl, {
                ref: t
            }), n != null && n.length ? null : h.jsx(eu, {
                children: "Enter math..."
            })]
        })
    },
    Zl = se.div`
  position: relative;
`,
    Jl = se.div`
  math-field {
    font-size: 32px;
    color: ${me.Black};
    padding: 15px;
    outline: ${me.BackgroundPurple} auto 2px; // Color of the AntD focus outline: ;
    width: 100%;
  }
`,
    eu = se.div`
  position: absolute;
  top: 27px;
  left: 24px;
  font-size: 20px;
  font-family: ${Ie.SFPro};
  font-style: italic;
  color: #bfbfbf;
  pointer-events: none;
`,
    vs = e => {
        const [t, n] = V.useState(e.latex), r = V.useCallback(() => {
            e.onChange(t), e.close()
        }, [t, e.onChange, e.close]), s = () => {
            e.onChange(void 0), e.close()
        };
        return h.jsx(ir, {
            open: e.visible,
            width: 670,
            closable: !1,
            destroyOnClose: !0,
            style: {
                top: 20
            },
            onCancel: e.close,
            footer: h.jsxs(h.Fragment, {
                children: [h.jsx(te, {
                    onClick: e.close,
                    children: "Cancel"
                }), e.latex ? h.jsx(te, {
                    onClick: s,
                    children: "Remove Equation"
                }) : null, h.jsx(te, {
                    type: "primary",
                    onClick: r,
                    children: e.latex ? "Update" : "Insert"
                })]
            }),
            children: h.jsx(Kl, {
                latex: e.latex,
                onChange: n
            })
        })
    },
    tu = vt(e => {
        const [t, n, r] = De(!1), [s, o, a] = De(!1), [c, i, l] = De(!1), [d, u, f] = De(!1), p = y => {
            e.question.text = y
        }, m = () => {
            rr() ? o() : i()
        }, g = y => {
            e.question.image = y
        }, v = y => {
            e.question.audio = y, a()
        }, w = y => {
            e.question.latex = y
        };
        return h.jsxs(h.Fragment, {
            children: [h.jsx(cr, {
                visible: c,
                close: l,
                id: "add audio",
                copy: {
                    title: ro,
                    description: so
                }
            }), h.jsx(wr, {
                visible: t,
                close: r,
                onImageChange: g,
                currentImage: e.question.image
            }), h.jsx(Yl, {
                visible: s,
                close: a,
                onAudioChanged: v,
                audio: e.question.audio
            }), h.jsx(vs, {
                visible: d,
                close: f,
                latex: e.question.latex,
                onChange: w
            }), h.jsx(nu, {
                children: "Question"
            }), h.jsx(vr, {
                value: e.question.text,
                onTextChange: p,
                placeholder: "Ask away...",
                disabled: !1,
                onPressEnter: e.onPressEnter
            }), e.imagesBlocked && e.audioBlocked && e.latexBlocked ? null : h.jsxs(ru, {
                children: [h.jsx(Wt, {
                    icon: h.jsx(mr, {}),
                    label: "Add Photo",
                    onClick: n,
                    disabled: e.imagesBlocked || !!e.question.latex,
                    customContent: e.question.image ? h.jsx("div", {
                        className: "flex maxWidth hc vc",
                        children: h.jsx(dr, {
                            image: e.question.image,
                            blockModalOpen: !0,
                            size: 30,
                            onClick: n
                        })
                    }) : null
                }), h.jsx("div", {
                    style: {
                        width: 6
                    }
                }), h.jsx(Wt, {
                    disabled: e.audioBlocked || !window.MediaRecorder || tn(),
                    icon: h.jsx(Ft, {}),
                    label: `${e.question.audio?"":"Add "}Audio`,
                    onClick: m
                }), h.jsx("div", {
                    style: {
                        width: 6
                    }
                }), h.jsx(Wt, {
                    icon: h.jsx(pr, {}),
                    disabled: !!e.question.image,
                    label: "Add Equation",
                    customContent: e.question.latex ? h.jsx("div", {
                        style: {
                            cursor: "pointer"
                        },
                        children: h.jsx(hr, {
                            latex: e.question.latex
                        })
                    }) : null,
                    onClick: u
                })]
            }), h.jsx("div", {
                style: {
                    height: 12
                }
            })]
        })
    }),
    nu = se.div`
  color: ${me.Black};
  font-family: ${Ie.SFPro};
  font-weight: ${Me.UltraBold};
  font-size: 23px;
  margin-bottom: 2px;
`,
    ru = se.div.attrs({
        className: "flex maxWidth"
    })`
  margin-top: 8px;
  height: 48px;
`,
    Wt = e => h.jsx(te, {
        disabled: e.disabled,
        style: {
            width: "33.33%",
            height: "100%",
            overflow: "hidden"
        },
        type: "dashed",
        tabIndex: "-1",
        onClick: e.onClick,
        children: e.customContent ? e.customContent : h.jsxs("div", {
            className: "flex maxHeight hc vc",
            style: {
                fontFamily: Ie.SFPro
            },
            children: [e.icon, h.jsx("div", {
                style: {
                    marginLeft: 5
                },
                children: e.label
            })]
        })
    }),
    su = e => {
        const t = {
            twoToneColor: e.correct ? "#4caf50" : "#f44336",
            style: {
                cursor: "pointer",
                marginRight: 10
            },
            onClick: e.onClick
        };
        return e.correct ? h.jsx(Us, {
            ...t
        }) : h.jsx(Vs, {
            ...t
        })
    },
    ou = e => {
        const [t, n, r] = De(!1), [s, o, a] = De(!1), c = () => {
            e.blockChangingCorrect || e.onCorrectChange && e.onCorrectChange(!e.correct)
        }, i = () => e.image ? h.jsx(dr, {
            image: e.image,
            size: 40,
            blockModalOpen: !0,
            onClick: n,
            showBorder: !0
        }) : e.latex ? h.jsx(iu, {
            onClick: o,
            children: h.jsx(hr, {
                latex: e.latex
            })
        }) : h.jsx(vr, {
            value: e.text,
            onPressEnter: e.onPressEnter,
            onTextChange: e.onTextChange,
            placeholder: `${e.correct?"Correct":"Incorrect"} answer...`,
            disabled: !1
        }), l = () => {
            const u = [{
                key: "add-image",
                label: "Add Image",
                onClick: n,
                icon: h.jsx(mr, {}),
                disabled: !e.allowPhoto || !!e.image || !!e.latex || !!e.text
            }, {
                key: "add-latex",
                label: "Add Equation",
                onClick: o,
                icon: h.jsx(pr, {}),
                disabled: !e.allowLatex || !!e.image || !!e.latex || !!e.text
            }, {
                key: "remove",
                label: "Remove Answer",
                onClick: e.onRemove,
                icon: h.jsx(fr, {}),
                disabled: !e.canRemove,
                danger: !0
            }];
            return h.jsxs("div", {
                className: "maxWidth flex vc between",
                children: [i(), h.jsx(Is, {
                    menu: {
                        items: u
                    },
                    trigger: ["hover"],
                    children: h.jsx(Es, {
                        style: {
                            marginLeft: 10,
                            fontSize: 23,
                            cursor: "pointer"
                        }
                    })
                })]
            })
        }, d = () => h.jsxs(Nt, {
            value: e.textType || It.exact,
            size: "large",
            style: {
                marginRight: 10,
                width: 120
            },
            onChange: e.onTextTypeChange,
            children: [h.jsx(Nt.Option, {
                value: It.exact,
                children: "Is Exactly"
            }), h.jsx(Nt.Option, {
                value: It.contains,
                children: "Contains"
            })]
        });
        return h.jsxs(h.Fragment, {
            children: [h.jsxs(au, {
                children: [e.questionType === ne.textInput ? d() : h.jsx(su, {
                    correct: e.correct,
                    onClick: c
                }), l()]
            }), h.jsx(wr, {
                visible: t,
                close: r,
                currentImage: e.image,
                onImageChange: e.onImageChange
            }), h.jsx(vs, {
                visible: s,
                close: a,
                latex: e.latex,
                onChange: e.onLatexChange
            })]
        })
    },
    au = se.div.attrs({
        className: "flex maxWidth vc"
    })`
  font-size: 28px;
  span {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }
`,
    iu = se.div`
  cursor: pointer;
  font-size: 16px;
  color: ${me.Black};
  padding: 5px 21px;
  border: 2px dashed ${me.BorderGray};
  border-radius: 6px;
`,
    cu = vt(e => {
        const t = e.question.type === ne.multipleChoice,
            n = e.question.type === ne.textInput,
            r = d => {
                e.question.answers = e.question.answers.filter((u, f) => d !== f)
            },
            s = () => e.question.answers.push(Re(!t)),
            o = (d, u) => e.question.answers = e.question.answers.map((f, p) => p !== d ? f : {
                ...f,
                correct: u
            }),
            a = (d, u) => e.question.answers = e.question.answers.map((f, p) => p !== d ? f : {
                ...f,
                text: u
            }),
            c = (d, u) => e.question.answers = e.question.answers.map((f, p) => p !== d ? f : {
                ...f,
                image: u
            }),
            i = (d, u) => e.question.answers = e.question.answers.map((f, p) => p !== d ? f : {
                ...f,
                latex: u
            }),
            l = (d, u) => {
                e.question.answers = e.question.answers.map((f, p) => p !== d ? f : {
                    ...f,
                    textType: u
                })
            };
        return h.jsxs(h.Fragment, {
            children: [h.jsx(lu, {
                children: xs("Answer", e.question.answers.length)
            }), e.question.answers.map((d, u) => h.jsxs(V.Fragment, {
                children: [h.jsx(ou, {
                    questionType: e.question.type,
                    onCorrectChange: f => o(u, f),
                    onTextChange: f => a(u, f),
                    text: d.text,
                    correct: d.correct,
                    image: d.image,
                    latex: d.latex,
                    textType: d.textType,
                    onImageChange: f => c(u, f),
                    onLatexChange: f => i(u, f),
                    onTextTypeChange: f => {
                        l(u, f)
                    },
                    allowPhoto: t && !e.imagesBlocked,
                    allowLatex: t && !e.latexBlocked,
                    blockChangingCorrect: n,
                    canRemove: u > 0 && n || u > 1,
                    onRemove: () => r(u),
                    onPressEnter: e.onPressEnter
                }), h.jsx("div", {
                    style: {
                        height: 10
                    }
                })]
            }, `answer-${u}`)), e.question.answers.length < 4 && h.jsx(he, {
                style: {
                    fontSize: 14,
                    marginLeft: e.question.type === ne.textInput ? 0 : 38,
                    opacity: .7,
                    cursor: "pointer",
                    marginTop: -4,
                    fontStyle: "italic"
                },
                onClick: s,
                children: "Add another answer"
            })]
        })
    }),
    lu = se.div`
  color: ${me.Black};
  font-family: ${Ie.SFPro};
  font-weight: ${Me.UltraBold};
  font-size: 23px;
  margin-bottom: 2px;
`,
    uu = e => {
        const t = h.jsx(te, {
            loading: e.loading,
            type: "primary",
            disabled: e.disabled,
            onClick: e.onClick,
            children: e.label
        });
        return e.disabledMessage ? h.jsx(Ns, {
            title: e.disabledMessage,
            children: t
        }) : t
    },
    Jn = "Question must have text, audio, image, or an equation",
    ws = e => {
        if (e.text) {
            if (!e.text.trim()) return Jn
        } else if (!e.audio && !e.image && !e.latex) return Jn;
        if (e.image && e.latex) return "Question cannot contain an image and equation.";
        const t = e.answers.filter(n => {
            var s;
            return !!(((s = n.text) == null ? void 0 : s.trim()) || n.image || n.latex)
        });
        return e.type === ne.multipleChoice && t.length < 2 ? "Question must have at least two answers." : t.length < 1 ? "Question must have at least one answer." : null
    },
    du = e => ws(e) === null,
    Re = e => ({
        _id: Math.random().toString(),
        text: "",
        correct: e
    }),
    er = () => ({
        _id: "",
        text: "",
        type: ne.multipleChoice,
        image: "",
        audio: "",
        answers: [Re(!0), Re(!1), Re(!1), Re(!1)]
    }),
    $u = vt(V.forwardRef((e, t) => {
        var a;
        const n = Os(() => er()),
            r = du(n) && !e.blockAddingNewQuestions,
            s = () => {
                const c = er();
                Object.keys(c).forEach(i => {
                    n[i] = c[i]
                })
            };
        V.useImperativeHandle(t, () => ({
            clear: s
        })), V.useEffect(() => {
            e.existingQuestion ? Object.keys(e.existingQuestion).forEach(c => {
                n[c] = e.existingQuestion[c]
            }) : s()
        }, [(a = e.existingQuestion) == null ? void 0 : a._id]);
        const o = () => {
            r && e.submitQuestion(n)
        };
        return h.jsxs(ir, {
            open: e.visible,
            width: 670,
            style: {
                top: 20
            },
            onCancel: e.close,
            afterClose: e.afterClose,
            closable: !1,
            footer: h.jsx(uu, {
                label: e.buttonLabel || "Add",
                onClick: o,
                loading: e.loading,
                disabledMessage: ws(n),
                disabled: !r
            }),
            children: [h.jsx(ho, {
                question: n
            }), h.jsx(tu, {
                question: n,
                onPressEnter: o,
                imagesBlocked: e.imagesBlocked,
                audioBlocked: e.audioBlocked,
                latexBlocked: e.latexBlocked
            }), h.jsx(cu, {
                question: n,
                onPressEnter: o,
                imagesBlocked: e.imagesBlocked,
                latexBlocked: e.latexBlocked
            }), e.errorMessage ? h.jsx(sr, {
                message: "Error",
                description: e.errorMessage,
                type: "error",
                showIcon: !0
            }) : null]
        })
    }));
export {
    Yl as A, lo as I, vs as M, $u as Q, mr as R, he as T, vr as a, pr as b, wr as c, so as d, ro as e, Os as u
};