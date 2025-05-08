var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('.....', function (b, c) {
    var d, e, f, g, h;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), e = b.exports, f = 'default', g = function () {
        return _q;
    }, Object.defineProperty(e, f, {
        get: g,
        set: h,
        enumerable: !0,
        configurable: !0
    });
    var i = a('.....'), j = a('.....'), k = a('.....'), l = a('.....'), m = a('.....'), n = a('.....'), o = a('.....'), p = a('.....');
    var _q = () => (j.useEffect(() => {
        const r = (0, m.getUrlVariable)('token');
        r ? k.default.confirm({
            title: 'Are you sure you want to revoke your child\'s access to Gimkit?',
            onOk: () => {
                (0, m.request)({
                    url: '/api/users/revokeAccess',
                    method: 'post',
                    data: { token: decodeURIComponent(r) },
                    success: () => {
                        k.default.success({ content: 'Your student\'s access has been revoked' }), (0, p.NavigateTo)(n.HOMEPAGE);
                    },
                    error: () => (0, o.throwError)({
                        title: 'Error revoking access',
                        content: 'The link might have expired. Please contact support for further assistance'
                    })
                });
            },
            onCancel: () => {
                (0, p.NavigateTo)('/');
            },
            okText: 'Yes',
            cancelText: 'No'
        }) : (0, p.NavigateTo)('/');
    }, []), (0, i.jsx)('div', {
        className: 'maxWidth maxHeight hc vc flex',
        children: (0, i.jsx)(l.default, { size: 'large' })
    }));
});