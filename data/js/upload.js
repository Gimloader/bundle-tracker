import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    c as n,
    l as r,
    n as i,
    s as a,
    t as o
} from "./assertThisInitialized.js";
import {
    Ct as s,
    Dt as c,
    E as l,
    Et as u,
    Ft as d,
    Ht as f,
    It as p,
    Lt as m,
    R as h,
    Tt as g,
    Ut as _,
    Vt as v,
    X as y,
    b,
    g as x,
    gt as S,
    ht as C,
    k as w,
    l as T,
    m as E,
    nt as D,
    s as ee,
    tt as O,
    wt as k,
    x as A,
    xt as j,
    zt as M
} from "./Compact.js";
import {
    _ as N,
    a as P,
    d as te,
    f as F,
    h as I,
    i as ne,
    o as L,
    s as R
} from "./color.js";
import {
    n as z,
    r as B
} from "./compact-item.js";
import {
    w as V
} from "./ContextIsolator.js";
import {
    r as re,
    t as ie
} from "./useLocale.js";
import {
    t as H
} from "./tooltip.js";
import {
    t as U
} from "./pickAttrs.js";
import {
    l as ae
} from "./modal.js";
import {
    t as W
} from "./button.js";
import {
    t as oe
} from "./collapse.js";
import {
    r as se
} from "./input.js";
import {
    t as ce
} from "./useForceUpdate.js";
import {
    t as le
} from "./progress.js";
import {
    t as G
} from "./DeleteOutlined.js";
import {
    t as ue
} from "./DownloadOutlined.js";
import {
    t as de
} from "./PaperClipOutlined.js";
var K = e(t()),
    fe = e(r()),
    q = e(_());
n(), f(), m(), c(), g(), i(), S(), D();
var J = {
        icon: function(e, t) {
            return {
                tag: `svg`,
                attrs: {
                    viewBox: `64 64 896 896`,
                    focusable: `false`
                },
                children: [{
                    tag: `path`,
                    attrs: {
                        d: `M534 352V136H232v752h560V394H576a42 42 0 01-42-42z`,
                        fill: t
                    }
                }, {
                    tag: `path`,
                    attrs: {
                        d: `M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z`,
                        fill: e
                    }
                }]
            }
        },
        name: `file`,
        theme: `twotone`
    },
    Y = K.forwardRef(function(e, t) {
        return K.createElement(B, a({}, e, {
            ref: t,
            icon: J
        }))
    }),
    X = {
        icon: function(e, t) {
            return {
                tag: `svg`,
                attrs: {
                    viewBox: `64 64 896 896`,
                    focusable: `false`
                },
                children: [{
                    tag: `path`,
                    attrs: {
                        d: `M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z`,
                        fill: e
                    }
                }, {
                    tag: `path`,
                    attrs: {
                        d: `M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z`,
                        fill: t
                    }
                }, {
                    tag: `path`,
                    attrs: {
                        d: `M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z`,
                        fill: t
                    }
                }, {
                    tag: `path`,
                    attrs: {
                        d: `M276 368a28 28 0 1056 0 28 28 0 10-56 0z`,
                        fill: t
                    }
                }, {
                    tag: `path`,
                    attrs: {
                        d: `M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z`,
                        fill: e
                    }
                }]
            }
        },
        name: `picture`,
        theme: `twotone`
    };
n();
var pe = K.forwardRef(function(e, t) {
        return K.createElement(B, a({}, e, {
            ref: t,
            icon: X
        }))
    }),
    Z = (function(e, t) {
        if (e && t) {
            var n = Array.isArray(t) ? t : t.split(`,`),
                r = e.name || ``,
                i = e.type || ``,
                a = i.replace(/\/.*$/, ``);
            return n.some(function(e) {
                var t = e.trim();
                if (/^\*(\/\*)?$/.test(e)) return !0;
                if (t.charAt(0) === `.`) {
                    var n = r.toLowerCase(),
                        o = t.toLowerCase(),
                        s = [o];
                    return (o === `.jpg` || o === `.jpeg`) && (s = [`.jpg`, `.jpeg`]), s.some(function(e) {
                        return n.endsWith(e)
                    })
                }
                return /\/\*$/.test(t) ? a === t.replace(/\/.*$/, ``) : i === t ? !0 : /^\w+$/.test(t) ? (M(!1, `Upload takes an invalidate 'accept' type '${t}'.Skip for check.`), !0) : !1
            })
        }
        return !0
    });

function me(e, t) {
    var n = `cannot ${e.method} ${e.action} ${t.status}'`,
        r = Error(n);
    return r.status = t.status, r.method = e.method, r.url = e.action, r
}

function he(e) {
    var t = e.responseText || e.response;
    if (!t) return t;
    try {
        return JSON.parse(t)
    } catch {
        return t
    }
}

function ge(e) {
    var t = new XMLHttpRequest;
    e.onProgress && t.upload && (t.upload.onprogress = function(t) {
        t.total > 0 && (t.percent = t.loaded / t.total * 100), e.onProgress(t)
    });
    var n = new FormData;
    e.data && Object.keys(e.data).forEach(function(t) {
        var r = e.data[t];
        Array.isArray(r) ? r.forEach(function(e) {
            n.append(`${t}[]`, e)
        }) : n.append(t, r)
    }), e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file), t.onerror = function(t) {
        e.onError(t)
    }, t.onload = function() {
        return t.status < 200 || t.status >= 300 ? e.onError(me(e, t), he(t)) : e.onSuccess(he(t), t)
    }, t.open(e.method, e.action, !0), e.withCredentials && `withCredentials` in t && (t.withCredentials = !0);
    var r = e.headers || {};
    return r[`X-Requested-With`] !== null && t.setRequestHeader(`X-Requested-With`, `XMLHttpRequest`), Object.keys(r).forEach(function(e) {
        r[e] !== null && t.setRequestHeader(e, r[e])
    }), t.send(n), {
        abort: function() {
            t.abort()
        }
    }
}
var _e = function() {
        var e = P(L().mark(function e(t, n) {
            var r, i, a, o, s, c, l, u;
            return L().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        c = function() {
                            return c = P(L().mark(function e(t) {
                                return L().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt(`return`, new Promise(function(e) {
                                                t.file(function(r) {
                                                    n(r) ? (t.fullPath && !r.webkitRelativePath && (Object.defineProperties(r, {
                                                        webkitRelativePath: {
                                                            writable: !0
                                                        }
                                                    }), r.webkitRelativePath = t.fullPath.replace(/^\//, ``), Object.defineProperties(r, {
                                                        webkitRelativePath: {
                                                            writable: !1
                                                        }
                                                    })), e(r)) : e(null)
                                                })
                                            }));
                                        case 1:
                                        case `end`:
                                            return e.stop()
                                    }
                                }, e)
                            })), c.apply(this, arguments)
                        }, s = function(e) {
                            return c.apply(this, arguments)
                        }, o = function() {
                            return o = P(L().mark(function e(t) {
                                var n, r, i, a, o;
                                return L().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n = t.createReader(), r = [];
                                        case 2:
                                            return e.next = 5, new Promise(function(e) {
                                                n.readEntries(e, function() {
                                                    return e([])
                                                })
                                            });
                                        case 5:
                                            if (i = e.sent, a = i.length, a) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.abrupt(`break`, 12);
                                        case 9:
                                            for (o = 0; o < a; o++) r.push(i[o]);
                                            e.next = 2;
                                            break;
                                        case 12:
                                            return e.abrupt(`return`, r);
                                        case 13:
                                        case `end`:
                                            return e.stop()
                                    }
                                }, e)
                            })), o.apply(this, arguments)
                        }, a = function(e) {
                            return o.apply(this, arguments)
                        }, r = [], i = [], t.forEach(function(e) {
                            return i.push(e.webkitGetAsEntry())
                        }), l = function() {
                            var e = P(L().mark(function e(t, n) {
                                var o, c;
                                return L().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt(`return`);
                                        case 2:
                                            if (t.path = n || ``, !t.isFile) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 6, s(t);
                                        case 6:
                                            o = e.sent, o && r.push(o), e.next = 15;
                                            break;
                                        case 10:
                                            if (!t.isDirectory) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 13, a(t);
                                        case 13:
                                            c = e.sent, i.push.apply(i, C(c));
                                        case 15:
                                        case `end`:
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), u = 0;
                    case 9:
                        if (!(u < i.length)) {
                            e.next = 15;
                            break
                        }
                        return e.next = 12, l(i[u]);
                    case 12:
                        u++, e.next = 9;
                        break;
                    case 15:
                        return e.abrupt(`return`, r);
                    case 16:
                    case `end`:
                        return e.stop()
                }
            }, e)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    }(),
    ve = +new Date,
    ye = 0;

