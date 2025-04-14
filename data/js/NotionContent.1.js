function e(e, t, n, a) {
    Object.defineProperty(e, t, {
        get: n,
        set: a,
        enumerable: !0,
        configurable: !0
    })
}

function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    a = n.parcelRequire388b;
a.register("jLITb", (function(t, n) {
    var r;
    r = t.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
    }), e(t.exports, "default", (function() {
        return p
    }));
    var i = a("hxEiv"),
        l = a("fywoC"),
        o = a("imj7p"),
        s = a("iMOcM"),
        c = a("2FDaO"),
        u = a("4Gnmi");
    let g;
    var p = e => {
        const [t, n] = l.useState();
        l.useEffect((() => {
            e.content || e.id && (0, s.request)({
                url: `/api/content/${e.id}`,
                cacheKey: "NOTION_CONTENT",
                success: e => n(e)
            })
        }), [e.id, e.content]);
        const a = e.content || t;
        return (0, i.jsxs)("div", {
            className: "maxWidth",
            children: [(0, i.jsx)("base", {
                target: "_blank"
            }), (0, i.jsx)(d, {
                children: a ? (0, i.jsx)(o.NotionRenderer, {
                    blockMap: a
                }) : e.hideSkeleton ? null : (0, i.jsx)(u.default, {
                    active: !0,
                    title: !1,
                    paragraph: {
                        rows: 9
                    }
                })
            })]
        })
    };
    const d = c.default.div.attrs({
        className: "maxWidth"
    })(g || (g = (e => e)``))
})), a.register("imj7p", (function(n, r) {
    e(n.exports, "NotionRenderer", (function() {
        return b
    }));
    var i = a("fywoC"),
        l = a("6nIlV");
    a("16Icq");
    var o = ["video", "image", "embed", "figma"],
        s = function(e) {
            var t = e.block,
                n = e.mapImageUrl,
                a = t.value,
                r = t.value.type;
            if (!o.includes(r)) return null;
            var l = a.format,
                s = null != l ? l : {},
                c = s.display_source,
                u = void 0 === c ? void 0 : c,
                g = s.block_aspect_ratio,
                p = void 0 === g ? void 0 : g,
                d = s.block_height,
                m = void 0 === d ? 1 : d,
                f = s.block_width,
                v = p || m / (void 0 === f ? 1 : f);
            if ("embed" === r || "video" === r || "figma" === r) return (0, i.createElement)("div", {
                style: {
                    paddingBottom: 100 * v + "%",
                    position: "relative"
                }
            }, (0, i.createElement)("iframe", {
                className: "notion-image-inset",
                src: "figma" === r ? a.properties.source[0][0] : u
            }));
            if ("image" === t.value.type) {
                var h, b = n(a.properties.source[0][0], t),
                    y = null === (h = a.properties.caption) || void 0 === h ? void 0 : h[0][0];
                return p ? (0, i.createElement)("div", {
                    style: {
                        paddingBottom: 100 * v + "%",
                        position: "relative"
                    }
                }, (0, i.createElement)("img", {
                    className: "notion-image-inset",
                    alt: y || "notion image",
                    src: b
                })) : (0, i.createElement)("img", {
                    alt: y,
                    src: b
                })
            }
            return null
        },
        c = function(e) {
            var t = e.code,
                n = e.language,
                a = void 0 === n ? "javascript" : n,
                r = a.toLowerCase(),
                o = l.languages[r] || l.languages.javascript,
                s = "language-" + a.toLowerCase();
            return (0, i.createElement)("pre", {
                className: "notion-code " + s
            }, (0, i.createElement)("code", {
                className: s,
                dangerouslySetInnerHTML: {
                    __html: (0, l.highlight)(t, o, a)
                }
            }))
        },
        u = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.filter((function(e) {
                return !!e
            })).join(" ")
        },
        g = function(e) {
            return e.reduce((function(e, t) {
                return e + t[0]
            }), "")
        },
        p = function(e, t) {
            var n = function(e) {
                    var t = [],
                        n = void 0,
                        a = -1;
                    return Object.keys(e).forEach((function(r) {
                        var i;
                        null === (i = e[r].value.content) || void 0 === i || i.forEach((function(r) {
                            var i, l, o = null === (i = e[r]) || void 0 === i || null === (l = i.value) || void 0 === l ? void 0 : l.type;
                            o && o !== n && (a++, n = o, t[a] = []), t[a].push(r)
                        })), n = void 0
                    })), t
                }(t),
                a = n.find((function(t) {
                    return t.includes(e)
                }));
            if (a) return a.indexOf(e) + 1
        },
        d = function(e, t) {
            void 0 === e && (e = "");
            var n = new URL("https://www.notion.so" + (e.startsWith("/image") ? e : "/image/" + encodeURIComponent(e)));
            if (t && !e.includes("/images/page-cover/")) {
                var a = "space" === t.value.parent_table ? "block" : t.value.parent_table;
                n.searchParams.set("table", a), n.searchParams.set("id", t.value.id), n.searchParams.set("cache", "v2")
            }
            return n.toString()
        },
        m = function(e) {
            return void 0 === e && (e = ""), "/" + (e = e.replace(/-/g, ""))
        },
        f = function(e) {
            var t, n, a, r = e.block,
                l = e.className,
                o = e.big,
                s = e.mapImageUrl;
            if ("page" !== (a = r.value).type && "callout" !== a.type) return null;
            var c = null === (t = r.value.format) || void 0 === t ? void 0 : t.page_icon,
                p = null === (n = r.value.properties) || void 0 === n ? void 0 : n.title;
            if (null == c ? void 0 : c.includes("http")) {
                var d = s(c, r);
                return (0, i.createElement)("img", {
                    className: u(l, o ? "notion-page-icon-cover" : "notion-page-icon"),
                    src: d,
                    alt: p ? g(p) : "Icon"
                })
            }
            return (0, i.createElement)("span", {
                className: u(l, "notion-emoji", o ? "notion-page-icon-cover" : "notion-page-icon"),
                role: "img",
                "aria-label": c
            }, c)
        },
        v = function(e) {
            var t = e.blockMap,
                n = e.mapPageUrl,
                a = e.mapImageUrl,
                r = Object.keys(t)[0];
            if (!r) return null;
            for (var l = [], o = r;;) {
                var s, c, u = t[o];
                if (!u || !u.value) break;
                var g = null === (s = u.value.properties) || void 0 === s ? void 0 : s.title[0][0],
                    p = null === (c = u.value.format) || void 0 === c ? void 0 : c.page_icon;
                if (!g && !p) break;
                l.push({
                    block: u,
                    active: o === r,
                    pageId: o,
                    title: g,
                    icon: p
                });
                var d = u.value.parent_id;
                if (!d) break;
                o = d
            }
            return l.reverse(), (0, i.createElement)("header", {
                className: "notion-page-header"
            }, (0, i.createElement)("div", {
                className: "notion-nav-breadcrumbs"
            }, l.map((function(e, t) {
                return (0, i.createElement)(i.Fragment, {
                    key: e.pageId
                }, (0, i.createElement)("a", {
                    className: "notion-nav-breadcrumb " + (e.active ? "notion-nav-breadcrumb-active" : ""),
                    href: e.active ? void 0 : n(e.pageId)
                }, e.icon && (0, i.createElement)(f, {
                    className: "notion-nav-icon",
                    block: e.block,
                    mapImageUrl: a
                }), e.title && (0, i.createElement)("span", {
                    className: "notion-nav-title"
                }, e.title)), t < l.length - 1 && (0, i.createElement)("span", {
                    className: "notion-nav-spacer"
                }, "/"))
            }))))
        },
        h = function(e) {
            var t = e.block,
                n = e.children,
                a = e.level,
                r = e.fullPage,
                l = e.hideHeader,
                o = e.blockMap,
                d = e.mapPageUrl,
                m = e.mapImageUrl,
                h = e.customBlockComponents,
                b = e.customDecoratorComponents,
                y = null == t ? void 0 : t.value,
                k = function() {
                    var e, h, k, x, E, w, F, A, N, _, j, S = function(e) {
                        return function(t) {
                            return null == t ? void 0 : t.map((function(t, n) {
                                var a = t[0],
                                    r = t[1];
                                return r ? r.reduceRight((function(t, r) {
                                    var l = function() {
                                            switch (r[0]) {
                                                case "h":
                                                    return (0, i.createElement)("span", {
                                                        key: n,
                                                        className: "notion-" + r[1]
                                                    }, t);
                                                case "c":
                                                    return (0, i.createElement)("code", {
                                                        key: n,
                                                        className: "notion-inline-code"
                                                    }, t);
                                                case "b":
                                                    return (0, i.createElement)("b", {
                                                        key: n
                                                    }, t);
                                                case "i":
                                                    return (0, i.createElement)("em", {
                                                        key: n
                                                    }, t);
                                                case "s":
                                                    return (0, i.createElement)("s", {
                                                        key: n
                                                    }, t);
                                                case "a":
                                                    return (0, i.createElement)("a", {
                                                        className: "notion-link",
                                                        href: r[1],
                                                        key: n
                                                    }, t);
                                                default:
                                                    return (0, i.createElement)(i.Fragment, {
                                                        key: n
                                                    }, t)
                                            }
                                        },
                                        o = null == e ? void 0 : e[r[0]];
                                    if (o) {
                                        var s = r[1] ? {
                                            decoratorValue: r[1]
                                        } : {};
                                        return (0, i.createElement)(o, Object.assign({
                                            key: n
                                        }, s, {
                                            renderComponent: l
                                        }), a)
                                    }
                                    return l()
                                }), (0, i.createElement)(i.Fragment, null, a)) : (0, i.createElement)(i.Fragment, {
                                    key: n
                                }, a)
                            }))
                        }
                    }(b);
                    switch (null == y ? void 0 : y.type) {
                        case "page":
                            if (0 === a) {
                                if (r) {
                                    if (!y.properties) return null;
                                    var $ = y.format || {},
                                        I = $.page_icon,
                                        P = $.page_cover,
                                        C = $.page_cover_position,
                                        O = $.page_full_width,
                                        T = $.page_small_text,
                                        U = 100 * (1 - (C || .5));
                                    return (0, i.createElement)("div", {
                                        className: "notion"
                                    }, !l && (0, i.createElement)(v, {
                                        blockMap: o,
                                        mapPageUrl: d,
                                        mapImageUrl: m
                                    }), P && (0, i.createElement)("img", {
                                        src: m(P, t),
                                        alt: g(y.properties.title),
                                        className: "notion-page-cover",
                                        style: {
                                            objectPosition: "center " + U + "%"
                                        }
                                    }), (0, i.createElement)("main", {
                                        className: u("notion-page", !P && "notion-page-offset", O && "notion-full-width", T && "notion-small-text")
                                    }, I && (0, i.createElement)(f, {
                                        className: P ? "notion-page-icon-offset" : void 0,
                                        block: t,
                                        big: !0,
                                        mapImageUrl: m
                                    }), (0, i.createElement)("div", {
                                        className: "notion-title"
                                    }, S(y.properties.title)), n))
                                }
                                return (0, i.createElement)("main", {
                                    className: "notion"
                                }, n)
                            }
                            return y.properties ? (0, i.createElement)("a", {
                                className: "notion-page-link",
                                href: d(y.id)
                            }, y.format && (0, i.createElement)("div", {
                                className: "notion-page-icon"
                            }, (0, i.createElement)(f, {
                                block: t,
                                mapImageUrl: m
                            })), (0, i.createElement)("div", {
                                className: "notion-page-text"
                            }, S(y.properties.title))) : null;
                        case "header":
                            return y.properties ? (0, i.createElement)("h1", {
                                className: "notion-h1"
                            }, S(y.properties.title)) : null;
                        case "sub_header":
                            return y.properties ? (0, i.createElement)("h2", {
                                className: "notion-h2"
                            }, S(y.properties.title)) : null;
                        case "sub_sub_header":
                            return y.properties ? (0, i.createElement)("h3", {
                                className: "notion-h3"
                            }, S(y.properties.title)) : null;
                        case "divider":
                            return (0, i.createElement)("hr", {
                                className: "notion-hr"
                            });
                        case "text":
                            if (!y.properties) return (0, i.createElement)("div", {
                                className: "notion-blank"
                            }, " ");
                            var L = null === (e = y.format) || void 0 === e ? void 0 : e.block_color;
                            return (0, i.createElement)("p", {
                                className: u("notion-text", L && "notion-" + L)
                            }, S(y.properties.title));
                        case "bulleted_list":
                        case "numbered_list":
                            var M = function(e, t) {
                                    return "bulleted_list" === y.type ? (0, i.createElement)("ul", {
                                        className: "notion-list notion-list-disc"
                                    }, e) : (0, i.createElement)("ol", {
                                        start: t,
                                        className: "notion-list notion-list-numbered"
                                    }, e)
                                },
                                R = null;
                            R = y.content ? (0, i.createElement)(i.Fragment, null, y.properties && (0, i.createElement)("li", null, S(y.properties.title)), M(n)) : y.properties ? (0, i.createElement)("li", null, S(y.properties.title)) : null;
                            var B = t.value.type !== o[t.value.parent_id].value.type,
                                z = p(y.id, o);
                            return B ? M(R, z) : R;
                        case "image":
                        case "embed":
                        case "figma":
                        case "video":
                            var D = t.value;
                            return (0, i.createElement)("figure", {
                                className: "notion-asset-wrapper",
                                style: void 0 !== D.format ? {
                                    width: D.format.block_width
                                } : void 0
                            }, (0, i.createElement)(s, {
                                block: t,
                                mapImageUrl: m
                            }), D.properties.caption && (0, i.createElement)("figcaption", {
                                className: "notion-image-caption"
                            }, S(D.properties.caption)));
                        case "code":
                            if (y.properties.title) {
                                var q = y.properties.title[0][0],
                                    H = y.properties.language[0][0];
                                return (0, i.createElement)(c, {
                                    key: y.id,
                                    language: H || "",
                                    code: q
                                })
                            }
                            break;
                        case "column_list":
                            return (0, i.createElement)("div", {
                                className: "notion-row"
                            }, n);
                        case "column":
                            var W = y.format.column_ratio,
                                Z = "calc((100% - " + 46 * (Number((1 / W).toFixed(0)) - 1) + "px) * " + W + ")";
                            return (0, i.createElement)(i.Fragment, null, (0, i.createElement)("div", {
                                className: "notion-column",
                                style: {
                                    width: Z
                                }
                            }, n), (0, i.createElement)("div", {
                                className: "notion-spacer",
                                style: {
                                    width: 46
                                }
                            }));
                        case "quote":
                            return y.properties ? (0, i.createElement)("blockquote", {
                                className: "notion-quote"
                            }, S(y.properties.title)) : null;
                        case "collection_view":
                            if (!t) return null;
                            var G = null == t || null === (h = t.collection) || void 0 === h ? void 0 : h.types[0];
                            return (0, i.createElement)("div", null, (0, i.createElement)("h3", {
                                className: "notion-h3"
                            }, S(null === (k = t.collection) || void 0 === k ? void 0 : k.title)), "table" === (null == G ? void 0 : G.type) && (0, i.createElement)("div", {
                                style: {
                                    maxWidth: "100%",
                                    marginTop: 5
                                }
                            }, (0, i.createElement)("table", {
                                className: "notion-table"
                            }, (0, i.createElement)("thead", null, (0, i.createElement)("tr", {
                                className: "notion-tr"
                            }, null === (x = G.format) || void 0 === x || null === (E = x.table_properties) || void 0 === E ? void 0 : E.filter((function(e) {
                                return e.visible
                            })).map((function(e, n) {
                                var a, r;
                                return (0, i.createElement)("th", {
                                    className: "notion-th",
                                    key: n,
                                    style: {
                                        minWidth: e.width
                                    }
                                }, null === (a = t.collection) || void 0 === a || null === (r = a.schema[e.property]) || void 0 === r ? void 0 : r.name)
                            })))), (0, i.createElement)("tbody", null, null == t || null === (w = t.collection) || void 0 === w ? void 0 : w.data.map((function(e, n) {
                                var a, r;
                                return (0, i.createElement)("tr", {
                                    className: "notion-tr",
                                    key: n
                                }, null === (a = G.format) || void 0 === a || null === (r = a.table_properties) || void 0 === r ? void 0 : r.filter((function(e) {
                                    return e.visible
                                })).map((function(n, a) {
                                    var r, l;
                                    return (0, i.createElement)("td", {
                                        key: a,
                                        className: "notion-td " + ("title" === n.property ? "notion-bold" : "")
                                    }, S(e[null === (r = t.collection) || void 0 === r || null === (l = r.schema[n.property]) || void 0 === l ? void 0 : l.name]))
                                })))
                            }))))), "gallery" === (null == G ? void 0 : G.type) && (0, i.createElement)("div", {
                                className: "notion-gallery"
                            }, null === (F = t.collection) || void 0 === F ? void 0 : F.data.map((function(e, n) {
                                var a, r;
                                return (0, i.createElement)("div", {
                                    key: "col-" + n,
                                    className: "notion-gallery-card"
                                }, (0, i.createElement)("div", {
                                    className: "notion-gallery-content"
                                }, null === (a = G.format) || void 0 === a || null === (r = a.gallery_properties) || void 0 === r ? void 0 : r.filter((function(e) {
                                    return e.visible
                                })).map((function(n, a) {
                                    var r;
                                    return (0, i.createElement)("p", {
                                        key: a + "item",
                                        className: "notion-gallery-data " + (0 === a ? "is-first" : "")
                                    }, g(e[null === (r = t.collection) || void 0 === r ? void 0 : r.schema[n.property].name]))
                                }))))
                            }))));
                        case "callout":
                            return (0, i.createElement)("div", {
                                className: u("notion-callout", y.format.block_color && "notion-" + y.format.block_color, y.format.block_color && "notion-" + y.format.block_color + "_co")
                            }, (0, i.createElement)("div", null, (0, i.createElement)(f, {
                                block: t,
                                mapImageUrl: m
                            })), (0, i.createElement)("div", {
                                className: "notion-callout-text"
                            }, S(y.properties.title)));
                        case "bookmark":
                            var V = y.properties.link,
                                J = null !== (A = y.properties.title) && void 0 !== A ? A : V,
                                X = y.properties.description,
                                Y = null === (N = y.format) || void 0 === N ? void 0 : N.block_color,
                                K = null === (_ = y.format) || void 0 === _ ? void 0 : _.bookmark_icon,
                                Q = null === (j = y.format) || void 0 === j ? void 0 : j.bookmark_cover;
                            return (0, i.createElement)("div", {
                                className: "notion-row"
                            }, (0, i.createElement)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: u("notion-bookmark", Y && "notion-" + Y),
                                href: V[0][0]
                            }, (0, i.createElement)("div", null, (0, i.createElement)("div", {
                                className: "notion-bookmark-title"
                            }, S(J)), X && (0, i.createElement)("div", {
                                className: "notion-bookmark-description"
                            }, S(X)), (0, i.createElement)("div", {
                                className: "notion-bookmark-link"
                            }, K && (0, i.createElement)("img", {
                                src: K,
                                alt: g(J)
                            }), (0, i.createElement)("div", null, S(V)))), Q && (0, i.createElement)("div", {
                                className: "notion-bookmark-image"
                            }, (0, i.createElement)("img", {
                                src: Q,
                                alt: g(J)
                            }))));
                        case "toggle":
                            return (0, i.createElement)("details", {
                                className: "notion-toggle"
                            }, (0, i.createElement)("summary", null, S(y.properties.title)), (0, i.createElement)("div", null, n));
                        default:
                            return (0, i.createElement)("div", null)
                    }
                    return null
                };
            if (h && h[null == y ? void 0 : y.type] && 0 !== a) {
                var x = h[null == y ? void 0 : y.type];
                return (0, i.createElement)(x, {
                    renderComponent: k,
                    blockMap: o,
                    blockValue: y,
                    level: a
                }, n)
            }
            return k()
        },
        b = function e(n) {
            var a, r, l = n.level,
                o = void 0 === l ? 0 : l,
                s = n.currentId,
                c = n.mapPageUrl,
                u = void 0 === c ? m : c,
                g = n.mapImageUrl,
                p = void 0 === g ? d : g,
                f = function(e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(n, ["level", "currentId", "mapPageUrl", "mapImageUrl"]),
                v = f.blockMap,
                b = s || Object.keys(v)[0],
                y = v[b];
            return y ? t(i).createElement(h, Object.assign({
                key: b,
                level: o,
                block: y,
                mapPageUrl: u,
                mapImageUrl: p
            }, f), null == y || null === (a = y.value) || void 0 === a || null === (r = a.content) || void 0 === r ? void 0 : r.map((function(n) {
                return t(i).createElement(e, Object.assign({
                    key: n,
                    currentId: n,
                    level: o + 1,
                    mapPageUrl: u,
                    mapImageUrl: p
                }, f))
            }))) : null
        }
})), a.register("6nIlV", (function(e, t) {
    var a = function(e) {
        var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            n = 0,
            a = {},
            r = {
                manual: e.Prism && e.Prism.manual,
                disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(t) {
                        return t instanceof i ? new i(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++n
                        }), e.__id
                    },
                    clone: function e(t, n) {
                        var a, i;
                        switch (n = n || {}, r.util.type(t)) {
                            case "Object":
                                if (i = r.util.objId(t), n[i]) return n[i];
                                for (var l in a = {}, n[i] = a, t) t.hasOwnProperty(l) && (a[l] = e(t[l], n));
                                return a;
                            case "Array":
                                return i = r.util.objId(t), n[i] ? n[i] : (a = [], n[i] = a, t.forEach((function(t, r) {
                                    a[r] = e(t, n)
                                })), a);
                            default:
                                return t
                        }
                    },
                    getLanguage: function(e) {
                        for (; e;) {
                            var n = t.exec(e.className);
                            if (n) return n[1].toLowerCase();
                            e = e.parentElement
                        }
                        return "none"
                    },
                    setLanguage: function(e, n) {
                        e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n)
                    },
                    currentScript: function() {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (a) {
                            var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack) || [])[1];
                            if (e) {
                                var t = document.getElementsByTagName("script");
                                for (var n in t)
                                    if (t[n].src == e) return t[n]
                            }
                            return null
                        }
                    },
                    isActive: function(e, t, n) {
                        for (var a = "no-" + t; e;) {
                            var r = e.classList;
                            if (r.contains(t)) return !0;
                            if (r.contains(a)) return !1;
                            e = e.parentElement
                        }
                        return !!n
                    }
                },
                languages: {
                    plain: a,
                    plaintext: a,
                    text: a,
                    txt: a,
                    extend: function(e, t) {
                        var n = r.util.clone(r.languages[e]);
                        for (var a in t) n[a] = t[a];
                        return n
                    },
                    insertBefore: function(e, t, n, a) {
                        var i = (a = a || r.languages)[e],
                            l = {};
                        for (var o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == t)
                                    for (var s in n) n.hasOwnProperty(s) && (l[s] = n[s]);
                                n.hasOwnProperty(o) || (l[o] = i[o])
                            } var c = a[e];
                        return a[e] = l, r.languages.DFS(r.languages, (function(t, n) {
                            n === c && t != e && (this[t] = l)
                        })), l
                    },
                    DFS: function e(t, n, a, i) {
                        i = i || {};
                        var l = r.util.objId;
                        for (var o in t)
                            if (t.hasOwnProperty(o)) {
                                n.call(t, o, t[o], a || o);
                                var s = t[o],
                                    c = r.util.type(s);
                                "Object" !== c || i[l(s)] ? "Array" !== c || i[l(s)] || (i[l(s)] = !0, e(s, n, o, i)) : (i[l(s)] = !0, e(s, n, null, i))
                            }
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    r.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, n) {
                    var a = {
                        callback: n,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    r.hooks.run("before-highlightall", a), a.elements = Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)), r.hooks.run("before-all-elements-highlight", a);
                    for (var i, l = 0; i = a.elements[l++];) r.highlightElement(i, !0 === t, a.callback)
                },
                highlightElement: function(t, n, a) {
                    var i = r.util.getLanguage(t),
                        l = r.languages[i];
                    r.util.setLanguage(t, i);
                    var o = t.parentElement;
                    o && "pre" === o.nodeName.toLowerCase() && r.util.setLanguage(o, i);
                    var s = {
                        element: t,
                        language: i,
                        grammar: l,
                        code: t.textContent
                    };

                    function c(e) {
                        s.highlightedCode = e, r.hooks.run("before-insert", s), s.element.innerHTML = s.highlightedCode, r.hooks.run("after-highlight", s), r.hooks.run("complete", s), a && a.call(s.element)
                    }
                    if (r.hooks.run("before-sanity-check", s), (o = s.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !s.code) return r.hooks.run("complete", s), void(a && a.call(s.element));
                    if (r.hooks.run("before-highlight", s), s.grammar)
                        if (n && e.Worker) {
                            var u = new Worker(r.filename);
                            u.onmessage = function(e) {
                                c(e.data)
                            }, u.postMessage(JSON.stringify({
                                language: s.language,
                                code: s.code,
                                immediateClose: !0
                            }))
                        } else c(r.highlight(s.code, s.grammar, s.language));
                    else c(r.util.encode(s.code))
                },
                highlight: function(e, t, n) {
                    var a = {
                        code: e,
                        grammar: t,
                        language: n
                    };
                    if (r.hooks.run("before-tokenize", a), !a.grammar) throw new Error('The language "' + a.language + '" has no grammar.');
                    return a.tokens = r.tokenize(a.code, a.grammar), r.hooks.run("after-tokenize", a), i.stringify(r.util.encode(a.tokens), a.language)
                },
                tokenize: function(e, t) {
                    var n = t.rest;
                    if (n) {
                        for (var a in n) t[a] = n[a];
                        delete t.rest
                    }
                    var r = new s;
                    return c(r, r.head, e), o(e, r, t, r.head, 0),
                        function(e) {
                            var t = [],
                                n = e.head.next;
                            for (; n !== e.tail;) t.push(n.value), n = n.next;
                            return t
                        }(r)
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var n = r.hooks.all;
                        n[e] = n[e] || [], n[e].push(t)
                    },
                    run: function(e, t) {
                        var n = r.hooks.all[e];
                        if (n && n.length)
                            for (var a, i = 0; a = n[i++];) a(t)
                    }
                },
                Token: i
            };

        function i(e, t, n, a) {
            this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length
        }

        function l(e, t, n, a) {
            e.lastIndex = t;
            var r = e.exec(n);
            if (r && a && r[1]) {
                var i = r[1].length;
                r.index += i, r[0] = r[0].slice(i)
            }
            return r
        }

        function o(e, t, n, a, s, g) {
            for (var p in n)
                if (n.hasOwnProperty(p) && n[p]) {
                    var d = n[p];
                    d = Array.isArray(d) ? d : [d];
                    for (var m = 0; m < d.length; ++m) {
                        if (g && g.cause == p + "," + m) return;
                        var f = d[m],
                            v = f.inside,
                            h = !!f.lookbehind,
                            b = !!f.greedy,
                            y = f.alias;
                        if (b && !f.pattern.global) {
                            var k = f.pattern.toString().match(/[imsuy]*$/)[0];
                            f.pattern = RegExp(f.pattern.source, k + "g")
                        }
                        for (var x = f.pattern || f, E = a.next, w = s; E !== t.tail && !(g && w >= g.reach); w += E.value.length, E = E.next) {
                            var F = E.value;
                            if (t.length > e.length) return;
                            if (!(F instanceof i)) {
                                var A, N = 1;
                                if (b) {
                                    if (!(A = l(x, w, e, h)) || A.index >= e.length) break;
                                    var _ = A.index,
                                        j = A.index + A[0].length,
                                        S = w;
                                    for (S += E.value.length; _ >= S;) S += (E = E.next).value.length;
                                    if (w = S -= E.value.length, E.value instanceof i) continue;
                                    for (var $ = E; $ !== t.tail && (S < j || "string" == typeof $.value); $ = $.next) N++, S += $.value.length;
                                    N--, F = e.slice(w, S), A.index -= w
                                } else if (!(A = l(x, 0, F, h))) continue;
                                _ = A.index;
                                var I = A[0],
                                    P = F.slice(0, _),
                                    C = F.slice(_ + I.length),
                                    O = w + F.length;
                                g && O > g.reach && (g.reach = O);
                                var T = E.prev;
                                if (P && (T = c(t, T, P), w += P.length), u(t, T, N), E = c(t, T, new i(p, v ? r.tokenize(I, v) : I, y, I)), C && c(t, E, C), N > 1) {
                                    var U = {
                                        cause: p + "," + m,
                                        reach: O
                                    };
                                    o(e, t, n, E.prev, w, U), g && U.reach > g.reach && (g.reach = U.reach)
                                }
                            }
                        }
                    }
                }
        }

        function s() {
            var e = {
                    value: null,
                    prev: null,
                    next: null
                },
                t = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = t, this.head = e, this.tail = t, this.length = 0
        }

        function c(e, t, n) {
            var a = t.next,
                r = {
                    value: n,
                    prev: t,
                    next: a
                };
            return t.next = r, a.prev = r, e.length++, r
        }

        function u(e, t, n) {
            for (var a = t.next, r = 0; r < n && a !== e.tail; r++) a = a.next;
            t.next = a, a.prev = t, e.length -= r
        }
        if (e.Prism = r, i.stringify = function e(t, n) {
                if ("string" == typeof t) return t;
                if (Array.isArray(t)) {
                    var a = "";
                    return t.forEach((function(t) {
                        a += e(t, n)
                    })), a
                }
                var i = {
                        type: t.type,
                        content: e(t.content, n),
                        tag: "span",
                        classes: ["token", t.type],
                        attributes: {},
                        language: n
                    },
                    l = t.alias;
                l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)), r.hooks.run("wrap", i);
                var o = "";
                for (var s in i.attributes) o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"';
                return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">"
            }, !e.document) return e.addEventListener ? (r.disableWorkerMessageHandler || e.addEventListener("message", (function(t) {
            var n = JSON.parse(t.data),
                a = n.language,
                i = n.code,
                l = n.immediateClose;
            e.postMessage(r.highlight(i, r.languages[a], a)), l && e.close()
        }), !1), r) : r;
        var g = r.util.currentScript();

        function p() {
            r.manual || r.highlightAll()
        }
        if (g && (r.filename = g.src, g.hasAttribute("data-manual") && (r.manual = !0)), !r.manual) {
            var d = document.readyState;
            "loading" === d || "interactive" === d && g && g.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16)
        }
        return r
    }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    e.exports && (e.exports = a), void 0 !== n && (n.Prism = a), a.languages.markup = {
            comment: {
                pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                greedy: !0
            },
            prolog: {
                pattern: /<\?[\s\S]+?\?>/,
                greedy: !0
            },
            doctype: {
                pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                greedy: !0,
                inside: {
                    "internal-subset": {
                        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: null
                    },
                    string: {
                        pattern: /"[^"]*"|'[^']*'/,
                        greedy: !0
                    },
                    punctuation: /^<!|>$|[[\]]/,
                    "doctype-tag": /^DOCTYPE/i,
                    name: /[^\s<>'"]+/
                }
            },
            cdata: {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                greedy: !0
            },
            tag: {
                pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                greedy: !0,
                inside: {
                    tag: {
                        pattern: /^<\/?[^\s>\/]+/,
                        inside: {
                            punctuation: /^<\/?/,
                            namespace: /^[^\s>\/:]+:/
                        }
                    },
                    "special-attr": [],
                    "attr-value": {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                        inside: {
                            punctuation: [{
                                pattern: /^=/,
                                alias: "attr-equals"
                            }, /"|'/]
                        }
                    },
                    punctuation: /\/?>/,
                    "attr-name": {
                        pattern: /[^\s>\/]+/,
                        inside: {
                            namespace: /^[^\s>\/:]+:/
                        }
                    }
                }
            },
            entity: [{
                pattern: /&[\da-z]{1,8};/i,
                alias: "named-entity"
            }, /&#x?[\da-f]{1,8};/i]
        }, a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity, a.languages.markup.doctype.inside["internal-subset"].inside = a.languages.markup, a.hooks.add("wrap", (function(e) {
            "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
        })), Object.defineProperty(a.languages.markup.tag, "addInlined", {
            value: function(e, t) {
                var n = {};
                n["language-" + t] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: a.languages[t]
                }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                var r = {
                    "included-cdata": {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: n
                    }
                };
                r["language-" + t] = {
                    pattern: /[\s\S]+/,
                    inside: a.languages[t]
                };
                var i = {};
                i[e] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                        return e
                    })), "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: r
                }, a.languages.insertBefore("markup", "cdata", i)
            }
        }), Object.defineProperty(a.languages.markup.tag, "addAttribute", {
            value: function(e, t) {
                a.languages.markup.tag.inside["special-attr"].push({
                    pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                    lookbehind: !0,
                    inside: {
                        "attr-name": /^[^\s=]+/,
                        "attr-value": {
                            pattern: /=[\s\S]+/,
                            inside: {
                                value: {
                                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                    lookbehind: !0,
                                    alias: [t, "language-" + t],
                                    inside: a.languages[t]
                                },
                                punctuation: [{
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                }, /"|'/]
                            }
                        }
                    }
                })
            }
        }), a.languages.html = a.languages.markup, a.languages.mathml = a.languages.markup, a.languages.svg = a.languages.markup, a.languages.xml = a.languages.extend("markup", {}), a.languages.ssml = a.languages.xml, a.languages.atom = a.languages.xml, a.languages.rss = a.languages.xml,
        function(e) {
            var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                    inside: {
                        rule: /^@[\w-]+/,
                        "selector-function-argument": {
                            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                            lookbehind: !0,
                            alias: "selector"
                        },
                        keyword: {
                            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                            lookbehind: !0
                        }
                    }
                },
                url: {
                    pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp("^" + t.source + "$"),
                            alias: "url"
                        }
                    }
                },
                selector: {
                    pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                    lookbehind: !0
                },
                string: {
                    pattern: t,
                    greedy: !0
                },
                property: {
                    pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                    lookbehind: !0
                },
                important: /!important\b/i,
                function: {
                    pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                    lookbehind: !0
                },
                punctuation: /[(){};:,]/
            }, e.languages.css.atrule.inside.rest = e.languages.css;
            var n = e.languages.markup;
            n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
        }(a), a.languages.clike = {
            comment: [{
                pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                lookbehind: !0,
                greedy: !0
            }, {
                pattern: /(^|[^\\:])\/\/.*/,
                lookbehind: !0,
                greedy: !0
            }],
            string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0
            },
            "class-name": {
                pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                lookbehind: !0,
                inside: {
                    punctuation: /[.\\]/
                }
            },
            keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
            boolean: /\b(?:false|true)\b/,
            function: /\b\w+(?=\()/,
            number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
            punctuation: /[{}[\];(),.:]/
        }, a.languages.javascript = a.languages.extend("clike", {
            "class-name": [a.languages.clike["class-name"], {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                lookbehind: !0
            }],
            keyword: [{
                pattern: /((?:^|\})\s*)catch\b/,
                lookbehind: !0
            }, {
                pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                lookbehind: !0
            }],
            function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number: {
                pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                lookbehind: !0
            },
            operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        }), a.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, a.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "regex-source": {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: "language-regex",
                        inside: a.languages.regex
                    },
                    "regex-delimiter": /^\/|\/$/,
                    "regex-flags": /^[a-z]+$/
                }
            },
            "function-variable": {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                alias: "function"
            },
            parameter: [{
                pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: a.languages.javascript
            }, {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: a.languages.javascript
            }, {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: a.languages.javascript
            }, {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: a.languages.javascript
            }],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), a.languages.insertBefore("javascript", "string", {
            hashbang: {
                pattern: /^#!.*/,
                greedy: !0,
                alias: "comment"
            },
            "template-string": {
                pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                greedy: !0,
                inside: {
                    "template-punctuation": {
                        pattern: /^`|`$/,
                        alias: "string"
                    },
                    interpolation: {
                        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                        lookbehind: !0,
                        inside: {
                            "interpolation-punctuation": {
                                pattern: /^\$\{|\}$/,
                                alias: "punctuation"
                            },
                            rest: a.languages.javascript
                        }
                    },
                    string: /[\s\S]+/
                }
            },
            "string-property": {
                pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                lookbehind: !0,
                greedy: !0,
                alias: "property"
            }
        }), a.languages.insertBefore("javascript", "operator", {
            "literal-property": {
                pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                lookbehind: !0,
                alias: "property"
            }
        }), a.languages.markup && (a.languages.markup.tag.addInlined("script", "javascript"), a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), a.languages.js = a.languages.javascript,
        function() {
            if (void 0 !== a && "undefined" != typeof document) {
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
                var e = {
                        js: "javascript",
                        py: "python",
                        rb: "ruby",
                        ps1: "powershell",
                        psm1: "powershell",
                        sh: "bash",
                        bat: "batch",
                        h: "c",
                        tex: "latex"
                    },
                    t = "data-src-status",
                    n = "loading",
                    r = "loaded",
                    i = "pre[data-src]:not([" + t + '="' + r + '"]):not([' + t + '="' + n + '"])';
                a.hooks.add("before-highlightall", (function(e) {
                    e.selector += ", " + i
                })), a.hooks.add("before-sanity-check", (function(l) {
                    var o = l.element;
                    if (o.matches(i)) {
                        l.code = "", o.setAttribute(t, n);
                        var s = o.appendChild(document.createElement("CODE"));
                        s.textContent = "Loading…";
                        var c = o.getAttribute("data-src"),
                            u = l.language;
                        if ("none" === u) {
                            var g = (/\.(\w+)$/.exec(c) || [, "none"])[1];
                            u = e[g] || g
                        }
                        a.util.setLanguage(s, u), a.util.setLanguage(o, u);
                        var p = a.plugins.autoloader;
                        p && p.loadLanguages(u),
                            function(e, t, n) {
                                var a = new XMLHttpRequest;
                                a.open("GET", e, !0), a.onreadystatechange = function() {
                                    4 == a.readyState && (a.status < 400 && a.responseText ? t(a.responseText) : a.status >= 400 ? n("✖ Error " + a.status + " while fetching file: " + a.statusText) : n("✖ Error: File does not exist or is empty"))
                                }, a.send(null)
                            }(c, (function(e) {
                                o.setAttribute(t, r);
                                var n = function(e) {
                                    var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
                                    if (t) {
                                        var n = Number(t[1]),
                                            a = t[2],
                                            r = t[3];
                                        return a ? r ? [n, Number(r)] : [n, void 0] : [n, n]
                                    }
                                }(o.getAttribute("data-range"));
                                if (n) {
                                    var i = e.split(/\r\n?|\n/g),
                                        l = n[0],
                                        c = null == n[1] ? i.length : n[1];
                                    l < 0 && (l += i.length), l = Math.max(0, Math.min(l - 1, i.length)), c < 0 && (c += i.length), c = Math.max(0, Math.min(c, i.length)), e = i.slice(l, c).join("\n"), o.hasAttribute("data-start") || o.setAttribute("data-start", String(l + 1))
                                }
                                s.textContent = e, a.highlightElement(s)
                            }), (function(e) {
                                o.setAttribute(t, "failed"), s.textContent = e
                            }))
                    }
                })), a.plugins.fileHighlight = {
                    highlight: function(e) {
                        for (var t, n = (e || document).querySelectorAll(i), r = 0; t = n[r++];) a.highlightElement(t)
                    }
                };
                var l = !1;
                a.fileHighlight = function() {
                    l || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), l = !0), a.plugins.fileHighlight.highlight.apply(this, arguments)
                }
            }
        }()
})), a.register("16Icq", (function(e, t) {
    ! function(e) {
        var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

        function i(e, t) {
            return e = e.replace(/<S>/g, (function() {
                return n
            })).replace(/<BRACES>/g, (function() {
                return a
            })).replace(/<SPREAD>/g, (function() {
                return r
            })), RegExp(e, t)
        }
        r = i(r).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", {
            spread: {
                pattern: i(/<SPREAD>/.source),
                inside: e.languages.jsx
            }
        }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
            script: {
                pattern: i(/=<BRACES>/.source),
                alias: "language-javascript",
                inside: {
                    "script-punctuation": {
                        pattern: /^=(?=\{)/,
                        alias: "punctuation"
                    },
                    rest: e.languages.jsx
                }
            }
        }, e.languages.jsx.tag);
        var l = function(e) {
                return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(l).join("") : ""
            },
            o = function(t) {
                for (var n = [], a = 0; a < t.length; a++) {
                    var r = t[a],
                        i = !1;
                    if ("string" != typeof r && ("tag" === r.type && r.content[0] && "tag" === r.content[0].type ? "</" === r.content[0].content[0].content ? n.length > 0 && n[n.length - 1].tagName === l(r.content[0].content[1]) && n.pop() : "/>" === r.content[r.content.length - 1].content || n.push({
                            tagName: l(r.content[0].content[1]),
                            openedBraces: 0
                        }) : n.length > 0 && "punctuation" === r.type && "{" === r.content ? n[n.length - 1].openedBraces++ : n.length > 0 && n[n.length - 1].openedBraces > 0 && "punctuation" === r.type && "}" === r.content ? n[n.length - 1].openedBraces-- : i = !0), (i || "string" == typeof r) && n.length > 0 && 0 === n[n.length - 1].openedBraces) {
                        var s = l(r);
                        a < t.length - 1 && ("string" == typeof t[a + 1] || "plain-text" === t[a + 1].type) && (s += l(t[a + 1]), t.splice(a + 1, 1)), a > 0 && ("string" == typeof t[a - 1] || "plain-text" === t[a - 1].type) && (s = l(t[a - 1]) + s, t.splice(a - 1, 1), a--), t[a] = new e.Token("plain-text", s, null, s)
                    }
                    r.content && "string" != typeof r.content && o(r.content)
                }
            };
        e.hooks.add("after-tokenize", (function(e) {
            "jsx" !== e.language && "tsx" !== e.language || o(e.tokens)
        }))
    }(Prism)
}));