function e(e) {
    return e && e.__esModule ? e.default : e
}

function t(e, t, n, o) {
    Object.defineProperty(e, t, {
        get: n,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("i3GMX", (function(o, r) {
    t(o.exports, "LiveProvider", (function() {
        return R
    })), t(o.exports, "LiveEditor", (function() {
        return N
    })), t(o.exports, "LiveError", (function() {
        return L
    })), t(o.exports, "LivePreview", (function() {
        return F
    }));
    var s = n("1G53J"),
        a = n("fywoC"),
        i = n("d3EZw"),
        c = n("hxEiv"),
        p = (n("fywoC"), n("fywoC"), n("fywoC"), n("2nfTP")),
        l = (n("fywoC"), n("hxEiv"), n("hxEiv"), n("fywoC"), n("hxEiv"), n("fywoC"), n("hxEiv"), a = n("fywoC"), n("hxEiv"), c = n("hxEiv"), Object.defineProperty),
        u = Object.defineProperties,
        h = Object.getOwnPropertyDescriptors,
        d = Object.getOwnPropertySymbols,
        T = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        f = (e, t, n) => t in e ? l(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        k = (e, t) => {
            for (var n in t || (t = {})) T.call(t, n) && f(e, n, t[n]);
            if (d)
                for (var n of d(t)) y.call(t, n) && f(e, n, t[n]);
            return e
        },
        m = (e, t) => u(e, h(t)),
        g = e => {
            const {
                tabMode: t = "indentation"
            } = e, n = (0, a.useRef)(null), [o, r] = (0, a.useState)(e.code || ""), {
                theme: p
            } = e;
            return (0, a.useEffect)((() => {
                r(e.code)
            }), [e.code]), (0, i.useEditable)(n, (e => r(e.slice(0, -1))), {
                disabled: e.disabled,
                indentation: "indentation" === t ? 2 : void 0
            }), (0, a.useEffect)((() => {
                e.onChange && e.onChange(o)
            }), [o]), (0, c.jsx)("div", {
                className: e.className,
                style: e.style,
                children: (0, c.jsx)(s.Highlight, {
                    code: o,
                    theme: e.theme || s.themes.nightOwl,
                    language: e.language,
                    children: ({
                        className: e,
                        tokens: t,
                        getLineProps: o,
                        getTokenProps: r,
                        style: s
                    }) => (0, c.jsx)("pre", {
                        className: e,
                        style: k(k({
                            margin: 0,
                            outline: "none",
                            padding: 10,
                            fontFamily: "inherit"
                        }, p && "object" == typeof p.plain ? p.plain : {}), s),
                        ref: n,
                        spellCheck: "false",
                        children: t.map(((e, t) => (0, c.jsxs)("span", m(k({}, o({
                            line: e
                        })), {
                            children: [e.filter((e => !e.empty)).map(((e, t) => (0, c.jsx)("span", k({}, r({
                                token: e
                            })), `token-${t}`))), "\n"]
                        }), `line-${t}`)))
                    })
                })
            })
        },
        x = (0, a.createContext)({}),
        b = ["jsx", "imports"];

    function C(e = {}) {
        const t = Array.isArray(e.transforms) ? e.transforms.filter(Boolean) : b;
        return e => (0, p.transform)(e, {
            transforms: t
        }).code
    }
    var _ = (t, n) => class extends a.Component {
            componentDidCatch(e) {
                n(e)
            }
            render() {
                return "function" == typeof t ? (0, c.jsx)(t, {}) : e(a).isValidElement(t) ? t : null
            }
        },
        w = (e, t) => {
            const n = Object.keys(t),
                o = n.map((e => t[e]));
            return new Function(...n, e)(...o)
        };
    var v = 'const _jsxFileName = "";',
        I = e => e.trim().replace(/;$/, ""),
        E = e => e.replace(v, "").trim(),
        S = e => v + e,
        A = e => `return (${e})`;
    var R = function({
        children: t,
        code: n = "",
        language: o = "tsx",
        theme: r,
        enableTypeScript: s = !0,
        disabled: i = !1,
        scope: p,
        transformCode: l,
        noInline: u = !1
    }) {
        const [h, d] = (0, a.useState)({
            error: void 0,
            element: void 0
        });

        function T(t) {
            return n = this, o = null, r = function*() {
                const n = e => {
                    d({
                        error: e.toString(),
                        element: void 0
                    })
                };
                try {
                    const o = l ? l(t) : t;
                    try {
                        const t = yield Promise.resolve(o), r = e => d({
                            error: void 0,
                            element: e
                        });
                        if ("string" != typeof t) throw new Error("Code failed to transform");
                        const i = {
                            code: t,
                            scope: p,
                            enableTypeScript: s
                        };
                        u ? (d({
                            error: void 0,
                            element: null
                        }), (({
                            code: t = "",
                            scope: n = {},
                            enableTypeScript: o = !0
                        }, r, s) => {
                            if (!/render\s*\(/.test(t)) return s(new SyntaxError("No-Inline evaluations must call `render`."));
                            const i = ["jsx", "imports"];
                            o && i.splice(1, 0, "typescript"), w(C({
                                transforms: i
                            })(t), m(k({
                                React: e(a)
                            }, n), {
                                render: e => {
                                    void 0 === e ? s(new SyntaxError("`render` must be called with valid JSX.")) : r(_(e, s))
                                }
                            }))
                        })(i, r, n)) : r((({
                            code: t = "",
                            scope: n = {},
                            enableTypeScript: o = !0
                        }, r) => {
                            const s = ["jsx"];
                            o && s.push("typescript");
                            const i = function(...e) {
                                return e.reduce(((e, t) => (...n) => e(t(...n))))
                            }(S, C({
                                transforms: ["imports"]
                            }), E, I, C({
                                transforms: s
                            }), A, I)(t);
                            return _(w(i, k({
                                React: e(a)
                            }, n)), r)
                        })(i, n))
                    } catch (e) {
                        return n(e)
                    }
                } catch (e) {
                    return n(e), Promise.resolve()
                }
            }, new Promise(((e, t) => {
                var s = e => {
                        try {
                            i(r.next(e))
                        } catch (e) {
                            t(e)
                        }
                    },
                    a = e => {
                        try {
                            i(r.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    },
                    i = t => t.done ? e(t.value) : Promise.resolve(t.value).then(s, a);
                i((r = r.apply(n, o)).next())
            }));
            var n, o, r
        }
        const y = e => d({
            error: e.toString()
        });
        return (0, a.useEffect)((() => {
            T(n).catch(y)
        }), [n, p, u, l]), (0, c.jsx)(x.Provider, {
            value: m(k({}, h), {
                code: n,
                language: o,
                theme: r,
                disabled: i,
                onError: y,
                onChange: e => {
                    T(e).catch(y)
                }
            }),
            children: t
        })
    };

    function N(e) {
        const {
            code: t,
            language: n,
            theme: o,
            disabled: r,
            onChange: s
        } = (0, a.useContext)(x);
        return (0, c.jsx)(g, k({
            theme: o,
            code: t,
            language: n,
            disabled: r,
            onChange: s
        }, e))
    }

    function L(e) {
        const {
            error: t
        } = (0, a.useContext)(x);
        return t ? (0, c.jsx)("pre", m(k({}, e), {
            children: t
        })) : null
    }
    var F = function(e) {
        var t = e,
            {
                Component: n = "div"
            } = t,
            o = ((e, t) => {
                var n = {};
                for (var o in e) T.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && d)
                    for (var o of d(e)) t.indexOf(o) < 0 && y.call(e, o) && (n[o] = e[o]);
                return n
            })(t, ["Component"]);
        const {
            element: r
        } = (0, a.useContext)(x);
        return (0, c.jsx)(n, m(k({}, o), {
            children: r ? (0, c.jsx)(r, {}) : null
        }))
    }
})), n.register("1G53J", (function(e, o) {
    t(e.exports, "themes", (function() {
        return A
    })), t(e.exports, "Highlight", (function() {
        return re
    }));
    var r, s, a, i, c, p, l, u = n("fywoC"),
        h = (n("fywoC"), n("fywoC"), n("754Yc")),
        d = (n("fywoC"), h = n("754Yc"), u = n("fywoC"), Object.create),
        T = Object.defineProperty,
        y = Object.defineProperties,
        f = Object.getOwnPropertyDescriptor,
        k = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertyNames,
        g = Object.getOwnPropertySymbols,
        x = Object.getPrototypeOf,
        b = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable,
        _ = (e, t, n) => t in e ? T(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        w = (e, t) => {
            for (var n in t || (t = {})) b.call(t, n) && _(e, n, t[n]);
            if (g)
                for (var n of g(t)) C.call(t, n) && _(e, n, t[n]);
            return e
        },
        v = (e, t) => y(e, k(t)),
        I = (e, t) => {
            var n = {};
            for (var o in e) b.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && g)
                for (var o of g(e)) t.indexOf(o) < 0 && C.call(e, o) && (n[o] = e[o]);
            return n
        },
        E = (r = {
            "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, t) {
                var n = function() {
                    var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                        t = 0,
                        n = {},
                        o = {
                            util: {
                                encode: function e(t) {
                                    return t instanceof r ? new r(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                                },
                                type: function(e) {
                                    return Object.prototype.toString.call(e).slice(8, -1)
                                },
                                objId: function(e) {
                                    return e.__id || Object.defineProperty(e, "__id", {
                                        value: ++t
                                    }), e.__id
                                },
                                clone: function e(t, n) {
                                    var r, s;
                                    switch (n = n || {}, o.util.type(t)) {
                                        case "Object":
                                            if (s = o.util.objId(t), n[s]) return n[s];
                                            for (var a in r = {}, n[s] = r, t) t.hasOwnProperty(a) && (r[a] = e(t[a], n));
                                            return r;
                                        case "Array":
                                            return s = o.util.objId(t), n[s] ? n[s] : (r = [], n[s] = r, t.forEach((function(t, o) {
                                                r[o] = e(t, n)
                                            })), r);
                                        default:
                                            return t
                                    }
                                },
                                getLanguage: function(t) {
                                    for (; t;) {
                                        var n = e.exec(t.className);
                                        if (n) return n[1].toLowerCase();
                                        t = t.parentElement
                                    }
                                    return "none"
                                },
                                setLanguage: function(t, n) {
                                    t.className = t.className.replace(RegExp(e, "gi"), ""), t.classList.add("language-" + n)
                                },
                                isActive: function(e, t, n) {
                                    for (var o = "no-" + t; e;) {
                                        var r = e.classList;
                                        if (r.contains(t)) return !0;
                                        if (r.contains(o)) return !1;
                                        e = e.parentElement
                                    }
                                    return !!n
                                }
                            },
                            languages: {
                                plain: n,
                                plaintext: n,
                                text: n,
                                txt: n,
                                extend: function(e, t) {
                                    var n = o.util.clone(o.languages[e]);
                                    for (var r in t) n[r] = t[r];
                                    return n
                                },
                                insertBefore: function(e, t, n, r) {
                                    var s = (r = r || o.languages)[e],
                                        a = {};
                                    for (var i in s)
                                        if (s.hasOwnProperty(i)) {
                                            if (i == t)
                                                for (var c in n) n.hasOwnProperty(c) && (a[c] = n[c]);
                                            n.hasOwnProperty(i) || (a[i] = s[i])
                                        } var p = r[e];
                                    return r[e] = a, o.languages.DFS(o.languages, (function(t, n) {
                                        n === p && t != e && (this[t] = a)
                                    })), a
                                },
                                DFS: function e(t, n, r, s) {
                                    s = s || {};
                                    var a = o.util.objId;
                                    for (var i in t)
                                        if (t.hasOwnProperty(i)) {
                                            n.call(t, i, t[i], r || i);
                                            var c = t[i],
                                                p = o.util.type(c);
                                            "Object" !== p || s[a(c)] ? "Array" !== p || s[a(c)] || (s[a(c)] = !0, e(c, n, i, s)) : (s[a(c)] = !0, e(c, n, null, s))
                                        }
                                }
                            },
                            plugins: {},
                            highlight: function(e, t, n) {
                                var s = {
                                    code: e,
                                    grammar: t,
                                    language: n
                                };
                                if (o.hooks.run("before-tokenize", s), !s.grammar) throw new Error('The language "' + s.language + '" has no grammar.');
                                return s.tokens = o.tokenize(s.code, s.grammar), o.hooks.run("after-tokenize", s), r.stringify(o.util.encode(s.tokens), s.language)
                            },
                            tokenize: function(e, t) {
                                var n = t.rest;
                                if (n) {
                                    for (var o in n) t[o] = n[o];
                                    delete t.rest
                                }
                                var r = new i;
                                return c(r, r.head, e), a(e, r, t, r.head, 0),
                                    function(e) {
                                        for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
                                        return t
                                    }(r)
                            },
                            hooks: {
                                all: {},
                                add: function(e, t) {
                                    var n = o.hooks.all;
                                    n[e] = n[e] || [], n[e].push(t)
                                },
                                run: function(e, t) {
                                    var n = o.hooks.all[e];
                                    if (n && n.length)
                                        for (var r, s = 0; r = n[s++];) r(t)
                                }
                            },
                            Token: r
                        };

                    function r(e, t, n, o) {
                        this.type = e, this.content = t, this.alias = n, this.length = 0 | (o || "").length
                    }

                    function s(e, t, n, o) {
                        e.lastIndex = t;
                        var r = e.exec(n);
                        if (r && o && r[1]) {
                            var s = r[1].length;
                            r.index += s, r[0] = r[0].slice(s)
                        }
                        return r
                    }

                    function a(e, t, n, i, l, u) {
                        for (var h in n)
                            if (n.hasOwnProperty(h) && n[h]) {
                                var d = n[h];
                                d = Array.isArray(d) ? d : [d];
                                for (var T = 0; T < d.length; ++T) {
                                    if (u && u.cause == h + "," + T) return;
                                    var y = d[T],
                                        f = y.inside,
                                        k = !!y.lookbehind,
                                        m = !!y.greedy,
                                        g = y.alias;
                                    if (m && !y.pattern.global) {
                                        var x = y.pattern.toString().match(/[imsuy]*$/)[0];
                                        y.pattern = RegExp(y.pattern.source, x + "g")
                                    }
                                    for (var b = y.pattern || y, C = i.next, _ = l; C !== t.tail && !(u && _ >= u.reach); _ += C.value.length, C = C.next) {
                                        var w = C.value;
                                        if (t.length > e.length) return;
                                        if (!(w instanceof r)) {
                                            var v, I = 1;
                                            if (m) {
                                                if (!(v = s(b, _, e, k)) || v.index >= e.length) break;
                                                var E = v.index,
                                                    S = v.index + v[0].length,
                                                    A = _;
                                                for (A += C.value.length; E >= A;) A += (C = C.next).value.length;
                                                if (_ = A -= C.value.length, C.value instanceof r) continue;
                                                for (var R = C; R !== t.tail && (A < S || "string" == typeof R.value); R = R.next) I++, A += R.value.length;
                                                I--, w = e.slice(_, A), v.index -= _
                                            } else if (!(v = s(b, 0, w, k))) continue;
                                            E = v.index;
                                            var N = v[0],
                                                L = w.slice(0, E),
                                                F = w.slice(E + N.length),
                                                P = _ + w.length;
                                            u && P > u.reach && (u.reach = P);
                                            var O = C.prev;
                                            if (L && (O = c(t, O, L), _ += L.length), p(t, O, I), C = c(t, O, new r(h, f ? o.tokenize(N, f) : N, g, N)), F && c(t, C, F), I > 1) {
                                                var D = {
                                                    cause: h + "," + T,
                                                    reach: P
                                                };
                                                a(e, t, n, C.prev, _, D), u && D.reach > u.reach && (u.reach = D.reach)
                                            }
                                        }
                                    }
                                }
                            }
                    }

                    function i() {
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
                        var o = t.next,
                            r = {
                                value: n,
                                prev: t,
                                next: o
                            };
                        return t.next = r, o.prev = r, e.length++, r
                    }

                    function p(e, t, n) {
                        for (var o = t.next, r = 0; r < n && o !== e.tail; r++) o = o.next;
                        t.next = o, o.prev = t, e.length -= r
                    }
                    return r.stringify = function e(t, n) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) {
                            var r = "";
                            return t.forEach((function(t) {
                                r += e(t, n)
                            })), r
                        }
                        var s = {
                                type: t.type,
                                content: e(t.content, n),
                                tag: "span",
                                classes: ["token", t.type],
                                attributes: {},
                                language: n
                            },
                            a = t.alias;
                        a && (Array.isArray(a) ? Array.prototype.push.apply(s.classes, a) : s.classes.push(a)), o.hooks.run("wrap", s);
                        var i = "";
                        for (var c in s.attributes) i += " " + c + '="' + (s.attributes[c] || "").replace(/"/g, "&quot;") + '"';
                        return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + i + ">" + s.content + "</" + s.tag + ">"
                    }, o
                }();
                t.exports = n, n.default = n
            }
        }, function() {
            return s || (0, r[m(r)[0]])((s = {
                exports: {}
            }).exports, s), s.exports
        }),
        S = ((e, t, n) => (n = null != e ? d(x(e)) : {}, ((e, t, n, o) => {
            if (t && "object" == typeof t || "function" == typeof t)
                for (let r of m(t)) b.call(e, r) || r === n || T(e, r, {
                    get: () => t[r],
                    enumerable: !(o = f(t, r)) || o.enumerable
                });
            return e
        })(!t && e && e.__esModule ? n : T(n, "default", {
            value: e,
            enumerable: !0
        }), e)))(E());
    S.languages.markup = {
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
                            }, {
                                pattern: /^(\s*)["']|["']$/,
                                lookbehind: !0
                            }]
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
        }, S.languages.markup.tag.inside["attr-value"].inside.entity = S.languages.markup.entity, S.languages.markup.doctype.inside["internal-subset"].inside = S.languages.markup, S.hooks.add("wrap", (function(e) {
            "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
        })), Object.defineProperty(S.languages.markup.tag, "addInlined", {
            value: function(e, t) {
                var n;
                (t = ((n = ((n = {})["language-" + t] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: S.languages[t]
                }, n.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                    "included-cdata": {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: n
                    }
                }))["language-" + t] = {
                    pattern: /[\s\S]+/,
                    inside: S.languages[t]
                }, {}))[e] = {
                    pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                        return e
                    })), "i"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: n
                }, S.languages.insertBefore("markup", "cdata", t)
            }
        }), Object.defineProperty(S.languages.markup.tag, "addAttribute", {
            value: function(e, t) {
                S.languages.markup.tag.inside["special-attr"].push({
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
                                    inside: S.languages[t]
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
        }), S.languages.html = S.languages.markup, S.languages.mathml = S.languages.markup, S.languages.svg = S.languages.markup, S.languages.xml = S.languages.extend("markup", {}), S.languages.ssml = S.languages.xml, S.languages.atom = S.languages.xml, S.languages.rss = S.languages.xml, a = S, i = {
            pattern: /\\[\\(){}[\]^$+*?|.]/,
            alias: "escape"
        }, p = "(?:[^\\\\-]|" + (c = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source + ")", p = RegExp(p + "-" + p), l = {
            pattern: /(<|')[^<>']+(?=[>']$)/,
            lookbehind: !0,
            alias: "variable"
        }, a.languages.regex = {
            "char-class": {
                pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
                lookbehind: !0,
                inside: {
                    "char-class-negation": {
                        pattern: /(^\[)\^/,
                        lookbehind: !0,
                        alias: "operator"
                    },
                    "char-class-punctuation": {
                        pattern: /^\[|\]$/,
                        alias: "punctuation"
                    },
                    range: {
                        pattern: p,
                        inside: {
                            escape: c,
                            "range-punctuation": {
                                pattern: /-/,
                                alias: "operator"
                            }
                        }
                    },
                    "special-escape": i,
                    "char-set": {
                        pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                        alias: "class-name"
                    },
                    escape: c
                }
            },
            "special-escape": i,
            "char-set": {
                pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
                alias: "class-name"
            },
            backreference: [{
                pattern: /\\(?![123][0-7]{2})[1-9]/,
                alias: "keyword"
            }, {
                pattern: /\\k<[^<>']+>/,
                alias: "keyword",
                inside: {
                    "group-name": l
                }
            }],
            anchor: {
                pattern: /[$^]|\\[ABbGZz]/,
                alias: "function"
            },
            escape: c,
            group: [{
                pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                alias: "punctuation",
                inside: {
                    "group-name": l
                }
            }, {
                pattern: /\)/,
                alias: "punctuation"
            }],
            quantifier: {
                pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
                alias: "number"
            },
            alternation: {
                pattern: /\|/,
                alias: "keyword"
            }
        }, S.languages.clike = {
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
        }, S.languages.javascript = S.languages.extend("clike", {
            "class-name": [S.languages.clike["class-name"], {
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
        }), S.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, S.languages.insertBefore("javascript", "keyword", {
            regex: {
                pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "regex-source": {
                        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                        lookbehind: !0,
                        alias: "language-regex",
                        inside: S.languages.regex
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
                inside: S.languages.javascript
            }, {
                pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: S.languages.javascript
            }, {
                pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: S.languages.javascript
            }, {
                pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: S.languages.javascript
            }],
            constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
        }), S.languages.insertBefore("javascript", "string", {
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
                            rest: S.languages.javascript
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
        }), S.languages.insertBefore("javascript", "operator", {
            "literal-property": {
                pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                lookbehind: !0,
                alias: "property"
            }
        }), S.languages.markup && (S.languages.markup.tag.addInlined("script", "javascript"), S.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), S.languages.js = S.languages.javascript, S.languages.actionscript = S.languages.extend("javascript", {
            keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
            operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
        }), S.languages.actionscript["class-name"].alias = "function", delete S.languages.actionscript.parameter, delete S.languages.actionscript["literal-property"], S.languages.markup && S.languages.insertBefore("actionscript", "string", {
            xml: {
                pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
                lookbehind: !0,
                inside: S.languages.markup
            }
        }),
        function(e) {
            var t = /#(?!\{).+/,
                n = {
                    pattern: /#\{[^}]+\}/,
                    alias: "variable"
                };
            e.languages.coffeescript = e.languages.extend("javascript", {
                comment: t,
                string: [{
                    pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                    greedy: !0
                }, {
                    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                    greedy: !0,
                    inside: {
                        interpolation: n
                    }
                }],
                keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                "class-member": {
                    pattern: /@(?!\d)\w+/,
                    alias: "variable"
                }
            }), e.languages.insertBefore("coffeescript", "comment", {
                "multiline-comment": {
                    pattern: /###[\s\S]+?###/,
                    alias: "comment"
                },
                "block-regex": {
                    pattern: /\/{3}[\s\S]*?\/{3}/,
                    alias: "regex",
                    inside: {
                        comment: t,
                        interpolation: n
                    }
                }
            }), e.languages.insertBefore("coffeescript", "string", {
                "inline-javascript": {
                    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                    inside: {
                        delimiter: {
                            pattern: /^`|`$/,
                            alias: "punctuation"
                        },
                        script: {
                            pattern: /[\s\S]+/,
                            alias: "language-javascript",
                            inside: e.languages.javascript
                        }
                    }
                },
                "multiline-string": [{
                    pattern: /'''[\s\S]*?'''/,
                    greedy: !0,
                    alias: "string"
                }, {
                    pattern: /"""[\s\S]*?"""/,
                    greedy: !0,
                    alias: "string",
                    inside: {
                        interpolation: n
                    }
                }]
            }), e.languages.insertBefore("coffeescript", "keyword", {
                property: /(?!\d)\w+(?=\s*:(?!:))/
            }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript
        }(S),
        function(e) {
            var t = e.languages.javadoclike = {
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
            Object.defineProperty(t, "addSupport", {
                value: function(t, n) {
                    (t = "string" == typeof t ? [t] : t).forEach((function(t) {
                        var o = function(e) {
                                e.inside || (e.inside = {}), e.inside.rest = n
                            },
                            r = "doc-comment";
                        if (s = e.languages[t]) {
                            var s, a = s[r];
                            if ((a = a || (s = e.languages.insertBefore(t, "comment", {
                                    "doc-comment": {
                                        pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                        lookbehind: !0,
                                        alias: "comment"
                                    }
                                }))[r]) instanceof RegExp && (a = s[r] = {
                                    pattern: a
                                }), Array.isArray(a))
                                for (var i = 0, c = a.length; i < c; i++) a[i] instanceof RegExp && (a[i] = {
                                    pattern: a[i]
                                }), o(a[i]);
                            else o(a)
                        }
                    }))
                }
            }), t.addSupport(["java", "javascript", "php"], t)
        }(S),
        function(e) {
            var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
            (t = (e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
            }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup)) && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
        }(S),
        function(e) {
            var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                n = (t = (e.languages.css.selector = {
                    pattern: e.languages.css.selector.pattern,
                    lookbehind: !0,
                    inside: t = {
                        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        "pseudo-class": /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: RegExp("\\[(?:[^[\\]\"']|" + t.source + ")*\\]"),
                            greedy: !0,
                            inside: {
                                punctuation: /^\[|\]$/,
                                "case-sensitivity": {
                                    pattern: /(\s)[si]$/i,
                                    lookbehind: !0,
                                    alias: "keyword"
                                },
                                namespace: {
                                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                    lookbehind: !0,
                                    inside: {
                                        punctuation: /\|$/
                                    }
                                },
                                "attr-name": {
                                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                                    lookbehind: !0
                                },
                                "attr-value": [t, {
                                    pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                                    lookbehind: !0
                                }],
                                operator: /[|~*^$]?=/
                            }
                        },
                        "n-th": [{
                            pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                            lookbehind: !0,
                            inside: {
                                number: /[\dn]+/,
                                operator: /[+-]/
                            }
                        }, {
                            pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                            lookbehind: !0
                        }],
                        combinator: />|\+|~|\|\|/,
                        punctuation: /[(),]/
                    }
                }, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
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
            e.languages.insertBefore("css", "function", {
                operator: {
                    pattern: /(\s)[+\-*\/](?=\s)/,
                    lookbehind: !0
                },
                hexcode: {
                    pattern: /\B#[\da-f]{3,8}\b/i,
                    alias: "color"
                },
                color: [{
                    pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                    lookbehind: !0
                }, {
                    pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                    inside: {
                        unit: t,
                        number: n,
                        function: /[\w-]+(?=\()/,
                        punctuation: /[(),]/
                    }
                }],
                entity: /\\[\da-f]{1,8}/i,
                unit: t,
                number: n
            })
        }(S),
        function(e) {
            var t = /[*&][^\s[\]{},]+/,
                n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                o = "(?:" + n.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + n.source + ")?)",
                r = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, (function() {
                    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
                })),
                s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

            function a(e, t) {
                t = (t || "").replace(/m/g, "") + "m";
                var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, (function() {
                    return o
                })).replace(/<<value>>/g, (function() {
                    return e
                }));
                return RegExp(n, t)
            }
            e.languages.yaml = {
                scalar: {
                    pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, (function() {
                        return o
                    }))),
                    lookbehind: !0,
                    alias: "string"
                },
                comment: /#.*/,
                key: {
                    pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, (function() {
                        return o
                    })).replace(/<<key>>/g, (function() {
                        return "(?:" + r + "|" + s + ")"
                    }))),
                    lookbehind: !0,
                    greedy: !0,
                    alias: "atrule"
                },
                directive: {
                    pattern: /(^[ \t]*)%.+/m,
                    lookbehind: !0,
                    alias: "important"
                },
                datetime: {
                    pattern: a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                    lookbehind: !0,
                    alias: "number"
                },
                boolean: {
                    pattern: a(/false|true/.source, "i"),
                    lookbehind: !0,
                    alias: "important"
                },
                null: {
                    pattern: a(/null|~/.source, "i"),
                    lookbehind: !0,
                    alias: "important"
                },
                string: {
                    pattern: a(s),
                    lookbehind: !0,
                    greedy: !0
                },
                number: {
                    pattern: a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                    lookbehind: !0
                },
                tag: n,
                important: t,
                punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
            }, e.languages.yml = e.languages.yaml
        }(S),
        function(e) {
            var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

            function n(e) {
                return e = e.replace(/<inner>/g, (function() {
                    return t
                })), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            }
            var o = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                r = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, (function() {
                    return o
                })),
                s = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
                a = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
                    "front-matter-block": {
                        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                        lookbehind: !0,
                        greedy: !0,
                        inside: {
                            punctuation: /^---|---$/,
                            "front-matter": {
                                pattern: /\S+(?:\s+\S+)*/,
                                alias: ["yaml", "language-yaml"],
                                inside: e.languages.yaml
                            }
                        }
                    },
                    blockquote: {
                        pattern: /^>(?:[\t ]*>)*/m,
                        alias: "punctuation"
                    },
                    table: {
                        pattern: RegExp("^" + r + s + "(?:" + r + ")*", "m"),
                        inside: {
                            "table-data-rows": {
                                pattern: RegExp("^(" + r + s + ")(?:" + r + ")*$"),
                                lookbehind: !0,
                                inside: {
                                    "table-data": {
                                        pattern: RegExp(o),
                                        inside: e.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            },
                            "table-line": {
                                pattern: RegExp("^(" + r + ")" + s + "$"),
                                lookbehind: !0,
                                inside: {
                                    punctuation: /\||:?-{3,}:?/
                                }
                            },
                            "table-header-row": {
                                pattern: RegExp("^" + r + "$"),
                                inside: {
                                    "table-header": {
                                        pattern: RegExp(o),
                                        alias: "important",
                                        inside: e.languages.markdown
                                    },
                                    punctuation: /\|/
                                }
                            }
                        }
                    },
                    code: [{
                        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                        lookbehind: !0,
                        alias: "keyword"
                    }, {
                        pattern: /^```[\s\S]*?^```$/m,
                        greedy: !0,
                        inside: {
                            "code-block": {
                                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                lookbehind: !0
                            },
                            "code-language": {
                                pattern: /^(```).+/,
                                lookbehind: !0
                            },
                            punctuation: /```/
                        }
                    }],
                    title: [{
                        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                        alias: "important",
                        inside: {
                            punctuation: /==+$|--+$/
                        }
                    }, {
                        pattern: /(^\s*)#.+/m,
                        lookbehind: !0,
                        alias: "important",
                        inside: {
                            punctuation: /^#+|#+$/
                        }
                    }],
                    hr: {
                        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    list: {
                        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                        lookbehind: !0,
                        alias: "punctuation"
                    },
                    "url-reference": {
                        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                        inside: {
                            variable: {
                                pattern: /^(!?\[)[^\]]+/,
                                lookbehind: !0
                            },
                            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                            punctuation: /^[\[\]!:]|[<>]/
                        },
                        alias: "url"
                    },
                    bold: {
                        pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
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
                        pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
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
                        pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
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
                    "code-snippet": {
                        pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                        lookbehind: !0,
                        greedy: !0,
                        alias: ["code", "keyword"]
                    },
                    url: {
                        pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
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
                }), ["url", "bold", "italic", "strike"].forEach((function(t) {
                    ["url", "bold", "italic", "strike", "code-snippet"].forEach((function(n) {
                        t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
                    }))
                })), e.hooks.add("after-tokenize", (function(e) {
                    "markdown" !== e.language && "md" !== e.language || function e(t) {
                        if (t && "string" != typeof t)
                            for (var n = 0, o = t.length; n < o; n++) {
                                var r, s = t[n];
                                "code" !== s.type ? e(s.content) : (r = s.content[1], s = s.content[3], r && s && "code-language" === r.type && "code-block" === s.type && "string" == typeof r.content && (r = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), r = "language-" + (r = (/[a-z][\w-]*/i.exec(r) || [""])[0].toLowerCase()), s.alias ? "string" == typeof s.alias ? s.alias = [s.alias, r] : s.alias.push(r) : s.alias = [r]))
                            }
                    }(e.tokens)
                })), e.hooks.add("wrap", (function(t) {
                    if ("code-block" === t.type) {
                        for (var n = "", o = 0, r = t.classes.length; o < r; o++) {
                            var s = t.classes[o];
                            if (s = /language-(.+)/.exec(s)) {
                                n = s[1];
                                break
                            }
                        }
                        var p, l = e.languages[n];
                        l ? t.content = e.highlight(t.content.replace(a, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, (function(e, t) {
                            var n;
                            return "#" === (t = t.toLowerCase())[0] ? (n = "x" === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1)), c(n)) : i[t] || e
                        })), l, n) : n && "none" !== n && e.plugins.autoloader && (p = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random()), t.attributes.id = p, e.plugins.autoloader.loadLanguages(n, (function() {
                            var t = document.getElementById(p);
                            t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n))
                        })))
                    }
                })), RegExp(e.languages.markup.tag.pattern.source, "gi")),
                i = {
                    amp: "&",
                    lt: "<",
                    gt: ">",
                    quot: '"'
                },
                c = String.fromCodePoint || String.fromCharCode;
            e.languages.md = e.languages.markdown
        }(S), S.languages.graphql = {
            comment: /#.*/,
            description: {
                pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                greedy: !0,
                alias: "string",
                inside: {
                    "language-markdown": {
                        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                        lookbehind: !0,
                        inside: S.languages.markdown
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
                alias: "function"
            },
            "attr-name": {
                pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                greedy: !0
            },
            "atom-input": {
                pattern: /\b[A-Z]\w*Input\b/,
                alias: "class-name"
            },
            scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
            constant: /\b[A-Z][A-Z_\d]*\b/,
            "class-name": {
                pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                lookbehind: !0
            },
            fragment: {
                pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: "function"
            },
            "definition-mutation": {
                pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: "function"
            },
            "definition-query": {
                pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
                lookbehind: !0,
                alias: "function"
            },
            keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
            operator: /[!=|&]|\.{3}/,
            "property-query": /\w+(?=\s*\()/,
            object: /\w+(?=\s*\{)/,
            punctuation: /[!(){}\[\]:=,]/,
            property: /\w+/
        }, S.hooks.add("after-tokenize", (function(e) {
            if ("graphql" === e.language)
                for (var t = e.tokens.filter((function(e) {
                        return "string" != typeof e && "comment" !== e.type && "scalar" !== e.type
                    })), n = 0; n < t.length;) {
                    var o = t[n++];
                    if ("keyword" === o.type && "mutation" === o.content) {
                        var r = [];
                        if (u(["definition-mutation", "punctuation"]) && "(" === l(1).content) {
                            n += 2;
                            var s = h(/^\($/, /^\)$/);
                            if (-1 === s) continue;
                            for (; n < s; n++) {
                                var a = l(0);
                                "variable" === a.type && (d(a, "variable-input"), r.push(a.content))
                            }
                            n = s + 1
                        }
                        if (u(["punctuation", "property-query"]) && "{" === l(0).content && (n++, d(l(0), "property-mutation"), 0 < r.length)) {
                            var i = h(/^\{$/, /^\}$/);
                            if (-1 !== i)
                                for (var c = n; c < i; c++) {
                                    var p = t[c];
                                    "variable" === p.type && 0 <= r.indexOf(p.content) && d(p, "variable-input")
                                }
                        }
                    }
                }

            function l(e) {
                return t[n + e]
            }

            function u(e, t) {
                t = t || 0;
                for (var n = 0; n < e.length; n++) {
                    var o = l(n + t);
                    if (!o || o.type !== e[n]) return
                }
                return 1
            }

            function h(e, o) {
                for (var r = 1, s = n; s < t.length; s++) {
                    var a = t[s],
                        i = a.content;
                    if ("punctuation" === a.type && "string" == typeof i)
                        if (e.test(i)) r++;
                        else if (o.test(i) && 0 == --r) return s
                }
                return -1
            }

            function d(e, t) {
                var n = e.alias;
                n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [], n.push(t)
            }
        })), S.languages.sql = {
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                lookbehind: !0
            },
            variable: [{
                pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
                greedy: !0
            }, /@[\w.$]+/],
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
        function(e) {
            var t = e.languages.javascript["template-string"],
                n = t.pattern.source,
                o = t.inside.interpolation,
                r = o.inside["interpolation-punctuation"],
                s = o.pattern.source;

            function a(t, o) {
                if (e.languages[t]) return {
                    pattern: RegExp("((?:" + o + ")\\s*)" + n),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "template-punctuation": {
                            pattern: /^`|`$/,
                            alias: "string"
                        },
                        "embedded-code": {
                            pattern: /[\s\S]+/,
                            alias: t
                        }
                    }
                }
            }

            function i(t, n, o) {
                return t = {
                    code: t,
                    grammar: n,
                    language: o
                }, e.hooks.run("before-tokenize", t), t.tokens = e.tokenize(t.code, t.grammar), e.hooks.run("after-tokenize", t), t.tokens
            }

            function c(t, n, a) {
                var c = e.tokenize(t, {
                        interpolation: {
                            pattern: RegExp(s),
                            lookbehind: !0
                        }
                    }),
                    p = 0,
                    l = {},
                    u = (c = i(c.map((function(e) {
                        if ("string" == typeof e) return e;
                        var n, o;
                        for (e = e.content; - 1 !== t.indexOf((o = p++, n = "___" + a.toUpperCase() + "_" + o + "___")););
                        return l[n] = e, n
                    })).join(""), n, a), Object.keys(l));
                return p = 0,
                    function t(n) {
                        for (var s = 0; s < n.length; s++) {
                            if (p >= u.length) return;
                            var a, c, h, d, T, y, f, k = n[s];
                            "string" == typeof k || "string" == typeof k.content ? (a = u[p], -1 !== (f = (y = "string" == typeof k ? k : k.content).indexOf(a)) && (++p, c = y.substring(0, f), T = l[a], h = void 0, (d = {})["interpolation-punctuation"] = r, 3 === (d = e.tokenize(T, d)).length && ((h = [1, 1]).push.apply(h, i(d[1], e.languages.javascript, "javascript")), d.splice.apply(d, h)), h = new e.Token("interpolation", d, o.alias, T), d = y.substring(f + a.length), T = [], c && T.push(c), T.push(h), d && (t(y = [d]), T.push.apply(T, y)), "string" == typeof k ? (n.splice.apply(n, [s, 1].concat(T)), s += T.length - 1) : k.content = T)) : (f = k.content, Array.isArray(f) ? t(f) : t([f]))
                        }
                    }(c), new e.Token(a, c, "language-" + a, t)
            }
            e.languages.javascript["template-string"] = [a("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), a("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), a("svg", /\bsvg/.source), a("markdown", /\b(?:markdown|md)/.source), a("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), a("sql", /\bsql/.source), t].filter(Boolean);
            var p = {
                javascript: !0,
                js: !0,
                typescript: !0,
                ts: !0,
                jsx: !0,
                tsx: !0
            };

            function l(e) {
                return "string" == typeof e ? e : Array.isArray(e) ? e.map(l).join("") : l(e.content)
            }
            e.hooks.add("after-tokenize", (function(t) {
                t.language in p && function t(n) {
                    for (var o = 0, r = n.length; o < r; o++) {
                        var s, a, i, p = n[o];
                        "string" != typeof p && (s = p.content, Array.isArray(s) ? "template-string" === p.type ? (p = s[1], 3 === s.length && "string" != typeof p && "embedded-code" === p.type && (a = l(p), p = p.alias, p = Array.isArray(p) ? p[0] : p, i = e.languages[p]) && (s[1] = c(a, i, p))) : t(s) : "string" != typeof s && t([s]))
                    }
                }(t.tokens)
            }))
        }(S),
        function(e) {
            e.languages.typescript = e.languages.extend("javascript", {
                "class-name": {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: null
                },
                builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
            }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
            var t = e.languages.extend("typescript", {});
            delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", {
                decorator: {
                    pattern: /@[$\w\xA0-\uFFFF]+/,
                    inside: {
                        at: {
                            pattern: /^@/,
                            alias: "operator"
                        },
                        function: /^[\s\S]+/
                    }
                },
                "generic-function": {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                    greedy: !0,
                    inside: {
                        function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                        generic: {
                            pattern: /<[\s\S]+/,
                            alias: "class-name",
                            inside: t
                        }
                    }
                }
            }), e.languages.ts = e.languages.typescript
        }(S),
        function(e) {
            var t = e.languages.javascript,
                n = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
                o = "(@(?:arg|argument|param|property)\\s+(?:" + n + "\\s+)?)";
            e.languages.jsdoc = e.languages.extend("javadoclike", {
                parameter: {
                    pattern: RegExp(o + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }
            }), e.languages.insertBefore("jsdoc", "keyword", {
                "optional-parameter": {
                    pattern: RegExp(o + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
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
                            inside: t,
                            alias: "language-javascript"
                        },
                        punctuation: /[=[\]]/
                    }
                },
                "class-name": [{
                    pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, (function() {
                        return n
                    }))),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                }, {
                    pattern: RegExp("(@[a-z]+\\s+)" + n),
                    lookbehind: !0,
                    inside: {
                        string: t.string,
                        number: t.number,
                        boolean: t.boolean,
                        keyword: e.languages.typescript.keyword,
                        operator: /=>|\.\.\.|[&|?:*]/,
                        punctuation: /[.,;=<>{}()[\]]/
                    }
                }],
                example: {
                    pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                    lookbehind: !0,
                    inside: {
                        code: {
                            pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                            lookbehind: !0,
                            inside: t,
                            alias: "language-javascript"
                        }
                    }
                }
            }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
        }(S),
        function(e) {
            e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", {
                type: [{
                    pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
                    alias: "class-name"
                }]
            }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", {
                "flow-punctuation": {
                    pattern: /\{\||\|\}/,
                    alias: "punctuation"
                }
            }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({
                pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
                lookbehind: !0
            }, {
                pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
                lookbehind: !0
            })
        }(S), S.languages.n4js = S.languages.extend("javascript", {
            keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
        }), S.languages.insertBefore("n4js", "constant", {
            annotation: {
                pattern: /@+\w+/,
                alias: "operator"
            }
        }), S.languages.n4jsd = S.languages.n4js,
        function(e) {
            function t(e, t) {
                return RegExp(e.replace(/<ID>/g, (function() {
                    return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
                })), t)
            }
            e.languages.insertBefore("javascript", "function-variable", {
                "method-variable": {
                    pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
                    lookbehind: !0,
                    alias: ["function-variable", "method", "function", "property-access"]
                }
            }), e.languages.insertBefore("javascript", "function", {
                method: {
                    pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
                    lookbehind: !0,
                    alias: ["function", "property-access"]
                }
            }), e.languages.insertBefore("javascript", "constant", {
                "known-class-name": [{
                    pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                    alias: "class-name"
                }, {
                    pattern: /\b(?:[A-Z]\w*)Error\b/,
                    alias: "class-name"
                }]
            }), e.languages.insertBefore("javascript", "keyword", {
                imports: {
                    pattern: t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                    lookbehind: !0,
                    inside: e.languages.javascript
                },
                exports: {
                    pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                    lookbehind: !0,
                    inside: e.languages.javascript
                }
            }), e.languages.javascript.keyword.unshift({
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module"
            }, {
                pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow"
            }, {
                pattern: /\bnull\b/,
                alias: ["null", "nil"]
            }, {
                pattern: /\bundefined\b/,
                alias: "nil"
            }), e.languages.insertBefore("javascript", "operator", {
                spread: {
                    pattern: /\.{3}/,
                    alias: "operator"
                },
                arrow: {
                    pattern: /=>/,
                    alias: "operator"
                }
            }), e.languages.insertBefore("javascript", "punctuation", {
                "property-access": {
                    pattern: t(/(\.\s*)#?<ID>/.source),
                    lookbehind: !0
                },
                "maybe-class-name": {
                    pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                    lookbehind: !0
                },
                dom: {
                    pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                    alias: "variable"
                },
                console: {
                    pattern: /\bconsole(?=\s*\.)/,
                    alias: "class-name"
                }
            });
            for (var n = ["function", "function-variable", "method", "method-variable", "property-access"], o = 0; o < n.length; o++) {
                var r = n[o],
                    s = e.languages.javascript[r];
                r = (s = "RegExp" === e.util.type(s) ? e.languages.javascript[r] = {
                    pattern: s
                } : s).inside || {};
                (s.inside = r)["maybe-class-name"] = /^[A-Z][\s\S]*/
            }
        }(S),
        function(e) {
            var t = e.util.clone(e.languages.javascript),
                n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

            function s(e, t) {
                return e = e.replace(/<S>/g, (function() {
                    return n
                })).replace(/<BRACES>/g, (function() {
                    return o
                })).replace(/<SPREAD>/g, (function() {
                    return r
                })), RegExp(e, t)
            }

            function a(t) {
                for (var n = [], o = 0; o < t.length; o++) {
                    var r = t[o],
                        s = !1;
                    "string" != typeof r && ("tag" === r.type && r.content[0] && "tag" === r.content[0].type ? "</" === r.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === i(r.content[0].content[1]) && n.pop() : "/>" !== r.content[r.content.length - 1].content && n.push({
                        tagName: i(r.content[0].content[1]),
                        openedBraces: 0
                    }) : 0 < n.length && "punctuation" === r.type && "{" === r.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === r.type && "}" === r.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof r) && 0 < n.length && 0 === n[n.length - 1].openedBraces && (s = i(r), o < t.length - 1 && ("string" == typeof t[o + 1] || "plain-text" === t[o + 1].type) && (s += i(t[o + 1]), t.splice(o + 1, 1)), 0 < o && ("string" == typeof t[o - 1] || "plain-text" === t[o - 1].type) && (s = i(t[o - 1]) + s, t.splice(o - 1, 1), o--), t[o] = new e.Token("plain-text", s, null, s)), r.content && "string" != typeof r.content && a(r.content)
                }
            }
            r = s(r).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", {
                spread: {
                    pattern: s(/<SPREAD>/.source),
                    inside: e.languages.jsx
                }
            }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
                script: {
                    pattern: s(/=<BRACES>/.source),
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
            var i = function(e) {
                return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(i).join("") : ""
            };
            e.hooks.add("after-tokenize", (function(e) {
                "jsx" !== e.language && "tsx" !== e.language || a(e.tokens)
            }))
        }(S),
        function(e) {
            var t = e.util.clone(e.languages.typescript);
            (t = (e.languages.tsx = e.languages.extend("jsx", t), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag)).pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0
        }(S), S.languages.swift = {
            comment: {
                pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
                lookbehind: !0,
                greedy: !0
            },
            "string-literal": [{
                pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
                        lookbehind: !0,
                        inside: null
                    },
                    "interpolation-punctuation": {
                        pattern: /^\)|\\\($/,
                        alias: "punctuation"
                    },
                    punctuation: /\\(?=[\r\n])/,
                    string: /[\s\S]+/
                }
            }, {
                pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
                        lookbehind: !0,
                        inside: null
                    },
                    "interpolation-punctuation": {
                        pattern: /^\)|\\#+\($/,
                        alias: "punctuation"
                    },
                    string: /[\s\S]+/
                }
            }],
            directive: {
                pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ \t]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"),
                alias: "property",
                inside: {
                    "directive-name": /^#\w+/,
                    boolean: /\b(?:false|true)\b/,
                    number: /\b\d+(?:\.\d+)*\b/,
                    operator: /!|&&|\|\||[<>]=?/,
                    punctuation: /[(),]/
                }
            },
            literal: {
                pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
                alias: "constant"
            },
            "other-directive": {
                pattern: /#\w+\b/,
                alias: "property"
            },
            attribute: {
                pattern: /@\w+/,
                alias: "atrule"
            },
            "function-definition": {
                pattern: /(\bfunc\s+)\w+/,
                lookbehind: !0,
                alias: "function"
            },
            label: {
                pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
                lookbehind: !0,
                alias: "important"
            },
            keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
            boolean: /\b(?:false|true)\b/,
            nil: {
                pattern: /\bnil\b/,
                alias: "constant"
            },
            "short-argument": /\$\d+\b/,
            omit: {
                pattern: /\b_\b/,
                alias: "keyword"
            },
            number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
            "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
            function: /\b[a-z_]\w*(?=\s*\()/i,
            constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
            operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
            punctuation: /[{}[\]();,.:\\]/
        }, S.languages.swift["string-literal"].forEach((function(e) {
            e.inside.interpolation.inside = S.languages.swift
        })),
        function(e) {
            e.languages.kotlin = e.languages.extend("clike", {
                keyword: {
                    pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
                    lookbehind: !0
                },
                function: [{
                    pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
                    greedy: !0
                }, {
                    pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
                    lookbehind: !0,
                    greedy: !0
                }],
                number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
                operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
            }), delete e.languages.kotlin["class-name"];
            var t = {
                "interpolation-punctuation": {
                    pattern: /^\$\{?|\}$/,
                    alias: "punctuation"
                },
                expression: {
                    pattern: /[\s\S]+/,
                    inside: e.languages.kotlin
                }
            };
            e.languages.insertBefore("kotlin", "string", {
                "string-literal": [{
                    pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                    alias: "multiline",
                    inside: {
                        interpolation: {
                            pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                            inside: t
                        },
                        string: /[\s\S]+/
                    }
                }, {
                    pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                    alias: "singleline",
                    inside: {
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                            lookbehind: !0,
                            inside: t
                        },
                        string: /[\s\S]+/
                    }
                }],
                char: {
                    pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
                    greedy: !0
                }
            }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", {
                annotation: {
                    pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
                    alias: "builtin"
                }
            }), e.languages.insertBefore("kotlin", "function", {
                label: {
                    pattern: /\b\w+@|@\w+\b/,
                    alias: "symbol"
                }
            }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin
        }(S), S.languages.c = S.languages.extend("clike", {
            comment: {
                pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                greedy: !0
            },
            string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                greedy: !0
            },
            "class-name": {
                pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                lookbehind: !0
            },
            keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
            function: /\b[a-z_]\w*(?=\s*\()/i,
            number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
            operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
        }), S.languages.insertBefore("c", "string", {
            char: {
                pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                greedy: !0
            }
        }), S.languages.insertBefore("c", "string", {
            macro: {
                pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                lookbehind: !0,
                greedy: !0,
                alias: "property",
                inside: {
                    string: [{
                        pattern: /^(#\s*include\s*)<[^>]+>/,
                        lookbehind: !0
                    }, S.languages.c.string],
                    char: S.languages.c.char,
                    comment: S.languages.c.comment,
                    "macro-name": [{
                        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                        lookbehind: !0
                    }, {
                        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                        lookbehind: !0,
                        alias: "function"
                    }],
                    directive: {
                        pattern: /^(#\s*)[a-z]+/,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    "directive-hash": /^#/,
                    punctuation: /##|\\(?=[\r\n])/,
                    expression: {
                        pattern: /\S[\s\S]*/,
                        inside: S.languages.c
                    }
                }
            }
        }), S.languages.insertBefore("c", "function", {
            constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
        }), delete S.languages.c.boolean, S.languages.objectivec = S.languages.extend("c", {
            string: {
                pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                greedy: !0
            },
            keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
            operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
        }), delete S.languages.objectivec["class-name"], S.languages.objc = S.languages.objectivec, S.languages.reason = S.languages.extend("clike", {
            string: {
                pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                greedy: !0
            },
            "class-name": /\b[A-Z]\w*/,
            keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
            operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
        }), S.languages.insertBefore("reason", "class-name", {
            char: {
                pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                greedy: !0
            },
            constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
            label: {
                pattern: /\b[a-z]\w*(?=::)/,
                alias: "symbol"
            }
        }), delete S.languages.reason.function,
        function(e) {
            for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++) t = t.replace(/<self>/g, (function() {
                return t
            }));
            t = t.replace(/<self>/g, (function() {
                return /[^\s\S]/.source
            })), e.languages.rust = {
                comment: [{
                    pattern: RegExp(/(^|[^\\])/.source + t),
                    lookbehind: !0,
                    greedy: !0
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: !0,
                    greedy: !0
                }],
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
                    alias: "attr-name",
                    inside: {
                        string: null
                    }
                },
                "closure-params": {
                    pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "closure-punctuation": {
                            pattern: /^\||\|$/,
                            alias: "punctuation"
                        },
                        rest: null
                    }
                },
                "lifetime-annotation": {
                    pattern: /'\w+/,
                    alias: "symbol"
                },
                "fragment-specifier": {
                    pattern: /(\$\w+:)[a-z]+/,
                    lookbehind: !0,
                    alias: "punctuation"
                },
                variable: /\$\w+/,
                "function-definition": {
                    pattern: /(\bfn\s+)\w+/,
                    lookbehind: !0,
                    alias: "function"
                },
                "type-definition": {
                    pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                    lookbehind: !0,
                    alias: "class-name"
                },
                "module-declaration": [{
                    pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
                    lookbehind: !0,
                    alias: "namespace"
                }, {
                    pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                    lookbehind: !0,
                    alias: "namespace",
                    inside: {
                        punctuation: /::/
                    }
                }],
                keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
                function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
                macro: {
                    pattern: /\b\w+!/,
                    alias: "property"
                },
                constant: /\b[A-Z_][A-Z_\d]+\b/,
                "class-name": /\b[A-Z]\w*\b/,
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
            }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string
        }(S), S.languages.go = S.languages.extend("clike", {
            string: {
                pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
                lookbehind: !0,
                greedy: !0
            },
            keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
            boolean: /\b(?:_|false|iota|nil|true)\b/,
            number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
            operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
            builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
        }), S.languages.insertBefore("go", "string", {
            char: {
                pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
                greedy: !0
            }
        }), delete S.languages.go["class-name"],
        function(e) {
            var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
                n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, (function() {
                    return t.source
                }));
            e.languages.cpp = e.languages.extend("c", {
                "class-name": [{
                    pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, (function() {
                        return t.source
                    }))),
                    lookbehind: !0
                }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
                keyword: t,
                number: {
                    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                    greedy: !0
                },
                operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                boolean: /\b(?:false|true)\b/
            }), e.languages.insertBefore("cpp", "string", {
                module: {
                    pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, (function() {
                        return n
                    })) + ")"),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        string: /^[<"][\s\S]+/,
                        operator: /:/,
                        punctuation: /\./
                    }
                },
                "raw-string": {
                    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                    alias: "string",
                    greedy: !0
                }
            }), e.languages.insertBefore("cpp", "keyword", {
                "generic-function": {
                    pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                    inside: {
                        function: /^\w+/,
                        generic: {
                            pattern: /<[\s\S]+/,
                            alias: "class-name",
                            inside: e.languages.cpp
                        }
                    }
                }
            }), e.languages.insertBefore("cpp", "operator", {
                "double-colon": {
                    pattern: /::/,
                    alias: "punctuation"
                }
            }), e.languages.insertBefore("cpp", "class-name", {
                "base-clause": {
                    pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                    lookbehind: !0,
                    greedy: !0,
                    inside: e.languages.extend("cpp", {})
                }
            }), e.languages.insertBefore("inside", "double-colon", {
                "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
            }, e.languages.cpp["base-clause"])
        }(S), S.languages.python = {
            comment: {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                greedy: !0
            },
            "string-interpolation": {
                pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                greedy: !0,
                inside: {
                    interpolation: {
                        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                        lookbehind: !0,
                        inside: {
                            "format-spec": {
                                pattern: /(:)[^:(){}]+(?=\}$)/,
                                lookbehind: !0
                            },
                            "conversion-option": {
                                pattern: /![sra](?=[:}]$)/,
                                alias: "punctuation"
                            },
                            rest: null
                        }
                    },
                    string: /[\s\S]+/
                }
            },
            "triple-quoted-string": {
                pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
                greedy: !0,
                alias: "string"
            },
            string: {
                pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                greedy: !0
            },
            function: {
                pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                lookbehind: !0
            },
            "class-name": {
                pattern: /(\bclass\s+)\w+/i,
                lookbehind: !0
            },
            decorator: {
                pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                lookbehind: !0,
                alias: ["annotation", "punctuation"],
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
        }, S.languages.python["string-interpolation"].inside.interpolation.inside.rest = S.languages.python, S.languages.py = S.languages.python, S.languages.json = {
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
                alias: "keyword"
            }
        }, S.languages.webmanifest = S.languages.json;
    var A = {};
    ((e, t) => {
        for (var n in t) T(e, n, {
            get: t[n],
            enumerable: !0
        })
    })(A, {
        dracula: () => R,
        duotoneDark: () => N,
        duotoneLight: () => L,
        github: () => F,
        gruvboxMaterialDark: () => Y,
        gruvboxMaterialLight: () => J,
        jettwaveDark: () => z,
        jettwaveLight: () => W,
        nightOwl: () => P,
        nightOwlLight: () => O,
        oceanicNext: () => B,
        okaidia: () => K,
        oneDark: () => G,
        oneLight: () => X,
        palenight: () => $,
        shadesOfPurple: () => M,
        synthwave84: () => q,
        ultramin: () => H,
        vsDark: () => U,
        vsLight: () => V
    });
    var R = {
            plain: {
                color: "#F8F8F2",
                backgroundColor: "#282A36"
            },
            styles: [{
                types: ["prolog", "constant", "builtin"],
                style: {
                    color: "rgb(189, 147, 249)"
                }
            }, {
                types: ["inserted", "function"],
                style: {
                    color: "rgb(80, 250, 123)"
                }
            }, {
                types: ["deleted"],
                style: {
                    color: "rgb(255, 85, 85)"
                }
            }, {
                types: ["changed"],
                style: {
                    color: "rgb(255, 184, 108)"
                }
            }, {
                types: ["punctuation", "symbol"],
                style: {
                    color: "rgb(248, 248, 242)"
                }
            }, {
                types: ["string", "char", "tag", "selector"],
                style: {
                    color: "rgb(255, 121, 198)"
                }
            }, {
                types: ["keyword", "variable"],
                style: {
                    color: "rgb(189, 147, 249)",
                    fontStyle: "italic"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "rgb(98, 114, 164)"
                }
            }, {
                types: ["attr-name"],
                style: {
                    color: "rgb(241, 250, 140)"
                }
            }]
        },
        N = {
            plain: {
                backgroundColor: "#2a2734",
                color: "#9a86fd"
            },
            styles: [{
                types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                style: {
                    color: "#6c6783"
                }
            }, {
                types: ["namespace"],
                style: {
                    opacity: .7
                }
            }, {
                types: ["tag", "operator", "number"],
                style: {
                    color: "#e09142"
                }
            }, {
                types: ["property", "function"],
                style: {
                    color: "#9a86fd"
                }
            }, {
                types: ["tag-id", "selector", "atrule-id"],
                style: {
                    color: "#eeebff"
                }
            }, {
                types: ["attr-name"],
                style: {
                    color: "#c4b9fe"
                }
            }, {
                types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
                style: {
                    color: "#ffcc99"
                }
            }, {
                types: ["deleted"],
                style: {
                    textDecorationLine: "line-through"
                }
            }, {
                types: ["inserted"],
                style: {
                    textDecorationLine: "underline"
                }
            }, {
                types: ["italic"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["important", "bold"],
                style: {
                    fontWeight: "bold"
                }
            }, {
                types: ["important"],
                style: {
                    color: "#c4b9fe"
                }
            }]
        },
        L = {
            plain: {
                backgroundColor: "#faf8f5",
                color: "#728fcb"
            },
            styles: [{
                types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                style: {
                    color: "#b6ad9a"
                }
            }, {
                types: ["namespace"],
                style: {
                    opacity: .7
                }
            }, {
                types: ["tag", "operator", "number"],
                style: {
                    color: "#063289"
                }
            }, {
                types: ["property", "function"],
                style: {
                    color: "#b29762"
                }
            }, {
                types: ["tag-id", "selector", "atrule-id"],
                style: {
                    color: "#2d2006"
                }
            }, {
                types: ["attr-name"],
                style: {
                    color: "#896724"
                }
            }, {
                types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule"],
                style: {
                    color: "#728fcb"
                }
            }, {
                types: ["placeholder", "variable"],
                style: {
                    color: "#93abdc"
                }
            }, {
                types: ["deleted"],
                style: {
                    textDecorationLine: "line-through"
                }
            }, {
                types: ["inserted"],
                style: {
                    textDecorationLine: "underline"
                }
            }, {
                types: ["italic"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["important", "bold"],
                style: {
                    fontWeight: "bold"
                }
            }, {
                types: ["important"],
                style: {
                    color: "#896724"
                }
            }]
        },
        F = {
            plain: {
                color: "#393A34",
                backgroundColor: "#f6f8fa"
            },
            styles: [{
                types: ["comment", "prolog", "doctype", "cdata"],
                style: {
                    color: "#999988",
                    fontStyle: "italic"
                }
            }, {
                types: ["namespace"],
                style: {
                    opacity: .7
                }
            }, {
                types: ["string", "attr-value"],
                style: {
                    color: "#e3116c"
                }
            }, {
                types: ["punctuation", "operator"],
                style: {
                    color: "#393A34"
                }
            }, {
                types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
                style: {
                    color: "#36acaa"
                }
            }, {
                types: ["atrule", "keyword", "attr-name", "selector"],
                style: {
                    color: "#00a4db"
                }
            }, {
                types: ["function", "deleted", "tag"],
                style: {
                    color: "#d73a49"
                }
            }, {
                types: ["function-variable"],
                style: {
                    color: "#6f42c1"
                }
            }, {
                types: ["tag", "selector", "keyword"],
                style: {
                    color: "#00009f"
                }
            }]
        },
        P = {
            plain: {
                color: "#d6deeb",
                backgroundColor: "#011627"
            },
            styles: [{
                types: ["changed"],
                style: {
                    color: "rgb(162, 191, 252)",
                    fontStyle: "italic"
                }
            }, {
                types: ["deleted"],
                style: {
                    color: "rgba(239, 83, 80, 0.56)",
                    fontStyle: "italic"
                }
            }, {
                types: ["inserted", "attr-name"],
                style: {
                    color: "rgb(173, 219, 103)",
                    fontStyle: "italic"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "rgb(99, 119, 119)",
                    fontStyle: "italic"
                }
            }, {
                types: ["string", "url"],
                style: {
                    color: "rgb(173, 219, 103)"
                }
            }, {
                types: ["variable"],
                style: {
                    color: "rgb(214, 222, 235)"
                }
            }, {
                types: ["number"],
                style: {
                    color: "rgb(247, 140, 108)"
                }
            }, {
                types: ["builtin", "char", "constant", "function"],
                style: {
                    color: "rgb(130, 170, 255)"
                }
            }, {
                types: ["punctuation"],
                style: {
                    color: "rgb(199, 146, 234)"
                }
            }, {
                types: ["selector", "doctype"],
                style: {
                    color: "rgb(199, 146, 234)",
                    fontStyle: "italic"
                }
            }, {
                types: ["class-name"],
                style: {
                    color: "rgb(255, 203, 139)"
                }
            }, {
                types: ["tag", "operator", "keyword"],
                style: {
                    color: "rgb(127, 219, 202)"
                }
            }, {
                types: ["boolean"],
                style: {
                    color: "rgb(255, 88, 116)"
                }
            }, {
                types: ["property"],
                style: {
                    color: "rgb(128, 203, 196)"
                }
            }, {
                types: ["namespace"],
                style: {
                    color: "rgb(178, 204, 214)"
                }
            }]
        },
        O = {
            plain: {
                color: "#403f53",
                backgroundColor: "#FBFBFB"
            },
            styles: [{
                types: ["changed"],
                style: {
                    color: "rgb(162, 191, 252)",
                    fontStyle: "italic"
                }
            }, {
                types: ["deleted"],
                style: {
                    color: "rgba(239, 83, 80, 0.56)",
                    fontStyle: "italic"
                }
            }, {
                types: ["inserted", "attr-name"],
                style: {
                    color: "rgb(72, 118, 214)",
                    fontStyle: "italic"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "rgb(152, 159, 177)",
                    fontStyle: "italic"
                }
            }, {
                types: ["string", "builtin", "char", "constant", "url"],
                style: {
                    color: "rgb(72, 118, 214)"
                }
            }, {
                types: ["variable"],
                style: {
                    color: "rgb(201, 103, 101)"
                }
            }, {
                types: ["number"],
                style: {
                    color: "rgb(170, 9, 130)"
                }
            }, {
                types: ["punctuation"],
                style: {
                    color: "rgb(153, 76, 195)"
                }
            }, {
                types: ["function", "selector", "doctype"],
                style: {
                    color: "rgb(153, 76, 195)",
                    fontStyle: "italic"
                }
            }, {
                types: ["class-name"],
                style: {
                    color: "rgb(17, 17, 17)"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "rgb(153, 76, 195)"
                }
            }, {
                types: ["operator", "property", "keyword", "namespace"],
                style: {
                    color: "rgb(12, 150, 155)"
                }
            }, {
                types: ["boolean"],
                style: {
                    color: "rgb(188, 84, 84)"
                }
            }]
        },
        D = "#c5a5c5",
        j = "#8dc891",
        B = {
            plain: {
                backgroundColor: "#282c34",
                color: "#ffffff"
            },
            styles: [{
                types: ["attr-name"],
                style: {
                    color: D
                }
            }, {
                types: ["attr-value"],
                style: {
                    color: j
                }
            }, {
                types: ["comment", "block-comment", "prolog", "doctype", "cdata", "shebang"],
                style: {
                    color: "#999999"
                }
            }, {
                types: ["property", "number", "function-name", "constant", "symbol", "deleted"],
                style: {
                    color: "#5a9bcf"
                }
            }, {
                types: ["boolean"],
                style: {
                    color: "#ff8b50"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "#fc929e"
                }
            }, {
                types: ["string"],
                style: {
                    color: j
                }
            }, {
                types: ["punctuation"],
                style: {
                    color: j
                }
            }, {
                types: ["selector", "char", "builtin", "inserted"],
                style: {
                    color: "#D8DEE9"
                }
            }, {
                types: ["function"],
                style: {
                    color: "#79b6f2"
                }
            }, {
                types: ["operator", "entity", "url", "variable"],
                style: {
                    color: "#d7deea"
                }
            }, {
                types: ["keyword"],
                style: {
                    color: D
                }
            }, {
                types: ["atrule", "class-name"],
                style: {
                    color: "#FAC863"
                }
            }, {
                types: ["important"],
                style: {
                    fontWeight: "400"
                }
            }, {
                types: ["bold"],
                style: {
                    fontWeight: "bold"
                }
            }, {
                types: ["italic"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["namespace"],
                style: {
                    opacity: .7
                }
            }]
        },
        K = {
            plain: {
                color: "#f8f8f2",
                backgroundColor: "#272822"
            },
            styles: [{
                types: ["changed"],
                style: {
                    color: "rgb(162, 191, 252)",
                    fontStyle: "italic"
                }
            }, {
                types: ["deleted"],
                style: {
                    color: "#f92672",
                    fontStyle: "italic"
                }
            }, {
                types: ["inserted"],
                style: {
                    color: "rgb(173, 219, 103)",
                    fontStyle: "italic"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "#8292a2",
                    fontStyle: "italic"
                }
            }, {
                types: ["string", "url"],
                style: {
                    color: "#a6e22e"
                }
            }, {
                types: ["variable"],
                style: {
                    color: "#f8f8f2"
                }
            }, {
                types: ["number"],
                style: {
                    color: "#ae81ff"
                }
            }, {
                types: ["builtin", "char", "constant", "function", "class-name"],
                style: {
                    color: "#e6db74"
                }
            }, {
                types: ["punctuation"],
                style: {
                    color: "#f8f8f2"
                }
            }, {
                types: ["selector", "doctype"],
                style: {
                    color: "#a6e22e",
                    fontStyle: "italic"
                }
            }, {
                types: ["tag", "operator", "keyword"],
                style: {
                    color: "#66d9ef"
                }
            }, {
                types: ["boolean"],
                style: {
                    color: "#ae81ff"
                }
            }, {
                types: ["namespace"],
                style: {
                    color: "rgb(178, 204, 214)",
                    opacity: .7
                }
            }, {
                types: ["tag", "property"],
                style: {
                    color: "#f92672"
                }
            }, {
                types: ["attr-name"],
                style: {
                    color: "#a6e22e !important"
                }
            }, {
                types: ["doctype"],
                style: {
                    color: "#8292a2"
                }
            }, {
                types: ["rule"],
                style: {
                    color: "#e6db74"
                }
            }]
        },
        $ = {
            plain: {
                color: "#bfc7d5",
                backgroundColor: "#292d3e"
            },
            styles: [{
                types: ["comment"],
                style: {
                    color: "rgb(105, 112, 152)",
                    fontStyle: "italic"
                }
            }, {
                types: ["string", "inserted"],
                style: {
                    color: "rgb(195, 232, 141)"
                }
            }, {
                types: ["number"],
                style: {
                    color: "rgb(247, 140, 108)"
                }
            }, {
                types: ["builtin", "char", "constant", "function"],
                style: {
                    color: "rgb(130, 170, 255)"
                }
            }, {
                types: ["punctuation", "selector"],
                style: {
                    color: "rgb(199, 146, 234)"
                }
            }, {
                types: ["variable"],
                style: {
                    color: "rgb(191, 199, 213)"
                }
            }, {
                types: ["class-name", "attr-name"],
                style: {
                    color: "rgb(255, 203, 107)"
                }
            }, {
                types: ["tag", "deleted"],
                style: {
                    color: "rgb(255, 85, 114)"
                }
            }, {
                types: ["operator"],
                style: {
                    color: "rgb(137, 221, 255)"
                }
            }, {
                types: ["boolean"],
                style: {
                    color: "rgb(255, 88, 116)"
                }
            }, {
                types: ["keyword"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["doctype"],
                style: {
                    color: "rgb(199, 146, 234)",
                    fontStyle: "italic"
                }
            }, {
                types: ["namespace"],
                style: {
                    color: "rgb(178, 204, 214)"
                }
            }, {
                types: ["url"],
                style: {
                    color: "rgb(221, 221, 221)"
                }
            }]
        },
        M = {
            plain: {
                color: "#9EFEFF",
                backgroundColor: "#2D2A55"
            },
            styles: [{
                types: ["changed"],
                style: {
                    color: "rgb(255, 238, 128)"
                }
            }, {
                types: ["deleted"],
                style: {
                    color: "rgba(239, 83, 80, 0.56)"
                }
            }, {
                types: ["inserted"],
                style: {
                    color: "rgb(173, 219, 103)"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "rgb(179, 98, 255)",
                    fontStyle: "italic"
                }
            }, {
                types: ["punctuation"],
                style: {
                    color: "rgb(255, 255, 255)"
                }
            }, {
                types: ["constant"],
                style: {
                    color: "rgb(255, 98, 140)"
                }
            }, {
                types: ["string", "url"],
                style: {
                    color: "rgb(165, 255, 144)"
                }
            }, {
                types: ["variable"],
                style: {
                    color: "rgb(255, 238, 128)"
                }
            }, {
                types: ["number", "boolean"],
                style: {
                    color: "rgb(255, 98, 140)"
                }
            }, {
                types: ["attr-name"],
                style: {
                    color: "rgb(255, 180, 84)"
                }
            }, {
                types: ["keyword", "operator", "property", "namespace", "tag", "selector", "doctype"],
                style: {
                    color: "rgb(255, 157, 0)"
                }
            }, {
                types: ["builtin", "char", "constant", "function", "class-name"],
                style: {
                    color: "rgb(250, 208, 0)"
                }
            }]
        },
        q = {
            plain: {
                backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
                backgroundImage: "#34294f",
                color: "#f92aad",
                textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
            },
            styles: [{
                types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
                style: {
                    color: "#495495",
                    fontStyle: "italic"
                }
            }, {
                types: ["punctuation"],
                style: {
                    color: "#ccc"
                }
            }, {
                types: ["tag", "attr-name", "namespace", "number", "unit", "hexcode", "deleted"],
                style: {
                    color: "#e2777a"
                }
            }, {
                types: ["property", "selector"],
                style: {
                    color: "#72f1b8",
                    textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
                }
            }, {
                types: ["function-name"],
                style: {
                    color: "#6196cc"
                }
            }, {
                types: ["boolean", "selector-id", "function"],
                style: {
                    color: "#fdfdfd",
                    textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
                }
            }, {
                types: ["class-name", "maybe-class-name", "builtin"],
                style: {
                    color: "#fff5f6",
                    textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
                }
            }, {
                types: ["constant", "symbol"],
                style: {
                    color: "#f92aad",
                    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
                }
            }, {
                types: ["important", "atrule", "keyword", "selector-class"],
                style: {
                    color: "#f4eee4",
                    textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
                }
            }, {
                types: ["string", "char", "attr-value", "regex", "variable"],
                style: {
                    color: "#f87c32"
                }
            }, {
                types: ["parameter"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["entity", "url"],
                style: {
                    color: "#67cdcc"
                }
            }, {
                types: ["operator"],
                style: {
                    color: "ffffffee"
                }
            }, {
                types: ["important", "bold"],
                style: {
                    fontWeight: "bold"
                }
            }, {
                types: ["italic"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["entity"],
                style: {
                    cursor: "help"
                }
            }, {
                types: ["inserted"],
                style: {
                    color: "green"
                }
            }]
        },
        H = {
            plain: {
                color: "#282a2e",
                backgroundColor: "#ffffff"
            },
            styles: [{
                types: ["comment"],
                style: {
                    color: "rgb(197, 200, 198)"
                }
            }, {
                types: ["string", "number", "builtin", "variable"],
                style: {
                    color: "rgb(150, 152, 150)"
                }
            }, {
                types: ["class-name", "function", "tag", "attr-name"],
                style: {
                    color: "rgb(40, 42, 46)"
                }
            }]
        },
        U = {
            plain: {
                color: "#9CDCFE",
                backgroundColor: "#1E1E1E"
            },
            styles: [{
                types: ["prolog"],
                style: {
                    color: "rgb(0, 0, 128)"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "rgb(106, 153, 85)"
                }
            }, {
                types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                style: {
                    color: "rgb(86, 156, 214)"
                }
            }, {
                types: ["number", "inserted"],
                style: {
                    color: "rgb(181, 206, 168)"
                }
            }, {
                types: ["constant"],
                style: {
                    color: "rgb(100, 102, 149)"
                }
            }, {
                types: ["attr-name", "variable"],
                style: {
                    color: "rgb(156, 220, 254)"
                }
            }, {
                types: ["deleted", "string", "attr-value", "template-punctuation"],
                style: {
                    color: "rgb(206, 145, 120)"
                }
            }, {
                types: ["selector"],
                style: {
                    color: "rgb(215, 186, 125)"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "rgb(78, 201, 176)"
                }
            }, {
                types: ["tag"],
                languages: ["markup"],
                style: {
                    color: "rgb(86, 156, 214)"
                }
            }, {
                types: ["punctuation", "operator"],
                style: {
                    color: "rgb(212, 212, 212)"
                }
            }, {
                types: ["punctuation"],
                languages: ["markup"],
                style: {
                    color: "#808080"
                }
            }, {
                types: ["function"],
                style: {
                    color: "rgb(220, 220, 170)"
                }
            }, {
                types: ["class-name"],
                style: {
                    color: "rgb(78, 201, 176)"
                }
            }, {
                types: ["char"],
                style: {
                    color: "rgb(209, 105, 105)"
                }
            }]
        },
        V = {
            plain: {
                color: "#000000",
                backgroundColor: "#ffffff"
            },
            styles: [{
                types: ["comment"],
                style: {
                    color: "rgb(0, 128, 0)"
                }
            }, {
                types: ["builtin"],
                style: {
                    color: "rgb(0, 112, 193)"
                }
            }, {
                types: ["number", "variable", "inserted"],
                style: {
                    color: "rgb(9, 134, 88)"
                }
            }, {
                types: ["operator"],
                style: {
                    color: "rgb(0, 0, 0)"
                }
            }, {
                types: ["constant", "char"],
                style: {
                    color: "rgb(129, 31, 63)"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "rgb(128, 0, 0)"
                }
            }, {
                types: ["attr-name"],
                style: {
                    color: "rgb(255, 0, 0)"
                }
            }, {
                types: ["deleted", "string"],
                style: {
                    color: "rgb(163, 21, 21)"
                }
            }, {
                types: ["changed", "punctuation"],
                style: {
                    color: "rgb(4, 81, 165)"
                }
            }, {
                types: ["function", "keyword"],
                style: {
                    color: "rgb(0, 0, 255)"
                }
            }, {
                types: ["class-name"],
                style: {
                    color: "rgb(38, 127, 153)"
                }
            }]
        },
        z = {
            plain: {
                color: "#f8fafc",
                backgroundColor: "#011627"
            },
            styles: [{
                types: ["prolog"],
                style: {
                    color: "#000080"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "#6A9955"
                }
            }, {
                types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                style: {
                    color: "#569CD6"
                }
            }, {
                types: ["number", "inserted"],
                style: {
                    color: "#B5CEA8"
                }
            }, {
                types: ["constant"],
                style: {
                    color: "#f8fafc"
                }
            }, {
                types: ["attr-name", "variable"],
                style: {
                    color: "#9CDCFE"
                }
            }, {
                types: ["deleted", "string", "attr-value", "template-punctuation"],
                style: {
                    color: "#cbd5e1"
                }
            }, {
                types: ["selector"],
                style: {
                    color: "#D7BA7D"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "#0ea5e9"
                }
            }, {
                types: ["tag"],
                languages: ["markup"],
                style: {
                    color: "#0ea5e9"
                }
            }, {
                types: ["punctuation", "operator"],
                style: {
                    color: "#D4D4D4"
                }
            }, {
                types: ["punctuation"],
                languages: ["markup"],
                style: {
                    color: "#808080"
                }
            }, {
                types: ["function"],
                style: {
                    color: "#7dd3fc"
                }
            }, {
                types: ["class-name"],
                style: {
                    color: "#0ea5e9"
                }
            }, {
                types: ["char"],
                style: {
                    color: "#D16969"
                }
            }]
        },
        W = {
            plain: {
                color: "#0f172a",
                backgroundColor: "#f1f5f9"
            },
            styles: [{
                types: ["prolog"],
                style: {
                    color: "#000080"
                }
            }, {
                types: ["comment"],
                style: {
                    color: "#6A9955"
                }
            }, {
                types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
                style: {
                    color: "#0c4a6e"
                }
            }, {
                types: ["number", "inserted"],
                style: {
                    color: "#B5CEA8"
                }
            }, {
                types: ["constant"],
                style: {
                    color: "#0f172a"
                }
            }, {
                types: ["attr-name", "variable"],
                style: {
                    color: "#0c4a6e"
                }
            }, {
                types: ["deleted", "string", "attr-value", "template-punctuation"],
                style: {
                    color: "#64748b"
                }
            }, {
                types: ["selector"],
                style: {
                    color: "#D7BA7D"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "#0ea5e9"
                }
            }, {
                types: ["tag"],
                languages: ["markup"],
                style: {
                    color: "#0ea5e9"
                }
            }, {
                types: ["punctuation", "operator"],
                style: {
                    color: "#475569"
                }
            }, {
                types: ["punctuation"],
                languages: ["markup"],
                style: {
                    color: "#808080"
                }
            }, {
                types: ["function"],
                style: {
                    color: "#0e7490"
                }
            }, {
                types: ["class-name"],
                style: {
                    color: "#0ea5e9"
                }
            }, {
                types: ["char"],
                style: {
                    color: "#D16969"
                }
            }]
        },
        G = {
            plain: {
                backgroundColor: "hsl(220, 13%, 18%)",
                color: "hsl(220, 14%, 71%)",
                textShadow: "0 1px rgba(0, 0, 0, 0.3)"
            },
            styles: [{
                types: ["comment", "prolog", "cdata"],
                style: {
                    color: "hsl(220, 10%, 40%)"
                }
            }, {
                types: ["doctype", "punctuation", "entity"],
                style: {
                    color: "hsl(220, 14%, 71%)"
                }
            }, {
                types: ["attr-name", "class-name", "maybe-class-name", "boolean", "constant", "number", "atrule"],
                style: {
                    color: "hsl(29, 54%, 61%)"
                }
            }, {
                types: ["keyword"],
                style: {
                    color: "hsl(286, 60%, 67%)"
                }
            }, {
                types: ["property", "tag", "symbol", "deleted", "important"],
                style: {
                    color: "hsl(355, 65%, 65%)"
                }
            }, {
                types: ["selector", "string", "char", "builtin", "inserted", "regex", "attr-value"],
                style: {
                    color: "hsl(95, 38%, 62%)"
                }
            }, {
                types: ["variable", "operator", "function"],
                style: {
                    color: "hsl(207, 82%, 66%)"
                }
            }, {
                types: ["url"],
                style: {
                    color: "hsl(187, 47%, 55%)"
                }
            }, {
                types: ["deleted"],
                style: {
                    textDecorationLine: "line-through"
                }
            }, {
                types: ["inserted"],
                style: {
                    textDecorationLine: "underline"
                }
            }, {
                types: ["italic"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["important", "bold"],
                style: {
                    fontWeight: "bold"
                }
            }, {
                types: ["important"],
                style: {
                    color: "hsl(220, 14%, 71%)"
                }
            }]
        },
        X = {
            plain: {
                backgroundColor: "hsl(230, 1%, 98%)",
                color: "hsl(230, 8%, 24%)"
            },
            styles: [{
                types: ["comment", "prolog", "cdata"],
                style: {
                    color: "hsl(230, 4%, 64%)"
                }
            }, {
                types: ["doctype", "punctuation", "entity"],
                style: {
                    color: "hsl(230, 8%, 24%)"
                }
            }, {
                types: ["attr-name", "class-name", "boolean", "constant", "number", "atrule"],
                style: {
                    color: "hsl(35, 99%, 36%)"
                }
            }, {
                types: ["keyword"],
                style: {
                    color: "hsl(301, 63%, 40%)"
                }
            }, {
                types: ["property", "tag", "symbol", "deleted", "important"],
                style: {
                    color: "hsl(5, 74%, 59%)"
                }
            }, {
                types: ["selector", "string", "char", "builtin", "inserted", "regex", "attr-value", "punctuation"],
                style: {
                    color: "hsl(119, 34%, 47%)"
                }
            }, {
                types: ["variable", "operator", "function"],
                style: {
                    color: "hsl(221, 87%, 60%)"
                }
            }, {
                types: ["url"],
                style: {
                    color: "hsl(198, 99%, 37%)"
                }
            }, {
                types: ["deleted"],
                style: {
                    textDecorationLine: "line-through"
                }
            }, {
                types: ["inserted"],
                style: {
                    textDecorationLine: "underline"
                }
            }, {
                types: ["italic"],
                style: {
                    fontStyle: "italic"
                }
            }, {
                types: ["important", "bold"],
                style: {
                    fontWeight: "bold"
                }
            }, {
                types: ["important"],
                style: {
                    color: "hsl(230, 8%, 24%)"
                }
            }]
        },
        Y = {
            plain: {
                color: "#ebdbb2",
                backgroundColor: "#292828"
            },
            styles: [{
                types: ["imports", "class-name", "maybe-class-name", "constant", "doctype", "builtin", "function"],
                style: {
                    color: "#d8a657"
                }
            }, {
                types: ["property-access"],
                style: {
                    color: "#7daea3"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "#e78a4e"
                }
            }, {
                types: ["attr-name", "char", "url", "regex"],
                style: {
                    color: "#a9b665"
                }
            }, {
                types: ["attr-value", "string"],
                style: {
                    color: "#89b482"
                }
            }, {
                types: ["comment", "prolog", "cdata", "operator", "inserted"],
                style: {
                    color: "#a89984"
                }
            }, {
                types: ["delimiter", "boolean", "keyword", "selector", "important", "atrule", "property", "variable", "deleted"],
                style: {
                    color: "#ea6962"
                }
            }, {
                types: ["entity", "number", "symbol"],
                style: {
                    color: "#d3869b"
                }
            }]
        },
        J = {
            plain: {
                color: "#654735",
                backgroundColor: "#f9f5d7"
            },
            styles: [{
                types: ["delimiter", "boolean", "keyword", "selector", "important", "atrule", "property", "variable", "deleted"],
                style: {
                    color: "#af2528"
                }
            }, {
                types: ["imports", "class-name", "maybe-class-name", "constant", "doctype", "builtin"],
                style: {
                    color: "#b4730e"
                }
            }, {
                types: ["string", "attr-value"],
                style: {
                    color: "#477a5b"
                }
            }, {
                types: ["property-access"],
                style: {
                    color: "#266b79"
                }
            }, {
                types: ["function", "attr-name", "char", "url"],
                style: {
                    color: "#72761e"
                }
            }, {
                types: ["tag"],
                style: {
                    color: "#b94c07"
                }
            }, {
                types: ["comment", "prolog", "cdata", "operator", "inserted"],
                style: {
                    color: "#a89984"
                }
            }, {
                types: ["entity", "number", "symbol"],
                style: {
                    color: "#924f79"
                }
            }]
        },
        Z = (e, t) => {
            const {
                plain: n
            } = e, o = e.styles.reduce(((e, n) => {
                const {
                    languages: o,
                    style: r
                } = n;
                return o && !o.includes(t) || n.types.forEach((t => {
                    const n = w(w({}, e[t]), r);
                    e[t] = n
                })), e
            }), {});
            return o.root = n, o.plain = v(w({}, n), {
                backgroundColor: void 0
            }), o
        },
        Q = /\r\n|\r|\n/,
        ee = e => {
            0 === e.length ? e.push({
                types: ["plain"],
                content: "\n",
                empty: !0
            }) : 1 === e.length && "" === e[0].content && (e[0].content = "\n", e[0].empty = !0)
        },
        te = (e, t) => {
            const n = e.length;
            return n > 0 && e[n - 1] === t ? e : e.concat(t)
        },
        ne = e => {
            const t = [
                    []
                ],
                n = [e],
                o = [0],
                r = [e.length];
            let s = 0,
                a = 0,
                i = [];
            const c = [i];
            for (; a > -1;) {
                for (;
                    (s = o[a]++) < r[a];) {
                    let e, p = t[a];
                    const l = n[a][s];
                    if ("string" == typeof l ? (p = a > 0 ? p : ["plain"], e = l) : (p = te(p, l.type), l.alias && (p = te(p, l.alias)), e = l.content), "string" != typeof e) {
                        a++, t.push(p), n.push(e), o.push(0), r.push(e.length);
                        continue
                    }
                    const u = e.split(Q),
                        h = u.length;
                    i.push({
                        types: p,
                        content: u[0]
                    });
                    for (let e = 1; e < h; e++) ee(i), c.push(i = []), i.push({
                        types: p,
                        content: u[e]
                    })
                }
                a--, t.pop(), n.pop(), o.pop(), r.pop()
            }
            return ee(i), c
        },
        oe = ({
            children: e,
            language: t,
            code: n,
            theme: o,
            prism: r
        }) => {
            const s = t.toLowerCase(),
                a = ((e, t) => {
                    const [n, o] = (0, u.useState)(Z(t, e)), r = (0, u.useRef)(), s = (0, u.useRef)();
                    return (0, u.useEffect)((() => {
                        t === r.current && e === s.current || (r.current = t, s.current = e, o(Z(t, e)))
                    }), [e, t]), n
                })(s, o),
                i = (e => (0, u.useCallback)((t => {
                    var n = t,
                        {
                            className: o,
                            style: r,
                            line: s
                        } = n,
                        a = I(n, ["className", "style", "line"]);
                    const i = v(w({}, a), {
                        className: (0, h.default)("token-line", o)
                    });
                    return "object" == typeof e && "plain" in e && (i.style = e.plain), "object" == typeof r && (i.style = w(w({}, i.style || {}), r)), i
                }), [e]))(a),
                c = (e => {
                    const t = (0, u.useCallback)((({
                        types: t,
                        empty: n
                    }) => {
                        if (null != e) return 1 === t.length && "plain" === t[0] ? null != n ? {
                            display: "inline-block"
                        } : void 0 : 1 === t.length && null != n ? e[t[0]] : Object.assign(null != n ? {
                            display: "inline-block"
                        } : {}, ...t.map((t => e[t])))
                    }), [e]);
                    return (0, u.useCallback)((e => {
                        var n = e,
                            {
                                token: o,
                                className: r,
                                style: s
                            } = n,
                            a = I(n, ["token", "className", "style"]);
                        const i = v(w({}, a), {
                            className: (0, h.default)("token", ...o.types, r),
                            children: o.content,
                            style: t(o)
                        });
                        return null != s && (i.style = w(w({}, i.style || {}), s)), i
                    }), [t])
                })(a),
                p = (({
                    prism: e,
                    code: t,
                    grammar: n,
                    language: o
                }) => {
                    const r = (0, u.useRef)(e);
                    return (0, u.useMemo)((() => {
                        if (null == n) return ne([t]);
                        const e = {
                            code: t,
                            grammar: n,
                            language: o,
                            tokens: []
                        };
                        return r.current.hooks.run("before-tokenize", e), e.tokens = r.current.tokenize(t, n), r.current.hooks.run("after-tokenize", e), ne(e.tokens)
                    }), [t, n, o])
                })({
                    prism: r,
                    language: s,
                    code: n,
                    grammar: r.languages[s]
                });
            return e({
                tokens: p,
                className: `prism-code language-${s}`,
                style: null != a ? a.root : {},
                getLineProps: i,
                getTokenProps: c
            })
        },
        re = e => (0, u.createElement)(oe, v(w({}, e), {
            prism: e.prism || S,
            theme: e.theme || U,
            code: e.code,
            language: e.language
        }))
    /*! Bundled license information:

    prismjs/prism.js:
      (**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       *)
    */
})), n.register("754Yc", (function(e, n) {
    function o(e) {
        var t, n, r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
            if (Array.isArray(e)) {
                var s = e.length;
                for (t = 0; t < s; t++) e[t] && (n = o(e[t])) && (r && (r += " "), r += n)
            } else
                for (n in e) e[n] && (r && (r += " "), r += n);
        return r
    }
    t(e.exports, "default", (function() {
        return r
    }));
    var r = function() {
        for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)(e = arguments[n]) && (t = o(e)) && (r && (r += " "), r += t);
        return r
    }
})), n.register("d3EZw", (function(e, o) {
    t(e.exports, "useEditable", (function() {
        return u
    }));
    var r = n("fywoC"),
        s = {
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        };

    function a(e) {
        var t = window.getSelection();
        t.empty(), t.addRange(e)
    }

    function i(e) {
        return (e.metaKey || e.ctrlKey) && !e.altKey && "KeyZ" === e.code
    }

    function c(e) {
        e = [e.firstChild];
        for (var t, n = ""; t = e.pop();) t.nodeType === Node.TEXT_NODE ? n += t.textContent : t.nodeType === Node.ELEMENT_NODE && "BR" === t.nodeName && (n += "\n"), t.nextSibling && e.push(t.nextSibling), t.firstChild && e.push(t.firstChild);
        return "\n" !== n[n.length - 1] && (n += "\n"), n
    }

    function p(e) {
        var t = window.getSelection().getRangeAt(0),
            n = t.collapsed ? 0 : t.toString().length,
            o = document.createRange();
        return o.setStart(e, 0), o.setEnd(t.startContainer, t.startOffset), {
            position: e = (o = o.toString()).length,
            extent: n,
            content: o = (o = o.split("\n"))[t = o.length - 1],
            line: t
        }
    }

    function l(e, t, n) {
        0 >= t && (t = 0), (!n || 0 > n) && (n = t);
        var o = document.createRange();
        e = [e.firstChild];
        for (var r, s = 0, a = t; r = e[e.length - 1];) {
            if (r.nodeType === Node.TEXT_NODE) {
                if (s + r.textContent.length >= a) {
                    var i = a - s;
                    if (a === t) {
                        if (a = o, i < r.textContent.length ? a.setStart(r, i) : a.setStartAfter(r), n !== t) {
                            a = n;
                            continue
                        }
                        break
                    }
                    t = o, i < (n = r).textContent.length ? t.setEnd(n, i) : t.setEndAfter(n);
                    break
                }
                s += r.textContent.length
            } else if (r.nodeType === Node.ELEMENT_NODE && "BR" === r.nodeName) {
                if (s + 1 >= a) {
                    if (a === t) {
                        if (i = o, 0 < r.textContent.length ? i.setStart(r, 0) : i.setStartAfter(r), n !== t) {
                            a = n;
                            continue
                        }
                        break
                    }
                    t = o, 0 < (n = r).textContent.length ? t.setEnd(n, 0) : t.setEndAfter(n);
                    break
                }
                s++
            }
            e.pop(), r.nextSibling && e.push(r.nextSibling), r.firstChild && e.push(r.firstChild)
        }
        return o
    }

    function u(e, t, n) {
        function o(t) {
            var n = e.current;
            if (n) {
                var o = p(n);
                n = c(n), o.position += t.length - n.length, f.position = o, f.onChange(t, o)
            }
        }

        function u(t, n) {
            var o = e.current;
            if (o) {
                var r = window.getSelection().getRangeAt(0);
                r.deleteContents(), r.collapse();
                var s = n || 0;
                (r = l(o, n = (r = p(o)).position + (0 > s ? s : 0), r.position + (0 < s ? s : 0))).deleteContents(), t && r.insertNode(document.createTextNode(t)), a(l(o, n + t.length))
            }
        }

        function h(t) {
            var n = e.current;
            if (n) {
                n.focus();
                var o = 0;
                if ("number" == typeof t) o = t;
                else {
                    var r = c(n).split("\n").slice(0, t.row);
                    t.row && (o += r.join("\n").length + 1), o += t.column
                }
                a(l(n, o))
            }
        }

        function d() {
            var t = e.current;
            return {
                text: c(t),
                position: t = p(t)
            }
        }

        function T() {
            f.observer.disconnect()
        }
        n || (n = {});
        var y = (0, r.useState)([])[1],
            f = (0, r.useState)((function() {
                var e = {
                    observer: null,
                    disconnected: !1,
                    onChange: t,
                    queue: [],
                    history: [],
                    historyAt: -1,
                    position: null
                };
                return "undefined" != typeof MutationObserver && (e.observer = new MutationObserver((function(t) {
                    var n;
                    (n = e.queue).push.apply(n, t)
                }))), e
            }))[0],
            k = (0, r.useMemo)((function() {
                return {
                    update: o,
                    insert: u,
                    move: h,
                    getState: d
                }
            }), []);
        return "object" != typeof navigator || ((0, r.useLayoutEffect)((function() {
            if (f.onChange = t, e.current && !n.disabled) {
                if (f.disconnected = !1, f.observer.observe(e.current, s), f.position) {
                    var o = f.position,
                        r = o.position;
                    a(l(e.current, r, r + o.extent))
                }
                return T
            }
        })), (0, r.useLayoutEffect)((function() {
            if (e.current && !n.disabled) {
                var t = e.current;
                if (f.position) {
                    t.focus();
                    var o = f.position,
                        r = o.position;
                    a(l(t, r, r + o.extent))
                }
                var s = t.style.whiteSpace,
                    u = t.contentEditable,
                    h = !0;
                try {
                    t.contentEditable = "plaintext-only"
                } catch (e) {
                    t.contentEditable = "true", h = !1
                }
                "pre" !== s && (t.style.whiteSpace = "pre-wrap"), n.indentation && (t.style.tabSize = t.style.MozTabSize = "" + n.indentation), o = "" + " ".repeat(n.indentation || 0);
                var d, T = new RegExp("^(?:" + o + ")"),
                    m = new RegExp("^(?:" + o + ")*(" + o + ")$"),
                    g = function(n) {
                        if (e.current && f.position) {
                            var o = c(t),
                                r = p(t),
                                s = (new Date).valueOf(),
                                a = f.history[f.historyAt];
                            !n && 500 > s - d || a && a[1] === o ? d = s : (n = ++f.historyAt, f.history[n] = [r, o], f.history.splice(n + 1), 500 < n && (f.historyAt--, f.history.shift()))
                        }
                    },
                    x = function() {
                        var e;
                        if ((e = f.queue).push.apply(e, f.observer.takeRecords()), e = p(t), f.queue.length) {
                            f.observer.disconnect(), f.disconnected = !0;
                            var n, o, r = c(t);
                            for (f.position = e; n = f.queue.pop();) {
                                for (null !== n.oldValue && (n.target.textContent = n.oldValue), o = n.removedNodes.length - 1; 0 <= o; o--) n.target.insertBefore(n.removedNodes[o], n.nextSibling);
                                for (o = n.addedNodes.length - 1; 0 <= o; o--) n.addedNodes[o].parentNode && n.target.removeChild(n.addedNodes[o])
                            }
                            f.onChange(r, e)
                        }
                    },
                    b = function(e) {
                        if (!e.defaultPrevented && e.target === t) {
                            if (f.disconnected) return e.preventDefault(), y([]);
                            if (i(e)) e.preventDefault(), e.shiftKey ? (e = ++f.historyAt, (e = f.history[e]) || (f.historyAt = f.history.length - 1)) : (e = --f.historyAt, (e = f.history[e]) || (f.historyAt = 0)), e && (f.observer.disconnect(), f.disconnected = !0, f.position = e[0], f.onChange(e[1], e[0]));
                            else {
                                if (g(), "Enter" === e.key) {
                                    e.preventDefault();
                                    var o = p(t),
                                        r = /\S/g.exec(o.content);
                                    o = "\n" + o.content.slice(0, r ? r.index : o.content.length), k.insert(o)
                                } else if (h && !n.indentation || "Backspace" !== e.key) {
                                    if (n.indentation && "Tab" === e.key) {
                                        e.preventDefault(), r = (o = p(t)).position - o.content.length;
                                        var s = c(t);
                                        o = e.shiftKey ? s.slice(0, r) + o.content.replace(T, "") + s.slice(r + o.content.length) : s.slice(0, r) + (n.indentation ? " ".repeat(n.indentation) : "\t") + s.slice(r), k.update(o)
                                    }
                                } else e.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (o = p(t), o = m.exec(o.content), k.insert("", o ? -o[1].length : -1)) : k.insert("", 0);
                                e.repeat && x()
                            }
                        }
                    },
                    C = function(e) {
                        e.defaultPrevented || e.isComposing || (i(e) || g(), x(), t.focus())
                    },
                    _ = function(e) {
                        f.position = window.getSelection().rangeCount && e.target === t ? p(t) : null
                    },
                    w = function(e) {
                        e.preventDefault(), g(!0), k.insert(e.clipboardData.getData("text/plain")), g(!0), x()
                    };
                return document.addEventListener("selectstart", _), window.addEventListener("keydown", b), t.addEventListener("paste", w), t.addEventListener("keyup", C),
                    function() {
                        document.removeEventListener("selectstart", _), window.removeEventListener("keydown", b), t.removeEventListener("paste", w), t.removeEventListener("keyup", C), t.style.whiteSpace = s, t.contentEditable = u
                    }
            }
            f.history.length = 0, f.historyAt = -1
        }), [e.current, n.disabled, n.indentation])), k
    }
})), n.register("2nfTP", (function(e, o) {
    t(e.exports, "transform", (function() {
        return T
    }));
    var r = n("5cs3d"),
        s = n("cc1ik"),
        a = n("4RO5f"),
        i = n("bZWKy"),
        c = n("8hynp"),
        p = n("j6k02"),
        l = n("9d93y"),
        u = n("gzntO"),
        h = n("NhrR1"),
        d = (n("7halY"), n("h1kwt"));

    function T(e, t) {
        (0, p.validateOptions)(t);
        try {
            const n = y(e, t),
                o = new(0, h.default)(n, t.transforms, Boolean(t.enableLegacyBabel5ModuleInterop), t).transform();
            let r = {
                code: o.code
            };
            if (t.sourceMapOptions) {
                if (!t.filePath) throw new Error("filePath must be specified when generating a source map.");
                r = {
                    ...r,
                    sourceMap: (0, s.default)(o, t.filePath, t.sourceMapOptions, e, n.tokenProcessor.tokens)
                }
            }
            return r
        } catch (e) {
            throw t.filePath && (e.message = `Error transforming ${t.filePath}: ${e.message}`), e
        }
    }

    function y(e, t) {
        const n = t.transforms.includes("jsx"),
            o = t.transforms.includes("typescript"),
            s = t.transforms.includes("flow"),
            p = !0 === t.disableESTransforms,
            h = (0, l.parse)(e, n, o, s),
            T = h.tokens,
            y = h.scopes,
            f = new(0, c.default)(e, T),
            k = new(0, a.HelperManager)(f),
            m = new(0, u.default)(e, T, s, p, k),
            g = Boolean(t.enableLegacyTypeScriptModuleInterop);
        let x = null;
        return t.transforms.includes("imports") ? (x = new(0, r.default)(f, m, g, t, t.transforms.includes("typescript"), Boolean(t.keepUnusedImports), k), x.preprocessTokens(), (0, i.default)(m, y, x.getGlobalNames()), t.transforms.includes("typescript") && !t.keepUnusedImports && x.pruneTypeOnlyImports()) : t.transforms.includes("typescript") && !t.keepUnusedImports && (0, i.default)(m, y, (0, d.default)(m)), {
            tokenProcessor: m,
            scopes: y,
            nameManager: f,
            importProcessor: x,
            helperManager: k
        }
    }
})), n.register("5cs3d", (function(e, o) {
    t(e.exports, "default", (function() {
        return p
    }));
    var r = n("9OJHt"),
        s = n("46D9g"),
        a = n("31VH2"),
        i = n("2eIOH"),
        c = n("6wRe0");
    class p {
        __init() {
            this.nonTypeIdentifiers = new Set
        }
        __init2() {
            this.importInfoByPath = new Map
        }
        __init3() {
            this.importsToReplace = new Map
        }
        __init4() {
            this.identifierReplacements = new Map
        }
        __init5() {
            this.exportBindingsByLocalName = new Map
        }
        preprocessTokens() {
            for (let e = 0; e < this.tokens.tokens.length; e++) this.tokens.matches1AtIndex(e, a.TokenType._import) && !this.tokens.matches3AtIndex(e, a.TokenType._import, a.TokenType.name, a.TokenType.eq) && this.preprocessImportAtIndex(e), this.tokens.matches1AtIndex(e, a.TokenType._export) && !this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType.eq) && this.preprocessExportAtIndex(e);
            this.generateImportReplacements()
        }
        pruneTypeOnlyImports() {
            this.nonTypeIdentifiers = (0, c.getNonTypeIdentifiers)(this.tokens, this.options);
            for (const [e, t] of this.importInfoByPath.entries()) {
                if (t.hasBareImport || t.hasStarExport || t.exportStarNames.length > 0 || t.namedExports.length > 0) continue;
                [...t.defaultNames, ...t.wildcardNames, ...t.namedImports.map((({
                    localName: e
                }) => e))].every((e => this.shouldAutomaticallyElideImportedName(e))) && this.importsToReplace.set(e, "")
            }
        }
        shouldAutomaticallyElideImportedName(e) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(e)
        }
        generateImportReplacements() {
            for (const [e, t] of this.importInfoByPath.entries()) {
                const {
                    defaultNames: n,
                    wildcardNames: o,
                    namedImports: r,
                    namedExports: s,
                    exportStarNames: a,
                    hasStarExport: i
                } = t;
                if (0 === n.length && 0 === o.length && 0 === r.length && 0 === s.length && 0 === a.length && !i) {
                    this.importsToReplace.set(e, `require('${e}');`);
                    continue
                }
                const c = this.getFreeIdentifierForPath(e);
                let p;
                p = this.enableLegacyTypeScriptModuleInterop ? c : o.length > 0 ? o[0] : this.getFreeIdentifierForPath(e);
                let l = `var ${c} = require('${e}');`;
                if (o.length > 0)
                    for (const e of o) {
                        l += ` var ${e} = ${this.enableLegacyTypeScriptModuleInterop?c:`${this.helperManager.getHelperName("interopRequireWildcard")}(${c})`};`
                    } else a.length > 0 && p !== c ? l += ` var ${p} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${c});` : n.length > 0 && p !== c && (l += ` var ${p} = ${this.helperManager.getHelperName("interopRequireDefault")}(${c});`);
                for (const {
                        importedName: e,
                        localName: t
                    }
                    of s) l += ` ${this.helperManager.getHelperName("createNamedExportFrom")}(${c}, '${t}', '${e}');`;
                for (const e of a) l += ` exports.${e} = ${p};`;
                i && (l += ` ${this.helperManager.getHelperName("createStarExport")}(${c});`), this.importsToReplace.set(e, l);
                for (const e of n) this.identifierReplacements.set(e, `${p}.default`);
                for (const {
                        importedName: e,
                        localName: t
                    }
                    of r) this.identifierReplacements.set(t, `${c}.${e}`)
            }
        }
        getFreeIdentifierForPath(e) {
            const t = e.split("/"),
                n = t[t.length - 1].replace(/\W/g, "");
            return this.nameManager.claimFreeName(`_${n}`)
        }
        preprocessImportAtIndex(e) {
            const t = [],
                n = [],
                o = [];
            if (e++, (this.tokens.matchesContextualAtIndex(e, s.ContextualKeyword._type) || this.tokens.matches1AtIndex(e, a.TokenType._typeof)) && !this.tokens.matches1AtIndex(e + 1, a.TokenType.comma) && !this.tokens.matchesContextualAtIndex(e + 1, s.ContextualKeyword._from)) return;
            if (this.tokens.matches1AtIndex(e, a.TokenType.parenL)) return;
            if (this.tokens.matches1AtIndex(e, a.TokenType.name) && (t.push(this.tokens.identifierNameAtIndex(e)), e++, this.tokens.matches1AtIndex(e, a.TokenType.comma) && e++), this.tokens.matches1AtIndex(e, a.TokenType.star) && (e += 2, n.push(this.tokens.identifierNameAtIndex(e)), e++), this.tokens.matches1AtIndex(e, a.TokenType.braceL)) {
                const n = this.getNamedImports(e + 1);
                e = n.newIndex;
                for (const e of n.namedImports) "default" === e.importedName ? t.push(e.localName) : o.push(e)
            }
            if (this.tokens.matchesContextualAtIndex(e, s.ContextualKeyword._from) && e++, !this.tokens.matches1AtIndex(e, a.TokenType.string)) throw new Error("Expected string token at the end of import statement.");
            const r = this.tokens.stringValueAtIndex(e),
                i = this.getImportInfo(r);
            i.defaultNames.push(...t), i.wildcardNames.push(...n), i.namedImports.push(...o), 0 === t.length && 0 === n.length && 0 === o.length && (i.hasBareImport = !0)
        }
        preprocessExportAtIndex(e) {
            if (this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType._var) || this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType._let) || this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType._const)) this.preprocessVarExportAtIndex(e);
            else if (this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType._function) || this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType._class)) {
                const t = this.tokens.identifierNameAtIndex(e + 2);
                this.addExportBinding(t, t)
            } else if (this.tokens.matches3AtIndex(e, a.TokenType._export, a.TokenType.name, a.TokenType._function)) {
                const t = this.tokens.identifierNameAtIndex(e + 3);
                this.addExportBinding(t, t)
            } else this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType.braceL) ? this.preprocessNamedExportAtIndex(e) : this.tokens.matches2AtIndex(e, a.TokenType._export, a.TokenType.star) && this.preprocessExportStarAtIndex(e)
        }
        preprocessVarExportAtIndex(e) {
            let t = 0;
            for (let n = e + 2;; n++)
                if (this.tokens.matches1AtIndex(n, a.TokenType.braceL) || this.tokens.matches1AtIndex(n, a.TokenType.dollarBraceL) || this.tokens.matches1AtIndex(n, a.TokenType.bracketL)) t++;
                else if (this.tokens.matches1AtIndex(n, a.TokenType.braceR) || this.tokens.matches1AtIndex(n, a.TokenType.bracketR)) t--;
            else {
                if (0 === t && !this.tokens.matches1AtIndex(n, a.TokenType.name)) break;
                if (this.tokens.matches1AtIndex(1, a.TokenType.eq)) {
                    const e = this.tokens.currentToken().rhsEndIndex;
                    if (null == e) throw new Error("Expected = token with an end index.");
                    n = e - 1
                } else {
                    const e = this.tokens.tokens[n];
                    if ((0, r.isDeclaration)(e)) {
                        const e = this.tokens.identifierNameAtIndex(n);
                        this.identifierReplacements.set(e, `exports.${e}`)
                    }
                }
            }
        }
        preprocessNamedExportAtIndex(e) {
            e += 2;
            const {
                newIndex: t,
                namedImports: n
            } = this.getNamedImports(e);
            if (e = t, !this.tokens.matchesContextualAtIndex(e, s.ContextualKeyword._from)) {
                for (const {
                        importedName: e,
                        localName: t
                    }
                    of n) this.addExportBinding(e, t);
                return
            }
            if (e++, !this.tokens.matches1AtIndex(e, a.TokenType.string)) throw new Error("Expected string token at the end of import statement.");
            const o = this.tokens.stringValueAtIndex(e);
            this.getImportInfo(o).namedExports.push(...n)
        }
        preprocessExportStarAtIndex(e) {
            let t = null;
            if (this.tokens.matches3AtIndex(e, a.TokenType._export, a.TokenType.star, a.TokenType._as) ? (e += 3, t = this.tokens.identifierNameAtIndex(e), e += 2) : e += 3, !this.tokens.matches1AtIndex(e, a.TokenType.string)) throw new Error("Expected string token at the end of star export statement.");
            const n = this.tokens.stringValueAtIndex(e),
                o = this.getImportInfo(n);
            null !== t ? o.exportStarNames.push(t) : o.hasStarExport = !0
        }
        getNamedImports(e) {
            const t = [];
            for (;;) {
                if (this.tokens.matches1AtIndex(e, a.TokenType.braceR)) {
                    e++;
                    break
                }
                const n = (0, i.default)(this.tokens, e);
                if (e = n.endIndex, n.isType || t.push({
                        importedName: n.leftName,
                        localName: n.rightName
                    }), this.tokens.matches2AtIndex(e, a.TokenType.comma, a.TokenType.braceR)) {
                    e += 2;
                    break
                }
                if (this.tokens.matches1AtIndex(e, a.TokenType.braceR)) {
                    e++;
                    break
                }
                if (!this.tokens.matches1AtIndex(e, a.TokenType.comma)) throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[e])}`);
                e++
            }
            return {
                newIndex: e,
                namedImports: t
            }
        }
        getImportInfo(e) {
            const t = this.importInfoByPath.get(e);
            if (t) return t;
            const n = {
                defaultNames: [],
                wildcardNames: [],
                namedImports: [],
                namedExports: [],
                hasBareImport: !1,
                exportStarNames: [],
                hasStarExport: !1
            };
            return this.importInfoByPath.set(e, n), n
        }
        addExportBinding(e, t) {
            this.exportBindingsByLocalName.has(e) || this.exportBindingsByLocalName.set(e, []), this.exportBindingsByLocalName.get(e).push(t)
        }
        claimImportCode(e) {
            const t = this.importsToReplace.get(e);
            return this.importsToReplace.set(e, ""), t || ""
        }
        getIdentifierReplacement(e) {
            return this.identifierReplacements.get(e) || null
        }
        resolveExportBinding(e) {
            const t = this.exportBindingsByLocalName.get(e);
            return t && 0 !== t.length ? t.map((e => `exports.${e}`)).join(" = ") : null
        }
        getGlobalNames() {
            return new Set([...this.identifierReplacements.keys(), ...this.exportBindingsByLocalName.keys()])
        }
        constructor(e, t, n, o, r, s, a) {
            this.nameManager = e, this.tokens = t, this.enableLegacyTypeScriptModuleInterop = n, this.options = o, this.isTypeScriptTransformEnabled = r, this.keepUnusedImports = s, this.helperManager = a, p.prototype.__init.call(this), p.prototype.__init2.call(this), p.prototype.__init3.call(this), p.prototype.__init4.call(this), p.prototype.__init5.call(this)
        }
    }
})), n.register("9OJHt", (function(e, o) {
    t(e.exports, "IdentifierRole", (function() {
        return r
    })), t(e.exports, "JSXRole", (function() {
        return s
    })), t(e.exports, "isDeclaration", (function() {
        return T
    })), t(e.exports, "isNonTopLevelDeclaration", (function() {
        return y
    })), t(e.exports, "isTopLevelDeclaration", (function() {
        return f
    })), t(e.exports, "isBlockScopedDeclaration", (function() {
        return k
    })), t(e.exports, "isFunctionScopedDeclaration", (function() {
        return m
    })), t(e.exports, "isObjectShorthandDeclaration", (function() {
        return g
    })), t(e.exports, "Token", (function() {
        return x
    })), t(e.exports, "next", (function() {
        return b
    })), t(e.exports, "nextToken", (function() {
        return O
    })), t(e.exports, "nextTemplateToken", (function() {
        return C
    })), t(e.exports, "retokenizeSlashAsRegex", (function() {
        return _
    })), t(e.exports, "pushTypeContext", (function() {
        return w
    })), t(e.exports, "popTypeContext", (function() {
        return v
    })), t(e.exports, "eat", (function() {
        return I
    })), t(e.exports, "match", (function() {
        return S
    })), t(e.exports, "eatTypeToken", (function() {
        return E
    })), t(e.exports, "lookaheadType", (function() {
        return A
    })), t(e.exports, "lookaheadTypeAndKeyword", (function() {
        return N
    })), t(e.exports, "nextTokenStart", (function() {
        return L
    })), t(e.exports, "nextTokenStartSince", (function() {
        return F
    })), t(e.exports, "lookaheadCharCode", (function() {
        return P
    })), t(e.exports, "skipSpace", (function() {
        return B
    })), t(e.exports, "finishToken", (function() {
        return K
    })), t(e.exports, "getTokenFromCode", (function() {
        return q
    })), t(e.exports, "skipLineComment", (function() {
        return j
    })), t(e.exports, "rescan_gt", (function() {
        return M
    }));
    var r, s, a = n("kk1e5"),
        i = n("5ofYc"),
        c = n("8s4y4"),
        p = n("kwcE7"),
        l = n("cTeR6"),
        u = n("46D9g"),
        h = n("bMvXE"),
        d = n("31VH2");

    function T(e) {
        const t = e.identifierRole;
        return t === r.TopLevelDeclaration || t === r.FunctionScopedDeclaration || t === r.BlockScopedDeclaration || t === r.ObjectShorthandTopLevelDeclaration || t === r.ObjectShorthandFunctionScopedDeclaration || t === r.ObjectShorthandBlockScopedDeclaration
    }

    function y(e) {
        const t = e.identifierRole;
        return t === r.FunctionScopedDeclaration || t === r.BlockScopedDeclaration || t === r.ObjectShorthandFunctionScopedDeclaration || t === r.ObjectShorthandBlockScopedDeclaration
    }

    function f(e) {
        const t = e.identifierRole;
        return t === r.TopLevelDeclaration || t === r.ObjectShorthandTopLevelDeclaration || t === r.ImportDeclaration
    }

    function k(e) {
        const t = e.identifierRole;
        return t === r.TopLevelDeclaration || t === r.BlockScopedDeclaration || t === r.ObjectShorthandTopLevelDeclaration || t === r.ObjectShorthandBlockScopedDeclaration
    }

    function m(e) {
        const t = e.identifierRole;
        return t === r.FunctionScopedDeclaration || t === r.ObjectShorthandFunctionScopedDeclaration
    }

    function g(e) {
        return e.identifierRole === r.ObjectShorthandTopLevelDeclaration || e.identifierRole === r.ObjectShorthandBlockScopedDeclaration || e.identifierRole === r.ObjectShorthandFunctionScopedDeclaration
    }! function(e) {
        e[e.Access = 0] = "Access";
        e[e.ExportAccess = 1] = "ExportAccess";
        e[e.TopLevelDeclaration = 2] = "TopLevelDeclaration";
        e[e.FunctionScopedDeclaration = 3] = "FunctionScopedDeclaration";
        e[e.BlockScopedDeclaration = 4] = "BlockScopedDeclaration";
        e[e.ObjectShorthandTopLevelDeclaration = 5] = "ObjectShorthandTopLevelDeclaration";
        e[e.ObjectShorthandFunctionScopedDeclaration = 6] = "ObjectShorthandFunctionScopedDeclaration";
        e[e.ObjectShorthandBlockScopedDeclaration = 7] = "ObjectShorthandBlockScopedDeclaration";
        e[e.ObjectShorthand = 8] = "ObjectShorthand";
        e[e.ImportDeclaration = 9] = "ImportDeclaration";
        e[e.ObjectKey = 10] = "ObjectKey";
        e[e.ImportAccess = 11] = "ImportAccess"
    }(r || (r = {})),
    function(e) {
        e[e.NoChildren = 0] = "NoChildren";
        e[e.OneChild = 1] = "OneChild";
        e[e.StaticChildren = 2] = "StaticChildren";
        e[e.KeyAfterPropSpread = 3] = "KeyAfterPropSpread"
    }(s || (s = {}));
    class x {
        constructor() {
            this.type = a.state.type, this.contextualKeyword = a.state.contextualKeyword, this.start = a.state.start, this.end = a.state.end, this.scopeDepth = a.state.scopeDepth, this.isType = a.state.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null
        }
    }

    function b() {
        a.state.tokens.push(new x), O()
    }

    function C() {
        a.state.tokens.push(new x), a.state.start = a.state.pos,
            function() {
                for (;;) {
                    if (a.state.pos >= a.input.length) return void(0, i.unexpected)("Unterminated template");
                    const e = a.input.charCodeAt(a.state.pos);
                    if (e === c.charCodes.graveAccent || e === c.charCodes.dollarSign && a.input.charCodeAt(a.state.pos + 1) === c.charCodes.leftCurlyBrace) return a.state.pos === a.state.start && S(d.TokenType.template) ? e === c.charCodes.dollarSign ? (a.state.pos += 2, void K(d.TokenType.dollarBraceL)) : (++a.state.pos, void K(d.TokenType.backQuote)) : void K(d.TokenType.template);
                    e === c.charCodes.backslash && a.state.pos++, a.state.pos++
                }
            }()
    }

    function _() {
        a.state.type === d.TokenType.assign && --a.state.pos,
            function() {
                const e = a.state.pos;
                let t = !1,
                    n = !1;
                for (;;) {
                    if (a.state.pos >= a.input.length) return void(0, i.unexpected)("Unterminated regular expression", e);
                    const o = a.input.charCodeAt(a.state.pos);
                    if (t) t = !1;
                    else {
                        if (o === c.charCodes.leftSquareBracket) n = !0;
                        else if (o === c.charCodes.rightSquareBracket && n) n = !1;
                        else if (o === c.charCodes.slash && !n) break;
                        t = o === c.charCodes.backslash
                    }++a.state.pos
                }++a.state.pos,
                    function() {
                        for (; a.state.pos < a.input.length;) {
                            const e = a.input.charCodeAt(a.state.pos);
                            if (p.IS_IDENTIFIER_CHAR[e]) a.state.pos++;
                            else {
                                if (e !== c.charCodes.backslash) break;
                                if (a.state.pos += 2, a.input.charCodeAt(a.state.pos) === c.charCodes.leftCurlyBrace) {
                                    for (; a.state.pos < a.input.length && a.input.charCodeAt(a.state.pos) !== c.charCodes.rightCurlyBrace;) a.state.pos++;
                                    a.state.pos++
                                }
                            }
                        }
                    }(), K(d.TokenType.regexp)
            }()
    }

    function w(e) {
        for (let t = a.state.tokens.length - e; t < a.state.tokens.length; t++) a.state.tokens[t].isType = !0;
        const t = a.state.isType;
        return a.state.isType = !0, t
    }

    function v(e) {
        a.state.isType = e
    }

    function I(e) {
        return !!S(e) && (b(), !0)
    }

    function E(e) {
        const t = a.state.isType;
        a.state.isType = !0, I(e), a.state.isType = t
    }

    function S(e) {
        return a.state.type === e
    }

    function A() {
        const e = a.state.snapshot();
        b();
        const t = a.state.type;
        return a.state.restoreFromSnapshot(e), t
    }
    class R {
        constructor(e, t) {
            this.type = e, this.contextualKeyword = t
        }
    }

    function N() {
        const e = a.state.snapshot();
        b();
        const t = a.state.type,
            n = a.state.contextualKeyword;
        return a.state.restoreFromSnapshot(e), new R(t, n)
    }

    function L() {
        return F(a.state.pos)
    }

    function F(e) {
        l.skipWhiteSpace.lastIndex = e;
        return e + l.skipWhiteSpace.exec(a.input)[0].length
    }

    function P() {
        return a.input.charCodeAt(L())
    }

    function O() {
        if (B(), a.state.start = a.state.pos, a.state.pos >= a.input.length) {
            const e = a.state.tokens;
            return e.length >= 2 && e[e.length - 1].start >= a.input.length && e[e.length - 2].start >= a.input.length && (0, i.unexpected)("Unexpectedly reached the end of input."), void K(d.TokenType.eof)
        }
        var e;
        e = a.input.charCodeAt(a.state.pos), p.IS_IDENTIFIER_START[e] || e === c.charCodes.backslash || e === c.charCodes.atSign && a.input.charCodeAt(a.state.pos + 1) === c.charCodes.atSign ? (0, h.default)() : q(e)
    }

    function D() {
        for (; a.input.charCodeAt(a.state.pos) !== c.charCodes.asterisk || a.input.charCodeAt(a.state.pos + 1) !== c.charCodes.slash;)
            if (a.state.pos++, a.state.pos > a.input.length) return void(0, i.unexpected)("Unterminated comment", a.state.pos - 2);
        a.state.pos += 2
    }

    function j(e) {
        let t = a.input.charCodeAt(a.state.pos += e);
        if (a.state.pos < a.input.length)
            for (; t !== c.charCodes.lineFeed && t !== c.charCodes.carriageReturn && t !== c.charCodes.lineSeparator && t !== c.charCodes.paragraphSeparator && ++a.state.pos < a.input.length;) t = a.input.charCodeAt(a.state.pos)
    }

    function B() {
        for (; a.state.pos < a.input.length;) {
            const e = a.input.charCodeAt(a.state.pos);
            switch (e) {
                case c.charCodes.carriageReturn:
                    a.input.charCodeAt(a.state.pos + 1) === c.charCodes.lineFeed && ++a.state.pos;
                case c.charCodes.lineFeed:
                case c.charCodes.lineSeparator:
                case c.charCodes.paragraphSeparator:
                    ++a.state.pos;
                    break;
                case c.charCodes.slash:
                    switch (a.input.charCodeAt(a.state.pos + 1)) {
                        case c.charCodes.asterisk:
                            a.state.pos += 2, D();
                            break;
                        case c.charCodes.slash:
                            j(2);
                            break;
                        default:
                            return
                    }
                    break;
                default:
                    if (!l.IS_WHITESPACE[e]) return;
                    ++a.state.pos
            }
        }
    }

    function K(e, t = u.ContextualKeyword.NONE) {
        a.state.end = a.state.pos, a.state.type = e, a.state.contextualKeyword = t
    }

    function $() {
        if (a.state.isType) return void H(d.TokenType.greaterThan, 1);
        const e = a.input.charCodeAt(a.state.pos + 1);
        if (e === c.charCodes.greaterThan) {
            const e = a.input.charCodeAt(a.state.pos + 2) === c.charCodes.greaterThan ? 3 : 2;
            return a.input.charCodeAt(a.state.pos + e) === c.charCodes.equalsTo ? void H(d.TokenType.assign, e + 1) : void H(d.TokenType.bitShiftR, e)
        }
        e === c.charCodes.equalsTo ? H(d.TokenType.relationalOrEqual, 2) : H(d.TokenType.greaterThan, 1)
    }

    function M() {
        a.state.type === d.TokenType.greaterThan && (a.state.pos -= 1, $())
    }

    function q(e) {
        switch (e) {
            case c.charCodes.numberSign:
                return ++a.state.pos, void K(d.TokenType.hash);
            case c.charCodes.dot:
                return void
                function() {
                    const e = a.input.charCodeAt(a.state.pos + 1);
                    e >= c.charCodes.digit0 && e <= c.charCodes.digit9 ? V(!0) : e === c.charCodes.dot && a.input.charCodeAt(a.state.pos + 2) === c.charCodes.dot ? (a.state.pos += 3, K(d.TokenType.ellipsis)) : (++a.state.pos, K(d.TokenType.dot))
                }();
            case c.charCodes.leftParenthesis:
                return ++a.state.pos, void K(d.TokenType.parenL);
            case c.charCodes.rightParenthesis:
                return ++a.state.pos, void K(d.TokenType.parenR);
            case c.charCodes.semicolon:
                return ++a.state.pos, void K(d.TokenType.semi);
            case c.charCodes.comma:
                return ++a.state.pos, void K(d.TokenType.comma);
            case c.charCodes.leftSquareBracket:
                return ++a.state.pos, void K(d.TokenType.bracketL);
            case c.charCodes.rightSquareBracket:
                return ++a.state.pos, void K(d.TokenType.bracketR);
            case c.charCodes.leftCurlyBrace:
                return void(a.isFlowEnabled && a.input.charCodeAt(a.state.pos + 1) === c.charCodes.verticalBar ? H(d.TokenType.braceBarL, 2) : (++a.state.pos, K(d.TokenType.braceL)));
            case c.charCodes.rightCurlyBrace:
                return ++a.state.pos, void K(d.TokenType.braceR);
            case c.charCodes.colon:
                return void(a.input.charCodeAt(a.state.pos + 1) === c.charCodes.colon ? H(d.TokenType.doubleColon, 2) : (++a.state.pos, K(d.TokenType.colon)));
            case c.charCodes.questionMark:
                return void
                function() {
                    const e = a.input.charCodeAt(a.state.pos + 1),
                        t = a.input.charCodeAt(a.state.pos + 2);
                    e !== c.charCodes.questionMark || a.isFlowEnabled && a.state.isType ? e !== c.charCodes.dot || t >= c.charCodes.digit0 && t <= c.charCodes.digit9 ? (++a.state.pos, K(d.TokenType.question)) : (a.state.pos += 2, K(d.TokenType.questionDot)) : t === c.charCodes.equalsTo ? H(d.TokenType.assign, 3) : H(d.TokenType.nullishCoalescing, 2)
                }();
            case c.charCodes.atSign:
                return ++a.state.pos, void K(d.TokenType.at);
            case c.charCodes.graveAccent:
                return ++a.state.pos, void K(d.TokenType.backQuote);
            case c.charCodes.digit0: {
                const e = a.input.charCodeAt(a.state.pos + 1);
                if (e === c.charCodes.lowercaseX || e === c.charCodes.uppercaseX || e === c.charCodes.lowercaseO || e === c.charCodes.uppercaseO || e === c.charCodes.lowercaseB || e === c.charCodes.uppercaseB) return void
                function() {
                    a.state.pos += 2;
                    for (;;) {
                        const e = a.input.charCodeAt(a.state.pos);
                        if (!(e >= c.charCodes.digit0 && e <= c.charCodes.digit9 || e >= c.charCodes.lowercaseA && e <= c.charCodes.lowercaseF || e >= c.charCodes.uppercaseA && e <= c.charCodes.uppercaseF || e === c.charCodes.underscore)) break;
                        a.state.pos++
                    }
                    const e = a.input.charCodeAt(a.state.pos);
                    e === c.charCodes.lowercaseN ? (++a.state.pos, K(d.TokenType.bigint)) : K(d.TokenType.num)
                }()
            }
            case c.charCodes.digit1:
            case c.charCodes.digit2:
            case c.charCodes.digit3:
            case c.charCodes.digit4:
            case c.charCodes.digit5:
            case c.charCodes.digit6:
            case c.charCodes.digit7:
            case c.charCodes.digit8:
            case c.charCodes.digit9:
                return void V(!1);
            case c.charCodes.quotationMark:
            case c.charCodes.apostrophe:
                return void
                function(e) {
                    for (a.state.pos++;;) {
                        if (a.state.pos >= a.input.length) return void(0, i.unexpected)("Unterminated string constant");
                        const t = a.input.charCodeAt(a.state.pos);
                        if (t === c.charCodes.backslash) a.state.pos++;
                        else if (t === e) break;
                        a.state.pos++
                    }
                    a.state.pos++, K(d.TokenType.string)
                }(e);
            case c.charCodes.slash:
                return void(a.input.charCodeAt(a.state.pos + 1) === c.charCodes.equalsTo ? H(d.TokenType.assign, 2) : H(d.TokenType.slash, 1));
            case c.charCodes.percentSign:
            case c.charCodes.asterisk:
                return void
                function(e) {
                    let t = e === c.charCodes.asterisk ? d.TokenType.star : d.TokenType.modulo,
                        n = 1,
                        o = a.input.charCodeAt(a.state.pos + 1);
                    e === c.charCodes.asterisk && o === c.charCodes.asterisk && (n++, o = a.input.charCodeAt(a.state.pos + 2), t = d.TokenType.exponent), o === c.charCodes.equalsTo && a.input.charCodeAt(a.state.pos + 2) !== c.charCodes.greaterThan && (n++, t = d.TokenType.assign), H(t, n)
                }(e);
            case c.charCodes.verticalBar:
            case c.charCodes.ampersand:
                return void
                function(e) {
                    const t = a.input.charCodeAt(a.state.pos + 1);
                    if (t !== e) {
                        if (e === c.charCodes.verticalBar) {
                            if (t === c.charCodes.greaterThan) return void H(d.TokenType.pipeline, 2);
                            if (t === c.charCodes.rightCurlyBrace && a.isFlowEnabled) return void H(d.TokenType.braceBarR, 2)
                        }
                        t !== c.charCodes.equalsTo ? H(e === c.charCodes.verticalBar ? d.TokenType.bitwiseOR : d.TokenType.bitwiseAND, 1) : H(d.TokenType.assign, 2)
                    } else a.input.charCodeAt(a.state.pos + 2) === c.charCodes.equalsTo ? H(d.TokenType.assign, 3) : H(e === c.charCodes.verticalBar ? d.TokenType.logicalOR : d.TokenType.logicalAND, 2)
                }(e);
            case c.charCodes.caret:
                return void(a.input.charCodeAt(a.state.pos + 1) === c.charCodes.equalsTo ? H(d.TokenType.assign, 2) : H(d.TokenType.bitwiseXOR, 1));
            case c.charCodes.plusSign:
            case c.charCodes.dash:
                return void
                function(e) {
                    const t = a.input.charCodeAt(a.state.pos + 1);
                    t !== e ? t === c.charCodes.equalsTo ? H(d.TokenType.assign, 2) : e === c.charCodes.plusSign ? H(d.TokenType.plus, 1) : H(d.TokenType.minus, 1) : H(d.TokenType.preIncDec, 2)
                }(e);
            case c.charCodes.lessThan:
                return void
                function() {
                    const e = a.input.charCodeAt(a.state.pos + 1);
                    if (e === c.charCodes.lessThan) return a.input.charCodeAt(a.state.pos + 2) === c.charCodes.equalsTo ? void H(d.TokenType.assign, 3) : void(a.state.isType ? H(d.TokenType.lessThan, 1) : H(d.TokenType.bitShiftL, 2));
                    e === c.charCodes.equalsTo ? H(d.TokenType.relationalOrEqual, 2) : H(d.TokenType.lessThan, 1)
                }();
            case c.charCodes.greaterThan:
                return void $();
            case c.charCodes.equalsTo:
            case c.charCodes.exclamationMark:
                return void
                function(e) {
                    const t = a.input.charCodeAt(a.state.pos + 1);
                    if (t !== c.charCodes.equalsTo) return e === c.charCodes.equalsTo && t === c.charCodes.greaterThan ? (a.state.pos += 2, void K(d.TokenType.arrow)) : void H(e === c.charCodes.equalsTo ? d.TokenType.eq : d.TokenType.bang, 1);
                    H(d.TokenType.equality, a.input.charCodeAt(a.state.pos + 2) === c.charCodes.equalsTo ? 3 : 2)
                }(e);
            case c.charCodes.tilde:
                return void H(d.TokenType.tilde, 1)
        }(0, i.unexpected)(`Unexpected character '${String.fromCharCode(e)}'`, a.state.pos)
    }

    function H(e, t) {
        a.state.pos += t, K(e)
    }

    function U() {
        for (;;) {
            const e = a.input.charCodeAt(a.state.pos);
            if (!(e >= c.charCodes.digit0 && e <= c.charCodes.digit9 || e === c.charCodes.underscore)) break;
            a.state.pos++
        }
    }

    function V(e) {
        let t = !1,
            n = !1;
        e || U();
        let o = a.input.charCodeAt(a.state.pos);
        o === c.charCodes.dot && (++a.state.pos, U(), o = a.input.charCodeAt(a.state.pos)), o !== c.charCodes.uppercaseE && o !== c.charCodes.lowercaseE || (o = a.input.charCodeAt(++a.state.pos), o !== c.charCodes.plusSign && o !== c.charCodes.dash || ++a.state.pos, U(), o = a.input.charCodeAt(a.state.pos)), o === c.charCodes.lowercaseN ? (++a.state.pos, t = !0) : o === c.charCodes.lowercaseM && (++a.state.pos, n = !0), K(t ? d.TokenType.bigint : n ? d.TokenType.decimal : d.TokenType.num)
    }
})), n.register("kk1e5", (function(e, o) {
    t(e.exports, "isJSXEnabled", (function() {
        return a
    })), t(e.exports, "isTypeScriptEnabled", (function() {
        return i
    })), t(e.exports, "isFlowEnabled", (function() {
        return c
    })), t(e.exports, "state", (function() {
        return p
    })), t(e.exports, "input", (function() {
        return l
    })), t(e.exports, "getNextContextId", (function() {
        return h
    })), t(e.exports, "augmentError", (function() {
        return d
    })), t(e.exports, "initParser", (function() {
        return y
    }));
    var r = n("g01J0"),
        s = n("8s4y4");
    let a, i, c, p, l, u;

    function h() {
        return u++
    }

    function d(e) {
        if ("pos" in e) {
            const t = function(e) {
                let t = 1,
                    n = 1;
                for (let o = 0; o < e; o++) l.charCodeAt(o) === s.charCodes.lineFeed ? (t++, n = 1) : n++;
                return new T(t, n)
            }(e.pos);
            e.message += ` (${t.line}:${t.column})`, e.loc = t
        }
        return e
    }
    class T {
        constructor(e, t) {
            this.line = e, this.column = t
        }
    }

    function y(e, t, n, o) {
        l = e, p = new(0, r.default), u = 1, a = t, i = n, c = o
    }
})), n.register("g01J0", (function(e, o) {
    t(e.exports, "Scope", (function() {
        return a
    })), t(e.exports, "default", (function() {
        return c
    }));
    var r = n("46D9g"),
        s = n("31VH2");
    class a {
        constructor(e, t, n) {
            this.startTokenIndex = e, this.endTokenIndex = t, this.isFunctionScope = n
        }
    }
    class i {
        constructor(e, t, n, o, r, s, a, i, c, p, l, u, h) {
            this.potentialArrowAt = e, this.noAnonFunctionType = t, this.inDisallowConditionalTypesContext = n, this.tokensLength = o, this.scopesLength = r, this.pos = s, this.type = a, this.contextualKeyword = i, this.start = c, this.end = p, this.isType = l, this.scopeDepth = u, this.error = h
        }
    }
    class c {
        __init() {
            this.potentialArrowAt = -1
        }
        __init2() {
            this.noAnonFunctionType = !1
        }
        __init3() {
            this.inDisallowConditionalTypesContext = !1
        }
        __init4() {
            this.tokens = []
        }
        __init5() {
            this.scopes = []
        }
        __init6() {
            this.pos = 0
        }
        __init7() {
            this.type = s.TokenType.eof
        }
        __init8() {
            this.contextualKeyword = r.ContextualKeyword.NONE
        }
        __init9() {
            this.start = 0
        }
        __init10() {
            this.end = 0
        }
        __init11() {
            this.isType = !1
        }
        __init12() {
            this.scopeDepth = 0
        }
        __init13() {
            this.error = null
        }
        snapshot() {
            return new i(this.potentialArrowAt, this.noAnonFunctionType, this.inDisallowConditionalTypesContext, this.tokens.length, this.scopes.length, this.pos, this.type, this.contextualKeyword, this.start, this.end, this.isType, this.scopeDepth, this.error)
        }
        restoreFromSnapshot(e) {
            this.potentialArrowAt = e.potentialArrowAt, this.noAnonFunctionType = e.noAnonFunctionType, this.inDisallowConditionalTypesContext = e.inDisallowConditionalTypesContext, this.tokens.length = e.tokensLength, this.scopes.length = e.scopesLength, this.pos = e.pos, this.type = e.type, this.contextualKeyword = e.contextualKeyword, this.start = e.start, this.end = e.end, this.isType = e.isType, this.scopeDepth = e.scopeDepth, this.error = e.error
        }
        constructor() {
            c.prototype.__init.call(this), c.prototype.__init2.call(this), c.prototype.__init3.call(this), c.prototype.__init4.call(this), c.prototype.__init5.call(this), c.prototype.__init6.call(this), c.prototype.__init7.call(this), c.prototype.__init8.call(this), c.prototype.__init9.call(this), c.prototype.__init10.call(this), c.prototype.__init11.call(this), c.prototype.__init12.call(this), c.prototype.__init13.call(this)
        }
    }
})), n.register("46D9g", (function(e, n) {
    var o;
    t(e.exports, "ContextualKeyword", (function() {
            return o
        })),
        function(e) {
            e[e.NONE = 0] = "NONE";
            e[e._abstract = 1] = "_abstract";
            e[e._accessor = 2] = "_accessor";
            e[e._as = 3] = "_as";
            e[e._assert = 4] = "_assert";
            e[e._asserts = 5] = "_asserts";
            e[e._async = 6] = "_async";
            e[e._await = 7] = "_await";
            e[e._checks = 8] = "_checks";
            e[e._constructor = 9] = "_constructor";
            e[e._declare = 10] = "_declare";
            e[e._enum = 11] = "_enum";
            e[e._exports = 12] = "_exports";
            e[e._from = 13] = "_from";
            e[e._get = 14] = "_get";
            e[e._global = 15] = "_global";
            e[e._implements = 16] = "_implements";
            e[e._infer = 17] = "_infer";
            e[e._interface = 18] = "_interface";
            e[e._is = 19] = "_is";
            e[e._keyof = 20] = "_keyof";
            e[e._mixins = 21] = "_mixins";
            e[e._module = 22] = "_module";
            e[e._namespace = 23] = "_namespace";
            e[e._of = 24] = "_of";
            e[e._opaque = 25] = "_opaque";
            e[e._out = 26] = "_out";
            e[e._override = 27] = "_override";
            e[e._private = 28] = "_private";
            e[e._protected = 29] = "_protected";
            e[e._proto = 30] = "_proto";
            e[e._public = 31] = "_public";
            e[e._readonly = 32] = "_readonly";
            e[e._require = 33] = "_require";
            e[e._satisfies = 34] = "_satisfies";
            e[e._set = 35] = "_set";
            e[e._static = 36] = "_static";
            e[e._symbol = 37] = "_symbol";
            e[e._type = 38] = "_type";
            e[e._unique = 39] = "_unique";
            e[e._using = 40] = "_using"
        }(o || (o = {}))
})), n.register("31VH2", (function(e, n) {
    var o;

    function r(e) {
        switch (e) {
            case o.num:
                return "num";
            case o.bigint:
                return "bigint";
            case o.decimal:
                return "decimal";
            case o.regexp:
                return "regexp";
            case o.string:
                return "string";
            case o.name:
                return "name";
            case o.eof:
                return "eof";
            case o.bracketL:
                return "[";
            case o.bracketR:
                return "]";
            case o.braceL:
                return "{";
            case o.braceBarL:
                return "{|";
            case o.braceR:
                return "}";
            case o.braceBarR:
                return "|}";
            case o.parenL:
                return "(";
            case o.parenR:
                return ")";
            case o.comma:
                return ",";
            case o.semi:
                return ";";
            case o.colon:
                return ":";
            case o.doubleColon:
                return "::";
            case o.dot:
                return ".";
            case o.question:
                return "?";
            case o.questionDot:
                return "?.";
            case o.arrow:
                return "=>";
            case o.template:
                return "template";
            case o.ellipsis:
                return "...";
            case o.backQuote:
                return "`";
            case o.dollarBraceL:
                return "${";
            case o.at:
                return "@";
            case o.hash:
                return "#";
            case o.eq:
                return "=";
            case o.assign:
                return "_=";
            case o.preIncDec:
            case o.postIncDec:
                return "++/--";
            case o.bang:
                return "!";
            case o.tilde:
                return "~";
            case o.pipeline:
                return "|>";
            case o.nullishCoalescing:
                return "??";
            case o.logicalOR:
                return "||";
            case o.logicalAND:
                return "&&";
            case o.bitwiseOR:
                return "|";
            case o.bitwiseXOR:
                return "^";
            case o.bitwiseAND:
                return "&";
            case o.equality:
                return "==/!=";
            case o.lessThan:
                return "<";
            case o.greaterThan:
                return ">";
            case o.relationalOrEqual:
                return "<=/>=";
            case o.bitShiftL:
                return "<<";
            case o.bitShiftR:
                return ">>/>>>";
            case o.plus:
                return "+";
            case o.minus:
                return "-";
            case o.modulo:
                return "%";
            case o.star:
                return "*";
            case o.slash:
                return "/";
            case o.exponent:
                return "**";
            case o.jsxName:
                return "jsxName";
            case o.jsxText:
                return "jsxText";
            case o.jsxEmptyText:
                return "jsxEmptyText";
            case o.jsxTagStart:
                return "jsxTagStart";
            case o.jsxTagEnd:
                return "jsxTagEnd";
            case o.typeParameterStart:
                return "typeParameterStart";
            case o.nonNullAssertion:
                return "nonNullAssertion";
            case o._break:
                return "break";
            case o._case:
                return "case";
            case o._catch:
                return "catch";
            case o._continue:
                return "continue";
            case o._debugger:
                return "debugger";
            case o._default:
                return "default";
            case o._do:
                return "do";
            case o._else:
                return "else";
            case o._finally:
                return "finally";
            case o._for:
                return "for";
            case o._function:
                return "function";
            case o._if:
                return "if";
            case o._return:
                return "return";
            case o._switch:
                return "switch";
            case o._throw:
                return "throw";
            case o._try:
                return "try";
            case o._var:
                return "var";
            case o._let:
                return "let";
            case o._const:
                return "const";
            case o._while:
                return "while";
            case o._with:
                return "with";
            case o._new:
                return "new";
            case o._this:
                return "this";
            case o._super:
                return "super";
            case o._class:
                return "class";
            case o._extends:
                return "extends";
            case o._export:
                return "export";
            case o._import:
                return "import";
            case o._yield:
                return "yield";
            case o._null:
                return "null";
            case o._true:
                return "true";
            case o._false:
                return "false";
            case o._in:
                return "in";
            case o._instanceof:
                return "instanceof";
            case o._typeof:
                return "typeof";
            case o._void:
                return "void";
            case o._delete:
                return "delete";
            case o._async:
                return "async";
            case o._get:
                return "get";
            case o._set:
                return "set";
            case o._declare:
                return "declare";
            case o._readonly:
                return "readonly";
            case o._abstract:
                return "abstract";
            case o._static:
                return "static";
            case o._public:
                return "public";
            case o._private:
                return "private";
            case o._protected:
                return "protected";
            case o._override:
                return "override";
            case o._as:
                return "as";
            case o._enum:
                return "enum";
            case o._type:
                return "type";
            case o._implements:
                return "implements";
            default:
                return ""
        }
    }
    t(e.exports, "TokenType", (function() {
            return o
        })), t(e.exports, "formatTokenType", (function() {
            return r
        })),
        function(e) {
            e[e.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK";
            e[e.IS_KEYWORD = 16] = "IS_KEYWORD";
            e[e.IS_ASSIGN = 32] = "IS_ASSIGN";
            e[e.IS_RIGHT_ASSOCIATIVE = 64] = "IS_RIGHT_ASSOCIATIVE";
            e[e.IS_PREFIX = 128] = "IS_PREFIX";
            e[e.IS_POSTFIX = 256] = "IS_POSTFIX";
            e[e.IS_EXPRESSION_START = 512] = "IS_EXPRESSION_START";
            e[e.num = 512] = "num";
            e[e.bigint = 1536] = "bigint";
            e[e.decimal = 2560] = "decimal";
            e[e.regexp = 3584] = "regexp";
            e[e.string = 4608] = "string";
            e[e.name = 5632] = "name";
            e[e.eof = 6144] = "eof";
            e[e.bracketL = 7680] = "bracketL";
            e[e.bracketR = 8192] = "bracketR";
            e[e.braceL = 9728] = "braceL";
            e[e.braceBarL = 10752] = "braceBarL";
            e[e.braceR = 11264] = "braceR";
            e[e.braceBarR = 12288] = "braceBarR";
            e[e.parenL = 13824] = "parenL";
            e[e.parenR = 14336] = "parenR";
            e[e.comma = 15360] = "comma";
            e[e.semi = 16384] = "semi";
            e[e.colon = 17408] = "colon";
            e[e.doubleColon = 18432] = "doubleColon";
            e[e.dot = 19456] = "dot";
            e[e.question = 20480] = "question";
            e[e.questionDot = 21504] = "questionDot";
            e[e.arrow = 22528] = "arrow";
            e[e.template = 23552] = "template";
            e[e.ellipsis = 24576] = "ellipsis";
            e[e.backQuote = 25600] = "backQuote";
            e[e.dollarBraceL = 27136] = "dollarBraceL";
            e[e.at = 27648] = "at";
            e[e.hash = 29184] = "hash";
            e[e.eq = 29728] = "eq";
            e[e.assign = 30752] = "assign";
            e[e.preIncDec = 32640] = "preIncDec";
            e[e.postIncDec = 33664] = "postIncDec";
            e[e.bang = 34432] = "bang";
            e[e.tilde = 35456] = "tilde";
            e[e.pipeline = 35841] = "pipeline";
            e[e.nullishCoalescing = 36866] = "nullishCoalescing";
            e[e.logicalOR = 37890] = "logicalOR";
            e[e.logicalAND = 38915] = "logicalAND";
            e[e.bitwiseOR = 39940] = "bitwiseOR";
            e[e.bitwiseXOR = 40965] = "bitwiseXOR";
            e[e.bitwiseAND = 41990] = "bitwiseAND";
            e[e.equality = 43015] = "equality";
            e[e.lessThan = 44040] = "lessThan";
            e[e.greaterThan = 45064] = "greaterThan";
            e[e.relationalOrEqual = 46088] = "relationalOrEqual";
            e[e.bitShiftL = 47113] = "bitShiftL";
            e[e.bitShiftR = 48137] = "bitShiftR";
            e[e.plus = 49802] = "plus";
            e[e.minus = 50826] = "minus";
            e[e.modulo = 51723] = "modulo";
            e[e.star = 52235] = "star";
            e[e.slash = 53259] = "slash";
            e[e.exponent = 54348] = "exponent";
            e[e.jsxName = 55296] = "jsxName";
            e[e.jsxText = 56320] = "jsxText";
            e[e.jsxEmptyText = 57344] = "jsxEmptyText";
            e[e.jsxTagStart = 58880] = "jsxTagStart";
            e[e.jsxTagEnd = 59392] = "jsxTagEnd";
            e[e.typeParameterStart = 60928] = "typeParameterStart";
            e[e.nonNullAssertion = 61440] = "nonNullAssertion";
            e[e._break = 62480] = "_break";
            e[e._case = 63504] = "_case";
            e[e._catch = 64528] = "_catch";
            e[e._continue = 65552] = "_continue";
            e[e._debugger = 66576] = "_debugger";
            e[e._default = 67600] = "_default";
            e[e._do = 68624] = "_do";
            e[e._else = 69648] = "_else";
            e[e._finally = 70672] = "_finally";
            e[e._for = 71696] = "_for";
            e[e._function = 73232] = "_function";
            e[e._if = 73744] = "_if";
            e[e._return = 74768] = "_return";
            e[e._switch = 75792] = "_switch";
            e[e._throw = 77456] = "_throw";
            e[e._try = 77840] = "_try";
            e[e._var = 78864] = "_var";
            e[e._let = 79888] = "_let";
            e[e._const = 80912] = "_const";
            e[e._while = 81936] = "_while";
            e[e._with = 82960] = "_with";
            e[e._new = 84496] = "_new";
            e[e._this = 85520] = "_this";
            e[e._super = 86544] = "_super";
            e[e._class = 87568] = "_class";
            e[e._extends = 88080] = "_extends";
            e[e._export = 89104] = "_export";
            e[e._import = 90640] = "_import";
            e[e._yield = 91664] = "_yield";
            e[e._null = 92688] = "_null";
            e[e._true = 93712] = "_true";
            e[e._false = 94736] = "_false";
            e[e._in = 95256] = "_in";
            e[e._instanceof = 96280] = "_instanceof";
            e[e._typeof = 97936] = "_typeof";
            e[e._void = 98960] = "_void";
            e[e._delete = 99984] = "_delete";
            e[e._async = 100880] = "_async";
            e[e._get = 101904] = "_get";
            e[e._set = 102928] = "_set";
            e[e._declare = 103952] = "_declare";
            e[e._readonly = 104976] = "_readonly";
            e[e._abstract = 106e3] = "_abstract";
            e[e._static = 107024] = "_static";
            e[e._public = 107536] = "_public";
            e[e._private = 108560] = "_private";
            e[e._protected = 109584] = "_protected";
            e[e._override = 110608] = "_override";
            e[e._as = 112144] = "_as";
            e[e._enum = 113168] = "_enum";
            e[e._type = 114192] = "_type";
            e[e._implements = 115216] = "_implements"
        }(o || (o = {}))
})), n.register("8s4y4", (function(e, n) {
    var o;
    t(e.exports, "charCodes", (function() {
            return o
        })),
        function(e) {
            e[e.backSpace = 8] = "backSpace";
            e[e.lineFeed = 10] = "lineFeed";
            e[e.tab = 9] = "tab";
            e[e.carriageReturn = 13] = "carriageReturn";
            e[e.shiftOut = 14] = "shiftOut";
            e[e.space = 32] = "space";
            e[e.exclamationMark = 33] = "exclamationMark";
            e[e.quotationMark = 34] = "quotationMark";
            e[e.numberSign = 35] = "numberSign";
            e[e.dollarSign = 36] = "dollarSign";
            e[e.percentSign = 37] = "percentSign";
            e[e.ampersand = 38] = "ampersand";
            e[e.apostrophe = 39] = "apostrophe";
            e[e.leftParenthesis = 40] = "leftParenthesis";
            e[e.rightParenthesis = 41] = "rightParenthesis";
            e[e.asterisk = 42] = "asterisk";
            e[e.plusSign = 43] = "plusSign";
            e[e.comma = 44] = "comma";
            e[e.dash = 45] = "dash";
            e[e.dot = 46] = "dot";
            e[e.slash = 47] = "slash";
            e[e.digit0 = 48] = "digit0";
            e[e.digit1 = 49] = "digit1";
            e[e.digit2 = 50] = "digit2";
            e[e.digit3 = 51] = "digit3";
            e[e.digit4 = 52] = "digit4";
            e[e.digit5 = 53] = "digit5";
            e[e.digit6 = 54] = "digit6";
            e[e.digit7 = 55] = "digit7";
            e[e.digit8 = 56] = "digit8";
            e[e.digit9 = 57] = "digit9";
            e[e.colon = 58] = "colon";
            e[e.semicolon = 59] = "semicolon";
            e[e.lessThan = 60] = "lessThan";
            e[e.equalsTo = 61] = "equalsTo";
            e[e.greaterThan = 62] = "greaterThan";
            e[e.questionMark = 63] = "questionMark";
            e[e.atSign = 64] = "atSign";
            e[e.uppercaseA = 65] = "uppercaseA";
            e[e.uppercaseB = 66] = "uppercaseB";
            e[e.uppercaseC = 67] = "uppercaseC";
            e[e.uppercaseD = 68] = "uppercaseD";
            e[e.uppercaseE = 69] = "uppercaseE";
            e[e.uppercaseF = 70] = "uppercaseF";
            e[e.uppercaseG = 71] = "uppercaseG";
            e[e.uppercaseH = 72] = "uppercaseH";
            e[e.uppercaseI = 73] = "uppercaseI";
            e[e.uppercaseJ = 74] = "uppercaseJ";
            e[e.uppercaseK = 75] = "uppercaseK";
            e[e.uppercaseL = 76] = "uppercaseL";
            e[e.uppercaseM = 77] = "uppercaseM";
            e[e.uppercaseN = 78] = "uppercaseN";
            e[e.uppercaseO = 79] = "uppercaseO";
            e[e.uppercaseP = 80] = "uppercaseP";
            e[e.uppercaseQ = 81] = "uppercaseQ";
            e[e.uppercaseR = 82] = "uppercaseR";
            e[e.uppercaseS = 83] = "uppercaseS";
            e[e.uppercaseT = 84] = "uppercaseT";
            e[e.uppercaseU = 85] = "uppercaseU";
            e[e.uppercaseV = 86] = "uppercaseV";
            e[e.uppercaseW = 87] = "uppercaseW";
            e[e.uppercaseX = 88] = "uppercaseX";
            e[e.uppercaseY = 89] = "uppercaseY";
            e[e.uppercaseZ = 90] = "uppercaseZ";
            e[e.leftSquareBracket = 91] = "leftSquareBracket";
            e[e.backslash = 92] = "backslash";
            e[e.rightSquareBracket = 93] = "rightSquareBracket";
            e[e.caret = 94] = "caret";
            e[e.underscore = 95] = "underscore";
            e[e.graveAccent = 96] = "graveAccent";
            e[e.lowercaseA = 97] = "lowercaseA";
            e[e.lowercaseB = 98] = "lowercaseB";
            e[e.lowercaseC = 99] = "lowercaseC";
            e[e.lowercaseD = 100] = "lowercaseD";
            e[e.lowercaseE = 101] = "lowercaseE";
            e[e.lowercaseF = 102] = "lowercaseF";
            e[e.lowercaseG = 103] = "lowercaseG";
            e[e.lowercaseH = 104] = "lowercaseH";
            e[e.lowercaseI = 105] = "lowercaseI";
            e[e.lowercaseJ = 106] = "lowercaseJ";
            e[e.lowercaseK = 107] = "lowercaseK";
            e[e.lowercaseL = 108] = "lowercaseL";
            e[e.lowercaseM = 109] = "lowercaseM";
            e[e.lowercaseN = 110] = "lowercaseN";
            e[e.lowercaseO = 111] = "lowercaseO";
            e[e.lowercaseP = 112] = "lowercaseP";
            e[e.lowercaseQ = 113] = "lowercaseQ";
            e[e.lowercaseR = 114] = "lowercaseR";
            e[e.lowercaseS = 115] = "lowercaseS";
            e[e.lowercaseT = 116] = "lowercaseT";
            e[e.lowercaseU = 117] = "lowercaseU";
            e[e.lowercaseV = 118] = "lowercaseV";
            e[e.lowercaseW = 119] = "lowercaseW";
            e[e.lowercaseX = 120] = "lowercaseX";
            e[e.lowercaseY = 121] = "lowercaseY";
            e[e.lowercaseZ = 122] = "lowercaseZ";
            e[e.leftCurlyBrace = 123] = "leftCurlyBrace";
            e[e.verticalBar = 124] = "verticalBar";
            e[e.rightCurlyBrace = 125] = "rightCurlyBrace";
            e[e.tilde = 126] = "tilde";
            e[e.nonBreakingSpace = 160] = "nonBreakingSpace";
            e[e.oghamSpaceMark = 5760] = "oghamSpaceMark";
            e[e.lineSeparator = 8232] = "lineSeparator";
            e[e.paragraphSeparator = 8233] = "paragraphSeparator"
        }(o || (o = {}))
})), n.register("5ofYc", (function(e, o) {
    t(e.exports, "isContextual", (function() {
        return c
    })), t(e.exports, "isLookaheadContextual", (function() {
        return p
    })), t(e.exports, "eatContextual", (function() {
        return l
    })), t(e.exports, "expectContextual", (function() {
        return u
    })), t(e.exports, "unexpected", (function() {
        return m
    })), t(e.exports, "canInsertSemicolon", (function() {
        return h
    })), t(e.exports, "hasPrecedingLineBreak", (function() {
        return d
    })), t(e.exports, "hasFollowingLineBreak", (function() {
        return T
    })), t(e.exports, "isLineTerminator", (function() {
        return y
    })), t(e.exports, "semicolon", (function() {
        return f
    })), t(e.exports, "expect", (function() {
        return k
    }));
    var r = n("9OJHt"),
        s = n("31VH2"),
        a = n("8s4y4"),
        i = n("kk1e5");

    function c(e) {
        return i.state.contextualKeyword === e
    }

    function p(e) {
        const t = (0, r.lookaheadTypeAndKeyword)();
        return t.type === s.TokenType.name && t.contextualKeyword === e
    }

    function l(e) {
        return i.state.contextualKeyword === e && (0, r.eat)(s.TokenType.name)
    }

    function u(e) {
        l(e) || m()
    }

    function h() {
        return (0, r.match)(s.TokenType.eof) || (0, r.match)(s.TokenType.braceR) || d()
    }

    function d() {
        const e = i.state.tokens[i.state.tokens.length - 1];
        for (let t = e ? e.end : 0; t < i.state.start; t++) {
            const e = i.input.charCodeAt(t);
            if (e === a.charCodes.lineFeed || e === a.charCodes.carriageReturn || 8232 === e || 8233 === e) return !0
        }
        return !1
    }

    function T() {
        const e = (0, r.nextTokenStart)();
        for (let t = i.state.end; t < e; t++) {
            const e = i.input.charCodeAt(t);
            if (e === a.charCodes.lineFeed || e === a.charCodes.carriageReturn || 8232 === e || 8233 === e) return !0
        }
        return !1
    }

    function y() {
        return (0, r.eat)(s.TokenType.semi) || h()
    }

    function f() {
        y() || m('Unexpected token, expected ";"')
    }

    function k(e) {
        (0, r.eat)(e) || m(`Unexpected token, expected "${(0,s.formatTokenType)(e)}"`)
    }

    function m(e = "Unexpected token", t = i.state.start) {
        if (i.state.error) return;
        const n = new SyntaxError(e);
        n.pos = t, i.state.error = n, i.state.pos = i.input.length, (0, r.finishToken)(s.TokenType.eof)
    }
})), n.register("kwcE7", (function(e, o) {
    t(e.exports, "IS_IDENTIFIER_CHAR", (function() {
        return i
    })), t(e.exports, "IS_IDENTIFIER_START", (function() {
        return c
    }));
    var r = n("8s4y4"),
        s = n("cTeR6");

    function a(e) {
        if (e < 48) return 36 === e;
        if (e < 58) return !0;
        if (e < 65) return !1;
        if (e < 91) return !0;
        if (e < 97) return 95 === e;
        if (e < 123) return !0;
        if (e < 128) return !1;
        throw new Error("Should not be called with non-ASCII char code.")
    }
    const i = new Uint8Array(65536);
    for (let e = 0; e < 128; e++) i[e] = a(e) ? 1 : 0;
    for (let e = 128; e < 65536; e++) i[e] = 1;
    for (const e of s.WHITESPACE_CHARS) i[e] = 0;
    i[8232] = 0, i[8233] = 0;
    const c = i.slice();
    for (let e = r.charCodes.digit0; e <= r.charCodes.digit9; e++) c[e] = 0
})), n.register("cTeR6", (function(e, o) {
    t(e.exports, "WHITESPACE_CHARS", (function() {
        return s
    })), t(e.exports, "skipWhiteSpace", (function() {
        return a
    })), t(e.exports, "IS_WHITESPACE", (function() {
        return i
    }));
    var r = n("8s4y4");
    const s = [9, 11, 12, r.charCodes.space, r.charCodes.nonBreakingSpace, r.charCodes.oghamSpaceMark, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
        a = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
        i = new Uint8Array(65536);
    for (const e of s) i[e] = 1
})), n.register("bMvXE", (function(e, o) {
    t(e.exports, "default", (function() {
        return l
    }));
    var r = n("kk1e5"),
        s = n("8s4y4"),
        a = n("kwcE7"),
        i = n("9OJHt"),
        c = n("4nnk0"),
        p = n("31VH2");

    function l() {
        let e = 0,
            t = 0,
            n = r.state.pos;
        for (; n < r.input.length && (t = r.input.charCodeAt(n), !(t < s.charCodes.lowercaseA || t > s.charCodes.lowercaseZ));) {
            const o = c.READ_WORD_TREE[e + (t - s.charCodes.lowercaseA) + 1];
            if (-1 === o) break;
            e = o, n++
        }
        const o = c.READ_WORD_TREE[e];
        if (o > -1 && !a.IS_IDENTIFIER_CHAR[t]) return r.state.pos = n, void(1 & o ? (0, i.finishToken)(o >>> 1) : (0, i.finishToken)(p.TokenType.name, o >>> 1));
        for (; n < r.input.length;) {
            const e = r.input.charCodeAt(n);
            if (a.IS_IDENTIFIER_CHAR[e]) n++;
            else if (e === s.charCodes.backslash) {
                if (n += 2, r.input.charCodeAt(n) === s.charCodes.leftCurlyBrace) {
                    for (; n < r.input.length && r.input.charCodeAt(n) !== s.charCodes.rightCurlyBrace;) n++;
                    n++
                }
            } else {
                if (e !== s.charCodes.atSign || r.input.charCodeAt(n + 1) !== s.charCodes.atSign) break;
                n += 2
            }
        }
        r.state.pos = n, (0, i.finishToken)(p.TokenType.name)
    }
})), n.register("4nnk0", (function(e, o) {
    t(e.exports, "READ_WORD_TREE", (function() {
        return a
    }));
    var r = n("46D9g"),
        s = n("31VH2");
    const a = new Int32Array([-1, 27, 783, 918, 1755, 2376, 2862, 3483, -1, 3699, -1, 4617, 4752, 4833, 5130, 5508, 5940, -1, 6480, 6939, 7749, 8181, 8451, 8613, -1, 8829, -1, -1, -1, 54, 243, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 432, -1, -1, -1, 675, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 81, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 108, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 135, -1, -1, -1, -1, -1, -1, -1, -1, -1, 162, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 189, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 216, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._abstract << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 270, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 297, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 324, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 351, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 378, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 405, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._accessor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._as << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 459, -1, -1, -1, -1, -1, 594, -1, -1, -1, -1, -1, -1, 486, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 513, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 540, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._assert << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 567, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._asserts << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 621, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 648, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._async << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 702, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 729, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 756, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._await << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 810, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 837, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 864, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 891, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._break << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 945, -1, -1, -1, -1, -1, -1, 1107, -1, -1, -1, 1242, -1, -1, 1350, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 972, 1026, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 999, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._case << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1053, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1080, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._catch << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1134, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1161, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1188, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1215, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._checks << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1269, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1296, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1323, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._class << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1377, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1404, 1620, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1431, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._const << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1458, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1485, -1, -1, -1, -1, -1, -1, -1, -1, 1512, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1539, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1566, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1593, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._constructor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1647, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1674, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1701, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1728, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._continue << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1782, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2349, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1809, 1971, -1, -1, 2106, -1, -1, -1, -1, -1, 2241, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1836, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1863, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1890, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1917, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1944, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._debugger << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1998, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2025, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2052, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2079, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._declare << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2133, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2160, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2187, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2214, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._default << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2268, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2295, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2322, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._delete << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._do << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2403, -1, 2484, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2565, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2430, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2457, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._else << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2511, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2538, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._enum << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2592, -1, -1, -1, 2727, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2619, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2646, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2673, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._export << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2700, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._exports << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2754, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2781, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2808, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2835, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._extends << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2889, -1, -1, -1, -1, -1, -1, -1, 2997, -1, -1, -1, -1, -1, 3159, -1, -1, 3213, -1, -1, 3294, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2916, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2943, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2970, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._false << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3024, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3051, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3078, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3105, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3132, -1, 1 + (s.TokenType._finally << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3186, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._for << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3240, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3267, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._from << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3321, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3348, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3375, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3402, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3429, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3456, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._function << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3510, -1, -1, -1, -1, -1, -1, 3564, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3537, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._get << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3591, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3618, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3645, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3672, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._global << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3726, -1, -1, -1, -1, -1, -1, 3753, 4077, -1, -1, -1, -1, 4590, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._if << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3780, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3807, -1, -1, 3996, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3834, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3861, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3888, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3915, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3942, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3969, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._implements << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4023, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4050, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._import << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._in << 1), -1, -1, -1, -1, -1, 4104, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4185, 4401, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4131, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4158, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._infer << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4212, -1, -1, -1, -1, -1, -1, -1, 4239, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4266, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4293, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4320, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4347, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4374, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._instanceof << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4428, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4455, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4509, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4536, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4563, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._interface << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._is << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4644, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4671, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4698, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4725, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._keyof << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4779, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4806, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._let << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4860, -1, -1, -1, -1, -1, 4995, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4887, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4914, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4941, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4968, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._mixins << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5022, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5049, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5076, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5103, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._module << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5157, -1, -1, -1, 5373, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5427, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5184, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5211, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5238, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5265, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5292, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5319, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5346, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._namespace << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5400, -1, -1, -1, 1 + (s.TokenType._new << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5454, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5481, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._null << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5535, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5562, -1, -1, -1, -1, 5697, 5751, -1, -1, -1, -1, r.ContextualKeyword._of << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5589, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5616, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5643, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5670, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._opaque << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5724, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._out << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5778, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5805, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5832, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5859, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5886, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5913, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._override << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5967, -1, -1, 6345, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5994, -1, -1, -1, -1, -1, 6129, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6021, -1, -1, -1, -1, -1, 6048, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6075, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6102, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._private << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6156, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6183, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6318, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6210, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6237, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6264, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6291, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._protected << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._proto << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6372, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6399, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6426, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6453, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._public << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6507, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6534, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6696, -1, -1, 6831, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6561, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6588, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6615, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6642, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6669, -1, r.ContextualKeyword._readonly << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6723, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6750, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6777, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6804, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._require << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6858, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6885, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6912, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._return << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6966, -1, -1, -1, 7182, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7236, 7371, -1, 7479, -1, 7614, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6993, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7020, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7047, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7074, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7101, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7128, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7155, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._satisfies << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7209, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._set << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7263, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7290, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7317, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7344, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._static << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7398, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7425, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7452, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._super << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7506, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7533, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7560, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7587, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._switch << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7641, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7668, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7695, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7722, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._symbol << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7776, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7938, -1, -1, -1, -1, -1, -1, 8046, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7803, -1, -1, -1, -1, -1, -1, -1, -1, 7857, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7830, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._this << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7884, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7911, -1, -1, -1, 1 + (s.TokenType._throw << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7965, -1, -1, -1, 8019, -1, -1, -1, -1, -1, -1, 7992, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._true << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._try << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8073, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._type << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8127, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._typeof << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8208, -1, -1, -1, -1, 8343, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8235, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8262, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8289, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8316, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._unique << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8370, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8397, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8424, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, r.ContextualKeyword._using << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8478, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8532, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8505, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._var << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8559, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8586, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._void << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8640, 8748, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8667, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8694, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8721, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._while << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8775, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8802, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._with << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8856, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8883, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8910, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8937, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1 + (s.TokenType._yield << 1), -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1])
})), n.register("2eIOH", (function(e, o) {
    t(e.exports, "default", (function() {
        return s
    }));
    var r = n("31VH2");

    function s(e, t = e.currentIndex()) {
        let n = t + 1;
        if (a(e, n)) {
            const o = e.identifierNameAtIndex(t);
            return {
                isType: !1,
                leftName: o,
                rightName: o,
                endIndex: n
            }
        }
        if (n++, a(e, n)) return {
            isType: !0,
            leftName: null,
            rightName: null,
            endIndex: n
        };
        if (n++, a(e, n)) return {
            isType: !1,
            leftName: e.identifierNameAtIndex(t),
            rightName: e.identifierNameAtIndex(t + 2),
            endIndex: n
        };
        if (n++, a(e, n)) return {
            isType: !0,
            leftName: null,
            rightName: null,
            endIndex: n
        };
        throw new Error(`Unexpected import/export specifier at ${t}`)
    }

    function a(e, t) {
        const n = e.tokens[t];
        return n.type === r.TokenType.braceR || n.type === r.TokenType.comma
    }
})), n.register("6wRe0", (function(e, o) {
    t(e.exports, "getNonTypeIdentifiers", (function() {
        return c
    }));
    var r = n("9OJHt"),
        s = n("31VH2"),
        a = n("d4iR6"),
        i = n("lUEft");

    function c(e, t) {
        const n = (0, i.default)(t),
            o = new Set;
        for (let t = 0; t < e.tokens.length; t++) {
            const i = e.tokens[t];
            if (i.type !== s.TokenType.name || i.isType || i.identifierRole !== r.IdentifierRole.Access && i.identifierRole !== r.IdentifierRole.ObjectShorthand && i.identifierRole !== r.IdentifierRole.ExportAccess || i.shadowsGlobal || o.add(e.identifierNameForToken(i)), i.type === s.TokenType.jsxTagStart && o.add(n.base), i.type === s.TokenType.jsxTagStart && t + 1 < e.tokens.length && e.tokens[t + 1].type === s.TokenType.jsxTagEnd && (o.add(n.base), o.add(n.fragmentBase)), i.type === s.TokenType.jsxName && i.identifierRole === r.IdentifierRole.Access) {
                const n = e.identifierNameForToken(i);
                (0, a.startsWithLowerCase)(n) && e.tokens[t + 1].type !== s.TokenType.dot || o.add(e.identifierNameForToken(i))
            }
        }
        return o
    }
})), n.register("d4iR6", (function(e, o) {
    t(e.exports, "default", (function() {
        return l
    })), t(e.exports, "startsWithLowerCase", (function() {
        return u
    }));
    var r = n("fGXj0"),
        s = n("9OJHt"),
        a = n("31VH2"),
        i = n("8s4y4"),
        c = n("lUEft"),
        p = n("d2hew");
    class l extends p.default {
        __init() {
            this.lastLineNumber = 1
        }
        __init2() {
            this.lastIndex = 0
        }
        __init3() {
            this.filenameVarName = null
        }
        __init4() {
            this.esmAutomaticImportNameResolutions = {}
        }
        __init5() {
            this.cjsAutomaticModuleNameResolutions = {}
        }
        process() {
            return !!this.tokens.matches1(a.TokenType.jsxTagStart) && (this.processJSXTag(), !0)
        }
        getPrefixCode() {
            let e = "";
            if (this.filenameVarName && (e += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath||"")};`), this.isAutomaticRuntime)
                if (this.importProcessor)
                    for (const [t, n] of Object.entries(this.cjsAutomaticModuleNameResolutions)) e += `var ${n} = require("${t}");`;
                else {
                    const {
                        createElement: t,
                        ...n
                    } = this.esmAutomaticImportNameResolutions;
                    t && (e += `import {createElement as ${t}} from "${this.jsxImportSource}";`);
                    const o = Object.entries(n).map((([e, t]) => `${e} as ${t}`)).join(", ");
                    if (o) {
                        e += `import {${o}} from "${this.jsxImportSource+(this.options.production?"/jsx-runtime":"/jsx-dev-runtime")}";`
                    }
                } return e
        }
        processJSXTag() {
            const {
                jsxRole: e,
                start: t
            } = this.tokens.currentToken(), n = this.options.production ? null : this.getElementLocationCode(t);
            this.isAutomaticRuntime && e !== s.JSXRole.KeyAfterPropSpread ? this.transformTagToJSXFunc(n, e) : this.transformTagToCreateElement(n)
        }
        getElementLocationCode(e) {
            return `lineNumber: ${this.getLineNumberForIndex(e)}`
        }
        getLineNumberForIndex(e) {
            const t = this.tokens.code;
            for (; this.lastIndex < e && this.lastIndex < t.length;) "\n" === t[this.lastIndex] && this.lastLineNumber++, this.lastIndex++;
            return this.lastLineNumber
        }
        transformTagToJSXFunc(e, t) {
            const n = t === s.JSXRole.StaticChildren;
            this.tokens.replaceToken(this.getJSXFuncInvocationCode(n));
            let o = null;
            if (this.tokens.matches1(a.TokenType.jsxTagEnd)) this.tokens.replaceToken(`${this.getFragmentCode()}, {`), this.processAutomaticChildrenAndEndProps(t);
            else {
                if (this.processTagIntro(), this.tokens.appendCode(", {"), o = this.processProps(!0), this.tokens.matches2(a.TokenType.slash, a.TokenType.jsxTagEnd)) this.tokens.appendCode("}");
                else {
                    if (!this.tokens.matches1(a.TokenType.jsxTagEnd)) throw new Error("Expected either /> or > at the end of the tag.");
                    this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(t)
                }
                o && this.tokens.appendCode(`, ${o}`)
            }
            for (this.options.production || (null === o && this.tokens.appendCode(", void 0"), this.tokens.appendCode(`, ${n}, ${this.getDevSource(e)}, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(a.TokenType.jsxTagEnd);) this.tokens.removeToken();
            this.tokens.replaceToken(")")
        }
        transformTagToCreateElement(e) {
            if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(a.TokenType.jsxTagEnd)) this.tokens.replaceToken(`${this.getFragmentCode()}, null`), this.processChildren(!0);
            else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(e), this.tokens.matches2(a.TokenType.slash, a.TokenType.jsxTagEnd));
            else {
                if (!this.tokens.matches1(a.TokenType.jsxTagEnd)) throw new Error("Expected either /> or > at the end of the tag.");
                this.tokens.removeToken(), this.processChildren(!0)
            }
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(a.TokenType.jsxTagEnd);) this.tokens.removeToken();
            this.tokens.replaceToken(")")
        }
        getJSXFuncInvocationCode(e) {
            return this.options.production ? e ? this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime")
        }
        getCreateElementInvocationCode() {
            if (this.isAutomaticRuntime) return this.claimAutoImportedFuncInvocation("createElement", "");
            {
                const {
                    jsxPragmaInfo: e
                } = this;
                return `${this.importProcessor&&this.importProcessor.getIdentifierReplacement(e.base)||e.base}${e.suffix}(`
            }
        }
        getFragmentCode() {
            if (this.isAutomaticRuntime) return this.claimAutoImportedName("Fragment", this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
            {
                const {
                    jsxPragmaInfo: e
                } = this;
                return (this.importProcessor && this.importProcessor.getIdentifierReplacement(e.fragmentBase) || e.fragmentBase) + e.fragmentSuffix
            }
        }
        claimAutoImportedFuncInvocation(e, t) {
            const n = this.claimAutoImportedName(e, t);
            return this.importProcessor ? `${n}.call(void 0, ` : `${n}(`
        }
        claimAutoImportedName(e, t) {
            if (this.importProcessor) {
                const n = this.jsxImportSource + t;
                return this.cjsAutomaticModuleNameResolutions[n] || (this.cjsAutomaticModuleNameResolutions[n] = this.importProcessor.getFreeIdentifierForPath(n)), `${this.cjsAutomaticModuleNameResolutions[n]}.${e}`
            }
            return this.esmAutomaticImportNameResolutions[e] || (this.esmAutomaticImportNameResolutions[e] = this.nameManager.claimFreeName(`_${e}`)), this.esmAutomaticImportNameResolutions[e]
        }
        processTagIntro() {
            let e = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[e].isType || !this.tokens.matches2AtIndex(e - 1, a.TokenType.jsxName, a.TokenType.jsxName) && !this.tokens.matches2AtIndex(e - 1, a.TokenType.greaterThan, a.TokenType.jsxName) && !this.tokens.matches1AtIndex(e, a.TokenType.braceL) && !this.tokens.matches1AtIndex(e, a.TokenType.jsxTagEnd) && !this.tokens.matches2AtIndex(e, a.TokenType.slash, a.TokenType.jsxTagEnd);) e++;
            if (e === this.tokens.currentIndex() + 1) {
                const e = this.tokens.identifierName();
                u(e) && this.tokens.replaceToken(`'${e}'`)
            }
            for (; this.tokens.currentIndex() < e;) this.rootTransformer.processToken()
        }
        processPropsObjectWithDevInfo(e) {
            const t = this.options.production ? "" : `__self: this, __source: ${this.getDevSource(e)}`;
            this.tokens.matches1(a.TokenType.jsxName) || this.tokens.matches1(a.TokenType.braceL) ? (this.tokens.appendCode(", {"), this.processProps(!1), t ? this.tokens.appendCode(` ${t}}`) : this.tokens.appendCode("}")) : t ? this.tokens.appendCode(`, {${t}}`) : this.tokens.appendCode(", null")
        }
        processProps(e) {
            let t = null;
            for (;;) {
                if (this.tokens.matches2(a.TokenType.jsxName, a.TokenType.eq)) {
                    const n = this.tokens.identifierName();
                    if (e && "key" === n) {
                        null !== t && this.tokens.appendCode(t.replace(/[^\n]/g, "")), this.tokens.removeToken(), this.tokens.removeToken();
                        const e = this.tokens.snapshot();
                        this.processPropValue(), t = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(e);
                        continue
                    }
                    this.processPropName(n), this.tokens.replaceToken(": "), this.processPropValue()
                } else if (this.tokens.matches1(a.TokenType.jsxName)) {
                    const e = this.tokens.identifierName();
                    this.processPropName(e), this.tokens.appendCode(": true")
                } else {
                    if (!this.tokens.matches1(a.TokenType.braceL)) break;
                    this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("")
                }
                this.tokens.appendCode(",")
            }
            return t
        }
        processPropName(e) {
            e.includes("-") ? this.tokens.replaceToken(`'${e}'`) : this.tokens.copyToken()
        }
        processPropValue() {
            this.tokens.matches1(a.TokenType.braceL) ? (this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("")) : this.tokens.matches1(a.TokenType.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue()
        }
        processStringPropValue() {
            const e = this.tokens.currentToken(),
                t = this.tokens.code.slice(e.start + 1, e.end - 1),
                n = h(t),
                o = function(e) {
                    let t = "";
                    for (let n = 0; n < e.length; n++) {
                        const o = e[n];
                        if ("\n" === o)
                            if (/\s/.test(e[n + 1]))
                                for (t += " "; n < e.length && /\s/.test(e[n + 1]);) n++;
                            else t += "\n";
                        else if ("&" === o) {
                            const {
                                entity: o,
                                newI: r
                            } = d(e, n + 1);
                            t += o, n = r - 1
                        } else t += o
                    }
                    return JSON.stringify(t)
                }(t);
            this.tokens.replaceToken(o + n)
        }
        processAutomaticChildrenAndEndProps(e) {
            e === s.JSXRole.StaticChildren ? (this.tokens.appendCode(" children: ["), this.processChildren(!1), this.tokens.appendCode("]}")) : (e === s.JSXRole.OneChild && this.tokens.appendCode(" children: "), this.processChildren(!1), this.tokens.appendCode("}"))
        }
        processChildren(e) {
            let t = e;
            for (;;) {
                if (this.tokens.matches2(a.TokenType.jsxTagStart, a.TokenType.slash)) return;
                let e = !1;
                if (this.tokens.matches1(a.TokenType.braceL)) this.tokens.matches2(a.TokenType.braceL, a.TokenType.braceR) ? (this.tokens.replaceToken(""), this.tokens.replaceToken("")) : (this.tokens.replaceToken(t ? ", " : ""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(""), e = !0);
                else if (this.tokens.matches1(a.TokenType.jsxTagStart)) this.tokens.appendCode(t ? ", " : ""), this.processJSXTag(), e = !0;
                else {
                    if (!this.tokens.matches1(a.TokenType.jsxText) && !this.tokens.matches1(a.TokenType.jsxEmptyText)) throw new Error("Unexpected token when processing JSX children.");
                    e = this.processChildTextElement(t)
                }
                e && (t = !0)
            }
        }
        processChildTextElement(e) {
            const t = this.tokens.currentToken(),
                n = this.tokens.code.slice(t.start, t.end),
                o = h(n),
                r = function(e) {
                    let t = "",
                        n = "",
                        o = !1,
                        r = !1;
                    for (let s = 0; s < e.length; s++) {
                        const a = e[s];
                        if (" " === a || "\t" === a || "\r" === a) o || (n += a);
                        else if ("\n" === a) n = "", o = !0;
                        else {
                            if (r && o && (t += " "), t += n, n = "", "&" === a) {
                                const {
                                    entity: n,
                                    newI: o
                                } = d(e, s + 1);
                                s = o - 1, t += n
                            } else t += a;
                            r = !0, o = !1
                        }
                    }
                    o || (t += n);
                    return JSON.stringify(t)
                }(n);
            return '""' === r ? (this.tokens.replaceToken(o), !1) : (this.tokens.replaceToken(`${e?", ":""}${r}${o}`), !0)
        }
        getDevSource(e) {
            return `{fileName: ${this.getFilenameVarName()}, ${e}}`
        }
        getFilenameVarName() {
            return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName")), this.filenameVarName
        }
        constructor(e, t, n, o, r) {
            super(), this.rootTransformer = e, this.tokens = t, this.importProcessor = n, this.nameManager = o, this.options = r, l.prototype.__init.call(this), l.prototype.__init2.call(this), l.prototype.__init3.call(this), l.prototype.__init4.call(this), l.prototype.__init5.call(this), this.jsxPragmaInfo = (0, c.default)(r), this.isAutomaticRuntime = "automatic" === r.jsxRuntime, this.jsxImportSource = r.jsxImportSource || "react"
        }
    }

    function u(e) {
        const t = e.charCodeAt(0);
        return t >= i.charCodes.lowercaseA && t <= i.charCodes.lowercaseZ
    }

    function h(e) {
        let t = 0,
            n = 0;
        for (const o of e) "\n" === o ? (t++, n = 0) : " " === o && n++;
        return "\n".repeat(t) + " ".repeat(n)
    }

    function d(e, t) {
        let n, o = "",
            s = 0,
            a = t;
        if ("#" === e[a]) {
            let t, o = 10;
            if (a++, "x" === e[a])
                for (o = 16, a++, t = a; a < e.length && ((c = e.charCodeAt(a)) >= i.charCodes.digit0 && c <= i.charCodes.digit9 || c >= i.charCodes.lowercaseA && c <= i.charCodes.lowercaseF || c >= i.charCodes.uppercaseA && c <= i.charCodes.uppercaseF);) a++;
            else
                for (t = a; a < e.length && T(e.charCodeAt(a));) a++;
            if (";" === e[a]) {
                const r = e.slice(t, a);
                r && (a++, n = String.fromCodePoint(parseInt(r, o)))
            }
        } else
            for (; a < e.length && s++ < 10;) {
                const t = e[a];
                if (a++, ";" === t) {
                    n = r.default.get(o);
                    break
                }
                o += t
            }
        var c;
        return n ? {
            entity: n,
            newI: a
        } : {
            entity: "&",
            newI: t
        }
    }

    function T(e) {
        return e >= i.charCodes.digit0 && e <= i.charCodes.digit9
    }
})), n.register("fGXj0", (function(e, n) {
    t(e.exports, "default", (function() {
        return o
    }));
    var o = new Map([
        ["quot", '"'],
        ["amp", "&"],
        ["apos", "'"],
        ["lt", "<"],
        ["gt", ">"],
        ["nbsp", " "],
        ["iexcl", "¡"],
        ["cent", "¢"],
        ["pound", "£"],
        ["curren", "¤"],
        ["yen", "¥"],
        ["brvbar", "¦"],
        ["sect", "§"],
        ["uml", "¨"],
        ["copy", "©"],
        ["ordf", "ª"],
        ["laquo", "«"],
        ["not", "¬"],
        ["shy", "­"],
        ["reg", "®"],
        ["macr", "¯"],
        ["deg", "°"],
        ["plusmn", "±"],
        ["sup2", "²"],
        ["sup3", "³"],
        ["acute", "´"],
        ["micro", "µ"],
        ["para", "¶"],
        ["middot", "·"],
        ["cedil", "¸"],
        ["sup1", "¹"],
        ["ordm", "º"],
        ["raquo", "»"],
        ["frac14", "¼"],
        ["frac12", "½"],
        ["frac34", "¾"],
        ["iquest", "¿"],
        ["Agrave", "À"],
        ["Aacute", "Á"],
        ["Acirc", "Â"],
        ["Atilde", "Ã"],
        ["Auml", "Ä"],
        ["Aring", "Å"],
        ["AElig", "Æ"],
        ["Ccedil", "Ç"],
        ["Egrave", "È"],
        ["Eacute", "É"],
        ["Ecirc", "Ê"],
        ["Euml", "Ë"],
        ["Igrave", "Ì"],
        ["Iacute", "Í"],
        ["Icirc", "Î"],
        ["Iuml", "Ï"],
        ["ETH", "Ð"],
        ["Ntilde", "Ñ"],
        ["Ograve", "Ò"],
        ["Oacute", "Ó"],
        ["Ocirc", "Ô"],
        ["Otilde", "Õ"],
        ["Ouml", "Ö"],
        ["times", "×"],
        ["Oslash", "Ø"],
        ["Ugrave", "Ù"],
        ["Uacute", "Ú"],
        ["Ucirc", "Û"],
        ["Uuml", "Ü"],
        ["Yacute", "Ý"],
        ["THORN", "Þ"],
        ["szlig", "ß"],
        ["agrave", "à"],
        ["aacute", "á"],
        ["acirc", "â"],
        ["atilde", "ã"],
        ["auml", "ä"],
        ["aring", "å"],
        ["aelig", "æ"],
        ["ccedil", "ç"],
        ["egrave", "è"],
        ["eacute", "é"],
        ["ecirc", "ê"],
        ["euml", "ë"],
        ["igrave", "ì"],
        ["iacute", "í"],
        ["icirc", "î"],
        ["iuml", "ï"],
        ["eth", "ð"],
        ["ntilde", "ñ"],
        ["ograve", "ò"],
        ["oacute", "ó"],
        ["ocirc", "ô"],
        ["otilde", "õ"],
        ["ouml", "ö"],
        ["divide", "÷"],
        ["oslash", "ø"],
        ["ugrave", "ù"],
        ["uacute", "ú"],
        ["ucirc", "û"],
        ["uuml", "ü"],
        ["yacute", "ý"],
        ["thorn", "þ"],
        ["yuml", "ÿ"],
        ["OElig", "Œ"],
        ["oelig", "œ"],
        ["Scaron", "Š"],
        ["scaron", "š"],
        ["Yuml", "Ÿ"],
        ["fnof", "ƒ"],
        ["circ", "ˆ"],
        ["tilde", "˜"],
        ["Alpha", "Α"],
        ["Beta", "Β"],
        ["Gamma", "Γ"],
        ["Delta", "Δ"],
        ["Epsilon", "Ε"],
        ["Zeta", "Ζ"],
        ["Eta", "Η"],
        ["Theta", "Θ"],
        ["Iota", "Ι"],
        ["Kappa", "Κ"],
        ["Lambda", "Λ"],
        ["Mu", "Μ"],
        ["Nu", "Ν"],
        ["Xi", "Ξ"],
        ["Omicron", "Ο"],
        ["Pi", "Π"],
        ["Rho", "Ρ"],
        ["Sigma", "Σ"],
        ["Tau", "Τ"],
        ["Upsilon", "Υ"],
        ["Phi", "Φ"],
        ["Chi", "Χ"],
        ["Psi", "Ψ"],
        ["Omega", "Ω"],
        ["alpha", "α"],
        ["beta", "β"],
        ["gamma", "γ"],
        ["delta", "δ"],
        ["epsilon", "ε"],
        ["zeta", "ζ"],
        ["eta", "η"],
        ["theta", "θ"],
        ["iota", "ι"],
        ["kappa", "κ"],
        ["lambda", "λ"],
        ["mu", "μ"],
        ["nu", "ν"],
        ["xi", "ξ"],
        ["omicron", "ο"],
        ["pi", "π"],
        ["rho", "ρ"],
        ["sigmaf", "ς"],
        ["sigma", "σ"],
        ["tau", "τ"],
        ["upsilon", "υ"],
        ["phi", "φ"],
        ["chi", "χ"],
        ["psi", "ψ"],
        ["omega", "ω"],
        ["thetasym", "ϑ"],
        ["upsih", "ϒ"],
        ["piv", "ϖ"],
        ["ensp", " "],
        ["emsp", " "],
        ["thinsp", " "],
        ["zwnj", "‌"],
        ["zwj", "‍"],
        ["lrm", "‎"],
        ["rlm", "‏"],
        ["ndash", "–"],
        ["mdash", "—"],
        ["lsquo", "‘"],
        ["rsquo", "’"],
        ["sbquo", "‚"],
        ["ldquo", "“"],
        ["rdquo", "”"],
        ["bdquo", "„"],
        ["dagger", "†"],
        ["Dagger", "‡"],
        ["bull", "•"],
        ["hellip", "…"],
        ["permil", "‰"],
        ["prime", "′"],
        ["Prime", "″"],
        ["lsaquo", "‹"],
        ["rsaquo", "›"],
        ["oline", "‾"],
        ["frasl", "⁄"],
        ["euro", "€"],
        ["image", "ℑ"],
        ["weierp", "℘"],
        ["real", "ℜ"],
        ["trade", "™"],
        ["alefsym", "ℵ"],
        ["larr", "←"],
        ["uarr", "↑"],
        ["rarr", "→"],
        ["darr", "↓"],
        ["harr", "↔"],
        ["crarr", "↵"],
        ["lArr", "⇐"],
        ["uArr", "⇑"],
        ["rArr", "⇒"],
        ["dArr", "⇓"],
        ["hArr", "⇔"],
        ["forall", "∀"],
        ["part", "∂"],
        ["exist", "∃"],
        ["empty", "∅"],
        ["nabla", "∇"],
        ["isin", "∈"],
        ["notin", "∉"],
        ["ni", "∋"],
        ["prod", "∏"],
        ["sum", "∑"],
        ["minus", "−"],
        ["lowast", "∗"],
        ["radic", "√"],
        ["prop", "∝"],
        ["infin", "∞"],
        ["ang", "∠"],
        ["and", "∧"],
        ["or", "∨"],
        ["cap", "∩"],
        ["cup", "∪"],
        ["int", "∫"],
        ["there4", "∴"],
        ["sim", "∼"],
        ["cong", "≅"],
        ["asymp", "≈"],
        ["ne", "≠"],
        ["equiv", "≡"],
        ["le", "≤"],
        ["ge", "≥"],
        ["sub", "⊂"],
        ["sup", "⊃"],
        ["nsub", "⊄"],
        ["sube", "⊆"],
        ["supe", "⊇"],
        ["oplus", "⊕"],
        ["otimes", "⊗"],
        ["perp", "⊥"],
        ["sdot", "⋅"],
        ["lceil", "⌈"],
        ["rceil", "⌉"],
        ["lfloor", "⌊"],
        ["rfloor", "⌋"],
        ["lang", "〈"],
        ["rang", "〉"],
        ["loz", "◊"],
        ["spades", "♠"],
        ["clubs", "♣"],
        ["hearts", "♥"],
        ["diams", "♦"]
    ])
})), n.register("lUEft", (function(e, n) {
    function o(e) {
        const [t, n] = r(e.jsxPragma || "React.createElement"), [o, s] = r(e.jsxFragmentPragma || "React.Fragment");
        return {
            base: t,
            suffix: n,
            fragmentBase: o,
            fragmentSuffix: s
        }
    }

    function r(e) {
        let t = e.indexOf(".");
        return -1 === t && (t = e.length), [e.slice(0, t), e.slice(t)]
    }
    t(e.exports, "default", (function() {
        return o
    }))
})), n.register("d2hew", (function(e, n) {
    t(e.exports, "default", (function() {
        return o
    }));
    class o {
        getPrefixCode() {
            return ""
        }
        getHoistedCode() {
            return ""
        }
        getSuffixCode() {
            return ""
        }
    }
})), n.register("cc1ik", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("es2xf"),
        s = n("8s4y4");

    function a({
        code: e,
        mappings: t
    }, n, o, a, i) {
        const c = function(e, t) {
                const n = new Array(t.length);
                let o = 0,
                    r = t[o].start,
                    a = 0;
                for (let i = 0; i < e.length; i++) i === r && (n[o] = r - a, o++, r = t[o].start), e.charCodeAt(i) === s.charCodes.lineFeed && (a = i + 1);
                return n
            }(a, i),
            p = new(0, r.GenMapping)({
                file: o.compiledFilename
            });
        let l = 0,
            u = t[0];
        for (; void 0 === u && l < t.length - 1;) l++, u = t[l];
        let h = 0,
            d = 0;
        u !== d && (0, r.maybeAddSegment)(p, h, 0, n, h, 0);
        for (let o = 0; o < e.length; o++) {
            if (o === u) {
                const e = u - d,
                    s = c[l];
                for ((0, r.maybeAddSegment)(p, h, e, n, h, s);
                    (u === o || void 0 === u) && l < t.length - 1;) l++, u = t[l]
            }
            e.charCodeAt(o) === s.charCodes.lineFeed && (h++, d = o + 1, u !== d && (0, r.maybeAddSegment)(p, h, 0, n, h, 0))
        }
        const {
            sourceRoot: T,
            sourcesContent: y,
            ...f
        } = (0, r.toEncodedMap)(p);
        return f
    }
})), n.register("es2xf", (function(e, o) {
    t(e.exports, "maybeAddSegment", (function() {
        return p
    })), t(e.exports, "toEncodedMap", (function() {
        return d
    })), t(e.exports, "GenMapping", (function() {
        return k
    }));
    var r = n("cIFPq"),
        s = n("iCn2F"),
        a = n("gitte");
    let i, c, p, l, u, h, d, T, y, f;
    class k {
        constructor({
            file: e,
            sourceRoot: t
        } = {}) {
            this._names = new(0, r.SetArray), this._sources = new(0, r.SetArray), this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = t
        }
    }

    function m(e, t, n) {
        for (let n = e.length; n > t; n--) e[n] = e[n - 1];
        e[t] = n
    }

    function g(e, t) {
        for (let n = 0; n < t.length; n++)(0, r.put)(e, t[n])
    }

    function x(e, t, n) {
        const {
            generated: o,
            source: r,
            original: s,
            name: a,
            content: i
        } = n;
        if (!r) return f(e, t, o.line - 1, o.column, null, null, null, null, null);
        const c = r;
        return f(e, t, o.line - 1, o.column, c, s.line - 1, s.column, a, i)
    }
    i = (e, t, n, o, r, s, a, i) => f(!1, e, t, n, o, r, s, a, i), p = (e, t, n, o, r, s, a, i) => f(!0, e, t, n, o, r, s, a, i), c = (e, t) => x(!1, e, t), l = (e, t) => x(!0, e, t), u = (e, t, n) => {
        const {
            _sources: o,
            _sourcesContent: s
        } = e;
        s[(0, r.put)(o, t)] = n
    }, h = e => {
        const {
            file: t,
            sourceRoot: n,
            _mappings: o,
            _sources: r,
            _sourcesContent: s,
            _names: a
        } = e;
        return function(e) {
            const {
                length: t
            } = e;
            let n = t;
            for (let t = n - 1; t >= 0 && !(e[t].length > 0); n = t, t--);
            n < t && (e.length = n)
        }(o), {
            version: 3,
            file: t || void 0,
            names: a.array,
            sourceRoot: n || void 0,
            sources: r.array,
            sourcesContent: s,
            mappings: o
        }
    }, d = e => {
        const t = h(e);
        return Object.assign(Object.assign({}, t), {
            mappings: (0, s.encode)(t.mappings)
        })
    }, y = e => {
        const t = [],
            {
                _mappings: n,
                _sources: o,
                _names: r
            } = e;
        for (let e = 0; e < n.length; e++) {
            const s = n[e];
            for (let n = 0; n < s.length; n++) {
                const a = s[n],
                    i = {
                        line: e + 1,
                        column: a[0]
                    };
                let c, p, l;
                1 !== a.length && (c = o.array[a[1]], p = {
                    line: a[2] + 1,
                    column: a[3]
                }, 5 === a.length && (l = r.array[a[4]])), t.push({
                    generated: i,
                    source: c,
                    original: p,
                    name: l
                })
            }
        }
        return t
    }, T = e => {
        const t = new(0, a.TraceMap)(e),
            n = new k({
                file: t.file,
                sourceRoot: t.sourceRoot
            });
        return g(n._names, t.names), g(n._sources, t.sources), n._sourcesContent = t.sourcesContent || t.sources.map((() => null)), n._mappings = (0, a.decodedMappings)(t), n
    }, f = (e, t, n, o, s, a, i, c, p) => {
        const {
            _mappings: l,
            _sources: u,
            _sourcesContent: h,
            _names: d
        } = t, T = function(e, t) {
            for (let n = e.length; n <= t; n++) e[n] = [];
            return e[t]
        }(l, n), y = function(e, t) {
            let n = e.length;
            for (let o = n - 1; o >= 0 && !(t >= e[o][0]); n = o--);
            return n
        }(T, o);
        if (!s) {
            if (e && function(e, t) {
                    if (0 === t) return !0;
                    const n = e[t - 1];
                    return 1 === n.length
                }(T, y)) return;
            return m(T, y, [o])
        }
        const f = (0, r.put)(u, s),
            k = c ? (0, r.put)(d, c) : -1;
        if (f === h.length && (h[f] = null != p ? p : null), !e || ! function(e, t, n, o, r, s) {
                if (0 === t) return !1;
                const a = e[t - 1];
                return 1 !== a.length && n === a[1] && o === a[2] && r === a[3] && s === (5 === a.length ? a[4] : -1)
            }(T, y, f, a, i, k)) return m(T, y, c ? [o, f, a, i, k] : [o, f, a, i])
    }
})), n.register("cIFPq", (function(e, n) {
    let o, r, s;
    t(e.exports, "put", (function() {
        return r
    })), t(e.exports, "SetArray", (function() {
        return a
    }));
    class a {
        constructor() {
            this._indexes = {
                __proto__: null
            }, this.array = []
        }
    }
    o = (e, t) => e._indexes[t], r = (e, t) => {
        const n = o(e, t);
        if (void 0 !== n) return n;
        const {
            array: r,
            _indexes: s
        } = e;
        return s[t] = r.push(t) - 1
    }, s = e => {
        const {
            array: t,
            _indexes: n
        } = e;
        0 !== t.length && (n[t.pop()] = void 0)
    }
})), n.register("iCn2F", (function(e, o) {
    t(e.exports, "decode", (function() {
        return u
    })), t(e.exports, "encode", (function() {
        return k
    }));
    var r = n("eY7QQ").Buffer;
    const s = ",".charCodeAt(0),
        a = ";".charCodeAt(0),
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        c = new Uint8Array(64),
        p = new Uint8Array(128);
    for (let e = 0; e < i.length; e++) {
        const t = i.charCodeAt(e);
        c[e] = t, p[t] = e
    }
    const l = "undefined" != typeof TextDecoder ? new TextDecoder : void 0 !== r ? {
        decode: e => r.from(e.buffer, e.byteOffset, e.byteLength).toString()
    } : {
        decode(e) {
            let t = "";
            for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
            return t
        }
    };

    function u(e) {
        const t = new Int32Array(5),
            n = [];
        let o = 0;
        do {
            const r = h(e, o),
                s = [];
            let a = !0,
                i = 0;
            t[0] = 0;
            for (let n = o; n < r; n++) {
                let o;
                n = d(e, n, t, 0);
                const c = t[0];
                c < i && (a = !1), i = c, T(e, n, r) ? (n = d(e, n, t, 1), n = d(e, n, t, 2), n = d(e, n, t, 3), T(e, n, r) ? (n = d(e, n, t, 4), o = [c, t[1], t[2], t[3], t[4]]) : o = [c, t[1], t[2], t[3]]) : o = [c], s.push(o)
            }
            a || y(s), n.push(s), o = r + 1
        } while (o <= e.length);
        return n
    }

    function h(e, t) {
        const n = e.indexOf(";", t);
        return -1 === n ? e.length : n
    }

    function d(e, t, n, o) {
        let r = 0,
            s = 0,
            a = 0;
        do {
            const n = e.charCodeAt(t++);
            a = p[n], r |= (31 & a) << s, s += 5
        } while (32 & a);
        const i = 1 & r;
        return r >>>= 1, i && (r = -2147483648 | -r), n[o] += r, t
    }

    function T(e, t, n) {
        return !(t >= n) && e.charCodeAt(t) !== s
    }

    function y(e) {
        e.sort(f)
    }

    function f(e, t) {
        return e[0] - t[0]
    }

    function k(e) {
        const t = new Int32Array(5),
            n = 16384,
            o = 16348,
            r = new Uint8Array(n),
            i = r.subarray(0, o);
        let c = 0,
            p = "";
        for (let u = 0; u < e.length; u++) {
            const h = e[u];
            if (u > 0 && (c === n && (p += l.decode(r), c = 0), r[c++] = a), 0 !== h.length) {
                t[0] = 0;
                for (let e = 0; e < h.length; e++) {
                    const n = h[e];
                    c > o && (p += l.decode(i), r.copyWithin(0, o, c), c -= o), e > 0 && (r[c++] = s), c = m(r, c, t, n, 0), 1 !== n.length && (c = m(r, c, t, n, 1), c = m(r, c, t, n, 2), c = m(r, c, t, n, 3), 4 !== n.length && (c = m(r, c, t, n, 4)))
                }
            }
        }
        return p + l.decode(r.subarray(0, c))
    }

    function m(e, t, n, o, r) {
        const s = o[r];
        let a = s - n[r];
        n[r] = s, a = a < 0 ? -a << 1 | 1 : a << 1;
        do {
            let n = 31 & a;
            a >>>= 5, a > 0 && (n |= 32), e[t++] = c[n]
        } while (a > 0);
        return t
    }
})), n.register("gitte", (function(e, o) {
    t(e.exports, "TraceMap", (function() {
        return N
    })), t(e.exports, "decodedMappings", (function() {
        return b
    }));
    var r = n("iCn2F"),
        s = n("imBm5");

    function a(e, t) {
        return t && !t.endsWith("/") && (t += "/"), (0, s.default)(e, t)
    }

    function i(e, t) {
        for (let n = t; n < e.length; n++)
            if (!c(e[n])) return n;
        return e.length
    }

    function c(e) {
        for (let t = 1; t < e.length; t++)
            if (e[t][0] < e[t - 1][0]) return !1;
        return !0
    }

    function p(e, t) {
        return t || (e = e.slice()), e.sort(l)
    }

    function l(e, t) {
        return e[0] - t[0]
    }
    let u = !1;

    function h(e, t, n) {
        for (let o = n + 1; o < e.length && e[o][0] === t; n = o++);
        return n
    }

    function d(e, t, n) {
        for (let o = n - 1; o >= 0 && e[o][0] === t; n = o--);
        return n
    }

    function T() {
        return {
            lastKey: -1,
            lastNeedle: -1,
            lastIndex: -1
        }
    }

    function y(e, t, n, o) {
        const {
            lastKey: r,
            lastNeedle: s,
            lastIndex: a
        } = n;
        let i = 0,
            c = e.length - 1;
        if (o === r) {
            if (t === s) return u = -1 !== a && e[a][0] === t, a;
            t >= s ? i = -1 === a ? 0 : a : c = a
        }
        return n.lastKey = o, n.lastNeedle = t, n.lastIndex = function(e, t, n, o) {
            for (; n <= o;) {
                const r = n + (o - n >> 1),
                    s = e[r][0] - t;
                if (0 === s) return u = !0, r;
                s < 0 ? n = r + 1 : o = r - 1
            }
            return u = !1, n - 1
        }(e, t, i, c)
    }

    function f(e, t, n) {
        for (let n = e.length; n > t; n--) e[n] = e[n - 1];
        e[t] = n
    }

    function k() {
        return {
            __proto__: null
        }
    }
    const m = "`line` must be greater than 0 (lines start at line 1)",
        g = "`column` must be greater than or equal to 0 (columns start at column 0)";
    let x, b, C, _, w, v, I, E, S, A, R;
    class N {
        constructor(e, t) {
            const n = "string" == typeof e;
            if (!n && e._decodedMemo) return e;
            const o = n ? JSON.parse(e) : e,
                {
                    version: r,
                    file: s,
                    names: c,
                    sourceRoot: l,
                    sources: u,
                    sourcesContent: h
                } = o;
            this.version = r, this.file = s, this.names = c, this.sourceRoot = l, this.sources = u, this.sourcesContent = h;
            const d = a(l || "", function(e) {
                if (!e) return "";
                const t = e.lastIndexOf("/");
                return e.slice(0, t + 1)
            }(t));
            this.resolvedSources = u.map((e => a(e || "", d)));
            const {
                mappings: T
            } = o;
            "string" == typeof T ? (this._encoded = T, this._decoded = void 0) : (this._encoded = void 0, this._decoded = function(e, t) {
                const n = i(e, 0);
                if (n === e.length) return e;
                t || (e = e.slice());
                for (let o = n; o < e.length; o = i(e, o + 1)) e[o] = p(e[o], t);
                return e
            }(T, n)), this._decodedMemo = {
                lastKey: -1,
                lastNeedle: -1,
                lastIndex: -1
            }, this._bySources = void 0, this._bySourceMemos = void 0
        }
    }

    function L(e, t) {
        return {
            version: e.version,
            file: e.file,
            names: e.names,
            sourceRoot: e.sourceRoot,
            sources: e.sources,
            sourcesContent: e.sourcesContent,
            mappings: t
        }
    }

    function F(e, t, n, o) {
        return {
            source: e,
            line: t,
            column: n,
            name: o
        }
    }

    function P(e, t) {
        return {
            line: e,
            column: t
        }
    }

    function O(e, t, n, o, r) {
        let s = y(e, o, t, n);
        return u ? s = (-1 === r ? h : d)(e, o, s) : -1 === r && s++, -1 === s || s === e.length ? -1 : s
    }(() => {
        function e(e, t, n, o, r, s) {
            if (--n < 0) throw new Error(m);
            if (o < 0) throw new Error(g);
            const {
                sources: a,
                resolvedSources: i
            } = e;
            let c = a.indexOf(t);
            if (-1 === c && (c = i.indexOf(t)), -1 === c) return s ? [] : P(null, null);
            const p = e._bySources || (e._bySources = function(e, t) {
                    const n = t.map(k);
                    for (let o = 0; o < e.length; o++) {
                        const r = e[o];
                        for (let e = 0; e < r.length; e++) {
                            const s = r[e];
                            if (1 === s.length) continue;
                            const a = s[1],
                                i = s[2],
                                c = s[3],
                                p = n[a],
                                l = p[i] || (p[i] = []),
                                u = t[a],
                                d = h(l, c, y(l, c, u, i));
                            f(l, u.lastIndex = d + 1, [c, o, s[0]])
                        }
                    }
                    return n
                }(b(e), e._bySourceMemos = a.map(T))),
                l = p[c][n];
            if (null == l) return s ? [] : P(null, null);
            const x = e._bySourceMemos[c];
            if (s) return function(e, t, n, o, r) {
                let s = O(e, t, n, o, 1);
                u || -1 !== r || s++;
                if (-1 === s || s === e.length) return [];
                const a = u ? o : e[s][0];
                u || (s = d(e, a, s));
                const i = h(e, a, s),
                    c = [];
                for (; s <= i; s++) {
                    const t = e[s];
                    c.push(P(t[1] + 1, t[2]))
                }
                return c
            }(l, x, n, o, r);
            const C = O(l, x, n, o, r);
            if (-1 === C) return P(null, null);
            const _ = l[C];
            return P(_[1] + 1, _[2])
        }
        x = e => {
            var t;
            return null !== (t = e._encoded) && void 0 !== t ? t : e._encoded = (0, r.encode)(e._decoded)
        }, b = e => e._decoded || (e._decoded = (0, r.decode)(e._encoded)), C = (e, t, n) => {
            const o = b(e);
            if (t >= o.length) return null;
            const r = o[t],
                s = O(r, e._decodedMemo, t, n, 1);
            return -1 === s ? null : r[s]
        }, _ = (e, {
            line: t,
            column: n,
            bias: o
        }) => {
            if (--t < 0) throw new Error(m);
            if (n < 0) throw new Error(g);
            const r = b(e);
            if (t >= r.length) return F(null, null, null, null);
            const s = r[t],
                a = O(s, e._decodedMemo, t, n, o || 1);
            if (-1 === a) return F(null, null, null, null);
            const i = s[a];
            if (1 === i.length) return F(null, null, null, null);
            const {
                names: c,
                resolvedSources: p
            } = e;
            return F(p[i[1]], i[2] + 1, i[3], 5 === i.length ? c[i[4]] : null)
        }, v = (t, {
            source: n,
            line: o,
            column: r,
            bias: s
        }) => e(t, n, o, r, s || -1, !0), w = (t, {
            source: n,
            line: o,
            column: r,
            bias: s
        }) => e(t, n, o, r, s || 1, !1), I = (e, t) => {
            const n = b(e),
                {
                    names: o,
                    resolvedSources: r
                } = e;
            for (let e = 0; e < n.length; e++) {
                const s = n[e];
                for (let n = 0; n < s.length; n++) {
                    const a = s[n],
                        i = e + 1,
                        c = a[0];
                    let p = null,
                        l = null,
                        u = null,
                        h = null;
                    1 !== a.length && (p = r[a[1]], l = a[2] + 1, u = a[3]), 5 === a.length && (h = o[a[4]]), t({
                        generatedLine: i,
                        generatedColumn: c,
                        source: p,
                        originalLine: l,
                        originalColumn: u,
                        name: h
                    })
                }
            }
        }, E = (e, t) => {
            const {
                sources: n,
                resolvedSources: o,
                sourcesContent: r
            } = e;
            if (null == r) return null;
            let s = n.indexOf(t);
            return -1 === s && (s = o.indexOf(t)), -1 === s ? null : r[s]
        }, S = (e, t) => {
            const n = new N(L(e, []), t);
            return n._decoded = e.mappings, n
        }, A = e => L(e, b(e)), R = e => L(e, x(e))
    })()
})), n.register("imBm5", (function(e, n) {
    t(e.exports, "default", (function() {
        return T
    }));
    const o = /^[\w+.-]+:\/\//,
        r = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
        s = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    var a, i;

    function c(e) {
        return e.startsWith("/")
    }

    function p(e) {
        return /^[.?#]/.test(e)
    }

    function l(e) {
        const t = r.exec(e);
        return u(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "")
    }

    function u(e, t, n, o, r, s, i) {
        return {
            scheme: e,
            user: t,
            host: n,
            port: o,
            path: r,
            query: s,
            hash: i,
            type: a.Absolute
        }
    }

    function h(e) {
        if (function(e) {
                return e.startsWith("//")
            }(e)) {
            const t = l("http:" + e);
            return t.scheme = "", t.type = a.SchemeRelative, t
        }
        if (c(e)) {
            const t = l("http://foo.com" + e);
            return t.scheme = "", t.host = "", t.type = a.AbsolutePath, t
        }
        if (function(e) {
                return e.startsWith("file:")
            }(e)) return function(e) {
            const t = s.exec(e),
                n = t[2];
            return u("file:", "", t[1] || "", "", c(n) ? n : "/" + n, t[3] || "", t[4] || "")
        }(e);
        if (function(e) {
                return o.test(e)
            }(e)) return l(e);
        const t = l("http://foo.com/" + e);
        return t.scheme = "", t.host = "", t.type = e ? e.startsWith("?") ? a.Query : e.startsWith("#") ? a.Hash : a.RelativePath : a.Empty, t
    }

    function d(e, t) {
        const n = t <= a.RelativePath,
            o = e.path.split("/");
        let r = 1,
            s = 0,
            i = !1;
        for (let e = 1; e < o.length; e++) {
            const t = o[e];
            t ? (i = !1, "." !== t && (".." !== t ? (o[r++] = t, s++) : s ? (i = !0, s--, r--) : n && (o[r++] = t))) : i = !0
        }
        let c = "";
        for (let e = 1; e < r; e++) c += "/" + o[e];
        (!c || i && !c.endsWith("/..")) && (c += "/"), e.path = c
    }

    function T(e, t) {
        if (!e && !t) return "";
        const n = h(e);
        let o = n.type;
        if (t && o !== a.Absolute) {
            const e = h(t),
                r = e.type;
            switch (o) {
                case a.Empty:
                    n.hash = e.hash;
                case a.Hash:
                    n.query = e.query;
                case a.Query:
                case a.RelativePath:
                    ! function(e, t) {
                        d(t, t.type), "/" === e.path ? e.path = t.path : e.path = function(e) {
                            if (e.endsWith("/..")) return e;
                            const t = e.lastIndexOf("/");
                            return e.slice(0, t + 1)
                        }(t.path) + e.path
                    }(n, e);
                case a.AbsolutePath:
                    n.user = e.user, n.host = e.host, n.port = e.port;
                case a.SchemeRelative:
                    n.scheme = e.scheme
            }
            r > o && (o = r)
        }
        d(n, o);
        const r = n.query + n.hash;
        switch (o) {
            case a.Hash:
            case a.Query:
                return r;
            case a.RelativePath: {
                const o = n.path.slice(1);
                return o ? p(t || e) && !p(o) ? "./" + o + r : o + r : r || "."
            }
            case a.AbsolutePath:
                return n.path + r;
            default:
                return n.scheme + "//" + n.user + n.host + n.port + n.path + r
        }
    }(i = a || (a = {}))[i.Empty = 1] = "Empty", i[i.Hash = 2] = "Hash", i[i.Query = 3] = "Query", i[i.RelativePath = 4] = "RelativePath", i[i.AbsolutePath = 5] = "AbsolutePath", i[i.SchemeRelative = 6] = "SchemeRelative", i[i.Absolute = 7] = "Absolute"
})), n.register("4RO5f", (function(e, n) {
    t(e.exports, "HelperManager", (function() {
        return r
    }));
    const o = {
        require: '\n    import {createRequire as CREATE_REQUIRE_NAME} from "module";\n    const require = CREATE_REQUIRE_NAME(import.meta.url);\n  ',
        interopRequireWildcard: "\n    function interopRequireWildcard(obj) {\n      if (obj && obj.__esModule) {\n        return obj;\n      } else {\n        var newObj = {};\n        if (obj != null) {\n          for (var key in obj) {\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\n              newObj[key] = obj[key];\n            }\n          }\n        }\n        newObj.default = obj;\n        return newObj;\n      }\n    }\n  ",
        interopRequireDefault: "\n    function interopRequireDefault(obj) {\n      return obj && obj.__esModule ? obj : { default: obj };\n    }\n  ",
        createNamedExportFrom: "\n    function createNamedExportFrom(obj, localName, importedName) {\n      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});\n    }\n  ",
        createStarExport: '\n    function createStarExport(obj) {\n      Object.keys(obj)\n        .filter((key) => key !== "default" && key !== "__esModule")\n        .forEach((key) => {\n          if (exports.hasOwnProperty(key)) {\n            return;\n          }\n          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});\n        });\n    }\n  ',
        nullishCoalesce: "\n    function nullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return rhsFn();\n      }\n    }\n  ",
        asyncNullishCoalesce: "\n    async function asyncNullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return await rhsFn();\n      }\n    }\n  ",
        optionalChain: "\n    function optionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",
        asyncOptionalChain: "\n    async function asyncOptionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = await fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = await fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",
        optionalChainDelete: "\n    function optionalChainDelete(ops) {\n      const result = OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  ",
        asyncOptionalChainDelete: "\n    async function asyncOptionalChainDelete(ops) {\n      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  "
    };
    class r {
        __init() {
            this.helperNames = {}
        }
        __init2() {
            this.createRequireName = null
        }
        getHelperName(e) {
            let t = this.helperNames[e];
            return t || (t = this.nameManager.claimFreeName(`_${e}`), this.helperNames[e] = t, t)
        }
        emitHelpers() {
            let e = "";
            this.helperNames.optionalChainDelete && this.getHelperName("optionalChain"), this.helperNames.asyncOptionalChainDelete && this.getHelperName("asyncOptionalChain");
            for (const [t, n] of Object.entries(o)) {
                const o = this.helperNames[t];
                let r = n;
                "optionalChainDelete" === t ? r = r.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain) : "asyncOptionalChainDelete" === t ? r = r.replace("ASYNC_OPTIONAL_CHAIN_NAME", this.helperNames.asyncOptionalChain) : "require" === t && (null === this.createRequireName && (this.createRequireName = this.nameManager.claimFreeName("_createRequire")), r = r.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), o && (e += " ", e += r.replace(t, o).replace(/\s+/g, " ").trim())
            }
            return e
        }
        constructor(e) {
            this.nameManager = e, r.prototype.__init.call(this), r.prototype.__init2.call(this)
        }
    }
})), n.register("bZWKy", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("9OJHt"),
        s = n("31VH2");

    function a(e, t, n) {
        (function(e, t) {
            for (const n of e.tokens)
                if (n.type === s.TokenType.name && !n.isType && (0, r.isNonTopLevelDeclaration)(n) && t.has(e.identifierNameForToken(n))) return !0;
            return !1
        })(e, n) && function(e, t, n) {
            const o = [];
            let a = t.length - 1;
            for (let c = e.tokens.length - 1;; c--) {
                for (; o.length > 0 && o[o.length - 1].startTokenIndex === c + 1;) o.pop();
                for (; a >= 0 && t[a].endTokenIndex === c + 1;) o.push(t[a]), a--;
                if (c < 0) break;
                const p = e.tokens[c],
                    l = e.identifierNameForToken(p);
                if (o.length > 1 && !p.isType && p.type === s.TokenType.name && n.has(l))
                    if ((0, r.isBlockScopedDeclaration)(p)) i(o[o.length - 1], e, l);
                    else if ((0, r.isFunctionScopedDeclaration)(p)) {
                    let t = o.length - 1;
                    for (; t > 0 && !o[t].isFunctionScope;) t--;
                    if (t < 0) throw new Error("Did not find parent function scope.");
                    i(o[t], e, l)
                }
            }
            if (o.length > 0) throw new Error("Expected empty scope stack after processing file.")
        }(e, t, n)
    }

    function i(e, t, n) {
        for (let o = e.startTokenIndex; o < e.endTokenIndex; o++) {
            const e = t.tokens[o];
            e.type !== s.TokenType.name && e.type !== s.TokenType.jsxName || t.identifierNameForToken(e) !== n || (e.shadowsGlobal = !0)
        }
    }
})), n.register("8hynp", (function(e, o) {
    t(e.exports, "default", (function() {
        return s
    }));
    var r = n("4EOXF");
    class s {
        __init() {
            this.usedNames = new Set
        }
        claimFreeName(e) {
            const t = this.findFreeName(e);
            return this.usedNames.add(t), t
        }
        findFreeName(e) {
            if (!this.usedNames.has(e)) return e;
            let t = 2;
            for (; this.usedNames.has(e + String(t));) t++;
            return e + String(t)
        }
        constructor(e, t) {
            s.prototype.__init.call(this), this.usedNames = new Set((0, r.default)(e, t))
        }
    }
})), n.register("4EOXF", (function(e, o) {
    t(e.exports, "default", (function() {
        return s
    }));
    var r = n("31VH2");

    function s(e, t) {
        const n = [];
        for (const o of t) o.type === r.TokenType.name && n.push(e.slice(o.start, o.end));
        return n
    }
})), n.register("j6k02", (function(e, o) {
    t(e.exports, "validateOptions", (function() {
        return i
    }));
    var r = n("6qKXT"),
        s = n("4mwDi");
    const {
        Options: a
    } = (0, r.createCheckers)(s.default);

    function i(e) {
        a.strictCheck(e)
    }
})), n.register("6qKXT", (function(e, t) {
    var o = e.exports && e.exports.__spreadArrays || function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var o = Array(e),
            r = 0;
        for (t = 0; t < n; t++)
            for (var s = arguments[t], a = 0, i = s.length; a < i; a++, r++) o[r] = s[a];
        return o
    };
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.Checker = e.exports.createCheckers = void 0;
    var r = n("2oIhr"),
        s = n("g2YAs");
    r = n("2oIhr");
    Object.defineProperty(e.exports, "TArray", {
        enumerable: !0,
        get: function() {
            return r.TArray
        }
    }), Object.defineProperty(e.exports, "TEnumType", {
        enumerable: !0,
        get: function() {
            return r.TEnumType
        }
    }), Object.defineProperty(e.exports, "TEnumLiteral", {
        enumerable: !0,
        get: function() {
            return r.TEnumLiteral
        }
    }), Object.defineProperty(e.exports, "TFunc", {
        enumerable: !0,
        get: function() {
            return r.TFunc
        }
    }), Object.defineProperty(e.exports, "TIface", {
        enumerable: !0,
        get: function() {
            return r.TIface
        }
    }), Object.defineProperty(e.exports, "TLiteral", {
        enumerable: !0,
        get: function() {
            return r.TLiteral
        }
    }), Object.defineProperty(e.exports, "TName", {
        enumerable: !0,
        get: function() {
            return r.TName
        }
    }), Object.defineProperty(e.exports, "TOptional", {
        enumerable: !0,
        get: function() {
            return r.TOptional
        }
    }), Object.defineProperty(e.exports, "TParam", {
        enumerable: !0,
        get: function() {
            return r.TParam
        }
    }), Object.defineProperty(e.exports, "TParamList", {
        enumerable: !0,
        get: function() {
            return r.TParamList
        }
    }), Object.defineProperty(e.exports, "TProp", {
        enumerable: !0,
        get: function() {
            return r.TProp
        }
    }), Object.defineProperty(e.exports, "TTuple", {
        enumerable: !0,
        get: function() {
            return r.TTuple
        }
    }), Object.defineProperty(e.exports, "TType", {
        enumerable: !0,
        get: function() {
            return r.TType
        }
    }), Object.defineProperty(e.exports, "TUnion", {
        enumerable: !0,
        get: function() {
            return r.TUnion
        }
    }), Object.defineProperty(e.exports, "TIntersection", {
        enumerable: !0,
        get: function() {
            return r.TIntersection
        }
    }), Object.defineProperty(e.exports, "array", {
        enumerable: !0,
        get: function() {
            return r.array
        }
    }), Object.defineProperty(e.exports, "enumlit", {
        enumerable: !0,
        get: function() {
            return r.enumlit
        }
    }), Object.defineProperty(e.exports, "enumtype", {
        enumerable: !0,
        get: function() {
            return r.enumtype
        }
    }), Object.defineProperty(e.exports, "func", {
        enumerable: !0,
        get: function() {
            return r.func
        }
    }), Object.defineProperty(e.exports, "iface", {
        enumerable: !0,
        get: function() {
            return r.iface
        }
    }), Object.defineProperty(e.exports, "lit", {
        enumerable: !0,
        get: function() {
            return r.lit
        }
    }), Object.defineProperty(e.exports, "name", {
        enumerable: !0,
        get: function() {
            return r.name
        }
    }), Object.defineProperty(e.exports, "opt", {
        enumerable: !0,
        get: function() {
            return r.opt
        }
    }), Object.defineProperty(e.exports, "param", {
        enumerable: !0,
        get: function() {
            return r.param
        }
    }), Object.defineProperty(e.exports, "tuple", {
        enumerable: !0,
        get: function() {
            return r.tuple
        }
    }), Object.defineProperty(e.exports, "union", {
        enumerable: !0,
        get: function() {
            return r.union
        }
    }), Object.defineProperty(e.exports, "intersection", {
        enumerable: !0,
        get: function() {
            return r.intersection
        }
    }), Object.defineProperty(e.exports, "BasicType", {
        enumerable: !0,
        get: function() {
            return r.BasicType
        }
    });
    s = n("g2YAs");
    Object.defineProperty(e.exports, "VError", {
        enumerable: !0,
        get: function() {
            return s.VError
        }
    }), e.exports.createCheckers = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = Object.assign.apply(Object, o([{}, r.basicTypes], e)), s = {}, i = 0, c = e; i < c.length; i++)
            for (var p = c[i], l = 0, u = Object.keys(p); l < u.length; l++) {
                var h = u[l];
                s[h] = new a(n, p[h])
            }
        return s
    };
    var a = function() {
        function e(e, t, n) {
            if (void 0 === n && (n = "value"), this.suite = e, this.ttype = t, this._path = n, this.props = new Map, t instanceof r.TIface)
                for (var o = 0, s = t.props; o < s.length; o++) {
                    var a = s[o];
                    this.props.set(a.name, a.ttype)
                }
            this.checkerPlain = this.ttype.getChecker(e, !1), this.checkerStrict = this.ttype.getChecker(e, !0)
        }
        return e.prototype.setReportedPath = function(e) {
            this._path = e
        }, e.prototype.check = function(e) {
            return this._doCheck(this.checkerPlain, e)
        }, e.prototype.test = function(e) {
            return this.checkerPlain(e, new s.NoopContext)
        }, e.prototype.validate = function(e) {
            return this._doValidate(this.checkerPlain, e)
        }, e.prototype.strictCheck = function(e) {
            return this._doCheck(this.checkerStrict, e)
        }, e.prototype.strictTest = function(e) {
            return this.checkerStrict(e, new s.NoopContext)
        }, e.prototype.strictValidate = function(e) {
            return this._doValidate(this.checkerStrict, e)
        }, e.prototype.getProp = function(t) {
            var n = this.props.get(t);
            if (!n) throw new Error("Type has no property " + t);
            return new e(this.suite, n, this._path + "." + t)
        }, e.prototype.methodArgs = function(t) {
            var n = this._getMethod(t);
            return new e(this.suite, n.paramList)
        }, e.prototype.methodResult = function(t) {
            var n = this._getMethod(t);
            return new e(this.suite, n.result)
        }, e.prototype.getArgs = function() {
            if (!(this.ttype instanceof r.TFunc)) throw new Error("getArgs() applied to non-function");
            return new e(this.suite, this.ttype.paramList)
        }, e.prototype.getResult = function() {
            if (!(this.ttype instanceof r.TFunc)) throw new Error("getResult() applied to non-function");
            return new e(this.suite, this.ttype.result)
        }, e.prototype.getType = function() {
            return this.ttype
        }, e.prototype._doCheck = function(e, t) {
            if (!e(t, new s.NoopContext)) {
                var n = new s.DetailContext;
                throw e(t, n), n.getError(this._path)
            }
        }, e.prototype._doValidate = function(e, t) {
            if (e(t, new s.NoopContext)) return null;
            var n = new s.DetailContext;
            return e(t, n), n.getErrorDetail(this._path)
        }, e.prototype._getMethod = function(e) {
            var t = this.props.get(e);
            if (!t) throw new Error("Type has no property " + e);
            if (!(t instanceof r.TFunc)) throw new Error("Property " + e + " is not a method");
            return t
        }, e
    }();
    e.exports.Checker = a
})), n.register("2oIhr", (function(e, t) {
    var o, r = n("eY7QQ").Buffer,
        s = e.exports && e.exports.__extends || (o = function(e, t) {
            return o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }, o(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.basicTypes = e.exports.BasicType = e.exports.TParamList = e.exports.TParam = e.exports.param = e.exports.TFunc = e.exports.func = e.exports.TProp = e.exports.TOptional = e.exports.opt = e.exports.TIface = e.exports.iface = e.exports.TEnumLiteral = e.exports.enumlit = e.exports.TEnumType = e.exports.enumtype = e.exports.TIntersection = e.exports.intersection = e.exports.TUnion = e.exports.union = e.exports.TTuple = e.exports.tuple = e.exports.TArray = e.exports.array = e.exports.TLiteral = e.exports.lit = e.exports.TName = e.exports.name = e.exports.TType = void 0;
    var a = n("g2YAs"),
        i = function() {};

    function c(e) {
        return "string" == typeof e ? l(e) : e
    }

    function p(e, t) {
        var n = e[t];
        if (!n) throw new Error("Unknown type " + t);
        return n
    }

    function l(e) {
        return new u(e)
    }
    e.exports.TType = i, e.exports.name = l;
    var u = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.name = t, n._failMsg = "is not a " + t, n
        }
        return s(t, e), t.prototype.getChecker = function(e, n, o) {
            var r = this,
                s = p(e, this.name),
                a = s.getChecker(e, n, o);
            return s instanceof I || s instanceof t ? a : function(e, t) {
                return !!a(e, t) || t.fail(null, r._failMsg, 0)
            }
        }, t
    }(i);
    e.exports.TName = u, e.exports.lit = function(e) {
        return new h(e)
    };
    var h = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.value = t, n.name = JSON.stringify(t), n._failMsg = "is not " + n.name, n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this;
            return function(e, t) {
                return e === n.value || t.fail(null, n._failMsg, -1)
            }
        }, t
    }(i);
    e.exports.TLiteral = h, e.exports.array = function(e) {
        return new d(c(e))
    };
    var d = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.ttype = t, n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this.ttype.getChecker(e, t);
            return function(e, t) {
                if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
                for (var o = 0; o < e.length; o++) {
                    if (!n(e[o], t)) return t.fail(o, null, 1)
                }
                return !0
            }
        }, t
    }(i);
    e.exports.TArray = d, e.exports.tuple = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new T(e.map((function(e) {
            return c(e)
        })))
    };
    var T = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.ttypes = t, n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this.ttypes.map((function(n) {
                    return n.getChecker(e, t)
                })),
                o = function(e, t) {
                    if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
                    for (var o = 0; o < n.length; o++) {
                        if (!n[o](e[o], t)) return t.fail(o, null, 1)
                    }
                    return !0
                };
            return t ? function(e, t) {
                return !!o(e, t) && (e.length <= n.length || t.fail(n.length, "is extraneous", 2))
            } : o
        }, t
    }(i);
    e.exports.TTuple = T, e.exports.union = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new y(e.map((function(e) {
            return c(e)
        })))
    };
    var y = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            n.ttypes = t;
            var o = t.map((function(e) {
                    return e instanceof u || e instanceof h ? e.name : null
                })).filter((function(e) {
                    return e
                })),
                r = t.length - o.length;
            return o.length ? (r > 0 && o.push(r + " more"), n._failMsg = "is none of " + o.join(", ")) : n._failMsg = "is none of " + r + " types", n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this,
                o = this.ttypes.map((function(n) {
                    return n.getChecker(e, t)
                }));
            return function(e, t) {
                for (var r = t.unionResolver(), s = 0; s < o.length; s++) {
                    if (o[s](e, r.createContext())) return !0
                }
                return t.resolveUnion(r), t.fail(null, n._failMsg, 0)
            }
        }, t
    }(i);
    e.exports.TUnion = y, e.exports.intersection = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new f(e.map((function(e) {
            return c(e)
        })))
    };
    var f = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.ttypes = t, n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = new Set,
                o = this.ttypes.map((function(o) {
                    return o.getChecker(e, t, n)
                }));
            return function(e, t) {
                return !!o.every((function(n) {
                    return n(e, t)
                })) || t.fail(null, null, 0)
            }
        }, t
    }(i);
    e.exports.TIntersection = f, e.exports.enumtype = function(e) {
        return new k(e)
    };
    var k = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.members = t, n.validValues = new Set, n._failMsg = "is not a valid enum value", n.validValues = new Set(Object.keys(t).map((function(e) {
                return t[e]
            }))), n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this;
            return function(e, t) {
                return !!n.validValues.has(e) || t.fail(null, n._failMsg, 0)
            }
        }, t
    }(i);
    e.exports.TEnumType = k, e.exports.enumlit = function(e, t) {
        return new m(e, t)
    };
    var m = function(e) {
        function t(t, n) {
            var o = e.call(this) || this;
            return o.enumName = t, o.prop = n, o._failMsg = "is not " + t + "." + n, o
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this,
                o = p(e, this.enumName);
            if (!(o instanceof k)) throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
            var r = o.members[this.prop];
            if (!o.members.hasOwnProperty(this.prop)) throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
            return function(e, t) {
                return e === r || t.fail(null, n._failMsg, -1)
            }
        }, t
    }(i);

    function g(e) {
        return Object.keys(e).map((function(t) {
            return function(e, t) {
                return t instanceof b ? new C(e, t.ttype, !0) : new C(e, c(t), !1)
            }(t, e[t])
        }))
    }
    e.exports.TEnumLiteral = m, e.exports.iface = function(e, t) {
        return new x(e, g(t))
    };
    var x = function(e) {
        function t(t, n) {
            var o = e.call(this) || this;
            return o.bases = t, o.props = n, o.propSet = new Set(n.map((function(e) {
                return e.name
            }))), o
        }
        return s(t, e), t.prototype.getChecker = function(e, t, n) {
            var o = this,
                r = this.bases.map((function(n) {
                    return p(e, n).getChecker(e, t)
                })),
                s = this.props.map((function(n) {
                    return n.ttype.getChecker(e, t)
                })),
                i = new a.NoopContext,
                c = this.props.map((function(e, t) {
                    return !e.isOpt && !s[t](void 0, i)
                })),
                l = function(e, t) {
                    if ("object" != typeof e || null === e) return t.fail(null, "is not an object", 0);
                    for (var n = 0; n < r.length; n++)
                        if (!r[n](e, t)) return !1;
                    for (n = 0; n < s.length; n++) {
                        var a = o.props[n].name,
                            i = e[a];
                        if (void 0 === i) {
                            if (c[n]) return t.fail(a, "is missing", 1)
                        } else if (!s[n](i, t)) return t.fail(a, null, 1)
                    }
                    return !0
                };
            if (!t) return l;
            var u = this.propSet;
            return n && (this.propSet.forEach((function(e) {
                    return n.add(e)
                })), u = n),
                function(e, t) {
                    if (!l(e, t)) return !1;
                    for (var n in e)
                        if (!u.has(n)) return t.fail(n, "is extraneous", 2);
                    return !0
                }
        }, t
    }(i);
    e.exports.TIface = x, e.exports.opt = function(e) {
        return new b(c(e))
    };
    var b = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.ttype = t, n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this.ttype.getChecker(e, t);
            return function(e, t) {
                return void 0 === e || n(e, t)
            }
        }, t
    }(i);
    e.exports.TOptional = b;
    var C = function(e, t, n) {
        this.name = e, this.ttype = t, this.isOpt = n
    };
    e.exports.TProp = C, e.exports.func = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        return new _(new v(t), c(e))
    };
    var _ = function(e) {
        function t(t, n) {
            var o = e.call(this) || this;
            return o.paramList = t, o.result = n, o
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            return function(e, t) {
                return "function" == typeof e || t.fail(null, "is not a function", 0)
            }
        }, t
    }(i);
    e.exports.TFunc = _, e.exports.param = function(e, t, n) {
        return new w(e, c(t), Boolean(n))
    };
    var w = function(e, t, n) {
        this.name = e, this.ttype = t, this.isOpt = n
    };
    e.exports.TParam = w;
    var v = function(e) {
        function t(t) {
            var n = e.call(this) || this;
            return n.params = t, n
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this,
                o = this.params.map((function(n) {
                    return n.ttype.getChecker(e, t)
                })),
                r = new a.NoopContext,
                s = this.params.map((function(e, t) {
                    return !e.isOpt && !o[t](void 0, r)
                })),
                i = function(e, t) {
                    if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
                    for (var r = 0; r < o.length; r++) {
                        var a = n.params[r];
                        if (void 0 === e[r]) {
                            if (s[r]) return t.fail(a.name, "is missing", 1)
                        } else if (!o[r](e[r], t)) return t.fail(a.name, null, 1)
                    }
                    return !0
                };
            return t ? function(e, t) {
                return !!i(e, t) && (e.length <= o.length || t.fail(o.length, "is extraneous", 2))
            } : i
        }, t
    }(i);
    e.exports.TParamList = v;
    var I = function(e) {
        function t(t, n) {
            var o = e.call(this) || this;
            return o.validator = t, o.message = n, o
        }
        return s(t, e), t.prototype.getChecker = function(e, t) {
            var n = this;
            return function(e, t) {
                return !!n.validator(e) || t.fail(null, n.message, 0)
            }
        }, t
    }(i);
    e.exports.BasicType = I, e.exports.basicTypes = {
        any: new I((function(e) {
            return !0
        }), "is invalid"),
        number: new I((function(e) {
            return "number" == typeof e
        }), "is not a number"),
        object: new I((function(e) {
            return "object" == typeof e && e
        }), "is not an object"),
        boolean: new I((function(e) {
            return "boolean" == typeof e
        }), "is not a boolean"),
        string: new I((function(e) {
            return "string" == typeof e
        }), "is not a string"),
        symbol: new I((function(e) {
            return "symbol" == typeof e
        }), "is not a symbol"),
        void: new I((function(e) {
            return null == e
        }), "is not void"),
        undefined: new I((function(e) {
            return void 0 === e
        }), "is not undefined"),
        null: new I((function(e) {
            return null === e
        }), "is not null"),
        never: new I((function(e) {
            return !1
        }), "is unexpected"),
        Date: new I(S("[object Date]"), "is not a Date"),
        RegExp: new I(S("[object RegExp]"), "is not a RegExp")
    };
    var E = Object.prototype.toString;

    function S(e) {
        return function(t) {
            return "object" == typeof t && t && E.call(t) === e
        }
    }
    void 0 !== r && (e.exports.basicTypes.Buffer = new I((function(e) {
        return r.isBuffer(e)
    }), "is not a Buffer"));
    for (var A = function(t) {
            e.exports.basicTypes[t.name] = new I((function(e) {
                return e instanceof t
            }), "is not a " + t.name)
        }, R = 0, N = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ArrayBuffer]; R < N.length; R++) {
        A(N[R])
    }
})), n.register("g2YAs", (function(e, t) {
    var n, o = e.exports && e.exports.__extends || (n = function(e, t) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, n(e, t)
    }, function(e, t) {
        function o() {
            this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    });
    Object.defineProperty(e.exports, "__esModule", {
        value: !0
    }), e.exports.DetailContext = e.exports.NoopContext = e.exports.VError = void 0;
    var r = function(e) {
        function t(n, o) {
            var r = e.call(this, o) || this;
            return r.path = n, Object.setPrototypeOf(r, t.prototype), r
        }
        return o(t, e), t
    }(Error);
    e.exports.VError = r;
    var s = function() {
        function e() {}
        return e.prototype.fail = function(e, t, n) {
            return !1
        }, e.prototype.unionResolver = function() {
            return this
        }, e.prototype.createContext = function() {
            return this
        }, e.prototype.resolveUnion = function(e) {}, e
    }();
    e.exports.NoopContext = s;
    var a = function() {
        function e() {
            this._propNames = [""], this._messages = [null], this._score = 0
        }
        return e.prototype.fail = function(e, t, n) {
            return this._propNames.push(e), this._messages.push(t), this._score += n, !1
        }, e.prototype.unionResolver = function() {
            return new i
        }, e.prototype.resolveUnion = function(e) {
            for (var t, n, o = null, r = 0, s = e.contexts; r < s.length; r++) {
                var a = s[r];
                (!o || a._score >= o._score) && (o = a)
            }
            o && o._score > 0 && ((t = this._propNames).push.apply(t, o._propNames), (n = this._messages).push.apply(n, o._messages))
        }, e.prototype.getError = function(e) {
            for (var t = [], n = this._propNames.length - 1; n >= 0; n--) {
                var o = this._propNames[n];
                e += "number" == typeof o ? "[" + o + "]" : o ? "." + o : "";
                var s = this._messages[n];
                s && t.push(e + " " + s)
            }
            return new r(e, t.join("; "))
        }, e.prototype.getErrorDetail = function(e) {
            for (var t = [], n = this._propNames.length - 1; n >= 0; n--) {
                var o = this._propNames[n];
                e += "number" == typeof o ? "[" + o + "]" : o ? "." + o : "";
                var r = this._messages[n];
                r && t.push({
                    path: e,
                    message: r
                })
            }
            var s = null;
            for (n = t.length - 1; n >= 0; n--) s && (t[n].nested = [s]), s = t[n];
            return s
        }, e
    }();
    e.exports.DetailContext = a;
    var i = function() {
        function e() {
            this.contexts = []
        }
        return e.prototype.createContext = function() {
            var e = new a;
            return this.contexts.push(e), e
        }, e
    }()
})), n.register("4mwDi", (function(e, o) {
    t(e.exports, "default", (function() {
        return s
    }));
    var r = n("6qKXT");
    var s = {
        Transform: r.union(r.lit("jsx"), r.lit("typescript"), r.lit("flow"), r.lit("imports"), r.lit("react-hot-loader"), r.lit("jest")),
        SourceMapOptions: r.iface([], {
            compiledFilename: "string"
        }),
        Options: r.iface([], {
            transforms: r.array("Transform"),
            disableESTransforms: r.opt("boolean"),
            jsxRuntime: r.opt(r.union(r.lit("classic"), r.lit("automatic"), r.lit("preserve"))),
            production: r.opt("boolean"),
            jsxImportSource: r.opt("string"),
            jsxPragma: r.opt("string"),
            jsxFragmentPragma: r.opt("string"),
            keepUnusedImports: r.opt("boolean"),
            preserveDynamicImport: r.opt("boolean"),
            injectCreateRequireForImportRequire: r.opt("boolean"),
            enableLegacyTypeScriptModuleInterop: r.opt("boolean"),
            enableLegacyBabel5ModuleInterop: r.opt("boolean"),
            sourceMapOptions: r.opt("SourceMapOptions"),
            filePath: r.opt("string")
        })
    }
})), n.register("9d93y", (function(e, o) {
    t(e.exports, "File", (function() {
        return a
    })), t(e.exports, "parse", (function() {
        return i
    }));
    var r = n("kk1e5"),
        s = n("hqreD");
    class a {
        constructor(e, t) {
            this.tokens = e, this.scopes = t
        }
    }

    function i(e, t, n, o) {
        if (o && n) throw new Error("Cannot combine flow and typescript plugins.");
        (0, r.initParser)(e, t, n, o);
        const a = (0, s.parseFile)();
        if (r.state.error) throw (0, r.augmentError)(r.state.error);
        return a
    }
})), n.register("hqreD", (function(e, o) {
    t(e.exports, "parseFile", (function() {
        return c
    }));
    var r = n("9OJHt"),
        s = n("8s4y4"),
        a = n("kk1e5"),
        i = n("jKbdg");

    function c() {
        return 0 === a.state.pos && a.input.charCodeAt(0) === s.charCodes.numberSign && a.input.charCodeAt(1) === s.charCodes.exclamationMark && (0, r.skipLineComment)(2), (0, r.nextToken)(), (0, i.parseTopLevel)()
    }
})), n.register("jKbdg", (function(e, o) {
    t(e.exports, "parseTopLevel", (function() {
        return f
    })), t(e.exports, "parseBlockBody", (function() {
        return w
    })), t(e.exports, "parseStatement", (function() {
        return k
    })), t(e.exports, "parseDecorators", (function() {
        return g
    })), t(e.exports, "parseClass", (function() {
        return N
    })), t(e.exports, "parseVarStatement", (function() {
        return C
    })), t(e.exports, "parseBlock", (function() {
        return _
    })), t(e.exports, "parseImport", (function() {
        return z
    })), t(e.exports, "parseExport", (function() {
        return K
    })), t(e.exports, "parseFunction", (function() {
        return A
    })), t(e.exports, "baseParseMaybeDecoratorArguments", (function() {
        return b
    })), t(e.exports, "parseFunctionParams", (function() {
        return R
    })), t(e.exports, "parseExportFrom", (function() {
        return M
    })), t(e.exports, "parseExportSpecifiers", (function() {
        return H
    })), t(e.exports, "baseParseExportStar", (function() {
        return q
    }));
    var r = n("9d93y"),
        s = n("9O8bm"),
        a = n("2dIPf"),
        i = n("9OJHt"),
        c = n("46D9g"),
        p = n("g01J0"),
        l = n("31VH2"),
        u = n("8s4y4"),
        h = n("kk1e5"),
        d = n("kMwty"),
        T = n("li15Q"),
        y = n("5ofYc");

    function f() {
        if (w(l.TokenType.eof), h.state.scopes.push(new(0, p.Scope)(0, h.state.tokens.length, !0)), 0 !== h.state.scopeDepth) throw new Error(`Invalid scope depth at end of file: ${h.state.scopeDepth}`);
        return new(0, r.File)(h.state.tokens, h.state.scopes)
    }

    function k(e) {
        h.isFlowEnabled && (0, s.flowTryParseStatement)() || ((0, i.match)(l.TokenType.at) && g(), function(e) {
            if (h.isTypeScriptEnabled && (0, a.tsTryParseStatementContent)()) return;
            const t = h.state.type;
            switch (t) {
                case l.TokenType._break:
                case l.TokenType._continue:
                    return (0, i.next)(), void((0, y.isLineTerminator)() || ((0, d.parseIdentifier)(), (0, y.semicolon)()));
                case l.TokenType._debugger:
                    return (0, i.next)(), void(0, y.semicolon)();
                case l.TokenType._do:
                    return (0, i.next)(), k(!1), (0, y.expect)(l.TokenType._while), (0, d.parseParenExpression)(), void(0, i.eat)(l.TokenType.semi);
                case l.TokenType._for:
                    return void
                    function() {
                        h.state.scopeDepth++;
                        const e = h.state.tokens.length;
                        ! function() {
                            (0, i.next)();
                            let e = !1;
                            (0, y.isContextual)(c.ContextualKeyword._await) && (e = !0, (0, i.next)());
                            if ((0, y.expect)(l.TokenType.parenL), (0, i.match)(l.TokenType.semi)) return e && (0, y.unexpected)(), void v();
                            const t = m();
                            if (t || (0, i.match)(l.TokenType._var) || (0, i.match)(l.TokenType._let) || (0, i.match)(l.TokenType._const) || (0, y.isContextual)(c.ContextualKeyword._using) && !(0, y.isLookaheadContextual)(c.ContextualKeyword._of)) return t && (0, y.expectContextual)(c.ContextualKeyword._await), (0, i.next)(), E(!0, h.state.type !== l.TokenType._var), (0, i.match)(l.TokenType._in) || (0, y.isContextual)(c.ContextualKeyword._of) ? void I(e) : void v();
                            if ((0, d.parseExpression)(!0), (0, i.match)(l.TokenType._in) || (0, y.isContextual)(c.ContextualKeyword._of)) return void I(e);
                            e && (0, y.unexpected)();
                            v()
                        }();
                        const t = h.state.tokens.length;
                        h.state.scopes.push(new(0, p.Scope)(e, t, !1)), h.state.scopeDepth--
                    }();
                case l.TokenType._function:
                    if ((0, i.lookaheadType)() === l.TokenType.dot) break;
                    return e || (0, y.unexpected)(), void
                    function() {
                        const e = h.state.start;
                        (0, i.next)(), A(e, !0)
                    }();
                case l.TokenType._class:
                    return e || (0, y.unexpected)(), void N(!0);
                case l.TokenType._if:
                    return (0, i.next)(), (0, d.parseParenExpression)(), k(!1), void((0, i.eat)(l.TokenType._else) && k(!1));
                case l.TokenType._return:
                    return (0, i.next)(), void((0, y.isLineTerminator)() || ((0, d.parseExpression)(), (0, y.semicolon)()));
                case l.TokenType._switch:
                    return void
                    function() {
                        (0, i.next)(), (0, d.parseParenExpression)(), h.state.scopeDepth++;
                        const e = h.state.tokens.length;
                        (0, y.expect)(l.TokenType.braceL);
                        for (; !(0, i.match)(l.TokenType.braceR) && !h.state.error;)
                            if ((0, i.match)(l.TokenType._case) || (0, i.match)(l.TokenType._default)) {
                                const e = (0, i.match)(l.TokenType._case);
                                (0, i.next)(), e && (0, d.parseExpression)(), (0, y.expect)(l.TokenType.colon)
                            } else k(!0);
                        (0, i.next)();
                        const t = h.state.tokens.length;
                        h.state.scopes.push(new(0, p.Scope)(e, t, !1)), h.state.scopeDepth--
                    }();
                case l.TokenType._throw:
                    return (0, i.next)(), (0, d.parseExpression)(), void(0, y.semicolon)();
                case l.TokenType._try:
                    return void
                    function() {
                        if ((0, i.next)(), _(), (0, i.match)(l.TokenType._catch)) {
                            (0, i.next)();
                            let e = null;
                            if ((0, i.match)(l.TokenType.parenL) && (h.state.scopeDepth++, e = h.state.tokens.length, (0, y.expect)(l.TokenType.parenL), (0, T.parseBindingAtom)(!0), h.isTypeScriptEnabled && (0, a.tsTryParseTypeAnnotation)(), (0, y.expect)(l.TokenType.parenR)), _(), null != e) {
                                const t = h.state.tokens.length;
                                h.state.scopes.push(new(0, p.Scope)(e, t, !1)), h.state.scopeDepth--
                            }
                        }(0, i.eat)(l.TokenType._finally) && _()
                    }();
                case l.TokenType._let:
                case l.TokenType._const:
                    e || (0, y.unexpected)();
                case l.TokenType._var:
                    return void C(t !== l.TokenType._var);
                case l.TokenType._while:
                    return (0, i.next)(), (0, d.parseParenExpression)(), void k(!1);
                case l.TokenType.braceL:
                    return void _();
                case l.TokenType.semi:
                    return void(0, i.next)();
                case l.TokenType._export:
                case l.TokenType._import: {
                    const e = (0, i.lookaheadType)();
                    if (e === l.TokenType.parenL || e === l.TokenType.dot) break;
                    return (0, i.next)(), void(t === l.TokenType._import ? z() : K())
                }
                case l.TokenType.name:
                    if (h.state.contextualKeyword === c.ContextualKeyword._async) {
                        const e = h.state.start,
                            t = h.state.snapshot();
                        if ((0, i.next)(), (0, i.match)(l.TokenType._function) && !(0, y.canInsertSemicolon)()) return (0, y.expect)(l.TokenType._function), void A(e, !0);
                        h.state.restoreFromSnapshot(t)
                    } else {
                        if (h.state.contextualKeyword === c.ContextualKeyword._using && !(0, y.hasFollowingLineBreak)() && (0, i.lookaheadType)() === l.TokenType.name) return void C(!0);
                        if (m()) return (0, y.expectContextual)(c.ContextualKeyword._await), void C(!0)
                    }
            }
            const n = h.state.tokens.length;
            (0, d.parseExpression)();
            let o = null;
            if (h.state.tokens.length === n + 1) {
                const e = h.state.tokens[h.state.tokens.length - 1];
                e.type === l.TokenType.name && (o = e.contextualKeyword)
            }
            if (null == o) return void(0, y.semicolon)();
            (0, i.eat)(l.TokenType.colon) ? k(!0): (r = o, h.isTypeScriptEnabled ? (0, a.tsParseIdentifierStatement)(r) : h.isFlowEnabled ? (0, s.flowParseIdentifierStatement)(r) : (0, y.semicolon)());
            var r
        }(e))
    }

    function m() {
        if (!(0, y.isContextual)(c.ContextualKeyword._await)) return !1;
        const e = h.state.snapshot();
        return (0, i.next)(), !(0, y.isContextual)(c.ContextualKeyword._using) || (0, y.hasPrecedingLineBreak)() ? (h.state.restoreFromSnapshot(e), !1) : ((0, i.next)(), !(0, i.match)(l.TokenType.name) || (0, y.hasPrecedingLineBreak)() ? (h.state.restoreFromSnapshot(e), !1) : (h.state.restoreFromSnapshot(e), !0))
    }

    function g() {
        for (;
            (0, i.match)(l.TokenType.at);) x()
    }

    function x() {
        if ((0, i.next)(), (0, i.eat)(l.TokenType.parenL))(0, d.parseExpression)(), (0, y.expect)(l.TokenType.parenR);
        else {
            for ((0, d.parseIdentifier)();
                (0, i.eat)(l.TokenType.dot);)(0, d.parseIdentifier)();
            h.isTypeScriptEnabled ? (0, a.tsParseMaybeDecoratorArguments)() : b()
        }
    }

    function b() {
        (0, i.eat)(l.TokenType.parenL) && (0, d.parseCallExpressionArguments)()
    }

    function C(e) {
        (0, i.next)(), E(!1, e), (0, y.semicolon)()
    }

    function _(e = !1, t = 0) {
        const n = h.state.tokens.length;
        h.state.scopeDepth++, (0, y.expect)(l.TokenType.braceL), t && (h.state.tokens[h.state.tokens.length - 1].contextId = t), w(l.TokenType.braceR), t && (h.state.tokens[h.state.tokens.length - 1].contextId = t);
        const o = h.state.tokens.length;
        h.state.scopes.push(new(0, p.Scope)(n, o, e)), h.state.scopeDepth--
    }

    function w(e) {
        for (; !(0, i.eat)(e) && !h.state.error;) k(!0)
    }

    function v() {
        (0, y.expect)(l.TokenType.semi), (0, i.match)(l.TokenType.semi) || (0, d.parseExpression)(), (0, y.expect)(l.TokenType.semi), (0, i.match)(l.TokenType.parenR) || (0, d.parseExpression)(), (0, y.expect)(l.TokenType.parenR), k(!1)
    }

    function I(e) {
        e ? (0, y.eatContextual)(c.ContextualKeyword._of) : (0, i.next)(), (0, d.parseExpression)(), (0, y.expect)(l.TokenType.parenR), k(!1)
    }

    function E(e, t) {
        for (;;) {
            if (S(t), (0, i.eat)(l.TokenType.eq)) {
                const t = h.state.tokens.length - 1;
                (0, d.parseMaybeAssign)(e), h.state.tokens[t].rhsEndIndex = h.state.tokens.length
            }
            if (!(0, i.eat)(l.TokenType.comma)) break
        }
    }

    function S(e) {
        (0, T.parseBindingAtom)(e), h.isTypeScriptEnabled ? (0, a.tsAfterParseVarHead)() : h.isFlowEnabled && (0, s.flowAfterParseVarHead)()
    }

    function A(e, t, n = !1) {
        (0, i.match)(l.TokenType.star) && (0, i.next)(), !t || n || (0, i.match)(l.TokenType.name) || (0, i.match)(l.TokenType._yield) || (0, y.unexpected)();
        let o = null;
        (0, i.match)(l.TokenType.name) && (t || (o = h.state.tokens.length, h.state.scopeDepth++), (0, T.parseBindingIdentifier)(!1));
        const r = h.state.tokens.length;
        h.state.scopeDepth++, R(), (0, d.parseFunctionBodyAndFinish)(e);
        const s = h.state.tokens.length;
        h.state.scopes.push(new(0, p.Scope)(r, s, !0)), h.state.scopeDepth--, null !== o && (h.state.scopes.push(new(0, p.Scope)(o, s, !0)), h.state.scopeDepth--)
    }

    function R(e = !1, t = 0) {
        h.isTypeScriptEnabled ? (0, a.tsStartParseFunctionParams)() : h.isFlowEnabled && (0, s.flowStartParseFunctionParams)(), (0, y.expect)(l.TokenType.parenL), t && (h.state.tokens[h.state.tokens.length - 1].contextId = t), (0, T.parseBindingList)(l.TokenType.parenR, !1, !1, e, t), t && (h.state.tokens[h.state.tokens.length - 1].contextId = t)
    }

    function N(e, t = !1) {
        const n = (0, h.getNextContextId)();
        (0, i.next)(), h.state.tokens[h.state.tokens.length - 1].contextId = n, h.state.tokens[h.state.tokens.length - 1].isExpression = !e;
        let o = null;
        e || (o = h.state.tokens.length, h.state.scopeDepth++),
            function(e, t = !1) {
                if (h.isTypeScriptEnabled && (!e || t) && (0, y.isContextual)(c.ContextualKeyword._implements)) return;
                (0, i.match)(l.TokenType.name) && (0, T.parseBindingIdentifier)(!0);
                h.isTypeScriptEnabled ? (0, a.tsTryParseTypeParameters)() : h.isFlowEnabled && (0, i.match)(l.TokenType.lessThan) && (0, s.flowParseTypeParameterDeclaration)()
            }(e, t),
            function() {
                let e = !1;
                (0, i.eat)(l.TokenType._extends) ? ((0, d.parseExprSubscripts)(), e = !0) : e = !1;
                h.isTypeScriptEnabled ? (0, a.tsAfterParseClassSuper)(e) : h.isFlowEnabled && (0, s.flowAfterParseClassSuper)(e)
            }();
        const r = h.state.tokens.length;
        if (function(e) {
                (0, y.expect)(l.TokenType.braceL);
                for (; !(0, i.eat)(l.TokenType.braceR) && !h.state.error;) {
                    if ((0, i.eat)(l.TokenType.semi)) continue;
                    if ((0, i.match)(l.TokenType.at)) {
                        x();
                        continue
                    }
                    P(h.state.start, e)
                }
            }(n), !h.state.error && (h.state.tokens[r].contextId = n, h.state.tokens[h.state.tokens.length - 1].contextId = n, null !== o)) {
            const e = h.state.tokens.length;
            h.state.scopes.push(new(0, p.Scope)(o, e, !1)), h.state.scopeDepth--
        }
    }

    function L() {
        return (0, i.match)(l.TokenType.eq) || (0, i.match)(l.TokenType.semi) || (0, i.match)(l.TokenType.braceR) || (0, i.match)(l.TokenType.bang) || (0, i.match)(l.TokenType.colon)
    }

    function F() {
        return (0, i.match)(l.TokenType.parenL) || (0, i.match)(l.TokenType.lessThan)
    }

    function P(e, t) {
        h.isTypeScriptEnabled && (0, a.tsParseModifiers)([c.ContextualKeyword._declare, c.ContextualKeyword._public, c.ContextualKeyword._protected, c.ContextualKeyword._private, c.ContextualKeyword._override]);
        let n = !1;
        if ((0, i.match)(l.TokenType.name) && h.state.contextualKeyword === c.ContextualKeyword._static) {
            if ((0, d.parseIdentifier)(), F()) return void O(e, !1);
            if (L()) return void B();
            if (h.state.tokens[h.state.tokens.length - 1].type = l.TokenType._static, n = !0, (0, i.match)(l.TokenType.braceL)) return h.state.tokens[h.state.tokens.length - 1].contextId = t, void _()
        }! function(e, t, n) {
            if (h.isTypeScriptEnabled && (0, a.tsTryParseClassMemberWithIsStatic)(t)) return;
            if ((0, i.eat)(l.TokenType.star)) return D(n), void O(e, !1);
            D(n);
            let o = !1;
            const r = h.state.tokens[h.state.tokens.length - 1];
            r.contextualKeyword === c.ContextualKeyword._constructor && (o = !0);
            if (j(), F()) O(e, o);
            else if (L()) B();
            else if (r.contextualKeyword !== c.ContextualKeyword._async || (0, y.isLineTerminator)()) r.contextualKeyword !== c.ContextualKeyword._get && r.contextualKeyword !== c.ContextualKeyword._set || (0, y.isLineTerminator)() && (0, i.match)(l.TokenType.star) ? r.contextualKeyword !== c.ContextualKeyword._accessor || (0, y.isLineTerminator)() ? (0, y.isLineTerminator)() ? B() : (0, y.unexpected)() : (D(n), B()) : (r.contextualKeyword === c.ContextualKeyword._get ? h.state.tokens[h.state.tokens.length - 1].type = l.TokenType._get : h.state.tokens[h.state.tokens.length - 1].type = l.TokenType._set, D(n), O(e, !1));
            else {
                h.state.tokens[h.state.tokens.length - 1].type = l.TokenType._async;
                (0, i.match)(l.TokenType.star) && (0, i.next)(), D(n), j(), O(e, !1)
            }
        }(e, n, t)
    }

    function O(e, t) {
        h.isTypeScriptEnabled ? (0, a.tsTryParseTypeParameters)() : h.isFlowEnabled && (0, i.match)(l.TokenType.lessThan) && (0, s.flowParseTypeParameterDeclaration)(), (0, d.parseMethod)(e, t)
    }

    function D(e) {
        (0, d.parsePropertyName)(e)
    }

    function j() {
        if (h.isTypeScriptEnabled) {
            const e = (0, i.pushTypeContext)(0);
            (0, i.eat)(l.TokenType.question), (0, i.popTypeContext)(e)
        }
    }

    function B() {
        if (h.isTypeScriptEnabled ? ((0, i.eatTypeToken)(l.TokenType.bang), (0, a.tsTryParseTypeAnnotation)()) : h.isFlowEnabled && (0, i.match)(l.TokenType.colon) && (0, s.flowParseTypeAnnotation)(), (0, i.match)(l.TokenType.eq)) {
            const e = h.state.tokens.length;
            (0, i.next)(), (0, d.parseMaybeAssign)(), h.state.tokens[e].rhsEndIndex = h.state.tokens.length
        }(0, y.semicolon)()
    }

    function K() {
        const e = h.state.tokens.length - 1;
        h.isTypeScriptEnabled && (0, a.tsTryParseExport)() || ((h.isFlowEnabled ? (0, s.flowShouldParseExportStar)() : (0, i.match)(l.TokenType.star)) ? h.isFlowEnabled ? (0, s.flowParseExportStar)() : q() : function() {
            if (h.isTypeScriptEnabled && (0, a.tsIsDeclarationStart)()) return !1;
            if (h.isFlowEnabled && (0, s.flowShouldDisallowExportDefaultSpecifier)()) return !1;
            if ((0, i.match)(l.TokenType.name)) return h.state.contextualKeyword !== c.ContextualKeyword._async;
            if (!(0, i.match)(l.TokenType._default)) return !1;
            const e = (0, i.nextTokenStart)(),
                t = (0, i.lookaheadTypeAndKeyword)(),
                n = t.type === l.TokenType.name && t.contextualKeyword === c.ContextualKeyword._from;
            if (t.type === l.TokenType.comma) return !0;
            if (n) {
                const t = h.input.charCodeAt((0, i.nextTokenStartSince)(e + 4));
                return t === u.charCodes.quotationMark || t === u.charCodes.apostrophe
            }
            return !1
        }() ? ((0, d.parseIdentifier)(), (0, i.match)(l.TokenType.comma) && (0, i.lookaheadType)() === l.TokenType.star ? ((0, y.expect)(l.TokenType.comma), (0, y.expect)(l.TokenType.star), (0, y.expectContextual)(c.ContextualKeyword._as), (0, d.parseIdentifier)()) : $(), M()) : (0, i.eat)(l.TokenType._default) ? function() {
            if (h.isTypeScriptEnabled && (0, a.tsTryParseExportDefaultExpression)()) return;
            if (h.isFlowEnabled && (0, s.flowTryParseExportDefaultExpression)()) return;
            const e = h.state.start;
            (0, i.eat)(l.TokenType._function) ? A(e, !0, !0): (0, y.isContextual)(c.ContextualKeyword._async) && (0, i.lookaheadType)() === l.TokenType._function ? ((0, y.eatContextual)(c.ContextualKeyword._async), (0, i.eat)(l.TokenType._function), A(e, !0, !0)) : (0, i.match)(l.TokenType._class) ? N(!0, !0) : (0, i.match)(l.TokenType.at) ? (g(), N(!0, !0)) : ((0, d.parseMaybeAssign)(), (0, y.semicolon)())
        }() : h.isTypeScriptEnabled && (0, a.tsIsDeclarationStart)() || h.isFlowEnabled && (0, s.flowShouldParseExportDeclaration)() || h.state.type === l.TokenType._var || h.state.type === l.TokenType._const || h.state.type === l.TokenType._let || h.state.type === l.TokenType._function || h.state.type === l.TokenType._class || (0, y.isContextual)(c.ContextualKeyword._async) || (0, i.match)(l.TokenType.at) ? h.isTypeScriptEnabled ? (0, a.tsParseExportDeclaration)() : h.isFlowEnabled ? (0, s.flowParseExportDeclaration)() : k(!0) : (H(), M()), h.state.tokens[e].rhsEndIndex = h.state.tokens.length)
    }

    function $() {
        (0, i.eat)(l.TokenType.comma) && H()
    }

    function M() {
        (0, y.eatContextual)(c.ContextualKeyword._from) && ((0, d.parseExprAtom)(), X()), (0, y.semicolon)()
    }

    function q() {
        (0, y.expect)(l.TokenType.star), (0, y.isContextual)(c.ContextualKeyword._as) ? ((0, i.next)(), h.state.tokens[h.state.tokens.length - 1].type = l.TokenType._as, (0, d.parseIdentifier)(), $(), M()) : M()
    }

    function H() {
        let e = !0;
        for ((0, y.expect)(l.TokenType.braceL); !(0, i.eat)(l.TokenType.braceR) && !h.state.error;) {
            if (e) e = !1;
            else if ((0, y.expect)(l.TokenType.comma), (0, i.eat)(l.TokenType.braceR)) break;
            U()
        }
    }

    function U() {
        h.isTypeScriptEnabled ? (0, a.tsParseExportSpecifier)() : ((0, d.parseIdentifier)(), h.state.tokens[h.state.tokens.length - 1].identifierRole = i.IdentifierRole.ExportAccess, (0, y.eatContextual)(c.ContextualKeyword._as) && (0, d.parseIdentifier)())
    }

    function V() {
        (0, y.isContextual)(c.ContextualKeyword._module) && function() {
            const e = h.state.snapshot();
            return (0, y.expectContextual)(c.ContextualKeyword._module), (0, y.eatContextual)(c.ContextualKeyword._from) ? (0, y.isContextual)(c.ContextualKeyword._from) ? (h.state.restoreFromSnapshot(e), !0) : (h.state.restoreFromSnapshot(e), !1) : (0, i.match)(l.TokenType.comma) ? (h.state.restoreFromSnapshot(e), !1) : (h.state.restoreFromSnapshot(e), !0)
        }() && (0, i.next)()
    }

    function z() {
        if (h.isTypeScriptEnabled && (0, i.match)(l.TokenType.name) && (0, i.lookaheadType)() === l.TokenType.eq)(0, a.tsParseImportEqualsDeclaration)();
        else {
            if (h.isTypeScriptEnabled && (0, y.isContextual)(c.ContextualKeyword._type)) {
                const e = (0, i.lookaheadTypeAndKeyword)();
                if (e.type === l.TokenType.name && e.contextualKeyword !== c.ContextualKeyword._from) {
                    if ((0, y.expectContextual)(c.ContextualKeyword._type), (0, i.lookaheadType)() === l.TokenType.eq) return void(0, a.tsParseImportEqualsDeclaration)()
                } else e.type !== l.TokenType.star && e.type !== l.TokenType.braceL || (0, y.expectContextual)(c.ContextualKeyword._type)
            }(0, i.match)(l.TokenType.string) || (V(), function() {
                h.isFlowEnabled && (0, s.flowStartParseImportSpecifiers)();
                let e = !0;
                if ((0, i.match)(l.TokenType.name) && (W(), !(0, i.eat)(l.TokenType.comma))) return;
                if ((0, i.match)(l.TokenType.star)) return (0, i.next)(), (0, y.expectContextual)(c.ContextualKeyword._as), void W();
                (0, y.expect)(l.TokenType.braceL);
                for (; !(0, i.eat)(l.TokenType.braceR) && !h.state.error;) {
                    if (e) e = !1;
                    else if ((0, i.eat)(l.TokenType.colon) && (0, y.unexpected)("ES2015 named imports do not destructure. Use another statement for destructuring after the import."), (0, y.expect)(l.TokenType.comma), (0, i.eat)(l.TokenType.braceR)) break;
                    G()
                }
            }(), (0, y.expectContextual)(c.ContextualKeyword._from)), (0, d.parseExprAtom)(), X(), (0, y.semicolon)()
        }
    }

    function W() {
        (0, T.parseImportedIdentifier)()
    }

    function G() {
        h.isTypeScriptEnabled ? (0, a.tsParseImportSpecifier)() : h.isFlowEnabled ? (0, s.flowParseImportSpecifier)() : ((0, T.parseImportedIdentifier)(), (0, y.isContextual)(c.ContextualKeyword._as) && (h.state.tokens[h.state.tokens.length - 1].identifierRole = i.IdentifierRole.ImportAccess, (0, i.next)(), (0, T.parseImportedIdentifier)()))
    }

    function X() {
        ((0, i.match)(l.TokenType._with) || (0, y.isContextual)(c.ContextualKeyword._assert) && !(0, y.hasPrecedingLineBreak)()) && ((0, i.next)(), (0, d.parseObj)(!1, !1))
    }
})), n.register("9O8bm", (function(e, o) {
    t(e.exports, "flowParseTypeParameterDeclaration", (function() {
        return b
    })), t(e.exports, "flowParseTypeAnnotation", (function() {
        return D
    })), t(e.exports, "flowParseVariance", (function() {
        return B
    })), t(e.exports, "flowParseFunctionBodyAndFinish", (function() {
        return K
    })), t(e.exports, "flowParseSubscript", (function() {
        return $
    })), t(e.exports, "flowStartParseNewArguments", (function() {
        return M
    })), t(e.exports, "flowTryParseStatement", (function() {
        return q
    })), t(e.exports, "flowTryParseExportDefaultExpression", (function() {
        return H
    })), t(e.exports, "flowParseIdentifierStatement", (function() {
        return U
    })), t(e.exports, "flowShouldParseExportDeclaration", (function() {
        return V
    })), t(e.exports, "flowShouldDisallowExportDefaultSpecifier", (function() {
        return z
    })), t(e.exports, "flowParseExportDeclaration", (function() {
        return W
    })), t(e.exports, "flowShouldParseExportStar", (function() {
        return G
    })), t(e.exports, "flowParseExportStar", (function() {
        return X
    })), t(e.exports, "flowAfterParseClassSuper", (function() {
        return Y
    })), t(e.exports, "flowStartParseObjPropValue", (function() {
        return J
    })), t(e.exports, "flowParseAssignableListItemTypes", (function() {
        return Z
    })), t(e.exports, "flowStartParseImportSpecifiers", (function() {
        return Q
    })), t(e.exports, "flowParseImportSpecifier", (function() {
        return ee
    })), t(e.exports, "flowStartParseFunctionParams", (function() {
        return te
    })), t(e.exports, "flowAfterParseVarHead", (function() {
        return ne
    })), t(e.exports, "flowStartParseAsyncArrowFromCallExpression", (function() {
        return oe
    })), t(e.exports, "flowParseMaybeAssign", (function() {
        return re
    })), t(e.exports, "flowParseArrow", (function() {
        return se
    })), t(e.exports, "flowParseSubscripts", (function() {
        return ae
    }));
    var r = n("9OJHt"),
        s = n("46D9g"),
        a = n("31VH2"),
        i = n("kk1e5"),
        c = n("kMwty"),
        p = n("jKbdg"),
        l = n("5ofYc");

    function u(e) {
        const t = (0, r.pushTypeContext)(0);
        (0, l.expect)(e || a.TokenType.colon), O(), (0, r.popTypeContext)(t)
    }

    function h() {
        (0, l.expect)(a.TokenType.modulo), (0, l.expectContextual)(s.ContextualKeyword._checks), (0, r.eat)(a.TokenType.parenL) && ((0, c.parseExpression)(), (0, l.expect)(a.TokenType.parenR))
    }

    function d() {
        const e = (0, r.pushTypeContext)(0);
        (0, l.expect)(a.TokenType.colon), (0, r.match)(a.TokenType.modulo) ? h(): (O(), (0, r.match)(a.TokenType.modulo) && h()), (0, r.popTypeContext)(e)
    }

    function T() {
        (0, r.match)(a.TokenType._class) ? ((0, r.next)(), y(!0)) : (0, r.match)(a.TokenType._function) ? ((0, r.next)(), (0, c.parseIdentifier)(), (0, r.match)(a.TokenType.lessThan) && b(), (0, l.expect)(a.TokenType.parenL), R(), (0, l.expect)(a.TokenType.parenR), d(), (0, l.semicolon)()) : (0, r.match)(a.TokenType._var) ? ((0, r.next)(), j(), (0, l.semicolon)()) : (0, l.eatContextual)(s.ContextualKeyword._module) ? (0, r.eat)(a.TokenType.dot) ? ((0, l.expectContextual)(s.ContextualKeyword._exports), D(), (0, l.semicolon)()) : function() {
            (0, r.match)(a.TokenType.string) ? (0, c.parseExprAtom)() : (0, c.parseIdentifier)();
            (0, l.expect)(a.TokenType.braceL);
            for (; !(0, r.match)(a.TokenType.braceR) && !i.state.error;)(0, r.match)(a.TokenType._import) ? ((0, r.next)(), (0, p.parseImport)()) : (0, l.unexpected)();
            (0, l.expect)(a.TokenType.braceR)
        }() : (0, l.isContextual)(s.ContextualKeyword._type) ? ((0, r.next)(), g()) : (0, l.isContextual)(s.ContextualKeyword._opaque) ? ((0, r.next)(), x(!0)) : (0, l.isContextual)(s.ContextualKeyword._interface) ? ((0, r.next)(), y()) : (0, r.match)(a.TokenType._export) ? ((0, l.expect)(a.TokenType._export), (0, r.eat)(a.TokenType._default) ? (0, r.match)(a.TokenType._function) || (0, r.match)(a.TokenType._class) ? T() : (O(), (0, l.semicolon)()) : (0, r.match)(a.TokenType._var) || (0, r.match)(a.TokenType._function) || (0, r.match)(a.TokenType._class) || (0, l.isContextual)(s.ContextualKeyword._opaque) ? T() : (0, r.match)(a.TokenType.star) || (0, r.match)(a.TokenType.braceL) || (0, l.isContextual)(s.ContextualKeyword._interface) || (0, l.isContextual)(s.ContextualKeyword._type) || (0, l.isContextual)(s.ContextualKeyword._opaque) ? (0, p.parseExport)() : (0, l.unexpected)()) : (0, l.unexpected)()
    }

    function y(e = !1) {
        if (m(), (0, r.match)(a.TokenType.lessThan) && b(), (0, r.eat)(a.TokenType._extends))
            do {
                f()
            } while (!e && (0, r.eat)(a.TokenType.comma));
        if ((0, l.isContextual)(s.ContextualKeyword._mixins)) {
            (0, r.next)();
            do {
                f()
            } while ((0, r.eat)(a.TokenType.comma))
        }
        if ((0, l.isContextual)(s.ContextualKeyword._implements)) {
            (0, r.next)();
            do {
                f()
            } while ((0, r.eat)(a.TokenType.comma))
        }
        v(e, !1, e)
    }

    function f() {
        S(!1), (0, r.match)(a.TokenType.lessThan) && C()
    }

    function k() {
        y()
    }

    function m() {
        (0, c.parseIdentifier)()
    }

    function g() {
        m(), (0, r.match)(a.TokenType.lessThan) && b(), u(a.TokenType.eq), (0, l.semicolon)()
    }

    function x(e) {
        (0, l.expectContextual)(s.ContextualKeyword._type), m(), (0, r.match)(a.TokenType.lessThan) && b(), (0, r.match)(a.TokenType.colon) && u(a.TokenType.colon), e || u(a.TokenType.eq), (0, l.semicolon)()
    }

    function b() {
        const e = (0, r.pushTypeContext)(0);
        (0, r.match)(a.TokenType.lessThan) || (0, r.match)(a.TokenType.typeParameterStart) ? (0, r.next)() : (0, l.unexpected)();
        do {
            B(), j(), (0, r.eat)(a.TokenType.eq) && O(), (0, r.match)(a.TokenType.greaterThan) || (0, l.expect)(a.TokenType.comma)
        } while (!(0, r.match)(a.TokenType.greaterThan) && !i.state.error);
        (0, l.expect)(a.TokenType.greaterThan), (0, r.popTypeContext)(e)
    }

    function C() {
        const e = (0, r.pushTypeContext)(0);
        for ((0, l.expect)(a.TokenType.lessThan); !(0, r.match)(a.TokenType.greaterThan) && !i.state.error;) O(), (0, r.match)(a.TokenType.greaterThan) || (0, l.expect)(a.TokenType.comma);
        (0, l.expect)(a.TokenType.greaterThan), (0, r.popTypeContext)(e)
    }

    function _() {
        (0, r.match)(a.TokenType.num) || (0, r.match)(a.TokenType.string) ? (0, c.parseExprAtom)() : (0, c.parseIdentifier)()
    }

    function w() {
        for ((0, r.match)(a.TokenType.lessThan) && b(), (0, l.expect)(a.TokenType.parenL); !(0, r.match)(a.TokenType.parenR) && !(0, r.match)(a.TokenType.ellipsis) && !i.state.error;) A(), (0, r.match)(a.TokenType.parenR) || (0, l.expect)(a.TokenType.comma);
        (0, r.eat)(a.TokenType.ellipsis) && A(), (0, l.expect)(a.TokenType.parenR), u()
    }

    function v(e, t, n) {
        let o;
        for (t && (0, r.match)(a.TokenType.braceBarL) ? ((0, l.expect)(a.TokenType.braceBarL), o = a.TokenType.braceBarR) : ((0, l.expect)(a.TokenType.braceL), o = a.TokenType.braceR); !(0, r.match)(o) && !i.state.error;) {
            if (n && (0, l.isContextual)(s.ContextualKeyword._proto)) {
                const t = (0, r.lookaheadType)();
                t !== a.TokenType.colon && t !== a.TokenType.question && ((0, r.next)(), e = !1)
            }
            if (e && (0, l.isContextual)(s.ContextualKeyword._static)) {
                const e = (0, r.lookaheadType)();
                e !== a.TokenType.colon && e !== a.TokenType.question && (0, r.next)()
            }
            if (B(), (0, r.eat)(a.TokenType.bracketL))(0, r.eat)(a.TokenType.bracketL) ? (_(), (0, l.expect)(a.TokenType.bracketR), (0, l.expect)(a.TokenType.bracketR), (0, r.match)(a.TokenType.lessThan) || (0, r.match)(a.TokenType.parenL) ? w() : ((0, r.eat)(a.TokenType.question), u())) : ((0, r.lookaheadType)() === a.TokenType.colon ? (_(), u()) : O(), (0, l.expect)(a.TokenType.bracketR), u());
            else if ((0, r.match)(a.TokenType.parenL) || (0, r.match)(a.TokenType.lessThan)) w();
            else {
                if ((0, l.isContextual)(s.ContextualKeyword._get) || (0, l.isContextual)(s.ContextualKeyword._set)) {
                    const e = (0, r.lookaheadType)();
                    e !== a.TokenType.name && e !== a.TokenType.string && e !== a.TokenType.num || (0, r.next)()
                }
                I()
            }
            E()
        }(0, l.expect)(o)
    }

    function I() {
        if ((0, r.match)(a.TokenType.ellipsis)) {
            if ((0, l.expect)(a.TokenType.ellipsis), (0, r.eat)(a.TokenType.comma) || (0, r.eat)(a.TokenType.semi), (0, r.match)(a.TokenType.braceR)) return;
            O()
        } else _(), (0, r.match)(a.TokenType.lessThan) || (0, r.match)(a.TokenType.parenL) ? w() : ((0, r.eat)(a.TokenType.question), u())
    }

    function E() {
        (0, r.eat)(a.TokenType.semi) || (0, r.eat)(a.TokenType.comma) || (0, r.match)(a.TokenType.braceR) || (0, r.match)(a.TokenType.braceBarR) || (0, l.unexpected)()
    }

    function S(e) {
        for (e || (0, c.parseIdentifier)();
            (0, r.eat)(a.TokenType.dot);)(0, c.parseIdentifier)()
    }

    function A() {
        const e = (0, r.lookaheadType)();
        e === a.TokenType.colon || e === a.TokenType.question ? ((0, c.parseIdentifier)(), (0, r.eat)(a.TokenType.question), u()) : O()
    }

    function R() {
        for (; !(0, r.match)(a.TokenType.parenR) && !(0, r.match)(a.TokenType.ellipsis) && !i.state.error;) A(), (0, r.match)(a.TokenType.parenR) || (0, l.expect)(a.TokenType.comma);
        (0, r.eat)(a.TokenType.ellipsis) && A()
    }

    function N() {
        let e = !1;
        const t = i.state.noAnonFunctionType;
        switch (i.state.type) {
            case a.TokenType.name:
                return (0, l.isContextual)(s.ContextualKeyword._interface) ? void
                function() {
                    if ((0, l.expectContextual)(s.ContextualKeyword._interface), (0, r.eat)(a.TokenType._extends))
                        do {
                            f()
                        } while ((0, r.eat)(a.TokenType.comma));
                    v(!1, !1, !1)
                }(): ((0, c.parseIdentifier)(), S(!0), void((0, r.match)(a.TokenType.lessThan) && C()));
            case a.TokenType.braceL:
                return void v(!1, !1, !1);
            case a.TokenType.braceBarL:
                return void v(!1, !0, !1);
            case a.TokenType.bracketL:
                return void
                function() {
                    for ((0, l.expect)(a.TokenType.bracketL); i.state.pos < i.input.length && !(0, r.match)(a.TokenType.bracketR) && (O(), !(0, r.match)(a.TokenType.bracketR));)(0, l.expect)(a.TokenType.comma);
                    (0, l.expect)(a.TokenType.bracketR)
                }();
            case a.TokenType.lessThan:
                return b(), (0, l.expect)(a.TokenType.parenL), R(), (0, l.expect)(a.TokenType.parenR), (0, l.expect)(a.TokenType.arrow), void O();
            case a.TokenType.parenL:
                if ((0, r.next)(), !(0, r.match)(a.TokenType.parenR) && !(0, r.match)(a.TokenType.ellipsis))
                    if ((0, r.match)(a.TokenType.name)) {
                        const t = (0, r.lookaheadType)();
                        e = t !== a.TokenType.question && t !== a.TokenType.colon
                    } else e = !0;
                if (e) {
                    if (i.state.noAnonFunctionType = !1, O(), i.state.noAnonFunctionType = t, i.state.noAnonFunctionType || !((0, r.match)(a.TokenType.comma) || (0, r.match)(a.TokenType.parenR) && (0, r.lookaheadType)() === a.TokenType.arrow)) return void(0, l.expect)(a.TokenType.parenR);
                    (0, r.eat)(a.TokenType.comma)
                }
                return R(), (0, l.expect)(a.TokenType.parenR), (0, l.expect)(a.TokenType.arrow), void O();
            case a.TokenType.minus:
                return (0, r.next)(), void(0, c.parseLiteral)();
            case a.TokenType.string:
            case a.TokenType.num:
            case a.TokenType._true:
            case a.TokenType._false:
            case a.TokenType._null:
            case a.TokenType._this:
            case a.TokenType._void:
            case a.TokenType.star:
                return void(0, r.next)();
            default:
                if (i.state.type === a.TokenType._typeof) return (0, l.expect)(a.TokenType._typeof), void N();
                if (i.state.type & a.TokenType.IS_KEYWORD) return (0, r.next)(), void(i.state.tokens[i.state.tokens.length - 1].type = a.TokenType.name)
        }(0, l.unexpected)()
    }

    function L() {
        (0, r.eat)(a.TokenType.question) ? L(): function() {
            for (N(); !(0, l.canInsertSemicolon)() && ((0, r.match)(a.TokenType.bracketL) || (0, r.match)(a.TokenType.questionDot));)(0, r.eat)(a.TokenType.questionDot), (0, l.expect)(a.TokenType.bracketL), (0, r.eat)(a.TokenType.bracketR) || (O(), (0, l.expect)(a.TokenType.bracketR))
        }()
    }

    function F() {
        L(), !i.state.noAnonFunctionType && (0, r.eat)(a.TokenType.arrow) && O()
    }

    function P() {
        for ((0, r.eat)(a.TokenType.bitwiseAND), F();
            (0, r.eat)(a.TokenType.bitwiseAND);) F()
    }

    function O() {
        ! function() {
            for ((0, r.eat)(a.TokenType.bitwiseOR), P();
                (0, r.eat)(a.TokenType.bitwiseOR);) P()
        }()
    }

    function D() {
        u()
    }

    function j() {
        (0, c.parseIdentifier)(), (0, r.match)(a.TokenType.colon) && D()
    }

    function B() {
        ((0, r.match)(a.TokenType.plus) || (0, r.match)(a.TokenType.minus)) && ((0, r.next)(), i.state.tokens[i.state.tokens.length - 1].isType = !0)
    }

    function K(e) {
        (0, r.match)(a.TokenType.colon) && d(), (0, c.parseFunctionBody)(!1, e)
    }

    function $(e, t, n) {
        if ((0, r.match)(a.TokenType.questionDot) && (0, r.lookaheadType)() === a.TokenType.lessThan) return t ? void(n.stop = !0) : ((0, r.next)(), C(), (0, l.expect)(a.TokenType.parenL), void(0, c.parseCallExpressionArguments)());
        if (!t && (0, r.match)(a.TokenType.lessThan)) {
            const e = i.state.snapshot();
            if (C(), (0, l.expect)(a.TokenType.parenL), (0, c.parseCallExpressionArguments)(), !i.state.error) return;
            i.state.restoreFromSnapshot(e)
        }(0, c.baseParseSubscript)(e, t, n)
    }

    function M() {
        if ((0, r.match)(a.TokenType.lessThan)) {
            const e = i.state.snapshot();
            C(), i.state.error && i.state.restoreFromSnapshot(e)
        }
    }

    function q() {
        if ((0, r.match)(a.TokenType.name) && i.state.contextualKeyword === s.ContextualKeyword._interface) {
            const e = (0, r.pushTypeContext)(0);
            return (0, r.next)(), k(), (0, r.popTypeContext)(e), !0
        }
        return !!(0, l.isContextual)(s.ContextualKeyword._enum) && (ie(), !0)
    }

    function H() {
        return !!(0, l.isContextual)(s.ContextualKeyword._enum) && (ie(), !0)
    }

    function U(e) {
        if (e === s.ContextualKeyword._declare) {
            if ((0, r.match)(a.TokenType._class) || (0, r.match)(a.TokenType.name) || (0, r.match)(a.TokenType._function) || (0, r.match)(a.TokenType._var) || (0, r.match)(a.TokenType._export)) {
                const e = (0, r.pushTypeContext)(1);
                T(), (0, r.popTypeContext)(e)
            }
        } else if ((0, r.match)(a.TokenType.name))
            if (e === s.ContextualKeyword._interface) {
                const e = (0, r.pushTypeContext)(1);
                k(), (0, r.popTypeContext)(e)
            } else if (e === s.ContextualKeyword._type) {
            const e = (0, r.pushTypeContext)(1);
            g(), (0, r.popTypeContext)(e)
        } else if (e === s.ContextualKeyword._opaque) {
            const e = (0, r.pushTypeContext)(1);
            x(!1), (0, r.popTypeContext)(e)
        }(0, l.semicolon)()
    }

    function V() {
        return (0, l.isContextual)(s.ContextualKeyword._type) || (0, l.isContextual)(s.ContextualKeyword._interface) || (0, l.isContextual)(s.ContextualKeyword._opaque) || (0, l.isContextual)(s.ContextualKeyword._enum)
    }

    function z() {
        return (0, r.match)(a.TokenType.name) && (i.state.contextualKeyword === s.ContextualKeyword._type || i.state.contextualKeyword === s.ContextualKeyword._interface || i.state.contextualKeyword === s.ContextualKeyword._opaque || i.state.contextualKeyword === s.ContextualKeyword._enum)
    }

    function W() {
        if ((0, l.isContextual)(s.ContextualKeyword._type)) {
            const e = (0, r.pushTypeContext)(1);
            (0, r.next)(), (0, r.match)(a.TokenType.braceL) ? ((0, p.parseExportSpecifiers)(), (0, p.parseExportFrom)()) : g(), (0, r.popTypeContext)(e)
        } else if ((0, l.isContextual)(s.ContextualKeyword._opaque)) {
            const e = (0, r.pushTypeContext)(1);
            (0, r.next)(), x(!1), (0, r.popTypeContext)(e)
        } else if ((0, l.isContextual)(s.ContextualKeyword._interface)) {
            const e = (0, r.pushTypeContext)(1);
            (0, r.next)(), k(), (0, r.popTypeContext)(e)
        } else(0, p.parseStatement)(!0)
    }

    function G() {
        return (0, r.match)(a.TokenType.star) || (0, l.isContextual)(s.ContextualKeyword._type) && (0, r.lookaheadType)() === a.TokenType.star
    }

    function X() {
        if ((0, l.eatContextual)(s.ContextualKeyword._type)) {
            const e = (0, r.pushTypeContext)(2);
            (0, p.baseParseExportStar)(), (0, r.popTypeContext)(e)
        } else(0, p.baseParseExportStar)()
    }

    function Y(e) {
        if (e && (0, r.match)(a.TokenType.lessThan) && C(), (0, l.isContextual)(s.ContextualKeyword._implements)) {
            const e = (0, r.pushTypeContext)(0);
            (0, r.next)(), i.state.tokens[i.state.tokens.length - 1].type = a.TokenType._implements;
            do {
                m(), (0, r.match)(a.TokenType.lessThan) && C()
            } while ((0, r.eat)(a.TokenType.comma));
            (0, r.popTypeContext)(e)
        }
    }

    function J() {
        (0, r.match)(a.TokenType.lessThan) && (b(), (0, r.match)(a.TokenType.parenL) || (0, l.unexpected)())
    }

    function Z() {
        const e = (0, r.pushTypeContext)(0);
        (0, r.eat)(a.TokenType.question), (0, r.match)(a.TokenType.colon) && D(), (0, r.popTypeContext)(e)
    }

    function Q() {
        if ((0, r.match)(a.TokenType._typeof) || (0, l.isContextual)(s.ContextualKeyword._type)) {
            const t = (0, r.lookaheadTypeAndKeyword)();
            (((e = t).type === a.TokenType.name || e.type & a.TokenType.IS_KEYWORD) && e.contextualKeyword !== s.ContextualKeyword._from || t.type === a.TokenType.braceL || t.type === a.TokenType.star) && (0, r.next)()
        }
        var e
    }

    function ee() {
        const e = i.state.contextualKeyword === s.ContextualKeyword._type || i.state.type === a.TokenType._typeof;
        e ? (0, r.next)() : (0, c.parseIdentifier)(), (0, l.isContextual)(s.ContextualKeyword._as) && !(0, l.isLookaheadContextual)(s.ContextualKeyword._as) ? ((0, c.parseIdentifier)(), (!e || (0, r.match)(a.TokenType.name) || i.state.type & a.TokenType.IS_KEYWORD) && (0, c.parseIdentifier)()) : (e && ((0, r.match)(a.TokenType.name) || i.state.type & a.TokenType.IS_KEYWORD) && (0, c.parseIdentifier)(), (0, l.eatContextual)(s.ContextualKeyword._as) && (0, c.parseIdentifier)())
    }

    function te() {
        if ((0, r.match)(a.TokenType.lessThan)) {
            const e = (0, r.pushTypeContext)(0);
            b(), (0, r.popTypeContext)(e)
        }
    }

    function ne() {
        (0, r.match)(a.TokenType.colon) && D()
    }

    function oe() {
        if ((0, r.match)(a.TokenType.colon)) {
            const e = i.state.noAnonFunctionType;
            i.state.noAnonFunctionType = !0, D(), i.state.noAnonFunctionType = e
        }
    }

    function re(e, t) {
        if ((0, r.match)(a.TokenType.lessThan)) {
            const n = i.state.snapshot();
            let o = (0, c.baseParseMaybeAssign)(e, t);
            if (!i.state.error) return o;
            i.state.restoreFromSnapshot(n), i.state.type = a.TokenType.typeParameterStart;
            const s = (0, r.pushTypeContext)(0);
            if (b(), (0, r.popTypeContext)(s), o = (0, c.baseParseMaybeAssign)(e, t), o) return !0;
            (0, l.unexpected)()
        }
        return (0, c.baseParseMaybeAssign)(e, t)
    }

    function se() {
        if ((0, r.match)(a.TokenType.colon)) {
            const e = (0, r.pushTypeContext)(0),
                t = i.state.snapshot(),
                n = i.state.noAnonFunctionType;
            i.state.noAnonFunctionType = !0, d(), i.state.noAnonFunctionType = n, (0, l.canInsertSemicolon)() && (0, l.unexpected)(), (0, r.match)(a.TokenType.arrow) || (0, l.unexpected)(), i.state.error && i.state.restoreFromSnapshot(t), (0, r.popTypeContext)(e)
        }
        return (0, r.eat)(a.TokenType.arrow)
    }

    function ae(e, t = !1) {
        if (i.state.tokens[i.state.tokens.length - 1].contextualKeyword === s.ContextualKeyword._async && (0, r.match)(a.TokenType.lessThan)) {
            const e = i.state.snapshot(),
                t = function() {
                    i.state.scopeDepth++;
                    const e = i.state.tokens.length;
                    return (0, p.parseFunctionParams)(), !!(0, c.parseArrow)() && ((0, c.parseArrowExpression)(e), !0)
                }();
            if (t && !i.state.error) return;
            i.state.restoreFromSnapshot(e)
        }(0, c.baseParseSubscripts)(e, t)
    }

    function ie() {
        (0, l.expectContextual)(s.ContextualKeyword._enum), i.state.tokens[i.state.tokens.length - 1].type = a.TokenType._enum, (0, c.parseIdentifier)(),
            function() {
                (0, l.eatContextual)(s.ContextualKeyword._of) && (0, r.next)();
                (0, l.expect)(a.TokenType.braceL),
                function() {
                    for (; !(0, r.match)(a.TokenType.braceR) && !i.state.error && !(0, r.eat)(a.TokenType.ellipsis);) ce(), (0, r.match)(a.TokenType.braceR) || (0, l.expect)(a.TokenType.comma)
                }(), (0, l.expect)(a.TokenType.braceR)
            }()
    }

    function ce() {
        (0, c.parseIdentifier)(), (0, r.eat)(a.TokenType.eq) && (0, r.next)()
    }
})), n.register("kMwty", (function(e, o) {
    t(e.exports, "parseExpression", (function() {
        return g
    })), t(e.exports, "parseMaybeAssign", (function() {
        return x
    })), t(e.exports, "baseParseMaybeAssign", (function() {
        return b
    })), t(e.exports, "baseParseConditional", (function() {
        return C
    })), t(e.exports, "parseMaybeUnary", (function() {
        return w
    })), t(e.exports, "parseExprSubscripts", (function() {
        return v
    })), t(e.exports, "parseExprAtom", (function() {
        return F
    })), t(e.exports, "baseParseSubscripts", (function() {
        return E
    })), t(e.exports, "baseParseSubscript", (function() {
        return A
    })), t(e.exports, "parseCallExpressionArguments", (function() {
        return N
    })), t(e.exports, "atPossibleAsync", (function() {
        return R
    })), t(e.exports, "parseTemplate", (function() {
        return $
    })), t(e.exports, "parseArrowExpression", (function() {
        return z
    })), t(e.exports, "parseIdentifier", (function() {
        return J
    })), t(e.exports, "parseLiteral", (function() {
        return O
    })), t(e.exports, "parseObj", (function() {
        return M
    })), t(e.exports, "parseParenExpression", (function() {
        return D
    })), t(e.exports, "parseArrow", (function() {
        return B
    })), t(e.exports, "parsePropertyName", (function() {
        return U
    })), t(e.exports, "parseMethod", (function() {
        return V
    })), t(e.exports, "parseFunctionBodyAndFinish", (function() {
        return W
    })), t(e.exports, "parseFunctionBody", (function() {
        return G
    }));
    var r = n("9O8bm"),
        s = n("j4WC2"),
        a = n("k3Cp0"),
        i = n("2dIPf"),
        c = n("9OJHt"),
        p = n("46D9g"),
        l = n("g01J0"),
        u = n("31VH2"),
        h = n("8s4y4"),
        d = n("kwcE7"),
        T = n("kk1e5"),
        y = n("li15Q"),
        f = n("jKbdg"),
        k = n("5ofYc");
    class m {
        constructor(e) {
            this.stop = e
        }
    }

    function g(e = !1) {
        if (x(e), (0, c.match)(u.TokenType.comma))
            for (;
                (0, c.eat)(u.TokenType.comma);) x(e)
    }

    function x(e = !1, t = !1) {
        return T.isTypeScriptEnabled ? (0, i.tsParseMaybeAssign)(e, t) : T.isFlowEnabled ? (0, r.flowParseMaybeAssign)(e, t) : b(e, t)
    }

    function b(e, t) {
        if ((0, c.match)(u.TokenType._yield)) return (0, c.next)(), (0, c.match)(u.TokenType.semi) || (0, k.canInsertSemicolon)() || ((0, c.eat)(u.TokenType.star), x()), !1;
        ((0, c.match)(u.TokenType.parenL) || (0, c.match)(u.TokenType.name) || (0, c.match)(u.TokenType._yield)) && (T.state.potentialArrowAt = T.state.start);
        const n = function(e) {
            const t = function(e) {
                const t = T.state.tokens.length,
                    n = w();
                return !!n || (_(t, -1, e), !1)
            }(e);
            return !!t || (function(e) {
                T.isTypeScriptEnabled || T.isFlowEnabled ? (0, a.typedParseConditional)(e) : C(e)
            }(e), !1)
        }(e);
        return t && K(), T.state.type & u.TokenType.IS_ASSIGN ? ((0, c.next)(), x(e), !1) : n
    }

    function C(e) {
        (0, c.eat)(u.TokenType.question) && (x(), (0, k.expect)(u.TokenType.colon), x(e))
    }

    function _(e, t, n) {
        if (T.isTypeScriptEnabled && (u.TokenType._in & u.TokenType.PRECEDENCE_MASK) > t && !(0, k.hasPrecedingLineBreak)() && ((0, k.eatContextual)(p.ContextualKeyword._as) || (0, k.eatContextual)(p.ContextualKeyword._satisfies))) {
            const o = (0, c.pushTypeContext)(1);
            return (0, i.tsParseType)(), (0, c.popTypeContext)(o), (0, c.rescan_gt)(), void _(e, t, n)
        }
        const o = T.state.type & u.TokenType.PRECEDENCE_MASK;
        if (o > 0 && (!n || !(0, c.match)(u.TokenType._in)) && o > t) {
            const r = T.state.type;
            (0, c.next)(), r === u.TokenType.nullishCoalescing && (T.state.tokens[T.state.tokens.length - 1].nullishStartIndex = e);
            const s = T.state.tokens.length;
            w(), _(s, r & u.TokenType.IS_RIGHT_ASSOCIATIVE ? o - 1 : o, n), r === u.TokenType.nullishCoalescing && (T.state.tokens[e].numNullishCoalesceStarts++, T.state.tokens[T.state.tokens.length - 1].numNullishCoalesceEnds++), _(e, t, n)
        }
    }

    function w() {
        if (T.isTypeScriptEnabled && !T.isJSXEnabled && (0, c.eat)(u.TokenType.lessThan)) return (0, i.tsParseTypeAssertion)(), !1;
        if ((0, k.isContextual)(p.ContextualKeyword._module) && (0, c.lookaheadCharCode)() === h.charCodes.leftCurlyBrace && !(0, k.hasFollowingLineBreak)()) return (0, k.expectContextual)(p.ContextualKeyword._module), (0, k.expect)(u.TokenType.braceL), (0, f.parseBlockBody)(u.TokenType.braceR), !1;
        if (T.state.type & u.TokenType.IS_PREFIX) return (0, c.next)(), w(), !1;
        if (v()) return !0;
        for (; T.state.type & u.TokenType.IS_POSTFIX && !(0, k.canInsertSemicolon)();) T.state.type === u.TokenType.preIncDec && (T.state.type = u.TokenType.postIncDec), (0, c.next)();
        return !1
    }

    function v() {
        const e = T.state.tokens.length;
        return !!F() || (I(e), T.state.tokens.length > e && T.state.tokens[e].isOptionalChainStart && (T.state.tokens[T.state.tokens.length - 1].isOptionalChainEnd = !0), !1)
    }

    function I(e, t = !1) {
        T.isFlowEnabled ? (0, r.flowParseSubscripts)(e, t) : E(e, t)
    }

    function E(e, t = !1) {
        const n = new m(!1);
        do {
            S(e, t, n)
        } while (!n.stop && !T.state.error)
    }

    function S(e, t, n) {
        T.isTypeScriptEnabled ? (0, i.tsParseSubscript)(e, t, n) : T.isFlowEnabled ? (0, r.flowParseSubscript)(e, t, n) : A(e, t, n)
    }

    function A(e, t, n) {
        if (!t && (0, c.eat)(u.TokenType.doubleColon)) L(), n.stop = !0, I(e, t);
        else if ((0, c.match)(u.TokenType.questionDot)) {
            if (T.state.tokens[e].isOptionalChainStart = !0, t && (0, c.lookaheadType)() === u.TokenType.parenL) return void(n.stop = !0);
            (0, c.next)(), T.state.tokens[T.state.tokens.length - 1].subscriptStartIndex = e, (0, c.eat)(u.TokenType.bracketL) ? (g(), (0, k.expect)(u.TokenType.bracketR)) : (0, c.eat)(u.TokenType.parenL) ? N() : P()
        } else if ((0, c.eat)(u.TokenType.dot)) T.state.tokens[T.state.tokens.length - 1].subscriptStartIndex = e, P();
        else if ((0, c.eat)(u.TokenType.bracketL)) T.state.tokens[T.state.tokens.length - 1].subscriptStartIndex = e, g(), (0, k.expect)(u.TokenType.bracketR);
        else if (!t && (0, c.match)(u.TokenType.parenL))
            if (R()) {
                const t = T.state.snapshot(),
                    o = T.state.tokens.length;
                (0, c.next)(), T.state.tokens[T.state.tokens.length - 1].subscriptStartIndex = e;
                const s = (0, T.getNextContextId)();
                T.state.tokens[T.state.tokens.length - 1].contextId = s, N(), T.state.tokens[T.state.tokens.length - 1].contextId = s, ((0, c.match)(u.TokenType.colon) || (0, c.match)(u.TokenType.arrow)) && (T.state.restoreFromSnapshot(t), n.stop = !0, T.state.scopeDepth++, (0, f.parseFunctionParams)(), function(e) {
                    T.isTypeScriptEnabled ? (0, i.tsStartParseAsyncArrowFromCallExpression)() : T.isFlowEnabled && (0, r.flowStartParseAsyncArrowFromCallExpression)();
                    (0, k.expect)(u.TokenType.arrow), z(e)
                }(o))
            } else {
                (0, c.next)(), T.state.tokens[T.state.tokens.length - 1].subscriptStartIndex = e;
                const t = (0, T.getNextContextId)();
                T.state.tokens[T.state.tokens.length - 1].contextId = t, N(), T.state.tokens[T.state.tokens.length - 1].contextId = t
            }
        else(0, c.match)(u.TokenType.backQuote) ? $() : n.stop = !0
    }

    function R() {
        return T.state.tokens[T.state.tokens.length - 1].contextualKeyword === p.ContextualKeyword._async && !(0, k.canInsertSemicolon)()
    }

    function N() {
        let e = !0;
        for (; !(0, c.eat)(u.TokenType.parenR) && !T.state.error;) {
            if (e) e = !1;
            else if ((0, k.expect)(u.TokenType.comma), (0, c.eat)(u.TokenType.parenR)) break;
            Y(!1)
        }
    }

    function L() {
        const e = T.state.tokens.length;
        F(), I(e, !0)
    }

    function F() {
        if ((0, c.eat)(u.TokenType.modulo)) return J(), !1;
        if ((0, c.match)(u.TokenType.jsxText) || (0, c.match)(u.TokenType.jsxEmptyText)) return O(), !1;
        if ((0, c.match)(u.TokenType.lessThan) && T.isJSXEnabled) return T.state.type = u.TokenType.jsxTagStart, (0, s.jsxParseElement)(), (0, c.next)(), !1;
        const e = T.state.potentialArrowAt === T.state.start;
        switch (T.state.type) {
            case u.TokenType.slash:
            case u.TokenType.assign:
                (0, c.retokenizeSlashAsRegex)();
            case u.TokenType._super:
            case u.TokenType._this:
            case u.TokenType.regexp:
            case u.TokenType.num:
            case u.TokenType.bigint:
            case u.TokenType.decimal:
            case u.TokenType.string:
            case u.TokenType._null:
            case u.TokenType._true:
            case u.TokenType._false:
                return (0, c.next)(), !1;
            case u.TokenType._import:
                return (0, c.next)(), (0, c.match)(u.TokenType.dot) && (T.state.tokens[T.state.tokens.length - 1].type = u.TokenType.name, (0, c.next)(), J()), !1;
            case u.TokenType.name: {
                const t = T.state.tokens.length,
                    n = T.state.start,
                    o = T.state.contextualKeyword;
                return J(), o === p.ContextualKeyword._await ? (w(), !1) : o === p.ContextualKeyword._async && (0, c.match)(u.TokenType._function) && !(0, k.canInsertSemicolon)() ? ((0, c.next)(), (0, f.parseFunction)(n, !1), !1) : e && o === p.ContextualKeyword._async && !(0, k.canInsertSemicolon)() && (0, c.match)(u.TokenType.name) ? (T.state.scopeDepth++, (0, y.parseBindingIdentifier)(!1), (0, k.expect)(u.TokenType.arrow), z(t), !0) : (0, c.match)(u.TokenType._do) && !(0, k.canInsertSemicolon)() ? ((0, c.next)(), (0, f.parseBlock)(), !1) : e && !(0, k.canInsertSemicolon)() && (0, c.match)(u.TokenType.arrow) ? (T.state.scopeDepth++, (0, y.markPriorBindingIdentifier)(!1), (0, k.expect)(u.TokenType.arrow), z(t), !0) : (T.state.tokens[T.state.tokens.length - 1].identifierRole = c.IdentifierRole.Access, !1)
            }
            case u.TokenType._do:
                return (0, c.next)(), (0, f.parseBlock)(), !1;
            case u.TokenType.parenL:
                return j(e);
            case u.TokenType.bracketL:
                return (0, c.next)(), X(u.TokenType.bracketR, !0), !1;
            case u.TokenType.braceL:
                return M(!1, !1), !1;
            case u.TokenType._function:
                return function() {
                    const e = T.state.start;
                    J(), (0, c.eat)(u.TokenType.dot) && J();
                    (0, f.parseFunction)(e, !1)
                }(), !1;
            case u.TokenType.at:
                (0, f.parseDecorators)();
            case u.TokenType._class:
                return (0, f.parseClass)(!1), !1;
            case u.TokenType._new:
                return function() {
                    if ((0, k.expect)(u.TokenType._new), (0, c.eat)(u.TokenType.dot)) return void J();
                    L(), void(0, c.eat)(u.TokenType.questionDot), T.isFlowEnabled && (0, r.flowStartParseNewArguments)();
                    (0, c.eat)(u.TokenType.parenL) && X(u.TokenType.parenR)
                }(), !1;
            case u.TokenType.backQuote:
                return $(), !1;
            case u.TokenType.doubleColon:
                return (0, c.next)(), L(), !1;
            case u.TokenType.hash: {
                const e = (0, c.lookaheadCharCode)();
                return d.IS_IDENTIFIER_START[e] || e === h.charCodes.backslash ? P() : (0, c.next)(), !1
            }
            default:
                return (0, k.unexpected)(), !1
        }
    }

    function P() {
        (0, c.eat)(u.TokenType.hash), J()
    }

    function O() {
        (0, c.next)()
    }

    function D() {
        (0, k.expect)(u.TokenType.parenL), g(), (0, k.expect)(u.TokenType.parenR)
    }

    function j(e) {
        const t = T.state.snapshot(),
            n = T.state.tokens.length;
        (0, k.expect)(u.TokenType.parenL);
        let o = !0;
        for (; !(0, c.match)(u.TokenType.parenR) && !T.state.error;) {
            if (o) o = !1;
            else if ((0, k.expect)(u.TokenType.comma), (0, c.match)(u.TokenType.parenR)) break;
            if ((0, c.match)(u.TokenType.ellipsis)) {
                (0, y.parseRest)(!1), K();
                break
            }
            x(!1, !0)
        }
        if ((0, k.expect)(u.TokenType.parenR), e && ((0, c.match)(u.TokenType.colon) || !(0, k.canInsertSemicolon)())) {
            if (B()) return T.state.restoreFromSnapshot(t), T.state.scopeDepth++, (0, f.parseFunctionParams)(), B(), z(n), !T.state.error || (T.state.restoreFromSnapshot(t), j(!1), !1)
        }
        return !1
    }

    function B() {
        return T.isTypeScriptEnabled ? (0, i.tsParseArrow)() : T.isFlowEnabled ? (0, r.flowParseArrow)() : (0, c.eat)(u.TokenType.arrow)
    }

    function K() {
        (T.isTypeScriptEnabled || T.isFlowEnabled) && (0, a.typedParseParenItem)()
    }

    function $() {
        for ((0, c.nextTemplateToken)(), (0, c.nextTemplateToken)(); !(0, c.match)(u.TokenType.backQuote) && !T.state.error;)(0, k.expect)(u.TokenType.dollarBraceL), g(), (0, c.nextTemplateToken)(), (0, c.nextTemplateToken)();
        (0, c.next)()
    }

    function M(e, t) {
        const n = (0, T.getNextContextId)();
        let o = !0;
        for ((0, c.next)(), T.state.tokens[T.state.tokens.length - 1].contextId = n; !(0, c.eat)(u.TokenType.braceR) && !T.state.error;) {
            if (o) o = !1;
            else if ((0, k.expect)(u.TokenType.comma), (0, c.eat)(u.TokenType.braceR)) break;
            let r = !1;
            if ((0, c.match)(u.TokenType.ellipsis)) {
                const n = T.state.tokens.length;
                if ((0, y.parseSpread)(), e && (T.state.tokens.length === n + 2 && (0, y.markPriorBindingIdentifier)(t), (0, c.eat)(u.TokenType.braceR))) break
            } else e || (r = (0, c.eat)(u.TokenType.star)), !e && (0, k.isContextual)(p.ContextualKeyword._async) ? (r && (0, k.unexpected)(), J(), (0, c.match)(u.TokenType.colon) || (0, c.match)(u.TokenType.parenL) || (0, c.match)(u.TokenType.braceR) || (0, c.match)(u.TokenType.eq) || (0, c.match)(u.TokenType.comma) || ((0, c.match)(u.TokenType.star) && ((0, c.next)(), r = !0), U(n))) : U(n), H(e, t, n)
        }
        T.state.tokens[T.state.tokens.length - 1].contextId = n
    }

    function q(e, t) {
        const n = T.state.start;
        return (0, c.match)(u.TokenType.parenL) ? (e && (0, k.unexpected)(), V(n, !1), !0) : !! function(e) {
            return !e && ((0, c.match)(u.TokenType.string) || (0, c.match)(u.TokenType.num) || (0, c.match)(u.TokenType.bracketL) || (0, c.match)(u.TokenType.name) || !!(T.state.type & u.TokenType.IS_KEYWORD))
        }(e) && (U(t), V(n, !1), !0)
    }

    function H(e, t, n) {
        T.isTypeScriptEnabled ? (0, i.tsStartParseObjPropValue)() : T.isFlowEnabled && (0, r.flowStartParseObjPropValue)();
        q(e, n) || function(e, t) {
            if ((0, c.eat)(u.TokenType.colon)) return void(e ? (0, y.parseMaybeDefault)(t) : x(!1));
            let n;
            n = e ? 0 === T.state.scopeDepth ? c.IdentifierRole.ObjectShorthandTopLevelDeclaration : t ? c.IdentifierRole.ObjectShorthandBlockScopedDeclaration : c.IdentifierRole.ObjectShorthandFunctionScopedDeclaration : c.IdentifierRole.ObjectShorthand, T.state.tokens[T.state.tokens.length - 1].identifierRole = n, (0, y.parseMaybeDefault)(t, !0)
        }(e, t)
    }

    function U(e) {
        T.isFlowEnabled && (0, r.flowParseVariance)(), (0, c.eat)(u.TokenType.bracketL) ? (T.state.tokens[T.state.tokens.length - 1].contextId = e, x(), (0, k.expect)(u.TokenType.bracketR), T.state.tokens[T.state.tokens.length - 1].contextId = e) : ((0, c.match)(u.TokenType.num) || (0, c.match)(u.TokenType.string) || (0, c.match)(u.TokenType.bigint) || (0, c.match)(u.TokenType.decimal) ? F() : P(), T.state.tokens[T.state.tokens.length - 1].identifierRole = c.IdentifierRole.ObjectKey, T.state.tokens[T.state.tokens.length - 1].contextId = e)
    }

    function V(e, t) {
        const n = (0, T.getNextContextId)();
        T.state.scopeDepth++;
        const o = T.state.tokens.length,
            r = t;
        (0, f.parseFunctionParams)(r, n), W(e, n);
        const s = T.state.tokens.length;
        T.state.scopes.push(new(0, l.Scope)(o, s, !0)), T.state.scopeDepth--
    }

    function z(e) {
        G(!0);
        const t = T.state.tokens.length;
        T.state.scopes.push(new(0, l.Scope)(e, t, !0)), T.state.scopeDepth--
    }

    function W(e, t = 0) {
        T.isTypeScriptEnabled ? (0, i.tsParseFunctionBodyAndFinish)(e, t) : T.isFlowEnabled ? (0, r.flowParseFunctionBodyAndFinish)(t) : G(!1, t)
    }

    function G(e, t = 0) {
        e && !(0, c.match)(u.TokenType.braceL) ? x() : (0, f.parseBlock)(!0, t)
    }

    function X(e, t = !1) {
        let n = !0;
        for (; !(0, c.eat)(e) && !T.state.error;) {
            if (n) n = !1;
            else if ((0, k.expect)(u.TokenType.comma), (0, c.eat)(e)) break;
            Y(t)
        }
    }

    function Y(e) {
        e && (0, c.match)(u.TokenType.comma) || ((0, c.match)(u.TokenType.ellipsis) ? ((0, y.parseSpread)(), K()) : (0, c.match)(u.TokenType.question) ? (0, c.next)() : x(!1, !0))
    }

    function J() {
        (0, c.next)(), T.state.tokens[T.state.tokens.length - 1].type = u.TokenType.name
    }
})), n.register("j4WC2", (function(e, o) {
    t(e.exports, "nextJSXTagToken", (function() {
        return m
    })), t(e.exports, "jsxParseElement", (function() {
        return k
    }));
    var r = n("9OJHt"),
        s = n("31VH2"),
        a = n("kk1e5"),
        i = n("kMwty"),
        c = n("5ofYc"),
        p = n("8s4y4"),
        l = n("kwcE7"),
        u = n("2dIPf");

    function h() {
        m()
    }

    function d(e) {
        h(), (0, r.eat)(s.TokenType.colon) ? h() : a.state.tokens[a.state.tokens.length - 1].identifierRole = e
    }

    function T() {
        const e = a.state.tokens.length;
        d(r.IdentifierRole.Access);
        let t = !1;
        for (;
            (0, r.match)(s.TokenType.dot);) t = !0, m(), h();
        if (!t) {
            const t = a.state.tokens[e],
                n = a.input.charCodeAt(t.start);
            n >= p.charCodes.lowercaseA && n <= p.charCodes.lowercaseZ && (t.identifierRole = null)
        }
    }

    function y() {
        switch (a.state.type) {
            case s.TokenType.braceL:
                return (0, r.next)(), (0, i.parseExpression)(), void m();
            case s.TokenType.jsxTagStart:
                return k(), void m();
            case s.TokenType.string:
                return void m();
            default:
                (0, c.unexpected)("JSX value should be either an expression or a quoted JSX text")
        }
    }

    function f() {
        const e = a.state.tokens.length - 1;
        a.state.tokens[e].jsxRole = r.JSXRole.NoChildren;
        let t = 0;
        const n = function(e) {
            if ((0, r.match)(s.TokenType.jsxTagEnd)) return !1;
            T(), a.isTypeScriptEnabled && (0, u.tsTryParseJSXTypeArgument)();
            let t = !1;
            for (; !(0, r.match)(s.TokenType.slash) && !(0, r.match)(s.TokenType.jsxTagEnd) && !a.state.error;)(0, r.eat)(s.TokenType.braceL) ? (t = !0, (0, c.expect)(s.TokenType.ellipsis), (0, i.parseMaybeAssign)(), m()) : (t && a.state.end - a.state.start == 3 && a.input.charCodeAt(a.state.start) === p.charCodes.lowercaseK && a.input.charCodeAt(a.state.start + 1) === p.charCodes.lowercaseE && a.input.charCodeAt(a.state.start + 2) === p.charCodes.lowercaseY && (a.state.tokens[e].jsxRole = r.JSXRole.KeyAfterPropSpread), d(r.IdentifierRole.ObjectKey), (0, r.match)(s.TokenType.eq) && (m(), y()));
            const n = (0, r.match)(s.TokenType.slash);
            return n && m(), n
        }(e);
        if (!n)
            for (g();;) switch (a.state.type) {
                case s.TokenType.jsxTagStart:
                    if (m(), (0, r.match)(s.TokenType.slash)) return m(), (0, r.match)(s.TokenType.jsxTagEnd) || T(), void(a.state.tokens[e].jsxRole !== r.JSXRole.KeyAfterPropSpread && (1 === t ? a.state.tokens[e].jsxRole = r.JSXRole.OneChild : t > 1 && (a.state.tokens[e].jsxRole = r.JSXRole.StaticChildren)));
                    t++, f(), g();
                    break;
                case s.TokenType.jsxText:
                    t++, g();
                    break;
                case s.TokenType.jsxEmptyText:
                    g();
                    break;
                case s.TokenType.braceL:
                    (0, r.next)(), (0, r.match)(s.TokenType.ellipsis) ? ((0, c.expect)(s.TokenType.ellipsis), (0, i.parseExpression)(), g(), t += 2) : ((0, r.match)(s.TokenType.braceR) || (t++, (0, i.parseExpression)()), g());
                    break;
                default:
                    return void(0, c.unexpected)()
            }
    }

    function k() {
        m(), f()
    }

    function m() {
        a.state.tokens.push(new(0, r.Token)), (0, r.skipSpace)(), a.state.start = a.state.pos;
        const e = a.input.charCodeAt(a.state.pos);
        if (l.IS_IDENTIFIER_START[e]) ! function() {
            let e;
            do {
                if (a.state.pos > a.input.length) return void(0, c.unexpected)("Unexpectedly reached the end of input.");
                e = a.input.charCodeAt(++a.state.pos)
            } while (l.IS_IDENTIFIER_CHAR[e] || e === p.charCodes.dash);
            (0, r.finishToken)(s.TokenType.jsxName)
        }();
        else if (e === p.charCodes.quotationMark || e === p.charCodes.apostrophe) ! function(e) {
            for (a.state.pos++;;) {
                if (a.state.pos >= a.input.length) return void(0, c.unexpected)("Unterminated string constant");
                if (a.input.charCodeAt(a.state.pos) === e) {
                    a.state.pos++;
                    break
                }
                a.state.pos++
            }(0, r.finishToken)(s.TokenType.string)
        }(e);
        else switch (++a.state.pos, e) {
            case p.charCodes.greaterThan:
                (0, r.finishToken)(s.TokenType.jsxTagEnd);
                break;
            case p.charCodes.lessThan:
                (0, r.finishToken)(s.TokenType.jsxTagStart);
                break;
            case p.charCodes.slash:
                (0, r.finishToken)(s.TokenType.slash);
                break;
            case p.charCodes.equalsTo:
                (0, r.finishToken)(s.TokenType.eq);
                break;
            case p.charCodes.leftCurlyBrace:
                (0, r.finishToken)(s.TokenType.braceL);
                break;
            case p.charCodes.dot:
                (0, r.finishToken)(s.TokenType.dot);
                break;
            case p.charCodes.colon:
                (0, r.finishToken)(s.TokenType.colon);
                break;
            default:
                (0, c.unexpected)()
        }
    }

    function g() {
        a.state.tokens.push(new(0, r.Token)), a.state.start = a.state.pos,
            function() {
                let e = !1,
                    t = !1;
                for (;;) {
                    if (a.state.pos >= a.input.length) return void(0, c.unexpected)("Unterminated JSX contents");
                    const n = a.input.charCodeAt(a.state.pos);
                    if (n === p.charCodes.lessThan || n === p.charCodes.leftCurlyBrace) return a.state.pos === a.state.start ? n === p.charCodes.lessThan ? (a.state.pos++, void(0, r.finishToken)(s.TokenType.jsxTagStart)) : void(0, r.getTokenFromCode)(n) : void(e && !t ? (0, r.finishToken)(s.TokenType.jsxEmptyText) : (0, r.finishToken)(s.TokenType.jsxText));
                    n === p.charCodes.lineFeed ? e = !0 : n !== p.charCodes.space && n !== p.charCodes.carriageReturn && n !== p.charCodes.tab && (t = !0), a.state.pos++
                }
            }()
    }
})), n.register("2dIPf", (function(e, o) {
    t(e.exports, "tsParseModifiers", (function() {
        return f
    })), t(e.exports, "tsParseTypeAnnotation", (function() {
        return $
    })), t(e.exports, "tsParseType", (function() {
        return M
    })), t(e.exports, "tsTryParseTypeParameters", (function() {
        return b
    })), t(e.exports, "tsTryParseTypeAnnotation", (function() {
        return K
    })), t(e.exports, "tsParseTypeAssertion", (function() {
        return H
    })), t(e.exports, "tsTryParseJSXTypeArgument", (function() {
        return U
    })), t(e.exports, "tsParseImportEqualsDeclaration", (function() {
        return Z
    })), t(e.exports, "tsIsDeclarationStart", (function() {
        return ae
    })), t(e.exports, "tsParseFunctionBodyAndFinish", (function() {
        return ie
    })), t(e.exports, "tsParseSubscript", (function() {
        return ce
    })), t(e.exports, "tsTryParseExport", (function() {
        return pe
    })), t(e.exports, "tsParseImportSpecifier", (function() {
        return le
    })), t(e.exports, "tsParseExportSpecifier", (function() {
        return ue
    })), t(e.exports, "tsTryParseExportDefaultExpression", (function() {
        return he
    })), t(e.exports, "tsTryParseStatementContent", (function() {
        return de
    })), t(e.exports, "tsTryParseClassMemberWithIsStatic", (function() {
        return Te
    })), t(e.exports, "tsParseIdentifierStatement", (function() {
        return ye
    })), t(e.exports, "tsParseExportDeclaration", (function() {
        return fe
    })), t(e.exports, "tsAfterParseClassSuper", (function() {
        return ke
    })), t(e.exports, "tsStartParseObjPropValue", (function() {
        return me
    })), t(e.exports, "tsStartParseFunctionParams", (function() {
        return ge
    })), t(e.exports, "tsAfterParseVarHead", (function() {
        return xe
    })), t(e.exports, "tsStartParseAsyncArrowFromCallExpression", (function() {
        return be
    })), t(e.exports, "tsParseMaybeAssign", (function() {
        return Ce
    })), t(e.exports, "tsParseArrow", (function() {
        return _e
    })), t(e.exports, "tsParseAssignableListItemTypes", (function() {
        return we
    })), t(e.exports, "tsParseMaybeDecoratorArguments", (function() {
        return ve
    }));
    var r, s = n("9OJHt"),
        a = n("46D9g"),
        i = n("31VH2"),
        c = n("kk1e5"),
        p = n("kMwty"),
        l = n("li15Q"),
        u = n("jKbdg"),
        h = n("5ofYc"),
        d = n("j4WC2");

    function T() {
        return (0, s.match)(i.TokenType.name)
    }

    function y() {
        const e = c.state.snapshot();
        (0, s.next)();
        return !!(((0, s.match)(i.TokenType.bracketL) || (0, s.match)(i.TokenType.braceL) || (0, s.match)(i.TokenType.star) || (0, s.match)(i.TokenType.ellipsis) || (0, s.match)(i.TokenType.hash) || (0, s.match)(i.TokenType.name) || Boolean(c.state.type & i.TokenType.IS_KEYWORD) || (0, s.match)(i.TokenType.string) || (0, s.match)(i.TokenType.num) || (0, s.match)(i.TokenType.bigint) || (0, s.match)(i.TokenType.decimal)) && !(0, h.hasPrecedingLineBreak)()) || (c.state.restoreFromSnapshot(e), !1)
    }

    function f(e) {
        for (;;) {
            if (null === k(e)) break
        }
    }

    function k(e) {
        if (!(0, s.match)(i.TokenType.name)) return null;
        const t = c.state.contextualKeyword;
        if (-1 !== e.indexOf(t) && y()) {
            switch (t) {
                case a.ContextualKeyword._readonly:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._readonly;
                    break;
                case a.ContextualKeyword._abstract:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._abstract;
                    break;
                case a.ContextualKeyword._static:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._static;
                    break;
                case a.ContextualKeyword._public:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._public;
                    break;
                case a.ContextualKeyword._private:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._private;
                    break;
                case a.ContextualKeyword._protected:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._protected;
                    break;
                case a.ContextualKeyword._override:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._override;
                    break;
                case a.ContextualKeyword._declare:
                    c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._declare
            }
            return t
        }
        return null
    }

    function m() {
        for ((0, p.parseIdentifier)();
            (0, s.eat)(i.TokenType.dot);)(0, p.parseIdentifier)()
    }

    function g() {
        (0, h.expect)(i.TokenType._import), (0, h.expect)(i.TokenType.parenL), (0, h.expect)(i.TokenType.string), (0, h.expect)(i.TokenType.parenR), (0, s.eat)(i.TokenType.dot) && m(), (0, s.match)(i.TokenType.lessThan) && se()
    }

    function x() {
        (0, s.eat)(i.TokenType._const);
        const e = (0, s.eat)(i.TokenType._in),
            t = (0, h.eatContextual)(a.ContextualKeyword._out);
        (0, s.eat)(i.TokenType._const), !e && !t || (0, s.match)(i.TokenType.name) ? (0, p.parseIdentifier)() : c.state.tokens[c.state.tokens.length - 1].type = i.TokenType.name, (0, s.eat)(i.TokenType._extends) && M(), (0, s.eat)(i.TokenType.eq) && M()
    }

    function b() {
        (0, s.match)(i.TokenType.lessThan) && C()
    }

    function C() {
        const e = (0, s.pushTypeContext)(0);
        for ((0, s.match)(i.TokenType.lessThan) || (0, s.match)(i.TokenType.typeParameterStart) ? (0, s.next)() : (0, h.unexpected)(); !(0, s.eat)(i.TokenType.greaterThan) && !c.state.error;) x(), (0, s.eat)(i.TokenType.comma);
        (0, s.popTypeContext)(e)
    }

    function _(e) {
        const t = e === i.TokenType.arrow;
        var n;
        b(), (0, h.expect)(i.TokenType.parenL), c.state.scopeDepth++, n = !1, (0, l.parseBindingList)(i.TokenType.parenR, n), c.state.scopeDepth--, (t || (0, s.match)(e)) && B(e)
    }

    function w() {
        (0, s.eat)(i.TokenType.comma) || (0, h.semicolon)()
    }

    function v() {
        _(i.TokenType.colon), w()
    }

    function I() {
        if (!(0, s.match)(i.TokenType.bracketL) || ! function() {
                const e = c.state.snapshot();
                (0, s.next)();
                const t = (0, s.eat)(i.TokenType.name) && (0, s.match)(i.TokenType.colon);
                return c.state.restoreFromSnapshot(e), t
            }()) return !1;
        const e = (0, s.pushTypeContext)(0);
        return (0, h.expect)(i.TokenType.bracketL), (0, p.parseIdentifier)(), $(), (0, h.expect)(i.TokenType.bracketR), K(), w(), (0, s.popTypeContext)(e), !0
    }

    function E(e) {
        (0, s.eat)(i.TokenType.question), e || !(0, s.match)(i.TokenType.parenL) && !(0, s.match)(i.TokenType.lessThan) ? (K(), w()) : (_(i.TokenType.colon), w())
    }

    function S() {
        if ((0, s.match)(i.TokenType.parenL) || (0, s.match)(i.TokenType.lessThan)) return void v();
        if ((0, s.match)(i.TokenType._new)) return (0, s.next)(), void((0, s.match)(i.TokenType.parenL) || (0, s.match)(i.TokenType.lessThan) ? v() : E(!1));
        const e = !!k([a.ContextualKeyword._readonly]);
        I() || (((0, h.isContextual)(a.ContextualKeyword._get) || (0, h.isContextual)(a.ContextualKeyword._set)) && y(), (0, p.parsePropertyName)(-1), E(e))
    }

    function A() {
        for ((0, h.expect)(i.TokenType.braceL); !(0, s.eat)(i.TokenType.braceR) && !c.state.error;) S()
    }

    function R() {
        const e = c.state.snapshot(),
            t = function() {
                if ((0, s.next)(), (0, s.eat)(i.TokenType.plus) || (0, s.eat)(i.TokenType.minus)) return (0, h.isContextual)(a.ContextualKeyword._readonly);
                (0, h.isContextual)(a.ContextualKeyword._readonly) && (0, s.next)();
                return !!(0, s.match)(i.TokenType.bracketL) && ((0, s.next)(), !!T() && ((0, s.next)(), (0, s.match)(i.TokenType._in)))
            }();
        return c.state.restoreFromSnapshot(e), t
    }

    function N() {
        (0, h.expect)(i.TokenType.braceL), (0, s.match)(i.TokenType.plus) || (0, s.match)(i.TokenType.minus) ? ((0, s.next)(), (0, h.expectContextual)(a.ContextualKeyword._readonly)) : (0, h.eatContextual)(a.ContextualKeyword._readonly), (0, h.expect)(i.TokenType.bracketL), (0, p.parseIdentifier)(), (0, h.expect)(i.TokenType._in), M(), (0, h.eatContextual)(a.ContextualKeyword._as) && M(), (0, h.expect)(i.TokenType.bracketR), (0, s.match)(i.TokenType.plus) || (0, s.match)(i.TokenType.minus) ? ((0, s.next)(), (0, h.expect)(i.TokenType.question)) : (0, s.eat)(i.TokenType.question), (0, s.eat)(i.TokenType.colon) && M(), (0, h.semicolon)(), (0, h.expect)(i.TokenType.braceR)
    }

    function L() {
        (0, s.eat)(i.TokenType.ellipsis) ? M(): (M(), (0, s.eat)(i.TokenType.question)), (0, s.eat)(i.TokenType.colon) && M()
    }

    function F(e) {
        e === r.TSAbstractConstructorType && (0, h.expectContextual)(a.ContextualKeyword._abstract), e !== r.TSConstructorType && e !== r.TSAbstractConstructorType || (0, h.expect)(i.TokenType._new);
        const t = c.state.inDisallowConditionalTypesContext;
        c.state.inDisallowConditionalTypesContext = !1, _(i.TokenType.arrow), c.state.inDisallowConditionalTypesContext = t
    }

    function P() {
        switch (c.state.type) {
            case i.TokenType.name:
                return m(), void(!(0, h.hasPrecedingLineBreak)() && (0, s.match)(i.TokenType.lessThan) && se());
            case i.TokenType._void:
            case i.TokenType._null:
                return void(0, s.next)();
            case i.TokenType.string:
            case i.TokenType.num:
            case i.TokenType.bigint:
            case i.TokenType.decimal:
            case i.TokenType._true:
            case i.TokenType._false:
                return void(0, p.parseLiteral)();
            case i.TokenType.minus:
                return (0, s.next)(), void(0, p.parseLiteral)();
            case i.TokenType._this:
                return (0, s.next)(), void((0, h.isContextual)(a.ContextualKeyword._is) && !(0, h.hasPrecedingLineBreak)() && ((0, s.next)(), $()));
            case i.TokenType._typeof:
                return (0, h.expect)(i.TokenType._typeof), (0, s.match)(i.TokenType._import) ? g() : m(), void(!(0, h.hasPrecedingLineBreak)() && (0, s.match)(i.TokenType.lessThan) && se());
            case i.TokenType._import:
                return void g();
            case i.TokenType.braceL:
                return void(R() ? N() : A());
            case i.TokenType.bracketL:
                return void
                function() {
                    for ((0, h.expect)(i.TokenType.bracketL); !(0, s.eat)(i.TokenType.bracketR) && !c.state.error;) L(), (0, s.eat)(i.TokenType.comma)
                }();
            case i.TokenType.parenL:
                return (0, h.expect)(i.TokenType.parenL), M(), void(0, h.expect)(i.TokenType.parenR);
            case i.TokenType.backQuote:
                return void
                function() {
                    for ((0, s.nextTemplateToken)(), (0, s.nextTemplateToken)(); !(0, s.match)(i.TokenType.backQuote) && !c.state.error;)(0, h.expect)(i.TokenType.dollarBraceL), M(), (0, s.nextTemplateToken)(), (0, s.nextTemplateToken)();
                    (0, s.next)()
                }();
            default:
                if (c.state.type & i.TokenType.IS_KEYWORD) return (0, s.next)(), void(c.state.tokens[c.state.tokens.length - 1].type = i.TokenType.name)
        }(0, h.unexpected)()
    }

    function O() {
        if ((0, h.isContextual)(a.ContextualKeyword._keyof) || (0, h.isContextual)(a.ContextualKeyword._unique) || (0, h.isContextual)(a.ContextualKeyword._readonly))(0, s.next)(), O();
        else if ((0, h.isContextual)(a.ContextualKeyword._infer)) ! function() {
            if ((0, h.expectContextual)(a.ContextualKeyword._infer), (0, p.parseIdentifier)(), (0, s.match)(i.TokenType._extends)) {
                const e = c.state.snapshot();
                (0, h.expect)(i.TokenType._extends);
                const t = c.state.inDisallowConditionalTypesContext;
                c.state.inDisallowConditionalTypesContext = !0, M(), c.state.inDisallowConditionalTypesContext = t, (c.state.error || !c.state.inDisallowConditionalTypesContext && (0, s.match)(i.TokenType.question)) && c.state.restoreFromSnapshot(e)
            }
        }();
        else {
            const e = c.state.inDisallowConditionalTypesContext;
            c.state.inDisallowConditionalTypesContext = !1,
                function() {
                    for (P(); !(0, h.hasPrecedingLineBreak)() && (0, s.eat)(i.TokenType.bracketL);)(0, s.eat)(i.TokenType.bracketR) || (M(), (0, h.expect)(i.TokenType.bracketR))
                }(), c.state.inDisallowConditionalTypesContext = e
        }
    }

    function D() {
        if ((0, s.eat)(i.TokenType.bitwiseAND), O(), (0, s.match)(i.TokenType.bitwiseAND))
            for (;
                (0, s.eat)(i.TokenType.bitwiseAND);) O()
    }

    function j() {
        return !!(0, s.match)(i.TokenType.lessThan) || (0, s.match)(i.TokenType.parenL) && function() {
            const e = c.state.snapshot(),
                t = function() {
                    if ((0, s.next)(), (0, s.match)(i.TokenType.parenR) || (0, s.match)(i.TokenType.ellipsis)) return !0;
                    if (function() {
                            if ((0, s.match)(i.TokenType.name) || (0, s.match)(i.TokenType._this)) return (0, s.next)(), !0;
                            if ((0, s.match)(i.TokenType.braceL) || (0, s.match)(i.TokenType.bracketL)) {
                                let e = 1;
                                for ((0, s.next)(); e > 0 && !c.state.error;)(0, s.match)(i.TokenType.braceL) || (0, s.match)(i.TokenType.bracketL) ? e++ : ((0, s.match)(i.TokenType.braceR) || (0, s.match)(i.TokenType.bracketR)) && e--, (0, s.next)();
                                return !0
                            }
                            return !1
                        }()) {
                        if ((0, s.match)(i.TokenType.colon) || (0, s.match)(i.TokenType.comma) || (0, s.match)(i.TokenType.question) || (0, s.match)(i.TokenType.eq)) return !0;
                        if ((0, s.match)(i.TokenType.parenR) && ((0, s.next)(), (0, s.match)(i.TokenType.arrow))) return !0
                    }
                    return !1
                }();
            return c.state.restoreFromSnapshot(e), t
        }()
    }

    function B(e) {
        const t = (0, s.pushTypeContext)(0);
        (0, h.expect)(e);
        (function() {
            const e = c.state.snapshot();
            if ((0, h.isContextual)(a.ContextualKeyword._asserts)) return (0, s.next)(), (0, h.eatContextual)(a.ContextualKeyword._is) ? (M(), !0) : T() || (0, s.match)(i.TokenType._this) ? ((0, s.next)(), (0, h.eatContextual)(a.ContextualKeyword._is) && M(), !0) : (c.state.restoreFromSnapshot(e), !1);
            if (T() || (0, s.match)(i.TokenType._this)) return (0, s.next)(), (0, h.isContextual)(a.ContextualKeyword._is) && !(0, h.hasPrecedingLineBreak)() ? ((0, s.next)(), M(), !0) : (c.state.restoreFromSnapshot(e), !1);
            return !1
        })() || M(), (0, s.popTypeContext)(t)
    }

    function K() {
        (0, s.match)(i.TokenType.colon) && $()
    }

    function $() {
        const e = (0, s.pushTypeContext)(0);
        (0, h.expect)(i.TokenType.colon), M(), (0, s.popTypeContext)(e)
    }

    function M() {
        if (q(), c.state.inDisallowConditionalTypesContext || (0, h.hasPrecedingLineBreak)() || !(0, s.eat)(i.TokenType._extends)) return;
        const e = c.state.inDisallowConditionalTypesContext;
        c.state.inDisallowConditionalTypesContext = !0, q(), c.state.inDisallowConditionalTypesContext = e, (0, h.expect)(i.TokenType.question), M(), (0, h.expect)(i.TokenType.colon), M()
    }

    function q() {
        j() ? F(r.TSFunctionType) : (0, s.match)(i.TokenType._new) ? F(r.TSConstructorType) : (0, h.isContextual)(a.ContextualKeyword._abstract) && (0, s.lookaheadType)() === i.TokenType._new ? F(r.TSAbstractConstructorType) : function() {
            if ((0, s.eat)(i.TokenType.bitwiseOR), D(), (0, s.match)(i.TokenType.bitwiseOR))
                for (;
                    (0, s.eat)(i.TokenType.bitwiseOR);) D()
        }()
    }

    function H() {
        const e = (0, s.pushTypeContext)(1);
        M(), (0, h.expect)(i.TokenType.greaterThan), (0, s.popTypeContext)(e), (0, p.parseMaybeUnary)()
    }

    function U() {
        if ((0, s.eat)(i.TokenType.jsxTagStart)) {
            c.state.tokens[c.state.tokens.length - 1].type = i.TokenType.typeParameterStart;
            const e = (0, s.pushTypeContext)(1);
            for (; !(0, s.match)(i.TokenType.greaterThan) && !c.state.error;) M(), (0, s.eat)(i.TokenType.comma);
            (0, d.nextJSXTagToken)(), (0, s.popTypeContext)(e)
        }
    }

    function V() {
        for (; !(0, s.match)(i.TokenType.braceL) && !c.state.error;) z(), (0, s.eat)(i.TokenType.comma)
    }

    function z() {
        m(), (0, s.match)(i.TokenType.lessThan) && se()
    }

    function W() {
        if ((0, s.match)(i.TokenType.string) ? (0, p.parseLiteral)() : (0, p.parseIdentifier)(), (0, s.eat)(i.TokenType.eq)) {
            const e = c.state.tokens.length - 1;
            (0, p.parseMaybeAssign)(), c.state.tokens[e].rhsEndIndex = c.state.tokens.length
        }
    }

    function G() {
        for ((0, l.parseBindingIdentifier)(!1), (0, h.expect)(i.TokenType.braceL); !(0, s.eat)(i.TokenType.braceR) && !c.state.error;) W(), (0, s.eat)(i.TokenType.comma)
    }

    function X() {
        (0, h.expect)(i.TokenType.braceL), (0, u.parseBlockBody)(i.TokenType.braceR)
    }

    function Y() {
        (0, l.parseBindingIdentifier)(!1), (0, s.eat)(i.TokenType.dot) ? Y(): X()
    }

    function J() {
        (0, h.isContextual)(a.ContextualKeyword._global) ? (0, p.parseIdentifier)() : (0, s.match)(i.TokenType.string) ? (0, p.parseExprAtom)() : (0, h.unexpected)(), (0, s.match)(i.TokenType.braceL) ? X(): (0, h.semicolon)()
    }

    function Z() {
        (0, l.parseImportedIdentifier)(), (0, h.expect)(i.TokenType.eq), (0, h.isContextual)(a.ContextualKeyword._require) && (0, s.lookaheadType)() === i.TokenType.parenL ? ((0, h.expectContextual)(a.ContextualKeyword._require), (0, h.expect)(i.TokenType.parenL), (0, s.match)(i.TokenType.string) || (0, h.unexpected)(), (0, p.parseLiteral)(), (0, h.expect)(i.TokenType.parenR)) : m(), (0, h.semicolon)()
    }

    function Q() {
        return te(c.state.contextualKeyword, !0)
    }

    function ee(e) {
        switch (e) {
            case a.ContextualKeyword._declare: {
                const e = c.state.tokens.length - 1,
                    t = function() {
                        if ((0, h.isLineTerminator)()) return !1;
                        switch (c.state.type) {
                            case i.TokenType._function: {
                                const e = (0, s.pushTypeContext)(1);
                                (0, s.next)();
                                const t = c.state.start;
                                return (0, u.parseFunction)(t, !0), (0, s.popTypeContext)(e), !0
                            }
                            case i.TokenType._class: {
                                const e = (0, s.pushTypeContext)(1);
                                return (0, u.parseClass)(!0, !1), (0, s.popTypeContext)(e), !0
                            }
                            case i.TokenType._const:
                                if ((0, s.match)(i.TokenType._const) && (0, h.isLookaheadContextual)(a.ContextualKeyword._enum)) {
                                    const e = (0, s.pushTypeContext)(1);
                                    return (0, h.expect)(i.TokenType._const), (0, h.expectContextual)(a.ContextualKeyword._enum), c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._enum, G(), (0, s.popTypeContext)(e), !0
                                }
                            case i.TokenType._var:
                            case i.TokenType._let: {
                                const e = (0, s.pushTypeContext)(1);
                                return (0, u.parseVarStatement)(c.state.type !== i.TokenType._var), (0, s.popTypeContext)(e), !0
                            }
                            case i.TokenType.name: {
                                const e = (0, s.pushTypeContext)(1),
                                    t = c.state.contextualKeyword;
                                let n = !1;
                                return t === a.ContextualKeyword._global ? (J(), n = !0) : n = te(t, !0), (0, s.popTypeContext)(e), n
                            }
                            default:
                                return !1
                        }
                    }();
                if (t) return c.state.tokens[e].type = i.TokenType._declare, !0;
                break
            }
            case a.ContextualKeyword._global:
                if ((0, s.match)(i.TokenType.braceL)) return X(), !0;
                break;
            default:
                return te(e, !1)
        }
        return !1
    }

    function te(e, t) {
        switch (e) {
            case a.ContextualKeyword._abstract:
                if (ne(t) && (0, s.match)(i.TokenType._class)) return c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._abstract, (0, u.parseClass)(!0, !1), !0;
                break;
            case a.ContextualKeyword._enum:
                if (ne(t) && (0, s.match)(i.TokenType.name)) return c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._enum, G(), !0;
                break;
            case a.ContextualKeyword._interface:
                if (ne(t) && (0, s.match)(i.TokenType.name)) {
                    const e = (0, s.pushTypeContext)(t ? 2 : 1);
                    return (0, l.parseBindingIdentifier)(!1), b(), (0, s.eat)(i.TokenType._extends) && V(), A(), (0, s.popTypeContext)(e), !0
                }
                break;
            case a.ContextualKeyword._module:
                if (ne(t)) {
                    if ((0, s.match)(i.TokenType.string)) {
                        const e = (0, s.pushTypeContext)(t ? 2 : 1);
                        return J(), (0, s.popTypeContext)(e), !0
                    }
                    if ((0, s.match)(i.TokenType.name)) {
                        const e = (0, s.pushTypeContext)(t ? 2 : 1);
                        return Y(), (0, s.popTypeContext)(e), !0
                    }
                }
                break;
            case a.ContextualKeyword._namespace:
                if (ne(t) && (0, s.match)(i.TokenType.name)) {
                    const e = (0, s.pushTypeContext)(t ? 2 : 1);
                    return Y(), (0, s.popTypeContext)(e), !0
                }
                break;
            case a.ContextualKeyword._type:
                if (ne(t) && (0, s.match)(i.TokenType.name)) {
                    const e = (0, s.pushTypeContext)(t ? 2 : 1);
                    return (0, l.parseBindingIdentifier)(!1), b(), (0, h.expect)(i.TokenType.eq), M(), (0, h.semicolon)(), (0, s.popTypeContext)(e), !0
                }
        }
        return !1
    }

    function ne(e) {
        return e ? ((0, s.next)(), !0) : !(0, h.isLineTerminator)()
    }

    function oe() {
        const e = c.state.snapshot();
        return C(), (0, u.parseFunctionParams)(), (0, s.match)(i.TokenType.colon) && B(i.TokenType.colon), (0, h.expect)(i.TokenType.arrow), c.state.error ? (c.state.restoreFromSnapshot(e), !1) : ((0, p.parseFunctionBody)(!0), !0)
    }

    function re() {
        c.state.type === i.TokenType.bitShiftL && (c.state.pos -= 1, (0, s.finishToken)(i.TokenType.lessThan)), se()
    }

    function se() {
        const e = (0, s.pushTypeContext)(0);
        for ((0, h.expect)(i.TokenType.lessThan); !(0, s.match)(i.TokenType.greaterThan) && !c.state.error;) M(), (0, s.eat)(i.TokenType.comma);
        e ? ((0, h.expect)(i.TokenType.greaterThan), (0, s.popTypeContext)(e)) : ((0, s.popTypeContext)(e), (0, s.rescan_gt)(), (0, h.expect)(i.TokenType.greaterThan), c.state.tokens[c.state.tokens.length - 1].isType = !0)
    }

    function ae() {
        if ((0, s.match)(i.TokenType.name)) switch (c.state.contextualKeyword) {
            case a.ContextualKeyword._abstract:
            case a.ContextualKeyword._declare:
            case a.ContextualKeyword._enum:
            case a.ContextualKeyword._interface:
            case a.ContextualKeyword._module:
            case a.ContextualKeyword._namespace:
            case a.ContextualKeyword._type:
                return !0
        }
        return !1
    }

    function ie(e, t) {
        if ((0, s.match)(i.TokenType.colon) && B(i.TokenType.colon), (0, s.match)(i.TokenType.braceL) || !(0, h.isLineTerminator)())(0, p.parseFunctionBody)(!1, t);
        else {
            let t = c.state.tokens.length - 1;
            for (; t >= 0 && (c.state.tokens[t].start >= e || c.state.tokens[t].type === i.TokenType._default || c.state.tokens[t].type === i.TokenType._export);) c.state.tokens[t].isType = !0, t--
        }
    }

    function ce(e, t, n) {
        if ((0, h.hasPrecedingLineBreak)() || !(0, s.eat)(i.TokenType.bang)) {
            if ((0, s.match)(i.TokenType.lessThan) || (0, s.match)(i.TokenType.bitShiftL)) {
                const n = c.state.snapshot();
                if (!t && (0, p.atPossibleAsync)()) {
                    if (oe()) return
                }
                if (re(), !t && (0, s.eat)(i.TokenType.parenL) ? (c.state.tokens[c.state.tokens.length - 1].subscriptStartIndex = e, (0, p.parseCallExpressionArguments)()) : (0, s.match)(i.TokenType.backQuote) ? (0, p.parseTemplate)() : (c.state.type === i.TokenType.greaterThan || c.state.type !== i.TokenType.parenL && Boolean(c.state.type & i.TokenType.IS_EXPRESSION_START) && !(0, h.hasPrecedingLineBreak)()) && (0, h.unexpected)(), !c.state.error) return;
                c.state.restoreFromSnapshot(n)
            } else !t && (0, s.match)(i.TokenType.questionDot) && (0, s.lookaheadType)() === i.TokenType.lessThan && ((0, s.next)(), c.state.tokens[e].isOptionalChainStart = !0, c.state.tokens[c.state.tokens.length - 1].subscriptStartIndex = e, se(), (0, h.expect)(i.TokenType.parenL), (0, p.parseCallExpressionArguments)());
            (0, p.baseParseSubscript)(e, t, n)
        } else c.state.tokens[c.state.tokens.length - 1].type = i.TokenType.nonNullAssertion
    }

    function pe() {
        if ((0, s.eat)(i.TokenType._import)) return (0, h.isContextual)(a.ContextualKeyword._type) && (0, s.lookaheadType)() !== i.TokenType.eq && (0, h.expectContextual)(a.ContextualKeyword._type), Z(), !0;
        if ((0, s.eat)(i.TokenType.eq)) return (0, p.parseExpression)(), (0, h.semicolon)(), !0;
        if ((0, h.eatContextual)(a.ContextualKeyword._as)) return (0, h.expectContextual)(a.ContextualKeyword._namespace), (0, p.parseIdentifier)(), (0, h.semicolon)(), !0;
        if ((0, h.isContextual)(a.ContextualKeyword._type)) {
            const e = (0, s.lookaheadType)();
            e !== i.TokenType.braceL && e !== i.TokenType.star || (0, s.next)()
        }
        return !1
    }

    function le() {
        if ((0, p.parseIdentifier)(), (0, s.match)(i.TokenType.comma) || (0, s.match)(i.TokenType.braceR)) c.state.tokens[c.state.tokens.length - 1].identifierRole = s.IdentifierRole.ImportDeclaration;
        else {
            if ((0, p.parseIdentifier)(), (0, s.match)(i.TokenType.comma) || (0, s.match)(i.TokenType.braceR)) return c.state.tokens[c.state.tokens.length - 1].identifierRole = s.IdentifierRole.ImportDeclaration, c.state.tokens[c.state.tokens.length - 2].isType = !0, void(c.state.tokens[c.state.tokens.length - 1].isType = !0);
            if ((0, p.parseIdentifier)(), (0, s.match)(i.TokenType.comma) || (0, s.match)(i.TokenType.braceR)) return c.state.tokens[c.state.tokens.length - 3].identifierRole = s.IdentifierRole.ImportAccess, void(c.state.tokens[c.state.tokens.length - 1].identifierRole = s.IdentifierRole.ImportDeclaration);
            (0, p.parseIdentifier)(), c.state.tokens[c.state.tokens.length - 3].identifierRole = s.IdentifierRole.ImportAccess, c.state.tokens[c.state.tokens.length - 1].identifierRole = s.IdentifierRole.ImportDeclaration, c.state.tokens[c.state.tokens.length - 4].isType = !0, c.state.tokens[c.state.tokens.length - 3].isType = !0, c.state.tokens[c.state.tokens.length - 2].isType = !0, c.state.tokens[c.state.tokens.length - 1].isType = !0
        }
    }

    function ue() {
        if ((0, p.parseIdentifier)(), (0, s.match)(i.TokenType.comma) || (0, s.match)(i.TokenType.braceR)) c.state.tokens[c.state.tokens.length - 1].identifierRole = s.IdentifierRole.ExportAccess;
        else {
            if ((0, p.parseIdentifier)(), (0, s.match)(i.TokenType.comma) || (0, s.match)(i.TokenType.braceR)) return c.state.tokens[c.state.tokens.length - 1].identifierRole = s.IdentifierRole.ExportAccess, c.state.tokens[c.state.tokens.length - 2].isType = !0, void(c.state.tokens[c.state.tokens.length - 1].isType = !0);
            (0, p.parseIdentifier)(), (0, s.match)(i.TokenType.comma) || (0, s.match)(i.TokenType.braceR) ? c.state.tokens[c.state.tokens.length - 3].identifierRole = s.IdentifierRole.ExportAccess: ((0, p.parseIdentifier)(), c.state.tokens[c.state.tokens.length - 3].identifierRole = s.IdentifierRole.ExportAccess, c.state.tokens[c.state.tokens.length - 4].isType = !0, c.state.tokens[c.state.tokens.length - 3].isType = !0, c.state.tokens[c.state.tokens.length - 2].isType = !0, c.state.tokens[c.state.tokens.length - 1].isType = !0)
        }
    }

    function he() {
        if ((0, h.isContextual)(a.ContextualKeyword._abstract) && (0, s.lookaheadType)() === i.TokenType._class) return c.state.type = i.TokenType._abstract, (0, s.next)(), (0, u.parseClass)(!0, !0), !0;
        if ((0, h.isContextual)(a.ContextualKeyword._interface)) {
            const e = (0, s.pushTypeContext)(2);
            return te(a.ContextualKeyword._interface, !0), (0, s.popTypeContext)(e), !0
        }
        return !1
    }

    function de() {
        if (c.state.type === i.TokenType._const) {
            const e = (0, s.lookaheadTypeAndKeyword)();
            if (e.type === i.TokenType.name && e.contextualKeyword === a.ContextualKeyword._enum) return (0, h.expect)(i.TokenType._const), (0, h.expectContextual)(a.ContextualKeyword._enum), c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._enum, G(), !0
        }
        return !1
    }

    function Te(e) {
        const t = c.state.tokens.length;
        f([a.ContextualKeyword._abstract, a.ContextualKeyword._readonly, a.ContextualKeyword._declare, a.ContextualKeyword._static, a.ContextualKeyword._override]);
        const n = c.state.tokens.length;
        if (I()) {
            for (let o = e ? t - 1 : t; o < n; o++) c.state.tokens[o].isType = !0;
            return !0
        }
        return !1
    }

    function ye(e) {
        ee(e) || (0, h.semicolon)()
    }

    function fe() {
        const e = (0, h.eatContextual)(a.ContextualKeyword._declare);
        e && (c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._declare);
        let t = !1;
        if ((0, s.match)(i.TokenType.name))
            if (e) {
                const e = (0, s.pushTypeContext)(2);
                t = Q(), (0, s.popTypeContext)(e)
            } else t = Q();
        if (!t)
            if (e) {
                const e = (0, s.pushTypeContext)(2);
                (0, u.parseStatement)(!0), (0, s.popTypeContext)(e)
            } else(0, u.parseStatement)(!0)
    }

    function ke(e) {
        if (e && ((0, s.match)(i.TokenType.lessThan) || (0, s.match)(i.TokenType.bitShiftL)) && re(), (0, h.eatContextual)(a.ContextualKeyword._implements)) {
            c.state.tokens[c.state.tokens.length - 1].type = i.TokenType._implements;
            const e = (0, s.pushTypeContext)(1);
            V(), (0, s.popTypeContext)(e)
        }
    }

    function me() {
        b()
    }

    function ge() {
        b()
    }

    function xe() {
        const e = (0, s.pushTypeContext)(0);
        (0, h.hasPrecedingLineBreak)() || (0, s.eat)(i.TokenType.bang), K(), (0, s.popTypeContext)(e)
    }

    function be() {
        (0, s.match)(i.TokenType.colon) && $()
    }

    function Ce(e, t) {
        return c.isJSXEnabled ? function(e, t) {
            if (!(0, s.match)(i.TokenType.lessThan)) return (0, p.baseParseMaybeAssign)(e, t);
            const n = c.state.snapshot();
            let o = (0, p.baseParseMaybeAssign)(e, t);
            if (!c.state.error) return o;
            c.state.restoreFromSnapshot(n);
            c.state.type = i.TokenType.typeParameterStart, C(), o = (0, p.baseParseMaybeAssign)(e, t), o || (0, h.unexpected)();
            return o
        }(e, t) : function(e, t) {
            if (!(0, s.match)(i.TokenType.lessThan)) return (0, p.baseParseMaybeAssign)(e, t);
            const n = c.state.snapshot();
            C();
            const o = (0, p.baseParseMaybeAssign)(e, t);
            o || (0, h.unexpected)();
            if (!c.state.error) return o;
            c.state.restoreFromSnapshot(n);
            return (0, p.baseParseMaybeAssign)(e, t)
        }(e, t)
    }

    function _e() {
        if ((0, s.match)(i.TokenType.colon)) {
            const e = c.state.snapshot();
            B(i.TokenType.colon), (0, h.canInsertSemicolon)() && (0, h.unexpected)(), (0, s.match)(i.TokenType.arrow) || (0, h.unexpected)(), c.state.error && c.state.restoreFromSnapshot(e)
        }
        return (0, s.eat)(i.TokenType.arrow)
    }

    function we() {
        const e = (0, s.pushTypeContext)(0);
        (0, s.eat)(i.TokenType.question), K(), (0, s.popTypeContext)(e)
    }

    function ve() {
        ((0, s.match)(i.TokenType.lessThan) || (0, s.match)(i.TokenType.bitShiftL)) && re(), (0, u.baseParseMaybeDecoratorArguments)()
    }! function(e) {
        e[e.TSFunctionType = 0] = "TSFunctionType";
        e[e.TSConstructorType = 1] = "TSConstructorType";
        e[e.TSAbstractConstructorType = 2] = "TSAbstractConstructorType"
    }(r || (r = {}))
})), n.register("li15Q", (function(e, o) {
    t(e.exports, "parseSpread", (function() {
        return h
    })), t(e.exports, "parseRest", (function() {
        return d
    })), t(e.exports, "parseBindingAtom", (function() {
        return k
    })), t(e.exports, "parseBindingIdentifier", (function() {
        return T
    })), t(e.exports, "markPriorBindingIdentifier", (function() {
        return f
    })), t(e.exports, "parseImportedIdentifier", (function() {
        return y
    })), t(e.exports, "parseBindingList", (function() {
        return m
    })), t(e.exports, "parseMaybeDefault", (function() {
        return b
    }));
    var r = n("9O8bm"),
        s = n("2dIPf"),
        a = n("9OJHt"),
        i = n("46D9g"),
        c = n("31VH2"),
        p = n("kk1e5"),
        l = n("kMwty"),
        u = n("5ofYc");

    function h() {
        (0, a.next)(), (0, l.parseMaybeAssign)(!1)
    }

    function d(e) {
        (0, a.next)(), k(e)
    }

    function T(e) {
        (0, l.parseIdentifier)(), f(e)
    }

    function y() {
        (0, l.parseIdentifier)(), p.state.tokens[p.state.tokens.length - 1].identifierRole = a.IdentifierRole.ImportDeclaration
    }

    function f(e) {
        let t;
        t = 0 === p.state.scopeDepth ? a.IdentifierRole.TopLevelDeclaration : e ? a.IdentifierRole.BlockScopedDeclaration : a.IdentifierRole.FunctionScopedDeclaration, p.state.tokens[p.state.tokens.length - 1].identifierRole = t
    }

    function k(e) {
        switch (p.state.type) {
            case c.TokenType._this: {
                const e = (0, a.pushTypeContext)(0);
                return (0, a.next)(), void(0, a.popTypeContext)(e)
            }
            case c.TokenType._yield:
            case c.TokenType.name:
                return p.state.type = c.TokenType.name, void T(e);
            case c.TokenType.bracketL:
                return (0, a.next)(), void m(c.TokenType.bracketR, e, !0);
            case c.TokenType.braceL:
                return void(0, l.parseObj)(!0, e);
            default:
                (0, u.unexpected)()
        }
    }

    function m(e, t, n = !1, o = !1, r = 0) {
        let s = !0,
            i = !1;
        const l = p.state.tokens.length;
        for (; !(0, a.eat)(e) && !p.state.error;)
            if (s ? s = !1 : ((0, u.expect)(c.TokenType.comma), p.state.tokens[p.state.tokens.length - 1].contextId = r, !i && p.state.tokens[l].isType && (p.state.tokens[p.state.tokens.length - 1].isType = !0, i = !0)), n && (0, a.match)(c.TokenType.comma));
            else {
                if ((0, a.eat)(e)) break;
                if ((0, a.match)(c.TokenType.ellipsis)) {
                    d(t), x(), (0, a.eat)(c.TokenType.comma), (0, u.expect)(e);
                    break
                }
                g(o, t)
            }
    }

    function g(e, t) {
        e && (0, s.tsParseModifiers)([i.ContextualKeyword._public, i.ContextualKeyword._protected, i.ContextualKeyword._private, i.ContextualKeyword._readonly, i.ContextualKeyword._override]), b(t), x(), b(t, !0)
    }

    function x() {
        p.isFlowEnabled ? (0, r.flowParseAssignableListItemTypes)() : p.isTypeScriptEnabled && (0, s.tsParseAssignableListItemTypes)()
    }

    function b(e, t = !1) {
        if (t || k(e), !(0, a.eat)(c.TokenType.eq)) return;
        const n = p.state.tokens.length - 1;
        (0, l.parseMaybeAssign)(), p.state.tokens[n].rhsEndIndex = p.state.tokens.length
    }
})), n.register("k3Cp0", (function(e, o) {
    t(e.exports, "typedParseConditional", (function() {
        return l
    })), t(e.exports, "typedParseParenItem", (function() {
        return u
    }));
    var r = n("9OJHt"),
        s = n("31VH2"),
        a = n("kk1e5"),
        i = n("kMwty"),
        c = n("9O8bm"),
        p = n("2dIPf");

    function l(e) {
        if ((0, r.match)(s.TokenType.question)) {
            const e = (0, r.lookaheadType)();
            if (e === s.TokenType.colon || e === s.TokenType.comma || e === s.TokenType.parenR) return
        }(0, i.baseParseConditional)(e)
    }

    function u() {
        (0, r.eatTypeToken)(s.TokenType.question), (0, r.match)(s.TokenType.colon) && (a.isTypeScriptEnabled ? (0, p.tsParseTypeAnnotation)() : a.isFlowEnabled && (0, c.flowParseTypeAnnotation)())
    }
})), n.register("gzntO", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("31VH2"),
        s = n("5eUwk");
    class a {
        __init() {
            this.resultCode = ""
        }
        __init2() {
            this.resultMappings = new Array(this.tokens.length)
        }
        __init3() {
            this.tokenIndex = 0
        }
        snapshot() {
            return {
                resultCode: this.resultCode,
                tokenIndex: this.tokenIndex
            }
        }
        restoreToSnapshot(e) {
            this.resultCode = e.resultCode, this.tokenIndex = e.tokenIndex
        }
        dangerouslyGetAndRemoveCodeSinceSnapshot(e) {
            const t = this.resultCode.slice(e.resultCode.length);
            return this.resultCode = e.resultCode, t
        }
        reset() {
            this.resultCode = "", this.resultMappings = new Array(this.tokens.length), this.tokenIndex = 0
        }
        matchesContextualAtIndex(e, t) {
            return this.matches1AtIndex(e, r.TokenType.name) && this.tokens[e].contextualKeyword === t
        }
        identifierNameAtIndex(e) {
            return this.identifierNameForToken(this.tokens[e])
        }
        identifierNameAtRelativeIndex(e) {
            return this.identifierNameForToken(this.tokenAtRelativeIndex(e))
        }
        identifierName() {
            return this.identifierNameForToken(this.currentToken())
        }
        identifierNameForToken(e) {
            return this.code.slice(e.start, e.end)
        }
        rawCodeForToken(e) {
            return this.code.slice(e.start, e.end)
        }
        stringValueAtIndex(e) {
            return this.stringValueForToken(this.tokens[e])
        }
        stringValue() {
            return this.stringValueForToken(this.currentToken())
        }
        stringValueForToken(e) {
            return this.code.slice(e.start + 1, e.end - 1)
        }
        matches1AtIndex(e, t) {
            return this.tokens[e].type === t
        }
        matches2AtIndex(e, t, n) {
            return this.tokens[e].type === t && this.tokens[e + 1].type === n
        }
        matches3AtIndex(e, t, n, o) {
            return this.tokens[e].type === t && this.tokens[e + 1].type === n && this.tokens[e + 2].type === o
        }
        matches1(e) {
            return this.tokens[this.tokenIndex].type === e
        }
        matches2(e, t) {
            return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t
        }
        matches3(e, t, n) {
            return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t && this.tokens[this.tokenIndex + 2].type === n
        }
        matches4(e, t, n, o) {
            return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t && this.tokens[this.tokenIndex + 2].type === n && this.tokens[this.tokenIndex + 3].type === o
        }
        matches5(e, t, n, o, r) {
            return this.tokens[this.tokenIndex].type === e && this.tokens[this.tokenIndex + 1].type === t && this.tokens[this.tokenIndex + 2].type === n && this.tokens[this.tokenIndex + 3].type === o && this.tokens[this.tokenIndex + 4].type === r
        }
        matchesContextual(e) {
            return this.matchesContextualAtIndex(this.tokenIndex, e)
        }
        matchesContextIdAndLabel(e, t) {
            return this.matches1(e) && this.currentToken().contextId === t
        }
        previousWhitespaceAndComments() {
            let e = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
            return this.isFlowEnabled && (e = e.replace(/@flow/g, "")), e
        }
        replaceToken(e) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += e, this.appendTokenSuffix(), this.tokenIndex++
        }
        replaceTokenTrimmingLeftWhitespace(e) {
            this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ""), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += e, this.appendTokenSuffix(), this.tokenIndex++
        }
        removeInitialToken() {
            this.replaceToken("")
        }
        removeToken() {
            this.replaceTokenTrimmingLeftWhitespace("")
        }
        removeBalancedCode() {
            let e = 0;
            for (; !this.isAtEnd();) {
                if (this.matches1(r.TokenType.braceL)) e++;
                else if (this.matches1(r.TokenType.braceR)) {
                    if (0 === e) return;
                    e--
                }
                this.removeToken()
            }
        }
        copyExpectedToken(e) {
            if (this.tokens[this.tokenIndex].type !== e) throw new Error(`Expected token ${e}`);
            this.copyToken()
        }
        copyToken() {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++
        }
        copyTokenWithPrefix(e) {
            this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += e, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++
        }
        appendTokenPrefix() {
            const e = this.currentToken();
            if ((e.numNullishCoalesceStarts || e.isOptionalChainStart) && (e.isAsyncOperation = (0, s.default)(this)), !this.disableESTransforms) {
                if (e.numNullishCoalesceStarts)
                    for (let t = 0; t < e.numNullishCoalesceStarts; t++) e.isAsyncOperation ? (this.resultCode += "await ", this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce")) : this.resultCode += this.helperManager.getHelperName("nullishCoalesce"), this.resultCode += "(";
                e.isOptionalChainStart && (e.isAsyncOperation && (this.resultCode += "await "), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === r.TokenType._delete ? e.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete") : this.resultCode += this.helperManager.getHelperName("optionalChainDelete") : e.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChain") : this.resultCode += this.helperManager.getHelperName("optionalChain"), this.resultCode += "([")
            }
        }
        appendTokenSuffix() {
            const e = this.currentToken();
            if (e.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += "])"), e.numNullishCoalesceEnds && !this.disableESTransforms)
                for (let t = 0; t < e.numNullishCoalesceEnds; t++) this.resultCode += "))"
        }
        appendCode(e) {
            this.resultCode += e
        }
        currentToken() {
            return this.tokens[this.tokenIndex]
        }
        currentTokenCode() {
            const e = this.currentToken();
            return this.code.slice(e.start, e.end)
        }
        tokenAtRelativeIndex(e) {
            return this.tokens[this.tokenIndex + e]
        }
        currentIndex() {
            return this.tokenIndex
        }
        nextToken() {
            if (this.tokenIndex === this.tokens.length) throw new Error("Unexpectedly reached end of input.");
            this.tokenIndex++
        }
        previousToken() {
            this.tokenIndex--
        }
        finish() {
            if (this.tokenIndex !== this.tokens.length) throw new Error("Tried to finish processing tokens before reaching the end.");
            return this.resultCode += this.previousWhitespaceAndComments(), {
                code: this.resultCode,
                mappings: this.resultMappings
            }
        }
        isAtEnd() {
            return this.tokenIndex === this.tokens.length
        }
        constructor(e, t, n, o, r) {
            this.code = e, this.tokens = t, this.isFlowEnabled = n, this.disableESTransforms = o, this.helperManager = r, a.prototype.__init.call(this), a.prototype.__init2.call(this), a.prototype.__init3.call(this)
        }
    }
})), n.register("5eUwk", (function(e, o) {
    t(e.exports, "default", (function() {
        return s
    }));
    var r = n("46D9g");

    function s(e) {
        let t = e.currentIndex(),
            n = 0;
        const o = e.currentToken();
        do {
            const s = e.tokens[t];
            if (s.isOptionalChainStart && n++, s.isOptionalChainEnd && n--, n += s.numNullishCoalesceStarts, n -= s.numNullishCoalesceEnds, s.contextualKeyword === r.ContextualKeyword._await && null == s.identifierRole && s.scopeDepth === o.scopeDepth) return !0;
            t += 1
        } while (n > 0 && t < e.tokens.length);
        return !1
    }
})), n.register("NhrR1", (function(e, o) {
    t(e.exports, "default", (function() {
        return m
    }));
    var r = n("46D9g"),
        s = n("31VH2"),
        a = n("2edyv"),
        i = n("g1FzD"),
        c = n("kMDx6"),
        p = n("4eEdL"),
        l = n("loJTJ"),
        u = n("d4iR6"),
        h = n("3KA5f"),
        d = n("hU4gB"),
        T = n("ev8kG"),
        y = n("cP5HA"),
        f = n("bCrj4"),
        k = n("4Yq2e");
    class m {
        __init() {
            this.transformers = []
        }
        __init2() {
            this.generatedVariables = []
        }
        transform() {
            this.tokens.reset(), this.processBalancedCode();
            let e = this.isImportsTransformEnabled ? '"use strict";' : "";
            for (const t of this.transformers) e += t.getPrefixCode();
            e += this.helperManager.emitHelpers(), e += this.generatedVariables.map((e => ` var ${e};`)).join("");
            for (const t of this.transformers) e += t.getHoistedCode();
            let t = "";
            for (const e of this.transformers) t += e.getSuffixCode();
            const n = this.tokens.finish();
            let {
                code: o
            } = n;
            if (o.startsWith("#!")) {
                let r = o.indexOf("\n");
                return -1 === r && (r = o.length, o += "\n"), {
                    code: o.slice(0, r + 1) + e + o.slice(r + 1) + t,
                    mappings: this.shiftMappings(n.mappings, e.length)
                }
            }
            return {
                code: e + o + t,
                mappings: this.shiftMappings(n.mappings, e.length)
            }
        }
        processBalancedCode() {
            let e = 0,
                t = 0;
            for (; !this.tokens.isAtEnd();) {
                if (this.tokens.matches1(s.TokenType.braceL) || this.tokens.matches1(s.TokenType.dollarBraceL)) e++;
                else if (this.tokens.matches1(s.TokenType.braceR)) {
                    if (0 === e) return;
                    e--
                }
                if (this.tokens.matches1(s.TokenType.parenL)) t++;
                else if (this.tokens.matches1(s.TokenType.parenR)) {
                    if (0 === t) return;
                    t--
                }
                this.processToken()
            }
        }
        processToken() {
            if (this.tokens.matches1(s.TokenType._class)) this.processClass();
            else {
                for (const e of this.transformers) {
                    if (e.process()) return
                }
                this.tokens.copyToken()
            }
        }
        processNamedClass() {
            if (!this.tokens.matches2(s.TokenType._class, s.TokenType.name)) throw new Error("Expected identifier for exported class name.");
            const e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.processClass(), e
        }
        processClass() {
            const e = (0, a.default)(this, this.tokens, this.nameManager, this.disableESTransforms),
                t = (e.headerInfo.isExpression || !e.headerInfo.className) && e.staticInitializerNames.length + e.instanceInitializerNames.length > 0;
            let n = e.headerInfo.className;
            t && (n = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(n), this.tokens.appendCode(` (${n} =`));
            const o = this.tokens.currentToken().contextId;
            if (null == o) throw new Error("Expected class to have a context ID.");
            for (this.tokens.copyExpectedToken(s.TokenType._class); !this.tokens.matchesContextIdAndLabel(s.TokenType.braceL, o);) this.processToken();
            this.processClassBody(e, n);
            const r = e.staticInitializerNames.map((e => `${n}.${e}()`));
            t ? this.tokens.appendCode(`, ${r.map((e=>`${e}, `)).join("")}${n})`) : e.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${r.map((e=>`${e};`)).join(" ")}`)
        }
        processClassBody(e, t) {
            const {
                headerInfo: n,
                constructorInsertPos: o,
                constructorInitializerStatements: r,
                fields: a,
                instanceInitializerNames: i,
                rangesToRemove: c
            } = e;
            let p = 0,
                l = 0;
            const u = this.tokens.currentToken().contextId;
            if (null == u) throw new Error("Expected non-null context ID on class.");
            this.tokens.copyExpectedToken(s.TokenType.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");
            const h = r.length + i.length > 0;
            if (null === o && h) {
                const e = this.makeConstructorInitCode(r, i, t);
                if (n.hasSuperclass) {
                    const t = this.nameManager.claimFreeName("args");
                    this.tokens.appendCode(`constructor(...${t}) { super(...${t}); ${e}; }`)
                } else this.tokens.appendCode(`constructor() { ${e}; }`)
            }
            for (; !this.tokens.matchesContextIdAndLabel(s.TokenType.braceR, u);)
                if (p < a.length && this.tokens.currentIndex() === a[p].start) {
                    let e = !1;
                    for (this.tokens.matches1(s.TokenType.bracketL) ? this.tokens.copyTokenWithPrefix(`${a[p].initializerName}() {this`) : this.tokens.matches1(s.TokenType.string) || this.tokens.matches1(s.TokenType.num) ? (this.tokens.copyTokenWithPrefix(`${a[p].initializerName}() {this[`), e = !0) : this.tokens.copyTokenWithPrefix(`${a[p].initializerName}() {this.`); this.tokens.currentIndex() < a[p].end;) e && this.tokens.currentIndex() === a[p].equalsIndex && this.tokens.appendCode("]"), this.processToken();
                    this.tokens.appendCode("}"), p++
                } else if (l < c.length && this.tokens.currentIndex() >= c[l].start) {
                for (this.tokens.currentIndex() < c[l].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < c[l].end;) this.tokens.removeToken();
                l++
            } else this.tokens.currentIndex() === o ? (this.tokens.copyToken(), h && this.tokens.appendCode(`;${this.makeConstructorInitCode(r,i,t)};`), this.processToken()) : this.processToken();
            this.tokens.copyExpectedToken(s.TokenType.braceR)
        }
        makeConstructorInitCode(e, t, n) {
            return [...e, ...t.map((e => `${n}.prototype.${e}.call(this)`))].join(";")
        }
        processPossibleArrowParamEnd() {
            if (this.tokens.matches2(s.TokenType.parenR, s.TokenType.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
                let e = this.tokens.currentIndex() + 1;
                for (; this.tokens.tokens[e].isType;) e++;
                if (this.tokens.matches1AtIndex(e, s.TokenType.arrow)) {
                    for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < e;) this.tokens.removeToken();
                    return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"), !0
                }
            }
            return !1
        }
        processPossibleAsyncArrowWithTypeParams() {
            if (!this.tokens.matchesContextual(r.ContextualKeyword._async) && !this.tokens.matches1(s.TokenType._async)) return !1;
            const e = this.tokens.tokenAtRelativeIndex(1);
            if (e.type !== s.TokenType.lessThan || !e.isType) return !1;
            let t = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[t].isType;) t++;
            if (this.tokens.matches1AtIndex(t, s.TokenType.parenL)) {
                for (this.tokens.replaceToken("async ("), this.tokens.removeInitialToken(); this.tokens.currentIndex() < t;) this.tokens.removeToken();
                return this.tokens.removeToken(), this.processBalancedCode(), this.processToken(), !0
            }
            return !1
        }
        processPossibleTypeRange() {
            if (this.tokens.currentToken().isType) {
                for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;) this.tokens.removeToken();
                return !0
            }
            return !1
        }
        shiftMappings(e, t) {
            for (let n = 0; n < e.length; n++) {
                const o = e[n];
                void 0 !== o && (e[n] = o + t)
            }
            return e
        }
        constructor(e, t, n, o) {
            m.prototype.__init.call(this), m.prototype.__init2.call(this), this.nameManager = e.nameManager, this.helperManager = e.helperManager;
            const {
                tokenProcessor: r,
                importProcessor: s
            } = e;
            this.tokens = r, this.isImportsTransformEnabled = t.includes("imports"), this.isReactHotLoaderTransformEnabled = t.includes("react-hot-loader"), this.disableESTransforms = Boolean(o.disableESTransforms), o.disableESTransforms || (this.transformers.push(new(0, T.default)(r, this.nameManager)), this.transformers.push(new(0, h.default)(r)), this.transformers.push(new(0, d.default)(r, this.nameManager))), t.includes("jsx") && ("preserve" !== o.jsxRuntime && this.transformers.push(new(0, u.default)(this, r, s, this.nameManager, o)), this.transformers.push(new(0, y.default)(this, r, s, o)));
            let a = null;
            if (t.includes("react-hot-loader")) {
                if (!o.filePath) throw new Error("filePath is required when using the react-hot-loader transform.");
                a = new(0, f.default)(r, o.filePath), this.transformers.push(a)
            }
            if (t.includes("imports")) {
                if (null === s) throw new Error("Expected non-null importProcessor with imports transform enabled.");
                this.transformers.push(new(0, i.default)(this, r, s, this.nameManager, this.helperManager, a, n, Boolean(o.enableLegacyTypeScriptModuleInterop), t.includes("typescript"), t.includes("flow"), Boolean(o.preserveDynamicImport), Boolean(o.keepUnusedImports)))
            } else this.transformers.push(new(0, c.default)(r, this.nameManager, this.helperManager, a, t.includes("typescript"), t.includes("flow"), Boolean(o.keepUnusedImports), o));
            t.includes("flow") && this.transformers.push(new(0, p.default)(this, r, t.includes("imports"))), t.includes("typescript") && this.transformers.push(new(0, k.default)(this, r, t.includes("imports"))), t.includes("jest") && this.transformers.push(new(0, l.default)(this, r, this.nameManager, s))
        }
    }
})), n.register("2edyv", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("46D9g"),
        s = n("31VH2");

    function a(e, t, n, o) {
        const a = t.snapshot(),
            u = function(e) {
                const t = e.currentToken(),
                    n = t.contextId;
                if (null == n) throw new Error("Expected context ID on class token.");
                const o = t.isExpression;
                if (null == o) throw new Error("Expected isExpression on class token.");
                let r = null,
                    a = !1;
                e.nextToken(), e.matches1(s.TokenType.name) && (r = e.identifierName());
                for (; !e.matchesContextIdAndLabel(s.TokenType.braceL, n);) e.matches1(s.TokenType._extends) && !e.currentToken().isType && (a = !0), e.nextToken();
                return {
                    isExpression: o,
                    className: r,
                    hasSuperclass: a
                }
            }(t);
        let h = [];
        const d = [],
            T = [];
        let y = null;
        const f = [],
            k = [],
            m = t.currentToken().contextId;
        if (null == m) throw new Error("Expected non-null class context ID on class open-brace.");
        for (t.nextToken(); !t.matchesContextIdAndLabel(s.TokenType.braceR, m);)
            if (t.matchesContextual(r.ContextualKeyword._constructor) && !t.currentToken().isType)({
                constructorInitializerStatements: h,
                constructorInsertPos: y
            } = c(t));
            else if (t.matches1(s.TokenType.semi)) o || k.push({
            start: t.currentIndex(),
            end: t.currentIndex() + 1
        }), t.nextToken();
        else if (t.currentToken().isType) t.nextToken();
        else {
            const a = t.currentIndex();
            let u = !1,
                g = !1,
                x = !1;
            for (; p(t.currentToken());) t.matches1(s.TokenType._static) && (u = !0), t.matches1(s.TokenType.hash) && (g = !0), (t.matches1(s.TokenType._declare) || t.matches1(s.TokenType._abstract)) && (x = !0), t.nextToken();
            if (u && t.matches1(s.TokenType.braceL)) {
                i(t, m);
                continue
            }
            if (g) {
                i(t, m);
                continue
            }
            if (t.matchesContextual(r.ContextualKeyword._constructor) && !t.currentToken().isType) {
                ({
                    constructorInitializerStatements: h,
                    constructorInsertPos: y
                } = c(t));
                continue
            }
            const b = t.currentIndex();
            if (l(t), t.matches1(s.TokenType.lessThan) || t.matches1(s.TokenType.parenL)) {
                i(t, m);
                continue
            }
            for (; t.currentToken().isType;) t.nextToken();
            if (t.matches1(s.TokenType.eq)) {
                const o = t.currentIndex(),
                    r = t.currentToken().rhsEndIndex;
                if (null == r) throw new Error("Expected rhsEndIndex on class field assignment.");
                for (t.nextToken(); t.currentIndex() < r;) e.processToken();
                let s;
                u ? (s = n.claimFreeName("__initStatic"), T.push(s)) : (s = n.claimFreeName("__init"), d.push(s)), f.push({
                    initializerName: s,
                    equalsIndex: o,
                    start: b,
                    end: t.currentIndex()
                })
            } else o && !x || k.push({
                start: a,
                end: t.currentIndex()
            })
        }
        return t.restoreToSnapshot(a), o ? {
            headerInfo: u,
            constructorInitializerStatements: h,
            instanceInitializerNames: [],
            staticInitializerNames: [],
            constructorInsertPos: y,
            fields: [],
            rangesToRemove: k
        } : {
            headerInfo: u,
            constructorInitializerStatements: h,
            instanceInitializerNames: d,
            staticInitializerNames: T,
            constructorInsertPos: y,
            fields: f,
            rangesToRemove: k
        }
    }

    function i(e, t) {
        for (e.nextToken(); e.currentToken().contextId !== t;) e.nextToken();
        for (; p(e.tokenAtRelativeIndex(-1));) e.previousToken()
    }

    function c(e) {
        const t = [];
        e.nextToken();
        const n = e.currentToken().contextId;
        if (null == n) throw new Error("Expected context ID on open-paren starting constructor params.");
        for (; !e.matchesContextIdAndLabel(s.TokenType.parenR, n);)
            if (e.currentToken().contextId === n) {
                if (e.nextToken(), p(e.currentToken())) {
                    for (e.nextToken(); p(e.currentToken());) e.nextToken();
                    const n = e.currentToken();
                    if (n.type !== s.TokenType.name) throw new Error("Expected identifier after access modifiers in constructor arg.");
                    const o = e.identifierNameForToken(n);
                    t.push(`this.${o} = ${o}`)
                }
            } else e.nextToken();
        for (e.nextToken(); e.currentToken().isType;) e.nextToken();
        let o = e.currentIndex(),
            r = !1;
        for (; !e.matchesContextIdAndLabel(s.TokenType.braceR, n);) {
            if (!r && e.matches2(s.TokenType._super, s.TokenType.parenL)) {
                e.nextToken();
                const t = e.currentToken().contextId;
                if (null == t) throw new Error("Expected a context ID on the super call");
                for (; !e.matchesContextIdAndLabel(s.TokenType.parenR, t);) e.nextToken();
                o = e.currentIndex(), r = !0
            }
            e.nextToken()
        }
        return e.nextToken(), {
            constructorInitializerStatements: t,
            constructorInsertPos: o
        }
    }

    function p(e) {
        return [s.TokenType._async, s.TokenType._get, s.TokenType._set, s.TokenType.plus, s.TokenType.minus, s.TokenType._readonly, s.TokenType._static, s.TokenType._public, s.TokenType._private, s.TokenType._protected, s.TokenType._override, s.TokenType._abstract, s.TokenType.star, s.TokenType._declare, s.TokenType.hash].includes(e.type)
    }

    function l(e) {
        if (e.matches1(s.TokenType.bracketL)) {
            const t = e.currentToken().contextId;
            if (null == t) throw new Error("Expected class context ID on computed name open bracket.");
            for (; !e.matchesContextIdAndLabel(s.TokenType.bracketR, t);) e.nextToken();
            e.nextToken()
        } else e.nextToken()
    }
})), n.register("g1FzD", (function(e, o) {
    t(e.exports, "default", (function() {
        return T
    }));
    var r = n("9OJHt"),
        s = n("46D9g"),
        a = n("31VH2"),
        i = n("6TUL4"),
        c = n("ksgoR"),
        p = n("2eIOH"),
        l = n("9AVpd"),
        u = n("4CQ20"),
        h = n("du5zl"),
        d = n("d2hew");
    class T extends d.default {
        __init() {
            this.hadExport = !1
        }
        __init2() {
            this.hadNamedExport = !1
        }
        __init3() {
            this.hadDefaultExport = !1
        }
        getPrefixCode() {
            let e = "";
            return this.hadExport && (e += 'Object.defineProperty(exports, "__esModule", {value: true});'), e
        }
        getSuffixCode() {
            return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? "\nmodule.exports = exports.default;\n" : ""
        }
        process() {
            return this.tokens.matches3(a.TokenType._import, a.TokenType.name, a.TokenType.eq) ? this.processImportEquals() : this.tokens.matches1(a.TokenType._import) ? (this.processImport(), !0) : this.tokens.matches2(a.TokenType._export, a.TokenType.eq) ? (this.tokens.replaceToken("module.exports"), !0) : this.tokens.matches1(a.TokenType._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : !(!this.tokens.matches2(a.TokenType.name, a.TokenType.postIncDec) || !this.processPostIncDec()) || (this.tokens.matches1(a.TokenType.name) || this.tokens.matches1(a.TokenType.jsxName) ? this.processIdentifier() : this.tokens.matches1(a.TokenType.eq) ? this.processAssignment() : this.tokens.matches1(a.TokenType.assign) ? this.processComplexAssignment() : !!this.tokens.matches1(a.TokenType.preIncDec) && this.processPreIncDec())
        }
        processImportEquals() {
            const e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.importProcessor.shouldAutomaticallyElideImportedName(e) ? (0, i.default)(this.tokens) : this.tokens.replaceToken("const"), !0
        }
        processImport() {
            if (this.tokens.matches2(a.TokenType._import, a.TokenType.parenL)) {
                if (this.preserveDynamicImport) return void this.tokens.copyToken();
                const e = this.enableLegacyTypeScriptModuleInterop ? "" : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
                this.tokens.replaceToken(`Promise.resolve().then(() => ${e}require`);
                const t = this.tokens.currentToken().contextId;
                if (null == t) throw new Error("Expected context ID on dynamic import invocation.");
                for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(a.TokenType.parenR, t);) this.rootTransformer.processToken();
                return void this.tokens.replaceToken(e ? ")))" : "))")
            }
            if (this.removeImportAndDetectIfShouldElide()) this.tokens.removeToken();
            else {
                const e = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), this.tokens.appendCode(this.importProcessor.claimImportCode(e))
            }(0, u.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(a.TokenType.semi) && this.tokens.removeToken()
        }
        removeImportAndDetectIfShouldElide() {
            if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(s.ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, a.TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, s.ContextualKeyword._from)) return this.removeRemainingImport(), !0;
            if (this.tokens.matches1(a.TokenType.name) || this.tokens.matches1(a.TokenType.star)) return this.removeRemainingImport(), !1;
            if (this.tokens.matches1(a.TokenType.string)) return !1;
            let e = !1,
                t = !1;
            for (; !this.tokens.matches1(a.TokenType.string);)(!e && this.tokens.matches1(a.TokenType.braceL) || this.tokens.matches1(a.TokenType.comma)) && (this.tokens.removeToken(), this.tokens.matches1(a.TokenType.braceR) || (t = !0), (this.tokens.matches2(a.TokenType.name, a.TokenType.comma) || this.tokens.matches2(a.TokenType.name, a.TokenType.braceR) || this.tokens.matches4(a.TokenType.name, a.TokenType.name, a.TokenType.name, a.TokenType.comma) || this.tokens.matches4(a.TokenType.name, a.TokenType.name, a.TokenType.name, a.TokenType.braceR)) && (e = !0)), this.tokens.removeToken();
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !e : !!this.isFlowTransformEnabled && (t && !e))
        }
        removeRemainingImport() {
            for (; !this.tokens.matches1(a.TokenType.string);) this.tokens.removeToken()
        }
        processIdentifier() {
            const e = this.tokens.currentToken();
            if (e.shadowsGlobal) return !1;
            if (e.identifierRole === r.IdentifierRole.ObjectShorthand) return this.processObjectShorthand();
            if (e.identifierRole !== r.IdentifierRole.Access) return !1;
            const t = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(e));
            if (!t) return !1;
            let n = this.tokens.currentIndex() + 1;
            for (; n < this.tokens.tokens.length && this.tokens.tokens[n].type === a.TokenType.parenR;) n++;
            return this.tokens.tokens[n].type === a.TokenType.parenL ? this.tokens.tokenAtRelativeIndex(1).type === a.TokenType.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== a.TokenType._new ? (this.tokens.replaceToken(`${t}.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(a.TokenType.parenR)) : this.tokens.replaceToken(`(0, ${t})`) : this.tokens.replaceToken(t), !0
        }
        processObjectShorthand() {
            const e = this.tokens.identifierName(),
                t = this.importProcessor.getIdentifierReplacement(e);
            return !!t && (this.tokens.replaceToken(`${e}: ${t}`), !0)
        }
        processExport() {
            if (this.tokens.matches2(a.TokenType._export, a.TokenType._enum) || this.tokens.matches3(a.TokenType._export, a.TokenType._const, a.TokenType._enum)) return this.hadNamedExport = !0, !1;
            if (this.tokens.matches2(a.TokenType._export, a.TokenType._default)) return this.tokens.matches3(a.TokenType._export, a.TokenType._default, a.TokenType._enum) ? (this.hadDefaultExport = !0, !1) : (this.processExportDefault(), !0);
            if (this.tokens.matches2(a.TokenType._export, a.TokenType.braceL)) return this.processExportBindings(), !0;
            if (this.tokens.matches2(a.TokenType._export, a.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, s.ContextualKeyword._type)) {
                if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(a.TokenType.braceL)) {
                    for (; !this.tokens.matches1(a.TokenType.braceR);) this.tokens.removeToken();
                    this.tokens.removeToken()
                } else this.tokens.removeToken(), this.tokens.matches1(a.TokenType._as) && (this.tokens.removeToken(), this.tokens.removeToken());
                return this.tokens.matchesContextual(s.ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, a.TokenType.string) && (this.tokens.removeToken(), this.tokens.removeToken(), (0, u.removeMaybeImportAttributes)(this.tokens)), !0
            }
            if (this.hadNamedExport = !0, this.tokens.matches2(a.TokenType._export, a.TokenType._var) || this.tokens.matches2(a.TokenType._export, a.TokenType._let) || this.tokens.matches2(a.TokenType._export, a.TokenType._const)) return this.processExportVar(), !0;
            if (this.tokens.matches2(a.TokenType._export, a.TokenType._function) || this.tokens.matches3(a.TokenType._export, a.TokenType.name, a.TokenType._function)) return this.processExportFunction(), !0;
            if (this.tokens.matches2(a.TokenType._export, a.TokenType._class) || this.tokens.matches3(a.TokenType._export, a.TokenType._abstract, a.TokenType._class) || this.tokens.matches2(a.TokenType._export, a.TokenType.at)) return this.processExportClass(), !0;
            if (this.tokens.matches2(a.TokenType._export, a.TokenType.star)) return this.processExportStar(), !0;
            throw new Error("Unrecognized export syntax.")
        }
        processAssignment() {
            const e = this.tokens.currentIndex(),
                t = this.tokens.tokens[e - 1];
            if (t.isType || t.type !== a.TokenType.name) return !1;
            if (t.shadowsGlobal) return !1;
            if (e >= 2 && this.tokens.matches1AtIndex(e - 2, a.TokenType.dot)) return !1;
            if (e >= 2 && [a.TokenType._var, a.TokenType._let, a.TokenType._const].includes(this.tokens.tokens[e - 2].type)) return !1;
            const n = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(t));
            return !!n && (this.tokens.copyToken(), this.tokens.appendCode(` ${n} =`), !0)
        }
        processComplexAssignment() {
            const e = this.tokens.currentIndex(),
                t = this.tokens.tokens[e - 1];
            if (t.type !== a.TokenType.name) return !1;
            if (t.shadowsGlobal) return !1;
            if (e >= 2 && this.tokens.matches1AtIndex(e - 2, a.TokenType.dot)) return !1;
            const n = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(t));
            return !!n && (this.tokens.appendCode(` = ${n}`), this.tokens.copyToken(), !0)
        }
        processPreIncDec() {
            const e = this.tokens.currentIndex(),
                t = this.tokens.tokens[e + 1];
            if (t.type !== a.TokenType.name) return !1;
            if (t.shadowsGlobal) return !1;
            if (e + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(e + 2, a.TokenType.dot) || this.tokens.matches1AtIndex(e + 2, a.TokenType.bracketL) || this.tokens.matches1AtIndex(e + 2, a.TokenType.parenL))) return !1;
            const n = this.tokens.identifierNameForToken(t),
                o = this.importProcessor.resolveExportBinding(n);
            return !!o && (this.tokens.appendCode(`${o} = `), this.tokens.copyToken(), !0)
        }
        processPostIncDec() {
            const e = this.tokens.currentIndex(),
                t = this.tokens.tokens[e],
                n = this.tokens.tokens[e + 1];
            if (t.type !== a.TokenType.name) return !1;
            if (t.shadowsGlobal) return !1;
            if (e >= 1 && this.tokens.matches1AtIndex(e - 1, a.TokenType.dot)) return !1;
            const o = this.tokens.identifierNameForToken(t),
                r = this.importProcessor.resolveExportBinding(o);
            if (!r) return !1;
            const s = this.tokens.rawCodeForToken(n),
                i = this.importProcessor.getIdentifierReplacement(o) || o;
            if ("++" === s) this.tokens.replaceToken(`(${i} = ${r} = ${i} + 1, ${i} - 1)`);
            else {
                if ("--" !== s) throw new Error(`Unexpected operator: ${s}`);
                this.tokens.replaceToken(`(${i} = ${r} = ${i} - 1, ${i} + 1)`)
            }
            return this.tokens.removeToken(), !0
        }
        processExportDefault() {
            let e = !0;
            if (this.tokens.matches4(a.TokenType._export, a.TokenType._default, a.TokenType._function, a.TokenType.name) || this.tokens.matches5(a.TokenType._export, a.TokenType._default, a.TokenType.name, a.TokenType._function, a.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, s.ContextualKeyword._async)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken();
                const e = this.processNamedFunction();
                this.tokens.appendCode(` exports.default = ${e};`)
            } else if (this.tokens.matches4(a.TokenType._export, a.TokenType._default, a.TokenType._class, a.TokenType.name) || this.tokens.matches5(a.TokenType._export, a.TokenType._default, a.TokenType._abstract, a.TokenType._class, a.TokenType.name) || this.tokens.matches3(a.TokenType._export, a.TokenType._default, a.TokenType.at)) {
                this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(a.TokenType._abstract) && this.tokens.removeToken();
                const e = this.rootTransformer.processNamedClass();
                this.tokens.appendCode(` exports.default = ${e};`)
            } else if ((0, h.default)(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) e = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
            else if (this.reactHotLoaderTransformer) {
                const e = this.nameManager.claimFreeName("_default");
                this.tokens.replaceToken(`let ${e}; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${e} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(e)
            } else this.tokens.replaceToken("exports."), this.tokens.copyToken(), this.tokens.appendCode(" =");
            e && (this.hadDefaultExport = !0)
        }
        copyDecorators() {
            for (; this.tokens.matches1(a.TokenType.at);)
                if (this.tokens.copyToken(), this.tokens.matches1(a.TokenType.parenL)) this.tokens.copyExpectedToken(a.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(a.TokenType.parenR);
                else {
                    for (this.tokens.copyExpectedToken(a.TokenType.name); this.tokens.matches1(a.TokenType.dot);) this.tokens.copyExpectedToken(a.TokenType.dot), this.tokens.copyExpectedToken(a.TokenType.name);
                    this.tokens.matches1(a.TokenType.parenL) && (this.tokens.copyExpectedToken(a.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(a.TokenType.parenR))
                }
        }
        processExportVar() {
            this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar()
        }
        isSimpleExportVar() {
            let e = this.tokens.currentIndex();
            if (e++, e++, !this.tokens.matches1AtIndex(e, a.TokenType.name)) return !1;
            for (e++; e < this.tokens.tokens.length && this.tokens.tokens[e].isType;) e++;
            return !!this.tokens.matches1AtIndex(e, a.TokenType.eq)
        }
        processSimpleExportVar() {
            this.tokens.removeInitialToken(), this.tokens.copyToken();
            const e = this.tokens.identifierName();
            for (; !this.tokens.matches1(a.TokenType.eq);) this.rootTransformer.processToken();
            const t = this.tokens.currentToken().rhsEndIndex;
            if (null == t) throw new Error("Expected = token with an end index.");
            for (; this.tokens.currentIndex() < t;) this.rootTransformer.processToken();
            this.tokens.appendCode(`; exports.${e} = ${e}`)
        }
        processComplexExportVar() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const e = this.tokens.matches1(a.TokenType.braceL);
            e && this.tokens.appendCode("(");
            let t = 0;
            for (;;)
                if (this.tokens.matches1(a.TokenType.braceL) || this.tokens.matches1(a.TokenType.dollarBraceL) || this.tokens.matches1(a.TokenType.bracketL)) t++, this.tokens.copyToken();
                else if (this.tokens.matches1(a.TokenType.braceR) || this.tokens.matches1(a.TokenType.bracketR)) t--, this.tokens.copyToken();
            else {
                if (0 === t && !this.tokens.matches1(a.TokenType.name) && !this.tokens.currentToken().isType) break;
                if (this.tokens.matches1(a.TokenType.eq)) {
                    const e = this.tokens.currentToken().rhsEndIndex;
                    if (null == e) throw new Error("Expected = token with an end index.");
                    for (; this.tokens.currentIndex() < e;) this.rootTransformer.processToken()
                } else {
                    const e = this.tokens.currentToken();
                    if ((0, r.isDeclaration)(e)) {
                        const t = this.tokens.identifierName();
                        let n = this.importProcessor.getIdentifierReplacement(t);
                        if (null === n) throw new Error(`Expected a replacement for ${t} in \`export var\` syntax.`);
                        (0, r.isObjectShorthandDeclaration)(e) && (n = `${t}: ${n}`), this.tokens.replaceToken(n)
                    } else this.rootTransformer.processToken()
                }
            }
            if (e) {
                const e = this.tokens.currentToken().rhsEndIndex;
                if (null == e) throw new Error("Expected = token with an end index.");
                for (; this.tokens.currentIndex() < e;) this.rootTransformer.processToken();
                this.tokens.appendCode(")")
            }
        }
        processExportFunction() {
            this.tokens.replaceToken("");
            const e = this.processNamedFunction();
            this.tokens.appendCode(` exports.${e} = ${e};`)
        }
        processNamedFunction() {
            if (this.tokens.matches1(a.TokenType._function)) this.tokens.copyToken();
            else if (this.tokens.matches2(a.TokenType.name, a.TokenType._function)) {
                if (!this.tokens.matchesContextual(s.ContextualKeyword._async)) throw new Error("Expected async keyword in function export.");
                this.tokens.copyToken(), this.tokens.copyToken()
            }
            if (this.tokens.matches1(a.TokenType.star) && this.tokens.copyToken(), !this.tokens.matches1(a.TokenType.name)) throw new Error("Expected identifier for exported function name.");
            const e = this.tokens.identifierName();
            if (this.tokens.copyToken(), this.tokens.currentToken().isType)
                for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;) this.tokens.removeToken();
            return this.tokens.copyExpectedToken(a.TokenType.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(a.TokenType.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(a.TokenType.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(a.TokenType.braceR), e
        }
        processExportClass() {
            this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(a.TokenType._abstract) && this.tokens.removeToken();
            const e = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.${e} = ${e};`)
        }
        processExportBindings() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const e = (0, l.default)(this.tokens),
                t = [];
            for (;;) {
                if (this.tokens.matches1(a.TokenType.braceR)) {
                    this.tokens.removeToken();
                    break
                }
                const n = (0, p.default)(this.tokens);
                for (; this.tokens.currentIndex() < n.endIndex;) this.tokens.removeToken();
                if (!(n.isType || !e && this.shouldElideExportedIdentifier(n.leftName))) {
                    const e = n.rightName;
                    "default" === e ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
                    const o = n.leftName,
                        r = this.importProcessor.getIdentifierReplacement(o);
                    t.push(`exports.${e} = ${r||o};`)
                }
                if (this.tokens.matches1(a.TokenType.braceR)) {
                    this.tokens.removeToken();
                    break
                }
                if (this.tokens.matches2(a.TokenType.comma, a.TokenType.braceR)) {
                    this.tokens.removeToken(), this.tokens.removeToken();
                    break
                }
                if (!this.tokens.matches1(a.TokenType.comma)) throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
                this.tokens.removeToken()
            }
            if (this.tokens.matchesContextual(s.ContextualKeyword._from)) {
                this.tokens.removeToken();
                const e = this.tokens.stringValue();
                this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), (0, u.removeMaybeImportAttributes)(this.tokens)
            } else this.tokens.appendCode(t.join(" "));
            this.tokens.matches1(a.TokenType.semi) && this.tokens.removeToken()
        }
        processExportStar() {
            for (this.tokens.removeInitialToken(); !this.tokens.matches1(a.TokenType.string);) this.tokens.removeToken();
            const e = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), (0, u.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(a.TokenType.semi) && this.tokens.removeToken()
        }
        shouldElideExportedIdentifier(e) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(e)
        }
        constructor(e, t, n, o, r, s, a, i, p, l, u, h) {
            super(), this.rootTransformer = e, this.tokens = t, this.importProcessor = n, this.nameManager = o, this.helperManager = r, this.reactHotLoaderTransformer = s, this.enableLegacyBabel5ModuleInterop = a, this.enableLegacyTypeScriptModuleInterop = i, this.isTypeScriptTransformEnabled = p, this.isFlowTransformEnabled = l, this.preserveDynamicImport = u, this.keepUnusedImports = h, T.prototype.__init.call(this), T.prototype.__init2.call(this), T.prototype.__init3.call(this), this.declarationInfo = p ? (0, c.default)(t) : c.EMPTY_DECLARATION_INFO
        }
    }
})), n.register("6TUL4", (function(e, o) {
    t(e.exports, "default", (function() {
        return s
    }));
    var r = n("31VH2");

    function s(e) {
        if (e.removeInitialToken(), e.removeToken(), e.removeToken(), e.removeToken(), e.matches1(r.TokenType.parenL)) e.removeToken(), e.removeToken(), e.removeToken();
        else
            for (; e.matches1(r.TokenType.dot);) e.removeToken(), e.removeToken()
    }
})), n.register("ksgoR", (function(e, o) {
    t(e.exports, "EMPTY_DECLARATION_INFO", (function() {
        return a
    })), t(e.exports, "default", (function() {
        return i
    }));
    var r = n("9OJHt"),
        s = n("31VH2");
    const a = {
        typeDeclarations: new Set,
        valueDeclarations: new Set
    };

    function i(e) {
        const t = new Set,
            n = new Set;
        for (let o = 0; o < e.tokens.length; o++) {
            const a = e.tokens[o];
            a.type === s.TokenType.name && (0, r.isTopLevelDeclaration)(a) && (a.isType ? t.add(e.identifierNameForToken(a)) : n.add(e.identifierNameForToken(a)))
        }
        return {
            typeDeclarations: t,
            valueDeclarations: n
        }
    }
})), n.register("9AVpd", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("46D9g"),
        s = n("31VH2");

    function a(e) {
        let t = e.currentIndex();
        for (; !e.matches1AtIndex(t, s.TokenType.braceR);) t++;
        return e.matchesContextualAtIndex(t + 1, r.ContextualKeyword._from) && e.matches1AtIndex(t + 2, s.TokenType.string)
    }
})), n.register("4CQ20", (function(e, o) {
    t(e.exports, "removeMaybeImportAttributes", (function() {
        return a
    }));
    var r = n("46D9g"),
        s = n("31VH2");

    function a(e) {
        (e.matches2(s.TokenType._with, s.TokenType.braceL) || e.matches2(s.TokenType.name, s.TokenType.braceL) && e.matchesContextual(r.ContextualKeyword._assert)) && (e.removeToken(), e.removeToken(), e.removeBalancedCode(), e.removeToken())
    }
})), n.register("du5zl", (function(e, o) {
    t(e.exports, "default", (function() {
        return s
    }));
    var r = n("31VH2");

    function s(e, t, n, o) {
        if (!e || t) return !1;
        const s = n.currentToken();
        if (null == s.rhsEndIndex) throw new Error("Expected non-null rhsEndIndex on export token.");
        const a = s.rhsEndIndex - n.currentIndex();
        if (3 !== a && (4 !== a || !n.matches1AtIndex(s.rhsEndIndex - 1, r.TokenType.semi))) return !1;
        const i = n.tokenAtRelativeIndex(2);
        if (i.type !== r.TokenType.name) return !1;
        const c = n.identifierNameForToken(i);
        return o.typeDeclarations.has(c) && !o.valueDeclarations.has(c)
    }
})), n.register("kMDx6", (function(e, o) {
    t(e.exports, "default", (function() {
        return T
    }));
    var r = n("46D9g"),
        s = n("31VH2"),
        a = n("6TUL4"),
        i = n("ksgoR"),
        c = n("2eIOH"),
        p = n("6wRe0"),
        l = n("9AVpd"),
        u = n("4CQ20"),
        h = n("du5zl"),
        d = n("d2hew");
    class T extends d.default {
        process() {
            if (this.tokens.matches3(s.TokenType._import, s.TokenType.name, s.TokenType.eq)) return this.processImportEquals();
            if (this.tokens.matches4(s.TokenType._import, s.TokenType.name, s.TokenType.name, s.TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, r.ContextualKeyword._type)) {
                this.tokens.removeInitialToken();
                for (let e = 0; e < 7; e++) this.tokens.removeToken();
                return !0
            }
            if (this.tokens.matches2(s.TokenType._export, s.TokenType.eq)) return this.tokens.replaceToken("module.exports"), !0;
            if (this.tokens.matches5(s.TokenType._export, s.TokenType._import, s.TokenType.name, s.TokenType.name, s.TokenType.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, r.ContextualKeyword._type)) {
                this.tokens.removeInitialToken();
                for (let e = 0; e < 8; e++) this.tokens.removeToken();
                return !0
            }
            if (this.tokens.matches1(s.TokenType._import)) return this.processImport();
            if (this.tokens.matches2(s.TokenType._export, s.TokenType._default)) return this.processExportDefault();
            if (this.tokens.matches2(s.TokenType._export, s.TokenType.braceL)) return this.processNamedExports();
            if (this.tokens.matches2(s.TokenType._export, s.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, r.ContextualKeyword._type)) {
                if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(s.TokenType.braceL)) {
                    for (; !this.tokens.matches1(s.TokenType.braceR);) this.tokens.removeToken();
                    this.tokens.removeToken()
                } else this.tokens.removeToken(), this.tokens.matches1(s.TokenType._as) && (this.tokens.removeToken(), this.tokens.removeToken());
                return this.tokens.matchesContextual(r.ContextualKeyword._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, s.TokenType.string) && (this.tokens.removeToken(), this.tokens.removeToken(), (0, u.removeMaybeImportAttributes)(this.tokens)), !0
            }
            return !1
        }
        processImportEquals() {
            const e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            return this.shouldAutomaticallyElideImportedName(e) ? (0, a.default)(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0
        }
        processImport() {
            if (this.tokens.matches2(s.TokenType._import, s.TokenType.parenL)) return !1;
            const e = this.tokens.snapshot();
            if (this.removeImportTypeBindings()) {
                for (this.tokens.restoreToSnapshot(e); !this.tokens.matches1(s.TokenType.string);) this.tokens.removeToken();
                this.tokens.removeToken(), (0, u.removeMaybeImportAttributes)(this.tokens), this.tokens.matches1(s.TokenType.semi) && this.tokens.removeToken()
            }
            return !0
        }
        removeImportTypeBindings() {
            if (this.tokens.copyExpectedToken(s.TokenType._import), this.tokens.matchesContextual(r.ContextualKeyword._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, s.TokenType.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, r.ContextualKeyword._from)) return !0;
            if (this.tokens.matches1(s.TokenType.string)) return this.tokens.copyToken(), !1;
            this.tokens.matchesContextual(r.ContextualKeyword._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, r.ContextualKeyword._from) && this.tokens.copyToken();
            let e = !1,
                t = !1,
                n = !1;
            if (this.tokens.matches1(s.TokenType.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(s.TokenType.comma) && this.tokens.removeToken()) : (e = !0, this.tokens.copyToken(), this.tokens.matches1(s.TokenType.comma) && (n = !0, this.tokens.removeToken()))), this.tokens.matches1(s.TokenType.star)) this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (n && this.tokens.appendCode(","), e = !0, this.tokens.copyExpectedToken(s.TokenType.star), this.tokens.copyExpectedToken(s.TokenType.name), this.tokens.copyExpectedToken(s.TokenType.name));
            else if (this.tokens.matches1(s.TokenType.braceL)) {
                for (n && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(s.TokenType.braceR);) {
                    t = !0;
                    const n = (0, c.default)(this.tokens);
                    if (n.isType || this.shouldAutomaticallyElideImportedName(n.rightName)) {
                        for (; this.tokens.currentIndex() < n.endIndex;) this.tokens.removeToken();
                        this.tokens.matches1(s.TokenType.comma) && this.tokens.removeToken()
                    } else {
                        for (e = !0; this.tokens.currentIndex() < n.endIndex;) this.tokens.copyToken();
                        this.tokens.matches1(s.TokenType.comma) && this.tokens.copyToken()
                    }
                }
                this.tokens.copyExpectedToken(s.TokenType.braceR)
            }
            return !this.keepUnusedImports && (this.isTypeScriptTransformEnabled ? !e : !!this.isFlowTransformEnabled && (t && !e))
        }
        shouldAutomaticallyElideImportedName(e) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(e)
        }
        processExportDefault() {
            if ((0, h.default)(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
            if (!(this.tokens.matches4(s.TokenType._export, s.TokenType._default, s.TokenType._function, s.TokenType.name) || this.tokens.matches5(s.TokenType._export, s.TokenType._default, s.TokenType.name, s.TokenType._function, s.TokenType.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, r.ContextualKeyword._async) || this.tokens.matches4(s.TokenType._export, s.TokenType._default, s.TokenType._class, s.TokenType.name) || this.tokens.matches5(s.TokenType._export, s.TokenType._default, s.TokenType._abstract, s.TokenType._class, s.TokenType.name)) && this.reactHotLoaderTransformer) {
                const e = this.nameManager.claimFreeName("_default");
                return this.tokens.replaceToken(`let ${e}; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${e} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(e), !0
            }
            return !1
        }
        processNamedExports() {
            if (!this.isTypeScriptTransformEnabled) return !1;
            this.tokens.copyExpectedToken(s.TokenType._export), this.tokens.copyExpectedToken(s.TokenType.braceL);
            const e = (0, l.default)(this.tokens);
            let t = !1;
            for (; !this.tokens.matches1(s.TokenType.braceR);) {
                const n = (0, c.default)(this.tokens);
                if (n.isType || !e && this.shouldElideExportedName(n.leftName)) {
                    for (; this.tokens.currentIndex() < n.endIndex;) this.tokens.removeToken();
                    this.tokens.matches1(s.TokenType.comma) && this.tokens.removeToken()
                } else {
                    for (t = !0; this.tokens.currentIndex() < n.endIndex;) this.tokens.copyToken();
                    this.tokens.matches1(s.TokenType.comma) && this.tokens.copyToken()
                }
            }
            return this.tokens.copyExpectedToken(s.TokenType.braceR), this.keepUnusedImports || !e || t || (this.tokens.removeToken(), this.tokens.removeToken(), (0, u.removeMaybeImportAttributes)(this.tokens)), !0
        }
        shouldElideExportedName(e) {
            return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(e) && !this.declarationInfo.valueDeclarations.has(e)
        }
        constructor(e, t, n, o, r, s, a, c) {
            super(), this.tokens = e, this.nameManager = t, this.helperManager = n, this.reactHotLoaderTransformer = o, this.isTypeScriptTransformEnabled = r, this.isFlowTransformEnabled = s, this.keepUnusedImports = a, this.nonTypeIdentifiers = r && !a ? (0, p.getNonTypeIdentifiers)(e, c) : new Set, this.declarationInfo = r && !a ? (0, i.default)(e) : i.EMPTY_DECLARATION_INFO, this.injectCreateRequireForImportRequire = Boolean(c.injectCreateRequireForImportRequire)
        }
    }
})), n.register("4eEdL", (function(e, o) {
    t(e.exports, "default", (function() {
        return i
    }));
    var r = n("46D9g"),
        s = n("31VH2"),
        a = n("d2hew");
    class i extends a.default {
        process() {
            return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(s.TokenType._enum) ? (this.processEnum(), !0) : this.tokens.matches2(s.TokenType._export, s.TokenType._enum) ? (this.processNamedExportEnum(), !0) : !!this.tokens.matches3(s.TokenType._export, s.TokenType._default, s.TokenType._enum) && (this.processDefaultExportEnum(), !0))
        }
        processNamedExportEnum() {
            if (this.isImportsTransformEnabled) {
                this.tokens.removeInitialToken();
                const e = this.tokens.identifierNameAtRelativeIndex(1);
                this.processEnum(), this.tokens.appendCode(` exports.${e} = ${e};`)
            } else this.tokens.copyToken(), this.processEnum()
        }
        processDefaultExportEnum() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const e = this.tokens.identifierNameAtRelativeIndex(1);
            this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${e};`) : this.tokens.appendCode(` export default ${e};`)
        }
        processEnum() {
            this.tokens.replaceToken("const"), this.tokens.copyExpectedToken(s.TokenType.name);
            let e = !1;
            this.tokens.matchesContextual(r.ContextualKeyword._of) && (this.tokens.removeToken(), e = this.tokens.matchesContextual(r.ContextualKeyword._symbol), this.tokens.removeToken());
            const t = this.tokens.matches3(s.TokenType.braceL, s.TokenType.name, s.TokenType.eq);
            this.tokens.appendCode(' = require("flow-enums-runtime")');
            const n = !e && !t;
            for (this.tokens.replaceTokenTrimmingLeftWhitespace(n ? ".Mirrored([" : "({"); !this.tokens.matches1(s.TokenType.braceR);) {
                if (this.tokens.matches1(s.TokenType.ellipsis)) {
                    this.tokens.removeToken();
                    break
                }
                this.processEnumElement(e, t), this.tokens.matches1(s.TokenType.comma) && this.tokens.copyToken()
            }
            this.tokens.replaceToken(n ? "]);" : "});")
        }
        processEnumElement(e, t) {
            if (e) {
                const e = this.tokens.identifierName();
                this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${e}")`)
            } else t ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)
        }
        constructor(e, t, n) {
            super(), this.rootTransformer = e, this.tokens = t, this.isImportsTransformEnabled = n
        }
    }
})), n.register("loJTJ", (function(e, o) {
    t(e.exports, "default", (function() {
        return c
    }));
    var r = n("31VH2"),
        s = n("d2hew");
    const a = "jest",
        i = ["mock", "unmock", "enableAutomock", "disableAutomock"];
    class c extends s.default {
        __init() {
            this.hoistedFunctionNames = []
        }
        process() {
            return !(0 !== this.tokens.currentToken().scopeDepth || !this.tokens.matches4(r.TokenType.name, r.TokenType.dot, r.TokenType.name, r.TokenType.parenL) || this.tokens.identifierName() !== a) && (! function(e) {
                let t, n = e[0],
                    o = 1;
                for (; o < e.length;) {
                    const r = e[o],
                        s = e[o + 1];
                    if (o += 2, ("optionalAccess" === r || "optionalCall" === r) && null == n) return;
                    "access" === r || "optionalAccess" === r ? (t = n, n = s(n)) : "call" !== r && "optionalCall" !== r || (n = s(((...e) => n.call(t, ...e))), t = void 0)
                }
                return n
            }([this, "access", e => e.importProcessor, "optionalAccess", e => e.getGlobalNames, "call", e => e(), "optionalAccess", e => e.has, "call", e => e(a)]) && this.extractHoistedCalls())
        }
        getHoistedCode() {
            return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map((e => `${e}();`)).join("") : ""
        }
        extractHoistedCalls() {
            this.tokens.removeToken();
            let e = !1;
            for (; this.tokens.matches3(r.TokenType.dot, r.TokenType.name, r.TokenType.parenL);) {
                const t = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
                if (i.includes(t)) {
                    const t = this.nameManager.claimFreeName("__jestHoist");
                    this.hoistedFunctionNames.push(t), this.tokens.replaceToken(`function ${t}(){${a}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(r.TokenType.parenR), this.tokens.appendCode(";}"), e = !1
                } else e ? this.tokens.copyToken() : this.tokens.replaceToken(`${a}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(r.TokenType.parenR), e = !0
            }
            return !0
        }
        constructor(e, t, n, o) {
            super(), this.rootTransformer = e, this.tokens = t, this.nameManager = n, this.importProcessor = o, c.prototype.__init.call(this)
        }
    }
})), n.register("3KA5f", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("31VH2"),
        s = n("d2hew");
    class a extends s.default {
        process() {
            if (this.tokens.matches1(r.TokenType.num)) {
                const e = this.tokens.currentTokenCode();
                if (e.includes("_")) return this.tokens.replaceToken(e.replace(/_/g, "")), !0
            }
            return !1
        }
        constructor(e) {
            super(), this.tokens = e
        }
    }
})), n.register("hU4gB", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("31VH2"),
        s = n("d2hew");
    class a extends s.default {
        process() {
            return !!this.tokens.matches2(r.TokenType._catch, r.TokenType.braceL) && (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0)
        }
        constructor(e, t) {
            super(), this.tokens = e, this.nameManager = t
        }
    }
})), n.register("ev8kG", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("31VH2"),
        s = n("d2hew");
    class a extends s.default {
        process() {
            if (this.tokens.matches1(r.TokenType.nullishCoalescing)) {
                const e = this.tokens.currentToken();
                return this.tokens.tokens[e.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0
            }
            if (this.tokens.matches1(r.TokenType._delete)) {
                if (this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart) return this.tokens.removeInitialToken(), !0
            }
            const e = this.tokens.currentToken().subscriptStartIndex;
            if (null != e && this.tokens.tokens[e].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== r.TokenType._super) {
                const t = this.nameManager.claimFreeName("_");
                let n;
                if (n = e > 0 && this.tokens.matches1AtIndex(e - 1, r.TokenType._delete) && this.isLastSubscriptInChain() ? `${t} => delete ${t}` : `${t} => ${t}`, this.tokens.tokens[e].isAsyncOperation && (n = `async ${n}`), this.tokens.matches2(r.TokenType.questionDot, r.TokenType.parenL) || this.tokens.matches2(r.TokenType.questionDot, r.TokenType.lessThan)) this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${n}`);
                else if (this.tokens.matches2(r.TokenType.questionDot, r.TokenType.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}`);
                else if (this.tokens.matches1(r.TokenType.questionDot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}.`);
                else if (this.tokens.matches1(r.TokenType.dot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}.`);
                else if (this.tokens.matches1(r.TokenType.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}[`);
                else {
                    if (!this.tokens.matches1(r.TokenType.parenL)) throw new Error("Unexpected subscript operator in optional chain.");
                    this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${n}(`)
                }
                return !0
            }
            return !1
        }
        isLastSubscriptInChain() {
            let e = 0;
            for (let t = this.tokens.currentIndex() + 1;; t++) {
                if (t >= this.tokens.tokens.length) throw new Error("Reached the end of the code while finding the end of the access chain.");
                if (this.tokens.tokens[t].isOptionalChainStart ? e++ : this.tokens.tokens[t].isOptionalChainEnd && e--, e < 0) return !0;
                if (0 === e && null != this.tokens.tokens[t].subscriptStartIndex) return !1
            }
        }
        justSkippedSuper() {
            let e = 0,
                t = this.tokens.currentIndex() - 1;
            for (;;) {
                if (t < 0) throw new Error("Reached the start of the code while finding the start of the access chain.");
                if (this.tokens.tokens[t].isOptionalChainStart ? e-- : this.tokens.tokens[t].isOptionalChainEnd && e++, e < 0) return !1;
                if (0 === e && null != this.tokens.tokens[t].subscriptStartIndex) return this.tokens.tokens[t - 1].type === r.TokenType._super;
                t--
            }
        }
        constructor(e, t) {
            super(), this.tokens = e, this.nameManager = t
        }
    }
})), n.register("cP5HA", (function(e, o) {
    t(e.exports, "default", (function() {
        return i
    }));
    var r = n("9OJHt"),
        s = n("31VH2"),
        a = n("d2hew");
    class i extends a.default {
        process() {
            const e = this.tokens.currentIndex();
            if ("createReactClass" === this.tokens.identifierName()) {
                const t = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
                return t ? this.tokens.replaceToken(`(0, ${t})`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(e), !0
            }
            if (this.tokens.matches3(s.TokenType.name, s.TokenType.dot, s.TokenType.name) && "React" === this.tokens.identifierName() && "createClass" === this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2)) {
                const t = this.importProcessor && this.importProcessor.getIdentifierReplacement("React") || "React";
                return t ? (this.tokens.replaceToken(t), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(e), !0
            }
            return !1
        }
        tryProcessCreateClassCall(e) {
            const t = this.findDisplayName(e);
            t && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(s.TokenType.parenL), this.tokens.copyExpectedToken(s.TokenType.braceL), this.tokens.appendCode(`displayName: '${t}',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(s.TokenType.braceR), this.tokens.copyExpectedToken(s.TokenType.parenR))
        }
        findDisplayName(e) {
            return e < 2 ? null : this.tokens.matches2AtIndex(e - 2, s.TokenType.name, s.TokenType.eq) || e >= 2 && this.tokens.tokens[e - 2].identifierRole === r.IdentifierRole.ObjectKey ? this.tokens.identifierNameAtIndex(e - 2) : this.tokens.matches2AtIndex(e - 2, s.TokenType._export, s.TokenType._default) ? this.getDisplayNameFromFilename() : null
        }
        getDisplayNameFromFilename() {
            const e = (this.options.filePath || "unknown").split("/"),
                t = e[e.length - 1],
                n = t.lastIndexOf("."),
                o = -1 === n ? t : t.slice(0, n);
            return "index" === o && e[e.length - 2] ? e[e.length - 2] : o
        }
        classNeedsDisplayName() {
            let e = this.tokens.currentIndex();
            if (!this.tokens.matches2(s.TokenType.parenL, s.TokenType.braceL)) return !1;
            const t = e + 1,
                n = this.tokens.tokens[t].contextId;
            if (null == n) throw new Error("Expected non-null context ID on object open-brace.");
            for (; e < this.tokens.tokens.length; e++) {
                const t = this.tokens.tokens[e];
                if (t.type === s.TokenType.braceR && t.contextId === n) {
                    e++;
                    break
                }
                if ("displayName" === this.tokens.identifierNameAtIndex(e) && this.tokens.tokens[e].identifierRole === r.IdentifierRole.ObjectKey && t.contextId === n) return !1
            }
            if (e === this.tokens.tokens.length) throw new Error("Unexpected end of input when processing React class.");
            return this.tokens.matches1AtIndex(e, s.TokenType.parenR) || this.tokens.matches2AtIndex(e, s.TokenType.comma, s.TokenType.parenR)
        }
        constructor(e, t, n, o) {
            super(), this.rootTransformer = e, this.tokens = t, this.importProcessor = n, this.options = o
        }
    }
})), n.register("bCrj4", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("9OJHt"),
        s = n("d2hew");
    class a extends s.default {
        __init() {
            this.extractedDefaultExportName = null
        }
        setExtractedDefaultExportName(e) {
            this.extractedDefaultExportName = e
        }
        getPrefixCode() {
            return "\n      (function () {\n        var enterModule = require('react-hot-loader').enterModule;\n        enterModule && enterModule(module);\n      })();".replace(/\s+/g, " ").trim()
        }
        getSuffixCode() {
            const e = new Set;
            for (const t of this.tokens.tokens) !t.isType && (0, r.isTopLevelDeclaration)(t) && t.identifierRole !== r.IdentifierRole.ImportDeclaration && e.add(this.tokens.identifierNameForToken(t));
            const t = Array.from(e).map((e => ({
                variableName: e,
                uniqueLocalName: e
            })));
            return this.extractedDefaultExportName && t.push({
                variableName: this.extractedDefaultExportName,
                uniqueLocalName: "default"
            }), `\n;(function () {\n  var reactHotLoader = require('react-hot-loader').default;\n  var leaveModule = require('react-hot-loader').leaveModule;\n  if (!reactHotLoader) {\n    return;\n  }\n${t.map((({variableName:e,uniqueLocalName:t})=>`
            reactHotLoader.register($ {
                e
            }, "${t}", $ {
                JSON.stringify(this.filePath || "")
            });
            `)).join("\n")}\n  leaveModule(module);\n})();`
        }
        process() {
            return !1
        }
        constructor(e, t) {
            super(), this.tokens = e, this.filePath = t, a.prototype.__init.call(this)
        }
    }
})), n.register("4Yq2e", (function(e, o) {
    t(e.exports, "default", (function() {
        return i
    }));
    var r = n("31VH2"),
        s = n("lu232"),
        a = n("d2hew");
    class i extends a.default {
        process() {
            return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(r.TokenType._public) || this.tokens.matches1(r.TokenType._protected) || this.tokens.matches1(r.TokenType._private) || this.tokens.matches1(r.TokenType._abstract) || this.tokens.matches1(r.TokenType._readonly) || this.tokens.matches1(r.TokenType._override) || this.tokens.matches1(r.TokenType.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(r.TokenType._enum) || this.tokens.matches2(r.TokenType._const, r.TokenType._enum) ? (this.processEnum(), !0) : !(!this.tokens.matches2(r.TokenType._export, r.TokenType._enum) && !this.tokens.matches3(r.TokenType._export, r.TokenType._const, r.TokenType._enum)) && (this.processEnum(!0), !0))
        }
        processEnum(e = !1) {
            for (this.tokens.removeInitialToken(); this.tokens.matches1(r.TokenType._const) || this.tokens.matches1(r.TokenType._enum);) this.tokens.removeToken();
            const t = this.tokens.identifierName();
            this.tokens.removeToken(), e && !this.isImportsTransformEnabled && this.tokens.appendCode("export "), this.tokens.appendCode(`var ${t}; (function (${t})`), this.tokens.copyExpectedToken(r.TokenType.braceL), this.processEnumBody(t), this.tokens.copyExpectedToken(r.TokenType.braceR), e && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${t} || (exports.${t} = ${t} = {}));`) : this.tokens.appendCode(`)(${t} || (${t} = {}));`)
        }
        processEnumBody(e) {
            let t = null;
            for (; !this.tokens.matches1(r.TokenType.braceR);) {
                const {
                    nameStringCode: n,
                    variableName: o
                } = this.extractEnumKeyInfo(this.tokens.currentToken());
                this.tokens.removeInitialToken(), this.tokens.matches3(r.TokenType.eq, r.TokenType.string, r.TokenType.comma) || this.tokens.matches3(r.TokenType.eq, r.TokenType.string, r.TokenType.braceR) ? this.processStringLiteralEnumMember(e, n, o) : this.tokens.matches1(r.TokenType.eq) ? this.processExplicitValueEnumMember(e, n, o) : this.processImplicitValueEnumMember(e, n, o, t), this.tokens.matches1(r.TokenType.comma) && this.tokens.removeToken(), t = null != o ? o : `${e}[${n}]`
            }
        }
        extractEnumKeyInfo(e) {
            if (e.type === r.TokenType.name) {
                const t = this.tokens.identifierNameForToken(e);
                return {
                    nameStringCode: `"${t}"`,
                    variableName: (0, s.default)(t) ? t : null
                }
            }
            if (e.type === r.TokenType.string) {
                const t = this.tokens.stringValueForToken(e);
                return {
                    nameStringCode: this.tokens.code.slice(e.start, e.end),
                    variableName: (0, s.default)(t) ? t : null
                }
            }
            throw new Error("Expected name or string at beginning of enum element.")
        }
        processStringLiteralEnumMember(e, t, n) {
            null != n ? (this.tokens.appendCode(`const ${n}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${e}[${t}] = ${n};`)) : (this.tokens.appendCode(`${e}[${t}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";"))
        }
        processExplicitValueEnumMember(e, t, n) {
            const o = this.tokens.currentToken().rhsEndIndex;
            if (null == o) throw new Error("Expected rhsEndIndex on enum assign.");
            if (null != n) {
                for (this.tokens.appendCode(`const ${n}`), this.tokens.copyToken(); this.tokens.currentIndex() < o;) this.rootTransformer.processToken();
                this.tokens.appendCode(`; ${e}[${e}[${t}] = ${n}] = ${t};`)
            } else {
                for (this.tokens.appendCode(`${e}[${e}[${t}]`), this.tokens.copyToken(); this.tokens.currentIndex() < o;) this.rootTransformer.processToken();
                this.tokens.appendCode(`] = ${t};`)
            }
        }
        processImplicitValueEnumMember(e, t, n, o) {
            let r = null != o ? `${o} + 1` : "0";
            null != n && (this.tokens.appendCode(`const ${n} = ${r}; `), r = n), this.tokens.appendCode(`${e}[${e}[${t}] = ${r}] = ${t};`)
        }
        constructor(e, t, n) {
            super(), this.rootTransformer = e, this.tokens = t, this.isImportsTransformEnabled = n
        }
    }
})), n.register("lu232", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("kwcE7");
    const s = new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "await", "false", "null", "true"]);

    function a(e) {
        if (0 === e.length) return !1;
        if (!r.IS_IDENTIFIER_START[e.charCodeAt(0)]) return !1;
        for (let t = 1; t < e.length; t++)
            if (!r.IS_IDENTIFIER_CHAR[e.charCodeAt(t)]) return !1;
        return !s.has(e)
    }
})), n.register("7halY", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("f7iQ7"),
        s = n("31VH2");

    function a(e, t) {
        if (0 === t.length) return "";
        const n = Object.keys(t[0]).filter((e => "type" !== e && "value" !== e && "start" !== e && "end" !== e && "loc" !== e)),
            o = Object.keys(t[0].type).filter((e => "label" !== e && "keyword" !== e)),
            a = ["Location", "Label", "Raw", ...n, ...o],
            c = new(0, r.default)(e),
            p = [a, ...t.map((function(t) {
                const r = e.slice(t.start, t.end);
                return [(a = t.start, c = t.end, `${h(a)}-${h(c)}`), (0, s.formatTokenType)(t.type), i(String(r), 14), ...n.map((e => u(t[e], e))), ...o.map((e => u(t.type[e], e)))];
                var a, c
            }))],
            l = a.map((() => 0));
        for (const e of p)
            for (let t = 0; t < e.length; t++) l[t] = Math.max(l[t], e[t].length);
        return p.map((e => e.map(((e, t) => e.padEnd(l[t]))).join(" "))).join("\n");

        function u(e, t) {
            return !0 === e ? t : !1 === e || null === e ? "" : String(e)
        }

        function h(e) {
            const t = c.locationForIndex(e);
            return t ? `${t.line+1}:${t.column+1}` : "Unknown"
        }
    }

    function i(e, t) {
        return e.length > t ? `${e.slice(0,t-3)}...` : e
    }
})), n.register("f7iQ7", (function(e, n) {
    var o;
    t(e.exports, "default", (function() {
        return o
    }), (function(e) {
        return o = e
    }));
    var r = "\n",
        s = function() {
            function e(e) {
                this.string = e;
                for (var t = [0], n = 0; n < e.length;) switch (e[n]) {
                    case r:
                        n += r.length, t.push(n);
                        break;
                    case "\r":
                        e[n += "\r".length] === r && (n += r.length), t.push(n);
                        break;
                    default:
                        n++
                }
                this.offsets = t
            }
            return e.prototype.locationForIndex = function(e) {
                if (e < 0 || e > this.string.length) return null;
                for (var t = 0, n = this.offsets; n[t + 1] <= e;) t++;
                return {
                    line: t,
                    column: e - n[t]
                }
            }, e.prototype.indexForLocation = function(e) {
                var t = e.line,
                    n = e.column;
                return t < 0 || t >= this.offsets.length || n < 0 || n > this.lengthOfLine(t) ? null : this.offsets[t] + n
            }, e.prototype.lengthOfLine = function(e) {
                var t = this.offsets[e];
                return (e === this.offsets.length - 1 ? this.string.length : this.offsets[e + 1]) - t
            }, e
        }();
    o = s
})), n.register("h1kwt", (function(e, o) {
    t(e.exports, "default", (function() {
        return a
    }));
    var r = n("31VH2"),
        s = n("2eIOH");

    function a(e) {
        const t = new Set;
        for (let n = 0; n < e.tokens.length; n++) e.matches1AtIndex(n, r.TokenType._import) && !e.matches3AtIndex(n, r.TokenType._import, r.TokenType.name, r.TokenType.eq) && i(e, n, t);
        return t
    }

    function i(e, t, n) {
        t++, e.matches1AtIndex(t, r.TokenType.parenL) || (e.matches1AtIndex(t, r.TokenType.name) && (n.add(e.identifierNameAtIndex(t)), t++, e.matches1AtIndex(t, r.TokenType.comma) && t++), e.matches1AtIndex(t, r.TokenType.star) && (t += 2, n.add(e.identifierNameAtIndex(t)), t++), e.matches1AtIndex(t, r.TokenType.braceL) && function(e, t, n) {
            for (;;) {
                if (e.matches1AtIndex(t, r.TokenType.braceR)) return;
                const o = (0, s.default)(e, t);
                if (t = o.endIndex, o.isType || n.add(o.rightName), e.matches2AtIndex(t, r.TokenType.comma, r.TokenType.braceR)) return;
                if (e.matches1AtIndex(t, r.TokenType.braceR)) return;
                if (!e.matches1AtIndex(t, r.TokenType.comma)) throw new Error(`Unexpected token: ${JSON.stringify(e.tokens[t])}`);
                t++
            }
        }(e, ++t, n))
    }
})), n.register("dz4Fv", (function(e, o) {
    t(e.exports, "CallAction", (function() {
        return a
    }));
    var r = n("iRjsB"),
        s = n("gwuwo");
    const a = (e = "") => {
        var t, n;
        const o = null === (t = r.default.me.deviceUI.current) || void 0 === t ? void 0 : t.deviceId;
        if (!o) return;
        const a = (0, s.default)().worldManager.devices.getDeviceById(o);
        a && (null === (n = a.callAction) || void 0 === n || n.call(a, e))
    }
})), n.register("lb1cB", (function(o, r) {
    t(o.exports, "usePropertyValue", (function() {
        return c
    }));
    var s = n("iRjsB"),
        a = n("4MuSt"),
        i = n("fywoC");
    const c = t => {
        var n;
        const [o, r] = e(i).useState(null !== (n = s.default.me.properties.get(t)) && void 0 !== n ? n : "");
        return (0, i.useEffect)((() => (0, a.reaction)((() => s.default.me.properties.get(t)), (e => {
            r(e + "")
        }))), [t]), o
    }
})), n.register("9hy6K", (function(o, r) {
    t(o.exports, "useItemAmount", (function() {
        return c
    }));
    var s = n("iRjsB"),
        a = n("4MuSt"),
        i = n("fywoC");
    const c = t => {
        var n, o;
        const [r, c] = e(i).useState(null !== (o = null === (n = s.default.me.inventory.slots.get(t)) || void 0 === n ? void 0 : n.amount) && void 0 !== o ? o : 0);
        return (0, i.useEffect)((() => {
            const e = (0, a.reaction)((() => {
                var e;
                return null === (e = s.default.me.inventory.slots.get(t)) || void 0 === e ? void 0 : e.amount
            }), (e => {
                c(e)
            }));
            return e
        }), [t]), r
    }
}));