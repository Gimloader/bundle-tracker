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
        return _s;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    let r;
    var _s = () => (h.useEffect(() => {
        const t = (0, n.getUrlVariable)('tab');
        t && t === o.default.billing && (j.default.navigation.currentTab = o.default.billing);
    }, []), (0, g.jsxs)(g.Fragment, {
        children: [
            (0, g.jsx)(i.default.Provider, {
                value: j.default,
                children: (0, g.jsxs)(p.default, {
                    className: 'flex-column',
                    children: [
                        (0, g.jsx)(q.default, {}),
                        (0, g.jsxs)(_t, {
                            children: [
                                (0, g.jsx)(l.default, {}),
                                (0, g.jsx)(m.default, {})
                            ]
                        })
                    ]
                })
            }),
            (0, g.jsx)(n.Title, { title: 'Settings' })
        ]
    }));
    const _t = k.default.div.attrs({ className: 'flex' })(r || (r = (u => u)`
  flex: 1;
  overflow: hidden;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....'), v = c('.....');
    let w, x, y = z => z;
    var _z = (0, j.observer)(() => {
        const {navigation: A} = g.useContext(k.default), B = C => A.currentTab === C, C = D => A.currentTab = D, D = !(0, m.isStudent)();
        return (0, f.jsxs)(_A, {
            children: [
                (0, f.jsx)(u.default, {}),
                (0, f.jsx)(v.default, {
                    title: (0, m.isStudent)() ? 'General Settings' : 'Account Information',
                    icon: q.default,
                    onClick: () => C(l.default.accountInformation),
                    selected: B(l.default.accountInformation)
                }),
                !(0, m.isStudent)() && (0, f.jsx)(v.default, {
                    title: 'Game Settings',
                    icon: o.default,
                    onClick: () => C(l.default.gameSettings),
                    selected: B(l.default.gameSettings)
                }),
                D && (0, f.jsx)(v.default, {
                    title: 'Plan & Billing',
                    icon: n.default,
                    selected: B(l.default.billing),
                    onClick: () => C(l.default.billing)
                }),
                !(0, m.isStudent)() && (0, f.jsx)(v.default, {
                    title: 'Help & Support',
                    icon: p.default,
                    selected: B(l.default.support),
                    onClick: () => C(l.default.support)
                }),
                (0, m.isStudent)() ? null : (0, f.jsxs)(_B, {
                    children: [
                        'Looking to manage a group license?',
                        (0, f.jsx)('br', {}),
                        (0, f.jsx)('br', {}),
                        'We moved license management to a dedicated page:',
                        (0, f.jsx)('br', {}),
                        (0, f.jsx)('br', {}),
                        (0, f.jsxs)(r.default, {
                            to: s.GROUP_DASHBOARD,
                            style: { fontWeight: t.FontWeights.Bold },
                            children: [
                                (0, m.getDomain)(),
                                '/groups'
                            ]
                        })
                    ]
                })
            ]
        });
    });
    const _A = h.default.div.attrs({ className: 'scroll-y' })(w || (w = y`
  height: 100%;
  width: 320px;
  border-right: 1px solid ${ 0 };
`), i.default.BorderGray), _B = h.default.div(x || (x = y`
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.07);
  font-size: 12px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 22px;
  width: 84%;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'PlayCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [
                {
                    tag: 'path',
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z' }
                }
            ]
        },
        name: 'play-circle',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'QuestionCircleOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [
                {
                    tag: 'path',
                    attrs: { d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' }
                },
                {
                    tag: 'path',
                    attrs: { d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z' }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UserOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z' }
                }]
        },
        name: 'user',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    c('.....');
    var _h = i => i.external || !i.to ? (0, f.jsx)('a', {
        href: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        onKeyPress: j => {
            i.onClick && 'Enter' === j.key && (j.preventDefault(), i.onClick());
        },
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    }) : (0, f.jsx)(g.Link, {
        to: i.to,
        tabIndex: Number(i.tabIndex || '0'),
        onClick: i.onClick,
        className: i.className,
        target: i.target,
        style: i.style,
        children: i.children
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    const o = '#1890FF', p = h.default.div(k || (k = n`
  width: 100%;
  box-sizing: border-box;
  font-family: ${ 0 };
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${ 0 }px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${ 0 };
  color: ${ 0 };
  ${ 0 }
  transition: all 0.25s;
  &:hover {
    color: ${ 0 };
  }
`), j.Fonts.SFPro, 14, q => q.selected && !q.blockBackground ? '#E5F7FE' : i.default.White, q => q.selected ? o : 'rgba(0,0,0,.65)', q => q.selected && !q.blockStripe && 'border-right: 3px solid ' + o + ';', o), q = h.default.div.attrs({ className: 'flex vc maxWidth' })(l || (l = n``)), r = h.default.div(m || (m = n``));
    class s extends g.Component {
        render() {
            const {
                    title: t,
                    onClick: u,
                    selected: v,
                    blockStripe: w,
                    blockBackground: x
                } = this.props, y = this.props.icon;
            return (0, f.jsxs)(p, {
                selected: v,
                blockStripe: w,
                blockBackground: x,
                onClick: u,
                className: this.props.className,
                ...this.props.style,
                children: [
                    y ? (0, f.jsx)(y, {
                        style: {
                            fontSize: 14,
                            marginRight: 10
                        },
                        theme: this.props.customIconColor ? 'twoTone' : 'outlined',
                        twoToneColor: this.props.customIconColor || ''
                    }) : null,
                    (0, f.jsxs)(q, {
                        children: [
                            (0, f.jsx)(r, { children: t }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _t = s;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    let s;
    var _t = (0, l.observer)(() => {
        const {navigation: u} = g.useContext(m.default);
        return (0, f.jsxs)(_u, {
            children: [
                (0, f.jsx)(r.default, {}),
                (() => {
                    const {currentTab: v} = u;
                    return v === n.default.accountInformation ? (0, f.jsx)(i.default, {}) : v === n.default.gameSettings ? (0, f.jsx)(o.default, {}) : v === n.default.billing ? (0, f.jsx)(p.default, {}) : v === n.default.support ? (0, f.jsx)(q.default, {}) : null;
                })()
            ]
        });
    });
    const _u = h.default.div.attrs({ className: 'scroll' })(s || (s = (v => v)`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  font-family: ${ 0 };
  color: ${ 0 };
`), j.Fonts.SFPro, k.default.Black);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    let p;
    const q = r => (0, f.jsx)(i.default, {
        style: {
            fontFamily: h.Fonts.SFPro,
            color: k.default.Black,
            marginBottom: 20
        },
        ...r
    });
    var _r = () => (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)(_s, { children: '\uD83D\uDC4B Name' }),
                    (0, f.jsx)(q, { children: (0, f.jsx)(j.default, {}) }),
                    (0, f.jsx)(_s, { children: '\uD83D\uDD11 Authentication' }),
                    (0, f.jsx)(q, { children: (0, f.jsx)(l.default, {}) }),
                    !(0, o.isStudent)() && (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)(_s, { children: '\uD83C\uDFEB School' }),
                            (0, f.jsx)(q, { children: (0, f.jsx)(n.default, {}) })
                        ]
                    })
                ]
            }),
            (0, f.jsx)(_s, { children: (0, o.isStudent)() ? '\u2328️ Manage' : '\uD83D\uDD12 Account' }),
            (0, f.jsx)(q, { children: (0, f.jsx)(m.default, {}) })
        ]
    });
    const _s = g.default.div(p || (p = (t => t)`
  font-size: 30px;
  font-weight: ${ 0 };
  margin-bottom: 5px;
`), h.FontWeights.UltraBold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'Description', function () {
        return _t;
    }), a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    let o, p, q = r => r;
    var _r = () => {
        const [s, t] = g.useState((0, n.getUser)().firstName), [u, v] = g.useState((0, n.getUser)().lastName), w = (0, n.isStudent)() && (0, n.getUser)().lastName.length < 2 ? 'Last Initial' : 'Last Name', x = (0, n.isStudent)() && (0, n.getUser)().lastName.length < 2 ? 1 : m.MAX_LENGTH_LAST_NAME;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)(_s, {
                    children: [
                        (0, f.jsx)(_t, { children: 'First Name' }),
                        (0, f.jsx)(j.default, {
                            onBlur: () => {
                                s && (0, k.default)({
                                    changes: [{
                                            key: l.informationTypes.firstName,
                                            value: s
                                        }]
                                });
                            },
                            onChange: y => t(y.target.value),
                            value: s,
                            maxLength: m.MAX_LENGTH_FIRST_NAME
                        })
                    ]
                }),
                (0, f.jsxs)(_s, {
                    children: [
                        (0, f.jsx)(_t, { children: w }),
                        (0, f.jsx)(j.default, {
                            onBlur: () => {
                                u && (0, k.default)({
                                    changes: [{
                                            key: l.informationTypes.lastName,
                                            value: u
                                        }]
                                });
                            },
                            onChange: y => v(y.target.value),
                            value: u,
                            maxLength: x
                        })
                    ]
                })
            ]
        });
    };
    const _s = h.default.div(o || (o = q`
  margin-bottom: 8px;
`)), _t = h.default.div(p || (p = q`
  font-weight: ${ 0 };
  font-size: 18px;
`), i.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = i => {
        (0, f.request)({
            url: '/api/users/update-information',
            method: 'post',
            data: { changes: i.changes },
            success: j => {
                i.onSuccess && i.onSuccess(j), (0, g.default)({});
            },
            error: j => {
                i.onError && i.onError(j);
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'informationTypes', function () {
        return _h;
    }), a(d.exports, 'default', function () {
        return _z;
    });
    var f = c('.....'), g = c('.....');
    const _h = {
            email: 'EMAIL',
            password: 'PASSWORD',
            accountPassword: 'ACCOUNT_PASSWORD',
            firstName: 'FIRST_NAME',
            lastName: 'LAST_NAME',
            accountType: 'ACCOUNT_TYPE',
            country: 'COUNTRY',
            areaOfExpertise: 'AREA_OF_EXPERTISE',
            gradeLevel: 'GRADE_LEVEL',
            organization: 'ORGANIZATION',
            acceptedLatestPolicies: 'ACCEPTED_LATEST_POLICIES',
            schoolId: 'SCHOOL_ID',
            districtId: 'DISTRICT_ID'
        }, i = {
            userExists: !1,
            email: '',
            accountType: null,
            googleToken: '',
            firstName: '',
            lastName: '',
            password: '',
            schoolId: '',
            districtId: '',
            country: '',
            areaOfExpertise: '',
            gradeLevel: '',
            organization: '',
            acceptsLatestPolicies: !1,
            authenticated: !1
        }, {
            userExists: j,
            email: k,
            accountType: l,
            googleToken: m,
            firstName: n,
            lastName: o,
            password: p,
            schoolId: q,
            districtId: r,
            country: s,
            areaOfExpertise: t,
            gradeLevel: u,
            organization: v,
            acceptsLatestPolicies: w,
            authenticated: x
        } = i;
    class y {
        constructor() {
            this.userExists = j, this.email = k, this.accountType = l, this.googleToken = m, this.firstName = n, this.lastName = o, this.password = p, this.schoolId = q, this.districtId = r, this.country = s, this.areaOfExpertise = t, this.gradeLevel = u, this.organization = v, this.acceptsLatestPolicies = w, this.authenticated = x, this.informationNeeded = g.observable.array([_h.email]), this.reset = () => {
                Object.keys(i).forEach(z => this[z] = i[z]), this.informationNeeded.replace([_h.email]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], y.prototype, 'userExists', void 0), (0, f.__decorate)([g.observable], y.prototype, 'email', void 0), (0, f.__decorate)([g.observable], y.prototype, 'accountType', void 0), (0, f.__decorate)([g.observable], y.prototype, 'googleToken', void 0), (0, f.__decorate)([g.observable], y.prototype, 'firstName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'lastName', void 0), (0, f.__decorate)([g.observable], y.prototype, 'password', void 0), (0, f.__decorate)([g.observable], y.prototype, 'schoolId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'districtId', void 0), (0, f.__decorate)([g.observable], y.prototype, 'country', void 0), (0, f.__decorate)([g.observable], y.prototype, 'areaOfExpertise', void 0), (0, f.__decorate)([g.observable], y.prototype, 'gradeLevel', void 0), (0, f.__decorate)([g.observable], y.prototype, 'organization', void 0), (0, f.__decorate)([g.observable], y.prototype, 'acceptsLatestPolicies', void 0), (0, f.__decorate)([g.observable], y.prototype, 'authenticated', void 0), (0, f.__decorate)([g.observable], y.prototype, 'informationNeeded', void 0), (0, f.__decorate)([g.action], y.prototype, 'reset', void 0);
    var _z = y;
}), c.register('.....', function (d, e) {
    a(d.exports, 'MAX_LENGTH_FIRST_NAME', function () {
        return _q;
    }), a(d.exports, 'MAX_LENGTH_LAST_NAME', function () {
        return _r;
    }), a(d.exports, 'Title', function () {
        return _s;
    }), a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    const _q = 20, _r = 25, _s = t => (0, f.jsx)('div', {
            style: {
                fontFamily: i.Fonts.SFPro,
                fontWeight: i.FontWeights.Bold,
                color: j.default.Black,
                fontSize: 18
            },
            children: t.children
        }), t = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var _u = () => {
        const {login: v} = g.useContext(h.default), [w, x] = g.useState(v.firstName), [y, z] = g.useState(v.lastName), [A, B] = g.useState(v.password), C = () => {
                let D = !0;
                return v.informationNeeded.includes(n.informationTypes.firstName) && (w || (D = !1)), v.informationNeeded.includes(n.informationTypes.lastName) && (y || (D = !1)), v.informationNeeded.includes(n.informationTypes.accountPassword) && (!A || A.length < 6) && (D = !1), D;
            }, D = () => {
                C() && (w && (v.firstName = w), y && (v.lastName = y), A && (v.password = A), v.informationNeeded.replace(v.informationNeeded.filter(E => E !== n.informationTypes.firstName && E !== n.informationTypes.lastName && E !== n.informationTypes.accountPassword)));
            }, E = v.accountType === p.default.student;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(_s, { children: 'First Name' }),
                (0, f.jsx)(l.default, {
                    maxLength: _q,
                    style: t,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: F => x(F.target.value),
                    onPressEnter: D,
                    autoFocus: !0
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
                (0, f.jsxs)(_s, {
                    children: [
                        'Last ',
                        E ? 'Initial' : 'Name'
                    ]
                }),
                (0, f.jsx)(l.default, {
                    maxLength: E ? 1 : _r,
                    style: t,
                    size: 'large',
                    placeholder: `Last ${ E ? 'Initial' : 'Name' } here...`,
                    onChange: F => z(F.target.value),
                    onPressEnter: D
                }),
                v.informationNeeded.includes(n.informationTypes.accountPassword) && (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)(k.default, {}),
                        (0, f.jsx)(_s, { children: 'Password' }),
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: 12,
                                marginTop: -5,
                                marginBottom: 4
                            },
                            children: 'Must contain at least 6 characters'
                        }),
                        (0, f.jsx)(l.default.Password, {
                            style: t,
                            onChange: F => B(F.target.value),
                            placeholder: 'Password here...',
                            size: 'large',
                            maxLength: 96,
                            onPressEnter: D
                        })
                    ]
                }),
                (0, f.jsx)(k.default, {}),
                (0, f.jsx)(m.default, {
                    disabled: !C(),
                    onClick: D,
                    style: { width: '100%' },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, f.jsx)('div', { style: { height: 10 } }),
                !E && (0, f.jsx)(o.default, { link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061' })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = f.createContext(g.default);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = {
        login: new (0, f.default)(),
        navigation: new (0, g.default)()
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....');
    const h = {
            currentStage: c('.....').default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: '',
            classJoiningId: '',
            classJoiningName: '',
            classJoiningTeacherName: ''
        }, {
            currentStage: i,
            emailSignInBlocked: j,
            creatingAccount: k,
            loggingIn: l,
            updatingAccountInformation: m,
            loginError: n,
            redirectUri: o,
            classJoiningId: p,
            classJoiningName: q,
            classJoiningTeacherName: r
        } = h;
    class s {
        constructor() {
            this.currentStage = i, this.emailSignInBlocked = j, this.creatingAccount = k, this.loggingIn = l, this.updatingAccountInformation = m, this.loginError = n, this.redirectUri = o, this.classJoiningId = p, this.classJoiningName = q, this.classJoiningTeacherName = r, this.reset = () => {
                Object.keys(h).forEach(t => this[t] = h[t]);
            }, (0, g.makeObservable)(this);
        }
    }
    (0, f.__decorate)([g.observable], s.prototype, 'currentStage', void 0), (0, f.__decorate)([g.observable], s.prototype, 'emailSignInBlocked', void 0), (0, f.__decorate)([g.observable], s.prototype, 'creatingAccount', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loggingIn', void 0), (0, f.__decorate)([g.observable], s.prototype, 'updatingAccountInformation', void 0), (0, f.__decorate)([g.observable], s.prototype, 'loginError', void 0), (0, f.__decorate)([g.observable], s.prototype, 'redirectUri', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningId', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningName', void 0), (0, f.__decorate)([g.observable], s.prototype, 'classJoiningTeacherName', void 0), (0, f.__decorate)([g.action], s.prototype, 'reset', void 0);
    var _t = s;
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'default', function () {
        return _h;
    }), (g = f || (f = {})).email = 'email', g.password = 'password', g.accountType = 'accountType', g.studentSpecificInfo = 'studentSpecificInfo', g.nameAndPassword = 'nameAndPassword', g.school = 'school', g.educatorSpecificInfo = 'educatorSpecificInfo', g.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', g.acceptPolicies = 'acceptPolicies', g.verifyClass = 'verifyClass';
    var _h = f;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....');
    var _i = (0, g.observer)(j => (0, f.jsx)(h.default, {
        disabled: j.disabled,
        size: j.size || 'middle',
        type: 'primary',
        onClick: j.onClick,
        style: Object.assign({ width: '100%' }, j.style),
        loading: j.loading,
        children: j.children
    }));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => (0, f.jsxs)('div', {
        style: { justifyContent: 'space-between' },
        className: 'flex maxWidth',
        children: [
            (0, f.jsx)('div', {}),
            (0, f.jsx)(g.default, { link: i.link })
        ]
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => (0, f.jsx)(i.default, {
        title: 'Learn more on why we collect this data',
        children: (0, f.jsx)(h.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, f.jsx)(g.default, {}),
            href: k.link || '',
            target: '_blank'
        })
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LockOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z' }
                }]
        },
        name: 'lock',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'default', function () {
        return _h;
    }), (g = f || (f = {})).educator = 'educator', g.student = 'student', g.guardian = 'guardian', g.nonSchool = 'nonSchool';
    var _h = f;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = () => {
        const [p, q] = g.useState((0, m.getUser)().email), [r, s] = g.useState(!1), [t, u] = g.useState(!1), v = () => s(!r), w = (0, m.getUser)().passwordless;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(j.Description, { children: 'Email' }),
                (0, f.jsx)(h.default, {
                    readOnly: !0,
                    value: p,
                    onFocus: v
                }),
                (0, f.jsxs)('div', {
                    style: { justifyContent: 'space-between' },
                    className: 'maxWidth flex',
                    children: [
                        (0, f.jsx)('div', {}),
                        (0, f.jsx)(n.default, {
                            style: {
                                marginTop: 9,
                                fontSize: 14
                            },
                            onClick: () => u(!0),
                            children: w ? 'Add password' : 'Change password'
                        })
                    ]
                }),
                r && (0, f.jsx)(k.default, {
                    onEmailChange: x => {
                        i.default.success({
                            title: 'Email changed!',
                            content: `Email changed to "${ x }"`
                        }), q(x), s(!1);
                    },
                    close: v
                }),
                (0, f.jsx)(l.default, {
                    open: t,
                    close: () => u(!1),
                    defaultEmail: (0, m.getUser)().email
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q;
    var r;
    (r = q || (q = {})).newEmail = 'newEmail', r.code = 'code';
    var _s = t => {
        const [u, v] = g.useState(q.newEmail), [w, x] = g.useState(''), [y, z] = g.useState(!1), [A, B] = g.useState(!1), [C, D] = g.useState(''), [E, F] = g.useState(''), [G, H] = g.useState(null), I = J => x(J.target.value.toLowerCase()), J = w && (0, l.validateEmail)(w) && w !== (0, o.getUser)().email, K = () => {
                J && (z(!0), (0, o.request)({
                    url: '/api/users/register/email-info',
                    method: 'post',
                    data: { email: w },
                    success: L => {
                        L.accountExists ? (H(`Account already exists with email "${ w }"`), z(!1)) : (0, o.request)({
                            url: '/api/users/requestEmailChange',
                            method: 'post',
                            data: { emailToChangeTo: w },
                            success: M => {
                                D(M.encryptedToken), v(q.code);
                            },
                            error: M => H(M),
                            both: () => z(!1)
                        });
                    },
                    error: () => z(!1)
                }));
            }, L = M => F(M.target.value), M = !!E, N = () => {
                M && (B(!0), (0, o.request)({
                    url: '/api/users/changeEmail',
                    method: 'post',
                    data: {
                        changeToken: C,
                        encryptCode: E
                    },
                    success: () => {
                        (0, p.default)({ onSuccess: () => t.onEmailChange(w) });
                    },
                    error: O => H(O),
                    both: () => B(!1)
                }));
            };
        return (0, f.jsxs)(j.default, {
            style: {
                fontFamily: k.Fonts.SFPro,
                color: m.default.Black
            },
            footer: null,
            open: !0,
            onCancel: t.close,
            closable: !0,
            children: [
                u === q.newEmail ? (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                fontWeight: k.FontWeights.UltraBold,
                                fontSize: 31
                            },
                            children: 'New Account Email'
                        }),
                        (0, f.jsx)(i.default, {
                            onChange: I,
                            placeholder: 'please-do-not-ice-me@gimkit.com',
                            size: 'large',
                            value: w,
                            autoFocus: !0,
                            onPressEnter: K,
                            maxLength: 256
                        }),
                        (0, f.jsx)(h.default, {
                            type: 'primary',
                            disabled: !J,
                            style: {
                                width: '100%',
                                marginTop: 7
                            },
                            size: 'large',
                            onClick: K,
                            loading: y,
                            children: 'Continue'
                        })
                    ]
                }) : u === q.code ? (0, f.jsxs)(f.Fragment, {
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                fontWeight: k.FontWeights.UltraBold,
                                fontSize: 31
                            },
                            children: 'Enter Code'
                        }),
                        (0, f.jsxs)('div', {
                            style: { marginBottom: 9 },
                            children: [
                                'A code was just sent to ',
                                (0, f.jsx)('b', { children: w }),
                                '. Please check that email and enter it here. The code expires in 30 minutes.'
                            ]
                        }),
                        (0, f.jsx)(i.default, {
                            onChange: L,
                            placeholder: 'Enter code here...',
                            size: 'large',
                            value: E,
                            autoFocus: !0,
                            onPressEnter: N
                        }),
                        (0, f.jsx)(h.default, {
                            type: 'primary',
                            disabled: !M,
                            style: {
                                width: '100%',
                                marginTop: 7
                            },
                            size: 'large',
                            onClick: N,
                            loading: A,
                            children: 'Submit'
                        })
                    ]
                }) : null,
                (0, f.jsx)(n.default, {
                    error: G,
                    style: { marginTop: 10 }
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => i.error ? (0, f.jsx)(g.default, {
        message: 'Error',
        style: i.style,
        type: 'error',
        description: i.error && i.error.message && i.error.message.text ? i.error.message.text : 'string' == typeof i.error ? i.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = () => {
        const p = (0, l.getUser)();
        let q = [];
        var r;
        return q.push([
            'Account Email',
            p.email
        ]), q.push([
            'Account Type',
            (r = p.accountType, r === g.default.educator ? 'Educator' : r === g.default.student ? 'Student' : r === g.default.guardian ? 'Parent/Guardian' : r === g.default.nonSchool ? 'Other' : '')
        ]), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 22,
                        fontWeight: h.FontWeights.Bold
                    },
                    children: 'Account Information'
                }),
                (0, f.jsx)('div', {
                    className: 'flex maxWidth between',
                    style: { alignItems: 'flex-end' },
                    children: (0, f.jsx)('div', {
                        style: { marginTop: 10 },
                        children: q.map(s => (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsxs)('b', {
                                    children: [
                                        s[0],
                                        ':'
                                    ]
                                }),
                                ' ',
                                s[1]
                            ]
                        }, s[0]))
                    })
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)('div', {
                    children: (0, f.jsxs)(i.default, {
                        children: [
                            (0, f.jsx)(i.default.Panel, {
                                header: 'Support',
                                children: (0, f.jsx)(m.default, {
                                    onClick: () => (0, l.request)({
                                        url: '/api/user/request-info',
                                        success: s => {
                                            k.default.info({
                                                title: 'Information',
                                                content: (0, f.jsx)('div', {
                                                    children: Object.keys(s).map(t => (0, f.jsxs)('div', {
                                                        children: [
                                                            (0, f.jsx)('span', {
                                                                style: { fontWeight: h.FontWeights.Bold },
                                                                children: t
                                                            }),
                                                            ':',
                                                            ' ',
                                                            s[t],
                                                            (0, f.jsx)('br', {})
                                                        ]
                                                    }, `info-item-${ t }`))
                                                })
                                            });
                                        }
                                    }),
                                    children: 'Information Gimkit has collected on me'
                                })
                            }, 'support'),
                            (0, f.jsx)(i.default.Panel, {
                                header: 'Danger Zone',
                                children: (0, f.jsx)(m.default, {
                                    to: n.DELETE_ACCOUNT,
                                    children: 'Delete my account'
                                })
                            }, 'danger')
                        ]
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = c('.....').default;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _s;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....');
    const r = i.forwardRef((s, t) => {
        const {
                getPrefixCls: u,
                direction: v
            } = i.useContext(l.ConfigContext), w = i.useContext(o.default), {
                prefixCls: x,
                className: y,
                rootClassName: z,
                bordered: A = !0,
                ghost: B,
                size: C,
                expandIconPosition: D = 'start'
            } = s, E = C || w || 'middle', F = u('collapse', x), G = u(), [H, I] = (0, q.default)(F), J = i.useMemo(() => 'left' === D ? 'start' : 'right' === D ? 'end' : D, [D]), K = b(g)(`${ F }-icon-position-${ J }`, {
                [`${ F }-borderless`]: !A,
                [`${ F }-rtl`]: 'rtl' === v,
                [`${ F }-ghost`]: !!B,
                [`${ F }-${ E }`]: 'middle' !== E
            }, y, z, I), L = Object.assign(Object.assign({}, (0, m.default)(G)), {
                motionAppear: !1,
                leavedClassName: `${ F }-content-hidden`
            });
        return H(i.createElement(h.default, Object.assign({
            ref: t,
            openMotion: L
        }, (0, k.default)(s, ['rootClassName']), {
            expandIcon: function () {
                let M = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {expandIcon: N} = s, O = N ? N(M) : i.createElement(f.default, { rotate: M.isActive ? 90 : void 0 });
                return (0, n.cloneElement)(O, () => ({ className: b(g)(O.props.className, `${ F }-arrow`) }));
            },
            prefixCls: F,
            className: K
        }), (() => {
            const {children: M} = s;
            return (0, j.default)(M).map((N, O) => {
                var P;
                if (null === (P = N.props) || void 0 === P ? void 0 : P.disabled) {
                    const Q = N.key || String(O), {
                            disabled: R,
                            collapsible: S
                        } = N.props, T = Object.assign(Object.assign({}, (0, k.default)(N.props, ['disabled'])), {
                            key: Q,
                            collapsible: null != S ? S : R ? 'disabled' : void 0
                        });
                    return (0, n.cloneElement)(N, T);
                }
                return N;
            });
        })()));
    });
    var _s = Object.assign(r, { Panel: p.default });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....'), _g = f.default;
    f.default.Panel;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    function n(o) {
        var p = o;
        if (!Array.isArray(p)) {
            var q = (0, h.default)(p);
            p = 'number' === q || 'string' === q ? [p] : [];
        }
        return p.map(function (r) {
            return String(r);
        });
    }
    var q = p(l).forwardRef(function (r, s) {
            var t = r.prefixCls, u = void 0 === t ? 'rc-collapse' : t, v = r.destroyInactivePanel, w = void 0 !== v && v, x = r.style, y = r.accordion, z = r.className, A = r.children, B = r.collapsible, C = r.openMotion, D = r.expandIcon, E = r.activeKey, F = r.defaultActiveKey, G = r.onChange, H = p(i)(u, z), I = (0, k.default)([], {
                    value: E,
                    onChange: function (J) {
                        return null == G ? void 0 : G(J);
                    },
                    defaultValue: F,
                    postState: n
                }), J = (0, f.default)(I, 2), K = J[0], L = J[1], M = (0, j.default)(A).map(function (N, O) {
                    if (!N)
                        return null;
                    var P = N.key || String(O), Q = N.props, R = Q.header, S = Q.headerClass, T = Q.destroyInactivePanel, U = Q.collapsible, V = Q.onItemClick, W = !1;
                    W = y ? K[0] === P : K.indexOf(P) > -1;
                    var X = null != U ? U : B, Y = {
                            key: P,
                            panelKey: P,
                            header: R,
                            headerClass: S,
                            isActive: W,
                            prefixCls: u,
                            destroyInactivePanel: null != T ? T : w,
                            openMotion: C,
                            accordion: y,
                            children: N.props.children,
                            onItemClick: function (Z) {
                                'disabled' !== X && (!function ($) {
                                    L(function () {
                                        return y ? K[0] === $ ? [] : [$] : K.indexOf($) > -1 ? K.filter(function (ab) {
                                            return ab !== $;
                                        }) : [].concat((0, g.default)(K), [$]);
                                    });
                                }(Z), null == V || V(Z));
                            },
                            expandIcon: D,
                            collapsible: X
                        };
                    return 'string' == typeof N.type ? N : (Object.keys(Y).forEach(function (Z) {
                        void 0 === Y[Z] && delete Y[Z];
                    }), p(l).cloneElement(N, Y));
                });
            return p(l).createElement('div', {
                ref: s,
                className: H,
                style: x,
                role: y ? 'tablist' : void 0
            }, M);
        }), _r = Object.assign(q, { Panel: m.default });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function _j(k, l) {
        return (0, f.default)(k) || (0, g.default)(k, l) || (0, h.default)(k, l) || (0, i.default)();
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        if (Array.isArray(g))
            return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        var i = null == g ? null : 'undefined' != typeof Symbol && g[Symbol.iterator] || g['@@iterator'];
        if (null != i) {
            var j, k, l = [], m = !0, n = !1;
            try {
                for (i = i.call(g); !(m = (f = i.next()).done) && (l.push(f.value), !h || l.length !== h); m = !0);
            } catch (g) {
                n = !0, k = g;
            } finally {
                try {
                    m || null == i.return || i.return();
                } finally {
                    if (n)
                        throw k;
                }
            }
            return l;
        }
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (h) {
            if ('string' == typeof h)
                return (0, f.default)(h, i);
            var j = Object.prototype.toString.call(h).slice(8, -1);
            return 'Object' === j && h.constructor && (j = h.constructor.name), 'Map' === j || 'Set' === j ? Array.from(h) : 'Arguments' === j || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j) ? (0, f.default)(h, i) : void 0;
        }
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        (null == h || h > g.length) && (h = g.length);
        for (var i = 0, j = new Array(h); i < h; i++)
            f[i] = g[i];
        return f;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    function _j(k) {
        return (0, f.default)(k) || (0, g.default)(k) || (0, h.default)(k) || (0, i.default)();
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        if (Array.isArray(h))
            return (0, f.default)(h);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        if ('undefined' != typeof Symbol && null != g[Symbol.iterator] || null != g['@@iterator'])
            return Array.from(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (h) {
            return typeof h;
        } : function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = [
            'showArrow',
            'headerClass',
            'isActive',
            'onItemClick',
            'forceRender',
            'className',
            'prefixCls',
            'collapsible',
            'accordion',
            'panelKey',
            'extra',
            'header',
            'expandIcon',
            'openMotion',
            'destroyInactivePanel',
            'children'
        ], _o = b(l).forwardRef(function (p, q) {
            var r, s, t = p.showArrow, u = void 0 === t || t, v = p.headerClass, w = p.isActive, x = p.onItemClick, y = p.forceRender, z = p.className, A = p.prefixCls, B = p.collapsible, C = p.accordion, D = p.panelKey, E = p.extra, F = p.header, G = p.expandIcon, H = p.openMotion, I = p.destroyInactivePanel, J = p.children, K = (0, h.default)(p, n), L = 'disabled' === B, M = 'header' === B, N = 'icon' === B, O = null != E && 'boolean' != typeof E, P = function () {
                    null == x || x(D);
                }, Q = 'function' == typeof G ? G(p) : b(l).createElement('i', { className: 'arrow' });
            Q && (Q = b(l).createElement('div', {
                className: ''.concat(A, '-expand-icon'),
                onClick: [
                    'header',
                    'icon'
                ].includes(B) ? P : void 0
            }, Q));
            var R = b(i)((r = {}, (0, f.default)(r, ''.concat(A, '-item'), !0), (0, f.default)(r, ''.concat(A, '-item-active'), w), (0, f.default)(r, ''.concat(A, '-item-disabled'), L), r), z), S = {
                    className: b(i)((s = {}, (0, f.default)(s, ''.concat(A, '-header'), !0), (0, f.default)(s, 'headerClass', v), (0, f.default)(s, ''.concat(A, '-header-collapsible-only'), M), (0, f.default)(s, ''.concat(A, '-icon-collapsible-only'), N), s)),
                    'aria-expanded': w,
                    'aria-disabled': L,
                    onKeyPress: function (T) {
                        'Enter' !== T.key && T.keyCode !== k.default.ENTER && T.which !== k.default.ENTER || P();
                    }
                };
            return M || N || (S.onClick = P, S.role = C ? 'tab' : 'button', S.tabIndex = L ? -1 : 0), b(l).createElement('div', (0, g.default)({}, K, {
                ref: q,
                className: R
            }), b(l).createElement('div', S, u && Q, b(l).createElement('span', {
                className: ''.concat(A, '-header-text'),
                onClick: 'header' === B ? P : void 0
            }, F), O && b(l).createElement('div', { className: ''.concat(A, '-extra') }, E)), b(l).createElement(j.default, (0, g.default)({
                visible: w,
                leavedClassName: ''.concat(A, '-content-hidden')
            }, H, {
                forceRender: y,
                removeOnLeave: I
            }), function (T, U) {
                var V = T.className, W = T.style;
                return b(l).createElement(m.default, {
                    ref: U,
                    prefixCls: A,
                    className: V,
                    style: W,
                    isActive: w,
                    forceRender: y,
                    role: C ? 'tabpanel' : void 0
                }, J);
            }));
        });
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        return f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {}, l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = b(i).forwardRef(function (k, l) {
            var m, n = k.prefixCls, o = k.forceRender, p = k.className, q = k.style, r = k.children, s = k.isActive, t = k.role, u = b(i).useState(s || o), v = (0, g.default)(u, 2), w = v[0], x = v[1];
            return b(i).useEffect(function () {
                (o || s) && x(!0);
            }, [
                o,
                s
            ]), w ? b(i).createElement('div', {
                ref: l,
                className: b(h)(''.concat(n, '-content'), (m = {}, (0, f.default)(m, ''.concat(n, '-content-active'), s), (0, f.default)(m, ''.concat(n, '-content-inactive'), !s), m), p),
                style: q,
                role: t
            }, b(i).createElement('div', { className: ''.concat(n, '-content-box') }, r)) : null;
        });
    j.displayName = 'PanelContent';
    var _k = j;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    var _j = h.forwardRef((k, l) => {
        const {getPrefixCls: m} = h.useContext(i.ConfigContext), {
                prefixCls: n,
                className: o = '',
                showArrow: p = !0
            } = k, q = m('collapse', n), r = b(f)({ [`${ q }-no-arrow`]: !p }, o);
        return h.createElement(g.default.Panel, Object.assign({ ref: l }, k, {
            prefixCls: q,
            className: r
        }));
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    const j = k => {
            const {
                    componentCls: l,
                    collapseContentBg: m,
                    padding: n,
                    collapseContentPaddingHorizontal: o,
                    collapseHeaderBg: p,
                    collapseHeaderPadding: q,
                    collapseHeaderPaddingSM: r,
                    collapseHeaderPaddingLG: s,
                    collapsePanelBorderRadius: t,
                    lineWidth: u,
                    lineType: v,
                    colorBorder: w,
                    colorText: x,
                    colorTextHeading: y,
                    colorTextDisabled: z,
                    fontSize: A,
                    fontSizeLG: B,
                    lineHeight: C,
                    marginSM: D,
                    paddingSM: E,
                    paddingLG: F,
                    motionDurationSlow: G,
                    fontSizeIcon: H
                } = k, I = `${ u }px ${ v } ${ w }`;
            return {
                [l]: Object.assign(Object.assign({}, (0, i.resetComponent)(k)), {
                    backgroundColor: p,
                    border: I,
                    borderBottom: 0,
                    borderRadius: `${ t }px`,
                    '&-rtl': { direction: 'rtl' },
                    [`& > ${ l }-item`]: {
                        borderBottom: I,
                        '&:last-child': { [`\n            &,\n            & > ${ l }-header`]: { borderRadius: `0 0 ${ t }px ${ t }px` } },
                        [`> ${ l }-header`]: {
                            position: 'relative',
                            display: 'flex',
                            flexWrap: 'nowrap',
                            alignItems: 'flex-start',
                            padding: q,
                            color: y,
                            lineHeight: C,
                            cursor: 'pointer',
                            transition: `all ${ G }, visibility 0s`,
                            [`> ${ l }-header-text`]: { flex: 'auto' },
                            '&:focus': { outline: 'none' },
                            [`${ l }-expand-icon`]: {
                                height: A * C,
                                display: 'flex',
                                alignItems: 'center',
                                paddingInlineEnd: D
                            },
                            [`${ l }-arrow`]: Object.assign(Object.assign({}, (0, i.resetIcon)()), {
                                fontSize: H,
                                svg: { transition: `transform ${ G }` }
                            }),
                            [`${ l }-header-text`]: { marginInlineEnd: 'auto' }
                        },
                        [`${ l }-header-collapsible-only`]: {
                            cursor: 'default',
                            [`${ l }-header-text`]: {
                                flex: 'none',
                                cursor: 'pointer'
                            }
                        },
                        [`${ l }-icon-collapsible-only`]: {
                            cursor: 'default',
                            [`${ l }-expand-icon`]: { cursor: 'pointer' }
                        },
                        [`&${ l }-no-arrow`]: { [`> ${ l }-header`]: { paddingInlineStart: E } }
                    },
                    [`${ l }-content`]: {
                        color: x,
                        backgroundColor: m,
                        borderTop: I,
                        [`& > ${ l }-content-box`]: { padding: `${ n }px ${ o }px` },
                        '&-hidden': { display: 'none' }
                    },
                    '&-small': {
                        [`> ${ l }-item`]: {
                            [`> ${ l }-header`]: { padding: r },
                            [`> ${ l }-content > ${ l }-content-box`]: { padding: E }
                        }
                    },
                    '&-large': {
                        [`> ${ l }-item`]: {
                            fontSize: B,
                            [`> ${ l }-header`]: {
                                padding: s,
                                [`> ${ l }-expand-icon`]: { height: B * C }
                            },
                            [`> ${ l }-content > ${ l }-content-box`]: { padding: F }
                        }
                    },
                    [`${ l }-item:last-child`]: { [`> ${ l }-content`]: { borderRadius: `0 0 ${ t }px ${ t }px` } },
                    [`& ${ l }-item-disabled > ${ l }-header`]: {
                        '\n          &,\n          & > .arrow\n        ': {
                            color: z,
                            cursor: 'not-allowed'
                        }
                    },
                    [`&${ l }-icon-position-end`]: {
                        [`& > ${ l }-item`]: {
                            [`> ${ l }-header`]: {
                                [`${ l }-expand-icon`]: {
                                    order: 1,
                                    paddingInlineEnd: 0,
                                    paddingInlineStart: D
                                }
                            }
                        }
                    }
                })
            };
        }, k = l => {
            const {componentCls: m} = l;
            return { [`${ m }-rtl`]: { [`> ${ m }-item > ${ m }-header ${ m }-arrow svg`]: { transform: 'rotate(180deg)' } } };
        }, l = m => {
            const {
                componentCls: n,
                collapseHeaderBg: o,
                paddingXXS: p,
                colorBorder: q
            } = m;
            return {
                [`${ n }-borderless`]: {
                    backgroundColor: o,
                    border: 0,
                    [`> ${ n }-item`]: { borderBottom: `1px solid ${ q }` },
                    [`\n        > ${ n }-item:last-child,\n        > ${ n }-item:last-child ${ n }-header\n      `]: { borderRadius: 0 },
                    [`> ${ n }-item:last-child`]: { borderBottom: 0 },
                    [`> ${ n }-item > ${ n }-content`]: {
                        backgroundColor: 'transparent',
                        borderTop: 0
                    },
                    [`> ${ n }-item > ${ n }-content > ${ n }-content-box`]: { paddingTop: p }
                }
            };
        }, m = n => {
            const {
                componentCls: o,
                paddingSM: p
            } = n;
            return {
                [`${ o }-ghost`]: {
                    backgroundColor: 'transparent',
                    border: 0,
                    [`> ${ o }-item`]: {
                        borderBottom: 0,
                        [`> ${ o }-content`]: {
                            backgroundColor: 'transparent',
                            border: 0,
                            [`> ${ o }-content-box`]: { paddingBlock: p }
                        }
                    }
                }
            };
        };
    var _n = (0, g.default)('Collapse', o => {
        const p = (0, h.merge)(o, {
            collapseContentBg: o.colorBgContainer,
            collapseHeaderBg: o.colorFillAlter,
            collapseHeaderPadding: `${ o.paddingSM }px ${ o.padding }px`,
            collapseHeaderPaddingSM: `${ o.paddingXS }px ${ o.paddingSM }px`,
            collapseHeaderPaddingLG: `${ o.padding }px ${ o.paddingLG }px`,
            collapsePanelBorderRadius: o.borderRadiusLG,
            collapseContentPaddingHorizontal: 16
        });
        return [
            j(p),
            l(p),
            m(p),
            k(p),
            (0, f.default)(p)
        ];
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    var _p = (0, c('.....').observer)(() => {
        var q;
        const [r, s] = g.useState(!1), t = u => {
                (0, h.request)({
                    url: '/api/user/update-school',
                    data: { schoolDiggerId: null == u ? void 0 : u.schoolid },
                    success: () => {
                        s(!1), (0, k.default)({
                            onSuccess: () => {
                                (0, h.deleteRequestCache)(n.LIBRARY_CACHE_KEY);
                            }
                        });
                    },
                    error: () => {
                        (0, h.throwMessageError)({
                            default: {
                                title: 'An error ocurred while trying to update your school',
                                content: 'Please try again later or contact support'
                            }
                        });
                    }
                });
            }, u = null === (q = (0, h.getUser)()) || void 0 === q ? void 0 : q.schoolName;
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsxs)('div', {
                    style: { fontSize: 18 },
                    children: [
                        (0, f.jsx)('span', {
                            style: { fontWeight: m.FontWeights.Bold },
                            children: 'School:'
                        }),
                        ' ',
                        u || 'None'
                    ]
                }),
                (0, f.jsx)(i.default, { style: { margin: '12px 0px' } }),
                (0, f.jsxs)('div', {
                    className: 'maxWidth flex',
                    style: {
                        justifyContent: 'space-between',
                        fontSize: 14
                    },
                    children: [
                        (0, f.jsxs)(l.default, {
                            onClick: () => {
                                s(!0);
                            },
                            children: [
                                u ? 'Change' : 'Add',
                                ' school'
                            ]
                        }),
                        u && (0, f.jsx)(l.default, {
                            onClick: () => {
                                j.default.confirm({
                                    title: 'Are you sure you want to unenroll from your current school?',
                                    cancelText: 'No',
                                    okText: 'Yes',
                                    onOk: () => t(null)
                                });
                            },
                            children: 'Unenroll from school'
                        })
                    ]
                }),
                (0, f.jsx)(o.default, {
                    visible: r,
                    close: () => s(!1),
                    selectSchool: t
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....');
    let t;
    var _u = v => {
        const {
                visible: w,
                close: x
            } = v, [y, z] = g.useState(null), [A, B] = g.useState(!1), [C, D] = g.useState([]);
        return (0, f.jsxs)(k.default, {
            open: w,
            onClose: x,
            placement: 'left',
            width: 560,
            closable: !0,
            drawerStyle: {
                height: '100%',
                overflowY: 'auto',
                scrollbarWidth: 'none'
            },
            children: [
                (0, f.jsx)(_w, { children: 'School search' }),
                (0, f.jsx)(i.default, {
                    type: 'info',
                    showIcon: !0,
                    banner: !0,
                    style: { width: '100%' },
                    message: 'We currently only support schools in the US.'
                }),
                (0, f.jsx)(j.default, {}),
                (0, f.jsx)(l.default.Search, {
                    placeholder: 'Zip Code',
                    onSearch: () => {
                        y && (5 === String(y).length ? (B(!0), (0, q.request)({
                            url: '/api/users/fetch-schools',
                            method: 'post',
                            data: { zipCode: y },
                            success: E => {
                                E && E.schoolList && E.schoolList.length ? D(E.schoolList) : (0, r.throwError)({ title: 'No schools found for this zip code.' });
                            },
                            error: E => {
                                (0, r.throwError)({
                                    title: 'An error occurred while searching for your school',
                                    content: 'Please try again later'
                                });
                            },
                            both: () => {
                                B(!1);
                            }
                        })) : m.default.warning({ title: 'Please enter a 5 digit zip code' }));
                    },
                    size: 'large',
                    enterButton: 'Search',
                    autoFocus: !0,
                    style: { flex: 1 },
                    maxLength: 5,
                    loading: A,
                    value: y,
                    onChange: E => {
                        const F = E.target.value;
                        z(F);
                    }
                }),
                (0, f.jsx)('div', { style: { marginTop: 25 } }),
                C && C.length ? (0, f.jsx)(f.Fragment, {
                    children: C.map(E => (0, f.jsx)(s.default, {
                        name: E.schoolName,
                        description: `${ E.address.city }, ${ E.address.stateFull }`,
                        onSelect: () => v.selectSchool(E)
                    }, E.schoolid))
                }) : (0, f.jsx)(_v, {})
            ]
        });
    };
    const _v = () => (0, f.jsxs)('div', {
            className: 'flex hc vc flex-column',
            style: {
                color: n.default.Black,
                marginTop: 10
            },
            children: [
                (0, f.jsx)(h.default, {
                    style: {
                        fontSize: 50,
                        marginBottom: 5
                    }
                }),
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 15,
                        textAlign: 'center'
                    },
                    children: 'Enter your school\'s zip code above!'
                })
            ]
        }), _w = p.default.div(t || (t = (x => x)`
  font-weight: ${ 0 };
  font-size: 42px;
  color: ${ 0 };
  line-height: 1;
  margin-bottom: 10px;
`), o.FontWeights.UltraBold, n.default.Black);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    var _j = k => (0, f.jsx)(g.default, {
        hoverable: !0,
        style: { marginBottom: 10 },
        onClick: k.onSelect,
        children: (0, f.jsxs)('div', {
            style: {
                fontFamily: h.Fonts.SFPro,
                color: i.default.Black
            },
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 18,
                        fontWeight: h.FontWeights.Bold
                    },
                    children: k.name
                }),
                (0, f.jsx)('div', {
                    style: { fontSize: 14 },
                    children: k.description
                })
            ]
        })
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'Setting', function () {
        return _t;
    }), a(d.exports, 'default', function () {
        return _u;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....');
    let q, r, s = t => t;
    const _t = u => (0, f.jsx)(i.default, {
        style: {
            fontFamily: h.Fonts.SFPro,
            color: k.default.Black
        },
        children: (0, f.jsxs)('div', {
            className: 'maxWidth flex vc between',
            children: [
                (0, f.jsxs)('div', {
                    style: { marginRight: 40 },
                    children: [
                        (0, f.jsx)(_v, { children: u.title }),
                        (0, f.jsx)(_w, { children: u.description })
                    ]
                }),
                (0, f.jsx)('div', { children: u.children })
            ]
        })
    });
    var _u = () => {
        const [v, w] = (0, n.useBoolean)(!1);
        return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsxs)(j.default, {
                direction: 'vertical',
                size: 10,
                className: 'maxWidth',
                children: [
                    (0, f.jsx)(o.default, {}),
                    (0, f.jsx)(p.default, {}),
                    (0, f.jsx)(l.default, {}),
                    (0, f.jsx)(m.Language, {}),
                    (0, f.jsx)(m.GoogleTranslate, {})
                ]
            })
        });
    };
    const _v = g.default.div(q || (q = s`
  font-weight: ${ 0 };
  font-size: 18px;
`), h.FontWeights.UltraBold), _w = g.default.div(r || (r = s`
  font-size: 14px;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'SpaceContext', function () {
        return _o;
    }, function (f) {
        return _o = f;
    }), a(d.exports, 'default', function () {
        return _r;
    }, function (f) {
        return _r = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const _o = h.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }), p = {
            small: 8,
            middle: 16,
            large: 24
        };
    const q = r => {
        const {
                getPrefixCls: s,
                space: t,
                direction: u
            } = h.useContext(i.ConfigContext), {
                size: v = (null == t ? void 0 : t.size) || 'small',
                align: w,
                className: x,
                rootClassName: y,
                children: z,
                direction: A = 'horizontal',
                prefixCls: B,
                split: C,
                style: D,
                wrap: E = !1
            } = r, F = n(r, [
                'size',
                'align',
                'className',
                'rootClassName',
                'children',
                'direction',
                'prefixCls',
                'split',
                'style',
                'wrap'
            ]), G = (0, j.default)(), [H, I] = h.useMemo(() => (Array.isArray(v) ? v : [
                v,
                v
            ]).map(J => function (K) {
                return 'string' == typeof K ? p[K] : K || 0;
            }(J)), [v]), J = (0, g.default)(z, { keepEmpty: !0 }), K = void 0 === w && 'horizontal' === A ? 'center' : w, L = s('space', B), [M, N] = (0, m.default)(L), O = b(f)(L, N, `${ L }-${ A }`, {
                [`${ L }-rtl`]: 'rtl' === u,
                [`${ L }-align-${ K }`]: K
            }, x, y), P = `${ L }-item`, Q = 'rtl' === u ? 'marginLeft' : 'marginRight';
        let R = 0;
        const S = J.map((T, U) => {
                null != T && (R = U);
                const V = T && T.key || `${ P }-${ U }`;
                return h.createElement(l.default, {
                    className: P,
                    key: V,
                    direction: A,
                    index: U,
                    marginDirection: Q,
                    split: C,
                    wrap: E
                }, T);
            }), T = h.useMemo(() => ({
                horizontalSize: H,
                verticalSize: I,
                latestIndex: R,
                supportFlexGap: G
            }), [
                H,
                I,
                R,
                G
            ]);
        if (0 === J.length)
            return null;
        const U = {};
        return E && (U.flexWrap = 'wrap', G || (U.marginBottom = -I)), G && (U.columnGap = H, U.rowGap = I), M(h.createElement('div', Object.assign({
            className: O,
            style: Object.assign(Object.assign({}, U), D)
        }, F), h.createElement(_o.Provider, { value: T }, S)));
    };
    q.Compact = k.default;
    var _r = q;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....'), _h = () => {
            const [i, j] = f.useState(!1);
            return f.useEffect(() => {
                j((0, g.detectFlexGapSupported)());
            }, []), i;
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i) {
        let {
            className: j,
            direction: k,
            index: l,
            marginDirection: m,
            children: n,
            split: o,
            wrap: p
        } = i;
        const {
            horizontalSize: q,
            verticalSize: r,
            latestIndex: s,
            supportFlexGap: t
        } = f.useContext(g.SpaceContext);
        let u = {};
        return t || ('vertical' === k ? l < s && (u = { marginBottom: q / (o ? 2 : 1) }) : u = Object.assign(Object.assign({}, l < s && { [m]: q / (o ? 2 : 1) }), p && { paddingBottom: r })), null == n ? null : f.createElement(f.Fragment, null, f.createElement('div', {
            className: j,
            style: u
        }, n), l < s && o && f.createElement('span', {
            className: `${ j }-split`,
            style: u
        }, o));
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const {Option: k} = j.default, l = [
            '$',
            '\u20AC',
            '\xA5',
            '\xA3',
            'X̶',
            '\u20A9'
        ];
    var _m = () => {
        const [n, o] = g.useState(localStorage.getItem(h.LocalStorageNames.currency) || '$');
        return (0, f.jsx)(i.Setting, {
            title: 'Currency',
            description: 'Currency to be used while playing Gimkit (non-2D modes)',
            children: (0, f.jsx)(j.default, {
                value: n,
                style: { width: 200 },
                onChange: p => {
                    localStorage.setItem(h.LocalStorageNames.currency, p), o(p);
                },
                children: l.map(p => (0, f.jsx)(k, {
                    value: p,
                    children: p
                }, p))
            })
        });
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    let h;
    var i;
    a(d.exports, 'LocalStorageNames', function () {
        return h;
    }), (g = f || (f = {})).time = 'time', g.target = 'target', g.race = 'race', g.allIn = 'allIn', (i = h || (h = {})).language = 'gimkit-3.0-game-language', i.currency = 'gimkit-game-currency', i.music = 'gimkit-music-track', i.allowGoogleTranslate = 'gimkit-google-translate-allowed', i.editorDefaultLanguage = 'gimkit-editor-v4-default-language', i.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', i.editorDefaultSubject = 'gimkit-editor-v4-default-subject', i.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', i.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('.....', function (d, e) {
    a(d.exports, 'Language', function () {
        return _o;
    }), a(d.exports, 'GoogleTranslate', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    const {Option: m} = j.default, n = (0, i.getListOfLanguages)(), _o = () => {
            const [p, q] = g.useState((0, i.getLanguageName)(localStorage.getItem(l.LocalStorageNames.language)) || 'English');
            return (0, f.jsx)(h.Setting, {
                title: 'Language',
                description: 'Language used for upgrade names and other text while playing Gimkit (non-2D modes)',
                children: (0, f.jsx)(j.default, {
                    value: p,
                    style: { width: 200 },
                    onChange: r => {
                        const s = (0, i.getLanguageKey)(r);
                        localStorage.setItem(l.LocalStorageNames.language, s), q(r);
                    },
                    children: n.map(r => (0, f.jsx)(m, {
                        value: r,
                        children: r
                    }, r))
                })
            });
        }, _p = () => {
            const [q, r] = g.useState(!!localStorage.getItem(l.LocalStorageNames.allowGoogleTranslate));
            return (0, f.jsx)(h.Setting, {
                title: 'Allow Google Translate',
                description: 'Allow Google Chrome to translate text inside of live games?',
                children: (0, f.jsx)(k.default, {
                    onClick: s => {
                        s ? localStorage.setItem(l.LocalStorageNames.allowGoogleTranslate, 'allow') : localStorage.removeItem(l.LocalStorageNames.allowGoogleTranslate), r(s);
                    },
                    checked: q
                })
            });
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getListOfLanguages', function () {
        return _g;
    }), a(d.exports, 'getLanguageKey', function () {
        return _h;
    }), a(d.exports, 'getLanguageName', function () {
        return _i;
    });
    const f = {
            en: 'English',
            af: 'Afrikaans',
            sq: 'Albanian',
            am: 'Amharic',
            ar: 'Arabic',
            hy: 'Armenian',
            az: 'Azerbaijani',
            eu: 'Basque',
            be: 'Belarusian',
            bn: 'Bengali',
            bs: 'Bosnian',
            bg: 'Bulgarian',
            ca: 'Catalan',
            ceb: 'Cebuano',
            ny: 'Chichewa',
            'zh-cn': 'Chinese Simplified',
            'zh-tw': 'Chinese Traditional',
            co: 'Corsican',
            hr: 'Croatian',
            cs: 'Czech',
            da: 'Danish',
            nl: 'Dutch',
            eo: 'Esperanto',
            et: 'Estonian',
            tl: 'Filipino',
            fi: 'Finnish',
            fr: 'French',
            fy: 'Frisian',
            gl: 'Galician',
            ka: 'Georgian',
            de: 'German',
            el: 'Greek',
            gu: 'Gujarati',
            ht: 'Haitian Creole',
            ha: 'Hausa',
            haw: 'Hawaiian',
            iw: 'Hebrew',
            hi: 'Hindi',
            hmn: 'Hmong',
            hu: 'Hungarian',
            is: 'Icelandic',
            ig: 'Igbo',
            id: 'Indonesian',
            ga: 'Irish',
            it: 'Italian',
            ja: 'Japanese',
            jw: 'Javanese',
            kn: 'Kannada',
            kk: 'Kazakh',
            km: 'Khmer',
            ko: 'Korean',
            ku: 'Kurdish (Kurmanji)',
            ky: 'Kyrgyz',
            lo: 'Lao',
            la: 'Latin',
            lv: 'Latvian',
            lt: 'Lithuanian',
            lb: 'Luxembourgish',
            mk: 'Macedonian',
            mg: 'Malagasy',
            ms: 'Malay',
            ml: 'Malayalam',
            mt: 'Maltese',
            mi: 'Maori',
            mr: 'Marathi',
            mn: 'Mongolian',
            my: 'Myanmar (Burmese)',
            ne: 'Nepali',
            no: 'Norwegian',
            ps: 'Pashto',
            fa: 'Persian',
            pl: 'Polish',
            pt: 'Portuguese',
            ma: 'Punjabi',
            ro: 'Romanian',
            ru: 'Russian',
            sm: 'Samoan',
            gd: 'Scots Gaelic',
            sr: 'Serbian',
            st: 'Sesotho',
            sn: 'Shona',
            sd: 'Sindhi',
            si: 'Sinhala',
            sk: 'Slovak',
            sl: 'Slovenian',
            so: 'Somali',
            es: 'Spanish',
            su: 'Sundanese',
            sw: 'Swahili',
            sv: 'Swedish',
            tg: 'Tajik',
            ta: 'Tamil',
            te: 'Telugu',
            th: 'Thai',
            tr: 'Turkish',
            uk: 'Ukrainian',
            ur: 'Urdu',
            uz: 'Uzbek',
            vi: 'Vietnamese',
            cy: 'Welsh',
            xh: 'Xhosa',
            yi: 'Yiddish',
            yo: 'Yoruba',
            zu: 'Zulu'
        }, _g = () => Object.keys(f).map(h => f[h]), _h = i => Object.keys(f).filter(j => f[j] === i)[0], _i = j => f[j];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = () => {
        const [l, m] = g.useState(!!localStorage.getItem(j.LocalStorageNames.cosmosBlockedInGame));
        return (0, f.jsx)(h.Setting, {
            title: 'Disable Cosmetics',
            description: 'Gims, trails, and stickers are disabled in-game. All players appear as default Gims.',
            children: (0, f.jsx)(i.default, {
                onClick: n => {
                    n ? localStorage.setItem(j.LocalStorageNames.cosmosBlockedInGame, 'true') : localStorage.removeItem(j.LocalStorageNames.cosmosBlockedInGame), m(n);
                },
                checked: l
            })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = () => {
        const [p, q] = g.useState(!0), [r, s] = g.useState(!1), [t, u] = g.useState(''), v = () => {
                if (r)
                    return;
                let w = t;
                w && (w = w.trim(), w.length < 2) ? (0, l.throwMessageError)({ default: { title: 'Display name must be at least 2 characters long' } }) : (s(!0), (0, n.Request)({
                    url: '/api/user/display-name',
                    data: { name: w },
                    success: x => {
                        k.default.success('Display name updated!'), u(x.name);
                    },
                    error: x => {
                        (0, l.throwMessageError)({
                            e: x,
                            default: { title: 'Error updating display name' }
                        });
                    },
                    both: () => s(!1)
                }));
            };
        return (0, m.useDidMount)(() => {
            (0, n.Request)({
                url: '/api/user/display-name',
                success: w => {
                    u(w.name);
                },
                both: () => q(!1)
            });
        }), (0, f.jsx)(h.Setting, {
            title: 'Display Name',
            description: 'The name you appear as in-game when hosting a game. Leave empty to use your account name.',
            children: (0, f.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, f.jsx)(j.default, {
                        disabled: p,
                        value: t,
                        maxLength: 20,
                        style: {
                            width: 200,
                            marginRight: 10
                        },
                        placeholder: 'Ms. Gimkit',
                        onPressEnter: v,
                        onChange: w => {
                            u(w.target.value);
                        }
                    }),
                    (0, f.jsx)(i.default, {
                        loading: r,
                        onClick: v,
                        type: 'primary',
                        children: 'Save'
                    })
                ]
            })
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _p;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    var _p = () => (g.useEffect(() => {
        (0, m.default)();
    }, []), (0, f.jsxs)(f.Fragment, {
        children: [
            (0, f.jsx)(h.default, {}),
            (0, f.jsx)(j.default, {}),
            (0, f.jsx)(o.default, {}),
            (0, f.jsx)(i.default, {}),
            (0, f.jsx)(l.default, {}),
            (0, f.jsx)(k.default, {}),
            (0, f.jsx)(n.default, {})
        ]
    }));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = (0, h.observer)(() => {
        const {billing: o} = g.useContext(k.default);
        return (0, f.jsx)(i.default, {
            style: {
                fontFamily: j.Fonts.SFPro,
                color: l.default.Black
            },
            children: (0, f.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, f.jsx)('div', {
                        children: (0, f.jsx)('img', {
                            src: `/client/img/settings/${ (0, m.isUpgraded)() ? 'launch' : 'sprout' }.svg`,
                            style: { height: 87 }
                        })
                    }),
                    (0, f.jsxs)('div', {
                        style: { marginLeft: 20 },
                        children: [
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: j.FontWeights.UltraBold,
                                    fontSize: 28
                                },
                                children: o.planName
                            }),
                            (0, f.jsx)('div', {
                                style: { marginTop: -8 },
                                children: o.downgradeMessage || o.planDescription
                            })
                        ]
                    })
                ]
            })
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....');
    const p = q => {
        const r = !!q.amountRefunded, s = r && q.amountRefunded === q.amount;
        return (0, f.jsx)('a', {
            href: q.link,
            target: '_blank',
            children: (0, f.jsx)(h.default, {
                style: {
                    color: j.default.Black,
                    fontFamily: k.Fonts.SFPro,
                    marginBottom: 5
                },
                hoverable: !0,
                children: (0, f.jsxs)('div', {
                    className: 'flex vc',
                    style: { justifyContent: 'space-between' },
                    children: [
                        (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsx)('div', {
                                    style: {
                                        fontSize: 11,
                                        marginBottom: -5,
                                        opacity: 0.7
                                    },
                                    children: q.date
                                }),
                                (0, f.jsx)('div', {
                                    style: { fontSize: 14 },
                                    children: (0, n.centsToFormatedMoney)(q.amount)
                                })
                            ]
                        }),
                        (0, f.jsx)('div', {
                            children: r && (0, f.jsx)(i.default, {
                                color: 'green',
                                children: s ? 'Refunded' : 'Partially Refunded'
                            })
                        })
                    ]
                })
            })
        });
    };
    var _q = (0, l.observer)(() => {
        const {billing: r} = g.useContext(m.default);
        return r.charges.length ? (0, f.jsxs)(h.default, {
            style: {
                color: j.default.Black,
                fontFamily: k.Fonts.SFPro,
                marginTop: 10
            },
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 22,
                        fontWeight: k.FontWeights.UltraBold,
                        marginBottom: -7
                    },
                    children: 'Receipts'
                }),
                (0, f.jsx)('div', {
                    style: { marginBottom: 7 },
                    children: 'Click a charge to open the receipt'
                }),
                r.charges.map(s => (0, f.jsx)(p, {
                    date: b(o).unix(s.unixDate).format('MMMM Do, YYYY'),
                    amount: s.amount,
                    link: s.receiptUrl,
                    amountRefunded: s.amountRefunded
                }, s.id))
            ]
        }) : null;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    }, function (f) {
        return _q = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = function (o, p) {
            var q = {};
            for (var r in o)
                Object.prototype.hasOwnProperty.call(o, r) && p.indexOf(r) < 0 && (q[r] = o[r]);
            if (null != o && 'function' == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (r = Object.getOwnPropertySymbols(o); s < r.length; s++)
                    p.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(o, r[s]) && (q[r[s]] = o[r[s]]);
            }
            return q;
        };
    const o = (p, q) => {
            var {
                    prefixCls: r,
                    className: s,
                    rootClassName: t,
                    style: u,
                    children: v,
                    icon: w,
                    color: x,
                    onClose: y,
                    closeIcon: z,
                    closable: A = !1
                } = p, B = n(p, [
                    'prefixCls',
                    'className',
                    'rootClassName',
                    'style',
                    'children',
                    'icon',
                    'color',
                    'onClose',
                    'closeIcon',
                    'closable'
                ]);
            const {
                    getPrefixCls: C,
                    direction: D
                } = h.useContext(i.ConfigContext), [E, F] = h.useState(!0);
            h.useEffect(() => {
                'visible' in B && F(B.visible);
            }, [B.visible]);
            const G = (0, j.isPresetColor)(x) || (0, j.isPresetStatusColor)(x), H = Object.assign({ backgroundColor: x && !G ? x : void 0 }, u), I = C('tag', r), [J, K] = (0, m.default)(I), L = b(g)(I, {
                    [`${ I }-${ x }`]: G,
                    [`${ I }-has-color`]: x && !G,
                    [`${ I }-hidden`]: !E,
                    [`${ I }-rtl`]: 'rtl' === D
                }, s, t, K), M = N => {
                    N.stopPropagation(), null == y || y(N), N.defaultPrevented || F(!1);
                }, N = 'function' == typeof B.onClick || v && 'a' === v.type, O = w || null, P = O ? h.createElement(h.Fragment, null, O, h.createElement('span', null, v)) : v, Q = h.createElement('span', Object.assign({}, B, {
                    ref: q,
                    className: L,
                    style: H
                }), P, A ? z ? h.createElement('span', {
                    className: `${ I }-close-icon`,
                    onClick: M
                }, z) : h.createElement(f.default, {
                    className: `${ I }-close-icon`,
                    onClick: M
                }) : null);
            return J(N ? h.createElement(k.default, null, Q) : Q);
        }, p = h.forwardRef(o);
    p.CheckableTag = l.default;
    var _q = p;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            var m = {};
            for (var n in k)
                Object.prototype.hasOwnProperty.call(k, n) && l.indexOf(n) < 0 && (m[n] = k[n]);
            if (null != k && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(k); o < n.length; o++)
                    l.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(k, n[o]) && (m[n[o]] = k[n[o]]);
            }
            return m;
        };
    var _k = l => {
        var {
                prefixCls: m,
                className: n,
                checked: o,
                onChange: p,
                onClick: q
            } = l, r = j(l, [
                'prefixCls',
                'className',
                'checked',
                'onChange',
                'onClick'
            ]);
        const {getPrefixCls: s} = g.useContext(h.ConfigContext), t = s('tag', m), [u, v] = (0, i.default)(t), w = b(f)(t, {
                [`${ t }-checkable`]: !0,
                [`${ t }-checkable-checked`]: o
            }, n, v);
        return u(g.createElement('span', Object.assign({}, r, {
            className: w,
            onClick: x => {
                null == p || p(!o), null == q || q(x);
            }
        })));
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    const k = (l, m, n) => {
            const o = (0, h.default)(n);
            return {
                [`${ l.componentCls }-${ m }`]: {
                    color: l[`color${ n }`],
                    background: l[`color${ o }Bg`],
                    borderColor: l[`color${ o }Border`]
                }
            };
        }, l = m => (0, i.genPresetColor)(m, (n, o) => {
            let {
                textColor: p,
                lightBorderColor: q,
                lightColor: r,
                darkColor: s
            } = o;
            return {
                [`${ m.componentCls }-${ n }`]: {
                    color: p,
                    background: r,
                    borderColor: q,
                    '&-inverse': {
                        color: m.colorTextLightSolid,
                        background: s,
                        borderColor: s
                    }
                }
            };
        }), m = n => {
            const {
                    paddingXXS: o,
                    lineWidth: p,
                    tagPaddingHorizontal: q,
                    componentCls: r
                } = n, s = q - p, t = o - p;
            return {
                [r]: Object.assign(Object.assign({}, (0, j.resetComponent)(n)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: n.marginXS,
                    paddingInline: s,
                    fontSize: n.tagFontSize,
                    lineHeight: `${ n.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: n.tagDefaultBg,
                    border: `${ n.lineWidth }px ${ n.lineType } ${ n.colorBorder }`,
                    borderRadius: n.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ n.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ r }-rtl`]: { direction: 'rtl' },
                    '&, a, a:hover': { color: n.tagDefaultColor },
                    [`${ r }-close-icon`]: {
                        marginInlineStart: t,
                        color: n.colorTextDescription,
                        fontSize: n.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ n.motionDurationMid }`,
                        '&:hover': { color: n.colorTextHeading }
                    },
                    [`&${ r }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ n.iconCls }-close, ${ n.iconCls }-close:hover`]: { color: n.colorTextLightSolid }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ r }-checkable-checked):hover`]: {
                            color: n.colorPrimary,
                            backgroundColor: n.colorFillSecondary
                        },
                        '&:active, &-checked': { color: n.colorTextLightSolid },
                        '&-checked': {
                            backgroundColor: n.colorPrimary,
                            '&:hover': { backgroundColor: n.colorPrimaryHover }
                        },
                        '&:active': { backgroundColor: n.colorPrimaryActive }
                    },
                    '&-hidden': { display: 'none' },
                    [`> ${ n.iconCls } + span, > span + ${ n.iconCls }`]: { marginInlineStart: s }
                })
            };
        };
    var _n = (0, f.default)('Tag', o => {
        const {
                fontSize: p,
                lineHeight: q,
                lineWidth: r,
                fontSizeIcon: s
            } = o, t = Math.round(p * q), u = o.fontSizeSM, v = t - 2 * r, w = o.colorFillAlter, x = o.colorText, y = (0, g.merge)(o, {
                tagFontSize: u,
                tagLineHeight: v,
                tagDefaultBg: w,
                tagDefaultColor: x,
                tagIconSize: s - 2 * r,
                tagPaddingHorizontal: 8
            });
        return [
            m(y),
            l(y),
            k(y, 'success', 'Success'),
            k(y, 'processing', 'Info'),
            k(y, 'error', 'Error'),
            k(y, 'warning', 'Warning')
        ];
    });
}), c.register('.....', function (d, e) {
    function f(g) {
        if ('string' != typeof g)
            return g;
        return g.charAt(0).toUpperCase() + g.slice(1);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'centsToFormatedMoney', function () {
        return _f;
    });
    const _f = g => (g / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....');
    var _m = (0, h.observer)(() => {
        const {billing: n} = g.useContext(i.default);
        return !n.hasNextCharge || n.planName.toLowerCase().includes('basic') ? null : (0, f.jsxs)(j.default, {
            style: {
                marginTop: 10,
                color: k.default.Black
            },
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 14,
                        marginBottom: -5
                    },
                    children: 'Next Charge'
                }),
                (0, f.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, f.jsx)('div', {
                            style: {
                                fontSize: 27,
                                fontWeight: l.FontWeights.UltraBold
                            },
                            children: n.nextChargeAmount
                        }),
                        (0, f.jsxs)('div', {
                            style: {
                                opacity: 0.8,
                                fontSize: 12,
                                marginLeft: 7
                            },
                            children: [
                                'on ',
                                n.nextChargeDate
                            ]
                        })
                    ]
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    var _n = (0, h.observer)(() => {
        const {billing: o} = g.useContext(m.default);
        return o.accountBalance ? (0, f.jsxs)(i.default, {
            style: {
                color: j.default.Black,
                fontFamily: k.Fonts.SFPro,
                marginTop: 10
            },
            children: [
                (0, f.jsx)('div', {
                    style: { fontSize: 12 },
                    children: 'Account Credit'
                }),
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 19,
                        marginTop: -5,
                        fontWeight: k.FontWeights.UltraBold
                    },
                    children: (0, l.centsToFormatedMoney)(o.accountBalance)
                })
            ]
        }) : null;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = (i = c('.....'), j = c('.....'), k = c('.....'), c('.....'));
    var _t = (0, o.observer)(() => {
        const [u, v] = g.useState(!1), {
                billing: {
                    last4DigitsOfCard: w,
                    stripePublicKey: x,
                    cardName: y
                }
            } = g.useContext(n.default);
        if (g.useEffect(() => {
                const z = (0, q.getUrlVariable)('session_id');
                z && (v(!0), (0, q.verifyStripe)({
                    sessionId: z,
                    onSuccess: () => {
                        (0, r.default)(), k.default.success('Credit card updated successfully');
                    },
                    onError: () => (0, s.throwError)({
                        title: 'Error updating credit card',
                        content: 'Please try again or contact support'
                    }),
                    onBoth: () => {
                        v(!1);
                    },
                    invokeImmediately: !0
                }));
            }, []), !w || !y)
            return null;
        return (0, f.jsxs)(j.default, {
            style: {
                color: l.default.Black,
                fontFamily: m.Fonts.SFPro,
                marginTop: 10
            },
            children: [
                (0, f.jsx)('div', {
                    style: {
                        fontSize: 17,
                        fontWeight: m.FontWeights.UltraBold,
                        marginBottom: 1
                    },
                    children: 'Payment Method'
                }),
                (0, f.jsx)(j.default, {
                    children: (0, f.jsxs)('div', {
                        className: 'flex vc',
                        style: {
                            color: l.default.Black,
                            fontFamily: m.Fonts.SFPro
                        },
                        children: [
                            (0, f.jsx)(h.default, {
                                style: {
                                    fontSize: 24,
                                    marginRight: 10
                                }
                            }),
                            (0, f.jsxs)('div', {
                                children: [
                                    (0, f.jsx)('span', {
                                        style: { fontWeight: m.FontWeights.UltraBold },
                                        children: y.toUpperCase()
                                    }),
                                    ' ',
                                    'ending in',
                                    ' ',
                                    (0, f.jsx)('span', {
                                        style: { fontWeight: m.FontWeights.UltraBold },
                                        children: w
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, f.jsxs)('div', {
                    style: {
                        marginTop: 5,
                        justifyContent: 'space-between'
                    },
                    className: 'flex maxWidth',
                    children: [
                        (0, f.jsx)('div', {}),
                        x && (0, f.jsx)(i.default, {
                            type: 'primary',
                            size: 'large',
                            onClick: async () => {
                                let z;
                                v(!0);
                                try {
                                    z = await (0, p.loadStripe)(x);
                                } catch (z) {
                                    v(!1), (0, q.throwMessageError)({
                                        e: z,
                                        default: {
                                            title: 'Our payment processor is currently down',
                                            content: 'Please try again later'
                                        }
                                    });
                                }
                                z && (0, q.request)({
                                    url: '/api/billing/create-billing-info-session',
                                    method: 'POST',
                                    success: async A => {
                                        const B = A;
                                        let C;
                                        try {
                                            if (C = await z.redirectToCheckout({ sessionId: B.id }), C && C.error)
                                                throw C.error;
                                        } catch (z) {
                                            (0, q.throwMessageError)({
                                                e: z,
                                                default: {
                                                    title: 'Error',
                                                    content: 'An error ocurred. Please try again later'
                                                }
                                            });
                                        }
                                    },
                                    error: A => {
                                        v(!1), (0, q.throwMessageError)({
                                            e: A,
                                            default: {
                                                title: 'Connection Error',
                                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                                            }
                                        });
                                    }
                                });
                            },
                            loading: u,
                            children: 'Change Credit Card'
                        })
                    ]
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'loadStripe', function () {
        return _n;
    });
    var f = 'https://js.stripe.com/v3', g = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, h = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used', i = null, j = function (k) {
            return null !== i || (i = new Promise(function (l, m) {
                if ('undefined' != typeof window)
                    if (window.Stripe && k && console.warn(h), window.Stripe)
                        l(window.Stripe);
                    else
                        try {
                            var n = function () {
                                for (var o = document.querySelectorAll('script[src^="'.concat(f, '"]')), p = 0; p < o.length; p++) {
                                    var q = o[p];
                                    if (g.test(q.src))
                                        return q;
                                }
                                return null;
                            }();
                            n && k ? console.warn(h) : n || (n = function (o) {
                                var p = o && !o.advancedFraudSignals ? '?advancedFraudSignals=false' : '', q = document.createElement('script');
                                q.src = ''.concat(f).concat(p);
                                var r = document.head || document.body;
                                if (!r)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return r.appendChild(q), q;
                            }(k)), n.addEventListener('load', function () {
                                window.Stripe ? l(window.Stripe) : m(new Error('Stripe.js not available'));
                            }), n.addEventListener('error', function () {
                                m(new Error('Failed to load Stripe.js'));
                            });
                        } catch (k) {
                            return void m(k);
                        }
                else
                    l(null);
            })), i;
        }, k = function (l, m, n) {
            if (null === l)
                return null;
            var o = l.apply(void 0, m);
            return function (p, q) {
                p && p._registerWrapper && p._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: q
                });
            }(o, n), o;
        }, l = Promise.resolve().then(function () {
            return j(null);
        }), m = !1;
    l.catch(function (n) {
        m || console.warn(n);
    });
    var _n = function () {
        for (var o = arguments.length, p = new Array(o), q = 0; q < o; q++)
            p[q] = arguments[q];
        m = !0;
        var r = Date.now();
        return l.then(function (s) {
            return k(s, p, r);
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = () => {
        (0, f.request)({
            url: '/api/billing/payment-source',
            success: i => {
                g.default.billing.cardName = i.source.cardType, g.default.billing.last4DigitsOfCard = i.source.last4Digits, (0, f.request)({
                    url: '/api/billing/stripe-key',
                    success: j => g.default.billing.stripePublicKey = j.key
                });
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    var _k = () => {
        (0, j.default)({
            onSuccess: () => {
                (0, f.default)(), (0, g.default)(), (0, h.default)(), (0, i.default)();
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    var _l = () => {
        (0, f.isUpgraded)() && (0, k.default)(), (0, f.request)({
            url: '/api/billing/plan-info',
            success: m => {
                const {info: n} = m;
                g.default.billing.planName = (0, h.default)(n.plan), g.default.billing.planDescription = (o => {
                    if ('basic' === o.info.plan)
                        return 'Free Forever!';
                    if (o.info.info) {
                        const p = o.info.info;
                        if (p.providedByMessage)
                            return p.providedByMessage;
                        if (p.cost && p.timePeriod)
                            return `${ (0, j.centsToFormatedMoney)(p.cost) } per ${ p.timePeriod }`;
                        if (p.bulkName)
                            return `Paid by ${ p.bulkName }.`;
                    }
                    return '';
                })(m), n.info && n.info.timePeriod && (g.default.billing.billingInterval = n.info.timePeriod), 'stripe' === n.source && (0, i.default)();
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = () => {
        (0, f.request)({
            url: '/api/billing/upcoming-invoice',
            success: j => {
                g.default.billing.nextChargeAmount = (0, h.centsToFormatedMoney)(j.amount), g.default.billing.nextChargeDate = j.date, g.default.billing.hasNextCharge = !0;
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = () => {
        (0, f.request)({
            url: '/api/billing/downgrade-details',
            success: i => {
                g.default.billing.canDowngrade = i.canDowngrade, i.message && (g.default.billing.downgradeMessage = i.message), i.subscriptionEndDateText && (g.default.billing.downgradeDateMessage = i.subscriptionEndDateText);
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = () => {
        (0, f.request)({
            url: '/api/billing/charges',
            success: i => g.default.billing.charges.replace(i.charges)
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    var _h = () => {
        (0, f.request)({
            url: '/api/billing/account-balance',
            success: i => {
                g.default.billing.accountBalance = i.balance;
            }
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....');
    var _o = (0, l.observer)(() => {
        const {billing: p} = g.useContext(m.default), [q, r] = g.useState(!1), s = () => r(!q);
        if (!p.canDowngrade) {
            if (p.downgradeMessage && p.downgradeMessage.includes('set to end')) {
                const t = p.downgradeMessage.split('end on ')[1];
                return q ? (0, f.jsxs)(i.default, {
                    style: {
                        fontFamily: j.Fonts.SFPro,
                        color: k.default.Black,
                        marginTop: 10
                    },
                    children: [
                        (0, f.jsx)('b', { children: 'You\'ve already canceled your subscription.' }),
                        ' You won\'t be charged again and will keep Pro access until ',
                        q
                    ]
                }) : null;
            }
            return null;
        }
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(i.default, {
                    style: {
                        fontFamily: j.Fonts.SFPro,
                        color: k.default.Black,
                        marginTop: 10
                    },
                    children: (0, f.jsxs)('div', {
                        className: 'flex maxWidth',
                        style: { justifyContent: 'space-between' },
                        children: [
                            (0, f.jsx)('div', {}),
                            p.canDowngrade && (0, f.jsx)(h.default, {
                                onClick: s,
                                type: 'primary',
                                danger: !0,
                                children: 'Cancel Subscription'
                            })
                        ]
                    })
                }),
                (0, f.jsx)(n.default, {
                    visible: q,
                    close: s
                })
            ]
        });
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _x;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v;
    var w;
    (w = v || (v = {})).firstAsk = 'firstAsk', w.reason = 'reason', w.groupOrder = 'groupOrder';
    var _x = (0, h.observer)(y => {
        const {billing: z} = g.useContext(q.default), [A, B] = g.useState(v.firstAsk), [C, D] = g.useState(''), [E, F] = g.useState(''), [G, H] = g.useState(!1), I = !G, J = K => D(K.target.value), K = L => F(L.target.value), L = () => {
                I && (H(!0), (0, r.request)({
                    url: '/api/billing/downgrade',
                    data: {
                        reasonId: C,
                        otherReason: E
                    },
                    success: () => {
                        l.default.success({ title: `You've canceled your ${ (0, p.default)((0, r.getUser)().type) } subscription${ z.downgradeDateMessage && ' to end on ' + z.downgradeDateMessage }.` }), z.reset(), (0, t.default)(), y.close();
                    },
                    error: () => (0, s.throwError)({
                        title: 'Error canceling subscription',
                        content: 'Please contact support'
                    }),
                    both: () => H(!1)
                }));
            }, M = () => B(v.reason), N = () => B(v.groupOrder);
        return (0, f.jsx)(l.default, {
            open: y.visible,
            onCancel: y.close,
            style: {
                fontFamily: n.Fonts.SFPro,
                color: o.default.Black
            },
            footer: null,
            closable: !1,
            children: A === v.firstAsk ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            textAlign: 'center',
                            fontWeight: n.FontWeights.Bold,
                            fontSize: 25
                        },
                        children: 'Are you canceling because you\'re joining a group license?'
                    }),
                    (0, f.jsx)(j.default, {}),
                    (0, f.jsx)(i.default, {
                        style: { marginBottom: 5 },
                        onClick: N,
                        block: !0,
                        size: 'large',
                        children: 'Yes'
                    }),
                    (0, f.jsx)(i.default, {
                        block: !0,
                        size: 'large',
                        onClick: M,
                        children: 'No'
                    })
                ]
            }) : A === v.groupOrder ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            fontWeight: n.FontWeights.Bold,
                            fontSize: 27,
                            lineHeight: '30px'
                        },
                        children: 'To get a refund, don\'t cancel your subscription just yet!'
                    }),
                    (0, f.jsx)(j.default, {}),
                    (0, f.jsxs)('div', {
                        style: { fontSize: 15 },
                        children: [
                            'If you\'re joining a group license, ask your group manager for the',
                            ' ',
                            (0, f.jsx)('b', { children: 'invite link.' }),
                            ' ',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            'When you open the invite link, your current subscription will automatically be canceled, and you will receive a refund for your unused time on ',
                            (0, p.default)((0, r.getUser)().type),
                            '. ',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            ' If you cancel now, you will not be refunded for your unused time.'
                        ]
                    }),
                    (0, f.jsx)(j.default, {}),
                    (0, f.jsx)(i.default, {
                        block: !0,
                        type: 'primary',
                        size: 'large',
                        onClick: y.close,
                        children: 'Got It!'
                    }),
                    (0, f.jsx)('div', {
                        className: 'maxWidth',
                        style: {
                            textAlign: 'center',
                            marginTop: 10
                        },
                        children: (0, f.jsx)('a', {
                            onClick: M,
                            children: 'Cancel subscription anyway'
                        })
                    })
                ]
            }) : A === v.reason ? (0, f.jsxs)(f.Fragment, {
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            fontWeight: n.FontWeights.UltraBold,
                            fontSize: 32
                        },
                        children: 'Cancel Subscription'
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            fontSize: 15,
                            marginTop: 10
                        },
                        children: [
                            'Your ',
                            (0, f.jsx)('b', { children: (0, p.default)((0, r.getUser)().type) }),
                            ' subscription will end on',
                            ' ',
                            (0, f.jsx)('b', { children: z.downgradeDateMessage }),
                            '. ',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            ' You won\u2019t be charged again. You\u2019ll keep everything you\u2019ve created and you can restart your subscription anytime after your subscription ends.',
                            ' ',
                            (0, f.jsx)('br', {}),
                            ' ',
                            (0, f.jsx)('br', {}),
                            ' If you have a moment, let us know what made you cancel by selecting an option below. Thanks so much!'
                        ]
                    }),
                    (0, f.jsx)(m.default.Group, {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: 20
                        },
                        onChange: J,
                        value: C,
                        children: _y.map(O => (0, f.jsx)(m.default, {
                            value: O.id,
                            style: {
                                fontSize: 15,
                                color: o.default.Black,
                                marginBottom: 4
                            },
                            children: O.text
                        }, O.id))
                    }),
                    'other' === C ? (0, f.jsx)(k.default, {
                        placeholder: 'Reason...',
                        autoFocus: !0,
                        style: { marginTop: 10 },
                        value: E,
                        onChange: K
                    }) : null,
                    (0, f.jsx)(i.default, {
                        block: !0,
                        style: { marginTop: 25 },
                        type: 'primary',
                        danger: !0,
                        onClick: L,
                        loading: G,
                        disabled: !I,
                        children: 'Cancel Subscription'
                    })
                ]
            }) : null
        });
    });
    const _y = [
        {
            id: 'break',
            text: 'Summer break/taking a break'
        },
        ...(0, u.shuffle)([
            {
                id: 'didNotUse',
                text: 'Didn\u2019t use it much'
            },
            {
                id: 'anotherService',
                text: 'Using another service'
            },
            {
                id: 'unhappy',
                text: 'Unhappy with the product'
            },
            {
                id: 'couldNotGetItToWork',
                text: 'Couldn\'t get it to work'
            },
            {
                id: 'cost',
                text: 'Too expensive'
            },
            {
                id: 'schoolNoPay',
                text: 'My school won\u2019t pay for it'
            },
            {
                id: 'noAutoRenew',
                text: 'Don\'t want subscription to autorenew'
            },
            {
                id: 'leaving',
                text: 'Leaving the classroom'
            },
            {
                id: 'retiring',
                text: 'Retiring'
            }
        ]),
        {
            id: 'other',
            text: 'Other'
        }
    ];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _t;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....');
    const s = t => (0, f.jsx)(l.default, {
        style: {
            fontFamily: m.Fonts.SFPro,
            color: n.default.White,
            marginTop: 10,
            overflow: 'hidden'
        },
        ...t
    });
    var _t = (0, g.observer)(() => {
        const {billing: u} = h.useContext(i.default);
        return (0, j.isUpgraded)() && u.billingInterval && 'year' !== u.billingInterval ? (0, f.jsx)(s, {
            bodyStyle: {
                backgroundImage: 'linear-gradient(to left, #434343 0%, #1c1c1c 100%)',
                padding: 40
            },
            children: (0, f.jsxs)('div', {
                className: 'flex-column flex-center',
                style: { textAlign: 'center' },
                children: [
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: 22,
                            fontWeight: m.FontWeights.Bold,
                            textAlign: 'center'
                        },
                        children: 'Switch to annual billing and save 65%!'
                    }),
                    (0, f.jsxs)('div', {
                        style: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.9)',
                            marginTop: 2
                        },
                        children: [
                            'If you use ',
                            p.COMPANY_NAME,
                            ' more than 3 months a year, you\'ll save money by switching to annual billing!'
                        ]
                    }),
                    (0, f.jsx)('div', {
                        style: { marginTop: 20 },
                        children: (0, f.jsx)(q.default, {
                            to: r.CHECKOUT,
                            children: (0, f.jsx)(k.default, {
                                size: 'large',
                                icon: (0, f.jsx)(o.default, {}),
                                type: 'primary',
                                children: 'Switch To Annual Billing'
                            })
                        })
                    })
                ]
            })
        }) : null;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'StarOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z' }
                }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k;
    const l = m => (0, f.jsx)('div', {
            style: {
                backgroundImage: `url(${ m.src })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '50%',
                height: 70,
                width: 70,
                margin: 10,
                borderStyle: 'solid',
                borderColor: '#607d8b'
            }
        }), m = n => (0, f.jsxs)('div', {
            className: 'flex wrap vc',
            children: [
                (0, f.jsx)('div', {
                    children: (0, f.jsx)('img', {
                        src: n.image,
                        style: {
                            height: 99,
                            marginRight: 22
                        }
                    })
                }),
                (0, f.jsx)('div', {
                    style: { flex: 1 },
                    children: n.content
                })
            ]
        }), n = () => (0, f.jsx)('div', { style: { height: 35 } });
    var _o = () => {
        const p = () => {
            window.open('https://help.gimkit.com');
        };
        return (0, f.jsx)(_p, {
            className: 'flex hc',
            children: (0, f.jsxs)('div', {
                style: {
                    color: h.default.Black,
                    fontFamily: g.Fonts.SFPro,
                    maxWidth: 700,
                    width: '100%'
                },
                className: 'flex flex-column wrap',
                children: [
                    (0, f.jsxs)('div', {
                        className: 'flex hc vc flex-column',
                        children: [
                            (0, f.jsxs)('div', {
                                className: 'flex wrap',
                                children: [
                                    (0, f.jsx)(l, { src: '/client/img/settings/pharlain.jpg' }),
                                    (0, f.jsx)(l, { src: '/client/img/settings/jeff.jpg' }),
                                    (0, f.jsx)(l, { src: '/client/img/settings/rebecca.png' })
                                ]
                            }),
                            (0, f.jsx)('div', {
                                style: {
                                    fontWeight: g.FontWeights.UltraBold,
                                    fontSize: 40,
                                    marginTop: -6,
                                    marginBottom: -2
                                },
                                children: 'Friendly folks, here to help.'
                            }),
                            (0, f.jsxs)('div', {
                                style: {
                                    fontSize: 19,
                                    textAlign: 'center'
                                },
                                children: [
                                    'No robots, ',
                                    (0, f.jsx)('b', { children: 'just real humans!' }),
                                    ' Need something? We\'ll get back to you within ',
                                    (0, f.jsx)('b', { children: '2 business days.' })
                                ]
                            })
                        ]
                    }),
                    (0, f.jsx)(i.default, {}),
                    (0, f.jsx)(m, {
                        image: '/client/img/settings/question.svg',
                        content: (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontWeight: g.FontWeights.UltraBold,
                                        fontSize: 28
                                    },
                                    children: [
                                        'Check our',
                                        ' ',
                                        (0, f.jsx)('a', {
                                            onClick: p,
                                            href: '#',
                                            children: 'helpdesk'
                                        })
                                    ]
                                }),
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontSize: 20,
                                        lineHeight: '22px'
                                    },
                                    children: [
                                        'Your question might have already been answered!',
                                        ' ',
                                        (0, f.jsx)('a', {
                                            href: '#',
                                            onClick: p,
                                            children: 'Click here'
                                        }),
                                        ' ',
                                        'to search our helpdesk for an answer!'
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, f.jsx)(i.default, {
                        style: {
                            marginTop: 30,
                            marginBottom: 30
                        },
                        children: (0, f.jsx)('span', {
                            style: { fontSize: 20 },
                            children: 'If you couldn\'t find your answer...'
                        })
                    }),
                    (0, f.jsx)(m, {
                        image: '/client/img/settings/email.svg',
                        content: (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontWeight: g.FontWeights.UltraBold,
                                        fontSize: 28
                                    },
                                    children: [
                                        'Send us',
                                        ' ',
                                        (0, f.jsx)('a', {
                                            target: '_blank',
                                            href: 'mailto:hello@gimkit.com',
                                            children: 'an email'
                                        })
                                    ]
                                }),
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontSize: 20,
                                        lineHeight: '22px'
                                    },
                                    children: [
                                        'Email us at',
                                        ' ',
                                        (0, f.jsx)('a', {
                                            target: '_blank',
                                            href: 'mailto:hello@gimkit.com',
                                            children: 'hello@gimkit.com'
                                        }),
                                        ' ',
                                        'and we\'ll get back to you soon!'
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, f.jsx)(n, {}),
                    (0, f.jsx)(m, {
                        image: '/client/img/settings/heart.svg',
                        content: (0, f.jsxs)('div', {
                            children: [
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontWeight: g.FontWeights.UltraBold,
                                        fontSize: 28
                                    },
                                    children: [
                                        'Suggest a',
                                        ' ',
                                        (0, f.jsx)('a', {
                                            target: '_blank',
                                            href: 'https://gimkit.nolt.io/',
                                            children: 'new feature'
                                        })
                                    ]
                                }),
                                (0, f.jsxs)('div', {
                                    style: {
                                        fontSize: 20,
                                        lineHeight: '22px'
                                    },
                                    children: [
                                        'Have something you want to see in Gimkit?',
                                        ' ',
                                        (0, f.jsx)('a', {
                                            href: 'https://gimkit.nolt.io/',
                                            target: '_blank',
                                            children: 'Click here'
                                        }),
                                        ' ',
                                        'to visit our feedback center and suggest a new feature.'
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, f.jsx)(n, {})
                ]
            })
        });
    };
    const _p = j.default.div(k || (k = (q => q)``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    var _h = i => {
        const j = (0, g.use100vh)();
        return (0, f.jsx)('div', {
            style: {
                height: j,
                width: '100%'
            },
            className: i.className,
            children: i.children
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'use100vh', function () {
        return _k;
    }, function (f) {
        return _k = f;
    });
    var f = c('.....'), g = function () {
            return g = Object.assign || function (h) {
                for (var i, j = 1, k = arguments.length; j < k; j++)
                    for (var l in i = arguments[j])
                        Object.prototype.hasOwnProperty.call(i, l) && (h[l] = i[l]);
                return h;
            }, g.apply(this, arguments);
        }, h = function (i, j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        }, i = !1, j = (0, f.forwardRef)(function (k, l) {
            var m = k.style, n = h(k, ['style']), o = _k();
            !i && (null == m ? void 0 : m.height) && (i = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var p = g(g({}, m), { height: o ? o + 'px' : '100vh' });
            return b(f).createElement('div', g({
                ref: l,
                style: p
            }, n));
        });
    j.displayName = 'Div100vh';
    function _k() {
        var l = (0, f.useState)(_p), m = l[0], n = l[1], o = function () {
                var p = (0, f.useState)(!1), q = p[0], r = p[1];
                return (0, f.useEffect)(function () {
                    _q() && r(!0);
                }, []), q;
            }();
        return (0, f.useEffect)(function () {
            if (o)
                return window.addEventListener('resize', l), function () {
                    return window.removeEventListener('resize', l);
                };
            function p() {
                var q = _p();
                n(p);
            }
        }, [o]), o ? m : null;
    }
    function _p() {
        return _q() ? window.innerHeight : null;
    }
    function _q() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j, k, l) {
        return function (m) {
            const {
                    prefixCls: n,
                    style: o
                } = m, p = g.useRef(null), [q, r] = g.useState(0), [s, t] = g.useState(0), [u, v] = (0, f.default)(!1, { value: m.open }), {getPrefixCls: w} = g.useContext(h.ConfigContext), x = w(k || 'select', n);
            return g.useEffect(() => {
                if (v(!0), 'undefined' != typeof ResizeObserver) {
                    const y = new ResizeObserver(z => {
                            const A = z[0].target;
                            r(A.offsetHeight + 8), t(A.offsetWidth);
                        }), z = setInterval(() => {
                            var A;
                            const B = l ? `.${ l(x) }` : `.${ x }-dropdown`, C = null === (A = p.current) || void 0 === A ? void 0 : A.querySelector(B);
                            C && (clearInterval(z), y.observe(C));
                        }, 10);
                    return () => {
                        clearInterval(z), y.disconnect();
                    };
                }
            }, []), g.createElement(h.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, g.createElement('div', {
                ref: p,
                style: {
                    paddingBottom: q,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: s
                }
            }, g.createElement(j, Object.assign({}, m, {
                style: Object.assign(Object.assign({}, o), { margin: 0 }),
                open: u,
                visible: u,
                getPopupContainer: () => p.current
            }))));
        };
    }
}), c.register('.....', function (d, e) {
    a(d.exports, 'initMoveMotion', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....');
    const h = new (0, f.Keyframes)('antMoveDownIn', {
            '0%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }), i = new (0, f.Keyframes)('antMoveDownOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(0, 100%, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }), j = new (0, f.Keyframes)('antMoveLeftIn', {
            '0%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }), k = new (0, f.Keyframes)('antMoveLeftOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(-100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }), l = new (0, f.Keyframes)('antMoveRightIn', {
            '0%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            },
            '100%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            }
        }), m = new (0, f.Keyframes)('antMoveRightOut', {
            '0%': {
                transform: 'translate3d(0, 0, 0)',
                transformOrigin: '0 0',
                opacity: 1
            },
            '100%': {
                transform: 'translate3d(100%, 0, 0)',
                transformOrigin: '0 0',
                opacity: 0
            }
        }), n = {
            'move-up': {
                inKeyframes: new (0, f.Keyframes)('antMoveUpIn', {
                    '0%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    },
                    '100%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }
                }),
                outKeyframes: new (0, f.Keyframes)('antMoveUpOut', {
                    '0%': {
                        transform: 'translate3d(0, 0, 0)',
                        transformOrigin: '0 0',
                        opacity: 1
                    },
                    '100%': {
                        transform: 'translate3d(0, -100%, 0)',
                        transformOrigin: '0 0',
                        opacity: 0
                    }
                })
            },
            'move-down': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-left': {
                inKeyframes: j,
                outKeyframes: k
            },
            'move-right': {
                inKeyframes: l,
                outKeyframes: m
            }
        }, _o = (p, q) => {
            const {antCls: r} = p, s = `${ r }-${ q }`, {
                    inKeyframes: t,
                    outKeyframes: u
                } = n[q];
            return [
                (0, g.initMotion)(s, t, u, p.motionDurationMid),
                {
                    [`\n        ${ s }-enter,\n        ${ s }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: p.motionEaseOutCirc
                    },
                    [`${ s }-leave`]: { animationTimingFunction: p.motionEaseInOutCirc }
                }
            ];
        };
}), c.register('.....', function (d, e) {
    var f = c('.....'), g = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    d.exports = function (h, i) {
        var j, k, l, m, n, o, p = !1;
        i || (i = {}), j = i.debug || !1;
        try {
            if (l = f(), m = document.createRange(), n = document.getSelection(), (o = document.createElement('span')).textContent = h, o.ariaHidden = 'true', o.style.all = 'unset', o.style.position = 'fixed', o.style.top = 0, o.style.clip = 'rect(0, 0, 0, 0)', o.style.whiteSpace = 'pre', o.style.webkitUserSelect = 'text', o.style.MozUserSelect = 'text', o.style.msUserSelect = 'text', o.style.userSelect = 'text', o.addEventListener('copy', function (q) {
                    if (q.stopPropagation(), i.format)
                        if (q.preventDefault(), void 0 === q.clipboardData) {
                            j && console.warn('unable to use e.clipboardData'), j && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var r = g[i.format] || g.default;
                            window.clipboardData.setData(r, h);
                        } else
                            q.clipboardData.clearData(), q.clipboardData.setData(i.format, h);
                    i.onCopy && (q.preventDefault(), i.onCopy(q.clipboardData));
                }), document.body.appendChild(o), m.selectNodeContents(o), n.addRange(m), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            p = !0;
        } catch (f) {
            j && console.error('unable to copy using execCommand: ', f), j && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(i.format || 'text', h), i.onCopy && i.onCopy(window.clipboardData), p = !0;
            } catch (f) {
                j && console.error('unable to copy using clipboardData: ', f), j && console.error('falling back to prompt'), k = function (q) {
                    var r = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return q.replace(/#{\s*key\s*}/g, r);
                }('message' in i ? i.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(k, h);
            }
        } finally {
            n && ('function' == typeof n.removeRange ? n.removeRange(m) : n.removeAllRanges()), o && document.body.removeChild(o), l();
        }
        return p;
    };
}), c.register('.....', function (d, e) {
    d.exports = function () {
        var f = document.getSelection();
        if (!f.rangeCount)
            return function () {
            };
        for (var g = document.activeElement, h = [], i = 0; i < f.rangeCount; i++)
            h.push(f.getRangeAt(i));
        switch (g.tagName.toUpperCase()) {
        case 'INPUT':
        case 'TEXTAREA':
            g.blur();
            break;
        default:
            g = null;
        }
        return f.removeAllRanges(), function () {
            'Caret' === f.type && f.removeAllRanges(), f.rangeCount || h.forEach(function (j) {
                f.addRange(j);
            }), g && g.focus();
        };
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    const m = h.default.img.attrs(n => ({ src: n.image }))(l || (l = (n => n)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), n => n.size, n => n.size, n => n.customRightMargin ? n.customRightMargin : 0, n => n.showBorder && `border: solid ${ j.default.Black } 1px;`);
    var _n = o => {
        const [p, q] = g.useState(!1);
        return (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(m, {
                    ...o,
                    onClick: r => {
                        r.stopPropagation(), o.onClick && o.onClick(), o.blockModalOpen || q(!0);
                    }
                }),
                (0, f.jsx)(i.default, {
                    open: p,
                    onCancel: r => {
                        r.stopPropagation(), q(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, f.jsx)('img', {
                        src: (0, k.getCloudinaryUrl)(o.image),
                        style: { width: '100%' }
                    })
                })
            ]
        });
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'getCloudinaryUrl', function () {
        return _f;
    });
    const _f = g => {
            const h = _g(g);
            return h ? g.includes('/video/upload') ? `https://${ _h }/video/upload/${ h }` : `https://${ _h }/image/upload/f_auto,fl_lossy,q_auto/${ h }` : g;
        }, _g = h => {
            if (!_k.some(i => h.includes(i)))
                return null;
            if (h.includes(_i) && !h.includes(`/${ _j }/`))
                return null;
            const i = h.split('/');
            if (!i || !i.length || i.length < 2)
                return null;
            const j = i[i.length - 2], k = i[i.length - 1];
            return j && k && j.startsWith('v') ? `${ j }/${ k }` : null;
        }, _h = 'media.gimkit.com', _i = 'res.cloudinary.com', _j = 'gimkit-production', _k = [
            _h,
            _i
        ];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'useMediaMatch', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var i = (0, f.useMemo)(function () {
                return window.matchMedia(h);
            }, [h]), j = (0, f.useState)(function () {
                return i.matches;
            }), k = j[0], l = j[1];
        return (0, f.useEffect)(function () {
            _g(i.matches);
            var m = function (n) {
                return _g(n.matches);
            };
            return i.addEventListener ? (i.addEventListener('change', m), function () {
                return i.removeEventListener('change', m);
            }) : (i.addListener(m), function () {
                return i.removeListener(m);
            });
        }, [i]), k;
    }
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function (g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function () {
                    return h[i];
                }
            });
        } : function (g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }), g = d.exports && d.exports.__exportStar || function (h, i) {
            for (var j in h)
                'default' === j || Object.prototype.hasOwnProperty.call(i, j) || f(i, h, j);
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), g(c('.....'), d.exports), g(c('.....'), d.exports), g(c('.....'), d.exports);
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useBreakpoints = d.exports.useBreakpoint = void 0;
    var f = c('.....');
    d.exports.useBreakpoint = function (g) {
        return (0, f.useWindowSize)().width < g;
    }, d.exports.useBreakpoints = function (g) {
        var h = (0, f.useWindowSize)().width;
        return g.map(function (i) {
            return h < i;
        });
    };
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__createBinding || (Object.create ? function (g, h, i, j) {
            void 0 === j && (j = i), Object.defineProperty(g, j, {
                enumerable: !0,
                get: function () {
                    return h[i];
                }
            });
        } : function (g, h, i, j) {
            void 0 === j && (j = i), g[j] = h[i];
        }), g = d.exports && d.exports.__setModuleDefault || (Object.create ? function (h, i) {
            Object.defineProperty(h, 'default', {
                enumerable: !0,
                value: i
            });
        } : function (h, i) {
            h.default = i;
        }), h = d.exports && d.exports.__importStar || function (i) {
            if (i && i.__esModule)
                return i;
            var j = {};
            if (null != i)
                for (var k in i)
                    'default' !== k && Object.prototype.hasOwnProperty.call(i, k) && f(j, i, k);
            return g(j, i), j;
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useWindowSize = void 0;
    var i = h(c('.....'));
    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    d.exports.useWindowSize = function () {
        var k = i.useState(j()), l = k[0], m = k[1];
        return i.useLayoutEffect(function () {
            function n() {
                m(j());
            }
            return window.addEventListener('resize', n), function () {
                return window.removeEventListener('resize', n);
            };
        }, []), l;
    };
}), c.register('.....', function (d, e) {
    var f = d.exports && d.exports.__assign || function () {
            return f = Object.assign || function (g) {
                for (var h, i = 1, j = arguments.length; i < j; i++)
                    for (var k in h = arguments[i])
                        Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
                return g;
            }, f.apply(this, arguments);
        }, g = d.exports && d.exports.__createBinding || (Object.create ? function (h, i, j, k) {
            void 0 === k && (k = j), Object.defineProperty(h, k, {
                enumerable: !0,
                get: function () {
                    return i[j];
                }
            });
        } : function (h, i, j, k) {
            void 0 === k && (k = j), h[k] = i[j];
        }), h = d.exports && d.exports.__setModuleDefault || (Object.create ? function (i, j) {
            Object.defineProperty(i, 'default', {
                enumerable: !0,
                value: j
            });
        } : function (i, j) {
            i.default = j;
        }), i = d.exports && d.exports.__importStar || function (j) {
            if (j && j.__esModule)
                return j;
            var k = {};
            if (null != j)
                for (var l in j)
                    'default' !== l && Object.prototype.hasOwnProperty.call(j, l) && g(k, j, l);
            return h(k, j), k;
        };
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.useComponentSize = void 0;
    var j = i(c('.....'));
    d.exports.useComponentSize = function () {
        var k = j.useState({
                height: 0,
                width: 0
            }), l = k[0], m = k[1], n = j.useRef(), o = j.useCallback(function () {
                if (n.current) {
                    var p = n.current.offsetHeight, q = n.current.offsetWidth;
                    p === l.height && q === l.width || m({
                        height: p,
                        width: q
                    });
                }
            }, [
                l.height,
                l.width
            ]);
        return j.useLayoutEffect(function () {
            if (n && n.current) {
                var p = new ResizeObserver(o);
                return p.observe(n.current), function () {
                    return p.disconnect();
                };
            }
        }, [
            n,
            o
        ]), f({ ref: n }, l);
    };
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderTheme', function () {
        return f;
    }), (g = f || (f = {})).light = 'light', g.dark = 'dark';
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'SiteHeaderAlpha', function () {
        return f;
    }), (g = f || (f = {})).none = 'none', g.standard = 'standard', g.darker = 'darker';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        name: c('.....').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'UsergroupAddOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z' }
                }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'LogoutOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z' }
                }]
        },
        name: 'logout',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'CheckOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z' }
                }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = function (k, l) {
            return g.createElement(i.default, (0, f.default)((0, f.default)({}, k), {}, {
                ref: l,
                icon: h.default
            }));
        };
    j.displayName = 'DownOutlined';
    var _k = g.forwardRef(j);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                    tag: 'path',
                    attrs: { d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z' }
                }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _q;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = function (q) {
            (0, l.default)(d, q);
            var r = (0, m.default)(d);
            function s(t) {
                var u;
                (0, j.default)(this, s), (u = r.call(this, t)).handleChange = function (v) {
                    var w = u.props, x = w.disabled, y = w.onChange;
                    x || ('checked' in u.props || u.setState({ checked: v.target.checked }), y && y({
                        target: (0, i.default)((0, i.default)({}, u.props), {}, { checked: v.target.checked }),
                        stopPropagation: function () {
                            v.stopPropagation();
                        },
                        preventDefault: function () {
                            v.preventDefault();
                        },
                        nativeEvent: v.nativeEvent
                    }));
                }, u.saveInput = function (v) {
                    u.input = v;
                };
                var v = 'checked' in t ? t.checked : t.defaultChecked;
                return u.state = { checked: v }, u;
            }
            return (0, k.default)(s, [
                {
                    key: 'focus',
                    value: function () {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function () {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var v, w = this.props, x = w.prefixCls, y = w.className, z = w.style, A = w.name, B = w.id, C = w.type, D = w.disabled, E = w.readOnly, F = w.tabIndex, G = w.onClick, H = w.onFocus, I = w.onBlur, J = w.onKeyDown, K = w.onKeyPress, L = w.onKeyUp, M = w.autoFocus, N = w.value, O = w.required, P = (0, h.default)(w, [
                                'prefixCls',
                                'className',
                                'style',
                                'name',
                                'id',
                                'type',
                                'disabled',
                                'readOnly',
                                'tabIndex',
                                'onClick',
                                'onFocus',
                                'onBlur',
                                'onKeyDown',
                                'onKeyPress',
                                'onKeyUp',
                                'autoFocus',
                                'value',
                                'required'
                            ]), Q = Object.keys(P).reduce(function (R, S) {
                                return 'aria-' !== S.substr(0, 5) && 'data-' !== S.substr(0, 5) && 'role' !== S || (R[S] = P[S]), R;
                            }, {}), R = this.state.checked, S = u(o)(x, y, (v = {}, (0, g.default)(v, ''.concat(x, '-checked'), R), (0, g.default)(v, ''.concat(x, '-disabled'), D), v));
                        return u(n).createElement('span', {
                            className: S,
                            style: z
                        }, u(n).createElement('input', (0, f.default)({
                            name: A,
                            id: B,
                            type: C,
                            required: O,
                            readOnly: E,
                            disabled: D,
                            tabIndex: F,
                            className: ''.concat(x, '-input'),
                            checked: !!R,
                            onClick: G,
                            onFocus: H,
                            onBlur: I,
                            onKeyUp: L,
                            onKeyDown: J,
                            onKeyPress: K,
                            onChange: this.handleChange,
                            autoFocus: M,
                            ref: this.saveInput,
                            value: N
                        }, Q)), u(n).createElement('span', { className: ''.concat(x, '-inner') }));
                    }
                }
            ], [{
                    key: 'getDerivedStateFromProps',
                    value: function (v, w) {
                        return 'checked' in v ? (0, i.default)((0, i.default)({}, w), {}, { checked: v.checked }) : null;
                    }
                }]), s;
        }(n.Component);
    p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function () {
        },
        onBlur: function () {
        },
        onChange: function () {
        },
        onKeyDown: function () {
        },
        onKeyPress: function () {
        },
        onKeyUp: function () {
        }
    };
    var _q = p;
}), c.register('.....', function (d, e) {
    function f() {
        return f = Object.assign || function (g) {
            for (var h = 1; h < arguments.length; h++) {
                var i = arguments[h];
                for (var j in i)
                    Object.prototype.hasOwnProperty.call(i, j) && (g[j] = i[j]);
            }
            return g;
        }, f.apply(this, arguments);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h, i) {
        return h in g ? Object.defineProperty(g, h, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : g[h] = i, g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if (null == h)
            return {};
        var j, k, l = (0, f.default)(h, i);
        if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(h);
            for (k = 0; k < m.length; k++)
                j = m[k], i.indexOf(j) >= 0 || Object.prototype.propertyIsEnumerable.call(h, j) && (_g[j] = h[j]);
        }
        return _g;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (null == g)
            return {};
        var i, j, k = {}, l = Object.keys(g);
        for (f = 0; f < l.length; f++)
            i = l[f], h.indexOf(i) >= 0 || (k[i] = g[i]);
        return k;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _j;
    });
    var f = c('.....');
    function g(h, i) {
        var j = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(h);
            i && (k = k.filter(function (l) {
                return Object.getOwnPropertyDescriptor(h, l).enumerable;
            })), j.push.apply(j, k);
        }
        return j;
    }
    function _j(k) {
        for (var l = 1; l < arguments.length; l++) {
            var m = null != arguments[l] ? arguments[l] : {};
            l % 2 ? g(Object(m), !0).forEach(function (n) {
                (0, f.default)(k, n, m[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(m)) : g(Object(m)).forEach(function (n) {
                Object.defineProperty(k, n, Object.getOwnPropertyDescriptor(m, n));
            });
        }
        return k;
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        if (!(g instanceof h))
            throw new TypeError('Cannot call a class as a function');
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f(g, h) {
        for (var i = 0; i < h.length; i++) {
            var j = h[i];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(g, f.key, f);
        }
    }
    function i(j, k, l) {
        return k && f(j.prototype, k), l && f(j, l), j;
    }
    a(d.exports, 'default', function () {
        return i;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    function _g(h, i) {
        if ('function' != typeof i && null !== i)
            throw new TypeError('Super expression must either be null or a function');
        h.prototype = Object.create(i && i.prototype, {
            constructor: {
                value: h,
                writable: !0,
                configurable: !0
            }
        }), i && (0, f.default)(h, i);
    }
}), c.register('.....', function (d, e) {
    function f(g, h) {
        return f = Object.setPrototypeOf || function (i, j) {
            return i.__proto__ = j, i;
        }, f(g, h);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    function _i(j) {
        var k = (0, g.default)();
        return function () {
            var l, m = (0, f.default)(j);
            if (k) {
                var n = (0, f.default)(this).constructor;
                l = Reflect.construct(m, arguments, n);
            } else
                l = m.apply(this, arguments);
            return (0, h.default)(this, l);
        };
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function (h) {
            return h.__proto__ || Object.getPrototypeOf(h);
        }, f(g);
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    function f() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
            })), !0;
        } catch (a) {
            return !1;
        }
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _h;
    });
    var f = c('.....'), g = c('.....');
    function _h(i, j) {
        if (j && ('object' === b(f)(j) || 'function' == typeof j))
            return j;
        if (void 0 !== j)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, g.default)(i);
    }
}), c.register('.....', function (d, e) {
    function f(g) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (d.exports = f = function (h) {
            return typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0) : (d.exports = f = function (h) {
            return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
        }, d.exports.default = d.exports, d.exports.__esModule = !0), f(g);
    }
    d.exports = f, d.exports.default = d.exports, d.exports.__esModule = !0;
}), c.register('.....', function (d, e) {
    function f(g) {
        if (void 0 === g)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return g;
    }
    a(d.exports, 'default', function () {
        return f;
    });
}), c.register('.....', function (d, e) {
    a(d.exports, 'onlyOfferAnnualUpgrade', function () {
        return _f;
    });
    const _f = () => !1;
}), c.register('.....', function (d, e) {
    a(d.exports, 'TrackPostHogEvent', function () {
        return _f;
    });
    c('.....');
    const _f = g => {
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _i;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    var _i = (j, k) => {
        const [l, m] = f.useState(() => {
            var n, o;
            const p = j && 'current' in j ? j.current : j;
            return p ? [
                p.offsetWidth,
                p.offsetHeight
            ] : [
                null !== (n = null == k ? void 0 : k.initialWidth) && void 0 !== n ? n : 0,
                null !== (o = null == k ? void 0 : k.initialHeight) && void 0 !== o ? o : 0
            ];
        });
        return (0, h.default)(() => {
            const n = j && 'current' in j ? j.current : j;
            n && m([
                n.offsetWidth,
                n.offsetHeight
            ]);
        }, [j]), (0, g.default)(j, n => {
            const o = n.target;
            m([
                o.offsetWidth,
                o.offsetHeight
            ]);
        }), l;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _l;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    const k = () => j || (j = function () {
        const l = new Map(), m = new (0, f.default)((0, i.default)((n, o) => {
                var p;
                if (1 === n.length)
                    null === (p = l.get(n[0].target)) || void 0 === p || p(n[0], o);
                else
                    for (let q = 0; q < n.length; q++) {
                        var r;
                        null === (r = l.get(n[q].target)) || void 0 === r || r(n[q], o);
                    }
            }));
        return {
            observer: m,
            subscribe(n, o) {
                m.observe(n), l.set(n, o);
            },
            unsubscribe(n) {
                m.unobserve(n), l.delete(n);
            }
        };
    }());
    var _l = function (m, n) {
        const o = k(), p = (0, h.default)(n);
        return (0, g.default)(() => {
            let q = !1;
            const r = m && 'current' in m ? m.current : m;
            if (r)
                return o.subscribe(r, (s, t) => {
                    q || p.current(s, t);
                }), () => {
                    q = !0, o.unsubscribe(r);
                };
        }, [
            m,
            o,
            p
        ]), o.observer;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = b(c('.....'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    var _g = h => {
        const i = f.useRef(h);
        return f.useEffect(() => {
            i.current = h;
        }), i;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = function (g) {
        var h = [], i = null, j = function () {
                for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++)
                    l[m] = arguments[m];
                h = l, i || (i = requestAnimationFrame(function () {
                    i = null, g.apply(void 0, h);
                }));
            };
        return j.cancel = function () {
            i && (cancelAnimationFrame(i), i = null);
        }, j;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _n;
    });
    var f = c('.....'), g = function (h, i) {
            return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (j, k) {
                j.__proto__ = k;
            } || function (j, k) {
                for (var l in k)
                    k.hasOwnProperty(l) && (j[l] = k[l]);
            }, g(h, i);
        };
    var h = function () {
        return h = Object.assign || function (i) {
            for (var j, k = 1, l = arguments.length; k < l; k++)
                for (var m in j = arguments[k])
                    Object.prototype.hasOwnProperty.call(j, m) && (i[m] = j[m]);
            return i;
        }, h.apply(this, arguments);
    };
    var i = 'Pixel', j = 'Percent', k = {
            unit: j,
            value: 0.8
        };
    function l(m) {
        return 'number' == typeof m ? {
            unit: j,
            value: 100 * m
        } : 'string' == typeof m ? m.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: i,
            value: parseFloat(m)
        } : m.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: j,
            value: parseFloat(m)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), k) : (console.warn('scrollThreshold should be string or number'), k);
    }
    var m = function (n) {
            function o(p) {
                var q = n.call(this, p) || this;
                return o.lastScrollTop = 0, o.actionTriggered = !1, o.startY = 0, o.currentY = 0, o.dragging = !1, o.maxPullDownDistance = 0, o.getScrollableTarget = function () {
                    return o.props.scrollableTarget instanceof HTMLElement ? o.props.scrollableTarget : 'string' == typeof o.props.scrollableTarget ? document.getElementById(o.props.scrollableTarget) : (null === o.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, o.onStart = function (r) {
                    o.lastScrollTop || (o.dragging = !0, r instanceof MouseEvent ? o.startY = r.pageY : r instanceof TouchEvent && (o.startY = r.touches[0].pageY), o.currentY = o.startY, o._infScroll && (o._infScroll.style.willChange = 'transform', o._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, o.onMove = function (r) {
                    o.dragging && (r instanceof MouseEvent ? o.currentY = r.pageY : r instanceof TouchEvent && (o.currentY = r.touches[0].pageY), o.currentY < o.startY || (o.currentY - o.startY >= Number(o.props.pullDownToRefreshThreshold) && o.setState({ pullToRefreshThresholdBreached: !0 }), o.currentY - o.startY > 1.5 * o.maxPullDownDistance || o._infScroll && (o._infScroll.style.overflow = 'visible', o._infScroll.style.transform = 'translate3d(0px, ' + (o.currentY - o.startY) + 'px, 0px)')));
                }, o.onEnd = function () {
                    o.startY = 0, o.currentY = 0, o.dragging = !1, o.state.pullToRefreshThresholdBreached && (o.props.refreshFunction && o.props.refreshFunction(), o.setState({ pullToRefreshThresholdBreached: !1 })), requestAnimationFrame(function () {
                        o._infScroll && (o._infScroll.style.overflow = 'auto', o._infScroll.style.transform = 'none', o._infScroll.style.willChange = 'none');
                    });
                }, o.onScrollListener = function (r) {
                    'function' == typeof o.props.onScroll && setTimeout(function () {
                        return o.props.onScroll && o.props.onScroll(r);
                    }, 0);
                    var s = o.props.height || o._scrollableNode ? r.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    o.actionTriggered || ((o.props.inverse ? o.isElementAtTop(s, o.props.scrollThreshold) : o.isElementAtBottom(s, o.props.scrollThreshold)) && o.props.hasMore && (o.actionTriggered = !0, o.setState({ showLoader: !0 }), o.props.next && o.props.next()), o.lastScrollTop = s.scrollTop);
                }, o.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, o.throttledOnScrollListener = function (r, s, t, u) {
                    var v, w = !1, x = 0;
                    function y() {
                        v && clearTimeout(v);
                    }
                    function z() {
                        var A = this, B = Date.now() - x, C = arguments;
                        function D() {
                            x = Date.now(), t.apply(z, C);
                        }
                        function E() {
                            v = void 0;
                        }
                        w || (u && !v && D(), y(), void 0 === u && B > r ? D() : !0 !== s && (v = setTimeout(u ? E : D, void 0 === u ? r - B : r)));
                    }
                    return 'boolean' != typeof s && (u = t, t = s, s = void 0), z.cancel = function () {
                        y(), w = !0;
                    }, z;
                }(150, o.onScrollListener).bind(o), o.onStart = o.onStart.bind(o), o.onMove = o.onMove.bind(o), o.onEnd = o.onEnd.bind(o), o;
            }
            return function (q, r) {
                function s() {
                    this.constructor = q;
                }
                g(q, r), q.prototype = null === r ? Object.create(r) : (s.prototype = r.prototype, new s());
            }(o, n), o.prototype.componentDidMount = function () {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, o.prototype.componentWillUnmount = function () {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, o.prototype.UNSAFE_componentWillReceiveProps = function (q) {
                this.props.dataLength !== q.dataLength && (this.actionTriggered = !1, this.setState({ showLoader: !1 }));
            }, o.prototype.isElementAtTop = function (q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight, t = l(r);
                return t.unit === i ? q.scrollTop <= t.value + s - q.scrollHeight + 1 || 0 === q.scrollTop : q.scrollTop <= t.value / 100 + s - q.scrollHeight + 1 || 0 === q.scrollTop;
            }, o.prototype.isElementAtBottom = function (q, r) {
                void 0 === r && (r = 0.8);
                var s = q === document.body || q === document.documentElement ? window.screen.availHeight : q.clientHeight, t = l(r);
                return t.unit === i ? q.scrollTop + s >= q.scrollHeight - t.value : q.scrollTop + s >= t.value / 100 * q.scrollHeight;
            }, o.prototype.render = function () {
                var q = this, r = h({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style), s = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length), t = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {};
                return b(f).createElement('div', {
                    style: t,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(f).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function (u) {
                        return q._infScroll = u;
                    },
                    style: r
                }, this.props.pullDownToRefresh && b(f).createElement('div', {
                    style: { position: 'relative' },
                    ref: function (u) {
                        return q._pullDown = u;
                    }
                }, b(f).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !s && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, o;
        }(f.Component), _n = m;
}), c.register('.....', function (d, e) {
    a(d.exports, 'NavigateTo', function () {
        return _g;
    });
    var f = c('.....');
    const _g = h => {
        f.history.push(h);
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _g;
    });
    var f = c('.....');
    c('.....');
    var _g = h => (0, f.jsx)('i', {
        className: `${ h.name }${ h.className ? ` ${ h.className }` : '' }`,
        style: h.style
    });
}), c.register('.....', function (d, e) {
    Object.defineProperty(d.exports, '__esModule', { value: !0 }), d.exports.lazyWithPreload = void 0;
    var f = c('.....');
    function g(h) {
        var i, j, k = (0, f.lazy)(h), l = (0, f.forwardRef)(function (m, n) {
                var o = (0, f.useRef)(null != i ? i : g);
                return (0, f.createElement)(o.current, Object.assign(n ? { ref: n } : {}, m));
            });
        return l.preload = function () {
            return j || (j = h().then(function (m) {
                return i = m.default;
            })), j;
        }, l;
    }
    d.exports.lazyWithPreload = g, d.exports.default = g;
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _f;
    });
    var _f = {
        White: 'white',
        Black: 'black',
        BackgroundGray: '#eeeeee',
        PrimaryBlue: '#05f',
        SecondaryPurple: '#1E076B',
        DisabledGray: '#838383',
        LightSuccessGreen: '#6abf69',
        DarkSuccessGreen: '#2e7d32'
    };
});