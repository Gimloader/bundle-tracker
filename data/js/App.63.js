function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
function b(c) {
    return c && c.__esModule ? c.default : c;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('.....', function (d, e) {
    var f;
    f = d.exports, Object.defineProperty(f, '__esModule', {
        value: !0,
        configurable: !0
    }), a(d.exports, 'default', function () {
        return _u;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    let r, s, t = u => u;
    var _u = () => {
        const [v, w] = h.useState(!0), [x, y] = h.useState(''), [z, A] = h.useState(''), [B, C] = h.useState(!1), [D, E] = h.useState(!1), {id: F} = (0, o.useParams)();
        return h.useEffect(() => {
            (0, n.request)({
                url: '/api/quote/fetch/' + F,
                success: G => {
                    const {
                        quote: H,
                        plan: I
                    } = G;
                    y(H.name), A(I.name), E(H.converted), C(!!H.renewalForExistingBulk), w(!1);
                },
                error: G => {
                    (0, n.throwMessageError)({
                        e: G,
                        default: { title: 'Error fetching quote.' }
                    }), (0, p.NavigateTo)('/');
                }
            });
        }, []), v ? (0, g.jsx)('div', {
            className: 'hc vc flex maxWidth maxHeight',
            children: (0, g.jsx)(m.default, {})
        }) : (0, g.jsxs)(_v, {
            children: [
                (0, g.jsx)(q.default, { includeSpacer: !0 }),
                (0, g.jsxs)(_w, {
                    children: [
                        (0, g.jsx)(k.default, {
                            id: F,
                            name: x,
                            planName: z,
                            converted: D,
                            isRenewal: B
                        }),
                        (0, g.jsx)(l.default, { id: F })
                    ]
                })
            ]
        });
    };
    const _v = i.default.div(r || (r = t`
  flex: 1;
  width: 100%;
`)), _w = i.default.div(s || (s = t`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: ${ 0 };
`), j.Fonts.SFPro);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q;
    const r = () => (0, f.jsx)('div', { style: { height: 10 } });
    var _s = t => (0, f.jsxs)(_t, {
        children: [
            (0, f.jsx)(j.Title, { title: `Quote for ${ t.name }` }),
            (0, f.jsx)(l.default, {
                name: t.name,
                quoteId: t.id,
                planName: t.planName
            }),
            (0, f.jsx)(i.default, {}),
            (0, f.jsx)(k.default, {
                converted: t.converted,
                quoteId: t.id,
                isRenewal: t.isRenewal
            }),
            (0, f.jsx)(r, {}),
            (0, f.jsx)(o.default, {
                converted: t.converted,
                quoteId: t.id,
                isRenewal: t.isRenewal
            }),
            (0, f.jsx)(r, {}),
            (0, f.jsx)(m.default, { quoteId: t.id }),
            (0, f.jsx)(r, {}),
            (0, f.jsx)(n.default, {
                quoteId: t.id,
                name: t.name,
                isRenewal: t.isRenewal
            }),
            (0, f.jsx)(r, {}),
            (0, f.jsx)(p.default, {})
        ]
    });
    const _t = g.default.div.attrs({ className: 'flex vc flex-column' })(q || (q = (u => u)`
  height: 100%;
  width: 500px;
  margin-right: 20px;
  padding: 20px;
  color: ${ 0 };
  box-sizing: border-box;
`), h.default.Black);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = m => (0, f.jsxs)(g.AntCard, {
        children: [
            (0, f.jsxs)(g.Header, {
                children: [
                    m.isRenewal ? 'Renew' : 'Pay',
                    ' with Purchase Order'
                ]
            }),
            (0, f.jsx)(g.Description, { children: m.isRenewal ? `Upload your purchase order to instantly renew your group's ${ j.COMPANY_NAME } Pro access and get your invoice!` : `Get your group license up and running today! Upload your purchase order to get your group access to ${ j.COMPANY_NAME } Pro!` }),
            (0, f.jsxs)(h.default, {
                onClick: () => {
                    (0, i.requireAuthentication)(() => {
                        (0, k.NavigateTo)(`/group-subscription/pay/${ m.quoteId }/po`);
                    });
                },
                type: 'primary',
                block: !0,
                style: { marginTop: 5 },
                disabled: m.converted,
                children: [
                    m.isRenewal ? 'Renew' : 'Pay',
                    ' with Purchase Order'
                ]
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = l => (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)(g.AntCard, {
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            fontWeight: i.FontWeights.UltraBold,
                            fontSize: 27
                        },
                        children: l.name
                    }),
                    (0, f.jsx)('div', {
                        style: {
                            fontWeight: i.FontWeights.Bold,
                            fontSize: 14,
                            opacity: 0.8
                        },
                        children: l.planName
                    })
                ]
            }),
            (0, f.jsx)('div', { style: { height: 10 } }),
            (0, f.jsx)(j.default, {
                size: 'large',
                block: !0,
                type: 'primary',
                href: (0, h.getQuotePDFLink)(l.quoteId),
                target: '_blank',
                children: 'Download Quote PDF'
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'getQuoteLink', function () {
        return _f;
    }), a(d.exports, 'getQuotePDFLink', function () {
        return _g;
    });
    const _f = g => 'https://www.gimkit.com/quote/' + g, _g = h => '/quote-printable/' + h;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = n => (0, f.jsxs)(g.AntCard, {
        children: [
            (0, f.jsx)(g.Header, { children: 'Quote Link' }),
            (0, f.jsx)(g.Description, { children: 'Come back to this link to view the quote at anytime' }),
            (0, f.jsx)(k.default, {
                value: (0, h.getQuoteLink)(n.quoteId),
                readOnly: !0
            }),
            (0, f.jsx)(j.default, {
                onClick: () => {
                    b(i)((0, h.getQuoteLink)(n.quoteId)), l.default.success('Quote link copied to clipboard.');
                },
                style: { marginTop: 5 },
                block: !0,
                type: 'dashed',
                children: 'Copy Link'
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => (0, f.jsxs)(g.AntCard, {
        children: [
            (0, f.jsx)(g.Header, { children: 'Contact' }),
            (0, f.jsx)(g.Description, { children: k.isRenewal ? 'We\'re here to help! Let us know if you have any questions about your group license renewal.' : 'Let us know if you have any questions about your group quote!' }),
            (0, f.jsxs)(h.default, {
                href: 'mailto:groups@gimkit.com?subject=' + (i.COMPANY_NAME + ' Quote for ' + k.name + ' - ' + k.quoteId),
                block: !0,
                type: 'primary',
                children: [
                    'Contact ',
                    i.COMPANY_NAME,
                    ' Support'
                ]
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = m => (0, f.jsxs)(g.AntCard, {
        children: [
            (0, f.jsxs)(g.Header, {
                children: [
                    m.isRenewal ? 'Renew' : 'Pay',
                    ' with Credit Card'
                ]
            }),
            (0, f.jsx)(g.Description, { children: m.isRenewal ? `Use a credit card to renew your group's ${ j.COMPANY_NAME } Pro license!` : `Pay with credit card to get your group access to ${ j.COMPANY_NAME } Pro!` }),
            (0, f.jsxs)(h.default, {
                onClick: () => {
                    (0, i.requireAuthentication)(() => {
                        (0, k.NavigateTo)(`/group-subscription/pay/${ m.quoteId }/cc`);
                    });
                },
                type: 'primary',
                block: !0,
                style: { marginTop: 5 },
                disabled: m.converted,
                children: [
                    m.isRenewal ? 'Renew' : 'Pay',
                    ' with Credit Card'
                ]
            })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = (0, i.observer)(l => {
        const {
            navigation: {headerHeight: m}
        } = g.useContext(j.default);
        return (0, f.jsx)('div', {
            className: 'flex hc vc',
            style: {
                width: 400,
                height: `calc(100vh - ${ m }px)`
            },
            children: (0, f.jsx)('iframe', {
                src: (0, h.getQuotePDFLink)(l.id) + '/#toolbar=0',
                title: 'Quote',
                style: {
                    width: 400,
                    height: '75%',
                    position: 'fixed'
                },
                frameBorder: 0
            })
        });
    });
});