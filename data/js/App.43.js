function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}

function a(b) {
    return b && b.__esModule ? b.default : b;
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('YEoUd', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _r(b.exports, 'default', function() {
        return _q;
    });
    var e = a('0hzx+'),
        f = a('LEQ5w'),
        g = a('R3x1N'),
        h = a('78pxp'),
        i = a('Axq+p'),
        j = a('AlPWL'),
        k = a('ixW97'),
        l = a('PMl60'),
        m = a('ahAbF'),
        n = a('RC6kl3'),
        o = a('RJjEi');
    let p;
    var _q = () => (f.useEffect(() => {
        const _r = (0, l.getUrlVariable)('tab');
        _r && _r === m.default.billing && (h.default.navigation.currentTab = m.default.billing);
    }, []), (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(g.default.Provider, {
                value: h.default,
                children: (0, e.jsxs)(n.default, {
                    className: 'flex-column',
                    children: [
                        (0, e.jsx)(o.default, {}),
                        (0, e.jsxs)(_r, {
                            children: [
                                (0, e.jsx)(j.default, {}),
                                (0, e.jsx)(k.default, {})
                            ]
                        })
                    ]
                })
            }),
            (0, e.jsx)(l.Title, {
                title: 'Settings'
            })
        ]
    }));
    const _r = i.default.div.attrs({
        className: 'flex'
    })(p || (p = (_y => _y)`
  flex: 1;
  overflow: hidden;
`));
}), a.register('AlPWL', function(b, c) {
    _y(b.exports, 'default', function() {
        return _x;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('2x11J'),
        i = a('R3x1N'),
        j = a('ahAbF'),
        k = a('PMl60'),
        l = a('XetsG'),
        m = a('ZYBJo4'),
        n = a('dBHoZ22'),
        o = a('tCLSR'),
        p = a('2HvvA11'),
        q = a('gs4MT'),
        r = a('b5kvC'),
        s = a('iIoYI'),
        t = a('YEu6T2');
    let u, v, w = _y => _y;
    var _x = (0, h.observer)(() => {
        const {
            navigation: _y
        } = e.useContext(i.default), z = z => _y.currentTab === z, A = z => _y.currentTab = z, B = !(0, k.isStudent)();
        return (0, d.jsxs)(_y, {
            children: [
                (0, d.jsx)(s.default, {}),
                (0, d.jsx)(t.default, {
                    title: (0, k.isStudent)() ? 'General Settings' : 'Account Information',
                    icon: o.default,
                    onClick: () => A(j.default.accountInformation),
                    selected: z(j.default.accountInformation)
                }),
                !(0, k.isStudent)() && (0, d.jsx)(t.default, {
                    title: 'Game Settings',
                    icon: m.default,
                    onClick: () => A(j.default.gameSettings),
                    selected: z(j.default.gameSettings)
                }),
                B && (0, d.jsx)(t.default, {
                    title: 'Plan & Billing',
                    icon: l.default,
                    selected: z(j.default.billing),
                    onClick: () => A(j.default.billing)
                }),
                !(0, k.isStudent)() && (0, d.jsx)(t.default, {
                    title: 'Help & Support',
                    icon: n.default,
                    selected: z(j.default.support),
                    onClick: () => A(j.default.support)
                }),
                (0, k.isStudent)() ? null : (0, d.jsxs)(_z, {
                    children: [
                        'Looking to manage a group license?',
                        (0, d.jsx)('br', {}),
                        (0, d.jsx)('br', {}),
                        'We moved license management to a dedicated page:',
                        (0, d.jsx)('br', {}),
                        (0, d.jsx)('br', {}),
                        (0, d.jsxs)(p.default, {
                            to: q.GROUP_DASHBOARD,
                            style: {
                                fontWeight: r.FontWeights.Bold
                            },
                            children: [
                                (0, k.getDomain)(),
                                '/groups'
                            ]
                        })
                    ]
                })
            ]
        });
    });
    const _y = f.default.div.attrs({
            className: 'scroll-y'
        })(u || (u = w`
  height: 100%;
  width: 320px;
  border-right: 1px solid ${ 0 };
`), g.default.BorderGray),
        _z = f.default.div(v || (v = w`
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.07);
  font-size: 12px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 22px;
  width: 84%;
`));
}), a.register('ZYBJo4', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('CHYV/2'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'PlayCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('CHYV/2', function(b, c) {
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
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z'
                    }
                }
            ]
        },
        name: 'play-circle',
        theme: 'outlined'
    };
}), a.register('dBHoZ22', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('7tpbI13'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var _i = e.forwardRef(h);
}), a.register('7tpbI13', function(b, c) {
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
                        d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
                    }
                },
                {
                    tag: 'path',
                    attrs: {
                        d: 'M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z'
                    }
                }
            ]
        },
        name: 'question-circle',
        theme: 'outlined'
    };
}), a.register('tCLSR', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('bnBi9'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UserOutlined';
    var _i = e.forwardRef(h);
}), a.register('bnBi9', function(b, c) {
    _r(b.exports, 'default', function() {
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
                    d: 'M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z'
                }
            }]
        },
        name: 'user',
        theme: 'outlined'
    };
}), a.register('2HvvA11', function(b, c) {
    _r(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+'),
        e = a('wYGc3');
    a('LEQ5w');
    var _f = _r => _r.external || !_r.to ? (0, d.jsx)('a', {
        href: _r.to,
        tabIndex: Number(_r.tabIndex || '0'),
        onClick: _r.onClick,
        onKeyPress: b => {
            _r.onClick && 'Enter' === b.key && (b.preventDefault(), _r.onClick());
        },
        className: _r.className,
        target: _r.target,
        style: _r.style,
        children: _r.children
    }) : (0, d.jsx)(e.Link, {
        to: _r.to,
        tabIndex: Number(_r.tabIndex || '0'),
        onClick: _r.onClick,
        className: _r.className,
        target: _r.target,
        style: _r.style,
        children: _r.children
    });
}), a.register('YEu6T2', function(b, c) {
    _r(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('sHRDd'),
        h = a('b5kvC');
    let i, j, k, l = _r => _r;
    const m = '#1890FF',
        n = f.default.div(i || (i = l`
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
`), h.Fonts.SFPro, 14, _r => _r.selected && !_r.blockBackground ? '#E5F7FE' : g.default.White, _r => _r.selected ? m : 'rgba(0,0,0,.65)', _r => _r.selected && !_r.blockStripe && 'border-right: 3px solid ' + m + ';', m),
        o = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(j || (j = l``)),
        p = f.default.div(k || (k = l``));
    class q extends e.Component {
        render() {
            const {
                title: _r,
                onClick: s,
                selected: t,
                blockStripe: u,
                blockBackground: v
            } = this.props, w = this.props.icon;
            return (0, d.jsxs)(n, {
                selected: t,
                blockStripe: u,
                blockBackground: v,
                onClick: s,
                className: this.props.className,
                ...this.props.style,
                children: [
                    w ? (0, d.jsx)(w, {
                        style: {
                            fontSize: 14,
                            marginRight: 10
                        },
                        theme: this.props.customIconColor ? 'twoTone' : 'outlined',
                        twoToneColor: this.props.customIconColor || ''
                    }) : null,
                    (0, d.jsxs)(o, {
                        children: [
                            (0, d.jsx)(p, {
                                children: _r
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var _r = q;
}), a.register('ixW97', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('yAxFM'),
        h = a('b5kvC'),
        i = a('sHRDd'),
        j = a('2x11J'),
        k = a('R3x1N'),
        l = a('ahAbF'),
        m = a('btszz'),
        n = a('Bp5xg'),
        o = a('fOAV4'),
        p = a('iIoYI');
    let q;
    var _r = (0, j.observer)(() => {
        const {
            navigation: _s
        } = e.useContext(k.default);
        return (0, d.jsxs)(_s, {
            children: [
                (0, d.jsx)(p.default, {}),
                (() => {
                    const {
                        currentTab: t
                    } = _s;
                    return t === l.default.accountInformation ? (0, d.jsx)(g.default, {}) : t === l.default.gameSettings ? (0, d.jsx)(m.default, {}) : t === l.default.billing ? (0, d.jsx)(n.default, {}) : t === l.default.support ? (0, d.jsx)(o.default, {}) : null;
                })()
            ]
        });
    });
    const _s = f.default.div.attrs({
        className: 'scroll'
    })(q || (q = (_q => _q)`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  font-family: ${ 0 };
  color: ${ 0 };
`), h.Fonts.SFPro, i.default.Black);
}), a.register('yAxFM', function(b, c) {
    _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('oXQNI'),
        h = a('/5bVc'),
        i = a('sHRDd'),
        j = a('tBKoe'),
        k = a('hRYSf'),
        l = a('n3+0G'),
        m = a('PMl60');
    let n;
    const o = _q => (0, d.jsx)(g.default, {
        style: {
            fontFamily: f.Fonts.SFPro,
            color: i.default.Black,
            marginBottom: 20
        },
        ..._q
    });
    var _p = () => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(_q, {
                        children: '\uD83D\uDC4B Name'
                    }),
                    (0, d.jsx)(o, {
                        children: (0, d.jsx)(h.default, {})
                    }),
                    (0, d.jsx)(_q, {
                        children: '\uD83D\uDD11 Authentication'
                    }),
                    (0, d.jsx)(o, {
                        children: (0, d.jsx)(j.default, {})
                    }),
                    !(0, m.isStudent)() && (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(_q, {
                                children: '\uD83C\uDFEB School'
                            }),
                            (0, d.jsx)(o, {
                                children: (0, d.jsx)(l.default, {})
                            })
                        ]
                    })
                ]
            }),
            (0, d.jsx)(_q, {
                children: (0, m.isStudent)() ? '\u2328️ Manage' : '\uD83D\uDD12 Account'
            }),
            (0, d.jsx)(o, {
                children: (0, d.jsx)(k.default, {})
            })
        ]
    });
    const _q = e.default.div(n || (n = (_q => _q)`
  font-size: 30px;
  font-weight: ${ 0 };
  margin-bottom: 5px;
`), f.FontWeights.UltraBold);
}), a.register('/5bVc', function(b, c) {
    _q(b.exports, 'Description', function() {
        return _r;
    }), _q(b.exports, 'default', function() {
        return _p;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('b5kvC'),
        h = a('ewwAh'),
        i = a('7fQMx'),
        j = a('Hi0/F0'),
        k = a('d1g2b2'),
        l = a('PMl60');
    let m, n, o = _q => _q;
    var _p = () => {
        const [_q, r] = e.useState((0, l.getUser)().firstName), [s, t] = e.useState((0, l.getUser)().lastName), u = (0, l.isStudent)() && (0, l.getUser)().lastName.length < 2 ? 'Last Initial' : 'Last Name', v = (0, l.isStudent)() && (0, l.getUser)().lastName.length < 2 ? 1 : k.MAX_LENGTH_LAST_NAME;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(_q, {
                    children: [
                        (0, d.jsx)(_r, {
                            children: 'First Name'
                        }),
                        (0, d.jsx)(h.default, {
                            onBlur: () => {
                                _q && (0, i.default)({
                                    changes: [{
                                        key: j.informationTypes.firstName,
                                        value: _q
                                    }]
                                });
                            },
                            onChange: _q => r(_q.target.value),
                            value: _q,
                            maxLength: k.MAX_LENGTH_FIRST_NAME
                        })
                    ]
                }),
                (0, d.jsxs)(_q, {
                    children: [
                        (0, d.jsx)(_r, {
                            children: u
                        }),
                        (0, d.jsx)(h.default, {
                            onBlur: () => {
                                s && (0, i.default)({
                                    changes: [{
                                        key: j.informationTypes.lastName,
                                        value: s
                                    }]
                                });
                            },
                            onChange: _q => t(_q.target.value),
                            value: s,
                            maxLength: v
                        })
                    ]
                })
            ]
        });
    };
    const _q = f.default.div(m || (m = o`
  margin-bottom: 8px;
`)),
        _r = f.default.div(n || (n = o`
  font-weight: ${ 0 };
  font-size: 18px;
`), g.FontWeights.Bold);
}), a.register('7fQMx', function(b, c) {
    _t(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('Pkvp4');
    var _f = _t => {
        (0, d.request)({
            url: '/api/users/update-information',
            method: 'post',
            data: {
                changes: _t.changes
            },
            success: b => {
                _t.onSuccess && _t.onSuccess(b), (0, e.default)({});
            },
            error: b => {
                _t.onError && _t.onError(b);
            }
        });
    };
}), a.register('Hi0/F0', function(b, c) {
    _t(b.exports, 'informationTypes', function() {
        return _f;
    }), _t(b.exports, 'default', function() {
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
                Object.keys(g).forEach(_t => this[_t] = g[_t]), this.informationNeeded.replace([_f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], w.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], w.prototype, 'email', void 0), (0, d.__decorate)([e.observable], w.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], w.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], w.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], w.prototype, 'password', void 0), (0, d.__decorate)([e.observable], w.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], w.prototype, 'country', void 0), (0, d.__decorate)([e.observable], w.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], w.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], w.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], w.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], w.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], w.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], w.prototype, 'reset', void 0);
    var _x = w;
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
}), a.register('NmrDs1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('ha/3p1');
    var _f = d.createContext(e.default);
}), a.register('ha/3p1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _f;
    });
    var d = a('Hi0/F0'),
        e = a('5ka2e1');
    var _f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), a.register('5ka2e1', function(b, c) {
    _i(b.exports, 'default', function() {
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
                Object.keys(f).forEach(_i => this[_i] = f[_i]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], q.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], q.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], q.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], q.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], q.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], q.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], q.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], q.prototype, 'reset', void 0);
    var _r = q;
}), a.register('AUbBm1', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var _f = d;
}), a.register('pYmyT1', function(b, c) {
    _i(b.exports, 'default', function() {
        return _g;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('2x11J'),
        f = a('ulE4q');
    var _g = (0, e.observer)(_i => (0, d.jsx)(f.default, {
        disabled: _i.disabled,
        size: _i.size || 'middle',
        type: 'primary',
        onClick: _i.onClick,
        style: Object.assign({
            width: '100%'
        }, _i.style),
        loading: _i.loading,
        children: _i.children
    }));
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
    _n(b.exports, 'default', function() {
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
}), a.register('dq4zH', function(b, c) {
    let d;
    var e;
    _n(b.exports, 'default', function() {
        return _f;
    }), (e = d || (d = {})).educator = 'educator', e.student = 'student', e.guardian = 'guardian', e.nonSchool = 'nonSchool';
    var _f = d;
}), a.register('tBKoe', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ewwAh'),
        g = a('YRlpt'),
        h = a('/5bVc'),
        i = a('J7SSP'),
        j = a('iwgXa'),
        k = a('PMl60'),
        l = a('2HvvA11');
    var _m = () => {
        const [_n, o] = e.useState((0, k.getUser)().email), [p, q] = e.useState(!1), [r, s] = e.useState(!1), t = () => q(!p), u = (0, k.getUser)().passwordless;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(h.Description, {
                    children: 'Email'
                }),
                (0, d.jsx)(f.default, {
                    readOnly: !0,
                    value: _n,
                    onFocus: t
                }),
                (0, d.jsxs)('div', {
                    style: {
                        justifyContent: 'space-between'
                    },
                    className: 'maxWidth flex',
                    children: [
                        (0, d.jsx)('div', {}),
                        (0, d.jsx)(l.default, {
                            style: {
                                marginTop: 9,
                                fontSize: 14
                            },
                            onClick: () => s(!0),
                            children: u ? 'Add password' : 'Change password'
                        })
                    ]
                }),
                p && (0, d.jsx)(i.default, {
                    onEmailChange: _n => {
                        g.default.success({
                            title: 'Email changed!',
                            content: `Email changed to "${ _n }"`
                        }), o(_n), q(!1);
                    },
                    close: t
                }),
                (0, d.jsx)(j.default, {
                    open: r,
                    close: () => s(!1),
                    defaultEmail: (0, k.getUser)().email
                })
            ]
        });
    };
}), a.register('J7SSP', function(b, c) {
    _n(b.exports, 'default', function() {
        return _q;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('ewwAh'),
        h = a('YRlpt'),
        i = a('b5kvC'),
        j = a('Jhh4y'),
        k = a('sHRDd'),
        l = a('uvADe0'),
        m = a('PMl60'),
        n = a('Pkvp4');
    let o;
    var p;
    (p = o || (o = {})).newEmail = 'newEmail', p.code = 'code';
    var _q = _n => {
        const [r, s] = e.useState(o.newEmail), [t, u] = e.useState(''), [v, w] = e.useState(!1), [x, y] = e.useState(!1), [z, A] = e.useState(''), [B, C] = e.useState(''), [D, E] = e.useState(null), F = _n => u(_n.target.value.toLowerCase()), G = t && (0, j.validateEmail)(t) && t !== (0, m.getUser)().email, H = () => {
            G && (w(!0), (0, m.request)({
                url: '/api/users/register/email-info',
                method: 'post',
                data: {
                    email: t
                },
                success: _n => {
                    _n.accountExists ? (E(`Account already exists with email "${ t }"`), w(!1)) : (0, m.request)({
                        url: '/api/users/requestEmailChange',
                        method: 'post',
                        data: {
                            emailToChangeTo: t
                        },
                        success: _n => {
                            A(_n.encryptedToken), s(o.code);
                        },
                        error: _n => E(_n),
                        both: () => w(!1)
                    });
                },
                error: () => w(!1)
            }));
        }, I = _n => C(_n.target.value), J = !!B, K = () => {
            J && (y(!0), (0, m.request)({
                url: '/api/users/changeEmail',
                method: 'post',
                data: {
                    changeToken: z,
                    encryptCode: B
                },
                success: () => {
                    (0, n.default)({
                        onSuccess: () => _n.onEmailChange(t)
                    });
                },
                error: _n => E(_n),
                both: () => y(!1)
            }));
        };
        return (0, d.jsxs)(h.default, {
            style: {
                fontFamily: i.Fonts.SFPro,
                color: k.default.Black
            },
            footer: null,
            open: !0,
            onCancel: _n.close,
            closable: !0,
            children: [
                r === o.newEmail ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                fontWeight: i.FontWeights.UltraBold,
                                fontSize: 31
                            },
                            children: 'New Account Email'
                        }),
                        (0, d.jsx)(g.default, {
                            onChange: F,
                            placeholder: 'please-do-not-ice-me@gimkit.com',
                            size: 'large',
                            value: t,
                            autoFocus: !0,
                            onPressEnter: H,
                            maxLength: 256
                        }),
                        (0, d.jsx)(f.default, {
                            type: 'primary',
                            disabled: !G,
                            style: {
                                width: '100%',
                                marginTop: 7
                            },
                            size: 'large',
                            onClick: H,
                            loading: v,
                            children: 'Continue'
                        })
                    ]
                }) : r === o.code ? (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                fontWeight: i.FontWeights.UltraBold,
                                fontSize: 31
                            },
                            children: 'Enter Code'
                        }),
                        (0, d.jsxs)('div', {
                            style: {
                                marginBottom: 9
                            },
                            children: [
                                'A code was just sent to ',
                                (0, d.jsx)('b', {
                                    children: t
                                }),
                                '. Please check that email and enter it here. The code expires in 30 minutes.'
                            ]
                        }),
                        (0, d.jsx)(g.default, {
                            onChange: I,
                            placeholder: 'Enter code here...',
                            size: 'large',
                            value: B,
                            autoFocus: !0,
                            onPressEnter: K
                        }),
                        (0, d.jsx)(f.default, {
                            type: 'primary',
                            disabled: !J,
                            style: {
                                width: '100%',
                                marginTop: 7
                            },
                            size: 'large',
                            onClick: K,
                            loading: x,
                            children: 'Submit'
                        })
                    ]
                }) : null,
                (0, d.jsx)(l.default, {
                    error: D,
                    style: {
                        marginTop: 10
                    }
                })
            ]
        });
    };
}), a.register('uvADe0', function(b, c) {
    _n(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('NIZyA');
    var _f = _n => _n.error ? (0, d.jsx)(e.default, {
        message: 'Error',
        style: _n.style,
        type: 'error',
        description: _n.error && _n.error.message && _n.error.message.text ? _n.error.message.text : 'string' == typeof _n.error ? _n.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
}), a.register('hRYSf', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('e7pFf'),
        f = a('b5kvC'),
        g = a('nvxPL'),
        h = a('fmVdR'),
        i = a('YRlpt'),
        j = a('PMl60'),
        k = a('2HvvA11'),
        l = a('gs4MT');
    var _m = () => {
        const _n = _n => {
                (0, j.request)({
                    url: '/api/user/reset-account-type',
                    success: () => {
                        (0, j.request)({
                            url: '/logout',
                            both: () => {
                                i.default.success({
                                    title: 'One more thing!',
                                    content: `When you log back in, choose "${ _n }" as your role.`,
                                    onOk: () => {
                                        window.location.href = l.LOGIN;
                                    }
                                });
                            }
                        });
                    }
                });
            },
            o = (0, j.getUser)();
        let p = [];
        var q;
        return p.push([
            'Account Email',
            o.email
        ]), p.push([
            'Account Type',
            (q = o.accountType, q === e.default.educator ? 'Educator' : q === e.default.student ? 'Student' : q === e.default.guardian ? 'Parent/Guardian' : q === e.default.nonSchool ? 'Other' : '')
        ]), (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 22,
                        fontWeight: f.FontWeights.Bold
                    },
                    children: 'Account Information'
                }),
                (0, d.jsxs)('div', {
                    className: 'flex maxWidth between',
                    style: {
                        alignItems: 'flex-end'
                    },
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                marginTop: 10
                            },
                            children: p.map(_n => (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsxs)('b', {
                                        children: [
                                            _n[0],
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    _n[1]
                                ]
                            }, _n[0]))
                        }),
                        (0, d.jsx)('div', {
                            children: (0, d.jsxs)(k.default, {
                                onClick: () => {
                                    (0, j.isStudent)() ? i.default.confirm({
                                        title: 'Are you sure you want to switch to an educator account?',
                                        content: 'Doing so will remove you from all your current classes.',
                                        okText: 'Yes',
                                        onOk: () => _n('Educator')
                                    }): i.default.confirm({
                                        title: 'Are you sure you want to switch to a student account?',
                                        content: 'Many educator features are not available with student accounts.',
                                        okText: 'Yes',
                                        onOk: () => _n('Student')
                                    });
                                },
                                children: [
                                    'Switch to ',
                                    (0, j.isStudent)() ? 'educator' : 'student',
                                    ' account'
                                ]
                            })
                        })
                    ]
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)('div', {
                    children: (0, d.jsxs)(g.default, {
                        children: [
                            (0, d.jsx)(g.default.Panel, {
                                header: 'Support',
                                children: (0, d.jsx)(k.default, {
                                    onClick: () => (0, j.request)({
                                        url: '/api/user/request-info',
                                        success: _n => {
                                            i.default.info({
                                                title: 'Information',
                                                content: (0, d.jsx)('div', {
                                                    children: Object.keys(_n).map(o => (0, d.jsxs)('div', {
                                                        children: [
                                                            (0, d.jsx)('span', {
                                                                style: {
                                                                    fontWeight: f.FontWeights.Bold
                                                                },
                                                                children: o
                                                            }),
                                                            ':',
                                                            ' ',
                                                            _n[o],
                                                            (0, d.jsx)('br', {})
                                                        ]
                                                    }, `info-item-${ o }`))
                                                })
                                            });
                                        }
                                    }),
                                    children: 'Information Gimkit has collected on me'
                                })
                            }, 'support'),
                            (0, d.jsx)(g.default.Panel, {
                                header: 'Danger Zone',
                                children: (0, d.jsx)(k.default, {
                                    to: l.DELETE_ACCOUNT,
                                    children: 'Delete my account'
                                })
                            }, 'danger')
                        ]
                    })
                })
            ]
        });
    };
}), a.register('nvxPL', function(b, c) {
    _m(b.exports, 'default', function() {
        return _d;
    });
    var _d = a('hj+X0').default;
}), a.register('hj+X0', function(b, c) {
    _m(b.exports, 'default', function() {
        return _u;
    });
    var d = a('n/s4T'),
        e = a('JrtKP'),
        f = a('so96J'),
        g = a('LEQ5w'),
        h = a('Ug51y0'),
        i = a('sWKBM'),
        j = a('1P5ls'),
        k = a('GaHpv'),
        l = a('CMcLV'),
        m = a('lWjQ8'),
        n = a('TRVr5'),
        o = a('+aoQo');
    const p = g.forwardRef((_m, a) => {
        const {
            getPrefixCls: q,
            direction: r
        } = g.useContext(j.ConfigContext), s = g.useContext(m.default), {
            prefixCls: t,
            className: _u,
            rootClassName: v,
            bordered: w = !0,
            ghost: x,
            size: y,
            expandIconPosition: z = 'start'
        } = _m, A = y || s || 'middle', B = q('collapse', t), C = q(), [D, E] = (0, o.default)(B), F = g.useMemo(() => 'left' === z ? 'start' : 'right' === z ? 'end' : z, [z]), G = _I(e)(`${ B }-icon-position-${ F }`, {
            [`${ B }-borderless`]: !w,
            [`${ B }-rtl`]: 'rtl' === r,
            [`${ B }-ghost`]: !!x,
            [`${ B }-${ A }`]: 'middle' !== A
        }, _u, v, E), H = Object.assign(Object.assign({}, (0, k.default)(C)), {
            motionAppear: !1,
            leavedClassName: `${ B }-content-hidden`
        });
        return D(g.createElement(f.default, Object.assign({
            ref: a,
            openMotion: H
        }, (0, i.default)(_m, ['rootClassName']), {
            expandIcon: function() {
                let I = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const {
                    expandIcon: J
                } = _m, K = J ? J(I) : g.createElement(d.default, {
                    rotate: I.isActive ? 90 : void 0
                });
                return (0, l.cloneElement)(K, () => ({
                    className: _I(e)(K.props.className, `${ B }-arrow`)
                }));
            },
            prefixCls: B,
            className: G
        }), (() => {
            const {
                children: _I
            } = _m;
            return (0, h.default)(_I).map((_m, _I) => {
                var J;
                if (null === (J = _m.props) || void 0 === J ? void 0 : J.disabled) {
                    const K = _m.key || String(_I),
                        {
                            disabled: L,
                            collapsible: M
                        } = _m.props,
                        N = Object.assign(Object.assign({}, (0, i.default)(_m.props, ['disabled'])), {
                            key: K,
                            collapsible: null != M ? M : L ? 'disabled' : void 0
                        });
                    return (0, l.cloneElement)(_m, N);
                }
                return _m;
            });
        })()));
    });
    var q = Object.assign(p, {
        Panel: n.default
    });
}), a.register('so96J', function(b, c) {
    _m(b.exports, 'default', function() {
        return _e;
    });
    var d = a('Ox8Eb'),
        _e = d.default;
    d.default.Panel;
}), a.register('Ox8Eb', function(b, c) {
    _m(b.exports, 'default', function() {
        return _t;
    });
    var d = a('7DbAz'),
        e = a('sIY+p'),
        f = a('3wJIw'),
        g = a('JrtKP'),
        h = a('Ug51y0'),
        i = a('TTc70'),
        j = a('LEQ5w'),
        k = a('rrzSK');

    function l(_m) {
        var n = _m;
        if (!Array.isArray(n)) {
            var o = (0, f.default)(n);
            n = 'number' === o || 'string' === o ? [n] : [];
        }
        return n.map(function(o) {
            return String(o);
        });
    }
    var l = _W(j).forwardRef(function(m, n) {
            var o = m.prefixCls,
                p = void 0 === o ? 'rc-collapse' : o,
                q = m.destroyInactivePanel,
                r = void 0 !== q && q,
                s = m.style,
                _t = m.accordion,
                u = m.className,
                v = m.children,
                w = m.collapsible,
                x = m.openMotion,
                y = m.expandIcon,
                z = m.activeKey,
                A = m.defaultActiveKey,
                B = m.onChange,
                C = _W(g)(p, u),
                D = (0, i.default)([], {
                    value: z,
                    onChange: function(E) {
                        return null == B ? void 0 : B(E);
                    },
                    defaultValue: A,
                    postState: _Q
                }),
                E = (0, d.default)(D, 2),
                F = E[0],
                G = E[1],
                H = (0, h.default)(v).map(function(I, J) {
                    if (!I)
                        return null;
                    var K = I.key || String(J),
                        L = I.props,
                        M = L.header,
                        N = L.headerClass,
                        O = L.destroyInactivePanel,
                        P = L.collapsible,
                        _Q = L.onItemClick,
                        R = !1;
                    R = _t ? F[0] === K : F.indexOf(K) > -1;
                    var S = null != P ? P : w,
                        T = {
                            key: K,
                            panelKey: K,
                            header: M,
                            headerClass: N,
                            isActive: R,
                            prefixCls: p,
                            destroyInactivePanel: null != O ? O : r,
                            openMotion: x,
                            accordion: _t,
                            children: I.props.children,
                            onItemClick: function(U) {
                                'disabled' !== S && (! function(V) {
                                    G(function() {
                                        return _t ? F[0] === V ? [] : [V] : F.indexOf(V) > -1 ? F.filter(function(_W) {
                                            return _W !== V;
                                        }) : [].concat((0, e.default)(F), [V]);
                                    });
                                }(U), null == _Q || _Q(U));
                            },
                            expandIcon: y,
                            collapsible: S
                        };
                    return 'string' == typeof I.type ? I : (Object.keys(T).forEach(function(U) {
                        void 0 === T[U] && delete T[U];
                    }), _b(j).cloneElement(I, T));
                });
            return _b(j).createElement('div', {
                ref: n,
                className: C,
                style: s,
                role: _t ? 'tablist' : void 0
            }, H);
        }),
        m = Object.assign(l, {
            Panel: k.default
        });
}), a.register('7DbAz', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _h;
    });
    var d = a('sHYTk'),
        e = a('MNRrk'),
        f = a('Ilmqj'),
        g = a('q+u9s');

    function _h(_i, j) {
        return (0, d.default)(_i) || (0, e.default)(_i, j) || (0, f.default)(_i, j) || (0, g.default)();
    }
}), a.register('sHYTk', function(b, c) {
    function d(e) {
        if (Array.isArray(e))
            return e;
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('MNRrk', function(b, c) {
    function _d(_e, f) {
        var g = null == _e ? null : 'undefined' != typeof Symbol && _e[Symbol.iterator] || _e['@@iterator'];
        if (null != g) {
            var h, i, j = [],
                k = !0,
                l = !1;
            try {
                for (g = g.call(_e); !(k = (h = g.next()).done) && (j.push(h.value), !f || j.length !== f); k = !0);
            } catch (_e) {
                l = !0, i = _e;
            } finally {
                try {
                    k || null == g.return || g.return();
                } finally {
                    if (l)
                        throw i;
                }
            }
            return j;
        }
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Ilmqj', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('YW0Mt');

    function _e(_f, g) {
        if (_f) {
            if ('string' == typeof _f)
                return (0, d.default)(_f, g);
            var h = Object.prototype.toString.call(_f).slice(8, -1);
            return 'Object' === h && _f.constructor && (h = _f.constructor.name), 'Map' === h || 'Set' === h ? Array.from(_f) : 'Arguments' === h || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? (0, d.default)(_f, g) : void 0;
        }
    }
}), a.register('YW0Mt', function(b, c) {
    function d(e, f) {
        (null == f || f > e.length) && (f = e.length);
        for (var g = 0, h = new Array(f); g < f; g++)
            h[g] = e[g];
        return h;
    }
    _i(b.exports, 'default', function() {
        return _d;
    });
}), a.register('q+u9s', function(b, c) {
    function _d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    _i(b.exports, 'default', function() {
        return _c;
    });
}), a.register('sIY+p', function(b, _c) {
    _i(b.exports, 'default', function() {
        return _h;
    });
    var d = a('eO3oC'),
        e = a('l0sWy'),
        f = a('Ilmqj'),
        g = a('fFMxf');

    function _h(_i) {
        return (0, d.default)(_i) || (0, e.default)(_i) || (0, f.default)(_i) || (0, g.default)();
    }
}), a.register('eO3oC', function(b, c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('YW0Mt');

    function _e(_f) {
        if (Array.isArray(_f))
            return (0, d.default)(_f);
    }
}), a.register('l0sWy', function(b, c) {
    function d(e) {
        if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator'])
            return Array.from(e);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('fFMxf', function(b, c) {
    function _d() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('3wJIw', function(b, c) {
    function _d(_e) {
        return _d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(f) {
            return typeof f;
        } : function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, _d(_e);
    }
    _n(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rrzSK', function(_b, c) {
    _n(_b.exports, 'default', function() {
        return _m;
    });
    var d = a('5DaKQ'),
        e = a('jAUcB'),
        f = a('moq/A'),
        g = a('JrtKP'),
        h = a('YqmOj'),
        i = a('qBGaA0'),
        j = a('LEQ5w'),
        k = a('dcCrA'),
        l = [
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
        ],
        _m = _b(j).forwardRef(function(_n, o) {
            var p, q, r = _n.showArrow,
                s = void 0 === r || r,
                t = _n.headerClass,
                u = _n.isActive,
                v = _n.onItemClick,
                w = _n.forceRender,
                x = _n.className,
                y = _n.prefixCls,
                z = _n.collapsible,
                A = _n.accordion,
                B = _n.panelKey,
                C = _n.extra,
                D = _n.header,
                E = _n.expandIcon,
                F = _n.openMotion,
                G = _n.destroyInactivePanel,
                H = _n.children,
                I = (0, f.default)(_n, l),
                J = 'disabled' === z,
                K = 'header' === z,
                L = 'icon' === z,
                M = null != C && 'boolean' != typeof C,
                N = function() {
                    null == v || v(B);
                },
                O = 'function' == typeof E ? E(_n) : _b(j).createElement('i', {
                    className: 'arrow'
                });
            O && (O = _b(j).createElement('div', {
                className: ''.concat(y, '-expand-icon'),
                onClick: [
                    'header',
                    'icon'
                ].includes(z) ? N : void 0
            }, O));
            var P = _b(g)((p = {}, (0, d.default)(p, ''.concat(y, '-item'), !0), (0, d.default)(p, ''.concat(y, '-item-active'), u), (0, d.default)(p, ''.concat(y, '-item-disabled'), J), p), x),
                Q = {
                    className: _b(g)((q = {}, (0, d.default)(q, ''.concat(y, '-header'), !0), (0, d.default)(q, 'headerClass', t), (0, d.default)(q, ''.concat(y, '-header-collapsible-only'), K), (0, d.default)(q, ''.concat(y, '-icon-collapsible-only'), L), q)),
                    'aria-expanded': u,
                    'aria-disabled': J,
                    onKeyPress: function(R) {
                        'Enter' !== R.key && R.keyCode !== i.default.ENTER && R.which !== i.default.ENTER || N();
                    }
                };
            return K || L || (Q.onClick = N, Q.role = A ? 'tab' : 'button', Q.tabIndex = J ? -1 : 0), _b(j).createElement('div', (0, e.default)({}, I, {
                ref: o,
                className: P
            }), _b(j).createElement('div', Q, s && O, _b(j).createElement('span', {
                className: ''.concat(y, '-header-text'),
                onClick: 'header' === z ? N : void 0
            }, D), M && _b(j).createElement('div', {
                className: ''.concat(y, '-extra')
            }, C)), _b(j).createElement(h.default, (0, e.default)({
                visible: u,
                leavedClassName: ''.concat(y, '-content-hidden')
            }, F, {
                forceRender: w,
                removeOnLeave: G
            }), function(R, S) {
                var T = R.className,
                    U = R.style;
                return _b(j).createElement(k.default, {
                    ref: S,
                    prefixCls: y,
                    className: T,
                    style: U,
                    isActive: u,
                    forceRender: w,
                    role: A ? 'tabpanel' : void 0
                }, H);
            }));
        });
}), a.register('5DaKQ', function(_b, c) {
    function d(e, f, g) {
        return f in e ? Object.defineProperty(e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[f] = g, e;
    }
    _e(_b.exports, 'default', function() {
        return _d;
    });
}), a.register('jAUcB', function(b, c) {
    function _d() {
        return _d = Object.assign || function(_e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (_e[h] = g[h]);
            }
            return _e;
        }, _d.apply(this, arguments);
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('moq/A', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('bFBSc');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('bFBSc', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _i(b.exports, 'default', function() {
        return _b;
    });
}), a.register('dcCrA', function(_b, c) {
    _i(_b.exports, 'default', function() {
        return _n;
    });
    var d = a('5DaKQ'),
        e = a('7DbAz'),
        f = a('JrtKP'),
        g = a('LEQ5w'),
        h = _b(g).forwardRef(function(_i, j) {
            var k, l = _i.prefixCls,
                m = _i.forceRender,
                _n = _i.className,
                o = _i.style,
                p = _i.children,
                q = _i.isActive,
                r = _i.role,
                s = _b(g).useState(q || m),
                t = (0, e.default)(s, 2),
                u = t[0],
                v = t[1];
            return _b(g).useEffect(function() {
                (m || q) && v(!0);
            }, [
                m,
                q
            ]), u ? _b(g).createElement('div', {
                ref: j,
                className: _b(f)(''.concat(l, '-content'), (k = {}, (0, d.default)(k, ''.concat(l, '-content-active'), q), (0, d.default)(k, ''.concat(l, '-content-inactive'), !q), k), _n),
                style: o,
                role: r
            }, _b(g).createElement('div', {
                className: ''.concat(l, '-content-box')
            }, p)) : null;
        });
    h.displayName = 'PanelContent';
    var i = h;
}), a.register('TRVr5', function(b, c) {
    _o(b.exports, 'default', function() {
        return _h;
    });
    var d = a('JrtKP'),
        e = a('so96J'),
        f = a('LEQ5w'),
        g = a('1P5ls');
    var _h = f.forwardRef((_o, a) => {
        const {
            getPrefixCls: i
        } = f.useContext(g.ConfigContext), {
            prefixCls: j,
            className: k = '',
            showArrow: l = !0
        } = _o, m = i('collapse', j), n = _b(d)({
            [`${ m }-no-arrow`]: !l
        }, k);
        return f.createElement(e.default.Panel, Object.assign({
            ref: a
        }, _o, {
            prefixCls: m,
            className: n
        }));
    });
}), a.register('+aoQo', function(_b, c) {
    _o(_b.exports, 'default', function() {
        return _s;
    });
    var d = a('vM2UK'),
        e = a('XC0UB'),
        f = a('l+IVY'),
        g = a('7hbGU');
    const h = _o => {
            const {
                componentCls: i,
                collapseContentBg: j,
                padding: k,
                collapseContentPaddingHorizontal: l,
                collapseHeaderBg: m,
                collapseHeaderPadding: n,
                collapseHeaderPaddingSM: o,
                collapseHeaderPaddingLG: p,
                collapsePanelBorderRadius: q,
                lineWidth: r,
                lineType: _s,
                colorBorder: t,
                colorText: u,
                colorTextHeading: v,
                colorTextDisabled: w,
                fontSize: x,
                fontSizeLG: y,
                lineHeight: z,
                marginSM: A,
                paddingSM: B,
                paddingLG: C,
                motionDurationSlow: D,
                fontSizeIcon: E
            } = _o, F = `${ r }px ${ _s } ${ t }`;
            return {
                [i]: Object.assign(Object.assign({}, (0, g.resetComponent)(_o)), {
                    backgroundColor: m,
                    border: F,
                    borderBottom: 0,
                    borderRadius: `${ q }px`,
                    '&-rtl': {
                        direction: 'rtl'
                    },
                    [`& > ${ i }-item`]: {
                        borderBottom: F,
                        '&:last-child': {
                            [`\n            &,\n            & > ${ i }-header`]: {
                                borderRadius: `0 0 ${ q }px ${ q }px`
                            }
                        },
                        [`> ${ i }-header`]: {
                            position: 'relative',
                            display: 'flex',
                            flexWrap: 'nowrap',
                            alignItems: 'flex-start',
                            padding: n,
                            color: v,
                            lineHeight: z,
                            cursor: 'pointer',
                            transition: `all ${ D }, visibility 0s`,
                            [`> ${ i }-header-text`]: {
                                flex: 'auto'
                            },
                            '&:focus': {
                                outline: 'none'
                            },
                            [`${ i }-expand-icon`]: {
                                height: x * z,
                                display: 'flex',
                                alignItems: 'center',
                                paddingInlineEnd: A
                            },
                            [`${ i }-arrow`]: Object.assign(Object.assign({}, (0, g.resetIcon)()), {
                                fontSize: E,
                                svg: {
                                    transition: `transform ${ D }`
                                }
                            }),
                            [`${ i }-header-text`]: {
                                marginInlineEnd: 'auto'
                            }
                        },
                        [`${ i }-header-collapsible-only`]: {
                            cursor: 'default',
                            [`${ i }-header-text`]: {
                                flex: 'none',
                                cursor: 'pointer'
                            }
                        },
                        [`${ i }-icon-collapsible-only`]: {
                            cursor: 'default',
                            [`${ i }-expand-icon`]: {
                                cursor: 'pointer'
                            }
                        },
                        [`&${ i }-no-arrow`]: {
                            [`> ${ i }-header`]: {
                                paddingInlineStart: B
                            }
                        }
                    },
                    [`${ i }-content`]: {
                        color: u,
                        backgroundColor: j,
                        borderTop: F,
                        [`& > ${ i }-content-box`]: {
                            padding: `${ k }px ${ l }px`
                        },
                        '&-hidden': {
                            display: 'none'
                        }
                    },
                    '&-small': {
                        [`> ${ i }-item`]: {
                            [`> ${ i }-header`]: {
                                padding: o
                            },
                            [`> ${ i }-content > ${ i }-content-box`]: {
                                padding: B
                            }
                        }
                    },
                    '&-large': {
                        [`> ${ i }-item`]: {
                            fontSize: y,
                            [`> ${ i }-header`]: {
                                padding: p,
                                [`> ${ i }-expand-icon`]: {
                                    height: y * z
                                }
                            },
                            [`> ${ i }-content > ${ i }-content-box`]: {
                                padding: C
                            }
                        }
                    },
                    [`${ i }-item:last-child`]: {
                        [`> ${ i }-content`]: {
                            borderRadius: `0 0 ${ q }px ${ q }px`
                        }
                    },
                    [`& ${ i }-item-disabled > ${ i }-header`]: {
                        '\n          &,\n          & > .arrow\n        ': {
                            color: w,
                            cursor: 'not-allowed'
                        }
                    },
                    [`&${ i }-icon-position-end`]: {
                        [`& > ${ i }-item`]: {
                            [`> ${ i }-header`]: {
                                [`${ i }-expand-icon`]: {
                                    order: 1,
                                    paddingInlineEnd: 0,
                                    paddingInlineStart: A
                                }
                            }
                        }
                    }
                })
            };
        },
        i = _o => {
            const {
                componentCls: j
            } = _o;
            return {
                [`${ j }-rtl`]: {
                    [`> ${ j }-item > ${ j }-header ${ j }-arrow svg`]: {
                        transform: 'rotate(180deg)'
                    }
                }
            };
        },
        j = _o => {
            const {
                componentCls: k,
                collapseHeaderBg: l,
                paddingXXS: m,
                colorBorder: n
            } = _o;
            return {
                [`${ k }-borderless`]: {
                    backgroundColor: l,
                    border: 0,
                    [`> ${ k }-item`]: {
                        borderBottom: `1px solid ${ n }`
                    },
                    [`\n        > ${ k }-item:last-child,\n        > ${ k }-item:last-child ${ k }-header\n      `]: {
                        borderRadius: 0
                    },
                    [`> ${ k }-item:last-child`]: {
                        borderBottom: 0
                    },
                    [`> ${ k }-item > ${ k }-content`]: {
                        backgroundColor: 'transparent',
                        borderTop: 0
                    },
                    [`> ${ k }-item > ${ k }-content > ${ k }-content-box`]: {
                        paddingTop: m
                    }
                }
            };
        },
        k = _o => {
            const {
                componentCls: l,
                paddingSM: m
            } = _o;
            return {
                [`${ l }-ghost`]: {
                    backgroundColor: 'transparent',
                    border: 0,
                    [`> ${ l }-item`]: {
                        borderBottom: 0,
                        [`> ${ l }-content`]: {
                            backgroundColor: 'transparent',
                            border: 0,
                            [`> ${ l }-content-box`]: {
                                paddingBlock: m
                            }
                        }
                    }
                }
            };
        };
    var l = (0, e.default)('Collapse', _o => {
        const m = (0, f.merge)(_o, {
            collapseContentBg: _o.colorBgContainer,
            collapseHeaderBg: _o.colorFillAlter,
            collapseHeaderPadding: `${ _o.paddingSM }px ${ _o.padding }px`,
            collapseHeaderPaddingSM: `${ _o.paddingXS }px ${ _o.paddingSM }px`,
            collapseHeaderPaddingLG: `${ _o.padding }px ${ _o.paddingLG }px`,
            collapsePanelBorderRadius: _o.borderRadiusLG,
            collapseContentPaddingHorizontal: 16
        });
        return [
            h(m),
            j(m),
            k(m),
            i(m),
            (0, d.default)(m)
        ];
    });
}), a.register('n3+0G', function(b, c) {
    _o(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('PMl60'),
        g = a('fmVdR'),
        h = a('YRlpt'),
        i = a('Pkvp4'),
        j = a('2HvvA11'),
        k = a('b5kvC'),
        l = a('k41Xr'),
        m = a('GUi2g');
    var _n = (0, a('2x11J').observer)(() => {
        var _o;
        const [p, q] = e.useState(!1), r = _o => {
            (0, f.request)({
                url: '/api/user/update-school',
                data: {
                    schoolDiggerId: null == _o ? void 0 : _o.schoolid
                },
                success: () => {
                    q(!1), (0, i.default)({
                        onSuccess: () => {
                            (0, f.deleteRequestCache)(l.LIBRARY_CACHE_KEY);
                        }
                    });
                },
                error: () => {
                    (0, f.throwMessageError)({
                        default: {
                            title: 'An error ocurred while trying to update your school',
                            content: 'Please try again later or contact support'
                        }
                    });
                }
            });
        }, s = null === (_o = (0, f.getUser)()) || void 0 === _o ? void 0 : _o.schoolName;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        fontSize: 18
                    },
                    children: [
                        (0, d.jsx)('span', {
                            style: {
                                fontWeight: k.FontWeights.Bold
                            },
                            children: 'School:'
                        }),
                        ' ',
                        s || 'None'
                    ]
                }),
                (0, d.jsx)(g.default, {
                    style: {
                        margin: '12px 0px'
                    }
                }),
                (0, d.jsxs)('div', {
                    className: 'maxWidth flex',
                    style: {
                        justifyContent: 'space-between',
                        fontSize: 14
                    },
                    children: [
                        (0, d.jsxs)(j.default, {
                            onClick: () => {
                                q(!0);
                            },
                            children: [
                                s ? 'Change' : 'Add',
                                ' school'
                            ]
                        }),
                        s && (0, d.jsx)(j.default, {
                            onClick: () => {
                                h.default.confirm({
                                    title: 'Are you sure you want to unenroll from your current school?',
                                    cancelText: 'No',
                                    okText: 'Yes',
                                    onOk: () => r(null)
                                });
                            },
                            children: 'Unenroll from school'
                        })
                    ]
                }),
                (0, d.jsx)(m.default, {
                    visible: p,
                    close: () => q(!1),
                    selectSchool: r
                })
            ]
        });
    });
}), a.register('GUi2g', function(b, c) {
    _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('e2X+l'),
        g = a('NIZyA'),
        h = a('fmVdR'),
        i = a('sgToH'),
        j = a('ewwAh'),
        k = a('YRlpt'),
        l = a('sHRDd'),
        m = a('b5kvC'),
        n = a('Axq+p'),
        o = a('PMl60'),
        p = a('INKb2'),
        q = a('HHk7T');
    let r;
    var _s = _t => {
        const {
            visible: t,
            close: u
        } = _t, [v, w] = e.useState(null), [x, y] = e.useState(!1), [z, A] = e.useState([]);
        return (0, d.jsxs)(i.default, {
            open: t,
            onClose: u,
            placement: 'left',
            width: 560,
            closable: !0,
            drawerStyle: {
                height: '100%',
                overflowY: 'auto',
                scrollbarWidth: 'none'
            },
            children: [
                (0, d.jsx)(_u, {
                    children: 'School search'
                }),
                (0, d.jsx)(g.default, {
                    type: 'info',
                    showIcon: !0,
                    banner: !0,
                    style: {
                        width: '100%'
                    },
                    message: 'We currently only support schools in the US.'
                }),
                (0, d.jsx)(h.default, {}),
                (0, d.jsx)(j.default.Search, {
                    placeholder: 'Zip Code',
                    onSearch: () => {
                        v && (5 === String(v).length ? (y(!0), (0, o.request)({
                            url: '/api/users/fetch-schools',
                            method: 'post',
                            data: {
                                zipCode: v
                            },
                            success: _t => {
                                _t && _t.schoolList && _t.schoolList.length ? A(_t.schoolList) : (0, p.throwError)({
                                    title: 'No schools found for this zip code.'
                                });
                            },
                            error: _t => {
                                (0, p.throwError)({
                                    title: 'An error occurred while searching for your school',
                                    content: 'Please try again later'
                                });
                            },
                            both: () => {
                                y(!1);
                            }
                        })) : k.default.warning({
                            title: 'Please enter a 5 digit zip code'
                        }));
                    },
                    size: 'large',
                    enterButton: 'Search',
                    autoFocus: !0,
                    style: {
                        flex: 1
                    },
                    maxLength: 5,
                    loading: x,
                    value: v,
                    onChange: _t => {
                        const B = _t.target.value;
                        w(B);
                    }
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 25
                    }
                }),
                z && z.length ? (0, d.jsx)(d.Fragment, {
                    children: z.map(t => (0, d.jsx)(q.default, {
                        name: t.schoolName,
                        description: `${ t.address.city }, ${ t.address.stateFull }`,
                        onSelect: () => _t.selectSchool(t)
                    }, t.schoolid))
                }) : (0, d.jsx)(_t, {})
            ]
        });
    };
    const _t = () => (0, d.jsxs)('div', {
            className: 'flex hc vc flex-column',
            style: {
                color: l.default.Black,
                marginTop: 10
            },
            children: [
                (0, d.jsx)(f.default, {
                    style: {
                        fontSize: 50,
                        marginBottom: 5
                    }
                }),
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 15,
                        textAlign: 'center'
                    },
                    children: 'Enter your school\'s zip code above!'
                })
            ]
        }),
        _u = n.default.div(r || (r = (_t => _t)`
  font-weight: ${ 0 };
  font-size: 42px;
  color: ${ 0 };
  line-height: 1;
  margin-bottom: 10px;
`), m.FontWeights.UltraBold, l.default.Black);
}), a.register('HHk7T', function(b, c) {
    _t(b.exports, 'default', function() {
        return _h;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('oXQNI'),
        f = a('b5kvC'),
        g = a('sHRDd');
    var _h = _t => (0, d.jsx)(e.default, {
        hoverable: !0,
        style: {
            marginBottom: 10
        },
        onClick: _t.onSelect,
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
                    children: _t.name
                }),
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 14
                    },
                    children: _t.description
                })
            ]
        })
    });
}), a.register('btszz', function(b, c) {
    _t(b.exports, 'Setting', function() {
        return _r;
    }), _t(b.exports, 'default', function() {
        return _s;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('Axq+p'),
        f = a('b5kvC'),
        g = a('oXQNI'),
        h = a('cvto726'),
        i = a('sHRDd'),
        j = a('BRh1Q'),
        k = a('IAIAD'),
        l = a('PMl60'),
        m = a('m8qqA'),
        n = a('TmP6v');
    let o, p, q = _t => _t;
    const _r = _t => (0, d.jsx)(g.default, {
        style: {
            fontFamily: f.Fonts.SFPro,
            color: i.default.Black
        },
        children: (0, d.jsxs)('div', {
            className: 'maxWidth flex vc between',
            children: [
                (0, d.jsxs)('div', {
                    style: {
                        marginRight: 40
                    },
                    children: [
                        (0, d.jsx)(_t, {
                            children: _t.title
                        }),
                        (0, d.jsx)(_u, {
                            children: _t.description
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    children: _t.children
                })
            ]
        })
    });
    var _s = () => {
        const [_t, u] = (0, l.useBoolean)(!1);
        return (0, d.jsx)(d.Fragment, {
            children: (0, d.jsxs)(h.default, {
                direction: 'vertical',
                size: 10,
                className: 'maxWidth',
                children: [
                    (0, d.jsx)(m.default, {}),
                    (0, d.jsx)(n.default, {}),
                    (0, d.jsx)(j.default, {}),
                    (0, d.jsx)(k.Language, {}),
                    (0, d.jsx)(k.GoogleTranslate, {})
                ]
            })
        });
    };
    const _t = e.default.div(o || (o = q`
  font-weight: ${ 0 };
  font-size: 18px;
`), f.FontWeights.UltraBold),
        _u = e.default.div(p || (p = q`
  font-size: 14px;
`));
}), a.register('cvto726', function(b, c) {
    _d(b.exports, 'SpaceContext', function() {
        return _m;
    }, function(_d) {
        return _m = _d;
    }), _d(b.exports, 'default', function() {
        return _u;
    }, function(_d) {
        return _u = _d;
    });
    var d = a('JrtKP'),
        e = a('Ug51y0'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('4gObz26'),
        i = a('VqIM2'),
        j = a('P8P+826'),
        k = a('/xlT+'),
        l = function(m, n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const _m = f.createContext({
            latestIndex: 0,
            horizontalSize: 0,
            verticalSize: 0,
            supportFlexGap: !1
        }),
        n = {
            small: 8,
            middle: 16,
            large: 24
        };
    const o = _G => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: _u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = _G, C = l(_G, [
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
        ]), D = (0, h.default)(), [E, F] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(_G => function(_G) {
            return 'string' == typeof _G ? n[_G] : _G || 0;
        }(_g)), [s]), G = (0, e.default)(w, {
            keepEmpty: !0
        }), H = void 0 === t && 'horizontal' === x ? 'center' : t, I = p('space', y), [J, K] = (0, k.default)(I), L = _b(d)(I, K, `${ I }-${ x }`, {
            [`${ I }-rtl`]: 'rtl' === r,
            [`${ I }-align-${ H }`]: H
        }, _u, v), M = `${ I }-item`, N = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let O = 0;
        const P = G.map((_g, _b) => {
                null != _g && (O = _b);
                const Q = _g && _g.key || `${ M }-${ _b }`;
                return f.createElement(j.default, {
                    className: M,
                    key: Q,
                    direction: x,
                    index: _b,
                    marginDirection: N,
                    split: z,
                    wrap: B
                }, _g);
            }),
            Q = f.useMemo(() => ({
                horizontalSize: E,
                verticalSize: F,
                latestIndex: O,
                supportFlexGap: D
            }), [
                E,
                F,
                O,
                D
            ]);
        if (0 === G.length)
            return null;
        const R = {};
        return B && (R.flexWrap = 'wrap', D || (R.marginBottom = -F)), D && (R.columnGap = E, R.rowGap = F), J(f.createElement('div', Object.assign({
            className: L,
            style: Object.assign(Object.assign({}, R), A)
        }, C), f.createElement(_m.Provider, {
            value: Q
        }, P)));
    };
    o.Compact = i.default;
    var p = o;
}), a.register('4gObz26', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('XPzGa'),
        _f = () => {
            const [_g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), _g;
        };
}), a.register('P8P+826', function(b, c) {
    _g(b.exports, 'default', function() {
        return _f;
    });
    var d = a('LEQ5w'),
        e = a('cvto726');

    function _f(_g) {
        let {
            className: h,
            direction: i,
            index: j,
            marginDirection: k,
            children: l,
            split: m,
            wrap: n
        } = _g;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === i ? j < q && (s = {
            marginBottom: o / (m ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, j < q && {
            [k]: o / (m ? 2 : 1)
        }), n && {
            paddingBottom: p
        })), null == l ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: h,
            style: s
        }, l), j < q && m && d.createElement('span', {
            className: `${ h }-split`,
            style: s
        }, m));
    }
}), a.register('BRh1Q', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('y4x7Q'),
        g = a('btszz'),
        h = a('inwN3');
    const {
        Option: i
    } = h.default, j = [
        '$',
        '\u20AC',
        '\xA5',
        '\xA3',
        'X̶',
        '\u20A9'
    ];
    var _k = () => {
        const [_l, m] = e.useState(localStorage.getItem(f.LocalStorageNames.currency) || '$');
        return (0, d.jsx)(g.Setting, {
            title: 'Currency',
            description: 'Currency to be used while playing Gimkit (non-2D modes)',
            children: (0, d.jsx)(h.default, {
                value: _l,
                style: {
                    width: 200
                },
                onChange: _l => {
                    localStorage.setItem(f.LocalStorageNames.currency, _l), m(_l);
                },
                children: j.map(_l => (0, d.jsx)(i, {
                    value: _l,
                    children: _l
                }, _l))
            })
        });
    };
}), a.register('y4x7Q', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    _n(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), a.register('IAIAD', function(b, c) {
    _n(b.exports, 'Language', function() {
        return _m;
    }), _n(b.exports, 'GoogleTranslate', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('btszz'),
        g = a('983xi'),
        h = a('inwN3'),
        i = a('vKq/0'),
        j = a('y4x7Q');
    const {
        Option: k
    } = h.default, l = (0, g.getListOfLanguages)(), _m = () => {
        const [_n, o] = e.useState((0, g.getLanguageName)(localStorage.getItem(j.LocalStorageNames.language)) || 'English');
        return (0, d.jsx)(f.Setting, {
            title: 'Language',
            description: 'Language used for upgrade names and other text while playing Gimkit (non-2D modes)',
            children: (0, d.jsx)(h.default, {
                value: _n,
                style: {
                    width: 200
                },
                onChange: _n => {
                    const p = (0, g.getLanguageKey)(_n);
                    localStorage.setItem(j.LocalStorageNames.language, p), o(_n);
                },
                children: l.map(_n => (0, d.jsx)(k, {
                    value: _n,
                    children: _n
                }, _n))
            })
        });
    }, _n = () => {
        const [o, p] = e.useState(!!localStorage.getItem(j.LocalStorageNames.allowGoogleTranslate));
        return (0, d.jsx)(f.Setting, {
            title: 'Allow Google Translate',
            description: 'Allow Google Chrome to translate text inside of live games?',
            children: (0, d.jsx)(i.default, {
                onClick: o => {
                    o ? localStorage.setItem(j.LocalStorageNames.allowGoogleTranslate, 'allow') : localStorage.removeItem(j.LocalStorageNames.allowGoogleTranslate), p(o);
                },
                checked: o
            })
        });
    };
}), a.register('983xi', function(b, c) {
    _j(b.exports, 'getListOfLanguages', function() {
        return _e;
    }), _j(b.exports, 'getLanguageKey', function() {
        return _f;
    }), _j(b.exports, 'getLanguageName', function() {
        return _g;
    });
    const d = {
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
        },
        _e = () => Object.keys(d).map(_j => d[_j]),
        _f = _j => Object.keys(d).filter(b => d[b] === _j)[0],
        _g = _j => d[_j];
}), a.register('m8qqA', function(b, c) {
    _j(b.exports, 'default', function() {
        return _i;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('btszz'),
        g = a('vKq/0'),
        h = a('y4x7Q');
    var _i = () => {
        const [_j, k] = e.useState(!!localStorage.getItem(h.LocalStorageNames.cosmosBlockedInGame));
        return (0, d.jsx)(f.Setting, {
            title: 'Disable Cosmetics',
            description: 'Gims, trails, and stickers are disabled in-game. All players appear as default Gims.',
            children: (0, d.jsx)(g.default, {
                onClick: _j => {
                    _j ? localStorage.setItem(h.LocalStorageNames.cosmosBlockedInGame, 'true') : localStorage.removeItem(h.LocalStorageNames.cosmosBlockedInGame), k(_j);
                },
                checked: _j
            })
        });
    };
}), a.register('TmP6v', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('btszz'),
        g = a('ulE4q'),
        h = a('ewwAh'),
        i = a('MSsQO'),
        j = a('PMl60'),
        k = a('+i8ep'),
        l = a('w0a3U');
    var _m = () => {
        const [_n, o] = e.useState(!0), [p, q] = e.useState(!1), [r, s] = e.useState(''), t = () => {
            if (p)
                return;
            let u = r;
            u && (u = u.trim(), u.length < 2) ? (0, j.throwMessageError)({
                default: {
                    title: 'Display name must be at least 2 characters long'
                }
            }) : (q(!0), (0, l.Request)({
                url: '/api/user/display-name',
                data: {
                    name: u
                },
                success: u => {
                    i.default.success('Display name updated!'), s(u.name);
                },
                error: u => {
                    (0, j.throwMessageError)({
                        e: u,
                        default: {
                            title: 'Error updating display name'
                        }
                    });
                },
                both: () => q(!1)
            }));
        };
        return (0, k.useDidMount)(() => {
            (0, l.Request)({
                url: '/api/user/display-name',
                success: _n => {
                    s(_n.name);
                },
                both: () => o(!1)
            });
        }), (0, d.jsx)(f.Setting, {
            title: 'Display Name',
            description: 'The name you appear as in-game when hosting a game. Leave empty to use your account name.',
            children: (0, d.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, d.jsx)(h.default, {
                        disabled: _n,
                        value: r,
                        maxLength: 20,
                        style: {
                            width: 200,
                            marginRight: 10
                        },
                        placeholder: 'Ms. Gimkit',
                        onPressEnter: t,
                        onChange: _n => {
                            s(_n.target.value);
                        }
                    }),
                    (0, d.jsx)(g.default, {
                        loading: p,
                        onClick: t,
                        type: 'primary',
                        children: 'Save'
                    })
                ]
            })
        });
    };
}), a.register('Bp5xg', function(b, c) {
    _m(b.exports, 'default', function() {
        return _n;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('xRjuc'),
        g = a('2PdBN'),
        h = a('i25Pw'),
        i = a('1Ojwa'),
        j = a('SEnTb'),
        k = a('ba39C'),
        l = a('b0KlL'),
        m = a('9d1uR');
    var _n = () => (e.useEffect(() => {
        (0, k.default)();
    }, []), (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(f.default, {}),
            (0, d.jsx)(h.default, {}),
            (0, d.jsx)(m.default, {}),
            (0, d.jsx)(g.default, {}),
            (0, d.jsx)(j.default, {}),
            (0, d.jsx)(i.default, {}),
            (0, d.jsx)(l.default, {})
        ]
    }));
}), a.register('xRjuc', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('oXQNI'),
        h = a('b5kvC'),
        i = a('R3x1N'),
        j = a('sHRDd'),
        k = a('PMl60');
    var _l = (0, f.observer)(() => {
        const {
            billing: _m
        } = e.useContext(i.default);
        return (0, d.jsx)(g.default, {
            style: {
                fontFamily: h.Fonts.SFPro,
                color: j.default.Black
            },
            children: (0, d.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, d.jsx)('div', {
                        children: (0, d.jsx)('img', {
                            src: `/client/img/settings/${ (0, k.isUpgraded)() ? 'launch' : 'sprout' }.svg`,
                            style: {
                                height: 87
                            }
                        })
                    }),
                    (0, d.jsxs)('div', {
                        style: {
                            marginLeft: 20
                        },
                        children: [
                            (0, d.jsx)('div', {
                                style: {
                                    fontWeight: h.FontWeights.UltraBold,
                                    fontSize: 28
                                },
                                children: _m.planName
                            }),
                            (0, d.jsx)('div', {
                                style: {
                                    marginTop: -8
                                },
                                children: _m.downgradeMessage || _m.planDescription
                            })
                        ]
                    })
                ]
            })
        });
    });
}), a.register('2PdBN', function(b, c) {
    _p(b.exports, 'default', function() {
        return _o;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('oXQNI'),
        g = a('6BM9K6'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('2x11J'),
        k = a('R3x1N'),
        l = a('ctFqV'),
        m = a('ECzOP');
    const n = _p => {
        const o = !!_p.amountRefunded,
            p = o && _p.amountRefunded === _p.amount;
        return (0, d.jsx)('a', {
            href: _p.link,
            target: '_blank',
            children: (0, d.jsx)(f.default, {
                style: {
                    color: h.default.Black,
                    fontFamily: i.Fonts.SFPro,
                    marginBottom: 5
                },
                hoverable: !0,
                children: (0, d.jsxs)('div', {
                    className: 'flex vc',
                    style: {
                        justifyContent: 'space-between'
                    },
                    children: [
                        (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsx)('div', {
                                    style: {
                                        fontSize: 11,
                                        marginBottom: -5,
                                        opacity: 0.7
                                    },
                                    children: _p.date
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        fontSize: 14
                                    },
                                    children: (0, l.centsToFormatedMoney)(_p.amount)
                                })
                            ]
                        }),
                        (0, d.jsx)('div', {
                            children: o && (0, d.jsx)(g.default, {
                                color: 'green',
                                children: p ? 'Refunded' : 'Partially Refunded'
                            })
                        })
                    ]
                })
            })
        });
    };
    var _o = (0, j.observer)(() => {
        const {
            billing: _p
        } = e.useContext(k.default);
        return _p.charges.length ? (0, d.jsxs)(f.default, {
            style: {
                color: h.default.Black,
                fontFamily: i.Fonts.SFPro,
                marginTop: 10
            },
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 22,
                        fontWeight: i.FontWeights.UltraBold,
                        marginBottom: -7
                    },
                    children: 'Receipts'
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginBottom: 7
                    },
                    children: 'Click a charge to open the receipt'
                }),
                _p.charges.map(_p => (0, d.jsx)(n, {
                    date: _n(m).unix(_p.unixDate).format('MMMM Do, YYYY'),
                    amount: _p.amount,
                    link: _p.receiptUrl,
                    amountRefunded: _p.amountRefunded
                }, _p.id))
            ]
        }) : null;
    });
}), a.register('6BM9K6', function(b, c) {
    _d(b.exports, 'default', function() {
        return _s;
    }, function(_d) {
        return _s = _d;
    });
    var d = a('QECub'),
        e = a('JrtKP'),
        f = a('LEQ5w'),
        g = a('1P5ls'),
        h = a('dFMJk'),
        i = a('QyNEL'),
        j = a('J4wJU8'),
        k = a('E4QrV8'),
        l = function(m, _n) {
            var o = {};
            for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && _n.indexOf(p) < 0 && (o[p] = m[p]);
            if (null != m && 'function' == typeof Object.getOwnPropertySymbols) {
                var q = 0;
                for (p = Object.getOwnPropertySymbols(m); q < p.length; q++)
                    _n.indexOf(p[q]) < 0 && Object.prototype.propertyIsEnumerable.call(m, p[q]) && (o[p[q]] = m[p[q]]);
            }
            return o;
        };
    const m = (_d, a) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: _s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = _d, x = l(_d, [
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
                getPrefixCls: y,
                direction: z
            } = f.useContext(g.ConfigContext), [A, B] = f.useState(!0);
            f.useEffect(() => {
                'visible' in x && B(x.visible);
            }, [x.visible]);
            const C = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                D = Object.assign({
                    backgroundColor: t && !C ? t : void 0
                }, q),
                E = y('tag', n),
                [F, G] = (0, k.default)(E),
                H = _j(e)(E, {
                    [`${ E }-${ t }`]: C,
                    [`${ E }-has-color`]: t && !C,
                    [`${ E }-hidden`]: !A,
                    [`${ E }-rtl`]: 'rtl' === z
                }, o, p, G),
                I = _d => {
                    _d.stopPropagation(), null == u || u(_d), _d.defaultPrevented || B(!1);
                },
                J = 'function' == typeof x.onClick || r && 'a' === r.type,
                K = _s || null,
                L = K ? f.createElement(f.Fragment, null, K, f.createElement('span', null, r)) : r,
                M = f.createElement('span', Object.assign({}, x, {
                    ref: a,
                    className: H,
                    style: D
                }), L, w ? v ? f.createElement('span', {
                    className: `${ E }-close-icon`,
                    onClick: I
                }, v) : f.createElement(d.default, {
                    className: `${ E }-close-icon`,
                    onClick: I
                }) : null);
            return F(J ? f.createElement(i.default, null, M) : M);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = n;
}), a.register('J4wJU8', function(b, c) {
    _d(b.exports, 'default', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('JrtKP'),
        e = a('LEQ5w'),
        f = a('1P5ls'),
        g = a('E4QrV8'),
        h = function(i, _j) {
            var k = {};
            for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && _j.indexOf(l) < 0 && (k[l] = i[l]);
            if (null != i && 'function' == typeof Object.getOwnPropertySymbols) {
                var m = 0;
                for (l = Object.getOwnPropertySymbols(i); m < l.length; m++)
                    _j.indexOf(l[m]) < 0 && Object.prototype.propertyIsEnumerable.call(i, l[m]) && (k[l[m]] = i[l[m]]);
            }
            return k;
        };
    var _i = _e => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = _e, o = h(_e, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: p
        } = e.useContext(f.ConfigContext), q = p('tag', j), [r, s] = (0, g.default)(q), t = _b(d)(q, {
            [`${ q }-checkable`]: !0,
            [`${ q }-checkable-checked`]: l
        }, k, s);
        return r(e.createElement('span', Object.assign({}, o, {
            className: t,
            onClick: _e => {
                null == m || m(!l), null == n || n(_e);
            }
        })));
    };
}), a.register('E4QrV8', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _l;
    });
    var d = a('XC0UB'),
        e = a('l+IVY'),
        f = a('xbYck1'),
        g = a('bL6OF'),
        h = a('7hbGU');
    const i = (_e, _b, a) => {
            const j = (0, f.default)(a);
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: _e[`color${ a }`],
                    background: _e[`color${ j }Bg`],
                    borderColor: _e[`color${ j }Border`]
                }
            };
        },
        j = _e => (0, g.genPresetColor)(_e, (_b, a) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = a;
            return {
                [`${ _e.componentCls }-${ _b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: _e.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = _e => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = _e, p = n - m, q = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(_e)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: _e.marginXS,
                    paddingInline: p,
                    fontSize: _e.tagFontSize,
                    lineHeight: `${ _e.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: _e.tagDefaultBg,
                    border: `${ _e.lineWidth }px ${ _e.lineType } ${ _e.colorBorder }`,
                    borderRadius: _e.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ _e.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: _e.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: q,
                        color: _e.colorTextDescription,
                        fontSize: _e.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ _e.motionDurationMid }`,
                        '&:hover': {
                            color: _e.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ _e.iconCls }-close, ${ _e.iconCls }-close:hover`]: {
                            color: _e.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: _e.colorPrimary,
                            backgroundColor: _e.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: _e.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: _e.colorPrimary,
                            '&:hover': {
                                backgroundColor: _e.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: _e.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ _e.iconCls } + span, > span + ${ _e.iconCls }`]: {
                        marginInlineStart: p
                    }
                })
            };
        };
    var _l = (0, d.default)('Tag', _e => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = _e, q = Math.round(m * n), r = _e.fontSizeSM, s = q - 2 * o, t = _e.colorFillAlter, u = _e.colorText, v = (0, e.merge)(_e, {
            tagFontSize: r,
            tagLineHeight: s,
            tagDefaultBg: t,
            tagDefaultColor: u,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(v),
            j(v),
            i(v, 'success', 'Success'),
            i(v, 'processing', 'Info'),
            i(v, 'error', 'Error'),
            i(v, 'warning', 'Warning')
        ];
    });
}), a.register('xbYck1', function(b, c) {
    function d(_e) {
        if ('string' != typeof _e)
            return _e;
        return _e.charAt(0).toUpperCase() + _e.slice(1);
    }
    _l(b.exports, 'default', function() {
        return _d;
    });
}), a.register('ctFqV', function(b, c) {
    _l(b.exports, 'centsToFormatedMoney', function() {
        return _d;
    });
    const _d = _l => (_l / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}), a.register('i25Pw', function(b, c) {
    _l(b.exports, 'default', function() {
        return _k;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('R3x1N'),
        h = a('oXQNI'),
        i = a('sHRDd'),
        j = a('b5kvC');
    var _k = (0, f.observer)(() => {
        const {
            billing: _l
        } = e.useContext(g.default);
        return !_l.hasNextCharge || _l.planName.toLowerCase().includes('basic') ? null : (0, d.jsxs)(h.default, {
            style: {
                marginTop: 10,
                color: i.default.Black
            },
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 14,
                        marginBottom: -5
                    },
                    children: 'Next Charge'
                }),
                (0, d.jsxs)('div', {
                    className: 'flex vc',
                    children: [
                        (0, d.jsx)('div', {
                            style: {
                                fontSize: 27,
                                fontWeight: j.FontWeights.UltraBold
                            },
                            children: _l.nextChargeAmount
                        }),
                        (0, d.jsxs)('div', {
                            style: {
                                opacity: 0.8,
                                fontSize: 12,
                                marginLeft: 7
                            },
                            children: [
                                'on ',
                                _l.nextChargeDate
                            ]
                        })
                    ]
                })
            ]
        });
    });
}), a.register('1Ojwa', function(b, c) {
    _m(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('oXQNI'),
        h = a('sHRDd'),
        i = a('b5kvC'),
        j = a('ctFqV'),
        k = a('R3x1N');
    var _l = (0, f.observer)(() => {
        const {
            billing: _m
        } = e.useContext(k.default);
        return _m.accountBalance ? (0, d.jsxs)(g.default, {
            style: {
                color: h.default.Black,
                fontFamily: i.Fonts.SFPro,
                marginTop: 10
            },
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 12
                    },
                    children: 'Account Credit'
                }),
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 19,
                        marginTop: -5,
                        fontWeight: i.FontWeights.UltraBold
                    },
                    children: (0, j.centsToFormatedMoney)(_m.accountBalance)
                })
            ]
        }) : null;
    });
}), a.register('SEnTb', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('XetsG'),
        g = a('ulE4q'),
        h = a('oXQNI'),
        i = a('MSsQO'),
        j = a('sHRDd'),
        k = a('b5kvC'),
        l = a('R3x1N'),
        m = a('2x11J'),
        n = a('AzS0C1'),
        o = a('PMl60'),
        p = a('CutOX'),
        q = (g = a('ulE4q'), h = a('oXQNI'), i = a('MSsQO'), a('INKb2'));
    var _r = (0, m.observer)(() => {
        const [_s, t] = e.useState(!1), {
            billing: {
                last4DigitsOfCard: u,
                stripePublicKey: v,
                cardName: w
            }
        } = e.useContext(l.default);
        if (e.useEffect(() => {
                const x = (0, o.getUrlVariable)('session_id');
                x && (t(!0), (0, o.verifyStripe)({
                    sessionId: x,
                    onSuccess: () => {
                        (0, p.default)(), i.default.success('Credit card updated successfully');
                    },
                    onError: () => (0, q.throwError)({
                        title: 'Error updating credit card',
                        content: 'Please try again or contact support'
                    }),
                    onBoth: () => {
                        t(!1);
                    },
                    invokeImmediately: !0
                }));
            }, []), !u || !w)
            return null;
        return (0, d.jsxs)(h.default, {
            style: {
                color: j.default.Black,
                fontFamily: k.Fonts.SFPro,
                marginTop: 10
            },
            children: [
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 17,
                        fontWeight: k.FontWeights.UltraBold,
                        marginBottom: 1
                    },
                    children: 'Payment Method'
                }),
                (0, d.jsx)(h.default, {
                    children: (0, d.jsxs)('div', {
                        className: 'flex vc',
                        style: {
                            color: j.default.Black,
                            fontFamily: k.Fonts.SFPro
                        },
                        children: [
                            (0, d.jsx)(f.default, {
                                style: {
                                    fontSize: 24,
                                    marginRight: 10
                                }
                            }),
                            (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsx)('span', {
                                        style: {
                                            fontWeight: k.FontWeights.UltraBold
                                        },
                                        children: w.toUpperCase()
                                    }),
                                    ' ',
                                    'ending in',
                                    ' ',
                                    (0, d.jsx)('span', {
                                        style: {
                                            fontWeight: k.FontWeights.UltraBold
                                        },
                                        children: u
                                    })
                                ]
                            })
                        ]
                    })
                }),
                (0, d.jsxs)('div', {
                    style: {
                        marginTop: 5,
                        justifyContent: 'space-between'
                    },
                    className: 'flex maxWidth',
                    children: [
                        (0, d.jsx)('div', {}),
                        v && (0, d.jsx)(g.default, {
                            type: 'primary',
                            size: 'large',
                            onClick: async () => {
                                let x;
                                t(!0);
                                try {
                                    x = await (0, n.loadStripe)(v);
                                } catch (x) {
                                    t(!1), (0, o.throwMessageError)({
                                        e: x,
                                        default: {
                                            title: 'Our payment processor is currently down',
                                            content: 'Please try again later'
                                        }
                                    });
                                }
                                x && (0, o.request)({
                                    url: '/api/billing/create-billing-info-session',
                                    method: 'POST',
                                    success: async t => {
                                        const y = t;
                                        let z;
                                        try {
                                            if (z = await x.redirectToCheckout({
                                                    sessionId: y.id
                                                }), z && z.error)
                                                throw z.error;
                                        } catch (x) {
                                            (0, o.throwMessageError)({
                                                e: x,
                                                default: {
                                                    title: 'Error',
                                                    content: 'An error ocurred. Please try again later'
                                                }
                                            });
                                        }
                                    },
                                    error: x => {
                                        t(!1), (0, o.throwMessageError)({
                                            e: x,
                                            default: {
                                                title: 'Connection Error',
                                                content: 'An error ocurred while connecting to our payments provider. Please try again later'
                                            }
                                        });
                                    }
                                });
                            },
                            loading: _s,
                            children: 'Change Credit Card'
                        })
                    ]
                })
            ]
        });
    });
}), a.register('AzS0C1', function(b, c) {
    _i(b.exports, 'loadStripe', function() {
        return _l;
    });
    var d = 'https://js.stripe.com/v3',
        e = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        f = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        g = null,
        h = function(_i) {
            return null !== g || (g = new Promise(function(j, k) {
                if ('undefined' != typeof window)
                    if (window.Stripe && _i && console.warn(f), window.Stripe)
                        j(window.Stripe);
                    else
                        try {
                            var l = function() {
                                for (var m = document.querySelectorAll('script[src^="'.concat(d, '"]')), n = 0; n < m.length; n++) {
                                    var o = m[n];
                                    if (e.test(o.src))
                                        return o;
                                }
                                return null;
                            }();
                            l && _i ? console.warn(f) : l || (l = function(m) {
                                var n = m && !m.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                                    o = document.createElement('script');
                                o.src = ''.concat(d).concat(n);
                                var p = document.head || document.body;
                                if (!p)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return p.appendChild(o), o;
                            }(_i)), l.addEventListener('load', function() {
                                window.Stripe ? j(window.Stripe) : k(new Error('Stripe.js not available'));
                            }), l.addEventListener('error', function() {
                                k(new Error('Failed to load Stripe.js'));
                            });
                        } catch (_i) {
                            return void k(_i);
                        }
                else
                    j(null);
            })), g;
        },
        i = function(j, k, l) {
            if (null === j)
                return null;
            var m = j.apply(void 0, k);
            return function(n, o) {
                n && n._registerWrapper && n._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: o
                });
            }(m, l), m;
        },
        j = Promise.resolve().then(function() {
            return h(null);
        }),
        k = !1;
    j.catch(function(l) {
        k || console.warn(l);
    });
    var _l = function() {
        for (var m = arguments.length, n = new Array(m), o = 0; o < m; o++)
            n[o] = arguments[o];
        k = !0;
        var p = Date.now();
        return j.then(function(q) {
            return i(q, n, p);
        });
    };
}), a.register('CutOX', function(b, c) {
    _n(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('78pxp');
    var _f = () => {
        (0, d.request)({
            url: '/api/billing/payment-source',
            success: _n => {
                e.default.billing.cardName = _n.source.cardType, e.default.billing.last4DigitsOfCard = _n.source.last4Digits, (0, d.request)({
                    url: '/api/billing/stripe-key',
                    success: _n => e.default.billing.stripePublicKey = _n.key
                });
            }
        });
    };
}), a.register('ba39C', function(b, c) {
    _n(b.exports, 'default', function() {
        return _i;
    });
    var d = a('RROrh'),
        e = a('cKZxw'),
        f = a('hPAAR'),
        g = a('CutOX'),
        h = a('Pkvp4');
    var _i = () => {
        (0, h.default)({
            onSuccess: () => {
                (0, d.default)(), (0, e.default)(), (0, f.default)(), (0, g.default)();
            }
        });
    };
}), a.register('RROrh', function(b, c) {
    _n(b.exports, 'default', function() {
        return _j;
    });
    var d = a('PMl60'),
        e = a('78pxp'),
        f = a('OI9Yf'),
        g = a('uw0dZ'),
        h = a('ctFqV'),
        i = a('gAofW');
    var _j = () => {
        (0, d.isUpgraded)() && (0, i.default)(), (0, d.request)({
            url: '/api/billing/plan-info',
            success: _n => {
                const {
                    info: k
                } = _n;
                e.default.billing.planName = (0, f.default)(k.plan), e.default.billing.planDescription = (_n => {
                    if ('basic' === _n.info.plan)
                        return 'Free Forever!';
                    if (_n.info.info) {
                        const l = _n.info.info;
                        if (l.providedByMessage)
                            return l.providedByMessage;
                        if (l.cost && l.timePeriod)
                            return `${ (0, h.centsToFormatedMoney)(l.cost) } per ${ l.timePeriod }`;
                        if (l.bulkName)
                            return `Paid by ${ l.bulkName }.`;
                    }
                    return '';
                })(_n), k.info && k.info.timePeriod && (e.default.billing.billingInterval = k.info.timePeriod), 'stripe' === k.source && (0, g.default)();
            }
        });
    };
}), a.register('uw0dZ', function(b, c) {
    _n(b.exports, 'default', function() {
        return _g;
    });
    var d = a('PMl60'),
        e = a('78pxp'),
        f = a('ctFqV');
    var _g = () => {
        (0, d.request)({
            url: '/api/billing/upcoming-invoice',
            success: _n => {
                e.default.billing.nextChargeAmount = (0, f.centsToFormatedMoney)(_n.amount), e.default.billing.nextChargeDate = _n.date, e.default.billing.hasNextCharge = !0;
            }
        });
    };
}), a.register('gAofW', function(b, c) {
    _n(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('78pxp');
    var _f = () => {
        (0, d.request)({
            url: '/api/billing/downgrade-details',
            success: _n => {
                e.default.billing.canDowngrade = _n.canDowngrade, _n.message && (e.default.billing.downgradeMessage = _n.message), _n.subscriptionEndDateText && (e.default.billing.downgradeDateMessage = _n.subscriptionEndDateText);
            }
        });
    };
}), a.register('cKZxw', function(b, c) {
    _n(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('78pxp');
    var _f = () => {
        (0, d.request)({
            url: '/api/billing/charges',
            success: _n => e.default.billing.charges.replace(_n.charges)
        });
    };
}), a.register('hPAAR', function(b, c) {
    _n(b.exports, 'default', function() {
        return _f;
    });
    var d = a('PMl60'),
        e = a('78pxp');
    var _f = () => {
        (0, d.request)({
            url: '/api/billing/account-balance',
            success: _n => {
                e.default.billing.accountBalance = _n.balance;
            }
        });
    };
}), a.register('b0KlL', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('ulE4q'),
        g = a('oXQNI'),
        h = a('b5kvC'),
        i = a('sHRDd'),
        j = a('2x11J'),
        k = a('R3x1N'),
        l = a('38yX1');
    var _m = (0, j.observer)(() => {
        const {
            billing: _n
        } = e.useContext(k.default), [o, p] = e.useState(!1), q = () => p(!o);
        if (!_n.canDowngrade) {
            if (_n.downgradeMessage && _n.downgradeMessage.includes('set to end')) {
                const r = _n.downgradeMessage.split('end on ')[1];
                return r ? (0, d.jsxs)(g.default, {
                    style: {
                        fontFamily: h.Fonts.SFPro,
                        color: i.default.Black,
                        marginTop: 10
                    },
                    children: [
                        (0, d.jsx)('b', {
                            children: 'You\'ve already canceled your subscription.'
                        }),
                        ' You won\'t be charged again and will keep Pro access until ',
                        r
                    ]
                }) : null;
            }
            return null;
        }
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(g.default, {
                    style: {
                        fontFamily: h.Fonts.SFPro,
                        color: i.default.Black,
                        marginTop: 10
                    },
                    children: (0, d.jsxs)('div', {
                        className: 'flex maxWidth',
                        style: {
                            justifyContent: 'space-between'
                        },
                        children: [
                            (0, d.jsx)('div', {}),
                            _n.canDowngrade && (0, d.jsx)(f.default, {
                                onClick: q,
                                type: 'primary',
                                danger: !0,
                                children: 'Cancel Subscription'
                            })
                        ]
                    })
                }),
                (0, d.jsx)(l.default, {
                    visible: o,
                    close: q
                })
            ]
        });
    });
}), a.register('38yX1', function(b, c) {
    _s(b.exports, 'default', function() {
        return _v;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('2x11J'),
        g = a('ulE4q'),
        h = a('fmVdR'),
        i = a('ewwAh'),
        j = a('YRlpt'),
        k = a('yiusa0'),
        l = a('b5kvC'),
        m = a('sHRDd'),
        n = a('OI9Yf'),
        o = a('R3x1N'),
        p = a('PMl60'),
        q = a('INKb2'),
        r = a('ba39C'),
        s = a('4iV4e');
    let t;
    var u;
    (u = t || (t = {})).firstAsk = 'firstAsk', u.reason = 'reason', u.groupOrder = 'groupOrder';
    var _v = (0, f.observer)(_s => {
        const {
            billing: w
        } = e.useContext(o.default), [x, y] = e.useState(t.firstAsk), [z, A] = e.useState(''), [B, C] = e.useState(''), [D, E] = e.useState(!1), F = !D, G = _s => A(_s.target.value), H = _s => C(_s.target.value), I = () => {
            F && (E(!0), (0, p.request)({
                url: '/api/billing/downgrade',
                data: {
                    reasonId: z,
                    otherReason: B
                },
                success: () => {
                    j.default.success({
                        title: `You've canceled your ${ (0, n.default)((0, p.getUser)().type) } subscription${ w.downgradeDateMessage && ' to end on ' + w.downgradeDateMessage }.`
                    }), w.reset(), (0, r.default)(), _s.close();
                },
                error: () => (0, q.throwError)({
                    title: 'Error canceling subscription',
                    content: 'Please contact support'
                }),
                both: () => E(!1)
            }));
        }, J = () => y(t.reason), K = () => y(t.groupOrder);
        return (0, d.jsx)(j.default, {
            open: _s.visible,
            onCancel: _s.close,
            style: {
                fontFamily: l.Fonts.SFPro,
                color: m.default.Black
            },
            footer: null,
            closable: !1,
            children: x === t.firstAsk ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            textAlign: 'center',
                            fontWeight: l.FontWeights.Bold,
                            fontSize: 25
                        },
                        children: 'Are you canceling because you\'re joining a group license?'
                    }),
                    (0, d.jsx)(h.default, {}),
                    (0, d.jsx)(g.default, {
                        style: {
                            marginBottom: 5
                        },
                        onClick: K,
                        block: !0,
                        size: 'large',
                        children: 'Yes'
                    }),
                    (0, d.jsx)(g.default, {
                        block: !0,
                        size: 'large',
                        onClick: J,
                        children: 'No'
                    })
                ]
            }) : x === t.groupOrder ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            fontWeight: l.FontWeights.Bold,
                            fontSize: 27,
                            lineHeight: '30px'
                        },
                        children: 'To get a refund, don\'t cancel your subscription just yet!'
                    }),
                    (0, d.jsx)(h.default, {}),
                    (0, d.jsxs)('div', {
                        style: {
                            fontSize: 15
                        },
                        children: [
                            'If you\'re joining a group license, ask your group manager for the',
                            ' ',
                            (0, d.jsx)('b', {
                                children: 'invite link.'
                            }),
                            ' ',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            'When you open the invite link, your current subscription will automatically be canceled, and you will receive a refund for your unused time on ',
                            (0, n.default)((0, p.getUser)().type),
                            '. ',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            ' If you cancel now, you will not be refunded for your unused time.'
                        ]
                    }),
                    (0, d.jsx)(h.default, {}),
                    (0, d.jsx)(g.default, {
                        block: !0,
                        type: 'primary',
                        size: 'large',
                        onClick: _s.close,
                        children: 'Got It!'
                    }),
                    (0, d.jsx)('div', {
                        className: 'maxWidth',
                        style: {
                            textAlign: 'center',
                            marginTop: 10
                        },
                        children: (0, d.jsx)('a', {
                            onClick: J,
                            children: 'Cancel subscription anyway'
                        })
                    })
                ]
            }) : x === t.reason ? (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            fontWeight: l.FontWeights.UltraBold,
                            fontSize: 32
                        },
                        children: 'Cancel Subscription'
                    }),
                    (0, d.jsxs)('div', {
                        style: {
                            fontSize: 15,
                            marginTop: 10
                        },
                        children: [
                            'Your ',
                            (0, d.jsx)('b', {
                                children: (0, n.default)((0, p.getUser)().type)
                            }),
                            ' subscription will end on',
                            ' ',
                            (0, d.jsx)('b', {
                                children: w.downgradeDateMessage
                            }),
                            '. ',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            ' You won\u2019t be charged again. You\u2019ll keep everything you\u2019ve created and you can restart your subscription anytime after your subscription ends.',
                            ' ',
                            (0, d.jsx)('br', {}),
                            ' ',
                            (0, d.jsx)('br', {}),
                            ' If you have a moment, let us know what made you cancel by selecting an option below. Thanks so much!'
                        ]
                    }),
                    (0, d.jsx)(k.default.Group, {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: 20
                        },
                        onChange: G,
                        value: z,
                        children: _w.map(_s => (0, d.jsx)(k.default, {
                            value: _s.id,
                            style: {
                                fontSize: 15,
                                color: m.default.Black,
                                marginBottom: 4
                            },
                            children: _s.text
                        }, _s.id))
                    }),
                    'other' === z ? (0, d.jsx)(i.default, {
                        placeholder: 'Reason...',
                        autoFocus: !0,
                        style: {
                            marginTop: 10
                        },
                        value: B,
                        onChange: H
                    }) : null,
                    (0, d.jsx)(g.default, {
                        block: !0,
                        style: {
                            marginTop: 25
                        },
                        type: 'primary',
                        danger: !0,
                        onClick: I,
                        loading: D,
                        disabled: !F,
                        children: 'Cancel Subscription'
                    })
                ]
            }) : null
        });
    });
    const _w = [{
            id: 'break',
            text: 'Summer break/taking a break'
        },
        ...(0, s.shuffle)([{
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
}), a.register('9d1uR', function(b, c) {
    _s(b.exports, 'default', function() {
        return _r;
    });
    var d = a('0hzx+'),
        e = a('2x11J'),
        f = a('LEQ5w'),
        g = a('R3x1N'),
        h = a('PMl60'),
        i = a('ulE4q'),
        j = a('oXQNI'),
        k = a('b5kvC'),
        l = a('sHRDd'),
        m = a('xQDqe25'),
        n = a('hHkFq'),
        o = a('2HvvA11'),
        p = a('gs4MT');
    const q = _s => (0, d.jsx)(j.default, {
        style: {
            fontFamily: k.Fonts.SFPro,
            color: l.default.White,
            marginTop: 10,
            overflow: 'hidden'
        },
        ..._s
    });
    var _r = (0, e.observer)(() => {
        const {
            billing: _s
        } = f.useContext(g.default);
        return (0, h.isUpgraded)() && _s.billingInterval && 'year' !== _s.billingInterval ? (0, d.jsx)(q, {
            bodyStyle: {
                backgroundImage: 'linear-gradient(to left, #434343 0%, #1c1c1c 100%)',
                padding: 40
            },
            children: (0, d.jsxs)('div', {
                className: 'flex-column flex-center',
                style: {
                    textAlign: 'center'
                },
                children: [
                    (0, d.jsx)('div', {
                        style: {
                            fontSize: 22,
                            fontWeight: k.FontWeights.Bold,
                            textAlign: 'center'
                        },
                        children: 'Switch to annual billing and save 65%!'
                    }),
                    (0, d.jsxs)('div', {
                        style: {
                            fontSize: 14,
                            color: 'rgba(255,255,255,0.9)',
                            marginTop: 2
                        },
                        children: [
                            'If you use ',
                            n.COMPANY_NAME,
                            ' more than 3 months a year, you\'ll save money by switching to annual billing!'
                        ]
                    }),
                    (0, d.jsx)('div', {
                        style: {
                            marginTop: 20
                        },
                        children: (0, d.jsx)(o.default, {
                            to: p.CHECKOUT,
                            children: (0, d.jsx)(i.default, {
                                size: 'large',
                                icon: (0, d.jsx)(m.default, {}),
                                type: 'primary',
                                children: 'Switch To Annual Billing'
                            })
                        })
                    })
                ]
            })
        }) : null;
    });
}), a.register('xQDqe25', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('AxRpU23'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var _i = e.forwardRef(h);
}), a.register('AxRpU23', function(b, c) {
    _n(b.exports, 'default', function() {
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
                    d: 'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z'
                }
            }]
        },
        name: 'star',
        theme: 'outlined'
    };
}), a.register('fOAV4', function(b, c) {
    _n(b.exports, 'default', function() {
        return _m;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('b5kvC'),
        f = a('sHRDd'),
        g = a('fmVdR'),
        h = a('Axq+p');
    let i;
    const j = _n => (0, d.jsx)('div', {
            style: {
                backgroundImage: `url(${ _n.src })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '50%',
                height: 70,
                width: 70,
                margin: 10,
                borderStyle: 'solid',
                borderColor: '#607d8b'
            }
        }),
        k = _n => (0, d.jsxs)('div', {
            className: 'flex wrap vc',
            children: [
                (0, d.jsx)('div', {
                    children: (0, d.jsx)('img', {
                        src: _n.image,
                        style: {
                            height: 99,
                            marginRight: 22
                        }
                    })
                }),
                (0, d.jsx)('div', {
                    style: {
                        flex: 1
                    },
                    children: _n.content
                })
            ]
        }),
        l = () => (0, d.jsx)('div', {
            style: {
                height: 35
            }
        });
    var _m = () => {
        const _n = () => {
            window.open('https://help.gimkit.com');
        };
        return (0, d.jsx)(_n, {
            className: 'flex hc',
            children: (0, d.jsxs)('div', {
                style: {
                    color: f.default.Black,
                    fontFamily: e.Fonts.SFPro,
                    maxWidth: 700,
                    width: '100%'
                },
                className: 'flex flex-column wrap',
                children: [
                    (0, d.jsxs)('div', {
                        className: 'flex hc vc flex-column',
                        children: [
                            (0, d.jsxs)('div', {
                                className: 'flex wrap',
                                children: [
                                    (0, d.jsx)(j, {
                                        src: '/client/img/settings/pharlain.jpg'
                                    }),
                                    (0, d.jsx)(j, {
                                        src: '/client/img/settings/jeff.jpg'
                                    }),
                                    (0, d.jsx)(j, {
                                        src: '/client/img/settings/rebecca.png'
                                    })
                                ]
                            }),
                            (0, d.jsx)('div', {
                                style: {
                                    fontWeight: e.FontWeights.UltraBold,
                                    fontSize: 40,
                                    marginTop: -6,
                                    marginBottom: -2
                                },
                                children: 'Friendly folks, here to help.'
                            }),
                            (0, d.jsxs)('div', {
                                style: {
                                    fontSize: 19,
                                    textAlign: 'center'
                                },
                                children: [
                                    'No robots, ',
                                    (0, d.jsx)('b', {
                                        children: 'just real humans!'
                                    }),
                                    ' Need something? We\'ll get back to you within ',
                                    (0, d.jsx)('b', {
                                        children: '2 business days.'
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, d.jsx)(g.default, {}),
                    (0, d.jsx)(k, {
                        image: '/client/img/settings/question.svg',
                        content: (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontWeight: e.FontWeights.UltraBold,
                                        fontSize: 28
                                    },
                                    children: [
                                        'Check our',
                                        ' ',
                                        (0, d.jsx)('a', {
                                            onClick: _n,
                                            href: '#',
                                            children: 'helpdesk'
                                        })
                                    ]
                                }),
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontSize: 20,
                                        lineHeight: '22px'
                                    },
                                    children: [
                                        'Your question might have already been answered!',
                                        ' ',
                                        (0, d.jsx)('a', {
                                            href: '#',
                                            onClick: _n,
                                            children: 'Click here'
                                        }),
                                        ' ',
                                        'to search our helpdesk for an answer!'
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, d.jsx)(g.default, {
                        style: {
                            marginTop: 30,
                            marginBottom: 30
                        },
                        children: (0, d.jsx)('span', {
                            style: {
                                fontSize: 20
                            },
                            children: 'If you couldn\'t find your answer...'
                        })
                    }),
                    (0, d.jsx)(k, {
                        image: '/client/img/settings/email.svg',
                        content: (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontWeight: e.FontWeights.UltraBold,
                                        fontSize: 28
                                    },
                                    children: [
                                        'Send us',
                                        ' ',
                                        (0, d.jsx)('a', {
                                            target: '_blank',
                                            href: 'mailto:hello@gimkit.com',
                                            children: 'an email'
                                        })
                                    ]
                                }),
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontSize: 20,
                                        lineHeight: '22px'
                                    },
                                    children: [
                                        'Email us at',
                                        ' ',
                                        (0, d.jsx)('a', {
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
                    (0, d.jsx)(l, {}),
                    (0, d.jsx)(k, {
                        image: '/client/img/settings/heart.svg',
                        content: (0, d.jsxs)('div', {
                            children: [
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontWeight: e.FontWeights.UltraBold,
                                        fontSize: 28
                                    },
                                    children: [
                                        'Suggest a',
                                        ' ',
                                        (0, d.jsx)('a', {
                                            target: '_blank',
                                            href: 'https://gimkit.nolt.io/',
                                            children: 'new feature'
                                        })
                                    ]
                                }),
                                (0, d.jsxs)('div', {
                                    style: {
                                        fontSize: 20,
                                        lineHeight: '22px'
                                    },
                                    children: [
                                        'Have something you want to see in Gimkit?',
                                        ' ',
                                        (0, d.jsx)('a', {
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
                    (0, d.jsx)(l, {})
                ]
            })
        });
    };
    const _n = h.default.div(i || (i = (_d => _d)``));
}), a.register('RC6kl3', function(b, c) {
    _d(b.exports, 'default', function() {
        return _f;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var e = a('KAA9h2');
    var _f = _d => {
        const g = (0, e.use100vh)();
        return (0, d.jsx)('div', {
            style: {
                height: g,
                width: '100%'
            },
            className: _d.className,
            children: _d.children
        });
    };
}), a.register('KAA9h2', function(b, c) {
    _d(b.exports, 'use100vh', function() {
        return _i;
    }, function(_d) {
        return _i = _d;
    });
    var d = a('LEQ5w'),
        e = function() {
            return e = Object.assign || function(f) {
                for (var g, h = 1, i = arguments.length; h < i; h++)
                    for (var j in g = arguments[h])
                        Object.prototype.hasOwnProperty.call(g, j) && (f[j] = g[j]);
                return f;
            }, e.apply(this, arguments);
        },
        f = function(g, h) {
            var i = {};
            for (var j in g)
                Object.prototype.hasOwnProperty.call(g, j) && h.indexOf(j) < 0 && (i[j] = g[j]);
            if (null != g && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(g); k < j.length; k++)
                    h.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(g, j[k]) && (i[j[k]] = g[j[k]]);
            }
            return i;
        },
        g = !1,
        h = (0, d.forwardRef)(function(i, j) {
            var k = i.style,
                l = f(i, ['style']),
                m = _i();
            !g && (null == k ? void 0 : k.height) && (g = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var n = e(e({}, k), {
                height: m ? m + 'px' : '100vh'
            });
            return _k(d).createElement('div', e({
                ref: j,
                style: n
            }, l));
        });
    h.displayName = 'Div100vh';

    function _i() {
        var j = (0, d.useState)(_i),
            _k = j[0],
            l = j[1],
            m = function() {
                var n = (0, d.useState)(!1),
                    o = n[0],
                    p = n[1];
                return (0, d.useEffect)(function() {
                    _i() && p(!0);
                }, []), o;
            }();
        return (0, d.useEffect)(function() {
            if (m)
                return window.addEventListener('resize', j),
                    function() {
                        return window.removeEventListener('resize', j);
                    };

            function n() {
                var o = _i();
                l(o);
            }
        }, [m]), m ? _k : null;
    }

    function _i() {
        return _i() ? window.innerHeight : null;
    }

    function _i() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
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
    _b(b.exports, 'initMoveMotion', function() {
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
        _m = (_b, b) => {
            const {
                antCls: n
            } = _b, o = `${ n }-${ b }`, {
                inKeyframes: p,
                outKeyframes: q
            } = l[b];
            return [
                (0, e.initMotion)(o, p, q, _b.motionDurationMid),
                {
                    [`\n        ${ o }-enter,\n        ${ o }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: _b.motionEaseOutCirc
                    },
                    [`${ o }-leave`]: {
                        animationTimingFunction: _b.motionEaseInOutCirc
                    }
                }
            ];
        };
}), a.register('jlX4s16', function(_b, c) {
    var d = a('RnV2k27'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    _b.exports = function(f, g) {
        var h, i, j, k, l, m, n = !1;
        g || (g = {}), h = g.debug || !1;
        try {
            if (j = d(), k = document.createRange(), l = document.getSelection(), (m = document.createElement('span')).textContent = f, m.ariaHidden = 'true', m.style.all = 'unset', m.style.position = 'fixed', m.style.top = 0, m.style.clip = 'rect(0, 0, 0, 0)', m.style.whiteSpace = 'pre', m.style.webkitUserSelect = 'text', m.style.MozUserSelect = 'text', m.style.msUserSelect = 'text', m.style.userSelect = 'text', m.addEventListener('copy', function(o) {
                    if (o.stopPropagation(), g.format)
                        if (o.preventDefault(), void 0 === o.clipboardData) {
                            h && console.warn('unable to use e.clipboardData'), h && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var p = e[g.format] || e.default;
                            window.clipboardData.setData(p, f);
                        } else
                            o.clipboardData.clearData(), o.clipboardData.setData(g.format, f);
                    g.onCopy && (o.preventDefault(), g.onCopy(o.clipboardData));
                }), document.body.appendChild(m), k.selectNodeContents(m), l.addRange(k), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            n = !0;
        } catch (d) {
            h && console.error('unable to copy using execCommand: ', d), h && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(g.format || 'text', f), g.onCopy && g.onCopy(window.clipboardData), n = !0;
            } catch (d) {
                h && console.error('unable to copy using clipboardData: ', d), h && console.error('falling back to prompt'), i = function(o) {
                    var p = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return o.replace(/#{\s*key\s*}/g, p);
                }('message' in g ? g.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(i, f);
            }
        } finally {
            l && ('function' == typeof l.removeRange ? l.removeRange(k) : l.removeAllRanges()), m && document.body.removeChild(m), j();
        }
        return n;
    };
}), a.register('RnV2k27', function(b, c) {
    b.exports = function() {
        var d = document.getSelection();
        if (!d.rangeCount)
            return function() {};
        for (var e = document.activeElement, f = [], g = 0; g < d.rangeCount; g++)
            f.push(d.getRangeAt(g));
        switch (e.tagName.toUpperCase()) {
            case 'INPUT':
            case 'TEXTAREA':
                e.blur();
                break;
            default:
                e = null;
        }
        return d.removeAllRanges(),
            function() {
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(h) {
                    d.addRange(h);
                }), e && e.focus();
            };
    };
}), a.register('DKaq/', function(b, c) {
    _f(b.exports, 'default', function() {
        return _l;
    });
    var d = a('0hzx+'),
        e = a('LEQ5w'),
        f = a('Axq+p'),
        g = a('YRlpt'),
        h = a('sHRDd'),
        i = a('x8CoD');
    let j;
    const k = f.default.img.attrs(_f => ({
        src: _f.image
    }))(j || (j = (_f => _f)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), _f => _f.size, _f => _f.size, _f => _f.customRightMargin ? _f.customRightMargin : 0, _f => _f.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var _l = _f => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ..._f,
                    onClick: m => {
                        m.stopPropagation(), _f.onClick && _f.onClick(), _f.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: _f => {
                        _f.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(_f.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), a.register('x8CoD', function(b, c) {
    _f(b.exports, 'getCloudinaryUrl', function() {
        return _d;
    });
    const _d = _f => {
            const e = _e(_f);
            return e ? _f.includes('/video/upload') ? `https://${ _f }/video/upload/${ e }` : `https://${ _f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : _f;
        },
        _e = _f => {
            if (!_i.some(b => _f.includes(b)))
                return null;
            if (_f.includes(_g) && !_f.includes(`/${ _h }/`))
                return null;
            const f = _f.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        _f = 'media.gimkit.com',
        _g = 'res.cloudinary.com',
        _h = 'gimkit-production',
        _i = [
            _f,
            _g
        ];
}), a.register('Kc6XZ23', function(b, c) {
    _f(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), a.register('/2bBN24', function(b, c) {
    _f(b.exports, 'useMediaMatch', function() {
        return _e;
    });
    var d = a('LEQ5w');

    function _e(_f) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var g = (0, d.useMemo)(function() {
                return window.matchMedia(_f);
            }, [_f]),
            h = (0, d.useState)(function() {
                return g.matches;
            }),
            i = h[0],
            j = h[1];
        return (0, d.useEffect)(function() {
            j(g.matches);
            var k = function(l) {
                return j(l.matches);
            };
            return g.addEventListener ? (g.addEventListener('change', k), function() {
                return g.removeEventListener('change', k);
            }) : (g.addListener(k), function() {
                return g.removeListener(k);
            });
        }, [g]), i;
    }
}), a.register('ptkti24', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__exportStar || function(f, g) {
            for (var h in f)
                'default' === h || Object.prototype.hasOwnProperty.call(g, h) || d(g, f, h);
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), e(a('hDE9a25'), b.exports), e(a('rPed825'), b.exports), e(a('hpMH825'), b.exports);
}), a.register('hDE9a25', function(b, c) {
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useBreakpoints = b.exports.useBreakpoint = void 0;
    var d = a('hpMH825');
    b.exports.useBreakpoint = function(e) {
        return (0, d.useWindowSize)().width < e;
    }, b.exports.useBreakpoints = function(e) {
        var f = (0, d.useWindowSize)().width;
        return e.map(function(g) {
            return f < g;
        });
    };
}), a.register('hpMH825', function(b, c) {
    var d = b.exports && b.exports.__createBinding || (Object.create ? function(e, f, g, h) {
            void 0 === h && (h = g), Object.defineProperty(e, h, {
                enumerable: !0,
                get: function() {
                    return f[g];
                }
            });
        } : function(e, f, g, h) {
            void 0 === h && (h = g), e[h] = f[g];
        }),
        e = b.exports && b.exports.__setModuleDefault || (Object.create ? function(f, g) {
            Object.defineProperty(f, 'default', {
                enumerable: !0,
                value: g
            });
        } : function(f, g) {
            f.default = g;
        }),
        f = b.exports && b.exports.__importStar || function(g) {
            if (g && g.__esModule)
                return g;
            var h = {};
            if (null != g)
                for (var i in g)
                    'default' !== i && Object.prototype.hasOwnProperty.call(g, i) && d(h, g, i);
            return e(h, g), h;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useWindowSize = void 0;
    var g = f(a('LEQ5w'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    b.exports.useWindowSize = function() {
        var h = g.useState(_h()),
            i = h[0],
            j = h[1];
        return g.useLayoutEffect(function() {
            function k() {
                j(_h());
            }
            return window.addEventListener('resize', h),
                function() {
                    return window.removeEventListener('resize', h);
                };
        }, []), i;
    };
}), a.register('rPed825', function(b, c) {
    var d = b.exports && b.exports.__assign || function() {
            return d = Object.assign || function(e) {
                for (var f, g = 1, h = arguments.length; g < h; g++)
                    for (var i in f = arguments[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (e[i] = f[i]);
                return e;
            }, d.apply(this, arguments);
        },
        e = b.exports && b.exports.__createBinding || (Object.create ? function(f, g, h, i) {
            void 0 === i && (i = h), Object.defineProperty(f, i, {
                enumerable: !0,
                get: function() {
                    return g[h];
                }
            });
        } : function(f, g, h, i) {
            void 0 === i && (i = h), f[i] = g[h];
        }),
        f = b.exports && b.exports.__setModuleDefault || (Object.create ? function(g, h) {
            Object.defineProperty(g, 'default', {
                enumerable: !0,
                value: h
            });
        } : function(g, h) {
            g.default = h;
        }),
        g = b.exports && b.exports.__importStar || function(h) {
            if (h && h.__esModule)
                return h;
            var i = {};
            if (null != h)
                for (var j in h)
                    'default' !== j && Object.prototype.hasOwnProperty.call(h, j) && e(i, h, j);
            return f(i, h), i;
        };
    Object.defineProperty(b.exports, '__esModule', {
        value: !0
    }), b.exports.useComponentSize = void 0;
    var _h = g(a('LEQ5w'));
    b.exports.useComponentSize = function() {
        var i = _h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = _h.useRef(),
            m = _h.useCallback(function() {
                if (l.current) {
                    var n = l.current.offsetHeight,
                        o = l.current.offsetWidth;
                    n === j.height && o === j.width || k({
                        height: n,
                        width: o
                    });
                }
            }, [
                j.height,
                j.width
            ]);
        return _h.useLayoutEffect(function() {
            if (l && l.current) {
                var n = new ResizeObserver(m);
                return n.observe(l.current),
                    function() {
                        return n.disconnect();
                    };
            }
        }, [
            l,
            m
        ]), d({
            ref: l
        }, j);
    };
}), a.register('s+8hx17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), a.register('bdn4O17', function(b, c) {
    let d;
    var e;
    _i(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), a.register('PqMjn20', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        name: a('Mmd0d21').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), a.register('Mmd0d21', function(b, c) {
    _i(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), a.register('gCqar24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('skUox22'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var _i = e.forwardRef(h);
}), a.register('skUox22', function(b, c) {
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
                    d: 'M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z'
                }
            }]
        },
        name: 'usergroup-add',
        theme: 'outlined'
    };
}), a.register('+UyIc24', function(b, c) {
    _i(b.exports, 'default', function() {
        return _i;
    });
    var d = a('fbkyQ'),
        e = a('LEQ5w'),
        f = a('r3/DU21'),
        g = a('sLVIW'),
        h = function(_i, j) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, _i), {}, {
                ref: j,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var _i = e.forwardRef(h);
}), a.register('r3/DU21', function(b, c) {
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
                    d: 'M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z'
                }
            }]
        },
        name: 'logout',
        theme: 'outlined'
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
    _o(b.exports, 'default', function() {
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
}), a.register('RW2Mp', function(b, c) {
    _o(b.exports, 'default', function() {
        return _A;
    });
    var d = a('5jnR813'),
        e = a('8DsNq12'),
        f = a('Li49B9'),
        g = a('hc2IK9'),
        h = a('HgFD113'),
        i = a('a01Gf12'),
        j = a('i+h089'),
        k = a('kp44T9'),
        l = a('LEQ5w'),
        m = a('JrtKP'),
        n = function(_o) {
            (0, j.default)(b, _o);
            var p = (0, k.default)(b);

            function q(r) {
                var s;
                (0, h.default)(this, q), (s = p.call(this, r)).handleChange = function(t) {
                    var u = s.props,
                        v = u.disabled,
                        w = u.onChange;
                    v || ('checked' in s.props || s.setState({
                        checked: t.target.checked
                    }), w && w({
                        target: (0, g.default)((0, g.default)({}, s.props), {}, {
                            checked: t.target.checked
                        }),
                        stopPropagation: function() {
                            t.stopPropagation();
                        },
                        preventDefault: function() {
                            t.preventDefault();
                        },
                        nativeEvent: t.nativeEvent
                    }));
                }, s.saveInput = function(t) {
                    s.input = t;
                };
                var t = 'checked' in r ? r.checked : r.defaultChecked;
                return s.state = {
                    checked: t
                }, s;
            }
            return (0, i.default)(b, [{
                    key: 'focus',
                    value: function() {
                        this.input.focus();
                    }
                },
                {
                    key: 'blur',
                    value: function() {
                        this.input.blur();
                    }
                },
                {
                    key: 'render',
                    value: function() {
                        var q, r = this.props,
                            s = r.prefixCls,
                            t = r.className,
                            u = r.style,
                            v = r.name,
                            w = r.id,
                            x = r.type,
                            y = r.disabled,
                            z = r.readOnly,
                            _A = r.tabIndex,
                            B = r.onClick,
                            C = r.onFocus,
                            D = r.onBlur,
                            E = r.onKeyDown,
                            F = r.onKeyPress,
                            G = r.onKeyUp,
                            H = r.autoFocus,
                            I = r.value,
                            J = r.required,
                            K = (0, f.default)(r, [
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
                            ]),
                            L = Object.keys(K).reduce(function(M, N) {
                                return 'aria-' !== N.substr(0, 5) && 'data-' !== N.substr(0, 5) && 'role' !== N || (M[N] = K[N]), M;
                            }, {}),
                            M = this.state.checked,
                            N = _r(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return _r(l).createElement('span', {
                            className: N,
                            style: u
                        }, _r(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: _A,
                            className: ''.concat(s, '-input'),
                            checked: !!M,
                            onClick: B,
                            onFocus: C,
                            onBlur: D,
                            onKeyUp: G,
                            onKeyDown: E,
                            onKeyPress: F,
                            onChange: this.handleChange,
                            autoFocus: H,
                            ref: this.saveInput,
                            value: I
                        }, L)), _r(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(q, _r) {
                    return 'checked' in q ? (0, g.default)((0, g.default)({}, _r), {}, {
                        checked: q.checked
                    }) : null;
                }
            }]), b;
        }(l.Component);
    n.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function() {},
        onBlur: function() {},
        onChange: function() {},
        onKeyDown: function() {},
        onKeyPress: function() {},
        onKeyUp: function() {}
    };
    var o = n;
}), a.register('5jnR813', function(b, c) {
    function d() {
        return d = Object.assign || function(e) {
            for (var f = 1; f < arguments.length; f++) {
                var g = arguments[f];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (e[h] = g[h]);
            }
            return e;
        }, d.apply(this, arguments);
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('8DsNq12', function(b, c) {
    function _d(_e, f, g) {
        return f in _e ? Object.defineProperty(_e, f, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _e[f] = g, _e;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Li49B9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('QUESF9');

    function _e(_f, g) {
        if (null == _f)
            return {};
        var h, i, j = (0, d.default)(_f, g);
        if (Object.getOwnPropertySymbols) {
            var k = Object.getOwnPropertySymbols(_f);
            for (i = 0; i < k.length; i++)
                h = k[i], g.indexOf(h) >= 0 || Object.prototype.propertyIsEnumerable.call(_f, h) && (j[h] = _f[h]);
        }
        return j;
    }
}), a.register('QUESF9', function(b, c) {
    function d(e, f) {
        if (null == e)
            return {};
        var g, h, i = {},
            j = Object.keys(e);
        for (h = 0; h < j.length; h++)
            g = j[h], f.indexOf(g) >= 0 || (i[g] = e[g]);
        return i;
    }
    _f(b.exports, 'default', function() {
        return _c;
    });
}), a.register('hc2IK9', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var d = a('8DsNq12');

    function e(_f, g) {
        var h = Object.keys(_f);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(_f);
            g && (i = i.filter(function(j) {
                return Object.getOwnPropertyDescriptor(_f, j).enumerable;
            })), h.push.apply(h, i);
        }
        return h;
    }

    function _e(f) {
        for (var g = 1; g < arguments.length; g++) {
            var h = null != arguments[g] ? arguments[g] : {};
            g % 2 ? _e(Object(h), !0).forEach(function(i) {
                (0, d.default)(f, i, h[i]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : _e(Object(h)).forEach(function(i) {
                Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(h, i));
            });
        }
        return f;
    }
}), a.register('HgFD113', function(b, c) {
    function d(e, f) {
        if (!(e instanceof f))
            throw new TypeError('Cannot call a class as a function');
    }
    _e(b.exports, 'default', function() {
        return _d;
    });
}), a.register('a01Gf12', function(b, c) {
    function _d(_e, f) {
        for (var g = 0; g < f.length; g++) {
            var h = f[g];
            h.enumerable = h.enumerable || !1, h.configurable = !0, 'value' in h && (h.writable = !0), Object.defineProperty(_e, h.key, h);
        }
    }

    function d(e, f, g) {
        return f && _c(e.prototype, f), g && _c(e, g), e;
    }
    _f(b.exports, 'default', function() {
        return _d;
    });
}), a.register('i+h089', function(b, _c) {
    _f(b.exports, 'default', function() {
        return _e;
    });
    var _d = a('ALEzF15');

    function _e(_f, g) {
        if ('function' != typeof g && null !== g)
            throw new TypeError('Super expression must either be null or a function');
        _f.prototype = Object.create(g && g.prototype, {
            constructor: {
                value: _f,
                writable: !0,
                configurable: !0
            }
        }), g && (0, _d.default)(_f, g);
    }
}), a.register('ALEzF15', function(b, c) {
    function d(e, f) {
        return d = Object.setPrototypeOf || function(g, h) {
            return g.__proto__ = h, g;
        }, d(e, f);
    }
    _h(b.exports, 'default', function() {
        return _c;
    });
}), a.register('kp44T9', function(b, _c) {
    _h(b.exports, 'default', function() {
        return _g;
    });
    var d = a('28Pwf16'),
        e = a('sQfA/14'),
        f = a('rKHa09');

    function _g(_h) {
        var i = (0, e.default)();
        return function() {
            var j, k = (0, d.default)(_h);
            if (i) {
                var l = (0, d.default)(this).constructor;
                j = Reflect.construct(k, arguments, l);
            } else
                j = k.apply(this, arguments);
            return (0, f.default)(this, j);
        };
    }
}), a.register('28Pwf16', function(b, c) {
    function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(f) {
            return f.__proto__ || Object.getPrototypeOf(f);
        }, d(e);
    }
    _g(b.exports, 'default', function() {
        return _d;
    });
}), a.register('sQfA/14', function(b, c) {
    function _d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (_g) {
            return !1;
        }
    }
    _g(b.exports, 'default', function() {
        return _b;
    });
}), a.register('rKHa09', function(_b, c) {
    _g(_b.exports, 'default', function() {
        return _f;
    });
    var d = a('cW6NX14'),
        e = a('JgIFg');

    function _f(_g, h) {
        if (h && ('object' === _c(d)(h) || 'function' == typeof h))
            return h;
        if (void 0 !== h)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(_g);
    }
}), a.register('cW6NX14', function(b, _c) {
    function d(e) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (b.exports = d = function(f) {
            return typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0) : (b.exports = d = function(f) {
            return f && 'function' == typeof Symbol && f.constructor === Symbol && f !== Symbol.prototype ? 'symbol' : typeof f;
        }, b.exports.default = b.exports, b.exports.__esModule = !0), d(e);
    }
    b.exports = a, b.exports.default = b.exports, b.exports.__esModule = !0;
}), a.register('JgIFg', function(b, c) {
    function d(e) {
        if (void 0 === e)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
    }
    _j(b.exports, 'default', function() {
        return _c;
    });
}), a.register('Rtfgy20', function(b, _c) {
    _j(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return _e;
    });
    var d = a('THxMC');
    const _e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), a.register('BXKZi0', function(b, c) {
    _j(b.exports, 'default', function() {
        return _g;
    });
    var d = a('LEQ5w'),
        e = a('+UcJ7'),
        f = a('dR/Gi');
    var _g = (_j, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = _j && 'current' in _j ? _j.current : _j;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = _j && 'current' in _j ? _j.current : _j;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [_j]), (0, e.default)(_j, _j => {
            const j = _j.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), a.register('+UcJ7', function(b, c) {
    _j(b.exports, 'default', function() {
        return _j;
    });
    var d = a('iIbRn'),
        e = a('dR/Gi'),
        f = a('20TiJ'),
        g = a('18t62');
    let h;
    const i = () => h || (h = function() {
        const _j = new Map(),
            k = new(0, d.default)((0, g.default)((k, a) => {
                var l;
                if (1 === k.length)
                    null === (l = _j.get(k[0].target)) || void 0 === l || l(k[0], a);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = _j.get(k[m].target)) || void 0 === n || n(k[m], a);
                    }
            }));
        return {
            observer: k,
            subscribe(l, m) {
                k.observe(l), _j.set(l, m);
            },
            unsubscribe(l) {
                k.unobserve(l), _j.delete(l);
            }
        };
    }());
    var _j = function(k, l) {
        const m = i(),
            n = (0, f.default)(l);
        return (0, e.default)(() => {
            let o = !1;
            const p = k && 'current' in k ? k.current : k;
            if (p)
                return m.subscribe(p, (k, m) => {
                    o || n.current(k, m);
                }), () => {
                    o = !0, m.unsubscribe(p);
                };
        }, [
            k,
            m,
            n
        ]), m.observer;
    };
}), a.register('dR/Gi', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = _b(a('LEQ5w'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), a.register('20TiJ', function(_b, c) {
    _e(_b.exports, 'default', function() {
        return _e;
    });
    var d = a('LEQ5w');
    var _e = _e => {
        const f = d.useRef(_e);
        return d.useEffect(() => {
            f.current = _e;
        }), f;
    };
}), a.register('18t62', function(b, c) {
    _e(b.exports, 'default', function() {
        return _d;
    });
    var _d = function(_e) {
        var f = [],
            g = null,
            h = function() {
                for (var i = arguments.length, j = new Array(i), k = 0; k < i; k++)
                    j[k] = arguments[k];
                f = j, g || (g = requestAnimationFrame(function() {
                    g = null, _e.apply(void 0, f);
                }));
            };
        return h.cancel = function() {
            g && (cancelAnimationFrame(g), g = null);
        }, h;
    };
}), a.register('0qmC91', function(b, c) {
    _f(b.exports, 'default', function() {
        return _k;
    });
    var d = a('LEQ5w'),
        e = function(_f, g) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(h, i) {
                h.__proto__ = i;
            } || function(h, i) {
                for (var j in i)
                    i.hasOwnProperty(j) && (h[j] = i[j]);
            }, e(_f, g);
        };
    var f = function() {
        return f = Object.assign || function(g) {
            for (var h, i = 1, j = arguments.length; i < j; i++)
                for (var k in h = arguments[i])
                    Object.prototype.hasOwnProperty.call(h, k) && (g[k] = h[k]);
            return g;
        }, f.apply(this, arguments);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(k) {
        return 'number' == typeof k ? {
            unit: h,
            value: 100 * k
        } : 'string' == typeof k ? k.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(k)
        } : k.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(k)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var j = function(k) {
            function l(m) {
                var n = k.call(this, m) || this;
                return n.lastScrollTop = 0, n.actionTriggered = !1, n.startY = 0, n.currentY = 0, n.dragging = !1, n.maxPullDownDistance = 0, n.getScrollableTarget = function() {
                    return n.props.scrollableTarget instanceof HTMLElement ? n.props.scrollableTarget : 'string' == typeof n.props.scrollableTarget ? document.getElementById(n.props.scrollableTarget) : (null === n.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, n.onStart = function(o) {
                    n.lastScrollTop || (n.dragging = !0, o instanceof MouseEvent ? n.startY = o.pageY : o instanceof TouchEvent && (n.startY = o.touches[0].pageY), n.currentY = n.startY, n._infScroll && (n._infScroll.style.willChange = 'transform', n._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, n.onMove = function(o) {
                    n.dragging && (o instanceof MouseEvent ? n.currentY = o.pageY : o instanceof TouchEvent && (n.currentY = o.touches[0].pageY), n.currentY < n.startY || (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) && n.setState({
                        pullToRefreshThresholdBreached: !0
                    }), n.currentY - n.startY > 1.5 * n.maxPullDownDistance || n._infScroll && (n._infScroll.style.overflow = 'visible', n._infScroll.style.transform = 'translate3d(0px, ' + (n.currentY - n.startY) + 'px, 0px)')));
                }, n.onEnd = function() {
                    n.startY = 0, n.currentY = 0, n.dragging = !1, n.state.pullToRefreshThresholdBreached && (n.props.refreshFunction && n.props.refreshFunction(), n.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        n._infScroll && (n._infScroll.style.overflow = 'auto', n._infScroll.style.transform = 'none', n._infScroll.style.willChange = 'none');
                    });
                }, n.onScrollListener = function(o) {
                    'function' == typeof n.props.onScroll && setTimeout(function() {
                        return n.props.onScroll && n.props.onScroll(o);
                    }, 0);
                    var p = n.props.height || n._scrollableNode ? o.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    n.actionTriggered || ((n.props.inverse ? n.isElementAtTop(p, n.props.scrollThreshold) : n.isElementAtBottom(p, n.props.scrollThreshold)) && n.props.hasMore && (n.actionTriggered = !0, n.setState({
                        showLoader: !0
                    }), n.props.next && n.props.next()), n.lastScrollTop = p.scrollTop);
                }, n.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, n.throttledOnScrollListener = function(o, p, q, r) {
                    var s, t = !1,
                        u = 0;

                    function v() {
                        s && clearTimeout(s);
                    }

                    function v() {
                        var w = this,
                            x = Date.now() - u,
                            y = arguments;

                        function z() {
                            u = Date.now(), q.apply(w, y);
                        }

                        function z() {
                            s = void 0;
                        }
                        t || (r && !s && d(), f(), void 0 === r && x > o ? d() : !0 !== p && (s = setTimeout(r ? j : d, void 0 === r ? o - x : o)));
                    }
                    return 'boolean' != typeof p && (r = q, q = p, p = void 0), g.cancel = function() {
                        f(), t = !0;
                    }, g;
                }(150, n.onScrollListener).bind(n), n.onStart = n.onStart.bind(n), n.onMove = n.onMove.bind(n), n.onEnd = n.onEnd.bind(n), n;
            }
            return function(l, m) {
                function n() {
                    this.constructor = l;
                }
                e(l, m), l.prototype = null === m ? Object.create(m) : (a.prototype = m.prototype, new a());
            }(a, k), a.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, a.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, a.prototype.UNSAFE_componentWillReceiveProps = function(l) {
                this.props.dataLength !== l.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, a.prototype.isElementAtTop = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = d(m);
                return o.unit === g ? l.scrollTop <= o.value + n - l.scrollHeight + 1 || 0 === l.scrollTop : l.scrollTop <= o.value / 100 + n - l.scrollHeight + 1 || 0 === l.scrollTop;
            }, a.prototype.isElementAtBottom = function(l, m) {
                void 0 === m && (m = 0.8);
                var n = l === document.body || l === document.documentElement ? window.screen.availHeight : l.clientHeight,
                    o = d(m);
                return o.unit === g ? l.scrollTop + n >= l.scrollHeight - o.value : l.scrollTop + n >= o.value / 100 * l.scrollHeight;
            }, a.prototype.render = function() {
                var l = this,
                    m = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    n = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    o = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return _p(d).createElement('div', {
                    style: o,
                    className: 'infinite-scroll-component__outerdiv'
                }, _p(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(_p) {
                        return l._infScroll = _p;
                    },
                    style: m
                }, this.props.pullDownToRefresh && _p(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(_p) {
                        return l._pullDown = _p;
                    }
                }, _b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !n && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, a;
        }(d.Component),
        _k = j;
}), a.register('jzxyj10', function(_b, c) {
    _b(_b.exports, 'NavigateTo', function() {
        return _e;
    });
    var d = a('oBJ9G');
    const _e = _b => {
        d.history.push(_b);
    };
}), a.register('9R7cy', function(b, c) {
    _b(b.exports, 'default', function() {
        return _e;
    });
    var d = a('0hzx+');
    a('LEQ5w');
    var _e = _b => (0, d.jsx)('i', {
        className: `${ _b.name }${ _b.className ? ` ${ _b.className }` : '' }`,
        style: _b.style
    });
}), a.register('7B+hJ16', function(_b, c) {
    Object.defineProperty(_b.exports, '__esModule', {
        value: !0
    }), _b.exports.lazyWithPreload = void 0;
    var d = a('LEQ5w');

    function e(f) {
        var g, h, i = (0, d.lazy)(f),
            j = (0, d.forwardRef)(function(k, l) {
                var m = (0, d.useRef)(null != g ? g : i);
                return (0, d.createElement)(m.current, Object.assign(l ? {
                    ref: l
                } : {}, k));
            });
        return j.preload = function() {
            return h || (h = f().then(function(k) {
                return g = k.default;
            })), h;
        }, j;
    }
    _b.exports.lazyWithPreload = o, _b.exports.default = o;
}), a.register('ibLRf19', function(b, c) {
    e(b.exports, 'default', function() {
        return _d;
    });
    var _d = {
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