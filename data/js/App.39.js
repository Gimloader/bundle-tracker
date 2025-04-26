function a(a, b, t, u) {
    Object.defineProperty(a, b, {
        get: t,
        set: u,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('npGGV', function(t, u) {
    var c;
    c = t.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(t.exports, 'default', function() {
        return q;
    });
    var d = b('8kSQZ'),
        e = b('uPP4W'),
        f = b('/rcVD4'),
        g = b('J7Y504'),
        h = b('h99Nu'),
        i = b('qeW9j'),
        j = b('PjB0f'),
        k = b('q721a'),
        l = b('pvZv3'),
        m = b('KzqIz'),
        n = b('k0s2g17'),
        o = b('Fe7J9');
    let p;
    var q = () => {
        const [r, s] = e.useState(!1), t = (0, m.useLocation)(), u = new URLSearchParams(t.search).get('accountType'), v = (0, j.getUrlVariable)('class');
        return u && l.default[u] && (g.default.login.accountType = l.default[u]), e.useEffect(() => {
            g.default.navigation.redirectUri = '';
            let w = (0, j.getUrlVariable)('location') ? decodeURIComponent((0, j.getUrlVariable)('location')) : '';
            w && !(0, o.IsURLFromUs)(w) && (w = '');
            const x = () => {
                g.default.navigation.reset(), g.default.login.reset();
            };
            return w && (g.default.navigation.redirectUri = w), (0, j.isLoggedIn)() ? ((0, n.NavigateTo)(w || k.DASHBOARD), x) : (window.location.href.includes('login') && s(!0), x);
        }, []), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(j.Title, {
                    title: v ? 'Join Class' : r ? 'Login' : 'Sign Up'
                }),
                (0, d.jsx)(f.default.Provider, {
                    value: g.default,
                    children: (0, d.jsx)(r, {
                        children: (0, d.jsx)(i.default, {})
                    })
                })
            ]
        });
    };
    const r = h.default.div(p || (p = (a => a)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`));
}), b.register('/rcVD4', function(D, c) {
    a(D.exports, 'default', function() {
        return e;
    });
    var c = b('uPP4W'),
        d = b('J7Y504');
    var e = c.createContext(d.default);
}), b.register('J7Y504', function(D, c) {
    a(D.exports, 'default', function() {
        return e;
    });
    var c = b('MHioT3'),
        d = b('Ek+Wy4');
    var e = {
        login: new(0, c.default)(),
        navigation: new(0, d.default)()
    };
}), b.register('MHioT3', function(D, c) {
    a(D.exports, 'informationTypes', function() {
        return e;
    }), a(D.exports, 'default', function() {
        return x;
    });
    var c = b('6gioo'),
        d = b('UnUp5');
    const e = {
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
        f = {
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
            userExists: g,
            email: h,
            accountType: i,
            googleToken: j,
            firstName: k,
            lastName: l,
            password: m,
            schoolId: n,
            districtId: o,
            country: p,
            areaOfExpertise: q,
            gradeLevel: r,
            organization: s,
            acceptsLatestPolicies: t,
            authenticated: u
        } = v;
    class w {
        constructor() {
            this.userExists = g, this.email = h, this.accountType = i, this.googleToken = j, this.firstName = k, this.lastName = l, this.password = m, this.schoolId = n, this.districtId = o, this.country = p, this.areaOfExpertise = q, this.gradeLevel = r, this.organization = s, this.acceptsLatestPolicies = t, this.authenticated = u, this.informationNeeded = d.observable.array([e.email]), this.reset = () => {
                Object.keys(v).forEach(a => this[a] = v[a]), this.informationNeeded.replace([e.email]);
            }, (0, d.makeObservable)(this);
        }
    }
    (0, c.__decorate)([d.observable], w.prototype, 'userExists', void 0), (0, c.__decorate)([d.observable], w.prototype, 'email', void 0), (0, c.__decorate)([d.observable], w.prototype, 'accountType', void 0), (0, c.__decorate)([d.observable], w.prototype, 'googleToken', void 0), (0, c.__decorate)([d.observable], w.prototype, 'firstName', void 0), (0, c.__decorate)([d.observable], w.prototype, 'lastName', void 0), (0, c.__decorate)([d.observable], w.prototype, 'password', void 0), (0, c.__decorate)([d.observable], w.prototype, 'schoolId', void 0), (0, c.__decorate)([d.observable], w.prototype, 'districtId', void 0), (0, c.__decorate)([d.observable], w.prototype, 'country', void 0), (0, c.__decorate)([d.observable], w.prototype, 'areaOfExpertise', void 0), (0, c.__decorate)([d.observable], w.prototype, 'gradeLevel', void 0), (0, c.__decorate)([d.observable], w.prototype, 'organization', void 0), (0, c.__decorate)([d.observable], w.prototype, 'acceptsLatestPolicies', void 0), (0, c.__decorate)([d.observable], w.prototype, 'authenticated', void 0), (0, c.__decorate)([d.observable], w.prototype, 'informationNeeded', void 0), (0, c.__decorate)([d.action], w.prototype, 'reset', void 0);
    var x = y;
}), b.register('Ek+Wy4', function(D, c) {
    a(D.exports, 'default', function() {
        return r;
    });
    var c = b('6gioo'),
        d = b('UnUp5');
    const e = {
            currentStage: b('bDt8q4').default.email,
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
            currentStage: f,
            emailSignInBlocked: g,
            creatingAccount: h,
            loggingIn: i,
            updatingAccountInformation: j,
            loginError: k,
            redirectUri: l,
            classJoiningId: m,
            classJoiningName: n,
            classJoiningTeacherName: o
        } = p;
    class q {
        constructor() {
            this.currentStage = f, this.emailSignInBlocked = g, this.creatingAccount = h, this.loggingIn = i, this.updatingAccountInformation = j, this.loginError = k, this.redirectUri = l, this.classJoiningId = m, this.classJoiningName = n, this.classJoiningTeacherName = o, this.reset = () => {
                Object.keys(p).forEach(a => this[a] = p[a]);
            }, (0, d.makeObservable)(this);
        }
    }
    (0, c.__decorate)([d.observable], q.prototype, 'currentStage', void 0), (0, c.__decorate)([d.observable], q.prototype, 'emailSignInBlocked', void 0), (0, c.__decorate)([d.observable], q.prototype, 'creatingAccount', void 0), (0, c.__decorate)([d.observable], q.prototype, 'loggingIn', void 0), (0, c.__decorate)([d.observable], q.prototype, 'updatingAccountInformation', void 0), (0, c.__decorate)([d.observable], q.prototype, 'loginError', void 0), (0, c.__decorate)([d.observable], q.prototype, 'redirectUri', void 0), (0, c.__decorate)([d.observable], q.prototype, 'classJoiningId', void 0), (0, c.__decorate)([d.observable], q.prototype, 'classJoiningName', void 0), (0, c.__decorate)([d.observable], q.prototype, 'classJoiningTeacherName', void 0), (0, c.__decorate)([d.action], q.prototype, 'reset', void 0);
    var r = s;
}), b.register('bDt8q4', function(b, D) {
    let c;
    var d;
    a(b.exports, 'default', function() {
        return e;
    }), (d = c || (c = {})).email = 'email', d.password = 'password', d.accountType = 'accountType', d.studentSpecificInfo = 'studentSpecificInfo', d.nameAndPassword = 'nameAndPassword', d.school = 'school', d.educatorSpecificInfo = 'educatorSpecificInfo', d.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', d.acceptPolicies = 'acceptPolicies', d.verifyClass = 'verifyClass';
    var e = f;
}), b.register('qeW9j', function(D, E) {
    a(D.exports, 'default', function() {
        return A;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('Vlfxs'),
        f = b('h99Nu'),
        g = b('lmfrI'),
        h = b('yebqQ'),
        i = b('In3p4'),
        j = b('bDt8q4'),
        k = b('6jNxr'),
        l = b('Pt5cH'),
        m = b('3lPNr'),
        n = b('eMhMk1'),
        o = b('uDuHr'),
        p = b('/nFOP0'),
        q = b('/rcVD4'),
        r = b('hHU+F'),
        s = b('iHElh'),
        t = b('gSUVO'),
        u = b('Adkgx'),
        v = b('PjB0f'),
        w = b('+774S'),
        x = b('KBr/41'),
        y = b('k0s2g17');
    let z;
    var A = (0, e.observer)(() => {
        const {
            login: B,
            navigation: C
        } = d.useContext(q.default), {
            currentStage: D
        } = (0, h.default)(), [E, F] = d.useState(!0), [G, H] = d.useState(!1);
        d.useEffect(() => {
            B.informationNeeded.length || (0, r.default)();
        }, [B.informationNeeded.length]), d.useEffect(() => {
            (0, v.getUrlVariable)('pwr') && H(!0);
            const I = (0, v.getUrlVariable)('class');
            I ? (0, v.request)({
                url: `/api/v1/groups/details/${ I }`,
                success: E => {
                    C.classJoiningId = I, C.classJoiningName = E.groupName, C.classJoiningTeacherName = E.teacherName, B.accountType = x.default.student, C.redirectUri || (C.redirectUri = `/class/join/${ I }`), F(!1);
                },
                error: () => (0, y.NavigateTo)('/')
            }) : F(!1);
        }, []);
        return E ? (0, c.jsx)(B, {}) : (0, c.jsxs)(B, {
            children: [
                (0, c.jsx)(i.default, {
                    message: D === j.default.email && G ? 'Password changed successfully!' : ''
                }),
                (() => {
                    if (C.creatingAccount || C.loggingIn && !B.informationNeeded.length || C.updatingAccountInformation && !B.informationNeeded.length) {
                        const I = B.accountType === x.default.student;
                        return (0, c.jsxs)('div', {
                            className: 'flex hc vc maxWidth flex-column',
                            children: [
                                (0, c.jsx)(s.default, {
                                    size: 'large'
                                }),
                                (0, c.jsx)('div', {
                                    style: {
                                        marginTop: 5,
                                        fontWeight: t.FontWeights.Bold,
                                        color: g.default.Black,
                                        fontSize: 23
                                    },
                                    children: C.updatingAccountInformation || C.loggingIn ? C.classJoiningName ? 'Just a second...' : 'Logging you in...' : I ? 'Just a second....' : 'Creating your account...'
                                })
                            ]
                        });
                    }
                    return D === j.default.email ? (0, c.jsx)(k.default, {}) : D === j.default.password ? (0, c.jsx)(l.default, {}) : D === j.default.accountType ? (0, c.jsx)(m.default, {}) : D === j.default.nameAndPassword ? (0, c.jsx)(n.default, {}) : D === j.default.school ? (0, c.jsx)(o.default, {}) : D === j.default.educatorSpecificInfo ? (0, c.jsx)(p.default, {}) : D === j.default.acceptPolicies ? (0, c.jsx)(u.default, {}) : D === j.default.nonSchoolSpecificInfo ? (0, c.jsx)(w.default, {}) : null;
                })()
            ]
        });
    });
    const B = f.default.div.attrs({
        className: 'scroll-y'
    })(z || (z = (a => a)`
  width: 90%;
  max-width: 520px;
  padding: 20px;
  background: ${ 0 };
  border-radius: 7px;
  max-height: 90vh;
`), g.default.White);
}), b.register('yebqQ', function(t, u) {
    a(t.exports, 'default', function() {
        return f;
    });
    var c = b('bDt8q4'),
        d = b('J7Y504'),
        e = b('MHioT3');
    var f = () => {
        const {
            informationNeeded: g
        } = d.default.login, h = (g => g.includes(e.informationTypes.email) ? c.default.email : g.includes(e.informationTypes.password) ? c.default.password : g.includes(e.informationTypes.acceptedLatestPolicies) ? c.default.acceptPolicies : g.includes(e.informationTypes.accountType) ? c.default.accountType : g.includes(e.informationTypes.accountPassword) || g.includes(e.informationTypes.firstName) || g.includes(e.informationTypes.lastName) ? c.default.nameAndPassword : g.includes(e.informationTypes.country) ? c.default.school : g.includes(e.informationTypes.areaOfExpertise) || g.includes(e.informationTypes.gradeLevel) ? c.default.educatorSpecificInfo : g.includes(e.informationTypes.organization) ? c.default.nonSchoolSpecificInfo : null)(g);
        return {
            currentStage: h
        };
    };
}), b.register('In3p4', function(t, u) {
    a(t.exports, 'default', function() {
        return r;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('h99Nu'),
        f = b('bPH7V'),
        g = b('ExtIT'),
        h = b('KzqIz'),
        i = b('Vlfxs'),
        j = b('/rcVD4'),
        k = b('lmfrI'),
        l = b('gSUVO');
    let m, n, o, p, q = a => a;
    var r = (0, i.observer)(a => {
        const {
            navigation: s
        } = d.useContext(j.default), t = !!s.classJoiningName, u = t ? '/client/img/gimkitGIcon.svg' : '/client/img/svgLogo.svg', v = t ? 55 : 42;
        return (0, c.jsxs)(s, {
            children: [
                a.message && (0, c.jsx)(f.default, {
                    style: {
                        marginBottom: 5
                    },
                    message: a.message,
                    type: 'success',
                    showIcon: !0
                }),
                (0, c.jsx)(h.Link, {
                    to: '/',
                    children: (0, c.jsx)(t, {
                        style: {
                            height: v,
                            marginBottom: t ? 5 : 0
                        },
                        src: u
                    })
                }),
                s.classJoiningName ? (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(u, {
                            children: s.classJoiningName
                        }),
                        (0, c.jsx)(v, {
                            children: s.classJoiningTeacherName
                        })
                    ]
                }) : null,
                (0, c.jsx)(g.default, {})
            ]
        });
    });
    const s = e.default.div(m || (m = q`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`)),
        t = e.default.img(n || (n = q`
  margin-top: 11px;
`)),
        u = e.default.div(o || (o = q`
  color: ${ 0 };
  font-size: 28px;
  font-weight: ${ 0 };
`), k.default.Black, l.FontWeights.Bold),
        v = e.default.div(p || (p = q`
  color: rgba(0, 0, 0, 0.9);
  font-size: 15px;
`));
}), b.register('Pt5cH', function(q, r) {
    a(q.exports, 'default', function() {
        return n;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('gSUVO'),
        f = b('ExtIT'),
        g = b('c6x8w'),
        h = b('lmfrI'),
        i = b('+qN5a2'),
        j = b('MxXR+'),
        k = b('4xJGr'),
        l = b('/rcVD4'),
        m = b('MHioT3');
    var n = (0, b('Vlfxs').observer)(() => {
        const {
            login: o,
            navigation: p
        } = d.useContext(l.default), [q, r] = d.useState(''), [s, t] = d.useState(!1), u = !q, v = () => {
            u || p.loggingIn || (o.password = q, o.informationNeeded.replace(o.informationNeeded.filter(o => o !== m.informationTypes.password)));
        };
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)('div', {
                    style: {
                        fontWeight: e.FontWeights.Black,
                        fontSize: 24,
                        color: h.default.Black
                    },
                    children: 'Enter your password'
                }),
                (0, c.jsx)(g.default.Password, {
                    placeholder: 'Password',
                    size: 'large',
                    style: {
                        height: 40
                    },
                    autoFocus: !0,
                    onPressEnter: v,
                    onChange: o => {
                        p.loginError = null, r(o.target.value);
                    }
                }),
                (0, c.jsx)(i.default, {
                    onClick: v,
                    disabled: u,
                    style: {
                        width: '100%',
                        marginTop: 5
                    },
                    loading: p.loggingIn,
                    children: 'Login'
                }),
                (0, c.jsx)(k.default, {}),
                (0, c.jsx)(f.default, {}),
                (0, c.jsx)('div', {
                    onClick: () => t(!0),
                    style: {
                        cursor: 'pointer',
                        fontSize: 12
                    },
                    children: 'Forgot password?'
                }),
                (0, c.jsx)(j.default, {
                    open: s,
                    close: () => t(!1),
                    defaultEmail: o.email
                })
            ]
        });
    });
}), b.register('+qN5a2', function(v, w) {
    a(v.exports, 'default', function() {
        return f;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('Vlfxs'),
        e = b('IsmrL');
    var f = (0, d.observer)(a => (0, c.jsx)(e.default, {
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
}), b.register('3lPNr', function(v, w) {
    a(v.exports, 'default', function() {
        return s;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('Vlfxs'),
        f = b('gSUVO'),
        g = b('lmfrI'),
        h = b('h99Nu'),
        i = b('/rcVD4'),
        j = b('KBr/41'),
        k = b('MHioT3'),
        l = b('IsmrL'),
        m = b('CDq40'),
        n = b('q721a');
    let o, p, q = a => a;
    const r = a => (0, c.jsx)(u, {
        backgroundColor: a.background,
        onClick: a.handleSelect,
        children: a.children
    });
    var s = (0, e.observer)(() => {
        const [t, u] = d.useState(!0), {
            login: v
        } = d.useContext(i.default), w = () => v.informationNeeded.replace(v.informationNeeded.filter(t => t !== k.informationTypes.accountType)), x = () => v.googleToken || v.userExists ? [] : [
            k.informationTypes.firstName,
            k.informationTypes.lastName,
            k.informationTypes.accountPassword
        ], y = () => {
            v.accountType = j.default.educator, v.informationNeeded.replace([
                ...v.informationNeeded,
                ...x(),
                k.informationTypes.country,
                k.informationTypes.areaOfExpertise,
                k.informationTypes.gradeLevel
            ]), w();
        }, z = t => {
            v.accountType = j.default.student, v.informationNeeded.replace([
                ...v.informationNeeded,
                ...x()
            ]), w();
        };
        if (v.accountType)
            switch (v.accountType) {
                case j.default.educator:
                    y();
                    break;
                case j.default.guardian:
                    v.accountType = j.default.guardian, v.informationNeeded.replace([
                        ...v.informationNeeded,
                        ...x()
                    ]), w();
                    break;
                case j.default.nonSchool:
                    v.accountType = j.default.nonSchool, v.informationNeeded.replace([
                        ...v.informationNeeded,
                        ...x(),
                        k.informationTypes.organization
                    ]), w();
                    break;
                case j.default.student:
                    z();
            }
        return t ? (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)('div', {
                    style: {
                        fontWeight: f.FontWeights.Black,
                        fontSize: 29,
                        color: g.default.Black,
                        width: '100%',
                        textAlign: 'center',
                        marginBottom: 8
                    },
                    children: 'Select your account type...'
                }),
                (0, c.jsxs)(t, {
                    children: [
                        (0, c.jsxs)(r, {
                            handleSelect: y,
                            background: '#33691e',
                            children: [
                                (0, c.jsx)('div', {
                                    children: (0, c.jsx)('i', {
                                        className: 'fas fa-chalkboard-teacher'
                                    })
                                }),
                                'Educator'
                            ]
                        }),
                        (0, c.jsxs)(r, {
                            handleSelect: () => u(!1),
                            background: '#9E5F28',
                            children: [
                                (0, c.jsx)('div', {
                                    children: (0, c.jsx)('i', {
                                        className: 'fas fa-user'
                                    })
                                }),
                                'Student'
                            ]
                        })
                    ]
                })
            ]
        }) : (0, c.jsxs)('div', {
            children: [
                (0, c.jsxs)('div', {
                    style: {
                        fontSize: 18,
                        color: g.default.Black,
                        marginBottom: 20,
                        fontWeight: f.FontWeights.Bold
                    },
                    children: [
                        'I am at least 13 years of age (or 16+ outside the US) and agree to Gimkit\'s',
                        ' ',
                        (0, c.jsx)('a', {
                            href: n.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        '&',
                        ' ',
                        (0, c.jsx)('a', {
                            href: n.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms of Service'
                        }),
                        '.'
                    ]
                }),
                (0, c.jsx)(l.default, {
                    onClick: () => z(),
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
    const t = h.default.div(o || (o = q`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`)),
        u = h.default.div.attrs({
            className: 'flex-center flex-column light-shadow'
        })(p || (p = q`
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
`), f.FontWeights.Bold, g.default.White, a => a.backgroundColor, a => (0, m.lighten)(0.1, a.backgroundColor));
}), b.register('KBr/41', function(b, u) {
    let c;
    var d;
    a(b.exports, 'default', function() {
        return e;
    }), (d = c || (c = {})).educator = 'educator', d.student = 'student', d.guardian = 'guardian', d.nonSchool = 'nonSchool';
    var e = f;
}), b.register('eMhMk1', function(u, v) {
    a(u.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return n;
    }), a(u.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return o;
    }), a(u.exports, 'Title', function() {
        return p;
    }), a(u.exports, 'default', function() {
        return r;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('/rcVD4'),
        f = b('gSUVO'),
        g = b('lmfrI'),
        h = b('ExtIT'),
        i = b('c6x8w'),
        j = b('+qN5a2'),
        k = b('MHioT3'),
        l = b('PawcO1'),
        m = b('KBr/41');
    const n = 20,
        o = 25,
        p = a => (0, c.jsx)('div', {
            style: {
                fontFamily: f.Fonts.SFPro,
                fontWeight: f.FontWeights.Bold,
                color: g.default.Black,
                fontSize: 18
            },
            children: a.children
        }),
        q = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var r = () => {
        const {
            login: s
        } = d.useContext(e.default), [t, u] = d.useState(s.firstName), [v, w] = d.useState(s.lastName), [x, y] = d.useState(s.password), z = () => {
            let A = !0;
            return s.informationNeeded.includes(k.informationTypes.firstName) && (t || (A = !1)), s.informationNeeded.includes(k.informationTypes.lastName) && (v || (A = !1)), s.informationNeeded.includes(k.informationTypes.accountPassword) && (!x || x.length < 6) && (A = !1), A;
        }, A = () => {
            z() && (t && (s.firstName = t), v && (s.lastName = v), x && (s.password = x), s.informationNeeded.replace(s.informationNeeded.filter(s => s !== k.informationTypes.firstName && s !== k.informationTypes.lastName && s !== k.informationTypes.accountPassword)));
        }, B = s.accountType === m.default.student;
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(p, {
                    children: 'First Name'
                }),
                (0, c.jsx)(i.default, {
                    maxLength: n,
                    style: q,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: s => u(s.target.value),
                    onPressEnter: A,
                    autoFocus: !0
                }),
                (0, c.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, c.jsxs)(p, {
                    children: [
                        'Last ',
                        B ? 'Initial' : 'Name'
                    ]
                }),
                (0, c.jsx)(i.default, {
                    maxLength: B ? 1 : o,
                    style: q,
                    size: 'large',
                    placeholder: `Last ${ B ? 'Initial' : 'Name' } here...`,
                    onChange: s => w(s.target.value),
                    onPressEnter: A
                }),
                s.informationNeeded.includes(k.informationTypes.accountPassword) && (0, c.jsxs)(c.Fragment, {
                    children: [
                        (0, c.jsx)(h.default, {}),
                        (0, c.jsx)(p, {
                            children: 'Password'
                        }),
                        (0, c.jsx)('div', {
                            style: {
                                fontSize: 12,
                                marginTop: -5,
                                marginBottom: 4
                            },
                            children: 'Must contain at least 6 characters'
                        }),
                        (0, c.jsx)(i.default.Password, {
                            style: q,
                            onChange: s => y(s.target.value),
                            placeholder: 'Password here...',
                            size: 'large',
                            maxLength: 96,
                            onPressEnter: A
                        })
                    ]
                }),
                (0, c.jsx)(h.default, {}),
                (0, c.jsx)(j.default, {
                    disabled: !z(),
                    onClick: A,
                    style: {
                        width: '100%'
                    },
                    size: 'large',
                    children: 'Continue'
                }),
                (0, c.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                !B && (0, c.jsx)(l.default, {
                    link: 'https://www.notion.so/gimkit/First-Last-Name-8983e473b6bb4450aaf2f413702cc061'
                })
            ]
        });
    };
}), b.register('PawcO1', function(v, c) {
    a(v.exports, 'default', function() {
        return e;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('vKGUd1');
    var e = a => (0, c.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, c.jsx)('div', {}),
            (0, c.jsx)(d.default, {
                link: a.link
            })
        ]
    });
}), b.register('vKGUd1', function(v, c) {
    a(v.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('nx8MB1'),
        e = b('IsmrL'),
        f = b('YfLmS');
    var g = a => (0, c.jsx)(f.default, {
        title: 'Learn more on why we collect this data',
        children: (0, c.jsx)(e.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, c.jsx)(d.default, {}),
            href: a.link || '',
            target: '_blank'
        })
    });
}), b.register('nx8MB1', function(v, c) {
    a(v.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('84zdK1'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'LockOutlined';
    var h = d.forwardRef(g);
}), b.register('84zdK1', function(b, v) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('uDuHr', function(v, w) {
    a(v.exports, 'default', function() {
        return s;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('2WCNS'),
        f = b('bPH7V'),
        g = b('ExtIT'),
        h = b('c6x8w'),
        i = b('Ly1h3'),
        j = b('iHElh'),
        k = b('eMhMk1'),
        l = b('PjB0f'),
        m = b('QgV8u'),
        n = b('gSUVO'),
        o = b('lmfrI'),
        p = b('/rcVD4'),
        q = b('MHioT3'),
        r = b('PawcO1');
    var s = () => {
        const {
            login: t
        } = d.useContext(p.default), [u, v] = d.useState(''), [w, x] = d.useState(!1), [y, z] = d.useState(''), [A, B] = d.useState(!1), [C, D] = d.useState(!1), [E, F] = d.useState([]);
        d.useEffect(() => {
            y && (D(!0), (0, l.request)({
                url: '/api/users/fetch-schools',
                method: 'post',
                data: {
                    zipCode: y
                },
                success: t => {
                    t && t.schoolList && t.schoolList.length ? (F(t.schoolList), x(!1)) : G();
                },
                error: () => G(),
                both: () => D(!1)
            }));
        }, [y]);
        const G = v => {
                t.country = v || u, t.informationNeeded.replace(t.informationNeeded.filter(t => t !== q.informationTypes.country));
            },
            H = (u, v) => {
                t.schoolId = u, t.districtId = v, G();
            };
        return (0, c.jsxs)(c.Fragment, {
            children: [
                E && E.length && !w ? (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsxs)('div', {
                        style: {
                            color: 'blue',
                            cursor: 'pointer'
                        },
                        onClick: () => {
                            F([]), z(''), x(!0), B(!1);
                        },
                        children: [
                            (0, c.jsx)('i', {
                                className: 'fad fa-long-arrow-left'
                            }),
                            ' Go Back'
                        ]
                    })
                }) : null,
                (0, c.jsx)('div', {
                    style: {
                        fontWeight: n.FontWeights.Black,
                        fontSize: 30,
                        color: o.default.Black,
                        marginBottom: 13
                    },
                    children: '\uD83C\uDFEB Find your school'
                }),
                !E.length && (0, c.jsxs)(c.Fragment, {
                    children: [
                        !w && (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)(k.Title, {
                                    children: '\uD83D\uDDFA️ Country'
                                }),
                                (0, c.jsx)(i.default, {
                                    style: {
                                        width: '100%'
                                    },
                                    showSearch: !0,
                                    placeholder: 'Select country...',
                                    onChange: t => {
                                        v(t), 'US' !== t ? G(t) : x(!0);
                                    },
                                    filterOption: (t, u) => u.props.children.toLowerCase().indexOf(t.toLowerCase()) >= 0,
                                    size: 'large',
                                    children: Object.keys(e.countries).sort(t => 'US' === t ? 1 : -1).reverse().map(t => {
                                        const I = e.countries[t];
                                        let J = '';
                                        return I.emoji && (J += `${ I.emoji } `), I.name && ('United States' === I.name ? J += 'United States Of America' : J += I.name), (0, c.jsx)(i.default.Option, {
                                            value: t,
                                            children: J
                                        }, t);
                                    })
                                })
                            ]
                        }),
                        !C && w && (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)(k.Title, {
                                    children: '\uD83C\uDDFA\uD83C\uDDF2 Zip Code of School'
                                }),
                                (0, c.jsx)(h.default, {
                                    onChange: t => {
                                        const I = t.target.value;
                                        B(!1), I && 5 === String(I).length && z(I);
                                    },
                                    type: 'number',
                                    placeholder: 'Zip code here...',
                                    maxLength: 5,
                                    size: 'large',
                                    autoFocus: !0
                                }),
                                A && (0, c.jsx)(f.default, {
                                    style: {
                                        marginTop: 10
                                    },
                                    showIcon: !0,
                                    type: 'error',
                                    message: 'Invalid Zip Code',
                                    description: (0, c.jsxs)(c.Fragment, {
                                        children: [
                                            'Try entering another zip code or',
                                            ' ',
                                            (0, c.jsx)('a', {
                                                onClick: () => G(),
                                                children: 'skip this step.'
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                C && (0, c.jsx)(j.default, {
                    size: 'large'
                }),
                E && E.length ? (0, c.jsxs)(c.Fragment, {
                    children: [
                        E.map(t => (0, c.jsx)(m.default, {
                            name: t.schoolName,
                            description: `${ t.address.city }, ${ t.address.stateFull }`,
                            onSelect: () => H(t && t.schoolid ? t.schoolid : null, t && t.district && t.district.districtID ? t.district.districtID : null)
                        }, t.schoolid)),
                        (0, c.jsx)(m.default, {
                            name: 'Other',
                            description: 'School not listed',
                            onSelect: () => H(null, null)
                        })
                    ]
                }) : null,
                (0, c.jsx)(g.default, {}),
                (0, c.jsx)(r.default, {
                    link: 'https://www.notion.so/gimkit/Country-Zip-Code-School-9bca6de77686407cad0a4298a4a1d00e'
                })
            ]
        });
    };
}), b.register('2WCNS', function(a, b) {
    a.exports, a.exports = function(a) {
        var c = {};

        function d(e) {
            if (c[e])
                return c[e].exports;
            var e = c[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return a[e].call(e.exports, e, e.exports, d), e.l = !0, e.exports;
        }
        return d.m = a, d.c = c, d.d = function(a, c, e) {
            d.o(a, c) || Object.defineProperty(a, c, {
                enumerable: !0,
                get: e
            });
        }, d.r = function(a) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                value: 'Module'
            }), Object.defineProperty(a, '__esModule', {
                value: !0
            });
        }, d.t = function(a, c) {
            if (1 & c && (a = d(a)), 8 & c)
                return a;
            if (4 & c && 'object' == typeof a && a && a.__esModule)
                return a;
            var e = Object.create(null);
            if (d.r(e), Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    value: a
                }), 2 & c && 'string' != typeof a)
                for (var f in a)
                    d.d(e, f, function(c) {
                        return a[c];
                    }.bind(null, f));
            return e;
        }, d.n = function(a) {
            var e = a && a.__esModule ? function() {
                return a.default;
            } : function() {
                return a;
            };
            return d.d(e, 'a', e), e;
        }, d.o = function(a, c) {
            return Object.prototype.hasOwnProperty.call(a, c);
        }, d.p = '', d(d.s = 1);
    }([
        function(a, b) {
            (function(b) {
                a.exports = b;
            }.call(this, {}));
        },
        function(a, b, s) {
            var c = s(2),
                d = s(3),
                e = s(4),
                f = s(5),
                g = s(6).ucs2,
                h = 127462 - 'A'.charCodeAt(0),
                i = /^[A-Z]{2}$/;
            a.exports = {
                continents: c,
                countries: d,
                languages: e,
                languagesAll: f,
                getEmojiFlag: function(a) {
                    return i.test(a) ? g.encode(a.split('').map(function(a) {
                        return h + a.charCodeAt(0);
                    })) : '';
                },
                getUnicode: function(a) {
                    return g.decode(a).map(function(a) {
                        return 'U+' + Number(a).toString(16).toUpperCase();
                    }).join(' ');
                }
            };
        },
        function(a) {
            a.exports = JSON.parse('{"AF":"Africa","AN":"Antarctica","AS":"Asia","EU":"Europe","NA":"North America","OC":"Oceania","SA":"South America"}');
        },
        function(a) {
            a.exports = JSON.parse('{"AD":{"name":"Andorra","native":"Andorra","phone":"376","continent":"EU","capital":"Andorra la Vella","currency":"EUR","languages":["ca"],"emoji":"\uD83C\uDDE6\uD83C\uDDE9","emojiU":"U+1F1E6 U+1F1E9"},"AE":{"name":"United Arab Emirates","native":"دولة الإمارات العربية المتحدة","phone":"971","continent":"AS","capital":"Abu Dhabi","currency":"AED","languages":["ar"],"emoji":"\uD83C\uDDE6\uD83C\uDDEA","emojiU":"U+1F1E6 U+1F1EA"},"AF":{"name":"Afghanistan","native":"افغانستان","phone":"93","continent":"AS","capital":"Kabul","currency":"AFN","languages":["ps","uz","tk"],"emoji":"\uD83C\uDDE6\uD83C\uDDEB","emojiU":"U+1F1E6 U+1F1EB"},"AG":{"name":"Antigua and Barbuda","native":"Antigua and Barbuda","phone":"1268","continent":"NA","capital":"Saint John\'s","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDEC","emojiU":"U+1F1E6 U+1F1EC"},"AI":{"name":"Anguilla","native":"Anguilla","phone":"1264","continent":"NA","capital":"The Valley","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDEE","emojiU":"U+1F1E6 U+1F1EE"},"AL":{"name":"Albania","native":"Shqipëria","phone":"355","continent":"EU","capital":"Tirana","currency":"ALL","languages":["sq"],"emoji":"\uD83C\uDDE6\uD83C\uDDF1","emojiU":"U+1F1E6 U+1F1F1"},"AM":{"name":"Armenia","native":"Հայաստան","phone":"374","continent":"AS","capital":"Yerevan","currency":"AMD","languages":["hy","ru"],"emoji":"\uD83C\uDDE6\uD83C\uDDF2","emojiU":"U+1F1E6 U+1F1F2"},"AO":{"name":"Angola","native":"Angola","phone":"244","continent":"AF","capital":"Luanda","currency":"AOA","languages":["pt"],"emoji":"\uD83C\uDDE6\uD83C\uDDF4","emojiU":"U+1F1E6 U+1F1F4"},"AQ":{"name":"Antarctica","native":"Antarctica","phone":"672","continent":"AN","capital":"","currency":"","languages":[],"emoji":"\uD83C\uDDE6\uD83C\uDDF6","emojiU":"U+1F1E6 U+1F1F6"},"AR":{"name":"Argentina","native":"Argentina","phone":"54","continent":"SA","capital":"Buenos Aires","currency":"ARS","languages":["es","gn"],"emoji":"\uD83C\uDDE6\uD83C\uDDF7","emojiU":"U+1F1E6 U+1F1F7"},"AS":{"name":"American Samoa","native":"American Samoa","phone":"1684","continent":"OC","capital":"Pago Pago","currency":"USD","languages":["en","sm"],"emoji":"\uD83C\uDDE6\uD83C\uDDF8","emojiU":"U+1F1E6 U+1F1F8"},"AT":{"name":"Austria","native":"Österreich","phone":"43","continent":"EU","capital":"Vienna","currency":"EUR","languages":["de"],"emoji":"\uD83C\uDDE6\uD83C\uDDF9","emojiU":"U+1F1E6 U+1F1F9"},"AU":{"name":"Australia","native":"Australia","phone":"61","continent":"OC","capital":"Canberra","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE6\uD83C\uDDFA","emojiU":"U+1F1E6 U+1F1FA"},"AW":{"name":"Aruba","native":"Aruba","phone":"297","continent":"NA","capital":"Oranjestad","currency":"AWG","languages":["nl","pa"],"emoji":"\uD83C\uDDE6\uD83C\uDDFC","emojiU":"U+1F1E6 U+1F1FC"},"AX":{"name":"Åland","native":"Åland","phone":"358","continent":"EU","capital":"Mariehamn","currency":"EUR","languages":["sv"],"emoji":"\uD83C\uDDE6\uD83C\uDDFD","emojiU":"U+1F1E6 U+1F1FD"},"AZ":{"name":"Azerbaijan","native":"Azərbaycan","phone":"994","continent":"AS","capital":"Baku","currency":"AZN","languages":["az"],"emoji":"\uD83C\uDDE6\uD83C\uDDFF","emojiU":"U+1F1E6 U+1F1FF"},"BA":{"name":"Bosnia and Herzegovina","native":"Bosna i Hercegovina","phone":"387","continent":"EU","capital":"Sarajevo","currency":"BAM","languages":["bs","hr","sr"],"emoji":"\uD83C\uDDE7\uD83C\uDDE6","emojiU":"U+1F1E7 U+1F1E6"},"BB":{"name":"Barbados","native":"Barbados","phone":"1246","continent":"NA","capital":"Bridgetown","currency":"BBD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDE7","emojiU":"U+1F1E7 U+1F1E7"},"BD":{"name":"Bangladesh","native":"Bangladesh","phone":"880","continent":"AS","capital":"Dhaka","currency":"BDT","languages":["bn"],"emoji":"\uD83C\uDDE7\uD83C\uDDE9","emojiU":"U+1F1E7 U+1F1E9"},"BE":{"name":"Belgium","native":"België","phone":"32","continent":"EU","capital":"Brussels","currency":"EUR","languages":["nl","fr","de"],"emoji":"\uD83C\uDDE7\uD83C\uDDEA","emojiU":"U+1F1E7 U+1F1EA"},"BF":{"name":"Burkina Faso","native":"Burkina Faso","phone":"226","continent":"AF","capital":"Ouagadougou","currency":"XOF","languages":["fr","ff"],"emoji":"\uD83C\uDDE7\uD83C\uDDEB","emojiU":"U+1F1E7 U+1F1EB"},"BG":{"name":"Bulgaria","native":"България","phone":"359","continent":"EU","capital":"Sofia","currency":"BGN","languages":["bg"],"emoji":"\uD83C\uDDE7\uD83C\uDDEC","emojiU":"U+1F1E7 U+1F1EC"},"BH":{"name":"Bahrain","native":"\u200Fالبحرين","phone":"973","continent":"AS","capital":"Manama","currency":"BHD","languages":["ar"],"emoji":"\uD83C\uDDE7\uD83C\uDDED","emojiU":"U+1F1E7 U+1F1ED"},"BI":{"name":"Burundi","native":"Burundi","phone":"257","continent":"AF","capital":"Bujumbura","currency":"BIF","languages":["fr","rn"],"emoji":"\uD83C\uDDE7\uD83C\uDDEE","emojiU":"U+1F1E7 U+1F1EE"},"BJ":{"name":"Benin","native":"Bénin","phone":"229","continent":"AF","capital":"Porto-Novo","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDE7\uD83C\uDDEF","emojiU":"U+1F1E7 U+1F1EF"},"BL":{"name":"Saint Barthélemy","native":"Saint-Barthélemy","phone":"590","continent":"NA","capital":"Gustavia","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDE7\uD83C\uDDF1","emojiU":"U+1F1E7 U+1F1F1"},"BM":{"name":"Bermuda","native":"Bermuda","phone":"1441","continent":"NA","capital":"Hamilton","currency":"BMD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDF2","emojiU":"U+1F1E7 U+1F1F2"},"BN":{"name":"Brunei","native":"Negara Brunei Darussalam","phone":"673","continent":"AS","capital":"Bandar Seri Begawan","currency":"BND","languages":["ms"],"emoji":"\uD83C\uDDE7\uD83C\uDDF3","emojiU":"U+1F1E7 U+1F1F3"},"BO":{"name":"Bolivia","native":"Bolivia","phone":"591","continent":"SA","capital":"Sucre","currency":"BOB,BOV","languages":["es","ay","qu"],"emoji":"\uD83C\uDDE7\uD83C\uDDF4","emojiU":"U+1F1E7 U+1F1F4"},"BQ":{"name":"Bonaire","native":"Bonaire","phone":"5997","continent":"NA","capital":"Kralendijk","currency":"USD","languages":["nl"],"emoji":"\uD83C\uDDE7\uD83C\uDDF6","emojiU":"U+1F1E7 U+1F1F6"},"BR":{"name":"Brazil","native":"Brasil","phone":"55","continent":"SA","capital":"Brasília","currency":"BRL","languages":["pt"],"emoji":"\uD83C\uDDE7\uD83C\uDDF7","emojiU":"U+1F1E7 U+1F1F7"},"BS":{"name":"Bahamas","native":"Bahamas","phone":"1242","continent":"NA","capital":"Nassau","currency":"BSD","languages":["en"],"emoji":"\uD83C\uDDE7\uD83C\uDDF8","emojiU":"U+1F1E7 U+1F1F8"},"BT":{"name":"Bhutan","native":"ʼbrug-yul","phone":"975","continent":"AS","capital":"Thimphu","currency":"BTN,INR","languages":["dz"],"emoji":"\uD83C\uDDE7\uD83C\uDDF9","emojiU":"U+1F1E7 U+1F1F9"},"BV":{"name":"Bouvet Island","native":"Bouvetøya","phone":"47","continent":"AN","capital":"","currency":"NOK","languages":["no","nb","nn"],"emoji":"\uD83C\uDDE7\uD83C\uDDFB","emojiU":"U+1F1E7 U+1F1FB"},"BW":{"name":"Botswana","native":"Botswana","phone":"267","continent":"AF","capital":"Gaborone","currency":"BWP","languages":["en","tn"],"emoji":"\uD83C\uDDE7\uD83C\uDDFC","emojiU":"U+1F1E7 U+1F1FC"},"BY":{"name":"Belarus","native":"Белару́сь","phone":"375","continent":"EU","capital":"Minsk","currency":"BYN","languages":["be","ru"],"emoji":"\uD83C\uDDE7\uD83C\uDDFE","emojiU":"U+1F1E7 U+1F1FE"},"BZ":{"name":"Belize","native":"Belize","phone":"501","continent":"NA","capital":"Belmopan","currency":"BZD","languages":["en","es"],"emoji":"\uD83C\uDDE7\uD83C\uDDFF","emojiU":"U+1F1E7 U+1F1FF"},"CA":{"name":"Canada","native":"Canada","phone":"1","continent":"NA","capital":"Ottawa","currency":"CAD","languages":["en","fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDE6","emojiU":"U+1F1E8 U+1F1E6"},"CC":{"name":"Cocos [Keeling] Islands","native":"Cocos (Keeling) Islands","phone":"61","continent":"AS","capital":"West Island","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDE8","emojiU":"U+1F1E8 U+1F1E8"},"CD":{"name":"Democratic Republic of the Congo","native":"République démocratique du Congo","phone":"243","continent":"AF","capital":"Kinshasa","currency":"CDF","languages":["fr","ln","kg","sw","lu"],"emoji":"\uD83C\uDDE8\uD83C\uDDE9","emojiU":"U+1F1E8 U+1F1E9"},"CF":{"name":"Central African Republic","native":"Ködörösêse tî Bêafrîka","phone":"236","continent":"AF","capital":"Bangui","currency":"XAF","languages":["fr","sg"],"emoji":"\uD83C\uDDE8\uD83C\uDDEB","emojiU":"U+1F1E8 U+1F1EB"},"CG":{"name":"Republic of the Congo","native":"République du Congo","phone":"242","continent":"AF","capital":"Brazzaville","currency":"XAF","languages":["fr","ln"],"emoji":"\uD83C\uDDE8\uD83C\uDDEC","emojiU":"U+1F1E8 U+1F1EC"},"CH":{"name":"Switzerland","native":"Schweiz","phone":"41","continent":"EU","capital":"Bern","currency":"CHE,CHF,CHW","languages":["de","fr","it"],"emoji":"\uD83C\uDDE8\uD83C\uDDED","emojiU":"U+1F1E8 U+1F1ED"},"CI":{"name":"Ivory Coast","native":"Côte d\'Ivoire","phone":"225","continent":"AF","capital":"Yamoussoukro","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDEE","emojiU":"U+1F1E8 U+1F1EE"},"CK":{"name":"Cook Islands","native":"Cook Islands","phone":"682","continent":"OC","capital":"Avarua","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDF0","emojiU":"U+1F1E8 U+1F1F0"},"CL":{"name":"Chile","native":"Chile","phone":"56","continent":"SA","capital":"Santiago","currency":"CLF,CLP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF1","emojiU":"U+1F1E8 U+1F1F1"},"CM":{"name":"Cameroon","native":"Cameroon","phone":"237","continent":"AF","capital":"Yaoundé","currency":"XAF","languages":["en","fr"],"emoji":"\uD83C\uDDE8\uD83C\uDDF2","emojiU":"U+1F1E8 U+1F1F2"},"CN":{"name":"China","native":"中国","phone":"86","continent":"AS","capital":"Beijing","currency":"CNY","languages":["zh"],"emoji":"\uD83C\uDDE8\uD83C\uDDF3","emojiU":"U+1F1E8 U+1F1F3"},"CO":{"name":"Colombia","native":"Colombia","phone":"57","continent":"SA","capital":"Bogotá","currency":"COP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF4","emojiU":"U+1F1E8 U+1F1F4"},"CR":{"name":"Costa Rica","native":"Costa Rica","phone":"506","continent":"NA","capital":"San José","currency":"CRC","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDF7","emojiU":"U+1F1E8 U+1F1F7"},"CU":{"name":"Cuba","native":"Cuba","phone":"53","continent":"NA","capital":"Havana","currency":"CUC,CUP","languages":["es"],"emoji":"\uD83C\uDDE8\uD83C\uDDFA","emojiU":"U+1F1E8 U+1F1FA"},"CV":{"name":"Cape Verde","native":"Cabo Verde","phone":"238","continent":"AF","capital":"Praia","currency":"CVE","languages":["pt"],"emoji":"\uD83C\uDDE8\uD83C\uDDFB","emojiU":"U+1F1E8 U+1F1FB"},"CW":{"name":"Curacao","native":"Curaçao","phone":"5999","continent":"NA","capital":"Willemstad","currency":"ANG","languages":["nl","pa","en"],"emoji":"\uD83C\uDDE8\uD83C\uDDFC","emojiU":"U+1F1E8 U+1F1FC"},"CX":{"name":"Christmas Island","native":"Christmas Island","phone":"61","continent":"AS","capital":"Flying Fish Cove","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDE8\uD83C\uDDFD","emojiU":"U+1F1E8 U+1F1FD"},"CY":{"name":"Cyprus","native":"Κύπρος","phone":"357","continent":"EU","capital":"Nicosia","currency":"EUR","languages":["el","tr","hy"],"emoji":"\uD83C\uDDE8\uD83C\uDDFE","emojiU":"U+1F1E8 U+1F1FE"},"CZ":{"name":"Czech Republic","native":"Česká republika","phone":"420","continent":"EU","capital":"Prague","currency":"CZK","languages":["cs","sk"],"emoji":"\uD83C\uDDE8\uD83C\uDDFF","emojiU":"U+1F1E8 U+1F1FF"},"DE":{"name":"Germany","native":"Deutschland","phone":"49","continent":"EU","capital":"Berlin","currency":"EUR","languages":["de"],"emoji":"\uD83C\uDDE9\uD83C\uDDEA","emojiU":"U+1F1E9 U+1F1EA"},"DJ":{"name":"Djibouti","native":"Djibouti","phone":"253","continent":"AF","capital":"Djibouti","currency":"DJF","languages":["fr","ar"],"emoji":"\uD83C\uDDE9\uD83C\uDDEF","emojiU":"U+1F1E9 U+1F1EF"},"DK":{"name":"Denmark","native":"Danmark","phone":"45","continent":"EU","capital":"Copenhagen","currency":"DKK","languages":["da"],"emoji":"\uD83C\uDDE9\uD83C\uDDF0","emojiU":"U+1F1E9 U+1F1F0"},"DM":{"name":"Dominica","native":"Dominica","phone":"1767","continent":"NA","capital":"Roseau","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDE9\uD83C\uDDF2","emojiU":"U+1F1E9 U+1F1F2"},"DO":{"name":"Dominican Republic","native":"República Dominicana","phone":"1809,1829,1849","continent":"NA","capital":"Santo Domingo","currency":"DOP","languages":["es"],"emoji":"\uD83C\uDDE9\uD83C\uDDF4","emojiU":"U+1F1E9 U+1F1F4"},"DZ":{"name":"Algeria","native":"الجزائر","phone":"213","continent":"AF","capital":"Algiers","currency":"DZD","languages":["ar"],"emoji":"\uD83C\uDDE9\uD83C\uDDFF","emojiU":"U+1F1E9 U+1F1FF"},"EC":{"name":"Ecuador","native":"Ecuador","phone":"593","continent":"SA","capital":"Quito","currency":"USD","languages":["es"],"emoji":"\uD83C\uDDEA\uD83C\uDDE8","emojiU":"U+1F1EA U+1F1E8"},"EE":{"name":"Estonia","native":"Eesti","phone":"372","continent":"EU","capital":"Tallinn","currency":"EUR","languages":["et"],"emoji":"\uD83C\uDDEA\uD83C\uDDEA","emojiU":"U+1F1EA U+1F1EA"},"EG":{"name":"Egypt","native":"مصر\u200E","phone":"20","continent":"AF","capital":"Cairo","currency":"EGP","languages":["ar"],"emoji":"\uD83C\uDDEA\uD83C\uDDEC","emojiU":"U+1F1EA U+1F1EC"},"EH":{"name":"Western Sahara","native":"الصحراء الغربية","phone":"212","continent":"AF","capital":"El Aaiún","currency":"MAD,DZD,MRU","languages":["es"],"emoji":"\uD83C\uDDEA\uD83C\uDDED","emojiU":"U+1F1EA U+1F1ED"},"ER":{"name":"Eritrea","native":"ኤርትራ","phone":"291","continent":"AF","capital":"Asmara","currency":"ERN","languages":["ti","ar","en"],"emoji":"\uD83C\uDDEA\uD83C\uDDF7","emojiU":"U+1F1EA U+1F1F7"},"ES":{"name":"Spain","native":"España","phone":"34","continent":"EU","capital":"Madrid","currency":"EUR","languages":["es","eu","ca","gl","oc"],"emoji":"\uD83C\uDDEA\uD83C\uDDF8","emojiU":"U+1F1EA U+1F1F8"},"ET":{"name":"Ethiopia","native":"ኢትዮጵያ","phone":"251","continent":"AF","capital":"Addis Ababa","currency":"ETB","languages":["am"],"emoji":"\uD83C\uDDEA\uD83C\uDDF9","emojiU":"U+1F1EA U+1F1F9"},"FI":{"name":"Finland","native":"Suomi","phone":"358","continent":"EU","capital":"Helsinki","currency":"EUR","languages":["fi","sv"],"emoji":"\uD83C\uDDEB\uD83C\uDDEE","emojiU":"U+1F1EB U+1F1EE"},"FJ":{"name":"Fiji","native":"Fiji","phone":"679","continent":"OC","capital":"Suva","currency":"FJD","languages":["en","fj","hi","ur"],"emoji":"\uD83C\uDDEB\uD83C\uDDEF","emojiU":"U+1F1EB U+1F1EF"},"FK":{"name":"Falkland Islands","native":"Falkland Islands","phone":"500","continent":"SA","capital":"Stanley","currency":"FKP","languages":["en"],"emoji":"\uD83C\uDDEB\uD83C\uDDF0","emojiU":"U+1F1EB U+1F1F0"},"FM":{"name":"Micronesia","native":"Micronesia","phone":"691","continent":"OC","capital":"Palikir","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDEB\uD83C\uDDF2","emojiU":"U+1F1EB U+1F1F2"},"FO":{"name":"Faroe Islands","native":"Føroyar","phone":"298","continent":"EU","capital":"Tórshavn","currency":"DKK","languages":["fo"],"emoji":"\uD83C\uDDEB\uD83C\uDDF4","emojiU":"U+1F1EB U+1F1F4"},"FR":{"name":"France","native":"France","phone":"33","continent":"EU","capital":"Paris","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEB\uD83C\uDDF7","emojiU":"U+1F1EB U+1F1F7"},"GA":{"name":"Gabon","native":"Gabon","phone":"241","continent":"AF","capital":"Libreville","currency":"XAF","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDE6","emojiU":"U+1F1EC U+1F1E6"},"GB":{"name":"United Kingdom","native":"United Kingdom","phone":"44","continent":"EU","capital":"London","currency":"GBP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDE7","emojiU":"U+1F1EC U+1F1E7"},"GD":{"name":"Grenada","native":"Grenada","phone":"1473","continent":"NA","capital":"St. George\'s","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDE9","emojiU":"U+1F1EC U+1F1E9"},"GE":{"name":"Georgia","native":"საქართველო","phone":"995","continent":"AS","capital":"Tbilisi","currency":"GEL","languages":["ka"],"emoji":"\uD83C\uDDEC\uD83C\uDDEA","emojiU":"U+1F1EC U+1F1EA"},"GF":{"name":"French Guiana","native":"Guyane française","phone":"594","continent":"SA","capital":"Cayenne","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDEB","emojiU":"U+1F1EC U+1F1EB"},"GG":{"name":"Guernsey","native":"Guernsey","phone":"44","continent":"EU","capital":"St. Peter Port","currency":"GBP","languages":["en","fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDEC","emojiU":"U+1F1EC U+1F1EC"},"GH":{"name":"Ghana","native":"Ghana","phone":"233","continent":"AF","capital":"Accra","currency":"GHS","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDED","emojiU":"U+1F1EC U+1F1ED"},"GI":{"name":"Gibraltar","native":"Gibraltar","phone":"350","continent":"EU","capital":"Gibraltar","currency":"GIP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDEE","emojiU":"U+1F1EC U+1F1EE"},"GL":{"name":"Greenland","native":"Kalaallit Nunaat","phone":"299","continent":"NA","capital":"Nuuk","currency":"DKK","languages":["kl"],"emoji":"\uD83C\uDDEC\uD83C\uDDF1","emojiU":"U+1F1EC U+1F1F1"},"GM":{"name":"Gambia","native":"Gambia","phone":"220","continent":"AF","capital":"Banjul","currency":"GMD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDF2","emojiU":"U+1F1EC U+1F1F2"},"GN":{"name":"Guinea","native":"Guinée","phone":"224","continent":"AF","capital":"Conakry","currency":"GNF","languages":["fr","ff"],"emoji":"\uD83C\uDDEC\uD83C\uDDF3","emojiU":"U+1F1EC U+1F1F3"},"GP":{"name":"Guadeloupe","native":"Guadeloupe","phone":"590","continent":"NA","capital":"Basse-Terre","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDF5","emojiU":"U+1F1EC U+1F1F5"},"GQ":{"name":"Equatorial Guinea","native":"Guinea Ecuatorial","phone":"240","continent":"AF","capital":"Malabo","currency":"XAF","languages":["es","fr"],"emoji":"\uD83C\uDDEC\uD83C\uDDF6","emojiU":"U+1F1EC U+1F1F6"},"GR":{"name":"Greece","native":"Ελλάδα","phone":"30","continent":"EU","capital":"Athens","currency":"EUR","languages":["el"],"emoji":"\uD83C\uDDEC\uD83C\uDDF7","emojiU":"U+1F1EC U+1F1F7"},"GS":{"name":"South Georgia and the South Sandwich Islands","native":"South Georgia","phone":"500","continent":"AN","capital":"King Edward Point","currency":"GBP","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDF8","emojiU":"U+1F1EC U+1F1F8"},"GT":{"name":"Guatemala","native":"Guatemala","phone":"502","continent":"NA","capital":"Guatemala City","currency":"GTQ","languages":["es"],"emoji":"\uD83C\uDDEC\uD83C\uDDF9","emojiU":"U+1F1EC U+1F1F9"},"GU":{"name":"Guam","native":"Guam","phone":"1671","continent":"OC","capital":"Hagåtña","currency":"USD","languages":["en","ch","es"],"emoji":"\uD83C\uDDEC\uD83C\uDDFA","emojiU":"U+1F1EC U+1F1FA"},"GW":{"name":"Guinea-Bissau","native":"Guiné-Bissau","phone":"245","continent":"AF","capital":"Bissau","currency":"XOF","languages":["pt"],"emoji":"\uD83C\uDDEC\uD83C\uDDFC","emojiU":"U+1F1EC U+1F1FC"},"GY":{"name":"Guyana","native":"Guyana","phone":"592","continent":"SA","capital":"Georgetown","currency":"GYD","languages":["en"],"emoji":"\uD83C\uDDEC\uD83C\uDDFE","emojiU":"U+1F1EC U+1F1FE"},"HK":{"name":"Hong Kong","native":"香港","phone":"852","continent":"AS","capital":"City of Victoria","currency":"HKD","languages":["zh","en"],"emoji":"\uD83C\uDDED\uD83C\uDDF0","emojiU":"U+1F1ED U+1F1F0"},"HM":{"name":"Heard Island and McDonald Islands","native":"Heard Island and McDonald Islands","phone":"61","continent":"AN","capital":"","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDED\uD83C\uDDF2","emojiU":"U+1F1ED U+1F1F2"},"HN":{"name":"Honduras","native":"Honduras","phone":"504","continent":"NA","capital":"Tegucigalpa","currency":"HNL","languages":["es"],"emoji":"\uD83C\uDDED\uD83C\uDDF3","emojiU":"U+1F1ED U+1F1F3"},"HR":{"name":"Croatia","native":"Hrvatska","phone":"385","continent":"EU","capital":"Zagreb","currency":"HRK","languages":["hr"],"emoji":"\uD83C\uDDED\uD83C\uDDF7","emojiU":"U+1F1ED U+1F1F7"},"HT":{"name":"Haiti","native":"Haïti","phone":"509","continent":"NA","capital":"Port-au-Prince","currency":"HTG,USD","languages":["fr","ht"],"emoji":"\uD83C\uDDED\uD83C\uDDF9","emojiU":"U+1F1ED U+1F1F9"},"HU":{"name":"Hungary","native":"Magyarország","phone":"36","continent":"EU","capital":"Budapest","currency":"HUF","languages":["hu"],"emoji":"\uD83C\uDDED\uD83C\uDDFA","emojiU":"U+1F1ED U+1F1FA"},"ID":{"name":"Indonesia","native":"Indonesia","phone":"62","continent":"AS","capital":"Jakarta","currency":"IDR","languages":["id"],"emoji":"\uD83C\uDDEE\uD83C\uDDE9","emojiU":"U+1F1EE U+1F1E9"},"IE":{"name":"Ireland","native":"Éire","phone":"353","continent":"EU","capital":"Dublin","currency":"EUR","languages":["ga","en"],"emoji":"\uD83C\uDDEE\uD83C\uDDEA","emojiU":"U+1F1EE U+1F1EA"},"IL":{"name":"Israel","native":"יִשְׂרָאֵל","phone":"972","continent":"AS","capital":"Jerusalem","currency":"ILS","languages":["he","ar"],"emoji":"\uD83C\uDDEE\uD83C\uDDF1","emojiU":"U+1F1EE U+1F1F1"},"IM":{"name":"Isle of Man","native":"Isle of Man","phone":"44","continent":"EU","capital":"Douglas","currency":"GBP","languages":["en","gv"],"emoji":"\uD83C\uDDEE\uD83C\uDDF2","emojiU":"U+1F1EE U+1F1F2"},"IN":{"name":"India","native":"भारत","phone":"91","continent":"AS","capital":"New Delhi","currency":"INR","languages":["hi","en"],"emoji":"\uD83C\uDDEE\uD83C\uDDF3","emojiU":"U+1F1EE U+1F1F3"},"IO":{"name":"British Indian Ocean Territory","native":"British Indian Ocean Territory","phone":"246","continent":"AS","capital":"Diego Garcia","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDEE\uD83C\uDDF4","emojiU":"U+1F1EE U+1F1F4"},"IQ":{"name":"Iraq","native":"العراق","phone":"964","continent":"AS","capital":"Baghdad","currency":"IQD","languages":["ar","ku"],"emoji":"\uD83C\uDDEE\uD83C\uDDF6","emojiU":"U+1F1EE U+1F1F6"},"IR":{"name":"Iran","native":"ایران","phone":"98","continent":"AS","capital":"Tehran","currency":"IRR","languages":["fa"],"emoji":"\uD83C\uDDEE\uD83C\uDDF7","emojiU":"U+1F1EE U+1F1F7"},"IS":{"name":"Iceland","native":"Ísland","phone":"354","continent":"EU","capital":"Reykjavik","currency":"ISK","languages":["is"],"emoji":"\uD83C\uDDEE\uD83C\uDDF8","emojiU":"U+1F1EE U+1F1F8"},"IT":{"name":"Italy","native":"Italia","phone":"39","continent":"EU","capital":"Rome","currency":"EUR","languages":["it"],"emoji":"\uD83C\uDDEE\uD83C\uDDF9","emojiU":"U+1F1EE U+1F1F9"},"JE":{"name":"Jersey","native":"Jersey","phone":"44","continent":"EU","capital":"Saint Helier","currency":"GBP","languages":["en","fr"],"emoji":"\uD83C\uDDEF\uD83C\uDDEA","emojiU":"U+1F1EF U+1F1EA"},"JM":{"name":"Jamaica","native":"Jamaica","phone":"1876","continent":"NA","capital":"Kingston","currency":"JMD","languages":["en"],"emoji":"\uD83C\uDDEF\uD83C\uDDF2","emojiU":"U+1F1EF U+1F1F2"},"JO":{"name":"Jordan","native":"الأردن","phone":"962","continent":"AS","capital":"Amman","currency":"JOD","languages":["ar"],"emoji":"\uD83C\uDDEF\uD83C\uDDF4","emojiU":"U+1F1EF U+1F1F4"},"JP":{"name":"Japan","native":"日本","phone":"81","continent":"AS","capital":"Tokyo","currency":"JPY","languages":["ja"],"emoji":"\uD83C\uDDEF\uD83C\uDDF5","emojiU":"U+1F1EF U+1F1F5"},"KE":{"name":"Kenya","native":"Kenya","phone":"254","continent":"AF","capital":"Nairobi","currency":"KES","languages":["en","sw"],"emoji":"\uD83C\uDDF0\uD83C\uDDEA","emojiU":"U+1F1F0 U+1F1EA"},"KG":{"name":"Kyrgyzstan","native":"Кыргызстан","phone":"996","continent":"AS","capital":"Bishkek","currency":"KGS","languages":["ky","ru"],"emoji":"\uD83C\uDDF0\uD83C\uDDEC","emojiU":"U+1F1F0 U+1F1EC"},"KH":{"name":"Cambodia","native":"Kâmpŭchéa","phone":"855","continent":"AS","capital":"Phnom Penh","currency":"KHR","languages":["km"],"emoji":"\uD83C\uDDF0\uD83C\uDDED","emojiU":"U+1F1F0 U+1F1ED"},"KI":{"name":"Kiribati","native":"Kiribati","phone":"686","continent":"OC","capital":"South Tarawa","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDEE","emojiU":"U+1F1F0 U+1F1EE"},"KM":{"name":"Comoros","native":"Komori","phone":"269","continent":"AF","capital":"Moroni","currency":"KMF","languages":["ar","fr"],"emoji":"\uD83C\uDDF0\uD83C\uDDF2","emojiU":"U+1F1F0 U+1F1F2"},"KN":{"name":"Saint Kitts and Nevis","native":"Saint Kitts and Nevis","phone":"1869","continent":"NA","capital":"Basseterre","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDF3","emojiU":"U+1F1F0 U+1F1F3"},"KP":{"name":"North Korea","native":"북한","phone":"850","continent":"AS","capital":"Pyongyang","currency":"KPW","languages":["ko"],"emoji":"\uD83C\uDDF0\uD83C\uDDF5","emojiU":"U+1F1F0 U+1F1F5"},"KR":{"name":"South Korea","native":"대한민국","phone":"82","continent":"AS","capital":"Seoul","currency":"KRW","languages":["ko"],"emoji":"\uD83C\uDDF0\uD83C\uDDF7","emojiU":"U+1F1F0 U+1F1F7"},"KW":{"name":"Kuwait","native":"الكويت","phone":"965","continent":"AS","capital":"Kuwait City","currency":"KWD","languages":["ar"],"emoji":"\uD83C\uDDF0\uD83C\uDDFC","emojiU":"U+1F1F0 U+1F1FC"},"KY":{"name":"Cayman Islands","native":"Cayman Islands","phone":"1345","continent":"NA","capital":"George Town","currency":"KYD","languages":["en"],"emoji":"\uD83C\uDDF0\uD83C\uDDFE","emojiU":"U+1F1F0 U+1F1FE"},"KZ":{"name":"Kazakhstan","native":"Қазақстан","phone":"76,77","continent":"AS","capital":"Astana","currency":"KZT","languages":["kk","ru"],"emoji":"\uD83C\uDDF0\uD83C\uDDFF","emojiU":"U+1F1F0 U+1F1FF"},"LA":{"name":"Laos","native":"ສປປລາວ","phone":"856","continent":"AS","capital":"Vientiane","currency":"LAK","languages":["lo"],"emoji":"\uD83C\uDDF1\uD83C\uDDE6","emojiU":"U+1F1F1 U+1F1E6"},"LB":{"name":"Lebanon","native":"لبنان","phone":"961","continent":"AS","capital":"Beirut","currency":"LBP","languages":["ar","fr"],"emoji":"\uD83C\uDDF1\uD83C\uDDE7","emojiU":"U+1F1F1 U+1F1E7"},"LC":{"name":"Saint Lucia","native":"Saint Lucia","phone":"1758","continent":"NA","capital":"Castries","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF1\uD83C\uDDE8","emojiU":"U+1F1F1 U+1F1E8"},"LI":{"name":"Liechtenstein","native":"Liechtenstein","phone":"423","continent":"EU","capital":"Vaduz","currency":"CHF","languages":["de"],"emoji":"\uD83C\uDDF1\uD83C\uDDEE","emojiU":"U+1F1F1 U+1F1EE"},"LK":{"name":"Sri Lanka","native":"śrī laṃkāva","phone":"94","continent":"AS","capital":"Colombo","currency":"LKR","languages":["si","ta"],"emoji":"\uD83C\uDDF1\uD83C\uDDF0","emojiU":"U+1F1F1 U+1F1F0"},"LR":{"name":"Liberia","native":"Liberia","phone":"231","continent":"AF","capital":"Monrovia","currency":"LRD","languages":["en"],"emoji":"\uD83C\uDDF1\uD83C\uDDF7","emojiU":"U+1F1F1 U+1F1F7"},"LS":{"name":"Lesotho","native":"Lesotho","phone":"266","continent":"AF","capital":"Maseru","currency":"LSL,ZAR","languages":["en","st"],"emoji":"\uD83C\uDDF1\uD83C\uDDF8","emojiU":"U+1F1F1 U+1F1F8"},"LT":{"name":"Lithuania","native":"Lietuva","phone":"370","continent":"EU","capital":"Vilnius","currency":"EUR","languages":["lt"],"emoji":"\uD83C\uDDF1\uD83C\uDDF9","emojiU":"U+1F1F1 U+1F1F9"},"LU":{"name":"Luxembourg","native":"Luxembourg","phone":"352","continent":"EU","capital":"Luxembourg","currency":"EUR","languages":["fr","de","lb"],"emoji":"\uD83C\uDDF1\uD83C\uDDFA","emojiU":"U+1F1F1 U+1F1FA"},"LV":{"name":"Latvia","native":"Latvija","phone":"371","continent":"EU","capital":"Riga","currency":"EUR","languages":["lv"],"emoji":"\uD83C\uDDF1\uD83C\uDDFB","emojiU":"U+1F1F1 U+1F1FB"},"LY":{"name":"Libya","native":"\u200Fليبيا","phone":"218","continent":"AF","capital":"Tripoli","currency":"LYD","languages":["ar"],"emoji":"\uD83C\uDDF1\uD83C\uDDFE","emojiU":"U+1F1F1 U+1F1FE"},"MA":{"name":"Morocco","native":"المغرب","phone":"212","continent":"AF","capital":"Rabat","currency":"MAD","languages":["ar"],"emoji":"\uD83C\uDDF2\uD83C\uDDE6","emojiU":"U+1F1F2 U+1F1E6"},"MC":{"name":"Monaco","native":"Monaco","phone":"377","continent":"EU","capital":"Monaco","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDE8","emojiU":"U+1F1F2 U+1F1E8"},"MD":{"name":"Moldova","native":"Moldova","phone":"373","continent":"EU","capital":"Chișinău","currency":"MDL","languages":["ro"],"emoji":"\uD83C\uDDF2\uD83C\uDDE9","emojiU":"U+1F1F2 U+1F1E9"},"ME":{"name":"Montenegro","native":"Црна Гора","phone":"382","continent":"EU","capital":"Podgorica","currency":"EUR","languages":["sr","bs","sq","hr"],"emoji":"\uD83C\uDDF2\uD83C\uDDEA","emojiU":"U+1F1F2 U+1F1EA"},"MF":{"name":"Saint Martin","native":"Saint-Martin","phone":"590","continent":"NA","capital":"Marigot","currency":"EUR","languages":["en","fr","nl"],"emoji":"\uD83C\uDDF2\uD83C\uDDEB","emojiU":"U+1F1F2 U+1F1EB"},"MG":{"name":"Madagascar","native":"Madagasikara","phone":"261","continent":"AF","capital":"Antananarivo","currency":"MGA","languages":["fr","mg"],"emoji":"\uD83C\uDDF2\uD83C\uDDEC","emojiU":"U+1F1F2 U+1F1EC"},"MH":{"name":"Marshall Islands","native":"M̧ajeļ","phone":"692","continent":"OC","capital":"Majuro","currency":"USD","languages":["en","mh"],"emoji":"\uD83C\uDDF2\uD83C\uDDED","emojiU":"U+1F1F2 U+1F1ED"},"MK":{"name":"North Macedonia","native":"Северна Македонија","phone":"389","continent":"EU","capital":"Skopje","currency":"MKD","languages":["mk"],"emoji":"\uD83C\uDDF2\uD83C\uDDF0","emojiU":"U+1F1F2 U+1F1F0"},"ML":{"name":"Mali","native":"Mali","phone":"223","continent":"AF","capital":"Bamako","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDF1","emojiU":"U+1F1F2 U+1F1F1"},"MM":{"name":"Myanmar [Burma]","native":"မြန်မာ","phone":"95","continent":"AS","capital":"Naypyidaw","currency":"MMK","languages":["my"],"emoji":"\uD83C\uDDF2\uD83C\uDDF2","emojiU":"U+1F1F2 U+1F1F2"},"MN":{"name":"Mongolia","native":"Монгол улс","phone":"976","continent":"AS","capital":"Ulan Bator","currency":"MNT","languages":["mn"],"emoji":"\uD83C\uDDF2\uD83C\uDDF3","emojiU":"U+1F1F2 U+1F1F3"},"MO":{"name":"Macao","native":"澳門","phone":"853","continent":"AS","capital":"","currency":"MOP","languages":["zh","pt"],"emoji":"\uD83C\uDDF2\uD83C\uDDF4","emojiU":"U+1F1F2 U+1F1F4"},"MP":{"name":"Northern Mariana Islands","native":"Northern Mariana Islands","phone":"1670","continent":"OC","capital":"Saipan","currency":"USD","languages":["en","ch"],"emoji":"\uD83C\uDDF2\uD83C\uDDF5","emojiU":"U+1F1F2 U+1F1F5"},"MQ":{"name":"Martinique","native":"Martinique","phone":"596","continent":"NA","capital":"Fort-de-France","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF2\uD83C\uDDF6","emojiU":"U+1F1F2 U+1F1F6"},"MR":{"name":"Mauritania","native":"موريتانيا","phone":"222","continent":"AF","capital":"Nouakchott","currency":"MRU","languages":["ar"],"emoji":"\uD83C\uDDF2\uD83C\uDDF7","emojiU":"U+1F1F2 U+1F1F7"},"MS":{"name":"Montserrat","native":"Montserrat","phone":"1664","continent":"NA","capital":"Plymouth","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDF2\uD83C\uDDF8","emojiU":"U+1F1F2 U+1F1F8"},"MT":{"name":"Malta","native":"Malta","phone":"356","continent":"EU","capital":"Valletta","currency":"EUR","languages":["mt","en"],"emoji":"\uD83C\uDDF2\uD83C\uDDF9","emojiU":"U+1F1F2 U+1F1F9"},"MU":{"name":"Mauritius","native":"Maurice","phone":"230","continent":"AF","capital":"Port Louis","currency":"MUR","languages":["en"],"emoji":"\uD83C\uDDF2\uD83C\uDDFA","emojiU":"U+1F1F2 U+1F1FA"},"MV":{"name":"Maldives","native":"Maldives","phone":"960","continent":"AS","capital":"Malé","currency":"MVR","languages":["dv"],"emoji":"\uD83C\uDDF2\uD83C\uDDFB","emojiU":"U+1F1F2 U+1F1FB"},"MW":{"name":"Malawi","native":"Malawi","phone":"265","continent":"AF","capital":"Lilongwe","currency":"MWK","languages":["en","ny"],"emoji":"\uD83C\uDDF2\uD83C\uDDFC","emojiU":"U+1F1F2 U+1F1FC"},"MX":{"name":"Mexico","native":"México","phone":"52","continent":"NA","capital":"Mexico City","currency":"MXN","languages":["es"],"emoji":"\uD83C\uDDF2\uD83C\uDDFD","emojiU":"U+1F1F2 U+1F1FD"},"MY":{"name":"Malaysia","native":"Malaysia","phone":"60","continent":"AS","capital":"Kuala Lumpur","currency":"MYR","languages":["ms"],"emoji":"\uD83C\uDDF2\uD83C\uDDFE","emojiU":"U+1F1F2 U+1F1FE"},"MZ":{"name":"Mozambique","native":"Moçambique","phone":"258","continent":"AF","capital":"Maputo","currency":"MZN","languages":["pt"],"emoji":"\uD83C\uDDF2\uD83C\uDDFF","emojiU":"U+1F1F2 U+1F1FF"},"NA":{"name":"Namibia","native":"Namibia","phone":"264","continent":"AF","capital":"Windhoek","currency":"NAD,ZAR","languages":["en","af"],"emoji":"\uD83C\uDDF3\uD83C\uDDE6","emojiU":"U+1F1F3 U+1F1E6"},"NC":{"name":"New Caledonia","native":"Nouvelle-Calédonie","phone":"687","continent":"OC","capital":"Nouméa","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDF3\uD83C\uDDE8","emojiU":"U+1F1F3 U+1F1E8"},"NE":{"name":"Niger","native":"Niger","phone":"227","continent":"AF","capital":"Niamey","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF3\uD83C\uDDEA","emojiU":"U+1F1F3 U+1F1EA"},"NF":{"name":"Norfolk Island","native":"Norfolk Island","phone":"672","continent":"OC","capital":"Kingston","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDEB","emojiU":"U+1F1F3 U+1F1EB"},"NG":{"name":"Nigeria","native":"Nigeria","phone":"234","continent":"AF","capital":"Abuja","currency":"NGN","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDEC","emojiU":"U+1F1F3 U+1F1EC"},"NI":{"name":"Nicaragua","native":"Nicaragua","phone":"505","continent":"NA","capital":"Managua","currency":"NIO","languages":["es"],"emoji":"\uD83C\uDDF3\uD83C\uDDEE","emojiU":"U+1F1F3 U+1F1EE"},"NL":{"name":"Netherlands","native":"Nederland","phone":"31","continent":"EU","capital":"Amsterdam","currency":"EUR","languages":["nl"],"emoji":"\uD83C\uDDF3\uD83C\uDDF1","emojiU":"U+1F1F3 U+1F1F1"},"NO":{"name":"Norway","native":"Norge","phone":"47","continent":"EU","capital":"Oslo","currency":"NOK","languages":["no","nb","nn"],"emoji":"\uD83C\uDDF3\uD83C\uDDF4","emojiU":"U+1F1F3 U+1F1F4"},"NP":{"name":"Nepal","native":"नपल","phone":"977","continent":"AS","capital":"Kathmandu","currency":"NPR","languages":["ne"],"emoji":"\uD83C\uDDF3\uD83C\uDDF5","emojiU":"U+1F1F3 U+1F1F5"},"NR":{"name":"Nauru","native":"Nauru","phone":"674","continent":"OC","capital":"Yaren","currency":"AUD","languages":["en","na"],"emoji":"\uD83C\uDDF3\uD83C\uDDF7","emojiU":"U+1F1F3 U+1F1F7"},"NU":{"name":"Niue","native":"Niuē","phone":"683","continent":"OC","capital":"Alofi","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF3\uD83C\uDDFA","emojiU":"U+1F1F3 U+1F1FA"},"NZ":{"name":"New Zealand","native":"New Zealand","phone":"64","continent":"OC","capital":"Wellington","currency":"NZD","languages":["en","mi"],"emoji":"\uD83C\uDDF3\uD83C\uDDFF","emojiU":"U+1F1F3 U+1F1FF"},"OM":{"name":"Oman","native":"عمان","phone":"968","continent":"AS","capital":"Muscat","currency":"OMR","languages":["ar"],"emoji":"\uD83C\uDDF4\uD83C\uDDF2","emojiU":"U+1F1F4 U+1F1F2"},"PA":{"name":"Panama","native":"Panamá","phone":"507","continent":"NA","capital":"Panama City","currency":"PAB,USD","languages":["es"],"emoji":"\uD83C\uDDF5\uD83C\uDDE6","emojiU":"U+1F1F5 U+1F1E6"},"PE":{"name":"Peru","native":"Perú","phone":"51","continent":"SA","capital":"Lima","currency":"PEN","languages":["es"],"emoji":"\uD83C\uDDF5\uD83C\uDDEA","emojiU":"U+1F1F5 U+1F1EA"},"PF":{"name":"French Polynesia","native":"Polynésie française","phone":"689","continent":"OC","capital":"Papeetē","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDF5\uD83C\uDDEB","emojiU":"U+1F1F5 U+1F1EB"},"PG":{"name":"Papua New Guinea","native":"Papua Niugini","phone":"675","continent":"OC","capital":"Port Moresby","currency":"PGK","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDEC","emojiU":"U+1F1F5 U+1F1EC"},"PH":{"name":"Philippines","native":"Pilipinas","phone":"63","continent":"AS","capital":"Manila","currency":"PHP","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDED","emojiU":"U+1F1F5 U+1F1ED"},"PK":{"name":"Pakistan","native":"Pakistan","phone":"92","continent":"AS","capital":"Islamabad","currency":"PKR","languages":["en","ur"],"emoji":"\uD83C\uDDF5\uD83C\uDDF0","emojiU":"U+1F1F5 U+1F1F0"},"PL":{"name":"Poland","native":"Polska","phone":"48","continent":"EU","capital":"Warsaw","currency":"PLN","languages":["pl"],"emoji":"\uD83C\uDDF5\uD83C\uDDF1","emojiU":"U+1F1F5 U+1F1F1"},"PM":{"name":"Saint Pierre and Miquelon","native":"Saint-Pierre-et-Miquelon","phone":"508","continent":"NA","capital":"Saint-Pierre","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF5\uD83C\uDDF2","emojiU":"U+1F1F5 U+1F1F2"},"PN":{"name":"Pitcairn Islands","native":"Pitcairn Islands","phone":"64","continent":"OC","capital":"Adamstown","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDF3","emojiU":"U+1F1F5 U+1F1F3"},"PR":{"name":"Puerto Rico","native":"Puerto Rico","phone":"1787,1939","continent":"NA","capital":"San Juan","currency":"USD","languages":["es","en"],"emoji":"\uD83C\uDDF5\uD83C\uDDF7","emojiU":"U+1F1F5 U+1F1F7"},"PS":{"name":"Palestine","native":"فلسطين","phone":"970","continent":"AS","capital":"Ramallah","currency":"ILS","languages":["ar"],"emoji":"\uD83C\uDDF5\uD83C\uDDF8","emojiU":"U+1F1F5 U+1F1F8"},"PT":{"name":"Portugal","native":"Portugal","phone":"351","continent":"EU","capital":"Lisbon","currency":"EUR","languages":["pt"],"emoji":"\uD83C\uDDF5\uD83C\uDDF9","emojiU":"U+1F1F5 U+1F1F9"},"PW":{"name":"Palau","native":"Palau","phone":"680","continent":"OC","capital":"Ngerulmud","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDF5\uD83C\uDDFC","emojiU":"U+1F1F5 U+1F1FC"},"PY":{"name":"Paraguay","native":"Paraguay","phone":"595","continent":"SA","capital":"Asunción","currency":"PYG","languages":["es","gn"],"emoji":"\uD83C\uDDF5\uD83C\uDDFE","emojiU":"U+1F1F5 U+1F1FE"},"QA":{"name":"Qatar","native":"قطر","phone":"974","continent":"AS","capital":"Doha","currency":"QAR","languages":["ar"],"emoji":"\uD83C\uDDF6\uD83C\uDDE6","emojiU":"U+1F1F6 U+1F1E6"},"RE":{"name":"Réunion","native":"La Réunion","phone":"262","continent":"AF","capital":"Saint-Denis","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF7\uD83C\uDDEA","emojiU":"U+1F1F7 U+1F1EA"},"RO":{"name":"Romania","native":"România","phone":"40","continent":"EU","capital":"Bucharest","currency":"RON","languages":["ro"],"emoji":"\uD83C\uDDF7\uD83C\uDDF4","emojiU":"U+1F1F7 U+1F1F4"},"RS":{"name":"Serbia","native":"Србија","phone":"381","continent":"EU","capital":"Belgrade","currency":"RSD","languages":["sr"],"emoji":"\uD83C\uDDF7\uD83C\uDDF8","emojiU":"U+1F1F7 U+1F1F8"},"RU":{"name":"Russia","native":"Россия","phone":"7","continent":"EU","capital":"Moscow","currency":"RUB","languages":["ru"],"emoji":"\uD83C\uDDF7\uD83C\uDDFA","emojiU":"U+1F1F7 U+1F1FA"},"RW":{"name":"Rwanda","native":"Rwanda","phone":"250","continent":"AF","capital":"Kigali","currency":"RWF","languages":["rw","en","fr"],"emoji":"\uD83C\uDDF7\uD83C\uDDFC","emojiU":"U+1F1F7 U+1F1FC"},"SA":{"name":"Saudi Arabia","native":"العربية السعودية","phone":"966","continent":"AS","capital":"Riyadh","currency":"SAR","languages":["ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDE6","emojiU":"U+1F1F8 U+1F1E6"},"SB":{"name":"Solomon Islands","native":"Solomon Islands","phone":"677","continent":"OC","capital":"Honiara","currency":"SBD","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE7","emojiU":"U+1F1F8 U+1F1E7"},"SC":{"name":"Seychelles","native":"Seychelles","phone":"248","continent":"AF","capital":"Victoria","currency":"SCR","languages":["fr","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE8","emojiU":"U+1F1F8 U+1F1E8"},"SD":{"name":"Sudan","native":"السودان","phone":"249","continent":"AF","capital":"Khartoum","currency":"SDG","languages":["ar","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDE9","emojiU":"U+1F1F8 U+1F1E9"},"SE":{"name":"Sweden","native":"Sverige","phone":"46","continent":"EU","capital":"Stockholm","currency":"SEK","languages":["sv"],"emoji":"\uD83C\uDDF8\uD83C\uDDEA","emojiU":"U+1F1F8 U+1F1EA"},"SG":{"name":"Singapore","native":"Singapore","phone":"65","continent":"AS","capital":"Singapore","currency":"SGD","languages":["en","ms","ta","zh"],"emoji":"\uD83C\uDDF8\uD83C\uDDEC","emojiU":"U+1F1F8 U+1F1EC"},"SH":{"name":"Saint Helena","native":"Saint Helena","phone":"290","continent":"AF","capital":"Jamestown","currency":"SHP","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDED","emojiU":"U+1F1F8 U+1F1ED"},"SI":{"name":"Slovenia","native":"Slovenija","phone":"386","continent":"EU","capital":"Ljubljana","currency":"EUR","languages":["sl"],"emoji":"\uD83C\uDDF8\uD83C\uDDEE","emojiU":"U+1F1F8 U+1F1EE"},"SJ":{"name":"Svalbard and Jan Mayen","native":"Svalbard og Jan Mayen","phone":"4779","continent":"EU","capital":"Longyearbyen","currency":"NOK","languages":["no"],"emoji":"\uD83C\uDDF8\uD83C\uDDEF","emojiU":"U+1F1F8 U+1F1EF"},"SK":{"name":"Slovakia","native":"Slovensko","phone":"421","continent":"EU","capital":"Bratislava","currency":"EUR","languages":["sk"],"emoji":"\uD83C\uDDF8\uD83C\uDDF0","emojiU":"U+1F1F8 U+1F1F0"},"SL":{"name":"Sierra Leone","native":"Sierra Leone","phone":"232","continent":"AF","capital":"Freetown","currency":"SLL","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDF1","emojiU":"U+1F1F8 U+1F1F1"},"SM":{"name":"San Marino","native":"San Marino","phone":"378","continent":"EU","capital":"City of San Marino","currency":"EUR","languages":["it"],"emoji":"\uD83C\uDDF8\uD83C\uDDF2","emojiU":"U+1F1F8 U+1F1F2"},"SN":{"name":"Senegal","native":"Sénégal","phone":"221","continent":"AF","capital":"Dakar","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF8\uD83C\uDDF3","emojiU":"U+1F1F8 U+1F1F3"},"SO":{"name":"Somalia","native":"Soomaaliya","phone":"252","continent":"AF","capital":"Mogadishu","currency":"SOS","languages":["so","ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDF4","emojiU":"U+1F1F8 U+1F1F4"},"SR":{"name":"Suriname","native":"Suriname","phone":"597","continent":"SA","capital":"Paramaribo","currency":"SRD","languages":["nl"],"emoji":"\uD83C\uDDF8\uD83C\uDDF7","emojiU":"U+1F1F8 U+1F1F7"},"SS":{"name":"South Sudan","native":"South Sudan","phone":"211","continent":"AF","capital":"Juba","currency":"SSP","languages":["en"],"emoji":"\uD83C\uDDF8\uD83C\uDDF8","emojiU":"U+1F1F8 U+1F1F8"},"ST":{"name":"São Tomé and Príncipe","native":"São Tomé e Príncipe","phone":"239","continent":"AF","capital":"São Tomé","currency":"STN","languages":["pt"],"emoji":"\uD83C\uDDF8\uD83C\uDDF9","emojiU":"U+1F1F8 U+1F1F9"},"SV":{"name":"El Salvador","native":"El Salvador","phone":"503","continent":"NA","capital":"San Salvador","currency":"SVC,USD","languages":["es"],"emoji":"\uD83C\uDDF8\uD83C\uDDFB","emojiU":"U+1F1F8 U+1F1FB"},"SX":{"name":"Sint Maarten","native":"Sint Maarten","phone":"1721","continent":"NA","capital":"Philipsburg","currency":"ANG","languages":["nl","en"],"emoji":"\uD83C\uDDF8\uD83C\uDDFD","emojiU":"U+1F1F8 U+1F1FD"},"SY":{"name":"Syria","native":"سوريا","phone":"963","continent":"AS","capital":"Damascus","currency":"SYP","languages":["ar"],"emoji":"\uD83C\uDDF8\uD83C\uDDFE","emojiU":"U+1F1F8 U+1F1FE"},"SZ":{"name":"Swaziland","native":"Swaziland","phone":"268","continent":"AF","capital":"Lobamba","currency":"SZL","languages":["en","ss"],"emoji":"\uD83C\uDDF8\uD83C\uDDFF","emojiU":"U+1F1F8 U+1F1FF"},"TC":{"name":"Turks and Caicos Islands","native":"Turks and Caicos Islands","phone":"1649","continent":"NA","capital":"Cockburn Town","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDE8","emojiU":"U+1F1F9 U+1F1E8"},"TD":{"name":"Chad","native":"Tchad","phone":"235","continent":"AF","capital":"N\'Djamena","currency":"XAF","languages":["fr","ar"],"emoji":"\uD83C\uDDF9\uD83C\uDDE9","emojiU":"U+1F1F9 U+1F1E9"},"TF":{"name":"French Southern Territories","native":"Territoire des Terres australes et antarctiques fr","phone":"262","continent":"AN","capital":"Port-aux-Français","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDF9\uD83C\uDDEB","emojiU":"U+1F1F9 U+1F1EB"},"TG":{"name":"Togo","native":"Togo","phone":"228","continent":"AF","capital":"Lomé","currency":"XOF","languages":["fr"],"emoji":"\uD83C\uDDF9\uD83C\uDDEC","emojiU":"U+1F1F9 U+1F1EC"},"TH":{"name":"Thailand","native":"ประเทศไทย","phone":"66","continent":"AS","capital":"Bangkok","currency":"THB","languages":["th"],"emoji":"\uD83C\uDDF9\uD83C\uDDED","emojiU":"U+1F1F9 U+1F1ED"},"TJ":{"name":"Tajikistan","native":"Тоҷикистон","phone":"992","continent":"AS","capital":"Dushanbe","currency":"TJS","languages":["tg","ru"],"emoji":"\uD83C\uDDF9\uD83C\uDDEF","emojiU":"U+1F1F9 U+1F1EF"},"TK":{"name":"Tokelau","native":"Tokelau","phone":"690","continent":"OC","capital":"Fakaofo","currency":"NZD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDF0","emojiU":"U+1F1F9 U+1F1F0"},"TL":{"name":"East Timor","native":"Timor-Leste","phone":"670","continent":"OC","capital":"Dili","currency":"USD","languages":["pt"],"emoji":"\uD83C\uDDF9\uD83C\uDDF1","emojiU":"U+1F1F9 U+1F1F1"},"TM":{"name":"Turkmenistan","native":"Türkmenistan","phone":"993","continent":"AS","capital":"Ashgabat","currency":"TMT","languages":["tk","ru"],"emoji":"\uD83C\uDDF9\uD83C\uDDF2","emojiU":"U+1F1F9 U+1F1F2"},"TN":{"name":"Tunisia","native":"تونس","phone":"216","continent":"AF","capital":"Tunis","currency":"TND","languages":["ar"],"emoji":"\uD83C\uDDF9\uD83C\uDDF3","emojiU":"U+1F1F9 U+1F1F3"},"TO":{"name":"Tonga","native":"Tonga","phone":"676","continent":"OC","capital":"Nuku\'alofa","currency":"TOP","languages":["en","to"],"emoji":"\uD83C\uDDF9\uD83C\uDDF4","emojiU":"U+1F1F9 U+1F1F4"},"TR":{"name":"Turkey","native":"Türkiye","phone":"90","continent":"AS","capital":"Ankara","currency":"TRY","languages":["tr"],"emoji":"\uD83C\uDDF9\uD83C\uDDF7","emojiU":"U+1F1F9 U+1F1F7"},"TT":{"name":"Trinidad and Tobago","native":"Trinidad and Tobago","phone":"1868","continent":"NA","capital":"Port of Spain","currency":"TTD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDF9","emojiU":"U+1F1F9 U+1F1F9"},"TV":{"name":"Tuvalu","native":"Tuvalu","phone":"688","continent":"OC","capital":"Funafuti","currency":"AUD","languages":["en"],"emoji":"\uD83C\uDDF9\uD83C\uDDFB","emojiU":"U+1F1F9 U+1F1FB"},"TW":{"name":"Taiwan","native":"臺灣","phone":"886","continent":"AS","capital":"Taipei","currency":"TWD","languages":["zh"],"emoji":"\uD83C\uDDF9\uD83C\uDDFC","emojiU":"U+1F1F9 U+1F1FC"},"TZ":{"name":"Tanzania","native":"Tanzania","phone":"255","continent":"AF","capital":"Dodoma","currency":"TZS","languages":["sw","en"],"emoji":"\uD83C\uDDF9\uD83C\uDDFF","emojiU":"U+1F1F9 U+1F1FF"},"UA":{"name":"Ukraine","native":"Україна","phone":"380","continent":"EU","capital":"Kyiv","currency":"UAH","languages":["uk"],"emoji":"\uD83C\uDDFA\uD83C\uDDE6","emojiU":"U+1F1FA U+1F1E6"},"UG":{"name":"Uganda","native":"Uganda","phone":"256","continent":"AF","capital":"Kampala","currency":"UGX","languages":["en","sw"],"emoji":"\uD83C\uDDFA\uD83C\uDDEC","emojiU":"U+1F1FA U+1F1EC"},"UM":{"name":"U.S. Minor Outlying Islands","native":"United States Minor Outlying Islands","phone":"1","continent":"OC","capital":"","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFA\uD83C\uDDF2","emojiU":"U+1F1FA U+1F1F2"},"US":{"name":"United States","native":"United States","phone":"1","continent":"NA","capital":"Washington D.C.","currency":"USD,USN,USS","languages":["en"],"emoji":"\uD83C\uDDFA\uD83C\uDDF8","emojiU":"U+1F1FA U+1F1F8"},"UY":{"name":"Uruguay","native":"Uruguay","phone":"598","continent":"SA","capital":"Montevideo","currency":"UYI,UYU","languages":["es"],"emoji":"\uD83C\uDDFA\uD83C\uDDFE","emojiU":"U+1F1FA U+1F1FE"},"UZ":{"name":"Uzbekistan","native":"O\u2018zbekiston","phone":"998","continent":"AS","capital":"Tashkent","currency":"UZS","languages":["uz","ru"],"emoji":"\uD83C\uDDFA\uD83C\uDDFF","emojiU":"U+1F1FA U+1F1FF"},"VA":{"name":"Vatican City","native":"Vaticano","phone":"379","continent":"EU","capital":"Vatican City","currency":"EUR","languages":["it","la"],"emoji":"\uD83C\uDDFB\uD83C\uDDE6","emojiU":"U+1F1FB U+1F1E6"},"VC":{"name":"Saint Vincent and the Grenadines","native":"Saint Vincent and the Grenadines","phone":"1784","continent":"NA","capital":"Kingstown","currency":"XCD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDE8","emojiU":"U+1F1FB U+1F1E8"},"VE":{"name":"Venezuela","native":"Venezuela","phone":"58","continent":"SA","capital":"Caracas","currency":"VES","languages":["es"],"emoji":"\uD83C\uDDFB\uD83C\uDDEA","emojiU":"U+1F1FB U+1F1EA"},"VG":{"name":"British Virgin Islands","native":"British Virgin Islands","phone":"1284","continent":"NA","capital":"Road Town","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDEC","emojiU":"U+1F1FB U+1F1EC"},"VI":{"name":"U.S. Virgin Islands","native":"United States Virgin Islands","phone":"1340","continent":"NA","capital":"Charlotte Amalie","currency":"USD","languages":["en"],"emoji":"\uD83C\uDDFB\uD83C\uDDEE","emojiU":"U+1F1FB U+1F1EE"},"VN":{"name":"Vietnam","native":"Việt Nam","phone":"84","continent":"AS","capital":"Hanoi","currency":"VND","languages":["vi"],"emoji":"\uD83C\uDDFB\uD83C\uDDF3","emojiU":"U+1F1FB U+1F1F3"},"VU":{"name":"Vanuatu","native":"Vanuatu","phone":"678","continent":"OC","capital":"Port Vila","currency":"VUV","languages":["bi","en","fr"],"emoji":"\uD83C\uDDFB\uD83C\uDDFA","emojiU":"U+1F1FB U+1F1FA"},"WF":{"name":"Wallis and Futuna","native":"Wallis et Futuna","phone":"681","continent":"OC","capital":"Mata-Utu","currency":"XPF","languages":["fr"],"emoji":"\uD83C\uDDFC\uD83C\uDDEB","emojiU":"U+1F1FC U+1F1EB"},"WS":{"name":"Samoa","native":"Samoa","phone":"685","continent":"OC","capital":"Apia","currency":"WST","languages":["sm","en"],"emoji":"\uD83C\uDDFC\uD83C\uDDF8","emojiU":"U+1F1FC U+1F1F8"},"XK":{"name":"Kosovo","native":"Republika e Kosovës","phone":"377,381,383,386","continent":"EU","capital":"Pristina","currency":"EUR","languages":["sq","sr"],"emoji":"\uD83C\uDDFD\uD83C\uDDF0","emojiU":"U+1F1FD U+1F1F0"},"YE":{"name":"Yemen","native":"اليَمَن","phone":"967","continent":"AS","capital":"Sana\'a","currency":"YER","languages":["ar"],"emoji":"\uD83C\uDDFE\uD83C\uDDEA","emojiU":"U+1F1FE U+1F1EA"},"YT":{"name":"Mayotte","native":"Mayotte","phone":"262","continent":"AF","capital":"Mamoudzou","currency":"EUR","languages":["fr"],"emoji":"\uD83C\uDDFE\uD83C\uDDF9","emojiU":"U+1F1FE U+1F1F9"},"ZA":{"name":"South Africa","native":"South Africa","phone":"27","continent":"AF","capital":"Pretoria","currency":"ZAR","languages":["af","en","nr","st","ss","tn","ts","ve","xh","zu"],"emoji":"\uD83C\uDDFF\uD83C\uDDE6","emojiU":"U+1F1FF U+1F1E6"},"ZM":{"name":"Zambia","native":"Zambia","phone":"260","continent":"AF","capital":"Lusaka","currency":"ZMW","languages":["en"],"emoji":"\uD83C\uDDFF\uD83C\uDDF2","emojiU":"U+1F1FF U+1F1F2"},"ZW":{"name":"Zimbabwe","native":"Zimbabwe","phone":"263","continent":"AF","capital":"Harare","currency":"USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY","languages":["en","sn","nd"],"emoji":"\uD83C\uDDFF\uD83C\uDDFC","emojiU":"U+1F1FF U+1F1FC"}}');
        },
        function(a) {
            a.exports = JSON.parse('{"af":{"name":"Afrikaans","native":"Afrikaans"},"am":{"name":"Amharic","native":"አማርኛ"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bi":{"name":"Bislama","native":"Bislama"},"bn":{"name":"Bengali","native":"বাংলা"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ch":{"name":"Chamorro","native":"Chamoru"},"cs":{"name":"Czech","native":"Čeština"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང\u0F0Bཁ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"ga":{"name":"Irish","native":"Gaeilge"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gv":{"name":"Manx","native":"Gaelg"},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"ja":{"name":"Japanese","native":"日本語"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"ko":{"name":"Korean","native":"한국어"},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"mn":{"name":"Mongolian","native":"Монгол"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sg":{"name":"Sango","native":"Sängö"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"xh":{"name":"Xhosa","native":"isiXhosa"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}');
        },
        function(a) {
            a.exports = JSON.parse('{"aa":{"name":"Afar","native":"Afar"},"ab":{"name":"Abkhazian","native":"Аҧсуа"},"af":{"name":"Afrikaans","native":"Afrikaans"},"ak":{"name":"Akan","native":"Akana"},"am":{"name":"Amharic","native":"አማርኛ"},"an":{"name":"Aragonese","native":"Aragonés"},"ar":{"name":"Arabic","native":"العربية","rtl":1},"as":{"name":"Assamese","native":"অসমীয়া"},"av":{"name":"Avar","native":"Авар"},"ay":{"name":"Aymara","native":"Aymar"},"az":{"name":"Azerbaijani","native":"Azərbaycanca / آذربايجان"},"ba":{"name":"Bashkir","native":"Башҡорт"},"be":{"name":"Belarusian","native":"Беларуская"},"bg":{"name":"Bulgarian","native":"Български"},"bh":{"name":"Bihari","native":"भोजपुरी"},"bi":{"name":"Bislama","native":"Bislama"},"bm":{"name":"Bambara","native":"Bamanankan"},"bn":{"name":"Bengali","native":"বাংলা"},"bo":{"name":"Tibetan","native":"བོད\u0F0Bཡིག / Bod skad"},"br":{"name":"Breton","native":"Brezhoneg"},"bs":{"name":"Bosnian","native":"Bosanski"},"ca":{"name":"Catalan","native":"Català"},"ce":{"name":"Chechen","native":"Нохчийн"},"ch":{"name":"Chamorro","native":"Chamoru"},"co":{"name":"Corsican","native":"Corsu"},"cr":{"name":"Cree","native":"Nehiyaw"},"cs":{"name":"Czech","native":"Čeština"},"cu":{"name":"Old Church Slavonic / Old Bulgarian","native":"словѣньскъ / slověnĭskŭ"},"cv":{"name":"Chuvash","native":"Чăваш"},"cy":{"name":"Welsh","native":"Cymraeg"},"da":{"name":"Danish","native":"Dansk"},"de":{"name":"German","native":"Deutsch"},"dv":{"name":"Divehi","native":"ދިވެހިބަސް","rtl":1},"dz":{"name":"Dzongkha","native":"ཇོང\u0F0Bཁ"},"ee":{"name":"Ewe","native":"Ɛʋɛ"},"el":{"name":"Greek","native":"Ελληνικά"},"en":{"name":"English","native":"English"},"eo":{"name":"Esperanto","native":"Esperanto"},"es":{"name":"Spanish","native":"Español"},"et":{"name":"Estonian","native":"Eesti"},"eu":{"name":"Basque","native":"Euskara"},"fa":{"name":"Persian","native":"فارسی","rtl":1},"ff":{"name":"Peul","native":"Fulfulde"},"fi":{"name":"Finnish","native":"Suomi"},"fj":{"name":"Fijian","native":"Na Vosa Vakaviti"},"fo":{"name":"Faroese","native":"Føroyskt"},"fr":{"name":"French","native":"Français"},"fy":{"name":"West Frisian","native":"Frysk"},"ga":{"name":"Irish","native":"Gaeilge"},"gd":{"name":"Scottish Gaelic","native":"Gàidhlig"},"gl":{"name":"Galician","native":"Galego"},"gn":{"name":"Guarani","native":"Avañe\'ẽ"},"gu":{"name":"Gujarati","native":"ગુજરાતી"},"gv":{"name":"Manx","native":"Gaelg"},"ha":{"name":"Hausa","native":"هَوُسَ","rtl":1},"he":{"name":"Hebrew","native":"עברית","rtl":1},"hi":{"name":"Hindi","native":"हिन्दी"},"ho":{"name":"Hiri Motu","native":"Hiri Motu"},"hr":{"name":"Croatian","native":"Hrvatski"},"ht":{"name":"Haitian","native":"Krèyol ayisyen"},"hu":{"name":"Hungarian","native":"Magyar"},"hy":{"name":"Armenian","native":"Հայերեն"},"hz":{"name":"Herero","native":"Otsiherero"},"ia":{"name":"Interlingua","native":"Interlingua"},"id":{"name":"Indonesian","native":"Bahasa Indonesia"},"ie":{"name":"Interlingue","native":"Interlingue"},"ig":{"name":"Igbo","native":"Igbo"},"ii":{"name":"Sichuan Yi","native":"ꆇꉙ / 四川彝语"},"ik":{"name":"Inupiak","native":"Iñupiak"},"io":{"name":"Ido","native":"Ido"},"is":{"name":"Icelandic","native":"Íslenska"},"it":{"name":"Italian","native":"Italiano"},"iu":{"name":"Inuktitut","native":"ᐃᓄᒃᑎᑐᑦ"},"ja":{"name":"Japanese","native":"日本語"},"jv":{"name":"Javanese","native":"Basa Jawa"},"ka":{"name":"Georgian","native":"ქართული"},"kg":{"name":"Kongo","native":"KiKongo"},"ki":{"name":"Kikuyu","native":"Gĩkũyũ"},"kj":{"name":"Kuanyama","native":"Kuanyama"},"kk":{"name":"Kazakh","native":"Қазақша"},"kl":{"name":"Greenlandic","native":"Kalaallisut"},"km":{"name":"Cambodian","native":"ភាសាខ្មែរ"},"kn":{"name":"Kannada","native":"ಕನ್ನಡ"},"ko":{"name":"Korean","native":"한국어"},"kr":{"name":"Kanuri","native":"Kanuri"},"ks":{"name":"Kashmiri","native":"कश्मीरी / كشميري","rtl":1},"ku":{"name":"Kurdish","native":"Kurdî / كوردی","rtl":1},"kv":{"name":"Komi","native":"Коми"},"kw":{"name":"Cornish","native":"Kernewek"},"ky":{"name":"Kyrgyz","native":"Кыргызча"},"la":{"name":"Latin","native":"Latina"},"lb":{"name":"Luxembourgish","native":"Lëtzebuergesch"},"lg":{"name":"Ganda","native":"Luganda"},"li":{"name":"Limburgian","native":"Limburgs"},"ln":{"name":"Lingala","native":"Lingála"},"lo":{"name":"Laotian","native":"ລາວ / Pha xa lao"},"lt":{"name":"Lithuanian","native":"Lietuvių"},"lu":{"name":"Luba-Katanga","native":"Tshiluba"},"lv":{"name":"Latvian","native":"Latviešu"},"mg":{"name":"Malagasy","native":"Malagasy"},"mh":{"name":"Marshallese","native":"Kajin Majel / Ebon"},"mi":{"name":"Maori","native":"Māori"},"mk":{"name":"Macedonian","native":"Македонски"},"ml":{"name":"Malayalam","native":"മലയാളം"},"mn":{"name":"Mongolian","native":"Монгол"},"mo":{"name":"Moldovan","native":"Moldovenească"},"mr":{"name":"Marathi","native":"मराठी"},"ms":{"name":"Malay","native":"Bahasa Melayu"},"mt":{"name":"Maltese","native":"bil-Malti"},"my":{"name":"Burmese","native":"မြန်မာစာ"},"na":{"name":"Nauruan","native":"Dorerin Naoero"},"nb":{"name":"Norwegian Bokmål","native":"Norsk bokmål"},"nd":{"name":"North Ndebele","native":"Sindebele"},"ne":{"name":"Nepali","native":"नेपाली"},"ng":{"name":"Ndonga","native":"Oshiwambo"},"nl":{"name":"Dutch","native":"Nederlands"},"nn":{"name":"Norwegian Nynorsk","native":"Norsk nynorsk"},"no":{"name":"Norwegian","native":"Norsk"},"nr":{"name":"South Ndebele","native":"isiNdebele"},"nv":{"name":"Navajo","native":"Diné bizaad"},"ny":{"name":"Chichewa","native":"Chi-Chewa"},"oc":{"name":"Occitan","native":"Occitan"},"oj":{"name":"Ojibwa","native":"ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"},"om":{"name":"Oromo","native":"Oromoo"},"or":{"name":"Oriya","native":"ଓଡ଼ିଆ"},"os":{"name":"Ossetian / Ossetic","native":"Иронау"},"pa":{"name":"Panjabi / Punjabi","native":"ਪੰਜਾਬੀ / पंजाबी / پنجابي"},"pi":{"name":"Pali","native":"Pāli / पाऴि"},"pl":{"name":"Polish","native":"Polski"},"ps":{"name":"Pashto","native":"پښتو","rtl":1},"pt":{"name":"Portuguese","native":"Português"},"qu":{"name":"Quechua","native":"Runa Simi"},"rm":{"name":"Raeto Romance","native":"Rumantsch"},"rn":{"name":"Kirundi","native":"Kirundi"},"ro":{"name":"Romanian","native":"Română"},"ru":{"name":"Russian","native":"Русский"},"rw":{"name":"Rwandi","native":"Kinyarwandi"},"sa":{"name":"Sanskrit","native":"संस्कृतम्"},"sc":{"name":"Sardinian","native":"Sardu"},"sd":{"name":"Sindhi","native":"सिनधि"},"se":{"name":"Northern Sami","native":"Sámegiella"},"sg":{"name":"Sango","native":"Sängö"},"sh":{"name":"Serbo-Croatian","native":"Srpskohrvatski / Српскохрватски"},"si":{"name":"Sinhalese","native":"සිංහල"},"sk":{"name":"Slovak","native":"Slovenčina"},"sl":{"name":"Slovenian","native":"Slovenščina"},"sm":{"name":"Samoan","native":"Gagana Samoa"},"sn":{"name":"Shona","native":"chiShona"},"so":{"name":"Somalia","native":"Soomaaliga"},"sq":{"name":"Albanian","native":"Shqip"},"sr":{"name":"Serbian","native":"Српски"},"ss":{"name":"Swati","native":"SiSwati"},"st":{"name":"Southern Sotho","native":"Sesotho"},"su":{"name":"Sundanese","native":"Basa Sunda"},"sv":{"name":"Swedish","native":"Svenska"},"sw":{"name":"Swahili","native":"Kiswahili"},"ta":{"name":"Tamil","native":"தமிழ்"},"te":{"name":"Telugu","native":"తెలుగు"},"tg":{"name":"Tajik","native":"Тоҷикӣ"},"th":{"name":"Thai","native":"ไทย / Phasa Thai"},"ti":{"name":"Tigrinya","native":"ትግርኛ"},"tk":{"name":"Turkmen","native":"Туркмен / تركمن"},"tl":{"name":"Tagalog / Filipino","native":"Tagalog"},"tn":{"name":"Tswana","native":"Setswana"},"to":{"name":"Tonga","native":"Lea Faka-Tonga"},"tr":{"name":"Turkish","native":"Türkçe"},"ts":{"name":"Tsonga","native":"Xitsonga"},"tt":{"name":"Tatar","native":"Tatarça"},"tw":{"name":"Twi","native":"Twi"},"ty":{"name":"Tahitian","native":"Reo Mā`ohi"},"ug":{"name":"Uyghur","native":"Uyƣurqə / ئۇيغۇرچە"},"uk":{"name":"Ukrainian","native":"Українська"},"ur":{"name":"Urdu","native":"اردو","rtl":1},"uz":{"name":"Uzbek","native":"Ўзбек"},"ve":{"name":"Venda","native":"Tshivenḓa"},"vi":{"name":"Vietnamese","native":"Tiếng Việt"},"vo":{"name":"Volapük","native":"Volapük"},"wa":{"name":"Walloon","native":"Walon"},"wo":{"name":"Wolof","native":"Wollof"},"xh":{"name":"Xhosa","native":"isiXhosa"},"yi":{"name":"Yiddish","native":"ייִדיש","rtl":1},"yo":{"name":"Yoruba","native":"Yorùbá"},"za":{"name":"Zhuang","native":"Cuengh / Tôô / 壮语"},"zh":{"name":"Chinese","native":"中文"},"zu":{"name":"Zulu","native":"isiZulu"}}');
        },
        function(a, b, s) {
            (function(a, t) {
                var c;

                function d(a) {
                    return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
                        return typeof a;
                    } : function(a) {
                        return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
                    })(a);
                }! function(D) {
                    var e = 'object' == d(b) && b && !b.nodeType && b,
                        f = 'object' == d(a) && a && !a.nodeType && a,
                        g = 'object' == (void 0 === t ? 'undefined' : d(t)) && t;
                    g.global !== g && g.window !== g && g.self !== g || (D = g);
                    var h, i, j = 2147483647,
                        k = /^xn--/,
                        l = /[^\x20-\x7E]/,
                        m = /[\x2E\u3002\uFF0E\uFF61]/g,
                        n = {
                            overflow: 'Overflow: input needs wider integers to process',
                            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                            'invalid-input': 'Invalid input'
                        },
                        o = Math.floor,
                        p = String.fromCharCode;

                    function q(a) {
                        throw new RangeError(n[a]);
                    }

                    function r(a, b) {
                        for (var s = a.length, t = []; s--;)
                            t[s] = b(a[s]);
                        return t;
                    }

                    function s(a, b) {
                        var t = a.split('@'),
                            u = '';
                        return t.length > 1 && (u = t[0] + '@', a = t[1]), u + r((a = a.replace(m, '.')).split('.'), b).join('.');
                    }

                    function t(a) {
                        for (var u, v, w = [], x = 0, y = a.length; x < y;)
                            (u = a.charCodeAt(x++)) >= 55296 && u <= 56319 && x < y ? 56320 == (64512 & (v = a.charCodeAt(x++))) ? w.push(((1023 & u) << 10) + (1023 & v) + 65536) : (w.push(u), x--) : w.push(u);
                        return w;
                    }

                    function u(a) {
                        return r(a, function(a) {
                            var v = '';
                            return a > 65535 && (v += p((a -= 65536) >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), v + p(a);
                        }).join('');
                    }

                    function v(a, b) {
                        return a + 22 + 75 * (a < 26) - ((0 != b) << 5);
                    }

                    function w(a, b, z) {
                        var x = 0;
                        for (a = z ? o(a / 700) : a >> 1, a += o(a / b); a > 455; x += 36)
                            a = o(a / 35);
                        return o(x + 36 * a / (a + 38));
                    }

                    function x(a) {
                        var y, z, A, B, C, D, E, F, G, H, I, J = [],
                            K = a.length,
                            L = 0,
                            M = 128,
                            N = 72;
                        for ((z = a.lastIndexOf('-')) < 0 && (z = 0), A = 0; A < z; ++A)
                            a.charCodeAt(A) >= 128 && q('not-basic'), J.push(a.charCodeAt(A));
                        for (B = z > 0 ? z + 1 : 0; B < K;) {
                            for (C = L, D = 1, E = 36; B >= K && q('invalid-input'), ((F = (I = a.charCodeAt(B++)) - 48 < 10 ? I - 22 : I - 65 < 26 ? I - 65 : I - 97 < 26 ? I - 97 : 36) >= 36 || F > o((j - L) / D)) && q('overflow'), L += F * D, !(F < (G = E <= N ? 1 : E >= N + 26 ? 26 : E - N)); E += 36)
                                D > o(j / (H = 36 - G)) && q('overflow'), D *= H;
                            N = w(L - C, y = J.length + 1, 0 == C), o(L / y) > j - M && q('overflow'), M += o(L / y), L %= y, J.splice(L++, 0, M);
                        }
                        return u(J);
                    }

                    function y(a) {
                        var z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = [];
                        for (K = (a = t(a)).length, z = 128, A = 0, D = 72, E = 0; E < K; ++E)
                            (J = a[E]) < 128 && O.push(p(J));
                        for (B = C = O.length, C && O.push('-'); B < K;) {
                            for (F = j, E = 0; E < K; ++E)
                                (J = a[E]) >= z && J < F && (F = J);
                            for (F - z > o((j - A) / (L = B + 1)) && q('overflow'), A += (F - z) * L, z = F, E = 0; E < K; ++E)
                                if ((J = a[E]) < z && ++A > j && q('overflow'), J == z) {
                                    for (G = A, H = 36; !(G < (I = H <= D ? 1 : H >= D + 26 ? 26 : H - D)); H += 36)
                                        N = G - I, M = 36 - I, O.push(p(v(I + N % M, 0))), G = o(N / M);
                                    O.push(p(v(G, 0))), D = w(A, L, B == C), A = 0, ++B;
                                }
                                ++ A, ++z;
                        }
                        return O.join('');
                    }
                    if (I = {
                            version: '1.4.1',
                            ucs2: {
                                decode: t,
                                encode: u
                            },
                            decode: x,
                            encode: y,
                            toASCII: function(a) {
                                return s(a, function(a) {
                                    return L.test(a) ? 'xn--' + y(a) : a;
                                });
                            },
                            toUnicode: function(a) {
                                return s(a, function(a) {
                                    return K.test(a) ? x(a.slice(4).toLowerCase()) : a;
                                });
                            }
                        }, 'object' == D(A(0)) && A(0))
                        void 0 === (C = function() {
                            return I;
                        }.call(z, A, z, a)) || (a.exports = C);
                    else if (F && G)
                        if (a.exports == F)
                            G.exports = I;
                        else
                            for (J in I)
                                I.hasOwnProperty(J) && (F[J] = I[J]);
                    else
                        E.punycode = I;
                }(this);
            }.call(this, c(7)(a), c(8)));
        },
        function(a, b) {
            a.exports = function(a) {
                return a.webpackPolyfill || (a.deprecate = function() {}, a.paths = [], a.children || (a.children = []), Object.defineProperty(a, 'loaded', {
                    enumerable: !0,
                    get: function() {
                        return a.l;
                    }
                }), Object.defineProperty(a, 'id', {
                    enumerable: !0,
                    get: function() {
                        return a.i;
                    }
                }), a.webpackPolyfill = 1), a;
            };
        },
        function(a, b) {
            function c(a) {
                return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
                    return typeof a;
                } : function(a) {
                    return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
                })(a);
            }
            var d;
            d = function() {
                return this;
            }();
            try {
                d = d || new Function('return this')();
            } catch (a) {
                'object' === ('undefined' == typeof window ? 'undefined' : c(window)) && (d = window);
            }
            a.exports = d;
        }
    ]);
}), b.register('QgV8u', function(r, s) {
    a(r.exports, 'default', function() {
        return g;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('f9f+a'),
        e = b('gSUVO'),
        f = b('lmfrI');
    var g = a => (0, c.jsx)(d.default, {
        hoverable: !0,
        style: {
            marginBottom: 10
        },
        onClick: a.onSelect,
        children: (0, c.jsxs)('div', {
            style: {
                fontFamily: e.Fonts.SFPro,
                color: f.default.Black
            },
            children: [
                (0, c.jsx)('div', {
                    style: {
                        fontSize: 18,
                        fontWeight: e.FontWeights.Bold
                    },
                    children: a.name
                }),
                (0, c.jsx)('div', {
                    style: {
                        fontSize: 14
                    },
                    children: a.description
                })
            ]
        })
    });
}), b.register('/nFOP0', function(r, s) {
    a(r.exports, 'optionsForAreaOfExpertise', function() {
        return m;
    }), a(r.exports, 'default', function() {
        return o;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('eMhMk1'),
        f = b('ExtIT'),
        g = b('Ly1h3'),
        h = b('+qN5a2'),
        i = b('/rcVD4'),
        j = b('MHioT3'),
        k = b('PawcO1'),
        l = b('q721a');
    const m = [
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
        n = [
            'Pre-K',
            'Elementary School',
            'Middle School',
            'High School',
            'Post High School',
            'Other School',
            'Not Using For School',
            'Other'
        ];
    var o = () => {
        const {
            login: p
        } = d.useContext(i.default), [q, r] = d.useState(''), [s, t] = d.useState(''), u = !q || !s;
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(e.Title, {
                    children: '\uD83D\uDCA1 Area of Expertise'
                }),
                (0, c.jsx)(g.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: p => r(p),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: m.map(p => ({
                        value: p,
                        label: p
                    }))
                }),
                (0, c.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, c.jsx)(e.Title, {
                    children: '\uD83C\uDF82 Grade Level'
                }),
                (0, c.jsx)(g.default, {
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Select one...',
                    size: 'large',
                    onChange: p => t(p),
                    optionFilterProp: 'label',
                    showSearch: !0,
                    options: n.map(p => ({
                        value: p,
                        label: p
                    }))
                }),
                (0, c.jsx)(h.default, {
                    size: 'large',
                    style: {
                        marginTop: 10
                    },
                    disabled: u,
                    onClick: () => {
                        u || (p.areaOfExpertise = q, p.gradeLevel = s, p.informationNeeded.replace(p.informationNeeded.filter(p => p !== j.informationTypes.areaOfExpertise && p !== j.informationTypes.gradeLevel)));
                    },
                    children: 'Continue'
                }),
                (0, c.jsx)(f.default, {}),
                (0, c.jsxs)('div', {
                    style: {
                        textAlign: 'center'
                    },
                    children: [
                        'By continuing, you agree to our',
                        ' ',
                        (0, c.jsx)('a', {
                            href: l.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        ' ',
                        'and',
                        ' ',
                        (0, c.jsx)('a', {
                            href: l.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        '.'
                    ]
                }),
                (0, c.jsx)('div', {
                    style: {
                        height: 25
                    }
                }),
                (0, c.jsx)(k.default, {
                    link: 'https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52'
                })
            ]
        });
    };
}), b.register('hHU+F', function(p, q) {
    a(p.exports, 'default', function() {
        return m;
    });
    var c = b('J7Y504'),
        d = b('PjB0f'),
        e = b('GFgjD'),
        f = b('q721a'),
        g = b('cR5QE'),
        h = b('MHioT3'),
        i = b('seamH'),
        j = b('UnUp5'),
        k = b('k0s2g17'),
        l = b('PBHiG');
    var m = () => {
        const {
            login: n,
            navigation: o
        } = c.default, p = 'true' === (0, d.getUrlVariable)('blockRedirect'), q = () => {
            window && window.parent && window.parent.postMessage && window.parent.postMessage({
                type: '_authenticated_',
                user: (0, j.toJS)((0, d.getUser)())
            }, l.inProductionOrStaging ? (0, d.getDomain)() : '*');
        };
        if (n.userExists) {
            const r = () => {
                const s = {
                    email: n.email,
                    password: n.password,
                    googleToken: n.googleToken
                };
                o.loggingIn = !0, (0, d.request)({
                    url: '/api/login',
                    method: 'post',
                    data: s,
                    success: o => {
                        if (i.default.user.setUser(o.user, !0), n.authenticated = !0, o.modal && o.modal.type && g.default[o.modal.type]({
                                title: 'Account Information',
                                content: o.modal.message
                            }), o.informationNeeded.length)
                            n.informationNeeded.replace([
                                ...n.informationNeeded,
                                ...o.informationNeeded
                            ]);
                        else {
                            let t = c.default.navigation.redirectUri;
                            t || (t = f.DASHBOARD), t.includes('logout') && (t = f.DASHBOARD), p ? q() : (0, k.NavigateTo)(t);
                        }
                    },
                    error: n => {
                        c.default.navigation.loginError = n, c.default.login.password ? c.default.login.informationNeeded.replace([
                            ...c.default.login.informationNeeded,
                            h.informationTypes.password
                        ]) : c.default.login.informationNeeded.replace([
                            ...c.default.login.informationNeeded,
                            h.informationTypes.email
                        ]);
                    },
                    both: () => c.default.navigation.loggingIn = !1
                });
            };
            if (n.authenticated) {
                const t = (() => {
                    const {
                        login: u
                    } = c.default, v = Object.keys(u), w = [];
                    return v.forEach(v => {
                        const x = u[v];
                        '' !== x && null != x && ('accountType' === v && w.push({
                            key: h.informationTypes.accountType,
                            value: x
                        }), 'firstName' === v && w.push({
                            key: h.informationTypes.firstName,
                            value: x
                        }), 'lastName' === v && w.push({
                            key: h.informationTypes.lastName,
                            value: x
                        }), 'schoolId' === v && w.push({
                            key: h.informationTypes.schoolId,
                            value: x
                        }), 'districtId' === v && w.push({
                            key: h.informationTypes.districtId,
                            value: x
                        }), 'country' === v && w.push({
                            key: h.informationTypes.country,
                            value: x
                        }), 'areaOfExpertise' === v && w.push({
                            key: h.informationTypes.areaOfExpertise,
                            value: x
                        }), 'gradeLevel' === v && w.push({
                            key: h.informationTypes.gradeLevel,
                            value: x
                        }), 'acceptsLatestPolicies' === v && w.push({
                            key: h.informationTypes.acceptedLatestPolicies,
                            value: x
                        }), 'organization' === v && w.push({
                            key: h.informationTypes.organization,
                            value: x
                        }));
                    }), w;
                })();
                t && t.length ? (c.default.navigation.updatingAccountInformation = !0, (0, d.request)({
                    url: '/api/users/update-information',
                    method: 'post',
                    data: {
                        changes: t
                    },
                    success: () => {
                        r();
                    },
                    error: () => {
                        c.default.navigation.updatingAccountInformation = !1, (0, s.throwError)({
                            title: 'Error updating account information',
                            content: 'Please contact support.'
                        });
                    }
                })) : r();
            } else
                r();
        } else {
            const s = {
                firstName: n.firstName,
                lastName: n.lastName,
                email: n.email,
                googleToken: n.googleToken,
                password: n.password,
                accountType: n.accountType,
                country: n.country,
                schoolId: n.schoolId,
                districtId: n.districtId,
                areaOfExpertise: n.areaOfExpertise,
                organization: n.organization,
                gradeLevel: n.gradeLevel,
                groupJoining: o.classJoiningId
            };
            if (c.default.navigation.creatingAccount)
                return;
            c.default.navigation.creatingAccount = !0, (0, d.request)({
                url: '/api/register',
                method: 'post',
                data: s,
                success: n => {
                    sessionStorage.setItem('NEW_USER', 'YES'), i.default.user.setUser(n, !0);
                    let t = c.default.navigation.redirectUri;
                    t || (t = f.DASHBOARD), p ? q() : (0, k.NavigateTo)(t);
                },
                error: n => {
                    (0, d.throwMessageError)({
                        e: n,
                        default: {
                            title: 'Error creating account',
                            content: 'Please try again later'
                        },
                        onOk: () => window.location.reload()
                    });
                },
                both: () => c.default.navigation.creatingAccount = !1
            });
        }
    };
}), b.register('k0s2g17', function(n, o) {
    a(n.exports, 'NavigateTo', function() {
        return d;
    });
    var c = b('Cr/BM');
    const d = a => {
        c.history.push(a);
    };
}), b.register('Adkgx', function(n, o) {
    a(n.exports, 'default', function() {
        return l;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('Vlfxs'),
        f = b('/rcVD4'),
        g = b('MHioT3'),
        h = b('lmfrI'),
        i = b('gSUVO'),
        j = b('+qN5a2'),
        k = b('q721a');
    var l = (0, e.observer)(() => {
        const {
            login: m
        } = d.useContext(f.default);
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsxs)('div', {
                    style: {
                        color: h.default.Black,
                        fontWeight: i.FontWeights.Normal,
                        fontSize: 19
                    },
                    children: [
                        'We\'ve updated our',
                        ' ',
                        (0, c.jsx)('a', {
                            href: k.TERMS_OF_SERVICE,
                            target: '_blank',
                            children: 'Terms Of Service'
                        }),
                        ' ',
                        '&',
                        ' ',
                        (0, c.jsx)('a', {
                            href: k.PRIVACY_POLICY,
                            target: '_blank',
                            children: 'Privacy Policy'
                        }),
                        '.'
                    ]
                }),
                (0, c.jsx)(j.default, {
                    style: {
                        marginTop: 5
                    },
                    size: 'large',
                    onClick: () => {
                        m.acceptsLatestPolicies = !0, m.informationNeeded.replace(m.informationNeeded.filter(m => m !== g.informationTypes.acceptedLatestPolicies));
                    },
                    children: 'I Agree'
                })
            ]
        });
    });
}), b.register('+774S', function(n, o) {
    a(n.exports, 'default', function() {
        return k;
    });
    var c = b('8kSQZ'),
        d = b('uPP4W'),
        e = b('eMhMk1'),
        f = b('c6x8w'),
        g = b('+qN5a2'),
        h = b('/rcVD4'),
        i = b('MHioT3'),
        j = b('PawcO1');
    var k = () => {
        const [l, m] = d.useState(''), {
            login: n
        } = d.useContext(h.default), o = () => {
            n.organization = l, n.informationNeeded.replace(n.informationNeeded.filter(l => l !== i.informationTypes.organization));
        };
        return (0, c.jsxs)(c.Fragment, {
            children: [
                (0, c.jsx)(e.Title, {
                    children: 'Organization (optional)'
                }),
                (0, c.jsx)(f.default, {
                    size: 'large',
                    style: {
                        width: '100%'
                    },
                    placeholder: 'Gimkit Productions...',
                    onChange: l => {
                        m(l.target.value);
                    },
                    onPressEnter: o,
                    autoFocus: !0
                }),
                (0, c.jsx)(g.default, {
                    onClick: o,
                    style: {
                        marginTop: 5,
                        width: '100%'
                    },
                    children: 'Continue'
                }),
                (0, c.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, c.jsx)(j.default, {
                    link: 'https://www.notion.so/gimkit/Organization-0931f4ca9b48423c97663801d8b95387'
                })
            ]
        });
    };
}), b.register('Fe7J9', function(b, m) {
    a(b.exports, 'IsURLFromUs', function() {
        return c;
    });
    const c = a => a.startsWith(window.location.origin) || a.startsWith('/');
}), b.register('XRX1525', function(m, i) {
    a(m.exports, 'default', function() {
        return f;
    });
    var c = b('xgR9K'),
        d = b('uPP4W'),
        e = b('qEw51');

    function f(a, b, m) {
        return function(i) {
            const {
                prefixCls: g,
                style: h
            } = i, j = d.useRef(null), [k, l] = d.useState(0), [m, n] = d.useState(0), [o, p] = (0, c.default)(!1, {
                value: i.open
            }), {
                getPrefixCls: q
            } = d.useContext(e.ConfigContext), r = q(b || 'select', g);
            return d.useEffect(() => {
                if (p(!0), 'undefined' != typeof ResizeObserver) {
                    const s = new ResizeObserver(s => {
                            const t = s[0].target;
                            l(t.offsetHeight + 8), n(t.offsetWidth);
                        }),
                        t = setInterval(() => {
                            var u;
                            const v = m ? `.${ m(r) }` : `.${ r }-dropdown`,
                                w = null === (u = j.current) || void 0 === u ? void 0 : u.querySelector(v);
                            w && (clearInterval(t), s.observe(w));
                        }, 10);
                    return () => {
                        clearInterval(t), s.disconnect();
                    };
                }
            }, []), d.createElement(e.default, {
                theme: {
                    token: {
                        motionDurationFast: '0.01s',
                        motionDurationMid: '0.01s',
                        motionDurationSlow: '0.01s'
                    }
                }
            }, d.createElement('div', {
                ref: j,
                style: {
                    paddingBottom: k,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: m
                }
            }, d.createElement(a, Object.assign({}, i, {
                style: Object.assign(Object.assign({}, h), {
                    margin: 0
                }),
                open: o,
                visible: o,
                getPopupContainer: () => j.current
            }))));
        };
    }
}), b.register('2TjlJ25', function(m, o) {
    a(m.exports, 'initMoveMotion', function() {
        return l;
    });
    var c = b('M5GjZ'),
        d = b('YNerC');
    const e = new(0, c.Keyframes)('antMoveDownIn', {
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
        f = new(0, c.Keyframes)('antMoveDownOut', {
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
        g = new(0, c.Keyframes)('antMoveLeftIn', {
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
        h = new(0, c.Keyframes)('antMoveLeftOut', {
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
        i = new(0, c.Keyframes)('antMoveRightIn', {
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
        j = new(0, c.Keyframes)('antMoveRightOut', {
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
        k = {
            'move-up': {
                inKeyframes: new(0, c.Keyframes)('antMoveUpIn', {
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
                outKeyframes: new(0, c.Keyframes)('antMoveUpOut', {
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
                inKeyframes: e,
                outKeyframes: f
            },
            'move-left': {
                inKeyframes: g,
                outKeyframes: h
            },
            'move-right': {
                inKeyframes: i,
                outKeyframes: j
            }
        },
        l = (a, b) => {
            const {
                antCls: m
            } = n, o = `${ m }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = k[b];
            return [
                (0, d.initMotion)(o, p, q, n.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: n.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: n.motionEaseInOutCirc
                    }
                }
            ];
        };
}), b.register('oSNZM', function(a, c) {
    a(a.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('lByv9'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'CheckOutlined';
    var h = d.forwardRef(g);
}), b.register('lByv9', function(b, a) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('JegR3', function(a, c) {
    a(a.exports, 'default', function() {
        return h;
    });
    var c = b('uhRWM'),
        d = b('uPP4W'),
        e = b('WKaIG'),
        f = b('tEXgG'),
        g = function(a, b) {
            return d.createElement(f.default, (0, c.default)((0, c.default)({}, a), {}, {
                ref: b,
                icon: e.default
            }));
        };
    g.displayName = 'DownOutlined';
    var h = d.forwardRef(g);
}), b.register('WKaIG', function(b, a) {
    a(b.exports, 'default', function() {
        return c;
    });
    var c = {
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
}), b.register('nHGjF', function(a, i) {
    a(a.exports, 'default', function() {
        return e;
    });
    var c = b('8kSQZ');
    b('uPP4W');
    var d = b('bPH7V');
    var e = a => a.error ? (0, c.jsx)(d.default, {
        message: 'Error',
        style: a.style,
        type: 'error',
        description: a.error && a.error.message && a.error.message.text ? a.error.message.text : 'string' == typeof a.error ? a.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
});