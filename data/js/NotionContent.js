import {
    at as fe,
    x as he,
    r as n,
    a as ye,
    j as K,
    d as Ee,
    A as xe
} from "./_index.js";
var ce = {
        exports: {}
    },
    be;

function ke() {
    return be || (be = 1, function(h) {
        var g = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
        /**
         * Prism: Lightweight, robust, elegant syntax highlighting
         *
         * @license MIT <https://opensource.org/licenses/MIT>
         * @author Lea Verou <https://lea.verou.me>
         * @namespace
         * @public
         */
        var e = function(o) {
            var d = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                m = 0,
                E = {},
                r = {
                    manual: o.Prism && o.Prism.manual,
                    disableWorkerMessageHandler: o.Prism && o.Prism.disableWorkerMessageHandler,
                    util: {
                        encode: function a(t) {
                            return t instanceof u ? new u(t.type, a(t.content), t.alias) : Array.isArray(t) ? t.map(a) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                        },
                        type: function(a) {
                            return Object.prototype.toString.call(a).slice(8, -1)
                        },
                        objId: function(a) {
                            return a.__id || Object.defineProperty(a, "__id", {
                                value: ++m
                            }), a.__id
                        },
                        clone: function a(t, i) {
                            i = i || {};
                            var l, s;
                            switch (r.util.type(t)) {
                                case "Object":
                                    if (s = r.util.objId(t), i[s]) return i[s];
                                    l = {}, i[s] = l;
                                    for (var v in t) t.hasOwnProperty(v) && (l[v] = a(t[v], i));
                                    return l;
                                case "Array":
                                    return s = r.util.objId(t), i[s] ? i[s] : (l = [], i[s] = l, t.forEach(function(x, p) {
                                        l[p] = a(x, i)
                                    }), l);
                                default:
                                    return t
                            }
                        },
                        getLanguage: function(a) {
                            for (; a;) {
                                var t = d.exec(a.className);
                                if (t) return t[1].toLowerCase();
                                a = a.parentElement
                            }
                            return "none"
                        },
                        setLanguage: function(a, t) {
                            a.className = a.className.replace(RegExp(d, "gi"), ""), a.classList.add("language-" + t)
                        },
                        currentScript: function() {
                            if (typeof document > "u") return null;
                            if (document.currentScript && document.currentScript.tagName === "SCRIPT") return document.currentScript;
                            try {
                                throw new Error
                            } catch (l) {
                                var a = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(l.stack) || [])[1];
                                if (a) {
                                    var t = document.getElementsByTagName("script");
                                    for (var i in t)
                                        if (t[i].src == a) return t[i]
                                }
                                return null
                            }
                        },
                        isActive: function(a, t, i) {
                            for (var l = "no-" + t; a;) {
                                var s = a.classList;
                                if (s.contains(t)) return !0;
                                if (s.contains(l)) return !1;
                                a = a.parentElement
                            }
                            return !!i
                        }
                    },
                    languages: {
                        plain: E,
                        plaintext: E,
                        text: E,
                        txt: E,
                        extend: function(a, t) {
                            var i = r.util.clone(r.languages[a]);
                            for (var l in t) i[l] = t[l];
                            return i
                        },
                        insertBefore: function(a, t, i, l) {
                            l = l || r.languages;
                            var s = l[a],
                                v = {};
                            for (var x in s)
                                if (s.hasOwnProperty(x)) {
                                    if (x == t)
                                        for (var p in i) i.hasOwnProperty(p) && (v[p] = i[p]);
                                    i.hasOwnProperty(x) || (v[x] = s[x])
                                } var _ = l[a];
                            return l[a] = v, r.languages.DFS(r.languages, function(w, C) {
                                C === _ && w != a && (this[w] = v)
                            }), v
                        },
                        DFS: function a(t, i, l, s) {
                            s = s || {};
                            var v = r.util.objId;
                            for (var x in t)
                                if (t.hasOwnProperty(x)) {
                                    i.call(t, x, t[x], l || x);
                                    var p = t[x],
                                        _ = r.util.type(p);
                                    _ === "Object" && !s[v(p)] ? (s[v(p)] = !0, a(p, i, null, s)) : _ === "Array" && !s[v(p)] && (s[v(p)] = !0, a(p, i, x, s))
                                }
                        }
                    },
                    plugins: {},
                    highlightAll: function(a, t) {
                        r.highlightAllUnder(document, a, t)
                    },
                    highlightAllUnder: function(a, t, i) {
                        var l = {
                            callback: i,
                            container: a,
                            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                        };
                        r.hooks.run("before-highlightall", l), l.elements = Array.prototype.slice.apply(l.container.querySelectorAll(l.selector)), r.hooks.run("before-all-elements-highlight", l);
                        for (var s = 0, v; v = l.elements[s++];) r.highlightElement(v, t === !0, l.callback)
                    },
                    highlightElement: function(a, t, i) {
                        var l = r.util.getLanguage(a),
                            s = r.languages[l];
                        r.util.setLanguage(a, l);
                        var v = a.parentElement;
                        v && v.nodeName.toLowerCase() === "pre" && r.util.setLanguage(v, l);
                        var x = a.textContent,
                            p = {
                                element: a,
                                language: l,
                                grammar: s,
                                code: x
                            };

                        function _(C) {
                            p.highlightedCode = C, r.hooks.run("before-insert", p), p.element.innerHTML = p.highlightedCode, r.hooks.run("after-highlight", p), r.hooks.run("complete", p), i && i.call(p.element)
                        }
                        if (r.hooks.run("before-sanity-check", p), v = p.element.parentElement, v && v.nodeName.toLowerCase() === "pre" && !v.hasAttribute("tabindex") && v.setAttribute("tabindex", "0"), !p.code) {
                            r.hooks.run("complete", p), i && i.call(p.element);
                            return
                        }
                        if (r.hooks.run("before-highlight", p), !p.grammar) {
                            _(r.util.encode(p.code));
                            return
                        }
                        if (t && o.Worker) {
                            var w = new Worker(r.filename);
                            w.onmessage = function(C) {
                                _(C.data)
                            }, w.postMessage(JSON.stringify({
                                language: p.language,
                                code: p.code,
                                immediateClose: !0
                            }))
                        } else _(r.highlight(p.code, p.grammar, p.language))
                    },
                    highlight: function(a, t, i) {
                        var l = {
                            code: a,
                            grammar: t,
                            language: i
                        };
                        if (r.hooks.run("before-tokenize", l), !l.grammar) throw new Error('The language "' + l.language + '" has no grammar.');
                        return l.tokens = r.tokenize(l.code, l.grammar), r.hooks.run("after-tokenize", l), u.stringify(r.util.encode(l.tokens), l.language)
                    },
                    tokenize: function(a, t) {
                        var i = t.rest;
                        if (i) {
                            for (var l in i) t[l] = i[l];
                            delete t.rest
                        }
                        var s = new y;
                        return c(s, s.head, a), b(a, s, t, s.head, 0), S(s)
                    },
                    hooks: {
                        all: {},
                        add: function(a, t) {
                            var i = r.hooks.all;
                            i[a] = i[a] || [], i[a].push(t)
                        },
                        run: function(a, t) {
                            var i = r.hooks.all[a];
                            if (!(!i || !i.length))
                                for (var l = 0, s; s = i[l++];) s(t)
                        }
                    },
                    Token: u
                };
            o.Prism = r;

            function u(a, t, i, l) {
                this.type = a, this.content = t, this.alias = i, this.length = (l || "").length | 0
            }
            u.stringify = function a(t, i) {
                if (typeof t == "string") return t;
                if (Array.isArray(t)) {
                    var l = "";
                    return t.forEach(function(_) {
                        l += a(_, i)
                    }), l
                }
                var s = {
                        type: t.type,
                        content: a(t.content, i),
                        tag: "span",
                        classes: ["token", t.type],
                        attributes: {},
                        language: i
                    },
                    v = t.alias;
                v && (Array.isArray(v) ? Array.prototype.push.apply(s.classes, v) : s.classes.push(v)), r.hooks.run("wrap", s);
                var x = "";
                for (var p in s.attributes) x += " " + p + '="' + (s.attributes[p] || "").replace(/"/g, "&quot;") + '"';
                return "<" + s.tag + ' class="' + s.classes.join(" ") + '"' + x + ">" + s.content + "</" + s.tag + ">"
            };

            function f(a, t, i, l) {
                a.lastIndex = t;
                var s = a.exec(i);
                if (s && l && s[1]) {
                    var v = s[1].length;
                    s.index += v, s[0] = s[0].slice(v)
                }
                return s
            }

            function b(a, t, i, l, s, v) {
                for (var x in i)
                    if (!(!i.hasOwnProperty(x) || !i[x])) {
                        var p = i[x];
                        p = Array.isArray(p) ? p : [p];
                        for (var _ = 0; _ < p.length; ++_) {
                            if (v && v.cause == x + "," + _) return;
                            var w = p[_],
                                C = w.inside,
                                ee = !!w.lookbehind,
                                z = !!w.greedy,
                                ie = w.alias;
                            if (z && !w.pattern.global) {
                                var le = w.pattern.toString().match(/[imsuy]*$/)[0];
                                w.pattern = RegExp(w.pattern.source, le + "g")
                            }
                            for (var te = w.pattern || w, N = l.next, j = s; N !== t.tail && !(v && j >= v.reach); j += N.value.length, N = N.next) {
                                var B = N.value;
                                if (t.length > a.length) return;
                                if (!(B instanceof u)) {
                                    var M = 1,
                                        I;
                                    if (z) {
                                        if (I = f(te, j, a, ee), !I || I.index >= a.length) break;
                                        var Z = I.index,
                                            oe = I.index + I[0].length,
                                            T = j;
                                        for (T += N.value.length; Z >= T;) N = N.next, T += N.value.length;
                                        if (T -= N.value.length, j = T, N.value instanceof u) continue;
                                        for (var H = N; H !== t.tail && (T < oe || typeof H.value == "string"); H = H.next) M++, T += H.value.length;
                                        M--, B = a.slice(j, T), I.index -= j
                                    } else if (I = f(te, 0, B, ee), !I) continue;
                                    var Z = I.index,
                                        q = I[0],
                                        V = B.slice(0, Z),
                                        ae = B.slice(Z + q.length),
                                        J = j + B.length;
                                    v && J > v.reach && (v.reach = J);
                                    var X = N.prev;
                                    V && (X = c(t, X, V), j += V.length), $(t, X, M);
                                    var U = new u(x, C ? r.tokenize(q, C) : q, ie, q);
                                    if (N = c(t, X, U), ae && c(t, N, ae), M > 1) {
                                        var W = {
                                            cause: x + "," + _,
                                            reach: J
                                        };
                                        b(a, t, i, N.prev, j, W), v && W.reach > v.reach && (v.reach = W.reach)
                                    }
                                }
                            }
                        }
                    }
            }

            function y() {
                var a = {
                        value: null,
                        prev: null,
                        next: null
                    },
                    t = {
                        value: null,
                        prev: a,
                        next: null
                    };
                a.next = t, this.head = a, this.tail = t, this.length = 0
            }

            function c(a, t, i) {
                var l = t.next,
                    s = {
                        value: i,
                        prev: t,
                        next: l
                    };
                return t.next = s, l.prev = s, a.length++, s
            }

            function $(a, t, i) {
                for (var l = t.next, s = 0; s < i && l !== a.tail; s++) l = l.next;
                t.next = l, l.prev = t, a.length -= s
            }

            function S(a) {
                for (var t = [], i = a.head.next; i !== a.tail;) t.push(i.value), i = i.next;
                return t
            }
            if (!o.document) return o.addEventListener && (r.disableWorkerMessageHandler || o.addEventListener("message", function(a) {
                var t = JSON.parse(a.data),
                    i = t.language,
                    l = t.code,
                    s = t.immediateClose;
                o.postMessage(r.highlight(l, r.languages[i], i)), s && o.close()
            }, !1)), r;
            var F = r.util.currentScript();
            F && (r.filename = F.src, F.hasAttribute("data-manual") && (r.manual = !0));

            function k() {
                r.manual || r.highlightAll()
            }
            if (!r.manual) {
                var A = document.readyState;
                A === "loading" || A === "interactive" && F && F.defer ? document.addEventListener("DOMContentLoaded", k) : window.requestAnimationFrame ? window.requestAnimationFrame(k) : window.setTimeout(k, 16)
            }
            return r
        }(g);
        h.exports && (h.exports = e), typeof fe < "u" && (fe.Prism = e), e.languages.markup = {
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
            }, e.languages.markup.tag.inside["attr-value"].inside.entity = e.languages.markup.entity, e.languages.markup.doctype.inside["internal-subset"].inside = e.languages.markup, e.hooks.add("wrap", function(o) {
                o.type === "entity" && (o.attributes.title = o.content.replace(/&amp;/, "&"))
            }), Object.defineProperty(e.languages.markup.tag, "addInlined", {
                value: function(d, m) {
                    var E = {};
                    E["language-" + m] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: !0,
                        inside: e.languages[m]
                    }, E.cdata = /^<!\[CDATA\[|\]\]>$/i;
                    var r = {
                        "included-cdata": {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            inside: E
                        }
                    };
                    r["language-" + m] = {
                        pattern: /[\s\S]+/,
                        inside: e.languages[m]
                    };
                    var u = {};
                    u[d] = {
                        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                            return d
                        }), "i"),
                        lookbehind: !0,
                        greedy: !0,
                        inside: r
                    }, e.languages.insertBefore("markup", "cdata", u)
                }
            }), Object.defineProperty(e.languages.markup.tag, "addAttribute", {
                value: function(o, d) {
                    e.languages.markup.tag.inside["special-attr"].push({
                        pattern: RegExp(/(^|["'\s])/.source + "(?:" + o + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                        lookbehind: !0,
                        inside: {
                            "attr-name": /^[^\s=]+/,
                            "attr-value": {
                                pattern: /=[\s\S]+/,
                                inside: {
                                    value: {
                                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                        lookbehind: !0,
                                        alias: [d, "language-" + d],
                                        inside: e.languages[d]
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
            }), e.languages.html = e.languages.markup, e.languages.mathml = e.languages.markup, e.languages.svg = e.languages.markup, e.languages.xml = e.languages.extend("markup", {}), e.languages.ssml = e.languages.xml, e.languages.atom = e.languages.xml, e.languages.rss = e.languages.xml,
            function(o) {
                var d = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                o.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + d.source + ")*?" + /(?:;|(?=\s*\{))/.source),
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
                        pattern: RegExp("\\burl\\((?:" + d.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: !0,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {
                                pattern: RegExp("^" + d.source + "$"),
                                alias: "url"
                            }
                        }
                    },
                    selector: {
                        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + d.source + ")*(?=\\s*\\{)"),
                        lookbehind: !0
                    },
                    string: {
                        pattern: d,
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
                }, o.languages.css.atrule.inside.rest = o.languages.css;
                var m = o.languages.markup;
                m && (m.tag.addInlined("style", "css"), m.tag.addAttribute("style", "css"))
            }(e), e.languages.clike = {
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
            }, e.languages.javascript = e.languages.extend("clike", {
                "class-name": [e.languages.clike["class-name"], {
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
                    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
                    lookbehind: !0
                },
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            }), e.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                    lookbehind: !0,
                    greedy: !0,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: !0,
                            alias: "language-regex",
                            inside: e.languages.regex
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
                    inside: e.languages.javascript
                }, {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: !0,
                    inside: e.languages.javascript
                }],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            }), e.languages.insertBefore("javascript", "string", {
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
                                rest: e.languages.javascript
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
            }), e.languages.insertBefore("javascript", "operator", {
                "literal-property": {
                    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                    lookbehind: !0,
                    alias: "property"
                }
            }), e.languages.markup && (e.languages.markup.tag.addInlined("script", "javascript"), e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), e.languages.js = e.languages.javascript,
            function() {
                if (typeof e > "u" || typeof document > "u") return;
                Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
                var o = "Loading…",
                    d = function(F, k) {
                        return "✖ Error " + F + " while fetching file: " + k
                    },
                    m = "✖ Error: File does not exist or is empty",
                    E = {
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
                    r = "data-src-status",
                    u = "loading",
                    f = "loaded",
                    b = "failed",
                    y = "pre[data-src]:not([" + r + '="' + f + '"]):not([' + r + '="' + u + '"])';

                function c(F, k, A) {
                    var a = new XMLHttpRequest;
                    a.open("GET", F, !0), a.onreadystatechange = function() {
                        a.readyState == 4 && (a.status < 400 && a.responseText ? k(a.responseText) : a.status >= 400 ? A(d(a.status, a.statusText)) : A(m))
                    }, a.send(null)
                }

                function $(F) {
                    var k = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(F || "");
                    if (k) {
                        var A = Number(k[1]),
                            a = k[2],
                            t = k[3];
                        return a ? t ? [A, Number(t)] : [A, void 0] : [A, A]
                    }
                }
                e.hooks.add("before-highlightall", function(F) {
                    F.selector += ", " + y
                }), e.hooks.add("before-sanity-check", function(F) {
                    var k = F.element;
                    if (k.matches(y)) {
                        F.code = "", k.setAttribute(r, u);
                        var A = k.appendChild(document.createElement("CODE"));
                        A.textContent = o;
                        var a = k.getAttribute("data-src"),
                            t = F.language;
                        if (t === "none") {
                            var i = (/\.(\w+)$/.exec(a) || [, "none"])[1];
                            t = E[i] || i
                        }
                        e.util.setLanguage(A, t), e.util.setLanguage(k, t);
                        var l = e.plugins.autoloader;
                        l && l.loadLanguages(t), c(a, function(s) {
                            k.setAttribute(r, f);
                            var v = $(k.getAttribute("data-range"));
                            if (v) {
                                var x = s.split(/\r\n?|\n/g),
                                    p = v[0],
                                    _ = v[1] == null ? x.length : v[1];
                                p < 0 && (p += x.length), p = Math.max(0, Math.min(p - 1, x.length)), _ < 0 && (_ += x.length), _ = Math.max(0, Math.min(_, x.length)), s = x.slice(p, _).join(`
`), k.hasAttribute("data-start") || k.setAttribute("data-start", String(p + 1))
                            }
                            A.textContent = s, e.highlightElement(A)
                        }, function(s) {
                            k.setAttribute(r, b), A.textContent = s
                        })
                    }
                }), e.plugins.fileHighlight = {
                    highlight: function(k) {
                        for (var A = (k || document).querySelectorAll(y), a = 0, t; t = A[a++];) e.highlightElement(t)
                    }
                };
                var S = !1;
                e.fileHighlight = function() {
                    S || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), S = !0), e.plugins.fileHighlight.highlight.apply(this, arguments)
                }
            }()
    }(ce)), ce.exports
}
var ge = ke();
(function(h) {
    var g = h.util.clone(h.languages.javascript),
        e = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
        o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
        d = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

    function m(u, f) {
        return u = u.replace(/<S>/g, function() {
            return e
        }).replace(/<BRACES>/g, function() {
            return o
        }).replace(/<SPREAD>/g, function() {
            return d
        }), RegExp(u, f)
    }
    d = m(d).source, h.languages.jsx = h.languages.extend("markup", g), h.languages.jsx.tag.pattern = m(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), h.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, h.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, h.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, h.languages.jsx.tag.inside.comment = g.comment, h.languages.insertBefore("inside", "attr-name", {
        spread: {
            pattern: m(/<SPREAD>/.source),
            inside: h.languages.jsx
        }
    }, h.languages.jsx.tag), h.languages.insertBefore("inside", "special-attr", {
        script: {
            pattern: m(/=<BRACES>/.source),
            alias: "language-javascript",
            inside: {
                "script-punctuation": {
                    pattern: /^=(?=\{)/,
                    alias: "punctuation"
                },
                rest: h.languages.jsx
            }
        }
    }, h.languages.jsx.tag);
    var E = function(u) {
            return u ? typeof u == "string" ? u : typeof u.content == "string" ? u.content : u.content.map(E).join("") : ""
        },
        r = function(u) {
            for (var f = [], b = 0; b < u.length; b++) {
                var y = u[b],
                    c = !1;
                if (typeof y != "string" && (y.type === "tag" && y.content[0] && y.content[0].type === "tag" ? y.content[0].content[0].content === "</" ? f.length > 0 && f[f.length - 1].tagName === E(y.content[0].content[1]) && f.pop() : y.content[y.content.length - 1].content === "/>" || f.push({
                        tagName: E(y.content[0].content[1]),
                        openedBraces: 0
                    }) : f.length > 0 && y.type === "punctuation" && y.content === "{" ? f[f.length - 1].openedBraces++ : f.length > 0 && f[f.length - 1].openedBraces > 0 && y.type === "punctuation" && y.content === "}" ? f[f.length - 1].openedBraces-- : c = !0), (c || typeof y == "string") && f.length > 0 && f[f.length - 1].openedBraces === 0) {
                    var $ = E(y);
                    b < u.length - 1 && (typeof u[b + 1] == "string" || u[b + 1].type === "plain-text") && ($ += E(u[b + 1]), u.splice(b + 1, 1)), b > 0 && (typeof u[b - 1] == "string" || u[b - 1].type === "plain-text") && ($ = E(u[b - 1]) + $, u.splice(b - 1, 1), b--), u[b] = new h.Token("plain-text", $, null, $)
                }
                y.content && typeof y.content != "string" && r(y.content)
            }
        };
    h.hooks.add("after-tokenize", function(u) {
        u.language !== "jsx" && u.language !== "tsx" || r(u.tokens)
    })
})(Prism);

function we(h, g) {
    if (h == null) return {};
    var e = {},
        o = Object.keys(h),
        d, m;
    for (m = 0; m < o.length; m++) d = o[m], !(g.indexOf(d) >= 0) && (e[d] = h[d]);
    return e
}
var Fe = ["video", "image", "embed", "figma"],
    Ae = function(g) {
        var e = g.block,
            o = g.mapImageUrl,
            d = e.value,
            m = e.value.type;
        if (!Fe.includes(m)) return null;
        var E = d.format,
            r = E ?? {},
            u = r.display_source,
            f = u === void 0 ? void 0 : u,
            b = r.block_aspect_ratio,
            y = b === void 0 ? void 0 : b,
            c = r.block_height,
            $ = c === void 0 ? 1 : c,
            S = r.block_width,
            F = S === void 0 ? 1 : S,
            k = y || $ / F;
        if (m === "embed" || m === "video" || m === "figma") return n.createElement("div", {
            style: {
                paddingBottom: k * 100 + "%",
                position: "relative"
            }
        }, n.createElement("iframe", {
            className: "notion-image-inset",
            src: m === "figma" ? d.properties.source[0][0] : f
        }));
        if (e.value.type === "image") {
            var A, a = o(d.properties.source[0][0], e),
                t = (A = d.properties.caption) === null || A === void 0 ? void 0 : A[0][0];
            return y ? n.createElement("div", {
                style: {
                    paddingBottom: k * 100 + "%",
                    position: "relative"
                }
            }, n.createElement("img", {
                className: "notion-image-inset",
                alt: t || "notion image",
                src: a
            })) : n.createElement("img", {
                alt: t,
                src: a
            })
        }
        return null
    },
    _e = function(g) {
        var e = g.code,
            o = g.language,
            d = o === void 0 ? "javascript" : o,
            m = d.toLowerCase(),
            E = ge.languages[m] || ge.languages.javascript,
            r = "language-" + d.toLowerCase();
        return n.createElement("pre", {
            className: "notion-code " + r
        }, n.createElement("code", {
            className: r,
            dangerouslySetInnerHTML: {
                __html: ge.highlight(e, E, d)
            }
        }))
    },
    Y = function() {
        for (var g = arguments.length, e = new Array(g), o = 0; o < g; o++) e[o] = arguments[o];
        return e.filter(function(d) {
            return !!d
        }).join(" ")
    },
    Q = function(g) {
        return g.reduce(function(e, o) {
            return e + o[0]
        }, "")
    },
    $e = function(g) {
        var e = [],
            o = void 0,
            d = -1;
        return Object.keys(g).forEach(function(m) {
            var E;
            (E = g[m].value.content) === null || E === void 0 || E.forEach(function(r) {
                var u, f, b = (u = g[r]) === null || u === void 0 || (f = u.value) === null || f === void 0 ? void 0 : f.type;
                b && b !== o && (d++, o = b, e[d] = []), e[d].push(r)
            }), o = void 0
        }), e
    },
    Se = function(g, e) {
        var o = $e(e),
            d = o.find(function(m) {
                return m.includes(g)
            });
        if (d) return d.indexOf(g) + 1
    },
    Ne = function(g, e) {
        g === void 0 && (g = "");
        var o = new URL("https://www.notion.so" + (g.startsWith("/image") ? g : "/image/" + encodeURIComponent(g)));
        if (e && !g.includes("/images/page-cover/")) {
            var d = e.value.parent_table === "space" ? "block" : e.value.parent_table;
            o.searchParams.set("table", d), o.searchParams.set("id", e.value.id), o.searchParams.set("cache", "v2")
        }
        return o.toString()
    },
    Ce = function(g) {
        return g === void 0 && (g = ""), g = g.replace(/-/g, ""), "/" + g
    },
    je = function(g) {
        return g.type === "page" || g.type === "callout"
    },
    re = function(g) {
        var e, o, d = g.block,
            m = g.className,
            E = g.big,
            r = g.mapImageUrl;
        if (!je(d.value)) return null;
        var u = (e = d.value.format) === null || e === void 0 ? void 0 : e.page_icon,
            f = (o = d.value.properties) === null || o === void 0 ? void 0 : o.title;
        if (u != null && u.includes("http")) {
            var b = r(u, d);
            return n.createElement("img", {
                className: Y(m, E ? "notion-page-icon-cover" : "notion-page-icon"),
                src: b,
                alt: f ? Q(f) : "Icon"
            })
        } else return n.createElement("span", {
            className: Y(m, "notion-emoji", E ? "notion-page-icon-cover" : "notion-page-icon"),
            role: "img",
            "aria-label": u
        }, u)
    },
    Ie = function(g) {
        var e = g.blockMap,
            o = g.mapPageUrl,
            d = g.mapImageUrl,
            m = Object.keys(e),
            E = m[0];
        if (!E) return null;
        var r = [],
            u = E;
        do {
            var f, b, y = e[u];
            if (!y || !y.value) break;
            var c = (f = y.value.properties) === null || f === void 0 ? void 0 : f.title[0][0],
                $ = (b = y.value.format) === null || b === void 0 ? void 0 : b.page_icon;
            if (!(c || $)) break;
            r.push({
                block: y,
                active: u === E,
                pageId: u,
                title: c,
                icon: $
            });
            var S = y.value.parent_id;
            if (!S) break;
            u = S
        } while (!0);
        return r.reverse(), n.createElement("header", {
            className: "notion-page-header"
        }, n.createElement("div", {
            className: "notion-nav-breadcrumbs"
        }, r.map(function(F, k) {
            return n.createElement(n.Fragment, {
                key: F.pageId
            }, n.createElement("a", {
                className: "notion-nav-breadcrumb " + (F.active ? "notion-nav-breadcrumb-active" : ""),
                href: F.active ? void 0 : o(F.pageId)
            }, F.icon && n.createElement(re, {
                className: "notion-nav-icon",
                block: F.block,
                mapImageUrl: d
            }), F.title && n.createElement("span", {
                className: "notion-nav-title"
            }, F.title)), k < r.length - 1 && n.createElement("span", {
                className: "notion-nav-spacer"
            }, "/"))
        })))
    },
    Te = function(g) {
        return function(e) {
            return e == null ? void 0 : e.map(function(o, d) {
                var m = o[0],
                    E = o[1];
                return E ? E.reduceRight(function(r, u) {
                    var f = function() {
                            switch (u[0]) {
                                case "h":
                                    return n.createElement("span", {
                                        key: d,
                                        className: "notion-" + u[1]
                                    }, r);
                                case "c":
                                    return n.createElement("code", {
                                        key: d,
                                        className: "notion-inline-code"
                                    }, r);
                                case "b":
                                    return n.createElement("b", {
                                        key: d
                                    }, r);
                                case "i":
                                    return n.createElement("em", {
                                        key: d
                                    }, r);
                                case "s":
                                    return n.createElement("s", {
                                        key: d
                                    }, r);
                                case "a":
                                    return n.createElement("a", {
                                        className: "notion-link",
                                        href: u[1],
                                        key: d
                                    }, r);
                                default:
                                    return n.createElement(n.Fragment, {
                                        key: d
                                    }, r)
                            }
                        },
                        b = g == null ? void 0 : g[u[0]];
                    if (b) {
                        var y = u[1] ? {
                            decoratorValue: u[1]
                        } : {};
                        return n.createElement(b, Object.assign({
                            key: d
                        }, y, {
                            renderComponent: f
                        }), m)
                    }
                    return f()
                }, n.createElement(n.Fragment, null, m)) : n.createElement(n.Fragment, {
                    key: d
                }, m)
            })
        }
    },
    Re = function(g) {
        var e = g.block,
            o = g.children,
            d = g.level,
            m = g.fullPage,
            E = g.hideHeader,
            r = g.blockMap,
            u = g.mapPageUrl,
            f = g.mapImageUrl,
            b = g.customBlockComponents,
            y = g.customDecoratorComponents,
            c = e == null ? void 0 : e.value,
            $ = function() {
                var k, A, a, t, i, l, s, v, x, p, _, w = Te(y);
                switch (c == null ? void 0 : c.type) {
                    case "page":
                        if (d === 0)
                            if (m) {
                                if (!c.properties) return null;
                                var C = c.format || {},
                                    ee = C.page_icon,
                                    z = C.page_cover,
                                    ie = C.page_cover_position,
                                    le = C.page_full_width,
                                    te = C.page_small_text,
                                    N = (1 - (ie || .5)) * 100;
                                return n.createElement("div", {
                                    className: "notion"
                                }, !E && n.createElement(Ie, {
                                    blockMap: r,
                                    mapPageUrl: u,
                                    mapImageUrl: f
                                }), z && n.createElement("img", {
                                    src: f(z, e),
                                    alt: Q(c.properties.title),
                                    className: "notion-page-cover",
                                    style: {
                                        objectPosition: "center " + N + "%"
                                    }
                                }), n.createElement("main", {
                                    className: Y("notion-page", !z && "notion-page-offset", le && "notion-full-width", te && "notion-small-text")
                                }, ee && n.createElement(re, {
                                    className: z ? "notion-page-icon-offset" : void 0,
                                    block: e,
                                    big: !0,
                                    mapImageUrl: f
                                }), n.createElement("div", {
                                    className: "notion-title"
                                }, w(c.properties.title)), o))
                            } else return n.createElement("main", {
                                className: "notion"
                            }, o);
                        else return c.properties ? n.createElement("a", {
                            className: "notion-page-link",
                            href: u(c.id)
                        }, c.format && n.createElement("div", {
                            className: "notion-page-icon"
                        }, n.createElement(re, {
                            block: e,
                            mapImageUrl: f
                        })), n.createElement("div", {
                            className: "notion-page-text"
                        }, w(c.properties.title))) : null;
                    case "header":
                        return c.properties ? n.createElement("h1", {
                            className: "notion-h1"
                        }, w(c.properties.title)) : null;
                    case "sub_header":
                        return c.properties ? n.createElement("h2", {
                            className: "notion-h2"
                        }, w(c.properties.title)) : null;
                    case "sub_sub_header":
                        return c.properties ? n.createElement("h3", {
                            className: "notion-h3"
                        }, w(c.properties.title)) : null;
                    case "divider":
                        return n.createElement("hr", {
                            className: "notion-hr"
                        });
                    case "text":
                        if (!c.properties) return n.createElement("div", {
                            className: "notion-blank"
                        }, " ");
                        var j = (k = c.format) === null || k === void 0 ? void 0 : k.block_color;
                        return n.createElement("p", {
                            className: Y("notion-text", j && "notion-" + j)
                        }, w(c.properties.title));
                    case "bulleted_list":
                    case "numbered_list":
                        var B = function(O, R) {
                                return c.type === "bulleted_list" ? n.createElement("ul", {
                                    className: "notion-list notion-list-disc"
                                }, O) : n.createElement("ol", {
                                    start: R,
                                    className: "notion-list notion-list-numbered"
                                }, O)
                            },
                            M = null;
                        c.content ? M = n.createElement(n.Fragment, null, c.properties && n.createElement("li", null, w(c.properties.title)), B(o)) : M = c.properties ? n.createElement("li", null, w(c.properties.title)) : null;
                        var I = e.value.type !== r[e.value.parent_id].value.type,
                            oe = Se(c.id, r);
                        return I ? B(M, oe) : M;
                    case "image":
                    case "embed":
                    case "figma":
                    case "video":
                        var T = e.value;
                        return n.createElement("figure", {
                            className: "notion-asset-wrapper",
                            style: T.format !== void 0 ? {
                                width: T.format.block_width
                            } : void 0
                        }, n.createElement(Ae, {
                            block: e,
                            mapImageUrl: f
                        }), T.properties.caption && n.createElement("figcaption", {
                            className: "notion-image-caption"
                        }, w(T.properties.caption)));
                    case "code": {
                        if (c.properties.title) {
                            var H = c.properties.title[0][0],
                                Z = c.properties.language[0][0];
                            return n.createElement(_e, {
                                key: c.id,
                                language: Z || "",
                                code: H
                            })
                        }
                        break
                    }
                    case "column_list":
                        return n.createElement("div", {
                            className: "notion-row"
                        }, o);
                    case "column":
                        var q = 46,
                            V = c.format.column_ratio,
                            ae = Number((1 / V).toFixed(0)),
                            J = (ae - 1) * q,
                            X = "calc((100% - " + J + "px) * " + V + ")";
                        return n.createElement(n.Fragment, null, n.createElement("div", {
                            className: "notion-column",
                            style: {
                                width: X
                            }
                        }, o), n.createElement("div", {
                            className: "notion-spacer",
                            style: {
                                width: q
                            }
                        }));
                    case "quote":
                        return c.properties ? n.createElement("blockquote", {
                            className: "notion-quote"
                        }, w(c.properties.title)) : null;
                    case "collection_view":
                        if (!e) return null;
                        var U = e == null || (A = e.collection) === null || A === void 0 ? void 0 : A.types[0];
                        return n.createElement("div", null, n.createElement("h3", {
                            className: "notion-h3"
                        }, w((a = e.collection) === null || a === void 0 ? void 0 : a.title)), (U == null ? void 0 : U.type) === "table" && n.createElement("div", {
                            style: {
                                maxWidth: "100%",
                                marginTop: 5
                            }
                        }, n.createElement("table", {
                            className: "notion-table"
                        }, n.createElement("thead", null, n.createElement("tr", {
                            className: "notion-tr"
                        }, (t = U.format) === null || t === void 0 || (i = t.table_properties) === null || i === void 0 ? void 0 : i.filter(function(L) {
                            return L.visible
                        }).map(function(L, O) {
                            var R, P;
                            return n.createElement("th", {
                                className: "notion-th",
                                key: O,
                                style: {
                                    minWidth: L.width
                                }
                            }, (R = e.collection) === null || R === void 0 || (P = R.schema[L.property]) === null || P === void 0 ? void 0 : P.name)
                        }))), n.createElement("tbody", null, e == null || (l = e.collection) === null || l === void 0 ? void 0 : l.data.map(function(L, O) {
                            var R, P;
                            return n.createElement("tr", {
                                className: "notion-tr",
                                key: O
                            }, (R = U.format) === null || R === void 0 || (P = R.table_properties) === null || P === void 0 ? void 0 : P.filter(function(D) {
                                return D.visible
                            }).map(function(D, ne) {
                                var G, ue;
                                return n.createElement("td", {
                                    key: ne,
                                    className: "notion-td " + (D.property === "title" ? "notion-bold" : "")
                                }, w(L[(G = e.collection) === null || G === void 0 || (ue = G.schema[D.property]) === null || ue === void 0 ? void 0 : ue.name]))
                            }))
                        })))), (U == null ? void 0 : U.type) === "gallery" && n.createElement("div", {
                            className: "notion-gallery"
                        }, (s = e.collection) === null || s === void 0 ? void 0 : s.data.map(function(L, O) {
                            var R, P;
                            return n.createElement("div", {
                                key: "col-" + O,
                                className: "notion-gallery-card"
                            }, n.createElement("div", {
                                className: "notion-gallery-content"
                            }, (R = U.format) === null || R === void 0 || (P = R.gallery_properties) === null || P === void 0 ? void 0 : P.filter(function(D) {
                                return D.visible
                            }).map(function(D, ne) {
                                var G;
                                return n.createElement("p", {
                                    key: ne + "item",
                                    className: "notion-gallery-data " + (ne === 0 ? "is-first" : "")
                                }, Q(L[(G = e.collection) === null || G === void 0 ? void 0 : G.schema[D.property].name]))
                            })))
                        })));
                    case "callout":
                        return n.createElement("div", {
                            className: Y("notion-callout", c.format.block_color && "notion-" + c.format.block_color, c.format.block_color && "notion-" + c.format.block_color + "_co")
                        }, n.createElement("div", null, n.createElement(re, {
                            block: e,
                            mapImageUrl: f
                        })), n.createElement("div", {
                            className: "notion-callout-text"
                        }, w(c.properties.title)));
                    case "bookmark":
                        var W = c.properties.link,
                            se = (v = c.properties.title) !== null && v !== void 0 ? v : W,
                            de = c.properties.description,
                            pe = (x = c.format) === null || x === void 0 ? void 0 : x.block_color,
                            ve = (p = c.format) === null || p === void 0 ? void 0 : p.bookmark_icon,
                            me = (_ = c.format) === null || _ === void 0 ? void 0 : _.bookmark_cover;
                        return n.createElement("div", {
                            className: "notion-row"
                        }, n.createElement("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: Y("notion-bookmark", pe && "notion-" + pe),
                            href: W[0][0]
                        }, n.createElement("div", null, n.createElement("div", {
                            className: "notion-bookmark-title"
                        }, w(se)), de && n.createElement("div", {
                            className: "notion-bookmark-description"
                        }, w(de)), n.createElement("div", {
                            className: "notion-bookmark-link"
                        }, ve && n.createElement("img", {
                            src: ve,
                            alt: Q(se)
                        }), n.createElement("div", null, w(W)))), me && n.createElement("div", {
                            className: "notion-bookmark-image"
                        }, n.createElement("img", {
                            src: me,
                            alt: Q(se)
                        }))));
                    case "toggle":
                        return n.createElement("details", {
                            className: "notion-toggle"
                        }, n.createElement("summary", null, w(c.properties.title)), n.createElement("div", null, o));
                    default:
                        return n.createElement("div", null)
                }
                return null
            };
        if (b && b[c == null ? void 0 : c.type] && d !== 0) {
            var S = b[c == null ? void 0 : c.type];
            return n.createElement(S, {
                renderComponent: $,
                blockMap: r,
                blockValue: c,
                level: d
            }, o)
        }
        return $()
    },
    Ue = function h(g) {
        var e, o, d = g.level,
            m = d === void 0 ? 0 : d,
            E = g.currentId,
            r = g.mapPageUrl,
            u = r === void 0 ? Ce : r,
            f = g.mapImageUrl,
            b = f === void 0 ? Ne : f,
            y = we(g, ["level", "currentId", "mapPageUrl", "mapImageUrl"]),
            c = y.blockMap,
            $ = E || Object.keys(c)[0],
            S = c[$];
        return S ? he.createElement(Re, Object.assign({
            key: $,
            level: m,
            block: S,
            mapPageUrl: u,
            mapImageUrl: b
        }, y), S == null || (e = S.value) === null || e === void 0 || (o = e.content) === null || o === void 0 ? void 0 : o.map(function(F) {
            return he.createElement(h, Object.assign({
                key: F,
                currentId: F,
                level: m + 1,
                mapPageUrl: u,
                mapImageUrl: b
            }, y))
        })) : null
    };
const Me = h => {
        const [g, e] = n.useState();
        n.useEffect(() => {
            h.content || h.id && ye({
                url: `/api/content/${h.id}`,
                cacheKey: "NOTION_CONTENT",
                success: m => e(m)
            })
        }, [h.id, h.content]);
        const o = h.content || g,
            d = () => o ? K.jsx(Ue, {
                blockMap: o
            }) : h.hideSkeleton ? null : K.jsx(xe, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            });
        return K.jsxs("div", {
            className: "maxWidth",
            children: [K.jsx("base", {
                target: "_blank"
            }), K.jsx(Pe, {
                children: d()
            })]
        })
    },
    Pe = Ee.div.attrs({
        className: "maxWidth"
    })``;
export {
    Me as
    default
};