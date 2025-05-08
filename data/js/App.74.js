function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function () {
        return _o;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    var _o = () => {
        const [p, q] = (0, l.useBoolean)(!1), [r, s] = h.useState(null), [t, u] = h.useState(''), {id: v} = (0, i.useParams)();
        return h.useEffect(() => {
            (0, l.request)({
                url: `/api/games/fetch/${ v }`,
                success: w => {
                    s(w.kit), u(w.creator.name);
                },
                error: () => (0, k.NavigateTo)(j.HOMEPAGE)
            });
        }, []), r ? p ? (0, f.jsx)(n.default, { questions: r.questions }) : (0, f.jsx)(m.default, {
            title: r.title,
            image: r.gif,
            creator: t,
            numberOfQuestions: r.questions.length,
            setToPreview: q
        }) : (0, f.jsx)('div', {
            className: 'maxAll flex-center',
            style: { background: '#303f9f' },
            children: (0, f.jsx)(g.default, { size: 'large' })
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _u;
    });
    var e = b('.....'), f = b('.....');
    b('.....');
    var g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....');
    let o, p, q, r, s, t = u => u;
    var _u = v => (0, e.jsx)(_v, {
        children: (0, e.jsxs)(_w, {
            children: [
                (0, e.jsx)(n.default, {
                    size: 92,
                    blockModalOpen: !0,
                    image: v.image,
                    style: { cursor: 'default' }
                }),
                (0, e.jsx)(_x, { children: v.title }),
                (0, e.jsx)(_y, { children: v.creator }),
                (0, e.jsx)(f.default, {}),
                0 === v.numberOfQuestions ? (0, e.jsx)('div', {
                    style: { fontSize: 18 },
                    children: 'This kit cannot be practiced as it does not contain any questions.'
                }) : (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(k.default, {
                            customFontWeight: j.FontWeights.Bold,
                            type: 'success',
                            size: 'large',
                            onClick: v.setToPreview,
                            ariaLabel: 'Practice',
                            children: 'Practice'
                        }),
                        (0, e.jsxs)(_z, {
                            children: [
                                (0, e.jsxs)('div', {
                                    children: [
                                        v.numberOfQuestions,
                                        ' ',
                                        (0, m.plural)('question', v.numberOfQuestions)
                                    ]
                                }),
                                (0, e.jsx)('div', {
                                    style: { margin: '0px 12px' },
                                    className: 'flex',
                                    children: (0, e.jsx)('i', {
                                        className: 'fas fa-circle',
                                        style: { fontSize: 10 }
                                    })
                                }),
                                (0, e.jsxs)('div', {
                                    children: [
                                        'Powered by ',
                                        h.COMPANY_NAME
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
    const _v = g.default.div.attrs({ className: 'flex-center scroll-y maxAll' })(o || (o = t`
  background: #303f9f;
  color: ${ 0 };
  font-family: ${ 0 };
`), i.default.Black, j.Fonts.SFPro), _w = (0, g.default)(l.default).attrs({ className: 'flex-center flex-column animated fadeIn' })(p || (p = t`
  width: 90%;
  max-width: 700px;
  border-radius: 8px;
  padding: 40px 30px;
  margin: 40px 0px;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 50px rgba(0, 0, 0, 0.4);
`)), _x = g.default.div(q || (q = t`
  margin-top: 14px;
  font-size: 48px;
  font-weight: ${ 0 };
  text-align: center;
`), j.FontWeights.UltraBold), _y = g.default.div(r || (r = t`
  font-size: 24px;
  margin-top: -4px;
`)), _z = g.default.div.attrs({ className: 'flex vc' })(s || (s = t`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  line-height: 1;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _i;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    let h;
    var _i = j => (0, e.jsx)(_j, {
        onClick: j.onClick,
        className: j.className,
        style: j.style,
        children: j.children
    });
    const _j = f.default.div(h || (h = (k => k)`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${ 0 };
  padding: 20px;
`), g.default.White);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _m;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    let k;
    const l = g.default.img.attrs(m => ({ src: m.image }))(k || (k = (m => m)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), m => m.size, m => m.size, m => m.customRightMargin ? m.customRightMargin : 0, m => m.showBorder && `border: solid ${ i.default.Black } 1px;`);
    var _m = n => {
        const [o, p] = f.useState(!1);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(l, {
                    ...n,
                    onClick: q => {
                        q.stopPropagation(), n.onClick && n.onClick(), n.blockModalOpen || p(!0);
                    }
                }),
                (0, e.jsx)(h.default, {
                    open: o,
                    onCancel: q => {
                        q.stopPropagation(), p(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, e.jsx)('img', {
                        src: (0, j.getCloudinaryUrl)(n.image),
                        style: { width: '100%' }
                    })
                })
            ]
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'getCloudinaryUrl', function () {
        return _e;
    });
    const _e = f => {
            const g = _f(f);
            return g ? f.includes('/video/upload') ? `https://${ _g }/video/upload/${ g }` : `https://${ _g }/image/upload/f_auto,fl_lossy,q_auto/${ g }` : f;
        }, _f = g => {
            if (!_j.some(h => g.includes(h)))
                return null;
            if (g.includes(_h) && !g.includes(`/${ _i }/`))
                return null;
            const h = g.split('/');
            if (!h || !h.length || h.length < 2)
                return null;
            const i = h[h.length - 2], j = h[h.length - 1];
            return i && j && i.startsWith('v') ? `${ i }/${ j }` : null;
        }, _g = 'media.gimkit.com', _h = 'res.cloudinary.com', _i = 'gimkit-production', _j = [
            _g,
            _h
        ];
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....'), f = b('.....');
    const g = f.lazy(() => b('.....'));
    var _h = i => (0, e.jsx)(f.Suspense, {
        fallback: i.fallback || null,
        children: (0, e.jsx)(g, { latex: i.latex })
    });
}), b.register('.....', function (c, d) {
    c.exports = Promise.all([
        import('./' + b('.....').resolve('emcKB')),
        import('./' + b('.....').resolve('5OCdz'))
    ]).then(() => b('.....'));
});