function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('6A2Pt', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _s(b.exports, 'default', function() {
        return _r;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('NmrDs1'),
        h = a('ha/3p1'),
        i = a('Axq+p'),
        j = a('vnNZM'),
        k = a('PMl60'),
        l = a('gs4MT'),
        m = a('e7pFf'),
        n = a('wYGc3'),
        o = a('jzxyj10'),
        p = a('cSE7h0');
    let q;
    var _r = () => {
        const [_s, t] = f.useState(!1), u = (0, n.useLocation)(), v = new URLSearchParams(u.search).get('accountType'), w = (0, k.getUrlVariable)('class');
        return v && m.default[v] && (h.default.login.accountType = m.default[v]), f.useEffect(() => {
            h.default.navigation.redirectUri = '';
            let x = (0, k.getUrlVariable)('location') ? decodeURIComponent((0, k.getUrlVariable)('location')) : '';
            x && !(0, p.IsURLFromUs)(x) && (x = '');
            const y = () => {
                h.default.navigation.reset(), h.default.login.reset();
            };
            return x && (h.default.navigation.redirectUri = x), (0, k.isLoggedIn)() ? ((0, o.NavigateTo)(x || l.DASHBOARD), y) : (window.location.href.includes('login') && t(!0), y);
        }, []), (0, e.jsxs)(e.Fragment, {
            children: [
                (0, e.jsx)(k.Title, {
                    title: w ? 'Join Class' : _s ? 'Login' : 'Sign Up'
                }),
                (0, e.jsx)(g.default.Provider, {
                    value: h.default,
                    children: (0, e.jsx)(_s, {
                        children: (0, e.jsx)(j.default, {})
                    })
                })
            ]
        });
    };
    const _s = i.default.div(q || (q = (_C => _C)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
}), a.register('NmrDs1', function(b, c) {
    _C(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('ha/3p1');
    var _f = d.createContext(e.default);
}), a.register('ha/3p1', function(b, c) {
    _C(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Hi0/F0'),
        e = a('5ka2e1');
    var _f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), a.register('Hi0/F0', function(b, c) {
    _C(b.exports, 'informationTypes', function() {
        return _f;
    }), _C(b.exports, 'default', function() {
        return _x;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const _f = {
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
        g = {
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
            userExists: h,
            email: i,
            accountType: j,
            googleToken: k,
            firstName: l,
            lastName: m,
            password: n,
            schoolId: o,
            districtId: p,
            country: q,
            areaOfExpertise: r,
            gradeLevel: s,
            organization: t,
            acceptsLatestPolicies: u,
            authenticated: v
        } = g;
    class w {
        constructor() {
            this.userExists = h, this.email = i, this.accountType = j, this.googleToken = k, this.firstName = l, this.lastName = m, this.password = n, this.schoolId = o, this.districtId = p, this.country = q, this.areaOfExpertise = r, this.gradeLevel = s, this.organization = t, this.acceptsLatestPolicies = u, this.authenticated = v, this.informationNeeded = e.observable.array([_f.email]), this.reset = () => {
                Object.keys(g).forEach(_C => this[_C] = g[_C]), this.informationNeeded.replace([_f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], w.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], w.prototype, 'email', void 0), (0, d.__decorate)([e.observable], w.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], w.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], w.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'password', void 0), (0, d.__decorate)([e.observable], w.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'country', void 0), (0, d.__decorate)([e.observable], w.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], w.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], w.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], w.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], w.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], w.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], w.prototype, 'reset', void 0);
    var _x = w;
}), a.register('5ka2e1', function(b, c) {
    _C(b.exports, 'default', function() {
        return _r;
    });
    var d = a('csYze'),
        e = a('YuT/D');
    const f = {
            currentStage: a('AUbBm1').default.email,
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
            currentStage: g,
            emailSignInBlocked: h,
            creatingAccount: i,
            loggingIn: j,
            updatingAccountInformation: k,
            loginError: l,
            redirectUri: m,
            classJoiningId: n,
            classJoiningName: o,
            classJoiningTeacherName: p
        } = f;
    class q {
        constructor() {
            this.currentStage = g, this.emailSignInBlocked = h, this.creatingAccount = i, this.loggingIn = j, this.updatingAccountInformation = k, this.loginError = l, this.redirectUri = m, this.classJoiningId = n, this.classJoiningName = o, this.classJoiningTeacherName = p, this.reset = () => {
                Object.keys(f).forEach(_C => this[_C] = f[_C]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], q.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], q.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], q.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], q.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], q.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], q.prototype, 'reset', void 0);
    var _r = q;
}), a.register('AUbBm1', function(b, c) {
    let d;
    var e;
    _C(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var _f = d;
}), a.register('vnNZM', function(b, c) {
    _C(b.exports, 'default', function() {
        return _B;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('Axq+p'),
        h = a('sHRDd'),
        i = a('vbDBN'),
        j = a('ZbTL0'),
        k = a('AUbBm1'),
        l = a('Jhh4y'),
        m = a('pqu/v'),
        n = a('B30C9'),
        o = a('d1g2b2'),
        p = a('BfHOL'),
        q = a('ZBY0K1'),
        r = a('NmrDs1'),
        s = a('Xbj5y'),
        t = a('6CIVV'),
        u = a('b5kvC'),
        v = a('JSLjT'),
        w = a('PMl60'),
        x = a('Ax1l3'),
        y = a('dq4zH'),
        z = a('jzxyj10');
    let A;
    var _B = (0, f.observer)(() => {
        const {
            login: _C,
            navigation: D
        } = e.useContext(r.default), {
            currentStage: E
        } = (0, i.default)(), [F, G] = e.useState(!0), [H, I] = e.useState(!1);
        e.useEffect(() => {
            _C.informationNeeded.length || (0, s.default)();
        }, [_C.informationNeeded.length]), e.useEffect(() => {
            (0, w.getUrlVariable)('pwr') && I(!0);
            const J = (0, w.getUrlVariable)('class');
            J ? (0, w.request)({
                url: `/api/v1/groups/details/${ J }`,
                success: F => {
                    D.classJoiningId = J, D.classJoiningName = F.groupName, D.classJoiningTeacherName = F.teacherName, _C.accountType = y.default.student, D.redirectUri || (D.redirectUri = `/class/join/${ J }`), G(!1);
                },
                error: () => (0, z.NavigateTo)('/')
            }) : G(!1);
        }, []);
        return F ? (0, d.jsx)(_C, {}) : (0, d.jsxs)(_C, {
            children: [
                (0, d.jsx)(j.default, {
                    message: E === k.default.email && H ? 'Password changed successfully!' : ''
                }),
                (() => {
                    if (D.creatingAccount || D.loggingIn && !_C.informationNeeded.length || D.updatingAccountInformation && !_C.informationNeeded.length) {
                        const J = _C.accountType === y.default.student;
                        return (0, d.jsxs)('div', {
                            className: 'flex hc vc maxWidth flex-column',
                            children: [
                                (0, d.jsx)(t.default, {
                                    size: 'large'
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        marginTop: 5,
                                        fontWeight: u.FontWeights.Bold,
                                        color: h.default.Black,
                                        fontSize: 23
                                    },
                                    children: D.updatingAccountInformation || D.loggingIn ? D.classJoiningName ? 'Just a second...' : 'Logging you in...' : J ? 'Just a second....' : 'Creating your account...'
                                })
                            ]
                        });
                    }
                    return E === k.default.email ? (0, d.jsx)(l.default, {}) : E === k.default.password ? (0, d.jsx)(m.default, {}) : E === k.default.accountType ? (0, d.jsx)(n.default, {}) : E === k.default.nameAndPassword ? (0, d.jsx)(o.default, {}) : E === k.default.school ? (0, d.jsx)(p.default, {}) : E === k.default.educatorSpecificInfo ? (0, d.jsx)(q.default, {}) : E === k.default.acceptPolicies ? (0, d.jsx)(v.default, {}) : E === k.default.nonSchoolSpecificInfo ? (0, d.jsx)(x.default, {}) : null;
                })()
            ]
        });
    });
    const _C = g.default.div.attrs({
        className: 'scroll-y'
    })(A || (A = (_h => _h)`
  width: 90%;
  max-width: 520px;
  padding: 20px;
  background: ${ 0 };
  border-radius: 7px;
  max-height: 90vh;
`), h.default.White);
}), a.register('vbDBN', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('AUbBm1'),
        e = a('ha/3p1'),
        f = a('Hi0/F0');
    var _g = () => {
        const {
            informationNeeded: _h
        } = e.default.login, i = (_h => _h.includes(f.informationTypes.email) ? d.default.email : _h.includes(f.informationTypes.password) ? d.default.password : _h.includes(f.informationTypes.acceptedLatestPolicies) ? d.default.acceptPolicies : _h.includes(f.informationTypes.accountType) ? d.default.accountType : _h.includes(f.informationTypes.accountPassword) || _h.includes(f.informationTypes.firstName) || _h.includes(f.informationTypes.lastName) ? d.default.nameAndPassword : _h.includes(f.informationTypes.country) ? d.default.school : _h.includes(f.informationTypes.areaOfExpertise) || _h.includes(f.informationTypes.gradeLevel) ? d.default.educatorSpecificInfo : _h.includes(f.informationTypes.organization) ? d.default.nonSchoolSpecificInfo : null)(_h);
        return {
            currentStage: i
        };
    };
}), a.register('ZbTL0', function(b, c) {
    _p(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('NIZyA'),
        h = a('fmVdR'),
        i = a('wYGc3'),
        j = a('2x11J'),
        k = a('NmrDs1'),
        l = a('sHRDd'),
        m = a('b5kvC');
    let n, o, p, q, r = _p => _p;
    var _s = (0, j.observer)(_p => {
        const {
            navigation: t
        } = e.useContext(k.default), u = !!t.classJoiningName, v = u ? '/client/img/gimkitGIcon.svg' : '/client/img/svgLogo.svg', w = u ? 55 : 42;
        return (0, d.jsxs)(_t, {
            children: [
                _p.message && (0, d.jsx)(g.default, {
                    style: {
                        marginBottom: 5
                    },
                    message: _p.message,
                    type: 'success',
                    showIcon: !0
                }),
                (0, d.jsx)(i.Link, {
                    to: '/',
                    children: (0, d.jsx)(_u, {
                        style: {
                            height: w,
                            marginBottom: u ? 5 : 0
                        },
                        src: v
                    })
                }),
                t.classJoiningName ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(_v, {
                            children: t.classJoiningName
                        }),
                        (0, d.jsx)(_w, {
                            children: t.classJoiningTeacherName
                        })
                    ]
                }) : null,
                (0, d.jsx)(h.default, {})
            ]
        });
    });
    const _t = f.default.div(n || (n = r`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`)),
        _u = f.default.img(o || (o = r`
  margin-top: 11px;
`)),
        _v = f.default.div(p || (p = r`
  color: ${ 0 };
  font-size: 28px;
  font-weight: ${ 0 };
`), l.default.Black, m.FontWeights.Bold),
        _w = f.default.div(q || (q = r`
  color: rgba(0, 0, 0, 0.9);
  font-size: 15px;
`));
}), a.register('pqu/v', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('b5kvC'),
        g = a('fmVdR'),
        h = a('ewwAh'),
        i = a('sHRDd'),
        j = a('pYmyT1'),
        k = a('iwgXa'),
        l = a('h8z+4'),
        m = a('NmrDs1'),
        n = a('Hi0/F0');
    var _o = (0, a('2x11J').observer)(() => {
        const {
            login: _p,
            navigation: q
        } = e.useContext(m.default), [r, s] = e.useState(''), [t, u] = e.useState(!1), v = !r, w = () => {
            v || q.loggingIn || (_p.password = r, _p.informationNeeded.replace(_p.informationNeeded.filter(_p => _p !== n.informationTypes.password)));
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontWeight: f.FontWeights.Black,
                        fontSize: 24,
                        color: i.default.Black
                    },
                    children: 'Enter your password'
                }),
                (0, d.jsx)(h.default.Password, {
                    placeholder: 'Password',
                    size: 'large',
                    style: {
                        height: 40
                    },
                    autoFocus: !0,
                    onPressEnter: w,
                    onChange: _p => {
                        q.loginError = null, s(_p.target.value);
                    }
                }),
                (0, d.jsx)(j.default, {
                    onClick: w,
                    disabled: v,
                    style: {
                        width: '100%',
                        marginTop: 5
                    },
                    loading: q.loggingIn,
                    children: 'Login'
                }),
                (0, d.jsx)(l.default, {}),
                (0, d.jsx)(g.default, {}),
                (0, d.jsx)('div', {
                    onClick: () => u(!0),
                    style: {
                        cursor: 'pointer',
                        fontSize: 12
                    },
                    children: 'Forgot password?'
                }),
                (0, d.jsx)(k.default, {
                    open: t,
                    close: () => u(!1),
                    defaultEmail: _p.email
                })
            ]
        });
    });
}), a.register('pYmyT1', function(b, c) {
    _u(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2x11J'),
        f = a('ulE4q');
    var _g = (0, e.observer)(_u => (0, d.jsx)(f.default, {
        disabled: _u.disabled,
        size: _u.size || 'middle',
        type: 'primary',
        onClick: _u.onClick,
        style: Object.assign({
            width: '100%'
        }, _u.style),
        loading: _u.loading,
        children: _u.children
    }));
}), a.register('B30C9', function(b, c) {
    _u(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('b5kvC'),
        h = a('sHRDd'),
        i = a('Axq+p'),
        j = a('NmrDs1'),
        k = a('dq4zH'),
        l = a('Hi0/F0'),
        m = a('ulE4q'),
        n = a('GT7Vh'),
        o = a('gs4MT');
    let p, q, r = _u => _u;
    const s = _u => (0, d.jsx)(_v, {
        backgroundColor: _u.background,
        onClick: _u.handleSelect,
        children: _u.children
    });
    var _t = (0, f.observer)(() => {
        const [_u, v] = e.useState(!0), {
            login: w
        } = e.useContext(j.default), x = () => w.informationNeeded.replace(w.informationNeeded.filter(_u => _u !== l.informationTypes.accountType)), y = () => w.googleToken || w.userExists ? [] : [
            l.informationTypes.firstName,
            l.informationTypes.lastName,
            l.informationTypes.accountPassword
        ], z = () => {
            w.accountType = k.default.educator, w.informationNeeded.replace([
                ...w.informationNeeded,
                ...y(),
                l.informationTypes.country,
                l.informationTypes.areaOfExpertise,
                l.informationTypes.gradeLevel
            ]), x();
        }, A = _u => {
            w.accountType = k.default.student, w.informationNeeded.replace([
                ...w.informationNeeded,
                ...y()
            ]), x();
        };
        if (w.accountType)
            switch (w.accountType) {
                case k.default.educator:
                    z();
                    break;
                case k.default.guardian:
                    w.accountType = k.default.guardian, w.informationNeeded.replace([
                        ...w.informationNeeded,
                        ...y()
                    ]), x();
                    break;
                case k.default.nonSchool:
                    w.accountType = k.default.nonSchool, w.informationNeeded.replace([
                        ...w.informationNeeded,
                        ...y(),
                        l.informationTypes.organization
                    ]), x();
                    break;
                case k.default.student:
                    A();
            }
        return _u ? (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontWeight: g.FontWeights.Black,
                        fontSize: 29,
                        color: h.default.Black,
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: 8
                    },
                    children: 'Select your account type...'
                }),
                (0, d.jsxs)(_u, {
                    children: [
                        (0, d.jsxs)(s, {
                            handleSelect: z,
                            background: '#33691e',
                            children: [
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)('i', {
                                        className: 'fas fa-chalkboard-teacher'
                                    })
                                }),
                                'Educator'
                            ]
                        }),
                        (0, d.jsxs)(s, {
                            handleSelect: () => v(!1),
                            background: '#9E5F28',
                            children: [
                                (0, d.jsx)('div', {
                                    children: (0, d.jsx)('i', {
                                        className: 'fas fa-user'
                                    })
                                }),
                                'Student'
                            ]
                        })
                    ]
                })
            ]
        }) : (0, d.jsxs)('div', {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        fontSize: 18,
                        color: h.default.Black,
                        marginBottom: 20,
                        fontWeight: g.FontWeights.Bold
                    },
                    children: [
                        'I am at least 13 years of age (or 16+ outside the US) and agree to Gimkit\'s',
                        ' ',
                        (0, d.jsx)('a', {
                            href: o.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        '&',
                        ' ',
                        (0, d.jsx)('a', {
                            href: o.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms of Service'
                        }),
                        '.'
                    ]
                }),
                (0, d.jsx)(m.default, {
                    onClick: () => A(),
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
    const _u = i.default.div(p || (p = r`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`)),
        _v = i.default.div.attrs({
            className: 'flex-center flex-column light-shadow'
        })(q || (q = r`
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
`), g.FontWeights.Bold, h.default.White, _t => _t.backgroundColor, _t => (0, n.lighten)(0.1, _t.backgroundColor));
}), a.register('dq4zH', function(b, c) {
    let d;
    var e;
    _t(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).educator = 'educator', e.student = 'student', e.guardian = 'guardian', e.nonSchool = 'nonSchool';
    var _f = d;
}), a.register('d1g2b2', function(b, c) {
    _t(b.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return _o;
    }), _t(b.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return _p;
    }), _t(b.exports, 'Title', function() {
        return _q;
    }), _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('NmrDs1'),
        g = a('b5kvC'),
        h = a('sHRDd'),
        i = a('fmVdR'),
        j = a('ewwAh'),
        k = a('pYmyT1'),
        l = a('Hi0/F0'),
        m = a('XQD071'),
        n = a('dq4zH');
    const _o = 20,
        _p = 25,
        _q = _t => (0, d.jsx)('div', {
            style: {
                fontFamily: g.Fonts.SFPro,
                fontWeight: g.FontWeights.Bold,
                color: h.default.Black,
                fontSize: 18
            },
            children: _t.children
        }),
        r = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var _s = () => {
        const {
            login: _t
        } = e.useContext(f.default), [u, v] = e.useState(_t.firstName), [w, x] = e.useState(_t.lastName), [y, z] = e.useState(_t.password), A = () => {
            let B = !0;
            return _t.informationNeeded.includes(l.informationTypes.firstName) && (u || (B = !1)), _t.informationNeeded.includes(l.informationTypes.lastName) && (w || (B = !1)), _t.informationNeeded.includes(l.informationTypes.accountPassword) && (!y || y.length < 6) && (B = !1), B;
        }, B = () => {
            A() && (u && (_t.firstName = u), w && (_t.lastName = w), y && (_t.password = y), _t.informationNeeded.replace(_t.informationNeeded.filter(_t => _t !== l.informationTypes.firstName && _t !== l.informationTypes.lastName && _t !== l.informationTypes.accountPassword)));
        }, C = _t.accountType === n.default.student;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(_q, {
                    children: 'First Name'
                }),
                (0, d.jsx)(j.default, {
                    maxLength: _o,
                    style: r,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: _t => v(_t.target.value),
                    onPressEnter: B,
                    autoFocus: !0
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsxs)(_q, {
                    children: [
                        'Last ',
                        C ? 'Initial' : 'Name'
                    ]
                }),
                (0, d.jsx)(j.default, {
                    maxLength: C ? 1 : _p,
                    style: r,
                    size: 'large',
                    placeholder: `Last ${ C ? 'Initial' : 'Name' } here...`,
                    onChange: _t => x(_t.target.value),
                    onPressEnter: B
                }),
                _t.informationNeeded.includes(l.informationTypes.accountPassword) && (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(i.default, {}),
                        (0, d.jsx)(_q, {
                            children: 'Password'
                        }),
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 12,
                                marginTop: -5,
                                marginBottom: 4
                            },
                            children: 'Must contain at least 6 characters'
                        }),
                        (0, d.jsx)(j.default.Password, {
                            style: r,
                            onChange: _t => z(_t.target.value),
                            placeholder: 'Password here...',
                            size: 'large',
                            maxLength: 96,
                            onPressEnter: B
                        })
                    ]
                }),
                (0, d.jsx)(i.default, {}),
                (0, d.jsx)(k.default, {
                    disabled: !A(),
                    onClick: B,
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                !C && (0, d.jsx)(m.default, {
                    link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061'
                })
            ]
        });
    };
}), a.register('XQD071', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('aFzmN2');
    var _f = _i => (0, d.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, d.jsx)('div', {}),
            (0, d.jsx)(e.default, {
                link: _i.link
            })
        ]
    });
}), a.register('aFzmN2', function(b, c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('13V8F2'),
        f = a('ulE4q'),
        g = a('ijg0s');
    var _h = _i => (0, d.jsx)(g.default, {
        title: 'Learn more on why we collect this data',
        children: (0, d.jsx)(f.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, d.jsx)(e.default, {}),
            href: _i.link || '',
            target: '_blank'
        })
    });
}), a.register('13V8F2', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('5uH+S'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LockOutlined';
    var _i = e.forwardRef(h);
}), a.register('5uH+S', function(b, c) {
    _u(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('BfHOL', function(b, c) {
    _u(b.exports, 'default', function() {
        return _t;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ZbPKw'),
        g = a('NIZyA'),
        h = a('fmVdR'),
        i = a('ewwAh'),
        j = a('inwN3'),
        k = a('6CIVV'),
        l = a('d1g2b2'),
        m = a('PMl60'),
        n = a('HHk7T'),
        o = a('b5kvC'),
        p = a('sHRDd'),
        q = a('NmrDs1'),
        r = a('Hi0/F0'),
        s = a('XQD071');
    var _t = () => {
        const {
            login: _u
        } = e.useContext(q.default), [v, w] = e.useState(''), [x, y] = e.useState(!1), [z, A] = e.useState(''), [B, C] = e.useState(!1), [D, E] = e.useState(!1), [F, G] = e.useState([]);
        e.useEffect(() => {
            z && (E(!0), (0, m.request)({
                url: '/api/users/fetch-schools',
                method: 'post',
                data: {
                    zipCode: z
                },
                success: _u => {
                    _u && _u.schoolList && _u.schoolList.length ? (G(_u.schoolList), y(!1)) : _H();
                },
                error: () => _H(),
                both: () => E(!1)
            }));
        }, [z]);
        const _H = w => {
                _u.country = w || v, _u.informationNeeded.replace(_u.informationNeeded.filter(_u => _u !== r.informationTypes.country));
            },
            I = (v, w) => {
                _u.schoolId = v, _u.districtId = w, _H();
            };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                F && F.length && !x ? (0, d.jsx)(d.Fragment, {
                    children: (0, d.jsxs)('div', {
                        style: {
                            color: 'blue',
                            cursor: 'pointer'
                        },
                        onClick: () => {
                            G([]), A(''), y(!0), C(!1);
                        },
                        children: [
                            (0, d.jsx)('i', {
                                className: 'fad fa-long-arrow-left'
                            }),
                            ' Go Back'
                        ]
                    })
                }) : null,
                (0, d.jsx)('div', {
                    style: {
                        fontWeight: o.FontWeights.Black,
                        fontSize: 30,
                        color: p.default.Black,
                        marginBottom: 13
                    },
                    children: '\uD83C\uDFEB Find your school'
                }),
                !F.length && (0, d.jsxs)(d.Fragment, {
                    children: [
                        !x && (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(l.Title, {
                                    children: '\uD83D\uDDFA️ Country'
                                }),
                                (0, d.jsx)(j.default, {
                                    style: {
                                        width: '100%'
                                    },
                                    showSearch: !0,
                                    placeholder: 'Select country...',
                                    onChange: _u => {
                                        w(_u), 'US' !== _u ? _H(_u) : y(!0);
                                    },
                                    filterOption: (_u, v) => v.props.children.toLowerCase().indexOf(_u.toLowerCase()) >= 0,
                                    size: 'large',
                                    children: Object.keys(f.countries).sort(_u => 'US' === _u ? 1 : -1).reverse().map(_u => {
                                        const J = f.countries[_u];
                                        let K = '';
                                        return J.emoji && (K += `${ J.emoji } `), J.name && ('United States' === J.name ? K += 'United States Of America' : K += J.name), (0, d.jsx)(j.default.Option, {
                                            value: _u,
                                            children: K
                                        }, _u);
                                    })
                                })
                            ]
                        }),
                        !D && x && (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsx)(l.Title, {
                                    children: '\uD83C\uDDFA\uD83C\uDDF2 Zip Code of School'
                                }),
                                (0, d.jsx)(i.default, {
                                    onChange: _u => {
                                        const J = _u.target.value;
                                        C(!1), J && 5 === String(J).length && A(J);
                                    },
                                    type: 'number',
                                    placeholder: 'Zip code here...',
                                    maxLength: 5,
                                    size: 'large',
                                    autoFocus: !0
                                }),
                                B && (0, d.jsx)(g.default, {
                                    style: {
                                        marginTop: 10
                                    },
                                    showIcon: !0,
                                    type: 'error',
                                    message: 'Invalid Zip Code',
                                    description: (0, d.jsxs)(d.Fragment, {
                                        children: [
                                            'Try entering another zip code or',
                                            ' ',
                                            (0, d.jsx)('a', {
                                                onClick: () => _H(),
                                                children: 'skip this step.'
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                D && (0, d.jsx)(k.default, {
                    size: 'large'
                }),
                F && F.length ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        F.map(_u => (0, d.jsx)(n.default, {
                            name: _u.schoolName,
                            description: `${ _u.address.city }, ${ _u.address.stateFull }`,
                            onSelect: () => I(_u && _u.schoolid ? _u.schoolid : null, _u && _u.district && _u.district.districtID ? _u.district.districtID : null)
                        }, _u.schoolid)),
                        (0, d.jsx)(n.default, {
                            name: 'Other',
                            description: 'School not listed',
                            onSelect: () => I(null, null)
                        })
                    ]
                }) : null,
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)(s.default, {
                    link: 'https://www.notion.so/gimkit/Country-Zip-Code-School-9bca6de77686407cad0a4298a4a1d00e'
                })
            ]
        });
    };
}), a.register('ZbPKw', function(b, c) {
    b.exports, b.exports = function(d) {
        var e = {};

        function f(g) {
            if (e[g])
                return e[g].exports;
            var h = e[g] = {
                i: g,
                l: !1,
                exports: {}
            };
            return d[g].call(h.exports, h, h.exports, f), h.l = !0, h.exports;
        }
        return _f.m = d, _f.c = e, _f.d = function(f, g, h) {
            _f.o(f, g) || Object.defineProperty(f, g, {
                enumerable: !0,
                get: h
            });
        }, _f.r = function(f) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, {
                value: 'Module'
            }), Object.defineProperty(f, '__esModule', {
                value: !0
            });
        }, _f.t = function(f, g) {
            if (1 & g && (f = _f(f)), 8 & g)
                return f;
            if (4 & g && 'object' == typeof f && f && f.__esModule)
                return f;
            var h = Object.create(null);
            if (_f.r(h), Object.defineProperty(h, 'default', {
                    enumerable: !0,
                    value: f
                }), 2 & g && 'string' != typeof f)
                for (var i in f)
                    _f.d(h, i, function(j) {
                        return f[j];
                    }.bind(null, i));
            return h;
        }, _f.n = function(f) {
            var g = f && f.__esModule ? function() {
                return f.default;
            } : function() {
                return f;
            };
            return _f.d(g, 'a', g), g;
        }, _f.o = function(f, g) {
            return Object.prototype.hasOwnProperty.call(f, g);
        }, _f.p = '', _f(_f.s = 1);
    }([
        function(d, e) {
            (function(f) {
                d.exports = f;
            }.call(this, {}));
        },
        function(d, e, _f) {
            var g = _f(2),
                h = _f(3),
                i = _f(4),
                j = _f(5),
                k = _f(6).ucs2,
                l = 127462 - 'A'.charCodeAt(0),
                m = /^[A-Z]{2}$/;
            d.exports = {
                continents: g,
                countries: h,
                languages: i,
                languagesAll: j,
                getEmojiFlag: function(n) {
                    return m.test(n) ? k.encode(n.split('').map(function(o) {
                        return l + o.charCodeAt(0);
                    })) : '';
                },
                getUnicode: function(n) {
                    return k.decode(n).map(function(o) {
                        return 'U+' + Number(o).toString(16).toUpperCase();
                    }).join(' ');
                }
            };
        },
        function(d) {
            d.exports = JSON.parse('{"AF":"Africa","AN":"Antarctica","AS":"Asia","EU":"Europe","NA":"North America","OC":"Oceania","SA":"South America"}');
        },
        function(d) {
            d.exports = JSON.parse('{"AD":{"name":"Andorra","native":"Andorra","phone":"376","continent":"EU","capital":"Andorra la Vella","currency":"EUR","languages":["ca"],"emoji":"\uD83C\uDDE6\uD83C\uDDE9","emojiU":"U+1F1E6 U+1F1E9"},"AE":{"name":"United Arab Emirates","native":"دولة الإمارات العربية المتحدة","phone":"971","continent":"AS","capital":"Abu Dhabi","currency":"AED","languages":["ar"],"emoji":"\uD83C\uDDE6\uD83C\uDDEA","emojiU":"U+1F1E6 U+1F1EA"},"AF":{"name":"Afghanistan","native":"افغانستان","phone":"93","continent":"AS","capital":"Kabul","currency":"AFN","languages":["ps","uz","tk"],"emoji":"\uD83C\uDDE6\uD83C\uDDEB","emojiU":"U+1F1E6 U+1F1EB"},"AG":{"name":"Antigua and Barbuda","native":"Antigua and Barbuda","phone":"1268","continent":"NA","capital":"Saint John\'s","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDEC","emojiU":"U+1F1E6 U+1F1EC"},"AI":{"name":"Anguilla","native":"Anguilla","phone":"1264","continent":"NA","capital":"The Valley","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDEE","emojiU":"U+1F1E6 U+1F1EE"},"AL":{"name":"Albania","native":"Shqipëria","phone":"355","continent":"EU","capital":"Tirana","currency":"ALL","languages":["sq"],"emoji":"\uD83C\uDDE6\uD83C\uDDF1","emojiU":"U+1F1E6 U+1F1F1"},"AM":{"name":"Armenia","native":"Հայաստան","phone":"374","continent":"AS","capital":"Yerevan","currency":"AMD","languages":["hy","ru"],"emoji":"\uD83C\uDDE6\uD83C\uDDF2","emojiU":"U+1F1E6 U+1F1F2"},"AO":{"name":"Angola","native":"Angola","phone":"244","continent":"AF","capital":"Luanda","currency":"AOA","languages":["pt"],"emoji":"\uD83C\uDDE6\uD83C\uDDF4","emojiU":"U+1F1E6 U+1F1F4"},"AQ":{"name":"Antarctica","native":"Antarctica","phone":"672","continent":"AN","capital":"","currency":"","languages":[],"emoji":"\uD83C\uDDE6\uD83C\uDDF6","emojiU":"U+1F1E6 U+1F1F6"},"AR":{"name":"Argentina","native":"Argentina","phone":"54","continent":"SA","capital":"Buenos Aires","currency":"ARS","languages":["es","gn"],"emoji":"\uD83C\uDDE6\uD83C\uDDF7","emojiU":"U+1F1E6 U+1F1F7"},"AS":{"name":"American Samoa","native":"American Samoa","phone":"1684","continent":"OC","capital":"Pago Pago","currency":"USD","languages":["en","sm"],"emoji":"\uD83C\uDDE6\uD83C\uDDF8","emojiU":"U+1F1E6 U+1F1F8"},"AT":{"name":"Austria","native":"Österreich","phone":"43","continent":"EU","capital":"Vienna","currency":"EUR","languages":["de"],"emoji":"\uD83C\uDDE6\uD83C\uDDF9","emojiU":"U+1F1E6 U+1F1F9"},"AU":{"name":"Australia","native":"Australia","phone":"61","continent":"OC","capital":"Canberra","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDFA","emojiU":"U+1F1E6 U+1F1FA"},"AW":{"name":"Aruba","native":"Aruba","phone":"297","continent":"NA","capital":"Oranjestad","currency":"AWG","languages":["nl","pa"],"emoji":"\uD83C\uDDE6\uD83C\uDDFC","emojiU":"U+1F1E6 U+1F1FC"},"AX":{"name":"Åland","native":"Åland","phone":"358","continent":"EU","capital":"Mariehamn","currency":"EUR","languages":["sv"],"emoji":"\uD83C\uDDE6\uD83C\uDDFD","emojiU":"U+1F1E6 U+1F1FD"},"AZ":{"name":"Azerbaijan","native":"Azərbaycan","phone":"994","continent":"AS","capital":"Baku","currency":"AZN","languages":["az"],"emoji":"\uD83C\uDDE6\uD83C\uDDFF","emojiU":"U+1F1E6 U+1F1FF"},"BA":{"name":"Bosnia and Herzegovina","native":"Bosna i Hercegovina","phone":"387","continent":"EU","capital":"Sarajevo","currency":"BAM","languages":["bs","hr","sr"],"emoji":"\uD83C\uDDE7\uD83C\uDDE6","emojiU":"U+1F1E7 U+1F1E6"},"BB":{"name":"Barbados","native":"Barbados","phone":"1246","continent":"NA","capital":"Bridgetown","currency":"BBD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDE7","emojiU":"U+1F1E7 U+1F1E7"},"BD":{"name":"Bangladesh","native":"Bangladesh","phone":"880","continent":"AS","capital":"Dhaka","currency":"BDT","languages":["bn"],"emoji":"\uD83C\uDDE7\uD83C\uDDE9","emojiU":"U+1F1E7 U+1F1E9"},"BE":{"name":"Belgium","native":"België","phone":"32","continent":"EU","capital":"Brussels","currency":"EUR","languages":["nl","fr","de"],"emoji":"\uD83C\uDDE7\uD83C\uDDEA","emojiU":"U+1F1E7 U+1F1EA"},"BF":{"name":"Burkina Faso","native":"Burkina Faso","phone":"226","continent":"AF","capital":"Ouagadougou","currency":"XOF","languages":["fr","ff"],"emoji":"\uD83C\uDDE7\uD83C\uDDEB","emojiU":"U+1F1E7 U+1F1EB"},"BG":{"name":"Bulgaria","native":"България","phone":"359","continent":"EU","capital":"Sofia","currency":"BGN","languages":["bg"],"emoji":"\uD83C\uDDE7\uD83C\uDDEC","emojiU":"U+1F1E7 U+1F1EC"},"BH":{"name":"Bahrain","native":"\u200Fالبحرين","phone":"973","continent":"AS","capital":"Manama","currency":"BHD","languages":["ar"],"emoji":"\uD83C\uDDE7\uD83C\uDDED","emojiU":"U+1F1E7 U+1F1ED"},"BI":{"name":"Burundi","native":"Burundi","phone":"257","continent":"AF","capital":"Bujumbura","currency":"BIF","languages":["fr","rn"],"emoji":"\uD83C\uDDE7\uD83C\uDDEE","emojiU":"U+1F1E7 U+1F1EE"},"BJ":{"name":"Benin","native":"Bénin","phone":"229","continent":"AF","capital":"Porto-Novo","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDE7\uD83C\uDDEF","emojiU":"U+1F1E7 U+1F1EF"},"BL":{"name":"Saint Barthélemy","native":"Saint-Barthélemy","phone":"590","continent":"NA","capital":"Gustavia","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDE7\uD83C\uDDF1","emojiU":"U+1F1E7 U+1F1F1"},"BM":{"name":"Bermuda","native":"Bermuda","phone":"1441","continent":"NA","capital":"Hamilton","currency":"BMD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDF2","emojiU":"U+1F1E7 U+1F1F2"},"BN":{"name":"Brunei","native":"Negara Brunei Darussalam","phone":"673","continent":"AS","capital":"Bandar Seri Begawan","currency":"BND","languages":["ms"],"emoji":"\uD83C\uDDE7\uD83C\uDDF3","emojiU":"U+1F1E7 U+1F1F3"},"BO":{"name":"Bolivia","native":"Bolivia","phone":"591","continent":"SA","capital":"Sucre","currency":"BOB,BOV","languages":["es","ay","qu"],"emoji":"\uD83C\uDDE7\uD83C\uDDF4","emojiU":"U+1F1E7 U+1F1F4"},"BQ":{"name":"Bonaire","native":"Bonaire","phone":"5997","continent":"NA","capital":"Kralendijk","currency":"USD","languages":["nl"],"emoji":"\uD83C\uDDE7\uD83C\uDDF6","emojiU":"U+1F1E7 U+1F1F6"},"BR":{"name":"Brazil","native":"Brasil","phone":"55","continent":"SA","capital":"Brasília","currency":"BRL","languages":["pt"],"emoji":"\uD83C\uDDE7\uD83C\uDDF7","emojiU":"U+1F1E7 U+1F1F7"},"BS":{"name":"Bahamas","native":"Bahamas","phone":"1242","continent":"NA","capital":"Nassau","currency":"BSD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDF8","emojiU":"U+1F1E7 U+1F1F8"},"BT":{"name":"Bhutan","native":"ʼbrug-yul","phone":"975","continent":"AS","capital":"Thimphu","currency":"BTN,INR","languages":["dz"],"emoji":"\uD83C\uDDE7\uD83C\uDDF9","emojiU":"U+1F1E7 U+1F1F9"},"BV":{"name":"Bouvet Island","native":"Bouvetøya","phone":"47","continent":"AN","capital":"","currency":"NOK","languages":["no","nb","nn"],"emoji":"\uD83C\uDDE7\uD83C\uDDFB","emojiU":"U+1F1E7 U+1F1FB"},"BW":{"name":"Botswana","native":"Botswana","phone":"267","continent":"AF","capital":"Gaborone","currency":"BWP","languages":["en","tn"],"emoji":"\uD83C\uDDE7\uD83C\uDDFC","emojiU":"U+1F1E7 U+1F1FC"},"BY":{"name":"Belarus","native":"Белару́сь","phone":"375","continent":"EU","capital":"Minsk","currency":"BYN","languages":["be","ru"],"emoji":"\uD83C\uDDE7\uD83C\uDDFE","emojiU":"U+1F1E7 U+1F1FE"},"BZ":{"name":"Belize","native":"Belize","phone":"501","continent":"NA","capital":"Belmopan","currency":"BZD","languages":["en","es"],"emoji":"\uD83C\uDDE7\uD83C\uDDFF","emojiU":"U+1F1E7 U+1F1FF"},"CA":{"name":"Canada","native":"Canada","phone":"1","continent":"NA","capital":"Ottawa","currency":"CAD","languages":["en","fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDE6","emojiU":"U+1F1E8 U+1F1E6"},"CC":{"name":"Cocos [Keeling] Islands","native":"Cocos (Keeling) Islands","phone":"61","continent":"AS","capital":"West Island","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDE8","emojiU":"U+1F1E8 U+1F1E8"},"CD":{"name":"Democratic Republic of the Congo","native":"République démocratique du Congo","phone":"243","continent":"AF","capital":"Kinshasa","currency":"CDF","languages":["fr","ln","kg","sw","lu"],"emoji":"\uD83C\uDDE8\uD83C\uDDE9","emojiU":"U+1F1E8 U+1F1E9"},"CF":{"name":"Central African Republic","native":"Ködörösêse tî Bêafrîka","phone":"236","continent":"AF","capital":"Bangui","currency":"XAF","languages":["fr","sg"],"emoji":"\uD83C\uDDE8\uD83C\uDDEB","emojiU":"U+1F1E8 U+1F1EB"},"CG":{"name":"Republic of the Congo","native":"République du Congo","phone":"242","continent":"AF","capital":"Brazzaville","currency":"XAF","languages":["fr","ln"],"emoji":"\uD83C\uDDE8\uD83C\uDDEC","emojiU":"U+1F1E8 U+1F1EC"},"CH":{"name":"Switzerland","native":"Schweiz","phone":"41","continent":"EU","capital":"Bern","currency":"CHE,CHF,CHW","languages":["de","fr","it"],"emoji":"\uD83C\uDDE8\uD83C\uDDED","emojiU":"U+1F1E8 U+1F1ED"},"CI":{"name":"Ivory Coast","native":"Côte d\'Ivoire","phone":"225","continent":"AF","capital":"Yamoussoukro","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDEE","emojiU":"U+1F1E8 U+1F1EE"},"CK":{"name":"Cook Islands","native":"Cook Islands","phone":"682","continent":"OC","capital":"Avarua","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDF0","emojiU":"U+1F1E8 U+1F1F0"},"CL":{"name":"Chile","native":"Chile","phone":"56","continent":"SA","capital":"Santiago","currency":"CLF,CLP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF1","emojiU":"U+1F1E8 U+1F1F1"},"CM":{"name":"Cameroon","native":"Cameroon","phone":"237","continent":"AF","capital":"Yaoundé","currency":"XAF","languages":["en","fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDF2","emojiU":"U+1F1E8 U+1F1F2"},"CN":{"name":"China","native":"中国","phone":"86","continent":"AS","capital":"Beijing","currency":"CNY","languages":["zh"],"emoji":"\uD83C\uDDE8\uD83C\uDDF3","emojiU":"U+1F1E8 U+1F1F3"},"CO":{"name":"Colombia","native":"Colombia","phone":"57","continent":"SA","capital":"Bogotá","currency":"COP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF4","emojiU":"U+1F1E8 U+1F1F4"},"CR":{"name":"Costa Rica","native":"Costa Rica","phone":"506","continent":"NA","capital":"San José","currency":"CRC","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF7","emojiU":"U+1F1E8 U+1F1F7"},"CU":{"name":"Cuba","native":"Cuba","phone":"53","continent":"NA","capital":"Havana","currency":"CUC,CUP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDFA","emojiU":"U+1F1E8 U+1F1FA"},"CV":{"name":"Cape Verde","native":"Cabo Verde","phone":"238","continent":"AF","capital":"Praia","currency":"CVE","languages":["pt"],"emoji":"\uD83C\uDDE8\uD83C\uDDFB","emojiU":"U+1F1E8 U+1F1FB"},"CW":{"name":"Curacao","native":"Curaçao","phone":"5999","continent":"NA","capital":"Willemstad","currency":"ANG","languages":["nl","pa","en"],"emoji":"\uD83C\uDDE8\uD83C\uDDFC","emojiU":"U+1F1E8 U+1F1FC"},"CX":{"name":"Christmas Island","native":"Christmas Island","phone":"61","continent":"AS","capital":"Flying Fish Cove","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDFD","emojiU":"U+1F1E8 U+1F1FD"},"CY":{"name":"Cyprus","native":"Κύπρος","phone":"357","continent":"EU","capital":"Nicosia","currency":"EUR","languages":["el","tr","hy"],"emoji":"\uD83C\uDDE8\uD83C\uDDFE","emojiU":"U+1F1E8 U+1F1FE"},"CZ":{"name":"Czech Republic","native":"Česká republika","phone":"420","continent":"EU","capital":"Prague","currency":"CZK","languages":["cs","sk"],"emoji":"\uD83C\uDDE8\uD83C\uDDFF","emojiU":"U+1F1E8 U+1F1FF"},"DE":{"name":"Germany","native":"Deutschland","phone":"49","continent":"EU","capital":"Berlin","currency":"EUR","languages":["de"],"emoji":"\uD83C\uDDE9\uD83C\uDDEA","emojiU":"U+1F1E9 U+1F1EA"},"DJ":{"name":"Djibouti","native":"Djibouti","phone":"253","continent":"AF","capital":"Djibouti","currency":"DJF","languages":["fr","ar"],"emoji":"\uD83C\uDDE9\uD83C\uDDEF","emojiU":"U+1F1E9 U+1F1EF"},"DK":{"name":"Denmark","native":"Danmark","phone":"45","continent":"EU","capital":"Copenhagen","currency":"DKK","languages":["da"],"emoji":"\uD83C\uDDE9\uD83C\uDDF0","emojiU":"U+1F1E9 U+1F1F0"},"DM":{"name":"Dominica","native":"Dominica","phone":"1767","continent":"NA","capital":"Roseau","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE9\uD83C\uDDF2","emojiU":"U+1F1E9 U+1F1F2"},"DO":{"name":"Dominican Republic","native":"República Dominicana","phone":"1809,1829,1849","continent":"NA","capital":"Santo Domingo","currency":"DOP","languages":["es"],"emoji":"\uD83C\uDDE9\uD83C\uDDF4","emojiU":"U+1F1E9 U+1F1F4"},"DZ":{"name":"Algeria","native":"الجزائر","phone":"213","continent":"AF","capital":"Algiers","currency":"DZD","languages":["ar"],"emoji":"\uD83C\uDDE9\uD83C\uDDFF","emojiU":"U+1F1E9 U+1F1FF"},"EC":{"name":"Ecuador","native":"Ecuador","phone":"593","continent":"SA","capital":"Quito","currency":"USD","languages":["es"],"emoji":"\uD83C\uDDEA\uD83C\uDDE8","emojiU":"U+1F1EA U+1F1E8"},"EE":{"name":"Estonia","native":"Eesti","phone":"372","continent":"EU","capital":"Tallinn","currency":"EUR","languages":["et"],"emoji":"\uD83C\uDDEA\uD83C\uDDEA","emojiU":"U+1F1EA U+1F1EA"},"EG":{"name":"Egypt","native":"مصر\u200E","phone":"20","continent":"AF","capital":"Cairo","currency":"EGP","languages":["ar"],"emoji":"\uD83C\uDDEA\uD83C\uDDEC","emojiU":"U+1F1EA U+1F1EC"},"EH":{"name":"Western Sahara","native":"الصحراء الغربية","phone":"212","continent":"AF","capital":"El Aaiún","currency":"MAD,DZD,MRU","languages":["es"],"emoji":"\uD83C\uDDEA\uD83C\uDDED","emojiU":"U+1F1EA U+1F1ED"},"ER":{"name":"Eritrea","native":"ኤርትራ","phone":"291","continent":"AF","capital":"Asmara","currency":"ERN","languages":["ti","ar","en"],"emoji":"\uD83C\uDDEA\uD83C\uDDF7","emojiU":"U+1F1EA U+1F1F7"},"ES":{"name":"Spain","native":"España","phone":"34","continent":"EU","capital":"Madrid","currency":"EUR","languages":["es","eu","ca","gl","oc"],"emoji":"\uD83C\uDDEA\uD83C\uDDF8","emojiU":"U+1F1EA U+1F1F8"},"ET":{"name":"Ethiopia","native":"ኢትዮጵያ","phone":"251","continent":"AF","capital":"Addis Ababa","currency":"ETB","languages":["am"],"emoji":"\uD83C\uDDEA\uD83C\uDDF9","emojiU":"U+1F1EA U+1F1F9"},"FI":{"name":"Finland","native":"Suomi","phone":"358","continent":"EU","capital":"Helsinki","currency":"EUR","languages":["fi","sv"],"emoji":"\uD83C\uDDEB\uD83C\uDDEE","emojiU":"U+1F1EB U+1F1EE"},"FJ":{"name":"Fiji","native":"Fiji","phone":"679","continent":"OC","capital":"Suva","currency":"FJD","languages":["en","fj","hi","ur"],"emoji":"\uD83C\uDDEB\uD83C\uDDEF","emojiU":"U+1F1EB U+1F1EF"},"FK":{"name":"Falkland Islands","native":"Falkland Islands","phone":"500","continent":"SA","capital":"Stanley","currency":"FKP","languages":["en"],"emoji":"\uD83C\uDDEB\uD83C\uDDF0","emojiU":"U+1F1EB U+1F1F0"},"FM":{"name":"Micronesia","native":"Micronesia","phone":"691","continent":"OC","capital":"Palikir","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDEB\uD83C\uDDF2","emojiU":"U+1F1EB U+1F1F2"},"FO":{"name":"Faroe Islands","native":"Føroyar","phone":"298","continent":"EU","capital":"Tórshavn","currency":"DKK","languages":["fo"],"emoji":"\uD83C\uDDEB\uD83C\uDDF4","emojiU":"U+1F1EB U+1F1F4"},"FR":{"name":"France","native":"France","phone":"33","continent":"EU","capital":"Paris","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEB\uD83C\uDDF7","emojiU":"U+1F1EB U+1F1F7"},"GA":{"name":"Gabon","native":"Gabon","phone":"241","continent":"AF","capital":"Libreville","currency":"XAF","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDE6","emojiU":"U+1F1EC U+1F1E6"},"GB":{"name":"United Kingdom","native":"United Kingdom","phone":"44","continent":"EU","capital":"London","currency":"GBP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDE7","emojiU":"U+1F1EC U+1F1E7"},"GD":{"name":"Grenada","native":"Grenada","phone":"1473","continent":"NA","capital":"St. George\'s","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDE9","emojiU":"U+1F1EC U+1F1E9"},"GE":{"name":"Georgia","native":"საქართველო","phone":"995","continent":"AS","capital":"Tbilisi","currency":"GEL","languages":["ka"],"emoji":"\uD83C\uDDEC\uD83C\uDDEA","emojiU":"U+1F1EC U+1F1EA"},"GF":{"name":"French Guiana","native":"Guyane française","phone":"594","continent":"SA","capital":"Cayenne","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDEB","emojiU":"U+1F1EC U+1F1EB"},"GG":{"name":"Guernsey","native":"Guernsey","phone":"44","continent":"EU","capital":"St. Peter Port","currency":"GBP","languages":["en","fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDEC","emojiU":"U+1F1EC U+1F1EC"},"GH":{"name":"Ghana","native":"Ghana","phone":"233","continent":"AF","capital":"Accra","currency":"GHS","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDED","emojiU":"U+1F1EC U+1F1ED"},"GI":{"name":"Gibraltar","native":"Gibraltar","phone":"350","continent":"EU","capital":"Gibraltar","currency":"GIP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDEE","emojiU":"U+1F1EC U+1F1EE"},"GL":{"name":"Greenland","native":"Kalaallit Nunaat","phone":"299","continent":"NA","capital":"Nuuk","currency":"DKK","languages":["kl"],"emoji":"\uD83C\uDDEC\uD83C\uDDF1","emojiU":"U+1F1EC U+1F1F1"},"GM":{"name":"Gambia","native":"Gambia","phone":"220","continent":"AF","capital":"Banjul","currency":"GMD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDF2","emojiU":"U+1F1EC U+1F1F2"},"GN":{"name":"Guinea","native":"Guinée","phone":"224","continent":"AF","capital":"Conakry","currency":"GNF","languages":["fr","ff"],"emoji":"\uD83C\uDDEC\uD83C\uDDF3","emojiU":"U+1F1EC U+1F1F3"},"GP":{"name":"Guadeloupe","native":"Guadeloupe","phone":"590","continent":"NA","capital":"Basse-Terre","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDF5","emojiU":"U+1F1EC U+1F1F5"},"GQ":{"name":"Equatorial Guinea","native":"Guinea Ecuatorial","phone":"240","continent":"AF","capital":"Malabo","currency":"XAF","languages":["es","fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDF6","emojiU":"U+1F1EC U+1F1F6"},"GR":{"name":"Greece","native":"Ελλάδα","phone":"30","continent":"EU","capital":"Athens","currency":"EUR","languages":["el"],"emoji":"\uD83C\uDDEC\uD83C\uDDF7","emojiU":"U+1F1EC U+1F1F7"},"GS":{"name":"South Georgia and the South Sandwich Islands","native":"South Georgia","phone":"500","continent":"AN","capital":"King Edward Point","currency":"GBP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDF8","emojiU":"U+1F1EC U+1F1F8"},"GT":{"name":"Guatemala","native":"Guatemala","phone":"502","continent":"NA","capital":"Guatemala City","currency":"GTQ","languages":["es"],"emoji":"\uD83C\uDDEC\uD83C\uDDF9","emojiU":"U+1F1EC U+1F1F9"},"GU":{"name":"Guam","native":"Guam","phone":"1671","continent":"OC","capital":"Hagåtña","currency":"USD","languages":["en","ch","es"],"emoji":"\uD83C\uDDEC\uD83C\uDDFA","emojiU":"U+1F1EC U+1F1FA"},"GW":{"name":"Guinea-Bissau","native":"Guiné-Bissau","phone":"245","continent":"AF","capital":"Bissau","currency":"XOF","languages":["pt"],"emoji":"\uD83C\uDDEC\uD83C\uDDFC","emojiU":"U+1F1EC U+1F1FC"},"GY":{"name":"Guyana","native":"Guyana","phone":"592","continent":"SA","capital":"Georgetown","currency":"GYD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDFE","emojiU":"U+1F1EC U+1F1FE"},"HK":{"name":"Hong Kong","native":"香港","phone":"852","continent":"AS","capital":"City of Victoria","currency":"HKD","languages":["zh","en"],"emoji":"\uD83C\uDDED\uD83C\uDDF0","emojiU":"U+1F1ED U+1F1F0"},"HM":{"name":"Heard Island and McDonald Islands","native":"Heard Island and McDonald Islands","phone":"61","continent":"AN","capital":"","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDED\uD83C\uDDF2","emojiU":"U+1F1ED U+1F1F2"},"HN":{"name":"Honduras","native":"Honduras","phone":"504","continent":"NA","capital":"Tegucigalpa","currency":"HNL","languages":["es"],"emoji":"\uD83C\uDDED\uD83C\uDDF3","emojiU":"U+1F1ED U+1F1F3"},"HR":{"name":"Croatia","native":"Hrvatska","phone":"385","continent":"EU","capital":"Zagreb","currency":"HRK","languages":["hr"],"emoji":"\uD83C\uDDED\uD83C\uDDF7","emojiU":"U+1F1ED U+1F1F7"},"HT":{"name":"Haiti","native":"Haïti","phone":"509","continent":"NA","capital":"Port-au-Prince","currency":"HTG,USD","languages":["fr","ht"],"emoji":"\uD83C\uDDED\uD83C\uDDF9","emojiU":"U+1F1ED U+1F1F9"},"HU":{"name":"Hungary","native":"Magyarország","phone":"36","continent":"EU","capital":"Budapest","currency":"HUF","languages":["hu"],"emoji":"\uD83C\uDDED\uD83C\uDDFA","emojiU":"U+1F1ED U+1F1FA"},"ID":{"name":"Indonesia","native":"Indonesia","phone":"62","continent":"AS","capital":"Jakarta","currency":"IDR","languages":["id"],"emoji":"\uD83C\uDDEE\uD83C\uDDE9","emojiU":"U+1F1EE U+1F1E9"},"IE":{"name":"Ireland","native":"Éire","phone":"353","continent":"EU","capital":"Dublin","currency":"EUR","languages":["ga","en"],"emoji":"\uD83C\uDDEE\uD83C\uDDEA","emojiU":"U+1F1EE U+1F1EA"},"IL":{"name":"Israel","native":"יִשְׂרָאֵל","phone":"972","continent":"AS","capital":"Jerusalem","currency":"ILS","languages":["he","ar"],"emoji":"\uD83C\uDDEE\uD83C\uDDF1","emojiU":"U+1F1EE U+1F1F1"},"IM":{"name":"Isle of Man","native":"Isle of Man","phone":"44","continent":"EU","capital":"Douglas","currency":"GBP","languages":["en","gv"],"emoji":"\uD83C\uDDEE\uD83C\uDDF2","emojiU":"U+1F1EE U+1F1F2"},"IN":{"name":"India","native":"भारत","phone":"91","continent":"AS","capital":"New Delhi","currency":"INR","languages":["hi","en"],"emoji":"\uD83C\uDDEE\uD83C\uDDF3","emojiU":"U+1F1EE U+1F1F3"},"IO":{"name":"British Indian Ocean Territory","native":"British Indian Ocean Territory","phone":"246","continent":"AS","capital":"Diego Garcia","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDEE\uD83C\uDDF4","emojiU":"U+1F1EE U+1F1F4"},"IQ":{"name":"Iraq","native":"العراق","phone":"964","continent":"AS","capital":"Baghdad","currency":"IQD","languages":["ar","ku"],"emoji":"\uD83C\uDDEE\uD83C\uDDF6","emojiU":"U+1F1EE U+1F1F6"},"IR":{"name":"Iran","native":"ایران","phone":"98","continent":"AS","capital":"Tehran","currency":"IRR","languages":["fa"],"emoji":"\uD83C\uDDEE\uD83C\uDDF7","emojiU":"U+1F1EE U+1F1F7"},"IS":{"name":"Iceland","native":"Ísland","phone":"354","continent":"EU","capital":"Reykjavik","currency":"ISK","languages":["is"],"emoji":"\uD83C\uDDEE\uD83C\uDDF8","emojiU":"U+1F1EE U+1F1F8"},"IT":{"name":"Italy","native":"Italia","phone":"39","continent":"EU","capital":"Rome","currency":"EUR","languages":["it"],"emoji":"\uD83C\uDDEE\uD83C\uDDF9","emojiU":"U+1F1EE U+1F1F9"},"JE":{"name":"Jersey","native":"Jersey","phone":"44","continent":"EU","capital":"Saint Helier","currency":"GBP","languages":["en","fr"],"emoji":"\uD83C\uDDEF\uD83C\uDDEA","emojiU":"U+1F1EF U+1F1EA"},"JM":{"name":"Jamaica","native":"Jamaica","phone":"1876","continent":"NA","capital":"Kingston","currency":"JMD","languages":["en"],"emoji":"\uD83C\uDDEF\uD83C\uDDF2","emojiU":"U+1F1EF U+1F1F2"},"JO":{"name":"Jordan","native":"الأردن","phone":"962","continent":"AS","capital":"Amman","currency":"JOD","languages":["ar"],"emoji":"\uD83C\uDDEF\uD83C\uDDF4","emojiU":"U+1F1EF U+1F1F4"},"JP":{"name":"Japan","native":"日本","phone":"81","continent":"AS","capital":"Tokyo","currency":"JPY","languages":["ja"],"emoji":"\uD83C\uDDEF\uD83C\uDDF5","emojiU":"U+1F1EF U+1F1F5"},"KE":{"name":"Kenya","native":"Kenya","phone":"254","continent":"AF","capital":"Nairobi","currency":"KES","languages":["en","sw"],"emoji":"\uD83C\uDDF0\uD83C\uDDEA","emojiU":"U+1F1F0 U+1F1EA"},"KG":{"name":"Kyrgyzstan","native":"Кыргызстан","phone":"996","continent":"AS","capital":"Bishkek","currency":"KGS","languages":["ky","ru"],"emoji":"\uD83C\uDDF0\uD83C\uDDEC","emojiU":"U+1F1F0 U+1F1EC"},"KH":{"name":"Cambodia","native":"Kâmpŭchéa","phone":"855","continent":"AS","capital":"Phnom Penh","currency":"KHR","languages":["km"],"emoji":"\uD83C\uDDF0\uD83C\uDDED","emojiU":"U+1F1F0 U+1F1ED"},"KI":{"name":"Kiribati","native":"Kiribati","phone":"686","continent":"OC","capital":"South Tarawa","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDEE","emojiU":"U+1F1F0 U+1F1EE"},"KM":{"name":"Comoros","native":"Komori","phone":"269","continent":"AF","capital":"Moroni","currency":"KMF","languages":["ar","fr"],"emoji":"\uD83C\uDDF0\uD83C\uDDF2","emojiU":"U+1F1F0 U+1F1F2"},"KN":{"name":"Saint Kitts and Nevis","native":"Saint Kitts and Nevis","phone":"1869","continent":"NA","capital":"Basseterre","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDF3","emojiU":"U+1F1F0 U+1F1F3"},"KP":{"name":"North Korea","native":"북한","phone":"850","continent":"AS","capital":"Pyongyang","currency":"KPW","languages":["ko"],"emoji":"\uD83C\uDDF0\uD83C\uDDF5","emojiU":"U+1F1F0 U+1F1F5"},"KR":{"name":"South Korea","native":"대한민국","phone":"82","continent":"AS","capital":"Seoul","currency":"KRW","languages":["ko"],"emoji":"\uD83C\uDDF0\uD83C\uDDF7","emojiU":"U+1F1F0 U+1F1F7"},"KW":{"name":"Kuwait","native":"الكويت","phone":"965","continent":"AS","capital":"Kuwait City","currency":"KWD","languages":["ar"],"emoji":"\uD83C\uDDF0\uD83C\uDDFC","emojiU":"U+1F1F0 U+1F1FC"},"KY":{"name":"Cayman Islands","native":"Cayman Islands","phone":"1345","continent":"NA","capital":"George Town","currency":"KYD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDFE","emojiU":"U+1F1F0 U+1F1FE"},"KZ":{"name":"Kazakhstan","native":"Қазақстан","phone":"76,77","continent":"AS","capital":"Astana","currency":"KZT","languages":["kk","ru"],"emoji":"\uD83C\uDDF0\uD83C\uDDFF","emojiU":"U+1F1F0 U+1F1FF"},"LA":{"name":"Laos","native":"ສປປລາວ","phone":"856","continent":"AS","capital":"Vientiane","currency":"LAK","languages":["lo"],"emoji":"\uD83C\uDDF1\uD83C\uDDE6","emojiU":"U+1F1F1 U+1F1E6"},"LB":{"name":"Lebanon","native":"لبنان","phone":"961","continent":"AS","capital":"Beirut","currency":"LBP","languages":["ar","fr"],"emoji":"\uD83C\uDDF1\uD83C\uDDE7","emojiU":"U+1F1F1 U+1F1E7"},"LC":{"name":"Saint Lucia","native":"Saint Lucia","phone":"1758","continent":"NA","capital":"Castries","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF1\uD83C\uDDE8","emojiU":"U+1F1F1 U+1F1E8"},"LI":{"name":"Liechtenstein","native":"Liechtenstein","phone":"423","continent":"EU","capital":"Vaduz","currency":"CHF","languages":["de"],"emoji":"\uD83C\uDDF1\uD83C\uDDEE","emojiU":"U+1F1F1 U+1F1EE"},"LK":{"name":"Sri Lanka","native":"śrī laṃkāva","phone":"94","continent":"AS","capital":"Colombo","currency":"LKR","languages":["si","ta"],"emoji":"\uD83C\uDDF1\uD83C\uDDF0","emojiU":"U+1F1F1 U+1F1F0"},"LR":{"name":"Liberia","native":"Liberia","phone":"231","continent":"AF","capital":"Monrovia","currency":"LRD","languages":["en"],"emoji":"\uD83C\uDDF1\uD83C\uDDF7","emojiU":"U+1F1F1 U+1F1F7"},"LS":{"name":"Lesotho","native":"Lesotho","phone":"266","continent":"AF","capital":"Maseru","currency":"LSL,ZAR","languages":["en","st"],"emoji":"\uD83C\uDDF1\uD83C\uDDF8","emojiU":"U+1F1F1 U+1F1F8"},"LT":{"name":"Lithuania","native":"Lietuva","phone":"370","continent":"EU","capital":"Vilnius","currency":"EUR","languages":["lt"],"emoji":"\uD83C\uDDF1\uD83C\uDDF9","emojiU":"U+1F1F1 U+1F1F9"},"LU":{"name":"Luxembourg","native":"Luxembourg","phone":"352","continent":"EU","capital":"Luxembourg","currency":"EUR","languages":["fr","de","lb"],"emoji":"\uD83C\uDDF1\uD83C\uDDFA","emojiU":"U+1F1F1 U+1F1FA"},"LV":{"name":"Latvia","native":"Latvija","phone":"371","continent":"EU","capital":"Riga","currency":"EUR","languages":["lv"],"emoji":"\uD83C\uDDF1\uD83C\uDDFB","emojiU":"U+1F1F1 U+1F1FB"},"LY":{"name":"Libya","native":"\u200Fليبيا","phone":"218","continent":"AF","capital":"Tripoli","currency":"LYD","languages":["ar"],"emoji":"\uD83C\uDDF1\uD83C\uDDFE","emojiU":"U+1F1F1 U+1F1FE"},"MA":{"name":"Morocco","native":"المغرب","phone":"212","continent":"AF","capital":"Rabat","currency":"MAD","languages":["ar"],"emoji":"\uD83C\uDDF2\uD83C\uDDE6","emojiU":"U+1F1F2 U+1F1E6"},"MC":{"name":"Monaco","native":"Monaco","phone":"377","continent":"EU","capital":"Monaco","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDE8","emojiU":"U+1F1F2 U+1F1E8"},"MD":{"name":"Moldova","native":"Moldova","phone":"373","continent":"EU","capital":"Chișinău","currency":"MDL","languages":["ro"],"emoji":"\uD83C\uDDF2\uD83C\uDDE9","emojiU":"U+1F1F2 U+1F1E9"},"ME":{"name":"Montenegro","native":"Црна Гора","phone":"382","continent":"EU","capital":"Podgorica","currency":"EUR","languages":["sr","bs","sq","hr"],"emoji":"\uD83C\uDDF2\uD83C\uDDEA","emojiU":"U+1F1F2 U+1F1EA"},"MF":{"name":"Saint Martin","native":"Saint-Martin","phone":"590","continent":"NA","capital":"Marigot","currency":"EUR","languages":["en","fr","nl"],"emoji":"\uD83C\uDDF2\uD83C\uDDEB","emojiU":"U+1F1F2 U+1F1EB"},"MG":{"name":"Madagascar","native":"Madagasikara","phone":"261","continent":"AF","capital":"Antananarivo","currency":"MGA","languages":["fr","mg"],"emoji":"\uD83C\uDDF2\uD83C\uDDEC","emojiU":"U+1F1F2 U+1F1EC"},"MH":{"name":"Marshall Islands","native":"M̧ajeļ","phone":"692","continent":"OC","capital":"Majuro","currency":"USD","languages":["en","mh"],"emoji":"\uD83C\uDDF2\uD83C\uDDED","emojiU":"U+1F1F2 U+1F1ED"},"MK":{"name":"North Macedonia","native":"Северна Македонија","phone":"389","continent":"EU","capital":"Skopje","currency":"MKD","languages":["mk"],"emoji":"\uD83C\uDDF2\uD83C\uDDF0","emojiU":"U+1F1F2 U+1F1F0"},"ML":{"name":"Mali","native":"Mali","phone":"223","continent":"AF","capital":"Bamako","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDF1","emojiU":"U+1F1F2 U+1F1F1"},"MM":{"name":"Myanmar [Burma]","native":"မြန်မာ","phone":"95","continent":"AS","capital":"Naypyidaw","currency":"MMK","languages":["my"],"emoji":"\uD83C\uDDF2\uD83C\uDDF2","emojiU":"U+1F1F2 U+1F1F2"},"MN":{"name":"Mongolia","native":"Монгол улс","phone":"976","continent":"AS","capital":"Ulan Bator","currency":"MNT","languages":["mn"],"emoji":"\uD83C\uDDF2\uD83C\uDDF3","emojiU":"U+1F1F2 U+1F1F3"},"MO":{"name":"Macao","native":"澳門","phone":"853","continent":"AS","capital":"","currency":"MOP","languages":["zh","pt"],"emoji":"\uD83C\uDDF2\uD83C\uDDF4","emojiU":"U+1F1F2 U+1F1F4"},"MP":{"name":"Northern Mariana Islands","native":"Northern Mariana Islands","phone":"1670","continent":"OC","capital":"Saipan","currency":"USD","languages":["en","ch"],"emoji":"\uD83C\uDDF2\uD83C\uDDF5","emojiU":"U+1F1F2 U+1F1F5"},"MQ":{"name":"Martinique","native":"Martinique","phone":"596","continent":"NA","capital":"Fort-de-France","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDF6","emojiU":"U+1F1F2 U+1F1F6"},"MR":{"name":"Mauritania","native":"موريتانيا","phone":"222","continent":"AF","capital":"Nouakchott","currency":"MRU","languages":["ar"],"emoji":"\uD83C\uDDF2\uD83C\uDDF7","emojiU":"U+1F1F2 U+1F1F7"},"MS":{"name":"Montserrat","native":"Montserrat","phone":"1664","continent":"NA","capital":"Plymouth","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF2\uD83C\uDDF8","emojiU":"U+1F1F2 U+1F1F8"},"MT":{"name":"Malta","native":"Malta","phone":"356","continent":"EU","capital":"Valletta","currency":"EUR","languages":["mt","en"],"emoji":"\uD83C\uDDF2\uD83C\uDDF9","emojiU":"U+1F1F2 U+1F1F9"},"MU":{"name":"Mauritius","native":"Maurice","phone":"230","continent":"AF","capital":"Port Louis","currency":"MUR","languages":["en"],"emoji":"\uD83C\uDDF2\uD83C\uDDFA","emojiU":"U+1F1F2 U+1F1FA"},"MV":{"name":"Maldives","native":"Maldives","phone":"960","continent":"AS","capital":"Malé","currency":"MVR","languages":["dv"],"emoji":"\uD83C\uDDF2\uD83C\uDDFB","emojiU":"U+1F1F2 U+1F1FB"},"MW":{"name":"Malawi","native":"Malawi","phone":"265","continent":"AF","capital":"Lilongwe","currency":"MWK","languages":["en","ny"],"emoji":"\uD83C\uDDF2\uD83C\uDDFC","emojiU":"U+1F1F2 U+1F1FC"},"MX":{"name":"Mexico","native":"México","phone":"52","continent":"NA","capital":"Mexico City","currency":"MXN","languages":["es"],"emoji":"\uD83C\uDDF2\uD83C\uDDFD","emojiU":"U+1F1F2 U+1F1FD"},"MY":{"name":"Malaysia","native":"Malaysia","phone":"60","continent":"AS","capital":"Kuala Lumpur","currency":"MYR","languages":["ms"],"emoji":"\uD83C\uDDF2\uD83C\uDDFE","emojiU":"U+1F1F2 U+1F1FE"},"MZ":{"name":"Mozambique","native":"Moçambique","phone":"258","continent":"AF","capital":"Maputo","currency":"MZN","languages":["pt"],"emoji":"\uD83C\uDDF2\uD83C\uDDFF","emojiU":"U+1F1F2 U+1F1FF"},"NA":{"name":"Namibia","native":"Namibia","phone":"264","continent":"AF","capital":"Windhoek","currency":"NAD,ZAR","languages":["en","af"],"emoji":"\uD83C\uDDF3\uD83C\uDDE6","emojiU":"U+1F1F3 U+1F1E6"},"NC":{"name":"New Caledonia","native":"Nouvelle-Calédonie","phone":"687","continent":"OC","capital":"Nouméa","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDF3\uD83C\uDDE8","emojiU":"U+1F1F3 U+1F1E8"},"NE":{"name":"Niger","native":"Niger","phone":"227","continent":"AF","capital":"Niamey","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF3\uD83C\uDDEA","emojiU":"U+1F1F3 U+1F1EA"},"NF":{"name":"Norfolk Island","native":"Norfolk Island","phone":"672","continent":"OC","capital":"Kingston","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDEB","emojiU":"U+1F1F3 U+1F1EB"},"NG":{"name":"Nigeria","native":"Nigeria","phone":"234","continent":"AF","capital":"Abuja","currency":"NGN","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDEC","emojiU":"U+1F1F3 U+1F1EC"},"NI":{"name":"Nicaragua","native":"Nicaragua","phone":"505","continent":"NA","capital":"Managua","currency":"NIO","languages":["es"],"emoji":"\uD83C\uDDF3\uD83C\uDDEE","emojiU":"U+1F1F3 U+1F1EE"},"NL":{"name":"Netherlands","native":"Nederland","phone":"31","continent":"EU","capital":"Amsterdam","currency":"EUR","languages":["nl"],"emoji":"\uD83C\uDDF3\uD83C\uDDF1","emojiU":"U+1F1F3 U+1F1F1"},"NO":{"name":"Norway","native":"Norge","phone":"47","continent":"EU","capital":"Oslo","currency":"NOK","languages":["no","nb","nn"],"emoji":"\uD83C\uDDF3\uD83C\uDDF4","emojiU":"U+1F1F3 U+1F1F4"},"NP":{"name":"Nepal","native":"नपल","phone":"977","continent":"AS","capital":"Kathmandu","currency":"NPR","languages":["ne"],"emoji":"\uD83C\uDDF3\uD83C\uDDF5","emojiU":"U+1F1F3 U+1F1F5"},"NR":{"name":"Nauru","native":"Nauru","phone":"674","continent":"OC","capital":"Yaren","currency":"AUD","languages":["en","na"],"emoji":"\uD83C\uDDF3\uD83C\uDDF7","emojiU":"U+1F1F3 U+1F1F7"},"NU":{"name":"Niue","native":"Niuē","phone":"683","continent":"OC","capital":"Alofi","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDFA","emojiU":"U+1F1F3 U+1F1FA"},"NZ":{"name":"New Zealand","native":"New Zealand","phone":"64","continent":"OC","capital":"Wellington","currency":"NZD","languages":["en","mi"],"emoji":"\uD83C\uDDF3\uD83C\uDDFF","emojiU":"U+1F1F3 U+1F1FF"},"OM":{"name":"Oman","native":"عمان","phone":"968","continent":"AS","capital":"Muscat","currency":"OMR","languages":["ar"],"emoji":"\uD83C\uDDF4\uD83C\uDDF2","emojiU":"U+1F1F4 U+1F1F2"},"PA":{"name":"Panama","native":"Panamá","phone":"507","continent":"NA","capital":"Panama City","currency":"PAB,USD","languages":["es"],"emoji":"\uD83C\uDDF5\uD83C\uDDE6","emojiU":"U+1F1F5 U+1F1E6"},"PE":{"name":"Peru","native":"Perú","phone":"51","continent":"SA","capital":"Lima","currency":"PEN","languages":["es"],"emoji":"\uD83C\uDDF5\uD83C\uDDEA","emojiU":"U+1F1F5 U+1F1EA"},"PF":{"name":"French Polynesia","native":"Polynésie française","phone":"689","continent":"OC","capital":"Papeetē","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDF5\uD83C\uDDEB","emojiU":"U+1F1F5 U+1F1EB"},"PG":{"name":"Papua New Guinea","native":"Papua Niugini","phone":"675","continent":"OC","capital":"Port Moresby","currency":"PGK","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDEC","emojiU":"U+1F1F5 U+1F1EC"},"PH":{"name":"Philippines","native":"Pilipinas","phone":"63","continent":"AS","capital":"Manila","currency":"PHP","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDED","emojiU":"U+1F1F5 U+1F1ED"},"PK":{"name":"Pakistan","native":"Pakistan","phone":"92","continent":"AS","capital":"Islamabad","currency":"PKR","languages":["en","ur"],"emoji":"\uD83C\uDDF5\uD83C\uDDF0","emojiU":"U+1F1F5 U+1F1F0"},"PL":{"name":"Poland","native":"Polska","phone":"48","continent":"EU","capital":"Warsaw","currency":"PLN","languages":["pl"],"emoji":"\uD83C\uDDF5\uD83C\uDDF1","emojiU":"U+1F1F5 U+1F1F1"},"PM":{"name":"Saint Pierre and Miquelon","native":"Saint-Pierre-et-Miquelon","phone":"508","continent":"NA","capital":"Saint-Pierre","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF5\uD83C\uDDF2","emojiU":"U+1F1F5 U+1F1F2"},"PN":{"name":"Pitcairn Islands","native":"Pitcairn Islands","phone":"64","continent":"OC","capital":"Adamstown","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDF3","emojiU":"U+1F1F5 U+1F1F3"},"PR":{"name":"Puerto Rico","native":"Puerto Rico","phone":"1787,1939","continent":"NA","capital":"San Juan","currency":"USD","languages":["es","en"],"emoji":"\uD83C\uDDF5\uD83C\uDDF7","emojiU":"U+1F1F5 U+1F1F7"},"PS":{"name":"Palestine","native":"فلسطين","phone":"970","continent":"AS","capital":"Ramallah","currency":"ILS","languages":["ar"],"emoji":"\uD83C\uDDF5\uD83C\uDDF8","emojiU":"U+1F1F5 U+1F1F8"},"PT":{"name":"Portugal","native":"Portugal","phone":"351","continent":"EU","capital":"Lisbon","currency":"EUR","languages":["pt"],"emoji":"\uD83C\uDDF5\uD83C\uDDF9","emojiU":"U+1F1F5 U+1F1F9"},"PW":{"name":"Palau","native":"Palau","phone":"680","continent":"OC","capital":"Ngerulmud","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDFC","emojiU":"U+1F1F5 U+1F1FC"},"PY":{"name":"Paraguay","native":"Paraguay","phone":"595","continent":"SA","capital":"Asunción","currency":"PYG","languages":["es","gn"],"emoji":"\uD83C\uDDF5\uD83C\uDDFE","emojiU":"U+1F1F5 U+1F1FE"},"QA":{"name":"Qatar","native":"قطر","phone":"974","continent":"AS","capital":"Doha","currency":"QAR","languages":["ar"],"emoji":"\uD83C\uDDF6\uD83C\uDDE6","emojiU":"U+1F1F6 U+1F1E6"},"RE":{"name":"Réunion","native":"La Réunion","phone":"262","continent":"AF","capital":"Saint-Denis","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF7\uD83C\uDDEA","emojiU":"U+1F1F7 U+1F1EA"},"RO":{"name":"Romania","native":"România","phone":"40","continent":"EU","capital":"Bucharest","currency":"RON","languages":["ro"],"emoji":"\uD83C\uDDF7\uD83C\uDDF4","emojiU":"U+1F1F7 U+1F1F4"},"RS":{"name":"Serbia","native":"Србија","phone":"381","continent":"EU","capital":"Belgrade","currency":"RSD","languages":["sr"],"emoji":"\uD83C\uDDF7\uD83C\uDDF8","emojiU":"U+1F1F7 U+1F1F8"},"RU":{"name":"Russia","native":"Россия","phone":"7","continent":"EU","capital":"Moscow","currency":"RUB","languages":["ru"],"emoji":"\uD83C\uDDF7\uD83C\uDDFA","emojiU":"U+1F1F7 U+1F1FA"},"RW":{"name":"Rwanda","native":"Rwanda","phone":"250","continent":"AF","capital":"Kigali","currency":"RWF","languages":["rw","en","fr"],"emoji":"\uD83C\uDDF7\uD83C\uDDFC","emojiU":"U+1F1F7 U+1F1FC"},"SA":{"name":"Saudi Arabia","native":"العربية السعودية","phone":"966","continent":"AS","capital":"Riyadh","currency":"SAR","languages":["ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDE6","emojiU":"U+1F1F8 U+1F1E6"},"SB":{"name":"Solomon Islands","native":"Solomon Islands","phone":"677","continent":"OC","capital":"Honiara","currency":"SBD","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE7","emojiU":"U+1F1F8 U+1F1E7"},"SC":{"name":"Seychelles","native":"Seychelles","phone":"248","continent":"AF","capital":"Victoria","currency":"SCR","languages":["fr","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE8","emojiU":"U+1F1F8 U+1F1E8"},"SD":{"name":"Sudan","native":"السودان","phone":"249","continent":"AF","capital":"Khartoum","currency":"SDG","languages":["ar","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE9","emojiU":"U+1F1F8 U+1F1E9"},"SE":{"name":"Sweden","native":"Sverige","phone":"46","continent":"EU","capital":"Stockholm","currency":"SEK","languages":["sv"],"emoji":"\uD83C\uDDF8\uD83C\uDDEA","emojiU":"U+1F1F8 U+1F1EA"},"SG":{"name":"Singapore","native":"Singapore","phone":"65","continent":"AS","capital":"Singapore","currency":"SGD","languages":["en","ms","ta","zh"],"emoji":"\uD83C\uDDF8\uD83C\uDDEC","emojiU":"U+1F1F8 U+1F1EC"},"SH":{"name":"Saint Helena","native":"Saint Helena","phone":"290","continent":"AF","capital":"Jamestown","currency":"SHP","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDED","emojiU":"U+1F1F8 U+1F1ED"},"SI":{"name":"Slovenia","native":"Slovenija","phone":"386","continent":"EU","capital":"Ljubljana","currency":"EUR","languages":["sl"],"emoji":"\uD83C\uDDF8\uD83C\uDDEE","emojiU":"U+1F1F8 U+1F1EE"},"SJ":{"name":"Svalbard and Jan Mayen","native":"Svalbard og Jan Mayen","phone":"4779","continent":"EU","capital":"Longyearbyen","currency":"NOK","languages":["no"],"emoji":"\uD83C\uDDF8\uD83C\uDDEF","emojiU":"U+1F1F8 U+1F1EF"},"SK":{"name":"Slovakia","native":"Slovensko","phone":"421","continent":"EU","capital":"Bratislava","currency":"EUR","languages":["sk"],"emoji":"\uD83C\uDDF8\uD83C\uDDF0","emojiU":"U+1F1F8 U+1F1F0"},"SL":{"name":"Sierra Leone","native":"Sierra Leone","phone":"232","continent":"AF","capital":"Freetown","currency":"SLL","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDF1","emojiU":"U+1F1F8 U+1F1F1"},"SM":{"name":"San Marino","native":"San Marino","phone":"378","continent":"EU","capital":"City of San Marino","currency":"EUR","languages":["it"],"emoji":"\uD83C\uDDF8\uD83C\uDDF2","emojiU":"U+1F1F8 U+1F1F2"},"SN":{"name":"Senegal","native":"Sénégal","phone":"221","continent":"AF","capital":"Dakar","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF8\uD83C\uDDF3","emojiU":"U+1F1F8 U+1F1F3"},"SO":{"name":"Somalia","native":"Soomaaliya","phone":"252","continent":"AF","capital":"Mogadishu","currency":"SOS","languages":["so","ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDF4","emojiU":"U+1F1F8 U+1F1F4"},"SR":{"name":"Suriname","native":"Suriname","phone":"597","continent":"SA","capital":"Paramaribo","currency":"SRD","languages":["nl"],"emoji":"\uD83C\uDDF8\uD83C\uDDF7","emojiU":"U+1F1F8 U+1F1F7"},"SS":{"name":"South Sudan","native":"South Sudan","phone":"211","continent":"AF","capital":"Juba","currency":"SSP","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDF8","emojiU":"U+1F1F8 U+1F1F8"},"ST":{"name":"São Tomé and Príncipe","native":"São Tomé e Príncipe","phone":"239","continent":"AF","capital":"São Tomé","currency":"STN","languages":["pt"],"emoji":"\uD83C\uDDF8\uD83C\uDDF9","emojiU":"U+1F1F8 U+1F1F9"},"SV":{"name":"El Salvador","native":"El Salvador","phone":"503","continent":"NA","capital":"San Salvador","currency":"SVC,USD","languages":["es"],"emoji":"\uD83C\uDDF8\uD83C\uDDFB","emojiU":"U+1F1F8 U+1F1FB"},"SX":{"name":"Sint Maarten","native":"Sint Maarten","phone":"1721","continent":"NA","capital":"Philipsburg","currency":"ANG","languages":["nl","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDFD","emojiU":"U+1F1F8 U+1F1FD"},"SY":{"name":"Syria","native":"سوريا","phone":"963","continent":"AS","capital":"Damascus","currency":"SYP","languages":["ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDFE","emojiU":"U+1F1F8 U+1F1FE"},"SZ":{"name":"Swaziland","native":"Swaziland","phone":"268","continent":"AF","capital":"Lobamba","currency":"SZL","languages":["en","ss"],"emoji":"\uD83C\uDDF8\uD83C\uDDFF","emojiU":"U+1F1F8 U+1F1FF"},"TC":{"name":"Turks and Caicos Islands","native":"Turks and Caicos Islands","phone":"1649","continent":"NA","capital":"Cockburn Town","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDE8","emojiU":"U+1F1F9 U+1F1E8"},"TD":{"name":"Chad","native":"Tchad","phone":"235","continent":"AF","capital":"N\'Djamena","currency":"XAF","languages":["fr","ar"],"emoji":"\uD83C\uDDF9\uD83C\uDDE9","emojiU":"U+1F1F9 U+1F1E9"},"TF":{"name":"French Southern Territories","native":"Territoire des Terres australes et antarctiques fr","phone":"262","continent":"AN","capital":"Port-aux-Français","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF9\uD83C\uDDEB","emojiU":"U+1F1F9 U+1F1EB"},"TG":{"name":"Togo","native":"Togo","phone":"228","continent":"AF","capital":"Lomé","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF9\uD83C\uDDEC","emojiU":"U+1F1F9 U+1F1EC"},"TH":{"name":"Thailand","native":"ประเทศไทย","phone":"66","continent":"AS","capital":"Bangkok","currency":"THB","languages":["th"],"emoji":"\uD83C\uDDF9\uD83C\uDDED","emojiU":"U+1F1F9 U+1F1ED"},"TJ":{"name":"Tajikistan","native":"Тоҷикистон","phone":"992","continent":"AS","capital":"Dushanbe","currency":"TJS","languages":["tg","ru"],"emoji":"\uD83C\uDDF9\uD83C\uDDEF","emojiU":"U+1F1F9 U+1F1EF"},"TK":{"name":"Tokelau","native":"Tokelau","phone":"690","continent":"OC","capital":"Fakaofo","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDF0","emojiU":"U+1F1F9 U+1F1F0"},"TL":{"name":"East Timor","native":"Timor-Leste","phone":"670","continent":"OC","capital":"Dili","currency":"USD","languages":["pt"],"emoji":"\uD83C\uDDF9\uD83C\uDDF1","emojiU":"U+1F1F9 U+1F1F1"},"TM":{"name":"Turkmenistan","native":"Türkmenistan","phone":"993","continent":"AS","capital":"Ashgabat","currency":"TMT","languages":["tk","ru"],"emoji":"\uD83C\uDDF9\uD83C\uDDF2","emojiU":"U+1F1F9 U+1F1F2"},"TN":{"name":"Tunisia","native":"تونس","phone":"216","continent":"AF","capital":"Tunis","currency":"TND","languages":["ar"],"emoji":"\uD83C\uDDF9\uD83C\uDDF3","emojiU":"U+1F1F9 U+1F1F3"},"TO":{"name":"Tonga","native":"Tonga","phone":"676","continent":"OC","capital":"Nuku\'alofa","currency":"TOP","languages":["en","to"],"emoji":"\uD83C\uDDF9\uD83C\uDDF4","emojiU":"U+1F1F9 U+1F1F4"},"TR":{"name":"Turkey","native":"Türkiye","phone":"90","continent":"AS","capital":"Ankara","currency":"TRY","languages":["tr"],"emoji":"\uD83C\uDDF9\uD83C\uDDF7","emojiU":"U+1F1F9 U+1F1F7"},"TT":{"name":"Trinidad and Tobago","native":"Trinidad and Tobago","phone":"1868","continent":"NA","capital":"Port of Spain","currency":"TTD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDF9","emojiU":"U+1F1F9 U+1F1F9"},"TV":{"name":"Tuvalu","native":"Tuvalu","phone":"688","continent":"OC","capital":"Funafuti","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDFB","emojiU":"U+1F1F9 U+1F1FB"},"TW":{"name":"Taiwan","native":"臺灣","phone":"886","continent":"AS","capital":"Taipei","currency":"TWD","languages":["zh"],"emoji":"\uD83C\uDDF9\uD83C\uDDFC","emojiU":"U+1F1F9 U+1F1FC"},"TZ":{"name":"Tanzania","native":"Tanzania","phone":"255","continent":"AF","capital":"Dodoma","currency":"TZS","languages":["sw","en"],"emoji":"\uD83C\uDDF9\uD83C\uDDFF","emojiU":"U+1F1F9 U+1F1FF"},"UA":{"name":"Ukraine","native":"Україна","phone":"380","continent":"EU","capital":"Kyiv","currency":"UAH","languages":["uk"],"emoji":"\uD83C\uDDFA\uD83C\uDDE6","emojiU":"U+1F1FA U+1F1E6"},"UG":{"name":"Uganda","native":"Uganda","phone":"256","continent":"AF","capital":"Kampala","currency":"UGX","languages":["en","sw"],"emoji":"\uD83C\uDDFA\uD83C\uDDEC","emojiU":"U+1F1FA U+1F1EC"},"UM":{"name":"U.S. Minor Outlying Islands","native":"United States Minor Outlying Islands","phone":"1","continent":"OC","capital":"","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFA\uD83C\uDDF2","emojiU":"U+1F1FA U+1F1F2"},"US":{"name":"United States","native":"United States","phone":"1","continent":"NA","capital":"Washington D.C.","currency":"USD,USN,USS","languages":["en"],"emoji":"\uD83C\uDDFA\uD83C\uDDF8","emojiU":"U+1F1FA U+1F1F8"},"UY":{"name":"Uruguay","native":"Uruguay","phone":"598","continent":"SA","capital":"Montevideo","currency":"UYI,UYU","languages":["es"],"emoji":"\uD83C\uDDFA\uD83C\uDDFE","emojiU":"U+1F1FA U+1F1FE"},"UZ":{"name":"Uzbekistan","native":"O\u2018zbekiston","phone":"998","continent":"AS","capital":"Tashkent","currency":"UZS","languages":["uz","ru"],"emoji":"\uD83C\uDDFA\uD83C\uDDFF","emojiU":"U+1F1FA U+1F1FF"},"VA":{"name":"Vatican City","native":"Vaticano","phone":"379","continent":"EU","capital":"Vatican City","currency":"EUR","languages":["it","la"],"emoji":"\uD83C\uDDFB\uD83C\uDDE6","emojiU":"U+1F1FB U+1F1E6"},"VC":{"name":"Saint Vincent and the Grenadines","native":"Saint Vincent and the Grenadines","phone":"1784","continent":"NA","capital":"Kingstown","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDE8","emojiU":"U+1F1FB U+1F1E8"},"VE":{"name":"Venezuela","native":"Venezuela","phone":"58","continent":"SA","capital":"Caracas","currency":"VES","languages":["es"],"emoji":"\uD83C\uDDFB\uD83C\uDDEA","emojiU":"U+1F1FB U+1F1EA"},"VG":{"name":"British Virgin Islands","native":"British Virgin Islands","phone":"1284","continent":"NA","capital":"Road Town","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDEC","emojiU":"U+1F1FB U+1F1EC"},"VI":{"name":"U.S. Virgin Islands","native":"United States Virgin Islands","phone":"1340","continent":"NA","capital":"Charlotte Amalie","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDEE","emojiU":"U+1F1FB U+1F1EE"},"VN":{"name":"Vietnam","native":"Việt Nam","phone":"84","continent":"AS","capital":"Hanoi","currency":"VND","languages":["vi"],"emoji":"\uD83C\uDDFB\uD83C\uDDF3","emojiU":"U+1F1FB U+1F1F3"},"VU":{"name":"Vanuatu","native":"Vanuatu","phone":"678","continent":"OC","capital":"Port Vila","currency":"VUV","languages":["bi","en","fr"],"emoji":"\uD83C\uDDFB\uD83C\uDDFA","emojiU":"U+1F1FB U+1F1FA"},"WF":{"name":"Wallis and Futuna","native":"Wallis et Futuna","phone":"681","continent":"OC","capital":"Mata-Utu","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDFC\uD83C\uDDEB","emojiU":"U+1F1FC U+1F1EB"},"WS":{"name":"Samoa","native":"Samoa","phone":"685","continent":"OC","capital":"Apia","currency":"WST","languages":["sm","en"],"emoji":"\uD83C\uDDFC\uD83C\uDDF8","emojiU":"U+1F1FC U+1F1F8"},"XK":{"name":"Kosovo","native":"Republika e Kosovës","phone":"377,381,383,386","continent":"EU","capital":"Pristina","currency":"EUR","languages":["sq","sr"],"emoji":"\uD83C\uDDFD\uD83C\uDDF0","emojiU":"U+1F1FD U+1F1F0"},"YE":{"name":"Yemen","native":"اليَمَن","phone":"967","continent":"AS","capital":"Sana\'a","currency":"YER","languages":["ar"],"emoji":"\uD83C\uDDFE\uD83C\uDDEA","emojiU":"U+1F1FE U+1F1EA"},"YT":{"name":"Mayotte","native":"Mayotte","phone":"262","continent":"AF","capital":"Mamoudzou","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDFE\uD83C\uDDF9","emojiU":"U+1F1FE U+1F1F9"},"ZA":{"name":"South Africa","native":"South Africa","phone":"27","continent":"AF","capital":"Pretoria","currency":"ZAR","languages":["af","en","nr","st","ss","tn","ts","ve","xh","zu"],"emoji":"\uD83C\uDDFF\uD83C\uDDE6","emojiU":"U+1F1FF U+1F1E6"},"ZM":{"name":"Zambia","native":"Zambia","phone":"260","continent":"AF","capital":"Lusaka","currency":"ZMW","languages":["en"],"emoji":"\uD83C\uDDFF\uD83C\uDDF2","emojiU":"U+1F1FF U+1F1F2"},"ZW":{"name":"Zimbabwe","native":"Zimbabwe","phone":"263","continent":"AF","capital":"Harare","currency":"USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY","languages":["en","sn","nd"],"emoji":"\uD83C\uDDFF\uD83C\uDDFC","emojiU":"U+1F1FF U+1F1FC"}}');
        },
        function(d) {
            d.exports = JSON.parse('{"af":{"name":"Afrikaans","native":"Afrikaans"},"am":{"name":"Amharic","native":"አማርኛ"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bi":{"name":"Bislama","native":"Bislama"},"bn":{"name":"Bengali","native":"বাংলা"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ch":{"name":"Chamorro","native":"Chamoru"},"cs":{"name":"Czech","native":"Čeština"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང\u0F0Bཁ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"ga":{"name":"Irish","native":"Gaeilge"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gv":{"name":"Manx","native":"Gaelg"},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"ja":{"name":"Japanese","native":"日本語"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"ko":{"name":"Korean","native":"한국어"},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"mn":{"name":"Mongolian","native":"Монгол"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sg":{"name":"Sango","native":"Sängö"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"xh":{"name":"Xhosa","native":"isiXhosa"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}');
        },
        function(d) {
            d.exports = JSON.parse('{"aa":{"name":"Afar","native":"Afar"},"ab":{"name":"Abkhazian","native":"Аҧсуа"},"af":{"name":"Afrikaans","native":"Afrikaans"},"ak":{"name":"Akan","native":"Akana"},"am":{"name":"Amharic","native":"አማርኛ"},"an":{"name":"Aragonese","native":"Aragonés"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"as":{"name":"Assamese","native":"অসমীয়া"},"av":{"name":"Avar","native":"Авар"},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"ba":{"name":"Bashkir","native":"Башҡорт"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bh":{"name":"Bihari","native":"भोजपुरी"},"bi":{"name":"Bislama","native":"Bislama"},"bm":{"name":"Bambara","native":"Bamanankan"},"bn":{"name":"Bengali","native":"বাংলা"},"bo":{"name":"Tibetan","native":"བོད\u0F0Bཡིག / Bod skad"},"br":{"name":"Breton","native":"Brezhoneg"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ce":{"name":"Chechen","native":"Нохчийн"},"ch":{"name":"Chamorro","native":"Chamoru"},"co":{"name":"Corsican","native":"Corsu"},"cr":{"name":"Cree","native":"Nehiyaw"},"cs":{"name":"Czech","native":"Čeština"},"cu":{"name":"Old Church Slavonic / Old Bulgarian","native":"словѣньскъ / slověnĭskŭ"},"cv":{"name":"Chuvash","native":"Чăваш"},"cy":{"name":"Welsh","native":"Cymraeg"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང\u0F0Bཁ"},"ee":{"name":"Ewe","native":"Ɛʋɛ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"eo":{"name":"Esperanto","native":"Esperanto"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"fy":{"name":"West Frisian","native":"Frysk"},"ga":{"name":"Irish","native":"Gaeilge"},"gd":{"name":"Scottish Gaelic","native":"Gàidhlig"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gu":{"name":"Gujarati","native":"ગુજરાતી"},"gv":{"name":"Manx","native":"Gaelg"},"ha":{"name":"Hausa","native":"هَوُسَ","rtl":1},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"ho":{"name":"Hiri Motu","native":"Hiri Motu"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"hz":{"name":"Herero","native":"Otsiherero"},"ia":{"name":"Interlingua","native":"Interlingua"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"ie":{"name":"Interlingue","native":"Interlingue"},"ig":{"name":"Igbo","native":"Igbo"},"ii":{"name":"Sichuan Yi","native":"ꆇꉙ / 四川彝语"},"ik":{"name":"Inupiak","native":"Iñupiak"},"io":{"name":"Ido","native":"Ido"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"iu":{"name":"Inuktitut","native":"ᐃᓄᒃᑎᑐᑦ"},"ja":{"name":"Japanese","native":"日本語"},"jv":{"name":"Javanese","native":"Basa Jawa"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"ki":{"name":"Kikuyu","native":"Gĩkũyũ"},"kj":{"name":"Kuanyama","native":"Kuanyama"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"kn":{"name":"Kannada","native":"ಕನ್ನಡ"},"ko":{"name":"Korean","native":"한국어"},"kr":{"name":"Kanuri","native":"Kanuri"},"ks":{"name":"Kashmiri","native":"कश्मीरी / كشميري","rtl":1},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"kv":{"name":"Komi","native":"Коми"},"kw":{"name":"Cornish","native":"Kernewek"},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"lg":{"name":"Ganda","native":"Luganda"},"li":{"name":"Limburgian","native":"Limburgs"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"ml":{"name":"Malayalam","native":"മലയാളം"},"mn":{"name":"Mongolian","native":"Монгол"},"mo":{"name":"Moldovan","native":"Moldovenească"},"mr":{"name":"Marathi","native":"मराठी"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"ng":{"name":"Ndonga","native":"Oshiwambo"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"nv":{"name":"Navajo","native":"Diné bizaad"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"oj":{"name":"Ojibwa","native":"ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"},"om":{"name":"Oromo","native":"Oromoo"},"or":{"name":"Oriya","native":"ଓଡ଼ିଆ"},"os":{"name":"Ossetian / Ossetic","native":"Иронау"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pi":{"name":"Pali","native":"Pāli / पाऴि"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rm":{"name":"Raeto Romance","native":"Rumantsch"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sa":{"name":"Sanskrit","native":"संस्कृतम्"},"sc":{"name":"Sardinian","native":"Sardu"},"sd":{"name":"Sindhi","native":"सिनधि"},"se":{"name":"Northern Sami","native":"Sámegiella"},"sg":{"name":"Sango","native":"Sängö"},"sh":{"name":"Serbo-Croatian","native":"Srpskohrvatski / Српскохрватски"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"su":{"name":"Sundanese","native":"Basa Sunda"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"te":{"name":"Telugu","native":"తెలుగు"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tl":{"name":"Tagalog / Filipino","native":"Tagalog"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"tt":{"name":"Tatar","native":"Tatarça"},"tw":{"name":"Twi","native":"Twi"},"ty":{"name":"Tahitian","native":"Reo Mā`ohi"},"ug":{"name":"Uyghur","native":"Uyƣurqə / ئۇيغۇرچە"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"vo":{"name":"Volapük","native":"Volapük"},"wa":{"name":"Walloon","native":"Walon"},"wo":{"name":"Wolof","native":"Wollof"},"xh":{"name":"Xhosa","native":"isiXhosa"},"yi":{"name":"Yiddish","native":"ייִדיש","rtl":1},"yo":{"name":"Yoruba","native":"Yorùbá"},"za":{"name":"Zhuang","native":"Cuengh / Tôô / 壮语"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}');
        },
        function(d, e, f) {
            (function(g, h) {
                var i;

                function j(k) {
                    return (j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(l) {
                        return typeof l;
                    } : function(l) {
                        return l && 'function' == typeof Symbol && l.constructor === Symbol && l !== Symbol.prototype ? 'symbol' : typeof l;
                    })(k);
                }! function(j) {
                    var k = 'object' == _C(e) && e && !e.nodeType && e,
                        l = 'object' == _C(g) && g && !g.nodeType && g,
                        m = 'object' == (void 0 === h ? 'undefined' : _C(h)) && h;
                    m.global !== m && m.window !== m && m.self !== m || (j = m);
                    var n, o, p = 2147483647,
                        q = /^xn--/,
                        r = /[^\x20-\x7E]/,
                        s = /[\x2E\u3002\uFF0E\uFF61]/g,
                        t = {
                            overflow: 'Overflow: input needs wider integers to process',
                            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                            'invalid-input': 'Invalid input'
                        },
                        u = Math.floor,
                        v = String.fromCharCode;

                    function w(x) {
                        throw new RangeError(t[x]);
                    }

                    function w(x, y) {
                        for (var z = x.length, A = []; z--;)
                            A[z] = y(x[z]);
                        return A;
                    }

                    function w(x, y) {
                        var z = x.split('@'),
                            A = '';
                        return z.length > 1 && (A = z[0] + '@', x = z[1]), A + _N((x = x.replace(s, '.')).split('.'), y).join('.');
                    }

                    function w(x) {
                        for (var y, z, A = [], B = 0, _C = x.length; B < _C;)
                            (y = x.charCodeAt(B++)) >= 55296 && y <= 56319 && B < _C ? 56320 == (64512 & (z = x.charCodeAt(B++))) ? A.push(((1023 & y) << 10) + (1023 & z) + 65536) : (A.push(y), B--) : A.push(y);
                        return A;
                    }

                    function w(x) {
                        return _N(x, function(y) {
                            var z = '';
                            return y > 65535 && (z += v((y -= 65536) >>> 10 & 1023 | 55296), y = 56320 | 1023 & y), z + v(y);
                        }).join('');
                    }

                    function w(x, y) {
                        return x + 22 + 75 * (x < 26) - ((0 != y) << 5);
                    }

                    function w(x, y, z) {
                        var A = 0;
                        for (x = z ? u(x / 700) : x >> 1, x += u(x / y); x > 455; A += 36)
                            x = u(x / 35);
                        return u(A + 36 * x / (x + 38));
                    }

                    function w(x) {
                        var y, z, A, B, C, D, E, F, G, H, I, J = [],
                            K = x.length,
                            L = 0,
                            M = 128,
                            N = 72;
                        for ((z = x.lastIndexOf('-')) < 0 && (z = 0), A = 0; A < z; ++A)
                            x.charCodeAt(A) >= 128 && f('not-basic'), J.push(x.charCodeAt(A));
                        for (B = z > 0 ? z + 1 : 0; B < K;) {
                            for (C = L, D = 1, E = 36; B >= K && f('invalid-input'), ((F = (I = x.charCodeAt(B++)) - 48 < 10 ? I - 22 : I - 65 < 26 ? I - 65 : I - 97 < 26 ? I - 97 : 36) >= 36 || F > u((p - L) / D)) && f('overflow'), L += F * D, !(F < (G = E <= N ? 1 : E >= N + 26 ? 26 : E - N)); E += 36)
                                D > u(p / (H = 36 - G)) && f('overflow'), D *= H;
                            N = b(L - C, y = J.length + 1, 0 == C), u(L / y) > p - M && f('overflow'), M += u(L / y), L %= y, J.splice(L++, 0, M);
                        }
                        return S(J);
                    }

                    function w(x) {
                        var y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, _N = [];
                        for (J = (x = E(x)).length, y = 128, z = 0, C = 72, D = 0; D < J; ++D)
                            (I = x[D]) < 128 && _N.push(v(I));
                        for (A = B = _N.length, B && _N.push('-'); A < J;) {
                            for (E = p, D = 0; D < J; ++D)
                                (I = x[D]) >= y && I < E && (E = I);
                            for (E - y > u((p - z) / (K = A + 1)) && f('overflow'), z += (E - y) * K, y = E, D = 0; D < J; ++D)
                                if ((I = x[D]) < y && ++z > p && f('overflow'), I == y) {
                                    for (F = z, G = 36; !(F < (H = G <= C ? 1 : G >= C + 26 ? 26 : G - C)); G += 36)
                                        M = F - H, L = 36 - H, _N.push(v(A(H + M % L, 0))), F = u(M / L);
                                    _N.push(v(A(F, 0))), C = b(z, K, A == B), z = 0, ++A;
                                }
                                ++ z, ++y;
                        }
                        return _N.join('');
                    }
                    if (n = {
                            version: '1.4.1',
                            ucs2: {
                                decode: E,
                                encode: S
                            },
                            decode: C,
                            encode: N,
                            toASCII: function(w) {
                                return j(w, function(x) {
                                    return r.test(x) ? 'xn--' + N(x) : x;
                                });
                            },
                            toUnicode: function(w) {
                                return j(w, function(x) {
                                    return q.test(x) ? C(x.slice(4).toLowerCase()) : x;
                                });
                            }
                        }, 'object' == _e(f(0)) && f(0))
                        void 0 === (i = function() {
                            return n;
                        }.call(e, f, e, g)) || (g.exports = i);
                    else if (k && l)
                        if (g.exports == k)
                            l.exports = n;
                        else
                            for (o in n)
                                n.hasOwnProperty(o) && (k[o] = n[o]);
                    else
                        j.punycode = n;
                }(this);
            }.call(this, f(7)(d), f(8)));
        },
        function(d, e) {
            d.exports = function(f) {
                return f.webpackPolyfill || (f.deprecate = function() {}, f.paths = [], f.children || (f.children = []), Object.defineProperty(f, 'loaded', {
                    enumerable: !0,
                    get: function() {
                        return f.l;
                    }
                }), Object.defineProperty(f, 'id', {
                    enumerable: !0,
                    get: function() {
                        return f.i;
                    }
                }), f.webpackPolyfill = 1), f;
            };
        },
        function(d, e) {
            function f(g) {
                return (f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(h) {
                    return typeof h;
                } : function(h) {
                    return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
                })(g);
            }
            var f;
            f = function() {
                return this;
            }();
            try {
                f = f || new Function('return this')();
            } catch (d) {
                'object' === ('undefined' == typeof window ? 'undefined' : _b(window)) && (f = window);
            }
            d.exports = f;
        }
    ]);
}), a.register('HHk7T', function(_b, c) {
    _q(_b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = a('oXQNI'),
        f = a('b5kvC'),
        g = a('sHRDd');
    var _h = _q => (0, d.jsx)(_e.default, {
        hoverable: !0,
        style: {
            marginBottom: 10
        },
        onClick: _q.onSelect,
        children: (0, d.jsxs)('div', {
            style: {
                fontFamily: f.Fonts.SFPro,
                color: g.default.Black
            },
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 18,
                        fontWeight: f.FontWeights.Bold
                    },
                    children: _q.name
                }),
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 14
                    },
                    children: _q.description
                })
            ]
        })
    });
}), a.register('ZBY0K1', function(b, c) {
    _q(b.exports, 'optionsForAreaOfExpertise', function() {
        return _n;
    }), _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('d1g2b2'),
        g = a('fmVdR'),
        h = a('inwN3'),
        i = a('pYmyT1'),
        j = a('NmrDs1'),
        k = a('Hi0/F0'),
        l = a('XQD071'),
        m = a('gs4MT');
    const _n = [
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
        o = [
            'Pre-K',
            'Elementary School',
            'Middle School',
            'High School',
            'Post High School',
            'Other School',
            'Not Using For School',
            'Other'
        ];
    var _p = () => {
        const {
            login: _q
        } = e.useContext(j.default), [r, s] = e.useState(''), [t, u] = e.useState(''), v = !r || !t;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(f.Title, {
                    children: '\uD83D\uDCA1 Area of Expertise'
                }),
                (0, d.jsx)(h.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: _q => s(_q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: _n.map(_q => ({
                        value: _q,
                        label: _q
                    }))
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(f.Title, {
                    children: '\uD83C\uDF82 Grade Level'
                }),
                (0, d.jsx)(h.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: _q => u(_q),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: o.map(_q => ({
                        value: _q,
                        label: _q
                    }))
                }),
                (0, d.jsx)(i.default, {
                    size: 'large',
                    style: {
                        marginTop: 10
                    },
                    disabled: v,
                    onClick: () => {
                        v || (_q.areaOfExpertise = r, _q.gradeLevel = t, _q.informationNeeded.replace(_q.informationNeeded.filter(_q => _q !== k.informationTypes.areaOfExpertise && _q !== k.informationTypes.gradeLevel)));
                    },
                    children: 'Continue'
                }),
                (0, d.jsx)(g.default, {}),
                (0, d.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        'By continuing, you agree to our',
                        ' ',
                        (0, d.jsx)('a', {
                            href: m.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        'and',
                        ' ',
                        (0, d.jsx)('a', {
                            href: m.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        '.'
                    ]
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 25
                    }
                }),
                (0, d.jsx)(l.default, {
                    link: 'https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52'
                })
            ]
        });
    };
}), a.register('Xbj5y', function(b, c) {
    _o(b.exports, 'default', function() {
        return _n;
    });
    var d = a('ha/3p1'),
        e = a('PMl60'),
        f = a('INKb2'),
        g = a('gs4MT'),
        h = a('YRlpt'),
        i = a('Hi0/F0'),
        j = a('9twzo'),
        k = a('YuT/D'),
        l = a('jzxyj10'),
        m = a('9pj8y');
    var _n = () => {
        const {
            login: _o,
            navigation: p
        } = d.default, q = 'true' === (0, e.getUrlVariable)('blockRedirect'), r = () => {
            window && window.parent && window.parent.postMessage && window.parent.postMessage({
                type: '_authenticated_',
                user: (0, k.toJS)((0, e.getUser)())
            }, m.inProductionOrStaging ? (0, e.getDomain)() : '*');
        };
        if (_o.userExists) {
            const s = () => {
                const t = {
                    email: _o.email,
                    password: _o.password,
                    googleToken: _o.googleToken
                };
                p.loggingIn = !0, (0, e.request)({
                    url: '/api/login',
                    method: 'post',
                    data: t,
                    success: p => {
                        if (j.default.user.setUser(p.user, !0), _o.authenticated = !0, p.modal && p.modal.type && h.default[p.modal.type]({
                                title: 'Account Information',
                                content: p.modal.message
                            }), p.informationNeeded.length)
                            _o.informationNeeded.replace([
                                ..._o.informationNeeded,
                                ...p.informationNeeded
                            ]);
                        else {
                            let u = d.default.navigation.redirectUri;
                            u || (u = g.DASHBOARD), u.includes('logout') && (u = g.DASHBOARD), q ? r() : (0, l.NavigateTo)(u);
                        }
                    },
                    error: _o => {
                        d.default.navigation.loginError = _o, d.default.login.password ? d.default.login.informationNeeded.replace([
                            ...d.default.login.informationNeeded,
                            i.informationTypes.password
                        ]) : d.default.login.informationNeeded.replace([
                            ...d.default.login.informationNeeded,
                            i.informationTypes.email
                        ]);
                    },
                    both: () => d.default.navigation.loggingIn = !1
                });
            };
            if (_o.authenticated) {
                const t = (() => {
                    const {
                        login: u
                    } = d.default, v = Object.keys(u), w = [];
                    return v.forEach(v => {
                        const x = u[v];
                        '' !== x && null != x && ('accountType' === v && w.push({
                            key: i.informationTypes.accountType,
                            value: x
                        }), 'firstName' === v && w.push({
                            key: i.informationTypes.firstName,
                            value: x
                        }), 'lastName' === v && w.push({
                            key: i.informationTypes.lastName,
                            value: x
                        }), 'schoolId' === v && w.push({
                            key: i.informationTypes.schoolId,
                            value: x
                        }), 'districtId' === v && w.push({
                            key: i.informationTypes.districtId,
                            value: x
                        }), 'country' === v && w.push({
                            key: i.informationTypes.country,
                            value: x
                        }), 'areaOfExpertise' === v && w.push({
                            key: i.informationTypes.areaOfExpertise,
                            value: x
                        }), 'gradeLevel' === v && w.push({
                            key: i.informationTypes.gradeLevel,
                            value: x
                        }), 'acceptsLatestPolicies' === v && w.push({
                            key: i.informationTypes.acceptedLatestPolicies,
                            value: x
                        }), 'organization' === v && w.push({
                            key: i.informationTypes.organization,
                            value: x
                        }));
                    }), w;
                })();
                t && t.length ? (d.default.navigation.updatingAccountInformation = !0, (0, e.request)({
                    url: '/api/users/update-information',
                    method: 'post',
                    data: {
                        changes: t
                    },
                    success: () => {
                        s();
                    },
                    error: () => {
                        d.default.navigation.updatingAccountInformation = !1, (0, f.throwError)({
                            title: 'Error updating account information',
                            content: 'Please contact support.'
                        });
                    }
                })) : s();
            } else
                s();
        } else {
            const s = {
                firstName: _o.firstName,
                lastName: _o.lastName,
                email: _o.email,
                googleToken: _o.googleToken,
                password: _o.password,
                accountType: _o.accountType,
                country: _o.country,
                schoolId: _o.schoolId,
                districtId: _o.districtId,
                areaOfExpertise: _o.areaOfExpertise,
                organization: _o.organization,
                gradeLevel: _o.gradeLevel,
                groupJoining: p.classJoiningId
            };
            if (d.default.navigation.creatingAccount)
                return;
            d.default.navigation.creatingAccount = !0, (0, e.request)({
                url: '/api/register',
                method: 'post',
                data: s,
                success: _o => {
                    sessionStorage.setItem('NEW_USER', 'YES'), j.default.user.setUser(_o, !0);
                    let t = d.default.navigation.redirectUri;
                    t || (t = g.DASHBOARD), q ? r() : (0, l.NavigateTo)(t);
                },
                error: _o => {
                    (0, e.throwMessageError)({
                        e: _o,
                        default: {
                            title: 'Error creating account',
                            content: 'Please try again later'
                        },
                        onOk: () => window.location.reload()
                    });
                },
                both: () => d.default.navigation.creatingAccount = !1
            });
        }
    };
}), a.register('jzxyj10', function(b, c) {
    _n(b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _n => {
        d.history.push(_n);
    };
}), a.register('JSLjT', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('NmrDs1'),
        h = a('Hi0/F0'),
        i = a('sHRDd'),
        j = a('b5kvC'),
        k = a('pYmyT1'),
        l = a('gs4MT');
    var _m = (0, f.observer)(() => {
        const {
            login: _n
        } = e.useContext(g.default);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        color: i.default.Black,
                        fontWeight: j.FontWeights.Normal,
                        fontSize: 19
                    },
                    children: [
                        'We\'ve updated our',
                        ' ',
                        (0, d.jsx)('a', {
                            href: l.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        ' ',
                        '&',
                        ' ',
                        (0, d.jsx)('a', {
                            href: l.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        '.'
                    ]
                }),
                (0, d.jsx)(k.default, {
                    style: {
                        marginTop: 5
                    },
                    size: 'large',
                    onClick: () => {
                        _n.acceptsLatestPolicies = !0, _n.informationNeeded.replace(_n.informationNeeded.filter(_n => _n !== h.informationTypes.acceptedLatestPolicies));
                    },
                    children: 'I Agree'
                })
            ]
        });
    });
}), a.register('Ax1l3', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('d1g2b2'),
        g = a('ewwAh'),
        h = a('pYmyT1'),
        i = a('NmrDs1'),
        j = a('Hi0/F0'),
        k = a('XQD071');
    var _l = () => {
        const [_m, n] = e.useState(''), {
            login: o
        } = e.useContext(i.default), p = () => {
            o.organization = _m, o.informationNeeded.replace(o.informationNeeded.filter(_m => _m !== j.informationTypes.organization));
        };
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(f.Title, {
                    children: 'Organization (optional)'
                }),
                (0, d.jsx)(g.default, {
                    size: 'large',
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Gimkit Productions...',
                    onChange: _m => {
                        n(_m.target.value);
                    },
                    onPressEnter: p,
                    autoFocus: !0
                }),
                (0, d.jsx)(h.default, {
                    onClick: p,
                    style: {
                        marginTop: 5,
                        width: '100%'
                    },
                    children: 'Continue'
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsx)(k.default, {
                    link: 'https://www.notion.so/gimkit/Organization-0931f4ca9b48423c97663801d8b95387'
                })
            ]
        });
    };
}), a.register('cSE7h0', function(b, c) {
    _h(b.exports, 'IsURLFromUs', function() {
        return _d;
    });
    const _d = _h => _h.startsWith(window.location.origin) || _h.startsWith('/');
}), a.register('kRwUk25', function(b, c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('TTc70'),
        e = a('LEQ5w'),
        f = a('1P5ls');

    function _g(_h, i, j) {
        return function(k) {
            const {
                prefixCls: l,
                style: m
            } = k, n = e.useRef(null), [o, p] = e.useState(0), [q, r] = e.useState(0), [s, t] = (0, d.default)(!1, {
                value: k.open
            }), {
                getPrefixCls: u
            } = e.useContext(f.ConfigContext), v = u(i || 'select', l);
            return e.useEffect(() => {
                if (t(!0), 'undefined' != typeof ResizeObserver) {
                    const w = new ResizeObserver(w => {
                            const x = w[0].target;
                            p(x.offsetHeight + 8), r(x.offsetWidth);
                        }),
                        x = setInterval(() => {
                            var y;
                            const z = j ? `.${ j(v) }` : `.${ v }-dropdown`,
                                A = null === (y = n.current) || void 0 === y ? void 0 : y.querySelector(z);
                            A && (clearInterval(x), w.observe(A));
                        }, 10);
                    return () => {
                        clearInterval(x), w.disconnect();
                    };
                }
            }, []), e.createElement(f.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, e.createElement('div', {
                ref: n,
                style: {
                    paddingBottom: o,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: q
                }
            }, e.createElement(_h, Object.assign({}, k, {
                style: Object.assign(Object.assign({}, m), {
                    margin: 0
                }),
                open: s,
                visible: s,
                getPopupContainer: () => n.current
            }))));
        };
    }
}), a.register('N9LXh20', function(b, c) {
    _i(b.exports, 'initMoveMotion', function() {
        return _m;
    });
    var d = a('wC0DT'),
        e = a('4vKB9');
    const f = new(0, d.Keyframes)('antMoveDownIn', {
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
        g = new(0, d.Keyframes)('antMoveDownOut', {
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
        h = new(0, d.Keyframes)('antMoveLeftIn', {
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
        i = new(0, d.Keyframes)('antMoveLeftOut', {
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
        j = new(0, d.Keyframes)('antMoveRightIn', {
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
        k = new(0, d.Keyframes)('antMoveRightOut', {
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
        l = {
            'move-up': {
                inKeyframes: new(0, d.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, d.Keyframes)('antMoveUpOut', {
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
                inKeyframes: f,
                outKeyframes: g
            },
            'move-left': {
                inKeyframes: h,
                outKeyframes: i
            },
            'move-right': {
                inKeyframes: j,
                outKeyframes: k
            }
        },
        _m = (_i, a) => {
            const {
                antCls: n
            } = _i, o = `${ n }-${ a }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[a];
            return [
                (0, e.initMotion)(o, p, q, _i.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _i.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _i.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('CJCpN', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('v47zB'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var _i = e.forwardRef(h);
}), a.register('v47zB', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('pMmde1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('+bIFH'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var _i = e.forwardRef(h);
}), a.register('+bIFH', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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
}), a.register('uvADe0', function(b, c) {
    e(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('NIZyA');
    var _f = e => e.error ? (0, d.jsx)(e.default, {
        message: 'Error',
        style: e.style,
        type: 'error',
        description: e.error && e.error.message && e.error.message.text ? e.error.message.text : 'string' == typeof e.error ? e.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
});