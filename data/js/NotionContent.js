import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    n,
    t as r
} from "./dist-1.js";
import {
    C as i,
    X as a
} from "./utils.js";
import {
    t as o
} from "./react-1.js";
import {
    a as s
} from "./modal.js";
import {
    t as c
} from "./jsx-runtime.js";
import {
    l
} from "./_index.js";
import {
    t as u
} from "./toPropertyKey.js";
n();
var d = e(o(), 1);

function f(e, {
    lenient: t = !1
} = {}) {
    if (typeof e != `string`) throw TypeError(`Expected a string`);
    if (e = e.trim(), e.includes(` `)) return !1;
    try {
        return new URL(e), !0
    } catch {
        return t ? f(`https://${e}`) : !1
    }
}
var p = (e, t, n, r) => {
        if (n === `length` || n === `prototype` || n === `arguments` || n === `caller`) return;
        let i = Object.getOwnPropertyDescriptor(e, n),
            a = Object.getOwnPropertyDescriptor(t, n);
        (m(i, a) || !r) && Object.defineProperty(e, n, a)
    },
    m = function(e, t) {
        return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value)
    },
    h = (e, t) => {
        let n = Object.getPrototypeOf(t);
        n !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, n)
    },
    g = (e, t) => `/* Wrapped ${e}*/\n${t}`,
    _ = Object.getOwnPropertyDescriptor(Function.prototype, `toString`),
    v = Object.getOwnPropertyDescriptor(Function.prototype.toString, `name`),
    y = (e, t, n) => {
        let r = n === `` ? `` : `with ${n.trim()}() `,
            i = g.bind(null, r, t.toString());
        Object.defineProperty(i, "name", v);
        let {
            writable: a,
            enumerable: o,
            configurable: s
        } = _;
        Object.defineProperty(e, "toString", {
            value: i,
            writable: a,
            enumerable: o,
            configurable: s
        })
    };

function b(e, t, {
    ignoreNonConfigurable: n = !1
} = {}) {
    let {
        name: r
    } = e;
    for (let r of Reflect.ownKeys(t)) p(e, t, r, n);
    return h(e, t), y(e, t, r), e
}
var x = 2147483647,
    S = new WeakMap,
    C = new WeakMap,
    w = new WeakMap;

function T(e, t) {
    let n = e.get(t);
    if (n) {
        if (n.maxAge <= Date.now()) e.delete(t);
        else return n
    }
}

function E(e, {
    cacheKey: t,
    cache: n = new Map,
    maxAge: r
} = {}) {
    if (r === 0) return e;
    if (typeof r == `number` && Number.isFinite(r)) {
        if (r > x) throw TypeError(`The \`maxAge\` option cannot exceed ${x}.`);
        if (r < 0) throw TypeError("The `maxAge` option should not be a negative number.")
    }
    let i = function(...a) {
        let o = t ? t(a) : a[0],
            s = T(n, o);
        if (s) return s.data;
        let c = e.apply(this, a),
            l = typeof r == `function` ? r(...a) : r;
        if (l !== void 0 && l !== 1 / 0) {
            if (!Number.isFinite(l)) throw TypeError("The `maxAge` function must return a finite number, `0`, or `Infinity`.");
            if (l <= 0) return c;
            if (l > x) throw TypeError(`The \`maxAge\` function result cannot exceed ${x}.`)
        }
        if (n.set(o, {
                data: c,
                maxAge: l === void 0 || l === 1 / 0 ? 1 / 0 : Date.now() + l
            }), l !== void 0 && l !== 1 / 0) {
            var u;
            let e = setTimeout(() => {
                var t;
                n.delete(o), (t = C.get(i)) == null || t.delete(e)
            }, l);
            (u = e.unref) == null || u.call(e);
            let t = C.get(i) ?? new Set;
            t.add(e), C.set(i, t)
        }
        return c
    };
    return b(i, e, {
        ignoreNonConfigurable: !0
    }), S.set(i, n), w.set(i, t ?? (e => e[0])), i
}
var D = `text/plain`,
    ee = `us-ascii`,
    te = (e, t) => t.some(t => t instanceof RegExp ? t.test(e) : t === e),
    ne = new Set([`https:`, `http:`, `file:`]),
    re = e => {
        try {
            let {
                protocol: t
            } = new URL(e);
            return t.endsWith(`:`) && !t.includes(`.`) && !ne.has(t)
        } catch {
            return !1
        }
    },
    ie = (e, {
        stripHash: t
    }) => {
        var n;
        let r = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);
        if (!r) throw Error(`Invalid URL: ${e}`);
        let {
            type: i,
            data: a,
            hash: o
        } = r.groups, s = i.split(`;`), c = s.at(-1) === `base64`;
        c && s.pop();
        let l = ((n = s.shift()) == null ? void 0 : n.toLowerCase()) ?? ``,
            u = [...s.map(e => {
                let [t, n = ``] = e.split(`=`).map(e => e.trim());
                return t === `charset` && (n = n.toLowerCase(), n === ee) ? `` : `${t}${n?`=${n}`:``}`
            }).filter(Boolean)];
        c && u.push(`base64`), (u.length > 0 || l && l !== D) && u.unshift(l);
        let d = t || !o ? `` : `#${o}`;
        return `data:${u.join(`;`)},${c?a.trim():a}${d}`
    };

function ae(e, t) {
    if (t = {
            defaultProtocol: `http`,
            normalizeProtocol: !0,
            forceHttp: !1,
            forceHttps: !1,
            stripAuthentication: !0,
            stripHash: !1,
            stripTextFragment: !0,
            stripWWW: !0,
            removeQueryParameters: [/^utm_\w+/i],
            removeTrailingSlash: !0,
            removeSingleSlash: !0,
            removeDirectoryIndex: !1,
            removeExplicitPort: !1,
            sortQueryParameters: !0,
            removePath: !1,
            transformPath: !1,
            ...t
        }, typeof t.defaultProtocol == `string` && !t.defaultProtocol.endsWith(`:`) && (t.defaultProtocol = `${t.defaultProtocol}:`), e = e.trim(), /^data:/i.test(e)) return ie(e, t);
    if (re(e)) return e;
    let n = e.startsWith(`//`);
    (n || !/^\.*\//.test(e)) && (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
    let r = new URL(e);
    if (t.forceHttp && t.forceHttps) throw Error("The `forceHttp` and `forceHttps` options cannot be used together");
    if (t.forceHttp && r.protocol === `https:` && (r.protocol = `http:`), t.forceHttps && r.protocol === `http:` && (r.protocol = `https:`), t.stripAuthentication && (r.username = ``, r.password = ``), t.stripHash ? r.hash = `` : t.stripTextFragment && (r.hash = r.hash.replace(/#?:~:text.*?$/i, ``)), r.pathname) {
        let e = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g,
            t = 0,
            n = ``;
        for (;;) {
            let i = e.exec(r.pathname);
            if (!i) break;
            let a = i[0],
                o = i.index,
                s = r.pathname.slice(t, o);
            n += s.replace(/\/{2,}/g, `/`), n += a, t = o + a.length
        }
        let i = r.pathname.slice(t, r.pathname.length);
        n += i.replace(/\/{2,}/g, `/`), r.pathname = n
    }
    if (r.pathname) try {
        r.pathname = decodeURI(r.pathname).replace(/\\/g, `%5C`)
    } catch {}
    if (t.removeDirectoryIndex === !0 && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
        let e = r.pathname.split(`/`).filter(Boolean),
            n = e.at(-1);
        n && te(n, t.removeDirectoryIndex) && (e.pop(), r.pathname = e.length > 0 ? `/${e.join(`/`)}/` : `/`)
    }
    if (t.removePath && (r.pathname = `/`), t.transformPath && typeof t.transformPath == `function`) {
        let e = r.pathname.split(`/`).filter(Boolean),
            n = t.transformPath(e);
        r.pathname = (n == null ? void 0 : n.length) > 0 ? `/${n.join(`/`)}` : `/`
    }
    if (r.hostname && (r.hostname = r.hostname.replace(/\.$/, ``), t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(r.hostname) && (r.hostname = r.hostname.replace(/^www\./, ``))), Array.isArray(t.removeQueryParameters))
        for (let e of [...r.searchParams.keys()]) te(e, t.removeQueryParameters) && r.searchParams.delete(e);
    if (!Array.isArray(t.keepQueryParameters) && t.removeQueryParameters === !0 && (r.search = ``), Array.isArray(t.keepQueryParameters) && t.keepQueryParameters.length > 0)
        for (let e of [...r.searchParams.keys()]) te(e, t.keepQueryParameters) || r.searchParams.delete(e);
    if (t.sortQueryParameters) {
        let e = r.search;
        r.searchParams.sort();
        try {
            r.search = decodeURIComponent(r.search)
        } catch {}
        let t = e.slice(1).split(`&`).filter(e => e && !e.includes(`=`));
        for (let e of t) {
            let t = decodeURIComponent(e);
            r.search = r.search.replace(`?${t}=`, `?${t}`).replace(`&${t}=`, `&${t}`)
        }
    }
    t.removeTrailingSlash && (r.pathname = r.pathname.replace(/\/$/, ``)), t.removeExplicitPort && r.port && (r.port = ``);
    let i = e;
    return e = r.toString(), !t.removeSingleSlash && r.pathname === `/` && !i.endsWith(`/`) && r.hash === `` && (e = e.replace(/\/$/, ``)), (t.removeTrailingSlash || r.pathname === `/`) && r.hash === `` && t.removeSingleSlash && (e = e.replace(/\/$/, ``)), n && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, `//`)), t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, ``)), e
}

function O(e) {
    if (e) {
        if (e.value) return O(e.value);
        if (e.id) return e
    }
}

function oe(e, t) {
    var n, r, i, a, o, s;
    let c = e.collection_id || ((r = (n = e.format) == null ? void 0 : n.collection_pointer) == null ? void 0 : r.id);
    if (c) return c;
    let l = (i = e == null ? void 0 : e.view_ids) == null ? void 0 : i[0];
    if (l) {
        let e = O((a = t.collection_view) == null ? void 0 : a[l]);
        if (e) return (s = (o = e.format) == null ? void 0 : o.collection_pointer) == null ? void 0 : s.id
    }
    return null
}
var k = e => e ? Array.isArray(e) ? (e == null ? void 0 : e.reduce((e, t) => e + (t[0] !== `⁍` && t[0] !== `‣` ? t[0] : ``), ``)) ?? `` : e : ``;

function A(e, t) {
    var n;
    if ((n = e.properties) != null && n.title) return k(e.properties.title);
    if (e.type === `collection_view_page` || e.type === `collection_view`) {
        let n = oe(e, t);
        if (n) {
            let e = O(t.collection[n]);
            if (e) return k(e.name)
        }
    }
    return ``
}
var se = {
        header: 0,
        sub_header: 1,
        sub_sub_header: 2,
        header_4: 3
    },
    ce = (e, t) => {
        function n(e) {
            return (e ?? []).map(e => {
                var r;
                let i = O(t.block[e]);
                if (i) {
                    let {
                        type: t
                    } = i;
                    if (t === `header` || t === `sub_header` || t === `sub_sub_header` || t === `header_4`) return {
                        id: e,
                        type: t,
                        text: k((r = i.properties) == null ? void 0 : r.title),
                        indentLevel: se[t]
                    };
                    if (t === `transclusion_container` || t === `column_list` || t === `column`) return n(i.content)
                }
                return null
            })
        }

        function r(e) {
            return e.flatMap(e => e == null ? [] : Array.isArray(e) ? r(e) : [e])
        }
        let i = r(n(e.content)),
            a = [{
                actual: -1,
                effective: -1
            }];
        for (let e of i) {
            let {
                indentLevel: t
            } = e, n = t;
            do {
                let {
                    actual: t,
                    effective: r
                } = a.at(-1);
                if (n > t) e.indentLevel = r + 1, a.push({
                    actual: n,
                    effective: e.indentLevel
                });
                else if (n === t) {
                    e.indentLevel = r;
                    break
                } else a.pop()
            } while (1)
        }
        return i
    },
    j = (e, {
        month: t = `short`
    } = {}) => {
        let n = new Date(e);
        return `${n.toLocaleString(`en-US`,{month:t})} ${n.getUTCDate()}, ${n.getUTCFullYear()}`
    },
    le = e => j(`${e.start_date}T${e.start_time||`00:00`}+00:00`),
    ue = (e = ``) => `${e.slice(0,8)}-${e.slice(8,12)}-${e.slice(12,16)}-${e.slice(16,20)}-${e.slice(20)}`,
    de = /\b([\da-f]{32})\b/,
    fe = /\b([\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12})\b/,
    pe = (e = ``, {
        uuid: t = !0
    } = {}) => {
        if (!e || (e = e.split(`?`)[0], !e)) return;
        let n = e.match(de);
        if (n) return t ? ue(n[1]) : n[1];
        let r = e.match(fe);
        if (r) return t ? r[1] : r[1].replaceAll(`-`, ``)
    };

function me(e, t) {
    var n, r;
    if ((n = e.format) != null && n.page_icon) return (r = e.format) == null ? void 0 : r.page_icon;
    if (e.type === `collection_view_page` || e.type === `collection_view`) {
        let n = oe(e, t);
        if (n) {
            let e = O(t.collection[n]);
            if (e) return e.icon
        }
    }
    return null
}
var he = (e, t, {
        inclusive: n = !1
    } = {}) => {
        let r = e;
        for (; r;) {
            if (n && (r == null ? void 0 : r.type) === `page`) return r;
            let e = r.parent_id,
                i = r.parent_table;
            if (!e) break;
            if (i === `collection`) r = O(t.collection[e]);
            else if (r = O(t.block[e]), (r == null ? void 0 : r.type) === `page`) return r
        }
        return null
    },
    ge = e => e.replaceAll(`-`, ``),
    _e = (e, t) => {
        var n;
        let r = 0,
            i = e;
        for (;;) {
            let e = (n = O(t[i])) == null ? void 0 : n.parent_id;
            if (!e) break;
            let a = O(t[e]);
            if (!a) break;
            if (a.type === `numbered_list`) r++, i = e;
            else break
        }
        return r
    };

function ve(e) {
    var t, n;
    let r = [],
        i, a = -1;
    for (let o of Object.keys(e)) {
        let s = O(e[o]);
        if (s && s.content)
            for (let o of s.content) {
                let s = (t = O(e[o])) == null ? void 0 : t.type;
                s && s !== i && (a++, i = s, r[a] = []), a > -1 && ((n = r[a]) == null || n.push(o))
            }
        i = void 0
    }
    return r
}

function ye(e, t) {
    var n, r, i;
    let a = ve(t).find(t => t.includes(e));
    if (!a) return;
    let o = a.indexOf(e) + 1,
        s = (r = (n = O(t[e])) == null ? void 0 : n.format) == null ? void 0 : r.list_start_index;
    return ((i = O(t[e])) == null ? void 0 : i.type) === `numbered_list` ? s ?? o : o
}

function be(e) {
    let t = [`decimal`, `lower-alpha`, `lower-roman`];
    return t[(e % t.length + t.length) % t.length]
}
var xe = (e, t) => {
        let n = e.block,
            r = [],
            i = t;
        do {
            let a = O(n[i]);
            if (!a) break;
            let o = A(a, e),
                s = me(a, e);
            if (!(o || s)) break;
            r.push({
                block: a,
                active: i === t,
                pageId: i,
                title: o,
                icon: s
            });
            let c = he(a, e),
                l = c == null ? void 0 : c.id;
            if (!l) break;
            i = l
        } while (1);
        return r.reverse(), r
    },
    M = /(?:https?:\/\/)?[^\s]+\.gif(?=$|\?|#)/,
    Se = (e, t) => {
        if (!e) return;
        if (e.startsWith(`data:`) || M.test(e) || e.startsWith(`https://images.unsplash.com`)) return e;
        try {
            let t = new URL(e);
            if (t.pathname.startsWith(`/secure.notion-static.com`) && t.hostname.endsWith(`.amazonaws.com`) && t.searchParams.has(`X-Amz-Credential`) && t.searchParams.has(`X-Amz-Signature`) && t.searchParams.has(`X-Amz-Algorithm`) || t.hostname === `img.notionusercontent.com`) return e
        } catch {}
        e.startsWith(`/images`) && (e = `https://www.notion.so${e}`), e = `https://www.notion.so${e.startsWith(`/image`)?e:`/image/${encodeURIComponent(e)}`}`;
        let n = new URL(e),
            r = t.parent_table === `space` ? `block` : t.parent_table;
        return (r === `collection` || r === `team`) && (r = `block`), n.searchParams.set(`table`, r), n.searchParams.set(`id`, t.id), n.searchParams.set(`cache`, `v2`), e = n.toString(), e
    },
    Ce = e => t => (t = (t || ``).replaceAll(`-`, ``), e && t === e ? `/` : `/${t}`),
    N = E(e => {
        if (!e) return ``;
        try {
            if (e.startsWith(`https://www.notion.so/image/`)) {
                let t = new URL(e),
                    n = N(decodeURIComponent(t.pathname.slice(7)));
                t.pathname = `/image/${encodeURIComponent(n)}`, e = t.toString()
            }
            return ae(e, {
                stripProtocol: !0,
                stripWWW: !0,
                stripHash: !0,
                stripTextFragment: !0,
                removeQueryParameters: !0
            })
        } catch {
            return ``
        }
    }),
    we = Object.defineProperty,
    Te = (e, t, n) => t in e ? we(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    P = (e, t, n) => Te(e, typeof t == `symbol` ? t : t + ``, n),
    Ee = new Map,
    F = new WeakMap,
    De = 0,
    Oe = void 0;

function ke(e) {
    return e ? (F.has(e) || (De += 1, F.set(e, De.toString())), F.get(e)) : `0`
}

function Ae(e) {
    return Object.keys(e).sort().filter(t => e[t] !== void 0).map(t => `${t}_${t===`root`?ke(e.root):e[t]}`).toString()
}

function I(e) {
    let t = Ae(e),
        n = Ee.get(t);
    if (!n) {
        let r = new Map,
            i, a = new IntersectionObserver(t => {
                t.forEach(t => {
                    var n;
                    let a = t.isIntersecting && i.some(e => t.intersectionRatio >= e);
                    e.trackVisibility && t.isVisible === void 0 && (t.isVisible = a), (n = r.get(t.target)) == null || n.forEach(e => {
                        e(a, t)
                    })
                })
            }, e);
        i = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
            id: t,
            observer: a,
            elements: r
        }, Ee.set(t, n)
    }
    return n
}

function L(e, t, n = {}, r = Oe) {
    if (window.IntersectionObserver === void 0 && r !== void 0) {
        let i = e.getBoundingClientRect();
        return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: typeof n.threshold == `number` ? n.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
        }), () => {}
    }
    let {
        id: i,
        observer: a,
        elements: o
    } = I(n), s = o.get(e) || [];
    return o.has(e) || o.set(e, s), s.push(t), a.observe(e),
        function() {
            s.splice(s.indexOf(t), 1), s.length === 0 && (o.delete(e), a.unobserve(e)), o.size === 0 && (a.disconnect(), Ee.delete(i))
        }
}

