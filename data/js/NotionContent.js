function a(a, b, c, d) {
    Object.defineProperty(a, b, {
        get: c,
        set: d,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    d = c.parcelRequire388b;
d.register('NBVgF', function(b, c) {
    var e;
    e = b.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return m;
    });
    var f = d('8kSQZ'),
        g = d('uPP4W'),
        h = d('VAluA'),
        i = d('PjB0f'),
        j = d('h99Nu'),
        k = d('+98NM');
    let l;
    var m = a => {
        const [n, o] = g.useState();
        g.useEffect(() => {
            a.content || a.id && (0, i.request)({
                url: `/api/content/${ a.id }`,
                cacheKey: 'NOTION_CONTENT',
                success: a => o(a)
            });
        }, [
            a.id,
            a.content
        ]);
        const p = a.content || n;
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)('base', {
                    target: '_blank'
                }),
                (0, f.jsx)(n, {
                    children: p ? (0, f.jsx)(h.NotionRenderer, {
                        blockMap: p
                    }) : a.hideSkeleton ? null : (0, f.jsx)(k.default, {
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
    const n = j.default.div.attrs({
        className: 'maxWidth'
    })(l || (l = (a => a)``));
}), d.register('VAluA', function(c, l) {
    a(c.exports, 'NotionRenderer', function() {
        return x;
    });
    var e = d('uPP4W'),
        f = d('2ong/');
    d('dAxh5');
    var g = [
            'video',
            'image',
            'embed',
            'figma'
        ],
        h = function(a) {
            var i = a.block,
                j = a.mapImageUrl,
                k = i.value,
                l = i.value.type;
            if (!g.includes(l))
                return null;
            var m = k.format,
                n = null != m ? m : {},
                o = n.display_source,
                p = void 0 === o ? void 0 : o,
                q = n.block_aspect_ratio,
                r = void 0 === q ? void 0 : q,
                s = n.block_height,
                t = void 0 === s ? 1 : s,
                u = n.block_width,
                v = r || t / (void 0 === u ? 1 : u);
            if ('embed' === l || 'video' === l || 'figma' === l)
                return (0, e.createElement)('div', {
                    style: {
                        paddingBottom: 100 * v + '%',
                        position: 'relative'
                    }
                }, (0, e.createElement)('iframe', {
                    className: 'notion-image-inset',
                    src: 'figma' === l ? k.properties.source[0][0] : p
                }));
            if ('image' === i.value.type) {
                var w, x = j(k.properties.source[0][0], i),
                    y = null === (w = k.properties.caption) || void 0 === w ? void 0 : w[0][0];
                return r ? (0, e.createElement)('div', {
                    style: {
                        paddingBottom: 100 * v + '%',
                        position: 'relative'
                    }
                }, (0, e.createElement)('img', {
                    className: 'notion-image-inset',
                    alt: y || 'notion image',
                    src: x
                })) : (0, e.createElement)('img', {
                    alt: y,
                    src: x
                });
            }
            return null;
        },
        i = function(a) {
            var j = a.code,
                k = a.language,
                l = void 0 === k ? 'javascript' : k,
                m = l.toLowerCase(),
                n = f.languages[m] || f.languages.javascript,
                o = 'language-' + l.toLowerCase();
            return (0, e.createElement)('pre', {
                className: 'notion-code ' + o
            }, (0, e.createElement)('code', {
                className: o,
                dangerouslySetInnerHTML: {
                    __html: (0, f.highlight)(j, n, l)
                }
            }));
        },
        j = function() {
            for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                l[m] = arguments[m];
            return l.filter(function(k) {
                return !!k;
            }).join(' ');
        },
        k = function(a) {
            return a.reduce(function(a, b) {
                return a + b[0];
            }, '');
        },
        l = function(a, b) {
            var m = function(a) {
                    var n = [],
                        o = void 0,
                        p = -1;
                    return Object.keys(a).forEach(function(s) {
                        var q;
                        null === (q = a[s].value.content) || void 0 === q || q.forEach(function(s) {
                            var r, s, t = null === (r = a[s]) || void 0 === r || null === (s = r.value) || void 0 === s ? void 0 : s.type;
                            t && t !== o && (p++, o = t, n[p] = []), n[p].push(s);
                        }), o = void 0;
                    }), n;
                }(b),
                n = m.find(function(b) {
                    return b.includes(a);
                });
            if (n)
                return n.indexOf(a) + 1;
        },
        m = function(a, b) {
            void 0 === a && (a = '');
            var n = new URL('https://www.notion.so' + (a.startsWith('/image') ? a : '/image/' + encodeURIComponent(a)));
            if (b && !a.includes('/images/page-cover/')) {
                var o = 'space' === b.value.parent_table ? 'block' : b.value.parent_table;
                n.searchParams.set('table', o), n.searchParams.set('id', b.value.id), n.searchParams.set('cache', 'v2');
            }
            return n.toString();
        },
        n = function(a) {
            return void 0 === a && (a = ''), '/' + (a = a.replace(/-/g, ''));
        },
        o = function(a) {
            var p, q, r, s = a.block,
                t = a.className,
                u = a.big,
                v = a.mapImageUrl;
            if ('page' !== (r = s.value).type && 'callout' !== r.type)
                return null;
            var w = null === (p = s.value.format) || void 0 === p ? void 0 : p.page_icon,
                x = null === (q = s.value.properties) || void 0 === q ? void 0 : q.title;
            if (null == w ? void 0 : w.includes('http')) {
                var y = v(w, s);
                return (0, e.createElement)('img', {
                    className: j(t, u ? 'notion-page-icon-cover' : 'notion-page-icon'),
                    src: y,
                    alt: x ? k(x) : 'Icon'
                });
            }
            return (0, e.createElement)('span', {
                className: j(t, 'notion-emoji', u ? 'notion-page-icon-cover' : 'notion-page-icon'),
                role: 'img',
                'aria-label': w
            }, w);
        },
        p = function(a) {
            var q = a.blockMap,
                r = a.mapPageUrl,
                s = a.mapImageUrl,
                t = Object.keys(q)[0];
            if (!t)
                return null;
            for (var u = [], v = w;;) {
                var x, y, z = q[v];
                if (!z || !z.value)
                    break;
                var A = null === (x = z.value.properties) || void 0 === x ? void 0 : x.title[0][0],
                    B = null === (y = z.value.format) || void 0 === y ? void 0 : y.page_icon;
                if (!A && !B)
                    break;
                u.push({
                    block: z,
                    active: v === w,
                    pageId: v,
                    title: A,
                    icon: B
                });
                var C = z.value.parent_id;
                if (!C)
                    break;
                v = C;
            }
            return u.reverse(), (0, e.createElement)('header', {
                className: 'notion-page-header'
            }, (0, e.createElement)('div', {
                className: 'notion-nav-breadcrumbs'
            }, u.map(function(a, q) {
                return (0, e.createElement)(e.Fragment, {
                    key: a.pageId
                }, (0, e.createElement)('a', {
                    className: 'notion-nav-breadcrumb ' + (a.active ? 'notion-nav-breadcrumb-active' : ''),
                    href: a.active ? void 0 : r(a.pageId)
                }, a.icon && (0, e.createElement)(o, {
                    className: 'notion-nav-icon',
                    block: a.block,
                    mapImageUrl: s
                }), a.title && (0, e.createElement)('span', {
                    className: 'notion-nav-title'
                }, a.title)), q < u.length - 1 && (0, e.createElement)('span', {
                    className: 'notion-nav-spacer'
                }, '/'));
            })));
        },
        q = function(a) {
            var r = a.block,
                s = a.children,
                t = a.level,
                u = a.fullPage,
                v = a.hideHeader,
                w = a.blockMap,
                x = a.mapPageUrl,
                y = a.mapImageUrl,
                z = a.customBlockComponents,
                A = a.customDecoratorComponents,
                B = null == r ? void 0 : r.value,
                C = function() {
                    var D, E, F, G, H, I, J, K, L, M, N, O = function(D) {
                        return function(r) {
                            return null == r ? void 0 : r.map(function(r, s) {
                                var P = r[0],
                                    Q = r[1];
                                return Q ? Q.reduceRight(function(r, Q) {
                                    var R = function() {
                                            switch (Q[0]) {
                                                case 'h':
                                                    return (0, e.createElement)('span', {
                                                        key: s,
                                                        className: 'notion-' + Q[1]
                                                    }, r);
                                                case 'c':
                                                    return (0, e.createElement)('code', {
                                                        key: s,
                                                        className: 'notion-inline-code'
                                                    }, r);
                                                case 'b':
                                                    return (0, e.createElement)('b', {
                                                        key: s
                                                    }, r);
                                                case 'i':
                                                    return (0, e.createElement)('em', {
                                                        key: s
                                                    }, r);
                                                case 's':
                                                    return (0, e.createElement)('s', {
                                                        key: s
                                                    }, r);
                                                case 'a':
                                                    return (0, e.createElement)('a', {
                                                        className: 'notion-link',
                                                        href: Q[1],
                                                        key: s
                                                    }, r);
                                                default:
                                                    return (0, e.createElement)(e.Fragment, {
                                                        key: s
                                                    }, r);
                                            }
                                        },
                                        S = null == D ? void 0 : D[Q[0]];
                                    if (S) {
                                        var T = Q[1] ? {
                                            decoratorValue: Q[1]
                                        } : {};
                                        return (0, e.createElement)(S, Object.assign({
                                            key: s
                                        }, T, {
                                            renderComponent: R
                                        }), P);
                                    }
                                    return R();
                                }, (0, e.createElement)(e.Fragment, null, P)) : (0, e.createElement)(e.Fragment, {
                                    key: s
                                }, P);
                            });
                        };
                    }(A);
                    switch (null == B ? void 0 : B.type) {
                        case 'page':
                            if (0 === t) {
                                if (u) {
                                    if (!B.properties)
                                        return null;
                                    var P = B.format || {},
                                        Q = P.page_icon,
                                        R = P.page_cover,
                                        S = P.page_cover_position,
                                        T = P.page_full_width,
                                        U = P.page_small_text,
                                        V = 100 * (1 - (S || 0.5));
                                    return (0, e.createElement)('div', {
                                        className: 'notion'
                                    }, !v && (0, e.createElement)(p, {
                                        blockMap: w,
                                        mapPageUrl: x,
                                        mapImageUrl: y
                                    }), R && (0, e.createElement)('img', {
                                        src: y(R, r),
                                        alt: k(B.properties.title),
                                        className: 'notion-page-cover',
                                        style: {
                                            objectPosition: 'center ' + V + '%'
                                        }
                                    }), (0, e.createElement)('main', {
                                        className: j('notion-page', !R && 'notion-page-offset', T && 'notion-full-width', U && 'notion-small-text')
                                    }, Q && (0, e.createElement)(o, {
                                        className: R ? 'notion-page-icon-offset' : void 0,
                                        block: r,
                                        big: !0,
                                        mapImageUrl: y
                                    }), (0, e.createElement)('div', {
                                        className: 'notion-title'
                                    }, O(B.properties.title)), s));
                                }
                                return (0, e.createElement)('main', {
                                    className: 'notion'
                                }, s);
                            }
                            return B.properties ? (0, e.createElement)('a', {
                                className: 'notion-page-link',
                                href: x(B.id)
                            }, B.format && (0, e.createElement)('div', {
                                className: 'notion-page-icon'
                            }, (0, e.createElement)(o, {
                                block: r,
                                mapImageUrl: y
                            })), (0, e.createElement)('div', {
                                className: 'notion-page-text'
                            }, O(B.properties.title))) : null;
                        case 'header':
                            return B.properties ? (0, e.createElement)('h1', {
                                className: 'notion-h1'
                            }, O(B.properties.title)) : null;
                        case 'sub_header':
                            return B.properties ? (0, e.createElement)('h2', {
                                className: 'notion-h2'
                            }, O(B.properties.title)) : null;
                        case 'sub_sub_header':
                            return B.properties ? (0, e.createElement)('h3', {
                                className: 'notion-h3'
                            }, O(B.properties.title)) : null;
                        case 'divider':
                            return (0, e.createElement)('hr', {
                                className: 'notion-hr'
                            });
                        case 'text':
                            if (!B.properties)
                                return (0, e.createElement)('div', {
                                    className: 'notion-blank'
                                }, '\xA0');
                            var P = null === (D = B.format) || void 0 === D ? void 0 : D.block_color;
                            return (0, e.createElement)('p', {
                                className: j('notion-text', P && 'notion-' + P)
                            }, O(B.properties.title));
                        case 'bulleted_list':
                        case 'numbered_list':
                            var Q = function(D, r) {
                                    return 'bulleted_list' === B.type ? (0, e.createElement)('ul', {
                                        className: 'notion-list notion-list-disc'
                                    }, D) : (0, e.createElement)('ol', {
                                        start: r,
                                        className: 'notion-list notion-list-numbered'
                                    }, D);
                                },
                                R = null;
                            R = B.content ? (0, e.createElement)(e.Fragment, null, B.properties && (0, e.createElement)('li', null, O(B.properties.title)), Q(s)) : B.properties ? (0, e.createElement)('li', null, O(B.properties.title)) : null;
                            var S = r.value.type !== w[r.value.parent_id].value.type,
                                T = l(B.id, w);
                            return S ? Q(R, T) : R;
                        case 'image':
                        case 'embed':
                        case 'figma':
                        case 'video':
                            var U = r.value;
                            return (0, e.createElement)('figure', {
                                className: 'notion-asset-wrapper',
                                style: void 0 !== U.format ? {
                                    width: U.format.block_width
                                } : void 0
                            }, (0, e.createElement)(h, {
                                block: r,
                                mapImageUrl: y
                            }), U.properties.caption && (0, e.createElement)('figcaption', {
                                className: 'notion-image-caption'
                            }, O(U.properties.caption)));
                        case 'code':
                            if (B.properties.title) {
                                var V = B.properties.title[0][0],
                                    W = B.properties.language[0][0];
                                return (0, e.createElement)(i, {
                                    key: B.id,
                                    language: W || '',
                                    code: V
                                });
                            }
                            break;
                        case 'column_list':
                            return (0, e.createElement)('div', {
                                className: 'notion-row'
                            }, s);
                        case 'column':
                            var V = B.format.column_ratio,
                                W = 'calc((100% - ' + 46 * (Number((1 / V).toFixed(0)) - 1) + 'px) * ' + V + ')';
                            return (0, e.createElement)(e.Fragment, null, (0, e.createElement)('div', {
                                className: 'notion-column',
                                style: {
                                    width: W
                                }
                            }, s), (0, e.createElement)('div', {
                                className: 'notion-spacer',
                                style: {
                                    width: 46
                                }
                            }));
                        case 'quote':
                            return B.properties ? (0, e.createElement)('blockquote', {
                                className: 'notion-quote'
                            }, O(B.properties.title)) : null;
                        case 'collection_view':
                            if (!r)
                                return null;
                            var X = null == r || null === (E = r.collection) || void 0 === E ? void 0 : E.types[0];
                            return (0, e.createElement)('div', null, (0, e.createElement)('h3', {
                                className: 'notion-h3'
                            }, O(null === (F = r.collection) || void 0 === F ? void 0 : F.title)), 'table' === (null == X ? void 0 : X.type) && (0, e.createElement)('div', {
                                style: {
                                    maxWidth: '100%',
                                    marginTop: 5
                                }
                            }, (0, e.createElement)('table', {
                                className: 'notion-table'
                            }, (0, e.createElement)('thead', null, (0, e.createElement)('tr', {
                                className: 'notion-tr'
                            }, null === (G = X.format) || void 0 === G || null === (H = G.table_properties) || void 0 === H ? void 0 : H.filter(function(D) {
                                return D.visible;
                            }).map(function(D, s) {
                                var Y, Z;
                                return (0, e.createElement)('th', {
                                    className: 'notion-th',
                                    key: s,
                                    style: {
                                        minWidth: D.width
                                    }
                                }, null === (Y = r.collection) || void 0 === Y || null === (Z = Y.schema[D.property]) || void 0 === Z ? void 0 : Z.name);
                            }))), (0, e.createElement)('tbody', null, null == r || null === (I = r.collection) || void 0 === I ? void 0 : I.data.map(function(D, s) {
                                var Y, Z;
                                return (0, e.createElement)('tr', {
                                    className: 'notion-tr',
                                    key: s
                                }, null === (Y = X.format) || void 0 === Y || null === (Z = Y.table_properties) || void 0 === Z ? void 0 : Z.filter(function(D) {
                                    return D.visible;
                                }).map(function(s, Y) {
                                    var $, _;
                                    return (0, e.createElement)('td', {
                                        key: Y,
                                        className: 'notion-td ' + ('title' === s.property ? 'notion-bold' : '')
                                    }, O(D[null === ($ = r.collection) || void 0 === $ || null === (_ = $.schema[s.property]) || void 0 === _ ? void 0 : _.name]));
                                }));
                            })))), 'gallery' === (null == X ? void 0 : X.type) && (0, e.createElement)('div', {
                                className: 'notion-gallery'
                            }, null === (J = r.collection) || void 0 === J ? void 0 : J.data.map(function(D, s) {
                                var Y, Z;
                                return (0, e.createElement)('div', {
                                    key: 'col-' + s,
                                    className: 'notion-gallery-card'
                                }, (0, e.createElement)('div', {
                                    className: 'notion-gallery-content'
                                }, null === (Y = X.format) || void 0 === Y || null === (Z = Y.gallery_properties) || void 0 === Z ? void 0 : Z.filter(function(D) {
                                    return D.visible;
                                }).map(function(s, Y) {
                                    var $;
                                    return (0, e.createElement)('p', {
                                        key: Y + 'item',
                                        className: 'notion-gallery-data ' + (0 === Y ? 'is-first' : '')
                                    }, k(D[null === ($ = r.collection) || void 0 === $ ? void 0 : $.schema[s.property].name]));
                                })));
                            })));
                        case 'callout':
                            return (0, e.createElement)('div', {
                                className: j('notion-callout', B.format.block_color && 'notion-' + B.format.block_color, B.format.block_color && 'notion-' + B.format.block_color + '_co')
                            }, (0, e.createElement)('div', null, (0, e.createElement)(o, {
                                block: r,
                                mapImageUrl: y
                            })), (0, e.createElement)('div', {
                                className: 'notion-callout-text'
                            }, O(B.properties.title)));
                        case 'bookmark':
                            var Y = B.properties.link,
                                Z = null !== (K = B.properties.title) && void 0 !== K ? K : Y,
                                $ = B.properties.description,
                                _ = null === (L = B.format) || void 0 === L ? void 0 : L.block_color,
                                ab = null === (M = B.format) || void 0 === M ? void 0 : M.bookmark_icon,
                                bb = null === (N = B.format) || void 0 === N ? void 0 : N.bookmark_cover;
                            return (0, e.createElement)('div', {
                                className: 'notion-row'
                            }, (0, e.createElement)('a', {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: j('notion-bookmark', _ && 'notion-' + _),
                                href: Y[0][0]
                            }, (0, e.createElement)('div', null, (0, e.createElement)('div', {
                                className: 'notion-bookmark-title'
                            }, O(Z)), $ && (0, e.createElement)('div', {
                                className: 'notion-bookmark-description'
                            }, O($)), (0, e.createElement)('div', {
                                className: 'notion-bookmark-link'
                            }, ab && (0, e.createElement)('img', {
                                src: ab,
                                alt: k(Z)
                            }), (0, e.createElement)('div', null, O(Y)))), bb && (0, e.createElement)('div', {
                                className: 'notion-bookmark-image'
                            }, (0, e.createElement)('img', {
                                src: bb,
                                alt: k(Z)
                            }))));
                        case 'toggle':
                            return (0, e.createElement)('details', {
                                className: 'notion-toggle'
                            }, (0, e.createElement)('summary', null, O(B.properties.title)), (0, e.createElement)('div', null, s));
                        default:
                            return (0, e.createElement)('div', null);
                    }
                    return null;
                };
            if (E && E[null == B ? void 0 : B.type] && 0 !== t) {
                var P = E[null == B ? void 0 : B.type];
                return (0, e.createElement)(P, {
                    renderComponent: F,
                    blockMap: w,
                    blockValue: B,
                    level: t
                }, s);
            }
            return C();
        },
        r = function a(c) {
            var s, t, u = c.level,
                v = void 0 === u ? 0 : u,
                w = c.currentId,
                x = c.mapPageUrl,
                y = void 0 === x ? n : x,
                z = c.mapImageUrl,
                A = void 0 === z ? m : z,
                B = function(a, b) {
                    if (null == a)
                        return {};
                    var C, D, E = {},
                        F = Object.keys(a);
                    for (D = 0; D < F.length; D++)
                        C = F[D], b.indexOf(C) >= 0 || (E[C] = a[C]);
                    return E;
                }(c, [
                    'level',
                    'currentId',
                    'mapPageUrl',
                    'mapImageUrl'
                ]),
                C = B.blockMap,
                D = w || Object.keys(C)[0],
                E = C[D];
            return E ? b(e).createElement(q, Object.assign({
                key: D,
                level: v,
                block: E,
                mapPageUrl: y,
                mapImageUrl: A
            }, B), null == E || null === (s = E.value) || void 0 === s || null === (t = s.content) || void 0 === t ? void 0 : t.map(function(c) {
                return b(e).createElement(a, Object.assign({
                    key: c,
                    currentId: c,
                    level: v + 1,
                    mapPageUrl: y,
                    mapImageUrl: A
                }, B));
            })) : null;
        };
}), d.register('2ong/', function(a, b) {
    var e = function(a) {
        var f = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            g = 0,
            h = {},
            i = {
                manual: a.Prism && a.Prism.manual,
                disableWorkerMessageHandler: a.Prism && a.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function a(f) {
                        return f instanceof k ? new k(f.type, a(f.content), f.alias) : Array.isArray(f) ? f.map(a) : f.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    },
                    type: function(a) {
                        return Object.prototype.toString.call(a).slice(8, -1);
                    },
                    objId: function(a) {
                        return a.__id || Object.defineProperty(a, '__id', {
                            value: ++g
                        }), a.__id;
                    },
                    clone: function a(f, g) {
                        var j, k;
                        switch (g = g || {}, i.util.type(f)) {
                            case 'Object':
                                if (k = i.util.objId(f), g[k])
                                    return g[k];
                                for (var l in (j = {}, g[k] = j, f))
                                    f.hasOwnProperty(l) && (j[l] = a(f[l], g));
                                return j;
                            case 'Array':
                                return k = i.util.objId(f), g[k] ? g[k] : (j = [], g[k] = j, f.forEach(function(f, i) {
                                    j[i] = a(f, g);
                                }), j);
                            default:
                                return f;
                        }
                    },
                    getLanguage: function(a) {
                        for (; a;) {
                            var j = f.exec(a.className);
                            if (j)
                                return j[1].toLowerCase();
                            a = a.parentElement;
                        }
                        return 'none';
                    },
                    setLanguage: function(a, g) {
                        a.className = a.className.replace(RegExp(f, 'gi'), ''), a.classList.add('language-' + g);
                    },
                    currentScript: function() {
                        if ('undefined' == typeof document)
                            return null;
                        if ('currentScript' in document)
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (h) {
                            var j = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack) || [])[1];
                            if (j) {
                                var k = document.getElementsByTagName('script');
                                for (var l in k)
                                    if (k[l].src == j)
                                        return k[l];
                            }
                            return null;
                        }
                    },
                    isActive: function(a, f, g) {
                        for (var j = 'no-' + f; a;) {
                            var k = a.classList;
                            if (k.contains(f))
                                return !0;
                            if (k.contains(j))
                                return !1;
                            a = a.parentElement;
                        }
                        return !!g;
                    }
                },
                languages: {
                    plain: h,
                    plaintext: h,
                    text: h,
                    txt: h,
                    extend: function(a, f) {
                        var j = i.util.clone(i.languages[a]);
                        for (var k in f)
                            j[k] = f[k];
                        return j;
                    },
                    insertBefore: function(a, f, g, h) {
                        var j = (h = h || i.languages)[a],
                            k = {};
                        for (var l in j)
                            if (j.hasOwnProperty(l)) {
                                if (l == f)
                                    for (var m in g)
                                        g.hasOwnProperty(m) && (k[m] = g[m]);
                                g.hasOwnProperty(l) || (k[l] = j[l]);
                            }
                        var m = h[a];
                        return h[a] = k, i.languages.DFS(i.languages, function(f, g) {
                            g === m && f != a && (this[f] = k);
                        }), k;
                    },
                    DFS: function a(f, g, h, k) {
                        k = k || {};
                        var j = i.util.objId;
                        for (var k in f)
                            if (f.hasOwnProperty(k)) {
                                g.call(f, k, f[k], h || k);
                                var l = f[k],
                                    m = i.util.type(l);
                                'Object' !== m || k[j(l)] ? 'Array' !== m || k[j(l)] || (k[j(l)] = !0, a(l, g, k, k)) : (k[j(l)] = !0, a(l, g, null, k));
                            }
                    }
                },
                plugins: {},
                highlightAll: function(a, f) {
                    i.highlightAllUnder(document, a, f);
                },
                highlightAllUnder: function(a, f, g) {
                    var j = {
                        callback: g,
                        container: a,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    i.hooks.run('before-highlightall', j), j.elements = Array.prototype.slice.apply(j.container.querySelectorAll(j.selector)), i.hooks.run('before-all-elements-highlight', j);
                    for (var k, l = 0; k = j.elements[l++];)
                        i.highlightElement(k, !0 === f, j.callback);
                },
                highlightElement: function(f, g, h) {
                    var j = i.util.getLanguage(f),
                        k = i.languages[j];
                    i.util.setLanguage(f, j);
                    var l = f.parentElement;
                    l && 'pre' === l.nodeName.toLowerCase() && i.util.setLanguage(l, j);
                    var m = {
                        element: f,
                        language: j,
                        grammar: k,
                        code: f.textContent
                    };

                    function n(a) {
                        m.highlightedCode = a, i.hooks.run('before-insert', m), m.element.innerHTML = m.highlightedCode, i.hooks.run('after-highlight', m), i.hooks.run('complete', m), h && h.call(m.element);
                    }
                    if (i.hooks.run('before-sanity-check', m), (l = m.element.parentElement) && 'pre' === l.nodeName.toLowerCase() && !l.hasAttribute('tabindex') && l.setAttribute('tabindex', '0'), !m.code)
                        return i.hooks.run('complete', m), void(h && h.call(m.element));
                    if (i.hooks.run('before-highlight', m), m.grammar)
                        if (g && a.Worker) {
                            var o = new Worker(i.filename);
                            o.onmessage = function(a) {
                                n(a.data);
                            }, o.postMessage(JSON.stringify({
                                language: m.language,
                                code: m.code,
                                immediateClose: !0
                            }));
                        } else
                            n(i.highlight(m.code, m.grammar, m.language));
                    else
                        n(i.util.encode(m.code));
                },
                highlight: function(a, f, g) {
                    var j = {
                        code: a,
                        grammar: f,
                        language: g
                    };
                    if (i.hooks.run('before-tokenize', j), !j.grammar)
                        throw new Error('The language "' + j.language + '" has no grammar.');
                    return j.tokens = i.tokenize(j.code, j.grammar), i.hooks.run('after-tokenize', j), l.stringify(i.util.encode(j.tokens), j.language);
                },
                tokenize: function(a, f) {
                    var j = f.rest;
                    if (j) {
                        for (var k in j)
                            f[k] = j[k];
                        delete f.rest;
                    }
                    var k = new x();
                    return n(k, k.head, a), l(a, k, f, k.head, 0),
                        function(a) {
                            var l = [],
                                m = a.head.next;
                            for (; m !== a.tail;)
                                l.push(m.value), m = m.next;
                            return l;
                        }(k);
                },
                hooks: {
                    all: {},
                    add: function(a, f) {
                        var j = i.hooks.all;
                        j[a] = j[a] || [], j[a].push(f);
                    },
                    run: function(a, f) {
                        var j = i.hooks.all[a];
                        if (j && j.length)
                            for (var k, l = 0; k = j[l++];)
                                k(f);
                    }
                },
                Token: j
            };

        function j(a, f, g, h) {
            this.type = a, this.content = f, this.alias = g, this.length = 0 | (h || '').length;
        }

        function k(a, f, g, h) {
            a.lastIndex = f;
            var l = a.exec(g);
            if (l && h && l[1]) {
                var m = l[1].length;
                l.index += m, l[0] = l[0].slice(m);
            }
            return l;
        }

        function l(a, f, g, h, x, p) {
            for (var m in g)
                if (g.hasOwnProperty(m) && g[m]) {
                    var n = g[m];
                    n = Array.isArray(n) ? n : [n];
                    for (var o = 0; o < n.length; ++o) {
                        if (p && p.cause == m + ',' + o)
                            return;
                        var p = n[o],
                            q = p.inside,
                            r = !!p.lookbehind,
                            s = !!p.greedy,
                            t = p.alias;
                        if (s && !p.pattern.global) {
                            var u = p.pattern.toString().match(/[imsuy]*$/)[0];
                            p.pattern = RegExp(p.pattern.source, u + 'g');
                        }
                        for (var u = p.pattern || p, v = h.next, w = x; v !== f.tail && !(p && w >= p.reach); w += v.value.length, v = v.next) {
                            var y = v.value;
                            if (f.length > a.length)
                                return;
                            if (!(y instanceof j)) {
                                var z, A = 1;
                                if (s) {
                                    if (!(z = k(u, w, a, r)) || z.index >= a.length)
                                        break;
                                    var B = z.index,
                                        C = z.index + z[0].length,
                                        D = E;
                                    for (D += v.value.length; B >= D;)
                                        D += (v = v.next).value.length;
                                    if (E = D -= v.value.length, v.value instanceof j)
                                        continue;
                                    for (var F = G; F !== f.tail && (D < C || 'string' == typeof F.value); F = F.next)
                                        A++, D += F.value.length;
                                    A--, y = a.slice(E, D), z.index -= E;
                                } else if (!(z = k(u, 0, y, r)))
                                    continue;
                                _ = z.index;
                                var B = z[0],
                                    C = y.slice(0, _),
                                    D = y.slice(_ + B.length),
                                    E = w + y.length;
                                p && E > p.reach && (p.reach = E);
                                var F = v.prev;
                                if (C && (F = n(f, F, C), w += C.length), o(f, F, A), v = n(f, F, new j(m, q ? i.tokenize(B, q) : B, t, B)), D && n(f, v, D), A > 1) {
                                    var G = {
                                        cause: m + ',' + o,
                                        reach: E
                                    };
                                    l(a, f, g, v.prev, w, G), p && G.reach > p.reach && (p.reach = G.reach);
                                }
                            }
                        }
                    }
                }
        }

        function m() {
            var n = {
                    value: null,
                    prev: null,
                    next: null
                },
                o = {
                    value: null,
                    prev: n,
                    next: null
                };
            n.next = o, this.head = n, this.tail = o, this.length = 0;
        }

        function n(a, f, g) {
            var o = f.next,
                p = {
                    value: g,
                    prev: f,
                    next: o
                };
            return f.next = p, o.prev = p, a.length++, p;
        }

        function o(a, f, g) {
            for (var p = f.next, q = 0; q < g && p !== a.tail; q++)
                p = p.next;
            f.next = p, p.prev = f, a.length -= q;
        }
        if (a.Prism = q, j.stringify = function a(f, g) {
                if ('string' == typeof f)
                    return f;
                if (Array.isArray(f)) {
                    var r = '';
                    return f.forEach(function(f) {
                        r += a(f, g);
                    }), r;
                }
                var r = {
                        type: f.type,
                        content: a(f.content, g),
                        tag: 'span',
                        classes: [
                            'token',
                            f.type
                        ],
                        attributes: {},
                        language: g
                    },
                    s = f.alias;
                s && (Array.isArray(s) ? Array.prototype.push.apply(r.classes, s) : r.classes.push(s)), q.hooks.run('wrap', r);
                var t = '';
                for (var u in r.attributes)
                    t += ' ' + u + '="' + (r.attributes[u] || '').replace(/"/g, '&quot;') + '"';
                return '<' + r.tag + ' class="' + r.classes.join(' ') + '"' + t + '>' + r.content + '</' + r.tag + '>';
            }, !a.document)
            return a.addEventListener ? (q.disableWorkerMessageHandler || a.addEventListener('message', function(f) {
                var r = JSON.parse(f.data),
                    s = r.language,
                    t = r.code,
                    u = r.immediateClose;
                a.postMessage(q.highlight(t, q.languages[s], s)), u && a.close();
            }, !1), q) : q;
        var p = i.util.currentScript();

        function q() {
            i.manual || i.highlightAll();
        }
        if (p && (i.filename = p.src, p.hasAttribute('data-manual') && (i.manual = !0)), !i.manual) {
            var r = document.readyState;
            'loading' === r || 'interactive' === r && p && p.defer ? document.addEventListener('DOMContentLoaded', q) : window.requestAnimationFrame ? window.requestAnimationFrame(q) : window.setTimeout(q, 16);
        }
        return i;
    }('undefined' != typeof window ? window : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
    a.exports && (a.exports = e), void 0 !== c && (c.Prism = e), e.languages.markup = {
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
        }, e.languages.markup.tag.inside['attr-value'].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside['internal-subset'].inside = e.languages.markup, e.hooks.add('wrap', function(a) {
            'entity' === a.type && (a.attributes.title = a.content.replace(/&amp;/, '&'));
        }), Object.defineProperty(e.languages.markup.tag, 'addInlined', {
            value: function(a, b) {
                var f = {};
                f['language-' + b] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: e.languages[b]
                }, f.cdata = /^<!\[CDATA\[|\]\]>$/i;
                var g = {
                    'included-cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: f
                    }
                };
                g['language-' + b] = {
                    pattern: /[\s\S]+/,
                    inside: e.languages[b]
                };
                var h = {};
                h[a] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                        return a;
                    }), 'i'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: g
                }, e.languages.insertBefore('markup', 'cdata', h);
            }
        }), Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
            value: function(a, b) {
                e.languages.markup.tag.inside['special-attr'].push({
                    pattern: RegExp(/(^|["'\s])/.source + '(?:' + a + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
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
                                        b,
                                        'language-' + b
                                    ],
                                    inside: e.languages[b]
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
        }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend('markup', {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml,
        function(a) {
            var f = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            a.languages.css = {
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
                    pattern: RegExp('\\burl\\((?:' + f.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp('^' + f.source + '$'),
                            alias: 'url'
                        }
                    }
                },
                selector: {
                    pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + f.source + ')*(?=\\s*\\{)'),
                    lookbehind: !0
                },
                string: {
                    pattern: f,
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
            }, a.languages.css.atrule.inside.rest = a.languages.css;
            var g = a.languages.markup;
            g && (g.tag.addInlined('style', 'css'), g.tag.addAttribute('style', 'css'));
        }(e), e.languages.clike = {
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
        }, e.languages.javascript = e.languages.extend('clike', {
            'class-name': [
                e.languages.clike['class-name'],
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
        }), e.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore('javascript', 'keyword', {
            regex: {
                pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                    'regex-source': {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: 'language-regex',
                        inside: e.languages.regex
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
                    inside: e.languages.javascript
                },
                {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: e.languages.javascript
                },
                {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: e.languages.javascript
                },
                {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), e.languages.insertBefore('javascript', 'string', {
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
                            rest: e.languages.javascript
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
        }), e.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
                pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                lookbehind: !0,
                alias: 'property'
            }
        }), e.languages.markup && (e.languages.markup.tag.addInlined('script', 'javascript'), e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript')), e.languages.js = e.languages.javascript,
        function() {
            if (void 0 !== e && 'undefined' != typeof document) {
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
                var f = {
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
                    g = 'data-src-status',
                    h = 'loading',
                    i = 'loaded',
                    j = 'pre[data-src]:not([' + g + '="' + i + '"]):not([' + g + '="' + h + '"])';
                e.hooks.add('before-highlightall', function(f) {
                    f.selector += ', ' + j;
                }), e.hooks.add('before-sanity-check', function(r) {
                    var k = r.element;
                    if (k.matches(j)) {
                        r.code = '', k.setAttribute(g, h);
                        var l = k.appendChild(document.createElement('CODE'));
                        l.textContent = 'Loading\u2026';
                        var m = k.getAttribute('data-src'),
                            n = r.language;
                        if ('none' === n) {
                            var o = (/\.(\w+)$/.exec(m) || [,
                                'none'
                            ])[1];
                            n = f[o] || o;
                        }
                        e.util.setLanguage(l, n), e.util.setLanguage(k, n);
                        var o = e.plugins.autoloader;
                        o && o.loadLanguages(n),
                            function(f, g, h) {
                                var p = new XMLHttpRequest();
                                p.open('GET', f, !0), p.onreadystatechange = function() {
                                    4 == p.readyState && (p.status < 400 && p.responseText ? g(p.responseText) : p.status >= 400 ? h('\u2716 Error ' + p.status + ' while fetching file: ' + p.statusText) : h('\u2716 Error: File does not exist or is empty'));
                                }, p.send(null);
                            }(m, function(f) {
                                k.setAttribute(g, i);
                                var p = function(f) {
                                    var q = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f || '');
                                    if (q) {
                                        var r = Number(q[1]),
                                            s = q[2],
                                            t = q[3];
                                        return s ? t ? [
                                            r,
                                            Number(t)
                                        ] : [
                                            r,
                                            void 0
                                        ] : [
                                            r,
                                            r
                                        ];
                                    }
                                }(k.getAttribute('data-range'));
                                if (p) {
                                    var q = f.split(/\r\n?|\n/g),
                                        r = p[0],
                                        s = null == p[1] ? q.length : p[1];
                                    r < 0 && (r += q.length), r = Math.max(0, Math.min(r - 1, q.length)), s < 0 && (s += q.length), s = Math.max(0, Math.min(s, q.length)), f = q.slice(r, s).join('\n'), k.hasAttribute('data-start') || k.setAttribute('data-start', String(r + 1));
                                }
                                l.textContent = f, e.highlightElement(l);
                            }, function(f) {
                                k.setAttribute(g, 'failed'), l.textContent = f;
                            });
                    }
                }), e.plugins.fileHighlight = {
                    highlight: function(f) {
                        for (var k, l = (f || document).querySelectorAll(j), m = 0; k = l[m++];)
                            e.highlightElement(k);
                    }
                };
                var k = !1;
                e.fileHighlight = function() {
                    k || (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'), k = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
                };
            }
        }();
}), d.register('dAxh5', function(a, b) {
    ! function(a) {
        var e = a.util.clone(a.languages.javascript),
            f = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            g = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            h = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

        function i(a, e) {
            return a = a.replace(/<S>/g, function() {
                return f;
            }).replace(/<BRACES>/g, function() {
                return g;
            }).replace(/<SPREAD>/g, function() {
                return h;
            }), RegExp(a, e);
        }
        h = i(h).source, a.languages.jsx = a.languages.extend('markup', e), a.languages.jsx.tag.pattern = i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, a.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, a.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, a.languages.jsx.tag.inside.comment = e.comment, a.languages.insertBefore('inside', 'attr-name', {
            spread: {
                pattern: i(/<SPREAD>/.source),
                inside: a.languages.jsx
            }
        }, a.languages.jsx.tag), a.languages.insertBefore('inside', 'special-attr', {
            script: {
                pattern: i(/=<BRACES>/.source),
                alias: 'language-javascript',
                inside: {
                    'script-punctuation': {
                        pattern: /^=(?=\{)/,
                        alias: 'punctuation'
                    },
                    rest: a.languages.jsx
                }
            }
        }, a.languages.jsx.tag);
        var j = function(a) {
                return a ? 'string' == typeof a ? a : 'string' == typeof a.content ? a.content : a.content.map(j).join('') : '';
            },
            k = function(e) {
                for (var l = [], m = 0; m < e.length; m++) {
                    var n = e[m],
                        o = !1;
                    if ('string' != typeof n && ('tag' === n.type && n.content[0] && 'tag' === n.content[0].type ? '</' === n.content[0].content[0].content ? l.length > 0 && l[l.length - 1].tagName === j(n.content[0].content[1]) && l.pop() : '/>' === n.content[n.content.length - 1].content || l.push({
                            tagName: j(n.content[0].content[1]),
                            openedBraces: 0
                        }) : l.length > 0 && 'punctuation' === n.type && '{' === n.content ? l[l.length - 1].openedBraces++ : l.length > 0 && l[l.length - 1].openedBraces > 0 && 'punctuation' === n.type && '}' === n.content ? l[l.length - 1].openedBraces-- : o = !0), (o || 'string' == typeof n) && l.length > 0 && 0 === l[l.length - 1].openedBraces) {
                        var p = j(n);
                        m < e.length - 1 && ('string' == typeof e[m + 1] || 'plain-text' === e[m + 1].type) && (p += j(e[m + 1]), e.splice(m + 1, 1)), m > 0 && ('string' == typeof e[m - 1] || 'plain-text' === e[m - 1].type) && (p = j(e[m - 1]) + p, e.splice(m - 1, 1), m--), e[m] = new a.Token('plain-text', p, null, p);
                    }
                    n.content && 'string' != typeof n.content && k(n.content);
                }
            };
        a.hooks.add('after-tokenize', function(a) {
            'jsx' !== a.language && 'tsx' !== a.language || k(a.tokens);
        });
    }(Prism);
});