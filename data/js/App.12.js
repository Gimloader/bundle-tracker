function a(a) {
    return a && a.__esModule ? a.default : a;
}

function b(a, b, c, v) {
    Object.defineProperty(a, b, {
        get: c,
        set: v,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('QEVw+', function(v, w) {
    b(v.exports, 'LiveProvider', function() {
        return D;
    }), b(v.exports, 'LiveEditor', function() {
        return N;
    }), b(v.exports, 'LiveError', function() {
        return O;
    }), b(v.exports, 'LivePreview', function() {
        return P;
    });
    var d = c('bVmxU'),
        e = c('uPP4W'),
        f = c('3Z4oG'),
        g = c('8kSQZ'),
        h = (c('uPP4W'), c('uPP4W'), c('uPP4W'), c('R2Oep')),
        i = (c('uPP4W'), c('8kSQZ'), c('8kSQZ'), c('uPP4W'), c('8kSQZ'), c('uPP4W'), c('8kSQZ'), e = c('uPP4W'), c('8kSQZ'), g = c('8kSQZ'), Object.defineProperty),
        j = Object.defineProperties,
        k = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable,
        o = (a, b, c) => b in a ? i(a, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : a[b] = c,
        p = (a, b) => {
            for (var q in b || (b = {}))
                m.call(b, q) && o(a, q, b[q]);
            if (l)
                for (var r of l(b))
                    n.call(b, r) && o(a, r, b[r]);
            return a;
        },
        q = (a, b) => j(a, k(b)),
        r = a => {
            const {
                tabMode: s = 'indentation'
            } = t, u = (0, e.useRef)(null), [v, w] = (0, e.useState)(t.code || ''), {
                theme: x
            } = y;
            return (0, e.useEffect)(() => {
                w(y.code);
            }, [y.code]), (0, f.useEditable)(u, y => w(y.slice(0, -1)), {
                disabled: y.disabled,
                indentation: 'indentation' === s ? 2 : void 0
            }), (0, e.useEffect)(() => {
                y.onChange && y.onChange(v);
            }, [v]), (0, g.jsx)('div', {
                className: y.className,
                style: y.style,
                children: (0, g.jsx)(d.Highlight, {
                    code: v,
                    theme: y.theme || d.themes.nightOwl,
                    language: y.language,
                    children: ({
                        className: z,
                        tokens: A,
                        getLineProps: B,
                        getTokenProps: C,
                        style: D
                    }) => (0, g.jsx)('pre', {
                        className: z,
                        style: p(p({
                            margin: 0,
                            outline: 'none',
                            padding: 10,
                            fontFamily: 'inherit'
                        }, x && 'object' == typeof x.plain ? x.plain : {}), D),
                        ref: u,
                        spellCheck: 'false',
                        children: A.map((z, A) => (0, g.jsxs)('span', q(p({}, B({
                            line: z
                        })), {
                            children: [
                                z.filter(z => !z.empty).map((z, A) => (0, g.jsx)('span', p({}, C({
                                    token: z
                                })), `token-${ A }`)),
                                '\n'
                            ]
                        }), `line-${ A }`))
                    })
                })
            });
        },
        s = (0, e.createContext)({}),
        t = [
            'jsx',
            'imports'
        ];

    function u(v = {}) {
        const w = Array.isArray(v.transforms) ? v.transforms.filter(Boolean) : t;
        return v => (0, h.transform)(v, {
            transforms: w
        }).code;
    }
    var w = (b, c) => class extends e.Component {
            componentDidCatch(v) {
                c(v);
            }
            render() {
                return 'function' == typeof b ? (0, g.jsx)(b, {}) : v(e).isValidElement(b) ? b : null;
            }
        },
        x = (v, b) => {
            const y = Object.keys(b),
                z = y.map(v => b[v]);
            return new Function(...y, v)(...z);
        };
    var y = 'const _jsxFileName = "";',
        z = v => v.trim().replace(/;$/, ''),
        A = v => v.replace(y, '').trim(),
        B = v => y + v,
        C = v => `return (${ v })`;
    var D = function({
        children: E,
        code: F = '',
        language: G = 'tsx',
        theme: H,
        enableTypeScript: I = !0,
        disabled: J = !1,
        scope: K,
        transformCode: L,
        noInline: M = !1
    }) {
        const [N, O] = (0, e.useState)({
            error: void 0,
            element: void 0
        });

        function P(E) {
            return F = this, G = null, H = function*() {
                const Q = v => {
                    O({
                        error: v.toString(),
                        element: void 0
                    });
                };
                try {
                    const R = L ? L(E) : E;
                    try {
                        const S = yield Promise.resolve(R), T = v => O({
                            error: void 0,
                            element: v
                        });
                        if ('string' != typeof S)
                            throw new Error('Code failed to transform');
                        const U = {
                            code: S,
                            scope: K,
                            enableTypeScript: I
                        };
                        M ? (O({
                            error: void 0,
                            element: null
                        }), (({
                            code: V = '',
                            scope: W = {},
                            enableTypeScript: X = !0
                        }, T, I) => {
                            if (!/render\s*\(/.test(V))
                                return I(new SyntaxError('No-Inline evaluations must call `render`.'));
                            const Y = [
                                'jsx',
                                'imports'
                            ];
                            X && Y.splice(1, 0, 'typescript'), x(u({
                                transforms: Y
                            })(V), q(p({
                                React: v(e)
                            }, W), {
                                render: v => {
                                    void 0 === v ? I(new SyntaxError('`render` must be called with valid JSX.')) : T(w(v, I));
                                }
                            }));
                        })(U, T, W)) : T((({
                            code: Y = '',
                            scope: Z = {},
                            enableTypeScript: $ = !0
                        }, T) => {
                            const _ = ['jsx'];
                            $ && _.push('typescript');
                            const ab = function(...v) {
                                return v.reduce((v, Y) => (...Z) => v(Y(...Z)));
                            }(B, u({
                                transforms: ['imports']
                            }), A, z, u({
                                transforms: _
                            }), C, z)(Y);
                            return w(x(ab, p({
                                React: v(e)
                            }, Z)), T);
                        })(U, Z));
                    } catch (v) {
                        return Q(v);
                    }
                } catch (v) {
                    return Q(v), Promise.resolve();
                }
            }, new Promise((v, E) => {
                var Q = v => {
                        try {
                            J(H.next(v));
                        } catch (v) {
                            E(v);
                        }
                    },
                    R = v => {
                        try {
                            J(H.throw(v));
                        } catch (v) {
                            E(v);
                        }
                    },
                    S = E => E.done ? v(E.value) : Promise.resolve(E.value).then(Q, R);
                S((H = H.apply(F, G)).next());
            });
            var Q, R, S;
        }
        const Q = v => O({
            error: v.toString()
        });
        return (0, e.useEffect)(() => {
            P(F).catch(Q);
        }, [
            F,
            K,
            M,
            L
        ]), (0, g.jsx)(s.Provider, {
            value: q(p({}, N), {
                code: F,
                language: G,
                theme: H,
                disabled: J,
                onError: Q,
                onChange: v => {
                    P(v).catch(Q);
                }
            }),
            children: E
        });
    };

    function N(v) {
        const {
            code: O,
            language: P,
            theme: Q,
            disabled: R,
            onChange: S
        } = (0, e.useContext)(s);
        return (0, g.jsx)(r, p({
            theme: Q,
            code: O,
            language: P,
            disabled: R,
            onChange: S
        }, v));
    }

    function O(v) {
        const {
            error: P
        } = (0, e.useContext)(s);
        return P ? (0, g.jsx)('pre', q(p({}, v), {
            children: P
        })) : null;
    }
    var P = function(v) {
        var Q = R,
            {
                Component: S = 'div'
            } = T,
            U = ((R, T) => {
                var V = {};
                for (var W in R)
                    m.call(R, W) && T.indexOf(W) < 0 && (V[W] = R[W]);
                if (null != R && l)
                    for (var X of l(R))
                        T.indexOf(X) < 0 && n.call(R, X) && (V[X] = R[X]);
                return V;
            })(T, ['Component']);
        const {
            element: V
        } = (0, e.useContext)(s);
        return (0, g.jsx)(S, q(p({}, U), {
            children: V ? (0, g.jsx)(V, {}) : null
        }));
    };
}), c.register('bVmxU', function(a, B) {
    b(a.exports, 'themes', function() {
        return $;
    }), b(a.exports, 'Highlight', function() {
        return ib;
    });
    var d, e, f, g, h, i, j, k = c('uPP4W'),
        l = (c('uPP4W'), c('uPP4W'), c('q2s5G')),
        m = (c('uPP4W'), l = c('q2s5G'), k = c('uPP4W'), Object.create),
        n = Object.defineProperty,
        o = Object.defineProperties,
        p = Object.getOwnPropertyDescriptor,
        q = Object.getOwnPropertyDescriptors,
        r = Object.getOwnPropertyNames,
        s = Object.getOwnPropertySymbols,
        t = Object.getPrototypeOf,
        u = Object.prototype.hasOwnProperty,
        v = Object.prototype.propertyIsEnumerable,
        w = (a, b, c) => b in a ? n(a, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : a[b] = c,
        x = (a, b) => {
            for (var y in b || (b = {}))
                u.call(b, y) && w(a, y, b[y]);
            if (s)
                for (var z of s(b))
                    v.call(b, z) && w(a, z, b[z]);
            return a;
        },
        y = (a, b) => o(a, q(b)),
        z = (a, b) => {
            var A = {};
            for (var B in a)
                u.call(a, B) && b.indexOf(B) < 0 && (A[B] = a[B]);
            if (null != a && s)
                for (var C of s(a))
                    b.indexOf(C) < 0 && v.call(a, C) && (A[C] = a[C]);
            return A;
        },
        A = (d = {
            '../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js'(a, b) {
                var B = function() {
                    var C = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                        D = 0,
                        E = {},
                        F = {
                            util: {
                                encode: function C(D) {
                                    return D instanceof d ? new d(D.type, C(D.content), D.alias) : Array.isArray(D) ? D.map(C) : D.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                                },
                                type: function(C) {
                                    return Object.prototype.toString.call(C).slice(8, -1);
                                },
                                objId: function(C) {
                                    return C.__id || Object.defineProperty(C, '__id', {
                                        value: ++D
                                    }), C.__id;
                                },
                                clone: function C(D, E) {
                                    var G, H;
                                    switch (E = E || {}, F.util.type(D)) {
                                        case 'Object':
                                            if (H = F.util.objId(D), E[H])
                                                return E[H];
                                            for (var I in (G = {}, E[H] = G, D))
                                                D.hasOwnProperty(I) && (G[I] = C(D[I], E));
                                            return G;
                                        case 'Array':
                                            return H = F.util.objId(D), E[H] ? E[H] : (G = [], E[H] = G, D.forEach(function(D, F) {
                                                G[F] = C(D, E);
                                            }), G);
                                        default:
                                            return D;
                                    }
                                },
                                getLanguage: function(D) {
                                    for (; D;) {
                                        var G = C.exec(D.className);
                                        if (G)
                                            return G[1].toLowerCase();
                                        D = D.parentElement;
                                    }
                                    return 'none';
                                },
                                setLanguage: function(D, E) {
                                    D.className = D.className.replace(RegExp(C, 'gi'), ''), D.classList.add('language-' + E);
                                },
                                isActive: function(C, D, E) {
                                    for (var G = 'no-' + D; C;) {
                                        var H = C.classList;
                                        if (H.contains(D))
                                            return !0;
                                        if (H.contains(G))
                                            return !1;
                                        C = C.parentElement;
                                    }
                                    return !!E;
                                }
                            },
                            languages: {
                                plain: E,
                                plaintext: E,
                                text: E,
                                txt: E,
                                extend: function(C, D) {
                                    var G = F.util.clone(F.languages[C]);
                                    for (var H in D)
                                        G[H] = D[H];
                                    return G;
                                },
                                insertBefore: function(C, D, E, d) {
                                    var G = (d = d || F.languages)[C],
                                        H = {};
                                    for (var I in G)
                                        if (G.hasOwnProperty(I)) {
                                            if (I == D)
                                                for (var J in E)
                                                    E.hasOwnProperty(J) && (H[J] = E[J]);
                                            E.hasOwnProperty(I) || (H[I] = G[I]);
                                        }
                                    var J = d[C];
                                    return d[C] = H, F.languages.DFS(F.languages, function(D, E) {
                                        E === J && D != C && (this[D] = H);
                                    }), H;
                                },
                                DFS: function C(D, E, d, e) {
                                    e = e || {};
                                    var G = F.util.objId;
                                    for (var H in D)
                                        if (D.hasOwnProperty(H)) {
                                            E.call(D, H, D[H], d || H);
                                            var I = D[H],
                                                J = F.util.type(I);
                                            'Object' !== J || e[G(I)] ? 'Array' !== J || e[G(I)] || (e[G(I)] = !0, C(I, E, H, e)) : (e[G(I)] = !0, C(I, E, null, e));
                                        }
                                }
                            },
                            plugins: {},
                            highlight: function(C, D, E) {
                                var G = {
                                    code: C,
                                    grammar: D,
                                    language: E
                                };
                                if (F.hooks.run('before-tokenize', G), !G.grammar)
                                    throw new Error('The language "' + G.language + '" has no grammar.');
                                return G.tokens = F.tokenize(G.code, G.grammar), F.hooks.run('after-tokenize', G), d.stringify(F.util.encode(G.tokens), G.language);
                            },
                            tokenize: function(C, D) {
                                var G = D.rest;
                                if (G) {
                                    for (var H in G)
                                        D[H] = G[H];
                                    delete D.rest;
                                }
                                var H = new g();
                                return h(H, H.head, C), f(C, H, D, H.head, 0),
                                    function(C) {
                                        for (var I = [], J = C.head.next; J !== C.tail;)
                                            I.push(J.value), J = J.next;
                                        return I;
                                    }(H);
                            },
                            hooks: {
                                all: {},
                                add: function(C, D) {
                                    var G = F.hooks.all;
                                    G[C] = G[C] || [], G[C].push(D);
                                },
                                run: function(C, D) {
                                    var G = F.hooks.all[C];
                                    if (G && G.length)
                                        for (var H, I = 0; H = G[I++];)
                                            H(D);
                                }
                            },
                            Token: d
                        };

                    function G(C, D, E, F) {
                        this.type = C, this.content = D, this.alias = E, this.length = 0 | (F || '').length;
                    }

                    function H(C, D, E, F) {
                        C.lastIndex = D;
                        var I = C.exec(E);
                        if (I && F && I[1]) {
                            var J = I[1].length;
                            I.index += J, I[0] = I[0].slice(J);
                        }
                        return I;
                    }

                    function I(C, D, E, g, j, k) {
                        for (var J in E)
                            if (E.hasOwnProperty(J) && E[J]) {
                                var K = E[J];
                                K = Array.isArray(K) ? K : [K];
                                for (var L = 0; L < K.length; ++L) {
                                    if (k && k.cause == J + ',' + L)
                                        return;
                                    var M = K[L],
                                        N = M.inside,
                                        O = !!M.lookbehind,
                                        P = !!M.greedy,
                                        Q = M.alias;
                                    if (P && !M.pattern.global) {
                                        var R = M.pattern.toString().match(/[imsuy]*$/)[0];
                                        M.pattern = RegExp(M.pattern.source, R + 'g');
                                    }
                                    for (var R = M.pattern || M, S = g.next, T = U; S !== D.tail && !(k && T >= k.reach); T += S.value.length, S = S.next) {
                                        var V = S.value;
                                        if (D.length > C.length)
                                            return;
                                        if (!(V instanceof G)) {
                                            var W, X = 1;
                                            if (P) {
                                                if (!(W = H(R, T, C, O)) || W.index >= C.length)
                                                    break;
                                                var Y = W.index,
                                                    Z = W.index + W[0].length,
                                                    $ = _;
                                                for ($ += S.value.length; Y >= $;)
                                                    $ += (S = S.next).value.length;
                                                if (_ = $ -= S.value.length, S.value instanceof G)
                                                    continue;
                                                for (var ab = bb; ab !== D.tail && ($ < Z || 'string' == typeof ab.value); ab = ab.next)
                                                    X++, $ += ab.value.length;
                                                X--, V = C.slice(_, $), W.index -= _;
                                            } else if (!(W = H(R, 0, V, O)))
                                                continue;
                                            A = W.index;
                                            var Y = W[0],
                                                Z = V.slice(0, A),
                                                $ = V.slice(A + Y.length),
                                                _ = T + V.length;
                                            k && _ > k.reach && (k.reach = _);
                                            var ab = S.prev;
                                            if (Z && (ab = h(D, ab, Z), T += Z.length), i(D, ab, X), S = h(D, ab, new G(J, N ? F.tokenize(Y, N) : Y, Q, Y)), $ && h(D, S, $), X > 1) {
                                                var bb = {
                                                    cause: J + ',' + L,
                                                    reach: _
                                                };
                                                I(C, D, E, S.prev, T, bb), k && bb.reach > k.reach && (k.reach = bb.reach);
                                            }
                                        }
                                    }
                                }
                            }
                    }

                    function J() {
                        var K = {
                                value: null,
                                prev: null,
                                next: null
                            },
                            L = {
                                value: null,
                                prev: K,
                                next: null
                            };
                        K.next = L, this.head = K, this.tail = L, this.length = 0;
                    }

                    function K(C, D, E) {
                        var L = D.next,
                            M = {
                                value: E,
                                prev: D,
                                next: L
                            };
                        return D.next = M, L.prev = M, C.length++, M;
                    }

                    function L(C, D, E) {
                        for (var M = D.next, N = 0; N < E && M !== C.tail; N++)
                            M = M.next;
                        D.next = M, M.prev = D, C.length -= N;
                    }
                    return G.stringify = function C(D, E) {
                        if ('string' == typeof D)
                            return D;
                        if (Array.isArray(D)) {
                            var M = '';
                            return D.forEach(function(D) {
                                M += C(D, E);
                            }), M;
                        }
                        var M = {
                                type: D.type,
                                content: C(D.content, E),
                                tag: 'span',
                                classes: [
                                    'token',
                                    D.type
                                ],
                                attributes: {},
                                language: E
                            },
                            N = D.alias;
                        N && (Array.isArray(N) ? Array.prototype.push.apply(M.classes, N) : M.classes.push(N)), F.hooks.run('wrap', M);
                        var O = '';
                        for (var P in M.attributes)
                            O += ' ' + P + '="' + (M.attributes[P] || '').replace(/"/g, '&quot;') + '"';
                        return '<' + M.tag + ' class="' + M.classes.join(' ') + '"' + O + '>' + M.content + '</' + M.tag + '>';
                    }, F;
                }();
                b.exports = B, B.default = B;
            }
        }, function() {
            return e || (0, d[r(d)[0]])((e = {
                exports: {}
            }).exports, e), e.exports;
        }),
        B = ((a, b, c) => (c = null != a ? m(t(a)) : {}, ((a, b, c, D) => {
            if (b && 'object' == typeof b || 'function' == typeof b)
                for (let C of r(b))
                    u.call(a, C) || C === c || n(a, C, {
                        get: () => b[C],
                        enumerable: !(D = p(b, C)) || D.enumerable
                    });
            return a;
        })(!b && a && a.__esModule ? c : n(c, 'default', {
            value: a,
            enumerable: !0
        }), a)))(A());
    B.languages.markup = {
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
                                {
                                    pattern: /^(\s*)["']|["']$/,
                                    lookbehind: !0
                                }
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
        }, B.languages.markup.tag.inside['attr-value'].inside.entity = B.languages.markup.entity, B.languages.markup.doctype.inside['internal-subset'].inside = B.languages.markup, B.hooks.add('wrap', function(a) {
            'entity' === a.type && (a.attributes.title = a.content.replace(/&amp;/, '&'));
        }), Object.defineProperty(B.languages.markup.tag, 'addInlined', {
            value: function(a, b) {
                var C;
                (b = ((C = ((C = {})['language-' + b] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: B.languages[b]
                }, C.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                    'included-cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: C
                    }
                }))['language-' + b] = {
                    pattern: /[\s\S]+/,
                    inside: B.languages[b]
                }, {}))[a] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                        return a;
                    }), 'i'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: C
                }, B.languages.insertBefore('markup', 'cdata', b);
            }
        }), Object.defineProperty(B.languages.markup.tag, 'addAttribute', {
            value: function(a, b) {
                B.languages.markup.tag.inside['special-attr'].push({
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
                                    inside: B.languages[b]
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
        }), B.languages.html = B.languages.markup, B.languages.mathml = B.languages.markup, B.languages.svg = B.languages.markup, B.languages.xml = B.languages.extend('markup', {}), B.languages.ssml = B.languages.xml, B.languages.atom = B.languages.xml, B.languages.rss = B.languages.xml, f = B, g = {
            pattern: /\\[\\(){}[\]^$+*?|.]/,
            alias: 'escape'
        }, i = '(?:[^\\\\-]|' + (h = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source + ')', i = RegExp(i + '-' + i), j = {
            pattern: /(<|')[^<>']+(?=[>']$)/,
            lookbehind: !0,
            alias: 'variable'
        }, f.languages.regex = {
            'char-class': {
                pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
                lookbehind: !0,
                inside: {
                    'char-class-negation': {
                        pattern: /(^\[)\^/,
                        lookbehind: !0,
                        alias: 'operator'
                    },
                    'char-class-punctuation': {
                        pattern: /^\[|\]$/,
                        alias: 'punctuation'
                    },
                    range: {
                        pattern: i,
                        inside: {
                            escape: h,
                            'range-punctuation': {
                                pattern: /-/,
                                alias: 'operator'
                            }
                        }
                    },
                    'special-escape': g,
                    'char-set': {
                        pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                        alias: 'class-name'
                    },
                    escape: h
                }
            },
            'special-escape': g,
            'char-set': {
                pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
                alias: 'class-name'
            },
            backreference: [{
                    pattern: /\\(?![123][0-7]{2})[1-9]/,
                    alias: 'keyword'
                },
                {
                    pattern: /\\k<[^<>']+>/,
                    alias: 'keyword',
                    inside: {
                        'group-name': j
                    }
                }
            ],
            anchor: {
                pattern: /[$^]|\\[ABbGZz]/,
                alias: 'function'
            },
            escape: h,
            group: [{
                    pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                    alias: 'punctuation',
                    inside: {
                        'group-name': j
                    }
                },
                {
                    pattern: /\)/,
                    alias: 'punctuation'
                }
            ],
            quantifier: {
                pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
                alias: 'number'
            },
            alternation: {
                pattern: /\|/,
                alias: 'keyword'
            }
        }, B.languages.clike = {
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
        }, B.languages.javascript = B.languages.extend('clike', {
            'class-name': [
                B.languages.clike['class-name'],
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
        }), B.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, B.languages.insertBefore('javascript', 'keyword', {
            regex: {
                pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    'regex-source': {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: 'language-regex',
                        inside: B.languages.regex
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
                    inside: B.languages.javascript
                },
                {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: B.languages.javascript
                },
                {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: B.languages.javascript
                },
                {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: B.languages.javascript
                }
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), B.languages.insertBefore('javascript', 'string', {
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
                            rest: B.languages.javascript
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
        }), B.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
                pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                lookbehind: !0,
                alias: 'property'
            }
        }), B.languages.markup && (B.languages.markup.tag.addInlined('script', 'javascript'), B.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript')), B.languages.js = B.languages.javascript, B.languages.actionscript = B.languages.extend('javascript', {
            keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
            operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        }), B.languages.actionscript['class-name'].alias = 'function', delete B.languages.actionscript.parameter, delete B.languages.actionscript['literal-property'], B.languages.markup && B.languages.insertBefore('actionscript', 'string', {
            xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: B.languages.markup
            }
        }),
        function(a) {
            var C = /#(?!\{).+/,
                D = {
                    pattern: /#\{[^}]+\}/,
                    alias: 'variable'
                };
            a.languages.coffeescript = a.languages.extend('javascript', {
                comment: C,
                string: [{
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        greedy: !0
                    },
                    {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        greedy: !0,
                        inside: {
                            interpolation: D
                        }
                    }
                ],
                keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                'class-member': {
                    pattern: /@(?!\d)\w+/,
                    alias: 'variable'
                }
            }), a.languages.insertBefore('coffeescript', 'comment', {
                'multiline-comment': {
                    pattern: /###[\s\S]+?###/,
                    alias: 'comment'
                },
                'block-regex': {
                    pattern: /\/{3}[\s\S]*?\/{3}/,
                    alias: 'regex',
                    inside: {
                        comment: C,
                        interpolation: D
                    }
                }
            }), a.languages.insertBefore('coffeescript', 'string', {
                'inline-javascript': {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    inside: {
                        delimiter: {
                            pattern: /^`|`$/,
                            alias: 'punctuation'
                        },
                        script: {
                            pattern: /[\s\S]+/,
                            alias: 'language-javascript',
                            inside: a.languages.javascript
                        }
                    }
                },
                'multiline-string': [{
                        pattern: /'''[\s\S]*?'''/,
                        greedy: !0,
                        alias: 'string'
                    },
                    {
                        pattern: /"""[\s\S]*?"""/,
                        greedy: !0,
                        alias: 'string',
                        inside: {
                            interpolation: D
                        }
                    }
                ]
            }), a.languages.insertBefore('coffeescript', 'keyword', {
                property: /(?!\d)\w+(?=\s*:(?!:))/
            }), delete a.languages.coffeescript['template-string'], a.languages.coffee = a.languages.coffeescript;
        }(B),
        function(a) {
            var C = a.languages.javadoclike = {
                parameter: {
                    pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,
                    lookbehind: !0
                },
                keyword: {
                    pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
                    lookbehind: !0
                },
                punctuation: /[{}]/
            };
            Object.defineProperty(C, 'addSupport', {
                value: function(C, c) {
                    (C = 'string' == typeof C ? [C] : C).forEach(function(C) {
                        var D = function(a) {
                                a.inside || (a.inside = {}), a.inside.rest = c;
                            },
                            E = 'doc-comment';
                        if (e = a.languages[C]) {
                            var F, G = F[E];
                            if ((G = G || (F = a.languages.insertBefore(C, 'comment', {
                                    'doc-comment': {
                                        pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                        lookbehind: !0,
                                        alias: 'comment'
                                    }
                                }))[E]) instanceof RegExp && (G = F[E] = {
                                    pattern: G
                                }), Array.isArray(G))
                                for (var H = 0, I = G.length; H < I; H++)
                                    G[H] instanceof RegExp && (G[H] = {
                                        pattern: G[H]
                                    }), D(G[H]);
                            else
                                D(G);
                        }
                    });
                }
            }), C.addSupport([
                'java',
                'javascript',
                'php'
            ], C);
        }(B),
        function(a) {
            var C = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            (C = (a.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + C.source + ')*?' + /(?:;|(?=\s*\{))/.source),
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
                    pattern: RegExp('\\burl\\((?:' + C.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp('^' + C.source + '$'),
                            alias: 'url'
                        }
                    }
                },
                selector: {
                    pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + C.source + ')*(?=\\s*\\{)'),
                    lookbehind: !0
                },
                string: {
                    pattern: C,
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
            }, a.languages.css.atrule.inside.rest = a.languages.css, a.languages.markup)) && (C.tag.addInlined('style', 'css'), C.tag.addAttribute('style', 'css'));
        }(B),
        function(a) {
            var C = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                D = (C = (a.languages.css.selector = {
                    pattern: a.languages.css.selector.pattern,
                    lookbehind: !0,
                    inside: C = {
                        'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        'pseudo-class': /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: RegExp('\\[(?:[^[\\]"\']|' + C.source + ')*\\]'),
                            greedy: !0,
                            inside: {
                                punctuation: /^\[|\]$/,
                                'case-sensitivity': {
                                    pattern: /(\s)[si]$/i,
                                    lookbehind: !0,
                                    alias: 'keyword'
                                },
                                namespace: {
                                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                    lookbehind: !0,
                                    inside: {
                                        punctuation: /\|$/
                                    }
                                },
                                'attr-name': {
                                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                                    lookbehind: !0
                                },
                                'attr-value': [
                                    C,
                                    {
                                        pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                                        lookbehind: !0
                                    }
                                ],
                                operator: /[|~*^$]?=/
                            }
                        },
                        'n-th': [{
                                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                                lookbehind: !0,
                                inside: {
                                    number: /[\dn]+/,
                                    operator: /[+-]/
                                }
                            },
                            {
                                pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                                lookbehind: !0
                            }
                        ],
                        combinator: />|\+|~|\|\|/,
                        punctuation: /[(),]/
                    }
                }, a.languages.css.atrule.inside['selector-function-argument'].inside = C, a.languages.insertBefore('css', 'property', {
                    variable: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                        lookbehind: !0
                    }
                }), {
                    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
                    lookbehind: !0
                }), {
                    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                    lookbehind: !0
                });
            a.languages.insertBefore('css', 'function', {
                operator: {
                    pattern: /(\s)[+\-*\/](?=\s)/,
                    lookbehind: !0
                },
                hexcode: {
                    pattern: /\B#[\da-f]{3,8}\b/i,
                    alias: 'color'
                },
                color: [{
                        pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                        lookbehind: !0
                    },
                    {
                        pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                        inside: {
                            unit: C,
                            number: D,
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }
                ],
                entity: /\\[\da-f]{1,8}/i,
                unit: C,
                number: D
            });
        }(B),
        function(a) {
            var C = /[*&][^\s[\]{},]+/,
                D = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                E = '(?:' + D.source + '(?:[ \t]+' + C.source + ')?|' + C.source + '(?:[ \t]+' + D.source + ')?)',
                F = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                }),
                G = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

            function H(a, C) {
                C = (C || '').replace(/m/g, '') + 'm';
                var I = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
                    return E;
                }).replace(/<<value>>/g, function() {
                    return a;
                });
                return RegExp(I, C);
            }
            a.languages.yaml = {
                scalar: {
                    pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
                        return E;
                    })),
                    lookbehind: !0,
                    alias: 'string'
                },
                comment: /#.*/,
                key: {
                    pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
                        return E;
                    }).replace(/<<key>>/g, function() {
                        return '(?:' + F + '|' + G + ')';
                    })),
                    lookbehind: !0,
                    greedy: !0,
                    alias: 'atrule'
                },
                directive: {
                    pattern: /(^[ \t]*)%.+/m,
                    lookbehind: !0,
                    alias: 'important'
                },
                datetime: {
                    pattern: H(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                    lookbehind: !0,
                    alias: 'number'
                },
                boolean: {
                    pattern: H(/false|true/.source, 'i'),
                    lookbehind: !0,
                    alias: 'important'
                },
                null: {
                    pattern: H(/null|~/.source, 'i'),
                    lookbehind: !0,
                    alias: 'important'
                },
                string: {
                    pattern: H(G),
                    lookbehind: !0,
                    greedy: !0
                },
                number: {
                    pattern: H(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
                    lookbehind: !0
                },
                tag: D,
                important: C,
                punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
            }, a.languages.yml = a.languages.yaml;
        }(B),
        function(a) {
            var C = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

            function D(a) {
                return a = a.replace(/<inner>/g, function() {
                    return C;
                }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + a + ')');
            }
            var E = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                F = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
                    return E;
                }),
                G = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
                H = (a.languages.markdown = a.languages.extend('markup', {}), a.languages.insertBefore('markdown', 'prolog', {
                    'front-matter-block': {
                        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            punctuation: /^---|---$/,
                            'front-matter': {
                                pattern: /\S+(?:\s+\S+)*/,
                                alias: [
                                    'yaml',
                                    'language-yaml'
                                ],
                                inside: a.languages.yaml
                            }
                        }
                    },
                    blockquote: {
                        pattern: /^>(?:[\t ]*>)*/m,
                        alias: 'punctuation'
                    },
                    table: {
                        pattern: RegExp('^' + F + G + '(?:' + F + ')*', 'm'),
                        inside: {
                            'table-data-rows': {
                                pattern: RegExp('^(' + F + G + ')(?:' + F + ')*$'),
                                lookbehind: !0,
                                inside: {
                                    'table-data': {
                                        pattern: RegExp(E),
                                        inside: a.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            },
                            'table-line': {
                                pattern: RegExp('^(' + F + ')' + G + '$'),
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\||:?-{3,}:?/
                                }
                            },
                            'table-header-row': {
                                pattern: RegExp('^' + F + '$'),
                                inside: {
                                    'table-header': {
                                        pattern: RegExp(E),
                                        alias: 'important',
                                        inside: a.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            }
                        }
                    },
                    code: [{
                            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                            lookbehind: !0,
                            alias: 'keyword'
                        },
                        {
                            pattern: /^```[\s\S]*?^```$/m,
                            greedy: !0,
                            inside: {
                                'code-block': {
                                    pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                    lookbehind: !0
                                },
                                'code-language': {
                                    pattern: /^(```).+/,
                                    lookbehind: !0
                                },
                                punctuation: /```/
                            }
                        }
                    ],
                    title: [{
                            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                            alias: 'important',
                            inside: {
                                punctuation: /==+$|--+$/
                            }
                        },
                        {
                            pattern: /(^\s*)#.+/m,
                            lookbehind: !0,
                            alias: 'important',
                            inside: {
                                punctuation: /^#+|#+$/
                            }
                        }
                    ],
                    hr: {
                        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                        lookbehind: !0,
                        alias: 'punctuation'
                    },
                    list: {
                        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                        lookbehind: !0,
                        alias: 'punctuation'
                    },
                    'url-reference': {
                        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                        inside: {
                            variable: {
                                pattern: /^(!?\[)[^\]]+/,
                                lookbehind: !0
                            },
                            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                            punctuation: /^[\[\]!:]|[<>]/
                        },
                        alias: 'url'
                    },
                    bold: {
                        pattern: D(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^..)[\s\S]+(?=..$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /\*\*|__/
                        }
                    },
                    italic: {
                        pattern: D(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^.)[\s\S]+(?=.$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /[*_]/
                        }
                    },
                    strike: {
                        pattern: D(/(~~?)(?:(?!~)<inner>)+\2/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            content: {
                                pattern: /(^~~?)[\s\S]+(?=\1$)/,
                                lookbehind: !0,
                                inside: {}
                            },
                            punctuation: /~~?/
                        }
                    },
                    'code-snippet': {
                        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: [
                            'code',
                            'keyword'
                        ]
                    },
                    url: {
                        pattern: D(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            operator: /^!/,
                            content: {
                                pattern: /(^\[)[^\]]+(?=\])/,
                                lookbehind: !0,
                                inside: {}
                            },
                            variable: {
                                pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                                lookbehind: !0
                            },
                            url: {
                                pattern: /(^\]\()[^\s)]+/,
                                lookbehind: !0
                            },
                            string: {
                                pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                                lookbehind: !0
                            }
                        }
                    }
                }), [
                    'url',
                    'bold',
                    'italic',
                    'strike'
                ].forEach(function(C) {
                    [
                        'url',
                        'bold',
                        'italic',
                        'strike',
                        'code-snippet'
                    ].forEach(function(D) {
                        C !== D && (a.languages.markdown[C].inside.content.inside[D] = a.languages.markdown[D]);
                    });
                }), a.hooks.add('after-tokenize', function(a) {
                    'markdown' !== a.language && 'md' !== a.language || function a(C) {
                        if (C && 'string' != typeof C)
                            for (var I = 0, J = C.length; I < J; I++) {
                                var K, L = C[I];
                                'code' !== L.type ? a(L.content) : (K = L.content[1], L = L.content[3], K && L && 'code-language' === K.type && 'code-block' === L.type && 'string' == typeof K.content && (K = K.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'), K = 'language-' + (K = (/[a-z][\w-]*/i.exec(K) || [''])[0].toLowerCase()), L.alias ? 'string' == typeof L.alias ? L.alias = [
                                    L.alias,
                                    K
                                ] : L.alias.push(K) : L.alias = [K]));
                            }
                    }(a.tokens);
                }), a.hooks.add('wrap', function(C) {
                    if ('code-block' === C.type) {
                        for (var I = '', J = 0, K = C.classes.length; J < K; J++) {
                            var L = C.classes[J];
                            if (L = /language-(.+)/.exec(L)) {
                                I = L[1];
                                break;
                            }
                        }
                        var L, M = a.languages[I];
                        M ? C.content = a.highlight(C.content.replace(H, '').replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(a, C) {
                            var N;
                            return '#' === (C = C.toLowerCase())[0] ? (N = 'x' === C[1] ? parseInt(C.slice(2), 16) : Number(C.slice(1)), h(N)) : g[C] || a;
                        }), M, I) : I && 'none' !== I && a.plugins.autoloader && (L = 'md-' + new Date().valueOf() + '-' + Math.floor(10000000000000000 * Math.random()), C.attributes.id = L, a.plugins.autoloader.loadLanguages(I, function() {
                            var N = document.getElementById(L);
                            N && (N.innerHTML = a.highlight(N.textContent, a.languages[I], I));
                        }));
                    }
                }), RegExp(a.languages.markup.tag.pattern.source, 'gi')),
                I = {
                    amp: '&',
                    lt: '<',
                    gt: '>',
                    quot: '"'
                },
                J = String.fromCodePoint || String.fromCharCode;
            a.languages.md = a.languages.markdown;
        }(B), B.languages.graphql = {
            comment: /#.*/,
            description: {
                pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                greedy: !0,
                alias: 'string',
                inside: {
                    'language-markdown': {
                        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                        lookbehind: !0,
                        inside: B.languages.markdown
                    }
                }
            },
            string: {
                pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
                greedy: !0
            },
            number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
            boolean: /\b(?:false|true)\b/,
            variable: /\$[a-z_]\w*/i,
            directive: {
                pattern: /@[a-z_]\w*/i,
                alias: 'function'
            },
            'attr-name': {
                pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                greedy: !0
            },
            'atom-input': {
                pattern: /\b[A-Z]\w*Input\b/,
                alias: 'class-name'
            },
            scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
            constant: /\b[A-Z][A-Z_\d]*\b/,
            'class-name': {
                pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                lookbehind: !0
            },
            fragment: {
                pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: 'function'
            },
            'definition-mutation': {
                pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: 'function'
            },
            'definition-query': {
                pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: 'function'
            },
            keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
            operator: /[!=|&]|\.{3}/,
            'property-query': /\w+(?=\s*\()/,
            object: /\w+(?=\s*\{)/,
            punctuation: /[!(){}\[\]:=,]/,
            property: /\w+/
        }, B.hooks.add('after-tokenize', function(a) {
            if ('graphql' === a.language)
                for (var C = a.tokens.filter(function(a) {
                        return 'string' != typeof a && 'comment' !== a.type && 'scalar' !== a.type;
                    }), D = 0; D < C.length;) {
                    var E = C[D++];
                    if ('keyword' === E.type && 'mutation' === E.content) {
                        var F = [];
                        if (k([
                                'definition-mutation',
                                'punctuation'
                            ]) && '(' === j(1).content) {
                            D += 2;
                            var G = l(/^\($/, /^\)$/);
                            if (-1 === G)
                                continue;
                            for (; D < G; D++) {
                                var H = j(0);
                                'variable' === H.type && (m(H, 'variable-input'), F.push(H.content));
                            }
                            D = G + 1;
                        }
                        if (k([
                                'punctuation',
                                'property-query'
                            ]) && '{' === j(0).content && (D++, m(j(0), 'property-mutation'), 0 < F.length)) {
                            var G = l(/^\{$/, /^\}$/);
                            if (-1 !== G)
                                for (var H = I; H < G; H++) {
                                    var J = C[H];
                                    'variable' === J.type && 0 <= F.indexOf(J.content) && m(J, 'variable-input');
                                }
                        }
                    }
                }

            function C(a) {
                return b[c + a];
            }

            function D(a, b) {
                b = b || 0;
                for (var E = 0; E < a.length; E++) {
                    var F = C(E + b);
                    if (!F || F.type !== a[E])
                        return;
                }
                return 1;
            }

            function E(a, E) {
                for (var F = 1, G = H; G < b.length; G++) {
                    var I = b[G],
                        J = I.content;
                    if ('punctuation' === I.type && 'string' == typeof J)
                        if (a.test(J))
                            F++;
                        else if (E.test(J) && 0 == --F)
                        return G;
                }
                return -1;
            }

            function F(a, b) {
                var G = a.alias;
                G ? Array.isArray(G) || (a.alias = G = [G]) : a.alias = G = [], G.push(b);
            }
        }), B.languages.sql = {
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                lookbehind: !0
            },
            variable: [{
                    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
                    greedy: !0
                },
                /@[\w.$]+/
            ],
            string: {
                pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
                greedy: !0,
                lookbehind: !0
            },
            identifier: {
                pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
                greedy: !0,
                lookbehind: !0,
                inside: {
                    punctuation: /^`|`$/
                }
            },
            function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
            keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
            boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
            number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
            operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
            punctuation: /[;[\]()`,.]/
        },
        function(a) {
            var C = a.languages.javascript['template-string'],
                D = C.pattern.source,
                E = C.inside.interpolation,
                F = E.inside['interpolation-punctuation'],
                G = E.pattern.source;

            function H(C, E) {
                if (a.languages[C])
                    return {
                        pattern: RegExp('((?:' + E + ')\\s*)' + D),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            'template-punctuation': {
                                pattern: /^`|`$/,
                                alias: 'string'
                            },
                            'embedded-code': {
                                pattern: /[\s\S]+/,
                                alias: C
                            }
                        }
                    };
            }

            function I(C, D, E) {
                return C = {
                    code: C,
                    grammar: D,
                    language: E
                }, a.hooks.run('before-tokenize', C), C.tokens = a.tokenize(C.code, C.grammar), a.hooks.run('after-tokenize', C), C.tokens;
            }

            function J(C, D, H) {
                var K = a.tokenize(C, {
                        interpolation: {
                            pattern: RegExp(G),
                            lookbehind: !0
                        }
                    }),
                    L = 0,
                    M = {},
                    N = (K = I(K.map(function(a) {
                        if ('string' == typeof a)
                            return a;
                        var O, P;
                        for (a = a.content; - 1 !== C.indexOf((P = L++, O = '___' + H.toUpperCase() + '_' + P + '___')););
                        return M[O] = a, O;
                    }).join(''), D, H), Object.keys(M));
                return L = 0,
                    function C(D) {
                        for (var O = 0; O < D.length; O++) {
                            if (L >= N.length)
                                return;
                            var P, Q, R, S, T, U, V, W = D[O];
                            'string' == typeof W || 'string' == typeof W.content ? (P = N[L], -1 !== (V = (U = 'string' == typeof W ? W : W.content).indexOf(P)) && (++L, Q = U.substring(0, V), T = M[P], R = void 0, (S = {})['interpolation-punctuation'] = F, 3 === (S = a.tokenize(T, S)).length && ((R = [
                                1,
                                1
                            ]).push.apply(R, I(S[1], a.languages.javascript, 'javascript')), S.splice.apply(S, R)), R = new a.Token('interpolation', S, E.alias, T), S = U.substring(V + P.length), T = [], Q && T.push(Q), T.push(R), S && (C(U = [S]), T.push.apply(T, U)), 'string' == typeof W ? (D.splice.apply(D, [
                                O,
                                1
                            ].concat(T)), O += T.length - 1) : W.content = T)) : (V = W.content, Array.isArray(V) ? C(V) : C([V]));
                        }
                    }(K), new a.Token(H, K, 'language-' + H, C);
            }
            a.languages.javascript['template-string'] = [
                H('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),
                H('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
                H('svg', /\bsvg/.source),
                H('markdown', /\b(?:markdown|md)/.source),
                H('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
                H('sql', /\bsql/.source),
                C
            ].filter(Boolean);
            var K = {
                javascript: !0,
                js: !0,
                typescript: !0,
                ts: !0,
                jsx: !0,
                tsx: !0
            };

            function L(a) {
                return 'string' == typeof a ? a : Array.isArray(a) ? a.map(L).join('') : L(a.content);
            }
            a.hooks.add('after-tokenize', function(C) {
                C.language in K && function C(D) {
                    for (var M = 0, N = D.length; M < N; M++) {
                        var O, P, Q, R = D[M];
                        'string' != typeof R && (O = R.content, Array.isArray(O) ? 'template-string' === R.type ? (R = O[1], 3 === O.length && 'string' != typeof R && 'embedded-code' === R.type && (P = L(R), R = R.alias, R = Array.isArray(R) ? R[0] : R, Q = a.languages[R]) && (O[1] = J(P, Q, R))) : C(O) : 'string' != typeof O && C([O]));
                    }
                }(C.tokens);
            });
        }(B),
        function(a) {
            a.languages.typescript = a.languages.extend('javascript', {
                'class-name': {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
            }), a.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete a.languages.typescript.parameter, delete a.languages.typescript['literal-property'];
            var C = a.languages.extend('typescript', {});
            delete C['class-name'], a.languages.typescript['class-name'].inside = C, a.languages.insertBefore('typescript', 'function', {
                decorator: {
                    pattern: /@[$\w\xA0-\uFFFF]+/,
                    inside: {
                        at: {
                            pattern: /^@/,
                            alias: 'operator'
                        },
                        function: /^[\s\S]+/
                    }
                },
                'generic-function': {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                    greedy: !0,
                    inside: {
                        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                        generic: {
                            pattern: /<[\s\S]+/,
                            alias: 'class-name',
                            inside: C
                        }
                    }
                }
            }), a.languages.ts = a.languages.typescript;
        }(B),
        function(a) {
            var C = a.languages.javascript,
                D = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
                E = '(@(?:arg|argument|param|property)\\s+(?:' + D + '\\s+)?)';
            a.languages.jsdoc = a.languages.extend('javadoclike', {
                parameter: {
                    pattern: RegExp(E + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }
            }), a.languages.insertBefore('jsdoc', 'keyword', {
                'optional-parameter': {
                    pattern: RegExp(E + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
                    lookbehind: !0,
                    inside: {
                        parameter: {
                            pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                            lookbehind: !0,
                            inside: {
                                punctuation: /\./
                            }
                        },
                        code: {
                            pattern: /(=)[\s\S]*(?=\]$)/,
                            lookbehind: !0,
                            inside: C,
                            alias: 'language-javascript'
                        },
                        punctuation: /[=[\]]/
                    }
                },
                'class-name': [{
                        pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
                            return D;
                        })),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    },
                    {
                        pattern: RegExp('(@[a-z]+\\s+)' + D),
                        lookbehind: !0,
                        inside: {
                            string: C.string,
                            number: C.number,
                            boolean: C.boolean,
                            keyword: a.languages.typescript.keyword,
                            operator: /=>|\.\.\.|[&|?:*]/,
                            punctuation: /[.,;=<>{}()[\]]/
                        }
                    }
                ],
                example: {
                    pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                    lookbehind: !0,
                    inside: {
                        code: {
                            pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                            lookbehind: !0,
                            inside: C,
                            alias: 'language-javascript'
                        }
                    }
                }
            }), a.languages.javadoclike.addSupport('javascript', a.languages.jsdoc);
        }(B),
        function(a) {
            a.languages.flow = a.languages.extend('javascript', {}), a.languages.insertBefore('flow', 'keyword', {
                type: [{
                    pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
                    alias: 'class-name'
                }]
            }), a.languages.flow['function-variable'].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete a.languages.flow.parameter, a.languages.insertBefore('flow', 'operator', {
                'flow-punctuation': {
                    pattern: /\{\||\|\}/,
                    alias: 'punctuation'
                }
            }), Array.isArray(a.languages.flow.keyword) || (a.languages.flow.keyword = [a.languages.flow.keyword]), a.languages.flow.keyword.unshift({
                pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
                lookbehind: !0
            }, {
                pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
                lookbehind: !0
            });
        }(B), B.languages.n4js = B.languages.extend('javascript', {
            keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
        }), B.languages.insertBefore('n4js', 'constant', {
            annotation: {
                pattern: /@+\w+/,
                alias: 'operator'
            }
        }), B.languages.n4jsd = B.languages.n4js,
        function(a) {
            function C(a, C) {
                return RegExp(a.replace(/<ID>/g, function() {
                    return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
                }), C);
            }
            a.languages.insertBefore('javascript', 'function-variable', {
                'method-variable': {
                    pattern: RegExp('(\\.\\s*)' + a.languages.javascript['function-variable'].pattern.source),
                    lookbehind: !0,
                    alias: [
                        'function-variable',
                        'method',
                        'function',
                        'property-access'
                    ]
                }
            }), a.languages.insertBefore('javascript', 'function', {
                method: {
                    pattern: RegExp('(\\.\\s*)' + a.languages.javascript.function.source),
                    lookbehind: !0,
                    alias: [
                        'function',
                        'property-access'
                    ]
                }
            }), a.languages.insertBefore('javascript', 'constant', {
                'known-class-name': [{
                        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                        alias: 'class-name'
                    },
                    {
                        pattern: /\b(?:[A-Z]\w*)Error\b/,
                        alias: 'class-name'
                    }
                ]
            }), a.languages.insertBefore('javascript', 'keyword', {
                imports: {
                    pattern: C(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                    lookbehind: !0,
                    inside: a.languages.javascript
                },
                exports: {
                    pattern: C(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                    lookbehind: !0,
                    inside: a.languages.javascript
                }
            }), a.languages.javascript.keyword.unshift({
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: 'module'
            }, {
                pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow'
            }, {
                pattern: /\bnull\b/,
                alias: [
                    'null',
                    'nil'
                ]
            }, {
                pattern: /\bundefined\b/,
                alias: 'nil'
            }), a.languages.insertBefore('javascript', 'operator', {
                spread: {
                    pattern: /\.{3}/,
                    alias: 'operator'
                },
                arrow: {
                    pattern: /=>/,
                    alias: 'operator'
                }
            }), a.languages.insertBefore('javascript', 'punctuation', {
                'property-access': {
                    pattern: C(/(\.\s*)#?<ID>/.source),
                    lookbehind: !0
                },
                'maybe-class-name': {
                    pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                    lookbehind: !0
                },
                dom: {
                    pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                    alias: 'variable'
                },
                console: {
                    pattern: /\bconsole(?=\s*\.)/,
                    alias: 'class-name'
                }
            });
            for (var D = [
                    'function',
                    'function-variable',
                    'method',
                    'method-variable',
                    'property-access'
                ], E = 0; E < D.length; E++) {
                var F = D[E],
                    G = a.languages.javascript[F];
                F = (G = 'RegExp' === a.util.type(G) ? a.languages.javascript[F] = {
                    pattern: G
                } : G).inside || {};
                (G.inside = F)['maybe-class-name'] = /^[A-Z][\s\S]*/;
            }
        }(B),
        function(a) {
            var C = a.util.clone(a.languages.javascript),
                D = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                E = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                F = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

            function G(a, C) {
                return a = a.replace(/<S>/g, function() {
                    return D;
                }).replace(/<BRACES>/g, function() {
                    return E;
                }).replace(/<SPREAD>/g, function() {
                    return F;
                }), RegExp(a, C);
            }

            function H(C) {
                for (var I = [], J = 0; J < C.length; J++) {
                    var K = C[J],
                        L = !1;
                    'string' != typeof K && ('tag' === K.type && K.content[0] && 'tag' === K.content[0].type ? '</' === K.content[0].content[0].content ? 0 < I.length && I[I.length - 1].tagName === g(K.content[0].content[1]) && I.pop() : '/>' !== K.content[K.content.length - 1].content && I.push({
                        tagName: g(K.content[0].content[1]),
                        openedBraces: 0
                    }) : 0 < I.length && 'punctuation' === K.type && '{' === K.content ? I[I.length - 1].openedBraces++ : 0 < I.length && 0 < I[I.length - 1].openedBraces && 'punctuation' === K.type && '}' === K.content ? I[I.length - 1].openedBraces-- : L = !0), (L || 'string' == typeof K) && 0 < I.length && 0 === I[I.length - 1].openedBraces && (L = g(K), J < C.length - 1 && ('string' == typeof C[J + 1] || 'plain-text' === C[J + 1].type) && (L += g(C[J + 1]), C.splice(J + 1, 1)), 0 < J && ('string' == typeof C[J - 1] || 'plain-text' === C[J - 1].type) && (L = g(C[J - 1]) + L, C.splice(J - 1, 1), J--), C[J] = new a.Token('plain-text', L, null, L)), K.content && 'string' != typeof K.content && H(K.content);
                }
            }
            F = G(F).source, a.languages.jsx = a.languages.extend('markup', C), a.languages.jsx.tag.pattern = G(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, a.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, a.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, a.languages.jsx.tag.inside.comment = C.comment, a.languages.insertBefore('inside', 'attr-name', {
                spread: {
                    pattern: G(/<SPREAD>/.source),
                    inside: a.languages.jsx
                }
            }, a.languages.jsx.tag), a.languages.insertBefore('inside', 'special-attr', {
                script: {
                    pattern: G(/=<BRACES>/.source),
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
            var I = function(a) {
                return a ? 'string' == typeof a ? a : 'string' == typeof a.content ? a.content : a.content.map(I).join('') : '';
            };
            a.hooks.add('after-tokenize', function(a) {
                'jsx' !== a.language && 'tsx' !== a.language || H(a.tokens);
            });
        }(B),
        function(a) {
            var C = a.util.clone(a.languages.typescript);
            (C = (a.languages.tsx = a.languages.extend('jsx', C), delete a.languages.tsx.parameter, delete a.languages.tsx['literal-property'], a.languages.tsx.tag)).pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + C.pattern.source + ')', C.pattern.flags), C.lookbehind = !0;
        }(B), B.languages.swift = {
            comment: {
                pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
                lookbehind: !0,
                greedy: !0
            },
            'string-literal': [{
                    pattern: RegExp(/(^|[^"#])/.source + '(?:' + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + '|' + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ')' + /(?!["#])/.source),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                            lookbehind: !0,
                            inside: null
                        },
                        'interpolation-punctuation': {
                            pattern: /^\)|\\\($/,
                            alias: 'punctuation'
                        },
                        punctuation: /\\(?=[\r\n])/,
                        string: /[\s\S]+/
                    }
                },
                {
                    pattern: RegExp(/(^|[^"#])(#+)/.source + '(?:' + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + '|' + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ')\\2'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        interpolation: {
                            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                            lookbehind: !0,
                            inside: null
                        },
                        'interpolation-punctuation': {
                            pattern: /^\)|\\#+\($/,
                            alias: 'punctuation'
                        },
                        string: /[\s\S]+/
                    }
                }
            ],
            directive: {
                pattern: RegExp(/#/.source + '(?:' + /(?:elseif|if)\b/.source + '(?:[ \t]*' + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ')+|' + /(?:else|endif)\b/.source + ')'),
                alias: 'property',
                inside: {
                    'directive-name': /^#\w+/,
                    boolean: /\b(?:false|true)\b/,
                    number: /\b\d+(?:\.\d+)*\b/,
                    operator: /!|&&|\|\||[<>]=?/,
                    punctuation: /[(),]/
                }
            },
            literal: {
                pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
                alias: 'constant'
            },
            'other-directive': {
                pattern: /#\w+\b/,
                alias: 'property'
            },
            attribute: {
                pattern: /@\w+/,
                alias: 'atrule'
            },
            'function-definition': {
                pattern: /(\bfunc\s+)\w+/,
                lookbehind: !0,
                alias: 'function'
            },
            label: {
                pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
                lookbehind: !0,
                alias: 'important'
            },
            keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
            boolean: /\b(?:false|true)\b/,
            nil: {
                pattern: /\bnil\b/,
                alias: 'constant'
            },
            'short-argument': /\$\d+\b/,
            omit: {
                pattern: /\b_\b/,
                alias: 'keyword'
            },
            number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
            'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
            function: /\b[a-z_]\w*(?=\s*\()/i,
            constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
            operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
            punctuation: /[{}[\]();,.:\\]/
        }, B.languages.swift['string-literal'].forEach(function(a) {
            a.inside.interpolation.inside = B.languages.swift;
        }),
        function(a) {
            a.languages.kotlin = a.languages.extend('clike', {
                keyword: {
                    pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                    lookbehind: !0
                },
                function: [{
                        pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
                        greedy: !0
                    },
                    {
                        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
                        lookbehind: !0,
                        greedy: !0
                    }
                ],
                number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
                operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
            }), delete a.languages.kotlin['class-name'];
            var C = {
                'interpolation-punctuation': {
                    pattern: /^\$\{?|\}$/,
                    alias: 'punctuation'
                },
                expression: {
                    pattern: /[\s\S]+/,
                    inside: a.languages.kotlin
                }
            };
            a.languages.insertBefore('kotlin', 'string', {
                'string-literal': [{
                        pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                        alias: 'multiline',
                        inside: {
                            interpolation: {
                                pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                                inside: C
                            },
                            string: /[\s\S]+/
                        }
                    },
                    {
                        pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                        alias: 'singleline',
                        inside: {
                            interpolation: {
                                pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                                lookbehind: !0,
                                inside: C
                            },
                            string: /[\s\S]+/
                        }
                    }
                ],
                char: {
                    pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
                    greedy: !0
                }
            }), delete a.languages.kotlin.string, a.languages.insertBefore('kotlin', 'keyword', {
                annotation: {
                    pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                    alias: 'builtin'
                }
            }), a.languages.insertBefore('kotlin', 'function', {
                label: {
                    pattern: /\b\w+@|@\w+\b/,
                    alias: 'symbol'
                }
            }), a.languages.kt = a.languages.kotlin, a.languages.kts = a.languages.kotlin;
        }(B), B.languages.c = B.languages.extend('clike', {
            comment: {
                pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                greedy: !0
            },
            string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                greedy: !0
            },
            'class-name': {
                pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                lookbehind: !0
            },
            keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
            function: /\b[a-z_]\w*(?=\s*\()/i,
            number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
        }), B.languages.insertBefore('c', 'string', {
            char: {
                pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                greedy: !0
            }
        }), B.languages.insertBefore('c', 'string', {
            macro: {
                pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                greedy: !0,
                alias: 'property',
                inside: {
                    string: [{
                            pattern: /^(#\s*include\s*)<[^>]+>/,
                            lookbehind: !0
                        },
                        B.languages.c.string
                    ],
                    char: B.languages.c.char,
                    comment: B.languages.c.comment,
                    'macro-name': [{
                            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                            lookbehind: !0
                        },
                        {
                            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                            lookbehind: !0,
                            alias: 'function'
                        }
                    ],
                    directive: {
                        pattern: /^(#\s*)[a-z]+/,
                        lookbehind: !0,
                        alias: 'keyword'
                    },
                    'directive-hash': /^#/,
                    punctuation: /##|\\(?=[\r\n])/,
                    expression: {
                        pattern: /\S[\s\S]*/,
                        inside: B.languages.c
                    }
                }
            }
        }), B.languages.insertBefore('c', 'function', {
            constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
        }), delete B.languages.c.boolean, B.languages.objectivec = B.languages.extend('c', {
            string: {
                pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                greedy: !0
            },
            keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
        }), delete B.languages.objectivec['class-name'], B.languages.objc = B.languages.objectivec, B.languages.reason = B.languages.extend('clike', {
            string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                greedy: !0
            },
            'class-name': /\b[A-Z]\w*/,
            keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
            operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
        }), B.languages.insertBefore('reason', 'class-name', {
            char: {
                pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                greedy: !0
            },
            constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
            label: {
                pattern: /\b[a-z]\w*(?=::)/,
                alias: 'symbol'
            }
        }), delete B.languages.reason.function,
        function(a) {
            for (var C = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, D = 0; D < 2; D++)
                C = C.replace(/<self>/g, function() {
                    return C;
                });
            C = C.replace(/<self>/g, function() {
                return /[^\s\S]/.source;
            }), a.languages.rust = {
                comment: [{
                        pattern: RegExp(/(^|[^\\])/.source + C),
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
                    pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
                    greedy: !0
                },
                char: {
                    pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
                    greedy: !0
                },
                attribute: {
                    pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                    greedy: !0,
                    alias: 'attr-name',
                    inside: {
                        string: null
                    }
                },
                'closure-params': {
                    pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        'closure-punctuation': {
                            pattern: /^\||\|$/,
                            alias: 'punctuation'
                        },
                        rest: null
                    }
                },
                'lifetime-annotation': {
                    pattern: /'\w+/,
                    alias: 'symbol'
                },
                'fragment-specifier': {
                    pattern: /(\$\w+:)[a-z]+/,
                    lookbehind: !0,
                    alias: 'punctuation'
                },
                variable: /\$\w+/,
                'function-definition': {
                    pattern: /(\bfn\s+)\w+/,
                    lookbehind: !0,
                    alias: 'function'
                },
                'type-definition': {
                    pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                    lookbehind: !0,
                    alias: 'class-name'
                },
                'module-declaration': [{
                        pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                        lookbehind: !0,
                        alias: 'namespace'
                    },
                    {
                        pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                        lookbehind: !0,
                        alias: 'namespace',
                        inside: {
                            punctuation: /::/
                        }
                    }
                ],
                keyword: [
                    /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
                    /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
                ],
                function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                macro: {
                    pattern: /\b\w+!/,
                    alias: 'property'
                },
                constant: /\b[A-Z_][A-Z_\d]+\b/,
                'class-name': /\b[A-Z]\w*\b/,
                namespace: {
                    pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                    inside: {
                        punctuation: /::/
                    }
                },
                number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
                boolean: /\b(?:false|true)\b/,
                punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
                operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
            }, a.languages.rust['closure-params'].inside.rest = a.languages.rust, a.languages.rust.attribute.inside.string = a.languages.rust.string;
        }(B), B.languages.go = B.languages.extend('clike', {
            string: {
                pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
                lookbehind: !0,
                greedy: !0
            },
            keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
            boolean: /\b(?:_|false|iota|nil|true)\b/,
            number: [
                /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
                /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
                /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
            ],
            operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
            builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
        }), B.languages.insertBefore('go', 'string', {
            char: {
                pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
                greedy: !0
            }
        }), delete B.languages.go['class-name'],
        function(a) {
            var C = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                D = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
                    return C.source;
                });
            a.languages.cpp = a.languages.extend('c', {
                'class-name': [{
                        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
                            return C.source;
                        })),
                        lookbehind: !0
                    },
                    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
                    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
                    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
                ],
                keyword: C,
                number: {
                    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                    greedy: !0
                },
                operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                boolean: /\b(?:false|true)\b/
            }), a.languages.insertBefore('cpp', 'string', {
                module: {
                    pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
                        return D;
                    }) + ')'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        string: /^[<"][\s\S]+/,
                        operator: /:/,
                        punctuation: /\./
                    }
                },
                'raw-string': {
                    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                    alias: 'string',
                    greedy: !0
                }
            }), a.languages.insertBefore('cpp', 'keyword', {
                'generic-function': {
                    pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                    inside: {
                        function: /^\w+/,
                        generic: {
                            pattern: /<[\s\S]+/,
                            alias: 'class-name',
                            inside: a.languages.cpp
                        }
                    }
                }
            }), a.languages.insertBefore('cpp', 'operator', {
                'double-colon': {
                    pattern: /::/,
                    alias: 'punctuation'
                }
            }), a.languages.insertBefore('cpp', 'class-name', {
                'base-clause': {
                    pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: a.languages.extend('cpp', {})
                }
            }), a.languages.insertBefore('inside', 'double-colon', {
                'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
            }, a.languages.cpp['base-clause']);
        }(B), B.languages.python = {
            comment: {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                greedy: !0
            },
            'string-interpolation': {
                pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                        lookbehind: !0,
                        inside: {
                            'format-spec': {
                                pattern: /(:)[^:(){}]+(?=\}$)/,
                                lookbehind: !0
                            },
                            'conversion-option': {
                                pattern: /![sra](?=[:}]$)/,
                                alias: 'punctuation'
                            },
                            rest: null
                        }
                    },
                    string: /[\s\S]+/
                }
            },
            'triple-quoted-string': {
                pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
                greedy: !0,
                alias: 'string'
            },
            string: {
                pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                greedy: !0
            },
            function: {
                pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                lookbehind: !0
            },
            'class-name': {
                pattern: /(\bclass\s+)\w+/i,
                lookbehind: !0
            },
            decorator: {
                pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                lookbehind: !0,
                alias: [
                    'annotation',
                    'punctuation'
                ],
                inside: {
                    punctuation: /\./
                }
            },
            keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
            builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
            boolean: /\b(?:False|None|True)\b/,
            number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
            operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
            punctuation: /[{}[\];(),.:]/
        }, B.languages.python['string-interpolation'].inside.interpolation.inside.rest = B.languages.python, B.languages.py = B.languages.python, B.languages.json = {
            property: {
                pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
                lookbehind: !0,
                greedy: !0
            },
            string: {
                pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
                lookbehind: !0,
                greedy: !0
            },
            comment: {
                pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
                greedy: !0
            },
            number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
            punctuation: /[{}[\],]/,
            operator: /:/,
            boolean: /\b(?:false|true)\b/,
            null: {
                pattern: /\bnull\b/,
                alias: 'keyword'
            }
        }, B.languages.webmanifest = B.languages.json;
    var C = {};
    ((a, b) => {
        for (var D in b)
            n(a, D, {
                get: b[D],
                enumerable: !0
            });
    })(C, {
        dracula: () => D,
        duotoneDark: () => E,
        duotoneLight: () => F,
        github: () => G,
        gruvboxMaterialDark: () => X,
        gruvboxMaterialLight: () => Y,
        jettwaveDark: () => T,
        jettwaveLight: () => U,
        nightOwl: () => H,
        nightOwlLight: () => I,
        oceanicNext: () => L,
        okaidia: () => M,
        oneDark: () => V,
        oneLight: () => W,
        palenight: () => N,
        shadesOfPurple: () => O,
        synthwave84: () => P,
        ultramin: () => Q,
        vsDark: () => R,
        vsLight: () => S
    });
    var D = {
            plain: {
                color: '#F8F8F2',
                backgroundColor: '#282A36'
            },
            styles: [{
                    types: [
                        'prolog',
                        'constant',
                        'builtin'
                    ],
                    style: {
                        color: 'rgb(189, 147, 249)'
                    }
                },
                {
                    types: [
                        'inserted',
                        'function'
                    ],
                    style: {
                        color: 'rgb(80, 250, 123)'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        color: 'rgb(255, 85, 85)'
                    }
                },
                {
                    types: ['changed'],
                    style: {
                        color: 'rgb(255, 184, 108)'
                    }
                },
                {
                    types: [
                        'punctuation',
                        'symbol'
                    ],
                    style: {
                        color: 'rgb(248, 248, 242)'
                    }
                },
                {
                    types: [
                        'string',
                        'char',
                        'tag',
                        'selector'
                    ],
                    style: {
                        color: 'rgb(255, 121, 198)'
                    }
                },
                {
                    types: [
                        'keyword',
                        'variable'
                    ],
                    style: {
                        color: 'rgb(189, 147, 249)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: 'rgb(98, 114, 164)'
                    }
                },
                {
                    types: ['attr-name'],
                    style: {
                        color: 'rgb(241, 250, 140)'
                    }
                }
            ]
        },
        E = {
            plain: {
                backgroundColor: '#2a2734',
                color: '#9a86fd'
            },
            styles: [{
                    types: [
                        'comment',
                        'prolog',
                        'doctype',
                        'cdata',
                        'punctuation'
                    ],
                    style: {
                        color: '#6c6783'
                    }
                },
                {
                    types: ['namespace'],
                    style: {
                        opacity: 0.7
                    }
                },
                {
                    types: [
                        'tag',
                        'operator',
                        'number'
                    ],
                    style: {
                        color: '#e09142'
                    }
                },
                {
                    types: [
                        'property',
                        'function'
                    ],
                    style: {
                        color: '#9a86fd'
                    }
                },
                {
                    types: [
                        'tag-id',
                        'selector',
                        'atrule-id'
                    ],
                    style: {
                        color: '#eeebff'
                    }
                },
                {
                    types: ['attr-name'],
                    style: {
                        color: '#c4b9fe'
                    }
                },
                {
                    types: [
                        'boolean',
                        'string',
                        'entity',
                        'url',
                        'attr-value',
                        'keyword',
                        'control',
                        'directive',
                        'unit',
                        'statement',
                        'regex',
                        'atrule',
                        'placeholder',
                        'variable'
                    ],
                    style: {
                        color: '#ffcc99'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        textDecorationLine: 'line-through'
                    }
                },
                {
                    types: ['inserted'],
                    style: {
                        textDecorationLine: 'underline'
                    }
                },
                {
                    types: ['italic'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'important',
                        'bold'
                    ],
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    types: ['important'],
                    style: {
                        color: '#c4b9fe'
                    }
                }
            ]
        },
        F = {
            plain: {
                backgroundColor: '#faf8f5',
                color: '#728fcb'
            },
            styles: [{
                    types: [
                        'comment',
                        'prolog',
                        'doctype',
                        'cdata',
                        'punctuation'
                    ],
                    style: {
                        color: '#b6ad9a'
                    }
                },
                {
                    types: ['namespace'],
                    style: {
                        opacity: 0.7
                    }
                },
                {
                    types: [
                        'tag',
                        'operator',
                        'number'
                    ],
                    style: {
                        color: '#063289'
                    }
                },
                {
                    types: [
                        'property',
                        'function'
                    ],
                    style: {
                        color: '#b29762'
                    }
                },
                {
                    types: [
                        'tag-id',
                        'selector',
                        'atrule-id'
                    ],
                    style: {
                        color: '#2d2006'
                    }
                },
                {
                    types: ['attr-name'],
                    style: {
                        color: '#896724'
                    }
                },
                {
                    types: [
                        'boolean',
                        'string',
                        'entity',
                        'url',
                        'attr-value',
                        'keyword',
                        'control',
                        'directive',
                        'unit',
                        'statement',
                        'regex',
                        'atrule'
                    ],
                    style: {
                        color: '#728fcb'
                    }
                },
                {
                    types: [
                        'placeholder',
                        'variable'
                    ],
                    style: {
                        color: '#93abdc'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        textDecorationLine: 'line-through'
                    }
                },
                {
                    types: ['inserted'],
                    style: {
                        textDecorationLine: 'underline'
                    }
                },
                {
                    types: ['italic'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'important',
                        'bold'
                    ],
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    types: ['important'],
                    style: {
                        color: '#896724'
                    }
                }
            ]
        },
        G = {
            plain: {
                color: '#393A34',
                backgroundColor: '#f6f8fa'
            },
            styles: [{
                    types: [
                        'comment',
                        'prolog',
                        'doctype',
                        'cdata'
                    ],
                    style: {
                        color: '#999988',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['namespace'],
                    style: {
                        opacity: 0.7
                    }
                },
                {
                    types: [
                        'string',
                        'attr-value'
                    ],
                    style: {
                        color: '#e3116c'
                    }
                },
                {
                    types: [
                        'punctuation',
                        'operator'
                    ],
                    style: {
                        color: '#393A34'
                    }
                },
                {
                    types: [
                        'entity',
                        'url',
                        'symbol',
                        'number',
                        'boolean',
                        'variable',
                        'constant',
                        'property',
                        'regex',
                        'inserted'
                    ],
                    style: {
                        color: '#36acaa'
                    }
                },
                {
                    types: [
                        'atrule',
                        'keyword',
                        'attr-name',
                        'selector'
                    ],
                    style: {
                        color: '#00a4db'
                    }
                },
                {
                    types: [
                        'function',
                        'deleted',
                        'tag'
                    ],
                    style: {
                        color: '#d73a49'
                    }
                },
                {
                    types: ['function-variable'],
                    style: {
                        color: '#6f42c1'
                    }
                },
                {
                    types: [
                        'tag',
                        'selector',
                        'keyword'
                    ],
                    style: {
                        color: '#00009f'
                    }
                }
            ]
        },
        H = {
            plain: {
                color: '#d6deeb',
                backgroundColor: '#011627'
            },
            styles: [{
                    types: ['changed'],
                    style: {
                        color: 'rgb(162, 191, 252)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        color: 'rgba(239, 83, 80, 0.56)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'inserted',
                        'attr-name'
                    ],
                    style: {
                        color: 'rgb(173, 219, 103)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: 'rgb(99, 119, 119)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'string',
                        'url'
                    ],
                    style: {
                        color: 'rgb(173, 219, 103)'
                    }
                },
                {
                    types: ['variable'],
                    style: {
                        color: 'rgb(214, 222, 235)'
                    }
                },
                {
                    types: ['number'],
                    style: {
                        color: 'rgb(247, 140, 108)'
                    }
                },
                {
                    types: [
                        'builtin',
                        'char',
                        'constant',
                        'function'
                    ],
                    style: {
                        color: 'rgb(130, 170, 255)'
                    }
                },
                {
                    types: ['punctuation'],
                    style: {
                        color: 'rgb(199, 146, 234)'
                    }
                },
                {
                    types: [
                        'selector',
                        'doctype'
                    ],
                    style: {
                        color: 'rgb(199, 146, 234)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['class-name'],
                    style: {
                        color: 'rgb(255, 203, 139)'
                    }
                },
                {
                    types: [
                        'tag',
                        'operator',
                        'keyword'
                    ],
                    style: {
                        color: 'rgb(127, 219, 202)'
                    }
                },
                {
                    types: ['boolean'],
                    style: {
                        color: 'rgb(255, 88, 116)'
                    }
                },
                {
                    types: ['property'],
                    style: {
                        color: 'rgb(128, 203, 196)'
                    }
                },
                {
                    types: ['namespace'],
                    style: {
                        color: 'rgb(178, 204, 214)'
                    }
                }
            ]
        },
        I = {
            plain: {
                color: '#403f53',
                backgroundColor: '#FBFBFB'
            },
            styles: [{
                    types: ['changed'],
                    style: {
                        color: 'rgb(162, 191, 252)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        color: 'rgba(239, 83, 80, 0.56)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'inserted',
                        'attr-name'
                    ],
                    style: {
                        color: 'rgb(72, 118, 214)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: 'rgb(152, 159, 177)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'string',
                        'builtin',
                        'char',
                        'constant',
                        'url'
                    ],
                    style: {
                        color: 'rgb(72, 118, 214)'
                    }
                },
                {
                    types: ['variable'],
                    style: {
                        color: 'rgb(201, 103, 101)'
                    }
                },
                {
                    types: ['number'],
                    style: {
                        color: 'rgb(170, 9, 130)'
                    }
                },
                {
                    types: ['punctuation'],
                    style: {
                        color: 'rgb(153, 76, 195)'
                    }
                },
                {
                    types: [
                        'function',
                        'selector',
                        'doctype'
                    ],
                    style: {
                        color: 'rgb(153, 76, 195)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['class-name'],
                    style: {
                        color: 'rgb(17, 17, 17)'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: 'rgb(153, 76, 195)'
                    }
                },
                {
                    types: [
                        'operator',
                        'property',
                        'keyword',
                        'namespace'
                    ],
                    style: {
                        color: 'rgb(12, 150, 155)'
                    }
                },
                {
                    types: ['boolean'],
                    style: {
                        color: 'rgb(188, 84, 84)'
                    }
                }
            ]
        },
        J = '#c5a5c5',
        K = '#8dc891',
        L = {
            plain: {
                backgroundColor: '#282c34',
                color: '#ffffff'
            },
            styles: [{
                    types: ['attr-name'],
                    style: {
                        color: J
                    }
                },
                {
                    types: ['attr-value'],
                    style: {
                        color: K
                    }
                },
                {
                    types: [
                        'comment',
                        'block-comment',
                        'prolog',
                        'doctype',
                        'cdata',
                        'shebang'
                    ],
                    style: {
                        color: '#999999'
                    }
                },
                {
                    types: [
                        'property',
                        'number',
                        'function-name',
                        'constant',
                        'symbol',
                        'deleted'
                    ],
                    style: {
                        color: '#5a9bcf'
                    }
                },
                {
                    types: ['boolean'],
                    style: {
                        color: '#ff8b50'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: '#fc929e'
                    }
                },
                {
                    types: ['string'],
                    style: {
                        color: K
                    }
                },
                {
                    types: ['punctuation'],
                    style: {
                        color: K
                    }
                },
                {
                    types: [
                        'selector',
                        'char',
                        'builtin',
                        'inserted'
                    ],
                    style: {
                        color: '#D8DEE9'
                    }
                },
                {
                    types: ['function'],
                    style: {
                        color: '#79b6f2'
                    }
                },
                {
                    types: [
                        'operator',
                        'entity',
                        'url',
                        'variable'
                    ],
                    style: {
                        color: '#d7deea'
                    }
                },
                {
                    types: ['keyword'],
                    style: {
                        color: J
                    }
                },
                {
                    types: [
                        'atrule',
                        'class-name'
                    ],
                    style: {
                        color: '#FAC863'
                    }
                },
                {
                    types: ['important'],
                    style: {
                        fontWeight: '400'
                    }
                },
                {
                    types: ['bold'],
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    types: ['italic'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['namespace'],
                    style: {
                        opacity: 0.7
                    }
                }
            ]
        },
        M = {
            plain: {
                color: '#f8f8f2',
                backgroundColor: '#272822'
            },
            styles: [{
                    types: ['changed'],
                    style: {
                        color: 'rgb(162, 191, 252)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        color: '#f92672',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['inserted'],
                    style: {
                        color: 'rgb(173, 219, 103)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: '#8292a2',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'string',
                        'url'
                    ],
                    style: {
                        color: '#a6e22e'
                    }
                },
                {
                    types: ['variable'],
                    style: {
                        color: '#f8f8f2'
                    }
                },
                {
                    types: ['number'],
                    style: {
                        color: '#ae81ff'
                    }
                },
                {
                    types: [
                        'builtin',
                        'char',
                        'constant',
                        'function',
                        'class-name'
                    ],
                    style: {
                        color: '#e6db74'
                    }
                },
                {
                    types: ['punctuation'],
                    style: {
                        color: '#f8f8f2'
                    }
                },
                {
                    types: [
                        'selector',
                        'doctype'
                    ],
                    style: {
                        color: '#a6e22e',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'tag',
                        'operator',
                        'keyword'
                    ],
                    style: {
                        color: '#66d9ef'
                    }
                },
                {
                    types: ['boolean'],
                    style: {
                        color: '#ae81ff'
                    }
                },
                {
                    types: ['namespace'],
                    style: {
                        color: 'rgb(178, 204, 214)',
                        opacity: 0.7
                    }
                },
                {
                    types: [
                        'tag',
                        'property'
                    ],
                    style: {
                        color: '#f92672'
                    }
                },
                {
                    types: ['attr-name'],
                    style: {
                        color: '#a6e22e !important'
                    }
                },
                {
                    types: ['doctype'],
                    style: {
                        color: '#8292a2'
                    }
                },
                {
                    types: ['rule'],
                    style: {
                        color: '#e6db74'
                    }
                }
            ]
        },
        N = {
            plain: {
                color: '#bfc7d5',
                backgroundColor: '#292d3e'
            },
            styles: [{
                    types: ['comment'],
                    style: {
                        color: 'rgb(105, 112, 152)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'string',
                        'inserted'
                    ],
                    style: {
                        color: 'rgb(195, 232, 141)'
                    }
                },
                {
                    types: ['number'],
                    style: {
                        color: 'rgb(247, 140, 108)'
                    }
                },
                {
                    types: [
                        'builtin',
                        'char',
                        'constant',
                        'function'
                    ],
                    style: {
                        color: 'rgb(130, 170, 255)'
                    }
                },
                {
                    types: [
                        'punctuation',
                        'selector'
                    ],
                    style: {
                        color: 'rgb(199, 146, 234)'
                    }
                },
                {
                    types: ['variable'],
                    style: {
                        color: 'rgb(191, 199, 213)'
                    }
                },
                {
                    types: [
                        'class-name',
                        'attr-name'
                    ],
                    style: {
                        color: 'rgb(255, 203, 107)'
                    }
                },
                {
                    types: [
                        'tag',
                        'deleted'
                    ],
                    style: {
                        color: 'rgb(255, 85, 114)'
                    }
                },
                {
                    types: ['operator'],
                    style: {
                        color: 'rgb(137, 221, 255)'
                    }
                },
                {
                    types: ['boolean'],
                    style: {
                        color: 'rgb(255, 88, 116)'
                    }
                },
                {
                    types: ['keyword'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['doctype'],
                    style: {
                        color: 'rgb(199, 146, 234)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['namespace'],
                    style: {
                        color: 'rgb(178, 204, 214)'
                    }
                },
                {
                    types: ['url'],
                    style: {
                        color: 'rgb(221, 221, 221)'
                    }
                }
            ]
        },
        O = {
            plain: {
                color: '#9EFEFF',
                backgroundColor: '#2D2A55'
            },
            styles: [{
                    types: ['changed'],
                    style: {
                        color: 'rgb(255, 238, 128)'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        color: 'rgba(239, 83, 80, 0.56)'
                    }
                },
                {
                    types: ['inserted'],
                    style: {
                        color: 'rgb(173, 219, 103)'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: 'rgb(179, 98, 255)',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['punctuation'],
                    style: {
                        color: 'rgb(255, 255, 255)'
                    }
                },
                {
                    types: ['constant'],
                    style: {
                        color: 'rgb(255, 98, 140)'
                    }
                },
                {
                    types: [
                        'string',
                        'url'
                    ],
                    style: {
                        color: 'rgb(165, 255, 144)'
                    }
                },
                {
                    types: ['variable'],
                    style: {
                        color: 'rgb(255, 238, 128)'
                    }
                },
                {
                    types: [
                        'number',
                        'boolean'
                    ],
                    style: {
                        color: 'rgb(255, 98, 140)'
                    }
                },
                {
                    types: ['attr-name'],
                    style: {
                        color: 'rgb(255, 180, 84)'
                    }
                },
                {
                    types: [
                        'keyword',
                        'operator',
                        'property',
                        'namespace',
                        'tag',
                        'selector',
                        'doctype'
                    ],
                    style: {
                        color: 'rgb(255, 157, 0)'
                    }
                },
                {
                    types: [
                        'builtin',
                        'char',
                        'constant',
                        'function',
                        'class-name'
                    ],
                    style: {
                        color: 'rgb(250, 208, 0)'
                    }
                }
            ]
        },
        P = {
            plain: {
                backgroundColor: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
                backgroundImage: '#34294f',
                color: '#f92aad',
                textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3'
            },
            styles: [{
                    types: [
                        'comment',
                        'block-comment',
                        'prolog',
                        'doctype',
                        'cdata'
                    ],
                    style: {
                        color: '#495495',
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['punctuation'],
                    style: {
                        color: '#ccc'
                    }
                },
                {
                    types: [
                        'tag',
                        'attr-name',
                        'namespace',
                        'number',
                        'unit',
                        'hexcode',
                        'deleted'
                    ],
                    style: {
                        color: '#e2777a'
                    }
                },
                {
                    types: [
                        'property',
                        'selector'
                    ],
                    style: {
                        color: '#72f1b8',
                        textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475'
                    }
                },
                {
                    types: ['function-name'],
                    style: {
                        color: '#6196cc'
                    }
                },
                {
                    types: [
                        'boolean',
                        'selector-id',
                        'function'
                    ],
                    style: {
                        color: '#fdfdfd',
                        textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975'
                    }
                },
                {
                    types: [
                        'class-name',
                        'maybe-class-name',
                        'builtin'
                    ],
                    style: {
                        color: '#fff5f6',
                        textShadow: '0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75'
                    }
                },
                {
                    types: [
                        'constant',
                        'symbol'
                    ],
                    style: {
                        color: '#f92aad',
                        textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3'
                    }
                },
                {
                    types: [
                        'important',
                        'atrule',
                        'keyword',
                        'selector-class'
                    ],
                    style: {
                        color: '#f4eee4',
                        textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575'
                    }
                },
                {
                    types: [
                        'string',
                        'char',
                        'attr-value',
                        'regex',
                        'variable'
                    ],
                    style: {
                        color: '#f87c32'
                    }
                },
                {
                    types: ['parameter'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'entity',
                        'url'
                    ],
                    style: {
                        color: '#67cdcc'
                    }
                },
                {
                    types: ['operator'],
                    style: {
                        color: 'ffffffee'
                    }
                },
                {
                    types: [
                        'important',
                        'bold'
                    ],
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    types: ['italic'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: ['entity'],
                    style: {
                        cursor: 'help'
                    }
                },
                {
                    types: ['inserted'],
                    style: {
                        color: 'green'
                    }
                }
            ]
        },
        Q = {
            plain: {
                color: '#282a2e',
                backgroundColor: '#ffffff'
            },
            styles: [{
                    types: ['comment'],
                    style: {
                        color: 'rgb(197, 200, 198)'
                    }
                },
                {
                    types: [
                        'string',
                        'number',
                        'builtin',
                        'variable'
                    ],
                    style: {
                        color: 'rgb(150, 152, 150)'
                    }
                },
                {
                    types: [
                        'class-name',
                        'function',
                        'tag',
                        'attr-name'
                    ],
                    style: {
                        color: 'rgb(40, 42, 46)'
                    }
                }
            ]
        },
        R = {
            plain: {
                color: '#9CDCFE',
                backgroundColor: '#1E1E1E'
            },
            styles: [{
                    types: ['prolog'],
                    style: {
                        color: 'rgb(0, 0, 128)'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: 'rgb(106, 153, 85)'
                    }
                },
                {
                    types: [
                        'builtin',
                        'changed',
                        'keyword',
                        'interpolation-punctuation'
                    ],
                    style: {
                        color: 'rgb(86, 156, 214)'
                    }
                },
                {
                    types: [
                        'number',
                        'inserted'
                    ],
                    style: {
                        color: 'rgb(181, 206, 168)'
                    }
                },
                {
                    types: ['constant'],
                    style: {
                        color: 'rgb(100, 102, 149)'
                    }
                },
                {
                    types: [
                        'attr-name',
                        'variable'
                    ],
                    style: {
                        color: 'rgb(156, 220, 254)'
                    }
                },
                {
                    types: [
                        'deleted',
                        'string',
                        'attr-value',
                        'template-punctuation'
                    ],
                    style: {
                        color: 'rgb(206, 145, 120)'
                    }
                },
                {
                    types: ['selector'],
                    style: {
                        color: 'rgb(215, 186, 125)'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: 'rgb(78, 201, 176)'
                    }
                },
                {
                    types: ['tag'],
                    languages: ['markup'],
                    style: {
                        color: 'rgb(86, 156, 214)'
                    }
                },
                {
                    types: [
                        'punctuation',
                        'operator'
                    ],
                    style: {
                        color: 'rgb(212, 212, 212)'
                    }
                },
                {
                    types: ['punctuation'],
                    languages: ['markup'],
                    style: {
                        color: '#808080'
                    }
                },
                {
                    types: ['function'],
                    style: {
                        color: 'rgb(220, 220, 170)'
                    }
                },
                {
                    types: ['class-name'],
                    style: {
                        color: 'rgb(78, 201, 176)'
                    }
                },
                {
                    types: ['char'],
                    style: {
                        color: 'rgb(209, 105, 105)'
                    }
                }
            ]
        },
        S = {
            plain: {
                color: '#000000',
                backgroundColor: '#ffffff'
            },
            styles: [{
                    types: ['comment'],
                    style: {
                        color: 'rgb(0, 128, 0)'
                    }
                },
                {
                    types: ['builtin'],
                    style: {
                        color: 'rgb(0, 112, 193)'
                    }
                },
                {
                    types: [
                        'number',
                        'variable',
                        'inserted'
                    ],
                    style: {
                        color: 'rgb(9, 134, 88)'
                    }
                },
                {
                    types: ['operator'],
                    style: {
                        color: 'rgb(0, 0, 0)'
                    }
                },
                {
                    types: [
                        'constant',
                        'char'
                    ],
                    style: {
                        color: 'rgb(129, 31, 63)'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: 'rgb(128, 0, 0)'
                    }
                },
                {
                    types: ['attr-name'],
                    style: {
                        color: 'rgb(255, 0, 0)'
                    }
                },
                {
                    types: [
                        'deleted',
                        'string'
                    ],
                    style: {
                        color: 'rgb(163, 21, 21)'
                    }
                },
                {
                    types: [
                        'changed',
                        'punctuation'
                    ],
                    style: {
                        color: 'rgb(4, 81, 165)'
                    }
                },
                {
                    types: [
                        'function',
                        'keyword'
                    ],
                    style: {
                        color: 'rgb(0, 0, 255)'
                    }
                },
                {
                    types: ['class-name'],
                    style: {
                        color: 'rgb(38, 127, 153)'
                    }
                }
            ]
        },
        T = {
            plain: {
                color: '#f8fafc',
                backgroundColor: '#011627'
            },
            styles: [{
                    types: ['prolog'],
                    style: {
                        color: '#000080'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: '#6A9955'
                    }
                },
                {
                    types: [
                        'builtin',
                        'changed',
                        'keyword',
                        'interpolation-punctuation'
                    ],
                    style: {
                        color: '#569CD6'
                    }
                },
                {
                    types: [
                        'number',
                        'inserted'
                    ],
                    style: {
                        color: '#B5CEA8'
                    }
                },
                {
                    types: ['constant'],
                    style: {
                        color: '#f8fafc'
                    }
                },
                {
                    types: [
                        'attr-name',
                        'variable'
                    ],
                    style: {
                        color: '#9CDCFE'
                    }
                },
                {
                    types: [
                        'deleted',
                        'string',
                        'attr-value',
                        'template-punctuation'
                    ],
                    style: {
                        color: '#cbd5e1'
                    }
                },
                {
                    types: ['selector'],
                    style: {
                        color: '#D7BA7D'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: '#0ea5e9'
                    }
                },
                {
                    types: ['tag'],
                    languages: ['markup'],
                    style: {
                        color: '#0ea5e9'
                    }
                },
                {
                    types: [
                        'punctuation',
                        'operator'
                    ],
                    style: {
                        color: '#D4D4D4'
                    }
                },
                {
                    types: ['punctuation'],
                    languages: ['markup'],
                    style: {
                        color: '#808080'
                    }
                },
                {
                    types: ['function'],
                    style: {
                        color: '#7dd3fc'
                    }
                },
                {
                    types: ['class-name'],
                    style: {
                        color: '#0ea5e9'
                    }
                },
                {
                    types: ['char'],
                    style: {
                        color: '#D16969'
                    }
                }
            ]
        },
        U = {
            plain: {
                color: '#0f172a',
                backgroundColor: '#f1f5f9'
            },
            styles: [{
                    types: ['prolog'],
                    style: {
                        color: '#000080'
                    }
                },
                {
                    types: ['comment'],
                    style: {
                        color: '#6A9955'
                    }
                },
                {
                    types: [
                        'builtin',
                        'changed',
                        'keyword',
                        'interpolation-punctuation'
                    ],
                    style: {
                        color: '#0c4a6e'
                    }
                },
                {
                    types: [
                        'number',
                        'inserted'
                    ],
                    style: {
                        color: '#B5CEA8'
                    }
                },
                {
                    types: ['constant'],
                    style: {
                        color: '#0f172a'
                    }
                },
                {
                    types: [
                        'attr-name',
                        'variable'
                    ],
                    style: {
                        color: '#0c4a6e'
                    }
                },
                {
                    types: [
                        'deleted',
                        'string',
                        'attr-value',
                        'template-punctuation'
                    ],
                    style: {
                        color: '#64748b'
                    }
                },
                {
                    types: ['selector'],
                    style: {
                        color: '#D7BA7D'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: '#0ea5e9'
                    }
                },
                {
                    types: ['tag'],
                    languages: ['markup'],
                    style: {
                        color: '#0ea5e9'
                    }
                },
                {
                    types: [
                        'punctuation',
                        'operator'
                    ],
                    style: {
                        color: '#475569'
                    }
                },
                {
                    types: ['punctuation'],
                    languages: ['markup'],
                    style: {
                        color: '#808080'
                    }
                },
                {
                    types: ['function'],
                    style: {
                        color: '#0e7490'
                    }
                },
                {
                    types: ['class-name'],
                    style: {
                        color: '#0ea5e9'
                    }
                },
                {
                    types: ['char'],
                    style: {
                        color: '#D16969'
                    }
                }
            ]
        },
        V = {
            plain: {
                backgroundColor: 'hsl(220, 13%, 18%)',
                color: 'hsl(220, 14%, 71%)',
                textShadow: '0 1px rgba(0, 0, 0, 0.3)'
            },
            styles: [{
                    types: [
                        'comment',
                        'prolog',
                        'cdata'
                    ],
                    style: {
                        color: 'hsl(220, 10%, 40%)'
                    }
                },
                {
                    types: [
                        'doctype',
                        'punctuation',
                        'entity'
                    ],
                    style: {
                        color: 'hsl(220, 14%, 71%)'
                    }
                },
                {
                    types: [
                        'attr-name',
                        'class-name',
                        'maybe-class-name',
                        'boolean',
                        'constant',
                        'number',
                        'atrule'
                    ],
                    style: {
                        color: 'hsl(29, 54%, 61%)'
                    }
                },
                {
                    types: ['keyword'],
                    style: {
                        color: 'hsl(286, 60%, 67%)'
                    }
                },
                {
                    types: [
                        'property',
                        'tag',
                        'symbol',
                        'deleted',
                        'important'
                    ],
                    style: {
                        color: 'hsl(355, 65%, 65%)'
                    }
                },
                {
                    types: [
                        'selector',
                        'string',
                        'char',
                        'builtin',
                        'inserted',
                        'regex',
                        'attr-value'
                    ],
                    style: {
                        color: 'hsl(95, 38%, 62%)'
                    }
                },
                {
                    types: [
                        'variable',
                        'operator',
                        'function'
                    ],
                    style: {
                        color: 'hsl(207, 82%, 66%)'
                    }
                },
                {
                    types: ['url'],
                    style: {
                        color: 'hsl(187, 47%, 55%)'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        textDecorationLine: 'line-through'
                    }
                },
                {
                    types: ['inserted'],
                    style: {
                        textDecorationLine: 'underline'
                    }
                },
                {
                    types: ['italic'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'important',
                        'bold'
                    ],
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    types: ['important'],
                    style: {
                        color: 'hsl(220, 14%, 71%)'
                    }
                }
            ]
        },
        W = {
            plain: {
                backgroundColor: 'hsl(230, 1%, 98%)',
                color: 'hsl(230, 8%, 24%)'
            },
            styles: [{
                    types: [
                        'comment',
                        'prolog',
                        'cdata'
                    ],
                    style: {
                        color: 'hsl(230, 4%, 64%)'
                    }
                },
                {
                    types: [
                        'doctype',
                        'punctuation',
                        'entity'
                    ],
                    style: {
                        color: 'hsl(230, 8%, 24%)'
                    }
                },
                {
                    types: [
                        'attr-name',
                        'class-name',
                        'boolean',
                        'constant',
                        'number',
                        'atrule'
                    ],
                    style: {
                        color: 'hsl(35, 99%, 36%)'
                    }
                },
                {
                    types: ['keyword'],
                    style: {
                        color: 'hsl(301, 63%, 40%)'
                    }
                },
                {
                    types: [
                        'property',
                        'tag',
                        'symbol',
                        'deleted',
                        'important'
                    ],
                    style: {
                        color: 'hsl(5, 74%, 59%)'
                    }
                },
                {
                    types: [
                        'selector',
                        'string',
                        'char',
                        'builtin',
                        'inserted',
                        'regex',
                        'attr-value',
                        'punctuation'
                    ],
                    style: {
                        color: 'hsl(119, 34%, 47%)'
                    }
                },
                {
                    types: [
                        'variable',
                        'operator',
                        'function'
                    ],
                    style: {
                        color: 'hsl(221, 87%, 60%)'
                    }
                },
                {
                    types: ['url'],
                    style: {
                        color: 'hsl(198, 99%, 37%)'
                    }
                },
                {
                    types: ['deleted'],
                    style: {
                        textDecorationLine: 'line-through'
                    }
                },
                {
                    types: ['inserted'],
                    style: {
                        textDecorationLine: 'underline'
                    }
                },
                {
                    types: ['italic'],
                    style: {
                        fontStyle: 'italic'
                    }
                },
                {
                    types: [
                        'important',
                        'bold'
                    ],
                    style: {
                        fontWeight: 'bold'
                    }
                },
                {
                    types: ['important'],
                    style: {
                        color: 'hsl(230, 8%, 24%)'
                    }
                }
            ]
        },
        X = {
            plain: {
                color: '#ebdbb2',
                backgroundColor: '#292828'
            },
            styles: [{
                    types: [
                        'imports',
                        'class-name',
                        'maybe-class-name',
                        'constant',
                        'doctype',
                        'builtin',
                        'function'
                    ],
                    style: {
                        color: '#d8a657'
                    }
                },
                {
                    types: ['property-access'],
                    style: {
                        color: '#7daea3'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: '#e78a4e'
                    }
                },
                {
                    types: [
                        'attr-name',
                        'char',
                        'url',
                        'regex'
                    ],
                    style: {
                        color: '#a9b665'
                    }
                },
                {
                    types: [
                        'attr-value',
                        'string'
                    ],
                    style: {
                        color: '#89b482'
                    }
                },
                {
                    types: [
                        'comment',
                        'prolog',
                        'cdata',
                        'operator',
                        'inserted'
                    ],
                    style: {
                        color: '#a89984'
                    }
                },
                {
                    types: [
                        'delimiter',
                        'boolean',
                        'keyword',
                        'selector',
                        'important',
                        'atrule',
                        'property',
                        'variable',
                        'deleted'
                    ],
                    style: {
                        color: '#ea6962'
                    }
                },
                {
                    types: [
                        'entity',
                        'number',
                        'symbol'
                    ],
                    style: {
                        color: '#d3869b'
                    }
                }
            ]
        },
        Y = {
            plain: {
                color: '#654735',
                backgroundColor: '#f9f5d7'
            },
            styles: [{
                    types: [
                        'delimiter',
                        'boolean',
                        'keyword',
                        'selector',
                        'important',
                        'atrule',
                        'property',
                        'variable',
                        'deleted'
                    ],
                    style: {
                        color: '#af2528'
                    }
                },
                {
                    types: [
                        'imports',
                        'class-name',
                        'maybe-class-name',
                        'constant',
                        'doctype',
                        'builtin'
                    ],
                    style: {
                        color: '#b4730e'
                    }
                },
                {
                    types: [
                        'string',
                        'attr-value'
                    ],
                    style: {
                        color: '#477a5b'
                    }
                },
                {
                    types: ['property-access'],
                    style: {
                        color: '#266b79'
                    }
                },
                {
                    types: [
                        'function',
                        'attr-name',
                        'char',
                        'url'
                    ],
                    style: {
                        color: '#72761e'
                    }
                },
                {
                    types: ['tag'],
                    style: {
                        color: '#b94c07'
                    }
                },
                {
                    types: [
                        'comment',
                        'prolog',
                        'cdata',
                        'operator',
                        'inserted'
                    ],
                    style: {
                        color: '#a89984'
                    }
                },
                {
                    types: [
                        'entity',
                        'number',
                        'symbol'
                    ],
                    style: {
                        color: '#924f79'
                    }
                }
            ]
        },
        Z = (a, b) => {
            const {
                plain: $
            } = _, ab = _.styles.reduce((_, $) => {
                const {
                    languages: bb,
                    style: cb
                } = db;
                return bb && !bb.includes(b) || db.types.forEach(b => {
                    const eb = x(x({}, _[b]), cb);
                    _[b] = eb;
                }), _;
            }, {});
            return ab.root = $, ab.plain = y(x({}, $), {
                backgroundColor: void 0
            }), ab;
        },
        $ = /\r\n|\r|\n/,
        _ = a => {
            0 === a.length ? a.push({
                types: ['plain'],
                content: '\n',
                empty: !0
            }) : 1 === a.length && '' === a[0].content && (a[0].content = '\n', a[0].empty = !0);
        },
        ab = (a, b) => {
            const bb = a.length;
            return bb > 0 && a[bb - 1] === b ? a : a.concat(b);
        },
        bb = a => {
            const cb = [
                    []
                ],
                db = [a],
                eb = [0],
                fb = [a.length];
            let gb = 0,
                hb = 0,
                ib = [];
            const jb = [ib];
            for (; hb > -1;) {
                for (;
                    (gb = eb[hb]++) < fb[hb];) {
                    let kb, lb = cb[hb];
                    const mb = db[hb][gb];
                    if ('string' == typeof mb ? (lb = hb > 0 ? lb : ['plain'], kb = mb) : (lb = ab(lb, mb.type), mb.alias && (lb = ab(lb, mb.alias)), kb = mb.content), 'string' != typeof kb) {
                        hb++, cb.push(lb), db.push(kb), eb.push(0), fb.push(kb.length);
                        continue;
                    }
                    const nb = kb.split($),
                        ob = nb.length;
                    ib.push({
                        types: lb,
                        content: nb[0]
                    });
                    for (let pb = 1; pb < ob; pb++)
                        _(ib), jb.push(ib = []), ib.push({
                            types: lb,
                            content: nb[pb]
                        });
                }
                hb--, cb.pop(), db.pop(), eb.pop(), fb.pop();
            }
            return _(ib), jb;
        },
        cb = ({
            children: db,
            language: eb,
            code: fb,
            theme: gb,
            prism: hb
        }) => {
            const ib = eb.toLowerCase(),
                jb = ((db, eb) => {
                    const [kb, lb] = (0, k.useState)(Z(eb, db)), mb = (0, k.useRef)(), nb = (0, k.useRef)();
                    return (0, k.useEffect)(() => {
                        eb === mb.current && db === nb.current || (mb.current = eb, nb.current = db, lb(Z(eb, db)));
                    }, [
                        db,
                        eb
                    ]), kb;
                })(ib, gb),
                kb = (db => (0, k.useCallback)(eb => {
                    var lb = mb,
                        {
                            className: nb,
                            style: ob,
                            line: pb
                        } = qb,
                        rb = z(qb, [
                            'className',
                            'style',
                            'line'
                        ]);
                    const sb = y(x({}, rb), {
                        className: (0, l.default)('token-line', nb)
                    });
                    return 'object' == typeof db && 'plain' in db && (sb.style = db.plain), 'object' == typeof ob && (sb.style = x(x({}, sb.style || {}), ob)), sb;
                }, [db]))(jb),
                lb = (db => {
                    const mb = (0, k.useCallback)(({
                        types: nb,
                        empty: ob
                    }) => {
                        if (null != db)
                            return 1 === nb.length && 'plain' === nb[0] ? null != ob ? {
                                display: 'inline-block'
                            } : void 0 : 1 === nb.length && null != ob ? db[nb[0]] : Object.assign(null != ob ? {
                                display: 'inline-block'
                            } : {}, ...nb.map(nb => db[nb]));
                    }, [db]);
                    return (0, k.useCallback)(db => {
                        var pb = qb,
                            {
                                token: rb,
                                className: sb,
                                style: tb
                            } = ub,
                            vb = z(ub, [
                                'token',
                                'className',
                                'style'
                            ]);
                        const wb = y(x({}, vb), {
                            className: (0, l.default)('token', ...rb.types, sb),
                            children: rb.content,
                            style: nb(rb)
                        });
                        return null != tb && (wb.style = x(x({}, wb.style || {}), tb)), wb;
                    }, [nb]);
                })(jb),
                mb = (({
                    prism: nb,
                    code: ob,
                    grammar: pb,
                    language: qb
                }) => {
                    const rb = (0, k.useRef)(nb);
                    return (0, k.useMemo)(() => {
                        if (null == pb)
                            return bb([ob]);
                        const sb = {
                            code: ob,
                            grammar: pb,
                            language: qb,
                            tokens: []
                        };
                        return rb.current.hooks.run('before-tokenize', sb), sb.tokens = rb.current.tokenize(ob, pb), rb.current.hooks.run('after-tokenize', sb), bb(sb.tokens);
                    }, [
                        ob,
                        pb,
                        qb
                    ]);
                })({
                    prism: hb,
                    language: ib,
                    code: pb,
                    grammar: hb.languages[ib]
                });
            return nb({
                tokens: mb,
                className: `prism-code language-${ ib }`,
                style: null != jb ? jb.root : {},
                getLineProps: kb,
                getTokenProps: lb
            });
        },
        ib = db => (0, k.createElement)(cb, y(x({}, db), {
            prism: db.prism || B,
            theme: db.theme || R,
            code: db.code,
            language: db.language
        }));
}), c.register('q2s5G', function(a, c) {
    function d(a) {
        var e, f, g = '';
        if ('string' == typeof a || 'number' == typeof a)
            g += a;
        else if ('object' == typeof a)
            if (Array.isArray(a)) {
                var h = a.length;
                for (e = 0; e < h; e++)
                    a[e] && (f = d(a[e])) && (g && (g += ' '), g += f);
            } else
                for (f in a)
                    a[f] && (g && (g += ' '), g += f);
        return g;
    }
    b(a.exports, 'default', function() {
        return e;
    });
    var e = function() {
        for (var f, g, h = 0, i = '', j = arguments.length; h < j; h++)
            (f = arguments[h]) && (g = d(f)) && (i && (i += ' '), i += g);
        return i;
    };
}), c.register('3Z4oG', function(a, l) {
    b(a.exports, 'useEditable', function() {
        return k;
    });
    var d = c('uPP4W'),
        e = {
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        };

    function f(a) {
        var g = window.getSelection();
        g.empty(), g.addRange(a);
    }

    function g(a) {
        return (a.metaKey || a.ctrlKey) && !a.altKey && 'KeyZ' === a.code;
    }

    function h(a) {
        a = [a.firstChild];
        for (var i, j = ''; i = a.pop();)
            i.nodeType === Node.TEXT_NODE ? j += i.textContent : i.nodeType === Node.ELEMENT_NODE && 'BR' === i.nodeName && (j += '\n'), i.nextSibling && a.push(i.nextSibling), i.firstChild && a.push(i.firstChild);
        return '\n' !== j[j.length - 1] && (j += '\n'), j;
    }

    function i(a) {
        var j = window.getSelection().getRangeAt(0),
            k = j.collapsed ? 0 : j.toString().length,
            l = document.createRange();
        return l.setStart(a, 0), l.setEnd(j.startContainer, j.startOffset), {
            position: a = (l = l.toString()).length,
            extent: k,
            content: l = (l = l.split('\n'))[j = l.length - 1],
            line: j
        };
    }

    function j(a, b, c) {
        0 >= b && (b = 0), (!c || 0 > c) && (c = b);
        var k = document.createRange();
        a = [a.firstChild];
        for (var l, m = 0, n = o; l = a[a.length - 1];) {
            if (l.nodeType === Node.TEXT_NODE) {
                if (m + l.textContent.length >= n) {
                    var p = n - m;
                    if (n === o) {
                        if (n = k, p < l.textContent.length ? n.setStart(l, p) : n.setStartAfter(l), c !== o) {
                            n = c;
                            continue;
                        }
                        break;
                    }
                    o = k, p < (c = l).textContent.length ? o.setEnd(c, p) : o.setEndAfter(c);
                    break;
                }
                m += l.textContent.length;
            } else if (l.nodeType === Node.ELEMENT_NODE && 'BR' === l.nodeName) {
                if (m + 1 >= n) {
                    if (n === o) {
                        if (g = k, 0 < l.textContent.length ? g.setStart(l, 0) : g.setStartAfter(l), c !== o) {
                            n = c;
                            continue;
                        }
                        break;
                    }
                    o = k, 0 < (c = l).textContent.length ? o.setEnd(c, 0) : o.setEndAfter(c);
                    break;
                }
                m++;
            }
            a.pop(), l.nextSibling && a.push(l.nextSibling), l.firstChild && a.push(l.firstChild);
        }
        return k;
    }

    function k(a, b, c) {
        function l(b) {
            var m = a.current;
            if (m) {
                var n = i(m);
                m = h(m), n.position += b.length - m.length, r.position = n, r.onChange(b, n);
            }
        }

        function m(b, c) {
            var n = a.current;
            if (n) {
                var o = window.getSelection().getRangeAt(0);
                o.deleteContents(), o.collapse();
                var p = c || 0;
                (o = j(n, c = (o = i(n)).position + (0 > p ? p : 0), o.position + (0 < p ? p : 0))).deleteContents(), b && o.insertNode(document.createTextNode(b)), f(j(n, c + b.length));
            }
        }

        function n(b) {
            var o = a.current;
            if (o) {
                o.focus();
                var p = 0;
                if ('number' == typeof b)
                    p = b;
                else {
                    var q = h(o).split('\n').slice(0, b.row);
                    b.row && (p += q.join('\n').length + 1), p += b.column;
                }
                f(j(o, p));
            }
        }

        function o() {
            var p = a.current;
            return {
                text: h(p),
                position: p = i(p)
            };
        }

        function p() {
            r.observer.disconnect();
        }
        c || (c = {});
        var q = (0, d.useState)([])[1],
            r = (0, d.useState)(function() {
                var s = {
                    observer: null,
                    disconnected: !1,
                    onChange: b,
                    queue: [],
                    history: [],
                    historyAt: -1,
                    position: null
                };
                return 'undefined' != typeof MutationObserver && (s.observer = new MutationObserver(function(b) {
                    var t;
                    (t = s.queue).push.apply(t, b);
                })), s;
            })[0],
            s = (0, d.useMemo)(function() {
                return {
                    update: l,
                    insert: m,
                    move: n,
                    getState: o
                };
            }, []);
        return 'object' != typeof navigator || ((0, d.useLayoutEffect)(function() {
            if (r.onChange = b, a.current && !c.disabled) {
                if (r.disconnected = !1, r.observer.observe(a.current, e), r.position) {
                    var t = r.position,
                        u = t.position;
                    f(j(a.current, u, u + t.extent));
                }
                return p;
            }
        }), (0, d.useLayoutEffect)(function() {
            if (a.current && !c.disabled) {
                var t = a.current;
                if (r.position) {
                    t.focus();
                    var u = r.position,
                        v = u.position;
                    f(j(t, v, v + u.extent));
                }
                var u = t.style.whiteSpace,
                    v = t.contentEditable,
                    w = !0;
                try {
                    t.contentEditable = 'plaintext-only';
                } catch (a) {
                    t.contentEditable = 'true', w = !1;
                }
                'pre' !== u && (t.style.whiteSpace = 'pre-wrap'), c.indentation && (t.style.tabSize = t.style.MozTabSize = '' + c.indentation), l = '' + ' '.repeat(c.indentation || 0);
                var x, y = new RegExp('^(?:' + l + ')'),
                    z = new RegExp('^(?:' + l + ')*(' + l + ')$'),
                    A = function(c) {
                        if (a.current && r.position) {
                            var B = h(t),
                                C = i(t),
                                D = new Date().valueOf(),
                                E = r.history[r.historyAt];
                            !c && 500 > D - x || E && E[1] === B ? x = D : (c = ++r.historyAt, r.history[c] = [
                                C,
                                B
                            ], r.history.splice(c + 1), 500 < c && (r.historyAt--, r.history.shift()));
                        }
                    },
                    B = function() {
                        var C;
                        if ((C = r.queue).push.apply(C, r.observer.takeRecords()), C = i(t), r.queue.length) {
                            r.observer.disconnect(), r.disconnected = !0;
                            var D, E, F = h(t);
                            for (r.position = C; D = r.queue.pop();) {
                                for (null !== D.oldValue && (D.target.textContent = D.oldValue), E = D.removedNodes.length - 1; 0 <= E; E--)
                                    D.target.insertBefore(D.removedNodes[E], D.nextSibling);
                                for (E = D.addedNodes.length - 1; 0 <= E; E--)
                                    D.addedNodes[E].parentNode && D.target.removeChild(D.addedNodes[E]);
                            }
                            r.onChange(F, C);
                        }
                    },
                    C = function(a) {
                        if (!a.defaultPrevented && a.target === t) {
                            if (r.disconnected)
                                return a.preventDefault(), q([]);
                            if (g(a))
                                a.preventDefault(), a.shiftKey ? (a = ++r.historyAt, (a = r.history[a]) || (r.historyAt = r.history.length - 1)) : (a = --r.historyAt, (a = r.history[a]) || (r.historyAt = 0)), a && (r.observer.disconnect(), r.disconnected = !0, r.position = a[0], r.onChange(a[1], a[0]));
                            else {
                                if (A(), 'Enter' === a.key) {
                                    a.preventDefault();
                                    var D = i(t),
                                        E = /\S/g.exec(D.content);
                                    D = '\n' + D.content.slice(0, E ? E.index : D.content.length), s.insert(D);
                                } else if (w && !c.indentation || 'Backspace' !== a.key) {
                                    if (c.indentation && 'Tab' === a.key) {
                                        a.preventDefault(), E = (D = i(t)).position - D.content.length;
                                        var F = h(t);
                                        D = a.shiftKey ? F.slice(0, E) + D.content.replace(y, '') + F.slice(E + D.content.length) : F.slice(0, E) + (c.indentation ? ' '.repeat(c.indentation) : '\t') + F.slice(E), s.update(D);
                                    }
                                } else
                                    a.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (D = i(t), D = z.exec(D.content), s.insert('', D ? -D[1].length : -1)) : s.insert('', 0);
                                a.repeat && B();
                            }
                        }
                    },
                    D = function(a) {
                        a.defaultPrevented || a.isComposing || (g(a) || A(), B(), t.focus());
                    },
                    E = function(a) {
                        r.position = window.getSelection().rangeCount && a.target === t ? i(t) : null;
                    },
                    F = function(a) {
                        a.preventDefault(), A(!0), s.insert(a.clipboardData.getData('text/plain')), A(!0), B();
                    };
                return document.addEventListener('selectstart', E), window.addEventListener('keydown', C), t.addEventListener('paste', F), t.addEventListener('keyup', D),
                    function() {
                        document.removeEventListener('selectstart', E), window.removeEventListener('keydown', C), t.removeEventListener('paste', F), t.removeEventListener('keyup', D), t.style.whiteSpace = u, t.contentEditable = v;
                    };
            }
            r.history.length = 0, r.historyAt = -1;
        }, [
            a.current,
            c.disabled,
            c.indentation
        ])), s;
    }
}), c.register('R2Oep', function(a, p) {
    b(a.exports, 'transform', function() {
        return n;
    });
    var d = c('JktIu'),
        e = c('XMrPF'),
        f = c('pIDve'),
        g = c('A1bve'),
        h = c('tcjBN'),
        i = c('Ppf4T'),
        j = c('lzQ09'),
        k = c('1PiEj'),
        l = c('pSiRT'),
        m = (c('5Sk9b'), c('THaw4'));

    function n(a, b) {
        (0, i.validateOptions)(b);
        try {
            const o = o(a, b),
                p = new(0, l.default)(o, b.transforms, Boolean(b.enableLegacyBabel5ModuleInterop), b).transform();
            let q = {
                code: p.code
            };
            if (b.sourceMapOptions) {
                if (!b.filePath)
                    throw new Error('filePath must be specified when generating a source map.');
                q = {
                    ...q,
                    sourceMap: (0, e.default)(p, b.filePath, b.sourceMapOptions, a, o.tokenProcessor.tokens)
                };
            }
            return q;
        } catch (a) {
            throw b.filePath && (a.message = `Error transforming ${ b.filePath }: ${ a.message }`), a;
        }
    }

    function o(a, b) {
        const p = b.transforms.includes('jsx'),
            q = b.transforms.includes('typescript'),
            r = b.transforms.includes('flow'),
            s = !0 === b.disableESTransforms,
            t = (0, j.parse)(a, p, q, r),
            u = t.tokens,
            v = t.scopes,
            w = new(0, h.default)(a, u),
            x = new(0, f.HelperManager)(w),
            y = new(0, k.default)(a, u, r, s, x),
            z = Boolean(b.enableLegacyTypeScriptModuleInterop);
        let A = null;
        return b.transforms.includes('imports') ? (A = new(0, d.default)(w, y, z, b, b.transforms.includes('typescript'), Boolean(b.keepUnusedImports), x), A.preprocessTokens(), (0, g.default)(y, v, A.getGlobalNames()), b.transforms.includes('typescript') && !b.keepUnusedImports && A.pruneTypeOnlyImports()) : b.transforms.includes('typescript') && !b.keepUnusedImports && (0, g.default)(y, v, (0, m.default)(y)), {
            tokenProcessor: y,
            scopes: v,
            nameManager: w,
            importProcessor: A,
            helperManager: x
        };
    }
}), c.register('JktIu', function(a, m) {
    b(a.exports, 'default', function() {
        return i;
    });
    var d = c('SI/fV'),
        e = c('C8Bhr'),
        f = c('KWaC1'),
        g = c('tJSN/'),
        h = c('CnyDH');
    class i {
        __init() {
            this.nonTypeIdentifiers = new Set();
        }
        __init2() {
            this.importInfoByPath = new Map();
        }
        __init3() {
            this.importsToReplace = new Map();
        }
        __init4() {
            this.identifierReplacements = new Map();
        }
        __init5() {
            this.exportBindingsByLocalName = new Map();
        }
        preprocessTokens() {
            for (let j = 0; j < this.tokens.tokens.length; j++)
                this.tokens.matches1AtIndex(j, f.TokenType._import) && !this.tokens.matches3AtIndex(j, f.TokenType._import, f.TokenType.name, f.TokenType.eq) && this.preprocessImportAtIndex(j), this.tokens.matches1AtIndex(j, f.TokenType._export) && !this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType.eq) && this.preprocessExportAtIndex(j);
            this.generateImportReplacements();
        }
        pruneTypeOnlyImports() {
            this.nonTypeIdentifiers = (0, h.getNonTypeIdentifiers)(this.tokens, this.options);
            for (const [k, l] of this.importInfoByPath.entries()) {
                if (l.hasBareImport || l.hasStarExport || l.exportStarNames.length > 0 || l.namedExports.length > 0)
                    continue;
                [
                    ...l.defaultNames,
                    ...l.wildcardNames,
                    ...l.namedImports.map(({
                        localName: m
                    }) => m)
                ].every(m => this.shouldAutomaticallyElideImportedName(m)) && this.importsToReplace.set(m, '');
            }
        }
        shouldAutomaticallyElideImportedName(a) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(a);
        }
        generateImportReplacements() {
            for (const [j, k] of this.importInfoByPath.entries()) {
                const {
                    defaultNames: l,
                    wildcardNames: m,
                    namedImports: n,
                    namedExports: o,
                    exportStarNames: p,
                    hasStarExport: q
                } = r;
                if (0 === l.length && 0 === m.length && 0 === n.length && 0 === o.length && 0 === p.length && !q) {
                    this.importsToReplace.set(j, `require('${ j }');`);
                    continue;
                }
                const s = this.getFreeIdentifierForPath(j);
                let t;
                t = this.enableLegacyTypeScriptModuleInterop ? s : m.length > 0 ? m[0] : this.getFreeIdentifierForPath(j);
                let u = `var ${ s } = require('${ j }');`;
                if (m.length > 0)
                    for (const v of m) {
                        u += ` var ${ v } = ${ this.enableLegacyTypeScriptModuleInterop ? s : `${ this.helperManager.getHelperName('interopRequireWildcard') }(${ s })` };`;
                    }
                else
                    p.length > 0 && t !== s ? u += ` var ${ t } = ${ this.helperManager.getHelperName('interopRequireWildcard') }(${ s });` : l.length > 0 && t !== s && (u += ` var ${ t } = ${ this.helperManager.getHelperName('interopRequireDefault') }(${ s });`);
                for (const {
                        importedName: v,
                        localName: w
                    }
                    of o)
                    u += ` ${ this.helperManager.getHelperName('createNamedExportFrom') }(${ s }, '${ w }', '${ v }');`;
                for (const x of p)
                    u += ` exports.${ x } = ${ t };`;
                q && (u += ` ${ this.helperManager.getHelperName('createStarExport') }(${ s });`), this.importsToReplace.set(x, u);
                for (const y of l)
                    this.identifierReplacements.set(y, `${ t }.default`);
                for (const {
                        importedName: z,
                        localName: A
                    }
                    of n)
                    this.identifierReplacements.set(A, `${ s }.${ z }`);
            }
        }
        getFreeIdentifierForPath(a) {
            const j = a.split('/'),
                k = j[j.length - 1].replace(/\W/g, '');
            return this.nameManager.claimFreeName(`_${ k }`);
        }
        preprocessImportAtIndex(a) {
            const j = [],
                k = [],
                l = [];
            if (a++, (this.tokens.matchesContextualAtIndex(a, e.ContextualKeyword._type) || this.tokens.matches1AtIndex(a, f.TokenType._typeof)) && !this.tokens.matches1AtIndex(a + 1, f.TokenType.comma) && !this.tokens.matchesContextualAtIndex(a + 1, e.ContextualKeyword._from))
                return;
            if (this.tokens.matches1AtIndex(a, f.TokenType.parenL))
                return;
            if (this.tokens.matches1AtIndex(a, f.TokenType.name) && (j.push(this.tokens.identifierNameAtIndex(a)), a++, this.tokens.matches1AtIndex(a, f.TokenType.comma) && a++), this.tokens.matches1AtIndex(a, f.TokenType.star) && (a += 2, k.push(this.tokens.identifierNameAtIndex(a)), a++), this.tokens.matches1AtIndex(a, f.TokenType.braceL)) {
                const m = this.getNamedImports(a + 1);
                a = m.newIndex;
                for (const n of m.namedImports)
                    'default' === n.importedName ? j.push(n.localName) : l.push(n);
            }
            if (this.tokens.matchesContextualAtIndex(a, e.ContextualKeyword._from) && a++, !this.tokens.matches1AtIndex(a, f.TokenType.string))
                throw new Error('Expected string token at the end of import statement.');
            const m = this.tokens.stringValueAtIndex(a),
                n = this.getImportInfo(m);
            n.defaultNames.push(...j), n.wildcardNames.push(...k), n.namedImports.push(...l), 0 === j.length && 0 === k.length && 0 === l.length && (n.hasBareImport = !0);
        }
        preprocessExportAtIndex(a) {
            if (this.tokens.matches2AtIndex(a, f.TokenType._export, f.TokenType._var) || this.tokens.matches2AtIndex(a, f.TokenType._export, f.TokenType._let) || this.tokens.matches2AtIndex(a, f.TokenType._export, f.TokenType._const))
                this.preprocessVarExportAtIndex(a);
            else if (this.tokens.matches2AtIndex(a, f.TokenType._export, f.TokenType._function) || this.tokens.matches2AtIndex(a, f.TokenType._export, f.TokenType._class)) {
                const j = this.tokens.identifierNameAtIndex(a + 2);
                this.addExportBinding(j, j);
            } else if (this.tokens.matches3AtIndex(a, f.TokenType._export, f.TokenType.name, f.TokenType._function)) {
                const k = this.tokens.identifierNameAtIndex(a + 3);
                this.addExportBinding(k, k);
            } else
                this.tokens.matches2AtIndex(a, f.TokenType._export, f.TokenType.braceL) ? this.preprocessNamedExportAtIndex(a) : this.tokens.matches2AtIndex(a, f.TokenType._export, f.TokenType.star) && this.preprocessExportStarAtIndex(a);
        }
        preprocessVarExportAtIndex(a) {
            let j = 0;
            for (let k = a + 2;; k++)
                if (this.tokens.matches1AtIndex(k, f.TokenType.braceL) || this.tokens.matches1AtIndex(k, f.TokenType.dollarBraceL) || this.tokens.matches1AtIndex(k, f.TokenType.bracketL))
                    j++;
                else if (this.tokens.matches1AtIndex(k, f.TokenType.braceR) || this.tokens.matches1AtIndex(k, f.TokenType.bracketR))
                j--;
            else {
                if (0 === j && !this.tokens.matches1AtIndex(k, f.TokenType.name))
                    break;
                if (this.tokens.matches1AtIndex(1, f.TokenType.eq)) {
                    const l = this.tokens.currentToken().rhsEndIndex;
                    if (null == l)
                        throw new Error('Expected = token with an end index.');
                    k = l - 1;
                } else {
                    const m = this.tokens.tokens[k];
                    if ((0, d.isDeclaration)(m)) {
                        const n = this.tokens.identifierNameAtIndex(k);
                        this.identifierReplacements.set(n, `exports.${ n }`);
                    }
                }
            }
        }
        preprocessNamedExportAtIndex(a) {
            a += 2;
            const {
                newIndex: j,
                namedImports: k
            } = this.getNamedImports(a);
            if (a = j, !this.tokens.matchesContextualAtIndex(a, e.ContextualKeyword._from)) {
                for (const {
                        importedName: l,
                        localName: m
                    }
                    of k)
                    this.addExportBinding(l, m);
                return;
            }
            if (a++, !this.tokens.matches1AtIndex(a, f.TokenType.string))
                throw new Error('Expected string token at the end of import statement.');
            const l = this.tokens.stringValueAtIndex(a);
            this.getImportInfo(l).namedExports.push(...k);
        }
        preprocessExportStarAtIndex(a) {
            let j = null;
            if (this.tokens.matches3AtIndex(a, f.TokenType._export, f.TokenType.star, f.TokenType._as) ? (a += 3, j = this.tokens.identifierNameAtIndex(a), a += 2) : a += 3, !this.tokens.matches1AtIndex(a, f.TokenType.string))
                throw new Error('Expected string token at the end of star export statement.');
            const k = this.tokens.stringValueAtIndex(a),
                l = this.getImportInfo(k);
            null !== j ? l.exportStarNames.push(j) : l.hasStarExport = !0;
        }
        getNamedImports(a) {
            const j = [];
            for (;;) {
                if (this.tokens.matches1AtIndex(a, f.TokenType.braceR)) {
                    a++;
                    break;
                }
                const k = (0, g.default)(this.tokens, a);
                if (a = k.endIndex, k.isType || j.push({
                        importedName: k.leftName,
                        localName: k.rightName
                    }), this.tokens.matches2AtIndex(a, f.TokenType.comma, f.TokenType.braceR)) {
                    a += 2;
                    break;
                }
                if (this.tokens.matches1AtIndex(a, f.TokenType.braceR)) {
                    a++;
                    break;
                }
                if (!this.tokens.matches1AtIndex(a, f.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(this.tokens.tokens[a]) }`);
                a++;
            }
            return {
                newIndex: a,
                namedImports: j
            };
        }
        getImportInfo(a) {
            const j = this.importInfoByPath.get(a);
            if (j)
                return j;
            const k = {
                defaultNames: [],
                wildcardNames: [],
                namedImports: [],
                namedExports: [],
                hasBareImport: !1,
                exportStarNames: [],
                hasStarExport: !1
            };
            return this.importInfoByPath.set(a, k), k;
        }
        addExportBinding(a, b) {
            this.exportBindingsByLocalName.has(a) || this.exportBindingsByLocalName.set(a, []), this.exportBindingsByLocalName.get(a).push(b);
        }
        claimImportCode(a) {
            const j = this.importsToReplace.get(a);
            return this.importsToReplace.set(a, ''), j || '';
        }
        getIdentifierReplacement(a) {
            return this.identifierReplacements.get(a) || null;
        }
        resolveExportBinding(a) {
            const j = this.exportBindingsByLocalName.get(a);
            return j && 0 !== j.length ? j.map(a => `exports.${ a }`).join(' = ') : null;
        }
        getGlobalNames() {
            return new Set([
                ...this.identifierReplacements.keys(),
                ...this.exportBindingsByLocalName.keys()
            ]);
        }
        constructor(a, b, c, A, d, e, f) {
            this.nameManager = a, this.tokens = b, this.enableLegacyTypeScriptModuleInterop = c, this.options = A, this.isTypeScriptTransformEnabled = d, this.keepUnusedImports = e, this.helperManager = f, i.prototype.__init.call(this), i.prototype.__init2.call(this), i.prototype.__init3.call(this), i.prototype.__init4.call(this), i.prototype.__init5.call(this);
        }
    }
}), c.register('SI/fV', function(a, A) {
    b(a.exports, 'IdentifierRole', function() {
        return d;
    }), b(a.exports, 'JSXRole', function() {
        return e;
    }), b(a.exports, 'isDeclaration', function() {
        return n;
    }), b(a.exports, 'isNonTopLevelDeclaration', function() {
        return o;
    }), b(a.exports, 'isTopLevelDeclaration', function() {
        return p;
    }), b(a.exports, 'isBlockScopedDeclaration', function() {
        return q;
    }), b(a.exports, 'isFunctionScopedDeclaration', function() {
        return r;
    }), b(a.exports, 'isObjectShorthandDeclaration', function() {
        return s;
    }), b(a.exports, 'Token', function() {
        return t;
    }), b(a.exports, 'next', function() {
        return u;
    }), b(a.exports, 'nextToken', function() {
        return I;
    }), b(a.exports, 'nextTemplateToken', function() {
        return v;
    }), b(a.exports, 'retokenizeSlashAsRegex', function() {
        return w;
    }), b(a.exports, 'pushTypeContext', function() {
        return x;
    }), b(a.exports, 'popTypeContext', function() {
        return y;
    }), b(a.exports, 'eat', function() {
        return z;
    }), b(a.exports, 'match', function() {
        return B;
    }), b(a.exports, 'eatTypeToken', function() {
        return A;
    }), b(a.exports, 'lookaheadType', function() {
        return C;
    }), b(a.exports, 'lookaheadTypeAndKeyword', function() {
        return E;
    }), b(a.exports, 'nextTokenStart', function() {
        return F;
    }), b(a.exports, 'nextTokenStartSince', function() {
        return G;
    }), b(a.exports, 'lookaheadCharCode', function() {
        return H;
    }), b(a.exports, 'skipSpace', function() {
        return L;
    }), b(a.exports, 'finishToken', function() {
        return M;
    }), b(a.exports, 'getTokenFromCode', function() {
        return Q;
    }), b(a.exports, 'skipLineComment', function() {
        return K;
    }), b(a.exports, 'rescan_gt', function() {
        return P;
    });
    var d, e, f = c('s9O7r'),
        g = c('OJMmh'),
        h = c('bM7NW'),
        i = c('nLDM7'),
        j = c('i16bo'),
        k = c('C8Bhr'),
        l = c('c3pNO'),
        m = c('KWaC1');

    function n(a) {
        const o = a.identifierRole;
        return o === d.TopLevelDeclaration || o === d.FunctionScopedDeclaration || o === d.BlockScopedDeclaration || o === d.ObjectShorthandTopLevelDeclaration || o === d.ObjectShorthandFunctionScopedDeclaration || o === d.ObjectShorthandBlockScopedDeclaration;
    }

    function o(a) {
        const p = a.identifierRole;
        return p === d.FunctionScopedDeclaration || p === d.BlockScopedDeclaration || p === d.ObjectShorthandFunctionScopedDeclaration || p === d.ObjectShorthandBlockScopedDeclaration;
    }

    function p(a) {
        const q = a.identifierRole;
        return q === d.TopLevelDeclaration || q === d.ObjectShorthandTopLevelDeclaration || q === d.ImportDeclaration;
    }

    function q(a) {
        const r = a.identifierRole;
        return r === d.TopLevelDeclaration || r === d.BlockScopedDeclaration || r === d.ObjectShorthandTopLevelDeclaration || r === d.ObjectShorthandBlockScopedDeclaration;
    }

    function r(a) {
        const s = a.identifierRole;
        return s === d.FunctionScopedDeclaration || s === d.ObjectShorthandFunctionScopedDeclaration;
    }

    function s(a) {
        return a.identifierRole === d.ObjectShorthandTopLevelDeclaration || a.identifierRole === d.ObjectShorthandBlockScopedDeclaration || a.identifierRole === d.ObjectShorthandFunctionScopedDeclaration;
    }! function(a) {
        a[a.Access = 0] = 'Access';
        a[a.ExportAccess = 1] = 'ExportAccess';
        a[a.TopLevelDeclaration = 2] = 'TopLevelDeclaration';
        a[a.FunctionScopedDeclaration = 3] = 'FunctionScopedDeclaration';
        a[a.BlockScopedDeclaration = 4] = 'BlockScopedDeclaration';
        a[a.ObjectShorthandTopLevelDeclaration = 5] = 'ObjectShorthandTopLevelDeclaration';
        a[a.ObjectShorthandFunctionScopedDeclaration = 6] = 'ObjectShorthandFunctionScopedDeclaration';
        a[a.ObjectShorthandBlockScopedDeclaration = 7] = 'ObjectShorthandBlockScopedDeclaration';
        a[a.ObjectShorthand = 8] = 'ObjectShorthand';
        a[a.ImportDeclaration = 9] = 'ImportDeclaration';
        a[a.ObjectKey = 10] = 'ObjectKey';
        a[a.ImportAccess = 11] = 'ImportAccess';
    }(d || (d = {})),
    function(a) {
        a[a.NoChildren = 0] = 'NoChildren';
        a[a.OneChild = 1] = 'OneChild';
        a[a.StaticChildren = 2] = 'StaticChildren';
        a[a.KeyAfterPropSpread = 3] = 'KeyAfterPropSpread';
    }(e || (e = {}));
    class t {
        constructor() {
            this.type = f.state.type, this.contextualKeyword = f.state.contextualKeyword, this.start = f.state.start, this.end = f.state.end, this.scopeDepth = f.state.scopeDepth, this.isType = f.state.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
        }
    }

    function u() {
        f.state.tokens.push(new t()), I();
    }

    function v() {
        f.state.tokens.push(new t()), f.state.start = f.state.pos,
            function() {
                for (;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, g.unexpected)('Unterminated template');
                    const w = f.input.charCodeAt(f.state.pos);
                    if (w === h.charCodes.graveAccent || w === h.charCodes.dollarSign && f.input.charCodeAt(f.state.pos + 1) === h.charCodes.leftCurlyBrace)
                        return f.state.pos === f.state.start && B(m.TokenType.template) ? w === h.charCodes.dollarSign ? (f.state.pos += 2, void M(m.TokenType.dollarBraceL)) : (++f.state.pos, void M(m.TokenType.backQuote)) : void M(m.TokenType.template);
                    w === h.charCodes.backslash && f.state.pos++, f.state.pos++;
                }
            }();
    }

    function w() {
        f.state.type === m.TokenType.assign && --f.state.pos,
            function() {
                const x = f.state.pos;
                let y = !1,
                    z = !1;
                for (;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, g.unexpected)('Unterminated regular expression', x);
                    const A = f.input.charCodeAt(f.state.pos);
                    if (y)
                        y = !1;
                    else {
                        if (A === h.charCodes.leftSquareBracket)
                            z = !0;
                        else if (A === h.charCodes.rightSquareBracket && z)
                            z = !1;
                        else if (A === h.charCodes.slash && !z)
                            break;
                        y = A === h.charCodes.backslash;
                    }
                    ++f.state.pos;
                }
                ++f.state.pos,
                    function() {
                        for (; f.state.pos < f.input.length;) {
                            const A = f.input.charCodeAt(f.state.pos);
                            if (i.IS_IDENTIFIER_CHAR[A])
                                f.state.pos++;
                            else {
                                if (A !== h.charCodes.backslash)
                                    break;
                                if (f.state.pos += 2, f.input.charCodeAt(f.state.pos) === h.charCodes.leftCurlyBrace) {
                                    for (; f.state.pos < f.input.length && f.input.charCodeAt(f.state.pos) !== h.charCodes.rightCurlyBrace;)
                                        f.state.pos++;
                                    f.state.pos++;
                                }
                            }
                        }
                    }(), M(m.TokenType.regexp);
            }();
    }

    function x(a) {
        for (let y = f.state.tokens.length - a; y < f.state.tokens.length; y++)
            f.state.tokens[y].isType = !0;
        const z = f.state.isType;
        return f.state.isType = !0, z;
    }

    function y(a) {
        f.state.isType = a;
    }

    function z(a) {
        return !!B(a) && (u(), !0);
    }

    function A(a) {
        const B = f.state.isType;
        f.state.isType = !0, z(a), f.state.isType = B;
    }

    function B(a) {
        return f.state.type === a;
    }

    function C() {
        const D = f.state.snapshot();
        u();
        const E = f.state.type;
        return f.state.restoreFromSnapshot(D), E;
    }
    class D {
        constructor(a, b) {
            this.type = a, this.contextualKeyword = b;
        }
    }

    function E() {
        const F = f.state.snapshot();
        u();
        const G = f.state.type,
            H = f.state.contextualKeyword;
        return f.state.restoreFromSnapshot(F), new D(G, H);
    }

    function F() {
        return G(f.state.pos);
    }

    function G(a) {
        j.skipWhiteSpace.lastIndex = a;
        return a + j.skipWhiteSpace.exec(f.input)[0].length;
    }

    function H() {
        return f.input.charCodeAt(F());
    }

    function I() {
        if (L(), f.state.start = f.state.pos, f.state.pos >= f.input.length) {
            const J = f.state.tokens;
            return J.length >= 2 && J[J.length - 1].start >= f.input.length && J[J.length - 2].start >= f.input.length && (0, g.unexpected)('Unexpectedly reached the end of input.'), void M(m.TokenType.eof);
        }
        var J;
        J = f.input.charCodeAt(f.state.pos), i.IS_IDENTIFIER_START[J] || J === h.charCodes.backslash || J === h.charCodes.atSign && f.input.charCodeAt(f.state.pos + 1) === h.charCodes.atSign ? (0, l.default)() : Q(J);
    }

    function J() {
        for (; f.input.charCodeAt(f.state.pos) !== h.charCodes.asterisk || f.input.charCodeAt(f.state.pos + 1) !== h.charCodes.slash;)
            if (f.state.pos++, f.state.pos > f.input.length)
                return void(0, g.unexpected)('Unterminated comment', f.state.pos - 2);
        f.state.pos += 2;
    }

    function K(a) {
        let L = f.input.charCodeAt(f.state.pos += a);
        if (f.state.pos < f.input.length)
            for (; L !== h.charCodes.lineFeed && L !== h.charCodes.carriageReturn && L !== h.charCodes.lineSeparator && L !== h.charCodes.paragraphSeparator && ++f.state.pos < f.input.length;)
                L = f.input.charCodeAt(f.state.pos);
    }

    function L() {
        for (; f.state.pos < f.input.length;) {
            const M = f.input.charCodeAt(f.state.pos);
            switch (M) {
                case h.charCodes.carriageReturn:
                    f.input.charCodeAt(f.state.pos + 1) === h.charCodes.lineFeed && ++f.state.pos;
                case h.charCodes.lineFeed:
                case h.charCodes.lineSeparator:
                case h.charCodes.paragraphSeparator:
                    ++f.state.pos;
                    break;
                case h.charCodes.slash:
                    switch (f.input.charCodeAt(f.state.pos + 1)) {
                        case h.charCodes.asterisk:
                            f.state.pos += 2, J();
                            break;
                        case h.charCodes.slash:
                            K(2);
                            break;
                        default:
                            return;
                    }
                    break;
                default:
                    if (!j.IS_WHITESPACE[M])
                        return;
                    ++f.state.pos;
            }
        }
    }

    function M(a, N = k.ContextualKeyword.NONE) {
        f.state.end = f.state.pos, f.state.type = a, f.state.contextualKeyword = N;
    }

    function O() {
        if (f.state.isType)
            return void R(m.TokenType.greaterThan, 1);
        const P = f.input.charCodeAt(f.state.pos + 1);
        if (P === h.charCodes.greaterThan) {
            const Q = f.input.charCodeAt(f.state.pos + 2) === h.charCodes.greaterThan ? 3 : 2;
            return f.input.charCodeAt(f.state.pos + Q) === h.charCodes.equalsTo ? void R(m.TokenType.assign, Q + 1) : void R(m.TokenType.bitShiftR, Q);
        }
        P === h.charCodes.equalsTo ? R(m.TokenType.relationalOrEqual, 2) : R(m.TokenType.greaterThan, 1);
    }

    function P() {
        f.state.type === m.TokenType.greaterThan && (f.state.pos -= 1, O());
    }

    function Q(a) {
        switch (a) {
            case h.charCodes.numberSign:
                return ++f.state.pos, void M(m.TokenType.hash);
            case h.charCodes.dot:
                return void
                function() {
                    const R = f.input.charCodeAt(f.state.pos + 1);
                    R >= h.charCodes.digit0 && R <= h.charCodes.digit9 ? T(!0) : R === h.charCodes.dot && f.input.charCodeAt(f.state.pos + 2) === h.charCodes.dot ? (f.state.pos += 3, M(m.TokenType.ellipsis)) : (++f.state.pos, M(m.TokenType.dot));
                }();
            case h.charCodes.leftParenthesis:
                return ++f.state.pos, void M(m.TokenType.parenL);
            case h.charCodes.rightParenthesis:
                return ++f.state.pos, void M(m.TokenType.parenR);
            case h.charCodes.semicolon:
                return ++f.state.pos, void M(m.TokenType.semi);
            case h.charCodes.comma:
                return ++f.state.pos, void M(m.TokenType.comma);
            case h.charCodes.leftSquareBracket:
                return ++f.state.pos, void M(m.TokenType.bracketL);
            case h.charCodes.rightSquareBracket:
                return ++f.state.pos, void M(m.TokenType.bracketR);
            case h.charCodes.leftCurlyBrace:
                return void(f.isFlowEnabled && f.input.charCodeAt(f.state.pos + 1) === h.charCodes.verticalBar ? R(m.TokenType.braceBarL, 2) : (++f.state.pos, M(m.TokenType.braceL)));
            case h.charCodes.rightCurlyBrace:
                return ++f.state.pos, void M(m.TokenType.braceR);
            case h.charCodes.colon:
                return void(f.input.charCodeAt(f.state.pos + 1) === h.charCodes.colon ? R(m.TokenType.doubleColon, 2) : (++f.state.pos, M(m.TokenType.colon)));
            case h.charCodes.questionMark:
                return void
                function() {
                    const R = f.input.charCodeAt(f.state.pos + 1),
                        S = f.input.charCodeAt(f.state.pos + 2);
                    R !== h.charCodes.questionMark || f.isFlowEnabled && f.state.isType ? R !== h.charCodes.dot || S >= h.charCodes.digit0 && S <= h.charCodes.digit9 ? (++f.state.pos, M(m.TokenType.question)) : (f.state.pos += 2, M(m.TokenType.questionDot)) : S === h.charCodes.equalsTo ? R(m.TokenType.assign, 3) : R(m.TokenType.nullishCoalescing, 2);
                }();
            case h.charCodes.atSign:
                return ++f.state.pos, void M(m.TokenType.at);
            case h.charCodes.graveAccent:
                return ++f.state.pos, void M(m.TokenType.backQuote);
            case h.charCodes.digit0: {
                const R = f.input.charCodeAt(f.state.pos + 1);
                if (R === h.charCodes.lowercaseX || R === h.charCodes.uppercaseX || R === h.charCodes.lowercaseO || R === h.charCodes.uppercaseO || R === h.charCodes.lowercaseB || R === h.charCodes.uppercaseB)
                    return void
                function() {
                    f.state.pos += 2;
                    for (;;) {
                        const S = f.input.charCodeAt(f.state.pos);
                        if (!(S >= h.charCodes.digit0 && S <= h.charCodes.digit9 || S >= h.charCodes.lowercaseA && S <= h.charCodes.lowercaseF || S >= h.charCodes.uppercaseA && S <= h.charCodes.uppercaseF || S === h.charCodes.underscore))
                            break;
                        f.state.pos++;
                    }
                    const S = f.input.charCodeAt(f.state.pos);
                    S === h.charCodes.lowercaseN ? (++f.state.pos, M(m.TokenType.bigint)) : M(m.TokenType.num);
                }();
            }
            case h.charCodes.digit1:
            case h.charCodes.digit2:
            case h.charCodes.digit3:
            case h.charCodes.digit4:
            case h.charCodes.digit5:
            case h.charCodes.digit6:
            case h.charCodes.digit7:
            case h.charCodes.digit8:
            case h.charCodes.digit9:
                return void T(!1);
            case h.charCodes.quotationMark:
            case h.charCodes.apostrophe:
                return void
                function(a) {
                    for (f.state.pos++;;) {
                        if (f.state.pos >= f.input.length)
                            return void(0, g.unexpected)('Unterminated string constant');
                        const R = f.input.charCodeAt(f.state.pos);
                        if (R === h.charCodes.backslash)
                            f.state.pos++;
                        else if (R === a)
                            break;
                        f.state.pos++;
                    }
                    f.state.pos++, M(m.TokenType.string);
                }(a);
            case h.charCodes.slash:
                return void(f.input.charCodeAt(f.state.pos + 1) === h.charCodes.equalsTo ? R(m.TokenType.assign, 2) : R(m.TokenType.slash, 1));
            case h.charCodes.percentSign:
            case h.charCodes.asterisk:
                return void
                function(a) {
                    let R = a === h.charCodes.asterisk ? m.TokenType.star : m.TokenType.modulo,
                        S = 1,
                        T = f.input.charCodeAt(f.state.pos + 1);
                    a === h.charCodes.asterisk && T === h.charCodes.asterisk && (S++, T = f.input.charCodeAt(f.state.pos + 2), R = m.TokenType.exponent), T === h.charCodes.equalsTo && f.input.charCodeAt(f.state.pos + 2) !== h.charCodes.greaterThan && (S++, R = m.TokenType.assign), R(R, S);
                }(a);
            case h.charCodes.verticalBar:
            case h.charCodes.ampersand:
                return void
                function(a) {
                    const R = f.input.charCodeAt(f.state.pos + 1);
                    if (R !== a) {
                        if (a === h.charCodes.verticalBar) {
                            if (R === h.charCodes.greaterThan)
                                return void R(m.TokenType.pipeline, 2);
                            if (R === h.charCodes.rightCurlyBrace && f.isFlowEnabled)
                                return void R(m.TokenType.braceBarR, 2);
                        }
                        R !== h.charCodes.equalsTo ? R(a === h.charCodes.verticalBar ? m.TokenType.bitwiseOR : m.TokenType.bitwiseAND, 1) : R(m.TokenType.assign, 2);
                    } else
                        f.input.charCodeAt(f.state.pos + 2) === h.charCodes.equalsTo ? R(m.TokenType.assign, 3) : R(a === h.charCodes.verticalBar ? m.TokenType.logicalOR : m.TokenType.logicalAND, 2);
                }(a);
            case h.charCodes.caret:
                return void(f.input.charCodeAt(f.state.pos + 1) === h.charCodes.equalsTo ? R(m.TokenType.assign, 2) : R(m.TokenType.bitwiseXOR, 1));
            case h.charCodes.plusSign:
            case h.charCodes.dash:
                return void
                function(a) {
                    const R = f.input.charCodeAt(f.state.pos + 1);
                    R !== a ? R === h.charCodes.equalsTo ? R(m.TokenType.assign, 2) : a === h.charCodes.plusSign ? R(m.TokenType.plus, 1) : R(m.TokenType.minus, 1) : R(m.TokenType.preIncDec, 2);
                }(a);
            case h.charCodes.lessThan:
                return void
                function() {
                    const R = f.input.charCodeAt(f.state.pos + 1);
                    if (R === h.charCodes.lessThan)
                        return f.input.charCodeAt(f.state.pos + 2) === h.charCodes.equalsTo ? void R(m.TokenType.assign, 3) : void(f.state.isType ? R(m.TokenType.lessThan, 1) : R(m.TokenType.bitShiftL, 2));
                    R === h.charCodes.equalsTo ? R(m.TokenType.relationalOrEqual, 2) : R(m.TokenType.lessThan, 1);
                }();
            case h.charCodes.greaterThan:
                return void O();
            case h.charCodes.equalsTo:
            case h.charCodes.exclamationMark:
                return void
                function(a) {
                    const R = f.input.charCodeAt(f.state.pos + 1);
                    if (R !== h.charCodes.equalsTo)
                        return a === h.charCodes.equalsTo && R === h.charCodes.greaterThan ? (f.state.pos += 2, void M(m.TokenType.arrow)) : void R(a === h.charCodes.equalsTo ? m.TokenType.eq : m.TokenType.bang, 1);
                    R(m.TokenType.equality, f.input.charCodeAt(f.state.pos + 2) === h.charCodes.equalsTo ? 3 : 2);
                }(a);
            case h.charCodes.tilde:
                return void R(m.TokenType.tilde, 1);
        }
        (0, g.unexpected)(`Unexpected character '${ String.fromCharCode(a) }'`, f.state.pos);
    }

    function R(a, N) {
        f.state.pos += N, M(a);
    }

    function S() {
        for (;;) {
            const T = f.input.charCodeAt(f.state.pos);
            if (!(T >= h.charCodes.digit0 && T <= h.charCodes.digit9 || T === h.charCodes.underscore))
                break;
            f.state.pos++;
        }
    }

    function T(a) {
        let U = !1,
            V = !1;
        a || S();
        let W = f.input.charCodeAt(f.state.pos);
        W === h.charCodes.dot && (++f.state.pos, S(), W = f.input.charCodeAt(f.state.pos)), W !== h.charCodes.uppercaseE && W !== h.charCodes.lowercaseE || (W = f.input.charCodeAt(++f.state.pos), W !== h.charCodes.plusSign && W !== h.charCodes.dash || ++f.state.pos, S(), W = f.input.charCodeAt(f.state.pos)), W === h.charCodes.lowercaseN ? (++f.state.pos, U = !0) : W === h.charCodes.lowercaseM && (++f.state.pos, V = !0), M(U ? m.TokenType.bigint : V ? m.TokenType.decimal : m.TokenType.num);
    }
}), c.register('s9O7r', function(a, q) {
    b(a.exports, 'isJSXEnabled', function() {
        return f;
    }), b(a.exports, 'isTypeScriptEnabled', function() {
        return g;
    }), b(a.exports, 'isFlowEnabled', function() {
        return h;
    }), b(a.exports, 'state', function() {
        return i;
    }), b(a.exports, 'input', function() {
        return j;
    }), b(a.exports, 'getNextContextId', function() {
        return l;
    }), b(a.exports, 'augmentError', function() {
        return m;
    }), b(a.exports, 'initParser', function() {
        return o;
    });
    var d = c('oDSJh'),
        e = c('bM7NW');
    let f, g, h, i, j, k;

    function l() {
        return k++;
    }

    function m(a) {
        if ('pos' in a) {
            const n = function(a) {
                let o = 1,
                    p = 1;
                for (let q = 0; q < a; q++)
                    j.charCodeAt(q) === e.charCodes.lineFeed ? (o++, p = 1) : p++;
                return new n(o, p);
            }(a.pos);
            a.message += ` (${ n.line }:${ n.column })`, a.loc = n;
        }
        return a;
    }
    class n {
        constructor(a, b) {
            this.line = a, this.column = b;
        }
    }

    function o(a, b, c, d) {
        j = a, i = new(0, d.default)(), k = 1, f = b, g = c, h = d;
    }
}), c.register('oDSJh', function(a, d) {
    b(a.exports, 'Scope', function() {
        return f;
    }), b(a.exports, 'default', function() {
        return h;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1');
    class f {
        constructor(a, b, c) {
            this.startTokenIndex = a, this.endTokenIndex = b, this.isFunctionScope = c;
        }
    }
    class g {
        constructor(a, b, c, d, d, e, f, g, h, i, j, k, l) {
            this.potentialArrowAt = a, this.noAnonFunctionType = b, this.inDisallowConditionalTypesContext = c, this.tokensLength = d, this.scopesLength = d, this.pos = e, this.type = f, this.contextualKeyword = g, this.start = h, this.end = i, this.isType = j, this.scopeDepth = k, this.error = l;
        }
    }
    class h {
        __init() {
            this.potentialArrowAt = -1;
        }
        __init2() {
            this.noAnonFunctionType = !1;
        }
        __init3() {
            this.inDisallowConditionalTypesContext = !1;
        }
        __init4() {
            this.tokens = [];
        }
        __init5() {
            this.scopes = [];
        }
        __init6() {
            this.pos = 0;
        }
        __init7() {
            this.type = e.TokenType.eof;
        }
        __init8() {
            this.contextualKeyword = d.ContextualKeyword.NONE;
        }
        __init9() {
            this.start = 0;
        }
        __init10() {
            this.end = 0;
        }
        __init11() {
            this.isType = !1;
        }
        __init12() {
            this.scopeDepth = 0;
        }
        __init13() {
            this.error = null;
        }
        snapshot() {
            return new g(this.potentialArrowAt, this.noAnonFunctionType, this.inDisallowConditionalTypesContext, this.tokens.length, this.scopes.length, this.pos, this.type, this.contextualKeyword, this.start, this.end, this.isType, this.scopeDepth, this.error);
        }
        restoreFromSnapshot(a) {
            this.potentialArrowAt = a.potentialArrowAt, this.noAnonFunctionType = a.noAnonFunctionType, this.inDisallowConditionalTypesContext = a.inDisallowConditionalTypesContext, this.tokens.length = a.tokensLength, this.scopes.length = a.scopesLength, this.pos = a.pos, this.type = a.type, this.contextualKeyword = a.contextualKeyword, this.start = a.start, this.end = a.end, this.isType = a.isType, this.scopeDepth = a.scopeDepth, this.error = a.error;
        }
        constructor() {
            h.prototype.__init.call(this), h.prototype.__init2.call(this), h.prototype.__init3.call(this), h.prototype.__init4.call(this), h.prototype.__init5.call(this), h.prototype.__init6.call(this), h.prototype.__init7.call(this), h.prototype.__init8.call(this), h.prototype.__init9.call(this), h.prototype.__init10.call(this), h.prototype.__init11.call(this), h.prototype.__init12.call(this), h.prototype.__init13.call(this);
        }
    }
}), c.register('C8Bhr', function(a, c) {
    var d;
    b(a.exports, 'ContextualKeyword', function() {
            return d;
        }),
        function(a) {
            a[a.NONE = 0] = 'NONE';
            a[a._abstract = 1] = '_abstract';
            a[a._accessor = 2] = '_accessor';
            a[a._as = 3] = '_as';
            a[a._assert = 4] = '_assert';
            a[a._asserts = 5] = '_asserts';
            a[a._async = 6] = '_async';
            a[a._await = 7] = '_await';
            a[a._checks = 8] = '_checks';
            a[a._constructor = 9] = '_constructor';
            a[a._declare = 10] = '_declare';
            a[a._enum = 11] = '_enum';
            a[a._exports = 12] = '_exports';
            a[a._from = 13] = '_from';
            a[a._get = 14] = '_get';
            a[a._global = 15] = '_global';
            a[a._implements = 16] = '_implements';
            a[a._infer = 17] = '_infer';
            a[a._interface = 18] = '_interface';
            a[a._is = 19] = '_is';
            a[a._keyof = 20] = '_keyof';
            a[a._mixins = 21] = '_mixins';
            a[a._module = 22] = '_module';
            a[a._namespace = 23] = '_namespace';
            a[a._of = 24] = '_of';
            a[a._opaque = 25] = '_opaque';
            a[a._out = 26] = '_out';
            a[a._override = 27] = '_override';
            a[a._private = 28] = '_private';
            a[a._protected = 29] = '_protected';
            a[a._proto = 30] = '_proto';
            a[a._public = 31] = '_public';
            a[a._readonly = 32] = '_readonly';
            a[a._require = 33] = '_require';
            a[a._satisfies = 34] = '_satisfies';
            a[a._set = 35] = '_set';
            a[a._static = 36] = '_static';
            a[a._symbol = 37] = '_symbol';
            a[a._type = 38] = '_type';
            a[a._unique = 39] = '_unique';
            a[a._using = 40] = '_using';
        }(d || (d = {}));
}), c.register('KWaC1', function(a, c) {
    var d;

    function e(a) {
        switch (a) {
            case d.num:
                return 'num';
            case d.bigint:
                return 'bigint';
            case d.decimal:
                return 'decimal';
            case d.regexp:
                return 'regexp';
            case d.string:
                return 'string';
            case d.name:
                return 'name';
            case d.eof:
                return 'eof';
            case d.bracketL:
                return '[';
            case d.bracketR:
                return ']';
            case d.braceL:
                return '{';
            case d.braceBarL:
                return '{|';
            case d.braceR:
                return '}';
            case d.braceBarR:
                return '|}';
            case d.parenL:
                return '(';
            case d.parenR:
                return ')';
            case d.comma:
                return ',';
            case d.semi:
                return ';';
            case d.colon:
                return ':';
            case d.doubleColon:
                return '::';
            case d.dot:
                return '.';
            case d.question:
                return '?';
            case d.questionDot:
                return '?.';
            case d.arrow:
                return '=>';
            case d.template:
                return 'template';
            case d.ellipsis:
                return '...';
            case d.backQuote:
                return '`';
            case d.dollarBraceL:
                return '${';
            case d.at:
                return '@';
            case d.hash:
                return '#';
            case d.eq:
                return '=';
            case d.assign:
                return '_=';
            case d.preIncDec:
            case d.postIncDec:
                return '++/--';
            case d.bang:
                return '!';
            case d.tilde:
                return '~';
            case d.pipeline:
                return '|>';
            case d.nullishCoalescing:
                return '??';
            case d.logicalOR:
                return '||';
            case d.logicalAND:
                return '&&';
            case d.bitwiseOR:
                return '|';
            case d.bitwiseXOR:
                return '^';
            case d.bitwiseAND:
                return '&';
            case d.equality:
                return '==/!=';
            case d.lessThan:
                return '<';
            case d.greaterThan:
                return '>';
            case d.relationalOrEqual:
                return '<=/>=';
            case d.bitShiftL:
                return '<<';
            case d.bitShiftR:
                return '>>/>>>';
            case d.plus:
                return '+';
            case d.minus:
                return '-';
            case d.modulo:
                return '%';
            case d.star:
                return '*';
            case d.slash:
                return '/';
            case d.exponent:
                return '**';
            case d.jsxName:
                return 'jsxName';
            case d.jsxText:
                return 'jsxText';
            case d.jsxEmptyText:
                return 'jsxEmptyText';
            case d.jsxTagStart:
                return 'jsxTagStart';
            case d.jsxTagEnd:
                return 'jsxTagEnd';
            case d.typeParameterStart:
                return 'typeParameterStart';
            case d.nonNullAssertion:
                return 'nonNullAssertion';
            case d._break:
                return 'break';
            case d._case:
                return 'case';
            case d._catch:
                return 'catch';
            case d._continue:
                return 'continue';
            case d._debugger:
                return 'debugger';
            case d._default:
                return 'default';
            case d._do:
                return 'do';
            case d._else:
                return 'else';
            case d._finally:
                return 'finally';
            case d._for:
                return 'for';
            case d._function:
                return 'function';
            case d._if:
                return 'if';
            case d._return:
                return 'return';
            case d._switch:
                return 'switch';
            case d._throw:
                return 'throw';
            case d._try:
                return 'try';
            case d._var:
                return 'var';
            case d._let:
                return 'let';
            case d._const:
                return 'const';
            case d._while:
                return 'while';
            case d._with:
                return 'with';
            case d._new:
                return 'new';
            case d._this:
                return 'this';
            case d._super:
                return 'super';
            case d._class:
                return 'class';
            case d._extends:
                return 'extends';
            case d._export:
                return 'export';
            case d._import:
                return 'import';
            case d._yield:
                return 'yield';
            case d._null:
                return 'null';
            case d._true:
                return 'true';
            case d._false:
                return 'false';
            case d._in:
                return 'in';
            case d._instanceof:
                return 'instanceof';
            case d._typeof:
                return 'typeof';
            case d._void:
                return 'void';
            case d._delete:
                return 'delete';
            case d._async:
                return 'async';
            case d._get:
                return 'get';
            case d._set:
                return 'set';
            case d._declare:
                return 'declare';
            case d._readonly:
                return 'readonly';
            case d._abstract:
                return 'abstract';
            case d._static:
                return 'static';
            case d._public:
                return 'public';
            case d._private:
                return 'private';
            case d._protected:
                return 'protected';
            case d._override:
                return 'override';
            case d._as:
                return 'as';
            case d._enum:
                return 'enum';
            case d._type:
                return 'type';
            case d._implements:
                return 'implements';
            default:
                return '';
        }
    }
    b(a.exports, 'TokenType', function() {
            return d;
        }), b(a.exports, 'formatTokenType', function() {
            return e;
        }),
        function(a) {
            a[a.PRECEDENCE_MASK = 15] = 'PRECEDENCE_MASK';
            a[a.IS_KEYWORD = 16] = 'IS_KEYWORD';
            a[a.IS_ASSIGN = 32] = 'IS_ASSIGN';
            a[a.IS_RIGHT_ASSOCIATIVE = 64] = 'IS_RIGHT_ASSOCIATIVE';
            a[a.IS_PREFIX = 128] = 'IS_PREFIX';
            a[a.IS_POSTFIX = 256] = 'IS_POSTFIX';
            a[a.IS_EXPRESSION_START = 512] = 'IS_EXPRESSION_START';
            a[a.num = 512] = 'num';
            a[a.bigint = 1536] = 'bigint';
            a[a.decimal = 2560] = 'decimal';
            a[a.regexp = 3584] = 'regexp';
            a[a.string = 4608] = 'string';
            a[a.name = 5632] = 'name';
            a[a.eof = 6144] = 'eof';
            a[a.bracketL = 7680] = 'bracketL';
            a[a.bracketR = 8192] = 'bracketR';
            a[a.braceL = 9728] = 'braceL';
            a[a.braceBarL = 10752] = 'braceBarL';
            a[a.braceR = 11264] = 'braceR';
            a[a.braceBarR = 12288] = 'braceBarR';
            a[a.parenL = 13824] = 'parenL';
            a[a.parenR = 14336] = 'parenR';
            a[a.comma = 15360] = 'comma';
            a[a.semi = 16384] = 'semi';
            a[a.colon = 17408] = 'colon';
            a[a.doubleColon = 18432] = 'doubleColon';
            a[a.dot = 19456] = 'dot';
            a[a.question = 20480] = 'question';
            a[a.questionDot = 21504] = 'questionDot';
            a[a.arrow = 22528] = 'arrow';
            a[a.template = 23552] = 'template';
            a[a.ellipsis = 24576] = 'ellipsis';
            a[a.backQuote = 25600] = 'backQuote';
            a[a.dollarBraceL = 27136] = 'dollarBraceL';
            a[a.at = 27648] = 'at';
            a[a.hash = 29184] = 'hash';
            a[a.eq = 29728] = 'eq';
            a[a.assign = 30752] = 'assign';
            a[a.preIncDec = 32640] = 'preIncDec';
            a[a.postIncDec = 33664] = 'postIncDec';
            a[a.bang = 34432] = 'bang';
            a[a.tilde = 35456] = 'tilde';
            a[a.pipeline = 35841] = 'pipeline';
            a[a.nullishCoalescing = 36866] = 'nullishCoalescing';
            a[a.logicalOR = 37890] = 'logicalOR';
            a[a.logicalAND = 38915] = 'logicalAND';
            a[a.bitwiseOR = 39940] = 'bitwiseOR';
            a[a.bitwiseXOR = 40965] = 'bitwiseXOR';
            a[a.bitwiseAND = 41990] = 'bitwiseAND';
            a[a.equality = 43015] = 'equality';
            a[a.lessThan = 44040] = 'lessThan';
            a[a.greaterThan = 45064] = 'greaterThan';
            a[a.relationalOrEqual = 46088] = 'relationalOrEqual';
            a[a.bitShiftL = 47113] = 'bitShiftL';
            a[a.bitShiftR = 48137] = 'bitShiftR';
            a[a.plus = 49802] = 'plus';
            a[a.minus = 50826] = 'minus';
            a[a.modulo = 51723] = 'modulo';
            a[a.star = 52235] = 'star';
            a[a.slash = 53259] = 'slash';
            a[a.exponent = 54348] = 'exponent';
            a[a.jsxName = 55296] = 'jsxName';
            a[a.jsxText = 56320] = 'jsxText';
            a[a.jsxEmptyText = 57344] = 'jsxEmptyText';
            a[a.jsxTagStart = 58880] = 'jsxTagStart';
            a[a.jsxTagEnd = 59392] = 'jsxTagEnd';
            a[a.typeParameterStart = 60928] = 'typeParameterStart';
            a[a.nonNullAssertion = 61440] = 'nonNullAssertion';
            a[a._break = 62480] = '_break';
            a[a._case = 63504] = '_case';
            a[a._catch = 64528] = '_catch';
            a[a._continue = 65552] = '_continue';
            a[a._debugger = 66576] = '_debugger';
            a[a._default = 67600] = '_default';
            a[a._do = 68624] = '_do';
            a[a._else = 69648] = '_else';
            a[a._finally = 70672] = '_finally';
            a[a._for = 71696] = '_for';
            a[a._function = 73232] = '_function';
            a[a._if = 73744] = '_if';
            a[a._return = 74768] = '_return';
            a[a._switch = 75792] = '_switch';
            a[a._throw = 77456] = '_throw';
            a[a._try = 77840] = '_try';
            a[a._var = 78864] = '_var';
            a[a._let = 79888] = '_let';
            a[a._const = 80912] = '_const';
            a[a._while = 81936] = '_while';
            a[a._with = 82960] = '_with';
            a[a._new = 84496] = '_new';
            a[a._this = 85520] = '_this';
            a[a._super = 86544] = '_super';
            a[a._class = 87568] = '_class';
            a[a._extends = 88080] = '_extends';
            a[a._export = 89104] = '_export';
            a[a._import = 90640] = '_import';
            a[a._yield = 91664] = '_yield';
            a[a._null = 92688] = '_null';
            a[a._true = 93712] = '_true';
            a[a._false = 94736] = '_false';
            a[a._in = 95256] = '_in';
            a[a._instanceof = 96280] = '_instanceof';
            a[a._typeof = 97936] = '_typeof';
            a[a._void = 98960] = '_void';
            a[a._delete = 99984] = '_delete';
            a[a._async = 100880] = '_async';
            a[a._get = 101904] = '_get';
            a[a._set = 102928] = '_set';
            a[a._declare = 103952] = '_declare';
            a[a._readonly = 104976] = '_readonly';
            a[a._abstract = 106000] = '_abstract';
            a[a._static = 107024] = '_static';
            a[a._public = 107536] = '_public';
            a[a._private = 108560] = '_private';
            a[a._protected = 109584] = '_protected';
            a[a._override = 110608] = '_override';
            a[a._as = 112144] = '_as';
            a[a._enum = 113168] = '_enum';
            a[a._type = 114192] = '_type';
            a[a._implements = 115216] = '_implements';
        }(d || (d = {}));
}), c.register('bM7NW', function(a, c) {
    var d;
    b(a.exports, 'charCodes', function() {
            return d;
        }),
        function(a) {
            a[a.backSpace = 8] = 'backSpace';
            a[a.lineFeed = 10] = 'lineFeed';
            a[a.tab = 9] = 'tab';
            a[a.carriageReturn = 13] = 'carriageReturn';
            a[a.shiftOut = 14] = 'shiftOut';
            a[a.space = 32] = 'space';
            a[a.exclamationMark = 33] = 'exclamationMark';
            a[a.quotationMark = 34] = 'quotationMark';
            a[a.numberSign = 35] = 'numberSign';
            a[a.dollarSign = 36] = 'dollarSign';
            a[a.percentSign = 37] = 'percentSign';
            a[a.ampersand = 38] = 'ampersand';
            a[a.apostrophe = 39] = 'apostrophe';
            a[a.leftParenthesis = 40] = 'leftParenthesis';
            a[a.rightParenthesis = 41] = 'rightParenthesis';
            a[a.asterisk = 42] = 'asterisk';
            a[a.plusSign = 43] = 'plusSign';
            a[a.comma = 44] = 'comma';
            a[a.dash = 45] = 'dash';
            a[a.dot = 46] = 'dot';
            a[a.slash = 47] = 'slash';
            a[a.digit0 = 48] = 'digit0';
            a[a.digit1 = 49] = 'digit1';
            a[a.digit2 = 50] = 'digit2';
            a[a.digit3 = 51] = 'digit3';
            a[a.digit4 = 52] = 'digit4';
            a[a.digit5 = 53] = 'digit5';
            a[a.digit6 = 54] = 'digit6';
            a[a.digit7 = 55] = 'digit7';
            a[a.digit8 = 56] = 'digit8';
            a[a.digit9 = 57] = 'digit9';
            a[a.colon = 58] = 'colon';
            a[a.semicolon = 59] = 'semicolon';
            a[a.lessThan = 60] = 'lessThan';
            a[a.equalsTo = 61] = 'equalsTo';
            a[a.greaterThan = 62] = 'greaterThan';
            a[a.questionMark = 63] = 'questionMark';
            a[a.atSign = 64] = 'atSign';
            a[a.uppercaseA = 65] = 'uppercaseA';
            a[a.uppercaseB = 66] = 'uppercaseB';
            a[a.uppercaseC = 67] = 'uppercaseC';
            a[a.uppercaseD = 68] = 'uppercaseD';
            a[a.uppercaseE = 69] = 'uppercaseE';
            a[a.uppercaseF = 70] = 'uppercaseF';
            a[a.uppercaseG = 71] = 'uppercaseG';
            a[a.uppercaseH = 72] = 'uppercaseH';
            a[a.uppercaseI = 73] = 'uppercaseI';
            a[a.uppercaseJ = 74] = 'uppercaseJ';
            a[a.uppercaseK = 75] = 'uppercaseK';
            a[a.uppercaseL = 76] = 'uppercaseL';
            a[a.uppercaseM = 77] = 'uppercaseM';
            a[a.uppercaseN = 78] = 'uppercaseN';
            a[a.uppercaseO = 79] = 'uppercaseO';
            a[a.uppercaseP = 80] = 'uppercaseP';
            a[a.uppercaseQ = 81] = 'uppercaseQ';
            a[a.uppercaseR = 82] = 'uppercaseR';
            a[a.uppercaseS = 83] = 'uppercaseS';
            a[a.uppercaseT = 84] = 'uppercaseT';
            a[a.uppercaseU = 85] = 'uppercaseU';
            a[a.uppercaseV = 86] = 'uppercaseV';
            a[a.uppercaseW = 87] = 'uppercaseW';
            a[a.uppercaseX = 88] = 'uppercaseX';
            a[a.uppercaseY = 89] = 'uppercaseY';
            a[a.uppercaseZ = 90] = 'uppercaseZ';
            a[a.leftSquareBracket = 91] = 'leftSquareBracket';
            a[a.backslash = 92] = 'backslash';
            a[a.rightSquareBracket = 93] = 'rightSquareBracket';
            a[a.caret = 94] = 'caret';
            a[a.underscore = 95] = 'underscore';
            a[a.graveAccent = 96] = 'graveAccent';
            a[a.lowercaseA = 97] = 'lowercaseA';
            a[a.lowercaseB = 98] = 'lowercaseB';
            a[a.lowercaseC = 99] = 'lowercaseC';
            a[a.lowercaseD = 100] = 'lowercaseD';
            a[a.lowercaseE = 101] = 'lowercaseE';
            a[a.lowercaseF = 102] = 'lowercaseF';
            a[a.lowercaseG = 103] = 'lowercaseG';
            a[a.lowercaseH = 104] = 'lowercaseH';
            a[a.lowercaseI = 105] = 'lowercaseI';
            a[a.lowercaseJ = 106] = 'lowercaseJ';
            a[a.lowercaseK = 107] = 'lowercaseK';
            a[a.lowercaseL = 108] = 'lowercaseL';
            a[a.lowercaseM = 109] = 'lowercaseM';
            a[a.lowercaseN = 110] = 'lowercaseN';
            a[a.lowercaseO = 111] = 'lowercaseO';
            a[a.lowercaseP = 112] = 'lowercaseP';
            a[a.lowercaseQ = 113] = 'lowercaseQ';
            a[a.lowercaseR = 114] = 'lowercaseR';
            a[a.lowercaseS = 115] = 'lowercaseS';
            a[a.lowercaseT = 116] = 'lowercaseT';
            a[a.lowercaseU = 117] = 'lowercaseU';
            a[a.lowercaseV = 118] = 'lowercaseV';
            a[a.lowercaseW = 119] = 'lowercaseW';
            a[a.lowercaseX = 120] = 'lowercaseX';
            a[a.lowercaseY = 121] = 'lowercaseY';
            a[a.lowercaseZ = 122] = 'lowercaseZ';
            a[a.leftCurlyBrace = 123] = 'leftCurlyBrace';
            a[a.verticalBar = 124] = 'verticalBar';
            a[a.rightCurlyBrace = 125] = 'rightCurlyBrace';
            a[a.tilde = 126] = 'tilde';
            a[a.nonBreakingSpace = 160] = 'nonBreakingSpace';
            a[a.oghamSpaceMark = 5760] = 'oghamSpaceMark';
            a[a.lineSeparator = 8232] = 'lineSeparator';
            a[a.paragraphSeparator = 8233] = 'paragraphSeparator';
        }(d || (d = {}));
}), c.register('OJMmh', function(a, n) {
    b(a.exports, 'isContextual', function() {
        return h;
    }), b(a.exports, 'isLookaheadContextual', function() {
        return i;
    }), b(a.exports, 'eatContextual', function() {
        return j;
    }), b(a.exports, 'expectContextual', function() {
        return k;
    }), b(a.exports, 'unexpected', function() {
        return r;
    }), b(a.exports, 'canInsertSemicolon', function() {
        return l;
    }), b(a.exports, 'hasPrecedingLineBreak', function() {
        return m;
    }), b(a.exports, 'hasFollowingLineBreak', function() {
        return n;
    }), b(a.exports, 'isLineTerminator', function() {
        return o;
    }), b(a.exports, 'semicolon', function() {
        return p;
    }), b(a.exports, 'expect', function() {
        return q;
    });
    var d = c('SI/fV'),
        e = c('KWaC1'),
        f = c('bM7NW'),
        g = c('s9O7r');

    function h(a) {
        return g.state.contextualKeyword === a;
    }

    function i(a) {
        const j = (0, d.lookaheadTypeAndKeyword)();
        return j.type === e.TokenType.name && j.contextualKeyword === a;
    }

    function j(a) {
        return g.state.contextualKeyword === a && (0, d.eat)(e.TokenType.name);
    }

    function k(a) {
        j(a) || r();
    }

    function l() {
        return (0, d.match)(e.TokenType.eof) || (0, d.match)(e.TokenType.braceR) || m();
    }

    function m() {
        const n = g.state.tokens[g.state.tokens.length - 1];
        for (let o = n ? n.end : 0; o < g.state.start; o++) {
            const p = g.input.charCodeAt(o);
            if (p === f.charCodes.lineFeed || p === f.charCodes.carriageReturn || 8232 === p || 8233 === p)
                return !0;
        }
        return !1;
    }

    function n() {
        const o = (0, d.nextTokenStart)();
        for (let p = g.state.end; p < o; p++) {
            const q = g.input.charCodeAt(p);
            if (q === f.charCodes.lineFeed || q === f.charCodes.carriageReturn || 8232 === q || 8233 === q)
                return !0;
        }
        return !1;
    }

    function o() {
        return (0, d.eat)(e.TokenType.semi) || l();
    }

    function p() {
        o() || r('Unexpected token, expected ";"');
    }

    function q(a) {
        (0, d.eat)(a) || r(`Unexpected token, expected "${ (0, e.formatTokenType)(a) }"`);
    }

    function r(s = 'Unexpected token', t = g.state.start) {
        if (g.state.error)
            return;
        const u = new SyntaxError(s);
        u.pos = t, g.state.error = u, g.state.pos = g.input.length, (0, d.finishToken)(e.TokenType.eof);
    }
}), c.register('nLDM7', function(a, n) {
    b(a.exports, 'IS_IDENTIFIER_CHAR', function() {
        return g;
    }), b(a.exports, 'IS_IDENTIFIER_START', function() {
        return k;
    });
    var d = c('bM7NW'),
        e = c('i16bo');

    function f(a) {
        if (a < 48)
            return 36 === a;
        if (a < 58)
            return !0;
        if (a < 65)
            return !1;
        if (a < 91)
            return !0;
        if (a < 97)
            return 95 === a;
        if (a < 123)
            return !0;
        if (a < 128)
            return !1;
        throw new Error('Should not be called with non-ASCII char code.');
    }
    const g = new Uint8Array(65536);
    for (let h = 0; h < 128; h++)
        g[h] = f(h) ? 1 : 0;
    for (let i = 128; i < 65536; i++)
        g[i] = 1;
    for (const j of e.WHITESPACE_CHARS)
        g[j] = 0;
    g[8232] = 0, g[8233] = 0;
    const k = g.slice();
    for (let l = d.charCodes.digit0; l <= d.charCodes.digit9; l++)
        k[l] = 0;
}), c.register('i16bo', function(a, n) {
    b(a.exports, 'WHITESPACE_CHARS', function() {
        return e;
    }), b(a.exports, 'skipWhiteSpace', function() {
        return f;
    }), b(a.exports, 'IS_WHITESPACE', function() {
        return g;
    });
    var d = c('bM7NW');
    const e = [
            9,
            11,
            12,
            d.charCodes.space,
            d.charCodes.nonBreakingSpace,
            d.charCodes.oghamSpaceMark,
            8192,
            8193,
            8194,
            8195,
            8196,
            8197,
            8198,
            8199,
            8200,
            8201,
            8202,
            8239,
            8287,
            12288,
            65279
        ],
        f = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        g = new Uint8Array(65536);
    for (const h of e)
        g[h] = 1;
}), c.register('c3pNO', function(a, n) {
    b(a.exports, 'default', function() {
        return j;
    });
    var d = c('s9O7r'),
        e = c('bM7NW'),
        f = c('nLDM7'),
        g = c('SI/fV'),
        h = c('q38NC'),
        i = c('KWaC1');

    function j() {
        let k = 0,
            l = 0,
            m = d.state.pos;
        for (; m < d.input.length && (l = d.input.charCodeAt(m), !(l < e.charCodes.lowercaseA || l > e.charCodes.lowercaseZ));) {
            const n = h.READ_WORD_TREE[k + (l - e.charCodes.lowercaseA) + 1];
            if (-1 === n)
                break;
            k = n, m++;
        }
        const n = h.READ_WORD_TREE[k];
        if (n > -1 && !f.IS_IDENTIFIER_CHAR[l])
            return d.state.pos = m, void(1 & n ? (0, g.finishToken)(n >>> 1) : (0, g.finishToken)(i.TokenType.name, n >>> 1));
        for (; m < d.input.length;) {
            const o = d.input.charCodeAt(m);
            if (f.IS_IDENTIFIER_CHAR[o])
                m++;
            else if (o === e.charCodes.backslash) {
                if (m += 2, d.input.charCodeAt(m) === e.charCodes.leftCurlyBrace) {
                    for (; m < d.input.length && d.input.charCodeAt(m) !== e.charCodes.rightCurlyBrace;)
                        m++;
                    m++;
                }
            } else {
                if (o !== e.charCodes.atSign || d.input.charCodeAt(m + 1) !== e.charCodes.atSign)
                    break;
                m += 2;
            }
        }
        d.state.pos = m, (0, g.finishToken)(i.TokenType.name);
    }
}), c.register('q38NC', function(a, h) {
    b(a.exports, 'READ_WORD_TREE', function() {
        return f;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1');
    const f = new Int32Array([
        -1,
        27,
        783,
        918,
        1755,
        2376,
        2862,
        3483,
        -1,
        3699,
        -1,
        4617,
        4752,
        4833,
        5130,
        5508,
        5940,
        -1,
        6480,
        6939,
        7749,
        8181,
        8451,
        8613,
        -1,
        8829,
        -1,
        -1,
        -1,
        54,
        243,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        432,
        -1,
        -1,
        -1,
        675,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        81,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        108,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        135,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        162,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        189,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        216,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._abstract << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        270,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        297,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        324,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        351,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        378,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        405,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._accessor << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._as << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        459,
        -1,
        -1,
        -1,
        -1,
        -1,
        594,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        486,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        513,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        540,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._assert << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        567,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._asserts << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        621,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        648,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._async << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        702,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        729,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        756,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._await << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        810,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        837,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        864,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        891,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._break << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        945,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1107,
        -1,
        -1,
        -1,
        1242,
        -1,
        -1,
        1350,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        972,
        1026,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        999,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._case << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1053,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1080,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._catch << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1134,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1161,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1188,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1215,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._checks << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1269,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1296,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1323,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._class << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1377,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1404,
        1620,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1431,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._const << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1458,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1485,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1512,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1539,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1566,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1593,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._constructor << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1647,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1674,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1701,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1728,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._continue << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1782,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2349,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1809,
        1971,
        -1,
        -1,
        2106,
        -1,
        -1,
        -1,
        -1,
        -1,
        2241,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1836,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1863,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1890,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1917,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1944,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._debugger << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1998,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2025,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2052,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2079,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._declare << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2133,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2160,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2187,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2214,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._default << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2268,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2295,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2322,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._delete << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._do << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2403,
        -1,
        2484,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2565,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2430,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2457,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._else << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2511,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2538,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._enum << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2592,
        -1,
        -1,
        -1,
        2727,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2619,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2646,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2673,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._export << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2700,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._exports << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2754,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2781,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2808,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2835,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._extends << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2889,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2997,
        -1,
        -1,
        -1,
        -1,
        -1,
        3159,
        -1,
        -1,
        3213,
        -1,
        -1,
        3294,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2916,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2943,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        2970,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._false << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3024,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3051,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3078,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3105,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3132,
        -1,
        1 + (e.TokenType._finally << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3186,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._for << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3240,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3267,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._from << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3321,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3348,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3375,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3402,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3429,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3456,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._function << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3510,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3564,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3537,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._get << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3591,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3618,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3645,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3672,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._global << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3726,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3753,
        4077,
        -1,
        -1,
        -1,
        -1,
        4590,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._if << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3780,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3807,
        -1,
        -1,
        3996,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3834,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3861,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3888,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3915,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3942,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        3969,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._implements << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4023,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4050,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._import << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._in << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        4104,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4185,
        4401,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4131,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4158,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._infer << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4212,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4239,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4266,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4293,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4320,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4347,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4374,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._instanceof << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4428,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4455,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4482,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4509,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4536,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4563,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._interface << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._is << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4644,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4671,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4698,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4725,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._keyof << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4779,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4806,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._let << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4860,
        -1,
        -1,
        -1,
        -1,
        -1,
        4995,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4887,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4914,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4941,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        4968,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._mixins << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5022,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5049,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5076,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5103,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._module << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5157,
        -1,
        -1,
        -1,
        5373,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5427,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5184,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5211,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5238,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5265,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5292,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5319,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5346,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._namespace << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5400,
        -1,
        -1,
        -1,
        1 + (e.TokenType._new << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5454,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5481,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._null << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5535,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5562,
        -1,
        -1,
        -1,
        -1,
        5697,
        5751,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._of << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5589,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5616,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5643,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5670,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._opaque << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5724,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._out << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5778,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5805,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5832,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5859,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5886,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5913,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._override << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5967,
        -1,
        -1,
        6345,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        5994,
        -1,
        -1,
        -1,
        -1,
        -1,
        6129,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6021,
        -1,
        -1,
        -1,
        -1,
        -1,
        6048,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6075,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6102,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._private << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6156,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6183,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6318,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6210,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6237,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6264,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6291,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._protected << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._proto << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6372,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6399,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6426,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6453,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._public << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6507,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6534,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6696,
        -1,
        -1,
        6831,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6561,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6588,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6615,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6642,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6669,
        -1,
        d.ContextualKeyword._readonly << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6723,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6750,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6777,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6804,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._require << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6858,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6885,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6912,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._return << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6966,
        -1,
        -1,
        -1,
        7182,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7236,
        7371,
        -1,
        7479,
        -1,
        7614,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        6993,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7020,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7047,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7074,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7101,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7128,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7155,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._satisfies << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7209,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._set << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7263,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7290,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7317,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7344,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._static << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7398,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7425,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7452,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._super << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7506,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7533,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7560,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7587,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._switch << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7641,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7668,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7695,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7722,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._symbol << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7776,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7938,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8046,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7803,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7857,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7830,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._this << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7884,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7911,
        -1,
        -1,
        -1,
        1 + (e.TokenType._throw << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7965,
        -1,
        -1,
        -1,
        8019,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        7992,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._true << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._try << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8073,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8100,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._type << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8127,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8154,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._typeof << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8208,
        -1,
        -1,
        -1,
        -1,
        8343,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8235,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8262,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8289,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8316,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._unique << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8370,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8397,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8424,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        d.ContextualKeyword._using << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8478,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8532,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8505,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._var << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8559,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8586,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._void << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8640,
        8748,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8667,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8694,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8721,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._while << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8775,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8802,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._with << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8856,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8883,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8910,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        8937,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (e.TokenType._yield << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1
    ]);
}), c.register('tJSN/', function(a, h) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('KWaC1');

    function e(a, f = a.currentIndex()) {
        let g = f + 1;
        if (g(a, g)) {
            const h = a.identifierNameAtIndex(f);
            return {
                isType: !1,
                leftName: h,
                rightName: h,
                endIndex: g
            };
        }
        if (g++, g(a, g))
            return {
                isType: !0,
                leftName: null,
                rightName: null,
                endIndex: g
            };
        if (g++, g(a, g))
            return {
                isType: !1,
                leftName: a.identifierNameAtIndex(f),
                rightName: a.identifierNameAtIndex(f + 2),
                endIndex: g
            };
        if (g++, g(a, g))
            return {
                isType: !0,
                leftName: null,
                rightName: null,
                endIndex: g
            };
        throw new Error(`Unexpected import/export specifier at ${ f }`);
    }

    function g(a, f) {
        const h = a.tokens[f];
        return h.type === d.TokenType.braceR || h.type === d.TokenType.comma;
    }
}), c.register('CnyDH', function(a, j) {
    b(a.exports, 'getNonTypeIdentifiers', function() {
        return h;
    });
    var d = c('SI/fV'),
        e = c('KWaC1'),
        f = c('vSOLj'),
        g = c('982Ng');

    function h(a, b) {
        const i = (0, g.default)(b),
            j = new Set();
        for (let k = 0; k < a.tokens.length; k++) {
            const l = a.tokens[k];
            if (l.type !== e.TokenType.name || l.isType || l.identifierRole !== d.IdentifierRole.Access && l.identifierRole !== d.IdentifierRole.ObjectShorthand && l.identifierRole !== d.IdentifierRole.ExportAccess || l.shadowsGlobal || j.add(a.identifierNameForToken(l)), l.type === e.TokenType.jsxTagStart && j.add(i.base), l.type === e.TokenType.jsxTagStart && k + 1 < a.tokens.length && a.tokens[k + 1].type === e.TokenType.jsxTagEnd && (j.add(i.base), j.add(i.fragmentBase)), l.type === e.TokenType.jsxName && l.identifierRole === d.IdentifierRole.Access) {
                const m = a.identifierNameForToken(l);
                (0, f.startsWithLowerCase)(m) && a.tokens[k + 1].type !== e.TokenType.dot || j.add(a.identifierNameForToken(l));
            }
        }
        return j;
    }
}), c.register('vSOLj', function(a, p) {
    b(a.exports, 'default', function() {
        return j;
    }), b(a.exports, 'startsWithLowerCase', function() {
        return k;
    });
    var d = c('c9Qqt'),
        e = c('SI/fV'),
        f = c('KWaC1'),
        g = c('bM7NW'),
        h = c('982Ng'),
        i = c('/b6LO');
    class j extends i.default {
        __init() {
            this.lastLineNumber = 1;
        }
        __init2() {
            this.lastIndex = 0;
        }
        __init3() {
            this.filenameVarName = null;
        }
        __init4() {
            this.esmAutomaticImportNameResolutions = {};
        }
        __init5() {
            this.cjsAutomaticModuleNameResolutions = {};
        }
        process() {
            return !!this.tokens.matches1(f.TokenType.jsxTagStart) && (this.processJSXTag(), !0);
        }
        getPrefixCode() {
            let k = '';
            if (this.filenameVarName && (k += `const ${ this.filenameVarName } = ${ JSON.stringify(this.options.filePath || '') };`), this.isAutomaticRuntime)
                if (this.importProcessor)
                    for (const [l, m] of Object.entries(this.cjsAutomaticModuleNameResolutions))
                        k += `var ${ m } = require("${ l }");`;
                else {
                    const {
                        createElement: n,
                        ...o
                    } = this.esmAutomaticImportNameResolutions;
                    n && (k += `import {createElement as ${ n }} from "${ this.jsxImportSource }";`);
                    const p = Object.entries(o).map(([q, r]) => `${ q } as ${ r }`).join(', ');
                    if (p) {
                        q += `import {${ p }} from "${ this.jsxImportSource + (this.options.production ? '/jsx-runtime' : '/jsx-dev-runtime') }";`;
                    }
                }
            return k;
        }
        processJSXTag() {
            const {
                jsxRole: l,
                start: m
            } = this.tokens.currentToken(), n = this.options.production ? null : this.getElementLocationCode(m);
            this.isAutomaticRuntime && l !== e.JSXRole.KeyAfterPropSpread ? this.transformTagToJSXFunc(n, l) : this.transformTagToCreateElement(n);
        }
        getElementLocationCode(a) {
            return `lineNumber: ${ this.getLineNumberForIndex(a) }`;
        }
        getLineNumberForIndex(a) {
            const k = this.tokens.code;
            for (; this.lastIndex < a && this.lastIndex < k.length;)
                '\n' === k[this.lastIndex] && this.lastLineNumber++, this.lastIndex++;
            return this.lastLineNumber;
        }
        transformTagToJSXFunc(a, b) {
            const k = b === e.JSXRole.StaticChildren;
            this.tokens.replaceToken(this.getJSXFuncInvocationCode(k));
            let l = null;
            if (this.tokens.matches1(f.TokenType.jsxTagEnd))
                this.tokens.replaceToken(`${ this.getFragmentCode() }, {`), this.processAutomaticChildrenAndEndProps(b);
            else {
                if (this.processTagIntro(), this.tokens.appendCode(', {'), l = this.processProps(!0), this.tokens.matches2(f.TokenType.slash, f.TokenType.jsxTagEnd))
                    this.tokens.appendCode('}');
                else {
                    if (!this.tokens.matches1(f.TokenType.jsxTagEnd))
                        throw new Error('Expected either /> or > at the end of the tag.');
                    this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(b);
                }
                l && this.tokens.appendCode(`, ${ l }`);
            }
            for (this.options.production || (null === l && this.tokens.appendCode(', void 0'), this.tokens.appendCode(`, ${ k }, ${ this.getDevSource(a) }, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(f.TokenType.jsxTagEnd);)
                this.tokens.removeToken();
            this.tokens.replaceToken(')');
        }
        transformTagToCreateElement(a) {
            if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(f.TokenType.jsxTagEnd))
                this.tokens.replaceToken(`${ this.getFragmentCode() }, null`), this.processChildren(!0);
            else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(a), this.tokens.matches2(f.TokenType.slash, f.TokenType.jsxTagEnd));
            else {
                if (!this.tokens.matches1(f.TokenType.jsxTagEnd))
                    throw new Error('Expected either /> or > at the end of the tag.');
                this.tokens.removeToken(), this.processChildren(!0);
            }
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(f.TokenType.jsxTagEnd);)
                this.tokens.removeToken();
            this.tokens.replaceToken(')');
        }
        getJSXFuncInvocationCode(a) {
            return this.options.production ? a ? this.claimAutoImportedFuncInvocation('jsxs', '/jsx-runtime') : this.claimAutoImportedFuncInvocation('jsx', '/jsx-runtime') : this.claimAutoImportedFuncInvocation('jsxDEV', '/jsx-dev-runtime');
        }
        getCreateElementInvocationCode() {
            if (this.isAutomaticRuntime)
                return this.claimAutoImportedFuncInvocation('createElement', '');
            {
                const {
                    jsxPragmaInfo: k
                } = this;
                return `${ this.importProcessor && this.importProcessor.getIdentifierReplacement(k.base) || k.base }${ k.suffix }(`;
            }
        }
        getFragmentCode() {
            if (this.isAutomaticRuntime)
                return this.claimAutoImportedName('Fragment', this.options.production ? '/jsx-runtime' : '/jsx-dev-runtime');
            {
                const {
                    jsxPragmaInfo: l
                } = this;
                return (this.importProcessor && this.importProcessor.getIdentifierReplacement(l.fragmentBase) || l.fragmentBase) + l.fragmentSuffix;
            }
        }
        claimAutoImportedFuncInvocation(a, b) {
            const k = this.claimAutoImportedName(a, b);
            return this.importProcessor ? `${ k }.call(void 0, ` : `${ k }(`;
        }
        claimAutoImportedName(a, b) {
            if (this.importProcessor) {
                const k = this.jsxImportSource + b;
                return this.cjsAutomaticModuleNameResolutions[k] || (this.cjsAutomaticModuleNameResolutions[k] = this.importProcessor.getFreeIdentifierForPath(k)), `${ this.cjsAutomaticModuleNameResolutions[k] }.${ a }`;
            }
            return this.esmAutomaticImportNameResolutions[a] || (this.esmAutomaticImportNameResolutions[a] = this.nameManager.claimFreeName(`_${ a }`)), this.esmAutomaticImportNameResolutions[a];
        }
        processTagIntro() {
            let k = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[k].isType || !this.tokens.matches2AtIndex(k - 1, f.TokenType.jsxName, f.TokenType.jsxName) && !this.tokens.matches2AtIndex(k - 1, f.TokenType.greaterThan, f.TokenType.jsxName) && !this.tokens.matches1AtIndex(k, f.TokenType.braceL) && !this.tokens.matches1AtIndex(k, f.TokenType.jsxTagEnd) && !this.tokens.matches2AtIndex(k, f.TokenType.slash, f.TokenType.jsxTagEnd);)
                k++;
            if (k === this.tokens.currentIndex() + 1) {
                const l = this.tokens.identifierName();
                k(l) && this.tokens.replaceToken(`'${ l }'`);
            }
            for (; this.tokens.currentIndex() < k;)
                this.rootTransformer.processToken();
        }
        processPropsObjectWithDevInfo(a) {
            const k = this.options.production ? '' : `__self: this, __source: ${ this.getDevSource(a) }`;
            this.tokens.matches1(f.TokenType.jsxName) || this.tokens.matches1(f.TokenType.braceL) ? (this.tokens.appendCode(', {'), this.processProps(!1), k ? this.tokens.appendCode(` ${ k }}`) : this.tokens.appendCode('}')) : k ? this.tokens.appendCode(`, {${ k }}`) : this.tokens.appendCode(', null');
        }
        processProps(a) {
            let k = null;
            for (;;) {
                if (this.tokens.matches2(f.TokenType.jsxName, f.TokenType.eq)) {
                    const l = this.tokens.identifierName();
                    if (a && 'key' === l) {
                        null !== k && this.tokens.appendCode(k.replace(/[^\n]/g, '')), this.tokens.removeToken(), this.tokens.removeToken();
                        const m = this.tokens.snapshot();
                        this.processPropValue(), k = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(m);
                        continue;
                    }
                    this.processPropName(l), this.tokens.replaceToken(': '), this.processPropValue();
                } else if (this.tokens.matches1(f.TokenType.jsxName)) {
                    const m = this.tokens.identifierName();
                    this.processPropName(m), this.tokens.appendCode(': true');
                } else {
                    if (!this.tokens.matches1(f.TokenType.braceL))
                        break;
                    this.tokens.replaceToken(''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken('');
                }
                this.tokens.appendCode(',');
            }
            return k;
        }
        processPropName(a) {
            a.includes('-') ? this.tokens.replaceToken(`'${ a }'`) : this.tokens.copyToken();
        }
        processPropValue() {
            this.tokens.matches1(f.TokenType.braceL) ? (this.tokens.replaceToken(''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken('')) : this.tokens.matches1(f.TokenType.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue();
        }
        processStringPropValue() {
            const k = this.tokens.currentToken(),
                l = this.tokens.code.slice(k.start + 1, k.end - 1),
                m = l(l),
                n = function(k) {
                    let o = '';
                    for (let p = 0; p < k.length; p++) {
                        const q = k[p];
                        if ('\n' === q)
                            if (/\s/.test(k[p + 1]))
                                for (o += ' '; p < k.length && /\s/.test(k[p + 1]);)
                                    p++;
                            else
                                o += '\n';
                        else if ('&' === q) {
                            const {
                                entity: r,
                                newI: s
                            } = m(k, p + 1);
                            o += r, p = s - 1;
                        } else
                            o += q;
                    }
                    return JSON.stringify(o);
                }(l);
            this.tokens.replaceToken(n + m);
        }
        processAutomaticChildrenAndEndProps(a) {
            a === e.JSXRole.StaticChildren ? (this.tokens.appendCode(' children: ['), this.processChildren(!1), this.tokens.appendCode(']}')) : (a === e.JSXRole.OneChild && this.tokens.appendCode(' children: '), this.processChildren(!1), this.tokens.appendCode('}'));
        }
        processChildren(a) {
            let k = l;
            for (;;) {
                if (this.tokens.matches2(f.TokenType.jsxTagStart, f.TokenType.slash))
                    return;
                let m = !1;
                if (this.tokens.matches1(f.TokenType.braceL))
                    this.tokens.matches2(f.TokenType.braceL, f.TokenType.braceR) ? (this.tokens.replaceToken(''), this.tokens.replaceToken('')) : (this.tokens.replaceToken(k ? ', ' : ''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(''), m = !0);
                else if (this.tokens.matches1(f.TokenType.jsxTagStart))
                    this.tokens.appendCode(k ? ', ' : ''), this.processJSXTag(), m = !0;
                else {
                    if (!this.tokens.matches1(f.TokenType.jsxText) && !this.tokens.matches1(f.TokenType.jsxEmptyText))
                        throw new Error('Unexpected token when processing JSX children.');
                    m = this.processChildTextElement(k);
                }
                m && (k = !0);
            }
        }
        processChildTextElement(a) {
            const k = this.tokens.currentToken(),
                l = this.tokens.code.slice(k.start, k.end),
                m = l(l),
                n = function(a) {
                    let o = '',
                        p = '',
                        q = !1,
                        r = !1;
                    for (let s = 0; s < a.length; s++) {
                        const t = a[s];
                        if (' ' === t || '\t' === t || '\r' === t)
                            q || (p += t);
                        else if ('\n' === t)
                            p = '', q = !0;
                        else {
                            if (r && q && (o += ' '), o += p, p = '', '&' === t) {
                                const {
                                    entity: u,
                                    newI: v
                                } = m(a, s + 1);
                                s = v - 1, o += u;
                            } else
                                o += t;
                            r = !0, q = !1;
                        }
                    }
                    q || (o += p);
                    return JSON.stringify(o);
                }(l);
            return '""' === n ? (this.tokens.replaceToken(m), !1) : (this.tokens.replaceToken(`${ a ? ', ' : '' }${ n }${ m }`), !0);
        }
        getDevSource(a) {
            return `{fileName: ${ this.getFilenameVarName() }, ${ a }}`;
        }
        getFilenameVarName() {
            return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName('_jsxFileName')), this.filenameVarName;
        }
        constructor(a, b, c, o, d) {
            super(), this.rootTransformer = a, this.tokens = b, this.importProcessor = c, this.nameManager = o, this.options = d, j.prototype.__init.call(this), j.prototype.__init2.call(this), j.prototype.__init3.call(this), j.prototype.__init4.call(this), j.prototype.__init5.call(this), this.jsxPragmaInfo = (0, h.default)(d), this.isAutomaticRuntime = 'automatic' === d.jsxRuntime, this.jsxImportSource = d.jsxImportSource || 'react';
        }
    }

    function k(a) {
        const l = a.charCodeAt(0);
        return l >= g.charCodes.lowercaseA && l <= g.charCodes.lowercaseZ;
    }

    function l(a) {
        let m = 0,
            n = 0;
        for (const o of a)
            '\n' === o ? (m++, n = 0) : ' ' === o && n++;
        return '\n'.repeat(m) + ' '.repeat(n);
    }

    function m(a, b) {
        let n, o = '',
            p = 0,
            q = r;
        if ('#' === a[q]) {
            let s, t = 10;
            if (q++, 'x' === a[q])
                for (t = 16, q++, s = q; q < a.length && ((h = a.charCodeAt(q)) >= g.charCodes.digit0 && h <= g.charCodes.digit9 || h >= g.charCodes.lowercaseA && h <= g.charCodes.lowercaseF || h >= g.charCodes.uppercaseA && h <= g.charCodes.uppercaseF);)
                    q++;
            else
                for (s = q; q < a.length && n(a.charCodeAt(q));)
                    q++;
            if (';' === a[q]) {
                const u = a.slice(s, q);
                u && (q++, n = String.fromCodePoint(parseInt(u, t)));
            }
        } else
            for (; q < a.length && p++ < 10;) {
                const s = a[q];
                if (q++, ';' === s) {
                    n = d.default.get(o);
                    break;
                }
                o += s;
            }
        var s;
        return n ? {
            entity: n,
            newI: q
        } : {
            entity: '&',
            newI: r
        };
    }

    function n(a) {
        return a >= g.charCodes.digit0 && a <= g.charCodes.digit9;
    }
}), c.register('c9Qqt', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    var d = new Map([
        [
            'quot',
            '"'
        ],
        [
            'amp',
            '&'
        ],
        [
            'apos',
            '\''
        ],
        [
            'lt',
            '<'
        ],
        [
            'gt',
            '>'
        ],
        [
            'nbsp',
            '\xA0'
        ],
        [
            'iexcl',
            '\xA1'
        ],
        [
            'cent',
            '\xA2'
        ],
        [
            'pound',
            '\xA3'
        ],
        [
            'curren',
            '\xA4'
        ],
        [
            'yen',
            '\xA5'
        ],
        [
            'brvbar',
            '\xA6'
        ],
        [
            'sect',
            '\xA7'
        ],
        [
            'uml',
            '\xA8'
        ],
        [
            'copy',
            '\xA9'
        ],
        [
            'ordf',
            'ª'
        ],
        [
            'laquo',
            '\xAB'
        ],
        [
            'not',
            '\xAC'
        ],
        [
            'shy',
            '\xAD'
        ],
        [
            'reg',
            '\xAE'
        ],
        [
            'macr',
            '\xAF'
        ],
        [
            'deg',
            '\xB0'
        ],
        [
            'plusmn',
            '\xB1'
        ],
        [
            'sup2',
            '\xB2'
        ],
        [
            'sup3',
            '\xB3'
        ],
        [
            'acute',
            '\xB4'
        ],
        [
            'micro',
            'µ'
        ],
        [
            'para',
            '\xB6'
        ],
        [
            'middot',
            '\xB7'
        ],
        [
            'cedil',
            '\xB8'
        ],
        [
            'sup1',
            '\xB9'
        ],
        [
            'ordm',
            'º'
        ],
        [
            'raquo',
            '\xBB'
        ],
        [
            'frac14',
            '\xBC'
        ],
        [
            'frac12',
            '\xBD'
        ],
        [
            'frac34',
            '\xBE'
        ],
        [
            'iquest',
            '\xBF'
        ],
        [
            'Agrave',
            'À'
        ],
        [
            'Aacute',
            'Á'
        ],
        [
            'Acirc',
            'Â'
        ],
        [
            'Atilde',
            'Ã'
        ],
        [
            'Auml',
            'Ä'
        ],
        [
            'Aring',
            'Å'
        ],
        [
            'AElig',
            'Æ'
        ],
        [
            'Ccedil',
            'Ç'
        ],
        [
            'Egrave',
            'È'
        ],
        [
            'Eacute',
            'É'
        ],
        [
            'Ecirc',
            'Ê'
        ],
        [
            'Euml',
            'Ë'
        ],
        [
            'Igrave',
            'Ì'
        ],
        [
            'Iacute',
            'Í'
        ],
        [
            'Icirc',
            'Î'
        ],
        [
            'Iuml',
            'Ï'
        ],
        [
            'ETH',
            'Ð'
        ],
        [
            'Ntilde',
            'Ñ'
        ],
        [
            'Ograve',
            'Ò'
        ],
        [
            'Oacute',
            'Ó'
        ],
        [
            'Ocirc',
            'Ô'
        ],
        [
            'Otilde',
            'Õ'
        ],
        [
            'Ouml',
            'Ö'
        ],
        [
            'times',
            '\xD7'
        ],
        [
            'Oslash',
            'Ø'
        ],
        [
            'Ugrave',
            'Ù'
        ],
        [
            'Uacute',
            'Ú'
        ],
        [
            'Ucirc',
            'Û'
        ],
        [
            'Uuml',
            'Ü'
        ],
        [
            'Yacute',
            'Ý'
        ],
        [
            'THORN',
            'Þ'
        ],
        [
            'szlig',
            'ß'
        ],
        [
            'agrave',
            'à'
        ],
        [
            'aacute',
            'á'
        ],
        [
            'acirc',
            'â'
        ],
        [
            'atilde',
            'ã'
        ],
        [
            'auml',
            'ä'
        ],
        [
            'aring',
            'å'
        ],
        [
            'aelig',
            'æ'
        ],
        [
            'ccedil',
            'ç'
        ],
        [
            'egrave',
            'è'
        ],
        [
            'eacute',
            'é'
        ],
        [
            'ecirc',
            'ê'
        ],
        [
            'euml',
            'ë'
        ],
        [
            'igrave',
            'ì'
        ],
        [
            'iacute',
            'í'
        ],
        [
            'icirc',
            'î'
        ],
        [
            'iuml',
            'ï'
        ],
        [
            'eth',
            'ð'
        ],
        [
            'ntilde',
            'ñ'
        ],
        [
            'ograve',
            'ò'
        ],
        [
            'oacute',
            'ó'
        ],
        [
            'ocirc',
            'ô'
        ],
        [
            'otilde',
            'õ'
        ],
        [
            'ouml',
            'ö'
        ],
        [
            'divide',
            '\xF7'
        ],
        [
            'oslash',
            'ø'
        ],
        [
            'ugrave',
            'ù'
        ],
        [
            'uacute',
            'ú'
        ],
        [
            'ucirc',
            'û'
        ],
        [
            'uuml',
            'ü'
        ],
        [
            'yacute',
            'ý'
        ],
        [
            'thorn',
            'þ'
        ],
        [
            'yuml',
            'ÿ'
        ],
        [
            'OElig',
            'Œ'
        ],
        [
            'oelig',
            'œ'
        ],
        [
            'Scaron',
            'Š'
        ],
        [
            'scaron',
            'š'
        ],
        [
            'Yuml',
            'Ÿ'
        ],
        [
            'fnof',
            'ƒ'
        ],
        [
            'circ',
            'ˆ'
        ],
        [
            'tilde',
            '\u02DC'
        ],
        [
            'Alpha',
            'Α'
        ],
        [
            'Beta',
            'Β'
        ],
        [
            'Gamma',
            'Γ'
        ],
        [
            'Delta',
            'Δ'
        ],
        [
            'Epsilon',
            'Ε'
        ],
        [
            'Zeta',
            'Ζ'
        ],
        [
            'Eta',
            'Η'
        ],
        [
            'Theta',
            'Θ'
        ],
        [
            'Iota',
            'Ι'
        ],
        [
            'Kappa',
            'Κ'
        ],
        [
            'Lambda',
            'Λ'
        ],
        [
            'Mu',
            'Μ'
        ],
        [
            'Nu',
            'Ν'
        ],
        [
            'Xi',
            'Ξ'
        ],
        [
            'Omicron',
            'Ο'
        ],
        [
            'Pi',
            'Π'
        ],
        [
            'Rho',
            'Ρ'
        ],
        [
            'Sigma',
            'Σ'
        ],
        [
            'Tau',
            'Τ'
        ],
        [
            'Upsilon',
            'Υ'
        ],
        [
            'Phi',
            'Φ'
        ],
        [
            'Chi',
            'Χ'
        ],
        [
            'Psi',
            'Ψ'
        ],
        [
            'Omega',
            'Ω'
        ],
        [
            'alpha',
            'α'
        ],
        [
            'beta',
            'β'
        ],
        [
            'gamma',
            'γ'
        ],
        [
            'delta',
            'δ'
        ],
        [
            'epsilon',
            'ε'
        ],
        [
            'zeta',
            'ζ'
        ],
        [
            'eta',
            'η'
        ],
        [
            'theta',
            'θ'
        ],
        [
            'iota',
            'ι'
        ],
        [
            'kappa',
            'κ'
        ],
        [
            'lambda',
            'λ'
        ],
        [
            'mu',
            'μ'
        ],
        [
            'nu',
            'ν'
        ],
        [
            'xi',
            'ξ'
        ],
        [
            'omicron',
            'ο'
        ],
        [
            'pi',
            'π'
        ],
        [
            'rho',
            'ρ'
        ],
        [
            'sigmaf',
            'ς'
        ],
        [
            'sigma',
            'σ'
        ],
        [
            'tau',
            'τ'
        ],
        [
            'upsilon',
            'υ'
        ],
        [
            'phi',
            'φ'
        ],
        [
            'chi',
            'χ'
        ],
        [
            'psi',
            'ψ'
        ],
        [
            'omega',
            'ω'
        ],
        [
            'thetasym',
            'ϑ'
        ],
        [
            'upsih',
            'ϒ'
        ],
        [
            'piv',
            'ϖ'
        ],
        [
            'ensp',
            '\u2002'
        ],
        [
            'emsp',
            '\u2003'
        ],
        [
            'thinsp',
            '\u2009'
        ],
        [
            'zwnj',
            '‌'
        ],
        [
            'zwj',
            '‍'
        ],
        [
            'lrm',
            '\u200E'
        ],
        [
            'rlm',
            '\u200F'
        ],
        [
            'ndash',
            '\u2013'
        ],
        [
            'mdash',
            '\u2014'
        ],
        [
            'lsquo',
            '\u2018'
        ],
        [
            'rsquo',
            '\u2019'
        ],
        [
            'sbquo',
            '\u201A'
        ],
        [
            'ldquo',
            '\u201C'
        ],
        [
            'rdquo',
            '\u201D'
        ],
        [
            'bdquo',
            '\u201E'
        ],
        [
            'dagger',
            '\u2020'
        ],
        [
            'Dagger',
            '\u2021'
        ],
        [
            'bull',
            '\u2022'
        ],
        [
            'hellip',
            '\u2026'
        ],
        [
            'permil',
            '\u2030'
        ],
        [
            'prime',
            '\u2032'
        ],
        [
            'Prime',
            '\u2033'
        ],
        [
            'lsaquo',
            '\u2039'
        ],
        [
            'rsaquo',
            '\u203A'
        ],
        [
            'oline',
            '\u203E'
        ],
        [
            'frasl',
            '\u2044'
        ],
        [
            'euro',
            '\u20AC'
        ],
        [
            'image',
            'ℑ'
        ],
        [
            'weierp',
            '\u2118'
        ],
        [
            'real',
            'ℜ'
        ],
        [
            'trade',
            '\u2122'
        ],
        [
            'alefsym',
            'ℵ'
        ],
        [
            'larr',
            '\u2190'
        ],
        [
            'uarr',
            '\u2191'
        ],
        [
            'rarr',
            '\u2192'
        ],
        [
            'darr',
            '\u2193'
        ],
        [
            'harr',
            '\u2194'
        ],
        [
            'crarr',
            '\u21B5'
        ],
        [
            'lArr',
            '\u21D0'
        ],
        [
            'uArr',
            '\u21D1'
        ],
        [
            'rArr',
            '\u21D2'
        ],
        [
            'dArr',
            '\u21D3'
        ],
        [
            'hArr',
            '\u21D4'
        ],
        [
            'forall',
            '\u2200'
        ],
        [
            'part',
            '\u2202'
        ],
        [
            'exist',
            '\u2203'
        ],
        [
            'empty',
            '\u2205'
        ],
        [
            'nabla',
            '\u2207'
        ],
        [
            'isin',
            '\u2208'
        ],
        [
            'notin',
            '\u2209'
        ],
        [
            'ni',
            '\u220B'
        ],
        [
            'prod',
            '\u220F'
        ],
        [
            'sum',
            '\u2211'
        ],
        [
            'minus',
            '\u2212'
        ],
        [
            'lowast',
            '\u2217'
        ],
        [
            'radic',
            '\u221A'
        ],
        [
            'prop',
            '\u221D'
        ],
        [
            'infin',
            '\u221E'
        ],
        [
            'ang',
            '\u2220'
        ],
        [
            'and',
            '\u2227'
        ],
        [
            'or',
            '\u2228'
        ],
        [
            'cap',
            '\u2229'
        ],
        [
            'cup',
            '\u222A'
        ],
        [
            'int',
            '\u222B'
        ],
        [
            'there4',
            '\u2234'
        ],
        [
            'sim',
            '\u223C'
        ],
        [
            'cong',
            '\u2245'
        ],
        [
            'asymp',
            '\u2248'
        ],
        [
            'ne',
            '\u2260'
        ],
        [
            'equiv',
            '\u2261'
        ],
        [
            'le',
            '\u2264'
        ],
        [
            'ge',
            '\u2265'
        ],
        [
            'sub',
            '\u2282'
        ],
        [
            'sup',
            '\u2283'
        ],
        [
            'nsub',
            '\u2284'
        ],
        [
            'sube',
            '\u2286'
        ],
        [
            'supe',
            '\u2287'
        ],
        [
            'oplus',
            '\u2295'
        ],
        [
            'otimes',
            '\u2297'
        ],
        [
            'perp',
            '\u22A5'
        ],
        [
            'sdot',
            '\u22C5'
        ],
        [
            'lceil',
            '\u2308'
        ],
        [
            'rceil',
            '\u2309'
        ],
        [
            'lfloor',
            '\u230A'
        ],
        [
            'rfloor',
            '\u230B'
        ],
        [
            'lang',
            '\u2329'
        ],
        [
            'rang',
            '\u232A'
        ],
        [
            'loz',
            '\u25CA'
        ],
        [
            'spades',
            '\u2660'
        ],
        [
            'clubs',
            '\u2663'
        ],
        [
            'hearts',
            '\u2665'
        ],
        [
            'diams',
            '\u2666'
        ]
    ]);
}), c.register('982Ng', function(a, c) {
    function d(a) {
        const [e, f] = e(a.jsxPragma || 'React.createElement'), [g, h] = e(a.jsxFragmentPragma || 'React.Fragment');
        return {
            base: e,
            suffix: f,
            fragmentBase: g,
            fragmentSuffix: h
        };
    }

    function e(a) {
        let f = a.indexOf('.');
        return -1 === f && (f = a.length), [
            a.slice(0, f),
            a.slice(f)
        ];
    }
    b(a.exports, 'default', function() {
        return d;
    });
}), c.register('/b6LO', function(a, c) {
    b(a.exports, 'default', function() {
        return d;
    });
    class d {
        getPrefixCode() {
            return '';
        }
        getHoistedCode() {
            return '';
        }
        getSuffixCode() {
            return '';
        }
    }
}), c.register('XMrPF', function(a, k) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('8BwUC'),
        e = c('bM7NW');

    function f({
        code: g,
        mappings: h
    }, c, k, f, n) {
        const i = function(g, h) {
                const j = new Array(h.length);
                let k = 0,
                    l = h[k].start,
                    m = 0;
                for (let n = 0; n < g.length; n++)
                    n === l && (j[k] = l - m, k++, l = h[k].start), g.charCodeAt(n) === e.charCodes.lineFeed && (m = n + 1);
                return j;
            }(f, g),
            j = new(0, d.GenMapping)({
                file: o.compiledFilename
            });
        let k = 0,
            l = h[0];
        for (; void 0 === l && k < h.length - 1;)
            k++, l = h[k];
        let m = 0,
            n = 0;
        l !== n && (0, d.maybeAddSegment)(j, m, 0, c, m, 0);
        for (let o = 0; o < g.length; o++) {
            if (o === l) {
                const p = l - n,
                    q = i[k];
                for ((0, d.maybeAddSegment)(j, m, p, c, m, q);
                    (l === o || void 0 === l) && k < h.length - 1;)
                    k++, l = h[k];
            }
            g.charCodeAt(o) === e.charCodes.lineFeed && (m++, n = o + 1, l !== n && (0, d.maybeAddSegment)(j, m, 0, c, m, 0));
        }
        const {
            sourceRoot: p,
            sourcesContent: q,
            ...r
        } = (0, d.toEncodedMap)(j);
        return r;
    }
}), c.register('8BwUC', function(a, w) {
    b(a.exports, 'maybeAddSegment', function() {
        return i;
    }), b(a.exports, 'toEncodedMap', function() {
        return m;
    }), b(a.exports, 'GenMapping', function() {
        return q;
    });
    var d = c('NjdHx'),
        e = c('qxVwI'),
        f = c('7mYv1');
    let g, h, i, j, k, l, m, n, o, p;
    class q {
        constructor({
            file: r,
            sourceRoot: s
        } = {}) {
            this._names = new(0, d.SetArray)(), this._sources = new(0, d.SetArray)(), this._sourcesContent = [], this._mappings = [], this.file = r, this.sourceRoot = s;
        }
    }

    function t(r, s, c) {
        for (let u = r.length; u > s; u--)
            r[u] = r[u - 1];
        r[s] = u;
    }

    function u(r, s) {
        for (let v = 0; v < s.length; v++)
            (0, d.put)(r, s[v]);
    }

    function v(r, s, c) {
        const {
            generated: w,
            source: x,
            original: y,
            name: z,
            content: A
        } = B;
        if (!x)
            return p(r, s, w.line - 1, w.column, null, null, null, null, null);
        const C = D;
        return p(r, s, w.line - 1, w.column, C, y.line - 1, y.column, z, A);
    }
    g = (r, s, c, w, d, e, f, g) => p(!1, r, s, c, w, d, e, f, g), i = (r, s, c, w, d, e, f, g) => p(!0, r, s, c, w, d, e, f, g), h = (r, s) => v(!1, r, s), j = (r, s) => v(!0, r, s), k = (r, s, c) => {
        const {
            _sources: w,
            _sourcesContent: x
        } = y;
        x[(0, d.put)(w, s)] = c;
    }, l = r => {
        const {
            file: w,
            sourceRoot: x,
            _mappings: y,
            _sources: z,
            _sourcesContent: A,
            _names: B
        } = C;
        return function(C) {
            const {
                length: D
            } = E;
            let F = G;
            for (let H = F - 1; H >= 0 && !(E[H].length > 0); F = H, H--);
            F < H && (E.length = F);
        }(y), {
            version: 3,
            file: w || void 0,
            names: B.array,
            sourceRoot: x || void 0,
            sources: z.array,
            sourcesContent: A,
            mappings: y
        };
    }, m = r => {
        const w = l(r);
        return Object.assign(Object.assign({}, w), {
            mappings: (0, e.encode)(w.mappings)
        });
    }, o = r => {
        const w = [],
            {
                _mappings: x,
                _sources: y,
                _names: z
            } = A;
        for (let B = 0; B < x.length; B++) {
            const C = x[B];
            for (let D = 0; D < C.length; D++) {
                const E = C[D],
                    F = {
                        line: B + 1,
                        column: E[0]
                    };
                let G, H, I;
                1 !== E.length && (G = y.array[E[1]], H = {
                    line: E[2] + 1,
                    column: E[3]
                }, 5 === E.length && (I = z.array[E[4]])), w.push({
                    generated: F,
                    source: G,
                    original: H,
                    name: I
                });
            }
        }
        return w;
    }, n = r => {
        const w = new(0, f.TraceMap)(r),
            x = new q({
                file: w.file,
                sourceRoot: w.sourceRoot
            });
        return u(x._names, w.names), u(x._sources, w.sources), x._sourcesContent = w.sourcesContent || w.sources.map(() => null), x._mappings = (0, f.decodedMappings)(w), x;
    }, p = (r, s, c, E, e, f, g, h, i) => {
        const {
            _mappings: w,
            _sources: x,
            _sourcesContent: y,
            _names: z
        } = A, B = function(r, A) {
            for (let C = r.length; C <= A; C++)
                r[C] = [];
            return r[A];
        }(w, c), C = function(r, A) {
            let D = r.length;
            for (let E = D - 1; E >= 0 && !(A >= r[E][0]); D = E--);
            return D;
        }(B, d);
        if (!e) {
            if (r && function(r, A) {
                    if (0 === A)
                        return !0;
                    const D = r[A - 1];
                    return 1 === D.length;
                }(B, C))
                return;
            return t(B, C, [d]);
        }
        const D = (0, d.put)(x, e),
            E = h ? (0, d.put)(z, h) : -1;
        if (D === y.length && (y[D] = null != i ? i : null), !r || ! function(r, A, c, d, d, e) {
                if (0 === A)
                    return !1;
                const F = r[A - 1];
                return 1 !== F.length && c === F[1] && d === F[2] && d === F[3] && e === (5 === F.length ? F[4] : -1);
            }(B, C, D, f, g, E))
            return t(B, C, h ? [
                d,
                D,
                f,
                g,
                E
            ] : [
                d,
                D,
                f,
                g
            ]);
    };
}), c.register('NjdHx', function(a, c) {
    let d, e, f;
    b(a.exports, 'put', function() {
        return e;
    }), b(a.exports, 'SetArray', function() {
        return g;
    });
    class g {
        constructor() {
            this._indexes = {
                __proto__: null
            }, this.array = [];
        }
    }
    d = (a, b) => a._indexes[b], e = (a, b) => {
        const h = d(a, b);
        if (void 0 !== h)
            return h;
        const {
            array: i,
            _indexes: j
        } = k;
        return j[b] = i.push(b) - 1;
    }, f = a => {
        const {
            array: h,
            _indexes: i
        } = j;
        0 !== h.length && (i[h.pop()] = void 0);
    };
}), c.register('qxVwI', function(a, o) {
    b(a.exports, 'decode', function() {
        return l;
    }), b(a.exports, 'encode', function() {
        return r;
    });
    var d = c('6319O').Buffer;
    const e = ','.charCodeAt(0),
        f = ';'.charCodeAt(0),
        g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        h = new Uint8Array(64),
        i = new Uint8Array(128);
    for (let j = 0; j < g.length; j++) {
        const k = g.charCodeAt(j);
        h[j] = k, i[k] = j;
    }
    const k = 'undefined' != typeof TextDecoder ? new TextDecoder() : void 0 !== d ? {
        decode: j => d.from(j.buffer, j.byteOffset, j.byteLength).toString()
    } : {
        decode(j) {
            let l = '';
            for (let m = 0; m < j.length; m++)
                l += String.fromCharCode(j[m]);
            return l;
        }
    };

    function l(j) {
        const m = new Int32Array(5),
            n = [];
        let o = 0;
        do {
            const p = m(j, o),
                q = [];
            let r = !0,
                s = 0;
            m[0] = 0;
            for (let t = u; t < p; t++) {
                let v;
                t = n(j, t, m, 0);
                const w = m[0];
                w < s && (r = !1), s = w, o(j, t, p) ? (t = n(j, t, m, 1), t = n(j, t, m, 2), t = n(j, t, m, 3), o(j, t, p) ? (t = n(j, t, m, 4), v = [
                    w,
                    m[1],
                    m[2],
                    m[3],
                    m[4]
                ]) : v = [
                    w,
                    m[1],
                    m[2],
                    m[3]
                ]) : v = [w], q.push(v);
            }
            r || p(q), t.push(q), u = p + 1;
        } while (o <= j.length);
        return n;
    }

    function m(j, b) {
        const n = j.indexOf(';', b);
        return -1 === n ? j.length : n;
    }

    function n(j, b, c, u) {
        let o = 0,
            p = 0,
            q = 0;
        do {
            const r = j.charCodeAt(b++);
            q = i[r], o |= (31 & q) << p, p += 5;
        } while (32 & q);
        const r = 1 & o;
        return o >>>= 1, r && (o = -2147483648 | -o), c[u] += o, b;
    }

    function o(j, b, c) {
        return !(b >= c) && j.charCodeAt(b) !== e;
    }

    function p(j) {
        j.sort(q);
    }

    function q(j, b) {
        return j[0] - b[0];
    }

    function r(j) {
        const s = new Int32Array(5),
            t = 16384,
            u = 16348,
            v = new Uint8Array(t),
            w = v.subarray(0, u);
        let x = 0,
            y = '';
        for (let z = 0; z < j.length; z++) {
            const A = j[z];
            if (z > 0 && (x === t && (y += k.decode(v), x = 0), v[x++] = f), 0 !== A.length) {
                s[0] = 0;
                for (let B = 0; B < A.length; B++) {
                    const C = A[B];
                    x > u && (y += k.decode(w), v.copyWithin(0, u, x), x -= u), B > 0 && (v[x++] = e), x = s(v, x, s, C, 0), 1 !== C.length && (x = s(v, x, s, C, 1), x = s(v, x, s, C, 2), x = s(v, x, s, C, 3), 4 !== C.length && (x = s(v, x, s, C, 4)));
                }
            }
        }
        return y + k.decode(v.subarray(0, x));
    }

    function s(j, b, c, m, d) {
        const t = m[d];
        let u = t - c[d];
        c[d] = t, u = u < 0 ? -u << 1 | 1 : u << 1;
        do {
            let v = 31 & u;
            u >>>= 5, u > 0 && (v |= 32), j[b++] = h[v];
        } while (u > 0);
        return b;
    }
}), c.register('7mYv1', function(a, m) {
    b(a.exports, 'TraceMap', function() {
        return E;
    }), b(a.exports, 'decodedMappings', function() {
        return u;
    });
    var d = c('qxVwI'),
        e = c('t4OSu');

    function f(a, b) {
        return b && !b.endsWith('/') && (b += '/'), (0, e.default)(a, b);
    }

    function g(a, b) {
        for (let h = i; h < a.length; h++)
            if (!h(a[h]))
                return h;
        return a.length;
    }

    function h(a) {
        for (let i = 1; i < a.length; i++)
            if (a[i][0] < a[i - 1][0])
                return !1;
        return !0;
    }

    function i(a, b) {
        return b || (a = a.slice()), a.sort(j);
    }

    function j(a, b) {
        return a[0] - b[0];
    }
    let k = !1;

    function l(a, b, c) {
        for (let m = c + 1; m < a.length && a[m][0] === b; c = m++);
        return c;
    }

    function m(a, b, c) {
        for (let n = c - 1; n >= 0 && a[n][0] === b; c = n--);
        return c;
    }

    function n() {
        return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1
        };
    }

    function o(a, b, c, G) {
        const {
            lastKey: p,
            lastNeedle: q,
            lastIndex: r
        } = s;
        let t = 0,
            u = a.length - 1;
        if (G === p) {
            if (b === q)
                return k = -1 !== r && a[r][0] === b, r;
            b >= q ? t = -1 === r ? 0 : r : u = r;
        }
        return s.lastKey = G, s.lastNeedle = b, s.lastIndex = function(a, b, s, G) {
            for (; s <= G;) {
                const v = s + (G - s >> 1),
                    w = a[v][0] - b;
                if (0 === w)
                    return k = !0, v;
                w < 0 ? s = v + 1 : G = v - 1;
            }
            return k = !1, s - 1;
        }(a, b, t, u);
    }

    function p(a, b, c) {
        for (let q = a.length; q > b; q--)
            a[q] = a[q - 1];
        a[b] = q;
    }

    function q() {
        return {
            __proto__: null
        };
    }
    const r = '`line` must be greater than 0 (lines start at line 1)',
        s = '`column` must be greater than or equal to 0 (columns start at column 0)';
    let t, u, v, w, x, y, z, A, B, C, D;
    class E {
        constructor(a, b) {
            const F = 'string' == typeof a;
            if (!F && a._decodedMemo)
                return a;
            const G = F ? JSON.parse(a) : a,
                {
                    version: H,
                    file: I,
                    names: J,
                    sourceRoot: K,
                    sources: L,
                    sourcesContent: M
                } = N;
            this.version = H, this.file = I, this.names = J, this.sourceRoot = K, this.sources = L, this.sourcesContent = M;
            const O = f(K || '', function(a) {
                if (!a)
                    return '';
                const P = a.lastIndexOf('/');
                return a.slice(0, P + 1);
            }(b));
            this.resolvedSources = L.map(a => f(a || '', O));
            const {
                mappings: P
            } = Q;
            'string' == typeof P ? (this._encoded = P, this._decoded = void 0) : (this._encoded = void 0, this._decoded = function(a, b) {
                const R = g(a, 0);
                if (R === a.length)
                    return a;
                b || (a = a.slice());
                for (let S = T; S < a.length; S = g(a, S + 1))
                    a[S] = i(a[S], b);
                return a;
            }(P, F)), this._decodedMemo = {
                lastKey: -1,
                lastNeedle: -1,
                lastIndex: -1
            }, this._bySources = void 0, this._bySourceMemos = void 0;
        }
    }

    function F(a, b) {
        return {
            version: a.version,
            file: a.file,
            names: a.names,
            sourceRoot: a.sourceRoot,
            sources: a.sources,
            sourcesContent: a.sourcesContent,
            mappings: b
        };
    }

    function G(a, b, c, R) {
        return {
            source: a,
            line: b,
            column: c,
            name: R
        };
    }

    function H(a, b) {
        return {
            line: a,
            column: b
        };
    }

    function I(a, b, c, R, d) {
        let J = o(a, R, b, c);
        return k ? J = (-1 === d ? l : m)(a, R, J) : -1 === d && J++, -1 === J || J === a.length ? -1 : J;
    }
    (() => {
        function K(K, b, c, R, d, J) {
            if (--c < 0)
                throw new Error(r);
            if (R < 0)
                throw new Error(s);
            const {
                sources: L,
                resolvedSources: M
            } = N;
            let O = L.indexOf(b);
            if (-1 === O && (O = M.indexOf(b)), -1 === O)
                return J ? [] : H(null, null);
            const P = N._bySources || (N._bySources = function(N, b) {
                    const Q = b.map(q);
                    for (let R = 0; R < N.length; R++) {
                        const S = N[R];
                        for (let T = 0; T < S.length; T++) {
                            const U = S[T];
                            if (1 === U.length)
                                continue;
                            const V = U[1],
                                W = U[2],
                                X = U[3],
                                Y = Q[V],
                                Z = Y[W] || (Y[W] = []),
                                $ = b[V],
                                _ = l(Z, X, o(Z, X, $, W));
                            p(Z, $.lastIndex = _ + 1, [
                                X,
                                R,
                                U[0]
                            ]);
                        }
                    }
                    return Q;
                }(u(N), N._bySourceMemos = L.map(n))),
                Q = P[O][c];
            if (null == Q)
                return J ? [] : H(null, null);
            const R = N._bySourceMemos[O];
            if (J)
                return function(N, b, c, L, d) {
                    let S = I(N, b, c, L, 1);
                    k || -1 !== d || S++;
                    if (-1 === S || S === N.length)
                        return [];
                    const T = k ? L : N[S][0];
                    k || (S = m(N, T, S));
                    const U = l(N, T, S),
                        V = [];
                    for (; S <= U; S++) {
                        const W = N[S];
                        V.push(H(W[1] + 1, W[2]));
                    }
                    return V;
                }(Q, R, c, L, d);
            const S = I(Q, R, c, L, d);
            if (-1 === S)
                return H(null, null);
            const T = Q[S];
            return H(T[1] + 1, T[2]);
        }
        t = K => {
            var L;
            return null !== (L = K._encoded) && void 0 !== L ? L : K._encoded = (0, d.encode)(K._decoded);
        }, u = K => K._decoded || (K._decoded = (0, d.decode)(K._encoded)), v = (K, b, c) => {
            const L = u(K);
            if (b >= L.length)
                return null;
            const M = L[b],
                N = I(M, K._decodedMemo, b, c, 1);
            return -1 === N ? null : M[N];
        }, w = (K, {
            line: L,
            column: M,
            bias: N
        }) => {
            if (--L < 0)
                throw new Error(r);
            if (M < 0)
                throw new Error(s);
            const O = u(K);
            if (L >= O.length)
                return G(null, null, null, null);
            const P = O[L],
                Q = I(P, K._decodedMemo, L, M, N || 1);
            if (-1 === Q)
                return G(null, null, null, null);
            const R = P[Q];
            if (1 === R.length)
                return G(null, null, null, null);
            const {
                names: S,
                resolvedSources: T
            } = U;
            return G(T[R[1]], R[2] + 1, R[3], 5 === R.length ? S[R[4]] : null);
        }, y = (L, {
            source: O,
            line: P,
            column: Q,
            bias: R
        }) => K(L, O, P, Q, R || -1, !0), x = (L, {
            source: S,
            line: T,
            column: U,
            bias: V
        }) => K(L, S, T, U, V || 1, !1), z = (K, L) => {
            const W = u(K),
                {
                    names: X,
                    resolvedSources: Y
                } = Z;
            for (let $ = 0; $ < W.length; $++) {
                const _ = W[$];
                for (let ab = 0; ab < _.length; ab++) {
                    const bb = _[ab],
                        cb = $ + 1,
                        db = bb[0];
                    let eb = null,
                        fb = null,
                        gb = null,
                        hb = null;
                    1 !== bb.length && (eb = Y[bb[1]], fb = bb[2] + 1, gb = bb[3]), 5 === bb.length && (hb = X[bb[4]]), L({
                        generatedLine: cb,
                        generatedColumn: db,
                        source: eb,
                        originalLine: fb,
                        originalColumn: gb,
                        name: hb
                    });
                }
            }
        }, A = (K, L) => {
            const {
                sources: W,
                resolvedSources: X,
                sourcesContent: Y
            } = Z;
            if (null == Y)
                return null;
            let $ = W.indexOf(L);
            return -1 === $ && ($ = X.indexOf(L)), -1 === $ ? null : Y[$];
        }, B = (K, L) => {
            const W = new E(F(K, []), L);
            return W._decoded = K.mappings, W;
        }, C = K => F(K, u(K)), D = K => F(K, t(K));
    })();
}), c.register('t4OSu', function(a, c) {
    b(a.exports, 'default', function() {
        return o;
    });
    const d = /^[\w+.-]+:\/\//,
        e = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
        f = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    var g, h;

    function i(a) {
        return a.startsWith('/');
    }

    function j(a) {
        return /^[.?#]/.test(a);
    }

    function k(a) {
        const l = e.exec(a);
        return l(l[1], l[2] || '', l[3], l[4] || '', l[5] || '/', l[6] || '', l[7] || '');
    }

    function l(a, b, c, d, e, f, h) {
        return {
            scheme: a,
            user: b,
            host: c,
            port: d,
            path: e,
            query: f,
            hash: h,
            type: g.Absolute
        };
    }

    function m(a) {
        if (function(a) {
                return a.startsWith('//');
            }(a)) {
            const n = k('http:' + a);
            return n.scheme = '', n.type = g.SchemeRelative, n;
        }
        if (i(a)) {
            const n = k('http://foo.com' + a);
            return n.scheme = '', n.host = '', n.type = g.AbsolutePath, n;
        }
        if (function(a) {
                return a.startsWith('file:');
            }(a))
            return function(a) {
                const n = f.exec(a),
                    o = n[2];
                return l('file:', '', n[1] || '', '', i(o) ? o : '/' + o, n[3] || '', n[4] || '');
            }(a);
        if (function(a) {
                return d.test(a);
            }(a))
            return k(a);
        const n = k('http://foo.com/' + a);
        return n.scheme = '', n.host = '', n.type = a ? a.startsWith('?') ? g.Query : a.startsWith('#') ? g.Hash : g.RelativePath : g.Empty, n;
    }

    function n(a, b) {
        const o = b <= g.RelativePath,
            p = a.path.split('/');
        let q = 1,
            r = 0,
            s = !1;
        for (let t = 1; t < p.length; t++) {
            const u = p[t];
            u ? (s = !1, '.' !== u && ('..' !== u ? (p[q++] = u, r++) : r ? (s = !0, r--, q--) : o && (p[q++] = u))) : s = !0;
        }
        let u = '';
        for (let v = 1; v < q; v++)
            u += '/' + p[v];
        (!u || s && !u.endsWith('/..')) && (u += '/'), v.path = u;
    }

    function o(a, b) {
        if (!a && !b)
            return '';
        const p = m(a);
        let q = p.type;
        if (b && q !== g.Absolute) {
            const r = m(b),
                s = r.type;
            switch (q) {
                case g.Empty:
                    p.hash = r.hash;
                case g.Hash:
                    p.query = r.query;
                case g.Query:
                case g.RelativePath:
                    ! function(r, b) {
                        n(b, b.type), '/' === r.path ? r.path = b.path : r.path = function(r) {
                            if (r.endsWith('/..'))
                                return r;
                            const t = r.lastIndexOf('/');
                            return r.slice(0, t + 1);
                        }(b.path) + r.path;
                    }(p, r);
                case g.AbsolutePath:
                    p.user = r.user, p.host = r.host, p.port = r.port;
                case g.SchemeRelative:
                    p.scheme = r.scheme;
            }
            s > q && (q = s);
        }
        n(p, q);
        const r = p.query + p.hash;
        switch (q) {
            case g.Hash:
            case g.Query:
                return r;
            case g.RelativePath: {
                const s = p.path.slice(1);
                return s ? j(b || a) && !j(s) ? './' + s + r : s + r : r || '.';
            }
            case g.AbsolutePath:
                return p.path + r;
            default:
                return p.scheme + '//' + p.user + p.host + p.port + p.path + r;
        }
    }
    (h = g || (g = {}))[h.Empty = 1] = 'Empty', h[h.Hash = 2] = 'Hash', h[h.Query = 3] = 'Query', h[h.RelativePath = 4] = 'RelativePath', h[h.AbsolutePath = 5] = 'AbsolutePath', h[h.SchemeRelative = 6] = 'SchemeRelative', h[h.Absolute = 7] = 'Absolute';
}), c.register('pIDve', function(a, c) {
    b(a.exports, 'HelperManager', function() {
        return e;
    });
    const d = {
        require: '\n    import {createRequire as CREATE_REQUIRE_NAME} from "module";\n    const require = CREATE_REQUIRE_NAME(import.meta.url);\n  ',
        interopRequireWildcard: '\n    function interopRequireWildcard(obj) {\n      if (obj && obj.__esModule) {\n        return obj;\n      } else {\n        var newObj = {};\n        if (obj != null) {\n          for (var key in obj) {\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\n              newObj[key] = obj[key];\n            }\n          }\n        }\n        newObj.default = obj;\n        return newObj;\n      }\n    }\n  ',
        interopRequireDefault: '\n    function interopRequireDefault(obj) {\n      return obj && obj.__esModule ? obj : { default: obj };\n    }\n  ',
        createNamedExportFrom: '\n    function createNamedExportFrom(obj, localName, importedName) {\n      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});\n    }\n  ',
        createStarExport: '\n    function createStarExport(obj) {\n      Object.keys(obj)\n        .filter((key) => key !== "default" && key !== "__esModule")\n        .forEach((key) => {\n          if (exports.hasOwnProperty(key)) {\n            return;\n          }\n          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});\n        });\n    }\n  ',
        nullishCoalesce: '\n    function nullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return rhsFn();\n      }\n    }\n  ',
        asyncNullishCoalesce: '\n    async function asyncNullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return await rhsFn();\n      }\n    }\n  ',
        optionalChain: '\n    function optionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) {\n          return undefined;\n        }\n        if (op === \'access\' || op === \'optionalAccess\') {\n          lastAccessLHS = value;\n          value = fn(value);\n        } else if (op === \'call\' || op === \'optionalCall\') {\n          value = fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ',
        asyncOptionalChain: '\n    async function asyncOptionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) {\n          return undefined;\n        }\n        if (op === \'access\' || op === \'optionalAccess\') {\n          lastAccessLHS = value;\n          value = await fn(value);\n        } else if (op === \'call\' || op === \'optionalCall\') {\n          value = await fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ',
        optionalChainDelete: '\n    function optionalChainDelete(ops) {\n      const result = OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  ',
        asyncOptionalChainDelete: '\n    async function asyncOptionalChainDelete(ops) {\n      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  '
    };
    class e {
        __init() {
            this.helperNames = {};
        }
        __init2() {
            this.createRequireName = null;
        }
        getHelperName(a) {
            let f = this.helperNames[a];
            return f || (f = this.nameManager.claimFreeName(`_${ a }`), this.helperNames[a] = f, f);
        }
        emitHelpers() {
            let g = '';
            this.helperNames.optionalChainDelete && this.getHelperName('optionalChain'), this.helperNames.asyncOptionalChainDelete && this.getHelperName('asyncOptionalChain');
            for (const [h, i] of Object.entries(d)) {
                const j = this.helperNames[h];
                let k = l;
                'optionalChainDelete' === h ? k = k.replace('OPTIONAL_CHAIN_NAME', this.helperNames.optionalChain) : 'asyncOptionalChainDelete' === h ? k = k.replace('ASYNC_OPTIONAL_CHAIN_NAME', this.helperNames.asyncOptionalChain) : 'require' === h && (null === this.createRequireName && (this.createRequireName = this.nameManager.claimFreeName('_createRequire')), k = k.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), j && (g += ' ', g += k.replace(h, j).replace(/\s+/g, ' ').trim());
            }
            return g;
        }
        constructor(a) {
            this.nameManager = a, e.prototype.__init.call(this), e.prototype.__init2.call(this);
        }
    }
}), c.register('A1bve', function(a, g) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('SI/fV'),
        e = c('KWaC1');

    function f(a, b, c) {
        (function(a, b) {
            for (const g of a.tokens)
                if (g.type === e.TokenType.name && !g.isType && (0, d.isNonTopLevelDeclaration)(g) && b.has(a.identifierNameForToken(g)))
                    return !0;
            return !1;
        }(a, c) && function(a, b, c) {
            const g = [];
            let h = b.length - 1;
            for (let i = a.tokens.length - 1;; i--) {
                for (; g.length > 0 && g[g.length - 1].startTokenIndex === i + 1;)
                    g.pop();
                for (; h >= 0 && b[h].endTokenIndex === i + 1;)
                    g.push(b[h]), h--;
                if (i < 0)
                    break;
                const j = a.tokens[i],
                    k = a.identifierNameForToken(j);
                if (g.length > 1 && !j.isType && j.type === e.TokenType.name && c.has(k))
                    if ((0, d.isBlockScopedDeclaration)(j))
                        g(g[g.length - 1], a, k);
                    else if ((0, d.isFunctionScopedDeclaration)(j)) {
                    let l = g.length - 1;
                    for (; l > 0 && !g[l].isFunctionScope;)
                        l--;
                    if (l < 0)
                        throw new Error('Did not find parent function scope.');
                    g(g[l], a, k);
                }
            }
            if (g.length > 0)
                throw new Error('Expected empty scope stack after processing file.');
        }(a, b, c));
    }

    function g(a, b, c) {
        for (let h = a.startTokenIndex; h < a.endTokenIndex; h++) {
            const i = b.tokens[h];
            i.type !== e.TokenType.name && i.type !== e.TokenType.jsxName || b.identifierNameForToken(i) !== c || (i.shadowsGlobal = !0);
        }
    }
}), c.register('tcjBN', function(a, g) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('I2Din');
    class e {
        __init() {
            this.usedNames = new Set();
        }
        claimFreeName(a) {
            const f = this.findFreeName(a);
            return this.usedNames.add(f), f;
        }
        findFreeName(a) {
            if (!this.usedNames.has(a))
                return a;
            let f = 2;
            for (; this.usedNames.has(a + String(f));)
                f++;
            return a + String(f);
        }
        constructor(a, b) {
            e.prototype.__init.call(this), this.usedNames = new Set((0, d.default)(a, b));
        }
    }
}), c.register('I2Din', function(a, g) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('KWaC1');

    function e(a, b) {
        const f = [];
        for (const g of b)
            g.type === d.TokenType.name && f.push(a.slice(g.start, g.end));
        return f;
    }
}), c.register('Ppf4T', function(a, d) {
    b(a.exports, 'validateOptions', function() {
        return g;
    });
    var d = c('hfaUw'),
        e = c('sxX04');
    const {
        Options: f
    } = (0, d.createCheckers)(e.default);

    function g(a) {
        f.strictCheck(a);
    }
}), c.register('hfaUw', function(a, b) {
    var d = a.exports && a.exports.__spreadArrays || function() {
        for (var e = 0, f = 0, g = arguments.length; f < g; f++)
            e += arguments[f].length;
        var h = Array(e),
            i = 0;
        for (f = 0; f < g; f++)
            for (var j = arguments[f], k = 0, l = j.length; k < l; k++, i++)
                h[i] = j[k];
        return h;
    };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.Checker = a.exports.createCheckers = void 0;
    var e = c('LPybo'),
        f = c('yMxoS');
    e = c('LPybo');
    Object.defineProperty(a.exports, 'TArray', {
        enumerable: !0,
        get: function() {
            return e.TArray;
        }
    }), Object.defineProperty(a.exports, 'TEnumType', {
        enumerable: !0,
        get: function() {
            return e.TEnumType;
        }
    }), Object.defineProperty(a.exports, 'TEnumLiteral', {
        enumerable: !0,
        get: function() {
            return e.TEnumLiteral;
        }
    }), Object.defineProperty(a.exports, 'TFunc', {
        enumerable: !0,
        get: function() {
            return e.TFunc;
        }
    }), Object.defineProperty(a.exports, 'TIface', {
        enumerable: !0,
        get: function() {
            return e.TIface;
        }
    }), Object.defineProperty(a.exports, 'TLiteral', {
        enumerable: !0,
        get: function() {
            return e.TLiteral;
        }
    }), Object.defineProperty(a.exports, 'TName', {
        enumerable: !0,
        get: function() {
            return e.TName;
        }
    }), Object.defineProperty(a.exports, 'TOptional', {
        enumerable: !0,
        get: function() {
            return e.TOptional;
        }
    }), Object.defineProperty(a.exports, 'TParam', {
        enumerable: !0,
        get: function() {
            return e.TParam;
        }
    }), Object.defineProperty(a.exports, 'TParamList', {
        enumerable: !0,
        get: function() {
            return e.TParamList;
        }
    }), Object.defineProperty(a.exports, 'TProp', {
        enumerable: !0,
        get: function() {
            return e.TProp;
        }
    }), Object.defineProperty(a.exports, 'TTuple', {
        enumerable: !0,
        get: function() {
            return e.TTuple;
        }
    }), Object.defineProperty(a.exports, 'TType', {
        enumerable: !0,
        get: function() {
            return e.TType;
        }
    }), Object.defineProperty(a.exports, 'TUnion', {
        enumerable: !0,
        get: function() {
            return e.TUnion;
        }
    }), Object.defineProperty(a.exports, 'TIntersection', {
        enumerable: !0,
        get: function() {
            return e.TIntersection;
        }
    }), Object.defineProperty(a.exports, 'array', {
        enumerable: !0,
        get: function() {
            return e.array;
        }
    }), Object.defineProperty(a.exports, 'enumlit', {
        enumerable: !0,
        get: function() {
            return e.enumlit;
        }
    }), Object.defineProperty(a.exports, 'enumtype', {
        enumerable: !0,
        get: function() {
            return e.enumtype;
        }
    }), Object.defineProperty(a.exports, 'func', {
        enumerable: !0,
        get: function() {
            return e.func;
        }
    }), Object.defineProperty(a.exports, 'iface', {
        enumerable: !0,
        get: function() {
            return e.iface;
        }
    }), Object.defineProperty(a.exports, 'lit', {
        enumerable: !0,
        get: function() {
            return e.lit;
        }
    }), Object.defineProperty(a.exports, 'name', {
        enumerable: !0,
        get: function() {
            return e.name;
        }
    }), Object.defineProperty(a.exports, 'opt', {
        enumerable: !0,
        get: function() {
            return e.opt;
        }
    }), Object.defineProperty(a.exports, 'param', {
        enumerable: !0,
        get: function() {
            return e.param;
        }
    }), Object.defineProperty(a.exports, 'tuple', {
        enumerable: !0,
        get: function() {
            return e.tuple;
        }
    }), Object.defineProperty(a.exports, 'union', {
        enumerable: !0,
        get: function() {
            return e.union;
        }
    }), Object.defineProperty(a.exports, 'intersection', {
        enumerable: !0,
        get: function() {
            return e.intersection;
        }
    }), Object.defineProperty(a.exports, 'BasicType', {
        enumerable: !0,
        get: function() {
            return e.BasicType;
        }
    });
    f = c('yMxoS');
    Object.defineProperty(a.exports, 'VError', {
        enumerable: !0,
        get: function() {
            return f.VError;
        }
    }), a.exports.createCheckers = function() {
        for (var g = [], h = 0; h < arguments.length; h++)
            g[h] = arguments[h];
        for (var i = Object.assign.apply(Object, d([{},
                e.basicTypes
            ], g)), j = {}, k = 0, l = m; k < l.length; k++)
            for (var n = l[k], o = 0, p = Object.keys(n); o < p.length; o++) {
                var q = p[o];
                j[q] = new g(i, n[q]);
            }
        return j;
    };
    var g = function() {
        function h(h, b, c) {
            if (void 0 === c && (c = 'value'), this.suite = h, this.ttype = b, this._path = c, this.props = new Map(), b instanceof e.TIface)
                for (var i = 0, j = b.props; i < j.length; i++) {
                    var k = j[i];
                    this.props.set(k.name, k.ttype);
                }
            this.checkerPlain = this.ttype.getChecker(h, !1), this.checkerStrict = this.ttype.getChecker(h, !0);
        }
        return h.prototype.setReportedPath = function(h) {
            this._path = h;
        }, h.prototype.check = function(h) {
            return this._doCheck(this.checkerPlain, h);
        }, h.prototype.test = function(h) {
            return this.checkerPlain(h, new f.NoopContext());
        }, h.prototype.validate = function(h) {
            return this._doValidate(this.checkerPlain, h);
        }, h.prototype.strictCheck = function(h) {
            return this._doCheck(this.checkerStrict, h);
        }, h.prototype.strictTest = function(h) {
            return this.checkerStrict(h, new f.NoopContext());
        }, h.prototype.strictValidate = function(h) {
            return this._doValidate(this.checkerStrict, h);
        }, h.prototype.getProp = function(b) {
            var i = this.props.get(b);
            if (!i)
                throw new Error('Type has no property ' + b);
            return new h(this.suite, i, this._path + '.' + b);
        }, h.prototype.methodArgs = function(b) {
            var i = this._getMethod(b);
            return new h(this.suite, i.paramList);
        }, h.prototype.methodResult = function(b) {
            var i = this._getMethod(b);
            return new h(this.suite, i.result);
        }, h.prototype.getArgs = function() {
            if (!(this.ttype instanceof e.TFunc))
                throw new Error('getArgs() applied to non-function');
            return new h(this.suite, this.ttype.paramList);
        }, h.prototype.getResult = function() {
            if (!(this.ttype instanceof e.TFunc))
                throw new Error('getResult() applied to non-function');
            return new h(this.suite, this.ttype.result);
        }, h.prototype.getType = function() {
            return this.ttype;
        }, h.prototype._doCheck = function(h, b) {
            if (!h(b, new f.NoopContext())) {
                var i = new f.DetailContext();
                throw h(b, i), i.getError(this._path);
            }
        }, h.prototype._doValidate = function(h, b) {
            if (h(b, new f.NoopContext()))
                return null;
            var i = new f.DetailContext();
            return h(b, i), i.getErrorDetail(this._path);
        }, h.prototype._getMethod = function(h) {
            var i = this.props.get(h);
            if (!i)
                throw new Error('Type has no property ' + h);
            if (!(i instanceof e.TFunc))
                throw new Error('Property ' + h + ' is not a method');
            return i;
        }, h;
    }();
    a.exports.Checker = g;
}), c.register('LPybo', function(a, b) {
    var d, e = c('6319O').Buffer,
        f = a.exports && a.exports.__extends || (d = function(a, b) {
            return d = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for (var g in b)
                    b.hasOwnProperty(g) && (a[g] = b[g]);
            }, d(a, b);
        }, function(a, b) {
            function g() {
                this.constructor = a;
            }
            d(a, b), a.prototype = null === b ? Object.create(b) : (g.prototype = b.prototype, new g());
        });
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.basicTypes = a.exports.BasicType = a.exports.TParamList = a.exports.TParam = a.exports.param = a.exports.TFunc = a.exports.func = a.exports.TProp = a.exports.TOptional = a.exports.opt = a.exports.TIface = a.exports.iface = a.exports.TEnumLiteral = a.exports.enumlit = a.exports.TEnumType = a.exports.enumtype = a.exports.TIntersection = a.exports.intersection = a.exports.TUnion = a.exports.union = a.exports.TTuple = a.exports.tuple = a.exports.TArray = a.exports.array = a.exports.TLiteral = a.exports.lit = a.exports.TName = a.exports.name = a.exports.TType = void 0;
    var g = c('yMxoS'),
        h = function() {};

    function i(a) {
        return 'string' == typeof a ? k(a) : a;
    }

    function j(a, b) {
        var k = a[b];
        if (!k)
            throw new Error('Unknown type ' + b);
        return k;
    }

    function k(a) {
        return new l(a);
    }
    a.exports.TType = h, a.exports.name = k;
    var l = function(a) {
        function m(m) {
            var n = a.call(this) || this;
            return n.name = m, n._failMsg = 'is not a ' + m, n;
        }
        return f(m, a), m.prototype.getChecker = function(a, c, d) {
            var n = this,
                o = j(a, this.name),
                p = o.getChecker(a, c, d);
            return o instanceof A || o instanceof m ? p : function(a, m) {
                return !!p(a, m) || m.fail(null, n._failMsg, 0);
            };
        }, m;
    }(h);
    a.exports.TName = l, a.exports.lit = function(a) {
        return new m(a);
    };
    var m = function(a) {
        function n(n) {
            var o = a.call(this) || this;
            return o.value = n, o.name = JSON.stringify(n), o._failMsg = 'is not ' + o.name, o;
        }
        return f(n, a), n.prototype.getChecker = function(a, n) {
            var o = this;
            return function(a, n) {
                return a === o.value || n.fail(null, o._failMsg, -1);
            };
        }, n;
    }(h);
    a.exports.TLiteral = m, a.exports.array = function(a) {
        return new n(i(a));
    };
    var n = function(a) {
        function o(o) {
            var p = a.call(this) || this;
            return p.ttype = o, p;
        }
        return f(o, a), o.prototype.getChecker = function(a, o) {
            var p = this.ttype.getChecker(a, o);
            return function(a, o) {
                if (!Array.isArray(a))
                    return o.fail(null, 'is not an array', 0);
                for (var q = 0; q < a.length; q++) {
                    if (!p(a[q], o))
                        return o.fail(q, null, 1);
                }
                return !0;
            };
        }, o;
    }(h);
    a.exports.TArray = n, a.exports.tuple = function() {
        for (var o = [], p = 0; p < arguments.length; p++)
            o[p] = arguments[p];
        return new o(o.map(function(o) {
            return i(o);
        }));
    };
    var o = function(a) {
        function p(p) {
            var q = a.call(this) || this;
            return q.ttypes = p, q;
        }
        return f(p, a), p.prototype.getChecker = function(a, p) {
            var q = this.ttypes.map(function(q) {
                    return q.getChecker(a, p);
                }),
                r = function(a, p) {
                    if (!Array.isArray(a))
                        return p.fail(null, 'is not an array', 0);
                    for (var s = 0; s < q.length; s++) {
                        if (!q[s](a[s], p))
                            return p.fail(s, null, 1);
                    }
                    return !0;
                };
            return p ? function(a, p) {
                return !!r(a, p) && (a.length <= q.length || p.fail(q.length, 'is extraneous', 2));
            } : r;
        }, p;
    }(h);
    a.exports.TTuple = o, a.exports.union = function() {
        for (var p = [], q = 0; q < arguments.length; q++)
            p[q] = arguments[q];
        return new p(p.map(function(p) {
            return i(p);
        }));
    };
    var p = function(a) {
        function q(q) {
            var r = a.call(this) || this;
            r.ttypes = q;
            var s = q.map(function(a) {
                    return a instanceof l || a instanceof m ? a.name : null;
                }).filter(function(a) {
                    return a;
                }),
                t = q.length - s.length;
            return s.length ? (t > 0 && s.push(t + ' more'), r._failMsg = 'is none of ' + s.join(', ')) : r._failMsg = 'is none of ' + t + ' types', r;
        }
        return f(q, a), q.prototype.getChecker = function(a, q) {
            var r = this,
                s = this.ttypes.map(function(r) {
                    return r.getChecker(a, q);
                });
            return function(a, q) {
                for (var t = q.unionResolver(), u = 0; u < s.length; u++) {
                    if (s[u](a, t.createContext()))
                        return !0;
                }
                return q.resolveUnion(t), q.fail(null, r._failMsg, 0);
            };
        }, q;
    }(h);
    a.exports.TUnion = p, a.exports.intersection = function() {
        for (var q = [], r = 0; r < arguments.length; r++)
            q[r] = arguments[r];
        return new q(q.map(function(q) {
            return i(q);
        }));
    };
    var q = function(a) {
        function r(r) {
            var s = a.call(this) || this;
            return s.ttypes = r, s;
        }
        return f(r, a), r.prototype.getChecker = function(a, r) {
            var s = new Set(),
                t = this.ttypes.map(function(t) {
                    return t.getChecker(a, r, s);
                });
            return function(a, r) {
                return !!t.every(function(s) {
                    return s(a, r);
                }) || r.fail(null, null, 0);
            };
        }, r;
    }(h);
    a.exports.TIntersection = q, a.exports.enumtype = function(a) {
        return new r(a);
    };
    var r = function(a) {
        function s(s) {
            var t = a.call(this) || this;
            return t.members = s, t.validValues = new Set(), t._failMsg = 'is not a valid enum value', t.validValues = new Set(Object.keys(s).map(function(a) {
                return s[a];
            })), t;
        }
        return f(s, a), s.prototype.getChecker = function(a, s) {
            var t = this;
            return function(a, s) {
                return !!t.validValues.has(a) || s.fail(null, t._failMsg, 0);
            };
        }, s;
    }(h);
    a.exports.TEnumType = r, a.exports.enumlit = function(a, b) {
        return new s(a, b);
    };
    var s = function(a) {
        function t(t, c) {
            var u = a.call(this) || this;
            return u.enumName = t, u.prop = c, u._failMsg = 'is not ' + t + '.' + c, u;
        }
        return f(t, a), t.prototype.getChecker = function(a, t) {
            var u = this,
                v = j(a, this.enumName);
            if (!(v instanceof r))
                throw new Error('Type ' + this.enumName + ' used in enumlit is not an enum type');
            var w = v.members[this.prop];
            if (!v.members.hasOwnProperty(this.prop))
                throw new Error('Unknown value ' + this.enumName + '.' + this.prop + ' used in enumlit');
            return function(a, t) {
                return a === w || t.fail(null, u._failMsg, -1);
            };
        }, t;
    }(h);

    function t(a) {
        return Object.keys(a).map(function(b) {
            return function(a, b) {
                return b instanceof v ? new w(a, b.ttype, !0) : new w(a, i(b), !1);
            }(b, a[b]);
        });
    }
    a.exports.TEnumLiteral = s, a.exports.iface = function(a, b) {
        return new u(a, t(b));
    };
    var u = function(a) {
        function v(v, c) {
            var w = a.call(this) || this;
            return w.bases = v, w.props = c, w.propSet = new Set(c.map(function(a) {
                return a.name;
            })), w;
        }
        return f(v, a), v.prototype.getChecker = function(a, v, c) {
            var w = this,
                x = this.bases.map(function(c) {
                    return j(a, c).getChecker(a, v);
                }),
                y = this.props.map(function(c) {
                    return c.ttype.getChecker(a, v);
                }),
                z = new g.NoopContext(),
                A = this.props.map(function(a, v) {
                    return !a.isOpt && !y[v](void 0, z);
                }),
                B = function(a, v) {
                    if ('object' != typeof a || null === a)
                        return v.fail(null, 'is not an object', 0);
                    for (var C = 0; C < x.length; C++)
                        if (!x[C](a, v))
                            return !1;
                    for (C = 0; C < y.length; C++) {
                        var D = w.props[C].name,
                            E = a[D];
                        if (void 0 === E) {
                            if (A[C])
                                return v.fail(D, 'is missing', 1);
                        } else if (!y[C](E, v))
                            return v.fail(D, null, 1);
                    }
                    return !0;
                };
            if (!v)
                return B;
            var C = this.propSet;
            return c && (this.propSet.forEach(function(a) {
                    return c.add(a);
                }), C = c),
                function(a, v) {
                    if (!B(a, v))
                        return !1;
                    for (var D in a)
                        if (!C.has(D))
                            return v.fail(D, 'is extraneous', 2);
                    return !0;
                };
        }, v;
    }(h);
    a.exports.TIface = u, a.exports.opt = function(a) {
        return new v(i(a));
    };
    var v = function(a) {
        function w(w) {
            var x = a.call(this) || this;
            return x.ttype = w, x;
        }
        return f(w, a), w.prototype.getChecker = function(a, w) {
            var x = this.ttype.getChecker(a, w);
            return function(a, w) {
                return void 0 === a || x(a, w);
            };
        }, w;
    }(h);
    a.exports.TOptional = v;
    var w = function(a, b, c) {
        this.name = a, this.ttype = b, this.isOpt = c;
    };
    a.exports.TProp = w, a.exports.func = function(a) {
        for (var x = [], y = 1; y < arguments.length; y++)
            x[y - 1] = arguments[y];
        return new x(new z(x), i(a));
    };
    var x = function(a) {
        function y(y, c) {
            var z = a.call(this) || this;
            return z.paramList = y, z.result = c, z;
        }
        return f(y, a), y.prototype.getChecker = function(a, y) {
            return function(a, y) {
                return 'function' == typeof a || y.fail(null, 'is not a function', 0);
            };
        }, y;
    }(h);
    a.exports.TFunc = x, a.exports.param = function(a, b, c) {
        return new y(a, i(b), Boolean(c));
    };
    var y = function(a, b, c) {
        this.name = a, this.ttype = b, this.isOpt = c;
    };
    a.exports.TParam = y;
    var z = function(a) {
        function A(A) {
            var B = a.call(this) || this;
            return B.params = A, B;
        }
        return f(A, a), A.prototype.getChecker = function(a, A) {
            var B = this,
                C = this.params.map(function(B) {
                    return B.ttype.getChecker(a, A);
                }),
                D = new g.NoopContext(),
                E = this.params.map(function(a, A) {
                    return !a.isOpt && !C[A](void 0, D);
                }),
                F = function(a, A) {
                    if (!Array.isArray(a))
                        return A.fail(null, 'is not an array', 0);
                    for (var G = 0; G < C.length; G++) {
                        var H = B.params[G];
                        if (void 0 === a[G]) {
                            if (E[G])
                                return A.fail(H.name, 'is missing', 1);
                        } else if (!C[G](a[G], A))
                            return A.fail(H.name, null, 1);
                    }
                    return !0;
                };
            return A ? function(a, A) {
                return !!F(a, A) && (a.length <= C.length || A.fail(C.length, 'is extraneous', 2));
            } : F;
        }, A;
    }(h);
    a.exports.TParamList = z;
    var A = function(a) {
        function B(B, c) {
            var C = a.call(this) || this;
            return C.validator = B, C.message = c, C;
        }
        return f(B, a), B.prototype.getChecker = function(a, B) {
            var C = this;
            return function(a, B) {
                return !!C.validator(a) || B.fail(null, C.message, 0);
            };
        }, B;
    }(h);
    a.exports.BasicType = A, a.exports.basicTypes = {
        any: new A(function(a) {
            return !0;
        }, 'is invalid'),
        number: new A(function(a) {
            return 'number' == typeof a;
        }, 'is not a number'),
        object: new A(function(a) {
            return 'object' == typeof a && a;
        }, 'is not an object'),
        boolean: new A(function(a) {
            return 'boolean' == typeof a;
        }, 'is not a boolean'),
        string: new A(function(a) {
            return 'string' == typeof a;
        }, 'is not a string'),
        symbol: new A(function(a) {
            return 'symbol' == typeof a;
        }, 'is not a symbol'),
        void: new A(function(a) {
            return null == a;
        }, 'is not void'),
        undefined: new A(function(a) {
            return void 0 === a;
        }, 'is not undefined'),
        null: new A(function(a) {
            return null === a;
        }, 'is not null'),
        never: new A(function(a) {
            return !1;
        }, 'is unexpected'),
        Date: new A(C('[object Date]'), 'is not a Date'),
        RegExp: new A(C('[object RegExp]'), 'is not a RegExp')
    };
    var B = Object.prototype.toString;

    function C(a) {
        return function(b) {
            return 'object' == typeof b && b && B.call(b) === a;
        };
    }
    void 0 !== e && (a.exports.basicTypes.Buffer = new A(function(a) {
        return e.isBuffer(a);
    }, 'is not a Buffer'));
    for (var D = function(b) {
            a.exports.basicTypes[b.name] = new A(function(a) {
                return a instanceof b;
            }, 'is not a ' + b.name);
        }, E = 0, F = [
            Int8Array,
            Uint8Array,
            Uint8ClampedArray,
            Int16Array,
            Uint16Array,
            Int32Array,
            Uint32Array,
            Float32Array,
            Float64Array,
            ArrayBuffer
        ]; E < F.length; E++) {
        D(F[E]);
    }
}), c.register('yMxoS', function(a, b) {
    var d, e = a.exports && a.exports.__extends || (d = function(a, b) {
        return d = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(a, b) {
            a.__proto__ = b;
        } || function(a, b) {
            for (var f in b)
                b.hasOwnProperty(f) && (a[f] = b[f]);
        }, d(a, b);
    }, function(a, b) {
        function f() {
            this.constructor = a;
        }
        d(a, b), a.prototype = null === b ? Object.create(b) : (f.prototype = b.prototype, new f());
    });
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.DetailContext = a.exports.NoopContext = a.exports.VError = void 0;
    var f = function(a) {
        function g(d, e) {
            var h = a.call(this, e) || this;
            return h.path = d, Object.setPrototypeOf(h, g.prototype), h;
        }
        return e(g, a), g;
    }(Error);
    a.exports.VError = f;
    var g = function() {
        function h() {}
        return h.prototype.fail = function(h, b, d) {
            return !1;
        }, h.prototype.unionResolver = function() {
            return this;
        }, h.prototype.createContext = function() {
            return this;
        }, h.prototype.resolveUnion = function(h) {}, h;
    }();
    a.exports.NoopContext = g;
    var h = function() {
        function i() {
            this._propNames = [''], this._messages = [null], this._score = 0;
        }
        return i.prototype.fail = function(i, b, d) {
            return this._propNames.push(i), this._messages.push(b), this._score += d, !1;
        }, i.prototype.unionResolver = function() {
            return new i();
        }, i.prototype.resolveUnion = function(i) {
            for (var j, k, l = null, m = 0, n = i.contexts; m < n.length; m++) {
                var o = n[m];
                (!l || o._score >= l._score) && (l = o);
            }
            l && l._score > 0 && ((j = this._propNames).push.apply(j, l._propNames), (k = this._messages).push.apply(k, l._messages));
        }, i.prototype.getError = function(i) {
            for (var j = [], k = this._propNames.length - 1; k >= 0; k--) {
                var l = this._propNames[k];
                i += 'number' == typeof l ? '[' + l + ']' : l ? '.' + l : '';
                var m = this._messages[k];
                m && j.push(i + ' ' + m);
            }
            return new f(i, j.join('; '));
        }, i.prototype.getErrorDetail = function(i) {
            for (var j = [], k = this._propNames.length - 1; k >= 0; k--) {
                var l = this._propNames[k];
                i += 'number' == typeof l ? '[' + l + ']' : l ? '.' + l : '';
                var m = this._messages[k];
                m && j.push({
                    path: i,
                    message: m
                });
            }
            var l = null;
            for (k = j.length - 1; k >= 0; k--)
                l && (j[k].nested = [l]), l = j[k];
            return l;
        }, i;
    }();
    a.exports.DetailContext = h;
    var i = function() {
        function j() {
            this.contexts = [];
        }
        return j.prototype.createContext = function() {
            var k = new h();
            return this.contexts.push(k), k;
        }, j;
    }();
}), c.register('sxX04', function(a, t) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('hfaUw');
    var e = {
        Transform: d.union(d.lit('jsx'), d.lit('typescript'), d.lit('flow'), d.lit('imports'), d.lit('react-hot-loader'), d.lit('jest')),
        SourceMapOptions: d.iface([], {
            compiledFilename: 'string'
        }),
        Options: d.iface([], {
            transforms: d.array('Transform'),
            disableESTransforms: d.opt('boolean'),
            jsxRuntime: d.opt(d.union(d.lit('classic'), d.lit('automatic'), d.lit('preserve'))),
            production: d.opt('boolean'),
            jsxImportSource: d.opt('string'),
            jsxPragma: d.opt('string'),
            jsxFragmentPragma: d.opt('string'),
            keepUnusedImports: d.opt('boolean'),
            preserveDynamicImport: d.opt('boolean'),
            injectCreateRequireForImportRequire: d.opt('boolean'),
            enableLegacyTypeScriptModuleInterop: d.opt('boolean'),
            enableLegacyBabel5ModuleInterop: d.opt('boolean'),
            sourceMapOptions: d.opt('SourceMapOptions'),
            filePath: d.opt('string')
        })
    };
}), c.register('lzQ09', function(a, t) {
    b(a.exports, 'File', function() {
        return f;
    }), b(a.exports, 'parse', function() {
        return g;
    });
    var d = c('s9O7r'),
        e = c('DfgTE');
    class f {
        constructor(a, b) {
            this.tokens = a, this.scopes = b;
        }
    }

    function g(a, b, c, t) {
        if (t && c)
            throw new Error('Cannot combine flow and typescript plugins.');
        (0, d.initParser)(a, b, c, t);
        const h = (0, e.parseFile)();
        if (d.state.error)
            throw (0, d.augmentError)(d.state.error);
        return h;
    }
}), c.register('DfgTE', function(a, t) {
    b(a.exports, 'parseFile', function() {
        return h;
    });
    var d = c('SI/fV'),
        e = c('bM7NW'),
        f = c('s9O7r'),
        g = c('orebU');

    function h() {
        return 0 === f.state.pos && f.input.charCodeAt(0) === e.charCodes.numberSign && f.input.charCodeAt(1) === e.charCodes.exclamationMark && (0, d.skipLineComment)(2), (0, d.nextToken)(), (0, g.parseTopLevel)();
    }
}), c.register('orebU', function(a, t) {
    b(a.exports, 'parseTopLevel', function() {
        return p;
    }), b(a.exports, 'parseBlockBody', function() {
        return z;
    }), b(a.exports, 'parseStatement', function() {
        return q;
    }), b(a.exports, 'parseDecorators', function() {
        return s;
    }), b(a.exports, 'parseClass', function() {
        return J;
    }), b(a.exports, 'parseVarStatement', function() {
        return v;
    }), b(a.exports, 'parseBlock', function() {
        return w;
    }), b(a.exports, 'parseImport', function() {
        return Z;
    }), b(a.exports, 'parseExport', function() {
        return S;
    }), b(a.exports, 'parseFunction', function() {
        return E;
    }), b(a.exports, 'baseParseMaybeDecoratorArguments', function() {
        return u;
    }), b(a.exports, 'parseFunctionParams', function() {
        return G;
    }), b(a.exports, 'parseExportFrom', function() {
        return U;
    }), b(a.exports, 'parseExportSpecifiers', function() {
        return W;
    }), b(a.exports, 'baseParseExportStar', function() {
        return V;
    });
    var d = c('lzQ09'),
        e = c('2MRde'),
        f = c('BULPy'),
        g = c('SI/fV'),
        h = c('C8Bhr'),
        i = c('oDSJh'),
        j = c('KWaC1'),
        k = c('bM7NW'),
        l = c('s9O7r'),
        m = c('Z4U7H'),
        n = c('upccV'),
        o = c('OJMmh');

    function p() {
        if (z(j.TokenType.eof), l.state.scopes.push(new(0, i.Scope)(0, l.state.tokens.length, !0)), 0 !== l.state.scopeDepth)
            throw new Error(`Invalid scope depth at end of file: ${ l.state.scopeDepth }`);
        return new(0, d.File)(l.state.tokens, l.state.scopes);
    }

    function q(a) {
        l.isFlowEnabled && (0, e.flowTryParseStatement)() || ((0, g.match)(j.TokenType.at) && s(), function(a) {
            if (l.isTypeScriptEnabled && (0, f.tsTryParseStatementContent)())
                return;
            const r = l.state.type;
            switch (r) {
                case j.TokenType._break:
                case j.TokenType._continue:
                    return (0, g.next)(), void((0, o.isLineTerminator)() || ((0, m.parseIdentifier)(), (0, o.semicolon)()));
                case j.TokenType._debugger:
                    return (0, g.next)(), void(0, o.semicolon)();
                case j.TokenType._do:
                    return (0, g.next)(), q(!1), (0, o.expect)(j.TokenType._while), (0, m.parseParenExpression)(), void(0, g.eat)(j.TokenType.semi);
                case j.TokenType._for:
                    return void
                    function() {
                        l.state.scopeDepth++;
                        const s = l.state.tokens.length;
                        ! function() {
                            (0, g.next)();
                            let t = !1;
                            (0, o.isContextual)(h.ContextualKeyword._await) && (t = !0, (0, g.next)());
                            if ((0, o.expect)(j.TokenType.parenL), (0, g.match)(j.TokenType.semi))
                                return t && (0, o.unexpected)(), void A();
                            const u = r();
                            if (u || (0, g.match)(j.TokenType._var) || (0, g.match)(j.TokenType._let) || (0, g.match)(j.TokenType._const) || (0, o.isContextual)(h.ContextualKeyword._using) && !(0, o.isLookaheadContextual)(h.ContextualKeyword._of))
                                return u && (0, o.expectContextual)(h.ContextualKeyword._await), (0, g.next)(), C(!0, l.state.type !== j.TokenType._var), (0, g.match)(j.TokenType._in) || (0, o.isContextual)(h.ContextualKeyword._of) ? void B(t) : void A();
                            if ((0, m.parseExpression)(!0), (0, g.match)(j.TokenType._in) || (0, o.isContextual)(h.ContextualKeyword._of))
                                return void B(t);
                            t && (0, o.unexpected)();
                            A();
                        }();
                        const t = l.state.tokens.length;
                        l.state.scopes.push(new(0, i.Scope)(s, t, !1)), l.state.scopeDepth--;
                    }();
                case j.TokenType._function:
                    if ((0, g.lookaheadType)() === j.TokenType.dot)
                        break;
                    return a || (0, o.unexpected)(), void
                    function() {
                        const s = l.state.start;
                        (0, g.next)(), E(s, !0);
                    }();
                case j.TokenType._class:
                    return a || (0, o.unexpected)(), void J(!0);
                case j.TokenType._if:
                    return (0, g.next)(), (0, m.parseParenExpression)(), q(!1), void((0, g.eat)(j.TokenType._else) && q(!1));
                case j.TokenType._return:
                    return (0, g.next)(), void((0, o.isLineTerminator)() || ((0, m.parseExpression)(), (0, o.semicolon)()));
                case j.TokenType._switch:
                    return void
                    function() {
                        (0, g.next)(), (0, m.parseParenExpression)(), l.state.scopeDepth++;
                        const s = l.state.tokens.length;
                        (0, o.expect)(j.TokenType.braceL);
                        for (; !(0, g.match)(j.TokenType.braceR) && !l.state.error;)
                            if ((0, g.match)(j.TokenType._case) || (0, g.match)(j.TokenType._default)) {
                                const t = (0, g.match)(j.TokenType._case);
                                (0, g.next)(), t && (0, m.parseExpression)(), (0, o.expect)(j.TokenType.colon);
                            } else
                                q(!0);
                        (0, g.next)();
                        const t = l.state.tokens.length;
                        l.state.scopes.push(new(0, i.Scope)(s, t, !1)), l.state.scopeDepth--;
                    }();
                case j.TokenType._throw:
                    return (0, g.next)(), (0, m.parseExpression)(), void(0, o.semicolon)();
                case j.TokenType._try:
                    return void
                    function() {
                        if ((0, g.next)(), w(), (0, g.match)(j.TokenType._catch)) {
                            (0, g.next)();
                            let s = null;
                            if ((0, g.match)(j.TokenType.parenL) && (l.state.scopeDepth++, s = l.state.tokens.length, (0, o.expect)(j.TokenType.parenL), (0, n.parseBindingAtom)(!0), l.isTypeScriptEnabled && (0, f.tsTryParseTypeAnnotation)(), (0, o.expect)(j.TokenType.parenR)), w(), null != s) {
                                const t = l.state.tokens.length;
                                l.state.scopes.push(new(0, i.Scope)(s, t, !1)), l.state.scopeDepth--;
                            }
                        }
                        (0, g.eat)(j.TokenType._finally) && w();
                    }();
                case j.TokenType._let:
                case j.TokenType._const:
                    a || (0, o.unexpected)();
                case j.TokenType._var:
                    return void v(r !== j.TokenType._var);
                case j.TokenType._while:
                    return (0, g.next)(), (0, m.parseParenExpression)(), void q(!1);
                case j.TokenType.braceL:
                    return void w();
                case j.TokenType.semi:
                    return void(0, g.next)();
                case j.TokenType._export:
                case j.TokenType._import: {
                    const s = (0, g.lookaheadType)();
                    if (s === j.TokenType.parenL || s === j.TokenType.dot)
                        break;
                    return (0, g.next)(), void(r === j.TokenType._import ? Z() : S());
                }
                case j.TokenType.name:
                    if (l.state.contextualKeyword === h.ContextualKeyword._async) {
                        const s = l.state.start,
                            t = l.state.snapshot();
                        if ((0, g.next)(), (0, g.match)(j.TokenType._function) && !(0, o.canInsertSemicolon)())
                            return (0, o.expect)(j.TokenType._function), void E(s, !0);
                        l.state.restoreFromSnapshot(t);
                    } else {
                        if (l.state.contextualKeyword === h.ContextualKeyword._using && !(0, o.hasFollowingLineBreak)() && (0, g.lookaheadType)() === j.TokenType.name)
                            return void v(!0);
                        if (r())
                            return (0, o.expectContextual)(h.ContextualKeyword._await), void v(!0);
                    }
            }
            const s = l.state.tokens.length;
            (0, m.parseExpression)();
            let t = null;
            if (l.state.tokens.length === s + 1) {
                const u = l.state.tokens[l.state.tokens.length - 1];
                u.type === j.TokenType.name && (t = u.contextualKeyword);
            }
            if (null == t)
                return void(0, o.semicolon)();
            (0, g.eat)(j.TokenType.colon) ? q(!0): (d = t, l.isTypeScriptEnabled ? (0, f.tsParseIdentifierStatement)(d) : l.isFlowEnabled ? (0, e.flowParseIdentifierStatement)(d) : (0, o.semicolon)());
            var u;
        }(a));
    }

    function r() {
        if (!(0, o.isContextual)(h.ContextualKeyword._await))
            return !1;
        const s = l.state.snapshot();
        return (0, g.next)(), !(0, o.isContextual)(h.ContextualKeyword._using) || (0, o.hasPrecedingLineBreak)() ? (l.state.restoreFromSnapshot(s), !1) : ((0, g.next)(), !(0, g.match)(j.TokenType.name) || (0, o.hasPrecedingLineBreak)() ? (l.state.restoreFromSnapshot(s), !1) : (l.state.restoreFromSnapshot(s), !0));
    }

    function s() {
        for (;
            (0, g.match)(j.TokenType.at);)
            t();
    }

    function t() {
        if ((0, g.next)(), (0, g.eat)(j.TokenType.parenL))
            (0, m.parseExpression)(), (0, o.expect)(j.TokenType.parenR);
        else {
            for ((0, m.parseIdentifier)();
                (0, g.eat)(j.TokenType.dot);)
                (0, m.parseIdentifier)();
            l.isTypeScriptEnabled ? (0, f.tsParseMaybeDecoratorArguments)() : u();
        }
    }

    function u() {
        (0, g.eat)(j.TokenType.parenL) && (0, m.parseCallExpressionArguments)();
    }

    function v(a) {
        (0, g.next)(), C(!1, a), (0, o.semicolon)();
    }

    function w(x = !1, y = 0) {
        const z = l.state.tokens.length;
        l.state.scopeDepth++, (0, o.expect)(j.TokenType.braceL), y && (l.state.tokens[l.state.tokens.length - 1].contextId = y), z(j.TokenType.braceR), y && (l.state.tokens[l.state.tokens.length - 1].contextId = y);
        const A = l.state.tokens.length;
        l.state.scopes.push(new(0, i.Scope)(z, A, x)), l.state.scopeDepth--;
    }

    function z(x) {
        for (; !(0, g.eat)(x) && !l.state.error;)
            q(!0);
    }

    function A() {
        (0, o.expect)(j.TokenType.semi), (0, g.match)(j.TokenType.semi) || (0, m.parseExpression)(), (0, o.expect)(j.TokenType.semi), (0, g.match)(j.TokenType.parenR) || (0, m.parseExpression)(), (0, o.expect)(j.TokenType.parenR), q(!1);
    }

    function B(x) {
        x ? (0, o.eatContextual)(h.ContextualKeyword._of) : (0, g.next)(), (0, m.parseExpression)(), (0, o.expect)(j.TokenType.parenR), q(!1);
    }

    function C(x, y) {
        for (;;) {
            if (D(y), (0, g.eat)(j.TokenType.eq)) {
                const D = l.state.tokens.length - 1;
                (0, m.parseMaybeAssign)(x), l.state.tokens[D].rhsEndIndex = l.state.tokens.length;
            }
            if (!(0, g.eat)(j.TokenType.comma))
                break;
        }
    }

    function D(x) {
        (0, n.parseBindingAtom)(x), l.isTypeScriptEnabled ? (0, f.tsAfterParseVarHead)() : l.isFlowEnabled && (0, e.flowAfterParseVarHead)();
    }

    function E(x, y, F = !1) {
        (0, g.match)(j.TokenType.star) && (0, g.next)(), !y || F || (0, g.match)(j.TokenType.name) || (0, g.match)(j.TokenType._yield) || (0, o.unexpected)();
        let G = null;
        (0, g.match)(j.TokenType.name) && (y || (G = l.state.tokens.length, l.state.scopeDepth++), (0, n.parseBindingIdentifier)(!1));
        const H = l.state.tokens.length;
        l.state.scopeDepth++, G(), (0, m.parseFunctionBodyAndFinish)(x);
        const I = l.state.tokens.length;
        l.state.scopes.push(new(0, i.Scope)(H, I, !0)), l.state.scopeDepth--, null !== G && (l.state.scopes.push(new(0, i.Scope)(G, I, !0)), l.state.scopeDepth--);
    }

    function G(H = !1, I = 0) {
        l.isTypeScriptEnabled ? (0, f.tsStartParseFunctionParams)() : l.isFlowEnabled && (0, e.flowStartParseFunctionParams)(), (0, o.expect)(j.TokenType.parenL), I && (l.state.tokens[l.state.tokens.length - 1].contextId = I), (0, n.parseBindingList)(j.TokenType.parenR, !1, !1, H, I), I && (l.state.tokens[l.state.tokens.length - 1].contextId = I);
    }

    function J(H, K = !1) {
        const L = (0, l.getNextContextId)();
        (0, g.next)(), l.state.tokens[l.state.tokens.length - 1].contextId = L, l.state.tokens[l.state.tokens.length - 1].isExpression = !H;
        let M = null;
        H || (M = l.state.tokens.length, l.state.scopeDepth++),
            function(H, N = !1) {
                if (l.isTypeScriptEnabled && (!H || N) && (0, o.isContextual)(h.ContextualKeyword._implements))
                    return;
                (0, g.match)(j.TokenType.name) && (0, n.parseBindingIdentifier)(!0);
                l.isTypeScriptEnabled ? (0, f.tsTryParseTypeParameters)() : l.isFlowEnabled && (0, g.match)(j.TokenType.lessThan) && (0, e.flowParseTypeParameterDeclaration)();
            }(H, N),
            function() {
                let O = !1;
                (0, g.eat)(j.TokenType._extends) ? ((0, m.parseExprSubscripts)(), O = !0) : O = !1;
                l.isTypeScriptEnabled ? (0, f.tsAfterParseClassSuper)(O) : l.isFlowEnabled && (0, e.flowAfterParseClassSuper)(O);
            }();
        const O = l.state.tokens.length;
        if (function(H) {
                (0, o.expect)(j.TokenType.braceL);
                for (; !(0, g.eat)(j.TokenType.braceR) && !l.state.error;) {
                    if ((0, g.eat)(j.TokenType.semi))
                        continue;
                    if ((0, g.match)(j.TokenType.at)) {
                        t();
                        continue;
                    }
                    N(l.state.start, H);
                }
            }(L), !l.state.error && (l.state.tokens[O].contextId = L, l.state.tokens[l.state.tokens.length - 1].contextId = L, null !== M)) {
            const P = l.state.tokens.length;
            l.state.scopes.push(new(0, i.Scope)(M, P, !1)), l.state.scopeDepth--;
        }
    }

    function L() {
        return (0, g.match)(j.TokenType.eq) || (0, g.match)(j.TokenType.semi) || (0, g.match)(j.TokenType.braceR) || (0, g.match)(j.TokenType.bang) || (0, g.match)(j.TokenType.colon);
    }

    function M() {
        return (0, g.match)(j.TokenType.parenL) || (0, g.match)(j.TokenType.lessThan);
    }

    function N(H, K) {
        l.isTypeScriptEnabled && (0, f.tsParseModifiers)([
            h.ContextualKeyword._declare,
            h.ContextualKeyword._public,
            h.ContextualKeyword._protected,
            h.ContextualKeyword._private,
            h.ContextualKeyword._override
        ]);
        let O = !1;
        if ((0, g.match)(j.TokenType.name) && l.state.contextualKeyword === h.ContextualKeyword._static) {
            if ((0, m.parseIdentifier)(), M())
                return void O(H, !1);
            if (L())
                return void R();
            if (l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._static, O = !0, (0, g.match)(j.TokenType.braceL))
                return l.state.tokens[l.state.tokens.length - 1].contextId = K, void w();
        }! function(H, K, O) {
            if (l.isTypeScriptEnabled && (0, f.tsTryParseClassMemberWithIsStatic)(K))
                return;
            if ((0, g.eat)(j.TokenType.star))
                return P(O), void O(H, !1);
            P(O);
            let P = !1;
            const Q = l.state.tokens[l.state.tokens.length - 1];
            Q.contextualKeyword === h.ContextualKeyword._constructor && (P = !0);
            if (Q(), M())
                O(H, P);
            else if (L())
                R();
            else if (Q.contextualKeyword !== h.ContextualKeyword._async || (0, o.isLineTerminator)())
                Q.contextualKeyword !== h.ContextualKeyword._get && Q.contextualKeyword !== h.ContextualKeyword._set || (0, o.isLineTerminator)() && (0, g.match)(j.TokenType.star) ? Q.contextualKeyword !== h.ContextualKeyword._accessor || (0, o.isLineTerminator)() ? (0, o.isLineTerminator)() ? R() : (0, o.unexpected)() : (P(O), R()) : (Q.contextualKeyword === h.ContextualKeyword._get ? l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._get : l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._set, P(O), O(H, !1));
            else {
                l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._async;
                (0, g.match)(j.TokenType.star) && (0, g.next)(), P(O), Q(), O(H, !1);
            }
        }(H, O, K);
    }

    function O(H, K) {
        l.isTypeScriptEnabled ? (0, f.tsTryParseTypeParameters)() : l.isFlowEnabled && (0, g.match)(j.TokenType.lessThan) && (0, e.flowParseTypeParameterDeclaration)(), (0, m.parseMethod)(H, K);
    }

    function P(H) {
        (0, m.parsePropertyName)(H);
    }

    function Q() {
        if (l.isTypeScriptEnabled) {
            const R = (0, g.pushTypeContext)(0);
            (0, g.eat)(j.TokenType.question), (0, g.popTypeContext)(R);
        }
    }

    function R() {
        if (l.isTypeScriptEnabled ? ((0, g.eatTypeToken)(j.TokenType.bang), (0, f.tsTryParseTypeAnnotation)()) : l.isFlowEnabled && (0, g.match)(j.TokenType.colon) && (0, e.flowParseTypeAnnotation)(), (0, g.match)(j.TokenType.eq)) {
            const S = l.state.tokens.length;
            (0, g.next)(), (0, m.parseMaybeAssign)(), l.state.tokens[S].rhsEndIndex = l.state.tokens.length;
        }
        (0, o.semicolon)();
    }

    function S() {
        const T = l.state.tokens.length - 1;
        l.isTypeScriptEnabled && (0, f.tsTryParseExport)() || ((l.isFlowEnabled ? (0, e.flowShouldParseExportStar)() : (0, g.match)(j.TokenType.star)) ? l.isFlowEnabled ? (0, e.flowParseExportStar)() : V() : function() {
            if (l.isTypeScriptEnabled && (0, f.tsIsDeclarationStart)())
                return !1;
            if (l.isFlowEnabled && (0, e.flowShouldDisallowExportDefaultSpecifier)())
                return !1;
            if ((0, g.match)(j.TokenType.name))
                return l.state.contextualKeyword !== h.ContextualKeyword._async;
            if (!(0, g.match)(j.TokenType._default))
                return !1;
            const U = (0, g.nextTokenStart)(),
                V = (0, g.lookaheadTypeAndKeyword)(),
                W = V.type === j.TokenType.name && V.contextualKeyword === h.ContextualKeyword._from;
            if (V.type === j.TokenType.comma)
                return !0;
            if (W) {
                const X = l.input.charCodeAt((0, g.nextTokenStartSince)(U + 4));
                return X === k.charCodes.quotationMark || X === k.charCodes.apostrophe;
            }
            return !1;
        }() ? ((0, m.parseIdentifier)(), (0, g.match)(j.TokenType.comma) && (0, g.lookaheadType)() === j.TokenType.star ? ((0, o.expect)(j.TokenType.comma), (0, o.expect)(j.TokenType.star), (0, o.expectContextual)(h.ContextualKeyword._as), (0, m.parseIdentifier)()) : T(), U()) : (0, g.eat)(j.TokenType._default) ? function() {
            if (l.isTypeScriptEnabled && (0, f.tsTryParseExportDefaultExpression)())
                return;
            if (l.isFlowEnabled && (0, e.flowTryParseExportDefaultExpression)())
                return;
            const U = l.state.start;
            (0, g.eat)(j.TokenType._function) ? E(U, !0, !0): (0, o.isContextual)(h.ContextualKeyword._async) && (0, g.lookaheadType)() === j.TokenType._function ? ((0, o.eatContextual)(h.ContextualKeyword._async), (0, g.eat)(j.TokenType._function), E(U, !0, !0)) : (0, g.match)(j.TokenType._class) ? J(!0, !0) : (0, g.match)(j.TokenType.at) ? (s(), J(!0, !0)) : ((0, m.parseMaybeAssign)(), (0, o.semicolon)());
        }() : l.isTypeScriptEnabled && (0, f.tsIsDeclarationStart)() || l.isFlowEnabled && (0, e.flowShouldParseExportDeclaration)() || l.state.type === j.TokenType._var || l.state.type === j.TokenType._const || l.state.type === j.TokenType._let || l.state.type === j.TokenType._function || l.state.type === j.TokenType._class || (0, o.isContextual)(h.ContextualKeyword._async) || (0, g.match)(j.TokenType.at) ? l.isTypeScriptEnabled ? (0, f.tsParseExportDeclaration)() : l.isFlowEnabled ? (0, e.flowParseExportDeclaration)() : q(!0) : (W(), U()), l.state.tokens[T].rhsEndIndex = l.state.tokens.length);
    }

    function T() {
        (0, g.eat)(j.TokenType.comma) && W();
    }

    function U() {
        (0, o.eatContextual)(h.ContextualKeyword._from) && ((0, m.parseExprAtom)(), ab()), (0, o.semicolon)();
    }

    function V() {
        (0, o.expect)(j.TokenType.star), (0, o.isContextual)(h.ContextualKeyword._as) ? ((0, g.next)(), l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._as, (0, m.parseIdentifier)(), T(), U()) : U();
    }

    function W() {
        let X = !0;
        for ((0, o.expect)(j.TokenType.braceL); !(0, g.eat)(j.TokenType.braceR) && !l.state.error;) {
            if (X)
                X = !1;
            else if ((0, o.expect)(j.TokenType.comma), (0, g.eat)(j.TokenType.braceR))
                break;
            X();
        }
    }

    function X() {
        l.isTypeScriptEnabled ? (0, f.tsParseExportSpecifier)() : ((0, m.parseIdentifier)(), l.state.tokens[l.state.tokens.length - 1].identifierRole = g.IdentifierRole.ExportAccess, (0, o.eatContextual)(h.ContextualKeyword._as) && (0, m.parseIdentifier)());
    }

    function Y() {
        (0, o.isContextual)(h.ContextualKeyword._module) && function() {
            const Z = l.state.snapshot();
            return (0, o.expectContextual)(h.ContextualKeyword._module), (0, o.eatContextual)(h.ContextualKeyword._from) ? (0, o.isContextual)(h.ContextualKeyword._from) ? (l.state.restoreFromSnapshot(Z), !0) : (l.state.restoreFromSnapshot(Z), !1) : (0, g.match)(j.TokenType.comma) ? (l.state.restoreFromSnapshot(Z), !1) : (l.state.restoreFromSnapshot(Z), !0);
        }() && (0, g.next)();
    }

    function Z() {
        if (l.isTypeScriptEnabled && (0, g.match)(j.TokenType.name) && (0, g.lookaheadType)() === j.TokenType.eq)
            (0, f.tsParseImportEqualsDeclaration)();
        else {
            if (l.isTypeScriptEnabled && (0, o.isContextual)(h.ContextualKeyword._type)) {
                const $ = (0, g.lookaheadTypeAndKeyword)();
                if ($.type === j.TokenType.name && $.contextualKeyword !== h.ContextualKeyword._from) {
                    if ((0, o.expectContextual)(h.ContextualKeyword._type), (0, g.lookaheadType)() === j.TokenType.eq)
                        return void(0, f.tsParseImportEqualsDeclaration)();
                } else
                    $.type !== j.TokenType.star && $.type !== j.TokenType.braceL || (0, o.expectContextual)(h.ContextualKeyword._type);
            }
            (0, g.match)(j.TokenType.string) || (Y(), function() {
                l.isFlowEnabled && (0, e.flowStartParseImportSpecifiers)();
                let $ = !0;
                if ((0, g.match)(j.TokenType.name) && ($(), !(0, g.eat)(j.TokenType.comma)))
                    return;
                if ((0, g.match)(j.TokenType.star))
                    return (0, g.next)(), (0, o.expectContextual)(h.ContextualKeyword._as), void $();
                (0, o.expect)(j.TokenType.braceL);
                for (; !(0, g.eat)(j.TokenType.braceR) && !l.state.error;) {
                    if ($)
                        $ = !1;
                    else if ((0, g.eat)(j.TokenType.colon) && (0, o.unexpected)('ES2015 named imports do not destructure. Use another statement for destructuring after the import.'), (0, o.expect)(j.TokenType.comma), (0, g.eat)(j.TokenType.braceR))
                        break;
                    _();
                }
            }(), (0, o.expectContextual)(h.ContextualKeyword._from)), (0, m.parseExprAtom)(), ab(), (0, o.semicolon)();
        }
    }

    function $() {
        (0, n.parseImportedIdentifier)();
    }

    function _() {
        l.isTypeScriptEnabled ? (0, f.tsParseImportSpecifier)() : l.isFlowEnabled ? (0, e.flowParseImportSpecifier)() : ((0, n.parseImportedIdentifier)(), (0, o.isContextual)(h.ContextualKeyword._as) && (l.state.tokens[l.state.tokens.length - 1].identifierRole = g.IdentifierRole.ImportAccess, (0, g.next)(), (0, n.parseImportedIdentifier)()));
    }

    function ab() {
        ((0, g.match)(j.TokenType._with) || (0, o.isContextual)(h.ContextualKeyword._assert) && !(0, o.hasPrecedingLineBreak)()) && ((0, g.next)(), (0, m.parseObj)(!1, !1));
    }
}), c.register('2MRde', function(a, A) {
    b(a.exports, 'flowParseTypeParameterDeclaration', function() {
        return v;
    }), b(a.exports, 'flowParseTypeAnnotation', function() {
        return K;
    }), b(a.exports, 'flowParseVariance', function() {
        return M;
    }), b(a.exports, 'flowParseFunctionBodyAndFinish', function() {
        return N;
    }), b(a.exports, 'flowParseSubscript', function() {
        return O;
    }), b(a.exports, 'flowStartParseNewArguments', function() {
        return P;
    }), b(a.exports, 'flowTryParseStatement', function() {
        return Q;
    }), b(a.exports, 'flowTryParseExportDefaultExpression', function() {
        return R;
    }), b(a.exports, 'flowParseIdentifierStatement', function() {
        return S;
    }), b(a.exports, 'flowShouldParseExportDeclaration', function() {
        return T;
    }), b(a.exports, 'flowShouldDisallowExportDefaultSpecifier', function() {
        return U;
    }), b(a.exports, 'flowParseExportDeclaration', function() {
        return V;
    }), b(a.exports, 'flowShouldParseExportStar', function() {
        return W;
    }), b(a.exports, 'flowParseExportStar', function() {
        return X;
    }), b(a.exports, 'flowAfterParseClassSuper', function() {
        return Y;
    }), b(a.exports, 'flowStartParseObjPropValue', function() {
        return Z;
    }), b(a.exports, 'flowParseAssignableListItemTypes', function() {
        return $;
    }), b(a.exports, 'flowStartParseImportSpecifiers', function() {
        return _;
    }), b(a.exports, 'flowParseImportSpecifier', function() {
        return ab;
    }), b(a.exports, 'flowStartParseFunctionParams', function() {
        return bb;
    }), b(a.exports, 'flowAfterParseVarHead', function() {
        return cb;
    }), b(a.exports, 'flowStartParseAsyncArrowFromCallExpression', function() {
        return db;
    }), b(a.exports, 'flowParseMaybeAssign', function() {
        return eb;
    }), b(a.exports, 'flowParseArrow', function() {
        return fb;
    }), b(a.exports, 'flowParseSubscripts', function() {
        return gb;
    });
    var d = c('SI/fV'),
        e = c('C8Bhr'),
        f = c('KWaC1'),
        g = c('s9O7r'),
        h = c('Z4U7H'),
        i = c('orebU'),
        j = c('OJMmh');

    function k(a) {
        const l = (0, d.pushTypeContext)(0);
        (0, j.expect)(a || f.TokenType.colon), J(), (0, d.popTypeContext)(l);
    }

    function l() {
        (0, j.expect)(f.TokenType.modulo), (0, j.expectContextual)(e.ContextualKeyword._checks), (0, d.eat)(f.TokenType.parenL) && ((0, h.parseExpression)(), (0, j.expect)(f.TokenType.parenR));
    }

    function m() {
        const n = (0, d.pushTypeContext)(0);
        (0, j.expect)(f.TokenType.colon), (0, d.match)(f.TokenType.modulo) ? l(): (J(), (0, d.match)(f.TokenType.modulo) && l()), (0, d.popTypeContext)(n);
    }

    function n() {
        (0, d.match)(f.TokenType._class) ? ((0, d.next)(), o(!0)) : (0, d.match)(f.TokenType._function) ? ((0, d.next)(), (0, h.parseIdentifier)(), (0, d.match)(f.TokenType.lessThan) && v(), (0, j.expect)(f.TokenType.parenL), E(), (0, j.expect)(f.TokenType.parenR), m(), (0, j.semicolon)()) : (0, d.match)(f.TokenType._var) ? ((0, d.next)(), L(), (0, j.semicolon)()) : (0, j.eatContextual)(e.ContextualKeyword._module) ? (0, d.eat)(f.TokenType.dot) ? ((0, j.expectContextual)(e.ContextualKeyword._exports), K(), (0, j.semicolon)()) : function() {
            (0, d.match)(f.TokenType.string) ? (0, h.parseExprAtom)() : (0, h.parseIdentifier)();
            (0, j.expect)(f.TokenType.braceL);
            for (; !(0, d.match)(f.TokenType.braceR) && !g.state.error;)
                (0, d.match)(f.TokenType._import) ? ((0, d.next)(), (0, i.parseImport)()) : (0, j.unexpected)();
            (0, j.expect)(f.TokenType.braceR);
        }() : (0, j.isContextual)(e.ContextualKeyword._type) ? ((0, d.next)(), t()) : (0, j.isContextual)(e.ContextualKeyword._opaque) ? ((0, d.next)(), u(!0)) : (0, j.isContextual)(e.ContextualKeyword._interface) ? ((0, d.next)(), o()) : (0, d.match)(f.TokenType._export) ? ((0, j.expect)(f.TokenType._export), (0, d.eat)(f.TokenType._default) ? (0, d.match)(f.TokenType._function) || (0, d.match)(f.TokenType._class) ? n() : (J(), (0, j.semicolon)()) : (0, d.match)(f.TokenType._var) || (0, d.match)(f.TokenType._function) || (0, d.match)(f.TokenType._class) || (0, j.isContextual)(e.ContextualKeyword._opaque) ? n() : (0, d.match)(f.TokenType.star) || (0, d.match)(f.TokenType.braceL) || (0, j.isContextual)(e.ContextualKeyword._interface) || (0, j.isContextual)(e.ContextualKeyword._type) || (0, j.isContextual)(e.ContextualKeyword._opaque) ? (0, i.parseExport)() : (0, j.unexpected)()) : (0, j.unexpected)();
    }

    function o(p = !1) {
        if (s(), (0, d.match)(f.TokenType.lessThan) && v(), (0, d.eat)(f.TokenType._extends))
            do {
                q();
            } while (!p && (0, d.eat)(f.TokenType.comma));
        if ((0, j.isContextual)(e.ContextualKeyword._mixins)) {
            (0, d.next)();
            do {
                q();
            } while ((0, d.eat)(f.TokenType.comma));
        }
        if ((0, j.isContextual)(e.ContextualKeyword._implements)) {
            (0, d.next)();
            do {
                q();
            } while ((0, d.eat)(f.TokenType.comma));
        }
        z(p, !1, p);
    }

    function q() {
        C(!1), (0, d.match)(f.TokenType.lessThan) && w();
    }

    function r() {
        o();
    }

    function s() {
        (0, h.parseIdentifier)();
    }

    function t() {
        s(), (0, d.match)(f.TokenType.lessThan) && v(), k(f.TokenType.eq), (0, j.semicolon)();
    }

    function u(p) {
        (0, j.expectContextual)(e.ContextualKeyword._type), s(), (0, d.match)(f.TokenType.lessThan) && v(), (0, d.match)(f.TokenType.colon) && k(f.TokenType.colon), p || k(f.TokenType.eq), (0, j.semicolon)();
    }

    function v() {
        const w = (0, d.pushTypeContext)(0);
        (0, d.match)(f.TokenType.lessThan) || (0, d.match)(f.TokenType.typeParameterStart) ? (0, d.next)() : (0, j.unexpected)();
        do {
            M(), L(), (0, d.eat)(f.TokenType.eq) && J(), (0, d.match)(f.TokenType.greaterThan) || (0, j.expect)(f.TokenType.comma);
        } while (!(0, d.match)(f.TokenType.greaterThan) && !g.state.error);
        (0, j.expect)(f.TokenType.greaterThan), (0, d.popTypeContext)(w);
    }

    function w() {
        const x = (0, d.pushTypeContext)(0);
        for ((0, j.expect)(f.TokenType.lessThan); !(0, d.match)(f.TokenType.greaterThan) && !g.state.error;)
            J(), (0, d.match)(f.TokenType.greaterThan) || (0, j.expect)(f.TokenType.comma);
        (0, j.expect)(f.TokenType.greaterThan), (0, d.popTypeContext)(x);
    }

    function x() {
        (0, d.match)(f.TokenType.num) || (0, d.match)(f.TokenType.string) ? (0, h.parseExprAtom)() : (0, h.parseIdentifier)();
    }

    function y() {
        for ((0, d.match)(f.TokenType.lessThan) && v(), (0, j.expect)(f.TokenType.parenL); !(0, d.match)(f.TokenType.parenR) && !(0, d.match)(f.TokenType.ellipsis) && !g.state.error;)
            D(), (0, d.match)(f.TokenType.parenR) || (0, j.expect)(f.TokenType.comma);
        (0, d.eat)(f.TokenType.ellipsis) && D(), (0, j.expect)(f.TokenType.parenR), k();
    }

    function z(p, b, c) {
        let A;
        for (b && (0, d.match)(f.TokenType.braceBarL) ? ((0, j.expect)(f.TokenType.braceBarL), A = f.TokenType.braceBarR) : ((0, j.expect)(f.TokenType.braceL), A = f.TokenType.braceR); !(0, d.match)(A) && !g.state.error;) {
            if (c && (0, j.isContextual)(e.ContextualKeyword._proto)) {
                const B = (0, d.lookaheadType)();
                B !== f.TokenType.colon && B !== f.TokenType.question && ((0, d.next)(), p = !1);
            }
            if (p && (0, j.isContextual)(e.ContextualKeyword._static)) {
                const B = (0, d.lookaheadType)();
                B !== f.TokenType.colon && B !== f.TokenType.question && (0, d.next)();
            }
            if (M(), (0, d.eat)(f.TokenType.bracketL))
                (0, d.eat)(f.TokenType.bracketL) ? (x(), (0, j.expect)(f.TokenType.bracketR), (0, j.expect)(f.TokenType.bracketR), (0, d.match)(f.TokenType.lessThan) || (0, d.match)(f.TokenType.parenL) ? y() : ((0, d.eat)(f.TokenType.question), k())) : ((0, d.lookaheadType)() === f.TokenType.colon ? (x(), k()) : J(), (0, j.expect)(f.TokenType.bracketR), k());
            else if ((0, d.match)(f.TokenType.parenL) || (0, d.match)(f.TokenType.lessThan))
                y();
            else {
                if ((0, j.isContextual)(e.ContextualKeyword._get) || (0, j.isContextual)(e.ContextualKeyword._set)) {
                    const B = (0, d.lookaheadType)();
                    B !== f.TokenType.name && B !== f.TokenType.string && B !== f.TokenType.num || (0, d.next)();
                }
                A();
            }
            B();
        }
        (0, j.expect)(A);
    }

    function A() {
        if ((0, d.match)(f.TokenType.ellipsis)) {
            if ((0, j.expect)(f.TokenType.ellipsis), (0, d.eat)(f.TokenType.comma) || (0, d.eat)(f.TokenType.semi), (0, d.match)(f.TokenType.braceR))
                return;
            J();
        } else
            x(), (0, d.match)(f.TokenType.lessThan) || (0, d.match)(f.TokenType.parenL) ? y() : ((0, d.eat)(f.TokenType.question), k());
    }

    function B() {
        (0, d.eat)(f.TokenType.semi) || (0, d.eat)(f.TokenType.comma) || (0, d.match)(f.TokenType.braceR) || (0, d.match)(f.TokenType.braceBarR) || (0, j.unexpected)();
    }

    function C(p) {
        for (p || (0, h.parseIdentifier)();
            (0, d.eat)(f.TokenType.dot);)
            (0, h.parseIdentifier)();
    }

    function D() {
        const E = (0, d.lookaheadType)();
        E === f.TokenType.colon || E === f.TokenType.question ? ((0, h.parseIdentifier)(), (0, d.eat)(f.TokenType.question), k()) : J();
    }

    function E() {
        for (; !(0, d.match)(f.TokenType.parenR) && !(0, d.match)(f.TokenType.ellipsis) && !g.state.error;)
            D(), (0, d.match)(f.TokenType.parenR) || (0, j.expect)(f.TokenType.comma);
        (0, d.eat)(f.TokenType.ellipsis) && D();
    }

    function F() {
        let G = !1;
        const H = g.state.noAnonFunctionType;
        switch (g.state.type) {
            case f.TokenType.name:
                return (0, j.isContextual)(e.ContextualKeyword._interface) ? void
                function() {
                    if ((0, j.expectContextual)(e.ContextualKeyword._interface), (0, d.eat)(f.TokenType._extends))
                        do {
                            q();
                        } while ((0, d.eat)(f.TokenType.comma));
                    z(!1, !1, !1);
                }(): ((0, h.parseIdentifier)(), C(!0), void((0, d.match)(f.TokenType.lessThan) && w()));
            case f.TokenType.braceL:
                return void z(!1, !1, !1);
            case f.TokenType.braceBarL:
                return void z(!1, !0, !1);
            case f.TokenType.bracketL:
                return void
                function() {
                    for ((0, j.expect)(f.TokenType.bracketL); g.state.pos < g.input.length && !(0, d.match)(f.TokenType.bracketR) && (J(), !(0, d.match)(f.TokenType.bracketR));)
                        (0, j.expect)(f.TokenType.comma);
                    (0, j.expect)(f.TokenType.bracketR);
                }();
            case f.TokenType.lessThan:
                return v(), (0, j.expect)(f.TokenType.parenL), E(), (0, j.expect)(f.TokenType.parenR), (0, j.expect)(f.TokenType.arrow), void J();
            case f.TokenType.parenL:
                if ((0, d.next)(), !(0, d.match)(f.TokenType.parenR) && !(0, d.match)(f.TokenType.ellipsis))
                    if ((0, d.match)(f.TokenType.name)) {
                        const I = (0, d.lookaheadType)();
                        G = I !== f.TokenType.question && I !== f.TokenType.colon;
                    } else
                        G = !0;
                if (G) {
                    if (g.state.noAnonFunctionType = !1, J(), g.state.noAnonFunctionType = H, g.state.noAnonFunctionType || !((0, d.match)(f.TokenType.comma) || (0, d.match)(f.TokenType.parenR) && (0, d.lookaheadType)() === f.TokenType.arrow))
                        return void(0, j.expect)(f.TokenType.parenR);
                    (0, d.eat)(f.TokenType.comma);
                }
                return E(), (0, j.expect)(f.TokenType.parenR), (0, j.expect)(f.TokenType.arrow), void J();
            case f.TokenType.minus:
                return (0, d.next)(), void(0, h.parseLiteral)();
            case f.TokenType.string:
            case f.TokenType.num:
            case f.TokenType._true:
            case f.TokenType._false:
            case f.TokenType._null:
            case f.TokenType._this:
            case f.TokenType._void:
            case f.TokenType.star:
                return void(0, d.next)();
            default:
                if (g.state.type === f.TokenType._typeof)
                    return (0, j.expect)(f.TokenType._typeof), void F();
                if (g.state.type & f.TokenType.IS_KEYWORD)
                    return (0, d.next)(), void(g.state.tokens[g.state.tokens.length - 1].type = f.TokenType.name);
        }
        (0, j.unexpected)();
    }

    function G() {
        (0, d.eat)(f.TokenType.question) ? G(): function() {
            for (F(); !(0, j.canInsertSemicolon)() && ((0, d.match)(f.TokenType.bracketL) || (0, d.match)(f.TokenType.questionDot));)
                (0, d.eat)(f.TokenType.questionDot), (0, j.expect)(f.TokenType.bracketL), (0, d.eat)(f.TokenType.bracketR) || (J(), (0, j.expect)(f.TokenType.bracketR));
        }();
    }

    function H() {
        G(), !g.state.noAnonFunctionType && (0, d.eat)(f.TokenType.arrow) && J();
    }

    function I() {
        for ((0, d.eat)(f.TokenType.bitwiseAND), H();
            (0, d.eat)(f.TokenType.bitwiseAND);)
            H();
    }

    function J() {
        ! function() {
            for ((0, d.eat)(f.TokenType.bitwiseOR), I();
                (0, d.eat)(f.TokenType.bitwiseOR);)
                I();
        }();
    }

    function K() {
        k();
    }

    function L() {
        (0, h.parseIdentifier)(), (0, d.match)(f.TokenType.colon) && K();
    }

    function M() {
        ((0, d.match)(f.TokenType.plus) || (0, d.match)(f.TokenType.minus)) && ((0, d.next)(), g.state.tokens[g.state.tokens.length - 1].isType = !0);
    }

    function N(p) {
        (0, d.match)(f.TokenType.colon) && m(), (0, h.parseFunctionBody)(!1, p);
    }

    function O(p, b, c) {
        if ((0, d.match)(f.TokenType.questionDot) && (0, d.lookaheadType)() === f.TokenType.lessThan)
            return b ? void(c.stop = !0) : ((0, d.next)(), w(), (0, j.expect)(f.TokenType.parenL), void(0, h.parseCallExpressionArguments)());
        if (!b && (0, d.match)(f.TokenType.lessThan)) {
            const P = g.state.snapshot();
            if (w(), (0, j.expect)(f.TokenType.parenL), (0, h.parseCallExpressionArguments)(), !g.state.error)
                return;
            g.state.restoreFromSnapshot(P);
        }
        (0, h.baseParseSubscript)(p, b, c);
    }

    function P() {
        if ((0, d.match)(f.TokenType.lessThan)) {
            const Q = g.state.snapshot();
            w(), g.state.error && g.state.restoreFromSnapshot(Q);
        }
    }

    function Q() {
        if ((0, d.match)(f.TokenType.name) && g.state.contextualKeyword === e.ContextualKeyword._interface) {
            const R = (0, d.pushTypeContext)(0);
            return (0, d.next)(), r(), (0, d.popTypeContext)(R), !0;
        }
        return !!(0, j.isContextual)(e.ContextualKeyword._enum) && (ib(), !0);
    }

    function R() {
        return !!(0, j.isContextual)(e.ContextualKeyword._enum) && (ib(), !0);
    }

    function S(p) {
        if (p === e.ContextualKeyword._declare) {
            if ((0, d.match)(f.TokenType._class) || (0, d.match)(f.TokenType.name) || (0, d.match)(f.TokenType._function) || (0, d.match)(f.TokenType._var) || (0, d.match)(f.TokenType._export)) {
                const T = (0, d.pushTypeContext)(1);
                n(), (0, d.popTypeContext)(T);
            }
        } else if ((0, d.match)(f.TokenType.name))
            if (p === e.ContextualKeyword._interface) {
                const T = (0, d.pushTypeContext)(1);
                r(), (0, d.popTypeContext)(T);
            } else if (T === e.ContextualKeyword._type) {
            const U = (0, d.pushTypeContext)(1);
            t(), (0, d.popTypeContext)(U);
        } else if (U === e.ContextualKeyword._opaque) {
            const V = (0, d.pushTypeContext)(1);
            u(!1), (0, d.popTypeContext)(V);
        }
        (0, j.semicolon)();
    }

    function T() {
        return (0, j.isContextual)(e.ContextualKeyword._type) || (0, j.isContextual)(e.ContextualKeyword._interface) || (0, j.isContextual)(e.ContextualKeyword._opaque) || (0, j.isContextual)(e.ContextualKeyword._enum);
    }

    function U() {
        return (0, d.match)(f.TokenType.name) && (g.state.contextualKeyword === e.ContextualKeyword._type || g.state.contextualKeyword === e.ContextualKeyword._interface || g.state.contextualKeyword === e.ContextualKeyword._opaque || g.state.contextualKeyword === e.ContextualKeyword._enum);
    }

    function V() {
        if ((0, j.isContextual)(e.ContextualKeyword._type)) {
            const W = (0, d.pushTypeContext)(1);
            (0, d.next)(), (0, d.match)(f.TokenType.braceL) ? ((0, i.parseExportSpecifiers)(), (0, i.parseExportFrom)()) : t(), (0, d.popTypeContext)(W);
        } else if ((0, j.isContextual)(e.ContextualKeyword._opaque)) {
            const X = (0, d.pushTypeContext)(1);
            (0, d.next)(), u(!1), (0, d.popTypeContext)(X);
        } else if ((0, j.isContextual)(e.ContextualKeyword._interface)) {
            const Y = (0, d.pushTypeContext)(1);
            (0, d.next)(), r(), (0, d.popTypeContext)(Y);
        } else
            (0, i.parseStatement)(!0);
    }

    function W() {
        return (0, d.match)(f.TokenType.star) || (0, j.isContextual)(e.ContextualKeyword._type) && (0, d.lookaheadType)() === f.TokenType.star;
    }

    function X() {
        if ((0, j.eatContextual)(e.ContextualKeyword._type)) {
            const Y = (0, d.pushTypeContext)(2);
            (0, i.baseParseExportStar)(), (0, d.popTypeContext)(Y);
        } else
            (0, i.baseParseExportStar)();
    }

    function Y(p) {
        if (p && (0, d.match)(f.TokenType.lessThan) && w(), (0, j.isContextual)(e.ContextualKeyword._implements)) {
            const Z = (0, d.pushTypeContext)(0);
            (0, d.next)(), g.state.tokens[g.state.tokens.length - 1].type = f.TokenType._implements;
            do {
                s(), (0, d.match)(f.TokenType.lessThan) && w();
            } while ((0, d.eat)(f.TokenType.comma));
            (0, d.popTypeContext)(Z);
        }
    }

    function Z() {
        (0, d.match)(f.TokenType.lessThan) && (v(), (0, d.match)(f.TokenType.parenL) || (0, j.unexpected)());
    }

    function $() {
        const _ = (0, d.pushTypeContext)(0);
        (0, d.eat)(f.TokenType.question), (0, d.match)(f.TokenType.colon) && K(), (0, d.popTypeContext)(_);
    }

    function _() {
        if ((0, d.match)(f.TokenType._typeof) || (0, j.isContextual)(e.ContextualKeyword._type)) {
            const ab = (0, d.lookaheadTypeAndKeyword)();
            (((p = ab).type === f.TokenType.name || p.type & f.TokenType.IS_KEYWORD) && p.contextualKeyword !== e.ContextualKeyword._from || ab.type === f.TokenType.braceL || ab.type === f.TokenType.star) && (0, d.next)();
        }
        var ab;
    }

    function ab() {
        const bb = g.state.contextualKeyword === e.ContextualKeyword._type || g.state.type === f.TokenType._typeof;
        bb ? (0, d.next)() : (0, h.parseIdentifier)(), (0, j.isContextual)(e.ContextualKeyword._as) && !(0, j.isLookaheadContextual)(e.ContextualKeyword._as) ? ((0, h.parseIdentifier)(), (!bb || (0, d.match)(f.TokenType.name) || g.state.type & f.TokenType.IS_KEYWORD) && (0, h.parseIdentifier)()) : (bb && ((0, d.match)(f.TokenType.name) || g.state.type & f.TokenType.IS_KEYWORD) && (0, h.parseIdentifier)(), (0, j.eatContextual)(e.ContextualKeyword._as) && (0, h.parseIdentifier)());
    }

    function bb() {
        if ((0, d.match)(f.TokenType.lessThan)) {
            const cb = (0, d.pushTypeContext)(0);
            v(), (0, d.popTypeContext)(cb);
        }
    }

    function cb() {
        (0, d.match)(f.TokenType.colon) && K();
    }

    function db() {
        if ((0, d.match)(f.TokenType.colon)) {
            const eb = g.state.noAnonFunctionType;
            g.state.noAnonFunctionType = !0, K(), g.state.noAnonFunctionType = eb;
        }
    }

    function eb(p, b) {
        if ((0, d.match)(f.TokenType.lessThan)) {
            const fb = g.state.snapshot();
            let gb = (0, h.baseParseMaybeAssign)(p, b);
            if (!g.state.error)
                return gb;
            g.state.restoreFromSnapshot(fb), g.state.type = f.TokenType.typeParameterStart;
            const hb = (0, d.pushTypeContext)(0);
            if (v(), (0, d.popTypeContext)(hb), gb = (0, h.baseParseMaybeAssign)(p, b), gb)
                return !0;
            (0, j.unexpected)();
        }
        return (0, h.baseParseMaybeAssign)(p, b);
    }

    function fb() {
        if ((0, d.match)(f.TokenType.colon)) {
            const gb = (0, d.pushTypeContext)(0),
                hb = g.state.snapshot(),
                ib = g.state.noAnonFunctionType;
            g.state.noAnonFunctionType = !0, m(), g.state.noAnonFunctionType = ib, (0, j.canInsertSemicolon)() && (0, j.unexpected)(), (0, d.match)(f.TokenType.arrow) || (0, j.unexpected)(), g.state.error && g.state.restoreFromSnapshot(hb), (0, d.popTypeContext)(gb);
        }
        return (0, d.eat)(f.TokenType.arrow);
    }

    function gb(p, hb = !1) {
        if (g.state.tokens[g.state.tokens.length - 1].contextualKeyword === e.ContextualKeyword._async && (0, d.match)(f.TokenType.lessThan)) {
            const ib = g.state.snapshot(),
                jb = function() {
                    g.state.scopeDepth++;
                    const kb = g.state.tokens.length;
                    return (0, i.parseFunctionParams)(), !!(0, h.parseArrow)() && ((0, h.parseArrowExpression)(kb), !0);
                }();
            if (jb && !g.state.error)
                return;
            g.state.restoreFromSnapshot(ib);
        }
        (0, h.baseParseSubscripts)(p, hb);
    }

    function ib() {
        (0, j.expectContextual)(e.ContextualKeyword._enum), g.state.tokens[g.state.tokens.length - 1].type = f.TokenType._enum, (0, h.parseIdentifier)(),
            function() {
                (0, j.eatContextual)(e.ContextualKeyword._of) && (0, d.next)();
                (0, j.expect)(f.TokenType.braceL),
                function() {
                    for (; !(0, d.match)(f.TokenType.braceR) && !g.state.error && !(0, d.eat)(f.TokenType.ellipsis);)
                        jb(), (0, d.match)(f.TokenType.braceR) || (0, j.expect)(f.TokenType.comma);
                }(), (0, j.expect)(f.TokenType.braceR);
            }();
    }

    function jb() {
        (0, h.parseIdentifier)(), (0, d.eat)(f.TokenType.eq) && (0, d.next)();
    }
}), c.register('Z4U7H', function(a, A) {
    b(a.exports, 'parseExpression', function() {
        return s;
    }), b(a.exports, 'parseMaybeAssign', function() {
        return u;
    }), b(a.exports, 'baseParseMaybeAssign', function() {
        return x;
    }), b(a.exports, 'baseParseConditional', function() {
        return y;
    }), b(a.exports, 'parseMaybeUnary', function() {
        return A;
    }), b(a.exports, 'parseExprSubscripts', function() {
        return B;
    }), b(a.exports, 'parseExprAtom', function() {
        return L;
    }), b(a.exports, 'baseParseSubscripts', function() {
        return E;
    }), b(a.exports, 'baseParseSubscript', function() {
        return H;
    }), b(a.exports, 'parseCallExpressionArguments', function() {
        return J;
    }), b(a.exports, 'atPossibleAsync', function() {
        return I;
    }), b(a.exports, 'parseTemplate', function() {
        return S;
    }), b(a.exports, 'parseArrowExpression', function() {
        return Y;
    }), b(a.exports, 'parseIdentifier', function() {
        return eb;
    }), b(a.exports, 'parseLiteral', function() {
        return N;
    }), b(a.exports, 'parseObj', function() {
        return T;
    }), b(a.exports, 'parseParenExpression', function() {
        return O;
    }), b(a.exports, 'parseArrow', function() {
        return Q;
    }), b(a.exports, 'parsePropertyName', function() {
        return W;
    }), b(a.exports, 'parseMethod', function() {
        return X;
    }), b(a.exports, 'parseFunctionBodyAndFinish', function() {
        return Z;
    }), b(a.exports, 'parseFunctionBody', function() {
        return _;
    });
    var d = c('2MRde'),
        e = c('CprEL'),
        f = c('2CA+i'),
        g = c('BULPy'),
        h = c('SI/fV'),
        i = c('C8Bhr'),
        j = c('oDSJh'),
        k = c('KWaC1'),
        l = c('bM7NW'),
        m = c('nLDM7'),
        n = c('s9O7r'),
        o = c('upccV'),
        p = c('orebU'),
        q = c('OJMmh');
    class r {
        constructor(a) {
            this.stop = a;
        }
    }

    function s(t = !1) {
        if (u(t), (0, h.match)(k.TokenType.comma))
            for (;
                (0, h.eat)(k.TokenType.comma);)
                u(t);
    }

    function u(v = !1, w = !1) {
        return n.isTypeScriptEnabled ? (0, g.tsParseMaybeAssign)(v, w) : n.isFlowEnabled ? (0, d.flowParseMaybeAssign)(v, w) : x(v, w);
    }

    function x(v, w) {
        if ((0, h.match)(k.TokenType._yield))
            return (0, h.next)(), (0, h.match)(k.TokenType.semi) || (0, q.canInsertSemicolon)() || ((0, h.eat)(k.TokenType.star), u()), !1;
        ((0, h.match)(k.TokenType.parenL) || (0, h.match)(k.TokenType.name) || (0, h.match)(k.TokenType._yield)) && (n.state.potentialArrowAt = n.state.start);
        const y = function(v) {
            const z = function(v) {
                const A = n.state.tokens.length,
                    B = A();
                return !!B || (z(A, -1, v), !1);
            }(v);
            return !!z || (function(v) {
                n.isTypeScriptEnabled || n.isFlowEnabled ? (0, f.typedParseConditional)(v) : y(v);
            }(v), !1);
        }(v);
        return w && R(), n.state.type & k.TokenType.IS_ASSIGN ? ((0, h.next)(), u(v), !1) : y;
    }

    function y(v) {
        (0, h.eat)(k.TokenType.question) && (u(), (0, q.expect)(k.TokenType.colon), u(v));
    }

    function z(v, w, c) {
        if (n.isTypeScriptEnabled && (k.TokenType._in & k.TokenType.PRECEDENCE_MASK) > w && !(0, q.hasPrecedingLineBreak)() && ((0, q.eatContextual)(i.ContextualKeyword._as) || (0, q.eatContextual)(i.ContextualKeyword._satisfies))) {
            const A = (0, h.pushTypeContext)(1);
            return (0, g.tsParseType)(), (0, h.popTypeContext)(A), (0, h.rescan_gt)(), void z(v, w, c);
        }
        const A = n.state.type & k.TokenType.PRECEDENCE_MASK;
        if (A > 0 && (!c || !(0, h.match)(k.TokenType._in)) && A > w) {
            const B = n.state.type;
            (0, h.next)(), B === k.TokenType.nullishCoalescing && (n.state.tokens[n.state.tokens.length - 1].nullishStartIndex = v);
            const C = n.state.tokens.length;
            A(), z(C, B & k.TokenType.IS_RIGHT_ASSOCIATIVE ? A - 1 : A, c), B === k.TokenType.nullishCoalescing && (n.state.tokens[v].numNullishCoalesceStarts++, n.state.tokens[n.state.tokens.length - 1].numNullishCoalesceEnds++), z(v, w, c);
        }
    }

    function A() {
        if (n.isTypeScriptEnabled && !n.isJSXEnabled && (0, h.eat)(k.TokenType.lessThan))
            return (0, g.tsParseTypeAssertion)(), !1;
        if ((0, q.isContextual)(i.ContextualKeyword._module) && (0, h.lookaheadCharCode)() === l.charCodes.leftCurlyBrace && !(0, q.hasFollowingLineBreak)())
            return (0, q.expectContextual)(i.ContextualKeyword._module), (0, q.expect)(k.TokenType.braceL), (0, p.parseBlockBody)(k.TokenType.braceR), !1;
        if (n.state.type & k.TokenType.IS_PREFIX)
            return (0, h.next)(), A(), !1;
        if (B())
            return !0;
        for (; n.state.type & k.TokenType.IS_POSTFIX && !(0, q.canInsertSemicolon)();)
            n.state.type === k.TokenType.preIncDec && (n.state.type = k.TokenType.postIncDec), (0, h.next)();
        return !1;
    }

    function B() {
        const C = n.state.tokens.length;
        return !!L() || (C(C), n.state.tokens.length > C && n.state.tokens[C].isOptionalChainStart && (n.state.tokens[n.state.tokens.length - 1].isOptionalChainEnd = !0), !1);
    }

    function C(v, D = !1) {
        n.isFlowEnabled ? (0, d.flowParseSubscripts)(v, D) : E(v, D);
    }

    function E(v, F = !1) {
        const G = new r(!1);
        do {
            G(v, F, G);
        } while (!G.stop && !n.state.error);
    }

    function G(v, F, c) {
        n.isTypeScriptEnabled ? (0, g.tsParseSubscript)(v, F, c) : n.isFlowEnabled ? (0, d.flowParseSubscript)(v, F, c) : H(v, F, c);
    }

    function H(v, F, c) {
        if (!F && (0, h.eat)(k.TokenType.doubleColon))
            K(), c.stop = !0, C(v, F);
        else if ((0, h.match)(k.TokenType.questionDot)) {
            if (n.state.tokens[v].isOptionalChainStart = !0, F && (0, h.lookaheadType)() === k.TokenType.parenL)
                return void(c.stop = !0);
            (0, h.next)(), n.state.tokens[n.state.tokens.length - 1].subscriptStartIndex = v, (0, h.eat)(k.TokenType.bracketL) ? (s(), (0, q.expect)(k.TokenType.bracketR)) : (0, h.eat)(k.TokenType.parenL) ? J() : M();
        } else if ((0, h.eat)(k.TokenType.dot))
            n.state.tokens[n.state.tokens.length - 1].subscriptStartIndex = v, M();
        else if ((0, h.eat)(k.TokenType.bracketL))
            n.state.tokens[n.state.tokens.length - 1].subscriptStartIndex = v, s(), (0, q.expect)(k.TokenType.bracketR);
        else if (!F && (0, h.match)(k.TokenType.parenL))
            if (I()) {
                const I = n.state.snapshot(),
                    J = n.state.tokens.length;
                (0, h.next)(), n.state.tokens[n.state.tokens.length - 1].subscriptStartIndex = v;
                const K = (0, n.getNextContextId)();
                n.state.tokens[n.state.tokens.length - 1].contextId = K, J(), n.state.tokens[n.state.tokens.length - 1].contextId = K, ((0, h.match)(k.TokenType.colon) || (0, h.match)(k.TokenType.arrow)) && (n.state.restoreFromSnapshot(I), c.stop = !0, n.state.scopeDepth++, (0, p.parseFunctionParams)(), function(v) {
                    n.isTypeScriptEnabled ? (0, g.tsStartParseAsyncArrowFromCallExpression)() : n.isFlowEnabled && (0, d.flowStartParseAsyncArrowFromCallExpression)();
                    (0, q.expect)(k.TokenType.arrow), Y(v);
                }(J));
            } else {
                (0, h.next)(), n.state.tokens[n.state.tokens.length - 1].subscriptStartIndex = v;
                const L = (0, n.getNextContextId)();
                n.state.tokens[n.state.tokens.length - 1].contextId = L, J(), n.state.tokens[n.state.tokens.length - 1].contextId = L;
            }
        else
            (0, h.match)(k.TokenType.backQuote) ? S() : c.stop = !0;
    }

    function I() {
        return n.state.tokens[n.state.tokens.length - 1].contextualKeyword === i.ContextualKeyword._async && !(0, q.canInsertSemicolon)();
    }

    function J() {
        let K = !0;
        for (; !(0, h.eat)(k.TokenType.parenR) && !n.state.error;) {
            if (K)
                K = !1;
            else if ((0, q.expect)(k.TokenType.comma), (0, h.eat)(k.TokenType.parenR))
                break;
            db(!1);
        }
    }

    function K() {
        const L = n.state.tokens.length;
        L(), C(L, !0);
    }

    function L() {
        if ((0, h.eat)(k.TokenType.modulo))
            return eb(), !1;
        if ((0, h.match)(k.TokenType.jsxText) || (0, h.match)(k.TokenType.jsxEmptyText))
            return N(), !1;
        if ((0, h.match)(k.TokenType.lessThan) && n.isJSXEnabled)
            return n.state.type = k.TokenType.jsxTagStart, (0, e.jsxParseElement)(), (0, h.next)(), !1;
        const M = n.state.potentialArrowAt === n.state.start;
        switch (n.state.type) {
            case k.TokenType.slash:
            case k.TokenType.assign:
                (0, h.retokenizeSlashAsRegex)();
            case k.TokenType._super:
            case k.TokenType._this:
            case k.TokenType.regexp:
            case k.TokenType.num:
            case k.TokenType.bigint:
            case k.TokenType.decimal:
            case k.TokenType.string:
            case k.TokenType._null:
            case k.TokenType._true:
            case k.TokenType._false:
                return (0, h.next)(), !1;
            case k.TokenType._import:
                return (0, h.next)(), (0, h.match)(k.TokenType.dot) && (n.state.tokens[n.state.tokens.length - 1].type = k.TokenType.name, (0, h.next)(), eb()), !1;
            case k.TokenType.name: {
                const N = n.state.tokens.length,
                    O = n.state.start,
                    P = n.state.contextualKeyword;
                return eb(), P === i.ContextualKeyword._await ? (A(), !1) : P === i.ContextualKeyword._async && (0, h.match)(k.TokenType._function) && !(0, q.canInsertSemicolon)() ? ((0, h.next)(), (0, p.parseFunction)(O, !1), !1) : M && P === i.ContextualKeyword._async && !(0, q.canInsertSemicolon)() && (0, h.match)(k.TokenType.name) ? (n.state.scopeDepth++, (0, o.parseBindingIdentifier)(!1), (0, q.expect)(k.TokenType.arrow), Y(N), !0) : (0, h.match)(k.TokenType._do) && !(0, q.canInsertSemicolon)() ? ((0, h.next)(), (0, p.parseBlock)(), !1) : M && !(0, q.canInsertSemicolon)() && (0, h.match)(k.TokenType.arrow) ? (n.state.scopeDepth++, (0, o.markPriorBindingIdentifier)(!1), (0, q.expect)(k.TokenType.arrow), Y(N), !0) : (n.state.tokens[n.state.tokens.length - 1].identifierRole = h.IdentifierRole.Access, !1);
            }
            case k.TokenType._do:
                return (0, h.next)(), (0, p.parseBlock)(), !1;
            case k.TokenType.parenL:
                return P(M);
            case k.TokenType.bracketL:
                return (0, h.next)(), bb(k.TokenType.bracketR, !0), !1;
            case k.TokenType.braceL:
                return T(!1, !1), !1;
            case k.TokenType._function:
                return function() {
                    const N = n.state.start;
                    eb(), (0, h.eat)(k.TokenType.dot) && eb();
                    (0, p.parseFunction)(N, !1);
                }(), !1;
            case k.TokenType.at:
                (0, p.parseDecorators)();
            case k.TokenType._class:
                return (0, p.parseClass)(!1), !1;
            case k.TokenType._new:
                return function() {
                    if ((0, q.expect)(k.TokenType._new), (0, h.eat)(k.TokenType.dot))
                        return void eb();
                    K(), void(0, h.eat)(k.TokenType.questionDot), n.isFlowEnabled && (0, d.flowStartParseNewArguments)();
                    (0, h.eat)(k.TokenType.parenL) && bb(k.TokenType.parenR);
                }(), !1;
            case k.TokenType.backQuote:
                return S(), !1;
            case k.TokenType.doubleColon:
                return (0, h.next)(), K(), !1;
            case k.TokenType.hash: {
                const N = (0, h.lookaheadCharCode)();
                return m.IS_IDENTIFIER_START[N] || N === l.charCodes.backslash ? M() : (0, h.next)(), !1;
            }
            default:
                return (0, q.unexpected)(), !1;
        }
    }

    function M() {
        (0, h.eat)(k.TokenType.hash), eb();
    }

    function N() {
        (0, h.next)();
    }

    function O() {
        (0, q.expect)(k.TokenType.parenL), s(), (0, q.expect)(k.TokenType.parenR);
    }

    function P(v) {
        const Q = n.state.snapshot(),
            R = n.state.tokens.length;
        (0, q.expect)(k.TokenType.parenL);
        let S = !0;
        for (; !(0, h.match)(k.TokenType.parenR) && !n.state.error;) {
            if (S)
                S = !1;
            else if ((0, q.expect)(k.TokenType.comma), (0, h.match)(k.TokenType.parenR))
                break;
            if ((0, h.match)(k.TokenType.ellipsis)) {
                (0, o.parseRest)(!1), R();
                break;
            }
            u(!1, !0);
        }
        if ((0, q.expect)(k.TokenType.parenR), v && ((0, h.match)(k.TokenType.colon) || !(0, q.canInsertSemicolon)())) {
            if (Q())
                return n.state.restoreFromSnapshot(Q), n.state.scopeDepth++, (0, p.parseFunctionParams)(), Q(), Y(R), !n.state.error || (n.state.restoreFromSnapshot(Q), P(!1), !1);
        }
        return !1;
    }

    function Q() {
        return n.isTypeScriptEnabled ? (0, g.tsParseArrow)() : n.isFlowEnabled ? (0, d.flowParseArrow)() : (0, h.eat)(k.TokenType.arrow);
    }

    function R() {
        (n.isTypeScriptEnabled || n.isFlowEnabled) && (0, f.typedParseParenItem)();
    }

    function S() {
        for ((0, h.nextTemplateToken)(), (0, h.nextTemplateToken)(); !(0, h.match)(k.TokenType.backQuote) && !n.state.error;)
            (0, q.expect)(k.TokenType.dollarBraceL), s(), (0, h.nextTemplateToken)(), (0, h.nextTemplateToken)();
        (0, h.next)();
    }

    function T(v, F) {
        const U = (0, n.getNextContextId)();
        let V = !0;
        for ((0, h.next)(), n.state.tokens[n.state.tokens.length - 1].contextId = U; !(0, h.eat)(k.TokenType.braceR) && !n.state.error;) {
            if (V)
                V = !1;
            else if ((0, q.expect)(k.TokenType.comma), (0, h.eat)(k.TokenType.braceR))
                break;
            let W = !1;
            if ((0, h.match)(k.TokenType.ellipsis)) {
                const X = n.state.tokens.length;
                if ((0, o.parseSpread)(), v && (n.state.tokens.length === X + 2 && (0, o.markPriorBindingIdentifier)(F), (0, h.eat)(k.TokenType.braceR)))
                    break;
            } else
                v || (W = (0, h.eat)(k.TokenType.star)), !v && (0, q.isContextual)(i.ContextualKeyword._async) ? (W && (0, q.unexpected)(), eb(), (0, h.match)(k.TokenType.colon) || (0, h.match)(k.TokenType.parenL) || (0, h.match)(k.TokenType.braceR) || (0, h.match)(k.TokenType.eq) || (0, h.match)(k.TokenType.comma) || ((0, h.match)(k.TokenType.star) && ((0, h.next)(), W = !0), W(U))) : W(U), V(v, F, U);
        }
        n.state.tokens[n.state.tokens.length - 1].contextId = U;
    }

    function U(v, F) {
        const V = n.state.start;
        return (0, h.match)(k.TokenType.parenL) ? (v && (0, q.unexpected)(), X(V, !1), !0) : !! function(v) {
            return !v && ((0, h.match)(k.TokenType.string) || (0, h.match)(k.TokenType.num) || (0, h.match)(k.TokenType.bracketL) || (0, h.match)(k.TokenType.name) || !!(n.state.type & k.TokenType.IS_KEYWORD));
        }(v) && (W(F), X(V, !1), !0);
    }

    function V(v, F, c) {
        n.isTypeScriptEnabled ? (0, g.tsStartParseObjPropValue)() : n.isFlowEnabled && (0, d.flowStartParseObjPropValue)();
        U(v, c) || function(v, F) {
            if ((0, h.eat)(k.TokenType.colon))
                return void(v ? (0, o.parseMaybeDefault)(F) : u(!1));
            let W;
            W = v ? 0 === n.state.scopeDepth ? h.IdentifierRole.ObjectShorthandTopLevelDeclaration : F ? h.IdentifierRole.ObjectShorthandBlockScopedDeclaration : h.IdentifierRole.ObjectShorthandFunctionScopedDeclaration : h.IdentifierRole.ObjectShorthand, n.state.tokens[n.state.tokens.length - 1].identifierRole = W, (0, o.parseMaybeDefault)(F, !0);
        }(v, F);
    }

    function W(v) {
        n.isFlowEnabled && (0, d.flowParseVariance)(), (0, h.eat)(k.TokenType.bracketL) ? (n.state.tokens[n.state.tokens.length - 1].contextId = v, u(), (0, q.expect)(k.TokenType.bracketR), n.state.tokens[n.state.tokens.length - 1].contextId = v) : ((0, h.match)(k.TokenType.num) || (0, h.match)(k.TokenType.string) || (0, h.match)(k.TokenType.bigint) || (0, h.match)(k.TokenType.decimal) ? L() : M(), n.state.tokens[n.state.tokens.length - 1].identifierRole = h.IdentifierRole.ObjectKey, n.state.tokens[n.state.tokens.length - 1].contextId = v);
    }

    function X(v, F) {
        const Y = (0, n.getNextContextId)();
        n.state.scopeDepth++;
        const Z = n.state.tokens.length,
            $ = _;
        (0, p.parseFunctionParams)($, Y), Z(v, Y);
        const ab = n.state.tokens.length;
        n.state.scopes.push(new(0, j.Scope)(Z, ab, !0)), n.state.scopeDepth--;
    }

    function Y(v) {
        _(!0);
        const Z = n.state.tokens.length;
        n.state.scopes.push(new(0, j.Scope)(v, Z, !0)), n.state.scopeDepth--;
    }

    function Z(v, $ = 0) {
        n.isTypeScriptEnabled ? (0, g.tsParseFunctionBodyAndFinish)(v, $) : n.isFlowEnabled ? (0, d.flowParseFunctionBodyAndFinish)($) : _(!1, $);
    }

    function _(v, ab = 0) {
        v && !(0, h.match)(k.TokenType.braceL) ? u() : (0, p.parseBlock)(!0, ab);
    }

    function bb(v, cb = !1) {
        let db = !0;
        for (; !(0, h.eat)(v) && !n.state.error;) {
            if (db)
                db = !1;
            else if ((0, q.expect)(k.TokenType.comma), (0, h.eat)(v))
                break;
            db(cb);
        }
    }

    function db(v) {
        v && (0, h.match)(k.TokenType.comma) || ((0, h.match)(k.TokenType.ellipsis) ? ((0, o.parseSpread)(), R()) : (0, h.match)(k.TokenType.question) ? (0, h.next)() : u(!1, !0));
    }

    function eb() {
        (0, h.next)(), n.state.tokens[n.state.tokens.length - 1].type = k.TokenType.name;
    }
}), c.register('CprEL', function(a, qb) {
    b(a.exports, 'nextJSXTagToken', function() {
        return r;
    }), b(a.exports, 'jsxParseElement', function() {
        return q;
    });
    var d = c('SI/fV'),
        e = c('KWaC1'),
        f = c('s9O7r'),
        g = c('Z4U7H'),
        h = c('OJMmh'),
        i = c('bM7NW'),
        j = c('nLDM7'),
        k = c('BULPy');

    function l() {
        r();
    }

    function m(a) {
        l(), (0, d.eat)(e.TokenType.colon) ? l() : f.state.tokens[f.state.tokens.length - 1].identifierRole = a;
    }

    function n() {
        const o = f.state.tokens.length;
        m(d.IdentifierRole.Access);
        let p = !1;
        for (;
            (0, d.match)(e.TokenType.dot);)
            p = !0, r(), l();
        if (!p) {
            const q = f.state.tokens[o],
                r = f.input.charCodeAt(q.start);
            r >= i.charCodes.lowercaseA && r <= i.charCodes.lowercaseZ && (q.identifierRole = null);
        }
    }

    function o() {
        switch (f.state.type) {
            case e.TokenType.braceL:
                return (0, d.next)(), (0, g.parseExpression)(), void r();
            case e.TokenType.jsxTagStart:
                return q(), void r();
            case e.TokenType.string:
                return void r();
            default:
                (0, h.unexpected)('JSX value should be either an expression or a quoted JSX text');
        }
    }

    function p() {
        const q = f.state.tokens.length - 1;
        f.state.tokens[q].jsxRole = d.JSXRole.NoChildren;
        let r = 0;
        const s = function(q) {
            if ((0, d.match)(e.TokenType.jsxTagEnd))
                return !1;
            n(), f.isTypeScriptEnabled && (0, k.tsTryParseJSXTypeArgument)();
            let t = !1;
            for (; !(0, d.match)(e.TokenType.slash) && !(0, d.match)(e.TokenType.jsxTagEnd) && !f.state.error;)
                (0, d.eat)(e.TokenType.braceL) ? (t = !0, (0, h.expect)(e.TokenType.ellipsis), (0, g.parseMaybeAssign)(), r()) : (t && f.state.end - f.state.start == 3 && f.input.charCodeAt(f.state.start) === i.charCodes.lowercaseK && f.input.charCodeAt(f.state.start + 1) === i.charCodes.lowercaseE && f.input.charCodeAt(f.state.start + 2) === i.charCodes.lowercaseY && (f.state.tokens[q].jsxRole = d.JSXRole.KeyAfterPropSpread), m(d.IdentifierRole.ObjectKey), (0, d.match)(e.TokenType.eq) && (r(), o()));
            const u = (0, d.match)(e.TokenType.slash);
            return u && r(), u;
        }(q);
        if (!s)
            for (s();;)
                switch (f.state.type) {
                    case e.TokenType.jsxTagStart:
                        if (r(), (0, d.match)(e.TokenType.slash))
                            return r(), (0, d.match)(e.TokenType.jsxTagEnd) || n(), void(f.state.tokens[q].jsxRole !== d.JSXRole.KeyAfterPropSpread && (1 === r ? f.state.tokens[q].jsxRole = d.JSXRole.OneChild : r > 1 && (f.state.tokens[q].jsxRole = d.JSXRole.StaticChildren)));
                        r++, p(), s();
                        break;
                    case e.TokenType.jsxText:
                        r++, s();
                        break;
                    case e.TokenType.jsxEmptyText:
                        s();
                        break;
                    case e.TokenType.braceL:
                        (0, d.next)(), (0, d.match)(e.TokenType.ellipsis) ? ((0, h.expect)(e.TokenType.ellipsis), (0, g.parseExpression)(), s(), r += 2) : ((0, d.match)(e.TokenType.braceR) || (r++, (0, g.parseExpression)()), s());
                        break;
                    default:
                        return void(0, h.unexpected)();
                }
    }

    function q() {
        r(), p();
    }

    function r() {
        f.state.tokens.push(new(0, d.Token)()), (0, d.skipSpace)(), f.state.start = f.state.pos;
        const s = f.input.charCodeAt(f.state.pos);
        if (j.IS_IDENTIFIER_START[s])
            ! function() {
                let t;
                do {
                    if (f.state.pos > f.input.length)
                        return void(0, h.unexpected)('Unexpectedly reached the end of input.');
                    t = f.input.charCodeAt(++f.state.pos);
                } while (j.IS_IDENTIFIER_CHAR[t] || t === i.charCodes.dash);
                (0, d.finishToken)(e.TokenType.jsxName);
            }();
        else if (t === i.charCodes.quotationMark || t === i.charCodes.apostrophe)
            ! function(t) {
                for (f.state.pos++;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, h.unexpected)('Unterminated string constant');
                    if (f.input.charCodeAt(f.state.pos) === t) {
                        f.state.pos++;
                        break;
                    }
                    f.state.pos++;
                }
                (0, d.finishToken)(e.TokenType.string);
            }(t);
        else
            switch (++f.state.pos, t) {
                case i.charCodes.greaterThan:
                    (0, d.finishToken)(e.TokenType.jsxTagEnd);
                    break;
                case i.charCodes.lessThan:
                    (0, d.finishToken)(e.TokenType.jsxTagStart);
                    break;
                case i.charCodes.slash:
                    (0, d.finishToken)(e.TokenType.slash);
                    break;
                case i.charCodes.equalsTo:
                    (0, d.finishToken)(e.TokenType.eq);
                    break;
                case i.charCodes.leftCurlyBrace:
                    (0, d.finishToken)(e.TokenType.braceL);
                    break;
                case i.charCodes.dot:
                    (0, d.finishToken)(e.TokenType.dot);
                    break;
                case i.charCodes.colon:
                    (0, d.finishToken)(e.TokenType.colon);
                    break;
                default:
                    (0, h.unexpected)();
            }
    }

    function s() {
        f.state.tokens.push(new(0, d.Token)()), f.state.start = f.state.pos,
            function() {
                let t = !1,
                    u = !1;
                for (;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, h.unexpected)('Unterminated JSX contents');
                    const v = f.input.charCodeAt(f.state.pos);
                    if (v === i.charCodes.lessThan || v === i.charCodes.leftCurlyBrace)
                        return f.state.pos === f.state.start ? v === i.charCodes.lessThan ? (f.state.pos++, void(0, d.finishToken)(e.TokenType.jsxTagStart)) : void(0, d.getTokenFromCode)(v) : void(t && !u ? (0, d.finishToken)(e.TokenType.jsxEmptyText) : (0, d.finishToken)(e.TokenType.jsxText));
                    v === i.charCodes.lineFeed ? t = !0 : v !== i.charCodes.space && v !== i.charCodes.carriageReturn && v !== i.charCodes.tab && (u = !0), f.state.pos++;
                }
            }();
    }
}), c.register('BULPy', function(a, qb) {
    b(a.exports, 'tsParseModifiers', function() {
        return p;
    }), b(a.exports, 'tsParseTypeAnnotation', function() {
        return N;
    }), b(a.exports, 'tsParseType', function() {
        return O;
    }), b(a.exports, 'tsTryParseTypeParameters', function() {
        return u;
    }), b(a.exports, 'tsTryParseTypeAnnotation', function() {
        return M;
    }), b(a.exports, 'tsParseTypeAssertion', function() {
        return Q;
    }), b(a.exports, 'tsTryParseJSXTypeArgument', function() {
        return R;
    }), b(a.exports, 'tsParseImportEqualsDeclaration', function() {
        return Z;
    }), b(a.exports, 'tsIsDeclarationStart', function() {
        return fb;
    }), b(a.exports, 'tsParseFunctionBodyAndFinish', function() {
        return gb;
    }), b(a.exports, 'tsParseSubscript', function() {
        return hb;
    }), b(a.exports, 'tsTryParseExport', function() {
        return ib;
    }), b(a.exports, 'tsParseImportSpecifier', function() {
        return jb;
    }), b(a.exports, 'tsParseExportSpecifier', function() {
        return kb;
    }), b(a.exports, 'tsTryParseExportDefaultExpression', function() {
        return lb;
    }), b(a.exports, 'tsTryParseStatementContent', function() {
        return mb;
    }), b(a.exports, 'tsTryParseClassMemberWithIsStatic', function() {
        return nb;
    }), b(a.exports, 'tsParseIdentifierStatement', function() {
        return ob;
    }), b(a.exports, 'tsParseExportDeclaration', function() {
        return pb;
    }), b(a.exports, 'tsAfterParseClassSuper', function() {
        return qb;
    }), b(a.exports, 'tsStartParseObjPropValue', function() {
        return rb;
    }), b(a.exports, 'tsStartParseFunctionParams', function() {
        return sb;
    }), b(a.exports, 'tsAfterParseVarHead', function() {
        return tb;
    }), b(a.exports, 'tsStartParseAsyncArrowFromCallExpression', function() {
        return ub;
    }), b(a.exports, 'tsParseMaybeAssign', function() {
        return vb;
    }), b(a.exports, 'tsParseArrow', function() {
        return wb;
    }), b(a.exports, 'tsParseAssignableListItemTypes', function() {
        return xb;
    }), b(a.exports, 'tsParseMaybeDecoratorArguments', function() {
        return yb;
    });
    var d, e = c('SI/fV'),
        f = c('C8Bhr'),
        g = c('KWaC1'),
        h = c('s9O7r'),
        i = c('Z4U7H'),
        j = c('upccV'),
        k = c('orebU'),
        l = c('OJMmh'),
        m = c('CprEL');

    function n() {
        return (0, e.match)(g.TokenType.name);
    }

    function o() {
        const p = h.state.snapshot();
        (0, e.next)();
        return !!(((0, e.match)(g.TokenType.bracketL) || (0, e.match)(g.TokenType.braceL) || (0, e.match)(g.TokenType.star) || (0, e.match)(g.TokenType.ellipsis) || (0, e.match)(g.TokenType.hash) || (0, e.match)(g.TokenType.name) || Boolean(h.state.type & g.TokenType.IS_KEYWORD) || (0, e.match)(g.TokenType.string) || (0, e.match)(g.TokenType.num) || (0, e.match)(g.TokenType.bigint) || (0, e.match)(g.TokenType.decimal)) && !(0, l.hasPrecedingLineBreak)()) || (h.state.restoreFromSnapshot(p), !1);
    }

    function p(a) {
        for (;;) {
            if (null === q(a))
                break;
        }
    }

    function q(a) {
        if (!(0, e.match)(g.TokenType.name))
            return null;
        const r = h.state.contextualKeyword;
        if (-1 !== a.indexOf(r) && o()) {
            switch (r) {
                case f.ContextualKeyword._readonly:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._readonly;
                    break;
                case f.ContextualKeyword._abstract:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._abstract;
                    break;
                case f.ContextualKeyword._static:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._static;
                    break;
                case f.ContextualKeyword._public:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._public;
                    break;
                case f.ContextualKeyword._private:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._private;
                    break;
                case f.ContextualKeyword._protected:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._protected;
                    break;
                case f.ContextualKeyword._override:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._override;
                    break;
                case f.ContextualKeyword._declare:
                    h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._declare;
            }
            return r;
        }
        return null;
    }

    function r() {
        for ((0, i.parseIdentifier)();
            (0, e.eat)(g.TokenType.dot);)
            (0, i.parseIdentifier)();
    }

    function s() {
        (0, l.expect)(g.TokenType._import), (0, l.expect)(g.TokenType.parenL), (0, l.expect)(g.TokenType.string), (0, l.expect)(g.TokenType.parenR), (0, e.eat)(g.TokenType.dot) && r(), (0, e.match)(g.TokenType.lessThan) && eb();
    }

    function t() {
        (0, e.eat)(g.TokenType._const);
        const u = (0, e.eat)(g.TokenType._in),
            v = (0, l.eatContextual)(f.ContextualKeyword._out);
        (0, e.eat)(g.TokenType._const), !u && !v || (0, e.match)(g.TokenType.name) ? (0, i.parseIdentifier)() : h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.name, (0, e.eat)(g.TokenType._extends) && O(), (0, e.eat)(g.TokenType.eq) && O();
    }

    function u() {
        (0, e.match)(g.TokenType.lessThan) && v();
    }

    function v() {
        const w = (0, e.pushTypeContext)(0);
        for ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.typeParameterStart) ? (0, e.next)() : (0, l.unexpected)(); !(0, e.eat)(g.TokenType.greaterThan) && !h.state.error;)
            t(), (0, e.eat)(g.TokenType.comma);
        (0, e.popTypeContext)(w);
    }

    function w(a) {
        const x = a === g.TokenType.arrow;
        var y;
        u(), (0, l.expect)(g.TokenType.parenL), h.state.scopeDepth++, y = !1, (0, j.parseBindingList)(g.TokenType.parenR, y), h.state.scopeDepth--, (x || (0, e.match)(a)) && L(a);
    }

    function x() {
        (0, e.eat)(g.TokenType.comma) || (0, l.semicolon)();
    }

    function y() {
        w(g.TokenType.colon), x();
    }

    function z() {
        if (!(0, e.match)(g.TokenType.bracketL) || ! function() {
                const A = h.state.snapshot();
                (0, e.next)();
                const B = (0, e.eat)(g.TokenType.name) && (0, e.match)(g.TokenType.colon);
                return h.state.restoreFromSnapshot(A), B;
            }())
            return !1;
        const A = (0, e.pushTypeContext)(0);
        return (0, l.expect)(g.TokenType.bracketL), (0, i.parseIdentifier)(), N(), (0, l.expect)(g.TokenType.bracketR), M(), x(), (0, e.popTypeContext)(A), !0;
    }

    function A(a) {
        (0, e.eat)(g.TokenType.question), a || !(0, e.match)(g.TokenType.parenL) && !(0, e.match)(g.TokenType.lessThan) ? (M(), x()) : (w(g.TokenType.colon), x());
    }

    function B() {
        if ((0, e.match)(g.TokenType.parenL) || (0, e.match)(g.TokenType.lessThan))
            return void y();
        if ((0, e.match)(g.TokenType._new))
            return (0, e.next)(), void((0, e.match)(g.TokenType.parenL) || (0, e.match)(g.TokenType.lessThan) ? y() : A(!1));
        const C = !!q([f.ContextualKeyword._readonly]);
        z() || (((0, l.isContextual)(f.ContextualKeyword._get) || (0, l.isContextual)(f.ContextualKeyword._set)) && o(), (0, i.parsePropertyName)(-1), A(C));
    }

    function C() {
        for ((0, l.expect)(g.TokenType.braceL); !(0, e.eat)(g.TokenType.braceR) && !h.state.error;)
            B();
    }

    function D() {
        const E = h.state.snapshot(),
            F = function() {
                if ((0, e.next)(), (0, e.eat)(g.TokenType.plus) || (0, e.eat)(g.TokenType.minus))
                    return (0, l.isContextual)(f.ContextualKeyword._readonly);
                (0, l.isContextual)(f.ContextualKeyword._readonly) && (0, e.next)();
                return !!(0, e.match)(g.TokenType.bracketL) && ((0, e.next)(), !!n() && ((0, e.next)(), (0, e.match)(g.TokenType._in)));
            }();
        return h.state.restoreFromSnapshot(E), F;
    }

    function E() {
        (0, l.expect)(g.TokenType.braceL), (0, e.match)(g.TokenType.plus) || (0, e.match)(g.TokenType.minus) ? ((0, e.next)(), (0, l.expectContextual)(f.ContextualKeyword._readonly)) : (0, l.eatContextual)(f.ContextualKeyword._readonly), (0, l.expect)(g.TokenType.bracketL), (0, i.parseIdentifier)(), (0, l.expect)(g.TokenType._in), O(), (0, l.eatContextual)(f.ContextualKeyword._as) && O(), (0, l.expect)(g.TokenType.bracketR), (0, e.match)(g.TokenType.plus) || (0, e.match)(g.TokenType.minus) ? ((0, e.next)(), (0, l.expect)(g.TokenType.question)) : (0, e.eat)(g.TokenType.question), (0, e.eat)(g.TokenType.colon) && O(), (0, l.semicolon)(), (0, l.expect)(g.TokenType.braceR);
    }

    function F() {
        (0, e.eat)(g.TokenType.ellipsis) ? O(): (O(), (0, e.eat)(g.TokenType.question)), (0, e.eat)(g.TokenType.colon) && O();
    }

    function G(a) {
        a === d.TSAbstractConstructorType && (0, l.expectContextual)(f.ContextualKeyword._abstract), a !== d.TSConstructorType && a !== d.TSAbstractConstructorType || (0, l.expect)(g.TokenType._new);
        const H = h.state.inDisallowConditionalTypesContext;
        h.state.inDisallowConditionalTypesContext = !1, w(g.TokenType.arrow), h.state.inDisallowConditionalTypesContext = H;
    }

    function H() {
        switch (h.state.type) {
            case g.TokenType.name:
                return r(), void(!(0, l.hasPrecedingLineBreak)() && (0, e.match)(g.TokenType.lessThan) && eb());
            case g.TokenType._void:
            case g.TokenType._null:
                return void(0, e.next)();
            case g.TokenType.string:
            case g.TokenType.num:
            case g.TokenType.bigint:
            case g.TokenType.decimal:
            case g.TokenType._true:
            case g.TokenType._false:
                return void(0, i.parseLiteral)();
            case g.TokenType.minus:
                return (0, e.next)(), void(0, i.parseLiteral)();
            case g.TokenType._this:
                return (0, e.next)(), void((0, l.isContextual)(f.ContextualKeyword._is) && !(0, l.hasPrecedingLineBreak)() && ((0, e.next)(), N()));
            case g.TokenType._typeof:
                return (0, l.expect)(g.TokenType._typeof), (0, e.match)(g.TokenType._import) ? s() : r(), void(!(0, l.hasPrecedingLineBreak)() && (0, e.match)(g.TokenType.lessThan) && eb());
            case g.TokenType._import:
                return void s();
            case g.TokenType.braceL:
                return void(D() ? E() : C());
            case g.TokenType.bracketL:
                return void
                function() {
                    for ((0, l.expect)(g.TokenType.bracketL); !(0, e.eat)(g.TokenType.bracketR) && !h.state.error;)
                        F(), (0, e.eat)(g.TokenType.comma);
                }();
            case g.TokenType.parenL:
                return (0, l.expect)(g.TokenType.parenL), O(), void(0, l.expect)(g.TokenType.parenR);
            case g.TokenType.backQuote:
                return void
                function() {
                    for ((0, e.nextTemplateToken)(), (0, e.nextTemplateToken)(); !(0, e.match)(g.TokenType.backQuote) && !h.state.error;)
                        (0, l.expect)(g.TokenType.dollarBraceL), O(), (0, e.nextTemplateToken)(), (0, e.nextTemplateToken)();
                    (0, e.next)();
                }();
            default:
                if (h.state.type & g.TokenType.IS_KEYWORD)
                    return (0, e.next)(), void(h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.name);
        }
        (0, l.unexpected)();
    }

    function I() {
        if ((0, l.isContextual)(f.ContextualKeyword._keyof) || (0, l.isContextual)(f.ContextualKeyword._unique) || (0, l.isContextual)(f.ContextualKeyword._readonly))
            (0, e.next)(), I();
        else if ((0, l.isContextual)(f.ContextualKeyword._infer))
            ! function() {
                if ((0, l.expectContextual)(f.ContextualKeyword._infer), (0, i.parseIdentifier)(), (0, e.match)(g.TokenType._extends)) {
                    const J = h.state.snapshot();
                    (0, l.expect)(g.TokenType._extends);
                    const K = h.state.inDisallowConditionalTypesContext;
                    h.state.inDisallowConditionalTypesContext = !0, O(), h.state.inDisallowConditionalTypesContext = K, (h.state.error || !h.state.inDisallowConditionalTypesContext && (0, e.match)(g.TokenType.question)) && h.state.restoreFromSnapshot(J);
                }
            }();
        else {
            const J = h.state.inDisallowConditionalTypesContext;
            h.state.inDisallowConditionalTypesContext = !1,
                function() {
                    for (H(); !(0, l.hasPrecedingLineBreak)() && (0, e.eat)(g.TokenType.bracketL);)
                        (0, e.eat)(g.TokenType.bracketR) || (O(), (0, l.expect)(g.TokenType.bracketR));
                }(), h.state.inDisallowConditionalTypesContext = J;
        }
    }

    function J() {
        if ((0, e.eat)(g.TokenType.bitwiseAND), I(), (0, e.match)(g.TokenType.bitwiseAND))
            for (;
                (0, e.eat)(g.TokenType.bitwiseAND);)
                I();
    }

    function K() {
        return !!(0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.parenL) && function() {
            const L = h.state.snapshot(),
                M = function() {
                    if ((0, e.next)(), (0, e.match)(g.TokenType.parenR) || (0, e.match)(g.TokenType.ellipsis))
                        return !0;
                    if (function() {
                            if ((0, e.match)(g.TokenType.name) || (0, e.match)(g.TokenType._this))
                                return (0, e.next)(), !0;
                            if ((0, e.match)(g.TokenType.braceL) || (0, e.match)(g.TokenType.bracketL)) {
                                let N = 1;
                                for ((0, e.next)(); N > 0 && !h.state.error;)
                                    (0, e.match)(g.TokenType.braceL) || (0, e.match)(g.TokenType.bracketL) ? N++ : ((0, e.match)(g.TokenType.braceR) || (0, e.match)(g.TokenType.bracketR)) && N--, (0, e.next)();
                                return !0;
                            }
                            return !1;
                        }()) {
                        if ((0, e.match)(g.TokenType.colon) || (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.question) || (0, e.match)(g.TokenType.eq))
                            return !0;
                        if ((0, e.match)(g.TokenType.parenR) && ((0, e.next)(), (0, e.match)(g.TokenType.arrow)))
                            return !0;
                    }
                    return !1;
                }();
            return h.state.restoreFromSnapshot(L), M;
        }();
    }

    function L(a) {
        const M = (0, e.pushTypeContext)(0);
        (0, l.expect)(a);
        (function() {
            const N = h.state.snapshot();
            if ((0, l.isContextual)(f.ContextualKeyword._asserts))
                return (0, e.next)(), (0, l.eatContextual)(f.ContextualKeyword._is) ? (O(), !0) : n() || (0, e.match)(g.TokenType._this) ? ((0, e.next)(), (0, l.eatContextual)(f.ContextualKeyword._is) && O(), !0) : (h.state.restoreFromSnapshot(N), !1);
            if (n() || (0, e.match)(g.TokenType._this))
                return (0, e.next)(), (0, l.isContextual)(f.ContextualKeyword._is) && !(0, l.hasPrecedingLineBreak)() ? ((0, e.next)(), O(), !0) : (h.state.restoreFromSnapshot(N), !1);
            return !1;
        }() || O(), (0, e.popTypeContext)(M));
    }

    function M() {
        (0, e.match)(g.TokenType.colon) && N();
    }

    function N() {
        const O = (0, e.pushTypeContext)(0);
        (0, l.expect)(g.TokenType.colon), O(), (0, e.popTypeContext)(O);
    }

    function O() {
        if (P(), h.state.inDisallowConditionalTypesContext || (0, l.hasPrecedingLineBreak)() || !(0, e.eat)(g.TokenType._extends))
            return;
        const P = h.state.inDisallowConditionalTypesContext;
        h.state.inDisallowConditionalTypesContext = !0, P(), h.state.inDisallowConditionalTypesContext = P, (0, l.expect)(g.TokenType.question), O(), (0, l.expect)(g.TokenType.colon), O();
    }

    function P() {
        K() ? G(d.TSFunctionType) : (0, e.match)(g.TokenType._new) ? G(d.TSConstructorType) : (0, l.isContextual)(f.ContextualKeyword._abstract) && (0, e.lookaheadType)() === g.TokenType._new ? G(d.TSAbstractConstructorType) : function() {
            if ((0, e.eat)(g.TokenType.bitwiseOR), J(), (0, e.match)(g.TokenType.bitwiseOR))
                for (;
                    (0, e.eat)(g.TokenType.bitwiseOR);)
                    J();
        }();
    }

    function Q() {
        const R = (0, e.pushTypeContext)(1);
        O(), (0, l.expect)(g.TokenType.greaterThan), (0, e.popTypeContext)(R), (0, i.parseMaybeUnary)();
    }

    function R() {
        if ((0, e.eat)(g.TokenType.jsxTagStart)) {
            h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.typeParameterStart;
            const S = (0, e.pushTypeContext)(1);
            for (; !(0, e.match)(g.TokenType.greaterThan) && !h.state.error;)
                O(), (0, e.eat)(g.TokenType.comma);
            (0, m.nextJSXTagToken)(), (0, e.popTypeContext)(S);
        }
    }

    function S() {
        for (; !(0, e.match)(g.TokenType.braceL) && !h.state.error;)
            T(), (0, e.eat)(g.TokenType.comma);
    }

    function T() {
        r(), (0, e.match)(g.TokenType.lessThan) && eb();
    }

    function U() {
        if ((0, e.match)(g.TokenType.string) ? (0, i.parseLiteral)() : (0, i.parseIdentifier)(), (0, e.eat)(g.TokenType.eq)) {
            const V = h.state.tokens.length - 1;
            (0, i.parseMaybeAssign)(), h.state.tokens[V].rhsEndIndex = h.state.tokens.length;
        }
    }

    function V() {
        for ((0, j.parseBindingIdentifier)(!1), (0, l.expect)(g.TokenType.braceL); !(0, e.eat)(g.TokenType.braceR) && !h.state.error;)
            U(), (0, e.eat)(g.TokenType.comma);
    }

    function W() {
        (0, l.expect)(g.TokenType.braceL), (0, k.parseBlockBody)(g.TokenType.braceR);
    }

    function X() {
        (0, j.parseBindingIdentifier)(!1), (0, e.eat)(g.TokenType.dot) ? X(): W();
    }

    function Y() {
        (0, l.isContextual)(f.ContextualKeyword._global) ? (0, i.parseIdentifier)() : (0, e.match)(g.TokenType.string) ? (0, i.parseExprAtom)() : (0, l.unexpected)(), (0, e.match)(g.TokenType.braceL) ? W(): (0, l.semicolon)();
    }

    function Z() {
        (0, j.parseImportedIdentifier)(), (0, l.expect)(g.TokenType.eq), (0, l.isContextual)(f.ContextualKeyword._require) && (0, e.lookaheadType)() === g.TokenType.parenL ? ((0, l.expectContextual)(f.ContextualKeyword._require), (0, l.expect)(g.TokenType.parenL), (0, e.match)(g.TokenType.string) || (0, l.unexpected)(), (0, i.parseLiteral)(), (0, l.expect)(g.TokenType.parenR)) : r(), (0, l.semicolon)();
    }

    function $() {
        return ab(h.state.contextualKeyword, !0);
    }

    function _(a) {
        switch (a) {
            case f.ContextualKeyword._declare: {
                const ab = h.state.tokens.length - 1,
                    bb = function() {
                        if ((0, l.isLineTerminator)())
                            return !1;
                        switch (h.state.type) {
                            case g.TokenType._function: {
                                const cb = (0, e.pushTypeContext)(1);
                                (0, e.next)();
                                const db = h.state.start;
                                return (0, k.parseFunction)(db, !0), (0, e.popTypeContext)(cb), !0;
                            }
                            case g.TokenType._class: {
                                const cb = (0, e.pushTypeContext)(1);
                                return (0, k.parseClass)(!0, !1), (0, e.popTypeContext)(cb), !0;
                            }
                            case g.TokenType._const:
                                if ((0, e.match)(g.TokenType._const) && (0, l.isLookaheadContextual)(f.ContextualKeyword._enum)) {
                                    const cb = (0, e.pushTypeContext)(1);
                                    return (0, l.expect)(g.TokenType._const), (0, l.expectContextual)(f.ContextualKeyword._enum), h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._enum, V(), (0, e.popTypeContext)(cb), !0;
                                }
                            case g.TokenType._var:
                            case g.TokenType._let: {
                                const cb = (0, e.pushTypeContext)(1);
                                return (0, k.parseVarStatement)(h.state.type !== g.TokenType._var), (0, e.popTypeContext)(cb), !0;
                            }
                            case g.TokenType.name: {
                                const cb = (0, e.pushTypeContext)(1),
                                    db = h.state.contextualKeyword;
                                let eb = !1;
                                return db === f.ContextualKeyword._global ? (Y(), eb = !0) : eb = ab(db, !0), (0, e.popTypeContext)(cb), eb;
                            }
                            default:
                                return !1;
                        }
                    }();
                if (bb)
                    return h.state.tokens[ab].type = g.TokenType._declare, !0;
                break;
            }
            case f.ContextualKeyword._global:
                if ((0, e.match)(g.TokenType.braceL))
                    return W(), !0;
                break;
            default:
                return ab(a, !1);
        }
        return !1;
    }

    function ab(a, b) {
        switch (a) {
            case f.ContextualKeyword._abstract:
                if (bb(b) && (0, e.match)(g.TokenType._class))
                    return h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._abstract, (0, k.parseClass)(!0, !1), !0;
                break;
            case f.ContextualKeyword._enum:
                if (bb(b) && (0, e.match)(g.TokenType.name))
                    return h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._enum, V(), !0;
                break;
            case f.ContextualKeyword._interface:
                if (bb(b) && (0, e.match)(g.TokenType.name)) {
                    const bb = (0, e.pushTypeContext)(b ? 2 : 1);
                    return (0, j.parseBindingIdentifier)(!1), u(), (0, e.eat)(g.TokenType._extends) && S(), C(), (0, e.popTypeContext)(bb), !0;
                }
                break;
            case f.ContextualKeyword._module:
                if (bb(b)) {
                    if ((0, e.match)(g.TokenType.string)) {
                        const bb = (0, e.pushTypeContext)(b ? 2 : 1);
                        return Y(), (0, e.popTypeContext)(bb), !0;
                    }
                    if ((0, e.match)(g.TokenType.name)) {
                        const bb = (0, e.pushTypeContext)(b ? 2 : 1);
                        return X(), (0, e.popTypeContext)(bb), !0;
                    }
                }
                break;
            case f.ContextualKeyword._namespace:
                if (bb(b) && (0, e.match)(g.TokenType.name)) {
                    const bb = (0, e.pushTypeContext)(b ? 2 : 1);
                    return X(), (0, e.popTypeContext)(bb), !0;
                }
                break;
            case f.ContextualKeyword._type:
                if (bb(b) && (0, e.match)(g.TokenType.name)) {
                    const bb = (0, e.pushTypeContext)(b ? 2 : 1);
                    return (0, j.parseBindingIdentifier)(!1), u(), (0, l.expect)(g.TokenType.eq), O(), (0, l.semicolon)(), (0, e.popTypeContext)(bb), !0;
                }
        }
        return !1;
    }

    function bb(a) {
        return a ? ((0, e.next)(), !0) : !(0, l.isLineTerminator)();
    }

    function cb() {
        const db = h.state.snapshot();
        return v(), (0, k.parseFunctionParams)(), (0, e.match)(g.TokenType.colon) && L(g.TokenType.colon), (0, l.expect)(g.TokenType.arrow), h.state.error ? (h.state.restoreFromSnapshot(db), !1) : ((0, i.parseFunctionBody)(!0), !0);
    }

    function db() {
        h.state.type === g.TokenType.bitShiftL && (h.state.pos -= 1, (0, e.finishToken)(g.TokenType.lessThan)), eb();
    }

    function eb() {
        const fb = (0, e.pushTypeContext)(0);
        for ((0, l.expect)(g.TokenType.lessThan); !(0, e.match)(g.TokenType.greaterThan) && !h.state.error;)
            O(), (0, e.eat)(g.TokenType.comma);
        fb ? ((0, l.expect)(g.TokenType.greaterThan), (0, e.popTypeContext)(fb)) : ((0, e.popTypeContext)(fb), (0, e.rescan_gt)(), (0, l.expect)(g.TokenType.greaterThan), h.state.tokens[h.state.tokens.length - 1].isType = !0);
    }

    function fb() {
        if ((0, e.match)(g.TokenType.name))
            switch (h.state.contextualKeyword) {
                case f.ContextualKeyword._abstract:
                case f.ContextualKeyword._declare:
                case f.ContextualKeyword._enum:
                case f.ContextualKeyword._interface:
                case f.ContextualKeyword._module:
                case f.ContextualKeyword._namespace:
                case f.ContextualKeyword._type:
                    return !0;
            }
        return !1;
    }

    function gb(a, b) {
        if ((0, e.match)(g.TokenType.colon) && L(g.TokenType.colon), (0, e.match)(g.TokenType.braceL) || !(0, l.isLineTerminator)())
            (0, i.parseFunctionBody)(!1, b);
        else {
            let hb = h.state.tokens.length - 1;
            for (; hb >= 0 && (h.state.tokens[hb].start >= a || h.state.tokens[hb].type === g.TokenType._default || h.state.tokens[hb].type === g.TokenType._export);)
                h.state.tokens[hb].isType = !0, hb--;
        }
    }

    function hb(a, b, c) {
        if ((0, l.hasPrecedingLineBreak)() || !(0, e.eat)(g.TokenType.bang)) {
            if ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.bitShiftL)) {
                const ib = h.state.snapshot();
                if (!b && (0, i.atPossibleAsync)()) {
                    if (cb())
                        return;
                }
                if (db(), !b && (0, e.eat)(g.TokenType.parenL) ? (h.state.tokens[h.state.tokens.length - 1].subscriptStartIndex = a, (0, i.parseCallExpressionArguments)()) : (0, e.match)(g.TokenType.backQuote) ? (0, i.parseTemplate)() : (h.state.type === g.TokenType.greaterThan || h.state.type !== g.TokenType.parenL && Boolean(h.state.type & g.TokenType.IS_EXPRESSION_START) && !(0, l.hasPrecedingLineBreak)()) && (0, l.unexpected)(), !h.state.error)
                    return;
                h.state.restoreFromSnapshot(ib);
            } else
                !b && (0, e.match)(g.TokenType.questionDot) && (0, e.lookaheadType)() === g.TokenType.lessThan && ((0, e.next)(), h.state.tokens[a].isOptionalChainStart = !0, h.state.tokens[h.state.tokens.length - 1].subscriptStartIndex = a, eb(), (0, l.expect)(g.TokenType.parenL), (0, i.parseCallExpressionArguments)());
            (0, i.baseParseSubscript)(a, b, c);
        } else
            h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.nonNullAssertion;
    }

    function ib() {
        if ((0, e.eat)(g.TokenType._import))
            return (0, l.isContextual)(f.ContextualKeyword._type) && (0, e.lookaheadType)() !== g.TokenType.eq && (0, l.expectContextual)(f.ContextualKeyword._type), Z(), !0;
        if ((0, e.eat)(g.TokenType.eq))
            return (0, i.parseExpression)(), (0, l.semicolon)(), !0;
        if ((0, l.eatContextual)(f.ContextualKeyword._as))
            return (0, l.expectContextual)(f.ContextualKeyword._namespace), (0, i.parseIdentifier)(), (0, l.semicolon)(), !0;
        if ((0, l.isContextual)(f.ContextualKeyword._type)) {
            const jb = (0, e.lookaheadType)();
            jb !== g.TokenType.braceL && jb !== g.TokenType.star || (0, e.next)();
        }
        return !1;
    }

    function jb() {
        if ((0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR))
            h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ImportDeclaration;
        else {
            if ((0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR))
                return h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ImportDeclaration, h.state.tokens[h.state.tokens.length - 2].isType = !0, void(h.state.tokens[h.state.tokens.length - 1].isType = !0);
            if ((0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR))
                return h.state.tokens[h.state.tokens.length - 3].identifierRole = e.IdentifierRole.ImportAccess, void(h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ImportDeclaration);
            (0, i.parseIdentifier)(), h.state.tokens[h.state.tokens.length - 3].identifierRole = e.IdentifierRole.ImportAccess, h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ImportDeclaration, h.state.tokens[h.state.tokens.length - 4].isType = !0, h.state.tokens[h.state.tokens.length - 3].isType = !0, h.state.tokens[h.state.tokens.length - 2].isType = !0, h.state.tokens[h.state.tokens.length - 1].isType = !0;
        }
    }

    function kb() {
        if ((0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR))
            h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ExportAccess;
        else {
            if ((0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR))
                return h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ExportAccess, h.state.tokens[h.state.tokens.length - 2].isType = !0, void(h.state.tokens[h.state.tokens.length - 1].isType = !0);
            (0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR) ? h.state.tokens[h.state.tokens.length - 3].identifierRole = e.IdentifierRole.ExportAccess: ((0, i.parseIdentifier)(), h.state.tokens[h.state.tokens.length - 3].identifierRole = e.IdentifierRole.ExportAccess, h.state.tokens[h.state.tokens.length - 4].isType = !0, h.state.tokens[h.state.tokens.length - 3].isType = !0, h.state.tokens[h.state.tokens.length - 2].isType = !0, h.state.tokens[h.state.tokens.length - 1].isType = !0);
        }
    }

    function lb() {
        if ((0, l.isContextual)(f.ContextualKeyword._abstract) && (0, e.lookaheadType)() === g.TokenType._class)
            return h.state.type = g.TokenType._abstract, (0, e.next)(), (0, k.parseClass)(!0, !0), !0;
        if ((0, l.isContextual)(f.ContextualKeyword._interface)) {
            const mb = (0, e.pushTypeContext)(2);
            return ab(f.ContextualKeyword._interface, !0), (0, e.popTypeContext)(mb), !0;
        }
        return !1;
    }

    function mb() {
        if (h.state.type === g.TokenType._const) {
            const nb = (0, e.lookaheadTypeAndKeyword)();
            if (nb.type === g.TokenType.name && nb.contextualKeyword === f.ContextualKeyword._enum)
                return (0, l.expect)(g.TokenType._const), (0, l.expectContextual)(f.ContextualKeyword._enum), h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._enum, V(), !0;
        }
        return !1;
    }

    function nb(a) {
        const ob = h.state.tokens.length;
        p([
            f.ContextualKeyword._abstract,
            f.ContextualKeyword._readonly,
            f.ContextualKeyword._declare,
            f.ContextualKeyword._static,
            f.ContextualKeyword._override
        ]);
        const pb = h.state.tokens.length;
        if (z()) {
            for (let qb = a ? ob - 1 : ob; qb < pb; qb++)
                h.state.tokens[qb].isType = !0;
            return !0;
        }
        return !1;
    }

    function ob(a) {
        _(a) || (0, l.semicolon)();
    }

    function pb() {
        const qb = (0, l.eatContextual)(f.ContextualKeyword._declare);
        qb && (h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._declare);
        let rb = !1;
        if ((0, e.match)(g.TokenType.name))
            if (qb) {
                const sb = (0, e.pushTypeContext)(2);
                rb = $(), (0, e.popTypeContext)(sb);
            } else
                rb = $();
        if (!rb)
            if (qb) {
                const sb = (0, e.pushTypeContext)(2);
                (0, k.parseStatement)(!0), (0, e.popTypeContext)(sb);
            } else
                (0, k.parseStatement)(!0);
    }

    function qb(a) {
        if (a && ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.bitShiftL)) && db(), (0, l.eatContextual)(f.ContextualKeyword._implements)) {
            h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._implements;
            const rb = (0, e.pushTypeContext)(1);
            S(), (0, e.popTypeContext)(rb);
        }
    }

    function rb() {
        u();
    }

    function sb() {
        u();
    }

    function tb() {
        const ub = (0, e.pushTypeContext)(0);
        (0, l.hasPrecedingLineBreak)() || (0, e.eat)(g.TokenType.bang), M(), (0, e.popTypeContext)(ub);
    }

    function ub() {
        (0, e.match)(g.TokenType.colon) && N();
    }

    function vb(a, b) {
        return h.isJSXEnabled ? function(a, b) {
            if (!(0, e.match)(g.TokenType.lessThan))
                return (0, i.baseParseMaybeAssign)(a, b);
            const wb = h.state.snapshot();
            let xb = (0, i.baseParseMaybeAssign)(a, b);
            if (!h.state.error)
                return xb;
            h.state.restoreFromSnapshot(wb);
            h.state.type = g.TokenType.typeParameterStart, v(), xb = (0, i.baseParseMaybeAssign)(a, b), xb || (0, l.unexpected)();
            return xb;
        }(a, b) : function(a, b) {
            if (!(0, e.match)(g.TokenType.lessThan))
                return (0, i.baseParseMaybeAssign)(a, b);
            const wb = h.state.snapshot();
            v();
            const xb = (0, i.baseParseMaybeAssign)(a, b);
            xb || (0, l.unexpected)();
            if (!h.state.error)
                return xb;
            h.state.restoreFromSnapshot(wb);
            return (0, i.baseParseMaybeAssign)(a, b);
        }(a, b);
    }

    function wb() {
        if ((0, e.match)(g.TokenType.colon)) {
            const xb = h.state.snapshot();
            L(g.TokenType.colon), (0, l.canInsertSemicolon)() && (0, l.unexpected)(), (0, e.match)(g.TokenType.arrow) || (0, l.unexpected)(), h.state.error && h.state.restoreFromSnapshot(xb);
        }
        return (0, e.eat)(g.TokenType.arrow);
    }

    function xb() {
        const yb = (0, e.pushTypeContext)(0);
        (0, e.eat)(g.TokenType.question), M(), (0, e.popTypeContext)(yb);
    }

    function yb() {
        ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.bitShiftL)) && db(), (0, k.baseParseMaybeDecoratorArguments)();
    }! function(a) {
        a[a.TSFunctionType = 0] = 'TSFunctionType';
        a[a.TSConstructorType = 1] = 'TSConstructorType';
        a[a.TSAbstractConstructorType = 2] = 'TSAbstractConstructorType';
    }(d || (d = {}));
}), c.register('upccV', function(a, t) {
    b(a.exports, 'parseSpread', function() {
        return l;
    }), b(a.exports, 'parseRest', function() {
        return m;
    }), b(a.exports, 'parseBindingAtom', function() {
        return q;
    }), b(a.exports, 'parseBindingIdentifier', function() {
        return n;
    }), b(a.exports, 'markPriorBindingIdentifier', function() {
        return p;
    }), b(a.exports, 'parseImportedIdentifier', function() {
        return o;
    }), b(a.exports, 'parseBindingList', function() {
        return r;
    }), b(a.exports, 'parseMaybeDefault', function() {
        return x;
    });
    var d = c('2MRde'),
        e = c('BULPy'),
        f = c('SI/fV'),
        g = c('C8Bhr'),
        h = c('KWaC1'),
        i = c('s9O7r'),
        j = c('Z4U7H'),
        k = c('OJMmh');

    function l() {
        (0, f.next)(), (0, j.parseMaybeAssign)(!1);
    }

    function m(a) {
        (0, f.next)(), q(a);
    }

    function n(a) {
        (0, j.parseIdentifier)(), p(a);
    }

    function o() {
        (0, j.parseIdentifier)(), i.state.tokens[i.state.tokens.length - 1].identifierRole = f.IdentifierRole.ImportDeclaration;
    }

    function p(a) {
        let q;
        q = 0 === i.state.scopeDepth ? f.IdentifierRole.TopLevelDeclaration : a ? f.IdentifierRole.BlockScopedDeclaration : f.IdentifierRole.FunctionScopedDeclaration, i.state.tokens[i.state.tokens.length - 1].identifierRole = q;
    }

    function q(a) {
        switch (i.state.type) {
            case h.TokenType._this: {
                const r = (0, f.pushTypeContext)(0);
                return (0, f.next)(), void(0, f.popTypeContext)(r);
            }
            case h.TokenType._yield:
            case h.TokenType.name:
                return i.state.type = h.TokenType.name, void n(a);
            case h.TokenType.bracketL:
                return (0, f.next)(), void r(h.TokenType.bracketR, a, !0);
            case h.TokenType.braceL:
                return void(0, j.parseObj)(!0, a);
            default:
                (0, k.unexpected)();
        }
    }

    function r(a, b, s = !1, t = !1, u = 0) {
        let v = !0,
            w = !1;
        const x = i.state.tokens.length;
        for (; !(0, f.eat)(a) && !i.state.error;)
            if (v ? v = !1 : ((0, k.expect)(h.TokenType.comma), i.state.tokens[i.state.tokens.length - 1].contextId = u, !w && i.state.tokens[x].isType && (i.state.tokens[i.state.tokens.length - 1].isType = !0, w = !0)), s && (0, f.match)(h.TokenType.comma));
            else {
                if ((0, f.eat)(a))
                    break;
                if ((0, f.match)(h.TokenType.ellipsis)) {
                    m(b), w(), (0, f.eat)(h.TokenType.comma), (0, k.expect)(a);
                    break;
                }
                v(t, b);
            }
    }

    function v(a, b) {
        a && (0, e.tsParseModifiers)([
            g.ContextualKeyword._public,
            g.ContextualKeyword._protected,
            g.ContextualKeyword._private,
            g.ContextualKeyword._readonly,
            g.ContextualKeyword._override
        ]), x(b), w(), x(b, !0);
    }

    function w() {
        i.isFlowEnabled ? (0, u.flowParseAssignableListItemTypes)() : i.isTypeScriptEnabled && (0, e.tsParseAssignableListItemTypes)();
    }

    function x(a, y = !1) {
        if (y || q(a), !(0, f.eat)(h.TokenType.eq))
            return;
        const z = i.state.tokens.length - 1;
        (0, j.parseMaybeAssign)(), i.state.tokens[z].rhsEndIndex = i.state.tokens.length;
    }
}), c.register('2CA+i', function(a, h) {
    b(a.exports, 'typedParseConditional', function() {
        return j;
    }), b(a.exports, 'typedParseParenItem', function() {
        return k;
    });
    var d = c('SI/fV'),
        e = c('KWaC1'),
        f = c('s9O7r'),
        g = c('Z4U7H'),
        h = c('2MRde'),
        i = c('BULPy');

    function j(a) {
        if ((0, d.match)(e.TokenType.question)) {
            const k = (0, d.lookaheadType)();
            if (k === e.TokenType.colon || k === e.TokenType.comma || k === e.TokenType.parenR)
                return;
        }
        (0, g.baseParseConditional)(a);
    }

    function k() {
        (0, d.eatTypeToken)(e.TokenType.question), (0, d.match)(e.TokenType.colon) && (f.isTypeScriptEnabled ? (0, i.tsParseTypeAnnotation)() : f.isFlowEnabled && (0, h.flowParseTypeAnnotation)());
    }
}), c.register('1PiEj', function(a, h) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('KWaC1'),
        e = c('HBop4');
    class f {
        __init() {
            this.resultCode = '';
        }
        __init2() {
            this.resultMappings = new Array(this.tokens.length);
        }
        __init3() {
            this.tokenIndex = 0;
        }
        snapshot() {
            return {
                resultCode: this.resultCode,
                tokenIndex: this.tokenIndex
            };
        }
        restoreToSnapshot(a) {
            this.resultCode = a.resultCode, this.tokenIndex = a.tokenIndex;
        }
        dangerouslyGetAndRemoveCodeSinceSnapshot(a) {
            const g = this.resultCode.slice(a.resultCode.length);
            return this.resultCode = a.resultCode, g;
        }
        reset() {
            this.resultCode = '', this.resultMappings = new Array(this.tokens.length), this.tokenIndex = 0;
        }
        matchesContextualAtIndex(a, b) {
            return this.matches1AtIndex(a, d.TokenType.name) && this.tokens[a].contextualKeyword === b;
        }
        identifierNameAtIndex(a) {
            return this.identifierNameForToken(this.tokens[a]);
        }
        identifierNameAtRelativeIndex(a) {
            return this.identifierNameForToken(this.tokenAtRelativeIndex(a));
        }
        identifierName() {
            return this.identifierNameForToken(this.currentToken());
        }
        identifierNameForToken(a) {
            return this.code.slice(a.start, a.end);
        }
        rawCodeForToken(a) {
            return this.code.slice(a.start, a.end);
        }
        stringValueAtIndex(a) {
            return this.stringValueForToken(this.tokens[a]);
        }
        stringValue() {
            return this.stringValueForToken(this.currentToken());
        }
        stringValueForToken(a) {
            return this.code.slice(a.start + 1, a.end - 1);
        }
        matches1AtIndex(a, b) {
            return this.tokens[a].type === b;
        }
        matches2AtIndex(a, b, c) {
            return this.tokens[a].type === b && this.tokens[a + 1].type === c;
        }
        matches3AtIndex(a, b, c, h) {
            return this.tokens[a].type === b && this.tokens[a + 1].type === c && this.tokens[a + 2].type === h;
        }
        matches1(a) {
            return this.tokens[this.tokenIndex].type === a;
        }
        matches2(a, b) {
            return this.tokens[this.tokenIndex].type === a && this.tokens[this.tokenIndex + 1].type === b;
        }
        matches3(a, b, c) {
            return this.tokens[this.tokenIndex].type === a && this.tokens[this.tokenIndex + 1].type === b && this.tokens[this.tokenIndex + 2].type === c;
        }
        matches4(a, b, c, h) {
            return this.tokens[this.tokenIndex].type === a && this.tokens[this.tokenIndex + 1].type === b && this.tokens[this.tokenIndex + 2].type === c && this.tokens[this.tokenIndex + 3].type === h;
        }
        matches5(a, b, c, h, d) {
            return this.tokens[this.tokenIndex].type === a && this.tokens[this.tokenIndex + 1].type === b && this.tokens[this.tokenIndex + 2].type === c && this.tokens[this.tokenIndex + 3].type === h && this.tokens[this.tokenIndex + 4].type === d;
        }
        matchesContextual(a) {
            return this.matchesContextualAtIndex(this.tokenIndex, a);
        }
        matchesContextIdAndLabel(a, b) {
            return this.matches1(a) && this.currentToken().contextId === b;
        }
        previousWhitespaceAndComments() {
            let g = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
            return this.isFlowEnabled && (g = g.replace(/@flow/g, '')), g;
        }
        replaceToken(a) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += a, this.appendTokenSuffix(), this.tokenIndex++;
        }
        replaceTokenTrimmingLeftWhitespace(a) {
            this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ''), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += a, this.appendTokenSuffix(), this.tokenIndex++;
        }
        removeInitialToken() {
            this.replaceToken('');
        }
        removeToken() {
            this.replaceTokenTrimmingLeftWhitespace('');
        }
        removeBalancedCode() {
            let g = 0;
            for (; !this.isAtEnd();) {
                if (this.matches1(d.TokenType.braceL))
                    g++;
                else if (this.matches1(d.TokenType.braceR)) {
                    if (0 === g)
                        return;
                    g--;
                }
                this.removeToken();
            }
        }
        copyExpectedToken(a) {
            if (this.tokens[this.tokenIndex].type !== a)
                throw new Error(`Expected token ${ a }`);
            this.copyToken();
        }
        copyToken() {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
        }
        copyTokenWithPrefix(a) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += a, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
        }
        appendTokenPrefix() {
            const g = this.currentToken();
            if ((g.numNullishCoalesceStarts || g.isOptionalChainStart) && (g.isAsyncOperation = (0, e.default)(this)), !this.disableESTransforms) {
                if (g.numNullishCoalesceStarts)
                    for (let h = 0; h < g.numNullishCoalesceStarts; h++)
                        g.isAsyncOperation ? (this.resultCode += 'await ', this.resultCode += this.helperManager.getHelperName('asyncNullishCoalesce')) : this.resultCode += this.helperManager.getHelperName('nullishCoalesce'), this.resultCode += '(';
                g.isOptionalChainStart && (g.isAsyncOperation && (this.resultCode += 'await '), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === d.TokenType._delete ? g.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName('asyncOptionalChainDelete') : this.resultCode += this.helperManager.getHelperName('optionalChainDelete') : g.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName('asyncOptionalChain') : this.resultCode += this.helperManager.getHelperName('optionalChain'), this.resultCode += '([');
            }
        }
        appendTokenSuffix() {
            const h = this.currentToken();
            if (h.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += '])'), h.numNullishCoalesceEnds && !this.disableESTransforms)
                for (let i = 0; i < h.numNullishCoalesceEnds; i++)
                    this.resultCode += '))';
        }
        appendCode(a) {
            this.resultCode += a;
        }
        currentToken() {
            return this.tokens[this.tokenIndex];
        }
        currentTokenCode() {
            const g = this.currentToken();
            return this.code.slice(g.start, g.end);
        }
        tokenAtRelativeIndex(a) {
            return this.tokens[this.tokenIndex + a];
        }
        currentIndex() {
            return this.tokenIndex;
        }
        nextToken() {
            if (this.tokenIndex === this.tokens.length)
                throw new Error('Unexpectedly reached end of input.');
            this.tokenIndex++;
        }
        previousToken() {
            this.tokenIndex--;
        }
        finish() {
            if (this.tokenIndex !== this.tokens.length)
                throw new Error('Tried to finish processing tokens before reaching the end.');
            return this.resultCode += this.previousWhitespaceAndComments(), {
                code: this.resultCode,
                mappings: this.resultMappings
            };
        }
        isAtEnd() {
            return this.tokenIndex === this.tokens.length;
        }
        constructor(a, b, c, h, d) {
            this.code = a, this.tokens = b, this.isFlowEnabled = c, this.disableESTransforms = h, this.helperManager = d, f.prototype.__init.call(this), f.prototype.__init2.call(this), f.prototype.__init3.call(this);
        }
    }
}), c.register('HBop4', function(a, h) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('C8Bhr');

    function e(a) {
        let f = a.currentIndex(),
            g = 0;
        const h = a.currentToken();
        do {
            const i = a.tokens[f];
            if (i.isOptionalChainStart && g++, i.isOptionalChainEnd && g--, g += i.numNullishCoalesceStarts, g -= i.numNullishCoalesceEnds, i.contextualKeyword === d.ContextualKeyword._await && null == i.identifierRole && i.scopeDepth === h.scopeDepth)
                return !0;
            f += 1;
        } while (g > 0 && f < a.tokens.length);
        return !1;
    }
}), c.register('pSiRT', function(a, y) {
    b(a.exports, 'default', function() {
        return r;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1'),
        f = c('wdki0'),
        g = c('/hTAr'),
        h = c('34bCw'),
        i = c('ZpHyj'),
        j = c('aD6qy'),
        k = c('vSOLj'),
        l = c('x+bLL'),
        m = c('opifT'),
        n = c('jfV8S'),
        o = c('5GDJY'),
        p = c('PrKxu'),
        q = c('AKsYj');
    class r {
        __init() {
            this.transformers = [];
        }
        __init2() {
            this.generatedVariables = [];
        }
        transform() {
            this.tokens.reset(), this.processBalancedCode();
            let s = this.isImportsTransformEnabled ? '"use strict";' : '';
            for (const t of this.transformers)
                s += t.getPrefixCode();
            s += this.helperManager.emitHelpers(), s += this.generatedVariables.map(s => ` var ${ s };`).join('');
            for (const u of this.transformers)
                s += u.getHoistedCode();
            let v = '';
            for (const w of this.transformers)
                v += w.getSuffixCode();
            const x = this.tokens.finish();
            let {
                code: y
            } = z;
            if (y.startsWith('#!')) {
                let A = y.indexOf('\n');
                return -1 === A && (A = y.length, y += '\n'), {
                    code: y.slice(0, A + 1) + w + y.slice(A + 1) + v,
                    mappings: this.shiftMappings(z.mappings, w.length)
                };
            }
            return {
                code: w + y + v,
                mappings: this.shiftMappings(z.mappings, w.length)
            };
        }
        processBalancedCode() {
            let A = 0,
                B = 0;
            for (; !this.tokens.isAtEnd();) {
                if (this.tokens.matches1(e.TokenType.braceL) || this.tokens.matches1(e.TokenType.dollarBraceL))
                    A++;
                else if (this.tokens.matches1(e.TokenType.braceR)) {
                    if (0 === A)
                        return;
                    A--;
                }
                if (this.tokens.matches1(e.TokenType.parenL))
                    B++;
                else if (this.tokens.matches1(e.TokenType.parenR)) {
                    if (0 === B)
                        return;
                    B--;
                }
                this.processToken();
            }
        }
        processToken() {
            if (this.tokens.matches1(e.TokenType._class))
                this.processClass();
            else {
                for (const C of this.transformers) {
                    if (C.process())
                        return;
                }
                this.tokens.copyToken();
            }
        }
        processNamedClass() {
            if (!this.tokens.matches2(e.TokenType._class, e.TokenType.name))
                throw new Error('Expected identifier for exported class name.');
            const C = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.processClass(), C;
        }
        processClass() {
            const D = (0, f.default)(this, this.tokens, this.nameManager, this.disableESTransforms),
                E = (D.headerInfo.isExpression || !D.headerInfo.className) && D.staticInitializerNames.length + D.instanceInitializerNames.length > 0;
            let F = D.headerInfo.className;
            E && (F = this.nameManager.claimFreeName('_class'), this.generatedVariables.push(F), this.tokens.appendCode(` (${ F } =`));
            const G = this.tokens.currentToken().contextId;
            if (null == G)
                throw new Error('Expected class to have a context ID.');
            for (this.tokens.copyExpectedToken(e.TokenType._class); !this.tokens.matchesContextIdAndLabel(e.TokenType.braceL, G);)
                this.processToken();
            this.processClassBody(D, F);
            const H = D.staticInitializerNames.map(D => `${ F }.${ D }()`);
            E ? this.tokens.appendCode(`, ${ H.map(D => `${ D }, `).join('') }${ F })`) : D.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${ H.map(D => `${ D };`).join(' ') }`);
        }
        processClassBody(a, b) {
            const {
                headerInfo: s,
                constructorInsertPos: t,
                constructorInitializerStatements: u,
                fields: v,
                instanceInitializerNames: w,
                rangesToRemove: x
            } = y;
            let z = 0,
                A = 0;
            const B = this.tokens.currentToken().contextId;
            if (null == B)
                throw new Error('Expected non-null context ID on class.');
            this.tokens.copyExpectedToken(e.TokenType.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode('__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}');
            const C = u.length + w.length > 0;
            if (null === t && C) {
                const D = this.makeConstructorInitCode(u, w, b);
                if (s.hasSuperclass) {
                    const E = this.nameManager.claimFreeName('args');
                    this.tokens.appendCode(`constructor(...${ E }) { super(...${ E }); ${ D }; }`);
                } else
                    this.tokens.appendCode(`constructor() { ${ D }; }`);
            }
            for (; !this.tokens.matchesContextIdAndLabel(e.TokenType.braceR, B);)
                if (z < v.length && this.tokens.currentIndex() === v[z].start) {
                    let D = !1;
                    for (this.tokens.matches1(e.TokenType.bracketL) ? this.tokens.copyTokenWithPrefix(`${ v[z].initializerName }() {this`) : this.tokens.matches1(e.TokenType.string) || this.tokens.matches1(e.TokenType.num) ? (this.tokens.copyTokenWithPrefix(`${ v[z].initializerName }() {this[`), D = !0) : this.tokens.copyTokenWithPrefix(`${ v[z].initializerName }() {this.`); this.tokens.currentIndex() < v[z].end;)
                        D && this.tokens.currentIndex() === v[z].equalsIndex && this.tokens.appendCode(']'), this.processToken();
                    this.tokens.appendCode('}'), z++;
                } else if (A < x.length && this.tokens.currentIndex() >= x[A].start) {
                for (this.tokens.currentIndex() < x[A].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < x[A].end;)
                    this.tokens.removeToken();
                A++;
            } else
                this.tokens.currentIndex() === t ? (this.tokens.copyToken(), C && this.tokens.appendCode(`;${ this.makeConstructorInitCode(u, w, b) };`), this.processToken()) : this.processToken();
            this.tokens.copyExpectedToken(e.TokenType.braceR);
        }
        makeConstructorInitCode(a, b, c) {
            return [
                ...a,
                ...b.map(a => `${ c }.prototype.${ a }.call(this)`)
            ].join(';');
        }
        processPossibleArrowParamEnd() {
            if (this.tokens.matches2(e.TokenType.parenR, e.TokenType.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
                let s = this.tokens.currentIndex() + 1;
                for (; this.tokens.tokens[s].isType;)
                    s++;
                if (this.tokens.matches1AtIndex(s, e.TokenType.arrow)) {
                    for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < s;)
                        this.tokens.removeToken();
                    return this.tokens.replaceTokenTrimmingLeftWhitespace(') =>'), !0;
                }
            }
            return !1;
        }
        processPossibleAsyncArrowWithTypeParams() {
            if (!this.tokens.matchesContextual(d.ContextualKeyword._async) && !this.tokens.matches1(e.TokenType._async))
                return !1;
            const s = this.tokens.tokenAtRelativeIndex(1);
            if (s.type !== e.TokenType.lessThan || !s.isType)
                return !1;
            let t = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[t].isType;)
                t++;
            if (this.tokens.matches1AtIndex(t, e.TokenType.parenL)) {
                for (this.tokens.replaceToken('async ('), this.tokens.removeInitialToken(); this.tokens.currentIndex() < t;)
                    this.tokens.removeToken();
                return this.tokens.removeToken(), this.processBalancedCode(), this.processToken(), !0;
            }
            return !1;
        }
        processPossibleTypeRange() {
            if (this.tokens.currentToken().isType) {
                for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;)
                    this.tokens.removeToken();
                return !0;
            }
            return !1;
        }
        shiftMappings(a, b) {
            for (let s = 0; s < a.length; s++) {
                const t = a[s];
                void 0 !== t && (a[s] = t + b);
            }
            return a;
        }
        constructor(a, b, c, k) {
            r.prototype.__init.call(this), r.prototype.__init2.call(this), this.nameManager = a.nameManager, this.helperManager = a.helperManager;
            const {
                tokenProcessor: s,
                importProcessor: t
            } = u;
            this.tokens = s, this.isImportsTransformEnabled = b.includes('imports'), this.isReactHotLoaderTransformEnabled = b.includes('react-hot-loader'), this.disableESTransforms = Boolean(k.disableESTransforms), k.disableESTransforms || (this.transformers.push(new(0, n.default)(s, this.nameManager)), this.transformers.push(new(0, l.default)(s)), this.transformers.push(new(0, m.default)(s, this.nameManager))), b.includes('jsx') && ('preserve' !== k.jsxRuntime && this.transformers.push(new(0, k.default)(this, s, t, this.nameManager, k)), this.transformers.push(new(0, o.default)(this, s, t, k)));
            let v = null;
            if (b.includes('react-hot-loader')) {
                if (!k.filePath)
                    throw new Error('filePath is required when using the react-hot-loader transform.');
                v = new(0, p.default)(s, k.filePath), this.transformers.push(v);
            }
            if (b.includes('imports')) {
                if (null === t)
                    throw new Error('Expected non-null importProcessor with imports transform enabled.');
                this.transformers.push(new(0, g.default)(this, s, t, this.nameManager, this.helperManager, v, c, Boolean(k.enableLegacyTypeScriptModuleInterop), b.includes('typescript'), b.includes('flow'), Boolean(k.preserveDynamicImport), Boolean(k.keepUnusedImports)));
            } else
                this.transformers.push(new(0, h.default)(s, this.nameManager, this.helperManager, v, b.includes('typescript'), b.includes('flow'), Boolean(k.keepUnusedImports), k));
            b.includes('flow') && this.transformers.push(new(0, i.default)(this, s, b.includes('imports'))), b.includes('typescript') && this.transformers.push(new(0, q.default)(this, s, b.includes('imports'))), b.includes('jest') && this.transformers.push(new(0, j.default)(this, s, this.nameManager, t));
        }
    }
}), c.register('wdki0', function(a, k) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1');

    function f(a, b, c, k) {
        const g = b.snapshot(),
            h = function(a) {
                const i = a.currentToken(),
                    j = i.contextId;
                if (null == j)
                    throw new Error('Expected context ID on class token.');
                const k = i.isExpression;
                if (null == k)
                    throw new Error('Expected isExpression on class token.');
                let l = null,
                    m = !1;
                a.nextToken(), a.matches1(e.TokenType.name) && (l = a.identifierName());
                for (; !a.matchesContextIdAndLabel(e.TokenType.braceL, j);)
                    a.matches1(e.TokenType._extends) && !a.currentToken().isType && (m = !0), a.nextToken();
                return {
                    isExpression: k,
                    className: l,
                    hasSuperclass: m
                };
            }(b);
        let i = [];
        const j = [],
            k = [];
        let l = null;
        const m = [],
            n = [],
            o = b.currentToken().contextId;
        if (null == o)
            throw new Error('Expected non-null class context ID on class open-brace.');
        for (b.nextToken(); !b.matchesContextIdAndLabel(e.TokenType.braceR, o);)
            if (b.matchesContextual(d.ContextualKeyword._constructor) && !b.currentToken().isType)
                ({
                    constructorInitializerStatements: p,
                    constructorInsertPos: q
                } = h(b));
            else if (b.matches1(e.TokenType.semi))
            w || n.push({
                start: b.currentIndex(),
                end: b.currentIndex() + 1
            }), b.nextToken();
        else if (b.currentToken().isType)
            b.nextToken();
        else {
            const r = b.currentIndex();
            let s = !1,
                t = !1,
                u = !1;
            for (; i(b.currentToken());)
                b.matches1(e.TokenType._static) && (s = !0), b.matches1(e.TokenType.hash) && (t = !0), (b.matches1(e.TokenType._declare) || b.matches1(e.TokenType._abstract)) && (u = !0), b.nextToken();
            if (s && b.matches1(e.TokenType.braceL)) {
                g(b, o);
                continue;
            }
            if (t) {
                g(b, o);
                continue;
            }
            if (b.matchesContextual(d.ContextualKeyword._constructor) && !b.currentToken().isType) {
                ({
                    constructorInitializerStatements: v,
                    constructorInsertPos: w
                } = h(b));
                continue;
            }
            const v = b.currentIndex();
            if (j(b), b.matches1(e.TokenType.lessThan) || b.matches1(e.TokenType.parenL)) {
                g(b, o);
                continue;
            }
            for (; b.currentToken().isType;)
                b.nextToken();
            if (b.matches1(e.TokenType.eq)) {
                const w = b.currentIndex(),
                    x = b.currentToken().rhsEndIndex;
                if (null == x)
                    throw new Error('Expected rhsEndIndex on class field assignment.');
                for (b.nextToken(); b.currentIndex() < x;)
                    a.processToken();
                let y;
                s ? (y = c.claimFreeName('__initStatic'), k.push(y)) : (y = c.claimFreeName('__init'), j.push(y)), m.push({
                    initializerName: y,
                    equalsIndex: w,
                    start: v,
                    end: b.currentIndex()
                });
            } else
                l && !u || n.push({
                    start: r,
                    end: b.currentIndex()
                });
        }
        return b.restoreToSnapshot(g), l ? {
            headerInfo: h,
            constructorInitializerStatements: i,
            instanceInitializerNames: [],
            staticInitializerNames: [],
            constructorInsertPos: l,
            fields: [],
            rangesToRemove: n
        } : {
            headerInfo: h,
            constructorInitializerStatements: i,
            instanceInitializerNames: j,
            staticInitializerNames: k,
            constructorInsertPos: l,
            fields: m,
            rangesToRemove: n
        };
    }

    function g(a, b) {
        for (a.nextToken(); a.currentToken().contextId !== b;)
            a.nextToken();
        for (; i(a.tokenAtRelativeIndex(-1));)
            a.previousToken();
    }

    function h(a) {
        const i = [];
        a.nextToken();
        const j = a.currentToken().contextId;
        if (null == j)
            throw new Error('Expected context ID on open-paren starting constructor params.');
        for (; !a.matchesContextIdAndLabel(e.TokenType.parenR, j);)
            if (a.currentToken().contextId === j) {
                if (a.nextToken(), i(a.currentToken())) {
                    for (a.nextToken(); i(a.currentToken());)
                        a.nextToken();
                    const k = a.currentToken();
                    if (k.type !== e.TokenType.name)
                        throw new Error('Expected identifier after access modifiers in constructor arg.');
                    const l = a.identifierNameForToken(k);
                    i.push(`this.${ l } = ${ l }`);
                }
            } else
                a.nextToken();
        for (a.nextToken(); a.currentToken().isType;)
            a.nextToken();
        let k = a.currentIndex(),
            l = !1;
        for (; !a.matchesContextIdAndLabel(e.TokenType.braceR, j);) {
            if (!l && a.matches2(e.TokenType._super, e.TokenType.parenL)) {
                a.nextToken();
                const m = a.currentToken().contextId;
                if (null == m)
                    throw new Error('Expected a context ID on the super call');
                for (; !a.matchesContextIdAndLabel(e.TokenType.parenR, m);)
                    a.nextToken();
                k = a.currentIndex(), l = !0;
            }
            a.nextToken();
        }
        return a.nextToken(), {
            constructorInitializerStatements: i,
            constructorInsertPos: k
        };
    }

    function i(a) {
        return [
            e.TokenType._async,
            e.TokenType._get,
            e.TokenType._set,
            e.TokenType.plus,
            e.TokenType.minus,
            e.TokenType._readonly,
            e.TokenType._static,
            e.TokenType._public,
            e.TokenType._private,
            e.TokenType._protected,
            e.TokenType._override,
            e.TokenType._abstract,
            e.TokenType.star,
            e.TokenType._declare,
            e.TokenType.hash
        ].includes(a.type);
    }

    function j(a) {
        if (a.matches1(e.TokenType.bracketL)) {
            const k = a.currentToken().contextId;
            if (null == k)
                throw new Error('Expected class context ID on computed name open bracket.');
            for (; !a.matchesContextIdAndLabel(e.TokenType.bracketR, k);)
                a.nextToken();
            a.nextToken();
        } else
            a.nextToken();
    }
}), c.register('/hTAr', function(a, G) {
    b(a.exports, 'default', function() {
        return n;
    });
    var d = c('SI/fV'),
        e = c('C8Bhr'),
        f = c('KWaC1'),
        g = c('jkN7p'),
        h = c('TZf1A'),
        i = c('tJSN/'),
        j = c('HzxVV'),
        k = c('RptKf'),
        l = c('mp4XS'),
        m = c('/b6LO');
    class n extends m.default {
        __init() {
            this.hadExport = !1;
        }
        __init2() {
            this.hadNamedExport = !1;
        }
        __init3() {
            this.hadDefaultExport = !1;
        }
        getPrefixCode() {
            let o = '';
            return this.hadExport && (o += 'Object.defineProperty(exports, "__esModule", {value: true});'), o;
        }
        getSuffixCode() {
            return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? '\nmodule.exports = exports.default;\n' : '';
        }
        process() {
            return this.tokens.matches3(f.TokenType._import, f.TokenType.name, f.TokenType.eq) ? this.processImportEquals() : this.tokens.matches1(f.TokenType._import) ? (this.processImport(), !0) : this.tokens.matches2(f.TokenType._export, f.TokenType.eq) ? (this.tokens.replaceToken('module.exports'), !0) : this.tokens.matches1(f.TokenType._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : !(!this.tokens.matches2(f.TokenType.name, f.TokenType.postIncDec) || !this.processPostIncDec()) || (this.tokens.matches1(f.TokenType.name) || this.tokens.matches1(f.TokenType.jsxName) ? this.processIdentifier() : this.tokens.matches1(f.TokenType.eq) ? this.processAssignment() : this.tokens.matches1(f.TokenType.assign) ? this.processComplexAssignment() : !!this.tokens.matches1(f.TokenType.preIncDec) && this.processPreIncDec());
        }
        processImportEquals() {
            const p = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.importProcessor.shouldAutomaticallyElideImportedName(p) ? (0, g.default)(this.tokens) : this.tokens.replaceToken('const'), !0;
        }
        processImport() {
            if (this.tokens.matches2(f.TokenType._import, f.TokenType.parenL)) {
                if (this.preserveDynamicImport)
                    return void this.tokens.copyToken();
                const q = this.enableLegacyTypeScriptModuleInterop ? '' : `${ this.helperManager.getHelperName('interopRequireWildcard') }(`;
                this.tokens.replaceToken(`Promise.resolve().then(() => ${ q }require`);
                const r = this.tokens.currentToken().contextId;
                if (null == r)
                    throw new Error('Expected context ID on dynamic import invocation.');
                for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(f.TokenType.parenR, r);)
                    this.rootTransformer.processToken();
                return void this.tokens.replaceToken(q ? ')))' : '))');
            }
            if (this.removeImportAndDetectIfShouldElide())
                this.tokens.removeToken();
            else {
                const s = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(s)), this.tokens.appendCode(this.importProcessor.claimImportCode(s));
            }
            (0, k.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(f.TokenType.semi) && this.tokens.removeToken();
        }
        removeImportAndDetectIfShouldElide() {
            if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(e.ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, f.TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, e.ContextualKeyword._from))
                return this.removeRemainingImport(), !0;
            if (this.tokens.matches1(f.TokenType.name) || this.tokens.matches1(f.TokenType.star))
                return this.removeRemainingImport(), !1;
            if (this.tokens.matches1(f.TokenType.string))
                return !1;
            let q = !1,
                r = !1;
            for (; !this.tokens.matches1(f.TokenType.string);)
                (!q && this.tokens.matches1(f.TokenType.braceL) || this.tokens.matches1(f.TokenType.comma)) && (this.tokens.removeToken(), this.tokens.matches1(f.TokenType.braceR) || (r = !0), (this.tokens.matches2(f.TokenType.name, f.TokenType.comma) || this.tokens.matches2(f.TokenType.name, f.TokenType.braceR) || this.tokens.matches4(f.TokenType.name, f.TokenType.name, f.TokenType.name, f.TokenType.comma) || this.tokens.matches4(f.TokenType.name, f.TokenType.name, f.TokenType.name, f.TokenType.braceR)) && (q = !0)), this.tokens.removeToken();
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !q : !!this.isFlowTransformEnabled && (r && !q));
        }
        removeRemainingImport() {
            for (; !this.tokens.matches1(f.TokenType.string);)
                this.tokens.removeToken();
        }
        processIdentifier() {
            const s = this.tokens.currentToken();
            if (s.shadowsGlobal)
                return !1;
            if (s.identifierRole === d.IdentifierRole.ObjectShorthand)
                return this.processObjectShorthand();
            if (s.identifierRole !== d.IdentifierRole.Access)
                return !1;
            const t = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(s));
            if (!t)
                return !1;
            let u = this.tokens.currentIndex() + 1;
            for (; u < this.tokens.tokens.length && this.tokens.tokens[u].type === f.TokenType.parenR;)
                u++;
            return this.tokens.tokens[u].type === f.TokenType.parenL ? this.tokens.tokenAtRelativeIndex(1).type === f.TokenType.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== f.TokenType._new ? (this.tokens.replaceToken(`${ t }.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR)) : this.tokens.replaceToken(`(0, ${ t })`) : this.tokens.replaceToken(t), !0;
        }
        processObjectShorthand() {
            const v = this.tokens.identifierName(),
                w = this.importProcessor.getIdentifierReplacement(v);
            return !!w && (this.tokens.replaceToken(`${ v }: ${ w }`), !0);
        }
        processExport() {
            if (this.tokens.matches2(f.TokenType._export, f.TokenType._enum) || this.tokens.matches3(f.TokenType._export, f.TokenType._const, f.TokenType._enum))
                return this.hadNamedExport = !0, !1;
            if (this.tokens.matches2(f.TokenType._export, f.TokenType._default))
                return this.tokens.matches3(f.TokenType._export, f.TokenType._default, f.TokenType._enum) ? (this.hadDefaultExport = !0, !1) : (this.processExportDefault(), !0);
            if (this.tokens.matches2(f.TokenType._export, f.TokenType.braceL))
                return this.processExportBindings(), !0;
            if (this.tokens.matches2(f.TokenType._export, f.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, e.ContextualKeyword._type)) {
                if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(f.TokenType.braceL)) {
                    for (; !this.tokens.matches1(f.TokenType.braceR);)
                        this.tokens.removeToken();
                    this.tokens.removeToken();
                } else
                    this.tokens.removeToken(), this.tokens.matches1(f.TokenType._as) && (this.tokens.removeToken(), this.tokens.removeToken());
                return this.tokens.matchesContextual(e.ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, f.TokenType.string) && (this.tokens.removeToken(), this.tokens.removeToken(), (0, k.removeMaybeImportAttributes)(this.tokens)), !0;
            }
            if (this.hadNamedExport = !0, this.tokens.matches2(f.TokenType._export, f.TokenType._var) || this.tokens.matches2(f.TokenType._export, f.TokenType._let) || this.tokens.matches2(f.TokenType._export, f.TokenType._const))
                return this.processExportVar(), !0;
            if (this.tokens.matches2(f.TokenType._export, f.TokenType._function) || this.tokens.matches3(f.TokenType._export, f.TokenType.name, f.TokenType._function))
                return this.processExportFunction(), !0;
            if (this.tokens.matches2(f.TokenType._export, f.TokenType._class) || this.tokens.matches3(f.TokenType._export, f.TokenType._abstract, f.TokenType._class) || this.tokens.matches2(f.TokenType._export, f.TokenType.at))
                return this.processExportClass(), !0;
            if (this.tokens.matches2(f.TokenType._export, f.TokenType.star))
                return this.processExportStar(), !0;
            throw new Error('Unrecognized export syntax.');
        }
        processAssignment() {
            const x = this.tokens.currentIndex(),
                y = this.tokens.tokens[x - 1];
            if (y.isType || y.type !== f.TokenType.name)
                return !1;
            if (y.shadowsGlobal)
                return !1;
            if (x >= 2 && this.tokens.matches1AtIndex(x - 2, f.TokenType.dot))
                return !1;
            if (x >= 2 && [
                    f.TokenType._var,
                    f.TokenType._let,
                    f.TokenType._const
                ].includes(this.tokens.tokens[x - 2].type))
                return !1;
            const z = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(y));
            return !!z && (this.tokens.copyToken(), this.tokens.appendCode(` ${ z } =`), !0);
        }
        processComplexAssignment() {
            const A = this.tokens.currentIndex(),
                B = this.tokens.tokens[A - 1];
            if (B.type !== f.TokenType.name)
                return !1;
            if (B.shadowsGlobal)
                return !1;
            if (A >= 2 && this.tokens.matches1AtIndex(A - 2, f.TokenType.dot))
                return !1;
            const C = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(B));
            return !!C && (this.tokens.appendCode(` = ${ C }`), this.tokens.copyToken(), !0);
        }
        processPreIncDec() {
            const D = this.tokens.currentIndex(),
                E = this.tokens.tokens[D + 1];
            if (E.type !== f.TokenType.name)
                return !1;
            if (E.shadowsGlobal)
                return !1;
            if (D + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(D + 2, f.TokenType.dot) || this.tokens.matches1AtIndex(D + 2, f.TokenType.bracketL) || this.tokens.matches1AtIndex(D + 2, f.TokenType.parenL)))
                return !1;
            const F = this.tokens.identifierNameForToken(E),
                G = this.importProcessor.resolveExportBinding(F);
            return !!G && (this.tokens.appendCode(`${ G } = `), this.tokens.copyToken(), !0);
        }
        processPostIncDec() {
            const H = this.tokens.currentIndex(),
                I = this.tokens.tokens[H],
                J = this.tokens.tokens[H + 1];
            if (I.type !== f.TokenType.name)
                return !1;
            if (I.shadowsGlobal)
                return !1;
            if (H >= 1 && this.tokens.matches1AtIndex(H - 1, f.TokenType.dot))
                return !1;
            const K = this.tokens.identifierNameForToken(I),
                L = this.importProcessor.resolveExportBinding(K);
            if (!L)
                return !1;
            const M = this.tokens.rawCodeForToken(J),
                N = this.importProcessor.getIdentifierReplacement(K) || K;
            if ('++' === M)
                this.tokens.replaceToken(`(${ N } = ${ L } = ${ N } + 1, ${ N } - 1)`);
            else {
                if ('--' !== M)
                    throw new Error(`Unexpected operator: ${ M }`);
                this.tokens.replaceToken(`(${ N } = ${ L } = ${ N } - 1, ${ N } + 1)`);
            }
            return this.tokens.removeToken(), !0;
        }
        processExportDefault() {
            let O = !0;
            if (this.tokens.matches4(f.TokenType._export, f.TokenType._default, f.TokenType._function, f.TokenType.name) || this.tokens.matches5(f.TokenType._export, f.TokenType._default, f.TokenType.name, f.TokenType._function, f.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, M.ContextualKeyword._async)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken();
                const P = this.processNamedFunction();
                this.tokens.appendCode(` exports.default = ${ P };`);
            } else if (this.tokens.matches4(f.TokenType._export, f.TokenType._default, f.TokenType._class, f.TokenType.name) || this.tokens.matches5(f.TokenType._export, f.TokenType._default, f.TokenType._abstract, f.TokenType._class, f.TokenType.name) || this.tokens.matches3(f.TokenType._export, f.TokenType._default, f.TokenType.at)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(f.TokenType._abstract) && this.tokens.removeToken();
                const Q = this.rootTransformer.processNamedClass();
                this.tokens.appendCode(` exports.default = ${ Q };`);
            } else if ((0, l.default)(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo))
                Q = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
            else if (this.reactHotLoaderTransformer) {
                const R = this.nameManager.claimFreeName('_default');
                this.tokens.replaceToken(`let ${ R }; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${ R } =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(R);
            } else
                this.tokens.replaceToken('exports.'), this.tokens.copyToken(), this.tokens.appendCode(' =');
            O && (this.hadDefaultExport = !0);
        }
        copyDecorators() {
            for (; this.tokens.matches1(f.TokenType.at);)
                if (this.tokens.copyToken(), this.tokens.matches1(f.TokenType.parenL))
                    this.tokens.copyExpectedToken(f.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR);
                else {
                    for (this.tokens.copyExpectedToken(f.TokenType.name); this.tokens.matches1(f.TokenType.dot);)
                        this.tokens.copyExpectedToken(f.TokenType.dot), this.tokens.copyExpectedToken(f.TokenType.name);
                    this.tokens.matches1(f.TokenType.parenL) && (this.tokens.copyExpectedToken(f.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR));
                }
        }
        processExportVar() {
            this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar();
        }
        isSimpleExportVar() {
            let P = this.tokens.currentIndex();
            if (P++, P++, !this.tokens.matches1AtIndex(P, f.TokenType.name))
                return !1;
            for (P++; P < this.tokens.tokens.length && this.tokens.tokens[P].isType;)
                P++;
            return !!this.tokens.matches1AtIndex(P, f.TokenType.eq);
        }
        processSimpleExportVar() {
            this.tokens.removeInitialToken(), this.tokens.copyToken();
            const Q = this.tokens.identifierName();
            for (; !this.tokens.matches1(f.TokenType.eq);)
                this.rootTransformer.processToken();
            const R = this.tokens.currentToken().rhsEndIndex;
            if (null == R)
                throw new Error('Expected = token with an end index.');
            for (; this.tokens.currentIndex() < R;)
                this.rootTransformer.processToken();
            this.tokens.appendCode(`; exports.${ Q } = ${ Q }`);
        }
        processComplexExportVar() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const S = this.tokens.matches1(f.TokenType.braceL);
            S && this.tokens.appendCode('(');
            let T = 0;
            for (;;)
                if (this.tokens.matches1(f.TokenType.braceL) || this.tokens.matches1(f.TokenType.dollarBraceL) || this.tokens.matches1(f.TokenType.bracketL))
                    T++, this.tokens.copyToken();
                else if (this.tokens.matches1(f.TokenType.braceR) || this.tokens.matches1(f.TokenType.bracketR))
                T--, this.tokens.copyToken();
            else {
                if (0 === T && !this.tokens.matches1(f.TokenType.name) && !this.tokens.currentToken().isType)
                    break;
                if (this.tokens.matches1(f.TokenType.eq)) {
                    const U = this.tokens.currentToken().rhsEndIndex;
                    if (null == U)
                        throw new Error('Expected = token with an end index.');
                    for (; this.tokens.currentIndex() < U;)
                        this.rootTransformer.processToken();
                } else {
                    const V = this.tokens.currentToken();
                    if ((0, L.isDeclaration)(V)) {
                        const W = this.tokens.identifierName();
                        let X = this.importProcessor.getIdentifierReplacement(W);
                        if (null === X)
                            throw new Error(`Expected a replacement for ${ W } in \`export var\` syntax.`);
                        (0, L.isObjectShorthandDeclaration)(V) && (X = `${ W }: ${ X }`), this.tokens.replaceToken(X);
                    } else
                        this.rootTransformer.processToken();
                }
            }
            if (S) {
                const U = this.tokens.currentToken().rhsEndIndex;
                if (null == U)
                    throw new Error('Expected = token with an end index.');
                for (; this.tokens.currentIndex() < U;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(')');
            }
        }
        processExportFunction() {
            this.tokens.replaceToken('');
            const U = this.processNamedFunction();
            this.tokens.appendCode(` exports.${ U } = ${ U };`);
        }
        processNamedFunction() {
            if (this.tokens.matches1(f.TokenType._function))
                this.tokens.copyToken();
            else if (this.tokens.matches2(f.TokenType.name, f.TokenType._function)) {
                if (!this.tokens.matchesContextual(M.ContextualKeyword._async))
                    throw new Error('Expected async keyword in function export.');
                this.tokens.copyToken(), this.tokens.copyToken();
            }
            if (this.tokens.matches1(f.TokenType.star) && this.tokens.copyToken(), !this.tokens.matches1(f.TokenType.name))
                throw new Error('Expected identifier for exported function name.');
            const V = this.tokens.identifierName();
            if (this.tokens.copyToken(), this.tokens.currentToken().isType)
                for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;)
                    this.tokens.removeToken();
            return this.tokens.copyExpectedToken(f.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(f.TokenType.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.braceR), V;
        }
        processExportClass() {
            this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(f.TokenType._abstract) && this.tokens.removeToken();
            const W = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.${ W } = ${ W };`);
        }
        processExportBindings() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const X = (0, j.default)(this.tokens),
                Y = [];
            for (;;) {
                if (this.tokens.matches1(f.TokenType.braceR)) {
                    this.tokens.removeToken();
                    break;
                }
                const Z = (0, i.default)(this.tokens);
                for (; this.tokens.currentIndex() < Z.endIndex;)
                    this.tokens.removeToken();
                if (!(Z.isType || !X && this.shouldElideExportedIdentifier(Z.leftName))) {
                    const $ = Z.rightName;
                    'default' === $ ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
                    const _ = Z.leftName,
                        ab = this.importProcessor.getIdentifierReplacement(_);
                    Y.push(`exports.${ $ } = ${ ab || _ };`);
                }
                if (this.tokens.matches1(f.TokenType.braceR)) {
                    this.tokens.removeToken();
                    break;
                }
                if (this.tokens.matches2(f.TokenType.comma, f.TokenType.braceR)) {
                    this.tokens.removeToken(), this.tokens.removeToken();
                    break;
                }
                if (!this.tokens.matches1(f.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(this.tokens.currentToken()) }`);
                this.tokens.removeToken();
            }
            if (this.tokens.matchesContextual(M.ContextualKeyword._from)) {
                this.tokens.removeToken();
                const $ = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode($)), (0, k.removeMaybeImportAttributes)(this.tokens);
            } else
                this.tokens.appendCode(Y.join(' '));
            this.tokens.matches1(f.TokenType.semi) && this.tokens.removeToken();
        }
        processExportStar() {
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(f.TokenType.string);)
                this.tokens.removeToken();
            const Z = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(Z)), (0, k.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(f.TokenType.semi) && this.tokens.removeToken();
        }
        shouldElideExportedIdentifier(a) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(a);
        }
        constructor(a, b, c, j, d, e, f, g, i, j, k, l) {
            super(), this.rootTransformer = a, this.tokens = b, this.importProcessor = c, this.nameManager = j, this.helperManager = d, this.reactHotLoaderTransformer = e, this.enableLegacyBabel5ModuleInterop = f, this.enableLegacyTypeScriptModuleInterop = g, this.isTypeScriptTransformEnabled = i, this.isFlowTransformEnabled = j, this.preserveDynamicImport = k, this.keepUnusedImports = l, n.prototype.__init.call(this), n.prototype.__init2.call(this), n.prototype.__init3.call(this), this.declarationInfo = i ? (0, h.default)(b) : h.EMPTY_DECLARATION_INFO;
        }
    }
}), c.register('jkN7p', function(a, j) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('KWaC1');

    function e(a) {
        if (a.removeInitialToken(), a.removeToken(), a.removeToken(), a.removeToken(), a.matches1(d.TokenType.parenL))
            a.removeToken(), a.removeToken(), a.removeToken();
        else
            for (; a.matches1(d.TokenType.dot);)
                a.removeToken(), a.removeToken();
    }
}), c.register('TZf1A', function(a, j) {
    b(a.exports, 'EMPTY_DECLARATION_INFO', function() {
        return f;
    }), b(a.exports, 'default', function() {
        return g;
    });
    var d = c('SI/fV'),
        e = c('KWaC1');
    const f = {
        typeDeclarations: new Set(),
        valueDeclarations: new Set()
    };

    function g(a) {
        const h = new Set(),
            i = new Set();
        for (let j = 0; j < a.tokens.length; j++) {
            const k = a.tokens[j];
            k.type === e.TokenType.name && (0, d.isTopLevelDeclaration)(k) && (k.isType ? h.add(a.identifierNameForToken(k)) : i.add(a.identifierNameForToken(k)));
        }
        return {
            typeDeclarations: h,
            valueDeclarations: i
        };
    }
}), c.register('HzxVV', function(a, k) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1');

    function f(a) {
        let g = a.currentIndex();
        for (; !a.matches1AtIndex(g, e.TokenType.braceR);)
            g++;
        return a.matchesContextualAtIndex(g + 1, d.ContextualKeyword._from) && a.matches1AtIndex(g + 2, e.TokenType.string);
    }
}), c.register('RptKf', function(a, k) {
    b(a.exports, 'removeMaybeImportAttributes', function() {
        return f;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1');

    function f(a) {
        (a.matches2(e.TokenType._with, e.TokenType.braceL) || a.matches2(e.TokenType.name, e.TokenType.braceL) && a.matchesContextual(d.ContextualKeyword._assert)) && (a.removeToken(), a.removeToken(), a.removeBalancedCode(), a.removeToken());
    }
}), c.register('mp4XS', function(a, k) {
    b(a.exports, 'default', function() {
        return e;
    });
    var d = c('KWaC1');

    function e(a, b, c, k) {
        if (!a || b)
            return !1;
        const f = c.currentToken();
        if (null == f.rhsEndIndex)
            throw new Error('Expected non-null rhsEndIndex on export token.');
        const g = f.rhsEndIndex - c.currentIndex();
        if (3 !== g && (4 !== g || !c.matches1AtIndex(f.rhsEndIndex - 1, d.TokenType.semi)))
            return !1;
        const h = c.tokenAtRelativeIndex(2);
        if (h.type !== d.TokenType.name)
            return !1;
        const i = c.identifierNameForToken(h);
        return k.typeDeclarations.has(i) && !k.valueDeclarations.has(i);
    }
}), c.register('34bCw', function(a, k) {
    b(a.exports, 'default', function() {
        return n;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1'),
        f = c('jkN7p'),
        g = c('TZf1A'),
        h = c('tJSN/'),
        i = c('CnyDH'),
        j = c('HzxVV'),
        k = c('RptKf'),
        l = c('mp4XS'),
        m = c('/b6LO');
    class n extends m.default {
        process() {
            if (this.tokens.matches3(e.TokenType._import, e.TokenType.name, e.TokenType.eq))
                return this.processImportEquals();
            if (this.tokens.matches4(e.TokenType._import, e.TokenType.name, e.TokenType.name, e.TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, d.ContextualKeyword._type)) {
                this.tokens.removeInitialToken();
                for (let o = 0; o < 7; o++)
                    this.tokens.removeToken();
                return !0;
            }
            if (this.tokens.matches2(e.TokenType._export, e.TokenType.eq))
                return this.tokens.replaceToken('module.exports'), !0;
            if (this.tokens.matches5(e.TokenType._export, e.TokenType._import, e.TokenType.name, e.TokenType.name, e.TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, d.ContextualKeyword._type)) {
                this.tokens.removeInitialToken();
                for (let o = 0; o < 8; o++)
                    this.tokens.removeToken();
                return !0;
            }
            if (this.tokens.matches1(e.TokenType._import))
                return this.processImport();
            if (this.tokens.matches2(e.TokenType._export, e.TokenType._default))
                return this.processExportDefault();
            if (this.tokens.matches2(e.TokenType._export, e.TokenType.braceL))
                return this.processNamedExports();
            if (this.tokens.matches2(e.TokenType._export, e.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, d.ContextualKeyword._type)) {
                if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(e.TokenType.braceL)) {
                    for (; !this.tokens.matches1(e.TokenType.braceR);)
                        this.tokens.removeToken();
                    this.tokens.removeToken();
                } else
                    this.tokens.removeToken(), this.tokens.matches1(e.TokenType._as) && (this.tokens.removeToken(), this.tokens.removeToken());
                return this.tokens.matchesContextual(d.ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, e.TokenType.string) && (this.tokens.removeToken(), this.tokens.removeToken(), (0, k.removeMaybeImportAttributes)(this.tokens)), !0;
            }
            return !1;
        }
        processImportEquals() {
            const o = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.shouldAutomaticallyElideImportedName(o) ? (0, f.default)(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken('const'), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName('require'))) : this.tokens.replaceToken('const'), !0;
        }
        processImport() {
            if (this.tokens.matches2(e.TokenType._import, e.TokenType.parenL))
                return !1;
            const p = this.tokens.snapshot();
            if (this.removeImportTypeBindings()) {
                for (this.tokens.restoreToSnapshot(p); !this.tokens.matches1(e.TokenType.string);)
                    this.tokens.removeToken();
                this.tokens.removeToken(), (0, k.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(e.TokenType.semi) && this.tokens.removeToken();
            }
            return !0;
        }
        removeImportTypeBindings() {
            if (this.tokens.copyExpectedToken(e.TokenType._import), this.tokens.matchesContextual(d.ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, e.TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, d.ContextualKeyword._from))
                return !0;
            if (this.tokens.matches1(e.TokenType.string))
                return this.tokens.copyToken(), !1;
            this.tokens.matchesContextual(d.ContextualKeyword._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, d.ContextualKeyword._from) && this.tokens.copyToken();
            let q = !1,
                r = !1,
                s = !1;
            if (this.tokens.matches1(e.TokenType.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(e.TokenType.comma) && this.tokens.removeToken()) : (q = !0, this.tokens.copyToken(), this.tokens.matches1(e.TokenType.comma) && (s = !0, this.tokens.removeToken()))), this.tokens.matches1(e.TokenType.star))
                this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (s && this.tokens.appendCode(','), q = !0, this.tokens.copyExpectedToken(e.TokenType.star), this.tokens.copyExpectedToken(e.TokenType.name), this.tokens.copyExpectedToken(e.TokenType.name));
            else if (this.tokens.matches1(e.TokenType.braceL)) {
                for (s && this.tokens.appendCode(','), this.tokens.copyToken(); !this.tokens.matches1(e.TokenType.braceR);) {
                    r = !0;
                    const t = (0, h.default)(this.tokens);
                    if (t.isType || this.shouldAutomaticallyElideImportedName(t.rightName)) {
                        for (; this.tokens.currentIndex() < t.endIndex;)
                            this.tokens.removeToken();
                        this.tokens.matches1(e.TokenType.comma) && this.tokens.removeToken();
                    } else {
                        for (q = !0; this.tokens.currentIndex() < t.endIndex;)
                            this.tokens.copyToken();
                        this.tokens.matches1(e.TokenType.comma) && this.tokens.copyToken();
                    }
                }
                this.tokens.copyExpectedToken(e.TokenType.braceR);
            }
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !q : !!this.isFlowTransformEnabled && (r && !q));
        }
        shouldAutomaticallyElideImportedName(a) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(a);
        }
        processExportDefault() {
            if ((0, l.default)(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo))
                return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
            if (!(this.tokens.matches4(e.TokenType._export, e.TokenType._default, e.TokenType._function, e.TokenType.name) || this.tokens.matches5(e.TokenType._export, e.TokenType._default, e.TokenType.name, e.TokenType._function, e.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, d.ContextualKeyword._async) || this.tokens.matches4(e.TokenType._export, e.TokenType._default, e.TokenType._class, e.TokenType.name) || this.tokens.matches5(e.TokenType._export, e.TokenType._default, e.TokenType._abstract, e.TokenType._class, e.TokenType.name)) && this.reactHotLoaderTransformer) {
                const o = this.nameManager.claimFreeName('_default');
                return this.tokens.replaceToken(`let ${ o }; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${ o } =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(o), !0;
            }
            return !1;
        }
        processNamedExports() {
            if (!this.isTypeScriptTransformEnabled)
                return !1;
            this.tokens.copyExpectedToken(e.TokenType._export), this.tokens.copyExpectedToken(e.TokenType.braceL);
            const o = (0, j.default)(this.tokens);
            let p = !1;
            for (; !this.tokens.matches1(e.TokenType.braceR);) {
                const q = (0, h.default)(this.tokens);
                if (q.isType || !o && this.shouldElideExportedName(q.leftName)) {
                    for (; this.tokens.currentIndex() < q.endIndex;)
                        this.tokens.removeToken();
                    this.tokens.matches1(e.TokenType.comma) && this.tokens.removeToken();
                } else {
                    for (p = !0; this.tokens.currentIndex() < q.endIndex;)
                        this.tokens.copyToken();
                    this.tokens.matches1(e.TokenType.comma) && this.tokens.copyToken();
                }
            }
            return this.tokens.copyExpectedToken(e.TokenType.braceR), this.keepUnusedImports || !o || p || (this.tokens.removeToken(), this.tokens.removeToken(), (0, k.removeMaybeImportAttributes)(this.tokens)), !0;
        }
        shouldElideExportedName(a) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(a) && !this.declarationInfo.valueDeclarations.has(a);
        }
        constructor(a, b, c, k, d, e, f, h) {
            super(), this.tokens = a, this.nameManager = b, this.helperManager = c, this.reactHotLoaderTransformer = k, this.isTypeScriptTransformEnabled = d, this.isFlowTransformEnabled = e, this.keepUnusedImports = f, this.nonTypeIdentifiers = d && !f ? (0, i.getNonTypeIdentifiers)(a, h) : new Set(), this.declarationInfo = d && !f ? (0, g.default)(a) : g.EMPTY_DECLARATION_INFO, this.injectCreateRequireForImportRequire = Boolean(h.injectCreateRequireForImportRequire);
        }
    }
}), c.register('ZpHyj', function(a, k) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('C8Bhr'),
        e = c('KWaC1'),
        f = c('/b6LO');
    class g extends f.default {
        process() {
            return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(e.TokenType._enum) ? (this.processEnum(), !0) : this.tokens.matches2(e.TokenType._export, e.TokenType._enum) ? (this.processNamedExportEnum(), !0) : !!this.tokens.matches3(e.TokenType._export, e.TokenType._default, e.TokenType._enum) && (this.processDefaultExportEnum(), !0));
        }
        processNamedExportEnum() {
            if (this.isImportsTransformEnabled) {
                this.tokens.removeInitialToken();
                const h = this.tokens.identifierNameAtRelativeIndex(1);
                this.processEnum(), this.tokens.appendCode(` exports.${ h } = ${ h };`);
            } else
                this.tokens.copyToken(), this.processEnum();
        }
        processDefaultExportEnum() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const h = this.tokens.identifierNameAtRelativeIndex(1);
            this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${ h };`) : this.tokens.appendCode(` export default ${ h };`);
        }
        processEnum() {
            this.tokens.replaceToken('const'), this.tokens.copyExpectedToken(e.TokenType.name);
            let i = !1;
            this.tokens.matchesContextual(d.ContextualKeyword._of) && (this.tokens.removeToken(), i = this.tokens.matchesContextual(d.ContextualKeyword._symbol), this.tokens.removeToken());
            const j = this.tokens.matches3(e.TokenType.braceL, e.TokenType.name, e.TokenType.eq);
            this.tokens.appendCode(' = require("flow-enums-runtime")');
            const k = !i && !j;
            for (this.tokens.replaceTokenTrimmingLeftWhitespace(k ? '.Mirrored([' : '({'); !this.tokens.matches1(e.TokenType.braceR);) {
                if (this.tokens.matches1(e.TokenType.ellipsis)) {
                    this.tokens.removeToken();
                    break;
                }
                this.processEnumElement(i, j), this.tokens.matches1(e.TokenType.comma) && this.tokens.copyToken();
            }
            this.tokens.replaceToken(k ? ']);' : '});');
        }
        processEnumElement(a, b) {
            if (a) {
                const h = this.tokens.identifierName();
                this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${ h }")`);
            } else
                b ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(':'), this.tokens.copyToken()) : this.tokens.replaceToken(`"${ this.tokens.identifierName() }"`);
        }
        constructor(a, b, c) {
            super(), this.rootTransformer = a, this.tokens = b, this.isImportsTransformEnabled = c;
        }
    }
}), c.register('aD6qy', function(a, k) {
    b(a.exports, 'default', function() {
        return h;
    });
    var d = c('KWaC1'),
        e = c('/b6LO');
    const f = 'jest',
        g = [
            'mock',
            'unmock',
            'enableAutomock',
            'disableAutomock'
        ];
    class h extends e.default {
        __init() {
            this.hoistedFunctionNames = [];
        }
        process() {
            return !(0 !== this.tokens.currentToken().scopeDepth || !this.tokens.matches4(d.TokenType.name, d.TokenType.dot, d.TokenType.name, d.TokenType.parenL) || this.tokens.identifierName() !== f) && (! function(a) {
                let i, j = a[0],
                    k = 1;
                for (; k < a.length;) {
                    const l = a[k],
                        m = a[k + 1];
                    if (k += 2, ('optionalAccess' === l || 'optionalCall' === l) && null == j)
                        return;
                    'access' === l || 'optionalAccess' === l ? (i = j, j = m(j)) : 'call' !== l && 'optionalCall' !== l || (j = m((...a) => j.call(i, ...a)), i = void 0);
                }
                return j;
            }([
                this,
                'access',
                a => a.importProcessor,
                'optionalAccess',
                a => a.getGlobalNames,
                'call',
                a => a(),
                'optionalAccess',
                a => a.has,
                'call',
                a => a(f)
            ]) && this.extractHoistedCalls());
        }
        getHoistedCode() {
            return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map(a => `${ a }();`).join('') : '';
        }
        extractHoistedCalls() {
            this.tokens.removeToken();
            let i = !1;
            for (; this.tokens.matches3(d.TokenType.dot, d.TokenType.name, d.TokenType.parenL);) {
                const j = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
                if (g.includes(j)) {
                    const k = this.nameManager.claimFreeName('__jestHoist');
                    this.hoistedFunctionNames.push(k), this.tokens.replaceToken(`function ${ k }(){${ f }.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(d.TokenType.parenR), this.tokens.appendCode(';}'), i = !1;
                } else
                    i ? this.tokens.copyToken() : this.tokens.replaceToken(`${ f }.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(d.TokenType.parenR), i = !0;
            }
            return !0;
        }
        constructor(a, b, c, k) {
            super(), this.rootTransformer = a, this.tokens = b, this.nameManager = c, this.importProcessor = k, h.prototype.__init.call(this);
        }
    }
}), c.register('x+bLL', function(a, k) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('KWaC1'),
        e = c('/b6LO');
    class f extends e.default {
        process() {
            if (this.tokens.matches1(d.TokenType.num)) {
                const g = this.tokens.currentTokenCode();
                if (g.includes('_'))
                    return this.tokens.replaceToken(g.replace(/_/g, '')), !0;
            }
            return !1;
        }
        constructor(a) {
            super(), this.tokens = a;
        }
    }
}), c.register('opifT', function(a, k) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('KWaC1'),
        e = c('/b6LO');
    class f extends e.default {
        process() {
            return !!this.tokens.matches2(d.TokenType._catch, d.TokenType.braceL) && (this.tokens.copyToken(), this.tokens.appendCode(` (${ this.nameManager.claimFreeName('e') })`), !0);
        }
        constructor(a, b) {
            super(), this.tokens = a, this.nameManager = b;
        }
    }
}), c.register('jfV8S', function(a, k) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('KWaC1'),
        e = c('/b6LO');
    class f extends e.default {
        process() {
            if (this.tokens.matches1(d.TokenType.nullishCoalescing)) {
                const g = this.tokens.currentToken();
                return this.tokens.tokens[g.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(', async () => (') : this.tokens.replaceTokenTrimmingLeftWhitespace(', () => ('), !0;
            }
            if (this.tokens.matches1(d.TokenType._delete)) {
                if (this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)
                    return this.tokens.removeInitialToken(), !0;
            }
            const g = this.tokens.currentToken().subscriptStartIndex;
            if (null != g && this.tokens.tokens[g].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== d.TokenType._super) {
                const h = this.nameManager.claimFreeName('_');
                let i;
                if (i = g > 0 && this.tokens.matches1AtIndex(g - 1, d.TokenType._delete) && this.isLastSubscriptInChain() ? `${ h } => delete ${ h }` : `${ h } => ${ h }`, this.tokens.tokens[g].isAsyncOperation && (i = `async ${ i }`), this.tokens.matches2(d.TokenType.questionDot, d.TokenType.parenL) || this.tokens.matches2(d.TokenType.questionDot, d.TokenType.lessThan))
                    this.justSkippedSuper() && this.tokens.appendCode('.bind(this)'), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${ i }`);
                else if (this.tokens.matches2(d.TokenType.questionDot, d.TokenType.bracketL))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${ i }`);
                else if (this.tokens.matches1(d.TokenType.questionDot))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${ i }.`);
                else if (this.tokens.matches1(d.TokenType.dot))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${ i }.`);
                else if (this.tokens.matches1(d.TokenType.bracketL))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${ i }[`);
                else {
                    if (!this.tokens.matches1(d.TokenType.parenL))
                        throw new Error('Unexpected subscript operator in optional chain.');
                    this.justSkippedSuper() && this.tokens.appendCode('.bind(this)'), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${ i }(`);
                }
                return !0;
            }
            return !1;
        }
        isLastSubscriptInChain() {
            let h = 0;
            for (let i = this.tokens.currentIndex() + 1;; i++) {
                if (i >= this.tokens.tokens.length)
                    throw new Error('Reached the end of the code while finding the end of the access chain.');
                if (this.tokens.tokens[i].isOptionalChainStart ? h++ : this.tokens.tokens[i].isOptionalChainEnd && h--, h < 0)
                    return !0;
                if (0 === h && null != this.tokens.tokens[i].subscriptStartIndex)
                    return !1;
            }
        }
        justSkippedSuper() {
            let j = 0,
                k = this.tokens.currentIndex() - 1;
            for (;;) {
                if (k < 0)
                    throw new Error('Reached the start of the code while finding the start of the access chain.');
                if (this.tokens.tokens[k].isOptionalChainStart ? j-- : this.tokens.tokens[k].isOptionalChainEnd && j++, j < 0)
                    return !1;
                if (0 === j && null != this.tokens.tokens[k].subscriptStartIndex)
                    return this.tokens.tokens[k - 1].type === d.TokenType._super;
                k--;
            }
        }
        constructor(a, b) {
            super(), this.tokens = a, this.nameManager = b;
        }
    }
}), c.register('5GDJY', function(a, k) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('SI/fV'),
        e = c('KWaC1'),
        f = c('/b6LO');
    class g extends f.default {
        process() {
            const h = this.tokens.currentIndex();
            if ('createReactClass' === this.tokens.identifierName()) {
                const i = this.importProcessor && this.importProcessor.getIdentifierReplacement('createReactClass');
                return i ? this.tokens.replaceToken(`(0, ${ i })`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(h), !0;
            }
            if (this.tokens.matches3(e.TokenType.name, e.TokenType.dot, e.TokenType.name) && 'React' === this.tokens.identifierName() && 'createClass' === this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2)) {
                const i = this.importProcessor && this.importProcessor.getIdentifierReplacement('React') || 'React';
                return i ? (this.tokens.replaceToken(i), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(h), !0;
            }
            return !1;
        }
        tryProcessCreateClassCall(a) {
            const h = this.findDisplayName(a);
            h && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(e.TokenType.parenL), this.tokens.copyExpectedToken(e.TokenType.braceL), this.tokens.appendCode(`displayName: '${ h }',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(e.TokenType.braceR), this.tokens.copyExpectedToken(e.TokenType.parenR));
        }
        findDisplayName(a) {
            return a < 2 ? null : this.tokens.matches2AtIndex(a - 2, e.TokenType.name, e.TokenType.eq) || a >= 2 && this.tokens.tokens[a - 2].identifierRole === d.IdentifierRole.ObjectKey ? this.tokens.identifierNameAtIndex(a - 2) : this.tokens.matches2AtIndex(a - 2, e.TokenType._export, e.TokenType._default) ? this.getDisplayNameFromFilename() : null;
        }
        getDisplayNameFromFilename() {
            const h = (this.options.filePath || 'unknown').split('/'),
                i = h[h.length - 1],
                j = i.lastIndexOf('.'),
                k = -1 === j ? i : i.slice(0, j);
            return 'index' === k && h[h.length - 2] ? h[h.length - 2] : k;
        }
        classNeedsDisplayName() {
            let l = this.tokens.currentIndex();
            if (!this.tokens.matches2(e.TokenType.parenL, e.TokenType.braceL))
                return !1;
            const m = l + 1,
                n = this.tokens.tokens[m].contextId;
            if (null == n)
                throw new Error('Expected non-null context ID on object open-brace.');
            for (; l < this.tokens.tokens.length; l++) {
                const o = this.tokens.tokens[l];
                if (o.type === e.TokenType.braceR && o.contextId === n) {
                    l++;
                    break;
                }
                if ('displayName' === this.tokens.identifierNameAtIndex(l) && this.tokens.tokens[l].identifierRole === d.IdentifierRole.ObjectKey && o.contextId === n)
                    return !1;
            }
            if (l === this.tokens.tokens.length)
                throw new Error('Unexpected end of input when processing React class.');
            return this.tokens.matches1AtIndex(l, e.TokenType.parenR) || this.tokens.matches2AtIndex(l, e.TokenType.comma, e.TokenType.parenR);
        }
        constructor(a, b, c, k) {
            super(), this.rootTransformer = a, this.tokens = b, this.importProcessor = c, this.options = k;
        }
    }
}), c.register('PrKxu', function(a, k) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('SI/fV'),
        e = c('/b6LO');
    class f extends e.default {
        __init() {
            this.extractedDefaultExportName = null;
        }
        setExtractedDefaultExportName(a) {
            this.extractedDefaultExportName = a;
        }
        getPrefixCode() {
            return '\n      (function () {\n        var enterModule = require(\'react-hot-loader\').enterModule;\n        enterModule && enterModule(module);\n      })();'.replace(/\s+/g, ' ').trim();
        }
        getSuffixCode() {
            const g = new Set();
            for (const h of this.tokens.tokens)
                !h.isType && (0, d.isTopLevelDeclaration)(h) && h.identifierRole !== d.IdentifierRole.ImportDeclaration && g.add(this.tokens.identifierNameForToken(h));
            const i = Array.from(g).map(g => ({
                variableName: g,
                uniqueLocalName: g
            }));
            return this.extractedDefaultExportName && i.push({
                variableName: this.extractedDefaultExportName,
                uniqueLocalName: 'default'
            }), `\n;(function () {\n  var reactHotLoader = require('react-hot-loader').default;\n  var leaveModule = require('react-hot-loader').leaveModule;\n  if (!reactHotLoader) {\n    return;\n  }\n${ i.map(({
                variableName: j,
                uniqueLocalName: k
            }) => `
            reactHotLoader.register($ {
                j
            }, "${ k }", $ {
                JSON.stringify(this.filePath || '')
            });
            `).join('\n') }\n  leaveModule(module);\n})();`;
        }
        process() {
            return !1;
        }
        constructor(a, b) {
            super(), this.tokens = a, this.filePath = b, f.prototype.__init.call(this);
        }
    }
}), c.register('AKsYj', function(a, k) {
    b(a.exports, 'default', function() {
        return g;
    });
    var d = c('KWaC1'),
        e = c('uHBrI'),
        f = c('/b6LO');
    class g extends f.default {
        process() {
            return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(d.TokenType._public) || this.tokens.matches1(d.TokenType._protected) || this.tokens.matches1(d.TokenType._private) || this.tokens.matches1(d.TokenType._abstract) || this.tokens.matches1(d.TokenType._readonly) || this.tokens.matches1(d.TokenType._override) || this.tokens.matches1(d.TokenType.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(d.TokenType._enum) || this.tokens.matches2(d.TokenType._const, d.TokenType._enum) ? (this.processEnum(), !0) : !(!this.tokens.matches2(d.TokenType._export, d.TokenType._enum) && !this.tokens.matches3(d.TokenType._export, d.TokenType._const, d.TokenType._enum)) && (this.processEnum(!0), !0));
        }
        processEnum(h = !1) {
            for (this.tokens.removeInitialToken(); this.tokens.matches1(d.TokenType._const) || this.tokens.matches1(d.TokenType._enum);)
                this.tokens.removeToken();
            const i = this.tokens.identifierName();
            this.tokens.removeToken(), h && !this.isImportsTransformEnabled && this.tokens.appendCode('export '), this.tokens.appendCode(`var ${ i }; (function (${ i })`), this.tokens.copyExpectedToken(d.TokenType.braceL), this.processEnumBody(i), this.tokens.copyExpectedToken(d.TokenType.braceR), h && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${ i } || (exports.${ i } = ${ i } = {}));`) : this.tokens.appendCode(`)(${ i } || (${ i } = {}));`);
        }
        processEnumBody(h) {
            let i = null;
            for (; !this.tokens.matches1(d.TokenType.braceR);) {
                const {
                    nameStringCode: j,
                    variableName: k
                } = this.extractEnumKeyInfo(this.tokens.currentToken());
                this.tokens.removeInitialToken(), this.tokens.matches3(d.TokenType.eq, d.TokenType.string, d.TokenType.comma) || this.tokens.matches3(d.TokenType.eq, d.TokenType.string, d.TokenType.braceR) ? this.processStringLiteralEnumMember(h, j, k) : this.tokens.matches1(d.TokenType.eq) ? this.processExplicitValueEnumMember(h, j, k) : this.processImplicitValueEnumMember(h, j, k, i), this.tokens.matches1(d.TokenType.comma) && this.tokens.removeToken(), i = null != k ? k : `${ h }[${ j }]`;
            }
        }
        extractEnumKeyInfo(h) {
            if (h.type === d.TokenType.name) {
                const i = this.tokens.identifierNameForToken(h);
                return {
                    nameStringCode: `"${ i }"`,
                    variableName: (0, e.default)(i) ? i : null
                };
            }
            if (h.type === d.TokenType.string) {
                const i = this.tokens.stringValueForToken(h);
                return {
                    nameStringCode: this.tokens.code.slice(h.start, h.end),
                    variableName: (0, e.default)(i) ? i : null
                };
            }
            throw new Error('Expected name or string at beginning of enum element.');
        }
        processStringLiteralEnumMember(h, b, c) {
            null != c ? (this.tokens.appendCode(`const ${ c }`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${ h }[${ b }] = ${ c };`)) : (this.tokens.appendCode(`${ h }[${ b }]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(';'));
        }
        processExplicitValueEnumMember(h, b, c) {
            const i = this.tokens.currentToken().rhsEndIndex;
            if (null == i)
                throw new Error('Expected rhsEndIndex on enum assign.');
            if (null != c) {
                for (this.tokens.appendCode(`const ${ c }`), this.tokens.copyToken(); this.tokens.currentIndex() < i;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(`; ${ h }[${ h }[${ b }] = ${ c }] = ${ b };`);
            } else {
                for (this.tokens.appendCode(`${ h }[${ h }[${ b }]`), this.tokens.copyToken(); this.tokens.currentIndex() < i;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(`] = ${ b };`);
            }
        }
        processImplicitValueEnumMember(h, b, c, h) {
            let i = null != h ? `${ h } + 1` : '0';
            null != c && (this.tokens.appendCode(`const ${ c } = ${ i }; `), i = c), this.tokens.appendCode(`${ h }[${ h }[${ b }] = ${ i }] = ${ b };`);
        }
        constructor(h, b, c) {
            super(), this.rootTransformer = h, this.tokens = b, this.isImportsTransformEnabled = c;
        }
    }
}), c.register('uHBrI', function(a, h) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('nLDM7');
    const e = new Set([
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'export',
        'extends',
        'finally',
        'for',
        'function',
        'if',
        'import',
        'in',
        'instanceof',
        'new',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'var',
        'void',
        'while',
        'with',
        'yield',
        'enum',
        'implements',
        'interface',
        'let',
        'package',
        'private',
        'protected',
        'public',
        'static',
        'await',
        'false',
        'null',
        'true'
    ]);

    function f(a) {
        if (0 === a.length)
            return !1;
        if (!d.IS_IDENTIFIER_START[a.charCodeAt(0)])
            return !1;
        for (let g = 1; g < a.length; g++)
            if (!d.IS_IDENTIFIER_CHAR[a.charCodeAt(g)])
                return !1;
        return !e.has(a);
    }
}), c.register('5Sk9b', function(a, h) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('olZJg'),
        e = c('KWaC1');

    function f(a, b) {
        if (0 === b.length)
            return '';
        const g = Object.keys(b[0]).filter(a => 'type' !== a && 'value' !== a && 'start' !== a && 'end' !== a && 'loc' !== a),
            h = Object.keys(b[0].type).filter(a => 'label' !== a && 'keyword' !== a),
            i = [
                'Location',
                'Label',
                'Raw',
                ...g,
                ...h
            ],
            j = new(0, d.default)(a),
            k = [
                i,
                ...b.map(function(b) {
                    const l = a.slice(b.start, b.end);
                    return [
                        (i = b.start, j = b.end, `${ p(i) }-${ p(j) }`),
                        (0, e.formatTokenType)(b.type),
                        g(String(l), 14),
                        ...g.map(a => o(b[a], a)),
                        ...h.map(a => o(b.type[a], a))
                    ];
                    var m, n;
                })
            ],
            l = i.map(() => 0);
        for (const m of k)
            for (let n = 0; n < m.length; n++)
                l[n] = Math.max(l[n], m[n].length);
        return k.map(m => m.map((m, n) => m.padEnd(l[n])).join(' ')).join('\n');

        function o(m, n) {
            return !0 === m ? n : !1 === m || null === m ? '' : String(m);
        }

        function p(m) {
            const q = j.locationForIndex(m);
            return q ? `${ q.line + 1 }:${ q.column + 1 }` : 'Unknown';
        }
    }

    function g(a, b) {
        return a.length > b ? `${ a.slice(0, b - 3) }...` : a;
    }
}), c.register('olZJg', function(a, c) {
    var d;
    b(a.exports, 'default', function() {
        return d;
    }, function(a) {
        return d = a;
    });
    var e = '\n',
        f = function() {
            function g(g) {
                this.string = g;
                for (var h = [0], i = 0; i < g.length;)
                    switch (g[i]) {
                        case e:
                            i += e.length, h.push(i);
                            break;
                        case '\r':
                            g[i += '\r'.length] === e && (i += e.length), h.push(i);
                            break;
                        default:
                            i++;
                    }
                this.offsets = h;
            }
            return g.prototype.locationForIndex = function(g) {
                if (g < 0 || g > this.string.length)
                    return null;
                for (var h = 0, i = this.offsets; i[h + 1] <= g;)
                    h++;
                return {
                    line: h,
                    column: g - i[h]
                };
            }, g.prototype.indexForLocation = function(g) {
                var h = g.line,
                    i = g.column;
                return h < 0 || h >= this.offsets.length || i < 0 || i > this.lengthOfLine(h) ? null : this.offsets[h] + i;
            }, g.prototype.lengthOfLine = function(g) {
                var h = this.offsets[g];
                return (g === this.offsets.length - 1 ? this.string.length : this.offsets[g + 1]) - h;
            }, g;
        }();
    d = f;
}), c.register('THaw4', function(a, h) {
    b(a.exports, 'default', function() {
        return f;
    });
    var d = c('KWaC1'),
        e = c('tJSN/');

    function f(a) {
        const g = new Set();
        for (let h = 0; h < a.tokens.length; h++)
            a.matches1AtIndex(h, d.TokenType._import) && !a.matches3AtIndex(h, d.TokenType._import, d.TokenType.name, d.TokenType.eq) && g(a, h, g);
        return g;
    }

    function g(a, b, c) {
        b++, a.matches1AtIndex(b, d.TokenType.parenL) || (a.matches1AtIndex(b, d.TokenType.name) && (c.add(a.identifierNameAtIndex(b)), b++, a.matches1AtIndex(b, d.TokenType.comma) && b++), a.matches1AtIndex(b, d.TokenType.star) && (b += 2, c.add(a.identifierNameAtIndex(b)), b++), a.matches1AtIndex(b, d.TokenType.braceL) && function(a, b, c) {
            for (;;) {
                if (a.matches1AtIndex(b, d.TokenType.braceR))
                    return;
                const h = (0, e.default)(a, b);
                if (b = h.endIndex, h.isType || c.add(h.rightName), a.matches2AtIndex(b, d.TokenType.comma, d.TokenType.braceR))
                    return;
                if (a.matches1AtIndex(b, d.TokenType.braceR))
                    return;
                if (!a.matches1AtIndex(b, d.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(a.tokens[b]) }`);
                b++;
            }
        }(a, ++b, c));
    }
}), c.register('kgfxo', function(a, j) {
    b(a.exports, 'CallAction', function() {
        return f;
    });
    var d = c('7Sbqr'),
        e = c('dAmf5');
    const f = (g = '') => {
        var h, i;
        const j = null === (h = d.default.me.deviceUI.current) || void 0 === h ? void 0 : h.deviceId;
        if (!j)
            return;
        const k = (0, e.default)().worldManager.devices.getDeviceById(j);
        k && (null === (i = k.callAction) || void 0 === i || i.call(k, g));
    };
}), c.register('n4GIU', function(i, j) {
    b(i.exports, 'usePropertyValue', function() {
        return g;
    });
    var d = c('7Sbqr'),
        e = c('UnUp5'),
        f = c('uPP4W');
    const g = b => {
        var h;
        const [i, j] = a(f).useState(null !== (h = d.default.me.properties.get(b)) && void 0 !== h ? h : '');
        return (0, f.useEffect)(() => (0, e.reaction)(() => d.default.me.properties.get(b), a => {
            j(a + '');
        }), [b]), i;
    };
}), c.register('jDFNP', function(i, j) {
    b(i.exports, 'useItemAmount', function() {
        return g;
    });
    var d = c('7Sbqr'),
        e = c('UnUp5'),
        f = c('uPP4W');
    const g = b => {
        var h, i;
        const [j, k] = a(f).useState(null !== (i = null === (h = d.default.me.inventory.slots.get(b)) || void 0 === h ? void 0 : h.amount) && void 0 !== i ? i : 0);
        return (0, f.useEffect)(() => {
            const l = (0, e.reaction)(() => {
                var m;
                return null === (m = d.default.me.inventory.slots.get(b)) || void 0 === m ? void 0 : m.amount;
            }, l => {
                k(l);
            });
            return l;
        }, [b]), j;
    };
});