function je(e) {
    return typeof e.children != `function`
}
var Me = class extends d.Component {
        constructor(e) {
            super(e), P(this, `node`, null), P(this, `_unobserveCb`, null), P(this, `handleNode`, e => {
                this.node && (this.unobserve(), !e && !this.props.triggerOnce && !this.props.skip && this.setState({
                    inView: !!this.props.initialInView,
                    entry: void 0
                })), this.node = e || null, this.observeNode()
            }), P(this, `handleChange`, (e, t) => {
                e && this.props.triggerOnce && this.unobserve(), je(this.props) || this.setState({
                    inView: e,
                    entry: t
                }), this.props.onChange && this.props.onChange(e, t)
            }), this.state = {
                inView: !!e.initialInView,
                entry: void 0
            }
        }
        componentDidMount() {
            this.unobserve(), this.observeNode()
        }
        componentDidUpdate(e) {
            (e.rootMargin !== this.props.rootMargin || e.root !== this.props.root || e.threshold !== this.props.threshold || e.skip !== this.props.skip || e.trackVisibility !== this.props.trackVisibility || e.delay !== this.props.delay) && (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
            this.unobserve()
        }
        observeNode() {
            if (!this.node || this.props.skip) return;
            let {
                threshold: e,
                root: t,
                rootMargin: n,
                trackVisibility: r,
                delay: i,
                fallbackInView: a
            } = this.props;
            this._unobserveCb = L(this.node, this.handleChange, {
                threshold: e,
                root: t,
                rootMargin: n,
                trackVisibility: r,
                delay: i
            }, a)
        }
        unobserve() {
            this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
            let {
                children: e
            } = this.props;
            if (typeof e == `function`) {
                let {
                    inView: t,
                    entry: n
                } = this.state;
                return e({
                    inView: t,
                    entry: n,
                    ref: this.handleNode
                })
            }
            let {
                as: t,
                triggerOnce: n,
                threshold: r,
                root: i,
                rootMargin: a,
                onChange: o,
                skip: s,
                trackVisibility: c,
                delay: l,
                initialInView: u,
                fallbackInView: f,
                ...p
            } = this.props;
            return d.createElement(t || `div`, {
                ref: this.handleNode,
                ...p
            }, e)
        }
    },
    Ne = t((e => {
        var t = e && e.__assign || function() {
            return t = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }, t.apply(this, arguments)
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });

        function n(e, n) {
            var r = n || {},
                i = r.value,
                a = i === void 0 ? void 0 : i,
                o = r.tag,
                s = o === void 0 ? `tag` : o,
                c = {},
                l = function(e) {
                    c[e] = (function(n) {
                        var r, i;
                        return n === void 0 && (n = {}), a ? (r = {}, r[s] = e, r[a] = n, r) : t({}, n, (i = {}, i[s] = e, i))
                    })
                };
            for (var u in e) l(u);
            var d = {},
                f = function(e) {
                    d[e] = (function(t) {
                        return t[s] === e
                    })
                };
            for (var u in e) f(u);

            function p(e, t, n) {
                n === void 0 && (n = t.default);
                var r = t[e[s]];
                return r ? r(a ? e[a] : e) : n(e)
            }
            var m = function(e, t) {
                    return t ? p(e, t) : function(t) {
                        return p(t, e)
                    }
                },
                h = function(e) {
                    return e
                },
                g = function(e, t) {
                    return t ? p(e, t, h) : function(t) {
                        return p(t, e, h)
                    }
                },
                _ = {},
                v = function(e) {
                    var t;
                    _[e] = m((t = {}, t[e] = function(e) {
                        return e
                    }, t.default = function(t) {
                        throw Error(`Attempted to cast ` + t[s] + ` as ` + e)
                    }, t))
                };
            for (var y in e) v(y);
            return Object.assign({
                is: d,
                as: _,
                match: m,
                transform: g,
                _Record: e
            }, c)
        }
        e.unionize = n, e.ofType = function() {}
    })),
    Pe = t(((e, t) => {
        var n = u();

        function r(e, t, r) {
            return (t = n(t)) in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
        t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
    })),
    Fe = t(((e, t) => {
        function n(e, t) {
            if (e == null) return {};
            var n = {};
            for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                    if (t.indexOf(r) !== -1) continue;
                    n[r] = e[r]
                } return n
        }
        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports
    })),
    Ie = t(((e, t) => {
        (function(n, r) {
            typeof e == `object` && t !== void 0 ? r(e, Pe(), Fe(), o()) : typeof define == `function` && define.amd ? define([`exports`, `@babel/runtime/helpers/defineProperty`, `@babel/runtime/helpers/objectWithoutPropertiesLoose`, `react`], r) : (n = typeof globalThis > `u` ? n || self : globalThis, r(n.Img = {}, n._defineProperty, n._objectWithoutPropertiesLoose, n.React))
        })(e, function(e, t, n, r) {
            function i(e) {
                return e && typeof e == `object` && `default` in e ? e : {
                    default: e
                }
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t, n = 1; n < arguments.length; n++) t = arguments[n] == null ? {} : arguments[n], n % 2 ? a(Object(t), !0).forEach(function(n) {
                    u.default(e, n, t[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                });
                return e
            }

            function s(e) {
                var t = e.srcList,
                    n = e.imgPromise,
                    i = n === void 0 ? p({
                        decode: !0
                    }) : n,
                    a = e.useSuspense,
                    s = a === void 0 || a,
                    c = r.useState(!1)[1],
                    l = m(h(t)),
                    u = l.join(``);
                if (g[u] || (g[u] = {
                        promise: _(l, i),
                        cache: `pending`,
                        error: null
                    }), g[u].cache === `resolved`) return {
                    src: g[u].src,
                    isLoading: !1,
                    error: null
                };
                if (g[u].cache === `rejected`) {
                    if (s) throw g[u].error;
                    return {
                        isLoading: !1,
                        error: g[u].error,
                        src: void 0
                    }
                }
                if (g[u].promise.then(function(e) {
                        g[u] = o(o({}, g[u]), {}, {
                            cache: `resolved`,
                            src: e
                        }), s || c(u)
                    }).catch(function(e) {
                        g[u] = o(o({}, g[u]), {}, {
                            cache: `rejected`,
                            error: e
                        }), s || c(u)
                    }), s) throw g[u].promise;
                return {
                    isLoading: !0,
                    src: void 0,
                    error: null
                }
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t, n = 1; n < arguments.length; n++) t = arguments[n] == null ? {} : arguments[n], n % 2 ? c(Object(t), !0).forEach(function(n) {
                    u.default(e, n, t[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                });
                return e
            }
            var u = i(t),
                d = i(n),
                f = i(r),
                p = function(e) {
                    var t = e.decode,
                        n = e.crossOrigin,
                        r = n === void 0 ? `` : n;
                    return function(e) {
                        return new Promise(function(n, i) {
                            var a = new Image;
                            r && (a.crossOrigin = r), a.onload = function() {
                                (t === void 0 || t) && a.decode ? a.decode().then(n).catch(i) : n()
                            }, a.onerror = i, a.src = e
                        })
                    }
                },
                m = function(e) {
                    return e.filter(function(e) {
                        return e
                    })
                },
                h = function(e) {
                    return Array.isArray(e) ? e : [e]
                },
                g = {},
                _ = function(e, t) {
                    var n = !1;
                    return new Promise(function(r, i) {
                        var a = function(e) {
                            return t(e).then(function() {
                                n = !0, r(e)
                            })
                        };
                        e.reduce(function(e, t) {
                            return e.catch(function() {
                                if (!n) return a(t)
                            })
                        }, a(e.shift())).catch(i)
                    })
                },
                v = [`decode`, `src`, `loader`, `unloader`, `container`, `loaderContainer`, `unloaderContainer`, `imgPromise`, `crossorigin`, `useSuspense`],
                y = function(e) {
                    return e
                };
            e.Img = function(e) {
                var t = e.decode,
                    n = e.src,
                    r = n === void 0 ? [] : n,
                    i = e.loader,
                    a = i === void 0 ? null : i,
                    o = e.unloader,
                    c = o === void 0 ? null : o,
                    u = e.container,
                    m = u === void 0 ? y : u,
                    h = e.loaderContainer,
                    g = h === void 0 ? y : h,
                    _ = e.unloaderContainer,
                    b = _ === void 0 ? y : _,
                    x = e.imgPromise,
                    S = e.crossorigin,
                    C = e.useSuspense,
                    w = C !== void 0 && C,
                    T = d.default(e, v);
                x = x || p({
                    decode: t === void 0 || t,
                    crossOrigin: S
                });
                var E = s({
                        srcList: r,
                        imgPromise: x,
                        useSuspense: w
                    }),
                    D = E.src,
                    ee = E.isLoading;
                return D ? m(f.default.createElement(`img`, l({
                    src: D
                }, T))) : !w && ee ? g(a) : !w && c ? b(c) : null
            }, e.useImage = s, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        })
    })),
    R = Ne(),
    Le = Ie(),
    z = c();

function Re() {
    return Re = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Re.apply(null, arguments)
}
var ze = [`shift`, `alt`, `meta`, `mod`, `ctrl`],
    Be = {
        esc: `escape`,
        return: `enter`,
        ".": `period`,
        ",": `comma`,
        "-": `slash`,
        " ": `space`,
        "`": `backquote`,
        "#": `backslash`,
        "+": `bracketright`,
        ShiftLeft: `shift`,
        ShiftRight: `shift`,
        AltLeft: `alt`,
        AltRight: `alt`,
        MetaLeft: `meta`,
        MetaRight: `meta`,
        OSLeft: `meta`,
        OSRight: `meta`,
        ControlLeft: `ctrl`,
        ControlRight: `ctrl`
    };

function B(e) {
    return (e && Be[e] || e || ``).trim().toLowerCase().replace(/key|digit|numpad|arrow/, ``)
}

function V(e) {
    return ze.includes(e)
}

function Ve(e, t) {
    return t === void 0 && (t = `,`), e.split(t)
}

function He(e, t, n) {
    t === void 0 && (t = `+`);
    var r = e.toLocaleLowerCase().split(t).map(function(e) {
            return B(e)
        }),
        i = {
            alt: r.includes(`alt`),
            ctrl: r.includes(`ctrl`) || r.includes(`control`),
            shift: r.includes(`shift`),
            meta: r.includes(`meta`),
            mod: r.includes(`mod`)
        },
        a = r.filter(function(e) {
            return !ze.includes(e)
        });
    return Re({}, i, {
        keys: a,
        description: n,
        hotkey: e
    })
}(function() {
    typeof document < `u` && (document.addEventListener(`keydown`, function(e) {
        e.key !== void 0 && Ge([B(e.key), B(e.code)])
    }), document.addEventListener(`keyup`, function(e) {
        e.key !== void 0 && Ke([B(e.key), B(e.code)])
    })), typeof window < `u` && window.addEventListener(`blur`, function() {
        H.clear()
    })
})();
var H = new Set;

function Ue(e) {
    return Array.isArray(e)
}

function We(e, t) {
    return t === void 0 && (t = `,`), (Ue(e) ? e : e.split(t)).every(function(e) {
        return H.has(e.trim().toLowerCase())
    })
}

function Ge(e) {
    var t = Array.isArray(e) ? e : [e];
    H.has(`meta`) && H.forEach(function(e) {
        return !V(e) && H.delete(e.toLowerCase())
    }), t.forEach(function(e) {
        return H.add(e.toLowerCase())
    })
}

function Ke(e) {
    e === `meta` ? H.clear() : (Array.isArray(e) ? e : [e]).forEach(function(e) {
        return H.delete(e.toLowerCase())
    })
}

function qe(e, t, n) {
    (typeof n == `function` && n(e, t) || n === !0) && e.preventDefault()
}

function Je(e, t, n) {
    return typeof n == `function` ? n(e, t) : n === !0 || n === void 0
}

function Ye(e) {
    return Xe(e, [`input`, `textarea`, `select`])
}

function Xe(e, t) {
    t === void 0 && (t = !1);
    var n = e.target,
        r = e.composed,
        i = null;
    return i = Ze(n) && r ? e.composedPath()[0] && e.composedPath()[0].tagName : n && n.tagName, Ue(t) ? !!(i && t && t.some(function(e) {
        var t;
        return e.toLowerCase() === ((t = i) == null ? void 0 : t.toLowerCase())
    })) : !!(i && t && t)
}

function Ze(e) {
    return !!e.tagName && !e.tagName.startsWith(`-`) && e.tagName.includes(`-`)
}

function Qe(e, t) {
    return e.length === 0 && t ? (console.warn(`A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>`), !0) : !t || e.some(function(e) {
        return t.includes(e)
    }) || e.includes(`*`)
}
var $e = function(e, t, n) {
        n === void 0 && (n = !1);
        var r = t.alt,
            i = t.meta,
            a = t.mod,
            o = t.shift,
            s = t.ctrl,
            c = t.keys,
            l = e.key,
            u = e.code,
            d = e.ctrlKey,
            f = e.metaKey,
            p = e.shiftKey,
            m = e.altKey,
            h = B(u),
            g = l.toLowerCase();
        if (!(c != null && c.includes(h)) && !(c != null && c.includes(g)) && ![`ctrl`, `control`, `unknown`, `meta`, `alt`, `shift`, `os`].includes(h)) return !1;
        if (!n) {
            if (r === !m && g !== `alt` || o === !p && g !== `shift`) return !1;
            if (a) {
                if (!f && !d) return !1
            } else if (i === !f && g !== `meta` && g !== `os` || s === !d && g !== `ctrl` && g !== `control`) return !1
        }
        return c && c.length === 1 && (c.includes(g) || c.includes(h)) ? !0 : c ? We(c) : !c
    },
    et = (0, d.createContext)(void 0),
    tt = function() {
        return (0, d.useContext)(et)
    };

function nt(e, t) {
    return e && t && typeof e == `object` && typeof t == `object` ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce(function(n, r) {
        return n && nt(e[r], t[r])
    }, !0) : e === t
}
var rt = (0, d.createContext)({
        hotkeys: [],
        enabledScopes: [],
        toggleScope: function() {},
        enableScope: function() {},
        disableScope: function() {}
    }),
    it = function() {
        return (0, d.useContext)(rt)
    };

function at(e) {
    var t = (0, d.useRef)(void 0);
    return nt(t.current, e) || (t.current = e), t.current
}
var ot = function(e) {
        e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
    },
    st = typeof window < `u` ? d.useLayoutEffect : d.useEffect;

function ct(e, t, n, r) {
    var i = (0, d.useState)(null),
        a = i[0],
        o = i[1],
        s = (0, d.useRef)(!1),
        c = n instanceof Array ? r instanceof Array ? void 0 : r : n,
        l = Ue(e) ? e.join(c == null ? void 0 : c.splitKey) : e,
        u = n instanceof Array ? n : r instanceof Array ? r : void 0,
        f = (0, d.useCallback)(t, u ?? []),
        p = (0, d.useRef)(f);
    p.current = u ? f : t;
    var m = at(c),
        h = it().enabledScopes,
        g = tt();
    return st(function() {
        if ((m == null ? void 0 : m.enabled) !== !1 && Qe(h, m == null ? void 0 : m.scopes)) {
            var e = function(e, t) {
                    var n;
                    if (t === void 0 && (t = !1), !Ye(e) || Xe(e, m == null ? void 0 : m.enableOnFormTags)) {
                        if (a !== null) {
                            var r = a.getRootNode();
                            if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== a && !a.contains(r.activeElement)) {
                                ot(e);
                                return
                            }
                        }((n = e.target) == null || !n.isContentEditable || m != null && m.enableOnContentEditable) && Ve(l, m == null ? void 0 : m.splitKey).forEach(function(n) {
                            var r, i = He(n, m == null ? void 0 : m.combinationKey);
                            if ($e(e, i, m == null ? void 0 : m.ignoreModifiers) || (r = i.keys) != null && r.includes(`*`)) {
                                if (m != null && m.ignoreEventWhen != null && m.ignoreEventWhen(e) || t && s.current) return;
                                if (qe(e, i, m == null ? void 0 : m.preventDefault), !Je(e, i, m == null ? void 0 : m.enabled)) {
                                    ot(e);
                                    return
                                }
                                p.current(e, i), t || (s.current = !0)
                            }
                        })
                    }
                },
                t = function(t) {
                    t.key !== void 0 && (Ge(B(t.code)), ((m == null ? void 0 : m.keydown) === void 0 && (m == null ? void 0 : m.keyup) !== !0 || m != null && m.keydown) && e(t))
                },
                n = function(t) {
                    t.key !== void 0 && (Ke(B(t.code)), s.current = !1, m != null && m.keyup && e(t, !0))
                },
                r = a || (c == null ? void 0 : c.document) || document;
            return r.addEventListener(`keyup`, n, c == null ? void 0 : c.eventListenerOptions), r.addEventListener(`keydown`, t, c == null ? void 0 : c.eventListenerOptions), g && Ve(l, m == null ? void 0 : m.splitKey).forEach(function(e) {
                    return g.addHotkey(He(e, m == null ? void 0 : m.combinationKey, m == null ? void 0 : m.description))
                }),
                function() {
                    r.removeEventListener(`keyup`, n, c == null ? void 0 : c.eventListenerOptions), r.removeEventListener(`keydown`, t, c == null ? void 0 : c.eventListenerOptions), g && Ve(l, m == null ? void 0 : m.splitKey).forEach(function(e) {
                        return g.removeHotkey(He(e, m == null ? void 0 : m.combinationKey, m == null ? void 0 : m.description))
                    })
                }
        }
    }, [a, l, m, h]), o
}
var lt = e(a(), 1),
    U = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    ut = function(e) {
        return e.tagName === `IMG`
    },
    dt = function(e) {
        return NodeList.prototype.isPrototypeOf(e)
    },
    ft = function(e) {
        return e && e.nodeType === 1
    },
    pt = function(e) {
        return (e.currentSrc || e.src).substr(-4).toLowerCase() === `.svg`
    },
    mt = function(e) {
        try {
            return Array.isArray(e) ? e.filter(ut) : dt(e) ? [].slice.call(e).filter(ut) : ft(e) ? [e].filter(ut) : typeof e == `string` ? [].slice.call(document.querySelectorAll(e)).filter(ut) : []
        } catch {
            throw TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)
        }
    },
    ht = function(e) {
        var t = document.createElement(`div`);
        return t.classList.add(`medium-zoom-overlay`), t.style.background = e, t
    },
    gt = function(e) {
        var t = e.getBoundingClientRect(),
            n = t.top,
            r = t.left,
            i = t.width,
            a = t.height,
            o = e.cloneNode(),
            s = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            c = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        return o.removeAttribute(`id`), o.style.position = `absolute`, o.style.top = n + s + `px`, o.style.left = r + c + `px`, o.style.width = i + `px`, o.style.height = a + `px`, o.style.transform = ``, o
    },
    W = function(e, t) {
        var n = U({
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, t);
        if (typeof window.CustomEvent == `function`) return new CustomEvent(e, n);
        var r = document.createEvent(`CustomEvent`);
        return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r
    },
    _t = function e(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = window.Promise || function(e) {
                function t() {}
                e(t, t)
            },
            i = function(e) {
                var t = e.target;
                t === T ? m() : y.indexOf(t) !== -1 && h({
                    target: t
                })
            },
            a = function() {
                if (!x && w.original) {
                    var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    Math.abs(S - e) > C.scrollOffset && setTimeout(m, 150)
                }
            },
            o = function(e) {
                var t = e.key || e.keyCode;
                (t === `Escape` || t === `Esc` || t === 27) && m()
            },
            s = function() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                    t = e;
                return e.background && (T.style.background = e.background), e.container && e.container instanceof Object && (t.container = U({}, C.container, e.container)), e.template && (t.template = ft(e.template) ? e.template : document.querySelector(e.template)), C = U({}, C, t), y.forEach(function(e) {
                    e.dispatchEvent(W(`medium-zoom:update`, {
                        detail: {
                            zoom: E
                        }
                    }))
                }), E
            },
            c = function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return e(U({}, C, t))
            },
            l = function() {
                var e = [...arguments].reduce(function(e, t) {
                    return [].concat(e, mt(t))
                }, []);
                return e.filter(function(e) {
                    return y.indexOf(e) === -1
                }).forEach(function(e) {
                    y.push(e), e.classList.add(`medium-zoom-image`)
                }), b.forEach(function(t) {
                    var n = t.type,
                        r = t.listener,
                        i = t.options;
                    e.forEach(function(e) {
                        e.addEventListener(n, r, i)
                    })
                }), E
            },
            u = function() {
                var e = [...arguments];
                w.zoomed && m();
                var t = e.length > 0 ? e.reduce(function(e, t) {
                    return [].concat(e, mt(t))
                }, []) : y;
                return t.forEach(function(e) {
                    e.classList.remove(`medium-zoom-image`), e.dispatchEvent(W(`medium-zoom:detach`, {
                        detail: {
                            zoom: E
                        }
                    }))
                }), y = y.filter(function(e) {
                    return t.indexOf(e) === -1
                }), E
            },
            d = function(e, t) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return y.forEach(function(r) {
                    r.addEventListener(`medium-zoom:` + e, t, n)
                }), b.push({
                    type: `medium-zoom:` + e,
                    listener: t,
                    options: n
                }), E
            },
            f = function(e, t) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return y.forEach(function(r) {
                    r.removeEventListener(`medium-zoom:` + e, t, n)
                }), b = b.filter(function(n) {
                    return n.type !== `medium-zoom:` + e || n.listener.toString() !== t.toString()
                }), E
            },
            p = function() {
                var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).target,
                    t = function() {
                        var e = {
                                width: document.documentElement.clientWidth,
                                height: document.documentElement.clientHeight,
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            },
                            t = void 0,
                            n = void 0;
                        if (C.container) {
                            if (C.container instanceof Object) e = U({}, e, C.container), t = e.width - e.left - e.right - C.margin * 2, n = e.height - e.top - e.bottom - C.margin * 2;
                            else {
                                var r = (ft(C.container) ? C.container : document.querySelector(C.container)).getBoundingClientRect(),
                                    i = r.width,
                                    a = r.height,
                                    o = r.left,
                                    s = r.top;
                                e = U({}, e, {
                                    width: i,
                                    height: a,
                                    left: o,
                                    top: s
                                })
                            }
                        }
                        t = t || e.width - C.margin * 2, n = n || e.height - C.margin * 2;
                        var c = C.minZoomScale || 1,
                            l = w.zoomedHd || w.original,
                            u = pt(l) ? t : l.naturalWidth || t,
                            d = pt(l) ? n : l.naturalHeight || n,
                            f = l.getBoundingClientRect(),
                            p = f.top,
                            m = f.left,
                            h = f.width,
                            g = f.height,
                            _ = Math.min(Math.max(u * c, h), t) / h,
                            v = Math.min(Math.max(d * c, g), n) / g,
                            y = Math.min(_, v),
                            b = (-m + (t - h) / 2 + C.margin + e.left) / y,
                            x = (-p + (n - g) / 2 + C.margin + e.top) / y,
                            S = `scale(` + y + `) translate3d(` + b + `px, ` + x + `px, 0)`;
                        w.zoomed.style.transform = S, w.zoomedHd && (w.zoomedHd.style.transform = S)
                    };
                return new r(function(n) {
                    if (e && y.indexOf(e) === -1) n(E);
                    else {
                        var r = function e() {
                            x = !1, w.zoomed.removeEventListener(`transitionend`, e), w.original.dispatchEvent(W(`medium-zoom:opened`, {
                                detail: {
                                    zoom: E
                                }
                            })), n(E)
                        };
                        if (w.zoomed) n(E);
                        else {
                            if (e) w.original = e;
                            else if (y.length > 0) w.original = y[0];
                            else {
                                n(E);
                                return
                            }
                            if (w.original.dispatchEvent(W(`medium-zoom:open`, {
                                    detail: {
                                        zoom: E
                                    }
                                })), S = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, x = !0, w.zoomed = gt(w.original), document.body.appendChild(T), C.template) {
                                var i = ft(C.template) ? C.template : document.querySelector(C.template);
                                w.template = document.createElement(`div`), w.template.appendChild(i.content.cloneNode(!0)), document.body.appendChild(w.template)
                            }
                            if (document.body.appendChild(w.zoomed), window.requestAnimationFrame(function() {
                                    document.body.classList.add(`medium-zoom--opened`)
                                }), w.original.classList.add(`medium-zoom-image--hidden`), w.zoomed.classList.add(`medium-zoom-image--opened`), w.zoomed.addEventListener(`click`, m), w.zoomed.addEventListener(`transitionend`, r), w.original.getAttribute(`data-zoom-src`)) {
                                w.zoomedHd = w.zoomed.cloneNode(), w.zoomedHd.removeAttribute(`srcset`), w.zoomedHd.removeAttribute(`sizes`), w.zoomedHd.removeAttribute(`loading`), w.zoomedHd.src = w.zoomed.getAttribute(`data-zoom-src`), w.zoomedHd.onerror = function() {
                                    clearInterval(a), console.warn(`Unable to reach the zoom image target ` + w.zoomedHd.src), w.zoomedHd = null, t()
                                };
                                var a = setInterval(function() {
                                    w.zoomedHd.complete && (clearInterval(a), w.zoomedHd.classList.add(`medium-zoom-image--opened`), w.zoomedHd.addEventListener(`click`, m), document.body.appendChild(w.zoomedHd), t())
                                }, 10)
                            } else if (w.original.hasAttribute(`srcset`)) {
                                w.zoomedHd = w.zoomed.cloneNode(), w.zoomedHd.removeAttribute(`sizes`), w.zoomedHd.removeAttribute(`loading`);
                                var o = w.zoomedHd.addEventListener(`load`, function() {
                                    w.zoomedHd.removeEventListener(`load`, o), w.zoomedHd.classList.add(`medium-zoom-image--opened`), w.zoomedHd.addEventListener(`click`, m), document.body.appendChild(w.zoomedHd), t()
                                })
                            } else t()
                        }
                    }
                })
            },
            m = function() {
                return new r(function(e) {
                    if (x || !w.original) e(E);
                    else {
                        var t = function t() {
                            w.original.classList.remove(`medium-zoom-image--hidden`), document.body.removeChild(w.zoomed), w.zoomedHd && document.body.removeChild(w.zoomedHd), document.body.removeChild(T), w.zoomed.classList.remove(`medium-zoom-image--opened`), w.template && document.body.removeChild(w.template), x = !1, w.zoomed.removeEventListener(`transitionend`, t), w.original.dispatchEvent(W(`medium-zoom:closed`, {
                                detail: {
                                    zoom: E
                                }
                            })), w.original = null, w.zoomed = null, w.zoomedHd = null, w.template = null, e(E)
                        };
                        x = !0, document.body.classList.remove(`medium-zoom--opened`), w.zoomed.style.transform = ``, w.zoomedHd && (w.zoomedHd.style.transform = ``), w.template && (w.template.style.transition = `opacity 150ms`, w.template.style.opacity = 0), w.original.dispatchEvent(W(`medium-zoom:close`, {
                            detail: {
                                zoom: E
                            }
                        })), w.zoomed.addEventListener(`transitionend`, t)
                    }
                })
            },
            h = function() {
                var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).target;
                return w.original ? m() : p({
                    target: e
                })
            },
            g = function() {
                return C
            },
            _ = function() {
                return y
            },
            v = function() {
                return w.original
            },
            y = [],
            b = [],
            x = !1,
            S = 0,
            C = n,
            w = {
                original: null,
                zoomed: null,
                zoomedHd: null,
                template: null
            };
        Object.prototype.toString.call(t) === `[object Object]` ? C = t : (t || typeof t == `string`) && l(t), C = U({
            margin: 0,
            background: `#fff`,
            scrollOffset: 40,
            minZoomScale: 1,
            container: null,
            template: null
        }, C);
        var T = ht(C.background);
        document.addEventListener(`click`, i), document.addEventListener(`keyup`, o), document.addEventListener(`scroll`, a), window.addEventListener(`resize`, m);
        var E = {
            open: p,
            close: m,
            toggle: h,
            update: s,
            clone: c,
            attach: l,
            detach: u,
            on: d,
            off: f,
            getOptions: g,
            getImages: _,
            getZoomedImage: v
        };
        return E
    };

