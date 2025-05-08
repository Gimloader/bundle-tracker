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
        return _A;
    });
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....'), n = c('.....'), o = c('.....'), p = c('.....'), q = c('.....'), r = c('.....'), s = c('.....'), t = c('.....'), u = c('.....');
    let v, w, x, y = z => z;
    const z = [
        {
            param: 'locker',
            screen: j.CosmosScreen.locker
        },
        {
            param: 'shop',
            screen: j.CosmosScreen.shop
        },
        {
            param: 'season-ticket',
            screen: j.CosmosScreen.seasonTicket
        },
        {
            param: 'pack',
            screen: j.CosmosScreen.pack
        }
    ];
    var _A = () => {
        const {id: B} = (0, p.useParams)(), C = h.useMemo(() => {
                var D;
                if (!B)
                    return j.CosmosScreen.xp;
                return (null === (D = z.find(E => E.param === B)) || void 0 === D ? void 0 : D.screen) || !1;
            }, [B]);
        return C ? (0, g.jsx)(_B, {
            id: u.CosmosElementIds.container,
            children: (0, g.jsxs)(t.default, {
                children: [
                    (0, g.jsx)(l.default, {
                        theme: m.SiteHeaderTheme.dark,
                        includeSpacer: !0,
                        hideBorder: !0,
                        containerDivStyle: { backdropFilter: 'blur(4px)' },
                        children: (0, g.jsx)(n.default, {
                            theme: m.SiteHeaderTheme.dark,
                            rightSideContent: (0, g.jsx)(r.default, {}),
                            bottomContent: (0, g.jsx)('div', { style: { height: 9 } }),
                            options: [
                                {
                                    id: j.CosmosScreen.xp,
                                    label: s.CosmosNavigationScreenToInfo[j.CosmosScreen.xp].title,
                                    path: q.COSMOS_BASE,
                                    icon: (0, g.jsx)(o.default, { name: s.CosmosNavigationScreenToInfo[j.CosmosScreen.xp].icon })
                                },
                                {
                                    id: j.CosmosScreen.seasonTicket,
                                    label: s.CosmosNavigationScreenToInfo[j.CosmosScreen.seasonTicket].title,
                                    path: `${ q.COSMOS_BASE }/season-ticket`,
                                    icon: (0, g.jsx)(o.default, { name: s.CosmosNavigationScreenToInfo[j.CosmosScreen.seasonTicket].icon })
                                },
                                {
                                    id: j.CosmosScreen.locker,
                                    label: s.CosmosNavigationScreenToInfo[j.CosmosScreen.locker].title,
                                    path: `${ q.COSMOS_BASE }/locker`,
                                    icon: (0, g.jsx)(o.default, { name: s.CosmosNavigationScreenToInfo[j.CosmosScreen.locker].icon })
                                },
                                {
                                    id: j.CosmosScreen.shop,
                                    label: s.CosmosNavigationScreenToInfo[j.CosmosScreen.shop].title,
                                    path: `${ q.COSMOS_BASE }/shop`,
                                    icon: (0, g.jsx)(o.default, { name: s.CosmosNavigationScreenToInfo[j.CosmosScreen.shop].icon })
                                }
                            ]
                        })
                    }),
                    (0, g.jsx)(_C, {
                        id: u.CosmosElementIds.content,
                        children: (0, g.jsx)(_D, {
                            children: (0, g.jsx)(i.default, {
                                screen: C,
                                pageMode: !0
                            })
                        })
                    })
                ]
            })
        }) : (0, g.jsx)(p.Navigate, {
            replace: !0,
            to: q.COSMOS_BASE
        });
    };
    const _B = k.default.div.attrs({ className: 'flex-column' })(v || (v = y`
  flex: 1;
`)), _C = k.default.div.attrs({ className: 'flex-column vc' })(w || (w = y`
  backdrop-filter: blur(4px);
  flex: 1;
`)), _D = k.default.div.attrs({ className: 'flex-column' })(x || (x = y`
  width: 90%;
  max-width: 90%;
  padding: 30px 0px;
  padding-bottom: 100px;
  flex: 1;
`));
}), c.register('.....', function (d, e) {
    let f;
    var g;
    a(d.exports, 'CosmosScreen', function () {
        return f;
    }), (g = f || (f = {})).xp = 'xp', g.locker = 'locker', g.seasonTicket = 'seasonTicket', g.shop = 'shop', g.pack = 'pack';
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l, m, n = o => o;
    var _o = p => {
        const q = g.useMemo(() => {
                var r;
                return null !== (r = p.theme) && void 0 !== r ? r : i.SiteHeaderTheme.light;
            }, [p.theme]), r = g.useMemo(() => {
                var s;
                return null !== (s = p.alpha) && void 0 !== s ? s : j.SiteHeaderAlpha.standard;
            }, [p.alpha]), s = g.useMemo(() => {
                const t = r === j.SiteHeaderAlpha.none ? 1 : q === i.SiteHeaderTheme.light ? 0.85 : 0.45;
                return q === i.SiteHeaderTheme.light ? `rgba(255, 255, 255, ${ t })` : `rgba(16, 16, 16, ${ t })`;
            }, [
                q,
                r
            ]), t = g.useMemo(() => q === i.SiteHeaderTheme.light ? 'rgb(235, 238, 241)' : 'rgb(143 143 143 / 60%)', [q]);
        return (0, f.jsxs)(_p, {
            background: s,
            borderColor: t,
            children: [
                (0, f.jsxs)(_q, {
                    children: [
                        (0, f.jsx)(k.default, {
                            options: p.options,
                            selectedOption: p.selectedOption,
                            theme: q
                        }),
                        (0, f.jsx)('div', { children: p.rightSideContent })
                    ]
                }),
                p.bottomContent
            ]
        });
    };
    const _p = h.default.div.attrs({ className: 'maxWidth' })(l || (l = n`
  background: ${ 0 };
  padding: 7px 25px;
  backdrop-filter: blur(4px);
  box-shadow: inset 0 -1px ${ 0 };
`), q => q.background, q => q.borderColor), _q = h.default.div.attrs({ className: 'maxWidth flex vc between' })(m || (m = n``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    let j;
    var _k = l => (0, f.jsx)(_l, {
        children: (0, f.jsx)(g.default, {
            direction: 'horizontal',
            size: 8,
            wrap: !0,
            children: l.options.map(m => (0, f.jsx)(h.default, {
                option: m,
                selected: l.selectedOption === m.id,
                theme: l.theme
            }, `option-${ m.id }`))
        })
    });
    const _l = i.default.div.attrs({ className: 'scroll-x' })(j || (j = (m => m)`
  flex: 1;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....'), l = c('.....'), m = c('.....');
    let n;
    var _o = p => {
        const {
                theme: q,
                option: r
            } = p, {pathname: s} = (0, l.useLocation)(), {
                label: t,
                icon: u,
                path: v,
                otherMatchingPaths: w
            } = r, x = (() => {
                if (v) {
                    if ((0, k.matchPath)({ path: v }, s))
                        return !0;
                    if ((null == w ? void 0 : w.length) && w.some(y => (0, k.matchPath)({ path: y }, s)))
                        return !0;
                }
                return !1;
            })(), y = g.useMemo(() => !!x || p.selected, [
                x,
                p.selected
            ]), z = g.useMemo(() => y ? '#1677ff' : 'transparent', [
                q,
                y
            ]), A = g.useMemo(() => y ? j.default.White : q === h.SiteHeaderTheme.light ? 'rgb(26, 27, 37)' : j.default.White, [
                q,
                y
            ]), B = g.useMemo(() => y ? z : q === h.SiteHeaderTheme.light ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)', [
                q,
                y,
                z
            ]);
        return (0, f.jsx)(m.default, {
            to: v,
            target: p.option.target,
            onClick: r.onSelect,
            style: { cursor: 'pointer' },
            children: (0, f.jsxs)(_p, {
                background: z,
                color: A,
                hoverBackground: B,
                children: [
                    u ? (0, f.jsx)('span', {
                        style: {
                            marginRight: 6,
                            fontSize: '0.9em'
                        },
                        children: u
                    }) : null,
                    t
                ]
            })
        });
    };
    const _p = i.default.div.attrs({ className: 'flex-center' })(n || (n = (q => q)`
  line-height: 1;
  padding: 6px 12px;
  border-radius: 50px;
  background: ${ 0 };
  white-space: nowrap;
  color: ${ 0 };
  font-size: 15px;
  cursor: pointer;
  transition: background 0.14s ease-in-out;
  &:hover {
    background: ${ 0 };
  }
`), q => q.background, q => q.color, q => q.hoverBackground);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _m;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....'), k = c('.....');
    let l;
    var _m = () => {
        const {data: n} = (0, k.default)();
        return n ? (0, f.jsx)(_n, {
            children: (0, f.jsx)(g.default, {
                amount: n.currency,
                size: 16
            })
        }) : null;
    };
    const _n = h.default.div(l || (l = (o => o)`
  margin-left: 20px;
  font-family: ${ 0 };
  color: ${ 0 };
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
`), i.Fonts.FugazOne, j.default.White);
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....'), j = c('.....');
    let k, l, m, n = o => o;
    var _o = p => {
        const q = p.size || 18, r = Math.ceil(1.22 * q), s = Math.floor(q / 3), t = { height: r };
        return p.grayscale && (t.filter = 'grayscale(1)'), (0, f.jsxs)(_p, {
            style: { fontSize: p.size },
            children: [
                (0, f.jsx)(_q, {
                    draggable: !1,
                    style: t
                }),
                (0, f.jsx)(_r, {
                    style: { marginLeft: s },
                    children: (0, i.numberWithCommas)(p.amount)
                })
            ]
        });
    };
    const _p = g.default.div.attrs({ className: 'flex vc' })(k || (k = n``)), _q = g.default.img.attrs({ src: (0, h.default)('cosmos/currency_v2.svg') })(l || (l = n``)), _r = g.default.div(m || (m = n`
  line-height: 1;
  font-weight: ${ 0 };
  margin-top: 0.15em;
`), j.FontWeights.Bold);
}), c.register('.....', function (d, e) {
    let f;
    a(d.exports, 'default', function () {
        return _g;
    });
    var _g = h => {
        const i = (() => {
            var j;
            if (f)
                return f;
            const k = null === (j = document.querySelector('meta[property="cdn-map-assets-url"]')) || void 0 === j ? void 0 : j.getAttribute('content');
            return void 0 !== k && '$CDN_MAP_ASSETS_URL' !== k ? (f = k, f) : '';
        })();
        return h.startsWith('/assets/map') ? `${ i }${ h }` : `${ i }/assets/map/${ h }`;
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'invalidateCosmosBasics', function () {
        return _j;
    }), a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    const i = ['cosmos-basics'], _j = () => h.default.invalidateQueries(i);
    var _k = () => (0, f.useQuery)(i, () => (0, g.requestAsPromise)({ url: '/api/cosmos/basics' }), { staleTime: 20000 });
}), c.register('.....', function (d, e) {
    a(d.exports, 'CosmosNavigationScreenToInfo', function () {
        return _j;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....'), h = c('.....'), i = c('.....');
    const _j = {
        [h.CosmosScreen.xp]: {
            title: 'Home',
            icon: 'fas fa-home'
        },
        [h.CosmosScreen.locker]: {
            title: 'Locker',
            icon: 'fas fa-th-large'
        },
        [h.CosmosScreen.seasonTicket]: {
            title: (0, f.jsxs)('div', {
                className: 'flex vc',
                children: [
                    (0, f.jsx)('div', { children: g.SeasonTicketName.name }),
                    (0, f.jsx)('div', {
                        style: {
                            fontSize: '0.7em',
                            padding: '0.3em 0.5em',
                            borderRadius: 50,
                            fontWeight: i.FontWeights.Bold,
                            background: '#009933',
                            marginLeft: '0.5em'
                        },
                        children: 'New!'
                    })
                ]
            }),
            icon: 'fas fa-ticket-alt'
        },
        [h.CosmosScreen.shop]: {
            title: 'Shop',
            icon: 'fas fa-store'
        }
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'SeasonTicketName', function () {
        return _f;
    }), a(d.exports, 'SeasonTicketSeason', function () {
        return _g;
    });
    const _f = {
            name: 'Season Ticket',
            singularName: 'ticket'
        }, _g = {
            seasonYear: '2025',
            seasonName: 'Season',
            seasonNumber: '3'
        };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _k;
    });
    var f = c('.....');
    c('.....');
    var g = c('.....');
    let h, i, j = k => k;
    var _k = l => (0, f.jsxs)(_l, {
        children: [
            (0, f.jsx)(_m, { children: l.children }),
            (0, f.jsx)('div', {
                className: 'area',
                children: (0, f.jsxs)('ul', {
                    className: 'circles',
                    children: [
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {}),
                        (0, f.jsx)('li', {})
                    ]
                })
            })
        ]
    });
    const _l = g.default.div(h || (h = j`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .area {
    background: #4527a0;
    background: linear-gradient(304deg, #4527a0, #2d1a68);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(180deg); // Make the circles go the other way
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`)), _m = g.default.div.attrs({ className: 'flex-column' })(i || (i = j`
  z-index: 1;
  flex: 1;
`));
}), c.register('.....', function (d, e) {
    a(d.exports, 'CosmosElementIds', function () {
        return _f;
    });
    const _f = {
        container: 'cosmos-container',
        content: 'cosmos-content'
    };
}), c.register('.....', function (d, e) {
    a(d.exports, 'default', function () {
        return _r;
    });
    var f = c('.....'), g = c('.....'), h = c('.....');
    c('.....');
    var i = c('.....'), j = c('.....'), k = c('.....'), l = 44;
    function m(n) {
        var o, p, q;
        return o = n, p = 0, q = 1, n = (Math.min(Math.max(p, o), q) - p) / (q - p), n = (n -= 1) * n * n + 1;
    }
    var q = h.forwardRef(function (r, s) {
            var t, u = r.classes, v = r.className, w = r.color, x = void 0 === w ? 'primary' : w, y = r.disableShrink, z = void 0 !== y && y, A = r.size, B = void 0 === A ? 40 : A, C = r.style, D = r.thickness, E = void 0 === D ? 3.6 : D, F = r.value, G = void 0 === F ? 0 : F, H = r.variant, I = void 0 === H ? 'indeterminate' : H, J = (0, g.default)(r, [
                    'classes',
                    'className',
                    'color',
                    'disableShrink',
                    'size',
                    'style',
                    'thickness',
                    'value',
                    'variant'
                ]), K = {}, L = {}, M = {};
            if ('determinate' === I || 'static' === I) {
                var N = 2 * Math.PI * ((l - E) / 2);
                K.strokeDasharray = N.toFixed(3), M['aria-valuenow'] = Math.round(G), 'static' === I ? (K.strokeDashoffset = ''.concat(((100 - G) / 100 * N).toFixed(3), 'px'), L.transform = 'rotate(-90deg)') : (K.strokeDashoffset = ''.concat((t = (100 - G) / 100, t * t * N).toFixed(3), 'px'), L.transform = 'rotate('.concat((270 * m(G / 70)).toFixed(3), 'deg)'));
            }
            return h.createElement('div', (0, f.default)({
                className: (0, i.default)(u.root, v, 'inherit' !== x && u['color'.concat((0, k.default)(x))], {
                    indeterminate: u.indeterminate,
                    static: u.static
                }[I]),
                style: (0, f.default)({
                    width: B,
                    height: B
                }, L, C),
                ref: s,
                role: 'progressbar'
            }, M, J), h.createElement('svg', {
                className: u.svg,
                viewBox: ''.concat(22, ' ').concat(22, ' ').concat(l, ' ').concat(l)
            }, h.createElement('circle', {
                className: (0, i.default)(u.circle, z && u.circleDisableShrink, {
                    indeterminate: u.circleIndeterminate,
                    static: u.circleStatic
                }[I]),
                style: K,
                cx: l,
                cy: l,
                r: (l - E) / 2,
                fill: 'none',
                strokeWidth: E
            })));
        }), _r = (0, j.default)(function (s) {
            return {
                root: { display: 'inline-block' },
                static: { transition: s.transitions.create('transform') },
                indeterminate: { animation: '$circular-rotate 1.4s linear infinite' },
                colorPrimary: { color: s.palette.primary.main },
                colorSecondary: { color: s.palette.secondary.main },
                svg: { display: 'block' },
                circle: { stroke: 'currentColor' },
                circleStatic: { transition: s.transitions.create('stroke-dashoffset') },
                circleIndeterminate: {
                    animation: '$circular-dash 1.4s ease-in-out infinite',
                    strokeDasharray: '80px, 200px',
                    strokeDashoffset: '0px'
                },
                '@keyframes circular-rotate': {
                    '0%': { transformOrigin: '50% 50%' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                '@keyframes circular-dash': {
                    '0%': {
                        strokeDasharray: '1px, 200px',
                        strokeDashoffset: '0px'
                    },
                    '50%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-15px'
                    },
                    '100%': {
                        strokeDasharray: '100px, 200px',
                        strokeDashoffset: '-125px'
                    }
                },
                circleDisableShrink: { animation: 'none' }
            };
        }, {
            name: 'MuiCircularProgress',
            flip: !1
        })(q);
}), c.register('.....', function (d, e) {
    let f;
    var g;
    let h;
    var i;
    let j;
    var k;
    a(d.exports, 'CosmeticType', function () {
        return f;
    }), a(d.exports, 'CosmeticRarity', function () {
        return h;
    }), a(d.exports, 'CosmeticStyleCategoryType', function () {
        return j;
    }), (g = f || (f = {})).character = 'character', g.sticker = 'sticker', g.trail = 'trail', (i = h || (h = {})).common = 'common', i.uncommon = 'uncommon', i.rare = 'rare', i.epic = 'epic', i.legendary = 'legendary', i.mythic = 'mythic', (k = j || (j = {})).color = 'color', k.select = 'select';
}), c.register('.....', function (d, e) {
    a(d.exports, 'Centered', function () {
        return _l;
    }), a(d.exports, 'VerticallyCentered', function () {
        return _m;
    }), a(d.exports, 'CenteredColumn', function () {
        return _n;
    }), a(d.exports, 'VerticalCentered', function () {
        return _o;
    });
    var f = c('.....');
    let g, h, i, j, k = l => l;
    const _l = f.default.div.attrs({ className: 'flex-center' })(g || (g = k``)), _m = f.default.div.attrs({ className: 'flex vc' })(h || (h = k``)), _n = (0, f.default)(_l).attrs({ className: 'flex-column' })(i || (i = k``)), _o = f.default.div.attrs({ className: 'flex vc' })(j || (j = k``));
}), c.register('.....', function (d, e) {
    a(d.exports, 'Provider', function () {
        return _n;
    }), a(d.exports, 'default', function () {
        return _o;
    });
    var f = c('.....'), g = '__wrap_b', h = '__wrap_o', i = 'undefined' == typeof window ? b(f).useEffect : b(f).useLayoutEffect, j = (k, l, m) => {
            let n = (m = m || document.querySelector(`[data-br="${ k }"]`)).parentElement, o = p => m.style.maxWidth = p + 'px';
            m.style.maxWidth = '';
            let p, q = n.clientWidth, r = n.clientHeight, s = q / 2 - 0.25, t = q + 0.5;
            if (q) {
                for (; s + 1 < t;)
                    p = Math.round((s + t) / 2), o(p), n.clientHeight === r ? t = p : s = p;
                o(t * l + q * (1 - l));
            }
            m.__wrap_o || (m.__wrap_o = new ResizeObserver(() => {
                self.__wrap_b(0, +m.dataset.brr, m);
            })).observe(n);
        }, k = j.toString(), l = (m, n = '') => b(f).createElement('script', {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: (m ? '' : `self.${ g }=${ k };`) + n }
        }), m = b(f).createContext(!1), _n = ({children: o}) => b(f).createElement(m.Provider, { value: !0 }, l(!1), o), _o = ({
            as: p = 'span',
            ratio: q = 1,
            children: r,
            ...s
        }) => {
            let t = b(f).useId(), u = b(f).useRef(), v = b(f).useContext(m);
            return i(() => {
                u.current && (self[g] = j)(0, q, u.current);
            }, [
                r,
                q
            ]), i(() => () => {
                if (!u.current)
                    return;
                let w = u.current[h];
                !w || (w.disconnect(), delete u.current[h]);
            }, []), b(f).createElement(b(f).Fragment, null, b(f).createElement(p, {
                ...s,
                'data-br': t,
                'data-brr': q,
                ref: u,
                style: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    textDecoration: 'inherit'
                },
                suppressHydrationWarning: !0
            }, r), l(v, `self.${ g }("${ t }",${ q })`));
        };
});