function be() {
    return `rc-upload-${ve}-${++ye}`
}
n(), S();
var xe = [`component`, `prefixCls`, `className`, `classNames`, `disabled`, `id`, `name`, `style`, `styles`, `multiple`, `accept`, `capture`, `children`, `directory`, `openFileDialogOnClick`, `onMouseEnter`, `onMouseLeave`, `hasControlInside`],
    Se = function(e) {
        s(n, e);
        var t = j(n);

        function n() {
            var e;
            u(this, n);
            var r = [...arguments];
            return e = t.call.apply(t, [this].concat(r)), p(o(e), `state`, {
                uid: be()
            }), p(o(e), `reqs`, {}), p(o(e), `fileInput`, void 0), p(o(e), `_isMounted`, void 0), p(o(e), `onChange`, function(t) {
                var n = e.props,
                    r = n.accept,
                    i = n.directory,
                    a = t.target.files,
                    o = C(a).filter(function(e) {
                        return !i || Z(e, r)
                    });
                e.uploadFiles(o), e.reset()
            }), p(o(e), `onClick`, function(t) {
                var n = e.fileInput;
                if (n) {
                    var r = t.target,
                        i = e.props.onClick;
                    r && r.tagName === `BUTTON` && (n.parentNode.focus(), r.blur()), n.click(), i && i(t)
                }
            }), p(o(e), `onKeyDown`, function(t) {
                t.key === `Enter` && e.onClick(t)
            }), p(o(e), `onDataTransferFiles`, function() {
                var t = P(L().mark(function t(n, r) {
                    var i, a, o, s, c, l, u;
                    return L().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (i = e.props, a = i.multiple, o = i.accept, s = i.directory, c = C(n.items || []), l = C(n.files || []), (l.length > 0 || c.some(function(e) {
                                        return e.kind === `file`
                                    })) && (r == null || r()), !s) {
                                    t.next = 11;
                                    break
                                }
                                return t.next = 7, _e(Array.prototype.slice.call(c), function(t) {
                                    return Z(t, e.props.accept)
                                });
                            case 7:
                                l = t.sent, e.uploadFiles(l), t.next = 14;
                                break;
                            case 11:
                                u = C(l).filter(function(e) {
                                    return Z(e, o)
                                }), a === !1 && (u = l.slice(0, 1)), e.uploadFiles(u);
                            case 14:
                            case `end`:
                                return t.stop()
                        }
                    }, t)
                }));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }()), p(o(e), `onFilePaste`, function() {
                var t = P(L().mark(function t(n) {
                    var r, i;
                    return L().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (r = e.props.pastable, r) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt(`return`);
                            case 3:
                                if (n.type !== `paste`) {
                                    t.next = 6;
                                    break
                                }
                                return i = n.clipboardData, t.abrupt(`return`, e.onDataTransferFiles(i, function() {
                                    n.preventDefault()
                                }));
                            case 6:
                            case `end`:
                                return t.stop()
                        }
                    }, t)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()), p(o(e), `onFileDragOver`, function(e) {
                e.preventDefault()
            }), p(o(e), `onFileDrop`, function() {
                var t = P(L().mark(function t(n) {
                    var r;
                    return L().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n.preventDefault(), n.type !== `drop`) {
                                    t.next = 4;
                                    break
                                }
                                return r = n.dataTransfer, t.abrupt(`return`, e.onDataTransferFiles(r));
                            case 4:
                            case `end`:
                                return t.stop()
                        }
                    }, t)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()), p(o(e), `uploadFiles`, function(t) {
                var n = C(t),
                    r = n.map(function(t) {
                        return t.uid = be(), e.processFile(t, n)
                    });
                Promise.all(r).then(function(t) {
                    var n = e.props.onBatchStart;
                    n == null || n(t.map(function(e) {
                        return {
                            file: e.origin,
                            parsedFile: e.parsedFile
                        }
                    })), t.filter(function(e) {
                        return e.parsedFile !== null
                    }).forEach(function(t) {
                        e.post(t)
                    })
                })
            }), p(o(e), `processFile`, function() {
                var t = P(L().mark(function t(n, r) {
                    var i, a, o, s, c, l, u, d, f;
                    return L().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (i = e.props.beforeUpload, a = n, !i) {
                                    t.next = 14;
                                    break
                                }
                                return t.prev = 3, t.next = 6, i(n, r);
                            case 6:
                                a = t.sent, t.next = 12;
                                break;
                            case 9:
                                t.prev = 9, t.t0 = t.catch(3), a = !1;
                            case 12:
                                if (a !== !1) {
                                    t.next = 14;
                                    break
                                }
                                return t.abrupt(`return`, {
                                    origin: n,
                                    parsedFile: null,
                                    action: null,
                                    data: null
                                });
                            case 14:
                                if (o = e.props.action, typeof o != `function`) {
                                    t.next = 21;
                                    break
                                }
                                return t.next = 18, o(n);
                            case 18:
                                s = t.sent, t.next = 22;
                                break;
                            case 21:
                                s = o;
                            case 22:
                                if (c = e.props.data, typeof c != `function`) {
                                    t.next = 29;
                                    break
                                }
                                return t.next = 26, c(n);
                            case 26:
                                l = t.sent, t.next = 30;
                                break;
                            case 29:
                                l = c;
                            case 30:
                                return u = (v(a) === `object` || typeof a == `string`) && a ? a : n, d = u instanceof File ? u : new File([u], n.name, {
                                    type: n.type
                                }), f = d, f.uid = n.uid, t.abrupt(`return`, {
                                    origin: n,
                                    data: l,
                                    parsedFile: f,
                                    action: s
                                });
                            case 35:
                            case `end`:
                                return t.stop()
                        }
                    }, t, null, [
                        [3, 9]
                    ])
                }));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }()), p(o(e), `saveFileInput`, function(t) {
                e.fileInput = t
            }), e
        }
        return k(n, [{
            key: `componentDidMount`,
            value: function() {
                this._isMounted = !0, this.props.pastable && document.addEventListener(`paste`, this.onFilePaste)
            }
        }, {
            key: `componentWillUnmount`,
            value: function() {
                this._isMounted = !1, this.abort(), document.removeEventListener(`paste`, this.onFilePaste)
            }
        }, {
            key: `componentDidUpdate`,
            value: function(e) {
                var t = this.props.pastable;
                t && !e.pastable ? document.addEventListener(`paste`, this.onFilePaste) : !t && e.pastable && document.removeEventListener(`paste`, this.onFilePaste)
            }
        }, {
            key: `post`,
            value: function(e) {
                var t = this,
                    n = e.data,
                    r = e.origin,
                    i = e.action,
                    a = e.parsedFile;
                if (this._isMounted) {
                    var o = this.props,
                        s = o.onStart,
                        c = o.customRequest,
                        l = o.name,
                        u = o.headers,
                        d = o.withCredentials,
                        f = o.method,
                        p = r.uid,
                        m = c || ge,
                        h = {
                            action: i,
                            filename: l,
                            data: n,
                            file: a,
                            headers: u,
                            withCredentials: d,
                            method: f || `post`,
                            onProgress: function(e) {
                                var n = t.props.onProgress;
                                n == null || n(e, a)
                            },
                            onSuccess: function(e, n) {
                                var r = t.props.onSuccess;
                                r == null || r(e, a, n), delete t.reqs[p]
                            },
                            onError: function(e, n) {
                                var r = t.props.onError;
                                r == null || r(e, n, a), delete t.reqs[p]
                            }
                        };
                    s(r), this.reqs[p] = m(h)
                }
            }
        }, {
            key: `reset`,
            value: function() {
                this.setState({
                    uid: be()
                })
            }
        }, {
            key: `abort`,
            value: function(e) {
                var t = this.reqs;
                if (e) {
                    var n = e.uid ? e.uid : e;
                    t[n] && t[n].abort && t[n].abort(), delete t[n]
                } else Object.keys(t).forEach(function(e) {
                    t[e] && t[e].abort && t[e].abort(), delete t[e]
                })
            }
        }, {
            key: `render`,
            value: function() {
                var e = this.props,
                    t = e.component,
                    n = e.prefixCls,
                    r = e.className,
                    i = e.classNames,
                    o = i === void 0 ? {} : i,
                    s = e.disabled,
                    c = e.id,
                    l = e.name,
                    u = e.style,
                    f = e.styles,
                    m = f === void 0 ? {} : f,
                    h = e.multiple,
                    g = e.accept,
                    _ = e.capture,
                    v = e.children,
                    y = e.directory,
                    b = e.openFileDialogOnClick,
                    x = e.onMouseEnter,
                    S = e.onMouseLeave,
                    C = e.hasControlInside,
                    w = O(e, xe),
                    T = (0, q.default)(p(p(p({}, n, !0), `${n}-disabled`, s), r, r)),
                    E = y ? {
                        directory: `directory`,
                        webkitdirectory: `webkitdirectory`
                    } : {},
                    D = s ? {} : {
                        onClick: b ? this.onClick : function() {},
                        onKeyDown: b ? this.onKeyDown : function() {},
                        onMouseEnter: x,
                        onMouseLeave: S,
                        onDrop: this.onFileDrop,
                        onDragOver: this.onFileDragOver,
                        tabIndex: C ? void 0 : `0`
                    };
                return K.createElement(t, a({}, D, {
                    className: T,
                    role: C ? void 0 : `button`,
                    style: u
                }), K.createElement(`input`, a({}, U(w, {
                    aria: !0,
                    data: !0
                }), {
                    id: c,
                    name: l,
                    disabled: s,
                    type: `file`,
                    ref: this.saveFileInput,
                    onClick: function(e) {
                        return e.stopPropagation()
                    },
                    key: this.state.uid,
                    style: d({
                        display: `none`
                    }, m.input),
                    className: o.input,
                    accept: g
                }, E, {
                    multiple: h,
                    onChange: this.onChange
                }, _ == null ? {} : {
                    capture: _
                })), v)
            }
        }]), n
    }(K.Component);
