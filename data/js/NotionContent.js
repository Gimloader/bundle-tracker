function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('.....', function(e, f) {
    var g;
    g = e.exports, Object.defineProperty(g, '__esModule', {
        value: !0,
        configurable: !0
    }), a(e.exports, 'default', function() {
        return _o;
    });
    var h = d('.....'),
        i = d('.....'),
        j = d('.....'),
        k = d('.....'),
        l = d('.....'),
        m = d('.....');
    let n;
    var _o = p => {
        const [q, r] = i.useState();
        i.useEffect(() => {
            p.content || p.id && (0, k.request)({
                url: `/api/content/${ p.id }`,
                cacheKey: 'NOTION_CONTENT',
                success: s => r(s)
            });
        }, [
            p.id,
            p.content
        ]);
        const s = p.content || q;
        return (0, h.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, h.jsx)('base', {
                    target: '_blank'
                }),
                (0, h.jsx)(_p, {
                    children: s ? (0, h.jsx)(j.NotionRenderer, {
                        blockMap: s
                    }) : p.hideSkeleton ? null : (0, h.jsx)(m.default, {
                        active: !0,
                        title: !1,
                        paragraph: {
                            rows: 9
                        }
                    })
                })
            ]
        });
    };
    const _p = l.default.div.attrs({
        className: 'maxWidth'
    })(n || (n = (q => q)``));
}), d.register('.....', function(e, f) {
    a(e.exports, 'NotionRenderer', function() {
        return _t;
    });
    var g = d('.....'),
        h = d('.....');
    d('.....');
    var i = [
            'video',
            'image',
            'embed',
            'figma'
        ],
        j = function(k) {
            var l = k.block,
                m = k.mapImageUrl,
                n = l.value,
                o = l.value.type;
            if (!i.includes(o))
                return null;
            var p = n.format,
                q = null != p ? p : {},
                r = q.display_source,
                s = void 0 === r ? void 0 : r,
                t = q.block_aspect_ratio,
                u = void 0 === t ? void 0 : t,
                v = q.block_height,
                w = void 0 === v ? 1 : v,
                x = q.block_width,
                y = u || w / (void 0 === x ? 1 : x);
            if ('embed' === o || 'video' === o || 'figma' === o)
                return (0, g.createElement)('div', {
                    style: {
                        paddingBottom: 100 * y + '%',
                        position: 'relative'
                    }
                }, (0, g.createElement)('iframe', {
                    className: 'notion-image-inset',
                    src: 'figma' === o ? n.properties.source[0][0] : s
                }));
            if ('image' === l.value.type) {
                var z, A = m(n.properties.source[0][0], l),
                    B = null === (z = n.properties.caption) || void 0 === z ? void 0 : z[0][0];
                return u ? (0, g.createElement)('div', {
                    style: {
                        paddingBottom: 100 * y + '%',
                        position: 'relative'
                    }
                }, (0, g.createElement)('img', {
                    className: 'notion-image-inset',
                    alt: B || 'notion image',
                    src: A
                })) : (0, g.createElement)('img', {
                    alt: B,
                    src: A
                });
            }
            return null;
        },
        k = function(l) {
            var m = l.code,
                n = l.language,
                o = void 0 === n ? 'javascript' : n,
                p = o.toLowerCase(),
                q = h.languages[p] || h.languages.javascript,
                r = 'language-' + o.toLowerCase();
            return (0, g.createElement)('pre', {
                className: 'notion-code ' + r
            }, (0, g.createElement)('code', {
                className: r,
                dangerouslySetInnerHTML: {
                    __html: (0, h.highlight)(m, q, o)
                }
            }));
        },
        l = function() {
            for (var m = arguments.length, n = new Array(m), o = 0; o < m; o++)
                n[o] = arguments[o];
            return n.filter(function(p) {
                return !!p;
            }).join(' ');
        },
        m = function(n) {
            return n.reduce(function(o, p) {
                return o + p[0];
            }, '');
        },
        n = function(o, p) {
            var q = function(r) {
                    var s = [],
                        t = void 0,
                        u = -1;
                    return Object.keys(r).forEach(function(v) {
                        var w;
                        null === (w = r[v].value.content) || void 0 === w || w.forEach(function(x) {
                            var y, z, A = null === (y = r[x]) || void 0 === y || null === (z = y.value) || void 0 === z ? void 0 : z.type;
                            A && A !== t && (u++, t = A, s[u] = []), s[u].push(x);
                        }), t = void 0;
                    }), s;
                }(p),
                r = q.find(function(s) {
                    return s.includes(o);
                });
            if (r)
                return r.indexOf(o) + 1;
        },
        o = function(p, q) {
            void 0 === p && (p = '');
            var r = new URL('https://www.notion.so' + (p.startsWith('/image') ? p : '/image/' + encodeURIComponent(p)));
            if (q && !p.includes('/images/page-cover/')) {
                var s = 'space' === q.value.parent_table ? 'block' : q.value.parent_table;
                r.searchParams.set('table', s), r.searchParams.set('id', q.value.id), r.searchParams.set('cache', 'v2');
            }
            return r.toString();
        },
        p = function(q) {
            return void 0 === q && (q = ''), '/' + (q = q.replace(/-/g, ''));
        },
        q = function(r) {
            var s, t, u, v = r.block,
                w = r.className,
                x = r.big,
                y = r.mapImageUrl;
            if ('page' !== (u = v.value).type && 'callout' !== u.type)
                return null;
            var z = null === (s = v.value.format) || void 0 === s ? void 0 : s.page_icon,
                A = null === (t = v.value.properties) || void 0 === t ? void 0 : t.title;
            if (null == z ? void 0 : z.includes('http')) {
                var B = y(z, v);
                return (0, g.createElement)('img', {
                    className: l(w, x ? 'notion-page-icon-cover' : 'notion-page-icon'),
                    src: B,
                    alt: A ? m(A) : 'Icon'
                });
            }
            return (0, g.createElement)('span', {
                className: l(w, 'notion-emoji', x ? 'notion-page-icon-cover' : 'notion-page-icon'),
                role: 'img',
                'aria-label': z
            }, z);
        },
        r = function(s) {
            var t = s.blockMap,
                u = s.mapPageUrl,
                v = s.mapImageUrl,
                w = Object.keys(t)[0];
            if (!w)
                return null;
            for (var x = [], y = w;;) {
                var z, A, B = t[y];
                if (!B || !B.value)
                    break;
                var C = null === (z = B.value.properties) || void 0 === z ? void 0 : z.title[0][0],
                    D = null === (A = B.value.format) || void 0 === A ? void 0 : A.page_icon;
                if (!C && !D)
                    break;
                x.push({
                    block: B,
                    active: y === w,
                    pageId: y,
                    title: C,
                    icon: D
                });
                var E = B.value.parent_id;
                if (!E)
                    break;
                y = E;
            }
            return x.reverse(), (0, g.createElement)('header', {
                className: 'notion-page-header'
            }, (0, g.createElement)('div', {
                className: 'notion-nav-breadcrumbs'
            }, x.map(function(F, G) {
                return (0, g.createElement)(g.Fragment, {
                    key: F.pageId
                }, (0, g.createElement)('a', {
                    className: 'notion-nav-breadcrumb ' + (F.active ? 'notion-nav-breadcrumb-active' : ''),
                    href: F.active ? void 0 : u(F.pageId)
                }, F.icon && (0, g.createElement)(q, {
                    className: 'notion-nav-icon',
                    block: F.block,
                    mapImageUrl: v
                }), F.title && (0, g.createElement)('span', {
                    className: 'notion-nav-title'
                }, F.title)), G < x.length - 1 && (0, g.createElement)('span', {
                    className: 'notion-nav-spacer'
                }, '/'));
            })));
        },
        s = function(t) {
            var u = t.block,
                v = t.children,
                w = t.level,
                x = t.fullPage,
                y = t.hideHeader,
                z = t.blockMap,
                A = t.mapPageUrl,
                B = t.mapImageUrl,
                C = t.customBlockComponents,
                D = t.customDecoratorComponents,
                E = null == u ? void 0 : u.value,
                F = function() {
                    var G, H, I, J, K, L, M, N, O, P, Q, R = function(S) {
                        return function(T) {
                            return null == T ? void 0 : T.map(function(U, V) {
                                var W = U[0],
                                    X = U[1];
                                return X ? X.reduceRight(function(Y, Z) {
                                    var $ = function() {
                                            switch (Z[0]) {
                                                case 'h':
                                                    return (0, g.createElement)('span', {
                                                        key: V,
                                                        className: 'notion-' + Z[1]
                                                    }, Y);
                                                case 'c':
                                                    return (0, g.createElement)('code', {
                                                        key: V,
                                                        className: 'notion-inline-code'
                                                    }, Y);
                                                case 'b':
                                                    return (0, g.createElement)('b', {
                                                        key: V
                                                    }, Y);
                                                case 'i':
                                                    return (0, g.createElement)('em', {
                                                        key: V
                                                    }, Y);
                                                case 's':
                                                    return (0, g.createElement)('s', {
                                                        key: V
                                                    }, Y);
                                                case 'a':
                                                    return (0, g.createElement)('a', {
                                                        className: 'notion-link',
                                                        href: Z[1],
                                                        key: V
                                                    }, Y);
                                                default:
                                                    return (0, g.createElement)(g.Fragment, {
                                                        key: V
                                                    }, Y);
                                            }
                                        },
                                        ab = null == S ? void 0 : S[Z[0]];
                                    if (ab) {
                                        var bb = Z[1] ? {
                                            decoratorValue: Z[1]
                                        } : {};
                                        return (0, g.createElement)(ab, Object.assign({
                                            key: V
                                        }, bb, {
                                            renderComponent: $
                                        }), W);
                                    }
                                    return $();
                                }, (0, g.createElement)(g.Fragment, null, W)) : (0, g.createElement)(g.Fragment, {
                                    key: V
                                }, W);
                            });
                        };
                    }(D);
                    switch (null == E ? void 0 : E.type) {
                        case 'page':
                            if (0 === w) {
                                if (x) {
                                    if (!E.properties)
                                        return null;
                                    var S = E.format || {},
                                        T = S.page_icon,
                                        U = S.page_cover,
                                        V = S.page_cover_position,
                                        W = S.page_full_width,
                                        X = S.page_small_text,
                                        Y = 100 * (1 - (V || 0.5));
                                    return (0, g.createElement)('div', {
                                        className: 'notion'
                                    }, !y && (0, g.createElement)(r, {
                                        blockMap: z,
                                        mapPageUrl: A,
                                        mapImageUrl: B
                                    }), U && (0, g.createElement)('img', {
                                        src: B(U, u),
                                        alt: m(E.properties.title),
                                        className: 'notion-page-cover',
                                        style: {
                                            objectPosition: 'center ' + Y + '%'
                                        }
                                    }), (0, g.createElement)('main', {
                                        className: l('notion-page', !U && 'notion-page-offset', W && 'notion-full-width', X && 'notion-small-text')
                                    }, T && (0, g.createElement)(q, {
                                        className: U ? 'notion-page-icon-offset' : void 0,
                                        block: u,
                                        big: !0,
                                        mapImageUrl: B
                                    }), (0, g.createElement)('div', {
                                        className: 'notion-title'
                                    }, R(E.properties.title)), v));
                                }
                                return (0, g.createElement)('main', {
                                    className: 'notion'
                                }, v);
                            }
                            return E.properties ? (0, g.createElement)('a', {
                                className: 'notion-page-link',
                                href: A(E.id)
                            }, E.format && (0, g.createElement)('div', {
                                className: 'notion-page-icon'
                            }, (0, g.createElement)(q, {
                                block: u,
                                mapImageUrl: B
                            })), (0, g.createElement)('div', {
                                className: 'notion-page-text'
                            }, R(E.properties.title))) : null;
                        case 'header':
                            return E.properties ? (0, g.createElement)('h1', {
                                className: 'notion-h1'
                            }, R(E.properties.title)) : null;
                        case 'sub_header':
                            return E.properties ? (0, g.createElement)('h2', {
                                className: 'notion-h2'
                            }, R(E.properties.title)) : null;
                        case 'sub_sub_header':
                            return E.properties ? (0, g.createElement)('h3', {
                                className: 'notion-h3'
                            }, R(E.properties.title)) : null;
                        case 'divider':
                            return (0, g.createElement)('hr', {
                                className: 'notion-hr'
                            });
                        case 'text':
                            if (!E.properties)
                                return (0, g.createElement)('div', {
                                    className: 'notion-blank'
                                }, '\xA0');
                            var Z = null === (G = E.format) || void 0 === G ? void 0 : G.block_color;
                            return (0, g.createElement)('p', {
                                className: l('notion-text', Z && 'notion-' + Z)
                            }, R(E.properties.title));
                        case 'bulleted_list':
                        case 'numbered_list':
                            var $ = function(ab, bb) {
                                    return 'bulleted_list' === E.type ? (0, g.createElement)('ul', {
                                        className: 'notion-list notion-list-disc'
                                    }, ab) : (0, g.createElement)('ol', {
                                        start: bb,
                                        className: 'notion-list notion-list-numbered'
                                    }, ab);
                                },
                                ab = null;
                            ab = E.content ? (0, g.createElement)(g.Fragment, null, E.properties && (0, g.createElement)('li', null, R(E.properties.title)), $(v)) : E.properties ? (0, g.createElement)('li', null, R(E.properties.title)) : null;
                            var bb = u.value.type !== z[u.value.parent_id].value.type,
                                cb = n(E.id, z);
                            return bb ? $(ab, cb) : ab;
                        case 'image':
                        case 'embed':
                        case 'figma':
                        case 'video':
                            var db = u.value;
                            return (0, g.createElement)('figure', {
                                className: 'notion-asset-wrapper',
                                style: void 0 !== db.format ? {
                                    width: db.format.block_width
                                } : void 0
                            }, (0, g.createElement)(j, {
                                block: u,
                                mapImageUrl: B
                            }), db.properties.caption && (0, g.createElement)('figcaption', {
                                className: 'notion-image-caption'
                            }, R(db.properties.caption)));
                        case 'code':
                            if (E.properties.title) {
                                var eb = E.properties.title[0][0],
                                    fb = E.properties.language[0][0];
                                return (0, g.createElement)(k, {
                                    key: E.id,
                                    language: fb || '',
                                    code: eb
                                });
                            }
                            break;
                        case 'column_list':
                            return (0, g.createElement)('div', {
                                className: 'notion-row'
                            }, v);
                        case 'column':
                            var gb = E.format.column_ratio,
                                hb = 'calc((100% - ' + 46 * (Number((1 / gb).toFixed(0)) - 1) + 'px) * ' + gb + ')';
                            return (0, g.createElement)(g.Fragment, null, (0, g.createElement)('div', {
                                className: 'notion-column',
                                style: {
                                    width: hb
                                }
                            }, v), (0, g.createElement)('div', {
                                className: 'notion-spacer',
                                style: {
                                    width: 46
                                }
                            }));
                        case 'quote':
                            return E.properties ? (0, g.createElement)('blockquote', {
                                className: 'notion-quote'
                            }, R(E.properties.title)) : null;
                        case 'collection_view':
                            if (!u)
                                return null;
                            var ib = null == u || null === (H = u.collection) || void 0 === H ? void 0 : H.types[0];
                            return (0, g.createElement)('div', null, (0, g.createElement)('h3', {
                                className: 'notion-h3'
                            }, R(null === (I = u.collection) || void 0 === I ? void 0 : I.title)), 'table' === (null == ib ? void 0 : ib.type) && (0, g.createElement)('div', {
                                style: {
                                    maxWidth: '100%',
                                    marginTop: 5
                                }
                            }, (0, g.createElement)('table', {
                                className: 'notion-table'
                            }, (0, g.createElement)('thead', null, (0, g.createElement)('tr', {
                                className: 'notion-tr'
                            }, null === (J = ib.format) || void 0 === J || null === (K = J.table_properties) || void 0 === K ? void 0 : K.filter(function(jb) {
                                return jb.visible;
                            }).map(function(jb, kb) {
                                var lb, mb;
                                return (0, g.createElement)('th', {
                                    className: 'notion-th',
                                    key: kb,
                                    style: {
                                        minWidth: jb.width
                                    }
                                }, null === (lb = u.collection) || void 0 === lb || null === (mb = lb.schema[jb.property]) || void 0 === mb ? void 0 : mb.name);
                            }))), (0, g.createElement)('tbody', null, null == u || null === (L = u.collection) || void 0 === L ? void 0 : L.data.map(function(jb, kb) {
                                var lb, mb;
                                return (0, g.createElement)('tr', {
                                    className: 'notion-tr',
                                    key: kb
                                }, null === (lb = ib.format) || void 0 === lb || null === (mb = lb.table_properties) || void 0 === mb ? void 0 : mb.filter(function(nb) {
                                    return nb.visible;
                                }).map(function(nb, ob) {
                                    var pb, qb;
                                    return (0, g.createElement)('td', {
                                        key: ob,
                                        className: 'notion-td ' + ('title' === nb.property ? 'notion-bold' : '')
                                    }, R(jb[null === (pb = u.collection) || void 0 === pb || null === (qb = pb.schema[nb.property]) || void 0 === qb ? void 0 : qb.name]));
                                }));
                            })))), 'gallery' === (null == ib ? void 0 : ib.type) && (0, g.createElement)('div', {
                                className: 'notion-gallery'
                            }, null === (M = u.collection) || void 0 === M ? void 0 : M.data.map(function(jb, kb) {
                                var lb, mb;
                                return (0, g.createElement)('div', {
                                    key: 'col-' + kb,
                                    className: 'notion-gallery-card'
                                }, (0, g.createElement)('div', {
                                    className: 'notion-gallery-content'
                                }, null === (lb = ib.format) || void 0 === lb || null === (mb = lb.gallery_properties) || void 0 === mb ? void 0 : mb.filter(function(nb) {
                                    return nb.visible;
                                }).map(function(nb, ob) {
                                    var pb;
                                    return (0, g.createElement)('p', {
                                        key: ob + 'item',
                                        className: 'notion-gallery-data ' + (0 === ob ? 'is-first' : '')
                                    }, m(jb[null === (pb = u.collection) || void 0 === pb ? void 0 : pb.schema[nb.property].name]));
                                })));
                            })));
                        case 'callout':
                            return (0, g.createElement)('div', {
                                className: l('notion-callout', E.format.block_color && 'notion-' + E.format.block_color, E.format.block_color && 'notion-' + E.format.block_color + '_co')
                            }, (0, g.createElement)('div', null, (0, g.createElement)(q, {
                                block: u,
                                mapImageUrl: B
                            })), (0, g.createElement)('div', {
                                className: 'notion-callout-text'
                            }, R(E.properties.title)));
                        case 'bookmark':
                            var jb = E.properties.link,
                                kb = null !== (N = E.properties.title) && void 0 !== N ? N : jb,
                                lb = E.properties.description,
                                mb = null === (O = E.format) || void 0 === O ? void 0 : O.block_color,
                                nb = null === (P = E.format) || void 0 === P ? void 0 : P.bookmark_icon,
                                ob = null === (Q = E.format) || void 0 === Q ? void 0 : Q.bookmark_cover;
                            return (0, g.createElement)('div', {
                                className: 'notion-row'
                            }, (0, g.createElement)('a', {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: l('notion-bookmark', mb && 'notion-' + mb),
                                href: jb[0][0]
                            }, (0, g.createElement)('div', null, (0, g.createElement)('div', {
                                className: 'notion-bookmark-title'
                            }, R(kb)), lb && (0, g.createElement)('div', {
                                className: 'notion-bookmark-description'
                            }, R(lb)), (0, g.createElement)('div', {
                                className: 'notion-bookmark-link'
                            }, nb && (0, g.createElement)('img', {
                                src: nb,
                                alt: m(kb)
                            }), (0, g.createElement)('div', null, R(jb)))), ob && (0, g.createElement)('div', {
                                className: 'notion-bookmark-image'
                            }, (0, g.createElement)('img', {
                                src: ob,
                                alt: m(kb)
                            }))));
                        case 'toggle':
                            return (0, g.createElement)('details', {
                                className: 'notion-toggle'
                            }, (0, g.createElement)('summary', null, R(E.properties.title)), (0, g.createElement)('div', null, v));
                        default:
                            return (0, g.createElement)('div', null);
                    }
                    return null;
                };
            if (C && C[null == E ? void 0 : E.type] && 0 !== w) {
                var G = C[null == E ? void 0 : E.type];
                return (0, g.createElement)(G, {
                    renderComponent: F,
                    blockMap: z,
                    blockValue: E,
                    level: w
                }, v);
            }
            return F();
        },
        _t = function a(u) {
            var v, w, x = u.level,
                y = void 0 === x ? 0 : x,
                z = u.currentId,
                A = u.mapPageUrl,
                B = void 0 === A ? p : A,
                C = u.mapImageUrl,
                D = void 0 === C ? o : C,
                E = function(F, G) {
                    if (null == F)
                        return {};
                    var H, I, J = {},
                        K = Object.keys(F);
                    for (I = 0; I < K.length; I++)
                        H = K[I], G.indexOf(H) >= 0 || (J[H] = F[H]);
                    return J;
                }(u, [
                    'level',
                    'currentId',
                    'mapPageUrl',
                    'mapImageUrl'
                ]),
                F = E.blockMap,
                G = z || Object.keys(F)[0],
                H = F[G];
            return H ? b(g).createElement(s, Object.assign({
                key: G,
                level: y,
                block: H,
                mapPageUrl: B,
                mapImageUrl: D
            }, E), null == H || null === (v = H.value) || void 0 === v || null === (w = v.content) || void 0 === w ? void 0 : w.map(function(I) {
                return b(g).createElement(a, Object.assign({
                    key: I,
                    currentId: I,
                    level: y + 1,
                    mapPageUrl: B,
                    mapImageUrl: D
                }, E));
            })) : null;
        };
}), d.register('.....', function(e, f) {
    var g = function(h) {
        var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            j = 0,
            k = {},
            l = {
                manual: h.Prism && h.Prism.manual,
                disableWorkerMessageHandler: h.Prism && h.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function h(m) {
                        return m instanceof _m ? new _m(m.type, h(m.content), m.alias) : Array.isArray(m) ? m.map(h) : m.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    },
                    type: function(m) {
                        return Object.prototype.toString.call(m).slice(8, -1);
                    },
                    objId: function(m) {
                        return m.__id || Object.defineProperty(m, '__id', {
                            value: ++j
                        }), m.__id;
                    },
                    clone: function h(m, n) {
                        var o, p;
                        switch (n = n || {}, l.util.type(m)) {
                            case 'Object':
                                if (p = l.util.objId(m), n[p])
                                    return n[p];
                                for (var q in (o = {}, n[p] = o, m))
                                    m.hasOwnProperty(q) && (o[q] = h(m[q], n));
                                return o;
                            case 'Array':
                                return p = l.util.objId(m), n[p] ? n[p] : (o = [], n[p] = o, m.forEach(function(r, s) {
                                    o[s] = h(r, n);
                                }), o);
                            default:
                                return m;
                        }
                    },
                    getLanguage: function(m) {
                        for (; m;) {
                            var n = i.exec(m.className);
                            if (n)
                                return n[1].toLowerCase();
                            m = m.parentElement;
                        }
                        return 'none';
                    },
                    setLanguage: function(m, n) {
                        m.className = m.className.replace(RegExp(i, 'gi'), ''), m.classList.add('language-' + n);
                    },
                    currentScript: function() {
                        if ('undefined' == typeof document)
                            return null;
                        if ('currentScript' in document)
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (k) {
                            var m = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack) || [])[1];
                            if (m) {
                                var n = document.getElementsByTagName('script');
                                for (var o in n)
                                    if (n[o].src == m)
                                        return n[o];
                            }
                            return null;
                        }
                    },
                    isActive: function(m, n, o) {
                        for (var p = 'no-' + n; m;) {
                            var q = m.classList;
                            if (q.contains(n))
                                return !0;
                            if (q.contains(p))
                                return !1;
                            m = m.parentElement;
                        }
                        return !!o;
                    }
                },
                languages: {
                    plain: k,
                    plaintext: k,
                    text: k,
                    txt: k,
                    extend: function(m, n) {
                        var o = l.util.clone(l.languages[m]);
                        for (var p in n)
                            o[p] = n[p];
                        return o;
                    },
                    insertBefore: function(m, n, o, p) {
                        var q = (p = p || l.languages)[m],
                            r = {};
                        for (var s in q)
                            if (q.hasOwnProperty(s)) {
                                if (s == n)
                                    for (var t in o)
                                        o.hasOwnProperty(t) && (r[t] = o[t]);
                                o.hasOwnProperty(s) || (r[s] = q[s]);
                            }
                        var u = p[m];
                        return p[m] = r, l.languages.DFS(l.languages, function(v, w) {
                            w === u && v != m && (this[v] = r);
                        }), r;
                    },
                    DFS: function h(m, n, o, p) {
                        p = p || {};
                        var q = l.util.objId;
                        for (var r in m)
                            if (m.hasOwnProperty(r)) {
                                n.call(m, r, m[r], o || r);
                                var s = m[r],
                                    t = l.util.type(s);
                                'Object' !== t || p[q(s)] ? 'Array' !== t || p[q(s)] || (p[q(s)] = !0, h(s, n, r, p)) : (p[q(s)] = !0, h(s, n, null, p));
                            }
                    }
                },
                plugins: {},
                highlightAll: function(m, n) {
                    l.highlightAllUnder(document, m, n);
                },
                highlightAllUnder: function(m, n, o) {
                    var p = {
                        callback: o,
                        container: m,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    l.hooks.run('before-highlightall', p), p.elements = Array.prototype.slice.apply(p.container.querySelectorAll(p.selector)), l.hooks.run('before-all-elements-highlight', p);
                    for (var q, r = 0; q = p.elements[r++];)
                        l.highlightElement(q, !0 === n, p.callback);
                },
                highlightElement: function(m, n, o) {
                    var p = l.util.getLanguage(m),
                        q = l.languages[p];
                    l.util.setLanguage(m, p);
                    var r = m.parentElement;
                    r && 'pre' === r.nodeName.toLowerCase() && l.util.setLanguage(r, p);
                    var s = {
                        element: m,
                        language: p,
                        grammar: q,
                        code: m.textContent
                    };

                    function t(u) {
                        s.highlightedCode = u, l.hooks.run('before-insert', s), s.element.innerHTML = s.highlightedCode, l.hooks.run('after-highlight', s), l.hooks.run('complete', s), o && o.call(s.element);
                    }
                    if (l.hooks.run('before-sanity-check', s), (r = s.element.parentElement) && 'pre' === r.nodeName.toLowerCase() && !r.hasAttribute('tabindex') && r.setAttribute('tabindex', '0'), !s.code)
                        return l.hooks.run('complete', s), void(o && o.call(s.element));
                    if (l.hooks.run('before-highlight', s), s.grammar)
                        if (n && h.Worker) {
                            var u = new Worker(l.filename);
                            u.onmessage = function(v) {
                                t(v.data);
                            }, u.postMessage(JSON.stringify({
                                language: s.language,
                                code: s.code,
                                immediateClose: !0
                            }));
                        } else
                            t(l.highlight(s.code, s.grammar, s.language));
                    else
                        t(l.util.encode(s.code));
                },
                highlight: function(m, n, o) {
                    var p = {
                        code: m,
                        grammar: n,
                        language: o
                    };
                    if (l.hooks.run('before-tokenize', p), !p.grammar)
                        throw new Error('The language "' + p.language + '" has no grammar.');
                    return p.tokens = l.tokenize(p.code, p.grammar), l.hooks.run('after-tokenize', p), _m.stringify(l.util.encode(p.tokens), p.language);
                },
                tokenize: function(m, n) {
                    var o = n.rest;
                    if (o) {
                        for (var p in o)
                            n[p] = o[p];
                        delete n.rest;
                    }
                    var q = new _Q();
                    return _T(q, q.head, m), _q(m, q, n, q.head, 0),
                        function(r) {
                            var s = [],
                                t = r.head.next;
                            for (; t !== r.tail;)
                                s.push(t.value), t = t.next;
                            return s;
                        }(q);
                },
                hooks: {
                    all: {},
                    add: function(m, n) {
                        var o = l.hooks.all;
                        o[m] = o[m] || [], o[m].push(n);
                    },
                    run: function(m, n) {
                        var o = l.hooks.all[m];
                        if (o && o.length)
                            for (var p, q = 0; p = o[q++];)
                                p(n);
                    }
                },
                Token: _m
            };

        function _m(n, o, p, q) {
            this.type = n, this.content = o, this.alias = p, this.length = 0 | (q || '').length;
        }

        function n(o, p, q, r) {
            o.lastIndex = p;
            var s = o.exec(q);
            if (s && r && s[1]) {
                var t = s[1].length;
                s.index += _m, s[0] = s[0].slice(_m);
            }
            return s;
        }

        function _q(r, s, t, u, v, w) {
            for (var x in t)
                if (t.hasOwnProperty(x) && t[x]) {
                    var y = t[x];
                    y = Array.isArray(y) ? y : [y];
                    for (var z = 0; z < y.length; ++z) {
                        if (w && w.cause == x + ',' + z)
                            return;
                        var A = y[z],
                            B = A.inside,
                            C = !!A.lookbehind,
                            D = !!A.greedy,
                            E = A.alias;
                        if (D && !A.pattern.global) {
                            var F = A.pattern.toString().match(/[imsuy]*$/)[0];
                            A.pattern = RegExp(A.pattern.source, F + 'g');
                        }
                        for (var G = A.pattern || A, H = u.next, I = v; H !== s.tail && !(w && I >= w.reach); I += H.value.length, H = H.next) {
                            var J = H.value;
                            if (s.length > r.length)
                                return;
                            if (!(J instanceof _m)) {
                                var K, L = 1;
                                if (D) {
                                    if (!(K = n(G, I, r, C)) || K.index >= r.length)
                                        break;
                                    var M = K.index,
                                        N = K.index + K[0].length,
                                        O = I;
                                    for (O += H.value.length; M >= O;)
                                        O += (H = H.next).value.length;
                                    if (I = O -= H.value.length, H.value instanceof _m)
                                        continue;
                                    for (var P = H; P !== s.tail && (O < N || 'string' == typeof P.value); P = P.next)
                                        L++, O += P.value.length;
                                    L--, J = r.slice(I, O), K.index -= I;
                                } else if (!(K = n(G, 0, J, C)))
                                    continue;
                                M = K.index;
                                var Q = K[0],
                                    R = J.slice(0, M),
                                    S = J.slice(M + Q.length),
                                    T = I + J.length;
                                w && T > w.reach && (w.reach = T);
                                var U = H.prev;
                                if (R && (U = _T(s, U, R), I += R.length), _W(s, U, L), H = _T(s, U, new _m(x, B ? s.tokenize(Q, B) : Q, E, Q)), S && _T(s, H, S), L > 1) {
                                    var V = {
                                        cause: x + ',' + z,
                                        reach: T
                                    };
                                    _q(r, s, t, H.prev, I, V), w && V.reach > w.reach && (w.reach = V.reach);
                                }
                            }
                        }
                    }
                }
        }

        function _Q() {
            var R = {
                    value: null,
                    prev: null,
                    next: null
                },
                S = {
                    value: null,
                    prev: R,
                    next: null
                };
            R.next = S, this.head = R, this.tail = S, this.length = 0;
        }

        function _T(U, V, W) {
            var X = V.next,
                Y = {
                    value: W,
                    prev: V,
                    next: X
                };
            return V.next = Y, X.prev = Y, U.length++, Y;
        }

        function _W(X, Y, Z) {
            for (var $ = Y.next, ab = 0; ab < Z && $ !== X.tail; ab++)
                $ = $.next;
            Y.next = $, $.prev = Y, X.length -= ab;
        }
        if (R.Prism = ab, _m.stringify = function R(Z, $) {
                if ('string' == typeof Z)
                    return Z;
                if (Array.isArray(Z)) {
                    var ab = '';
                    return Z.forEach(function(bb) {
                        ab += R(bb, $);
                    }), ab;
                }
                var bb = {
                        type: Z.type,
                        content: R(Z.content, $),
                        tag: 'span',
                        classes: [
                            'token',
                            Z.type
                        ],
                        attributes: {},
                        language: $
                    },
                    cb = Z.alias;
                cb && (Array.isArray(cb) ? Array.prototype.push.apply(bb.classes, cb) : bb.classes.push(cb)), ab.hooks.run('wrap', bb);
                var db = '';
                for (var eb in bb.attributes)
                    db += ' ' + eb + '="' + (bb.attributes[eb] || '').replace(/"/g, '&quot;') + '"';
                return '<' + bb.tag + ' class="' + bb.classes.join(' ') + '"' + db + '>' + bb.content + '</' + bb.tag + '>';
            }, !R.document)
            return R.addEventListener ? (ab.disableWorkerMessageHandler || R.addEventListener('message', function(Z) {
                var $ = JSON.parse(Z.data),
                    ab = $.language,
                    bb = $.code,
                    cb = $.immediateClose;
                R.postMessage(ab.highlight(bb, ab.languages[ab], ab)), cb && R.close();
            }, !1), ab) : ab;
        var Z = ab.util.currentScript();

        function $() {
            ab.manual || ab.highlightAll();
        }
        if (Z && (ab.filename = Z.src, Z.hasAttribute('data-manual') && (ab.manual = !0)), !ab.manual) {
            var ab = document.readyState;
            'loading' === ab || 'interactive' === ab && Z && Z.defer ? document.addEventListener('DOMContentLoaded', $) : window.requestAnimationFrame ? window.requestAnimationFrame($) : window.setTimeout($, 16);
        }
        return ab;
    }('undefined' != typeof window ? window : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
    e.exports && (e.exports = g), void 0 !== c && (c.Prism = g), g.languages.markup = {
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
                    'internal-subset': {
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
                    'doctype-tag': /^DOCTYPE/i,
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
                    'special-attr': [],
                    'attr-value': {
                        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                        inside: {
                            punctuation: [{
                                    pattern: /^=/,
                                    alias: 'attr-equals'
                                },
                                /"|'/
                            ]
                        }
                    },
                    punctuation: /\/?>/,
                    'attr-name': {
                        pattern: /[^\s>\/]+/,
                        inside: {
                            namespace: /^[^\s>\/:]+:/
                        }
                    }
                }
            },
            entity: [{
                    pattern: /&[\da-z]{1,8};/i,
                    alias: 'named-entity'
                },
                /&#x?[\da-f]{1,8};/i
            ]
        }, g.languages.markup.tag.inside['attr-value'].inside.entity = g.languages.markup.entity, g.languages.markup.doctype.inside['internal-subset'].inside = g.languages.markup, g.hooks.add('wrap', function(h) {
            'entity' === h.type && (h.attributes.title = h.content.replace(/&amp;/, '&'));
        }), Object.defineProperty(g.languages.markup.tag, 'addInlined', {
            value: function(h, i) {
                var j = {};
                j['language-' + i] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: g.languages[i]
                }, j.cdata = /^<!\[CDATA\[|\]\]>$/i;
                var k = {
                    'included-cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: j
                    }
                };
                k['language-' + i] = {
                    pattern: /[\s\S]+/,
                    inside: g.languages[i]
                };
                var l = {};
                l[h] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                        return h;
                    }), 'i'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: k
                }, g.languages.insertBefore('markup', 'cdata', l);
            }
        }), Object.defineProperty(g.languages.markup.tag, 'addAttribute', {
            value: function(h, i) {
                g.languages.markup.tag.inside['special-attr'].push({
                    pattern: RegExp(/(^|["'\s])/.source + '(?:' + h + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
                    lookbehind: !0,
                    inside: {
                        'attr-name': /^[^\s=]+/,
                        'attr-value': {
                            pattern: /=[\s\S]+/,
                            inside: {
                                value: {
                                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                    lookbehind: !0,
                                    alias: [
                                        i,
                                        'language-' + i
                                    ],
                                    inside: g.languages[i]
                                },
                                punctuation: [{
                                        pattern: /^=/,
                                        alias: 'attr-equals'
                                    },
                                    /"|'/
                                ]
                            }
                        }
                    }
                });
            }
        }), g.languages.html = g.languages.markup, g.languages.mathml = g.languages.markup, g.languages.svg = g.languages.markup, g.languages.xml = g.languages.extend('markup', {}), g.languages.ssml = g.languages.xml, g.languages.atom = g.languages.xml, g.languages.rss = g.languages.xml,
        function(h) {
            var i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            h.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                    inside: {
                        rule: /^@[\w-]+/,
                        'selector-function-argument': {
                            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                            lookbehind: !0,
                            alias: 'selector'
                        },
                        keyword: {
                            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                            lookbehind: !0
                        }
                    }
                },
                url: {
                    pattern: RegExp('\\burl\\((?:' + i.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp('^' + i.source + '$'),
                            alias: 'url'
                        }
                    }
                },
                selector: {
                    pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + i.source + ')*(?=\\s*\\{)'),
                    lookbehind: !0
                },
                string: {
                    pattern: i,
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
            }, h.languages.css.atrule.inside.rest = h.languages.css;
            var j = h.languages.markup;
            j && (j.tag.addInlined('style', 'css'), j.tag.addAttribute('style', 'css'));
        }(g), g.languages.clike = {
            comment: [{
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: !0,
                    greedy: !0
                },
                {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }
            ],
            string: {
                pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                greedy: !0
            },
            'class-name': {
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
        }, g.languages.javascript = g.languages.extend('clike', {
            'class-name': [
                g.languages.clike['class-name'],
                {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                    lookbehind: !0
                }
            ],
            keyword: [{
                    pattern: /((?:^|\})\s*)catch\b/,
                    lookbehind: !0
                },
                {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: !0
                }
            ],
            function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
            number: {
                pattern: RegExp(/(^|[^\w$])/.source + '(?:' + /NaN|Infinity/.source + '|' + /0[bB][01]+(?:_[01]+)*n?/.source + '|' + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + /\d+(?:_\d+)*n/.source + '|' + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ')' + /(?![\w$])/.source),
                lookbehind: !0
            },
            operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
        }), g.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, g.languages.insertBefore('javascript', 'keyword', {
            regex: {
                pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    'regex-source': {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: 'language-regex',
                        inside: g.languages.regex
                    },
                    'regex-delimiter': /^\/|\/$/,
                    'regex-flags': /^[a-z]+$/
                }
            },
            'function-variable': {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                alias: 'function'
            },
            parameter: [{
                    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: !0,
                    inside: g.languages.javascript
                },
                {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: g.languages.javascript
                },
                {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: g.languages.javascript
                },
                {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: g.languages.javascript
                }
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), g.languages.insertBefore('javascript', 'string', {
            hashbang: {
                pattern: /^#!.*/,
                greedy: !0,
                alias: 'comment'
            },
            'template-string': {
                pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                greedy: !0,
                inside: {
                    'template-punctuation': {
                        pattern: /^`|`$/,
                        alias: 'string'
                    },
                    interpolation: {
                        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                        lookbehind: !0,
                        inside: {
                            'interpolation-punctuation': {
                                pattern: /^\$\{|\}$/,
                                alias: 'punctuation'
                            },
                            rest: g.languages.javascript
                        }
                    },
                    string: /[\s\S]+/
                }
            },
            'string-property': {
                pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                lookbehind: !0,
                greedy: !0,
                alias: 'property'
            }
        }), g.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
                pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                lookbehind: !0,
                alias: 'property'
            }
        }), g.languages.markup && (g.languages.markup.tag.addInlined('script', 'javascript'), g.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript')), g.languages.js = g.languages.javascript,
        function() {
            if (void 0 !== g && 'undefined' != typeof document) {
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
                var h = {
                        js: 'javascript',
                        py: 'python',
                        rb: 'ruby',
                        ps1: 'powershell',
                        psm1: 'powershell',
                        sh: 'bash',
                        bat: 'batch',
                        h: 'c',
                        tex: 'latex'
                    },
                    i = 'data-src-status',
                    j = 'loading',
                    k = 'loaded',
                    l = 'pre[data-src]:not([' + i + '="' + k + '"]):not([' + i + '="' + j + '"])';
                g.hooks.add('before-highlightall', function(m) {
                    m.selector += ', ' + l;
                }), g.hooks.add('before-sanity-check', function(m) {
                    var n = m.element;
                    if (n.matches(l)) {
                        m.code = '', n.setAttribute(i, j);
                        var o = n.appendChild(document.createElement('CODE'));
                        o.textContent = 'Loading\u2026';
                        var p = n.getAttribute('data-src'),
                            q = m.language;
                        if ('none' === q) {
                            var r = (/\.(\w+)$/.exec(p) || [,
                                'none'
                            ])[1];
                            q = h[r] || r;
                        }
                        g.util.setLanguage(o, q), g.util.setLanguage(n, q);
                        var s = g.plugins.autoloader;
                        s && s.loadLanguages(q),
                            function(t, u, v) {
                                var w = new XMLHttpRequest();
                                w.open('GET', t, !0), w.onreadystatechange = function() {
                                    4 == w.readyState && (w.status < 400 && w.responseText ? u(w.responseText) : w.status >= 400 ? v('\u2716 Error ' + w.status + ' while fetching file: ' + w.statusText) : v('\u2716 Error: File does not exist or is empty'));
                                }, w.send(null);
                            }(p, function(t) {
                                n.setAttribute(i, k);
                                var u = function(v) {
                                    var w = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v || '');
                                    if (w) {
                                        var x = Number(w[1]),
                                            y = w[2],
                                            z = w[3];
                                        return y ? z ? [
                                            x,
                                            Number(z)
                                        ] : [
                                            x,
                                            void 0
                                        ] : [
                                            x,
                                            x
                                        ];
                                    }
                                }(n.getAttribute('data-range'));
                                if (u) {
                                    var v = t.split(/\r\n?|\n/g),
                                        w = u[0],
                                        x = null == u[1] ? v.length : u[1];
                                    w < 0 && (w += v.length), w = Math.max(0, Math.min(w - 1, v.length)), x < 0 && (x += v.length), x = Math.max(0, Math.min(x, v.length)), t = v.slice(w, x).join('\n'), n.hasAttribute('data-start') || n.setAttribute('data-start', String(w + 1));
                                }
                                o.textContent = t, g.highlightElement(o);
                            }, function(t) {
                                n.setAttribute(i, 'failed'), o.textContent = t;
                            });
                    }
                }), g.plugins.fileHighlight = {
                    highlight: function(m) {
                        for (var n, o = (m || document).querySelectorAll(l), p = 0; n = o[p++];)
                            g.highlightElement(n);
                    }
                };
                var m = !1;
                g.fileHighlight = function() {
                    m || (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'), m = !0), g.plugins.fileHighlight.highlight.apply(this, arguments);
                };
            }
        }();
}), d.register('.....', function(e, f) {
    ! function(g) {
        var h = g.util.clone(g.languages.javascript),
            i = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            j = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            k = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

        function l(m, n) {
            return m = m.replace(/<S>/g, function() {
                return i;
            }).replace(/<BRACES>/g, function() {
                return j;
            }).replace(/<SPREAD>/g, function() {
                return k;
            }), RegExp(m, n);
        }
        k = l(k).source, g.languages.jsx = g.languages.extend('markup', h), g.languages.jsx.tag.pattern = l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), g.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, g.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, g.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, g.languages.jsx.tag.inside.comment = h.comment, g.languages.insertBefore('inside', 'attr-name', {
            spread: {
                pattern: l(/<SPREAD>/.source),
                inside: g.languages.jsx
            }
        }, g.languages.jsx.tag), g.languages.insertBefore('inside', 'special-attr', {
            script: {
                pattern: l(/=<BRACES>/.source),
                alias: 'language-javascript',
                inside: {
                    'script-punctuation': {
                        pattern: /^=(?=\{)/,
                        alias: 'punctuation'
                    },
                    rest: g.languages.jsx
                }
            }
        }, g.languages.jsx.tag);
        var m = function(n) {
                return n ? 'string' == typeof n ? n : 'string' == typeof n.content ? n.content : n.content.map(m).join('') : '';
            },
            n = function(o) {
                for (var p = [], q = 0; q < o.length; q++) {
                    var r = o[q],
                        s = !1;
                    if ('string' != typeof r && ('tag' === r.type && r.content[0] && 'tag' === r.content[0].type ? '</' === r.content[0].content[0].content ? p.length > 0 && p[p.length - 1].tagName === m(r.content[0].content[1]) && p.pop() : '/>' === r.content[r.content.length - 1].content || p.push({
                            tagName: m(r.content[0].content[1]),
                            openedBraces: 0
                        }) : p.length > 0 && 'punctuation' === r.type && '{' === r.content ? p[p.length - 1].openedBraces++ : p.length > 0 && p[p.length - 1].openedBraces > 0 && 'punctuation' === r.type && '}' === r.content ? p[p.length - 1].openedBraces-- : s = !0), (s || 'string' == typeof r) && p.length > 0 && 0 === p[p.length - 1].openedBraces) {
                        var t = m(r);
                        q < o.length - 1 && ('string' == typeof o[q + 1] || 'plain-text' === o[q + 1].type) && (t += m(o[q + 1]), o.splice(q + 1, 1)), q > 0 && ('string' == typeof o[q - 1] || 'plain-text' === o[q - 1].type) && (t = m(o[q - 1]) + t, o.splice(q - 1, 1), q--), o[q] = new g.Token('plain-text', t, null, t);
                    }
                    r.content && 'string' != typeof r.content && n(r.content);
                }
            };
        g.hooks.add('after-tokenize', function(o) {
            'jsx' !== o.language && 'tsx' !== o.language || n(o.tokens);
        });
    }(Prism);
});