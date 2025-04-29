function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('CoFIn', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _n;
    });
    var f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('AE7vR'),
        i = b('yruHD'),
        j = b('quE27'),
        k = b('nKuOQ'),
        l = b('lptuh'),
        m = b('KxkP827');
    var _n = () => (g.useEffect(() => {
        const o = (0, j.getUrlVariable)('token');
        o ? h.default.confirm({
            title: 'Are you sure you want to revoke your child\'s access to Gimkit?',
            onOk: () => {
                (0, j.request)({
                    url: '/api/users/revokeAccess',
                    method: 'post',
                    data: {
                        token: decodeURIComponent(o)
                    },
                    success: () => {
                        h.default.success({
                            content: 'Your student\'s access has been revoked'
                        }), (0, m.NavigateTo)(k.HOMEPAGE);
                    },
                    error: () => (0, l.throwError)({
                        title: 'Error revoking access',
                        content: 'The link might have expired. Please contact support for further assistance'
                    })
                });
            },
            onCancel: () => {
                (0, m.NavigateTo)('/');
            },
            okText: 'Yes',
            cancelText: 'No'
        }) : (0, m.NavigateTo)('/');
    }, []), (0, f.jsx)('div', {
        className: 'maxWidth maxHeight hc vc flex',
        children: (0, f.jsx)(i.default, {
            size: 'large'
        })
    }));
}), b.register('KxkP827', function(c, d) {
    a(c.exports, 'NavigateTo', function() {
        return _f;
    });
    var e = b('qb3Ih');
    const _f = a => {
        e.history.push(a);
    };
});