function vt(e, t) {
    t === void 0 && (t = {});
    var n = t.insertAt;
    if (e && typeof document < `u`) {
        var r = document.head || document.getElementsByTagName(`head`)[0],
            i = document.createElement(`style`);
        i.type = `text/css`, n === `top` && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
    }
}
vt(`.medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}`);
var yt = Object.create,
    bt = Object.defineProperty,
    xt = Object.getOwnPropertyDescriptor,
    St = Object.getOwnPropertyNames,
    Ct = Object.getPrototypeOf,
    wt = Object.prototype.hasOwnProperty,
    Tt = (e, t, n) => t in e ? bt(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Et = (e, t) => function() {
        return t || (0, e[St(e)[0]])((t = {
            exports: {}
        }).exports, t), t.exports
    },
    Dt = (e, t, n, r) => {
        if (t && typeof t == `object` || typeof t == `function`)
            for (let i of St(t)) !wt.call(e, i) && i !== n && bt(e, i, {
                get: () => t[i],
                enumerable: !(r = xt(t, i)) || r.enumerable
            });
        return e
    },
    Ot = (e, t, n) => (n = e == null ? {} : yt(Ct(e)), Dt(t || !e || !e.__esModule ? bt(n, `default`, {
        value: e,
        enumerable: !0
    }) : n, e)),
    G = (e, t, n) => Tt(e, typeof t == `symbol` ? t : t + ``, n),
    kt = Et({
        "../../node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"(e, t) {
            var n = `Expected a function`,
                i = NaN,
                a = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                l = parseInt,
                u = typeof r == `object` && r && r.Object === Object && r,
                d = typeof self == `object` && self && self.Object === Object && self,
                f = u || d || Function(`return this`)(),
                p = Object.prototype.toString,
                m = Math.max,
                h = Math.min,
                g = function() {
                    return f.Date.now()
                };

            function _(e, t, r) {
                var i, a, o, s, c, l, u = 0,
                    d = !1,
                    f = !1,
                    p = !0;
                if (typeof e != `function`) throw TypeError(n);
                t = S(t) || 0, y(r) && (d = !!r.leading, f = `maxWait` in r, o = f ? m(S(r.maxWait) || 0, t) : o, p = `trailing` in r ? !!r.trailing : p);

                function _(t) {
                    var n = i,
                        r = a;
                    return i = a = void 0, u = t, s = e.apply(r, n), s
                }

                function v(e) {
                    return u = e, c = setTimeout(C, t), d ? _(e) : s
                }

                function b(e) {
                    var n = e - l,
                        r = e - u,
                        i = t - n;
                    return f ? h(i, o - r) : i
                }

                function x(e) {
                    var n = e - l,
                        r = e - u;
                    return l === void 0 || n >= t || n < 0 || f && r >= o
                }

                function C() {
                    var e = g();
                    if (x(e)) return w(e);
                    c = setTimeout(C, b(e))
                }

                function w(e) {
                    return c = void 0, p && i ? _(e) : (i = a = void 0, s)
                }

                function T() {
                    c !== void 0 && clearTimeout(c), u = 0, i = l = a = c = void 0
                }

                function E() {
                    return c === void 0 ? s : w(g())
                }

                function D() {
                    var e = g(),
                        n = x(e);
                    if (i = arguments, a = this, l = e, n) {
                        if (c === void 0) return v(l);
                        if (f) return c = setTimeout(C, t), _(l)
                    }
                    return c === void 0 && (c = setTimeout(C, t)), s
                }
                return D.cancel = T, D.flush = E, D
            }

            function v(e, t, r) {
                var i = !0,
                    a = !0;
                if (typeof e != `function`) throw TypeError(n);
                return y(r) && (i = `leading` in r ? !!r.leading : i, a = `trailing` in r ? !!r.trailing : a), _(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: a
                })
            }

            function y(e) {
                var t = typeof e;
                return !!e && (t == `object` || t == `function`)
            }

            function b(e) {
                return !!e && typeof e == `object`
            }

            function x(e) {
                return typeof e == `symbol` || b(e) && p.call(e) == `[object Symbol]`
            }

            function S(e) {
                if (typeof e == `number`) return e;
                if (x(e)) return i;
                if (y(e)) {
                    var t = typeof e.valueOf == `function` ? e.valueOf() : e;
                    e = y(t) ? t + `` : t
                }
                if (typeof e != `string`) return e === 0 ? e : +e;
                e = e.replace(a, ``);
                var n = s.test(e);
                return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : o.test(e) ? i : +e
            }
            t.exports = v
        }
    }),
    K = (...e) => e.filter(e => !!e).join(` `),
    At = e => e.includes(`#`) ? e.replace(/^.+(#.+)$/, `$1`) : ``,
    jt = !!globalThis.window,
    Mt = new Set([`youtu.be`, `youtube.com`, `www.youtube.com`, `youtube-nocookie.com`, `www.youtube-nocookie.com`]),
    Nt = e => {
        var t;
        try {
            let {
                hostname: n
            } = new URL(e);
            if (!Mt.has(n)) return null;
            let r = e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i);
            if (r && ((t = r[2]) == null ? void 0 : t.length) === 11) return r[2]
        } catch {}
        return null
    },
    Pt = e => {
        try {
            let {
                searchParams: t
            } = new URL(e), n = {};
            for (let [e, r] of t.entries()) n[e] = r;
            return n
        } catch {}
    },
    q = (0, R.unionize)({
        NotAsked: {},
        Buffering: {},
        Loading: {},
        LoadSuccess: {},
        LoadError: (0, R.ofType)()
    }),
    Ft = (0, R.unionize)({
        ViewChanged: (0, R.ofType)(),
        BufferingEnded: {},
        LoadSuccess: {},
        LoadError: (0, R.ofType)()
    }),
    It = e => t => {
        let n = Ut(Ht(e));
        n.promise.then(() => t.update(Ft.BufferingEnded())).catch(e => {}), t.promiseCache.buffering = n
    },
    Lt = (e, t) => n => {
        let r = Ut(Vt(e, t));
        r.promise.then(e => n.update(Ft.LoadSuccess({}))).catch(e => {
            e.isCanceled || n.update(new Ft.LoadError({
                msg: `LoadError`
            }))
        }), n.promiseCache.loading = r
    },
    Rt = e => {
        var t;
        (t = e.promiseCache.buffering) == null || t.cancel()
    },
    zt = class e extends d.Component {
        constructor(e) {
            super(e), G(this, `promiseCache`, {}), G(this, `initialState`, q.NotAsked()), this.state = this.initialState, this.update = this.update.bind(this)
        }
        static reducer(e, t, n) {
            return Ft.match(e, {
                ViewChanged: ({
                    inView: e
                }) => e === !0 ? n.src ? q.match(t, {
                    NotAsked: () => n.debounceDurationMs ? {
                        nextState: q.Buffering(),
                        cmd: It(n.debounceDurationMs)
                    } : {
                        nextState: q.Loading(),
                        cmd: Lt(n, n.experimentalDecode)
                    },
                    default: () => ({
                        nextState: t
                    })
                }) : {
                    nextState: q.LoadSuccess()
                } : q.match(t, {
                    Buffering: () => ({
                        nextState: q.NotAsked(),
                        cmd: Rt
                    }),
                    default: () => ({
                        nextState: t
                    })
                }),
                BufferingEnded: () => ({
                    nextState: q.Loading(),
                    cmd: Lt(n, n.experimentalDecode)
                }),
                LoadSuccess: () => ({
                    nextState: q.LoadSuccess()
                }),
                LoadError: e => ({
                    nextState: new q.LoadError(e)
                })
            })
        }
        update(t) {
            let {
                nextState: n,
                cmd: r
            } = e.reducer(t, this.state, this.props);
            this.props.debugActions && console.log({
                action: t,
                prevState: this.state,
                nextState: n
            }), this.setState(n, () => r && r(this))
        }
        componentWillUnmount() {
            this.promiseCache.loading && this.promiseCache.loading.cancel(), this.promiseCache.buffering && this.promiseCache.buffering.cancel(), this.promiseCache = {}
        }
        render() {
            let {
                children: e,
                loadEagerly: t,
                observerProps: n,
                ...r
            } = this.props;
            return t ? e({
                imageState: q.LoadSuccess().tag,
                imageProps: r
            }) : (0, z.jsx)(Me, {
                rootMargin: `50px 0px`,
                threshold: .01,
                ...n,
                onChange: e => this.update(Ft.ViewChanged({
                    inView: e
                })),
                children: ({
                    ref: t
                }) => e({
                    imageState: this.state.tag === `Buffering` ? `Loading` : this.state.tag,
                    imageProps: r,
                    ref: t
                })
            })
        }
    };
G(zt, `displayName`, `LazyImageFull`);
var Bt = zt,
    Vt = ({
        src: e,
        srcSet: t,
        alt: n,
        sizes: r
    }, i = !1) => new Promise((a, o) => {
        let s = new Image;
        if (t && (s.srcset = t), n && (s.alt = n), r && (s.sizes = r), s.src = e, i && `decode` in s) return s.decode().then(() => a(s)).catch(e => o(e));
        s.addEventListener(`load`, a), s.addEventListener(`error`, o)
    }),
    Ht = e => new Promise(t => setTimeout(t, e)),
    Ut = e => {
        let t = !1;
        return {
            promise: new Promise((n, r) => {
                e.then(e => t ? r({
                    isCanceled: !0
                }) : n(e)), e.catch(e => r(t ? {
                    isCanceled: !0
                } : e))
            }),
            cancel() {
                t = !0
            }
        }
    };

function J({
    src: e,
    alt: t,
    className: n,
    style: r,
    zoomable: i = !1,
    priority: a = !1,
    height: o,
    ...s
}) {
    var c, l;
    let {
        recordMap: u,
        zoom: f,
        previewImages: p,
        forceCustomImages: m,
        components: h
    } = $(), g = d.useRef(f ? f.clone() : null), _ = p ? ((c = u == null ? void 0 : u.preview_images) == null ? void 0 : c[e]) ?? ((l = u == null ? void 0 : u.preview_images) == null ? void 0 : l[N(e)]) : null, v = d.useCallback(e => {
        i && (e.target.src || e.target.srcset) && g.current && g.current.attach(e.target)
    }, [g, i]), y = d.useCallback(e => {
        g.current && e && g.current.attach(e)
    }, [g]), b = d.useMemo(() => i ? y : void 0, [i, y]);
    if (_) {
        let i = _.originalHeight / _.originalWidth;
        return h.Image ? (0, z.jsx)(h.Image, {
            src: e,
            alt: t,
            style: r,
            className: n,
            width: _.originalWidth,
            height: _.originalHeight,
            blurDataURL: _.dataURIBase64,
            placeholder: `blur`,
            priority: a,
            onLoad: v
        }) : (0, z.jsx)(Bt, {
            src: e,
            ...s,
            experimentalDecode: !0,
            children: ({
                imageState: a,
                ref: s
            }) => {
                let c = a === `LoadSuccess`,
                    l = {
                        width: `100%`
                    },
                    u = {};
                return o ? l.height = o : (u.position = `absolute`, l.paddingBottom = `${i*100}%`), (0, z.jsxs)(`div`, {
                    className: K(`lazy-image-wrapper`, c && `lazy-image-loaded`, n),
                    style: l,
                    children: [(0, z.jsx)(`img`, {
                        className: `lazy-image-preview`,
                        src: _.dataURIBase64,
                        alt: t,
                        ref: s,
                        style: r,
                        decoding: `async`
                    }), (0, z.jsx)(`img`, {
                        className: `lazy-image-real`,
                        src: e,
                        alt: t,
                        ref: b,
                        style: {
                            ...r,
                            ...u
                        },
                        width: _.originalWidth,
                        height: _.originalHeight,
                        decoding: `async`,
                        loading: `lazy`
                    })]
                })
            }
        })
    }
    return h.Image && m ? (0, z.jsx)(h.Image, {
        src: e,
        alt: t,
        className: n,
        style: r,
        width: null,
        height: o || null,
        priority: a,
        onLoad: v
    }) : (0, z.jsx)(`img`, {
        className: n,
        style: r,
        src: e,
        alt: t,
        ref: b,
        loading: `lazy`,
        decoding: `async`,
        ...s
    })
}
var Wt = e => Object.keys(e).map(t => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`).join(`&`),
    Gt = [120, 320, 480, 640, 1280],
    Kt = {
        120: `default`,
        320: `mqdefault`,
        480: `hqdefault`,
        640: `sddefault`,
        1280: `maxresdefault`
    },
    qt = Gt.map(e => `(max-width: ${e}px) ${e}px`).join(`, `);

function Jt(e, t = 480, n = `jpg`) {
    return n === `webp` ? `https://i.ytimg.com/vi_webp/${e}/${Kt[t]}.webp` : `https://i.ytimg.com/vi/${e}/${Kt[t]}.jpg`
}

function Yt(e, t = `jpg`) {
    return Gt.map(n => `${Jt(e,n,t)} ${n}w`).join(`, `)
}

function Xt({
    id: e,
    defaultPlay: t = !1,
    mute: n = !1,
    lazyImage: r = !1,
    iframeTitle: i = `YouTube video`,
    alt: a = `Video preview`,
    params: o = {},
    adLinksPreconnect: s = !0,
    style: c,
    className: l
}) {
    let u = n || t ? `1` : `0`,
        f = d.useMemo(() => Wt({
            autoplay: `1`,
            mute: u,
            ...o
        }), [u, o]),
        p = `https://www.youtube-nocookie.com`,
        m = `${p}/embed/${e}?${f}`,
        [h, g] = d.useState(!1),
        [_, v] = d.useState(t),
        [y, b] = d.useState(!1),
        x = d.useCallback(() => {
            h || g(!0)
        }, [h]),
        S = d.useCallback(() => {
            _ || v(!0)
        }, [_]),
        C = d.useCallback(() => {
            b(!0)
        }, []);
    return (0, z.jsxs)(z.Fragment, {
        children: [(0, z.jsx)(`link`, {
            rel: `preload`,
            as: `image`,
            href: Jt(e),
            imageSrcSet: Yt(e, `webp`),
            imageSizes: qt
        }), h && (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(`link`, {
                rel: `preconnect`,
                href: p
            }), (0, z.jsx)(`link`, {
                rel: `preconnect`,
                href: `https://www.google.com`
            })]
        }), h && s && (0, z.jsxs)(z.Fragment, {
            children: [(0, z.jsx)(`link`, {
                rel: `preconnect`,
                href: `https://static.doubleclick.net`
            }), (0, z.jsx)(`link`, {
                rel: `preconnect`,
                href: `https://googleads.g.doubleclick.net`
            })]
        }), (0, z.jsxs)(`div`, {
            onClick: S,
            onPointerOver: x,
            className: K(`notion-yt-lite`, y && `notion-yt-loaded`, _ && `notion-yt-initialized`, l),
            style: c,
            children: [(0, z.jsxs)(`picture`, {
                children: [Gt.map(t => (0, z.jsx)(`source`, {
                    srcSet: `${Jt(e,t,`webp`)} ${t}w`,
                    media: `(max-width: ${t}px)`,
                    type: `image/webp`
                }, t)), (0, z.jsx)(`img`, {
                    src: Jt(e),
                    className: `notion-yt-thumbnail`,
                    loading: r ? `lazy` : void 0,
                    alt: a
                })]
            }), (0, z.jsx)(`div`, {
                className: `notion-yt-playbtn`
            }), _ && (0, z.jsx)(`iframe`, {
                width: `560`,
                height: `315`,
                frameBorder: `0`,
                allow: `accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,
                allowFullScreen: !0,
                title: i,
                src: m,
                onLoad: C
            })]
        })]
    })
}
var Zt = !globalThis.window,
    Qt = new Set([`replit`, `video`, `image`, `embed`, `figma`, `typeform`, `excalidraw`, `maps`, `tweet`, `pdf`, `gist`, `codepen`, `drive`]);

function $t({
    block: e,
    zoomable: t = !0,
    children: n
}) {
    var r, i, a, o, s, c, l, u, d, f, p, m, h;
    let {
        recordMap: g,
        mapImageUrl: _,
        components: v
    } = $();
    if (!e || !Qt.has(e.type)) return null;
    let y = {
            position: `relative`,
            display: `flex`,
            justifyContent: `center`,
            alignSelf: `center`,
            width: `100%`,
            maxWidth: `100%`,
            flexDirection: `column`
        },
        b = {};
    if (e.format) {
        let {
            block_aspect_ratio: t,
            block_height: n,
            block_width: i,
            block_full_width: a,
            block_page_width: o,
            block_preserve_scale: s
        } = e.format;
        if (a || o) y.width = a ? `100vw` : `100%`, e.type === `video` ? n ? y.height = n : t ? y.paddingBottom = `${t*100}%` : s && (y.objectFit = `contain`) : t && e.type !== `image` ? y.paddingBottom = `${t*100}%` : n ? y.height = n : s && (e.type === `image` ? y.height = `100%` : (y.paddingBottom = `75%`, y.minHeight = 100));
        else {
            switch ((r = e.format) == null ? void 0 : r.block_alignment) {
                case `center`:
                    y.alignSelf = `center`;
                    break;
                case `left`:
                    y.alignSelf = `start`;
                    break;
                case `right`:
                    y.alignSelf = `end`
            }
            i && (y.width = i), s && e.type !== `image` ? (y.paddingBottom = `50%`, y.minHeight = 100) : n && e.type !== `image` && (y.height = n)
        }
        e.type === `image` ? b.objectFit = `cover` : s && (b.objectFit = `contain`)
    }
    let x = ((i = g.signed_urls) == null ? void 0 : i[e.id]) || ((s = (o = (a = e.properties) == null ? void 0 : a.source) == null ? void 0 : o[0]) == null ? void 0 : s[0]);
    if (!x) return null;
    if (e.space_id) {
        let t = new URL(x);
        t.searchParams.set(`spaceId`, e.space_id), x = t.toString()
    }
    let S = null;
    if (e.type === `tweet`) {
        let e = x;
        if (!e) return null;
        let t = (l = (c = e.split(`?`)) == null ? void 0 : c[0]) == null ? void 0 : l.split(`/`).pop();
        if (!t) return null;
        S = (0, z.jsx)(`div`, {
            style: {
                ...b,
                maxWidth: 420,
                width: `100%`,
                marginLeft: `auto`,
                marginRight: `auto`
            },
            children: (0, z.jsx)(v.Tweet, {
                id: t
            })
        })
    } else if (e.type === `pdf`) y.overflow = `auto`, y.background = `rgb(226, 226, 226)`, y.display = `block`, y.padding || (y.padding = `8px 16px`), Zt || (S = (0, z.jsx)(v.Pdf, {
        file: x
    }));
    else if (e.type === `embed` || e.type === `video` || e.type === `figma` || e.type === `typeform` || e.type === `gist` || e.type === `maps` || e.type === `excalidraw` || e.type === `codepen` || e.type === `drive` || e.type === `replit`) {
        if (e.type === `video` && x && !x.includes(`youtube`) && !x.includes(`youtu.be`) && !x.includes(`vimeo`) && !x.includes(`wistia`) && !x.includes(`loom`) && !x.includes(`videoask`) && !x.includes(`getcloudapp`) && !x.includes(`tella`)) y.paddingBottom = void 0, S = (0, z.jsx)(`video`, {
            playsInline: !0,
            controls: !0,
            preload: `metadata`,
            style: b,
            src: x,
            title: e.type
        });
        else {
            let t = ((u = e.format) == null ? void 0 : u.display_source) || x;
            if (t) {
                let n = e.type === `video` ? Nt(t) : null;
                if (n) {
                    let e = Pt(t);
                    S = (0, z.jsx)(Xt, {
                        id: n,
                        style: b,
                        className: `notion-asset-object-fit`,
                        params: e
                    })
                } else e.type === `gist` ? (t.endsWith(`.pibb`) || (t = `${t}.pibb`), b.width = `100%`, y.paddingBottom = `50%`, S = (0, z.jsx)(`iframe`, {
                    style: b,
                    className: `notion-asset-object-fit`,
                    src: t,
                    title: `GitHub Gist`,
                    frameBorder: `0`,
                    loading: `lazy`,
                    scrolling: `auto`
                })) : (t += e.type === `typeform` ? `&disable-auto-focus=true` : ``, S = (0, z.jsx)(`iframe`, {
                    className: `notion-asset-object-fit`,
                    style: b,
                    src: t,
                    title: `iframe ${e.type}`,
                    frameBorder: `0`,
                    allowFullScreen: !0,
                    loading: `lazy`,
                    scrolling: `auto`
                }))
            }
        }
    } else if (e.type === `image`) {
        !x.includes(`.gif`) && x.includes(`file.notion.so`) && (x = (p = (f = (d = e.properties) == null ? void 0 : d.source) == null ? void 0 : f[0]) == null ? void 0 : p[0]);
        let n = _(x, e),
            r = k((m = e.properties) == null ? void 0 : m.alt_text),
            i = k((h = e.properties) == null ? void 0 : h.caption);
        S = (0, z.jsx)(J, {
            src: n,
            alt: r || i || `notion image`,
            zoomable: t,
            height: y.height,
            style: b
        })
    }
    return (0, z.jsxs)(z.Fragment, {
        children: [(0, z.jsxs)(`div`, {
            style: y,
            children: [S, e.type === `image` && n]
        }), e.type !== `image` && n]
    })
}

function en(e) {
    return (0, z.jsx)(`svg`, {
        viewBox: `0 0 260 260`,
        ...e,
        children: (0, z.jsx)(`g`, {
            children: (0, z.jsx)(`path`, {
                d: `M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z`,
                fill: `#161614`
            })
        })
    })
}
var tn = en;

function nn(e) {
    return e ? e.charAt(0).toUpperCase() + e.slice(1) : ``
}

function rn({
    owner: e,
    lastUpdated: t,
    externalImage: n,
    title: r,
    domain: i
}) {
    return (0, z.jsxs)(`div`, {
        className: `notion-external-subtitle`,
        children: [n && (0, z.jsxs)(`div`, {
            className: `notion-preview-card-domain-warp`,
            children: [(0, z.jsx)(`div`, {
                className: `notion-preview-card-logo`,
                children: n
            }), (0, z.jsx)(`div`, {
                className: `notion-preview-card-domain`,
                children: nn(i.split(`.`)[0])
            })]
        }), (0, z.jsx)(`div`, {
            className: `notion-preview-card-title`,
            children: r
        }), e && (0, z.jsxs)(`div`, {
            className: `notion-external-subtitle-item`,
            children: [(0, z.jsx)(`div`, {
                className: `notion-external-subtitle-item-name`,
                children: `Owner`
            }), (0, z.jsx)(`span`, {
                className: `notion-external-subtitle-item-desc`,
                children: e
            })]
        }), t && (0, z.jsxs)(`div`, {
            className: `notion-external-subtitle-item`,
            children: [(0, z.jsx)(`div`, {
                className: `notion-external-subtitle-item-name`,
                children: `Updated`
            }), (0, z.jsx)(`span`, {
                className: `notion-external-subtitle-item-desc`,
                children: t
            })]
        }), i === `github.com` && (0, z.jsxs)(`div`, {
            className: `notion-preview-card-github-shields`,
            children: [(0, z.jsx)(`img`, {
                src: `https://img.shields.io/github/stars/${e}/${r}?logo=github`,
                alt: ``
            }), (0, z.jsx)(`img`, {
                src: `https://img.shields.io/github/last-commit/${e}/${r}`,
                alt: ``
            })]
        })]
    })
}

function an({
    block: e,
    inline: t,
    className: n
}) {
    var r, i, a;
    let {
        components: o
    } = $(), {
        original_url: s,
        attributes: c,
        domain: l
    } = (e == null ? void 0 : e.format) || {};
    if (!s || !c) return null;
    let u = (r = c.find(e => e.id === `title`)) == null ? void 0 : r.values[0],
        d = (i = c.find(e => e.id === `owner`)) == null ? void 0 : i.values[0],
        f = (a = c.find(e => e.id === `updated_at`)) == null ? void 0 : a.values[0],
        p = f ? le(f) : null,
        m;
    switch (l) {
        case `github.com`:
            m = (0, z.jsx)(tn, {}), d && (d = d.split(`/`).at(-1));
            break;
        default:
            return console.log(`Unsupported external_object_instance domain "${l}"`, JSON.stringify(e, null, 2)), null
    }
    return (0, z.jsxs)(o.Link, {
        target: `_blank`,
        rel: `noopener noreferrer`,
        href: s,
        className: K(`notion-external`, t ? `notion-external-mention` : `notion-external-block notion-row`, n),
        children: [m && (0, z.jsx)(`div`, {
            className: `notion-external-image`,
            children: m
        }), (0, z.jsxs)(`div`, {
            className: `notion-external-description`,
            children: [(0, z.jsx)(`div`, {
                className: `notion-external-title`,
                children: u
            }), !t && d ? (0, z.jsxs)(`div`, {
                className: `notion-external-block-desc`,
                children: [d, p && (0, z.jsx)(`span`, {
                    children: ` • `
                }), p && `Updated ${p}`]
            }) : null, t && (d || p) && (0, z.jsx)(rn, {
                title: u,
                owner: d,
                lastUpdated: p,
                domain: l,
                externalImage: m
            })]
        })]
    })
}

function on(e) {
    return jt ? (0, z.jsx)(Le.Img, {
        ...e
    }) : (0, z.jsx)(`img`, {
        ...e
    })
}

function sn({
    metadata: e
}) {
    return (0, z.jsxs)(`span`, {
        className: `notion-link-mention`,
        children: [(0, z.jsx)(cn, {
            metadata: e
        }), (0, z.jsx)(ln, {
            metadata: e
        })]
    })
}

function cn({
    metadata: e
}) {
    return (0, z.jsxs)(`a`, {
        href: e.href,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `notion-link-mention-link`,
        children: [(0, z.jsx)(`img`, {
            className: `notion-link-mention-icon`,
            src: e.icon_url,
            alt: e.link_provider
        }), e.link_provider && (0, z.jsx)(`span`, {
            className: `notion-link-mention-provider`,
            children: e.link_provider
        }), (0, z.jsx)(`span`, {
            className: `notion-link-mention-title`,
            children: e.title
        })]
    })
}

function ln({
    metadata: e
}) {
    return (0, z.jsx)(`div`, {
        className: `notion-link-mention-preview`,
        children: (0, z.jsxs)(`article`, {
            className: `notion-link-mention-card`,
            children: [(0, z.jsx)(`img`, {
                className: `notion-link-mention-preview-thumbnail`,
                src: e.thumbnail_url,
                alt: e.title,
                referrerPolicy: `same-origin`
            }), (0, z.jsxs)(`div`, {
                className: `notion-link-mention-preview-content`,
                children: [(0, z.jsx)(`p`, {
                    className: `notion-link-mention-preview-title`,
                    children: e.title
                }), (0, z.jsx)(`p`, {
                    className: `notion-link-mention-preview-description`,
                    children: e.description
                }), (0, z.jsxs)(`div`, {
                    className: `notion-link-mention-preview-footer`,
                    children: [(0, z.jsx)(`img`, {
                        className: `notion-link-mention-preview-icon`,
                        src: e.icon_url,
                        alt: e.link_provider,
                        referrerPolicy: `same-origin`
                    }), (0, z.jsx)(`span`, {
                        className: `notion-link-mention-preview-provider`,
                        children: e.link_provider
                    })]
                })]
            })]
        })
    })
}

function un(e) {
    let {
        className: t,
        ...n
    } = e;
    return (0, z.jsx)(`svg`, {
        className: t,
        ...n,
        viewBox: `0 0 30 30`,
        width: `16`,
        children: (0, z.jsx)(`path`, {
            d: `M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z`
        })
    })
}
var dn = e => e.type === `page` || e.type === `callout` || e.type === `collection_view` || e.type === `collection_view_page`;

function fn({
    block: e,
    className: t,
    inline: n = !0,
    hideDefaultIcon: r = !1,
    defaultIcon: i
}) {
    var a;
    let {
        mapImageUrl: o,
        recordMap: s,
        darkMode: c
    } = $(), l = !1, u = null;
    if (dn(e)) {
        let n = ((a = me(e, s)) == null ? void 0 : a.trim()) || i,
            d = A(e, s);
        if (n && f(n)) {
            let r = o(n, e);
            l = !0, u = (0, z.jsx)(J, {
                src: r,
                alt: d || `page icon`,
                className: K(t, `notion-page-icon`)
            })
        } else if (n && n.startsWith(`/icons/`)) {
            let e = `https://www.notion.so` + n + `?mode=` + (c ? `dark` : `light`);
            u = (0, z.jsx)(J, {
                src: e,
                alt: d || `page icon`,
                className: K(t, `notion-page-icon`)
            })
        } else n ? (l = !1, u = (0, z.jsx)(`span`, {
            className: K(t, `notion-page-icon`),
            role: `img`,
            "aria-label": n,
            children: n
        })) : r || (l = !0, u = (0, z.jsx)(un, {
            className: K(t, `notion-page-icon`),
            alt: d || `page icon`
        }))
    }
    return u ? (0, z.jsx)(`div`, {
        className: K(n ? `notion-page-icon-inline` : `notion-page-icon-hero`, l ? `notion-page-icon-image` : `notion-page-icon-span`),
        children: u
    }) : null
}
var pn = d.memo(fn);

function mn({
    block: e,
    className: t,
    defaultIcon: n,
    ...r
}) {
    var i, a;
    let {
        recordMap: o
    } = $();
    if (!e) return null;
    if (e.type === `collection_view_page` || e.type === `collection_view`) {
        let i = A(e, o);
        if (!i) return null;
        let a = [
            [i]
        ];
        return (0, z.jsxs)(`span`, {
            className: K(`notion-page-title`, t),
            ...r,
            children: [(0, z.jsx)(pn, {
                block: e,
                defaultIcon: n,
                className: `notion-page-title-icon`
            }), (0, z.jsx)(`span`, {
                className: `notion-page-title-text`,
                children: (0, z.jsx)(X, {
                    value: a,
                    block: e
                })
            })]
        })
    }
    return (i = e.properties) != null && i.title ? (0, z.jsxs)(`span`, {
        className: K(`notion-page-title`, t),
        ...r,
        children: [(0, z.jsx)(pn, {
            block: e,
            defaultIcon: n,
            className: `notion-page-title-icon`
        }), (0, z.jsx)(`span`, {
            className: `notion-page-title-text`,
            children: (0, z.jsx)(X, {
                value: (a = e.properties) == null ? void 0 : a.title,
                block: e
            })
        })]
    }) : null
}
var Y = d.memo(mn);

function X({
    value: e,
    block: t,
    linkProps: n,
    linkProtocol: r
}) {
    let {
        components: i,
        recordMap: a,
        mapPageUrl: o,
        mapImageUrl: s,
        rootDomain: c
    } = $();
    return (0, z.jsx)(d.Fragment, {
        children: e == null ? void 0 : e.map(([e, l], u) => {
            if (!l) return e === `,` ? (0, z.jsx)(`span`, {
                style: {
                    padding: `0.5em`
                }
            }, u) : (0, z.jsx)(d.Fragment, {
                children: e
            }, u);
            let f = l.reduce((e, l) => {
                switch (l[0]) {
                    case `p`: {
                        let e = l[1],
                            t = O(a.block[e]);
                        return t ? (0, z.jsx)(i.PageLink, {
                            className: `notion-link`,
                            href: o(e),
                            children: (0, z.jsx)(Y, {
                                block: t
                            })
                        }) : (console.log(`"p" missing block`, e), null)
                    }
                    case `‣`: {
                        let e = l[1][0],
                            r = l[1][1];
                        switch (e) {
                            case `u`: {
                                let e = O(a.notion_user[r]);
                                if (!e) return console.log(`"‣" missing user`, r), null;
                                let n = s(e.profile_photo, t);
                                if (!n) return null;
                                let i = [e.given_name, e.family_name].filter(Boolean).join(` `);
                                return (0, z.jsx)(on, {
                                    className: `notion-user`,
                                    src: n,
                                    alt: i
                                })
                            }
                            default: {
                                let t = O(a.block[r]);
                                return t ? (0, z.jsx)(i.PageLink, {
                                    className: `notion-link`,
                                    href: o(r),
                                    ...n,
                                    target: `_blank`,
                                    rel: `noopener noreferrer`,
                                    children: (0, z.jsx)(Y, {
                                        block: t
                                    })
                                }) : (console.log(`"‣" missing block`, e, r), null)
                            }
                        }
                    }
                    case `h`:
                        return (0, z.jsx)(`span`, {
                            className: `notion-${l[1]}`,
                            children: e
                        });
                    case `c`:
                        return (0, z.jsx)(`code`, {
                            className: `notion-inline-code`,
                            children: e
                        });
                    case `b`:
                        return (0, z.jsx)(`b`, {
                            children: e
                        });
                    case `i`:
                        return (0, z.jsx)(`em`, {
                            children: e
                        });
                    case `s`:
                        return (0, z.jsx)(`s`, {
                            children: e
                        });
                    case `_`:
                        return (0, z.jsx)(`span`, {
                            className: `notion-inline-underscore`,
                            children: e
                        });
                    case `e`:
                        return (0, z.jsx)(i.Equation, {
                            math: l[1],
                            inline: !0
                        });
                    case `m`:
                        return e;
                    case `a`: {
                        let t = l[1],
                            a = pe(t.slice(1), {
                                uuid: !0
                            });
                        if (c && t.includes(c) || a && t[0] === `/`) {
                            let r = c && t.includes(c) ? t : `${o(a)}${At(t)}`;
                            return (0, z.jsx)(i.PageLink, {
                                className: `notion-link`,
                                href: r,
                                ...n,
                                children: e
                            })
                        }
                        return (0, z.jsx)(i.Link, {
                            className: `notion-link`,
                            href: r ? `${r}:${l[1]}` : l[1],
                            ...n,
                            children: e
                        })
                    }
                    case `d`: {
                        let t = l[1],
                            n = t == null ? void 0 : t.type;
                        if (n === `date`) {
                            let e = t.start_date;
                            return j(e)
                        }
                        if (n === `datetime`) {
                            let e = t.start_date,
                                n = t.start_time;
                            return `${j(e)} ${n}`
                        }
                        if (n === `daterange`) {
                            let e = t.start_date,
                                n = t.end_date;
                            return `${j(e)} \u2192 ${j(n)}`
                        }
                        return e
                    }
                    case `u`: {
                        let e = l[1],
                            n = O(a.notion_user[e]);
                        if (!n) return console.log(`missing user`, e), null;
                        let r = s(n.profile_photo, t);
                        if (!r) return null;
                        let i = [n.given_name, n.family_name].filter(Boolean).join(` `);
                        return (0, z.jsx)(on, {
                            className: `notion-user`,
                            src: r,
                            alt: i
                        })
                    }
                    case `lm`: {
                        let e = l[1];
                        return (0, z.jsx)(sn, {
                            metadata: e
                        })
                    }
                    case `eoi`: {
                        let e = l[1],
                            t = O(a.block[e]);
                        return t ? (0, z.jsx)(an, {
                            block: t,
                            inline: !0
                        }) : (console.log(`"eoi" missing block`, e), null)
                    }
                    case `si`:
                        return null;
                    default:
                        return console.log(`unsupported text format`, l), e
                }
            }, (0, z.jsx)(z.Fragment, {
                children: e
            }));
            return (0, z.jsx)(d.Fragment, {
                children: f
            }, u)
        })
    })
}
var hn = {
    width: `100%`
};

function gn({
    blockId: e,
    block: t
}) {
    var n, r, i, a, o, s, c, l;
    let u = t,
        {
            components: d,
            mapPageUrl: f,
            rootDomain: p,
            zoom: m
        } = $(),
        h = !1;
    if (t.type === `image`) {
        let e = (i = (r = (n = u == null ? void 0 : u.properties) == null ? void 0 : n.caption) == null ? void 0 : r[0]) == null ? void 0 : i[0];
        if (e) {
            let t = pe(e, {
                uuid: !0
            });
            (e.charAt(0) === `/` && t || _n(e)) && (h = !0)
        }
    }
    let g = (0, z.jsx)(`figure`, {
        className: K(`notion-asset-wrapper`, `notion-asset-wrapper-${t.type}`, ((a = u.format) == null ? void 0 : a.block_full_width) && `notion-asset-wrapper-full`, e),
        children: (0, z.jsx)($t, {
            block: u,
            zoomable: m && !h,
            children: ((o = u == null ? void 0 : u.properties) == null ? void 0 : o.caption) && !h && (0, z.jsx)(`figcaption`, {
                className: `notion-asset-caption`,
                children: (0, z.jsx)(X, {
                    value: u.properties.caption,
                    block: t
                })
            })
        })
    });
    if (h) {
        let e = (l = (c = (s = u == null ? void 0 : u.properties) == null ? void 0 : s.caption) == null ? void 0 : c[0]) == null ? void 0 : l[0],
            t = pe(e, {
                uuid: !0
            }),
            n = (e == null ? void 0 : e.charAt(0)) === `/` && t,
            r = vn(e);
        return (0, z.jsx)(d.PageLink, {
            style: hn,
            href: n ? f(t) : e,
            target: r && r !== p && !(e != null && e.startsWith(`/`)) ? `blank_` : null,
            children: g
        })
    }
    return g
}

function _n(e) {
    return !!RegExp(`^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$`, `i`).test(e)
}

function vn(e) {
    try {
        return new URL(e).hostname
    } catch {
        return ``
    }
}

function yn(e) {
    return (0, z.jsx)(`svg`, {
        viewBox: `0 0 14 14`,
        ...e,
        children: (0, z.jsx)(`path`, {
            d: `M5.5 12L14 3.5 12.5 2l-7 7-4-4.003L0 6.499z`
        })
    })
}
var bn = yn;

function xn({
    isChecked: e
}) {
    let t = null;
    return t = e ? (0, z.jsx)(`div`, {
        className: `notion-property-checkbox-checked`,
        children: (0, z.jsx)(bn, {})
    }) : (0, z.jsx)(`div`, {
        className: `notion-property-checkbox-unchecked`
    }), (0, z.jsx)(`span`, {
        className: `notion-property notion-property-checkbox`,
        children: t
    })
}

function Sn(e) {
    let {
        className: t,
        ...n
    } = e;
    return (0, z.jsx)(`svg`, {
        className: K(`notion-icon`, t),
        viewBox: `0 0 17 17`,
        ...n,
        children: (0, z.jsx)(`path`, {
            d: `M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z`
        })
    })
}
var Cn = Ot(kt(), 1);

function wn(e) {
    let {
        className: t,
        ...n
    } = e;
    return (0, z.jsx)(`svg`, {
        className: K(`notion-icon`, t),
        ...n,
        viewBox: `0 0 30 30`,
        children: (0, z.jsx)(`path`, {
            d: `M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z`
        })
    })
}

function Tn(e) {
    let {
        className: t,
        ...n
    } = e;
    return (0, z.jsxs)(`svg`, {
        className: K(`notion-icon`, t),
        ...n,
        viewBox: `0 0 24 24`,
        children: [(0, z.jsx)(`defs`, {
            children: (0, z.jsxs)(`linearGradient`, {
                x1: `28.1542969%`,
                y1: `63.7402344%`,
                x2: `74.6289062%`,
                y2: `17.7832031%`,
                id: `linearGradient-1`,
                children: [(0, z.jsx)(`stop`, {
                    stopColor: `rgba(164, 164, 164, 1)`,
                    offset: `0%`
                }), (0, z.jsx)(`stop`, {
                    stopColor: `rgba(164, 164, 164, 0)`,
                    stopOpacity: `0`,
                    offset: `100%`
                })]
            })
        }), (0, z.jsx)(`g`, {
            id: `Page-1`,
            stroke: `none`,
            strokeWidth: `1`,
            fill: `none`,
            children: (0, z.jsx)(`g`, {
                transform: `translate(-236.000000, -286.000000)`,
                children: (0, z.jsxs)(`g`, {
                    transform: `translate(238.000000, 286.000000)`,
                    children: [(0, z.jsx)(`circle`, {
                        id: `Oval-2`,
                        stroke: `url(#linearGradient-1)`,
                        strokeWidth: `4`,
                        cx: `10`,
                        cy: `12`,
                        r: `10`
                    }), (0, z.jsx)(`path`, {
                        d: `M10,2 C4.4771525,2 0,6.4771525 0,12`,
                        id: `Oval-2`,
                        stroke: `rgba(164, 164, 164, 1)`,
                        strokeWidth: `4`
                    }), (0, z.jsx)(`rect`, {
                        id: `Rectangle-1`,
                        fill: `rgba(164, 164, 164, 1)`,
                        x: `8`,
                        y: `0`,
                        width: `4`,
                        height: `4`,
                        rx: `8`
                    })]
                })
            })
        })]
    })
}
var En = class extends d.Component {
    constructor(e) {
        super(e), G(this, `state`, {
            isLoading: !1,
            query: ``,
            searchResult: null,
            searchError: null
        }), G(this, `_inputRef`), G(this, `_search`), G(this, `_onAfterOpen`, () => {
            this._inputRef.current && this._inputRef.current.focus()
        }), G(this, `_onChangeQuery`, e => {
            let t = e.target.value;
            if (this.setState({
                    query: t
                }), t.trim()) this._search();
            else {
                this.setState({
                    isLoading: !1,
                    searchResult: null,
                    searchError: null
                });
                return
            }
        }), G(this, `_onClearQuery`, () => {
            this._onChangeQuery({
                target: {
                    value: ``
                }
            })
        }), G(this, `_warmupSearch`, async () => {
            let {
                searchNotion: e,
                rootBlockId: t
            } = this.props;
            await e({
                query: ``,
                ancestorId: t
            })
        }), G(this, `_searchImpl`, async () => {
            let {
                searchNotion: e,
                rootBlockId: t
            } = this.props, {
                query: n
            } = this.state;
            if (!n.trim()) {
                this.setState({
                    isLoading: !1,
                    searchResult: null,
                    searchError: null
                });
                return
            }
            this.setState({
                isLoading: !0
            });
            let r = await e({
                query: n,
                ancestorId: t
            });
            console.log(`search`, n, r);
            let i = null,
                a = null;
            if (r.error || r.errorId) a = r;
            else {
                i = {
                    ...r
                };
                let e = i.results.map(e => {
                        var t, n;
                        let r = (t = i.recordMap.block[e.id]) == null ? void 0 : t.value;
                        if (!r) return;
                        let a = A(r, i.recordMap);
                        if (a && (e.title = a, e.block = r, e.recordMap = i.recordMap, e.page = he(r, i.recordMap, {
                                inclusive: !0
                            }) || r, e.page.id)) return (n = e.highlight) != null && n.text && (e.highlight.html = e.highlight.text.replaceAll(/<gzknfouu>/gi, `<b>`).replaceAll(/<\/gzknfouu>/gi, `</b>`)), e
                    }).filter(Boolean),
                    t = Object.fromEntries(e.map(e => [e.page.id, e]));
                i.results = Object.values(t)
            }
            this.state.query === n && this.setState({
                isLoading: !1,
                searchResult: i,
                searchError: a
            })
        }), this._inputRef = d.createRef()
    }
    componentDidMount() {
        this._search = (0, Cn.default)(this._searchImpl.bind(this), 1e3), this._warmupSearch()
    }
    render() {
        let {
            isOpen: e,
            onClose: t
        } = this.props, {
            isLoading: n,
            query: r,
            searchResult: i,
            searchError: a
        } = this.state, o = !!r.trim();
        return (0, z.jsx)(Un, {
            children: s => {
                let {
                    components: c,
                    defaultPageIcon: l,
                    mapPageUrl: u
                } = s;
                return (0, z.jsx)(c.Modal, {
                    isOpen: e,
                    contentLabel: `Search`,
                    className: `notion-search`,
                    overlayClassName: `notion-search-overlay`,
                    onRequestClose: t,
                    onAfterOpen: this._onAfterOpen,
                    children: (0, z.jsxs)(`div`, {
                        className: `quickFindMenu`,
                        children: [(0, z.jsxs)(`div`, {
                            className: `searchBar`,
                            children: [(0, z.jsx)(`div`, {
                                className: `inlineIcon`,
                                children: n ? (0, z.jsx)(Tn, {
                                    className: `loadingIcon`
                                }) : (0, z.jsx)(Sn, {})
                            }), (0, z.jsx)(`input`, {
                                className: `searchInput`,
                                placeholder: `Search`,
                                value: r,
                                ref: this._inputRef,
                                onChange: this._onChangeQuery
                            }), r && (0, z.jsx)(`div`, {
                                role: `button`,
                                className: `clearButton`,
                                onClick: this._onClearQuery,
                                children: (0, z.jsx)(wn, {
                                    className: `clearIcon`
                                })
                            })]
                        }), o && i && (0, z.jsx)(z.Fragment, {
                            children: i.results.length ? (0, z.jsxs)(Hn, {
                                ...s,
                                recordMap: i.recordMap,
                                children: [(0, z.jsx)(`div`, {
                                    className: `resultsPane`,
                                    children: i.results.map(e => {
                                        var t;
                                        return (0, z.jsxs)(c.PageLink, {
                                            className: K(`result`, `notion-page-link`),
                                            href: u(e.page.id, i.recordMap),
                                            children: [(0, z.jsx)(Y, {
                                                block: e.page,
                                                defaultIcon: l
                                            }), ((t = e.highlight) == null ? void 0 : t.html) && (0, z.jsx)(`div`, {
                                                className: `notion-search-result-highlight`,
                                                dangerouslySetInnerHTML: {
                                                    __html: e.highlight.html
                                                }
                                            })]
                                        }, e.id)
                                    })
                                }), (0, z.jsx)(`footer`, {
                                    className: `resultsFooter`,
                                    children: (0, z.jsxs)(`div`, {
                                        children: [(0, z.jsx)(`span`, {
                                            className: `resultsCount`,
                                            children: i.total
                                        }), i.total === 1 ? ` result` : ` results`]
                                    })
                                })]
                            }) : (0, z.jsxs)(`div`, {
                                className: `noResultsPane`,
                                children: [(0, z.jsx)(`div`, {
                                    className: `noResults`,
                                    children: `No results`
                                }), (0, z.jsx)(`div`, {
                                    className: `noResultsDetail`,
                                    children: `Try different search terms`
                                })]
                            })
                        }), o && !i && a && (0, z.jsx)(`div`, {
                            className: `noResultsPane`,
                            children: (0, z.jsx)(`div`, {
                                className: `noResults`,
                                children: `Search error`
                            })
                        })]
                    })
                })
            }
        })
    }
};

function Dn({
    block: e
}) {
    return (0, z.jsx)(`header`, {
        className: `notion-header`,
        children: (0, z.jsxs)(`div`, {
            className: `notion-nav-header`,
            children: [(0, z.jsx)(On, {
                block: e
            }), (0, z.jsx)(kn, {
                block: e
            })]
        })
    })
}

function On({
    block: e,
    rootOnly: t = !1
}) {
    let {
        recordMap: n,
        mapPageUrl: r,
        components: i
    } = $(), a = d.useMemo(() => {
        let r = xe(n, e.id);
        return t ? [r == null ? void 0 : r[0]].filter(Boolean) : r
    }, [n, e.id, t]);
    return (0, z.jsx)(`div`, {
        className: `breadcrumbs`,
        children: a == null ? void 0 : a.map((e, t) => {
            if (!e) return null;
            let n = {},
                o = {
                    pageLink: i.PageLink
                };
            return e.active ? o.pageLink = e => (0, z.jsx)(`div`, {
                ...e
            }) : n.href = r(e.pageId), (0, z.jsxs)(d.Fragment, {
                children: [(0, z.jsxs)(o.pageLink, {
                    className: K(`breadcrumb`, e.active && `active`),
                    ...n,
                    children: [e.icon && (0, z.jsx)(pn, {
                        className: `icon`,
                        block: e.block
                    }), e.title && (0, z.jsx)(`span`, {
                        className: `title`,
                        children: e.title
                    })]
                }), t < a.length - 1 && (0, z.jsx)(`span`, {
                    className: `spacer`,
                    children: `/`
                })]
            }, e.pageId)
        })
    }, `breadcrumbs`)
}

function kn({
    block: e,
    search: t,
    title: n = `Search`
}) {
    let {
        searchNotion: r,
        rootPageId: i,
        isShowingSearch: a,
        onHideSearch: o
    } = $(), s = t || r, [c, l] = d.useState(a);
    d.useEffect(() => {
        l(a)
    }, [a]);
    let u = d.useCallback(() => {
            l(!0)
        }, []),
        f = d.useCallback(() => {
            l(!1), o && o()
        }, [o]);
    ct(`cmd+p`, e => {
        u(), e.preventDefault(), e.stopPropagation()
    }), ct(`cmd+k`, e => {
        u(), e.preventDefault(), e.stopPropagation()
    });
    let p = !!s;
    return (0, z.jsxs)(z.Fragment, {
        children: [p && (0, z.jsxs)(`div`, {
            role: `button`,
            className: K(`breadcrumb`, `button`, `notion-search-button`),
            onClick: u,
            children: [(0, z.jsx)(Sn, {
                className: `searchIcon`
            }), n && (0, z.jsx)(`span`, {
                className: `title`,
                children: n
            })]
        }), c && p && (0, z.jsx)(En, {
            isOpen: c,
            rootBlockId: i || (e == null ? void 0 : e.id),
            onClose: f,
            searchNotion: s
        })]
    })
}
var An = e => d.memo(function({
        src: t,
        alt: n,
        width: r,
        height: i,
        className: a,
        fill: o,
        ...s
    }) {
        return o === `undefined` && (o = !(r && i)), (0, z.jsx)(e, {
            className: a,
            src: t,
            alt: n,
            width: !o && r && i ? r : void 0,
            height: !o && r && i ? i : void 0,
            fill: o,
            ...s
        })
    }, lt.default),
    jn = e => d.memo(function({
        src: t,
        alt: n,
        width: r,
        height: i,
        className: a,
        style: o,
        layout: s,
        ...c
    }) {
        return s || (s = r && i ? `intrinsic` : `fill`), (0, z.jsx)(e, {
            className: a,
            src: t,
            alt: n,
            width: s === `intrinsic` && r,
            height: s === `intrinsic` && i,
            objectFit: o == null ? void 0 : o.objectFit,
            objectPosition: o == null ? void 0 : o.objectPosition,
            layout: s,
            ...c
        })
    }, lt.default);

function Mn(e) {
    return ({
        href: t,
        as: n,
        passHref: r,
        prefetch: i,
        replace: a,
        scroll: o,
        shallow: s,
        locale: c,
        ...l
    }) => (0, z.jsx)(e, {
        href: t,
        as: n,
        passHref: r,
        prefetch: i,
        replace: a,
        scroll: o,
        shallow: s,
        locale: c,
        legacyBehavior: !0,
        children: (0, z.jsx)(`a`, {
            ...l
        })
    })
}

function Nn(e) {
    return (0, z.jsx)(`a`, {
        target: `_blank`,
        rel: `noopener noreferrer`,
        ...e
    })
}
var Pn = d.memo(Nn);

function Fn(e) {
    return (0, z.jsx)(`a`, {
        ...e
    })
}
var In = d.memo(Fn);

function Ln(e) {
    return (0, z.jsx)(gn, {
        ...e
    })
}
var Rn = Dn,
    Z = e => () => (console.warn(`Warning: using empty component "${e}" (you should override this in NotionRenderer.components)`), null),
    Q = (e, t) => t(),
    zn = {
        Image: null,
        Link: Pn,
        PageLink: In,
        Checkbox: xn,
        Callout: void 0,
        Button: void 0,
        Code: Z(`Code`),
        Equation: Z(`Equation`),
        Collection: Z(`Collection`),
        Property: void 0,
        propertyTextValue: Q,
        propertySelectValue: Q,
        propertyRelationValue: Q,
        propertyFormulaValue: Q,
        propertyTitleValue: Q,
        propertyPersonValue: Q,
        propertyFileValue: Q,
        propertyCheckboxValue: Q,
        propertyUrlValue: Q,
        propertyEmailValue: Q,
        propertyPhoneNumberValue: Q,
        propertyNumberValue: Q,
        propertyLastEditedTimeValue: Q,
        propertyCreatedTimeValue: Q,
        propertyDateValue: Q,
        propertyAutoIncrementIdValue: Q,
        Pdf: Z(`Pdf`),
        Tweet: Z(`Tweet`),
        Modal: Z(`Modal`),
        Header: Rn,
        Embed: Ln
    },
    Bn = {
        recordMap: {
            block: {},
            collection: {},
            collection_view: {},
            collection_query: {},
            notion_user: {},
            signed_urls: {}
        },
        components: zn,
        mapPageUrl: Ce(),
        mapImageUrl: Se,
        searchNotion: void 0,
        isShowingSearch: !1,
        onHideSearch: void 0,
        fullPage: !1,
        darkMode: !1,
        previewImages: !1,
        forceCustomImages: !1,
        showCollectionViewDropdown: !0,
        linkTableTitleProperties: !0,
        isLinkCollectionToUrlProperty: !1,
        showTableOfContents: !1,
        minTableOfContentsItems: 3,
        defaultPageIcon: null,
        defaultPageCover: null,
        defaultPageCoverPosition: .5,
        zoom: null
    },
    Vn = d.createContext(Bn);

function Hn({
    components: e = {},
    children: t,
    mapPageUrl: n,
    mapImageUrl: r,
    rootPageId: i,
    ...a
}) {
    for (let e of Object.keys(a)) a[e] === void 0 && delete a[e];
    let o = d.useMemo(() => ({
        ...e
    }), [e]);
    o.nextImage && o.nextLegacyImage ? (console.warn(`You should not pass both nextImage and nextLegacyImage. Only nextImage component will be used.`), o.Image = An(e.nextImage)) : o.nextImage ? o.Image = An(e.nextImage) : o.nextLegacyImage && (o.Image = jn(e.nextLegacyImage)), o.nextLink && (o.nextLink = Mn(e.nextLink));
    for (let e of Object.keys(o)) o[e] || delete o[e];
    let s = d.useMemo(() => ({
        ...Bn,
        ...a,
        rootPageId: i,
        mapPageUrl: n ?? Ce(i),
        mapImageUrl: r ?? Se,
        components: {
            ...zn,
            ...o
        }
    }), [r, n, o, i, a]);
    return (0, z.jsx)(Vn.Provider, {
        value: s,
        children: t
    })
}
var Un = Vn.Consumer,
    $ = () => d.useContext(Vn);

function Wn({
    block: e,
    blockId: t,
    className: n
}) {
    var r, i, a, o, s, c;
    let {
        recordMap: l,
        mapPageUrl: u
    } = $(), [f, p] = d.useState(!1), [m, h] = d.useState(!1);
    if (!e || e.type !== `button`) return console.warn(`Invalid button block:`, {
        block: e
    }), null;
    let g = (r = e.format) == null ? void 0 : r.automation_id,
        _ = ((i = e.format) == null ? void 0 : i.block_color) || `default`,
        v = (a = e.properties) == null ? void 0 : a.title;
    if (!g) return (0, z.jsx)(`div`, {
        className: K(`notion-button-block`, t),
        children: (0, z.jsx)(`button`, {
            type: `button`,
            className: K(`notion-button`, `notion-${_}`, n),
            children: v ? (0, z.jsx)(X, {
                value: v,
                block: e
            }) : `Button`
        })
    });
    let y = (s = (o = l.automation) == null ? void 0 : o[g]) == null ? void 0 : s.value;
    if (!y) {
        let e = v ? Gn(v) : `Button`;
        return (0, z.jsx)(`div`, {
            className: K(`notion-button-block`, t),
            children: (0, z.jsx)(`button`, {
                type: `button`,
                className: K(`notion-button`, `notion-${_}`, n),
                children: e
            })
        })
    }
    let b = ((c = y.properties) == null ? void 0 : c.name) || (v ? Gn(v) : `Button`),
        x = async e => {
            if (e.preventDefault(), !m) {
                p(!1), h(!0);
                try {
                    await S()
                } finally {
                    h(!1)
                }
            }
        }, S = async () => {
            var e, t, n, r, i, a, o, s, c, d, f;
            let m = (e = y.action_ids) == null ? void 0 : e[0];
            if (!m) {
                console.warn(`No actions defined for automation:`, g);
                return
            }
            let h = (n = (t = l.automation_action) == null ? void 0 : t[m]) == null ? void 0 : n.value;
            if (!h) console.warn(`No action data found for ID:`, m);
            else switch (h.type) {
                case `open_page`: {
                    let e = (r = h.config) == null ? void 0 : r.target;
                    if ((e == null ? void 0 : e.type) === `url` && e.url) window.open(e.url, `_blank`, `noopener,noreferrer`);
                    else if ((e == null ? void 0 : e.type) === `page` && e.pageId) {
                        let t = u(e.pageId);
                        t && (window.location.href = t)
                    }
                    break
                }
                case `send_webhook`:
                case `http_request`: {
                    let e = (a = (i = h.config) == null ? void 0 : i.url) == null ? void 0 : a.trim();
                    if (e) try {
                        if (typeof window < `u`) {
                            let t = Object.keys(l.block || {}).find(e => {
                                    var t;
                                    let n = (t = l.block[e]) == null ? void 0 : t.value;
                                    return n && `type` in n && n.type === `page`
                                }),
                                n = t ? (o = l.block[t]) == null ? void 0 : o.value : null;
                            if (!n) {
                                console.warn(`No page block found for webhook payload`);
                                return
                            }
                            let r = {
                                    source: {
                                        type: `automation`,
                                        automation_id: g,
                                        action_id: h.id,
                                        event_id: crypto.randomUUID(),
                                        user_id: n.created_by_id || `unknown`,
                                        attempt: 1
                                    },
                                    data: {
                                        object: `page`,
                                        id: n.id,
                                        created_time: new Date(n.created_time).toISOString(),
                                        last_edited_time: new Date(n.last_edited_time).toISOString(),
                                        created_by: {
                                            object: `user`,
                                            id: n.created_by_id || `unknown`
                                        },
                                        last_edited_by: {
                                            object: `user`,
                                            id: n.last_edited_by_id || `unknown`
                                        },
                                        cover: (s = n.format) != null && s.page_cover ? {
                                            type: `external`,
                                            external: {
                                                url: n.format.page_cover.startsWith(`/`) ? `https://www.notion.so${n.format.page_cover}` : n.format.page_cover
                                            }
                                        } : null,
                                        icon: (c = n.format) != null && c.page_icon ? {
                                            type: `external`,
                                            external: {
                                                url: n.format.page_icon
                                            }
                                        } : null,
                                        parent: {
                                            type: `workspace`,
                                            workspace: !0
                                        },
                                        archived: !n.alive,
                                        in_trash: !1,
                                        is_locked: !1,
                                        properties: {
                                            title: {
                                                id: `title`,
                                                type: `title`,
                                                title: (d = n.properties) != null && d.title ? n.properties.title.map(e => {
                                                    let t = typeof e == `string` ? e : e[0] || ``;
                                                    return {
                                                        type: `text`,
                                                        text: {
                                                            content: t,
                                                            link: null
                                                        },
                                                        annotations: {
                                                            bold: !1,
                                                            italic: !1,
                                                            strikethrough: !1,
                                                            underline: !1,
                                                            code: !1,
                                                            color: `default`
                                                        },
                                                        plain_text: t,
                                                        href: null
                                                    }
                                                }) : []
                                            }
                                        },
                                        url: `https://www.notion.so/${n.id}`,
                                        public_url: window.location.href,
                                        request_id: crypto.randomUUID()
                                    }
                                },
                                i = {
                                    "Content-Type": `application/json`
                                };
                            if ((f = h.config) != null && f.customHeaders)
                                for (let e of h.config.customHeaders) i[e.key] = e.value;
                            console.log(`Sending webhook:`, {
                                url: e,
                                payload: r,
                                headers: i
                            });
                            let a = await fetch(`/api/webhook-proxy`, {
                                    method: `POST`,
                                    headers: {
                                        "Content-Type": `application/json`
                                    },
                                    body: JSON.stringify({
                                        url: e,
                                        payload: r,
                                        headers: i
                                    })
                                }),
                                u = await a.json();
                            !a.ok || !u.success ? console.error(`Webhook request failed:`, u) : (console.log(`Webhook sent successfully:`, u), p(!0), setTimeout(() => p(!1), 2e3))
                        } else console.warn(`Webhook functionality requires /api/webhook-proxy endpoint`)
                    } catch (e) {
                        console.error(`Error sending webhook:`, e)
                    }
                    break
                }
                default:
                    console.warn(`Unsupported action type:`, h.type)
            }
        };
    return (0, z.jsx)(`div`, {
        className: K(`notion-button-block`, t),
        children: (0, z.jsx)(`button`, {
            type: `button`,
            className: K(`notion-button`, `notion-${_}`, f ? `notion-success` : ``, n),
            onClick: x,
            title: b,
            disabled: m,
            children: b
        })
    })
}

function Gn(e) {
    return e.map(e => typeof e == `string` ? e : e[0] || ``).join(``)
}

function Kn({
    block: e,
    className: t
}) {
    var n, r, i;
    let {
        recordMap: a
    } = $(), o = a.signed_urls[e.id] || ((i = (r = (n = e.properties) == null ? void 0 : n.source) == null ? void 0 : r[0]) == null ? void 0 : i[0]);
    if (!o) return null;
    if (e.space_id) {
        let t = new URL(o);
        t.searchParams.set(`spaceId`, e.space_id), o = t.toString()
    }
    return (0, z.jsx)(`div`, {
        className: K(`notion-audio`, t),
        children: (0, z.jsx)(`audio`, {
            controls: !0,
            preload: `none`,
            src: o
        })
    })
}

function qn(e) {
    let {
        className: t,
        ...n
    } = e;
    return (0, z.jsx)(`svg`, {
        className: t,
        ...n,
        viewBox: `0 0 30 30`,
        children: (0, z.jsx)(`path`, {
            d: `M22,8v12c0,3.866-3.134,7-7,7s-7-3.134-7-7V8c0-2.762,2.238-5,5-5s5,2.238,5,5v12c0,1.657-1.343,3-3,3s-3-1.343-3-3V8h-2v12c0,2.762,2.238,5,5,5s5-2.238,5-5V8c0-3.866-3.134-7-7-7S6,4.134,6,8v12c0,4.971,4.029,9,9,9s9-4.029,9-9V8H22z`
        })
    })
}

function Jn({
    block: e,
    className: t
}) {
    var n, r, i, a, o;
    let {
        components: s,
        recordMap: c
    } = $(), l = c.signed_urls[e.id] || ((i = (r = (n = e.properties) == null ? void 0 : n.source) == null ? void 0 : r[0]) == null ? void 0 : i[0]);
    if (!l) return null;
    if (e.space_id) {
        let t = new URL(l);
        t.searchParams.set(`spaceId`, e.space_id), l = t.toString()
    }
    return (0, z.jsx)(`div`, {
        className: K(`notion-file`, t),
        children: (0, z.jsxs)(s.Link, {
            className: `notion-file-link`,
            href: l,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: [(0, z.jsx)(qn, {
                className: `notion-file-icon`
            }), (0, z.jsxs)(`div`, {
                className: `notion-file-info`,
                children: [(0, z.jsx)(`div`, {
                    className: `notion-file-title`,
                    children: (0, z.jsx)(X, {
                        value: ((a = e.properties) == null ? void 0 : a.title) || [
                            [`File`]
                        ],
                        block: e
                    })
                }), ((o = e.properties) == null ? void 0 : o.size) && (0, z.jsx)(`div`, {
                    className: `notion-file-size`,
                    children: (0, z.jsx)(X, {
                        value: e.properties.size,
                        block: e
                    })
                })]
            })]
        })
    })
}

function Yn({
    block: e,
    className: t
}) {
    var n;
    let {
        components: r,
        mapImageUrl: i
    } = $(), a = (n = e.format) == null ? void 0 : n.drive_properties;
    if (!a) return null;
    let o;
    try {
        o = new URL(a.url).hostname
    } catch {}
    return (0, z.jsx)(`div`, {
        className: K(`notion-google-drive`, t),
        children: (0, z.jsxs)(r.Link, {
            className: `notion-google-drive-link`,
            href: a.url,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: [(0, z.jsx)(`div`, {
                className: `notion-google-drive-preview`,
                children: (0, z.jsx)(on, {
                    src: i(a.thumbnail, e),
                    alt: a.title || `Google Drive Document`,
                    loading: `lazy`
                })
            }), (0, z.jsxs)(`div`, {
                className: `notion-google-drive-body`,
                children: [a.title && (0, z.jsx)(`div`, {
                    className: `notion-google-drive-body-title`,
                    children: a.title
                }), a.icon && o && (0, z.jsxs)(`div`, {
                    className: `notion-google-drive-body-source`,
                    children: [a.icon && (0, z.jsx)(`div`, {
                        className: `notion-google-drive-body-source-icon`,
                        style: {
                            backgroundImage: `url(${a.icon})`
                        }
                    }), o && (0, z.jsx)(`div`, {
                        className: `notion-google-drive-body-source-domain`,
                        children: o
                    })]
                })]
            })]
        })
    })
}
var Xn = Ot(kt(), 1);

function Zn({
    toc: e,
    activeSection: t,
    setActiveSection: n,
    pageAside: r,
    hasToc: i,
    hasAside: a,
    className: o
}) {
    let s = d.useMemo(() => (0, Xn.default)(() => {
        let e = document.getElementsByClassName(`notion-h`),
            r = null,
            i = t;
        for (let t of e) {
            if (!t || !(t instanceof Element)) continue;
            i || (i = t.dataset.id);
            let e = t.getBoundingClientRect(),
                n = r ? e.top - r.bottom : 0,
                a = Math.max(150, n / 4);
            if (e.top - a < 0) i = t.dataset.id, r = e;
            else break
        }
        n(i)
    }, 100), [n]);
    return d.useEffect(() => {
        if (i) return window.addEventListener(`scroll`, s), s(), () => {
            window.removeEventListener(`scroll`, s)
        }
    }, [i, s]), a ? (0, z.jsxs)(`aside`, {
        className: K(`notion-aside`, o),
        children: [i && (0, z.jsxs)(`div`, {
            className: `notion-aside-table-of-contents`,
            children: [(0, z.jsx)(`div`, {
                className: `notion-aside-table-of-contents-header`,
                children: `Table of Contents`
            }), (0, z.jsx)(`nav`, {
                className: `notion-table-of-contents`,
                children: e.map(e => {
                    let n = ge(e.id);
                    return (0, z.jsx)(`a`, {
                        href: `#${n}`,
                        className: K(`notion-table-of-contents-item`, `notion-table-of-contents-item-indent-level-${e.indentLevel}`, t === n && `notion-table-of-contents-active-item`),
                        children: (0, z.jsx)(`span`, {
                            className: `notion-table-of-contents-item-body`,
                            style: {
                                display: `inline-block`,
                                marginLeft: e.indentLevel * 16
                            },
                            children: e.text
                        })
                    }, n)
                })
            })]
        }), r]
    }) : null
}

function Qn({
    block: e,
    level: t
}) {
    var n, r;
    if (!e) return console.warn(`missing sync pointer block`), null;
    let i = e,
        a = (r = (n = i == null ? void 0 : i.format) == null ? void 0 : n.transclusion_reference_pointer) == null ? void 0 : r.id;
    return a ? (0, z.jsx)(ir, {
        level: t,
        blockId: a
    }, a) : null
}

function $n(e) {
    let {
        className: t,
        ...n
    } = e;
    return (0, z.jsx)(`svg`, {
        className: t,
        ...n,
        viewBox: `0 0 16 16`,
        width: `16`,
        height: `16`,
        children: (0, z.jsx)(`path`, {
            fillRule: `evenodd`,
            d: `M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z`
        })
    })
}
var er = {},
    tr = {};

function nr(e) {
    var t, n, r, i, a, o, s, c, l, u, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, ee, te, ne, re, ie, ae, A, se, j, le, ue, de, fe, pe, ve;
    let xe = $(),
        {
            components: M,
            fullPage: Se,
            darkMode: Ce,
            recordMap: N,
            mapPageUrl: we,
            mapImageUrl: Te,
            showTableOfContents: P,
            minTableOfContentsItems: Ee,
            defaultPageIcon: F,
            defaultPageCover: De,
            defaultPageCoverPosition: Oe
        } = xe,
        [ke, Ae] = d.useState(null),
        {
            block: I,
            children: L,
            level: je,
            className: Me,
            bodyClassName: Ne,
            header: Pe,
            footer: Fe,
            pageHeader: Ie,
            pageFooter: R,
            pageTitle: Le,
            pageAside: Re,
            pageCover: ze,
            hideBlockId: Be,
            disableHeader: B
        } = e;
    if (!I) return null;
    je === 0 && I.type === `collection_view` && (I.type = `collection_view_page`);
    let V = Be ? `notion-block` : `notion-block-${ge(I.id)}`;
    switch (I.type) {
        case `collection_view_page`:
        case `page`:
            if (je === 0) {
                let {
                    page_icon: e = F,
                    page_cover: n = De,
                    page_cover_position: r = Oe,
                    page_full_width: i,
                    page_small_text: a
                } = I.format || {};
                if (Se) {
                    let o = I.type === `page` ? I.properties : {
                            title: (t = O(N.collection[oe(I, N)])) == null ? void 0 : t.name
                        },
                        s = `center ${(1-(r||.5))*100}%`,
                        c = tr[s];
                    c || (c = tr[s] = {
                        objectPosition: s
                    });
                    let l = me(I, N) ?? F,
                        u = l && f(l),
                        d = ce(I, N),
                        p = P && d.length >= Ee,
                        m = !(!p && !Re || i),
                        h = !!(ze || n);
                    return (0, z.jsxs)(`div`, {
                        className: K(`notion`, `notion-app`, Ce ? `dark-mode` : `light-mode`, V, Me),
                        children: [(0, z.jsx)(`div`, {
                            className: `notion-viewport`
                        }), (0, z.jsxs)(`div`, {
                            className: `notion-frame`,
                            children: [!B && (0, z.jsx)(M.Header, {
                                block: I
                            }), Pe, (0, z.jsxs)(`div`, {
                                className: `notion-page-scroller`,
                                children: [h && (ze ?? (0, z.jsx)(`div`, {
                                    className: `notion-page-cover-wrapper`,
                                    children: (0, z.jsx)(J, {
                                        src: Te(n, I),
                                        alt: k(o == null ? void 0 : o.title),
                                        priority: !0,
                                        className: `notion-page-cover`,
                                        style: c
                                    })
                                })), (0, z.jsxs)(`main`, {
                                    className: K(`notion-page`, h ? `notion-page-has-cover` : `notion-page-no-cover`, e ? `notion-page-has-icon` : `notion-page-no-icon`, u ? `notion-page-has-image-icon` : `notion-page-has-text-icon`, `notion-full-page`, i && `notion-full-width`, a && `notion-small-text`, Ne),
                                    children: [e && (0, z.jsx)(pn, {
                                        block: I,
                                        defaultIcon: F,
                                        inline: !1
                                    }), Ie, (0, z.jsx)(`h1`, {
                                        className: `notion-title`,
                                        children: Le ?? (0, z.jsx)(X, {
                                            value: o == null ? void 0 : o.title,
                                            block: I
                                        })
                                    }), (I.type === `collection_view_page` || I.type === `page` && I.parent_table === `collection`) && (0, z.jsx)(M.Collection, {
                                        block: I,
                                        ctx: xe
                                    }), I.type !== `collection_view_page` && (0, z.jsxs)(`div`, {
                                        className: K(`notion-page-content`, m && `notion-page-content-has-aside`, p && `notion-page-content-has-toc`),
                                        children: [(0, z.jsx)(`article`, {
                                            className: `notion-page-content-inner`,
                                            children: L
                                        }), m && (0, z.jsx)(Zn, {
                                            toc: d,
                                            activeSection: ke,
                                            setActiveSection: Ae,
                                            hasToc: p,
                                            hasAside: m,
                                            pageAside: Re
                                        })]
                                    }), R]
                                }), Fe]
                            })]
                        })]
                    })
                }
                return (0, z.jsxs)(`main`, {
                    className: K(`notion`, Ce ? `dark-mode` : `light-mode`, `notion-page`, i && `notion-full-width`, a && `notion-small-text`, V, Me, Ne),
                    children: [(0, z.jsx)(`div`, {
                        className: `notion-viewport`
                    }), Ie, (I.type === `collection_view_page` || I.type === `page` && I.parent_table === `collection`) && (0, z.jsx)(M.Collection, {
                        block: I,
                        ctx: xe
                    }), I.type !== `collection_view_page` && L, R]
                })
            } {
                let e = (n = I.format) == null ? void 0 : n.block_color;
                return (0, z.jsx)(M.PageLink, {
                    className: K(`notion-page-link`, e && `notion-${e}`, V),
                    href: we(I.id),
                    children: (0, z.jsx)(Y, {
                        block: I
                    })
                })
            }
        case `header`:
        case `sub_header`:
        case `sub_sub_header`:
        case `header_4`: {
            if (!I.properties) return null;
            let e = (r = I.format) == null ? void 0 : r.block_color,
                t = ge(I.id),
                n = k(I.properties.title) || `Notion Header ${t}`,
                o = er[I.id],
                s;
            if (o === void 0) {
                let e = he(I, N);
                if (e) {
                    let t = ce(e, N).find(e => e.id === I.id);
                    t && (o = t.indentLevel, er[I.id] = o)
                }
            }
            o !== void 0 && (s = `notion-h-indent-${o}`);
            let c = I.type === `header`,
                l = I.type === `sub_header`,
                u = I.type === `sub_sub_header`,
                d = I.type === `header_4`,
                f = K(c && `notion-h notion-h1`, l && `notion-h notion-h2`, u && `notion-h notion-h3`, d && `notion-h notion-h4`, e && `notion-${e}`, s, V),
                p = (0, z.jsxs)(`span`, {
                    children: [(0, z.jsx)(`div`, {
                        id: t,
                        className: `notion-header-anchor`
                    }), !((i = I.format) != null && i.toggleable) && (0, z.jsx)(`a`, {
                        className: `notion-hash-link`,
                        href: `#${t}`,
                        title: n,
                        children: (0, z.jsx)($n, {})
                    }), (0, z.jsx)(`span`, {
                        className: `notion-h-title`,
                        children: (0, z.jsx)(X, {
                            value: I.properties.title,
                            block: I
                        })
                    })]
                }),
                m = null;
            return m = c ? (0, z.jsx)(`h2`, {
                className: f,
                "data-id": t,
                children: p
            }) : l ? (0, z.jsx)(`h3`, {
                className: f,
                "data-id": t,
                children: p
            }) : u ? (0, z.jsx)(`h4`, {
                className: f,
                "data-id": t,
                children: p
            }) : (0, z.jsx)(`h5`, {
                className: f,
                "data-id": t,
                children: p
            }), (a = I.format) != null && a.toggleable ? (0, z.jsxs)(`details`, {
                className: K(`notion-toggle`, V),
                children: [(0, z.jsx)(`summary`, {
                    children: m
                }), (0, z.jsx)(`div`, {
                    children: L
                })]
            }) : m
        }
        case `divider`:
            return (0, z.jsx)(`hr`, {
                className: K(`notion-hr`, V)
            });
        case `text`: {
            if (!I.properties && !((o = I.content) != null && o.length)) return (0, z.jsx)(`div`, {
                className: K(`notion-blank`, V),
                children: `\xA0`
            });
            let e = (s = I.format) == null ? void 0 : s.block_color;
            return (0, z.jsxs)(`div`, {
                className: K(`notion-text`, e && `notion-${e}`, V),
                children: [((c = I.properties) == null ? void 0 : c.title) && (0, z.jsx)(X, {
                    value: I.properties.title,
                    block: I
                }), L && (0, z.jsx)(`div`, {
                    className: `notion-text-children`,
                    children: L
                })]
            })
        }
        case `bulleted_list`:
        case `numbered_list`: {
            let e = (e, t) => I.type === `bulleted_list` ? (0, z.jsx)(`ul`, {
                    className: K(`notion-list`, `notion-list-disc`, V),
                    children: e
                }) : (0, z.jsx)(`ol`, {
                    start: t,
                    className: K(`notion-list`, `notion-list-numbered`, V),
                    style: I.type === `numbered_list` ? {
                        listStyleType: be(_e(I.id, N.block))
                    } : void 0,
                    children: e
                }),
                t = null,
                n = I.type !== ((l = O(N.block[I.parent_id])) == null ? void 0 : l.type),
                r = ye(I.id, N.block);
            if (I.content) {
                let e = I.properties ? (0, z.jsx)(`li`, {
                    children: (0, z.jsx)(X, {
                        value: I.properties.title,
                        block: I
                    })
                }) : null;
                if (I.type === `bulleted_list`) t = (0, z.jsxs)(z.Fragment, {
                    children: [e, (0, z.jsx)(`ul`, {
                        className: K(`notion-list`, `notion-list-disc`, V),
                        children: L
                    })]
                });
                else {
                    let n = _e(I.id, N.block);
                    t = (0, z.jsxs)(z.Fragment, {
                        children: [e, (0, z.jsx)(`ol`, {
                            className: K(`notion-list`, `notion-list-numbered`, V),
                            style: {
                                listStyleType: be(n + 1)
                            },
                            children: L
                        })]
                    })
                }
            } else t = I.properties ? (0, z.jsx)(`li`, {
                children: (0, z.jsx)(X, {
                    value: I.properties.title,
                    block: I
                })
            }) : null;
            return n ? e(t, r) : t
        }
        case `embed`:
            return (0, z.jsx)(M.Embed, {
                blockId: V,
                block: I
            });
        case `replit`:
        case `tweet`:
        case `maps`:
        case `pdf`:
        case `figma`:
        case `typeform`:
        case `codepen`:
        case `excalidraw`:
        case `image`:
        case `gist`:
        case `video`:
            return (0, z.jsx)(gn, {
                blockId: V,
                block: I
            });
        case `drive`:
            return !((u = I.format) != null && u.drive_properties) && (p = I.format) != null && p.display_source ? (0, z.jsx)(gn, {
                blockId: V,
                block: I
            }) : (0, z.jsx)(Yn, {
                block: I,
                className: V
            });
        case `audio`:
            return (0, z.jsx)(Kn, {
                block: I,
                className: V
            });
        case `file`:
            return (0, z.jsx)(Jn, {
                block: I,
                className: V
            });
        case `equation`:
            return (0, z.jsx)(M.Equation, {
                block: I,
                inline: !1,
                className: V
            });
        case `code`:
            return (0, z.jsx)(M.Code, {
                block: I
            });
        case `column_list`:
            return (0, z.jsx)(`div`, {
                className: K(`notion-row`, V),
                children: L
            });
        case `column`: {
            let e = ((m = I.format) == null ? void 0 : m.column_ratio) || .5,
                t = O(N.block[I.parent_id]),
                n = {
                    width: `calc((100% - (${(((h=t==null?void 0:t.content)==null?void 0:h.length)||Math.max(2,Math.ceil(1/e)))-1} * min(32px, 4vw))) * ${e})`
                };
            return (0, z.jsxs)(z.Fragment, {
                children: [(0, z.jsx)(`div`, {
                    className: K(`notion-column`, V),
                    style: n,
                    children: L
                }), (0, z.jsx)(`div`, {
                    className: `notion-spacer`
                })]
            })
        }
        case `quote`: {
            if (!I.properties) return null;
            let e = (g = I.format) == null ? void 0 : g.block_color;
            return (0, z.jsxs)(`blockquote`, {
                className: K(`notion-quote`, e && `notion-${e}`, V),
                children: [(0, z.jsx)(`div`, {
                    children: (0, z.jsx)(X, {
                        value: I.properties.title,
                        block: I
                    })
                }), L]
            })
        }
        case `collection_view`:
            return (0, z.jsx)(M.Collection, {
                block: I,
                className: V,
                ctx: xe
            });
        case `callout`:
            return M.Callout ? (0, z.jsx)(M.Callout, {
                block: I,
                className: V
            }) : (0, z.jsxs)(`div`, {
                className: K(`notion-callout`, ((_ = I.format) == null ? void 0 : _.block_color) && `notion-${(v=I.format)==null?void 0:v.block_color}_co`, V),
                children: [(0, z.jsx)(pn, {
                    block: I,
                    hideDefaultIcon: !0
                }), (0, z.jsxs)(`div`, {
                    className: `notion-callout-text`,
                    children: [(0, z.jsx)(X, {
                        value: (y = I.properties) == null ? void 0 : y.title,
                        block: I
                    }), L]
                })]
            });
        case `bookmark`: {
            if (!I.properties) return null;
            let e = I.properties.link;
            if (!e || !((b = e[0]) != null && b[0])) return null;
            let t = k(I.properties.title);
            if (t || (t = k(e)), t && t.startsWith(`http`)) try {
                t = new URL(t).hostname
            } catch {}
            return (0, z.jsx)(`div`, {
                className: `notion-row`,
                children: (0, z.jsxs)(M.Link, {
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: K(`notion-bookmark`, ((x = I.format) == null ? void 0 : x.block_color) && `notion-${I.format.block_color}`, V),
                    href: e[0][0],
                    children: [(0, z.jsxs)(`div`, {
                        children: [t && (0, z.jsx)(`div`, {
                            className: `notion-bookmark-title`,
                            children: (0, z.jsx)(X, {
                                value: [
                                    [t]
                                ],
                                block: I
                            })
                        }), ((S = I.properties) == null ? void 0 : S.description) && (0, z.jsx)(`div`, {
                            className: `notion-bookmark-description`,
                            children: (0, z.jsx)(X, {
                                value: (C = I.properties) == null ? void 0 : C.description,
                                block: I
                            })
                        }), (0, z.jsxs)(`div`, {
                            className: `notion-bookmark-link`,
                            children: [((w = I.format) == null ? void 0 : w.bookmark_icon) && (0, z.jsx)(`div`, {
                                className: `notion-bookmark-link-icon`,
                                children: (0, z.jsx)(J, {
                                    src: Te((T = I.format) == null ? void 0 : T.bookmark_icon, I),
                                    alt: t
                                })
                            }), (0, z.jsx)(`div`, {
                                className: `notion-bookmark-link-text`,
                                children: (0, z.jsx)(X, {
                                    value: e,
                                    block: I
                                })
                            })]
                        })]
                    }), ((E = I.format) == null ? void 0 : E.bookmark_cover) && (0, z.jsx)(`div`, {
                        className: `notion-bookmark-image`,
                        children: (0, z.jsx)(J, {
                            src: Te((D = I.format) == null ? void 0 : D.bookmark_cover, I),
                            alt: k((ee = I.properties) == null ? void 0 : ee.title),
                            style: {
                                objectFit: `cover`
                            }
                        })
                    })]
                })
            })
        }
        case `toggle`:
            return (0, z.jsxs)(`details`, {
                className: K(`notion-toggle`, V),
                children: [(0, z.jsx)(`summary`, {
                    children: (0, z.jsx)(X, {
                        value: (te = I.properties) == null ? void 0 : te.title,
                        block: I
                    })
                }), (0, z.jsx)(`div`, {
                    children: L
                })]
            });
        case `button`: {
            let e = M.Button || Wn;
            return (0, z.jsx)(e, {
                blockId: V,
                block: I,
                className: V
            })
        }
        case `table_of_contents`: {
            let e = he(I, N);
            if (!e) return null;
            let t = ce(e, N),
                n = (ne = I.format) == null ? void 0 : ne.block_color;
            return (0, z.jsx)(`div`, {
                className: K(`notion-table-of-contents`, n && `notion-${n}`, V),
                children: t.map(e => (0, z.jsx)(`a`, {
                    href: `#${ge(e.id)}`,
                    className: `notion-table-of-contents-item`,
                    children: (0, z.jsx)(`span`, {
                        className: `notion-table-of-contents-item-body`,
                        style: {
                            display: `inline-block`,
                            marginLeft: e.indentLevel * 24
                        },
                        children: e.text
                    })
                }, e.id))
            })
        }
        case `to_do`: {
            let e = ((ae = (ie = (re = I.properties) == null ? void 0 : re.checked) == null ? void 0 : ie[0]) == null ? void 0 : ae[0]) === `Yes`;
            return (0, z.jsxs)(`div`, {
                className: K(`notion-to-do`, V),
                children: [(0, z.jsxs)(`div`, {
                    className: `notion-to-do-item`,
                    children: [(0, z.jsx)(M.Checkbox, {
                        blockId: V,
                        isChecked: e
                    }), (0, z.jsx)(`div`, {
                        className: K(`notion-to-do-body`, e && `notion-to-do-checked`),
                        children: (0, z.jsx)(X, {
                            value: (A = I.properties) == null ? void 0 : A.title,
                            block: I
                        })
                    })]
                }), (0, z.jsx)(`div`, {
                    className: `notion-to-do-children`,
                    children: L
                })]
            })
        }
        case `transclusion_container`:
            return (0, z.jsx)(`div`, {
                className: K(`notion-sync-block`, V),
                children: L
            });
        case `transclusion_reference`:
            return (0, z.jsx)(Qn, {
                ...e,
                level: je + 1
            });
        case `alias`: {
            let e = (j = (se = I == null ? void 0 : I.format) == null ? void 0 : se.alias_pointer) == null ? void 0 : j.id,
                t = O(N.block[e]);
            return t ? (0, z.jsx)(M.PageLink, {
                className: K(`notion-page-link`, e),
                href: we(e),
                children: (0, z.jsx)(Y, {
                    block: t
                })
            }) : (console.log(`"alias" missing block`, e), null)
        }
        case `table`:
            return (0, z.jsx)(`table`, {
                className: K(`notion-simple-table`, V),
                children: (0, z.jsx)(`tbody`, {
                    children: L
                })
            });
        case `table_row`: {
            let e = O(N.block[I.parent_id]);
            if (!e) return null;
            let t = (le = e.format) == null ? void 0 : le.table_block_column_order,
                n = (ue = e.format) == null ? void 0 : ue.table_block_column_format,
                r = (de = I.format) == null ? void 0 : de.block_color,
                i = ((fe = e.format) == null ? void 0 : fe.table_block_column_header) === !0,
                a = ((pe = e.format) == null ? void 0 : pe.table_block_row_header) === !0,
                o = i && ((ve = e.content) == null ? void 0 : ve[0]) === I.id;
            return !e || !t ? null : (0, z.jsx)(`tr`, {
                className: K(`notion-simple-table-row`, r && `notion-${r}`, o && `notion-simple-table-header-row`, V),
                children: t.map((e, t) => {
                    var r, i, o;
                    let s = (r = n == null ? void 0 : n[e]) == null ? void 0 : r.color,
                        c = a && t === 0;
                    return (0, z.jsx)(`td`, {
                        className: K(s ? `notion-${s}` : ``, c && `notion-simple-table-header-cell`),
                        style: {
                            width: ((i = n == null ? void 0 : n[e]) == null ? void 0 : i.width) || 120
                        },
                        children: (0, z.jsx)(`div`, {
                            className: `notion-simple-table-cell`,
                            children: (0, z.jsx)(X, {
                                value: ((o = I.properties) == null ? void 0 : o[e]) || [
                                    [`ㅤ`]
                                ],
                                block: I
                            })
                        })
                    }, e)
                })
            })
        }
        case `external_object_instance`:
            return (0, z.jsx)(an, {
                block: I,
                className: V
            });
        default:
            return console.log(`Unsupported block type ` + I.type, JSON.stringify(I, null, 2)), (0, z.jsx)(`div`, {})
    }
}

function rr({
    components: e,
    recordMap: t,
    mapPageUrl: n,
    mapImageUrl: r,
    searchNotion: i,
    isShowingSearch: a,
    onHideSearch: o,
    fullPage: s,
    rootPageId: c,
    rootDomain: l,
    darkMode: u,
    previewImages: f,
    forceCustomImages: p,
    showCollectionViewDropdown: m,
    linkTableTitleProperties: h,
    isLinkCollectionToUrlProperty: g,
    isImageZoomable: _ = !0,
    showTableOfContents: v,
    minTableOfContentsItems: y,
    defaultPageIcon: b,
    defaultPageCover: x,
    defaultPageCoverPosition: S,
    ...C
}) {
    let w = d.useMemo(() => !!globalThis.window && _t({
        background: `rgba(0, 0, 0, 0.8)`,
        minZoomScale: 2,
        margin: ar()
    }), []);
    return (0, z.jsx)(Hn, {
        components: e,
        recordMap: t,
        mapPageUrl: n,
        mapImageUrl: r,
        searchNotion: i,
        isShowingSearch: a,
        onHideSearch: o,
        fullPage: s,
        rootPageId: c,
        rootDomain: l,
        darkMode: u,
        previewImages: f,
        forceCustomImages: p,
        showCollectionViewDropdown: m,
        linkTableTitleProperties: h,
        isLinkCollectionToUrlProperty: g,
        showTableOfContents: v,
        minTableOfContentsItems: y,
        defaultPageIcon: b,
        defaultPageCover: x,
        defaultPageCoverPosition: S,
        zoom: _ ? w : null,
        children: (0, z.jsx)(ir, {
            ...C
        })
    })
}

function ir({
    level: e = 0,
    blockId: t,
    ...n
}) {
    var r;
    let {
        recordMap: i
    } = $(), a = t || Object.keys(i.block)[0], o = O(i.block[a]);
    return o ? (0, z.jsx)(nr, {
        level: e,
        block: o,
        ...n,
        children: (r = o == null ? void 0 : o.content) == null ? void 0 : r.map(t => (0, z.jsx)(ir, {
            blockId: t,
            level: e + 1,
            ...n
        }, t))
    }, a) : (console.warn(`missing block`, t), null)
}

function ar() {
    let e = window.innerWidth;
    return e < 500 ? 8 : e < 800 ? 20 : e < 1280 ? 30 : e < 1600 ? 40 : e < 1920 ? 48 : 72
}
var or = e => {
        let [t, n] = d.useState();
        d.useEffect(() => {
            e.content || e.id && i({
                url: `/api/content/${e.id}`,
                cacheKey: `NOTION_CONTENT`,
                success: e => n(e)
            })
        }, [e.id, e.content]);
        let r = e.content || t;
        return (0, z.jsxs)(`div`, {
            className: `maxWidth`,
            children: [(0, z.jsx)(`base`, {
                target: `_blank`
            }), (0, z.jsx)(sr, {
                children: r ? (0, z.jsx)(rr, {
                    recordMap: r,
                    fullPage: !1,
                    darkMode: !1
                }) : e.hideSkeleton ? null : (0, z.jsx)(s, {
                    active: !0,
                    title: !1,
                    paragraph: {
                        rows: 9
                    }
                })
            })]
        })
    },
    sr = l.div.attrs({
        className: `maxWidth`
    })`
  .notion {
    font-family: inherit !important;
  }
  .notion-page {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
export {
    or as
    default
};