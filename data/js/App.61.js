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
    var f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....'), k = b('.....'), l = b('.....'), m = b('.....'), n = b('.....'), o = b('.....'), p = b('.....'), q = b('.....'), r = b('.....'), s = b('.....'), t = b('.....');
    let u, v, w, x, y, z, A = B => B;
    var _B = () => {
        const [C, D] = g.useState(!0), [E, F] = g.useState(''), [G, H] = g.useState(''), [I, J] = g.useState((0, o.isLoggedIn)() ? (0, o.getUser)().email : ''), [K, L] = g.useState(!1), {plan: M} = (0, r.useParams)();
        g.useEffect(() => {
            (0, o.request)({
                url: '/api/quote/fetch-plans',
                success: N => {
                    M && (N && N.plans && !N.plans.includes(M) ? (0, p.throwError)({
                        title: 'Invalid plan',
                        onOk: () => window.location.href = '/'
                    }) : (F(M), D(!1)));
                },
                error: () => (0, p.throwError)({ title: 'Plan not found' })
            });
        }, []);
        const N = G && I && (0, q.validateEmail)(I), O = P => {
                H(P.target.value);
            }, P = Q => {
                J(Q.target.value);
            }, Q = () => {
                !K && N && (L(!0), (0, o.request)({
                    url: '/api/quote/createFromPlan',
                    method: 'post',
                    data: {
                        planId: E,
                        email: I,
                        name: G
                    },
                    success: R => {
                        (0, s.NavigateTo)(`/quote/${ R.quoteId }`);
                    },
                    error: () => (0, p.throwError)({
                        title: 'Error creating quote',
                        content: 'Please contact support'
                    }),
                    both: () => L(!1)
                }));
            };
        return (0, f.jsxs)(_C, {
            className: 'flex-column vc',
            children: [
                (0, f.jsx)(t.default, { includeSpacer: !0 }),
                (0, f.jsx)(_D, {
                    children: C ? (0, f.jsx)('div', {
                        className: 'maxWidth hc flex',
                        children: (0, f.jsx)(n.default, {})
                    }) : (0, f.jsxs)(f.Fragment, {
                        children: [
                            (0, f.jsx)(o.Title, { title: 'New Quote' }),
                            (0, f.jsxs)(_E, {
                                className: 'flex vc wrap',
                                children: [
                                    (0, f.jsx)('img', {
                                        src: '/client/img/quote/together.svg',
                                        style: {
                                            height: 120,
                                            width: 120,
                                            marginRight: 15
                                        }
                                    }),
                                    (0, f.jsxs)('div', {
                                        children: [
                                            (0, f.jsx)(_F, { children: 'New Quote' }),
                                            (0, f.jsx)(_G, { children: 'We\'re so excited to get your group on Gimkit Pro!' })
                                        ]
                                    })
                                ]
                            }),
                            (0, f.jsx)(l.default, {}),
                            (0, f.jsx)(_H, { children: 'What is the name of your group?' }),
                            (0, f.jsx)(m.default, {
                                onChange: O,
                                placeholder: 'Group name...',
                                size: 'large',
                                maxLength: 55,
                                onPressEnter: Q
                            }),
                            (0, f.jsx)('div', { style: { height: 10 } }),
                            (0, f.jsx)(_H, { children: 'What is your email?' }),
                            (0, f.jsx)(m.default, {
                                onChange: P,
                                placeholder: 'Email here...',
                                size: 'large',
                                value: I,
                                onPressEnter: Q,
                                type: 'email'
                            }),
                            (0, f.jsxs)('div', {
                                className: 'maxWidth flex',
                                style: {
                                    justifyContent: 'space-between',
                                    marginTop: 5
                                },
                                children: [
                                    (0, f.jsx)('div', {}),
                                    (0, f.jsx)(k.default, {
                                        onClick: Q,
                                        loading: K,
                                        disabled: !N,
                                        type: 'primary',
                                        children: 'Submit'
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    };
    const _C = h.default.div(u || (u = A`
  min-height: 100%;
  background: ${ 0 };
  width: 100%;
  color: ${ 0 };
  font-family: ${ 0 };
`), i.default.Snow, i.default.Black, j.Fonts.SFPro), _D = h.default.div(v || (v = A`
  width: 100%;
  max-width: 550px;
  padding: 20px;
`)), _E = h.default.div(w || (w = A`
  width: 100%;
`)), _F = h.default.h1(x || (x = A`
  font-size: 39px;
  color: ${ 0 };
  font-weight: ${ 0 };
  margin-bottom: -10px;
`), i.default.Black, j.FontWeights.UltraBold), _G = h.default.p(y || (y = A`
  font-size: 17px;
  margin-bottom: 0px;
`)), _H = h.default.h2(z || (z = A`
  font-weight: ${ 0 };
  color: ${ 0 };
  font-size: 22px;
  margin-bottom: 0px;
`), j.FontWeights.Bold, i.default.Black);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = e.createContext(f.default);
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....'), f = b('.....');
    var _g = {
        login: new (0, e.default)(),
        navigation: new (0, f.default)()
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'informationTypes', function () {
        return _g;
    }), a(c.exports, 'default', function () {
        return _y;
    });
    var e = b('.....'), f = b('.....');
    const _g = {
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
        }, h = {
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
            userExists: i,
            email: j,
            accountType: k,
            googleToken: l,
            firstName: m,
            lastName: n,
            password: o,
            schoolId: p,
            districtId: q,
            country: r,
            areaOfExpertise: s,
            gradeLevel: t,
            organization: u,
            acceptsLatestPolicies: v,
            authenticated: w
        } = h;
    class x {
        constructor() {
            this.userExists = i, this.email = j, this.accountType = k, this.googleToken = l, this.firstName = m, this.lastName = n, this.password = o, this.schoolId = p, this.districtId = q, this.country = r, this.areaOfExpertise = s, this.gradeLevel = t, this.organization = u, this.acceptsLatestPolicies = v, this.authenticated = w, this.informationNeeded = f.observable.array([_g.email]), this.reset = () => {
                Object.keys(h).forEach(y => this[y] = h[y]), this.informationNeeded.replace([_g.email]);
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], x.prototype, 'userExists', void 0), (0, e.__decorate)([f.observable], x.prototype, 'email', void 0), (0, e.__decorate)([f.observable], x.prototype, 'accountType', void 0), (0, e.__decorate)([f.observable], x.prototype, 'googleToken', void 0), (0, e.__decorate)([f.observable], x.prototype, 'firstName', void 0), (0, e.__decorate)([f.observable], x.prototype, 'lastName', void 0), (0, e.__decorate)([f.observable], x.prototype, 'password', void 0), (0, e.__decorate)([f.observable], x.prototype, 'schoolId', void 0), (0, e.__decorate)([f.observable], x.prototype, 'districtId', void 0), (0, e.__decorate)([f.observable], x.prototype, 'country', void 0), (0, e.__decorate)([f.observable], x.prototype, 'areaOfExpertise', void 0), (0, e.__decorate)([f.observable], x.prototype, 'gradeLevel', void 0), (0, e.__decorate)([f.observable], x.prototype, 'organization', void 0), (0, e.__decorate)([f.observable], x.prototype, 'acceptsLatestPolicies', void 0), (0, e.__decorate)([f.observable], x.prototype, 'authenticated', void 0), (0, e.__decorate)([f.observable], x.prototype, 'informationNeeded', void 0), (0, e.__decorate)([f.action], x.prototype, 'reset', void 0);
    var _y = x;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _s;
    });
    var e = b('.....'), f = b('.....');
    const g = {
            currentStage: b('.....').default.email,
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
            currentStage: h,
            emailSignInBlocked: i,
            creatingAccount: j,
            loggingIn: k,
            updatingAccountInformation: l,
            loginError: m,
            redirectUri: n,
            classJoiningId: o,
            classJoiningName: p,
            classJoiningTeacherName: q
        } = g;
    class r {
        constructor() {
            this.currentStage = h, this.emailSignInBlocked = i, this.creatingAccount = j, this.loggingIn = k, this.updatingAccountInformation = l, this.loginError = m, this.redirectUri = n, this.classJoiningId = o, this.classJoiningName = p, this.classJoiningTeacherName = q, this.reset = () => {
                Object.keys(g).forEach(s => this[s] = g[s]);
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], r.prototype, 'currentStage', void 0), (0, e.__decorate)([f.observable], r.prototype, 'emailSignInBlocked', void 0), (0, e.__decorate)([f.observable], r.prototype, 'creatingAccount', void 0), (0, e.__decorate)([f.observable], r.prototype, 'loggingIn', void 0), (0, e.__decorate)([f.observable], r.prototype, 'updatingAccountInformation', void 0), (0, e.__decorate)([f.observable], r.prototype, 'loginError', void 0), (0, e.__decorate)([f.observable], r.prototype, 'redirectUri', void 0), (0, e.__decorate)([f.observable], r.prototype, 'classJoiningId', void 0), (0, e.__decorate)([f.observable], r.prototype, 'classJoiningName', void 0), (0, e.__decorate)([f.observable], r.prototype, 'classJoiningTeacherName', void 0), (0, e.__decorate)([f.action], r.prototype, 'reset', void 0);
    var _s = r;
}), b.register('.....', function (c, d) {
    let e;
    var f;
    a(c.exports, 'default', function () {
        return _g;
    }), (f = e || (e = {})).email = 'email', f.password = 'password', f.accountType = 'accountType', f.studentSpecificInfo = 'studentSpecificInfo', f.nameAndPassword = 'nameAndPassword', f.school = 'school', f.educatorSpecificInfo = 'educatorSpecificInfo', f.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', f.acceptPolicies = 'acceptPolicies', f.verifyClass = 'verifyClass';
    var _g = e;
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _h;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....'), g = b('.....');
    var _h = (0, f.observer)(i => (0, e.jsx)(g.default, {
        disabled: i.disabled,
        size: i.size || 'middle',
        type: 'primary',
        onClick: i.onClick,
        style: Object.assign({ width: '100%' }, i.style),
        loading: i.loading,
        children: i.children
    }));
}), b.register('.....', function (c, d) {
    a(c.exports, 'default', function () {
        return _g;
    });
    var e = b('.....');
    b('.....');
    var f = b('.....');
    var _g = h => h.error ? (0, e.jsx)(f.default, {
        message: 'Error',
        style: h.style,
        type: 'error',
        description: h.error && h.error.message && h.error.message.text ? h.error.message.text : 'string' == typeof h.error ? h.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
});