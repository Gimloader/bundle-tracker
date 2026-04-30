import {
    r as l,
    I as Be,
    _ as be,
    aH as ct,
    dE as ae,
    dF as A,
    aK as K,
    bu as _e,
    bv as Xe,
    bw as We,
    aA as L,
    bx as M,
    by as Ve,
    aB as ut,
    am as B,
    x as Ie,
    aI as dt,
    aD as pt,
    aJ as mt,
    ak as _,
    bE as Ge,
    bC as ke,
    bz as Ue,
    dG as ft,
    dH as Me,
    ai as gt,
    aj as ht,
    aL as bt,
    al as Re,
    aE as Ke,
    aS as vt,
    aR as $t,
    db as yt,
    aQ as Ae,
    B as Te,
    bA as ze,
    bV as wt,
    aG as St,
    bd as Et,
    bG as Ct,
    bg as qe
} from "./_index.js";
import {
    g as Ft
} from "./index-10.js";
import {
    R as Ot
} from "./PaperClipOutlined.js";
import {
    u as It
} from "./useForceUpdate.js";
import {
    R as Dt
} from "./DeleteOutlined.js";
import {
    R as Rt
} from "./DownloadOutlined.js";
import {
    r as jt
} from "./index-3.js";
import {
    P as Lt
} from "./progress.js";
import {
    T as Pt
} from "./index-5.js";
var xt = {
        icon: function(r, i) {
            return {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",
                        fill: i
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",
                        fill: r
                    }
                }]
            }
        },
        name: "file",
        theme: "twotone"
    },
    Nt = function(r, i) {
        return l.createElement(Be, be({}, r, {
            ref: i,
            icon: xt
        }))
    },
    Ut = l.forwardRef(Nt),
    Mt = {
        icon: function(r, i) {
            return {
                tag: "svg",
                attrs: {
                    viewBox: "64 64 896 896",
                    focusable: "false"
                },
                children: [{
                    tag: "path",
                    attrs: {
                        d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",
                        fill: r
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",
                        fill: i
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",
                        fill: i
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z",
                        fill: i
                    }
                }, {
                    tag: "path",
                    attrs: {
                        d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",
                        fill: r
                    }
                }]
            }
        },
        name: "picture",
        theme: "twotone"
    },
    At = function(r, i) {
        return l.createElement(Be, be({}, r, {
            ref: i,
            icon: Mt
        }))
    },
    Tt = l.forwardRef(At);
const Ee = function(e, r) {
    if (e && r) {
        var i = Array.isArray(r) ? r : r.split(","),
            n = e.name || "",
            a = e.type || "",
            t = a.replace(/\/.*$/, "");
        return i.some(function(s) {
            var o = s.trim();
            if (/^\*(\/\*)?$/.test(s)) return !0;
            if (o.charAt(0) === ".") {
                var d = n.toLowerCase(),
                    c = o.toLowerCase(),
                    u = [c];
                return (c === ".jpg" || c === ".jpeg") && (u = [".jpg", ".jpeg"]), u.some(function(m) {
                    return d.endsWith(m)
                })
            }
            return /\/\*$/.test(o) ? t === o.replace(/\/.*$/, "") : a === o ? !0 : /^\w+$/.test(o) ? (ct(!1, "Upload takes an invalidate 'accept' type '".concat(o, "'.Skip for check.")), !0) : !1
        })
    }
    return !0
};

function zt(e, r) {
    var i = "cannot ".concat(e.method, " ").concat(e.action, " ").concat(r.status, "'"),
        n = new Error(i);
    return n.status = r.status, n.method = e.method, n.url = e.action, n
}

function He(e) {
    var r = e.responseText || e.response;
    if (!r) return r;
    try {
        return JSON.parse(r)
    } catch {
        return r
    }
}

function qt(e) {
    var r = new XMLHttpRequest;
    e.onProgress && r.upload && (r.upload.onprogress = function(t) {
        t.total > 0 && (t.percent = t.loaded / t.total * 100), e.onProgress(t)
    });
    var i = new FormData;
    e.data && Object.keys(e.data).forEach(function(a) {
        var t = e.data[a];
        if (Array.isArray(t)) {
            t.forEach(function(s) {
                i.append("".concat(a, "[]"), s)
            });
            return
        }
        i.append(a, t)
    }), e.file instanceof Blob ? i.append(e.filename, e.file, e.file.name) : i.append(e.filename, e.file), r.onerror = function(t) {
        e.onError(t)
    }, r.onload = function() {
        return r.status < 200 || r.status >= 300 ? e.onError(zt(e, r), He(r)) : e.onSuccess(He(r), r)
    }, r.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in r && (r.withCredentials = !0);
    var n = e.headers || {};
    return n["X-Requested-With"] !== null && r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(n).forEach(function(a) {
        n[a] !== null && r.setRequestHeader(a, n[a])
    }), r.send(i), {
        abort: function() {
            r.abort()
        }
    }
}
var Ht = function() {
        var e = ae(A().mark(function r(i, n) {
            var a, t, s, o, d, c, u, m;
            return A().wrap(function(h) {
                for (;;) switch (h.prev = h.next) {
                    case 0:
                        c = function() {
                            return c = ae(A().mark(function F(v) {
                                return A().wrap(function(S) {
                                    for (;;) switch (S.prev = S.next) {
                                        case 0:
                                            return S.abrupt("return", new Promise(function($) {
                                                v.file(function(y) {
                                                    n(y) ? (v.fullPath && !y.webkitRelativePath && (Object.defineProperties(y, {
                                                        webkitRelativePath: {
                                                            writable: !0
                                                        }
                                                    }), y.webkitRelativePath = v.fullPath.replace(/^\//, ""), Object.defineProperties(y, {
                                                        webkitRelativePath: {
                                                            writable: !1
                                                        }
                                                    })), $(y)) : $(null)
                                                })
                                            }));
                                        case 1:
                                        case "end":
                                            return S.stop()
                                    }
                                }, F)
                            })), c.apply(this, arguments)
                        }, d = function(F) {
                            return c.apply(this, arguments)
                        }, o = function() {
                            return o = ae(A().mark(function F(v) {
                                var O, S, $, y, p;
                                return A().wrap(function(E) {
                                    for (;;) switch (E.prev = E.next) {
                                        case 0:
                                            O = v.createReader(), S = [];
                                        case 2:
                                            return E.next = 5, new Promise(function(q) {
                                                O.readEntries(q, function() {
                                                    return q([])
                                                })
                                            });
                                        case 5:
                                            if ($ = E.sent, y = $.length, y) {
                                                E.next = 9;
                                                break
                                            }
                                            return E.abrupt("break", 12);
                                        case 9:
                                            for (p = 0; p < y; p++) S.push($[p]);
                                            E.next = 2;
                                            break;
                                        case 12:
                                            return E.abrupt("return", S);
                                        case 13:
                                        case "end":
                                            return E.stop()
                                    }
                                }, F)
                            })), o.apply(this, arguments)
                        }, s = function(F) {
                            return o.apply(this, arguments)
                        }, a = [], t = [], i.forEach(function(C) {
                            return t.push(C.webkitGetAsEntry())
                        }), u = function() {
                            var C = ae(A().mark(function F(v, O) {
                                var S, $;
                                return A().wrap(function(p) {
                                    for (;;) switch (p.prev = p.next) {
                                        case 0:
                                            if (v) {
                                                p.next = 2;
                                                break
                                            }
                                            return p.abrupt("return");
                                        case 2:
                                            if (v.path = O || "", !v.isFile) {
                                                p.next = 10;
                                                break
                                            }
                                            return p.next = 6, d(v);
                                        case 6:
                                            S = p.sent, S && a.push(S), p.next = 15;
                                            break;
                                        case 10:
                                            if (!v.isDirectory) {
                                                p.next = 15;
                                                break
                                            }
                                            return p.next = 13, s(v);
                                        case 13:
                                            $ = p.sent, t.push.apply(t, K($));
                                        case 15:
                                        case "end":
                                            return p.stop()
                                    }
                                }, F)
                            }));
                            return function(v, O) {
                                return C.apply(this, arguments)
                            }
                        }(), m = 0;
                    case 9:
                        if (!(m < t.length)) {
                            h.next = 15;
                            break
                        }
                        return h.next = 12, u(t[m]);
                    case 12:
                        m++, h.next = 9;
                        break;
                    case 15:
                        return h.abrupt("return", a);
                    case 16:
                    case "end":
                        return h.stop()
                }
            }, r)
        }));
        return function(i, n) {
            return e.apply(this, arguments)
        }
    }(),
    Bt = +new Date,
    _t = 0;

