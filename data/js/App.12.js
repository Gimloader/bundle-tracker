function a(b) {
    return b && b.__esModule ? b.default : b;
}

function b(c, d, e, f) {
    Object.defineProperty(c, d, {
        get: e,
        set: f,
        enumerable: !0,
        configurable: !0
    });
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('1Aepc', function(d, e) {
    b(d.exports, 'LiveProvider', function() {
        return _E;
    }), b(d.exports, 'LiveEditor', function() {
        return _F;
    }), b(d.exports, 'LiveError', function() {
        return _G;
    }), b(d.exports, 'LivePreview', function() {
        return _H;
    });
    var f = c('5Q88j'),
        g = c('O0Kav'),
        h = c('wVBJh'),
        i = c('gRbUn'),
        j = (c('O0Kav'), c('O0Kav'), c('O0Kav'), c('0zQ41')),
        k = (c('O0Kav'), c('gRbUn'), c('gRbUn'), c('O0Kav'), c('gRbUn'), c('O0Kav'), c('gRbUn'), g = c('O0Kav'), c('gRbUn'), i = c('gRbUn'), Object.defineProperty),
        l = Object.defineProperties,
        m = Object.getOwnPropertyDescriptors,
        n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        q = (a, b, c) => b in a ? k(a, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : a[b] = c,
        r = (a, b) => {
            for (var s in b || (b = {}))
                o.call(b, s) && q(a, s, b[s]);
            if (n)
                for (var t of n(b))
                    p.call(b, t) && q(a, t, b[t]);
            return a;
        },
        s = (a, b) => l(a, m(b)),
        t = a => {
            const {
                tabMode: u = 'indentation'
            } = a, v = (0, g.useRef)(null), [w, x] = (0, g.useState)(a.code || ''), {
                theme: y
            } = a;
            return (0, g.useEffect)(() => {
                x(a.code);
            }, [a.code]), (0, h.useEditable)(v, a => x(a.slice(0, -1)), {
                disabled: a.disabled,
                indentation: 'indentation' === u ? 2 : void 0
            }), (0, g.useEffect)(() => {
                a.onChange && a.onChange(w);
            }, [w]), (0, i.jsx)('div', {
                className: a.className,
                style: a.style,
                children: (0, i.jsx)(f.Highlight, {
                    code: w,
                    theme: a.theme || f.themes.nightOwl,
                    language: a.language,
                    children: ({
                        className: z,
                        tokens: A,
                        getLineProps: B,
                        getTokenProps: C,
                        style: D
                    }) => (0, i.jsx)('pre', {
                        className: z,
                        style: r(r({
                            margin: 0,
                            outline: 'none',
                            padding: 10,
                            fontFamily: 'inherit'
                        }, y && 'object' == typeof y.plain ? y.plain : {}), D),
                        ref: v,
                        spellCheck: 'false',
                        children: A.map((z, A) => (0, i.jsxs)('span', s(r({}, B({
                            line: z
                        })), {
                            children: [
                                z.filter(z => !z.empty).map((z, A) => (0, i.jsx)('span', r({}, C({
                                    token: z
                                })), `token-${ A }`)),
                                '\n'
                            ]
                        }), `line-${ A }`))
                    })
                })
            });
        },
        u = (0, g.createContext)({}),
        v = [
            'jsx',
            'imports'
        ];

    function w(x = {}) {
        const y = Array.isArray(x.transforms) ? x.transforms.filter(Boolean) : v;
        return x => (0, j.transform)(x, {
            transforms: y
        }).code;
    }
    var x = (b, c) => class extends g.Component {
            componentDidCatch(y) {
                c(y);
            }
            render() {
                return 'function' == typeof b ? (0, i.jsx)(b, {}) : a(g).isValidElement(b) ? b : null;
            }
        },
        y = (a, b) => {
            const z = Object.keys(b),
                A = z.map(a => b[a]);
            return new Function(...z, a)(...A);
        };
    var z = 'const _jsxFileName = "";',
        A = a => a.trim().replace(/;$/, ''),
        B = a => a.replace(z, '').trim(),
        C = a => z + a,
        D = a => `return (${ a })`;
    var _E = function({
        children: F,
        code: G = '',
        language: H = 'tsx',
        theme: I,
        enableTypeScript: J = !0,
        disabled: K = !1,
        scope: L,
        transformCode: M,
        noInline: N = !1
    }) {
        const [O, P] = (0, g.useState)({
            error: void 0,
            element: void 0
        });

        function Q(R) {
            return G = this, H = null, I = function*() {
                const S = a => {
                    P({
                        error: a.toString(),
                        element: void 0
                    });
                };
                try {
                    const T = M ? M(R) : R;
                    try {
                        const U = yield Promise.resolve(T), V = a => P({
                            error: void 0,
                            element: a
                        });
                        if ('string' != typeof U)
                            throw new Error('Code failed to transform');
                        const W = {
                            code: U,
                            scope: L,
                            enableTypeScript: J
                        };
                        N ? (P({
                            error: void 0,
                            element: null
                        }), (({
                            code: X = '',
                            scope: Y = {},
                            enableTypeScript: Z = !0
                        }, V, J) => {
                            if (!/render\s*\(/.test(X))
                                return J(new SyntaxError('No-Inline evaluations must call `render`.'));
                            const $ = [
                                'jsx',
                                'imports'
                            ];
                            Z && $.splice(1, 0, 'typescript'), y(w({
                                transforms: $
                            })(X), s(r({
                                React: a(g)
                            }, Y), {
                                render: a => {
                                    void 0 === a ? J(new SyntaxError('`render` must be called with valid JSX.')) : V(x(a, J));
                                }
                            }));
                        })(W, V, Y)) : V((({
                            code: $ = '',
                            scope: ab = {},
                            enableTypeScript: bb = !0
                        }, V) => {
                            const cb = ['jsx'];
                            bb && cb.push('typescript');
                            const db = function(...a) {
                                return a.reduce((a, $) => (...ab) => a($(...ab)));
                            }(C, w({
                                transforms: ['imports']
                            }), B, A, w({
                                transforms: cb
                            }), D, A)($);
                            return x(y(db, r({
                                React: a(g)
                            }, ab)), V);
                        })(W, ab));
                    } catch (a) {
                        return S(a);
                    }
                } catch (a) {
                    return S(a), Promise.resolve();
                }
            }, new Promise((a, R) => {
                var S = a => {
                        try {
                            K(I.next(a));
                        } catch (a) {
                            R(a);
                        }
                    },
                    T = a => {
                        try {
                            K(I.throw(a));
                        } catch (a) {
                            R(a);
                        }
                    },
                    U = R => R.done ? a(R.value) : Promise.resolve(R.value).then(S, T);
                U((I = I.apply(G, H)).next());
            });
            var S, T, U;
        }
        const R = a => P({
            error: a.toString()
        });
        return (0, g.useEffect)(() => {
            Q(G).catch(R);
        }, [
            G,
            L,
            N,
            M
        ]), (0, i.jsx)(u.Provider, {
            value: s(r({}, O), {
                code: G,
                language: H,
                theme: I,
                disabled: K,
                onError: R,
                onChange: a => {
                    Q(a).catch(R);
                }
            }),
            children: F
        });
    };

    function _F(G) {
        const {
            code: H,
            language: I,
            theme: J,
            disabled: K,
            onChange: L
        } = (0, g.useContext)(u);
        return (0, i.jsx)(t, r({
            theme: J,
            code: H,
            language: I,
            disabled: K,
            onChange: L
        }, G));
    }

    function _G(H) {
        const {
            error: I
        } = (0, g.useContext)(u);
        return I ? (0, i.jsx)('pre', s(r({}, H), {
            children: I
        })) : null;
    }
    var _H = function(I) {
        var J = I,
            {
                Component: K = 'div'
            } = J,
            L = ((I, J) => {
                var M = {};
                for (var N in I)
                    o.call(I, N) && J.indexOf(N) < 0 && (M[N] = I[N]);
                if (null != I && n)
                    for (var O of n(I))
                        J.indexOf(O) < 0 && p.call(I, O) && (M[O] = I[O]);
                return M;
            })(J, ['Component']);
        const {
            element: M
        } = (0, g.useContext)(u);
        return (0, i.jsx)(K, s(r({}, L), {
            children: M ? (0, i.jsx)(M, {}) : null
        }));
    };
}), c.register('5Q88j', function(d, e) {
    b(d.exports, 'themes', function() {
        return _ib;
    }), b(d.exports, 'Highlight', function() {
        return _lb;
    });
    var f, g, h, i, j, k, l, m = c('O0Kav'),
        n = (c('O0Kav'), c('O0Kav'), c('LlZ3Z')),
        o = (c('O0Kav'), n = c('LlZ3Z'), m = c('O0Kav'), Object.create),
        p = Object.defineProperty,
        q = Object.defineProperties,
        r = Object.getOwnPropertyDescriptor,
        s = Object.getOwnPropertyDescriptors,
        t = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        v = Object.getPrototypeOf,
        w = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        y = (d, b, c) => b in d ? p(d, b, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: c
        }) : d[b] = c,
        z = (d, b) => {
            for (var A in b || (b = {}))
                w.call(b, A) && y(d, A, b[A]);
            if (u)
                for (var B of u(b))
                    x.call(b, B) && y(d, B, b[B]);
            return d;
        },
        A = (d, b) => q(d, s(b)),
        B = (d, b) => {
            var C = {};
            for (var D in d)
                w.call(d, D) && b.indexOf(D) < 0 && (C[D] = d[D]);
            if (null != d && u)
                for (var E of u(d))
                    b.indexOf(E) < 0 && x.call(d, E) && (C[E] = d[E]);
            return C;
        },
        C = (f = {
            '../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js'(D, E) {
                var F = function() {
                    var G = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                        H = 0,
                        I = {},
                        J = {
                            util: {
                                encode: function G(K) {
                                    return K instanceof f ? new f(K.type, G(K.content), K.alias) : Array.isArray(K) ? K.map(G) : K.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                                },
                                type: function(K) {
                                    return Object.prototype.toString.call(K).slice(8, -1);
                                },
                                objId: function(K) {
                                    return K.__id || Object.defineProperty(K, '__id', {
                                        value: ++H
                                    }), K.__id;
                                },
                                clone: function G(K, L) {
                                    var M, N;
                                    switch (L = L || {}, J.util.type(K)) {
                                        case 'Object':
                                            if (N = J.util.objId(K), L[N])
                                                return L[N];
                                            for (var O in (M = {}, L[N] = M, K))
                                                K.hasOwnProperty(O) && (M[O] = G(K[O], L));
                                            return M;
                                        case 'Array':
                                            return N = J.util.objId(K), L[N] ? L[N] : (M = [], L[N] = M, K.forEach(function(P, Q) {
                                                M[Q] = G(P, L);
                                            }), M);
                                        default:
                                            return K;
                                    }
                                },
                                getLanguage: function(K) {
                                    for (; K;) {
                                        var L = G.exec(K.className);
                                        if (L)
                                            return L[1].toLowerCase();
                                        K = K.parentElement;
                                    }
                                    return 'none';
                                },
                                setLanguage: function(K, L) {
                                    K.className = K.className.replace(RegExp(G, 'gi'), ''), K.classList.add('language-' + L);
                                },
                                isActive: function(K, L, M) {
                                    for (var N = 'no-' + L; K;) {
                                        var O = K.classList;
                                        if (O.contains(L))
                                            return !0;
                                        if (O.contains(N))
                                            return !1;
                                        K = K.parentElement;
                                    }
                                    return !!M;
                                }
                            },
                            languages: {
                                plain: I,
                                plaintext: I,
                                text: I,
                                txt: I,
                                extend: function(K, L) {
                                    var M = J.util.clone(J.languages[K]);
                                    for (var N in L)
                                        M[N] = L[N];
                                    return M;
                                },
                                insertBefore: function(K, L, M, N) {
                                    var O = (N = N || J.languages)[K],
                                        P = {};
                                    for (var Q in O)
                                        if (O.hasOwnProperty(Q)) {
                                            if (Q == L)
                                                for (var R in M)
                                                    M.hasOwnProperty(R) && (P[R] = M[R]);
                                            M.hasOwnProperty(Q) || (P[Q] = O[Q]);
                                        }
                                    var R = N[K];
                                    return N[K] = P, J.languages.DFS(J.languages, function(S, T) {
                                        T === R && S != K && (this[S] = P);
                                    }), P;
                                },
                                DFS: function G(K, L, M, N) {
                                    N = N || {};
                                    var O = J.util.objId;
                                    for (var P in K)
                                        if (K.hasOwnProperty(P)) {
                                            L.call(K, P, K[P], M || P);
                                            var Q = K[P],
                                                R = J.util.type(Q);
                                            'Object' !== R || N[O(Q)] ? 'Array' !== R || N[O(Q)] || (N[O(Q)] = !0, G(Q, L, P, N)) : (N[O(Q)] = !0, G(Q, L, null, N));
                                        }
                                }
                            },
                            plugins: {},
                            highlight: function(K, L, M) {
                                var N = {
                                    code: K,
                                    grammar: L,
                                    language: M
                                };
                                if (J.hooks.run('before-tokenize', N), !N.grammar)
                                    throw new Error('The language "' + N.language + '" has no grammar.');
                                return N.tokens = J.tokenize(N.code, N.grammar), J.hooks.run('after-tokenize', N), f.stringify(J.util.encode(N.tokens), N.language);
                            },
                            tokenize: function(K, L) {
                                var M = L.rest;
                                if (M) {
                                    for (var N in M)
                                        L[N] = M[N];
                                    delete L.rest;
                                }
                                var N = new i();
                                return j(N, N.head, K), h(K, N, L, N.head, 0),
                                    function(O) {
                                        for (var P = [], Q = O.head.next; Q !== O.tail;)
                                            P.push(Q.value), Q = Q.next;
                                        return P;
                                    }(N);
                            },
                            hooks: {
                                all: {},
                                add: function(K, L) {
                                    var M = J.hooks.all;
                                    M[K] = M[K] || [], M[K].push(L);
                                },
                                run: function(K, L) {
                                    var M = J.hooks.all[K];
                                    if (M && M.length)
                                        for (var N, O = 0; N = M[O++];)
                                            N(L);
                                }
                            },
                            Token: f
                        };

                    function K(L, M, N, O) {
                        this.type = L, this.content = M, this.alias = N, this.length = 0 | (O || '').length;
                    }

                    function L(M, N, O, P) {
                        M.lastIndex = N;
                        var Q = M.exec(O);
                        if (Q && P && Q[1]) {
                            var R = Q[1].length;
                            Q.index += R, Q[0] = Q[0].slice(R);
                        }
                        return Q;
                    }

                    function M(N, O, P, Q, R, S) {
                        for (var T in P)
                            if (P.hasOwnProperty(T) && P[T]) {
                                var U = P[T];
                                U = Array.isArray(U) ? U : [U];
                                for (var V = 0; V < U.length; ++V) {
                                    if (S && S.cause == T + ',' + V)
                                        return;
                                    var W = U[V],
                                        X = W.inside,
                                        Y = !!W.lookbehind,
                                        Z = !!W.greedy,
                                        $ = W.alias;
                                    if (Z && !W.pattern.global) {
                                        var ab = W.pattern.toString().match(/[imsuy]*$/)[0];
                                        W.pattern = RegExp(W.pattern.source, ab + 'g');
                                    }
                                    for (var ab = W.pattern || W, bb = Q.next, cb = R; bb !== O.tail && !(S && cb >= S.reach); cb += bb.value.length, bb = bb.next) {
                                        var db = bb.value;
                                        if (O.length > N.length)
                                            return;
                                        if (!(db instanceof K)) {
                                            var eb, fb = 1;
                                            if (Z) {
                                                if (!(eb = L(ab, cb, N, Y)) || eb.index >= N.length)
                                                    break;
                                                var gb = eb.index,
                                                    hb = eb.index + eb[0].length,
                                                    _ib = cb;
                                                for (_ib += bb.value.length; gb >= _ib;)
                                                    _ib += (bb = bb.next).value.length;
                                                if (cb = _ib -= bb.value.length, bb.value instanceof K)
                                                    continue;
                                                for (var jb = bb; jb !== O.tail && (_ib < hb || 'string' == typeof jb.value); jb = jb.next)
                                                    fb++, _ib += jb.value.length;
                                                fb--, db = N.slice(cb, _ib), eb.index -= cb;
                                            } else if (!(eb = L(ab, 0, db, Y)))
                                                continue;
                                            C = eb.index;
                                            var gb = eb[0],
                                                hb = db.slice(0, C),
                                                ib = db.slice(C + gb.length),
                                                jb = cb + db.length;
                                            S && jb > S.reach && (S.reach = jb);
                                            var kb = bb.prev;
                                            if (hb && (kb = j(O, kb, hb), cb += hb.length), k(O, kb, fb), bb = j(O, kb, new K(T, X ? J.tokenize(gb, X) : gb, $, gb)), ib && j(O, bb, ib), fb > 1) {
                                                var lb = {
                                                    cause: T + ',' + V,
                                                    reach: jb
                                                };
                                                M(N, O, P, bb.prev, cb, lb), S && lb.reach > S.reach && (S.reach = lb.reach);
                                            }
                                        }
                                    }
                                }
                            }
                    }

                    function N() {
                        var O = {
                                value: null,
                                prev: null,
                                next: null
                            },
                            P = {
                                value: null,
                                prev: O,
                                next: null
                            };
                        O.next = P, this.head = O, this.tail = P, this.length = 0;
                    }

                    function O(P, Q, R) {
                        var S = Q.next,
                            T = {
                                value: R,
                                prev: Q,
                                next: S
                            };
                        return Q.next = T, S.prev = T, P.length++, T;
                    }

                    function P(Q, R, S) {
                        for (var T = R.next, U = 0; U < S && T !== Q.tail; U++)
                            T = T.next;
                        R.next = T, T.prev = R, Q.length -= U;
                    }
                    return K.stringify = function G(Q, R) {
                        if ('string' == typeof Q)
                            return Q;
                        if (Array.isArray(Q)) {
                            var S = '';
                            return Q.forEach(function(T) {
                                S += G(T, R);
                            }), S;
                        }
                        var S = {
                                type: Q.type,
                                content: G(Q.content, R),
                                tag: 'span',
                                classes: [
                                    'token',
                                    Q.type
                                ],
                                attributes: {},
                                language: R
                            },
                            T = Q.alias;
                        T && (Array.isArray(T) ? Array.prototype.push.apply(S.classes, T) : S.classes.push(T)), J.hooks.run('wrap', S);
                        var U = '';
                        for (var V in S.attributes)
                            U += ' ' + V + '="' + (S.attributes[V] || '').replace(/"/g, '&quot;') + '"';
                        return '<' + S.tag + ' class="' + S.classes.join(' ') + '"' + U + '>' + S.content + '</' + S.tag + '>';
                    }, J;
                }();
                E.exports = F, F.default = F;
            }
        }, function() {
            return g || (0, f[t(f)[0]])((g = {
                exports: {}
            }).exports, g), g.exports;
        }),
        D = ((d, b, c) => (c = null != d ? o(v(d)) : {}, ((d, b, c, e) => {
            if (b && 'object' == typeof b || 'function' == typeof b)
                for (let E of t(b))
                    w.call(d, E) || E === c || p(d, E, {
                        get: () => b[E],
                        enumerable: !(e = r(b, E)) || e.enumerable
                    });
            return d;
        })(!b && d && d.__esModule ? c : p(c, 'default', {
            value: d,
            enumerable: !0
        }), d)))(C());
    D.languages.markup = {
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
        }, D.languages.markup.tag.inside['attr-value'].inside.entity = D.languages.markup.entity, D.languages.markup.doctype.inside['internal-subset'].inside = D.languages.markup, D.hooks.add('wrap', function(E) {
            'entity' === E.type && (E.attributes.title = E.content.replace(/&amp;/, '&'));
        }), Object.defineProperty(D.languages.markup.tag, 'addInlined', {
            value: function(E, F) {
                var G;
                (F = ((G = ((G = {})['language-' + F] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: D.languages[F]
                }, G.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                    'included-cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: G
                    }
                }))['language-' + F] = {
                    pattern: /[\s\S]+/,
                    inside: D.languages[F]
                }, {}))[E] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                        return E;
                    }), 'i'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: G
                }, D.languages.insertBefore('markup', 'cdata', F);
            }
        }), Object.defineProperty(D.languages.markup.tag, 'addAttribute', {
            value: function(E, F) {
                D.languages.markup.tag.inside['special-attr'].push({
                    pattern: RegExp(/(^|["'\s])/.source + '(?:' + E + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
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
                                        F,
                                        'language-' + F
                                    ],
                                    inside: D.languages[F]
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
        }), D.languages.html = D.languages.markup, D.languages.mathml = D.languages.markup, D.languages.svg = D.languages.markup, D.languages.xml = D.languages.extend('markup', {}), D.languages.ssml = D.languages.xml, D.languages.atom = D.languages.xml, D.languages.rss = D.languages.xml, h = D, i = {
            pattern: /\\[\\(){}[\]^$+*?|.]/,
            alias: 'escape'
        }, k = '(?:[^\\\\-]|' + (j = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source + ')', k = RegExp(k + '-' + k), l = {
            pattern: /(<|')[^<>']+(?=[>']$)/,
            lookbehind: !0,
            alias: 'variable'
        }, h.languages.regex = {
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
                        pattern: k,
                        inside: {
                            escape: j,
                            'range-punctuation': {
                                pattern: /-/,
                                alias: 'operator'
                            }
                        }
                    },
                    'special-escape': i,
                    'char-set': {
                        pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                        alias: 'class-name'
                    },
                    escape: j
                }
            },
            'special-escape': i,
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
                        'group-name': l
                    }
                }
            ],
            anchor: {
                pattern: /[$^]|\\[ABbGZz]/,
                alias: 'function'
            },
            escape: j,
            group: [{
                    pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                    alias: 'punctuation',
                    inside: {
                        'group-name': l
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
        }, D.languages.clike = {
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
        }, D.languages.javascript = D.languages.extend('clike', {
            'class-name': [
                D.languages.clike['class-name'],
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
        }), D.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, D.languages.insertBefore('javascript', 'keyword', {
            regex: {
                pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    'regex-source': {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: 'language-regex',
                        inside: D.languages.regex
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
                    inside: D.languages.javascript
                },
                {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: D.languages.javascript
                },
                {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: D.languages.javascript
                },
                {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: D.languages.javascript
                }
            ],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), D.languages.insertBefore('javascript', 'string', {
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
                            rest: D.languages.javascript
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
        }), D.languages.insertBefore('javascript', 'operator', {
            'literal-property': {
                pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                lookbehind: !0,
                alias: 'property'
            }
        }), D.languages.markup && (D.languages.markup.tag.addInlined('script', 'javascript'), D.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript')), D.languages.js = D.languages.javascript, D.languages.actionscript = D.languages.extend('javascript', {
            keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
            operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        }), D.languages.actionscript['class-name'].alias = 'function', delete D.languages.actionscript.parameter, delete D.languages.actionscript['literal-property'], D.languages.markup && D.languages.insertBefore('actionscript', 'string', {
            xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: D.languages.markup
            }
        }),
        function(E) {
            var F = /#(?!\{).+/,
                G = {
                    pattern: /#\{[^}]+\}/,
                    alias: 'variable'
                };
            E.languages.coffeescript = E.languages.extend('javascript', {
                comment: F,
                string: [{
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        greedy: !0
                    },
                    {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        greedy: !0,
                        inside: {
                            interpolation: G
                        }
                    }
                ],
                keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                'class-member': {
                    pattern: /@(?!\d)\w+/,
                    alias: 'variable'
                }
            }), E.languages.insertBefore('coffeescript', 'comment', {
                'multiline-comment': {
                    pattern: /###[\s\S]+?###/,
                    alias: 'comment'
                },
                'block-regex': {
                    pattern: /\/{3}[\s\S]*?\/{3}/,
                    alias: 'regex',
                    inside: {
                        comment: F,
                        interpolation: G
                    }
                }
            }), E.languages.insertBefore('coffeescript', 'string', {
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
                            inside: E.languages.javascript
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
                            interpolation: G
                        }
                    }
                ]
            }), E.languages.insertBefore('coffeescript', 'keyword', {
                property: /(?!\d)\w+(?=\s*:(?!:))/
            }), delete E.languages.coffeescript['template-string'], E.languages.coffee = E.languages.coffeescript;
        }(D),
        function(E) {
            var F = E.languages.javadoclike = {
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
            Object.defineProperty(F, 'addSupport', {
                value: function(G, H) {
                    (G = 'string' == typeof G ? [G] : G).forEach(function(I) {
                        var J = function(K) {
                                K.inside || (K.inside = {}), K.inside.rest = H;
                            },
                            K = 'doc-comment';
                        if (g = E.languages[I]) {
                            var L, M = L[K];
                            if ((M = M || (L = E.languages.insertBefore(I, 'comment', {
                                    'doc-comment': {
                                        pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                        lookbehind: !0,
                                        alias: 'comment'
                                    }
                                }))[K]) instanceof RegExp && (M = L[K] = {
                                    pattern: M
                                }), Array.isArray(M))
                                for (var N = 0, O = M.length; N < O; N++)
                                    M[N] instanceof RegExp && (M[N] = {
                                        pattern: M[N]
                                    }), J(M[N]);
                            else
                                J(M);
                        }
                    });
                }
            }), F.addSupport([
                'java',
                'javascript',
                'php'
            ], F);
        }(D),
        function(E) {
            var F = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            (F = (E.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + F.source + ')*?' + /(?:;|(?=\s*\{))/.source),
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
                    pattern: RegExp('\\burl\\((?:' + F.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp('^' + F.source + '$'),
                            alias: 'url'
                        }
                    }
                },
                selector: {
                    pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + F.source + ')*(?=\\s*\\{)'),
                    lookbehind: !0
                },
                string: {
                    pattern: F,
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
            }, E.languages.css.atrule.inside.rest = E.languages.css, E.languages.markup)) && (F.tag.addInlined('style', 'css'), F.tag.addAttribute('style', 'css'));
        }(D),
        function(E) {
            var F = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                G = (F = (E.languages.css.selector = {
                    pattern: E.languages.css.selector.pattern,
                    lookbehind: !0,
                    inside: F = {
                        'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        'pseudo-class': /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: RegExp('\\[(?:[^[\\]"\']|' + F.source + ')*\\]'),
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
                                    F,
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
                }, E.languages.css.atrule.inside['selector-function-argument'].inside = F, E.languages.insertBefore('css', 'property', {
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
            E.languages.insertBefore('css', 'function', {
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
                            unit: F,
                            number: G,
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }
                ],
                entity: /\\[\da-f]{1,8}/i,
                unit: F,
                number: G
            });
        }(D),
        function(E) {
            var F = /[*&][^\s[\]{},]+/,
                G = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                H = '(?:' + G.source + '(?:[ \t]+' + F.source + ')?|' + F.source + '(?:[ \t]+' + G.source + ')?)',
                I = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                }),
                J = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

            function K(L, M) {
                M = (M || '').replace(/m/g, '') + 'm';
                var N = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
                    return H;
                }).replace(/<<value>>/g, function() {
                    return L;
                });
                return RegExp(N, M);
            }
            E.languages.yaml = {
                scalar: {
                    pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
                        return H;
                    })),
                    lookbehind: !0,
                    alias: 'string'
                },
                comment: /#.*/,
                key: {
                    pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
                        return H;
                    }).replace(/<<key>>/g, function() {
                        return '(?:' + I + '|' + J + ')';
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
                    pattern: K(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                    lookbehind: !0,
                    alias: 'number'
                },
                boolean: {
                    pattern: K(/false|true/.source, 'i'),
                    lookbehind: !0,
                    alias: 'important'
                },
                null: {
                    pattern: K(/null|~/.source, 'i'),
                    lookbehind: !0,
                    alias: 'important'
                },
                string: {
                    pattern: K(J),
                    lookbehind: !0,
                    greedy: !0
                },
                number: {
                    pattern: K(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
                    lookbehind: !0
                },
                tag: G,
                important: F,
                punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
            }, E.languages.yml = E.languages.yaml;
        }(D),
        function(E) {
            var F = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

            function G(H) {
                return H = H.replace(/<inner>/g, function() {
                    return F;
                }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + H + ')');
            }
            var H = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                I = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
                    return H;
                }),
                J = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
                K = (E.languages.markdown = E.languages.extend('markup', {}), E.languages.insertBefore('markdown', 'prolog', {
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
                                inside: E.languages.yaml
                            }
                        }
                    },
                    blockquote: {
                        pattern: /^>(?:[\t ]*>)*/m,
                        alias: 'punctuation'
                    },
                    table: {
                        pattern: RegExp('^' + I + J + '(?:' + I + ')*', 'm'),
                        inside: {
                            'table-data-rows': {
                                pattern: RegExp('^(' + I + J + ')(?:' + I + ')*$'),
                                lookbehind: !0,
                                inside: {
                                    'table-data': {
                                        pattern: RegExp(H),
                                        inside: E.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            },
                            'table-line': {
                                pattern: RegExp('^(' + I + ')' + J + '$'),
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\||:?-{3,}:?/
                                }
                            },
                            'table-header-row': {
                                pattern: RegExp('^' + I + '$'),
                                inside: {
                                    'table-header': {
                                        pattern: RegExp(H),
                                        alias: 'important',
                                        inside: E.languages.markdown
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
                        pattern: G(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
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
                        pattern: G(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
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
                        pattern: G(/(~~?)(?:(?!~)<inner>)+\2/.source),
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
                        pattern: G(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
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
                ].forEach(function(L) {
                    [
                        'url',
                        'bold',
                        'italic',
                        'strike',
                        'code-snippet'
                    ].forEach(function(M) {
                        L !== M && (E.languages.markdown[L].inside.content.inside[M] = E.languages.markdown[M]);
                    });
                }), E.hooks.add('after-tokenize', function(L) {
                    'markdown' !== L.language && 'md' !== L.language || function L(M) {
                        if (M && 'string' != typeof M)
                            for (var N = 0, O = M.length; N < O; N++) {
                                var P, Q = M[N];
                                'code' !== Q.type ? L(Q.content) : (P = Q.content[1], Q = Q.content[3], P && Q && 'code-language' === P.type && 'code-block' === Q.type && 'string' == typeof P.content && (P = P.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'), P = 'language-' + (P = (/[a-z][\w-]*/i.exec(P) || [''])[0].toLowerCase()), Q.alias ? 'string' == typeof Q.alias ? Q.alias = [
                                    Q.alias,
                                    P
                                ] : Q.alias.push(P) : Q.alias = [P]));
                            }
                    }(L.tokens);
                }), E.hooks.add('wrap', function(L) {
                    if ('code-block' === L.type) {
                        for (var M = '', N = 0, O = L.classes.length; N < O; N++) {
                            var P = L.classes[N];
                            if (P = /language-(.+)/.exec(P)) {
                                M = P[1];
                                break;
                            }
                        }
                        var P, Q = E.languages[M];
                        Q ? L.content = E.highlight(L.content.replace(K, '').replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(R, S) {
                            var T;
                            return '#' === (S = S.toLowerCase())[0] ? (T = 'x' === S[1] ? parseInt(S.slice(2), 16) : Number(S.slice(1)), j(T)) : i[S] || R;
                        }), Q, M) : M && 'none' !== M && E.plugins.autoloader && (P = 'md-' + new Date().valueOf() + '-' + Math.floor(10000000000000000 * Math.random()), L.attributes.id = P, E.plugins.autoloader.loadLanguages(M, function() {
                            var R = document.getElementById(P);
                            R && (R.innerHTML = E.highlight(R.textContent, E.languages[M], M));
                        }));
                    }
                }), RegExp(E.languages.markup.tag.pattern.source, 'gi')),
                L = {
                    amp: '&',
                    lt: '<',
                    gt: '>',
                    quot: '"'
                },
                M = String.fromCodePoint || String.fromCharCode;
            E.languages.md = E.languages.markdown;
        }(D), D.languages.graphql = {
            comment: /#.*/,
            description: {
                pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                greedy: !0,
                alias: 'string',
                inside: {
                    'language-markdown': {
                        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                        lookbehind: !0,
                        inside: D.languages.markdown
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
        }, D.hooks.add('after-tokenize', function(E) {
            if ('graphql' === E.language)
                for (var F = E.tokens.filter(function(G) {
                        return 'string' != typeof G && 'comment' !== G.type && 'scalar' !== G.type;
                    }), G = 0; G < F.length;) {
                    var H = F[G++];
                    if ('keyword' === H.type && 'mutation' === H.content) {
                        var I = [];
                        if (m([
                                'definition-mutation',
                                'punctuation'
                            ]) && '(' === l(1).content) {
                            G += 2;
                            var J = n(/^\($/, /^\)$/);
                            if (-1 === J)
                                continue;
                            for (; G < J; G++) {
                                var K = l(0);
                                'variable' === K.type && (o(K, 'variable-input'), I.push(K.content));
                            }
                            G = J + 1;
                        }
                        if (m([
                                'punctuation',
                                'property-query'
                            ]) && '{' === l(0).content && (G++, o(l(0), 'property-mutation'), 0 < I.length)) {
                            var J = n(/^\{$/, /^\}$/);
                            if (-1 !== J)
                                for (var K = G; K < J; K++) {
                                    var L = F[K];
                                    'variable' === L.type && 0 <= I.indexOf(L.content) && o(L, 'variable-input');
                                }
                        }
                    }
                }

            function F(G) {
                return b[c + G];
            }

            function G(H, I) {
                I = I || 0;
                for (var J = 0; J < H.length; J++) {
                    var K = F(J + I);
                    if (!K || K.type !== H[J])
                        return;
                }
                return 1;
            }

            function H(I, J) {
                for (var K = 1, L = c; L < b.length; L++) {
                    var M = b[L],
                        N = M.content;
                    if ('punctuation' === M.type && 'string' == typeof N)
                        if (I.test(N))
                            K++;
                        else if (J.test(N) && 0 == --K)
                        return L;
                }
                return -1;
            }

            function I(J, K) {
                var L = J.alias;
                L ? Array.isArray(L) || (J.alias = L = [L]) : J.alias = L = [], L.push(K);
            }
        }), D.languages.sql = {
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
        function(E) {
            var F = E.languages.javascript['template-string'],
                G = F.pattern.source,
                H = F.inside.interpolation,
                I = H.inside['interpolation-punctuation'],
                J = H.pattern.source;

            function K(L, M) {
                if (E.languages[L])
                    return {
                        pattern: RegExp('((?:' + M + ')\\s*)' + G),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            'template-punctuation': {
                                pattern: /^`|`$/,
                                alias: 'string'
                            },
                            'embedded-code': {
                                pattern: /[\s\S]+/,
                                alias: L
                            }
                        }
                    };
            }

            function L(M, N, O) {
                return M = {
                    code: M,
                    grammar: N,
                    language: O
                }, E.hooks.run('before-tokenize', M), M.tokens = E.tokenize(M.code, M.grammar), E.hooks.run('after-tokenize', M), M.tokens;
            }

            function M(N, O, P) {
                var Q = E.tokenize(N, {
                        interpolation: {
                            pattern: RegExp(J),
                            lookbehind: !0
                        }
                    }),
                    R = 0,
                    S = {},
                    T = (Q = L(Q.map(function(U) {
                        if ('string' == typeof U)
                            return U;
                        var V, W;
                        for (U = U.content; - 1 !== N.indexOf((W = R++, V = '___' + P.toUpperCase() + '_' + W + '___')););
                        return S[V] = U, V;
                    }).join(''), O, P), Object.keys(S));
                return R = 0,
                    function N(U) {
                        for (var V = 0; V < U.length; V++) {
                            if (R >= T.length)
                                return;
                            var W, X, Y, Z, $, ab, bb, cb = U[V];
                            'string' == typeof cb || 'string' == typeof cb.content ? (W = T[R], -1 !== (bb = (ab = 'string' == typeof cb ? cb : cb.content).indexOf(W)) && (++R, X = ab.substring(0, bb), $ = S[W], Y = void 0, (Z = {})['interpolation-punctuation'] = I, 3 === (Z = E.tokenize($, Z)).length && ((Y = [
                                1,
                                1
                            ]).push.apply(Y, L(Z[1], E.languages.javascript, 'javascript')), Z.splice.apply(Z, Y)), Y = new E.Token('interpolation', Z, H.alias, $), Z = ab.substring(bb + W.length), $ = [], X && $.push(X), $.push(Y), Z && (N(ab = [Z]), $.push.apply($, ab)), 'string' == typeof cb ? (U.splice.apply(U, [
                                V,
                                1
                            ].concat($)), V += $.length - 1) : cb.content = $)) : (bb = cb.content, Array.isArray(bb) ? N(bb) : N([bb]));
                        }
                    }(Q), new E.Token(P, Q, 'language-' + P, N);
            }
            E.languages.javascript['template-string'] = [
                K('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),
                K('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
                K('svg', /\bsvg/.source),
                K('markdown', /\b(?:markdown|md)/.source),
                K('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
                K('sql', /\bsql/.source),
                F
            ].filter(Boolean);
            var N = {
                javascript: !0,
                js: !0,
                typescript: !0,
                ts: !0,
                jsx: !0,
                tsx: !0
            };

            function O(P) {
                return 'string' == typeof P ? P : Array.isArray(P) ? P.map(O).join('') : O(P.content);
            }
            E.hooks.add('after-tokenize', function(P) {
                P.language in N && function P(Q) {
                    for (var R = 0, S = Q.length; R < S; R++) {
                        var T, U, V, W = Q[R];
                        'string' != typeof W && (T = W.content, Array.isArray(T) ? 'template-string' === W.type ? (W = T[1], 3 === T.length && 'string' != typeof W && 'embedded-code' === W.type && (U = O(W), W = W.alias, W = Array.isArray(W) ? W[0] : W, V = E.languages[W]) && (T[1] = M(U, V, W))) : P(T) : 'string' != typeof T && P([T]));
                    }
                }(P.tokens);
            });
        }(D),
        function(E) {
            E.languages.typescript = E.languages.extend('javascript', {
                'class-name': {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
            }), E.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete E.languages.typescript.parameter, delete E.languages.typescript['literal-property'];
            var F = E.languages.extend('typescript', {});
            delete F['class-name'], E.languages.typescript['class-name'].inside = F, E.languages.insertBefore('typescript', 'function', {
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
                            inside: F
                        }
                    }
                }
            }), E.languages.ts = E.languages.typescript;
        }(D),
        function(E) {
            var F = E.languages.javascript,
                G = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
                H = '(@(?:arg|argument|param|property)\\s+(?:' + G + '\\s+)?)';
            E.languages.jsdoc = E.languages.extend('javadoclike', {
                parameter: {
                    pattern: RegExp(H + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }
            }), E.languages.insertBefore('jsdoc', 'keyword', {
                'optional-parameter': {
                    pattern: RegExp(H + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
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
                            inside: F,
                            alias: 'language-javascript'
                        },
                        punctuation: /[=[\]]/
                    }
                },
                'class-name': [{
                        pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
                            return G;
                        })),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    },
                    {
                        pattern: RegExp('(@[a-z]+\\s+)' + G),
                        lookbehind: !0,
                        inside: {
                            string: F.string,
                            number: F.number,
                            boolean: F.boolean,
                            keyword: E.languages.typescript.keyword,
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
                            inside: F,
                            alias: 'language-javascript'
                        }
                    }
                }
            }), E.languages.javadoclike.addSupport('javascript', E.languages.jsdoc);
        }(D),
        function(E) {
            E.languages.flow = E.languages.extend('javascript', {}), E.languages.insertBefore('flow', 'keyword', {
                type: [{
                    pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
                    alias: 'class-name'
                }]
            }), E.languages.flow['function-variable'].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete E.languages.flow.parameter, E.languages.insertBefore('flow', 'operator', {
                'flow-punctuation': {
                    pattern: /\{\||\|\}/,
                    alias: 'punctuation'
                }
            }), Array.isArray(E.languages.flow.keyword) || (E.languages.flow.keyword = [E.languages.flow.keyword]), E.languages.flow.keyword.unshift({
                pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
                lookbehind: !0
            }, {
                pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
                lookbehind: !0
            });
        }(D), D.languages.n4js = D.languages.extend('javascript', {
            keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
        }), D.languages.insertBefore('n4js', 'constant', {
            annotation: {
                pattern: /@+\w+/,
                alias: 'operator'
            }
        }), D.languages.n4jsd = D.languages.n4js,
        function(E) {
            function F(G, H) {
                return RegExp(G.replace(/<ID>/g, function() {
                    return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
                }), H);
            }
            E.languages.insertBefore('javascript', 'function-variable', {
                'method-variable': {
                    pattern: RegExp('(\\.\\s*)' + E.languages.javascript['function-variable'].pattern.source),
                    lookbehind: !0,
                    alias: [
                        'function-variable',
                        'method',
                        'function',
                        'property-access'
                    ]
                }
            }), E.languages.insertBefore('javascript', 'function', {
                method: {
                    pattern: RegExp('(\\.\\s*)' + E.languages.javascript.function.source),
                    lookbehind: !0,
                    alias: [
                        'function',
                        'property-access'
                    ]
                }
            }), E.languages.insertBefore('javascript', 'constant', {
                'known-class-name': [{
                        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                        alias: 'class-name'
                    },
                    {
                        pattern: /\b(?:[A-Z]\w*)Error\b/,
                        alias: 'class-name'
                    }
                ]
            }), E.languages.insertBefore('javascript', 'keyword', {
                imports: {
                    pattern: F(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                    lookbehind: !0,
                    inside: E.languages.javascript
                },
                exports: {
                    pattern: F(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                    lookbehind: !0,
                    inside: E.languages.javascript
                }
            }), E.languages.javascript.keyword.unshift({
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
            }), E.languages.insertBefore('javascript', 'operator', {
                spread: {
                    pattern: /\.{3}/,
                    alias: 'operator'
                },
                arrow: {
                    pattern: /=>/,
                    alias: 'operator'
                }
            }), E.languages.insertBefore('javascript', 'punctuation', {
                'property-access': {
                    pattern: F(/(\.\s*)#?<ID>/.source),
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
            for (var G = [
                    'function',
                    'function-variable',
                    'method',
                    'method-variable',
                    'property-access'
                ], H = 0; H < G.length; H++) {
                var I = G[H],
                    J = E.languages.javascript[I];
                I = (J = 'RegExp' === E.util.type(J) ? E.languages.javascript[I] = {
                    pattern: J
                } : J).inside || {};
                (J.inside = I)['maybe-class-name'] = /^[A-Z][\s\S]*/;
            }
        }(D),
        function(E) {
            var F = E.util.clone(E.languages.javascript),
                G = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                H = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                I = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

            function J(K, L) {
                return K = K.replace(/<S>/g, function() {
                    return G;
                }).replace(/<BRACES>/g, function() {
                    return H;
                }).replace(/<SPREAD>/g, function() {
                    return I;
                }), RegExp(K, L);
            }

            function K(L) {
                for (var M = [], N = 0; N < L.length; N++) {
                    var O = L[N],
                        P = !1;
                    'string' != typeof O && ('tag' === O.type && O.content[0] && 'tag' === O.content[0].type ? '</' === O.content[0].content[0].content ? 0 < M.length && M[M.length - 1].tagName === i(O.content[0].content[1]) && M.pop() : '/>' !== O.content[O.content.length - 1].content && M.push({
                        tagName: i(O.content[0].content[1]),
                        openedBraces: 0
                    }) : 0 < M.length && 'punctuation' === O.type && '{' === O.content ? M[M.length - 1].openedBraces++ : 0 < M.length && 0 < M[M.length - 1].openedBraces && 'punctuation' === O.type && '}' === O.content ? M[M.length - 1].openedBraces-- : P = !0), (P || 'string' == typeof O) && 0 < M.length && 0 === M[M.length - 1].openedBraces && (P = i(O), N < L.length - 1 && ('string' == typeof L[N + 1] || 'plain-text' === L[N + 1].type) && (P += i(L[N + 1]), L.splice(N + 1, 1)), 0 < N && ('string' == typeof L[N - 1] || 'plain-text' === L[N - 1].type) && (P = i(L[N - 1]) + P, L.splice(N - 1, 1), N--), L[N] = new E.Token('plain-text', P, null, P)), O.content && 'string' != typeof O.content && K(O.content);
                }
            }
            I = J(I).source, E.languages.jsx = E.languages.extend('markup', F), E.languages.jsx.tag.pattern = J(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), E.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, E.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, E.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, E.languages.jsx.tag.inside.comment = F.comment, E.languages.insertBefore('inside', 'attr-name', {
                spread: {
                    pattern: J(/<SPREAD>/.source),
                    inside: E.languages.jsx
                }
            }, E.languages.jsx.tag), E.languages.insertBefore('inside', 'special-attr', {
                script: {
                    pattern: J(/=<BRACES>/.source),
                    alias: 'language-javascript',
                    inside: {
                        'script-punctuation': {
                            pattern: /^=(?=\{)/,
                            alias: 'punctuation'
                        },
                        rest: E.languages.jsx
                    }
                }
            }, E.languages.jsx.tag);
            var L = function(M) {
                return M ? 'string' == typeof M ? M : 'string' == typeof M.content ? M.content : M.content.map(L).join('') : '';
            };
            E.hooks.add('after-tokenize', function(M) {
                'jsx' !== M.language && 'tsx' !== M.language || K(M.tokens);
            });
        }(D),
        function(E) {
            var F = E.util.clone(E.languages.typescript);
            (F = (E.languages.tsx = E.languages.extend('jsx', F), delete E.languages.tsx.parameter, delete E.languages.tsx['literal-property'], E.languages.tsx.tag)).pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + F.pattern.source + ')', F.pattern.flags), F.lookbehind = !0;
        }(D), D.languages.swift = {
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
        }, D.languages.swift['string-literal'].forEach(function(E) {
            E.inside.interpolation.inside = D.languages.swift;
        }),
        function(E) {
            E.languages.kotlin = E.languages.extend('clike', {
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
            }), delete E.languages.kotlin['class-name'];
            var F = {
                'interpolation-punctuation': {
                    pattern: /^\$\{?|\}$/,
                    alias: 'punctuation'
                },
                expression: {
                    pattern: /[\s\S]+/,
                    inside: E.languages.kotlin
                }
            };
            E.languages.insertBefore('kotlin', 'string', {
                'string-literal': [{
                        pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                        alias: 'multiline',
                        inside: {
                            interpolation: {
                                pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                                inside: F
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
                                inside: F
                            },
                            string: /[\s\S]+/
                        }
                    }
                ],
                char: {
                    pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
                    greedy: !0
                }
            }), delete E.languages.kotlin.string, E.languages.insertBefore('kotlin', 'keyword', {
                annotation: {
                    pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                    alias: 'builtin'
                }
            }), E.languages.insertBefore('kotlin', 'function', {
                label: {
                    pattern: /\b\w+@|@\w+\b/,
                    alias: 'symbol'
                }
            }), E.languages.kt = E.languages.kotlin, E.languages.kts = E.languages.kotlin;
        }(D), D.languages.c = D.languages.extend('clike', {
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
        }), D.languages.insertBefore('c', 'string', {
            char: {
                pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                greedy: !0
            }
        }), D.languages.insertBefore('c', 'string', {
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
                        D.languages.c.string
                    ],
                    char: D.languages.c.char,
                    comment: D.languages.c.comment,
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
                        inside: D.languages.c
                    }
                }
            }
        }), D.languages.insertBefore('c', 'function', {
            constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
        }), delete D.languages.c.boolean, D.languages.objectivec = D.languages.extend('c', {
            string: {
                pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                greedy: !0
            },
            keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
        }), delete D.languages.objectivec['class-name'], D.languages.objc = D.languages.objectivec, D.languages.reason = D.languages.extend('clike', {
            string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                greedy: !0
            },
            'class-name': /\b[A-Z]\w*/,
            keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
            operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
        }), D.languages.insertBefore('reason', 'class-name', {
            char: {
                pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                greedy: !0
            },
            constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
            label: {
                pattern: /\b[a-z]\w*(?=::)/,
                alias: 'symbol'
            }
        }), delete D.languages.reason.function,
        function(E) {
            for (var F = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, G = 0; G < 2; G++)
                F = F.replace(/<self>/g, function() {
                    return F;
                });
            F = F.replace(/<self>/g, function() {
                return /[^\s\S]/.source;
            }), E.languages.rust = {
                comment: [{
                        pattern: RegExp(/(^|[^\\])/.source + F),
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
            }, E.languages.rust['closure-params'].inside.rest = E.languages.rust, E.languages.rust.attribute.inside.string = E.languages.rust.string;
        }(D), D.languages.go = D.languages.extend('clike', {
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
        }), D.languages.insertBefore('go', 'string', {
            char: {
                pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
                greedy: !0
            }
        }), delete D.languages.go['class-name'],
        function(E) {
            var F = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                G = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
                    return F.source;
                });
            E.languages.cpp = E.languages.extend('c', {
                'class-name': [{
                        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
                            return F.source;
                        })),
                        lookbehind: !0
                    },
                    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
                    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
                    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
                ],
                keyword: F,
                number: {
                    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                    greedy: !0
                },
                operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                boolean: /\b(?:false|true)\b/
            }), E.languages.insertBefore('cpp', 'string', {
                module: {
                    pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
                        return G;
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
            }), E.languages.insertBefore('cpp', 'keyword', {
                'generic-function': {
                    pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                    inside: {
                        function: /^\w+/,
                        generic: {
                            pattern: /<[\s\S]+/,
                            alias: 'class-name',
                            inside: E.languages.cpp
                        }
                    }
                }
            }), E.languages.insertBefore('cpp', 'operator', {
                'double-colon': {
                    pattern: /::/,
                    alias: 'punctuation'
                }
            }), E.languages.insertBefore('cpp', 'class-name', {
                'base-clause': {
                    pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: E.languages.extend('cpp', {})
                }
            }), E.languages.insertBefore('inside', 'double-colon', {
                'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
            }, E.languages.cpp['base-clause']);
        }(D), D.languages.python = {
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
        }, D.languages.python['string-interpolation'].inside.interpolation.inside.rest = D.languages.python, D.languages.py = D.languages.python, D.languages.json = {
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
        }, D.languages.webmanifest = D.languages.json;
    var E = {};
    ((d, b) => {
        for (var F in b)
            p(d, F, {
                get: b[F],
                enumerable: !0
            });
    })(E, {
        dracula: () => _F,
        duotoneDark: () => _G,
        duotoneLight: () => _H,
        github: () => _I,
        gruvboxMaterialDark: () => _Z,
        gruvboxMaterialLight: () => _$,
        jettwaveDark: () => _V,
        jettwaveLight: () => _W,
        nightOwl: () => _J,
        nightOwlLight: () => _K,
        oceanicNext: () => _N,
        okaidia: () => _O,
        oneDark: () => _X,
        oneLight: () => _Y,
        palenight: () => _P,
        shadesOfPurple: () => _Q,
        synthwave84: () => _R,
        ultramin: () => _S,
        vsDark: () => _T,
        vsLight: () => _U
    });
    var _F = {
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
        _G = {
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
        _H = {
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
        _I = {
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
        _J = {
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
        _K = {
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
        L = '#c5a5c5',
        M = '#8dc891',
        _N = {
            plain: {
                backgroundColor: '#282c34',
                color: '#ffffff'
            },
            styles: [{
                    types: ['attr-name'],
                    style: {
                        color: L
                    }
                },
                {
                    types: ['attr-value'],
                    style: {
                        color: M
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
                        color: M
                    }
                },
                {
                    types: ['punctuation'],
                    style: {
                        color: M
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
                        color: L
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
        _O = {
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
        _P = {
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
        _Q = {
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
        _R = {
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
        _S = {
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
        _T = {
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
        _U = {
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
        _V = {
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
        _W = {
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
        _X = {
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
        _Y = {
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
        _Z = {
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
        _$ = {
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
        ab = (d, b) => {
            const {
                plain: bb
            } = d, cb = d.styles.reduce((d, bb) => {
                const {
                    languages: db,
                    style: eb
                } = bb;
                return db && !db.includes(b) || bb.types.forEach(b => {
                    const fb = z(z({}, d[b]), eb);
                    d[b] = fb;
                }), d;
            }, {});
            return cb.root = bb, cb.plain = A(z({}, bb), {
                backgroundColor: void 0
            }), cb;
        },
        bb = /\r\n|\r|\n/,
        cb = d => {
            0 === d.length ? d.push({
                types: ['plain'],
                content: '\n',
                empty: !0
            }) : 1 === d.length && '' === d[0].content && (d[0].content = '\n', d[0].empty = !0);
        },
        db = (d, b) => {
            const eb = d.length;
            return eb > 0 && d[eb - 1] === b ? d : d.concat(b);
        },
        eb = d => {
            const fb = [
                    []
                ],
                gb = [d],
                hb = [0],
                ib = [d.length];
            let jb = 0,
                kb = 0,
                lb = [];
            const mb = [lb];
            for (; kb > -1;) {
                for (;
                    (jb = hb[kb]++) < ib[kb];) {
                    let nb, ob = fb[kb];
                    const pb = gb[kb][jb];
                    if ('string' == typeof pb ? (ob = kb > 0 ? ob : ['plain'], nb = pb) : (ob = db(ob, pb.type), pb.alias && (ob = db(ob, pb.alias)), nb = pb.content), 'string' != typeof nb) {
                        kb++, fb.push(ob), gb.push(nb), hb.push(0), ib.push(nb.length);
                        continue;
                    }
                    const qb = nb.split(bb),
                        rb = qb.length;
                    lb.push({
                        types: ob,
                        content: qb[0]
                    });
                    for (let sb = 1; sb < rb; sb++)
                        cb(lb), mb.push(lb = []), lb.push({
                            types: ob,
                            content: qb[sb]
                        });
                }
                kb--, fb.pop(), gb.pop(), hb.pop(), ib.pop();
            }
            return cb(lb), mb;
        },
        fb = ({
            children: gb,
            language: hb,
            code: ib,
            theme: jb,
            prism: kb
        }) => {
            const lb = hb.toLowerCase(),
                mb = ((gb, hb) => {
                    const [nb, ob] = (0, m.useState)(ab(hb, gb)), pb = (0, m.useRef)(), qb = (0, m.useRef)();
                    return (0, m.useEffect)(() => {
                        hb === pb.current && gb === qb.current || (pb.current = hb, qb.current = gb, ob(ab(hb, gb)));
                    }, [
                        gb,
                        hb
                    ]), nb;
                })(lb, jb),
                nb = (gb => (0, m.useCallback)(hb => {
                    var ob = hb,
                        {
                            className: pb,
                            style: qb,
                            line: rb
                        } = ob,
                        sb = B(ob, [
                            'className',
                            'style',
                            'line'
                        ]);
                    const tb = A(z({}, sb), {
                        className: (0, n.default)('token-line', pb)
                    });
                    return 'object' == typeof gb && 'plain' in gb && (tb.style = gb.plain), 'object' == typeof qb && (tb.style = z(z({}, tb.style || {}), qb)), tb;
                }, [gb]))(mb),
                ob = (gb => {
                    const pb = (0, m.useCallback)(({
                        types: qb,
                        empty: rb
                    }) => {
                        if (null != gb)
                            return 1 === qb.length && 'plain' === qb[0] ? null != rb ? {
                                display: 'inline-block'
                            } : void 0 : 1 === qb.length && null != rb ? gb[qb[0]] : Object.assign(null != rb ? {
                                display: 'inline-block'
                            } : {}, ...qb.map(qb => gb[qb]));
                    }, [gb]);
                    return (0, m.useCallback)(gb => {
                        var sb = gb,
                            {
                                token: tb,
                                className: ub,
                                style: vb
                            } = sb,
                            wb = B(sb, [
                                'token',
                                'className',
                                'style'
                            ]);
                        const xb = A(z({}, wb), {
                            className: (0, n.default)('token', ...tb.types, ub),
                            children: tb.content,
                            style: qb(tb)
                        });
                        return null != vb && (xb.style = z(z({}, xb.style || {}), vb)), xb;
                    }, [qb]);
                })(mb),
                pb = (({
                    prism: qb,
                    code: rb,
                    grammar: sb,
                    language: tb
                }) => {
                    const ub = (0, m.useRef)(qb);
                    return (0, m.useMemo)(() => {
                        if (null == sb)
                            return eb([rb]);
                        const vb = {
                            code: rb,
                            grammar: sb,
                            language: tb,
                            tokens: []
                        };
                        return ub.current.hooks.run('before-tokenize', vb), vb.tokens = ub.current.tokenize(rb, sb), ub.current.hooks.run('after-tokenize', vb), eb(vb.tokens);
                    }, [
                        rb,
                        sb,
                        tb
                    ]);
                })({
                    prism: kb,
                    language: lb,
                    code: sb,
                    grammar: kb.languages[lb]
                });
            return qb({
                tokens: pb,
                className: `prism-code language-${ lb }`,
                style: null != mb ? mb.root : {},
                getLineProps: nb,
                getTokenProps: ob
            });
        },
        _lb = gb => (0, m.createElement)(fb, A(z({}, gb), {
            prism: gb.prism || D,
            theme: gb.theme || _T,
            code: gb.code,
            language: gb.language
        }));
}), c.register('LlZ3Z', function(d, e) {
    function f(g) {
        var h, i, j = '';
        if ('string' == typeof g || 'number' == typeof g)
            j += g;
        else if ('object' == typeof g)
            if (Array.isArray(g)) {
                var k = g.length;
                for (h = 0; h < k; h++)
                    g[h] && (i = f(g[h])) && (j && (j += ' '), j += i);
            } else
                for (i in g)
                    g[i] && (j && (j += ' '), j += i);
        return j;
    }
    b(d.exports, 'default', function() {
        return _g;
    });
    var _g = function() {
        for (var h, i, j = 0, k = '', l = arguments.length; j < l; j++)
            (h = arguments[j]) && (i = f(h)) && (k && (k += ' '), k += i);
        return k;
    };
}), c.register('wVBJh', function(d, e) {
    b(d.exports, 'useEditable', function() {
        return _m;
    });
    var f = c('O0Kav'),
        g = {
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        };

    function h(i) {
        var j = window.getSelection();
        j.empty(), j.addRange(i);
    }

    function i(j) {
        return (j.metaKey || j.ctrlKey) && !j.altKey && 'KeyZ' === j.code;
    }

    function j(k) {
        k = [k.firstChild];
        for (var l, m = ''; l = k.pop();)
            l.nodeType === Node.TEXT_NODE ? m += l.textContent : l.nodeType === Node.ELEMENT_NODE && 'BR' === l.nodeName && (m += '\n'), l.nextSibling && k.push(l.nextSibling), l.firstChild && k.push(l.firstChild);
        return '\n' !== m[m.length - 1] && (m += '\n'), m;
    }

    function k(l) {
        var m = window.getSelection().getRangeAt(0),
            n = m.collapsed ? 0 : m.toString().length,
            o = document.createRange();
        return o.setStart(l, 0), o.setEnd(m.startContainer, m.startOffset), {
            position: l = (o = o.toString()).length,
            extent: n,
            content: o = (o = o.split('\n'))[m = o.length - 1],
            line: m
        };
    }

    function l(m, n, o) {
        0 >= n && (n = 0), (!o || 0 > o) && (o = n);
        var p = document.createRange();
        m = [m.firstChild];
        for (var q, r = 0, s = n; q = m[m.length - 1];) {
            if (q.nodeType === Node.TEXT_NODE) {
                if (r + q.textContent.length >= s) {
                    var t = s - r;
                    if (s === n) {
                        if (s = p, t < q.textContent.length ? s.setStart(q, t) : s.setStartAfter(q), o !== n) {
                            s = o;
                            continue;
                        }
                        break;
                    }
                    n = p, t < (o = q).textContent.length ? n.setEnd(o, t) : n.setEndAfter(o);
                    break;
                }
                r += q.textContent.length;
            } else if (q.nodeType === Node.ELEMENT_NODE && 'BR' === q.nodeName) {
                if (r + 1 >= s) {
                    if (s === n) {
                        if (i = p, 0 < q.textContent.length ? i.setStart(q, 0) : i.setStartAfter(q), o !== n) {
                            s = o;
                            continue;
                        }
                        break;
                    }
                    n = p, 0 < (o = q).textContent.length ? n.setEnd(o, 0) : n.setEndAfter(o);
                    break;
                }
                r++;
            }
            m.pop(), q.nextSibling && m.push(q.nextSibling), q.firstChild && m.push(q.firstChild);
        }
        return p;
    }

    function _m(n, o, p) {
        function q(r) {
            var s = n.current;
            if (s) {
                var t = k(s);
                s = j(s), t.position += r.length - s.length, _w.position = t, _w.onChange(r, t);
            }
        }

        function r(s, t) {
            var u = n.current;
            if (u) {
                var v = window.getSelection().getRangeAt(0);
                v.deleteContents(), v.collapse();
                var w = t || 0;
                (v = l(u, t = (v = k(u)).position + (0 > w ? w : 0), v.position + (0 < w ? w : 0))).deleteContents(), s && v.insertNode(document.createTextNode(s)), h(l(u, t + s.length));
            }
        }

        function s(t) {
            var u = n.current;
            if (u) {
                u.focus();
                var v = 0;
                if ('number' == typeof t)
                    v = t;
                else {
                    var w = j(u).split('\n').slice(0, t.row);
                    t.row && (v += w.join('\n').length + 1), v += t.column;
                }
                h(l(u, v));
            }
        }

        function t() {
            var u = n.current;
            return {
                text: j(u),
                position: u = k(u)
            };
        }

        function u() {
            _w.observer.disconnect();
        }
        p || (p = {});
        var v = (0, f.useState)([])[1],
            _w = (0, f.useState)(function() {
                var x = {
                    observer: null,
                    disconnected: !1,
                    onChange: o,
                    queue: [],
                    history: [],
                    historyAt: -1,
                    position: null
                };
                return 'undefined' != typeof MutationObserver && (x.observer = new MutationObserver(function(y) {
                    var z;
                    (z = x.queue).push.apply(z, y);
                })), x;
            })[0],
            x = (0, f.useMemo)(function() {
                return {
                    update: q,
                    insert: r,
                    move: s,
                    getState: t
                };
            }, []);
        return 'object' != typeof navigator || ((0, f.useLayoutEffect)(function() {
            if (_w.onChange = o, n.current && !p.disabled) {
                if (_w.disconnected = !1, _w.observer.observe(n.current, g), _w.position) {
                    var y = _w.position,
                        z = y.position;
                    h(l(n.current, z, z + y.extent));
                }
                return u;
            }
        }), (0, f.useLayoutEffect)(function() {
            if (n.current && !p.disabled) {
                var y = n.current;
                if (_w.position) {
                    y.focus();
                    var z = _w.position,
                        A = z.position;
                    h(l(y, A, A + z.extent));
                }
                var z = y.style.whiteSpace,
                    A = y.contentEditable,
                    B = !0;
                try {
                    y.contentEditable = 'plaintext-only';
                } catch (n) {
                    y.contentEditable = 'true', B = !1;
                }
                'pre' !== z && (y.style.whiteSpace = 'pre-wrap'), p.indentation && (y.style.tabSize = y.style.MozTabSize = '' + p.indentation), q = '' + ' '.repeat(p.indentation || 0);
                var C, D = new RegExp('^(?:' + q + ')'),
                    E = new RegExp('^(?:' + q + ')*(' + q + ')$'),
                    F = function(G) {
                        if (n.current && _w.position) {
                            var H = j(y),
                                I = k(y),
                                J = new Date().valueOf(),
                                K = _w.history[_w.historyAt];
                            !G && 500 > J - C || K && K[1] === H ? C = J : (G = ++_w.historyAt, _w.history[G] = [
                                I,
                                H
                            ], _w.history.splice(G + 1), 500 < G && (_w.historyAt--, _w.history.shift()));
                        }
                    },
                    G = function() {
                        var H;
                        if ((H = _w.queue).push.apply(H, _w.observer.takeRecords()), H = k(y), _w.queue.length) {
                            _w.observer.disconnect(), _w.disconnected = !0;
                            var I, J, K = j(y);
                            for (_w.position = H; I = _w.queue.pop();) {
                                for (null !== I.oldValue && (I.target.textContent = I.oldValue), J = I.removedNodes.length - 1; 0 <= J; J--)
                                    I.target.insertBefore(I.removedNodes[J], I.nextSibling);
                                for (J = I.addedNodes.length - 1; 0 <= J; J--)
                                    I.addedNodes[J].parentNode && I.target.removeChild(I.addedNodes[J]);
                            }
                            _w.onChange(K, H);
                        }
                    },
                    H = function(I) {
                        if (!I.defaultPrevented && I.target === y) {
                            if (_w.disconnected)
                                return I.preventDefault(), v([]);
                            if (i(I))
                                I.preventDefault(), I.shiftKey ? (I = ++_w.historyAt, (I = _w.history[I]) || (_w.historyAt = _w.history.length - 1)) : (I = --_w.historyAt, (I = _w.history[I]) || (_w.historyAt = 0)), I && (_w.observer.disconnect(), _w.disconnected = !0, _w.position = I[0], _w.onChange(I[1], I[0]));
                            else {
                                if (F(), 'Enter' === I.key) {
                                    I.preventDefault();
                                    var J = k(y),
                                        K = /\S/g.exec(J.content);
                                    J = '\n' + J.content.slice(0, K ? K.index : J.content.length), x.insert(J);
                                } else if (B && !p.indentation || 'Backspace' !== I.key) {
                                    if (p.indentation && 'Tab' === I.key) {
                                        I.preventDefault(), f = (q = k(y)).position - q.content.length;
                                        var J = j(y);
                                        q = I.shiftKey ? J.slice(0, f) + q.content.replace(D, '') + J.slice(f + q.content.length) : J.slice(0, f) + (p.indentation ? ' '.repeat(p.indentation) : '\t') + J.slice(f), x.update(q);
                                    }
                                } else
                                    I.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (q = k(y), q = E.exec(q.content), x.insert('', q ? -q[1].length : -1)) : x.insert('', 0);
                                I.repeat && G();
                            }
                        }
                    },
                    I = function(J) {
                        J.defaultPrevented || J.isComposing || (i(J) || F(), G(), y.focus());
                    },
                    J = function(K) {
                        _w.position = window.getSelection().rangeCount && K.target === y ? k(y) : null;
                    },
                    K = function(L) {
                        L.preventDefault(), F(!0), x.insert(L.clipboardData.getData('text/plain')), F(!0), G();
                    };
                return document.addEventListener('selectstart', J), window.addEventListener('keydown', H), y.addEventListener('paste', K), y.addEventListener('keyup', I),
                    function() {
                        document.removeEventListener('selectstart', J), window.removeEventListener('keydown', H), y.removeEventListener('paste', K), y.removeEventListener('keyup', I), y.style.whiteSpace = z, y.contentEditable = A;
                    };
            }
            _w.history.length = 0, _w.historyAt = -1;
        }, [
            n.current,
            p.disabled,
            p.indentation
        ])), x;
    }
}), c.register('0zQ41', function(d, e) {
    b(d.exports, 'transform', function() {
        return _p;
    });
    var f = c('PCxn6'),
        g = c('Lm4Jx'),
        h = c('1IWfv'),
        i = c('JJuKw'),
        j = c('SM7Hn'),
        k = c('Gy9Bg'),
        l = c('ysi7r'),
        m = c('TyHnW'),
        n = c('33+cu'),
        o = (c('9XITR'), c('kEa05'));

    function _p(q, r) {
        (0, k.validateOptions)(r);
        try {
            const s = _q(q, r),
                t = new(0, n.default)(s, r.transforms, Boolean(r.enableLegacyBabel5ModuleInterop), r).transform();
            let u = {
                code: t.code
            };
            if (r.sourceMapOptions) {
                if (!r.filePath)
                    throw new Error('filePath must be specified when generating a source map.');
                u = {
                    ...u,
                    sourceMap: (0, g.default)(t, r.filePath, r.sourceMapOptions, q, s.tokenProcessor.tokens)
                };
            }
            return u;
        } catch (q) {
            throw r.filePath && (q.message = `Error transforming ${ r.filePath }: ${ q.message }`), q;
        }
    }

    function _q(r, s) {
        const t = s.transforms.includes('jsx'),
            u = s.transforms.includes('typescript'),
            v = s.transforms.includes('flow'),
            w = !0 === s.disableESTransforms,
            x = (0, l.parse)(r, t, u, v),
            y = x.tokens,
            z = x.scopes,
            A = new(0, j.default)(r, y),
            B = new(0, h.HelperManager)(A),
            C = new(0, m.default)(r, y, v, w, B),
            D = Boolean(s.enableLegacyTypeScriptModuleInterop);
        let E = null;
        return s.transforms.includes('imports') ? (E = new(0, f.default)(A, C, D, s, s.transforms.includes('typescript'), Boolean(s.keepUnusedImports), B), E.preprocessTokens(), (0, i.default)(C, z, E.getGlobalNames()), s.transforms.includes('typescript') && !s.keepUnusedImports && E.pruneTypeOnlyImports()) : s.transforms.includes('typescript') && !s.keepUnusedImports && (0, i.default)(C, z, (0, o.default)(C)), {
            tokenProcessor: C,
            scopes: z,
            nameManager: A,
            importProcessor: E,
            helperManager: B
        };
    }
}), c.register('PCxn6', function(d, e) {
    b(d.exports, 'default', function() {
        return _k;
    });
    var f = c('SGA4o'),
        g = c('pvm6x'),
        h = c('PmE4s'),
        i = c('Beerk'),
        j = c('bK1n9');
    class _k {
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
            for (let l = 0; l < this.tokens.tokens.length; l++)
                this.tokens.matches1AtIndex(l, h.TokenType._import) && !this.tokens.matches3AtIndex(l, h.TokenType._import, h.TokenType.name, h.TokenType.eq) && this.preprocessImportAtIndex(l), this.tokens.matches1AtIndex(l, h.TokenType._export) && !this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType.eq) && this.preprocessExportAtIndex(l);
            this.generateImportReplacements();
        }
        pruneTypeOnlyImports() {
            this.nonTypeIdentifiers = (0, j.getNonTypeIdentifiers)(this.tokens, this.options);
            for (const [l, m] of this.importInfoByPath.entries()) {
                if (m.hasBareImport || m.hasStarExport || m.exportStarNames.length > 0 || m.namedExports.length > 0)
                    continue;
                [
                    ...m.defaultNames,
                    ...m.wildcardNames,
                    ...m.namedImports.map(({
                        localName: n
                    }) => n)
                ].every(n => this.shouldAutomaticallyElideImportedName(n)) && this.importsToReplace.set(n, '');
            }
        }
        shouldAutomaticallyElideImportedName(l) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(l);
        }
        generateImportReplacements() {
            for (const [l, m] of this.importInfoByPath.entries()) {
                const {
                    defaultNames: n,
                    wildcardNames: o,
                    namedImports: p,
                    namedExports: q,
                    exportStarNames: r,
                    hasStarExport: s
                } = m;
                if (0 === n.length && 0 === o.length && 0 === p.length && 0 === q.length && 0 === r.length && !s) {
                    this.importsToReplace.set(l, `require('${ l }');`);
                    continue;
                }
                const t = this.getFreeIdentifierForPath(l);
                let u;
                u = this.enableLegacyTypeScriptModuleInterop ? t : o.length > 0 ? o[0] : this.getFreeIdentifierForPath(l);
                let v = `var ${ t } = require('${ l }');`;
                if (o.length > 0)
                    for (const w of o) {
                        v += ` var ${ w } = ${ this.enableLegacyTypeScriptModuleInterop ? t : `${ this.helperManager.getHelperName('interopRequireWildcard') }(${ t })` };`;
                    }
                else
                    r.length > 0 && u !== t ? v += ` var ${ u } = ${ this.helperManager.getHelperName('interopRequireWildcard') }(${ t });` : n.length > 0 && u !== t && (v += ` var ${ u } = ${ this.helperManager.getHelperName('interopRequireDefault') }(${ t });`);
                for (const {
                        importedName: w,
                        localName: x
                    }
                    of q)
                    v += ` ${ this.helperManager.getHelperName('createNamedExportFrom') }(${ t }, '${ x }', '${ w }');`;
                for (const y of r)
                    v += ` exports.${ y } = ${ u };`;
                s && (v += ` ${ this.helperManager.getHelperName('createStarExport') }(${ t });`), this.importsToReplace.set(y, v);
                for (const z of n)
                    this.identifierReplacements.set(z, `${ u }.default`);
                for (const {
                        importedName: A,
                        localName: B
                    }
                    of p)
                    this.identifierReplacements.set(B, `${ t }.${ A }`);
            }
        }
        getFreeIdentifierForPath(l) {
            const m = l.split('/'),
                n = m[m.length - 1].replace(/\W/g, '');
            return this.nameManager.claimFreeName(`_${ n }`);
        }
        preprocessImportAtIndex(l) {
            const m = [],
                n = [],
                o = [];
            if (l++, (this.tokens.matchesContextualAtIndex(l, g.ContextualKeyword._type) || this.tokens.matches1AtIndex(l, h.TokenType._typeof)) && !this.tokens.matches1AtIndex(l + 1, h.TokenType.comma) && !this.tokens.matchesContextualAtIndex(l + 1, g.ContextualKeyword._from))
                return;
            if (this.tokens.matches1AtIndex(l, h.TokenType.parenL))
                return;
            if (this.tokens.matches1AtIndex(l, h.TokenType.name) && (m.push(this.tokens.identifierNameAtIndex(l)), l++, this.tokens.matches1AtIndex(l, h.TokenType.comma) && l++), this.tokens.matches1AtIndex(l, h.TokenType.star) && (l += 2, n.push(this.tokens.identifierNameAtIndex(l)), l++), this.tokens.matches1AtIndex(l, h.TokenType.braceL)) {
                const p = this.getNamedImports(l + 1);
                l = p.newIndex;
                for (const q of p.namedImports)
                    'default' === q.importedName ? m.push(q.localName) : o.push(q);
            }
            if (this.tokens.matchesContextualAtIndex(l, g.ContextualKeyword._from) && l++, !this.tokens.matches1AtIndex(l, h.TokenType.string))
                throw new Error('Expected string token at the end of import statement.');
            const p = this.tokens.stringValueAtIndex(l),
                q = this.getImportInfo(p);
            q.defaultNames.push(...m), q.wildcardNames.push(...n), q.namedImports.push(...o), 0 === m.length && 0 === n.length && 0 === o.length && (q.hasBareImport = !0);
        }
        preprocessExportAtIndex(l) {
            if (this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType._var) || this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType._let) || this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType._const))
                this.preprocessVarExportAtIndex(l);
            else if (this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType._function) || this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType._class)) {
                const m = this.tokens.identifierNameAtIndex(l + 2);
                this.addExportBinding(m, m);
            } else if (this.tokens.matches3AtIndex(l, h.TokenType._export, h.TokenType.name, h.TokenType._function)) {
                const m = this.tokens.identifierNameAtIndex(l + 3);
                this.addExportBinding(m, m);
            } else
                this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType.braceL) ? this.preprocessNamedExportAtIndex(l) : this.tokens.matches2AtIndex(l, h.TokenType._export, h.TokenType.star) && this.preprocessExportStarAtIndex(l);
        }
        preprocessVarExportAtIndex(l) {
            let m = 0;
            for (let n = l + 2;; n++)
                if (this.tokens.matches1AtIndex(n, h.TokenType.braceL) || this.tokens.matches1AtIndex(n, h.TokenType.dollarBraceL) || this.tokens.matches1AtIndex(n, h.TokenType.bracketL))
                    m++;
                else if (this.tokens.matches1AtIndex(n, h.TokenType.braceR) || this.tokens.matches1AtIndex(n, h.TokenType.bracketR))
                m--;
            else {
                if (0 === m && !this.tokens.matches1AtIndex(n, h.TokenType.name))
                    break;
                if (this.tokens.matches1AtIndex(1, h.TokenType.eq)) {
                    const o = this.tokens.currentToken().rhsEndIndex;
                    if (null == o)
                        throw new Error('Expected = token with an end index.');
                    n = o - 1;
                } else {
                    const o = this.tokens.tokens[n];
                    if ((0, f.isDeclaration)(o)) {
                        const p = this.tokens.identifierNameAtIndex(n);
                        this.identifierReplacements.set(p, `exports.${ p }`);
                    }
                }
            }
        }
        preprocessNamedExportAtIndex(l) {
            l += 2;
            const {
                newIndex: m,
                namedImports: n
            } = this.getNamedImports(l);
            if (l = m, !this.tokens.matchesContextualAtIndex(l, g.ContextualKeyword._from)) {
                for (const {
                        importedName: o,
                        localName: p
                    }
                    of n)
                    this.addExportBinding(o, p);
                return;
            }
            if (l++, !this.tokens.matches1AtIndex(l, h.TokenType.string))
                throw new Error('Expected string token at the end of import statement.');
            const o = this.tokens.stringValueAtIndex(l);
            this.getImportInfo(o).namedExports.push(...n);
        }
        preprocessExportStarAtIndex(l) {
            let m = null;
            if (this.tokens.matches3AtIndex(l, h.TokenType._export, h.TokenType.star, h.TokenType._as) ? (l += 3, m = this.tokens.identifierNameAtIndex(l), l += 2) : l += 3, !this.tokens.matches1AtIndex(l, h.TokenType.string))
                throw new Error('Expected string token at the end of star export statement.');
            const n = this.tokens.stringValueAtIndex(l),
                o = this.getImportInfo(n);
            null !== m ? o.exportStarNames.push(m) : o.hasStarExport = !0;
        }
        getNamedImports(l) {
            const m = [];
            for (;;) {
                if (this.tokens.matches1AtIndex(l, h.TokenType.braceR)) {
                    l++;
                    break;
                }
                const n = (0, i.default)(this.tokens, l);
                if (l = n.endIndex, n.isType || m.push({
                        importedName: n.leftName,
                        localName: n.rightName
                    }), this.tokens.matches2AtIndex(l, h.TokenType.comma, h.TokenType.braceR)) {
                    l += 2;
                    break;
                }
                if (this.tokens.matches1AtIndex(l, h.TokenType.braceR)) {
                    l++;
                    break;
                }
                if (!this.tokens.matches1AtIndex(l, h.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(this.tokens.tokens[l]) }`);
                l++;
            }
            return {
                newIndex: l,
                namedImports: m
            };
        }
        getImportInfo(l) {
            const m = this.importInfoByPath.get(l);
            if (m)
                return m;
            const n = {
                defaultNames: [],
                wildcardNames: [],
                namedImports: [],
                namedExports: [],
                hasBareImport: !1,
                exportStarNames: [],
                hasStarExport: !1
            };
            return this.importInfoByPath.set(l, n), n;
        }
        addExportBinding(l, m) {
            this.exportBindingsByLocalName.has(l) || this.exportBindingsByLocalName.set(l, []), this.exportBindingsByLocalName.get(l).push(m);
        }
        claimImportCode(l) {
            const m = this.importsToReplace.get(l);
            return this.importsToReplace.set(l, ''), m || '';
        }
        getIdentifierReplacement(l) {
            return this.identifierReplacements.get(l) || null;
        }
        resolveExportBinding(l) {
            const m = this.exportBindingsByLocalName.get(l);
            return m && 0 !== m.length ? m.map(l => `exports.${ l }`).join(' = ') : null;
        }
        getGlobalNames() {
            return new Set([
                ...this.identifierReplacements.keys(),
                ...this.exportBindingsByLocalName.keys()
            ]);
        }
        constructor(l, m, n, o, p, q, r) {
            this.nameManager = l, this.tokens = m, this.enableLegacyTypeScriptModuleInterop = n, this.options = o, this.isTypeScriptTransformEnabled = p, this.keepUnusedImports = q, this.helperManager = r, _k.prototype.__init.call(this), _k.prototype.__init2.call(this), _k.prototype.__init3.call(this), _k.prototype.__init4.call(this), _k.prototype.__init5.call(this);
        }
    }
}), c.register('SGA4o', function(d, e) {
    b(d.exports, 'IdentifierRole', function() {
        return _f;
    }), b(d.exports, 'JSXRole', function() {
        return _g;
    }), b(d.exports, 'isDeclaration', function() {
        return _p;
    }), b(d.exports, 'isNonTopLevelDeclaration', function() {
        return _q;
    }), b(d.exports, 'isTopLevelDeclaration', function() {
        return _r;
    }), b(d.exports, 'isBlockScopedDeclaration', function() {
        return _s;
    }), b(d.exports, 'isFunctionScopedDeclaration', function() {
        return _t;
    }), b(d.exports, 'isObjectShorthandDeclaration', function() {
        return _u;
    }), b(d.exports, 'Token', function() {
        return _v;
    }), b(d.exports, 'next', function() {
        return _w;
    }), b(d.exports, 'nextToken', function() {
        return _K;
    }), b(d.exports, 'nextTemplateToken', function() {
        return _x;
    }), b(d.exports, 'retokenizeSlashAsRegex', function() {
        return _y;
    }), b(d.exports, 'pushTypeContext', function() {
        return _z;
    }), b(d.exports, 'popTypeContext', function() {
        return _A;
    }), b(d.exports, 'eat', function() {
        return _B;
    }), b(d.exports, 'match', function() {
        return _D;
    }), b(d.exports, 'eatTypeToken', function() {
        return _C;
    }), b(d.exports, 'lookaheadType', function() {
        return _E;
    }), b(d.exports, 'lookaheadTypeAndKeyword', function() {
        return _G;
    }), b(d.exports, 'nextTokenStart', function() {
        return _H;
    }), b(d.exports, 'nextTokenStartSince', function() {
        return _I;
    }), b(d.exports, 'lookaheadCharCode', function() {
        return _J;
    }), b(d.exports, 'skipSpace', function() {
        return _N;
    }), b(d.exports, 'finishToken', function() {
        return _O;
    }), b(d.exports, 'getTokenFromCode', function() {
        return _R;
    }), b(d.exports, 'skipLineComment', function() {
        return _M;
    }), b(d.exports, 'rescan_gt', function() {
        return _Q;
    });
    var _f, _g, h = c('REG+N'),
        i = c('QP6iy'),
        j = c('MYjp2'),
        k = c('l+GFY'),
        l = c('nI8Kk'),
        m = c('pvm6x'),
        n = c('P9vkS'),
        o = c('PmE4s');

    function _p(q) {
        const r = q.identifierRole;
        return r === _f.TopLevelDeclaration || r === _f.FunctionScopedDeclaration || r === _f.BlockScopedDeclaration || r === _f.ObjectShorthandTopLevelDeclaration || r === _f.ObjectShorthandFunctionScopedDeclaration || r === _f.ObjectShorthandBlockScopedDeclaration;
    }

    function _q(r) {
        const s = r.identifierRole;
        return s === _f.FunctionScopedDeclaration || s === _f.BlockScopedDeclaration || s === _f.ObjectShorthandFunctionScopedDeclaration || s === _f.ObjectShorthandBlockScopedDeclaration;
    }

    function _r(s) {
        const t = s.identifierRole;
        return t === _f.TopLevelDeclaration || t === _f.ObjectShorthandTopLevelDeclaration || t === _f.ImportDeclaration;
    }

    function _s(t) {
        const u = t.identifierRole;
        return u === _f.TopLevelDeclaration || u === _f.BlockScopedDeclaration || u === _f.ObjectShorthandTopLevelDeclaration || u === _f.ObjectShorthandBlockScopedDeclaration;
    }

    function _t(u) {
        const v = u.identifierRole;
        return v === _f.FunctionScopedDeclaration || v === _f.ObjectShorthandFunctionScopedDeclaration;
    }

    function _u(v) {
        return v.identifierRole === _f.ObjectShorthandTopLevelDeclaration || v.identifierRole === _f.ObjectShorthandBlockScopedDeclaration || v.identifierRole === _f.ObjectShorthandFunctionScopedDeclaration;
    }! function(v) {
        v[v.Access = 0] = 'Access';
        v[v.ExportAccess = 1] = 'ExportAccess';
        v[v.TopLevelDeclaration = 2] = 'TopLevelDeclaration';
        v[v.FunctionScopedDeclaration = 3] = 'FunctionScopedDeclaration';
        v[v.BlockScopedDeclaration = 4] = 'BlockScopedDeclaration';
        v[v.ObjectShorthandTopLevelDeclaration = 5] = 'ObjectShorthandTopLevelDeclaration';
        v[v.ObjectShorthandFunctionScopedDeclaration = 6] = 'ObjectShorthandFunctionScopedDeclaration';
        v[v.ObjectShorthandBlockScopedDeclaration = 7] = 'ObjectShorthandBlockScopedDeclaration';
        v[v.ObjectShorthand = 8] = 'ObjectShorthand';
        v[v.ImportDeclaration = 9] = 'ImportDeclaration';
        v[v.ObjectKey = 10] = 'ObjectKey';
        v[v.ImportAccess = 11] = 'ImportAccess';
    }(_f || (_f = {})),
    function(v) {
        v[v.NoChildren = 0] = 'NoChildren';
        v[v.OneChild = 1] = 'OneChild';
        v[v.StaticChildren = 2] = 'StaticChildren';
        v[v.KeyAfterPropSpread = 3] = 'KeyAfterPropSpread';
    }(_g || (_g = {}));
    class _v {
        constructor() {
            this.type = h.state.type, this.contextualKeyword = h.state.contextualKeyword, this.start = h.state.start, this.end = h.state.end, this.scopeDepth = h.state.scopeDepth, this.isType = h.state.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
        }
    }

    function _w() {
        h.state.tokens.push(new _v()), _K();
    }

    function _x() {
        h.state.tokens.push(new _v()), h.state.start = h.state.pos,
            function() {
                for (;;) {
                    if (h.state.pos >= h.input.length)
                        return void(0, i.unexpected)('Unterminated template');
                    const y = h.input.charCodeAt(h.state.pos);
                    if (y === j.charCodes.graveAccent || y === j.charCodes.dollarSign && h.input.charCodeAt(h.state.pos + 1) === j.charCodes.leftCurlyBrace)
                        return h.state.pos === h.state.start && _D(o.TokenType.template) ? y === j.charCodes.dollarSign ? (h.state.pos += 2, void _O(o.TokenType.dollarBraceL)) : (++h.state.pos, void _O(o.TokenType.backQuote)) : void _O(o.TokenType.template);
                    y === j.charCodes.backslash && h.state.pos++, h.state.pos++;
                }
            }();
    }

    function _y() {
        h.state.type === o.TokenType.assign && --h.state.pos,
            function() {
                const z = h.state.pos;
                let A = !1,
                    B = !1;
                for (;;) {
                    if (h.state.pos >= h.input.length)
                        return void(0, i.unexpected)('Unterminated regular expression', z);
                    const C = h.input.charCodeAt(h.state.pos);
                    if (A)
                        A = !1;
                    else {
                        if (C === j.charCodes.leftSquareBracket)
                            B = !0;
                        else if (C === j.charCodes.rightSquareBracket && B)
                            B = !1;
                        else if (C === j.charCodes.slash && !B)
                            break;
                        A = C === j.charCodes.backslash;
                    }
                    ++h.state.pos;
                }
                ++h.state.pos,
                    function() {
                        for (; h.state.pos < h.input.length;) {
                            const C = h.input.charCodeAt(h.state.pos);
                            if (k.IS_IDENTIFIER_CHAR[C])
                                h.state.pos++;
                            else {
                                if (C !== j.charCodes.backslash)
                                    break;
                                if (h.state.pos += 2, h.input.charCodeAt(h.state.pos) === j.charCodes.leftCurlyBrace) {
                                    for (; h.state.pos < h.input.length && h.input.charCodeAt(h.state.pos) !== j.charCodes.rightCurlyBrace;)
                                        h.state.pos++;
                                    h.state.pos++;
                                }
                            }
                        }
                    }(), _O(o.TokenType.regexp);
            }();
    }

    function _z(A) {
        for (let B = h.state.tokens.length - A; B < h.state.tokens.length; B++)
            h.state.tokens[B].isType = !0;
        const C = h.state.isType;
        return h.state.isType = !0, C;
    }

    function _A(B) {
        h.state.isType = B;
    }

    function _B(C) {
        return !!_D(C) && (_w(), !0);
    }

    function _C(D) {
        const E = h.state.isType;
        h.state.isType = !0, _B(D), h.state.isType = E;
    }

    function _D(E) {
        return h.state.type === E;
    }

    function _E() {
        const F = h.state.snapshot();
        _w();
        const G = h.state.type;
        return h.state.restoreFromSnapshot(F), G;
    }
    class F {
        constructor(G, H) {
            this.type = G, this.contextualKeyword = H;
        }
    }

    function _G() {
        const H = h.state.snapshot();
        _w();
        const I = h.state.type,
            J = h.state.contextualKeyword;
        return h.state.restoreFromSnapshot(H), new F(I, J);
    }

    function _H() {
        return _I(h.state.pos);
    }

    function _I(J) {
        l.skipWhiteSpace.lastIndex = J;
        return J + l.skipWhiteSpace.exec(h.input)[0].length;
    }

    function _J() {
        return h.input.charCodeAt(_H());
    }

    function _K() {
        if (_N(), h.state.start = h.state.pos, h.state.pos >= h.input.length) {
            const L = h.state.tokens;
            return L.length >= 2 && L[L.length - 1].start >= h.input.length && L[L.length - 2].start >= h.input.length && (0, i.unexpected)('Unexpectedly reached the end of input.'), void _O(o.TokenType.eof);
        }
        var L;
        L = h.input.charCodeAt(h.state.pos), k.IS_IDENTIFIER_START[L] || L === j.charCodes.backslash || L === j.charCodes.atSign && h.input.charCodeAt(h.state.pos + 1) === j.charCodes.atSign ? (0, n.default)() : _R(L);
    }

    function L() {
        for (; h.input.charCodeAt(h.state.pos) !== j.charCodes.asterisk || h.input.charCodeAt(h.state.pos + 1) !== j.charCodes.slash;)
            if (h.state.pos++, h.state.pos > h.input.length)
                return void(0, i.unexpected)('Unterminated comment', h.state.pos - 2);
        h.state.pos += 2;
    }

    function _M(N) {
        let O = h.input.charCodeAt(h.state.pos += N);
        if (h.state.pos < h.input.length)
            for (; O !== j.charCodes.lineFeed && O !== j.charCodes.carriageReturn && O !== j.charCodes.lineSeparator && O !== j.charCodes.paragraphSeparator && ++h.state.pos < h.input.length;)
                O = h.input.charCodeAt(h.state.pos);
    }

    function _N() {
        for (; h.state.pos < h.input.length;) {
            const O = h.input.charCodeAt(h.state.pos);
            switch (O) {
                case j.charCodes.carriageReturn:
                    h.input.charCodeAt(h.state.pos + 1) === j.charCodes.lineFeed && ++h.state.pos;
                case j.charCodes.lineFeed:
                case j.charCodes.lineSeparator:
                case j.charCodes.paragraphSeparator:
                    ++h.state.pos;
                    break;
                case j.charCodes.slash:
                    switch (h.input.charCodeAt(h.state.pos + 1)) {
                        case j.charCodes.asterisk:
                            h.state.pos += 2, L();
                            break;
                        case j.charCodes.slash:
                            _M(2);
                            break;
                        default:
                            return;
                    }
                    break;
                default:
                    if (!l.IS_WHITESPACE[O])
                        return;
                    ++h.state.pos;
            }
        }
    }

    function _O(P, Q = m.ContextualKeyword.NONE) {
        h.state.end = h.state.pos, h.state.type = P, h.state.contextualKeyword = Q;
    }

    function P() {
        if (h.state.isType)
            return void _S(o.TokenType.greaterThan, 1);
        const Q = h.input.charCodeAt(h.state.pos + 1);
        if (Q === j.charCodes.greaterThan) {
            const R = h.input.charCodeAt(h.state.pos + 2) === j.charCodes.greaterThan ? 3 : 2;
            return h.input.charCodeAt(h.state.pos + R) === j.charCodes.equalsTo ? void _S(o.TokenType.assign, R + 1) : void _S(o.TokenType.bitShiftR, R);
        }
        Q === j.charCodes.equalsTo ? _S(o.TokenType.relationalOrEqual, 2) : _S(o.TokenType.greaterThan, 1);
    }

    function _Q() {
        h.state.type === o.TokenType.greaterThan && (h.state.pos -= 1, P());
    }

    function _R(S) {
        switch (S) {
            case j.charCodes.numberSign:
                return ++h.state.pos, void _O(o.TokenType.hash);
            case j.charCodes.dot:
                return void
                function() {
                    const T = h.input.charCodeAt(h.state.pos + 1);
                    T >= j.charCodes.digit0 && T <= j.charCodes.digit9 ? _U(!0) : T === j.charCodes.dot && h.input.charCodeAt(h.state.pos + 2) === j.charCodes.dot ? (h.state.pos += 3, _O(o.TokenType.ellipsis)) : (++h.state.pos, _O(o.TokenType.dot));
                }();
            case j.charCodes.leftParenthesis:
                return ++h.state.pos, void _O(o.TokenType.parenL);
            case j.charCodes.rightParenthesis:
                return ++h.state.pos, void _O(o.TokenType.parenR);
            case j.charCodes.semicolon:
                return ++h.state.pos, void _O(o.TokenType.semi);
            case j.charCodes.comma:
                return ++h.state.pos, void _O(o.TokenType.comma);
            case j.charCodes.leftSquareBracket:
                return ++h.state.pos, void _O(o.TokenType.bracketL);
            case j.charCodes.rightSquareBracket:
                return ++h.state.pos, void _O(o.TokenType.bracketR);
            case j.charCodes.leftCurlyBrace:
                return void(h.isFlowEnabled && h.input.charCodeAt(h.state.pos + 1) === j.charCodes.verticalBar ? _S(o.TokenType.braceBarL, 2) : (++h.state.pos, _O(o.TokenType.braceL)));
            case j.charCodes.rightCurlyBrace:
                return ++h.state.pos, void _O(o.TokenType.braceR);
            case j.charCodes.colon:
                return void(h.input.charCodeAt(h.state.pos + 1) === j.charCodes.colon ? _S(o.TokenType.doubleColon, 2) : (++h.state.pos, _O(o.TokenType.colon)));
            case j.charCodes.questionMark:
                return void
                function() {
                    const T = h.input.charCodeAt(h.state.pos + 1),
                        U = h.input.charCodeAt(h.state.pos + 2);
                    T !== j.charCodes.questionMark || h.isFlowEnabled && h.state.isType ? T !== j.charCodes.dot || U >= j.charCodes.digit0 && U <= j.charCodes.digit9 ? (++h.state.pos, _O(o.TokenType.question)) : (h.state.pos += 2, _O(o.TokenType.questionDot)) : U === j.charCodes.equalsTo ? _S(o.TokenType.assign, 3) : _S(o.TokenType.nullishCoalescing, 2);
                }();
            case j.charCodes.atSign:
                return ++h.state.pos, void _O(o.TokenType.at);
            case j.charCodes.graveAccent:
                return ++h.state.pos, void _O(o.TokenType.backQuote);
            case j.charCodes.digit0: {
                const T = h.input.charCodeAt(h.state.pos + 1);
                if (T === j.charCodes.lowercaseX || T === j.charCodes.uppercaseX || T === j.charCodes.lowercaseO || T === j.charCodes.uppercaseO || T === j.charCodes.lowercaseB || T === j.charCodes.uppercaseB)
                    return void
                function() {
                    h.state.pos += 2;
                    for (;;) {
                        const U = h.input.charCodeAt(h.state.pos);
                        if (!(U >= j.charCodes.digit0 && U <= j.charCodes.digit9 || U >= j.charCodes.lowercaseA && U <= j.charCodes.lowercaseF || U >= j.charCodes.uppercaseA && U <= j.charCodes.uppercaseF || U === j.charCodes.underscore))
                            break;
                        h.state.pos++;
                    }
                    const U = h.input.charCodeAt(h.state.pos);
                    U === j.charCodes.lowercaseN ? (++h.state.pos, _O(o.TokenType.bigint)) : _O(o.TokenType.num);
                }();
            }
            case j.charCodes.digit1:
            case j.charCodes.digit2:
            case j.charCodes.digit3:
            case j.charCodes.digit4:
            case j.charCodes.digit5:
            case j.charCodes.digit6:
            case j.charCodes.digit7:
            case j.charCodes.digit8:
            case j.charCodes.digit9:
                return void _U(!1);
            case j.charCodes.quotationMark:
            case j.charCodes.apostrophe:
                return void
                function(T) {
                    for (h.state.pos++;;) {
                        if (h.state.pos >= h.input.length)
                            return void(0, i.unexpected)('Unterminated string constant');
                        const U = h.input.charCodeAt(h.state.pos);
                        if (U === j.charCodes.backslash)
                            h.state.pos++;
                        else if (U === T)
                            break;
                        h.state.pos++;
                    }
                    h.state.pos++, _O(o.TokenType.string);
                }(S);
            case j.charCodes.slash:
                return void(h.input.charCodeAt(h.state.pos + 1) === j.charCodes.equalsTo ? _S(o.TokenType.assign, 2) : _S(o.TokenType.slash, 1));
            case j.charCodes.percentSign:
            case j.charCodes.asterisk:
                return void
                function(T) {
                    let U = T === j.charCodes.asterisk ? o.TokenType.star : o.TokenType.modulo,
                        V = 1,
                        W = h.input.charCodeAt(h.state.pos + 1);
                    T === j.charCodes.asterisk && W === j.charCodes.asterisk && (V++, W = h.input.charCodeAt(h.state.pos + 2), U = o.TokenType.exponent), W === j.charCodes.equalsTo && h.input.charCodeAt(h.state.pos + 2) !== j.charCodes.greaterThan && (V++, U = o.TokenType.assign), _S(U, V);
                }(S);
            case j.charCodes.verticalBar:
            case j.charCodes.ampersand:
                return void
                function(T) {
                    const U = h.input.charCodeAt(h.state.pos + 1);
                    if (U !== T) {
                        if (T === j.charCodes.verticalBar) {
                            if (U === j.charCodes.greaterThan)
                                return void _S(o.TokenType.pipeline, 2);
                            if (U === j.charCodes.rightCurlyBrace && h.isFlowEnabled)
                                return void _S(o.TokenType.braceBarR, 2);
                        }
                        U !== j.charCodes.equalsTo ? _S(T === j.charCodes.verticalBar ? o.TokenType.bitwiseOR : o.TokenType.bitwiseAND, 1) : _S(o.TokenType.assign, 2);
                    } else
                        h.input.charCodeAt(h.state.pos + 2) === j.charCodes.equalsTo ? _S(o.TokenType.assign, 3) : _S(T === j.charCodes.verticalBar ? o.TokenType.logicalOR : o.TokenType.logicalAND, 2);
                }(S);
            case j.charCodes.caret:
                return void(h.input.charCodeAt(h.state.pos + 1) === j.charCodes.equalsTo ? _S(o.TokenType.assign, 2) : _S(o.TokenType.bitwiseXOR, 1));
            case j.charCodes.plusSign:
            case j.charCodes.dash:
                return void
                function(T) {
                    const U = h.input.charCodeAt(h.state.pos + 1);
                    U !== T ? U === j.charCodes.equalsTo ? _S(o.TokenType.assign, 2) : T === j.charCodes.plusSign ? _S(o.TokenType.plus, 1) : _S(o.TokenType.minus, 1) : _S(o.TokenType.preIncDec, 2);
                }(S);
            case j.charCodes.lessThan:
                return void
                function() {
                    const T = h.input.charCodeAt(h.state.pos + 1);
                    if (T === j.charCodes.lessThan)
                        return h.input.charCodeAt(h.state.pos + 2) === j.charCodes.equalsTo ? void _S(o.TokenType.assign, 3) : void(h.state.isType ? _S(o.TokenType.lessThan, 1) : _S(o.TokenType.bitShiftL, 2));
                    T === j.charCodes.equalsTo ? _S(o.TokenType.relationalOrEqual, 2) : _S(o.TokenType.lessThan, 1);
                }();
            case j.charCodes.greaterThan:
                return void P();
            case j.charCodes.equalsTo:
            case j.charCodes.exclamationMark:
                return void
                function(T) {
                    const U = h.input.charCodeAt(h.state.pos + 1);
                    if (U !== j.charCodes.equalsTo)
                        return T === j.charCodes.equalsTo && U === j.charCodes.greaterThan ? (h.state.pos += 2, void _O(o.TokenType.arrow)) : void _S(T === j.charCodes.equalsTo ? o.TokenType.eq : o.TokenType.bang, 1);
                    _S(o.TokenType.equality, h.input.charCodeAt(h.state.pos + 2) === j.charCodes.equalsTo ? 3 : 2);
                }(S);
            case j.charCodes.tilde:
                return void _S(o.TokenType.tilde, 1);
        }
        (0, i.unexpected)(`Unexpected character '${ String.fromCharCode(S) }'`, h.state.pos);
    }

    function _S(T, U) {
        h.state.pos += U, _O(T);
    }

    function T() {
        for (;;) {
            const U = h.input.charCodeAt(h.state.pos);
            if (!(U >= j.charCodes.digit0 && U <= j.charCodes.digit9 || U === j.charCodes.underscore))
                break;
            h.state.pos++;
        }
    }

    function _U(V) {
        let W = !1,
            X = !1;
        V || T();
        let Y = h.input.charCodeAt(h.state.pos);
        Y === j.charCodes.dot && (++h.state.pos, T(), Y = h.input.charCodeAt(h.state.pos)), Y !== j.charCodes.uppercaseE && Y !== j.charCodes.lowercaseE || (Y = h.input.charCodeAt(++h.state.pos), Y !== j.charCodes.plusSign && Y !== j.charCodes.dash || ++h.state.pos, T(), Y = h.input.charCodeAt(h.state.pos)), Y === j.charCodes.lowercaseN ? (++h.state.pos, W = !0) : Y === j.charCodes.lowercaseM && (++h.state.pos, X = !0), _O(W ? o.TokenType.bigint : X ? o.TokenType.decimal : o.TokenType.num);
    }
}), c.register('REG+N', function(d, e) {
    b(d.exports, 'isJSXEnabled', function() {
        return _h;
    }), b(d.exports, 'isTypeScriptEnabled', function() {
        return _i;
    }), b(d.exports, 'isFlowEnabled', function() {
        return _j;
    }), b(d.exports, 'state', function() {
        return _k;
    }), b(d.exports, 'input', function() {
        return _l;
    }), b(d.exports, 'getNextContextId', function() {
        return _n;
    }), b(d.exports, 'augmentError', function() {
        return _o;
    }), b(d.exports, 'initParser', function() {
        return _q;
    });
    var f = c('BpLPu'),
        g = c('MYjp2');
    let _h, _i, _j, _k, _l, m;

    function _n() {
        return m++;
    }

    function _o(p) {
        if ('pos' in p) {
            const q = function(r) {
                let s = 1,
                    t = 1;
                for (let u = 0; u < r; u++)
                    _l.charCodeAt(u) === g.charCodes.lineFeed ? (s++, t = 1) : t++;
                return new _p(s, t);
            }(p.pos);
            p.message += ` (${ q.line }:${ q.column })`, p.loc = q;
        }
        return p;
    }
    class _p {
        constructor(q, r) {
            this.line = q, this.column = r;
        }
    }

    function _q(r, s, t, u) {
        _l = r, _k = new(0, f.default)(), m = 1, _h = s, _i = t, _j = u;
    }
}), c.register('BpLPu', function(d, e) {
    b(d.exports, 'Scope', function() {
        return _h;
    }), b(d.exports, 'default', function() {
        return _r;
    });
    var f = c('pvm6x'),
        g = c('PmE4s');
    class _h {
        constructor(i, j, k) {
            this.startTokenIndex = i, this.endTokenIndex = j, this.isFunctionScope = k;
        }
    }
    class i {
        constructor(j, k, l, m, n, o, p, q, _r, s, t, u, v) {
            this.potentialArrowAt = j, this.noAnonFunctionType = k, this.inDisallowConditionalTypesContext = l, this.tokensLength = m, this.scopesLength = n, this.pos = o, this.type = p, this.contextualKeyword = q, this.start = _r, this.end = s, this.isType = t, this.scopeDepth = u, this.error = v;
        }
    }
    class j {
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
            this.type = g.TokenType.eof;
        }
        __init8() {
            this.contextualKeyword = f.ContextualKeyword.NONE;
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
            return new i(this.potentialArrowAt, this.noAnonFunctionType, this.inDisallowConditionalTypesContext, this.tokens.length, this.scopes.length, this.pos, this.type, this.contextualKeyword, this.start, this.end, this.isType, this.scopeDepth, this.error);
        }
        restoreFromSnapshot(k) {
            this.potentialArrowAt = k.potentialArrowAt, this.noAnonFunctionType = k.noAnonFunctionType, this.inDisallowConditionalTypesContext = k.inDisallowConditionalTypesContext, this.tokens.length = k.tokensLength, this.scopes.length = k.scopesLength, this.pos = k.pos, this.type = k.type, this.contextualKeyword = k.contextualKeyword, this.start = k.start, this.end = k.end, this.isType = k.isType, this.scopeDepth = k.scopeDepth, this.error = k.error;
        }
        constructor() {
            j.prototype.__init.call(this), j.prototype.__init2.call(this), j.prototype.__init3.call(this), j.prototype.__init4.call(this), j.prototype.__init5.call(this), j.prototype.__init6.call(this), j.prototype.__init7.call(this), j.prototype.__init8.call(this), j.prototype.__init9.call(this), j.prototype.__init10.call(this), j.prototype.__init11.call(this), j.prototype.__init12.call(this), j.prototype.__init13.call(this);
        }
    }
}), c.register('pvm6x', function(d, e) {
    var f;
    b(d.exports, 'ContextualKeyword', function() {
            return f;
        }),
        function(g) {
            g[g.NONE = 0] = 'NONE';
            g[g._abstract = 1] = '_abstract';
            g[g._accessor = 2] = '_accessor';
            g[g._as = 3] = '_as';
            g[g._assert = 4] = '_assert';
            g[g._asserts = 5] = '_asserts';
            g[g._async = 6] = '_async';
            g[g._await = 7] = '_await';
            g[g._checks = 8] = '_checks';
            g[g._constructor = 9] = '_constructor';
            g[g._declare = 10] = '_declare';
            g[g._enum = 11] = '_enum';
            g[g._exports = 12] = '_exports';
            g[g._from = 13] = '_from';
            g[g._get = 14] = '_get';
            g[g._global = 15] = '_global';
            g[g._implements = 16] = '_implements';
            g[g._infer = 17] = '_infer';
            g[g._interface = 18] = '_interface';
            g[g._is = 19] = '_is';
            g[g._keyof = 20] = '_keyof';
            g[g._mixins = 21] = '_mixins';
            g[g._module = 22] = '_module';
            g[g._namespace = 23] = '_namespace';
            g[g._of = 24] = '_of';
            g[g._opaque = 25] = '_opaque';
            g[g._out = 26] = '_out';
            g[g._override = 27] = '_override';
            g[g._private = 28] = '_private';
            g[g._protected = 29] = '_protected';
            g[g._proto = 30] = '_proto';
            g[g._public = 31] = '_public';
            g[g._readonly = 32] = '_readonly';
            g[g._require = 33] = '_require';
            g[g._satisfies = 34] = '_satisfies';
            g[g._set = 35] = '_set';
            g[g._static = 36] = '_static';
            g[g._symbol = 37] = '_symbol';
            g[g._type = 38] = '_type';
            g[g._unique = 39] = '_unique';
            g[g._using = 40] = '_using';
        }(f || (f = {}));
}), c.register('PmE4s', function(d, e) {
    var f;

    function g(h) {
        switch (h) {
            case f.num:
                return 'num';
            case f.bigint:
                return 'bigint';
            case f.decimal:
                return 'decimal';
            case f.regexp:
                return 'regexp';
            case f.string:
                return 'string';
            case f.name:
                return 'name';
            case f.eof:
                return 'eof';
            case f.bracketL:
                return '[';
            case f.bracketR:
                return ']';
            case f.braceL:
                return '{';
            case f.braceBarL:
                return '{|';
            case f.braceR:
                return '}';
            case f.braceBarR:
                return '|}';
            case f.parenL:
                return '(';
            case f.parenR:
                return ')';
            case f.comma:
                return ',';
            case f.semi:
                return ';';
            case f.colon:
                return ':';
            case f.doubleColon:
                return '::';
            case f.dot:
                return '.';
            case f.question:
                return '?';
            case f.questionDot:
                return '?.';
            case f.arrow:
                return '=>';
            case f.template:
                return 'template';
            case f.ellipsis:
                return '...';
            case f.backQuote:
                return '`';
            case f.dollarBraceL:
                return '${';
            case f.at:
                return '@';
            case f.hash:
                return '#';
            case f.eq:
                return '=';
            case f.assign:
                return '_=';
            case f.preIncDec:
            case f.postIncDec:
                return '++/--';
            case f.bang:
                return '!';
            case f.tilde:
                return '~';
            case f.pipeline:
                return '|>';
            case f.nullishCoalescing:
                return '??';
            case f.logicalOR:
                return '||';
            case f.logicalAND:
                return '&&';
            case f.bitwiseOR:
                return '|';
            case f.bitwiseXOR:
                return '^';
            case f.bitwiseAND:
                return '&';
            case f.equality:
                return '==/!=';
            case f.lessThan:
                return '<';
            case f.greaterThan:
                return '>';
            case f.relationalOrEqual:
                return '<=/>=';
            case f.bitShiftL:
                return '<<';
            case f.bitShiftR:
                return '>>/>>>';
            case f.plus:
                return '+';
            case f.minus:
                return '-';
            case f.modulo:
                return '%';
            case f.star:
                return '*';
            case f.slash:
                return '/';
            case f.exponent:
                return '**';
            case f.jsxName:
                return 'jsxName';
            case f.jsxText:
                return 'jsxText';
            case f.jsxEmptyText:
                return 'jsxEmptyText';
            case f.jsxTagStart:
                return 'jsxTagStart';
            case f.jsxTagEnd:
                return 'jsxTagEnd';
            case f.typeParameterStart:
                return 'typeParameterStart';
            case f.nonNullAssertion:
                return 'nonNullAssertion';
            case f._break:
                return 'break';
            case f._case:
                return 'case';
            case f._catch:
                return 'catch';
            case f._continue:
                return 'continue';
            case f._debugger:
                return 'debugger';
            case f._default:
                return 'default';
            case f._do:
                return 'do';
            case f._else:
                return 'else';
            case f._finally:
                return 'finally';
            case f._for:
                return 'for';
            case f._function:
                return 'function';
            case f._if:
                return 'if';
            case f._return:
                return 'return';
            case f._switch:
                return 'switch';
            case f._throw:
                return 'throw';
            case f._try:
                return 'try';
            case f._var:
                return 'var';
            case f._let:
                return 'let';
            case f._const:
                return 'const';
            case f._while:
                return 'while';
            case f._with:
                return 'with';
            case f._new:
                return 'new';
            case f._this:
                return 'this';
            case f._super:
                return 'super';
            case f._class:
                return 'class';
            case f._extends:
                return 'extends';
            case f._export:
                return 'export';
            case f._import:
                return 'import';
            case f._yield:
                return 'yield';
            case f._null:
                return 'null';
            case f._true:
                return 'true';
            case f._false:
                return 'false';
            case f._in:
                return 'in';
            case f._instanceof:
                return 'instanceof';
            case f._typeof:
                return 'typeof';
            case f._void:
                return 'void';
            case f._delete:
                return 'delete';
            case f._async:
                return 'async';
            case f._get:
                return 'get';
            case f._set:
                return 'set';
            case f._declare:
                return 'declare';
            case f._readonly:
                return 'readonly';
            case f._abstract:
                return 'abstract';
            case f._static:
                return 'static';
            case f._public:
                return 'public';
            case f._private:
                return 'private';
            case f._protected:
                return 'protected';
            case f._override:
                return 'override';
            case f._as:
                return 'as';
            case f._enum:
                return 'enum';
            case f._type:
                return 'type';
            case f._implements:
                return 'implements';
            default:
                return '';
        }
    }
    b(d.exports, 'TokenType', function() {
            return f;
        }), b(d.exports, 'formatTokenType', function() {
            return g;
        }),
        function(h) {
            h[h.PRECEDENCE_MASK = 15] = 'PRECEDENCE_MASK';
            h[h.IS_KEYWORD = 16] = 'IS_KEYWORD';
            h[h.IS_ASSIGN = 32] = 'IS_ASSIGN';
            h[h.IS_RIGHT_ASSOCIATIVE = 64] = 'IS_RIGHT_ASSOCIATIVE';
            h[h.IS_PREFIX = 128] = 'IS_PREFIX';
            h[h.IS_POSTFIX = 256] = 'IS_POSTFIX';
            h[h.IS_EXPRESSION_START = 512] = 'IS_EXPRESSION_START';
            h[h.num = 512] = 'num';
            h[h.bigint = 1536] = 'bigint';
            h[h.decimal = 2560] = 'decimal';
            h[h.regexp = 3584] = 'regexp';
            h[h.string = 4608] = 'string';
            h[h.name = 5632] = 'name';
            h[h.eof = 6144] = 'eof';
            h[h.bracketL = 7680] = 'bracketL';
            h[h.bracketR = 8192] = 'bracketR';
            h[h.braceL = 9728] = 'braceL';
            h[h.braceBarL = 10752] = 'braceBarL';
            h[h.braceR = 11264] = 'braceR';
            h[h.braceBarR = 12288] = 'braceBarR';
            h[h.parenL = 13824] = 'parenL';
            h[h.parenR = 14336] = 'parenR';
            h[h.comma = 15360] = 'comma';
            h[h.semi = 16384] = 'semi';
            h[h.colon = 17408] = 'colon';
            h[h.doubleColon = 18432] = 'doubleColon';
            h[h.dot = 19456] = 'dot';
            h[h.question = 20480] = 'question';
            h[h.questionDot = 21504] = 'questionDot';
            h[h.arrow = 22528] = 'arrow';
            h[h.template = 23552] = 'template';
            h[h.ellipsis = 24576] = 'ellipsis';
            h[h.backQuote = 25600] = 'backQuote';
            h[h.dollarBraceL = 27136] = 'dollarBraceL';
            h[h.at = 27648] = 'at';
            h[h.hash = 29184] = 'hash';
            h[h.eq = 29728] = 'eq';
            h[h.assign = 30752] = 'assign';
            h[h.preIncDec = 32640] = 'preIncDec';
            h[h.postIncDec = 33664] = 'postIncDec';
            h[h.bang = 34432] = 'bang';
            h[h.tilde = 35456] = 'tilde';
            h[h.pipeline = 35841] = 'pipeline';
            h[h.nullishCoalescing = 36866] = 'nullishCoalescing';
            h[h.logicalOR = 37890] = 'logicalOR';
            h[h.logicalAND = 38915] = 'logicalAND';
            h[h.bitwiseOR = 39940] = 'bitwiseOR';
            h[h.bitwiseXOR = 40965] = 'bitwiseXOR';
            h[h.bitwiseAND = 41990] = 'bitwiseAND';
            h[h.equality = 43015] = 'equality';
            h[h.lessThan = 44040] = 'lessThan';
            h[h.greaterThan = 45064] = 'greaterThan';
            h[h.relationalOrEqual = 46088] = 'relationalOrEqual';
            h[h.bitShiftL = 47113] = 'bitShiftL';
            h[h.bitShiftR = 48137] = 'bitShiftR';
            h[h.plus = 49802] = 'plus';
            h[h.minus = 50826] = 'minus';
            h[h.modulo = 51723] = 'modulo';
            h[h.star = 52235] = 'star';
            h[h.slash = 53259] = 'slash';
            h[h.exponent = 54348] = 'exponent';
            h[h.jsxName = 55296] = 'jsxName';
            h[h.jsxText = 56320] = 'jsxText';
            h[h.jsxEmptyText = 57344] = 'jsxEmptyText';
            h[h.jsxTagStart = 58880] = 'jsxTagStart';
            h[h.jsxTagEnd = 59392] = 'jsxTagEnd';
            h[h.typeParameterStart = 60928] = 'typeParameterStart';
            h[h.nonNullAssertion = 61440] = 'nonNullAssertion';
            h[h._break = 62480] = '_break';
            h[h._case = 63504] = '_case';
            h[h._catch = 64528] = '_catch';
            h[h._continue = 65552] = '_continue';
            h[h._debugger = 66576] = '_debugger';
            h[h._default = 67600] = '_default';
            h[h._do = 68624] = '_do';
            h[h._else = 69648] = '_else';
            h[h._finally = 70672] = '_finally';
            h[h._for = 71696] = '_for';
            h[h._function = 73232] = '_function';
            h[h._if = 73744] = '_if';
            h[h._return = 74768] = '_return';
            h[h._switch = 75792] = '_switch';
            h[h._throw = 77456] = '_throw';
            h[h._try = 77840] = '_try';
            h[h._var = 78864] = '_var';
            h[h._let = 79888] = '_let';
            h[h._const = 80912] = '_const';
            h[h._while = 81936] = '_while';
            h[h._with = 82960] = '_with';
            h[h._new = 84496] = '_new';
            h[h._this = 85520] = '_this';
            h[h._super = 86544] = '_super';
            h[h._class = 87568] = '_class';
            h[h._extends = 88080] = '_extends';
            h[h._export = 89104] = '_export';
            h[h._import = 90640] = '_import';
            h[h._yield = 91664] = '_yield';
            h[h._null = 92688] = '_null';
            h[h._true = 93712] = '_true';
            h[h._false = 94736] = '_false';
            h[h._in = 95256] = '_in';
            h[h._instanceof = 96280] = '_instanceof';
            h[h._typeof = 97936] = '_typeof';
            h[h._void = 98960] = '_void';
            h[h._delete = 99984] = '_delete';
            h[h._async = 100880] = '_async';
            h[h._get = 101904] = '_get';
            h[h._set = 102928] = '_set';
            h[h._declare = 103952] = '_declare';
            h[h._readonly = 104976] = '_readonly';
            h[h._abstract = 106000] = '_abstract';
            h[h._static = 107024] = '_static';
            h[h._public = 107536] = '_public';
            h[h._private = 108560] = '_private';
            h[h._protected = 109584] = '_protected';
            h[h._override = 110608] = '_override';
            h[h._as = 112144] = '_as';
            h[h._enum = 113168] = '_enum';
            h[h._type = 114192] = '_type';
            h[h._implements = 115216] = '_implements';
        }(f || (f = {}));
}), c.register('MYjp2', function(d, e) {
    var f;
    b(d.exports, 'charCodes', function() {
            return f;
        }),
        function(g) {
            g[g.backSpace = 8] = 'backSpace';
            g[g.lineFeed = 10] = 'lineFeed';
            g[g.tab = 9] = 'tab';
            g[g.carriageReturn = 13] = 'carriageReturn';
            g[g.shiftOut = 14] = 'shiftOut';
            g[g.space = 32] = 'space';
            g[g.exclamationMark = 33] = 'exclamationMark';
            g[g.quotationMark = 34] = 'quotationMark';
            g[g.numberSign = 35] = 'numberSign';
            g[g.dollarSign = 36] = 'dollarSign';
            g[g.percentSign = 37] = 'percentSign';
            g[g.ampersand = 38] = 'ampersand';
            g[g.apostrophe = 39] = 'apostrophe';
            g[g.leftParenthesis = 40] = 'leftParenthesis';
            g[g.rightParenthesis = 41] = 'rightParenthesis';
            g[g.asterisk = 42] = 'asterisk';
            g[g.plusSign = 43] = 'plusSign';
            g[g.comma = 44] = 'comma';
            g[g.dash = 45] = 'dash';
            g[g.dot = 46] = 'dot';
            g[g.slash = 47] = 'slash';
            g[g.digit0 = 48] = 'digit0';
            g[g.digit1 = 49] = 'digit1';
            g[g.digit2 = 50] = 'digit2';
            g[g.digit3 = 51] = 'digit3';
            g[g.digit4 = 52] = 'digit4';
            g[g.digit5 = 53] = 'digit5';
            g[g.digit6 = 54] = 'digit6';
            g[g.digit7 = 55] = 'digit7';
            g[g.digit8 = 56] = 'digit8';
            g[g.digit9 = 57] = 'digit9';
            g[g.colon = 58] = 'colon';
            g[g.semicolon = 59] = 'semicolon';
            g[g.lessThan = 60] = 'lessThan';
            g[g.equalsTo = 61] = 'equalsTo';
            g[g.greaterThan = 62] = 'greaterThan';
            g[g.questionMark = 63] = 'questionMark';
            g[g.atSign = 64] = 'atSign';
            g[g.uppercaseA = 65] = 'uppercaseA';
            g[g.uppercaseB = 66] = 'uppercaseB';
            g[g.uppercaseC = 67] = 'uppercaseC';
            g[g.uppercaseD = 68] = 'uppercaseD';
            g[g.uppercaseE = 69] = 'uppercaseE';
            g[g.uppercaseF = 70] = 'uppercaseF';
            g[g.uppercaseG = 71] = 'uppercaseG';
            g[g.uppercaseH = 72] = 'uppercaseH';
            g[g.uppercaseI = 73] = 'uppercaseI';
            g[g.uppercaseJ = 74] = 'uppercaseJ';
            g[g.uppercaseK = 75] = 'uppercaseK';
            g[g.uppercaseL = 76] = 'uppercaseL';
            g[g.uppercaseM = 77] = 'uppercaseM';
            g[g.uppercaseN = 78] = 'uppercaseN';
            g[g.uppercaseO = 79] = 'uppercaseO';
            g[g.uppercaseP = 80] = 'uppercaseP';
            g[g.uppercaseQ = 81] = 'uppercaseQ';
            g[g.uppercaseR = 82] = 'uppercaseR';
            g[g.uppercaseS = 83] = 'uppercaseS';
            g[g.uppercaseT = 84] = 'uppercaseT';
            g[g.uppercaseU = 85] = 'uppercaseU';
            g[g.uppercaseV = 86] = 'uppercaseV';
            g[g.uppercaseW = 87] = 'uppercaseW';
            g[g.uppercaseX = 88] = 'uppercaseX';
            g[g.uppercaseY = 89] = 'uppercaseY';
            g[g.uppercaseZ = 90] = 'uppercaseZ';
            g[g.leftSquareBracket = 91] = 'leftSquareBracket';
            g[g.backslash = 92] = 'backslash';
            g[g.rightSquareBracket = 93] = 'rightSquareBracket';
            g[g.caret = 94] = 'caret';
            g[g.underscore = 95] = 'underscore';
            g[g.graveAccent = 96] = 'graveAccent';
            g[g.lowercaseA = 97] = 'lowercaseA';
            g[g.lowercaseB = 98] = 'lowercaseB';
            g[g.lowercaseC = 99] = 'lowercaseC';
            g[g.lowercaseD = 100] = 'lowercaseD';
            g[g.lowercaseE = 101] = 'lowercaseE';
            g[g.lowercaseF = 102] = 'lowercaseF';
            g[g.lowercaseG = 103] = 'lowercaseG';
            g[g.lowercaseH = 104] = 'lowercaseH';
            g[g.lowercaseI = 105] = 'lowercaseI';
            g[g.lowercaseJ = 106] = 'lowercaseJ';
            g[g.lowercaseK = 107] = 'lowercaseK';
            g[g.lowercaseL = 108] = 'lowercaseL';
            g[g.lowercaseM = 109] = 'lowercaseM';
            g[g.lowercaseN = 110] = 'lowercaseN';
            g[g.lowercaseO = 111] = 'lowercaseO';
            g[g.lowercaseP = 112] = 'lowercaseP';
            g[g.lowercaseQ = 113] = 'lowercaseQ';
            g[g.lowercaseR = 114] = 'lowercaseR';
            g[g.lowercaseS = 115] = 'lowercaseS';
            g[g.lowercaseT = 116] = 'lowercaseT';
            g[g.lowercaseU = 117] = 'lowercaseU';
            g[g.lowercaseV = 118] = 'lowercaseV';
            g[g.lowercaseW = 119] = 'lowercaseW';
            g[g.lowercaseX = 120] = 'lowercaseX';
            g[g.lowercaseY = 121] = 'lowercaseY';
            g[g.lowercaseZ = 122] = 'lowercaseZ';
            g[g.leftCurlyBrace = 123] = 'leftCurlyBrace';
            g[g.verticalBar = 124] = 'verticalBar';
            g[g.rightCurlyBrace = 125] = 'rightCurlyBrace';
            g[g.tilde = 126] = 'tilde';
            g[g.nonBreakingSpace = 160] = 'nonBreakingSpace';
            g[g.oghamSpaceMark = 5760] = 'oghamSpaceMark';
            g[g.lineSeparator = 8232] = 'lineSeparator';
            g[g.paragraphSeparator = 8233] = 'paragraphSeparator';
        }(f || (f = {}));
}), c.register('QP6iy', function(d, e) {
    b(d.exports, 'isContextual', function() {
        return _j;
    }), b(d.exports, 'isLookaheadContextual', function() {
        return _k;
    }), b(d.exports, 'eatContextual', function() {
        return _l;
    }), b(d.exports, 'expectContextual', function() {
        return _m;
    }), b(d.exports, 'unexpected', function() {
        return _t;
    }), b(d.exports, 'canInsertSemicolon', function() {
        return _n;
    }), b(d.exports, 'hasPrecedingLineBreak', function() {
        return _o;
    }), b(d.exports, 'hasFollowingLineBreak', function() {
        return _p;
    }), b(d.exports, 'isLineTerminator', function() {
        return _q;
    }), b(d.exports, 'semicolon', function() {
        return _r;
    }), b(d.exports, 'expect', function() {
        return _s;
    });
    var f = c('SGA4o'),
        g = c('PmE4s'),
        h = c('MYjp2'),
        i = c('REG+N');

    function _j(k) {
        return i.state.contextualKeyword === k;
    }

    function _k(l) {
        const m = (0, f.lookaheadTypeAndKeyword)();
        return m.type === g.TokenType.name && m.contextualKeyword === l;
    }

    function _l(m) {
        return i.state.contextualKeyword === m && (0, f.eat)(g.TokenType.name);
    }

    function _m(n) {
        _l(n) || _t();
    }

    function _n() {
        return (0, f.match)(g.TokenType.eof) || (0, f.match)(g.TokenType.braceR) || _o();
    }

    function _o() {
        const p = i.state.tokens[i.state.tokens.length - 1];
        for (let q = p ? p.end : 0; q < i.state.start; q++) {
            const r = i.input.charCodeAt(q);
            if (r === h.charCodes.lineFeed || r === h.charCodes.carriageReturn || 8232 === r || 8233 === r)
                return !0;
        }
        return !1;
    }

    function _p() {
        const q = (0, f.nextTokenStart)();
        for (let r = i.state.end; r < q; r++) {
            const s = i.input.charCodeAt(r);
            if (s === h.charCodes.lineFeed || s === h.charCodes.carriageReturn || 8232 === s || 8233 === s)
                return !0;
        }
        return !1;
    }

    function _q() {
        return (0, f.eat)(g.TokenType.semi) || _n();
    }

    function _r() {
        _q() || _t('Unexpected token, expected ";"');
    }

    function _s(t) {
        (0, f.eat)(t) || _t(`Unexpected token, expected "${ (0, g.formatTokenType)(t) }"`);
    }

    function _t(u = 'Unexpected token', v = i.state.start) {
        if (i.state.error)
            return;
        const w = new SyntaxError(u);
        w.pos = v, i.state.error = w, i.state.pos = i.input.length, (0, f.finishToken)(g.TokenType.eof);
    }
}), c.register('l+GFY', function(d, e) {
    b(d.exports, 'IS_IDENTIFIER_CHAR', function() {
        return _i;
    }), b(d.exports, 'IS_IDENTIFIER_START', function() {
        return _m;
    });
    var f = c('MYjp2'),
        g = c('nI8Kk');

    function h(i) {
        if (i < 48)
            return 36 === i;
        if (i < 58)
            return !0;
        if (i < 65)
            return !1;
        if (i < 91)
            return !0;
        if (i < 97)
            return 95 === i;
        if (i < 123)
            return !0;
        if (i < 128)
            return !1;
        throw new Error('Should not be called with non-ASCII char code.');
    }
    const _i = new Uint8Array(65536);
    for (let j = 0; j < 128; j++)
        _i[j] = h(j) ? 1 : 0;
    for (let k = 128; k < 65536; k++)
        _i[k] = 1;
    for (const l of g.WHITESPACE_CHARS)
        _i[l] = 0;
    _i[8232] = 0, _i[8233] = 0;
    const _m = _i.slice();
    for (let n = f.charCodes.digit0; n <= f.charCodes.digit9; n++)
        _m[n] = 0;
}), c.register('nI8Kk', function(d, e) {
    b(d.exports, 'WHITESPACE_CHARS', function() {
        return _g;
    }), b(d.exports, 'skipWhiteSpace', function() {
        return _h;
    }), b(d.exports, 'IS_WHITESPACE', function() {
        return _i;
    });
    var f = c('MYjp2');
    const _g = [
            9,
            11,
            12,
            f.charCodes.space,
            f.charCodes.nonBreakingSpace,
            f.charCodes.oghamSpaceMark,
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
        _h = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        _i = new Uint8Array(65536);
    for (const j of _g)
        _i[j] = 1;
}), c.register('P9vkS', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    });
    var f = c('REG+N'),
        g = c('MYjp2'),
        h = c('l+GFY'),
        i = c('SGA4o'),
        j = c('FvAgy'),
        k = c('PmE4s');

    function _l() {
        let m = 0,
            n = 0,
            o = f.state.pos;
        for (; o < f.input.length && (n = f.input.charCodeAt(o), !(n < g.charCodes.lowercaseA || n > g.charCodes.lowercaseZ));) {
            const p = j.READ_WORD_TREE[m + (n - g.charCodes.lowercaseA) + 1];
            if (-1 === p)
                break;
            m = p, o++;
        }
        const p = j.READ_WORD_TREE[m];
        if (p > -1 && !h.IS_IDENTIFIER_CHAR[n])
            return f.state.pos = o, void(1 & p ? (0, i.finishToken)(p >>> 1) : (0, i.finishToken)(k.TokenType.name, p >>> 1));
        for (; o < f.input.length;) {
            const q = f.input.charCodeAt(o);
            if (h.IS_IDENTIFIER_CHAR[q])
                o++;
            else if (q === g.charCodes.backslash) {
                if (o += 2, f.input.charCodeAt(o) === g.charCodes.leftCurlyBrace) {
                    for (; o < f.input.length && f.input.charCodeAt(o) !== g.charCodes.rightCurlyBrace;)
                        o++;
                    o++;
                }
            } else {
                if (q !== g.charCodes.atSign || f.input.charCodeAt(o + 1) !== g.charCodes.atSign)
                    break;
                o += 2;
            }
        }
        f.state.pos = o, (0, i.finishToken)(k.TokenType.name);
    }
}), c.register('FvAgy', function(d, e) {
    b(d.exports, 'READ_WORD_TREE', function() {
        return _h;
    });
    var f = c('pvm6x'),
        g = c('PmE4s');
    const _h = new Int32Array([
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
        f.ContextualKeyword._abstract << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._accessor << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        f.ContextualKeyword._as << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._assert << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._asserts << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._async << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._await << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._break << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._case << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._catch << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._checks << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._class << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._const << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._constructor << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._continue << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._debugger << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._declare << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._default << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._delete << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (g.TokenType._do << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._else << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._enum << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._export << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._exports << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._extends << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._false << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._finally << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._for << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._from << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._function << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._get << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._global << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._if << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._implements << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._import << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (g.TokenType._in << 1),
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
        f.ContextualKeyword._infer << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._instanceof << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._interface << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        f.ContextualKeyword._is << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._keyof << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._let << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._mixins << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._module << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._namespace << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._new << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._null << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._of << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._opaque << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._out << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._override << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._private << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._protected << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        f.ContextualKeyword._proto << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._public << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._readonly << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._require << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._return << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._satisfies << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._set << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._static << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._super << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._switch << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._symbol << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._this << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._throw << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._true << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        1 + (g.TokenType._try << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._type << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._typeof << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._unique << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        f.ContextualKeyword._using << 1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._var << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._void << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._while << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._with << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
        1 + (g.TokenType._yield << 1),
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
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
}), c.register('Beerk', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('PmE4s');

    function _g(h, i = h.currentIndex()) {
        let j = i + 1;
        if (_h(h, j)) {
            const k = h.identifierNameAtIndex(i);
            return {
                isType: !1,
                leftName: k,
                rightName: k,
                endIndex: j
            };
        }
        if (j++, _h(h, j))
            return {
                isType: !0,
                leftName: null,
                rightName: null,
                endIndex: j
            };
        if (j++, _h(h, j))
            return {
                isType: !1,
                leftName: h.identifierNameAtIndex(i),
                rightName: h.identifierNameAtIndex(i + 2),
                endIndex: j
            };
        if (j++, _h(h, j))
            return {
                isType: !0,
                leftName: null,
                rightName: null,
                endIndex: j
            };
        throw new Error(`Unexpected import/export specifier at ${ i }`);
    }

    function _h(i, j) {
        const k = i.tokens[j];
        return k.type === f.TokenType.braceR || k.type === f.TokenType.comma;
    }
}), c.register('bK1n9', function(d, e) {
    b(d.exports, 'getNonTypeIdentifiers', function() {
        return _j;
    });
    var f = c('SGA4o'),
        g = c('PmE4s'),
        h = c('gcxKj'),
        i = c('Kiy9o');

    function _j(k, l) {
        const m = (0, i.default)(l),
            n = new Set();
        for (let o = 0; o < k.tokens.length; o++) {
            const p = k.tokens[o];
            if (p.type !== g.TokenType.name || p.isType || p.identifierRole !== f.IdentifierRole.Access && p.identifierRole !== f.IdentifierRole.ObjectShorthand && p.identifierRole !== f.IdentifierRole.ExportAccess || p.shadowsGlobal || n.add(k.identifierNameForToken(p)), p.type === g.TokenType.jsxTagStart && n.add(m.base), p.type === g.TokenType.jsxTagStart && o + 1 < k.tokens.length && k.tokens[o + 1].type === g.TokenType.jsxTagEnd && (n.add(m.base), n.add(m.fragmentBase)), p.type === g.TokenType.jsxName && p.identifierRole === f.IdentifierRole.Access) {
                const q = k.identifierNameForToken(p);
                (0, h.startsWithLowerCase)(q) && k.tokens[o + 1].type !== g.TokenType.dot || n.add(k.identifierNameForToken(p));
            }
        }
        return n;
    }
}), c.register('gcxKj', function(d, e) {
    b(d.exports, 'default', function() {
        return _l;
    }), b(d.exports, 'startsWithLowerCase', function() {
        return _m;
    });
    var f = c('KC613'),
        g = c('SGA4o'),
        h = c('PmE4s'),
        i = c('MYjp2'),
        j = c('Kiy9o'),
        k = c('7q5Ai');
    class _l extends k.default {
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
            return !!this.tokens.matches1(h.TokenType.jsxTagStart) && (this.processJSXTag(), !0);
        }
        getPrefixCode() {
            let m = '';
            if (this.filenameVarName && (m += `const ${ this.filenameVarName } = ${ JSON.stringify(this.options.filePath || '') };`), this.isAutomaticRuntime)
                if (this.importProcessor)
                    for (const [n, o] of Object.entries(this.cjsAutomaticModuleNameResolutions))
                        m += `var ${ o } = require("${ n }");`;
                else {
                    const {
                        createElement: p,
                        ...q
                    } = this.esmAutomaticImportNameResolutions;
                    p && (m += `import {createElement as ${ p }} from "${ this.jsxImportSource }";`);
                    const r = Object.entries(q).map(([s, t]) => `${ s } as ${ t }`).join(', ');
                    if (r) {
                        s += `import {${ r }} from "${ this.jsxImportSource + (this.options.production ? '/jsx-runtime' : '/jsx-dev-runtime') }";`;
                    }
                }
            return m;
        }
        processJSXTag() {
            const {
                jsxRole: m,
                start: n
            } = this.tokens.currentToken(), o = this.options.production ? null : this.getElementLocationCode(n);
            this.isAutomaticRuntime && m !== g.JSXRole.KeyAfterPropSpread ? this.transformTagToJSXFunc(o, m) : this.transformTagToCreateElement(o);
        }
        getElementLocationCode(m) {
            return `lineNumber: ${ this.getLineNumberForIndex(m) }`;
        }
        getLineNumberForIndex(m) {
            const n = this.tokens.code;
            for (; this.lastIndex < m && this.lastIndex < n.length;)
                '\n' === n[this.lastIndex] && this.lastLineNumber++, this.lastIndex++;
            return this.lastLineNumber;
        }
        transformTagToJSXFunc(m, n) {
            const o = n === g.JSXRole.StaticChildren;
            this.tokens.replaceToken(this.getJSXFuncInvocationCode(o));
            let p = null;
            if (this.tokens.matches1(h.TokenType.jsxTagEnd))
                this.tokens.replaceToken(`${ this.getFragmentCode() }, {`), this.processAutomaticChildrenAndEndProps(n);
            else {
                if (this.processTagIntro(), this.tokens.appendCode(', {'), p = this.processProps(!0), this.tokens.matches2(h.TokenType.slash, h.TokenType.jsxTagEnd))
                    this.tokens.appendCode('}');
                else {
                    if (!this.tokens.matches1(h.TokenType.jsxTagEnd))
                        throw new Error('Expected either /> or > at the end of the tag.');
                    this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(n);
                }
                p && this.tokens.appendCode(`, ${ p }`);
            }
            for (this.options.production || (null === p && this.tokens.appendCode(', void 0'), this.tokens.appendCode(`, ${ o }, ${ this.getDevSource(m) }, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(h.TokenType.jsxTagEnd);)
                this.tokens.removeToken();
            this.tokens.replaceToken(')');
        }
        transformTagToCreateElement(m) {
            if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(h.TokenType.jsxTagEnd))
                this.tokens.replaceToken(`${ this.getFragmentCode() }, null`), this.processChildren(!0);
            else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(m), this.tokens.matches2(h.TokenType.slash, h.TokenType.jsxTagEnd));
            else {
                if (!this.tokens.matches1(h.TokenType.jsxTagEnd))
                    throw new Error('Expected either /> or > at the end of the tag.');
                this.tokens.removeToken(), this.processChildren(!0);
            }
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(h.TokenType.jsxTagEnd);)
                this.tokens.removeToken();
            this.tokens.replaceToken(')');
        }
        getJSXFuncInvocationCode(m) {
            return this.options.production ? m ? this.claimAutoImportedFuncInvocation('jsxs', '/jsx-runtime') : this.claimAutoImportedFuncInvocation('jsx', '/jsx-runtime') : this.claimAutoImportedFuncInvocation('jsxDEV', '/jsx-dev-runtime');
        }
        getCreateElementInvocationCode() {
            if (this.isAutomaticRuntime)
                return this.claimAutoImportedFuncInvocation('createElement', '');
            {
                const {
                    jsxPragmaInfo: m
                } = this;
                return `${ this.importProcessor && this.importProcessor.getIdentifierReplacement(m.base) || m.base }${ m.suffix }(`;
            }
        }
        getFragmentCode() {
            if (this.isAutomaticRuntime)
                return this.claimAutoImportedName('Fragment', this.options.production ? '/jsx-runtime' : '/jsx-dev-runtime');
            {
                const {
                    jsxPragmaInfo: m
                } = this;
                return (this.importProcessor && this.importProcessor.getIdentifierReplacement(m.fragmentBase) || m.fragmentBase) + m.fragmentSuffix;
            }
        }
        claimAutoImportedFuncInvocation(m, n) {
            const o = this.claimAutoImportedName(m, n);
            return this.importProcessor ? `${ o }.call(void 0, ` : `${ o }(`;
        }
        claimAutoImportedName(m, n) {
            if (this.importProcessor) {
                const o = this.jsxImportSource + n;
                return this.cjsAutomaticModuleNameResolutions[o] || (this.cjsAutomaticModuleNameResolutions[o] = this.importProcessor.getFreeIdentifierForPath(o)), `${ this.cjsAutomaticModuleNameResolutions[o] }.${ m }`;
            }
            return this.esmAutomaticImportNameResolutions[m] || (this.esmAutomaticImportNameResolutions[m] = this.nameManager.claimFreeName(`_${ m }`)), this.esmAutomaticImportNameResolutions[m];
        }
        processTagIntro() {
            let m = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[m].isType || !this.tokens.matches2AtIndex(m - 1, h.TokenType.jsxName, h.TokenType.jsxName) && !this.tokens.matches2AtIndex(m - 1, h.TokenType.greaterThan, h.TokenType.jsxName) && !this.tokens.matches1AtIndex(m, h.TokenType.braceL) && !this.tokens.matches1AtIndex(m, h.TokenType.jsxTagEnd) && !this.tokens.matches2AtIndex(m, h.TokenType.slash, h.TokenType.jsxTagEnd);)
                m++;
            if (m === this.tokens.currentIndex() + 1) {
                const n = this.tokens.identifierName();
                _m(n) && this.tokens.replaceToken(`'${ n }'`);
            }
            for (; this.tokens.currentIndex() < m;)
                this.rootTransformer.processToken();
        }
        processPropsObjectWithDevInfo(m) {
            const n = this.options.production ? '' : `__self: this, __source: ${ this.getDevSource(m) }`;
            this.tokens.matches1(h.TokenType.jsxName) || this.tokens.matches1(h.TokenType.braceL) ? (this.tokens.appendCode(', {'), this.processProps(!1), n ? this.tokens.appendCode(` ${ n }}`) : this.tokens.appendCode('}')) : n ? this.tokens.appendCode(`, {${ n }}`) : this.tokens.appendCode(', null');
        }
        processProps(m) {
            let n = null;
            for (;;) {
                if (this.tokens.matches2(h.TokenType.jsxName, h.TokenType.eq)) {
                    const o = this.tokens.identifierName();
                    if (m && 'key' === o) {
                        null !== n && this.tokens.appendCode(n.replace(/[^\n]/g, '')), this.tokens.removeToken(), this.tokens.removeToken();
                        const p = this.tokens.snapshot();
                        this.processPropValue(), n = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(p);
                        continue;
                    }
                    this.processPropName(o), this.tokens.replaceToken(': '), this.processPropValue();
                } else if (this.tokens.matches1(h.TokenType.jsxName)) {
                    const o = this.tokens.identifierName();
                    this.processPropName(o), this.tokens.appendCode(': true');
                } else {
                    if (!this.tokens.matches1(h.TokenType.braceL))
                        break;
                    this.tokens.replaceToken(''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken('');
                }
                this.tokens.appendCode(',');
            }
            return n;
        }
        processPropName(m) {
            m.includes('-') ? this.tokens.replaceToken(`'${ m }'`) : this.tokens.copyToken();
        }
        processPropValue() {
            this.tokens.matches1(h.TokenType.braceL) ? (this.tokens.replaceToken(''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken('')) : this.tokens.matches1(h.TokenType.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue();
        }
        processStringPropValue() {
            const m = this.tokens.currentToken(),
                n = this.tokens.code.slice(m.start + 1, m.end - 1),
                o = _n(n),
                p = function(q) {
                    let r = '';
                    for (let s = 0; s < q.length; s++) {
                        const t = q[s];
                        if ('\n' === t)
                            if (/\s/.test(q[s + 1]))
                                for (r += ' '; s < q.length && /\s/.test(q[s + 1]);)
                                    s++;
                            else
                                r += '\n';
                        else if ('&' === t) {
                            const {
                                entity: u,
                                newI: v
                            } = _o(q, s + 1);
                            r += u, s = v - 1;
                        } else
                            r += t;
                    }
                    return JSON.stringify(r);
                }(n);
            this.tokens.replaceToken(p + o);
        }
        processAutomaticChildrenAndEndProps(m) {
            m === g.JSXRole.StaticChildren ? (this.tokens.appendCode(' children: ['), this.processChildren(!1), this.tokens.appendCode(']}')) : (m === g.JSXRole.OneChild && this.tokens.appendCode(' children: '), this.processChildren(!1), this.tokens.appendCode('}'));
        }
        processChildren(m) {
            let n = m;
            for (;;) {
                if (this.tokens.matches2(h.TokenType.jsxTagStart, h.TokenType.slash))
                    return;
                let o = !1;
                if (this.tokens.matches1(h.TokenType.braceL))
                    this.tokens.matches2(h.TokenType.braceL, h.TokenType.braceR) ? (this.tokens.replaceToken(''), this.tokens.replaceToken('')) : (this.tokens.replaceToken(n ? ', ' : ''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(''), o = !0);
                else if (this.tokens.matches1(h.TokenType.jsxTagStart))
                    this.tokens.appendCode(n ? ', ' : ''), this.processJSXTag(), o = !0;
                else {
                    if (!this.tokens.matches1(h.TokenType.jsxText) && !this.tokens.matches1(h.TokenType.jsxEmptyText))
                        throw new Error('Unexpected token when processing JSX children.');
                    o = this.processChildTextElement(n);
                }
                o && (n = !0);
            }
        }
        processChildTextElement(m) {
            const n = this.tokens.currentToken(),
                o = this.tokens.code.slice(n.start, n.end),
                p = _n(o),
                q = function(r) {
                    let s = '',
                        t = '',
                        u = !1,
                        v = !1;
                    for (let w = 0; w < r.length; w++) {
                        const x = r[w];
                        if (' ' === x || '\t' === x || '\r' === x)
                            u || (t += x);
                        else if ('\n' === x)
                            t = '', u = !0;
                        else {
                            if (v && u && (s += ' '), s += t, t = '', '&' === x) {
                                const {
                                    entity: y,
                                    newI: z
                                } = _o(r, w + 1);
                                w = z - 1, s += y;
                            } else
                                s += x;
                            v = !0, u = !1;
                        }
                    }
                    u || (s += t);
                    return JSON.stringify(s);
                }(o);
            return '""' === q ? (this.tokens.replaceToken(p), !1) : (this.tokens.replaceToken(`${ m ? ', ' : '' }${ q }${ p }`), !0);
        }
        getDevSource(m) {
            return `{fileName: ${ this.getFilenameVarName() }, ${ m }}`;
        }
        getFilenameVarName() {
            return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName('_jsxFileName')), this.filenameVarName;
        }
        constructor(m, n, o, p, q) {
            super(), this.rootTransformer = m, this.tokens = n, this.importProcessor = o, this.nameManager = p, this.options = q, _l.prototype.__init.call(this), _l.prototype.__init2.call(this), _l.prototype.__init3.call(this), _l.prototype.__init4.call(this), _l.prototype.__init5.call(this), this.jsxPragmaInfo = (0, j.default)(q), this.isAutomaticRuntime = 'automatic' === q.jsxRuntime, this.jsxImportSource = q.jsxImportSource || 'react';
        }
    }

    function _m(n) {
        const o = n.charCodeAt(0);
        return o >= i.charCodes.lowercaseA && o <= i.charCodes.lowercaseZ;
    }

    function _n(o) {
        let p = 0,
            q = 0;
        for (const r of o)
            '\n' === r ? (p++, q = 0) : ' ' === r && q++;
        return '\n'.repeat(p) + ' '.repeat(q);
    }

    function _o(p, q) {
        let r, s = '',
            t = 0,
            u = q;
        if ('#' === p[u]) {
            let v, w = 10;
            if (u++, 'x' === p[u])
                for (w = 16, u++, v = u; u < p.length && ((j = p.charCodeAt(u)) >= i.charCodes.digit0 && j <= i.charCodes.digit9 || j >= i.charCodes.lowercaseA && j <= i.charCodes.lowercaseF || j >= i.charCodes.uppercaseA && j <= i.charCodes.uppercaseF);)
                    u++;
            else
                for (v = u; u < p.length && _p(p.charCodeAt(u));)
                    u++;
            if (';' === p[u]) {
                const x = p.slice(v, u);
                x && (u++, r = String.fromCodePoint(parseInt(x, w)));
            }
        } else
            for (; u < p.length && t++ < 10;) {
                const v = p[u];
                if (u++, ';' === v) {
                    r = f.default.get(s);
                    break;
                }
                s += v;
            }
        var v;
        return r ? {
            entity: r,
            newI: u
        } : {
            entity: '&',
            newI: q
        };
    }

    function _p(q) {
        return q >= i.charCodes.digit0 && q <= i.charCodes.digit9;
    }
}), c.register('KC613', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    var _f = new Map([
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
}), c.register('Kiy9o', function(d, e) {
    function f(g) {
        const [h, i] = _g(g.jsxPragma || 'React.createElement'), [j, k] = _g(g.jsxFragmentPragma || 'React.Fragment');
        return {
            base: h,
            suffix: i,
            fragmentBase: j,
            fragmentSuffix: k
        };
    }

    function _g(h) {
        let i = h.indexOf('.');
        return -1 === i && (i = h.length), [
            h.slice(0, i),
            h.slice(i)
        ];
    }
    b(d.exports, 'default', function() {
        return f;
    });
}), c.register('7q5Ai', function(d, e) {
    b(d.exports, 'default', function() {
        return _f;
    });
    class _f {
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
}), c.register('Lm4Jx', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('c0qvA'),
        g = c('MYjp2');

    function _h({
        code: i,
        mappings: j
    }, k, l, m, n) {
        const o = function(p, q) {
                const r = new Array(q.length);
                let s = 0,
                    t = q[s].start,
                    u = 0;
                for (let v = 0; v < p.length; v++)
                    v === t && (r[s] = t - u, s++, t = q[s].start), p.charCodeAt(v) === g.charCodes.lineFeed && (u = v + 1);
                return r;
            }(m, n),
            p = new(0, f.GenMapping)({
                file: l.compiledFilename
            });
        let q = 0,
            r = j[0];
        for (; void 0 === r && q < j.length - 1;)
            q++, r = j[q];
        let s = 0,
            t = 0;
        r !== t && (0, f.maybeAddSegment)(p, s, 0, k, s, 0);
        for (let u = 0; u < i.length; u++) {
            if (u === r) {
                const v = r - t,
                    w = o[q];
                for ((0, f.maybeAddSegment)(p, s, v, k, s, w);
                    (r === u || void 0 === r) && q < j.length - 1;)
                    q++, r = j[q];
            }
            i.charCodeAt(u) === g.charCodes.lineFeed && (s++, t = u + 1, r !== t && (0, f.maybeAddSegment)(p, s, 0, k, s, 0));
        }
        const {
            sourceRoot: v,
            sourcesContent: w,
            ...x
        } = (0, f.toEncodedMap)(p);
        return x;
    }
}), c.register('c0qvA', function(d, e) {
    b(d.exports, 'maybeAddSegment', function() {
        return _k;
    }), b(d.exports, 'toEncodedMap', function() {
        return _o;
    }), b(d.exports, 'GenMapping', function() {
        return _s;
    });
    var f = c('fXJoQ'),
        g = c('xkb5B'),
        h = c('LXY+u');
    let i, j, _k, l, m, n, _o, p, q, r;
    class _s {
        constructor({
            file: t,
            sourceRoot: u
        } = {}) {
            this._names = new(0, f.SetArray)(), this._sources = new(0, f.SetArray)(), this._sourcesContent = [], this._mappings = [], this.file = t, this.sourceRoot = u;
        }
    }

    function t(u, v, w) {
        for (let x = u.length; x > v; x--)
            u[x] = u[x - 1];
        u[v] = x;
    }

    function u(v, w) {
        for (let x = 0; x < w.length; x++)
            (0, f.put)(v, w[x]);
    }

    function v(w, x, y) {
        const {
            generated: z,
            source: A,
            original: B,
            name: C,
            content: D
        } = y;
        if (!A)
            return r(w, x, z.line - 1, z.column, null, null, null, null, null);
        const E = A;
        return r(w, x, z.line - 1, z.column, E, B.line - 1, B.column, C, D);
    }
    i = (d, b, c, e, f, g, h, i) => r(!1, d, b, c, e, f, g, h, i), _k = (d, b, c, e, f, g, h, i) => r(!0, d, b, c, e, f, g, h, i), j = (d, b) => v(!1, d, b), l = (d, b) => v(!0, d, b), m = (d, b, c) => {
        const {
            _sources: w,
            _sourcesContent: x
        } = d;
        x[(0, f.put)(w, b)] = c;
    }, n = d => {
        const {
            file: w,
            sourceRoot: x,
            _mappings: y,
            _sources: z,
            _sourcesContent: A,
            _names: B
        } = d;
        return function(C) {
            const {
                length: D
            } = C;
            let E = D;
            for (let F = E - 1; F >= 0 && !(C[F].length > 0); E = F, F--);
            E < F && (C.length = E);
        }(y), {
            version: 3,
            file: w || void 0,
            names: B.array,
            sourceRoot: x || void 0,
            sources: z.array,
            sourcesContent: A,
            mappings: y
        };
    }, _o = d => {
        const w = n(d);
        return Object.assign(Object.assign({}, w), {
            mappings: (0, g.encode)(w.mappings)
        });
    }, q = d => {
        const w = [],
            {
                _mappings: x,
                _sources: y,
                _names: z
            } = d;
        for (let A = 0; A < x.length; A++) {
            const B = x[A];
            for (let C = 0; C < B.length; C++) {
                const D = B[C],
                    E = {
                        line: A + 1,
                        column: D[0]
                    };
                let F, G, H;
                1 !== D.length && (F = y.array[D[1]], G = {
                    line: D[2] + 1,
                    column: D[3]
                }, 5 === D.length && (H = z.array[D[4]])), w.push({
                    generated: E,
                    source: F,
                    original: G,
                    name: H
                });
            }
        }
        return w;
    }, p = d => {
        const w = new(0, h.TraceMap)(d),
            x = new _s({
                file: w.file,
                sourceRoot: w.sourceRoot
            });
        return u(x._names, w.names), u(x._sources, w.sources), x._sourcesContent = w.sourcesContent || w.sources.map(() => null), x._mappings = (0, h.decodedMappings)(w), x;
    }, r = (d, b, c, e, g, h, i, j, _k) => {
        const {
            _mappings: w,
            _sources: x,
            _sourcesContent: y,
            _names: z
        } = b, A = function(B, C) {
            for (let D = B.length; D <= C; D++)
                B[D] = [];
            return B[C];
        }(w, c), B = function(C, D) {
            let E = C.length;
            for (let F = E - 1; F >= 0 && !(D >= C[F][0]); E = F--);
            return E;
        }(A, e);
        if (!g) {
            if (d && function(C, D) {
                    if (0 === D)
                        return !0;
                    const E = C[D - 1];
                    return 1 === E.length;
                }(A, B))
                return;
            return t(A, B, [e]);
        }
        const C = (0, f.put)(x, g),
            D = j ? (0, f.put)(z, j) : -1;
        if (C === y.length && (y[C] = null != _k ? _k : null), !d || ! function(E, F, G, H, I, J) {
                if (0 === F)
                    return !1;
                const K = E[F - 1];
                return 1 !== K.length && G === K[1] && H === K[2] && I === K[3] && J === (5 === K.length ? K[4] : -1);
            }(A, B, C, h, i, D))
            return t(A, B, j ? [
                e,
                C,
                h,
                i,
                D
            ] : [
                e,
                C,
                h,
                i
            ]);
    };
}), c.register('fXJoQ', function(d, e) {
    let f, g, h;
    b(d.exports, 'put', function() {
        return g;
    }), b(d.exports, 'SetArray', function() {
        return _i;
    });
    class _i {
        constructor() {
            this._indexes = {
                __proto__: null
            }, this.array = [];
        }
    }
    f = (d, b) => d._indexes[b], g = (d, b) => {
        const j = f(d, b);
        if (void 0 !== j)
            return j;
        const {
            array: k,
            _indexes: l
        } = d;
        return l[b] = k.push(b) - 1;
    }, h = d => {
        const {
            array: j,
            _indexes: k
        } = d;
        0 !== j.length && (k[j.pop()] = void 0);
    };
}), c.register('xkb5B', function(d, e) {
    b(d.exports, 'decode', function() {
        return _n;
    }), b(d.exports, 'encode', function() {
        return _t;
    });
    var f = c('gUNWj').Buffer;
    const g = ','.charCodeAt(0),
        h = ';'.charCodeAt(0),
        i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        j = new Uint8Array(64),
        k = new Uint8Array(128);
    for (let l = 0; l < i.length; l++) {
        const m = i.charCodeAt(l);
        j[l] = m, k[m] = l;
    }
    const m = 'undefined' != typeof TextDecoder ? new TextDecoder() : void 0 !== f ? {
        decode: l => f.from(l.buffer, l.byteOffset, l.byteLength).toString()
    } : {
        decode(n) {
            let o = '';
            for (let p = 0; p < n.length; p++)
                o += String.fromCharCode(n[p]);
            return o;
        }
    };

    function _n(o) {
        const p = new Int32Array(5),
            q = [];
        let r = 0;
        do {
            const s = _o(o, r),
                t = [];
            let u = !0,
                v = 0;
            p[0] = 0;
            for (let w = r; w < s; w++) {
                let x;
                w = _p(o, w, p, 0);
                const y = p[0];
                y < v && (u = !1), v = y, _q(o, w, s) ? (w = _p(o, w, p, 1), w = _p(o, w, p, 2), w = _p(o, w, p, 3), _q(o, w, s) ? (w = _p(o, w, p, 4), x = [
                    y,
                    p[1],
                    p[2],
                    p[3],
                    p[4]
                ]) : x = [
                    y,
                    p[1],
                    p[2],
                    p[3]
                ]) : x = [y], t.push(x);
            }
            u || _r(t), w.push(t), r = s + 1;
        } while (r <= o.length);
        return q;
    }

    function _o(p, q) {
        const r = p.indexOf(';', q);
        return -1 === r ? p.length : r;
    }

    function _p(q, r, s, t) {
        let u = 0,
            v = 0,
            w = 0;
        do {
            const x = q.charCodeAt(r++);
            w = k[x], u |= (31 & w) << v, v += 5;
        } while (32 & w);
        const x = 1 & u;
        return u >>>= 1, x && (u = -2147483648 | -u), s[t] += u, r;
    }

    function _q(r, s, t) {
        return !(s >= t) && r.charCodeAt(s) !== g;
    }

    function _r(s) {
        s.sort(_s);
    }

    function _s(t, u) {
        return t[0] - u[0];
    }

    function _t(u) {
        const v = new Int32Array(5),
            w = 16384,
            x = 16348,
            y = new Uint8Array(w),
            z = y.subarray(0, x);
        let A = 0,
            B = '';
        for (let C = 0; C < u.length; C++) {
            const D = u[C];
            if (C > 0 && (A === w && (B += m.decode(y), A = 0), y[A++] = h), 0 !== D.length) {
                v[0] = 0;
                for (let E = 0; E < D.length; E++) {
                    const F = D[E];
                    A > x && (B += m.decode(z), y.copyWithin(0, x, A), A -= x), E > 0 && (y[A++] = g), A = _u(y, A, v, F, 0), 1 !== F.length && (A = _u(y, A, v, F, 1), A = _u(y, A, v, F, 2), A = _u(y, A, v, F, 3), 4 !== F.length && (A = _u(y, A, v, F, 4)));
                }
            }
        }
        return B + m.decode(y.subarray(0, A));
    }

    function _u(v, w, x, y, z) {
        const A = y[z];
        let B = A - x[z];
        x[z] = A, B = B < 0 ? -B << 1 | 1 : B << 1;
        do {
            let C = 31 & B;
            B >>>= 5, B > 0 && (C |= 32), v[w++] = j[C];
        } while (B > 0);
        return w;
    }
}), c.register('LXY+u', function(d, e) {
    b(d.exports, 'TraceMap', function() {
        return _G;
    }), b(d.exports, 'decodedMappings', function() {
        return _w;
    });
    var f = c('xkb5B'),
        g = c('z+8zm');

    function h(i, j) {
        return j && !j.endsWith('/') && (j += '/'), (0, g.default)(i, j);
    }

    function i(j, k) {
        for (let l = k; l < j.length; l++)
            if (!_j(j[l]))
                return l;
        return j.length;
    }

    function _j(k) {
        for (let l = 1; l < k.length; l++)
            if (k[l][0] < k[l - 1][0])
                return !1;
        return !0;
    }

    function k(l, m) {
        return m || (l = l.slice()), l.sort(_l);
    }

    function _l(m, n) {
        return m[0] - n[0];
    }
    let m = !1;

    function n(o, p, q) {
        for (let r = q + 1; r < o.length && o[r][0] === p; q = r++);
        return q;
    }

    function o(p, q, r) {
        for (let s = r - 1; s >= 0 && p[s][0] === q; r = s--);
        return r;
    }

    function p() {
        return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1
        };
    }

    function q(r, s, t, u) {
        const {
            lastKey: v,
            lastNeedle: w,
            lastIndex: x
        } = t;
        let y = 0,
            z = r.length - 1;
        if (u === v) {
            if (s === w)
                return m = -1 !== x && r[x][0] === s, x;
            s >= w ? y = -1 === x ? 0 : x : z = x;
        }
        return t.lastKey = u, t.lastNeedle = s, t.lastIndex = function(A, B, C, D) {
            for (; C <= D;) {
                const E = C + (D - C >> 1),
                    F = A[E][0] - B;
                if (0 === F)
                    return m = !0, E;
                F < 0 ? C = E + 1 : D = E - 1;
            }
            return m = !1, C - 1;
        }(r, s, y, z);
    }

    function r(s, t, u) {
        for (let v = s.length; v > t; v--)
            s[v] = s[v - 1];
        s[t] = v;
    }

    function s() {
        return {
            __proto__: null
        };
    }
    const t = '`line` must be greater than 0 (lines start at line 1)',
        u = '`column` must be greater than or equal to 0 (columns start at column 0)';
    let v, _w, x, y, z, A, B, C, D, E, F;
    class _G {
        constructor(H, I) {
            const J = 'string' == typeof H;
            if (!J && H._decodedMemo)
                return H;
            const K = J ? JSON.parse(H) : H,
                {
                    version: L,
                    file: M,
                    names: N,
                    sourceRoot: O,
                    sources: P,
                    sourcesContent: Q
                } = K;
            this.version = L, this.file = M, this.names = N, this.sourceRoot = O, this.sources = P, this.sourcesContent = Q;
            const R = h(O || '', function(S) {
                if (!S)
                    return '';
                const T = S.lastIndexOf('/');
                return S.slice(0, T + 1);
            }(I));
            this.resolvedSources = P.map(H => h(H || '', R));
            const {
                mappings: S
            } = K;
            'string' == typeof S ? (this._encoded = S, this._decoded = void 0) : (this._encoded = void 0, this._decoded = function(T, U) {
                const V = i(T, 0);
                if (V === T.length)
                    return T;
                U || (T = T.slice());
                for (let W = V; W < T.length; W = i(T, W + 1))
                    T[W] = k(T[W], U);
                return T;
            }(S, J)), this._decodedMemo = {
                lastKey: -1,
                lastNeedle: -1,
                lastIndex: -1
            }, this._bySources = void 0, this._bySourceMemos = void 0;
        }
    }

    function H(I, J) {
        return {
            version: I.version,
            file: I.file,
            names: I.names,
            sourceRoot: I.sourceRoot,
            sources: I.sources,
            sourcesContent: I.sourcesContent,
            mappings: J
        };
    }

    function I(J, K, L, M) {
        return {
            source: J,
            line: K,
            column: L,
            name: M
        };
    }

    function J(K, L) {
        return {
            line: K,
            column: L
        };
    }

    function K(L, M, N, O, P) {
        let Q = q(L, O, M, N);
        return m ? Q = (-1 === P ? n : o)(L, O, Q) : -1 === P && Q++, -1 === Q || Q === L.length ? -1 : Q;
    }
    (() => {
        function L(M, N, O, P, Q, R) {
            if (--O < 0)
                throw new Error(t);
            if (P < 0)
                throw new Error(u);
            const {
                sources: S,
                resolvedSources: T
            } = M;
            let U = S.indexOf(N);
            if (-1 === U && (U = T.indexOf(N)), -1 === U)
                return R ? [] : J(null, null);
            const V = M._bySources || (M._bySources = function(W, X) {
                    const Y = X.map(s);
                    for (let Z = 0; Z < W.length; Z++) {
                        const $ = W[Z];
                        for (let ab = 0; ab < $.length; ab++) {
                            const bb = $[ab];
                            if (1 === bb.length)
                                continue;
                            const cb = bb[1],
                                db = bb[2],
                                eb = bb[3],
                                fb = Y[cb],
                                gb = fb[db] || (fb[db] = []),
                                hb = X[cb],
                                ib = n(gb, eb, q(gb, eb, hb, db));
                            r(gb, hb.lastIndex = ib + 1, [
                                eb,
                                Z,
                                bb[0]
                            ]);
                        }
                    }
                    return Y;
                }(_w(M), M._bySourceMemos = S.map(p))),
                W = V[U][O];
            if (null == W)
                return R ? [] : J(null, null);
            const X = M._bySourceMemos[U];
            if (R)
                return function(Y, Z, $, ab, bb) {
                    let cb = K(Y, Z, $, ab, 1);
                    m || -1 !== bb || cb++;
                    if (-1 === cb || cb === Y.length)
                        return [];
                    const db = m ? ab : Y[cb][0];
                    m || (cb = o(Y, db, cb));
                    const eb = n(Y, db, cb),
                        fb = [];
                    for (; cb <= eb; cb++) {
                        const gb = Y[cb];
                        fb.push(J(gb[1] + 1, gb[2]));
                    }
                    return fb;
                }(W, X, O, P, Q);
            const Y = K(W, X, O, P, Q);
            if (-1 === Y)
                return J(null, null);
            const Z = W[Y];
            return J(Z[1] + 1, Z[2]);
        }
        v = L => {
            var M;
            return null !== (M = L._encoded) && void 0 !== M ? M : L._encoded = (0, f.encode)(L._decoded);
        }, _w = L => L._decoded || (L._decoded = (0, f.decode)(L._encoded)), x = (L, b, c) => {
            const M = _w(L);
            if (b >= M.length)
                return null;
            const N = M[b],
                O = K(N, L._decodedMemo, b, c, 1);
            return -1 === O ? null : N[O];
        }, y = (L, {
            line: M,
            column: N,
            bias: O
        }) => {
            if (--M < 0)
                throw new Error(t);
            if (N < 0)
                throw new Error(u);
            const P = _w(L);
            if (M >= P.length)
                return I(null, null, null, null);
            const Q = P[M],
                R = K(Q, L._decodedMemo, M, N, O || 1);
            if (-1 === R)
                return I(null, null, null, null);
            const S = Q[R];
            if (1 === S.length)
                return I(null, null, null, null);
            const {
                names: T,
                resolvedSources: U
            } = L;
            return I(U[S[1]], S[2] + 1, S[3], 5 === S.length ? T[S[4]] : null);
        }, A = (M, {
            source: P,
            line: Q,
            column: R,
            bias: S
        }) => L(M, P, Q, R, S || -1, !0), z = (M, {
            source: T,
            line: U,
            column: V,
            bias: W
        }) => L(M, T, U, V, W || 1, !1), B = (L, M) => {
            const X = _w(L),
                {
                    names: Y,
                    resolvedSources: Z
                } = L;
            for (let $ = 0; $ < X.length; $++) {
                const ab = X[$];
                for (let bb = 0; bb < ab.length; bb++) {
                    const cb = ab[bb],
                        db = $ + 1,
                        eb = cb[0];
                    let fb = null,
                        gb = null,
                        hb = null,
                        ib = null;
                    1 !== cb.length && (fb = Z[cb[1]], gb = cb[2] + 1, hb = cb[3]), 5 === cb.length && (ib = Y[cb[4]]), M({
                        generatedLine: db,
                        generatedColumn: eb,
                        source: fb,
                        originalLine: gb,
                        originalColumn: hb,
                        name: ib
                    });
                }
            }
        }, C = (L, M) => {
            const {
                sources: X,
                resolvedSources: Y,
                sourcesContent: Z
            } = L;
            if (null == Z)
                return null;
            let $ = X.indexOf(M);
            return -1 === $ && ($ = Y.indexOf(M)), -1 === $ ? null : Z[$];
        }, D = (L, M) => {
            const X = new _G(H(L, []), M);
            return X._decoded = L.mappings, X;
        }, E = L => H(L, _w(L)), F = L => H(L, v(L));
    })();
}), c.register('z+8zm', function(d, e) {
    b(d.exports, 'default', function() {
        return _q;
    });
    const f = /^[\w+.-]+:\/\//,
        g = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
        h = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    var i, j;

    function k(l) {
        return l.startsWith('/');
    }

    function l(m) {
        return /^[.?#]/.test(m);
    }

    function m(n) {
        const o = g.exec(n);
        return _n(o[1], o[2] || '', o[3], o[4] || '', o[5] || '/', o[6] || '', o[7] || '');
    }

    function _n(o, p, q, r, s, t, u) {
        return {
            scheme: o,
            user: p,
            host: q,
            port: r,
            path: s,
            query: t,
            hash: u,
            type: i.Absolute
        };
    }

    function o(p) {
        if (function(q) {
                return q.startsWith('//');
            }(p)) {
            const q = m('http:' + p);
            return q.scheme = '', q.type = i.SchemeRelative, q;
        }
        if (k(p)) {
            const q = m('http://foo.com' + p);
            return q.scheme = '', q.host = '', q.type = i.AbsolutePath, q;
        }
        if (function(q) {
                return q.startsWith('file:');
            }(p))
            return function(q) {
                const r = h.exec(q),
                    s = r[2];
                return _n('file:', '', r[1] || '', '', k(s) ? s : '/' + s, r[3] || '', r[4] || '');
            }(p);
        if (function(q) {
                return f.test(q);
            }(p))
            return m(p);
        const q = m('http://foo.com/' + p);
        return q.scheme = '', q.host = '', q.type = p ? p.startsWith('?') ? i.Query : p.startsWith('#') ? i.Hash : i.RelativePath : i.Empty, q;
    }

    function p(q, r) {
        const s = r <= i.RelativePath,
            t = q.path.split('/');
        let u = 1,
            v = 0,
            w = !1;
        for (let x = 1; x < t.length; x++) {
            const y = t[x];
            y ? (w = !1, '.' !== y && ('..' !== y ? (t[u++] = y, v++) : v ? (w = !0, v--, u--) : s && (t[u++] = y))) : w = !0;
        }
        let y = '';
        for (let z = 1; z < u; z++)
            y += '/' + t[z];
        (!y || w && !y.endsWith('/..')) && (y += '/'), z.path = y;
    }

    function _q(r, s) {
        if (!r && !s)
            return '';
        const t = o(r);
        let u = t.type;
        if (s && u !== i.Absolute) {
            const v = o(s),
                w = v.type;
            switch (u) {
                case i.Empty:
                    t.hash = v.hash;
                case i.Hash:
                    t.query = v.query;
                case i.Query:
                case i.RelativePath:
                    ! function(x, y) {
                        p(y, y.type), '/' === x.path ? x.path = y.path : x.path = function(z) {
                            if (z.endsWith('/..'))
                                return z;
                            const A = z.lastIndexOf('/');
                            return z.slice(0, A + 1);
                        }(y.path) + x.path;
                    }(t, v);
                case i.AbsolutePath:
                    t.user = v.user, t.host = v.host, t.port = v.port;
                case i.SchemeRelative:
                    t.scheme = v.scheme;
            }
            w > u && (u = w);
        }
        p(t, u);
        const v = t.query + t.hash;
        switch (u) {
            case i.Hash:
            case i.Query:
                return v;
            case i.RelativePath: {
                const w = t.path.slice(1);
                return w ? l(s || r) && !l(w) ? './' + w + v : w + v : v || '.';
            }
            case i.AbsolutePath:
                return t.path + v;
            default:
                return t.scheme + '//' + t.user + t.host + t.port + t.path + v;
        }
    }
    (j = i || (i = {}))[j.Empty = 1] = 'Empty', j[j.Hash = 2] = 'Hash', j[j.Query = 3] = 'Query', j[j.RelativePath = 4] = 'RelativePath', j[j.AbsolutePath = 5] = 'AbsolutePath', j[j.SchemeRelative = 6] = 'SchemeRelative', j[j.Absolute = 7] = 'Absolute';
}), c.register('1IWfv', function(d, e) {
    b(d.exports, 'HelperManager', function() {
        return _g;
    });
    const f = {
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
    class _g {
        __init() {
            this.helperNames = {};
        }
        __init2() {
            this.createRequireName = null;
        }
        getHelperName(h) {
            let i = this.helperNames[h];
            return i || (i = this.nameManager.claimFreeName(`_${ h }`), this.helperNames[h] = i, i);
        }
        emitHelpers() {
            let h = '';
            this.helperNames.optionalChainDelete && this.getHelperName('optionalChain'), this.helperNames.asyncOptionalChainDelete && this.getHelperName('asyncOptionalChain');
            for (const [i, j] of Object.entries(f)) {
                const k = this.helperNames[i];
                let l = j;
                'optionalChainDelete' === i ? l = l.replace('OPTIONAL_CHAIN_NAME', this.helperNames.optionalChain) : 'asyncOptionalChainDelete' === i ? l = l.replace('ASYNC_OPTIONAL_CHAIN_NAME', this.helperNames.asyncOptionalChain) : 'require' === i && (null === this.createRequireName && (this.createRequireName = this.nameManager.claimFreeName('_createRequire')), l = l.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), k && (h += ' ', h += l.replace(i, k).replace(/\s+/g, ' ').trim());
            }
            return h;
        }
        constructor(h) {
            this.nameManager = h, _g.prototype.__init.call(this), _g.prototype.__init2.call(this);
        }
    }
}), c.register('JJuKw', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('SGA4o'),
        g = c('PmE4s');

    function _h(i, j, k) {
        (function(l, m) {
            for (const n of l.tokens)
                if (n.type === g.TokenType.name && !n.isType && (0, f.isNonTopLevelDeclaration)(n) && m.has(l.identifierNameForToken(n)))
                    return !0;
            return !1;
        }(i, k) && function(l, m, n) {
            const o = [];
            let p = m.length - 1;
            for (let q = l.tokens.length - 1;; q--) {
                for (; o.length > 0 && o[o.length - 1].startTokenIndex === q + 1;)
                    o.pop();
                for (; p >= 0 && m[p].endTokenIndex === q + 1;)
                    o.push(m[p]), p--;
                if (q < 0)
                    break;
                const r = l.tokens[q],
                    s = l.identifierNameForToken(r);
                if (o.length > 1 && !r.isType && r.type === g.TokenType.name && n.has(s))
                    if ((0, f.isBlockScopedDeclaration)(r))
                        _i(o[o.length - 1], l, s);
                    else if ((0, f.isFunctionScopedDeclaration)(r)) {
                    let t = o.length - 1;
                    for (; t > 0 && !o[t].isFunctionScope;)
                        t--;
                    if (t < 0)
                        throw new Error('Did not find parent function scope.');
                    _i(o[t], l, s);
                }
            }
            if (o.length > 0)
                throw new Error('Expected empty scope stack after processing file.');
        }(i, j, k));
    }

    function _i(j, k, l) {
        for (let m = j.startTokenIndex; m < j.endTokenIndex; m++) {
            const n = k.tokens[m];
            n.type !== g.TokenType.name && n.type !== g.TokenType.jsxName || k.identifierNameForToken(n) !== l || (n.shadowsGlobal = !0);
        }
    }
}), c.register('SM7Hn', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('P6IZP');
    class _g {
        __init() {
            this.usedNames = new Set();
        }
        claimFreeName(h) {
            const i = this.findFreeName(h);
            return this.usedNames.add(i), i;
        }
        findFreeName(h) {
            if (!this.usedNames.has(h))
                return h;
            let i = 2;
            for (; this.usedNames.has(h + String(i));)
                i++;
            return h + String(i);
        }
        constructor(h, i) {
            _g.prototype.__init.call(this), this.usedNames = new Set((0, f.default)(h, i));
        }
    }
}), c.register('P6IZP', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('PmE4s');

    function _g(h, i) {
        const j = [];
        for (const k of i)
            k.type === f.TokenType.name && j.push(h.slice(k.start, k.end));
        return j;
    }
}), c.register('Gy9Bg', function(d, e) {
    b(d.exports, 'validateOptions', function() {
        return _i;
    });
    var f = c('g2CFb'),
        g = c('rNV3z');
    const {
        Options: h
    } = (0, f.createCheckers)(g.default);

    function _i(j) {
        h.strictCheck(j);
    }
}), c.register('g2CFb', function(d, e) {
    var f = d.exports && d.exports.__spreadArrays || function() {
        for (var g = 0, h = 0, i = arguments.length; h < i; h++)
            g += arguments[h].length;
        var j = Array(g),
            k = 0;
        for (h = 0; h < i; h++)
            for (var l = arguments[h], m = 0, n = l.length; m < n; m++, k++)
                j[k] = l[m];
        return j;
    };
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.Checker = d.exports.createCheckers = void 0;
    var g = c('Cqbgj'),
        h = c('1oEE3');
    g = c('Cqbgj');
    Object.defineProperty(d.exports, 'TArray', {
        enumerable: !0,
        get: function() {
            return g.TArray;
        }
    }), Object.defineProperty(d.exports, 'TEnumType', {
        enumerable: !0,
        get: function() {
            return g.TEnumType;
        }
    }), Object.defineProperty(d.exports, 'TEnumLiteral', {
        enumerable: !0,
        get: function() {
            return g.TEnumLiteral;
        }
    }), Object.defineProperty(d.exports, 'TFunc', {
        enumerable: !0,
        get: function() {
            return g.TFunc;
        }
    }), Object.defineProperty(d.exports, 'TIface', {
        enumerable: !0,
        get: function() {
            return g.TIface;
        }
    }), Object.defineProperty(d.exports, 'TLiteral', {
        enumerable: !0,
        get: function() {
            return g.TLiteral;
        }
    }), Object.defineProperty(d.exports, 'TName', {
        enumerable: !0,
        get: function() {
            return g.TName;
        }
    }), Object.defineProperty(d.exports, 'TOptional', {
        enumerable: !0,
        get: function() {
            return g.TOptional;
        }
    }), Object.defineProperty(d.exports, 'TParam', {
        enumerable: !0,
        get: function() {
            return g.TParam;
        }
    }), Object.defineProperty(d.exports, 'TParamList', {
        enumerable: !0,
        get: function() {
            return g.TParamList;
        }
    }), Object.defineProperty(d.exports, 'TProp', {
        enumerable: !0,
        get: function() {
            return g.TProp;
        }
    }), Object.defineProperty(d.exports, 'TTuple', {
        enumerable: !0,
        get: function() {
            return g.TTuple;
        }
    }), Object.defineProperty(d.exports, 'TType', {
        enumerable: !0,
        get: function() {
            return g.TType;
        }
    }), Object.defineProperty(d.exports, 'TUnion', {
        enumerable: !0,
        get: function() {
            return g.TUnion;
        }
    }), Object.defineProperty(d.exports, 'TIntersection', {
        enumerable: !0,
        get: function() {
            return g.TIntersection;
        }
    }), Object.defineProperty(d.exports, 'array', {
        enumerable: !0,
        get: function() {
            return g.array;
        }
    }), Object.defineProperty(d.exports, 'enumlit', {
        enumerable: !0,
        get: function() {
            return g.enumlit;
        }
    }), Object.defineProperty(d.exports, 'enumtype', {
        enumerable: !0,
        get: function() {
            return g.enumtype;
        }
    }), Object.defineProperty(d.exports, 'func', {
        enumerable: !0,
        get: function() {
            return g.func;
        }
    }), Object.defineProperty(d.exports, 'iface', {
        enumerable: !0,
        get: function() {
            return g.iface;
        }
    }), Object.defineProperty(d.exports, 'lit', {
        enumerable: !0,
        get: function() {
            return g.lit;
        }
    }), Object.defineProperty(d.exports, 'name', {
        enumerable: !0,
        get: function() {
            return g.name;
        }
    }), Object.defineProperty(d.exports, 'opt', {
        enumerable: !0,
        get: function() {
            return g.opt;
        }
    }), Object.defineProperty(d.exports, 'param', {
        enumerable: !0,
        get: function() {
            return g.param;
        }
    }), Object.defineProperty(d.exports, 'tuple', {
        enumerable: !0,
        get: function() {
            return g.tuple;
        }
    }), Object.defineProperty(d.exports, 'union', {
        enumerable: !0,
        get: function() {
            return g.union;
        }
    }), Object.defineProperty(d.exports, 'intersection', {
        enumerable: !0,
        get: function() {
            return g.intersection;
        }
    }), Object.defineProperty(d.exports, 'BasicType', {
        enumerable: !0,
        get: function() {
            return g.BasicType;
        }
    });
    h = c('1oEE3');
    Object.defineProperty(d.exports, 'VError', {
        enumerable: !0,
        get: function() {
            return h.VError;
        }
    }), d.exports.createCheckers = function() {
        for (var i = [], j = 0; j < arguments.length; j++)
            i[j] = arguments[j];
        for (var k = Object.assign.apply(Object, f([{},
                g.basicTypes
            ], i)), l = {}, m = 0, n = i; m < n.length; m++)
            for (var o = n[m], p = 0, q = Object.keys(o); p < q.length; p++) {
                var r = q[p];
                l[r] = new _i(k, o[r]);
            }
        return l;
    };
    var _i = function() {
        function j(k, l, m) {
            if (void 0 === m && (m = 'value'), this.suite = k, this.ttype = l, this._path = m, this.props = new Map(), l instanceof g.TIface)
                for (var n = 0, o = l.props; n < o.length; n++) {
                    var p = o[n];
                    this.props.set(p.name, p.ttype);
                }
            this.checkerPlain = this.ttype.getChecker(k, !1), this.checkerStrict = this.ttype.getChecker(k, !0);
        }
        return j.prototype.setReportedPath = function(k) {
            this._path = k;
        }, j.prototype.check = function(k) {
            return this._doCheck(this.checkerPlain, k);
        }, j.prototype.test = function(k) {
            return this.checkerPlain(k, new h.NoopContext());
        }, j.prototype.validate = function(k) {
            return this._doValidate(this.checkerPlain, k);
        }, j.prototype.strictCheck = function(k) {
            return this._doCheck(this.checkerStrict, k);
        }, j.prototype.strictTest = function(k) {
            return this.checkerStrict(k, new h.NoopContext());
        }, j.prototype.strictValidate = function(k) {
            return this._doValidate(this.checkerStrict, k);
        }, j.prototype.getProp = function(k) {
            var l = this.props.get(k);
            if (!l)
                throw new Error('Type has no property ' + k);
            return new j(this.suite, l, this._path + '.' + k);
        }, j.prototype.methodArgs = function(k) {
            var l = this._getMethod(k);
            return new j(this.suite, l.paramList);
        }, j.prototype.methodResult = function(k) {
            var l = this._getMethod(k);
            return new j(this.suite, l.result);
        }, j.prototype.getArgs = function() {
            if (!(this.ttype instanceof g.TFunc))
                throw new Error('getArgs() applied to non-function');
            return new j(this.suite, this.ttype.paramList);
        }, j.prototype.getResult = function() {
            if (!(this.ttype instanceof g.TFunc))
                throw new Error('getResult() applied to non-function');
            return new j(this.suite, this.ttype.result);
        }, j.prototype.getType = function() {
            return this.ttype;
        }, j.prototype._doCheck = function(k, l) {
            if (!k(l, new h.NoopContext())) {
                var m = new h.DetailContext();
                throw k(l, m), m.getError(this._path);
            }
        }, j.prototype._doValidate = function(k, l) {
            if (k(l, new h.NoopContext()))
                return null;
            var m = new h.DetailContext();
            return k(l, m), m.getErrorDetail(this._path);
        }, j.prototype._getMethod = function(k) {
            var l = this.props.get(k);
            if (!l)
                throw new Error('Type has no property ' + k);
            if (!(l instanceof g.TFunc))
                throw new Error('Property ' + k + ' is not a method');
            return l;
        }, j;
    }();
    d.exports.Checker = _i;
}), c.register('Cqbgj', function(d, e) {
    var f, g = c('gUNWj').Buffer,
        h = d.exports && d.exports.__extends || (f = function(i, j) {
            return f = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(k, l) {
                k.__proto__ = l;
            } || function(k, l) {
                for (var m in l)
                    l.hasOwnProperty(m) && (k[m] = l[m]);
            }, f(i, j);
        }, function(i, j) {
            function k() {
                this.constructor = i;
            }
            f(i, j), i.prototype = null === j ? Object.create(j) : (k.prototype = j.prototype, new k());
        });
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.basicTypes = d.exports.BasicType = d.exports.TParamList = d.exports.TParam = d.exports.param = d.exports.TFunc = d.exports.func = d.exports.TProp = d.exports.TOptional = d.exports.opt = d.exports.TIface = d.exports.iface = d.exports.TEnumLiteral = d.exports.enumlit = d.exports.TEnumType = d.exports.enumtype = d.exports.TIntersection = d.exports.intersection = d.exports.TUnion = d.exports.union = d.exports.TTuple = d.exports.tuple = d.exports.TArray = d.exports.array = d.exports.TLiteral = d.exports.lit = d.exports.TName = d.exports.name = d.exports.TType = void 0;
    var i = c('1oEE3'),
        j = function() {};

    function k(l) {
        return 'string' == typeof l ? _m(l) : l;
    }

    function l(m, n) {
        var o = m[n];
        if (!o)
            throw new Error('Unknown type ' + n);
        return o;
    }

    function _m(n) {
        return new _n(n);
    }
    d.exports.TType = j, d.exports.name = _m;
    var _n = function(o) {
        function p(q) {
            var r = o.call(this) || this;
            return r.name = q, r._failMsg = 'is not a ' + q, r;
        }
        return h(p, o), p.prototype.getChecker = function(q, r, s) {
            var t = this,
                u = l(q, this.name),
                v = u.getChecker(q, r, s);
            return u instanceof _C || u instanceof p ? v : function(w, x) {
                return !!v(w, x) || x.fail(null, t._failMsg, 0);
            };
        }, p;
    }(j);
    d.exports.TName = _n, d.exports.lit = function(o) {
        return new _o(o);
    };
    var _o = function(p) {
        function q(r) {
            var s = p.call(this) || this;
            return s.value = r, s.name = JSON.stringify(r), s._failMsg = 'is not ' + s.name, s;
        }
        return h(q, p), q.prototype.getChecker = function(r, s) {
            var t = this;
            return function(u, v) {
                return u === t.value || v.fail(null, t._failMsg, -1);
            };
        }, q;
    }(j);
    d.exports.TLiteral = _o, d.exports.array = function(p) {
        return new _p(k(p));
    };
    var _p = function(q) {
        function r(s) {
            var t = q.call(this) || this;
            return t.ttype = s, t;
        }
        return h(r, q), r.prototype.getChecker = function(s, t) {
            var u = this.ttype.getChecker(s, t);
            return function(v, w) {
                if (!Array.isArray(v))
                    return w.fail(null, 'is not an array', 0);
                for (var x = 0; x < v.length; x++) {
                    if (!u(v[x], w))
                        return w.fail(x, null, 1);
                }
                return !0;
            };
        }, r;
    }(j);
    d.exports.TArray = _p, d.exports.tuple = function() {
        for (var q = [], r = 0; r < arguments.length; r++)
            q[r] = arguments[r];
        return new _q(q.map(function(s) {
            return k(s);
        }));
    };
    var _q = function(r) {
        function s(t) {
            var u = r.call(this) || this;
            return u.ttypes = t, u;
        }
        return h(s, r), s.prototype.getChecker = function(t, u) {
            var v = this.ttypes.map(function(w) {
                    return w.getChecker(t, u);
                }),
                w = function(x, y) {
                    if (!Array.isArray(x))
                        return y.fail(null, 'is not an array', 0);
                    for (var z = 0; z < v.length; z++) {
                        if (!v[z](x[z], y))
                            return y.fail(z, null, 1);
                    }
                    return !0;
                };
            return u ? function(x, y) {
                return !!w(x, y) && (x.length <= v.length || y.fail(v.length, 'is extraneous', 2));
            } : w;
        }, s;
    }(j);
    d.exports.TTuple = _q, d.exports.union = function() {
        for (var r = [], s = 0; s < arguments.length; s++)
            r[s] = arguments[s];
        return new _r(r.map(function(t) {
            return k(t);
        }));
    };
    var _r = function(s) {
        function t(u) {
            var v = s.call(this) || this;
            v.ttypes = u;
            var w = u.map(function(x) {
                    return x instanceof _n || x instanceof _o ? x.name : null;
                }).filter(function(x) {
                    return x;
                }),
                x = u.length - w.length;
            return w.length ? (x > 0 && w.push(x + ' more'), v._failMsg = 'is none of ' + w.join(', ')) : v._failMsg = 'is none of ' + x + ' types', v;
        }
        return h(t, s), t.prototype.getChecker = function(u, v) {
            var w = this,
                x = this.ttypes.map(function(y) {
                    return y.getChecker(u, v);
                });
            return function(y, z) {
                for (var A = z.unionResolver(), B = 0; B < x.length; B++) {
                    if (x[B](y, A.createContext()))
                        return !0;
                }
                return z.resolveUnion(A), z.fail(null, w._failMsg, 0);
            };
        }, t;
    }(j);
    d.exports.TUnion = _r, d.exports.intersection = function() {
        for (var s = [], t = 0; t < arguments.length; t++)
            s[t] = arguments[t];
        return new _s(s.map(function(u) {
            return k(u);
        }));
    };
    var _s = function(t) {
        function u(v) {
            var w = t.call(this) || this;
            return w.ttypes = v, w;
        }
        return h(u, t), u.prototype.getChecker = function(v, w) {
            var x = new Set(),
                y = this.ttypes.map(function(z) {
                    return z.getChecker(v, w, x);
                });
            return function(z, A) {
                return !!y.every(function(B) {
                    return B(z, A);
                }) || A.fail(null, null, 0);
            };
        }, u;
    }(j);
    d.exports.TIntersection = _s, d.exports.enumtype = function(t) {
        return new _t(t);
    };
    var _t = function(u) {
        function v(w) {
            var x = u.call(this) || this;
            return x.members = w, x.validValues = new Set(), x._failMsg = 'is not a valid enum value', x.validValues = new Set(Object.keys(w).map(function(y) {
                return w[y];
            })), x;
        }
        return h(v, u), v.prototype.getChecker = function(w, x) {
            var y = this;
            return function(z, A) {
                return !!y.validValues.has(z) || A.fail(null, y._failMsg, 0);
            };
        }, v;
    }(j);
    d.exports.TEnumType = _t, d.exports.enumlit = function(u, v) {
        return new _u(u, v);
    };
    var _u = function(v) {
        function w(x, y) {
            var z = v.call(this) || this;
            return z.enumName = x, z.prop = y, z._failMsg = 'is not ' + x + '.' + y, z;
        }
        return h(w, v), w.prototype.getChecker = function(x, y) {
            var z = this,
                A = l(x, this.enumName);
            if (!(A instanceof _t))
                throw new Error('Type ' + this.enumName + ' used in enumlit is not an enum type');
            var B = A.members[this.prop];
            if (!A.members.hasOwnProperty(this.prop))
                throw new Error('Unknown value ' + this.enumName + '.' + this.prop + ' used in enumlit');
            return function(C, D) {
                return C === B || D.fail(null, z._failMsg, -1);
            };
        }, w;
    }(j);

    function v(w) {
        return Object.keys(w).map(function(x) {
            return function(y, z) {
                return z instanceof _x ? new _y(y, z.ttype, !0) : new _y(y, k(z), !1);
            }(x, w[x]);
        });
    }
    d.exports.TEnumLiteral = _u, d.exports.iface = function(w, x) {
        return new _w(w, v(x));
    };
    var _w = function(x) {
        function y(z, A) {
            var B = x.call(this) || this;
            return B.bases = z, B.props = A, B.propSet = new Set(A.map(function(C) {
                return C.name;
            })), B;
        }
        return h(y, x), y.prototype.getChecker = function(z, A, B) {
            var C = this,
                D = this.bases.map(function(E) {
                    return l(z, E).getChecker(z, A);
                }),
                E = this.props.map(function(F) {
                    return F.ttype.getChecker(z, A);
                }),
                F = new i.NoopContext(),
                G = this.props.map(function(H, I) {
                    return !H.isOpt && !E[I](void 0, F);
                }),
                H = function(I, J) {
                    if ('object' != typeof I || null === I)
                        return J.fail(null, 'is not an object', 0);
                    for (var K = 0; K < D.length; K++)
                        if (!D[K](I, J))
                            return !1;
                    for (K = 0; K < E.length; K++) {
                        var L = C.props[K].name,
                            M = I[L];
                        if (void 0 === M) {
                            if (G[K])
                                return J.fail(L, 'is missing', 1);
                        } else if (!E[K](M, J))
                            return J.fail(L, null, 1);
                    }
                    return !0;
                };
            if (!A)
                return H;
            var I = this.propSet;
            return B && (this.propSet.forEach(function(J) {
                    return B.add(J);
                }), I = B),
                function(J, K) {
                    if (!H(J, K))
                        return !1;
                    for (var L in J)
                        if (!I.has(L))
                            return K.fail(L, 'is extraneous', 2);
                    return !0;
                };
        }, y;
    }(j);
    d.exports.TIface = _w, d.exports.opt = function(x) {
        return new _x(k(x));
    };
    var _x = function(y) {
        function z(A) {
            var B = y.call(this) || this;
            return B.ttype = A, B;
        }
        return h(z, y), z.prototype.getChecker = function(A, B) {
            var C = this.ttype.getChecker(A, B);
            return function(D, E) {
                return void 0 === D || C(D, E);
            };
        }, z;
    }(j);
    d.exports.TOptional = _x;
    var _y = function(z, A, B) {
        this.name = z, this.ttype = A, this.isOpt = B;
    };
    d.exports.TProp = _y, d.exports.func = function(z) {
        for (var A = [], B = 1; B < arguments.length; B++)
            A[B - 1] = arguments[B];
        return new _z(new _B(A), k(z));
    };
    var _z = function(A) {
        function B(C, D) {
            var E = A.call(this) || this;
            return E.paramList = C, E.result = D, E;
        }
        return h(B, A), B.prototype.getChecker = function(C, D) {
            return function(E, F) {
                return 'function' == typeof E || F.fail(null, 'is not a function', 0);
            };
        }, B;
    }(j);
    d.exports.TFunc = _z, d.exports.param = function(A, B, C) {
        return new _A(A, k(B), Boolean(C));
    };
    var _A = function(B, C, D) {
        this.name = B, this.ttype = C, this.isOpt = D;
    };
    d.exports.TParam = _A;
    var _B = function(C) {
        function D(E) {
            var F = C.call(this) || this;
            return F.params = E, F;
        }
        return h(D, C), D.prototype.getChecker = function(E, F) {
            var G = this,
                H = this.params.map(function(I) {
                    return I.ttype.getChecker(E, F);
                }),
                I = new i.NoopContext(),
                J = this.params.map(function(K, L) {
                    return !K.isOpt && !H[L](void 0, I);
                }),
                K = function(L, M) {
                    if (!Array.isArray(L))
                        return M.fail(null, 'is not an array', 0);
                    for (var N = 0; N < H.length; N++) {
                        var O = G.params[N];
                        if (void 0 === L[N]) {
                            if (J[N])
                                return M.fail(O.name, 'is missing', 1);
                        } else if (!H[N](L[N], M))
                            return M.fail(O.name, null, 1);
                    }
                    return !0;
                };
            return F ? function(L, M) {
                return !!K(L, M) && (L.length <= H.length || M.fail(H.length, 'is extraneous', 2));
            } : K;
        }, D;
    }(j);
    d.exports.TParamList = _B;
    var _C = function(D) {
        function E(F, G) {
            var H = D.call(this) || this;
            return H.validator = F, H.message = G, H;
        }
        return h(E, D), E.prototype.getChecker = function(F, G) {
            var H = this;
            return function(I, J) {
                return !!H.validator(I) || J.fail(null, H.message, 0);
            };
        }, E;
    }(j);
    d.exports.BasicType = _C, d.exports.basicTypes = {
        any: new _C(function(D) {
            return !0;
        }, 'is invalid'),
        number: new _C(function(D) {
            return 'number' == typeof D;
        }, 'is not a number'),
        object: new _C(function(D) {
            return 'object' == typeof D && D;
        }, 'is not an object'),
        boolean: new _C(function(D) {
            return 'boolean' == typeof D;
        }, 'is not a boolean'),
        string: new _C(function(D) {
            return 'string' == typeof D;
        }, 'is not a string'),
        symbol: new _C(function(D) {
            return 'symbol' == typeof D;
        }, 'is not a symbol'),
        void: new _C(function(D) {
            return null == D;
        }, 'is not void'),
        undefined: new _C(function(D) {
            return void 0 === D;
        }, 'is not undefined'),
        null: new _C(function(D) {
            return null === D;
        }, 'is not null'),
        never: new _C(function(D) {
            return !1;
        }, 'is unexpected'),
        Date: new _C(_E('[object Date]'), 'is not a Date'),
        RegExp: new _C(_E('[object RegExp]'), 'is not a RegExp')
    };
    var D = Object.prototype.toString;

    function _E(F) {
        return function(G) {
            return 'object' == typeof G && G && D.call(G) === F;
        };
    }
    void 0 !== g && (d.exports.basicTypes.Buffer = new _C(function(F) {
        return g.isBuffer(F);
    }, 'is not a Buffer'));
    for (var F = function(G) {
            d.exports.basicTypes[G.name] = new _C(function(H) {
                return H instanceof G;
            }, 'is not a ' + G.name);
        }, G = 0, H = [
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
        ]; G < H.length; G++) {
        F(H[G]);
    }
}), c.register('1oEE3', function(d, e) {
    var f, g = d.exports && d.exports.__extends || (f = function(h, i) {
        return f = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(j, k) {
            j.__proto__ = k;
        } || function(j, k) {
            for (var l in k)
                k.hasOwnProperty(l) && (j[l] = k[l]);
        }, f(h, i);
    }, function(h, i) {
        function j() {
            this.constructor = h;
        }
        f(h, i), h.prototype = null === i ? Object.create(i) : (j.prototype = i.prototype, new j());
    });
    Object.defineProperty(d.exports, '__esModule', {
        value: !0
    }), d.exports.DetailContext = d.exports.NoopContext = d.exports.VError = void 0;
    var h = function(i) {
        function j(k, l) {
            var m = i.call(this, l) || this;
            return m.path = k, Object.setPrototypeOf(m, j.prototype), m;
        }
        return g(j, i), j;
    }(Error);
    d.exports.VError = h;
    var i = function() {
        function j() {}
        return j.prototype.fail = function(k, l, m) {
            return !1;
        }, j.prototype.unionResolver = function() {
            return this;
        }, j.prototype.createContext = function() {
            return this;
        }, j.prototype.resolveUnion = function(k) {}, j;
    }();
    d.exports.NoopContext = i;
    var j = function() {
        function k() {
            this._propNames = [''], this._messages = [null], this._score = 0;
        }
        return k.prototype.fail = function(l, m, n) {
            return this._propNames.push(l), this._messages.push(m), this._score += n, !1;
        }, k.prototype.unionResolver = function() {
            return new _k();
        }, k.prototype.resolveUnion = function(l) {
            for (var m, n, o = null, p = 0, q = l.contexts; p < q.length; p++) {
                var r = q[p];
                (!o || r._score >= o._score) && (o = r);
            }
            o && o._score > 0 && ((m = this._propNames).push.apply(m, o._propNames), (n = this._messages).push.apply(n, o._messages));
        }, k.prototype.getError = function(l) {
            for (var m = [], n = this._propNames.length - 1; n >= 0; n--) {
                var o = this._propNames[n];
                l += 'number' == typeof o ? '[' + o + ']' : o ? '.' + o : '';
                var p = this._messages[n];
                p && m.push(l + ' ' + p);
            }
            return new h(l, m.join('; '));
        }, k.prototype.getErrorDetail = function(l) {
            for (var m = [], n = this._propNames.length - 1; n >= 0; n--) {
                var o = this._propNames[n];
                l += 'number' == typeof o ? '[' + o + ']' : o ? '.' + o : '';
                var p = this._messages[n];
                p && m.push({
                    path: l,
                    message: p
                });
            }
            var o = null;
            for (n = m.length - 1; n >= 0; n--)
                o && (m[n].nested = [o]), o = m[n];
            return o;
        }, k;
    }();
    d.exports.DetailContext = j;
    var _k = function() {
        function l() {
            this.contexts = [];
        }
        return l.prototype.createContext = function() {
            var m = new j();
            return this.contexts.push(m), m;
        }, l;
    }();
}), c.register('rNV3z', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('g2CFb');
    var _g = {
        Transform: f.union(f.lit('jsx'), f.lit('typescript'), f.lit('flow'), f.lit('imports'), f.lit('react-hot-loader'), f.lit('jest')),
        SourceMapOptions: f.iface([], {
            compiledFilename: 'string'
        }),
        Options: f.iface([], {
            transforms: f.array('Transform'),
            disableESTransforms: f.opt('boolean'),
            jsxRuntime: f.opt(f.union(f.lit('classic'), f.lit('automatic'), f.lit('preserve'))),
            production: f.opt('boolean'),
            jsxImportSource: f.opt('string'),
            jsxPragma: f.opt('string'),
            jsxFragmentPragma: f.opt('string'),
            keepUnusedImports: f.opt('boolean'),
            preserveDynamicImport: f.opt('boolean'),
            injectCreateRequireForImportRequire: f.opt('boolean'),
            enableLegacyTypeScriptModuleInterop: f.opt('boolean'),
            enableLegacyBabel5ModuleInterop: f.opt('boolean'),
            sourceMapOptions: f.opt('SourceMapOptions'),
            filePath: f.opt('string')
        })
    };
}), c.register('ysi7r', function(d, e) {
    b(d.exports, 'File', function() {
        return _h;
    }), b(d.exports, 'parse', function() {
        return _i;
    });
    var f = c('REG+N'),
        g = c('7vFu1');
    class _h {
        constructor(i, j) {
            this.tokens = i, this.scopes = j;
        }
    }

    function _i(j, k, l, m) {
        if (m && l)
            throw new Error('Cannot combine flow and typescript plugins.');
        (0, f.initParser)(j, k, l, m);
        const n = (0, g.parseFile)();
        if (f.state.error)
            throw (0, f.augmentError)(f.state.error);
        return n;
    }
}), c.register('7vFu1', function(d, e) {
    b(d.exports, 'parseFile', function() {
        return _j;
    });
    var f = c('SGA4o'),
        g = c('MYjp2'),
        h = c('REG+N'),
        i = c('tTSJk');

    function _j() {
        return 0 === h.state.pos && h.input.charCodeAt(0) === g.charCodes.numberSign && h.input.charCodeAt(1) === g.charCodes.exclamationMark && (0, f.skipLineComment)(2), (0, f.nextToken)(), (0, i.parseTopLevel)();
    }
}), c.register('tTSJk', function(d, e) {
    b(d.exports, 'parseTopLevel', function() {
        return _r;
    }), b(d.exports, 'parseBlockBody', function() {
        return _z;
    }), b(d.exports, 'parseStatement', function() {
        return _s;
    }), b(d.exports, 'parseDecorators', function() {
        return _u;
    }), b(d.exports, 'parseClass', function() {
        return _G;
    }), b(d.exports, 'parseVarStatement', function() {
        return _x;
    }), b(d.exports, 'parseBlock', function() {
        return _y;
    }), b(d.exports, 'parseImport', function() {
        return _V;
    }), b(d.exports, 'parseExport', function() {
        return _O;
    }), b(d.exports, 'parseFunction', function() {
        return _E;
    }), b(d.exports, 'baseParseMaybeDecoratorArguments', function() {
        return _w;
    }), b(d.exports, 'parseFunctionParams', function() {
        return _F;
    }), b(d.exports, 'parseExportFrom', function() {
        return _Q;
    }), b(d.exports, 'parseExportSpecifiers', function() {
        return _S;
    }), b(d.exports, 'baseParseExportStar', function() {
        return _R;
    });
    var f = c('ysi7r'),
        g = c('4XH5N'),
        h = c('QSFPD'),
        i = c('SGA4o'),
        j = c('pvm6x'),
        k = c('BpLPu'),
        l = c('PmE4s'),
        m = c('MYjp2'),
        n = c('REG+N'),
        o = c('Tel7O'),
        p = c('JOEM9'),
        q = c('QP6iy');

    function _r() {
        if (_z(l.TokenType.eof), n.state.scopes.push(new(0, k.Scope)(0, n.state.tokens.length, !0)), 0 !== n.state.scopeDepth)
            throw new Error(`Invalid scope depth at end of file: ${ n.state.scopeDepth }`);
        return new(0, f.File)(n.state.tokens, n.state.scopes);
    }

    function _s(t) {
        n.isFlowEnabled && (0, g.flowTryParseStatement)() || ((0, i.match)(l.TokenType.at) && _u(), function(u) {
            if (n.isTypeScriptEnabled && (0, h.tsTryParseStatementContent)())
                return;
            const v = n.state.type;
            switch (v) {
                case l.TokenType._break:
                case l.TokenType._continue:
                    return (0, i.next)(), void((0, q.isLineTerminator)() || ((0, o.parseIdentifier)(), (0, q.semicolon)()));
                case l.TokenType._debugger:
                    return (0, i.next)(), void(0, q.semicolon)();
                case l.TokenType._do:
                    return (0, i.next)(), _s(!1), (0, q.expect)(l.TokenType._while), (0, o.parseParenExpression)(), void(0, i.eat)(l.TokenType.semi);
                case l.TokenType._for:
                    return void
                    function() {
                        n.state.scopeDepth++;
                        const w = n.state.tokens.length;
                        ! function() {
                            (0, i.next)();
                            let x = !1;
                            (0, q.isContextual)(j.ContextualKeyword._await) && (x = !0, (0, i.next)());
                            if ((0, q.expect)(l.TokenType.parenL), (0, i.match)(l.TokenType.semi))
                                return x && (0, q.unexpected)(), void _A();
                            const y = _t();
                            if (y || (0, i.match)(l.TokenType._var) || (0, i.match)(l.TokenType._let) || (0, i.match)(l.TokenType._const) || (0, q.isContextual)(j.ContextualKeyword._using) && !(0, q.isLookaheadContextual)(j.ContextualKeyword._of))
                                return y && (0, q.expectContextual)(j.ContextualKeyword._await), (0, i.next)(), _C(!0, n.state.type !== l.TokenType._var), (0, i.match)(l.TokenType._in) || (0, q.isContextual)(j.ContextualKeyword._of) ? void _B(x) : void _A();
                            if ((0, o.parseExpression)(!0), (0, i.match)(l.TokenType._in) || (0, q.isContextual)(j.ContextualKeyword._of))
                                return void _B(x);
                            x && (0, q.unexpected)();
                            _A();
                        }();
                        const x = n.state.tokens.length;
                        n.state.scopes.push(new(0, k.Scope)(w, x, !1)), n.state.scopeDepth--;
                    }();
                case l.TokenType._function:
                    if ((0, i.lookaheadType)() === l.TokenType.dot)
                        break;
                    return u || (0, q.unexpected)(), void
                    function() {
                        const w = n.state.start;
                        (0, i.next)(), _E(w, !0);
                    }();
                case l.TokenType._class:
                    return u || (0, q.unexpected)(), void _G(!0);
                case l.TokenType._if:
                    return (0, i.next)(), (0, o.parseParenExpression)(), _s(!1), void((0, i.eat)(l.TokenType._else) && _s(!1));
                case l.TokenType._return:
                    return (0, i.next)(), void((0, q.isLineTerminator)() || ((0, o.parseExpression)(), (0, q.semicolon)()));
                case l.TokenType._switch:
                    return void
                    function() {
                        (0, i.next)(), (0, o.parseParenExpression)(), n.state.scopeDepth++;
                        const w = n.state.tokens.length;
                        (0, q.expect)(l.TokenType.braceL);
                        for (; !(0, i.match)(l.TokenType.braceR) && !n.state.error;)
                            if ((0, i.match)(l.TokenType._case) || (0, i.match)(l.TokenType._default)) {
                                const x = (0, i.match)(l.TokenType._case);
                                (0, i.next)(), x && (0, o.parseExpression)(), (0, q.expect)(l.TokenType.colon);
                            } else
                                _s(!0);
                        (0, i.next)();
                        const x = n.state.tokens.length;
                        n.state.scopes.push(new(0, k.Scope)(w, x, !1)), n.state.scopeDepth--;
                    }();
                case l.TokenType._throw:
                    return (0, i.next)(), (0, o.parseExpression)(), void(0, q.semicolon)();
                case l.TokenType._try:
                    return void
                    function() {
                        if ((0, i.next)(), _y(), (0, i.match)(l.TokenType._catch)) {
                            (0, i.next)();
                            let w = null;
                            if ((0, i.match)(l.TokenType.parenL) && (n.state.scopeDepth++, w = n.state.tokens.length, (0, q.expect)(l.TokenType.parenL), (0, p.parseBindingAtom)(!0), n.isTypeScriptEnabled && (0, h.tsTryParseTypeAnnotation)(), (0, q.expect)(l.TokenType.parenR)), _y(), null != w) {
                                const x = n.state.tokens.length;
                                n.state.scopes.push(new(0, k.Scope)(w, x, !1)), n.state.scopeDepth--;
                            }
                        }
                        (0, i.eat)(l.TokenType._finally) && _y();
                    }();
                case l.TokenType._let:
                case l.TokenType._const:
                    u || (0, q.unexpected)();
                case l.TokenType._var:
                    return void _x(v !== l.TokenType._var);
                case l.TokenType._while:
                    return (0, i.next)(), (0, o.parseParenExpression)(), void _s(!1);
                case l.TokenType.braceL:
                    return void _y();
                case l.TokenType.semi:
                    return void(0, i.next)();
                case l.TokenType._export:
                case l.TokenType._import: {
                    const w = (0, i.lookaheadType)();
                    if (w === l.TokenType.parenL || w === l.TokenType.dot)
                        break;
                    return (0, i.next)(), void(v === l.TokenType._import ? _V() : _O());
                }
                case l.TokenType.name:
                    if (n.state.contextualKeyword === j.ContextualKeyword._async) {
                        const w = n.state.start,
                            x = n.state.snapshot();
                        if ((0, i.next)(), (0, i.match)(l.TokenType._function) && !(0, q.canInsertSemicolon)())
                            return (0, q.expect)(l.TokenType._function), void _E(w, !0);
                        n.state.restoreFromSnapshot(x);
                    } else {
                        if (n.state.contextualKeyword === j.ContextualKeyword._using && !(0, q.hasFollowingLineBreak)() && (0, i.lookaheadType)() === l.TokenType.name)
                            return void _x(!0);
                        if (_t())
                            return (0, q.expectContextual)(j.ContextualKeyword._await), void _x(!0);
                    }
            }
            const w = n.state.tokens.length;
            (0, o.parseExpression)();
            let x = null;
            if (n.state.tokens.length === w + 1) {
                const y = n.state.tokens[n.state.tokens.length - 1];
                y.type === l.TokenType.name && (x = y.contextualKeyword);
            }
            if (null == x)
                return void(0, q.semicolon)();
            (0, i.eat)(l.TokenType.colon) ? _s(!0): (f = x, n.isTypeScriptEnabled ? (0, h.tsParseIdentifierStatement)(f) : n.isFlowEnabled ? (0, g.flowParseIdentifierStatement)(f) : (0, q.semicolon)());
            var y;
        }(t));
    }

    function _t() {
        if (!(0, q.isContextual)(j.ContextualKeyword._await))
            return !1;
        const u = n.state.snapshot();
        return (0, i.next)(), !(0, q.isContextual)(j.ContextualKeyword._using) || (0, q.hasPrecedingLineBreak)() ? (n.state.restoreFromSnapshot(u), !1) : ((0, i.next)(), !(0, i.match)(l.TokenType.name) || (0, q.hasPrecedingLineBreak)() ? (n.state.restoreFromSnapshot(u), !1) : (n.state.restoreFromSnapshot(u), !0));
    }

    function _u() {
        for (;
            (0, i.match)(l.TokenType.at);)
            _v();
    }

    function _v() {
        if ((0, i.next)(), (0, i.eat)(l.TokenType.parenL))
            (0, o.parseExpression)(), (0, q.expect)(l.TokenType.parenR);
        else {
            for ((0, o.parseIdentifier)();
                (0, i.eat)(l.TokenType.dot);)
                (0, o.parseIdentifier)();
            n.isTypeScriptEnabled ? (0, h.tsParseMaybeDecoratorArguments)() : _w();
        }
    }

    function _w() {
        (0, i.eat)(l.TokenType.parenL) && (0, o.parseCallExpressionArguments)();
    }

    function _x(y) {
        (0, i.next)(), _C(!1, y), (0, q.semicolon)();
    }

    function _y(z = !1, A = 0) {
        const B = n.state.tokens.length;
        n.state.scopeDepth++, (0, q.expect)(l.TokenType.braceL), A && (n.state.tokens[n.state.tokens.length - 1].contextId = A), _z(l.TokenType.braceR), A && (n.state.tokens[n.state.tokens.length - 1].contextId = A);
        const C = n.state.tokens.length;
        n.state.scopes.push(new(0, k.Scope)(B, C, z)), n.state.scopeDepth--;
    }

    function _z(A) {
        for (; !(0, i.eat)(A) && !n.state.error;)
            _s(!0);
    }

    function _A() {
        (0, q.expect)(l.TokenType.semi), (0, i.match)(l.TokenType.semi) || (0, o.parseExpression)(), (0, q.expect)(l.TokenType.semi), (0, i.match)(l.TokenType.parenR) || (0, o.parseExpression)(), (0, q.expect)(l.TokenType.parenR), _s(!1);
    }

    function _B(C) {
        C ? (0, q.eatContextual)(j.ContextualKeyword._of) : (0, i.next)(), (0, o.parseExpression)(), (0, q.expect)(l.TokenType.parenR), _s(!1);
    }

    function _C(D, E) {
        for (;;) {
            if (_D(E), (0, i.eat)(l.TokenType.eq)) {
                const F = n.state.tokens.length - 1;
                (0, o.parseMaybeAssign)(D), n.state.tokens[F].rhsEndIndex = n.state.tokens.length;
            }
            if (!(0, i.eat)(l.TokenType.comma))
                break;
        }
    }

    function _D(E) {
        (0, p.parseBindingAtom)(E), n.isTypeScriptEnabled ? (0, h.tsAfterParseVarHead)() : n.isFlowEnabled && (0, g.flowAfterParseVarHead)();
    }

    function _E(F, G, H = !1) {
        (0, i.match)(l.TokenType.star) && (0, i.next)(), !G || H || (0, i.match)(l.TokenType.name) || (0, i.match)(l.TokenType._yield) || (0, q.unexpected)();
        let I = null;
        (0, i.match)(l.TokenType.name) && (G || (I = n.state.tokens.length, n.state.scopeDepth++), (0, p.parseBindingIdentifier)(!1));
        const J = n.state.tokens.length;
        n.state.scopeDepth++, _F(), (0, o.parseFunctionBodyAndFinish)(F);
        const K = n.state.tokens.length;
        n.state.scopes.push(new(0, k.Scope)(J, K, !0)), n.state.scopeDepth--, null !== I && (n.state.scopes.push(new(0, k.Scope)(I, K, !0)), n.state.scopeDepth--);
    }

    function _F(G = !1, H = 0) {
        n.isTypeScriptEnabled ? (0, h.tsStartParseFunctionParams)() : n.isFlowEnabled && (0, g.flowStartParseFunctionParams)(), (0, q.expect)(l.TokenType.parenL), H && (n.state.tokens[n.state.tokens.length - 1].contextId = H), (0, p.parseBindingList)(l.TokenType.parenR, !1, !1, G, H), H && (n.state.tokens[n.state.tokens.length - 1].contextId = H);
    }

    function _G(H, I = !1) {
        const J = (0, n.getNextContextId)();
        (0, i.next)(), n.state.tokens[n.state.tokens.length - 1].contextId = J, n.state.tokens[n.state.tokens.length - 1].isExpression = !H;
        let K = null;
        H || (K = n.state.tokens.length, n.state.scopeDepth++),
            function(L, M = !1) {
                if (n.isTypeScriptEnabled && (!L || M) && (0, q.isContextual)(j.ContextualKeyword._implements))
                    return;
                (0, i.match)(l.TokenType.name) && (0, p.parseBindingIdentifier)(!0);
                n.isTypeScriptEnabled ? (0, h.tsTryParseTypeParameters)() : n.isFlowEnabled && (0, i.match)(l.TokenType.lessThan) && (0, g.flowParseTypeParameterDeclaration)();
            }(H, I),
            function() {
                let L = !1;
                (0, i.eat)(l.TokenType._extends) ? ((0, o.parseExprSubscripts)(), L = !0) : L = !1;
                n.isTypeScriptEnabled ? (0, h.tsAfterParseClassSuper)(L) : n.isFlowEnabled && (0, g.flowAfterParseClassSuper)(L);
            }();
        const L = n.state.tokens.length;
        if (function(M) {
                (0, q.expect)(l.TokenType.braceL);
                for (; !(0, i.eat)(l.TokenType.braceR) && !n.state.error;) {
                    if ((0, i.eat)(l.TokenType.semi))
                        continue;
                    if ((0, i.match)(l.TokenType.at)) {
                        _v();
                        continue;
                    }
                    _J(n.state.start, M);
                }
            }(J), !n.state.error && (n.state.tokens[L].contextId = J, n.state.tokens[n.state.tokens.length - 1].contextId = J, null !== K)) {
            const M = n.state.tokens.length;
            n.state.scopes.push(new(0, k.Scope)(K, M, !1)), n.state.scopeDepth--;
        }
    }

    function H() {
        return (0, i.match)(l.TokenType.eq) || (0, i.match)(l.TokenType.semi) || (0, i.match)(l.TokenType.braceR) || (0, i.match)(l.TokenType.bang) || (0, i.match)(l.TokenType.colon);
    }

    function I() {
        return (0, i.match)(l.TokenType.parenL) || (0, i.match)(l.TokenType.lessThan);
    }

    function _J(K, L) {
        n.isTypeScriptEnabled && (0, h.tsParseModifiers)([
            j.ContextualKeyword._declare,
            j.ContextualKeyword._public,
            j.ContextualKeyword._protected,
            j.ContextualKeyword._private,
            j.ContextualKeyword._override
        ]);
        let M = !1;
        if ((0, i.match)(l.TokenType.name) && n.state.contextualKeyword === j.ContextualKeyword._static) {
            if ((0, o.parseIdentifier)(), I())
                return void _K(K, !1);
            if (H())
                return void _N();
            if (n.state.tokens[n.state.tokens.length - 1].type = l.TokenType._static, M = !0, (0, i.match)(l.TokenType.braceL))
                return n.state.tokens[n.state.tokens.length - 1].contextId = L, void _y();
        }! function(N, O, P) {
            if (n.isTypeScriptEnabled && (0, h.tsTryParseClassMemberWithIsStatic)(O))
                return;
            if ((0, i.eat)(l.TokenType.star))
                return _L(P), void _K(N, !1);
            _L(P);
            let Q = !1;
            const R = n.state.tokens[n.state.tokens.length - 1];
            R.contextualKeyword === j.ContextualKeyword._constructor && (Q = !0);
            if (_M(), I())
                _K(N, Q);
            else if (H())
                _N();
            else if (R.contextualKeyword !== j.ContextualKeyword._async || (0, q.isLineTerminator)())
                R.contextualKeyword !== j.ContextualKeyword._get && R.contextualKeyword !== j.ContextualKeyword._set || (0, q.isLineTerminator)() && (0, i.match)(l.TokenType.star) ? R.contextualKeyword !== j.ContextualKeyword._accessor || (0, q.isLineTerminator)() ? (0, q.isLineTerminator)() ? _N() : (0, q.unexpected)() : (_L(P), _N()) : (R.contextualKeyword === j.ContextualKeyword._get ? n.state.tokens[n.state.tokens.length - 1].type = l.TokenType._get : n.state.tokens[n.state.tokens.length - 1].type = l.TokenType._set, _L(P), _K(N, !1));
            else {
                n.state.tokens[n.state.tokens.length - 1].type = l.TokenType._async;
                (0, i.match)(l.TokenType.star) && (0, i.next)(), _L(P), _M(), _K(N, !1);
            }
        }(K, M, L);
    }

    function _K(L, M) {
        n.isTypeScriptEnabled ? (0, h.tsTryParseTypeParameters)() : n.isFlowEnabled && (0, i.match)(l.TokenType.lessThan) && (0, g.flowParseTypeParameterDeclaration)(), (0, o.parseMethod)(L, M);
    }

    function _L(M) {
        (0, o.parsePropertyName)(M);
    }

    function _M() {
        if (n.isTypeScriptEnabled) {
            const N = (0, i.pushTypeContext)(0);
            (0, i.eat)(l.TokenType.question), (0, i.popTypeContext)(N);
        }
    }

    function _N() {
        if (n.isTypeScriptEnabled ? ((0, i.eatTypeToken)(l.TokenType.bang), (0, h.tsTryParseTypeAnnotation)()) : n.isFlowEnabled && (0, i.match)(l.TokenType.colon) && (0, g.flowParseTypeAnnotation)(), (0, i.match)(l.TokenType.eq)) {
            const O = n.state.tokens.length;
            (0, i.next)(), (0, o.parseMaybeAssign)(), n.state.tokens[O].rhsEndIndex = n.state.tokens.length;
        }
        (0, q.semicolon)();
    }

    function _O() {
        const P = n.state.tokens.length - 1;
        n.isTypeScriptEnabled && (0, h.tsTryParseExport)() || ((n.isFlowEnabled ? (0, g.flowShouldParseExportStar)() : (0, i.match)(l.TokenType.star)) ? n.isFlowEnabled ? (0, g.flowParseExportStar)() : _R() : function() {
            if (n.isTypeScriptEnabled && (0, h.tsIsDeclarationStart)())
                return !1;
            if (n.isFlowEnabled && (0, g.flowShouldDisallowExportDefaultSpecifier)())
                return !1;
            if ((0, i.match)(l.TokenType.name))
                return n.state.contextualKeyword !== j.ContextualKeyword._async;
            if (!(0, i.match)(l.TokenType._default))
                return !1;
            const Q = (0, i.nextTokenStart)(),
                R = (0, i.lookaheadTypeAndKeyword)(),
                S = R.type === l.TokenType.name && R.contextualKeyword === j.ContextualKeyword._from;
            if (R.type === l.TokenType.comma)
                return !0;
            if (S) {
                const T = n.input.charCodeAt((0, i.nextTokenStartSince)(Q + 4));
                return T === m.charCodes.quotationMark || T === m.charCodes.apostrophe;
            }
            return !1;
        }() ? ((0, o.parseIdentifier)(), (0, i.match)(l.TokenType.comma) && (0, i.lookaheadType)() === l.TokenType.star ? ((0, q.expect)(l.TokenType.comma), (0, q.expect)(l.TokenType.star), (0, q.expectContextual)(j.ContextualKeyword._as), (0, o.parseIdentifier)()) : _P(), _Q()) : (0, i.eat)(l.TokenType._default) ? function() {
            if (n.isTypeScriptEnabled && (0, h.tsTryParseExportDefaultExpression)())
                return;
            if (n.isFlowEnabled && (0, g.flowTryParseExportDefaultExpression)())
                return;
            const Q = n.state.start;
            (0, i.eat)(l.TokenType._function) ? _E(Q, !0, !0): (0, q.isContextual)(j.ContextualKeyword._async) && (0, i.lookaheadType)() === l.TokenType._function ? ((0, q.eatContextual)(j.ContextualKeyword._async), (0, i.eat)(l.TokenType._function), _E(Q, !0, !0)) : (0, i.match)(l.TokenType._class) ? _G(!0, !0) : (0, i.match)(l.TokenType.at) ? (_u(), _G(!0, !0)) : ((0, o.parseMaybeAssign)(), (0, q.semicolon)());
        }() : n.isTypeScriptEnabled && (0, h.tsIsDeclarationStart)() || n.isFlowEnabled && (0, g.flowShouldParseExportDeclaration)() || n.state.type === l.TokenType._var || n.state.type === l.TokenType._const || n.state.type === l.TokenType._let || n.state.type === l.TokenType._function || n.state.type === l.TokenType._class || (0, q.isContextual)(j.ContextualKeyword._async) || (0, i.match)(l.TokenType.at) ? n.isTypeScriptEnabled ? (0, h.tsParseExportDeclaration)() : n.isFlowEnabled ? (0, g.flowParseExportDeclaration)() : _s(!0) : (_S(), _Q()), n.state.tokens[P].rhsEndIndex = n.state.tokens.length);
    }

    function _P() {
        (0, i.eat)(l.TokenType.comma) && _S();
    }

    function _Q() {
        (0, q.eatContextual)(j.ContextualKeyword._from) && ((0, o.parseExprAtom)(), _Y()), (0, q.semicolon)();
    }

    function _R() {
        (0, q.expect)(l.TokenType.star), (0, q.isContextual)(j.ContextualKeyword._as) ? ((0, i.next)(), n.state.tokens[n.state.tokens.length - 1].type = l.TokenType._as, (0, o.parseIdentifier)(), _P(), _Q()) : _Q();
    }

    function _S() {
        let T = !0;
        for ((0, q.expect)(l.TokenType.braceL); !(0, i.eat)(l.TokenType.braceR) && !n.state.error;) {
            if (T)
                T = !1;
            else if ((0, q.expect)(l.TokenType.comma), (0, i.eat)(l.TokenType.braceR))
                break;
            _T();
        }
    }

    function _T() {
        n.isTypeScriptEnabled ? (0, h.tsParseExportSpecifier)() : ((0, o.parseIdentifier)(), n.state.tokens[n.state.tokens.length - 1].identifierRole = i.IdentifierRole.ExportAccess, (0, q.eatContextual)(j.ContextualKeyword._as) && (0, o.parseIdentifier)());
    }

    function U() {
        (0, q.isContextual)(j.ContextualKeyword._module) && function() {
            const V = n.state.snapshot();
            return (0, q.expectContextual)(j.ContextualKeyword._module), (0, q.eatContextual)(j.ContextualKeyword._from) ? (0, q.isContextual)(j.ContextualKeyword._from) ? (n.state.restoreFromSnapshot(V), !0) : (n.state.restoreFromSnapshot(V), !1) : (0, i.match)(l.TokenType.comma) ? (n.state.restoreFromSnapshot(V), !1) : (n.state.restoreFromSnapshot(V), !0);
        }() && (0, i.next)();
    }

    function _V() {
        if (n.isTypeScriptEnabled && (0, i.match)(l.TokenType.name) && (0, i.lookaheadType)() === l.TokenType.eq)
            (0, h.tsParseImportEqualsDeclaration)();
        else {
            if (n.isTypeScriptEnabled && (0, q.isContextual)(j.ContextualKeyword._type)) {
                const W = (0, i.lookaheadTypeAndKeyword)();
                if (W.type === l.TokenType.name && W.contextualKeyword !== j.ContextualKeyword._from) {
                    if ((0, q.expectContextual)(j.ContextualKeyword._type), (0, i.lookaheadType)() === l.TokenType.eq)
                        return void(0, h.tsParseImportEqualsDeclaration)();
                } else
                    W.type !== l.TokenType.star && W.type !== l.TokenType.braceL || (0, q.expectContextual)(j.ContextualKeyword._type);
            }
            (0, i.match)(l.TokenType.string) || (U(), function() {
                n.isFlowEnabled && (0, g.flowStartParseImportSpecifiers)();
                let W = !0;
                if ((0, i.match)(l.TokenType.name) && (_W(), !(0, i.eat)(l.TokenType.comma)))
                    return;
                if ((0, i.match)(l.TokenType.star))
                    return (0, i.next)(), (0, q.expectContextual)(j.ContextualKeyword._as), void _W();
                (0, q.expect)(l.TokenType.braceL);
                for (; !(0, i.eat)(l.TokenType.braceR) && !n.state.error;) {
                    if (W)
                        W = !1;
                    else if ((0, i.eat)(l.TokenType.colon) && (0, q.unexpected)('ES2015 named imports do not destructure. Use another statement for destructuring after the import.'), (0, q.expect)(l.TokenType.comma), (0, i.eat)(l.TokenType.braceR))
                        break;
                    _X();
                }
            }(), (0, q.expectContextual)(j.ContextualKeyword._from)), (0, o.parseExprAtom)(), _Y(), (0, q.semicolon)();
        }
    }

    function _W() {
        (0, p.parseImportedIdentifier)();
    }

    function _X() {
        n.isTypeScriptEnabled ? (0, h.tsParseImportSpecifier)() : n.isFlowEnabled ? (0, g.flowParseImportSpecifier)() : ((0, p.parseImportedIdentifier)(), (0, q.isContextual)(j.ContextualKeyword._as) && (n.state.tokens[n.state.tokens.length - 1].identifierRole = i.IdentifierRole.ImportAccess, (0, i.next)(), (0, p.parseImportedIdentifier)()));
    }

    function _Y() {
        ((0, i.match)(l.TokenType._with) || (0, q.isContextual)(j.ContextualKeyword._assert) && !(0, q.hasPrecedingLineBreak)()) && ((0, i.next)(), (0, o.parseObj)(!1, !1));
    }
}), c.register('4XH5N', function(d, e) {
    b(d.exports, 'flowParseTypeParameterDeclaration', function() {
        return _w;
    }), b(d.exports, 'flowParseTypeAnnotation', function() {
        return _L;
    }), b(d.exports, 'flowParseVariance', function() {
        return _N;
    }), b(d.exports, 'flowParseFunctionBodyAndFinish', function() {
        return _O;
    }), b(d.exports, 'flowParseSubscript', function() {
        return _P;
    }), b(d.exports, 'flowStartParseNewArguments', function() {
        return _Q;
    }), b(d.exports, 'flowTryParseStatement', function() {
        return _R;
    }), b(d.exports, 'flowTryParseExportDefaultExpression', function() {
        return _S;
    }), b(d.exports, 'flowParseIdentifierStatement', function() {
        return _T;
    }), b(d.exports, 'flowShouldParseExportDeclaration', function() {
        return _U;
    }), b(d.exports, 'flowShouldDisallowExportDefaultSpecifier', function() {
        return _V;
    }), b(d.exports, 'flowParseExportDeclaration', function() {
        return _W;
    }), b(d.exports, 'flowShouldParseExportStar', function() {
        return _X;
    }), b(d.exports, 'flowParseExportStar', function() {
        return _Y;
    }), b(d.exports, 'flowAfterParseClassSuper', function() {
        return _Z;
    }), b(d.exports, 'flowStartParseObjPropValue', function() {
        return _$;
    }), b(d.exports, 'flowParseAssignableListItemTypes', function() {
        return _ab;
    }), b(d.exports, 'flowStartParseImportSpecifiers', function() {
        return _bb;
    }), b(d.exports, 'flowParseImportSpecifier', function() {
        return _cb;
    }), b(d.exports, 'flowStartParseFunctionParams', function() {
        return _db;
    }), b(d.exports, 'flowAfterParseVarHead', function() {
        return _eb;
    }), b(d.exports, 'flowStartParseAsyncArrowFromCallExpression', function() {
        return _fb;
    }), b(d.exports, 'flowParseMaybeAssign', function() {
        return _gb;
    }), b(d.exports, 'flowParseArrow', function() {
        return _hb;
    }), b(d.exports, 'flowParseSubscripts', function() {
        return _ib;
    });
    var f = c('SGA4o'),
        g = c('pvm6x'),
        h = c('PmE4s'),
        i = c('REG+N'),
        j = c('Tel7O'),
        k = c('tTSJk'),
        l = c('QP6iy');

    function m(n) {
        const o = (0, f.pushTypeContext)(0);
        (0, l.expect)(n || h.TokenType.colon), _K(), (0, f.popTypeContext)(o);
    }

    function n() {
        (0, l.expect)(h.TokenType.modulo), (0, l.expectContextual)(g.ContextualKeyword._checks), (0, f.eat)(h.TokenType.parenL) && ((0, j.parseExpression)(), (0, l.expect)(h.TokenType.parenR));
    }

    function o() {
        const p = (0, f.pushTypeContext)(0);
        (0, l.expect)(h.TokenType.colon), (0, f.match)(h.TokenType.modulo) ? n(): (_K(), (0, f.match)(h.TokenType.modulo) && n()), (0, f.popTypeContext)(p);
    }

    function p() {
        (0, f.match)(h.TokenType._class) ? ((0, f.next)(), _q(!0)) : (0, f.match)(h.TokenType._function) ? ((0, f.next)(), (0, j.parseIdentifier)(), (0, f.match)(h.TokenType.lessThan) && _w(), (0, l.expect)(h.TokenType.parenL), _F(), (0, l.expect)(h.TokenType.parenR), o(), (0, l.semicolon)()) : (0, f.match)(h.TokenType._var) ? ((0, f.next)(), _M(), (0, l.semicolon)()) : (0, l.eatContextual)(g.ContextualKeyword._module) ? (0, f.eat)(h.TokenType.dot) ? ((0, l.expectContextual)(g.ContextualKeyword._exports), _L(), (0, l.semicolon)()) : function() {
            (0, f.match)(h.TokenType.string) ? (0, j.parseExprAtom)() : (0, j.parseIdentifier)();
            (0, l.expect)(h.TokenType.braceL);
            for (; !(0, f.match)(h.TokenType.braceR) && !i.state.error;)
                (0, f.match)(h.TokenType._import) ? ((0, f.next)(), (0, k.parseImport)()) : (0, l.unexpected)();
            (0, l.expect)(h.TokenType.braceR);
        }() : (0, l.isContextual)(g.ContextualKeyword._type) ? ((0, f.next)(), _u()) : (0, l.isContextual)(g.ContextualKeyword._opaque) ? ((0, f.next)(), _v(!0)) : (0, l.isContextual)(g.ContextualKeyword._interface) ? ((0, f.next)(), _q()) : (0, f.match)(h.TokenType._export) ? ((0, l.expect)(h.TokenType._export), (0, f.eat)(h.TokenType._default) ? (0, f.match)(h.TokenType._function) || (0, f.match)(h.TokenType._class) ? p() : (_K(), (0, l.semicolon)()) : (0, f.match)(h.TokenType._var) || (0, f.match)(h.TokenType._function) || (0, f.match)(h.TokenType._class) || (0, l.isContextual)(g.ContextualKeyword._opaque) ? p() : (0, f.match)(h.TokenType.star) || (0, f.match)(h.TokenType.braceL) || (0, l.isContextual)(g.ContextualKeyword._interface) || (0, l.isContextual)(g.ContextualKeyword._type) || (0, l.isContextual)(g.ContextualKeyword._opaque) ? (0, k.parseExport)() : (0, l.unexpected)()) : (0, l.unexpected)();
    }

    function _q(r = !1) {
        if (_t(), (0, f.match)(h.TokenType.lessThan) && _w(), (0, f.eat)(h.TokenType._extends))
            do {
                _r();
            } while (!r && (0, f.eat)(h.TokenType.comma));
        if ((0, l.isContextual)(g.ContextualKeyword._mixins)) {
            (0, f.next)();
            do {
                _r();
            } while ((0, f.eat)(h.TokenType.comma));
        }
        if ((0, l.isContextual)(g.ContextualKeyword._implements)) {
            (0, f.next)();
            do {
                _r();
            } while ((0, f.eat)(h.TokenType.comma));
        }
        _A(r, !1, r);
    }

    function _r() {
        _D(!1), (0, f.match)(h.TokenType.lessThan) && _x();
    }

    function s() {
        _q();
    }

    function _t() {
        (0, j.parseIdentifier)();
    }

    function _u() {
        _t(), (0, f.match)(h.TokenType.lessThan) && _w(), m(h.TokenType.eq), (0, l.semicolon)();
    }

    function _v(w) {
        (0, l.expectContextual)(g.ContextualKeyword._type), _t(), (0, f.match)(h.TokenType.lessThan) && _w(), (0, f.match)(h.TokenType.colon) && m(h.TokenType.colon), w || m(h.TokenType.eq), (0, l.semicolon)();
    }

    function _w() {
        const x = (0, f.pushTypeContext)(0);
        (0, f.match)(h.TokenType.lessThan) || (0, f.match)(h.TokenType.typeParameterStart) ? (0, f.next)() : (0, l.unexpected)();
        do {
            _N(), _M(), (0, f.eat)(h.TokenType.eq) && _K(), (0, f.match)(h.TokenType.greaterThan) || (0, l.expect)(h.TokenType.comma);
        } while (!(0, f.match)(h.TokenType.greaterThan) && !i.state.error);
        (0, l.expect)(h.TokenType.greaterThan), (0, f.popTypeContext)(x);
    }

    function _x() {
        const y = (0, f.pushTypeContext)(0);
        for ((0, l.expect)(h.TokenType.lessThan); !(0, f.match)(h.TokenType.greaterThan) && !i.state.error;)
            _K(), (0, f.match)(h.TokenType.greaterThan) || (0, l.expect)(h.TokenType.comma);
        (0, l.expect)(h.TokenType.greaterThan), (0, f.popTypeContext)(y);
    }

    function y() {
        (0, f.match)(h.TokenType.num) || (0, f.match)(h.TokenType.string) ? (0, j.parseExprAtom)() : (0, j.parseIdentifier)();
    }

    function z() {
        for ((0, f.match)(h.TokenType.lessThan) && _w(), (0, l.expect)(h.TokenType.parenL); !(0, f.match)(h.TokenType.parenR) && !(0, f.match)(h.TokenType.ellipsis) && !i.state.error;)
            _E(), (0, f.match)(h.TokenType.parenR) || (0, l.expect)(h.TokenType.comma);
        (0, f.eat)(h.TokenType.ellipsis) && _E(), (0, l.expect)(h.TokenType.parenR), m();
    }

    function _A(B, C, D) {
        let E;
        for (C && (0, f.match)(h.TokenType.braceBarL) ? ((0, l.expect)(h.TokenType.braceBarL), E = h.TokenType.braceBarR) : ((0, l.expect)(h.TokenType.braceL), E = h.TokenType.braceR); !(0, f.match)(E) && !i.state.error;) {
            if (D && (0, l.isContextual)(g.ContextualKeyword._proto)) {
                const F = (0, f.lookaheadType)();
                F !== h.TokenType.colon && F !== h.TokenType.question && ((0, f.next)(), B = !1);
            }
            if (B && (0, l.isContextual)(g.ContextualKeyword._static)) {
                const F = (0, f.lookaheadType)();
                F !== h.TokenType.colon && F !== h.TokenType.question && (0, f.next)();
            }
            if (_N(), (0, f.eat)(h.TokenType.bracketL))
                (0, f.eat)(h.TokenType.bracketL) ? (y(), (0, l.expect)(h.TokenType.bracketR), (0, l.expect)(h.TokenType.bracketR), (0, f.match)(h.TokenType.lessThan) || (0, f.match)(h.TokenType.parenL) ? z() : ((0, f.eat)(h.TokenType.question), m())) : ((0, f.lookaheadType)() === h.TokenType.colon ? (y(), m()) : _K(), (0, l.expect)(h.TokenType.bracketR), m());
            else if ((0, f.match)(h.TokenType.parenL) || (0, f.match)(h.TokenType.lessThan))
                z();
            else {
                if ((0, l.isContextual)(g.ContextualKeyword._get) || (0, l.isContextual)(g.ContextualKeyword._set)) {
                    const F = (0, f.lookaheadType)();
                    F !== h.TokenType.name && F !== h.TokenType.string && F !== h.TokenType.num || (0, f.next)();
                }
                _B();
            }
            _C();
        }
        (0, l.expect)(E);
    }

    function _B() {
        if ((0, f.match)(h.TokenType.ellipsis)) {
            if ((0, l.expect)(h.TokenType.ellipsis), (0, f.eat)(h.TokenType.comma) || (0, f.eat)(h.TokenType.semi), (0, f.match)(h.TokenType.braceR))
                return;
            _K();
        } else
            y(), (0, f.match)(h.TokenType.lessThan) || (0, f.match)(h.TokenType.parenL) ? z() : ((0, f.eat)(h.TokenType.question), m());
    }

    function _C() {
        (0, f.eat)(h.TokenType.semi) || (0, f.eat)(h.TokenType.comma) || (0, f.match)(h.TokenType.braceR) || (0, f.match)(h.TokenType.braceBarR) || (0, l.unexpected)();
    }

    function _D(E) {
        for (E || (0, j.parseIdentifier)();
            (0, f.eat)(h.TokenType.dot);)
            (0, j.parseIdentifier)();
    }

    function _E() {
        const F = (0, f.lookaheadType)();
        F === h.TokenType.colon || F === h.TokenType.question ? ((0, j.parseIdentifier)(), (0, f.eat)(h.TokenType.question), m()) : _K();
    }

    function _F() {
        for (; !(0, f.match)(h.TokenType.parenR) && !(0, f.match)(h.TokenType.ellipsis) && !i.state.error;)
            _E(), (0, f.match)(h.TokenType.parenR) || (0, l.expect)(h.TokenType.comma);
        (0, f.eat)(h.TokenType.ellipsis) && _E();
    }

    function G() {
        let H = !1;
        const I = i.state.noAnonFunctionType;
        switch (i.state.type) {
            case h.TokenType.name:
                return (0, l.isContextual)(g.ContextualKeyword._interface) ? void
                function() {
                    if ((0, l.expectContextual)(g.ContextualKeyword._interface), (0, f.eat)(h.TokenType._extends))
                        do {
                            _r();
                        } while ((0, f.eat)(h.TokenType.comma));
                    _A(!1, !1, !1);
                }(): ((0, j.parseIdentifier)(), _D(!0), void((0, f.match)(h.TokenType.lessThan) && _x()));
            case h.TokenType.braceL:
                return void _A(!1, !1, !1);
            case h.TokenType.braceBarL:
                return void _A(!1, !0, !1);
            case h.TokenType.bracketL:
                return void
                function() {
                    for ((0, l.expect)(h.TokenType.bracketL); i.state.pos < i.input.length && !(0, f.match)(h.TokenType.bracketR) && (_K(), !(0, f.match)(h.TokenType.bracketR));)
                        (0, l.expect)(h.TokenType.comma);
                    (0, l.expect)(h.TokenType.bracketR);
                }();
            case h.TokenType.lessThan:
                return _w(), (0, l.expect)(h.TokenType.parenL), _F(), (0, l.expect)(h.TokenType.parenR), (0, l.expect)(h.TokenType.arrow), void _K();
            case h.TokenType.parenL:
                if ((0, f.next)(), !(0, f.match)(h.TokenType.parenR) && !(0, f.match)(h.TokenType.ellipsis))
                    if ((0, f.match)(h.TokenType.name)) {
                        const J = (0, f.lookaheadType)();
                        H = J !== h.TokenType.question && J !== h.TokenType.colon;
                    } else
                        H = !0;
                if (H) {
                    if (i.state.noAnonFunctionType = !1, _K(), i.state.noAnonFunctionType = I, i.state.noAnonFunctionType || !((0, f.match)(h.TokenType.comma) || (0, f.match)(h.TokenType.parenR) && (0, f.lookaheadType)() === h.TokenType.arrow))
                        return void(0, l.expect)(h.TokenType.parenR);
                    (0, f.eat)(h.TokenType.comma);
                }
                return _F(), (0, l.expect)(h.TokenType.parenR), (0, l.expect)(h.TokenType.arrow), void _K();
            case h.TokenType.minus:
                return (0, f.next)(), void(0, j.parseLiteral)();
            case h.TokenType.string:
            case h.TokenType.num:
            case h.TokenType._true:
            case h.TokenType._false:
            case h.TokenType._null:
            case h.TokenType._this:
            case h.TokenType._void:
            case h.TokenType.star:
                return void(0, f.next)();
            default:
                if (i.state.type === h.TokenType._typeof)
                    return (0, l.expect)(h.TokenType._typeof), void G();
                if (i.state.type & h.TokenType.IS_KEYWORD)
                    return (0, f.next)(), void(i.state.tokens[i.state.tokens.length - 1].type = h.TokenType.name);
        }
        (0, l.unexpected)();
    }

    function H() {
        (0, f.eat)(h.TokenType.question) ? H(): function() {
            for (G(); !(0, l.canInsertSemicolon)() && ((0, f.match)(h.TokenType.bracketL) || (0, f.match)(h.TokenType.questionDot));)
                (0, f.eat)(h.TokenType.questionDot), (0, l.expect)(h.TokenType.bracketL), (0, f.eat)(h.TokenType.bracketR) || (_K(), (0, l.expect)(h.TokenType.bracketR));
        }();
    }

    function I() {
        H(), !i.state.noAnonFunctionType && (0, f.eat)(h.TokenType.arrow) && _K();
    }

    function J() {
        for ((0, f.eat)(h.TokenType.bitwiseAND), I();
            (0, f.eat)(h.TokenType.bitwiseAND);)
            I();
    }

    function _K() {
        ! function() {
            for ((0, f.eat)(h.TokenType.bitwiseOR), J();
                (0, f.eat)(h.TokenType.bitwiseOR);)
                J();
        }();
    }

    function _L() {
        m();
    }

    function _M() {
        (0, j.parseIdentifier)(), (0, f.match)(h.TokenType.colon) && _L();
    }

    function _N() {
        ((0, f.match)(h.TokenType.plus) || (0, f.match)(h.TokenType.minus)) && ((0, f.next)(), i.state.tokens[i.state.tokens.length - 1].isType = !0);
    }

    function _O(P) {
        (0, f.match)(h.TokenType.colon) && o(), (0, j.parseFunctionBody)(!1, P);
    }

    function _P(Q, R, S) {
        if ((0, f.match)(h.TokenType.questionDot) && (0, f.lookaheadType)() === h.TokenType.lessThan)
            return R ? void(S.stop = !0) : ((0, f.next)(), _x(), (0, l.expect)(h.TokenType.parenL), void(0, j.parseCallExpressionArguments)());
        if (!R && (0, f.match)(h.TokenType.lessThan)) {
            const T = i.state.snapshot();
            if (_x(), (0, l.expect)(h.TokenType.parenL), (0, j.parseCallExpressionArguments)(), !i.state.error)
                return;
            i.state.restoreFromSnapshot(T);
        }
        (0, j.baseParseSubscript)(Q, R, S);
    }

    function _Q() {
        if ((0, f.match)(h.TokenType.lessThan)) {
            const R = i.state.snapshot();
            _x(), i.state.error && i.state.restoreFromSnapshot(R);
        }
    }

    function _R() {
        if ((0, f.match)(h.TokenType.name) && i.state.contextualKeyword === g.ContextualKeyword._interface) {
            const S = (0, f.pushTypeContext)(0);
            return (0, f.next)(), s(), (0, f.popTypeContext)(S), !0;
        }
        return !!(0, l.isContextual)(g.ContextualKeyword._enum) && (_jb(), !0);
    }

    function _S() {
        return !!(0, l.isContextual)(g.ContextualKeyword._enum) && (_jb(), !0);
    }

    function _T(U) {
        if (U === g.ContextualKeyword._declare) {
            if ((0, f.match)(h.TokenType._class) || (0, f.match)(h.TokenType.name) || (0, f.match)(h.TokenType._function) || (0, f.match)(h.TokenType._var) || (0, f.match)(h.TokenType._export)) {
                const V = (0, f.pushTypeContext)(1);
                p(), (0, f.popTypeContext)(V);
            }
        } else if ((0, f.match)(h.TokenType.name))
            if (U === g.ContextualKeyword._interface) {
                const V = (0, f.pushTypeContext)(1);
                s(), (0, f.popTypeContext)(V);
            } else if (U === g.ContextualKeyword._type) {
            const V = (0, f.pushTypeContext)(1);
            _u(), (0, f.popTypeContext)(V);
        } else if (U === g.ContextualKeyword._opaque) {
            const V = (0, f.pushTypeContext)(1);
            _v(!1), (0, f.popTypeContext)(V);
        }
        (0, l.semicolon)();
    }

    function _U() {
        return (0, l.isContextual)(g.ContextualKeyword._type) || (0, l.isContextual)(g.ContextualKeyword._interface) || (0, l.isContextual)(g.ContextualKeyword._opaque) || (0, l.isContextual)(g.ContextualKeyword._enum);
    }

    function _V() {
        return (0, f.match)(h.TokenType.name) && (i.state.contextualKeyword === g.ContextualKeyword._type || i.state.contextualKeyword === g.ContextualKeyword._interface || i.state.contextualKeyword === g.ContextualKeyword._opaque || i.state.contextualKeyword === g.ContextualKeyword._enum);
    }

    function _W() {
        if ((0, l.isContextual)(g.ContextualKeyword._type)) {
            const X = (0, f.pushTypeContext)(1);
            (0, f.next)(), (0, f.match)(h.TokenType.braceL) ? ((0, k.parseExportSpecifiers)(), (0, k.parseExportFrom)()) : _u(), (0, f.popTypeContext)(X);
        } else if ((0, l.isContextual)(g.ContextualKeyword._opaque)) {
            const X = (0, f.pushTypeContext)(1);
            (0, f.next)(), _v(!1), (0, f.popTypeContext)(X);
        } else if ((0, l.isContextual)(g.ContextualKeyword._interface)) {
            const X = (0, f.pushTypeContext)(1);
            (0, f.next)(), s(), (0, f.popTypeContext)(X);
        } else
            (0, k.parseStatement)(!0);
    }

    function _X() {
        return (0, f.match)(h.TokenType.star) || (0, l.isContextual)(g.ContextualKeyword._type) && (0, f.lookaheadType)() === h.TokenType.star;
    }

    function _Y() {
        if ((0, l.eatContextual)(g.ContextualKeyword._type)) {
            const Z = (0, f.pushTypeContext)(2);
            (0, k.baseParseExportStar)(), (0, f.popTypeContext)(Z);
        } else
            (0, k.baseParseExportStar)();
    }

    function _Z($) {
        if ($ && (0, f.match)(h.TokenType.lessThan) && _x(), (0, l.isContextual)(g.ContextualKeyword._implements)) {
            const ab = (0, f.pushTypeContext)(0);
            (0, f.next)(), i.state.tokens[i.state.tokens.length - 1].type = h.TokenType._implements;
            do {
                _t(), (0, f.match)(h.TokenType.lessThan) && _x();
            } while ((0, f.eat)(h.TokenType.comma));
            (0, f.popTypeContext)(ab);
        }
    }

    function _$() {
        (0, f.match)(h.TokenType.lessThan) && (_w(), (0, f.match)(h.TokenType.parenL) || (0, l.unexpected)());
    }

    function _ab() {
        const bb = (0, f.pushTypeContext)(0);
        (0, f.eat)(h.TokenType.question), (0, f.match)(h.TokenType.colon) && _L(), (0, f.popTypeContext)(bb);
    }

    function _bb() {
        if ((0, f.match)(h.TokenType._typeof) || (0, l.isContextual)(g.ContextualKeyword._type)) {
            const cb = (0, f.lookaheadTypeAndKeyword)();
            (((d = cb).type === h.TokenType.name || d.type & h.TokenType.IS_KEYWORD) && d.contextualKeyword !== g.ContextualKeyword._from || cb.type === h.TokenType.braceL || cb.type === h.TokenType.star) && (0, f.next)();
        }
        var cb;
    }

    function _cb() {
        const db = i.state.contextualKeyword === g.ContextualKeyword._type || i.state.type === h.TokenType._typeof;
        db ? (0, f.next)() : (0, j.parseIdentifier)(), (0, l.isContextual)(g.ContextualKeyword._as) && !(0, l.isLookaheadContextual)(g.ContextualKeyword._as) ? ((0, j.parseIdentifier)(), (!db || (0, f.match)(h.TokenType.name) || i.state.type & h.TokenType.IS_KEYWORD) && (0, j.parseIdentifier)()) : (db && ((0, f.match)(h.TokenType.name) || i.state.type & h.TokenType.IS_KEYWORD) && (0, j.parseIdentifier)(), (0, l.eatContextual)(g.ContextualKeyword._as) && (0, j.parseIdentifier)());
    }

    function _db() {
        if ((0, f.match)(h.TokenType.lessThan)) {
            const eb = (0, f.pushTypeContext)(0);
            _w(), (0, f.popTypeContext)(eb);
        }
    }

    function _eb() {
        (0, f.match)(h.TokenType.colon) && _L();
    }

    function _fb() {
        if ((0, f.match)(h.TokenType.colon)) {
            const gb = i.state.noAnonFunctionType;
            i.state.noAnonFunctionType = !0, _L(), i.state.noAnonFunctionType = gb;
        }
    }

    function _gb(hb, ib) {
        if ((0, f.match)(h.TokenType.lessThan)) {
            const jb = i.state.snapshot();
            let kb = (0, j.baseParseMaybeAssign)(hb, ib);
            if (!i.state.error)
                return kb;
            i.state.restoreFromSnapshot(jb), i.state.type = h.TokenType.typeParameterStart;
            const lb = (0, f.pushTypeContext)(0);
            if (_w(), (0, f.popTypeContext)(lb), kb = (0, j.baseParseMaybeAssign)(hb, ib), kb)
                return !0;
            (0, l.unexpected)();
        }
        return (0, j.baseParseMaybeAssign)(hb, ib);
    }

    function _hb() {
        if ((0, f.match)(h.TokenType.colon)) {
            const ib = (0, f.pushTypeContext)(0),
                jb = i.state.snapshot(),
                kb = i.state.noAnonFunctionType;
            i.state.noAnonFunctionType = !0, o(), i.state.noAnonFunctionType = kb, (0, l.canInsertSemicolon)() && (0, l.unexpected)(), (0, f.match)(h.TokenType.arrow) || (0, l.unexpected)(), i.state.error && i.state.restoreFromSnapshot(jb), (0, f.popTypeContext)(ib);
        }
        return (0, f.eat)(h.TokenType.arrow);
    }

    function _ib(jb, kb = !1) {
        if (i.state.tokens[i.state.tokens.length - 1].contextualKeyword === g.ContextualKeyword._async && (0, f.match)(h.TokenType.lessThan)) {
            const lb = i.state.snapshot(),
                mb = function() {
                    i.state.scopeDepth++;
                    const nb = i.state.tokens.length;
                    return (0, k.parseFunctionParams)(), !!(0, j.parseArrow)() && ((0, j.parseArrowExpression)(nb), !0);
                }();
            if (mb && !i.state.error)
                return;
            i.state.restoreFromSnapshot(lb);
        }
        (0, j.baseParseSubscripts)(jb, kb);
    }

    function _jb() {
        (0, l.expectContextual)(g.ContextualKeyword._enum), i.state.tokens[i.state.tokens.length - 1].type = h.TokenType._enum, (0, j.parseIdentifier)(),
            function() {
                (0, l.eatContextual)(g.ContextualKeyword._of) && (0, f.next)();
                (0, l.expect)(h.TokenType.braceL),
                function() {
                    for (; !(0, f.match)(h.TokenType.braceR) && !i.state.error && !(0, f.eat)(h.TokenType.ellipsis);)
                        _kb(), (0, f.match)(h.TokenType.braceR) || (0, l.expect)(h.TokenType.comma);
                }(), (0, l.expect)(h.TokenType.braceR);
            }();
    }

    function _kb() {
        (0, j.parseIdentifier)(), (0, f.eat)(h.TokenType.eq) && (0, f.next)();
    }
}), c.register('Tel7O', function(d, e) {
    b(d.exports, 'parseExpression', function() {
        return _u;
    }), b(d.exports, 'parseMaybeAssign', function() {
        return _v;
    }), b(d.exports, 'baseParseMaybeAssign', function() {
        return _w;
    }), b(d.exports, 'baseParseConditional', function() {
        return _x;
    }), b(d.exports, 'parseMaybeUnary', function() {
        return _z;
    }), b(d.exports, 'parseExprSubscripts', function() {
        return _A;
    }), b(d.exports, 'parseExprAtom', function() {
        return _I;
    }), b(d.exports, 'baseParseSubscripts', function() {
        return _C;
    }), b(d.exports, 'baseParseSubscript', function() {
        return _E;
    }), b(d.exports, 'parseCallExpressionArguments', function() {
        return _G;
    }), b(d.exports, 'atPossibleAsync', function() {
        return _F;
    }), b(d.exports, 'parseTemplate', function() {
        return _P;
    }), b(d.exports, 'parseArrowExpression', function() {
        return _V;
    }), b(d.exports, 'parseIdentifier', function() {
        return _$;
    }), b(d.exports, 'parseLiteral', function() {
        return _K;
    }), b(d.exports, 'parseObj', function() {
        return _Q;
    }), b(d.exports, 'parseParenExpression', function() {
        return _L;
    }), b(d.exports, 'parseArrow', function() {
        return _N;
    }), b(d.exports, 'parsePropertyName', function() {
        return _T;
    }), b(d.exports, 'parseMethod', function() {
        return _U;
    }), b(d.exports, 'parseFunctionBodyAndFinish', function() {
        return _W;
    }), b(d.exports, 'parseFunctionBody', function() {
        return _X;
    });
    var f = c('4XH5N'),
        g = c('ofBjI'),
        h = c('ECtIZ'),
        i = c('QSFPD'),
        j = c('SGA4o'),
        k = c('pvm6x'),
        l = c('BpLPu'),
        m = c('PmE4s'),
        n = c('MYjp2'),
        o = c('l+GFY'),
        p = c('REG+N'),
        q = c('JOEM9'),
        r = c('tTSJk'),
        s = c('QP6iy');
    class t {
        constructor(u) {
            this.stop = u;
        }
    }

    function _u(v = !1) {
        if (_v(v), (0, j.match)(m.TokenType.comma))
            for (;
                (0, j.eat)(m.TokenType.comma);)
                _v(v);
    }

    function _v(w = !1, x = !1) {
        return p.isTypeScriptEnabled ? (0, i.tsParseMaybeAssign)(w, x) : p.isFlowEnabled ? (0, f.flowParseMaybeAssign)(w, x) : _w(w, x);
    }

    function _w(x, y) {
        if ((0, j.match)(m.TokenType._yield))
            return (0, j.next)(), (0, j.match)(m.TokenType.semi) || (0, s.canInsertSemicolon)() || ((0, j.eat)(m.TokenType.star), _v()), !1;
        ((0, j.match)(m.TokenType.parenL) || (0, j.match)(m.TokenType.name) || (0, j.match)(m.TokenType._yield)) && (p.state.potentialArrowAt = p.state.start);
        const z = function(A) {
            const B = function(C) {
                const D = p.state.tokens.length,
                    E = _z();
                return !!E || (_y(D, -1, C), !1);
            }(A);
            return !!B || (function(C) {
                p.isTypeScriptEnabled || p.isFlowEnabled ? (0, h.typedParseConditional)(C) : _x(C);
            }(A), !1);
        }(x);
        return y && _O(), p.state.type & m.TokenType.IS_ASSIGN ? ((0, j.next)(), _v(x), !1) : z;
    }

    function _x(y) {
        (0, j.eat)(m.TokenType.question) && (_v(), (0, s.expect)(m.TokenType.colon), _v(y));
    }

    function _y(z, A, B) {
        if (p.isTypeScriptEnabled && (m.TokenType._in & m.TokenType.PRECEDENCE_MASK) > A && !(0, s.hasPrecedingLineBreak)() && ((0, s.eatContextual)(k.ContextualKeyword._as) || (0, s.eatContextual)(k.ContextualKeyword._satisfies))) {
            const C = (0, j.pushTypeContext)(1);
            return (0, i.tsParseType)(), (0, j.popTypeContext)(C), (0, j.rescan_gt)(), void _y(z, A, B);
        }
        const C = p.state.type & m.TokenType.PRECEDENCE_MASK;
        if (C > 0 && (!B || !(0, j.match)(m.TokenType._in)) && C > A) {
            const D = p.state.type;
            (0, j.next)(), D === m.TokenType.nullishCoalescing && (p.state.tokens[p.state.tokens.length - 1].nullishStartIndex = z);
            const E = p.state.tokens.length;
            _z(), _y(E, D & m.TokenType.IS_RIGHT_ASSOCIATIVE ? C - 1 : C, B), D === m.TokenType.nullishCoalescing && (p.state.tokens[z].numNullishCoalesceStarts++, p.state.tokens[p.state.tokens.length - 1].numNullishCoalesceEnds++), _y(z, A, B);
        }
    }

    function _z() {
        if (p.isTypeScriptEnabled && !p.isJSXEnabled && (0, j.eat)(m.TokenType.lessThan))
            return (0, i.tsParseTypeAssertion)(), !1;
        if ((0, s.isContextual)(k.ContextualKeyword._module) && (0, j.lookaheadCharCode)() === n.charCodes.leftCurlyBrace && !(0, s.hasFollowingLineBreak)())
            return (0, s.expectContextual)(k.ContextualKeyword._module), (0, s.expect)(m.TokenType.braceL), (0, r.parseBlockBody)(m.TokenType.braceR), !1;
        if (p.state.type & m.TokenType.IS_PREFIX)
            return (0, j.next)(), _z(), !1;
        if (_A())
            return !0;
        for (; p.state.type & m.TokenType.IS_POSTFIX && !(0, s.canInsertSemicolon)();)
            p.state.type === m.TokenType.preIncDec && (p.state.type = m.TokenType.postIncDec), (0, j.next)();
        return !1;
    }

    function _A() {
        const B = p.state.tokens.length;
        return !!_I() || (_B(B), p.state.tokens.length > B && p.state.tokens[B].isOptionalChainStart && (p.state.tokens[p.state.tokens.length - 1].isOptionalChainEnd = !0), !1);
    }

    function _B(C, D = !1) {
        p.isFlowEnabled ? (0, f.flowParseSubscripts)(C, D) : _C(C, D);
    }

    function _C(D, E = !1) {
        const F = new t(!1);
        do {
            _D(D, E, F);
        } while (!F.stop && !p.state.error);
    }

    function _D(E, F, G) {
        p.isTypeScriptEnabled ? (0, i.tsParseSubscript)(E, F, G) : p.isFlowEnabled ? (0, f.flowParseSubscript)(E, F, G) : _E(E, F, G);
    }

    function _E(F, G, H) {
        if (!G && (0, j.eat)(m.TokenType.doubleColon))
            _H(), H.stop = !0, _B(F, G);
        else if ((0, j.match)(m.TokenType.questionDot)) {
            if (p.state.tokens[F].isOptionalChainStart = !0, G && (0, j.lookaheadType)() === m.TokenType.parenL)
                return void(H.stop = !0);
            (0, j.next)(), p.state.tokens[p.state.tokens.length - 1].subscriptStartIndex = F, (0, j.eat)(m.TokenType.bracketL) ? (_u(), (0, s.expect)(m.TokenType.bracketR)) : (0, j.eat)(m.TokenType.parenL) ? _G() : _J();
        } else if ((0, j.eat)(m.TokenType.dot))
            p.state.tokens[p.state.tokens.length - 1].subscriptStartIndex = F, _J();
        else if ((0, j.eat)(m.TokenType.bracketL))
            p.state.tokens[p.state.tokens.length - 1].subscriptStartIndex = F, _u(), (0, s.expect)(m.TokenType.bracketR);
        else if (!G && (0, j.match)(m.TokenType.parenL))
            if (_F()) {
                const I = p.state.snapshot(),
                    J = p.state.tokens.length;
                (0, j.next)(), p.state.tokens[p.state.tokens.length - 1].subscriptStartIndex = F;
                const K = (0, p.getNextContextId)();
                p.state.tokens[p.state.tokens.length - 1].contextId = K, _G(), p.state.tokens[p.state.tokens.length - 1].contextId = K, ((0, j.match)(m.TokenType.colon) || (0, j.match)(m.TokenType.arrow)) && (p.state.restoreFromSnapshot(I), H.stop = !0, p.state.scopeDepth++, (0, r.parseFunctionParams)(), function(L) {
                    p.isTypeScriptEnabled ? (0, i.tsStartParseAsyncArrowFromCallExpression)() : p.isFlowEnabled && (0, f.flowStartParseAsyncArrowFromCallExpression)();
                    (0, s.expect)(m.TokenType.arrow), _V(L);
                }(J));
            } else {
                (0, j.next)(), p.state.tokens[p.state.tokens.length - 1].subscriptStartIndex = F;
                const I = (0, p.getNextContextId)();
                p.state.tokens[p.state.tokens.length - 1].contextId = I, _G(), p.state.tokens[p.state.tokens.length - 1].contextId = I;
            }
        else
            (0, j.match)(m.TokenType.backQuote) ? _P() : H.stop = !0;
    }

    function _F() {
        return p.state.tokens[p.state.tokens.length - 1].contextualKeyword === k.ContextualKeyword._async && !(0, s.canInsertSemicolon)();
    }

    function _G() {
        let H = !0;
        for (; !(0, j.eat)(m.TokenType.parenR) && !p.state.error;) {
            if (H)
                H = !1;
            else if ((0, s.expect)(m.TokenType.comma), (0, j.eat)(m.TokenType.parenR))
                break;
            _Z(!1);
        }
    }

    function _H() {
        const I = p.state.tokens.length;
        _I(), _B(I, !0);
    }

    function _I() {
        if ((0, j.eat)(m.TokenType.modulo))
            return _$(), !1;
        if ((0, j.match)(m.TokenType.jsxText) || (0, j.match)(m.TokenType.jsxEmptyText))
            return _K(), !1;
        if ((0, j.match)(m.TokenType.lessThan) && p.isJSXEnabled)
            return p.state.type = m.TokenType.jsxTagStart, (0, g.jsxParseElement)(), (0, j.next)(), !1;
        const J = p.state.potentialArrowAt === p.state.start;
        switch (p.state.type) {
            case m.TokenType.slash:
            case m.TokenType.assign:
                (0, j.retokenizeSlashAsRegex)();
            case m.TokenType._super:
            case m.TokenType._this:
            case m.TokenType.regexp:
            case m.TokenType.num:
            case m.TokenType.bigint:
            case m.TokenType.decimal:
            case m.TokenType.string:
            case m.TokenType._null:
            case m.TokenType._true:
            case m.TokenType._false:
                return (0, j.next)(), !1;
            case m.TokenType._import:
                return (0, j.next)(), (0, j.match)(m.TokenType.dot) && (p.state.tokens[p.state.tokens.length - 1].type = m.TokenType.name, (0, j.next)(), _$()), !1;
            case m.TokenType.name: {
                const K = p.state.tokens.length,
                    L = p.state.start,
                    M = p.state.contextualKeyword;
                return _$(), M === k.ContextualKeyword._await ? (_z(), !1) : M === k.ContextualKeyword._async && (0, j.match)(m.TokenType._function) && !(0, s.canInsertSemicolon)() ? ((0, j.next)(), (0, r.parseFunction)(L, !1), !1) : J && M === k.ContextualKeyword._async && !(0, s.canInsertSemicolon)() && (0, j.match)(m.TokenType.name) ? (p.state.scopeDepth++, (0, q.parseBindingIdentifier)(!1), (0, s.expect)(m.TokenType.arrow), _V(K), !0) : (0, j.match)(m.TokenType._do) && !(0, s.canInsertSemicolon)() ? ((0, j.next)(), (0, r.parseBlock)(), !1) : J && !(0, s.canInsertSemicolon)() && (0, j.match)(m.TokenType.arrow) ? (p.state.scopeDepth++, (0, q.markPriorBindingIdentifier)(!1), (0, s.expect)(m.TokenType.arrow), _V(K), !0) : (p.state.tokens[p.state.tokens.length - 1].identifierRole = j.IdentifierRole.Access, !1);
            }
            case m.TokenType._do:
                return (0, j.next)(), (0, r.parseBlock)(), !1;
            case m.TokenType.parenL:
                return _M(J);
            case m.TokenType.bracketL:
                return (0, j.next)(), _Y(m.TokenType.bracketR, !0), !1;
            case m.TokenType.braceL:
                return _Q(!1, !1), !1;
            case m.TokenType._function:
                return function() {
                    const K = p.state.start;
                    _$(), (0, j.eat)(m.TokenType.dot) && _$();
                    (0, r.parseFunction)(K, !1);
                }(), !1;
            case m.TokenType.at:
                (0, r.parseDecorators)();
            case m.TokenType._class:
                return (0, r.parseClass)(!1), !1;
            case m.TokenType._new:
                return function() {
                    if ((0, s.expect)(m.TokenType._new), (0, j.eat)(m.TokenType.dot))
                        return void _$();
                    _H(), void(0, j.eat)(m.TokenType.questionDot), p.isFlowEnabled && (0, f.flowStartParseNewArguments)();
                    (0, j.eat)(m.TokenType.parenL) && _Y(m.TokenType.parenR);
                }(), !1;
            case m.TokenType.backQuote:
                return _P(), !1;
            case m.TokenType.doubleColon:
                return (0, j.next)(), _H(), !1;
            case m.TokenType.hash: {
                const K = (0, j.lookaheadCharCode)();
                return o.IS_IDENTIFIER_START[K] || K === n.charCodes.backslash ? _J() : (0, j.next)(), !1;
            }
            default:
                return (0, s.unexpected)(), !1;
        }
    }

    function _J() {
        (0, j.eat)(m.TokenType.hash), _$();
    }

    function _K() {
        (0, j.next)();
    }

    function _L() {
        (0, s.expect)(m.TokenType.parenL), _u(), (0, s.expect)(m.TokenType.parenR);
    }

    function _M(N) {
        const O = p.state.snapshot(),
            P = p.state.tokens.length;
        (0, s.expect)(m.TokenType.parenL);
        let Q = !0;
        for (; !(0, j.match)(m.TokenType.parenR) && !p.state.error;) {
            if (Q)
                Q = !1;
            else if ((0, s.expect)(m.TokenType.comma), (0, j.match)(m.TokenType.parenR))
                break;
            if ((0, j.match)(m.TokenType.ellipsis)) {
                (0, q.parseRest)(!1), _O();
                break;
            }
            _v(!1, !0);
        }
        if ((0, s.expect)(m.TokenType.parenR), N && ((0, j.match)(m.TokenType.colon) || !(0, s.canInsertSemicolon)())) {
            if (_N())
                return p.state.restoreFromSnapshot(O), p.state.scopeDepth++, (0, r.parseFunctionParams)(), _N(), _V(P), !p.state.error || (p.state.restoreFromSnapshot(O), _M(!1), !1);
        }
        return !1;
    }

    function _N() {
        return p.isTypeScriptEnabled ? (0, i.tsParseArrow)() : p.isFlowEnabled ? (0, f.flowParseArrow)() : (0, j.eat)(m.TokenType.arrow);
    }

    function _O() {
        (p.isTypeScriptEnabled || p.isFlowEnabled) && (0, h.typedParseParenItem)();
    }

    function _P() {
        for ((0, j.nextTemplateToken)(), (0, j.nextTemplateToken)(); !(0, j.match)(m.TokenType.backQuote) && !p.state.error;)
            (0, s.expect)(m.TokenType.dollarBraceL), _u(), (0, j.nextTemplateToken)(), (0, j.nextTemplateToken)();
        (0, j.next)();
    }

    function _Q(R, S) {
        const T = (0, p.getNextContextId)();
        let U = !0;
        for ((0, j.next)(), p.state.tokens[p.state.tokens.length - 1].contextId = T; !(0, j.eat)(m.TokenType.braceR) && !p.state.error;) {
            if (U)
                U = !1;
            else if ((0, s.expect)(m.TokenType.comma), (0, j.eat)(m.TokenType.braceR))
                break;
            let V = !1;
            if ((0, j.match)(m.TokenType.ellipsis)) {
                const W = p.state.tokens.length;
                if ((0, q.parseSpread)(), R && (p.state.tokens.length === W + 2 && (0, q.markPriorBindingIdentifier)(S), (0, j.eat)(m.TokenType.braceR)))
                    break;
            } else
                R || (V = (0, j.eat)(m.TokenType.star)), !R && (0, s.isContextual)(k.ContextualKeyword._async) ? (V && (0, s.unexpected)(), _$(), (0, j.match)(m.TokenType.colon) || (0, j.match)(m.TokenType.parenL) || (0, j.match)(m.TokenType.braceR) || (0, j.match)(m.TokenType.eq) || (0, j.match)(m.TokenType.comma) || ((0, j.match)(m.TokenType.star) && ((0, j.next)(), V = !0), _T(T))) : _T(T), _S(R, S, T);
        }
        p.state.tokens[p.state.tokens.length - 1].contextId = T;
    }

    function R(S, T) {
        const U = p.state.start;
        return (0, j.match)(m.TokenType.parenL) ? (S && (0, s.unexpected)(), _U(U, !1), !0) : !! function(V) {
            return !V && ((0, j.match)(m.TokenType.string) || (0, j.match)(m.TokenType.num) || (0, j.match)(m.TokenType.bracketL) || (0, j.match)(m.TokenType.name) || !!(p.state.type & m.TokenType.IS_KEYWORD));
        }(S) && (_T(T), _U(U, !1), !0);
    }

    function _S(T, U, V) {
        p.isTypeScriptEnabled ? (0, i.tsStartParseObjPropValue)() : p.isFlowEnabled && (0, f.flowStartParseObjPropValue)();
        R(T, V) || function(W, X) {
            if ((0, j.eat)(m.TokenType.colon))
                return void(W ? (0, q.parseMaybeDefault)(X) : _v(!1));
            let Y;
            Y = W ? 0 === p.state.scopeDepth ? j.IdentifierRole.ObjectShorthandTopLevelDeclaration : X ? j.IdentifierRole.ObjectShorthandBlockScopedDeclaration : j.IdentifierRole.ObjectShorthandFunctionScopedDeclaration : j.IdentifierRole.ObjectShorthand, p.state.tokens[p.state.tokens.length - 1].identifierRole = Y, (0, q.parseMaybeDefault)(X, !0);
        }(T, U);
    }

    function _T(U) {
        p.isFlowEnabled && (0, f.flowParseVariance)(), (0, j.eat)(m.TokenType.bracketL) ? (p.state.tokens[p.state.tokens.length - 1].contextId = U, _v(), (0, s.expect)(m.TokenType.bracketR), p.state.tokens[p.state.tokens.length - 1].contextId = U) : ((0, j.match)(m.TokenType.num) || (0, j.match)(m.TokenType.string) || (0, j.match)(m.TokenType.bigint) || (0, j.match)(m.TokenType.decimal) ? _I() : _J(), p.state.tokens[p.state.tokens.length - 1].identifierRole = j.IdentifierRole.ObjectKey, p.state.tokens[p.state.tokens.length - 1].contextId = U);
    }

    function _U(V, W) {
        const X = (0, p.getNextContextId)();
        p.state.scopeDepth++;
        const Y = p.state.tokens.length,
            Z = W;
        (0, r.parseFunctionParams)(Z, X), _W(V, X);
        const $ = p.state.tokens.length;
        p.state.scopes.push(new(0, l.Scope)(Y, $, !0)), p.state.scopeDepth--;
    }

    function _V(W) {
        _X(!0);
        const X = p.state.tokens.length;
        p.state.scopes.push(new(0, l.Scope)(W, X, !0)), p.state.scopeDepth--;
    }

    function _W(X, Y = 0) {
        p.isTypeScriptEnabled ? (0, i.tsParseFunctionBodyAndFinish)(X, Y) : p.isFlowEnabled ? (0, f.flowParseFunctionBodyAndFinish)(Y) : _X(!1, Y);
    }

    function _X(Y, Z = 0) {
        Y && !(0, j.match)(m.TokenType.braceL) ? _v() : (0, r.parseBlock)(!0, Z);
    }

    function _Y(Z, $ = !1) {
        let ab = !0;
        for (; !(0, j.eat)(Z) && !p.state.error;) {
            if (ab)
                ab = !1;
            else if ((0, s.expect)(m.TokenType.comma), (0, j.eat)(Z))
                break;
            _Z($);
        }
    }

    function _Z($) {
        $ && (0, j.match)(m.TokenType.comma) || ((0, j.match)(m.TokenType.ellipsis) ? ((0, q.parseSpread)(), _O()) : (0, j.match)(m.TokenType.question) ? (0, j.next)() : _v(!1, !0));
    }

    function _$() {
        (0, j.next)(), p.state.tokens[p.state.tokens.length - 1].type = m.TokenType.name;
    }
}), c.register('ofBjI', function(d, e) {
    b(d.exports, 'nextJSXTagToken', function() {
        return _t;
    }), b(d.exports, 'jsxParseElement', function() {
        return _s;
    });
    var f = c('SGA4o'),
        g = c('PmE4s'),
        h = c('REG+N'),
        i = c('Tel7O'),
        j = c('QP6iy'),
        k = c('MYjp2'),
        l = c('l+GFY'),
        m = c('QSFPD');

    function n() {
        _t();
    }

    function o(p) {
        n(), (0, f.eat)(g.TokenType.colon) ? n() : h.state.tokens[h.state.tokens.length - 1].identifierRole = p;
    }

    function p() {
        const q = h.state.tokens.length;
        o(f.IdentifierRole.Access);
        let r = !1;
        for (;
            (0, f.match)(g.TokenType.dot);)
            r = !0, _t(), n();
        if (!r) {
            const s = h.state.tokens[q],
                t = h.input.charCodeAt(s.start);
            t >= k.charCodes.lowercaseA && t <= k.charCodes.lowercaseZ && (s.identifierRole = null);
        }
    }

    function q() {
        switch (h.state.type) {
            case g.TokenType.braceL:
                return (0, f.next)(), (0, i.parseExpression)(), void _t();
            case g.TokenType.jsxTagStart:
                return _s(), void _t();
            case g.TokenType.string:
                return void _t();
            default:
                (0, j.unexpected)('JSX value should be either an expression or a quoted JSX text');
        }
    }

    function r() {
        const s = h.state.tokens.length - 1;
        h.state.tokens[s].jsxRole = f.JSXRole.NoChildren;
        let t = 0;
        const u = function(v) {
            if ((0, f.match)(g.TokenType.jsxTagEnd))
                return !1;
            p(), h.isTypeScriptEnabled && (0, m.tsTryParseJSXTypeArgument)();
            let w = !1;
            for (; !(0, f.match)(g.TokenType.slash) && !(0, f.match)(g.TokenType.jsxTagEnd) && !h.state.error;)
                (0, f.eat)(g.TokenType.braceL) ? (w = !0, (0, j.expect)(g.TokenType.ellipsis), (0, i.parseMaybeAssign)(), _t()) : (w && h.state.end - h.state.start == 3 && h.input.charCodeAt(h.state.start) === k.charCodes.lowercaseK && h.input.charCodeAt(h.state.start + 1) === k.charCodes.lowercaseE && h.input.charCodeAt(h.state.start + 2) === k.charCodes.lowercaseY && (h.state.tokens[v].jsxRole = f.JSXRole.KeyAfterPropSpread), o(f.IdentifierRole.ObjectKey), (0, f.match)(g.TokenType.eq) && (_t(), q()));
            const x = (0, f.match)(g.TokenType.slash);
            return x && _t(), x;
        }(s);
        if (!u)
            for (_u();;)
                switch (h.state.type) {
                    case g.TokenType.jsxTagStart:
                        if (_t(), (0, f.match)(g.TokenType.slash))
                            return _t(), (0, f.match)(g.TokenType.jsxTagEnd) || p(), void(h.state.tokens[s].jsxRole !== f.JSXRole.KeyAfterPropSpread && (1 === t ? h.state.tokens[s].jsxRole = f.JSXRole.OneChild : t > 1 && (h.state.tokens[s].jsxRole = f.JSXRole.StaticChildren)));
                        t++, r(), _u();
                        break;
                    case g.TokenType.jsxText:
                        t++, _u();
                        break;
                    case g.TokenType.jsxEmptyText:
                        _u();
                        break;
                    case g.TokenType.braceL:
                        (0, f.next)(), (0, f.match)(g.TokenType.ellipsis) ? ((0, j.expect)(g.TokenType.ellipsis), (0, i.parseExpression)(), _u(), t += 2) : ((0, f.match)(g.TokenType.braceR) || (t++, (0, i.parseExpression)()), _u());
                        break;
                    default:
                        return void(0, j.unexpected)();
                }
    }

    function _s() {
        _t(), r();
    }

    function _t() {
        h.state.tokens.push(new(0, f.Token)()), (0, f.skipSpace)(), h.state.start = h.state.pos;
        const u = h.input.charCodeAt(h.state.pos);
        if (l.IS_IDENTIFIER_START[u])
            ! function() {
                let v;
                do {
                    if (h.state.pos > h.input.length)
                        return void(0, j.unexpected)('Unexpectedly reached the end of input.');
                    v = h.input.charCodeAt(++h.state.pos);
                } while (l.IS_IDENTIFIER_CHAR[v] || v === k.charCodes.dash);
                (0, f.finishToken)(g.TokenType.jsxName);
            }();
        else if (u === k.charCodes.quotationMark || u === k.charCodes.apostrophe)
            ! function(v) {
                for (h.state.pos++;;) {
                    if (h.state.pos >= h.input.length)
                        return void(0, j.unexpected)('Unterminated string constant');
                    if (h.input.charCodeAt(h.state.pos) === v) {
                        h.state.pos++;
                        break;
                    }
                    h.state.pos++;
                }
                (0, f.finishToken)(g.TokenType.string);
            }(u);
        else
            switch (++h.state.pos, u) {
                case k.charCodes.greaterThan:
                    (0, f.finishToken)(g.TokenType.jsxTagEnd);
                    break;
                case k.charCodes.lessThan:
                    (0, f.finishToken)(g.TokenType.jsxTagStart);
                    break;
                case k.charCodes.slash:
                    (0, f.finishToken)(g.TokenType.slash);
                    break;
                case k.charCodes.equalsTo:
                    (0, f.finishToken)(g.TokenType.eq);
                    break;
                case k.charCodes.leftCurlyBrace:
                    (0, f.finishToken)(g.TokenType.braceL);
                    break;
                case k.charCodes.dot:
                    (0, f.finishToken)(g.TokenType.dot);
                    break;
                case k.charCodes.colon:
                    (0, f.finishToken)(g.TokenType.colon);
                    break;
                default:
                    (0, j.unexpected)();
            }
    }

    function _u() {
        h.state.tokens.push(new(0, f.Token)()), h.state.start = h.state.pos,
            function() {
                let v = !1,
                    w = !1;
                for (;;) {
                    if (h.state.pos >= h.input.length)
                        return void(0, j.unexpected)('Unterminated JSX contents');
                    const x = h.input.charCodeAt(h.state.pos);
                    if (x === k.charCodes.lessThan || x === k.charCodes.leftCurlyBrace)
                        return h.state.pos === h.state.start ? x === k.charCodes.lessThan ? (h.state.pos++, void(0, f.finishToken)(g.TokenType.jsxTagStart)) : void(0, f.getTokenFromCode)(x) : void(v && !w ? (0, f.finishToken)(g.TokenType.jsxEmptyText) : (0, f.finishToken)(g.TokenType.jsxText));
                    x === k.charCodes.lineFeed ? v = !0 : x !== k.charCodes.space && x !== k.charCodes.carriageReturn && x !== k.charCodes.tab && (w = !0), h.state.pos++;
                }
            }();
    }
}), c.register('QSFPD', function(d, e) {
    b(d.exports, 'tsParseModifiers', function() {
        return _r;
    }), b(d.exports, 'tsParseTypeAnnotation', function() {
        return _P;
    }), b(d.exports, 'tsParseType', function() {
        return _Q;
    }), b(d.exports, 'tsTryParseTypeParameters', function() {
        return _w;
    }), b(d.exports, 'tsTryParseTypeAnnotation', function() {
        return _O;
    }), b(d.exports, 'tsParseTypeAssertion', function() {
        return _S;
    }), b(d.exports, 'tsTryParseJSXTypeArgument', function() {
        return _T;
    }), b(d.exports, 'tsParseImportEqualsDeclaration', function() {
        return _ab;
    }), b(d.exports, 'tsIsDeclarationStart', function() {
        return _ib;
    }), b(d.exports, 'tsParseFunctionBodyAndFinish', function() {
        return _jb;
    }), b(d.exports, 'tsParseSubscript', function() {
        return _kb;
    }), b(d.exports, 'tsTryParseExport', function() {
        return _lb;
    }), b(d.exports, 'tsParseImportSpecifier', function() {
        return _mb;
    }), b(d.exports, 'tsParseExportSpecifier', function() {
        return _nb;
    }), b(d.exports, 'tsTryParseExportDefaultExpression', function() {
        return _ob;
    }), b(d.exports, 'tsTryParseStatementContent', function() {
        return _pb;
    }), b(d.exports, 'tsTryParseClassMemberWithIsStatic', function() {
        return _qb;
    }), b(d.exports, 'tsParseIdentifierStatement', function() {
        return _rb;
    }), b(d.exports, 'tsParseExportDeclaration', function() {
        return _sb;
    }), b(d.exports, 'tsAfterParseClassSuper', function() {
        return _tb;
    }), b(d.exports, 'tsStartParseObjPropValue', function() {
        return _ub;
    }), b(d.exports, 'tsStartParseFunctionParams', function() {
        return _vb;
    }), b(d.exports, 'tsAfterParseVarHead', function() {
        return _wb;
    }), b(d.exports, 'tsStartParseAsyncArrowFromCallExpression', function() {
        return _xb;
    }), b(d.exports, 'tsParseMaybeAssign', function() {
        return _yb;
    }), b(d.exports, 'tsParseArrow', function() {
        return _zb;
    }), b(d.exports, 'tsParseAssignableListItemTypes', function() {
        return _Ab;
    }), b(d.exports, 'tsParseMaybeDecoratorArguments', function() {
        return _Bb;
    });
    var f, g = c('SGA4o'),
        h = c('pvm6x'),
        i = c('PmE4s'),
        j = c('REG+N'),
        k = c('Tel7O'),
        l = c('JOEM9'),
        m = c('tTSJk'),
        n = c('QP6iy'),
        o = c('ofBjI');

    function p() {
        return (0, g.match)(i.TokenType.name);
    }

    function q() {
        const r = j.state.snapshot();
        (0, g.next)();
        return !!(((0, g.match)(i.TokenType.bracketL) || (0, g.match)(i.TokenType.braceL) || (0, g.match)(i.TokenType.star) || (0, g.match)(i.TokenType.ellipsis) || (0, g.match)(i.TokenType.hash) || (0, g.match)(i.TokenType.name) || Boolean(j.state.type & i.TokenType.IS_KEYWORD) || (0, g.match)(i.TokenType.string) || (0, g.match)(i.TokenType.num) || (0, g.match)(i.TokenType.bigint) || (0, g.match)(i.TokenType.decimal)) && !(0, n.hasPrecedingLineBreak)()) || (j.state.restoreFromSnapshot(r), !1);
    }

    function _r(s) {
        for (;;) {
            if (null === _s(s))
                break;
        }
    }

    function _s(t) {
        if (!(0, g.match)(i.TokenType.name))
            return null;
        const u = j.state.contextualKeyword;
        if (-1 !== t.indexOf(u) && q()) {
            switch (u) {
                case h.ContextualKeyword._readonly:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._readonly;
                    break;
                case h.ContextualKeyword._abstract:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._abstract;
                    break;
                case h.ContextualKeyword._static:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._static;
                    break;
                case h.ContextualKeyword._public:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._public;
                    break;
                case h.ContextualKeyword._private:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._private;
                    break;
                case h.ContextualKeyword._protected:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._protected;
                    break;
                case h.ContextualKeyword._override:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._override;
                    break;
                case h.ContextualKeyword._declare:
                    j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._declare;
            }
            return u;
        }
        return null;
    }

    function t() {
        for ((0, k.parseIdentifier)();
            (0, g.eat)(i.TokenType.dot);)
            (0, k.parseIdentifier)();
    }

    function u() {
        (0, n.expect)(i.TokenType._import), (0, n.expect)(i.TokenType.parenL), (0, n.expect)(i.TokenType.string), (0, n.expect)(i.TokenType.parenR), (0, g.eat)(i.TokenType.dot) && t(), (0, g.match)(i.TokenType.lessThan) && _hb();
    }

    function v() {
        (0, g.eat)(i.TokenType._const);
        const w = (0, g.eat)(i.TokenType._in),
            x = (0, n.eatContextual)(h.ContextualKeyword._out);
        (0, g.eat)(i.TokenType._const), !w && !x || (0, g.match)(i.TokenType.name) ? (0, k.parseIdentifier)() : j.state.tokens[j.state.tokens.length - 1].type = i.TokenType.name, (0, g.eat)(i.TokenType._extends) && _Q(), (0, g.eat)(i.TokenType.eq) && _Q();
    }

    function _w() {
        (0, g.match)(i.TokenType.lessThan) && _x();
    }

    function _x() {
        const y = (0, g.pushTypeContext)(0);
        for ((0, g.match)(i.TokenType.lessThan) || (0, g.match)(i.TokenType.typeParameterStart) ? (0, g.next)() : (0, n.unexpected)(); !(0, g.eat)(i.TokenType.greaterThan) && !j.state.error;)
            v(), (0, g.eat)(i.TokenType.comma);
        (0, g.popTypeContext)(y);
    }

    function y(z) {
        const A = z === i.TokenType.arrow;
        var B;
        _w(), (0, n.expect)(i.TokenType.parenL), j.state.scopeDepth++, B = !1, (0, l.parseBindingList)(i.TokenType.parenR, B), j.state.scopeDepth--, (A || (0, g.match)(z)) && _N(z);
    }

    function z() {
        (0, g.eat)(i.TokenType.comma) || (0, n.semicolon)();
    }

    function A() {
        y(i.TokenType.colon), z();
    }

    function B() {
        if (!(0, g.match)(i.TokenType.bracketL) || ! function() {
                const C = j.state.snapshot();
                (0, g.next)();
                const D = (0, g.eat)(i.TokenType.name) && (0, g.match)(i.TokenType.colon);
                return j.state.restoreFromSnapshot(C), D;
            }())
            return !1;
        const C = (0, g.pushTypeContext)(0);
        return (0, n.expect)(i.TokenType.bracketL), (0, k.parseIdentifier)(), _P(), (0, n.expect)(i.TokenType.bracketR), _O(), z(), (0, g.popTypeContext)(C), !0;
    }

    function C(D) {
        (0, g.eat)(i.TokenType.question), D || !(0, g.match)(i.TokenType.parenL) && !(0, g.match)(i.TokenType.lessThan) ? (_O(), z()) : (y(i.TokenType.colon), z());
    }

    function D() {
        if ((0, g.match)(i.TokenType.parenL) || (0, g.match)(i.TokenType.lessThan))
            return void A();
        if ((0, g.match)(i.TokenType._new))
            return (0, g.next)(), void((0, g.match)(i.TokenType.parenL) || (0, g.match)(i.TokenType.lessThan) ? A() : C(!1));
        const E = !!_s([h.ContextualKeyword._readonly]);
        B() || (((0, n.isContextual)(h.ContextualKeyword._get) || (0, n.isContextual)(h.ContextualKeyword._set)) && q(), (0, k.parsePropertyName)(-1), C(E));
    }

    function E() {
        for ((0, n.expect)(i.TokenType.braceL); !(0, g.eat)(i.TokenType.braceR) && !j.state.error;)
            D();
    }

    function F() {
        const G = j.state.snapshot(),
            H = function() {
                if ((0, g.next)(), (0, g.eat)(i.TokenType.plus) || (0, g.eat)(i.TokenType.minus))
                    return (0, n.isContextual)(h.ContextualKeyword._readonly);
                (0, n.isContextual)(h.ContextualKeyword._readonly) && (0, g.next)();
                return !!(0, g.match)(i.TokenType.bracketL) && ((0, g.next)(), !!p() && ((0, g.next)(), (0, g.match)(i.TokenType._in)));
            }();
        return j.state.restoreFromSnapshot(G), H;
    }

    function G() {
        (0, n.expect)(i.TokenType.braceL), (0, g.match)(i.TokenType.plus) || (0, g.match)(i.TokenType.minus) ? ((0, g.next)(), (0, n.expectContextual)(h.ContextualKeyword._readonly)) : (0, n.eatContextual)(h.ContextualKeyword._readonly), (0, n.expect)(i.TokenType.bracketL), (0, k.parseIdentifier)(), (0, n.expect)(i.TokenType._in), _Q(), (0, n.eatContextual)(h.ContextualKeyword._as) && _Q(), (0, n.expect)(i.TokenType.bracketR), (0, g.match)(i.TokenType.plus) || (0, g.match)(i.TokenType.minus) ? ((0, g.next)(), (0, n.expect)(i.TokenType.question)) : (0, g.eat)(i.TokenType.question), (0, g.eat)(i.TokenType.colon) && _Q(), (0, n.semicolon)(), (0, n.expect)(i.TokenType.braceR);
    }

    function H() {
        (0, g.eat)(i.TokenType.ellipsis) ? _Q(): (_Q(), (0, g.eat)(i.TokenType.question)), (0, g.eat)(i.TokenType.colon) && _Q();
    }

    function I(J) {
        J === f.TSAbstractConstructorType && (0, n.expectContextual)(h.ContextualKeyword._abstract), J !== f.TSConstructorType && J !== f.TSAbstractConstructorType || (0, n.expect)(i.TokenType._new);
        const K = j.state.inDisallowConditionalTypesContext;
        j.state.inDisallowConditionalTypesContext = !1, y(i.TokenType.arrow), j.state.inDisallowConditionalTypesContext = K;
    }

    function J() {
        switch (j.state.type) {
            case i.TokenType.name:
                return t(), void(!(0, n.hasPrecedingLineBreak)() && (0, g.match)(i.TokenType.lessThan) && _hb());
            case i.TokenType._void:
            case i.TokenType._null:
                return void(0, g.next)();
            case i.TokenType.string:
            case i.TokenType.num:
            case i.TokenType.bigint:
            case i.TokenType.decimal:
            case i.TokenType._true:
            case i.TokenType._false:
                return void(0, k.parseLiteral)();
            case i.TokenType.minus:
                return (0, g.next)(), void(0, k.parseLiteral)();
            case i.TokenType._this:
                return (0, g.next)(), void((0, n.isContextual)(h.ContextualKeyword._is) && !(0, n.hasPrecedingLineBreak)() && ((0, g.next)(), _P()));
            case i.TokenType._typeof:
                return (0, n.expect)(i.TokenType._typeof), (0, g.match)(i.TokenType._import) ? u() : t(), void(!(0, n.hasPrecedingLineBreak)() && (0, g.match)(i.TokenType.lessThan) && _hb());
            case i.TokenType._import:
                return void u();
            case i.TokenType.braceL:
                return void(F() ? G() : E());
            case i.TokenType.bracketL:
                return void
                function() {
                    for ((0, n.expect)(i.TokenType.bracketL); !(0, g.eat)(i.TokenType.bracketR) && !j.state.error;)
                        H(), (0, g.eat)(i.TokenType.comma);
                }();
            case i.TokenType.parenL:
                return (0, n.expect)(i.TokenType.parenL), _Q(), void(0, n.expect)(i.TokenType.parenR);
            case i.TokenType.backQuote:
                return void
                function() {
                    for ((0, g.nextTemplateToken)(), (0, g.nextTemplateToken)(); !(0, g.match)(i.TokenType.backQuote) && !j.state.error;)
                        (0, n.expect)(i.TokenType.dollarBraceL), _Q(), (0, g.nextTemplateToken)(), (0, g.nextTemplateToken)();
                    (0, g.next)();
                }();
            default:
                if (j.state.type & i.TokenType.IS_KEYWORD)
                    return (0, g.next)(), void(j.state.tokens[j.state.tokens.length - 1].type = i.TokenType.name);
        }
        (0, n.unexpected)();
    }

    function K() {
        if ((0, n.isContextual)(h.ContextualKeyword._keyof) || (0, n.isContextual)(h.ContextualKeyword._unique) || (0, n.isContextual)(h.ContextualKeyword._readonly))
            (0, g.next)(), K();
        else if ((0, n.isContextual)(h.ContextualKeyword._infer))
            ! function() {
                if ((0, n.expectContextual)(h.ContextualKeyword._infer), (0, k.parseIdentifier)(), (0, g.match)(i.TokenType._extends)) {
                    const L = j.state.snapshot();
                    (0, n.expect)(i.TokenType._extends);
                    const M = j.state.inDisallowConditionalTypesContext;
                    j.state.inDisallowConditionalTypesContext = !0, _Q(), j.state.inDisallowConditionalTypesContext = M, (j.state.error || !j.state.inDisallowConditionalTypesContext && (0, g.match)(i.TokenType.question)) && j.state.restoreFromSnapshot(L);
                }
            }();
        else {
            const L = j.state.inDisallowConditionalTypesContext;
            j.state.inDisallowConditionalTypesContext = !1,
                function() {
                    for (J(); !(0, n.hasPrecedingLineBreak)() && (0, g.eat)(i.TokenType.bracketL);)
                        (0, g.eat)(i.TokenType.bracketR) || (_Q(), (0, n.expect)(i.TokenType.bracketR));
                }(), j.state.inDisallowConditionalTypesContext = L;
        }
    }

    function L() {
        if ((0, g.eat)(i.TokenType.bitwiseAND), K(), (0, g.match)(i.TokenType.bitwiseAND))
            for (;
                (0, g.eat)(i.TokenType.bitwiseAND);)
                K();
    }

    function M() {
        return !!(0, g.match)(i.TokenType.lessThan) || (0, g.match)(i.TokenType.parenL) && function() {
            const N = j.state.snapshot(),
                O = function() {
                    if ((0, g.next)(), (0, g.match)(i.TokenType.parenR) || (0, g.match)(i.TokenType.ellipsis))
                        return !0;
                    if (function() {
                            if ((0, g.match)(i.TokenType.name) || (0, g.match)(i.TokenType._this))
                                return (0, g.next)(), !0;
                            if ((0, g.match)(i.TokenType.braceL) || (0, g.match)(i.TokenType.bracketL)) {
                                let P = 1;
                                for ((0, g.next)(); P > 0 && !j.state.error;)
                                    (0, g.match)(i.TokenType.braceL) || (0, g.match)(i.TokenType.bracketL) ? P++ : ((0, g.match)(i.TokenType.braceR) || (0, g.match)(i.TokenType.bracketR)) && P--, (0, g.next)();
                                return !0;
                            }
                            return !1;
                        }()) {
                        if ((0, g.match)(i.TokenType.colon) || (0, g.match)(i.TokenType.comma) || (0, g.match)(i.TokenType.question) || (0, g.match)(i.TokenType.eq))
                            return !0;
                        if ((0, g.match)(i.TokenType.parenR) && ((0, g.next)(), (0, g.match)(i.TokenType.arrow)))
                            return !0;
                    }
                    return !1;
                }();
            return j.state.restoreFromSnapshot(N), O;
        }();
    }

    function _N(O) {
        const P = (0, g.pushTypeContext)(0);
        (0, n.expect)(O);
        (function() {
            const Q = j.state.snapshot();
            if ((0, n.isContextual)(h.ContextualKeyword._asserts))
                return (0, g.next)(), (0, n.eatContextual)(h.ContextualKeyword._is) ? (_Q(), !0) : p() || (0, g.match)(i.TokenType._this) ? ((0, g.next)(), (0, n.eatContextual)(h.ContextualKeyword._is) && _Q(), !0) : (j.state.restoreFromSnapshot(Q), !1);
            if (p() || (0, g.match)(i.TokenType._this))
                return (0, g.next)(), (0, n.isContextual)(h.ContextualKeyword._is) && !(0, n.hasPrecedingLineBreak)() ? ((0, g.next)(), _Q(), !0) : (j.state.restoreFromSnapshot(Q), !1);
            return !1;
        }() || _Q(), (0, g.popTypeContext)(P));
    }

    function _O() {
        (0, g.match)(i.TokenType.colon) && _P();
    }

    function _P() {
        const Q = (0, g.pushTypeContext)(0);
        (0, n.expect)(i.TokenType.colon), _Q(), (0, g.popTypeContext)(Q);
    }

    function _Q() {
        if (_R(), j.state.inDisallowConditionalTypesContext || (0, n.hasPrecedingLineBreak)() || !(0, g.eat)(i.TokenType._extends))
            return;
        const R = j.state.inDisallowConditionalTypesContext;
        j.state.inDisallowConditionalTypesContext = !0, _R(), j.state.inDisallowConditionalTypesContext = R, (0, n.expect)(i.TokenType.question), _Q(), (0, n.expect)(i.TokenType.colon), _Q();
    }

    function _R() {
        M() ? I(f.TSFunctionType) : (0, g.match)(i.TokenType._new) ? I(f.TSConstructorType) : (0, n.isContextual)(h.ContextualKeyword._abstract) && (0, g.lookaheadType)() === i.TokenType._new ? I(f.TSAbstractConstructorType) : function() {
            if ((0, g.eat)(i.TokenType.bitwiseOR), L(), (0, g.match)(i.TokenType.bitwiseOR))
                for (;
                    (0, g.eat)(i.TokenType.bitwiseOR);)
                    L();
        }();
    }

    function _S() {
        const T = (0, g.pushTypeContext)(1);
        _Q(), (0, n.expect)(i.TokenType.greaterThan), (0, g.popTypeContext)(T), (0, k.parseMaybeUnary)();
    }

    function _T() {
        if ((0, g.eat)(i.TokenType.jsxTagStart)) {
            j.state.tokens[j.state.tokens.length - 1].type = i.TokenType.typeParameterStart;
            const U = (0, g.pushTypeContext)(1);
            for (; !(0, g.match)(i.TokenType.greaterThan) && !j.state.error;)
                _Q(), (0, g.eat)(i.TokenType.comma);
            (0, o.nextJSXTagToken)(), (0, g.popTypeContext)(U);
        }
    }

    function U() {
        for (; !(0, g.match)(i.TokenType.braceL) && !j.state.error;)
            _V(), (0, g.eat)(i.TokenType.comma);
    }

    function _V() {
        t(), (0, g.match)(i.TokenType.lessThan) && _hb();
    }

    function W() {
        if ((0, g.match)(i.TokenType.string) ? (0, k.parseLiteral)() : (0, k.parseIdentifier)(), (0, g.eat)(i.TokenType.eq)) {
            const X = j.state.tokens.length - 1;
            (0, k.parseMaybeAssign)(), j.state.tokens[X].rhsEndIndex = j.state.tokens.length;
        }
    }

    function X() {
        for ((0, l.parseBindingIdentifier)(!1), (0, n.expect)(i.TokenType.braceL); !(0, g.eat)(i.TokenType.braceR) && !j.state.error;)
            W(), (0, g.eat)(i.TokenType.comma);
    }

    function Y() {
        (0, n.expect)(i.TokenType.braceL), (0, m.parseBlockBody)(i.TokenType.braceR);
    }

    function Z() {
        (0, l.parseBindingIdentifier)(!1), (0, g.eat)(i.TokenType.dot) ? Z(): Y();
    }

    function $() {
        (0, n.isContextual)(h.ContextualKeyword._global) ? (0, k.parseIdentifier)() : (0, g.match)(i.TokenType.string) ? (0, k.parseExprAtom)() : (0, n.unexpected)(), (0, g.match)(i.TokenType.braceL) ? Y(): (0, n.semicolon)();
    }

    function _ab() {
        (0, l.parseImportedIdentifier)(), (0, n.expect)(i.TokenType.eq), (0, n.isContextual)(h.ContextualKeyword._require) && (0, g.lookaheadType)() === i.TokenType.parenL ? ((0, n.expectContextual)(h.ContextualKeyword._require), (0, n.expect)(i.TokenType.parenL), (0, g.match)(i.TokenType.string) || (0, n.unexpected)(), (0, k.parseLiteral)(), (0, n.expect)(i.TokenType.parenR)) : t(), (0, n.semicolon)();
    }

    function bb() {
        return _db(j.state.contextualKeyword, !0);
    }

    function cb(db) {
        switch (db) {
            case h.ContextualKeyword._declare: {
                const eb = j.state.tokens.length - 1,
                    fb = function() {
                        if ((0, n.isLineTerminator)())
                            return !1;
                        switch (j.state.type) {
                            case i.TokenType._function: {
                                const gb = (0, g.pushTypeContext)(1);
                                (0, g.next)();
                                const hb = j.state.start;
                                return (0, m.parseFunction)(hb, !0), (0, g.popTypeContext)(gb), !0;
                            }
                            case i.TokenType._class: {
                                const gb = (0, g.pushTypeContext)(1);
                                return (0, m.parseClass)(!0, !1), (0, g.popTypeContext)(gb), !0;
                            }
                            case i.TokenType._const:
                                if ((0, g.match)(i.TokenType._const) && (0, n.isLookaheadContextual)(h.ContextualKeyword._enum)) {
                                    const gb = (0, g.pushTypeContext)(1);
                                    return (0, n.expect)(i.TokenType._const), (0, n.expectContextual)(h.ContextualKeyword._enum), j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._enum, X(), (0, g.popTypeContext)(gb), !0;
                                }
                            case i.TokenType._var:
                            case i.TokenType._let: {
                                const gb = (0, g.pushTypeContext)(1);
                                return (0, m.parseVarStatement)(j.state.type !== i.TokenType._var), (0, g.popTypeContext)(gb), !0;
                            }
                            case i.TokenType.name: {
                                const gb = (0, g.pushTypeContext)(1),
                                    hb = j.state.contextualKeyword;
                                let ib = !1;
                                return hb === h.ContextualKeyword._global ? ($(), ib = !0) : ib = _db(hb, !0), (0, g.popTypeContext)(gb), ib;
                            }
                            default:
                                return !1;
                        }
                    }();
                if (fb)
                    return j.state.tokens[eb].type = i.TokenType._declare, !0;
                break;
            }
            case h.ContextualKeyword._global:
                if ((0, g.match)(i.TokenType.braceL))
                    return Y(), !0;
                break;
            default:
                return _db(db, !1);
        }
        return !1;
    }

    function _db(eb, fb) {
        switch (eb) {
            case h.ContextualKeyword._abstract:
                if (_eb(fb) && (0, g.match)(i.TokenType._class))
                    return j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._abstract, (0, m.parseClass)(!0, !1), !0;
                break;
            case h.ContextualKeyword._enum:
                if (_eb(fb) && (0, g.match)(i.TokenType.name))
                    return j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._enum, X(), !0;
                break;
            case h.ContextualKeyword._interface:
                if (_eb(fb) && (0, g.match)(i.TokenType.name)) {
                    const gb = (0, g.pushTypeContext)(fb ? 2 : 1);
                    return (0, l.parseBindingIdentifier)(!1), _w(), (0, g.eat)(i.TokenType._extends) && U(), E(), (0, g.popTypeContext)(gb), !0;
                }
                break;
            case h.ContextualKeyword._module:
                if (_eb(fb)) {
                    if ((0, g.match)(i.TokenType.string)) {
                        const gb = (0, g.pushTypeContext)(fb ? 2 : 1);
                        return $(), (0, g.popTypeContext)(gb), !0;
                    }
                    if ((0, g.match)(i.TokenType.name)) {
                        const gb = (0, g.pushTypeContext)(fb ? 2 : 1);
                        return Z(), (0, g.popTypeContext)(gb), !0;
                    }
                }
                break;
            case h.ContextualKeyword._namespace:
                if (_eb(fb) && (0, g.match)(i.TokenType.name)) {
                    const gb = (0, g.pushTypeContext)(fb ? 2 : 1);
                    return Z(), (0, g.popTypeContext)(gb), !0;
                }
                break;
            case h.ContextualKeyword._type:
                if (_eb(fb) && (0, g.match)(i.TokenType.name)) {
                    const gb = (0, g.pushTypeContext)(fb ? 2 : 1);
                    return (0, l.parseBindingIdentifier)(!1), _w(), (0, n.expect)(i.TokenType.eq), _Q(), (0, n.semicolon)(), (0, g.popTypeContext)(gb), !0;
                }
        }
        return !1;
    }

    function _eb(fb) {
        return fb ? ((0, g.next)(), !0) : !(0, n.isLineTerminator)();
    }

    function fb() {
        const gb = j.state.snapshot();
        return _x(), (0, m.parseFunctionParams)(), (0, g.match)(i.TokenType.colon) && _N(i.TokenType.colon), (0, n.expect)(i.TokenType.arrow), j.state.error ? (j.state.restoreFromSnapshot(gb), !1) : ((0, k.parseFunctionBody)(!0), !0);
    }

    function gb() {
        j.state.type === i.TokenType.bitShiftL && (j.state.pos -= 1, (0, g.finishToken)(i.TokenType.lessThan)), _hb();
    }

    function _hb() {
        const ib = (0, g.pushTypeContext)(0);
        for ((0, n.expect)(i.TokenType.lessThan); !(0, g.match)(i.TokenType.greaterThan) && !j.state.error;)
            _Q(), (0, g.eat)(i.TokenType.comma);
        ib ? ((0, n.expect)(i.TokenType.greaterThan), (0, g.popTypeContext)(ib)) : ((0, g.popTypeContext)(ib), (0, g.rescan_gt)(), (0, n.expect)(i.TokenType.greaterThan), j.state.tokens[j.state.tokens.length - 1].isType = !0);
    }

    function _ib() {
        if ((0, g.match)(i.TokenType.name))
            switch (j.state.contextualKeyword) {
                case h.ContextualKeyword._abstract:
                case h.ContextualKeyword._declare:
                case h.ContextualKeyword._enum:
                case h.ContextualKeyword._interface:
                case h.ContextualKeyword._module:
                case h.ContextualKeyword._namespace:
                case h.ContextualKeyword._type:
                    return !0;
            }
        return !1;
    }

    function _jb(kb, lb) {
        if ((0, g.match)(i.TokenType.colon) && _N(i.TokenType.colon), (0, g.match)(i.TokenType.braceL) || !(0, n.isLineTerminator)())
            (0, k.parseFunctionBody)(!1, lb);
        else {
            let mb = j.state.tokens.length - 1;
            for (; mb >= 0 && (j.state.tokens[mb].start >= kb || j.state.tokens[mb].type === i.TokenType._default || j.state.tokens[mb].type === i.TokenType._export);)
                j.state.tokens[mb].isType = !0, mb--;
        }
    }

    function _kb(lb, mb, nb) {
        if ((0, n.hasPrecedingLineBreak)() || !(0, g.eat)(i.TokenType.bang)) {
            if ((0, g.match)(i.TokenType.lessThan) || (0, g.match)(i.TokenType.bitShiftL)) {
                const ob = j.state.snapshot();
                if (!mb && (0, k.atPossibleAsync)()) {
                    if (fb())
                        return;
                }
                if (gb(), !mb && (0, g.eat)(i.TokenType.parenL) ? (j.state.tokens[j.state.tokens.length - 1].subscriptStartIndex = lb, (0, k.parseCallExpressionArguments)()) : (0, g.match)(i.TokenType.backQuote) ? (0, k.parseTemplate)() : (j.state.type === i.TokenType.greaterThan || j.state.type !== i.TokenType.parenL && Boolean(j.state.type & i.TokenType.IS_EXPRESSION_START) && !(0, n.hasPrecedingLineBreak)()) && (0, n.unexpected)(), !j.state.error)
                    return;
                j.state.restoreFromSnapshot(ob);
            } else
                !mb && (0, g.match)(i.TokenType.questionDot) && (0, g.lookaheadType)() === i.TokenType.lessThan && ((0, g.next)(), j.state.tokens[lb].isOptionalChainStart = !0, j.state.tokens[j.state.tokens.length - 1].subscriptStartIndex = lb, _hb(), (0, n.expect)(i.TokenType.parenL), (0, k.parseCallExpressionArguments)());
            (0, k.baseParseSubscript)(lb, mb, nb);
        } else
            j.state.tokens[j.state.tokens.length - 1].type = i.TokenType.nonNullAssertion;
    }

    function _lb() {
        if ((0, g.eat)(i.TokenType._import))
            return (0, n.isContextual)(h.ContextualKeyword._type) && (0, g.lookaheadType)() !== i.TokenType.eq && (0, n.expectContextual)(h.ContextualKeyword._type), _ab(), !0;
        if ((0, g.eat)(i.TokenType.eq))
            return (0, k.parseExpression)(), (0, n.semicolon)(), !0;
        if ((0, n.eatContextual)(h.ContextualKeyword._as))
            return (0, n.expectContextual)(h.ContextualKeyword._namespace), (0, k.parseIdentifier)(), (0, n.semicolon)(), !0;
        if ((0, n.isContextual)(h.ContextualKeyword._type)) {
            const mb = (0, g.lookaheadType)();
            mb !== i.TokenType.braceL && mb !== i.TokenType.star || (0, g.next)();
        }
        return !1;
    }

    function _mb() {
        if ((0, k.parseIdentifier)(), (0, g.match)(i.TokenType.comma) || (0, g.match)(i.TokenType.braceR))
            j.state.tokens[j.state.tokens.length - 1].identifierRole = g.IdentifierRole.ImportDeclaration;
        else {
            if ((0, k.parseIdentifier)(), (0, g.match)(i.TokenType.comma) || (0, g.match)(i.TokenType.braceR))
                return j.state.tokens[j.state.tokens.length - 1].identifierRole = g.IdentifierRole.ImportDeclaration, j.state.tokens[j.state.tokens.length - 2].isType = !0, void(j.state.tokens[j.state.tokens.length - 1].isType = !0);
            if ((0, k.parseIdentifier)(), (0, g.match)(i.TokenType.comma) || (0, g.match)(i.TokenType.braceR))
                return j.state.tokens[j.state.tokens.length - 3].identifierRole = g.IdentifierRole.ImportAccess, void(j.state.tokens[j.state.tokens.length - 1].identifierRole = g.IdentifierRole.ImportDeclaration);
            (0, k.parseIdentifier)(), j.state.tokens[j.state.tokens.length - 3].identifierRole = g.IdentifierRole.ImportAccess, j.state.tokens[j.state.tokens.length - 1].identifierRole = g.IdentifierRole.ImportDeclaration, j.state.tokens[j.state.tokens.length - 4].isType = !0, j.state.tokens[j.state.tokens.length - 3].isType = !0, j.state.tokens[j.state.tokens.length - 2].isType = !0, j.state.tokens[j.state.tokens.length - 1].isType = !0;
        }
    }

    function _nb() {
        if ((0, k.parseIdentifier)(), (0, g.match)(i.TokenType.comma) || (0, g.match)(i.TokenType.braceR))
            j.state.tokens[j.state.tokens.length - 1].identifierRole = g.IdentifierRole.ExportAccess;
        else {
            if ((0, k.parseIdentifier)(), (0, g.match)(i.TokenType.comma) || (0, g.match)(i.TokenType.braceR))
                return j.state.tokens[j.state.tokens.length - 1].identifierRole = g.IdentifierRole.ExportAccess, j.state.tokens[j.state.tokens.length - 2].isType = !0, void(j.state.tokens[j.state.tokens.length - 1].isType = !0);
            (0, k.parseIdentifier)(), (0, g.match)(i.TokenType.comma) || (0, g.match)(i.TokenType.braceR) ? j.state.tokens[j.state.tokens.length - 3].identifierRole = g.IdentifierRole.ExportAccess: ((0, k.parseIdentifier)(), j.state.tokens[j.state.tokens.length - 3].identifierRole = g.IdentifierRole.ExportAccess, j.state.tokens[j.state.tokens.length - 4].isType = !0, j.state.tokens[j.state.tokens.length - 3].isType = !0, j.state.tokens[j.state.tokens.length - 2].isType = !0, j.state.tokens[j.state.tokens.length - 1].isType = !0);
        }
    }

    function _ob() {
        if ((0, n.isContextual)(h.ContextualKeyword._abstract) && (0, g.lookaheadType)() === i.TokenType._class)
            return j.state.type = i.TokenType._abstract, (0, g.next)(), (0, m.parseClass)(!0, !0), !0;
        if ((0, n.isContextual)(h.ContextualKeyword._interface)) {
            const pb = (0, g.pushTypeContext)(2);
            return _db(h.ContextualKeyword._interface, !0), (0, g.popTypeContext)(pb), !0;
        }
        return !1;
    }

    function _pb() {
        if (j.state.type === i.TokenType._const) {
            const qb = (0, g.lookaheadTypeAndKeyword)();
            if (qb.type === i.TokenType.name && qb.contextualKeyword === h.ContextualKeyword._enum)
                return (0, n.expect)(i.TokenType._const), (0, n.expectContextual)(h.ContextualKeyword._enum), j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._enum, X(), !0;
        }
        return !1;
    }

    function _qb(rb) {
        const sb = j.state.tokens.length;
        _r([
            h.ContextualKeyword._abstract,
            h.ContextualKeyword._readonly,
            h.ContextualKeyword._declare,
            h.ContextualKeyword._static,
            h.ContextualKeyword._override
        ]);
        const tb = j.state.tokens.length;
        if (B()) {
            for (let ub = rb ? sb - 1 : sb; ub < tb; ub++)
                j.state.tokens[ub].isType = !0;
            return !0;
        }
        return !1;
    }

    function _rb(sb) {
        cb(sb) || (0, n.semicolon)();
    }

    function _sb() {
        const tb = (0, n.eatContextual)(h.ContextualKeyword._declare);
        tb && (j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._declare);
        let ub = !1;
        if ((0, g.match)(i.TokenType.name))
            if (tb) {
                const vb = (0, g.pushTypeContext)(2);
                ub = bb(), (0, g.popTypeContext)(vb);
            } else
                ub = bb();
        if (!ub)
            if (tb) {
                const vb = (0, g.pushTypeContext)(2);
                (0, m.parseStatement)(!0), (0, g.popTypeContext)(vb);
            } else
                (0, m.parseStatement)(!0);
    }

    function _tb(ub) {
        if (ub && ((0, g.match)(i.TokenType.lessThan) || (0, g.match)(i.TokenType.bitShiftL)) && gb(), (0, n.eatContextual)(h.ContextualKeyword._implements)) {
            j.state.tokens[j.state.tokens.length - 1].type = i.TokenType._implements;
            const vb = (0, g.pushTypeContext)(1);
            U(), (0, g.popTypeContext)(vb);
        }
    }

    function _ub() {
        _w();
    }

    function _vb() {
        _w();
    }

    function _wb() {
        const xb = (0, g.pushTypeContext)(0);
        (0, n.hasPrecedingLineBreak)() || (0, g.eat)(i.TokenType.bang), _O(), (0, g.popTypeContext)(xb);
    }

    function _xb() {
        (0, g.match)(i.TokenType.colon) && _P();
    }

    function _yb(zb, Ab) {
        return j.isJSXEnabled ? function(Bb, Cb) {
            if (!(0, g.match)(i.TokenType.lessThan))
                return (0, k.baseParseMaybeAssign)(Bb, Cb);
            const Db = j.state.snapshot();
            let Eb = (0, k.baseParseMaybeAssign)(Bb, Cb);
            if (!j.state.error)
                return Eb;
            j.state.restoreFromSnapshot(Db);
            j.state.type = i.TokenType.typeParameterStart, _x(), Eb = (0, k.baseParseMaybeAssign)(Bb, Cb), Eb || (0, n.unexpected)();
            return Eb;
        }(zb, Ab) : function(Bb, Cb) {
            if (!(0, g.match)(i.TokenType.lessThan))
                return (0, k.baseParseMaybeAssign)(Bb, Cb);
            const Db = j.state.snapshot();
            _x();
            const Eb = (0, k.baseParseMaybeAssign)(Bb, Cb);
            Eb || (0, n.unexpected)();
            if (!j.state.error)
                return Eb;
            j.state.restoreFromSnapshot(Db);
            return (0, k.baseParseMaybeAssign)(Bb, Cb);
        }(zb, Ab);
    }

    function _zb() {
        if ((0, g.match)(i.TokenType.colon)) {
            const Ab = j.state.snapshot();
            _N(i.TokenType.colon), (0, n.canInsertSemicolon)() && (0, n.unexpected)(), (0, g.match)(i.TokenType.arrow) || (0, n.unexpected)(), j.state.error && j.state.restoreFromSnapshot(Ab);
        }
        return (0, g.eat)(i.TokenType.arrow);
    }

    function _Ab() {
        const Bb = (0, g.pushTypeContext)(0);
        (0, g.eat)(i.TokenType.question), _O(), (0, g.popTypeContext)(Bb);
    }

    function _Bb() {
        ((0, g.match)(i.TokenType.lessThan) || (0, g.match)(i.TokenType.bitShiftL)) && gb(), (0, m.baseParseMaybeDecoratorArguments)();
    }! function(Cb) {
        Cb[Cb.TSFunctionType = 0] = 'TSFunctionType';
        Cb[Cb.TSConstructorType = 1] = 'TSConstructorType';
        Cb[Cb.TSAbstractConstructorType = 2] = 'TSAbstractConstructorType';
    }(f || (f = {}));
}), c.register('JOEM9', function(d, e) {
    b(d.exports, 'parseSpread', function() {
        return _n;
    }), b(d.exports, 'parseRest', function() {
        return _o;
    }), b(d.exports, 'parseBindingAtom', function() {
        return _s;
    }), b(d.exports, 'parseBindingIdentifier', function() {
        return _p;
    }), b(d.exports, 'markPriorBindingIdentifier', function() {
        return _r;
    }), b(d.exports, 'parseImportedIdentifier', function() {
        return _q;
    }), b(d.exports, 'parseBindingList', function() {
        return _t;
    }), b(d.exports, 'parseMaybeDefault', function() {
        return _w;
    });
    var f = c('4XH5N'),
        g = c('QSFPD'),
        h = c('SGA4o'),
        i = c('pvm6x'),
        j = c('PmE4s'),
        k = c('REG+N'),
        l = c('Tel7O'),
        m = c('QP6iy');

    function _n() {
        (0, h.next)(), (0, l.parseMaybeAssign)(!1);
    }

    function _o(p) {
        (0, h.next)(), _s(p);
    }

    function _p(q) {
        (0, l.parseIdentifier)(), _r(q);
    }

    function _q() {
        (0, l.parseIdentifier)(), k.state.tokens[k.state.tokens.length - 1].identifierRole = h.IdentifierRole.ImportDeclaration;
    }

    function _r(s) {
        let t;
        t = 0 === k.state.scopeDepth ? h.IdentifierRole.TopLevelDeclaration : s ? h.IdentifierRole.BlockScopedDeclaration : h.IdentifierRole.FunctionScopedDeclaration, k.state.tokens[k.state.tokens.length - 1].identifierRole = t;
    }

    function _s(t) {
        switch (k.state.type) {
            case j.TokenType._this: {
                const u = (0, h.pushTypeContext)(0);
                return (0, h.next)(), void(0, h.popTypeContext)(u);
            }
            case j.TokenType._yield:
            case j.TokenType.name:
                return k.state.type = j.TokenType.name, void _p(t);
            case j.TokenType.bracketL:
                return (0, h.next)(), void _t(j.TokenType.bracketR, t, !0);
            case j.TokenType.braceL:
                return void(0, l.parseObj)(!0, t);
            default:
                (0, m.unexpected)();
        }
    }

    function _t(u, v, w = !1, x = !1, y = 0) {
        let z = !0,
            A = !1;
        const B = k.state.tokens.length;
        for (; !(0, h.eat)(u) && !k.state.error;)
            if (z ? z = !1 : ((0, m.expect)(j.TokenType.comma), k.state.tokens[k.state.tokens.length - 1].contextId = y, !A && k.state.tokens[B].isType && (k.state.tokens[k.state.tokens.length - 1].isType = !0, A = !0)), w && (0, h.match)(j.TokenType.comma));
            else {
                if ((0, h.eat)(u))
                    break;
                if ((0, h.match)(j.TokenType.ellipsis)) {
                    _o(v), _v(), (0, h.eat)(j.TokenType.comma), (0, m.expect)(u);
                    break;
                }
                _u(x, v);
            }
    }

    function _u(v, w) {
        v && (0, g.tsParseModifiers)([
            i.ContextualKeyword._public,
            i.ContextualKeyword._protected,
            i.ContextualKeyword._private,
            i.ContextualKeyword._readonly,
            i.ContextualKeyword._override
        ]), _w(w), _v(), _w(w, !0);
    }

    function _v() {
        k.isFlowEnabled ? (0, f.flowParseAssignableListItemTypes)() : k.isTypeScriptEnabled && (0, g.tsParseAssignableListItemTypes)();
    }

    function _w(x, y = !1) {
        if (y || _s(x), !(0, h.eat)(j.TokenType.eq))
            return;
        const z = k.state.tokens.length - 1;
        (0, l.parseMaybeAssign)(), k.state.tokens[z].rhsEndIndex = k.state.tokens.length;
    }
}), c.register('ECtIZ', function(d, e) {
    b(d.exports, 'typedParseConditional', function() {
        return _l;
    }), b(d.exports, 'typedParseParenItem', function() {
        return _m;
    });
    var f = c('SGA4o'),
        g = c('PmE4s'),
        h = c('REG+N'),
        i = c('Tel7O'),
        j = c('4XH5N'),
        k = c('QSFPD');

    function _l(m) {
        if ((0, f.match)(g.TokenType.question)) {
            const n = (0, f.lookaheadType)();
            if (n === g.TokenType.colon || n === g.TokenType.comma || n === g.TokenType.parenR)
                return;
        }
        (0, i.baseParseConditional)(m);
    }

    function _m() {
        (0, f.eatTypeToken)(g.TokenType.question), (0, f.match)(g.TokenType.colon) && (h.isTypeScriptEnabled ? (0, k.tsParseTypeAnnotation)() : h.isFlowEnabled && (0, j.flowParseTypeAnnotation)());
    }
}), c.register('TyHnW', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('PmE4s'),
        g = c('zOW/n');
    class _h {
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
        restoreToSnapshot(i) {
            this.resultCode = i.resultCode, this.tokenIndex = i.tokenIndex;
        }
        dangerouslyGetAndRemoveCodeSinceSnapshot(i) {
            const j = this.resultCode.slice(i.resultCode.length);
            return this.resultCode = i.resultCode, j;
        }
        reset() {
            this.resultCode = '', this.resultMappings = new Array(this.tokens.length), this.tokenIndex = 0;
        }
        matchesContextualAtIndex(i, j) {
            return this.matches1AtIndex(i, f.TokenType.name) && this.tokens[i].contextualKeyword === j;
        }
        identifierNameAtIndex(i) {
            return this.identifierNameForToken(this.tokens[i]);
        }
        identifierNameAtRelativeIndex(i) {
            return this.identifierNameForToken(this.tokenAtRelativeIndex(i));
        }
        identifierName() {
            return this.identifierNameForToken(this.currentToken());
        }
        identifierNameForToken(i) {
            return this.code.slice(i.start, i.end);
        }
        rawCodeForToken(i) {
            return this.code.slice(i.start, i.end);
        }
        stringValueAtIndex(i) {
            return this.stringValueForToken(this.tokens[i]);
        }
        stringValue() {
            return this.stringValueForToken(this.currentToken());
        }
        stringValueForToken(i) {
            return this.code.slice(i.start + 1, i.end - 1);
        }
        matches1AtIndex(i, j) {
            return this.tokens[i].type === j;
        }
        matches2AtIndex(i, j, k) {
            return this.tokens[i].type === j && this.tokens[i + 1].type === k;
        }
        matches3AtIndex(i, j, k, l) {
            return this.tokens[i].type === j && this.tokens[i + 1].type === k && this.tokens[i + 2].type === l;
        }
        matches1(i) {
            return this.tokens[this.tokenIndex].type === i;
        }
        matches2(i, j) {
            return this.tokens[this.tokenIndex].type === i && this.tokens[this.tokenIndex + 1].type === j;
        }
        matches3(i, j, k) {
            return this.tokens[this.tokenIndex].type === i && this.tokens[this.tokenIndex + 1].type === j && this.tokens[this.tokenIndex + 2].type === k;
        }
        matches4(i, j, k, l) {
            return this.tokens[this.tokenIndex].type === i && this.tokens[this.tokenIndex + 1].type === j && this.tokens[this.tokenIndex + 2].type === k && this.tokens[this.tokenIndex + 3].type === l;
        }
        matches5(i, j, k, l, m) {
            return this.tokens[this.tokenIndex].type === i && this.tokens[this.tokenIndex + 1].type === j && this.tokens[this.tokenIndex + 2].type === k && this.tokens[this.tokenIndex + 3].type === l && this.tokens[this.tokenIndex + 4].type === m;
        }
        matchesContextual(i) {
            return this.matchesContextualAtIndex(this.tokenIndex, i);
        }
        matchesContextIdAndLabel(i, j) {
            return this.matches1(i) && this.currentToken().contextId === j;
        }
        previousWhitespaceAndComments() {
            let i = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
            return this.isFlowEnabled && (i = i.replace(/@flow/g, '')), i;
        }
        replaceToken(i) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += i, this.appendTokenSuffix(), this.tokenIndex++;
        }
        replaceTokenTrimmingLeftWhitespace(i) {
            this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ''), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += i, this.appendTokenSuffix(), this.tokenIndex++;
        }
        removeInitialToken() {
            this.replaceToken('');
        }
        removeToken() {
            this.replaceTokenTrimmingLeftWhitespace('');
        }
        removeBalancedCode() {
            let i = 0;
            for (; !this.isAtEnd();) {
                if (this.matches1(f.TokenType.braceL))
                    i++;
                else if (this.matches1(f.TokenType.braceR)) {
                    if (0 === i)
                        return;
                    i--;
                }
                this.removeToken();
            }
        }
        copyExpectedToken(i) {
            if (this.tokens[this.tokenIndex].type !== i)
                throw new Error(`Expected token ${ i }`);
            this.copyToken();
        }
        copyToken() {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
        }
        copyTokenWithPrefix(i) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += i, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
        }
        appendTokenPrefix() {
            const i = this.currentToken();
            if ((i.numNullishCoalesceStarts || i.isOptionalChainStart) && (i.isAsyncOperation = (0, g.default)(this)), !this.disableESTransforms) {
                if (i.numNullishCoalesceStarts)
                    for (let j = 0; j < i.numNullishCoalesceStarts; j++)
                        i.isAsyncOperation ? (this.resultCode += 'await ', this.resultCode += this.helperManager.getHelperName('asyncNullishCoalesce')) : this.resultCode += this.helperManager.getHelperName('nullishCoalesce'), this.resultCode += '(';
                i.isOptionalChainStart && (i.isAsyncOperation && (this.resultCode += 'await '), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === f.TokenType._delete ? i.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName('asyncOptionalChainDelete') : this.resultCode += this.helperManager.getHelperName('optionalChainDelete') : i.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName('asyncOptionalChain') : this.resultCode += this.helperManager.getHelperName('optionalChain'), this.resultCode += '([');
            }
        }
        appendTokenSuffix() {
            const i = this.currentToken();
            if (i.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += '])'), i.numNullishCoalesceEnds && !this.disableESTransforms)
                for (let j = 0; j < i.numNullishCoalesceEnds; j++)
                    this.resultCode += '))';
        }
        appendCode(i) {
            this.resultCode += i;
        }
        currentToken() {
            return this.tokens[this.tokenIndex];
        }
        currentTokenCode() {
            const i = this.currentToken();
            return this.code.slice(i.start, i.end);
        }
        tokenAtRelativeIndex(i) {
            return this.tokens[this.tokenIndex + i];
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
        constructor(i, j, k, l, m) {
            this.code = i, this.tokens = j, this.isFlowEnabled = k, this.disableESTransforms = l, this.helperManager = m, _h.prototype.__init.call(this), _h.prototype.__init2.call(this), _h.prototype.__init3.call(this);
        }
    }
}), c.register('zOW/n', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('pvm6x');

    function _g(h) {
        let i = h.currentIndex(),
            j = 0;
        const k = h.currentToken();
        do {
            const l = h.tokens[i];
            if (l.isOptionalChainStart && j++, l.isOptionalChainEnd && j--, j += l.numNullishCoalesceStarts, j -= l.numNullishCoalesceEnds, l.contextualKeyword === f.ContextualKeyword._await && null == l.identifierRole && l.scopeDepth === k.scopeDepth)
                return !0;
            i += 1;
        } while (j > 0 && i < h.tokens.length);
        return !1;
    }
}), c.register('33+cu', function(d, e) {
    b(d.exports, 'default', function() {
        return _t;
    });
    var f = c('pvm6x'),
        g = c('PmE4s'),
        h = c('CeV5J'),
        i = c('EDYKJ'),
        j = c('21rLg'),
        k = c('wPw3V'),
        l = c('Mqzaq'),
        m = c('gcxKj'),
        n = c('vfTeu'),
        o = c('dTsUy'),
        p = c('CwIlN'),
        q = c('l7IuJ'),
        r = c('Dr7C0'),
        s = c('ylv8m');
    class _t {
        __init() {
            this.transformers = [];
        }
        __init2() {
            this.generatedVariables = [];
        }
        transform() {
            this.tokens.reset(), this.processBalancedCode();
            let u = this.isImportsTransformEnabled ? '"use strict";' : '';
            for (const v of this.transformers)
                u += v.getPrefixCode();
            u += this.helperManager.emitHelpers(), u += this.generatedVariables.map(u => ` var ${ u };`).join('');
            for (const w of this.transformers)
                u += w.getHoistedCode();
            let x = '';
            for (const y of this.transformers)
                x += y.getSuffixCode();
            const z = this.tokens.finish();
            let {
                code: A
            } = z;
            if (A.startsWith('#!')) {
                let B = A.indexOf('\n');
                return -1 === B && (B = A.length, A += '\n'), {
                    code: A.slice(0, B + 1) + y + A.slice(B + 1) + x,
                    mappings: this.shiftMappings(z.mappings, y.length)
                };
            }
            return {
                code: y + A + x,
                mappings: this.shiftMappings(z.mappings, y.length)
            };
        }
        processBalancedCode() {
            let u = 0,
                v = 0;
            for (; !this.tokens.isAtEnd();) {
                if (this.tokens.matches1(g.TokenType.braceL) || this.tokens.matches1(g.TokenType.dollarBraceL))
                    u++;
                else if (this.tokens.matches1(g.TokenType.braceR)) {
                    if (0 === u)
                        return;
                    u--;
                }
                if (this.tokens.matches1(g.TokenType.parenL))
                    v++;
                else if (this.tokens.matches1(g.TokenType.parenR)) {
                    if (0 === v)
                        return;
                    v--;
                }
                this.processToken();
            }
        }
        processToken() {
            if (this.tokens.matches1(g.TokenType._class))
                this.processClass();
            else {
                for (const u of this.transformers) {
                    if (u.process())
                        return;
                }
                this.tokens.copyToken();
            }
        }
        processNamedClass() {
            if (!this.tokens.matches2(g.TokenType._class, g.TokenType.name))
                throw new Error('Expected identifier for exported class name.');
            const u = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.processClass(), u;
        }
        processClass() {
            const u = (0, h.default)(this, this.tokens, this.nameManager, this.disableESTransforms),
                v = (u.headerInfo.isExpression || !u.headerInfo.className) && u.staticInitializerNames.length + u.instanceInitializerNames.length > 0;
            let w = u.headerInfo.className;
            v && (w = this.nameManager.claimFreeName('_class'), this.generatedVariables.push(w), this.tokens.appendCode(` (${ w } =`));
            const x = this.tokens.currentToken().contextId;
            if (null == x)
                throw new Error('Expected class to have a context ID.');
            for (this.tokens.copyExpectedToken(g.TokenType._class); !this.tokens.matchesContextIdAndLabel(g.TokenType.braceL, x);)
                this.processToken();
            this.processClassBody(u, w);
            const y = u.staticInitializerNames.map(u => `${ w }.${ u }()`);
            v ? this.tokens.appendCode(`, ${ y.map(u => `${ u }, `).join('') }${ w })`) : u.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${ y.map(u => `${ u };`).join(' ') }`);
        }
        processClassBody(u, v) {
            const {
                headerInfo: w,
                constructorInsertPos: x,
                constructorInitializerStatements: y,
                fields: z,
                instanceInitializerNames: A,
                rangesToRemove: B
            } = u;
            let C = 0,
                D = 0;
            const E = this.tokens.currentToken().contextId;
            if (null == E)
                throw new Error('Expected non-null context ID on class.');
            this.tokens.copyExpectedToken(g.TokenType.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode('__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}');
            const F = y.length + A.length > 0;
            if (null === x && F) {
                const G = this.makeConstructorInitCode(y, A, v);
                if (w.hasSuperclass) {
                    const H = this.nameManager.claimFreeName('args');
                    this.tokens.appendCode(`constructor(...${ H }) { super(...${ H }); ${ G }; }`);
                } else
                    this.tokens.appendCode(`constructor() { ${ G }; }`);
            }
            for (; !this.tokens.matchesContextIdAndLabel(g.TokenType.braceR, E);)
                if (C < z.length && this.tokens.currentIndex() === z[C].start) {
                    let G = !1;
                    for (this.tokens.matches1(g.TokenType.bracketL) ? this.tokens.copyTokenWithPrefix(`${ z[C].initializerName }() {this`) : this.tokens.matches1(g.TokenType.string) || this.tokens.matches1(g.TokenType.num) ? (this.tokens.copyTokenWithPrefix(`${ z[C].initializerName }() {this[`), G = !0) : this.tokens.copyTokenWithPrefix(`${ z[C].initializerName }() {this.`); this.tokens.currentIndex() < z[C].end;)
                        G && this.tokens.currentIndex() === z[C].equalsIndex && this.tokens.appendCode(']'), this.processToken();
                    this.tokens.appendCode('}'), C++;
                } else if (D < B.length && this.tokens.currentIndex() >= B[D].start) {
                for (this.tokens.currentIndex() < B[D].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < B[D].end;)
                    this.tokens.removeToken();
                D++;
            } else
                this.tokens.currentIndex() === x ? (this.tokens.copyToken(), F && this.tokens.appendCode(`;${ this.makeConstructorInitCode(y, A, v) };`), this.processToken()) : this.processToken();
            this.tokens.copyExpectedToken(g.TokenType.braceR);
        }
        makeConstructorInitCode(u, v, w) {
            return [
                ...u,
                ...v.map(u => `${ w }.prototype.${ u }.call(this)`)
            ].join(';');
        }
        processPossibleArrowParamEnd() {
            if (this.tokens.matches2(g.TokenType.parenR, g.TokenType.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
                let u = this.tokens.currentIndex() + 1;
                for (; this.tokens.tokens[u].isType;)
                    u++;
                if (this.tokens.matches1AtIndex(u, g.TokenType.arrow)) {
                    for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < u;)
                        this.tokens.removeToken();
                    return this.tokens.replaceTokenTrimmingLeftWhitespace(') =>'), !0;
                }
            }
            return !1;
        }
        processPossibleAsyncArrowWithTypeParams() {
            if (!this.tokens.matchesContextual(f.ContextualKeyword._async) && !this.tokens.matches1(g.TokenType._async))
                return !1;
            const u = this.tokens.tokenAtRelativeIndex(1);
            if (u.type !== g.TokenType.lessThan || !u.isType)
                return !1;
            let v = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[v].isType;)
                v++;
            if (this.tokens.matches1AtIndex(v, g.TokenType.parenL)) {
                for (this.tokens.replaceToken('async ('), this.tokens.removeInitialToken(); this.tokens.currentIndex() < v;)
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
        shiftMappings(u, v) {
            for (let w = 0; w < u.length; w++) {
                const x = u[w];
                void 0 !== x && (u[w] = x + v);
            }
            return u;
        }
        constructor(u, v, w, x) {
            _t.prototype.__init.call(this), _t.prototype.__init2.call(this), this.nameManager = u.nameManager, this.helperManager = u.helperManager;
            const {
                tokenProcessor: y,
                importProcessor: z
            } = u;
            this.tokens = y, this.isImportsTransformEnabled = v.includes('imports'), this.isReactHotLoaderTransformEnabled = v.includes('react-hot-loader'), this.disableESTransforms = Boolean(x.disableESTransforms), x.disableESTransforms || (this.transformers.push(new(0, p.default)(y, this.nameManager)), this.transformers.push(new(0, n.default)(y)), this.transformers.push(new(0, o.default)(y, this.nameManager))), v.includes('jsx') && ('preserve' !== x.jsxRuntime && this.transformers.push(new(0, m.default)(this, y, z, this.nameManager, x)), this.transformers.push(new(0, q.default)(this, y, z, x)));
            let A = null;
            if (v.includes('react-hot-loader')) {
                if (!x.filePath)
                    throw new Error('filePath is required when using the react-hot-loader transform.');
                A = new(0, r.default)(y, x.filePath), this.transformers.push(A);
            }
            if (v.includes('imports')) {
                if (null === z)
                    throw new Error('Expected non-null importProcessor with imports transform enabled.');
                this.transformers.push(new(0, i.default)(this, y, z, this.nameManager, this.helperManager, A, w, Boolean(x.enableLegacyTypeScriptModuleInterop), v.includes('typescript'), v.includes('flow'), Boolean(x.preserveDynamicImport), Boolean(x.keepUnusedImports)));
            } else
                this.transformers.push(new(0, j.default)(y, this.nameManager, this.helperManager, A, v.includes('typescript'), v.includes('flow'), Boolean(x.keepUnusedImports), x));
            v.includes('flow') && this.transformers.push(new(0, k.default)(this, y, v.includes('imports'))), v.includes('typescript') && this.transformers.push(new(0, s.default)(this, y, v.includes('imports'))), v.includes('jest') && this.transformers.push(new(0, l.default)(this, y, this.nameManager, z));
        }
    }
}), c.register('CeV5J', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('pvm6x'),
        g = c('PmE4s');

    function _h(i, j, k, l) {
        const m = j.snapshot(),
            n = function(o) {
                const p = o.currentToken(),
                    q = p.contextId;
                if (null == q)
                    throw new Error('Expected context ID on class token.');
                const r = p.isExpression;
                if (null == r)
                    throw new Error('Expected isExpression on class token.');
                let s = null,
                    t = !1;
                o.nextToken(), o.matches1(g.TokenType.name) && (s = o.identifierName());
                for (; !o.matchesContextIdAndLabel(g.TokenType.braceL, q);)
                    o.matches1(g.TokenType._extends) && !o.currentToken().isType && (t = !0), o.nextToken();
                return {
                    isExpression: r,
                    className: s,
                    hasSuperclass: t
                };
            }(j);
        let o = [];
        const p = [],
            q = [];
        let r = null;
        const s = [],
            t = [],
            u = j.currentToken().contextId;
        if (null == u)
            throw new Error('Expected non-null class context ID on class open-brace.');
        for (j.nextToken(); !j.matchesContextIdAndLabel(g.TokenType.braceR, u);)
            if (j.matchesContextual(f.ContextualKeyword._constructor) && !j.currentToken().isType)
                ({
                    constructorInitializerStatements: v,
                    constructorInsertPos: w
                } = _j(j));
            else if (j.matches1(g.TokenType.semi))
            l || t.push({
                start: j.currentIndex(),
                end: j.currentIndex() + 1
            }), j.nextToken();
        else if (j.currentToken().isType)
            j.nextToken();
        else {
            const x = j.currentIndex();
            let y = !1,
                z = !1,
                A = !1;
            for (; _k(j.currentToken());)
                j.matches1(g.TokenType._static) && (y = !0), j.matches1(g.TokenType.hash) && (z = !0), (j.matches1(g.TokenType._declare) || j.matches1(g.TokenType._abstract)) && (A = !0), j.nextToken();
            if (y && j.matches1(g.TokenType.braceL)) {
                _i(j, u);
                continue;
            }
            if (z) {
                _i(j, u);
                continue;
            }
            if (j.matchesContextual(f.ContextualKeyword._constructor) && !j.currentToken().isType) {
                ({
                    constructorInitializerStatements: B,
                    constructorInsertPos: C
                } = _j(j));
                continue;
            }
            const B = j.currentIndex();
            if (_l(j), j.matches1(g.TokenType.lessThan) || j.matches1(g.TokenType.parenL)) {
                _i(j, u);
                continue;
            }
            for (; j.currentToken().isType;)
                j.nextToken();
            if (j.matches1(g.TokenType.eq)) {
                const C = j.currentIndex(),
                    D = j.currentToken().rhsEndIndex;
                if (null == D)
                    throw new Error('Expected rhsEndIndex on class field assignment.');
                for (j.nextToken(); j.currentIndex() < D;)
                    i.processToken();
                let E;
                y ? (E = k.claimFreeName('__initStatic'), q.push(E)) : (E = k.claimFreeName('__init'), p.push(E)), s.push({
                    initializerName: E,
                    equalsIndex: C,
                    start: B,
                    end: j.currentIndex()
                });
            } else
                l && !A || t.push({
                    start: x,
                    end: j.currentIndex()
                });
        }
        return j.restoreToSnapshot(m), l ? {
            headerInfo: n,
            constructorInitializerStatements: o,
            instanceInitializerNames: [],
            staticInitializerNames: [],
            constructorInsertPos: r,
            fields: [],
            rangesToRemove: t
        } : {
            headerInfo: n,
            constructorInitializerStatements: o,
            instanceInitializerNames: p,
            staticInitializerNames: q,
            constructorInsertPos: r,
            fields: s,
            rangesToRemove: t
        };
    }

    function _i(j, k) {
        for (j.nextToken(); j.currentToken().contextId !== k;)
            j.nextToken();
        for (; _k(j.tokenAtRelativeIndex(-1));)
            j.previousToken();
    }

    function _j(k) {
        const l = [];
        k.nextToken();
        const m = k.currentToken().contextId;
        if (null == m)
            throw new Error('Expected context ID on open-paren starting constructor params.');
        for (; !k.matchesContextIdAndLabel(g.TokenType.parenR, m);)
            if (k.currentToken().contextId === m) {
                if (k.nextToken(), _k(k.currentToken())) {
                    for (k.nextToken(); _k(k.currentToken());)
                        k.nextToken();
                    const n = k.currentToken();
                    if (n.type !== g.TokenType.name)
                        throw new Error('Expected identifier after access modifiers in constructor arg.');
                    const o = k.identifierNameForToken(n);
                    l.push(`this.${ o } = ${ o }`);
                }
            } else
                k.nextToken();
        for (k.nextToken(); k.currentToken().isType;)
            k.nextToken();
        let n = k.currentIndex(),
            o = !1;
        for (; !k.matchesContextIdAndLabel(g.TokenType.braceR, m);) {
            if (!o && k.matches2(g.TokenType._super, g.TokenType.parenL)) {
                k.nextToken();
                const p = k.currentToken().contextId;
                if (null == p)
                    throw new Error('Expected a context ID on the super call');
                for (; !k.matchesContextIdAndLabel(g.TokenType.parenR, p);)
                    k.nextToken();
                n = k.currentIndex(), o = !0;
            }
            k.nextToken();
        }
        return k.nextToken(), {
            constructorInitializerStatements: l,
            constructorInsertPos: n
        };
    }

    function _k(l) {
        return [
            g.TokenType._async,
            g.TokenType._get,
            g.TokenType._set,
            g.TokenType.plus,
            g.TokenType.minus,
            g.TokenType._readonly,
            g.TokenType._static,
            g.TokenType._public,
            g.TokenType._private,
            g.TokenType._protected,
            g.TokenType._override,
            g.TokenType._abstract,
            g.TokenType.star,
            g.TokenType._declare,
            g.TokenType.hash
        ].includes(l.type);
    }

    function _l(m) {
        if (m.matches1(g.TokenType.bracketL)) {
            const n = m.currentToken().contextId;
            if (null == n)
                throw new Error('Expected class context ID on computed name open bracket.');
            for (; !m.matchesContextIdAndLabel(g.TokenType.bracketR, n);)
                m.nextToken();
            m.nextToken();
        } else
            m.nextToken();
    }
}), c.register('EDYKJ', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('SGA4o'),
        g = c('pvm6x'),
        h = c('PmE4s'),
        i = c('0iO2u'),
        j = c('hONEb'),
        k = c('Beerk'),
        l = c('4J3u+'),
        m = c('QJl6f'),
        n = c('m2lRN'),
        o = c('7q5Ai');
    class _p extends o.default {
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
            let q = '';
            return this.hadExport && (q += 'Object.defineProperty(exports, "__esModule", {value: true});'), q;
        }
        getSuffixCode() {
            return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? '\nmodule.exports = exports.default;\n' : '';
        }
        process() {
            return this.tokens.matches3(h.TokenType._import, h.TokenType.name, h.TokenType.eq) ? this.processImportEquals() : this.tokens.matches1(h.TokenType._import) ? (this.processImport(), !0) : this.tokens.matches2(h.TokenType._export, h.TokenType.eq) ? (this.tokens.replaceToken('module.exports'), !0) : this.tokens.matches1(h.TokenType._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : !(!this.tokens.matches2(h.TokenType.name, h.TokenType.postIncDec) || !this.processPostIncDec()) || (this.tokens.matches1(h.TokenType.name) || this.tokens.matches1(h.TokenType.jsxName) ? this.processIdentifier() : this.tokens.matches1(h.TokenType.eq) ? this.processAssignment() : this.tokens.matches1(h.TokenType.assign) ? this.processComplexAssignment() : !!this.tokens.matches1(h.TokenType.preIncDec) && this.processPreIncDec());
        }
        processImportEquals() {
            const q = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.importProcessor.shouldAutomaticallyElideImportedName(q) ? (0, i.default)(this.tokens) : this.tokens.replaceToken('const'), !0;
        }
        processImport() {
            if (this.tokens.matches2(h.TokenType._import, h.TokenType.parenL)) {
                if (this.preserveDynamicImport)
                    return void this.tokens.copyToken();
                const q = this.enableLegacyTypeScriptModuleInterop ? '' : `${ this.helperManager.getHelperName('interopRequireWildcard') }(`;
                this.tokens.replaceToken(`Promise.resolve().then(() => ${ q }require`);
                const r = this.tokens.currentToken().contextId;
                if (null == r)
                    throw new Error('Expected context ID on dynamic import invocation.');
                for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(h.TokenType.parenR, r);)
                    this.rootTransformer.processToken();
                return void this.tokens.replaceToken(q ? ')))' : '))');
            }
            if (this.removeImportAndDetectIfShouldElide())
                this.tokens.removeToken();
            else {
                const q = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(q)), this.tokens.appendCode(this.importProcessor.claimImportCode(q));
            }
            (0, m.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(h.TokenType.semi) && this.tokens.removeToken();
        }
        removeImportAndDetectIfShouldElide() {
            if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(g.ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, h.TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, g.ContextualKeyword._from))
                return this.removeRemainingImport(), !0;
            if (this.tokens.matches1(h.TokenType.name) || this.tokens.matches1(h.TokenType.star))
                return this.removeRemainingImport(), !1;
            if (this.tokens.matches1(h.TokenType.string))
                return !1;
            let q = !1,
                r = !1;
            for (; !this.tokens.matches1(h.TokenType.string);)
                (!q && this.tokens.matches1(h.TokenType.braceL) || this.tokens.matches1(h.TokenType.comma)) && (this.tokens.removeToken(), this.tokens.matches1(h.TokenType.braceR) || (r = !0), (this.tokens.matches2(h.TokenType.name, h.TokenType.comma) || this.tokens.matches2(h.TokenType.name, h.TokenType.braceR) || this.tokens.matches4(h.TokenType.name, h.TokenType.name, h.TokenType.name, h.TokenType.comma) || this.tokens.matches4(h.TokenType.name, h.TokenType.name, h.TokenType.name, h.TokenType.braceR)) && (q = !0)), this.tokens.removeToken();
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !q : !!this.isFlowTransformEnabled && (r && !q));
        }
        removeRemainingImport() {
            for (; !this.tokens.matches1(h.TokenType.string);)
                this.tokens.removeToken();
        }
        processIdentifier() {
            const q = this.tokens.currentToken();
            if (q.shadowsGlobal)
                return !1;
            if (q.identifierRole === f.IdentifierRole.ObjectShorthand)
                return this.processObjectShorthand();
            if (q.identifierRole !== f.IdentifierRole.Access)
                return !1;
            const r = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(q));
            if (!r)
                return !1;
            let s = this.tokens.currentIndex() + 1;
            for (; s < this.tokens.tokens.length && this.tokens.tokens[s].type === h.TokenType.parenR;)
                s++;
            return this.tokens.tokens[s].type === h.TokenType.parenL ? this.tokens.tokenAtRelativeIndex(1).type === h.TokenType.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== h.TokenType._new ? (this.tokens.replaceToken(`${ r }.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(h.TokenType.parenR)) : this.tokens.replaceToken(`(0, ${ r })`) : this.tokens.replaceToken(r), !0;
        }
        processObjectShorthand() {
            const q = this.tokens.identifierName(),
                r = this.importProcessor.getIdentifierReplacement(q);
            return !!r && (this.tokens.replaceToken(`${ q }: ${ r }`), !0);
        }
        processExport() {
            if (this.tokens.matches2(h.TokenType._export, h.TokenType._enum) || this.tokens.matches3(h.TokenType._export, h.TokenType._const, h.TokenType._enum))
                return this.hadNamedExport = !0, !1;
            if (this.tokens.matches2(h.TokenType._export, h.TokenType._default))
                return this.tokens.matches3(h.TokenType._export, h.TokenType._default, h.TokenType._enum) ? (this.hadDefaultExport = !0, !1) : (this.processExportDefault(), !0);
            if (this.tokens.matches2(h.TokenType._export, h.TokenType.braceL))
                return this.processExportBindings(), !0;
            if (this.tokens.matches2(h.TokenType._export, h.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, g.ContextualKeyword._type)) {
                if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(h.TokenType.braceL)) {
                    for (; !this.tokens.matches1(h.TokenType.braceR);)
                        this.tokens.removeToken();
                    this.tokens.removeToken();
                } else
                    this.tokens.removeToken(), this.tokens.matches1(h.TokenType._as) && (this.tokens.removeToken(), this.tokens.removeToken());
                return this.tokens.matchesContextual(g.ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, h.TokenType.string) && (this.tokens.removeToken(), this.tokens.removeToken(), (0, m.removeMaybeImportAttributes)(this.tokens)), !0;
            }
            if (this.hadNamedExport = !0, this.tokens.matches2(h.TokenType._export, h.TokenType._var) || this.tokens.matches2(h.TokenType._export, h.TokenType._let) || this.tokens.matches2(h.TokenType._export, h.TokenType._const))
                return this.processExportVar(), !0;
            if (this.tokens.matches2(h.TokenType._export, h.TokenType._function) || this.tokens.matches3(h.TokenType._export, h.TokenType.name, h.TokenType._function))
                return this.processExportFunction(), !0;
            if (this.tokens.matches2(h.TokenType._export, h.TokenType._class) || this.tokens.matches3(h.TokenType._export, h.TokenType._abstract, h.TokenType._class) || this.tokens.matches2(h.TokenType._export, h.TokenType.at))
                return this.processExportClass(), !0;
            if (this.tokens.matches2(h.TokenType._export, h.TokenType.star))
                return this.processExportStar(), !0;
            throw new Error('Unrecognized export syntax.');
        }
        processAssignment() {
            const q = this.tokens.currentIndex(),
                r = this.tokens.tokens[q - 1];
            if (r.isType || r.type !== h.TokenType.name)
                return !1;
            if (r.shadowsGlobal)
                return !1;
            if (q >= 2 && this.tokens.matches1AtIndex(q - 2, h.TokenType.dot))
                return !1;
            if (q >= 2 && [
                    h.TokenType._var,
                    h.TokenType._let,
                    h.TokenType._const
                ].includes(this.tokens.tokens[q - 2].type))
                return !1;
            const s = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));
            return !!s && (this.tokens.copyToken(), this.tokens.appendCode(` ${ s } =`), !0);
        }
        processComplexAssignment() {
            const q = this.tokens.currentIndex(),
                r = this.tokens.tokens[q - 1];
            if (r.type !== h.TokenType.name)
                return !1;
            if (r.shadowsGlobal)
                return !1;
            if (q >= 2 && this.tokens.matches1AtIndex(q - 2, h.TokenType.dot))
                return !1;
            const s = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));
            return !!s && (this.tokens.appendCode(` = ${ s }`), this.tokens.copyToken(), !0);
        }
        processPreIncDec() {
            const q = this.tokens.currentIndex(),
                r = this.tokens.tokens[q + 1];
            if (r.type !== h.TokenType.name)
                return !1;
            if (r.shadowsGlobal)
                return !1;
            if (q + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(q + 2, h.TokenType.dot) || this.tokens.matches1AtIndex(q + 2, h.TokenType.bracketL) || this.tokens.matches1AtIndex(q + 2, h.TokenType.parenL)))
                return !1;
            const s = this.tokens.identifierNameForToken(r),
                t = this.importProcessor.resolveExportBinding(s);
            return !!t && (this.tokens.appendCode(`${ t } = `), this.tokens.copyToken(), !0);
        }
        processPostIncDec() {
            const q = this.tokens.currentIndex(),
                r = this.tokens.tokens[q],
                s = this.tokens.tokens[q + 1];
            if (r.type !== h.TokenType.name)
                return !1;
            if (r.shadowsGlobal)
                return !1;
            if (q >= 1 && this.tokens.matches1AtIndex(q - 1, h.TokenType.dot))
                return !1;
            const t = this.tokens.identifierNameForToken(r),
                u = this.importProcessor.resolveExportBinding(t);
            if (!u)
                return !1;
            const v = this.tokens.rawCodeForToken(s),
                w = this.importProcessor.getIdentifierReplacement(t) || t;
            if ('++' === v)
                this.tokens.replaceToken(`(${ w } = ${ u } = ${ w } + 1, ${ w } - 1)`);
            else {
                if ('--' !== v)
                    throw new Error(`Unexpected operator: ${ v }`);
                this.tokens.replaceToken(`(${ w } = ${ u } = ${ w } - 1, ${ w } + 1)`);
            }
            return this.tokens.removeToken(), !0;
        }
        processExportDefault() {
            let q = !0;
            if (this.tokens.matches4(h.TokenType._export, h.TokenType._default, h.TokenType._function, h.TokenType.name) || this.tokens.matches5(h.TokenType._export, h.TokenType._default, h.TokenType.name, h.TokenType._function, h.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, g.ContextualKeyword._async)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken();
                const r = this.processNamedFunction();
                this.tokens.appendCode(` exports.default = ${ r };`);
            } else if (this.tokens.matches4(h.TokenType._export, h.TokenType._default, h.TokenType._class, h.TokenType.name) || this.tokens.matches5(h.TokenType._export, h.TokenType._default, h.TokenType._abstract, h.TokenType._class, h.TokenType.name) || this.tokens.matches3(h.TokenType._export, h.TokenType._default, h.TokenType.at)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(h.TokenType._abstract) && this.tokens.removeToken();
                const r = this.rootTransformer.processNamedClass();
                this.tokens.appendCode(` exports.default = ${ r };`);
            } else if ((0, n.default)(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo))
                q = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
            else if (this.reactHotLoaderTransformer) {
                const r = this.nameManager.claimFreeName('_default');
                this.tokens.replaceToken(`let ${ r }; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${ r } =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(r);
            } else
                this.tokens.replaceToken('exports.'), this.tokens.copyToken(), this.tokens.appendCode(' =');
            q && (this.hadDefaultExport = !0);
        }
        copyDecorators() {
            for (; this.tokens.matches1(h.TokenType.at);)
                if (this.tokens.copyToken(), this.tokens.matches1(h.TokenType.parenL))
                    this.tokens.copyExpectedToken(h.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(h.TokenType.parenR);
                else {
                    for (this.tokens.copyExpectedToken(h.TokenType.name); this.tokens.matches1(h.TokenType.dot);)
                        this.tokens.copyExpectedToken(h.TokenType.dot), this.tokens.copyExpectedToken(h.TokenType.name);
                    this.tokens.matches1(h.TokenType.parenL) && (this.tokens.copyExpectedToken(h.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(h.TokenType.parenR));
                }
        }
        processExportVar() {
            this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar();
        }
        isSimpleExportVar() {
            let q = this.tokens.currentIndex();
            if (q++, q++, !this.tokens.matches1AtIndex(q, h.TokenType.name))
                return !1;
            for (q++; q < this.tokens.tokens.length && this.tokens.tokens[q].isType;)
                q++;
            return !!this.tokens.matches1AtIndex(q, h.TokenType.eq);
        }
        processSimpleExportVar() {
            this.tokens.removeInitialToken(), this.tokens.copyToken();
            const q = this.tokens.identifierName();
            for (; !this.tokens.matches1(h.TokenType.eq);)
                this.rootTransformer.processToken();
            const r = this.tokens.currentToken().rhsEndIndex;
            if (null == r)
                throw new Error('Expected = token with an end index.');
            for (; this.tokens.currentIndex() < r;)
                this.rootTransformer.processToken();
            this.tokens.appendCode(`; exports.${ q } = ${ q }`);
        }
        processComplexExportVar() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const q = this.tokens.matches1(h.TokenType.braceL);
            q && this.tokens.appendCode('(');
            let r = 0;
            for (;;)
                if (this.tokens.matches1(h.TokenType.braceL) || this.tokens.matches1(h.TokenType.dollarBraceL) || this.tokens.matches1(h.TokenType.bracketL))
                    r++, this.tokens.copyToken();
                else if (this.tokens.matches1(h.TokenType.braceR) || this.tokens.matches1(h.TokenType.bracketR))
                r--, this.tokens.copyToken();
            else {
                if (0 === r && !this.tokens.matches1(h.TokenType.name) && !this.tokens.currentToken().isType)
                    break;
                if (this.tokens.matches1(h.TokenType.eq)) {
                    const s = this.tokens.currentToken().rhsEndIndex;
                    if (null == s)
                        throw new Error('Expected = token with an end index.');
                    for (; this.tokens.currentIndex() < s;)
                        this.rootTransformer.processToken();
                } else {
                    const s = this.tokens.currentToken();
                    if ((0, f.isDeclaration)(s)) {
                        const t = this.tokens.identifierName();
                        let u = this.importProcessor.getIdentifierReplacement(t);
                        if (null === u)
                            throw new Error(`Expected a replacement for ${ t } in \`export var\` syntax.`);
                        (0, f.isObjectShorthandDeclaration)(s) && (u = `${ t }: ${ u }`), this.tokens.replaceToken(u);
                    } else
                        this.rootTransformer.processToken();
                }
            }
            if (q) {
                const s = this.tokens.currentToken().rhsEndIndex;
                if (null == s)
                    throw new Error('Expected = token with an end index.');
                for (; this.tokens.currentIndex() < s;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(')');
            }
        }
        processExportFunction() {
            this.tokens.replaceToken('');
            const q = this.processNamedFunction();
            this.tokens.appendCode(` exports.${ q } = ${ q };`);
        }
        processNamedFunction() {
            if (this.tokens.matches1(h.TokenType._function))
                this.tokens.copyToken();
            else if (this.tokens.matches2(h.TokenType.name, h.TokenType._function)) {
                if (!this.tokens.matchesContextual(g.ContextualKeyword._async))
                    throw new Error('Expected async keyword in function export.');
                this.tokens.copyToken(), this.tokens.copyToken();
            }
            if (this.tokens.matches1(h.TokenType.star) && this.tokens.copyToken(), !this.tokens.matches1(h.TokenType.name))
                throw new Error('Expected identifier for exported function name.');
            const q = this.tokens.identifierName();
            if (this.tokens.copyToken(), this.tokens.currentToken().isType)
                for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;)
                    this.tokens.removeToken();
            return this.tokens.copyExpectedToken(h.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(h.TokenType.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(h.TokenType.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(h.TokenType.braceR), q;
        }
        processExportClass() {
            this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(h.TokenType._abstract) && this.tokens.removeToken();
            const q = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.${ q } = ${ q };`);
        }
        processExportBindings() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const q = (0, l.default)(this.tokens),
                r = [];
            for (;;) {
                if (this.tokens.matches1(h.TokenType.braceR)) {
                    this.tokens.removeToken();
                    break;
                }
                const s = (0, k.default)(this.tokens);
                for (; this.tokens.currentIndex() < s.endIndex;)
                    this.tokens.removeToken();
                if (!(s.isType || !q && this.shouldElideExportedIdentifier(s.leftName))) {
                    const t = s.rightName;
                    'default' === t ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
                    const u = s.leftName,
                        v = this.importProcessor.getIdentifierReplacement(u);
                    r.push(`exports.${ t } = ${ v || u };`);
                }
                if (this.tokens.matches1(h.TokenType.braceR)) {
                    this.tokens.removeToken();
                    break;
                }
                if (this.tokens.matches2(h.TokenType.comma, h.TokenType.braceR)) {
                    this.tokens.removeToken(), this.tokens.removeToken();
                    break;
                }
                if (!this.tokens.matches1(h.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(this.tokens.currentToken()) }`);
                this.tokens.removeToken();
            }
            if (this.tokens.matchesContextual(g.ContextualKeyword._from)) {
                this.tokens.removeToken();
                const s = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(s)), (0, m.removeMaybeImportAttributes)(this.tokens);
            } else
                this.tokens.appendCode(r.join(' '));
            this.tokens.matches1(h.TokenType.semi) && this.tokens.removeToken();
        }
        processExportStar() {
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(h.TokenType.string);)
                this.tokens.removeToken();
            const q = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(q)), (0, m.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(h.TokenType.semi) && this.tokens.removeToken();
        }
        shouldElideExportedIdentifier(q) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(q);
        }
        constructor(q, r, s, t, u, v, w, x, y, z, A, B) {
            super(), this.rootTransformer = q, this.tokens = r, this.importProcessor = s, this.nameManager = t, this.helperManager = u, this.reactHotLoaderTransformer = v, this.enableLegacyBabel5ModuleInterop = w, this.enableLegacyTypeScriptModuleInterop = x, this.isTypeScriptTransformEnabled = y, this.isFlowTransformEnabled = z, this.preserveDynamicImport = A, this.keepUnusedImports = B, _p.prototype.__init.call(this), _p.prototype.__init2.call(this), _p.prototype.__init3.call(this), this.declarationInfo = y ? (0, j.default)(r) : j.EMPTY_DECLARATION_INFO;
        }
    }
}), c.register('0iO2u', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('PmE4s');

    function _g(h) {
        if (h.removeInitialToken(), h.removeToken(), h.removeToken(), h.removeToken(), h.matches1(f.TokenType.parenL))
            h.removeToken(), h.removeToken(), h.removeToken();
        else
            for (; h.matches1(f.TokenType.dot);)
                h.removeToken(), h.removeToken();
    }
}), c.register('hONEb', function(d, e) {
    b(d.exports, 'EMPTY_DECLARATION_INFO', function() {
        return _h;
    }), b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('SGA4o'),
        g = c('PmE4s');
    const _h = {
        typeDeclarations: new Set(),
        valueDeclarations: new Set()
    };

    function _i(j) {
        const k = new Set(),
            l = new Set();
        for (let m = 0; m < j.tokens.length; m++) {
            const n = j.tokens[m];
            n.type === g.TokenType.name && (0, f.isTopLevelDeclaration)(n) && (n.isType ? k.add(j.identifierNameForToken(n)) : l.add(j.identifierNameForToken(n)));
        }
        return {
            typeDeclarations: k,
            valueDeclarations: l
        };
    }
}), c.register('4J3u+', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('pvm6x'),
        g = c('PmE4s');

    function _h(i) {
        let j = i.currentIndex();
        for (; !i.matches1AtIndex(j, g.TokenType.braceR);)
            j++;
        return i.matchesContextualAtIndex(j + 1, f.ContextualKeyword._from) && i.matches1AtIndex(j + 2, g.TokenType.string);
    }
}), c.register('QJl6f', function(d, e) {
    b(d.exports, 'removeMaybeImportAttributes', function() {
        return _h;
    });
    var f = c('pvm6x'),
        g = c('PmE4s');

    function _h(i) {
        (i.matches2(g.TokenType._with, g.TokenType.braceL) || i.matches2(g.TokenType.name, g.TokenType.braceL) && i.matchesContextual(f.ContextualKeyword._assert)) && (i.removeToken(), i.removeToken(), i.removeBalancedCode(), i.removeToken());
    }
}), c.register('m2lRN', function(d, e) {
    b(d.exports, 'default', function() {
        return _g;
    });
    var f = c('PmE4s');

    function _g(h, i, j, k) {
        if (!h || i)
            return !1;
        const l = j.currentToken();
        if (null == l.rhsEndIndex)
            throw new Error('Expected non-null rhsEndIndex on export token.');
        const m = l.rhsEndIndex - j.currentIndex();
        if (3 !== m && (4 !== m || !j.matches1AtIndex(l.rhsEndIndex - 1, f.TokenType.semi)))
            return !1;
        const n = j.tokenAtRelativeIndex(2);
        if (n.type !== f.TokenType.name)
            return !1;
        const o = j.identifierNameForToken(n);
        return k.typeDeclarations.has(o) && !k.valueDeclarations.has(o);
    }
}), c.register('21rLg', function(d, e) {
    b(d.exports, 'default', function() {
        return _p;
    });
    var f = c('pvm6x'),
        g = c('PmE4s'),
        h = c('0iO2u'),
        i = c('hONEb'),
        j = c('Beerk'),
        k = c('bK1n9'),
        l = c('4J3u+'),
        m = c('QJl6f'),
        n = c('m2lRN'),
        o = c('7q5Ai');
    class _p extends o.default {
        process() {
            if (this.tokens.matches3(g.TokenType._import, g.TokenType.name, g.TokenType.eq))
                return this.processImportEquals();
            if (this.tokens.matches4(g.TokenType._import, g.TokenType.name, g.TokenType.name, g.TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, f.ContextualKeyword._type)) {
                this.tokens.removeInitialToken();
                for (let q = 0; q < 7; q++)
                    this.tokens.removeToken();
                return !0;
            }
            if (this.tokens.matches2(g.TokenType._export, g.TokenType.eq))
                return this.tokens.replaceToken('module.exports'), !0;
            if (this.tokens.matches5(g.TokenType._export, g.TokenType._import, g.TokenType.name, g.TokenType.name, g.TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, f.ContextualKeyword._type)) {
                this.tokens.removeInitialToken();
                for (let q = 0; q < 8; q++)
                    this.tokens.removeToken();
                return !0;
            }
            if (this.tokens.matches1(g.TokenType._import))
                return this.processImport();
            if (this.tokens.matches2(g.TokenType._export, g.TokenType._default))
                return this.processExportDefault();
            if (this.tokens.matches2(g.TokenType._export, g.TokenType.braceL))
                return this.processNamedExports();
            if (this.tokens.matches2(g.TokenType._export, g.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, f.ContextualKeyword._type)) {
                if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(g.TokenType.braceL)) {
                    for (; !this.tokens.matches1(g.TokenType.braceR);)
                        this.tokens.removeToken();
                    this.tokens.removeToken();
                } else
                    this.tokens.removeToken(), this.tokens.matches1(g.TokenType._as) && (this.tokens.removeToken(), this.tokens.removeToken());
                return this.tokens.matchesContextual(f.ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, g.TokenType.string) && (this.tokens.removeToken(), this.tokens.removeToken(), (0, m.removeMaybeImportAttributes)(this.tokens)), !0;
            }
            return !1;
        }
        processImportEquals() {
            const q = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.shouldAutomaticallyElideImportedName(q) ? (0, h.default)(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken('const'), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName('require'))) : this.tokens.replaceToken('const'), !0;
        }
        processImport() {
            if (this.tokens.matches2(g.TokenType._import, g.TokenType.parenL))
                return !1;
            const q = this.tokens.snapshot();
            if (this.removeImportTypeBindings()) {
                for (this.tokens.restoreToSnapshot(q); !this.tokens.matches1(g.TokenType.string);)
                    this.tokens.removeToken();
                this.tokens.removeToken(), (0, m.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(g.TokenType.semi) && this.tokens.removeToken();
            }
            return !0;
        }
        removeImportTypeBindings() {
            if (this.tokens.copyExpectedToken(g.TokenType._import), this.tokens.matchesContextual(f.ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, g.TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, f.ContextualKeyword._from))
                return !0;
            if (this.tokens.matches1(g.TokenType.string))
                return this.tokens.copyToken(), !1;
            this.tokens.matchesContextual(f.ContextualKeyword._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, f.ContextualKeyword._from) && this.tokens.copyToken();
            let q = !1,
                r = !1,
                s = !1;
            if (this.tokens.matches1(g.TokenType.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(g.TokenType.comma) && this.tokens.removeToken()) : (q = !0, this.tokens.copyToken(), this.tokens.matches1(g.TokenType.comma) && (s = !0, this.tokens.removeToken()))), this.tokens.matches1(g.TokenType.star))
                this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (s && this.tokens.appendCode(','), q = !0, this.tokens.copyExpectedToken(g.TokenType.star), this.tokens.copyExpectedToken(g.TokenType.name), this.tokens.copyExpectedToken(g.TokenType.name));
            else if (this.tokens.matches1(g.TokenType.braceL)) {
                for (s && this.tokens.appendCode(','), this.tokens.copyToken(); !this.tokens.matches1(g.TokenType.braceR);) {
                    r = !0;
                    const t = (0, j.default)(this.tokens);
                    if (t.isType || this.shouldAutomaticallyElideImportedName(t.rightName)) {
                        for (; this.tokens.currentIndex() < t.endIndex;)
                            this.tokens.removeToken();
                        this.tokens.matches1(g.TokenType.comma) && this.tokens.removeToken();
                    } else {
                        for (q = !0; this.tokens.currentIndex() < t.endIndex;)
                            this.tokens.copyToken();
                        this.tokens.matches1(g.TokenType.comma) && this.tokens.copyToken();
                    }
                }
                this.tokens.copyExpectedToken(g.TokenType.braceR);
            }
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !q : !!this.isFlowTransformEnabled && (r && !q));
        }
        shouldAutomaticallyElideImportedName(q) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(q);
        }
        processExportDefault() {
            if ((0, n.default)(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo))
                return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
            if (!(this.tokens.matches4(g.TokenType._export, g.TokenType._default, g.TokenType._function, g.TokenType.name) || this.tokens.matches5(g.TokenType._export, g.TokenType._default, g.TokenType.name, g.TokenType._function, g.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, f.ContextualKeyword._async) || this.tokens.matches4(g.TokenType._export, g.TokenType._default, g.TokenType._class, g.TokenType.name) || this.tokens.matches5(g.TokenType._export, g.TokenType._default, g.TokenType._abstract, g.TokenType._class, g.TokenType.name)) && this.reactHotLoaderTransformer) {
                const q = this.nameManager.claimFreeName('_default');
                return this.tokens.replaceToken(`let ${ q }; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${ q } =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(q), !0;
            }
            return !1;
        }
        processNamedExports() {
            if (!this.isTypeScriptTransformEnabled)
                return !1;
            this.tokens.copyExpectedToken(g.TokenType._export), this.tokens.copyExpectedToken(g.TokenType.braceL);
            const q = (0, l.default)(this.tokens);
            let r = !1;
            for (; !this.tokens.matches1(g.TokenType.braceR);) {
                const s = (0, j.default)(this.tokens);
                if (s.isType || !q && this.shouldElideExportedName(s.leftName)) {
                    for (; this.tokens.currentIndex() < s.endIndex;)
                        this.tokens.removeToken();
                    this.tokens.matches1(g.TokenType.comma) && this.tokens.removeToken();
                } else {
                    for (r = !0; this.tokens.currentIndex() < s.endIndex;)
                        this.tokens.copyToken();
                    this.tokens.matches1(g.TokenType.comma) && this.tokens.copyToken();
                }
            }
            return this.tokens.copyExpectedToken(g.TokenType.braceR), this.keepUnusedImports || !q || r || (this.tokens.removeToken(), this.tokens.removeToken(), (0, m.removeMaybeImportAttributes)(this.tokens)), !0;
        }
        shouldElideExportedName(q) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(q) && !this.declarationInfo.valueDeclarations.has(q);
        }
        constructor(q, r, s, t, u, v, w, x) {
            super(), this.tokens = q, this.nameManager = r, this.helperManager = s, this.reactHotLoaderTransformer = t, this.isTypeScriptTransformEnabled = u, this.isFlowTransformEnabled = v, this.keepUnusedImports = w, this.nonTypeIdentifiers = u && !w ? (0, k.getNonTypeIdentifiers)(q, x) : new Set(), this.declarationInfo = u && !w ? (0, i.default)(q) : i.EMPTY_DECLARATION_INFO, this.injectCreateRequireForImportRequire = Boolean(x.injectCreateRequireForImportRequire);
        }
    }
}), c.register('wPw3V', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('pvm6x'),
        g = c('PmE4s'),
        h = c('7q5Ai');
    class _i extends h.default {
        process() {
            return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(g.TokenType._enum) ? (this.processEnum(), !0) : this.tokens.matches2(g.TokenType._export, g.TokenType._enum) ? (this.processNamedExportEnum(), !0) : !!this.tokens.matches3(g.TokenType._export, g.TokenType._default, g.TokenType._enum) && (this.processDefaultExportEnum(), !0));
        }
        processNamedExportEnum() {
            if (this.isImportsTransformEnabled) {
                this.tokens.removeInitialToken();
                const j = this.tokens.identifierNameAtRelativeIndex(1);
                this.processEnum(), this.tokens.appendCode(` exports.${ j } = ${ j };`);
            } else
                this.tokens.copyToken(), this.processEnum();
        }
        processDefaultExportEnum() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const j = this.tokens.identifierNameAtRelativeIndex(1);
            this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${ j };`) : this.tokens.appendCode(` export default ${ j };`);
        }
        processEnum() {
            this.tokens.replaceToken('const'), this.tokens.copyExpectedToken(g.TokenType.name);
            let j = !1;
            this.tokens.matchesContextual(f.ContextualKeyword._of) && (this.tokens.removeToken(), j = this.tokens.matchesContextual(f.ContextualKeyword._symbol), this.tokens.removeToken());
            const k = this.tokens.matches3(g.TokenType.braceL, g.TokenType.name, g.TokenType.eq);
            this.tokens.appendCode(' = require("flow-enums-runtime")');
            const l = !j && !k;
            for (this.tokens.replaceTokenTrimmingLeftWhitespace(l ? '.Mirrored([' : '({'); !this.tokens.matches1(g.TokenType.braceR);) {
                if (this.tokens.matches1(g.TokenType.ellipsis)) {
                    this.tokens.removeToken();
                    break;
                }
                this.processEnumElement(j, k), this.tokens.matches1(g.TokenType.comma) && this.tokens.copyToken();
            }
            this.tokens.replaceToken(l ? ']);' : '});');
        }
        processEnumElement(j, k) {
            if (j) {
                const l = this.tokens.identifierName();
                this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${ l }")`);
            } else
                k ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(':'), this.tokens.copyToken()) : this.tokens.replaceToken(`"${ this.tokens.identifierName() }"`);
        }
        constructor(j, k, l) {
            super(), this.rootTransformer = j, this.tokens = k, this.isImportsTransformEnabled = l;
        }
    }
}), c.register('Mqzaq', function(d, e) {
    b(d.exports, 'default', function() {
        return _j;
    });
    var f = c('PmE4s'),
        g = c('7q5Ai');
    const h = 'jest',
        i = [
            'mock',
            'unmock',
            'enableAutomock',
            'disableAutomock'
        ];
    class _j extends g.default {
        __init() {
            this.hoistedFunctionNames = [];
        }
        process() {
            return !(0 !== this.tokens.currentToken().scopeDepth || !this.tokens.matches4(f.TokenType.name, f.TokenType.dot, f.TokenType.name, f.TokenType.parenL) || this.tokens.identifierName() !== h) && (! function(k) {
                let l, m = k[0],
                    n = 1;
                for (; n < k.length;) {
                    const o = k[n],
                        p = k[n + 1];
                    if (n += 2, ('optionalAccess' === o || 'optionalCall' === o) && null == m)
                        return;
                    'access' === o || 'optionalAccess' === o ? (l = m, m = p(m)) : 'call' !== o && 'optionalCall' !== o || (m = p((...k) => m.call(l, ...k)), l = void 0);
                }
                return m;
            }([
                this,
                'access',
                d => d.importProcessor,
                'optionalAccess',
                d => d.getGlobalNames,
                'call',
                d => d(),
                'optionalAccess',
                d => d.has,
                'call',
                d => d(h)
            ]) && this.extractHoistedCalls());
        }
        getHoistedCode() {
            return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map(d => `${ d }();`).join('') : '';
        }
        extractHoistedCalls() {
            this.tokens.removeToken();
            let k = !1;
            for (; this.tokens.matches3(f.TokenType.dot, f.TokenType.name, f.TokenType.parenL);) {
                const l = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
                if (i.includes(l)) {
                    const m = this.nameManager.claimFreeName('__jestHoist');
                    this.hoistedFunctionNames.push(m), this.tokens.replaceToken(`function ${ m }(){${ h }.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR), this.tokens.appendCode(';}'), k = !1;
                } else
                    k ? this.tokens.copyToken() : this.tokens.replaceToken(`${ h }.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR), k = !0;
            }
            return !0;
        }
        constructor(k, l, m, n) {
            super(), this.rootTransformer = k, this.tokens = l, this.nameManager = m, this.importProcessor = n, _j.prototype.__init.call(this);
        }
    }
}), c.register('vfTeu', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('PmE4s'),
        g = c('7q5Ai');
    class _h extends g.default {
        process() {
            if (this.tokens.matches1(f.TokenType.num)) {
                const i = this.tokens.currentTokenCode();
                if (i.includes('_'))
                    return this.tokens.replaceToken(i.replace(/_/g, '')), !0;
            }
            return !1;
        }
        constructor(i) {
            super(), this.tokens = i;
        }
    }
}), c.register('dTsUy', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('PmE4s'),
        g = c('7q5Ai');
    class _h extends g.default {
        process() {
            return !!this.tokens.matches2(f.TokenType._catch, f.TokenType.braceL) && (this.tokens.copyToken(), this.tokens.appendCode(` (${ this.nameManager.claimFreeName('e') })`), !0);
        }
        constructor(i, j) {
            super(), this.tokens = i, this.nameManager = j;
        }
    }
}), c.register('CwIlN', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('PmE4s'),
        g = c('7q5Ai');
    class _h extends g.default {
        process() {
            if (this.tokens.matches1(f.TokenType.nullishCoalescing)) {
                const i = this.tokens.currentToken();
                return this.tokens.tokens[i.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(', async () => (') : this.tokens.replaceTokenTrimmingLeftWhitespace(', () => ('), !0;
            }
            if (this.tokens.matches1(f.TokenType._delete)) {
                if (this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)
                    return this.tokens.removeInitialToken(), !0;
            }
            const i = this.tokens.currentToken().subscriptStartIndex;
            if (null != i && this.tokens.tokens[i].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== f.TokenType._super) {
                const j = this.nameManager.claimFreeName('_');
                let k;
                if (k = i > 0 && this.tokens.matches1AtIndex(i - 1, f.TokenType._delete) && this.isLastSubscriptInChain() ? `${ j } => delete ${ j }` : `${ j } => ${ j }`, this.tokens.tokens[i].isAsyncOperation && (k = `async ${ k }`), this.tokens.matches2(f.TokenType.questionDot, f.TokenType.parenL) || this.tokens.matches2(f.TokenType.questionDot, f.TokenType.lessThan))
                    this.justSkippedSuper() && this.tokens.appendCode('.bind(this)'), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${ k }`);
                else if (this.tokens.matches2(f.TokenType.questionDot, f.TokenType.bracketL))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${ k }`);
                else if (this.tokens.matches1(f.TokenType.questionDot))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${ k }.`);
                else if (this.tokens.matches1(f.TokenType.dot))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${ k }.`);
                else if (this.tokens.matches1(f.TokenType.bracketL))
                    this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${ k }[`);
                else {
                    if (!this.tokens.matches1(f.TokenType.parenL))
                        throw new Error('Unexpected subscript operator in optional chain.');
                    this.justSkippedSuper() && this.tokens.appendCode('.bind(this)'), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${ k }(`);
                }
                return !0;
            }
            return !1;
        }
        isLastSubscriptInChain() {
            let i = 0;
            for (let j = this.tokens.currentIndex() + 1;; j++) {
                if (j >= this.tokens.tokens.length)
                    throw new Error('Reached the end of the code while finding the end of the access chain.');
                if (this.tokens.tokens[j].isOptionalChainStart ? i++ : this.tokens.tokens[j].isOptionalChainEnd && i--, i < 0)
                    return !0;
                if (0 === i && null != this.tokens.tokens[j].subscriptStartIndex)
                    return !1;
            }
        }
        justSkippedSuper() {
            let i = 0,
                j = this.tokens.currentIndex() - 1;
            for (;;) {
                if (j < 0)
                    throw new Error('Reached the start of the code while finding the start of the access chain.');
                if (this.tokens.tokens[j].isOptionalChainStart ? i-- : this.tokens.tokens[j].isOptionalChainEnd && i++, i < 0)
                    return !1;
                if (0 === i && null != this.tokens.tokens[j].subscriptStartIndex)
                    return this.tokens.tokens[j - 1].type === f.TokenType._super;
                j--;
            }
        }
        constructor(i, j) {
            super(), this.tokens = i, this.nameManager = j;
        }
    }
}), c.register('l7IuJ', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('SGA4o'),
        g = c('PmE4s'),
        h = c('7q5Ai');
    class _i extends h.default {
        process() {
            const j = this.tokens.currentIndex();
            if ('createReactClass' === this.tokens.identifierName()) {
                const k = this.importProcessor && this.importProcessor.getIdentifierReplacement('createReactClass');
                return k ? this.tokens.replaceToken(`(0, ${ k })`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(j), !0;
            }
            if (this.tokens.matches3(g.TokenType.name, g.TokenType.dot, g.TokenType.name) && 'React' === this.tokens.identifierName() && 'createClass' === this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2)) {
                const k = this.importProcessor && this.importProcessor.getIdentifierReplacement('React') || 'React';
                return k ? (this.tokens.replaceToken(k), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(j), !0;
            }
            return !1;
        }
        tryProcessCreateClassCall(j) {
            const k = this.findDisplayName(j);
            k && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(g.TokenType.parenL), this.tokens.copyExpectedToken(g.TokenType.braceL), this.tokens.appendCode(`displayName: '${ k }',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(g.TokenType.braceR), this.tokens.copyExpectedToken(g.TokenType.parenR));
        }
        findDisplayName(j) {
            return j < 2 ? null : this.tokens.matches2AtIndex(j - 2, g.TokenType.name, g.TokenType.eq) || j >= 2 && this.tokens.tokens[j - 2].identifierRole === f.IdentifierRole.ObjectKey ? this.tokens.identifierNameAtIndex(j - 2) : this.tokens.matches2AtIndex(j - 2, g.TokenType._export, g.TokenType._default) ? this.getDisplayNameFromFilename() : null;
        }
        getDisplayNameFromFilename() {
            const j = (this.options.filePath || 'unknown').split('/'),
                k = j[j.length - 1],
                l = k.lastIndexOf('.'),
                m = -1 === l ? k : k.slice(0, l);
            return 'index' === m && j[j.length - 2] ? j[j.length - 2] : m;
        }
        classNeedsDisplayName() {
            let j = this.tokens.currentIndex();
            if (!this.tokens.matches2(g.TokenType.parenL, g.TokenType.braceL))
                return !1;
            const k = j + 1,
                l = this.tokens.tokens[k].contextId;
            if (null == l)
                throw new Error('Expected non-null context ID on object open-brace.');
            for (; j < this.tokens.tokens.length; j++) {
                const m = this.tokens.tokens[j];
                if (m.type === g.TokenType.braceR && m.contextId === l) {
                    j++;
                    break;
                }
                if ('displayName' === this.tokens.identifierNameAtIndex(j) && this.tokens.tokens[j].identifierRole === f.IdentifierRole.ObjectKey && m.contextId === l)
                    return !1;
            }
            if (j === this.tokens.tokens.length)
                throw new Error('Unexpected end of input when processing React class.');
            return this.tokens.matches1AtIndex(j, g.TokenType.parenR) || this.tokens.matches2AtIndex(j, g.TokenType.comma, g.TokenType.parenR);
        }
        constructor(j, k, l, m) {
            super(), this.rootTransformer = j, this.tokens = k, this.importProcessor = l, this.options = m;
        }
    }
}), c.register('Dr7C0', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('SGA4o'),
        g = c('7q5Ai');
    class _h extends g.default {
        __init() {
            this.extractedDefaultExportName = null;
        }
        setExtractedDefaultExportName(i) {
            this.extractedDefaultExportName = i;
        }
        getPrefixCode() {
            return '\n      (function () {\n        var enterModule = require(\'react-hot-loader\').enterModule;\n        enterModule && enterModule(module);\n      })();'.replace(/\s+/g, ' ').trim();
        }
        getSuffixCode() {
            const i = new Set();
            for (const j of this.tokens.tokens)
                !j.isType && (0, f.isTopLevelDeclaration)(j) && j.identifierRole !== f.IdentifierRole.ImportDeclaration && i.add(this.tokens.identifierNameForToken(j));
            const k = Array.from(i).map(i => ({
                variableName: i,
                uniqueLocalName: i
            }));
            return this.extractedDefaultExportName && k.push({
                variableName: this.extractedDefaultExportName,
                uniqueLocalName: 'default'
            }), `\n;(function () {\n  var reactHotLoader = require('react-hot-loader').default;\n  var leaveModule = require('react-hot-loader').leaveModule;\n  if (!reactHotLoader) {\n    return;\n  }\n${ k.map(({
                variableName: l,
                uniqueLocalName: m
            }) => `
            reactHotLoader.register($ {
                l
            }, "${ m }", $ {
                JSON.stringify(this.filePath || '')
            });
            `).join('\n') }\n  leaveModule(module);\n})();`;
        }
        process() {
            return !1;
        }
        constructor(i, j) {
            super(), this.tokens = i, this.filePath = j, _h.prototype.__init.call(this);
        }
    }
}), c.register('ylv8m', function(d, e) {
    b(d.exports, 'default', function() {
        return _i;
    });
    var f = c('PmE4s'),
        g = c('VrM0m'),
        h = c('7q5Ai');
    class _i extends h.default {
        process() {
            return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(f.TokenType._public) || this.tokens.matches1(f.TokenType._protected) || this.tokens.matches1(f.TokenType._private) || this.tokens.matches1(f.TokenType._abstract) || this.tokens.matches1(f.TokenType._readonly) || this.tokens.matches1(f.TokenType._override) || this.tokens.matches1(f.TokenType.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(f.TokenType._enum) || this.tokens.matches2(f.TokenType._const, f.TokenType._enum) ? (this.processEnum(), !0) : !(!this.tokens.matches2(f.TokenType._export, f.TokenType._enum) && !this.tokens.matches3(f.TokenType._export, f.TokenType._const, f.TokenType._enum)) && (this.processEnum(!0), !0));
        }
        processEnum(j = !1) {
            for (this.tokens.removeInitialToken(); this.tokens.matches1(f.TokenType._const) || this.tokens.matches1(f.TokenType._enum);)
                this.tokens.removeToken();
            const k = this.tokens.identifierName();
            this.tokens.removeToken(), j && !this.isImportsTransformEnabled && this.tokens.appendCode('export '), this.tokens.appendCode(`var ${ k }; (function (${ k })`), this.tokens.copyExpectedToken(f.TokenType.braceL), this.processEnumBody(k), this.tokens.copyExpectedToken(f.TokenType.braceR), j && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${ k } || (exports.${ k } = ${ k } = {}));`) : this.tokens.appendCode(`)(${ k } || (${ k } = {}));`);
        }
        processEnumBody(j) {
            let k = null;
            for (; !this.tokens.matches1(f.TokenType.braceR);) {
                const {
                    nameStringCode: l,
                    variableName: m
                } = this.extractEnumKeyInfo(this.tokens.currentToken());
                this.tokens.removeInitialToken(), this.tokens.matches3(f.TokenType.eq, f.TokenType.string, f.TokenType.comma) || this.tokens.matches3(f.TokenType.eq, f.TokenType.string, f.TokenType.braceR) ? this.processStringLiteralEnumMember(j, l, m) : this.tokens.matches1(f.TokenType.eq) ? this.processExplicitValueEnumMember(j, l, m) : this.processImplicitValueEnumMember(j, l, m, k), this.tokens.matches1(f.TokenType.comma) && this.tokens.removeToken(), k = null != m ? m : `${ j }[${ l }]`;
            }
        }
        extractEnumKeyInfo(j) {
            if (j.type === f.TokenType.name) {
                const k = this.tokens.identifierNameForToken(j);
                return {
                    nameStringCode: `"${ k }"`,
                    variableName: (0, g.default)(k) ? k : null
                };
            }
            if (j.type === f.TokenType.string) {
                const k = this.tokens.stringValueForToken(j);
                return {
                    nameStringCode: this.tokens.code.slice(j.start, j.end),
                    variableName: (0, g.default)(k) ? k : null
                };
            }
            throw new Error('Expected name or string at beginning of enum element.');
        }
        processStringLiteralEnumMember(j, k, l) {
            null != l ? (this.tokens.appendCode(`const ${ l }`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${ j }[${ k }] = ${ l };`)) : (this.tokens.appendCode(`${ j }[${ k }]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(';'));
        }
        processExplicitValueEnumMember(j, k, l) {
            const m = this.tokens.currentToken().rhsEndIndex;
            if (null == m)
                throw new Error('Expected rhsEndIndex on enum assign.');
            if (null != l) {
                for (this.tokens.appendCode(`const ${ l }`), this.tokens.copyToken(); this.tokens.currentIndex() < m;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(`; ${ j }[${ j }[${ k }] = ${ l }] = ${ k };`);
            } else {
                for (this.tokens.appendCode(`${ j }[${ j }[${ k }]`), this.tokens.copyToken(); this.tokens.currentIndex() < m;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(`] = ${ k };`);
            }
        }
        processImplicitValueEnumMember(j, k, l, m) {
            let n = null != m ? `${ m } + 1` : '0';
            null != l && (this.tokens.appendCode(`const ${ l } = ${ n }; `), n = l), this.tokens.appendCode(`${ j }[${ j }[${ k }] = ${ n }] = ${ k };`);
        }
        constructor(j, k, l) {
            super(), this.rootTransformer = j, this.tokens = k, this.isImportsTransformEnabled = l;
        }
    }
}), c.register('VrM0m', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('l+GFY');
    const g = new Set([
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

    function _h(i) {
        if (0 === i.length)
            return !1;
        if (!f.IS_IDENTIFIER_START[i.charCodeAt(0)])
            return !1;
        for (let j = 1; j < i.length; j++)
            if (!f.IS_IDENTIFIER_CHAR[i.charCodeAt(j)])
                return !1;
        return !g.has(i);
    }
}), c.register('9XITR', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('skyJG'),
        g = c('PmE4s');

    function _h(i, j) {
        if (0 === j.length)
            return '';
        const k = Object.keys(j[0]).filter(i => 'type' !== i && 'value' !== i && 'start' !== i && 'end' !== i && 'loc' !== i),
            l = Object.keys(j[0].type).filter(i => 'label' !== i && 'keyword' !== i),
            m = [
                'Location',
                'Label',
                'Raw',
                ...k,
                ...l
            ],
            n = new(0, f.default)(i),
            o = [
                m,
                ...j.map(function(p) {
                    const q = i.slice(p.start, p.end);
                    return [
                        (m = p.start, n = p.end, `${ _t(m) }-${ _t(n) }`),
                        (0, g.formatTokenType)(p.type),
                        _i(String(q), 14),
                        ...k.map(i => _s(p[i], i)),
                        ...l.map(i => _s(p.type[i], i))
                    ];
                    var r, s;
                })
            ],
            p = m.map(() => 0);
        for (const q of o)
            for (let r = 0; r < q.length; r++)
                p[r] = Math.max(p[r], q[r].length);
        return o.map(q => q.map((q, r) => q.padEnd(p[r])).join(' ')).join('\n');

        function _s(t, u) {
            return !0 === t ? u : !1 === t || null === t ? '' : String(t);
        }

        function _t(u) {
            const v = n.locationForIndex(u);
            return v ? `${ v.line + 1 }:${ v.column + 1 }` : 'Unknown';
        }
    }

    function _i(j, k) {
        return j.length > k ? `${ j.slice(0, k - 3) }...` : j;
    }
}), c.register('skyJG', function(d, e) {
    var f;
    b(d.exports, 'default', function() {
        return f;
    }, function(g) {
        return f = g;
    });
    var g = '\n',
        h = function() {
            function i(j) {
                this.string = j;
                for (var k = [0], l = 0; l < j.length;)
                    switch (j[l]) {
                        case g:
                            l += g.length, k.push(l);
                            break;
                        case '\r':
                            j[l += '\r'.length] === g && (l += g.length), k.push(l);
                            break;
                        default:
                            l++;
                    }
                this.offsets = k;
            }
            return i.prototype.locationForIndex = function(j) {
                if (j < 0 || j > this.string.length)
                    return null;
                for (var k = 0, l = this.offsets; l[k + 1] <= j;)
                    k++;
                return {
                    line: k,
                    column: j - l[k]
                };
            }, i.prototype.indexForLocation = function(j) {
                var k = j.line,
                    l = j.column;
                return k < 0 || k >= this.offsets.length || l < 0 || l > this.lengthOfLine(k) ? null : this.offsets[k] + l;
            }, i.prototype.lengthOfLine = function(j) {
                var k = this.offsets[j];
                return (j === this.offsets.length - 1 ? this.string.length : this.offsets[j + 1]) - k;
            }, i;
        }();
    f = h;
}), c.register('kEa05', function(d, e) {
    b(d.exports, 'default', function() {
        return _h;
    });
    var f = c('PmE4s'),
        g = c('Beerk');

    function _h(i) {
        const j = new Set();
        for (let k = 0; k < i.tokens.length; k++)
            i.matches1AtIndex(k, f.TokenType._import) && !i.matches3AtIndex(k, f.TokenType._import, f.TokenType.name, f.TokenType.eq) && _i(i, k, j);
        return j;
    }

    function _i(j, k, l) {
        k++, j.matches1AtIndex(k, f.TokenType.parenL) || (j.matches1AtIndex(k, f.TokenType.name) && (l.add(j.identifierNameAtIndex(k)), k++, j.matches1AtIndex(k, f.TokenType.comma) && k++), j.matches1AtIndex(k, f.TokenType.star) && (k += 2, l.add(j.identifierNameAtIndex(k)), k++), j.matches1AtIndex(k, f.TokenType.braceL) && function(m, n, o) {
            for (;;) {
                if (m.matches1AtIndex(n, f.TokenType.braceR))
                    return;
                const p = (0, g.default)(m, n);
                if (n = p.endIndex, p.isType || o.add(p.rightName), m.matches2AtIndex(n, f.TokenType.comma, f.TokenType.braceR))
                    return;
                if (m.matches1AtIndex(n, f.TokenType.braceR))
                    return;
                if (!m.matches1AtIndex(n, f.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(m.tokens[n]) }`);
                n++;
            }
        }(j, ++k, l));
    }
}), c.register('GAMly', function(d, e) {
    b(d.exports, 'CallAction', function() {
        return _h;
    });
    var f = c('fI6of'),
        g = c('heTaO');
    const _h = (i = '') => {
        var j, k;
        const l = null === (j = f.default.me.deviceUI.current) || void 0 === j ? void 0 : j.deviceId;
        if (!l)
            return;
        const m = (0, g.default)().worldManager.devices.getDeviceById(l);
        m && (null === (k = m.callAction) || void 0 === k || k.call(m, i));
    };
}), c.register('/SQrB', function(d, e) {
    b(d.exports, 'usePropertyValue', function() {
        return _i;
    });
    var f = c('fI6of'),
        g = c('JkQCT'),
        h = c('O0Kav');
    const _i = b => {
        var j;
        const [k, l] = a(h).useState(null !== (j = f.default.me.properties.get(b)) && void 0 !== j ? j : '');
        return (0, h.useEffect)(() => (0, g.reaction)(() => f.default.me.properties.get(b), a => {
            l(a + '');
        }), [b]), k;
    };
}), c.register('sZQJz', function(d, e) {
    b(d.exports, 'useItemAmount', function() {
        return _i;
    });
    var f = c('fI6of'),
        g = c('JkQCT'),
        h = c('O0Kav');
    const _i = b => {
        var j, k;
        const [l, m] = a(h).useState(null !== (k = null === (j = f.default.me.inventory.slots.get(b)) || void 0 === j ? void 0 : j.amount) && void 0 !== k ? k : 0);
        return (0, h.useEffect)(() => {
            const n = (0, g.reaction)(() => {
                var o;
                return null === (o = f.default.me.inventory.slots.get(b)) || void 0 === o ? void 0 : o.amount;
            }, n => {
                m(n);
            });
            return n;
        }, [b]), l;
    };
});