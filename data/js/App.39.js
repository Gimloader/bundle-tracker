function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('igKcP', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'default', function() {
        return _s;
    });
    var f = b('gRbUn'),
        g = b('O0Kav'),
        h = b('UmTL74'),
        i = b('Wf/oP4'),
        j = b('u4s09'),
        k = b('emwAC'),
        l = b('quE27'),
        m = b('nKuOQ'),
        n = b('gK+6L'),
        o = b('+cTfn'),
        p = b('KxkP827'),
        q = b('2NZ+5');
    let r;
    var _s = () => {
        const [t, u] = g.useState(!1), v = (0, o.useLocation)(), w = new URLSearchParams(v.search).get('accountType'), x = (0, l.getUrlVariable)('class');
        return w && n.default[w] && (i.default.login.accountType = n.default[w]), g.useEffect(() => {
            i.default.navigation.redirectUri = '';
            let y = (0, l.getUrlVariable)('location') ? decodeURIComponent((0, l.getUrlVariable)('location')) : '';
            y && !(0, q.IsURLFromUs)(y) && (y = '');
            const z = () => {
                i.default.navigation.reset(), i.default.login.reset();
            };
            return y && (i.default.navigation.redirectUri = y), (0, l.isLoggedIn)() ? ((0, p.NavigateTo)(y || m.DASHBOARD), z) : (window.location.href.includes('login') && u(!0), z);
        }, []), (0, f.jsxs)(f.Fragment, {
            children: [
                (0, f.jsx)(l.Title, {
                    title: x ? 'Join Class' : t ? 'Login' : 'Sign Up'
                }),
                (0, f.jsx)(h.default.Provider, {
                    value: i.default,
                    children: (0, f.jsx)(_t, {
                        children: (0, f.jsx)(k.default, {})
                    })
                })
            ]
        });
    };
    const _t = j.default.div(r || (r = (a => a)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
}), b.register('UmTL74', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('O0Kav'),
        f = b('Wf/oP4');
    var _g = e.createContext(f.default);
}), b.register('Wf/oP4', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('zB1Rq4'),
        f = b('ZbPFC4');
    var _g = {
        login: new(0, e.default)(),
        navigation: new(0, f.default)()
    };
}), b.register('zB1Rq4', function(c, d) {
    a(c.exports, 'informationTypes', function() {
        return _g;
    }), a(c.exports, 'default', function() {
        return _y;
    });
    var e = b('4F2ZN'),
        f = b('JkQCT');
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
        },
        h = {
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
        },
        {
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
                Object.keys(h).forEach(a => this[a] = h[a]), this.informationNeeded.replace([_g.email]);
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], x.prototype, 'userExists', void 0), (0, e.__decorate)([f.observable], x.prototype, 'email', void 0), (0, e.__decorate)([f.observable], x.prototype, 'accountType', void 0), (0, e.__decorate)([f.observable], x.prototype, 'googleToken', void 0), (0, e.__decorate)([f.observable], x.prototype, 'firstName', void 0), (0, e.__decorate)([f.observable], x.prototype, 'lastName', void 0), (0, e.__decorate)([f.observable], x.prototype, 'password', void 0), (0, e.__decorate)([f.observable], x.prototype, 'schoolId', void 0), (0, e.__decorate)([f.observable], x.prototype, 'districtId', void 0), (0, e.__decorate)([f.observable], x.prototype, 'country', void 0), (0, e.__decorate)([f.observable], x.prototype, 'areaOfExpertise', void 0), (0, e.__decorate)([f.observable], x.prototype, 'gradeLevel', void 0), (0, e.__decorate)([f.observable], x.prototype, 'organization', void 0), (0, e.__decorate)([f.observable], x.prototype, 'acceptsLatestPolicies', void 0), (0, e.__decorate)([f.observable], x.prototype, 'authenticated', void 0), (0, e.__decorate)([f.observable], x.prototype, 'informationNeeded', void 0), (0, e.__decorate)([f.action], x.prototype, 'reset', void 0);
    var _y = x;
}), b.register('ZbPFC4', function(c, d) {
    a(c.exports, 'default', function() {
        return _s;
    });
    var e = b('4F2ZN'),
        f = b('JkQCT');
    const g = {
            currentStage: b('wM8kY4').default.email,
            emailSignInBlocked: !1,
            creatingAccount: !1,
            loggingIn: !1,
            updatingAccountInformation: !1,
            loginError: null,
            redirectUri: '',
            classJoiningId: '',
            classJoiningName: '',
            classJoiningTeacherName: ''
        },
        {
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
                Object.keys(g).forEach(a => this[a] = g[a]);
            }, (0, f.makeObservable)(this);
        }
    }
    (0, e.__decorate)([f.observable], r.prototype, 'currentStage', void 0), (0, e.__decorate)([f.observable], r.prototype, 'emailSignInBlocked', void 0), (0, e.__decorate)([f.observable], r.prototype, 'creatingAccount', void 0), (0, e.__decorate)([f.observable], r.prototype, 'loggingIn', void 0), (0, e.__decorate)([f.observable], r.prototype, 'updatingAccountInformation', void 0), (0, e.__decorate)([f.observable], r.prototype, 'loginError', void 0), (0, e.__decorate)([f.observable], r.prototype, 'redirectUri', void 0), (0, e.__decorate)([f.observable], r.prototype, 'classJoiningId', void 0), (0, e.__decorate)([f.observable], r.prototype, 'classJoiningName', void 0), (0, e.__decorate)([f.observable], r.prototype, 'classJoiningTeacherName', void 0), (0, e.__decorate)([f.action], r.prototype, 'reset', void 0);
    var _s = r;
}), b.register('wM8kY4', function(c, d) {
    let e;
    var f;
    a(c.exports, 'default', function() {
        return _g;
    }), (f = e || (e = {})).email = 'email', f.password = 'password', f.accountType = 'accountType', f.studentSpecificInfo = 'studentSpecificInfo', f.nameAndPassword = 'nameAndPassword', f.school = 'school', f.educatorSpecificInfo = 'educatorSpecificInfo', f.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', f.acceptPolicies = 'acceptPolicies', f.verifyClass = 'verifyClass';
    var _g = e;
}), b.register('emwAC', function(c, d) {
    a(c.exports, 'default', function() {
        return _C;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('6jmvl'),
        h = b('u4s09'),
        i = b('8KqQ+'),
        j = b('16/yK'),
        k = b('vXDno'),
        l = b('wM8kY4'),
        m = b('BTX4Q'),
        n = b('Q6wpd'),
        o = b('jpCKb'),
        p = b('Sggd91'),
        q = b('rT4vV'),
        r = b('pJh2q0'),
        s = b('UmTL74'),
        t = b('bGZAj'),
        u = b('yruHD'),
        v = b('Eh2Wh'),
        w = b('JQ25h'),
        x = b('quE27'),
        y = b('/UOkt'),
        z = b('LnE751'),
        A = b('KxkP827');
    let B;
    var _C = (0, g.observer)(() => {
        const {
            login: D,
            navigation: E
        } = f.useContext(s.default), {
            currentStage: F
        } = (0, j.default)(), [G, H] = f.useState(!0), [I, J] = f.useState(!1);
        f.useEffect(() => {
            D.informationNeeded.length || (0, t.default)();
        }, [D.informationNeeded.length]), f.useEffect(() => {
            (0, x.getUrlVariable)('pwr') && J(!0);
            const K = (0, x.getUrlVariable)('class');
            K ? (0, x.request)({
                url: `/api/v1/groups/details/${ K }`,
                success: G => {
                    E.classJoiningId = K, E.classJoiningName = G.groupName, E.classJoiningTeacherName = G.teacherName, D.accountType = z.default.student, E.redirectUri || (E.redirectUri = `/class/join/${ K }`), H(!1);
                },
                error: () => (0, A.NavigateTo)('/')
            }) : H(!1);
        }, []);
        return G ? (0, e.jsx)(_D, {}) : (0, e.jsxs)(_D, {
            children: [
                (0, e.jsx)(k.default, {
                    message: F === l.default.email && I ? 'Password changed successfully!' : ''
                }),
                (() => {
                    if (E.creatingAccount || E.loggingIn && !D.informationNeeded.length || E.updatingAccountInformation && !D.informationNeeded.length) {
                        const K = D.accountType === z.default.student;
                        return (0, e.jsxs)('div', {
                            className: 'flex hc vc maxWidth flex-column',
                            children: [
                                (0, e.jsx)(u.default, {
                                    size: 'large'
                                }),
                                (0, e.jsx)('div', {
                                    style: {
                                        marginTop: 5,
                                        fontWeight: v.FontWeights.Bold,
                                        color: i.default.Black,
                                        fontSize: 23
                                    },
                                    children: E.updatingAccountInformation || E.loggingIn ? E.classJoiningName ? 'Just a second...' : 'Logging you in...' : K ? 'Just a second....' : 'Creating your account...'
                                })
                            ]
                        });
                    }
                    return F === l.default.email ? (0, e.jsx)(m.default, {}) : F === l.default.password ? (0, e.jsx)(n.default, {}) : F === l.default.accountType ? (0, e.jsx)(o.default, {}) : F === l.default.nameAndPassword ? (0, e.jsx)(p.default, {}) : F === l.default.school ? (0, e.jsx)(q.default, {}) : F === l.default.educatorSpecificInfo ? (0, e.jsx)(r.default, {}) : F === l.default.acceptPolicies ? (0, e.jsx)(w.default, {}) : F === l.default.nonSchoolSpecificInfo ? (0, e.jsx)(y.default, {}) : null;
                })()
            ]
        });
    });
    const _D = h.default.div.attrs({
        className: 'scroll-y'
    })(B || (B = (a => a)`
  width: 90%;
  max-width: 520px;
  padding: 20px;
  background: ${ 0 };
  border-radius: 7px;
  max-height: 90vh;
`), i.default.White);
}), b.register('16/yK', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('wM8kY4'),
        f = b('Wf/oP4'),
        g = b('zB1Rq4');
    var _h = () => {
        const {
            informationNeeded: i
        } = f.default.login, j = (i => i.includes(g.informationTypes.email) ? e.default.email : i.includes(g.informationTypes.password) ? e.default.password : i.includes(g.informationTypes.acceptedLatestPolicies) ? e.default.acceptPolicies : i.includes(g.informationTypes.accountType) ? e.default.accountType : i.includes(g.informationTypes.accountPassword) || i.includes(g.informationTypes.firstName) || i.includes(g.informationTypes.lastName) ? e.default.nameAndPassword : i.includes(g.informationTypes.country) ? e.default.school : i.includes(g.informationTypes.areaOfExpertise) || i.includes(g.informationTypes.gradeLevel) ? e.default.educatorSpecificInfo : i.includes(g.informationTypes.organization) ? e.default.nonSchoolSpecificInfo : null)(i);
        return {
            currentStage: j
        };
    };
}), b.register('vXDno', function(c, d) {
    a(c.exports, 'default', function() {
        return _t;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('u4s09'),
        h = b('qMSe6'),
        i = b('VNuyu'),
        j = b('+cTfn'),
        k = b('6jmvl'),
        l = b('UmTL74'),
        m = b('8KqQ+'),
        n = b('Eh2Wh');
    let o, p, q, r, s = a => a;
    var _t = (0, k.observer)(a => {
        const {
            navigation: u
        } = f.useContext(l.default), v = !!u.classJoiningName, w = v ? '/client/img/gimkitGIcon.svg' : '/client/img/svgLogo.svg', x = v ? 55 : 42;
        return (0, e.jsxs)(_u, {
            children: [
                a.message && (0, e.jsx)(h.default, {
                    style: {
                        marginBottom: 5
                    },
                    message: a.message,
                    type: 'success',
                    showIcon: !0
                }),
                (0, e.jsx)(j.Link, {
                    to: '/',
                    children: (0, e.jsx)(_v, {
                        style: {
                            height: x,
                            marginBottom: v ? 5 : 0
                        },
                        src: w
                    })
                }),
                u.classJoiningName ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(_w, {
                            children: u.classJoiningName
                        }),
                        (0, e.jsx)(_x, {
                            children: u.classJoiningTeacherName
                        })
                    ]
                }) : null,
                (0, e.jsx)(i.default, {})
            ]
        });
    });
    const _u = g.default.div(o || (o = s`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`)),
        _v = g.default.img(p || (p = s`
  margin-top: 11px;
`)),
        _w = g.default.div(q || (q = s`
  color: ${ 0 };
  font-size: 28px;
  font-weight: ${ 0 };
`), m.default.Black, n.FontWeights.Bold),
        _x = g.default.div(r || (r = s`
  color: rgba(0, 0, 0, 0.9);
  font-size: 15px;
`));
}), b.register('Q6wpd', function(c, d) {
    a(c.exports, 'default', function() {
        return _p;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('Eh2Wh'),
        h = b('VNuyu'),
        i = b('aevdF'),
        j = b('8KqQ+'),
        k = b('qfXCk3'),
        l = b('sL56x'),
        m = b('30iJZ'),
        n = b('UmTL74'),
        o = b('zB1Rq4');
    var _p = (0, b('6jmvl').observer)(() => {
        const {
            login: q,
            navigation: r
        } = f.useContext(n.default), [s, t] = f.useState(''), [u, v] = f.useState(!1), w = !s, x = () => {
            w || r.loggingIn || (q.password = s, q.informationNeeded.replace(q.informationNeeded.filter(q => q !== o.informationTypes.password)));
        };
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)('div', {
                    style: {
                        fontWeight: g.FontWeights.Black,
                        fontSize: 24,
                        color: j.default.Black
                    },
                    children: 'Enter your password'
                }),
                (0, e.jsx)(i.default.Password, {
                    placeholder: 'Password',
                    size: 'large',
                    style: {
                        height: 40
                    },
                    autoFocus: !0,
                    onPressEnter: x,
                    onChange: q => {
                        r.loginError = null, t(q.target.value);
                    }
                }),
                (0, e.jsx)(k.default, {
                    onClick: x,
                    disabled: w,
                    style: {
                        width: '100%',
                        marginTop: 5
                    },
                    loading: r.loggingIn,
                    children: 'Login'
                }),
                (0, e.jsx)(m.default, {}),
                (0, e.jsx)(h.default, {}),
                (0, e.jsx)('div', {
                    onClick: () => v(!0),
                    style: {
                        cursor: 'pointer',
                        fontSize: 12
                    },
                    children: 'Forgot password?'
                }),
                (0, e.jsx)(l.default, {
                    open: u,
                    close: () => v(!1),
                    defaultEmail: q.email
                })
            ]
        });
    });
}), b.register('qfXCk3', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('6jmvl'),
        g = b('P1KtI');
    var _h = (0, f.observer)(a => (0, e.jsx)(g.default, {
        disabled: a.disabled,
        size: a.size || 'middle',
        type: 'primary',
        onClick: a.onClick,
        style: Object.assign({
            width: '100%'
        }, a.style),
        loading: a.loading,
        children: a.children
    }));
}), b.register('jpCKb', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('6jmvl'),
        h = b('Eh2Wh'),
        i = b('8KqQ+'),
        j = b('u4s09'),
        k = b('UmTL74'),
        l = b('LnE751'),
        m = b('zB1Rq4'),
        n = b('P1KtI'),
        o = b('SAYZy'),
        p = b('nKuOQ');
    let q, r, s = a => a;
    const t = a => (0, e.jsx)(_w, {
        backgroundColor: a.background,
        onClick: a.handleSelect,
        children: a.children
    });
    var _u = (0, g.observer)(() => {
        const [v, w] = f.useState(!0), {
            login: x
        } = f.useContext(k.default), y = () => x.informationNeeded.replace(x.informationNeeded.filter(v => v !== m.informationTypes.accountType)), z = () => x.googleToken || x.userExists ? [] : [
            m.informationTypes.firstName,
            m.informationTypes.lastName,
            m.informationTypes.accountPassword
        ], A = () => {
            x.accountType = l.default.educator, x.informationNeeded.replace([
                ...x.informationNeeded,
                ...z(),
                m.informationTypes.country,
                m.informationTypes.areaOfExpertise,
                m.informationTypes.gradeLevel
            ]), y();
        }, B = v => {
            x.accountType = l.default.student, x.informationNeeded.replace([
                ...x.informationNeeded,
                ...z()
            ]), y();
        };
        if (x.accountType)
            switch (x.accountType) {
                case l.default.educator:
                    A();
                    break;
                case l.default.guardian:
                    x.accountType = l.default.guardian, x.informationNeeded.replace([
                        ...x.informationNeeded,
                        ...z()
                    ]), y();
                    break;
                case l.default.nonSchool:
                    x.accountType = l.default.nonSchool, x.informationNeeded.replace([
                        ...x.informationNeeded,
                        ...z(),
                        m.informationTypes.organization
                    ]), y();
                    break;
                case l.default.student:
                    B();
            }
        return v ? (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)('div', {
                    style: {
                        fontWeight: h.FontWeights.Black,
                        fontSize: 29,
                        color: i.default.Black,
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: 8
                    },
                    children: 'Select your account type...'
                }),
                (0, e.jsxs)(_v, {
                    children: [
                        (0, e.jsxs)(t, {
                            handleSelect: A,
                            background: '#33691e',
                            children: [
                                (0, e.jsx)('div', {
                                    children: (0, e.jsx)('i', {
                                        className: 'fas fa-chalkboard-teacher'
                                    })
                                }),
                                'Educator'
                            ]
                        }),
                        (0, e.jsxs)(t, {
                            handleSelect: () => w(!1),
                            background: '#9E5F28',
                            children: [
                                (0, e.jsx)('div', {
                                    children: (0, e.jsx)('i', {
                                        className: 'fas fa-user'
                                    })
                                }),
                                'Student'
                            ]
                        })
                    ]
                })
            ]
        }) : (0, e.jsxs)('div', {
            children: [
                (0, e.jsxs)('div', {
                    style: {
                        fontSize: 18,
                        color: i.default.Black,
                        marginBottom: 20,
                        fontWeight: h.FontWeights.Bold
                    },
                    children: [
                        'I am at least 13 years of age (or 16+ outside the US) and agree to Gimkit\'s',
                        ' ',
                        (0, e.jsx)('a', {
                            href: p.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        '&',
                        ' ',
                        (0, e.jsx)('a', {
                            href: p.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms of Service'
                        }),
                        '.'
                    ]
                }),
                (0, e.jsx)(n.default, {
                    onClick: () => B(),
                    block: !0,
                    size: 'large',
                    style: {
                        height: 60
                    },
                    type: 'primary',
                    children: 'I Agree'
                })
            ]
        });
    });
    const _v = j.default.div(q || (q = s`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`)),
        _w = j.default.div.attrs({
            className: 'flex-center flex-column light-shadow'
        })(r || (r = s`
  border-radius: 4px;
  font-weight: ${ 0 };
  color: ${ 0 };
  background: ${ 0 };
  width: 46%;
  height: 170px;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.25s;
  will-change: transform;
  &:hover {
    background: ${ 0 };
    transform: scale(1.03);
  }
`), h.FontWeights.Bold, i.default.White, a => a.backgroundColor, a => (0, o.lighten)(0.1, a.backgroundColor));
}), b.register('LnE751', function(c, d) {
    let e;
    var f;
    a(c.exports, 'default', function() {
        return _g;
    }), (f = e || (e = {})).educator = 'educator', f.student = 'student', f.guardian = 'guardian', f.nonSchool = 'nonSchool';
    var _g = e;
}), b.register('Sggd91', function(c, d) {
    a(c.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return _p;
    }), a(c.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return _q;
    }), a(c.exports, 'Title', function() {
        return _r;
    }), a(c.exports, 'default', function() {
        return _t;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('UmTL74'),
        h = b('Eh2Wh'),
        i = b('8KqQ+'),
        j = b('VNuyu'),
        k = b('aevdF'),
        l = b('qfXCk3'),
        m = b('zB1Rq4'),
        n = b('rWa5o1'),
        o = b('LnE751');
    const _p = 20,
        _q = 25,
        _r = a => (0, e.jsx)('div', {
            style: {
                fontFamily: h.Fonts.SFPro,
                fontWeight: h.FontWeights.Bold,
                color: i.default.Black,
                fontSize: 18
            },
            children: a.children
        }),
        s = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var _t = () => {
        const {
            login: u
        } = f.useContext(g.default), [v, w] = f.useState(u.firstName), [x, y] = f.useState(u.lastName), [z, A] = f.useState(u.password), B = () => {
            let C = !0;
            return u.informationNeeded.includes(m.informationTypes.firstName) && (v || (C = !1)), u.informationNeeded.includes(m.informationTypes.lastName) && (x || (C = !1)), u.informationNeeded.includes(m.informationTypes.accountPassword) && (!z || z.length < 6) && (C = !1), C;
        }, C = () => {
            B() && (v && (u.firstName = v), x && (u.lastName = x), z && (u.password = z), u.informationNeeded.replace(u.informationNeeded.filter(u => u !== m.informationTypes.firstName && u !== m.informationTypes.lastName && u !== m.informationTypes.accountPassword)));
        }, D = u.accountType === o.default.student;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(_r, {
                    children: 'First Name'
                }),
                (0, e.jsx)(k.default, {
                    maxLength: _p,
                    style: s,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: u => w(u.target.value),
                    onPressEnter: C,
                    autoFocus: !0
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, e.jsxs)(_r, {
                    children: [
                        'Last ',
                        D ? 'Initial' : 'Name'
                    ]
                }),
                (0, e.jsx)(k.default, {
                    maxLength: D ? 1 : _q,
                    style: s,
                    size: 'large',
                    placeholder: `Last ${ D ? 'Initial' : 'Name' } here...`,
                    onChange: u => y(u.target.value),
                    onPressEnter: C
                }),
                u.informationNeeded.includes(m.informationTypes.accountPassword) && (0, e.jsxs)(e.Fragment, {
                    children: [
                        (0, e.jsx)(j.default, {}),
                        (0, e.jsx)(_r, {
                            children: 'Password'
                        }),
                        (0, e.jsx)('div', {
                            style: {
                                fontSize: 12,
                                marginTop: -5,
                                marginBottom: 4
                            },
                            children: 'Must contain at least 6 characters'
                        }),
                        (0, e.jsx)(k.default.Password, {
                            style: s,
                            onChange: u => A(u.target.value),
                            placeholder: 'Password here...',
                            size: 'large',
                            maxLength: 96,
                            onPressEnter: C
                        })
                    ]
                }),
                (0, e.jsx)(j.default, {}),
                (0, e.jsx)(l.default, {
                    disabled: !B(),
                    onClick: C,
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                !D && (0, e.jsx)(n.default, {
                    link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061'
                })
            ]
        });
    };
}), b.register('rWa5o1', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('0imoS1');
    var _g = a => (0, e.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, e.jsx)('div', {}),
            (0, e.jsx)(f.default, {
                link: a.link
            })
        ]
    });
}), b.register('0imoS1', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('7EmM+1'),
        g = b('P1KtI'),
        h = b('Dn89R');
    var _i = a => (0, e.jsx)(h.default, {
        title: 'Learn more on why we collect this data',
        children: (0, e.jsx)(g.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, e.jsx)(f.default, {}),
            href: a.link || '',
            target: '_blank'
        })
    });
}), b.register('7EmM+1', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('ck3Mo1'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'LockOutlined';
    var _j = f.forwardRef(i);
}), b.register('ck3Mo1', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z'
                }
            }]
        },
        name: 'lock',
        theme: 'outlined'
    };
}), b.register('rT4vV', function(c, d) {
    a(c.exports, 'default', function() {
        return _u;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('E7smI'),
        h = b('qMSe6'),
        i = b('VNuyu'),
        j = b('aevdF'),
        k = b('u8Dt8'),
        l = b('yruHD'),
        m = b('Sggd91'),
        n = b('quE27'),
        o = b('kyWmB'),
        p = b('Eh2Wh'),
        q = b('8KqQ+'),
        r = b('UmTL74'),
        s = b('zB1Rq4'),
        t = b('rWa5o1');
    var _u = () => {
        const {
            login: v
        } = f.useContext(r.default), [w, x] = f.useState(''), [y, z] = f.useState(!1), [A, B] = f.useState(''), [C, D] = f.useState(!1), [E, F] = f.useState(!1), [G, H] = f.useState([]);
        f.useEffect(() => {
            A && (F(!0), (0, n.request)({
                url: '/api/users/fetch-schools',
                method: 'post',
                data: {
                    zipCode: A
                },
                success: v => {
                    v && v.schoolList && v.schoolList.length ? (H(v.schoolList), z(!1)) : _I();
                },
                error: () => _I(),
                both: () => F(!1)
            }));
        }, [A]);
        const _I = x => {
                v.country = x || w, v.informationNeeded.replace(v.informationNeeded.filter(v => v !== s.informationTypes.country));
            },
            J = (w, x) => {
                v.schoolId = w, v.districtId = x, _I();
            };
        return (0, e.jsxs)(e.Fragment, {
            children: [
                G && G.length && !y ? (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)('div', {
                        style: {
                            color: 'blue',
                            cursor: 'pointer'
                        },
                        onClick: () => {
                            H([]), B(''), z(!0), D(!1);
                        },
                        children: [
                            (0, e.jsx)('i', {
                                className: 'fad fa-long-arrow-left'
                            }),
                            ' Go Back'
                        ]
                    })
                }) : null,
                (0, e.jsx)('div', {
                    style: {
                        fontWeight: p.FontWeights.Black,
                        fontSize: 30,
                        color: q.default.Black,
                        marginBottom: 13
                    },
                    children: '\uD83C\uDFEB Find your school'
                }),
                !G.length && (0, e.jsxs)(e.Fragment, {
                    children: [
                        !y && (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(m.Title, {
                                    children: '\uD83D\uDDFA️ Country'
                                }),
                                (0, e.jsx)(k.default, {
                                    style: {
                                        width: '100%'
                                    },
                                    showSearch: !0,
                                    placeholder: 'Select country...',
                                    onChange: v => {
                                        x(v), 'US' !== v ? _I(v) : z(!0);
                                    },
                                    filterOption: (v, w) => w.props.children.toLowerCase().indexOf(v.toLowerCase()) >= 0,
                                    size: 'large',
                                    children: Object.keys(g.countries).sort(v => 'US' === v ? 1 : -1).reverse().map(v => {
                                        const K = g.countries[v];
                                        let L = '';
                                        return K.emoji && (L += `${ K.emoji } `), K.name && ('United States' === K.name ? L += 'United States Of America' : L += K.name), (0, e.jsx)(k.default.Option, {
                                            value: v,
                                            children: L
                                        }, v);
                                    })
                                })
                            ]
                        }),
                        !E && y && (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(m.Title, {
                                    children: '\uD83C\uDDFA\uD83C\uDDF2 Zip Code of School'
                                }),
                                (0, e.jsx)(j.default, {
                                    onChange: v => {
                                        const K = v.target.value;
                                        D(!1), K && 5 === String(K).length && B(K);
                                    },
                                    type: 'number',
                                    placeholder: 'Zip code here...',
                                    maxLength: 5,
                                    size: 'large',
                                    autoFocus: !0
                                }),
                                C && (0, e.jsx)(h.default, {
                                    style: {
                                        marginTop: 10
                                    },
                                    showIcon: !0,
                                    type: 'error',
                                    message: 'Invalid Zip Code',
                                    description: (0, e.jsxs)(e.Fragment, {
                                        children: [
                                            'Try entering another zip code or',
                                            ' ',
                                            (0, e.jsx)('a', {
                                                onClick: () => _I(),
                                                children: 'skip this step.'
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                E && (0, e.jsx)(l.default, {
                    size: 'large'
                }),
                G && G.length ? (0, e.jsxs)(e.Fragment, {
                    children: [
                        G.map(v => (0, e.jsx)(o.default, {
                            name: v.schoolName,
                            description: `${ v.address.city }, ${ v.address.stateFull }`,
                            onSelect: () => J(v && v.schoolid ? v.schoolid : null, v && v.district && v.district.districtID ? v.district.districtID : null)
                        }, v.schoolid)),
                        (0, e.jsx)(o.default, {
                            name: 'Other',
                            description: 'School not listed',
                            onSelect: () => J(null, null)
                        })
                    ]
                }) : null,
                (0, e.jsx)(i.default, {}),
                (0, e.jsx)(t.default, {
                    link: 'https://www.notion.so/gimkit/Country-Zip-Code-School-9bca6de77686407cad0a4298a4a1d00e'
                })
            ]
        });
    };
}), b.register('E7smI', function(c, d) {
    c.exports, c.exports = function(e) {
        var f = {};

        function g(h) {
            if (f[h])
                return f[h].exports;
            var i = f[h] = {
                i: h,
                l: !1,
                exports: {}
            };
            return e[h].call(i.exports, i, i.exports, g), i.l = !0, i.exports;
        }
        return g.m = e, g.c = f, g.d = function(h, i, j) {
            g.o(h, i) || Object.defineProperty(h, i, {
                enumerable: !0,
                get: j
            });
        }, g.r = function(h) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(h, Symbol.toStringTag, {
                value: 'Module'
            }), Object.defineProperty(h, '__esModule', {
                value: !0
            });
        }, g.t = function(h, i) {
            if (1 & i && (h = g(h)), 8 & i)
                return h;
            if (4 & i && 'object' == typeof h && h && h.__esModule)
                return h;
            var j = Object.create(null);
            if (g.r(j), Object.defineProperty(j, 'default', {
                    enumerable: !0,
                    value: h
                }), 2 & i && 'string' != typeof h)
                for (var k in h)
                    g.d(j, k, function(l) {
                        return h[l];
                    }.bind(null, k));
            return j;
        }, g.n = function(h) {
            var i = h && h.__esModule ? function() {
                return h.default;
            } : function() {
                return h;
            };
            return g.d(i, 'a', i), i;
        }, g.o = function(h, i) {
            return Object.prototype.hasOwnProperty.call(h, i);
        }, g.p = '', g(g.s = 1);
    }([
        function(e, f) {
            (function(g) {
                e.exports = g;
            }.call(this, {}));
        },
        function(e, f, g) {
            var h = g(2),
                i = g(3),
                j = g(4),
                k = g(5),
                l = g(6).ucs2,
                m = 127462 - 'A'.charCodeAt(0),
                n = /^[A-Z]{2}$/;
            e.exports = {
                continents: h,
                countries: i,
                languages: j,
                languagesAll: k,
                getEmojiFlag: function(o) {
                    return n.test(o) ? l.encode(o.split('').map(function(p) {
                        return m + p.charCodeAt(0);
                    })) : '';
                },
                getUnicode: function(o) {
                    return l.decode(o).map(function(p) {
                        return 'U+' + Number(p).toString(16).toUpperCase();
                    }).join(' ');
                }
            };
        },
        function(e) {
            e.exports = JSON.parse('{"AF":"Africa","AN":"Antarctica","AS":"Asia","EU":"Europe","NA":"North America","OC":"Oceania","SA":"South America"}');
        },
        function(e) {
            e.exports = JSON.parse('{"AD":{"name":"Andorra","native":"Andorra","phone":"376","continent":"EU","capital":"Andorra la Vella","currency":"EUR","languages":["ca"],"emoji":"\uD83C\uDDE6\uD83C\uDDE9","emojiU":"U+1F1E6 U+1F1E9"},"AE":{"name":"United Arab Emirates","native":"دولة الإمارات العربية المتحدة","phone":"971","continent":"AS","capital":"Abu Dhabi","currency":"AED","languages":["ar"],"emoji":"\uD83C\uDDE6\uD83C\uDDEA","emojiU":"U+1F1E6 U+1F1EA"},"AF":{"name":"Afghanistan","native":"افغانستان","phone":"93","continent":"AS","capital":"Kabul","currency":"AFN","languages":["ps","uz","tk"],"emoji":"\uD83C\uDDE6\uD83C\uDDEB","emojiU":"U+1F1E6 U+1F1EB"},"AG":{"name":"Antigua and Barbuda","native":"Antigua and Barbuda","phone":"1268","continent":"NA","capital":"Saint John\'s","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDEC","emojiU":"U+1F1E6 U+1F1EC"},"AI":{"name":"Anguilla","native":"Anguilla","phone":"1264","continent":"NA","capital":"The Valley","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDEE","emojiU":"U+1F1E6 U+1F1EE"},"AL":{"name":"Albania","native":"Shqipëria","phone":"355","continent":"EU","capital":"Tirana","currency":"ALL","languages":["sq"],"emoji":"\uD83C\uDDE6\uD83C\uDDF1","emojiU":"U+1F1E6 U+1F1F1"},"AM":{"name":"Armenia","native":"Հայաստան","phone":"374","continent":"AS","capital":"Yerevan","currency":"AMD","languages":["hy","ru"],"emoji":"\uD83C\uDDE6\uD83C\uDDF2","emojiU":"U+1F1E6 U+1F1F2"},"AO":{"name":"Angola","native":"Angola","phone":"244","continent":"AF","capital":"Luanda","currency":"AOA","languages":["pt"],"emoji":"\uD83C\uDDE6\uD83C\uDDF4","emojiU":"U+1F1E6 U+1F1F4"},"AQ":{"name":"Antarctica","native":"Antarctica","phone":"672","continent":"AN","capital":"","currency":"","languages":[],"emoji":"\uD83C\uDDE6\uD83C\uDDF6","emojiU":"U+1F1E6 U+1F1F6"},"AR":{"name":"Argentina","native":"Argentina","phone":"54","continent":"SA","capital":"Buenos Aires","currency":"ARS","languages":["es","gn"],"emoji":"\uD83C\uDDE6\uD83C\uDDF7","emojiU":"U+1F1E6 U+1F1F7"},"AS":{"name":"American Samoa","native":"American Samoa","phone":"1684","continent":"OC","capital":"Pago Pago","currency":"USD","languages":["en","sm"],"emoji":"\uD83C\uDDE6\uD83C\uDDF8","emojiU":"U+1F1E6 U+1F1F8"},"AT":{"name":"Austria","native":"Österreich","phone":"43","continent":"EU","capital":"Vienna","currency":"EUR","languages":["de"],"emoji":"\uD83C\uDDE6\uD83C\uDDF9","emojiU":"U+1F1E6 U+1F1F9"},"AU":{"name":"Australia","native":"Australia","phone":"61","continent":"OC","capital":"Canberra","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDFA","emojiU":"U+1F1E6 U+1F1FA"},"AW":{"name":"Aruba","native":"Aruba","phone":"297","continent":"NA","capital":"Oranjestad","currency":"AWG","languages":["nl","pa"],"emoji":"\uD83C\uDDE6\uD83C\uDDFC","emojiU":"U+1F1E6 U+1F1FC"},"AX":{"name":"Åland","native":"Åland","phone":"358","continent":"EU","capital":"Mariehamn","currency":"EUR","languages":["sv"],"emoji":"\uD83C\uDDE6\uD83C\uDDFD","emojiU":"U+1F1E6 U+1F1FD"},"AZ":{"name":"Azerbaijan","native":"Azərbaycan","phone":"994","continent":"AS","capital":"Baku","currency":"AZN","languages":["az"],"emoji":"\uD83C\uDDE6\uD83C\uDDFF","emojiU":"U+1F1E6 U+1F1FF"},"BA":{"name":"Bosnia and Herzegovina","native":"Bosna i Hercegovina","phone":"387","continent":"EU","capital":"Sarajevo","currency":"BAM","languages":["bs","hr","sr"],"emoji":"\uD83C\uDDE7\uD83C\uDDE6","emojiU":"U+1F1E7 U+1F1E6"},"BB":{"name":"Barbados","native":"Barbados","phone":"1246","continent":"NA","capital":"Bridgetown","currency":"BBD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDE7","emojiU":"U+1F1E7 U+1F1E7"},"BD":{"name":"Bangladesh","native":"Bangladesh","phone":"880","continent":"AS","capital":"Dhaka","currency":"BDT","languages":["bn"],"emoji":"\uD83C\uDDE7\uD83C\uDDE9","emojiU":"U+1F1E7 U+1F1E9"},"BE":{"name":"Belgium","native":"België","phone":"32","continent":"EU","capital":"Brussels","currency":"EUR","languages":["nl","fr","de"],"emoji":"\uD83C\uDDE7\uD83C\uDDEA","emojiU":"U+1F1E7 U+1F1EA"},"BF":{"name":"Burkina Faso","native":"Burkina Faso","phone":"226","continent":"AF","capital":"Ouagadougou","currency":"XOF","languages":["fr","ff"],"emoji":"\uD83C\uDDE7\uD83C\uDDEB","emojiU":"U+1F1E7 U+1F1EB"},"BG":{"name":"Bulgaria","native":"България","phone":"359","continent":"EU","capital":"Sofia","currency":"BGN","languages":["bg"],"emoji":"\uD83C\uDDE7\uD83C\uDDEC","emojiU":"U+1F1E7 U+1F1EC"},"BH":{"name":"Bahrain","native":"\u200Fالبحرين","phone":"973","continent":"AS","capital":"Manama","currency":"BHD","languages":["ar"],"emoji":"\uD83C\uDDE7\uD83C\uDDED","emojiU":"U+1F1E7 U+1F1ED"},"BI":{"name":"Burundi","native":"Burundi","phone":"257","continent":"AF","capital":"Bujumbura","currency":"BIF","languages":["fr","rn"],"emoji":"\uD83C\uDDE7\uD83C\uDDEE","emojiU":"U+1F1E7 U+1F1EE"},"BJ":{"name":"Benin","native":"Bénin","phone":"229","continent":"AF","capital":"Porto-Novo","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDE7\uD83C\uDDEF","emojiU":"U+1F1E7 U+1F1EF"},"BL":{"name":"Saint Barthélemy","native":"Saint-Barthélemy","phone":"590","continent":"NA","capital":"Gustavia","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDE7\uD83C\uDDF1","emojiU":"U+1F1E7 U+1F1F1"},"BM":{"name":"Bermuda","native":"Bermuda","phone":"1441","continent":"NA","capital":"Hamilton","currency":"BMD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDF2","emojiU":"U+1F1E7 U+1F1F2"},"BN":{"name":"Brunei","native":"Negara Brunei Darussalam","phone":"673","continent":"AS","capital":"Bandar Seri Begawan","currency":"BND","languages":["ms"],"emoji":"\uD83C\uDDE7\uD83C\uDDF3","emojiU":"U+1F1E7 U+1F1F3"},"BO":{"name":"Bolivia","native":"Bolivia","phone":"591","continent":"SA","capital":"Sucre","currency":"BOB,BOV","languages":["es","ay","qu"],"emoji":"\uD83C\uDDE7\uD83C\uDDF4","emojiU":"U+1F1E7 U+1F1F4"},"BQ":{"name":"Bonaire","native":"Bonaire","phone":"5997","continent":"NA","capital":"Kralendijk","currency":"USD","languages":["nl"],"emoji":"\uD83C\uDDE7\uD83C\uDDF6","emojiU":"U+1F1E7 U+1F1F6"},"BR":{"name":"Brazil","native":"Brasil","phone":"55","continent":"SA","capital":"Brasília","currency":"BRL","languages":["pt"],"emoji":"\uD83C\uDDE7\uD83C\uDDF7","emojiU":"U+1F1E7 U+1F1F7"},"BS":{"name":"Bahamas","native":"Bahamas","phone":"1242","continent":"NA","capital":"Nassau","currency":"BSD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDF8","emojiU":"U+1F1E7 U+1F1F8"},"BT":{"name":"Bhutan","native":"ʼbrug-yul","phone":"975","continent":"AS","capital":"Thimphu","currency":"BTN,INR","languages":["dz"],"emoji":"\uD83C\uDDE7\uD83C\uDDF9","emojiU":"U+1F1E7 U+1F1F9"},"BV":{"name":"Bouvet Island","native":"Bouvetøya","phone":"47","continent":"AN","capital":"","currency":"NOK","languages":["no","nb","nn"],"emoji":"\uD83C\uDDE7\uD83C\uDDFB","emojiU":"U+1F1E7 U+1F1FB"},"BW":{"name":"Botswana","native":"Botswana","phone":"267","continent":"AF","capital":"Gaborone","currency":"BWP","languages":["en","tn"],"emoji":"\uD83C\uDDE7\uD83C\uDDFC","emojiU":"U+1F1E7 U+1F1FC"},"BY":{"name":"Belarus","native":"Белару́сь","phone":"375","continent":"EU","capital":"Minsk","currency":"BYN","languages":["be","ru"],"emoji":"\uD83C\uDDE7\uD83C\uDDFE","emojiU":"U+1F1E7 U+1F1FE"},"BZ":{"name":"Belize","native":"Belize","phone":"501","continent":"NA","capital":"Belmopan","currency":"BZD","languages":["en","es"],"emoji":"\uD83C\uDDE7\uD83C\uDDFF","emojiU":"U+1F1E7 U+1F1FF"},"CA":{"name":"Canada","native":"Canada","phone":"1","continent":"NA","capital":"Ottawa","currency":"CAD","languages":["en","fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDE6","emojiU":"U+1F1E8 U+1F1E6"},"CC":{"name":"Cocos [Keeling] Islands","native":"Cocos (Keeling) Islands","phone":"61","continent":"AS","capital":"West Island","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDE8","emojiU":"U+1F1E8 U+1F1E8"},"CD":{"name":"Democratic Republic of the Congo","native":"République démocratique du Congo","phone":"243","continent":"AF","capital":"Kinshasa","currency":"CDF","languages":["fr","ln","kg","sw","lu"],"emoji":"\uD83C\uDDE8\uD83C\uDDE9","emojiU":"U+1F1E8 U+1F1E9"},"CF":{"name":"Central African Republic","native":"Ködörösêse tî Bêafrîka","phone":"236","continent":"AF","capital":"Bangui","currency":"XAF","languages":["fr","sg"],"emoji":"\uD83C\uDDE8\uD83C\uDDEB","emojiU":"U+1F1E8 U+1F1EB"},"CG":{"name":"Republic of the Congo","native":"République du Congo","phone":"242","continent":"AF","capital":"Brazzaville","currency":"XAF","languages":["fr","ln"],"emoji":"\uD83C\uDDE8\uD83C\uDDEC","emojiU":"U+1F1E8 U+1F1EC"},"CH":{"name":"Switzerland","native":"Schweiz","phone":"41","continent":"EU","capital":"Bern","currency":"CHE,CHF,CHW","languages":["de","fr","it"],"emoji":"\uD83C\uDDE8\uD83C\uDDED","emojiU":"U+1F1E8 U+1F1ED"},"CI":{"name":"Ivory Coast","native":"Côte d\'Ivoire","phone":"225","continent":"AF","capital":"Yamoussoukro","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDEE","emojiU":"U+1F1E8 U+1F1EE"},"CK":{"name":"Cook Islands","native":"Cook Islands","phone":"682","continent":"OC","capital":"Avarua","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDF0","emojiU":"U+1F1E8 U+1F1F0"},"CL":{"name":"Chile","native":"Chile","phone":"56","continent":"SA","capital":"Santiago","currency":"CLF,CLP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF1","emojiU":"U+1F1E8 U+1F1F1"},"CM":{"name":"Cameroon","native":"Cameroon","phone":"237","continent":"AF","capital":"Yaoundé","currency":"XAF","languages":["en","fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDF2","emojiU":"U+1F1E8 U+1F1F2"},"CN":{"name":"China","native":"中国","phone":"86","continent":"AS","capital":"Beijing","currency":"CNY","languages":["zh"],"emoji":"\uD83C\uDDE8\uD83C\uDDF3","emojiU":"U+1F1E8 U+1F1F3"},"CO":{"name":"Colombia","native":"Colombia","phone":"57","continent":"SA","capital":"Bogotá","currency":"COP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF4","emojiU":"U+1F1E8 U+1F1F4"},"CR":{"name":"Costa Rica","native":"Costa Rica","phone":"506","continent":"NA","capital":"San José","currency":"CRC","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF7","emojiU":"U+1F1E8 U+1F1F7"},"CU":{"name":"Cuba","native":"Cuba","phone":"53","continent":"NA","capital":"Havana","currency":"CUC,CUP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDFA","emojiU":"U+1F1E8 U+1F1FA"},"CV":{"name":"Cape Verde","native":"Cabo Verde","phone":"238","continent":"AF","capital":"Praia","currency":"CVE","languages":["pt"],"emoji":"\uD83C\uDDE8\uD83C\uDDFB","emojiU":"U+1F1E8 U+1F1FB"},"CW":{"name":"Curacao","native":"Curaçao","phone":"5999","continent":"NA","capital":"Willemstad","currency":"ANG","languages":["nl","pa","en"],"emoji":"\uD83C\uDDE8\uD83C\uDDFC","emojiU":"U+1F1E8 U+1F1FC"},"CX":{"name":"Christmas Island","native":"Christmas Island","phone":"61","continent":"AS","capital":"Flying Fish Cove","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDFD","emojiU":"U+1F1E8 U+1F1FD"},"CY":{"name":"Cyprus","native":"Κύπρος","phone":"357","continent":"EU","capital":"Nicosia","currency":"EUR","languages":["el","tr","hy"],"emoji":"\uD83C\uDDE8\uD83C\uDDFE","emojiU":"U+1F1E8 U+1F1FE"},"CZ":{"name":"Czech Republic","native":"Česká republika","phone":"420","continent":"EU","capital":"Prague","currency":"CZK","languages":["cs","sk"],"emoji":"\uD83C\uDDE8\uD83C\uDDFF","emojiU":"U+1F1E8 U+1F1FF"},"DE":{"name":"Germany","native":"Deutschland","phone":"49","continent":"EU","capital":"Berlin","currency":"EUR","languages":["de"],"emoji":"\uD83C\uDDE9\uD83C\uDDEA","emojiU":"U+1F1E9 U+1F1EA"},"DJ":{"name":"Djibouti","native":"Djibouti","phone":"253","continent":"AF","capital":"Djibouti","currency":"DJF","languages":["fr","ar"],"emoji":"\uD83C\uDDE9\uD83C\uDDEF","emojiU":"U+1F1E9 U+1F1EF"},"DK":{"name":"Denmark","native":"Danmark","phone":"45","continent":"EU","capital":"Copenhagen","currency":"DKK","languages":["da"],"emoji":"\uD83C\uDDE9\uD83C\uDDF0","emojiU":"U+1F1E9 U+1F1F0"},"DM":{"name":"Dominica","native":"Dominica","phone":"1767","continent":"NA","capital":"Roseau","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE9\uD83C\uDDF2","emojiU":"U+1F1E9 U+1F1F2"},"DO":{"name":"Dominican Republic","native":"República Dominicana","phone":"1809,1829,1849","continent":"NA","capital":"Santo Domingo","currency":"DOP","languages":["es"],"emoji":"\uD83C\uDDE9\uD83C\uDDF4","emojiU":"U+1F1E9 U+1F1F4"},"DZ":{"name":"Algeria","native":"الجزائر","phone":"213","continent":"AF","capital":"Algiers","currency":"DZD","languages":["ar"],"emoji":"\uD83C\uDDE9\uD83C\uDDFF","emojiU":"U+1F1E9 U+1F1FF"},"EC":{"name":"Ecuador","native":"Ecuador","phone":"593","continent":"SA","capital":"Quito","currency":"USD","languages":["es"],"emoji":"\uD83C\uDDEA\uD83C\uDDE8","emojiU":"U+1F1EA U+1F1E8"},"EE":{"name":"Estonia","native":"Eesti","phone":"372","continent":"EU","capital":"Tallinn","currency":"EUR","languages":["et"],"emoji":"\uD83C\uDDEA\uD83C\uDDEA","emojiU":"U+1F1EA U+1F1EA"},"EG":{"name":"Egypt","native":"مصر\u200E","phone":"20","continent":"AF","capital":"Cairo","currency":"EGP","languages":["ar"],"emoji":"\uD83C\uDDEA\uD83C\uDDEC","emojiU":"U+1F1EA U+1F1EC"},"EH":{"name":"Western Sahara","native":"الصحراء الغربية","phone":"212","continent":"AF","capital":"El Aaiún","currency":"MAD,DZD,MRU","languages":["es"],"emoji":"\uD83C\uDDEA\uD83C\uDDED","emojiU":"U+1F1EA U+1F1ED"},"ER":{"name":"Eritrea","native":"ኤርትራ","phone":"291","continent":"AF","capital":"Asmara","currency":"ERN","languages":["ti","ar","en"],"emoji":"\uD83C\uDDEA\uD83C\uDDF7","emojiU":"U+1F1EA U+1F1F7"},"ES":{"name":"Spain","native":"España","phone":"34","continent":"EU","capital":"Madrid","currency":"EUR","languages":["es","eu","ca","gl","oc"],"emoji":"\uD83C\uDDEA\uD83C\uDDF8","emojiU":"U+1F1EA U+1F1F8"},"ET":{"name":"Ethiopia","native":"ኢትዮጵያ","phone":"251","continent":"AF","capital":"Addis Ababa","currency":"ETB","languages":["am"],"emoji":"\uD83C\uDDEA\uD83C\uDDF9","emojiU":"U+1F1EA U+1F1F9"},"FI":{"name":"Finland","native":"Suomi","phone":"358","continent":"EU","capital":"Helsinki","currency":"EUR","languages":["fi","sv"],"emoji":"\uD83C\uDDEB\uD83C\uDDEE","emojiU":"U+1F1EB U+1F1EE"},"FJ":{"name":"Fiji","native":"Fiji","phone":"679","continent":"OC","capital":"Suva","currency":"FJD","languages":["en","fj","hi","ur"],"emoji":"\uD83C\uDDEB\uD83C\uDDEF","emojiU":"U+1F1EB U+1F1EF"},"FK":{"name":"Falkland Islands","native":"Falkland Islands","phone":"500","continent":"SA","capital":"Stanley","currency":"FKP","languages":["en"],"emoji":"\uD83C\uDDEB\uD83C\uDDF0","emojiU":"U+1F1EB U+1F1F0"},"FM":{"name":"Micronesia","native":"Micronesia","phone":"691","continent":"OC","capital":"Palikir","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDEB\uD83C\uDDF2","emojiU":"U+1F1EB U+1F1F2"},"FO":{"name":"Faroe Islands","native":"Føroyar","phone":"298","continent":"EU","capital":"Tórshavn","currency":"DKK","languages":["fo"],"emoji":"\uD83C\uDDEB\uD83C\uDDF4","emojiU":"U+1F1EB U+1F1F4"},"FR":{"name":"France","native":"France","phone":"33","continent":"EU","capital":"Paris","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEB\uD83C\uDDF7","emojiU":"U+1F1EB U+1F1F7"},"GA":{"name":"Gabon","native":"Gabon","phone":"241","continent":"AF","capital":"Libreville","currency":"XAF","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDE6","emojiU":"U+1F1EC U+1F1E6"},"GB":{"name":"United Kingdom","native":"United Kingdom","phone":"44","continent":"EU","capital":"London","currency":"GBP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDE7","emojiU":"U+1F1EC U+1F1E7"},"GD":{"name":"Grenada","native":"Grenada","phone":"1473","continent":"NA","capital":"St. George\'s","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDE9","emojiU":"U+1F1EC U+1F1E9"},"GE":{"name":"Georgia","native":"საქართველო","phone":"995","continent":"AS","capital":"Tbilisi","currency":"GEL","languages":["ka"],"emoji":"\uD83C\uDDEC\uD83C\uDDEA","emojiU":"U+1F1EC U+1F1EA"},"GF":{"name":"French Guiana","native":"Guyane française","phone":"594","continent":"SA","capital":"Cayenne","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDEB","emojiU":"U+1F1EC U+1F1EB"},"GG":{"name":"Guernsey","native":"Guernsey","phone":"44","continent":"EU","capital":"St. Peter Port","currency":"GBP","languages":["en","fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDEC","emojiU":"U+1F1EC U+1F1EC"},"GH":{"name":"Ghana","native":"Ghana","phone":"233","continent":"AF","capital":"Accra","currency":"GHS","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDED","emojiU":"U+1F1EC U+1F1ED"},"GI":{"name":"Gibraltar","native":"Gibraltar","phone":"350","continent":"EU","capital":"Gibraltar","currency":"GIP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDEE","emojiU":"U+1F1EC U+1F1EE"},"GL":{"name":"Greenland","native":"Kalaallit Nunaat","phone":"299","continent":"NA","capital":"Nuuk","currency":"DKK","languages":["kl"],"emoji":"\uD83C\uDDEC\uD83C\uDDF1","emojiU":"U+1F1EC U+1F1F1"},"GM":{"name":"Gambia","native":"Gambia","phone":"220","continent":"AF","capital":"Banjul","currency":"GMD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDF2","emojiU":"U+1F1EC U+1F1F2"},"GN":{"name":"Guinea","native":"Guinée","phone":"224","continent":"AF","capital":"Conakry","currency":"GNF","languages":["fr","ff"],"emoji":"\uD83C\uDDEC\uD83C\uDDF3","emojiU":"U+1F1EC U+1F1F3"},"GP":{"name":"Guadeloupe","native":"Guadeloupe","phone":"590","continent":"NA","capital":"Basse-Terre","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDF5","emojiU":"U+1F1EC U+1F1F5"},"GQ":{"name":"Equatorial Guinea","native":"Guinea Ecuatorial","phone":"240","continent":"AF","capital":"Malabo","currency":"XAF","languages":["es","fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDF6","emojiU":"U+1F1EC U+1F1F6"},"GR":{"name":"Greece","native":"Ελλάδα","phone":"30","continent":"EU","capital":"Athens","currency":"EUR","languages":["el"],"emoji":"\uD83C\uDDEC\uD83C\uDDF7","emojiU":"U+1F1EC U+1F1F7"},"GS":{"name":"South Georgia and the South Sandwich Islands","native":"South Georgia","phone":"500","continent":"AN","capital":"King Edward Point","currency":"GBP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDF8","emojiU":"U+1F1EC U+1F1F8"},"GT":{"name":"Guatemala","native":"Guatemala","phone":"502","continent":"NA","capital":"Guatemala City","currency":"GTQ","languages":["es"],"emoji":"\uD83C\uDDEC\uD83C\uDDF9","emojiU":"U+1F1EC U+1F1F9"},"GU":{"name":"Guam","native":"Guam","phone":"1671","continent":"OC","capital":"Hagåtña","currency":"USD","languages":["en","ch","es"],"emoji":"\uD83C\uDDEC\uD83C\uDDFA","emojiU":"U+1F1EC U+1F1FA"},"GW":{"name":"Guinea-Bissau","native":"Guiné-Bissau","phone":"245","continent":"AF","capital":"Bissau","currency":"XOF","languages":["pt"],"emoji":"\uD83C\uDDEC\uD83C\uDDFC","emojiU":"U+1F1EC U+1F1FC"},"GY":{"name":"Guyana","native":"Guyana","phone":"592","continent":"SA","capital":"Georgetown","currency":"GYD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDFE","emojiU":"U+1F1EC U+1F1FE"},"HK":{"name":"Hong Kong","native":"香港","phone":"852","continent":"AS","capital":"City of Victoria","currency":"HKD","languages":["zh","en"],"emoji":"\uD83C\uDDED\uD83C\uDDF0","emojiU":"U+1F1ED U+1F1F0"},"HM":{"name":"Heard Island and McDonald Islands","native":"Heard Island and McDonald Islands","phone":"61","continent":"AN","capital":"","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDED\uD83C\uDDF2","emojiU":"U+1F1ED U+1F1F2"},"HN":{"name":"Honduras","native":"Honduras","phone":"504","continent":"NA","capital":"Tegucigalpa","currency":"HNL","languages":["es"],"emoji":"\uD83C\uDDED\uD83C\uDDF3","emojiU":"U+1F1ED U+1F1F3"},"HR":{"name":"Croatia","native":"Hrvatska","phone":"385","continent":"EU","capital":"Zagreb","currency":"HRK","languages":["hr"],"emoji":"\uD83C\uDDED\uD83C\uDDF7","emojiU":"U+1F1ED U+1F1F7"},"HT":{"name":"Haiti","native":"Haïti","phone":"509","continent":"NA","capital":"Port-au-Prince","currency":"HTG,USD","languages":["fr","ht"],"emoji":"\uD83C\uDDED\uD83C\uDDF9","emojiU":"U+1F1ED U+1F1F9"},"HU":{"name":"Hungary","native":"Magyarország","phone":"36","continent":"EU","capital":"Budapest","currency":"HUF","languages":["hu"],"emoji":"\uD83C\uDDED\uD83C\uDDFA","emojiU":"U+1F1ED U+1F1FA"},"ID":{"name":"Indonesia","native":"Indonesia","phone":"62","continent":"AS","capital":"Jakarta","currency":"IDR","languages":["id"],"emoji":"\uD83C\uDDEE\uD83C\uDDE9","emojiU":"U+1F1EE U+1F1E9"},"IE":{"name":"Ireland","native":"Éire","phone":"353","continent":"EU","capital":"Dublin","currency":"EUR","languages":["ga","en"],"emoji":"\uD83C\uDDEE\uD83C\uDDEA","emojiU":"U+1F1EE U+1F1EA"},"IL":{"name":"Israel","native":"יִשְׂרָאֵל","phone":"972","continent":"AS","capital":"Jerusalem","currency":"ILS","languages":["he","ar"],"emoji":"\uD83C\uDDEE\uD83C\uDDF1","emojiU":"U+1F1EE U+1F1F1"},"IM":{"name":"Isle of Man","native":"Isle of Man","phone":"44","continent":"EU","capital":"Douglas","currency":"GBP","languages":["en","gv"],"emoji":"\uD83C\uDDEE\uD83C\uDDF2","emojiU":"U+1F1EE U+1F1F2"},"IN":{"name":"India","native":"भारत","phone":"91","continent":"AS","capital":"New Delhi","currency":"INR","languages":["hi","en"],"emoji":"\uD83C\uDDEE\uD83C\uDDF3","emojiU":"U+1F1EE U+1F1F3"},"IO":{"name":"British Indian Ocean Territory","native":"British Indian Ocean Territory","phone":"246","continent":"AS","capital":"Diego Garcia","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDEE\uD83C\uDDF4","emojiU":"U+1F1EE U+1F1F4"},"IQ":{"name":"Iraq","native":"العراق","phone":"964","continent":"AS","capital":"Baghdad","currency":"IQD","languages":["ar","ku"],"emoji":"\uD83C\uDDEE\uD83C\uDDF6","emojiU":"U+1F1EE U+1F1F6"},"IR":{"name":"Iran","native":"ایران","phone":"98","continent":"AS","capital":"Tehran","currency":"IRR","languages":["fa"],"emoji":"\uD83C\uDDEE\uD83C\uDDF7","emojiU":"U+1F1EE U+1F1F7"},"IS":{"name":"Iceland","native":"Ísland","phone":"354","continent":"EU","capital":"Reykjavik","currency":"ISK","languages":["is"],"emoji":"\uD83C\uDDEE\uD83C\uDDF8","emojiU":"U+1F1EE U+1F1F8"},"IT":{"name":"Italy","native":"Italia","phone":"39","continent":"EU","capital":"Rome","currency":"EUR","languages":["it"],"emoji":"\uD83C\uDDEE\uD83C\uDDF9","emojiU":"U+1F1EE U+1F1F9"},"JE":{"name":"Jersey","native":"Jersey","phone":"44","continent":"EU","capital":"Saint Helier","currency":"GBP","languages":["en","fr"],"emoji":"\uD83C\uDDEF\uD83C\uDDEA","emojiU":"U+1F1EF U+1F1EA"},"JM":{"name":"Jamaica","native":"Jamaica","phone":"1876","continent":"NA","capital":"Kingston","currency":"JMD","languages":["en"],"emoji":"\uD83C\uDDEF\uD83C\uDDF2","emojiU":"U+1F1EF U+1F1F2"},"JO":{"name":"Jordan","native":"الأردن","phone":"962","continent":"AS","capital":"Amman","currency":"JOD","languages":["ar"],"emoji":"\uD83C\uDDEF\uD83C\uDDF4","emojiU":"U+1F1EF U+1F1F4"},"JP":{"name":"Japan","native":"日本","phone":"81","continent":"AS","capital":"Tokyo","currency":"JPY","languages":["ja"],"emoji":"\uD83C\uDDEF\uD83C\uDDF5","emojiU":"U+1F1EF U+1F1F5"},"KE":{"name":"Kenya","native":"Kenya","phone":"254","continent":"AF","capital":"Nairobi","currency":"KES","languages":["en","sw"],"emoji":"\uD83C\uDDF0\uD83C\uDDEA","emojiU":"U+1F1F0 U+1F1EA"},"KG":{"name":"Kyrgyzstan","native":"Кыргызстан","phone":"996","continent":"AS","capital":"Bishkek","currency":"KGS","languages":["ky","ru"],"emoji":"\uD83C\uDDF0\uD83C\uDDEC","emojiU":"U+1F1F0 U+1F1EC"},"KH":{"name":"Cambodia","native":"Kâmpŭchéa","phone":"855","continent":"AS","capital":"Phnom Penh","currency":"KHR","languages":["km"],"emoji":"\uD83C\uDDF0\uD83C\uDDED","emojiU":"U+1F1F0 U+1F1ED"},"KI":{"name":"Kiribati","native":"Kiribati","phone":"686","continent":"OC","capital":"South Tarawa","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDEE","emojiU":"U+1F1F0 U+1F1EE"},"KM":{"name":"Comoros","native":"Komori","phone":"269","continent":"AF","capital":"Moroni","currency":"KMF","languages":["ar","fr"],"emoji":"\uD83C\uDDF0\uD83C\uDDF2","emojiU":"U+1F1F0 U+1F1F2"},"KN":{"name":"Saint Kitts and Nevis","native":"Saint Kitts and Nevis","phone":"1869","continent":"NA","capital":"Basseterre","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDF3","emojiU":"U+1F1F0 U+1F1F3"},"KP":{"name":"North Korea","native":"북한","phone":"850","continent":"AS","capital":"Pyongyang","currency":"KPW","languages":["ko"],"emoji":"\uD83C\uDDF0\uD83C\uDDF5","emojiU":"U+1F1F0 U+1F1F5"},"KR":{"name":"South Korea","native":"대한민국","phone":"82","continent":"AS","capital":"Seoul","currency":"KRW","languages":["ko"],"emoji":"\uD83C\uDDF0\uD83C\uDDF7","emojiU":"U+1F1F0 U+1F1F7"},"KW":{"name":"Kuwait","native":"الكويت","phone":"965","continent":"AS","capital":"Kuwait City","currency":"KWD","languages":["ar"],"emoji":"\uD83C\uDDF0\uD83C\uDDFC","emojiU":"U+1F1F0 U+1F1FC"},"KY":{"name":"Cayman Islands","native":"Cayman Islands","phone":"1345","continent":"NA","capital":"George Town","currency":"KYD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDFE","emojiU":"U+1F1F0 U+1F1FE"},"KZ":{"name":"Kazakhstan","native":"Қазақстан","phone":"76,77","continent":"AS","capital":"Astana","currency":"KZT","languages":["kk","ru"],"emoji":"\uD83C\uDDF0\uD83C\uDDFF","emojiU":"U+1F1F0 U+1F1FF"},"LA":{"name":"Laos","native":"ສປປລາວ","phone":"856","continent":"AS","capital":"Vientiane","currency":"LAK","languages":["lo"],"emoji":"\uD83C\uDDF1\uD83C\uDDE6","emojiU":"U+1F1F1 U+1F1E6"},"LB":{"name":"Lebanon","native":"لبنان","phone":"961","continent":"AS","capital":"Beirut","currency":"LBP","languages":["ar","fr"],"emoji":"\uD83C\uDDF1\uD83C\uDDE7","emojiU":"U+1F1F1 U+1F1E7"},"LC":{"name":"Saint Lucia","native":"Saint Lucia","phone":"1758","continent":"NA","capital":"Castries","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF1\uD83C\uDDE8","emojiU":"U+1F1F1 U+1F1E8"},"LI":{"name":"Liechtenstein","native":"Liechtenstein","phone":"423","continent":"EU","capital":"Vaduz","currency":"CHF","languages":["de"],"emoji":"\uD83C\uDDF1\uD83C\uDDEE","emojiU":"U+1F1F1 U+1F1EE"},"LK":{"name":"Sri Lanka","native":"śrī laṃkāva","phone":"94","continent":"AS","capital":"Colombo","currency":"LKR","languages":["si","ta"],"emoji":"\uD83C\uDDF1\uD83C\uDDF0","emojiU":"U+1F1F1 U+1F1F0"},"LR":{"name":"Liberia","native":"Liberia","phone":"231","continent":"AF","capital":"Monrovia","currency":"LRD","languages":["en"],"emoji":"\uD83C\uDDF1\uD83C\uDDF7","emojiU":"U+1F1F1 U+1F1F7"},"LS":{"name":"Lesotho","native":"Lesotho","phone":"266","continent":"AF","capital":"Maseru","currency":"LSL,ZAR","languages":["en","st"],"emoji":"\uD83C\uDDF1\uD83C\uDDF8","emojiU":"U+1F1F1 U+1F1F8"},"LT":{"name":"Lithuania","native":"Lietuva","phone":"370","continent":"EU","capital":"Vilnius","currency":"EUR","languages":["lt"],"emoji":"\uD83C\uDDF1\uD83C\uDDF9","emojiU":"U+1F1F1 U+1F1F9"},"LU":{"name":"Luxembourg","native":"Luxembourg","phone":"352","continent":"EU","capital":"Luxembourg","currency":"EUR","languages":["fr","de","lb"],"emoji":"\uD83C\uDDF1\uD83C\uDDFA","emojiU":"U+1F1F1 U+1F1FA"},"LV":{"name":"Latvia","native":"Latvija","phone":"371","continent":"EU","capital":"Riga","currency":"EUR","languages":["lv"],"emoji":"\uD83C\uDDF1\uD83C\uDDFB","emojiU":"U+1F1F1 U+1F1FB"},"LY":{"name":"Libya","native":"\u200Fليبيا","phone":"218","continent":"AF","capital":"Tripoli","currency":"LYD","languages":["ar"],"emoji":"\uD83C\uDDF1\uD83C\uDDFE","emojiU":"U+1F1F1 U+1F1FE"},"MA":{"name":"Morocco","native":"المغرب","phone":"212","continent":"AF","capital":"Rabat","currency":"MAD","languages":["ar"],"emoji":"\uD83C\uDDF2\uD83C\uDDE6","emojiU":"U+1F1F2 U+1F1E6"},"MC":{"name":"Monaco","native":"Monaco","phone":"377","continent":"EU","capital":"Monaco","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDE8","emojiU":"U+1F1F2 U+1F1E8"},"MD":{"name":"Moldova","native":"Moldova","phone":"373","continent":"EU","capital":"Chișinău","currency":"MDL","languages":["ro"],"emoji":"\uD83C\uDDF2\uD83C\uDDE9","emojiU":"U+1F1F2 U+1F1E9"},"ME":{"name":"Montenegro","native":"Црна Гора","phone":"382","continent":"EU","capital":"Podgorica","currency":"EUR","languages":["sr","bs","sq","hr"],"emoji":"\uD83C\uDDF2\uD83C\uDDEA","emojiU":"U+1F1F2 U+1F1EA"},"MF":{"name":"Saint Martin","native":"Saint-Martin","phone":"590","continent":"NA","capital":"Marigot","currency":"EUR","languages":["en","fr","nl"],"emoji":"\uD83C\uDDF2\uD83C\uDDEB","emojiU":"U+1F1F2 U+1F1EB"},"MG":{"name":"Madagascar","native":"Madagasikara","phone":"261","continent":"AF","capital":"Antananarivo","currency":"MGA","languages":["fr","mg"],"emoji":"\uD83C\uDDF2\uD83C\uDDEC","emojiU":"U+1F1F2 U+1F1EC"},"MH":{"name":"Marshall Islands","native":"M̧ajeļ","phone":"692","continent":"OC","capital":"Majuro","currency":"USD","languages":["en","mh"],"emoji":"\uD83C\uDDF2\uD83C\uDDED","emojiU":"U+1F1F2 U+1F1ED"},"MK":{"name":"North Macedonia","native":"Северна Македонија","phone":"389","continent":"EU","capital":"Skopje","currency":"MKD","languages":["mk"],"emoji":"\uD83C\uDDF2\uD83C\uDDF0","emojiU":"U+1F1F2 U+1F1F0"},"ML":{"name":"Mali","native":"Mali","phone":"223","continent":"AF","capital":"Bamako","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDF1","emojiU":"U+1F1F2 U+1F1F1"},"MM":{"name":"Myanmar [Burma]","native":"မြန်မာ","phone":"95","continent":"AS","capital":"Naypyidaw","currency":"MMK","languages":["my"],"emoji":"\uD83C\uDDF2\uD83C\uDDF2","emojiU":"U+1F1F2 U+1F1F2"},"MN":{"name":"Mongolia","native":"Монгол улс","phone":"976","continent":"AS","capital":"Ulan Bator","currency":"MNT","languages":["mn"],"emoji":"\uD83C\uDDF2\uD83C\uDDF3","emojiU":"U+1F1F2 U+1F1F3"},"MO":{"name":"Macao","native":"澳門","phone":"853","continent":"AS","capital":"","currency":"MOP","languages":["zh","pt"],"emoji":"\uD83C\uDDF2\uD83C\uDDF4","emojiU":"U+1F1F2 U+1F1F4"},"MP":{"name":"Northern Mariana Islands","native":"Northern Mariana Islands","phone":"1670","continent":"OC","capital":"Saipan","currency":"USD","languages":["en","ch"],"emoji":"\uD83C\uDDF2\uD83C\uDDF5","emojiU":"U+1F1F2 U+1F1F5"},"MQ":{"name":"Martinique","native":"Martinique","phone":"596","continent":"NA","capital":"Fort-de-France","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDF6","emojiU":"U+1F1F2 U+1F1F6"},"MR":{"name":"Mauritania","native":"موريتانيا","phone":"222","continent":"AF","capital":"Nouakchott","currency":"MRU","languages":["ar"],"emoji":"\uD83C\uDDF2\uD83C\uDDF7","emojiU":"U+1F1F2 U+1F1F7"},"MS":{"name":"Montserrat","native":"Montserrat","phone":"1664","continent":"NA","capital":"Plymouth","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF2\uD83C\uDDF8","emojiU":"U+1F1F2 U+1F1F8"},"MT":{"name":"Malta","native":"Malta","phone":"356","continent":"EU","capital":"Valletta","currency":"EUR","languages":["mt","en"],"emoji":"\uD83C\uDDF2\uD83C\uDDF9","emojiU":"U+1F1F2 U+1F1F9"},"MU":{"name":"Mauritius","native":"Maurice","phone":"230","continent":"AF","capital":"Port Louis","currency":"MUR","languages":["en"],"emoji":"\uD83C\uDDF2\uD83C\uDDFA","emojiU":"U+1F1F2 U+1F1FA"},"MV":{"name":"Maldives","native":"Maldives","phone":"960","continent":"AS","capital":"Malé","currency":"MVR","languages":["dv"],"emoji":"\uD83C\uDDF2\uD83C\uDDFB","emojiU":"U+1F1F2 U+1F1FB"},"MW":{"name":"Malawi","native":"Malawi","phone":"265","continent":"AF","capital":"Lilongwe","currency":"MWK","languages":["en","ny"],"emoji":"\uD83C\uDDF2\uD83C\uDDFC","emojiU":"U+1F1F2 U+1F1FC"},"MX":{"name":"Mexico","native":"México","phone":"52","continent":"NA","capital":"Mexico City","currency":"MXN","languages":["es"],"emoji":"\uD83C\uDDF2\uD83C\uDDFD","emojiU":"U+1F1F2 U+1F1FD"},"MY":{"name":"Malaysia","native":"Malaysia","phone":"60","continent":"AS","capital":"Kuala Lumpur","currency":"MYR","languages":["ms"],"emoji":"\uD83C\uDDF2\uD83C\uDDFE","emojiU":"U+1F1F2 U+1F1FE"},"MZ":{"name":"Mozambique","native":"Moçambique","phone":"258","continent":"AF","capital":"Maputo","currency":"MZN","languages":["pt"],"emoji":"\uD83C\uDDF2\uD83C\uDDFF","emojiU":"U+1F1F2 U+1F1FF"},"NA":{"name":"Namibia","native":"Namibia","phone":"264","continent":"AF","capital":"Windhoek","currency":"NAD,ZAR","languages":["en","af"],"emoji":"\uD83C\uDDF3\uD83C\uDDE6","emojiU":"U+1F1F3 U+1F1E6"},"NC":{"name":"New Caledonia","native":"Nouvelle-Calédonie","phone":"687","continent":"OC","capital":"Nouméa","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDF3\uD83C\uDDE8","emojiU":"U+1F1F3 U+1F1E8"},"NE":{"name":"Niger","native":"Niger","phone":"227","continent":"AF","capital":"Niamey","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF3\uD83C\uDDEA","emojiU":"U+1F1F3 U+1F1EA"},"NF":{"name":"Norfolk Island","native":"Norfolk Island","phone":"672","continent":"OC","capital":"Kingston","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDEB","emojiU":"U+1F1F3 U+1F1EB"},"NG":{"name":"Nigeria","native":"Nigeria","phone":"234","continent":"AF","capital":"Abuja","currency":"NGN","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDEC","emojiU":"U+1F1F3 U+1F1EC"},"NI":{"name":"Nicaragua","native":"Nicaragua","phone":"505","continent":"NA","capital":"Managua","currency":"NIO","languages":["es"],"emoji":"\uD83C\uDDF3\uD83C\uDDEE","emojiU":"U+1F1F3 U+1F1EE"},"NL":{"name":"Netherlands","native":"Nederland","phone":"31","continent":"EU","capital":"Amsterdam","currency":"EUR","languages":["nl"],"emoji":"\uD83C\uDDF3\uD83C\uDDF1","emojiU":"U+1F1F3 U+1F1F1"},"NO":{"name":"Norway","native":"Norge","phone":"47","continent":"EU","capital":"Oslo","currency":"NOK","languages":["no","nb","nn"],"emoji":"\uD83C\uDDF3\uD83C\uDDF4","emojiU":"U+1F1F3 U+1F1F4"},"NP":{"name":"Nepal","native":"नपल","phone":"977","continent":"AS","capital":"Kathmandu","currency":"NPR","languages":["ne"],"emoji":"\uD83C\uDDF3\uD83C\uDDF5","emojiU":"U+1F1F3 U+1F1F5"},"NR":{"name":"Nauru","native":"Nauru","phone":"674","continent":"OC","capital":"Yaren","currency":"AUD","languages":["en","na"],"emoji":"\uD83C\uDDF3\uD83C\uDDF7","emojiU":"U+1F1F3 U+1F1F7"},"NU":{"name":"Niue","native":"Niuē","phone":"683","continent":"OC","capital":"Alofi","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDFA","emojiU":"U+1F1F3 U+1F1FA"},"NZ":{"name":"New Zealand","native":"New Zealand","phone":"64","continent":"OC","capital":"Wellington","currency":"NZD","languages":["en","mi"],"emoji":"\uD83C\uDDF3\uD83C\uDDFF","emojiU":"U+1F1F3 U+1F1FF"},"OM":{"name":"Oman","native":"عمان","phone":"968","continent":"AS","capital":"Muscat","currency":"OMR","languages":["ar"],"emoji":"\uD83C\uDDF4\uD83C\uDDF2","emojiU":"U+1F1F4 U+1F1F2"},"PA":{"name":"Panama","native":"Panamá","phone":"507","continent":"NA","capital":"Panama City","currency":"PAB,USD","languages":["es"],"emoji":"\uD83C\uDDF5\uD83C\uDDE6","emojiU":"U+1F1F5 U+1F1E6"},"PE":{"name":"Peru","native":"Perú","phone":"51","continent":"SA","capital":"Lima","currency":"PEN","languages":["es"],"emoji":"\uD83C\uDDF5\uD83C\uDDEA","emojiU":"U+1F1F5 U+1F1EA"},"PF":{"name":"French Polynesia","native":"Polynésie française","phone":"689","continent":"OC","capital":"Papeetē","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDF5\uD83C\uDDEB","emojiU":"U+1F1F5 U+1F1EB"},"PG":{"name":"Papua New Guinea","native":"Papua Niugini","phone":"675","continent":"OC","capital":"Port Moresby","currency":"PGK","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDEC","emojiU":"U+1F1F5 U+1F1EC"},"PH":{"name":"Philippines","native":"Pilipinas","phone":"63","continent":"AS","capital":"Manila","currency":"PHP","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDED","emojiU":"U+1F1F5 U+1F1ED"},"PK":{"name":"Pakistan","native":"Pakistan","phone":"92","continent":"AS","capital":"Islamabad","currency":"PKR","languages":["en","ur"],"emoji":"\uD83C\uDDF5\uD83C\uDDF0","emojiU":"U+1F1F5 U+1F1F0"},"PL":{"name":"Poland","native":"Polska","phone":"48","continent":"EU","capital":"Warsaw","currency":"PLN","languages":["pl"],"emoji":"\uD83C\uDDF5\uD83C\uDDF1","emojiU":"U+1F1F5 U+1F1F1"},"PM":{"name":"Saint Pierre and Miquelon","native":"Saint-Pierre-et-Miquelon","phone":"508","continent":"NA","capital":"Saint-Pierre","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF5\uD83C\uDDF2","emojiU":"U+1F1F5 U+1F1F2"},"PN":{"name":"Pitcairn Islands","native":"Pitcairn Islands","phone":"64","continent":"OC","capital":"Adamstown","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDF3","emojiU":"U+1F1F5 U+1F1F3"},"PR":{"name":"Puerto Rico","native":"Puerto Rico","phone":"1787,1939","continent":"NA","capital":"San Juan","currency":"USD","languages":["es","en"],"emoji":"\uD83C\uDDF5\uD83C\uDDF7","emojiU":"U+1F1F5 U+1F1F7"},"PS":{"name":"Palestine","native":"فلسطين","phone":"970","continent":"AS","capital":"Ramallah","currency":"ILS","languages":["ar"],"emoji":"\uD83C\uDDF5\uD83C\uDDF8","emojiU":"U+1F1F5 U+1F1F8"},"PT":{"name":"Portugal","native":"Portugal","phone":"351","continent":"EU","capital":"Lisbon","currency":"EUR","languages":["pt"],"emoji":"\uD83C\uDDF5\uD83C\uDDF9","emojiU":"U+1F1F5 U+1F1F9"},"PW":{"name":"Palau","native":"Palau","phone":"680","continent":"OC","capital":"Ngerulmud","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDFC","emojiU":"U+1F1F5 U+1F1FC"},"PY":{"name":"Paraguay","native":"Paraguay","phone":"595","continent":"SA","capital":"Asunción","currency":"PYG","languages":["es","gn"],"emoji":"\uD83C\uDDF5\uD83C\uDDFE","emojiU":"U+1F1F5 U+1F1FE"},"QA":{"name":"Qatar","native":"قطر","phone":"974","continent":"AS","capital":"Doha","currency":"QAR","languages":["ar"],"emoji":"\uD83C\uDDF6\uD83C\uDDE6","emojiU":"U+1F1F6 U+1F1E6"},"RE":{"name":"Réunion","native":"La Réunion","phone":"262","continent":"AF","capital":"Saint-Denis","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF7\uD83C\uDDEA","emojiU":"U+1F1F7 U+1F1EA"},"RO":{"name":"Romania","native":"România","phone":"40","continent":"EU","capital":"Bucharest","currency":"RON","languages":["ro"],"emoji":"\uD83C\uDDF7\uD83C\uDDF4","emojiU":"U+1F1F7 U+1F1F4"},"RS":{"name":"Serbia","native":"Србија","phone":"381","continent":"EU","capital":"Belgrade","currency":"RSD","languages":["sr"],"emoji":"\uD83C\uDDF7\uD83C\uDDF8","emojiU":"U+1F1F7 U+1F1F8"},"RU":{"name":"Russia","native":"Россия","phone":"7","continent":"EU","capital":"Moscow","currency":"RUB","languages":["ru"],"emoji":"\uD83C\uDDF7\uD83C\uDDFA","emojiU":"U+1F1F7 U+1F1FA"},"RW":{"name":"Rwanda","native":"Rwanda","phone":"250","continent":"AF","capital":"Kigali","currency":"RWF","languages":["rw","en","fr"],"emoji":"\uD83C\uDDF7\uD83C\uDDFC","emojiU":"U+1F1F7 U+1F1FC"},"SA":{"name":"Saudi Arabia","native":"العربية السعودية","phone":"966","continent":"AS","capital":"Riyadh","currency":"SAR","languages":["ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDE6","emojiU":"U+1F1F8 U+1F1E6"},"SB":{"name":"Solomon Islands","native":"Solomon Islands","phone":"677","continent":"OC","capital":"Honiara","currency":"SBD","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE7","emojiU":"U+1F1F8 U+1F1E7"},"SC":{"name":"Seychelles","native":"Seychelles","phone":"248","continent":"AF","capital":"Victoria","currency":"SCR","languages":["fr","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE8","emojiU":"U+1F1F8 U+1F1E8"},"SD":{"name":"Sudan","native":"السودان","phone":"249","continent":"AF","capital":"Khartoum","currency":"SDG","languages":["ar","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE9","emojiU":"U+1F1F8 U+1F1E9"},"SE":{"name":"Sweden","native":"Sverige","phone":"46","continent":"EU","capital":"Stockholm","currency":"SEK","languages":["sv"],"emoji":"\uD83C\uDDF8\uD83C\uDDEA","emojiU":"U+1F1F8 U+1F1EA"},"SG":{"name":"Singapore","native":"Singapore","phone":"65","continent":"AS","capital":"Singapore","currency":"SGD","languages":["en","ms","ta","zh"],"emoji":"\uD83C\uDDF8\uD83C\uDDEC","emojiU":"U+1F1F8 U+1F1EC"},"SH":{"name":"Saint Helena","native":"Saint Helena","phone":"290","continent":"AF","capital":"Jamestown","currency":"SHP","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDED","emojiU":"U+1F1F8 U+1F1ED"},"SI":{"name":"Slovenia","native":"Slovenija","phone":"386","continent":"EU","capital":"Ljubljana","currency":"EUR","languages":["sl"],"emoji":"\uD83C\uDDF8\uD83C\uDDEE","emojiU":"U+1F1F8 U+1F1EE"},"SJ":{"name":"Svalbard and Jan Mayen","native":"Svalbard og Jan Mayen","phone":"4779","continent":"EU","capital":"Longyearbyen","currency":"NOK","languages":["no"],"emoji":"\uD83C\uDDF8\uD83C\uDDEF","emojiU":"U+1F1F8 U+1F1EF"},"SK":{"name":"Slovakia","native":"Slovensko","phone":"421","continent":"EU","capital":"Bratislava","currency":"EUR","languages":["sk"],"emoji":"\uD83C\uDDF8\uD83C\uDDF0","emojiU":"U+1F1F8 U+1F1F0"},"SL":{"name":"Sierra Leone","native":"Sierra Leone","phone":"232","continent":"AF","capital":"Freetown","currency":"SLL","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDF1","emojiU":"U+1F1F8 U+1F1F1"},"SM":{"name":"San Marino","native":"San Marino","phone":"378","continent":"EU","capital":"City of San Marino","currency":"EUR","languages":["it"],"emoji":"\uD83C\uDDF8\uD83C\uDDF2","emojiU":"U+1F1F8 U+1F1F2"},"SN":{"name":"Senegal","native":"Sénégal","phone":"221","continent":"AF","capital":"Dakar","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF8\uD83C\uDDF3","emojiU":"U+1F1F8 U+1F1F3"},"SO":{"name":"Somalia","native":"Soomaaliya","phone":"252","continent":"AF","capital":"Mogadishu","currency":"SOS","languages":["so","ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDF4","emojiU":"U+1F1F8 U+1F1F4"},"SR":{"name":"Suriname","native":"Suriname","phone":"597","continent":"SA","capital":"Paramaribo","currency":"SRD","languages":["nl"],"emoji":"\uD83C\uDDF8\uD83C\uDDF7","emojiU":"U+1F1F8 U+1F1F7"},"SS":{"name":"South Sudan","native":"South Sudan","phone":"211","continent":"AF","capital":"Juba","currency":"SSP","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDF8","emojiU":"U+1F1F8 U+1F1F8"},"ST":{"name":"São Tomé and Príncipe","native":"São Tomé e Príncipe","phone":"239","continent":"AF","capital":"São Tomé","currency":"STN","languages":["pt"],"emoji":"\uD83C\uDDF8\uD83C\uDDF9","emojiU":"U+1F1F8 U+1F1F9"},"SV":{"name":"El Salvador","native":"El Salvador","phone":"503","continent":"NA","capital":"San Salvador","currency":"SVC,USD","languages":["es"],"emoji":"\uD83C\uDDF8\uD83C\uDDFB","emojiU":"U+1F1F8 U+1F1FB"},"SX":{"name":"Sint Maarten","native":"Sint Maarten","phone":"1721","continent":"NA","capital":"Philipsburg","currency":"ANG","languages":["nl","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDFD","emojiU":"U+1F1F8 U+1F1FD"},"SY":{"name":"Syria","native":"سوريا","phone":"963","continent":"AS","capital":"Damascus","currency":"SYP","languages":["ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDFE","emojiU":"U+1F1F8 U+1F1FE"},"SZ":{"name":"Swaziland","native":"Swaziland","phone":"268","continent":"AF","capital":"Lobamba","currency":"SZL","languages":["en","ss"],"emoji":"\uD83C\uDDF8\uD83C\uDDFF","emojiU":"U+1F1F8 U+1F1FF"},"TC":{"name":"Turks and Caicos Islands","native":"Turks and Caicos Islands","phone":"1649","continent":"NA","capital":"Cockburn Town","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDE8","emojiU":"U+1F1F9 U+1F1E8"},"TD":{"name":"Chad","native":"Tchad","phone":"235","continent":"AF","capital":"N\'Djamena","currency":"XAF","languages":["fr","ar"],"emoji":"\uD83C\uDDF9\uD83C\uDDE9","emojiU":"U+1F1F9 U+1F1E9"},"TF":{"name":"French Southern Territories","native":"Territoire des Terres australes et antarctiques fr","phone":"262","continent":"AN","capital":"Port-aux-Français","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF9\uD83C\uDDEB","emojiU":"U+1F1F9 U+1F1EB"},"TG":{"name":"Togo","native":"Togo","phone":"228","continent":"AF","capital":"Lomé","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF9\uD83C\uDDEC","emojiU":"U+1F1F9 U+1F1EC"},"TH":{"name":"Thailand","native":"ประเทศไทย","phone":"66","continent":"AS","capital":"Bangkok","currency":"THB","languages":["th"],"emoji":"\uD83C\uDDF9\uD83C\uDDED","emojiU":"U+1F1F9 U+1F1ED"},"TJ":{"name":"Tajikistan","native":"Тоҷикистон","phone":"992","continent":"AS","capital":"Dushanbe","currency":"TJS","languages":["tg","ru"],"emoji":"\uD83C\uDDF9\uD83C\uDDEF","emojiU":"U+1F1F9 U+1F1EF"},"TK":{"name":"Tokelau","native":"Tokelau","phone":"690","continent":"OC","capital":"Fakaofo","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDF0","emojiU":"U+1F1F9 U+1F1F0"},"TL":{"name":"East Timor","native":"Timor-Leste","phone":"670","continent":"OC","capital":"Dili","currency":"USD","languages":["pt"],"emoji":"\uD83C\uDDF9\uD83C\uDDF1","emojiU":"U+1F1F9 U+1F1F1"},"TM":{"name":"Turkmenistan","native":"Türkmenistan","phone":"993","continent":"AS","capital":"Ashgabat","currency":"TMT","languages":["tk","ru"],"emoji":"\uD83C\uDDF9\uD83C\uDDF2","emojiU":"U+1F1F9 U+1F1F2"},"TN":{"name":"Tunisia","native":"تونس","phone":"216","continent":"AF","capital":"Tunis","currency":"TND","languages":["ar"],"emoji":"\uD83C\uDDF9\uD83C\uDDF3","emojiU":"U+1F1F9 U+1F1F3"},"TO":{"name":"Tonga","native":"Tonga","phone":"676","continent":"OC","capital":"Nuku\'alofa","currency":"TOP","languages":["en","to"],"emoji":"\uD83C\uDDF9\uD83C\uDDF4","emojiU":"U+1F1F9 U+1F1F4"},"TR":{"name":"Turkey","native":"Türkiye","phone":"90","continent":"AS","capital":"Ankara","currency":"TRY","languages":["tr"],"emoji":"\uD83C\uDDF9\uD83C\uDDF7","emojiU":"U+1F1F9 U+1F1F7"},"TT":{"name":"Trinidad and Tobago","native":"Trinidad and Tobago","phone":"1868","continent":"NA","capital":"Port of Spain","currency":"TTD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDF9","emojiU":"U+1F1F9 U+1F1F9"},"TV":{"name":"Tuvalu","native":"Tuvalu","phone":"688","continent":"OC","capital":"Funafuti","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDFB","emojiU":"U+1F1F9 U+1F1FB"},"TW":{"name":"Taiwan","native":"臺灣","phone":"886","continent":"AS","capital":"Taipei","currency":"TWD","languages":["zh"],"emoji":"\uD83C\uDDF9\uD83C\uDDFC","emojiU":"U+1F1F9 U+1F1FC"},"TZ":{"name":"Tanzania","native":"Tanzania","phone":"255","continent":"AF","capital":"Dodoma","currency":"TZS","languages":["sw","en"],"emoji":"\uD83C\uDDF9\uD83C\uDDFF","emojiU":"U+1F1F9 U+1F1FF"},"UA":{"name":"Ukraine","native":"Україна","phone":"380","continent":"EU","capital":"Kyiv","currency":"UAH","languages":["uk"],"emoji":"\uD83C\uDDFA\uD83C\uDDE6","emojiU":"U+1F1FA U+1F1E6"},"UG":{"name":"Uganda","native":"Uganda","phone":"256","continent":"AF","capital":"Kampala","currency":"UGX","languages":["en","sw"],"emoji":"\uD83C\uDDFA\uD83C\uDDEC","emojiU":"U+1F1FA U+1F1EC"},"UM":{"name":"U.S. Minor Outlying Islands","native":"United States Minor Outlying Islands","phone":"1","continent":"OC","capital":"","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFA\uD83C\uDDF2","emojiU":"U+1F1FA U+1F1F2"},"US":{"name":"United States","native":"United States","phone":"1","continent":"NA","capital":"Washington D.C.","currency":"USD,USN,USS","languages":["en"],"emoji":"\uD83C\uDDFA\uD83C\uDDF8","emojiU":"U+1F1FA U+1F1F8"},"UY":{"name":"Uruguay","native":"Uruguay","phone":"598","continent":"SA","capital":"Montevideo","currency":"UYI,UYU","languages":["es"],"emoji":"\uD83C\uDDFA\uD83C\uDDFE","emojiU":"U+1F1FA U+1F1FE"},"UZ":{"name":"Uzbekistan","native":"O\u2018zbekiston","phone":"998","continent":"AS","capital":"Tashkent","currency":"UZS","languages":["uz","ru"],"emoji":"\uD83C\uDDFA\uD83C\uDDFF","emojiU":"U+1F1FA U+1F1FF"},"VA":{"name":"Vatican City","native":"Vaticano","phone":"379","continent":"EU","capital":"Vatican City","currency":"EUR","languages":["it","la"],"emoji":"\uD83C\uDDFB\uD83C\uDDE6","emojiU":"U+1F1FB U+1F1E6"},"VC":{"name":"Saint Vincent and the Grenadines","native":"Saint Vincent and the Grenadines","phone":"1784","continent":"NA","capital":"Kingstown","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDE8","emojiU":"U+1F1FB U+1F1E8"},"VE":{"name":"Venezuela","native":"Venezuela","phone":"58","continent":"SA","capital":"Caracas","currency":"VES","languages":["es"],"emoji":"\uD83C\uDDFB\uD83C\uDDEA","emojiU":"U+1F1FB U+1F1EA"},"VG":{"name":"British Virgin Islands","native":"British Virgin Islands","phone":"1284","continent":"NA","capital":"Road Town","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDEC","emojiU":"U+1F1FB U+1F1EC"},"VI":{"name":"U.S. Virgin Islands","native":"United States Virgin Islands","phone":"1340","continent":"NA","capital":"Charlotte Amalie","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDEE","emojiU":"U+1F1FB U+1F1EE"},"VN":{"name":"Vietnam","native":"Việt Nam","phone":"84","continent":"AS","capital":"Hanoi","currency":"VND","languages":["vi"],"emoji":"\uD83C\uDDFB\uD83C\uDDF3","emojiU":"U+1F1FB U+1F1F3"},"VU":{"name":"Vanuatu","native":"Vanuatu","phone":"678","continent":"OC","capital":"Port Vila","currency":"VUV","languages":["bi","en","fr"],"emoji":"\uD83C\uDDFB\uD83C\uDDFA","emojiU":"U+1F1FB U+1F1FA"},"WF":{"name":"Wallis and Futuna","native":"Wallis et Futuna","phone":"681","continent":"OC","capital":"Mata-Utu","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDFC\uD83C\uDDEB","emojiU":"U+1F1FC U+1F1EB"},"WS":{"name":"Samoa","native":"Samoa","phone":"685","continent":"OC","capital":"Apia","currency":"WST","languages":["sm","en"],"emoji":"\uD83C\uDDFC\uD83C\uDDF8","emojiU":"U+1F1FC U+1F1F8"},"XK":{"name":"Kosovo","native":"Republika e Kosovës","phone":"377,381,383,386","continent":"EU","capital":"Pristina","currency":"EUR","languages":["sq","sr"],"emoji":"\uD83C\uDDFD\uD83C\uDDF0","emojiU":"U+1F1FD U+1F1F0"},"YE":{"name":"Yemen","native":"اليَمَن","phone":"967","continent":"AS","capital":"Sana\'a","currency":"YER","languages":["ar"],"emoji":"\uD83C\uDDFE\uD83C\uDDEA","emojiU":"U+1F1FE U+1F1EA"},"YT":{"name":"Mayotte","native":"Mayotte","phone":"262","continent":"AF","capital":"Mamoudzou","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDFE\uD83C\uDDF9","emojiU":"U+1F1FE U+1F1F9"},"ZA":{"name":"South Africa","native":"South Africa","phone":"27","continent":"AF","capital":"Pretoria","currency":"ZAR","languages":["af","en","nr","st","ss","tn","ts","ve","xh","zu"],"emoji":"\uD83C\uDDFF\uD83C\uDDE6","emojiU":"U+1F1FF U+1F1E6"},"ZM":{"name":"Zambia","native":"Zambia","phone":"260","continent":"AF","capital":"Lusaka","currency":"ZMW","languages":["en"],"emoji":"\uD83C\uDDFF\uD83C\uDDF2","emojiU":"U+1F1FF U+1F1F2"},"ZW":{"name":"Zimbabwe","native":"Zimbabwe","phone":"263","continent":"AF","capital":"Harare","currency":"USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY","languages":["en","sn","nd"],"emoji":"\uD83C\uDDFF\uD83C\uDDFC","emojiU":"U+1F1FF U+1F1FC"}}');
        },
        function(e) {
            e.exports = JSON.parse('{"af":{"name":"Afrikaans","native":"Afrikaans"},"am":{"name":"Amharic","native":"አማርኛ"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bi":{"name":"Bislama","native":"Bislama"},"bn":{"name":"Bengali","native":"বাংলা"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ch":{"name":"Chamorro","native":"Chamoru"},"cs":{"name":"Czech","native":"Čeština"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང\u0F0Bཁ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"ga":{"name":"Irish","native":"Gaeilge"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gv":{"name":"Manx","native":"Gaelg"},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"ja":{"name":"Japanese","native":"日本語"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"ko":{"name":"Korean","native":"한국어"},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"mn":{"name":"Mongolian","native":"Монгол"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sg":{"name":"Sango","native":"Sängö"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"xh":{"name":"Xhosa","native":"isiXhosa"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}');
        },
        function(e) {
            e.exports = JSON.parse('{"aa":{"name":"Afar","native":"Afar"},"ab":{"name":"Abkhazian","native":"Аҧсуа"},"af":{"name":"Afrikaans","native":"Afrikaans"},"ak":{"name":"Akan","native":"Akana"},"am":{"name":"Amharic","native":"አማርኛ"},"an":{"name":"Aragonese","native":"Aragonés"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"as":{"name":"Assamese","native":"অসমীয়া"},"av":{"name":"Avar","native":"Авар"},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"ba":{"name":"Bashkir","native":"Башҡорт"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bh":{"name":"Bihari","native":"भोजपुरी"},"bi":{"name":"Bislama","native":"Bislama"},"bm":{"name":"Bambara","native":"Bamanankan"},"bn":{"name":"Bengali","native":"বাংলা"},"bo":{"name":"Tibetan","native":"བོད\u0F0Bཡིག / Bod skad"},"br":{"name":"Breton","native":"Brezhoneg"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ce":{"name":"Chechen","native":"Нохчийн"},"ch":{"name":"Chamorro","native":"Chamoru"},"co":{"name":"Corsican","native":"Corsu"},"cr":{"name":"Cree","native":"Nehiyaw"},"cs":{"name":"Czech","native":"Čeština"},"cu":{"name":"Old Church Slavonic / Old Bulgarian","native":"словѣньскъ / slověnĭskŭ"},"cv":{"name":"Chuvash","native":"Чăваш"},"cy":{"name":"Welsh","native":"Cymraeg"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང\u0F0Bཁ"},"ee":{"name":"Ewe","native":"Ɛʋɛ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"eo":{"name":"Esperanto","native":"Esperanto"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"fy":{"name":"West Frisian","native":"Frysk"},"ga":{"name":"Irish","native":"Gaeilge"},"gd":{"name":"Scottish Gaelic","native":"Gàidhlig"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gu":{"name":"Gujarati","native":"ગુજરાતી"},"gv":{"name":"Manx","native":"Gaelg"},"ha":{"name":"Hausa","native":"هَوُسَ","rtl":1},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"ho":{"name":"Hiri Motu","native":"Hiri Motu"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"hz":{"name":"Herero","native":"Otsiherero"},"ia":{"name":"Interlingua","native":"Interlingua"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"ie":{"name":"Interlingue","native":"Interlingue"},"ig":{"name":"Igbo","native":"Igbo"},"ii":{"name":"Sichuan Yi","native":"ꆇꉙ / 四川彝语"},"ik":{"name":"Inupiak","native":"Iñupiak"},"io":{"name":"Ido","native":"Ido"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"iu":{"name":"Inuktitut","native":"ᐃᓄᒃᑎᑐᑦ"},"ja":{"name":"Japanese","native":"日本語"},"jv":{"name":"Javanese","native":"Basa Jawa"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"ki":{"name":"Kikuyu","native":"Gĩkũyũ"},"kj":{"name":"Kuanyama","native":"Kuanyama"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"kn":{"name":"Kannada","native":"ಕನ್ನಡ"},"ko":{"name":"Korean","native":"한국어"},"kr":{"name":"Kanuri","native":"Kanuri"},"ks":{"name":"Kashmiri","native":"कश्मीरी / كشميري","rtl":1},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"kv":{"name":"Komi","native":"Коми"},"kw":{"name":"Cornish","native":"Kernewek"},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"lg":{"name":"Ganda","native":"Luganda"},"li":{"name":"Limburgian","native":"Limburgs"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"ml":{"name":"Malayalam","native":"മലയാളം"},"mn":{"name":"Mongolian","native":"Монгол"},"mo":{"name":"Moldovan","native":"Moldovenească"},"mr":{"name":"Marathi","native":"मराठी"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"ng":{"name":"Ndonga","native":"Oshiwambo"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"nv":{"name":"Navajo","native":"Diné bizaad"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"oj":{"name":"Ojibwa","native":"ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"},"om":{"name":"Oromo","native":"Oromoo"},"or":{"name":"Oriya","native":"ଓଡ଼ିଆ"},"os":{"name":"Ossetian / Ossetic","native":"Иронау"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pi":{"name":"Pali","native":"Pāli / पाऴि"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rm":{"name":"Raeto Romance","native":"Rumantsch"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sa":{"name":"Sanskrit","native":"संस्कृतम्"},"sc":{"name":"Sardinian","native":"Sardu"},"sd":{"name":"Sindhi","native":"सिनधि"},"se":{"name":"Northern Sami","native":"Sámegiella"},"sg":{"name":"Sango","native":"Sängö"},"sh":{"name":"Serbo-Croatian","native":"Srpskohrvatski / Српскохрватски"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"su":{"name":"Sundanese","native":"Basa Sunda"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"te":{"name":"Telugu","native":"తెలుగు"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tl":{"name":"Tagalog / Filipino","native":"Tagalog"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"tt":{"name":"Tatar","native":"Tatarça"},"tw":{"name":"Twi","native":"Twi"},"ty":{"name":"Tahitian","native":"Reo Mā`ohi"},"ug":{"name":"Uyghur","native":"Uyƣurqə / ئۇيغۇرچە"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"vo":{"name":"Volapük","native":"Volapük"},"wa":{"name":"Walloon","native":"Walon"},"wo":{"name":"Wolof","native":"Wollof"},"xh":{"name":"Xhosa","native":"isiXhosa"},"yi":{"name":"Yiddish","native":"ייִדיש","rtl":1},"yo":{"name":"Yoruba","native":"Yorùbá"},"za":{"name":"Zhuang","native":"Cuengh / Tôô / 壮语"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}');
        },
        function(e, f, g) {
            (function(h, i) {
                var j;

                function k(l) {
                    return (k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(m) {
                        return typeof m;
                    } : function(m) {
                        return m && 'function' == typeof Symbol && m.constructor === Symbol && m !== Symbol.prototype ? 'symbol' : typeof m;
                    })(l);
                }! function(l) {
                    var m = 'object' == k(f) && f && !f.nodeType && f,
                        n = 'object' == k(h) && h && !h.nodeType && h,
                        o = 'object' == (void 0 === i ? 'undefined' : k(i)) && i;
                    o.global !== o && o.window !== o && o.self !== o || (l = o);
                    var p, q, r = 2147483647,
                        s = /^xn--/,
                        t = /[^\x20-\x7E]/,
                        u = /[\x2E\u3002\uFF0E\uFF61]/g,
                        v = {
                            overflow: 'Overflow: input needs wider integers to process',
                            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                            'invalid-input': 'Invalid input'
                        },
                        w = Math.floor,
                        x = String.fromCharCode;

                    function y(z) {
                        throw new RangeError(v[z]);
                    }

                    function z(A, B) {
                        for (var C = A.length, D = []; C--;)
                            D[C] = B(A[C]);
                        return D;
                    }

                    function A(B, C) {
                        var D = B.split('@'),
                            E = '';
                        return D.length > 1 && (E = D[0] + '@', B = D[1]), E + z((B = B.replace(u, '.')).split('.'), C).join('.');
                    }

                    function B(C) {
                        for (var D, E, F = [], G = 0, H = C.length; G < H;)
                            (D = C.charCodeAt(G++)) >= 55296 && D <= 56319 && G < H ? 56320 == (64512 & (E = C.charCodeAt(G++))) ? F.push(((1023 & D) << 10) + (1023 & E) + 65536) : (F.push(D), G--) : F.push(D);
                        return F;
                    }

                    function C(D) {
                        return z(D, function(E) {
                            var F = '';
                            return E > 65535 && (F += x((E -= 65536) >>> 10 & 1023 | 55296), E = 56320 | 1023 & E), F + x(E);
                        }).join('');
                    }

                    function D(E, F) {
                        return E + 22 + 75 * (E < 26) - ((0 != F) << 5);
                    }

                    function E(F, G, H) {
                        var I = 0;
                        for (F = H ? w(F / 700) : F >> 1, F += w(F / G); F > 455; I += 36)
                            F = w(F / 35);
                        return w(I + 36 * F / (F + 38));
                    }

                    function F(G) {
                        var H, I, J, K, L, M, N, O, P, Q, R, S = [],
                            T = G.length,
                            U = 0,
                            V = 128,
                            W = 72;
                        for ((I = G.lastIndexOf('-')) < 0 && (I = 0), J = 0; J < I; ++J)
                            G.charCodeAt(J) >= 128 && y('not-basic'), S.push(G.charCodeAt(J));
                        for (K = I > 0 ? I + 1 : 0; K < T;) {
                            for (L = U, M = 1, N = 36; K >= T && y('invalid-input'), ((O = (R = G.charCodeAt(K++)) - 48 < 10 ? R - 22 : R - 65 < 26 ? R - 65 : R - 97 < 26 ? R - 97 : 36) >= 36 || O > w((r - U) / M)) && y('overflow'), U += O * M, !(O < (P = N <= W ? 1 : N >= W + 26 ? 26 : N - W)); N += 36)
                                M > w(r / (Q = 36 - P)) && y('overflow'), M *= Q;
                            W = E(U - L, H = S.length + 1, 0 == L), w(U / H) > r - V && y('overflow'), V += w(U / H), U %= H, S.splice(U++, 0, V);
                        }
                        return C(S);
                    }

                    function G(H) {
                        var I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [];
                        for (T = (H = B(H)).length, I = 128, J = 0, M = 72, N = 0; N < T; ++N)
                            (S = H[N]) < 128 && X.push(x(S));
                        for (K = L = X.length, L && X.push('-'); K < T;) {
                            for (O = r, N = 0; N < T; ++N)
                                (S = H[N]) >= I && S < O && (O = S);
                            for (O - I > w((r - J) / (U = K + 1)) && y('overflow'), J += (O - I) * U, I = O, N = 0; N < T; ++N)
                                if ((S = H[N]) < I && ++J > r && y('overflow'), S == I) {
                                    for (P = J, Q = 36; !(P < (R = Q <= M ? 1 : Q >= M + 26 ? 26 : Q - M)); Q += 36)
                                        W = P - R, V = 36 - R, X.push(x(D(R + W % V, 0))), P = w(W / V);
                                    X.push(x(D(P, 0))), M = E(J, U, K == L), J = 0, ++K;
                                }
                                ++ J, ++I;
                        }
                        return X.join('');
                    }
                    if (p = {
                            version: '1.4.1',
                            ucs2: {
                                decode: B,
                                encode: C
                            },
                            decode: F,
                            encode: G,
                            toASCII: function(H) {
                                return A(H, function(I) {
                                    return t.test(I) ? 'xn--' + G(I) : I;
                                });
                            },
                            toUnicode: function(H) {
                                return A(H, function(I) {
                                    return s.test(I) ? F(I.slice(4).toLowerCase()) : I;
                                });
                            }
                        }, 'object' == k(g(0)) && g(0))
                        void 0 === (j = function() {
                            return p;
                        }.call(f, g, f, h)) || (h.exports = j);
                    else if (m && n)
                        if (h.exports == m)
                            n.exports = p;
                        else
                            for (q in p)
                                p.hasOwnProperty(q) && (m[q] = p[q]);
                    else
                        l.punycode = p;
                }(this);
            }.call(this, g(7)(e), g(8)));
        },
        function(e, f) {
            e.exports = function(g) {
                return g.webpackPolyfill || (g.deprecate = function() {}, g.paths = [], g.children || (g.children = []), Object.defineProperty(g, 'loaded', {
                    enumerable: !0,
                    get: function() {
                        return g.l;
                    }
                }), Object.defineProperty(g, 'id', {
                    enumerable: !0,
                    get: function() {
                        return g.i;
                    }
                }), g.webpackPolyfill = 1), g;
            };
        },
        function(e, f) {
            function g(h) {
                return (g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(i) {
                    return typeof i;
                } : function(i) {
                    return i && 'function' == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? 'symbol' : typeof i;
                })(h);
            }
            var h;
            h = function() {
                return this;
            }();
            try {
                h = h || new Function('return this')();
            } catch (e) {
                'object' === ('undefined' == typeof window ? 'undefined' : g(window)) && (h = window);
            }
            e.exports = h;
        }
    ]);
}), b.register('kyWmB', function(c, d) {
    a(c.exports, 'default', function() {
        return _i;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('QZ0Z+'),
        g = b('Eh2Wh'),
        h = b('8KqQ+');
    var _i = a => (0, e.jsx)(f.default, {
        hoverable: !0,
        style: {
            marginBottom: 10
        },
        onClick: a.onSelect,
        children: (0, e.jsxs)('div', {
            style: {
                fontFamily: g.Fonts.SFPro,
                color: h.default.Black
            },
            children: [
                (0, e.jsx)('div', {
                    style: {
                        fontSize: 18,
                        fontWeight: g.FontWeights.Bold
                    },
                    children: a.name
                }),
                (0, e.jsx)('div', {
                    style: {
                        fontSize: 14
                    },
                    children: a.description
                })
            ]
        })
    });
}), b.register('pJh2q0', function(c, d) {
    a(c.exports, 'optionsForAreaOfExpertise', function() {
        return _o;
    }), a(c.exports, 'default', function() {
        return _q;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('Sggd91'),
        h = b('VNuyu'),
        i = b('u8Dt8'),
        j = b('qfXCk3'),
        k = b('UmTL74'),
        l = b('zB1Rq4'),
        m = b('rWa5o1'),
        n = b('nKuOQ');
    const _o = [
            'STEM',
            'Arts',
            'Communications',
            'Computer Science',
            'Counselor',
            'Deaf Education',
            'World Languages',
            'Speech and Language',
            'English/Language Arts',
            'American Sign Language',
            'Science',
            'Special Education',
            'Gifted and Talented',
            'Technology',
            'Engineering',
            'Math',
            'History and Social Studies',
            'Health/Physical Education',
            'English Language Learner (ELL)',
            'Family & Consumer Science (FACS)',
            'Homeschool',
            'School Administrator',
            'Librarian',
            'Technology/Instructional Coach',
            'Other'
        ].sort(),
        p = [
            'Pre-K',
            'Elementary School',
            'Middle School',
            'High School',
            'Post High School',
            'Other School',
            'Not Using For School',
            'Other'
        ];
    var _q = () => {
        const {
            login: r
        } = f.useContext(k.default), [s, t] = f.useState(''), [u, v] = f.useState(''), w = !s || !u;
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(g.Title, {
                    children: '\uD83D\uDCA1 Area of Expertise'
                }),
                (0, e.jsx)(i.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: r => t(r),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: _o.map(r => ({
                        value: r,
                        label: r
                    }))
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, e.jsx)(g.Title, {
                    children: '\uD83C\uDF82 Grade Level'
                }),
                (0, e.jsx)(i.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: r => v(r),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: p.map(r => ({
                        value: r,
                        label: r
                    }))
                }),
                (0, e.jsx)(j.default, {
                    size: 'large',
                    style: {
                        marginTop: 10
                    },
                    disabled: w,
                    onClick: () => {
                        w || (r.areaOfExpertise = s, r.gradeLevel = u, r.informationNeeded.replace(r.informationNeeded.filter(r => r !== l.informationTypes.areaOfExpertise && r !== l.informationTypes.gradeLevel)));
                    },
                    children: 'Continue'
                }),
                (0, e.jsx)(h.default, {}),
                (0, e.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        'By continuing, you agree to our',
                        ' ',
                        (0, e.jsx)('a', {
                            href: n.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        'and',
                        ' ',
                        (0, e.jsx)('a', {
                            href: n.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        '.'
                    ]
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 25
                    }
                }),
                (0, e.jsx)(m.default, {
                    link: 'https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52'
                })
            ]
        });
    };
}), b.register('bGZAj', function(c, d) {
    a(c.exports, 'default', function() {
        return _o;
    });
    var e = b('Wf/oP4'),
        f = b('quE27'),
        g = b('lptuh'),
        h = b('nKuOQ'),
        i = b('AE7vR'),
        j = b('zB1Rq4'),
        k = b('ERlVg'),
        l = b('JkQCT'),
        m = b('KxkP827'),
        n = b('YSGx+');
    var _o = () => {
        const {
            login: p,
            navigation: q
        } = e.default, r = 'true' === (0, f.getUrlVariable)('blockRedirect'), s = () => {
            window && window.parent && window.parent.postMessage && window.parent.postMessage({
                type: '_authenticated_',
                user: (0, l.toJS)((0, f.getUser)())
            }, n.inProductionOrStaging ? (0, f.getDomain)() : '*');
        };
        if (p.userExists) {
            const t = () => {
                const u = {
                    email: p.email,
                    password: p.password,
                    googleToken: p.googleToken
                };
                q.loggingIn = !0, (0, f.request)({
                    url: '/api/login',
                    method: 'post',
                    data: u,
                    success: q => {
                        if (k.default.user.setUser(q.user, !0), p.authenticated = !0, q.modal && q.modal.type && i.default[q.modal.type]({
                                title: 'Account Information',
                                content: q.modal.message
                            }), q.informationNeeded.length)
                            p.informationNeeded.replace([
                                ...p.informationNeeded,
                                ...q.informationNeeded
                            ]);
                        else {
                            let v = e.default.navigation.redirectUri;
                            v || (v = h.DASHBOARD), v.includes('logout') && (v = h.DASHBOARD), r ? s() : (0, m.NavigateTo)(v);
                        }
                    },
                    error: p => {
                        e.default.navigation.loginError = p, e.default.login.password ? e.default.login.informationNeeded.replace([
                            ...e.default.login.informationNeeded,
                            j.informationTypes.password
                        ]) : e.default.login.informationNeeded.replace([
                            ...e.default.login.informationNeeded,
                            j.informationTypes.email
                        ]);
                    },
                    both: () => e.default.navigation.loggingIn = !1
                });
            };
            if (p.authenticated) {
                const u = (() => {
                    const {
                        login: v
                    } = e.default, w = Object.keys(v), x = [];
                    return w.forEach(w => {
                        const y = v[w];
                        '' !== y && null != y && ('accountType' === w && x.push({
                            key: j.informationTypes.accountType,
                            value: y
                        }), 'firstName' === w && x.push({
                            key: j.informationTypes.firstName,
                            value: y
                        }), 'lastName' === w && x.push({
                            key: j.informationTypes.lastName,
                            value: y
                        }), 'schoolId' === w && x.push({
                            key: j.informationTypes.schoolId,
                            value: y
                        }), 'districtId' === w && x.push({
                            key: j.informationTypes.districtId,
                            value: y
                        }), 'country' === w && x.push({
                            key: j.informationTypes.country,
                            value: y
                        }), 'areaOfExpertise' === w && x.push({
                            key: j.informationTypes.areaOfExpertise,
                            value: y
                        }), 'gradeLevel' === w && x.push({
                            key: j.informationTypes.gradeLevel,
                            value: y
                        }), 'acceptsLatestPolicies' === w && x.push({
                            key: j.informationTypes.acceptedLatestPolicies,
                            value: y
                        }), 'organization' === w && x.push({
                            key: j.informationTypes.organization,
                            value: y
                        }));
                    }), x;
                })();
                u && u.length ? (e.default.navigation.updatingAccountInformation = !0, (0, f.request)({
                    url: '/api/users/update-information',
                    method: 'post',
                    data: {
                        changes: u
                    },
                    success: () => {
                        t();
                    },
                    error: () => {
                        e.default.navigation.updatingAccountInformation = !1, (0, g.throwError)({
                            title: 'Error updating account information',
                            content: 'Please contact support.'
                        });
                    }
                })) : t();
            } else
                t();
        } else {
            const t = {
                firstName: p.firstName,
                lastName: p.lastName,
                email: p.email,
                googleToken: p.googleToken,
                password: p.password,
                accountType: p.accountType,
                country: p.country,
                schoolId: p.schoolId,
                districtId: p.districtId,
                areaOfExpertise: p.areaOfExpertise,
                organization: p.organization,
                gradeLevel: p.gradeLevel,
                groupJoining: q.classJoiningId
            };
            if (e.default.navigation.creatingAccount)
                return;
            e.default.navigation.creatingAccount = !0, (0, f.request)({
                url: '/api/register',
                method: 'post',
                data: t,
                success: p => {
                    sessionStorage.setItem('NEW_USER', 'YES'), k.default.user.setUser(p, !0);
                    let u = e.default.navigation.redirectUri;
                    u || (u = h.DASHBOARD), r ? s() : (0, m.NavigateTo)(u);
                },
                error: p => {
                    (0, f.throwMessageError)({
                        e: p,
                        default: {
                            title: 'Error creating account',
                            content: 'Please try again later'
                        },
                        onOk: () => window.location.reload()
                    });
                },
                both: () => e.default.navigation.creatingAccount = !1
            });
        }
    };
}), b.register('KxkP827', function(c, d) {
    a(c.exports, 'NavigateTo', function() {
        return _f;
    });
    var e = b('qb3Ih');
    const _f = a => {
        e.history.push(a);
    };
}), b.register('JQ25h', function(c, d) {
    a(c.exports, 'default', function() {
        return _n;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('6jmvl'),
        h = b('UmTL74'),
        i = b('zB1Rq4'),
        j = b('8KqQ+'),
        k = b('Eh2Wh'),
        l = b('qfXCk3'),
        m = b('nKuOQ');
    var _n = (0, g.observer)(() => {
        const {
            login: o
        } = f.useContext(h.default);
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsxs)('div', {
                    style: {
                        color: j.default.Black,
                        fontWeight: k.FontWeights.Normal,
                        fontSize: 19
                    },
                    children: [
                        'We\'ve updated our',
                        ' ',
                        (0, e.jsx)('a', {
                            href: m.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        ' ',
                        '&',
                        ' ',
                        (0, e.jsx)('a', {
                            href: m.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        '.'
                    ]
                }),
                (0, e.jsx)(l.default, {
                    style: {
                        marginTop: 5
                    },
                    size: 'large',
                    onClick: () => {
                        o.acceptsLatestPolicies = !0, o.informationNeeded.replace(o.informationNeeded.filter(o => o !== i.informationTypes.acceptedLatestPolicies));
                    },
                    children: 'I Agree'
                })
            ]
        });
    });
}), b.register('/UOkt', function(c, d) {
    a(c.exports, 'default', function() {
        return _m;
    });
    var e = b('gRbUn'),
        f = b('O0Kav'),
        g = b('Sggd91'),
        h = b('aevdF'),
        i = b('qfXCk3'),
        j = b('UmTL74'),
        k = b('zB1Rq4'),
        l = b('rWa5o1');
    var _m = () => {
        const [n, o] = f.useState(''), {
            login: p
        } = f.useContext(j.default), q = () => {
            p.organization = n, p.informationNeeded.replace(p.informationNeeded.filter(n => n !== k.informationTypes.organization));
        };
        return (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(g.Title, {
                    children: 'Organization (optional)'
                }),
                (0, e.jsx)(h.default, {
                    size: 'large',
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Gimkit Productions...',
                    onChange: n => {
                        o(n.target.value);
                    },
                    onPressEnter: q,
                    autoFocus: !0
                }),
                (0, e.jsx)(i.default, {
                    onClick: q,
                    style: {
                        marginTop: 5,
                        width: '100%'
                    },
                    children: 'Continue'
                }),
                (0, e.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, e.jsx)(l.default, {
                    link: 'https://www.notion.so/gimkit/Organization-0931f4ca9b48423c97663801d8b95387'
                })
            ]
        });
    };
}), b.register('2NZ+5', function(c, d) {
    a(c.exports, 'IsURLFromUs', function() {
        return _e;
    });
    const _e = a => a.startsWith(window.location.origin) || a.startsWith('/');
}), b.register('e5xHg25', function(c, d) {
    a(c.exports, 'default', function() {
        return _h;
    });
    var e = b('MsxQz'),
        f = b('O0Kav'),
        g = b('R2nG3');

    function _h(i, j, k) {
        return function(l) {
            const {
                prefixCls: m,
                style: n
            } = l, o = f.useRef(null), [p, q] = f.useState(0), [r, s] = f.useState(0), [t, u] = (0, e.default)(!1, {
                value: l.open
            }), {
                getPrefixCls: v
            } = f.useContext(g.ConfigContext), w = v(j || 'select', m);
            return f.useEffect(() => {
                if (u(!0), 'undefined' != typeof ResizeObserver) {
                    const x = new ResizeObserver(x => {
                            const y = x[0].target;
                            q(y.offsetHeight + 8), s(y.offsetWidth);
                        }),
                        y = setInterval(() => {
                            var z;
                            const A = k ? `.${ k(w) }` : `.${ w }-dropdown`,
                                B = null === (z = o.current) || void 0 === z ? void 0 : z.querySelector(A);
                            B && (clearInterval(y), x.observe(B));
                        }, 10);
                    return () => {
                        clearInterval(y), x.disconnect();
                    };
                }
            }, []), f.createElement(g.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, f.createElement('div', {
                ref: o,
                style: {
                    paddingBottom: p,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: r
                }
            }, f.createElement(i, Object.assign({}, l, {
                style: Object.assign(Object.assign({}, n), {
                    margin: 0
                }),
                open: t,
                visible: t,
                getPopupContainer: () => o.current
            }))));
        };
    }
}), b.register('kufQf25', function(c, d) {
    a(c.exports, 'initMoveMotion', function() {
        return _n;
    });
    var e = b('ZyWBF'),
        f = b('6vEai');
    const g = new(0, e.Keyframes)('antMoveDownIn', {
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
        }),
        h = new(0, e.Keyframes)('antMoveDownOut', {
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
        }),
        i = new(0, e.Keyframes)('antMoveLeftIn', {
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
        }),
        j = new(0, e.Keyframes)('antMoveLeftOut', {
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
        }),
        k = new(0, e.Keyframes)('antMoveRightIn', {
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
        }),
        l = new(0, e.Keyframes)('antMoveRightOut', {
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
        }),
        m = {
            'move-up': {
                inKeyframes: new(0, e.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, e.Keyframes)('antMoveUpOut', {
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
                inKeyframes: g,
                outKeyframes: h
            },
            'move-left': {
                inKeyframes: i,
                outKeyframes: j
            },
            'move-right': {
                inKeyframes: k,
                outKeyframes: l
            }
        },
        _n = (a, b) => {
            const {
                antCls: o
            } = a, p = `${ o }-${ b }`, {
                inKeyframes: q,
                outKeyframes: r
            } = m[b];
            return [
                (0, f.initMotion)(p, q, r, a.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: a.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: a.motionEaseInOutCirc
                    }
                }
            ];
        };
}), b.register('BA14D', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('+iTmi'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'CheckOutlined';
    var _j = f.forwardRef(i);
}), b.register('+iTmi', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
                }
            }]
        },
        name: 'check',
        theme: 'outlined'
    };
}), b.register('OQRaD', function(c, d) {
    a(c.exports, 'default', function() {
        return _j;
    });
    var e = b('5cnOa'),
        f = b('O0Kav'),
        g = b('tWyJZ'),
        h = b('VZTwv'),
        i = function(j, k) {
            return f.createElement(h.default, (0, e.default)((0, e.default)({}, j), {}, {
                ref: k,
                icon: g.default
            }));
        };
    i.displayName = 'DownOutlined';
    var _j = f.forwardRef(i);
}), b.register('tWyJZ', function(c, d) {
    a(c.exports, 'default', function() {
        return _e;
    });
    var _e = {
        icon: {
            tag: 'svg',
            attrs: {
                viewBox: '64 64 896 896',
                focusable: 'false'
            },
            children: [{
                tag: 'path',
                attrs: {
                    d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
                }
            }]
        },
        name: 'down',
        theme: 'outlined'
    };
}), b.register('AvOwZ2', function(c, d) {
    a(c.exports, 'default', function() {
        return _g;
    });
    var e = b('gRbUn');
    b('O0Kav');
    var f = b('qMSe6');
    var _g = a => a.error ? (0, e.jsx)(f.default, {
        message: 'Error',
        style: a.style,
        type: 'error',
        description: a.error && a.error.message && a.error.message.text ? a.error.message.text : 'string' == typeof a.error ? a.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
});