function Ce() {
    return "rc-upload-".concat(Bt, "-").concat(++_t)
}
var Xt = ["component", "prefixCls", "className", "classNames", "disabled", "id", "name", "style", "styles", "multiple", "accept", "capture", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave", "hasControlInside"],
    Wt = function(e) {
        _e(i, e);
        var r = Xe(i);

        function i() {
            var n;
            We(this, i);
            for (var a = arguments.length, t = new Array(a), s = 0; s < a; s++) t[s] = arguments[s];
            return n = r.call.apply(r, [this].concat(t)), L(M(n), "state", {
                uid: Ce()
            }), L(M(n), "reqs", {}), L(M(n), "fileInput", void 0), L(M(n), "_isMounted", void 0), L(M(n), "onChange", function(o) {
                var d = n.props,
                    c = d.accept,
                    u = d.directory,
                    m = o.target.files,
                    f = K(m).filter(function(h) {
                        return !u || Ee(h, c)
                    });
                n.uploadFiles(f), n.reset()
            }), L(M(n), "onClick", function(o) {
                var d = n.fileInput;
                if (d) {
                    var c = o.target,
                        u = n.props.onClick;
                    if (c && c.tagName === "BUTTON") {
                        var m = d.parentNode;
                        m.focus(), c.blur()
                    }
                    d.click(), u && u(o)
                }
            }), L(M(n), "onKeyDown", function(o) {
                o.key === "Enter" && n.onClick(o)
            }), L(M(n), "onDataTransferFiles", function() {
                var o = ae(A().mark(function d(c, u) {
                    var m, f, h, C, F, v, O;
                    return A().wrap(function($) {
                        for (;;) switch ($.prev = $.next) {
                            case 0:
                                if (m = n.props, f = m.multiple, h = m.accept, C = m.directory, F = K(c.items || []), v = K(c.files || []), (v.length > 0 || F.some(function(y) {
                                        return y.kind === "file"
                                    })) && (u == null || u()), !C) {
                                    $.next = 11;
                                    break
                                }
                                return $.next = 7, Ht(Array.prototype.slice.call(F), function(y) {
                                    return Ee(y, n.props.accept)
                                });
                            case 7:
                                v = $.sent, n.uploadFiles(v), $.next = 14;
                                break;
                            case 11:
                                O = K(v).filter(function(y) {
                                    return Ee(y, h)
                                }), f === !1 && (O = v.slice(0, 1)), n.uploadFiles(O);
                            case 14:
                            case "end":
                                return $.stop()
                        }
                    }, d)
                }));
                return function(d, c) {
                    return o.apply(this, arguments)
                }
            }()), L(M(n), "onFilePaste", function() {
                var o = ae(A().mark(function d(c) {
                    var u, m;
                    return A().wrap(function(h) {
                        for (;;) switch (h.prev = h.next) {
                            case 0:
                                if (u = n.props.pastable, u) {
                                    h.next = 3;
                                    break
                                }
                                return h.abrupt("return");
                            case 3:
                                if (c.type !== "paste") {
                                    h.next = 6;
                                    break
                                }
                                return m = c.clipboardData, h.abrupt("return", n.onDataTransferFiles(m, function() {
                                    c.preventDefault()
                                }));
                            case 6:
                            case "end":
                                return h.stop()
                        }
                    }, d)
                }));
                return function(d) {
                    return o.apply(this, arguments)
                }
            }()), L(M(n), "onFileDragOver", function(o) {
                o.preventDefault()
            }), L(M(n), "onFileDrop", function() {
                var o = ae(A().mark(function d(c) {
                    var u;
                    return A().wrap(function(f) {
                        for (;;) switch (f.prev = f.next) {
                            case 0:
                                if (c.preventDefault(), c.type !== "drop") {
                                    f.next = 4;
                                    break
                                }
                                return u = c.dataTransfer, f.abrupt("return", n.onDataTransferFiles(u));
                            case 4:
                            case "end":
                                return f.stop()
                        }
                    }, d)
                }));
                return function(d) {
                    return o.apply(this, arguments)
                }
            }()), L(M(n), "uploadFiles", function(o) {
                var d = K(o),
                    c = d.map(function(u) {
                        return u.uid = Ce(), n.processFile(u, d)
                    });
                Promise.all(c).then(function(u) {
                    var m = n.props.onBatchStart;
                    m == null || m(u.map(function(f) {
                        var h = f.origin,
                            C = f.parsedFile;
                        return {
                            file: h,
                            parsedFile: C
                        }
                    })), u.filter(function(f) {
                        return f.parsedFile !== null
                    }).forEach(function(f) {
                        n.post(f)
                    })
                })
            }), L(M(n), "processFile", function() {
                var o = ae(A().mark(function d(c, u) {
                    var m, f, h, C, F, v, O, S, $;
                    return A().wrap(function(p) {
                        for (;;) switch (p.prev = p.next) {
                            case 0:
                                if (m = n.props.beforeUpload, f = c, !m) {
                                    p.next = 14;
                                    break
                                }
                                return p.prev = 3, p.next = 6, m(c, u);
                            case 6:
                                f = p.sent, p.next = 12;
                                break;
                            case 9:
                                p.prev = 9, p.t0 = p.catch(3), f = !1;
                            case 12:
                                if (f !== !1) {
                                    p.next = 14;
                                    break
                                }
                                return p.abrupt("return", {
                                    origin: c,
                                    parsedFile: null,
                                    action: null,
                                    data: null
                                });
                            case 14:
                                if (h = n.props.action, typeof h != "function") {
                                    p.next = 21;
                                    break
                                }
                                return p.next = 18, h(c);
                            case 18:
                                C = p.sent, p.next = 22;
                                break;
                            case 21:
                                C = h;
                            case 22:
                                if (F = n.props.data, typeof F != "function") {
                                    p.next = 29;
                                    break
                                }
                                return p.next = 26, F(c);
                            case 26:
                                v = p.sent, p.next = 30;
                                break;
                            case 29:
                                v = F;
                            case 30:
                                return O = (mt(f) === "object" || typeof f == "string") && f ? f : c, O instanceof File ? S = O : S = new File([O], c.name, {
                                    type: c.type
                                }), $ = S, $.uid = c.uid, p.abrupt("return", {
                                    origin: c,
                                    data: v,
                                    parsedFile: $,
                                    action: C
                                });
                            case 35:
                            case "end":
                                return p.stop()
                        }
                    }, d, null, [
                        [3, 9]
                    ])
                }));
                return function(d, c) {
                    return o.apply(this, arguments)
                }
            }()), L(M(n), "saveFileInput", function(o) {
                n.fileInput = o
            }), n
        }
        return Ve(i, [{
            key: "componentDidMount",
            value: function() {
                this._isMounted = !0;
                var a = this.props.pastable;
                a && document.addEventListener("paste", this.onFilePaste)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._isMounted = !1, this.abort(), document.removeEventListener("paste", this.onFilePaste)
            }
        }, {
            key: "componentDidUpdate",
            value: function(a) {
                var t = this.props.pastable;
                t && !a.pastable ? document.addEventListener("paste", this.onFilePaste) : !t && a.pastable && document.removeEventListener("paste", this.onFilePaste)
            }
        }, {
            key: "post",
            value: function(a) {
                var t = this,
                    s = a.data,
                    o = a.origin,
                    d = a.action,
                    c = a.parsedFile;
                if (this._isMounted) {
                    var u = this.props,
                        m = u.onStart,
                        f = u.customRequest,
                        h = u.name,
                        C = u.headers,
                        F = u.withCredentials,
                        v = u.method,
                        O = o.uid,
                        S = f || qt,
                        $ = {
                            action: d,
                            filename: h,
                            data: s,
                            file: c,
                            headers: C,
                            withCredentials: F,
                            method: v || "post",
                            onProgress: function(p) {
                                var U = t.props.onProgress;
                                U == null || U(p, c)
                            },
                            onSuccess: function(p, U) {
                                var E = t.props.onSuccess;
                                E == null || E(p, c, U), delete t.reqs[O]
                            },
                            onError: function(p, U) {
                                var E = t.props.onError;
                                E == null || E(p, U, c), delete t.reqs[O]
                            }
                        };
                    m(o), this.reqs[O] = S($)
                }
            }
        }, {
            key: "reset",
            value: function() {
                this.setState({
                    uid: Ce()
                })
            }
        }, {
            key: "abort",
            value: function(a) {
                var t = this.reqs;
                if (a) {
                    var s = a.uid ? a.uid : a;
                    t[s] && t[s].abort && t[s].abort(), delete t[s]
                } else Object.keys(t).forEach(function(o) {
                    t[o] && t[o].abort && t[o].abort(), delete t[o]
                })
            }
        }, {
            key: "render",
            value: function() {
                var a = this.props,
                    t = a.component,
                    s = a.prefixCls,
                    o = a.className,
                    d = a.classNames,
                    c = d === void 0 ? {} : d,
                    u = a.disabled,
                    m = a.id,
                    f = a.name,
                    h = a.style,
                    C = a.styles,
                    F = C === void 0 ? {} : C,
                    v = a.multiple,
                    O = a.accept,
                    S = a.capture,
                    $ = a.children,
                    y = a.directory,
                    p = a.openFileDialogOnClick,
                    U = a.onMouseEnter,
                    E = a.onMouseLeave,
                    q = a.hasControlInside,
                    X = ut(a, Xt),
                    z = B(L(L(L({}, s, !0), "".concat(s, "-disabled"), u), o, o)),
                    Z = y ? {
                        directory: "directory",
                        webkitdirectory: "webkitdirectory"
                    } : {},
                    ee = u ? {} : {
                        onClick: p ? this.onClick : function() {},
                        onKeyDown: p ? this.onKeyDown : function() {},
                        onMouseEnter: U,
                        onMouseLeave: E,
                        onDrop: this.onFileDrop,
                        onDragOver: this.onFileDragOver,
                        tabIndex: q ? void 0 : "0"
                    };
                return Ie.createElement(t, be({}, ee, {
                    className: z,
                    role: q ? void 0 : "button",
                    style: h
                }), Ie.createElement("input", be({}, dt(X, {
                    aria: !0,
                    data: !0
                }), {
                    id: m,
                    name: f,
                    disabled: u,
                    type: "file",
                    ref: this.saveFileInput,
                    onClick: function(J) {
                        return J.stopPropagation()
                    },
                    key: this.state.uid,
                    style: pt({
                        display: "none"
                    }, F.input),
                    className: c.input,
                    accept: O
                }, Z, {
                    multiple: v,
                    onChange: this.onChange
                }, S != null ? {
                    capture: S
                } : {})), $)
            }
        }]), i
    }(l.Component);

function Fe() {}
var De = function(e) {
    _e(i, e);
    var r = Xe(i);

    function i() {
        var n;
        We(this, i);
        for (var a = arguments.length, t = new Array(a), s = 0; s < a; s++) t[s] = arguments[s];
        return n = r.call.apply(r, [this].concat(t)), L(M(n), "uploader", void 0), L(M(n), "saveUploader", function(o) {
            n.uploader = o
        }), n
    }
    return Ve(i, [{
        key: "abort",
        value: function(a) {
            this.uploader.abort(a)
        }
    }, {
        key: "render",
        value: function() {
            return Ie.createElement(Wt, be({}, this.props, {
                ref: this.saveUploader
            }))
        }
    }]), i
}(l.Component);
L(De, "defaultProps", {
    component: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: !1,
    onStart: Fe,
    onError: Fe,
    onSuccess: Fe,
    multiple: !1,
    beforeUpload: null,
    customRequest: null,
    withCredentials: !1,
    openFileDialogOnClick: !0,
    hasControlInside: !1
});
const Vt = e => {
        const {
            componentCls: r,
            iconCls: i
        } = e;
        return {
            [`${r}-wrapper`]: {
                [`${r}-drag`]: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    background: e.colorFillAlter,
                    border: `${_(e.lineWidth)} dashed ${e.colorBorder}`,
                    borderRadius: e.borderRadiusLG,
                    cursor: "pointer",
                    transition: `border-color ${e.motionDurationSlow}`,
                    [r]: {
                        padding: e.padding
                    },
                    [`${r}-btn`]: {
                        display: "table",
                        width: "100%",
                        height: "100%",
                        outline: "none",
                        borderRadius: e.borderRadiusLG,
                        "&:focus-visible": {
                            outline: `${_(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`
                        }
                    },
                    [`${r}-drag-container`]: {
                        display: "table-cell",
                        verticalAlign: "middle"
                    },
                    [`
          &:not(${r}-disabled):hover,
          &-hover:not(${r}-disabled)
        `]: {
                        borderColor: e.colorPrimaryHover
                    },
                    [`p${r}-drag-icon`]: {
                        marginBottom: e.margin,
                        [i]: {
                            color: e.colorPrimary,
                            fontSize: e.uploadThumbnailSize
                        }
                    },
                    [`p${r}-text`]: {
                        margin: `0 0 ${_(e.marginXXS)}`,
                        color: e.colorTextHeading,
                        fontSize: e.fontSizeLG
                    },
                    [`p${r}-hint`]: {
                        color: e.colorTextDescription,
                        fontSize: e.fontSize
                    },
                    [`&${r}-disabled`]: {
                        [`p${r}-drag-icon ${i},
            p${r}-text,
            p${r}-hint
          `]: {
                            color: e.colorTextDisabled
                        }
                    }
                }
            }
        }
    },
    Gt = e => {
        const {
            componentCls: r,
            iconCls: i,
            fontSize: n,
            lineHeight: a,
            calc: t
        } = e, s = `${r}-list-item`, o = `${s}-actions`, d = `${s}-action`;
        return {
            [`${r}-wrapper`]: {
                [`${r}-list`]: Object.assign(Object.assign({}, Ge()), {
                    lineHeight: e.lineHeight,
                    [s]: {
                        position: "relative",
                        height: t(e.lineHeight).mul(n).equal(),
                        marginTop: e.marginXS,
                        fontSize: n,
                        display: "flex",
                        alignItems: "center",
                        transition: `background-color ${e.motionDurationSlow}`,
                        borderRadius: e.borderRadiusSM,
                        "&:hover": {
                            backgroundColor: e.controlItemBgHover
                        },
                        [`${s}-name`]: Object.assign(Object.assign({}, ke), {
                            padding: `0 ${_(e.paddingXS)}`,
                            lineHeight: a,
                            flex: "auto",
                            transition: `all ${e.motionDurationSlow}`
                        }),
                        [o]: {
                            whiteSpace: "nowrap",
                            [d]: {
                                opacity: 0
                            },
                            [i]: {
                                color: e.actionsColor,
                                transition: `all ${e.motionDurationSlow}`
                            },
                            [`
              ${d}:focus-visible,
              &.picture ${d}
            `]: {
                                opacity: 1
                            }
                        },
                        [`${r}-icon ${i}`]: {
                            color: e.colorIcon,
                            fontSize: n
                        },
                        [`${s}-progress`]: {
                            position: "absolute",
                            bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
                            width: "100%",
                            paddingInlineStart: t(n).add(e.paddingXS).equal(),
                            fontSize: n,
                            lineHeight: 0,
                            pointerEvents: "none",
                            "> div": {
                                margin: 0
                            }
                        }
                    },
                    [`${s}:hover ${d}`]: {
                        opacity: 1
                    },
                    [`${s}-error`]: {
                        color: e.colorError,
                        [`${s}-name, ${r}-icon ${i}`]: {
                            color: e.colorError
                        },
                        [o]: {
                            [`${i}, ${i}:hover`]: {
                                color: e.colorError
                            },
                            [d]: {
                                opacity: 1
                            }
                        }
                    },
                    [`${r}-list-item-container`]: {
                        transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
                        "&::before": {
                            display: "table",
                            width: 0,
                            height: 0,
                            content: '""'
                        }
                    }
                })
            }
        }
    },
    kt = e => {
        const {
            componentCls: r
        } = e, i = new Ue("uploadAnimateInlineIn", {
            from: {
                width: 0,
                height: 0,
                padding: 0,
                opacity: 0,
                margin: e.calc(e.marginXS).div(-2).equal()
            }
        }), n = new Ue("uploadAnimateInlineOut", {
            to: {
                width: 0,
                height: 0,
                padding: 0,
                opacity: 0,
                margin: e.calc(e.marginXS).div(-2).equal()
            }
        }), a = `${r}-animate-inline`;
        return [{
            [`${r}-wrapper`]: {
                [`${a}-appear, ${a}-enter, ${a}-leave`]: {
                    animationDuration: e.motionDurationSlow,
                    animationTimingFunction: e.motionEaseInOutCirc,
                    animationFillMode: "forwards"
                },
                [`${a}-appear, ${a}-enter`]: {
                    animationName: i
                },
                [`${a}-leave`]: {
                    animationName: n
                }
            }
        }, {
            [`${r}-wrapper`]: ft(e)
        }, i, n]
    },
    Kt = e => {
        const {
            componentCls: r,
            iconCls: i,
            uploadThumbnailSize: n,
            uploadProgressOffset: a,
            calc: t
        } = e, s = `${r}-list`, o = `${s}-item`;
        return {
            [`${r}-wrapper`]: {
                [`
        ${s}${s}-picture,
        ${s}${s}-picture-card,
        ${s}${s}-picture-circle
      `]: {
                    [o]: {
                        position: "relative",
                        height: t(n).add(t(e.lineWidth).mul(2)).add(t(e.paddingXS).mul(2)).equal(),
                        padding: e.paddingXS,
                        border: `${_(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
                        borderRadius: e.borderRadiusLG,
                        "&:hover": {
                            background: "transparent"
                        },
                        [`${o}-thumbnail`]: Object.assign(Object.assign({}, ke), {
                            width: n,
                            height: n,
                            lineHeight: _(t(n).add(e.paddingSM).equal()),
                            textAlign: "center",
                            flex: "none",
                            [i]: {
                                fontSize: e.fontSizeHeading2,
                                color: e.colorPrimary
                            },
                            img: {
                                display: "block",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden"
                            }
                        }),
                        [`${o}-progress`]: {
                            bottom: a,
                            width: `calc(100% - ${_(t(e.paddingSM).mul(2).equal())})`,
                            marginTop: 0,
                            paddingInlineStart: t(n).add(e.paddingXS).equal()
                        }
                    },
                    [`${o}-error`]: {
                        borderColor: e.colorError,
                        [`${o}-thumbnail ${i}`]: {
                            [`svg path[fill='${Me[0]}']`]: {
                                fill: e.colorErrorBg
                            },
                            [`svg path[fill='${Me.primary}']`]: {
                                fill: e.colorError
                            }
                        }
                    },
                    [`${o}-uploading`]: {
                        borderStyle: "dashed",
                        [`${o}-name`]: {
                            marginBottom: a
                        }
                    }
                },
                [`${s}${s}-picture-circle ${o}`]: {
                    [`&, &::before, ${o}-thumbnail`]: {
                        borderRadius: "50%"
                    }
                }
            }
        }
    },
    Jt = e => {
        const {
            componentCls: r,
            iconCls: i,
            fontSizeLG: n,
            colorTextLightSolid: a,
            calc: t
        } = e, s = `${r}-list`, o = `${s}-item`, d = e.uploadPicCardSize;
        return {
            [`
      ${r}-wrapper${r}-picture-card-wrapper,
      ${r}-wrapper${r}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, Ge()), {
                display: "block",
                [`${r}${r}-select`]: {
                    width: d,
                    height: d,
                    textAlign: "center",
                    verticalAlign: "top",
                    backgroundColor: e.colorFillAlter,
                    border: `${_(e.lineWidth)} dashed ${e.colorBorder}`,
                    borderRadius: e.borderRadiusLG,
                    cursor: "pointer",
                    transition: `border-color ${e.motionDurationSlow}`,
                    [`> ${r}`]: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        textAlign: "center"
                    },
                    [`&:not(${r}-disabled):hover`]: {
                        borderColor: e.colorPrimary
                    }
                },
                [`${s}${s}-picture-card, ${s}${s}-picture-circle`]: {
                    display: "flex",
                    flexWrap: "wrap",
                    "@supports not (gap: 1px)": {
                        "& > *": {
                            marginBlockEnd: e.marginXS,
                            marginInlineEnd: e.marginXS
                        }
                    },
                    "@supports (gap: 1px)": {
                        gap: e.marginXS
                    },
                    [`${s}-item-container`]: {
                        display: "inline-block",
                        width: d,
                        height: d,
                        verticalAlign: "top"
                    },
                    "&::after": {
                        display: "none"
                    },
                    "&::before": {
                        display: "none"
                    },
                    [o]: {
                        height: "100%",
                        margin: 0,
                        "&::before": {
                            position: "absolute",
                            zIndex: 1,
                            width: `calc(100% - ${_(t(e.paddingXS).mul(2).equal())})`,
                            height: `calc(100% - ${_(t(e.paddingXS).mul(2).equal())})`,
                            backgroundColor: e.colorBgMask,
                            opacity: 0,
                            transition: `all ${e.motionDurationSlow}`,
                            content: '" "'
                        }
                    },
                    [`${o}:hover`]: {
                        [`&::before, ${o}-actions`]: {
                            opacity: 1
                        }
                    },
                    [`${o}-actions`]: {
                        position: "absolute",
                        insetInlineStart: 0,
                        zIndex: 10,
                        width: "100%",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        opacity: 0,
                        transition: `all ${e.motionDurationSlow}`,
                        [`
            ${i}-eye,
            ${i}-download,
            ${i}-delete
          `]: {
                            zIndex: 10,
                            width: n,
                            margin: `0 ${_(e.marginXXS)}`,
                            fontSize: n,
                            cursor: "pointer",
                            transition: `all ${e.motionDurationSlow}`,
                            color: a,
                            "&:hover": {
                                color: a
                            },
                            svg: {
                                verticalAlign: "baseline"
                            }
                        }
                    },
                    [`${o}-thumbnail, ${o}-thumbnail img`]: {
                        position: "static",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    },
                    [`${o}-name`]: {
                        display: "none",
                        textAlign: "center"
                    },
                    [`${o}-file + ${o}-name`]: {
                        position: "absolute",
                        bottom: e.margin,
                        display: "block",
                        width: `calc(100% - ${_(t(e.paddingXS).mul(2).equal())})`
                    },
                    [`${o}-uploading`]: {
                        [`&${o}`]: {
                            backgroundColor: e.colorFillAlter
                        },
                        [`&::before, ${i}-eye, ${i}-download, ${i}-delete`]: {
                            display: "none"
                        }
                    },
                    [`${o}-progress`]: {
                        bottom: e.marginXL,
                        width: `calc(100% - ${_(t(e.paddingXS).mul(2).equal())})`,
                        paddingInlineStart: 0
                    }
                }
            }),
            [`${r}-wrapper${r}-picture-circle-wrapper`]: {
                [`${r}${r}-select`]: {
                    borderRadius: "50%"
                }
            }
        }
    },
    Qt = e => {
        const {
            componentCls: r
        } = e;
        return {
            [`${r}-rtl`]: {
                direction: "rtl"
            }
        }
    },
    Yt = e => {
        const {
            componentCls: r,
            colorTextDisabled: i
        } = e;
        return {
            [`${r}-wrapper`]: Object.assign(Object.assign({}, bt(e)), {
                [r]: {
                    outline: 0,
                    "input[type='file']": {
                        cursor: "pointer"
                    }
                },
                [`${r}-select`]: {
                    display: "inline-block"
                },
                [`${r}-hidden`]: {
                    display: "none"
                },
                [`${r}-disabled`]: {
                    color: i,
                    cursor: "not-allowed"
                }
            })
        }
    },
    Zt = e => ({
        actionsColor: e.colorIcon
    }),
    er = gt("Upload", e => {
        const {
            fontSizeHeading3: r,
            fontHeight: i,
            lineWidth: n,
            controlHeightLG: a,
            calc: t
        } = e, s = ht(e, {
            uploadThumbnailSize: t(r).mul(2).equal(),
            uploadProgressOffset: t(t(i).div(2)).add(n).equal(),
            uploadPicCardSize: t(a).mul(2.55).equal()
        });
        return [Yt(s), Vt(s), Kt(s), Jt(s), Gt(s), kt(s), Qt(s), Ft(s)]
    }, Zt);

