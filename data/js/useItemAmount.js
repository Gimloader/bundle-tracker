import {
    r as fe,
    av as Jt,
    j as Oe,
    x as jt,
    dO as Hs
} from "./_index.js";
import {
    s as Ct,
    a as Ra
} from "./FixSpinePlugin.js";

function Gs(e) {
    var n, r, o = "";
    if (typeof e == "string" || typeof e == "number") o += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (n = 0; n < a; n++) e[n] && (r = Gs(e[n])) && (o && (o += " "), o += r)
        } else
            for (r in e) e[r] && (o && (o += " "), o += r);
    return o
}

function Vs() {
    for (var e, n, r = 0, o = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (n = Gs(e)) && (o && (o += " "), o += n);
    return o
}
var Pa = Object.create,
    pn = Object.defineProperty,
    La = Object.defineProperties,
    Fa = Object.getOwnPropertyDescriptor,
    Da = Object.getOwnPropertyDescriptors,
    Ws = Object.getOwnPropertyNames,
    Qt = Object.getOwnPropertySymbols,
    Oa = Object.getPrototypeOf,
    Lr = Object.prototype.hasOwnProperty,
    Xs = Object.prototype.propertyIsEnumerable,
    ls = (e, n, r) => n in e ? pn(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[n] = r,
    Ve = (e, n) => {
        for (var r in n || (n = {})) Lr.call(n, r) && ls(e, r, n[r]);
        if (Qt)
            for (var r of Qt(n)) Xs.call(n, r) && ls(e, r, n[r]);
        return e
    },
    fn = (e, n) => La(e, Da(n)),
    Zs = (e, n) => {
        var r = {};
        for (var o in e) Lr.call(e, o) && n.indexOf(o) < 0 && (r[o] = e[o]);
        if (e != null && Qt)
            for (var o of Qt(e)) n.indexOf(o) < 0 && Xs.call(e, o) && (r[o] = e[o]);
        return r
    },
    ja = (e, n) => function() {
        return n || (0, e[Ws(e)[0]])((n = {
            exports: {}
        }).exports, n), n.exports
    },
    Ba = (e, n) => {
        for (var r in n) pn(e, r, {
            get: n[r],
            enumerable: !0
        })
    },
    $a = (e, n, r, o) => {
        if (n && typeof n == "object" || typeof n == "function")
            for (let a of Ws(n)) !Lr.call(e, a) && a !== r && pn(e, a, {
                get: () => n[a],
                enumerable: !(o = Fa(n, a)) || o.enumerable
            });
        return e
    },
    Ma = (e, n, r) => (r = e != null ? Pa(Oa(e)) : {}, $a(!e || !e.__esModule ? pn(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e)),
    qa = ja({
        "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, n) {
            var r = function() {
                var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                    a = 0,
                    i = {},
                    c = {
                        util: {
                            encode: function y(k) {
                                return k instanceof f ? new f(k.type, y(k.content), k.alias) : Array.isArray(k) ? k.map(y) : k.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                            },
                            type: function(y) {
                                return Object.prototype.toString.call(y).slice(8, -1)
                            },
                            objId: function(y) {
                                return y.__id || Object.defineProperty(y, "__id", {
                                    value: ++a
                                }), y.__id
                            },
                            clone: function y(k, w) {
                                w = w || {};
                                var C, b;
                                switch (c.util.type(k)) {
                                    case "Object":
                                        if (b = c.util.objId(k), w[b]) return w[b];
                                        C = {}, w[b] = C;
                                        for (var T in k) k.hasOwnProperty(T) && (C[T] = y(k[T], w));
                                        return C;
                                    case "Array":
                                        return b = c.util.objId(k), w[b] ? w[b] : (C = [], w[b] = C, k.forEach(function(R, B) {
                                            C[B] = y(R, w)
                                        }), C);
                                    default:
                                        return k
                                }
                            },
                            getLanguage: function(y) {
                                for (; y;) {
                                    var k = o.exec(y.className);
                                    if (k) return k[1].toLowerCase();
                                    y = y.parentElement
                                }
                                return "none"
                            },
                            setLanguage: function(y, k) {
                                y.className = y.className.replace(RegExp(o, "gi"), ""), y.classList.add("language-" + k)
                            },
                            isActive: function(y, k, w) {
                                for (var C = "no-" + k; y;) {
                                    var b = y.classList;
                                    if (b.contains(k)) return !0;
                                    if (b.contains(C)) return !1;
                                    y = y.parentElement
                                }
                                return !!w
                            }
                        },
                        languages: {
                            plain: i,
                            plaintext: i,
                            text: i,
                            txt: i,
                            extend: function(y, k) {
                                var w = c.util.clone(c.languages[y]);
                                for (var C in k) w[C] = k[C];
                                return w
                            },
                            insertBefore: function(y, k, w, C) {
                                C = C || c.languages;
                                var b = C[y],
                                    T = {};
                                for (var R in b)
                                    if (b.hasOwnProperty(R)) {
                                        if (R == k)
                                            for (var B in w) w.hasOwnProperty(B) && (T[B] = w[B]);
                                        w.hasOwnProperty(R) || (T[R] = b[R])
                                    } var Y = C[y];
                                return C[y] = T, c.languages.DFS(c.languages, function(M, K) {
                                    K === Y && M != y && (this[M] = T)
                                }), T
                            },
                            DFS: function y(k, w, C, b) {
                                b = b || {};
                                var T = c.util.objId;
                                for (var R in k)
                                    if (k.hasOwnProperty(R)) {
                                        w.call(k, R, k[R], C || R);
                                        var B = k[R],
                                            Y = c.util.type(B);
                                        Y === "Object" && !b[T(B)] ? (b[T(B)] = !0, y(B, w, null, b)) : Y === "Array" && !b[T(B)] && (b[T(B)] = !0, y(B, w, R, b))
                                    }
                            }
                        },
                        plugins: {},
                        highlight: function(y, k, w) {
                            var C = {
                                code: y,
                                grammar: k,
                                language: w
                            };
                            if (c.hooks.run("before-tokenize", C), !C.grammar) throw new Error('The language "' + C.language + '" has no grammar.');
                            return C.tokens = c.tokenize(C.code, C.grammar), c.hooks.run("after-tokenize", C), f.stringify(c.util.encode(C.tokens), C.language)
                        },
                        tokenize: function(y, k) {
                            var w = k.rest;
                            if (w) {
                                for (var C in w) k[C] = w[C];
                                delete k.rest
                            }
                            var b = new g;
                            return d(b, b.head, y), u(y, b, k, b.head, 0), N(b)
                        },
                        hooks: {
                            all: {},
                            add: function(y, k) {
                                var w = c.hooks.all;
                                w[y] = w[y] || [], w[y].push(k)
                            },
                            run: function(y, k) {
                                var w = c.hooks.all[y];
                                if (!(!w || !w.length))
                                    for (var C = 0, b; b = w[C++];) b(k)
                            }
                        },
                        Token: f
                    };

                function f(y, k, w, C) {
                    this.type = y, this.content = k, this.alias = w, this.length = (C || "").length | 0
                }
                f.stringify = function y(k, w) {
                    if (typeof k == "string") return k;
                    if (Array.isArray(k)) {
                        var C = "";
                        return k.forEach(function(Y) {
                            C += y(Y, w)
                        }), C
                    }
                    var b = {
                            type: k.type,
                            content: y(k.content, w),
                            tag: "span",
                            classes: ["token", k.type],
                            attributes: {},
                            language: w
                        },
                        T = k.alias;
                    T && (Array.isArray(T) ? Array.prototype.push.apply(b.classes, T) : b.classes.push(T)), c.hooks.run("wrap", b);
                    var R = "";
                    for (var B in b.attributes) R += " " + B + '="' + (b.attributes[B] || "").replace(/"/g, "&quot;") + '"';
                    return "<" + b.tag + ' class="' + b.classes.join(" ") + '"' + R + ">" + b.content + "</" + b.tag + ">"
                };

                function h(y, k, w, C) {
                    y.lastIndex = k;
                    var b = y.exec(w);
                    if (b && C && b[1]) {
                        var T = b[1].length;
                        b.index += T, b[0] = b[0].slice(T)
                    }
                    return b
                }

                function u(y, k, w, C, b, T) {
                    for (var R in w)
                        if (!(!w.hasOwnProperty(R) || !w[R])) {
                            var B = w[R];
                            B = Array.isArray(B) ? B : [B];
                            for (var Y = 0; Y < B.length; ++Y) {
                                if (T && T.cause == R + "," + Y) return;
                                var M = B[Y],
                                    K = M.inside,
                                    ee = !!M.lookbehind,
                                    D = !!M.greedy,
                                    z = M.alias;
                                if (D && !M.pattern.global) {
                                    var X = M.pattern.toString().match(/[imsuy]*$/)[0];
                                    M.pattern = RegExp(M.pattern.source, X + "g")
                                }
                                for (var se = M.pattern || M, oe = C.next, ge = b; oe !== k.tail && !(T && ge >= T.reach); ge += oe.value.length, oe = oe.next) {
                                    var xe = oe.value;
                                    if (k.length > y.length) return;
                                    if (!(xe instanceof f)) {
                                        var Ae = 1,
                                            Q;
                                        if (D) {
                                            if (Q = h(se, ge, y, ee), !Q || Q.index >= y.length) break;
                                            var Ie = Q.index,
                                                He = Q.index + Q[0].length,
                                                ye = ge;
                                            for (ye += oe.value.length; Ie >= ye;) oe = oe.next, ye += oe.value.length;
                                            if (ye -= oe.value.length, ge = ye, oe.value instanceof f) continue;
                                            for (var Se = oe; Se !== k.tail && (ye < He || typeof Se.value == "string"); Se = Se.next) Ae++, ye += Se.value.length;
                                            Ae--, xe = y.slice(ge, ye), Q.index -= ge
                                        } else if (Q = h(se, 0, xe, ee), !Q) continue;
                                        var Ie = Q.index,
                                            Ne = Q[0],
                                            De = xe.slice(0, Ie),
                                            E = xe.slice(Ie + Ne.length),
                                            S = ge + xe.length;
                                        T && S > T.reach && (T.reach = S);
                                        var P = oe.prev;
                                        De && (P = d(k, P, De), ge += De.length), x(k, P, Ae);
                                        var L = new f(R, K ? c.tokenize(Ne, K) : Ne, z, Ne);
                                        if (oe = d(k, P, L), E && d(k, oe, E), Ae > 1) {
                                            var O = {
                                                cause: R + "," + Y,
                                                reach: S
                                            };
                                            u(y, k, w, oe.prev, ge, O), T && O.reach > T.reach && (T.reach = O.reach)
                                        }
                                    }
                                }
                            }
                        }
                }

                function g() {
                    var y = {
                            value: null,
                            prev: null,
                            next: null
                        },
                        k = {
                            value: null,
                            prev: y,
                            next: null
                        };
                    y.next = k, this.head = y, this.tail = k, this.length = 0
                }

                function d(y, k, w) {
                    var C = k.next,
                        b = {
                            value: w,
                            prev: k,
                            next: C
                        };
                    return k.next = b, C.prev = b, y.length++, b
                }

                function x(y, k, w) {
                    for (var C = k.next, b = 0; b < w && C !== y.tail; b++) C = C.next;
                    k.next = C, C.prev = k, y.length -= b
                }

                function N(y) {
                    for (var k = [], w = y.head.next; w !== y.tail;) k.push(w.value), w = w.next;
                    return k
                }
                return c
            }();
            n.exports = r, r.default = r
        }
    }),
    A = Ma(qa());
A.languages.markup = {
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
    }, A.languages.markup.tag.inside["attr-value"].inside.entity = A.languages.markup.entity, A.languages.markup.doctype.inside["internal-subset"].inside = A.languages.markup, A.hooks.add("wrap", function(e) {
        e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), Object.defineProperty(A.languages.markup.tag, "addInlined", {
        value: function(e, o) {
            var r = {},
                r = (r["language-" + o] = {
                    pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                    lookbehind: !0,
                    inside: A.languages[o]
                }, r.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                    "included-cdata": {
                        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                        inside: r
                    }
                }),
                o = (r["language-" + o] = {
                    pattern: /[\s\S]+/,
                    inside: A.languages[o]
                }, {});
            o[e] = {
                pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                    return e
                }), "i"),
                lookbehind: !0,
                greedy: !0,
                inside: r
            }, A.languages.insertBefore("markup", "cdata", o)
        }
    }), Object.defineProperty(A.languages.markup.tag, "addAttribute", {
        value: function(e, n) {
            A.languages.markup.tag.inside["special-attr"].push({
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
                                alias: [n, "language-" + n],
                                inside: A.languages[n]
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
    }), A.languages.html = A.languages.markup, A.languages.mathml = A.languages.markup, A.languages.svg = A.languages.markup, A.languages.xml = A.languages.extend("markup", {}), A.languages.ssml = A.languages.xml, A.languages.atom = A.languages.xml, A.languages.rss = A.languages.xml,
    function(e) {
        var n = {
                pattern: /\\[\\(){}[\]^$+*?|.]/,
                alias: "escape"
            },
            r = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
            o = "(?:[^\\\\-]|" + r.source + ")",
            o = RegExp(o + "-" + o),
            a = {
                pattern: /(<|')[^<>']+(?=[>']$)/,
                lookbehind: !0,
                alias: "variable"
            };
        e.languages.regex = {
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
                        pattern: o,
                        inside: {
                            escape: r,
                            "range-punctuation": {
                                pattern: /-/,
                                alias: "operator"
                            }
                        }
                    },
                    "special-escape": n,
                    "char-set": {
                        pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
                        alias: "class-name"
                    },
                    escape: r
                }
            },
            "special-escape": n,
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
                    "group-name": a
                }
            }],
            anchor: {
                pattern: /[$^]|\\[ABbGZz]/,
                alias: "function"
            },
            escape: r,
            group: [{
                pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
                alias: "punctuation",
                inside: {
                    "group-name": a
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
        }
    }(A), A.languages.clike = {
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
    }, A.languages.javascript = A.languages.extend("clike", {
        "class-name": [A.languages.clike["class-name"], {
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
    }), A.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, A.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: A.languages.regex
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
            inside: A.languages.javascript
        }, {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: A.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: A.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: A.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), A.languages.insertBefore("javascript", "string", {
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
                        rest: A.languages.javascript
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
    }), A.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    }), A.languages.markup && (A.languages.markup.tag.addInlined("script", "javascript"), A.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), A.languages.js = A.languages.javascript, A.languages.actionscript = A.languages.extend("javascript", {
        keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
        operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
    }), A.languages.actionscript["class-name"].alias = "function", delete A.languages.actionscript.parameter, delete A.languages.actionscript["literal-property"], A.languages.markup && A.languages.insertBefore("actionscript", "string", {
        xml: {
            pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
            lookbehind: !0,
            inside: A.languages.markup
        }
    }),
    function(e) {
        var n = /#(?!\{).+/,
            r = {
                pattern: /#\{[^}]+\}/,
                alias: "variable"
            };
        e.languages.coffeescript = e.languages.extend("javascript", {
            comment: n,
            string: [{
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                greedy: !0
            }, {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: {
                    interpolation: r
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
                    comment: n,
                    interpolation: r
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
                    interpolation: r
                }
            }]
        }), e.languages.insertBefore("coffeescript", "keyword", {
            property: /(?!\d)\w+(?=\s*:(?!:))/
        }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript
    }(A),
    function(e) {
        var n = e.languages.javadoclike = {
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
        Object.defineProperty(n, "addSupport", {
            value: function(r, o) {
                (r = typeof r == "string" ? [r] : r).forEach(function(a) {
                    var i = function(d) {
                            d.inside || (d.inside = {}), d.inside.rest = o
                        },
                        c = "doc-comment";
                    if (f = e.languages[a]) {
                        var f, h = f[c];
                        if ((h = h || (f = e.languages.insertBefore(a, "comment", {
                                "doc-comment": {
                                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                    lookbehind: !0,
                                    alias: "comment"
                                }
                            }))[c]) instanceof RegExp && (h = f[c] = {
                                pattern: h
                            }), Array.isArray(h))
                            for (var u = 0, g = h.length; u < g; u++) h[u] instanceof RegExp && (h[u] = {
                                pattern: h[u]
                            }), i(h[u]);
                        else i(h)
                    }
                })
            }
        }), n.addSupport(["java", "javascript", "php"], n)
    }(A),
    function(e) {
        var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
            n = (e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
                    pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp("^" + n.source + "$"),
                            alias: "url"
                        }
                    }
                },
                selector: {
                    pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"),
                    lookbehind: !0
                },
                string: {
                    pattern: n,
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
            }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
        n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"))
    }(A),
    function(e) {
        var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            n = (e.languages.css.selector = {
                pattern: e.languages.css.selector.pattern,
                lookbehind: !0,
                inside: n = {
                    "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                    "pseudo-class": /:[-\w]+/,
                    class: /\.[-\w]+/,
                    id: /#[-\w]+/,
                    attribute: {
                        pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"),
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
                            "attr-value": [n, {
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
            }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", {
                variable: {
                    pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                    lookbehind: !0
                }
            }), {
                pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
                lookbehind: !0
            }),
            r = {
                pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                lookbehind: !0
            };
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
                    unit: n,
                    number: r,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/
                }
            }],
            entity: /\\[\da-f]{1,8}/i,
            unit: n,
            number: r
        })
    }(A),
    function(e) {
        var n = /[*&][^\s[\]{},]+/,
            r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            o = "(?:" + r.source + "(?:[ 	]+" + n.source + ")?|" + n.source + "(?:[ 	]+" + r.source + ")?)",
            a = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
            }),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

        function c(f, h) {
            h = (h || "").replace(/m/g, "") + "m";
            var u = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
                return o
            }).replace(/<<value>>/g, function() {
                return f
            });
            return RegExp(u, h)
        }
        e.languages.yaml = {
            scalar: {
                pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
                    return o
                })),
                lookbehind: !0,
                alias: "string"
            },
            comment: /#.*/,
            key: {
                pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
                    return o
                }).replace(/<<key>>/g, function() {
                    return "(?:" + a + "|" + i + ")"
                })),
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
                pattern: c(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                lookbehind: !0,
                alias: "number"
            },
            boolean: {
                pattern: c(/false|true/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            null: {
                pattern: c(/null|~/.source, "i"),
                lookbehind: !0,
                alias: "important"
            },
            string: {
                pattern: c(i),
                lookbehind: !0,
                greedy: !0
            },
            number: {
                pattern: c(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                lookbehind: !0
            },
            tag: r,
            important: n,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        }, e.languages.yml = e.languages.yaml
    }(A),
    function(e) {
        var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

        function r(u) {
            return u = u.replace(/<inner>/g, function() {
                return n
            }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + u + ")")
        }
        var o = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
                return o
            }),
            i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
            c = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
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
                    pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
                    inside: {
                        "table-data-rows": {
                            pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
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
                            pattern: RegExp("^(" + a + ")" + i + "$"),
                            lookbehind: !0,
                            inside: {
                                punctuation: /\||:?-{3,}:?/
                            }
                        },
                        "table-header-row": {
                            pattern: RegExp("^" + a + "$"),
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
                    pattern: r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
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
                    pattern: r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
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
                    pattern: r(/(~~?)(?:(?!~)<inner>)+\2/.source),
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
                    pattern: r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
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
            }), ["url", "bold", "italic", "strike"].forEach(function(u) {
                ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(g) {
                    u !== g && (e.languages.markdown[u].inside.content.inside[g] = e.languages.markdown[g])
                })
            }), e.hooks.add("after-tokenize", function(u) {
                u.language !== "markdown" && u.language !== "md" || function g(d) {
                    if (d && typeof d != "string")
                        for (var x = 0, N = d.length; x < N; x++) {
                            var y, k = d[x];
                            k.type !== "code" ? g(k.content) : (y = k.content[1], k = k.content[3], y && k && y.type === "code-language" && k.type === "code-block" && typeof y.content == "string" && (y = y.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), y = "language-" + (y = (/[a-z][\w-]*/i.exec(y) || [""])[0].toLowerCase()), k.alias ? typeof k.alias == "string" ? k.alias = [k.alias, y] : k.alias.push(y) : k.alias = [y]))
                        }
                }(u.tokens)
            }), e.hooks.add("wrap", function(u) {
                if (u.type === "code-block") {
                    for (var g = "", d = 0, x = u.classes.length; d < x; d++) {
                        var N = u.classes[d],
                            N = /language-(.+)/.exec(N);
                        if (N) {
                            g = N[1];
                            break
                        }
                    }
                    var y, k = e.languages[g];
                    k ? u.content = e.highlight(function(w) {
                        return w = w.replace(c, ""), w = w.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(C, b) {
                            var T;
                            return (b = b.toLowerCase())[0] === "#" ? (T = b[1] === "x" ? parseInt(b.slice(2), 16) : Number(b.slice(1)), h(T)) : f[b] || C
                        })
                    }(u.content), k, g) : g && g !== "none" && e.plugins.autoloader && (y = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random()), u.attributes.id = y, e.plugins.autoloader.loadLanguages(g, function() {
                        var w = document.getElementById(y);
                        w && (w.innerHTML = e.highlight(w.textContent, e.languages[g], g))
                    }))
                }
            }), RegExp(e.languages.markup.tag.pattern.source, "gi")),
            f = {
                amp: "&",
                lt: "<",
                gt: ">",
                quot: '"'
            },
            h = String.fromCodePoint || String.fromCharCode;
        e.languages.md = e.languages.markdown
    }(A), A.languages.graphql = {
        comment: /#.*/,
        description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
                "language-markdown": {
                    pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: A.languages.markdown
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
    }, A.hooks.add("after-tokenize", function(e) {
        if (e.language === "graphql")
            for (var n = e.tokens.filter(function(y) {
                    return typeof y != "string" && y.type !== "comment" && y.type !== "scalar"
                }), r = 0; r < n.length;) {
                var o = n[r++];
                if (o.type === "keyword" && o.content === "mutation") {
                    var a = [];
                    if (d(["definition-mutation", "punctuation"]) && g(1).content === "(") {
                        r += 2;
                        var i = x(/^\($/, /^\)$/);
                        if (i === -1) continue;
                        for (; r < i; r++) {
                            var c = g(0);
                            c.type === "variable" && (N(c, "variable-input"), a.push(c.content))
                        }
                        r = i + 1
                    }
                    if (d(["punctuation", "property-query"]) && g(0).content === "{" && (r++, N(g(0), "property-mutation"), 0 < a.length)) {
                        var f = x(/^\{$/, /^\}$/);
                        if (f !== -1)
                            for (var h = r; h < f; h++) {
                                var u = n[h];
                                u.type === "variable" && 0 <= a.indexOf(u.content) && N(u, "variable-input")
                            }
                    }
                }
            }

        function g(y) {
            return n[r + y]
        }

        function d(y, k) {
            k = k || 0;
            for (var w = 0; w < y.length; w++) {
                var C = g(w + k);
                if (!C || C.type !== y[w]) return
            }
            return 1
        }

        function x(y, k) {
            for (var w = 1, C = r; C < n.length; C++) {
                var b = n[C],
                    T = b.content;
                if (b.type === "punctuation" && typeof T == "string") {
                    if (y.test(T)) w++;
                    else if (k.test(T) && --w === 0) return C
                }
            }
            return -1
        }

        function N(y, k) {
            var w = y.alias;
            w ? Array.isArray(w) || (y.alias = w = [w]) : y.alias = w = [], w.push(k)
        }
    }), A.languages.sql = {
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
        var n = e.languages.javascript["template-string"],
            r = n.pattern.source,
            o = n.inside.interpolation,
            a = o.inside["interpolation-punctuation"],
            i = o.pattern.source;

        function c(d, x) {
            if (e.languages[d]) return {
                pattern: RegExp("((?:" + x + ")\\s*)" + r),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "template-punctuation": {
                        pattern: /^`|`$/,
                        alias: "string"
                    },
                    "embedded-code": {
                        pattern: /[\s\S]+/,
                        alias: d
                    }
                }
            }
        }

        function f(d, x, N) {
            return d = {
                code: d,
                grammar: x,
                language: N
            }, e.hooks.run("before-tokenize", d), d.tokens = e.tokenize(d.code, d.grammar), e.hooks.run("after-tokenize", d), d.tokens
        }

        function h(d, x, N) {
            var w = e.tokenize(d, {
                    interpolation: {
                        pattern: RegExp(i),
                        lookbehind: !0
                    }
                }),
                y = 0,
                k = {},
                w = f(w.map(function(b) {
                    if (typeof b == "string") return b;
                    for (var T, R, b = b.content; d.indexOf((R = y++, T = "___" + N.toUpperCase() + "_" + R + "___")) !== -1;);
                    return k[T] = b, T
                }).join(""), x, N),
                C = Object.keys(k);
            return y = 0,
                function b(T) {
                    for (var R = 0; R < T.length; R++) {
                        if (y >= C.length) return;
                        var B, Y, M, K, ee, D, z, X = T[R];
                        typeof X == "string" || typeof X.content == "string" ? (B = C[y], (z = (D = typeof X == "string" ? X : X.content).indexOf(B)) !== -1 && (++y, Y = D.substring(0, z), ee = k[B], M = void 0, (K = {})["interpolation-punctuation"] = a, (K = e.tokenize(ee, K)).length === 3 && ((M = [1, 1]).push.apply(M, f(K[1], e.languages.javascript, "javascript")), K.splice.apply(K, M)), M = new e.Token("interpolation", K, o.alias, ee), K = D.substring(z + B.length), ee = [], Y && ee.push(Y), ee.push(M), K && (b(D = [K]), ee.push.apply(ee, D)), typeof X == "string" ? (T.splice.apply(T, [R, 1].concat(ee)), R += ee.length - 1) : X.content = ee)) : (z = X.content, Array.isArray(z) ? b(z) : b([z]))
                    }
                }(w), new e.Token(N, w, "language-" + N, d)
        }
        e.languages.javascript["template-string"] = [c("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), c("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), c("svg", /\bsvg/.source), c("markdown", /\b(?:markdown|md)/.source), c("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), c("sql", /\bsql/.source), n].filter(Boolean);
        var u = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0
        };

        function g(d) {
            return typeof d == "string" ? d : Array.isArray(d) ? d.map(g).join("") : g(d.content)
        }
        e.hooks.add("after-tokenize", function(d) {
            d.language in u && function x(N) {
                for (var y = 0, k = N.length; y < k; y++) {
                    var w, C, b, T = N[y];
                    typeof T != "string" && (w = T.content, Array.isArray(w) ? T.type === "template-string" ? (T = w[1], w.length === 3 && typeof T != "string" && T.type === "embedded-code" && (C = g(T), T = T.alias, T = Array.isArray(T) ? T[0] : T, b = e.languages[T]) && (w[1] = h(C, b, T))) : x(w) : typeof w != "string" && x([w]))
                }
            }(d.tokens)
        })
    }(A),
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
        var n = e.languages.extend("typescript", {});
        delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", {
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
                        inside: n
                    }
                }
            }
        }), e.languages.ts = e.languages.typescript
    }(A),
    function(e) {
        var n = e.languages.javascript,
            r = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
            o = "(@(?:arg|argument|param|property)\\s+(?:" + r + "\\s+)?)";
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
                        inside: n,
                        alias: "language-javascript"
                    },
                    punctuation: /[=[\]]/
                }
            },
            "class-name": [{
                pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
                    return r
                })),
                lookbehind: !0,
                inside: {
                    punctuation: /\./
                }
            }, {
                pattern: RegExp("(@[a-z]+\\s+)" + r),
                lookbehind: !0,
                inside: {
                    string: n.string,
                    number: n.number,
                    boolean: n.boolean,
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
                        inside: n,
                        alias: "language-javascript"
                    }
                }
            }
        }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
    }(A),
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
    }(A), A.languages.n4js = A.languages.extend("javascript", {
        keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
    }), A.languages.insertBefore("n4js", "constant", {
        annotation: {
            pattern: /@+\w+/,
            alias: "operator"
        }
    }), A.languages.n4jsd = A.languages.n4js,
    function(e) {
        function n(c, f) {
            return RegExp(c.replace(/<ID>/g, function() {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
            }), f)
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
                pattern: n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                lookbehind: !0,
                inside: e.languages.javascript
            },
            exports: {
                pattern: n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
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
                pattern: n(/(\.\s*)#?<ID>/.source),
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
        for (var r = ["function", "function-variable", "method", "method-variable", "property-access"], o = 0; o < r.length; o++) {
            var i = r[o],
                a = e.languages.javascript[i],
                i = (a = e.util.type(a) === "RegExp" ? e.languages.javascript[i] = {
                    pattern: a
                } : a).inside || {};
            (a.inside = i)["maybe-class-name"] = /^[A-Z][\s\S]*/
        }
    }(A),
    function(e) {
        var n = e.util.clone(e.languages.javascript),
            r = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

        function i(h, u) {
            return h = h.replace(/<S>/g, function() {
                return r
            }).replace(/<BRACES>/g, function() {
                return o
            }).replace(/<SPREAD>/g, function() {
                return a
            }), RegExp(h, u)
        }
        a = i(a).source, e.languages.jsx = e.languages.extend("markup", n), e.languages.jsx.tag.pattern = i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = n.comment, e.languages.insertBefore("inside", "attr-name", {
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

        function c(h) {
            for (var u = [], g = 0; g < h.length; g++) {
                var d = h[g],
                    x = !1;
                typeof d != "string" && (d.type === "tag" && d.content[0] && d.content[0].type === "tag" ? d.content[0].content[0].content === "</" ? 0 < u.length && u[u.length - 1].tagName === f(d.content[0].content[1]) && u.pop() : d.content[d.content.length - 1].content !== "/>" && u.push({
                    tagName: f(d.content[0].content[1]),
                    openedBraces: 0
                }) : 0 < u.length && d.type === "punctuation" && d.content === "{" ? u[u.length - 1].openedBraces++ : 0 < u.length && 0 < u[u.length - 1].openedBraces && d.type === "punctuation" && d.content === "}" ? u[u.length - 1].openedBraces-- : x = !0), (x || typeof d == "string") && 0 < u.length && u[u.length - 1].openedBraces === 0 && (x = f(d), g < h.length - 1 && (typeof h[g + 1] == "string" || h[g + 1].type === "plain-text") && (x += f(h[g + 1]), h.splice(g + 1, 1)), 0 < g && (typeof h[g - 1] == "string" || h[g - 1].type === "plain-text") && (x = f(h[g - 1]) + x, h.splice(g - 1, 1), g--), h[g] = new e.Token("plain-text", x, null, x)), d.content && typeof d.content != "string" && c(d.content)
            }
        }
        var f = function(h) {
            return h ? typeof h == "string" ? h : typeof h.content == "string" ? h.content : h.content.map(f).join("") : ""
        };
        e.hooks.add("after-tokenize", function(h) {
            h.language !== "jsx" && h.language !== "tsx" || c(h.tokens)
        })
    }(A),
    function(e) {
        var n = e.util.clone(e.languages.typescript),
            n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
        n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0
    }(A), A.languages.swift = {
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
            pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"),
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
    }, A.languages.swift["string-literal"].forEach(function(e) {
        e.inside.interpolation.inside = A.languages.swift
    }),
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
        var n = {
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
                        inside: n
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
                        inside: n
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
    }(A), A.languages.c = A.languages.extend("clike", {
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
    }), A.languages.insertBefore("c", "string", {
        char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0
        }
    }), A.languages.insertBefore("c", "string", {
        macro: {
            pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
                string: [{
                    pattern: /^(#\s*include\s*)<[^>]+>/,
                    lookbehind: !0
                }, A.languages.c.string],
                char: A.languages.c.char,
                comment: A.languages.c.comment,
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
                    inside: A.languages.c
                }
            }
        }
    }), A.languages.insertBefore("c", "function", {
        constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
    }), delete A.languages.c.boolean, A.languages.objectivec = A.languages.extend("c", {
        string: {
            pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0
        },
        keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
        operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
    }), delete A.languages.objectivec["class-name"], A.languages.objc = A.languages.objectivec, A.languages.reason = A.languages.extend("clike", {
        string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0
        },
        "class-name": /\b[A-Z]\w*/,
        keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
        operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
    }), A.languages.insertBefore("reason", "class-name", {
        char: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            greedy: !0
        },
        constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
        label: {
            pattern: /\b[a-z]\w*(?=::)/,
            alias: "symbol"
        }
    }), delete A.languages.reason.function,
    function(e) {
        for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, r = 0; r < 2; r++) n = n.replace(/<self>/g, function() {
            return n
        });
        n = n.replace(/<self>/g, function() {
            return /[^\s\S]/.source
        }), e.languages.rust = {
            comment: [{
                pattern: RegExp(/(^|[^\\])/.source + n),
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
    }(A), A.languages.go = A.languages.extend("clike", {
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
    }), A.languages.insertBefore("go", "string", {
        char: {
            pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
            greedy: !0
        }
    }), delete A.languages.go["class-name"],
    function(e) {
        var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            r = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
                return n.source
            });
        e.languages.cpp = e.languages.extend("c", {
            "class-name": [{
                pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
                    return n.source
                })),
                lookbehind: !0
            }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
            keyword: n,
            number: {
                pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                greedy: !0
            },
            operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/
        }), e.languages.insertBefore("cpp", "string", {
            module: {
                pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
                    return r
                }) + ")"),
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
    }(A), A.languages.python = {
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
    }, A.languages.python["string-interpolation"].inside.interpolation.inside.rest = A.languages.python, A.languages.py = A.languages.python, A.languages.json = {
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
    }, A.languages.webmanifest = A.languages.json;
