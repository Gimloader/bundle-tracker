function a(b) {
    return b && b.__esModule ? b.default : b;
}

function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('C2gQA', function(b, c) {
    _s(b.exports, 'LiveProvider', function() {
        return _B;
    }), _s(b.exports, 'LiveEditor', function() {
        return _C;
    }), _s(b.exports, 'LiveError', function() {
        return _C;
    }), _s(b.exports, 'LivePreview', function() {
        return _C;
    });
    var d = a('CQbp4'),
        e = a('LEQ5w'),
        f = a('oRCKv'),
        g = a('0hzx+'),
        h = (a('LEQ5w'), a('LEQ5w'), a('LEQ5w'), a('cMZnX')),
        i = (a('LEQ5w'), a('0hzx+'), a('0hzx+'), a('LEQ5w'), a('0hzx+'), a('LEQ5w'), a('0hzx+'), e = a('LEQ5w'), a('0hzx+'), g = a('0hzx+'), Object.defineProperty),
        j = Object.defineProperties,
        k = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable,
        o = (_x, _s, a) => _s in _x ? i(_x, _s, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : _x[_s] = a,
        p = (_x, _s) => {
            for (var q in _s || (_s = {}))
                m.call(_s, q) && o(_x, q, _s[q]);
            if (l)
                for (var r of l(_s))
                    n.call(_s, r) && o(_x, r, _s[r]);
            return _x;
        },
        q = (_x, _s) => j(_x, k(_s)),
        r = _x => {
            const {
                tabMode: _s = 'indentation'
            } = _x, t = (0, e.useRef)(null), [u, v] = (0, e.useState)(_x.code || ''), {
                theme: w
            } = _x;
            return (0, e.useEffect)(() => {
                v(_x.code);
            }, [_x.code]), (0, f.useEditable)(t, _x => v(_x.slice(0, -1)), {
                disabled: _x.disabled,
                indentation: 'indentation' === _s ? 2 : void 0
            }), (0, e.useEffect)(() => {
                _x.onChange && _x.onChange(u);
            }, [u]), (0, g.jsx)('div', {
                className: _x.className,
                style: _x.style,
                children: (0, g.jsx)(d.Highlight, {
                    code: u,
                    theme: _x.theme || d.themes.nightOwl,
                    language: _x.language,
                    children: ({
                        className: _x,
                        tokens: y,
                        getLineProps: z,
                        getTokenProps: A,
                        style: B
                    }) => (0, g.jsx)('pre', {
                        className: _x,
                        style: p(p({
                            margin: 0,
                            outline: 'none',
                            padding: 10,
                            fontFamily: 'inherit'
                        }, w && 'object' == typeof w.plain ? w.plain : {}), B),
                        ref: t,
                        spellCheck: 'false',
                        children: y.map((_x, y) => (0, g.jsxs)('span', q(p({}, z({
                            line: _x
                        })), {
                            children: [
                                _x.filter(_x => !_x.empty).map((_x, y) => (0, g.jsx)('span', p({}, A({
                                    token: _x
                                })), `token-${ y }`)),
                                '\n'
                            ]
                        }), `line-${ y }`))
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
    var u = (_C, a) => class extends e.Component {
            componentDidCatch(v) {
                a(v);
            }
            render() {
                return 'function' == typeof _C ? (0, g.jsx)(_C, {}) : _D(e).isValidElement(_C) ? _C : null;
            }
        },
        v = (_D, _C) => {
            const w = Object.keys(_C),
                x = w.map(_D => _C[_D]);
            return new Function(...w, _D)(...x);
        };
    var w = 'const _jsxFileName = "";',
        x = _D => _D.trim().replace(/;$/, ''),
        y = _D => _D.replace(w, '').trim(),
        z = _D => w + _D,
        A = _D => `return (${ _D })`;
    var _B = function({
        children: _C,
        code: D = '',
        language: E = 'tsx',
        theme: F,
        enableTypeScript: G = !0,
        disabled: H = !1,
        scope: I,
        transformCode: J,
        noInline: K = !1
    }) {
        const [L, M] = (0, e.useState)({
            error: void 0,
            element: void 0
        });

        function N(O) {
            return D = this, E = null, F = function*() {
                const P = _D => {
                    M({
                        error: _D.toString(),
                        element: void 0
                    });
                };
                try {
                    const Q = J ? J(O) : O;
                    try {
                        const R = yield Promise.resolve(Q), S = _D => M({
                            error: void 0,
                            element: _D
                        });
                        if ('string' != typeof R)
                            throw new Error('Code failed to transform');
                        const T = {
                            code: R,
                            scope: I,
                            enableTypeScript: G
                        };
                        K ? (M({
                            error: void 0,
                            element: null
                        }), (({
                            code: U = '',
                            scope: V = {},
                            enableTypeScript: W = !0
                        }, S, G) => {
                            if (!/render\s*\(/.test(U))
                                return G(new SyntaxError('No-Inline evaluations must call `render`.'));
                            const X = [
                                'jsx',
                                'imports'
                            ];
                            W && X.splice(1, 0, 'typescript'), v(_v({
                                transforms: X
                            })(U), q(p({
                                React: _D(e)
                            }, V), {
                                render: _D => {
                                    void 0 === _D ? G(new SyntaxError('`render` must be called with valid JSX.')) : S(u(_D, G));
                                }
                            }));
                        })(T, S, V)) : S((({
                            code: X = '',
                            scope: Y = {},
                            enableTypeScript: Z = !0
                        }, S) => {
                            const $ = ['jsx'];
                            Z && $.push('typescript');
                            const ab = function(..._D) {
                                return _D.reduce((_D, X) => (...Y) => _D(X(...Y)));
                            }(z, _v({
                                transforms: ['imports']
                            }), y, x, _v({
                                transforms: $
                            }), A, x)(X);
                            return u(v(ab, p({
                                React: _D(e)
                            }, Y)), S);
                        })(T, Y));
                    } catch (_D) {
                        return P(_D);
                    }
                } catch (_D) {
                    return P(_D), Promise.resolve();
                }
            }, new Promise((_D, O) => {
                var P = _D => {
                        try {
                            H(F.next(_D));
                        } catch (_D) {
                            O(_D);
                        }
                    },
                    Q = _D => {
                        try {
                            H(F.throw(_D));
                        } catch (_D) {
                            O(_D);
                        }
                    },
                    R = O => O.done ? _D(O.value) : Promise.resolve(O.value).then(P, Q);
                R((F = F.apply(D, E)).next());
            });
            var P, Q, R;
        }
        const N = _D => M({
            error: _D.toString()
        });
        return (0, e.useEffect)(() => {
            m(D).catch(N);
        }, [
            D,
            I,
            K,
            J
        ]), (0, g.jsx)(s.Provider, {
            value: q(p({}, L), {
                code: D,
                language: E,
                theme: F,
                disabled: H,
                onError: N,
                onChange: _D => {
                    m(_D).catch(N);
                }
            }),
            children: _C
        });
    };

    function _C(_D) {
        const {
            code: E,
            language: F,
            theme: G,
            disabled: H,
            onChange: I
        } = (0, e.useContext)(s);
        return (0, g.jsx)(r, p({
            theme: G,
            code: E,
            language: F,
            disabled: H,
            onChange: I
        }, _D));
    }

    function _C(D) {
        const {
            error: E
        } = (0, e.useContext)(s);
        return E ? (0, g.jsx)('pre', q(p({}, D), {
            children: E
        })) : null;
    }
    var _C = function(D) {
        var E = D,
            {
                Component: F = 'div'
            } = E,
            G = ((D, E) => {
                var H = {};
                for (var I in D)
                    m.call(D, I) && E.indexOf(I) < 0 && (H[I] = D[I]);
                if (null != D && l)
                    for (var J of l(D))
                        E.indexOf(J) < 0 && n.call(D, J) && (H[J] = D[J]);
                return H;
            })(E, ['Component']);
        const {
            element: H
        } = (0, e.useContext)(s);
        return (0, g.jsx)(F, q(p({}, G), {
            children: H ? (0, g.jsx)(H, {}) : null
        }));
    };
}), a.register('CQbp4', function(b, c) {
    _C(b.exports, 'themes', function() {
        return _eb;
    }), _C(b.exports, 'Highlight', function() {
        return _jb;
    });
    var d, e, f, g, h, i, j, k = a('LEQ5w'),
        l = (a('LEQ5w'), a('LEQ5w'), a('EM8VP')),
        m = (a('LEQ5w'), l = a('EM8VP'), k = a('LEQ5w'), Object.create),
        n = Object.defineProperty,
        o = Object.defineProperties,
        p = Object.getOwnPropertyDescriptor,
        q = Object.getOwnPropertyDescriptors,
        r = Object.getOwnPropertyNames,
        s = Object.getOwnPropertySymbols,
        t = Object.getPrototypeOf,
        u = Object.prototype.hasOwnProperty,
        _v = Object.prototype.propertyIsEnumerable,
        w = (b, _C, a) => _C in b ? n(b, _C, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : b[_C] = a,
        x = (b, _C) => {
            for (var y in _C || (_C = {}))
                u.call(_C, y) && w(b, y, _C[y]);
            if (s)
                for (var z of s(_C))
                    _v.call(_C, z) && w(b, z, _C[z]);
            return b;
        },
        y = (b, _C) => o(b, q(_C)),
        z = (b, _C) => {
            var A = {};
            for (var B in b)
                u.call(b, B) && _C.indexOf(B) < 0 && (A[B] = b[B]);
            if (null != b && s)
                for (var C of s(b))
                    _C.indexOf(C) < 0 && _v.call(b, C) && (A[C] = b[C]);
            return A;
        },
        A = (d = {
            '../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js'(B, _C) {
                var D = function() {
                    var E = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                        F = 0,
                        G = {},
                        H = {
                            util: {
                                encode: function E(I) {
                                    return I instanceof d ? new d(I.type, E(I.content), I.alias) : Array.isArray(I) ? I.map(E) : I.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                                },
                                type: function(I) {
                                    return Object.prototype.toString.call(I).slice(8, -1);
                                },
                                objId: function(I) {
                                    return I.__id || Object.defineProperty(I, '__id', {
                                        value: ++F
                                    }), I.__id;
                                },
                                clone: function E(I, J) {
                                    var K, L;
                                    switch (J = J || {}, H.util.type(I)) {
                                        case 'Object':
                                            if (L = H.util.objId(I), J[L])
                                                return J[L];
                                            for (var M in (K = {}, J[L] = K, I))
                                                I.hasOwnProperty(M) && (K[M] = E(I[M], J));
                                            return K;
                                        case 'Array':
                                            return L = H.util.objId(I), J[L] ? J[L] : (K = [], J[L] = K, I.forEach(function(N, O) {
                                                K[O] = E(N, J);
                                            }), K);
                                        default:
                                            return I;
                                    }
                                },
                                getLanguage: function(I) {
                                    for (; I;) {
                                        var J = E.exec(I.className);
                                        if (J)
                                            return J[1].toLowerCase();
                                        I = I.parentElement;
                                    }
                                    return 'none';
                                },
                                setLanguage: function(I, J) {
                                    I.className = I.className.replace(RegExp(E, 'gi'), ''), I.classList.add('language-' + J);
                                },
                                isActive: function(I, J, K) {
                                    for (var L = 'no-' + J; I;) {
                                        var M = I.classList;
                                        if (M.contains(J))
                                            return !0;
                                        if (M.contains(L))
                                            return !1;
                                        I = I.parentElement;
                                    }
                                    return !!K;
                                }
                            },
                            languages: {
                                plain: G,
                                plaintext: G,
                                text: G,
                                txt: G,
                                extend: function(I, J) {
                                    var K = H.util.clone(H.languages[I]);
                                    for (var L in J)
                                        K[L] = J[L];
                                    return K;
                                },
                                insertBefore: function(I, J, K, L) {
                                    var M = (L = L || H.languages)[I],
                                        N = {};
                                    for (var O in M)
                                        if (M.hasOwnProperty(O)) {
                                            if (O == J)
                                                for (var P in K)
                                                    K.hasOwnProperty(P) && (N[P] = K[P]);
                                            K.hasOwnProperty(O) || (N[O] = M[O]);
                                        }
                                    var P = L[I];
                                    return L[I] = N, H.languages.DFS(H.languages, function(Q, R) {
                                        R === P && Q != I && (this[Q] = N);
                                    }), N;
                                },
                                DFS: function E(I, J, K, L) {
                                    L = L || {};
                                    var M = H.util.objId;
                                    for (var N in I)
                                        if (I.hasOwnProperty(N)) {
                                            J.call(I, N, I[N], K || N);
                                            var O = I[N],
                                                P = H.util.type(O);
                                            'Object' !== P || L[M(O)] ? 'Array' !== P || L[M(O)] || (L[M(O)] = !0, E(O, J, N, L)) : (L[M(O)] = !0, E(O, J, null, L));
                                        }
                                }
                            },
                            plugins: {},
                            highlight: function(I, J, K) {
                                var L = {
                                    code: I,
                                    grammar: J,
                                    language: K
                                };
                                if (H.hooks.run('before-tokenize', L), !L.grammar)
                                    throw new Error('The language "' + L.language + '" has no grammar.');
                                return L.tokens = H.tokenize(L.code, L.grammar), H.hooks.run('after-tokenize', L), d.stringify(H.util.encode(L.tokens), L.language);
                            },
                            tokenize: function(I, J) {
                                var K = J.rest;
                                if (K) {
                                    for (var L in K)
                                        J[L] = K[L];
                                    delete J.rest;
                                }
                                var L = new g();
                                return h(L, L.head, I), f(I, L, J, L.head, 0),
                                    function(M) {
                                        for (var N = [], O = M.head.next; O !== M.tail;)
                                            N.push(O.value), O = O.next;
                                        return N;
                                    }(L);
                            },
                            hooks: {
                                all: {},
                                add: function(I, J) {
                                    var K = H.hooks.all;
                                    K[I] = K[I] || [], K[I].push(J);
                                },
                                run: function(I, J) {
                                    var K = H.hooks.all[I];
                                    if (K && K.length)
                                        for (var L, M = 0; L = K[M++];)
                                            L(J);
                                }
                            },
                            Token: d
                        };

                    function I(J, K, L, M) {
                        this.type = J, this.content = K, this.alias = L, this.length = 0 | (M || '').length;
                    }

                    function I(J, K, L, M) {
                        J.lastIndex = K;
                        var N = J.exec(L);
                        if (N && M && N[1]) {
                            var O = N[1].length;
                            N.index += O, N[0] = N[0].slice(O);
                        }
                        return N;
                    }

                    function I(J, K, L, M, N, O) {
                        for (var P in L)
                            if (L.hasOwnProperty(P) && L[P]) {
                                var Q = L[P];
                                Q = Array.isArray(Q) ? Q : [Q];
                                for (var R = 0; R < Q.length; ++R) {
                                    if (O && O.cause == P + ',' + R)
                                        return;
                                    var S = Q[R],
                                        T = S.inside,
                                        U = !!S.lookbehind,
                                        V = !!S.greedy,
                                        W = S.alias;
                                    if (V && !S.pattern.global) {
                                        var X = S.pattern.toString().match(/[imsuy]*$/)[0];
                                        S.pattern = RegExp(S.pattern.source, X + 'g');
                                    }
                                    for (var X = S.pattern || S, Y = M.next, Z = N; Y !== K.tail && !(O && Z >= O.reach); Z += Y.value.length, Y = Y.next) {
                                        var $ = Y.value;
                                        if (K.length > J.length)
                                            return;
                                        if (!($ instanceof d)) {
                                            var ab, bb = 1;
                                            if (V) {
                                                if (!(ab = e(X, Z, J, U)) || ab.index >= J.length)
                                                    break;
                                                var cb = ab.index,
                                                    db = ab.index + ab[0].length,
                                                    _eb = Z;
                                                for (_eb += Y.value.length; cb >= _eb;)
                                                    _eb += (Y = Y.next).value.length;
                                                if (Z = _eb -= Y.value.length, Y.value instanceof d)
                                                    continue;
                                                for (var fb = Y; fb !== K.tail && (_eb < db || 'string' == typeof fb.value); fb = fb.next)
                                                    bb++, _eb += fb.value.length;
                                                bb--, $ = J.slice(Z, _eb), ab.index -= Z;
                                            } else if (!(ab = e(X, 0, $, U)))
                                                continue;
                                            A = ab.index;
                                            var cb = ab[0],
                                                db = $.slice(0, A),
                                                eb = $.slice(A + cb.length),
                                                fb = Z + $.length;
                                            O && fb > O.reach && (O.reach = fb);
                                            var gb = Y.prev;
                                            if (db && (gb = h(K, gb, db), Z += db.length), i(K, gb, bb), Y = h(K, gb, new d(P, T ? H.tokenize(cb, T) : cb, W, cb)), eb && h(K, Y, eb), bb > 1) {
                                                var hb = {
                                                    cause: P + ',' + R,
                                                    reach: fb
                                                };
                                                I(J, K, L, Y.prev, Z, hb), O && hb.reach > O.reach && (O.reach = hb.reach);
                                            }
                                        }
                                    }
                                }
                            }
                    }

                    function I() {
                        var J = {
                                value: null,
                                prev: null,
                                next: null
                            },
                            K = {
                                value: null,
                                prev: J,
                                next: null
                            };
                        J.next = K, this.head = J, this.tail = K, this.length = 0;
                    }

                    function I(J, K, L) {
                        var M = K.next,
                            N = {
                                value: L,
                                prev: K,
                                next: M
                            };
                        return K.next = N, M.prev = N, J.length++, N;
                    }

                    function I(J, K, L) {
                        for (var M = K.next, N = 0; N < L && M !== J.tail; N++)
                            M = M.next;
                        K.next = M, M.prev = K, J.length -= N;
                    }
                    return d.stringify = function E(I, J) {
                        if ('string' == typeof I)
                            return I;
                        if (Array.isArray(I)) {
                            var K = '';
                            return I.forEach(function(L) {
                                K += E(L, J);
                            }), K;
                        }
                        var K = {
                                type: I.type,
                                content: E(I.content, J),
                                tag: 'span',
                                classes: [
                                    'token',
                                    I.type
                                ],
                                attributes: {},
                                language: J
                            },
                            L = I.alias;
                        L && (Array.isArray(L) ? Array.prototype.push.apply(K.classes, L) : K.classes.push(L)), H.hooks.run('wrap', K);
                        var M = '';
                        for (var N in K.attributes)
                            M += ' ' + N + '="' + (K.attributes[N] || '').replace(/"/g, '&quot;') + '"';
                        return '<' + K.tag + ' class="' + K.classes.join(' ') + '"' + M + '>' + K.content + '</' + K.tag + '>';
                    }, H;
                }();
                _C.exports = D, D.default = D;
            }
        }, function() {
            return e || (0, d[r(d)[0]])((e = {
                exports: {}
            }).exports, e), e.exports;
        }),
        B = ((b, _D, a) => (a = null != b ? m(t(b)) : {}, ((b, _D, a, c) => {
            if (_D && 'object' == typeof _D || 'function' == typeof _D)
                for (let C of r(_D))
                    u.call(b, C) || C === a || n(b, C, {
                        get: () => _D[C],
                        enumerable: !(c = p(_D, C)) || c.enumerable
                    });
            return b;
        })(!_D && b && b.__esModule ? a : n(a, 'default', {
            value: b,
            enumerable: !0
        }), b)))(A());
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
        }, B.languages.markup.tag.inside['attr-value'].inside.entity = B.languages.markup.entity, B.languages.markup.doctype.inside['internal-subset'].inside = B.languages.markup, B.hooks.add('wrap', function(C) {
            'entity' === C.type && (C.attributes.title = C.content.replace(/&amp;/, '&'));
        }), Object.defineProperty(B.languages.markup.tag, 'addInlined', {
            value: function(C, _D) {
                var E;
                (_D = ((E = ((E = {})['language-' + _D] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: B.languages[_D]
                }, E.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                    'included-cdata': {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: E
                    }
                }))['language-' + _D] = {
                    pattern: /[\s\S]+/,
                    inside: B.languages[_D]
                }, {}))[C] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                        return C;
                    }), 'i'),
                    lookbehind: !0,
                    greedy: !0,
                    inside: E
                }, B.languages.insertBefore('markup', 'cdata', _D);
            }
        }), Object.defineProperty(B.languages.markup.tag, 'addAttribute', {
            value: function(C, D) {
                B.languages.markup.tag.inside['special-attr'].push({
                    pattern: RegExp(/(^|["'\s])/.source + '(?:' + C + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
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
                                        D,
                                        'language-' + D
                                    ],
                                    inside: B.languages[D]
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
        function(C) {
            var D = /#(?!\{).+/,
                E = {
                    pattern: /#\{[^}]+\}/,
                    alias: 'variable'
                };
            C.languages.coffeescript = C.languages.extend('javascript', {
                comment: D,
                string: [{
                        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                        greedy: !0
                    },
                    {
                        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                        greedy: !0,
                        inside: {
                            interpolation: E
                        }
                    }
                ],
                keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                'class-member': {
                    pattern: /@(?!\d)\w+/,
                    alias: 'variable'
                }
            }), C.languages.insertBefore('coffeescript', 'comment', {
                'multiline-comment': {
                    pattern: /###[\s\S]+?###/,
                    alias: 'comment'
                },
                'block-regex': {
                    pattern: /\/{3}[\s\S]*?\/{3}/,
                    alias: 'regex',
                    inside: {
                        comment: D,
                        interpolation: E
                    }
                }
            }), C.languages.insertBefore('coffeescript', 'string', {
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
                            inside: C.languages.javascript
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
                            interpolation: E
                        }
                    }
                ]
            }), C.languages.insertBefore('coffeescript', 'keyword', {
                property: /(?!\d)\w+(?=\s*:(?!:))/
            }), delete C.languages.coffeescript['template-string'], C.languages.coffee = C.languages.coffeescript;
        }(B),
        function(C) {
            var D = C.languages.javadoclike = {
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
            Object.defineProperty(D, 'addSupport', {
                value: function(E, F) {
                    (E = 'string' == typeof E ? [E] : E).forEach(function(G) {
                        var H = function(I) {
                                I.inside || (I.inside = {}), I.inside.rest = F;
                            },
                            I = 'doc-comment';
                        if (e = C.languages[G]) {
                            var J, K = J[I];
                            if ((K = K || (J = C.languages.insertBefore(G, 'comment', {
                                    'doc-comment': {
                                        pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                        lookbehind: !0,
                                        alias: 'comment'
                                    }
                                }))[I]) instanceof RegExp && (K = J[I] = {
                                    pattern: K
                                }), Array.isArray(K))
                                for (var L = 0, M = K.length; L < M; L++)
                                    K[L] instanceof RegExp && (K[L] = {
                                        pattern: K[L]
                                    }), H(K[L]);
                            else
                                H(K);
                        }
                    });
                }
            }), D.addSupport([
                'java',
                'javascript',
                'php'
            ], D);
        }(B),
        function(C) {
            var D = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            (D = (C.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + D.source + ')*?' + /(?:;|(?=\s*\{))/.source),
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
                    pattern: RegExp('\\burl\\((?:' + D.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp('^' + D.source + '$'),
                            alias: 'url'
                        }
                    }
                },
                selector: {
                    pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + D.source + ')*(?=\\s*\\{)'),
                    lookbehind: !0
                },
                string: {
                    pattern: D,
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
            }, C.languages.css.atrule.inside.rest = C.languages.css, C.languages.markup)) && (D.tag.addInlined('style', 'css'), D.tag.addAttribute('style', 'css'));
        }(B),
        function(C) {
            var D = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                E = (D = (C.languages.css.selector = {
                    pattern: C.languages.css.selector.pattern,
                    lookbehind: !0,
                    inside: D = {
                        'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        'pseudo-class': /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: RegExp('\\[(?:[^[\\]"\']|' + D.source + ')*\\]'),
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
                                    D,
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
                }, C.languages.css.atrule.inside['selector-function-argument'].inside = D, C.languages.insertBefore('css', 'property', {
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
            C.languages.insertBefore('css', 'function', {
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
                            unit: D,
                            number: E,
                            function: /[\w-]+(?=\()/,
                            punctuation: /[(),]/
                        }
                    }
                ],
                entity: /\\[\da-f]{1,8}/i,
                unit: D,
                number: E
            });
        }(B),
        function(C) {
            var D = /[*&][^\s[\]{},]+/,
                E = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                F = '(?:' + E.source + '(?:[ \t]+' + D.source + ')?|' + D.source + '(?:[ \t]+' + E.source + ')?)',
                G = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                }),
                H = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

            function I(J, K) {
                K = (K || '').replace(/m/g, '') + 'm';
                var L = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
                    return F;
                }).replace(/<<value>>/g, function() {
                    return J;
                });
                return RegExp(L, K);
            }
            C.languages.yaml = {
                scalar: {
                    pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
                        return F;
                    })),
                    lookbehind: !0,
                    alias: 'string'
                },
                comment: /#.*/,
                key: {
                    pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
                        return F;
                    }).replace(/<<key>>/g, function() {
                        return '(?:' + G + '|' + H + ')';
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
                    pattern: f(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                    lookbehind: !0,
                    alias: 'number'
                },
                boolean: {
                    pattern: f(/false|true/.source, 'i'),
                    lookbehind: !0,
                    alias: 'important'
                },
                null: {
                    pattern: f(/null|~/.source, 'i'),
                    lookbehind: !0,
                    alias: 'important'
                },
                string: {
                    pattern: f(H),
                    lookbehind: !0,
                    greedy: !0
                },
                number: {
                    pattern: f(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
                    lookbehind: !0
                },
                tag: E,
                important: D,
                punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
            }, C.languages.yml = C.languages.yaml;
        }(B),
        function(C) {
            var D = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

            function E(F) {
                return F = F.replace(/<inner>/g, function() {
                    return D;
                }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + F + ')');
            }
            var E = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                F = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
                    return E;
                }),
                G = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
                H = (C.languages.markdown = C.languages.extend('markup', {}), C.languages.insertBefore('markdown', 'prolog', {
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
                                inside: C.languages.yaml
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
                                        inside: C.languages.markdown
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
                                        inside: C.languages.markdown
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
                        pattern: a(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
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
                        pattern: a(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
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
                        pattern: a(/(~~?)(?:(?!~)<inner>)+\2/.source),
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
                        pattern: a(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
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
                ].forEach(function(I) {
                    [
                        'url',
                        'bold',
                        'italic',
                        'strike',
                        'code-snippet'
                    ].forEach(function(J) {
                        I !== J && (C.languages.markdown[I].inside.content.inside[J] = C.languages.markdown[J]);
                    });
                }), C.hooks.add('after-tokenize', function(I) {
                    'markdown' !== I.language && 'md' !== I.language || function I(J) {
                        if (J && 'string' != typeof J)
                            for (var K = 0, L = J.length; K < L; K++) {
                                var M, N = J[K];
                                'code' !== N.type ? I(N.content) : (M = N.content[1], N = N.content[3], M && N && 'code-language' === M.type && 'code-block' === N.type && 'string' == typeof M.content && (M = M.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'), M = 'language-' + (M = (/[a-z][\w-]*/i.exec(M) || [''])[0].toLowerCase()), N.alias ? 'string' == typeof N.alias ? N.alias = [
                                    N.alias,
                                    M
                                ] : N.alias.push(M) : N.alias = [M]));
                            }
                    }(I.tokens);
                }), C.hooks.add('wrap', function(I) {
                    if ('code-block' === I.type) {
                        for (var J = '', K = 0, L = I.classes.length; K < L; K++) {
                            var M = I.classes[K];
                            if (M = /language-(.+)/.exec(M)) {
                                J = M[1];
                                break;
                            }
                        }
                        var M, N = C.languages[J];
                        N ? I.content = C.highlight(I.content.replace(H, '').replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(O, P) {
                            var Q;
                            return '#' === (P = P.toLowerCase())[0] ? (Q = 'x' === P[1] ? parseInt(P.slice(2), 16) : Number(P.slice(1)), h(Q)) : g[P] || O;
                        }), N, J) : J && 'none' !== J && C.plugins.autoloader && (M = 'md-' + new Date().valueOf() + '-' + Math.floor(10000000000000000 * Math.random()), I.attributes.id = M, C.plugins.autoloader.loadLanguages(J, function() {
                            var O = document.getElementById(M);
                            O && (O.innerHTML = C.highlight(O.textContent, C.languages[J], J));
                        }));
                    }
                }), RegExp(C.languages.markup.tag.pattern.source, 'gi')),
                I = {
                    amp: '&',
                    lt: '<',
                    gt: '>',
                    quot: '"'
                },
                J = String.fromCodePoint || String.fromCharCode;
            C.languages.md = C.languages.markdown;
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
        }, B.hooks.add('after-tokenize', function(C) {
            if ('graphql' === C.language)
                for (var D = C.tokens.filter(function(E) {
                        return 'string' != typeof E && 'comment' !== E.type && 'scalar' !== E.type;
                    }), E = 0; E < D.length;) {
                    var F = D[E++];
                    if ('keyword' === F.type && 'mutation' === F.content) {
                        var G = [];
                        if (k([
                                'definition-mutation',
                                'punctuation'
                            ]) && '(' === j(1).content) {
                            E += 2;
                            var H = l(/^\($/, /^\)$/);
                            if (-1 === H)
                                continue;
                            for (; E < H; E++) {
                                var I = j(0);
                                'variable' === I.type && (m(I, 'variable-input'), G.push(I.content));
                            }
                            E = H + 1;
                        }
                        if (k([
                                'punctuation',
                                'property-query'
                            ]) && '{' === j(0).content && (E++, m(j(0), 'property-mutation'), 0 < G.length)) {
                            var H = l(/^\{$/, /^\}$/);
                            if (-1 !== H)
                                for (var I = E; I < H; I++) {
                                    var J = D[I];
                                    'variable' === J.type && 0 <= G.indexOf(J.content) && m(J, 'variable-input');
                                }
                        }
                    }
                }

            function D(E) {
                return _F[a + E];
            }

            function D(E, _F) {
                _F = _F || 0;
                for (var G = 0; G < E.length; G++) {
                    var H = j(G + _F);
                    if (!H || H.type !== E[G])
                        return;
                }
                return 1;
            }

            function D(E, F) {
                for (var G = 1, H = a; H < _F.length; H++) {
                    var I = _F[H],
                        J = I.content;
                    if ('punctuation' === I.type && 'string' == typeof J)
                        if (E.test(J))
                            G++;
                        else if (F.test(J) && 0 == --G)
                        return H;
                }
                return -1;
            }

            function D(E, _F) {
                var G = E.alias;
                G ? Array.isArray(G) || (E.alias = G = [G]) : E.alias = G = [], G.push(_F);
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
        function(C) {
            var D = C.languages.javascript['template-string'],
                E = D.pattern.source,
                F = D.inside.interpolation,
                G = F.inside['interpolation-punctuation'],
                H = F.pattern.source;

            function I(J, K) {
                if (C.languages[J])
                    return {
                        pattern: RegExp('((?:' + K + ')\\s*)' + E),
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            'template-punctuation': {
                                pattern: /^`|`$/,
                                alias: 'string'
                            },
                            'embedded-code': {
                                pattern: /[\s\S]+/,
                                alias: J
                            }
                        }
                    };
            }

            function I(J, K, L) {
                return J = {
                    code: J,
                    grammar: K,
                    language: L
                }, C.hooks.run('before-tokenize', J), J.tokens = C.tokenize(J.code, J.grammar), C.hooks.run('after-tokenize', J), J.tokens;
            }

            function I(J, K, L) {
                var M = C.tokenize(J, {
                        interpolation: {
                            pattern: RegExp(H),
                            lookbehind: !0
                        }
                    }),
                    N = 0,
                    O = {},
                    P = (M = g(M.map(function(Q) {
                        if ('string' == typeof Q)
                            return Q;
                        var R, S;
                        for (Q = Q.content; - 1 !== J.indexOf((S = N++, R = '___' + L.toUpperCase() + '_' + S + '___')););
                        return O[R] = Q, R;
                    }).join(''), K, L), Object.keys(O));
                return N = 0,
                    function J(Q) {
                        for (var R = 0; R < Q.length; R++) {
                            if (N >= P.length)
                                return;
                            var S, T, U, V, W, X, Y, Z = Q[R];
                            'string' == typeof Z || 'string' == typeof Z.content ? (S = P[N], -1 !== (Y = (X = 'string' == typeof Z ? Z : Z.content).indexOf(S)) && (++N, T = X.substring(0, Y), W = O[S], U = void 0, (V = {})['interpolation-punctuation'] = G, 3 === (V = C.tokenize(W, V)).length && ((U = [
                                1,
                                1
                            ]).push.apply(U, g(V[1], C.languages.javascript, 'javascript')), V.splice.apply(V, U)), U = new C.Token('interpolation', V, F.alias, W), V = X.substring(Y + S.length), W = [], T && W.push(T), W.push(U), V && (J(X = [V]), W.push.apply(W, X)), 'string' == typeof Z ? (Q.splice.apply(Q, [
                                R,
                                1
                            ].concat(W)), R += W.length - 1) : Z.content = W)) : (Y = Z.content, Array.isArray(Y) ? J(Y) : J([Y]));
                        }
                    }(M), new C.Token(L, M, 'language-' + L, J);
            }
            C.languages.javascript['template-string'] = [
                f('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),
                f('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
                f('svg', /\bsvg/.source),
                f('markdown', /\b(?:markdown|md)/.source),
                f('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
                f('sql', /\bsql/.source),
                D
            ].filter(Boolean);
            var I = {
                javascript: !0,
                js: !0,
                typescript: !0,
                ts: !0,
                jsx: !0,
                tsx: !0
            };

            function J(K) {
                return 'string' == typeof K ? K : Array.isArray(K) ? K.map(J).join('') : J(K.content);
            }
            C.hooks.add('after-tokenize', function(J) {
                J.language in I && function J(K) {
                    for (var L = 0, M = K.length; L < M; L++) {
                        var N, O, P, Q = K[L];
                        'string' != typeof Q && (N = Q.content, Array.isArray(N) ? 'template-string' === Q.type ? (Q = N[1], 3 === N.length && 'string' != typeof Q && 'embedded-code' === Q.type && (O = j(Q), Q = Q.alias, Q = Array.isArray(Q) ? Q[0] : Q, P = C.languages[Q]) && (N[1] = h(O, P, Q))) : J(N) : 'string' != typeof N && J([N]));
                    }
                }(J.tokens);
            });
        }(B),
        function(C) {
            C.languages.typescript = C.languages.extend('javascript', {
                'class-name': {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
            }), C.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete C.languages.typescript.parameter, delete C.languages.typescript['literal-property'];
            var D = C.languages.extend('typescript', {});
            delete D['class-name'], C.languages.typescript['class-name'].inside = D, C.languages.insertBefore('typescript', 'function', {
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
                            inside: D
                        }
                    }
                }
            }), C.languages.ts = C.languages.typescript;
        }(B),
        function(C) {
            var D = C.languages.javascript,
                E = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
                F = '(@(?:arg|argument|param|property)\\s+(?:' + E + '\\s+)?)';
            C.languages.jsdoc = C.languages.extend('javadoclike', {
                parameter: {
                    pattern: RegExp(F + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }
            }), C.languages.insertBefore('jsdoc', 'keyword', {
                'optional-parameter': {
                    pattern: RegExp(F + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
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
                            inside: D,
                            alias: 'language-javascript'
                        },
                        punctuation: /[=[\]]/
                    }
                },
                'class-name': [{
                        pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
                            return E;
                        })),
                        lookbehind: !0,
                        inside: {
                            punctuation: /\./
                        }
                    },
                    {
                        pattern: RegExp('(@[a-z]+\\s+)' + E),
                        lookbehind: !0,
                        inside: {
                            string: D.string,
                            number: D.number,
                            boolean: D.boolean,
                            keyword: C.languages.typescript.keyword,
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
                            inside: D,
                            alias: 'language-javascript'
                        }
                    }
                }
            }), C.languages.javadoclike.addSupport('javascript', C.languages.jsdoc);
        }(B),
        function(C) {
            C.languages.flow = C.languages.extend('javascript', {}), C.languages.insertBefore('flow', 'keyword', {
                type: [{
                    pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
                    alias: 'class-name'
                }]
            }), C.languages.flow['function-variable'].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete C.languages.flow.parameter, C.languages.insertBefore('flow', 'operator', {
                'flow-punctuation': {
                    pattern: /\{\||\|\}/,
                    alias: 'punctuation'
                }
            }), Array.isArray(C.languages.flow.keyword) || (C.languages.flow.keyword = [C.languages.flow.keyword]), C.languages.flow.keyword.unshift({
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
        function(C) {
            function D(E, F) {
                return RegExp(E.replace(/<ID>/g, function() {
                    return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
                }), F);
            }
            C.languages.insertBefore('javascript', 'function-variable', {
                'method-variable': {
                    pattern: RegExp('(\\.\\s*)' + C.languages.javascript['function-variable'].pattern.source),
                    lookbehind: !0,
                    alias: [
                        'function-variable',
                        'method',
                        'function',
                        'property-access'
                    ]
                }
            }), C.languages.insertBefore('javascript', 'function', {
                method: {
                    pattern: RegExp('(\\.\\s*)' + C.languages.javascript.function.source),
                    lookbehind: !0,
                    alias: [
                        'function',
                        'property-access'
                    ]
                }
            }), C.languages.insertBefore('javascript', 'constant', {
                'known-class-name': [{
                        pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                        alias: 'class-name'
                    },
                    {
                        pattern: /\b(?:[A-Z]\w*)Error\b/,
                        alias: 'class-name'
                    }
                ]
            }), C.languages.insertBefore('javascript', 'keyword', {
                imports: {
                    pattern: _D(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                    lookbehind: !0,
                    inside: C.languages.javascript
                },
                exports: {
                    pattern: _D(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                    lookbehind: !0,
                    inside: C.languages.javascript
                }
            }), C.languages.javascript.keyword.unshift({
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
            }), C.languages.insertBefore('javascript', 'operator', {
                spread: {
                    pattern: /\.{3}/,
                    alias: 'operator'
                },
                arrow: {
                    pattern: /=>/,
                    alias: 'operator'
                }
            }), C.languages.insertBefore('javascript', 'punctuation', {
                'property-access': {
                    pattern: _D(/(\.\s*)#?<ID>/.source),
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
                    G = C.languages.javascript[F];
                F = (G = 'RegExp' === C.util.type(G) ? C.languages.javascript[F] = {
                    pattern: G
                } : G).inside || {};
                (G.inside = F)['maybe-class-name'] = /^[A-Z][\s\S]*/;
            }
        }(B),
        function(C) {
            var _D = C.util.clone(C.languages.javascript),
                E = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                F = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                G = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

            function H(I, J) {
                return I = I.replace(/<S>/g, function() {
                    return E;
                }).replace(/<BRACES>/g, function() {
                    return F;
                }).replace(/<SPREAD>/g, function() {
                    return G;
                }), RegExp(I, J);
            }

            function H(I) {
                for (var J = [], K = 0; K < I.length; K++) {
                    var L = I[K],
                        M = !1;
                    'string' != typeof L && ('tag' === L.type && L.content[0] && 'tag' === L.content[0].type ? '</' === L.content[0].content[0].content ? 0 < J.length && J[J.length - 1].tagName === g(L.content[0].content[1]) && J.pop() : '/>' !== L.content[L.content.length - 1].content && J.push({
                        tagName: g(L.content[0].content[1]),
                        openedBraces: 0
                    }) : 0 < J.length && 'punctuation' === L.type && '{' === L.content ? J[J.length - 1].openedBraces++ : 0 < J.length && 0 < J[J.length - 1].openedBraces && 'punctuation' === L.type && '}' === L.content ? J[J.length - 1].openedBraces-- : M = !0), (M || 'string' == typeof L) && 0 < J.length && 0 === J[J.length - 1].openedBraces && (M = g(L), K < I.length - 1 && ('string' == typeof I[K + 1] || 'plain-text' === I[K + 1].type) && (M += g(I[K + 1]), I.splice(K + 1, 1)), 0 < K && ('string' == typeof I[K - 1] || 'plain-text' === I[K - 1].type) && (M = g(I[K - 1]) + M, I.splice(K - 1, 1), K--), I[K] = new C.Token('plain-text', M, null, M)), L.content && 'string' != typeof L.content && H(L.content);
                }
            }
            G = e(G).source, C.languages.jsx = C.languages.extend('markup', _D), C.languages.jsx.tag.pattern = e(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), C.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, C.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, C.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, C.languages.jsx.tag.inside.comment = _D.comment, C.languages.insertBefore('inside', 'attr-name', {
                spread: {
                    pattern: e(/<SPREAD>/.source),
                    inside: C.languages.jsx
                }
            }, C.languages.jsx.tag), C.languages.insertBefore('inside', 'special-attr', {
                script: {
                    pattern: e(/=<BRACES>/.source),
                    alias: 'language-javascript',
                    inside: {
                        'script-punctuation': {
                            pattern: /^=(?=\{)/,
                            alias: 'punctuation'
                        },
                        rest: C.languages.jsx
                    }
                }
            }, C.languages.jsx.tag);
            var H = function(I) {
                return I ? 'string' == typeof I ? I : 'string' == typeof I.content ? I.content : I.content.map(H).join('') : '';
            };
            C.hooks.add('after-tokenize', function(I) {
                'jsx' !== I.language && 'tsx' !== I.language || f(I.tokens);
            });
        }(B),
        function(C) {
            var D = C.util.clone(C.languages.typescript);
            (D = (C.languages.tsx = C.languages.extend('jsx', D), delete C.languages.tsx.parameter, delete C.languages.tsx['literal-property'], C.languages.tsx.tag)).pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + D.pattern.source + ')', D.pattern.flags), D.lookbehind = !0;
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
        }, B.languages.swift['string-literal'].forEach(function(C) {
            C.inside.interpolation.inside = B.languages.swift;
        }),
        function(C) {
            C.languages.kotlin = C.languages.extend('clike', {
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
            }), delete C.languages.kotlin['class-name'];
            var D = {
                'interpolation-punctuation': {
                    pattern: /^\$\{?|\}$/,
                    alias: 'punctuation'
                },
                expression: {
                    pattern: /[\s\S]+/,
                    inside: C.languages.kotlin
                }
            };
            C.languages.insertBefore('kotlin', 'string', {
                'string-literal': [{
                        pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                        alias: 'multiline',
                        inside: {
                            interpolation: {
                                pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                                inside: D
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
                                inside: D
                            },
                            string: /[\s\S]+/
                        }
                    }
                ],
                char: {
                    pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
                    greedy: !0
                }
            }), delete C.languages.kotlin.string, C.languages.insertBefore('kotlin', 'keyword', {
                annotation: {
                    pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                    alias: 'builtin'
                }
            }), C.languages.insertBefore('kotlin', 'function', {
                label: {
                    pattern: /\b\w+@|@\w+\b/,
                    alias: 'symbol'
                }
            }), C.languages.kt = C.languages.kotlin, C.languages.kts = C.languages.kotlin;
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
        function(C) {
            for (var D = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, E = 0; E < 2; E++)
                D = D.replace(/<self>/g, function() {
                    return D;
                });
            D = D.replace(/<self>/g, function() {
                return /[^\s\S]/.source;
            }), C.languages.rust = {
                comment: [{
                        pattern: RegExp(/(^|[^\\])/.source + D),
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
            }, C.languages.rust['closure-params'].inside.rest = C.languages.rust, C.languages.rust.attribute.inside.string = C.languages.rust.string;
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
        function(C) {
            var D = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                E = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
                    return D.source;
                });
            C.languages.cpp = C.languages.extend('c', {
                'class-name': [{
                        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
                            return D.source;
                        })),
                        lookbehind: !0
                    },
                    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
                    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
                    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
                ],
                keyword: D,
                number: {
                    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                    greedy: !0
                },
                operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                boolean: /\b(?:false|true)\b/
            }), C.languages.insertBefore('cpp', 'string', {
                module: {
                    pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
                        return E;
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
            }), C.languages.insertBefore('cpp', 'keyword', {
                'generic-function': {
                    pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                    inside: {
                        function: /^\w+/,
                        generic: {
                            pattern: /<[\s\S]+/,
                            alias: 'class-name',
                            inside: C.languages.cpp
                        }
                    }
                }
            }), C.languages.insertBefore('cpp', 'operator', {
                'double-colon': {
                    pattern: /::/,
                    alias: 'punctuation'
                }
            }), C.languages.insertBefore('cpp', 'class-name', {
                'base-clause': {
                    pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: C.languages.extend('cpp', {})
                }
            }), C.languages.insertBefore('inside', 'double-colon', {
                'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
            }, C.languages.cpp['base-clause']);
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
    ((b, _db) => {
        for (var D in _db)
            n(b, D, {
                get: _db[D],
                enumerable: !0
            });
    })(C, {
        dracula: () => _D,
        duotoneDark: () => _E,
        duotoneLight: () => _F,
        github: () => _G,
        gruvboxMaterialDark: () => _X,
        gruvboxMaterialLight: () => _Y,
        jettwaveDark: () => _T,
        jettwaveLight: () => _U,
        nightOwl: () => _H,
        nightOwlLight: () => _I,
        oceanicNext: () => _L,
        okaidia: () => _M,
        oneDark: () => _V,
        oneLight: () => _W,
        palenight: () => _N,
        shadesOfPurple: () => _O,
        synthwave84: () => _P,
        ultramin: () => _Q,
        vsDark: () => _R,
        vsLight: () => _S
    });
    var _D = {
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
        _E = {
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
        _F = {
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
        _G = {
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
        _H = {
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
        _I = {
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
        _L = {
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
        _M = {
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
        _N = {
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
        _O = {
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
        _P = {
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
        _Q = {
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
        _R = {
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
        _S = {
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
        _T = {
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
        _U = {
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
        _V = {
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
        _W = {
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
        _X = {
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
        _Y = {
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
        Z = (b, _db) => {
            const {
                plain: $
            } = b, ab = b.styles.reduce((b, $) => {
                const {
                    languages: bb,
                    style: cb
                } = $;
                return bb && !bb.includes(_db) || $.types.forEach(_db => {
                    const db = x(x({}, b[_db]), cb);
                    b[_db] = db;
                }), b;
            }, {});
            return ab.root = $, ab.plain = y(x({}, $), {
                backgroundColor: void 0
            }), ab;
        },
        $ = /\r\n|\r|\n/,
        ab = b => {
            0 === b.length ? b.push({
                types: ['plain'],
                content: '\n',
                empty: !0
            }) : 1 === b.length && '' === b[0].content && (b[0].content = '\n', b[0].empty = !0);
        },
        bb = (b, _db) => {
            const cb = b.length;
            return cb > 0 && b[cb - 1] === _db ? b : b.concat(_db);
        },
        cb = b => {
            const _db = [
                    []
                ],
                eb = [b],
                fb = [0],
                gb = [b.length];
            let hb = 0,
                ib = 0,
                jb = [];
            const kb = [jb];
            for (; ib > -1;) {
                for (;
                    (hb = fb[ib]++) < gb[ib];) {
                    let lb, mb = _db[ib];
                    const nb = eb[ib][hb];
                    if ('string' == typeof nb ? (mb = ib > 0 ? mb : ['plain'], lb = nb) : (mb = bb(mb, nb.type), nb.alias && (mb = bb(mb, nb.alias)), lb = nb.content), 'string' != typeof lb) {
                        ib++, _db.push(mb), eb.push(lb), fb.push(0), gb.push(lb.length);
                        continue;
                    }
                    const ob = lb.split($),
                        pb = ob.length;
                    jb.push({
                        types: mb,
                        content: ob[0]
                    });
                    for (let qb = 1; qb < pb; qb++)
                        ab(jb), kb.push(jb = []), jb.push({
                            types: mb,
                            content: ob[qb]
                        });
                }
                ib--, _db.pop(), eb.pop(), fb.pop(), gb.pop();
            }
            return ab(jb), kb;
        },
        db = ({
            children: eb,
            language: fb,
            code: gb,
            theme: hb,
            prism: ib
        }) => {
            const jb = fb.toLowerCase(),
                kb = ((eb, fb) => {
                    const [lb, mb] = (0, k.useState)(Z(fb, eb)), nb = (0, k.useRef)(), ob = (0, k.useRef)();
                    return (0, k.useEffect)(() => {
                        fb === nb.current && eb === ob.current || (nb.current = fb, ob.current = eb, mb(Z(fb, eb)));
                    }, [
                        eb,
                        fb
                    ]), lb;
                })(jb, hb),
                lb = (eb => (0, k.useCallback)(fb => {
                    var mb = fb,
                        {
                            className: nb,
                            style: ob,
                            line: pb
                        } = mb,
                        qb = z(mb, [
                            'className',
                            'style',
                            'line'
                        ]);
                    const rb = y(x({}, qb), {
                        className: (0, l.default)('token-line', nb)
                    });
                    return 'object' == typeof eb && 'plain' in eb && (rb.style = eb.plain), 'object' == typeof ob && (rb.style = x(x({}, rb.style || {}), ob)), rb;
                }, [eb]))(kb),
                mb = (eb => {
                    const nb = (0, k.useCallback)(({
                        types: ob,
                        empty: pb
                    }) => {
                        if (null != eb)
                            return 1 === ob.length && 'plain' === ob[0] ? null != pb ? {
                                display: 'inline-block'
                            } : void 0 : 1 === ob.length && null != pb ? eb[ob[0]] : Object.assign(null != pb ? {
                                display: 'inline-block'
                            } : {}, ...ob.map(ob => eb[ob]));
                    }, [eb]);
                    return (0, k.useCallback)(eb => {
                        var qb = eb,
                            {
                                token: rb,
                                className: sb,
                                style: tb
                            } = qb,
                            ub = z(qb, [
                                'token',
                                'className',
                                'style'
                            ]);
                        const vb = y(x({}, ub), {
                            className: (0, l.default)('token', ...rb.types, sb),
                            children: rb.content,
                            style: ob(rb)
                        });
                        return null != tb && (vb.style = x(x({}, vb.style || {}), tb)), vb;
                    }, [ob]);
                })(kb),
                nb = (({
                    prism: ob,
                    code: pb,
                    grammar: qb,
                    language: rb
                }) => {
                    const sb = (0, k.useRef)(ob);
                    return (0, k.useMemo)(() => {
                        if (null == qb)
                            return cb([pb]);
                        const tb = {
                            code: pb,
                            grammar: qb,
                            language: rb,
                            tokens: []
                        };
                        return sb.current.hooks.run('before-tokenize', tb), tb.tokens = sb.current.tokenize(pb, qb), sb.current.hooks.run('after-tokenize', tb), cb(tb.tokens);
                    }, [
                        pb,
                        qb,
                        rb
                    ]);
                })({
                    prism: ib,
                    language: jb,
                    code: qb,
                    grammar: ib.languages[jb]
                });
            return ob({
                tokens: nb,
                className: `prism-code language-${ jb }`,
                style: null != kb ? kb.root : {},
                getLineProps: lb,
                getTokenProps: mb
            });
        },
        _jb = eb => (0, k.createElement)(db, y(x({}, eb), {
            prism: eb.prism || B,
            theme: eb.theme || _R,
            code: eb.code,
            language: eb.language
        }));
}), a.register('EM8VP', function(b, c) {
    function d(e) {
        var f, g, h = '';
        if ('string' == typeof e || 'number' == typeof e)
            h += e;
        else if ('object' == typeof e)
            if (Array.isArray(e)) {
                var i = e.length;
                for (f = 0; f < i; f++)
                    e[f] && (g = d(e[f])) && (h && (h += ' '), h += g);
            } else
                for (g in e)
                    e[g] && (h && (h += ' '), h += g);
        return h;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = function() {
        for (var e, _f, g = 0, h = '', i = arguments.length; g < i; g++)
            (e = arguments[g]) && (_f = _c(e)) && (h && (h += ' '), h += _f);
        return h;
    };
}), a.register('oRCKv', function(b, _c) {
    _h(b.exports, 'useEditable', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = {
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        };

    function f(g) {
        var _h = window.getSelection();
        _h.empty(), _h.addRange(g);
    }

    function f(g) {
        return (g.metaKey || g.ctrlKey) && !g.altKey && 'KeyZ' === g.code;
    }

    function f(g) {
        g = [g.firstChild];
        for (var h, i = ''; h = g.pop();)
            h.nodeType === Node.TEXT_NODE ? i += h.textContent : h.nodeType === Node.ELEMENT_NODE && 'BR' === h.nodeName && (i += '\n'), h.nextSibling && g.push(h.nextSibling), h.firstChild && g.push(h.firstChild);
        return '\n' !== i[i.length - 1] && (i += '\n'), i;
    }

    function f(g) {
        var h = window.getSelection().getRangeAt(0),
            i = h.collapsed ? 0 : h.toString().length,
            j = document.createRange();
        return j.setStart(g, 0), j.setEnd(h.startContainer, h.startOffset), {
            position: g = (j = j.toString()).length,
            extent: i,
            content: j = (j = j.split('\n'))[h = j.length - 1],
            line: h
        };
    }

    function f(g, h, i) {
        0 >= h && (h = 0), (!i || 0 > i) && (i = h);
        var j = document.createRange();
        g = [g.firstChild];
        for (var k, l = 0, m = h; k = g[g.length - 1];) {
            if (k.nodeType === Node.TEXT_NODE) {
                if (l + k.textContent.length >= m) {
                    var n = m - l;
                    if (m === h) {
                        if (m = j, n < k.textContent.length ? m.setStart(k, n) : m.setStartAfter(k), i !== h) {
                            m = i;
                            continue;
                        }
                        break;
                    }
                    h = j, n < (i = k).textContent.length ? h.setEnd(i, n) : h.setEndAfter(i);
                    break;
                }
                l += k.textContent.length;
            } else if (k.nodeType === Node.ELEMENT_NODE && 'BR' === k.nodeName) {
                if (l + 1 >= m) {
                    if (m === h) {
                        if (_g = j, 0 < k.textContent.length ? _g.setStart(k, 0) : _g.setStartAfter(k), i !== h) {
                            m = i;
                            continue;
                        }
                        break;
                    }
                    h = j, 0 < (i = k).textContent.length ? h.setEnd(i, 0) : h.setEndAfter(i);
                    break;
                }
                l++;
            }
            g.pop(), k.nextSibling && g.push(k.nextSibling), k.firstChild && g.push(k.firstChild);
        }
        return j;
    }

    function _f(g, h, i) {
        function j(k) {
            var l = g.current;
            if (l) {
                var m = _i(l);
                l = _h(l), m.position += k.length - l.length, _k.position = m, _k.onChange(k, m);
            }
        }

        function j(k, l) {
            var m = g.current;
            if (m) {
                var n = window.getSelection().getRangeAt(0);
                n.deleteContents(), n.collapse();
                var o = l || 0;
                (n = _j(m, l = (n = _i(m)).position + (0 > o ? o : 0), n.position + (0 < o ? o : 0))).deleteContents(), k && n.insertNode(document.createTextNode(k)), _y(_j(m, l + k.length));
            }
        }

        function j(k) {
            var l = g.current;
            if (l) {
                l.focus();
                var m = 0;
                if ('number' == typeof k)
                    m = k;
                else {
                    var n = _h(l).split('\n').slice(0, k.row);
                    k.row && (m += n.join('\n').length + 1), m += k.column;
                }
                _y(_j(l, m));
            }
        }

        function j() {
            var k = g.current;
            return {
                text: _h(k),
                position: k = _i(k)
            };
        }

        function j() {
            _k.observer.disconnect();
        }
        i || (i = {});
        var j = (0, d.useState)([])[1],
            _k = (0, d.useState)(function() {
                var l = {
                    observer: null,
                    disconnected: !1,
                    onChange: h,
                    queue: [],
                    history: [],
                    historyAt: -1,
                    position: null
                };
                return 'undefined' != typeof MutationObserver && (l.observer = new MutationObserver(function(m) {
                    var n;
                    (n = l.queue).push.apply(n, m);
                })), l;
            })[0],
            l = (0, d.useMemo)(function() {
                return {
                    update: _c,
                    insert: _f,
                    move: _p,
                    getState: _q
                };
            }, []);
        return 'object' != typeof navigator || ((0, d.useLayoutEffect)(function() {
            if (_k.onChange = h, g.current && !i.disabled) {
                if (_k.disconnected = !1, _k.observer.observe(g.current, e), _k.position) {
                    var m = _k.position,
                        n = m.position;
                    _y(_j(g.current, n, n + m.extent));
                }
                return _r;
            }
        }), (0, d.useLayoutEffect)(function() {
            if (g.current && !i.disabled) {
                var m = g.current;
                if (_k.position) {
                    m.focus();
                    var n = _k.position,
                        o = n.position;
                    _y(_j(m, o, o + n.extent));
                }
                var n = m.style.whiteSpace,
                    o = m.contentEditable,
                    _p = !0;
                try {
                    m.contentEditable = 'plaintext-only';
                } catch (g) {
                    m.contentEditable = 'true', _p = !1;
                }
                'pre' !== n && (m.style.whiteSpace = 'pre-wrap'), i.indentation && (m.style.tabSize = m.style.MozTabSize = '' + i.indentation), _c = '' + ' '.repeat(i.indentation || 0);
                var _q, _r = new RegExp('^(?:' + _c + ')'),
                    s = new RegExp('^(?:' + _c + ')*(' + _c + ')$'),
                    t = function(u) {
                        if (g.current && _k.position) {
                            var v = _h(m),
                                w = _i(m),
                                x = new Date().valueOf(),
                                _y = _k.history[_k.historyAt];
                            !u && 500 > x - _q || _y && _y[1] === v ? _q = x : (u = ++_k.historyAt, _k.history[u] = [
                                w,
                                v
                            ], _k.history.splice(u + 1), 500 < u && (_k.historyAt--, _k.history.shift()));
                        }
                    },
                    u = function() {
                        var v;
                        if ((v = _k.queue).push.apply(v, _k.observer.takeRecords()), v = _i(m), _k.queue.length) {
                            _k.observer.disconnect(), _k.disconnected = !0;
                            var w, x, y = _h(m);
                            for (_k.position = v; w = _k.queue.pop();) {
                                for (null !== w.oldValue && (w.target.textContent = w.oldValue), x = w.removedNodes.length - 1; 0 <= x; x--)
                                    w.target.insertBefore(w.removedNodes[x], w.nextSibling);
                                for (x = w.addedNodes.length - 1; 0 <= x; x--)
                                    w.addedNodes[x].parentNode && w.target.removeChild(w.addedNodes[x]);
                            }
                            _k.onChange(y, v);
                        }
                    },
                    v = function(w) {
                        if (!w.defaultPrevented && w.target === m) {
                            if (_k.disconnected)
                                return w.preventDefault(), j([]);
                            if (_g(w))
                                w.preventDefault(), w.shiftKey ? (w = ++_k.historyAt, (w = _k.history[w]) || (_k.historyAt = _k.history.length - 1)) : (w = --_k.historyAt, (w = _k.history[w]) || (_k.historyAt = 0)), w && (_k.observer.disconnect(), _k.disconnected = !0, _k.position = w[0], _k.onChange(w[1], w[0]));
                            else {
                                if (t(), 'Enter' === w.key) {
                                    w.preventDefault();
                                    var x = _i(m),
                                        y = /\S/g.exec(x.content);
                                    x = '\n' + x.content.slice(0, y ? y.index : x.content.length), l.insert(x);
                                } else if (_p && !i.indentation || 'Backspace' !== w.key) {
                                    if (i.indentation && 'Tab' === w.key) {
                                        w.preventDefault(), d = (_c = _i(m)).position - _c.content.length;
                                        var x = _h(m);
                                        _c = w.shiftKey ? x.slice(0, d) + _c.content.replace(_r, '') + x.slice(d + _c.content.length) : x.slice(0, d) + (i.indentation ? ' '.repeat(i.indentation) : '\t') + x.slice(d), l.update(_c);
                                    }
                                } else
                                    w.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (_c = _i(m), _c = s.exec(_c.content), l.insert('', _c ? -_c[1].length : -1)) : l.insert('', 0);
                                w.repeat && u();
                            }
                        }
                    },
                    w = function(x) {
                        x.defaultPrevented || x.isComposing || (_g(x) || t(), u(), m.focus());
                    },
                    x = function(y) {
                        _k.position = window.getSelection().rangeCount && y.target === m ? _i(m) : null;
                    },
                    y = function(z) {
                        z.preventDefault(), t(!0), l.insert(z.clipboardData.getData('text/plain')), t(!0), u();
                    };
                return document.addEventListener('selectstart', x), window.addEventListener('keydown', v), m.addEventListener('paste', y), m.addEventListener('keyup', w),
                    function() {
                        document.removeEventListener('selectstart', x), window.removeEventListener('keydown', v), m.removeEventListener('paste', y), m.removeEventListener('keyup', w), m.style.whiteSpace = n, m.contentEditable = o;
                    };
            }
            _k.history.length = 0, _k.historyAt = -1;
        }, [
            g.current,
            i.disabled,
            i.indentation
        ])), l;
    }
}), a.register('cMZnX', function(b, c) {
    _p(b.exports, 'transform', function() {
        return _n;
    });
    var d = a('bPSUD'),
        e = a('wuFQV'),
        f = a('KJJj7'),
        _g = a('HRBF1'),
        _h = a('DeXlE'),
        _i = a('q24BP'),
        _j = a('NcMXu'),
        k = a('MdYAY'),
        l = a('zJUUu'),
        m = (a('rHPVb'), a('5GWBZ'));

    function _n(o, _p) {
        (0, _i.validateOptions)(_p);
        try {
            const q = _n(o, _p),
                r = new(0, l.default)(q, _p.transforms, Boolean(_p.enableLegacyBabel5ModuleInterop), _p).transform();
            let s = {
                code: r.code
            };
            if (_p.sourceMapOptions) {
                if (!_p.filePath)
                    throw new Error('filePath must be specified when generating a source map.');
                s = {
                    ...s,
                    sourceMap: (0, e.default)(r, _p.filePath, _p.sourceMapOptions, o, q.tokenProcessor.tokens)
                };
            }
            return s;
        } catch (o) {
            throw _p.filePath && (o.message = `Error transforming ${ _p.filePath }: ${ o.message }`), o;
        }
    }

    function _n(o, p) {
        const q = p.transforms.includes('jsx'),
            r = p.transforms.includes('typescript'),
            s = p.transforms.includes('flow'),
            t = !0 === p.disableESTransforms,
            u = (0, _j.parse)(o, q, r, s),
            v = u.tokens,
            w = u.scopes,
            x = new(0, _h.default)(o, v),
            y = new(0, f.HelperManager)(x),
            z = new(0, k.default)(o, v, s, t, y),
            A = Boolean(p.enableLegacyTypeScriptModuleInterop);
        let B = null;
        return p.transforms.includes('imports') ? (B = new(0, d.default)(x, z, A, p, p.transforms.includes('typescript'), Boolean(p.keepUnusedImports), y), B.preprocessTokens(), (0, _g.default)(z, w, B.getGlobalNames()), p.transforms.includes('typescript') && !p.keepUnusedImports && B.pruneTypeOnlyImports()) : p.transforms.includes('typescript') && !p.keepUnusedImports && (0, _g.default)(z, w, (0, m.default)(z)), {
            tokenProcessor: z,
            scopes: w,
            nameManager: x,
            importProcessor: B,
            helperManager: y
        };
    }
}), a.register('bPSUD', function(b, c) {
    _k(b.exports, 'default', function() {
        return _i;
    });
    var d = a('sK5Ca'),
        e = a('DIj/a'),
        f = a('8rqpk'),
        g = a('YLJ/Q'),
        h = a('59skZ');
    class _i {
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
            for (const [j, _k] of this.importInfoByPath.entries()) {
                if (_k.hasBareImport || _k.hasStarExport || _k.exportStarNames.length > 0 || _k.namedExports.length > 0)
                    continue;
                [
                    ..._k.defaultNames,
                    ..._k.wildcardNames,
                    ..._k.namedImports.map(({
                        localName: l
                    }) => l)
                ].every(l => this.shouldAutomaticallyElideImportedName(l)) && this.importsToReplace.set(l, '');
            }
        }
        shouldAutomaticallyElideImportedName(j) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(j);
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
                } = k;
                if (0 === l.length && 0 === m.length && 0 === n.length && 0 === o.length && 0 === p.length && !q) {
                    this.importsToReplace.set(j, `require('${ j }');`);
                    continue;
                }
                const r = this.getFreeIdentifierForPath(j);
                let s;
                s = this.enableLegacyTypeScriptModuleInterop ? r : m.length > 0 ? m[0] : this.getFreeIdentifierForPath(j);
                let t = `var ${ r } = require('${ j }');`;
                if (m.length > 0)
                    for (const u of m) {
                        t += ` var ${ u } = ${ this.enableLegacyTypeScriptModuleInterop ? r : `${ this.helperManager.getHelperName('interopRequireWildcard') }(${ r })` };`;
                    }
                else
                    p.length > 0 && s !== r ? t += ` var ${ s } = ${ this.helperManager.getHelperName('interopRequireWildcard') }(${ r });` : l.length > 0 && s !== r && (t += ` var ${ s } = ${ this.helperManager.getHelperName('interopRequireDefault') }(${ r });`);
                for (const {
                        importedName: u,
                        localName: v
                    }
                    of o)
                    t += ` ${ this.helperManager.getHelperName('createNamedExportFrom') }(${ r }, '${ v }', '${ u }');`;
                for (const w of p)
                    t += ` exports.${ w } = ${ s };`;
                q && (t += ` ${ this.helperManager.getHelperName('createStarExport') }(${ r });`), this.importsToReplace.set(w, t);
                for (const x of l)
                    this.identifierReplacements.set(x, `${ s }.default`);
                for (const {
                        importedName: y,
                        localName: z
                    }
                    of n)
                    this.identifierReplacements.set(z, `${ r }.${ y }`);
            }
        }
        getFreeIdentifierForPath(j) {
            const k = j.split('/'),
                l = k[k.length - 1].replace(/\W/g, '');
            return this.nameManager.claimFreeName(`_${ l }`);
        }
        preprocessImportAtIndex(j) {
            const k = [],
                l = [],
                m = [];
            if (j++, (this.tokens.matchesContextualAtIndex(j, e.ContextualKeyword._type) || this.tokens.matches1AtIndex(j, f.TokenType._typeof)) && !this.tokens.matches1AtIndex(j + 1, f.TokenType.comma) && !this.tokens.matchesContextualAtIndex(j + 1, e.ContextualKeyword._from))
                return;
            if (this.tokens.matches1AtIndex(j, f.TokenType.parenL))
                return;
            if (this.tokens.matches1AtIndex(j, f.TokenType.name) && (k.push(this.tokens.identifierNameAtIndex(j)), j++, this.tokens.matches1AtIndex(j, f.TokenType.comma) && j++), this.tokens.matches1AtIndex(j, f.TokenType.star) && (j += 2, l.push(this.tokens.identifierNameAtIndex(j)), j++), this.tokens.matches1AtIndex(j, f.TokenType.braceL)) {
                const n = this.getNamedImports(j + 1);
                j = n.newIndex;
                for (const o of n.namedImports)
                    'default' === o.importedName ? k.push(o.localName) : m.push(o);
            }
            if (this.tokens.matchesContextualAtIndex(j, e.ContextualKeyword._from) && j++, !this.tokens.matches1AtIndex(j, f.TokenType.string))
                throw new Error('Expected string token at the end of import statement.');
            const n = this.tokens.stringValueAtIndex(j),
                o = this.getImportInfo(n);
            o.defaultNames.push(...k), o.wildcardNames.push(...l), o.namedImports.push(...m), 0 === k.length && 0 === l.length && 0 === m.length && (o.hasBareImport = !0);
        }
        preprocessExportAtIndex(j) {
            if (this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType._var) || this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType._let) || this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType._const))
                this.preprocessVarExportAtIndex(j);
            else if (this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType._function) || this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType._class)) {
                const k = this.tokens.identifierNameAtIndex(j + 2);
                this.addExportBinding(k, k);
            } else if (this.tokens.matches3AtIndex(j, f.TokenType._export, f.TokenType.name, f.TokenType._function)) {
                const k = this.tokens.identifierNameAtIndex(j + 3);
                this.addExportBinding(k, k);
            } else
                this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType.braceL) ? this.preprocessNamedExportAtIndex(j) : this.tokens.matches2AtIndex(j, f.TokenType._export, f.TokenType.star) && this.preprocessExportStarAtIndex(j);
        }
        preprocessVarExportAtIndex(j) {
            let k = 0;
            for (let l = j + 2;; l++)
                if (this.tokens.matches1AtIndex(l, f.TokenType.braceL) || this.tokens.matches1AtIndex(l, f.TokenType.dollarBraceL) || this.tokens.matches1AtIndex(l, f.TokenType.bracketL))
                    k++;
                else if (this.tokens.matches1AtIndex(l, f.TokenType.braceR) || this.tokens.matches1AtIndex(l, f.TokenType.bracketR))
                k--;
            else {
                if (0 === k && !this.tokens.matches1AtIndex(l, f.TokenType.name))
                    break;
                if (this.tokens.matches1AtIndex(1, f.TokenType.eq)) {
                    const m = this.tokens.currentToken().rhsEndIndex;
                    if (null == m)
                        throw new Error('Expected = token with an end index.');
                    l = m - 1;
                } else {
                    const m = this.tokens.tokens[l];
                    if ((0, d.isDeclaration)(m)) {
                        const n = this.tokens.identifierNameAtIndex(l);
                        this.identifierReplacements.set(n, `exports.${ n }`);
                    }
                }
            }
        }
        preprocessNamedExportAtIndex(j) {
            j += 2;
            const {
                newIndex: k,
                namedImports: l
            } = this.getNamedImports(j);
            if (j = k, !this.tokens.matchesContextualAtIndex(j, e.ContextualKeyword._from)) {
                for (const {
                        importedName: m,
                        localName: n
                    }
                    of l)
                    this.addExportBinding(m, n);
                return;
            }
            if (j++, !this.tokens.matches1AtIndex(j, f.TokenType.string))
                throw new Error('Expected string token at the end of import statement.');
            const m = this.tokens.stringValueAtIndex(j);
            this.getImportInfo(m).namedExports.push(...l);
        }
        preprocessExportStarAtIndex(j) {
            let k = null;
            if (this.tokens.matches3AtIndex(j, f.TokenType._export, f.TokenType.star, f.TokenType._as) ? (j += 3, k = this.tokens.identifierNameAtIndex(j), j += 2) : j += 3, !this.tokens.matches1AtIndex(j, f.TokenType.string))
                throw new Error('Expected string token at the end of star export statement.');
            const l = this.tokens.stringValueAtIndex(j),
                m = this.getImportInfo(l);
            null !== k ? m.exportStarNames.push(k) : m.hasStarExport = !0;
        }
        getNamedImports(j) {
            const k = [];
            for (;;) {
                if (this.tokens.matches1AtIndex(j, f.TokenType.braceR)) {
                    j++;
                    break;
                }
                const l = (0, g.default)(this.tokens, j);
                if (j = l.endIndex, l.isType || k.push({
                        importedName: l.leftName,
                        localName: l.rightName
                    }), this.tokens.matches2AtIndex(j, f.TokenType.comma, f.TokenType.braceR)) {
                    j += 2;
                    break;
                }
                if (this.tokens.matches1AtIndex(j, f.TokenType.braceR)) {
                    j++;
                    break;
                }
                if (!this.tokens.matches1AtIndex(j, f.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(this.tokens.tokens[j]) }`);
                j++;
            }
            return {
                newIndex: j,
                namedImports: k
            };
        }
        getImportInfo(j) {
            const k = this.importInfoByPath.get(j);
            if (k)
                return k;
            const l = {
                defaultNames: [],
                wildcardNames: [],
                namedImports: [],
                namedExports: [],
                hasBareImport: !1,
                exportStarNames: [],
                hasStarExport: !1
            };
            return this.importInfoByPath.set(j, l), l;
        }
        addExportBinding(j, k) {
            this.exportBindingsByLocalName.has(j) || this.exportBindingsByLocalName.set(j, []), this.exportBindingsByLocalName.get(j).push(k);
        }
        claimImportCode(j) {
            const k = this.importsToReplace.get(j);
            return this.importsToReplace.set(j, ''), k || '';
        }
        getIdentifierReplacement(j) {
            return this.identifierReplacements.get(j) || null;
        }
        resolveExportBinding(j) {
            const k = this.exportBindingsByLocalName.get(j);
            return k && 0 !== k.length ? k.map(j => `exports.${ j }`).join(' = ') : null;
        }
        getGlobalNames() {
            return new Set([
                ...this.identifierReplacements.keys(),
                ...this.exportBindingsByLocalName.keys()
            ]);
        }
        constructor(j, k, l, m, n, o, p) {
            this.nameManager = j, this.tokens = k, this.enableLegacyTypeScriptModuleInterop = l, this.options = m, this.isTypeScriptTransformEnabled = n, this.keepUnusedImports = o, this.helperManager = p, _i.prototype.__init.call(this), _i.prototype.__init2.call(this), _i.prototype.__init3.call(this), _i.prototype.__init4.call(this), _i.prototype.__init5.call(this);
        }
    }
}), a.register('sK5Ca', function(b, c) {
    _p(b.exports, 'IdentifierRole', function() {
        return _d;
    }), _p(b.exports, 'JSXRole', function() {
        return _e;
    }), _p(b.exports, 'isDeclaration', function() {
        return _n;
    }), _p(b.exports, 'isNonTopLevelDeclaration', function() {
        return _n;
    }), _p(b.exports, 'isTopLevelDeclaration', function() {
        return _n;
    }), _p(b.exports, 'isBlockScopedDeclaration', function() {
        return _n;
    }), _p(b.exports, 'isFunctionScopedDeclaration', function() {
        return _n;
    }), _p(b.exports, 'isObjectShorthandDeclaration', function() {
        return _n;
    }), _p(b.exports, 'Token', function() {
        return _n;
    }), _p(b.exports, 'next', function() {
        return _o;
    }), _p(b.exports, 'nextToken', function() {
        return _p;
    }), _p(b.exports, 'nextTemplateToken', function() {
        return _o;
    }), _p(b.exports, 'retokenizeSlashAsRegex', function() {
        return _o;
    }), _p(b.exports, 'pushTypeContext', function() {
        return _o;
    }), _p(b.exports, 'popTypeContext', function() {
        return _o;
    }), _p(b.exports, 'eat', function() {
        return _o;
    }), _p(b.exports, 'match', function() {
        return _o;
    }), _p(b.exports, 'eatTypeToken', function() {
        return _o;
    }), _p(b.exports, 'lookaheadType', function() {
        return _o;
    }), _p(b.exports, 'lookaheadTypeAndKeyword', function() {
        return _p;
    }), _p(b.exports, 'nextTokenStart', function() {
        return _p;
    }), _p(b.exports, 'nextTokenStartSince', function() {
        return _p;
    }), _p(b.exports, 'lookaheadCharCode', function() {
        return _p;
    }), _p(b.exports, 'skipSpace', function() {
        return _p;
    }), _p(b.exports, 'finishToken', function() {
        return _p;
    }), _p(b.exports, 'getTokenFromCode', function() {
        return _p;
    }), _p(b.exports, 'skipLineComment', function() {
        return _p;
    }), _p(b.exports, 'rescan_gt', function() {
        return _p;
    });
    var _d, _e, f = a('UXH9U'),
        g = a('Tfs2H'),
        h = a('8+Hbk'),
        i = a('c4XAS'),
        j = a('7T3Zg'),
        k = a('DIj/a'),
        l = a('QwCZw'),
        m = a('8rqpk');

    function _n(o) {
        const _p = o.identifierRole;
        return _p === _d.TopLevelDeclaration || _p === _d.FunctionScopedDeclaration || _p === _d.BlockScopedDeclaration || _p === _d.ObjectShorthandTopLevelDeclaration || _p === _d.ObjectShorthandFunctionScopedDeclaration || _p === _d.ObjectShorthandBlockScopedDeclaration;
    }

    function _n(o) {
        const p = o.identifierRole;
        return p === _d.FunctionScopedDeclaration || p === _d.BlockScopedDeclaration || p === _d.ObjectShorthandFunctionScopedDeclaration || p === _d.ObjectShorthandBlockScopedDeclaration;
    }

    function _n(o) {
        const p = o.identifierRole;
        return p === _d.TopLevelDeclaration || p === _d.ObjectShorthandTopLevelDeclaration || p === _d.ImportDeclaration;
    }

    function _n(o) {
        const p = o.identifierRole;
        return p === _d.TopLevelDeclaration || p === _d.BlockScopedDeclaration || p === _d.ObjectShorthandTopLevelDeclaration || p === _d.ObjectShorthandBlockScopedDeclaration;
    }

    function _n(o) {
        const p = o.identifierRole;
        return p === _d.FunctionScopedDeclaration || p === _d.ObjectShorthandFunctionScopedDeclaration;
    }

    function _n(o) {
        return o.identifierRole === _d.ObjectShorthandTopLevelDeclaration || o.identifierRole === _d.ObjectShorthandBlockScopedDeclaration || o.identifierRole === _d.ObjectShorthandFunctionScopedDeclaration;
    }! function(n) {
        n[n.Access = 0] = 'Access';
        n[n.ExportAccess = 1] = 'ExportAccess';
        n[n.TopLevelDeclaration = 2] = 'TopLevelDeclaration';
        n[n.FunctionScopedDeclaration = 3] = 'FunctionScopedDeclaration';
        n[n.BlockScopedDeclaration = 4] = 'BlockScopedDeclaration';
        n[n.ObjectShorthandTopLevelDeclaration = 5] = 'ObjectShorthandTopLevelDeclaration';
        n[n.ObjectShorthandFunctionScopedDeclaration = 6] = 'ObjectShorthandFunctionScopedDeclaration';
        n[n.ObjectShorthandBlockScopedDeclaration = 7] = 'ObjectShorthandBlockScopedDeclaration';
        n[n.ObjectShorthand = 8] = 'ObjectShorthand';
        n[n.ImportDeclaration = 9] = 'ImportDeclaration';
        n[n.ObjectKey = 10] = 'ObjectKey';
        n[n.ImportAccess = 11] = 'ImportAccess';
    }(_d || (_d = {})),
    function(n) {
        n[n.NoChildren = 0] = 'NoChildren';
        n[n.OneChild = 1] = 'OneChild';
        n[n.StaticChildren = 2] = 'StaticChildren';
        n[n.KeyAfterPropSpread = 3] = 'KeyAfterPropSpread';
    }(_e || (_e = {}));
    class _n {
        constructor() {
            this.type = f.state.type, this.contextualKeyword = f.state.contextualKeyword, this.start = f.state.start, this.end = f.state.end, this.scopeDepth = f.state.scopeDepth, this.isType = f.state.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
        }
    }

    function _o() {
        f.state.tokens.push(new _n()), _p();
    }

    function _o() {
        f.state.tokens.push(new _n()), f.state.start = f.state.pos,
            function() {
                for (;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, g.unexpected)('Unterminated template');
                    const p = f.input.charCodeAt(f.state.pos);
                    if (p === h.charCodes.graveAccent || p === h.charCodes.dollarSign && f.input.charCodeAt(f.state.pos + 1) === h.charCodes.leftCurlyBrace)
                        return f.state.pos === f.state.start && _o(m.TokenType.template) ? p === h.charCodes.dollarSign ? (f.state.pos += 2, void _p(m.TokenType.dollarBraceL)) : (++f.state.pos, void _p(m.TokenType.backQuote)) : void _p(m.TokenType.template);
                    p === h.charCodes.backslash && f.state.pos++, f.state.pos++;
                }
            }();
    }

    function _o() {
        f.state.type === m.TokenType.assign && --f.state.pos,
            function() {
                const p = f.state.pos;
                let q = !1,
                    r = !1;
                for (;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, g.unexpected)('Unterminated regular expression', p);
                    const s = f.input.charCodeAt(f.state.pos);
                    if (q)
                        q = !1;
                    else {
                        if (s === h.charCodes.leftSquareBracket)
                            r = !0;
                        else if (s === h.charCodes.rightSquareBracket && r)
                            r = !1;
                        else if (s === h.charCodes.slash && !r)
                            break;
                        q = s === h.charCodes.backslash;
                    }
                    ++f.state.pos;
                }
                ++f.state.pos,
                    function() {
                        for (; f.state.pos < f.input.length;) {
                            const s = f.input.charCodeAt(f.state.pos);
                            if (i.IS_IDENTIFIER_CHAR[s])
                                f.state.pos++;
                            else {
                                if (s !== h.charCodes.backslash)
                                    break;
                                if (f.state.pos += 2, f.input.charCodeAt(f.state.pos) === h.charCodes.leftCurlyBrace) {
                                    for (; f.state.pos < f.input.length && f.input.charCodeAt(f.state.pos) !== h.charCodes.rightCurlyBrace;)
                                        f.state.pos++;
                                    f.state.pos++;
                                }
                            }
                        }
                    }(), _p(m.TokenType.regexp);
            }();
    }

    function _o(p) {
        for (let q = f.state.tokens.length - p; q < f.state.tokens.length; q++)
            f.state.tokens[q].isType = !0;
        const r = f.state.isType;
        return f.state.isType = !0, r;
    }

    function _o(p) {
        f.state.isType = p;
    }

    function _o(p) {
        return !!_o(p) && (_j(), !0);
    }

    function _o(p) {
        const q = f.state.isType;
        f.state.isType = !0, _o(p), f.state.isType = q;
    }

    function _o(p) {
        return f.state.type === p;
    }

    function _o() {
        const p = f.state.snapshot();
        _j();
        const q = f.state.type;
        return f.state.restoreFromSnapshot(p), q;
    }
    class o {
        constructor(p, q) {
            this.type = p, this.contextualKeyword = q;
        }
    }

    function _p() {
        const q = f.state.snapshot();
        _j();
        const r = f.state.type,
            s = f.state.contextualKeyword;
        return f.state.restoreFromSnapshot(q), new o(r, s);
    }

    function _p() {
        return _p(f.state.pos);
    }

    function _p(q) {
        j.skipWhiteSpace.lastIndex = q;
        return q + j.skipWhiteSpace.exec(f.input)[0].length;
    }

    function _p() {
        return f.input.charCodeAt(_u());
    }

    function _p() {
        if (_p(), f.state.start = f.state.pos, f.state.pos >= f.input.length) {
            const q = f.state.tokens;
            return q.length >= 2 && q[q.length - 1].start >= f.input.length && q[q.length - 2].start >= f.input.length && (0, g.unexpected)('Unexpectedly reached the end of input.'), void _p(m.TokenType.eof);
        }
        var q;
        q = f.input.charCodeAt(f.state.pos), i.IS_IDENTIFIER_START[q] || q === h.charCodes.backslash || q === h.charCodes.atSign && f.input.charCodeAt(f.state.pos + 1) === h.charCodes.atSign ? (0, l.default)() : _p(q);
    }

    function p() {
        for (; f.input.charCodeAt(f.state.pos) !== h.charCodes.asterisk || f.input.charCodeAt(f.state.pos + 1) !== h.charCodes.slash;)
            if (f.state.pos++, f.state.pos > f.input.length)
                return void(0, g.unexpected)('Unterminated comment', f.state.pos - 2);
        f.state.pos += 2;
    }

    function _p(q) {
        let r = f.input.charCodeAt(f.state.pos += q);
        if (f.state.pos < f.input.length)
            for (; r !== h.charCodes.lineFeed && r !== h.charCodes.carriageReturn && r !== h.charCodes.lineSeparator && r !== h.charCodes.paragraphSeparator && ++f.state.pos < f.input.length;)
                r = f.input.charCodeAt(f.state.pos);
    }

    function _p() {
        for (; f.state.pos < f.input.length;) {
            const q = f.input.charCodeAt(f.state.pos);
            switch (q) {
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
                            f.state.pos += 2, _p();
                            break;
                        case h.charCodes.slash:
                            _p(2);
                            break;
                        default:
                            return;
                    }
                    break;
                default:
                    if (!j.IS_WHITESPACE[q])
                        return;
                    ++f.state.pos;
            }
        }
    }

    function _p(q, r = k.ContextualKeyword.NONE) {
        f.state.end = f.state.pos, f.state.type = q, f.state.contextualKeyword = r;
    }

    function p() {
        if (f.state.isType)
            return void _p(m.TokenType.greaterThan, 1);
        const q = f.input.charCodeAt(f.state.pos + 1);
        if (q === h.charCodes.greaterThan) {
            const r = f.input.charCodeAt(f.state.pos + 2) === h.charCodes.greaterThan ? 3 : 2;
            return f.input.charCodeAt(f.state.pos + r) === h.charCodes.equalsTo ? void _p(m.TokenType.assign, r + 1) : void _p(m.TokenType.bitShiftR, r);
        }
        q === h.charCodes.equalsTo ? _p(m.TokenType.relationalOrEqual, 2) : _p(m.TokenType.greaterThan, 1);
    }

    function _p() {
        f.state.type === m.TokenType.greaterThan && (f.state.pos -= 1, _p());
    }

    function _p(q) {
        switch (q) {
            case h.charCodes.numberSign:
                return ++f.state.pos, void _p(m.TokenType.hash);
            case h.charCodes.dot:
                return void
                function() {
                    const r = f.input.charCodeAt(f.state.pos + 1);
                    r >= h.charCodes.digit0 && r <= h.charCodes.digit9 ? _p(!0) : r === h.charCodes.dot && f.input.charCodeAt(f.state.pos + 2) === h.charCodes.dot ? (f.state.pos += 3, _p(m.TokenType.ellipsis)) : (++f.state.pos, _p(m.TokenType.dot));
                }();
            case h.charCodes.leftParenthesis:
                return ++f.state.pos, void _p(m.TokenType.parenL);
            case h.charCodes.rightParenthesis:
                return ++f.state.pos, void _p(m.TokenType.parenR);
            case h.charCodes.semicolon:
                return ++f.state.pos, void _p(m.TokenType.semi);
            case h.charCodes.comma:
                return ++f.state.pos, void _p(m.TokenType.comma);
            case h.charCodes.leftSquareBracket:
                return ++f.state.pos, void _p(m.TokenType.bracketL);
            case h.charCodes.rightSquareBracket:
                return ++f.state.pos, void _p(m.TokenType.bracketR);
            case h.charCodes.leftCurlyBrace:
                return void(f.isFlowEnabled && f.input.charCodeAt(f.state.pos + 1) === h.charCodes.verticalBar ? _p(m.TokenType.braceBarL, 2) : (++f.state.pos, _p(m.TokenType.braceL)));
            case h.charCodes.rightCurlyBrace:
                return ++f.state.pos, void _p(m.TokenType.braceR);
            case h.charCodes.colon:
                return void(f.input.charCodeAt(f.state.pos + 1) === h.charCodes.colon ? _p(m.TokenType.doubleColon, 2) : (++f.state.pos, _p(m.TokenType.colon)));
            case h.charCodes.questionMark:
                return void
                function() {
                    const r = f.input.charCodeAt(f.state.pos + 1),
                        s = f.input.charCodeAt(f.state.pos + 2);
                    r !== h.charCodes.questionMark || f.isFlowEnabled && f.state.isType ? r !== h.charCodes.dot || s >= h.charCodes.digit0 && s <= h.charCodes.digit9 ? (++f.state.pos, _p(m.TokenType.question)) : (f.state.pos += 2, _p(m.TokenType.questionDot)) : s === h.charCodes.equalsTo ? _p(m.TokenType.assign, 3) : _p(m.TokenType.nullishCoalescing, 2);
                }();
            case h.charCodes.atSign:
                return ++f.state.pos, void _p(m.TokenType.at);
            case h.charCodes.graveAccent:
                return ++f.state.pos, void _p(m.TokenType.backQuote);
            case h.charCodes.digit0: {
                const r = f.input.charCodeAt(f.state.pos + 1);
                if (r === h.charCodes.lowercaseX || r === h.charCodes.uppercaseX || r === h.charCodes.lowercaseO || r === h.charCodes.uppercaseO || r === h.charCodes.lowercaseB || r === h.charCodes.uppercaseB)
                    return void
                function() {
                    f.state.pos += 2;
                    for (;;) {
                        const s = f.input.charCodeAt(f.state.pos);
                        if (!(s >= h.charCodes.digit0 && s <= h.charCodes.digit9 || s >= h.charCodes.lowercaseA && s <= h.charCodes.lowercaseF || s >= h.charCodes.uppercaseA && s <= h.charCodes.uppercaseF || s === h.charCodes.underscore))
                            break;
                        f.state.pos++;
                    }
                    const s = f.input.charCodeAt(f.state.pos);
                    s === h.charCodes.lowercaseN ? (++f.state.pos, _p(m.TokenType.bigint)) : _p(m.TokenType.num);
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
                return void _p(!1);
            case h.charCodes.quotationMark:
            case h.charCodes.apostrophe:
                return void
                function(r) {
                    for (f.state.pos++;;) {
                        if (f.state.pos >= f.input.length)
                            return void(0, g.unexpected)('Unterminated string constant');
                        const s = f.input.charCodeAt(f.state.pos);
                        if (s === h.charCodes.backslash)
                            f.state.pos++;
                        else if (s === r)
                            break;
                        f.state.pos++;
                    }
                    f.state.pos++, _p(m.TokenType.string);
                }(q);
            case h.charCodes.slash:
                return void(f.input.charCodeAt(f.state.pos + 1) === h.charCodes.equalsTo ? _p(m.TokenType.assign, 2) : _p(m.TokenType.slash, 1));
            case h.charCodes.percentSign:
            case h.charCodes.asterisk:
                return void
                function(r) {
                    let s = r === h.charCodes.asterisk ? m.TokenType.star : m.TokenType.modulo,
                        t = 1,
                        u = f.input.charCodeAt(f.state.pos + 1);
                    r === h.charCodes.asterisk && u === h.charCodes.asterisk && (t++, u = f.input.charCodeAt(f.state.pos + 2), s = m.TokenType.exponent), u === h.charCodes.equalsTo && f.input.charCodeAt(f.state.pos + 2) !== h.charCodes.greaterThan && (t++, s = m.TokenType.assign), _p(s, t);
                }(q);
            case h.charCodes.verticalBar:
            case h.charCodes.ampersand:
                return void
                function(r) {
                    const s = f.input.charCodeAt(f.state.pos + 1);
                    if (s !== r) {
                        if (r === h.charCodes.verticalBar) {
                            if (s === h.charCodes.greaterThan)
                                return void _p(m.TokenType.pipeline, 2);
                            if (s === h.charCodes.rightCurlyBrace && f.isFlowEnabled)
                                return void _p(m.TokenType.braceBarR, 2);
                        }
                        s !== h.charCodes.equalsTo ? _p(r === h.charCodes.verticalBar ? m.TokenType.bitwiseOR : m.TokenType.bitwiseAND, 1) : _p(m.TokenType.assign, 2);
                    } else
                        f.input.charCodeAt(f.state.pos + 2) === h.charCodes.equalsTo ? _p(m.TokenType.assign, 3) : _p(r === h.charCodes.verticalBar ? m.TokenType.logicalOR : m.TokenType.logicalAND, 2);
                }(q);
            case h.charCodes.caret:
                return void(f.input.charCodeAt(f.state.pos + 1) === h.charCodes.equalsTo ? _p(m.TokenType.assign, 2) : _p(m.TokenType.bitwiseXOR, 1));
            case h.charCodes.plusSign:
            case h.charCodes.dash:
                return void
                function(r) {
                    const s = f.input.charCodeAt(f.state.pos + 1);
                    s !== r ? s === h.charCodes.equalsTo ? _p(m.TokenType.assign, 2) : r === h.charCodes.plusSign ? _p(m.TokenType.plus, 1) : _p(m.TokenType.minus, 1) : _p(m.TokenType.preIncDec, 2);
                }(q);
            case h.charCodes.lessThan:
                return void
                function() {
                    const r = f.input.charCodeAt(f.state.pos + 1);
                    if (r === h.charCodes.lessThan)
                        return f.input.charCodeAt(f.state.pos + 2) === h.charCodes.equalsTo ? void _p(m.TokenType.assign, 3) : void(f.state.isType ? _p(m.TokenType.lessThan, 1) : _p(m.TokenType.bitShiftL, 2));
                    r === h.charCodes.equalsTo ? _p(m.TokenType.relationalOrEqual, 2) : _p(m.TokenType.lessThan, 1);
                }();
            case h.charCodes.greaterThan:
                return void _p();
            case h.charCodes.equalsTo:
            case h.charCodes.exclamationMark:
                return void
                function(r) {
                    const s = f.input.charCodeAt(f.state.pos + 1);
                    if (s !== h.charCodes.equalsTo)
                        return r === h.charCodes.equalsTo && s === h.charCodes.greaterThan ? (f.state.pos += 2, void _p(m.TokenType.arrow)) : void _p(r === h.charCodes.equalsTo ? m.TokenType.eq : m.TokenType.bang, 1);
                    _p(m.TokenType.equality, f.input.charCodeAt(f.state.pos + 2) === h.charCodes.equalsTo ? 3 : 2);
                }(q);
            case h.charCodes.tilde:
                return void _p(m.TokenType.tilde, 1);
        }
        (0, g.unexpected)(`Unexpected character '${ String.fromCharCode(q) }'`, f.state.pos);
    }

    function _p(q, r) {
        f.state.pos += r, _p(q);
    }

    function p() {
        for (;;) {
            const q = f.input.charCodeAt(f.state.pos);
            if (!(q >= h.charCodes.digit0 && q <= h.charCodes.digit9 || q === h.charCodes.underscore))
                break;
            f.state.pos++;
        }
    }

    function _p(q) {
        let r = !1,
            s = !1;
        q || _p();
        let t = f.input.charCodeAt(f.state.pos);
        t === h.charCodes.dot && (++f.state.pos, _p(), t = f.input.charCodeAt(f.state.pos)), t !== h.charCodes.uppercaseE && t !== h.charCodes.lowercaseE || (t = f.input.charCodeAt(++f.state.pos), t !== h.charCodes.plusSign && t !== h.charCodes.dash || ++f.state.pos, _p(), t = f.input.charCodeAt(f.state.pos)), t === h.charCodes.lowercaseN ? (++f.state.pos, r = !0) : t === h.charCodes.lowercaseM && (++f.state.pos, s = !0), _p(r ? m.TokenType.bigint : s ? m.TokenType.decimal : m.TokenType.num);
    }
}), a.register('UXH9U', function(b, c) {
    _n(b.exports, 'isJSXEnabled', function() {
        return _f;
    }), _n(b.exports, 'isTypeScriptEnabled', function() {
        return _g;
    }), _n(b.exports, 'isFlowEnabled', function() {
        return _h;
    }), _n(b.exports, 'state', function() {
        return _i;
    }), _n(b.exports, 'input', function() {
        return _j;
    }), _n(b.exports, 'getNextContextId', function() {
        return _l;
    }), _n(b.exports, 'augmentError', function() {
        return _l;
    }), _n(b.exports, 'initParser', function() {
        return _m;
    });
    var d = a('Exuei'),
        e = a('8+Hbk');
    let _f, _g, _h, _i, _j, k;

    function _l() {
        return k++;
    }

    function _l(m) {
        if ('pos' in m) {
            const _n = function(o) {
                let p = 1,
                    q = 1;
                for (let r = 0; r < o; r++)
                    _j.charCodeAt(r) === e.charCodes.lineFeed ? (p++, q = 1) : q++;
                return new _l(p, q);
            }(m.pos);
            m.message += ` (${ _n.line }:${ _n.column })`, m.loc = _n;
        }
        return m;
    }
    class _l {
        constructor(m, n) {
            this.line = m, this.column = n;
        }
    }

    function _m(n, o, p, q) {
        _j = n, _i = new(0, d.default)(), k = 1, _f = o, _g = p, _h = q;
    }
}), a.register('Exuei', function(b, c) {
    _h(b.exports, 'Scope', function() {
        return _f;
    }), _h(b.exports, 'default', function() {
        return _p;
    });
    var d = a('DIj/a'),
        e = a('8rqpk');
    class _f {
        constructor(g, _h, i) {
            this.startTokenIndex = g, this.endTokenIndex = _h, this.isFunctionScope = i;
        }
    }
    class g {
        constructor(h, i, j, k, l, m, n, o, _p, q, r, s, t) {
            this.potentialArrowAt = h, this.noAnonFunctionType = i, this.inDisallowConditionalTypesContext = j, this.tokensLength = k, this.scopesLength = l, this.pos = m, this.type = n, this.contextualKeyword = o, this.start = _p, this.end = q, this.isType = r, this.scopeDepth = s, this.error = t;
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
        restoreFromSnapshot(i) {
            this.potentialArrowAt = i.potentialArrowAt, this.noAnonFunctionType = i.noAnonFunctionType, this.inDisallowConditionalTypesContext = i.inDisallowConditionalTypesContext, this.tokens.length = i.tokensLength, this.scopes.length = i.scopesLength, this.pos = i.pos, this.type = i.type, this.contextualKeyword = i.contextualKeyword, this.start = i.start, this.end = i.end, this.isType = i.isType, this.scopeDepth = i.scopeDepth, this.error = i.error;
        }
        constructor() {
            h.prototype.__init.call(this), h.prototype.__init2.call(this), h.prototype.__init3.call(this), h.prototype.__init4.call(this), h.prototype.__init5.call(this), h.prototype.__init6.call(this), h.prototype.__init7.call(this), h.prototype.__init8.call(this), h.prototype.__init9.call(this), h.prototype.__init10.call(this), h.prototype.__init11.call(this), h.prototype.__init12.call(this), h.prototype.__init13.call(this);
        }
    }
}), a.register('DIj/a', function(b, c) {
    var d;
    _j(b.exports, 'ContextualKeyword', function() {
            return d;
        }),
        function(e) {
            e[e.NONE = 0] = 'NONE';
            e[e._abstract = 1] = '_abstract';
            e[e._accessor = 2] = '_accessor';
            e[e._as = 3] = '_as';
            e[e._assert = 4] = '_assert';
            e[e._asserts = 5] = '_asserts';
            e[e._async = 6] = '_async';
            e[e._await = 7] = '_await';
            e[e._checks = 8] = '_checks';
            e[e._constructor = 9] = '_constructor';
            e[e._declare = 10] = '_declare';
            e[e._enum = 11] = '_enum';
            e[e._exports = 12] = '_exports';
            e[e._from = 13] = '_from';
            e[e._get = 14] = '_get';
            e[e._global = 15] = '_global';
            e[e._implements = 16] = '_implements';
            e[e._infer = 17] = '_infer';
            e[e._interface = 18] = '_interface';
            e[e._is = 19] = '_is';
            e[e._keyof = 20] = '_keyof';
            e[e._mixins = 21] = '_mixins';
            e[e._module = 22] = '_module';
            e[e._namespace = 23] = '_namespace';
            e[e._of = 24] = '_of';
            e[e._opaque = 25] = '_opaque';
            e[e._out = 26] = '_out';
            e[e._override = 27] = '_override';
            e[e._private = 28] = '_private';
            e[e._protected = 29] = '_protected';
            e[e._proto = 30] = '_proto';
            e[e._public = 31] = '_public';
            e[e._readonly = 32] = '_readonly';
            e[e._require = 33] = '_require';
            e[e._satisfies = 34] = '_satisfies';
            e[e._set = 35] = '_set';
            e[e._static = 36] = '_static';
            e[e._symbol = 37] = '_symbol';
            e[e._type = 38] = '_type';
            e[e._unique = 39] = '_unique';
            e[e._using = 40] = '_using';
        }(d || (d = {}));
}), a.register('8rqpk', function(b, c) {
    var d;

    function e(f) {
        switch (f) {
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
    _j(b.exports, 'TokenType', function() {
            return d;
        }), _j(b.exports, 'formatTokenType', function() {
            return _d;
        }),
        function(e) {
            e[e.PRECEDENCE_MASK = 15] = 'PRECEDENCE_MASK';
            e[e.IS_KEYWORD = 16] = 'IS_KEYWORD';
            e[e.IS_ASSIGN = 32] = 'IS_ASSIGN';
            e[e.IS_RIGHT_ASSOCIATIVE = 64] = 'IS_RIGHT_ASSOCIATIVE';
            e[e.IS_PREFIX = 128] = 'IS_PREFIX';
            e[e.IS_POSTFIX = 256] = 'IS_POSTFIX';
            e[e.IS_EXPRESSION_START = 512] = 'IS_EXPRESSION_START';
            e[e.num = 512] = 'num';
            e[e.bigint = 1536] = 'bigint';
            e[e.decimal = 2560] = 'decimal';
            e[e.regexp = 3584] = 'regexp';
            e[e.string = 4608] = 'string';
            e[e.name = 5632] = 'name';
            e[e.eof = 6144] = 'eof';
            e[e.bracketL = 7680] = 'bracketL';
            e[e.bracketR = 8192] = 'bracketR';
            e[e.braceL = 9728] = 'braceL';
            e[e.braceBarL = 10752] = 'braceBarL';
            e[e.braceR = 11264] = 'braceR';
            e[e.braceBarR = 12288] = 'braceBarR';
            e[e.parenL = 13824] = 'parenL';
            e[e.parenR = 14336] = 'parenR';
            e[e.comma = 15360] = 'comma';
            e[e.semi = 16384] = 'semi';
            e[e.colon = 17408] = 'colon';
            e[e.doubleColon = 18432] = 'doubleColon';
            e[e.dot = 19456] = 'dot';
            e[e.question = 20480] = 'question';
            e[e.questionDot = 21504] = 'questionDot';
            e[e.arrow = 22528] = 'arrow';
            e[e.template = 23552] = 'template';
            e[e.ellipsis = 24576] = 'ellipsis';
            e[e.backQuote = 25600] = 'backQuote';
            e[e.dollarBraceL = 27136] = 'dollarBraceL';
            e[e.at = 27648] = 'at';
            e[e.hash = 29184] = 'hash';
            e[e.eq = 29728] = 'eq';
            e[e.assign = 30752] = 'assign';
            e[e.preIncDec = 32640] = 'preIncDec';
            e[e.postIncDec = 33664] = 'postIncDec';
            e[e.bang = 34432] = 'bang';
            e[e.tilde = 35456] = 'tilde';
            e[e.pipeline = 35841] = 'pipeline';
            e[e.nullishCoalescing = 36866] = 'nullishCoalescing';
            e[e.logicalOR = 37890] = 'logicalOR';
            e[e.logicalAND = 38915] = 'logicalAND';
            e[e.bitwiseOR = 39940] = 'bitwiseOR';
            e[e.bitwiseXOR = 40965] = 'bitwiseXOR';
            e[e.bitwiseAND = 41990] = 'bitwiseAND';
            e[e.equality = 43015] = 'equality';
            e[e.lessThan = 44040] = 'lessThan';
            e[e.greaterThan = 45064] = 'greaterThan';
            e[e.relationalOrEqual = 46088] = 'relationalOrEqual';
            e[e.bitShiftL = 47113] = 'bitShiftL';
            e[e.bitShiftR = 48137] = 'bitShiftR';
            e[e.plus = 49802] = 'plus';
            e[e.minus = 50826] = 'minus';
            e[e.modulo = 51723] = 'modulo';
            e[e.star = 52235] = 'star';
            e[e.slash = 53259] = 'slash';
            e[e.exponent = 54348] = 'exponent';
            e[e.jsxName = 55296] = 'jsxName';
            e[e.jsxText = 56320] = 'jsxText';
            e[e.jsxEmptyText = 57344] = 'jsxEmptyText';
            e[e.jsxTagStart = 58880] = 'jsxTagStart';
            e[e.jsxTagEnd = 59392] = 'jsxTagEnd';
            e[e.typeParameterStart = 60928] = 'typeParameterStart';
            e[e.nonNullAssertion = 61440] = 'nonNullAssertion';
            e[e._break = 62480] = '_break';
            e[e._case = 63504] = '_case';
            e[e._catch = 64528] = '_catch';
            e[e._continue = 65552] = '_continue';
            e[e._debugger = 66576] = '_debugger';
            e[e._default = 67600] = '_default';
            e[e._do = 68624] = '_do';
            e[e._else = 69648] = '_else';
            e[e._finally = 70672] = '_finally';
            e[e._for = 71696] = '_for';
            e[e._function = 73232] = '_function';
            e[e._if = 73744] = '_if';
            e[e._return = 74768] = '_return';
            e[e._switch = 75792] = '_switch';
            e[e._throw = 77456] = '_throw';
            e[e._try = 77840] = '_try';
            e[e._var = 78864] = '_var';
            e[e._let = 79888] = '_let';
            e[e._const = 80912] = '_const';
            e[e._while = 81936] = '_while';
            e[e._with = 82960] = '_with';
            e[e._new = 84496] = '_new';
            e[e._this = 85520] = '_this';
            e[e._super = 86544] = '_super';
            e[e._class = 87568] = '_class';
            e[e._extends = 88080] = '_extends';
            e[e._export = 89104] = '_export';
            e[e._import = 90640] = '_import';
            e[e._yield = 91664] = '_yield';
            e[e._null = 92688] = '_null';
            e[e._true = 93712] = '_true';
            e[e._false = 94736] = '_false';
            e[e._in = 95256] = '_in';
            e[e._instanceof = 96280] = '_instanceof';
            e[e._typeof = 97936] = '_typeof';
            e[e._void = 98960] = '_void';
            e[e._delete = 99984] = '_delete';
            e[e._async = 100880] = '_async';
            e[e._get = 101904] = '_get';
            e[e._set = 102928] = '_set';
            e[e._declare = 103952] = '_declare';
            e[e._readonly = 104976] = '_readonly';
            e[e._abstract = 106000] = '_abstract';
            e[e._static = 107024] = '_static';
            e[e._public = 107536] = '_public';
            e[e._private = 108560] = '_private';
            e[e._protected = 109584] = '_protected';
            e[e._override = 110608] = '_override';
            e[e._as = 112144] = '_as';
            e[e._enum = 113168] = '_enum';
            e[e._type = 114192] = '_type';
            e[e._implements = 115216] = '_implements';
        }(d || (d = {}));
}), a.register('8+Hbk', function(b, c) {
    var d;
    _j(b.exports, 'charCodes', function() {
            return d;
        }),
        function(e) {
            e[e.backSpace = 8] = 'backSpace';
            e[e.lineFeed = 10] = 'lineFeed';
            e[e.tab = 9] = 'tab';
            e[e.carriageReturn = 13] = 'carriageReturn';
            e[e.shiftOut = 14] = 'shiftOut';
            e[e.space = 32] = 'space';
            e[e.exclamationMark = 33] = 'exclamationMark';
            e[e.quotationMark = 34] = 'quotationMark';
            e[e.numberSign = 35] = 'numberSign';
            e[e.dollarSign = 36] = 'dollarSign';
            e[e.percentSign = 37] = 'percentSign';
            e[e.ampersand = 38] = 'ampersand';
            e[e.apostrophe = 39] = 'apostrophe';
            e[e.leftParenthesis = 40] = 'leftParenthesis';
            e[e.rightParenthesis = 41] = 'rightParenthesis';
            e[e.asterisk = 42] = 'asterisk';
            e[e.plusSign = 43] = 'plusSign';
            e[e.comma = 44] = 'comma';
            e[e.dash = 45] = 'dash';
            e[e.dot = 46] = 'dot';
            e[e.slash = 47] = 'slash';
            e[e.digit0 = 48] = 'digit0';
            e[e.digit1 = 49] = 'digit1';
            e[e.digit2 = 50] = 'digit2';
            e[e.digit3 = 51] = 'digit3';
            e[e.digit4 = 52] = 'digit4';
            e[e.digit5 = 53] = 'digit5';
            e[e.digit6 = 54] = 'digit6';
            e[e.digit7 = 55] = 'digit7';
            e[e.digit8 = 56] = 'digit8';
            e[e.digit9 = 57] = 'digit9';
            e[e.colon = 58] = 'colon';
            e[e.semicolon = 59] = 'semicolon';
            e[e.lessThan = 60] = 'lessThan';
            e[e.equalsTo = 61] = 'equalsTo';
            e[e.greaterThan = 62] = 'greaterThan';
            e[e.questionMark = 63] = 'questionMark';
            e[e.atSign = 64] = 'atSign';
            e[e.uppercaseA = 65] = 'uppercaseA';
            e[e.uppercaseB = 66] = 'uppercaseB';
            e[e.uppercaseC = 67] = 'uppercaseC';
            e[e.uppercaseD = 68] = 'uppercaseD';
            e[e.uppercaseE = 69] = 'uppercaseE';
            e[e.uppercaseF = 70] = 'uppercaseF';
            e[e.uppercaseG = 71] = 'uppercaseG';
            e[e.uppercaseH = 72] = 'uppercaseH';
            e[e.uppercaseI = 73] = 'uppercaseI';
            e[e.uppercaseJ = 74] = 'uppercaseJ';
            e[e.uppercaseK = 75] = 'uppercaseK';
            e[e.uppercaseL = 76] = 'uppercaseL';
            e[e.uppercaseM = 77] = 'uppercaseM';
            e[e.uppercaseN = 78] = 'uppercaseN';
            e[e.uppercaseO = 79] = 'uppercaseO';
            e[e.uppercaseP = 80] = 'uppercaseP';
            e[e.uppercaseQ = 81] = 'uppercaseQ';
            e[e.uppercaseR = 82] = 'uppercaseR';
            e[e.uppercaseS = 83] = 'uppercaseS';
            e[e.uppercaseT = 84] = 'uppercaseT';
            e[e.uppercaseU = 85] = 'uppercaseU';
            e[e.uppercaseV = 86] = 'uppercaseV';
            e[e.uppercaseW = 87] = 'uppercaseW';
            e[e.uppercaseX = 88] = 'uppercaseX';
            e[e.uppercaseY = 89] = 'uppercaseY';
            e[e.uppercaseZ = 90] = 'uppercaseZ';
            e[e.leftSquareBracket = 91] = 'leftSquareBracket';
            e[e.backslash = 92] = 'backslash';
            e[e.rightSquareBracket = 93] = 'rightSquareBracket';
            e[e.caret = 94] = 'caret';
            e[e.underscore = 95] = 'underscore';
            e[e.graveAccent = 96] = 'graveAccent';
            e[e.lowercaseA = 97] = 'lowercaseA';
            e[e.lowercaseB = 98] = 'lowercaseB';
            e[e.lowercaseC = 99] = 'lowercaseC';
            e[e.lowercaseD = 100] = 'lowercaseD';
            e[e.lowercaseE = 101] = 'lowercaseE';
            e[e.lowercaseF = 102] = 'lowercaseF';
            e[e.lowercaseG = 103] = 'lowercaseG';
            e[e.lowercaseH = 104] = 'lowercaseH';
            e[e.lowercaseI = 105] = 'lowercaseI';
            e[e.lowercaseJ = 106] = 'lowercaseJ';
            e[e.lowercaseK = 107] = 'lowercaseK';
            e[e.lowercaseL = 108] = 'lowercaseL';
            e[e.lowercaseM = 109] = 'lowercaseM';
            e[e.lowercaseN = 110] = 'lowercaseN';
            e[e.lowercaseO = 111] = 'lowercaseO';
            e[e.lowercaseP = 112] = 'lowercaseP';
            e[e.lowercaseQ = 113] = 'lowercaseQ';
            e[e.lowercaseR = 114] = 'lowercaseR';
            e[e.lowercaseS = 115] = 'lowercaseS';
            e[e.lowercaseT = 116] = 'lowercaseT';
            e[e.lowercaseU = 117] = 'lowercaseU';
            e[e.lowercaseV = 118] = 'lowercaseV';
            e[e.lowercaseW = 119] = 'lowercaseW';
            e[e.lowercaseX = 120] = 'lowercaseX';
            e[e.lowercaseY = 121] = 'lowercaseY';
            e[e.lowercaseZ = 122] = 'lowercaseZ';
            e[e.leftCurlyBrace = 123] = 'leftCurlyBrace';
            e[e.verticalBar = 124] = 'verticalBar';
            e[e.rightCurlyBrace = 125] = 'rightCurlyBrace';
            e[e.tilde = 126] = 'tilde';
            e[e.nonBreakingSpace = 160] = 'nonBreakingSpace';
            e[e.oghamSpaceMark = 5760] = 'oghamSpaceMark';
            e[e.lineSeparator = 8232] = 'lineSeparator';
            e[e.paragraphSeparator = 8233] = 'paragraphSeparator';
        }(d || (d = {}));
}), a.register('Tfs2H', function(b, c) {
    _j(b.exports, 'isContextual', function() {
        return _h;
    }), _j(b.exports, 'isLookaheadContextual', function() {
        return _h;
    }), _j(b.exports, 'eatContextual', function() {
        return _h;
    }), _j(b.exports, 'expectContextual', function() {
        return _h;
    }), _j(b.exports, 'unexpected', function() {
        return _h;
    }), _j(b.exports, 'canInsertSemicolon', function() {
        return _h;
    }), _j(b.exports, 'hasPrecedingLineBreak', function() {
        return _h;
    }), _j(b.exports, 'hasFollowingLineBreak', function() {
        return _h;
    }), _j(b.exports, 'isLineTerminator', function() {
        return _h;
    }), _j(b.exports, 'semicolon', function() {
        return _h;
    }), _j(b.exports, 'expect', function() {
        return _h;
    });
    var _d = a('sK5Ca'),
        e = a('8rqpk'),
        f = a('8+Hbk'),
        g = a('UXH9U');

    function _h(i) {
        return g.state.contextualKeyword === i;
    }

    function _h(i) {
        const _j = (0, _d.lookaheadTypeAndKeyword)();
        return _j.type === e.TokenType.name && _j.contextualKeyword === i;
    }

    function _h(i) {
        return g.state.contextualKeyword === i && (0, _d.eat)(e.TokenType.name);
    }

    function _h(i) {
        _j(i) || _h();
    }

    function _h() {
        return (0, _d.match)(e.TokenType.eof) || (0, _d.match)(e.TokenType.braceR) || _h();
    }

    function _h() {
        const i = g.state.tokens[g.state.tokens.length - 1];
        for (let j = i ? i.end : 0; j < g.state.start; j++) {
            const k = g.input.charCodeAt(j);
            if (k === f.charCodes.lineFeed || k === f.charCodes.carriageReturn || 8232 === k || 8233 === k)
                return !0;
        }
        return !1;
    }

    function _h() {
        const i = (0, _d.nextTokenStart)();
        for (let j = g.state.end; j < i; j++) {
            const k = g.input.charCodeAt(j);
            if (k === f.charCodes.lineFeed || k === f.charCodes.carriageReturn || 8232 === k || 8233 === k)
                return !0;
        }
        return !1;
    }

    function _h() {
        return (0, _d.eat)(e.TokenType.semi) || _k();
    }

    function _h() {
        _u() || _h('Unexpected token, expected ";"');
    }

    function _h(i) {
        (0, _d.eat)(i) || _h(`Unexpected token, expected "${ (0, e.formatTokenType)(i) }"`);
    }

    function _h(i = 'Unexpected token', j = g.state.start) {
        if (g.state.error)
            return;
        const k = new SyntaxError(i);
        k.pos = j, g.state.error = k, g.state.pos = g.input.length, (0, _d.finishToken)(e.TokenType.eof);
    }
}), a.register('c4XAS', function(b, c) {
    _l(b.exports, 'IS_IDENTIFIER_CHAR', function() {
        return _f;
    }), _l(b.exports, 'IS_IDENTIFIER_START', function() {
        return _j;
    });
    var d = a('8+Hbk'),
        e = a('7T3Zg');

    function f(g) {
        if (g < 48)
            return 36 === g;
        if (g < 58)
            return !0;
        if (g < 65)
            return !1;
        if (g < 91)
            return !0;
        if (g < 97)
            return 95 === g;
        if (g < 123)
            return !0;
        if (g < 128)
            return !1;
        throw new Error('Should not be called with non-ASCII char code.');
    }
    const _f = new Uint8Array(65536);
    for (let g = 0; g < 128; g++)
        _f[g] = _f(g) ? 1 : 0;
    for (let h = 128; h < 65536; h++)
        _f[h] = 1;
    for (const i of e.WHITESPACE_CHARS)
        _f[i] = 0;
    _f[8232] = 0, _f[8233] = 0;
    const _j = _f.slice();
    for (let k = d.charCodes.digit0; k <= d.charCodes.digit9; k++)
        _j[k] = 0;
}), a.register('7T3Zg', function(b, c) {
    _l(b.exports, 'WHITESPACE_CHARS', function() {
        return _e;
    }), _l(b.exports, 'skipWhiteSpace', function() {
        return _f;
    }), _l(b.exports, 'IS_WHITESPACE', function() {
        return _g;
    });
    var d = a('8+Hbk');
    const _e = [
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
        _f = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        _g = new Uint8Array(65536);
    for (const h of _e)
        _g[h] = 1;
}), a.register('QwCZw', function(b, c) {
    _l(b.exports, 'default', function() {
        return _j;
    });
    var d = a('UXH9U'),
        e = a('8+Hbk'),
        f = a('c4XAS'),
        g = a('sK5Ca'),
        h = a('beRJJ'),
        i = a('8rqpk');

    function _j() {
        let k = 0,
            _l = 0,
            m = d.state.pos;
        for (; m < d.input.length && (_l = d.input.charCodeAt(m), !(_l < e.charCodes.lowercaseA || _l > e.charCodes.lowercaseZ));) {
            const n = h.READ_WORD_TREE[k + (_l - e.charCodes.lowercaseA) + 1];
            if (-1 === n)
                break;
            k = n, m++;
        }
        const n = h.READ_WORD_TREE[k];
        if (n > -1 && !f.IS_IDENTIFIER_CHAR[_l])
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
}), a.register('beRJJ', function(b, c) {
    _g(b.exports, 'READ_WORD_TREE', function() {
        return _f;
    });
    var d = a('DIj/a'),
        e = a('8rqpk');
    const _f = new Int32Array([
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
}), a.register('YLJ/Q', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8rqpk');

    function _e(f, _g = f.currentIndex()) {
        let h = _g + 1;
        if (_e(f, h)) {
            const i = f.identifierNameAtIndex(_g);
            return {
                isType: !1,
                leftName: i,
                rightName: i,
                endIndex: h
            };
        }
        if (h++, _e(f, h))
            return {
                isType: !0,
                leftName: null,
                rightName: null,
                endIndex: h
            };
        if (h++, _e(f, h))
            return {
                isType: !1,
                leftName: f.identifierNameAtIndex(_g),
                rightName: f.identifierNameAtIndex(_g + 2),
                endIndex: h
            };
        if (h++, _e(f, h))
            return {
                isType: !0,
                leftName: null,
                rightName: null,
                endIndex: h
            };
        throw new Error(`Unexpected import/export specifier at ${ _g }`);
    }

    function _e(f, g) {
        const h = f.tokens[g];
        return h.type === d.TokenType.braceR || h.type === d.TokenType.comma;
    }
}), a.register('59skZ', function(b, c) {
    _j(b.exports, 'getNonTypeIdentifiers', function() {
        return _h;
    });
    var d = a('sK5Ca'),
        e = a('8rqpk'),
        f = a('wzNO8'),
        g = a('5foqh');

    function _h(i, _j) {
        const k = (0, g.default)(_j),
            l = new Set();
        for (let m = 0; m < i.tokens.length; m++) {
            const n = i.tokens[m];
            if (n.type !== e.TokenType.name || n.isType || n.identifierRole !== d.IdentifierRole.Access && n.identifierRole !== d.IdentifierRole.ObjectShorthand && n.identifierRole !== d.IdentifierRole.ExportAccess || n.shadowsGlobal || l.add(i.identifierNameForToken(n)), n.type === e.TokenType.jsxTagStart && l.add(k.base), n.type === e.TokenType.jsxTagStart && m + 1 < i.tokens.length && i.tokens[m + 1].type === e.TokenType.jsxTagEnd && (l.add(k.base), l.add(k.fragmentBase)), n.type === e.TokenType.jsxName && n.identifierRole === d.IdentifierRole.Access) {
                const o = i.identifierNameForToken(n);
                (0, f.startsWithLowerCase)(o) && i.tokens[m + 1].type !== e.TokenType.dot || l.add(i.identifierNameForToken(n));
            }
        }
        return l;
    }
}), a.register('wzNO8', function(b, c) {
    _l(b.exports, 'default', function() {
        return _j;
    }), _l(b.exports, 'startsWithLowerCase', function() {
        return _k;
    });
    var d = a('uhIoR'),
        e = a('sK5Ca'),
        f = a('8rqpk'),
        g = a('8+Hbk'),
        h = a('5foqh'),
        i = a('pHE0P');
    class _j extends i.default {
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
                    for (const [_l, m] of Object.entries(this.cjsAutomaticModuleNameResolutions))
                        k += `var ${ m } = require("${ _l }");`;
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
                jsxRole: k,
                start: l
            } = this.tokens.currentToken(), m = this.options.production ? null : this.getElementLocationCode(l);
            this.isAutomaticRuntime && k !== e.JSXRole.KeyAfterPropSpread ? this.transformTagToJSXFunc(m, k) : this.transformTagToCreateElement(m);
        }
        getElementLocationCode(k) {
            return `lineNumber: ${ this.getLineNumberForIndex(k) }`;
        }
        getLineNumberForIndex(k) {
            const l = this.tokens.code;
            for (; this.lastIndex < k && this.lastIndex < l.length;)
                '\n' === l[this.lastIndex] && this.lastLineNumber++, this.lastIndex++;
            return this.lastLineNumber;
        }
        transformTagToJSXFunc(k, l) {
            const m = l === e.JSXRole.StaticChildren;
            this.tokens.replaceToken(this.getJSXFuncInvocationCode(m));
            let n = null;
            if (this.tokens.matches1(f.TokenType.jsxTagEnd))
                this.tokens.replaceToken(`${ this.getFragmentCode() }, {`), this.processAutomaticChildrenAndEndProps(l);
            else {
                if (this.processTagIntro(), this.tokens.appendCode(', {'), n = this.processProps(!0), this.tokens.matches2(f.TokenType.slash, f.TokenType.jsxTagEnd))
                    this.tokens.appendCode('}');
                else {
                    if (!this.tokens.matches1(f.TokenType.jsxTagEnd))
                        throw new Error('Expected either /> or > at the end of the tag.');
                    this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(l);
                }
                n && this.tokens.appendCode(`, ${ n }`);
            }
            for (this.options.production || (null === n && this.tokens.appendCode(', void 0'), this.tokens.appendCode(`, ${ m }, ${ this.getDevSource(k) }, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(f.TokenType.jsxTagEnd);)
                this.tokens.removeToken();
            this.tokens.replaceToken(')');
        }
        transformTagToCreateElement(k) {
            if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(f.TokenType.jsxTagEnd))
                this.tokens.replaceToken(`${ this.getFragmentCode() }, null`), this.processChildren(!0);
            else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(k), this.tokens.matches2(f.TokenType.slash, f.TokenType.jsxTagEnd));
            else {
                if (!this.tokens.matches1(f.TokenType.jsxTagEnd))
                    throw new Error('Expected either /> or > at the end of the tag.');
                this.tokens.removeToken(), this.processChildren(!0);
            }
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(f.TokenType.jsxTagEnd);)
                this.tokens.removeToken();
            this.tokens.replaceToken(')');
        }
        getJSXFuncInvocationCode(k) {
            return this.options.production ? k ? this.claimAutoImportedFuncInvocation('jsxs', '/jsx-runtime') : this.claimAutoImportedFuncInvocation('jsx', '/jsx-runtime') : this.claimAutoImportedFuncInvocation('jsxDEV', '/jsx-dev-runtime');
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
                    jsxPragmaInfo: k
                } = this;
                return (this.importProcessor && this.importProcessor.getIdentifierReplacement(k.fragmentBase) || k.fragmentBase) + k.fragmentSuffix;
            }
        }
        claimAutoImportedFuncInvocation(k, l) {
            const m = this.claimAutoImportedName(k, l);
            return this.importProcessor ? `${ m }.call(void 0, ` : `${ m }(`;
        }
        claimAutoImportedName(k, l) {
            if (this.importProcessor) {
                const m = this.jsxImportSource + l;
                return this.cjsAutomaticModuleNameResolutions[m] || (this.cjsAutomaticModuleNameResolutions[m] = this.importProcessor.getFreeIdentifierForPath(m)), `${ this.cjsAutomaticModuleNameResolutions[m] }.${ k }`;
            }
            return this.esmAutomaticImportNameResolutions[k] || (this.esmAutomaticImportNameResolutions[k] = this.nameManager.claimFreeName(`_${ k }`)), this.esmAutomaticImportNameResolutions[k];
        }
        processTagIntro() {
            let k = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[k].isType || !this.tokens.matches2AtIndex(k - 1, f.TokenType.jsxName, f.TokenType.jsxName) && !this.tokens.matches2AtIndex(k - 1, f.TokenType.greaterThan, f.TokenType.jsxName) && !this.tokens.matches1AtIndex(k, f.TokenType.braceL) && !this.tokens.matches1AtIndex(k, f.TokenType.jsxTagEnd) && !this.tokens.matches2AtIndex(k, f.TokenType.slash, f.TokenType.jsxTagEnd);)
                k++;
            if (k === this.tokens.currentIndex() + 1) {
                const l = this.tokens.identifierName();
                _k(l) && this.tokens.replaceToken(`'${ l }'`);
            }
            for (; this.tokens.currentIndex() < k;)
                this.rootTransformer.processToken();
        }
        processPropsObjectWithDevInfo(k) {
            const l = this.options.production ? '' : `__self: this, __source: ${ this.getDevSource(k) }`;
            this.tokens.matches1(f.TokenType.jsxName) || this.tokens.matches1(f.TokenType.braceL) ? (this.tokens.appendCode(', {'), this.processProps(!1), l ? this.tokens.appendCode(` ${ l }}`) : this.tokens.appendCode('}')) : l ? this.tokens.appendCode(`, {${ l }}`) : this.tokens.appendCode(', null');
        }
        processProps(k) {
            let l = null;
            for (;;) {
                if (this.tokens.matches2(f.TokenType.jsxName, f.TokenType.eq)) {
                    const m = this.tokens.identifierName();
                    if (k && 'key' === m) {
                        null !== l && this.tokens.appendCode(l.replace(/[^\n]/g, '')), this.tokens.removeToken(), this.tokens.removeToken();
                        const n = this.tokens.snapshot();
                        this.processPropValue(), l = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(n);
                        continue;
                    }
                    this.processPropName(m), this.tokens.replaceToken(': '), this.processPropValue();
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
            return l;
        }
        processPropName(k) {
            k.includes('-') ? this.tokens.replaceToken(`'${ k }'`) : this.tokens.copyToken();
        }
        processPropValue() {
            this.tokens.matches1(f.TokenType.braceL) ? (this.tokens.replaceToken(''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken('')) : this.tokens.matches1(f.TokenType.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue();
        }
        processStringPropValue() {
            const k = this.tokens.currentToken(),
                l = this.tokens.code.slice(k.start + 1, k.end - 1),
                m = _k(l),
                n = function(o) {
                    let p = '';
                    for (let q = 0; q < o.length; q++) {
                        const r = o[q];
                        if ('\n' === r)
                            if (/\s/.test(o[q + 1]))
                                for (p += ' '; q < o.length && /\s/.test(o[q + 1]);)
                                    q++;
                            else
                                p += '\n';
                        else if ('&' === r) {
                            const {
                                entity: s,
                                newI: t
                            } = _k(o, q + 1);
                            p += s, q = t - 1;
                        } else
                            p += r;
                    }
                    return JSON.stringify(p);
                }(l);
            this.tokens.replaceToken(n + m);
        }
        processAutomaticChildrenAndEndProps(k) {
            k === e.JSXRole.StaticChildren ? (this.tokens.appendCode(' children: ['), this.processChildren(!1), this.tokens.appendCode(']}')) : (k === e.JSXRole.OneChild && this.tokens.appendCode(' children: '), this.processChildren(!1), this.tokens.appendCode('}'));
        }
        processChildren(k) {
            let l = k;
            for (;;) {
                if (this.tokens.matches2(f.TokenType.jsxTagStart, f.TokenType.slash))
                    return;
                let m = !1;
                if (this.tokens.matches1(f.TokenType.braceL))
                    this.tokens.matches2(f.TokenType.braceL, f.TokenType.braceR) ? (this.tokens.replaceToken(''), this.tokens.replaceToken('')) : (this.tokens.replaceToken(l ? ', ' : ''), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(''), m = !0);
                else if (this.tokens.matches1(f.TokenType.jsxTagStart))
                    this.tokens.appendCode(l ? ', ' : ''), this.processJSXTag(), m = !0;
                else {
                    if (!this.tokens.matches1(f.TokenType.jsxText) && !this.tokens.matches1(f.TokenType.jsxEmptyText))
                        throw new Error('Unexpected token when processing JSX children.');
                    m = this.processChildTextElement(l);
                }
                m && (l = !0);
            }
        }
        processChildTextElement(k) {
            const l = this.tokens.currentToken(),
                m = this.tokens.code.slice(l.start, l.end),
                n = _k(m),
                o = function(p) {
                    let q = '',
                        r = '',
                        s = !1,
                        t = !1;
                    for (let u = 0; u < p.length; u++) {
                        const v = p[u];
                        if (' ' === v || '\t' === v || '\r' === v)
                            s || (r += v);
                        else if ('\n' === v)
                            r = '', s = !0;
                        else {
                            if (t && s && (q += ' '), q += r, r = '', '&' === v) {
                                const {
                                    entity: w,
                                    newI: x
                                } = _k(p, u + 1);
                                u = x - 1, q += w;
                            } else
                                q += v;
                            t = !0, s = !1;
                        }
                    }
                    s || (q += r);
                    return JSON.stringify(q);
                }(m);
            return '""' === o ? (this.tokens.replaceToken(n), !1) : (this.tokens.replaceToken(`${ k ? ', ' : '' }${ o }${ n }`), !0);
        }
        getDevSource(k) {
            return `{fileName: ${ this.getFilenameVarName() }, ${ k }}`;
        }
        getFilenameVarName() {
            return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName('_jsxFileName')), this.filenameVarName;
        }
        constructor(k, l, m, n, o) {
            super(), this.rootTransformer = k, this.tokens = l, this.importProcessor = m, this.nameManager = n, this.options = o, _j.prototype.__init.call(this), _j.prototype.__init2.call(this), _j.prototype.__init3.call(this), _j.prototype.__init4.call(this), _j.prototype.__init5.call(this), this.jsxPragmaInfo = (0, h.default)(o), this.isAutomaticRuntime = 'automatic' === o.jsxRuntime, this.jsxImportSource = o.jsxImportSource || 'react';
        }
    }

    function _k(l) {
        const m = l.charCodeAt(0);
        return m >= g.charCodes.lowercaseA && m <= g.charCodes.lowercaseZ;
    }

    function _k(l) {
        let m = 0,
            n = 0;
        for (const o of l)
            '\n' === o ? (m++, n = 0) : ' ' === o && n++;
        return '\n'.repeat(m) + ' '.repeat(n);
    }

    function _k(l, m) {
        let n, o = '',
            p = 0,
            q = m;
        if ('#' === l[q]) {
            let r, s = 10;
            if (q++, 'x' === l[q])
                for (s = 16, q++, r = q; q < l.length && ((h = l.charCodeAt(q)) >= g.charCodes.digit0 && h <= g.charCodes.digit9 || h >= g.charCodes.lowercaseA && h <= g.charCodes.lowercaseF || h >= g.charCodes.uppercaseA && h <= g.charCodes.uppercaseF);)
                    q++;
            else
                for (r = q; q < l.length && _k(l.charCodeAt(q));)
                    q++;
            if (';' === l[q]) {
                const t = l.slice(r, q);
                t && (q++, n = String.fromCodePoint(parseInt(t, s)));
            }
        } else
            for (; q < l.length && p++ < 10;) {
                const r = l[q];
                if (q++, ';' === r) {
                    n = d.default.get(o);
                    break;
                }
                o += r;
            }
        var r;
        return n ? {
            entity: n,
            newI: q
        } : {
            entity: '&',
            newI: m
        };
    }

    function _k(l) {
        return l >= g.charCodes.digit0 && l <= g.charCodes.digit9;
    }
}), a.register('uhIoR', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = new Map([
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
}), a.register('5foqh', function(b, c) {
    function d(e) {
        const [_f, g] = _d(e.jsxPragma || 'React.createElement'), [h, i] = _d(e.jsxFragmentPragma || 'React.Fragment');
        return {
            base: _f,
            suffix: g,
            fragmentBase: h,
            fragmentSuffix: i
        };
    }

    function _d(e) {
        let f = e.indexOf('.');
        return -1 === f && (f = e.length), [
            e.slice(0, f),
            e.slice(f)
        ];
    }
    _h(b.exports, 'default', function() {
        return _d;
    });
}), a.register('pHE0P', function(b, c) {
    _h(b.exports, 'default', function() {
        return _d;
    });
    class _d {
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
}), a.register('wuFQV', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('xHC0l'),
        e = a('8+Hbk');

    function _f({
        code: g,
        mappings: _h
    }, i, j, k, l) {
        const m = function(n, o) {
                const p = new Array(o.length);
                let q = 0,
                    r = o[q].start,
                    s = 0;
                for (let t = 0; t < n.length; t++)
                    t === r && (p[q] = r - s, q++, r = o[q].start), n.charCodeAt(t) === e.charCodes.lineFeed && (s = t + 1);
                return p;
            }(k, l),
            n = new(0, d.GenMapping)({
                file: j.compiledFilename
            });
        let o = 0,
            p = _h[0];
        for (; void 0 === p && o < _h.length - 1;)
            o++, p = _h[o];
        let q = 0,
            r = 0;
        p !== r && (0, d.maybeAddSegment)(n, q, 0, i, q, 0);
        for (let s = 0; s < g.length; s++) {
            if (s === p) {
                const t = p - r,
                    u = m[o];
                for ((0, d.maybeAddSegment)(n, q, t, i, q, u);
                    (p === s || void 0 === p) && o < _h.length - 1;)
                    o++, p = _h[o];
            }
            g.charCodeAt(s) === e.charCodes.lineFeed && (q++, r = s + 1, p !== r && (0, d.maybeAddSegment)(n, q, 0, i, q, 0));
        }
        const {
            sourceRoot: t,
            sourcesContent: _u,
            ...v
        } = (0, d.toEncodedMap)(n);
        return v;
    }
}), a.register('xHC0l', function(b, c) {
    _s(b.exports, 'maybeAddSegment', function() {
        return _i;
    }), _s(b.exports, 'toEncodedMap', function() {
        return _m;
    }), _s(b.exports, 'GenMapping', function() {
        return _q;
    });
    var d = a('S48Em'),
        e = a('kiyfA'),
        f = a('fQxUf');
    let g, h, _i, j, k, l, _m, n, o, p;
    class _q {
        constructor({
            file: r,
            sourceRoot: _s
        } = {}) {
            this._names = new(0, d.SetArray)(), this._sources = new(0, d.SetArray)(), this._sourcesContent = [], this._mappings = [], this.file = r, this.sourceRoot = _s;
        }
    }

    function r(s, t, u) {
        for (let v = s.length; v > t; v--)
            s[v] = s[v - 1];
        s[t] = v;
    }

    function r(s, t) {
        for (let u = 0; u < t.length; u++)
            (0, d.put)(s, t[u]);
    }

    function r(s, t, u) {
        const {
            generated: v,
            source: w,
            original: x,
            name: y,
            content: z
        } = u;
        if (!w)
            return p(s, t, v.line - 1, v.column, null, null, null, null, null);
        const A = w;
        return p(s, t, v.line - 1, v.column, A, x.line - 1, x.column, y, z);
    }
    g = (b, _r, a, c, d, e, f, g) => p(!1, b, _r, a, c, d, e, f, g), _i = (b, _r, a, c, d, e, f, g) => p(!0, b, _r, a, c, d, e, f, g), h = (b, _r) => _i(!1, b, _r), j = (b, _r) => _i(!0, b, _r), k = (b, _r, a) => {
        const {
            _sources: r,
            _sourcesContent: s
        } = b;
        s[(0, d.put)(r, _r)] = a;
    }, l = b => {
        const {
            file: _r,
            sourceRoot: s,
            _mappings: t,
            _sources: u,
            _sourcesContent: v,
            _names: w
        } = b;
        return function(x) {
            const {
                length: y
            } = x;
            let z = y;
            for (let A = z - 1; A >= 0 && !(x[A].length > 0); z = A, A--);
            z < A && (x.length = z);
        }(t), {
            version: 3,
            file: _r || void 0,
            names: w.array,
            sourceRoot: s || void 0,
            sources: u.array,
            sourcesContent: v,
            mappings: t
        };
    }, _m = b => {
        const r = l(b);
        return Object.assign(Object.assign({}, r), {
            mappings: (0, e.encode)(r.mappings)
        });
    }, o = b => {
        const r = [],
            {
                _mappings: s,
                _sources: t,
                _names: u
            } = b;
        for (let v = 0; v < s.length; v++) {
            const w = s[v];
            for (let x = 0; x < w.length; x++) {
                const y = w[x],
                    z = {
                        line: v + 1,
                        column: y[0]
                    };
                let A, B, C;
                1 !== y.length && (A = t.array[y[1]], B = {
                    line: y[2] + 1,
                    column: y[3]
                }, 5 === y.length && (C = u.array[y[4]])), r.push({
                    generated: z,
                    source: A,
                    original: B,
                    name: C
                });
            }
        }
        return r;
    }, n = b => {
        const r = new(0, f.TraceMap)(b),
            s = new _q({
                file: r.file,
                sourceRoot: r.sourceRoot
            });
        return _h(s._names, r.names), _h(s._sources, r.sources), s._sourcesContent = r.sourcesContent || r.sources.map(() => null), s._mappings = (0, f.decodedMappings)(r), s;
    }, p = (b, _x, a, c, e, f, g, h, _i) => {
        const {
            _mappings: r,
            _sources: s,
            _sourcesContent: t,
            _names: u
        } = _x, v = function(w, _x) {
            for (let y = w.length; y <= _x; y++)
                w[y] = [];
            return w[_x];
        }(r, a), w = function(x, y) {
            let z = x.length;
            for (let A = z - 1; A >= 0 && !(y >= x[A][0]); z = A--);
            return z;
        }(v, c);
        if (!e) {
            if (b && function(x, y) {
                    if (0 === y)
                        return !0;
                    const z = x[y - 1];
                    return 1 === z.length;
                }(v, w))
                return;
            return _l(v, w, [c]);
        }
        const x = (0, d.put)(s, e),
            y = h ? (0, d.put)(u, h) : -1;
        if (x === t.length && (t[x] = null != _i ? _i : null), !b || ! function(z, A, B, C, D, E) {
                if (0 === A)
                    return !1;
                const F = z[A - 1];
                return 1 !== F.length && B === F[1] && C === F[2] && D === F[3] && E === (5 === F.length ? F[4] : -1);
            }(v, w, x, f, g, y))
            return _l(v, w, h ? [
                c,
                x,
                f,
                g,
                y
            ] : [
                c,
                x,
                f,
                g
            ]);
    };
}), a.register('S48Em', function(b, c) {
    let d, e, f;
    _h(b.exports, 'put', function() {
        return e;
    }), _h(b.exports, 'SetArray', function() {
        return _g;
    });
    class _g {
        constructor() {
            this._indexes = {
                __proto__: null
            }, this.array = [];
        }
    }
    d = (b, _h) => b._indexes[_h], e = (b, _h) => {
        const h = d(b, _h);
        if (void 0 !== h)
            return h;
        const {
            array: i,
            _indexes: j
        } = b;
        return j[_h] = i.push(_h) - 1;
    }, f = b => {
        const {
            array: _h,
            _indexes: i
        } = b;
        0 !== _h.length && (i[_h.pop()] = void 0);
    };
}), a.register('kiyfA', function(b, c) {
    _k(b.exports, 'decode', function() {
        return _l;
    }), _k(b.exports, 'encode', function() {
        return _l;
    });
    var d = a('uOKha').Buffer;
    const e = ','.charCodeAt(0),
        f = ';'.charCodeAt(0),
        g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        h = new Uint8Array(64),
        i = new Uint8Array(128);
    for (let j = 0; j < g.length; j++) {
        const _k = g.charCodeAt(j);
        h[j] = _k, i[_k] = j;
    }
    const k = 'undefined' != typeof TextDecoder ? new TextDecoder() : void 0 !== d ? {
        decode: j => d.from(j.buffer, j.byteOffset, j.byteLength).toString()
    } : {
        decode(l) {
            let m = '';
            for (let n = 0; n < l.length; n++)
                m += String.fromCharCode(l[n]);
            return m;
        }
    };

    function _l(m) {
        const n = new Int32Array(5),
            o = [];
        let p = 0;
        do {
            const q = _l(m, p),
                r = [];
            let s = !0,
                t = 0;
            n[0] = 0;
            for (let u = p; u < q; u++) {
                let v;
                u = _l(m, u, n, 0);
                const w = n[0];
                w < t && (s = !1), t = w, _l(m, u, q) ? (u = _l(m, u, n, 1), u = _l(m, u, n, 2), u = _l(m, u, n, 3), _l(m, u, q) ? (u = _l(m, u, n, 4), v = [
                    w,
                    n[1],
                    n[2],
                    n[3],
                    n[4]
                ]) : v = [
                    w,
                    n[1],
                    n[2],
                    n[3]
                ]) : v = [w], r.push(v);
            }
            s || _l(r), u.push(r), p = q + 1;
        } while (p <= m.length);
        return o;
    }

    function _l(m, n) {
        const o = m.indexOf(';', n);
        return -1 === o ? m.length : o;
    }

    function _l(m, n, o, p) {
        let q = 0,
            r = 0,
            s = 0;
        do {
            const t = m.charCodeAt(n++);
            s = i[t], q |= (31 & s) << r, r += 5;
        } while (32 & s);
        const t = 1 & q;
        return q >>>= 1, t && (q = -2147483648 | -q), o[p] += q, n;
    }

    function _l(m, n, o) {
        return !(n >= o) && m.charCodeAt(n) !== e;
    }

    function _l(m) {
        m.sort(_l);
    }

    function _l(m, n) {
        return m[0] - n[0];
    }

    function _l(m) {
        const n = new Int32Array(5),
            o = 16384,
            p = 16348,
            q = new Uint8Array(o),
            r = q.subarray(0, p);
        let s = 0,
            t = '';
        for (let u = 0; u < m.length; u++) {
            const v = m[u];
            if (u > 0 && (s === o && (t += k.decode(q), s = 0), q[s++] = f), 0 !== v.length) {
                n[0] = 0;
                for (let w = 0; w < v.length; w++) {
                    const x = v[w];
                    s > p && (t += k.decode(r), q.copyWithin(0, p, s), s -= p), w > 0 && (q[s++] = e), s = _l(q, s, n, x, 0), 1 !== x.length && (s = _l(q, s, n, x, 1), s = _l(q, s, n, x, 2), s = _l(q, s, n, x, 3), 4 !== x.length && (s = _l(q, s, n, x, 4)));
                }
            }
        }
        return t + k.decode(q.subarray(0, s));
    }

    function _l(m, n, o, p, q) {
        const r = p[q];
        let s = r - o[q];
        o[q] = r, s = s < 0 ? -s << 1 | 1 : s << 1;
        do {
            let t = 31 & s;
            s >>>= 5, s > 0 && (t |= 32), m[n++] = h[t];
        } while (s > 0);
        return n;
    }
}), a.register('fQxUf', function(b, c) {
    _h(b.exports, 'TraceMap', function() {
        return _t;
    }), _h(b.exports, 'decodedMappings', function() {
        return _j;
    });
    var d = a('kiyfA'),
        e = a('gYYl+');

    function f(g, _h) {
        return _h && !_h.endsWith('/') && (_h += '/'), (0, e.default)(g, _h);
    }

    function f(g, h) {
        for (let i = h; i < g.length; i++)
            if (!_f(g[i]))
                return i;
        return g.length;
    }

    function _f(g) {
        for (let h = 1; h < g.length; h++)
            if (g[h][0] < g[h - 1][0])
                return !1;
        return !0;
    }

    function f(g, h) {
        return h || (g = g.slice()), g.sort(_f);
    }

    function _f(g, h) {
        return g[0] - h[0];
    }
    let f = !1;

    function g(h, i, j) {
        for (let k = j + 1; k < h.length && h[k][0] === i; j = k++);
        return j;
    }

    function g(h, i, j) {
        for (let k = j - 1; k >= 0 && h[k][0] === i; j = k--);
        return j;
    }

    function g() {
        return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1
        };
    }

    function g(h, i, j, k) {
        const {
            lastKey: l,
            lastNeedle: m,
            lastIndex: n
        } = j;
        let o = 0,
            p = h.length - 1;
        if (k === l) {
            if (i === m)
                return f = -1 !== n && h[n][0] === i, n;
            i >= m ? o = -1 === n ? 0 : n : p = n;
        }
        return j.lastKey = k, j.lastNeedle = i, j.lastIndex = function(q, r, s, t) {
            for (; s <= t;) {
                const u = s + (t - s >> 1),
                    v = q[u][0] - r;
                if (0 === v)
                    return f = !0, u;
                v < 0 ? s = u + 1 : t = u - 1;
            }
            return f = !1, s - 1;
        }(h, i, o, p);
    }

    function g(h, i, j) {
        for (let k = h.length; k > i; k--)
            h[k] = h[k - 1];
        h[i] = k;
    }

    function g() {
        return {
            __proto__: null
        };
    }
    const g = '`line` must be greater than 0 (lines start at line 1)',
        _h = '`column` must be greater than or equal to 0 (columns start at column 0)';
    let _i, _j, k, l, m, n, _o, p, q, r, s;
    class _t {
        constructor(u, v) {
            const w = 'string' == typeof u;
            if (!w && u._decodedMemo)
                return u;
            const x = w ? JSON.parse(u) : u,
                {
                    version: y,
                    file: z,
                    names: A,
                    sourceRoot: B,
                    sources: C,
                    sourcesContent: D
                } = x;
            this.version = y, this.file = z, this.names = A, this.sourceRoot = B, this.sources = C, this.sourcesContent = D;
            const E = _B(B || '', function(F) {
                if (!F)
                    return '';
                const G = F.lastIndexOf('/');
                return F.slice(0, G + 1);
            }(v));
            this.resolvedSources = C.map(u => _B(u || '', E));
            const {
                mappings: F
            } = x;
            'string' == typeof F ? (this._encoded = F, this._decoded = void 0) : (this._encoded = void 0, this._decoded = function(G, H) {
                const I = _C(G, 0);
                if (I === G.length)
                    return G;
                H || (G = G.slice());
                for (let J = I; J < G.length; J = _C(G, J + 1))
                    G[J] = _E(G[J], H);
                return G;
            }(F, w)), this._decodedMemo = {
                lastKey: -1,
                lastNeedle: -1,
                lastIndex: -1
            }, this._bySources = void 0, this._bySourceMemos = void 0;
        }
    }

    function _u(v, w) {
        return {
            version: v.version,
            file: v.file,
            names: v.names,
            sourceRoot: v.sourceRoot,
            sources: v.sources,
            sourcesContent: v.sourcesContent,
            mappings: w
        };
    }

    function u(v, w, x, y) {
        return {
            source: v,
            line: w,
            column: x,
            name: y
        };
    }

    function u(v, w) {
        return {
            line: v,
            column: w
        };
    }

    function u(v, w, x, y, z) {
        let A = _m(v, y, w, x);
        return f ? A = (-1 === z ? _R : _S)(v, y, A) : -1 === z && A++, -1 === A || A === v.length ? -1 : A;
    }
    (() => {
        function u(v, w, x, y, z, A) {
            if (--x < 0)
                throw new Error(g);
            if (y < 0)
                throw new Error(_h);
            const {
                sources: _B,
                resolvedSources: _C
            } = v;
            let D = _B.indexOf(w);
            if (-1 === D && (D = _C.indexOf(w)), -1 === D)
                return A ? [] : _p(null, null);
            const _E = v._bySources || (v._bySources = function(F, G) {
                    const H = G.map(_o);
                    for (let I = 0; I < F.length; I++) {
                        const J = F[I];
                        for (let K = 0; K < J.length; K++) {
                            const L = J[K];
                            if (1 === L.length)
                                continue;
                            const M = L[1],
                                N = L[2],
                                O = L[3],
                                P = H[M],
                                Q = P[N] || (P[N] = []),
                                R = G[M],
                                _S = _R(Q, O, _m(Q, O, R, N));
                            _n(Q, R.lastIndex = _S + 1, [
                                O,
                                I,
                                L[0]
                            ]);
                        }
                    }
                    return H;
                }(_j(v), v._bySourceMemos = _B.map(_i))),
                F = _E[D][x];
            if (null == F)
                return A ? [] : _p(null, null);
            const G = v._bySourceMemos[D];
            if (A)
                return function(H, I, J, K, L) {
                    let M = _p(H, I, J, K, 1);
                    f || -1 !== L || M++;
                    if (-1 === M || M === H.length)
                        return [];
                    const N = f ? K : H[M][0];
                    f || (M = _i(H, N, M));
                    const O = _R(H, N, M),
                        P = [];
                    for (; M <= O; M++) {
                        const Q = H[M];
                        P.push(_p(Q[1] + 1, Q[2]));
                    }
                    return P;
                }(F, G, x, y, z);
            const H = _p(F, G, x, y, z);
            if (-1 === H)
                return _p(null, null);
            const I = F[H];
            return _p(I[1] + 1, I[2]);
        }
        _i = b => {
            var u;
            return null !== (u = b._encoded) && void 0 !== u ? u : b._encoded = (0, d.encode)(b._decoded);
        }, _j = b => b._decoded || (b._decoded = (0, d.decode)(b._encoded)), k = (b, _u, a) => {
            const u = _j(b);
            if (_u >= u.length)
                return null;
            const v = u[_u],
                w = _p(v, b._decodedMemo, _u, a, 1);
            return -1 === w ? null : v[w];
        }, l = (b, {
            line: _u,
            column: v,
            bias: w
        }) => {
            if (--_u < 0)
                throw new Error(g);
            if (v < 0)
                throw new Error(_h);
            const x = _j(b);
            if (_u >= x.length)
                return _p(null, null, null, null);
            const y = x[_u],
                z = _p(y, b._decodedMemo, _u, v, w || 1);
            if (-1 === z)
                return _p(null, null, null, null);
            const A = y[z];
            if (1 === A.length)
                return _p(null, null, null, null);
            const {
                names: B,
                resolvedSources: C
            } = b;
            return _p(C[A[1]], A[2] + 1, A[3], 5 === A.length ? B[A[4]] : null);
        }, n = (_u, {
            source: x,
            line: y,
            column: z,
            bias: A
        }) => b(_u, x, y, z, A || -1, !0), m = (_u, {
            source: B,
            line: C,
            column: D,
            bias: E
        }) => b(_u, B, C, D, E || 1, !1), _o = (b, _u) => {
            const F = _j(b),
                {
                    names: G,
                    resolvedSources: H
                } = b;
            for (let I = 0; I < F.length; I++) {
                const J = F[I];
                for (let K = 0; K < J.length; K++) {
                    const L = J[K],
                        M = I + 1,
                        N = L[0];
                    let O = null,
                        P = null,
                        Q = null,
                        _R = null;
                    1 !== L.length && (O = H[L[1]], P = L[2] + 1, Q = L[3]), 5 === L.length && (_R = G[L[4]]), _u({
                        generatedLine: M,
                        generatedColumn: N,
                        source: O,
                        originalLine: P,
                        originalColumn: Q,
                        name: _R
                    });
                }
            }
        }, p = (b, _u) => {
            const {
                sources: F,
                resolvedSources: G,
                sourcesContent: H
            } = b;
            if (null == H)
                return null;
            let I = F.indexOf(_u);
            return -1 === I && (I = G.indexOf(_u)), -1 === I ? null : H[I];
        }, q = (b, _u) => {
            const F = new _t(_p(b, []), _u);
            return F._decoded = b.mappings, F;
        }, r = b => _p(b, _j(b)), s = b => _p(b, _i(b));
    })();
}), a.register('gYYl+', function(b, c) {
    _k(b.exports, 'default', function() {
        return _i;
    });
    const d = /^[\w+.-]+:\/\//,
        e = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
        f = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    var g, h;

    function i(j) {
        return j.startsWith('/');
    }

    function i(j) {
        return /^[.?#]/.test(j);
    }

    function i(j) {
        const _k = e.exec(j);
        return _i(_k[1], _k[2] || '', _k[3], _k[4] || '', _k[5] || '/', _k[6] || '', _k[7] || '');
    }

    function _i(j, k, l, m, n, o, p) {
        return {
            scheme: j,
            user: k,
            host: l,
            port: m,
            path: n,
            query: o,
            hash: p,
            type: g.Absolute
        };
    }

    function i(j) {
        if (function(k) {
                return k.startsWith('//');
            }(j)) {
            const k = _q('http:' + j);
            return k.scheme = '', k.type = g.SchemeRelative, k;
        }
        if (_r(j)) {
            const k = _q('http://foo.com' + j);
            return k.scheme = '', k.host = '', k.type = g.AbsolutePath, k;
        }
        if (function(k) {
                return k.startsWith('file:');
            }(j))
            return function(k) {
                const l = f.exec(k),
                    m = l[2];
                return _o('file:', '', l[1] || '', '', _r(m) ? m : '/' + m, l[3] || '', l[4] || '');
            }(j);
        if (function(k) {
                return d.test(k);
            }(j))
            return _q(j);
        const k = _q('http://foo.com/' + j);
        return k.scheme = '', k.host = '', k.type = j ? j.startsWith('?') ? g.Query : j.startsWith('#') ? g.Hash : g.RelativePath : g.Empty, k;
    }

    function _i(j, k) {
        const l = k <= g.RelativePath,
            m = j.path.split('/');
        let n = 1,
            o = 0,
            p = !1;
        for (let q = 1; q < m.length; q++) {
            const r = m[q];
            r ? (p = !1, '.' !== r && ('..' !== r ? (m[n++] = r, o++) : o ? (p = !0, o--, n--) : l && (m[n++] = r))) : p = !0;
        }
        let _r = '';
        for (let s = 1; s < n; s++)
            _r += '/' + m[s];
        (!_r || p && !_r.endsWith('/..')) && (_r += '/'), s.path = _r;
    }

    function _i(j, k) {
        if (!j && !k)
            return '';
        const l = _p(j);
        let m = l.type;
        if (k && m !== g.Absolute) {
            const n = _p(k),
                o = n.type;
            switch (m) {
                case g.Empty:
                    l.hash = n.hash;
                case g.Hash:
                    l.query = n.query;
                case g.Query:
                case g.RelativePath:
                    ! function(p, q) {
                        _k(q, q.type), '/' === p.path ? p.path = q.path : p.path = function(r) {
                            if (r.endsWith('/..'))
                                return r;
                            const s = r.lastIndexOf('/');
                            return r.slice(0, s + 1);
                        }(q.path) + p.path;
                    }(l, n);
                case g.AbsolutePath:
                    l.user = n.user, l.host = n.host, l.port = n.port;
                case g.SchemeRelative:
                    l.scheme = n.scheme;
            }
            o > m && (m = o);
        }
        _k(l, m);
        const n = l.query + l.hash;
        switch (m) {
            case g.Hash:
            case g.Query:
                return n;
            case g.RelativePath: {
                const o = l.path.slice(1);
                return o ? _p(k || j) && !_p(o) ? './' + o + n : o + n : n || '.';
            }
            case g.AbsolutePath:
                return l.path + n;
            default:
                return l.scheme + '//' + l.user + l.host + l.port + l.path + n;
        }
    }
    (h = g || (g = {}))[h.Empty = 1] = 'Empty', h[h.Hash = 2] = 'Hash', h[h.Query = 3] = 'Query', h[h.RelativePath = 4] = 'RelativePath', h[h.AbsolutePath = 5] = 'AbsolutePath', h[h.SchemeRelative = 6] = 'SchemeRelative', h[h.Absolute = 7] = 'Absolute';
}), a.register('KJJj7', function(b, c) {
    _g(b.exports, 'HelperManager', function() {
        return _e;
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
    class _e {
        __init() {
            this.helperNames = {};
        }
        __init2() {
            this.createRequireName = null;
        }
        getHelperName(f) {
            let _g = this.helperNames[f];
            return _g || (_g = this.nameManager.claimFreeName(`_${ f }`), this.helperNames[f] = _g, _g);
        }
        emitHelpers() {
            let f = '';
            this.helperNames.optionalChainDelete && this.getHelperName('optionalChain'), this.helperNames.asyncOptionalChainDelete && this.getHelperName('asyncOptionalChain');
            for (const [g, h] of Object.entries(d)) {
                const i = this.helperNames[g];
                let j = h;
                'optionalChainDelete' === g ? j = j.replace('OPTIONAL_CHAIN_NAME', this.helperNames.optionalChain) : 'asyncOptionalChainDelete' === g ? j = j.replace('ASYNC_OPTIONAL_CHAIN_NAME', this.helperNames.asyncOptionalChain) : 'require' === g && (null === this.createRequireName && (this.createRequireName = this.nameManager.claimFreeName('_createRequire')), j = j.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), i && (f += ' ', f += j.replace(g, i).replace(/\s+/g, ' ').trim());
            }
            return f;
        }
        constructor(f) {
            this.nameManager = f, _e.prototype.__init.call(this), _e.prototype.__init2.call(this);
        }
    }
}), a.register('HRBF1', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('sK5Ca'),
        e = a('8rqpk');

    function _f(g, _h, i) {
        (function(j, k) {
            for (const l of j.tokens)
                if (l.type === e.TokenType.name && !l.isType && (0, d.isNonTopLevelDeclaration)(l) && k.has(j.identifierNameForToken(l)))
                    return !0;
            return !1;
        }(g, i) && function(j, k, l) {
            const m = [];
            let n = k.length - 1;
            for (let o = j.tokens.length - 1;; o--) {
                for (; m.length > 0 && m[m.length - 1].startTokenIndex === o + 1;)
                    m.pop();
                for (; n >= 0 && k[n].endTokenIndex === o + 1;)
                    m.push(k[n]), n--;
                if (o < 0)
                    break;
                const _p = j.tokens[o],
                    _q = j.identifierNameForToken(_p);
                if (m.length > 1 && !_p.isType && _p.type === e.TokenType.name && l.has(_q))
                    if ((0, d.isBlockScopedDeclaration)(_p))
                        _f(m[m.length - 1], j, _q);
                    else if ((0, d.isFunctionScopedDeclaration)(_p)) {
                    let r = m.length - 1;
                    for (; r > 0 && !m[r].isFunctionScope;)
                        r--;
                    if (r < 0)
                        throw new Error('Did not find parent function scope.');
                    _f(m[r], j, _q);
                }
            }
            if (m.length > 0)
                throw new Error('Expected empty scope stack after processing file.');
        }(g, _h, i));
    }

    function _f(g, h, i) {
        for (let j = g.startTokenIndex; j < g.endTokenIndex; j++) {
            const k = h.tokens[j];
            k.type !== e.TokenType.name && k.type !== e.TokenType.jsxName || h.identifierNameForToken(k) !== i || (k.shadowsGlobal = !0);
        }
    }
}), a.register('DeXlE', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('veTsv');
    class _e {
        __init() {
            this.usedNames = new Set();
        }
        claimFreeName(f) {
            const _g = this.findFreeName(f);
            return this.usedNames.add(_g), _g;
        }
        findFreeName(f) {
            if (!this.usedNames.has(f))
                return f;
            let g = 2;
            for (; this.usedNames.has(f + String(g));)
                g++;
            return f + String(g);
        }
        constructor(f, g) {
            _e.prototype.__init.call(this), this.usedNames = new Set((0, d.default)(f, g));
        }
    }
}), a.register('veTsv', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8rqpk');

    function _e(f, _g) {
        const h = [];
        for (const i of _g)
            i.type === d.TokenType.name && h.push(f.slice(i.start, i.end));
        return h;
    }
}), a.register('q24BP', function(b, c) {
    _c(b.exports, 'validateOptions', function() {
        return _g;
    });
    var d = a('Yfqgb'),
        e = a('se9s+');
    const {
        Options: f
    } = (0, d.createCheckers)(e.default);

    function _g(h) {
        f.strictCheck(h);
    }
}), a.register('Yfqgb', function(b, _c) {
    var d = b.exports && b.exports.__spreadArrays || function() {
        for (var e = 0, f = 0, g = arguments.length; f < g; f++)
            e += arguments[f].length;
        var h = Array(e),
            i = 0;
        for (f = 0; f < g; f++)
            for (var j = arguments[f], k = 0, l = j.length; k < l; k++, i++)
                h[i] = j[k];
        return h;
    };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.Checker = b.exports.createCheckers = void 0;
    var e = a('Ragaf'),
        f = a('6Xhox');
    e = a('Ragaf');
    Object.defineProperty(b.exports, 'TArray', {
        enumerable: !0,
        get: function() {
            return e.TArray;
        }
    }), Object.defineProperty(b.exports, 'TEnumType', {
        enumerable: !0,
        get: function() {
            return e.TEnumType;
        }
    }), Object.defineProperty(b.exports, 'TEnumLiteral', {
        enumerable: !0,
        get: function() {
            return e.TEnumLiteral;
        }
    }), Object.defineProperty(b.exports, 'TFunc', {
        enumerable: !0,
        get: function() {
            return e.TFunc;
        }
    }), Object.defineProperty(b.exports, 'TIface', {
        enumerable: !0,
        get: function() {
            return e.TIface;
        }
    }), Object.defineProperty(b.exports, 'TLiteral', {
        enumerable: !0,
        get: function() {
            return e.TLiteral;
        }
    }), Object.defineProperty(b.exports, 'TName', {
        enumerable: !0,
        get: function() {
            return e.TName;
        }
    }), Object.defineProperty(b.exports, 'TOptional', {
        enumerable: !0,
        get: function() {
            return e.TOptional;
        }
    }), Object.defineProperty(b.exports, 'TParam', {
        enumerable: !0,
        get: function() {
            return e.TParam;
        }
    }), Object.defineProperty(b.exports, 'TParamList', {
        enumerable: !0,
        get: function() {
            return e.TParamList;
        }
    }), Object.defineProperty(b.exports, 'TProp', {
        enumerable: !0,
        get: function() {
            return e.TProp;
        }
    }), Object.defineProperty(b.exports, 'TTuple', {
        enumerable: !0,
        get: function() {
            return e.TTuple;
        }
    }), Object.defineProperty(b.exports, 'TType', {
        enumerable: !0,
        get: function() {
            return e.TType;
        }
    }), Object.defineProperty(b.exports, 'TUnion', {
        enumerable: !0,
        get: function() {
            return e.TUnion;
        }
    }), Object.defineProperty(b.exports, 'TIntersection', {
        enumerable: !0,
        get: function() {
            return e.TIntersection;
        }
    }), Object.defineProperty(b.exports, 'array', {
        enumerable: !0,
        get: function() {
            return e.array;
        }
    }), Object.defineProperty(b.exports, 'enumlit', {
        enumerable: !0,
        get: function() {
            return e.enumlit;
        }
    }), Object.defineProperty(b.exports, 'enumtype', {
        enumerable: !0,
        get: function() {
            return e.enumtype;
        }
    }), Object.defineProperty(b.exports, 'func', {
        enumerable: !0,
        get: function() {
            return e.func;
        }
    }), Object.defineProperty(b.exports, 'iface', {
        enumerable: !0,
        get: function() {
            return e.iface;
        }
    }), Object.defineProperty(b.exports, 'lit', {
        enumerable: !0,
        get: function() {
            return e.lit;
        }
    }), Object.defineProperty(b.exports, 'name', {
        enumerable: !0,
        get: function() {
            return e.name;
        }
    }), Object.defineProperty(b.exports, 'opt', {
        enumerable: !0,
        get: function() {
            return e.opt;
        }
    }), Object.defineProperty(b.exports, 'param', {
        enumerable: !0,
        get: function() {
            return e.param;
        }
    }), Object.defineProperty(b.exports, 'tuple', {
        enumerable: !0,
        get: function() {
            return e.tuple;
        }
    }), Object.defineProperty(b.exports, 'union', {
        enumerable: !0,
        get: function() {
            return e.union;
        }
    }), Object.defineProperty(b.exports, 'intersection', {
        enumerable: !0,
        get: function() {
            return e.intersection;
        }
    }), Object.defineProperty(b.exports, 'BasicType', {
        enumerable: !0,
        get: function() {
            return e.BasicType;
        }
    });
    f = a('6Xhox');
    Object.defineProperty(b.exports, 'VError', {
        enumerable: !0,
        get: function() {
            return f.VError;
        }
    }), b.exports.createCheckers = function() {
        for (var g = [], h = 0; h < arguments.length; h++)
            g[h] = arguments[h];
        for (var i = Object.assign.apply(Object, d([{},
                e.basicTypes
            ], g)), j = {}, k = 0, l = g; k < l.length; k++)
            for (var m = l[k], n = 0, _o = Object.keys(m); n < _o.length; n++) {
                var _p = _o[n];
                j[_p] = new _g(i, m[_p]);
            }
        return j;
    };
    var _g = function() {
        function h(i, j, k) {
            if (void 0 === k && (k = 'value'), this.suite = i, this.ttype = j, this._path = k, this.props = new Map(), j instanceof e.TIface)
                for (var l = 0, m = j.props; l < m.length; l++) {
                    var n = m[l];
                    this.props.set(n.name, n.ttype);
                }
            this.checkerPlain = this.ttype.getChecker(i, !1), this.checkerStrict = this.ttype.getChecker(i, !0);
        }
        return b.prototype.setReportedPath = function(h) {
            this._path = h;
        }, b.prototype.check = function(h) {
            return this._doCheck(this.checkerPlain, h);
        }, b.prototype.test = function(h) {
            return this.checkerPlain(h, new f.NoopContext());
        }, b.prototype.validate = function(h) {
            return this._doValidate(this.checkerPlain, h);
        }, b.prototype.strictCheck = function(h) {
            return this._doCheck(this.checkerStrict, h);
        }, b.prototype.strictTest = function(h) {
            return this.checkerStrict(h, new f.NoopContext());
        }, b.prototype.strictValidate = function(h) {
            return this._doValidate(this.checkerStrict, h);
        }, b.prototype.getProp = function(h) {
            var i = this.props.get(h);
            if (!i)
                throw new Error('Type has no property ' + h);
            return new b(this.suite, i, this._path + '.' + h);
        }, b.prototype.methodArgs = function(h) {
            var i = this._getMethod(h);
            return new b(this.suite, i.paramList);
        }, b.prototype.methodResult = function(h) {
            var i = this._getMethod(h);
            return new b(this.suite, i.result);
        }, b.prototype.getArgs = function() {
            if (!(this.ttype instanceof e.TFunc))
                throw new Error('getArgs() applied to non-function');
            return new b(this.suite, this.ttype.paramList);
        }, b.prototype.getResult = function() {
            if (!(this.ttype instanceof e.TFunc))
                throw new Error('getResult() applied to non-function');
            return new b(this.suite, this.ttype.result);
        }, b.prototype.getType = function() {
            return this.ttype;
        }, b.prototype._doCheck = function(h, i) {
            if (!h(i, new f.NoopContext())) {
                var j = new f.DetailContext();
                throw h(i, j), j.getError(this._path);
            }
        }, b.prototype._doValidate = function(h, i) {
            if (h(i, new f.NoopContext()))
                return null;
            var j = new f.DetailContext();
            return h(i, j), j.getErrorDetail(this._path);
        }, b.prototype._getMethod = function(h) {
            var i = this.props.get(h);
            if (!i)
                throw new Error('Type has no property ' + h);
            if (!(i instanceof e.TFunc))
                throw new Error('Property ' + h + ' is not a method');
            return i;
        }, b;
    }();
    b.exports.Checker = _g;
}), a.register('Ragaf', function(b, c) {
    var d, e = a('uOKha').Buffer,
        f = b.exports && b.exports.__extends || (d = function(g, h) {
            return d = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(i, j) {
                i.__proto__ = j;
            } || function(i, j) {
                for (var k in j)
                    j.hasOwnProperty(k) && (i[k] = j[k]);
            }, d(g, h);
        }, function(g, h) {
            function i() {
                this.constructor = g;
            }
            d(g, h), g.prototype = null === h ? Object.create(h) : (a.prototype = h.prototype, new a());
        });
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.basicTypes = b.exports.BasicType = b.exports.TParamList = b.exports.TParam = b.exports.param = b.exports.TFunc = b.exports.func = b.exports.TProp = b.exports.TOptional = b.exports.opt = b.exports.TIface = b.exports.iface = b.exports.TEnumLiteral = b.exports.enumlit = b.exports.TEnumType = b.exports.enumtype = b.exports.TIntersection = b.exports.intersection = b.exports.TUnion = b.exports.union = b.exports.TTuple = b.exports.tuple = b.exports.TArray = b.exports.array = b.exports.TLiteral = b.exports.lit = b.exports.TName = b.exports.name = b.exports.TType = void 0;
    var g = a('6Xhox'),
        h = function() {};

    function i(j) {
        return 'string' == typeof j ? _i(j) : j;
    }

    function i(j, k) {
        var l = j[k];
        if (!l)
            throw new Error('Unknown type ' + k);
        return l;
    }

    function _i(j) {
        return new _i(j);
    }
    b.exports.TType = h, b.exports.name = _A;
    var _i = function(j) {
        function k(l) {
            var m = j.call(this) || this;
            return m.name = l, m._failMsg = 'is not a ' + l, m;
        }
        return f(c, j), c.prototype.getChecker = function(k, l, m) {
            var n = this,
                o = _i(k, this.name),
                p = o.getChecker(k, l, m);
            return o instanceof _w || o instanceof c ? p : function(q, r) {
                return !!p(q, r) || r.fail(null, n._failMsg, 0);
            };
        }, c;
    }(h);
    b.exports.TName = _i, b.exports.lit = function(j) {
        return new _j(j);
    };
    var _j = function(k) {
        function l(m) {
            var n = k.call(this) || this;
            return n.value = m, n.name = JSON.stringify(m), n._failMsg = 'is not ' + n.name, n;
        }
        return f(c, k), c.prototype.getChecker = function(l, m) {
            var n = this;
            return function(o, p) {
                return o === n.value || p.fail(null, n._failMsg, -1);
            };
        }, c;
    }(h);
    b.exports.TLiteral = _j, b.exports.array = function(k) {
        return new _k(_z(k));
    };
    var _k = function(l) {
        function m(n) {
            var o = l.call(this) || this;
            return o.ttype = n, o;
        }
        return f(c, l), c.prototype.getChecker = function(m, n) {
            var o = this.ttype.getChecker(m, n);
            return function(p, q) {
                if (!Array.isArray(p))
                    return q.fail(null, 'is not an array', 0);
                for (var r = 0; r < p.length; r++) {
                    if (!o(p[r], q))
                        return q.fail(r, null, 1);
                }
                return !0;
            };
        }, c;
    }(h);
    b.exports.TArray = _k, b.exports.tuple = function() {
        for (var l = [], m = 0; m < arguments.length; m++)
            l[m] = arguments[m];
        return new _l(l.map(function(n) {
            return _z(n);
        }));
    };
    var _l = function(m) {
        function n(o) {
            var p = m.call(this) || this;
            return p.ttypes = o, p;
        }
        return f(c, m), c.prototype.getChecker = function(n, o) {
            var p = this.ttypes.map(function(q) {
                    return q.getChecker(n, o);
                }),
                q = function(r, s) {
                    if (!Array.isArray(r))
                        return s.fail(null, 'is not an array', 0);
                    for (var t = 0; t < p.length; t++) {
                        if (!p[t](r[t], s))
                            return s.fail(t, null, 1);
                    }
                    return !0;
                };
            return o ? function(r, s) {
                return !!q(r, s) && (r.length <= p.length || s.fail(p.length, 'is extraneous', 2));
            } : q;
        }, c;
    }(h);
    b.exports.TTuple = _l, b.exports.union = function() {
        for (var m = [], n = 0; n < arguments.length; n++)
            m[n] = arguments[n];
        return new _m(m.map(function(o) {
            return _z(o);
        }));
    };
    var _m = function(n) {
        function o(p) {
            var q = n.call(this) || this;
            q.ttypes = p;
            var r = p.map(function(s) {
                    return s instanceof _i || s instanceof _j ? s.name : null;
                }).filter(function(s) {
                    return s;
                }),
                s = p.length - r.length;
            return r.length ? (s > 0 && r.push(s + ' more'), q._failMsg = 'is none of ' + r.join(', ')) : q._failMsg = 'is none of ' + s + ' types', q;
        }
        return f(c, n), c.prototype.getChecker = function(o, p) {
            var q = this,
                r = this.ttypes.map(function(s) {
                    return s.getChecker(o, p);
                });
            return function(s, t) {
                for (var u = t.unionResolver(), v = 0; v < r.length; v++) {
                    if (r[v](s, u.createContext()))
                        return !0;
                }
                return t.resolveUnion(u), t.fail(null, q._failMsg, 0);
            };
        }, c;
    }(h);
    b.exports.TUnion = _m, b.exports.intersection = function() {
        for (var n = [], o = 0; o < arguments.length; o++)
            n[o] = arguments[o];
        return new _n(n.map(function(p) {
            return _z(p);
        }));
    };
    var _n = function(o) {
        function p(q) {
            var r = o.call(this) || this;
            return r.ttypes = q, r;
        }
        return f(c, o), c.prototype.getChecker = function(p, q) {
            var r = new Set(),
                s = this.ttypes.map(function(t) {
                    return t.getChecker(p, q, r);
                });
            return function(t, u) {
                return !!s.every(function(v) {
                    return v(t, u);
                }) || u.fail(null, null, 0);
            };
        }, c;
    }(h);
    b.exports.TIntersection = _n, b.exports.enumtype = function(o) {
        return new _o(o);
    };
    var _o = function(p) {
        function q(r) {
            var s = p.call(this) || this;
            return s.members = r, s.validValues = new Set(), s._failMsg = 'is not a valid enum value', s.validValues = new Set(Object.keys(r).map(function(t) {
                return r[t];
            })), s;
        }
        return f(c, p), c.prototype.getChecker = function(q, r) {
            var s = this;
            return function(t, u) {
                return !!s.validValues.has(t) || u.fail(null, s._failMsg, 0);
            };
        }, c;
    }(h);
    b.exports.TEnumType = _o, b.exports.enumlit = function(p, q) {
        return new _p(p, q);
    };
    var _p = function(q) {
        function r(s, t) {
            var u = q.call(this) || this;
            return u.enumName = s, u.prop = t, u._failMsg = 'is not ' + s + '.' + t, u;
        }
        return f(c, q), c.prototype.getChecker = function(r, s) {
            var t = this,
                u = _i(r, this.enumName);
            if (!(u instanceof _o))
                throw new Error('Type ' + this.enumName + ' used in enumlit is not an enum type');
            var v = u.members[this.prop];
            if (!u.members.hasOwnProperty(this.prop))
                throw new Error('Unknown value ' + this.enumName + '.' + this.prop + ' used in enumlit');
            return function(w, x) {
                return w === v || x.fail(null, t._failMsg, -1);
            };
        }, c;
    }(h);

    function q(r) {
        return Object.keys(r).map(function(s) {
            return function(t, u) {
                return u instanceof _r ? new _s(t, u.ttype, !0) : new _s(t, _z(u), !1);
            }(s, r[s]);
        });
    }
    b.exports.TEnumLiteral = _p, b.exports.iface = function(q, r) {
        return new _q(q, _p(r));
    };
    var _q = function(r) {
        function s(t, u) {
            var v = r.call(this) || this;
            return v.bases = t, v.props = u, v.propSet = new Set(u.map(function(w) {
                return w.name;
            })), v;
        }
        return f(c, r), c.prototype.getChecker = function(s, t, u) {
            var v = this,
                w = this.bases.map(function(x) {
                    return _i(s, x).getChecker(s, t);
                }),
                x = this.props.map(function(y) {
                    return y.ttype.getChecker(s, t);
                }),
                y = new g.NoopContext(),
                _z = this.props.map(function(A, B) {
                    return !A.isOpt && !x[B](void 0, y);
                }),
                _A = function(B, C) {
                    if ('object' != typeof B || null === B)
                        return C.fail(null, 'is not an object', 0);
                    for (var D = 0; D < w.length; D++)
                        if (!w[D](B, C))
                            return !1;
                    for (D = 0; D < x.length; D++) {
                        var E = v.props[D].name,
                            F = B[E];
                        if (void 0 === F) {
                            if (_z[D])
                                return C.fail(E, 'is missing', 1);
                        } else if (!x[D](F, C))
                            return C.fail(E, null, 1);
                    }
                    return !0;
                };
            if (!t)
                return _A;
            var B = this.propSet;
            return u && (this.propSet.forEach(function(C) {
                    return u.add(C);
                }), B = u),
                function(C, D) {
                    if (!_A(C, D))
                        return !1;
                    for (var E in C)
                        if (!B.has(E))
                            return D.fail(E, 'is extraneous', 2);
                    return !0;
                };
        }, c;
    }(h);
    b.exports.TIface = _q, b.exports.opt = function(r) {
        return new _r(_h(r));
    };
    var _r = function(s) {
        function t(u) {
            var v = s.call(this) || this;
            return v.ttype = u, v;
        }
        return f(c, s), c.prototype.getChecker = function(t, u) {
            var v = this.ttype.getChecker(t, u);
            return function(w, x) {
                return void 0 === w || v(w, x);
            };
        }, c;
    }(h);
    b.exports.TOptional = _r;
    var _s = function(t, u, v) {
        this.name = t, this.ttype = u, this.isOpt = v;
    };
    b.exports.TProp = _s, b.exports.func = function(t) {
        for (var u = [], v = 1; v < arguments.length; v++)
            u[v - 1] = arguments[v];
        return new _t(new _v(u), _h(t));
    };
    var _t = function(u) {
        function v(w, x) {
            var y = u.call(this) || this;
            return y.paramList = w, y.result = x, y;
        }
        return f(c, u), c.prototype.getChecker = function(v, w) {
            return function(x, y) {
                return 'function' == typeof x || y.fail(null, 'is not a function', 0);
            };
        }, c;
    }(h);
    b.exports.TFunc = _t, b.exports.param = function(u, v, w) {
        return new _u(u, _h(v), Boolean(w));
    };
    var _u = function(v, w, x) {
        this.name = v, this.ttype = w, this.isOpt = x;
    };
    b.exports.TParam = _u;
    var _v = function(w) {
        function x(y) {
            var z = w.call(this) || this;
            return z.params = y, z;
        }
        return f(c, w), c.prototype.getChecker = function(x, y) {
            var z = this,
                A = this.params.map(function(B) {
                    return B.ttype.getChecker(x, y);
                }),
                B = new g.NoopContext(),
                C = this.params.map(function(D, E) {
                    return !D.isOpt && !A[E](void 0, B);
                }),
                D = function(E, F) {
                    if (!Array.isArray(E))
                        return F.fail(null, 'is not an array', 0);
                    for (var G = 0; G < A.length; G++) {
                        var H = z.params[G];
                        if (void 0 === E[G]) {
                            if (C[G])
                                return F.fail(H.name, 'is missing', 1);
                        } else if (!A[G](E[G], F))
                            return F.fail(H.name, null, 1);
                    }
                    return !0;
                };
            return y ? function(E, F) {
                return !!D(E, F) && (E.length <= A.length || F.fail(A.length, 'is extraneous', 2));
            } : D;
        }, c;
    }(h);
    b.exports.TParamList = _v;
    var _w = function(x) {
        function y(z, A) {
            var B = x.call(this) || this;
            return B.validator = z, B.message = A, B;
        }
        return f(c, x), c.prototype.getChecker = function(y, z) {
            var A = this;
            return function(B, C) {
                return !!A.validator(B) || C.fail(null, A.message, 0);
            };
        }, c;
    }(h);
    b.exports.BasicType = _w, b.exports.basicTypes = {
        any: new _w(function(x) {
            return !0;
        }, 'is invalid'),
        number: new _w(function(x) {
            return 'number' == typeof x;
        }, 'is not a number'),
        object: new _w(function(x) {
            return 'object' == typeof x && x;
        }, 'is not an object'),
        boolean: new _w(function(x) {
            return 'boolean' == typeof x;
        }, 'is not a boolean'),
        string: new _w(function(x) {
            return 'string' == typeof x;
        }, 'is not a string'),
        symbol: new _w(function(x) {
            return 'symbol' == typeof x;
        }, 'is not a symbol'),
        void: new _w(function(x) {
            return null == x;
        }, 'is not void'),
        undefined: new _w(function(x) {
            return void 0 === x;
        }, 'is not undefined'),
        null: new _w(function(x) {
            return null === x;
        }, 'is not null'),
        never: new _w(function(x) {
            return !1;
        }, 'is unexpected'),
        Date: new _w(_y('[object Date]'), 'is not a Date'),
        RegExp: new _w(_y('[object RegExp]'), 'is not a RegExp')
    };
    var x = Object.prototype.toString;

    function _y(z) {
        return function(A) {
            return 'object' == typeof A && A && x.call(A) === z;
        };
    }
    void 0 !== e && (b.exports.basicTypes.Buffer = new _w(function(y) {
        return e.isBuffer(y);
    }, 'is not a Buffer'));
    for (var y = function(z) {
            b.exports.basicTypes[z.name] = new _w(function(A) {
                return A instanceof z;
            }, 'is not a ' + z.name);
        }, z = 0, A = [
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
        ]; z < A.length; z++) {
        y(A[z]);
    }
}), a.register('6Xhox', function(b, c) {
    var d, e = b.exports && b.exports.__extends || (d = function(f, g) {
        return d = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(h, i) {
            h.__proto__ = i;
        } || function(h, i) {
            for (var j in i)
                i.hasOwnProperty(j) && (h[j] = i[j]);
        }, d(f, g);
    }, function(f, g) {
        function h() {
            this.constructor = f;
        }
        d(f, g), f.prototype = null === g ? Object.create(g) : (e.prototype = g.prototype, new e());
    });
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.DetailContext = b.exports.NoopContext = b.exports.VError = void 0;
    var f = function(g) {
        function h(i, j) {
            var k = g.call(this, j) || this;
            return k.path = i, Object.setPrototypeOf(k, h.prototype), k;
        }
        return e(c, g), c;
    }(Error);
    b.exports.VError = f;
    var g = function() {
        function h() {}
        return b.prototype.fail = function(h, i, j) {
            return !1;
        }, b.prototype.unionResolver = function() {
            return this;
        }, b.prototype.createContext = function() {
            return this;
        }, b.prototype.resolveUnion = function(h) {}, b;
    }();
    b.exports.NoopContext = g;
    var h = function() {
        function i() {
            this._propNames = [''], this._messages = [null], this._score = 0;
        }
        return b.prototype.fail = function(i, j, k) {
            return this._propNames.push(i), this._messages.push(j), this._score += k, !1;
        }, b.prototype.unionResolver = function() {
            return new _i();
        }, b.prototype.resolveUnion = function(i) {
            for (var j, k, l = null, m = 0, n = i.contexts; m < n.length; m++) {
                var o = n[m];
                (!l || o._score >= l._score) && (l = o);
            }
            l && l._score > 0 && ((j = this._propNames).push.apply(j, l._propNames), (k = this._messages).push.apply(k, l._messages));
        }, b.prototype.getError = function(i) {
            for (var j = [], k = this._propNames.length - 1; k >= 0; k--) {
                var l = this._propNames[k];
                i += 'number' == typeof l ? '[' + l + ']' : l ? '.' + l : '';
                var m = this._messages[k];
                m && j.push(i + ' ' + m);
            }
            return new f(i, j.join('; '));
        }, b.prototype.getErrorDetail = function(i) {
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
        }, b;
    }();
    b.exports.DetailContext = h;
    var _i = function() {
        function j() {
            this.contexts = [];
        }
        return b.prototype.createContext = function() {
            var j = new h();
            return this.contexts.push(j), j;
        }, b;
    }();
}), a.register('se9s+', function(b, c) {
    _h(b.exports, 'default', function() {
        return _e;
    });
    var d = a('Yfqgb');
    var _e = {
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
}), a.register('NcMXu', function(b, c) {
    _h(b.exports, 'File', function() {
        return _f;
    }), _h(b.exports, 'parse', function() {
        return _g;
    });
    var d = a('UXH9U'),
        e = a('WBxO0');
    class _f {
        constructor(g, _h) {
            this.tokens = g, this.scopes = _h;
        }
    }

    function _g(h, i, j, k) {
        if (k && j)
            throw new Error('Cannot combine flow and typescript plugins.');
        (0, d.initParser)(h, i, j, k);
        const l = (0, e.parseFile)();
        if (d.state.error)
            throw (0, d.augmentError)(d.state.error);
        return l;
    }
}), a.register('WBxO0', function(b, c) {
    _s(b.exports, 'parseFile', function() {
        return _h;
    });
    var d = a('sK5Ca'),
        e = a('8+Hbk'),
        f = a('UXH9U'),
        g = a('PXvk6');

    function _h() {
        return 0 === f.state.pos && f.input.charCodeAt(0) === e.charCodes.numberSign && f.input.charCodeAt(1) === e.charCodes.exclamationMark && (0, d.skipLineComment)(2), (0, d.nextToken)(), (0, g.parseTopLevel)();
    }
}), a.register('PXvk6', function(b, c) {
    _s(b.exports, 'parseTopLevel', function() {
        return _p;
    }), _s(b.exports, 'parseBlockBody', function() {
        return _p;
    }), _s(b.exports, 'parseStatement', function() {
        return _p;
    }), _s(b.exports, 'parseDecorators', function() {
        return _p;
    }), _s(b.exports, 'parseClass', function() {
        return _p;
    }), _s(b.exports, 'parseVarStatement', function() {
        return _p;
    }), _s(b.exports, 'parseBlock', function() {
        return _p;
    }), _s(b.exports, 'parseImport', function() {
        return _p;
    }), _s(b.exports, 'parseExport', function() {
        return _p;
    }), _s(b.exports, 'parseFunction', function() {
        return _p;
    }), _s(b.exports, 'baseParseMaybeDecoratorArguments', function() {
        return _p;
    }), _s(b.exports, 'parseFunctionParams', function() {
        return _p;
    }), _s(b.exports, 'parseExportFrom', function() {
        return _p;
    }), _s(b.exports, 'parseExportSpecifiers', function() {
        return _p;
    }), _s(b.exports, 'baseParseExportStar', function() {
        return _p;
    });
    var d = a('NcMXu'),
        e = a('oRy1H'),
        f = a('R2GJq'),
        g = a('sK5Ca'),
        h = a('DIj/a'),
        _i = a('Exuei'),
        j = a('8rqpk'),
        k = a('8+Hbk'),
        l = a('UXH9U'),
        m = a('401Dp'),
        n = a('G28EM'),
        o = a('Tfs2H');

    function _p() {
        if (_p(j.TokenType.eof), l.state.scopes.push(new(0, _i.Scope)(0, l.state.tokens.length, !0)), 0 !== l.state.scopeDepth)
            throw new Error(`Invalid scope depth at end of file: ${ l.state.scopeDepth }`);
        return new(0, d.File)(l.state.tokens, l.state.scopes);
    }

    function _p(q) {
        l.isFlowEnabled && (0, e.flowTryParseStatement)() || ((0, g.match)(j.TokenType.at) && _p(), function(r) {
            if (l.isTypeScriptEnabled && (0, f.tsTryParseStatementContent)())
                return;
            const _s = l.state.type;
            switch (_s) {
                case j.TokenType._break:
                case j.TokenType._continue:
                    return (0, g.next)(), void((0, o.isLineTerminator)() || ((0, m.parseIdentifier)(), (0, o.semicolon)()));
                case j.TokenType._debugger:
                    return (0, g.next)(), void(0, o.semicolon)();
                case j.TokenType._do:
                    return (0, g.next)(), _p(!1), (0, o.expect)(j.TokenType._while), (0, m.parseParenExpression)(), void(0, g.eat)(j.TokenType.semi);
                case j.TokenType._for:
                    return void
                    function() {
                        l.state.scopeDepth++;
                        const t = l.state.tokens.length;
                        ! function() {
                            (0, g.next)();
                            let u = !1;
                            (0, o.isContextual)(h.ContextualKeyword._await) && (u = !0, (0, g.next)());
                            if ((0, o.expect)(j.TokenType.parenL), (0, g.match)(j.TokenType.semi))
                                return u && (0, o.unexpected)(), void _p();
                            const v = _p();
                            if (v || (0, g.match)(j.TokenType._var) || (0, g.match)(j.TokenType._let) || (0, g.match)(j.TokenType._const) || (0, o.isContextual)(h.ContextualKeyword._using) && !(0, o.isLookaheadContextual)(h.ContextualKeyword._of))
                                return v && (0, o.expectContextual)(h.ContextualKeyword._await), (0, g.next)(), _p(!0, l.state.type !== j.TokenType._var), (0, g.match)(j.TokenType._in) || (0, o.isContextual)(h.ContextualKeyword._of) ? void _p(u) : void _p();
                            if ((0, m.parseExpression)(!0), (0, g.match)(j.TokenType._in) || (0, o.isContextual)(h.ContextualKeyword._of))
                                return void _p(u);
                            u && (0, o.unexpected)();
                            _p();
                        }();
                        const u = l.state.tokens.length;
                        l.state.scopes.push(new(0, _i.Scope)(t, u, !1)), l.state.scopeDepth--;
                    }();
                case j.TokenType._function:
                    if ((0, g.lookaheadType)() === j.TokenType.dot)
                        break;
                    return r || (0, o.unexpected)(), void
                    function() {
                        const t = l.state.start;
                        (0, g.next)(), _p(t, !0);
                    }();
                case j.TokenType._class:
                    return r || (0, o.unexpected)(), void _p(!0);
                case j.TokenType._if:
                    return (0, g.next)(), (0, m.parseParenExpression)(), _p(!1), void((0, g.eat)(j.TokenType._else) && _p(!1));
                case j.TokenType._return:
                    return (0, g.next)(), void((0, o.isLineTerminator)() || ((0, m.parseExpression)(), (0, o.semicolon)()));
                case j.TokenType._switch:
                    return void
                    function() {
                        (0, g.next)(), (0, m.parseParenExpression)(), l.state.scopeDepth++;
                        const t = l.state.tokens.length;
                        (0, o.expect)(j.TokenType.braceL);
                        for (; !(0, g.match)(j.TokenType.braceR) && !l.state.error;)
                            if ((0, g.match)(j.TokenType._case) || (0, g.match)(j.TokenType._default)) {
                                const u = (0, g.match)(j.TokenType._case);
                                (0, g.next)(), u && (0, m.parseExpression)(), (0, o.expect)(j.TokenType.colon);
                            } else
                                _p(!0);
                        (0, g.next)();
                        const u = l.state.tokens.length;
                        l.state.scopes.push(new(0, _i.Scope)(t, u, !1)), l.state.scopeDepth--;
                    }();
                case j.TokenType._throw:
                    return (0, g.next)(), (0, m.parseExpression)(), void(0, o.semicolon)();
                case j.TokenType._try:
                    return void
                    function() {
                        if ((0, g.next)(), _p(), (0, g.match)(j.TokenType._catch)) {
                            (0, g.next)();
                            let t = null;
                            if ((0, g.match)(j.TokenType.parenL) && (l.state.scopeDepth++, t = l.state.tokens.length, (0, o.expect)(j.TokenType.parenL), (0, n.parseBindingAtom)(!0), l.isTypeScriptEnabled && (0, f.tsTryParseTypeAnnotation)(), (0, o.expect)(j.TokenType.parenR)), _p(), null != t) {
                                const u = l.state.tokens.length;
                                l.state.scopes.push(new(0, _i.Scope)(t, u, !1)), l.state.scopeDepth--;
                            }
                        }
                        (0, g.eat)(j.TokenType._finally) && _p();
                    }();
                case j.TokenType._let:
                case j.TokenType._const:
                    r || (0, o.unexpected)();
                case j.TokenType._var:
                    return void _p(_s !== j.TokenType._var);
                case j.TokenType._while:
                    return (0, g.next)(), (0, m.parseParenExpression)(), void _p(!1);
                case j.TokenType.braceL:
                    return void _p();
                case j.TokenType.semi:
                    return void(0, g.next)();
                case j.TokenType._export:
                case j.TokenType._import: {
                    const t = (0, g.lookaheadType)();
                    if (t === j.TokenType.parenL || t === j.TokenType.dot)
                        break;
                    return (0, g.next)(), void(_s === j.TokenType._import ? _p() : _p());
                }
                case j.TokenType.name:
                    if (l.state.contextualKeyword === h.ContextualKeyword._async) {
                        const t = l.state.start,
                            u = l.state.snapshot();
                        if ((0, g.next)(), (0, g.match)(j.TokenType._function) && !(0, o.canInsertSemicolon)())
                            return (0, o.expect)(j.TokenType._function), void _p(t, !0);
                        l.state.restoreFromSnapshot(u);
                    } else {
                        if (l.state.contextualKeyword === h.ContextualKeyword._using && !(0, o.hasFollowingLineBreak)() && (0, g.lookaheadType)() === j.TokenType.name)
                            return void _p(!0);
                        if (_p())
                            return (0, o.expectContextual)(h.ContextualKeyword._await), void _p(!0);
                    }
            }
            const t = l.state.tokens.length;
            (0, m.parseExpression)();
            let u = null;
            if (l.state.tokens.length === t + 1) {
                const v = l.state.tokens[l.state.tokens.length - 1];
                v.type === j.TokenType.name && (u = v.contextualKeyword);
            }
            if (null == u)
                return void(0, o.semicolon)();
            (0, g.eat)(j.TokenType.colon) ? _p(!0): (d = u, l.isTypeScriptEnabled ? (0, f.tsParseIdentifierStatement)(d) : l.isFlowEnabled ? (0, e.flowParseIdentifierStatement)(d) : (0, o.semicolon)());
            var v;
        }(q));
    }

    function _p() {
        if (!(0, o.isContextual)(h.ContextualKeyword._await))
            return !1;
        const q = l.state.snapshot();
        return (0, g.next)(), !(0, o.isContextual)(h.ContextualKeyword._using) || (0, o.hasPrecedingLineBreak)() ? (l.state.restoreFromSnapshot(q), !1) : ((0, g.next)(), !(0, g.match)(j.TokenType.name) || (0, o.hasPrecedingLineBreak)() ? (l.state.restoreFromSnapshot(q), !1) : (l.state.restoreFromSnapshot(q), !0));
    }

    function _p() {
        for (;
            (0, g.match)(j.TokenType.at);)
            _p();
    }

    function _p() {
        if ((0, g.next)(), (0, g.eat)(j.TokenType.parenL))
            (0, m.parseExpression)(), (0, o.expect)(j.TokenType.parenR);
        else {
            for ((0, m.parseIdentifier)();
                (0, g.eat)(j.TokenType.dot);)
                (0, m.parseIdentifier)();
            l.isTypeScriptEnabled ? (0, f.tsParseMaybeDecoratorArguments)() : _p();
        }
    }

    function _p() {
        (0, g.eat)(j.TokenType.parenL) && (0, m.parseCallExpressionArguments)();
    }

    function _p(q) {
        (0, g.next)(), _p(!1, q), (0, o.semicolon)();
    }

    function _p(q = !1, r = 0) {
        const s = l.state.tokens.length;
        l.state.scopeDepth++, (0, o.expect)(j.TokenType.braceL), r && (l.state.tokens[l.state.tokens.length - 1].contextId = r), _p(j.TokenType.braceR), r && (l.state.tokens[l.state.tokens.length - 1].contextId = r);
        const t = l.state.tokens.length;
        l.state.scopes.push(new(0, _i.Scope)(s, t, q)), l.state.scopeDepth--;
    }

    function _p(q) {
        for (; !(0, g.eat)(q) && !l.state.error;)
            _k(!0);
    }

    function _p() {
        (0, o.expect)(j.TokenType.semi), (0, g.match)(j.TokenType.semi) || (0, m.parseExpression)(), (0, o.expect)(j.TokenType.semi), (0, g.match)(j.TokenType.parenR) || (0, m.parseExpression)(), (0, o.expect)(j.TokenType.parenR), _k(!1);
    }

    function _p(q) {
        q ? (0, o.eatContextual)(h.ContextualKeyword._of) : (0, g.next)(), (0, m.parseExpression)(), (0, o.expect)(j.TokenType.parenR), _k(!1);
    }

    function _p(q, r) {
        for (;;) {
            if (_p(r), (0, g.eat)(j.TokenType.eq)) {
                const s = l.state.tokens.length - 1;
                (0, m.parseMaybeAssign)(q), l.state.tokens[s].rhsEndIndex = l.state.tokens.length;
            }
            if (!(0, g.eat)(j.TokenType.comma))
                break;
        }
    }

    function _p(q) {
        (0, n.parseBindingAtom)(q), l.isTypeScriptEnabled ? (0, f.tsAfterParseVarHead)() : l.isFlowEnabled && (0, e.flowAfterParseVarHead)();
    }

    function _p(q, r, s = !1) {
        (0, g.match)(j.TokenType.star) && (0, g.next)(), !r || s || (0, g.match)(j.TokenType.name) || (0, g.match)(j.TokenType._yield) || (0, o.unexpected)();
        let t = null;
        (0, g.match)(j.TokenType.name) && (r || (t = l.state.tokens.length, l.state.scopeDepth++), (0, n.parseBindingIdentifier)(!1));
        const u = l.state.tokens.length;
        l.state.scopeDepth++, _p(), (0, m.parseFunctionBodyAndFinish)(q);
        const v = l.state.tokens.length;
        l.state.scopes.push(new(0, _i.Scope)(u, v, !0)), l.state.scopeDepth--, null !== t && (l.state.scopes.push(new(0, _i.Scope)(t, v, !0)), l.state.scopeDepth--);
    }

    function _p(q = !1, r = 0) {
        l.isTypeScriptEnabled ? (0, f.tsStartParseFunctionParams)() : l.isFlowEnabled && (0, e.flowStartParseFunctionParams)(), (0, o.expect)(j.TokenType.parenL), r && (l.state.tokens[l.state.tokens.length - 1].contextId = r), (0, n.parseBindingList)(j.TokenType.parenR, !1, !1, q, r), r && (l.state.tokens[l.state.tokens.length - 1].contextId = r);
    }

    function _p(q, r = !1) {
        const s = (0, l.getNextContextId)();
        (0, g.next)(), l.state.tokens[l.state.tokens.length - 1].contextId = s, l.state.tokens[l.state.tokens.length - 1].isExpression = !q;
        let t = null;
        q || (t = l.state.tokens.length, l.state.scopeDepth++),
            function(u, v = !1) {
                if (l.isTypeScriptEnabled && (!u || v) && (0, o.isContextual)(h.ContextualKeyword._implements))
                    return;
                (0, g.match)(j.TokenType.name) && (0, n.parseBindingIdentifier)(!0);
                l.isTypeScriptEnabled ? (0, f.tsTryParseTypeParameters)() : l.isFlowEnabled && (0, g.match)(j.TokenType.lessThan) && (0, e.flowParseTypeParameterDeclaration)();
            }(q, r),
            function() {
                let u = !1;
                (0, g.eat)(j.TokenType._extends) ? ((0, m.parseExprSubscripts)(), u = !0) : u = !1;
                l.isTypeScriptEnabled ? (0, f.tsAfterParseClassSuper)(u) : l.isFlowEnabled && (0, e.flowAfterParseClassSuper)(u);
            }();
        const u = l.state.tokens.length;
        if (function(v) {
                (0, o.expect)(j.TokenType.braceL);
                for (; !(0, g.eat)(j.TokenType.braceR) && !l.state.error;) {
                    if ((0, g.eat)(j.TokenType.semi))
                        continue;
                    if ((0, g.match)(j.TokenType.at)) {
                        _k();
                        continue;
                    }
                    _p(l.state.start, v);
                }
            }(s), !l.state.error && (l.state.tokens[u].contextId = s, l.state.tokens[l.state.tokens.length - 1].contextId = s, null !== t)) {
            const v = l.state.tokens.length;
            l.state.scopes.push(new(0, _i.Scope)(t, v, !1)), l.state.scopeDepth--;
        }
    }

    function _p() {
        return (0, g.match)(j.TokenType.eq) || (0, g.match)(j.TokenType.semi) || (0, g.match)(j.TokenType.braceR) || (0, g.match)(j.TokenType.bang) || (0, g.match)(j.TokenType.colon);
    }

    function _p() {
        return (0, g.match)(j.TokenType.parenL) || (0, g.match)(j.TokenType.lessThan);
    }

    function _p(q, r) {
        l.isTypeScriptEnabled && (0, f.tsParseModifiers)([
            h.ContextualKeyword._declare,
            h.ContextualKeyword._public,
            h.ContextualKeyword._protected,
            h.ContextualKeyword._private,
            h.ContextualKeyword._override
        ]);
        let s = !1;
        if ((0, g.match)(j.TokenType.name) && l.state.contextualKeyword === h.ContextualKeyword._static) {
            if ((0, m.parseIdentifier)(), _k())
                return void _p(q, !1);
            if (_k())
                return void _p();
            if (l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._static, s = !0, (0, g.match)(j.TokenType.braceL))
                return l.state.tokens[l.state.tokens.length - 1].contextId = r, void _k();
        }! function(t, u, v) {
            if (l.isTypeScriptEnabled && (0, f.tsTryParseClassMemberWithIsStatic)(u))
                return;
            if ((0, g.eat)(j.TokenType.star))
                return _p(v), void _p(t, !1);
            _p(v);
            let w = !1;
            const x = l.state.tokens[l.state.tokens.length - 1];
            x.contextualKeyword === h.ContextualKeyword._constructor && (w = !0);
            if (_p(), _k())
                _p(t, w);
            else if (_k())
                _p();
            else if (x.contextualKeyword !== h.ContextualKeyword._async || (0, o.isLineTerminator)())
                x.contextualKeyword !== h.ContextualKeyword._get && x.contextualKeyword !== h.ContextualKeyword._set || (0, o.isLineTerminator)() && (0, g.match)(j.TokenType.star) ? x.contextualKeyword !== h.ContextualKeyword._accessor || (0, o.isLineTerminator)() ? (0, o.isLineTerminator)() ? _p() : (0, o.unexpected)() : (_p(v), _p()) : (x.contextualKeyword === h.ContextualKeyword._get ? l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._get : l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._set, _p(v), _p(t, !1));
            else {
                l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._async;
                (0, g.match)(j.TokenType.star) && (0, g.next)(), _p(v), _p(), _p(t, !1);
            }
        }(q, s, r);
    }

    function _p(q, r) {
        l.isTypeScriptEnabled ? (0, f.tsTryParseTypeParameters)() : l.isFlowEnabled && (0, g.match)(j.TokenType.lessThan) && (0, e.flowParseTypeParameterDeclaration)(), (0, m.parseMethod)(q, r);
    }

    function _p(q) {
        (0, m.parsePropertyName)(q);
    }

    function _p() {
        if (l.isTypeScriptEnabled) {
            const q = (0, g.pushTypeContext)(0);
            (0, g.eat)(j.TokenType.question), (0, g.popTypeContext)(q);
        }
    }

    function _p() {
        if (l.isTypeScriptEnabled ? ((0, g.eatTypeToken)(j.TokenType.bang), (0, f.tsTryParseTypeAnnotation)()) : l.isFlowEnabled && (0, g.match)(j.TokenType.colon) && (0, e.flowParseTypeAnnotation)(), (0, g.match)(j.TokenType.eq)) {
            const q = l.state.tokens.length;
            (0, g.next)(), (0, m.parseMaybeAssign)(), l.state.tokens[q].rhsEndIndex = l.state.tokens.length;
        }
        (0, o.semicolon)();
    }

    function _p() {
        const q = l.state.tokens.length - 1;
        l.isTypeScriptEnabled && (0, f.tsTryParseExport)() || ((l.isFlowEnabled ? (0, e.flowShouldParseExportStar)() : (0, g.match)(j.TokenType.star)) ? l.isFlowEnabled ? (0, e.flowParseExportStar)() : _p() : function() {
            if (l.isTypeScriptEnabled && (0, f.tsIsDeclarationStart)())
                return !1;
            if (l.isFlowEnabled && (0, e.flowShouldDisallowExportDefaultSpecifier)())
                return !1;
            if ((0, g.match)(j.TokenType.name))
                return l.state.contextualKeyword !== h.ContextualKeyword._async;
            if (!(0, g.match)(j.TokenType._default))
                return !1;
            const r = (0, g.nextTokenStart)(),
                s = (0, g.lookaheadTypeAndKeyword)(),
                t = s.type === j.TokenType.name && s.contextualKeyword === h.ContextualKeyword._from;
            if (s.type === j.TokenType.comma)
                return !0;
            if (t) {
                const u = l.input.charCodeAt((0, g.nextTokenStartSince)(r + 4));
                return u === k.charCodes.quotationMark || u === k.charCodes.apostrophe;
            }
            return !1;
        }() ? ((0, m.parseIdentifier)(), (0, g.match)(j.TokenType.comma) && (0, g.lookaheadType)() === j.TokenType.star ? ((0, o.expect)(j.TokenType.comma), (0, o.expect)(j.TokenType.star), (0, o.expectContextual)(h.ContextualKeyword._as), (0, m.parseIdentifier)()) : _p(), _p()) : (0, g.eat)(j.TokenType._default) ? function() {
            if (l.isTypeScriptEnabled && (0, f.tsTryParseExportDefaultExpression)())
                return;
            if (l.isFlowEnabled && (0, e.flowTryParseExportDefaultExpression)())
                return;
            const r = l.state.start;
            (0, g.eat)(j.TokenType._function) ? _k(r, !0, !0): (0, o.isContextual)(h.ContextualKeyword._async) && (0, g.lookaheadType)() === j.TokenType._function ? ((0, o.eatContextual)(h.ContextualKeyword._async), (0, g.eat)(j.TokenType._function), _k(r, !0, !0)) : (0, g.match)(j.TokenType._class) ? _k(!0, !0) : (0, g.match)(j.TokenType.at) ? (_k(), _k(!0, !0)) : ((0, m.parseMaybeAssign)(), (0, o.semicolon)());
        }() : l.isTypeScriptEnabled && (0, f.tsIsDeclarationStart)() || l.isFlowEnabled && (0, e.flowShouldParseExportDeclaration)() || l.state.type === j.TokenType._var || l.state.type === j.TokenType._const || l.state.type === j.TokenType._let || l.state.type === j.TokenType._function || l.state.type === j.TokenType._class || (0, o.isContextual)(h.ContextualKeyword._async) || (0, g.match)(j.TokenType.at) ? l.isTypeScriptEnabled ? (0, f.tsParseExportDeclaration)() : l.isFlowEnabled ? (0, e.flowParseExportDeclaration)() : _k(!0) : (_p(), _p()), l.state.tokens[q].rhsEndIndex = l.state.tokens.length);
    }

    function _p() {
        (0, g.eat)(j.TokenType.comma) && _p();
    }

    function _p() {
        (0, o.eatContextual)(h.ContextualKeyword._from) && ((0, m.parseExprAtom)(), _p()), (0, o.semicolon)();
    }

    function _p() {
        (0, o.expect)(j.TokenType.star), (0, o.isContextual)(h.ContextualKeyword._as) ? ((0, g.next)(), l.state.tokens[l.state.tokens.length - 1].type = j.TokenType._as, (0, m.parseIdentifier)(), _k(), _k()) : _k();
    }

    function _p() {
        let q = !0;
        for ((0, o.expect)(j.TokenType.braceL); !(0, g.eat)(j.TokenType.braceR) && !l.state.error;) {
            if (q)
                q = !1;
            else if ((0, o.expect)(j.TokenType.comma), (0, g.eat)(j.TokenType.braceR))
                break;
            _p();
        }
    }

    function _p() {
        l.isTypeScriptEnabled ? (0, f.tsParseExportSpecifier)() : ((0, m.parseIdentifier)(), l.state.tokens[l.state.tokens.length - 1].identifierRole = g.IdentifierRole.ExportAccess, (0, o.eatContextual)(h.ContextualKeyword._as) && (0, m.parseIdentifier)());
    }

    function p() {
        (0, o.isContextual)(h.ContextualKeyword._module) && function() {
            const q = l.state.snapshot();
            return (0, o.expectContextual)(h.ContextualKeyword._module), (0, o.eatContextual)(h.ContextualKeyword._from) ? (0, o.isContextual)(h.ContextualKeyword._from) ? (l.state.restoreFromSnapshot(q), !0) : (l.state.restoreFromSnapshot(q), !1) : (0, g.match)(j.TokenType.comma) ? (l.state.restoreFromSnapshot(q), !1) : (l.state.restoreFromSnapshot(q), !0);
        }() && (0, g.next)();
    }

    function _p() {
        if (l.isTypeScriptEnabled && (0, g.match)(j.TokenType.name) && (0, g.lookaheadType)() === j.TokenType.eq)
            (0, f.tsParseImportEqualsDeclaration)();
        else {
            if (l.isTypeScriptEnabled && (0, o.isContextual)(h.ContextualKeyword._type)) {
                const q = (0, g.lookaheadTypeAndKeyword)();
                if (q.type === j.TokenType.name && q.contextualKeyword !== h.ContextualKeyword._from) {
                    if ((0, o.expectContextual)(h.ContextualKeyword._type), (0, g.lookaheadType)() === j.TokenType.eq)
                        return void(0, f.tsParseImportEqualsDeclaration)();
                } else
                    q.type !== j.TokenType.star && q.type !== j.TokenType.braceL || (0, o.expectContextual)(h.ContextualKeyword._type);
            }
            (0, g.match)(j.TokenType.string) || (_k(), function() {
                l.isFlowEnabled && (0, e.flowStartParseImportSpecifiers)();
                let q = !0;
                if ((0, g.match)(j.TokenType.name) && (_p(), !(0, g.eat)(j.TokenType.comma)))
                    return;
                if ((0, g.match)(j.TokenType.star))
                    return (0, g.next)(), (0, o.expectContextual)(h.ContextualKeyword._as), void _p();
                (0, o.expect)(j.TokenType.braceL);
                for (; !(0, g.eat)(j.TokenType.braceR) && !l.state.error;) {
                    if (q)
                        q = !1;
                    else if ((0, g.eat)(j.TokenType.colon) && (0, o.unexpected)('ES2015 named imports do not destructure. Use another statement for destructuring after the import.'), (0, o.expect)(j.TokenType.comma), (0, g.eat)(j.TokenType.braceR))
                        break;
                    _p();
                }
            }(), (0, o.expectContextual)(h.ContextualKeyword._from)), (0, m.parseExprAtom)(), _p(), (0, o.semicolon)();
        }
    }

    function _p() {
        (0, n.parseImportedIdentifier)();
    }

    function _p() {
        l.isTypeScriptEnabled ? (0, f.tsParseImportSpecifier)() : l.isFlowEnabled ? (0, e.flowParseImportSpecifier)() : ((0, n.parseImportedIdentifier)(), (0, o.isContextual)(h.ContextualKeyword._as) && (l.state.tokens[l.state.tokens.length - 1].identifierRole = g.IdentifierRole.ImportAccess, (0, g.next)(), (0, n.parseImportedIdentifier)()));
    }

    function _p() {
        ((0, g.match)(j.TokenType._with) || (0, o.isContextual)(h.ContextualKeyword._assert) && !(0, o.hasPrecedingLineBreak)()) && ((0, g.next)(), (0, m.parseObj)(!1, !1));
    }
}), a.register('oRy1H', function(b, c) {
    _m(b.exports, 'flowParseTypeParameterDeclaration', function() {
        return _k;
    }), _m(b.exports, 'flowParseTypeAnnotation', function() {
        return _k;
    }), _m(b.exports, 'flowParseVariance', function() {
        return _k;
    }), _m(b.exports, 'flowParseFunctionBodyAndFinish', function() {
        return _k;
    }), _m(b.exports, 'flowParseSubscript', function() {
        return _k;
    }), _m(b.exports, 'flowStartParseNewArguments', function() {
        return _k;
    }), _m(b.exports, 'flowTryParseStatement', function() {
        return _k;
    }), _m(b.exports, 'flowTryParseExportDefaultExpression', function() {
        return _k;
    }), _m(b.exports, 'flowParseIdentifierStatement', function() {
        return _k;
    }), _m(b.exports, 'flowShouldParseExportDeclaration', function() {
        return _k;
    }), _m(b.exports, 'flowShouldDisallowExportDefaultSpecifier', function() {
        return _k;
    }), _m(b.exports, 'flowParseExportDeclaration', function() {
        return _k;
    }), _m(b.exports, 'flowShouldParseExportStar', function() {
        return _k;
    }), _m(b.exports, 'flowParseExportStar', function() {
        return _k;
    }), _m(b.exports, 'flowAfterParseClassSuper', function() {
        return _k;
    }), _m(b.exports, 'flowStartParseObjPropValue', function() {
        return _k;
    }), _m(b.exports, 'flowParseAssignableListItemTypes', function() {
        return _k;
    }), _m(b.exports, 'flowStartParseImportSpecifiers', function() {
        return _k;
    }), _m(b.exports, 'flowParseImportSpecifier', function() {
        return _k;
    }), _m(b.exports, 'flowStartParseFunctionParams', function() {
        return _k;
    }), _m(b.exports, 'flowAfterParseVarHead', function() {
        return _k;
    }), _m(b.exports, 'flowStartParseAsyncArrowFromCallExpression', function() {
        return _k;
    }), _m(b.exports, 'flowParseMaybeAssign', function() {
        return _k;
    }), _m(b.exports, 'flowParseArrow', function() {
        return _k;
    }), _m(b.exports, 'flowParseSubscripts', function() {
        return _k;
    });
    var d = a('sK5Ca'),
        e = a('DIj/a'),
        f = a('8rqpk'),
        g = a('UXH9U'),
        h = a('401Dp'),
        i = a('PXvk6'),
        j = a('Tfs2H');

    function k(l) {
        const _m = (0, d.pushTypeContext)(0);
        (0, j.expect)(l || f.TokenType.colon), _k(), (0, d.popTypeContext)(_m);
    }

    function k() {
        (0, j.expect)(f.TokenType.modulo), (0, j.expectContextual)(e.ContextualKeyword._checks), (0, d.eat)(f.TokenType.parenL) && ((0, h.parseExpression)(), (0, j.expect)(f.TokenType.parenR));
    }

    function k() {
        const l = (0, d.pushTypeContext)(0);
        (0, j.expect)(f.TokenType.colon), (0, d.match)(f.TokenType.modulo) ? _l(): (_k(), (0, d.match)(f.TokenType.modulo) && _l()), (0, d.popTypeContext)(l);
    }

    function k() {
        (0, d.match)(f.TokenType._class) ? ((0, d.next)(), _k(!0)) : (0, d.match)(f.TokenType._function) ? ((0, d.next)(), (0, h.parseIdentifier)(), (0, d.match)(f.TokenType.lessThan) && _k(), (0, j.expect)(f.TokenType.parenL), _k(), (0, j.expect)(f.TokenType.parenR), _m(), (0, j.semicolon)()) : (0, d.match)(f.TokenType._var) ? ((0, d.next)(), _k(), (0, j.semicolon)()) : (0, j.eatContextual)(e.ContextualKeyword._module) ? (0, d.eat)(f.TokenType.dot) ? ((0, j.expectContextual)(e.ContextualKeyword._exports), _k(), (0, j.semicolon)()) : function() {
            (0, d.match)(f.TokenType.string) ? (0, h.parseExprAtom)() : (0, h.parseIdentifier)();
            (0, j.expect)(f.TokenType.braceL);
            for (; !(0, d.match)(f.TokenType.braceR) && !g.state.error;)
                (0, d.match)(f.TokenType._import) ? ((0, d.next)(), (0, i.parseImport)()) : (0, j.unexpected)();
            (0, j.expect)(f.TokenType.braceR);
        }() : (0, j.isContextual)(e.ContextualKeyword._type) ? ((0, d.next)(), _k()) : (0, j.isContextual)(e.ContextualKeyword._opaque) ? ((0, d.next)(), _k(!0)) : (0, j.isContextual)(e.ContextualKeyword._interface) ? ((0, d.next)(), _k()) : (0, d.match)(f.TokenType._export) ? ((0, j.expect)(f.TokenType._export), (0, d.eat)(f.TokenType._default) ? (0, d.match)(f.TokenType._function) || (0, d.match)(f.TokenType._class) ? k() : (_k(), (0, j.semicolon)()) : (0, d.match)(f.TokenType._var) || (0, d.match)(f.TokenType._function) || (0, d.match)(f.TokenType._class) || (0, j.isContextual)(e.ContextualKeyword._opaque) ? k() : (0, d.match)(f.TokenType.star) || (0, d.match)(f.TokenType.braceL) || (0, j.isContextual)(e.ContextualKeyword._interface) || (0, j.isContextual)(e.ContextualKeyword._type) || (0, j.isContextual)(e.ContextualKeyword._opaque) ? (0, i.parseExport)() : (0, j.unexpected)()) : (0, j.unexpected)();
    }

    function _k(l = !1) {
        if (_k(), (0, d.match)(f.TokenType.lessThan) && _k(), (0, d.eat)(f.TokenType._extends))
            do {
                _k();
            } while (!l && (0, d.eat)(f.TokenType.comma));
        if ((0, j.isContextual)(e.ContextualKeyword._mixins)) {
            (0, d.next)();
            do {
                _k();
            } while ((0, d.eat)(f.TokenType.comma));
        }
        if ((0, j.isContextual)(e.ContextualKeyword._implements)) {
            (0, d.next)();
            do {
                _k();
            } while ((0, d.eat)(f.TokenType.comma));
        }
        _k(l, !1, l);
    }

    function _k() {
        _k(!1), (0, d.match)(f.TokenType.lessThan) && _k();
    }

    function _k() {
        _o();
    }

    function _k() {
        (0, h.parseIdentifier)();
    }

    function _k() {
        _r(), (0, d.match)(f.TokenType.lessThan) && _k(), _k(f.TokenType.eq), (0, j.semicolon)();
    }

    function _k(l) {
        (0, j.expectContextual)(e.ContextualKeyword._type), _r(), (0, d.match)(f.TokenType.lessThan) && _k(), (0, d.match)(f.TokenType.colon) && _k(f.TokenType.colon), l || _k(f.TokenType.eq), (0, j.semicolon)();
    }

    function _k() {
        const l = (0, d.pushTypeContext)(0);
        (0, d.match)(f.TokenType.lessThan) || (0, d.match)(f.TokenType.typeParameterStart) ? (0, d.next)() : (0, j.unexpected)();
        do {
            _k(), _k(), (0, d.eat)(f.TokenType.eq) && _k(), (0, d.match)(f.TokenType.greaterThan) || (0, j.expect)(f.TokenType.comma);
        } while (!(0, d.match)(f.TokenType.greaterThan) && !g.state.error);
        (0, j.expect)(f.TokenType.greaterThan), (0, d.popTypeContext)(l);
    }

    function _k() {
        const l = (0, d.pushTypeContext)(0);
        for ((0, j.expect)(f.TokenType.lessThan); !(0, d.match)(f.TokenType.greaterThan) && !g.state.error;)
            _k(), (0, d.match)(f.TokenType.greaterThan) || (0, j.expect)(f.TokenType.comma);
        (0, j.expect)(f.TokenType.greaterThan), (0, d.popTypeContext)(l);
    }

    function _k() {
        (0, d.match)(f.TokenType.num) || (0, d.match)(f.TokenType.string) ? (0, h.parseExprAtom)() : (0, h.parseIdentifier)();
    }

    function k() {
        for ((0, d.match)(f.TokenType.lessThan) && _s(), (0, j.expect)(f.TokenType.parenL); !(0, d.match)(f.TokenType.parenR) && !(0, d.match)(f.TokenType.ellipsis) && !g.state.error;)
            _k(), (0, d.match)(f.TokenType.parenR) || (0, j.expect)(f.TokenType.comma);
        (0, d.eat)(f.TokenType.ellipsis) && _k(), (0, j.expect)(f.TokenType.parenR), _k();
    }

    function _k(l, m, n) {
        let o;
        for (m && (0, d.match)(f.TokenType.braceBarL) ? ((0, j.expect)(f.TokenType.braceBarL), o = f.TokenType.braceBarR) : ((0, j.expect)(f.TokenType.braceL), o = f.TokenType.braceR); !(0, d.match)(o) && !g.state.error;) {
            if (n && (0, j.isContextual)(e.ContextualKeyword._proto)) {
                const p = (0, d.lookaheadType)();
                p !== f.TokenType.colon && p !== f.TokenType.question && ((0, d.next)(), l = !1);
            }
            if (l && (0, j.isContextual)(e.ContextualKeyword._static)) {
                const p = (0, d.lookaheadType)();
                p !== f.TokenType.colon && p !== f.TokenType.question && (0, d.next)();
            }
            if (_k(), (0, d.eat)(f.TokenType.bracketL))
                (0, d.eat)(f.TokenType.bracketL) ? (_s(), (0, j.expect)(f.TokenType.bracketR), (0, j.expect)(f.TokenType.bracketR), (0, d.match)(f.TokenType.lessThan) || (0, d.match)(f.TokenType.parenL) ? _s() : ((0, d.eat)(f.TokenType.question), _k())) : ((0, d.lookaheadType)() === f.TokenType.colon ? (_s(), _k()) : _k(), (0, j.expect)(f.TokenType.bracketR), _k());
            else if ((0, d.match)(f.TokenType.parenL) || (0, d.match)(f.TokenType.lessThan))
                _s();
            else {
                if ((0, j.isContextual)(e.ContextualKeyword._get) || (0, j.isContextual)(e.ContextualKeyword._set)) {
                    const p = (0, d.lookaheadType)();
                    p !== f.TokenType.name && p !== f.TokenType.string && p !== f.TokenType.num || (0, d.next)();
                }
                _k();
            }
            _k();
        }
        (0, j.expect)(o);
    }

    function _k() {
        if ((0, d.match)(f.TokenType.ellipsis)) {
            if ((0, j.expect)(f.TokenType.ellipsis), (0, d.eat)(f.TokenType.comma) || (0, d.eat)(f.TokenType.semi), (0, d.match)(f.TokenType.braceR))
                return;
            _k();
        } else
            _s(), (0, d.match)(f.TokenType.lessThan) || (0, d.match)(f.TokenType.parenL) ? _s() : ((0, d.eat)(f.TokenType.question), _k());
    }

    function _k() {
        (0, d.eat)(f.TokenType.semi) || (0, d.eat)(f.TokenType.comma) || (0, d.match)(f.TokenType.braceR) || (0, d.match)(f.TokenType.braceBarR) || (0, j.unexpected)();
    }

    function _k(l) {
        for (l || (0, h.parseIdentifier)();
            (0, d.eat)(f.TokenType.dot);)
            (0, h.parseIdentifier)();
    }

    function _k() {
        const l = (0, d.lookaheadType)();
        l === f.TokenType.colon || l === f.TokenType.question ? ((0, h.parseIdentifier)(), (0, d.eat)(f.TokenType.question), _k()) : _k();
    }

    function _k() {
        for (; !(0, d.match)(f.TokenType.parenR) && !(0, d.match)(f.TokenType.ellipsis) && !g.state.error;)
            _s(), (0, d.match)(f.TokenType.parenR) || (0, j.expect)(f.TokenType.comma);
        (0, d.eat)(f.TokenType.ellipsis) && _s();
    }

    function _k() {
        let l = !1;
        const m = g.state.noAnonFunctionType;
        switch (g.state.type) {
            case f.TokenType.name:
                return (0, j.isContextual)(e.ContextualKeyword._interface) ? void
                function() {
                    if ((0, j.expectContextual)(e.ContextualKeyword._interface), (0, d.eat)(f.TokenType._extends))
                        do {
                            _p();
                        } while ((0, d.eat)(f.TokenType.comma));
                    _s(!1, !1, !1);
                }(): ((0, h.parseIdentifier)(), _s(!0), void((0, d.match)(f.TokenType.lessThan) && _s()));
            case f.TokenType.braceL:
                return void _s(!1, !1, !1);
            case f.TokenType.braceBarL:
                return void _s(!1, !0, !1);
            case f.TokenType.bracketL:
                return void
                function() {
                    for ((0, j.expect)(f.TokenType.bracketL); g.state.pos < g.input.length && !(0, d.match)(f.TokenType.bracketR) && (_k(), !(0, d.match)(f.TokenType.bracketR));)
                        (0, j.expect)(f.TokenType.comma);
                    (0, j.expect)(f.TokenType.bracketR);
                }();
            case f.TokenType.lessThan:
                return _s(), (0, j.expect)(f.TokenType.parenL), _s(), (0, j.expect)(f.TokenType.parenR), (0, j.expect)(f.TokenType.arrow), void _k();
            case f.TokenType.parenL:
                if ((0, d.next)(), !(0, d.match)(f.TokenType.parenR) && !(0, d.match)(f.TokenType.ellipsis))
                    if ((0, d.match)(f.TokenType.name)) {
                        const n = (0, d.lookaheadType)();
                        l = n !== f.TokenType.question && n !== f.TokenType.colon;
                    } else
                        l = !0;
                if (l) {
                    if (g.state.noAnonFunctionType = !1, _k(), g.state.noAnonFunctionType = m, g.state.noAnonFunctionType || !((0, d.match)(f.TokenType.comma) || (0, d.match)(f.TokenType.parenR) && (0, d.lookaheadType)() === f.TokenType.arrow))
                        return void(0, j.expect)(f.TokenType.parenR);
                    (0, d.eat)(f.TokenType.comma);
                }
                return _s(), (0, j.expect)(f.TokenType.parenR), (0, j.expect)(f.TokenType.arrow), void _k();
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
                    return (0, j.expect)(f.TokenType._typeof), void _k();
                if (g.state.type & f.TokenType.IS_KEYWORD)
                    return (0, d.next)(), void(g.state.tokens[g.state.tokens.length - 1].type = f.TokenType.name);
        }
        (0, j.unexpected)();
    }

    function _k() {
        (0, d.eat)(f.TokenType.question) ? _k(): function() {
            for (_s(); !(0, j.canInsertSemicolon)() && ((0, d.match)(f.TokenType.bracketL) || (0, d.match)(f.TokenType.questionDot));)
                (0, d.eat)(f.TokenType.questionDot), (0, j.expect)(f.TokenType.bracketL), (0, d.eat)(f.TokenType.bracketR) || (_k(), (0, j.expect)(f.TokenType.bracketR));
        }();
    }

    function _k() {
        _s(), !g.state.noAnonFunctionType && (0, d.eat)(f.TokenType.arrow) && _k();
    }

    function k() {
        for ((0, d.eat)(f.TokenType.bitwiseAND), _s();
            (0, d.eat)(f.TokenType.bitwiseAND);)
            _s();
    }

    function _k() {
        ! function() {
            for ((0, d.eat)(f.TokenType.bitwiseOR), _s();
                (0, d.eat)(f.TokenType.bitwiseOR);)
                _s();
        }();
    }

    function _k() {
        _k();
    }

    function _k() {
        (0, h.parseIdentifier)(), (0, d.match)(f.TokenType.colon) && _s();
    }

    function _k() {
        ((0, d.match)(f.TokenType.plus) || (0, d.match)(f.TokenType.minus)) && ((0, d.next)(), g.state.tokens[g.state.tokens.length - 1].isType = !0);
    }

    function _k(l) {
        (0, d.match)(f.TokenType.colon) && _m(), (0, h.parseFunctionBody)(!1, l);
    }

    function _k(l, m, n) {
        if ((0, d.match)(f.TokenType.questionDot) && (0, d.lookaheadType)() === f.TokenType.lessThan)
            return m ? void(n.stop = !0) : ((0, d.next)(), _s(), (0, j.expect)(f.TokenType.parenL), void(0, h.parseCallExpressionArguments)());
        if (!m && (0, d.match)(f.TokenType.lessThan)) {
            const o = g.state.snapshot();
            if (_s(), (0, j.expect)(f.TokenType.parenL), (0, h.parseCallExpressionArguments)(), !g.state.error)
                return;
            g.state.restoreFromSnapshot(o);
        }
        (0, h.baseParseSubscript)(l, m, n);
    }

    function _k() {
        if ((0, d.match)(f.TokenType.lessThan)) {
            const l = g.state.snapshot();
            _s(), g.state.error && g.state.restoreFromSnapshot(l);
        }
    }

    function _k() {
        if ((0, d.match)(f.TokenType.name) && g.state.contextualKeyword === e.ContextualKeyword._interface) {
            const l = (0, d.pushTypeContext)(0);
            return (0, d.next)(), _q(), (0, d.popTypeContext)(l), !0;
        }
        return !!(0, j.isContextual)(e.ContextualKeyword._enum) && (_k(), !0);
    }

    function _k() {
        return !!(0, j.isContextual)(e.ContextualKeyword._enum) && (_k(), !0);
    }

    function _k(l) {
        if (l === e.ContextualKeyword._declare) {
            if ((0, d.match)(f.TokenType._class) || (0, d.match)(f.TokenType.name) || (0, d.match)(f.TokenType._function) || (0, d.match)(f.TokenType._var) || (0, d.match)(f.TokenType._export)) {
                const m = (0, d.pushTypeContext)(1);
                _n(), (0, d.popTypeContext)(m);
            }
        } else if ((0, d.match)(f.TokenType.name))
            if (l === e.ContextualKeyword._interface) {
                const m = (0, d.pushTypeContext)(1);
                _q(), (0, d.popTypeContext)(m);
            } else if (l === e.ContextualKeyword._type) {
            const m = (0, d.pushTypeContext)(1);
            _s(), (0, d.popTypeContext)(m);
        } else if (l === e.ContextualKeyword._opaque) {
            const m = (0, d.pushTypeContext)(1);
            _s(!1), (0, d.popTypeContext)(m);
        }
        (0, j.semicolon)();
    }

    function _k() {
        return (0, j.isContextual)(e.ContextualKeyword._type) || (0, j.isContextual)(e.ContextualKeyword._interface) || (0, j.isContextual)(e.ContextualKeyword._opaque) || (0, j.isContextual)(e.ContextualKeyword._enum);
    }

    function _k() {
        return (0, d.match)(f.TokenType.name) && (g.state.contextualKeyword === e.ContextualKeyword._type || g.state.contextualKeyword === e.ContextualKeyword._interface || g.state.contextualKeyword === e.ContextualKeyword._opaque || g.state.contextualKeyword === e.ContextualKeyword._enum);
    }

    function _k() {
        if ((0, j.isContextual)(e.ContextualKeyword._type)) {
            const l = (0, d.pushTypeContext)(1);
            (0, d.next)(), (0, d.match)(f.TokenType.braceL) ? ((0, i.parseExportSpecifiers)(), (0, i.parseExportFrom)()) : _s(), (0, d.popTypeContext)(l);
        } else if ((0, j.isContextual)(e.ContextualKeyword._opaque)) {
            const l = (0, d.pushTypeContext)(1);
            (0, d.next)(), _s(!1), (0, d.popTypeContext)(l);
        } else if ((0, j.isContextual)(e.ContextualKeyword._interface)) {
            const l = (0, d.pushTypeContext)(1);
            (0, d.next)(), _q(), (0, d.popTypeContext)(l);
        } else
            (0, i.parseStatement)(!0);
    }

    function _k() {
        return (0, d.match)(f.TokenType.star) || (0, j.isContextual)(e.ContextualKeyword._type) && (0, d.lookaheadType)() === f.TokenType.star;
    }

    function _k() {
        if ((0, j.eatContextual)(e.ContextualKeyword._type)) {
            const l = (0, d.pushTypeContext)(2);
            (0, i.baseParseExportStar)(), (0, d.popTypeContext)(l);
        } else
            (0, i.baseParseExportStar)();
    }

    function _k(l) {
        if (l && (0, d.match)(f.TokenType.lessThan) && _s(), (0, j.isContextual)(e.ContextualKeyword._implements)) {
            const m = (0, d.pushTypeContext)(0);
            (0, d.next)(), g.state.tokens[g.state.tokens.length - 1].type = f.TokenType._implements;
            do {
                _r(), (0, d.match)(f.TokenType.lessThan) && _s();
            } while ((0, d.eat)(f.TokenType.comma));
            (0, d.popTypeContext)(m);
        }
    }

    function _k() {
        (0, d.match)(f.TokenType.lessThan) && (_s(), (0, d.match)(f.TokenType.parenL) || (0, j.unexpected)());
    }

    function _k() {
        const l = (0, d.pushTypeContext)(0);
        (0, d.eat)(f.TokenType.question), (0, d.match)(f.TokenType.colon) && _s(), (0, d.popTypeContext)(l);
    }

    function _k() {
        if ((0, d.match)(f.TokenType._typeof) || (0, j.isContextual)(e.ContextualKeyword._type)) {
            const l = (0, d.lookaheadTypeAndKeyword)();
            (((b = l).type === f.TokenType.name || b.type & f.TokenType.IS_KEYWORD) && b.contextualKeyword !== e.ContextualKeyword._from || l.type === f.TokenType.braceL || l.type === f.TokenType.star) && (0, d.next)();
        }
        var l;
    }

    function _k() {
        const l = g.state.contextualKeyword === e.ContextualKeyword._type || g.state.type === f.TokenType._typeof;
        l ? (0, d.next)() : (0, h.parseIdentifier)(), (0, j.isContextual)(e.ContextualKeyword._as) && !(0, j.isLookaheadContextual)(e.ContextualKeyword._as) ? ((0, h.parseIdentifier)(), (!l || (0, d.match)(f.TokenType.name) || g.state.type & f.TokenType.IS_KEYWORD) && (0, h.parseIdentifier)()) : (l && ((0, d.match)(f.TokenType.name) || g.state.type & f.TokenType.IS_KEYWORD) && (0, h.parseIdentifier)(), (0, j.eatContextual)(e.ContextualKeyword._as) && (0, h.parseIdentifier)());
    }

    function _k() {
        if ((0, d.match)(f.TokenType.lessThan)) {
            const l = (0, d.pushTypeContext)(0);
            _s(), (0, d.popTypeContext)(l);
        }
    }

    function _k() {
        (0, d.match)(f.TokenType.colon) && _s();
    }

    function _k() {
        if ((0, d.match)(f.TokenType.colon)) {
            const l = g.state.noAnonFunctionType;
            g.state.noAnonFunctionType = !0, _s(), g.state.noAnonFunctionType = l;
        }
    }

    function _k(l, m) {
        if ((0, d.match)(f.TokenType.lessThan)) {
            const n = g.state.snapshot();
            let o = (0, h.baseParseMaybeAssign)(l, m);
            if (!g.state.error)
                return o;
            g.state.restoreFromSnapshot(n), g.state.type = f.TokenType.typeParameterStart;
            const p = (0, d.pushTypeContext)(0);
            if (_s(), (0, d.popTypeContext)(p), o = (0, h.baseParseMaybeAssign)(l, m), o)
                return !0;
            (0, j.unexpected)();
        }
        return (0, h.baseParseMaybeAssign)(l, m);
    }

    function _k() {
        if ((0, d.match)(f.TokenType.colon)) {
            const l = (0, d.pushTypeContext)(0),
                m = g.state.snapshot(),
                n = g.state.noAnonFunctionType;
            g.state.noAnonFunctionType = !0, _m(), g.state.noAnonFunctionType = n, (0, j.canInsertSemicolon)() && (0, j.unexpected)(), (0, d.match)(f.TokenType.arrow) || (0, j.unexpected)(), g.state.error && g.state.restoreFromSnapshot(m), (0, d.popTypeContext)(l);
        }
        return (0, d.eat)(f.TokenType.arrow);
    }

    function _k(l, m = !1) {
        if (g.state.tokens[g.state.tokens.length - 1].contextualKeyword === e.ContextualKeyword._async && (0, d.match)(f.TokenType.lessThan)) {
            const n = g.state.snapshot(),
                o = function() {
                    g.state.scopeDepth++;
                    const p = g.state.tokens.length;
                    return (0, i.parseFunctionParams)(), !!(0, h.parseArrow)() && ((0, h.parseArrowExpression)(p), !0);
                }();
            if (o && !g.state.error)
                return;
            g.state.restoreFromSnapshot(n);
        }
        (0, h.baseParseSubscripts)(l, m);
    }

    function _k() {
        (0, j.expectContextual)(e.ContextualKeyword._enum), g.state.tokens[g.state.tokens.length - 1].type = f.TokenType._enum, (0, h.parseIdentifier)(),
            function() {
                (0, j.eatContextual)(e.ContextualKeyword._of) && (0, d.next)();
                (0, j.expect)(f.TokenType.braceL),
                function() {
                    for (; !(0, d.match)(f.TokenType.braceR) && !g.state.error && !(0, d.eat)(f.TokenType.ellipsis);)
                        _k(), (0, d.match)(f.TokenType.braceR) || (0, j.expect)(f.TokenType.comma);
                }(), (0, j.expect)(f.TokenType.braceR);
            }();
    }

    function _k() {
        (0, h.parseIdentifier)(), (0, d.eat)(f.TokenType.eq) && (0, d.next)();
    }
}), a.register('401Dp', function(b, c) {
    _u(b.exports, 'parseExpression', function() {
        return _s;
    }), _u(b.exports, 'parseMaybeAssign', function() {
        return _s;
    }), _u(b.exports, 'baseParseMaybeAssign', function() {
        return _s;
    }), _u(b.exports, 'baseParseConditional', function() {
        return _s;
    }), _u(b.exports, 'parseMaybeUnary', function() {
        return _s;
    }), _u(b.exports, 'parseExprSubscripts', function() {
        return _s;
    }), _u(b.exports, 'parseExprAtom', function() {
        return _s;
    }), _u(b.exports, 'baseParseSubscripts', function() {
        return _s;
    }), _u(b.exports, 'baseParseSubscript', function() {
        return _s;
    }), _u(b.exports, 'parseCallExpressionArguments', function() {
        return _s;
    }), _u(b.exports, 'atPossibleAsync', function() {
        return _s;
    }), _u(b.exports, 'parseTemplate', function() {
        return _s;
    }), _u(b.exports, 'parseArrowExpression', function() {
        return _s;
    }), _u(b.exports, 'parseIdentifier', function() {
        return _s;
    }), _u(b.exports, 'parseLiteral', function() {
        return _s;
    }), _u(b.exports, 'parseObj', function() {
        return _s;
    }), _u(b.exports, 'parseParenExpression', function() {
        return _s;
    }), _u(b.exports, 'parseArrow', function() {
        return _s;
    }), _u(b.exports, 'parsePropertyName', function() {
        return _s;
    }), _u(b.exports, 'parseMethod', function() {
        return _s;
    }), _u(b.exports, 'parseFunctionBodyAndFinish', function() {
        return _s;
    }), _u(b.exports, 'parseFunctionBody', function() {
        return _s;
    });
    var d = a('oRy1H'),
        e = a('+/57p'),
        f = a('BEEWk'),
        g = a('R2GJq'),
        h = a('sK5Ca'),
        i = a('DIj/a'),
        j = a('Exuei'),
        _k = a('8rqpk'),
        _l = a('8+Hbk'),
        _m = a('c4XAS'),
        _n = a('UXH9U'),
        _o = a('G28EM'),
        _p = a('PXvk6'),
        _q = a('Tfs2H');
    class _r {
        constructor(s) {
            this.stop = s;
        }
    }

    function _s(t = !1) {
        if (_s(t), (0, h.match)(_k.TokenType.comma))
            for (;
                (0, h.eat)(_k.TokenType.comma);)
                _s(t);
    }

    function _s(t = !1, _u = !1) {
        return _n.isTypeScriptEnabled ? (0, g.tsParseMaybeAssign)(t, _u) : _n.isFlowEnabled ? (0, d.flowParseMaybeAssign)(t, _u) : _s(t, _u);
    }

    function _s(t, u) {
        if ((0, h.match)(_k.TokenType._yield))
            return (0, h.next)(), (0, h.match)(_k.TokenType.semi) || (0, _q.canInsertSemicolon)() || ((0, h.eat)(_k.TokenType.star), _n()), !1;
        ((0, h.match)(_k.TokenType.parenL) || (0, h.match)(_k.TokenType.name) || (0, h.match)(_k.TokenType._yield)) && (_n.state.potentialArrowAt = _n.state.start);
        const v = function(w) {
            const x = function(y) {
                const z = _n.state.tokens.length,
                    A = _s();
                return !!A || (_s(z, -1, y), !1);
            }(w);
            return !!x || (function(y) {
                _n.isTypeScriptEnabled || _n.isFlowEnabled ? (0, f.typedParseConditional)(y) : _s(y);
            }(w), !1);
        }(t);
        return u && _s(), _n.state.type & _k.TokenType.IS_ASSIGN ? ((0, h.next)(), _n(t), !1) : v;
    }

    function _s(t) {
        (0, h.eat)(_k.TokenType.question) && (_n(), (0, _q.expect)(_k.TokenType.colon), _n(t));
    }

    function _s(t, u, v) {
        if (_n.isTypeScriptEnabled && (_k.TokenType._in & _k.TokenType.PRECEDENCE_MASK) > u && !(0, _q.hasPrecedingLineBreak)() && ((0, _q.eatContextual)(i.ContextualKeyword._as) || (0, _q.eatContextual)(i.ContextualKeyword._satisfies))) {
            const w = (0, h.pushTypeContext)(1);
            return (0, g.tsParseType)(), (0, h.popTypeContext)(w), (0, h.rescan_gt)(), void _s(t, u, v);
        }
        const w = _n.state.type & _k.TokenType.PRECEDENCE_MASK;
        if (w > 0 && (!v || !(0, h.match)(_k.TokenType._in)) && w > u) {
            const x = _n.state.type;
            (0, h.next)(), x === _k.TokenType.nullishCoalescing && (_n.state.tokens[_n.state.tokens.length - 1].nullishStartIndex = t);
            const y = _n.state.tokens.length;
            _s(), _s(y, x & _k.TokenType.IS_RIGHT_ASSOCIATIVE ? w - 1 : w, v), x === _k.TokenType.nullishCoalescing && (_n.state.tokens[t].numNullishCoalesceStarts++, _n.state.tokens[_n.state.tokens.length - 1].numNullishCoalesceEnds++), _s(t, u, v);
        }
    }

    function _s() {
        if (_n.isTypeScriptEnabled && !_n.isJSXEnabled && (0, h.eat)(_k.TokenType.lessThan))
            return (0, g.tsParseTypeAssertion)(), !1;
        if ((0, _q.isContextual)(i.ContextualKeyword._module) && (0, h.lookaheadCharCode)() === _l.charCodes.leftCurlyBrace && !(0, _q.hasFollowingLineBreak)())
            return (0, _q.expectContextual)(i.ContextualKeyword._module), (0, _q.expect)(_k.TokenType.braceL), (0, _p.parseBlockBody)(_k.TokenType.braceR), !1;
        if (_n.state.type & _k.TokenType.IS_PREFIX)
            return (0, h.next)(), _s(), !1;
        if (_s())
            return !0;
        for (; _n.state.type & _k.TokenType.IS_POSTFIX && !(0, _q.canInsertSemicolon)();)
            _n.state.type === _k.TokenType.preIncDec && (_n.state.type = _k.TokenType.postIncDec), (0, h.next)();
        return !1;
    }

    function _s() {
        const t = _n.state.tokens.length;
        return !!_s() || (_s(t), _n.state.tokens.length > t && _n.state.tokens[t].isOptionalChainStart && (_n.state.tokens[_n.state.tokens.length - 1].isOptionalChainEnd = !0), !1);
    }

    function _s(t, u = !1) {
        _n.isFlowEnabled ? (0, d.flowParseSubscripts)(t, u) : _s(t, u);
    }

    function _s(t, u = !1) {
        const v = new _r(!1);
        do {
            _s(t, u, v);
        } while (!v.stop && !_n.state.error);
    }

    function _s(t, u, v) {
        _n.isTypeScriptEnabled ? (0, g.tsParseSubscript)(t, u, v) : _n.isFlowEnabled ? (0, d.flowParseSubscript)(t, u, v) : _s(t, u, v);
    }

    function _s(t, u, v) {
        if (!u && (0, h.eat)(_k.TokenType.doubleColon))
            _s(), v.stop = !0, _n(t, u);
        else if ((0, h.match)(_k.TokenType.questionDot)) {
            if (_n.state.tokens[t].isOptionalChainStart = !0, u && (0, h.lookaheadType)() === _k.TokenType.parenL)
                return void(v.stop = !0);
            (0, h.next)(), _n.state.tokens[_n.state.tokens.length - 1].subscriptStartIndex = t, (0, h.eat)(_k.TokenType.bracketL) ? (_l(), (0, _q.expect)(_k.TokenType.bracketR)) : (0, h.eat)(_k.TokenType.parenL) ? _s() : _s();
        } else if ((0, h.eat)(_k.TokenType.dot))
            _n.state.tokens[_n.state.tokens.length - 1].subscriptStartIndex = t, _s();
        else if ((0, h.eat)(_k.TokenType.bracketL))
            _n.state.tokens[_n.state.tokens.length - 1].subscriptStartIndex = t, _l(), (0, _q.expect)(_k.TokenType.bracketR);
        else if (!u && (0, h.match)(_k.TokenType.parenL))
            if (_s()) {
                const w = _n.state.snapshot(),
                    x = _n.state.tokens.length;
                (0, h.next)(), _n.state.tokens[_n.state.tokens.length - 1].subscriptStartIndex = t;
                const y = (0, _n.getNextContextId)();
                _n.state.tokens[_n.state.tokens.length - 1].contextId = y, _s(), _n.state.tokens[_n.state.tokens.length - 1].contextId = y, ((0, h.match)(_k.TokenType.colon) || (0, h.match)(_k.TokenType.arrow)) && (_n.state.restoreFromSnapshot(w), v.stop = !0, _n.state.scopeDepth++, (0, _p.parseFunctionParams)(), function(z) {
                    _n.isTypeScriptEnabled ? (0, g.tsStartParseAsyncArrowFromCallExpression)() : _n.isFlowEnabled && (0, d.flowStartParseAsyncArrowFromCallExpression)();
                    (0, _q.expect)(_k.TokenType.arrow), _s(z);
                }(x));
            } else {
                (0, h.next)(), _n.state.tokens[_n.state.tokens.length - 1].subscriptStartIndex = t;
                const w = (0, _n.getNextContextId)();
                _n.state.tokens[_n.state.tokens.length - 1].contextId = w, _s(), _n.state.tokens[_n.state.tokens.length - 1].contextId = w;
            }
        else
            (0, h.match)(_k.TokenType.backQuote) ? _s() : v.stop = !0;
    }

    function _s() {
        return _n.state.tokens[_n.state.tokens.length - 1].contextualKeyword === i.ContextualKeyword._async && !(0, _q.canInsertSemicolon)();
    }

    function _s() {
        let t = !0;
        for (; !(0, h.eat)(_k.TokenType.parenR) && !_n.state.error;) {
            if (t)
                t = !1;
            else if ((0, _q.expect)(_k.TokenType.comma), (0, h.eat)(_k.TokenType.parenR))
                break;
            _s(!1);
        }
    }

    function _s() {
        const t = _n.state.tokens.length;
        _s(), _n(t, !0);
    }

    function _s() {
        if ((0, h.eat)(_k.TokenType.modulo))
            return _s(), !1;
        if ((0, h.match)(_k.TokenType.jsxText) || (0, h.match)(_k.TokenType.jsxEmptyText))
            return _s(), !1;
        if ((0, h.match)(_k.TokenType.lessThan) && _n.isJSXEnabled)
            return _n.state.type = _k.TokenType.jsxTagStart, (0, e.jsxParseElement)(), (0, h.next)(), !1;
        const t = _n.state.potentialArrowAt === _n.state.start;
        switch (_n.state.type) {
            case _k.TokenType.slash:
            case _k.TokenType.assign:
                (0, h.retokenizeSlashAsRegex)();
            case _k.TokenType._super:
            case _k.TokenType._this:
            case _k.TokenType.regexp:
            case _k.TokenType.num:
            case _k.TokenType.bigint:
            case _k.TokenType.decimal:
            case _k.TokenType.string:
            case _k.TokenType._null:
            case _k.TokenType._true:
            case _k.TokenType._false:
                return (0, h.next)(), !1;
            case _k.TokenType._import:
                return (0, h.next)(), (0, h.match)(_k.TokenType.dot) && (_n.state.tokens[_n.state.tokens.length - 1].type = _k.TokenType.name, (0, h.next)(), _s()), !1;
            case _k.TokenType.name: {
                const u = _n.state.tokens.length,
                    v = _n.state.start,
                    w = _n.state.contextualKeyword;
                return _s(), w === i.ContextualKeyword._await ? (_n(), !1) : w === i.ContextualKeyword._async && (0, h.match)(_k.TokenType._function) && !(0, _q.canInsertSemicolon)() ? ((0, h.next)(), (0, _p.parseFunction)(v, !1), !1) : t && w === i.ContextualKeyword._async && !(0, _q.canInsertSemicolon)() && (0, h.match)(_k.TokenType.name) ? (_n.state.scopeDepth++, (0, _o.parseBindingIdentifier)(!1), (0, _q.expect)(_k.TokenType.arrow), _s(u), !0) : (0, h.match)(_k.TokenType._do) && !(0, _q.canInsertSemicolon)() ? ((0, h.next)(), (0, _p.parseBlock)(), !1) : t && !(0, _q.canInsertSemicolon)() && (0, h.match)(_k.TokenType.arrow) ? (_n.state.scopeDepth++, (0, _o.markPriorBindingIdentifier)(!1), (0, _q.expect)(_k.TokenType.arrow), _s(u), !0) : (_n.state.tokens[_n.state.tokens.length - 1].identifierRole = h.IdentifierRole.Access, !1);
            }
            case _k.TokenType._do:
                return (0, h.next)(), (0, _p.parseBlock)(), !1;
            case _k.TokenType.parenL:
                return _s(t);
            case _k.TokenType.bracketL:
                return (0, h.next)(), _s(_k.TokenType.bracketR, !0), !1;
            case _k.TokenType.braceL:
                return _s(!1, !1), !1;
            case _k.TokenType._function:
                return function() {
                    const u = _n.state.start;
                    _s(), (0, h.eat)(_k.TokenType.dot) && _s();
                    (0, _p.parseFunction)(u, !1);
                }(), !1;
            case _k.TokenType.at:
                (0, _p.parseDecorators)();
            case _k.TokenType._class:
                return (0, _p.parseClass)(!1), !1;
            case _k.TokenType._new:
                return function() {
                    if ((0, _q.expect)(_k.TokenType._new), (0, h.eat)(_k.TokenType.dot))
                        return void _s();
                    _n(), void(0, h.eat)(_k.TokenType.questionDot), _n.isFlowEnabled && (0, d.flowStartParseNewArguments)();
                    (0, h.eat)(_k.TokenType.parenL) && _s(_k.TokenType.parenR);
                }(), !1;
            case _k.TokenType.backQuote:
                return _s(), !1;
            case _k.TokenType.doubleColon:
                return (0, h.next)(), _n(), !1;
            case _k.TokenType.hash: {
                const u = (0, h.lookaheadCharCode)();
                return _m.IS_IDENTIFIER_START[u] || u === _l.charCodes.backslash ? _s() : (0, h.next)(), !1;
            }
            default:
                return (0, _q.unexpected)(), !1;
        }
    }

    function _s() {
        (0, h.eat)(_k.TokenType.hash), _s();
    }

    function _s() {
        (0, h.next)();
    }

    function _s() {
        (0, _q.expect)(_k.TokenType.parenL), _l(), (0, _q.expect)(_k.TokenType.parenR);
    }

    function _s(t) {
        const u = _n.state.snapshot(),
            v = _n.state.tokens.length;
        (0, _q.expect)(_k.TokenType.parenL);
        let w = !0;
        for (; !(0, h.match)(_k.TokenType.parenR) && !_n.state.error;) {
            if (w)
                w = !1;
            else if ((0, _q.expect)(_k.TokenType.comma), (0, h.match)(_k.TokenType.parenR))
                break;
            if ((0, h.match)(_k.TokenType.ellipsis)) {
                (0, _o.parseRest)(!1), _s();
                break;
            }
            _n(!1, !0);
        }
        if ((0, _q.expect)(_k.TokenType.parenR), t && ((0, h.match)(_k.TokenType.colon) || !(0, _q.canInsertSemicolon)())) {
            if (_s())
                return _n.state.restoreFromSnapshot(u), _n.state.scopeDepth++, (0, _p.parseFunctionParams)(), _s(), _s(v), !_n.state.error || (_n.state.restoreFromSnapshot(u), _s(!1), !1);
        }
        return !1;
    }

    function _s() {
        return _n.isTypeScriptEnabled ? (0, g.tsParseArrow)() : _n.isFlowEnabled ? (0, d.flowParseArrow)() : (0, h.eat)(_k.TokenType.arrow);
    }

    function _s() {
        (_n.isTypeScriptEnabled || _n.isFlowEnabled) && (0, f.typedParseParenItem)();
    }

    function _s() {
        for ((0, h.nextTemplateToken)(), (0, h.nextTemplateToken)(); !(0, h.match)(_k.TokenType.backQuote) && !_n.state.error;)
            (0, _q.expect)(_k.TokenType.dollarBraceL), _l(), (0, h.nextTemplateToken)(), (0, h.nextTemplateToken)();
        (0, h.next)();
    }

    function _s(t, u) {
        const v = (0, _n.getNextContextId)();
        let w = !0;
        for ((0, h.next)(), _n.state.tokens[_n.state.tokens.length - 1].contextId = v; !(0, h.eat)(_k.TokenType.braceR) && !_n.state.error;) {
            if (w)
                w = !1;
            else if ((0, _q.expect)(_k.TokenType.comma), (0, h.eat)(_k.TokenType.braceR))
                break;
            let x = !1;
            if ((0, h.match)(_k.TokenType.ellipsis)) {
                const y = _n.state.tokens.length;
                if ((0, _o.parseSpread)(), t && (_n.state.tokens.length === y + 2 && (0, _o.markPriorBindingIdentifier)(u), (0, h.eat)(_k.TokenType.braceR)))
                    break;
            } else
                t || (x = (0, h.eat)(_k.TokenType.star)), !t && (0, _q.isContextual)(i.ContextualKeyword._async) ? (x && (0, _q.unexpected)(), _s(), (0, h.match)(_k.TokenType.colon) || (0, h.match)(_k.TokenType.parenL) || (0, h.match)(_k.TokenType.braceR) || (0, h.match)(_k.TokenType.eq) || (0, h.match)(_k.TokenType.comma) || ((0, h.match)(_k.TokenType.star) && ((0, h.next)(), x = !0), _s(v))) : _s(v), _s(t, u, v);
        }
        _n.state.tokens[_n.state.tokens.length - 1].contextId = v;
    }

    function s(t, u) {
        const v = _n.state.start;
        return (0, h.match)(_k.TokenType.parenL) ? (t && (0, _q.unexpected)(), _s(v, !1), !0) : !! function(w) {
            return !w && ((0, h.match)(_k.TokenType.string) || (0, h.match)(_k.TokenType.num) || (0, h.match)(_k.TokenType.bracketL) || (0, h.match)(_k.TokenType.name) || !!(_n.state.type & _k.TokenType.IS_KEYWORD));
        }(t) && (_s(u), _s(v, !1), !0);
    }

    function _s(t, u, v) {
        _n.isTypeScriptEnabled ? (0, g.tsStartParseObjPropValue)() : _n.isFlowEnabled && (0, d.flowStartParseObjPropValue)();
        _n(t, v) || function(w, x) {
            if ((0, h.eat)(_k.TokenType.colon))
                return void(w ? (0, _o.parseMaybeDefault)(x) : _n(!1));
            let y;
            y = w ? 0 === _n.state.scopeDepth ? h.IdentifierRole.ObjectShorthandTopLevelDeclaration : x ? h.IdentifierRole.ObjectShorthandBlockScopedDeclaration : h.IdentifierRole.ObjectShorthandFunctionScopedDeclaration : h.IdentifierRole.ObjectShorthand, _n.state.tokens[_n.state.tokens.length - 1].identifierRole = y, (0, _o.parseMaybeDefault)(x, !0);
        }(t, u);
    }

    function _s(t) {
        _n.isFlowEnabled && (0, d.flowParseVariance)(), (0, h.eat)(_k.TokenType.bracketL) ? (_n.state.tokens[_n.state.tokens.length - 1].contextId = t, _n(), (0, _q.expect)(_k.TokenType.bracketR), _n.state.tokens[_n.state.tokens.length - 1].contextId = t) : ((0, h.match)(_k.TokenType.num) || (0, h.match)(_k.TokenType.string) || (0, h.match)(_k.TokenType.bigint) || (0, h.match)(_k.TokenType.decimal) ? _n() : _n(), _n.state.tokens[_n.state.tokens.length - 1].identifierRole = h.IdentifierRole.ObjectKey, _n.state.tokens[_n.state.tokens.length - 1].contextId = t);
    }

    function _s(t, u) {
        const v = (0, _n.getNextContextId)();
        _n.state.scopeDepth++;
        const w = _n.state.tokens.length,
            x = u;
        (0, _p.parseFunctionParams)(x, v), _s(t, v);
        const y = _n.state.tokens.length;
        _n.state.scopes.push(new(0, j.Scope)(w, y, !0)), _n.state.scopeDepth--;
    }

    function _s(t) {
        _s(!0);
        const u = _n.state.tokens.length;
        _n.state.scopes.push(new(0, j.Scope)(t, u, !0)), _n.state.scopeDepth--;
    }

    function _s(t, u = 0) {
        _n.isTypeScriptEnabled ? (0, g.tsParseFunctionBodyAndFinish)(t, u) : _n.isFlowEnabled ? (0, d.flowParseFunctionBodyAndFinish)(u) : _s(!1, u);
    }

    function _s(t, u = 0) {
        t && !(0, h.match)(_k.TokenType.braceL) ? _n() : (0, _p.parseBlock)(!0, u);
    }

    function _s(t, u = !1) {
        let v = !0;
        for (; !(0, h.eat)(t) && !_n.state.error;) {
            if (v)
                v = !1;
            else if ((0, _q.expect)(_k.TokenType.comma), (0, h.eat)(t))
                break;
            _s(u);
        }
    }

    function _s(t) {
        t && (0, h.match)(_k.TokenType.comma) || ((0, h.match)(_k.TokenType.ellipsis) ? ((0, _o.parseSpread)(), _n()) : (0, h.match)(_k.TokenType.question) ? (0, h.next)() : _n(!1, !0));
    }

    function _s() {
        (0, h.next)(), _n.state.tokens[_n.state.tokens.length - 1].type = _k.TokenType.name;
    }
}), a.register('+/57p', function(b, c) {
    _n(b.exports, 'nextJSXTagToken', function() {
        return _l;
    }), _n(b.exports, 'jsxParseElement', function() {
        return _l;
    });
    var d = a('sK5Ca'),
        e = a('8rqpk'),
        f = a('UXH9U'),
        g = a('401Dp'),
        h = a('Tfs2H'),
        i = a('8+Hbk'),
        j = a('c4XAS'),
        k = a('R2GJq');

    function l() {
        _l();
    }

    function l(m) {
        _l(), (0, d.eat)(e.TokenType.colon) ? _l() : f.state.tokens[f.state.tokens.length - 1].identifierRole = m;
    }

    function l() {
        const m = f.state.tokens.length;
        _m(d.IdentifierRole.Access);
        let _n = !1;
        for (;
            (0, d.match)(e.TokenType.dot);)
            _n = !0, _l(), _l();
        if (!_n) {
            const o = f.state.tokens[m],
                p = f.input.charCodeAt(o.start);
            p >= i.charCodes.lowercaseA && p <= i.charCodes.lowercaseZ && (o.identifierRole = null);
        }
    }

    function l() {
        switch (f.state.type) {
            case e.TokenType.braceL:
                return (0, d.next)(), (0, g.parseExpression)(), void _l();
            case e.TokenType.jsxTagStart:
                return _l(), void _l();
            case e.TokenType.string:
                return void _l();
            default:
                (0, h.unexpected)('JSX value should be either an expression or a quoted JSX text');
        }
    }

    function l() {
        const m = f.state.tokens.length - 1;
        f.state.tokens[m].jsxRole = d.JSXRole.NoChildren;
        let n = 0;
        const o = function(p) {
            if ((0, d.match)(e.TokenType.jsxTagEnd))
                return !1;
            _n(), f.isTypeScriptEnabled && (0, k.tsTryParseJSXTypeArgument)();
            let q = !1;
            for (; !(0, d.match)(e.TokenType.slash) && !(0, d.match)(e.TokenType.jsxTagEnd) && !f.state.error;)
                (0, d.eat)(e.TokenType.braceL) ? (q = !0, (0, h.expect)(e.TokenType.ellipsis), (0, g.parseMaybeAssign)(), _l()) : (q && f.state.end - f.state.start == 3 && f.input.charCodeAt(f.state.start) === i.charCodes.lowercaseK && f.input.charCodeAt(f.state.start + 1) === i.charCodes.lowercaseE && f.input.charCodeAt(f.state.start + 2) === i.charCodes.lowercaseY && (f.state.tokens[p].jsxRole = d.JSXRole.KeyAfterPropSpread), _m(d.IdentifierRole.ObjectKey), (0, d.match)(e.TokenType.eq) && (_l(), _n()));
            const r = (0, d.match)(e.TokenType.slash);
            return r && _l(), r;
        }(m);
        if (!o)
            for (_l();;)
                switch (f.state.type) {
                    case e.TokenType.jsxTagStart:
                        if (_l(), (0, d.match)(e.TokenType.slash))
                            return _l(), (0, d.match)(e.TokenType.jsxTagEnd) || _n(), void(f.state.tokens[m].jsxRole !== d.JSXRole.KeyAfterPropSpread && (1 === n ? f.state.tokens[m].jsxRole = d.JSXRole.OneChild : n > 1 && (f.state.tokens[m].jsxRole = d.JSXRole.StaticChildren)));
                        n++, l(), _l();
                        break;
                    case e.TokenType.jsxText:
                        n++, _l();
                        break;
                    case e.TokenType.jsxEmptyText:
                        _l();
                        break;
                    case e.TokenType.braceL:
                        (0, d.next)(), (0, d.match)(e.TokenType.ellipsis) ? ((0, h.expect)(e.TokenType.ellipsis), (0, g.parseExpression)(), _l(), n += 2) : ((0, d.match)(e.TokenType.braceR) || (n++, (0, g.parseExpression)()), _l());
                        break;
                    default:
                        return void(0, h.unexpected)();
                }
    }

    function _l() {
        _l(), _n();
    }

    function _l() {
        f.state.tokens.push(new(0, d.Token)()), (0, d.skipSpace)(), f.state.start = f.state.pos;
        const m = f.input.charCodeAt(f.state.pos);
        if (j.IS_IDENTIFIER_START[m])
            ! function() {
                let n;
                do {
                    if (f.state.pos > f.input.length)
                        return void(0, h.unexpected)('Unexpectedly reached the end of input.');
                    n = f.input.charCodeAt(++f.state.pos);
                } while (j.IS_IDENTIFIER_CHAR[n] || n === i.charCodes.dash);
                (0, d.finishToken)(e.TokenType.jsxName);
            }();
        else if (m === i.charCodes.quotationMark || m === i.charCodes.apostrophe)
            ! function(n) {
                for (f.state.pos++;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, h.unexpected)('Unterminated string constant');
                    if (f.input.charCodeAt(f.state.pos) === n) {
                        f.state.pos++;
                        break;
                    }
                    f.state.pos++;
                }
                (0, d.finishToken)(e.TokenType.string);
            }(m);
        else
            switch (++f.state.pos, m) {
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

    function _l() {
        f.state.tokens.push(new(0, d.Token)()), f.state.start = f.state.pos,
            function() {
                let m = !1,
                    n = !1;
                for (;;) {
                    if (f.state.pos >= f.input.length)
                        return void(0, h.unexpected)('Unterminated JSX contents');
                    const o = f.input.charCodeAt(f.state.pos);
                    if (o === i.charCodes.lessThan || o === i.charCodes.leftCurlyBrace)
                        return f.state.pos === f.state.start ? o === i.charCodes.lessThan ? (f.state.pos++, void(0, d.finishToken)(e.TokenType.jsxTagStart)) : void(0, d.getTokenFromCode)(o) : void(m && !n ? (0, d.finishToken)(e.TokenType.jsxEmptyText) : (0, d.finishToken)(e.TokenType.jsxText));
                    o === i.charCodes.lineFeed ? m = !0 : o !== i.charCodes.space && o !== i.charCodes.carriageReturn && o !== i.charCodes.tab && (n = !0), f.state.pos++;
                }
            }();
    }
}), a.register('R2GJq', function(b, c) {
    _p(b.exports, 'tsParseModifiers', function() {
        return _n;
    }), _p(b.exports, 'tsParseTypeAnnotation', function() {
        return _n;
    }), _p(b.exports, 'tsParseType', function() {
        return _n;
    }), _p(b.exports, 'tsTryParseTypeParameters', function() {
        return _n;
    }), _p(b.exports, 'tsTryParseTypeAnnotation', function() {
        return _n;
    }), _p(b.exports, 'tsParseTypeAssertion', function() {
        return _n;
    }), _p(b.exports, 'tsTryParseJSXTypeArgument', function() {
        return _n;
    }), _p(b.exports, 'tsParseImportEqualsDeclaration', function() {
        return _n;
    }), _p(b.exports, 'tsIsDeclarationStart', function() {
        return _n;
    }), _p(b.exports, 'tsParseFunctionBodyAndFinish', function() {
        return _n;
    }), _p(b.exports, 'tsParseSubscript', function() {
        return _n;
    }), _p(b.exports, 'tsTryParseExport', function() {
        return _n;
    }), _p(b.exports, 'tsParseImportSpecifier', function() {
        return _n;
    }), _p(b.exports, 'tsParseExportSpecifier', function() {
        return _n;
    }), _p(b.exports, 'tsTryParseExportDefaultExpression', function() {
        return _n;
    }), _p(b.exports, 'tsTryParseStatementContent', function() {
        return _n;
    }), _p(b.exports, 'tsTryParseClassMemberWithIsStatic', function() {
        return _n;
    }), _p(b.exports, 'tsParseIdentifierStatement', function() {
        return _n;
    }), _p(b.exports, 'tsParseExportDeclaration', function() {
        return _n;
    }), _p(b.exports, 'tsAfterParseClassSuper', function() {
        return _n;
    }), _p(b.exports, 'tsStartParseObjPropValue', function() {
        return _n;
    }), _p(b.exports, 'tsStartParseFunctionParams', function() {
        return _n;
    }), _p(b.exports, 'tsAfterParseVarHead', function() {
        return _n;
    }), _p(b.exports, 'tsStartParseAsyncArrowFromCallExpression', function() {
        return _n;
    }), _p(b.exports, 'tsParseMaybeAssign', function() {
        return _n;
    }), _p(b.exports, 'tsParseArrow', function() {
        return _n;
    }), _p(b.exports, 'tsParseAssignableListItemTypes', function() {
        return _n;
    }), _p(b.exports, 'tsParseMaybeDecoratorArguments', function() {
        return _n;
    });
    var d, e = a('sK5Ca'),
        f = a('DIj/a'),
        g = a('8rqpk'),
        h = a('UXH9U'),
        i = a('401Dp'),
        j = a('G28EM'),
        k = a('PXvk6'),
        _l = a('Tfs2H'),
        _m = a('+/57p');

    function _n() {
        return (0, e.match)(g.TokenType.name);
    }

    function _n() {
        const o = h.state.snapshot();
        (0, e.next)();
        return !!(((0, e.match)(g.TokenType.bracketL) || (0, e.match)(g.TokenType.braceL) || (0, e.match)(g.TokenType.star) || (0, e.match)(g.TokenType.ellipsis) || (0, e.match)(g.TokenType.hash) || (0, e.match)(g.TokenType.name) || Boolean(h.state.type & g.TokenType.IS_KEYWORD) || (0, e.match)(g.TokenType.string) || (0, e.match)(g.TokenType.num) || (0, e.match)(g.TokenType.bigint) || (0, e.match)(g.TokenType.decimal)) && !(0, _l.hasPrecedingLineBreak)()) || (h.state.restoreFromSnapshot(o), !1);
    }

    function _n(o) {
        for (;;) {
            if (null === _n(o))
                break;
        }
    }

    function _n(o) {
        if (!(0, e.match)(g.TokenType.name))
            return null;
        const _p = h.state.contextualKeyword;
        if (-1 !== o.indexOf(_p) && _l()) {
            switch (_p) {
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
            return _p;
        }
        return null;
    }

    function n() {
        for ((0, i.parseIdentifier)();
            (0, e.eat)(g.TokenType.dot);)
            (0, i.parseIdentifier)();
    }

    function n() {
        (0, _l.expect)(g.TokenType._import), (0, _l.expect)(g.TokenType.parenL), (0, _l.expect)(g.TokenType.string), (0, _l.expect)(g.TokenType.parenR), (0, e.eat)(g.TokenType.dot) && _l(), (0, e.match)(g.TokenType.lessThan) && _n();
    }

    function _n() {
        (0, e.eat)(g.TokenType._const);
        const o = (0, e.eat)(g.TokenType._in),
            p = (0, _l.eatContextual)(f.ContextualKeyword._out);
        (0, e.eat)(g.TokenType._const), !o && !p || (0, e.match)(g.TokenType.name) ? (0, i.parseIdentifier)() : h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.name, (0, e.eat)(g.TokenType._extends) && _n(), (0, e.eat)(g.TokenType.eq) && _n();
    }

    function _n() {
        (0, e.match)(g.TokenType.lessThan) && _n();
    }

    function _n() {
        const o = (0, e.pushTypeContext)(0);
        for ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.typeParameterStart) ? (0, e.next)() : (0, _l.unexpected)(); !(0, e.eat)(g.TokenType.greaterThan) && !h.state.error;)
            _l(), (0, e.eat)(g.TokenType.comma);
        (0, e.popTypeContext)(o);
    }

    function n(o) {
        const p = o === g.TokenType.arrow;
        var q;
        _l(), (0, _l.expect)(g.TokenType.parenL), h.state.scopeDepth++, q = !1, (0, j.parseBindingList)(g.TokenType.parenR, q), h.state.scopeDepth--, (p || (0, e.match)(o)) && _n(o);
    }

    function _n() {
        (0, e.eat)(g.TokenType.comma) || (0, _l.semicolon)();
    }

    function n() {
        _(g.TokenType.colon), w();
    }

    function _n() {
        if (!(0, e.match)(g.TokenType.bracketL) || ! function() {
                const o = h.state.snapshot();
                (0, e.next)();
                const p = (0, e.eat)(g.TokenType.name) && (0, e.match)(g.TokenType.colon);
                return h.state.restoreFromSnapshot(o), p;
            }())
            return !1;
        const o = (0, e.pushTypeContext)(0);
        return (0, _l.expect)(g.TokenType.bracketL), (0, i.parseIdentifier)(), _n(), (0, _l.expect)(g.TokenType.bracketR), _n(), w(), (0, e.popTypeContext)(o), !0;
    }

    function n(o) {
        (0, e.eat)(g.TokenType.question), o || !(0, e.match)(g.TokenType.parenL) && !(0, e.match)(g.TokenType.lessThan) ? (_n(), w()) : (_(g.TokenType.colon), w());
    }

    function n() {
        if ((0, e.match)(g.TokenType.parenL) || (0, e.match)(g.TokenType.lessThan))
            return void v();
        if ((0, e.match)(g.TokenType._new))
            return (0, e.next)(), void((0, e.match)(g.TokenType.parenL) || (0, e.match)(g.TokenType.lessThan) ? v() : E(!1));
        const o = !!_l([f.ContextualKeyword._readonly]);
        I() || (((0, _l.isContextual)(f.ContextualKeyword._get) || (0, _l.isContextual)(f.ContextualKeyword._set)) && _l(), (0, i.parsePropertyName)(-1), E(o));
    }

    function n() {
        for ((0, _l.expect)(g.TokenType.braceL); !(0, e.eat)(g.TokenType.braceR) && !h.state.error;)
            S();
    }

    function n() {
        const o = h.state.snapshot(),
            p = function() {
                if ((0, e.next)(), (0, e.eat)(g.TokenType.plus) || (0, e.eat)(g.TokenType.minus))
                    return (0, _l.isContextual)(f.ContextualKeyword._readonly);
                (0, _l.isContextual)(f.ContextualKeyword._readonly) && (0, e.next)();
                return !!(0, e.match)(g.TokenType.bracketL) && ((0, e.next)(), !!_l() && ((0, e.next)(), (0, e.match)(g.TokenType._in)));
            }();
        return h.state.restoreFromSnapshot(o), p;
    }

    function n() {
        (0, _l.expect)(g.TokenType.braceL), (0, e.match)(g.TokenType.plus) || (0, e.match)(g.TokenType.minus) ? ((0, e.next)(), (0, _l.expectContextual)(f.ContextualKeyword._readonly)) : (0, _l.eatContextual)(f.ContextualKeyword._readonly), (0, _l.expect)(g.TokenType.bracketL), (0, i.parseIdentifier)(), (0, _l.expect)(g.TokenType._in), _n(), (0, _l.eatContextual)(f.ContextualKeyword._as) && _n(), (0, _l.expect)(g.TokenType.bracketR), (0, e.match)(g.TokenType.plus) || (0, e.match)(g.TokenType.minus) ? ((0, e.next)(), (0, _l.expect)(g.TokenType.question)) : (0, e.eat)(g.TokenType.question), (0, e.eat)(g.TokenType.colon) && _n(), (0, _l.semicolon)(), (0, _l.expect)(g.TokenType.braceR);
    }

    function _n() {
        (0, e.eat)(g.TokenType.ellipsis) ? _n(): (_n(), (0, e.eat)(g.TokenType.question)), (0, e.eat)(g.TokenType.colon) && _n();
    }

    function _n(o) {
        o === d.TSAbstractConstructorType && (0, _l.expectContextual)(f.ContextualKeyword._abstract), o !== d.TSConstructorType && o !== d.TSAbstractConstructorType || (0, _l.expect)(g.TokenType._new);
        const p = h.state.inDisallowConditionalTypesContext;
        h.state.inDisallowConditionalTypesContext = !1, _(g.TokenType.arrow), h.state.inDisallowConditionalTypesContext = p;
    }

    function _n() {
        switch (h.state.type) {
            case g.TokenType.name:
                return _l(), void(!(0, _l.hasPrecedingLineBreak)() && (0, e.match)(g.TokenType.lessThan) && _n());
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
                return (0, e.next)(), void((0, _l.isContextual)(f.ContextualKeyword._is) && !(0, _l.hasPrecedingLineBreak)() && ((0, e.next)(), _n()));
            case g.TokenType._typeof:
                return (0, _l.expect)(g.TokenType._typeof), (0, e.match)(g.TokenType._import) ? _l() : _l(), void(!(0, _l.hasPrecedingLineBreak)() && (0, e.match)(g.TokenType.lessThan) && _n());
            case g.TokenType._import:
                return void _l();
            case g.TokenType.braceL:
                return void(R() ? N() : A());
            case g.TokenType.bracketL:
                return void
                function() {
                    for ((0, _l.expect)(g.TokenType.bracketL); !(0, e.eat)(g.TokenType.bracketR) && !h.state.error;)
                        L(), (0, e.eat)(g.TokenType.comma);
                }();
            case g.TokenType.parenL:
                return (0, _l.expect)(g.TokenType.parenL), _n(), void(0, _l.expect)(g.TokenType.parenR);
            case g.TokenType.backQuote:
                return void
                function() {
                    for ((0, e.nextTemplateToken)(), (0, e.nextTemplateToken)(); !(0, e.match)(g.TokenType.backQuote) && !h.state.error;)
                        (0, _l.expect)(g.TokenType.dollarBraceL), _n(), (0, e.nextTemplateToken)(), (0, e.nextTemplateToken)();
                    (0, e.next)();
                }();
            default:
                if (h.state.type & g.TokenType.IS_KEYWORD)
                    return (0, e.next)(), void(h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.name);
        }
        (0, _l.unexpected)();
    }

    function n() {
        if ((0, _l.isContextual)(f.ContextualKeyword._keyof) || (0, _l.isContextual)(f.ContextualKeyword._unique) || (0, _l.isContextual)(f.ContextualKeyword._readonly))
            (0, e.next)(), n();
        else if ((0, _l.isContextual)(f.ContextualKeyword._infer))
            ! function() {
                if ((0, _l.expectContextual)(f.ContextualKeyword._infer), (0, i.parseIdentifier)(), (0, e.match)(g.TokenType._extends)) {
                    const o = h.state.snapshot();
                    (0, _l.expect)(g.TokenType._extends);
                    const p = h.state.inDisallowConditionalTypesContext;
                    h.state.inDisallowConditionalTypesContext = !0, _n(), h.state.inDisallowConditionalTypesContext = p, (h.state.error || !h.state.inDisallowConditionalTypesContext && (0, e.match)(g.TokenType.question)) && h.state.restoreFromSnapshot(o);
                }
            }();
        else {
            const o = h.state.inDisallowConditionalTypesContext;
            h.state.inDisallowConditionalTypesContext = !1,
                function() {
                    for (P(); !(0, _l.hasPrecedingLineBreak)() && (0, e.eat)(g.TokenType.bracketL);)
                        (0, e.eat)(g.TokenType.bracketR) || (_n(), (0, _l.expect)(g.TokenType.bracketR));
                }(), h.state.inDisallowConditionalTypesContext = o;
        }
    }

    function n() {
        if ((0, e.eat)(g.TokenType.bitwiseAND), O(), (0, e.match)(g.TokenType.bitwiseAND))
            for (;
                (0, e.eat)(g.TokenType.bitwiseAND);)
                O();
    }

    function n() {
        return !!(0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.parenL) && function() {
            const o = h.state.snapshot(),
                p = function() {
                    if ((0, e.next)(), (0, e.match)(g.TokenType.parenR) || (0, e.match)(g.TokenType.ellipsis))
                        return !0;
                    if (function() {
                            if ((0, e.match)(g.TokenType.name) || (0, e.match)(g.TokenType._this))
                                return (0, e.next)(), !0;
                            if ((0, e.match)(g.TokenType.braceL) || (0, e.match)(g.TokenType.bracketL)) {
                                let q = 1;
                                for ((0, e.next)(); q > 0 && !h.state.error;)
                                    (0, e.match)(g.TokenType.braceL) || (0, e.match)(g.TokenType.bracketL) ? q++ : ((0, e.match)(g.TokenType.braceR) || (0, e.match)(g.TokenType.bracketR)) && q--, (0, e.next)();
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
            return h.state.restoreFromSnapshot(o), p;
        }();
    }

    function _n(o) {
        const p = (0, e.pushTypeContext)(0);
        (0, _l.expect)(o);
        (function() {
            const q = h.state.snapshot();
            if ((0, _l.isContextual)(f.ContextualKeyword._asserts))
                return (0, e.next)(), (0, _l.eatContextual)(f.ContextualKeyword._is) ? (_n(), !0) : _l() || (0, e.match)(g.TokenType._this) ? ((0, e.next)(), (0, _l.eatContextual)(f.ContextualKeyword._is) && _n(), !0) : (h.state.restoreFromSnapshot(q), !1);
            if (_l() || (0, e.match)(g.TokenType._this))
                return (0, e.next)(), (0, _l.isContextual)(f.ContextualKeyword._is) && !(0, _l.hasPrecedingLineBreak)() ? ((0, e.next)(), _n(), !0) : (h.state.restoreFromSnapshot(q), !1);
            return !1;
        }() || _n(), (0, e.popTypeContext)(p));
    }

    function _n() {
        (0, e.match)(g.TokenType.colon) && _n();
    }

    function _n() {
        const o = (0, e.pushTypeContext)(0);
        (0, _l.expect)(g.TokenType.colon), _n(), (0, e.popTypeContext)(o);
    }

    function _n() {
        if (_n(), h.state.inDisallowConditionalTypesContext || (0, _l.hasPrecedingLineBreak)() || !(0, e.eat)(g.TokenType._extends))
            return;
        const o = h.state.inDisallowConditionalTypesContext;
        h.state.inDisallowConditionalTypesContext = !0, _n(), h.state.inDisallowConditionalTypesContext = o, (0, _l.expect)(g.TokenType.question), _n(), (0, _l.expect)(g.TokenType.colon), _n();
    }

    function _n() {
        j() ? F(d.TSFunctionType) : (0, e.match)(g.TokenType._new) ? F(d.TSConstructorType) : (0, _l.isContextual)(f.ContextualKeyword._abstract) && (0, e.lookaheadType)() === g.TokenType._new ? F(d.TSAbstractConstructorType) : function() {
            if ((0, e.eat)(g.TokenType.bitwiseOR), D(), (0, e.match)(g.TokenType.bitwiseOR))
                for (;
                    (0, e.eat)(g.TokenType.bitwiseOR);)
                    D();
        }();
    }

    function _n() {
        const o = (0, e.pushTypeContext)(1);
        M(), (0, _l.expect)(g.TokenType.greaterThan), (0, e.popTypeContext)(o), (0, i.parseMaybeUnary)();
    }

    function _n() {
        if ((0, e.eat)(g.TokenType.jsxTagStart)) {
            h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.typeParameterStart;
            const o = (0, e.pushTypeContext)(1);
            for (; !(0, e.match)(g.TokenType.greaterThan) && !h.state.error;)
                M(), (0, e.eat)(g.TokenType.comma);
            (0, _m.nextJSXTagToken)(), (0, e.popTypeContext)(o);
        }
    }

    function n() {
        for (; !(0, e.match)(g.TokenType.braceL) && !h.state.error;)
            _n(), (0, e.eat)(g.TokenType.comma);
    }

    function _n() {
        _l(), (0, e.match)(g.TokenType.lessThan) && _n();
    }

    function n() {
        if ((0, e.match)(g.TokenType.string) ? (0, i.parseLiteral)() : (0, i.parseIdentifier)(), (0, e.eat)(g.TokenType.eq)) {
            const o = h.state.tokens.length - 1;
            (0, i.parseMaybeAssign)(), h.state.tokens[o].rhsEndIndex = h.state.tokens.length;
        }
    }

    function n() {
        for ((0, j.parseBindingIdentifier)(!1), (0, _l.expect)(g.TokenType.braceL); !(0, e.eat)(g.TokenType.braceR) && !h.state.error;)
            W(), (0, e.eat)(g.TokenType.comma);
    }

    function n() {
        (0, _l.expect)(g.TokenType.braceL), (0, k.parseBlockBody)(g.TokenType.braceR);
    }

    function n() {
        (0, j.parseBindingIdentifier)(!1), (0, e.eat)(g.TokenType.dot) ? n(): X();
    }

    function n() {
        (0, _l.isContextual)(f.ContextualKeyword._global) ? (0, i.parseIdentifier)() : (0, e.match)(g.TokenType.string) ? (0, i.parseExprAtom)() : (0, _l.unexpected)(), (0, e.match)(g.TokenType.braceL) ? X(): (0, _l.semicolon)();
    }

    function _n() {
        (0, j.parseImportedIdentifier)(), (0, _l.expect)(g.TokenType.eq), (0, _l.isContextual)(f.ContextualKeyword._require) && (0, e.lookaheadType)() === g.TokenType.parenL ? ((0, _l.expectContextual)(f.ContextualKeyword._require), (0, _l.expect)(g.TokenType.parenL), (0, e.match)(g.TokenType.string) || (0, _l.unexpected)(), (0, i.parseLiteral)(), (0, _l.expect)(g.TokenType.parenR)) : _l(), (0, _l.semicolon)();
    }

    function n() {
        return _n(h.state.contextualKeyword, !0);
    }

    function n(o) {
        switch (o) {
            case f.ContextualKeyword._declare: {
                const p = h.state.tokens.length - 1,
                    q = function() {
                        if ((0, _l.isLineTerminator)())
                            return !1;
                        switch (h.state.type) {
                            case g.TokenType._function: {
                                const r = (0, e.pushTypeContext)(1);
                                (0, e.next)();
                                const s = h.state.start;
                                return (0, k.parseFunction)(s, !0), (0, e.popTypeContext)(r), !0;
                            }
                            case g.TokenType._class: {
                                const r = (0, e.pushTypeContext)(1);
                                return (0, k.parseClass)(!0, !1), (0, e.popTypeContext)(r), !0;
                            }
                            case g.TokenType._const:
                                if ((0, e.match)(g.TokenType._const) && (0, _l.isLookaheadContextual)(f.ContextualKeyword._enum)) {
                                    const r = (0, e.pushTypeContext)(1);
                                    return (0, _l.expect)(g.TokenType._const), (0, _l.expectContextual)(f.ContextualKeyword._enum), h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._enum, G(), (0, e.popTypeContext)(r), !0;
                                }
                            case g.TokenType._var:
                            case g.TokenType._let: {
                                const r = (0, e.pushTypeContext)(1);
                                return (0, k.parseVarStatement)(h.state.type !== g.TokenType._var), (0, e.popTypeContext)(r), !0;
                            }
                            case g.TokenType.name: {
                                const r = (0, e.pushTypeContext)(1),
                                    s = h.state.contextualKeyword;
                                let t = !1;
                                return s === f.ContextualKeyword._global ? (J(), t = !0) : t = _n(s, !0), (0, e.popTypeContext)(r), t;
                            }
                            default:
                                return !1;
                        }
                    }();
                if (q)
                    return h.state.tokens[p].type = g.TokenType._declare, !0;
                break;
            }
            case f.ContextualKeyword._global:
                if ((0, e.match)(g.TokenType.braceL))
                    return X(), !0;
                break;
            default:
                return _n(o, !1);
        }
        return !1;
    }

    function _n(o, p) {
        switch (o) {
            case f.ContextualKeyword._abstract:
                if (_n(p) && (0, e.match)(g.TokenType._class))
                    return h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._abstract, (0, k.parseClass)(!0, !1), !0;
                break;
            case f.ContextualKeyword._enum:
                if (_n(p) && (0, e.match)(g.TokenType.name))
                    return h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._enum, G(), !0;
                break;
            case f.ContextualKeyword._interface:
                if (_n(p) && (0, e.match)(g.TokenType.name)) {
                    const q = (0, e.pushTypeContext)(p ? 2 : 1);
                    return (0, j.parseBindingIdentifier)(!1), _l(), (0, e.eat)(g.TokenType._extends) && V(), A(), (0, e.popTypeContext)(q), !0;
                }
                break;
            case f.ContextualKeyword._module:
                if (_n(p)) {
                    if ((0, e.match)(g.TokenType.string)) {
                        const q = (0, e.pushTypeContext)(p ? 2 : 1);
                        return J(), (0, e.popTypeContext)(q), !0;
                    }
                    if ((0, e.match)(g.TokenType.name)) {
                        const q = (0, e.pushTypeContext)(p ? 2 : 1);
                        return Y(), (0, e.popTypeContext)(q), !0;
                    }
                }
                break;
            case f.ContextualKeyword._namespace:
                if (_n(p) && (0, e.match)(g.TokenType.name)) {
                    const q = (0, e.pushTypeContext)(p ? 2 : 1);
                    return Y(), (0, e.popTypeContext)(q), !0;
                }
                break;
            case f.ContextualKeyword._type:
                if (_n(p) && (0, e.match)(g.TokenType.name)) {
                    const q = (0, e.pushTypeContext)(p ? 2 : 1);
                    return (0, j.parseBindingIdentifier)(!1), _l(), (0, _l.expect)(g.TokenType.eq), M(), (0, _l.semicolon)(), (0, e.popTypeContext)(q), !0;
                }
        }
        return !1;
    }

    function _n(o) {
        return o ? ((0, e.next)(), !0) : !(0, _l.isLineTerminator)();
    }

    function n() {
        const o = h.state.snapshot();
        return C(), (0, k.parseFunctionParams)(), (0, e.match)(g.TokenType.colon) && B(g.TokenType.colon), (0, _l.expect)(g.TokenType.arrow), h.state.error ? (h.state.restoreFromSnapshot(o), !1) : ((0, i.parseFunctionBody)(!0), !0);
    }

    function n() {
        h.state.type === g.TokenType.bitShiftL && (h.state.pos -= 1, (0, e.finishToken)(g.TokenType.lessThan)), _n();
    }

    function _n() {
        const o = (0, e.pushTypeContext)(0);
        for ((0, _l.expect)(g.TokenType.lessThan); !(0, e.match)(g.TokenType.greaterThan) && !h.state.error;)
            M(), (0, e.eat)(g.TokenType.comma);
        o ? ((0, _l.expect)(g.TokenType.greaterThan), (0, e.popTypeContext)(o)) : ((0, e.popTypeContext)(o), (0, e.rescan_gt)(), (0, _l.expect)(g.TokenType.greaterThan), h.state.tokens[h.state.tokens.length - 1].isType = !0);
    }

    function _n() {
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

    function _n(o, p) {
        if ((0, e.match)(g.TokenType.colon) && B(g.TokenType.colon), (0, e.match)(g.TokenType.braceL) || !(0, _l.isLineTerminator)())
            (0, i.parseFunctionBody)(!1, p);
        else {
            let q = h.state.tokens.length - 1;
            for (; q >= 0 && (h.state.tokens[q].start >= o || h.state.tokens[q].type === g.TokenType._default || h.state.tokens[q].type === g.TokenType._export);)
                h.state.tokens[q].isType = !0, q--;
        }
    }

    function _n(o, p, q) {
        if ((0, _l.hasPrecedingLineBreak)() || !(0, e.eat)(g.TokenType.bang)) {
            if ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.bitShiftL)) {
                const r = h.state.snapshot();
                if (!p && (0, i.atPossibleAsync)()) {
                    if (oe())
                        return;
                }
                if (re(), !p && (0, e.eat)(g.TokenType.parenL) ? (h.state.tokens[h.state.tokens.length - 1].subscriptStartIndex = o, (0, i.parseCallExpressionArguments)()) : (0, e.match)(g.TokenType.backQuote) ? (0, i.parseTemplate)() : (h.state.type === g.TokenType.greaterThan || h.state.type !== g.TokenType.parenL && Boolean(h.state.type & g.TokenType.IS_EXPRESSION_START) && !(0, _l.hasPrecedingLineBreak)()) && (0, _l.unexpected)(), !h.state.error)
                    return;
                h.state.restoreFromSnapshot(r);
            } else
                !p && (0, e.match)(g.TokenType.questionDot) && (0, e.lookaheadType)() === g.TokenType.lessThan && ((0, e.next)(), h.state.tokens[o].isOptionalChainStart = !0, h.state.tokens[h.state.tokens.length - 1].subscriptStartIndex = o, se(), (0, _l.expect)(g.TokenType.parenL), (0, i.parseCallExpressionArguments)());
            (0, i.baseParseSubscript)(o, p, q);
        } else
            h.state.tokens[h.state.tokens.length - 1].type = g.TokenType.nonNullAssertion;
    }

    function _n() {
        if ((0, e.eat)(g.TokenType._import))
            return (0, _l.isContextual)(f.ContextualKeyword._type) && (0, e.lookaheadType)() !== g.TokenType.eq && (0, _l.expectContextual)(f.ContextualKeyword._type), Z(), !0;
        if ((0, e.eat)(g.TokenType.eq))
            return (0, i.parseExpression)(), (0, _l.semicolon)(), !0;
        if ((0, _l.eatContextual)(f.ContextualKeyword._as))
            return (0, _l.expectContextual)(f.ContextualKeyword._namespace), (0, i.parseIdentifier)(), (0, _l.semicolon)(), !0;
        if ((0, _l.isContextual)(f.ContextualKeyword._type)) {
            const o = (0, e.lookaheadType)();
            o !== g.TokenType.braceL && o !== g.TokenType.star || (0, e.next)();
        }
        return !1;
    }

    function _n() {
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

    function _n() {
        if ((0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR))
            h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ExportAccess;
        else {
            if ((0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR))
                return h.state.tokens[h.state.tokens.length - 1].identifierRole = e.IdentifierRole.ExportAccess, h.state.tokens[h.state.tokens.length - 2].isType = !0, void(h.state.tokens[h.state.tokens.length - 1].isType = !0);
            (0, i.parseIdentifier)(), (0, e.match)(g.TokenType.comma) || (0, e.match)(g.TokenType.braceR) ? h.state.tokens[h.state.tokens.length - 3].identifierRole = e.IdentifierRole.ExportAccess: ((0, i.parseIdentifier)(), h.state.tokens[h.state.tokens.length - 3].identifierRole = e.IdentifierRole.ExportAccess, h.state.tokens[h.state.tokens.length - 4].isType = !0, h.state.tokens[h.state.tokens.length - 3].isType = !0, h.state.tokens[h.state.tokens.length - 2].isType = !0, h.state.tokens[h.state.tokens.length - 1].isType = !0);
        }
    }

    function _n() {
        if ((0, _l.isContextual)(f.ContextualKeyword._abstract) && (0, e.lookaheadType)() === g.TokenType._class)
            return h.state.type = g.TokenType._abstract, (0, e.next)(), (0, k.parseClass)(!0, !0), !0;
        if ((0, _l.isContextual)(f.ContextualKeyword._interface)) {
            const o = (0, e.pushTypeContext)(2);
            return te(f.ContextualKeyword._interface, !0), (0, e.popTypeContext)(o), !0;
        }
        return !1;
    }

    function _n() {
        if (h.state.type === g.TokenType._const) {
            const o = (0, e.lookaheadTypeAndKeyword)();
            if (o.type === g.TokenType.name && o.contextualKeyword === f.ContextualKeyword._enum)
                return (0, _l.expect)(g.TokenType._const), (0, _l.expectContextual)(f.ContextualKeyword._enum), h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._enum, G(), !0;
        }
        return !1;
    }

    function _n(o) {
        const p = h.state.tokens.length;
        _l([
            f.ContextualKeyword._abstract,
            f.ContextualKeyword._readonly,
            f.ContextualKeyword._declare,
            f.ContextualKeyword._static,
            f.ContextualKeyword._override
        ]);
        const q = h.state.tokens.length;
        if (I()) {
            for (let r = o ? p - 1 : p; r < q; r++)
                h.state.tokens[r].isType = !0;
            return !0;
        }
        return !1;
    }

    function _n(o) {
        ee(o) || (0, _l.semicolon)();
    }

    function _n() {
        const o = (0, _l.eatContextual)(f.ContextualKeyword._declare);
        o && (h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._declare);
        let p = !1;
        if ((0, e.match)(g.TokenType.name))
            if (o) {
                const q = (0, e.pushTypeContext)(2);
                p = Q(), (0, e.popTypeContext)(q);
            } else
                p = Q();
        if (!p)
            if (o) {
                const q = (0, e.pushTypeContext)(2);
                (0, k.parseStatement)(!0), (0, e.popTypeContext)(q);
            } else
                (0, k.parseStatement)(!0);
    }

    function _n(o) {
        if (o && ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.bitShiftL)) && re(), (0, _l.eatContextual)(f.ContextualKeyword._implements)) {
            h.state.tokens[h.state.tokens.length - 1].type = g.TokenType._implements;
            const p = (0, e.pushTypeContext)(1);
            V(), (0, e.popTypeContext)(p);
        }
    }

    function _n() {
        _l();
    }

    function _n() {
        _l();
    }

    function _n() {
        const o = (0, e.pushTypeContext)(0);
        (0, _l.hasPrecedingLineBreak)() || (0, e.eat)(g.TokenType.bang), K(), (0, e.popTypeContext)(o);
    }

    function _n() {
        (0, e.match)(g.TokenType.colon) && $();
    }

    function _n(o, p) {
        return h.isJSXEnabled ? function(q, r) {
            if (!(0, e.match)(g.TokenType.lessThan))
                return (0, i.baseParseMaybeAssign)(q, r);
            const s = h.state.snapshot();
            let t = (0, i.baseParseMaybeAssign)(q, r);
            if (!h.state.error)
                return t;
            h.state.restoreFromSnapshot(s);
            h.state.type = g.TokenType.typeParameterStart, C(), t = (0, i.baseParseMaybeAssign)(q, r), t || (0, _l.unexpected)();
            return t;
        }(o, p) : function(q, r) {
            if (!(0, e.match)(g.TokenType.lessThan))
                return (0, i.baseParseMaybeAssign)(q, r);
            const s = h.state.snapshot();
            C();
            const t = (0, i.baseParseMaybeAssign)(q, r);
            t || (0, _l.unexpected)();
            if (!h.state.error)
                return t;
            h.state.restoreFromSnapshot(s);
            return (0, i.baseParseMaybeAssign)(q, r);
        }(o, p);
    }

    function _n() {
        if ((0, e.match)(g.TokenType.colon)) {
            const o = h.state.snapshot();
            B(g.TokenType.colon), (0, _l.canInsertSemicolon)() && (0, _l.unexpected)(), (0, e.match)(g.TokenType.arrow) || (0, _l.unexpected)(), h.state.error && h.state.restoreFromSnapshot(o);
        }
        return (0, e.eat)(g.TokenType.arrow);
    }

    function _n() {
        const o = (0, e.pushTypeContext)(0);
        (0, e.eat)(g.TokenType.question), K(), (0, e.popTypeContext)(o);
    }

    function _n() {
        ((0, e.match)(g.TokenType.lessThan) || (0, e.match)(g.TokenType.bitShiftL)) && re(), (0, k.baseParseMaybeDecoratorArguments)();
    }! function(n) {
        n[n.TSFunctionType = 0] = 'TSFunctionType';
        n[n.TSConstructorType = 1] = 'TSConstructorType';
        n[n.TSAbstractConstructorType = 2] = 'TSAbstractConstructorType';
    }(d || (d = {}));
}), a.register('G28EM', function(b, c) {
    _n(b.exports, 'parseSpread', function() {
        return _l;
    }), _n(b.exports, 'parseRest', function() {
        return _l;
    }), _n(b.exports, 'parseBindingAtom', function() {
        return _l;
    }), _n(b.exports, 'parseBindingIdentifier', function() {
        return _l;
    }), _n(b.exports, 'markPriorBindingIdentifier', function() {
        return _l;
    }), _n(b.exports, 'parseImportedIdentifier', function() {
        return _l;
    }), _n(b.exports, 'parseBindingList', function() {
        return _l;
    }), _n(b.exports, 'parseMaybeDefault', function() {
        return _l;
    });
    var d = a('oRy1H'),
        e = a('R2GJq'),
        f = a('sK5Ca'),
        g = a('DIj/a'),
        h = a('8rqpk'),
        i = a('UXH9U'),
        j = a('401Dp'),
        k = a('Tfs2H');

    function _l() {
        (0, f.next)(), (0, j.parseMaybeAssign)(!1);
    }

    function _l(m) {
        (0, f.next)(), _l(m);
    }

    function _l(m) {
        (0, j.parseIdentifier)(), _l(m);
    }

    function _l() {
        (0, j.parseIdentifier)(), i.state.tokens[i.state.tokens.length - 1].identifierRole = f.IdentifierRole.ImportDeclaration;
    }

    function _l(m) {
        let _n;
        _n = 0 === i.state.scopeDepth ? f.IdentifierRole.TopLevelDeclaration : m ? f.IdentifierRole.BlockScopedDeclaration : f.IdentifierRole.FunctionScopedDeclaration, i.state.tokens[i.state.tokens.length - 1].identifierRole = _n;
    }

    function _l(m) {
        switch (i.state.type) {
            case h.TokenType._this: {
                const n = (0, f.pushTypeContext)(0);
                return (0, f.next)(), void(0, f.popTypeContext)(n);
            }
            case h.TokenType._yield:
            case h.TokenType.name:
                return i.state.type = h.TokenType.name, void _n(m);
            case h.TokenType.bracketL:
                return (0, f.next)(), void _l(h.TokenType.bracketR, m, !0);
            case h.TokenType.braceL:
                return void(0, j.parseObj)(!0, m);
            default:
                (0, k.unexpected)();
        }
    }

    function _l(m, n, o = !1, p = !1, q = 0) {
        let r = !0,
            s = !1;
        const t = i.state.tokens.length;
        for (; !(0, f.eat)(m) && !i.state.error;)
            if (r ? r = !1 : ((0, k.expect)(h.TokenType.comma), i.state.tokens[i.state.tokens.length - 1].contextId = q, !s && i.state.tokens[t].isType && (i.state.tokens[i.state.tokens.length - 1].isType = !0, s = !0)), o && (0, f.match)(h.TokenType.comma));
            else {
                if ((0, f.eat)(m))
                    break;
                if ((0, f.match)(h.TokenType.ellipsis)) {
                    _m(n), _l(), (0, f.eat)(h.TokenType.comma), (0, k.expect)(m);
                    break;
                }
                _l(p, n);
            }
    }

    function _l(m, n) {
        m && (0, e.tsParseModifiers)([
            g.ContextualKeyword._public,
            g.ContextualKeyword._protected,
            g.ContextualKeyword._private,
            g.ContextualKeyword._readonly,
            g.ContextualKeyword._override
        ]), _l(n), _l(), _l(n, !0);
    }

    function _l() {
        i.isFlowEnabled ? (0, d.flowParseAssignableListItemTypes)() : i.isTypeScriptEnabled && (0, e.tsParseAssignableListItemTypes)();
    }

    function _l(m, n = !1) {
        if (n || _q(m), !(0, f.eat)(h.TokenType.eq))
            return;
        const o = i.state.tokens.length - 1;
        (0, j.parseMaybeAssign)(), i.state.tokens[o].rhsEndIndex = i.state.tokens.length;
    }
}), a.register('BEEWk', function(b, c) {
    _h(b.exports, 'typedParseConditional', function() {
        return _j;
    }), _h(b.exports, 'typedParseParenItem', function() {
        return _j;
    });
    var d = a('sK5Ca'),
        e = a('8rqpk'),
        f = a('UXH9U'),
        g = a('401Dp'),
        h = a('oRy1H'),
        i = a('R2GJq');

    function _j(k) {
        if ((0, d.match)(e.TokenType.question)) {
            const l = (0, d.lookaheadType)();
            if (l === e.TokenType.colon || l === e.TokenType.comma || l === e.TokenType.parenR)
                return;
        }
        (0, g.baseParseConditional)(k);
    }

    function _j() {
        (0, d.eatTypeToken)(e.TokenType.question), (0, d.match)(e.TokenType.colon) && (f.isTypeScriptEnabled ? (0, i.tsParseTypeAnnotation)() : f.isFlowEnabled && (0, h.flowParseTypeAnnotation)());
    }
}), a.register('MdYAY', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('8rqpk'),
        e = a('jYD/v');
    class _f {
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
        restoreToSnapshot(g) {
            this.resultCode = g.resultCode, this.tokenIndex = g.tokenIndex;
        }
        dangerouslyGetAndRemoveCodeSinceSnapshot(g) {
            const _h = this.resultCode.slice(g.resultCode.length);
            return this.resultCode = g.resultCode, _h;
        }
        reset() {
            this.resultCode = '', this.resultMappings = new Array(this.tokens.length), this.tokenIndex = 0;
        }
        matchesContextualAtIndex(g, h) {
            return this.matches1AtIndex(g, d.TokenType.name) && this.tokens[g].contextualKeyword === h;
        }
        identifierNameAtIndex(g) {
            return this.identifierNameForToken(this.tokens[g]);
        }
        identifierNameAtRelativeIndex(g) {
            return this.identifierNameForToken(this.tokenAtRelativeIndex(g));
        }
        identifierName() {
            return this.identifierNameForToken(this.currentToken());
        }
        identifierNameForToken(g) {
            return this.code.slice(g.start, g.end);
        }
        rawCodeForToken(g) {
            return this.code.slice(g.start, g.end);
        }
        stringValueAtIndex(g) {
            return this.stringValueForToken(this.tokens[g]);
        }
        stringValue() {
            return this.stringValueForToken(this.currentToken());
        }
        stringValueForToken(g) {
            return this.code.slice(g.start + 1, g.end - 1);
        }
        matches1AtIndex(g, h) {
            return this.tokens[g].type === h;
        }
        matches2AtIndex(g, h, i) {
            return this.tokens[g].type === h && this.tokens[g + 1].type === i;
        }
        matches3AtIndex(g, h, i, j) {
            return this.tokens[g].type === h && this.tokens[g + 1].type === i && this.tokens[g + 2].type === j;
        }
        matches1(g) {
            return this.tokens[this.tokenIndex].type === g;
        }
        matches2(g, h) {
            return this.tokens[this.tokenIndex].type === g && this.tokens[this.tokenIndex + 1].type === h;
        }
        matches3(g, h, i) {
            return this.tokens[this.tokenIndex].type === g && this.tokens[this.tokenIndex + 1].type === h && this.tokens[this.tokenIndex + 2].type === i;
        }
        matches4(g, h, i, j) {
            return this.tokens[this.tokenIndex].type === g && this.tokens[this.tokenIndex + 1].type === h && this.tokens[this.tokenIndex + 2].type === i && this.tokens[this.tokenIndex + 3].type === j;
        }
        matches5(g, h, i, j, k) {
            return this.tokens[this.tokenIndex].type === g && this.tokens[this.tokenIndex + 1].type === h && this.tokens[this.tokenIndex + 2].type === i && this.tokens[this.tokenIndex + 3].type === j && this.tokens[this.tokenIndex + 4].type === k;
        }
        matchesContextual(g) {
            return this.matchesContextualAtIndex(this.tokenIndex, g);
        }
        matchesContextIdAndLabel(g, h) {
            return this.matches1(g) && this.currentToken().contextId === h;
        }
        previousWhitespaceAndComments() {
            let g = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
            return this.isFlowEnabled && (g = g.replace(/@flow/g, '')), g;
        }
        replaceToken(g) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += g, this.appendTokenSuffix(), this.tokenIndex++;
        }
        replaceTokenTrimmingLeftWhitespace(g) {
            this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ''), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += g, this.appendTokenSuffix(), this.tokenIndex++;
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
        copyExpectedToken(g) {
            if (this.tokens[this.tokenIndex].type !== g)
                throw new Error(`Expected token ${ g }`);
            this.copyToken();
        }
        copyToken() {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
        }
        copyTokenWithPrefix(g) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += g, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++;
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
            const g = this.currentToken();
            if (g.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += '])'), g.numNullishCoalesceEnds && !this.disableESTransforms)
                for (let h = 0; h < g.numNullishCoalesceEnds; h++)
                    this.resultCode += '))';
        }
        appendCode(g) {
            this.resultCode += g;
        }
        currentToken() {
            return this.tokens[this.tokenIndex];
        }
        currentTokenCode() {
            const g = this.currentToken();
            return this.code.slice(g.start, g.end);
        }
        tokenAtRelativeIndex(g) {
            return this.tokens[this.tokenIndex + g];
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
        constructor(g, h, i, j, k) {
            this.code = g, this.tokens = h, this.isFlowEnabled = i, this.disableESTransforms = j, this.helperManager = k, _f.prototype.__init.call(this), _f.prototype.__init2.call(this), _f.prototype.__init3.call(this);
        }
    }
}), a.register('jYD/v', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('DIj/a');

    function _e(f) {
        let _g = f.currentIndex(),
            h = 0;
        const i = f.currentToken();
        do {
            const j = f.tokens[_g];
            if (j.isOptionalChainStart && h++, j.isOptionalChainEnd && h--, h += j.numNullishCoalesceStarts, h -= j.numNullishCoalesceEnds, j.contextualKeyword === d.ContextualKeyword._await && null == j.identifierRole && j.scopeDepth === i.scopeDepth)
                return !0;
            _g += 1;
        } while (h > 0 && _g < f.tokens.length);
        return !1;
    }
}), a.register('zJUUu', function(b, c) {
    _t(b.exports, 'default', function() {
        return _r;
    });
    var d = a('DIj/a'),
        e = a('8rqpk'),
        f = a('orz43'),
        g = a('qEK8d'),
        h = a('ErImj'),
        i = a('2YP3V'),
        j = a('24ynG'),
        k = a('wzNO8'),
        l = a('Dfqy1'),
        _m = a('NsFFi'),
        _n = a('tTDac'),
        o = a('gu/dj'),
        p = a('WtcDc'),
        _q = a('/eTlT');
    class _r {
        __init() {
            this.transformers = [];
        }
        __init2() {
            this.generatedVariables = [];
        }
        transform() {
            this.tokens.reset(), this.processBalancedCode();
            let s = this.isImportsTransformEnabled ? '"use strict";' : '';
            for (const _t of this.transformers)
                s += _t.getPrefixCode();
            s += this.helperManager.emitHelpers(), s += this.generatedVariables.map(s => ` var ${ s };`).join('');
            for (const u of this.transformers)
                s += u.getHoistedCode();
            let v = '';
            for (const w of this.transformers)
                v += w.getSuffixCode();
            const x = this.tokens.finish();
            let {
                code: y
            } = x;
            if (y.startsWith('#!')) {
                let z = y.indexOf('\n');
                return -1 === z && (z = y.length, y += '\n'), {
                    code: y.slice(0, z + 1) + w + y.slice(z + 1) + v,
                    mappings: this.shiftMappings(x.mappings, w.length)
                };
            }
            return {
                code: w + y + v,
                mappings: this.shiftMappings(x.mappings, w.length)
            };
        }
        processBalancedCode() {
            let s = 0,
                t = 0;
            for (; !this.tokens.isAtEnd();) {
                if (this.tokens.matches1(e.TokenType.braceL) || this.tokens.matches1(e.TokenType.dollarBraceL))
                    s++;
                else if (this.tokens.matches1(e.TokenType.braceR)) {
                    if (0 === s)
                        return;
                    s--;
                }
                if (this.tokens.matches1(e.TokenType.parenL))
                    t++;
                else if (this.tokens.matches1(e.TokenType.parenR)) {
                    if (0 === t)
                        return;
                    t--;
                }
                this.processToken();
            }
        }
        processToken() {
            if (this.tokens.matches1(e.TokenType._class))
                this.processClass();
            else {
                for (const s of this.transformers) {
                    if (s.process())
                        return;
                }
                this.tokens.copyToken();
            }
        }
        processNamedClass() {
            if (!this.tokens.matches2(e.TokenType._class, e.TokenType.name))
                throw new Error('Expected identifier for exported class name.');
            const s = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.processClass(), s;
        }
        processClass() {
            const s = (0, f.default)(this, this.tokens, this.nameManager, this.disableESTransforms),
                t = (s.headerInfo.isExpression || !s.headerInfo.className) && s.staticInitializerNames.length + s.instanceInitializerNames.length > 0;
            let u = s.headerInfo.className;
            t && (u = this.nameManager.claimFreeName('_class'), this.generatedVariables.push(u), this.tokens.appendCode(` (${ u } =`));
            const v = this.tokens.currentToken().contextId;
            if (null == v)
                throw new Error('Expected class to have a context ID.');
            for (this.tokens.copyExpectedToken(e.TokenType._class); !this.tokens.matchesContextIdAndLabel(e.TokenType.braceL, v);)
                this.processToken();
            this.processClassBody(s, u);
            const w = s.staticInitializerNames.map(s => `${ u }.${ s }()`);
            t ? this.tokens.appendCode(`, ${ w.map(s => `${ s }, `).join('') }${ u })`) : s.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${ w.map(s => `${ s };`).join(' ') }`);
        }
        processClassBody(s, t) {
            const {
                headerInfo: u,
                constructorInsertPos: v,
                constructorInitializerStatements: w,
                fields: x,
                instanceInitializerNames: y,
                rangesToRemove: z
            } = s;
            let A = 0,
                B = 0;
            const C = this.tokens.currentToken().contextId;
            if (null == C)
                throw new Error('Expected non-null context ID on class.');
            this.tokens.copyExpectedToken(e.TokenType.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode('__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}');
            const D = w.length + y.length > 0;
            if (null === v && D) {
                const E = this.makeConstructorInitCode(w, y, t);
                if (u.hasSuperclass) {
                    const F = this.nameManager.claimFreeName('args');
                    this.tokens.appendCode(`constructor(...${ F }) { super(...${ F }); ${ E }; }`);
                } else
                    this.tokens.appendCode(`constructor() { ${ E }; }`);
            }
            for (; !this.tokens.matchesContextIdAndLabel(e.TokenType.braceR, C);)
                if (A < x.length && this.tokens.currentIndex() === x[A].start) {
                    let E = !1;
                    for (this.tokens.matches1(e.TokenType.bracketL) ? this.tokens.copyTokenWithPrefix(`${ x[A].initializerName }() {this`) : this.tokens.matches1(e.TokenType.string) || this.tokens.matches1(e.TokenType.num) ? (this.tokens.copyTokenWithPrefix(`${ x[A].initializerName }() {this[`), E = !0) : this.tokens.copyTokenWithPrefix(`${ x[A].initializerName }() {this.`); this.tokens.currentIndex() < x[A].end;)
                        E && this.tokens.currentIndex() === x[A].equalsIndex && this.tokens.appendCode(']'), this.processToken();
                    this.tokens.appendCode('}'), A++;
                } else if (B < z.length && this.tokens.currentIndex() >= z[B].start) {
                for (this.tokens.currentIndex() < z[B].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < z[B].end;)
                    this.tokens.removeToken();
                B++;
            } else
                this.tokens.currentIndex() === v ? (this.tokens.copyToken(), D && this.tokens.appendCode(`;${ this.makeConstructorInitCode(w, y, t) };`), this.processToken()) : this.processToken();
            this.tokens.copyExpectedToken(e.TokenType.braceR);
        }
        makeConstructorInitCode(s, t, u) {
            return [
                ...s,
                ...t.map(s => `${ u }.prototype.${ s }.call(this)`)
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
        shiftMappings(s, t) {
            for (let u = 0; u < s.length; u++) {
                const v = s[u];
                void 0 !== v && (s[u] = v + t);
            }
            return s;
        }
        constructor(s, t, u, v) {
            _r.prototype.__init.call(this), _r.prototype.__init2.call(this), this.nameManager = s.nameManager, this.helperManager = s.helperManager;
            const {
                tokenProcessor: w,
                importProcessor: x
            } = s;
            this.tokens = w, this.isImportsTransformEnabled = t.includes('imports'), this.isReactHotLoaderTransformEnabled = t.includes('react-hot-loader'), this.disableESTransforms = Boolean(v.disableESTransforms), v.disableESTransforms || (this.transformers.push(new(0, _n.default)(w, this.nameManager)), this.transformers.push(new(0, l.default)(w)), this.transformers.push(new(0, _m.default)(w, this.nameManager))), t.includes('jsx') && ('preserve' !== v.jsxRuntime && this.transformers.push(new(0, k.default)(this, w, x, this.nameManager, v)), this.transformers.push(new(0, o.default)(this, w, x, v)));
            let y = null;
            if (t.includes('react-hot-loader')) {
                if (!v.filePath)
                    throw new Error('filePath is required when using the react-hot-loader transform.');
                y = new(0, p.default)(w, v.filePath), this.transformers.push(y);
            }
            if (t.includes('imports')) {
                if (null === x)
                    throw new Error('Expected non-null importProcessor with imports transform enabled.');
                this.transformers.push(new(0, g.default)(this, w, x, this.nameManager, this.helperManager, y, u, Boolean(v.enableLegacyTypeScriptModuleInterop), t.includes('typescript'), t.includes('flow'), Boolean(v.preserveDynamicImport), Boolean(v.keepUnusedImports)));
            } else
                this.transformers.push(new(0, h.default)(w, this.nameManager, this.helperManager, y, t.includes('typescript'), t.includes('flow'), Boolean(v.keepUnusedImports), v));
            t.includes('flow') && this.transformers.push(new(0, i.default)(this, w, t.includes('imports'))), t.includes('typescript') && this.transformers.push(new(0, _q.default)(this, w, t.includes('imports'))), t.includes('jest') && this.transformers.push(new(0, j.default)(this, w, this.nameManager, x));
        }
    }
}), a.register('orz43', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('DIj/a'),
        e = a('8rqpk');

    function _f(g, _h, i, j) {
        const k = _h.snapshot(),
            l = function(m) {
                const n = m.currentToken(),
                    o = n.contextId;
                if (null == o)
                    throw new Error('Expected context ID on class token.');
                const p = n.isExpression;
                if (null == p)
                    throw new Error('Expected isExpression on class token.');
                let q = null,
                    r = !1;
                m.nextToken(), m.matches1(e.TokenType.name) && (q = m.identifierName());
                for (; !m.matchesContextIdAndLabel(e.TokenType.braceL, o);)
                    m.matches1(e.TokenType._extends) && !m.currentToken().isType && (r = !0), m.nextToken();
                return {
                    isExpression: p,
                    className: q,
                    hasSuperclass: r
                };
            }(_h);
        let m = [];
        const n = [],
            o = [];
        let p = null;
        const q = [],
            r = [],
            s = _h.currentToken().contextId;
        if (null == s)
            throw new Error('Expected non-null class context ID on class open-brace.');
        for (_h.nextToken(); !_h.matchesContextIdAndLabel(e.TokenType.braceR, s);)
            if (_h.matchesContextual(d.ContextualKeyword._constructor) && !_h.currentToken().isType)
                ({
                    constructorInitializerStatements: t,
                    constructorInsertPos: u
                } = _f(_h));
            else if (_h.matches1(e.TokenType.semi))
            j || r.push({
                start: _h.currentIndex(),
                end: _h.currentIndex() + 1
            }), _h.nextToken();
        else if (_h.currentToken().isType)
            _h.nextToken();
        else {
            const v = _h.currentIndex();
            let w = !1,
                x = !1,
                y = !1;
            for (; _f(_h.currentToken());)
                _h.matches1(e.TokenType._static) && (w = !0), _h.matches1(e.TokenType.hash) && (x = !0), (_h.matches1(e.TokenType._declare) || _h.matches1(e.TokenType._abstract)) && (y = !0), _h.nextToken();
            if (w && _h.matches1(e.TokenType.braceL)) {
                _f(_h, s);
                continue;
            }
            if (x) {
                _f(_h, s);
                continue;
            }
            if (_h.matchesContextual(d.ContextualKeyword._constructor) && !_h.currentToken().isType) {
                ({
                    constructorInitializerStatements: z,
                    constructorInsertPos: A
                } = _f(_h));
                continue;
            }
            const z = _h.currentIndex();
            if (_f(_h), _h.matches1(e.TokenType.lessThan) || _h.matches1(e.TokenType.parenL)) {
                _f(_h, s);
                continue;
            }
            for (; _h.currentToken().isType;)
                _h.nextToken();
            if (_h.matches1(e.TokenType.eq)) {
                const A = _h.currentIndex(),
                    B = _h.currentToken().rhsEndIndex;
                if (null == B)
                    throw new Error('Expected rhsEndIndex on class field assignment.');
                for (_h.nextToken(); _h.currentIndex() < B;)
                    g.processToken();
                let C;
                w ? (C = i.claimFreeName('__initStatic'), o.push(C)) : (C = i.claimFreeName('__init'), n.push(C)), q.push({
                    initializerName: C,
                    equalsIndex: A,
                    start: z,
                    end: _h.currentIndex()
                });
            } else
                j && !y || r.push({
                    start: v,
                    end: _h.currentIndex()
                });
        }
        return _h.restoreToSnapshot(k), j ? {
            headerInfo: l,
            constructorInitializerStatements: m,
            instanceInitializerNames: [],
            staticInitializerNames: [],
            constructorInsertPos: p,
            fields: [],
            rangesToRemove: r
        } : {
            headerInfo: l,
            constructorInitializerStatements: m,
            instanceInitializerNames: n,
            staticInitializerNames: o,
            constructorInsertPos: p,
            fields: q,
            rangesToRemove: r
        };
    }

    function _f(g, h) {
        for (g.nextToken(); g.currentToken().contextId !== h;)
            g.nextToken();
        for (; _f(g.tokenAtRelativeIndex(-1));)
            g.previousToken();
    }

    function _f(g) {
        const h = [];
        g.nextToken();
        const i = g.currentToken().contextId;
        if (null == i)
            throw new Error('Expected context ID on open-paren starting constructor params.');
        for (; !g.matchesContextIdAndLabel(e.TokenType.parenR, i);)
            if (g.currentToken().contextId === i) {
                if (g.nextToken(), _f(g.currentToken())) {
                    for (g.nextToken(); _f(g.currentToken());)
                        g.nextToken();
                    const j = g.currentToken();
                    if (j.type !== e.TokenType.name)
                        throw new Error('Expected identifier after access modifiers in constructor arg.');
                    const k = g.identifierNameForToken(j);
                    h.push(`this.${ k } = ${ k }`);
                }
            } else
                g.nextToken();
        for (g.nextToken(); g.currentToken().isType;)
            g.nextToken();
        let j = g.currentIndex(),
            k = !1;
        for (; !g.matchesContextIdAndLabel(e.TokenType.braceR, i);) {
            if (!k && g.matches2(e.TokenType._super, e.TokenType.parenL)) {
                g.nextToken();
                const l = g.currentToken().contextId;
                if (null == l)
                    throw new Error('Expected a context ID on the super call');
                for (; !g.matchesContextIdAndLabel(e.TokenType.parenR, l);)
                    g.nextToken();
                j = g.currentIndex(), k = !0;
            }
            g.nextToken();
        }
        return g.nextToken(), {
            constructorInitializerStatements: h,
            constructorInsertPos: j
        };
    }

    function _f(g) {
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
        ].includes(g.type);
    }

    function _f(g) {
        if (g.matches1(e.TokenType.bracketL)) {
            const h = g.currentToken().contextId;
            if (null == h)
                throw new Error('Expected class context ID on computed name open bracket.');
            for (; !g.matchesContextIdAndLabel(e.TokenType.bracketR, h);)
                g.nextToken();
            g.nextToken();
        } else
            g.nextToken();
    }
}), a.register('qEK8d', function(b, c) {
    _p(b.exports, 'default', function() {
        return _n;
    });
    var d = a('sK5Ca'),
        e = a('DIj/a'),
        f = a('8rqpk'),
        g = a('Xmchp'),
        h = a('ceITY'),
        i = a('YLJ/Q'),
        j = a('MZQvS'),
        k = a('p8FVc'),
        l = a('jGA8q'),
        m = a('pHE0P');
    class _n extends m.default {
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
            const o = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.importProcessor.shouldAutomaticallyElideImportedName(o) ? (0, g.default)(this.tokens) : this.tokens.replaceToken('const'), !0;
        }
        processImport() {
            if (this.tokens.matches2(f.TokenType._import, f.TokenType.parenL)) {
                if (this.preserveDynamicImport)
                    return void this.tokens.copyToken();
                const o = this.enableLegacyTypeScriptModuleInterop ? '' : `${ this.helperManager.getHelperName('interopRequireWildcard') }(`;
                this.tokens.replaceToken(`Promise.resolve().then(() => ${ o }require`);
                const _p = this.tokens.currentToken().contextId;
                if (null == _p)
                    throw new Error('Expected context ID on dynamic import invocation.');
                for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(f.TokenType.parenR, _p);)
                    this.rootTransformer.processToken();
                return void this.tokens.replaceToken(o ? ')))' : '))');
            }
            if (this.removeImportAndDetectIfShouldElide())
                this.tokens.removeToken();
            else {
                const o = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(o)), this.tokens.appendCode(this.importProcessor.claimImportCode(o));
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
            let o = !1,
                p = !1;
            for (; !this.tokens.matches1(f.TokenType.string);)
                (!o && this.tokens.matches1(f.TokenType.braceL) || this.tokens.matches1(f.TokenType.comma)) && (this.tokens.removeToken(), this.tokens.matches1(f.TokenType.braceR) || (p = !0), (this.tokens.matches2(f.TokenType.name, f.TokenType.comma) || this.tokens.matches2(f.TokenType.name, f.TokenType.braceR) || this.tokens.matches4(f.TokenType.name, f.TokenType.name, f.TokenType.name, f.TokenType.comma) || this.tokens.matches4(f.TokenType.name, f.TokenType.name, f.TokenType.name, f.TokenType.braceR)) && (o = !0)), this.tokens.removeToken();
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !o : !!this.isFlowTransformEnabled && (p && !o));
        }
        removeRemainingImport() {
            for (; !this.tokens.matches1(f.TokenType.string);)
                this.tokens.removeToken();
        }
        processIdentifier() {
            const o = this.tokens.currentToken();
            if (o.shadowsGlobal)
                return !1;
            if (o.identifierRole === d.IdentifierRole.ObjectShorthand)
                return this.processObjectShorthand();
            if (o.identifierRole !== d.IdentifierRole.Access)
                return !1;
            const p = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(o));
            if (!p)
                return !1;
            let q = this.tokens.currentIndex() + 1;
            for (; q < this.tokens.tokens.length && this.tokens.tokens[q].type === f.TokenType.parenR;)
                q++;
            return this.tokens.tokens[q].type === f.TokenType.parenL ? this.tokens.tokenAtRelativeIndex(1).type === f.TokenType.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== f.TokenType._new ? (this.tokens.replaceToken(`${ p }.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR)) : this.tokens.replaceToken(`(0, ${ p })`) : this.tokens.replaceToken(p), !0;
        }
        processObjectShorthand() {
            const o = this.tokens.identifierName(),
                p = this.importProcessor.getIdentifierReplacement(o);
            return !!p && (this.tokens.replaceToken(`${ o }: ${ p }`), !0);
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
            const o = this.tokens.currentIndex(),
                p = this.tokens.tokens[o - 1];
            if (p.isType || p.type !== f.TokenType.name)
                return !1;
            if (p.shadowsGlobal)
                return !1;
            if (o >= 2 && this.tokens.matches1AtIndex(o - 2, f.TokenType.dot))
                return !1;
            if (o >= 2 && [
                    f.TokenType._var,
                    f.TokenType._let,
                    f.TokenType._const
                ].includes(this.tokens.tokens[o - 2].type))
                return !1;
            const q = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(p));
            return !!q && (this.tokens.copyToken(), this.tokens.appendCode(` ${ q } =`), !0);
        }
        processComplexAssignment() {
            const o = this.tokens.currentIndex(),
                p = this.tokens.tokens[o - 1];
            if (p.type !== f.TokenType.name)
                return !1;
            if (p.shadowsGlobal)
                return !1;
            if (o >= 2 && this.tokens.matches1AtIndex(o - 2, f.TokenType.dot))
                return !1;
            const q = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(p));
            return !!q && (this.tokens.appendCode(` = ${ q }`), this.tokens.copyToken(), !0);
        }
        processPreIncDec() {
            const o = this.tokens.currentIndex(),
                p = this.tokens.tokens[o + 1];
            if (p.type !== f.TokenType.name)
                return !1;
            if (p.shadowsGlobal)
                return !1;
            if (o + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(o + 2, f.TokenType.dot) || this.tokens.matches1AtIndex(o + 2, f.TokenType.bracketL) || this.tokens.matches1AtIndex(o + 2, f.TokenType.parenL)))
                return !1;
            const q = this.tokens.identifierNameForToken(p),
                r = this.importProcessor.resolveExportBinding(q);
            return !!r && (this.tokens.appendCode(`${ r } = `), this.tokens.copyToken(), !0);
        }
        processPostIncDec() {
            const o = this.tokens.currentIndex(),
                p = this.tokens.tokens[o],
                q = this.tokens.tokens[o + 1];
            if (p.type !== f.TokenType.name)
                return !1;
            if (p.shadowsGlobal)
                return !1;
            if (o >= 1 && this.tokens.matches1AtIndex(o - 1, f.TokenType.dot))
                return !1;
            const r = this.tokens.identifierNameForToken(p),
                s = this.importProcessor.resolveExportBinding(r);
            if (!s)
                return !1;
            const t = this.tokens.rawCodeForToken(q),
                u = this.importProcessor.getIdentifierReplacement(r) || r;
            if ('++' === t)
                this.tokens.replaceToken(`(${ u } = ${ s } = ${ u } + 1, ${ u } - 1)`);
            else {
                if ('--' !== t)
                    throw new Error(`Unexpected operator: ${ t }`);
                this.tokens.replaceToken(`(${ u } = ${ s } = ${ u } - 1, ${ u } + 1)`);
            }
            return this.tokens.removeToken(), !0;
        }
        processExportDefault() {
            let o = !0;
            if (this.tokens.matches4(f.TokenType._export, f.TokenType._default, f.TokenType._function, f.TokenType.name) || this.tokens.matches5(f.TokenType._export, f.TokenType._default, f.TokenType.name, f.TokenType._function, f.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, e.ContextualKeyword._async)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken();
                const p = this.processNamedFunction();
                this.tokens.appendCode(` exports.default = ${ p };`);
            } else if (this.tokens.matches4(f.TokenType._export, f.TokenType._default, f.TokenType._class, f.TokenType.name) || this.tokens.matches5(f.TokenType._export, f.TokenType._default, f.TokenType._abstract, f.TokenType._class, f.TokenType.name) || this.tokens.matches3(f.TokenType._export, f.TokenType._default, f.TokenType.at)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(f.TokenType._abstract) && this.tokens.removeToken();
                const p = this.rootTransformer.processNamedClass();
                this.tokens.appendCode(` exports.default = ${ p };`);
            } else if ((0, l.default)(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo))
                o = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
            else if (this.reactHotLoaderTransformer) {
                const p = this.nameManager.claimFreeName('_default');
                this.tokens.replaceToken(`let ${ p }; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${ p } =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(p);
            } else
                this.tokens.replaceToken('exports.'), this.tokens.copyToken(), this.tokens.appendCode(' =');
            o && (this.hadDefaultExport = !0);
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
            let o = this.tokens.currentIndex();
            if (o++, o++, !this.tokens.matches1AtIndex(o, f.TokenType.name))
                return !1;
            for (o++; o < this.tokens.tokens.length && this.tokens.tokens[o].isType;)
                o++;
            return !!this.tokens.matches1AtIndex(o, f.TokenType.eq);
        }
        processSimpleExportVar() {
            this.tokens.removeInitialToken(), this.tokens.copyToken();
            const o = this.tokens.identifierName();
            for (; !this.tokens.matches1(f.TokenType.eq);)
                this.rootTransformer.processToken();
            const p = this.tokens.currentToken().rhsEndIndex;
            if (null == p)
                throw new Error('Expected = token with an end index.');
            for (; this.tokens.currentIndex() < p;)
                this.rootTransformer.processToken();
            this.tokens.appendCode(`; exports.${ o } = ${ o }`);
        }
        processComplexExportVar() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const o = this.tokens.matches1(f.TokenType.braceL);
            o && this.tokens.appendCode('(');
            let p = 0;
            for (;;)
                if (this.tokens.matches1(f.TokenType.braceL) || this.tokens.matches1(f.TokenType.dollarBraceL) || this.tokens.matches1(f.TokenType.bracketL))
                    p++, this.tokens.copyToken();
                else if (this.tokens.matches1(f.TokenType.braceR) || this.tokens.matches1(f.TokenType.bracketR))
                p--, this.tokens.copyToken();
            else {
                if (0 === p && !this.tokens.matches1(f.TokenType.name) && !this.tokens.currentToken().isType)
                    break;
                if (this.tokens.matches1(f.TokenType.eq)) {
                    const q = this.tokens.currentToken().rhsEndIndex;
                    if (null == q)
                        throw new Error('Expected = token with an end index.');
                    for (; this.tokens.currentIndex() < q;)
                        this.rootTransformer.processToken();
                } else {
                    const q = this.tokens.currentToken();
                    if ((0, d.isDeclaration)(q)) {
                        const r = this.tokens.identifierName();
                        let s = this.importProcessor.getIdentifierReplacement(r);
                        if (null === s)
                            throw new Error(`Expected a replacement for ${ r } in \`export var\` syntax.`);
                        (0, d.isObjectShorthandDeclaration)(q) && (s = `${ r }: ${ s }`), this.tokens.replaceToken(s);
                    } else
                        this.rootTransformer.processToken();
                }
            }
            if (o) {
                const q = this.tokens.currentToken().rhsEndIndex;
                if (null == q)
                    throw new Error('Expected = token with an end index.');
                for (; this.tokens.currentIndex() < q;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(')');
            }
        }
        processExportFunction() {
            this.tokens.replaceToken('');
            const o = this.processNamedFunction();
            this.tokens.appendCode(` exports.${ o } = ${ o };`);
        }
        processNamedFunction() {
            if (this.tokens.matches1(f.TokenType._function))
                this.tokens.copyToken();
            else if (this.tokens.matches2(f.TokenType.name, f.TokenType._function)) {
                if (!this.tokens.matchesContextual(e.ContextualKeyword._async))
                    throw new Error('Expected async keyword in function export.');
                this.tokens.copyToken(), this.tokens.copyToken();
            }
            if (this.tokens.matches1(f.TokenType.star) && this.tokens.copyToken(), !this.tokens.matches1(f.TokenType.name))
                throw new Error('Expected identifier for exported function name.');
            const o = this.tokens.identifierName();
            if (this.tokens.copyToken(), this.tokens.currentToken().isType)
                for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;)
                    this.tokens.removeToken();
            return this.tokens.copyExpectedToken(f.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(f.TokenType.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.TokenType.braceR), o;
        }
        processExportClass() {
            this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(f.TokenType._abstract) && this.tokens.removeToken();
            const o = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.${ o } = ${ o };`);
        }
        processExportBindings() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const o = (0, j.default)(this.tokens),
                p = [];
            for (;;) {
                if (this.tokens.matches1(f.TokenType.braceR)) {
                    this.tokens.removeToken();
                    break;
                }
                const q = (0, i.default)(this.tokens);
                for (; this.tokens.currentIndex() < q.endIndex;)
                    this.tokens.removeToken();
                if (!(q.isType || !o && this.shouldElideExportedIdentifier(q.leftName))) {
                    const r = q.rightName;
                    'default' === r ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
                    const s = q.leftName,
                        t = this.importProcessor.getIdentifierReplacement(s);
                    p.push(`exports.${ r } = ${ t || s };`);
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
            if (this.tokens.matchesContextual(e.ContextualKeyword._from)) {
                this.tokens.removeToken();
                const q = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(q)), (0, k.removeMaybeImportAttributes)(this.tokens);
            } else
                this.tokens.appendCode(p.join(' '));
            this.tokens.matches1(f.TokenType.semi) && this.tokens.removeToken();
        }
        processExportStar() {
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(f.TokenType.string);)
                this.tokens.removeToken();
            const o = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(o)), (0, k.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(f.TokenType.semi) && this.tokens.removeToken();
        }
        shouldElideExportedIdentifier(o) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(o);
        }
        constructor(o, p, q, r, s, t, u, v, w, x, y, z) {
            super(), this.rootTransformer = o, this.tokens = p, this.importProcessor = q, this.nameManager = r, this.helperManager = s, this.reactHotLoaderTransformer = t, this.enableLegacyBabel5ModuleInterop = u, this.enableLegacyTypeScriptModuleInterop = v, this.isTypeScriptTransformEnabled = w, this.isFlowTransformEnabled = x, this.preserveDynamicImport = y, this.keepUnusedImports = z, _n.prototype.__init.call(this), _n.prototype.__init2.call(this), _n.prototype.__init3.call(this), this.declarationInfo = w ? (0, h.default)(p) : h.EMPTY_DECLARATION_INFO;
        }
    }
}), a.register('Xmchp', function(b, c) {
    _i(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8rqpk');

    function _e(f) {
        if (f.removeInitialToken(), f.removeToken(), f.removeToken(), f.removeToken(), f.matches1(d.TokenType.parenL))
            f.removeToken(), f.removeToken(), f.removeToken();
        else
            for (; f.matches1(d.TokenType.dot);)
                f.removeToken(), f.removeToken();
    }
}), a.register('ceITY', function(b, c) {
    _i(b.exports, 'EMPTY_DECLARATION_INFO', function() {
        return _f;
    }), _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('sK5Ca'),
        e = a('8rqpk');
    const _f = {
        typeDeclarations: new Set(),
        valueDeclarations: new Set()
    };

    function _g(h) {
        const _i = new Set(),
            j = new Set();
        for (let k = 0; k < h.tokens.length; k++) {
            const l = h.tokens[k];
            l.type === e.TokenType.name && (0, d.isTopLevelDeclaration)(l) && (l.isType ? _i.add(h.identifierNameForToken(l)) : j.add(h.identifierNameForToken(l)));
        }
        return {
            typeDeclarations: _i,
            valueDeclarations: j
        };
    }
}), a.register('MZQvS', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('DIj/a'),
        e = a('8rqpk');

    function _f(g) {
        let _h = g.currentIndex();
        for (; !g.matches1AtIndex(_h, e.TokenType.braceR);)
            _h++;
        return g.matchesContextualAtIndex(_h + 1, d.ContextualKeyword._from) && g.matches1AtIndex(_h + 2, e.TokenType.string);
    }
}), a.register('p8FVc', function(b, c) {
    _g(b.exports, 'removeMaybeImportAttributes', function() {
        return _f;
    });
    var d = a('DIj/a'),
        e = a('8rqpk');

    function _f(g) {
        (g.matches2(e.TokenType._with, e.TokenType.braceL) || g.matches2(e.TokenType.name, e.TokenType.braceL) && g.matchesContextual(d.ContextualKeyword._assert)) && (g.removeToken(), g.removeToken(), g.removeBalancedCode(), g.removeToken());
    }
}), a.register('jGA8q', function(b, c) {
    _g(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8rqpk');

    function _e(f, _g, h, i) {
        if (!f || _g)
            return !1;
        const j = h.currentToken();
        if (null == j.rhsEndIndex)
            throw new Error('Expected non-null rhsEndIndex on export token.');
        const k = j.rhsEndIndex - h.currentIndex();
        if (3 !== k && (4 !== k || !h.matches1AtIndex(j.rhsEndIndex - 1, d.TokenType.semi)))
            return !1;
        const l = h.tokenAtRelativeIndex(2);
        if (l.type !== d.TokenType.name)
            return !1;
        const m = h.identifierNameForToken(l);
        return i.typeDeclarations.has(m) && !i.valueDeclarations.has(m);
    }
}), a.register('ErImj', function(b, c) {
    _p(b.exports, 'default', function() {
        return _n;
    });
    var d = a('DIj/a'),
        e = a('8rqpk'),
        f = a('Xmchp'),
        g = a('ceITY'),
        h = a('YLJ/Q'),
        i = a('59skZ'),
        j = a('MZQvS'),
        k = a('p8FVc'),
        l = a('jGA8q'),
        m = a('pHE0P');
    class _n extends m.default {
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
            const o = this.tokens.snapshot();
            if (this.removeImportTypeBindings()) {
                for (this.tokens.restoreToSnapshot(o); !this.tokens.matches1(e.TokenType.string);)
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
            let o = !1,
                _p = !1,
                q = !1;
            if (this.tokens.matches1(e.TokenType.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(e.TokenType.comma) && this.tokens.removeToken()) : (o = !0, this.tokens.copyToken(), this.tokens.matches1(e.TokenType.comma) && (q = !0, this.tokens.removeToken()))), this.tokens.matches1(e.TokenType.star))
                this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (q && this.tokens.appendCode(','), o = !0, this.tokens.copyExpectedToken(e.TokenType.star), this.tokens.copyExpectedToken(e.TokenType.name), this.tokens.copyExpectedToken(e.TokenType.name));
            else if (this.tokens.matches1(e.TokenType.braceL)) {
                for (q && this.tokens.appendCode(','), this.tokens.copyToken(); !this.tokens.matches1(e.TokenType.braceR);) {
                    _p = !0;
                    const r = (0, h.default)(this.tokens);
                    if (r.isType || this.shouldAutomaticallyElideImportedName(r.rightName)) {
                        for (; this.tokens.currentIndex() < r.endIndex;)
                            this.tokens.removeToken();
                        this.tokens.matches1(e.TokenType.comma) && this.tokens.removeToken();
                    } else {
                        for (o = !0; this.tokens.currentIndex() < r.endIndex;)
                            this.tokens.copyToken();
                        this.tokens.matches1(e.TokenType.comma) && this.tokens.copyToken();
                    }
                }
                this.tokens.copyExpectedToken(e.TokenType.braceR);
            }
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !o : !!this.isFlowTransformEnabled && (_p && !o));
        }
        shouldAutomaticallyElideImportedName(o) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(o);
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
        shouldElideExportedName(o) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(o) && !this.declarationInfo.valueDeclarations.has(o);
        }
        constructor(o, p, q, r, s, t, u, v) {
            super(), this.tokens = o, this.nameManager = p, this.helperManager = q, this.reactHotLoaderTransformer = r, this.isTypeScriptTransformEnabled = s, this.isFlowTransformEnabled = t, this.keepUnusedImports = u, this.nonTypeIdentifiers = s && !u ? (0, i.getNonTypeIdentifiers)(o, v) : new Set(), this.declarationInfo = s && !u ? (0, g.default)(o) : g.EMPTY_DECLARATION_INFO, this.injectCreateRequireForImportRequire = Boolean(v.injectCreateRequireForImportRequire);
        }
    }
}), a.register('2YP3V', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('DIj/a'),
        e = a('8rqpk'),
        f = a('pHE0P');
    class _g extends f.default {
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
            let h = !1;
            this.tokens.matchesContextual(d.ContextualKeyword._of) && (this.tokens.removeToken(), h = this.tokens.matchesContextual(d.ContextualKeyword._symbol), this.tokens.removeToken());
            const _i = this.tokens.matches3(e.TokenType.braceL, e.TokenType.name, e.TokenType.eq);
            this.tokens.appendCode(' = require("flow-enums-runtime")');
            const j = !h && !_i;
            for (this.tokens.replaceTokenTrimmingLeftWhitespace(j ? '.Mirrored([' : '({'); !this.tokens.matches1(e.TokenType.braceR);) {
                if (this.tokens.matches1(e.TokenType.ellipsis)) {
                    this.tokens.removeToken();
                    break;
                }
                this.processEnumElement(h, _i), this.tokens.matches1(e.TokenType.comma) && this.tokens.copyToken();
            }
            this.tokens.replaceToken(j ? ']);' : '});');
        }
        processEnumElement(h, i) {
            if (h) {
                const j = this.tokens.identifierName();
                this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${ j }")`);
            } else
                i ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(':'), this.tokens.copyToken()) : this.tokens.replaceToken(`"${ this.tokens.identifierName() }"`);
        }
        constructor(h, i, j) {
            super(), this.rootTransformer = h, this.tokens = i, this.isImportsTransformEnabled = j;
        }
    }
}), a.register('24ynG', function(b, c) {
    _j(b.exports, 'default', function() {
        return _h;
    });
    var d = a('8rqpk'),
        e = a('pHE0P');
    const f = 'jest',
        g = [
            'mock',
            'unmock',
            'enableAutomock',
            'disableAutomock'
        ];
    class _h extends e.default {
        __init() {
            this.hoistedFunctionNames = [];
        }
        process() {
            return !(0 !== this.tokens.currentToken().scopeDepth || !this.tokens.matches4(d.TokenType.name, d.TokenType.dot, d.TokenType.name, d.TokenType.parenL) || this.tokens.identifierName() !== f) && (! function(i) {
                let _j, k = i[0],
                    l = 1;
                for (; l < i.length;) {
                    const m = i[l],
                        n = i[l + 1];
                    if (l += 2, ('optionalAccess' === m || 'optionalCall' === m) && null == k)
                        return;
                    'access' === m || 'optionalAccess' === m ? (_j = k, k = n(k)) : 'call' !== m && 'optionalCall' !== m || (k = n((...i) => k.call(_j, ...i)), _j = void 0);
                }
                return k;
            }([
                this,
                'access',
                b => b.importProcessor,
                'optionalAccess',
                b => b.getGlobalNames,
                'call',
                b => b(),
                'optionalAccess',
                b => b.has,
                'call',
                b => b(f)
            ]) && this.extractHoistedCalls());
        }
        getHoistedCode() {
            return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map(b => `${ b }();`).join('') : '';
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
        constructor(i, j, k, l) {
            super(), this.rootTransformer = i, this.tokens = j, this.nameManager = k, this.importProcessor = l, _h.prototype.__init.call(this);
        }
    }
}), a.register('Dfqy1', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('8rqpk'),
        e = a('pHE0P');
    class _f extends e.default {
        process() {
            if (this.tokens.matches1(d.TokenType.num)) {
                const g = this.tokens.currentTokenCode();
                if (g.includes('_'))
                    return this.tokens.replaceToken(g.replace(/_/g, '')), !0;
            }
            return !1;
        }
        constructor(g) {
            super(), this.tokens = g;
        }
    }
}), a.register('NsFFi', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('8rqpk'),
        e = a('pHE0P');
    class _f extends e.default {
        process() {
            return !!this.tokens.matches2(d.TokenType._catch, d.TokenType.braceL) && (this.tokens.copyToken(), this.tokens.appendCode(` (${ this.nameManager.claimFreeName('e') })`), !0);
        }
        constructor(g, _h) {
            super(), this.tokens = g, this.nameManager = _h;
        }
    }
}), a.register('tTDac', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('8rqpk'),
        e = a('pHE0P');
    class _f extends e.default {
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
                const _h = this.nameManager.claimFreeName('_');
                let i;
                if (i = g > 0 && this.tokens.matches1AtIndex(g - 1, d.TokenType._delete) && this.isLastSubscriptInChain() ? `${ _h } => delete ${ _h }` : `${ _h } => ${ _h }`, this.tokens.tokens[g].isAsyncOperation && (i = `async ${ i }`), this.tokens.matches2(d.TokenType.questionDot, d.TokenType.parenL) || this.tokens.matches2(d.TokenType.questionDot, d.TokenType.lessThan))
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
            let g = 0;
            for (let h = this.tokens.currentIndex() + 1;; h++) {
                if (h >= this.tokens.tokens.length)
                    throw new Error('Reached the end of the code while finding the end of the access chain.');
                if (this.tokens.tokens[h].isOptionalChainStart ? g++ : this.tokens.tokens[h].isOptionalChainEnd && g--, g < 0)
                    return !0;
                if (0 === g && null != this.tokens.tokens[h].subscriptStartIndex)
                    return !1;
            }
        }
        justSkippedSuper() {
            let g = 0,
                h = this.tokens.currentIndex() - 1;
            for (;;) {
                if (h < 0)
                    throw new Error('Reached the start of the code while finding the start of the access chain.');
                if (this.tokens.tokens[h].isOptionalChainStart ? g-- : this.tokens.tokens[h].isOptionalChainEnd && g++, g < 0)
                    return !1;
                if (0 === g && null != this.tokens.tokens[h].subscriptStartIndex)
                    return this.tokens.tokens[h - 1].type === d.TokenType._super;
                h--;
            }
        }
        constructor(g, h) {
            super(), this.tokens = g, this.nameManager = h;
        }
    }
}), a.register('gu/dj', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('sK5Ca'),
        e = a('8rqpk'),
        f = a('pHE0P');
    class _g extends f.default {
        process() {
            const h = this.tokens.currentIndex();
            if ('createReactClass' === this.tokens.identifierName()) {
                const _i = this.importProcessor && this.importProcessor.getIdentifierReplacement('createReactClass');
                return _i ? this.tokens.replaceToken(`(0, ${ _i })`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(h), !0;
            }
            if (this.tokens.matches3(e.TokenType.name, e.TokenType.dot, e.TokenType.name) && 'React' === this.tokens.identifierName() && 'createClass' === this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2)) {
                const i = this.importProcessor && this.importProcessor.getIdentifierReplacement('React') || 'React';
                return i ? (this.tokens.replaceToken(i), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(h), !0;
            }
            return !1;
        }
        tryProcessCreateClassCall(h) {
            const i = this.findDisplayName(h);
            i && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(e.TokenType.parenL), this.tokens.copyExpectedToken(e.TokenType.braceL), this.tokens.appendCode(`displayName: '${ i }',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(e.TokenType.braceR), this.tokens.copyExpectedToken(e.TokenType.parenR));
        }
        findDisplayName(h) {
            return h < 2 ? null : this.tokens.matches2AtIndex(h - 2, e.TokenType.name, e.TokenType.eq) || h >= 2 && this.tokens.tokens[h - 2].identifierRole === d.IdentifierRole.ObjectKey ? this.tokens.identifierNameAtIndex(h - 2) : this.tokens.matches2AtIndex(h - 2, e.TokenType._export, e.TokenType._default) ? this.getDisplayNameFromFilename() : null;
        }
        getDisplayNameFromFilename() {
            const h = (this.options.filePath || 'unknown').split('/'),
                i = h[h.length - 1],
                j = i.lastIndexOf('.'),
                k = -1 === j ? i : i.slice(0, j);
            return 'index' === k && h[h.length - 2] ? h[h.length - 2] : k;
        }
        classNeedsDisplayName() {
            let h = this.tokens.currentIndex();
            if (!this.tokens.matches2(e.TokenType.parenL, e.TokenType.braceL))
                return !1;
            const i = h + 1,
                j = this.tokens.tokens[i].contextId;
            if (null == j)
                throw new Error('Expected non-null context ID on object open-brace.');
            for (; h < this.tokens.tokens.length; h++) {
                const k = this.tokens.tokens[h];
                if (k.type === e.TokenType.braceR && k.contextId === j) {
                    h++;
                    break;
                }
                if ('displayName' === this.tokens.identifierNameAtIndex(h) && this.tokens.tokens[h].identifierRole === d.IdentifierRole.ObjectKey && k.contextId === j)
                    return !1;
            }
            if (h === this.tokens.tokens.length)
                throw new Error('Unexpected end of input when processing React class.');
            return this.tokens.matches1AtIndex(h, e.TokenType.parenR) || this.tokens.matches2AtIndex(h, e.TokenType.comma, e.TokenType.parenR);
        }
        constructor(h, i, j, k) {
            super(), this.rootTransformer = h, this.tokens = i, this.importProcessor = j, this.options = k;
        }
    }
}), a.register('WtcDc', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('sK5Ca'),
        e = a('pHE0P');
    class _f extends e.default {
        __init() {
            this.extractedDefaultExportName = null;
        }
        setExtractedDefaultExportName(g) {
            this.extractedDefaultExportName = g;
        }
        getPrefixCode() {
            return '\n      (function () {\n        var enterModule = require(\'react-hot-loader\').enterModule;\n        enterModule && enterModule(module);\n      })();'.replace(/\s+/g, ' ').trim();
        }
        getSuffixCode() {
            const g = new Set();
            for (const _h of this.tokens.tokens)
                !_h.isType && (0, d.isTopLevelDeclaration)(_h) && _h.identifierRole !== d.IdentifierRole.ImportDeclaration && g.add(this.tokens.identifierNameForToken(_h));
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
        constructor(g, h) {
            super(), this.tokens = g, this.filePath = h, _f.prototype.__init.call(this);
        }
    }
}), a.register('/eTlT', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('8rqpk'),
        e = a('SE378'),
        f = a('pHE0P');
    class _g extends f.default {
        process() {
            return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(d.TokenType._public) || this.tokens.matches1(d.TokenType._protected) || this.tokens.matches1(d.TokenType._private) || this.tokens.matches1(d.TokenType._abstract) || this.tokens.matches1(d.TokenType._readonly) || this.tokens.matches1(d.TokenType._override) || this.tokens.matches1(d.TokenType.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(d.TokenType._enum) || this.tokens.matches2(d.TokenType._const, d.TokenType._enum) ? (this.processEnum(), !0) : !(!this.tokens.matches2(d.TokenType._export, d.TokenType._enum) && !this.tokens.matches3(d.TokenType._export, d.TokenType._const, d.TokenType._enum)) && (this.processEnum(!0), !0));
        }
        processEnum(h = !1) {
            for (this.tokens.removeInitialToken(); this.tokens.matches1(d.TokenType._const) || this.tokens.matches1(d.TokenType._enum);)
                this.tokens.removeToken();
            const _i = this.tokens.identifierName();
            this.tokens.removeToken(), h && !this.isImportsTransformEnabled && this.tokens.appendCode('export '), this.tokens.appendCode(`var ${ _i }; (function (${ _i })`), this.tokens.copyExpectedToken(d.TokenType.braceL), this.processEnumBody(_i), this.tokens.copyExpectedToken(d.TokenType.braceR), h && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${ _i } || (exports.${ _i } = ${ _i } = {}));`) : this.tokens.appendCode(`)(${ _i } || (${ _i } = {}));`);
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
        processStringLiteralEnumMember(h, i, j) {
            null != j ? (this.tokens.appendCode(`const ${ j }`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${ h }[${ i }] = ${ j };`)) : (this.tokens.appendCode(`${ h }[${ i }]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(';'));
        }
        processExplicitValueEnumMember(h, i, j) {
            const k = this.tokens.currentToken().rhsEndIndex;
            if (null == k)
                throw new Error('Expected rhsEndIndex on enum assign.');
            if (null != j) {
                for (this.tokens.appendCode(`const ${ j }`), this.tokens.copyToken(); this.tokens.currentIndex() < k;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(`; ${ h }[${ h }[${ i }] = ${ j }] = ${ i };`);
            } else {
                for (this.tokens.appendCode(`${ h }[${ h }[${ i }]`), this.tokens.copyToken(); this.tokens.currentIndex() < k;)
                    this.rootTransformer.processToken();
                this.tokens.appendCode(`] = ${ i };`);
            }
        }
        processImplicitValueEnumMember(h, i, j, k) {
            let l = null != k ? `${ k } + 1` : '0';
            null != j && (this.tokens.appendCode(`const ${ j } = ${ l }; `), l = j), this.tokens.appendCode(`${ h }[${ h }[${ i }] = ${ l }] = ${ i };`);
        }
        constructor(h, i, j) {
            super(), this.rootTransformer = h, this.tokens = i, this.isImportsTransformEnabled = j;
        }
    }
}), a.register('SE378', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('c4XAS');
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

    function _f(g) {
        if (0 === g.length)
            return !1;
        if (!d.IS_IDENTIFIER_START[g.charCodeAt(0)])
            return !1;
        for (let _h = 1; _h < g.length; _h++)
            if (!d.IS_IDENTIFIER_CHAR[g.charCodeAt(_h)])
                return !1;
        return !e.has(g);
    }
}), a.register('rHPVb', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('v2fy+'),
        e = a('8rqpk');

    function _f(g, _h) {
        if (0 === _h.length)
            return '';
        const i = Object.keys(_h[0]).filter(g => 'type' !== g && 'value' !== g && 'start' !== g && 'end' !== g && 'loc' !== g),
            j = Object.keys(_h[0].type).filter(g => 'label' !== g && 'keyword' !== g),
            k = [
                'Location',
                'Label',
                'Raw',
                ...i,
                ...j
            ],
            l = new(0, d.default)(g),
            m = [
                k,
                ..._h.map(function(n) {
                    const o = g.slice(n.start, n.end);
                    return [
                        (k = n.start, l = n.end, `${ _q(k) }-${ _q(l) }`),
                        (0, e.formatTokenType)(n.type),
                        _f(String(o), 14),
                        ...i.map(g => _q(n[g], g)),
                        ...j.map(g => _q(n.type[g], g))
                    ];
                    var p, q;
                })
            ],
            n = k.map(() => 0);
        for (const o of m)
            for (let p = 0; p < o.length; p++)
                n[p] = Math.max(n[p], o[p].length);
        return m.map(o => o.map((o, p) => o.padEnd(n[p])).join(' ')).join('\n');

        function _q(r, s) {
            return !0 === r ? s : !1 === r || null === r ? '' : String(r);
        }

        function _q(r) {
            const s = l.locationForIndex(r);
            return s ? `${ s.line + 1 }:${ s.column + 1 }` : 'Unknown';
        }
    }

    function _f(g, h) {
        return g.length > h ? `${ g.slice(0, h - 3) }...` : g;
    }
}), a.register('v2fy+', function(b, c) {
    var d;
    _i(b.exports, 'default', function() {
        return d;
    }, function(e) {
        return d = e;
    });
    var e = '\n',
        f = function() {
            function g(h) {
                this.string = h;
                for (var _i = [0], j = 0; j < h.length;)
                    switch (h[j]) {
                        case e:
                            j += e.length, _i.push(j);
                            break;
                        case '\r':
                            h[j += '\r'.length] === e && (j += e.length), _i.push(j);
                            break;
                        default:
                            j++;
                    }
                this.offsets = _i;
            }
            return b.prototype.locationForIndex = function(g) {
                if (g < 0 || g > this.string.length)
                    return null;
                for (var h = 0, i = this.offsets; i[h + 1] <= g;)
                    h++;
                return {
                    line: h,
                    column: g - i[h]
                };
            }, b.prototype.indexForLocation = function(g) {
                var h = g.line,
                    i = g.column;
                return h < 0 || h >= this.offsets.length || i < 0 || i > this.lengthOfLine(h) ? null : this.offsets[h] + i;
            }, b.prototype.lengthOfLine = function(g) {
                var h = this.offsets[g];
                return (g === this.offsets.length - 1 ? this.string.length : this.offsets[g + 1]) - h;
            }, b;
        }();
    d = f;
}), a.register('5GWBZ', function(b, c) {
    _h(b.exports, 'default', function() {
        return _f;
    });
    var d = a('8rqpk'),
        e = a('YLJ/Q');

    function _f(g) {
        const _h = new Set();
        for (let i = 0; i < g.tokens.length; i++)
            g.matches1AtIndex(i, d.TokenType._import) && !g.matches3AtIndex(i, d.TokenType._import, d.TokenType.name, d.TokenType.eq) && _f(g, i, _h);
        return _h;
    }

    function _f(g, h, i) {
        h++, g.matches1AtIndex(h, d.TokenType.parenL) || (g.matches1AtIndex(h, d.TokenType.name) && (i.add(g.identifierNameAtIndex(h)), h++, g.matches1AtIndex(h, d.TokenType.comma) && h++), g.matches1AtIndex(h, d.TokenType.star) && (h += 2, i.add(g.identifierNameAtIndex(h)), h++), g.matches1AtIndex(h, d.TokenType.braceL) && function(j, k, l) {
            for (;;) {
                if (j.matches1AtIndex(k, d.TokenType.braceR))
                    return;
                const m = (0, e.default)(j, k);
                if (k = m.endIndex, m.isType || l.add(m.rightName), j.matches2AtIndex(k, d.TokenType.comma, d.TokenType.braceR))
                    return;
                if (j.matches1AtIndex(k, d.TokenType.braceR))
                    return;
                if (!j.matches1AtIndex(k, d.TokenType.comma))
                    throw new Error(`Unexpected token: ${ JSON.stringify(j.tokens[k]) }`);
                k++;
            }
        }(g, ++h, i));
    }
}), a.register('U9mPz', function(b, c) {
    _h(b.exports, 'CallAction', function() {
        return _f;
    });
    var d = a('iWivW'),
        e = a('D5xLI');
    const _f = (g = '') => {
        var _h, i;
        const j = null === (_h = d.default.me.deviceUI.current) || void 0 === _h ? void 0 : _h.deviceId;
        if (!j)
            return;
        const k = (0, e.default)().worldManager.devices.getDeviceById(j);
        k && (null === (i = k.callAction) || void 0 === i || i.call(k, g));
    };
}), a.register('utXDw', function(b, c) {
    t(b.exports, 'usePropertyValue', function() {
        return _g;
    });
    var d = a('iWivW'),
        e = a('YuT/D'),
        f = a('LEQ5w');
    const _g = t => {
        var h;
        const [i, j] = _l(f).useState(null !== (h = d.default.me.properties.get(t)) && void 0 !== h ? h : '');
        return (0, f.useEffect)(() => (0, e.reaction)(() => d.default.me.properties.get(t), _l => {
            j(_l + '');
        }), [t]), i;
    };
}), a.register('JWLDh', function(b, c) {
    t(b.exports, 'useItemAmount', function() {
        return _g;
    });
    var d = a('iWivW'),
        e = a('YuT/D'),
        f = a('LEQ5w');
    const _g = t => {
        var h, i;
        const [j, k] = _l(f).useState(null !== (i = null === (h = d.default.me.inventory.slots.get(t)) || void 0 === h ? void 0 : h.amount) && void 0 !== i ? i : 0);
        return (0, f.useEffect)(() => {
            const _l = (0, e.reaction)(() => {
                var m;
                return null === (m = d.default.me.inventory.slots.get(t)) || void 0 === m ? void 0 : m.amount;
            }, _l => {
                k(_l);
            });
            return _l;
        }, [t]), j;
    };
});