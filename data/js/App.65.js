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
        return _B;
    });
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....'), u = b('.....');
    let v, w, x, y = z => z;
    var z;
    let A;
    (z = x || (x = {})).error = 'ERROR', z.waiting = 'WAITING', z.in = 'IN', z.owner = 'OWNER', (A || (A = {})).notTeacher = 'NOT_TEACHER';
    var _B = () => {
        const [C, D] = g.useState(!0), [E, F] = g.useState(null), [G, H] = g.useState(!1), I = (0, o.useParams)().id;
        let J = (0, m.getUrlVariable)('redirect');
        if (J) {
            const K = decodeURIComponent(J);
            (0, s.IsURLFromUs)(C) || (J = null);
        }
        g.useEffect(() => {
            if (!(0, m.isLoggedIn)())
                return J ? void (window.location.href = `/join-class?class=${ I }&location=${ encodeURIComponent(window.location.pathname + window.location.search + window.location.hash) }`) : void (window.location.href = `/join-class?class=${ I }`);
            (0, m.request)({
                url: '/api/v1/groups/request-access',
                method: 'post',
                data: { group: I },
                success: L => {
                    L && L.result && L.result.response && L.result.response === x.in && L.result.existing && J ? window.location.href = decodeURIComponent(J) : (F(L), D(!1));
                },
                error: L => {
                    (0, m.throwMessageError)({
                        e: L,
                        default: {
                            title: 'Error joining class',
                            content: 'Please contact support if this issue persists.'
                        }
                    }), D(!1), (0, r.NavigateTo)(q.DASHBOARD);
                }
            });
        }, []);
        const L = () => {
            G || k.default.confirm({
                title: 'Are you sure you want to switch to a student?',
                content: (0, f.jsxs)('div', {
                    style: { color: i.default.Black },
                    children: [
                        (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsx)('b', { children: 'Students' }),
                                '- you\'re almost there! Keep going!'
                            ]
                        }),
                        (0, f.jsx)('br', {}),
                        (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsx)('b', { children: 'Teachers' }),
                                ' - Don\'t switch! Doing so will cause you to lose many features.'
                            ]
                        })
                    ]
                }),
                onOk: () => {
                    H(!0), (0, m.request)({
                        url: '/api/user/change-to-student',
                        success: () => {
                            k.default.destroyAll(), (0, p.default)({}), k.default.success({
                                title: 'Switched to a student!',
                                content: 'Click \'OK\' to join this class',
                                onOk: () => window.location.reload()
                            });
                        },
                        error: () => {
                            k.default.error({
                                title: 'There was an error switching to a student',
                                content: 'Please try again later',
                                onOk: () => window.location.reload()
                            });
                        },
                        both: () => H(!1)
                    });
                },
                okText: 'Switch to a student',
                cancelText: 'Stay as a teacher'
            });
        };
        return (0, f.jsxs)(_C, {
            children: [
                (0, f.jsx)(t.default, { includeSpacer: !0 }),
                (0, f.jsx)(_D, {
                    children: (() => {
                        if (!(0, m.isLoggedIn)())
                            return null;
                        if (C)
                            return (0, f.jsxs)(f.Fragment, {
                                children: [
                                    (0, f.jsx)(m.Title, { title: 'Class' }),
                                    (0, f.jsx)(l.default, { size: 'large' })
                                ]
                            });
                        if (!E)
                            return null;
                        const {group: M} = E, N = (() => {
                                const {result: O} = E;
                                return O.response === x.error ? O.reason && O.reason === A.notTeacher ? {
                                    icon: 'fas fa-chalkboard-teacher',
                                    iconColor: '#311b92',
                                    response: (0, f.jsx)('span', { children: 'It looks like you created an account as a teacher. Only students can join classes. Switch to a student to join this class.' }),
                                    bottomResponse: (0, f.jsx)(j.default, {
                                        size: 'large',
                                        block: !0,
                                        style: { marginTop: 30 },
                                        type: 'primary',
                                        onClick: L,
                                        loading: G,
                                        children: 'Switch To A Student'
                                    })
                                } : {
                                    icon: 'fas fa-school',
                                    iconColor: 'red',
                                    response: 'There was an error joining this class. Please try again.'
                                } : O.response === x.waiting ? {
                                    icon: 'fad fa-traffic-cone',
                                    iconColor: '#ff8f00',
                                    response: 'You\'ve requested to join this class! Once your teacher accepts you, you\'ll be able to access their live games and assignments.'
                                } : O.response === x.owner ? {
                                    icon: 'fas fa-thumbs-up',
                                    iconColor: '#43a047',
                                    response: 'You\'re in the right place! Once your students visit this link, they\'ll ' + (M.autoAccept ? 'be part of your class!' : 'request to join your class!')
                                } : {
                                    icon: 'fas fa-check',
                                    iconColor: '#43a047',
                                    response: 'You\'re now part of this class! That means you can access live games and assignments from your teacher.',
                                    bottomResponse: J ? (0, f.jsx)(j.default, {
                                        size: 'large',
                                        block: !0,
                                        style: { marginTop: 30 },
                                        type: 'primary',
                                        href: decodeURIComponent(J),
                                        children: 'Go Back'
                                    }) : null
                                };
                            })();
                        return (0, f.jsxs)(f.Fragment, {
                            children: [
                                (0, f.jsx)(m.Title, { title: M.name }),
                                (0, f.jsx)(n.default, {
                                    groupName: M.name,
                                    groupColor: M.color,
                                    groupCreator: M.creator,
                                    icon: N.icon,
                                    iconColor: N.iconColor,
                                    response: N.response,
                                    bottomResponse: N.bottomResponse
                                })
                            ]
                        });
                    })()
                })
            ]
        });
    };
    const _C = h.default.div.attrs({ className: 'maxWidth flex-column' })(v || (v = y`
  background: ${ 0 };
  flex: 1;
`), i.default.Snow), _D = (0, h.default)(u.Centered)(w || (w = y`
  flex: 1;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _s;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....'), h = b('.....');
    let i, j, k, l, m, n, o, p, q, r = s => s;
    var _s = t => {
        const {
            groupName: u,
            groupColor: v,
            groupCreator: w,
            icon: x,
            iconColor: y,
            response: z,
            bottomResponse: A
        } = t;
        return (0, e.jsx)(_t, {
            children: (0, e.jsxs)(_u, {
                children: [
                    (0, e.jsx)(_v, { style: { background: v } }),
                    (0, e.jsx)(_w, { children: u }),
                    (0, e.jsx)(_x, { children: w }),
                    (0, e.jsxs)(_y, {
                        children: [
                            (0, e.jsxs)(_z, {
                                children: [
                                    (0, e.jsx)('div', {
                                        children: (0, e.jsx)(_A, {
                                            className: x,
                                            style: { color: y }
                                        })
                                    }),
                                    (0, e.jsx)('div', { children: (0, e.jsx)(_B, { children: z }) })
                                ]
                            }),
                            A || null
                        ]
                    })
                ]
            })
        });
    };
    const _t = f.default.div.attrs({ className: 'flex hc' })(i || (i = r`
  background: ${ 0 };
  color: ${ 0 };
  align-items: flex-start;
  font-family: ${ 0 };
  flex: 1;
`), g.default.Snow, g.default.Black, h.Fonts.SFPro), _u = f.default.div.attrs({ className: 'flex flex-column hc vc' })(j || (j = r`
  max-width: 700px;
  width: 90%;
  margin-top: 50px;
  margin-bottom: 50px;
`)), _v = f.default.div.attrs({ className: 'light-shadow' })(k || (k = r`
  height: 115px;
  width: 115px;
  border-radius: 8px;
`)), _w = f.default.div(l || (l = r`
  margin-top: 10px;
  text-align: center;
  font-size: 50px;
  font-weight: ${ 0 };
`), h.FontWeights.UltraBold), _x = f.default.div(m || (m = r`
  font-size: 22px;
  margin-top: -4px;
  color: rgba(0, 0, 0, 0.7);
`)), _y = f.default.div.attrs({ className: 'maxWidth' })(n || (n = r`
  background: ${ 0 };
  padding: 30px;
  border-radius: 7px;
  border-style: solid;
  border-width: 2px;
  border-color: ${ 0 };
  margin-top: 25px;
`), g.default.White, g.default.BorderGray), _z = f.default.div.attrs({ className: 'flex maxWidth vc' })(o || (o = r``)), _A = f.default.i(p || (p = r`
  font-size: 40px;
`)), _B = f.default.div(q || (q = r`
  margin-left: 30px;
  font-size: 18px;
`));
}), b.register('.....', function (c, d) {
    a(c.exports, 'IsURLFromUs', function () {
        return _e;
    });
    const _e = f => f.startsWith(window.location.origin) || f.startsWith('/');
}), b.register('.....', function (c, d) {
    a(c.exports, 'Centered', function () {
        return _k;
    }), a(c.exports, 'VerticallyCentered', function () {
        return _l;
    }), a(c.exports, 'CenteredColumn', function () {
        return _m;
    }), a(c.exports, 'VerticalCentered', function () {
        return _n;
    });
    var e = b('.....');
    let f, g, h, i, j = k => k;
    const _k = e.default.div.attrs({ className: 'flex-center' })(f || (f = j``)), _l = e.default.div.attrs({ className: 'flex vc' })(g || (g = j``)), _m = (0, e.default)(_k).attrs({ className: 'flex-column' })(h || (h = j``)), _n = e.default.div.attrs({ className: 'flex vc' })(i || (i = j``));
});