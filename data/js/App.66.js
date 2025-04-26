function a(a, b, o, r) {
    Object.defineProperty(a, b, {
        get: o,
        set: r,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('D/K+w', function(o, r) {
    var c;
    c = o.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(o.exports, 'default', function() {
        return l;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('cR5QE'),
        g = b('iHElh'),
        h = b('PjB0f'),
        i = b('q721a'),
        j = b('GFgjD'),
        k = b('k0s2g17');
    var l = () => (e.useEffect(() => {
        const m = (0, h.getUrlVariable)('token');
        m ? f.default.confirm({
            title: 'Are you sure you want to revoke your child\'s access to Gimkit?',
            onOk: () => {
                (0, h.request)({
                    url: '/api/users/revokeAccess',
                    method: 'post',
                    data: {
                        token: decodeURIComponent(m)
                    },
                    success: () => {
                        f.default.success({
                            content: 'Your student\'s access has been revoked'
                        }), (0, k.NavigateTo)(i.HOMEPAGE);
                    },
                    error: () => (0, j.throwError)({
                        title: 'Error revoking access',
                        content: 'The link might have expired. Please contact support for further assistance'
                    })
                });
            },
            onCancel: () => {
                (0, k.NavigateTo)('/');
            },
            okText: 'Yes',
            cancelText: 'No'
        }) : (0, k.NavigateTo)('/');
    }, []), (0, d.jsx)('div', {
        className: 'maxWidth maxHeight hc vc flex',
        children: (0, d.jsx)(g.default, {
            size: 'large'
        })
    }));
}), b.register('k0s2g17', function(o, r) {
    a(o.exports, 'NavigateTo', function() {
        return d;
    });
    var c = b('Cr/BM');
    const d = a => {
        c.history.push(a);
    };
});