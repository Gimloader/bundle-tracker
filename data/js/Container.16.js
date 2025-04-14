function e(e, t, o, n) {
    Object.defineProperty(e, t, {
        get: o,
        set: n,
        enumerable: !0,
        configurable: !0
    })
}
var t = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
t.register("36y6c", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("hxEiv"),
        r = t("lqzWa"),
        a = t("6WS0O"),
        l = t("36UFo");
    var u = e => (0, i.jsx)(l.default, {
        emoji: e.emoji,
        title: e.title,
        description: e.description,
        children: (0, i.jsx)(r.default, {
            value: e.value,
            style: {
                width: e.customWidth || a.default.optionWidth
            },
            size: "large",
            onChange: t => e.onValueChanged(t),
            disabled: e.readOnly,
            children: e.options.map((t => (0, i.jsx)(r.default.Option, {
                value: t.value,
                children: t.name
            }, `${e.title||"no-title"}-${t.value}`)))
        })
    })
})), t.register("36UFo", (function(o, n) {
    e(o.exports, "default", (function() {
        return a
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("lmxut");
    var a = e => (0, i.jsxs)(r.OptionContainer, {
        children: [(0, i.jsxs)(r.OptionInfoContainer, {
            children: [e.emoji ? (0, i.jsx)(r.OptionEmoji, {
                children: e.emoji
            }) : null, (0, i.jsxs)("div", {
                children: [(0, i.jsx)(r.OptionTitle, {
                    children: e.title
                }), e.description ? (0, i.jsx)(r.OptionDescription, {
                    children: e.description
                }) : null]
            })]
        }), (0, i.jsx)(r.OptionChangerContainer, {
            children: e.children
        })]
    })
})), t.register("lmxut", (function(o, n) {
    e(o.exports, "OptionContainer", (function() {
        return c
    })), e(o.exports, "OptionInfoContainer", (function() {
        return h
    })), e(o.exports, "OptionEmoji", (function() {
        return v
    })), e(o.exports, "OptionTitle", (function() {
        return x
    })), e(o.exports, "OptionDescription", (function() {
        return y
    })), e(o.exports, "OptionChangerContainer", (function() {
        return m
    }));
    var i = t("69SUA"),
        r = t("2FDaO");
    let a, l, u, s, d, f, p = e => e;
    const c = r.default.div.attrs({
            className: "maxWidth flex vc between"
        })(a || (a = p`
  box-sizing: border-box;
  padding: 13px 20px;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.23s;
  will-change: transform;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
`)),
        h = r.default.div.attrs({
            className: "flex vc"
        })(l || (l = p``)),
        v = r.default.div(u || (u = p`
  font-size: 23px;
  margin-right: 10px;
`)),
        x = r.default.div(s || (s = p`
  font-size: 23px;
  font-weight: ${0};
`), i.FontWeights.Bold),
        y = r.default.div(d || (d = p`
  font-size: 15px;
  margin-top: -2px;
`)),
        m = r.default.div(f || (f = p`
  flex-shrink: 0;
  margin-left: 25px;
`))
})), t.register("dbbFP", (function(o, n) {
    e(o.exports, "default", (function() {
        return f
    }));
    var i = t("hxEiv"),
        r = t("fywoC"),
        a = t("6WS0O"),
        l = t("1pMe1"),
        u = t("36UFo"),
        s = t("cmvpZ"),
        d = t("gaBR9");
    var f = e => {
        const t = r.useCallback((t => {
            if ((0, s.isNil)(t) && e.allowEmpty) return t;
            let o = t ? e.step ? Math.round(t / e.step) * e.step : t : 0;
            return !(0, s.isNil)(e.min) && o < e.min ? o = e.min : !(0, s.isNil)(e.max) && o > e.max && (o = e.max), o
        }), [e.max, e.min, e.step]);
        r.useEffect((() => {
            (0, s.isNil)(e.value) || e.max && e.value > e.max && o(t(e.max))
        }), [e.value, e.max]);
        const o = o => {
            e.onValueChanged(t(o))
        };
        return (0, i.jsx)(u.default, {
            emoji: e.emoji,
            title: e.title,
            description: e.description,
            children: (0, i.jsx)(d.default, {
                size: "large",
                formatter: l.default,
                value: e.value,
                max: e.max,
                min: e.min,
                step: e.step,
                style: {
                    width: e.customWidth || a.default.optionWidth
                },
                onChange: o,
                disabled: e.readOnly
            })
        })
    }
})), t.register("1pMe1", (function(o, n) {
    e(o.exports, "default", (function() {
        return r
    }));
    var i = t("iMOcM");
    var r = e => "" === e ? "" : isNaN(Number(e)) ? String(e) : (0, i.numberWithCommas)(Number(e))
})), t.register("gaBR9", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("hxEiv"),
        r = t("8K4sH"),
        a = t("fywoC"),
        l = t("iMOcM");
    var u = e => {
        const [t, o] = a.useState(e.value), [n, u] = a.useState(e.value), [s, d, f] = (0, l.useBoolean)(!1);
        a.useEffect((() => {
            u(e.value), o(e.value)
        }), [e.value]);
        return (0, i.jsx)(r.default, {
            ...e,
            value: s ? t : n,
            onChange: e => {
                o(e)
            },
            onFocus: d,
            onBlur: () => {
                t !== n && e.onChange(t), f(), o(e.value)
            }
        })
    }
})), t.register("1VXVp", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("cmvpZ"),
        r = t("f9d7r"),
        a = t("5mRwo");
    const l = (e, t) => {
        var o;
        return null === (o = JSON.parse(localStorage.getItem(a.LocalStorageNames.hookSavedOptions) || "{}")[t]) || void 0 === o ? void 0 : o[e]
    };
    var u = e => {
        var t;
        const {
            hookJSON: o,
            experienceId: n,
            kitId: a
        } = e, u = {};
        return null == o || null === (t = o.hooks) || void 0 === t || t.forEach((e => {
            if (e.type === r.HookType.kit) u[e.key] = a || "";
            else if (e.type == r.HookType.selectBox) {
                const t = e.options;
                if (t.options.length) {
                    let o = t.options.find((e => e === t.defaultOption)) || t.options[0];
                    if (n) {
                        const i = l(e.key, n);
                        if (i) {
                            const e = t.options.find((e => e === i));
                            e && (o = e)
                        }
                    }
                    o && (u[e.key] = o)
                }
            } else if (e.type === r.HookType.number) {
                const t = e.options;
                let o = t.defaultValue;
                if (n) {
                    const r = l(e.key, n);
                    if (!(0, i.isNil)(r) && "number" == typeof r) {
                        let e = !1;
                        ((0, i.isNil)(t.min) || r > t.min) && ((0, i.isNil)(t.max) || r < t.max) && ((0, i.isNil)(t.step) || r % t.step == 0) && (e = !0), e && (o = r)
                    }
                }
                u[e.key] = o
            }
        })), u
    }
})), t.register("duwmE", (function(o, n) {
    e(o.exports, "default", (function() {
        return p
    }));
    var i = t("hxEiv"),
        r = t("4MuSt"),
        a = t("lpEVe"),
        l = t("fywoC"),
        u = t("kYeTD"),
        s = t("fMJkl"),
        d = t("8KPyf"),
        f = t("1VXVp");
    var p = (0, a.observer)((e => {
        const [t] = l.useState((() => (0, r.observable)(e.defaultState || (0, f.default)({
            hookJSON: e.hooks
        })))), o = (e, o) => {
            t[e] = o
        }, n = (0, r.toJS)(t), a = JSON.stringify(n);
        l.useEffect((() => {
            e.onConnectedResourcesChange && e.onConnectedResourcesChange((0, s.default)(e, n)), e.readOnly || e.onStateChange && e.onStateChange(n)
        }), [a, e.readOnly]);
        const p = (0, d.default)(e, n);
        return (0, i.jsxs)(i.Fragment, {
            children: [e.header ? e.header(p.length) : null, p.map(((t, r) => (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsx)(u.default, {
                    hook: t,
                    state: n,
                    modifyState: o,
                    location: e.location,
                    readOnly: e.readOnly
                }), r !== p.length - 1 && (0, i.jsx)("div", {
                    style: {
                        height: 10
                    }
                })]
            }, `hook-form-${t.key}`))), e.footer ? e.footer(p.length) : null]
        })
    }))
})), t.register("kYeTD", (function(o, n) {
    e(o.exports, "default", (function() {
        return s
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("f9d7r"),
        a = t("1njXE"),
        l = t("bEHrS"),
        u = t("lPp5C");
    var s = e => {
        const t = e.state[e.hook.key],
            o = t => {
                e.modifyState(e.hook.key, t)
            };
        return e.hook.type === r.HookType.selectBox ? (0, i.jsx)(u.default, {
            value: t,
            onChange: o,
            hook: e.hook,
            readOnly: e.readOnly
        }) : e.hook.type === r.HookType.kit ? (0, i.jsx)(a.default, {
            value: t,
            onChange: o,
            hook: e.hook,
            location: e.location,
            readOnly: e.readOnly
        }) : e.hook.type === r.HookType.number ? (0, i.jsx)(l.default, {
            value: t,
            onChange: o,
            hook: e.hook,
            readOnly: e.readOnly
        }) : null
    }
})), t.register("1njXE", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("lC3yj"),
        a = t("ijMF4"),
        l = t("e3N7l");
    var u = e => {
        let {
            title: t,
            description: o
        } = (0, l.default)(e.hook);
        if (e.location === a.HookFormLocation.editor) {
            const e = "We're showing this hook for testing purposes, but this hook won't be visible when choosing this map from the Mode Picker.";
            o ? o += ` - ${e}` : o = e
        }
        return (0, i.jsx)(r.default, {
            title: t,
            description: o,
            value: e.value,
            onValueChanged: e.onChange,
            placeholder: "Kit ID",
            readOnly: e.readOnly
        })
    }
})), t.register("lC3yj", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("b9Zw0"),
        a = t("6WS0O"),
        l = t("36UFo");
    var u = e => (0, i.jsx)(l.default, {
        emoji: e.emoji,
        title: e.title,
        description: e.description,
        children: (0, i.jsx)(r.default, {
            size: "large",
            value: e.value,
            placeholder: e.placeholder,
            style: {
                width: e.customWidth || a.default.optionWidth
            },
            onChange: t => {
                e.onValueChanged(t.target.value)
            },
            disabled: e.readOnly
        })
    })
})), t.register("ijMF4", (function(t, o) {
    let n;
    var i;
    let r;
    e(t.exports, "HookFormLocation", (function() {
        return n
    })), e(t.exports, "IHookConnectedResourceType", (function() {
        return r
    })), (i = n || (n = {})).editor = "editor", i.experiencePicker = "experiencePicker", (r || (r = {})).kit = "kit"
})), t.register("e3N7l", (function(t, o) {
    e(t.exports, "default", (function() {
        return n
    }));
    var n = e => {
        let t, o;
        return t = e.key, e.displayName && (t = e.displayName), e.displayDescription && (o = e.displayDescription), {
            title: t,
            description: o
        }
    }
})), t.register("bEHrS", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("hxEiv"),
        r = t("cmvpZ");
    t("fywoC");
    var a = t("dbbFP"),
        l = t("e3N7l");
    var u = e => {
        const {
            title: t,
            description: o
        } = (0, l.default)(e.hook), n = e.hook.options;
        return (0, i.jsx)(a.default, {
            title: t,
            description: o,
            value: e.value,
            onValueChanged: t => {
                !(0, r.isNil)(t) || (0, r.isNil)(n.defaultValue) ? e.onChange(t): e.onChange(n.defaultValue)
            },
            min: n.min,
            max: n.max,
            step: n.step,
            allowEmpty: !0,
            readOnly: e.readOnly
        })
    }
})), t.register("lPp5C", (function(o, n) {
    e(o.exports, "default", (function() {
        return l
    }));
    var i = t("hxEiv");
    t("fywoC");
    var r = t("36y6c"),
        a = t("e3N7l");
    var l = e => {
        const {
            title: t,
            description: o
        } = (0, a.default)(e.hook), n = e.hook.options;
        return (0, i.jsx)(r.default, {
            title: t,
            description: o,
            value: e.value,
            onValueChanged: e.onChange,
            options: n.options.map((e => ({
                value: e,
                name: e
            }))),
            readOnly: e.readOnly
        })
    }
})), t.register("fMJkl", (function(o, n) {
    e(o.exports, "default", (function() {
        return u
    }));
    var i = t("cmvpZ"),
        r = t("f9d7r"),
        a = t("ijMF4"),
        l = t("8KPyf");
    var u = (e, t) => {
        const o = [];
        return (0, l.default)({
            ...e,
            location: a.HookFormLocation.editor
        }, t).forEach((e => {
            e.type === r.HookType.kit && t[e.key] && o.push({
                type: a.IHookConnectedResourceType.kit,
                value: t[e.key]
            })
        })), (0, i.uniqBy)(o, "value")
    }
})), t.register("8KPyf", (function(o, n) {
    e(o.exports, "default", (function() {
        return l
    }));
    var i = t("lQVxa"),
        r = t("f9d7r"),
        a = t("ijMF4");
    var l = (e, t) => {
        var o, n;
        const l = [];
        return null == e || null === (o = e.hooks) || void 0 === o || null === (n = o.hooks) || void 0 === n || n.forEach((o => {
            var n;
            if (o.type === r.HookType.kit) {
                if (!!t[o.key] && e.location === a.HookFormLocation.experiencePicker) return
            }
            if (o.type === r.HookType.selectBox) {
                var u;
                const e = o.options;
                if (!(null == e || null === (u = e.options) || void 0 === u ? void 0 : u.length)) return
            }(null == o || null === (n = o.hiddenScenarios) || void 0 === n ? void 0 : n.find((o => {
                var n, r;
                if (!!!(null === (n = o.conditions) || void 0 === n ? void 0 : n.length)) return !1;
                return !!(null === (r = o.conditions) || void 0 === r ? void 0 : r.every((o => {
                    if (o.type === i.HiddenConditionType.hookValue) {
                        const e = o.options,
                            n = e.value,
                            r = t[e.key];
                        if (e.compare === i.HookValueHiddenConditionCompare.equal) {
                            if (n == r) return !0
                        } else if (e.compare === i.HookValueHiddenConditionCompare.notEqual && n != r) return !0
                    } else if (o.type === i.HiddenConditionType.modeType) {
                        const t = e.modeType,
                            n = o.options;
                        return n.compare === i.ModeTypeHiddenConditionCompare.equal ? t === n.mode : t !== n.mode
                    }
                    return !1
                })))
            }))) || l.push(o)
        })), l
    }
})), t.register("lQVxa", (function(t, o) {
    let n;
    var i;
    let r;
    var a;
    let l;
    var u;
    e(t.exports, "HiddenConditionType", (function() {
        return n
    })), e(t.exports, "HookValueHiddenConditionCompare", (function() {
        return r
    })), e(t.exports, "ModeTypeHiddenConditionCompare", (function() {
        return l
    })), (i = n || (n = {})).hookValue = "hookValue", i.modeType = "modeType", (a = r || (r = {})).equal = "EQUAL", a.notEqual = "NOT_EQUAL", (u = l || (l = {})).equal = "EQUAL", u.notEqual = "NOT_EQUAL"
}));