n(), c(), g(), i(), m();

function Ce() {}
var we = function(e) {
    s(n, e);
    var t = j(n);

    function n() {
        var e;
        u(this, n);
        var r = [...arguments];
        return e = t.call.apply(t, [this].concat(r)), p(o(e), `uploader`, void 0), p(o(e), `saveUploader`, function(t) {
            e.uploader = t
        }), e
    }
    return k(n, [{
        key: `abort`,
        value: function(e) {
            this.uploader.abort(e)
        }
    }, {
        key: `render`,
        value: function() {
            return K.createElement(Se, a({}, this.props, {
                ref: this.saveUploader
            }))
        }
    }]), n
}(K.Component);
p(we, `defaultProps`, {
    component: `span`,
    prefixCls: `rc-upload`,
    data: {},
    headers: {},
    name: `file`,
    multipart: !1,
    onStart: Ce,
    onError: Ce,
    onSuccess: Ce,
    multiple: !1,
    beforeUpload: null,
    customRequest: null,
    withCredentials: !1,
    openFileDialogOnClick: !0,
    hasControlInside: !1
});
var Te = we,
    Ee = e => {
        let {
            componentCls: t,
            iconCls: n
        } = e;
        return {
            [`${t}-wrapper`]: {
                [`${t}-drag`]: {
                    position: `relative`,
                    width: `100%`,
                    height: `100%`,
                    textAlign: `center`,
                    background: e.colorFillAlter,
                    border: `${y(e.lineWidth)} dashed ${e.colorBorder}`,
                    borderRadius: e.borderRadiusLG,
                    cursor: `pointer`,
                    transition: `border-color ${e.motionDurationSlow}`,
                    [t]: {
                        padding: e.padding
                    },
                    [`${t}-btn`]: {
                        display: `table`,
                        width: `100%`,
                        height: `100%`,
                        outline: `none`,
                        borderRadius: e.borderRadiusLG,
                        "&:focus-visible": {
                            outline: `${y(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`
                        }
                    },
                    [`${t}-drag-container`]: {
                        display: `table-cell`,
                        verticalAlign: `middle`
                    },
                    [`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]: {
                        borderColor: e.colorPrimaryHover
                    },
                    [`p${t}-drag-icon`]: {
                        marginBottom: e.margin,
                        [n]: {
                            color: e.colorPrimary,
                            fontSize: e.uploadThumbnailSize
                        }
                    },
                    [`p${t}-text`]: {
                        margin: `0 0 ${y(e.marginXXS)}`,
                        color: e.colorTextHeading,
                        fontSize: e.fontSizeLG
                    },
                    [`p${t}-hint`]: {
                        color: e.colorTextDescription,
                        fontSize: e.fontSize
                    },
                    [`&${t}-disabled`]: {
                        [`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]: {
                            color: e.colorTextDisabled
                        }
                    }
                }
            }
        }
    },
    De = e => {
        let {
            componentCls: t,
            iconCls: n,
            fontSize: r,
            lineHeight: i,
            calc: a
        } = e, o = `${t}-list-item`, s = `${o}-actions`, c = `${o}-action`;
        return {
            [`${t}-wrapper`]: {
                [`${t}-list`]: Object.assign(Object.assign({}, T()), {
                    lineHeight: e.lineHeight,
                    [o]: {
                        position: `relative`,
                        height: a(e.lineHeight).mul(r).equal(),
                        marginTop: e.marginXS,
                        fontSize: r,
                        display: `flex`,
                        alignItems: `center`,
                        transition: `background-color ${e.motionDurationSlow}`,
                        borderRadius: e.borderRadiusSM,
                        "&:hover": {
                            backgroundColor: e.controlItemBgHover
                        },
                        [`${o}-name`]: Object.assign(Object.assign({}, x), {
                            padding: `0 ${y(e.paddingXS)}`,
                            lineHeight: i,
                            flex: `auto`,
                            transition: `all ${e.motionDurationSlow}`
                        }),
                        [s]: {
                            whiteSpace: `nowrap`,
                            [c]: {
                                opacity: 0
                            },
                            [n]: {
                                color: e.actionsColor,
                                transition: `all ${e.motionDurationSlow}`
                            },
                            [`
              ${c}:focus-visible,
              &.picture ${c}
            `]: {
                                opacity: 1
                            }
                        },
                        [`${t}-icon ${n}`]: {
                            color: e.colorIcon,
                            fontSize: r
                        },
                        [`${o}-progress`]: {
                            position: `absolute`,
                            bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
                            width: `100%`,
                            paddingInlineStart: a(r).add(e.paddingXS).equal(),
                            fontSize: r,
                            lineHeight: 0,
                            pointerEvents: `none`,
                            "> div": {
                                margin: 0
                            }
                        }
                    },
                    [`${o}:hover ${c}`]: {
                        opacity: 1
                    },
                    [`${o}-error`]: {
                        color: e.colorError,
                        [`${o}-name, ${t}-icon ${n}`]: {
                            color: e.colorError
                        },
                        [s]: {
                            [`${n}, ${n}:hover`]: {
                                color: e.colorError
                            },
                            [c]: {
                                opacity: 1
                            }
                        }
                    },
                    [`${t}-list-item-container`]: {
                        transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
                        "&::before": {
                            display: `table`,
                            width: 0,
                            height: 0,
                            content: `""`
                        }
                    }
                })
            }
        }
    },
    Oe = e => {
        let {
            componentCls: t
        } = e, n = new N(`uploadAnimateInlineIn`, {
            from: {
                width: 0,
                height: 0,
                padding: 0,
                opacity: 0,
                margin: e.calc(e.marginXS).div(-2).equal()
            }
        }), r = new N(`uploadAnimateInlineOut`, {
            to: {
                width: 0,
                height: 0,
                padding: 0,
                opacity: 0,
                margin: e.calc(e.marginXS).div(-2).equal()
            }
        }), i = `${t}-animate-inline`;
        return [{
            [`${t}-wrapper`]: {
                [`${i}-appear, ${i}-enter, ${i}-leave`]: {
                    animationDuration: e.motionDurationSlow,
                    animationTimingFunction: e.motionEaseInOutCirc,
                    animationFillMode: `forwards`
                },
                [`${i}-appear, ${i}-enter`]: {
                    animationName: n
                },
                [`${i}-leave`]: {
                    animationName: r
                }
            }
        }, {
            [`${t}-wrapper`]: ae(e)
        }, n, r]
    },
    ke = e => {
        let {
            componentCls: t,
            iconCls: n,
            uploadThumbnailSize: r,
            uploadProgressOffset: i,
            calc: a
        } = e, o = `${t}-list`, s = `${o}-item`;
        return {
            [`${t}-wrapper`]: {
                [`
        ${o}${o}-picture,
        ${o}${o}-picture-card,
        ${o}${o}-picture-circle
      `]: {
                    [s]: {
                        position: `relative`,
                        height: a(r).add(a(e.lineWidth).mul(2)).add(a(e.paddingXS).mul(2)).equal(),
                        padding: e.paddingXS,
                        border: `${y(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadiusLG,
                        "&:hover": {
                            background: `transparent`
                        },
                        [`${s}-thumbnail`]: Object.assign(Object.assign({}, x), {
                            width: r,
                            height: r,
                            lineHeight: y(a(r).add(e.paddingSM).equal()),
                            textAlign: `center`,
                            flex: `none`,
                            [n]: {
                                fontSize: e.fontSizeHeading2,
                                color: e.colorPrimary
                            },
                            img: {
                                display: `block`,
                                width: `100%`,
                                height: `100%`,
                                overflow: `hidden`
                            }
                        }),
                        [`${s}-progress`]: {
                            bottom: i,
                            width: `calc(100% - ${y(a(e.paddingSM).mul(2).equal())})`,
                            marginTop: 0,
                            paddingInlineStart: a(r).add(e.paddingXS).equal()
                        }
                    },
                    [`${s}-error`]: {
                        borderColor: e.colorError,
                        [`${s}-thumbnail ${n}`]: {
                            [`svg path[fill='${h[0]}']`]: {
                                fill: e.colorErrorBg
                            },
                            [`svg path[fill='${h.primary}']`]: {
                                fill: e.colorError
                            }
                        }
                    },
                    [`${s}-uploading`]: {
                        borderStyle: `dashed`,
                        [`${s}-name`]: {
                            marginBottom: i
                        }
                    }
                },
                [`${o}${o}-picture-circle ${s}`]: {
                    [`&, &::before, ${s}-thumbnail`]: {
                        borderRadius: `50%`
                    }
                }
            }
        }
    },
    Ae = e => {
        let {
            componentCls: t,
            iconCls: n,
            fontSizeLG: r,
            colorTextLightSolid: i,
            calc: a
        } = e, o = `${t}-list`, s = `${o}-item`, c = e.uploadPicCardSize;
        return {
            [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, T()), {
                display: `block`,
                [`${t}${t}-select`]: {
                    width: c,
                    height: c,
                    textAlign: `center`,
                    verticalAlign: `top`,
                    backgroundColor: e.colorFillAlter,
                    border: `${y(e.lineWidth)} dashed ${e.colorBorder}`,
                    borderRadius: e.borderRadiusLG,
                    cursor: `pointer`,
                    transition: `border-color ${e.motionDurationSlow}`,
                    [`> ${t}`]: {
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        height: `100%`,
                        textAlign: `center`
                    },
                    [`&:not(${t}-disabled):hover`]: {
                        borderColor: e.colorPrimary
                    }
                },
                [`${o}${o}-picture-card, ${o}${o}-picture-circle`]: {
                    display: `flex`,
                    flexWrap: `wrap`,
                    "@supports not (gap: 1px)": {
                        "& > *": {
                            marginBlockEnd: e.marginXS,
                            marginInlineEnd: e.marginXS
                        }
                    },
                    "@supports (gap: 1px)": {
                        gap: e.marginXS
                    },
                    [`${o}-item-container`]: {
                        display: `inline-block`,
                        width: c,
                        height: c,
                        verticalAlign: `top`
                    },
                    "&::after": {
                        display: `none`
                    },
                    "&::before": {
                        display: `none`
                    },
                    [s]: {
                        height: `100%`,
                        margin: 0,
                        "&::before": {
                            position: `absolute`,
                            zIndex: 1,
                            width: `calc(100% - ${y(a(e.paddingXS).mul(2).equal())})`,
                            height: `calc(100% - ${y(a(e.paddingXS).mul(2).equal())})`,
                            backgroundColor: e.colorBgMask,
                            opacity: 0,
                            transition: `all ${e.motionDurationSlow}`,
                            content: `" "`
                        }
                    },
                    [`${s}:hover`]: {
                        [`&::before, ${s}-actions`]: {
                            opacity: 1
                        }
                    },
                    [`${s}-actions`]: {
                        position: `absolute`,
                        insetInlineStart: 0,
                        zIndex: 10,
                        width: `100%`,
                        whiteSpace: `nowrap`,
                        textAlign: `center`,
                        opacity: 0,
                        transition: `all ${e.motionDurationSlow}`,
                        [`
            ${n}-eye,
            ${n}-download,
            ${n}-delete
          `]: {
                            zIndex: 10,
                            width: r,
                            margin: `0 ${y(e.marginXXS)}`,
                            fontSize: r,
                            cursor: `pointer`,
                            transition: `all ${e.motionDurationSlow}`,
                            color: i,
                            "&:hover": {
                                color: i
                            },
                            svg: {
                                verticalAlign: `baseline`
                            }
                        }
                    },
                    [`${s}-thumbnail, ${s}-thumbnail img`]: {
                        position: `static`,
                        display: `block`,
                        width: `100%`,
                        height: `100%`,
                        objectFit: `contain`
                    },
                    [`${s}-name`]: {
                        display: `none`,
                        textAlign: `center`
                    },
                    [`${s}-file + ${s}-name`]: {
                        position: `absolute`,
                        bottom: e.margin,
                        display: `block`,
                        width: `calc(100% - ${y(a(e.paddingXS).mul(2).equal())})`
                    },
                    [`${s}-uploading`]: {
                        [`&${s}`]: {
                            backgroundColor: e.colorFillAlter
                        },
                        [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: {
                            display: `none`
                        }
                    },
                    [`${s}-progress`]: {
                        bottom: e.marginXL,
                        width: `calc(100% - ${y(a(e.paddingXS).mul(2).equal())})`,
                        paddingInlineStart: 0
                    }
                }
            }),
            [`${t}-wrapper${t}-picture-circle-wrapper`]: {
                [`${t}${t}-select`]: {
                    borderRadius: `50%`
                }
            }
        }
    },
    je = e => {
        let {
            componentCls: t
        } = e;
        return {
            [`${t}-rtl`]: {
                direction: `rtl`
            }
        }
    },
    Me = e => {
        let {
            componentCls: t,
            colorTextDisabled: n
        } = e;
        return {
            [`${t}-wrapper`]: Object.assign(Object.assign({}, E(e)), {
                [t]: {
                    outline: 0,
                    "input[type='file']": {
                        cursor: `pointer`
                    }
                },
                [`${t}-select`]: {
                    display: `inline-block`
                },
                [`${t}-hidden`]: {
                    display: `none`
                },
                [`${t}-disabled`]: {
                    color: n,
                    cursor: `not-allowed`
                }
            })
        }
    },
    Ne = ee(`Upload`, e => {
        let {
            fontSizeHeading3: t,
            fontHeight: n,
            lineWidth: r,
            controlHeightLG: i,
            calc: a
        } = e, o = b(e, {
            uploadThumbnailSize: a(t).mul(2).equal(),
            uploadProgressOffset: a(a(n).div(2)).add(r).equal(),
            uploadPicCardSize: a(i).mul(2.55).equal()
        });
        return [Me(o), Ee(o), ke(o), Ae(o), De(o), Oe(o), je(o), oe(o)]
    }, e => ({
        actionsColor: e.colorIcon
    }));
S();

function Pe(e) {
    return Object.assign(Object.assign({}, e), {
        lastModified: e.lastModified,
        lastModifiedDate: e.lastModifiedDate,
        name: e.name,
        size: e.size,
        type: e.type,
        uid: e.uid,
        percent: 0,
        originFileObj: e
    })
}

function Fe(e, t) {
    let n = C(t),
        r = n.findIndex(({
            uid: t
        }) => t === e.uid);
    return r === -1 ? n.push(e) : n[r] = e, n
}

function Ie(e, t) {
    let n = e.uid === void 0 ? `name` : `uid`;
    return t.filter(t => t[n] === e[n])[0]
}

function Le(e, t) {
    let n = e.uid === void 0 ? `name` : `uid`,
        r = t.filter(t => t[n] !== e[n]);
    return r.length === t.length ? null : r
}
var Re = (e = ``) => {
        let t = e.split(`/`),
            n = t[t.length - 1].split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(n) || [``])[0]
    },
    ze = e => e.indexOf(`image/`) === 0,
    Be = e => {
        if (e.type && !e.thumbUrl) return ze(e.type);
        let t = e.thumbUrl || e.url || ``,
            n = Re(t);
        return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(n) ? !0 : !(/^data:/.test(t) || n)
    },
    Q = 200;

function Ve(e) {
    return new Promise(t => {
        if (!e.type || !ze(e.type)) {
            t(``);
            return
        }
        let n = document.createElement(`canvas`);
        n.width = Q, n.height = Q, n.style.cssText = `position: fixed; left: 0; top: 0; width: ${Q}px; height: ${Q}px; z-index: 9999; display: none;`, document.body.appendChild(n);
        let r = n.getContext(`2d`),
            i = new Image;
        if (i.onload = () => {
                let {
                    width: e,
                    height: a
                } = i, o = Q, s = Q, c = 0, l = 0;
                e > a ? (s = Q / e * a, l = -(s - o) / 2) : (o = Q / a * e, c = -(o - s) / 2), r.drawImage(i, c, l, o, s);
                let u = n.toDataURL();
                document.body.removeChild(n), window.URL.revokeObjectURL(i.src), t(u)
            }, i.crossOrigin = `anonymous`, e.type.startsWith(`image/svg+xml`)) {
            let t = new FileReader;
            t.onload = () => {
                t.result && typeof t.result == `string` && (i.src = t.result)
            }, t.readAsDataURL(e)
        } else if (e.type.startsWith(`image/gif`)) {
            let n = new FileReader;
            n.onload = () => {
                n.result && t(n.result)
            }, n.readAsDataURL(e)
        } else i.src = window.URL.createObjectURL(e)
    })
}
var He = K.forwardRef(({
    prefixCls: e,
    className: t,
    style: n,
    locale: r,
    listType: i,
    file: a,
    items: o,
    progress: s,
    iconRender: c,
    actionIconRender: u,
    itemRender: d,
    isImgUrl: f,
    showPreviewIcon: p,
    showRemoveIcon: m,
    showDownloadIcon: h,
    previewIcon: g,
    removeIcon: _,
    downloadIcon: v,
    extra: y,
    onPreview: b,
    onDownload: x,
    onClose: S
}, C) => {
    var w, T;
    let {
        status: E
    } = a, [D, ee] = K.useState(E);
    K.useEffect(() => {
        E !== `removed` && ee(E)
    }, [E]);
    let [O, k] = K.useState(!1);
    K.useEffect(() => {
        let e = setTimeout(() => {
            k(!0)
        }, 300);
        return () => {
            clearTimeout(e)
        }
    }, []);
    let A = c(a),
        j = K.createElement(`div`, {
            className: `${e}-icon`
        }, A);
    if (i === `picture` || i === `picture-card` || i === `picture-circle`) {
        if (D === `uploading` || !a.thumbUrl && !a.url) {
            let t = (0, q.default)(`${e}-list-item-thumbnail`, {
                [`${e}-list-item-file`]: D !== `uploading`
            });
            j = K.createElement(`div`, {
                className: t
            }, A)
        } else {
            let t = f != null && f(a) ? K.createElement(`img`, {
                    src: a.thumbUrl || a.url,
                    alt: a.name,
                    className: `${e}-list-item-image`,
                    crossOrigin: a.crossOrigin
                }) : A,
                n = (0, q.default)(`${e}-list-item-thumbnail`, {
                    [`${e}-list-item-file`]: f && !f(a)
                });
            j = K.createElement(`a`, {
                className: n,
                onClick: e => b(a, e),
                href: a.url || a.thumbUrl,
                target: `_blank`,
                rel: `noopener noreferrer`
            }, t)
        }
    }
    let M = (0, q.default)(`${e}-list-item`, `${e}-list-item-${D}`),
        N = typeof a.linkProps == `string` ? JSON.parse(a.linkProps) : a.linkProps,
        P = (typeof m == `function` ? m(a) : m) ? u((typeof _ == `function` ? _(a) : _) || K.createElement(G, null), () => S(a), e, r.removeFile, !0) : null,
        F = (typeof h == `function` ? h(a) : h) && D === `done` ? u((typeof v == `function` ? v(a) : v) || K.createElement(ue, null), () => x(a), e, r.downloadFile) : null,
        I = i !== `picture-card` && i !== `picture-circle` && K.createElement(`span`, {
            key: `download-delete`,
            className: (0, q.default)(`${e}-list-item-actions`, {
                picture: i === `picture`
            })
        }, F, P),
        ne = typeof y == `function` ? y(a) : y,
        L = ne && K.createElement(`span`, {
            className: `${e}-list-item-extra`
        }, ne),
        R = (0, q.default)(`${e}-list-item-name`),
        z = a.url ? K.createElement(`a`, Object.assign({
            key: `view`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: R,
            title: a.name
        }, N, {
            href: a.url,
            onClick: e => b(a, e)
        }), a.name, L) : K.createElement(`span`, {
            key: `view`,
            className: R,
            onClick: e => b(a, e),
            title: a.name
        }, a.name, L),
        B = (typeof p == `function` ? p(a) : p) && (a.url || a.thumbUrl) ? K.createElement(`a`, {
            href: a.url || a.thumbUrl,
            target: `_blank`,
            rel: `noopener noreferrer`,
            onClick: e => b(a, e),
            title: r.previewFile
        }, typeof g == `function` ? g(a) : g || K.createElement(se, null)) : null,
        V = (i === `picture-card` || i === `picture-circle`) && D !== `uploading` && K.createElement(`span`, {
            className: `${e}-list-item-actions`
        }, B, D === `done` && F, P),
        {
            getPrefixCls: re
        } = K.useContext(l),
        ie = re(),
        U = K.createElement(`div`, {
            className: M
        }, j, z, I, V, O && K.createElement(te, {
            motionName: `${ie}-fade`,
            visible: D === `uploading`,
            motionDeadline: 2e3
        }, ({
            className: t
        }) => {
            let n = `percent` in a ? K.createElement(le, Object.assign({
                type: `line`,
                percent: a.percent,
                "aria-label": a[`aria-label`],
                "aria-labelledby": a[`aria-labelledby`]
            }, s)) : null;
            return K.createElement(`div`, {
                className: (0, q.default)(`${e}-list-item-progress`, t)
            }, n)
        })),
        ae = a.response && typeof a.response == `string` ? a.response : ((w = a.error) == null ? void 0 : w.statusText) || ((T = a.error) == null ? void 0 : T.message) || r.uploadError,
        W = D === `error` ? K.createElement(H, {
            title: ae,
            getPopupContainer: e => e.parentNode
        }, U) : U;
    return K.createElement(`div`, {
        className: (0, q.default)(`${e}-list-item-container`, t),
        style: n,
        ref: C
    }, d ? d(W, a, o, {
        download: x.bind(null, a),
        preview: b.bind(null, a),
        remove: S.bind(null, a)
    }) : W)
});
S();
var Ue = K.forwardRef((e, t) => {
    let {
        listType: n = `text`,
        previewFile: r = Ve,
        onPreview: i,
        onDownload: a,
        onRemove: o,
        locale: s,
        iconRender: c,
        isImageUrl: u = Be,
        prefixCls: d,
        items: f = [],
        showPreviewIcon: p = !0,
        showRemoveIcon: m = !0,
        showDownloadIcon: h = !1,
        removeIcon: g,
        previewIcon: _,
        downloadIcon: v,
        extra: y,
        progress: b = {
            size: [-1, 2],
            showInfo: !1
        },
        appendAction: x,
        appendActionVisible: S = !0,
        itemRender: w,
        disabled: T
    } = e, E = ce(), [D, ee] = K.useState(!1), O = [`picture-card`, `picture-circle`].includes(n);
    K.useEffect(() => {
        n.startsWith(`picture`) && (f || []).forEach(e => {
            (e.originFileObj instanceof File || e.originFileObj instanceof Blob) && e.thumbUrl === void 0 && (e.thumbUrl = ``, r == null || r(e.originFileObj).then(t => {
                e.thumbUrl = t || ``, E()
            }))
        })
    }, [n, f, r]), K.useEffect(() => {
        ee(!0)
    }, []);
    let k = (e, t) => {
            if (i) return t == null || t.preventDefault(), i(e)
        },
        A = e => {
            typeof a == `function` ? a(e) : e.url && window.open(e.url)
        },
        j = e => {
            o == null || o(e)
        },
        M = e => {
            if (c) return c(e, n);
            let t = e.status === `uploading`;
            if (n.startsWith(`picture`)) {
                let r = n === `picture` ? K.createElement(z, null) : s.uploading,
                    i = u != null && u(e) ? K.createElement(pe, null) : K.createElement(Y, null);
                return t ? r : i
            }
            return t ? K.createElement(z, null) : K.createElement(de, null)
        },
        N = (e, t, n, r, i) => {
            let a = {
                type: `text`,
                size: `small`,
                title: r,
                onClick: n => {
                    var r, i;
                    t(), K.isValidElement(e) && ((i = (r = e.props).onClick) == null || i.call(r, n))
                },
                className: `${n}-list-item-action`,
                disabled: i ? T : !1
            };
            return K.isValidElement(e) ? K.createElement(W, Object.assign({}, a, {
                icon: R(e, Object.assign(Object.assign({}, e.props), {
                    onClick: () => {}
                }))
            })) : K.createElement(W, Object.assign({}, a), K.createElement(`span`, null, e))
        };
    K.useImperativeHandle(t, () => ({
        handlePreview: k,
        handleDownload: A
    }));
    let {
        getPrefixCls: P
    } = K.useContext(l), I = P(`upload`, d), L = P(), B = (0, q.default)(`${I}-list`, `${I}-list-${n}`), re = K.useMemo(() => ne(V(L), [`onAppearEnd`, `onEnterEnd`, `onLeaveEnd`]), [L]), ie = Object.assign(Object.assign({}, O ? {} : re), {
        motionDeadline: 2e3,
        motionName: `${I}-${O?`animate-inline`:`animate`}`,
        keys: C(f.map(e => ({
            key: e.uid,
            file: e
        }))),
        motionAppear: D
    });
    return K.createElement(`div`, {
        className: B
    }, K.createElement(F, Object.assign({}, ie, {
        component: !1
    }), ({
        key: e,
        file: t,
        className: r,
        style: i
    }) => K.createElement(He, {
        key: e,
        locale: s,
        prefixCls: I,
        className: r,
        style: i,
        file: t,
        items: f,
        progress: b,
        listType: n,
        isImgUrl: u,
        showPreviewIcon: p,
        showRemoveIcon: m,
        showDownloadIcon: h,
        removeIcon: g,
        previewIcon: _,
        downloadIcon: v,
        extra: y,
        iconRender: M,
        actionIconRender: N,
        itemRender: w,
        onPreview: k,
        onDownload: A,
        onClose: j
    })), x && K.createElement(te, Object.assign({}, ie, {
        visible: S,
        forceRender: !0
    }), ({
        className: e,
        style: t
    }) => R(x, n => ({
        className: (0, q.default)(n.className, e),
        style: Object.assign(Object.assign(Object.assign({}, t), {
            pointerEvents: e ? `none` : void 0
        }), n.style)
    }))))
});
S();
var We = function(e, t, n, r) {
        function i(e) {
            return e instanceof n ? e : new n(function(t) {
                t(e)
            })
        }
        return new(n || (n = Promise))(function(n, a) {
            function o(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                e.done ? n(e.value) : i(e.value).then(o, s)
            }
            c((r = r.apply(e, t || [])).next())
        })
    },
    $ = `__LIST_IGNORE_${Date.now()}__`,
    Ge = K.forwardRef((e, t) => {
        let n = w(`upload`),
            {
                fileList: r,
                defaultFileList: i,
                onRemove: a,
                showUploadList: o = !0,
                listType: s = `text`,
                onPreview: c,
                onDownload: u,
                onChange: d,
                onDrop: f,
                previewFile: p,
                disabled: m,
                locale: h,
                iconRender: g,
                isImageUrl: _,
                progress: v,
                prefixCls: y,
                className: b,
                type: x = `select`,
                children: S,
                style: T,
                itemRender: E,
                maxCount: D,
                data: ee = {},
                multiple: O = !1,
                hasControlInside: k = !0,
                action: j = ``,
                accept: M = ``,
                supportServerRender: N = !0,
                rootClassName: P
            } = e,
            te = K.useContext(I),
            F = m ?? te,
            ne = e.customRequest || n.customRequest,
            [L, R] = A(i || [], {
                value: r,
                postState: e => e ?? []
            }),
            [z, B] = K.useState(`drop`),
            V = K.useRef(null),
            H = K.useRef(null);
        K.useMemo(() => {
            let e = Date.now();
            (r || []).forEach((t, n) => {
                !t.uid && !Object.isFrozen(t) && (t.uid = `__AUTO__${e}_${n}__`)
            })
        }, [r]);
        let U = (e, t, n) => {
                let r = C(t),
                    i = !1;
                D === 1 ? r = r.slice(-1) : D && (i = r.length > D, r = r.slice(0, D)), (0, fe.flushSync)(() => {
                    R(r)
                });
                let a = {
                    file: e,
                    fileList: r
                };
                n && (a.event = n), (!i || e.status === `removed` || r.some(t => t.uid === e.uid)) && (0, fe.flushSync)(() => {
                    d == null || d(a)
                })
            },
            ae = (t, n) => We(void 0, void 0, void 0, function*() {
                let {
                    beforeUpload: r,
                    transformFile: i
                } = e, a = t;
                if (r) {
                    let e = yield r(t, n);
                    if (e === !1) return !1;
                    if (delete t[$], e === $) return Object.defineProperty(t, $, {
                        value: !0,
                        configurable: !0
                    }), !1;
                    typeof e == `object` && e && (a = e)
                }
                return i && (a = yield i(a)), a
            }),
            W = e => {
                let t = e.filter(e => !e.file[$]);
                if (!t.length) return;
                let n = t.map(e => Pe(e.file)),
                    r = C(L);
                n.forEach(e => {
                    r = Fe(e, r)
                }), n.forEach((e, n) => {
                    let i = e;
                    if (t[n].parsedFile) e.status = `uploading`;
                    else {
                        let {
                            originFileObj: t
                        } = e, n;
                        try {
                            n = new File([t], t.name, {
                                type: t.type
                            })
                        } catch {
                            n = new Blob([t], {
                                type: t.type
                            }), n.name = t.name, n.lastModifiedDate = new Date, n.lastModified = new Date().getTime()
                        }
                        n.uid = e.uid, i = n
                    }
                    U(i, r)
                })
            },
            oe = (e, t, n) => {
                try {
                    typeof e == `string` && (e = JSON.parse(e))
                } catch {}
                if (!Ie(t, L)) return;
                let r = Pe(t);
                r.status = `done`, r.percent = 100, r.response = e, r.xhr = n;
                let i = Fe(r, L);
                U(r, i)
            },
            se = (e, t) => {
                if (!Ie(t, L)) return;
                let n = Pe(t);
                n.status = `uploading`, n.percent = e.percent;
                let r = Fe(n, L);
                U(n, r, e)
            },
            ce = (e, t, n) => {
                if (!Ie(n, L)) return;
                let r = Pe(n);
                r.error = e, r.response = t, r.status = `error`;
                let i = Fe(r, L);
                U(r, i)
            },
            le = e => {
                let t;
                Promise.resolve(typeof a == `function` ? a(e) : a).then(n => {
                    var r;
                    if (n === !1) return;
                    let i = Le(e, L);
                    i && (t = Object.assign(Object.assign({}, e), {
                        status: `removed`
                    }), L == null || L.forEach(e => {
                        let n = t.uid === void 0 ? `name` : `uid`;
                        e[n] === t[n] && !Object.isFrozen(e) && (e.status = `removed`)
                    }), (r = V.current) == null || r.abort(t), U(t, i))
                })
            },
            G = e => {
                B(e.type), e.type === `drop` && (f == null || f(e))
            };
        K.useImperativeHandle(t, () => ({
            onBatchStart: W,
            onSuccess: oe,
            onProgress: se,
            onError: ce,
            fileList: L,
            upload: V.current,
            nativeElement: H.current
        }));
        let {
            getPrefixCls: ue,
            direction: de,
            upload: J
        } = K.useContext(l), Y = ue(`upload`, y), X = Object.assign(Object.assign({
            onBatchStart: W,
            onError: ce,
            onProgress: se,
            onSuccess: oe
        }, e), {
            customRequest: ne,
            data: ee,
            multiple: O,
            action: j,
            accept: M,
            supportServerRender: N,
            prefixCls: Y,
            disabled: F,
            beforeUpload: ae,
            onChange: void 0,
            hasControlInside: k
        });
        delete X.className, delete X.style, (!S || F) && delete X.id;
        let pe = `${Y}-wrapper`,
            [Z, me, he] = Ne(Y, pe),
            [ge] = ie(`Upload`, re.Upload),
            {
                showRemoveIcon: _e,
                showPreviewIcon: ve,
                showDownloadIcon: ye,
                removeIcon: be,
                previewIcon: xe,
                downloadIcon: Se,
                extra: Ce
            } = typeof o == `boolean` ? {} : o,
            we = _e === void 0 ? !F : _e,
            Ee = (e, t) => o ? K.createElement(Ue, {
                prefixCls: Y,
                listType: s,
                items: L,
                previewFile: p,
                onPreview: c,
                onDownload: u,
                onRemove: le,
                showRemoveIcon: we,
                showPreviewIcon: ve,
                showDownloadIcon: ye,
                removeIcon: be,
                previewIcon: xe,
                downloadIcon: Se,
                iconRender: g,
                extra: Ce,
                locale: Object.assign(Object.assign({}, ge), h),
                isImageUrl: _,
                progress: v,
                appendAction: e,
                appendActionVisible: t,
                itemRender: E,
                disabled: F
            }) : e,
            De = (0, q.default)(pe, b, P, me, he, J == null ? void 0 : J.className, {
                [`${Y}-rtl`]: de === `rtl`,
                [`${Y}-picture-card-wrapper`]: s === `picture-card`,
                [`${Y}-picture-circle-wrapper`]: s === `picture-circle`
            }),
            Oe = Object.assign(Object.assign({}, J == null ? void 0 : J.style), T);
        if (x === `drag`) {
            let e = (0, q.default)(me, Y, `${Y}-drag`, {
                [`${Y}-drag-uploading`]: L.some(e => e.status === `uploading`),
                [`${Y}-drag-hover`]: z === `dragover`,
                [`${Y}-disabled`]: F,
                [`${Y}-rtl`]: de === `rtl`
            });
            return Z(K.createElement(`span`, {
                className: De,
                ref: H
            }, K.createElement(`div`, {
                className: e,
                style: Oe,
                onDrop: G,
                onDragOver: G,
                onDragLeave: G
            }, K.createElement(Te, Object.assign({}, X, {
                ref: V,
                className: `${Y}-btn`
            }), K.createElement(`div`, {
                className: `${Y}-drag-container`
            }, S))), Ee()))
        }
        let ke = (0, q.default)(Y, `${Y}-select`, {
                [`${Y}-disabled`]: F,
                [`${Y}-hidden`]: !S
            }),
            Ae = K.createElement(`div`, {
                className: ke,
                style: Oe
            }, K.createElement(Te, Object.assign({}, X, {
                ref: V
            })));
        return Z(s === `picture-card` || s === `picture-circle` ? K.createElement(`span`, {
            className: De,
            ref: H
        }, Ee(Ae, !!S)) : K.createElement(`span`, {
            className: De,
            ref: H
        }, Ae, Ee()))
    }),
    Ke = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == `function`)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    },
    qe = K.forwardRef((e, t) => {
        var {
            style: n,
            height: r,
            hasControlInside: i = !1
        } = e, a = Ke(e, [`style`, `height`, `hasControlInside`]);
        return K.createElement(Ge, Object.assign({
            ref: t,
            hasControlInside: i
        }, a, {
            type: `drag`,
            style: Object.assign(Object.assign({}, n), {
                height: r
            })
        }))
    }),
    Je = Ge;
Je.Dragger = qe, Je.LIST_IGNORE = $;
export {
    Je as t
};