function ve(e) {
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

function $e(e, r) {
    const i = K(r),
        n = i.findIndex(({
            uid: a
        }) => a === e.uid);
    return n === -1 ? i.push(e) : i[n] = e, i
}

function Oe(e, r) {
    const i = e.uid !== void 0 ? "uid" : "name";
    return r.filter(n => n[i] === e[i])[0]
}

function tr(e, r) {
    const i = e.uid !== void 0 ? "uid" : "name",
        n = r.filter(a => a[i] !== e[i]);
    return n.length === r.length ? null : n
}
const rr = (e = "") => {
        const r = e.split("/"),
            n = r[r.length - 1].split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(n) || [""])[0]
    },
    Je = e => e.indexOf("image/") === 0,
    nr = e => {
        if (e.type && !e.thumbUrl) return Je(e.type);
        const r = e.thumbUrl || e.url || "",
            i = rr(r);
        return /^data:image\//.test(r) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(i) ? !0 : !(/^data:/.test(r) || i)
    },
    ne = 200;

function ar(e) {
    return new Promise(r => {
        if (!e.type || !Je(e.type)) {
            r("");
            return
        }
        const i = document.createElement("canvas");
        i.width = ne, i.height = ne, i.style.cssText = `position: fixed; left: 0; top: 0; width: ${ne}px; height: ${ne}px; z-index: 9999; display: none;`, document.body.appendChild(i);
        const n = i.getContext("2d"),
            a = new Image;
        if (a.onload = () => {
                const {
                    width: t,
                    height: s
                } = a;
                let o = ne,
                    d = ne,
                    c = 0,
                    u = 0;
                t > s ? (d = s * (ne / t), u = -(d - o) / 2) : (o = t * (ne / s), c = -(o - d) / 2), n.drawImage(a, c, u, o, d);
                const m = i.toDataURL();
                document.body.removeChild(i), window.URL.revokeObjectURL(a.src), r(m)
            }, a.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
            const t = new FileReader;
            t.onload = () => {
                t.result && typeof t.result == "string" && (a.src = t.result)
            }, t.readAsDataURL(e)
        } else if (e.type.startsWith("image/gif")) {
            const t = new FileReader;
            t.onload = () => {
                t.result && r(t.result)
            }, t.readAsDataURL(e)
        } else a.src = window.URL.createObjectURL(e)
    })
}
const ir = l.forwardRef(({
        prefixCls: e,
        className: r,
        style: i,
        locale: n,
        listType: a,
        file: t,
        items: s,
        progress: o,
        iconRender: d,
        actionIconRender: c,
        itemRender: u,
        isImgUrl: m,
        showPreviewIcon: f,
        showRemoveIcon: h,
        showDownloadIcon: C,
        previewIcon: F,
        removeIcon: v,
        downloadIcon: O,
        extra: S,
        onPreview: $,
        onDownload: y,
        onClose: p
    }, U) => {
        var E, q;
        const {
            status: X
        } = t, [z, Z] = l.useState(X);
        l.useEffect(() => {
            X !== "removed" && Z(X)
        }, [X]);
        const [ee, ie] = l.useState(!1);
        l.useEffect(() => {
            const N = setTimeout(() => {
                ie(!0)
            }, 300);
            return () => {
                clearTimeout(N)
            }
        }, []);
        const J = d(t);
        let oe = l.createElement("div", {
            className: `${e}-icon`
        }, J);
        if (a === "picture" || a === "picture-card" || a === "picture-circle")
            if (z === "uploading" || !t.thumbUrl && !t.url) {
                const N = B(`${e}-list-item-thumbnail`, {
                    [`${e}-list-item-file`]: z !== "uploading"
                });
                oe = l.createElement("div", {
                    className: N
                }, J)
            } else {
                const N = m != null && m(t) ? l.createElement("img", {
                        src: t.thumbUrl || t.url,
                        alt: t.name,
                        className: `${e}-list-item-image`,
                        crossOrigin: t.crossOrigin
                    }) : J,
                    k = B(`${e}-list-item-thumbnail`, {
                        [`${e}-list-item-file`]: m && !m(t)
                    });
                oe = l.createElement("a", {
                    className: k,
                    onClick: j => $(t, j),
                    href: t.url || t.thumbUrl,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, N)
            } const W = B(`${e}-list-item`, `${e}-list-item-${z}`),
            P = typeof t.linkProps == "string" ? JSON.parse(t.linkProps) : t.linkProps,
            Q = (typeof h == "function" ? h(t) : h) ? c((typeof v == "function" ? v(t) : v) || l.createElement(Dt, null), () => p(t), e, n.removeFile, !0) : null,
            se = (typeof C == "function" ? C(t) : C) && z === "done" ? c((typeof O == "function" ? O(t) : O) || l.createElement(Rt, null), () => y(t), e, n.downloadFile) : null,
            fe = a !== "picture-card" && a !== "picture-circle" && l.createElement("span", {
                key: "download-delete",
                className: B(`${e}-list-item-actions`, {
                    picture: a === "picture"
                })
            }, se, Q),
            Y = typeof S == "function" ? S(t) : S,
            V = Y && l.createElement("span", {
                className: `${e}-list-item-extra`
            }, Y),
            g = B(`${e}-list-item-name`),
            x = t.url ? l.createElement("a", Object.assign({
                key: "view",
                target: "_blank",
                rel: "noopener noreferrer",
                className: g,
                title: t.name
            }, P, {
                href: t.url,
                onClick: N => $(t, N)
            }), t.name, V) : l.createElement("span", {
                key: "view",
                className: g,
                onClick: N => $(t, N),
                title: t.name
            }, t.name, V),
            H = (typeof f == "function" ? f(t) : f) && (t.url || t.thumbUrl) ? l.createElement("a", {
                href: t.url || t.thumbUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: N => $(t, N),
                title: n.previewFile
            }, typeof F == "function" ? F(t) : F || l.createElement(jt, null)) : null,
            G = (a === "picture-card" || a === "picture-circle") && z !== "uploading" && l.createElement("span", {
                className: `${e}-list-item-actions`
            }, H, z === "done" && se, Q),
            {
                getPrefixCls: de
            } = l.useContext(Re),
            le = de(),
            pe = l.createElement("div", {
                className: W
            }, oe, x, fe, G, ee && l.createElement(Ke, {
                motionName: `${le}-fade`,
                visible: z === "uploading",
                motionDeadline: 2e3
            }, ({
                className: N
            }) => {
                const k = "percent" in t ? l.createElement(Lt, Object.assign({
                    type: "line",
                    percent: t.percent,
                    "aria-label": t["aria-label"],
                    "aria-labelledby": t["aria-labelledby"]
                }, o)) : null;
                return l.createElement("div", {
                    className: B(`${e}-list-item-progress`, N)
                }, k)
            })),
            te = t.response && typeof t.response == "string" ? t.response : ((E = t.error) === null || E === void 0 ? void 0 : E.statusText) || ((q = t.error) === null || q === void 0 ? void 0 : q.message) || n.uploadError,
            re = z === "error" ? l.createElement(Pt, {
                title: te,
                getPopupContainer: N => N.parentNode
            }, pe) : pe;
        return l.createElement("div", {
            className: B(`${e}-list-item-container`, r),
            style: i,
            ref: U
        }, u ? u(re, t, s, {
            download: y.bind(null, t),
            preview: $.bind(null, t),
            remove: p.bind(null, t)
        }) : re)
    }),
    or = (e, r) => {
        const {
            listType: i = "text",
            previewFile: n = ar,
            onPreview: a,
            onDownload: t,
            onRemove: s,
            locale: o,
            iconRender: d,
            isImageUrl: c = nr,
            prefixCls: u,
            items: m = [],
            showPreviewIcon: f = !0,
            showRemoveIcon: h = !0,
            showDownloadIcon: C = !1,
            removeIcon: F,
            previewIcon: v,
            downloadIcon: O,
            extra: S,
            progress: $ = {
                size: [-1, 2],
                showInfo: !1
            },
            appendAction: y,
            appendActionVisible: p = !0,
            itemRender: U,
            disabled: E
        } = e, q = It(), [X, z] = l.useState(!1), Z = ["picture-card", "picture-circle"].includes(i);
        l.useEffect(() => {
            i.startsWith("picture") && (m || []).forEach(g => {
                !(g.originFileObj instanceof File || g.originFileObj instanceof Blob) || g.thumbUrl !== void 0 || (g.thumbUrl = "", n == null || n(g.originFileObj).then(x => {
                    g.thumbUrl = x || "", q()
                }))
            })
        }, [i, m, n]), l.useEffect(() => {
            z(!0)
        }, []);
        const ee = (g, x) => {
                if (a) return x == null || x.preventDefault(), a(g)
            },
            ie = g => {
                typeof t == "function" ? t(g) : g.url && window.open(g.url)
            },
            J = g => {
                s == null || s(g)
            },
            oe = g => {
                if (d) return d(g, i);
                const x = g.status === "uploading";
                if (i.startsWith("picture")) {
                    const H = i === "picture" ? l.createElement(ze, null) : o.uploading,
                        G = c != null && c(g) ? l.createElement(Tt, null) : l.createElement(Ut, null);
                    return x ? H : G
                }
                return x ? l.createElement(ze, null) : l.createElement(Ot, null)
            },
            W = (g, x, H, G, de) => {
                const le = {
                    type: "text",
                    size: "small",
                    title: G,
                    onClick: pe => {
                        var te, re;
                        x(), l.isValidElement(g) && ((re = (te = g.props).onClick) === null || re === void 0 || re.call(te, pe))
                    },
                    className: `${H}-list-item-action`,
                    disabled: de ? E : !1
                };
                return l.isValidElement(g) ? l.createElement(Te, Object.assign({}, le, {
                    icon: Ae(g, Object.assign(Object.assign({}, g.props), {
                        onClick: () => {}
                    }))
                })) : l.createElement(Te, Object.assign({}, le), l.createElement("span", null, g))
            };
        l.useImperativeHandle(r, () => ({
            handlePreview: ee,
            handleDownload: ie
        }));
        const {
            getPrefixCls: P
        } = l.useContext(Re), Q = P("upload", u), se = P(), fe = B(`${Q}-list`, `${Q}-list-${i}`), Y = l.useMemo(() => vt($t(se), ["onAppearEnd", "onEnterEnd", "onLeaveEnd"]), [se]), V = Object.assign(Object.assign({}, Z ? {} : Y), {
            motionDeadline: 2e3,
            motionName: `${Q}-${Z?"animate-inline":"animate"}`,
            keys: K(m.map(g => ({
                key: g.uid,
                file: g
            }))),
            motionAppear: X
        });
        return l.createElement("div", {
            className: fe
        }, l.createElement(yt, Object.assign({}, V, {
            component: !1
        }), ({
            key: g,
            file: x,
            className: H,
            style: G
        }) => l.createElement(ir, {
            key: g,
            locale: o,
            prefixCls: Q,
            className: H,
            style: G,
            file: x,
            items: m,
            progress: $,
            listType: i,
            isImgUrl: c,
            showPreviewIcon: f,
            showRemoveIcon: h,
            showDownloadIcon: C,
            removeIcon: F,
            previewIcon: v,
            downloadIcon: O,
            extra: S,
            iconRender: oe,
            actionIconRender: W,
            itemRender: U,
            onPreview: ee,
            onDownload: ie,
            onClose: J
        })), y && l.createElement(Ke, Object.assign({}, V, {
            visible: p,
            forceRender: !0
        }), ({
            className: g,
            style: x
        }) => Ae(y, H => ({
            className: B(H.className, g),
            style: Object.assign(Object.assign(Object.assign({}, x), {
                pointerEvents: g ? "none" : void 0
            }), H.style)
        }))))
    },
    sr = l.forwardRef(or);
var lr = function(e, r, i, n) {
    function a(t) {
        return t instanceof i ? t : new i(function(s) {
            s(t)
        })
    }
    return new(i || (i = Promise))(function(t, s) {
        function o(u) {
            try {
                c(n.next(u))
            } catch (m) {
                s(m)
            }
        }

        function d(u) {
            try {
                c(n.throw(u))
            } catch (m) {
                s(m)
            }
        }

        function c(u) {
            u.done ? t(u.value) : a(u.value).then(o, d)
        }
        c((n = n.apply(e, [])).next())
    })
};
const he = `__LIST_IGNORE_${Date.now()}__`,
    cr = (e, r) => {
        const {
            fileList: i,
            defaultFileList: n,
            onRemove: a,
            showUploadList: t = !0,
            listType: s = "text",
            onPreview: o,
            onDownload: d,
            onChange: c,
            onDrop: u,
            previewFile: m,
            disabled: f,
            locale: h,
            iconRender: C,
            isImageUrl: F,
            progress: v,
            prefixCls: O,
            className: S,
            type: $ = "select",
            children: y,
            style: p,
            itemRender: U,
            maxCount: E,
            data: q = {},
            multiple: X = !1,
            hasControlInside: z = !0,
            action: Z = "",
            accept: ee = "",
            supportServerRender: ie = !0,
            rootClassName: J
        } = e, oe = l.useContext(wt), W = f ?? oe, [P, Q] = St(n || [], {
            value: i,
            postState: b => b ?? []
        }), [se, fe] = l.useState("drop"), Y = l.useRef(null), V = l.useRef(null);
        l.useMemo(() => {
            const b = Date.now();
            (i || []).forEach((I, R) => {
                !I.uid && !Object.isFrozen(I) && (I.uid = `__AUTO__${b}_${R}__`)
            })
        }, [i]);
        const g = (b, I, R) => {
                let w = K(I),
                    D = !1;
                E === 1 ? w = w.slice(-1) : E && (D = w.length > E, w = w.slice(0, E)), qe.flushSync(() => {
                    Q(w)
                });
                const T = {
                    file: b,
                    fileList: w
                };
                R && (T.event = R), (!D || b.status === "removed" || w.some(ce => ce.uid === b.uid)) && qe.flushSync(() => {
                    c == null || c(T)
                })
            },
            x = (b, I) => lr(void 0, void 0, void 0, function*() {
                const {
                    beforeUpload: R,
                    transformFile: w
                } = e;
                let D = b;
                if (R) {
                    const T = yield R(b, I);
                    if (T === !1) return !1;
                    if (delete b[he], T === he) return Object.defineProperty(b, he, {
                        value: !0,
                        configurable: !0
                    }), !1;
                    typeof T == "object" && T && (D = T)
                }
                return w && (D = yield w(D)), D
            }),
            H = b => {
                const I = b.filter(D => !D.file[he]);
                if (!I.length) return;
                const R = I.map(D => ve(D.file));
                let w = K(P);
                R.forEach(D => {
                    w = $e(D, w)
                }), R.forEach((D, T) => {
                    let ce = D;
                    if (I[T].parsedFile) D.status = "uploading";
                    else {
                        const {
                            originFileObj: me
                        } = D;
                        let ue;
                        try {
                            ue = new File([me], me.name, {
                                type: me.type
                            })
                        } catch {
                            ue = new Blob([me], {
                                type: me.type
                            }), ue.name = me.name, ue.lastModifiedDate = new Date, ue.lastModified = new Date().getTime()
                        }
                        ue.uid = D.uid, ce = ue
                    }
                    g(ce, w)
                })
            },
            G = (b, I, R) => {
                try {
                    typeof b == "string" && (b = JSON.parse(b))
                } catch {}
                if (!Oe(I, P)) return;
                const w = ve(I);
                w.status = "done", w.percent = 100, w.response = b, w.xhr = R;
                const D = $e(w, P);
                g(w, D)
            },
            de = (b, I) => {
                if (!Oe(I, P)) return;
                const R = ve(I);
                R.status = "uploading", R.percent = b.percent;
                const w = $e(R, P);
                g(R, w, b)
            },
            le = (b, I, R) => {
                if (!Oe(R, P)) return;
                const w = ve(R);
                w.error = b, w.response = I, w.status = "error";
                const D = $e(w, P);
                g(w, D)
            },
            pe = b => {
                let I;
                Promise.resolve(typeof a == "function" ? a(b) : a).then(R => {
                    var w;
                    if (R === !1) return;
                    const D = tr(b, P);
                    D && (I = Object.assign(Object.assign({}, b), {
                        status: "removed"
                    }), P == null || P.forEach(T => {
                        const ce = I.uid !== void 0 ? "uid" : "name";
                        T[ce] === I[ce] && !Object.isFrozen(T) && (T.status = "removed")
                    }), (w = Y.current) === null || w === void 0 || w.abort(I), g(I, D))
                })
            },
            te = b => {
                fe(b.type), b.type === "drop" && (u == null || u(b))
            };
        l.useImperativeHandle(r, () => ({
            onBatchStart: H,
            onSuccess: G,
            onProgress: de,
            onError: le,
            fileList: P,
            upload: Y.current,
            nativeElement: V.current
        }));
        const {
            getPrefixCls: re,
            direction: N,
            upload: k
        } = l.useContext(Re), j = re("upload", O), ge = Object.assign(Object.assign({
            onBatchStart: H,
            onError: le,
            onProgress: de,
            onSuccess: G
        }, e), {
            data: q,
            multiple: X,
            action: Z,
            accept: ee,
            supportServerRender: ie,
            prefixCls: j,
            disabled: W,
            beforeUpload: x,
            onChange: void 0,
            hasControlInside: z
        });
        delete ge.className, delete ge.style, (!y || W) && delete ge.id;
        const je = `${j}-wrapper`,
            [ye, Le, Ze] = er(j, je),
            [et] = Et("Upload", Ct.Upload),
            {
                showRemoveIcon: Pe,
                showPreviewIcon: tt,
                showDownloadIcon: rt,
                removeIcon: nt,
                previewIcon: at,
                downloadIcon: it,
                extra: ot
            } = typeof t == "boolean" ? {} : t,
            st = typeof Pe > "u" ? !W : Pe,
            we = (b, I) => t ? l.createElement(sr, {
                prefixCls: j,
                listType: s,
                items: P,
                previewFile: m,
                onPreview: o,
                onDownload: d,
                onRemove: pe,
                showRemoveIcon: st,
                showPreviewIcon: tt,
                showDownloadIcon: rt,
                removeIcon: nt,
                previewIcon: at,
                downloadIcon: it,
                iconRender: C,
                extra: ot,
                locale: Object.assign(Object.assign({}, et), h),
                isImageUrl: F,
                progress: v,
                appendAction: b,
                appendActionVisible: I,
                itemRender: U,
                disabled: W
            }) : b,
            Se = B(je, S, J, Le, Ze, k == null ? void 0 : k.className, {
                [`${j}-rtl`]: N === "rtl",
                [`${j}-picture-card-wrapper`]: s === "picture-card",
                [`${j}-picture-circle-wrapper`]: s === "picture-circle"
            }),
            xe = Object.assign(Object.assign({}, k == null ? void 0 : k.style), p);
        if ($ === "drag") {
            const b = B(Le, j, `${j}-drag`, {
                [`${j}-drag-uploading`]: P.some(I => I.status === "uploading"),
                [`${j}-drag-hover`]: se === "dragover",
                [`${j}-disabled`]: W,
                [`${j}-rtl`]: N === "rtl"
            });
            return ye(l.createElement("span", {
                className: Se,
                ref: V
            }, l.createElement("div", {
                className: b,
                style: xe,
                onDrop: te,
                onDragOver: te,
                onDragLeave: te
            }, l.createElement(De, Object.assign({}, ge, {
                ref: Y,
                className: `${j}-btn`
            }), l.createElement("div", {
                className: `${j}-drag-container`
            }, y))), we()))
        }
        const lt = B(j, `${j}-select`, {
                [`${j}-disabled`]: W,
                [`${j}-hidden`]: !y
            }),
            Ne = l.createElement("div", {
                className: lt,
                style: xe
            }, l.createElement(De, Object.assign({}, ge, {
                ref: Y
            })));
        return ye(s === "picture-card" || s === "picture-circle" ? l.createElement("span", {
            className: Se,
            ref: V
        }, we(Ne, !!y)) : l.createElement("span", {
            className: Se,
            ref: V
        }, Ne, we()))
    },
    Qe = l.forwardRef(cr);
var ur = function(e, r) {
    var i = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (i[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (i[n[a]] = e[n[a]]);
    return i
};
const dr = l.forwardRef((e, r) => {
        var {
            style: i,
            height: n,
            hasControlInside: a = !1
        } = e, t = ur(e, ["style", "height", "hasControlInside"]);
        return l.createElement(Qe, Object.assign({
            ref: r,
            hasControlInside: a
        }, t, {
            type: "drag",
            style: Object.assign(Object.assign({}, i), {
                height: n
            })
        }))
    }),
    Ye = Qe;
Ye.Dragger = dr;
Ye.LIST_IGNORE = he;
export {
    Ye as U
};