var Ys = {};
Ba(Ys, {
    dracula: () => za,
    duotoneDark: () => Ga,
    duotoneLight: () => Wa,
    github: () => Za,
    gruvboxMaterialDark: () => Ii,
    gruvboxMaterialLight: () => Ti,
    jettwaveDark: () => gi,
    jettwaveLight: () => ki,
    nightOwl: () => Ka,
    nightOwlLight: () => Qa,
    oceanicNext: () => ti,
    okaidia: () => ri,
    oneDark: () => _i,
    oneLight: () => wi,
    palenight: () => oi,
    shadesOfPurple: () => ii,
    synthwave84: () => ci,
    ultramin: () => pi,
    vsDark: () => Ks,
    vsLight: () => di
});
var Ua = {
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
    za = Ua,
    Ha = {
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
    Ga = Ha,
    Va = {
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
    Wa = Va,
    Xa = {
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
    Za = Xa,
    Ya = {
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
    Ka = Ya,
    Ja = {
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
    Qa = Ja,
    Pe = {
        char: "#D8DEE9",
        comment: "#999999",
        keyword: "#c5a5c5",
        primitive: "#5a9bcf",
        string: "#8dc891",
        variable: "#d7deea",
        boolean: "#ff8b50",
        tag: "#fc929e",
        function: "#79b6f2",
        className: "#FAC863"
    },
    ei = {
        plain: {
            backgroundColor: "#282c34",
            color: "#ffffff"
        },
        styles: [{
            types: ["attr-name"],
            style: {
                color: Pe.keyword
            }
        }, {
            types: ["attr-value"],
            style: {
                color: Pe.string
            }
        }, {
            types: ["comment", "block-comment", "prolog", "doctype", "cdata", "shebang"],
            style: {
                color: Pe.comment
            }
        }, {
            types: ["property", "number", "function-name", "constant", "symbol", "deleted"],
            style: {
                color: Pe.primitive
            }
        }, {
            types: ["boolean"],
            style: {
                color: Pe.boolean
            }
        }, {
            types: ["tag"],
            style: {
                color: Pe.tag
            }
        }, {
            types: ["string"],
            style: {
                color: Pe.string
            }
        }, {
            types: ["punctuation"],
            style: {
                color: Pe.string
            }
        }, {
            types: ["selector", "char", "builtin", "inserted"],
            style: {
                color: Pe.char
            }
        }, {
            types: ["function"],
            style: {
                color: Pe.function
            }
        }, {
            types: ["operator", "entity", "url", "variable"],
            style: {
                color: Pe.variable
            }
        }, {
            types: ["keyword"],
            style: {
                color: Pe.keyword
            }
        }, {
            types: ["atrule", "class-name"],
            style: {
                color: Pe.className
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
    ti = ei,
    ni = {
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
    ri = ni,
    si = {
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
    oi = si,
    ai = {
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
    ii = ai,
    li = {
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
    ci = li,
    ui = {
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
    pi = ui,
    fi = {
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
    Ks = fi,
    hi = {
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
    di = hi,
    mi = {
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
    gi = mi,
    yi = {
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
    ki = yi,
    bi = {
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
    _i = bi,
    xi = {
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
    wi = xi,
    vi = {
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
    Ii = vi,
    Ei = {
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
    Ti = Ei,
    Ai = e => fe.useCallback(n => {
        var r = n,
            {
                className: o,
                style: a,
                line: i
            } = r,
            c = Zs(r, ["className", "style", "line"]);
        const f = fn(Ve({}, c), {
            className: Vs("token-line", o)
        });
        return typeof e == "object" && "plain" in e && (f.style = e.plain), typeof a == "object" && (f.style = Ve(Ve({}, f.style || {}), a)), f
    }, [e]),
    Si = e => {
        const n = fe.useCallback(({
            types: r,
            empty: o
        }) => {
            if (e != null) {
                {
                    if (r.length === 1 && r[0] === "plain") return o != null ? {
                        display: "inline-block"
                    } : void 0;
                    if (r.length === 1 && o != null) return e[r[0]]
                }
                return Object.assign(o != null ? {
                    display: "inline-block"
                } : {}, ...r.map(a => e[a]))
            }
        }, [e]);
        return fe.useCallback(r => {
            var o = r,
                {
                    token: a,
                    className: i,
                    style: c
                } = o,
                f = Zs(o, ["token", "className", "style"]);
            const h = fn(Ve({}, f), {
                className: Vs("token", ...a.types, i),
                children: a.content,
                style: n(a)
            });
            return c != null && (h.style = Ve(Ve({}, h.style || {}), c)), h
        }, [n])
    },
    Ni = /\r\n|\r|\n/,
    cs = e => {
        e.length === 0 ? e.push({
            types: ["plain"],
            content: `
`,
            empty: !0
        }) : e.length === 1 && e[0].content === "" && (e[0].content = `
`, e[0].empty = !0)
    },
    us = (e, n) => {
        const r = e.length;
        return r > 0 && e[r - 1] === n ? e : e.concat(n)
    },
    Ci = e => {
        const n = [
                []
            ],
            r = [e],
            o = [0],
            a = [e.length];
        let i = 0,
            c = 0,
            f = [];
        const h = [f];
        for (; c > -1;) {
            for (;
                (i = o[c]++) < a[c];) {
                let u, g = n[c];
                const x = r[c][i];
                if (typeof x == "string" ? (g = c > 0 ? g : ["plain"], u = x) : (g = us(g, x.type), x.alias && (g = us(g, x.alias)), u = x.content), typeof u != "string") {
                    c++, n.push(g), r.push(u), o.push(0), a.push(u.length);
                    continue
                }
                const N = u.split(Ni),
                    y = N.length;
                f.push({
                    types: g,
                    content: N[0]
                });
                for (let k = 1; k < y; k++) cs(f), h.push(f = []), f.push({
                    types: g,
                    content: N[k]
                })
            }
            c--, n.pop(), r.pop(), o.pop(), a.pop()
        }
        return cs(f), h
    },
    ps = Ci,
    Ri = ({
        prism: e,
        code: n,
        grammar: r,
        language: o
    }) => fe.useMemo(() => {
        if (r == null) return ps([n]);
        const a = {
            code: n,
            grammar: r,
            language: o,
            tokens: []
        };
        return e.hooks.run("before-tokenize", a), a.tokens = e.tokenize(n, r), e.hooks.run("after-tokenize", a), ps(a.tokens)
    }, [n, r, o, e]),
    Pi = (e, n) => {
        const {
            plain: r
        } = e, o = e.styles.reduce((a, i) => {
            const {
                languages: c,
                style: f
            } = i;
            return c && !c.includes(n) || i.types.forEach(h => {
                const u = Ve(Ve({}, a[h]), f);
                a[h] = u
            }), a
        }, {});
        return o.root = r, o.plain = fn(Ve({}, r), {
            backgroundColor: void 0
        }), o
    },
    Li = Pi,
    Fi = ({
        children: e,
        language: n,
        code: r,
        theme: o,
        prism: a
    }) => {
        const i = n.toLowerCase(),
            c = Li(o, i),
            f = Ai(c),
            h = Si(c),
            u = a.languages[i],
            g = Ri({
                prism: a,
                language: i,
                code: r,
                grammar: u
            });
        return e({
            tokens: g,
            className: `prism-code language-${i}`,
            style: c != null ? c.root : {},
            getLineProps: f,
            getTokenProps: h
        })
    },
    Di = e => fe.createElement(Fi, fn(Ve({}, e), {
        prism: e.prism || A,
        theme: e.theme || Ks,
        code: e.code,
        language: e.language
    }));
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
var Oi = {
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
};

function Ht(e) {
    var n = window.getSelection();
    n.empty(), n.addRange(e)
}

function fs(e) {
    return (e.metaKey || e.ctrlKey) && !e.altKey && e.code === "KeyZ"
}

function dt(e) {
    e = [e.firstChild];
    for (var n, r = ""; n = e.pop();) n.nodeType === Node.TEXT_NODE ? r += n.textContent : n.nodeType === Node.ELEMENT_NODE && n.nodeName === "BR" && (r += `
`), n.nextSibling && e.push(n.nextSibling), n.firstChild && e.push(n.firstChild);
    return r[r.length - 1] !== `
` && (r += `
`), r
}

function Ye(e) {
    var n = window.getSelection().getRangeAt(0),
        r = n.collapsed ? 0 : n.toString().length,
        o = document.createRange();
    return o.setStart(e, 0), o.setEnd(n.startContainer, n.startOffset), {
        position: e = (o = o.toString()).length,
        extent: r,
        content: o = (o = o.split(`
`))[n = o.length - 1],
        line: n
    }
}

function wt(e, n, r) {
    0 >= n && (n = 0), (!r || 0 > r) && (r = n);
    var o = document.createRange();
    e = [e.firstChild];
    for (var a, i = 0, c = n; a = e[e.length - 1];) {
        if (a.nodeType === Node.TEXT_NODE) {
            if (i + a.textContent.length >= c) {
                var f = c - i;
                if (c === n)
                    if (c = o, f < a.textContent.length ? c.setStart(a, f) : c.setStartAfter(a), r !== n) {
                        c = r;
                        continue
                    } else break;
                else {
                    n = o, f < (r = a).textContent.length ? n.setEnd(r, f) : n.setEndAfter(r);
                    break
                }
            }
            i += a.textContent.length
        } else if (a.nodeType === Node.ELEMENT_NODE && a.nodeName === "BR") {
            if (i + 1 >= c)
                if (c === n)
                    if (f = o, 0 < a.textContent.length ? f.setStart(a, 0) : f.setStartAfter(a), r !== n) {
                        c = r;
                        continue
                    } else break;
            else {
                n = o, 0 < (r = a).textContent.length ? n.setEnd(r, 0) : n.setEndAfter(r);
                break
            }
            i++
        }
        e.pop(), a.nextSibling && e.push(a.nextSibling), a.firstChild && e.push(a.firstChild)
    }
    return o
}

function ji(e, n, r) {
    function o(d) {
        var x = e.current;
        if (x) {
            var N = Ye(x);
            x = dt(x), N.position += d.length - x.length, u.position = N, u.onChange(d, N)
        }
    }

    function a(d, x) {
        var N = e.current;
        if (N) {
            var y = window.getSelection().getRangeAt(0);
            y.deleteContents(), y.collapse();
            var k = x || 0;
            (y = wt(N, x = (y = Ye(N)).position + (0 > k ? k : 0), y.position + (0 < k ? k : 0))).deleteContents(), d && y.insertNode(document.createTextNode(d)), Ht(wt(N, x + d.length))
        }
    }

    function i(d) {
        var x = e.current;
        if (x) {
            x.focus();
            var N = 0;
            if (typeof d == "number") N = d;
            else {
                var y = dt(x).split(`
`).slice(0, d.row);
                d.row && (N += y.join(`
`).length + 1), N += d.column
            }
            Ht(wt(x, N))
        }
    }

    function c() {
        var d = e.current;
        return {
            text: dt(d),
            position: d = Ye(d)
        }
    }

    function f() {
        u.observer.disconnect()
    }
    r || (r = {});
    var h = fe.useState([])[1],
        u = fe.useState(function() {
            var d = {
                observer: null,
                disconnected: !1,
                onChange: n,
                queue: [],
                history: [],
                historyAt: -1,
                position: null
            };
            return typeof MutationObserver < "u" && (d.observer = new MutationObserver(function(x) {
                var N;
                (N = d.queue).push.apply(N, x)
            })), d
        })[0],
        g = fe.useMemo(function() {
            return {
                update: o,
                insert: a,
                move: i,
                getState: c
            }
        }, []);
    return typeof navigator != "object" || (fe.useLayoutEffect(function() {
        if (u.onChange = n, e.current && !r.disabled) {
            if (u.disconnected = !1, u.observer.observe(e.current, Oi), u.position) {
                var d = u.position,
                    x = d.position;
                Ht(wt(e.current, x, x + d.extent))
            }
            return f
        }
    }), fe.useLayoutEffect(function() {
        if (!e.current || r.disabled) u.history.length = 0, u.historyAt = -1;
        else {
            var d = e.current;
            if (u.position) {
                d.focus();
                var x = u.position,
                    N = x.position;
                Ht(wt(d, N, N + x.extent))
            }
            var y = d.style.whiteSpace,
                k = d.contentEditable,
                w = !0;
            try {
                d.contentEditable = "plaintext-only"
            } catch {
                d.contentEditable = "true", w = !1
            }
            y !== "pre" && (d.style.whiteSpace = "pre-wrap"), r.indentation && (d.style.tabSize = d.style.MozTabSize = "" + r.indentation), x = "" + " ".repeat(r.indentation || 0);
            var C, b = new RegExp("^(?:" + x + ")"),
                T = new RegExp("^(?:" + x + ")*(" + x + ")$"),
                R = function(D) {
                    if (e.current && u.position) {
                        var z = dt(d),
                            X = Ye(d),
                            se = new Date().valueOf(),
                            oe = u.history[u.historyAt];
                        !D && 500 > se - C || oe && oe[1] === z ? C = se : (D = ++u.historyAt, u.history[D] = [X, z], u.history.splice(D + 1), 500 < D && (u.historyAt--, u.history.shift()))
                    }
                },
                B = function() {
                    var D;
                    if ((D = u.queue).push.apply(D, u.observer.takeRecords()), D = Ye(d), u.queue.length) {
                        u.observer.disconnect(), u.disconnected = !0;
                        var z = dt(d);
                        u.position = D;
                        for (var X, se; X = u.queue.pop();) {
                            for (X.oldValue !== null && (X.target.textContent = X.oldValue), se = X.removedNodes.length - 1; 0 <= se; se--) X.target.insertBefore(X.removedNodes[se], X.nextSibling);
                            for (se = X.addedNodes.length - 1; 0 <= se; se--) X.addedNodes[se].parentNode && X.target.removeChild(X.addedNodes[se])
                        }
                        u.onChange(z, D)
                    }
                },
                Y = function(D) {
                    if (!D.defaultPrevented && D.target === d) {
                        if (u.disconnected) return D.preventDefault(), h([]);
                        if (fs(D)) D.preventDefault(), D.shiftKey ? (D = ++u.historyAt, (D = u.history[D]) || (u.historyAt = u.history.length - 1)) : (D = --u.historyAt, (D = u.history[D]) || (u.historyAt = 0)), D && (u.observer.disconnect(), u.disconnected = !0, u.position = D[0], u.onChange(D[1], D[0]));
                        else {
                            if (R(), D.key === "Enter") {
                                D.preventDefault();
                                var z = Ye(d),
                                    X = /\S/g.exec(z.content);
                                z = `
` + z.content.slice(0, X ? X.index : z.content.length), g.insert(z)
                            } else if ((!w || r.indentation) && D.key === "Backspace") D.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (z = Ye(d), z = T.exec(z.content), g.insert("", z ? -z[1].length : -1)) : g.insert("", 0);
                            else if (r.indentation && D.key === "Tab") {
                                D.preventDefault(), X = (z = Ye(d)).position - z.content.length;
                                var se = dt(d);
                                z = D.shiftKey ? se.slice(0, X) + z.content.replace(b, "") + se.slice(X + z.content.length) : se.slice(0, X) + (r.indentation ? " ".repeat(r.indentation) : "	") + se.slice(X), g.update(z)
                            }
                            D.repeat && B()
                        }
                    }
                },
                M = function(D) {
                    D.defaultPrevented || D.isComposing || (fs(D) || R(), B(), d.focus())
                },
                K = function(D) {
                    u.position = window.getSelection().rangeCount && D.target === d ? Ye(d) : null
                },
                ee = function(D) {
                    D.preventDefault(), R(!0), g.insert(D.clipboardData.getData("text/plain")), R(!0), B()
                };
            return document.addEventListener("selectstart", K), window.addEventListener("keydown", Y), d.addEventListener("paste", ee), d.addEventListener("keyup", M),
                function() {
                    document.removeEventListener("selectstart", K), window.removeEventListener("keydown", Y), d.removeEventListener("paste", ee), d.removeEventListener("keyup", M), d.style.whiteSpace = y, d.contentEditable = k
                }
        }
    }, [e.current, r.disabled, r.indentation])), g
}
var p;
(function(e) {
    e[e.NONE = 0] = "NONE";
    const r = 1;
    e[e._abstract = r] = "_abstract";
    const o = r + 1;
    e[e._accessor = o] = "_accessor";
    const a = o + 1;
    e[e._as = a] = "_as";
    const i = a + 1;
    e[e._assert = i] = "_assert";
    const c = i + 1;
    e[e._asserts = c] = "_asserts";
    const f = c + 1;
    e[e._async = f] = "_async";
    const h = f + 1;
    e[e._await = h] = "_await";
    const u = h + 1;
    e[e._checks = u] = "_checks";
    const g = u + 1;
    e[e._constructor = g] = "_constructor";
    const d = g + 1;
    e[e._declare = d] = "_declare";
    const x = d + 1;
    e[e._enum = x] = "_enum";
    const N = x + 1;
    e[e._exports = N] = "_exports";
    const y = N + 1;
    e[e._from = y] = "_from";
    const k = y + 1;
    e[e._get = k] = "_get";
    const w = k + 1;
    e[e._global = w] = "_global";
    const C = w + 1;
    e[e._implements = C] = "_implements";
    const b = C + 1;
    e[e._infer = b] = "_infer";
    const T = b + 1;
    e[e._interface = T] = "_interface";
    const R = T + 1;
    e[e._is = R] = "_is";
    const B = R + 1;
    e[e._keyof = B] = "_keyof";
    const Y = B + 1;
    e[e._mixins = Y] = "_mixins";
    const M = Y + 1;
    e[e._module = M] = "_module";
    const K = M + 1;
    e[e._namespace = K] = "_namespace";
    const ee = K + 1;
    e[e._of = ee] = "_of";
    const D = ee + 1;
    e[e._opaque = D] = "_opaque";
    const z = D + 1;
    e[e._out = z] = "_out";
    const X = z + 1;
    e[e._override = X] = "_override";
    const se = X + 1;
    e[e._private = se] = "_private";
    const oe = se + 1;
    e[e._protected = oe] = "_protected";
    const ge = oe + 1;
    e[e._proto = ge] = "_proto";
    const xe = ge + 1;
    e[e._public = xe] = "_public";
    const Ae = xe + 1;
    e[e._readonly = Ae] = "_readonly";
    const Q = Ae + 1;
    e[e._require = Q] = "_require";
    const He = Q + 1;
    e[e._satisfies = He] = "_satisfies";
    const ye = He + 1;
    e[e._set = ye] = "_set";
    const Se = ye + 1;
    e[e._static = Se] = "_static";
    const Ie = Se + 1;
    e[e._symbol = Ie] = "_symbol";
    const Ne = Ie + 1;
    e[e._type = Ne] = "_type";
    const De = Ne + 1;
    e[e._unique = De] = "_unique";
    const E = De + 1;
    e[e._using = E] = "_using"
})(p || (p = {}));
var t;
(function(e) {
    e[e.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK";
    const r = 16;
    e[e.IS_KEYWORD = r] = "IS_KEYWORD";
    const o = 32;
    e[e.IS_ASSIGN = o] = "IS_ASSIGN";
    const a = 64;
    e[e.IS_RIGHT_ASSOCIATIVE = a] = "IS_RIGHT_ASSOCIATIVE";
    const i = 128;
    e[e.IS_PREFIX = i] = "IS_PREFIX";
    const c = 256;
    e[e.IS_POSTFIX = c] = "IS_POSTFIX";
    const f = 512;
    e[e.IS_EXPRESSION_START = f] = "IS_EXPRESSION_START";
    const h = 512;
    e[e.num = h] = "num";
    const u = 1536;
    e[e.bigint = u] = "bigint";
    const g = 2560;
    e[e.decimal = g] = "decimal";
    const d = 3584;
    e[e.regexp = d] = "regexp";
    const x = 4608;
    e[e.string = x] = "string";
    const N = 5632;
    e[e.name = N] = "name";
    const y = 6144;
    e[e.eof = y] = "eof";
    const k = 7680;
    e[e.bracketL = k] = "bracketL";
    const w = 8192;
    e[e.bracketR = w] = "bracketR";
    const C = 9728;
    e[e.braceL = C] = "braceL";
    const b = 10752;
    e[e.braceBarL = b] = "braceBarL";
    const T = 11264;
    e[e.braceR = T] = "braceR";
    const R = 12288;
    e[e.braceBarR = R] = "braceBarR";
    const B = 13824;
    e[e.parenL = B] = "parenL";
    const Y = 14336;
    e[e.parenR = Y] = "parenR";
    const M = 15360;
    e[e.comma = M] = "comma";
    const K = 16384;
    e[e.semi = K] = "semi";
    const ee = 17408;
    e[e.colon = ee] = "colon";
    const D = 18432;
    e[e.doubleColon = D] = "doubleColon";
    const z = 19456;
    e[e.dot = z] = "dot";
    const X = 20480;
    e[e.question = X] = "question";
    const se = 21504;
    e[e.questionDot = se] = "questionDot";
    const oe = 22528;
    e[e.arrow = oe] = "arrow";
    const ge = 23552;
    e[e.template = ge] = "template";
    const xe = 24576;
    e[e.ellipsis = xe] = "ellipsis";
    const Ae = 25600;
    e[e.backQuote = Ae] = "backQuote";
    const Q = 27136;
    e[e.dollarBraceL = Q] = "dollarBraceL";
    const He = 27648;
    e[e.at = He] = "at";
    const ye = 29184;
    e[e.hash = ye] = "hash";
    const Se = 29728;
    e[e.eq = Se] = "eq";
    const Ie = 30752;
    e[e.assign = Ie] = "assign";
    const Ne = 32640;
    e[e.preIncDec = Ne] = "preIncDec";
    const De = 33664;
    e[e.postIncDec = De] = "postIncDec";
    const E = 34432;
    e[e.bang = E] = "bang";
    const S = 35456;
    e[e.tilde = S] = "tilde";
    const P = 35841;
    e[e.pipeline = P] = "pipeline";
    const L = 36866;
    e[e.nullishCoalescing = L] = "nullishCoalescing";
    const O = 37890;
    e[e.logicalOR = O] = "logicalOR";
    const U = 38915;
    e[e.logicalAND = U] = "logicalAND";
    const H = 39940;
    e[e.bitwiseOR = H] = "bitwiseOR";
    const te = 40965;
    e[e.bitwiseXOR = te] = "bitwiseXOR";
    const ce = 41990;
    e[e.bitwiseAND = ce] = "bitwiseAND";
    const ie = 43015;
    e[e.equality = ie] = "equality";
    const ke = 44040;
    e[e.lessThan = ke] = "lessThan";
    const Ce = 45064;
    e[e.greaterThan = Ce] = "greaterThan";
    const he = 46088;
    e[e.relationalOrEqual = he] = "relationalOrEqual";
    const we = 47113;
    e[e.bitShiftL = we] = "bitShiftL";
    const ve = 48137;
    e[e.bitShiftR = ve] = "bitShiftR";
    const rt = 49802;
    e[e.plus = rt] = "plus";
    const ht = 50826;
    e[e.minus = ht] = "minus";
    const xt = 51723;
    e[e.modulo = xt] = "modulo";
    const wn = 52235;
    e[e.star = wn] = "star";
    const vn = 53259;
    e[e.slash = vn] = "slash";
    const In = 54348;
    e[e.exponent = In] = "exponent";
    const En = 55296;
    e[e.jsxName = En] = "jsxName";
    const Tn = 56320;
    e[e.jsxText = Tn] = "jsxText";
    const An = 57344;
    e[e.jsxEmptyText = An] = "jsxEmptyText";
    const Sn = 58880;
    e[e.jsxTagStart = Sn] = "jsxTagStart";
    const Nn = 59392;
    e[e.jsxTagEnd = Nn] = "jsxTagEnd";
    const Cn = 60928;
    e[e.typeParameterStart = Cn] = "typeParameterStart";
    const Rn = 61440;
    e[e.nonNullAssertion = Rn] = "nonNullAssertion";
    const Pn = 62480;
    e[e._break = Pn] = "_break";
    const Ln = 63504;
    e[e._case = Ln] = "_case";
    const Fn = 64528;
    e[e._catch = Fn] = "_catch";
    const Dn = 65552;
    e[e._continue = Dn] = "_continue";
    const On = 66576;
    e[e._debugger = On] = "_debugger";
    const jn = 67600;
    e[e._default = jn] = "_default";
    const Bn = 68624;
    e[e._do = Bn] = "_do";
    const $n = 69648;
    e[e._else = $n] = "_else";
    const Mn = 70672;
    e[e._finally = Mn] = "_finally";
    const qn = 71696;
    e[e._for = qn] = "_for";
    const Un = 73232;
    e[e._function = Un] = "_function";
    const zn = 73744;
    e[e._if = zn] = "_if";
    const Hn = 74768;
    e[e._return = Hn] = "_return";
    const Gn = 75792;
    e[e._switch = Gn] = "_switch";
    const Vn = 77456;
    e[e._throw = Vn] = "_throw";
    const Wn = 77840;
    e[e._try = Wn] = "_try";
    const Xn = 78864;
    e[e._var = Xn] = "_var";
    const Zn = 79888;
    e[e._let = Zn] = "_let";
    const Yn = 80912;
    e[e._const = Yn] = "_const";
    const Kn = 81936;
    e[e._while = Kn] = "_while";
    const Jn = 82960;
    e[e._with = Jn] = "_with";
    const Qn = 84496;
    e[e._new = Qn] = "_new";
    const er = 85520;
    e[e._this = er] = "_this";
    const tr = 86544;
    e[e._super = tr] = "_super";
    const nr = 87568;
    e[e._class = nr] = "_class";
    const rr = 88080;
    e[e._extends = rr] = "_extends";
    const sr = 89104;
    e[e._export = sr] = "_export";
    const or = 90640;
    e[e._import = or] = "_import";
    const ar = 91664;
    e[e._yield = ar] = "_yield";
    const ir = 92688;
    e[e._null = ir] = "_null";
    const lr = 93712;
    e[e._true = lr] = "_true";
    const cr = 94736;
    e[e._false = cr] = "_false";
    const ur = 95256;
    e[e._in = ur] = "_in";
    const pr = 96280;
    e[e._instanceof = pr] = "_instanceof";
    const fr = 97936;
    e[e._typeof = fr] = "_typeof";
    const hr = 98960;
    e[e._void = hr] = "_void";
    const ma = 99984;
    e[e._delete = ma] = "_delete";
    const ga = 100880;
    e[e._async = ga] = "_async";
    const ya = 101904;
    e[e._get = ya] = "_get";
    const ka = 102928;
    e[e._set = ka] = "_set";
    const ba = 103952;
    e[e._declare = ba] = "_declare";
    const _a = 104976;
    e[e._readonly = _a] = "_readonly";
    const xa = 106e3;
    e[e._abstract = xa] = "_abstract";
    const wa = 107024;
    e[e._static = wa] = "_static";
    const va = 107536;
    e[e._public = va] = "_public";
    const Ia = 108560;
    e[e._private = Ia] = "_private";
    const Ea = 109584;
    e[e._protected = Ea] = "_protected";
    const Ta = 110608;
    e[e._override = Ta] = "_override";
    const Aa = 112144;
    e[e._as = Aa] = "_as";
    const Sa = 113168;
    e[e._enum = Sa] = "_enum";
    const Na = 114192;
    e[e._type = Na] = "_type";
    const Ca = 115216;
    e[e._implements = Ca] = "_implements"
})(t || (t = {}));

function Bi(e) {
    switch (e) {
        case t.num:
            return "num";
        case t.bigint:
            return "bigint";
        case t.decimal:
            return "decimal";
        case t.regexp:
            return "regexp";
        case t.string:
            return "string";
        case t.name:
            return "name";
        case t.eof:
            return "eof";
        case t.bracketL:
            return "[";
        case t.bracketR:
            return "]";
        case t.braceL:
            return "{";
        case t.braceBarL:
            return "{|";
        case t.braceR:
            return "}";
        case t.braceBarR:
            return "|}";
        case t.parenL:
            return "(";
        case t.parenR:
            return ")";
        case t.comma:
            return ",";
        case t.semi:
            return ";";
        case t.colon:
            return ":";
        case t.doubleColon:
            return "::";
        case t.dot:
            return ".";
        case t.question:
            return "?";
        case t.questionDot:
            return "?.";
        case t.arrow:
            return "=>";
        case t.template:
            return "template";
        case t.ellipsis:
            return "...";
        case t.backQuote:
            return "`";
        case t.dollarBraceL:
            return "${";
        case t.at:
            return "@";
        case t.hash:
            return "#";
        case t.eq:
            return "=";
        case t.assign:
            return "_=";
        case t.preIncDec:
            return "++/--";
        case t.postIncDec:
            return "++/--";
        case t.bang:
            return "!";
        case t.tilde:
            return "~";
        case t.pipeline:
            return "|>";
        case t.nullishCoalescing:
            return "??";
        case t.logicalOR:
            return "||";
        case t.logicalAND:
            return "&&";
        case t.bitwiseOR:
            return "|";
        case t.bitwiseXOR:
            return "^";
        case t.bitwiseAND:
            return "&";
        case t.equality:
            return "==/!=";
        case t.lessThan:
            return "<";
        case t.greaterThan:
            return ">";
        case t.relationalOrEqual:
            return "<=/>=";
        case t.bitShiftL:
            return "<<";
        case t.bitShiftR:
            return ">>/>>>";
        case t.plus:
            return "+";
        case t.minus:
            return "-";
        case t.modulo:
            return "%";
        case t.star:
            return "*";
        case t.slash:
            return "/";
        case t.exponent:
            return "**";
        case t.jsxName:
            return "jsxName";
        case t.jsxText:
            return "jsxText";
        case t.jsxEmptyText:
            return "jsxEmptyText";
        case t.jsxTagStart:
            return "jsxTagStart";
        case t.jsxTagEnd:
            return "jsxTagEnd";
        case t.typeParameterStart:
            return "typeParameterStart";
        case t.nonNullAssertion:
            return "nonNullAssertion";
        case t._break:
            return "break";
        case t._case:
            return "case";
        case t._catch:
            return "catch";
        case t._continue:
            return "continue";
        case t._debugger:
            return "debugger";
        case t._default:
            return "default";
        case t._do:
            return "do";
        case t._else:
            return "else";
        case t._finally:
            return "finally";
        case t._for:
            return "for";
        case t._function:
            return "function";
        case t._if:
            return "if";
        case t._return:
            return "return";
        case t._switch:
            return "switch";
        case t._throw:
            return "throw";
        case t._try:
            return "try";
        case t._var:
            return "var";
        case t._let:
            return "let";
        case t._const:
            return "const";
        case t._while:
            return "while";
        case t._with:
            return "with";
        case t._new:
            return "new";
        case t._this:
            return "this";
        case t._super:
            return "super";
        case t._class:
            return "class";
        case t._extends:
            return "extends";
        case t._export:
            return "export";
        case t._import:
            return "import";
        case t._yield:
            return "yield";
        case t._null:
            return "null";
        case t._true:
            return "true";
        case t._false:
            return "false";
        case t._in:
            return "in";
        case t._instanceof:
            return "instanceof";
        case t._typeof:
            return "typeof";
        case t._void:
            return "void";
        case t._delete:
            return "delete";
        case t._async:
            return "async";
        case t._get:
            return "get";
        case t._set:
            return "set";
        case t._declare:
            return "declare";
        case t._readonly:
            return "readonly";
        case t._abstract:
            return "abstract";
        case t._static:
            return "static";
        case t._public:
            return "public";
        case t._private:
            return "private";
        case t._protected:
            return "protected";
        case t._override:
            return "override";
        case t._as:
            return "as";
        case t._enum:
            return "enum";
        case t._type:
            return "type";
        case t._implements:
            return "implements";
        default:
            return ""
    }
}
class Xe {
    constructor(n, r, o) {
        this.startTokenIndex = n, this.endTokenIndex = r, this.isFunctionScope = o
    }
}
class $i {
    constructor(n, r, o, a, i, c, f, h, u, g, d, x, N) {
        this.potentialArrowAt = n, this.noAnonFunctionType = r, this.inDisallowConditionalTypesContext = o, this.tokensLength = a, this.scopesLength = i, this.pos = c, this.type = f, this.contextualKeyword = h, this.start = u, this.end = g, this.isType = d, this.scopeDepth = x, this.error = N
    }
}
class Ee {
    constructor() {
        Ee.prototype.__init.call(this), Ee.prototype.__init2.call(this), Ee.prototype.__init3.call(this), Ee.prototype.__init4.call(this), Ee.prototype.__init5.call(this), Ee.prototype.__init6.call(this), Ee.prototype.__init7.call(this), Ee.prototype.__init8.call(this), Ee.prototype.__init9.call(this), Ee.prototype.__init10.call(this), Ee.prototype.__init11.call(this), Ee.prototype.__init12.call(this), Ee.prototype.__init13.call(this)
    }
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
        this.type = t.eof
    }
    __init8() {
        this.contextualKeyword = p.NONE
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
        return new $i(this.potentialArrowAt, this.noAnonFunctionType, this.inDisallowConditionalTypesContext, this.tokens.length, this.scopes.length, this.pos, this.type, this.contextualKeyword, this.start, this.end, this.isType, this.scopeDepth, this.error)
    }
    restoreFromSnapshot(n) {
        this.potentialArrowAt = n.potentialArrowAt, this.noAnonFunctionType = n.noAnonFunctionType, this.inDisallowConditionalTypesContext = n.inDisallowConditionalTypesContext, this.tokens.length = n.tokensLength, this.scopes.length = n.scopesLength, this.pos = n.pos, this.type = n.type, this.contextualKeyword = n.contextualKeyword, this.start = n.start, this.end = n.end, this.isType = n.isType, this.scopeDepth = n.scopeDepth, this.error = n.error
    }
}
var m;
(function(e) {
    e[e.backSpace = 8] = "backSpace";
    const r = 10;
    e[e.lineFeed = r] = "lineFeed";
    const o = 9;
    e[e.tab = o] = "tab";
    const a = 13;
    e[e.carriageReturn = a] = "carriageReturn";
    const i = 14;
    e[e.shiftOut = i] = "shiftOut";
    const c = 32;
    e[e.space = c] = "space";
    const f = 33;
    e[e.exclamationMark = f] = "exclamationMark";
    const h = 34;
    e[e.quotationMark = h] = "quotationMark";
    const u = 35;
    e[e.numberSign = u] = "numberSign";
    const g = 36;
    e[e.dollarSign = g] = "dollarSign";
    const d = 37;
    e[e.percentSign = d] = "percentSign";
    const x = 38;
    e[e.ampersand = x] = "ampersand";
    const N = 39;
    e[e.apostrophe = N] = "apostrophe";
    const y = 40;
    e[e.leftParenthesis = y] = "leftParenthesis";
    const k = 41;
    e[e.rightParenthesis = k] = "rightParenthesis";
    const w = 42;
    e[e.asterisk = w] = "asterisk";
    const C = 43;
    e[e.plusSign = C] = "plusSign";
    const b = 44;
    e[e.comma = b] = "comma";
    const T = 45;
    e[e.dash = T] = "dash";
    const R = 46;
    e[e.dot = R] = "dot";
    const B = 47;
    e[e.slash = B] = "slash";
    const Y = 48;
    e[e.digit0 = Y] = "digit0";
    const M = 49;
    e[e.digit1 = M] = "digit1";
    const K = 50;
    e[e.digit2 = K] = "digit2";
    const ee = 51;
    e[e.digit3 = ee] = "digit3";
    const D = 52;
    e[e.digit4 = D] = "digit4";
    const z = 53;
    e[e.digit5 = z] = "digit5";
    const X = 54;
    e[e.digit6 = X] = "digit6";
    const se = 55;
    e[e.digit7 = se] = "digit7";
    const oe = 56;
    e[e.digit8 = oe] = "digit8";
    const ge = 57;
    e[e.digit9 = ge] = "digit9";
    const xe = 58;
    e[e.colon = xe] = "colon";
    const Ae = 59;
    e[e.semicolon = Ae] = "semicolon";
    const Q = 60;
    e[e.lessThan = Q] = "lessThan";
    const He = 61;
    e[e.equalsTo = He] = "equalsTo";
    const ye = 62;
    e[e.greaterThan = ye] = "greaterThan";
    const Se = 63;
    e[e.questionMark = Se] = "questionMark";
    const Ie = 64;
    e[e.atSign = Ie] = "atSign";
    const Ne = 65;
    e[e.uppercaseA = Ne] = "uppercaseA";
    const De = 66;
    e[e.uppercaseB = De] = "uppercaseB";
    const E = 67;
    e[e.uppercaseC = E] = "uppercaseC";
    const S = 68;
    e[e.uppercaseD = S] = "uppercaseD";
    const P = 69;
    e[e.uppercaseE = P] = "uppercaseE";
    const L = 70;
    e[e.uppercaseF = L] = "uppercaseF";
    const O = 71;
    e[e.uppercaseG = O] = "uppercaseG";
    const U = 72;
    e[e.uppercaseH = U] = "uppercaseH";
    const H = 73;
    e[e.uppercaseI = H] = "uppercaseI";
    const te = 74;
    e[e.uppercaseJ = te] = "uppercaseJ";
    const ce = 75;
    e[e.uppercaseK = ce] = "uppercaseK";
    const ie = 76;
    e[e.uppercaseL = ie] = "uppercaseL";
    const ke = 77;
    e[e.uppercaseM = ke] = "uppercaseM";
    const Ce = 78;
    e[e.uppercaseN = Ce] = "uppercaseN";
    const he = 79;
    e[e.uppercaseO = he] = "uppercaseO";
    const we = 80;
    e[e.uppercaseP = we] = "uppercaseP";
    const ve = 81;
    e[e.uppercaseQ = ve] = "uppercaseQ";
    const rt = 82;
    e[e.uppercaseR = rt] = "uppercaseR";
    const ht = 83;
    e[e.uppercaseS = ht] = "uppercaseS";
    const xt = 84;
    e[e.uppercaseT = xt] = "uppercaseT";
    const wn = 85;
    e[e.uppercaseU = wn] = "uppercaseU";
    const vn = 86;
    e[e.uppercaseV = vn] = "uppercaseV";
    const In = 87;
    e[e.uppercaseW = In] = "uppercaseW";
    const En = 88;
    e[e.uppercaseX = En] = "uppercaseX";
    const Tn = 89;
    e[e.uppercaseY = Tn] = "uppercaseY";
    const An = 90;
    e[e.uppercaseZ = An] = "uppercaseZ";
    const Sn = 91;
    e[e.leftSquareBracket = Sn] = "leftSquareBracket";
    const Nn = 92;
    e[e.backslash = Nn] = "backslash";
    const Cn = 93;
    e[e.rightSquareBracket = Cn] = "rightSquareBracket";
    const Rn = 94;
    e[e.caret = Rn] = "caret";
    const Pn = 95;
    e[e.underscore = Pn] = "underscore";
    const Ln = 96;
    e[e.graveAccent = Ln] = "graveAccent";
    const Fn = 97;
    e[e.lowercaseA = Fn] = "lowercaseA";
    const Dn = 98;
    e[e.lowercaseB = Dn] = "lowercaseB";
    const On = 99;
    e[e.lowercaseC = On] = "lowercaseC";
    const jn = 100;
    e[e.lowercaseD = jn] = "lowercaseD";
    const Bn = 101;
    e[e.lowercaseE = Bn] = "lowercaseE";
    const $n = 102;
    e[e.lowercaseF = $n] = "lowercaseF";
    const Mn = 103;
    e[e.lowercaseG = Mn] = "lowercaseG";
    const qn = 104;
    e[e.lowercaseH = qn] = "lowercaseH";
    const Un = 105;
    e[e.lowercaseI = Un] = "lowercaseI";
    const zn = 106;
    e[e.lowercaseJ = zn] = "lowercaseJ";
    const Hn = 107;
    e[e.lowercaseK = Hn] = "lowercaseK";
    const Gn = 108;
    e[e.lowercaseL = Gn] = "lowercaseL";
    const Vn = 109;
    e[e.lowercaseM = Vn] = "lowercaseM";
    const Wn = 110;
    e[e.lowercaseN = Wn] = "lowercaseN";
    const Xn = 111;
    e[e.lowercaseO = Xn] = "lowercaseO";
    const Zn = 112;
    e[e.lowercaseP = Zn] = "lowercaseP";
    const Yn = 113;
    e[e.lowercaseQ = Yn] = "lowercaseQ";
    const Kn = 114;
    e[e.lowercaseR = Kn] = "lowercaseR";
    const Jn = 115;
    e[e.lowercaseS = Jn] = "lowercaseS";
    const Qn = 116;
    e[e.lowercaseT = Qn] = "lowercaseT";
    const er = 117;
    e[e.lowercaseU = er] = "lowercaseU";
    const tr = 118;
    e[e.lowercaseV = tr] = "lowercaseV";
    const nr = 119;
    e[e.lowercaseW = nr] = "lowercaseW";
    const rr = 120;
    e[e.lowercaseX = rr] = "lowercaseX";
    const sr = 121;
    e[e.lowercaseY = sr] = "lowercaseY";
    const or = 122;
    e[e.lowercaseZ = or] = "lowercaseZ";
    const ar = 123;
    e[e.leftCurlyBrace = ar] = "leftCurlyBrace";
    const ir = 124;
    e[e.verticalBar = ir] = "verticalBar";
    const lr = 125;
    e[e.rightCurlyBrace = lr] = "rightCurlyBrace";
    const cr = 126;
    e[e.tilde = cr] = "tilde";
    const ur = 160;
    e[e.nonBreakingSpace = ur] = "nonBreakingSpace";
    const pr = 5760;
    e[e.oghamSpaceMark = pr] = "oghamSpaceMark";
    const fr = 8232;
    e[e.lineSeparator = fr] = "lineSeparator";
    const hr = 8233;
    e[e.paragraphSeparator = hr] = "paragraphSeparator"
})(m || (m = {}));
let hn, J, ne, s, F, Js;

function Rt() {
    return Js++
}

function Mi(e) {
    if ("pos" in e) {
        const n = Ui(e.pos);
        e.message += ` (${n.line}:${n.column})`, e.loc = n
    }
    return e
}
class qi {
    constructor(n, r) {
        this.line = n, this.column = r
    }
}

function Ui(e) {
    let n = 1,
        r = 1;
    for (let o = 0; o < e; o++) F.charCodeAt(o) === m.lineFeed ? (n++, r = 1) : r++;
    return new qi(n, r)
}

function zi(e, n, r, o) {
    F = e, s = new Ee, Js = 1, hn = n, J = r, ne = o
}

function j(e) {
    return s.contextualKeyword === e
}

function Fr(e) {
    const n = $t();
    return n.type === t.name && n.contextualKeyword === e
}

function me(e) {
    return s.contextualKeyword === e && _(t.name)
}

function de(e) {
    me(e) || V()
}

function Le() {
    return l(t.eof) || l(t.braceR) || Te()
}

function Te() {
    const e = s.tokens[s.tokens.length - 1],
        n = e ? e.end : 0;
    for (let r = n; r < s.start; r++) {
        const o = F.charCodeAt(r);
        if (o === m.lineFeed || o === m.carriageReturn || o === 8232 || o === 8233) return !0
    }
    return !1
}

function Qs() {
    const e = Dr();
    for (let n = s.end; n < e; n++) {
        const r = F.charCodeAt(n);
        if (r === m.lineFeed || r === m.carriageReturn || r === 8232 || r === 8233) return !0
    }
    return !1
}

function Ge() {
    return _(t.semi) || Le()
}

function le() {
    Ge() || V('Unexpected token, expected ";"')
}

function v(e) {
    _(e) || V(`Unexpected token, expected "${Bi(e)}"`)
}

function V(e = "Unexpected token", n = s.start) {
    if (s.error) return;
    const r = new SyntaxError(e);
    r.pos = n, s.error = r, s.pos = F.length, G(t.eof)
}
const eo = [9, 11, 12, m.space, m.nonBreakingSpace, m.oghamSpaceMark, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
    hs = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
    to = new Uint8Array(65536);
for (const e of eo) to[e] = 1;

function Hi(e) {
    if (e < 48) return e === 36;
    if (e < 58) return !0;
    if (e < 65) return !1;
    if (e < 91) return !0;
    if (e < 97) return e === 95;
    if (e < 123) return !0;
    if (e < 128) return !1;
    throw new Error("Should not be called with non-ASCII char code.")
}
const qe = new Uint8Array(65536);
for (let e = 0; e < 128; e++) qe[e] = Hi(e) ? 1 : 0;
for (let e = 128; e < 65536; e++) qe[e] = 1;
for (const e of eo) qe[e] = 0;
qe[8232] = 0;
qe[8233] = 0;
const Bt = qe.slice();
for (let e = m.digit0; e <= m.digit9; e++) Bt[e] = 0;
const ds = new Int32Array([-1, 27, 783, 918, 1755, 2376, 2862, 3483, -1, 3699, -1, 4617, 4752, 4833, 5130, 5508, 5940, -1, 6480, 6939, 7749, 8181, 8451, 8613, -1, 8829, -1, -1, -1, 54, 243, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 432, -1, -1, -1, 675, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 81, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 108, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 135, -1, -1, -1, -1, -1, -1, -1, -1, -1, 162, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 189, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 216, -1, -1, -1, -1, -1, -1, p._abstract << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 270, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 297, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 324, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 351, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 378, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 405, -1, -1, -1, -1, -1, -1, -1, -1, p._accessor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._as << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 459, -1, -1, -1, -1, -1, 594, -1, -1, -1, -1, -1, -1, 486, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 513, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 540, -1, -1, -1, -1, -1, -1, p._assert << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 567, -1, -1, -1, -1, -1, -1, -1, p._asserts << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 621, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 648, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._async << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 702, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 729, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 756, -1, -1, -1, -1, -1, -1, p._await << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 810, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 837, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 864, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 891, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._break << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 945, -1, -1, -1, -1, -1, -1, 1107, -1, -1, -1, 1242, -1, -1, 1350, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 972, 1026, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 999, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._case << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1053, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1080, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._catch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1134, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1161, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1188, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1215, -1, -1, -1, -1, -1, -1, -1, p._checks << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1269, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1296, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1323, -1, -1, -1, -1, -1, -1, -1, (t._class << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1377, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1404, 1620, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1431, -1, -1, -1, -1, -1, -1, (t._const << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1458, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1485, -1, -1, -1, -1, -1, -1, -1, -1, 1512, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1539, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1566, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1593, -1, -1, -1, -1, -1, -1, -1, -1, p._constructor << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1647, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1674, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1701, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1728, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._continue << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1782, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2349, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1809, 1971, -1, -1, 2106, -1, -1, -1, -1, -1, 2241, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1836, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1863, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1890, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1917, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1944, -1, -1, -1, -1, -1, -1, -1, -1, (t._debugger << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1998, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2025, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2052, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2079, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._declare << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2133, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2160, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2187, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2214, -1, -1, -1, -1, -1, -1, (t._default << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2268, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2295, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2322, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._delete << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._do << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2403, -1, 2484, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2565, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2430, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2457, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._else << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2511, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2538, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._enum << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2592, -1, -1, -1, 2727, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2619, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2646, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2673, -1, -1, -1, -1, -1, -1, (t._export << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2700, -1, -1, -1, -1, -1, -1, -1, p._exports << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2754, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2781, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2808, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2835, -1, -1, -1, -1, -1, -1, -1, (t._extends << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2889, -1, -1, -1, -1, -1, -1, -1, 2997, -1, -1, -1, -1, -1, 3159, -1, -1, 3213, -1, -1, 3294, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2916, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2943, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2970, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._false << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3024, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3051, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3078, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3105, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3132, -1, (t._finally << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3186, -1, -1, -1, -1, -1, -1, -1, -1, (t._for << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3240, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3267, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._from << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3321, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3348, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3375, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3402, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3429, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3456, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._function << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3510, -1, -1, -1, -1, -1, -1, 3564, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3537, -1, -1, -1, -1, -1, -1, p._get << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3591, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3618, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3645, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3672, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._global << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3726, -1, -1, -1, -1, -1, -1, 3753, 4077, -1, -1, -1, -1, 4590, -1, -1, -1, -1, -1, -1, -1, (t._if << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3780, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3807, -1, -1, 3996, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3834, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3861, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3888, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3915, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3942, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3969, -1, -1, -1, -1, -1, -1, -1, p._implements << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4023, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4050, -1, -1, -1, -1, -1, -1, (t._import << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._in << 1) + 1, -1, -1, -1, -1, -1, 4104, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4185, 4401, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4131, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4158, -1, -1, -1, -1, -1, -1, -1, -1, p._infer << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4212, -1, -1, -1, -1, -1, -1, -1, 4239, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4266, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4293, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4320, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4347, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4374, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._instanceof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4428, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4455, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4482, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4509, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4536, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4563, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._interface << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._is << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4644, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4671, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4698, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4725, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._keyof << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4779, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4806, -1, -1, -1, -1, -1, -1, (t._let << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4860, -1, -1, -1, -1, -1, 4995, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4887, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4914, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4941, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4968, -1, -1, -1, -1, -1, -1, -1, p._mixins << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5022, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5049, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5076, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5103, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._module << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5157, -1, -1, -1, 5373, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5427, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5184, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5211, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5238, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5265, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5292, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5319, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5346, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._namespace << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5400, -1, -1, -1, (t._new << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5454, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5481, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._null << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5535, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5562, -1, -1, -1, -1, 5697, 5751, -1, -1, -1, -1, p._of << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5589, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5616, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5643, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5670, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._opaque << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5724, -1, -1, -1, -1, -1, -1, p._out << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5778, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5805, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5832, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5859, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5886, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5913, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._override << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5967, -1, -1, 6345, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5994, -1, -1, -1, -1, -1, 6129, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6021, -1, -1, -1, -1, -1, 6048, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6075, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6102, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._private << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6156, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6183, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6318, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6210, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6237, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6264, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6291, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._protected << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._proto << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6372, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6399, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6426, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6453, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._public << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6507, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6534, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6696, -1, -1, 6831, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6561, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6588, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6615, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6642, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6669, -1, p._readonly << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6723, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6750, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6777, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6804, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._require << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6858, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6885, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6912, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._return << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6966, -1, -1, -1, 7182, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7236, 7371, -1, 7479, -1, 7614, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6993, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7020, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7047, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7074, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7101, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7128, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7155, -1, -1, -1, -1, -1, -1, -1, p._satisfies << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7209, -1, -1, -1, -1, -1, -1, p._set << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7263, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7290, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7317, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7344, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._static << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7398, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7425, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7452, -1, -1, -1, -1, -1, -1, -1, -1, (t._super << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7506, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7533, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7560, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7587, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._switch << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7641, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7668, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7695, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7722, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._symbol << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7776, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7938, -1, -1, -1, -1, -1, -1, 8046, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7803, -1, -1, -1, -1, -1, -1, -1, -1, 7857, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7830, -1, -1, -1, -1, -1, -1, -1, (t._this << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7884, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7911, -1, -1, -1, (t._throw << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7965, -1, -1, -1, 8019, -1, -1, -1, -1, -1, -1, 7992, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._true << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._try << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8073, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._type << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8127, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8154, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._typeof << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8208, -1, -1, -1, -1, 8343, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8235, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8262, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8289, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8316, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._unique << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8370, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8397, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8424, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, p._using << 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8478, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8532, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8505, -1, -1, -1, -1, -1, -1, -1, -1, (t._var << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8559, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8586, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._void << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8640, 8748, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8667, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8694, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8721, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._while << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8775, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8802, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._with << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8856, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8883, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8910, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8937, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, (t._yield << 1) + 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);

function Gi() {
    let e = 0,
        n = 0,
        r = s.pos;
    for (; r < F.length && (n = F.charCodeAt(r), !(n < m.lowercaseA || n > m.lowercaseZ));) {
        const a = ds[e + (n - m.lowercaseA) + 1];
        if (a === -1) break;
        e = a, r++
    }
    const o = ds[e];
    if (o > -1 && !qe[n]) {
        s.pos = r, o & 1 ? G(o >>> 1) : G(t.name, o >>> 1);
        return
    }
    for (; r < F.length;) {
        const a = F.charCodeAt(r);
        if (qe[a]) r++;
        else if (a === m.backslash) {
            if (r += 2, F.charCodeAt(r) === m.leftCurlyBrace) {
                for (; r < F.length && F.charCodeAt(r) !== m.rightCurlyBrace;) r++;
                r++
            }
        } else if (a === m.atSign && F.charCodeAt(r + 1) === m.atSign) r += 2;
        else break
    }
    s.pos = r, G(t.name)
}
var $;
(function(e) {
    e[e.Access = 0] = "Access";
    const r = 1;
    e[e.ExportAccess = r] = "ExportAccess";
    const o = r + 1;
    e[e.TopLevelDeclaration = o] = "TopLevelDeclaration";
    const a = o + 1;
    e[e.FunctionScopedDeclaration = a] = "FunctionScopedDeclaration";
    const i = a + 1;
    e[e.BlockScopedDeclaration = i] = "BlockScopedDeclaration";
    const c = i + 1;
    e[e.ObjectShorthandTopLevelDeclaration = c] = "ObjectShorthandTopLevelDeclaration";
    const f = c + 1;
    e[e.ObjectShorthandFunctionScopedDeclaration = f] = "ObjectShorthandFunctionScopedDeclaration";
    const h = f + 1;
    e[e.ObjectShorthandBlockScopedDeclaration = h] = "ObjectShorthandBlockScopedDeclaration";
    const u = h + 1;
    e[e.ObjectShorthand = u] = "ObjectShorthand";
    const g = u + 1;
    e[e.ImportDeclaration = g] = "ImportDeclaration";
    const d = g + 1;
    e[e.ObjectKey = d] = "ObjectKey";
    const x = d + 1;
    e[e.ImportAccess = x] = "ImportAccess"
})($ || ($ = {}));
var Me;
(function(e) {
    e[e.NoChildren = 0] = "NoChildren";
    const r = 1;
    e[e.OneChild = r] = "OneChild";
    const o = r + 1;
    e[e.StaticChildren = o] = "StaticChildren";
    const a = o + 1;
    e[e.KeyAfterPropSpread = a] = "KeyAfterPropSpread"
})(Me || (Me = {}));

function no(e) {
    const n = e.identifierRole;
    return n === $.TopLevelDeclaration || n === $.FunctionScopedDeclaration || n === $.BlockScopedDeclaration || n === $.ObjectShorthandTopLevelDeclaration || n === $.ObjectShorthandFunctionScopedDeclaration || n === $.ObjectShorthandBlockScopedDeclaration
}

function Vi(e) {
    const n = e.identifierRole;
    return n === $.FunctionScopedDeclaration || n === $.BlockScopedDeclaration || n === $.ObjectShorthandFunctionScopedDeclaration || n === $.ObjectShorthandBlockScopedDeclaration
}

function ro(e) {
    const n = e.identifierRole;
    return n === $.TopLevelDeclaration || n === $.ObjectShorthandTopLevelDeclaration || n === $.ImportDeclaration
}

function Wi(e) {
    const n = e.identifierRole;
    return n === $.TopLevelDeclaration || n === $.BlockScopedDeclaration || n === $.ObjectShorthandTopLevelDeclaration || n === $.ObjectShorthandBlockScopedDeclaration
}

function Xi(e) {
    const n = e.identifierRole;
    return n === $.FunctionScopedDeclaration || n === $.ObjectShorthandFunctionScopedDeclaration
}

function Zi(e) {
    return e.identifierRole === $.ObjectShorthandTopLevelDeclaration || e.identifierRole === $.ObjectShorthandBlockScopedDeclaration || e.identifierRole === $.ObjectShorthandFunctionScopedDeclaration
}
class dn {
    constructor() {
        this.type = s.type, this.contextualKeyword = s.contextualKeyword, this.start = s.start, this.end = s.end, this.scopeDepth = s.scopeDepth, this.isType = s.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null
    }
}

function I() {
    s.tokens.push(new dn), io()
}

function Je() {
    s.tokens.push(new dn), s.start = s.pos, f1()
}

function Yi() {
    s.type === t.assign && --s.pos, c1()
}

function Z(e) {
    for (let r = s.tokens.length - e; r < s.tokens.length; r++) s.tokens[r].isType = !0;
    const n = s.isType;
    return s.isType = !0, n
}

function W(e) {
    s.isType = e
}

function _(e) {
    return l(e) ? (I(), !0) : !1
}

function so(e) {
    const n = s.isType;
    s.isType = !0, _(e), s.isType = n
}

function l(e) {
    return s.type === e
}

function ue() {
    const e = s.snapshot();
    I();
    const n = s.type;
    return s.restoreFromSnapshot(e), n
}
class Ki {
    constructor(n, r) {
        this.type = n, this.contextualKeyword = r
    }
}

function $t() {
    const e = s.snapshot();
    I();
    const n = s.type,
        r = s.contextualKeyword;
    return s.restoreFromSnapshot(e), new Ki(n, r)
}

function Dr() {
    return oo(s.pos)
}

function oo(e) {
    hs.lastIndex = e;
    const n = hs.exec(F);
    return e + n[0].length
}

function ao() {
    return F.charCodeAt(Dr())
}

function io() {
    if (co(), s.start = s.pos, s.pos >= F.length) {
        const e = s.tokens;
        e.length >= 2 && e[e.length - 1].start >= F.length && e[e.length - 2].start >= F.length && V("Unexpectedly reached the end of input."), G(t.eof);
        return
    }
    Ji(F.charCodeAt(s.pos))
}

function Ji(e) {
    Bt[e] || e === m.backslash || e === m.atSign && F.charCodeAt(s.pos + 1) === m.atSign ? Gi() : fo(e)
}

function Qi() {
    for (; F.charCodeAt(s.pos) !== m.asterisk || F.charCodeAt(s.pos + 1) !== m.slash;)
        if (s.pos++, s.pos > F.length) {
            V("Unterminated comment", s.pos - 2);
            return
        } s.pos += 2
}

function lo(e) {
    let n = F.charCodeAt(s.pos += e);
    if (s.pos < F.length)
        for (; n !== m.lineFeed && n !== m.carriageReturn && n !== m.lineSeparator && n !== m.paragraphSeparator && ++s.pos < F.length;) n = F.charCodeAt(s.pos)
}

function co() {
    for (; s.pos < F.length;) {
        const e = F.charCodeAt(s.pos);
        switch (e) {
            case m.carriageReturn:
                F.charCodeAt(s.pos + 1) === m.lineFeed && ++s.pos;
            case m.lineFeed:
            case m.lineSeparator:
            case m.paragraphSeparator:
                ++s.pos;
                break;
            case m.slash:
                switch (F.charCodeAt(s.pos + 1)) {
                    case m.asterisk:
                        s.pos += 2, Qi();
                        break;
                    case m.slash:
                        lo(2);
                        break;
                    default:
                        return
                }
                break;
            default:
                if (to[e]) ++s.pos;
                else return
        }
    }
}

function G(e, n = p.NONE) {
    s.end = s.pos, s.type = e, s.contextualKeyword = n
}

function e1() {
    const e = F.charCodeAt(s.pos + 1);
    if (e >= m.digit0 && e <= m.digit9) {
        ho(!0);
        return
    }
    e === m.dot && F.charCodeAt(s.pos + 2) === m.dot ? (s.pos += 3, G(t.ellipsis)) : (++s.pos, G(t.dot))
}

function t1() {
    F.charCodeAt(s.pos + 1) === m.equalsTo ? re(t.assign, 2) : re(t.slash, 1)
}

function n1(e) {
    let n = e === m.asterisk ? t.star : t.modulo,
        r = 1,
        o = F.charCodeAt(s.pos + 1);
    e === m.asterisk && o === m.asterisk && (r++, o = F.charCodeAt(s.pos + 2), n = t.exponent), o === m.equalsTo && F.charCodeAt(s.pos + 2) !== m.greaterThan && (r++, n = t.assign), re(n, r)
}

function r1(e) {
    const n = F.charCodeAt(s.pos + 1);
    if (n === e) {
        F.charCodeAt(s.pos + 2) === m.equalsTo ? re(t.assign, 3) : re(e === m.verticalBar ? t.logicalOR : t.logicalAND, 2);
        return
    }
    if (e === m.verticalBar) {
        if (n === m.greaterThan) {
            re(t.pipeline, 2);
            return
        } else if (n === m.rightCurlyBrace && ne) {
            re(t.braceBarR, 2);
            return
        }
    }
    if (n === m.equalsTo) {
        re(t.assign, 2);
        return
    }
    re(e === m.verticalBar ? t.bitwiseOR : t.bitwiseAND, 1)
}

function s1() {
    F.charCodeAt(s.pos + 1) === m.equalsTo ? re(t.assign, 2) : re(t.bitwiseXOR, 1)
}

function o1(e) {
    const n = F.charCodeAt(s.pos + 1);
    if (n === e) {
        re(t.preIncDec, 2);
        return
    }
    n === m.equalsTo ? re(t.assign, 2) : e === m.plusSign ? re(t.plus, 1) : re(t.minus, 1)
}

function a1() {
    const e = F.charCodeAt(s.pos + 1);
    if (e === m.lessThan) {
        if (F.charCodeAt(s.pos + 2) === m.equalsTo) {
            re(t.assign, 3);
            return
        }
        s.isType ? re(t.lessThan, 1) : re(t.bitShiftL, 2);
        return
    }
    e === m.equalsTo ? re(t.relationalOrEqual, 2) : re(t.lessThan, 1)
}

function uo() {
    if (s.isType) {
        re(t.greaterThan, 1);
        return
    }
    const e = F.charCodeAt(s.pos + 1);
    if (e === m.greaterThan) {
        const n = F.charCodeAt(s.pos + 2) === m.greaterThan ? 3 : 2;
        if (F.charCodeAt(s.pos + n) === m.equalsTo) {
            re(t.assign, n + 1);
            return
        }
        re(t.bitShiftR, n);
        return
    }
    e === m.equalsTo ? re(t.relationalOrEqual, 2) : re(t.greaterThan, 1)
}

function po() {
    s.type === t.greaterThan && (s.pos -= 1, uo())
}

function i1(e) {
    const n = F.charCodeAt(s.pos + 1);
    if (n === m.equalsTo) {
        re(t.equality, F.charCodeAt(s.pos + 2) === m.equalsTo ? 3 : 2);
        return
    }
    if (e === m.equalsTo && n === m.greaterThan) {
        s.pos += 2, G(t.arrow);
        return
    }
    re(e === m.equalsTo ? t.eq : t.bang, 1)
}

function l1() {
    const e = F.charCodeAt(s.pos + 1),
        n = F.charCodeAt(s.pos + 2);
    e === m.questionMark && !(ne && s.isType) ? n === m.equalsTo ? re(t.assign, 3) : re(t.nullishCoalescing, 2) : e === m.dot && !(n >= m.digit0 && n <= m.digit9) ? (s.pos += 2, G(t.questionDot)) : (++s.pos, G(t.question))
}

function fo(e) {
    switch (e) {
        case m.numberSign:
            ++s.pos, G(t.hash);
            return;
        case m.dot:
            e1();
            return;
        case m.leftParenthesis:
            ++s.pos, G(t.parenL);
            return;
        case m.rightParenthesis:
            ++s.pos, G(t.parenR);
            return;
        case m.semicolon:
            ++s.pos, G(t.semi);
            return;
        case m.comma:
            ++s.pos, G(t.comma);
            return;
        case m.leftSquareBracket:
            ++s.pos, G(t.bracketL);
            return;
        case m.rightSquareBracket:
            ++s.pos, G(t.bracketR);
            return;
        case m.leftCurlyBrace:
            ne && F.charCodeAt(s.pos + 1) === m.verticalBar ? re(t.braceBarL, 2) : (++s.pos, G(t.braceL));
            return;
        case m.rightCurlyBrace:
            ++s.pos, G(t.braceR);
            return;
        case m.colon:
            F.charCodeAt(s.pos + 1) === m.colon ? re(t.doubleColon, 2) : (++s.pos, G(t.colon));
            return;
        case m.questionMark:
            l1();
            return;
        case m.atSign:
            ++s.pos, G(t.at);
            return;
        case m.graveAccent:
            ++s.pos, G(t.backQuote);
            return;
        case m.digit0: {
            const n = F.charCodeAt(s.pos + 1);
            if (n === m.lowercaseX || n === m.uppercaseX || n === m.lowercaseO || n === m.uppercaseO || n === m.lowercaseB || n === m.uppercaseB) {
                u1();
                return
            }
        }
        case m.digit1:
        case m.digit2:
        case m.digit3:
        case m.digit4:
        case m.digit5:
        case m.digit6:
        case m.digit7:
        case m.digit8:
        case m.digit9:
            ho(!1);
            return;
        case m.quotationMark:
        case m.apostrophe:
            p1(e);
            return;
        case m.slash:
            t1();
            return;
        case m.percentSign:
        case m.asterisk:
            n1(e);
            return;
        case m.verticalBar:
        case m.ampersand:
            r1(e);
            return;
        case m.caret:
            s1();
            return;
        case m.plusSign:
        case m.dash:
            o1(e);
            return;
        case m.lessThan:
            a1();
            return;
        case m.greaterThan:
            uo();
            return;
        case m.equalsTo:
        case m.exclamationMark:
            i1(e);
            return;
        case m.tilde:
            re(t.tilde, 1);
            return
    }
    V(`Unexpected character '${String.fromCharCode(e)}'`, s.pos)
}

function re(e, n) {
    s.pos += n, G(e)
}

function c1() {
    const e = s.pos;
    let n = !1,
        r = !1;
    for (;;) {
        if (s.pos >= F.length) {
            V("Unterminated regular expression", e);
            return
        }
        const o = F.charCodeAt(s.pos);
        if (n) n = !1;
        else {
            if (o === m.leftSquareBracket) r = !0;
            else if (o === m.rightSquareBracket && r) r = !1;
            else if (o === m.slash && !r) break;
            n = o === m.backslash
        }++s.pos
    }++s.pos, h1(), G(t.regexp)
}

function dr() {
    for (;;) {
        const e = F.charCodeAt(s.pos);
        if (e >= m.digit0 && e <= m.digit9 || e === m.underscore) s.pos++;
        else break
    }
}

function u1() {
    for (s.pos += 2;;) {
        const n = F.charCodeAt(s.pos);
        if (n >= m.digit0 && n <= m.digit9 || n >= m.lowercaseA && n <= m.lowercaseF || n >= m.uppercaseA && n <= m.uppercaseF || n === m.underscore) s.pos++;
        else break
    }
    F.charCodeAt(s.pos) === m.lowercaseN ? (++s.pos, G(t.bigint)) : G(t.num)
}

function ho(e) {
    let n = !1,
        r = !1;
    e || dr();
    let o = F.charCodeAt(s.pos);
    if (o === m.dot && (++s.pos, dr(), o = F.charCodeAt(s.pos)), (o === m.uppercaseE || o === m.lowercaseE) && (o = F.charCodeAt(++s.pos), (o === m.plusSign || o === m.dash) && ++s.pos, dr(), o = F.charCodeAt(s.pos)), o === m.lowercaseN ? (++s.pos, n = !0) : o === m.lowercaseM && (++s.pos, r = !0), n) {
        G(t.bigint);
        return
    }
    if (r) {
        G(t.decimal);
        return
    }
    G(t.num)
}

function p1(e) {
    for (s.pos++;;) {
        if (s.pos >= F.length) {
            V("Unterminated string constant");
            return
        }
        const n = F.charCodeAt(s.pos);
        if (n === m.backslash) s.pos++;
        else if (n === e) break;
        s.pos++
    }
    s.pos++, G(t.string)
}

function f1() {
    for (;;) {
        if (s.pos >= F.length) {
            V("Unterminated template");
            return
        }
        const e = F.charCodeAt(s.pos);
        if (e === m.graveAccent || e === m.dollarSign && F.charCodeAt(s.pos + 1) === m.leftCurlyBrace) {
            if (s.pos === s.start && l(t.template))
                if (e === m.dollarSign) {
                    s.pos += 2, G(t.dollarBraceL);
                    return
                } else {
                    ++s.pos, G(t.backQuote);
                    return
                } G(t.template);
            return
        }
        e === m.backslash && s.pos++, s.pos++
    }
}

function h1() {
    for (; s.pos < F.length;) {
        const e = F.charCodeAt(s.pos);
        if (qe[e]) s.pos++;
        else if (e === m.backslash) {
            if (s.pos += 2, F.charCodeAt(s.pos) === m.leftCurlyBrace) {
                for (; s.pos < F.length && F.charCodeAt(s.pos) !== m.rightCurlyBrace;) s.pos++;
                s.pos++
            }
        } else break
    }
}

function Pt(e, n = e.currentIndex()) {
    let r = n + 1;
    if (Gt(e, r)) {
        const o = e.identifierNameAtIndex(n);
        return {
            isType: !1,
            leftName: o,
            rightName: o,
            endIndex: r
        }
    }
    if (r++, Gt(e, r)) return {
        isType: !0,
        leftName: null,
        rightName: null,
        endIndex: r
    };
    if (r++, Gt(e, r)) return {
        isType: !1,
        leftName: e.identifierNameAtIndex(n),
        rightName: e.identifierNameAtIndex(n + 2),
        endIndex: r
    };
    if (r++, Gt(e, r)) return {
        isType: !0,
        leftName: null,
        rightName: null,
        endIndex: r
    };
    throw new Error(`Unexpected import/export specifier at ${n}`)
}

function Gt(e, n) {
    const r = e.tokens[n];
    return r.type === t.braceR || r.type === t.comma
}
const d1 = new Map([
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
]);

function mo(e) {
    const [n, r] = ms(e.jsxPragma || "React.createElement"), [o, a] = ms(e.jsxFragmentPragma || "React.Fragment");
    return {
        base: n,
        suffix: r,
        fragmentBase: o,
        fragmentSuffix: a
    }
}

function ms(e) {
    let n = e.indexOf(".");
    return n === -1 && (n = e.length), [e.slice(0, n), e.slice(n)]
}
class Ue {
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
class st extends Ue {
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
    constructor(n, r, o, a, i) {
        super(), this.rootTransformer = n, this.tokens = r, this.importProcessor = o, this.nameManager = a, this.options = i, st.prototype.__init.call(this), st.prototype.__init2.call(this), st.prototype.__init3.call(this), st.prototype.__init4.call(this), st.prototype.__init5.call(this), this.jsxPragmaInfo = mo(i), this.isAutomaticRuntime = i.jsxRuntime === "automatic", this.jsxImportSource = i.jsxImportSource || "react"
    }
    process() {
        return this.tokens.matches1(t.jsxTagStart) ? (this.processJSXTag(), !0) : !1
    }
    getPrefixCode() {
        let n = "";
        if (this.filenameVarName && (n += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath||"")};`), this.isAutomaticRuntime)
            if (this.importProcessor)
                for (const [r, o] of Object.entries(this.cjsAutomaticModuleNameResolutions)) n += `var ${o} = require("${r}");`;
            else {
                const {
                    createElement: r,
                    ...o
                } = this.esmAutomaticImportNameResolutions;
                r && (n += `import {createElement as ${r}} from "${this.jsxImportSource}";`);
                const a = Object.entries(o).map(([i, c]) => `${i} as ${c}`).join(", ");
                if (a) {
                    const i = this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
                    n += `import {${a}} from "${i}";`
                }
            } return n
    }
    processJSXTag() {
        const {
            jsxRole: n,
            start: r
        } = this.tokens.currentToken(), o = this.options.production ? null : this.getElementLocationCode(r);
        this.isAutomaticRuntime && n !== Me.KeyAfterPropSpread ? this.transformTagToJSXFunc(o, n) : this.transformTagToCreateElement(o)
    }
    getElementLocationCode(n) {
        return `lineNumber: ${this.getLineNumberForIndex(n)}`
    }
    getLineNumberForIndex(n) {
        const r = this.tokens.code;
        for (; this.lastIndex < n && this.lastIndex < r.length;) r[this.lastIndex] === `
` && this.lastLineNumber++, this.lastIndex++;
        return this.lastLineNumber
    }
    transformTagToJSXFunc(n, r) {
        const o = r === Me.StaticChildren;
        this.tokens.replaceToken(this.getJSXFuncInvocationCode(o));
        let a = null;
        if (this.tokens.matches1(t.jsxTagEnd)) this.tokens.replaceToken(`${this.getFragmentCode()}, {`), this.processAutomaticChildrenAndEndProps(r);
        else {
            if (this.processTagIntro(), this.tokens.appendCode(", {"), a = this.processProps(!0), this.tokens.matches2(t.slash, t.jsxTagEnd)) this.tokens.appendCode("}");
            else if (this.tokens.matches1(t.jsxTagEnd)) this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(r);
            else throw new Error("Expected either /> or > at the end of the tag.");
            a && this.tokens.appendCode(`, ${a}`)
        }
        for (this.options.production || (a === null && this.tokens.appendCode(", void 0"), this.tokens.appendCode(`, ${o}, ${this.getDevSource(n)}, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(t.jsxTagEnd);) this.tokens.removeToken();
        this.tokens.replaceToken(")")
    }
    transformTagToCreateElement(n) {
        if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(t.jsxTagEnd)) this.tokens.replaceToken(`${this.getFragmentCode()}, null`), this.processChildren(!0);
        else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(n), !this.tokens.matches2(t.slash, t.jsxTagEnd))
            if (this.tokens.matches1(t.jsxTagEnd)) this.tokens.removeToken(), this.processChildren(!0);
            else throw new Error("Expected either /> or > at the end of the tag.");
        for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.jsxTagEnd);) this.tokens.removeToken();
        this.tokens.replaceToken(")")
    }
    getJSXFuncInvocationCode(n) {
        return this.options.production ? n ? this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime")
    }
    getCreateElementInvocationCode() {
        if (this.isAutomaticRuntime) return this.claimAutoImportedFuncInvocation("createElement", "");
        {
            const {
                jsxPragmaInfo: n
            } = this;
            return `${this.importProcessor&&this.importProcessor.getIdentifierReplacement(n.base)||n.base}${n.suffix}(`
        }
    }
    getFragmentCode() {
        if (this.isAutomaticRuntime) return this.claimAutoImportedName("Fragment", this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
        {
            const {
                jsxPragmaInfo: n
            } = this;
            return (this.importProcessor && this.importProcessor.getIdentifierReplacement(n.fragmentBase) || n.fragmentBase) + n.fragmentSuffix
        }
    }
    claimAutoImportedFuncInvocation(n, r) {
        const o = this.claimAutoImportedName(n, r);
        return this.importProcessor ? `${o}.call(void 0, ` : `${o}(`
    }
    claimAutoImportedName(n, r) {
        if (this.importProcessor) {
            const o = this.jsxImportSource + r;
            return this.cjsAutomaticModuleNameResolutions[o] || (this.cjsAutomaticModuleNameResolutions[o] = this.importProcessor.getFreeIdentifierForPath(o)), `${this.cjsAutomaticModuleNameResolutions[o]}.${n}`
        } else return this.esmAutomaticImportNameResolutions[n] || (this.esmAutomaticImportNameResolutions[n] = this.nameManager.claimFreeName(`_${n}`)), this.esmAutomaticImportNameResolutions[n]
    }
    processTagIntro() {
        let n = this.tokens.currentIndex() + 1;
        for (; this.tokens.tokens[n].isType || !this.tokens.matches2AtIndex(n - 1, t.jsxName, t.jsxName) && !this.tokens.matches2AtIndex(n - 1, t.greaterThan, t.jsxName) && !this.tokens.matches1AtIndex(n, t.braceL) && !this.tokens.matches1AtIndex(n, t.jsxTagEnd) && !this.tokens.matches2AtIndex(n, t.slash, t.jsxTagEnd);) n++;
        if (n === this.tokens.currentIndex() + 1) {
            const r = this.tokens.identifierName();
            go(r) && this.tokens.replaceToken(`'${r}'`)
        }
        for (; this.tokens.currentIndex() < n;) this.rootTransformer.processToken()
    }
    processPropsObjectWithDevInfo(n) {
        const r = this.options.production ? "" : `__self: this, __source: ${this.getDevSource(n)}`;
        if (!this.tokens.matches1(t.jsxName) && !this.tokens.matches1(t.braceL)) {
            r ? this.tokens.appendCode(`, {${r}}`) : this.tokens.appendCode(", null");
            return
        }
        this.tokens.appendCode(", {"), this.processProps(!1), r ? this.tokens.appendCode(` ${r}}`) : this.tokens.appendCode("}")
    }
    processProps(n) {
        let r = null;
        for (;;) {
            if (this.tokens.matches2(t.jsxName, t.eq)) {
                const o = this.tokens.identifierName();
                if (n && o === "key") {
                    r !== null && this.tokens.appendCode(r.replace(/[^\n]/g, "")), this.tokens.removeToken(), this.tokens.removeToken();
                    const a = this.tokens.snapshot();
                    this.processPropValue(), r = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(a);
                    continue
                } else this.processPropName(o), this.tokens.replaceToken(": "), this.processPropValue()
            } else if (this.tokens.matches1(t.jsxName)) {
                const o = this.tokens.identifierName();
                this.processPropName(o), this.tokens.appendCode(": true")
            } else if (this.tokens.matches1(t.braceL)) this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("");
            else break;
            this.tokens.appendCode(",")
        }
        return r
    }
    processPropName(n) {
        n.includes("-") ? this.tokens.replaceToken(`'${n}'`) : this.tokens.copyToken()
    }
    processPropValue() {
        this.tokens.matches1(t.braceL) ? (this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("")) : this.tokens.matches1(t.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue()
    }
    processStringPropValue() {
        const n = this.tokens.currentToken(),
            r = this.tokens.code.slice(n.start + 1, n.end - 1),
            o = gs(r),
            a = g1(r);
        this.tokens.replaceToken(a + o)
    }
    processAutomaticChildrenAndEndProps(n) {
        n === Me.StaticChildren ? (this.tokens.appendCode(" children: ["), this.processChildren(!1), this.tokens.appendCode("]}")) : (n === Me.OneChild && this.tokens.appendCode(" children: "), this.processChildren(!1), this.tokens.appendCode("}"))
    }
    processChildren(n) {
        let r = n;
        for (;;) {
            if (this.tokens.matches2(t.jsxTagStart, t.slash)) return;
            let o = !1;
            if (this.tokens.matches1(t.braceL)) this.tokens.matches2(t.braceL, t.braceR) ? (this.tokens.replaceToken(""), this.tokens.replaceToken("")) : (this.tokens.replaceToken(r ? ", " : ""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(""), o = !0);
            else if (this.tokens.matches1(t.jsxTagStart)) this.tokens.appendCode(r ? ", " : ""), this.processJSXTag(), o = !0;
            else if (this.tokens.matches1(t.jsxText) || this.tokens.matches1(t.jsxEmptyText)) o = this.processChildTextElement(r);
            else throw new Error("Unexpected token when processing JSX children.");
            o && (r = !0)
        }
    }
    processChildTextElement(n) {
        const r = this.tokens.currentToken(),
            o = this.tokens.code.slice(r.start, r.end),
            a = gs(o),
            i = m1(o);
        return i === '""' ? (this.tokens.replaceToken(a), !1) : (this.tokens.replaceToken(`${n?", ":""}${i}${a}`), !0)
    }
    getDevSource(n) {
        return `{fileName: ${this.getFilenameVarName()}, ${n}}`
    }
    getFilenameVarName() {
        return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName")), this.filenameVarName
    }
}

function go(e) {
    const n = e.charCodeAt(0);
    return n >= m.lowercaseA && n <= m.lowercaseZ
}

function m1(e) {
    let n = "",
        r = "",
        o = !1,
        a = !1;
    for (let i = 0; i < e.length; i++) {
        const c = e[i];
        if (c === " " || c === "	" || c === "\r") o || (r += c);
        else if (c === `
`) r = "", o = !0;
        else {
            if (a && o && (n += " "), n += r, r = "", c === "&") {
                const {
                    entity: f,
                    newI: h
                } = yo(e, i + 1);
                i = h - 1, n += f
            } else n += c;
            a = !0, o = !1
        }
    }
    return o || (n += r), JSON.stringify(n)
}

function gs(e) {
    let n = 0,
        r = 0;
    for (const o of e) o === `
` ? (n++, r = 0) : o === " " && r++;
    return `
`.repeat(n) + " ".repeat(r)
}

function g1(e) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        if (o === `
`)
            if (/\s/.test(e[r + 1]))
                for (n += " "; r < e.length && /\s/.test(e[r + 1]);) r++;
            else n += `
`;
        else if (o === "&") {
            const {
                entity: a,
                newI: i
            } = yo(e, r + 1);
            n += a, r = i - 1
        } else n += o
    }
    return JSON.stringify(n)
}

function yo(e, n) {
    let r = "",
        o = 0,
        a, i = n;
    if (e[i] === "#") {
        let c = 10;
        i++;
        let f;
        if (e[i] === "x")
            for (c = 16, i++, f = i; i < e.length && k1(e.charCodeAt(i));) i++;
        else
            for (f = i; i < e.length && y1(e.charCodeAt(i));) i++;
        if (e[i] === ";") {
            const h = e.slice(f, i);
            h && (i++, a = String.fromCodePoint(parseInt(h, c)))
        }
    } else
        for (; i < e.length && o++ < 10;) {
            const c = e[i];
            if (i++, c === ";") {
                a = d1.get(r);
                break
            }
            r += c
        }
    return a ? {
        entity: a,
        newI: i
    } : {
        entity: "&",
        newI: n
    }
}

function y1(e) {
    return e >= m.digit0 && e <= m.digit9
}

function k1(e) {
    return e >= m.digit0 && e <= m.digit9 || e >= m.lowercaseA && e <= m.lowercaseF || e >= m.uppercaseA && e <= m.uppercaseF
}

function ko(e, n) {
    const r = mo(n),
        o = new Set;
    for (let a = 0; a < e.tokens.length; a++) {
        const i = e.tokens[a];
        if (i.type === t.name && !i.isType && (i.identifierRole === $.Access || i.identifierRole === $.ObjectShorthand || i.identifierRole === $.ExportAccess) && !i.shadowsGlobal && o.add(e.identifierNameForToken(i)), i.type === t.jsxTagStart && o.add(r.base), i.type === t.jsxTagStart && a + 1 < e.tokens.length && e.tokens[a + 1].type === t.jsxTagEnd && (o.add(r.base), o.add(r.fragmentBase)), i.type === t.jsxName && i.identifierRole === $.Access) {
            const c = e.identifierNameForToken(i);
            (!go(c) || e.tokens[a + 1].type === t.dot) && o.add(e.identifierNameForToken(i))
        }
    }
    return o
}
class ot {
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
    constructor(n, r, o, a, i, c, f) {
        this.nameManager = n, this.tokens = r, this.enableLegacyTypeScriptModuleInterop = o, this.options = a, this.isTypeScriptTransformEnabled = i, this.keepUnusedImports = c, this.helperManager = f, ot.prototype.__init.call(this), ot.prototype.__init2.call(this), ot.prototype.__init3.call(this), ot.prototype.__init4.call(this), ot.prototype.__init5.call(this)
    }
    preprocessTokens() {
        for (let n = 0; n < this.tokens.tokens.length; n++) this.tokens.matches1AtIndex(n, t._import) && !this.tokens.matches3AtIndex(n, t._import, t.name, t.eq) && this.preprocessImportAtIndex(n), this.tokens.matches1AtIndex(n, t._export) && !this.tokens.matches2AtIndex(n, t._export, t.eq) && this.preprocessExportAtIndex(n);
        this.generateImportReplacements()
    }
    pruneTypeOnlyImports() {
        this.nonTypeIdentifiers = ko(this.tokens, this.options);
        for (const [n, r] of this.importInfoByPath.entries()) {
            if (r.hasBareImport || r.hasStarExport || r.exportStarNames.length > 0 || r.namedExports.length > 0) continue;
            [...r.defaultNames, ...r.wildcardNames, ...r.namedImports.map(({
                localName: a
            }) => a)].every(a => this.shouldAutomaticallyElideImportedName(a)) && this.importsToReplace.set(n, "")
        }
    }
    shouldAutomaticallyElideImportedName(n) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(n)
    }
    generateImportReplacements() {
        for (const [n, r] of this.importInfoByPath.entries()) {
            const {
                defaultNames: o,
                wildcardNames: a,
                namedImports: i,
                namedExports: c,
                exportStarNames: f,
                hasStarExport: h
            } = r;
            if (o.length === 0 && a.length === 0 && i.length === 0 && c.length === 0 && f.length === 0 && !h) {
                this.importsToReplace.set(n, `require('${n}');`);
                continue
            }
            const u = this.getFreeIdentifierForPath(n);
            let g;
            this.enableLegacyTypeScriptModuleInterop ? g = u : g = a.length > 0 ? a[0] : this.getFreeIdentifierForPath(n);
            let d = `var ${u} = require('${n}');`;
            if (a.length > 0)
                for (const x of a) {
                    const N = this.enableLegacyTypeScriptModuleInterop ? u : `${this.helperManager.getHelperName("interopRequireWildcard")}(${u})`;
                    d += ` var ${x} = ${N};`
                } else f.length > 0 && g !== u ? d += ` var ${g} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${u});` : o.length > 0 && g !== u && (d += ` var ${g} = ${this.helperManager.getHelperName("interopRequireDefault")}(${u});`);
            for (const {
                    importedName: x,
                    localName: N
                }
                of c) d += ` ${this.helperManager.getHelperName("createNamedExportFrom")}(${u}, '${N}', '${x}');`;
            for (const x of f) d += ` exports.${x} = ${g};`;
            h && (d += ` ${this.helperManager.getHelperName("createStarExport")}(${u});`), this.importsToReplace.set(n, d);
            for (const x of o) this.identifierReplacements.set(x, `${g}.default`);
            for (const {
                    importedName: x,
                    localName: N
                }
                of i) this.identifierReplacements.set(N, `${u}.${x}`)
        }
    }
    getFreeIdentifierForPath(n) {
        const r = n.split("/"),
            a = r[r.length - 1].replace(/\W/g, "");
        return this.nameManager.claimFreeName(`_${a}`)
    }
    preprocessImportAtIndex(n) {
        const r = [],
            o = [],
            a = [];
        if (n++, (this.tokens.matchesContextualAtIndex(n, p._type) || this.tokens.matches1AtIndex(n, t._typeof)) && !this.tokens.matches1AtIndex(n + 1, t.comma) && !this.tokens.matchesContextualAtIndex(n + 1, p._from) || this.tokens.matches1AtIndex(n, t.parenL)) return;
        if (this.tokens.matches1AtIndex(n, t.name) && (r.push(this.tokens.identifierNameAtIndex(n)), n++, this.tokens.matches1AtIndex(n, t.comma) && n++), this.tokens.matches1AtIndex(n, t.star) && (n += 2, o.push(this.tokens.identifierNameAtIndex(n)), n++), this.tokens.matches1AtIndex(n, t.braceL)) {
            const f = this.getNamedImports(n + 1);
            n = f.newIndex;
            for (const h of f.namedImports) h.importedName === "default" ? r.push(h.localName) : a.push(h)
        }
        if (this.tokens.matchesContextualAtIndex(n, p._from) && n++, !this.tokens.matches1AtIndex(n, t.string)) throw new Error("Expected string token at the end of import statement.");
        const i = this.tokens.stringValueAtIndex(n),
            c = this.getImportInfo(i);
        c.defaultNames.push(...r), c.wildcardNames.push(...o), c.namedImports.push(...a), r.length === 0 && o.length === 0 && a.length === 0 && (c.hasBareImport = !0)
    }
    preprocessExportAtIndex(n) {
        if (this.tokens.matches2AtIndex(n, t._export, t._var) || this.tokens.matches2AtIndex(n, t._export, t._let) || this.tokens.matches2AtIndex(n, t._export, t._const)) this.preprocessVarExportAtIndex(n);
        else if (this.tokens.matches2AtIndex(n, t._export, t._function) || this.tokens.matches2AtIndex(n, t._export, t._class)) {
            const r = this.tokens.identifierNameAtIndex(n + 2);
            this.addExportBinding(r, r)
        } else if (this.tokens.matches3AtIndex(n, t._export, t.name, t._function)) {
            const r = this.tokens.identifierNameAtIndex(n + 3);
            this.addExportBinding(r, r)
        } else this.tokens.matches2AtIndex(n, t._export, t.braceL) ? this.preprocessNamedExportAtIndex(n) : this.tokens.matches2AtIndex(n, t._export, t.star) && this.preprocessExportStarAtIndex(n)
    }
    preprocessVarExportAtIndex(n) {
        let r = 0;
        for (let o = n + 2;; o++)
            if (this.tokens.matches1AtIndex(o, t.braceL) || this.tokens.matches1AtIndex(o, t.dollarBraceL) || this.tokens.matches1AtIndex(o, t.bracketL)) r++;
            else if (this.tokens.matches1AtIndex(o, t.braceR) || this.tokens.matches1AtIndex(o, t.bracketR)) r--;
        else {
            if (r === 0 && !this.tokens.matches1AtIndex(o, t.name)) break;
            if (this.tokens.matches1AtIndex(1, t.eq)) {
                const a = this.tokens.currentToken().rhsEndIndex;
                if (a == null) throw new Error("Expected = token with an end index.");
                o = a - 1
            } else {
                const a = this.tokens.tokens[o];
                if (no(a)) {
                    const i = this.tokens.identifierNameAtIndex(o);
                    this.identifierReplacements.set(i, `exports.${i}`)
                }
            }
        }
    }
    preprocessNamedExportAtIndex(n) {
        n += 2;
        const {
            newIndex: r,
            namedImports: o
        } = this.getNamedImports(n);
        if (n = r, this.tokens.matchesContextualAtIndex(n, p._from)) n++;
        else {
            for (const {
                    importedName: c,
                    localName: f
                }
                of o) this.addExportBinding(c, f);
            return
        }
        if (!this.tokens.matches1AtIndex(n, t.string)) throw new Error("Expected string token at the end of import statement.");
        const a = this.tokens.stringValueAtIndex(n);
        this.getImportInfo(a).namedExports.push(...o)
    }
    preprocessExportStarAtIndex(n) {
        let r = null;
        if (this.tokens.matches3AtIndex(n, t._export, t.star, t._as) ? (n += 3, r = this.tokens.identifierNameAtIndex(n), n += 2) : n += 3, !this.tokens.matches1AtIndex(n, t.string)) throw new Error("Expected string token at the end of star export statement.");
        const o = this.tokens.stringValueAtIndex(n),
            a = this.getImportInfo(o);
        r !== null ? a.exportStarNames.push(r) : a.hasStarExport = !0
    }
    getNamedImports(n) {
        const r = [];
        for (;;) {
            if (this.tokens.matches1AtIndex(n, t.braceR)) {
                n++;
                break
            }
            const o = Pt(this.tokens, n);
            if (n = o.endIndex, o.isType || r.push({
                    importedName: o.leftName,
                    localName: o.rightName
                }), this.tokens.matches2AtIndex(n, t.comma, t.braceR)) {
                n += 2;
                break
            } else if (this.tokens.matches1AtIndex(n, t.braceR)) {
                n++;
                break
            } else if (this.tokens.matches1AtIndex(n, t.comma)) n++;
            else throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[n])}`)
        }
        return {
            newIndex: n,
            namedImports: r
        }
    }
    getImportInfo(n) {
        const r = this.importInfoByPath.get(n);
        if (r) return r;
        const o = {
            defaultNames: [],
            wildcardNames: [],
            namedImports: [],
            namedExports: [],
            hasBareImport: !1,
            exportStarNames: [],
            hasStarExport: !1
        };
        return this.importInfoByPath.set(n, o), o
    }
    addExportBinding(n, r) {
        this.exportBindingsByLocalName.has(n) || this.exportBindingsByLocalName.set(n, []), this.exportBindingsByLocalName.get(n).push(r)
    }
    claimImportCode(n) {
        const r = this.importsToReplace.get(n);
        return this.importsToReplace.set(n, ""), r || ""
    }
    getIdentifierReplacement(n) {
        return this.identifierReplacements.get(n) || null
    }
    resolveExportBinding(n) {
        const r = this.exportBindingsByLocalName.get(n);
        return !r || r.length === 0 ? null : r.map(o => `exports.${o}`).join(" = ")
    }
    getGlobalNames() {
        return new Set([...this.identifierReplacements.keys(), ...this.exportBindingsByLocalName.keys()])
    }
}
var b1 = 44,
    _1 = 59,
    ys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bo = new Uint8Array(64),
    x1 = new Uint8Array(128);
for (let e = 0; e < ys.length; e++) {
    const n = ys.charCodeAt(e);
    bo[e] = n, x1[n] = e
}

function vt(e, n, r) {
    let o = n - r;
    o = o < 0 ? -o << 1 | 1 : o << 1;
    do {
        let a = o & 31;
        o >>>= 5, o > 0 && (a |= 32), e.write(bo[a])
    } while (o > 0);
    return n
}
var ks = 1024 * 16,
    bs = typeof TextDecoder < "u" ? new TextDecoder : typeof Jt < "u" ? {
        decode(e) {
            return Jt.from(e.buffer, e.byteOffset, e.byteLength).toString()
        }
    } : {
        decode(e) {
            let n = "";
            for (let r = 0; r < e.length; r++) n += String.fromCharCode(e[r]);
            return n
        }
    },
    w1 = class {
        constructor() {
            this.pos = 0, this.out = "", this.buffer = new Uint8Array(ks)
        }
        write(e) {
            const {
                buffer: n
            } = this;
            n[this.pos++] = e, this.pos === ks && (this.out += bs.decode(n), this.pos = 0)
        }
        flush() {
            const {
                buffer: e,
                out: n,
                pos: r
            } = this;
            return r > 0 ? n + bs.decode(e.subarray(0, r)) : n
        }
    };

function v1(e) {
    const n = new w1;
    let r = 0,
        o = 0,
        a = 0,
        i = 0;
    for (let c = 0; c < e.length; c++) {
        const f = e[c];
        if (c > 0 && n.write(_1), f.length === 0) continue;
        let h = 0;
        for (let u = 0; u < f.length; u++) {
            const g = f[u];
            u > 0 && n.write(b1), h = vt(n, g[0], h), g.length !== 1 && (r = vt(n, g[1], r), o = vt(n, g[2], o), a = vt(n, g[3], a), g.length !== 4 && (i = vt(n, g[4], i)))
        }
    }
    return n.flush()
}
var Wt = {
        exports: {}
    },
    I1 = Wt.exports,
    _s;

function E1() {
    return _s || (_s = 1, function(e, n) {
        (function(r, o) {
            e.exports = o()
        })(I1, function() {
            const r = /^[\w+.-]+:\/\//,
                o = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
                a = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;

            function i(b) {
                return r.test(b)
            }

            function c(b) {
                return b.startsWith("//")
            }

            function f(b) {
                return b.startsWith("/")
            }

            function h(b) {
                return b.startsWith("file:")
            }

            function u(b) {
                return /^[.?#]/.test(b)
            }

            function g(b) {
                const T = o.exec(b);
                return x(T[1], T[2] || "", T[3], T[4] || "", T[5] || "/", T[6] || "", T[7] || "")
            }

            function d(b) {
                const T = a.exec(b),
                    R = T[2];
                return x("file:", "", T[1] || "", "", f(R) ? R : "/" + R, T[3] || "", T[4] || "")
            }

            function x(b, T, R, B, Y, M, K) {
                return {
                    scheme: b,
                    user: T,
                    host: R,
                    port: B,
                    path: Y,
                    query: M,
                    hash: K,
                    type: 7
                }
            }

            function N(b) {
                if (c(b)) {
                    const R = g("http:" + b);
                    return R.scheme = "", R.type = 6, R
                }
                if (f(b)) {
                    const R = g("http://foo.com" + b);
                    return R.scheme = "", R.host = "", R.type = 5, R
                }
                if (h(b)) return d(b);
                if (i(b)) return g(b);
                const T = g("http://foo.com/" + b);
                return T.scheme = "", T.host = "", T.type = b ? b.startsWith("?") ? 3 : b.startsWith("#") ? 2 : 4 : 1, T
            }

            function y(b) {
                if (b.endsWith("/..")) return b;
                const T = b.lastIndexOf("/");
                return b.slice(0, T + 1)
            }

            function k(b, T) {
                w(T, T.type), b.path === "/" ? b.path = T.path : b.path = y(T.path) + b.path
            }

            function w(b, T) {
                const R = T <= 4,
                    B = b.path.split("/");
                let Y = 1,
                    M = 0,
                    K = !1;
                for (let D = 1; D < B.length; D++) {
                    const z = B[D];
                    if (!z) {
                        K = !0;
                        continue
                    }
                    if (K = !1, z !== ".") {
                        if (z === "..") {
                            M ? (K = !0, M--, Y--) : R && (B[Y++] = z);
                            continue
                        }
                        B[Y++] = z, M++
                    }
                }
                let ee = "";
                for (let D = 1; D < Y; D++) ee += "/" + B[D];
                (!ee || K && !ee.endsWith("/..")) && (ee += "/"), b.path = ee
            }

            function C(b, T) {
                if (!b && !T) return "";
                const R = N(b);
                let B = R.type;
                if (T && B !== 7) {
                    const M = N(T),
                        K = M.type;
                    switch (B) {
                        case 1:
                            R.hash = M.hash;
                        case 2:
                            R.query = M.query;
                        case 3:
                        case 4:
                            k(R, M);
                        case 5:
                            R.user = M.user, R.host = M.host, R.port = M.port;
                        case 6:
                            R.scheme = M.scheme
                    }
                    K > B && (B = K)
                }
                w(R, B);
                const Y = R.query + R.hash;
                switch (B) {
                    case 2:
                    case 3:
                        return Y;
                    case 4: {
                        const M = R.path.slice(1);
                        return M ? u(T || b) && !u(M) ? "./" + M + Y : M + Y : Y || "."
                    }
                    case 5:
                        return R.path + Y;
                    default:
                        return R.scheme + "//" + R.user + R.host + R.port + R.path + Y
                }
            }
            return C
        })
    }(Wt)), Wt.exports
}
E1();
var mr = class {
    constructor() {
        this._indexes = {
            __proto__: null
        }, this.array = []
    }
};

function T1(e, n) {
    return e._indexes[n]
}

function A1(e, n) {
    const r = T1(e, n);
    if (r !== void 0) return r;
    const {
        array: o,
        _indexes: a
    } = e, i = o.push(n);
    return a[n] = i - 1
}
var S1 = 0,
    N1 = 1,
    C1 = 2,
    R1 = 3,
    P1 = 4,
    _o = -1,
    L1 = class {
        constructor({
            file: e,
            sourceRoot: n
        } = {}) {
            this._names = new mr, this._sources = new mr, this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = n, this._ignoreList = new mr
        }
    };
var gr = (e, n, r, o, a, i, c, f) => O1(!0, e, n, r, o, a, i);

function F1(e) {
    const {
        _mappings: n,
        _sources: r,
        _sourcesContent: o,
        _names: a,
        _ignoreList: i
    } = e;
    return $1(n), {
        version: 3,
        file: e.file || void 0,
        names: a.array,
        sourceRoot: e.sourceRoot || void 0,
        sources: r.array,
        sourcesContent: o,
        mappings: n,
        ignoreList: i.array
    }
}

function D1(e) {
    const n = F1(e);
    return Object.assign({}, n, {
        mappings: v1(n.mappings)
    })
}

function O1(e, n, r, o, a, i, c, f, h) {
    const {
        _mappings: u,
        _sources: g,
        _sourcesContent: d,
        _names: x
    } = n, N = j1(u, r), y = B1(N, o);
    if (!a) return M1(N, y) ? void 0 : xs(N, y, [o]);
    const k = A1(g, a),
        w = _o;
    if (k === d.length && (d[k] = null), !q1(N, y, k, i, c, w)) return xs(N, y, [o, k, i, c])
}

function j1(e, n) {
    for (let r = e.length; r <= n; r++) e[r] = [];
    return e[n]
}

function B1(e, n) {
    let r = e.length;
    for (let o = r - 1; o >= 0; r = o--) {
        const a = e[o];
        if (n >= a[S1]) break
    }
    return r
}

function xs(e, n, r) {
    for (let o = e.length; o > n; o--) e[o] = e[o - 1];
    e[n] = r
}

function $1(e) {
    const {
        length: n
    } = e;
    let r = n;
    for (let o = r - 1; o >= 0 && !(e[o].length > 0); r = o, o--);
    r < n && (e.length = r)
}

function M1(e, n) {
    return n === 0 ? !0 : e[n - 1].length === 1
}

function q1(e, n, r, o, a, i) {
    if (n === 0) return !1;
    const c = e[n - 1];
    return c.length === 1 ? !1 : r === c[N1] && o === c[C1] && a === c[R1] && i === (c.length === 5 ? c[P1] : _o)
}

function U1({
    code: e,
    mappings: n
}, r, o, a, i) {
    const c = z1(a, i),
        f = new L1({
            file: o.compiledFilename
        });
    let h = 0,
        u = n[0];
    for (; u === void 0 && h < n.length - 1;) h++, u = n[h];
    let g = 0,
        d = 0;
    u !== d && gr(f, g, 0, r, g, 0);
    for (let k = 0; k < e.length; k++) {
        if (k === u) {
            const w = u - d,
                C = c[h];
            for (gr(f, g, w, r, g, C);
                (u === k || u === void 0) && h < n.length - 1;) h++, u = n[h]
        }
        e.charCodeAt(k) === m.lineFeed && (g++, d = k + 1, u !== d && gr(f, g, 0, r, g, 0))
    }
    const {
        sourceRoot: x,
        sourcesContent: N,
        ...y
    } = D1(f);
    return y
}

function z1(e, n) {
    const r = new Array(n.length);
    let o = 0,
        a = n[o].start,
        i = 0;
    for (let c = 0; c < e.length; c++) c === a && (r[o] = a - i, o++, a = n[o].start), e.charCodeAt(c) === m.lineFeed && (i = c + 1);
    return r
}
const H1 = {
    require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
    interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
    interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
    createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
    createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
    nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
    asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
    optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
    asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
    optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
    asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `
};
class en {
    __init() {
        this.helperNames = {}
    }
    __init2() {
        this.createRequireName = null
    }
    constructor(n) {
        this.nameManager = n, en.prototype.__init.call(this), en.prototype.__init2.call(this)
    }
    getHelperName(n) {
        let r = this.helperNames[n];
        return r || (r = this.nameManager.claimFreeName(`_${n}`), this.helperNames[n] = r, r)
    }
    emitHelpers() {
        let n = "";
        this.helperNames.optionalChainDelete && this.getHelperName("optionalChain"), this.helperNames.asyncOptionalChainDelete && this.getHelperName("asyncOptionalChain");
        for (const [r, o] of Object.entries(H1)) {
            const a = this.helperNames[r];
            let i = o;
            r === "optionalChainDelete" ? i = i.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain) : r === "asyncOptionalChainDelete" ? i = i.replace("ASYNC_OPTIONAL_CHAIN_NAME", this.helperNames.asyncOptionalChain) : r === "require" && (this.createRequireName === null && (this.createRequireName = this.nameManager.claimFreeName("_createRequire")), i = i.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), a && (n += " ", n += i.replace(r, a).replace(/\s+/g, " ").trim())
        }
        return n
    }
}

function ws(e, n, r) {
    G1(e, r) && V1(e, n, r)
}

function G1(e, n) {
    for (const r of e.tokens)
        if (r.type === t.name && !r.isType && Vi(r) && n.has(e.identifierNameForToken(r))) return !0;
    return !1
}

function V1(e, n, r) {
    const o = [];
    let a = n.length - 1;
    for (let i = e.tokens.length - 1;; i--) {
        for (; o.length > 0 && o[o.length - 1].startTokenIndex === i + 1;) o.pop();
        for (; a >= 0 && n[a].endTokenIndex === i + 1;) o.push(n[a]), a--;
        if (i < 0) break;
        const c = e.tokens[i],
            f = e.identifierNameForToken(c);
        if (o.length > 1 && !c.isType && c.type === t.name && r.has(f)) {
            if (Wi(c)) vs(o[o.length - 1], e, f);
            else if (Xi(c)) {
                let h = o.length - 1;
                for (; h > 0 && !o[h].isFunctionScope;) h--;
                if (h < 0) throw new Error("Did not find parent function scope.");
                vs(o[h], e, f)
            }
        }
    }
    if (o.length > 0) throw new Error("Expected empty scope stack after processing file.")
}

function vs(e, n, r) {
    for (let o = e.startTokenIndex; o < e.endTokenIndex; o++) {
        const a = n.tokens[o];
        (a.type === t.name || a.type === t.jsxName) && n.identifierNameForToken(a) === r && (a.shadowsGlobal = !0)
    }
}

function W1(e, n) {
    const r = [];
    for (const o of n) o.type === t.name && r.push(e.slice(o.start, o.end));
    return r
}
class Or {
    __init() {
        this.usedNames = new Set
    }
    constructor(n, r) {
        Or.prototype.__init.call(this), this.usedNames = new Set(W1(n, r))
    }
    claimFreeName(n) {
        const r = this.findFreeName(n);
        return this.usedNames.add(r), r
    }
    findFreeName(n) {
        if (!this.usedNames.has(n)) return n;
        let r = 2;
        for (; this.usedNames.has(n + String(r));) r++;
        return n + String(r)
    }
}
var It = {},
    Et = {},
    $e = {},
    Is;

function xr() {
    if (Is) return $e;
    Is = 1;
    var e = $e && $e.__extends || function() {
        var i = function(c, f) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(h, u) {
                h.__proto__ = u
            } || function(h, u) {
                for (var g in u) u.hasOwnProperty(g) && (h[g] = u[g])
            }, i(c, f)
        };
        return function(c, f) {
            i(c, f);

            function h() {
                this.constructor = c
            }
            c.prototype = f === null ? Object.create(f) : (h.prototype = f.prototype, new h)
        }
    }();
    Object.defineProperty($e, "__esModule", {
        value: !0
    }), $e.DetailContext = $e.NoopContext = $e.VError = void 0;
    var n = function(i) {
        e(c, i);

        function c(f, h) {
            var u = i.call(this, h) || this;
            return u.path = f, Object.setPrototypeOf(u, c.prototype), u
        }
        return c
    }(Error);
    $e.VError = n;
    var r = function() {
        function i() {}
        return i.prototype.fail = function(c, f, h) {
            return !1
        }, i.prototype.unionResolver = function() {
            return this
        }, i.prototype.createContext = function() {
            return this
        }, i.prototype.resolveUnion = function(c) {}, i
    }();
    $e.NoopContext = r;
    var o = function() {
        function i() {
            this._propNames = [""], this._messages = [null], this._score = 0
        }
        return i.prototype.fail = function(c, f, h) {
            return this._propNames.push(c), this._messages.push(f), this._score += h, !1
        }, i.prototype.unionResolver = function() {
            return new a
        }, i.prototype.resolveUnion = function(c) {
            for (var f, h, u = c, g = null, d = 0, x = u.contexts; d < x.length; d++) {
                var N = x[d];
                (!g || N._score >= g._score) && (g = N)
            }
            g && g._score > 0 && ((f = this._propNames).push.apply(f, g._propNames), (h = this._messages).push.apply(h, g._messages))
        }, i.prototype.getError = function(c) {
            for (var f = [], h = this._propNames.length - 1; h >= 0; h--) {
                var u = this._propNames[h];
                c += typeof u == "number" ? "[" + u + "]" : u ? "." + u : "";
                var g = this._messages[h];
                g && f.push(c + " " + g)
            }
            return new n(c, f.join("; "))
        }, i.prototype.getErrorDetail = function(c) {
            for (var f = [], h = this._propNames.length - 1; h >= 0; h--) {
                var u = this._propNames[h];
                c += typeof u == "number" ? "[" + u + "]" : u ? "." + u : "";
                var g = this._messages[h];
                g && f.push({
                    path: c,
                    message: g
                })
            }
            for (var d = null, h = f.length - 1; h >= 0; h--) d && (f[h].nested = [d]), d = f[h];
            return d
        }, i
    }();
    $e.DetailContext = o;
    var a = function() {
        function i() {
            this.contexts = []
        }
        return i.prototype.createContext = function() {
            var c = new o;
            return this.contexts.push(c), c
        }, i
    }();
    return $e
}
var Es;

function Ts() {
    return Es || (Es = 1, function(e) {
        var n = Et && Et.__extends || function() {
            var E = function(S, P) {
                return E = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(L, O) {
                    L.__proto__ = O
                } || function(L, O) {
                    for (var U in O) O.hasOwnProperty(U) && (L[U] = O[U])
                }, E(S, P)
            };
            return function(S, P) {
                E(S, P);

                function L() {
                    this.constructor = S
                }
                S.prototype = P === null ? Object.create(P) : (L.prototype = P.prototype, new L)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.basicTypes = e.BasicType = e.TParamList = e.TParam = e.param = e.TFunc = e.func = e.TProp = e.TOptional = e.opt = e.TIface = e.iface = e.TEnumLiteral = e.enumlit = e.TEnumType = e.enumtype = e.TIntersection = e.intersection = e.TUnion = e.union = e.TTuple = e.tuple = e.TArray = e.array = e.TLiteral = e.lit = e.TName = e.name = e.TType = void 0;
        var r = xr(),
            o = function() {
                function E() {}
                return E
            }();
        e.TType = o;

        function a(E) {
            return typeof E == "string" ? c(E) : E
        }

        function i(E, S) {
            var P = E[S];
            if (!P) throw new Error("Unknown type " + S);
            return P
        }

        function c(E) {
            return new f(E)
        }
        e.name = c;
        var f = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.name = P, L._failMsg = "is not a " + P, L
            }
            return S.prototype.getChecker = function(P, L, O) {
                var U = this,
                    H = i(P, this.name),
                    te = H.getChecker(P, L, O);
                return H instanceof Q || H instanceof S ? te : function(ce, ie) {
                    return te(ce, ie) ? !0 : ie.fail(null, U._failMsg, 0)
                }
            }, S
        }(o);
        e.TName = f;

        function h(E) {
            return new u(E)
        }
        e.lit = h;
        var u = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.value = P, L.name = JSON.stringify(P), L._failMsg = "is not " + L.name, L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this;
                return function(U, H) {
                    return U === O.value ? !0 : H.fail(null, O._failMsg, -1)
                }
            }, S
        }(o);
        e.TLiteral = u;

        function g(E) {
            return new d(a(E))
        }
        e.array = g;
        var d = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.ttype = P, L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this.ttype.getChecker(P, L);
                return function(U, H) {
                    if (!Array.isArray(U)) return H.fail(null, "is not an array", 0);
                    for (var te = 0; te < U.length; te++) {
                        var ce = O(U[te], H);
                        if (!ce) return H.fail(te, null, 1)
                    }
                    return !0
                }
            }, S
        }(o);
        e.TArray = d;

        function x() {
            for (var E = [], S = 0; S < arguments.length; S++) E[S] = arguments[S];
            return new N(E.map(function(P) {
                return a(P)
            }))
        }
        e.tuple = x;
        var N = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.ttypes = P, L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this.ttypes.map(function(H) {
                        return H.getChecker(P, L)
                    }),
                    U = function(H, te) {
                        if (!Array.isArray(H)) return te.fail(null, "is not an array", 0);
                        for (var ce = 0; ce < O.length; ce++) {
                            var ie = O[ce](H[ce], te);
                            if (!ie) return te.fail(ce, null, 1)
                        }
                        return !0
                    };
                return L ? function(H, te) {
                    return U(H, te) ? H.length <= O.length ? !0 : te.fail(O.length, "is extraneous", 2) : !1
                } : U
            }, S
        }(o);
        e.TTuple = N;

        function y() {
            for (var E = [], S = 0; S < arguments.length; S++) E[S] = arguments[S];
            return new k(E.map(function(P) {
                return a(P)
            }))
        }
        e.union = y;
        var k = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                L.ttypes = P;
                var O = P.map(function(H) {
                        return H instanceof f || H instanceof u ? H.name : null
                    }).filter(function(H) {
                        return H
                    }),
                    U = P.length - O.length;
                return O.length ? (U > 0 && O.push(U + " more"), L._failMsg = "is none of " + O.join(", ")) : L._failMsg = "is none of " + U + " types", L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this,
                    U = this.ttypes.map(function(H) {
                        return H.getChecker(P, L)
                    });
                return function(H, te) {
                    for (var ce = te.unionResolver(), ie = 0; ie < U.length; ie++) {
                        var ke = U[ie](H, ce.createContext());
                        if (ke) return !0
                    }
                    return te.resolveUnion(ce), te.fail(null, O._failMsg, 0)
                }
            }, S
        }(o);
        e.TUnion = k;

        function w() {
            for (var E = [], S = 0; S < arguments.length; S++) E[S] = arguments[S];
            return new C(E.map(function(P) {
                return a(P)
            }))
        }
        e.intersection = w;
        var C = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.ttypes = P, L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = new Set,
                    U = this.ttypes.map(function(H) {
                        return H.getChecker(P, L, O)
                    });
                return function(H, te) {
                    var ce = U.every(function(ie) {
                        return ie(H, te)
                    });
                    return ce ? !0 : te.fail(null, null, 0)
                }
            }, S
        }(o);
        e.TIntersection = C;

        function b(E) {
            return new T(E)
        }
        e.enumtype = b;
        var T = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.members = P, L.validValues = new Set, L._failMsg = "is not a valid enum value", L.validValues = new Set(Object.keys(P).map(function(O) {
                    return P[O]
                })), L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this;
                return function(U, H) {
                    return O.validValues.has(U) ? !0 : H.fail(null, O._failMsg, 0)
                }
            }, S
        }(o);
        e.TEnumType = T;

        function R(E, S) {
            return new B(E, S)
        }
        e.enumlit = R;
        var B = function(E) {
            n(S, E);

            function S(P, L) {
                var O = E.call(this) || this;
                return O.enumName = P, O.prop = L, O._failMsg = "is not " + P + "." + L, O
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this,
                    U = i(P, this.enumName);
                if (!(U instanceof T)) throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
                var H = U.members[this.prop];
                if (!U.members.hasOwnProperty(this.prop)) throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
                return function(te, ce) {
                    return te === H ? !0 : ce.fail(null, O._failMsg, -1)
                }
            }, S
        }(o);
        e.TEnumLiteral = B;

        function Y(E) {
            return Object.keys(E).map(function(S) {
                return M(S, E[S])
            })
        }

        function M(E, S) {
            return S instanceof z ? new X(E, S.ttype, !0) : new X(E, a(S), !1)
        }

        function K(E, S) {
            return new ee(E, Y(S))
        }
        e.iface = K;
        var ee = function(E) {
            n(S, E);

            function S(P, L) {
                var O = E.call(this) || this;
                return O.bases = P, O.props = L, O.propSet = new Set(L.map(function(U) {
                    return U.name
                })), O
            }
            return S.prototype.getChecker = function(P, L, O) {
                var U = this,
                    H = this.bases.map(function(he) {
                        return i(P, he).getChecker(P, L)
                    }),
                    te = this.props.map(function(he) {
                        return he.ttype.getChecker(P, L)
                    }),
                    ce = new r.NoopContext,
                    ie = this.props.map(function(he, we) {
                        return !he.isOpt && !te[we](void 0, ce)
                    }),
                    ke = function(he, we) {
                        if (typeof he != "object" || he === null) return we.fail(null, "is not an object", 0);
                        for (var ve = 0; ve < H.length; ve++)
                            if (!H[ve](he, we)) return !1;
                        for (var ve = 0; ve < te.length; ve++) {
                            var rt = U.props[ve].name,
                                ht = he[rt];
                            if (ht === void 0) {
                                if (ie[ve]) return we.fail(rt, "is missing", 1)
                            } else {
                                var xt = te[ve](ht, we);
                                if (!xt) return we.fail(rt, null, 1)
                            }
                        }
                        return !0
                    };
                if (!L) return ke;
                var Ce = this.propSet;
                return O && (this.propSet.forEach(function(he) {
                        return O.add(he)
                    }), Ce = O),
                    function(he, we) {
                        if (!ke(he, we)) return !1;
                        for (var ve in he)
                            if (!Ce.has(ve)) return we.fail(ve, "is extraneous", 2);
                        return !0
                    }
            }, S
        }(o);
        e.TIface = ee;

        function D(E) {
            return new z(a(E))
        }
        e.opt = D;
        var z = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.ttype = P, L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this.ttype.getChecker(P, L);
                return function(U, H) {
                    return U === void 0 || O(U, H)
                }
            }, S
        }(o);
        e.TOptional = z;
        var X = function() {
            function E(S, P, L) {
                this.name = S, this.ttype = P, this.isOpt = L
            }
            return E
        }();
        e.TProp = X;

        function se(E) {
            for (var S = [], P = 1; P < arguments.length; P++) S[P - 1] = arguments[P];
            return new oe(new Ae(S), a(E))
        }
        e.func = se;
        var oe = function(E) {
            n(S, E);

            function S(P, L) {
                var O = E.call(this) || this;
                return O.paramList = P, O.result = L, O
            }
            return S.prototype.getChecker = function(P, L) {
                return function(O, U) {
                    return typeof O == "function" ? !0 : U.fail(null, "is not a function", 0)
                }
            }, S
        }(o);
        e.TFunc = oe;

        function ge(E, S, P) {
            return new xe(E, a(S), !!P)
        }
        e.param = ge;
        var xe = function() {
            function E(S, P, L) {
                this.name = S, this.ttype = P, this.isOpt = L
            }
            return E
        }();
        e.TParam = xe;
        var Ae = function(E) {
            n(S, E);

            function S(P) {
                var L = E.call(this) || this;
                return L.params = P, L
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this,
                    U = this.params.map(function(ie) {
                        return ie.ttype.getChecker(P, L)
                    }),
                    H = new r.NoopContext,
                    te = this.params.map(function(ie, ke) {
                        return !ie.isOpt && !U[ke](void 0, H)
                    }),
                    ce = function(ie, ke) {
                        if (!Array.isArray(ie)) return ke.fail(null, "is not an array", 0);
                        for (var Ce = 0; Ce < U.length; Ce++) {
                            var he = O.params[Ce];
                            if (ie[Ce] === void 0) {
                                if (te[Ce]) return ke.fail(he.name, "is missing", 1)
                            } else {
                                var we = U[Ce](ie[Ce], ke);
                                if (!we) return ke.fail(he.name, null, 1)
                            }
                        }
                        return !0
                    };
                return L ? function(ie, ke) {
                    return ce(ie, ke) ? ie.length <= U.length ? !0 : ke.fail(U.length, "is extraneous", 2) : !1
                } : ce
            }, S
        }(o);
        e.TParamList = Ae;
        var Q = function(E) {
            n(S, E);

            function S(P, L) {
                var O = E.call(this) || this;
                return O.validator = P, O.message = L, O
            }
            return S.prototype.getChecker = function(P, L) {
                var O = this;
                return function(U, H) {
                    return O.validator(U) ? !0 : H.fail(null, O.message, 0)
                }
            }, S
        }(o);
        e.BasicType = Q, e.basicTypes = {
            any: new Q(function(E) {
                return !0
            }, "is invalid"),
            number: new Q(function(E) {
                return typeof E == "number"
            }, "is not a number"),
            object: new Q(function(E) {
                return typeof E == "object" && E
            }, "is not an object"),
            boolean: new Q(function(E) {
                return typeof E == "boolean"
            }, "is not a boolean"),
            string: new Q(function(E) {
                return typeof E == "string"
            }, "is not a string"),
            symbol: new Q(function(E) {
                return typeof E == "symbol"
            }, "is not a symbol"),
            void: new Q(function(E) {
                return E == null
            }, "is not void"),
            undefined: new Q(function(E) {
                return E === void 0
            }, "is not undefined"),
            null: new Q(function(E) {
                return E === null
            }, "is not null"),
            never: new Q(function(E) {
                return !1
            }, "is unexpected"),
            Date: new Q(ye("[object Date]"), "is not a Date"),
            RegExp: new Q(ye("[object RegExp]"), "is not a RegExp")
        };
        var He = Object.prototype.toString;

        function ye(E) {
            return function(S) {
                return typeof S == "object" && S && He.call(S) === E
            }
        }
        typeof Jt < "u" && (e.basicTypes.Buffer = new Q(function(E) {
            return Jt.isBuffer(E)
        }, "is not a Buffer"));
        for (var Se = function(E) {
                e.basicTypes[E.name] = new Q(function(S) {
                    return S instanceof E
                }, "is not a " + E.name)
            }, Ie = 0, Ne = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ArrayBuffer]; Ie < Ne.length; Ie++) {
            var De = Ne[Ie];
            Se(De)
        }
    }(Et)), Et
}
var As;

function X1() {
    return As || (As = 1, function(e) {
        var n = It && It.__spreadArrays || function() {
            for (var h = 0, u = 0, g = arguments.length; u < g; u++) h += arguments[u].length;
            for (var d = Array(h), x = 0, u = 0; u < g; u++)
                for (var N = arguments[u], y = 0, k = N.length; y < k; y++, x++) d[x] = N[y];
            return d
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Checker = e.createCheckers = void 0;
        var r = Ts(),
            o = xr(),
            a = Ts();
        Object.defineProperty(e, "TArray", {
            enumerable: !0,
            get: function() {
                return a.TArray
            }
        }), Object.defineProperty(e, "TEnumType", {
            enumerable: !0,
            get: function() {
                return a.TEnumType
            }
        }), Object.defineProperty(e, "TEnumLiteral", {
            enumerable: !0,
            get: function() {
                return a.TEnumLiteral
            }
        }), Object.defineProperty(e, "TFunc", {
            enumerable: !0,
            get: function() {
                return a.TFunc
            }
        }), Object.defineProperty(e, "TIface", {
            enumerable: !0,
            get: function() {
                return a.TIface
            }
        }), Object.defineProperty(e, "TLiteral", {
            enumerable: !0,
            get: function() {
                return a.TLiteral
            }
        }), Object.defineProperty(e, "TName", {
            enumerable: !0,
            get: function() {
                return a.TName
            }
        }), Object.defineProperty(e, "TOptional", {
            enumerable: !0,
            get: function() {
                return a.TOptional
            }
        }), Object.defineProperty(e, "TParam", {
            enumerable: !0,
            get: function() {
                return a.TParam
            }
        }), Object.defineProperty(e, "TParamList", {
            enumerable: !0,
            get: function() {
                return a.TParamList
            }
        }), Object.defineProperty(e, "TProp", {
            enumerable: !0,
            get: function() {
                return a.TProp
            }
        }), Object.defineProperty(e, "TTuple", {
            enumerable: !0,
            get: function() {
                return a.TTuple
            }
        }), Object.defineProperty(e, "TType", {
            enumerable: !0,
            get: function() {
                return a.TType
            }
        }), Object.defineProperty(e, "TUnion", {
            enumerable: !0,
            get: function() {
                return a.TUnion
            }
        }), Object.defineProperty(e, "TIntersection", {
            enumerable: !0,
            get: function() {
                return a.TIntersection
            }
        }), Object.defineProperty(e, "array", {
            enumerable: !0,
            get: function() {
                return a.array
            }
        }), Object.defineProperty(e, "enumlit", {
            enumerable: !0,
            get: function() {
                return a.enumlit
            }
        }), Object.defineProperty(e, "enumtype", {
            enumerable: !0,
            get: function() {
                return a.enumtype
            }
        }), Object.defineProperty(e, "func", {
            enumerable: !0,
            get: function() {
                return a.func
            }
        }), Object.defineProperty(e, "iface", {
            enumerable: !0,
            get: function() {
                return a.iface
            }
        }), Object.defineProperty(e, "lit", {
            enumerable: !0,
            get: function() {
                return a.lit
            }
        }), Object.defineProperty(e, "name", {
            enumerable: !0,
            get: function() {
                return a.name
            }
        }), Object.defineProperty(e, "opt", {
            enumerable: !0,
            get: function() {
                return a.opt
            }
        }), Object.defineProperty(e, "param", {
            enumerable: !0,
            get: function() {
                return a.param
            }
        }), Object.defineProperty(e, "tuple", {
            enumerable: !0,
            get: function() {
                return a.tuple
            }
        }), Object.defineProperty(e, "union", {
            enumerable: !0,
            get: function() {
                return a.union
            }
        }), Object.defineProperty(e, "intersection", {
            enumerable: !0,
            get: function() {
                return a.intersection
            }
        }), Object.defineProperty(e, "BasicType", {
            enumerable: !0,
            get: function() {
                return a.BasicType
            }
        });
        var i = xr();
        Object.defineProperty(e, "VError", {
            enumerable: !0,
            get: function() {
                return i.VError
            }
        });

        function c() {
            for (var h = [], u = 0; u < arguments.length; u++) h[u] = arguments[u];
            for (var g = Object.assign.apply(Object, n([{}, r.basicTypes], h)), d = {}, x = 0, N = h; x < N.length; x++)
                for (var y = N[x], k = 0, w = Object.keys(y); k < w.length; k++) {
                    var C = w[k];
                    d[C] = new f(g, y[C])
                }
            return d
        }
        e.createCheckers = c;
        var f = function() {
            function h(u, g, d) {
                if (d === void 0 && (d = "value"), this.suite = u, this.ttype = g, this._path = d, this.props = new Map, g instanceof r.TIface)
                    for (var x = 0, N = g.props; x < N.length; x++) {
                        var y = N[x];
                        this.props.set(y.name, y.ttype)
                    }
                this.checkerPlain = this.ttype.getChecker(u, !1), this.checkerStrict = this.ttype.getChecker(u, !0)
            }
            return h.prototype.setReportedPath = function(u) {
                this._path = u
            }, h.prototype.check = function(u) {
                return this._doCheck(this.checkerPlain, u)
            }, h.prototype.test = function(u) {
                return this.checkerPlain(u, new o.NoopContext)
            }, h.prototype.validate = function(u) {
                return this._doValidate(this.checkerPlain, u)
            }, h.prototype.strictCheck = function(u) {
                return this._doCheck(this.checkerStrict, u)
            }, h.prototype.strictTest = function(u) {
                return this.checkerStrict(u, new o.NoopContext)
            }, h.prototype.strictValidate = function(u) {
                return this._doValidate(this.checkerStrict, u)
            }, h.prototype.getProp = function(u) {
                var g = this.props.get(u);
                if (!g) throw new Error("Type has no property " + u);
                return new h(this.suite, g, this._path + "." + u)
            }, h.prototype.methodArgs = function(u) {
                var g = this._getMethod(u);
                return new h(this.suite, g.paramList)
            }, h.prototype.methodResult = function(u) {
                var g = this._getMethod(u);
                return new h(this.suite, g.result)
            }, h.prototype.getArgs = function() {
                if (!(this.ttype instanceof r.TFunc)) throw new Error("getArgs() applied to non-function");
                return new h(this.suite, this.ttype.paramList)
            }, h.prototype.getResult = function() {
                if (!(this.ttype instanceof r.TFunc)) throw new Error("getResult() applied to non-function");
                return new h(this.suite, this.ttype.result)
            }, h.prototype.getType = function() {
                return this.ttype
            }, h.prototype._doCheck = function(u, g) {
                var d = new o.NoopContext;
                if (!u(g, d)) {
                    var x = new o.DetailContext;
                    throw u(g, x), x.getError(this._path)
                }
            }, h.prototype._doValidate = function(u, g) {
                var d = new o.NoopContext;
                if (u(g, d)) return null;
                var x = new o.DetailContext;
                return u(g, x), x.getErrorDetail(this._path)
            }, h.prototype._getMethod = function(u) {
                var g = this.props.get(u);
                if (!g) throw new Error("Type has no property " + u);
                if (!(g instanceof r.TFunc)) throw new Error("Property " + u + " is not a method");
                return g
            }, h
        }();
        e.Checker = f
    }(It)), It
}
var ae = X1();
const Z1 = ae.union(ae.lit("jsx"), ae.lit("typescript"), ae.lit("flow"), ae.lit("imports"), ae.lit("react-hot-loader"), ae.lit("jest")),
    Y1 = ae.iface([], {
        compiledFilename: "string"
    }),
    K1 = ae.iface([], {
        transforms: ae.array("Transform"),
        disableESTransforms: ae.opt("boolean"),
        jsxRuntime: ae.opt(ae.union(ae.lit("classic"), ae.lit("automatic"), ae.lit("preserve"))),
        production: ae.opt("boolean"),
        jsxImportSource: ae.opt("string"),
        jsxPragma: ae.opt("string"),
        jsxFragmentPragma: ae.opt("string"),
        keepUnusedImports: ae.opt("boolean"),
        preserveDynamicImport: ae.opt("boolean"),
        injectCreateRequireForImportRequire: ae.opt("boolean"),
        enableLegacyTypeScriptModuleInterop: ae.opt("boolean"),
        enableLegacyBabel5ModuleInterop: ae.opt("boolean"),
        sourceMapOptions: ae.opt("SourceMapOptions"),
        filePath: ae.opt("string")
    }),
    J1 = {
        Transform: Z1,
        SourceMapOptions: Y1,
        Options: K1
    },
    {
        Options: Q1
    } = ae.createCheckers(J1);

function el(e) {
    Q1.strictCheck(e)
}

function xo() {
    I(), _e(!1)
}

function wo(e) {
    I(), mn(e)
}

function nt(e) {
    q(), jr(e)
}

function tn() {
    q(), s.tokens[s.tokens.length - 1].identifierRole = $.ImportDeclaration
}

function jr(e) {
    let n;
    s.scopeDepth === 0 ? n = $.TopLevelDeclaration : e ? n = $.BlockScopedDeclaration : n = $.FunctionScopedDeclaration, s.tokens[s.tokens.length - 1].identifierRole = n
}

function mn(e) {
    switch (s.type) {
        case t._this: {
            const n = Z(0);
            I(), W(n);
            return
        }
        case t._yield:
        case t.name: {
            s.type = t.name, nt(e);
            return
        }
        case t.bracketL: {
            I(), Br(t.bracketR, e, !0);
            return
        }
        case t.braceL:
            Zr(!0, e);
            return;
        default:
            V()
    }
}

function Br(e, n, r = !1, o = !1, a = 0) {
    let i = !0,
        c = !1;
    const f = s.tokens.length;
    for (; !_(e) && !s.error;)
        if (i ? i = !1 : (v(t.comma), s.tokens[s.tokens.length - 1].contextId = a, !c && s.tokens[f].isType && (s.tokens[s.tokens.length - 1].isType = !0, c = !0)), !(r && l(t.comma))) {
            if (_(e)) break;
            if (l(t.ellipsis)) {
                wo(n), vo(), _(t.comma), v(e);
                break
            } else tl(o, n)
        }
}

function tl(e, n) {
    e && $r([p._public, p._protected, p._private, p._readonly, p._override]), nn(n), vo(), nn(n, !0)
}

function vo() {
    ne ? bu() : J && cc()
}

function nn(e, n = !1) {
    if (n || mn(e), !_(t.eq)) return;
    const r = s.tokens.length - 1;
    _e(), s.tokens[r].rhsEndIndex = s.tokens.length
}

function wr() {
    return l(t.name)
}

function nl() {
    return l(t.name) || !!(s.type & t.IS_KEYWORD) || l(t.string) || l(t.num) || l(t.bigint) || l(t.decimal)
}

function Io() {
    const e = s.snapshot();
    return I(), (l(t.bracketL) || l(t.braceL) || l(t.star) || l(t.ellipsis) || l(t.hash) || nl()) && !Te() ? !0 : (s.restoreFromSnapshot(e), !1)
}

function $r(e) {
    for (; Eo(e) !== null;);
}

function Eo(e) {
    if (!l(t.name)) return null;
    const n = s.contextualKeyword;
    if (e.indexOf(n) !== -1 && Io()) {
        switch (n) {
            case p._readonly:
                s.tokens[s.tokens.length - 1].type = t._readonly;
                break;
            case p._abstract:
                s.tokens[s.tokens.length - 1].type = t._abstract;
                break;
            case p._static:
                s.tokens[s.tokens.length - 1].type = t._static;
                break;
            case p._public:
                s.tokens[s.tokens.length - 1].type = t._public;
                break;
            case p._private:
                s.tokens[s.tokens.length - 1].type = t._private;
                break;
            case p._protected:
                s.tokens[s.tokens.length - 1].type = t._protected;
                break;
            case p._override:
                s.tokens[s.tokens.length - 1].type = t._override;
                break;
            case p._declare:
                s.tokens[s.tokens.length - 1].type = t._declare;
                break
        }
        return n
    }
    return null
}

function Mt() {
    for (q(); _(t.dot);) q()
}

function rl() {
    Mt(), !Te() && l(t.lessThan) && bt()
}

function sl() {
    I(), qt()
}

function ol() {
    I()
}

function al() {
    v(t._typeof), l(t._import) ? To() : Mt(), !Te() && l(t.lessThan) && bt()
}

function To() {
    v(t._import), v(t.parenL), v(t.string), v(t.parenR), _(t.dot) && Mt(), l(t.lessThan) && bt()
}

function il() {
    _(t._const);
    const e = _(t._in),
        n = me(p._out);
    _(t._const), (e || n) && !l(t.name) ? s.tokens[s.tokens.length - 1].type = t.name : q(), _(t._extends) && pe(), _(t.eq) && pe()
}

function pt() {
    l(t.lessThan) && gn()
}

function gn() {
    const e = Z(0);
    for (l(t.lessThan) || l(t.typeParameterStart) ? I() : V(); !_(t.greaterThan) && !s.error;) il(), _(t.comma);
    W(e)
}

function Mr(e) {
    const n = e === t.arrow;
    pt(), v(t.parenL), s.scopeDepth++, ll(!1), s.scopeDepth--, (n || l(e)) && Lt(e)
}

function ll(e) {
    Br(t.parenR, e)
}

function rn() {
    _(t.comma) || le()
}

function Ss() {
    Mr(t.colon), rn()
}

function cl() {
    const e = s.snapshot();
    I();
    const n = _(t.name) && l(t.colon);
    return s.restoreFromSnapshot(e), n
}

function Ao() {
    if (!(l(t.bracketL) && cl())) return !1;
    const e = Z(0);
    return v(t.bracketL), q(), qt(), v(t.bracketR), kt(), rn(), W(e), !0
}

function Ns(e) {
    _(t.question), !e && (l(t.parenL) || l(t.lessThan)) ? (Mr(t.colon), rn()) : (kt(), rn())
}

function ul() {
    if (l(t.parenL) || l(t.lessThan)) {
        Ss();
        return
    }
    if (l(t._new)) {
        I(), l(t.parenL) || l(t.lessThan) ? Ss() : Ns(!1);
        return
    }
    const e = !!Eo([p._readonly]);
    Ao() || ((j(p._get) || j(p._set)) && Io(), Ft(-1), Ns(e))
}

function pl() {
    So()
}

function So() {
    for (v(t.braceL); !_(t.braceR) && !s.error;) ul()
}

function fl() {
    const e = s.snapshot(),
        n = hl();
    return s.restoreFromSnapshot(e), n
}

function hl() {
    return I(), _(t.plus) || _(t.minus) ? j(p._readonly) : (j(p._readonly) && I(), !l(t.bracketL) || (I(), !wr()) ? !1 : (I(), l(t._in)))
}

function dl() {
    q(), v(t._in), pe()
}

function ml() {
    v(t.braceL), l(t.plus) || l(t.minus) ? (I(), de(p._readonly)) : me(p._readonly), v(t.bracketL), dl(), me(p._as) && pe(), v(t.bracketR), l(t.plus) || l(t.minus) ? (I(), v(t.question)) : _(t.question), Nl(), le(), v(t.braceR)
}

function gl() {
    for (v(t.bracketL); !_(t.bracketR) && !s.error;) yl(), _(t.comma)
}

function yl() {
    _(t.ellipsis) ? pe() : (pe(), _(t.question)), _(t.colon) && pe()
}

function kl() {
    v(t.parenL), pe(), v(t.parenR)
}

function bl() {
    for (Je(), Je(); !l(t.backQuote) && !s.error;) v(t.dollarBraceL), pe(), Je(), Je();
    I()
}
var Qe;
(function(e) {
    e[e.TSFunctionType = 0] = "TSFunctionType";
    const r = 1;
    e[e.TSConstructorType = r] = "TSConstructorType";
    const o = r + 1;
    e[e.TSAbstractConstructorType = o] = "TSAbstractConstructorType"
})(Qe || (Qe = {}));

function yr(e) {
    e === Qe.TSAbstractConstructorType && de(p._abstract), (e === Qe.TSConstructorType || e === Qe.TSAbstractConstructorType) && v(t._new);
    const n = s.inDisallowConditionalTypesContext;
    s.inDisallowConditionalTypesContext = !1, Mr(t.arrow), s.inDisallowConditionalTypesContext = n
}

function _l() {
    switch (s.type) {
        case t.name:
            rl();
            return;
        case t._void:
        case t._null:
            I();
            return;
        case t.string:
        case t.num:
        case t.bigint:
        case t.decimal:
        case t._true:
        case t._false:
            yt();
            return;
        case t.minus:
            I(), yt();
            return;
        case t._this: {
            ol(), j(p._is) && !Te() && sl();
            return
        }
        case t._typeof:
            al();
            return;
        case t._import:
            To();
            return;
        case t.braceL:
            fl() ? ml() : pl();
            return;
        case t.bracketL:
            gl();
            return;
        case t.parenL:
            kl();
            return;
        case t.backQuote:
            bl();
            return;
        default:
            if (s.type & t.IS_KEYWORD) {
                I(), s.tokens[s.tokens.length - 1].type = t.name;
                return
            }
            break
    }
    V()
}

function xl() {
    for (_l(); !Te() && _(t.bracketL);) _(t.bracketR) || (pe(), v(t.bracketR))
}

function wl() {
    if (de(p._infer), q(), l(t._extends)) {
        const e = s.snapshot();
        v(t._extends);
        const n = s.inDisallowConditionalTypesContext;
        s.inDisallowConditionalTypesContext = !0, pe(), s.inDisallowConditionalTypesContext = n, (s.error || !s.inDisallowConditionalTypesContext && l(t.question)) && s.restoreFromSnapshot(e)
    }
}

function vr() {
    if (j(p._keyof) || j(p._unique) || j(p._readonly)) I(), vr();
    else if (j(p._infer)) wl();
    else {
        const e = s.inDisallowConditionalTypesContext;
        s.inDisallowConditionalTypesContext = !1, xl(), s.inDisallowConditionalTypesContext = e
    }
}

function Cs() {
    if (_(t.bitwiseAND), vr(), l(t.bitwiseAND))
        for (; _(t.bitwiseAND);) vr()
}

function vl() {
    if (_(t.bitwiseOR), Cs(), l(t.bitwiseOR))
        for (; _(t.bitwiseOR);) Cs()
}

function Il() {
    return l(t.lessThan) ? !0 : l(t.parenL) && Tl()
}

function El() {
    if (l(t.name) || l(t._this)) return I(), !0;
    if (l(t.braceL) || l(t.bracketL)) {
        let e = 1;
        for (I(); e > 0 && !s.error;) l(t.braceL) || l(t.bracketL) ? e++ : (l(t.braceR) || l(t.bracketR)) && e--, I();
        return !0
    }
    return !1
}

function Tl() {
    const e = s.snapshot(),
        n = Al();
    return s.restoreFromSnapshot(e), n
}

function Al() {
    return I(), !!(l(t.parenR) || l(t.ellipsis) || El() && (l(t.colon) || l(t.comma) || l(t.question) || l(t.eq) || l(t.parenR) && (I(), l(t.arrow))))
}

function Lt(e) {
    const n = Z(0);
    v(e), Cl() || pe(), W(n)
}

function Sl() {
    l(t.colon) && Lt(t.colon)
}

function kt() {
    l(t.colon) && qt()
}

function Nl() {
    _(t.colon) && pe()
}

function Cl() {
    const e = s.snapshot();
    return j(p._asserts) ? (I(), me(p._is) ? (pe(), !0) : wr() || l(t._this) ? (I(), me(p._is) && pe(), !0) : (s.restoreFromSnapshot(e), !1)) : wr() || l(t._this) ? (I(), j(p._is) && !Te() ? (I(), pe(), !0) : (s.restoreFromSnapshot(e), !1)) : !1
}

function qt() {
    const e = Z(0);
    v(t.colon), pe(), W(e)
}

function pe() {
    if (Rs(), s.inDisallowConditionalTypesContext || Te() || !_(t._extends)) return;
    const e = s.inDisallowConditionalTypesContext;
    s.inDisallowConditionalTypesContext = !0, Rs(), s.inDisallowConditionalTypesContext = e, v(t.question), pe(), v(t.colon), pe()
}

function Rl() {
    return j(p._abstract) && ue() === t._new
}

function Rs() {
    if (Il()) {
        yr(Qe.TSFunctionType);
        return
    }
    if (l(t._new)) {
        yr(Qe.TSConstructorType);
        return
    } else if (Rl()) {
        yr(Qe.TSAbstractConstructorType);
        return
    }
    vl()
}

function Pl() {
    const e = Z(1);
    pe(), v(t.greaterThan), W(e), Ut()
}

function Ll() {
    if (_(t.jsxTagStart)) {
        s.tokens[s.tokens.length - 1].type = t.typeParameterStart;
        const e = Z(1);
        for (; !l(t.greaterThan) && !s.error;) pe(), _(t.comma);
        Be(), W(e)
    }
}

function No() {
    for (; !l(t.braceL) && !s.error;) Fl(), _(t.comma)
}

function Fl() {
    Mt(), l(t.lessThan) && bt()
}

function Dl() {
    nt(!1), pt(), _(t._extends) && No(), So()
}

function Ol() {
    nt(!1), pt(), v(t.eq), pe(), le()
}

function jl() {
    if (l(t.string) ? yt() : q(), _(t.eq)) {
        const e = s.tokens.length - 1;
        _e(), s.tokens[e].rhsEndIndex = s.tokens.length
    }
}

function qr() {
    for (nt(!1), v(t.braceL); !_(t.braceR) && !s.error;) jl(), _(t.comma)
}

function Ur() {
    v(t.braceL), _n(t.braceR)
}

function Ir() {
    nt(!1), _(t.dot) ? Ir() : Ur()
}

function Co() {
    j(p._global) ? q() : l(t.string) ? Ke() : V(), l(t.braceL) ? Ur() : le()
}

function Er() {
    tn(), v(t.eq), $l(), le()
}

function Bl() {
    return j(p._require) && ue() === t.parenL
}

function $l() {
    Bl() ? Ml() : Mt()
}

function Ml() {
    de(p._require), v(t.parenL), l(t.string) || V(), yt(), v(t.parenR)
}

function ql() {
    if (Ge()) return !1;
    switch (s.type) {
        case t._function: {
            const e = Z(1);
            I();
            const n = s.start;
            return ct(n, !0), W(e), !0
        }
        case t._class: {
            const e = Z(1);
            return ut(!0, !1), W(e), !0
        }
        case t._const:
            if (l(t._const) && Fr(p._enum)) {
                const e = Z(1);
                return v(t._const), de(p._enum), s.tokens[s.tokens.length - 1].type = t._enum, qr(), W(e), !0
            }
        case t._var:
        case t._let: {
            const e = Z(1);
            return Yt(s.type !== t._var), W(e), !0
        }
        case t.name: {
            const e = Z(1),
                n = s.contextualKeyword;
            let r = !1;
            return n === p._global ? (Co(), r = !0) : r = yn(n, !0), W(e), r
        }
        default:
            return !1
    }
}

function Ps() {
    return yn(s.contextualKeyword, !0)
}

function Ul(e) {
    switch (e) {
        case p._declare: {
            const n = s.tokens.length - 1;
            if (ql()) return s.tokens[n].type = t._declare, !0;
            break
        }
        case p._global:
            if (l(t.braceL)) return Ur(), !0;
            break;
        default:
            return yn(e, !1)
    }
    return !1
}

function yn(e, n) {
    switch (e) {
        case p._abstract:
            if (mt(n) && l(t._class)) return s.tokens[s.tokens.length - 1].type = t._abstract, ut(!0, !1), !0;
            break;
        case p._enum:
            if (mt(n) && l(t.name)) return s.tokens[s.tokens.length - 1].type = t._enum, qr(), !0;
            break;
        case p._interface:
            if (mt(n) && l(t.name)) {
                const r = Z(n ? 2 : 1);
                return Dl(), W(r), !0
            }
            break;
        case p._module:
            if (mt(n)) {
                if (l(t.string)) {
                    const r = Z(n ? 2 : 1);
                    return Co(), W(r), !0
                } else if (l(t.name)) {
                    const r = Z(n ? 2 : 1);
                    return Ir(), W(r), !0
                }
            }
            break;
        case p._namespace:
            if (mt(n) && l(t.name)) {
                const r = Z(n ? 2 : 1);
                return Ir(), W(r), !0
            }
            break;
        case p._type:
            if (mt(n) && l(t.name)) {
                const r = Z(n ? 2 : 1);
                return Ol(), W(r), !0
            }
            break
    }
    return !1
}

function mt(e) {
    return e ? (I(), !0) : !Ge()
}

function zl() {
    const e = s.snapshot();
    return gn(), _t(), Sl(), v(t.arrow), s.error ? (s.restoreFromSnapshot(e), !1) : (zt(!0), !0)
}

function zr() {
    s.type === t.bitShiftL && (s.pos -= 1, G(t.lessThan)), bt()
}

function bt() {
    const e = Z(0);
    for (v(t.lessThan); !l(t.greaterThan) && !s.error;) pe(), _(t.comma);
    e ? (v(t.greaterThan), W(e)) : (W(e), po(), v(t.greaterThan), s.tokens[s.tokens.length - 1].isType = !0)
}

function Ro() {
    if (l(t.name)) switch (s.contextualKeyword) {
        case p._abstract:
        case p._declare:
        case p._enum:
        case p._interface:
        case p._module:
        case p._namespace:
        case p._type:
            return !0
    }
    return !1
}

function Hl(e, n) {
    if (l(t.colon) && Lt(t.colon), !l(t.braceL) && Ge()) {
        let r = s.tokens.length - 1;
        for (; r >= 0 && (s.tokens[r].start >= e || s.tokens[r].type === t._default || s.tokens[r].type === t._export);) s.tokens[r].isType = !0, r--;
        return
    }
    zt(!1, n)
}

function Gl(e, n, r) {
    if (!Te() && _(t.bang)) {
        s.tokens[s.tokens.length - 1].type = t.nonNullAssertion;
        return
    }
    if (l(t.lessThan) || l(t.bitShiftL)) {
        const o = s.snapshot();
        if (!n && $o() && zl()) return;
        if (zr(), !n && _(t.parenL) ? (s.tokens[s.tokens.length - 1].subscriptStartIndex = e, et()) : l(t.backQuote) ? Xr() : (s.type === t.greaterThan || s.type !== t.parenL && s.type & t.IS_EXPRESSION_START && !Te()) && V(), s.error) s.restoreFromSnapshot(o);
        else return
    } else !n && l(t.questionDot) && ue() === t.lessThan && (I(), s.tokens[e].isOptionalChainStart = !0, s.tokens[s.tokens.length - 1].subscriptStartIndex = e, bt(), v(t.parenL), et());
    Gr(e, n, r)
}

function Vl() {
    if (_(t._import)) return j(p._type) && ue() !== t.eq && de(p._type), Er(), !0;
    if (_(t.eq)) return be(), le(), !0;
    if (me(p._as)) return de(p._namespace), q(), le(), !0;
    if (j(p._type)) {
        const e = ue();
        (e === t.braceL || e === t.star) && I()
    }
    return !1
}

function Wl() {
    if (q(), l(t.comma) || l(t.braceR)) {
        s.tokens[s.tokens.length - 1].identifierRole = $.ImportDeclaration;
        return
    }
    if (q(), l(t.comma) || l(t.braceR)) {
        s.tokens[s.tokens.length - 1].identifierRole = $.ImportDeclaration, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0;
        return
    }
    if (q(), l(t.comma) || l(t.braceR)) {
        s.tokens[s.tokens.length - 3].identifierRole = $.ImportAccess, s.tokens[s.tokens.length - 1].identifierRole = $.ImportDeclaration;
        return
    }
    q(), s.tokens[s.tokens.length - 3].identifierRole = $.ImportAccess, s.tokens[s.tokens.length - 1].identifierRole = $.ImportDeclaration, s.tokens[s.tokens.length - 4].isType = !0, s.tokens[s.tokens.length - 3].isType = !0, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0
}

function Xl() {
    if (q(), l(t.comma) || l(t.braceR)) {
        s.tokens[s.tokens.length - 1].identifierRole = $.ExportAccess;
        return
    }
    if (q(), l(t.comma) || l(t.braceR)) {
        s.tokens[s.tokens.length - 1].identifierRole = $.ExportAccess, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0;
        return
    }
    if (q(), l(t.comma) || l(t.braceR)) {
        s.tokens[s.tokens.length - 3].identifierRole = $.ExportAccess;
        return
    }
    q(), s.tokens[s.tokens.length - 3].identifierRole = $.ExportAccess, s.tokens[s.tokens.length - 4].isType = !0, s.tokens[s.tokens.length - 3].isType = !0, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0
}

function Zl() {
    if (j(p._abstract) && ue() === t._class) return s.type = t._abstract, I(), ut(!0, !0), !0;
    if (j(p._interface)) {
        const e = Z(2);
        return yn(p._interface, !0), W(e), !0
    }
    return !1
}

function Yl() {
    if (s.type === t._const) {
        const e = $t();
        if (e.type === t.name && e.contextualKeyword === p._enum) return v(t._const), de(p._enum), s.tokens[s.tokens.length - 1].type = t._enum, qr(), !0
    }
    return !1
}

function Kl(e) {
    const n = s.tokens.length;
    $r([p._abstract, p._readonly, p._declare, p._static, p._override]);
    const r = s.tokens.length;
    if (Ao()) {
        const a = e ? n - 1 : n;
        for (let i = a; i < r; i++) s.tokens[i].isType = !0;
        return !0
    }
    return !1
}

function Jl(e) {
    Ul(e) || le()
}

function Ql() {
    const e = me(p._declare);
    e && (s.tokens[s.tokens.length - 1].type = t._declare);
    let n = !1;
    if (l(t.name))
        if (e) {
            const r = Z(2);
            n = Ps(), W(r)
        } else n = Ps();
    if (!n)
        if (e) {
            const r = Z(2);
            Fe(!0), W(r)
        } else Fe(!0)
}

function ec(e) {
    if (e && (l(t.lessThan) || l(t.bitShiftL)) && zr(), me(p._implements)) {
        s.tokens[s.tokens.length - 1].type = t._implements;
        const n = Z(1);
        No(), W(n)
    }
}

function tc() {
    pt()
}

function nc() {
    pt()
}

function rc() {
    const e = Z(0);
    Te() || _(t.bang), kt(), W(e)
}

function sc() {
    l(t.colon) && qt()
}

function oc(e, n) {
    return hn ? ac(e, n) : ic(e, n)
}

function ac(e, n) {
    if (!l(t.lessThan)) return We(e, n);
    const r = s.snapshot();
    let o = We(e, n);
    if (s.error) s.restoreFromSnapshot(r);
    else return o;
    return s.type = t.typeParameterStart, gn(), o = We(e, n), o || V(), o
}

function ic(e, n) {
    if (!l(t.lessThan)) return We(e, n);
    const r = s.snapshot();
    gn();
    const o = We(e, n);
    if (o || V(), s.error) s.restoreFromSnapshot(r);
    else return o;
    return We(e, n)
}

function lc() {
    if (l(t.colon)) {
        const e = s.snapshot();
        Lt(t.colon), Le() && V(), l(t.arrow) || V(), s.error && s.restoreFromSnapshot(e)
    }
    return _(t.arrow)
}

function cc() {
    const e = Z(0);
    _(t.question), kt(), W(e)
}

function uc() {
    (l(t.lessThan) || l(t.bitShiftL)) && zr(), Ko()
}

function pc() {
    let e = !1,
        n = !1;
    for (;;) {
        if (s.pos >= F.length) {
            V("Unterminated JSX contents");
            return
        }
        const r = F.charCodeAt(s.pos);
        if (r === m.lessThan || r === m.leftCurlyBrace) {
            if (s.pos === s.start) {
                if (r === m.lessThan) {
                    s.pos++, G(t.jsxTagStart);
                    return
                }
                fo(r);
                return
            }
            G(e && !n ? t.jsxEmptyText : t.jsxText);
            return
        }
        r === m.lineFeed ? e = !0 : r !== m.space && r !== m.carriageReturn && r !== m.tab && (n = !0), s.pos++
    }
}

function fc(e) {
    for (s.pos++;;) {
        if (s.pos >= F.length) {
            V("Unterminated string constant");
            return
        }
        if (F.charCodeAt(s.pos) === e) {
            s.pos++;
            break
        }
        s.pos++
    }
    G(t.string)
}

function hc() {
    let e;
    do {
        if (s.pos > F.length) {
            V("Unexpectedly reached the end of input.");
            return
        }
        e = F.charCodeAt(++s.pos)
    } while (qe[e] || e === m.dash);
    G(t.jsxName)
}

function Tr() {
    Be()
}

function Po(e) {
    if (Tr(), !_(t.colon)) {
        s.tokens[s.tokens.length - 1].identifierRole = e;
        return
    }
    Tr()
}

function Lo() {
    const e = s.tokens.length;
    Po($.Access);
    let n = !1;
    for (; l(t.dot);) n = !0, Be(), Tr();
    if (!n) {
        const r = s.tokens[e],
            o = F.charCodeAt(r.start);
        o >= m.lowercaseA && o <= m.lowercaseZ && (r.identifierRole = null)
    }
}

function dc() {
    switch (s.type) {
        case t.braceL:
            I(), be(), Be();
            return;
        case t.jsxTagStart:
            Do(), Be();
            return;
        case t.string:
            Be();
            return;
        default:
            V("JSX value should be either an expression or a quoted JSX text")
    }
}

function mc() {
    v(t.ellipsis), be()
}

function gc(e) {
    if (l(t.jsxTagEnd)) return !1;
    Lo(), J && Ll();
    let n = !1;
    for (; !l(t.slash) && !l(t.jsxTagEnd) && !s.error;) {
        if (_(t.braceL)) {
            n = !0, v(t.ellipsis), _e(), Be();
            continue
        }
        n && s.end - s.start === 3 && F.charCodeAt(s.start) === m.lowercaseK && F.charCodeAt(s.start + 1) === m.lowercaseE && F.charCodeAt(s.start + 2) === m.lowercaseY && (s.tokens[e].jsxRole = Me.KeyAfterPropSpread), Po($.ObjectKey), l(t.eq) && (Be(), dc())
    }
    const r = l(t.slash);
    return r && Be(), r
}

function yc() {
    l(t.jsxTagEnd) || Lo()
}

function Fo() {
    const e = s.tokens.length - 1;
    s.tokens[e].jsxRole = Me.NoChildren;
    let n = 0;
    if (!gc(e))
        for (gt();;) switch (s.type) {
            case t.jsxTagStart:
                if (Be(), l(t.slash)) {
                    Be(), yc(), s.tokens[e].jsxRole !== Me.KeyAfterPropSpread && (n === 1 ? s.tokens[e].jsxRole = Me.OneChild : n > 1 && (s.tokens[e].jsxRole = Me.StaticChildren));
                    return
                }
                n++, Fo(), gt();
                break;
            case t.jsxText:
                n++, gt();
                break;
            case t.jsxEmptyText:
                gt();
                break;
            case t.braceL:
                I(), l(t.ellipsis) ? (mc(), gt(), n += 2) : (l(t.braceR) || (n++, be()), gt());
                break;
            default:
                V();
                return
        }
}

function Do() {
    Be(), Fo()
}

function Be() {
    s.tokens.push(new dn), co(), s.start = s.pos;
    const e = F.charCodeAt(s.pos);
    if (Bt[e]) hc();
    else if (e === m.quotationMark || e === m.apostrophe) fc(e);
    else switch (++s.pos, e) {
        case m.greaterThan:
            G(t.jsxTagEnd);
            break;
        case m.lessThan:
            G(t.jsxTagStart);
            break;
        case m.slash:
            G(t.slash);
            break;
        case m.equalsTo:
            G(t.eq);
            break;
        case m.leftCurlyBrace:
            G(t.braceL);
            break;
        case m.dot:
            G(t.dot);
            break;
        case m.colon:
            G(t.colon);
            break;
        default:
            V()
    }
}

function gt() {
    s.tokens.push(new dn), s.start = s.pos, pc()
}

function kc(e) {
    if (l(t.question)) {
        const n = ue();
        if (n === t.colon || n === t.comma || n === t.parenR) return
    }
    Oo(e)
}

function bc() {
    so(t.question), l(t.colon) && (J ? qt() : ne && ft())
}
class _c {
    constructor(n) {
        this.stop = n
    }
}

function be(e = !1) {
    if (_e(e), l(t.comma))
        for (; _(t.comma);) _e(e)
}

function _e(e = !1, n = !1) {
    return J ? oc(e, n) : ne ? Eu(e, n) : We(e, n)
}

function We(e, n) {
    if (l(t._yield)) return Oc(), !1;
    (l(t.parenL) || l(t.name) || l(t._yield)) && (s.potentialArrowAt = s.start);
    const r = xc(e);
    return n && Wr(), s.type & t.IS_ASSIGN ? (I(), _e(e), !1) : r
}

function xc(e) {
    return vc(e) ? !0 : (wc(e), !1)
}

function wc(e) {
    J || ne ? kc(e) : Oo(e)
}

function Oo(e) {
    _(t.question) && (_e(), v(t.colon), _e(e))
}

function vc(e) {
    const n = s.tokens.length;
    return Ut() ? !0 : (Xt(n, -1, e), !1)
}

function Xt(e, n, r) {
    if (J && (t._in & t.PRECEDENCE_MASK) > n && !Te() && (me(p._as) || me(p._satisfies))) {
        const a = Z(1);
        pe(), W(a), po(), Xt(e, n, r);
        return
    }
    const o = s.type & t.PRECEDENCE_MASK;
    if (o > 0 && (!r || !l(t._in)) && o > n) {
        const a = s.type;
        I(), a === t.nullishCoalescing && (s.tokens[s.tokens.length - 1].nullishStartIndex = e);
        const i = s.tokens.length;
        Ut(), Xt(i, a & t.IS_RIGHT_ASSOCIATIVE ? o - 1 : o, r), a === t.nullishCoalescing && (s.tokens[e].numNullishCoalesceStarts++, s.tokens[s.tokens.length - 1].numNullishCoalesceEnds++), Xt(e, n, r)
    }
}

function Ut() {
    if (J && !hn && _(t.lessThan)) return Pl(), !1;
    if (j(p._module) && ao() === m.leftCurlyBrace && !Qs()) return jc(), !1;
    if (s.type & t.IS_PREFIX) return I(), Ut(), !1;
    if (jo()) return !0;
    for (; s.type & t.IS_POSTFIX && !Le();) s.type === t.preIncDec && (s.type = t.postIncDec), I();
    return !1
}

function jo() {
    const e = s.tokens.length;
    return Ke() ? !0 : (Hr(e), s.tokens.length > e && s.tokens[e].isOptionalChainStart && (s.tokens[s.tokens.length - 1].isOptionalChainEnd = !0), !1)
}

function Hr(e, n = !1) {
    ne ? Au(e, n) : Bo(e, n)
}

function Bo(e, n = !1) {
    const r = new _c(!1);
    do Ic(e, n, r); while (!r.stop && !s.error)
}

function Ic(e, n, r) {
    J ? Gl(e, n, r) : ne ? iu(e, n, r) : Gr(e, n, r)
}

function Gr(e, n, r) {
    if (!n && _(t.doubleColon)) Vr(), r.stop = !0, Hr(e, n);
    else if (l(t.questionDot)) {
        if (s.tokens[e].isOptionalChainStart = !0, n && ue() === t.parenL) {
            r.stop = !0;
            return
        }
        I(), s.tokens[s.tokens.length - 1].subscriptStartIndex = e, _(t.bracketL) ? (be(), v(t.bracketR)) : _(t.parenL) ? et() : sn()
    } else if (_(t.dot)) s.tokens[s.tokens.length - 1].subscriptStartIndex = e, sn();
    else if (_(t.bracketL)) s.tokens[s.tokens.length - 1].subscriptStartIndex = e, be(), v(t.bracketR);
    else if (!n && l(t.parenL))
        if ($o()) {
            const o = s.snapshot(),
                a = s.tokens.length;
            I(), s.tokens[s.tokens.length - 1].subscriptStartIndex = e;
            const i = Rt();
            s.tokens[s.tokens.length - 1].contextId = i, et(), s.tokens[s.tokens.length - 1].contextId = i, Ec() && (s.restoreFromSnapshot(o), r.stop = !0, s.scopeDepth++, _t(), Tc(a))
        } else {
            I(), s.tokens[s.tokens.length - 1].subscriptStartIndex = e;
            const o = Rt();
            s.tokens[s.tokens.length - 1].contextId = o, et(), s.tokens[s.tokens.length - 1].contextId = o
        }
    else l(t.backQuote) ? Xr() : r.stop = !0
}

function $o() {
    return s.tokens[s.tokens.length - 1].contextualKeyword === p._async && !Le()
}

function et() {
    let e = !0;
    for (; !_(t.parenR) && !s.error;) {
        if (e) e = !1;
        else if (v(t.comma), _(t.parenR)) break;
        zo(!1)
    }
}

function Ec() {
    return l(t.colon) || l(t.arrow)
}

function Tc(e) {
    J ? sc() : ne && Iu(), v(t.arrow), Dt(e)
}

function Vr() {
    const e = s.tokens.length;
    Ke(), Hr(e, !0)
}

function Ke() {
    if (_(t.modulo)) return q(), !1;
    if (l(t.jsxText) || l(t.jsxEmptyText)) return yt(), !1;
    if (l(t.lessThan) && hn) return s.type = t.jsxTagStart, Do(), I(), !1;
    const e = s.potentialArrowAt === s.start;
    switch (s.type) {
        case t.slash:
        case t.assign:
            Yi();
        case t._super:
        case t._this:
        case t.regexp:
        case t.num:
        case t.bigint:
        case t.decimal:
        case t.string:
        case t._null:
        case t._true:
        case t._false:
            return I(), !1;
        case t._import:
            return I(), l(t.dot) && (s.tokens[s.tokens.length - 1].type = t.name, I(), q()), !1;
        case t.name: {
            const n = s.tokens.length,
                r = s.start,
                o = s.contextualKeyword;
            return q(), o === p._await ? (Dc(), !1) : o === p._async && l(t._function) && !Le() ? (I(), ct(r, !1), !1) : e && o === p._async && !Le() && l(t.name) ? (s.scopeDepth++, nt(!1), v(t.arrow), Dt(n), !0) : l(t._do) && !Le() ? (I(), tt(), !1) : e && !Le() && l(t.arrow) ? (s.scopeDepth++, jr(!1), v(t.arrow), Dt(n), !0) : (s.tokens[s.tokens.length - 1].identifierRole = $.Access, !1)
        }
        case t._do:
            return I(), tt(), !1;
        case t.parenL:
            return Mo(e);
        case t.bracketL:
            return I(), Uo(t.bracketR, !0), !1;
        case t.braceL:
            return Zr(!1, !1), !1;
        case t._function:
            return Ac(), !1;
        case t.at:
            ss();
        case t._class:
            return ut(!1), !1;
        case t._new:
            return Nc(), !1;
        case t.backQuote:
            return Xr(), !1;
        case t.doubleColon:
            return I(), Vr(), !1;
        case t.hash: {
            const n = ao();
            return Bt[n] || n === m.backslash ? sn() : I(), !1
        }
        default:
            return V(), !1
    }
}

function sn() {
    _(t.hash), q()
}

function Ac() {
    const e = s.start;
    q(), _(t.dot) && q(), ct(e, !1)
}

function yt() {
    I()
}

function kn() {
    v(t.parenL), be(), v(t.parenR)
}

function Mo(e) {
    const n = s.snapshot(),
        r = s.tokens.length;
    v(t.parenL);
    let o = !0;
    for (; !l(t.parenR) && !s.error;) {
        if (o) o = !1;
        else if (v(t.comma), l(t.parenR)) break;
        if (l(t.ellipsis)) {
            wo(!1), Wr();
            break
        } else _e(!1, !0)
    }
    return v(t.parenR), e && Sc() && Ar() ? (s.restoreFromSnapshot(n), s.scopeDepth++, _t(), Ar(), Dt(r), s.error ? (s.restoreFromSnapshot(n), Mo(!1), !1) : !0) : !1
}

function Sc() {
    return l(t.colon) || !Le()
}

function Ar() {
    return J ? lc() : ne ? Tu() : _(t.arrow)
}

function Wr() {
    (J || ne) && bc()
}

function Nc() {
    if (v(t._new), _(t.dot)) {
        q();
        return
    }
    Cc(), ne && lu(), _(t.parenL) && Uo(t.parenR)
}

function Cc() {
    Vr(), _(t.questionDot)
}

function Xr() {
    for (Je(), Je(); !l(t.backQuote) && !s.error;) v(t.dollarBraceL), be(), Je(), Je();
    I()
}

function Zr(e, n) {
    const r = Rt();
    let o = !0;
    for (I(), s.tokens[s.tokens.length - 1].contextId = r; !_(t.braceR) && !s.error;) {
        if (o) o = !1;
        else if (v(t.comma), _(t.braceR)) break;
        let a = !1;
        if (l(t.ellipsis)) {
            const i = s.tokens.length;
            if (xo(), e && (s.tokens.length === i + 2 && jr(n), _(t.braceR))) break;
            continue
        }
        e || (a = _(t.star)), !e && j(p._async) ? (a && V(), q(), l(t.colon) || l(t.parenL) || l(t.braceR) || l(t.eq) || l(t.comma) || (l(t.star) && (I(), a = !0), Ft(r))) : Ft(r), Fc(e, n, r)
    }
    s.tokens[s.tokens.length - 1].contextId = r
}

function Rc(e) {
    return !e && (l(t.string) || l(t.num) || l(t.bracketL) || l(t.name) || !!(s.type & t.IS_KEYWORD))
}

function Pc(e, n) {
    const r = s.start;
    return l(t.parenL) ? (e && V(), Sr(r, !1), !0) : Rc(e) ? (Ft(n), Sr(r, !1), !0) : !1
}

function Lc(e, n) {
    if (_(t.colon)) {
        e ? nn(n) : _e(!1);
        return
    }
    let r;
    e ? s.scopeDepth === 0 ? r = $.ObjectShorthandTopLevelDeclaration : n ? r = $.ObjectShorthandBlockScopedDeclaration : r = $.ObjectShorthandFunctionScopedDeclaration : r = $.ObjectShorthand, s.tokens[s.tokens.length - 1].identifierRole = r, nn(n, !0)
}

function Fc(e, n, r) {
    J ? tc() : ne && ku(), Pc(e, r) || Lc(e, n)
}

function Ft(e) {
    ne && rs(), _(t.bracketL) ? (s.tokens[s.tokens.length - 1].contextId = e, _e(), v(t.bracketR), s.tokens[s.tokens.length - 1].contextId = e) : (l(t.num) || l(t.string) || l(t.bigint) || l(t.decimal) ? Ke() : sn(), s.tokens[s.tokens.length - 1].identifierRole = $.ObjectKey, s.tokens[s.tokens.length - 1].contextId = e)
}

function Sr(e, n) {
    const r = Rt();
    s.scopeDepth++;
    const o = s.tokens.length;
    _t(n, r), qo(e, r);
    const i = s.tokens.length;
    s.scopes.push(new Xe(o, i, !0)), s.scopeDepth--
}

function Dt(e) {
    zt(!0);
    const n = s.tokens.length;
    s.scopes.push(new Xe(e, n, !0)), s.scopeDepth--
}

function qo(e, n = 0) {
    J ? Hl(e, n) : ne ? au(n) : zt(!1, n)
}

function zt(e, n = 0) {
    e && !l(t.braceL) ? _e() : tt(!0, n)
}

function Uo(e, n = !1) {
    let r = !0;
    for (; !_(e) && !s.error;) {
        if (r) r = !1;
        else if (v(t.comma), _(e)) break;
        zo(n)
    }
}

function zo(e) {
    e && l(t.comma) || (l(t.ellipsis) ? (xo(), Wr()) : l(t.question) ? I() : _e(!1, !0))
}

function q() {
    I(), s.tokens[s.tokens.length - 1].type = t.name
}

function Dc() {
    Ut()
}

function Oc() {
    I(), !l(t.semi) && !Le() && (_(t.star), _e())
}

function jc() {
    de(p._module), v(t.braceL), _n(t.braceR)
}

function Bc(e) {
    return (e.type === t.name || !!(e.type & t.IS_KEYWORD)) && e.contextualKeyword !== p._from
}

function Ze(e) {
    const n = Z(0);
    v(e || t.colon), Re(), W(n)
}

function Ls() {
    v(t.modulo), de(p._checks), _(t.parenL) && (be(), v(t.parenR))
}

function Yr() {
    const e = Z(0);
    v(t.colon), l(t.modulo) ? Ls() : (Re(), l(t.modulo) && Ls()), W(e)
}

function $c() {
    I(), Kr(!0)
}

function Mc() {
    I(), q(), l(t.lessThan) && ze(), v(t.parenL), Cr(), v(t.parenR), Yr(), le()
}

function Nr() {
    l(t._class) ? $c() : l(t._function) ? Mc() : l(t._var) ? qc() : me(p._module) ? _(t.dot) ? Hc() : Uc() : j(p._type) ? Gc() : j(p._opaque) ? Vc() : j(p._interface) ? Wc() : l(t._export) ? zc() : V()
}

function qc() {
    I(), Wo(), le()
}

function Uc() {
    for (l(t.string) ? Ke() : q(), v(t.braceL); !l(t.braceR) && !s.error;) l(t._import) ? (I(), ra()) : V();
    v(t.braceR)
}

function zc() {
    v(t._export), _(t._default) ? l(t._function) || l(t._class) ? Nr() : (Re(), le()) : l(t._var) || l(t._function) || l(t._class) || j(p._opaque) ? Nr() : l(t.star) || l(t.braceL) || j(p._interface) || j(p._type) || j(p._opaque) ? ta() : V()
}

function Hc() {
    de(p._exports), ft(), le()
}

function Gc() {
    I(), Qr()
}

function Vc() {
    I(), es(!0)
}

function Wc() {
    I(), Kr()
}

function Kr(e = !1) {
    if (bn(), l(t.lessThan) && ze(), _(t._extends))
        do Zt(); while (!e && _(t.comma));
    if (j(p._mixins)) {
        I();
        do Zt(); while (_(t.comma))
    }
    if (j(p._implements)) {
        I();
        do Zt(); while (_(t.comma))
    }
    on(e, !1, e)
}

function Zt() {
    Ho(!1), l(t.lessThan) && lt()
}

function Jr() {
    Kr()
}

function bn() {
    q()
}

function Qr() {
    bn(), l(t.lessThan) && ze(), Ze(t.eq), le()
}

function es(e) {
    de(p._type), bn(), l(t.lessThan) && ze(), l(t.colon) && Ze(t.colon), e || Ze(t.eq), le()
}

function Xc() {
    rs(), Wo(), _(t.eq) && Re()
}

function ze() {
    const e = Z(0);
    l(t.lessThan) || l(t.typeParameterStart) ? I() : V();
    do Xc(), l(t.greaterThan) || v(t.comma); while (!l(t.greaterThan) && !s.error);
    v(t.greaterThan), W(e)
}

function lt() {
    const e = Z(0);
    for (v(t.lessThan); !l(t.greaterThan) && !s.error;) Re(), l(t.greaterThan) || v(t.comma);
    v(t.greaterThan), W(e)
}

function Zc() {
    if (de(p._interface), _(t._extends))
        do Zt(); while (_(t.comma));
    on(!1, !1, !1)
}

function ts() {
    l(t.num) || l(t.string) ? Ke() : q()
}

function Yc() {
    ue() === t.colon ? (ts(), Ze()) : Re(), v(t.bracketR), Ze()
}

function Kc() {
    ts(), v(t.bracketR), v(t.bracketR), l(t.lessThan) || l(t.parenL) ? ns() : (_(t.question), Ze())
}

function ns() {
    for (l(t.lessThan) && ze(), v(t.parenL); !l(t.parenR) && !l(t.ellipsis) && !s.error;) an(), l(t.parenR) || v(t.comma);
    _(t.ellipsis) && an(), v(t.parenR), Ze()
}

function Jc() {
    ns()
}

function on(e, n, r) {
    let o;
    for (n && l(t.braceBarL) ? (v(t.braceBarL), o = t.braceBarR) : (v(t.braceL), o = t.braceR); !l(o) && !s.error;) {
        if (r && j(p._proto)) {
            const a = ue();
            a !== t.colon && a !== t.question && (I(), e = !1)
        }
        if (e && j(p._static)) {
            const a = ue();
            a !== t.colon && a !== t.question && I()
        }
        if (rs(), _(t.bracketL)) _(t.bracketL) ? Kc() : Yc();
        else if (l(t.parenL) || l(t.lessThan)) Jc();
        else {
            if (j(p._get) || j(p._set)) {
                const a = ue();
                (a === t.name || a === t.string || a === t.num) && I()
            }
            Qc()
        }
        eu()
    }
    v(o)
}

function Qc() {
    if (l(t.ellipsis)) {
        if (v(t.ellipsis), _(t.comma) || _(t.semi), l(t.braceR)) return;
        Re()
    } else ts(), l(t.lessThan) || l(t.parenL) ? ns() : (_(t.question), Ze())
}

function eu() {
    !_(t.semi) && !_(t.comma) && !l(t.braceR) && !l(t.braceBarR) && V()
}

function Ho(e) {
    for (e || q(); _(t.dot);) q()
}

function tu() {
    Ho(!0), l(t.lessThan) && lt()
}

function nu() {
    v(t._typeof), Go()
}

function ru() {
    for (v(t.bracketL); s.pos < F.length && !l(t.bracketR) && (Re(), !l(t.bracketR));) v(t.comma);
    v(t.bracketR)
}

function an() {
    const e = ue();
    e === t.colon || e === t.question ? (q(), _(t.question), Ze()) : Re()
}

function Cr() {
    for (; !l(t.parenR) && !l(t.ellipsis) && !s.error;) an(), l(t.parenR) || v(t.comma);
    _(t.ellipsis) && an()
}

function Go() {
    let e = !1;
    const n = s.noAnonFunctionType;
    switch (s.type) {
        case t.name: {
            if (j(p._interface)) {
                Zc();
                return
            }
            q(), tu();
            return
        }
        case t.braceL:
            on(!1, !1, !1);
            return;
        case t.braceBarL:
            on(!1, !0, !1);
            return;
        case t.bracketL:
            ru();
            return;
        case t.lessThan:
            ze(), v(t.parenL), Cr(), v(t.parenR), v(t.arrow), Re();
            return;
        case t.parenL:
            if (I(), !l(t.parenR) && !l(t.ellipsis))
                if (l(t.name)) {
                    const r = ue();
                    e = r !== t.question && r !== t.colon
                } else e = !0;
            if (e)
                if (s.noAnonFunctionType = !1, Re(), s.noAnonFunctionType = n, s.noAnonFunctionType || !(l(t.comma) || l(t.parenR) && ue() === t.arrow)) {
                    v(t.parenR);
                    return
                } else _(t.comma);
            Cr(), v(t.parenR), v(t.arrow), Re();
            return;
        case t.minus:
            I(), yt();
            return;
        case t.string:
        case t.num:
        case t._true:
        case t._false:
        case t._null:
        case t._this:
        case t._void:
        case t.star:
            I();
            return;
        default:
            if (s.type === t._typeof) {
                nu();
                return
            } else if (s.type & t.IS_KEYWORD) {
                I(), s.tokens[s.tokens.length - 1].type = t.name;
                return
            }
    }
    V()
}

function su() {
    for (Go(); !Le() && (l(t.bracketL) || l(t.questionDot));) _(t.questionDot), v(t.bracketL), _(t.bracketR) || (Re(), v(t.bracketR))
}

function Vo() {
    _(t.question) ? Vo() : su()
}

function Fs() {
    Vo(), !s.noAnonFunctionType && _(t.arrow) && Re()
}

function Ds() {
    for (_(t.bitwiseAND), Fs(); _(t.bitwiseAND);) Fs()
}

function ou() {
    for (_(t.bitwiseOR), Ds(); _(t.bitwiseOR);) Ds()
}

function Re() {
    ou()
}

function ft() {
    Ze()
}

function Wo() {
    q(), l(t.colon) && ft()
}

function rs() {
    (l(t.plus) || l(t.minus)) && (I(), s.tokens[s.tokens.length - 1].isType = !0)
}

function au(e) {
    l(t.colon) && Yr(), zt(!1, e)
}

function iu(e, n, r) {
    if (l(t.questionDot) && ue() === t.lessThan) {
        if (n) {
            r.stop = !0;
            return
        }
        I(), lt(), v(t.parenL), et();
        return
    } else if (!n && l(t.lessThan)) {
        const o = s.snapshot();
        if (lt(), v(t.parenL), et(), s.error) s.restoreFromSnapshot(o);
        else return
    }
    Gr(e, n, r)
}

function lu() {
    if (l(t.lessThan)) {
        const e = s.snapshot();
        lt(), s.error && s.restoreFromSnapshot(e)
    }
}

function cu() {
    if (l(t.name) && s.contextualKeyword === p._interface) {
        const e = Z(0);
        return I(), Jr(), W(e), !0
    } else if (j(p._enum)) return Xo(), !0;
    return !1
}

function uu() {
    return j(p._enum) ? (Xo(), !0) : !1
}

function pu(e) {
    if (e === p._declare) {
        if (l(t._class) || l(t.name) || l(t._function) || l(t._var) || l(t._export)) {
            const n = Z(1);
            Nr(), W(n)
        }
    } else if (l(t.name)) {
        if (e === p._interface) {
            const n = Z(1);
            Jr(), W(n)
        } else if (e === p._type) {
            const n = Z(1);
            Qr(), W(n)
        } else if (e === p._opaque) {
            const n = Z(1);
            es(!1), W(n)
        }
    }
    le()
}

function fu() {
    return j(p._type) || j(p._interface) || j(p._opaque) || j(p._enum)
}

function hu() {
    return l(t.name) && (s.contextualKeyword === p._type || s.contextualKeyword === p._interface || s.contextualKeyword === p._opaque || s.contextualKeyword === p._enum)
}

function du() {
    if (j(p._type)) {
        const e = Z(1);
        I(), l(t.braceL) ? (os(), Ot()) : Qr(), W(e)
    } else if (j(p._opaque)) {
        const e = Z(1);
        I(), es(!1), W(e)
    } else if (j(p._interface)) {
        const e = Z(1);
        I(), Jr(), W(e)
    } else Fe(!0)
}

function mu() {
    return l(t.star) || j(p._type) && ue() === t.star
}

function gu() {
    if (me(p._type)) {
        const e = Z(2);
        Rr(), W(e)
    } else Rr()
}

function yu(e) {
    if (e && l(t.lessThan) && lt(), j(p._implements)) {
        const n = Z(0);
        I(), s.tokens[s.tokens.length - 1].type = t._implements;
        do bn(), l(t.lessThan) && lt(); while (_(t.comma));
        W(n)
    }
}

function ku() {
    l(t.lessThan) && (ze(), l(t.parenL) || V())
}

function bu() {
    const e = Z(0);
    _(t.question), l(t.colon) && ft(), W(e)
}

function _u() {
    if (l(t._typeof) || j(p._type)) {
        const e = $t();
        (Bc(e) || e.type === t.braceL || e.type === t.star) && I()
    }
}

function xu() {
    const e = s.contextualKeyword === p._type || s.type === t._typeof;
    e ? I() : q(), j(p._as) && !Fr(p._as) ? (q(), e && !l(t.name) && !(s.type & t.IS_KEYWORD) || q()) : (e && (l(t.name) || s.type & t.IS_KEYWORD) && q(), me(p._as) && q())
}

function wu() {
    if (l(t.lessThan)) {
        const e = Z(0);
        ze(), W(e)
    }
}

function vu() {
    l(t.colon) && ft()
}

function Iu() {
    if (l(t.colon)) {
        const e = s.noAnonFunctionType;
        s.noAnonFunctionType = !0, ft(), s.noAnonFunctionType = e
    }
}

function Eu(e, n) {
    if (l(t.lessThan)) {
        const r = s.snapshot();
        let o = We(e, n);
        if (s.error) s.restoreFromSnapshot(r), s.type = t.typeParameterStart;
        else return o;
        const a = Z(0);
        if (ze(), W(a), o = We(e, n), o) return !0;
        V()
    }
    return We(e, n)
}

function Tu() {
    if (l(t.colon)) {
        const e = Z(0),
            n = s.snapshot(),
            r = s.noAnonFunctionType;
        s.noAnonFunctionType = !0, Yr(), s.noAnonFunctionType = r, Le() && V(), l(t.arrow) || V(), s.error && s.restoreFromSnapshot(n), W(e)
    }
    return _(t.arrow)
}

function Au(e, n = !1) {
    if (s.tokens[s.tokens.length - 1].contextualKeyword === p._async && l(t.lessThan)) {
        const r = s.snapshot();
        if (Su() && !s.error) return;
        s.restoreFromSnapshot(r)
    }
    Bo(e, n)
}

function Su() {
    s.scopeDepth++;
    const e = s.tokens.length;
    return _t(), Ar() ? (Dt(e), !0) : !1
}

function Xo() {
    de(p._enum), s.tokens[s.tokens.length - 1].type = t._enum, q(), Nu()
}

function Nu() {
    me(p._of) && I(), v(t.braceL), Cu(), v(t.braceR)
}

function Cu() {
    for (; !l(t.braceR) && !s.error && !_(t.ellipsis);) Ru(), l(t.braceR) || v(t.comma)
}

function Ru() {
    q(), _(t.eq) && I()
}

function Pu() {
    if (_n(t.eof), s.scopes.push(new Xe(0, s.tokens.length, !0)), s.scopeDepth !== 0) throw new Error(`Invalid scope depth at end of file: ${s.scopeDepth}`);
    return new kp(s.tokens, s.scopes)
}

function Fe(e) {
    ne && cu() || (l(t.at) && ss(), Lu(e))
}

function Lu(e) {
    if (J && Yl()) return;
    const n = s.type;
    switch (n) {
        case t._break:
        case t._continue:
            Du();
            return;
        case t._debugger:
            Ou();
            return;
        case t._do:
            ju();
            return;
        case t._for:
            Bu();
            return;
        case t._function:
            if (ue() === t.dot) break;
            e || V(), qu();
            return;
        case t._class:
            e || V(), ut(!0);
            return;
        case t._if:
            Uu();
            return;
        case t._return:
            zu();
            return;
        case t._switch:
            Hu();
            return;
        case t._throw:
            Gu();
            return;
        case t._try:
            Wu();
            return;
        case t._let:
        case t._const:
            e || V();
        case t._var:
            Yt(n !== t._var);
            return;
        case t._while:
            Xu();
            return;
        case t.braceL:
            tt();
            return;
        case t.semi:
            Zu();
            return;
        case t._export:
        case t._import: {
            const a = ue();
            if (a === t.parenL || a === t.dot) break;
            I(), n === t._import ? ra() : ta();
            return
        }
        case t.name:
            if (s.contextualKeyword === p._async) {
                const a = s.start,
                    i = s.snapshot();
                if (I(), l(t._function) && !Le()) {
                    v(t._function), ct(a, !0);
                    return
                } else s.restoreFromSnapshot(i)
            } else if (s.contextualKeyword === p._using && !Qs() && ue() === t.name) {
                Yt(!0);
                return
            } else if (Zo()) {
                de(p._await), Yt(!0);
                return
            }
    }
    const r = s.tokens.length;
    be();
    let o = null;
    if (s.tokens.length === r + 1) {
        const a = s.tokens[s.tokens.length - 1];
        a.type === t.name && (o = a.contextualKeyword)
    }
    if (o == null) {
        le();
        return
    }
    _(t.colon) ? Yu() : Ku(o)
}

function Zo() {
    if (!j(p._await)) return !1;
    const e = s.snapshot();
    return I(), !j(p._using) || Te() || (I(), !l(t.name) || Te()) ? (s.restoreFromSnapshot(e), !1) : (s.restoreFromSnapshot(e), !0)
}

function ss() {
    for (; l(t.at);) Yo()
}

function Yo() {
    if (I(), _(t.parenL)) be(), v(t.parenR);
    else {
        for (q(); _(t.dot);) q();
        Fu()
    }
}

function Fu() {
    J ? uc() : Ko()
}

function Ko() {
    _(t.parenL) && et()
}

function Du() {
    I(), Ge() || (q(), le())
}

function Ou() {
    I(), le()
}

function ju() {
    I(), Fe(!1), v(t._while), kn(), _(t.semi)
}

function Bu() {
    s.scopeDepth++;
    const e = s.tokens.length;
    Mu();
    const n = s.tokens.length;
    s.scopes.push(new Xe(e, n, !1)), s.scopeDepth--
}

function $u() {
    return !(!j(p._using) || Fr(p._of))
}

function Mu() {
    I();
    let e = !1;
    if (j(p._await) && (e = !0, I()), v(t.parenL), l(t.semi)) {
        e && V(), kr();
        return
    }
    const n = Zo();
    if (n || l(t._var) || l(t._let) || l(t._const) || $u()) {
        if (n && de(p._await), I(), Jo(!0, s.type !== t._var), l(t._in) || j(p._of)) {
            Os(e);
            return
        }
        kr();
        return
    }
    if (be(!0), l(t._in) || j(p._of)) {
        Os(e);
        return
    }
    e && V(), kr()
}

function qu() {
    const e = s.start;
    I(), ct(e, !0)
}

function Uu() {
    I(), kn(), Fe(!1), _(t._else) && Fe(!1)
}

function zu() {
    I(), Ge() || (be(), le())
}

function Hu() {
    I(), kn(), s.scopeDepth++;
    const e = s.tokens.length;
    for (v(t.braceL); !l(t.braceR) && !s.error;)
        if (l(t._case) || l(t._default)) {
            const r = l(t._case);
            I(), r && be(), v(t.colon)
        } else Fe(!0);
    I();
    const n = s.tokens.length;
    s.scopes.push(new Xe(e, n, !1)), s.scopeDepth--
}

function Gu() {
    I(), be(), le()
}

function Vu() {
    mn(!0), J && kt()
}

function Wu() {
    if (I(), tt(), l(t._catch)) {
        I();
        let e = null;
        if (l(t.parenL) && (s.scopeDepth++, e = s.tokens.length, v(t.parenL), Vu(), v(t.parenR)), tt(), e != null) {
            const n = s.tokens.length;
            s.scopes.push(new Xe(e, n, !1)), s.scopeDepth--
        }
    }
    _(t._finally) && tt()
}

function Yt(e) {
    I(), Jo(!1, e), le()
}

function Xu() {
    I(), kn(), Fe(!1)
}

function Zu() {
    I()
}

function Yu() {
    Fe(!0)
}

function Ku(e) {
    J ? Jl(e) : ne ? pu(e) : le()
}

function tt(e = !1, n = 0) {
    const r = s.tokens.length;
    s.scopeDepth++, v(t.braceL), n && (s.tokens[s.tokens.length - 1].contextId = n), _n(t.braceR), n && (s.tokens[s.tokens.length - 1].contextId = n);
    const o = s.tokens.length;
    s.scopes.push(new Xe(r, o, e)), s.scopeDepth--
}

function _n(e) {
    for (; !_(e) && !s.error;) Fe(!0)
}

function kr() {
    v(t.semi), l(t.semi) || be(), v(t.semi), l(t.parenR) || be(), v(t.parenR), Fe(!1)
}

function Os(e) {
    e ? me(p._of) : I(), be(), v(t.parenR), Fe(!1)
}

function Jo(e, n) {
    for (;;) {
        if (Ju(n), _(t.eq)) {
            const r = s.tokens.length - 1;
            _e(e), s.tokens[r].rhsEndIndex = s.tokens.length
        }
        if (!_(t.comma)) break
    }
}

function Ju(e) {
    mn(e), J ? rc() : ne && vu()
}

function ct(e, n, r = !1) {
    l(t.star) && I(), n && !r && !l(t.name) && !l(t._yield) && V();
    let o = null;
    l(t.name) && (n || (o = s.tokens.length, s.scopeDepth++), nt(!1));
    const a = s.tokens.length;
    s.scopeDepth++, _t(), qo(e);
    const i = s.tokens.length;
    s.scopes.push(new Xe(a, i, !0)), s.scopeDepth--, o !== null && (s.scopes.push(new Xe(o, i, !0)), s.scopeDepth--)
}

function _t(e = !1, n = 0) {
    J ? nc() : ne && wu(), v(t.parenL), n && (s.tokens[s.tokens.length - 1].contextId = n), Br(t.parenR, !1, !1, e, n), n && (s.tokens[s.tokens.length - 1].contextId = n)
}

function ut(e, n = !1) {
    const r = Rt();
    I(), s.tokens[s.tokens.length - 1].contextId = r, s.tokens[s.tokens.length - 1].isExpression = !e;
    let o = null;
    e || (o = s.tokens.length, s.scopeDepth++), np(e, n), rp();
    const a = s.tokens.length;
    if (Qu(r), !s.error && (s.tokens[a].contextId = r, s.tokens[s.tokens.length - 1].contextId = r, o !== null)) {
        const i = s.tokens.length;
        s.scopes.push(new Xe(o, i, !1)), s.scopeDepth--
    }
}

function Qo() {
    return l(t.eq) || l(t.semi) || l(t.braceR) || l(t.bang) || l(t.colon)
}

function ea() {
    return l(t.parenL) || l(t.lessThan)
}

function Qu(e) {
    for (v(t.braceL); !_(t.braceR) && !s.error;) {
        if (_(t.semi)) continue;
        if (l(t.at)) {
            Yo();
            continue
        }
        const n = s.start;
        ep(n, e)
    }
}

function ep(e, n) {
    J && $r([p._declare, p._public, p._protected, p._private, p._override]);
    let r = !1;
    if (l(t.name) && s.contextualKeyword === p._static) {
        if (q(), ea()) {
            At(e, !1);
            return
        } else if (Qo()) {
            Kt();
            return
        }
        if (s.tokens[s.tokens.length - 1].type = t._static, r = !0, l(t.braceL)) {
            s.tokens[s.tokens.length - 1].contextId = n, tt();
            return
        }
    }
    tp(e, r, n)
}

function tp(e, n, r) {
    if (J && Kl(n)) return;
    if (_(t.star)) {
        Tt(r), At(e, !1);
        return
    }
    Tt(r);
    let o = !1;
    const a = s.tokens[s.tokens.length - 1];
    a.contextualKeyword === p._constructor && (o = !0), js(), ea() ? At(e, o) : Qo() ? Kt() : a.contextualKeyword === p._async && !Ge() ? (s.tokens[s.tokens.length - 1].type = t._async, l(t.star) && I(), Tt(r), js(), At(e, !1)) : (a.contextualKeyword === p._get || a.contextualKeyword === p._set) && !(Ge() && l(t.star)) ? (a.contextualKeyword === p._get ? s.tokens[s.tokens.length - 1].type = t._get : s.tokens[s.tokens.length - 1].type = t._set, Tt(r), At(e, !1)) : a.contextualKeyword === p._accessor && !Ge() ? (Tt(r), Kt()) : Ge() ? Kt() : V()
}

function At(e, n) {
    J ? pt() : ne && l(t.lessThan) && ze(), Sr(e, n)
}

function Tt(e) {
    Ft(e)
}

function js() {
    if (J) {
        const e = Z(0);
        _(t.question), W(e)
    }
}

function Kt() {
    if (J ? (so(t.bang), kt()) : ne && l(t.colon) && ft(), l(t.eq)) {
        const e = s.tokens.length;
        I(), _e(), s.tokens[e].rhsEndIndex = s.tokens.length
    }
    le()
}

function np(e, n = !1) {
    J && (!e || n) && j(p._implements) || (l(t.name) && nt(!0), J ? pt() : ne && l(t.lessThan) && ze())
}

function rp() {
    let e = !1;
    _(t._extends) ? (jo(), e = !0) : e = !1, J ? ec(e) : ne && yu(e)
}

function ta() {
    const e = s.tokens.length - 1;
    J && Vl() || (ip() ? lp() : ap() ? (q(), l(t.comma) && ue() === t.star ? (v(t.comma), v(t.star), de(p._as), q()) : na(), Ot()) : _(t._default) ? sp() : up() ? op() : (os(), Ot()), s.tokens[e].rhsEndIndex = s.tokens.length)
}

function sp() {
    if (J && Zl() || ne && uu()) return;
    const e = s.start;
    _(t._function) ? ct(e, !0, !0) : j(p._async) && ue() === t._function ? (me(p._async), _(t._function), ct(e, !0, !0)) : l(t._class) ? ut(!0, !0) : l(t.at) ? (ss(), ut(!0, !0)) : (_e(), le())
}

function op() {
    J ? Ql() : ne ? du() : Fe(!0)
}

function ap() {
    if (J && Ro()) return !1;
    if (ne && hu()) return !1;
    if (l(t.name)) return s.contextualKeyword !== p._async;
    if (!l(t._default)) return !1;
    const e = Dr(),
        n = $t(),
        r = n.type === t.name && n.contextualKeyword === p._from;
    if (n.type === t.comma) return !0;
    if (r) {
        const o = F.charCodeAt(oo(e + 4));
        return o === m.quotationMark || o === m.apostrophe
    }
    return !1
}

function na() {
    _(t.comma) && os()
}

function Ot() {
    me(p._from) && (Ke(), sa()), le()
}

function ip() {
    return ne ? mu() : l(t.star)
}

function lp() {
    ne ? gu() : Rr()
}

function Rr() {
    v(t.star), j(p._as) ? cp() : Ot()
}

function cp() {
    I(), s.tokens[s.tokens.length - 1].type = t._as, q(), na(), Ot()
}

function up() {
    return J && Ro() || ne && fu() || s.type === t._var || s.type === t._const || s.type === t._let || s.type === t._function || s.type === t._class || j(p._async) || l(t.at)
}

function os() {
    let e = !0;
    for (v(t.braceL); !_(t.braceR) && !s.error;) {
        if (e) e = !1;
        else if (v(t.comma), _(t.braceR)) break;
        pp()
    }
}

function pp() {
    if (J) {
        Xl();
        return
    }
    q(), s.tokens[s.tokens.length - 1].identifierRole = $.ExportAccess, me(p._as) && q()
}

function fp() {
    const e = s.snapshot();
    return de(p._module), me(p._from) ? j(p._from) ? (s.restoreFromSnapshot(e), !0) : (s.restoreFromSnapshot(e), !1) : l(t.comma) ? (s.restoreFromSnapshot(e), !1) : (s.restoreFromSnapshot(e), !0)
}

function hp() {
    j(p._module) && fp() && I()
}

function ra() {
    if (J && l(t.name) && ue() === t.eq) {
        Er();
        return
    }
    if (J && j(p._type)) {
        const e = $t();
        if (e.type === t.name && e.contextualKeyword !== p._from) {
            if (de(p._type), ue() === t.eq) {
                Er();
                return
            }
        } else(e.type === t.star || e.type === t.braceL) && de(p._type)
    }
    l(t.string) || (hp(), mp(), de(p._from)), Ke(), sa(), le()
}

function dp() {
    return l(t.name)
}

function Bs() {
    tn()
}

function mp() {
    ne && _u();
    let e = !0;
    if (!(dp() && (Bs(), !_(t.comma)))) {
        if (l(t.star)) {
            I(), de(p._as), Bs();
            return
        }
        for (v(t.braceL); !_(t.braceR) && !s.error;) {
            if (e) e = !1;
            else if (_(t.colon) && V("ES2015 named imports do not destructure. Use another statement for destructuring after the import."), v(t.comma), _(t.braceR)) break;
            gp()
        }
    }
}

function gp() {
    if (J) {
        Wl();
        return
    }
    if (ne) {
        xu();
        return
    }
    tn(), j(p._as) && (s.tokens[s.tokens.length - 1].identifierRole = $.ImportAccess, I(), tn())
}

function sa() {
    (l(t._with) || j(p._assert) && !Te()) && (I(), Zr(!1, !1))
}

function yp() {
    return s.pos === 0 && F.charCodeAt(0) === m.numberSign && F.charCodeAt(1) === m.exclamationMark && lo(2), io(), Pu()
}
class kp {
    constructor(n, r) {
        this.tokens = n, this.scopes = r
    }
}

function bp(e, n, r, o) {
    if (o && r) throw new Error("Cannot combine flow and typescript plugins.");
    zi(e, n, r, o);
    const a = yp();
    if (s.error) throw Mi(s.error);
    return a
}

function _p(e) {
    let n = e.currentIndex(),
        r = 0;
    const o = e.currentToken();
    do {
        const a = e.tokens[n];
        if (a.isOptionalChainStart && r++, a.isOptionalChainEnd && r--, r += a.numNullishCoalesceStarts, r -= a.numNullishCoalesceEnds, a.contextualKeyword === p._await && a.identifierRole == null && a.scopeDepth === o.scopeDepth) return !0;
        n += 1
    } while (r > 0 && n < e.tokens.length);
    return !1
}
class St {
    __init() {
        this.resultCode = ""
    }
    __init2() {
        this.resultMappings = new Array(this.tokens.length)
    }
    __init3() {
        this.tokenIndex = 0
    }
    constructor(n, r, o, a, i) {
        this.code = n, this.tokens = r, this.isFlowEnabled = o, this.disableESTransforms = a, this.helperManager = i, St.prototype.__init.call(this), St.prototype.__init2.call(this), St.prototype.__init3.call(this)
    }
    snapshot() {
        return {
            resultCode: this.resultCode,
            tokenIndex: this.tokenIndex
        }
    }
    restoreToSnapshot(n) {
        this.resultCode = n.resultCode, this.tokenIndex = n.tokenIndex
    }
    dangerouslyGetAndRemoveCodeSinceSnapshot(n) {
        const r = this.resultCode.slice(n.resultCode.length);
        return this.resultCode = n.resultCode, r
    }
    reset() {
        this.resultCode = "", this.resultMappings = new Array(this.tokens.length), this.tokenIndex = 0
    }
    matchesContextualAtIndex(n, r) {
        return this.matches1AtIndex(n, t.name) && this.tokens[n].contextualKeyword === r
    }
    identifierNameAtIndex(n) {
        return this.identifierNameForToken(this.tokens[n])
    }
    identifierNameAtRelativeIndex(n) {
        return this.identifierNameForToken(this.tokenAtRelativeIndex(n))
    }
    identifierName() {
        return this.identifierNameForToken(this.currentToken())
    }
    identifierNameForToken(n) {
        return this.code.slice(n.start, n.end)
    }
    rawCodeForToken(n) {
        return this.code.slice(n.start, n.end)
    }
    stringValueAtIndex(n) {
        return this.stringValueForToken(this.tokens[n])
    }
    stringValue() {
        return this.stringValueForToken(this.currentToken())
    }
    stringValueForToken(n) {
        return this.code.slice(n.start + 1, n.end - 1)
    }
    matches1AtIndex(n, r) {
        return this.tokens[n].type === r
    }
    matches2AtIndex(n, r, o) {
        return this.tokens[n].type === r && this.tokens[n + 1].type === o
    }
    matches3AtIndex(n, r, o, a) {
        return this.tokens[n].type === r && this.tokens[n + 1].type === o && this.tokens[n + 2].type === a
    }
    matches1(n) {
        return this.tokens[this.tokenIndex].type === n
    }
    matches2(n, r) {
        return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r
    }
    matches3(n, r, o) {
        return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r && this.tokens[this.tokenIndex + 2].type === o
    }
    matches4(n, r, o, a) {
        return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === a
    }
    matches5(n, r, o, a, i) {
        return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === a && this.tokens[this.tokenIndex + 4].type === i
    }
    matchesContextual(n) {
        return this.matchesContextualAtIndex(this.tokenIndex, n)
    }
    matchesContextIdAndLabel(n, r) {
        return this.matches1(n) && this.currentToken().contextId === r
    }
    previousWhitespaceAndComments() {
        let n = this.code.slice(this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0, this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length);
        return this.isFlowEnabled && (n = n.replace(/@flow/g, "")), n
    }
    replaceToken(n) {
        this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++
    }
    replaceTokenTrimmingLeftWhitespace(n) {
        this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ""), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++
    }
    removeInitialToken() {
        this.replaceToken("")
    }
    removeToken() {
        this.replaceTokenTrimmingLeftWhitespace("")
    }
    removeBalancedCode() {
        let n = 0;
        for (; !this.isAtEnd();) {
            if (this.matches1(t.braceL)) n++;
            else if (this.matches1(t.braceR)) {
                if (n === 0) return;
                n--
            }
            this.removeToken()
        }
    }
    copyExpectedToken(n) {
        if (this.tokens[this.tokenIndex].type !== n) throw new Error(`Expected token ${n}`);
        this.copyToken()
    }
    copyToken() {
        this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++
    }
    copyTokenWithPrefix(n) {
        this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += n, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(this.tokens[this.tokenIndex].start, this.tokens[this.tokenIndex].end), this.appendTokenSuffix(), this.tokenIndex++
    }
    appendTokenPrefix() {
        const n = this.currentToken();
        if ((n.numNullishCoalesceStarts || n.isOptionalChainStart) && (n.isAsyncOperation = _p(this)), !this.disableESTransforms) {
            if (n.numNullishCoalesceStarts)
                for (let r = 0; r < n.numNullishCoalesceStarts; r++) n.isAsyncOperation ? (this.resultCode += "await ", this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce")) : this.resultCode += this.helperManager.getHelperName("nullishCoalesce"), this.resultCode += "(";
            n.isOptionalChainStart && (n.isAsyncOperation && (this.resultCode += "await "), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === t._delete ? n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete") : this.resultCode += this.helperManager.getHelperName("optionalChainDelete") : n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChain") : this.resultCode += this.helperManager.getHelperName("optionalChain"), this.resultCode += "([")
        }
    }
    appendTokenSuffix() {
        const n = this.currentToken();
        if (n.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += "])"), n.numNullishCoalesceEnds && !this.disableESTransforms)
            for (let r = 0; r < n.numNullishCoalesceEnds; r++) this.resultCode += "))"
    }
    appendCode(n) {
        this.resultCode += n
    }
    currentToken() {
        return this.tokens[this.tokenIndex]
    }
    currentTokenCode() {
        const n = this.currentToken();
        return this.code.slice(n.start, n.end)
    }
    tokenAtRelativeIndex(n) {
        return this.tokens[this.tokenIndex + n]
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
}

function xp(e, n, r, o) {
    const a = n.snapshot(),
        i = wp(n);
    let c = [];
    const f = [],
        h = [];
    let u = null;
    const g = [],
        d = [],
        x = n.currentToken().contextId;
    if (x == null) throw new Error("Expected non-null class context ID on class open-brace.");
    for (n.nextToken(); !n.matchesContextIdAndLabel(t.braceR, x);)
        if (n.matchesContextual(p._constructor) && !n.currentToken().isType)({
            constructorInitializerStatements: c,
            constructorInsertPos: u
        } = $s(n));
        else if (n.matches1(t.semi)) o || d.push({
        start: n.currentIndex(),
        end: n.currentIndex() + 1
    }), n.nextToken();
    else if (n.currentToken().isType) n.nextToken();
    else {
        const N = n.currentIndex();
        let y = !1,
            k = !1,
            w = !1;
        for (; ln(n.currentToken());) n.matches1(t._static) && (y = !0), n.matches1(t.hash) && (k = !0), (n.matches1(t._declare) || n.matches1(t._abstract)) && (w = !0), n.nextToken();
        if (y && n.matches1(t.braceL)) {
            br(n, x);
            continue
        }
        if (k) {
            br(n, x);
            continue
        }
        if (n.matchesContextual(p._constructor) && !n.currentToken().isType) {
            ({
                constructorInitializerStatements: c,
                constructorInsertPos: u
            } = $s(n));
            continue
        }
        const C = n.currentIndex();
        if (vp(n), n.matches1(t.lessThan) || n.matches1(t.parenL)) {
            br(n, x);
            continue
        }
        for (; n.currentToken().isType;) n.nextToken();
        if (n.matches1(t.eq)) {
            const b = n.currentIndex(),
                T = n.currentToken().rhsEndIndex;
            if (T == null) throw new Error("Expected rhsEndIndex on class field assignment.");
            for (n.nextToken(); n.currentIndex() < T;) e.processToken();
            let R;
            y ? (R = r.claimFreeName("__initStatic"), h.push(R)) : (R = r.claimFreeName("__init"), f.push(R)), g.push({
                initializerName: R,
                equalsIndex: b,
                start: C,
                end: n.currentIndex()
            })
        } else(!o || w) && d.push({
            start: N,
            end: n.currentIndex()
        })
    }
    return n.restoreToSnapshot(a), o ? {
        headerInfo: i,
        constructorInitializerStatements: c,
        instanceInitializerNames: [],
        staticInitializerNames: [],
        constructorInsertPos: u,
        fields: [],
        rangesToRemove: d
    } : {
        headerInfo: i,
        constructorInitializerStatements: c,
        instanceInitializerNames: f,
        staticInitializerNames: h,
        constructorInsertPos: u,
        fields: g,
        rangesToRemove: d
    }
}

function br(e, n) {
    for (e.nextToken(); e.currentToken().contextId !== n;) e.nextToken();
    for (; ln(e.tokenAtRelativeIndex(-1));) e.previousToken()
}

function wp(e) {
    const n = e.currentToken(),
        r = n.contextId;
    if (r == null) throw new Error("Expected context ID on class token.");
    const o = n.isExpression;
    if (o == null) throw new Error("Expected isExpression on class token.");
    let a = null,
        i = !1;
    for (e.nextToken(), e.matches1(t.name) && (a = e.identifierName()); !e.matchesContextIdAndLabel(t.braceL, r);) e.matches1(t._extends) && !e.currentToken().isType && (i = !0), e.nextToken();
    return {
        isExpression: o,
        className: a,
        hasSuperclass: i
    }
}

function $s(e) {
    const n = [];
    e.nextToken();
    const r = e.currentToken().contextId;
    if (r == null) throw new Error("Expected context ID on open-paren starting constructor params.");
    for (; !e.matchesContextIdAndLabel(t.parenR, r);)
        if (e.currentToken().contextId === r) {
            if (e.nextToken(), ln(e.currentToken())) {
                for (e.nextToken(); ln(e.currentToken());) e.nextToken();
                const i = e.currentToken();
                if (i.type !== t.name) throw new Error("Expected identifier after access modifiers in constructor arg.");
                const c = e.identifierNameForToken(i);
                n.push(`this.${c} = ${c}`)
            }
        } else e.nextToken();
    for (e.nextToken(); e.currentToken().isType;) e.nextToken();
    let o = e.currentIndex(),
        a = !1;
    for (; !e.matchesContextIdAndLabel(t.braceR, r);) {
        if (!a && e.matches2(t._super, t.parenL)) {
            e.nextToken();
            const i = e.currentToken().contextId;
            if (i == null) throw new Error("Expected a context ID on the super call");
            for (; !e.matchesContextIdAndLabel(t.parenR, i);) e.nextToken();
            o = e.currentIndex(), a = !0
        }
        e.nextToken()
    }
    return e.nextToken(), {
        constructorInitializerStatements: n,
        constructorInsertPos: o
    }
}

function ln(e) {
    return [t._async, t._get, t._set, t.plus, t.minus, t._readonly, t._static, t._public, t._private, t._protected, t._override, t._abstract, t.star, t._declare, t.hash].includes(e.type)
}

function vp(e) {
    if (e.matches1(t.bracketL)) {
        const r = e.currentToken().contextId;
        if (r == null) throw new Error("Expected class context ID on computed name open bracket.");
        for (; !e.matchesContextIdAndLabel(t.bracketR, r);) e.nextToken();
        e.nextToken()
    } else e.nextToken()
}

function oa(e) {
    if (e.removeInitialToken(), e.removeToken(), e.removeToken(), e.removeToken(), e.matches1(t.parenL)) e.removeToken(), e.removeToken(), e.removeToken();
    else
        for (; e.matches1(t.dot);) e.removeToken(), e.removeToken()
}
const aa = {
    typeDeclarations: new Set,
    valueDeclarations: new Set
};

function ia(e) {
    const n = new Set,
        r = new Set;
    for (let o = 0; o < e.tokens.length; o++) {
        const a = e.tokens[o];
        a.type === t.name && ro(a) && (a.isType ? n.add(e.identifierNameForToken(a)) : r.add(e.identifierNameForToken(a)))
    }
    return {
        typeDeclarations: n,
        valueDeclarations: r
    }
}

function la(e) {
    let n = e.currentIndex();
    for (; !e.matches1AtIndex(n, t.braceR);) n++;
    return e.matchesContextualAtIndex(n + 1, p._from) && e.matches1AtIndex(n + 2, t.string)
}

function at(e) {
    (e.matches2(t._with, t.braceL) || e.matches2(t.name, t.braceL) && e.matchesContextual(p._assert)) && (e.removeToken(), e.removeToken(), e.removeBalancedCode(), e.removeToken())
}

function ca(e, n, r, o) {
    if (!e || n) return !1;
    const a = r.currentToken();
    if (a.rhsEndIndex == null) throw new Error("Expected non-null rhsEndIndex on export token.");
    const i = a.rhsEndIndex - r.currentIndex();
    if (i !== 3 && !(i === 4 && r.matches1AtIndex(a.rhsEndIndex - 1, t.semi))) return !1;
    const c = r.tokenAtRelativeIndex(2);
    if (c.type !== t.name) return !1;
    const f = r.identifierNameForToken(c);
    return o.typeDeclarations.has(f) && !o.valueDeclarations.has(f)
}
class Nt extends Ue {
    __init() {
        this.hadExport = !1
    }
    __init2() {
        this.hadNamedExport = !1
    }
    __init3() {
        this.hadDefaultExport = !1
    }
    constructor(n, r, o, a, i, c, f, h, u, g, d, x) {
        super(), this.rootTransformer = n, this.tokens = r, this.importProcessor = o, this.nameManager = a, this.helperManager = i, this.reactHotLoaderTransformer = c, this.enableLegacyBabel5ModuleInterop = f, this.enableLegacyTypeScriptModuleInterop = h, this.isTypeScriptTransformEnabled = u, this.isFlowTransformEnabled = g, this.preserveDynamicImport = d, this.keepUnusedImports = x, Nt.prototype.__init.call(this), Nt.prototype.__init2.call(this), Nt.prototype.__init3.call(this), this.declarationInfo = u ? ia(r) : aa
    }
    getPrefixCode() {
        let n = "";
        return this.hadExport && (n += 'Object.defineProperty(exports, "__esModule", {value: true});'), n
    }
    getSuffixCode() {
        return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? `
module.exports = exports.default;
` : ""
    }
    process() {
        return this.tokens.matches3(t._import, t.name, t.eq) ? this.processImportEquals() : this.tokens.matches1(t._import) ? (this.processImport(), !0) : this.tokens.matches2(t._export, t.eq) ? (this.tokens.replaceToken("module.exports"), !0) : this.tokens.matches1(t._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : this.tokens.matches2(t.name, t.postIncDec) && this.processPostIncDec() ? !0 : this.tokens.matches1(t.name) || this.tokens.matches1(t.jsxName) ? this.processIdentifier() : this.tokens.matches1(t.eq) ? this.processAssignment() : this.tokens.matches1(t.assign) ? this.processComplexAssignment() : this.tokens.matches1(t.preIncDec) ? this.processPreIncDec() : !1
    }
    processImportEquals() {
        const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
        return this.importProcessor.shouldAutomaticallyElideImportedName(n) ? oa(this.tokens) : this.tokens.replaceToken("const"), !0
    }
    processImport() {
        if (this.tokens.matches2(t._import, t.parenL)) {
            if (this.preserveDynamicImport) {
                this.tokens.copyToken();
                return
            }
            const r = this.enableLegacyTypeScriptModuleInterop ? "" : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
            this.tokens.replaceToken(`Promise.resolve().then(() => ${r}require`);
            const o = this.tokens.currentToken().contextId;
            if (o == null) throw new Error("Expected context ID on dynamic import invocation.");
            for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(t.parenR, o);) this.rootTransformer.processToken();
            this.tokens.replaceToken(r ? ")))" : "))");
            return
        }
        if (this.removeImportAndDetectIfShouldElide()) this.tokens.removeToken();
        else {
            const r = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(r)), this.tokens.appendCode(this.importProcessor.claimImportCode(r))
        }
        at(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken()
    }
    removeImportAndDetectIfShouldElide() {
        if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(p._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, p._from)) return this.removeRemainingImport(), !0;
        if (this.tokens.matches1(t.name) || this.tokens.matches1(t.star)) return this.removeRemainingImport(), !1;
        if (this.tokens.matches1(t.string)) return !1;
        let n = !1,
            r = !1;
        for (; !this.tokens.matches1(t.string);)(!n && this.tokens.matches1(t.braceL) || this.tokens.matches1(t.comma)) && (this.tokens.removeToken(), this.tokens.matches1(t.braceR) || (r = !0), (this.tokens.matches2(t.name, t.comma) || this.tokens.matches2(t.name, t.braceR) || this.tokens.matches4(t.name, t.name, t.name, t.comma) || this.tokens.matches4(t.name, t.name, t.name, t.braceR)) && (n = !0)), this.tokens.removeToken();
        return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !n : this.isFlowTransformEnabled ? r && !n : !1
    }
    removeRemainingImport() {
        for (; !this.tokens.matches1(t.string);) this.tokens.removeToken()
    }
    processIdentifier() {
        const n = this.tokens.currentToken();
        if (n.shadowsGlobal) return !1;
        if (n.identifierRole === $.ObjectShorthand) return this.processObjectShorthand();
        if (n.identifierRole !== $.Access) return !1;
        const r = this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(n));
        if (!r) return !1;
        let o = this.tokens.currentIndex() + 1;
        for (; o < this.tokens.tokens.length && this.tokens.tokens[o].type === t.parenR;) o++;
        return this.tokens.tokens[o].type === t.parenL ? this.tokens.tokenAtRelativeIndex(1).type === t.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== t._new ? (this.tokens.replaceToken(`${r}.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR)) : this.tokens.replaceToken(`(0, ${r})`) : this.tokens.replaceToken(r), !0
    }
    processObjectShorthand() {
        const n = this.tokens.identifierName(),
            r = this.importProcessor.getIdentifierReplacement(n);
        return r ? (this.tokens.replaceToken(`${n}: ${r}`), !0) : !1
    }
    processExport() {
        if (this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum)) return this.hadNamedExport = !0, !1;
        if (this.tokens.matches2(t._export, t._default)) return this.tokens.matches3(t._export, t._default, t._enum) ? (this.hadDefaultExport = !0, !1) : (this.processExportDefault(), !0);
        if (this.tokens.matches2(t._export, t.braceL)) return this.processExportBindings(), !0;
        if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, p._type)) {
            if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
                for (; !this.tokens.matches1(t.braceR);) this.tokens.removeToken();
                this.tokens.removeToken()
            } else this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
            return this.tokens.matchesContextual(p._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), at(this.tokens)), !0
        }
        if (this.hadNamedExport = !0, this.tokens.matches2(t._export, t._var) || this.tokens.matches2(t._export, t._let) || this.tokens.matches2(t._export, t._const)) return this.processExportVar(), !0;
        if (this.tokens.matches2(t._export, t._function) || this.tokens.matches3(t._export, t.name, t._function)) return this.processExportFunction(), !0;
        if (this.tokens.matches2(t._export, t._class) || this.tokens.matches3(t._export, t._abstract, t._class) || this.tokens.matches2(t._export, t.at)) return this.processExportClass(), !0;
        if (this.tokens.matches2(t._export, t.star)) return this.processExportStar(), !0;
        throw new Error("Unrecognized export syntax.")
    }
    processAssignment() {
        const n = this.tokens.currentIndex(),
            r = this.tokens.tokens[n - 1];
        if (r.isType || r.type !== t.name || r.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot) || n >= 2 && [t._var, t._let, t._const].includes(this.tokens.tokens[n - 2].type)) return !1;
        const o = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));
        return o ? (this.tokens.copyToken(), this.tokens.appendCode(` ${o} =`), !0) : !1
    }
    processComplexAssignment() {
        const n = this.tokens.currentIndex(),
            r = this.tokens.tokens[n - 1];
        if (r.type !== t.name || r.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot)) return !1;
        const o = this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));
        return o ? (this.tokens.appendCode(` = ${o}`), this.tokens.copyToken(), !0) : !1
    }
    processPreIncDec() {
        const n = this.tokens.currentIndex(),
            r = this.tokens.tokens[n + 1];
        if (r.type !== t.name || r.shadowsGlobal || n + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(n + 2, t.dot) || this.tokens.matches1AtIndex(n + 2, t.bracketL) || this.tokens.matches1AtIndex(n + 2, t.parenL))) return !1;
        const o = this.tokens.identifierNameForToken(r),
            a = this.importProcessor.resolveExportBinding(o);
        return a ? (this.tokens.appendCode(`${a} = `), this.tokens.copyToken(), !0) : !1
    }
    processPostIncDec() {
        const n = this.tokens.currentIndex(),
            r = this.tokens.tokens[n],
            o = this.tokens.tokens[n + 1];
        if (r.type !== t.name || r.shadowsGlobal || n >= 1 && this.tokens.matches1AtIndex(n - 1, t.dot)) return !1;
        const a = this.tokens.identifierNameForToken(r),
            i = this.importProcessor.resolveExportBinding(a);
        if (!i) return !1;
        const c = this.tokens.rawCodeForToken(o),
            f = this.importProcessor.getIdentifierReplacement(a) || a;
        if (c === "++") this.tokens.replaceToken(`(${f} = ${i} = ${f} + 1, ${f} - 1)`);
        else if (c === "--") this.tokens.replaceToken(`(${f} = ${i} = ${f} - 1, ${f} + 1)`);
        else throw new Error(`Unexpected operator: ${c}`);
        return this.tokens.removeToken(), !0
    }
    processExportDefault() {
        let n = !0;
        if (this.tokens.matches4(t._export, t._default, t._function, t.name) || this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, p._async)) {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const r = this.processNamedFunction();
            this.tokens.appendCode(` exports.default = ${r};`)
        } else if (this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name) || this.tokens.matches3(t._export, t._default, t.at)) {
            this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
            const r = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.default = ${r};`)
        } else if (ca(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) n = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
        else if (this.reactHotLoaderTransformer) {
            const r = this.nameManager.claimFreeName("_default");
            this.tokens.replaceToken(`let ${r}; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${r} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(r)
        } else this.tokens.replaceToken("exports."), this.tokens.copyToken(), this.tokens.appendCode(" =");
        n && (this.hadDefaultExport = !0)
    }
    copyDecorators() {
        for (; this.tokens.matches1(t.at);)
            if (this.tokens.copyToken(), this.tokens.matches1(t.parenL)) this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR);
            else {
                for (this.tokens.copyExpectedToken(t.name); this.tokens.matches1(t.dot);) this.tokens.copyExpectedToken(t.dot), this.tokens.copyExpectedToken(t.name);
                this.tokens.matches1(t.parenL) && (this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR))
            }
    }
    processExportVar() {
        this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar()
    }
    isSimpleExportVar() {
        let n = this.tokens.currentIndex();
        if (n++, n++, !this.tokens.matches1AtIndex(n, t.name)) return !1;
        for (n++; n < this.tokens.tokens.length && this.tokens.tokens[n].isType;) n++;
        return !!this.tokens.matches1AtIndex(n, t.eq)
    }
    processSimpleExportVar() {
        this.tokens.removeInitialToken(), this.tokens.copyToken();
        const n = this.tokens.identifierName();
        for (; !this.tokens.matches1(t.eq);) this.rootTransformer.processToken();
        const r = this.tokens.currentToken().rhsEndIndex;
        if (r == null) throw new Error("Expected = token with an end index.");
        for (; this.tokens.currentIndex() < r;) this.rootTransformer.processToken();
        this.tokens.appendCode(`; exports.${n} = ${n}`)
    }
    processComplexExportVar() {
        this.tokens.removeInitialToken(), this.tokens.removeToken();
        const n = this.tokens.matches1(t.braceL);
        n && this.tokens.appendCode("(");
        let r = 0;
        for (;;)
            if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL) || this.tokens.matches1(t.bracketL)) r++, this.tokens.copyToken();
            else if (this.tokens.matches1(t.braceR) || this.tokens.matches1(t.bracketR)) r--, this.tokens.copyToken();
        else {
            if (r === 0 && !this.tokens.matches1(t.name) && !this.tokens.currentToken().isType) break;
            if (this.tokens.matches1(t.eq)) {
                const o = this.tokens.currentToken().rhsEndIndex;
                if (o == null) throw new Error("Expected = token with an end index.");
                for (; this.tokens.currentIndex() < o;) this.rootTransformer.processToken()
            } else {
                const o = this.tokens.currentToken();
                if (no(o)) {
                    const a = this.tokens.identifierName();
                    let i = this.importProcessor.getIdentifierReplacement(a);
                    if (i === null) throw new Error(`Expected a replacement for ${a} in \`export var\` syntax.`);
                    Zi(o) && (i = `${a}: ${i}`), this.tokens.replaceToken(i)
                } else this.rootTransformer.processToken()
            }
        }
        if (n) {
            const o = this.tokens.currentToken().rhsEndIndex;
            if (o == null) throw new Error("Expected = token with an end index.");
            for (; this.tokens.currentIndex() < o;) this.rootTransformer.processToken();
            this.tokens.appendCode(")")
        }
    }
    processExportFunction() {
        this.tokens.replaceToken("");
        const n = this.processNamedFunction();
        this.tokens.appendCode(` exports.${n} = ${n};`)
    }
    processNamedFunction() {
        if (this.tokens.matches1(t._function)) this.tokens.copyToken();
        else if (this.tokens.matches2(t.name, t._function)) {
            if (!this.tokens.matchesContextual(p._async)) throw new Error("Expected async keyword in function export.");
            this.tokens.copyToken(), this.tokens.copyToken()
        }
        if (this.tokens.matches1(t.star) && this.tokens.copyToken(), !this.tokens.matches1(t.name)) throw new Error("Expected identifier for exported function name.");
        const n = this.tokens.identifierName();
        if (this.tokens.copyToken(), this.tokens.currentToken().isType)
            for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;) this.tokens.removeToken();
        return this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(t.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), n
    }
    processExportClass() {
        this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
        const n = this.rootTransformer.processNamedClass();
        this.tokens.appendCode(` exports.${n} = ${n};`)
    }
    processExportBindings() {
        this.tokens.removeInitialToken(), this.tokens.removeToken();
        const n = la(this.tokens),
            r = [];
        for (;;) {
            if (this.tokens.matches1(t.braceR)) {
                this.tokens.removeToken();
                break
            }
            const o = Pt(this.tokens);
            for (; this.tokens.currentIndex() < o.endIndex;) this.tokens.removeToken();
            if (!(o.isType || !n && this.shouldElideExportedIdentifier(o.leftName))) {
                const i = o.rightName;
                i === "default" ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
                const c = o.leftName,
                    f = this.importProcessor.getIdentifierReplacement(c);
                r.push(`exports.${i} = ${f||c};`)
            }
            if (this.tokens.matches1(t.braceR)) {
                this.tokens.removeToken();
                break
            }
            if (this.tokens.matches2(t.comma, t.braceR)) {
                this.tokens.removeToken(), this.tokens.removeToken();
                break
            } else if (this.tokens.matches1(t.comma)) this.tokens.removeToken();
            else throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`)
        }
        if (this.tokens.matchesContextual(p._from)) {
            this.tokens.removeToken();
            const o = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(o)), at(this.tokens)
        } else this.tokens.appendCode(r.join(" "));
        this.tokens.matches1(t.semi) && this.tokens.removeToken()
    }
    processExportStar() {
        for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.string);) this.tokens.removeToken();
        const n = this.tokens.stringValue();
        this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(n)), at(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken()
    }
    shouldElideExportedIdentifier(n) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(n)
    }
}
class Ip extends Ue {
    constructor(n, r, o, a, i, c, f, h) {
        super(), this.tokens = n, this.nameManager = r, this.helperManager = o, this.reactHotLoaderTransformer = a, this.isTypeScriptTransformEnabled = i, this.isFlowTransformEnabled = c, this.keepUnusedImports = f, this.nonTypeIdentifiers = i && !f ? ko(n, h) : new Set, this.declarationInfo = i && !f ? ia(n) : aa, this.injectCreateRequireForImportRequire = !!h.injectCreateRequireForImportRequire
    }
    process() {
        if (this.tokens.matches3(t._import, t.name, t.eq)) return this.processImportEquals();
        if (this.tokens.matches4(t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, p._type)) {
            this.tokens.removeInitialToken();
            for (let n = 0; n < 7; n++) this.tokens.removeToken();
            return !0
        }
        if (this.tokens.matches2(t._export, t.eq)) return this.tokens.replaceToken("module.exports"), !0;
        if (this.tokens.matches5(t._export, t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, p._type)) {
            this.tokens.removeInitialToken();
            for (let n = 0; n < 8; n++) this.tokens.removeToken();
            return !0
        }
        if (this.tokens.matches1(t._import)) return this.processImport();
        if (this.tokens.matches2(t._export, t._default)) return this.processExportDefault();
        if (this.tokens.matches2(t._export, t.braceL)) return this.processNamedExports();
        if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, p._type)) {
            if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
                for (; !this.tokens.matches1(t.braceR);) this.tokens.removeToken();
                this.tokens.removeToken()
            } else this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
            return this.tokens.matchesContextual(p._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), at(this.tokens)), !0
        }
        return !1
    }
    processImportEquals() {
        const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
        return this.shouldAutomaticallyElideImportedName(n) ? oa(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0
    }
    processImport() {
        if (this.tokens.matches2(t._import, t.parenL)) return !1;
        const n = this.tokens.snapshot();
        if (this.removeImportTypeBindings()) {
            for (this.tokens.restoreToSnapshot(n); !this.tokens.matches1(t.string);) this.tokens.removeToken();
            this.tokens.removeToken(), at(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken()
        }
        return !0
    }
    removeImportTypeBindings() {
        if (this.tokens.copyExpectedToken(t._import), this.tokens.matchesContextual(p._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, p._from)) return !0;
        if (this.tokens.matches1(t.string)) return this.tokens.copyToken(), !1;
        this.tokens.matchesContextual(p._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, p._from) && this.tokens.copyToken();
        let n = !1,
            r = !1,
            o = !1;
        if (this.tokens.matches1(t.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(t.comma) && this.tokens.removeToken()) : (n = !0, this.tokens.copyToken(), this.tokens.matches1(t.comma) && (o = !0, this.tokens.removeToken()))), this.tokens.matches1(t.star)) this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (o && this.tokens.appendCode(","), n = !0, this.tokens.copyExpectedToken(t.star), this.tokens.copyExpectedToken(t.name), this.tokens.copyExpectedToken(t.name));
        else if (this.tokens.matches1(t.braceL)) {
            for (o && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(t.braceR);) {
                r = !0;
                const a = Pt(this.tokens);
                if (a.isType || this.shouldAutomaticallyElideImportedName(a.rightName)) {
                    for (; this.tokens.currentIndex() < a.endIndex;) this.tokens.removeToken();
                    this.tokens.matches1(t.comma) && this.tokens.removeToken()
                } else {
                    for (n = !0; this.tokens.currentIndex() < a.endIndex;) this.tokens.copyToken();
                    this.tokens.matches1(t.comma) && this.tokens.copyToken()
                }
            }
            this.tokens.copyExpectedToken(t.braceR)
        }
        return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !n : this.isFlowTransformEnabled ? r && !n : !1
    }
    shouldAutomaticallyElideImportedName(n) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(n)
    }
    processExportDefault() {
        if (ca(this.isTypeScriptTransformEnabled, this.keepUnusedImports, this.tokens, this.declarationInfo)) return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
        if (!(this.tokens.matches4(t._export, t._default, t._function, t.name) || this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, p._async) || this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name)) && this.reactHotLoaderTransformer) {
            const r = this.nameManager.claimFreeName("_default");
            return this.tokens.replaceToken(`let ${r}; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${r} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(r), !0
        }
        return !1
    }
    processNamedExports() {
        if (!this.isTypeScriptTransformEnabled) return !1;
        this.tokens.copyExpectedToken(t._export), this.tokens.copyExpectedToken(t.braceL);
        const n = la(this.tokens);
        let r = !1;
        for (; !this.tokens.matches1(t.braceR);) {
            const o = Pt(this.tokens);
            if (o.isType || !n && this.shouldElideExportedName(o.leftName)) {
                for (; this.tokens.currentIndex() < o.endIndex;) this.tokens.removeToken();
                this.tokens.matches1(t.comma) && this.tokens.removeToken()
            } else {
                for (r = !0; this.tokens.currentIndex() < o.endIndex;) this.tokens.copyToken();
                this.tokens.matches1(t.comma) && this.tokens.copyToken()
            }
        }
        return this.tokens.copyExpectedToken(t.braceR), !this.keepUnusedImports && n && !r && (this.tokens.removeToken(), this.tokens.removeToken(), at(this.tokens)), !0
    }
    shouldElideExportedName(n) {
        return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(n) && !this.declarationInfo.valueDeclarations.has(n)
    }
}
class Ep extends Ue {
    constructor(n, r, o) {
        super(), this.rootTransformer = n, this.tokens = r, this.isImportsTransformEnabled = o
    }
    process() {
        return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) ? (this.processNamedExportEnum(), !0) : this.tokens.matches3(t._export, t._default, t._enum) ? (this.processDefaultExportEnum(), !0) : !1
    }
    processNamedExportEnum() {
        if (this.isImportsTransformEnabled) {
            this.tokens.removeInitialToken();
            const n = this.tokens.identifierNameAtRelativeIndex(1);
            this.processEnum(), this.tokens.appendCode(` exports.${n} = ${n};`)
        } else this.tokens.copyToken(), this.processEnum()
    }
    processDefaultExportEnum() {
        this.tokens.removeInitialToken(), this.tokens.removeToken();
        const n = this.tokens.identifierNameAtRelativeIndex(1);
        this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${n};`) : this.tokens.appendCode(` export default ${n};`)
    }
    processEnum() {
        this.tokens.replaceToken("const"), this.tokens.copyExpectedToken(t.name);
        let n = !1;
        this.tokens.matchesContextual(p._of) && (this.tokens.removeToken(), n = this.tokens.matchesContextual(p._symbol), this.tokens.removeToken());
        const r = this.tokens.matches3(t.braceL, t.name, t.eq);
        this.tokens.appendCode(' = require("flow-enums-runtime")');
        const o = !n && !r;
        for (this.tokens.replaceTokenTrimmingLeftWhitespace(o ? ".Mirrored([" : "({"); !this.tokens.matches1(t.braceR);) {
            if (this.tokens.matches1(t.ellipsis)) {
                this.tokens.removeToken();
                break
            }
            this.processEnumElement(n, r), this.tokens.matches1(t.comma) && this.tokens.copyToken()
        }
        this.tokens.replaceToken(o ? "]);" : "});")
    }
    processEnumElement(n, r) {
        if (n) {
            const o = this.tokens.identifierName();
            this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${o}")`)
        } else r ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)
    }
}

function Tp(e) {
    let n, r = e[0],
        o = 1;
    for (; o < e.length;) {
        const a = e[o],
            i = e[o + 1];
        if (o += 2, (a === "optionalAccess" || a === "optionalCall") && r == null) return;
        a === "access" || a === "optionalAccess" ? (n = r, r = i(r)) : (a === "call" || a === "optionalCall") && (r = i((...c) => r.call(n, ...c)), n = void 0)
    }
    return r
}
const Vt = "jest",
    Ap = ["mock", "unmock", "enableAutomock", "disableAutomock"];
class as extends Ue {
    __init() {
        this.hoistedFunctionNames = []
    }
    constructor(n, r, o, a) {
        super(), this.rootTransformer = n, this.tokens = r, this.nameManager = o, this.importProcessor = a, as.prototype.__init.call(this)
    }
    process() {
        return this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(t.name, t.dot, t.name, t.parenL) && this.tokens.identifierName() === Vt ? Tp([this, "access", n => n.importProcessor, "optionalAccess", n => n.getGlobalNames, "call", n => n(), "optionalAccess", n => n.has, "call", n => n(Vt)]) ? !1 : this.extractHoistedCalls() : !1
    }
    getHoistedCode() {
        return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map(n => `${n}();`).join("") : ""
    }
    extractHoistedCalls() {
        this.tokens.removeToken();
        let n = !1;
        for (; this.tokens.matches3(t.dot, t.name, t.parenL);) {
            const r = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
            if (Ap.includes(r)) {
                const a = this.nameManager.claimFreeName("__jestHoist");
                this.hoistedFunctionNames.push(a), this.tokens.replaceToken(`function ${a}(){${Vt}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.tokens.appendCode(";}"), n = !1
            } else n ? this.tokens.copyToken() : this.tokens.replaceToken(`${Vt}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), n = !0
        }
        return !0
    }
}
class Sp extends Ue {
    constructor(n) {
        super(), this.tokens = n
    }
    process() {
        if (this.tokens.matches1(t.num)) {
            const n = this.tokens.currentTokenCode();
            if (n.includes("_")) return this.tokens.replaceToken(n.replace(/_/g, "")), !0
        }
        return !1
    }
}
class Np extends Ue {
    constructor(n, r) {
        super(), this.tokens = n, this.nameManager = r
    }
    process() {
        return this.tokens.matches2(t._catch, t.braceL) ? (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0) : !1
    }
}
class Cp extends Ue {
    constructor(n, r) {
        super(), this.tokens = n, this.nameManager = r
    }
    process() {
        if (this.tokens.matches1(t.nullishCoalescing)) {
            const o = this.tokens.currentToken();
            return this.tokens.tokens[o.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0
        }
        if (this.tokens.matches1(t._delete) && this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart) return this.tokens.removeInitialToken(), !0;
        const r = this.tokens.currentToken().subscriptStartIndex;
        if (r != null && this.tokens.tokens[r].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== t._super) {
            const o = this.nameManager.claimFreeName("_");
            let a;
            if (r > 0 && this.tokens.matches1AtIndex(r - 1, t._delete) && this.isLastSubscriptInChain() ? a = `${o} => delete ${o}` : a = `${o} => ${o}`, this.tokens.tokens[r].isAsyncOperation && (a = `async ${a}`), this.tokens.matches2(t.questionDot, t.parenL) || this.tokens.matches2(t.questionDot, t.lessThan)) this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${a}`);
            else if (this.tokens.matches2(t.questionDot, t.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${a}`);
            else if (this.tokens.matches1(t.questionDot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${a}.`);
            else if (this.tokens.matches1(t.dot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${a}.`);
            else if (this.tokens.matches1(t.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${a}[`);
            else if (this.tokens.matches1(t.parenL)) this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${a}(`);
            else throw new Error("Unexpected subscript operator in optional chain.");
            return !0
        }
        return !1
    }
    isLastSubscriptInChain() {
        let n = 0;
        for (let r = this.tokens.currentIndex() + 1;; r++) {
            if (r >= this.tokens.tokens.length) throw new Error("Reached the end of the code while finding the end of the access chain.");
            if (this.tokens.tokens[r].isOptionalChainStart ? n++ : this.tokens.tokens[r].isOptionalChainEnd && n--, n < 0) return !0;
            if (n === 0 && this.tokens.tokens[r].subscriptStartIndex != null) return !1
        }
    }
    justSkippedSuper() {
        let n = 0,
            r = this.tokens.currentIndex() - 1;
        for (;;) {
            if (r < 0) throw new Error("Reached the start of the code while finding the start of the access chain.");
            if (this.tokens.tokens[r].isOptionalChainStart ? n-- : this.tokens.tokens[r].isOptionalChainEnd && n++, n < 0) return !1;
            if (n === 0 && this.tokens.tokens[r].subscriptStartIndex != null) return this.tokens.tokens[r - 1].type === t._super;
            r--
        }
    }
}
class Rp extends Ue {
    constructor(n, r, o, a) {
        super(), this.rootTransformer = n, this.tokens = r, this.importProcessor = o, this.options = a
    }
    process() {
        const n = this.tokens.currentIndex();
        if (this.tokens.identifierName() === "createReactClass") {
            const r = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
            return r ? this.tokens.replaceToken(`(0, ${r})`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(n), !0
        }
        if (this.tokens.matches3(t.name, t.dot, t.name) && this.tokens.identifierName() === "React" && this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass") {
            const r = this.importProcessor && this.importProcessor.getIdentifierReplacement("React") || "React";
            return this.tokens.replaceToken(r), this.tokens.copyToken(), this.tokens.copyToken(), this.tryProcessCreateClassCall(n), !0
        }
        return !1
    }
    tryProcessCreateClassCall(n) {
        const r = this.findDisplayName(n);
        r && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(t.parenL), this.tokens.copyExpectedToken(t.braceL), this.tokens.appendCode(`displayName: '${r}',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), this.tokens.copyExpectedToken(t.parenR))
    }
    findDisplayName(n) {
        return n < 2 ? null : this.tokens.matches2AtIndex(n - 2, t.name, t.eq) ? this.tokens.identifierNameAtIndex(n - 2) : n >= 2 && this.tokens.tokens[n - 2].identifierRole === $.ObjectKey ? this.tokens.identifierNameAtIndex(n - 2) : this.tokens.matches2AtIndex(n - 2, t._export, t._default) ? this.getDisplayNameFromFilename() : null
    }
    getDisplayNameFromFilename() {
        const r = (this.options.filePath || "unknown").split("/"),
            o = r[r.length - 1],
            a = o.lastIndexOf("."),
            i = a === -1 ? o : o.slice(0, a);
        return i === "index" && r[r.length - 2] ? r[r.length - 2] : i
    }
    classNeedsDisplayName() {
        let n = this.tokens.currentIndex();
        if (!this.tokens.matches2(t.parenL, t.braceL)) return !1;
        const r = n + 1,
            o = this.tokens.tokens[r].contextId;
        if (o == null) throw new Error("Expected non-null context ID on object open-brace.");
        for (; n < this.tokens.tokens.length; n++) {
            const a = this.tokens.tokens[n];
            if (a.type === t.braceR && a.contextId === o) {
                n++;
                break
            }
            if (this.tokens.identifierNameAtIndex(n) === "displayName" && this.tokens.tokens[n].identifierRole === $.ObjectKey && a.contextId === o) return !1
        }
        if (n === this.tokens.tokens.length) throw new Error("Unexpected end of input when processing React class.");
        return this.tokens.matches1AtIndex(n, t.parenR) || this.tokens.matches2AtIndex(n, t.comma, t.parenR)
    }
}
class is extends Ue {
    __init() {
        this.extractedDefaultExportName = null
    }
    constructor(n, r) {
        super(), this.tokens = n, this.filePath = r, is.prototype.__init.call(this)
    }
    setExtractedDefaultExportName(n) {
        this.extractedDefaultExportName = n
    }
    getPrefixCode() {
        return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g, " ").trim()
    }
    getSuffixCode() {
        const n = new Set;
        for (const o of this.tokens.tokens) !o.isType && ro(o) && o.identifierRole !== $.ImportDeclaration && n.add(this.tokens.identifierNameForToken(o));
        const r = Array.from(n).map(o => ({
            variableName: o,
            uniqueLocalName: o
        }));
        return this.extractedDefaultExportName && r.push({
            variableName: this.extractedDefaultExportName,
            uniqueLocalName: "default"
        }), `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${r.map(({variableName:o,uniqueLocalName:a})=>`
        reactHotLoader.register($ {
            o
        }, "${a}", $ {
            JSON.stringify(this.filePath || "")
        });
        `).join(`
        `)}
  leaveModule(module);
})();`
    }
    process() {
        return !1
    }
}
const Pp = new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "await", "false", "null", "true"]);

function Ms(e) {
    if (e.length === 0 || !Bt[e.charCodeAt(0)]) return !1;
    for (let n = 1; n < e.length; n++)
        if (!qe[e.charCodeAt(n)]) return !1;
    return !Pp.has(e)
}
class Lp extends Ue {
    constructor(n, r, o) {
        super(), this.rootTransformer = n, this.tokens = r, this.isImportsTransformEnabled = o
    }
    process() {
        return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._public) || this.tokens.matches1(t._protected) || this.tokens.matches1(t._private) || this.tokens.matches1(t._abstract) || this.tokens.matches1(t._readonly) || this.tokens.matches1(t._override) || this.tokens.matches1(t.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(t._enum) || this.tokens.matches2(t._const, t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum) ? (this.processEnum(!0), !0) : !1
    }
    processEnum(n = !1) {
        for (this.tokens.removeInitialToken(); this.tokens.matches1(t._const) || this.tokens.matches1(t._enum);) this.tokens.removeToken();
        const r = this.tokens.identifierName();
        this.tokens.removeToken(), n && !this.isImportsTransformEnabled && this.tokens.appendCode("export "), this.tokens.appendCode(`var ${r}; (function (${r})`), this.tokens.copyExpectedToken(t.braceL), this.processEnumBody(r), this.tokens.copyExpectedToken(t.braceR), n && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${r} || (exports.${r} = ${r} = {}));`) : this.tokens.appendCode(`)(${r} || (${r} = {}));`)
    }
    processEnumBody(n) {
        let r = null;
        for (; !this.tokens.matches1(t.braceR);) {
            const {
                nameStringCode: o,
                variableName: a
            } = this.extractEnumKeyInfo(this.tokens.currentToken());
            this.tokens.removeInitialToken(), this.tokens.matches3(t.eq, t.string, t.comma) || this.tokens.matches3(t.eq, t.string, t.braceR) ? this.processStringLiteralEnumMember(n, o, a) : this.tokens.matches1(t.eq) ? this.processExplicitValueEnumMember(n, o, a) : this.processImplicitValueEnumMember(n, o, a, r), this.tokens.matches1(t.comma) && this.tokens.removeToken(), a != null ? r = a : r = `${n}[${o}]`
        }
    }
    extractEnumKeyInfo(n) {
        if (n.type === t.name) {
            const r = this.tokens.identifierNameForToken(n);
            return {
                nameStringCode: `"${r}"`,
                variableName: Ms(r) ? r : null
            }
        } else if (n.type === t.string) {
            const r = this.tokens.stringValueForToken(n);
            return {
                nameStringCode: this.tokens.code.slice(n.start, n.end),
                variableName: Ms(r) ? r : null
            }
        } else throw new Error("Expected name or string at beginning of enum element.")
    }
    processStringLiteralEnumMember(n, r, o) {
        o != null ? (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${n}[${r}] = ${o};`)) : (this.tokens.appendCode(`${n}[${r}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";"))
    }
    processExplicitValueEnumMember(n, r, o) {
        const a = this.tokens.currentToken().rhsEndIndex;
        if (a == null) throw new Error("Expected rhsEndIndex on enum assign.");
        if (o != null) {
            for (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(); this.tokens.currentIndex() < a;) this.rootTransformer.processToken();
            this.tokens.appendCode(`; ${n}[${n}[${r}] = ${o}] = ${r};`)
        } else {
            for (this.tokens.appendCode(`${n}[${n}[${r}]`), this.tokens.copyToken(); this.tokens.currentIndex() < a;) this.rootTransformer.processToken();
            this.tokens.appendCode(`] = ${r};`)
        }
    }
    processImplicitValueEnumMember(n, r, o, a) {
        let i = a != null ? `${a} + 1` : "0";
        o != null && (this.tokens.appendCode(`const ${o} = ${i}; `), i = o), this.tokens.appendCode(`${n}[${n}[${r}] = ${i}] = ${r};`)
    }
}
class cn {
    __init() {
        this.transformers = []
    }
    __init2() {
        this.generatedVariables = []
    }
    constructor(n, r, o, a) {
        cn.prototype.__init.call(this), cn.prototype.__init2.call(this), this.nameManager = n.nameManager, this.helperManager = n.helperManager;
        const {
            tokenProcessor: i,
            importProcessor: c
        } = n;
        this.tokens = i, this.isImportsTransformEnabled = r.includes("imports"), this.isReactHotLoaderTransformEnabled = r.includes("react-hot-loader"), this.disableESTransforms = !!a.disableESTransforms, a.disableESTransforms || (this.transformers.push(new Cp(i, this.nameManager)), this.transformers.push(new Sp(i)), this.transformers.push(new Np(i, this.nameManager))), r.includes("jsx") && (a.jsxRuntime !== "preserve" && this.transformers.push(new st(this, i, c, this.nameManager, a)), this.transformers.push(new Rp(this, i, c, a)));
        let f = null;
        if (r.includes("react-hot-loader")) {
            if (!a.filePath) throw new Error("filePath is required when using the react-hot-loader transform.");
            f = new is(i, a.filePath), this.transformers.push(f)
        }
        if (r.includes("imports")) {
            if (c === null) throw new Error("Expected non-null importProcessor with imports transform enabled.");
            this.transformers.push(new Nt(this, i, c, this.nameManager, this.helperManager, f, o, !!a.enableLegacyTypeScriptModuleInterop, r.includes("typescript"), r.includes("flow"), !!a.preserveDynamicImport, !!a.keepUnusedImports))
        } else this.transformers.push(new Ip(i, this.nameManager, this.helperManager, f, r.includes("typescript"), r.includes("flow"), !!a.keepUnusedImports, a));
        r.includes("flow") && this.transformers.push(new Ep(this, i, r.includes("imports"))), r.includes("typescript") && this.transformers.push(new Lp(this, i, r.includes("imports"))), r.includes("jest") && this.transformers.push(new as(this, i, this.nameManager, c))
    }
    transform() {
        this.tokens.reset(), this.processBalancedCode();
        let r = this.isImportsTransformEnabled ? '"use strict";' : "";
        for (const c of this.transformers) r += c.getPrefixCode();
        r += this.helperManager.emitHelpers(), r += this.generatedVariables.map(c => ` var ${c};`).join("");
        for (const c of this.transformers) r += c.getHoistedCode();
        let o = "";
        for (const c of this.transformers) o += c.getSuffixCode();
        const a = this.tokens.finish();
        let {
            code: i
        } = a;
        if (i.startsWith("#!")) {
            let c = i.indexOf(`
`);
            return c === -1 && (c = i.length, i += `
`), {
                code: i.slice(0, c + 1) + r + i.slice(c + 1) + o,
                mappings: this.shiftMappings(a.mappings, r.length)
            }
        } else return {
            code: r + i + o,
            mappings: this.shiftMappings(a.mappings, r.length)
        }
    }
    processBalancedCode() {
        let n = 0,
            r = 0;
        for (; !this.tokens.isAtEnd();) {
            if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL)) n++;
            else if (this.tokens.matches1(t.braceR)) {
                if (n === 0) return;
                n--
            }
            if (this.tokens.matches1(t.parenL)) r++;
            else if (this.tokens.matches1(t.parenR)) {
                if (r === 0) return;
                r--
            }
            this.processToken()
        }
    }
    processToken() {
        if (this.tokens.matches1(t._class)) {
            this.processClass();
            return
        }
        for (const n of this.transformers)
            if (n.process()) return;
        this.tokens.copyToken()
    }
    processNamedClass() {
        if (!this.tokens.matches2(t._class, t.name)) throw new Error("Expected identifier for exported class name.");
        const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
        return this.processClass(), n
    }
    processClass() {
        const n = xp(this, this.tokens, this.nameManager, this.disableESTransforms),
            r = (n.headerInfo.isExpression || !n.headerInfo.className) && n.staticInitializerNames.length + n.instanceInitializerNames.length > 0;
        let o = n.headerInfo.className;
        r && (o = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(o), this.tokens.appendCode(` (${o} =`));
        const i = this.tokens.currentToken().contextId;
        if (i == null) throw new Error("Expected class to have a context ID.");
        for (this.tokens.copyExpectedToken(t._class); !this.tokens.matchesContextIdAndLabel(t.braceL, i);) this.processToken();
        this.processClassBody(n, o);
        const c = n.staticInitializerNames.map(f => `${o}.${f}()`);
        r ? this.tokens.appendCode(`, ${c.map(f=>`${f}, `).join("")}${o})`) : n.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${c.map(f=>`${f};`).join(" ")}`)
    }
    processClassBody(n, r) {
        const {
            headerInfo: o,
            constructorInsertPos: a,
            constructorInitializerStatements: i,
            fields: c,
            instanceInitializerNames: f,
            rangesToRemove: h
        } = n;
        let u = 0,
            g = 0;
        const d = this.tokens.currentToken().contextId;
        if (d == null) throw new Error("Expected non-null context ID on class.");
        this.tokens.copyExpectedToken(t.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");
        const x = i.length + f.length > 0;
        if (a === null && x) {
            const N = this.makeConstructorInitCode(i, f, r);
            if (o.hasSuperclass) {
                const y = this.nameManager.claimFreeName("args");
                this.tokens.appendCode(`constructor(...${y}) { super(...${y}); ${N}; }`)
            } else this.tokens.appendCode(`constructor() { ${N}; }`)
        }
        for (; !this.tokens.matchesContextIdAndLabel(t.braceR, d);)
            if (u < c.length && this.tokens.currentIndex() === c[u].start) {
                let N = !1;
                for (this.tokens.matches1(t.bracketL) ? this.tokens.copyTokenWithPrefix(`${c[u].initializerName}() {this`) : this.tokens.matches1(t.string) || this.tokens.matches1(t.num) ? (this.tokens.copyTokenWithPrefix(`${c[u].initializerName}() {this[`), N = !0) : this.tokens.copyTokenWithPrefix(`${c[u].initializerName}() {this.`); this.tokens.currentIndex() < c[u].end;) N && this.tokens.currentIndex() === c[u].equalsIndex && this.tokens.appendCode("]"), this.processToken();
                this.tokens.appendCode("}"), u++
            } else if (g < h.length && this.tokens.currentIndex() >= h[g].start) {
            for (this.tokens.currentIndex() < h[g].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < h[g].end;) this.tokens.removeToken();
            g++
        } else this.tokens.currentIndex() === a ? (this.tokens.copyToken(), x && this.tokens.appendCode(`;${this.makeConstructorInitCode(i,f,r)};`), this.processToken()) : this.processToken();
        this.tokens.copyExpectedToken(t.braceR)
    }
    makeConstructorInitCode(n, r, o) {
        return [...n, ...r.map(a => `${o}.prototype.${a}.call(this)`)].join(";")
    }
    processPossibleArrowParamEnd() {
        if (this.tokens.matches2(t.parenR, t.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
            let n = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[n].isType;) n++;
            if (this.tokens.matches1AtIndex(n, t.arrow)) {
                for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < n;) this.tokens.removeToken();
                return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"), !0
            }
        }
        return !1
    }
    processPossibleAsyncArrowWithTypeParams() {
        if (!this.tokens.matchesContextual(p._async) && !this.tokens.matches1(t._async)) return !1;
        const n = this.tokens.tokenAtRelativeIndex(1);
        if (n.type !== t.lessThan || !n.isType) return !1;
        let r = this.tokens.currentIndex() + 1;
        for (; this.tokens.tokens[r].isType;) r++;
        if (this.tokens.matches1AtIndex(r, t.parenL)) {
            for (this.tokens.replaceToken("async ("), this.tokens.removeInitialToken(); this.tokens.currentIndex() < r;) this.tokens.removeToken();
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
    shiftMappings(n, r) {
        for (let o = 0; o < n.length; o++) {
            const a = n[o];
            a !== void 0 && (n[o] = a + r)
        }
        return n
    }
}
var _r = {},
    qs;

function Fp() {
    return qs || (qs = 1, function(e) {
        e.__esModule = !0, e.LinesAndColumns = void 0;
        var n = `
`,
            r = "\r",
            o = function() {
                function a(i) {
                    this.string = i;
                    for (var c = [0], f = 0; f < i.length;) switch (i[f]) {
                        case n:
                            f += n.length, c.push(f);
                            break;
                        case r:
                            f += r.length, i[f] === n && (f += n.length), c.push(f);
                            break;
                        default:
                            f++;
                            break
                    }
                    this.offsets = c
                }
                return a.prototype.locationForIndex = function(i) {
                    if (i < 0 || i > this.string.length) return null;
                    for (var c = 0, f = this.offsets; f[c + 1] <= i;) c++;
                    var h = i - f[c];
                    return {
                        line: c,
                        column: h
                    }
                }, a.prototype.indexForLocation = function(i) {
                    var c = i.line,
                        f = i.column;
                    return c < 0 || c >= this.offsets.length || f < 0 || f > this.lengthOfLine(c) ? null : this.offsets[c] + f
                }, a.prototype.lengthOfLine = function(i) {
                    var c = this.offsets[i],
                        f = i === this.offsets.length - 1 ? this.string.length : this.offsets[i + 1];
                    return f - c
                }, a
            }();
        e.LinesAndColumns = o, e.default = o
    }(_r)), _r
}
Fp();

function Dp(e) {
    const n = new Set;
    for (let r = 0; r < e.tokens.length; r++) e.matches1AtIndex(r, t._import) && !e.matches3AtIndex(r, t._import, t.name, t.eq) && Op(e, r, n);
    return n
}

function Op(e, n, r) {
    n++, !e.matches1AtIndex(n, t.parenL) && (e.matches1AtIndex(n, t.name) && (r.add(e.identifierNameAtIndex(n)), n++, e.matches1AtIndex(n, t.comma) && n++), e.matches1AtIndex(n, t.star) && (n += 2, r.add(e.identifierNameAtIndex(n)), n++), e.matches1AtIndex(n, t.braceL) && (n++, jp(e, n, r)))
}

function jp(e, n, r) {
    for (;;) {
        if (e.matches1AtIndex(n, t.braceR)) return;
        const o = Pt(e, n);
        if (n = o.endIndex, o.isType || r.add(o.rightName), e.matches2AtIndex(n, t.comma, t.braceR)) return;
        if (e.matches1AtIndex(n, t.braceR)) return;
        if (e.matches1AtIndex(n, t.comma)) n++;
        else throw new Error(`Unexpected token: ${JSON.stringify(e.tokens[n])}`)
    }
}

function Bp(e, n) {
    el(n);
    try {
        const r = $p(e, n),
            a = new cn(r, n.transforms, !!n.enableLegacyBabel5ModuleInterop, n).transform();
        let i = {
            code: a.code
        };
        if (n.sourceMapOptions) {
            if (!n.filePath) throw new Error("filePath must be specified when generating a source map.");
            i = {
                ...i,
                sourceMap: U1(a, n.filePath, n.sourceMapOptions, e, r.tokenProcessor.tokens)
            }
        }
        return i
    } catch (r) {
        throw n.filePath && (r.message = `Error transforming ${n.filePath}: ${r.message}`), r
    }
}

function $p(e, n) {
    const r = n.transforms.includes("jsx"),
        o = n.transforms.includes("typescript"),
        a = n.transforms.includes("flow"),
        i = n.disableESTransforms === !0,
        c = bp(e, r, o, a),
        f = c.tokens,
        h = c.scopes,
        u = new Or(e, f),
        g = new en(u),
        d = new St(e, f, a, i, g),
        x = !!n.enableLegacyTypeScriptModuleInterop;
    let N = null;
    return n.transforms.includes("imports") ? (N = new ot(u, d, x, n, n.transforms.includes("typescript"), !!n.keepUnusedImports, g), N.preprocessTokens(), ws(d, h, N.getGlobalNames()), n.transforms.includes("typescript") && !n.keepUnusedImports && N.pruneTypeOnlyImports()) : n.transforms.includes("typescript") && !n.keepUnusedImports && ws(d, h, Dp(d)), {
        tokenProcessor: d,
        scopes: h,
        nameManager: u,
        importProcessor: N,
        helperManager: g
    }
}
var Mp = Object.defineProperty,
    qp = Object.defineProperties,
    Up = Object.getOwnPropertyDescriptors,
    un = Object.getOwnPropertySymbols,
    ua = Object.prototype.hasOwnProperty,
    pa = Object.prototype.propertyIsEnumerable,
    Us = (e, n, r) => n in e ? Mp(e, n, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[n] = r,
    je = (e, n) => {
        for (var r in n || (n = {})) ua.call(n, r) && Us(e, r, n[r]);
        if (un)
            for (var r of un(n)) pa.call(n, r) && Us(e, r, n[r]);
        return e
    },
    it = (e, n) => qp(e, Up(n)),
    zp = (e, n) => {
        var r = {};
        for (var o in e) ua.call(e, o) && n.indexOf(o) < 0 && (r[o] = e[o]);
        if (e != null && un)
            for (var o of un(e)) n.indexOf(o) < 0 && pa.call(e, o) && (r[o] = e[o]);
        return r
    },
    Hp = (e, n, r) => new Promise((o, a) => {
        var i = h => {
                try {
                    f(r.next(h))
                } catch (u) {
                    a(u)
                }
            },
            c = h => {
                try {
                    f(r.throw(h))
                } catch (u) {
                    a(u)
                }
            },
            f = h => h.done ? o(h.value) : Promise.resolve(h.value).then(i, c);
        f((r = r.apply(e, n)).next())
    }),
    Gp = e => {
        const {
            tabMode: n = "indentation"
        } = e, r = fe.useRef(null), [o, a] = fe.useState(e.code || ""), {
            theme: i
        } = e;
        return fe.useEffect(() => {
            a(e.code)
        }, [e.code]), ji(r, c => {
            const f = c.slice(0, -1);
            a(f), e.onChange && e.onChange(f)
        }, {
            disabled: e.disabled,
            indentation: n === "indentation" ? 2 : void 0
        }), Oe.jsx("div", {
            className: e.className,
            style: e.style,
            children: Oe.jsx(Di, {
                code: o,
                theme: e.theme || Ys.nightOwl,
                language: e.language,
                children: ({
                    className: c,
                    tokens: f,
                    getLineProps: h,
                    getTokenProps: u,
                    style: g
                }) => Oe.jsx("pre", {
                    className: c,
                    style: je(je({
                        margin: 0,
                        outline: "none",
                        padding: 10,
                        fontFamily: "inherit"
                    }, i && typeof i.plain == "object" ? i.plain : {}), g),
                    ref: r,
                    spellCheck: "false",
                    children: f.map((d, x) => Oe.jsxs("span", it(je({}, h({
                        line: d
                    })), {
                        children: [d.filter(N => !N.empty).map((N, y) => Oe.jsx("span", je({}, u({
                            token: N
                        })), `token-${y}`)), `
`]
                    }), `line-${x}`))
                })
            })
        })
    },
    Vp = Gp,
    Wp = fe.createContext({}),
    xn = Wp,
    Xp = ["jsx", "imports"];

function Pr(e = {}) {
    const n = Array.isArray(e.transforms) ? e.transforms.filter(Boolean) : Xp;
    return r => Bp(r, {
        transforms: n
    }).code
}
var Zp = (e, n) => class extends fe.Component {
        componentDidCatch(o) {
            n(o)
        }
        render() {
            return typeof e == "function" ? Oe.jsx(e, {}) : jt.isValidElement(e) ? e : null
        }
    },
    fa = Zp,
    Yp = (e, n) => {
        const r = Object.keys(n),
            o = r.map(a => n[a]);
        return new Function(...r, e)(...o)
    },
    ha = Yp;

function Kp(...e) {
    return e.reduce((n, r) => (...o) => n(r(...o)))
}
var da = 'const _jsxFileName = "";',
    zs = e => e.trim().replace(/;$/, ""),
    Jp = e => e.replace(da, "").trim(),
    Qp = e => da + e,
    ef = e => `return (${e})`,
    tf = ({
        code: e = "",
        scope: n = {},
        enableTypeScript: r = !0
    }, o) => {
        const a = ["jsx"];
        r && a.push("typescript");
        const i = Kp(Qp, Pr({
            transforms: ["imports"]
        }), Jp, zs, Pr({
            transforms: a
        }), ef, zs)(e);
        return fa(ha(i, je({
            React: jt
        }, n)), o)
    },
    nf = ({
        code: e = "",
        scope: n = {},
        enableTypeScript: r = !0
    }, o, a) => {
        const i = f => {
            typeof f > "u" ? a(new SyntaxError("`render` must be called with valid JSX.")) : o(fa(f, a))
        };
        if (!/render\s*\(/.test(e)) return a(new SyntaxError("No-Inline evaluations must call `render`."));
        const c = ["jsx", "imports"];
        r && c.splice(1, 0, "typescript"), ha(Pr({
            transforms: c
        })(e), it(je({
            React: jt
        }, n), {
            render: i
        }))
    };

function rf({
    children: e,
    code: n = "",
    language: r = "tsx",
    theme: o,
    enableTypeScript: a = !0,
    disabled: i = !1,
    scope: c,
    transformCode: f,
    noInline: h = !1
}) {
    const [u, g] = fe.useState({
        error: void 0,
        element: void 0
    });

    function d(y) {
        return Hp(this, null, function*() {
            const k = w => {
                g(C => it(je({}, C), {
                    error: w.toString(),
                    element: void 0
                }))
            };
            try {
                const w = f ? f(y) : y;
                try {
                    const C = yield Promise.resolve(w), b = R => g({
                        error: void 0,
                        element: R,
                        newCode: y
                    });
                    if (typeof C != "string") throw new Error("Code failed to transform");
                    const T = {
                        code: C,
                        scope: c,
                        enableTypeScript: a
                    };
                    h ? (g(R => it(je({}, R), {
                        error: void 0,
                        element: null
                    })), nf(T, b, k)) : b(tf(T, k))
                } catch (C) {
                    return k(C)
                }
            } catch (w) {
                return k(w), Promise.resolve()
            }
        })
    }
    const x = y => g({
        error: y.toString()
    });
    fe.useEffect(() => {
        d(n).catch(x)
    }, [n, c, h, f]);
    const N = y => {
        d(y).catch(x)
    };
    return Oe.jsx(xn.Provider, {
        value: it(je({}, u), {
            code: n,
            language: r,
            theme: o,
            disabled: i,
            onError: x,
            onChange: N
        }),
        children: e
    })
}
var uf = rf;

function pf(e) {
    const {
        code: n,
        language: r,
        theme: o,
        disabled: a,
        onChange: i
    } = fe.useContext(xn);
    return Oe.jsx(Vp, je({
        theme: o,
        code: n,
        language: r,
        disabled: a,
        onChange: i
    }, e))
}

function ff(e) {
    const {
        error: n
    } = fe.useContext(xn);
    return n ? Oe.jsx("pre", it(je({}, e), {
        children: n
    })) : null
}
var sf = class extends fe.Component {
    static getDerivedStateFromError() {
        return {
            hasError: !0
        }
    }
    constructor(e) {
        super(e), this.state = {
            hasError: !1
        }
    }
    componentDidCatch(e) {
        var n, r;
        (r = (n = this.props).onError) == null || r.call(n, e)
    }
    render() {
        return this.state.hasError ? null : this.props.children
    }
};

function of(e) {
    var n = e,
        {
            Component: r = "div"
        } = n,
        o = zp(n, ["Component"]);
    const {
        element: a,
        onError: i,
        newCode: c
    } = fe.useContext(xn);
    return Oe.jsx(sf, {
        onError: i,
        children: Oe.jsx(r, it(je({}, o), {
            children: a ? Oe.jsx(a, {}) : null
        }))
    }, c)
}
var hf = of;
const df = (e = "") => {
        var o, a;
        const n = (o = Ct.me.deviceUI.current) == null ? void 0 : o.deviceId;
        if (!n) return;
        const r = Ra().worldManager.devices.getDeviceById(n);
        r && ((a = r.callAction) == null || a.call(r, e))
    },
    mf = e => {
        const [n, r] = jt.useState(Ct.me.properties.get(e) ?? "");
        return fe.useEffect(() => Hs(() => Ct.me.properties.get(e), a => {
            r(a + "")
        }), [e]), n
    },
    gf = e => {
        var o;
        const [n, r] = jt.useState(((o = Ct.me.inventory.slots.get(e)) == null ? void 0 : o.amount) ?? 0);
        return fe.useEffect(() => Hs(() => {
            var i;
            return (i = Ct.me.inventory.slots.get(e)) == null ? void 0 : i.amount
        }, i => {
            r(i)
        }), [e]), n
    };
export {
    df as C, uf as L, mf as a, pf as b, ff as c, hf as d, gf as u
};