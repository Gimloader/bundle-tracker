function a(a, b, c, B) {
    Object.defineProperty(a, b, {
        get: c,
        set: B,
        enumerable: !0,
        configurable: !0
    });
}

function b(a) {
    return a && a.__esModule ? a.default : a;
}
var c = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
c.register('ndLzW', function(b, B) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), a(b.exports, 'default', function() {
        return q;
    });
    var e = c('8kSQZ'),
        f = c('uPP4W'),
        g = c('NS10B'),
        h = c('RrDRa'),
        i = c('h99Nu'),
        j = c('WCMsb'),
        k = c('cPPSp'),
        l = c('PjB0f'),
        m = c('Is2Mj'),
        n = c('kMQjd3'),
        o = c('1//3g');
    let p;
    var q = () => (f.useEffect(() => {
        const r = (0, l.getUrlVariable)('tab');
        r && r === m.default.billing && (h.default.navigation.currentTab = m.default.billing);
    }, []), (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(g.default.Provider, {
                value: h.default,
                children: (0, e.jsxs)(n.default, {
                    className: 'flex-column',
                    children: [
                        (0, e.jsx)(o.default, {}),
                        (0, e.jsxs)(r, {
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
    const r = i.default.div.attrs({
        className: 'flex'
    })(p || (p = (a => a)`
  flex: 1;
  overflow: hidden;
`));
}), c.register('WCMsb', function(b, B) {
    a(b.exports, 'default', function() {
        return x;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('Vlfxs'),
        i = c('NS10B'),
        j = c('Is2Mj'),
        k = c('PjB0f'),
        l = c('HKcK8'),
        m = c('2Hg8W4'),
        n = c('b+LEP25'),
        o = c('K8wbk'),
        p = c('iYEuk12'),
        q = c('q721a'),
        r = c('gSUVO'),
        s = c('C891a'),
        t = c('U31rS3');
    let u, v, w = a => a;
    var x = (0, h.observer)(() => {
        const {
            navigation: y
        } = e.useContext(i.default), z = z => y.currentTab === z, A = z => y.currentTab = z, B = !(0, k.isStudent)();
        return (0, d.jsxs)(y, {
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
                (0, k.isStudent)() ? null : (0, d.jsxs)(z, {
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
    const y = f.default.div.attrs({
            className: 'scroll-y'
        })(u || (u = w`
  height: 100%;
  width: 320px;
  border-right: 1px solid ${ 0 };
`), g.default.BorderGray),
        z = f.default.div(v || (v = w`
  padding: 20px 15px;
  background: rgba(0, 0, 0, 0.07);
  font-size: 12px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 22px;
  width: 84%;
`));
}), c.register('2Hg8W4', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Yt9re4'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'PlayCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Yt9re4', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('b+LEP25', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('Kl7ed13'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'QuestionCircleOutlined';
    var i = e.forwardRef(h);
}), c.register('Kl7ed13', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('K8wbk', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('9dTzb'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UserOutlined';
    var i = e.forwardRef(h);
}), c.register('9dTzb', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('iYEuk12', function(b, u) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ'),
        e = c('KzqIz');
    c('uPP4W');
    var f = a => a.external || !a.to ? (0, d.jsx)('a', {
        href: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        onKeyPress: b => {
            a.onClick && 'Enter' === b.key && (b.preventDefault(), a.onClick());
        },
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    }) : (0, d.jsx)(e.Link, {
        to: a.to,
        tabIndex: Number(a.tabIndex || '0'),
        onClick: a.onClick,
        className: a.className,
        target: a.target,
        style: a.style,
        children: a.children
    });
}), c.register('U31rS3', function(b, u) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('lmfrI'),
        h = c('gSUVO');
    let i, j, k, l = a => a;
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
`), h.Fonts.SFPro, 14, a => a.selected && !a.blockBackground ? '#E5F7FE' : g.default.White, a => a.selected ? m : 'rgba(0,0,0,.65)', a => a.selected && !a.blockStripe && 'border-right: 3px solid ' + m + ';', m),
        o = f.default.div.attrs({
            className: 'flex vc maxWidth'
        })(j || (j = l``)),
        p = f.default.div(k || (k = l``));
    class q extends e.Component {
        render() {
            const {
                title: r,
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
                                children: r
                            }),
                            this.props.customRightComponent ? this.props.customRightComponent : null
                        ]
                    })
                ]
            });
        }
    }
    var r = s;
}), c.register('cPPSp', function(b, t) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('EPN7x'),
        h = c('gSUVO'),
        i = c('lmfrI'),
        j = c('Vlfxs'),
        k = c('NS10B'),
        l = c('Is2Mj'),
        m = c('bwKYG'),
        n = c('6VWVh'),
        o = c('XEed7'),
        p = c('C891a');
    let q;
    var r = (0, j.observer)(() => {
        const {
            navigation: s
        } = e.useContext(k.default);
        return (0, d.jsxs)(s, {
            children: [
                (0, d.jsx)(p.default, {}),
                (() => {
                    const {
                        currentTab: t
                    } = u;
                    return t === l.default.accountInformation ? (0, d.jsx)(g.default, {}) : t === l.default.gameSettings ? (0, d.jsx)(m.default, {}) : t === l.default.billing ? (0, d.jsx)(n.default, {}) : t === l.default.support ? (0, d.jsx)(o.default, {}) : null;
                })()
            ]
        });
    });
    const s = f.default.div.attrs({
        className: 'scroll'
    })(q || (q = (a => a)`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  font-family: ${ 0 };
  color: ${ 0 };
`), h.Fonts.SFPro, i.default.Black);
}), c.register('EPN7x', function(b, t) {
    a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('f9f+a'),
        h = c('HQsyw'),
        i = c('lmfrI'),
        j = c('REfzd'),
        k = c('XjjVZ'),
        l = c('ofYOa'),
        m = c('PjB0f');
    let n;
    const o = a => (0, d.jsx)(g.default, {
        style: {
            fontFamily: f.Fonts.SFPro,
            color: i.default.Black,
            marginBottom: 20
        },
        ...a
    });
    var p = () => (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(d.Fragment, {
                children: [
                    (0, d.jsx)(q, {
                        children: '\uD83D\uDC4B Name'
                    }),
                    (0, d.jsx)(o, {
                        children: (0, d.jsx)(h.default, {})
                    }),
                    (0, d.jsx)(q, {
                        children: '\uD83D\uDD11 Authentication'
                    }),
                    (0, d.jsx)(o, {
                        children: (0, d.jsx)(j.default, {})
                    }),
                    !(0, m.isStudent)() && (0, d.jsxs)(d.Fragment, {
                        children: [
                            (0, d.jsx)(q, {
                                children: '\uD83C\uDFEB School'
                            }),
                            (0, d.jsx)(o, {
                                children: (0, d.jsx)(l.default, {})
                            })
                        ]
                    })
                ]
            }),
            (0, d.jsx)(q, {
                children: (0, m.isStudent)() ? '\u2328️ Manage' : '\uD83D\uDD12 Account'
            }),
            (0, d.jsx)(o, {
                children: (0, d.jsx)(k.default, {})
            })
        ]
    });
    const q = e.default.div(n || (n = (a => a)`
  font-size: 30px;
  font-weight: ${ 0 };
  margin-bottom: 5px;
`), f.FontWeights.UltraBold);
}), c.register('HQsyw', function(b, t) {
    a(b.exports, 'Description', function() {
        return r;
    }), a(b.exports, 'default', function() {
        return p;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('gSUVO'),
        h = c('c6x8w'),
        i = c('bNL33'),
        j = c('MHioT3'),
        k = c('eMhMk1'),
        l = c('PjB0f');
    let m, n, o = a => a;
    var p = () => {
        const [q, r] = e.useState((0, l.getUser)().firstName), [s, t] = e.useState((0, l.getUser)().lastName), u = (0, l.isStudent)() && (0, l.getUser)().lastName.length < 2 ? 'Last Initial' : 'Last Name', v = (0, l.isStudent)() && (0, l.getUser)().lastName.length < 2 ? 1 : k.MAX_LENGTH_LAST_NAME;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsxs)(q, {
                    children: [
                        (0, d.jsx)(r, {
                            children: 'First Name'
                        }),
                        (0, d.jsx)(h.default, {
                            onBlur: () => {
                                q && (0, i.default)({
                                    changes: [{
                                        key: j.informationTypes.firstName,
                                        value: q
                                    }]
                                });
                            },
                            onChange: q => r(q.target.value),
                            value: q,
                            maxLength: k.MAX_LENGTH_FIRST_NAME
                        })
                    ]
                }),
                (0, d.jsxs)(q, {
                    children: [
                        (0, d.jsx)(r, {
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
                            onChange: q => t(q.target.value),
                            value: s,
                            maxLength: v
                        })
                    ]
                })
            ]
        });
    };
    const q = f.default.div(m || (m = o`
  margin-bottom: 8px;
`)),
        r = f.default.div(n || (n = o`
  font-weight: ${ 0 };
  font-size: 18px;
`), g.FontWeights.Bold);
}), c.register('bNL33', function(b, w) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('I9mdQ');
    var f = a => {
        (0, d.request)({
            url: '/api/users/update-information',
            method: 'post',
            data: {
                changes: a.changes
            },
            success: b => {
                a.onSuccess && a.onSuccess(b), (0, e.default)({});
            },
            error: b => {
                a.onError && a.onError(b);
            }
        });
    };
}), c.register('MHioT3', function(b, w) {
    a(b.exports, 'informationTypes', function() {
        return f;
    }), a(b.exports, 'default', function() {
        return y;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    const f = {
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
        } = w;
    class x {
        constructor() {
            this.userExists = h, this.email = i, this.accountType = j, this.googleToken = k, this.firstName = l, this.lastName = m, this.password = n, this.schoolId = o, this.districtId = p, this.country = q, this.areaOfExpertise = r, this.gradeLevel = s, this.organization = t, this.acceptsLatestPolicies = u, this.authenticated = v, this.informationNeeded = e.observable.array([f.email]), this.reset = () => {
                Object.keys(w).forEach(a => this[a] = w[a]), this.informationNeeded.replace([f.email]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], x.prototype, 'userExists', void 0), (0, d.__decorate)([e.observable], x.prototype, 'email', void 0), (0, d.__decorate)([e.observable], x.prototype, 'accountType', void 0), (0, d.__decorate)([e.observable], x.prototype, 'googleToken', void 0), (0, d.__decorate)([e.observable], x.prototype, 'firstName', void 0), (0, d.__decorate)([e.observable], x.prototype, 'lastName', void 0), (0, d.__decorate)([e.observable], x.prototype, 'password', void 0), (0, d.__decorate)([e.observable], x.prototype, 'schoolId', void 0), (0, d.__decorate)([e.observable], x.prototype, 'districtId', void 0), (0, d.__decorate)([e.observable], x.prototype, 'country', void 0), (0, d.__decorate)([e.observable], x.prototype, 'areaOfExpertise', void 0), (0, d.__decorate)([e.observable], x.prototype, 'gradeLevel', void 0), (0, d.__decorate)([e.observable], x.prototype, 'organization', void 0), (0, d.__decorate)([e.observable], x.prototype, 'acceptsLatestPolicies', void 0), (0, d.__decorate)([e.observable], x.prototype, 'authenticated', void 0), (0, d.__decorate)([e.observable], x.prototype, 'informationNeeded', void 0), (0, d.__decorate)([e.action], x.prototype, 'reset', void 0);
    var y = z;
}), c.register('eMhMk1', function(b, w) {
    a(b.exports, 'MAX_LENGTH_FIRST_NAME', function() {
        return o;
    }), a(b.exports, 'MAX_LENGTH_LAST_NAME', function() {
        return p;
    }), a(b.exports, 'Title', function() {
        return q;
    }), a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('/rcVD4'),
        g = c('gSUVO'),
        h = c('lmfrI'),
        i = c('ExtIT'),
        j = c('c6x8w'),
        k = c('+qN5a2'),
        l = c('MHioT3'),
        m = c('PawcO1'),
        n = c('KBr/41');
    const o = 20,
        p = 25,
        q = a => (0, d.jsx)('div', {
            style: {
                fontFamily: g.Fonts.SFPro,
                fontWeight: g.FontWeights.Bold,
                color: h.default.Black,
                fontSize: 18
            },
            children: a.children
        }),
        r = {
            width: '100%',
            display: 'flex',
            marginTop: 0,
            minHeight: 0
        };
    var s = () => {
        const {
            login: t
        } = e.useContext(f.default), [u, v] = e.useState(t.firstName), [w, x] = e.useState(t.lastName), [y, z] = e.useState(t.password), A = () => {
            let B = !0;
            return t.informationNeeded.includes(l.informationTypes.firstName) && (u || (B = !1)), t.informationNeeded.includes(l.informationTypes.lastName) && (w || (B = !1)), t.informationNeeded.includes(l.informationTypes.accountPassword) && (!y || y.length < 6) && (B = !1), B;
        }, B = () => {
            A() && (u && (t.firstName = u), w && (t.lastName = w), y && (t.password = y), t.informationNeeded.replace(t.informationNeeded.filter(t => t !== l.informationTypes.firstName && t !== l.informationTypes.lastName && t !== l.informationTypes.accountPassword)));
        }, C = t.accountType === n.default.student;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(q, {
                    children: 'First Name'
                }),
                (0, d.jsx)(j.default, {
                    maxLength: o,
                    style: r,
                    size: 'large',
                    placeholder: 'First Name here...',
                    onChange: t => v(t.target.value),
                    onPressEnter: B,
                    autoFocus: !0
                }),
                (0, d.jsx)('div', {
                    style: {
                        height: 10
                    }
                }),
                (0, d.jsxs)(q, {
                    children: [
                        'Last ',
                        C ? 'Initial' : 'Name'
                    ]
                }),
                (0, d.jsx)(j.default, {
                    maxLength: C ? 1 : p,
                    style: r,
                    size: 'large',
                    placeholder: `Last ${ C ? 'Initial' : 'Name' } here...`,
                    onChange: t => x(t.target.value),
                    onPressEnter: B
                }),
                t.informationNeeded.includes(l.informationTypes.accountPassword) && (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)(i.default, {}),
                        (0, d.jsx)(q, {
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
                            onChange: t => z(t.target.value),
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
}), c.register('/rcVD4', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('J7Y504');
    var f = d.createContext(e.default);
}), c.register('J7Y504', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('MHioT3'),
        e = c('Ek+Wy4');
    var f = {
        login: new(0, d.default)(),
        navigation: new(0, e.default)()
    };
}), c.register('Ek+Wy4', function(b, d) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('6gioo'),
        e = c('UnUp5');
    const f = {
            currentStage: c('bDt8q4').default.email,
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
        } = q;
    class r {
        constructor() {
            this.currentStage = g, this.emailSignInBlocked = h, this.creatingAccount = i, this.loggingIn = j, this.updatingAccountInformation = k, this.loginError = l, this.redirectUri = m, this.classJoiningId = n, this.classJoiningName = o, this.classJoiningTeacherName = p, this.reset = () => {
                Object.keys(q).forEach(a => this[a] = q[a]);
            }, (0, e.makeObservable)(this);
        }
    }
    (0, d.__decorate)([e.observable], r.prototype, 'currentStage', void 0), (0, d.__decorate)([e.observable], r.prototype, 'emailSignInBlocked', void 0), (0, d.__decorate)([e.observable], r.prototype, 'creatingAccount', void 0), (0, d.__decorate)([e.observable], r.prototype, 'loggingIn', void 0), (0, d.__decorate)([e.observable], r.prototype, 'updatingAccountInformation', void 0), (0, d.__decorate)([e.observable], r.prototype, 'loginError', void 0), (0, d.__decorate)([e.observable], r.prototype, 'redirectUri', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningId', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningName', void 0), (0, d.__decorate)([e.observable], r.prototype, 'classJoiningTeacherName', void 0), (0, d.__decorate)([e.action], r.prototype, 'reset', void 0);
    var s = t;
}), c.register('bDt8q4', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).email = 'email', e.password = 'password', e.accountType = 'accountType', e.studentSpecificInfo = 'studentSpecificInfo', e.nameAndPassword = 'nameAndPassword', e.school = 'school', e.educatorSpecificInfo = 'educatorSpecificInfo', e.nonSchoolSpecificInfo = 'nonSchoolSpecificInfo', e.acceptPolicies = 'acceptPolicies', e.verifyClass = 'verifyClass';
    var f = g;
}), c.register('+qN5a2', function(b, d) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('Vlfxs'),
        f = c('IsmrL');
    var g = (0, e.observer)(a => (0, d.jsx)(f.default, {
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
}), c.register('PawcO1', function(b, d) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('vKGUd1');
    var f = a => (0, d.jsxs)('div', {
        style: {
            justifyContent: 'space-between'
        },
        className: 'flex maxWidth',
        children: [
            (0, d.jsx)('div', {}),
            (0, d.jsx)(e.default, {
                link: a.link
            })
        ]
    });
}), c.register('vKGUd1', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('nx8MB1'),
        f = c('IsmrL'),
        g = c('YfLmS');
    var h = a => (0, d.jsx)(g.default, {
        title: 'Learn more on why we collect this data',
        children: (0, d.jsx)(f.default, {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            },
            shape: 'circle',
            icon: (0, d.jsx)(e.default, {}),
            href: a.link || '',
            target: '_blank'
        })
    });
}), c.register('nx8MB1', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('84zdK1'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LockOutlined';
    var i = e.forwardRef(h);
}), c.register('84zdK1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('KBr/41', function(b, c) {
    let d;
    var e;
    a(b.exports, 'default', function() {
        return f;
    }), (e = d || (d = {})).educator = 'educator', e.student = 'student', e.guardian = 'guardian', e.nonSchool = 'nonSchool';
    var f = g;
}), c.register('REfzd', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('c6x8w'),
        g = c('cR5QE'),
        h = c('HQsyw'),
        i = c('y7zuv'),
        j = c('MxXR+'),
        k = c('PjB0f'),
        l = c('iYEuk12');
    var m = () => {
        const [n, o] = e.useState((0, k.getUser)().email), [p, q] = e.useState(!1), [r, s] = e.useState(!1), t = () => q(!p), u = (0, k.getUser)().passwordless;
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(h.Description, {
                    children: 'Email'
                }),
                (0, d.jsx)(f.default, {
                    readOnly: !0,
                    value: n,
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
                    onEmailChange: n => {
                        g.default.success({
                            title: 'Email changed!',
                            content: `Email changed to "${ n }"`
                        }), o(n), q(!1);
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
}), c.register('y7zuv', function(b, t) {
    a(b.exports, 'default', function() {
        return q;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('c6x8w'),
        h = c('cR5QE'),
        i = c('gSUVO'),
        j = c('6jNxr'),
        k = c('lmfrI'),
        l = c('nHGjF'),
        m = c('PjB0f'),
        n = c('I9mdQ');
    let o;
    var p;
    (p = o || (o = {})).newEmail = 'newEmail', p.code = 'code';
    var q = a => {
        const [r, s] = e.useState(o.newEmail), [t, u] = e.useState(''), [v, w] = e.useState(!1), [x, y] = e.useState(!1), [z, A] = e.useState(''), [B, C] = e.useState(''), [D, E] = e.useState(null), F = a => u(a.target.value.toLowerCase()), G = t && (0, j.validateEmail)(t) && t !== (0, m.getUser)().email, H = () => {
            G && (w(!0), (0, m.request)({
                url: '/api/users/register/email-info',
                method: 'post',
                data: {
                    email: t
                },
                success: a => {
                    a.accountExists ? (E(`Account already exists with email "${ t }"`), w(!1)) : (0, m.request)({
                        url: '/api/users/requestEmailChange',
                        method: 'post',
                        data: {
                            emailToChangeTo: t
                        },
                        success: a => {
                            A(a.encryptedToken), s(o.code);
                        },
                        error: a => E(a),
                        both: () => w(!1)
                    });
                },
                error: () => w(!1)
            }));
        }, I = a => C(a.target.value), J = !!B, K = () => {
            J && (y(!0), (0, m.request)({
                url: '/api/users/changeEmail',
                method: 'post',
                data: {
                    changeToken: z,
                    encryptCode: B
                },
                success: () => {
                    (0, n.default)({
                        onSuccess: () => a.onEmailChange(t)
                    });
                },
                error: a => E(a),
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
            onCancel: a.close,
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
}), c.register('nHGjF', function(b, q) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('bPH7V');
    var f = a => a.error ? (0, d.jsx)(e.default, {
        message: 'Error',
        style: a.style,
        type: 'error',
        description: a.error && a.error.message && a.error.message.text ? a.error.message.text : 'string' == typeof a.error ? a.error : 'Unknown Error. Please try again.',
        showIcon: !0
    }) : null;
}), c.register('XjjVZ', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('pvZv3'),
        f = c('gSUVO'),
        g = c('5qDBV'),
        h = c('ExtIT'),
        i = c('cR5QE'),
        j = c('PjB0f'),
        k = c('iYEuk12'),
        l = c('q721a');
    var m = () => {
        const n = n => {
                (0, j.request)({
                    url: '/api/user/reset-account-type',
                    success: () => {
                        (0, j.request)({
                            url: '/logout',
                            both: () => {
                                i.default.success({
                                    title: 'One more thing!',
                                    content: `When you log back in, choose "${ n }" as your role.`,
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
                            children: p.map(n => (0, d.jsxs)('div', {
                                children: [
                                    (0, d.jsxs)('b', {
                                        children: [
                                            n[0],
                                            ':'
                                        ]
                                    }),
                                    ' ',
                                    n[1]
                                ]
                            }, n[0]))
                        }),
                        (0, d.jsx)('div', {
                            children: (0, d.jsxs)(k.default, {
                                onClick: () => {
                                    (0, j.isStudent)() ? i.default.confirm({
                                        title: 'Are you sure you want to switch to an educator account?',
                                        content: 'Doing so will remove you from all your current classes.',
                                        okText: 'Yes',
                                        onOk: () => n('Educator')
                                    }): i.default.confirm({
                                        title: 'Are you sure you want to switch to a student account?',
                                        content: 'Many educator features are not available with student accounts.',
                                        okText: 'Yes',
                                        onOk: () => n('Student')
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
                                        success: n => {
                                            i.default.info({
                                                title: 'Information',
                                                content: (0, d.jsx)('div', {
                                                    children: Object.keys(n).map(o => (0, d.jsxs)('div', {
                                                        children: [
                                                            (0, d.jsx)('span', {
                                                                style: {
                                                                    fontWeight: f.FontWeights.Bold
                                                                },
                                                                children: o
                                                            }),
                                                            ':',
                                                            ' ',
                                                            n[o],
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
}), c.register('5qDBV', function(b, q) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = c('0HASa').default;
}), c.register('0HASa', function(q, r) {
    a(q.exports, 'default', function() {
        return u;
    });
    var d = c('sbeTE'),
        e = c('VAIs1'),
        f = c('UbR+H'),
        g = c('uPP4W'),
        h = c('8N2Yw'),
        i = c('xORK+'),
        j = c('qEw51'),
        k = c('XiKtc'),
        l = c('Cpebg'),
        m = c('kLJIY'),
        n = c('ysccP'),
        o = c('26hV8');
    const p = g.forwardRef((a, c) => {
        const {
            getPrefixCls: q,
            direction: r
        } = g.useContext(j.ConfigContext), s = g.useContext(m.default), {
            prefixCls: t,
            className: u,
            rootClassName: v,
            bordered: w = !0,
            ghost: x,
            size: y,
            expandIconPosition: z = 'start'
        } = A, B = y || s || 'middle', C = q('collapse', t), D = q(), [E, F] = (0, o.default)(C), G = g.useMemo(() => 'left' === z ? 'start' : 'right' === z ? 'end' : z, [z]), H = b(e)(`${ C }-icon-position-${ G }`, {
            [`${ C }-borderless`]: !w,
            [`${ C }-rtl`]: 'rtl' === r,
            [`${ C }-ghost`]: !!x,
            [`${ C }-${ B }`]: 'middle' !== B
        }, u, v, F), I = Object.assign(Object.assign({}, (0, k.default)(D)), {
            motionAppear: !1,
            leavedClassName: `${ C }-content-hidden`
        });
        return E(g.createElement(f.default, Object.assign({
            ref: c,
            openMotion: I
        }, (0, i.default)(A, ['rootClassName']), {
            expandIcon: function() {
                let J = v.length > 0 && void 0 !== v[0] ? v[0] : {};
                const {
                    expandIcon: K
                } = L, M = K ? K(J) : g.createElement(d.default, {
                    rotate: J.isActive ? 90 : void 0
                });
                return (0, l.cloneElement)(M, () => ({
                    className: b(e)(M.props.className, `${ C }-arrow`)
                }));
            },
            prefixCls: C,
            className: H
        }), (() => {
            const {
                children: J
            } = K;
            return (0, h.default)(J).map((K, J) => {
                var L;
                if (null === (L = K.props) || void 0 === L ? void 0 : L.disabled) {
                    const M = K.key || String(J),
                        {
                            disabled: N,
                            collapsible: O
                        } = K.props,
                        P = Object.assign(Object.assign({}, (0, i.default)(K.props, ['disabled'])), {
                            key: M,
                            collapsible: null != O ? O : N ? 'disabled' : void 0
                        });
                    return (0, l.cloneElement)(K, P);
                }
                return K;
            });
        })()));
    });
    var q = Object.assign(p, {
        Panel: n.default
    });
}), c.register('UbR+H', function(b, n) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('PkJIv'),
        e = d.default;
    d.default.Panel;
}), c.register('PkJIv', function(n, o) {
    a(n.exports, 'default', function() {
        return s;
    });
    var d = c('bOoWo'),
        e = c('WtrvT'),
        f = c('iwiaz'),
        g = c('VAIs1'),
        h = c('8N2Yw'),
        i = c('xgR9K'),
        j = c('uPP4W'),
        k = c('cY6EP');

    function l(a) {
        var m = n;
        if (!Array.isArray(m)) {
            var o = (0, f.default)(m);
            m = 'number' === o || 'string' === o ? [m] : [];
        }
        return m.map(function(n) {
            return String(n);
        });
    }
    var m = b(j).forwardRef(function(a, c) {
            var n = a.prefixCls,
                o = void 0 === n ? 'rc-collapse' : n,
                p = a.destroyInactivePanel,
                q = void 0 !== p && p,
                r = a.style,
                s = a.accordion,
                t = a.className,
                u = a.children,
                v = a.collapsible,
                w = a.openMotion,
                x = a.expandIcon,
                y = a.activeKey,
                z = a.defaultActiveKey,
                A = a.onChange,
                B = b(g)(o, t),
                C = (0, i.default)([], {
                    value: y,
                    onChange: function(a) {
                        return null == A ? void 0 : A(a);
                    },
                    defaultValue: z,
                    postState: l
                }),
                D = (0, d.default)(C, 2),
                E = D[0],
                F = D[1],
                G = (0, h.default)(u).map(function(a, c) {
                    if (!a)
                        return null;
                    var H = a.key || String(c),
                        I = a.props,
                        J = I.header,
                        K = I.headerClass,
                        L = I.destroyInactivePanel,
                        M = I.collapsible,
                        N = I.onItemClick,
                        O = !1;
                    O = s ? E[0] === H : E.indexOf(H) > -1;
                    var P = null != M ? M : v,
                        Q = {
                            key: H,
                            panelKey: H,
                            header: J,
                            headerClass: K,
                            isActive: O,
                            prefixCls: o,
                            destroyInactivePanel: null != L ? L : q,
                            openMotion: w,
                            accordion: s,
                            children: a.props.children,
                            onItemClick: function(a) {
                                'disabled' !== P && (! function(a) {
                                    F(function() {
                                        return s ? E[0] === a ? [] : [a] : E.indexOf(a) > -1 ? E.filter(function(b) {
                                            return b !== a;
                                        }) : [].concat((0, e.default)(E), [a]);
                                    });
                                }(a), null == N || N(a));
                            },
                            expandIcon: x,
                            collapsible: P
                        };
                    return 'string' == typeof a.type ? a : (Object.keys(Q).forEach(function(a) {
                        void 0 === Q[a] && delete Q[a];
                    }), b(j).cloneElement(a, Q));
                });
            return b(j).createElement('div', {
                ref: c,
                className: B,
                style: r,
                role: s ? 'tablist' : void 0
            }, G);
        }),
        n = Object.assign(m, {
            Panel: k.default
        });
}), c.register('bOoWo', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('xwjsD'),
        e = c('Yb+Bf'),
        f = c('o35ej'),
        g = c('X3Kmt');

    function h(a, b) {
        return (0, d.default)(a) || (0, e.default)(a, b) || (0, f.default)(a, b) || (0, g.default)();
    }
}), c.register('xwjsD', function(b, c) {
    function d(a) {
        if (Array.isArray(a))
            return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('Yb+Bf', function(b, c) {
    function d(a, b) {
        var e = null == a ? null : 'undefined' != typeof Symbol && a[Symbol.iterator] || a['@@iterator'];
        if (null != e) {
            var f, g, h = [],
                i = !0,
                j = !1;
            try {
                for (e = e.call(a); !(i = (f = e.next()).done) && (h.push(f.value), !b || h.length !== b); i = !0);
            } catch (a) {
                j = !0, g = a;
            } finally {
                try {
                    i || null == e.return || e.return();
                } finally {
                    if (j)
                        throw g;
                }
            }
            return h;
        }
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('o35ej', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('083f7');

    function e(a, b) {
        if (a) {
            if ('string' == typeof a)
                return (0, d.default)(a, b);
            var f = Object.prototype.toString.call(a).slice(8, -1);
            return 'Object' === f && a.constructor && (f = a.constructor.name), 'Map' === f || 'Set' === f ? Array.from(a) : 'Arguments' === f || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? (0, d.default)(a, b) : void 0;
        }
    }
}), c.register('083f7', function(b, c) {
    function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var e = 0, f = new Array(b); e < b; e++)
            f[e] = a[e];
        return f;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('X3Kmt', function(b, c) {
    function d() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('WtrvT', function(b, d) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('ViH3b'),
        e = c('HvQE/'),
        f = c('o35ej'),
        g = c('7rjEe');

    function h(a) {
        return (0, d.default)(a) || (0, e.default)(a) || (0, f.default)(a) || (0, g.default)();
    }
}), c.register('ViH3b', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('083f7');

    function e(a) {
        if (Array.isArray(a))
            return (0, d.default)(a);
    }
}), c.register('HvQE/', function(b, c) {
    function d(a) {
        if ('undefined' != typeof Symbol && null != a[Symbol.iterator] || null != a['@@iterator'])
            return Array.from(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('7rjEe', function(b, c) {
    function d() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('iwiaz', function(b, c) {
    function d(a) {
        return d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(a) {
            return typeof a;
        } : function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('cY6EP', function(n, o) {
    a(n.exports, 'default', function() {
        return m;
    });
    var d = c('WfHYJ2'),
        e = c('ShjA01'),
        f = c('UBC/h'),
        g = c('VAIs1'),
        h = c('AIfHy'),
        i = c('8dJ620'),
        j = c('uPP4W'),
        k = c('IJKDo'),
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
        m = b(j).forwardRef(function(a, c) {
            var n, o, p = a.showArrow,
                q = void 0 === p || p,
                r = a.headerClass,
                s = a.isActive,
                t = a.onItemClick,
                u = a.forceRender,
                v = a.className,
                w = a.prefixCls,
                x = a.collapsible,
                y = a.accordion,
                z = a.panelKey,
                A = a.extra,
                B = a.header,
                C = a.expandIcon,
                D = a.openMotion,
                E = a.destroyInactivePanel,
                F = a.children,
                G = (0, f.default)(a, l),
                H = 'disabled' === x,
                I = 'header' === x,
                J = 'icon' === x,
                K = null != A && 'boolean' != typeof A,
                L = function() {
                    null == t || t(z);
                },
                M = 'function' == typeof C ? C(a) : b(j).createElement('i', {
                    className: 'arrow'
                });
            M && (M = b(j).createElement('div', {
                className: ''.concat(w, '-expand-icon'),
                onClick: [
                    'header',
                    'icon'
                ].includes(x) ? L : void 0
            }, M));
            var N = b(g)((n = {}, (0, d.default)(n, ''.concat(w, '-item'), !0), (0, d.default)(n, ''.concat(w, '-item-active'), s), (0, d.default)(n, ''.concat(w, '-item-disabled'), H), n), v),
                O = {
                    className: b(g)((o = {}, (0, d.default)(o, ''.concat(w, '-header'), !0), (0, d.default)(o, 'headerClass', r), (0, d.default)(o, ''.concat(w, '-header-collapsible-only'), I), (0, d.default)(o, ''.concat(w, '-icon-collapsible-only'), J), o)),
                    'aria-expanded': s,
                    'aria-disabled': H,
                    onKeyPress: function(a) {
                        'Enter' !== a.key && a.keyCode !== i.default.ENTER && a.which !== i.default.ENTER || L();
                    }
                };
            return I || J || (O.onClick = L, O.role = y ? 'tab' : 'button', O.tabIndex = H ? -1 : 0), b(j).createElement('div', (0, e.default)({}, G, {
                ref: c,
                className: N
            }), b(j).createElement('div', O, q && M, b(j).createElement('span', {
                className: ''.concat(w, '-header-text'),
                onClick: 'header' === x ? L : void 0
            }, B), K && b(j).createElement('div', {
                className: ''.concat(w, '-extra')
            }, A)), b(j).createElement(h.default, (0, e.default)({
                visible: s,
                leavedClassName: ''.concat(w, '-content-hidden')
            }, D, {
                forceRender: u,
                removeOnLeave: E
            }), function(a, c) {
                var P = a.className,
                    Q = a.style;
                return b(j).createElement(k.default, {
                    ref: c,
                    prefixCls: w,
                    className: P,
                    style: Q,
                    isActive: s,
                    forceRender: u,
                    role: y ? 'tabpanel' : void 0
                }, F);
            }));
        });
}), c.register('WfHYJ2', function(b, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('ShjA01', function(b, c) {
    function d() {
        return d = Object.assign || function(a) {
            for (var e = 1; e < v.length; e++) {
                var f = v[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, v);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('UBC/h', function(b, g) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('l2czd2');

    function e(a, b) {
        if (null == a)
            return {};
        var f, g, h = (0, d.default)(a, b);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            for (g = 0; g < i.length; g++)
                f = i[g], b.indexOf(f) >= 0 || Object.prototype.propertyIsEnumerable.call(a, f) && (h[f] = a[f]);
        }
        return h;
    }
}), c.register('l2czd2', function(b, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('IJKDo', function(i, j) {
    a(i.exports, 'default', function() {
        return l;
    });
    var d = c('WfHYJ2'),
        e = c('bOoWo'),
        f = c('VAIs1'),
        g = c('uPP4W'),
        h = b(g).forwardRef(function(a, c) {
            var i, j = a.prefixCls,
                k = a.forceRender,
                l = a.className,
                m = a.style,
                n = a.children,
                o = a.isActive,
                p = a.role,
                q = b(g).useState(o || k),
                r = (0, e.default)(q, 2),
                s = r[0],
                t = r[1];
            return b(g).useEffect(function() {
                (k || o) && t(!0);
            }, [
                k,
                o
            ]), s ? b(g).createElement('div', {
                ref: c,
                className: b(f)(''.concat(j, '-content'), (i = {}, (0, d.default)(i, ''.concat(j, '-content-active'), o), (0, d.default)(i, ''.concat(j, '-content-inactive'), !o), i), l),
                style: m,
                role: p
            }, b(g).createElement('div', {
                className: ''.concat(j, '-content-box')
            }, n)) : null;
        });
    h.displayName = 'PanelContent';
    var i = j;
}), c.register('ysccP', function(i, j) {
    a(i.exports, 'default', function() {
        return h;
    });
    var d = c('VAIs1'),
        e = c('UbR+H'),
        f = c('uPP4W'),
        g = c('qEw51');
    var h = f.forwardRef((a, c) => {
        const {
            getPrefixCls: i
        } = f.useContext(g.ConfigContext), {
            prefixCls: j,
            className: k = '',
            showArrow: l = !0
        } = m, n = i('collapse', j), o = b(d)({
            [`${ n }-no-arrow`]: !l
        }, k);
        return f.createElement(e.default.Panel, Object.assign({
            ref: c
        }, m, {
            prefixCls: n,
            className: o
        }));
    });
}), c.register('26hV8', function(b, k) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('KPzwS'),
        e = c('vvwoA'),
        f = c('jnIuq'),
        g = c('P38j/');
    const h = a => {
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
                lineType: s,
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
            } = F, G = `${ r }px ${ s } ${ t }`;
            return {
                [i]: Object.assign(Object.assign({}, (0, g.resetComponent)(F)), {
                    backgroundColor: m,
                    border: G,
                    borderBottom: 0,
                    borderRadius: `${ q }px`,
                    '&-rtl': {
                        direction: 'rtl'
                    },
                    [`& > ${ i }-item`]: {
                        borderBottom: G,
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
                        borderTop: G,
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
        i = a => {
            const {
                componentCls: j
            } = k;
            return {
                [`${ j }-rtl`]: {
                    [`> ${ j }-item > ${ j }-header ${ j }-arrow svg`]: {
                        transform: 'rotate(180deg)'
                    }
                }
            };
        },
        j = a => {
            const {
                componentCls: k,
                collapseHeaderBg: l,
                paddingXXS: m,
                colorBorder: n
            } = o;
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
        k = a => {
            const {
                componentCls: l,
                paddingSM: m
            } = n;
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
    var l = (0, e.default)('Collapse', a => {
        const m = (0, f.merge)(a, {
            collapseContentBg: a.colorBgContainer,
            collapseHeaderBg: a.colorFillAlter,
            collapseHeaderPadding: `${ a.paddingSM }px ${ a.padding }px`,
            collapseHeaderPaddingSM: `${ a.paddingXS }px ${ a.paddingSM }px`,
            collapseHeaderPaddingLG: `${ a.padding }px ${ a.paddingLG }px`,
            collapsePanelBorderRadius: a.borderRadiusLG,
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
}), c.register('ofYOa', function(b, r) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('PjB0f'),
        g = c('ExtIT'),
        h = c('cR5QE'),
        i = c('I9mdQ'),
        j = c('iYEuk12'),
        k = c('gSUVO'),
        l = c('CIJ2q'),
        m = c('axWAk');
    var n = (0, c('Vlfxs').observer)(() => {
        var o;
        const [p, q] = e.useState(!1), r = o => {
            (0, f.request)({
                url: '/api/user/update-school',
                data: {
                    schoolDiggerId: null == o ? void 0 : o.schoolid
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
        }, s = null === (o = (0, f.getUser)()) || void 0 === o ? void 0 : o.schoolName;
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
}), c.register('axWAk', function(b, w) {
    a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('5BgNK'),
        g = c('bPH7V'),
        h = c('ExtIT'),
        i = c('KV+OV'),
        j = c('c6x8w'),
        k = c('cR5QE'),
        l = c('lmfrI'),
        m = c('gSUVO'),
        n = c('h99Nu'),
        o = c('PjB0f'),
        p = c('GFgjD'),
        q = c('QgV8u');
    let r;
    var s = a => {
        const {
            visible: t,
            close: u
        } = v, [w, x] = e.useState(null), [y, z] = e.useState(!1), [A, B] = e.useState([]);
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
                (0, d.jsx)(u, {
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
                        w && (5 === String(w).length ? (z(!0), (0, o.request)({
                            url: '/api/users/fetch-schools',
                            method: 'post',
                            data: {
                                zipCode: w
                            },
                            success: v => {
                                v && v.schoolList && v.schoolList.length ? B(v.schoolList) : (0, p.throwError)({
                                    title: 'No schools found for this zip code.'
                                });
                            },
                            error: v => {
                                (0, p.throwError)({
                                    title: 'An error occurred while searching for your school',
                                    content: 'Please try again later'
                                });
                            },
                            both: () => {
                                z(!1);
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
                    loading: y,
                    value: w,
                    onChange: v => {
                        const C = v.target.value;
                        x(C);
                    }
                }),
                (0, d.jsx)('div', {
                    style: {
                        marginTop: 25
                    }
                }),
                A && A.length ? (0, d.jsx)(d.Fragment, {
                    children: A.map(t => (0, d.jsx)(q.default, {
                        name: t.schoolName,
                        description: `${ t.address.city }, ${ t.address.stateFull }`,
                        onSelect: () => v.selectSchool(t)
                    }, t.schoolid))
                }) : (0, d.jsx)(t, {})
            ]
        });
    };
    const t = () => (0, d.jsxs)('div', {
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
        u = n.default.div(r || (r = (a => a)`
  font-weight: ${ 0 };
  font-size: 42px;
  color: ${ 0 };
  line-height: 1;
  margin-bottom: 10px;
`), m.FontWeights.UltraBold, l.default.Black);
}), c.register('QgV8u', function(b, n) {
    a(b.exports, 'default', function() {
        return h;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('f9f+a'),
        f = c('gSUVO'),
        g = c('lmfrI');
    var h = a => (0, d.jsx)(e.default, {
        hoverable: !0,
        style: {
            marginBottom: 10
        },
        onClick: a.onSelect,
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
                    children: a.name
                }),
                (0, d.jsx)('div', {
                    style: {
                        fontSize: 14
                    },
                    children: a.description
                })
            ]
        })
    });
}), c.register('bwKYG', function(b, n) {
    a(b.exports, 'Setting', function() {
        return r;
    }), a(b.exports, 'default', function() {
        return s;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('h99Nu'),
        f = c('gSUVO'),
        g = c('f9f+a'),
        h = c('5nJMd26'),
        i = c('lmfrI'),
        j = c('KQ+tn'),
        k = c('fJ7YM'),
        l = c('PjB0f'),
        m = c('+Hkl0'),
        n = c('UPZXy');
    let o, p, q = a => a;
    const r = a => (0, d.jsx)(g.default, {
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
                        (0, d.jsx)(t, {
                            children: a.title
                        }),
                        (0, d.jsx)(u, {
                            children: a.description
                        })
                    ]
                }),
                (0, d.jsx)('div', {
                    children: a.children
                })
            ]
        })
    });
    var s = () => {
        const [t, u] = (0, l.useBoolean)(!1);
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
    const t = e.default.div(o || (o = q`
  font-weight: ${ 0 };
  font-size: 18px;
`), f.FontWeights.UltraBold),
        u = e.default.div(p || (p = q`
  font-size: 14px;
`));
}), c.register('5nJMd26', function(n, o) {
    a(n.exports, 'SpaceContext', function() {
        return m;
    }, function(a) {
        return m = a;
    }), a(n.exports, 'default', function() {
        return u;
    }, function(a) {
        return u = a;
    });
    var d = c('VAIs1'),
        e = c('8N2Yw'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('azbx226'),
        i = c('okyqG'),
        j = c('W5kb426'),
        k = c('pGyzR'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = f.createContext({
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
    const o = a => {
        const {
            getPrefixCls: p,
            space: q,
            direction: r
        } = f.useContext(g.ConfigContext), {
            size: s = (null == q ? void 0 : q.size) || 'small',
            align: t,
            className: u,
            rootClassName: v,
            children: w,
            direction: x = 'horizontal',
            prefixCls: y,
            split: z,
            style: A,
            wrap: B = !1
        } = C, D = l(C, [
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
        ]), E = (0, h.default)(), [F, G] = f.useMemo(() => (Array.isArray(s) ? s : [
            s,
            s
        ]).map(C => function(C) {
            return 'string' == typeof C ? n[C] : C || 0;
        }(C)), [s]), H = (0, e.default)(w, {
            keepEmpty: !0
        }), I = void 0 === t && 'horizontal' === x ? 'center' : t, J = p('space', y), [K, L] = (0, k.default)(J), M = b(d)(J, L, `${ J }-${ x }`, {
            [`${ J }-rtl`]: 'rtl' === r,
            [`${ J }-align-${ I }`]: I
        }, u, v), N = `${ J }-item`, O = 'rtl' === r ? 'marginLeft' : 'marginRight';
        let P = 0;
        const Q = H.map((C, b) => {
                null != C && (P = b);
                const R = C && C.key || `${ N }-${ b }`;
                return f.createElement(j.default, {
                    className: N,
                    key: R,
                    direction: x,
                    index: b,
                    marginDirection: O,
                    split: z,
                    wrap: B
                }, C);
            }),
            R = f.useMemo(() => ({
                horizontalSize: F,
                verticalSize: G,
                latestIndex: P,
                supportFlexGap: E
            }), [
                F,
                G,
                P,
                E
            ]);
        if (0 === H.length)
            return null;
        const S = {};
        return B && (S.flexWrap = 'wrap', E || (S.marginBottom = -G)), E && (S.columnGap = F, S.rowGap = G), K(f.createElement('div', Object.assign({
            className: M,
            style: Object.assign(Object.assign({}, S), A)
        }, D), f.createElement(m.Provider, {
            value: R
        }, Q)));
    };
    o.Compact = i.default;
    var p = q;
}), c.register('azbx226', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('94UTy'),
        f = () => {
            const [g, h] = d.useState(!1);
            return d.useEffect(() => {
                h((0, e.detectFlexGapSupported)());
            }, []), g;
        };
}), c.register('W5kb426', function(b, i) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('uPP4W'),
        e = c('5nJMd26');

    function f(a) {
        let {
            className: g,
            direction: h,
            index: i,
            marginDirection: j,
            children: k,
            split: l,
            wrap: m
        } = n;
        const {
            horizontalSize: o,
            verticalSize: p,
            latestIndex: q,
            supportFlexGap: r
        } = d.useContext(e.SpaceContext);
        let s = {};
        return r || ('vertical' === h ? i < q && (s = {
            marginBottom: o / (l ? 2 : 1)
        }) : s = Object.assign(Object.assign({}, i < q && {
            [j]: o / (l ? 2 : 1)
        }), m && {
            paddingBottom: p
        })), null == k ? null : d.createElement(d.Fragment, null, d.createElement('div', {
            className: g,
            style: s
        }, k), i < q && l && d.createElement('span', {
            className: `${ g }-split`,
            style: s
        }, l));
    }
}), c.register('KQ+tn', function(b, d) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('SprP3'),
        g = c('bwKYG'),
        h = c('Ly1h3');
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
    var k = () => {
        const [l, m] = e.useState(localStorage.getItem(f.LocalStorageNames.currency) || '$');
        return (0, d.jsx)(g.Setting, {
            title: 'Currency',
            description: 'Currency to be used while playing Gimkit (non-2D modes)',
            children: (0, d.jsx)(h.default, {
                value: l,
                style: {
                    width: 200
                },
                onChange: l => {
                    localStorage.setItem(f.LocalStorageNames.currency, l), m(l);
                },
                children: j.map(l => (0, d.jsx)(i, {
                    value: l,
                    children: l
                }, l))
            })
        });
    };
}), c.register('SprP3', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    a(b.exports, 'LocalStorageNames', function() {
        return f;
    }), (e = d || (d = {})).time = 'time', e.target = 'target', e.race = 'race', e.allIn = 'allIn', (g = f || (f = {})).language = 'gimkit-3.0-game-language', g.currency = 'gimkit-game-currency', g.music = 'gimkit-music-track', g.allowGoogleTranslate = 'gimkit-google-translate-allowed', g.editorDefaultLanguage = 'gimkit-editor-v4-default-language', g.editorDefaultGradeLevel = 'gimkit-editor-v4-default-grade-level', g.editorDefaultSubject = 'gimkit-editor-v4-default-subject', g.cosmosBlockedInGame = 'gimkit-cosmos-blocked-in-game', g.hookSavedOptions = 'gimkit-hook-saved-options';
}), c.register('fJ7YM', function(b, d) {
    a(b.exports, 'Language', function() {
        return m;
    }), a(b.exports, 'GoogleTranslate', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('bwKYG'),
        g = c('VJ4d21'),
        h = c('Ly1h3'),
        i = c('i0MGm'),
        j = c('SprP3');
    const {
        Option: k
    } = h.default, l = (0, g.getListOfLanguages)(), m = () => {
        const [n, o] = e.useState((0, g.getLanguageName)(localStorage.getItem(j.LocalStorageNames.language)) || 'English');
        return (0, d.jsx)(f.Setting, {
            title: 'Language',
            description: 'Language used for upgrade names and other text while playing Gimkit (non-2D modes)',
            children: (0, d.jsx)(h.default, {
                value: n,
                style: {
                    width: 200
                },
                onChange: n => {
                    const p = (0, g.getLanguageKey)(n);
                    localStorage.setItem(j.LocalStorageNames.language, p), o(n);
                },
                children: l.map(n => (0, d.jsx)(k, {
                    value: n,
                    children: n
                }, n))
            })
        });
    }, n = () => {
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
}), c.register('VJ4d21', function(b, c) {
    a(b.exports, 'getListOfLanguages', function() {
        return e;
    }), a(b.exports, 'getLanguageKey', function() {
        return f;
    }), a(b.exports, 'getLanguageName', function() {
        return g;
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
        e = () => Object.keys(d).map(a => d[a]),
        f = a => Object.keys(d).filter(b => d[b] === a)[0],
        g = a => d[a];
}), c.register('+Hkl0', function(b, q) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('bwKYG'),
        g = c('i0MGm'),
        h = c('SprP3');
    var i = () => {
        const [j, k] = e.useState(!!localStorage.getItem(h.LocalStorageNames.cosmosBlockedInGame));
        return (0, d.jsx)(f.Setting, {
            title: 'Disable Cosmetics',
            description: 'Gims, trails, and stickers are disabled in-game. All players appear as default Gims.',
            children: (0, d.jsx)(g.default, {
                onClick: j => {
                    j ? localStorage.setItem(h.LocalStorageNames.cosmosBlockedInGame, 'true') : localStorage.removeItem(h.LocalStorageNames.cosmosBlockedInGame), k(j);
                },
                checked: j
            })
        });
    };
}), c.register('UPZXy', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('bwKYG'),
        g = c('IsmrL'),
        h = c('c6x8w'),
        i = c('jrTkz0'),
        j = c('PjB0f'),
        k = c('laJ/S'),
        l = c('uVDHR');
    var m = () => {
        const [n, o] = e.useState(!0), [p, q] = e.useState(!1), [r, s] = e.useState(''), t = () => {
            if (p)
                return;
            let u = v;
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
                success: n => {
                    s(n.name);
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
                        disabled: n,
                        value: r,
                        maxLength: 20,
                        style: {
                            width: 200,
                            marginRight: 10
                        },
                        placeholder: 'Ms. Gimkit',
                        onPressEnter: t,
                        onChange: n => {
                            s(n.target.value);
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
}), c.register('6VWVh', function(b, n) {
    a(b.exports, 'default', function() {
        return n;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('mcAUY'),
        g = c('zR1Bk'),
        h = c('0fUsy'),
        i = c('rmwRN'),
        j = c('Bbl7N'),
        k = c('ohLcQ'),
        l = c('xNi98'),
        m = c('0e2dr');
    var n = () => (e.useEffect(() => {
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
}), c.register('mcAUY', function(b, n) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Vlfxs'),
        g = c('f9f+a'),
        h = c('gSUVO'),
        i = c('NS10B'),
        j = c('lmfrI'),
        k = c('PjB0f');
    var l = (0, f.observer)(() => {
        const {
            billing: m
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
                                children: m.planName
                            }),
                            (0, d.jsx)('div', {
                                style: {
                                    marginTop: -8
                                },
                                children: m.downgradeMessage || m.planDescription
                            })
                        ]
                    })
                ]
            })
        });
    });
}), c.register('zR1Bk', function(n, o) {
    a(n.exports, 'default', function() {
        return o;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('f9f+a'),
        g = c('JQ8A18'),
        h = c('lmfrI'),
        i = c('gSUVO'),
        j = c('Vlfxs'),
        k = c('NS10B'),
        l = c('1nZYn'),
        m = c('2MCaL');
    const n = a => {
        const o = !!a.amountRefunded,
            p = o && a.amountRefunded === a.amount;
        return (0, d.jsx)('a', {
            href: a.link,
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
                                    children: a.date
                                }),
                                (0, d.jsx)('div', {
                                    style: {
                                        fontSize: 14
                                    },
                                    children: (0, l.centsToFormatedMoney)(a.amount)
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
    var o = (0, j.observer)(() => {
        const {
            billing: p
        } = e.useContext(k.default);
        return p.charges.length ? (0, d.jsxs)(f.default, {
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
                p.charges.map(p => (0, d.jsx)(n, {
                    date: b(m).unix(p.unixDate).format('MMMM Do, YYYY'),
                    amount: p.amount,
                    link: p.receiptUrl,
                    amountRefunded: p.amountRefunded
                }, p.id))
            ]
        }) : null;
    });
}), c.register('JQ8A18', function(n, o) {
    a(n.exports, 'default', function() {
        return s;
    }, function(a) {
        return s = a;
    });
    var d = c('obWo+'),
        e = c('VAIs1'),
        f = c('uPP4W'),
        g = c('qEw51'),
        h = c('HVIEA'),
        i = c('PYjVb'),
        j = c('13lgq8'),
        k = c('RdtDA8'),
        l = function(a, b) {
            var m = {};
            for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && b.indexOf(n) < 0 && (m[n] = a[n]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(a); o < n.length; o++)
                    b.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (m[n[o]] = a[n[o]]);
            }
            return m;
        };
    const m = (a, c) => {
            var {
                prefixCls: n,
                className: o,
                rootClassName: p,
                style: q,
                children: r,
                icon: s,
                color: t,
                onClose: u,
                closeIcon: v,
                closable: w = !1
            } = x, y = l(x, [
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
                getPrefixCls: z,
                direction: A
            } = f.useContext(g.ConfigContext), [B, C] = f.useState(!0);
            f.useEffect(() => {
                'visible' in y && C(y.visible);
            }, [y.visible]);
            const D = (0, h.isPresetColor)(t) || (0, h.isPresetStatusColor)(t),
                E = Object.assign({
                    backgroundColor: t && !D ? t : void 0
                }, q),
                F = z('tag', n),
                [G, H] = (0, k.default)(F),
                I = b(e)(F, {
                    [`${ F }-${ t }`]: D,
                    [`${ F }-has-color`]: t && !D,
                    [`${ F }-hidden`]: !B,
                    [`${ F }-rtl`]: 'rtl' === A
                }, o, p, H),
                J = x => {
                    x.stopPropagation(), null == u || u(x), x.defaultPrevented || C(!1);
                },
                K = 'function' == typeof y.onClick || r && 'a' === r.type,
                L = s || null,
                M = L ? f.createElement(f.Fragment, null, L, f.createElement('span', null, r)) : r,
                N = f.createElement('span', Object.assign({}, y, {
                    ref: c,
                    className: I,
                    style: E
                }), M, w ? v ? f.createElement('span', {
                    className: `${ F }-close-icon`,
                    onClick: J
                }, v) : f.createElement(d.default, {
                    className: `${ F }-close-icon`,
                    onClick: J
                }) : null);
            return G(K ? f.createElement(i.default, null, N) : N);
        },
        n = f.forwardRef(m);
    n.CheckableTag = j.default;
    var o = p;
}), c.register('13lgq8', function(j, k) {
    a(j.exports, 'default', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('VAIs1'),
        e = c('uPP4W'),
        f = c('qEw51'),
        g = c('RdtDA8'),
        h = function(a, b) {
            var i = {};
            for (var j in a)
                Object.prototype.hasOwnProperty.call(a, j) && b.indexOf(j) < 0 && (i[j] = a[j]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var k = 0;
                for (j = Object.getOwnPropertySymbols(a); k < j.length; k++)
                    b.indexOf(j[k]) < 0 && Object.prototype.propertyIsEnumerable.call(a, j[k]) && (i[j[k]] = a[j[k]]);
            }
            return i;
        };
    var i = a => {
        var {
            prefixCls: j,
            className: k,
            checked: l,
            onChange: m,
            onClick: n
        } = o, p = h(o, [
            'prefixCls',
            'className',
            'checked',
            'onChange',
            'onClick'
        ]);
        const {
            getPrefixCls: q
        } = e.useContext(f.ConfigContext), r = q('tag', j), [s, t] = (0, g.default)(r), u = b(d)(r, {
            [`${ r }-checkable`]: !0,
            [`${ r }-checkable-checked`]: l
        }, k, t);
        return s(e.createElement('span', Object.assign({}, p, {
            className: u,
            onClick: o => {
                null == m || m(!l), null == n || n(o);
            }
        })));
    };
}), c.register('RdtDA8', function(b, j) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('vvwoA'),
        e = c('jnIuq'),
        f = c('hTZV68'),
        g = c('JkiNt'),
        h = c('P38j/');
    const i = (a, b, c) => {
            const j = (0, f.default)(c);
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: a[`color${ c }`],
                    background: a[`color${ j }Bg`],
                    borderColor: a[`color${ j }Border`]
                }
            };
        },
        j = a => (0, g.genPresetColor)(a, (b, c) => {
            let {
                textColor: k,
                lightBorderColor: l,
                lightColor: m,
                darkColor: n
            } = o;
            return {
                [`${ a.componentCls }-${ b }`]: {
                    color: k,
                    background: m,
                    borderColor: l,
                    '&-inverse': {
                        color: a.colorTextLightSolid,
                        background: n,
                        borderColor: n
                    }
                }
            };
        }),
        k = a => {
            const {
                paddingXXS: l,
                lineWidth: m,
                tagPaddingHorizontal: n,
                componentCls: o
            } = p, q = n - m, r = l - m;
            return {
                [o]: Object.assign(Object.assign({}, (0, h.resetComponent)(p)), {
                    display: 'inline-block',
                    height: 'auto',
                    marginInlineEnd: p.marginXS,
                    paddingInline: q,
                    fontSize: p.tagFontSize,
                    lineHeight: `${ p.tagLineHeight }px`,
                    whiteSpace: 'nowrap',
                    background: p.tagDefaultBg,
                    border: `${ p.lineWidth }px ${ p.lineType } ${ p.colorBorder }`,
                    borderRadius: p.borderRadiusSM,
                    opacity: 1,
                    transition: `all ${ p.motionDurationMid }`,
                    textAlign: 'start',
                    [`&${ o }-rtl`]: {
                        direction: 'rtl'
                    },
                    '&, a, a:hover': {
                        color: p.tagDefaultColor
                    },
                    [`${ o }-close-icon`]: {
                        marginInlineStart: r,
                        color: p.colorTextDescription,
                        fontSize: p.tagIconSize,
                        cursor: 'pointer',
                        transition: `all ${ p.motionDurationMid }`,
                        '&:hover': {
                            color: p.colorTextHeading
                        }
                    },
                    [`&${ o }-has-color`]: {
                        borderColor: 'transparent',
                        [`&, a, a:hover, ${ p.iconCls }-close, ${ p.iconCls }-close:hover`]: {
                            color: p.colorTextLightSolid
                        }
                    },
                    '&-checkable': {
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        cursor: 'pointer',
                        [`&:not(${ o }-checkable-checked):hover`]: {
                            color: p.colorPrimary,
                            backgroundColor: p.colorFillSecondary
                        },
                        '&:active, &-checked': {
                            color: p.colorTextLightSolid
                        },
                        '&-checked': {
                            backgroundColor: p.colorPrimary,
                            '&:hover': {
                                backgroundColor: p.colorPrimaryHover
                            }
                        },
                        '&:active': {
                            backgroundColor: p.colorPrimaryActive
                        }
                    },
                    '&-hidden': {
                        display: 'none'
                    },
                    [`> ${ p.iconCls } + span, > span + ${ p.iconCls }`]: {
                        marginInlineStart: q
                    }
                })
            };
        };
    var l = (0, d.default)('Tag', a => {
        const {
            fontSize: m,
            lineHeight: n,
            lineWidth: o,
            fontSizeIcon: p
        } = q, r = Math.round(m * n), s = q.fontSizeSM, t = r - 2 * o, u = q.colorFillAlter, v = q.colorText, w = (0, e.merge)(q, {
            tagFontSize: s,
            tagLineHeight: t,
            tagDefaultBg: u,
            tagDefaultColor: v,
            tagIconSize: p - 2 * o,
            tagPaddingHorizontal: 8
        });
        return [
            k(w),
            j(w),
            i(w, 'success', 'Success'),
            i(w, 'processing', 'Info'),
            i(w, 'error', 'Error'),
            i(w, 'warning', 'Warning')
        ];
    });
}), c.register('hTZV68', function(b, c) {
    function d(a) {
        if ('string' != typeof a)
            return a;
        return a.charAt(0).toUpperCase() + a.slice(1);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('1nZYn', function(b, c) {
    a(b.exports, 'centsToFormatedMoney', function() {
        return d;
    });
    const d = a => (a / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}), c.register('0fUsy', function(b, v) {
    a(b.exports, 'default', function() {
        return k;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Vlfxs'),
        g = c('NS10B'),
        h = c('f9f+a'),
        i = c('lmfrI'),
        j = c('gSUVO');
    var k = (0, f.observer)(() => {
        const {
            billing: l
        } = e.useContext(g.default);
        return !l.hasNextCharge || l.planName.toLowerCase().includes('basic') ? null : (0, d.jsxs)(h.default, {
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
                            children: l.nextChargeAmount
                        }),
                        (0, d.jsxs)('div', {
                            style: {
                                opacity: 0.8,
                                fontSize: 12,
                                marginLeft: 7
                            },
                            children: [
                                'on ',
                                l.nextChargeDate
                            ]
                        })
                    ]
                })
            ]
        });
    });
}), c.register('rmwRN', function(b, v) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Vlfxs'),
        g = c('f9f+a'),
        h = c('lmfrI'),
        i = c('gSUVO'),
        j = c('1nZYn'),
        k = c('NS10B');
    var l = (0, f.observer)(() => {
        const {
            billing: m
        } = e.useContext(k.default);
        return m.accountBalance ? (0, d.jsxs)(g.default, {
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
                    children: (0, j.centsToFormatedMoney)(m.accountBalance)
                })
            ]
        }) : null;
    });
}), c.register('Bbl7N', function(b, v) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('HKcK8'),
        g = c('IsmrL'),
        h = c('f9f+a'),
        i = c('jrTkz0'),
        j = c('lmfrI'),
        k = c('gSUVO'),
        l = c('NS10B'),
        m = c('Vlfxs'),
        n = c('mIF0p'),
        o = c('PjB0f'),
        p = c('qAmwF'),
        q = (g = c('IsmrL'), h = c('f9f+a'), i = c('jrTkz0'), c('GFgjD'));
    var r = (0, m.observer)(() => {
        const [s, t] = e.useState(!1), {
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
                                        const y = z;
                                        let A;
                                        try {
                                            if (A = await x.redirectToCheckout({
                                                    sessionId: y.id
                                                }), A && A.error)
                                                throw A.error;
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
                            loading: s,
                            children: 'Change Credit Card'
                        })
                    ]
                })
            ]
        });
    });
}), c.register('mIF0p', function(b, c) {
    a(b.exports, 'loadStripe', function() {
        return l;
    });
    var d = 'https://js.stripe.com/v3',
        e = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
        f = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
        g = null,
        h = function(a) {
            return null !== g || (g = new Promise(function(b, c) {
                if ('undefined' != typeof window)
                    if (window.Stripe && a && console.warn(f), window.Stripe)
                        b(window.Stripe);
                    else
                        try {
                            var i = function() {
                                for (var j = document.querySelectorAll('script[src^="'.concat(d, '"]')), k = 0; k < j.length; k++) {
                                    var l = j[k];
                                    if (e.test(l.src))
                                        return l;
                                }
                                return null;
                            }();
                            i && a ? console.warn(f) : i || (i = function(a) {
                                var j = a && !a.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
                                    k = document.createElement('script');
                                k.src = ''.concat(d).concat(j);
                                var l = document.head || document.body;
                                if (!l)
                                    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
                                return l.appendChild(k), k;
                            }(a)), i.addEventListener('load', function() {
                                window.Stripe ? b(window.Stripe) : c(new Error('Stripe.js not available'));
                            }), i.addEventListener('error', function() {
                                c(new Error('Failed to load Stripe.js'));
                            });
                        } catch (a) {
                            return void c(a);
                        }
                else
                    b(null);
            })), g;
        },
        i = function(a, b, c) {
            if (null === a)
                return null;
            var j = a.apply(void 0, b);
            return function(a, b) {
                a && a._registerWrapper && a._registerWrapper({
                    name: 'stripe-js',
                    version: '1.9.0',
                    startTime: b
                });
            }(j, c), j;
        },
        j = Promise.resolve().then(function() {
            return h(null);
        }),
        k = !1;
    j.catch(function(a) {
        k || console.warn(a);
    });
    var l = function() {
        for (var m = v.length, n = new Array(m), o = 0; o < m; o++)
            n[o] = v[o];
        k = !0;
        var p = Date.now();
        return j.then(function(m) {
            return i(m, n, p);
        });
    };
}), c.register('qAmwF', function(b, q) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('RrDRa');
    var f = () => {
        (0, d.request)({
            url: '/api/billing/payment-source',
            success: a => {
                e.default.billing.cardName = a.source.cardType, e.default.billing.last4DigitsOfCard = a.source.last4Digits, (0, d.request)({
                    url: '/api/billing/stripe-key',
                    success: a => e.default.billing.stripePublicKey = a.key
                });
            }
        });
    };
}), c.register('ohLcQ', function(b, q) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('KPNEB'),
        e = c('9BIne'),
        f = c('hu5Wv'),
        g = c('qAmwF'),
        h = c('I9mdQ');
    var i = () => {
        (0, h.default)({
            onSuccess: () => {
                (0, d.default)(), (0, e.default)(), (0, f.default)(), (0, g.default)();
            }
        });
    };
}), c.register('KPNEB', function(b, q) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('PjB0f'),
        e = c('RrDRa'),
        f = c('2lDHL'),
        g = c('LRoqi'),
        h = c('1nZYn'),
        i = c('SeqiC');
    var j = () => {
        (0, d.isUpgraded)() && (0, i.default)(), (0, d.request)({
            url: '/api/billing/plan-info',
            success: a => {
                const {
                    info: k
                } = l;
                e.default.billing.planName = (0, f.default)(k.plan), e.default.billing.planDescription = (l => {
                    if ('basic' === l.info.plan)
                        return 'Free Forever!';
                    if (l.info.info) {
                        const m = l.info.info;
                        if (m.providedByMessage)
                            return m.providedByMessage;
                        if (m.cost && m.timePeriod)
                            return `${ (0, h.centsToFormatedMoney)(m.cost) } per ${ m.timePeriod }`;
                        if (m.bulkName)
                            return `Paid by ${ m.bulkName }.`;
                    }
                    return '';
                })(l), k.info && k.info.timePeriod && (e.default.billing.billingInterval = k.info.timePeriod), 'stripe' === k.source && (0, g.default)();
            }
        });
    };
}), c.register('LRoqi', function(b, q) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('PjB0f'),
        e = c('RrDRa'),
        f = c('1nZYn');
    var g = () => {
        (0, d.request)({
            url: '/api/billing/upcoming-invoice',
            success: a => {
                e.default.billing.nextChargeAmount = (0, f.centsToFormatedMoney)(a.amount), e.default.billing.nextChargeDate = a.date, e.default.billing.hasNextCharge = !0;
            }
        });
    };
}), c.register('SeqiC', function(b, q) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('RrDRa');
    var f = () => {
        (0, d.request)({
            url: '/api/billing/downgrade-details',
            success: a => {
                e.default.billing.canDowngrade = a.canDowngrade, a.message && (e.default.billing.downgradeMessage = a.message), a.subscriptionEndDateText && (e.default.billing.downgradeDateMessage = a.subscriptionEndDateText);
            }
        });
    };
}), c.register('9BIne', function(b, q) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('RrDRa');
    var f = () => {
        (0, d.request)({
            url: '/api/billing/charges',
            success: a => e.default.billing.charges.replace(a.charges)
        });
    };
}), c.register('hu5Wv', function(b, q) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('PjB0f'),
        e = c('RrDRa');
    var f = () => {
        (0, d.request)({
            url: '/api/billing/account-balance',
            success: a => {
                e.default.billing.accountBalance = a.balance;
            }
        });
    };
}), c.register('xNi98', function(b, q) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('IsmrL'),
        g = c('f9f+a'),
        h = c('gSUVO'),
        i = c('lmfrI'),
        j = c('Vlfxs'),
        k = c('NS10B'),
        l = c('0/vMN');
    var m = (0, j.observer)(() => {
        const {
            billing: n
        } = e.useContext(k.default), [o, p] = e.useState(!1), q = () => p(!o);
        if (!n.canDowngrade) {
            if (n.downgradeMessage && n.downgradeMessage.includes('set to end')) {
                const r = n.downgradeMessage.split('end on ')[1];
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
                            n.canDowngrade && (0, d.jsx)(f.default, {
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
}), c.register('0/vMN', function(b, y) {
    a(b.exports, 'default', function() {
        return v;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('Vlfxs'),
        g = c('IsmrL'),
        h = c('ExtIT'),
        i = c('c6x8w'),
        j = c('cR5QE'),
        k = c('eAjRL0'),
        l = c('gSUVO'),
        m = c('lmfrI'),
        n = c('2lDHL'),
        o = c('NS10B'),
        p = c('PjB0f'),
        q = c('GFgjD'),
        r = c('ohLcQ'),
        s = c('4/f+U');
    let t;
    var u;
    (u = t || (t = {})).firstAsk = 'firstAsk', u.reason = 'reason', u.groupOrder = 'groupOrder';
    var v = (0, f.observer)(a => {
        const {
            billing: w
        } = e.useContext(o.default), [x, y] = e.useState(t.firstAsk), [z, A] = e.useState(''), [B, C] = e.useState(''), [D, E] = e.useState(!1), F = !D, G = a => A(a.target.value), H = a => C(a.target.value), I = () => {
            F && (E(!0), (0, p.request)({
                url: '/api/billing/downgrade',
                data: {
                    reasonId: z,
                    otherReason: B
                },
                success: () => {
                    j.default.success({
                        title: `You've canceled your ${ (0, n.default)((0, p.getUser)().type) } subscription${ w.downgradeDateMessage && ' to end on ' + w.downgradeDateMessage }.`
                    }), w.reset(), (0, r.default)(), a.close();
                },
                error: () => (0, q.throwError)({
                    title: 'Error canceling subscription',
                    content: 'Please contact support'
                }),
                both: () => E(!1)
            }));
        }, J = () => y(t.reason), K = () => y(t.groupOrder);
        return (0, d.jsx)(j.default, {
            open: a.visible,
            onCancel: a.close,
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
                        onClick: a.close,
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
                        children: w.map(a => (0, d.jsx)(k.default, {
                            value: a.id,
                            style: {
                                fontSize: 15,
                                color: m.default.Black,
                                marginBottom: 4
                            },
                            children: a.text
                        }, a.id))
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
    const w = [{
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
}), c.register('0e2dr', function(b, d) {
    a(b.exports, 'default', function() {
        return r;
    });
    var d = c('8kSQZ'),
        e = c('Vlfxs'),
        f = c('uPP4W'),
        g = c('NS10B'),
        h = c('PjB0f'),
        i = c('IsmrL'),
        j = c('f9f+a'),
        k = c('gSUVO'),
        l = c('lmfrI'),
        m = c('zgQWX27'),
        n = c('0wLl2'),
        o = c('iYEuk12'),
        p = c('q721a');
    const q = a => (0, d.jsx)(j.default, {
        style: {
            fontFamily: k.Fonts.SFPro,
            color: l.default.White,
            marginTop: 10,
            overflow: 'hidden'
        },
        ...a
    });
    var r = (0, e.observer)(() => {
        const {
            billing: s
        } = f.useContext(g.default);
        return (0, h.isUpgraded)() && s.billingInterval && 'year' !== s.billingInterval ? (0, d.jsx)(q, {
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
}), c.register('zgQWX27', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('+Ag0S27'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'StarOutlined';
    var i = e.forwardRef(h);
}), c.register('+Ag0S27', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('XEed7', function(b, h) {
    a(b.exports, 'default', function() {
        return m;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('gSUVO'),
        f = c('lmfrI'),
        g = c('ExtIT'),
        h = c('h99Nu');
    let i;
    const j = a => (0, d.jsx)('div', {
            style: {
                backgroundImage: `url(${ a.src })`,
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
        k = a => (0, d.jsxs)('div', {
            className: 'flex wrap vc',
            children: [
                (0, d.jsx)('div', {
                    children: (0, d.jsx)('img', {
                        src: a.image,
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
                    children: a.content
                })
            ]
        }),
        l = () => (0, d.jsx)('div', {
            style: {
                height: 35
            }
        });
    var m = () => {
        const n = () => {
            window.open('https://help.gimkit.com');
        };
        return (0, d.jsx)(n, {
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
                                            onClick: n,
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
                                            onClick: n,
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
    const n = h.default.div(i || (i = (a => a)``));
}), c.register('kMQjd3', function(b, h) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = c('GQAFg1');
    var f = a => {
        const g = (0, e.use100vh)();
        return (0, d.jsx)('div', {
            style: {
                height: g,
                width: '100%'
            },
            className: a.className,
            children: a.children
        });
    };
}), c.register('GQAFg1', function(h, i) {
    a(h.exports, 'use100vh', function() {
        return i;
    }, function(a) {
        return i = a;
    });
    var d = c('uPP4W'),
        e = function() {
            return e = Object.assign || function(a) {
                for (var f, g = 1, h = v.length; g < h; g++)
                    for (var i in f = v[g])
                        Object.prototype.hasOwnProperty.call(f, i) && (a[i] = f[i]);
                return a;
            }, e.apply(this, v);
        },
        f = function(a, b) {
            var g = {};
            for (var h in a)
                Object.prototype.hasOwnProperty.call(a, h) && b.indexOf(h) < 0 && (g[h] = a[h]);
            if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (h = Object.getOwnPropertySymbols(a); i < h.length; i++)
                    b.indexOf(h[i]) < 0 && Object.prototype.propertyIsEnumerable.call(a, h[i]) && (g[h[i]] = a[h[i]]);
            }
            return g;
        },
        g = !1,
        h = (0, d.forwardRef)(function(a, c) {
            var i = a.style,
                j = f(a, ['style']),
                k = i();
            !g && (null == i ? void 0 : i.height) && (g = !0, console.warn('<Div100vh /> overrides the height property of the style prop'));
            var l = e(e({}, i), {
                height: k ? k + 'px' : '100vh'
            });
            return b(d).createElement('div', e({
                ref: c,
                style: l
            }, j));
        });
    h.displayName = 'Div100vh';

    function i() {
        var j = (0, d.useState)(j),
            k = j[0],
            l = j[1],
            m = function() {
                var n = (0, d.useState)(!1),
                    o = n[0],
                    p = n[1];
                return (0, d.useEffect)(function() {
                    k() && p(!0);
                }, []), o;
            }();
        return (0, d.useEffect)(function() {
            if (m)
                return window.addEventListener('resize', j),
                    function() {
                        return window.removeEventListener('resize', j);
                    };

            function n() {
                var o = j();
                l(o);
            }
        }, [m]), m ? k : null;
    }

    function j() {
        return k() ? window.innerHeight : null;
    }

    function k() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
    }
}), c.register('XRX1525', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('xgR9K'),
        e = c('uPP4W'),
        f = c('qEw51');

    function g(a, b, c) {
        return function(j) {
            const {
                prefixCls: h,
                style: i
            } = j, k = e.useRef(null), [l, m] = e.useState(0), [n, o] = e.useState(0), [p, q] = (0, d.default)(!1, {
                value: j.open
            }), {
                getPrefixCls: r
            } = e.useContext(f.ConfigContext), s = r(b || 'select', h);
            return e.useEffect(() => {
                if (q(!0), 'undefined' != typeof ResizeObserver) {
                    const t = new ResizeObserver(t => {
                            const u = t[0].target;
                            m(u.offsetHeight + 8), o(u.offsetWidth);
                        }),
                        u = setInterval(() => {
                            var v;
                            const w = c ? `.${ c(s) }` : `.${ s }-dropdown`,
                                x = null === (v = k.current) || void 0 === v ? void 0 : v.querySelector(w);
                            x && (clearInterval(u), t.observe(x));
                        }, 10);
                    return () => {
                        clearInterval(u), t.disconnect();
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
                ref: k,
                style: {
                    paddingBottom: l,
                    position: 'relative',
                    width: 'fit-content',
                    minWidth: n
                }
            }, e.createElement(a, Object.assign({}, j, {
                style: Object.assign(Object.assign({}, i), {
                    margin: 0
                }),
                open: p,
                visible: p,
                getPopupContainer: () => k.current
            }))));
        };
    }
}), c.register('2TjlJ25', function(b, p) {
    a(b.exports, 'initMoveMotion', function() {
        return m;
    });
    var d = c('M5GjZ'),
        e = c('YNerC');
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
        m = (a, b) => {
            const {
                antCls: n
            } = o, p = `${ n }-${ b }`, {
                inKeyframes: q,
                outKeyframes: r
            } = l[b];
            return [
                (0, e.initMotion)(p, q, r, o.motionDurationMid),
                {
                    [`\n        ${ p }-enter,\n        ${ p }-appear\n      `]: {
                        opacity: 0,
                        animationTimingFunction: o.motionEaseOutCirc
                    },
                    [`${ p }-leave`]: {
                        animationTimingFunction: o.motionEaseInOutCirc
                    }
                }
            ];
        };
}), c.register('SlNZ027', function(a, b) {
    var d = c('QMiH027'),
        e = {
            'text/plain': 'Text',
            'text/html': 'Url',
            default: 'Text'
        };
    a.exports = function(a, b) {
        var f, g, h, i, j, k, l = !1;
        b || (b = {}), f = b.debug || !1;
        try {
            if (h = d(), i = document.createRange(), j = document.getSelection(), (k = document.createElement('span')).textContent = a, k.ariaHidden = 'true', k.style.all = 'unset', k.style.position = 'fixed', k.style.top = 0, k.style.clip = 'rect(0, 0, 0, 0)', k.style.whiteSpace = 'pre', k.style.webkitUserSelect = 'text', k.style.MozUserSelect = 'text', k.style.msUserSelect = 'text', k.style.userSelect = 'text', k.addEventListener('copy', function(d) {
                    if (d.stopPropagation(), b.format)
                        if (d.preventDefault(), void 0 === d.clipboardData) {
                            f && console.warn('unable to use e.clipboardData'), f && console.warn('trying IE specific stuff'), window.clipboardData.clearData();
                            var m = e[b.format] || e.default;
                            window.clipboardData.setData(m, a);
                        } else
                            d.clipboardData.clearData(), d.clipboardData.setData(b.format, a);
                    b.onCopy && (d.preventDefault(), b.onCopy(d.clipboardData));
                }), document.body.appendChild(k), i.selectNodeContents(k), j.addRange(i), !document.execCommand('copy'))
                throw new Error('copy command was unsuccessful');
            l = !0;
        } catch (d) {
            f && console.error('unable to copy using execCommand: ', d), f && console.warn('trying IE specific stuff');
            try {
                window.clipboardData.setData(b.format || 'text', a), b.onCopy && b.onCopy(window.clipboardData), l = !0;
            } catch (d) {
                f && console.error('unable to copy using clipboardData: ', d), f && console.error('falling back to prompt'), g = function(a) {
                    var m = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                    return a.replace(/#{\s*key\s*}/g, m);
                }('message' in b ? b.message : 'Copy to clipboard: #{key}, Enter'), window.prompt(g, a);
            }
        } finally {
            j && ('function' == typeof j.removeRange ? j.removeRange(i) : j.removeAllRanges()), k && document.body.removeChild(k), h();
        }
        return l;
    };
}), c.register('QMiH027', function(a, b) {
    a.exports = function() {
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
                'Caret' === d.type && d.removeAllRanges(), d.rangeCount || f.forEach(function(e) {
                    d.addRange(e);
                }), e && e.focus();
            };
    };
}), c.register('qLhB38', function(b, d) {
    a(b.exports, 'default', function() {
        return l;
    });
    var d = c('8kSQZ'),
        e = c('uPP4W'),
        f = c('h99Nu'),
        g = c('cR5QE'),
        h = c('lmfrI'),
        i = c('2WDH6');
    let j;
    const k = f.default.img.attrs(a => ({
        src: a.image
    }))(j || (j = (a => a)`
  cursor: pointer;
  height: ${ 0 }px;
  width: ${ 0 }px;
  margin-right: ${ 0 }px;
  border-radius: 5px;
  ${ 0 }
  flex-shrink: 0;
  object-fit: cover;
`), a => a.size, a => a.size, a => a.customRightMargin ? a.customRightMargin : 0, a => a.showBorder && `border: solid ${ h.default.Black } 1px;`);
    var l = a => {
        const [m, n] = e.useState(!1);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(k, {
                    ...a,
                    onClick: m => {
                        m.stopPropagation(), a.onClick && a.onClick(), a.blockModalOpen || n(!0);
                    }
                }),
                (0, d.jsx)(g.default, {
                    open: m,
                    onCancel: a => {
                        a.stopPropagation(), n(!1);
                    },
                    footer: null,
                    closable: !1,
                    children: (0, d.jsx)('img', {
                        src: (0, i.getCloudinaryUrl)(a.image),
                        style: {
                            width: '100%'
                        }
                    })
                })
            ]
        });
    };
}), c.register('2WDH6', function(b, c) {
    a(b.exports, 'getCloudinaryUrl', function() {
        return d;
    });
    const d = a => {
            const e = e(a);
            return e ? a.includes('/video/upload') ? `https://${ f }/video/upload/${ e }` : `https://${ f }/image/upload/f_auto,fl_lossy,q_auto/${ e }` : a;
        },
        e = a => {
            if (!i.some(b => a.includes(b)))
                return null;
            if (a.includes(g) && !a.includes(`/${ h }/`))
                return null;
            const f = a.split('/');
            if (!f || !f.length || f.length < 2)
                return null;
            const g = f[f.length - 2],
                h = f[f.length - 1];
            return g && h && g.startsWith('v') ? `${ g }/${ h }` : null;
        },
        f = 'media.gimkit.com',
        g = 'res.cloudinary.com',
        h = 'gimkit-production',
        i = [
            f,
            g
        ];
}), c.register('2gkXu26', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        sideMargin: 50,
        optionWidth: 200
    };
}), c.register('QNMlx24', function(b, h) {
    a(b.exports, 'useMediaMatch', function() {
        return e;
    });
    var d = c('uPP4W');

    function e(a) {
        if ('undefined' == typeof window)
            return console.warn('useMediaMatch cannot function as window is undefined.'), !1;
        var f = (0, d.useMemo)(function() {
                return window.matchMedia(a);
            }, [a]),
            g = (0, d.useState)(function() {
                return f.matches;
            }),
            h = g[0],
            i = g[1];
        return (0, d.useEffect)(function() {
            i(f.matches);
            var j = function(j) {
                return i(j.matches);
            };
            return f.addEventListener ? (f.addEventListener('change', j), function() {
                return f.removeEventListener('change', j);
            }) : (f.addListener(j), function() {
                return f.removeListener(j);
            });
        }, [f]), h;
    }
}), c.register('tYruc25', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__exportStar || function(a, b) {
            for (var f in a)
                'default' === f || Object.prototype.hasOwnProperty.call(b, f) || d(b, a, f);
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), e(c('v2PV625'), a.exports), e(c('IqYAK22'), a.exports), e(c('50wG025'), a.exports);
}), c.register('v2PV625', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useBreakpoints = a.exports.useBreakpoint = void 0;
    var d = c('50wG025');
    a.exports.useBreakpoint = function(a) {
        return (0, d.useWindowSize)().width < a;
    }, a.exports.useBreakpoints = function(a) {
        var e = (0, d.useWindowSize)().width;
        return a.map(function(a) {
            return e < a;
        });
    };
}), c.register('50wG025', function(a, b) {
    var d = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        e = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        f = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var g = {};
            if (null != a)
                for (var h in a)
                    'default' !== h && Object.prototype.hasOwnProperty.call(a, h) && d(g, a, h);
            return e(g, a), g;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useWindowSize = void 0;
    var g = f(c('uPP4W'));

    function h() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        };
    }
    a.exports.useWindowSize = function() {
        var i = g.useState(h()),
            j = i[0],
            k = i[1];
        return g.useLayoutEffect(function() {
            function l() {
                k(h());
            }
            return window.addEventListener('resize', l),
                function() {
                    return window.removeEventListener('resize', l);
                };
        }, []), j;
    };
}), c.register('IqYAK22', function(a, b) {
    var d = a.exports && a.exports.__assign || function() {
            return d = Object.assign || function(a) {
                for (var e, f = 1, g = v.length; f < g; f++)
                    for (var h in e = v[f])
                        Object.prototype.hasOwnProperty.call(e, h) && (a[h] = e[h]);
                return a;
            }, d.apply(this, v);
        },
        e = a.exports && a.exports.__createBinding || (Object.create ? function(a, b, c, d) {
            void 0 === d && (d = c), Object.defineProperty(a, d, {
                enumerable: !0,
                get: function() {
                    return b[c];
                }
            });
        } : function(a, b, c, d) {
            void 0 === d && (d = c), a[d] = b[c];
        }),
        f = a.exports && a.exports.__setModuleDefault || (Object.create ? function(a, b) {
            Object.defineProperty(a, 'default', {
                enumerable: !0,
                value: b
            });
        } : function(a, b) {
            a.default = b;
        }),
        g = a.exports && a.exports.__importStar || function(a) {
            if (a && a.__esModule)
                return a;
            var h = {};
            if (null != a)
                for (var i in a)
                    'default' !== i && Object.prototype.hasOwnProperty.call(a, i) && e(h, a, i);
            return f(h, a), h;
        };
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.useComponentSize = void 0;
    var h = g(c('uPP4W'));
    a.exports.useComponentSize = function() {
        var i = h.useState({
                height: 0,
                width: 0
            }),
            j = i[0],
            k = i[1],
            l = h.useRef(),
            m = h.useCallback(function() {
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
        return h.useLayoutEffect(function() {
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
}), c.register('UnfL724', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderTheme', function() {
        return d;
    }), (e = d || (d = {})).light = 'light', e.dark = 'dark';
}), c.register('dN+BG24', function(b, c) {
    let d;
    var e;
    a(b.exports, 'SiteHeaderAlpha', function() {
        return d;
    }), (e = d || (d = {})).none = 'none', e.standard = 'standard', e.darker = 'darker';
}), c.register('mblWO24', function(b, d) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        name: c('y8lS825').default.areaName,
        iconImage: '/client/img/header/rewards.svg'
    };
}), c.register('y8lS825', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
        areaName: 'Rewards',
        level: 'Level',
        xp: 'XP',
        currency: 'GimBucks',
        character: 'Gim',
        sticker: 'Sticker',
        trail: 'Trail'
    };
}), c.register('qgO2124', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('wOJzl24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'UsergroupAddOutlined';
    var i = e.forwardRef(h);
}), c.register('wOJzl24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('tK/kr24', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('XEZLJ24'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'LogoutOutlined';
    var i = e.forwardRef(h);
}), c.register('XEZLJ24', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('oSNZM', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('lByv9'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'CheckOutlined';
    var i = e.forwardRef(h);
}), c.register('lByv9', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('JegR3', function(b, d) {
    a(b.exports, 'default', function() {
        return i;
    });
    var d = c('uhRWM'),
        e = c('uPP4W'),
        f = c('WKaIG'),
        g = c('tEXgG'),
        h = function(a, b) {
            return e.createElement(g.default, (0, d.default)((0, d.default)({}, a), {}, {
                ref: b,
                icon: f.default
            }));
        };
    h.displayName = 'DownOutlined';
    var i = e.forwardRef(h);
}), c.register('WKaIG', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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
}), c.register('CrMLT9', function(p, t) {
    a(p.exports, 'default', function() {
        return A;
    });
    var d = c('b5p1k13'),
        e = c('WfHYJ18'),
        f = c('cabca9'),
        g = c('aCkIb5'),
        h = c('PKxjP16'),
        i = c('zTitA16'),
        j = c('MvitG9'),
        k = c('oG3bd5'),
        l = c('uPP4W'),
        m = c('VAIs1'),
        n = function(a) {
            (0, j.default)(p, a);
            var o = (0, k.default)(p);

            function p(a) {
                var q;
                (0, h.default)(this, p), (q = o.call(this, a)).handleChange = function(a) {
                    var r = q.props,
                        s = r.disabled,
                        t = r.onChange;
                    s || ('checked' in q.props || q.setState({
                        checked: a.target.checked
                    }), t && t({
                        target: (0, g.default)((0, g.default)({}, q.props), {}, {
                            checked: a.target.checked
                        }),
                        stopPropagation: function() {
                            a.stopPropagation();
                        },
                        preventDefault: function() {
                            a.preventDefault();
                        },
                        nativeEvent: a.nativeEvent
                    }));
                }, q.saveInput = function(a) {
                    q.input = a;
                };
                var r = 'checked' in a ? a.checked : a.defaultChecked;
                return q.state = {
                    checked: r
                }, q;
            }
            return (0, i.default)(p, [{
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
                            A = r.tabIndex,
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
                            L = Object.keys(K).reduce(function(q, b) {
                                return 'aria-' !== b.substr(0, 5) && 'data-' !== b.substr(0, 5) && 'role' !== b || (q[b] = K[b]), q;
                            }, {}),
                            M = this.state.checked,
                            N = b(m)(s, t, (q = {}, (0, e.default)(q, ''.concat(s, '-checked'), M), (0, e.default)(q, ''.concat(s, '-disabled'), y), q));
                        return b(l).createElement('span', {
                            className: N,
                            style: u
                        }, b(l).createElement('input', (0, d.default)({
                            name: v,
                            id: w,
                            type: x,
                            required: J,
                            readOnly: z,
                            disabled: y,
                            tabIndex: A,
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
                        }, L)), b(l).createElement('span', {
                            className: ''.concat(s, '-inner')
                        }));
                    }
                }
            ], [{
                key: 'getDerivedStateFromProps',
                value: function(a, b) {
                    return 'checked' in a ? (0, g.default)((0, g.default)({}, b), {}, {
                        checked: a.checked
                    }) : null;
                }
            }]), p;
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
    var o = p;
}), c.register('b5p1k13', function(b, c) {
    function d() {
        return d = Object.assign || function(a) {
            for (var e = 1; e < v.length; e++) {
                var f = v[e];
                for (var g in f)
                    Object.prototype.hasOwnProperty.call(f, g) && (a[g] = f[g]);
            }
            return a;
        }, d.apply(this, v);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('WfHYJ18', function(b, c) {
    function d(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('cabca9', function(b, g) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('l2czd17');

    function e(a, b) {
        if (null == a)
            return {};
        var f, g, h = (0, d.default)(a, b);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(a);
            for (g = 0; g < i.length; g++)
                f = i[g], b.indexOf(f) >= 0 || Object.prototype.propertyIsEnumerable.call(a, f) && (h[f] = a[f]);
        }
        return h;
    }
}), c.register('l2czd17', function(b, c) {
    function d(a, b) {
        if (null == a)
            return {};
        var e, f, g = {},
            h = Object.keys(a);
        for (f = 0; f < h.length; f++)
            e = h[f], b.indexOf(e) >= 0 || (g[e] = a[e]);
        return g;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('aCkIb5', function(b, g) {
    a(b.exports, 'default', function() {
        return f;
    });
    var d = c('WfHYJ18');

    function e(a, b) {
        var f = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(a);
            b && (g = g.filter(function(b) {
                return Object.getOwnPropertyDescriptor(a, b).enumerable;
            })), f.push.apply(f, g);
        }
        return f;
    }

    function f(a) {
        for (var g = 1; g < v.length; g++) {
            var h = null != v[g] ? v[g] : {};
            g % 2 ? e(Object(h), !0).forEach(function(g) {
                (0, d.default)(a, g, h[g]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(a, g, Object.getOwnPropertyDescriptor(h, g));
            });
        }
        return a;
    }
}), c.register('PKxjP16', function(b, c) {
    function d(a, b) {
        if (!(a instanceof b))
            throw new TypeError('Cannot call a class as a function');
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('zTitA16', function(b, c) {
    function d(a, b) {
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            f.enumerable = f.enumerable || !1, f.configurable = !0, 'value' in f && (f.writable = !0), Object.defineProperty(a, f.key, f);
        }
    }

    function e(a, b, c) {
        return b && d(a.prototype, b), c && d(a, c), a;
    }
    a(b.exports, 'default', function() {
        return e;
    });
}), c.register('MvitG9', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('/jzVl15');

    function e(a, b) {
        if ('function' != typeof b && null !== b)
            throw new TypeError('Super expression must either be null or a function');
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }), b && (0, d.default)(a, b);
    }
}), c.register('/jzVl15', function(b, c) {
    function d(a, b) {
        return d = Object.setPrototypeOf || function(a, b) {
            return a.__proto__ = b, a;
        }, d(a, b);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('oG3bd5', function(b, j) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('fmP4g15'),
        e = c('5UNjR15'),
        f = c('EDgo89');

    function g(a) {
        var h = (0, e.default)();
        return function() {
            var i, j = (0, d.default)(a);
            if (h) {
                var k = (0, d.default)(this).constructor;
                i = Reflect.construct(j, v, k);
            } else
                i = j.apply(this, v);
            return (0, f.default)(this, i);
        };
    }
}), c.register('fmP4g15', function(b, c) {
    function d(a) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
            return a.__proto__ || Object.getPrototypeOf(a);
        }, d(a);
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('5UNjR15', function(b, c) {
    function d() {
        if ('undefined' == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ('function' == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (a) {
            return !1;
        }
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('EDgo89', function(d, d) {
    a(d.exports, 'default', function() {
        return f;
    });
    var d = c('V09ZX15'),
        e = c('//YgM17');

    function f(a, c) {
        if (c && ('object' === b(d)(c) || 'function' == typeof c))
            return c;
        if (void 0 !== c)
            throw new TypeError('Derived constructors may only return object or undefined');
        return (0, e.default)(a);
    }
}), c.register('V09ZX15', function(a, b) {
    function d(b) {
        return 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? (a.exports = d = function(a) {
            return typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0) : (a.exports = d = function(a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a;
        }, a.exports.default = a.exports, a.exports.__esModule = !0), d(b);
    }
    a.exports = d, a.exports.default = a.exports, a.exports.__esModule = !0;
}), c.register('//YgM17', function(b, c) {
    function d(a) {
        if (void 0 === a)
            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return a;
    }
    a(b.exports, 'default', function() {
        return d;
    });
}), c.register('bdX0N23', function(b, i) {
    a(b.exports, 'onlyOfferAnnualUpgrade', function() {
        return e;
    });
    var d = c('3EnRx');
    const e = () => 'annual-only' === d.default.getFeatureFlag('annual-only-pro');
}), c.register('U8PGt', function(b, i) {
    a(b.exports, 'default', function() {
        return g;
    });
    var d = c('uPP4W'),
        e = c('KBP3q'),
        f = c('vxwW1');
    var g = (a, b) => {
        const [h, i] = d.useState(() => {
            var j, k;
            const l = a && 'current' in a ? a.current : a;
            return l ? [
                l.offsetWidth,
                l.offsetHeight
            ] : [
                null !== (j = null == b ? void 0 : b.initialWidth) && void 0 !== j ? j : 0,
                null !== (k = null == b ? void 0 : b.initialHeight) && void 0 !== k ? k : 0
            ];
        });
        return (0, f.default)(() => {
            const j = a && 'current' in a ? a.current : a;
            j && i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }, [a]), (0, e.default)(a, a => {
            const j = a.target;
            i([
                j.offsetWidth,
                j.offsetHeight
            ]);
        }), h;
    };
}), c.register('KBP3q', function(b, l) {
    a(b.exports, 'default', function() {
        return j;
    });
    var d = c('tDeyh'),
        e = c('vxwW1'),
        f = c('X8LPJ'),
        g = c('wZuO1');
    let h;
    const i = () => h || (h = function() {
        const j = new Map(),
            k = new(0, d.default)((0, g.default)((k, c) => {
                var l;
                if (1 === k.length)
                    null === (l = j.get(k[0].target)) || void 0 === l || l(k[0], c);
                else
                    for (let m = 0; m < k.length; m++) {
                        var n;
                        null === (n = j.get(k[m].target)) || void 0 === n || n(k[m], c);
                    }
            }));
        return {
            observer: k,
            subscribe(c, l) {
                k.observe(c), j.set(c, l);
            },
            unsubscribe(c) {
                k.unobserve(c), j.delete(c);
            }
        };
    }());
    var j = function(a, b) {
        const k = i(),
            l = (0, f.default)(b);
        return (0, e.default)(() => {
            let m = !1;
            const n = a && 'current' in a ? a.current : a;
            if (n)
                return k.subscribe(n, (a, k) => {
                    m || l.current(a, k);
                }), () => {
                    m = !0, k.unsubscribe(n);
                };
        }, [
            a,
            k,
            l
        ]), k.observer;
    };
}), c.register('vxwW1', function(d, d) {
    a(d.exports, 'default', function() {
        return d;
    });
    var d = b(c('uPP4W'))['undefined' != typeof document && void 0 !== document.createElement ? 'useLayoutEffect' : 'useEffect'];
}), c.register('X8LPJ', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('uPP4W');
    var e = a => {
        const f = d.useRef(a);
        return d.useEffect(() => {
            f.current = a;
        }), f;
    };
}), c.register('wZuO1', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = function(a) {
        var e = [],
            f = null,
            g = function() {
                for (var h = v.length, i = new Array(h), j = 0; j < h; j++)
                    i[j] = v[j];
                e = i, f || (f = requestAnimationFrame(function() {
                    f = null, a.apply(void 0, e);
                }));
            };
        return g.cancel = function() {
            f && (cancelAnimationFrame(f), f = null);
        }, g;
    };
}), c.register('Nsg/l3', function(i, j) {
    a(i.exports, 'default', function() {
        return l;
    });
    var d = c('uPP4W'),
        e = function(a, b) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(a, b) {
                a.__proto__ = b;
            } || function(a, b) {
                for (var f in b)
                    b.hasOwnProperty(f) && (a[f] = b[f]);
            }, e(a, b);
        };
    var f = function() {
        return f = Object.assign || function(a) {
            for (var g, h = 1, i = v.length; h < i; h++)
                for (var j in g = v[h])
                    Object.prototype.hasOwnProperty.call(g, j) && (a[j] = g[j]);
            return a;
        }, f.apply(this, v);
    };
    var g = 'Pixel',
        h = 'Percent',
        i = {
            unit: h,
            value: 0.8
        };

    function j(a) {
        return 'number' == typeof a ? {
            unit: h,
            value: 100 * a
        } : 'string' == typeof a ? a.match(/^(\d*(\.\d+)?)px$/) ? {
            unit: g,
            value: parseFloat(a)
        } : a.match(/^(\d*(\.\d+)?)%$/) ? {
            unit: h,
            value: parseFloat(a)
        } : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), i) : (console.warn('scrollThreshold should be string or number'), i);
    }
    var k = function(a) {
            function l(b) {
                var m = a.call(this, b) || this;
                return m.lastScrollTop = 0, m.actionTriggered = !1, m.startY = 0, m.currentY = 0, m.dragging = !1, m.maxPullDownDistance = 0, m.getScrollableTarget = function() {
                    return m.props.scrollableTarget instanceof HTMLElement ? m.props.scrollableTarget : 'string' == typeof m.props.scrollableTarget ? document.getElementById(m.props.scrollableTarget) : (null === m.props.scrollableTarget && console.warn('You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '), null);
                }, m.onStart = function(a) {
                    m.lastScrollTop || (m.dragging = !0, a instanceof MouseEvent ? m.startY = a.pageY : a instanceof TouchEvent && (m.startY = a.touches[0].pageY), m.currentY = m.startY, m._infScroll && (m._infScroll.style.willChange = 'transform', m._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'));
                }, m.onMove = function(a) {
                    m.dragging && (a instanceof MouseEvent ? m.currentY = a.pageY : a instanceof TouchEvent && (m.currentY = a.touches[0].pageY), m.currentY < m.startY || (m.currentY - m.startY >= Number(m.props.pullDownToRefreshThreshold) && m.setState({
                        pullToRefreshThresholdBreached: !0
                    }), m.currentY - m.startY > 1.5 * m.maxPullDownDistance || m._infScroll && (m._infScroll.style.overflow = 'visible', m._infScroll.style.transform = 'translate3d(0px, ' + (m.currentY - m.startY) + 'px, 0px)')));
                }, m.onEnd = function() {
                    m.startY = 0, m.currentY = 0, m.dragging = !1, m.state.pullToRefreshThresholdBreached && (m.props.refreshFunction && m.props.refreshFunction(), m.setState({
                        pullToRefreshThresholdBreached: !1
                    })), requestAnimationFrame(function() {
                        m._infScroll && (m._infScroll.style.overflow = 'auto', m._infScroll.style.transform = 'none', m._infScroll.style.willChange = 'none');
                    });
                }, m.onScrollListener = function(a) {
                    'function' == typeof m.props.onScroll && setTimeout(function() {
                        return m.props.onScroll && m.props.onScroll(a);
                    }, 0);
                    var n = m.props.height || m._scrollableNode ? a.target : document.documentElement.scrollTop ? document.documentElement : document.body;
                    m.actionTriggered || ((m.props.inverse ? m.isElementAtTop(n, m.props.scrollThreshold) : m.isElementAtBottom(n, m.props.scrollThreshold)) && m.props.hasMore && (m.actionTriggered = !0, m.setState({
                        showLoader: !0
                    }), m.props.next && m.props.next()), m.lastScrollTop = n.scrollTop);
                }, m.state = {
                    showLoader: !1,
                    pullToRefreshThresholdBreached: !1
                }, m.throttledOnScrollListener = function(a, b, m, n) {
                    var n, o = !1,
                        p = 0;

                    function q() {
                        n && clearTimeout(n);
                    }

                    function r() {
                        var s = this,
                            t = Date.now() - p,
                            u = v;

                        function w() {
                            p = Date.now(), m.apply(s, u);
                        }

                        function x() {
                            n = void 0;
                        }
                        o || (n && !n && w(), q(), void 0 === n && t > a ? w() : !0 !== b && (n = setTimeout(n ? x : w, void 0 === n ? a - t : a)));
                    }
                    return 'boolean' != typeof b && (n = m, m = b, b = void 0), r.cancel = function() {
                        q(), o = !0;
                    }, r;
                }(150, m.onScrollListener).bind(m), m.onStart = m.onStart.bind(m), m.onMove = m.onMove.bind(m), m.onEnd = m.onEnd.bind(m), m;
            }
            return function(a, b) {
                function m() {
                    this.constructor = a;
                }
                e(a, b), a.prototype = null === b ? Object.create(b) : (m.prototype = b.prototype, new m());
            }(l, a), l.prototype.componentDidMount = function() {
                if (void 0 === this.props.dataLength)
                    throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
                if (this._scrollableNode = this.getScrollableTarget(), this.el = this.props.height ? this._infScroll : this._scrollableNode || window, this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener), 'number' == typeof this.props.initialScrollY && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY && this.el.scrollTo(0, this.props.initialScrollY), this.props.pullDownToRefresh && this.el && (this.el.addEventListener('touchstart', this.onStart), this.el.addEventListener('touchmove', this.onMove), this.el.addEventListener('touchend', this.onEnd), this.el.addEventListener('mousedown', this.onStart), this.el.addEventListener('mousemove', this.onMove), this.el.addEventListener('mouseup', this.onEnd), this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0, this.forceUpdate(), 'function' != typeof this.props.refreshFunction))
                    throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'');
            }, l.prototype.componentWillUnmount = function() {
                this.el && (this.el.removeEventListener('scroll', this.throttledOnScrollListener), this.props.pullDownToRefresh && (this.el.removeEventListener('touchstart', this.onStart), this.el.removeEventListener('touchmove', this.onMove), this.el.removeEventListener('touchend', this.onEnd), this.el.removeEventListener('mousedown', this.onStart), this.el.removeEventListener('mousemove', this.onMove), this.el.removeEventListener('mouseup', this.onEnd)));
            }, l.prototype.UNSAFE_componentWillReceiveProps = function(a) {
                this.props.dataLength !== a.dataLength && (this.actionTriggered = !1, this.setState({
                    showLoader: !1
                }));
            }, l.prototype.isElementAtTop = function(a, b) {
                void 0 === b && (b = 0.8);
                var m = a === document.body || a === document.documentElement ? window.screen.availHeight : a.clientHeight,
                    n = j(b);
                return n.unit === g ? a.scrollTop <= n.value + m - a.scrollHeight + 1 || 0 === a.scrollTop : a.scrollTop <= n.value / 100 + m - a.scrollHeight + 1 || 0 === a.scrollTop;
            }, l.prototype.isElementAtBottom = function(a, b) {
                void 0 === b && (b = 0.8);
                var m = a === document.body || a === document.documentElement ? window.screen.availHeight : a.clientHeight,
                    n = j(b);
                return n.unit === g ? a.scrollTop + m >= a.scrollHeight - n.value : a.scrollTop + m >= n.value / 100 * a.scrollHeight;
            }, l.prototype.render = function() {
                var m = this,
                    n = f({
                        height: this.props.height || 'auto',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }, this.props.style),
                    o = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                    p = this.props.pullDownToRefresh && this.props.height ? {
                        overflow: 'auto'
                    } : {};
                return b(d).createElement('div', {
                    style: p,
                    className: 'infinite-scroll-component__outerdiv'
                }, b(d).createElement('div', {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(b) {
                        return m._infScroll = b;
                    },
                    style: n
                }, this.props.pullDownToRefresh && b(d).createElement('div', {
                    style: {
                        position: 'relative'
                    },
                    ref: function(b) {
                        return m._pullDown = b;
                    }
                }, b(d).createElement('div', {
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: -1 * this.maxPullDownDistance
                    }
                }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)), this.props.children, !this.state.showLoader && !o && this.props.hasMore && this.props.loader, this.state.showLoader && this.props.hasMore && this.props.loader, !this.props.hasMore && this.props.endMessage));
            }, l;
        }(d.Component),
        l = m;
}), c.register('k0s2g17', function(b, d) {
    a(b.exports, 'NavigateTo', function() {
        return e;
    });
    var d = c('Cr/BM');
    const e = a => {
        d.history.push(a);
    };
}), c.register('iMnBi', function(b, d) {
    a(b.exports, 'default', function() {
        return e;
    });
    var d = c('8kSQZ');
    c('uPP4W');
    var e = a => (0, d.jsx)('i', {
        className: `${ a.name }${ a.className ? ` ${ a.className }` : '' }`,
        style: a.style
    });
}), c.register('u1rFO25', function(a, b) {
    Object.defineProperty(a.exports, '__esModule', {
        value: !0
    }), a.exports.lazyWithPreload = void 0;
    var d = c('uPP4W');

    function e(a) {
        var f, g, h = (0, d.lazy)(a),
            i = (0, d.forwardRef)(function(a, g) {
                var j = (0, d.useRef)(null != f ? f : h);
                return (0, d.createElement)(j.current, Object.assign(g ? {
                    ref: g
                } : {}, a));
            });
        return i.preload = function() {
            return g || (g = a().then(function(a) {
                return f = a.default;
            })), g;
        }, i;
    }
    a.exports.lazyWithPreload = e, a.exports.default = e;
}), c.register('cdiGP23', function(b, c) {
    a(b.exports, 'default', function() {
        return d;
    });
    var d = {
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