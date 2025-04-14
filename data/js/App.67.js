function e(e, t, o, r) {
    Object.defineProperty(e, t, {
        get: o,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("hsBOu", (function(o, r) {
    var s;
    s = o.exports, Object.defineProperty(s, "__esModule", {
        value: !0,
        configurable: !0
    }), e(o.exports, "default", (function() {
        return g
    }));
    var n = t("hxEiv"),
        a = t("fywoC"),
        i = t("fBuQJ"),
        c = t("gHmyG"),
        u = t("iMOcM"),
        l = t("b1oE9"),
        f = t("sgWtV"),
        d = t("iROck");
    var g = () => (a.useEffect((() => {
        const e = (0, u.getUrlVariable)("token");
        e ? i.default.confirm({
            title: "Are you sure you want to revoke your child's access to Gimkit?",
            onOk: () => {
                (0, u.request)({
                    url: "/api/users/revokeAccess",
                    method: "post",
                    data: {
                        token: decodeURIComponent(e)
                    },
                    success: () => {
                        i.default.success({
                            content: "Your student's access has been revoked"
                        }), (0, d.NavigateTo)(l.HOMEPAGE)
                    },
                    error: () => (0, f.throwError)({
                        title: "Error revoking access",
                        content: "The link might have expired. Please contact support for further assistance"
                    })
                })
            },
            onCancel: () => {
                (0, d.NavigateTo)("/")
            },
            okText: "Yes",
            cancelText: "No"
        }) : (0, d.NavigateTo)("/")
    }), []), (0, n.jsx)("div", {
        className: "maxWidth maxHeight hc vc flex",
        children: (0, n.jsx)(c.default, {
            size: "large"
        })
    }))
})), t.register("iROck", (function(o, r) {
    e(o.exports, "NavigateTo", (function() {
        return n
    }));
    var s = t("bd8je");
    const n = e => {
        s.history.push(e)
    }
}));