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
var a = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {},
    b = a.parcelRequire388b;
b.register('cg5Ud', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), _i(c.exports, 'default', function() {
        return _m;
    });
    var f = b('0hzx+'),
        g = b('LEQ5w'),
        h = b('a+9aS'),
        i = b('PMl60'),
        j = b('Axq+p'),
        k = b('oBBW6');
    let l;
    var _m = _i => {
        const [n, o] = g.useState();
        g.useEffect(() => {
            _i.content || _i.id && (0, i.request)({
                url: `/api/content/${ _i.id }`,
                cacheKey: 'NOTION_CONTENT',
                success: _i => o(_i)
            });
        }, [
            _i.id,
            _i.content
        ]);
        const p = _i.content || n;
        return (0, f.jsxs)('div', {
            className: 'maxWidth',
            children: [
                (0, f.jsx)('base', {
                    target: '_blank'
                }),
                (0, f.jsx)(_n, {
                    children: p ? (0, f.jsx)(h.NotionRenderer, {
                        blockMap: p
                    }) : _i.hideSkeleton ? null : (0, f.jsx)(k.default, {
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
    const _n = j.default.div.attrs({
        className: 'maxWidth'
    })(l || (l = (_i => _i)``));
}), b.register('a+9aS', function(c, d) {
    _i(c.exports, 'NotionRenderer', function() {
        return _y;
    });
    var e = b('LEQ5w'),
        f = b('qOVyd');
    b('P0lVW');
    var g = [
            'video',
            'image',
            'embed',
            'figma'
        ],
        h = function(_i) {
            var j = _i.block,
                k = _i.mapImageUrl,
                l = j.value,
                m = j.value.type;
            if (!g.includes(m))
                return null;
            var n = l.format,
                o = null != n ? n : {},
                p = o.display_source,
                q = void 0 === p ? void 0 : p,
                r = o.block_aspect_ratio,
                s = void 0 === r ? void 0 : r,
                t = o.block_height,
                u = void 0 === t ? 1 : t,
                v = o.block_width,
                w = s || u / (void 0 === v ? 1 : v);
            if ('embed' === m || 'video' === m || 'figma' === m)
                return (0, e.createElement)('div', {
                    style: {
                        paddingBottom: 100 * w + '%',
                        position: 'relative'
                    }
                }, (0, e.createElement)('iframe', {
                    className: 'notion-image-inset',
                    src: 'figma' === m ? l.properties.source[0][0] : q
                }));
            if ('image' === j.value.type) {
                var x, _y = k(l.properties.source[0][0], j),
                    z = null === (x = l.properties.caption) || void 0 === x ? void 0 : x[0][0];
                return s ? (0, e.createElement)('div', {
                    style: {
                        paddingBottom: 100 * w + '%',
                        position: 'relative'
                    }
                }, (0, e.createElement)('img', {
                    className: 'notion-image-inset',
                    alt: z || 'notion image',
                    src: _y
                })) : (0, e.createElement)('img', {
                    alt: z,
                    src: _y
                });
            }
            return null;
        },
        i = function(j) {
            var k = j.code,
                l = j.language,
                m = void 0 === l ? 'javascript' : l,
                n = m.toLowerCase(),
                o = f.languages[n] || f.languages.javascript,
                p = 'language-' + m.toLowerCase();
            return (0, e.createElement)('pre', {
                className: 'notion-code ' + p
            }, (0, e.createElement)('code', {
                className: p,
                dangerouslySetInnerHTML: {
                    __html: (0, f.highlight)(k, o, m)
                }
            }));
        },
        j = function() {
            for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                l[m] = arguments[m];
            return l.filter(function(n) {
                return !!n;
            }).join(' ');
        },
        k = function(l) {
            return l.reduce(function(m, n) {
                return m + n[0];
            }, '');
        },
        l = function(m, n) {
            var o = function(p) {
                    var q = [],
                        r = void 0,
                        s = -1;
                    return Object.keys(p).forEach(function(t) {
                        var u;
                        null === (u = p[t].value.content) || void 0 === u || u.forEach(function(v) {
                            var w, x, y = null === (w = p[v]) || void 0 === w || null === (x = w.value) || void 0 === x ? void 0 : x.type;
                            y && y !== r && (s++, r = y, q[s] = []), q[s].push(v);
                        }), r = void 0;
                    }), q;
                }(n),
                p = o.find(function(q) {
                    return q.includes(m);
                });
            if (p)
                return p.indexOf(m) + 1;
        },
        m = function(n, o) {
            void 0 === n && (n = '');
            var p = new URL('https://www.notion.so' + (n.startsWith('/image') ? n : '/image/' + encodeURIComponent(n)));
            if (o && !n.includes('/images/page-cover/')) {
                var q = 'space' === o.value.parent_table ? 'block' : o.value.parent_table;
                p.searchParams.set('table', q), p.searchParams.set('id', o.value.id), p.searchParams.set('cache', 'v2');
            }
            return p.toString();
        },
        n = function(o) {
            return void 0 === o && (o = ''), '/' + (o = o.replace(/-/g, ''));
        },
        o = function(p) {
            var q, r, s, t = p.block,
                u = p.className,
                v = p.big,
                w = p.mapImageUrl;
            if ('page' !== (s = t.value).type && 'callout' !== s.type)
                return null;
            var x = null === (q = t.value.format) || void 0 === q ? void 0 : q.page_icon,
                y = null === (r = t.value.properties) || void 0 === r ? void 0 : r.title;
            if (null == x ? void 0 : x.includes('http')) {
                var z = w(x, t);
                return (0, e.createElement)('img', {
                    className: j(u, v ? 'notion-page-icon-cover' : 'notion-page-icon'),
                    src: z,
                    alt: y ? k(y) : 'Icon'
                });
            }
            return (0, e.createElement)('span', {
                className: j(u, 'notion-emoji', v ? 'notion-page-icon-cover' : 'notion-page-icon'),
                role: 'img',
                'aria-label': x
            }, x);
        },
        p = function(q) {
            var r = q.blockMap,
                s = q.mapPageUrl,
                t = q.mapImageUrl,
                u = Object.keys(r)[0];
            if (!u)
                return null;
            for (var v = [], w = u;;) {
                var x, y, z = r[w];
                if (!z || !z.value)
                    break;
                var A = null === (x = z.value.properties) || void 0 === x ? void 0 : x.title[0][0],
                    B = null === (y = z.value.format) || void 0 === y ? void 0 : y.page_icon;
                if (!A && !B)
                    break;
                v.push({
                    block: z,
                    active: w === u,
                    pageId: w,
                    title: A,
                    icon: B
                });
                var C = z.value.parent_id;
                if (!C)
                    break;
                w = C;
            }
            return v.reverse(), (0, e.createElement)('header', {
                className: 'notion-page-header'
            }, (0, e.createElement)('div', {
                className: 'notion-nav-breadcrumbs'
            }, v.map(function(x, y) {
                return (0, e.createElement)(e.Fragment, {
                    key: x.pageId
                }, (0, e.createElement)('a', {
                    className: 'notion-nav-breadcrumb ' + (x.active ? 'notion-nav-breadcrumb-active' : ''),
                    href: x.active ? void 0 : s(x.pageId)
                }, x.icon && (0, e.createElement)(o, {
                    className: 'notion-nav-icon',
                    block: x.block,
                    mapImageUrl: t
                }), x.title && (0, e.createElement)('span', {
                    className: 'notion-nav-title'
                }, x.title)), y < v.length - 1 && (0, e.createElement)('span', {
                    className: 'notion-nav-spacer'
                }, '/'));
            })));
        },
        q = function(r) {
            var s = r.block,
                t = r.children,
                u = r.level,
                v = r.fullPage,
                w = r.hideHeader,
                x = r.blockMap,
                y = r.mapPageUrl,
                z = r.mapImageUrl,
                A = r.customBlockComponents,
                B = r.customDecoratorComponents,
                C = null == s ? void 0 : s.value,
                D = function() {
                    var E, F, G, H, I, J, K, L, M, N, O, P = function(Q) {
                        return function(R) {
                            return null == R ? void 0 : R.map(function(S, T) {
                                var U = S[0],
                                    V = S[1];
                                return V ? V.reduceRight(function(W, X) {
                                    var Y = function() {
                                            switch (X[0]) {
                                                case 'h':
                                                    return (0, e.createElement)('span', {
                                                        key: T,
                                                        className: 'notion-' + X[1]
                                                    }, W);
                                                case 'c':
                                                    return (0, e.createElement)('code', {
                                                        key: T,
                                                        className: 'notion-inline-code'
                                                    }, W);
                                                case 'b':
                                                    return (0, e.createElement)('b', {
                                                        key: T
                                                    }, W);
                                                case 'i':
                                                    return (0, e.createElement)('em', {
                                                        key: T
                                                    }, W);
                                                case 's':
                                                    return (0, e.createElement)('s', {
                                                        key: T
                                                    }, W);
                                                case 'a':
                                                    return (0, e.createElement)('a', {
                                                        className: 'notion-link',
                                                        href: X[1],
                                                        key: T
                                                    }, W);
                                                default:
                                                    return (0, e.createElement)(e.Fragment, {
                                                        key: T
                                                    }, W);
                                            }
                                        },
                                        Z = null == Q ? void 0 : Q[X[0]];
                                    if (Z) {
                                        var $ = X[1] ? {
                                            decoratorValue: X[1]
                                        } : {};
                                        return (0, e.createElement)(Z, Object.assign({
                                            key: T
                                        }, $, {
                                            renderComponent: Y
                                        }), U);
                                    }
                                    return Y();
                                }, (0, e.createElement)(e.Fragment, null, U)) : (0, e.createElement)(e.Fragment, {
                                    key: T
                                }, U);
                            });
                        };
                    }(B);
                    switch (null == C ? void 0 : C.type) {
                        case 'page':
                            if (0 === u) {
                                if (v) {
                                    if (!C.properties)
                                        return null;
                                    var Q = C.format || {},
                                        R = Q.page_icon,
                                        S = Q.page_cover,
                                        T = Q.page_cover_position,
                                        U = Q.page_full_width,
                                        V = Q.page_small_text,
                                        W = 100 * (1 - (T || 0.5));
                                    return (0, e.createElement)('div', {
                                        className: 'notion'
                                    }, !w && (0, e.createElement)(p, {
                                        blockMap: x,
                                        mapPageUrl: y,
                                        mapImageUrl: z
                                    }), S && (0, e.createElement)('img', {
                                        src: z(S, s),
                                        alt: k(C.properties.title),
                                        className: 'notion-page-cover',
                                        style: {
                                            objectPosition: 'center ' + W + '%'
                                        }
                                    }), (0, e.createElement)('main', {
                                        className: j('notion-page', !S && 'notion-page-offset', U && 'notion-full-width', V && 'notion-small-text')
                                    }, R && (0, e.createElement)(o, {
                                        className: S ? 'notion-page-icon-offset' : void 0,
                                        block: s,
                                        big: !0,
                                        mapImageUrl: z
                                    }), (0, e.createElement)('div', {
                                        className: 'notion-title'
                                    }, P(C.properties.title)), t));
                                }
                                return (0, e.createElement)('main', {
                                    className: 'notion'
                                }, t);
                            }
                            return C.properties ? (0, e.createElement)('a', {
                                className: 'notion-page-link',
                                href: y(C.id)
                            }, C.format && (0, e.createElement)('div', {
                                className: 'notion-page-icon'
                            }, (0, e.createElement)(o, {
                                block: s,
                                mapImageUrl: z
                            })), (0, e.createElement)('div', {
                                className: 'notion-page-text'
                            }, P(C.properties.title))) : null;
                        case 'header':
                            return C.properties ? (0, e.createElement)('h1', {
                                className: 'notion-h1'
                            }, P(C.properties.title)) : null;
                        case 'sub_header':
                            return C.properties ? (0, e.createElement)('h2', {
                                className: 'notion-h2'
                            }, P(C.properties.title)) : null;
                        case 'sub_sub_header':
                            return C.properties ? (0, e.createElement)('h3', {
                                className: 'notion-h3'
                            }, P(C.properties.title)) : null;
                        case 'divider':
                            return (0, e.createElement)('hr', {
                                className: 'notion-hr'
                            });
                        case 'text':
                            if (!C.properties)
                                return (0, e.createElement)('div', {
                                    className: 'notion-blank'
                                }, '\xA0');
                            var Q = null === (E = C.format) || void 0 === E ? void 0 : E.block_color;
                            return (0, e.createElement)('p', {
                                className: j('notion-text', Q && 'notion-' + Q)
                            }, P(C.properties.title));
                        case 'bulleted_list':
                        case 'numbered_list':
                            var R = function(S, T) {
                                    return 'bulleted_list' === C.type ? (0, e.createElement)('ul', {
                                        className: 'notion-list notion-list-disc'
                                    }, S) : (0, e.createElement)('ol', {
                                        start: T,
                                        className: 'notion-list notion-list-numbered'
                                    }, S);
                                },
                                S = null;
                            S = C.content ? (0, e.createElement)(e.Fragment, null, C.properties && (0, e.createElement)('li', null, P(C.properties.title)), R(t)) : C.properties ? (0, e.createElement)('li', null, P(C.properties.title)) : null;
                            var T = s.value.type !== x[s.value.parent_id].value.type,
                                U = l(C.id, x);
                            return T ? R(S, U) : S;
                        case 'image':
                        case 'embed':
                        case 'figma':
                        case 'video':
                            var V = s.value;
                            return (0, e.createElement)('figure', {
                                className: 'notion-asset-wrapper',
                                style: void 0 !== V.format ? {
                                    width: V.format.block_width
                                } : void 0
                            }, (0, e.createElement)(h, {
                                block: s,
                                mapImageUrl: z
                            }), V.properties.caption && (0, e.createElement)('figcaption', {
                                className: 'notion-image-caption'
                            }, P(V.properties.caption)));
                        case 'code':
                            if (C.properties.title) {
                                var W = C.properties.title[0][0],
                                    X = C.properties.language[0][0];
                                return (0, e.createElement)(i, {
                                    key: C.id,
                                    language: X || '',
                                    code: W
                                });
                            }
                            break;
                        case 'column_list':
                            return (0, e.createElement)('div', {
                                className: 'notion-row'
                            }, t);
                        case 'column':
                            var W = C.format.column_ratio,
                                X = 'calc((100% - ' + 46 * (Number((1 / W).toFixed(0)) - 1) + 'px) * ' + W + ')';
                            return (0, e.createElement)(e.Fragment, null, (0, e.createElement)('div', {
                                className: 'notion-column',
                                style: {
                                    width: X
                                }
                            }, t), (0, e.createElement)('div', {
                                className: 'notion-spacer',
                                style: {
                                    width: 46
                                }
                            }));
                        case 'quote':
                            return C.properties ? (0, e.createElement)('blockquote', {
                                className: 'notion-quote'
                            }, P(C.properties.title)) : null;
                        case 'collection_view':
                            if (!s)
                                return null;
                            var Y = null == s || null === (F = s.collection) || void 0 === F ? void 0 : F.types[0];
                            return (0, e.createElement)('div', null, (0, e.createElement)('h3', {
                                className: 'notion-h3'
                            }, P(null === (G = s.collection) || void 0 === G ? void 0 : G.title)), 'table' === (null == Y ? void 0 : Y.type) && (0, e.createElement)('div', {
                                style: {
                                    maxWidth: '100%',
                                    marginTop: 5
                                }
                            }, (0, e.createElement)('table', {
                                className: 'notion-table'
                            }, (0, e.createElement)('thead', null, (0, e.createElement)('tr', {
                                className: 'notion-tr'
                            }, null === (H = Y.format) || void 0 === H || null === (I = H.table_properties) || void 0 === I ? void 0 : I.filter(function(Z) {
                                return Z.visible;
                            }).map(function(Z, $) {
                                var ab, bb;
                                return (0, e.createElement)('th', {
                                    className: 'notion-th',
                                    key: $,
                                    style: {
                                        minWidth: Z.width
                                    }
                                }, null === (ab = s.collection) || void 0 === ab || null === (bb = ab.schema[Z.property]) || void 0 === bb ? void 0 : bb.name);
                            }))), (0, e.createElement)('tbody', null, null == s || null === (J = s.collection) || void 0 === J ? void 0 : J.data.map(function(Z, $) {
                                var ab, bb;
                                return (0, e.createElement)('tr', {
                                    className: 'notion-tr',
                                    key: $
                                }, null === (ab = Y.format) || void 0 === ab || null === (bb = ab.table_properties) || void 0 === bb ? void 0 : bb.filter(function(cb) {
                                    return cb.visible;
                                }).map(function(cb, db) {
                                    var eb, fb;
                                    return (0, e.createElement)('td', {
                                        key: db,
                                        className: 'notion-td ' + ('title' === cb.property ? 'notion-bold' : '')
                                    }, P(Z[null === (eb = s.collection) || void 0 === eb || null === (fb = eb.schema[cb.property]) || void 0 === fb ? void 0 : fb.name]));
                                }));
                            })))), 'gallery' === (null == Y ? void 0 : Y.type) && (0, e.createElement)('div', {
                                className: 'notion-gallery'
                            }, null === (K = s.collection) || void 0 === K ? void 0 : K.data.map(function(Z, $) {
                                var ab, bb;
                                return (0, e.createElement)('div', {
                                    key: 'col-' + $,
                                    className: 'notion-gallery-card'
                                }, (0, e.createElement)('div', {
                                    className: 'notion-gallery-content'
                                }, null === (ab = Y.format) || void 0 === ab || null === (bb = ab.gallery_properties) || void 0 === bb ? void 0 : bb.filter(function(cb) {
                                    return cb.visible;
                                }).map(function(cb, db) {
                                    var eb;
                                    return (0, e.createElement)('p', {
                                        key: db + 'item',
                                        className: 'notion-gallery-data ' + (0 === db ? 'is-first' : '')
                                    }, k(Z[null === (eb = s.collection) || void 0 === eb ? void 0 : eb.schema[cb.property].name]));
                                })));
                            })));
                        case 'callout':
                            return (0, e.createElement)('div', {
                                className: j('notion-callout', C.format.block_color && 'notion-' + C.format.block_color, C.format.block_color && 'notion-' + C.format.block_color + '_co')
                            }, (0, e.createElement)('div', null, (0, e.createElement)(o, {
                                block: s,
                                mapImageUrl: z
                            })), (0, e.createElement)('div', {
                                className: 'notion-callout-text'
                            }, P(C.properties.title)));
                        case 'bookmark':
                            var Z = C.properties.link,
                                $ = null !== (L = C.properties.title) && void 0 !== L ? L : Z,
                                ab = C.properties.description,
                                bb = null === (M = C.format) || void 0 === M ? void 0 : M.block_color,
                                cb = null === (N = C.format) || void 0 === N ? void 0 : N.bookmark_icon,
                                db = null === (O = C.format) || void 0 === O ? void 0 : O.bookmark_cover;
                            return (0, e.createElement)('div', {
                                className: 'notion-row'
                            }, (0, e.createElement)('a', {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: j('notion-bookmark', bb && 'notion-' + bb),
                                href: Z[0][0]
                            }, (0, e.createElement)('div', null, (0, e.createElement)('div', {
                                className: 'notion-bookmark-title'
                            }, P($)), ab && (0, e.createElement)('div', {
                                className: 'notion-bookmark-description'
                            }, P(ab)), (0, e.createElement)('div', {
                                className: 'notion-bookmark-link'
                            }, cb && (0, e.createElement)('img', {
                                src: cb,
                                alt: k($)
                            }), (0, e.createElement)('div', null, P(Z)))), db && (0, e.createElement)('div', {
                                className: 'notion-bookmark-image'
                            }, (0, e.createElement)('img', {
                                src: db,
                                alt: k($)
                            }))));
                        case 'toggle':
                            return (0, e.createElement)('details', {
                                className: 'notion-toggle'
                            }, (0, e.createElement)('summary', null, P(C.properties.title)), (0, e.createElement)('div', null, t));
                        default:
                            return (0, e.createElement)('div', null);
                    }
                    return null;
                };
            if (A && A[null == C ? void 0 : C.type] && 0 !== u) {
                var E = A[null == C ? void 0 : C.type];
                return (0, e.createElement)(E, {
                    renderComponent: D,
                    blockMap: x,
                    blockValue: C,
                    level: u
                }, t);
            }
            return D();
        },
        r = function _D(s) {
            var t, u, v = s.level,
                w = void 0 === v ? 0 : v,
                x = s.currentId,
                y = s.mapPageUrl,
                z = void 0 === y ? n : y,
                A = s.mapImageUrl,
                B = void 0 === A ? m : A,
                C = function(_D, E) {
                    if (null == _D)
                        return {};
                    var F, G, H = {},
                        I = Object.keys(_D);
                    for (G = 0; G < I.length; G++)
                        F = I[G], E.indexOf(F) >= 0 || (H[F] = _D[F]);
                    return H;
                }(s, [
                    'level',
                    'currentId',
                    'mapPageUrl',
                    'mapImageUrl'
                ]),
                D = C.blockMap,
                E = x || Object.keys(D)[0],
                F = D[E];
            return F ? _d(e).createElement(q, Object.assign({
                key: E,
                level: w,
                block: F,
                mapPageUrl: z,
                mapImageUrl: B
            }, C), null == F || null === (t = F.value) || void 0 === t || null === (u = t.content) || void 0 === u ? void 0 : u.map(function(G) {
                return _d(e).createElement(_c, Object.assign({
                    key: G,
                    currentId: G,
                    level: w + 1,
                    mapPageUrl: z,
                    mapImageUrl: B
                }, C));
            })) : null;
        };
}), b.register('qOVyd', function(_c, _d) {
    var e = function(f) {
        var g = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            h = 0,
            i = {},
            j = {
                manual: f.Prism && f.Prism.manual,
                disableWorkerMessageHandler: f.Prism && f.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function f(k) {
                        return k instanceof _n ? new _n(k.type, f(k.content), k.alias) : Array.isArray(k) ? k.map(f) : k.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                    },
                    type: function(k) {
                        return Object.prototype.toString.call(k).slice(8, -1);
                    },
                    objId: function(k) {
                        return k.__id || Object.defineProperty(k, '__id', {
                            value: ++h
                        }), k.__id;
                    },
                    clone: function f(k, l) {
                        var m, _n;
                        switch (l = l || {}, j.util.type(k)) {
                            case 'Object':
                                if (_n = j.util.objId(k), l[_n])
                                    return l[_n];
                                for (var o in (m = {}, l[_n] = m, k))
                                    k.hasOwnProperty(o) && (m[o] = f(k[o], l));
                                return m;
                            case 'Array':
                                return _n = j.util.objId(k), l[_n] ? l[_n] : (m = [], l[_n] = m, k.forEach(function(p, q) {
                                    m[q] = f(p, l);
                                }), m);
                            default:
                                return k;
                        }
                    },
                    getLanguage: function(k) {
                        for (; k;) {
                            var l = g.exec(k.className);
                            if (l)
                                return l[1].toLowerCase();
                            k = k.parentElement;
                        }
                        return 'none';
                    },
                    setLanguage: function(k, l) {
                        k.className = k.className.replace(RegExp(g, 'gi'), ''), k.classList.add('language-' + l);
                    },
                    currentScript: function() {
                        if ('undefined' == typeof document)
                            return null;
                        if ('currentScript' in document)
                            return document.currentScript;
                        try {
                            throw new Error();
                        } catch (i) {
                            var k = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) || [])[1];
                            if (k) {
                                var l = document.getElementsByTagName('script');
                                for (var m in l)
                                    if (l[m].src == k)
                                        return l[m];
                            }
                            return null;
                        }
                    },
                    isActive: function(k, l, m) {
                        for (var n = 'no-' + l; k;) {
                            var o = k.classList;
                            if (o.contains(l))
                                return !0;
                            if (o.contains(n))
                                return !1;
                            k = k.parentElement;
                        }
                        return !!m;
                    }
                },
                languages: {
                    plain: i,
                    plaintext: i,
                    text: i,
                    txt: i,
                    extend: function(k, l) {
                        var m = j.util.clone(j.languages[k]);
                        for (var n in l)
                            m[n] = l[n];
                        return m;
                    },
                    insertBefore: function(k, l, m, n) {
                        var o = (n = n || j.languages)[k],
                            p = {};
                        for (var q in o)
                            if (o.hasOwnProperty(q)) {
                                if (q == l)
                                    for (var r in m)
                                        m.hasOwnProperty(r) && (p[r] = m[r]);
                                m.hasOwnProperty(q) || (p[q] = o[q]);
                            }
                        var r = n[k];
                        return n[k] = p, j.languages.DFS(j.languages, function(s, t) {
                            t === r && s != k && (this[s] = p);
                        }), p;
                    },
                    DFS: function f(k, l, m, n) {
                        n = n || {};
                        var o = j.util.objId;
                        for (var p in k)
                            if (k.hasOwnProperty(p)) {
                                l.call(k, p, k[p], m || p);
                                var q = k[p],
                                    r = j.util.type(q);
                                'Object' !== r || n[o(q)] ? 'Array' !== r || n[o(q)] || (n[o(q)] = !0, f(q, l, p, n)) : (n[o(q)] = !0, f(q, l, null, n));
                            }
                    }
                },
                plugins: {},
                highlightAll: function(k, l) {
                    j.highlightAllUnder(document, k, l);
                },
                highlightAllUnder: function(k, l, m) {
                    var n = {
                        callback: m,
                        container: k,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    j.hooks.run('before-highlightall', n), n.elements = Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)), j.hooks.run('before-all-elements-highlight', n);
                    for (var o, p = 0; o = n.elements[p++];)
                        j.highlightElement(o, !0 === l, n.callback);
                },
                highlightElement: function(k, l, m) {
                    var n = j.util.getLanguage(k),
                        o = j.languages[n];
                    j.util.setLanguage(k, n);
                    var p = k.parentElement;
                    p && 'pre' === p.nodeName.toLowerCase() && j.util.setLanguage(p, n);
                    var q = {
                        element: k,
                        language: n,
                        grammar: o,
                        code: k.textContent
                    };

                    function r(s) {
                        q.highlightedCode = s, j.hooks.run('before-insert', q), q.element.innerHTML = q.highlightedCode, j.hooks.run('after-highlight', q), j.hooks.run('complete', q), m && m.call(q.element);
                    }
                    if (j.hooks.run('before-sanity-check', q), (p = q.element.parentElement) && 'pre' === p.nodeName.toLowerCase() && !p.hasAttribute('tabindex') && p.setAttribute('tabindex', '0'), !q.code)
                        return j.hooks.run('complete', q), void(m && m.call(q.element));
                    if (j.hooks.run('before-highlight', q), q.grammar)
                        if (l && f.Worker) {
                            var r = new Worker(j.filename);
                            r.onmessage = function(s) {
                                _k(s.data);
                            }, r.postMessage(JSON.stringify({
                                language: q.language,
                                code: q.code,
                                immediateClose: !0
                            }));
                        } else
                            _k(j.highlight(q.code, q.grammar, q.language));
                    else
                        _k(j.util.encode(q.code));
                },
                highlight: function(k, l, m) {
                    var n = {
                        code: k,
                        grammar: l,
                        language: m
                    };
                    if (j.hooks.run('before-tokenize', n), !n.grammar)
                        throw new Error('The language "' + n.language + '" has no grammar.');
                    return n.tokens = j.tokenize(n.code, n.grammar), j.hooks.run('after-tokenize', n), _o.stringify(j.util.encode(n.tokens), n.language);
                },
                tokenize: function(k, l) {
                    var m = l.rest;
                    if (m) {
                        for (var n in m)
                            l[n] = m[n];
                        delete l.rest;
                    }
                    var n = new _p();
                    return _k(n, n.head, k), _k(k, n, l, n.head, 0),
                        function(o) {
                            var p = [],
                                q = o.head.next;
                            for (; q !== o.tail;)
                                p.push(q.value), q = q.next;
                            return p;
                        }(n);
                },
                hooks: {
                    all: {},
                    add: function(k, l) {
                        var m = j.hooks.all;
                        m[k] = m[k] || [], m[k].push(l);
                    },
                    run: function(k, l) {
                        var m = j.hooks.all[k];
                        if (m && m.length)
                            for (var n, _o = 0; n = m[_o++];)
                                n(l);
                    }
                },
                Token: _k
            };

        function _k(l, m, n, o) {
            this.type = l, this.content = m, this.alias = n, this.length = 0 | (o || '').length;
        }

        function k(l, m, n, o) {
            l.lastIndex = m;
            var p = l.exec(n);
            if (p && o && p[1]) {
                var q = p[1].length;
                p.index += q, p[0] = p[0].slice(q);
            }
            return p;
        }

        function _k(l, m, n, o, _p, q) {
            for (var r in n)
                if (n.hasOwnProperty(r) && n[r]) {
                    var s = n[r];
                    s = Array.isArray(s) ? s : [s];
                    for (var t = 0; t < s.length; ++t) {
                        if (q && q.cause == r + ',' + t)
                            return;
                        var u = s[t],
                            v = u.inside,
                            w = !!u.lookbehind,
                            x = !!u.greedy,
                            y = u.alias;
                        if (x && !u.pattern.global) {
                            var z = u.pattern.toString().match(/[imsuy]*$/)[0];
                            u.pattern = RegExp(u.pattern.source, z + 'g');
                        }
                        for (var z = u.pattern || u, A = o.next, B = _p; A !== m.tail && !(q && B >= q.reach); B += A.value.length, A = A.next) {
                            var C = A.value;
                            if (m.length > l.length)
                                return;
                            if (!(C instanceof _m)) {
                                var D, E = 1;
                                if (x) {
                                    if (!(D = _n(z, B, l, w)) || D.index >= l.length)
                                        break;
                                    var F = D.index,
                                        G = D.index + D[0].length,
                                        H = B;
                                    for (H += A.value.length; F >= H;)
                                        H += (A = A.next).value.length;
                                    if (B = H -= A.value.length, A.value instanceof _m)
                                        continue;
                                    for (var I = A; I !== m.tail && (H < G || 'string' == typeof I.value); I = I.next)
                                        E++, H += I.value.length;
                                    E--, C = l.slice(B, H), D.index -= B;
                                } else if (!(D = _n(z, 0, C, w)))
                                    continue;
                                _ = D.index;
                                var F = D[0],
                                    G = C.slice(0, _),
                                    H = C.slice(_ + F.length),
                                    I = B + C.length;
                                q && I > q.reach && (q.reach = I);
                                var J = A.prev;
                                if (G && (J = _k(m, J, G), B += G.length), _k(m, J, E), A = _k(m, J, new _m(r, v ? j.tokenize(F, v) : F, y, F)), H && _k(m, A, H), E > 1) {
                                    var K = {
                                        cause: r + ',' + t,
                                        reach: I
                                    };
                                    _k(l, m, n, A.prev, B, K), q && K.reach > q.reach && (q.reach = K.reach);
                                }
                            }
                        }
                    }
                }
        }

        function k() {
            var l = {
                    value: null,
                    prev: null,
                    next: null
                },
                m = {
                    value: null,
                    prev: l,
                    next: null
                };
            l.next = m, this.head = l, this.tail = m, this.length = 0;
        }

        function _k(l, m, n) {
            var o = m.next,
                p = {
                    value: n,
                    prev: m,
                    next: o
                };
            return m.next = p, o.prev = p, l.length++, p;
        }

        function _k(l, m, n) {
            for (var o = m.next, p = 0; p < n && o !== l.tail; p++)
                o = o.next;
            m.next = o, o.prev = m, l.length -= p;
        }
        if (f.Prism = j, _m.stringify = function f(k, l) {
                if ('string' == typeof k)
                    return k;
                if (Array.isArray(k)) {
                    var m = '';
                    return k.forEach(function(n) {
                        m += f(n, l);
                    }), m;
                }
                var _m = {
                        type: k.type,
                        content: f(k.content, l),
                        tag: 'span',
                        classes: [
                            'token',
                            k.type
                        ],
                        attributes: {},
                        language: l
                    },
                    _n = k.alias;
                _n && (Array.isArray(_n) ? Array.prototype.push.apply(_m.classes, _n) : _m.classes.push(_n)), j.hooks.run('wrap', _m);
                var o = '';
                for (var p in _m.attributes)
                    o += ' ' + p + '="' + (_m.attributes[p] || '').replace(/"/g, '&quot;') + '"';
                return '<' + _m.tag + ' class="' + _m.classes.join(' ') + '"' + o + '>' + _m.content + '</' + _m.tag + '>';
            }, !f.document)
            return f.addEventListener ? (j.disableWorkerMessageHandler || f.addEventListener('message', function(k) {
                var l = JSON.parse(k.data),
                    m = l.language,
                    n = l.code,
                    o = l.immediateClose;
                f.postMessage(j.highlight(n, j.languages[m], m)), o && f.close();
            }, !1), j) : j;
        var k = j.util.currentScript();

        function l() {
            j.manual || j.highlightAll();
        }
        if (k && (j.filename = k.src, k.hasAttribute('data-manual') && (j.manual = !0)), !j.manual) {
            var l = document.readyState;
            'loading' === l || 'interactive' === l && k && k.defer ? document.addEventListener('DOMContentLoaded', _p) : window.requestAnimationFrame ? window.requestAnimationFrame(_p) : window.setTimeout(_p, 16);
        }
        return j;
    }('undefined' != typeof window ? window : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
    _c.exports && (_c.exports = e), void 0 !== a && (a.Prism = e), e.languages.markup = {
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
        }, e.languages.markup.tag.inside['attr-value'].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside['internal-subset'].inside = e.languages.markup, e.hooks.add('wrap', function(f) {
            'entity' === f.type && (f.attributes.title = f.content.replace(/&amp;/, '&'));
        }), Object.defineProperty(e.languages.markup.tag, 'addInlined', {
            value: function(f, g) {
                var h = {};
                h['language-' + g] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: e.languages[g]
                }, h.cdata = /^<!\[CDATA\[|\]\]>$/i;
                var i = {
                    'included-cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: h
                    }
                };
                i['language-' + g] = {
                    pattern: /[\s\S]+/,
                    inside: e.languages[g]
                };
                var j = {};
                j[f] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                        return f;
                    }), 'i'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: i
                }, e.languages.insertBefore('markup', 'cdata', j);
            }
        }), Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
            value: function(f, g) {
                e.languages.markup.tag.inside['special-attr'].push({
                    pattern: RegExp(/(^|["'\s])/.source + '(?:' + f + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
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
                                        g,
                                        'language-' + g
                                    ],
                                    inside: e.languages[g]
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
        function(f) {
            var g = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            f.languages.css = {
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
                    pattern: RegExp('\\burl\\((?:' + g.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp('^' + g.source + '$'),
                            alias: 'url'
                        }
                    }
                },
                selector: {
                    pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + g.source + ')*(?=\\s*\\{)'),
                    lookbehind: !0
                },
                string: {
                    pattern: g,
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
            }, f.languages.css.atrule.inside.rest = f.languages.css;
            var h = f.languages.markup;
            h && (h.tag.addInlined('style', 'css'), h.tag.addAttribute('style', 'css'));
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
                e.hooks.add('before-highlightall', function(k) {
                    k.selector += ', ' + j;
                }), e.hooks.add('before-sanity-check', function(k) {
                    var l = k.element;
                    if (l.matches(j)) {
                        k.code = '', l.setAttribute(g, h);
                        var m = l.appendChild(document.createElement('CODE'));
                        m.textContent = 'Loading\u2026';
                        var n = l.getAttribute('data-src'),
                            o = k.language;
                        if ('none' === o) {
                            var p = (/\.(\w+)$/.exec(n) || [,
                                'none'
                            ])[1];
                            o = f[p] || p;
                        }
                        e.util.setLanguage(m, o), e.util.setLanguage(l, o);
                        var _p = e.plugins.autoloader;
                        _p && _p.loadLanguages(o),
                            function(q, r, s) {
                                var t = new XMLHttpRequest();
                                t.open('GET', q, !0), t.onreadystatechange = function() {
                                    4 == t.readyState && (t.status < 400 && t.responseText ? r(t.responseText) : t.status >= 400 ? s('\u2716 Error ' + t.status + ' while fetching file: ' + t.statusText) : s('\u2716 Error: File does not exist or is empty'));
                                }, t.send(null);
                            }(n, function(q) {
                                l.setAttribute(g, i);
                                var r = function(s) {
                                    var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(s || '');
                                    if (t) {
                                        var u = Number(t[1]),
                                            v = t[2],
                                            w = t[3];
                                        return v ? w ? [
                                            u,
                                            Number(w)
                                        ] : [
                                            u,
                                            void 0
                                        ] : [
                                            u,
                                            u
                                        ];
                                    }
                                }(l.getAttribute('data-range'));
                                if (r) {
                                    var s = q.split(/\r\n?|\n/g),
                                        t = r[0],
                                        u = null == r[1] ? s.length : r[1];
                                    t < 0 && (t += s.length), t = Math.max(0, Math.min(t - 1, s.length)), u < 0 && (u += s.length), u = Math.max(0, Math.min(u, s.length)), q = s.slice(t, u).join('\n'), l.hasAttribute('data-start') || l.setAttribute('data-start', String(t + 1));
                                }
                                m.textContent = q, e.highlightElement(m);
                            }, function(q) {
                                l.setAttribute(g, 'failed'), m.textContent = q;
                            });
                    }
                }), e.plugins.fileHighlight = {
                    highlight: function(k) {
                        for (var l, m = (k || document).querySelectorAll(j), n = 0; l = m[n++];)
                            e.highlightElement(l);
                    }
                };
                var k = !1;
                e.fileHighlight = function() {
                    k || (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'), k = !0), e.plugins.fileHighlight.highlight.apply(this, arguments);
                };
            }
        }();
}), b.register('P0lVW', function(c, d) {
    ! function(e) {
        var f = e.util.clone(e.languages.javascript),
            g = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            h = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

        function j(k, l) {
            return k = k.replace(/<S>/g, function() {
                return g;
            }).replace(/<BRACES>/g, function() {
                return h;
            }).replace(/<SPREAD>/g, function() {
                return i;
            }), RegExp(k, l);
        }
        i = _p(i).source, e.languages.jsx = e.languages.extend('markup', f), e.languages.jsx.tag.pattern = _p(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = f.comment, e.languages.insertBefore('inside', 'attr-name', {
            spread: {
                pattern: _p(/<SPREAD>/.source),
                inside: e.languages.jsx
            }
        }, e.languages.jsx.tag), e.languages.insertBefore('inside', 'special-attr', {
            script: {
                pattern: _p(/=<BRACES>/.source),
                alias: 'language-javascript',
                inside: {
                    'script-punctuation': {
                        pattern: /^=(?=\{)/,
                        alias: 'punctuation'
                    },
                    rest: e.languages.jsx
                }
            }
        }, e.languages.jsx.tag);
        var j = function(k) {
                return k ? 'string' == typeof k ? k : 'string' == typeof k.content ? k.content : k.content.map(j).join('') : '';
            },
            k = function(l) {
                for (var m = [], n = 0; n < l.length; n++) {
                    var o = l[n],
                        _p = !1;
                    if ('string' != typeof o && ('tag' === o.type && o.content[0] && 'tag' === o.content[0].type ? '</' === o.content[0].content[0].content ? m.length > 0 && m[m.length - 1].tagName === j(o.content[0].content[1]) && m.pop() : '/>' === o.content[o.content.length - 1].content || m.push({
                            tagName: j(o.content[0].content[1]),
                            openedBraces: 0
                        }) : m.length > 0 && 'punctuation' === o.type && '{' === o.content ? m[m.length - 1].openedBraces++ : m.length > 0 && m[m.length - 1].openedBraces > 0 && 'punctuation' === o.type && '}' === o.content ? m[m.length - 1].openedBraces-- : _p = !0), (_p || 'string' == typeof o) && m.length > 0 && 0 === m[m.length - 1].openedBraces) {
                        var q = j(o);
                        n < l.length - 1 && ('string' == typeof l[n + 1] || 'plain-text' === l[n + 1].type) && (q += j(l[n + 1]), l.splice(n + 1, 1)), n > 0 && ('string' == typeof l[n - 1] || 'plain-text' === l[n - 1].type) && (q = j(l[n - 1]) + q, l.splice(n - 1, 1), n--), l[n] = new e.Token('plain-text', q, null, q);
                    }
                    o.content && 'string' != typeof o.content && k(o.content);
                }
            };
        e.hooks.add('after-tokenize', function(l) {
            'jsx' !== l.language && 'tsx' !== l.language || k(l.tokens);
        });
    }(Prism);
});