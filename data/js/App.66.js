function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('xsZwO', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _n(b.exports, 'default', function() {
        return _m;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('YRlpt'),
        h = a('6CIVV'),
        i = a('PMl60'),
        j = a('gs4MT'),
        k = a('INKb2'),
        l = a('jzxyj10');
    var _m = () => (f.useEffect(() => {
        const _n = (0, i.getUrlVariable)('token');
        _n ? g.default.confirm({
            title: 'Are you sure you want to revoke your child\'s access to Gimkit?',
            onOk: () => {
                (0, i.request)({
                    url: '/api/users/revokeAccess',
                    method: 'post',
                    data: {
                        token: decodeURIComponent(_n)
                    },
                    success: () => {
                        g.default.success({
                            content: 'Your student\'s access has been revoked'
                        }), (0, l.NavigateTo)(j.HOMEPAGE);
                    },
                    error: () => (0, k.throwError)({
                        title: 'Error revoking access',
                        content: 'The link might have expired. Please contact support for further assistance'
                    })
                });
            },
            onCancel: () => {
                (0, l.NavigateTo)('/');
            },
            okText: 'Yes',
            cancelText: 'No'
        }) : (0, l.NavigateTo)('/');
    }, []), (0, e.jsx)('div', {
        className: 'maxWidth maxHeight hc vc flex',
        children: (0, e.jsx)(h.default, {
            size: 'large'
        })
    }));
}), a.register('jzxyj10', function(b, c) {
    e(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = e => {
        d.history.push(e);
    };
});